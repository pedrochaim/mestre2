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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Sega",
      "descricao": "Empresa japonesa de videogames, criadora do Mega Drive e do Sonic."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da empresa Sega é a abreviação de qual expressão em inglês, que era o nome original da companhia?",
    "resposta": "Service Games",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sega"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sega",
        "situacao": "ok",
        "texto": "Sega Corporation is a Japanese video game company and subsidiary of Sega Sammy Holdings headquartered in Tokyo. It produces several multi-million-selling game franchises for arcades and consoles including Sonic the Hedgehog, Angry Birds, Football Manager, Phantasy Star, Puyo Puyo, Super Monkey Ball, Bayonetta, Total War, Virtua Fighter, Megami Tensei, Sakura Wars, Persona, and Yakuza. From 1983 un\n[…]\nSega was founded by Martin Bromley and Richard Stewart as Nihon Goraku Bussan on June 3, 1960. Shortly after, it acquired the assets of its predecessor, Service Games of Japan. In 1965, it became known as Sega Enterprises, Ltd., after acquiring Rosen Enterprises, an importer of coin-operated games. Sega developed its first coin-operated game, Periscope, in 1966. Sega was sold to Gulf and Western Industries in 1969.\n[…]\nThe name Sega, an abbreviation of Service Games, was first used in 1954 on a slot machine, the Diamond Star.\n[…]\nDue to notoriety arising from investigations by the US government into criminal business practices, Service Games of Japan was dissolved on May 31, 1960. On June 3, Bromley established two companies to take over its business activities, Nihon Goraku Bussan and Nihon Kikai Seizō. The two new companies purchased all of Service Games of Japan's assets. Kikai Seizō, doing business as Sega, Inc., focused on manufacturing slot machines.\n[…]\nThe company includes Sega Networks, which handles game development for smartphones. Sega Corporation develops and publishes games for major video game consoles and has not expressed interest in developing consoles again. According to former Sega Europe CEO Mike Brogan, \"There is no future in selling hardware. In any market, through competition, the hardware eventually becomes a commodity ...\n[…]\nIts DartsLive subsidiary creates electronic darts games, while Sega Logistics Service distributes and repairs arcade games.\n[…]\nLists of Sega games"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sega",
        "situacao": "ok",
        "texto": "Sega Corporation (株式会社セガ, Kabushiki Gaisha Sega) é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Tóquio, possuindo ramos internacionais sediados em Irvine nos Estados Unidos e em Londres no Reino Unido.\n[…]\nA empresa foi fundada em 1960 pelo norte-americano Martin Bromley, originalmente como duas companhias separadas chamadas Nihon Goraku Bussan e Nihon Kikai Seizō, que tinham a intenção de assumir os negócios da antiga Service Games of Japan, uma empresa especializada em máquinas caça-níqueis para bases militares.\n[…]\nOs cinco fundaram um ano depois a Service Games Panama para controlar todas as entidades da Service Games no mundo. A companhia se expandiu pelos sete anos seguintes para incluir distribuição na Coreia do Sul, Filipinas e Vietnã do Sul. O nome Sega, abreviação de Service Games, foi usado pela primeira vez em 1954 no caça-níquel Diamond Star.\n[…]\nA Service Games of Japan foi dissolvida em 31 de maio de 1960 devido a notoriedade cada vez maior de investigações sobre práticas comerciais criminosas. Em 3 de junho, Bromley estabeleceu duas empresas para assumirem as mesmas atividades: a Nihon Goraku Bussan e a Nihon Kikai Seizō. As duas compraram todos os ativos da Service Games of Japan. A Nihon Kikai Seizō, que adotou o nome comercial Sega, Inc., focou-se na produção de caça-níqueis.\n[…]\nfoi fundada para assumir o controle da divisão de arcades. A Sega Networks foi fundida de volta com a Sega Games no mesmo ano. A companhia anunciou durante a Tokyo Game Show de 2016 que tinha adquirido a propriedade intelectual e direitos de desenvolvimento de todos os títulos produzidos e publicados pela antiga Technosoft.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Sega",
      "descricao": "Empresa japonesa de videogames, criadora do Mega Drive e do Sonic."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos anos oitenta e noventa, que empresa brasileira foi a parceira da Sega no país, fabricando aqui o Master System e o Mega Drive?",
    "resposta": "Tectoy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tectoy",
      "https://pt.wikipedia.org/wiki/Tectoy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tectoy",
        "situacao": "ok",
        "texto": "Tec Toy S.A., trading as Tectoy since 1997, is a Brazilian toy and electronics company headquartered in São Paulo. It is best known for producing, publishing, and distributing Sega consoles and video games in Brazil. The company was founded by Daniel Dazcal, Leo Kryss, and Abe Kryss in 1987 because Dazcal saw an opportunity to develop a market for electronic toys and video games, product categorie\n[…]\nSoon after its founding, Tectoy completed a licensing agreement with Sega allowing it to market a laser gun game based on the Japanese anime Zillion, which sold more units in Brazil than in Japan. Tectoy would later bring the Master System and Mega Drive to the region, as well as Sega's later video game consoles and the Sega Meganet service.\n[…]\nOver a year after the launch of the Master System, Tectoy officially brought Sega's 16-bit console, the Mega Drive, to Brazil in December 1990. Sega's handheld console, Game Gear, was later released in August 1991. Like the Master System, the two products were assembled by Tectoy in Manaus, and Game Gear was the first portable console manufactured in Brazil.\n[…]\nTectoy is known for their handling and distribution of Sega consoles in Brazil. The company has sold all of Sega's consoles since 1987, including the Master System, Mega Drive, 32X, Sega CD, Game Gear, Saturn, Sega Pico, and Dreamcast, in addition to the Zillion laser tag gun.\n[…]\nAdditionally, Tectoy ported games for their Sega systems, such as Street Fighter II: Champion Edition for the Master System and Duke Nukem 3D for the Mega Drive, as well as various games ported from the Game Gear to the more popular Master System. Aside from porting, the company developed Férias Frustradas do Pica-Pau after finding out that Woody Woodpecker was the most popular cartoon on Brazilian television. These titles were developed in-house by Tectoy in Brazil.\n[…]\nOfficial Tectoy site (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tectoy",
        "situacao": "ok",
        "texto": "Tectoy (anteriormente grafada como Tec Toy) é uma empresa brasileira de equipamentos eletrônicos de consumo, conhecida principalmente por seu trabalho no desenvolvimento e comercialização de consoles e jogos eletrônicos.\n[…]\nFundada em 18 de setembro de 1987, por Daniel Dazcal, seu objetivo inicial era a fabricação de brinquedos de alta tecnologia, um mercado até então pouco explorado no Brasil. Durante os primeiros anos, a parceria com a Sega, empresa japonesa de jogos e consoles, conduziu seu crescimento com a popularidade do Master System e do Mega Drive no país.\n[…]\nPouco mais de um ano após o lançamento do Master System, a Tectoy trouxe oficialmente para o Brasil o seu sucessor, o Mega Drive, em dezembro de 1990. O portátil da Sega, Game Gear, também foi lançado, em agosto de 1991. Assim como o Master System, os dois produtos iniciaram suas vendas já sendo montados em Manaus, sendo que o Game Gear foi o primeiro console portátil fabricado no país. Ao final de 1990, os três consoles da Sega garantiam à Tec Toy 70% do mercado brasileiro.\n[…]\nA empresa vem apostando na nostalgia para trazer de volta ao mercado consoles que eram vendidos na década de 1980 e 1990. Em março de 2017, a Tectoy lançou o Atari Flashback 7, uma versão do Atari 2600, com 101 jogos na memória, mas sem suporte a cartuchos. Na esteira do retrô, foi lançado em seguida o Mega Drive com entrada para cartão SD com jogos, o Master System e o Atari portátil.\n[…]\nA Tectoy também foi responsável pelo desenvolvimento completo de jogos, como Férias Frustradas do Pica-Pau e Show do Milhão para Mega Drive, além de portar Street Fighter II e Duke Nukem 3D para o Master System e Mega Drive, respectivamente.\n[…]\nMega Drive\n[…]\nTectoy\n[…]\nTectoy (página institucional)"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Mario",
      "descricao": "Personagem encanador da Nintendo, mascote da empresa, criado por Shigeru Miyamoto."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O encanador da Nintendo ganhou o nome de Mario em homenagem a um empresário americano. Que relação esse homem tinha com a Nintendo?",
    "resposta": "Era o locador do armazém da empresa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario",
      "https://en.wikipedia.org/wiki/Mario_Segale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario",
        "situacao": "ok",
        "texto": "Mario ( ; Japanese: マリオ) is a character created by Japanese video game designer Shigeru Miyamoto. He is the star of the Mario franchise, a recurring character in the Donkey Kong franchise, and the mascot of their owner, the Japanese company Nintendo. Mario is an Italian-American plumber who lives in the Mushroom Kingdom with his younger twin brother, Luigi. Their adventures generally involve rescu\n[…]\n35th anniversary, Nintendo re-released Super Mario 3D World on the Switch with a companion game, Bowser's Fury.\n[…]\nThe Mario's Picross series was an attempt by Nintendo to capitalize on the popularity of Mario and the success of puzzle games in Japan at the time. Released in 1995, the game was popular and was followed by two sequels, Mario's Super Picross and Picross 2, but the first game was only made available to American audiences in 2020.\n[…]\nMario appeared in a book series, the Nintendo Adventure Books. The other two animated series, The Adventures of Super Mario Bros. 3 and Super Mario World, star Walker Boone as Mario and Tony Rosato as Luigi.\n[…]\nIn March 2024, American actor Gaten Matarazzo teamed up with Nintendo to celebrate that year's Mario Day. For the celebration of Mario Day in 2026, GameStop hosts a promotional event at its Manhattan store located at 32 East 14th Street in New York City. The event takes place on March 10 from 4:00 p.m. to 8:00 p.m. In the event, participants gather and dress as Mario in an attempt to set a world record for the largest gathering of individuals wearing Mario's costume.\n[…]\nA Mario balloon was featured as part of the 2025 Macy's Thanksgiving Day Parade. Designed in a pose reminiscent to how he flies in Super Mario Galaxy, Nintendo of America's EVP of revenue, marketing, and consumer experience Devon Pritchard stated that the decision for Mario to join the parade was \"to honour the 40th anniversary of Super Mario Bros.\".\n[…]\nMario on IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mario_Segale",
        "situacao": "ok",
        "texto": "Mario Arnold Segale (April 30, 1934 – October 27, 2018) was an Italian-American businessman and real estate developer. He was involved in various development projects in the Seattle area from the 1950s onwards. Nintendo's mascot, Mario, was named after Segale while he was leasing a warehouse to Nintendo.\n[…]\nThe video game company Nintendo began renting one of Segale's Tukwila warehouses in 1981 for use as their American headquarters. According to a widely circulated story first published in David Sheff's 1993 book Game Over, during development of the arcade game Donkey Kong, Segale visited the warehouse to collect overdue rent from Nintendo of America president Minoru Arakawa and berated him in front of employees.\n[…]\nHowever, Segale gave them time to come up with the money for rent, and Arakawa and the other developers subsequently renamed the Donkey Kong player character to Mario, who was previously known as Jumpman. This story is contradicted by former Nintendo of America warehouse manager Don James, who stated in 2012 that he and Arakawa named the character after Segale as a joke because Segale was so reclusive that none of the employees had ever met him. James repeated this account in 2018.\n[…]\nDue to a spelling error in Sheff's Game Over, for years it was thought that Segale's last name was spelled \"Segali\". Sheff's story of the naming of Mario later appeared in Steven L. Kent's The Ultimate History of Video Games in 2001, and thereafter spread widely on the internet. Mario's creator, Shigeru Miyamoto, confirmed in 2015 that Mario was indeed named after Segale, without specifying the story behind the naming."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_%28personagem%29",
        "situacao": "ok",
        "texto": "Mario ([ˈmɑːrioʊ,_ˈmærioʊ]; em japonês: マリオ) é um personagem fictício da franquia e série de jogos eletrônicos Mario da Nintendo, criado pelo desenvolvedor e designer de jogos eletrônicos japonês Shigeru Miyamoto. Servindo como mascote da Nintendo e protagonista homônimo da série, Mario já apareceu em mais de 200 jogos desde sua criação.\n[…]\nMario é retratado como um encanador corpulento que vive na terra fictícia do Reino do Cogumelo com Luigi, seu irmão gêmeo mais novo e mais alto. Na série de televisão e no filme, Mario e Luigi são originalmente de Brooklyn, Nova York. Pouco se sabe sobre a infância de Mario, embora a versão infantil de Mario, Baby Mario, tenha aparecido pela primeira vez em 1995 em Super Mario World 2: Yoshi's Island, e tenha aparecido frequentemente em jogos de esportes da Nintendo desde então.\n[…]\nA série New Super Mario Bros. teve uma continuação no 3DS, o New Super Mario Bros. 2, de 2012, e um port para o Nintendo Wii U, o New Super Mario Bros. U. O Wii U ganhou mais um jogo do Mario, o Super Mario 3D World, em 2013. Super Mario Maker, um jogo onde os usuários criam suas próprias fases com milhares de recursos disponíveis e publicam para outros jogarem, foi lançado em 2015 para o Wii U e em 2016 para o 3DS.\n[…]\nMario também tem diversos spin-offs, sendo o mais famoso deles a série de corrida Mario Kart, tendo o último jogo sendo o segundo mais vendido do Nintendo Switch, o Mario Kart 8 Deluxe. Outros spin-offs famosos são: Mario Tennis, Mario Golf, Mario Party, Paper Mario, Mario & Luigi, entre outros... Mario também é um dos diversos lutadores da série de luta em plataformas e um dos maiores crossovers dos videogames, Super Smash Bros., onde Mario é um dos principais e mais importantes personagens.\n[…]\nLista de personagens da série Mario",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Mario",
      "descricao": "Personagem encanador da Nintendo, mascote da empresa, criado por Shigeru Miyamoto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que limitação técnica dos gráficos de 1981 explica o fato de Mario usar boné?",
    "resposta": "Era difícil desenhar e animar cabelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario",
        "situacao": "ok",
        "texto": "Mario ( ; Japanese: マリオ) is a character created by Japanese video game designer Shigeru Miyamoto. He is the star of the Mario franchise, a recurring character in the Donkey Kong franchise, and the mascot of their owner, the Japanese company Nintendo. Mario is an Italian-American plumber who lives in the Mushroom Kingdom with his younger twin brother, Luigi. Their adventures generally involve rescu\n[…]\nMario debuted as the player character of Donkey Kong, a 1981 platform game. Miyamoto created Mario because Nintendo was unable to license Popeye as the protagonist. The graphical limitations of arcade hardware influenced Mario's design, such as his nose, mustache, and overalls, and he was named after Nintendo of America's landlord, Mario Segale. Mario then starred in Mario Bros. (1983).\n[…]\nMario usually saves Princess Peach and the Mushroom Kingdom and purges antagonists, such as Bowser, from various areas; since his first game, Mario has usually had the role of saving the damsel in distress. Originally, he had to rescue his girlfriend Pauline in Donkey Kong (1981) from Donkey Kong. Despite being replaced as Mario's love interest by Princess Peach in Super Mario Bros., a redesigned Pauline that first appeared in Donkey Kong (1994) has reappeared in the Mario vs.\n[…]\nDuring the development of Donkey Kong, Mario was known as Jumpman (ジャンプマン, Janpuman). Jumping—both to facilitate level traversal and as an offensive move—is a common gameplay element in Mario games, especially the Super Mario series. By the time Super Mario RPG was released, jumping became such a signature act of Mario that the player was often tasked with jumping to prove to non-player characters that he was Mario.\n[…]\nMario appeared in a book series, the Nintendo Adventure Books. The other two animated series, The Adventures of Super Mario Bros. 3 and Super Mario World, star Walker Boone as Mario and Tony Rosato as Luigi."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_%28personagem%29",
        "situacao": "ok",
        "texto": "Mario ([ˈmɑːrioʊ,_ˈmærioʊ]; em japonês: マリオ) é um personagem fictício da franquia e série de jogos eletrônicos Mario da Nintendo, criado pelo desenvolvedor e designer de jogos eletrônicos japonês Shigeru Miyamoto. Servindo como mascote da Nintendo e protagonista homônimo da série, Mario já apareceu em mais de 200 jogos desde sua criação.\n[…]\nEle veste uma camisa vermelha de mangas compridas, um macacão azul com botões amarelos, sapatos marrons, luvas brancas e um boné vermelho com um \"M\" vermelho impresso em um círculo branco. Em Donkey Kong, ele usava um macacão vermelho e uma camisa azul. Em Super Mario Bros., ele vestiu uma camisa marrom com macacão vermelho. Ele tem olhos azuis e, como Luigi, tem cabelos castanhos e bigode castanho-escuro ou preto.\n[…]\nEssa diferença consistente de cor é atribuída a ser uma relíquia do design dos personagens para suas plataformas originais, em que certas características foram ativamente distinguidas enquanto outras tiveram que ser reduzidas devido a limitações técnicas. Em uma entrevista de 2005, Miyamoto afirmou que a idade física de Mario era de cerca de 24-25 anos.\n[…]\nMario estreou como \"Jumpman\" no jogo de arcade Donkey Kong em 9 de julho de 1981. Ele é mostrado como um carpinteiro e tem um macaco de estimação chamado Donkey Kong. O carpinteiro maltrata o macaco, que então foge para sequestrar a namorada de Jumpman, originalmente conhecida como 'a senhora' (mais tarde chamada de Pauline). O jogador deve assumir o papel de Jumpman e resgatar a garota.\n[…]\nEm 2017, foi lançado o Super Mario Odyssey, para o atual principal console da Nintendo, o Nintendo Switch. O jogo fez um enorme sucesso, e foi comparado por alguns como uma continuação digna do clássico de Nintendo 64, o Super Mario 64. De acordo com a própria Nintendo, o jogo vendeu aprox. 12.17 milhões de cópias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tails",
      "descricao": "Raposa de duas caudas, parceira de Sonic nos jogos da Sega."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome completo de Tails, a raposa amiga de Sonic, é um trocadilho com a expressão inglesa milhas por hora. Qual é esse nome?",
    "resposta": "Miles Prower",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tails_(Sonic_the_Hedgehog)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tails_(Sonic_the_Hedgehog)",
        "situacao": "ok",
        "texto": "Tails (Japanese: テイルス, Hepburn: Teirusu), real name Miles Prower (マイルス・パウアー, Mairusu Pauā), is a character created by the Japanese game designer Yasushi Yamaguchi. He is a major character in Sega's Sonic the Hedgehog franchise. Tails is an anthropomorphic fox with two tails (hence his nickname) who serves as one of Sonic's main sidekicks. His full name, Miles Prower, is a pun on \"miles per hour\".\n[…]\nTails first appeared in the 1992 video game Sonic the Hedgehog 2. Yamaguchi designed Tails as part of an internal Sega Technical Institute competition to create a character to serve as a sidekick to Sonic. He wanted to name the character Miles Prower, but Sega of America staff resisted. They suggested the name Tails along with a backstory to explain it, which convinced Yamaguchi to acquiesce. Sega compromised by presenting Miles Prower as the character's name and Tails as his nickname.\n[…]\nAn internal contest was held to determine the new character; while Yamaguchi's design, a fox named \"Miles Prower\" (a pun on \"miles per hour\"), was the winning design, Sega of America felt the name would not sell and suggested \"Tails\" as an alternative. Marketing director Al Nilsen developed a character backstory to convince the developers to make the change; they compromised by making Tails his nickname.\n[…]\nWhile having a moment with Sonic, Tails expresses his self-doubt and belief that he is a burden to Sonic who is always rescuing him during crises, and that his helpfulness is wildly inconsistent, but Sonic comforts him by reminding Tails of his achievements and abilities and needing help sometimes is part of growing up, this strengthens Tails' resolve to go solo for a while and become a hero in his own right.\n[…]\nTails will appear in the 2027 film Sonic the Hedgehog 4, with O'Shaughnessey reprising her role.\n[…]\nTails at Sonic-City (archived)\n[…]\nTails at Sonic Channel (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tails",
        "situacao": "ok",
        "texto": "Miles Prower, mais conhecido pelo seu apelido Tails, e também referido como Miles \"Tails\" Prower é um personagem da série Sonic the Hedgehog e outras séries da Sega. Assim como muitos personagens da série, Tails foi baseado em um animal real. Tails é uma jovem raposa de pelo laranja-amarelado com branco, olhos azuis e dotado de duas caudas peludas e volumosas, sendo o principal aliado e melhor ami\n[…]\nSeu nome de batismo é Miles Prower, uma brincadeira feita com as palavras Miles Per Hour (Milhas por Hora), sendo Tails apenas um apelido em referência às suas duas caudas que o permitem voar. Tails é o terceiro personagem mais famoso entre os fãs mais atuais, perdendo apenas para Shadow e Sonic, segundo uma enquete oficial da Sega feita em 2009.\n[…]\nYasushi Yamaguchi criou Tails a fim de vencer um concurso para eleger um companheiro para Sonic. O seu personagem, uma raposa com múltiplas caudas em alusão ao mitológico kitsune, venceu, mas a Sonic Team decidiu modificar o nome do personagem de \"Miles Prower\" para Tails. Yamaguchi decidiu então chamá-lo de Miles, sendo Tails um apelido e Prower o seu sobrenome.\n[…]\nSeu game de origem foi Sonic the Hedgehog 2, para Master System e Game Gear, com a versão do jogo para Mega Drive sendo sua introdução como personagem jogável. A habilidade para voar de Tails foi apenas implantada em Sonic Chaos, e depois Sonic the Hedgehog 3.\n[…]\nInicialmente, ele era uma raposinha tímida e medrosa, mas após conhecer Sonic, isso mudou nele e ele se tornou mais feliz, sorridente e comunicativo. Com o passar do tempo, ele acabou aprendendo a confiar em si mesmo e se tornou mais independente de Sonic e bastante corajoso. Prower é muito inteligente e curioso, está sempre estudando sobre tudo que descobre e deixando sua criatividade o levar. Tails é uma raposa gentil, dócil, leal, otimista e as vezes pode ser bastante egoísta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Pokémon",
      "descricao": "Franquia japonesa de jogos, anime e cartas criada por Satoshi Tajiri e lançada em 1996."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra Pokémon é a contração de qual expressão em inglês?",
    "resposta": "Pocket Monsters",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with the eponymous creatures, a large variety of species endowed with special powers. The franchise's primary target audience is children aged 5 to 12, but it is known to attract people of a\n[…]\nThe budget that Nintendo granted to Game Freak was low; thus, Pocket Monsters was initially planned as a small, compact game, based primarily around Tajiri's core idea of exchanging. However, as development progressed, Game Freak's ideas and ambitions for Pokemon grew. They soon realized that the game they were beginning to envision would not be easy to make. Pocket Monsters was suspended indefinitely, and Game Freak turned their focus on other titles (see Game Freak § Games).\n[…]\nIshihara aspired to create video games of his own. As Pocket Monsters Red and Green were nearing completion, Ishihara founded Creatures, Inc. on 8 November 1995. Co-ownership of the Pokemon property, which Ishihara helped create, was subsequently assigned to Creatures. This resulted in Pokemon having three legal owners: Game Freak, the main developer; Creatures, representing producer Ishihara; and Nintendo, the publisher.\n[…]\nAt the time of Pokemon's release, the main CoroCoro magazine was read by one in four elementary school students. CoroCoro's deputy editor-in-chief was Masakazu Kubo. On Ishihara's suggestion, Kubo commissioned the creation of a manga adaptation, written and illustrated by Kosaku Anakubo. Shogakukan, which frequently surveys their target groups, determined that the Pocket Monsters manga was well received.\n[…]\nThe film, titled Pocket Monsters the Movie: Mewtwo Strikes Back (Pokémon: The First Movie), premiered on 18 July 1998, becoming the fourth highest grossing film of the year in Japan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon (ポケモン, Pokemon; pronunciado: [ˈpəʊkəmɒn] POH-kə-mon, US [ˈpoʊkimɒn] POH-kee-mon) é uma franquia de mídia japonesa composta por jogos eletrônicos, séries de anime e filmes, um jogo de cartas colecionáveis ​​e outras mídias relacionadas. A franquia se passa em um universo compartilhado no qual humanos coexistem com criaturas conhecidas pelo nome de Pokémon, uma grande variedade de espécies d\n[…]\nIshihara aspirava a criar seus próprios jogos eletrônicos. Como Pocket Monsters Red e Green com os projetos quase concluídos, Ishihara fundou a Creatures, Inc. em 8 de novembro de 1995. Após sua fundação, a empresa foi instalada no mesmo prédio de escritórios da Nintendo em Tóquio. A copropriedade da franquia \"Pokémon\", que Ishihara ajudou a criar, foi posteriormente transferida para a Creatures.\n[…]\nNa época do lançamento de Pokémon, a principal revista CoroCoro era lida por um em cada quatro alunos do ensino fundamental. O editor-chefe adjunto da revista CoroCoro era Masakazu Kubo. Por sugestão de Ishihara, Kubo encomendou a criação de Pokémon Pocket Monsters, escrita e ilustrada por Kosaku Anakubo. Shogakukan, que frequentemente realiza pesquisas com seus públicos-alvo, determinou que o mangá Pocket Monsters foi bem recebido.\n[…]\nO filme, intitulado Pocket Monsters the Movie: Mewtwo Strikes Back (Pokémon: O Filme), estreou em 18 de julho de 1998, tornando-se o quarto filme de maior bilheteria do ano no Japão.\n[…]\nEm março de 2000, o Morrison Entertainment Group, um pequeno desenvolvedor de brinquedos estabelecido em Manhattan Beach, Califórnia, processou a Nintendo por reivindicações de que Pokémon violou seus próprios personagens Monster in My Pocket. Um juiz decidiu que não houve violação, então Morrison apelou da decisão. Em 4 de fevereiro de 2003, o Tribunal de Apelação dos Estados Unidos para o nono circuito afirmou a decisão do tribunal distrital de demitir o processo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pokémon",
      "descricao": "Franquia japonesa de jogos, anime e cartas criada por Satoshi Tajiri e lançada em 1996."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os jogos Pokémon Red e Green, que deram início à franquia, chegaram às lojas japonesas em que ano?",
    "resposta": "1996",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
      "https://en.wikipedia.org/wiki/Pok%C3%A9mon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.\n[…]\nIn Japan, Pocket Monsters Red and Green were the first versions released. Development was completed by October 1995 and release was originally planned for December 21, 1995, but was delayed until February 27, 1996 because the derivative products were not yet ready for sale. After a slow start they continued to sell well. Several months later, Pocket Monsters Blue was released in Japan as a mail-order-only special edition to subscribers of CoroCoro Comic on October 15, 1996.\n[…]\nPokémon Red and Blue set the precedent for what has become a blockbuster, multibillion-dollar franchise. In Japan Red, Green, and Blue sold 1.04 million units combined during 1996, and another 3.65 million in 1997. The latter performance made Pokémon, collectively, the country's best-selling game of the year, surpassing Final Fantasy VII. By 1997, about 7 million units had been sold in Japan. In 1998, Red, Green and Blue sold 1,739,391 units in Japan.\n[…]\nFor the month of December, Donkey Kong 64 led Pokémon Yellow and Gran Turismo 2 on the monthly chart.\n[…]\nA Nintendo 64 game, Pocket Monsters Stadium, was released by Nintendo in 1998 exclusively in Japan. It revolves around a 3D turn-based battle system with 40 of the 151 Pokémon featured in Red, Blue, and Yellow. A sequel was released in 1999 both in Japan and the West that includes all 151 Pokémon.\n[…]\nOfficial website for Pokémon Red and Green (in Japanese)\n[…]\nOfficial website for Pokémon Blue (in Japanese)\n[…]\nOfficial website for Pokémon Yellow (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pok%C3%A9mon",
        "situacao": "ok",
        "texto": "Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with the eponymous creatures, a large variety of species endowed with special powers. The franchise's primary target audience is children aged 5 to 12, but it is known to attract people of a\n[…]\nAfter finally being finished in December 1995, Pocket Monsters Red and Green were released on 27 February 1996. Nintendo had no high expectations of the games, and media largely ignored them. By 1996, the seven-year-old Game Boy console was considered dated and near the end of its lifecycle. On the other hand, new Game Boys continued to be manufactured and sold. The console was widespread and, due to its age, affordable to children.\n[…]\nTo further promote Red and Green, the May issue of CoroCoro, released on 15 April 1996, announced the \"Legendary Pokemon Offer\", centered around a mysterious, secret Pokemon called Mew. Mew was a last-minute addition to Red and Green. It is unobtainable in the game(s) through usual means, and was intended to be used at a later point in some post-launch activity. To participate in the promotion, CoroCoro readers had to send in a postcard, and from the entrants, 20 were selected at random.\n[…]\nAn important aspect of Kubo's bargaining power was the then-ongoing Mini 4WD craze and its accompanying hit series Bakusō Kyōdai Let's & Go!!. Kubo had an important role in the creation of both, which impressed the stakeholders. To appease Ishihara, Kubo promised him that the anime would last for at least a year and a half. This was unusually long for a debuting anime, and required a big investment. Kubo's proposal for Pocket Monsters was officially approved on 26 September 1996.\n[…]\nOfficial hub to regional Pokémon websites\n[…]\nPokémon Center, official merchandise web shop"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Red_%26_Blue",
        "situacao": "ok",
        "texto": "Pokémon Red Version e Pokémon Blue Version, lançados no Brasil oficialmente como Pokémon Versão Vermelho e Pokémon Versão Azul, são dois jogos eletrônicos de RPG de 1996, desenvolvidos pela Game Freak e publicados pela Nintendo para o console portátil Game Boy. São os primeiros jogos eletrônicos da série Pokémon.\n[…]\nNo Japão, Pocket Monsters: Red e Green foram as primeiras versões lançadas, tendo sido concluídas em outubro de 1995 e oficialmente lançadas em 27 de fevereiro de 1996. Eles venderam rapidamente, devido em parte à ideia da Nintendo de produzir os dois versões do jogo em vez de um único título, levando os consumidores a comprar os dois.\n[…]\nVários meses depois, Pocket Monsters: Blue foi lançado no Japão como uma edição especial somente para pedidos pelo correio para assinantes da CoroCoro Comic em 15 de outubro de 1996. Posteriormente, foi lançado no varejo em 10 de outubro de 1999. Possui arte atualizada do jogo e novos diálogos. Usando Blastoise como mascote, o código, o script e a arte de Blue foram usados para os lançamentos internacionais de Red e Green, que foram renomeados para Red e Blue.\n[…]\nPokémon Red & Blue abriu o precedente para o que se tornou uma franquia multibilionária de grande sucesso. Red, Green e Blue vendeu 1,04 milhão de unidades combinadas no Japão durante 1996 e outros 3,65 milhões em 1997. O último desempenho fez de Pokémon, coletivamente, o jogo mais vendido do ano no país, ultrapassando Final Fantasy VII. Os jogos Pokémon combinados acabaram vendendo 10,23 milhões de cópias no Japão e em agosto de 2020, são os jogos eletrônicos mais vendidos do país.\n[…]\nPokémon Yellow\n[…]\nPokémon Gold & Silver\n[…]\nPokémon FireRed e LeafGreen\n[…]\nPocket Monsters Red e Green - Nintendo Japão (em japonês)\n[…]\nPocket Monsters Blue - Nintendo Japão (em japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Princesa Zelda",
      "descricao": "Princesa do reino de Hyrule na série The Legend of Zelda, da Nintendo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A princesa Zelda recebeu o nome em homenagem à esposa de qual escritor americano da Era do Jazz?",
    "resposta": "F. Scott Fitzgerald",
    "fonte": [
      "https://en.wikipedia.org/wiki/Princess_Zelda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Princess_Zelda",
        "situacao": "ok",
        "texto": "Princess Zelda is a character in Nintendo's The Legend of Zelda video game series. She was created by Shigeru Miyamoto for the original 1986 game The Legend of Zelda. As one of the central characters in the series, she has appeared in the majority of the games in various incarnations. Zelda is the elf-like Hylian princess of the kingdom of Hyrule, an associate of the series protagonist Link, and b\n[…]\nAccording to Shigeru Miyamoto, co-creator of The Legend of Zelda series, Princess Zelda's name was inspired by Zelda Fitzgerald, an American novelist, dancer, and socialite, as well as the wife of fellow novelist F. Scott Fitzgerald. Miyamoto had decided to name the first game \"The Legend of X\", but did not know what the X would stand for.\n[…]\nPrincess Zelda has been voiced by several voice actors, including Bonnie Jean Wilbur in Link: The Faces of Evil and Zelda: The Wand of Gamelon, Brandy Kopp in Super Smash Bros. Ultimate (World of Light only) and Stephanie Martone in Cadence of Hyrule. She is voiced by Canadian-American actress Patricia Summersett in Breath of the Wild, Hyrule Warriors: Age of Calamity, Tears of the Kingdom, and Hyrule Warriors: Age of Imprisonment.\n[…]\nZelda's evolution from the \"princess in peril\" was noted by Kyle Hilliard of Game Informer who commented that in most games she is simply a goal for the player to acquire, but in more recent titles she has grown into a more fleshed-out character. Jason Guisao of Game Informer said that although Zelda has the potential to be equal to Link, \"Nintendo is attached to tired scenarios where she is captured or immobilized\".\n[…]\nAshley Bardhan of Rolling Stone commented that Nintendo was finally recognising the female characters in its franchises and that the game redefines the role of the Nintendo princess by giving Zelda the ability to save herself.\n[…]\nCharacters of The Legend of Zelda\n[…]\nPrincess Zelda page at Play Nintendo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Princesa_Zelda",
        "situacao": "ok",
        "texto": "A Princesa Zelda (ゼルダ姫, Zeruda-hime) é uma personagem fictícia da série de jogos The Legend of Zelda criada por Shigeru Miyamoto. Foi introduzida no jogo original The Legend of Zelda em 1986. A personagem aparece em diversas encarnações durante a franquia, geralmente definida como Princesa do Reino de Hyrule e membro da Família Real de Hyrule.\n[…]\nShigeru Miyamoto criou a personagem Zelda em 21 de fevereiro de 1986, com esse nome em referência à romancista Zelda Fitzgerald.\n[…]\nNo desenho animado The Legend of Zelda, além de governar Hyrule, Zelda acompanha Link em várias de suas aventuras. Zelda não é mais a pobre princesa a salvar, mas uma mulher corajosa pronta para lutar quando surgir a necessidade com sua arbaleta ou flecha mágica. O vestido não está presente, dando lugar a uma roupa mais confortável e prática. Quanto a Link, além da tarefa de salvar Hyrule que lhe foi confiado, ele não para de tentar conquistar o coração de Zelda, esperando um beijo dela.\n[…]\nZelda aparece em Super Smash Bros. Melee como Zelda / Sheik fora da saga e como uma personagem jogável. O jogador também pode alternar entre o personagem de Zelda, bastante defensiva e usando ataques mágicos, e a de Sheik, mais rápida e ofensiva em combate total para variar sua estratégia de abordagem. A princesa Zelda também aparece em Super Smash Bros. Brawl, com sua aparência de The Legend of Zelda: Twilight Princess. Suas características não mudaram em Super Smash Bros.\n[…]\nMelee, e ela ainda pode chamar seu alter-ego Sheik, apesar de estar ausente de Twilight Princess. Além disso, em Super Smash Bros. Brawl, o Final Smash da Princesa Zelda não é outro senão as Flechas de Luz. As flechas da luz aparecem em Ocarina of Time e The Wind Waker, como um objeto para Link. Em Twilight Princess durante o final do combate, Zelda dispara flechas de luz a cavalo, atrás de Link.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Atari",
      "descricao": "Empresa americana pioneira dos videogames, fundada em 1972 por Nolan Bushnell e Ted Dabney."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra Atari, escolhida para batizar a empresa americana de videogames, vem de qual jogo de tabuleiro japonês?",
    "resposta": "Go",
    "distratores": [
      "Shogi",
      "Mahjong",
      "Otelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atari,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atari,_Inc.",
        "situacao": "ok",
        "texto": "Atari, Inc. was an American video game developer and home computer company founded in 1972 by Nolan Bushnell and Ted Dabney. Atari was a key player in the formation of the video arcade and video game industry.\n[…]\nAtari had gained a poor reputation in the industry. One dealer told InfoWorld in early 1984 that \"It has totally ruined my business ... Atari has ruined all the independents.\" A non-Atari executive stated, \"There were so many screaming, shouting, threatening dialogues, it's unbelievable that any company in America could conduct itself the way Atari conducted itself. Atari used threats, intimidation and bullying. It's incredible that anything could be accomplished. Many people left Atari.\n[…]\nIn 1983, Atari set up Studio Games, a partnership with MCA Videogames (a division of MCA Inc.), which gave them access to properties handled by MCA's sister studio Universal Pictures.\n[…]\nAtari Video Music (1977)\n[…]\nAtari 2600 (1977)\n[…]\nAtari 8-bit computers (1979)\n[…]\nAtari 2700 (cancelled)\n[…]\nAtari Cosmos (cancelled)\n[…]\nAtari 5200 (1982)\n[…]\nAtari's software is organized by platform:\n[…]\nList of Atari 2600 games\n[…]\nList of Atari 5200 games\n[…]\nAtari 8-bit computer software\n[…]\nVendel, Curt; Marty Goldberg (2012). Atari Inc.: Business Is Fun. Carmel, NY: Syzygy Company Press. ISBN 978-0985597405. OCLC 840902843.\n[…]\nThe Atari History Museum - Atari historical archive site.\n[…]\nAtari Times, supporting all Atari consoles.\n[…]\nAtari entry at MobyGames\n[…]\nAtari Gaming Headquarters - Atari historical archive site.\n[…]\nAtari On Film - List of Atari products in films.\n[…]\nThe Dot Eaters - Comprehensive history of videogames, extensive info on Atari offerings and history\n[…]\nHistory of Atari from 1978 to 1981\n[…]\nA History of Syzygy / Atari / Atari Games / Atari Holdings"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atari%2C_Inc.",
        "situacao": "ok",
        "texto": "Atari, Inc. foi uma empresa de produtos eletrônicos, e uma das principais responsáveis pela popularização dos vídeo games. Foi fundada em 27 de junho de 1972 por Nolan Bushnell e Ted Dabney e no mesmo ano começou a produzir em massa máquinas que reproduziam o jogo Pong.\n[…]\nEm 1976, a empresa foi adquirida pela Warner Communications, e após a crise de 1984, a empresa foi encerrada, se dividindo em duas: Atari Games e Atari Corporation.\n[…]\nA Atari foi fundada por Nolan Bushnell e Ted Dabney em 1972 e seu primeiro jogo foi o arcade Pong. Em 1975 a empresa lançou uma versão caseira do jogo.\n[…]\nA empresa também começou a produzir computadores de uso doméstico a partir de 1979 com a Família Atari de 8-bits e posteriormente com a família Atari ST a partir de 1985, também lançou o Atari Portfolio considerado um dos primeiros computadores de bolso do mundo.\n[…]\nNovos consoles com mais recursos foram lançados posteriormente (como o Atari 5200, o portátil Lynx, e o mais recente o Jaguar), mas nenhum chegou perto das marcas de venda alcançadas pelo 2600 durante os anos 1980. Havia centenas de empresas produzindo jogos (que chegavam aos milhares de títulos) para o 2600, entre elas a Sega, a Coleco, e a Nintendo. As vendas começaram a cair nos Estados Unidos entre 1983 e 1984.\n[…]\nAo longo dos anos 1990, a inabilidade da Atari em acompanhar o mercado de consoles culminou com a venda de suas divisões para diversas empresas de informática, terminando com a venda da própria marca para a Infogrames em 2001. Desde então, esta empresa usa o nome e o logotipo original da Atari em seus produtos, e assim produziu jogos de sucesso, como a série Civilization.\n[…]\nAtari.com.br / O Ponto de Encontro da Comunidade Atari no Brasil\n[…]\nZuQuEtO.CoM / Emuladores e Roms de Atari 2600 e outros consoles",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Tetris",
      "descricao": "Jogo de quebra-cabeça com peças que caem, criado pelo russo Alexey Pajitnov em 1984."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Tetris junta o prefixo grego tetra, que significa quatro, com o esporte favorito do seu criador. Que esporte é esse?",
    "resposta": "Tênis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tetris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tetris",
        "situacao": "ok",
        "texto": "Tetris (Russian: Тетрис) is a puzzle video game created by Alexey Pajitnov, a Soviet software engineer, in the mid-1980s. In Tetris, falling pieces consisting of four connected blocks, known as tetrominoes, must be sorted into a pile. Once a horizontal line of the playfield is filled with blocks, the line disappears, granting points and preventing the pile from reaching the top. This gameplay has \n[…]\nAfterward, he programmed the basic mechanics, including the ability to flip tetrominoes as they fell in a vertical screen and the clearing of lines. The name Tetris was a combination of \"tetra\" (meaning \"four\") and Pajitnov's favorite sport, tennis.\n[…]\n\"Korobeiniki\" has become primarily associated with Tetris as its main theme and would be used in most significant versions of the game, as mandated by the Tetris Company guidelines.\n[…]\nFor example, gameplay techniques such as \"hypertapping\" and \"rolling\" have been used to help competitors to maximize their scores beyond level 29, which was previously deemed impossible to complete due to its speed. Willis Gibson \"beat\" Tetris by playing NES Tetris until it crashed in a 40-minute livestream in January 2024, receiving significant media coverage for his achievement.\n[…]\nBrain Wall and Blokken, game shows based on Tetris\n[…]\nAckerman, Dan (2016). The Tetris Effect: The Game that Hypnotized the World. New York: PublicAffairs. ISBN 978-1-61039-611-0. OCLC 943694339 – via Internet Archive.\n[…]\nLinneman, John (November 14, 2018). DF Retro: Tetris!. Digital Foundry. Retrieved December 7, 2024 – via YouTube.\n[…]\nPajitnov, Alexey; Rogers, Henk (April 26, 2023). Unsolved Tetris Mysteries With Creator Alexy Pajitnov & Designer Henk Rogers. Ars Technica. Retrieved December 7, 2024 – via YouTube.\n[…]\nTemple, Magnus (2004). Tetris: From Russia with Love. BBC.\n[…]\nGerasimov, Vadim. \"Tetris Story\". OverSigma.\n[…]\nThe Creation of Tetris. BBC World Service. BBC. December 29, 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tetris",
        "situacao": "ok",
        "texto": "Tetris (em russo:  Тетрис) é um jogo eletrônico do gênero de quebra-cabeça criado pelo engenheiro de software soviético Alexey Pajitnov e lançado no ano de 1984. A primeira versão foi criada para o computador Electronika 60, enquanto Pajitnov trabalhava no Centro de Computação da Academia de Ciências da União Soviética.\n[…]\nA natureza repetitiva e espacial do quebra-cabeça levou à cunhagem do termo \"Efeito Tetris\". Esse fenômeno psicológico e neurológico ocorre quando os indivíduos dedicam tempo e atenção suficientes a uma atividade até que ela comece a padronizar seus pensamentos, imagens mentais e sonhos. Jogadores frequentes relatam enxergar peças caindo nos limites de sua visão periférica ou tentar encaixar mentalmente objetos do mundo real, como caixas de supermercado ou edifícios.\n[…]\nEstudos acadêmicos sugerem que a imersão visual no jogo altera a forma como o cérebro processa informações visuoespaciais. Pesquisas clínicas também exploram o uso de Tetris como uma intervenção terapêutica, indicando que jogá-lo logo após um evento traumático pode ajudar a atenuar o desenvolvimento de memórias intrusivas e sintomas de Transtorno de estresse pós-traumático (TEPT).\n[…]\nApesar de sua idade, a versão de 1989 lançada para o console de mesa da Nintendo mantém um cenário competitivo ativo e altamente técnico. O Campeonato Mundial de Tetris Clássico (Classic Tetris World Championship - CTWC) é realizado anualmente, reunindo jogadores de elite que utilizam técnicas mecânicas complexas de manipulação de controle — como o hypertapping e o rolling — para conseguir mover as peças nas velocidades extremas e limitantes das fases mais avançadas do código original.\n[…]\nSite oficial da marca Tetris\n[…]\nSite oficial do Campeonato Mundial de Tetris Clássico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Tetris",
      "descricao": "Jogo de quebra-cabeça com peças que caem, criado pelo russo Alexey Pajitnov em 1984."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No Tetris, cada peça é formada por quatro quadradinhos. Quantos formatos diferentes de peça existem no jogo?",
    "resposta": "Sete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tetris",
      "https://en.wikipedia.org/wiki/Tetromino"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tetris",
        "situacao": "ok",
        "texto": "Tetris (Russian: Тетрис) is a puzzle video game created by Alexey Pajitnov, a Soviet software engineer, in the mid-1980s. In Tetris, falling pieces consisting of four connected blocks, known as tetrominoes, must be sorted into a pile. Once a horizontal line of the playfield is filled with blocks, the line disappears, granting points and preventing the pile from reaching the top. This gameplay has \n[…]\nTetris has also been ranked as among the best computer games by PC Format (1991) and Computer Gaming World (1996), among the best video game franchises by IGN (2006) and Den of Geek (2024), and among the most influential games by GamePro (2007), IGN (2007), 1Up.com (2010), GamesRadar+ (2013), and The Guardian (2017).\n[…]\nAckerman, Dan (2016). The Tetris Effect: The Game that Hypnotized the World. New York: PublicAffairs. ISBN 978-1-61039-611-0. OCLC 943694339 – via Internet Archive.\n[…]\nLoguidice, Bill; Barton, Matt (2009). \"Tetris (1985): Casual Gaming Falls Into Place\". Vintage Games: An Insider Look at the History of Grand Theft Auto, Super Mario, and the Most Influential Games of All Time. Amsterdam: Focal Press. pp. 291–301. ISBN 978-0-240-81146-8 – via Internet Archive.\n[…]\nPlank, Dana (July 25, 2022). \"Tetris\". In Perron, Bernard; Boudreau, Kelly; Wolf, Mark J.P.; Arsenault, Dominic (eds.). Fifty Key Video Games (First ed.). New York: Routledge. pp. 268–274. doi:10.4324/9781003199205. ISBN 978-1-003-19920-5.\n[…]\nLinneman, John (November 14, 2018). DF Retro: Tetris!. Digital Foundry. Retrieved December 7, 2024 – via YouTube.\n[…]\nPajitnov, Alexey; Rogers, Henk (April 26, 2023). Unsolved Tetris Mysteries With Creator Alexy Pajitnov & Designer Henk Rogers. Ars Technica. Retrieved December 7, 2024 – via YouTube.\n[…]\nTemple, Magnus (2004). Tetris: From Russia with Love. BBC.\n[…]\nGerasimov, Vadim. \"Tetris Story\". OverSigma.\n[…]\nThe Creation of Tetris. BBC World Service. BBC. December 29, 2012."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tetromino",
        "situacao": "ok",
        "texto": "A tetromino is a geometric shape composed of four squares, connected orthogonally (i.e. at the edges and not the corners). Tetrominoes, like dominoes and pentominoes, are a particular type of polyomino. The corresponding polycube, called a tetracube, is a geometric shape composed of four cubes connected orthogonally.\n[…]\nA popular use of tetrominoes is in the video game Tetris created by the Soviet game designer Alexey Pajitnov, which refers to them as tetriminos. The tetrominoes used in the game are specifically the one-sided tetrominoes.\n[…]\nOne-sided tetrominoes are tetrominoes that may be translated and rotated but not reflected. They are used by, and are overwhelmingly associated with, Tetris. There are seven distinct one-sided tetrominoes. These tetrominoes are named by the letter of the alphabet they most closely resemble. The \"I\", \"O\", and \"T\" tetrominoes have reflectional symmetry, so it does not matter whether they are considered as free tetrominoes or one-sided tetrominoes.\n[…]\nVadim Gerasimov: The story of Tetris\n[…]\nThe Father of Tetris (web archive copy of the page here)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tetris",
        "situacao": "ok",
        "texto": "Tetris (em russo:  Тетрис) é um jogo eletrônico do gênero de quebra-cabeça criado pelo engenheiro de software soviético Alexey Pajitnov e lançado no ano de 1984. A primeira versão foi criada para o computador Electronika 60, enquanto Pajitnov trabalhava no Centro de Computação da Academia de Ciências da União Soviética.\n[…]\nO sistema gera peças geométricas aleatoriamente, formadas por quatro blocos quadrados idênticos conectados ortogonalmente, denominadas tetrominós. Existem sete variações distintas dessas peças, classicamente identificadas pelas letras do alfabeto que mais se assemelham aos seus formatos geométricos: I, J, L, O, S, T e Z.\n[…]\nO conceito fundamental de Tetris se originou do interesse de Alexey Pajitnov por quebra-cabeças geométricos, especificamente o jogo clássico Pentominó, que utiliza formas compostas por cinco quadrados. Na tentativa de adaptar essa mecânica para um ambiente virtual contínuo, Pajitnov concluiu que as doze variações geométricas do pentominó deixariam a jogabilidade excessivamente complexa para a tomada de decisão em tempo real.\n[…]\nComo solução, ele reduziu o algoritmo para gerar peças de apenas quatro blocos, os tetrominós, resultando em sete formas básicas.\n[…]\nEstudos acadêmicos sugerem que a imersão visual no jogo altera a forma como o cérebro processa informações visuoespaciais. Pesquisas clínicas também exploram o uso de Tetris como uma intervenção terapêutica, indicando que jogá-lo logo após um evento traumático pode ajudar a atenuar o desenvolvimento de memórias intrusivas e sintomas de Transtorno de estresse pós-traumático (TEPT).\n[…]\nSite oficial da marca Tetris\n[…]\nSite oficial do Campeonato Mundial de Tetris Clássico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Luigi",
      "descricao": "Irmão gêmeo de Mario nos jogos da Nintendo, de roupa verde."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Luigi faz um trocadilho com a palavra japonesa ruiji. O que ela significa?",
    "resposta": "Semelhante",
    "distratores": [
      "Irmão mais novo",
      "Verde",
      "Medroso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Luigi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luigi",
        "situacao": "desambiguacao",
        "texto": "Luigi most commonly refers to:\n\nLuigi (given name), an Italian masculine name (includes a list of people with the name)\nLuigi (character), a video game character in the Mario franchise\nLuigi may also refer to:\n\n\n== People ==\nLuigi (jazz dancer), stage name of Eugene Louis Faccuito (1925–2015), American jazz dancer, choreographer, and teacher\nLuigi Verderame (born 1950), Belgian singer often known "
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Mega Man",
      "descricao": "Robô protagonista da série de jogos da Capcom iniciada em 1987, chamado Rockman no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, Mega Man se chama Rockman. Qual é o nome da sua irmã robô, que completa o trocadilho com um gênero musical?",
    "resposta": "Roll",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mega_Man_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mega_Man_(character)",
        "situacao": "ok",
        "texto": "Mega Man, known as Rockman (Japanese: ロックマン, Hepburn: Rokkuman) in Japan, is the title character and the main protagonist of the Mega Man series by Capcom. The character was created by Akira Kitamura for the first Mega Man game released in 1987, with artist Keiji Inafune providing detailed character artwork based on Kitamura's pixel art design.\n[…]\nAlthough originally the names \"Mighty Kid\", \"Knuckle Kid\", and \"Rainbow Battle Kid\" were proposed, Capcom eventually settled on \"Rockman\". The word \"Rock\" in Rockman is a reference to the music genre rock and roll, and is meant to work in tandem with his sister robot, Roll.\n[…]\nHowever, Capcom USA Consumer Products Division President Joe Morici localized the name from Rockman to \"Mega Man\" because he felt \"The title was horrible.\" In addition, the original Mega Man titles intentionally incorporated a \"Rock, Paper, Scissors\" gameplay mechanic into defeating certain enemies.\n[…]\n1UP.com described Mega Man as \"Capcom's ill-treated mascot\", and \"one of the most incongruous characters of all time\", saying \"it wouldn't be completely incorrect to assume that the popularity of the series has almost nothing to do with Mega Man himself\", but with \"his rivals, his enemies, and their abilities.\" IGN agreed with his dependency on support characters, saying Zero is \"cooler than Mega Man\".\n[…]\nwas meant to have a more \"human feel\" rather than the complete \"mechanical feel\" of the X series. Nakayama wanted the public to recognize that this series was different from the X series. Since Capcom wanted Zero's general structure to be the same, Inti-Creates concentrated on how different they could make him, rather than how similar. For the Mega Man Legends series, the new protagonist is Mega Man Voluntt who was designed to be different from all previous characters."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mega_Man_%28personagem%29",
        "situacao": "ok",
        "texto": "Mega Man, conhecido como Rockman (japonês: ロックマン, Hepburn: Rokkuman) no Japão, é o personagem titular e protagonista da série de jogos Mega Man da Capcom. O personagem foi criado originalmente por Akira Kitamura para o primeiro jogo lançado em 1987, com o artista Keiji Inafune desenvolvendo as artworks originais do personagem baseadas nos sprites do jogo.\n[…]\nAlém disso o personagem também foi estendido a protagonizar séries de animação, quadrinhos, mangás e ter sua própria linha de brinquedos no Japão.\n[…]\nA 1UP.com descreveu Mega Man como \"o mascote maltratado da Capcom\" e \"um dos personagens mais incongruentes de todos os tempos\", dizendo \"não seria completamente incorreto supor que a popularidade da série  quase nada tem a ver com o próprio Mega Man\", mas com \"seus rivais, seus inimigos e suas habilidades\".\n[…]\nOriginalmente Mega Man era um dos 8 robôs originais criados por Dr. Light e Dr. Wily (que foram criados logo após Proto Man que foi descontinuado). Enquanto os demais 6 robôs ocuparam cargos civis ele e sua irmã Roll passaram a ser assistentes de laboratório de Light. Porém depois que Wily roubou os outros 6 robôs para tentar dominar o mundo Mega acabou sendo reprogramado para lutar contra os robôs ganhando a habilidade de roubar seus poderes e assim deter os planos do Dr. Wily.\n[…]\nMega Man tem como principal habilidade a de atirar através do canhão em seu braço (chamado de Mega Buster) e sempre conseguir a habilidade do Robot Master que ele derrota a cada fase. A partir do terceiro jogo ele consegue a habilidade de deslizar para atravessar lugares mais estreitos. A partir do quarto jogo ele ganha a capacidade de dar o Charge Shot, um tiro carregado ainda maior capaz de dar mais danos nos inimigos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Grand Theft Auto",
      "descricao": "Série de jogos de mundo aberto da Rockstar Games, iniciada em 1997."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nos Estados Unidos, a expressão jurídica que dá nome à série Grand Theft Auto designa qual crime?",
    "resposta": "Roubo de veículo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
      "https://en.wikipedia.org/wiki/Motor_vehicle_theft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
        "situacao": "ok",
        "texto": "Grand Theft Auto (GTA) is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its American parent company, Rockstar Games. The name of the series is a \n[…]\nCriminal activities in Grand Theft Auto games do not go unnoticed by the police. As the player engages in these in-game illegal activities, they may gain a \"wanted level\", represented by a maximum of five or six stars. A small crime, such as running over a non-player character, may create a one star wanted level situation, while shooting an officer may earn more stars.\n[…]\nIn the final game, drunk driving is a playable event, but it is a crime that automatically generates a wanted rating and main playable character Niko Bellic loudly (and drunkenly) proclaims that it is a \"bad idea\" and that he \"should know better\". Notably, it is impossible to drive while drunk in the GTA IV expansions, The Lost and Damned and The Ballad of Gay Tony. These were released after the criticism. It is, however, possible to drive drunk again in the successor, Grand Theft Auto V.\n[…]\nEver since the release of Grand Theft Auto III in 2001, the Grand Theft Auto series has been a major success, both critically and financially. It has shipped over 470 million units, making it one of the best-selling video game franchises of all time. In 2006, Grand Theft Auto was voted one of Britain's top 10 designs in the Great British Design Quest organised by the BBC and the Design Museum.\n[…]\nNotable games that are comparable to Grand Theft Auto are Saints Row, Scarface: The World Is Yours, True Crime: Streets of LA, Watch Dogs, Sleeping Dogs, Just Cause, Mafia, and The Godfather."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Motor_vehicle_theft",
        "situacao": "ok",
        "texto": "Motor vehicle theft or car theft (also known as a grand theft auto in the United States) is the criminal act of stealing or attempting to steal a motor vehicle.\n[…]\nThe recovery of stolen vehicles is the primary focus of the stolen vehicle recovery industry, which combines technology and services to assist vehicle owners and law enforcement. Recovery rates vary widely, depending on the methods used by police and the types of anti-theft and tracking devices installed in a vehicle.\n[…]\nCriminologist Frank E. Hagan wrote that, \"Probably the most important factor in the rate of motor vehicle theft is the number of motor vehicles per capita in the country.\" Using data supplied by the United Nations Office on Drugs and Crime, New Zealand had the highest auto-theft rate for any fairly large country in the world, at 954.0 per 100,000 residents in 2020. Some cities have higher rates, such as Richmond, California, which had an auto-theft rate of 1,518.3 in 2018.\n[…]\nFurthermore, because the vehicle theft rates shown in the table below are \"per 100,000 population\"—not per 100,000 vehicles—countries with low vehicle ownership rates will appear to have lower theft rates even if the theft rate per vehicle is relatively high.\n[…]\nAccording to Europol, in 2023, motor vehicle crime networks were the most active in Germany, Poland, Portugal and Serbia, with Serbia being the country where most stolen vehicles are stored and cloned before being shipped and sold.\n[…]\nBicycle theft\n[…]\nGasoline theft\n[…]\nGrand Theft Auto – the video game series that centers around vehicle theft\n[…]\n2020–2022 catalytic converter theft ring"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Theft_Auto",
        "situacao": "ok",
        "texto": "Grand Theft Auto (GTA) é uma série de jogos eletrônicos de ação-aventura criada por David Jones e Mike Dailly. Posteriormente, a série passou a ser desenvolvida sob a supervisão dos irmãos Dan e Sam Houser, Leslie Benzies e Aaron Garbut. Os jogos são desenvolvidos principalmente pela desenvolvedora britânica Rockstar North (antiga DMA Design) e publicados por sua empresa-mãe estadunidense, Rocksta\n[…]\nO título da série é um termo policial usado nos Estados Unidos para identificar roubos de automóveis: Grand Theft refere-se a furtos de valor elevado (maior que US$400,00) e Auto designa os automóveis.\n[…]\nA maioria dos jogos da série Grand Theft Auto se passa em paródias fictícias de cidades famosas dos Estados Unidos, em diferentes períodos históricos. Os jogos são divididos em três universos diferentes (2D, 3D e HD), cada um com suas próprias reinterpretações de cenários já existentes. Os universos compartilham nomes de cidades, diversas marcas e personagens secundários que nunca aparecem fisicamente nos jogos (com algumas exceções), mas, de resto, são considerados continuidades distintas.\n[…]\nOs pacotes de expansão London 1969 e London 1961 para Grand Theft Auto (1997) se passam em uma versão fictícia de Londres durante a década de 1960. Portanto, são os únicos jogos da série ambientados fora dos Estados Unidos. A parte da cidade usada nos jogos é baseada no centro de Londres, embora bastante condensada e, em grande parte, geograficamente imprecisa. Consiste em duas massas de terra, separadas pelo Rio Tâmisa e conectadas por várias pontes rodoviárias.\n[…]\nNo final de 2015 foi confirmada pela própria Sony, o porte da trilogia da série Grand Theft Auto, a trilogia contém três jogos: Grand Theft Auto III, Grand Theft Auto: Vice City e Grand Theft Auto: San Andreas para a plataforma PlayStation 4, também vieram sete clássicos para a plataforma junto com a trilogia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Grand Theft Auto",
      "descricao": "Série de jogos de mundo aberto da Rockstar Games, iniciada em 1997."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Embora se passe em cidades americanas, a série Grand Theft Auto nasceu num estúdio de qual país do Reino Unido?",
    "resposta": "Escócia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rockstar_North",
      "https://en.wikipedia.org/wiki/Grand_Theft_Auto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rockstar_North",
        "situacao": "ok",
        "texto": "Rockstar North (Rockstar Games UK Limited; formerly DMA Design Limited) is a British video game developer and a studio of Rockstar Games based in Edinburgh. The studio is best known for creating the Lemmings and Grand Theft Auto series, including Grand Theft Auto V, the second-best-selling game and most profitable entertainment product of all time.\n[…]\nAs a result, Take-Two acquired BMG Interactive, since dormant, for 1.85 million shares worth US$14.2 million in March 1998. Through the acquisition, Take-Two also obtained the intellectual property of Grand Theft Auto and Space Station Silicon Valley, and it published the former's PlayStation version in North America later that year.\n[…]\nPlans to outfit Grand Theft Auto III with an online multiplayer component were scrapped in favour of a follow-up, Grand Theft Auto: Vice City. Conceptualised as an expansion pack for Grand Theft Auto III, Rockstar Games made it a standalone product as its scope expanded.\n[…]\nThe game broke the records for the best-selling and highest-grossing video game within one day and the fastest entertainment property to reach $1 billion in revenue at three days. With continuing sales and the success of its online multiplayer counterpart, Grand Theft Auto Online, the game grossed an estimated $6 billion by 2018, making it the most profitable entertainment product of all time.\n[…]\nWith 200 million copies sold as of March 2024, Grand Theft Auto V became the second-best-selling game ever, adding to the 425 million total sales for the series.\n[…]\nIWGB-organised protests outside the studio started on 6 November and were supported by Ross Greer, the co-leader of the Scottish Greens. Rockstar Games's next release, Grand Theft Auto VI, was delayed on the same day, and a Rockstar North employee said morale was \"at rock bottom\".\n[…]\nGrand Theft Auto: Online Crime World"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
        "situacao": "ok",
        "texto": "Grand Theft Auto (GTA) is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut. It is primarily developed by British development house Rockstar North (formerly DMA Design), and published by its American parent company, Rockstar Games. The name of the series is a \n[…]\nGrand Theft Auto III and subsequent games have more voice acting and radio stations, which simulate driving to music with disc jockeys, radio personalities, commercials, talk radio, popular music, and American culture. The use of vehicles in an explorable urban environment provides a basic simulation of a working city, complete with pedestrians who generally obey traffic signals.\n[…]\nOn 20 October 2003, the families of Aaron Hamel and Kimberly Bede, two young people shot by teens William and Josh Buckner (who in statements to investigators claimed their actions were inspired by Grand Theft Auto III) filed a US$246 million lawsuit against publishers Rockstar Games, Take-Two Interactive Software, retailer Walmart, and PlayStation 2 manufacturer Sony Computer Entertainment America.\n[…]\nThe release of Grand Theft Auto III is treated as a major event in the history of video games, considered a revolutionary title in the medium, much like the release of Doom nearly a decade earlier.\n[…]\nNotable games that are comparable to Grand Theft Auto are Saints Row, Scarface: The World Is Yours, True Crime: Streets of LA, Watch Dogs, Sleeping Dogs, Just Cause, Mafia, and The Godfather.\n[…]\nGarrelts, Nate (2006). The Meaning and Culture of Grand Theft Auto. Jefferson, North Carolina, United States: McFarland. ISBN 9780786428229.\n[…]\nKushner, David (2012). Jacked: The Outlaw Story of Grand Theft Auto. Hoboken, New Jersey, United States: Wiley. ISBN 978-0470936375."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rockstar_North",
        "situacao": "ok",
        "texto": "Rockstar North Ltd., anteriormente chamada de DMA Design, é uma desenvolvedora britânica de jogos eletrônicos. Fundada na cidade de Dundee pelo desenvolvedor David Jones, é hoje sediada em Leith Street, em Edimburgo, na Escócia, tendo como seu atual presidente Aaron Garbut. A Rockstar North é subsidiária da Rockstar Games.\n[…]\nSeu principal produto é a série Grand Theft Auto, uma das mais vendidas, aclamadas e polémicas séries de videogames de todos os tempos. A Rockstar North foi responsável pela sua produção desde Grand Theft Auto III até à sua última instalação, Grand Theft Auto V. A série se tornou ícone da cultura popular mundial, e consta na lista dos jogos mais vendidos da história. A empresa, quando ainda se chamava DMA, também produziu a franquia Lemmings.\n[…]\nAs reações foram, em geral, favoráveis, em particular pelas inovações trazidas pelo jogo e pela jogabilidade, embora os gráficos tenham recebido algumas críticas.\n[…]\nNesse meio tempo, a empresa lançou (sob o já extinto selo BMG Interactive) o jogo Grand Theft Auto, para PC e Playstation I. O jogo utilizava o mesmo esquema de Body Harvest, em que o jogador podia controlar qualquer veículo disponível no ambiente, mas era 2D, top-down (o jogador vê a cidade como se estivesse em um helicóptero) e o enredo envolvia polícia e bandidos, com um \"pequeno\" diferencial: o jogador assumia o papel do bandido, e não da polícia.\n[…]\nComo um ladrão de carros, o objetivo era escalar uma espécie de ranking do crime organizado, roubando carros e outros veículos em famosas cidades americanas. O jogo se tornou um sucesso, chamando a atenção (e gerando muita controvérsia) por conta da violência que apresentava.\n[…]\nSite Oficial de Grand Theft Auto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Wario",
      "descricao": "Personagem da Nintendo, rival ganancioso de Mario, de roupa amarela e roxa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Wario mistura Mario com uma palavra japonesa. O que essa palavra significa?",
    "resposta": "Mau",
    "distratores": [
      "Gordo",
      "Avarento",
      "Forte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wario"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wario",
        "situacao": "ok",
        "texto": "Wario (English:  ) is a character in Nintendo's Mario franchise who was designed as an antithesis of Mario. Wario first appeared as the main antagonist and  final boss in the 1992 Game Boy game Super Mario Land 2: 6 Golden Coins. His name is a portmanteau of the name Mario and the Japanese word warui (悪い), meaning \"bad\". He is usually portrayed as a selfish and greedy treasure hunter who, in karmi\n[…]\nThis game introduces Wario's invulnerability, allowing him to be burned or flattened without sustaining damage.\n[…]\nWario was used by Todd Harper as an example of the cultural signifiers of fatness that were specifically being created as traits typical of fat characters in fighting games as a whole in a paper for the Journal of Electronic Gaming and Esports. They mentioned that Wario possesses a unique move in which he uses his teeth to efficiently chomp through anything, including other fighters, explosives, and even his own motorcycle. He was also being described as a \"slob\" archetype.\n[…]\nMagazines have also praised Wario's outfit, particularly in Mario Golf: Super Rush. In September 2021, Peter Nguyen, a professional stylist for \"The Essential Man\", commented on a Hiking Wario outfit in Mario Kart Tour, calling it \"stylish\" and saying, \"I think this is the most wearable and strongest appearance for Wario\". He was also described as a \"fashion icon\".\n[…]\nA screenshot of Mario & Sonic at the Olympic Games Tokyo 2020 showing Wario in swimwear appeared to depict him without nipples, leading fans and video game website Polygon to speculate about his lack of anatomical features.\n[…]\nKirk Hamilton (January 12, 2017). \"OK, Bear With Me: What If Mario And Wario Are The Same Guy?\". Kotaku. Archived from the original on January 13, 2017.\n[…]\nChris Plante (September 21, 2021). \"Wario is what would happen if Mario had a personality\". Polygon. Archived from the original on November 12, 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wario",
        "situacao": "ok",
        "texto": "Wario (ワリオ) é um amigo e rival de Mario nos videogames. Ele é muito parecido com o Mario, e são considerados primos (embora o grau exato não tenha sido revelado), fato dito pela revista Nintendo Power. Assim como Mario e Luigi, Wario originalmente era o irmão de Waluigi, fato posteriormente desmentido.\n[…]\nO nome Wario vem da combinação das palavras Mario e warui (que significa mau em japonês). Ele foi criado por Gunpei Yokoi para representar o Oposto de Mario. Por isso pode ser considerado o \"W\" em vez do \"M\", uma vez que o \"W\" de cabeça para baixo fica o \"M\".\n[…]\nO nome \"Wario\" é um portmanteau de \"Mario\" com o adjetivo japonês warui (悪い) que significa \"mau\"; portanto, um \"Mario mau\" (também simbolizado pelo \"W\" em seu chapéu, um \"M\" de cabeça para baixo). A tradição oficial da Nintendo afirma que Wario foi um rival de infância de Mario e Luigi, que ficou com ciúmes de seu sucesso. O dublador Charles Martinet, que dubla Mario desde 1995, também é a voz de Wario. Durante a audição para o papel, Martinet foi instruído a falar em um tom mesquinho e áspero.\n[…]\nWario geralmente usa Bob-Ombs, como visto em Wario Land: Super Mario Land 3, Wario Blast e Mario Kart: Double Dash!!. A série WarioWare usa proeminentemente as bombas como motivo visual para representar o limite de tempo.\n[…]\nMario - Mario e Wario são amigos e rivais. Wario sempre tem inveja do Mario e tenta supera-lo a qualquer custo. Muitas vezes Wario se alia ao Mario em certas ocasiões como foi mostrado na série Mario Party e em Super Mario 64 DS.\n[…]\nLuigi - Não se sabe a relação entre Luigi e Wario. No primeiro jogo da série Mario Party, foi mostrado que a relação do Wario com Luigi é parecida com a relação entre Wario e Mario.\n[…]\nWario Land: Super Mario Land 3\n[…]\nMario & Wario\n[…]\nSuper Mario Party\n[…]\nMario Golf: Super Rush\n[…]\nMario Party Superstars",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ash Ketchum",
      "descricao": "Treinador protagonista do anime Pokémon, chamado Satoshi no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Japão, o protagonista do anime Pokémon, Ash Ketchum, tem o mesmo prenome do criador da franquia. Que nome é esse?",
    "resposta": "Satoshi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ash_Ketchum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum, known as Satoshi (サトシ) in Japan, is a character in the Pokémon franchise owned by Nintendo, Game Freak, and Creatures. He was the protagonist of the Pokémon anime for the first 25 seasons, as well as the protagonist of several manga series. In Japanese, the character is voiced by Rica Matsumoto. In the English dub, he was voiced by Veronica Taylor in the first eight seasons and Sarah \n[…]\nSatoshi Tajiri, the creator of Pokémon, has stated that Ash represents the \"human aspect\" of the series, and that Ash reflects what he himself was like as a child.\n[…]\nAsh was designed by Atsuko Nishida, and named after creator Satoshi Tajiri. The character was designed to represent how Tajiri was as a child, obsessed with catching bugs.\n[…]\nDuring localization of both for North American audiences, the character's name was changed in the anime to \"Ash Ketchum\", the first name taken from one of the possible default names players could select for the player character in Pokémon Red and Blue, and the surname tying into the tagline for the series, \"Gotta catch 'em all!\". He is loosely based on Red, the player character of Pokémon Red and Blue.\n[…]\nIn an interview Tajiri noted the contrast between the characters' relationship in the games and anime; while in the games they were rivals, in the anime, Shigeru represented Satoshi's master. When asked if Satoshi would equal or surpass Shigeru, Tajiri replied \"No! Never!\" Ash's character design was initially overseen by Sayuri Ichishi, replaced by Toshiya Yamada during the Diamond & Pearl series of the anime. Ash received a redesign in the Best Wishes! series, which included larger brown irises.\n[…]\nCryer, Hirun (March 12, 2024). \"Having moved on after 26 years, Ash and Pikachu could one day make their way back to the Pokemon anime: \"Anything is possible\"\". GamesRadar+. Retrieved April 2, 2024.\n[…]\nAsh Ketchum on Bulbapedia\n[…]\nAsh Ketchum on Serebii"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ash_Ketchum",
        "situacao": "ok",
        "texto": "Ash Ketchum (サトシ, Satoshi) é um personagem fictício da franquia Pokémon, propriedade das empresas Nintendo, Game Freak e Creatures.\n[…]\nCriado por Satoshi Tajiri, Ash Ketchum como é conhecido, é o protagonista da série de anime Pokémon. Ash é um treinador Pokémon cujo maior objetivo é o de se tornar o maior Mestre Pokémon do mundo.\n[…]\nSeu nome em inglês é derivado do nome japonês (como as letras 'ash' estão incluídas em 'Satoshi') e seu lema em inglês é derivado do lema japonês (como as letras \"Gotta catch 'em all!\" estão incluídas em \"Pokémon getto da ze!\"). O sonho de Ash é se tornar um Mestre Pokémon. Ele é vagamente baseado em Red, o protagonista dos jogos Pokémon Red, Green, Blue e Yellow, bem como os remakes Pokémon FireRed e LeafGreen.\n[…]\nAsh Ketchum foi mencionado pela primeira vez em um jogo eletrônico no diálogo de Pokémon Play It!, e sua primeira aparição em um jogo foi em Pokémon Puzzle League. Satoshi Tajiri, o criador de Pokémon, com quem Ash compartilha seu nome japonês, afirmou que Ash representa o 'aspecto humano' da série, e que Ash reflete como ele era quando criança.\n[…]\nNa versão japonesa, seu nome é Satoshi, derivado diretamente do nome do criador da franquia, Satoshi Tajiri. É bem provável que seu nome americano tenha sido escolhido entre os nomes disponíveis nas versões Red e Blue originais e em Pokémon Yellow, onde \"Ash\" é uma das opções de nome prontas para o personagem jogador das versões americanas, e seu sobrenome \"Ketchum\" é um trocadilho com o slogan americano da franquia, \"Gotta catch 'em all\". Na versão francesa do anime, Ash é chamado de \"Sacha\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Pac-Man",
      "descricao": "Jogo de fliperama da Namco lançado em 1980, em que uma bola amarela come pastilhas num labirinto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Japão, o jogo se chamava Puck-Man. Por que o nome mudou para Pac-Man ao chegar aos fliperamas americanos?",
    "resposta": "Medo de vândalos trocarem o P por F",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pac-Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pac-Man",
        "situacao": "ok",
        "texto": "Pac-Man, originally titled Puck Man in Japan, is a 1980 maze video game developed and published by Namco for arcades. It was released in Japan on May 22, 1980 and by Midway Manufacturing in North America in October 1980. The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called \"Power Pellets\" causes the gho\n[…]\nThe in-game characters were made to be cute and colorful to appeal to younger players. The original Japanese title of Puck Man was derived from the Japanese phrase paku paku taberu, which refers to gobbling something up; the title was changed to Pac-Man for the North American release due to fears of vandals defacing cabinets by converting the P into an F, as in fuck.\n[…]\nBefore showing the game to distributors, Namco America implemented several changes, such as changing the ghosts' names. The game's title was also changed because Namco executives worried that vandals would change the \"P\" in Puck Man to an \"F\". Masaya Nakamura chose to rename the game Pac-Man, which he felt was closer to the original Japanese title of Pakkuman. In Europe, the game was released under both titles.\n[…]\nAfter the Puck Man title was abandoned but before Pac-Man was selected, early American promotional material used the name Snapper.\n[…]\nThe game's popularity has led to \"Pac-Man\" being adopted as a nickname, such as by boxer Manny Pacquiao and the American football player Adam Jones.\n[…]\nPac-Man is one of the best-selling arcade games in North America, where Pac-Man and Ms. Pac-Man had become the most successful machines in the history of the amusement arcade industry. Legal concerns raised over who owned the game caused Ms. Pac-Man to become owned by Namco, who assisted in production of the game. Ms. Pac-Man inspired its own line of remakes, including Ms. Pac-Man Maze Madness (2000), and Ms."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pac-Man",
        "situacao": "ok",
        "texto": "Pac-Man (conhecido em japonês com o nome de Puckman ou パックマン) é um jogo eletrônico criado por Tōru Iwatani para a empresa Namco, e sendo distribuído para o mercado americano pela Midway Games. Produzido originalmente para Arcade no início dos anos 1980, tornou-se um dos jogos mais jogados e populares no momento, tendo versões modernas para diversos consoles e continuações para tantos outros, inclu\n[…]\nO jogo original rendeu muitas versões ainda para o Atari 2600 (como \"Mrs. Pacman\", e \"Super Pac-Man.\", além de outros não relacionados mas que seguiam o mesmo estilo), e posteriormente para diversos outros consoles e para o computador. Atualmente existem versões em 3 dimensões, outras em estilo \"adventure\", sempre remontando ao personagem redondo e faminto do jogo original e seus perseguidores fantasmas.\n[…]\nO jogo foi lançado em 22 de maio de 1980. A ideia do desenho original ocorreu durante um jantar com amigos, e deve-se a uma pizza sem uma fatia, que fazia lembrar uma boca aberta; assim tem origem uma personagem inspirada em Paku, uma personagem popular no Japão conhecido pelo seu apetite. A personagem e jogo tiveram o nome Puck-Man, do termo Japonês paku-paku, que significa a boca de alguém a abrir-se e fechar-se.\n[…]\nNo jogo também havia a participação de toda a família de Pac-Man jé conhecida, também um novo membro fazia parte do elenco, um bebezinho de colo.\n[…]\nO jogo encabeçava um novo conceito de “conectividade” que acabou abandonado pela empresa, mas era extremamente divertido.\n[…]\nBilly Mitchell é o detentor do recorde mundial do Pac-Man. O recorde - homologado pela Twin Galaxies - foi logrado durante uma disputa entre Estados Unidos e Canadá. Ele levou mais de 6 horas para completar o jogo, conseguindo alcançar a pontuação máxima do jogo que é 3 333 360 pontos. Para isso ele teve que completar 256 telas sem perder nenhuma vida.\n[…]\nImplementação 3D do Pacman em OpenGL e C++",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Fantasmas de Pac-Man",
      "descricao": "Os quatro fantasmas que perseguem o protagonista no jogo Pac-Man, de 1980."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Blinky, Pinky e Inky perseguem o Pac-Man pelo labirinto. Qual é o nome do quarto fantasma?",
    "resposta": "Clyde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ghosts_(Pac-Man)",
      "https://en.wikipedia.org/wiki/Pac-Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ghosts_(Pac-Man)",
        "situacao": "ok",
        "texto": "Blinky, Pinky, Inky, and Clyde, collectively known as the Ghost Gang, are a quartet of colorful ghost characters from the Pac-Man video game franchise. Created by Toru Iwatani, they first appear in the 1980 arcade game Pac-Man as the sole antagonists. The ghosts have appeared in every Pac-Man game since, sometimes becoming minor antagonists or allies to Pac-Man, such as in Pac-Man World 3 and the \n[…]\nThe original Japanese version of the game had the ghosts named \"Oikake\", \"Machibuse\", \"Kimagure\", and \"Otoboke\", translating respectively to \"chaser\", \"ambusher\", \"fickle\", and \"stupid\". When the game was exported to the United States, Midway Games changed their names to \"Shadow\", \"Speedy\", \"Bashful\", and \"Pokey\", their nicknames being changed to \"Blinky\", \"Pinky\", \"Inky\", and \"Clyde\", respectively. Early promotional material would sometimes refer to the ghosts as \"monsters\" or \"goblins\".\n[…]\nUproxx argues that the ghosts are really just people in costumes, based on what is revealed between rounds in the game. A cutscene that appears after the 5th round of the game, shows the ghost Blinky chasing after Pac-Man, and his ghost costume snags on a nail and rips, revealing a leg underneath. In a later cutscene, Blinky has a rip in his ghost costume, then after going off screen, he is seen back on the screen dragging the red costume behind him.\n[…]\nThe 2013 TV series Pac-Man and the Ghostly Adventures and its tie-in video games introduce a new ghost antagonist, Lord Betrayus, the ruler of the Netherworld who seeks to take over Pac-World with his ghost army. Blinky, Inky, Pinky and Clyde act as secret allies to Pac-Man, hoping to one day be restored to life in exchange.\n[…]\nInky alone was ranked the eighth greatest game villain of all time by Guinness World Records in 2013, based on reader votes."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pac-Man",
        "situacao": "ok",
        "texto": "Pac-Man, originally titled Puck Man in Japan, is a 1980 maze video game developed and published by Namco for arcades. It was released in Japan on May 22, 1980 and by Midway Manufacturing in North America in October 1980. The player controls Pac-Man, who must eat all the dots inside an enclosed maze while avoiding four colored ghosts. Eating large flashing dots called \"Power Pellets\" causes the gho\n[…]\nPac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts—Blinky (red), Pinky (pink), Inky (cyan), and Clyde (orange)—who pursue Pac-Man. When Pac-Man eats all of the dots, the player advances to the next level. Levels are indicated by fruit icons at the bottom of the screen.\n[…]\nIf Pac-Man is caught by a ghost, he loses a life; the game ends when all lives are lost. Each of the four ghosts has its own unique artificial intelligence (A.I.), or \"personality\": Blinky gives direct chase to Pac-Man; Pinky and Inky try to position themselves in front of Pac-Man, usually by cornering him; and Clyde switches between chasing and fleeing from Pac-Man depending on his distance from him.\n[…]\nThe ghosts were programmed to display their own distinct personalities in order to prevent the game from becoming too boring or impossibly difficult to play. Each ghost's name provides a hint to its strategy for chasing Pac-Man: Shadow (\"Blinky\") always chases Pac-Man, Speedy (\"Pinky\") tries to get ahead of him, Bashful (\"Inky\") uses a more complicated strategy and Pokey (\"Clyde\") alternates between chasing and escaping.\n[…]\nLego released an exclusive set of a Pac-Man arcade machine for their Lego Icons line. A Lego version of Pac-Man, Clyde, and Blinky are featured on the top of the machine, with a minifigure playing a miniature version of the machine."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Porygon",
      "descricao": "Pokémon do tipo Normal, número 137 da Pokédex Nacional."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de um episódio exibido no Japão em 1997, por que o Porygon praticamente sumiu do anime Pokémon?",
    "resposta": "O episódio causou convulsões em crianças",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (Japanese: でんのうせんしポリゴン, Hepburn: Dennō Senshi Porigon, \"Computer Warrior Porygon\") is the 38th episode of the Pokémon anime's first season. During its sole broadcast in Japan on December 16, 1997, multiple scenes with flashing lights induced photosensitive epileptic seizures in children across the country. Over 600 people, mostly children, were taken to hospitals; many other\n[…]\nAlthough approximately 1 in 5000 people are susceptible to these types of seizures, the number of people affected by the Pokémon episode was unprecedented.\n[…]\n\"Dennō Senshi Porygon\" itself has never been aired again, in any country. The Pokémon anime has not featured Porygon or its evolutions, Porygon2 and Porygon-Z, in any subsequent episodes despite Pikachu being the one to cause the seizure-inducing strobe effect in one of these scenes. In spite of being absent from the anime, The Pokémon Company continues to feature Porygon in all other aspects of its branding.\n[…]\nThe \"Pokémon Shock\" incident has been parodied many times in popular culture, including a 1999 episode of The Simpsons, \"Thirty Minutes over Tokyo\". In the episode, Bart watches an anime entitled Battling Seizure Robots featuring robots with flashing eye lasers, and asks: \"Isn't this that cartoon that causes seizures?\" The flashing eyes cause him, Marge, Lisa, and Homer to have seizures. The same scene is seen again in the episode's end credits, this time covering the entire screen.\n[…]\nOn September 19, 2020, the official Pokémon Twitter account referenced the episode, saying \"Porygon did nothing wrong,\" in reference to the resulting explosion from Pikachu's Thunderbolt attack being the in-universe cause of the flashing lights, not Porygon. The tweet was deleted shortly thereafter, speculated to be because of the taboo subject matter.\n[…]\nPokémon Go § Criticism and incidents\n[…]\n\"Dennō Senshi Porygon\" at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Denn%C5%8D_Senshi_Porygon",
        "situacao": "ok",
        "texto": "\"Dennō Senshi Porygon\" (でんのうせんしポリゴン, Dennō Senshi Porigon; literalmente \"Porygon, o soldado cibernético\", mais comummente traduzido como \"Electric Soldier Porygon\") é o trigésimo oitavo episódio da primeira temporada do anime Pokémon que foi ao ar no Japão em 16 de dezembro de 1997. Desde então não foi mais ao ar em qualquer outro lugar. No entanto, o episódio pode ser encontrado na internet.\n[…]\nA notícia do acidente espalhou rapidamente pelo Japão. No dia seguinte, a emissora de televisão que tinha exibido o episódio, a TV Tokyo, emitiu um pedido de desculpas para o povo japonês, suspendeu o programa e disse que iria investigar a causa das convulsões. Os funcionários do Atago Esquadra, sob as ordens da Agência Nacional de Polícia, questionaram os produtores do programa sobre o conteúdo do anime e o processo de produção.\n[…]\nEm um episódio de Os Simpsons, intitulado \"Trinta Minutos Sobre Tóquio\", a família Simpson viaja para o Japão. Quando eles chegam no país, Bart é visto assistindo a um desenho animado chamado \"Battling Seizure Robots\", e pergunta: \"Não é este desenho animado que causa convulsões?\". Os olhos brilhantes dos robôs provocaram convulsões na família. Inicialmente Homer, que não apareceu na cena anterior, também sofre o ataque epilético ao olhar para a televisão.\n[…]\nA mesma cena se repete no fim do episódio, mas em tela inteira.\n[…]\nUm episódio de South Park que foi ao ar em novembro de 1999, chamado \"Chinpokomon\", gira em torno de um Pokémon, como um fenômeno, chamado Chinpokomon, o qual as crianças de South Park estavam obcecadas. Os brinquedos e os jogos eram produzidos por uma empresa japonesa para South Park. O presidente da empresa, Sr. Hirohito, usa os brinquedos para fazer uma lavagem cerebral nas crianças norte-americanas, criando o seu próprio exército, com a intenção de derrubar o \"mal\" império americano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Código Konami",
      "descricao": "Sequência de botões usada como truque em jogos da Konami, criada por Kazuhisa Hashimoto."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ao adaptar Gradius para o Nintendinho, em 1986, por que o programador Kazuhisa Hashimoto criou o famoso Código Konami?",
    "resposta": "Achava o jogo difícil demais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Konami_Code"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Konami_Code",
        "situacao": "ok",
        "texto": "The Konami Code (Japanese: コナミコマンド, Konami Komando, \"Konami command\"), also commonly referred to as the Contra Code and sometimes the 30 Lives Code, is a cheat code that appears in many video games developed by Konami, as well as some non-Konami games.\n[…]\nThe Konami Code was first used in the release of Gradius (1986), a scrolling shooter for the NES and was popularized among North American players in the NES version of Contra. The code is also known as the \"Contra Code\" and \"30 Lives Code\", since the code provided the player 30 lives in Contra. The code has been used to help novice players progress through the game.\n[…]\nThe Konami Code was created by Kazuhisa Hashimoto, who was developing the home port of the 1985 arcade game Gradius for the NES. Finding the game too difficult to play through during testing, he created the cheat code, which gives the player a full set of power-ups (normally attained gradually throughout the game). After entering the sequence using the controller when the game was paused, the player received all available power-ups.\n[…]\nA variation of the Konami code is used to reset the Netflix program on some devices.\n[…]\nWithin the Unreal Engine 5 demonstration program Valley of the Ancient, entering the Konami Code will cause the giant robot within it to dab.\n[…]\nThree Fisher-Price toys, one modeled after a game controller, one modeled after a Game Boy, and one modeled after a Nintendo Switch (which show various lights and sounds when the buttons are pressed) present a special sequence of lights and sounds if the Konami code is entered.\n[…]\nAn additional color palette (based on Contra's colors) in League Settings is unlocked on 4 Player Game Night Organizer when the Konami Code is entered outside of a text field."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_Konami",
        "situacao": "ok",
        "texto": "O código Konami (também conhecido como Konami Code) é um cheat que pode ser usado em vários jogos da Konami, normalmente habilitando algum tipo de opção secreta. O código foi utilizado pela primeira vez em 1986 no jogo Gradius para o Nintendo. Durante o jogo, ou nas telas de apresentação, o jogador pressiona a seguinte sequência de botões:\n[…]\nO código Konami foi criado em 1985 por Kazuhisa Hashimoto, programador da conversão do jogo Gradius, lançado no ano seguinte para Famicom e NES. Por achar o jogo muito difícil durante os testes, criou o código que dá ao jogador todos os powerups, que normalmente devem ser adquiridos no decorrer do jogo. Além disso, quando digitado inversamente fornece 30 vidas ao jogador. Por razões desconhecidas, ele não removeu o código após finalizar o desenvolvimento do jogo.\n[…]\nO exemplo mais famoso do uso do código Konami provavelmente é a versão de 1988 para NES do jogo Contra, no qual o código aumenta o número de vidas do jogador de 3 para 30. Devido a alta dificuldade do jogo, muitos jogadores se tornaram dependentes do código para completar o jogo, dando ao código o nome de \"Código Contra\".\n[…]\nApesar de não ter sido a primeira seqüência de comandos de trapaça em jogos eletrônicos (distinção que pertence a sequência \"xyzzy\" do jogo de arcade Colossal Cave), é provavelmente o mais conhecido código no mundo dos videogames. Devido a sua popularidade, tem sido citada nos mais diferentes contextos da cultura popular. Diversas bandas, cartunistas e programas de televisão fizeram referências ao código:\n[…]\nNo filme Detona Ralph (2012), o personagem Rei Doce usa o código para entrar na programação de seu jogo.\n[…]\nNo jogo Adventure Time: Hey Ice King! Why'd you steal our garbage?!!, o código Konami funciona para ligar uma música chamada \"Secret Screen Song\".\n[…]\nVideo do programa Cheat! no G4 sobre o código Konami",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Space Invaders",
      "descricao": "Jogo de fliperama japonês de 1978, da Taito, em que o jogador atira em alienígenas que descem pela tela."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Space Invaders, os alienígenas ficam mais rápidos à medida que são abatidos. Por que isso acontecia na máquina original?",
    "resposta": "O processador tinha menos figuras para desenhar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Space_Invaders"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Space_Invaders",
        "situacao": "ok",
        "texto": "Space Invaders is a 1978 fixed shooter video game developed and published by Taito for arcades. Taito released it in Japan in July 1978 and overseas through a partnership with Midway Manufacturing later that year. Space Invaders was the first video game with endless gameplay and the first fixed shooter, setting the template for the genre. The goal is to defeat waves of descending aliens with a hor\n[…]\nSpace Invaders was developed by Japanese designer Tomohiro Nishikado, who spent a year designing it and developing the necessary hardware to produce it. Because he worked alone and handmade many of the development tools, the process incurred minimal costs. Taito originally did not credit a designer as anonymity was a required part of Nishikado's contract with the company.\n[…]\nThe game was originally titled Space Monsters after a popular song in Japan at the time, \"Monster\", but was changed to Space Invaders by the designer's superiors.\n[…]\nNishikado designed his own custom hardware and development tools for Space Invaders. The game uses an Intel 8080 central processing unit (CPU) and displays raster graphics on a CRT monitor using a bitmapped framebuffer. The game outputs monaural sound hosted by a combination of analog circuitry and a Texas Instruments SN76477 sound chip.\n[…]\nHe further described Space Invaders as the epitome of fundamental gameplay with \"no frills\" that retro game enthusiasts seek.\n[…]\nDecades later, Video Games Live performed audio from Space Invaders as part of a special retro \"Classic Arcade Medley\" in 2007. In honor of the game's 30th anniversary, Taito produced an album, Space Invaders 2008,  that features music inspired by the game. Released by Avex Trax in December 2008, the album includes six songs that were originally in the PSP version of Space Invaders Extreme. Taito produced a Space Invaders-themed animated music video to promote the album."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Space_Invaders",
        "situacao": "ok",
        "texto": "Space Invaders (スペースインベーダー, Supēsu Inbēdā) é um jogo de videogame de arcade desenhado por Tomohiro Nishikado e lançado em 1978. Foi originalmente construído pela Taito Corporation e um tempo depois foi licenciado para produção nos Estados Unidos pela Midway Games. Space Invaders foi um dos primeiros jogos de tiro com gráfico bidimensional. O objetivo é destruir ondas de naves com uma espaçonave hu\n[…]\nNas primeiras versões do arcade em 1978, o jogo se passava em uma tela em \"reverso\" na parte inferior do gabinete e refletido na forma correta em espelhos dentro do arcade, onde também se encontravam desenhos ao fundo. Com a ajuda da iluminação interna, todo este conjunto dava um efeito tridimensional ao jogo. Tinha-se a ilusão de os gráficos estarem flutuando. Estes efeitos não mais foram observados nas versões futuras deste jogo e outros games.\n[…]\nSpace Invaders foi um sucesso e gerou centenas de milhões de dólares, não só para os desenvolvedores mas também para outras empresas que imitaram a fórmula de sucesso do jogo. A jogabilidade foi muito inovadora na época. Antes a maioria dos jogos tinha um tempo para acabar, já em Space Invaders o jogo só acabava quando o jogador perdesse suas três vidas, com isso a duração do jogo ficava nas mãos da habilidade dos jogadores.\n[…]\nO jogo foi o primeiro arcade a ser convertido para o console Atari 2600, sendo um sucesso imediato por não apenas capturar as características do jogo original mas também por adicionar novas versões de jogo. Posteriormente foram lançadas versões para Atari 5200, MSX, NES e Colecovision. Clones de Space Invaders podem ser encontrados em qualquer videogame moderno, internet e até mesmo em celulares.\n[…]\nA IGN colocou o jogo na sua lista de dez jogos mais influentes de todos os tempos.\n[…]\nspace invaders 25 anniversary official web site, Site comemorativo aos 25 anos do jogo (em Japonês ou Inglês)\n[…]\nVersão do jogo original",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Space Invaders",
      "descricao": "Jogo de fliperama japonês de 1978, da Taito, em que o jogador atira em alienígenas que descem pela tela."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1978, qual designer japonês criou o fliperama Space Invaders para a empresa Taito?",
    "resposta": "Tomohiro Nishikado",
    "distratores": [
      "Toru Iwatani",
      "Shigeru Miyamoto",
      "Hideo Kojima"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Space_Invaders",
      "https://en.wikipedia.org/wiki/Tomohiro_Nishikado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Space_Invaders",
        "situacao": "ok",
        "texto": "Space Invaders is a 1978 fixed shooter video game developed and published by Taito for arcades. Taito released it in Japan in July 1978 and overseas through a partnership with Midway Manufacturing later that year. Space Invaders was the first video game with endless gameplay and the first fixed shooter, setting the template for the genre. The goal is to defeat waves of descending aliens with a hor\n[…]\nDesigner Tomohiro Nishikado drew inspiration from video games such as Gun Fight and Breakout, electro-mechanical target shooting games, and science fiction narratives such as the novel The War of the Worlds, the anime Space Battleship Yamato, and the film Star Wars. To complete development, he had to design custom hardware and development tools to use the features in microprocessor technology, which was new to him.\n[…]\nSpace Invaders was developed by Japanese designer Tomohiro Nishikado, who spent a year designing it and developing the necessary hardware to produce it. Because he worked alone and handmade many of the development tools, the process incurred minimal costs. Taito originally did not credit a designer as anonymity was a required part of Nishikado's contract with the company.\n[…]\nAfter creating the pixel art, Nishikado created a tool to animate two frames of movement for each character and adjusted the design on-screen with a light pen. He added the bunkers and the mystery ship to the playing field afterward.\n[…]\nTo add audio, Nishikado worked with Michiyuki Kamei, who created sound effects for Taito's games. Kamei spent four to five months on the audio circuitry for Space Invaders while also working on another game, Blue Shark. As management had prioritized Blue Shark, his work on Space Invaders was hurried in order to have both games ready for an unveiling event in the summer of 1978. Kamei decided to reuse parts and designs from other Taito games to meet the deadline."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tomohiro_Nishikado",
        "situacao": "ok",
        "texto": "Tomohiro Nishikado (西角 友宏, Nishikado Tomohiro; born March 31, 1944) is a Japanese video game designer and engineer. He is the creator of Taito's arcade video game Space Invaders, released in 1978, often credited as the first shoot 'em up and for beginning the golden age of arcade video games.\n[…]\nTV Basketball was an arcade basketball video game released by Taito in April 1974. It was designed by Tomohiro Nishikado, who wanted to move beyond simple rectangles to character graphics. Taito released the game in Europe as Basketball in 1974.\n[…]\nT. T. Speed Race CL (1978)\n[…]\nInterceptor is a first-person combat flight simulator designed by Tomohiro Nishikado. The game was first demonstrated in 1975, before releasing in Japan in March 1976, and in Europe the same year. It involved piloting a jet fighter, using an eight-way joystick to aim with a crosshair and shoot at enemy aircraft that move in formations of two, can scale in size depending on their distance to the player, and can move out of the player's firing range.\n[…]\nIn 1977, Nishikado began developing Space Invaders, which he created entirely on his own. In addition to designing and programming the game, he also did the artwork and sounds, and engineered the game's arcade hardware, putting together a microcomputer from scratch. Following its release in 1978, Space Invaders went on to become his most successful video game. It is frequently cited as the \"first\" or \"original\" in the shoot 'em up genre.\n[…]\nHe left Taito in 1996 to found his own company, Dreams. Under Dreams when it was owned by Nishikado, his credited games include Bust-A-Move Millennium, published by Acclaim Entertainment in 2000.\n[…]\nList of Taito games\n[…]\nArticle at The Dot Eaters, on Nishikado and a history of Space Invaders.\n[…]\nPartial list of games credited to Nishikado."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Space_Invaders",
        "situacao": "ok",
        "texto": "Space Invaders (スペースインベーダー, Supēsu Inbēdā) é um jogo de videogame de arcade desenhado por Tomohiro Nishikado e lançado em 1978. Foi originalmente construído pela Taito Corporation e um tempo depois foi licenciado para produção nos Estados Unidos pela Midway Games. Space Invaders foi um dos primeiros jogos de tiro com gráfico bidimensional. O objetivo é destruir ondas de naves com uma espaçonave hu\n[…]\nPara construir o jogo, Nishikado se inspirou na mídia popular, como A Guerra dos Mundos e Star Wars.\n[…]\nSegundo Toshihiro Nishikado, designer do jogo, os aliens são inspirados na descrição dos invasores do romance A Guerra dos Mundos, do escritor Herbert George Wells. \"Na história, os aliens se parecem com polvos. Eu desenhei o primeiro bitmap baseado nessa ideia, depois criei outros aliens parecidos com criaturas marinhas, como lulas e caranguejos.\" disse Nishikado.\n[…]\nO designer também contou que a ideia inicial eram fazer os inimigos como aviões mas isso não foi possível devido as dificuldades técnicas da época. Nishikado também se mostrou contrário a ideia de colocar seres humanos como inimigos por considerar moralmente incorreto fazer os jogadores atirarem em imagens humanas.[carece de fontes]?\n[…]\nSpace Invaders foi um sucesso e gerou centenas de milhões de dólares, não só para os desenvolvedores mas também para outras empresas que imitaram a fórmula de sucesso do jogo. A jogabilidade foi muito inovadora na época. Antes a maioria dos jogos tinha um tempo para acabar, já em Space Invaders o jogo só acabava quando o jogador perdesse suas três vidas, com isso a duração do jogo ficava nas mãos da habilidade dos jogadores.\n[…]\nhttp://www.taito.co.jp/, Taito company homepage (em Japonês)\n[…]\nspace invaders 25 anniversary official web site, Site comemorativo aos 25 anos do jogo (em Japonês ou Inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Creeper",
      "descricao": "Criatura verde que explode ao se aproximar do jogador no jogo Minecraft."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Creeper, monstro verde de Minecraft, nasceu de um erro de programação na criação de qual animal?",
    "resposta": "Porco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Creeper_(Minecraft)",
      "https://minecraft.wiki/w/Creeper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Creeper_(Minecraft)",
        "situacao": "ok",
        "texto": "The Creeper is a fictional creature created by Markus “Notch” Persson that appears in the sandbox video game Minecraft and other media in the corresponding Minecraft franchise.\n[…]\nLead designer Jens Bergensten stated that creepers would be unlikely to have been added to modern Minecraft, as he thinks it would be \"controversial\" to have player-made structures potentially damaged or destroyed, though reassuring that the mob will not be removed due to its iconic status.\n[…]\nThe creeper is considered to be one of Minecraft's most iconic enemies and icons. The pixelated face of the creeper has been integrated into the letter \"A\" of the Minecraft logo, as well as being used in numerous Halloween costumes and cosplays. Guinness World Records Gamer's Edition listed the creeper as tenth in their list of \"top 50 video game villains\". The creeper has been featured in multiple Lego Minecraft sets and has been the main focus of one.\n[…]\nIn 2021, PC Gamer ranked creeper as 9th of \"the 50 most iconic characters in PC gaming\", stating that \"The Creeper is the star of Minecraft, which is ironic considering that the Creeper's effectiveness hinges upon not being seen.\"\n[…]\nCreepers have been the subject of numerous pop culture references and parodies. In the season 25 episode \"Luca$\" of the animated sitcom The Simpsons, Moe Szyslak appears as a creeper and explodes at the end of the theme song's \"couch gag\". On August 19, 2011, Jordan Maron (also known as the YouTuber CaptainSparklez) released the song \"Revenge\", a parody of \"DJ Got Us Fallin' in Love\", depicting a Minecraft player seeking revenge against creepers.\n[…]\nCreeper on Minecraft Wiki"
      },
      {
        "url": "https://minecraft.wiki/w/Creeper",
        "situacao": "ok",
        "texto": "This page is protected so that only users with the \"autoconfirmed\" permission can edit it.\n[…]\nThe 'A' in the Minecraft logo now includes a creeper face. 1.5\n[…]\nCreepers have been portrayed in many Minecraft products including but not limited to:\n[…]\nAs part of an official collaboration, creepers are included as monsters in Monstrous Compendium Volume Three: Minecraft Creatures , a free add-on for the roleplaying game Dungeons & Dragons . [ 30 ] In the game, they are \"Monstrosities\" and have the alignment \"Typically Neutral Evil.\"\n[…]\nA charged creeper next to a normal creeper\n[…]\n↑ https://minecraft.net/en-us/article/meet-creeper\n[…]\n↑ \"Minecraft Creeper Skeleton Vintage Cap\" – Minecraft.net.\n[…]\n↑ \"Mattel - Minecraft TNT Series 25 Mini Figure - CREEPER SKELETON (1 inch)(Loose)\" – Walmart.\n[…]\n↑ \"Minecraft Creeper Anatomy Vinyl\" – Walmart.\n[…]\n↑ \"Minecraft Creeper Anatomy from Spin Master\" – TTPM Toy Reviews on YouTube, July 23, 2014\n[…]\n↑ \"Ackshualy other games have different styles and different needs, while the original creeper works in Minecraft, it might blend with the rest of the textures in Dungeons. The simplified version is far more readable, which is necessary for something that can kill you one explosion.\" – @JasperBoerstra (Jasper Boerstra) on X (formerly Twitter), March 8, 2026\n[…]\n↑ \"Minecraft Damaged Creeper Action Figure & Accessory with Portal Piece, 3.25-in Scale Toy\" by Minecraft – Walmart.\n[…]\n↑ https://www.dndbeyond.com/claim/source/minecraft-creatures-monstrous-compendium\n[…]\n\"Meet the Creeper\" by Tom Stone – Minecraft.net , May 15, 2017.\n[…]\nRetrieved from \" https://minecraft.wiki/w/Creeper?oldid=3808519 \""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Creeper",
        "situacao": "ok",
        "texto": "Creeper é uma criatura fictícia no jogo eletrônico Minecraft. Os creepers são mobs hostis (personagens não-jogáveis móveis) que surgem em lugares escuros. Em vez de atacar o jogador diretamente, eles se aproximam rastejando do jogador e explodem, destruindo blocos na área ao redor e potencialmente ferindo ou matando o jogador se ele estiver dentro do raio da explosão.\n[…]\nSeu camuflado verde e comportamento geralmente silencioso ajudam em ataques furtivos, tornando-os um dos mobs mais perigosos de Minecraft. Os creepers foram adicionados pela primeira vez ao Minecraft em uma atualização pré-alfa do jogo, lançada em 1.º de setembro de 2009.\n[…]\nO modelo de personagem que mais tarde se tornou o creeper foi criado pela primeira vez em 20 de agosto de 2009, como resultado de um erro de programação ao criar o mob porco nos estágios iniciais de pré-alfa do desenvolvimento de Minecraft. O criador do jogo, Markus Persson, misturou acidentalmente as dimensões do modelo, trocando o comprimento pela altura.\n[…]\nEm 2021, a PC Gamer classificou o creeper como o 9.º entre \"os 50 personagens mais icônicos dos jogos de PC\", afirmando que \"O Creeper é a estrela de Minecraft, o que é irônico considerando que a eficácia do Creeper depende de não ser visto\".\n[…]\nOs creepers têm sido tema de inúmeras referências e paródias na cultura pop. No episódio \"Luca$\", da 25.ª temporada da sitcom animada Os Simpsons, o personagem Moe Szyslak aparece como um creeper e explode no final do \"couch gag\" da música-tema. Em 19 de agosto de 2011, Jordan Maron (também conhecido como o youtuber CaptainSparklez) lançou a música \"Revenge\", uma paródia de \"DJ Got Us Fallin' in Love\" de Usher e Pitbull, retratando um jogador de Minecraft buscando vingança contra creepers.\n[…]\nCreeper no Minecraft Wiki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Mortal Kombat",
      "descricao": "Jogo de luta de 1992, da Midway, famoso pela violência e pelos golpes finais chamados fatalities."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A polêmica sobre a violência de Mortal Kombat no Congresso americano levou à criação, em 1994, de qual órgão?",
    "resposta": "ESRB, de classificação etária de jogos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Entertainment_Software_Rating_Board",
      "https://en.wikipedia.org/wiki/Mortal_Kombat_(1992_video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Entertainment_Software_Rating_Board",
        "situacao": "ok",
        "texto": "The Entertainment Software Rating Board (ESRB) is a self-regulatory organization that assigns age and content ratings to consumer video games in the United States and Canada.\n[…]\nThe ESRB was established in 1994 by the Entertainment Software Association (ESA), formerly the Interactive Digital Software Association (IDSA), in response to criticism of controversial video games with excessively violent or sexual content, particularly after the 1993 congressional hearings following the releases of Mortal Kombat and Night Trap for home consoles and Doom for home computers.\n[…]\nAlongside its efforts to classify video games, the ESRB also formed a division known as Entertainment Software Rating Board Interactive (ESRBi), which rated internet content using a similar system to its video game ratings. ESRBi also notably partnered with the internet service provider America Online to integrate these ratings into its existing parental controls. ESRBi was discontinued in 2003.\n[…]\nPrior to the implementation of the Film Classification Act, 2005, which gave it the power to enforce ESRB ratings, the Ontario Film Review Board had used its own powers to classify the M-rated Manhunt as a film and give it a \"Restricted\" rating to ban its sale to those under 18. By contrast, the British Columbia Film Classification Office considered the ESRB rating to be appropriate.\n[…]\nAn ESRB representative stated that the Board uses the AO rating when warranted, even due to violence, and that in most occasions, publishers would edit the game to meet the M rating to ensure wide commercial availability instead of keeping the AO rating."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mortal_Kombat_(1992_video_game)",
        "situacao": "ok",
        "texto": "Mortal Kombat is a 1992 fighting game developed and published by Midway for arcades. It is the first main installment in the Mortal Kombat franchise, and was subsequently released by Acclaim Entertainment for nearly every home platform of the time. The game presents a martial arts tournament in which ten characters (including a choice of seven player characters) contend with the fate of Earth at s\n[…]\nHowever, it also sparked much controversy for its depiction of extreme violence and gore using realistic digitized graphics and, along with the home releases of Night Trap and Lethal Enforcers, prompted the formation of the Entertainment Software Rating Board (ESRB), a U.S. government-backed organization that set descriptor ratings for video games.\n[…]\nThey concluded, \"Despite some control glitches and the altered Fatality Moves, Mortal Kombat for the SNES is a great representation of an arcade classic that will more than satisfy most gamers.\" However, the Nintendo version's widely reported censorship of blood and dismemberments affected sales, and was widely criticized by gaming media for censorship issues  into the following decades. In 2006, IGN named it as the eighth worst arcade-to-console conversion.\n[…]\nElectronic Gaming Monthly awarded Mortal Kombat the title of \"Most Controversial Game of 1993\". In 1995, the Daily News wrote, \"the original Mortal Kombat video game debuted in 1992. Its combination of story line, character and mega-violence soon made it a hit worldwide.\n[…]\nMortal Kombat was one of many violent video games that came into prominence between 1992 and 1993, generating controversy among parents and public officials. Hearings on video game violence and the corruption of society, headed by Senators Joseph Lieberman and Herb Kohl, were held in late 1992 to 1993.\n[…]\nMortal Kombat at MobyGames\n[…]\nMortal Kombat at IMDb\n[…]\nMortal Kombat at the Killer List of Videogames"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Entertainment_Software_Rating_Board",
        "situacao": "ok",
        "texto": "Entertainment Software Rating Board (ESRB) é a organização que analisa, decide e coloca as classificações etárias indicativas para jogos eletrônicos comercializados na América do Norte. Além de classificação de jogos, a organização também impõe regras para publicidade e de privacidade online no mercado dos jogos eletrônicos. Foi fundada em 1994 pela Entertainment Software Association (Associação d\n[…]\nO ESRB aplica classificações aos jogos pelo seu conteúdo, similar aos sistemas de classificação de filmes como o MPAA usado nos EUA e em muitos países. Sua meta é ajudar os consumidores em determinar o conteúdo de um jogo e para quem ele é intencionado. A classificação do jogo é exibida na sua caixa, em anúncios e nos sites dos jogos.\n[…]\nApesar da ESRB classificar jogos para os Estados Unidos, México e Canadá, a maioria dos seus selos são em sua maior parte encontrados em língua inglesa e algumas vezes acompanhados com francês.\n[…]\nQuando o jogo está pronto para o lançamento, o publicador manda cópias da versão final do jogo para o ESRB. A embalagem do jogo é revisada e os experts do ESRB jogam o jogo para ter certeza de que toda a informação fornecida durante o processo de classificação estava completa e representava realmente o que estava no jogo. As identidades dos classificadores do ESRB são mantidas em sigilo. Os classificadores não têm ligações à indústria de jogos de computador ou vídeogame.\n[…]\nOs descritores de conteúdo aparecem na parte de trás da caixa do jogo e também em anúncios impressos e sites/sítos dos jogos. O ESRB tem mais de vinte descritores de conteúdo, como Referência a Álcool, Violência e Nudez. Todos os seus descritores estão listados em seu site/sítio. Abaixo, os descritores de conteúdo utilizados na classificação:\n[…]\nViolence (Violência): Conteúdo agressivo e/ou violento. Pode incluir cenas de provocação, luta e/ou atos violentos.\n[…]\n«Página da ESRB» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "M. Bison",
      "descricao": "Vilão da série Street Fighter, da Capcom, líder da organização Shadaloo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a Capcom trocou entre si os nomes de três vilões de Street Fighter 2 ao lançar o jogo no Ocidente?",
    "resposta": "Medo de um processo de Mike Tyson",
    "fonte": [
      "https://en.wikipedia.org/wiki/M._Bison"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M._Bison",
        "situacao": "ok",
        "texto": "M. Bison, known in Japan as Vega (Japanese: ベガ, Hepburn: Bega), is a character and the main antagonist of the Street Fighter series created by Capcom. First introduced in Street Fighter II: The World Warrior (1991) as the final boss of the game, he has since become a recurring character in the series, often serving as both a boss and a playable character.\n[…]\nAt this same time, another concern arose that the name of another character, Mike Bison, conceived as a pastiche to real-life boxer Mike Tyson, would be a legal liability for Capcom. As a result, the characters' names were changed, and the game's final boss was dubbed M. Bison for international appearances of the character.\n[…]\nIn Street Fighter EX, and Street Fighter EX2 Plus, Bison serves as a boss. In Street Fighter EX3, he gains a tag-team super move when paired with Vega. He also often  featured in the Marvel vs. Capcom but noticeably absent from Marvel vs. Capcom: Clash of Super Heroes, though he appears in Chun-Li and Shadow Lady's ending sequences. In Marvel vs. Capcom 2: New Age of Heroes (2000), the Alpha version of Bison is once again a playable character, though he must be unlocked. M.\n[…]\nCapcom: Card Fighters' Clash (1999) and SNK vs. Capcom: SVC Chaos (2003).\n[…]\nDavid Dastmalchian will be portraying M. Bison in the upcoming reboot.\n[…]\nBison appears in the second half of the anime series Street Fighter II V. In the ADV Films dub, he is voiced by Markham Anderson and then later on by Mike Kleinhenz, while Tom Wyner reprises his role from the animated movie for the Animaze English dub. He is still the leader of Shadowlaw, which now has numerous subdivisions, such as the Ashura Syndicate under his associate, Mr. Zochi but has no major history with Guile nor Chun-Li as opposed to other versions.\n[…]\nRyu uses a series of moves to defeat Bison.\n[…]\nMedia related to M. Bison at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M._Bison",
        "situacao": "ok",
        "texto": "Esta é uma lista de personagens da série Street Fighter.\n[…]\nMike (マイク, Maiku) é um boxeador afro-americano que competia profissionalmente até acidentalmente matar um oponente em uma luta. É o segundo oponente que o jogador enfrenta em Street Fighter. Mike é visto como um precursor de Balrog ou M. Bison (Mike Bison) na versão original japonesa, devido ao seu perfil e aparência similares.\n[…]\nAkuma, mas conhecido no Japão como Gouki, fez sua primeira aparição no jogo Super Street Fighter II Turbo (1994). Na forma Shin Akuma também foi um dos chefes do jogo SNK vs. Capcom[carece de fontes]? Tem como estilos de luta o Ansatsuken, enraizado nas artes indígenas do caratê e Shorinji Kempo\n[…]\nRose (ローズ, Rōzu) tem sua primeira aparição em Street Fighter Alpha. Ela é uma cartomante que parte pelo mundo para erradicar os poderes malignos de Bison com o uso de seu próprio poder, o Soul Power. Ao fim do jogo, Rose enfrenta Bison e aparentemente o mata. Porém, em seu final em Street Fighter Alpha 2, Rose consulta suas cartas de tarô e descobre que Bison conseguiu sobreviver.\n[…]\nNo intervalo existente entre a série Alpha e Street Fighter II: The World Warrior, Bison permanece no corpo de Rose até que seus cientistas recriem um novo corpo para ele. Bison retorna como o oponente final de Street Fighter II. O livro Street Fighter IV Training Guide revela que Rose sobreviveu ao processo, mas não se lembra do ocorrido.\n[…]\nHugo reaparece em outros jogos, como em SNK vs. Capcom: SVC Chaos e Street Fighter x Tekken.\n[…]\n«Street Fighter II»\n[…]\n«Street Fighter EX3»\n[…]\n«Street Fighter IV»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Donkey Kong (jogo de 1981)",
      "descricao": "Fliperama da Nintendo de 1981 em que um gorila sequestra uma moça e marca a estreia de Mario."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O fliperama Donkey Kong foi criado depois que a Nintendo não conseguiu a licença de qual personagem de desenho animado?",
    "resposta": "Popeye",
    "fonte": [
      "https://en.wikipedia.org/wiki/Donkey_Kong_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Donkey_Kong_(video_game)",
        "situacao": "desambiguacao",
        "texto": "Donkey Kong is a video game franchise by Nintendo.\nDonkey Kong may also refer to:\n\nDonkey Kong (1981 video game), an arcade video game released in 1981, later ported to many home consoles\nDonkey Kong (1994 video game), a Game Boy video game\nDonkey Kong (character), the title character\nDonkey Kong (Game & Watch), an LCD games featuring Mario"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Donkey Kong (jogo de 1981)",
      "descricao": "Fliperama da Nintendo de 1981 em que um gorila sequestra uma moça e marca a estreia de Mario."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No fliperama Donkey Kong, de 1981, antes de virar encanador, qual era a profissão de Mario?",
    "resposta": "Carpinteiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario",
      "https://en.wikipedia.org/wiki/Donkey_Kong_(video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario",
        "situacao": "ok",
        "texto": "Mario ( ; Japanese: マリオ) is a character created by Japanese video game designer Shigeru Miyamoto. He is the star of the Mario franchise, a recurring character in the Donkey Kong franchise, and the mascot of their owner, the Japanese company Nintendo. Mario is an Italian-American plumber who lives in the Mushroom Kingdom with his younger twin brother, Luigi. Their adventures generally involve rescu\n[…]\nMario debuted as the player character of Donkey Kong, a 1981 platform game. Miyamoto created Mario because Nintendo was unable to license Popeye as the protagonist. The graphical limitations of arcade hardware influenced Mario's design, such as his nose, mustache, and overalls, and he was named after Nintendo of America's landlord, Mario Segale. Mario then starred in Mario Bros. (1983).\n[…]\nAt the time, however, because Nintendo was unable to acquire a license to use the characters (and did not until 1982 with Popeye), he ended up creating an unnamed player character, along with Donkey Kong and Lady (later renamed Pauline).\n[…]\nMario usually saves Princess Peach and the Mushroom Kingdom and purges antagonists, such as Bowser, from various areas; since his first game, Mario has usually had the role of saving the damsel in distress. Originally, he had to rescue his girlfriend Pauline in Donkey Kong (1981) from Donkey Kong. Despite being replaced as Mario's love interest by Princess Peach in Super Mario Bros., a redesigned Pauline that first appeared in Donkey Kong (1994) has reappeared in the Mario vs.\n[…]\nMartinet makes cameo appearances in the film as Mario and Luigi's unnamed father and as Giuseppe, who appears in Brooklyn and resembles Mario's original design from Donkey Kong, speaking in his in-game voice. In response to criticism of Pratt's casting, co-director Aaron Horvath explained that he was cast mainly because of his history of playing good-natured, blue collar-type protagonists."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Donkey_Kong_(video_game)",
        "situacao": "desambiguacao",
        "texto": "Donkey Kong is a video game franchise by Nintendo.\nDonkey Kong may also refer to:\n\nDonkey Kong (1981 video game), an arcade video game released in 1981, later ported to many home consoles\nDonkey Kong (1994 video game), a Game Boy video game\nDonkey Kong (character), the title character\nDonkey Kong (Game & Watch), an LCD games featuring Mario"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_%28personagem%29",
        "situacao": "ok",
        "texto": "Mario ([ˈmɑːrioʊ,_ˈmærioʊ]; em japonês: マリオ) é um personagem fictício da franquia e série de jogos eletrônicos Mario da Nintendo, criado pelo desenvolvedor e designer de jogos eletrônicos japonês Shigeru Miyamoto. Servindo como mascote da Nintendo e protagonista homônimo da série, Mario já apareceu em mais de 200 jogos desde sua criação.\n[…]\nMario é retratado como um encanador italiano baixinho rechonchudo e bigodudo vindo do Brooklyn que reside no Reino dos Cogumelos. Ele repetidamente tem a missão de resgatar a Princesa Peach do vilão Bowser, e impedir seus diversos planos de destruir e dominar o reino. Mario também tem outros inimigos ou rivais, incluindo Donkey Kong e Wario. Desde 1991 até 2023, Mario foi dublado por Charles Martinet.\n[…]\nBaby Mario tem um papel importante junto com Baby Luigi em Mario & Luigi: Partners in Time e aparece em Yoshi's Island DS. Ele, junto com o adulto Mario, é dublado por Charles Martinet.\n[…]\nEle veste uma camisa vermelha de mangas compridas, um macacão azul com botões amarelos, sapatos marrons, luvas brancas e um boné vermelho com um \"M\" vermelho impresso em um círculo branco. Em Donkey Kong, ele usava um macacão vermelho e uma camisa azul. Em Super Mario Bros., ele vestiu uma camisa marrom com macacão vermelho. Ele tem olhos azuis e, como Luigi, tem cabelos castanhos e bigode castanho-escuro ou preto.\n[…]\nMario estreou como \"Jumpman\" no jogo de arcade Donkey Kong em 9 de julho de 1981. Ele é mostrado como um carpinteiro e tem um macaco de estimação chamado Donkey Kong. O carpinteiro maltrata o macaco, que então foge para sequestrar a namorada de Jumpman, originalmente conhecida como 'a senhora' (mais tarde chamada de Pauline). O jogador deve assumir o papel de Jumpman e resgatar a garota.\n[…]\nLista de personagens da série Mario",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "PlayStation",
      "descricao": "Primeiro console de videogame da Sony, lançado em 1994."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O PlayStation nasceu de um leitor de CD que a Sony desenvolvia em parceria com qual empresa, até o acordo ser desfeito?",
    "resposta": "Nintendo",
    "fonte": [
      "https://en.wikipedia.org/wiki/PlayStation_(console)",
      "https://en.wikipedia.org/wiki/Super_NES_CD-ROM"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/PlayStation_(console)",
        "situacao": "ok",
        "texto": "The PlayStation (codenamed PSX, abbreviated as PS, and retronymically PS1 or PS one) is a home video game console developed and marketed by Sony Computer Entertainment. It was released in Japan on 3 December 1994, followed by North America on 9 September 1995, Europe on 29 September 1995, and other regions following thereafter. As a fifth-generation console, the PlayStation primarily competed with\n[…]\nWishing to distance the project from the failed enterprise with Nintendo, Sony initially branded the PlayStation the \"PlayStation X\" (PSX).\n[…]\nThe PlayStation's target audience included the generation which was the first to grow up with mainstream video games, along with 18-29-year-olds who were not the primary focus of Nintendo. By the late 1990s, Sony became a highly regarded console brand due to the PlayStation, with a significant lead over second-place Nintendo, while Sega was relegated to a distant third.\n[…]\nSony's next-generation PlayStation 2, which is backward compatible with the PlayStation's DualShock controller and games, was announced in 1999 and launched in 2000. The PlayStation's lead in installed base and developer support paved the way for the success of its successor, which overcame the earlier launch of the Sega's Dreamcast and then fended off competition from Microsoft's newcomer Xbox and Nintendo's GameCube.\n[…]\nThe success of the PlayStation contributed to the demise of cartridge-based home consoles. While not the first system to use an optical disc format, it was the first highly successful one, and ended up going head-to-head with the proprietary cartridge-relying Nintendo 64, which the industry had expected to use CDs like PlayStation. After the demise of the Sega Saturn, Nintendo was left as Sony's main competitor in Western markets.\n[…]\nPCSX-Reloaded – PlayStation emulator for Microsoft Windows, Linux, and macOS\n[…]\nPlayStation: The Official Magazine (PSM)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Super_NES_CD-ROM",
        "situacao": "ok",
        "texto": "The Super NES CD-ROM, or SNES CD, was a proposed video game platform developed by Nintendo via joint ventures with Sony and Philips that would have added compact disc (CD) support for the cartridge-based Super Nintendo Entertainment System (SNES).\n[…]\nThe Super NES CD-ROM System was a proposed CD-ROM add-on for the Super NES co-produced by Nintendo and Philips that can accept CDs while also providing some additional hardware functionality to expand upon the capabilities of the Super NES. It was developed as a result of a partnership between the two companies that occurred alongside the ongoing development of Sony's standalone SNES-based PlayStation console and the Super Disc CD-ROM format.\n[…]\nThe following table below is based on Benjamin Heckendorn's specs comparison of the first known prototype unit of Sony's jointly produced SNES-based PlayStation console shown in July 2016. The specs of the proposed Nintendo and Philips developed Super NES CD-ROM System add-on published by Electronic Gaming Monthly and Electronic Games in 1993 are also included on this table below.\n[…]\nSony released the PlayStation in December 1994 in Japan and September 1995 in North America and Europe, and soon became a major success worldwide. Its next-generation CD-based console successfully competed with other CD-based consoles such as the Sega Saturn, the 3DO, and PC-FX, as well as Nintendo's cartridge-based Nintendo 64, making it a console leader.\n[…]\nSony had sold three times as many PlayStation consoles compared to the Nintendo 64 and the Sega Saturn in the mid-to-late 1990s, establishing Sony as a major player in the video game industry.\n[…]\nMedia related to Nintendo Playstation prototype at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/PlayStation_%28console%29",
        "situacao": "ok",
        "texto": "O PlayStation (codinome PSX, abreviado como PS e retroativamente PS1 ou PS one) é um console de jogos eletrônicos doméstico desenvolvido e comercializado pela Sony Computer Entertainment. Foi lançado no Japão em 3 de dezembro de 1994, seguido pela América do Norte em 9 de setembro de 1995, Europa em 29 de setembro de 1995 e outras regiões posteriormente. Como console de quinta geração, o PlayStati\n[…]\nA Sony começou a desenvolver o PlayStation após uma tentativa fracassada com a Nintendo de criar um periférico de CD-ROM para o Super Nintendo Entertainment System no início da década de 1990. O console foi projetado principalmente por Ken Kutaragi e pela Sony Computer Entertainment no Japão, enquanto o desenvolvimento adicional foi terceirizado para o Reino Unido. A ênfase em gráficos poligonais 3D foi colocada na vanguarda do design do console.\n[…]\nO início do que se tornou o PlayStation remonta a 1986 com uma joint venture entre a Nintendo e a Sony. A Nintendo já havia produzido a tecnologia de disquete para complementar os cartuchos, na forma do Family Computer Disk System, e queria continuar essa estratégia de armazenamento complementar para o Super Famicom. A Nintendo procurou a Sony para desenvolver um complemento de CD-ROM, provisoriamente intitulado \"Play Station\" ou \"SNES-CD\". Um contrato foi assinado e o trabalho começou.\n[…]\nA Sony lançou o PlayStation no Japão em 3 de dezembro de 1994. O sucesso foi imediato. A chave estava nas instalações oferecidas pela empresa aos desenvolvedores de videogames, empolgadas com as grandes possibilidades técnicas, as três dimensões e o disco. Os desenvolvedores assumiram vários riscos financeiros ao criar cartuchos para Sega ou Nintendo; pelo contrário, a Sony ofereceu todas as facilidades para ter um catálogo variado de jogos. Imediatamente os grandes nomes do setor se juntaram.\n[…]\n«Playstation Portugal»\n[…]\n«Playstation Brasil»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Seattle Mariners",
      "descricao": "Time de beisebol da cidade americana de Seattle, da liga MLB."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O time de beisebol Seattle Mariners teve como dono majoritário, a partir de 1992, o presidente de qual empresa de videogames?",
    "resposta": "Nintendo",
    "distratores": [
      "Sega",
      "Sony",
      "Konami"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Seattle_Mariners",
      "https://en.wikipedia.org/wiki/Hiroshi_Yamauchi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seattle_Mariners",
        "situacao": "ok",
        "texto": "The Seattle Mariners are an American professional baseball team based in Seattle. The Mariners compete in Major League Baseball (MLB) as a member club of the American League (AL) West Division. The team joined the American League as an expansion team in 1977, originally playing their home games in the Kingdome. Since July 1999, the Mariners' home ballpark has been T-Mobile Park, located in the SoD\n[…]\nNintendo of America bought the team after the dismal 1992 season; Nintendo CEO Hiroshi Yamauchi, who held a 49 percent share of the franchise, had never been to a baseball game but sought to thank the city for its role in the company's success.\n[…]\nZduriencik was fired on August 28, 2015. Jerry Dipoto, a former general manager of the Los Angeles Angels of Anaheim, was hired as the Mariners' new general manager one month later. On October 9, manager Lloyd McClendon was fired after two seasons, succeeded by Scott Servais on October 23. On April 27, 2016, Nintendo announced that it was selling its controlling stake in the Mariners to First Avenue Entertainment limited partnership, led by John W. Stanton.\n[…]\nNintendo retained a ten percent ownership share of the team after the sale was completed in August 2016. The franchise was valued at $1.4 billion at the time and included Root Sports Northwest, the team's regional television network.\n[…]\nThe Mariners donned their current uniforms in 1993.\n[…]\nThe team wore the City Connect uniform more frequently in 2024, since they won most of their games in the alternates. In the 2025 season, the Mariners partnered with Nintendo of America to have the company's \"racetrack\" logo on the sleeve of the home game jersey and the logo of Switch 2 on the sleeve of the away game jersey.\n[…]\nThe Seattle Mariners farm system consists of six minor league affiliates.\n[…]\nSeattle Mariners official website\n[…]\nThe History of the Seattle Mariners, Secret Base, YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hiroshi_Yamauchi",
        "situacao": "ok",
        "texto": "Hiroshi Yamauchi (Japanese: 山内 溥; 7 November 1927 – 19 September 2013) was a Japanese businessman and the third president of Nintendo, serving in the role from 25 April 1949 to 24 May 2002, and principal owner of the Seattle Mariners from 1992 until his death. Before joining Nintendo, he had strong familial connections; his great-grandfather, Fusajiro Yamauchi, founded the company, and was its fir\n[…]\nFor much of the 1990s, age was not an obstacle for Yamauchi. In 1995, when he was 68, he was called \"the most feared and respected man in the videogame industry\" by Next Generation magazine, which also noted that he \"[remained] very much in charge\" of Nintendo. Things began to change in 1996, when he publicly mused about retiring from Nintendo, noting that he could not think of a good replacement as president.\n[…]\nWhen Microsoft owner Bill Gates declined to help, Slade Gorton, a Senator from Washington who had interacted with Nintendo during the Senate's hearings on IP theft, contacted Yamauchi through Howard Lincoln, CEO of Nintendo of America. Thankful to Seattle, where NoA is located, for their support of the company, Yamauchi agreed to the proposal, offering to contribute $75 million out of a bid of $125 million.\n[…]\nAs an owner, Yamauchi was rather hands-off, assigning his rights to the Mariners to Nintendo of America, and never attending a game. The one game he did plan to attend, to be held in Kyoto in 2003, was moved to the U.S. due to the impending Iraq War.\n[…]\nOn 19 September 2013, aged 85, Yamauchi died of complications of pneumonia. Nintendo released a statement stating that its staff members were mourning the loss of their former president.\n[…]\nClassicGaming.com – Hiroshi Yamauchi Retires From Nintendo at the Wayback Machine (archived 1 November 2002) (Waybacked)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Seattle_Mariners",
        "situacao": "ok",
        "texto": "O Seattle Mariners é uma equipe profissional norte-americana de beisebol sediada em Seattle, Washington. Eles competem Major League Baseball (MLB) como participante da Divisão Oeste da Liga Americana. O Mariners entrou na liga em 1977 como uma equipe de expansão, inicialmente jogando seus jogos no Kingdome até 1999, quando mudou-se para o T-Mobile Park.\n[…]\nO nome \"Mariners\" vem da cultura marítima na cidade de Seattle. A equipe possui o apelido M's por conta da inclusão a letra 'M' na logo primária do clube entre 1987 e 1992. As cores do clube atualmente são azul naval, verde-azulado e prata, mas entre 1977 e 1993, utilizavam azul real e dourado como cores principais. Seu mascote é o Mariner Moose.\n[…]\nO Seattle Mariners foi criado a partir de um processo legal relacionado ao time anterior da cidade, Seattle Pilots. Em 1970, o Pilots foi comprado e realocado para Milwaukee (eventualmente tornando-se o Milwaukee Brewers) por Bud Selig, um empresário nativo de Milwaukee que devotou sua vida para trazer uma equipe de beisebol profissional para a cidade novamente.\n[…]\nO nome \"Mariners\" foi escolhido em agosto de 1976 pelos representantes do clube após a realização de um concurso popular de nomeação do novo clube de beisebol da cidade. Mais de 600 nomes foram enviados e mais de 15 mil pessoas participaram da campanha.\n[…]\nEm 10 de abril de 1977, durante o quinto jogo da história da franquia, Juan Bernhardt, um rebatedor designado, rebateu o primeiro home run do Seattle Mariners.\n[…]\nEntre 1981 e 1992, a franquia foi vendida três vezes. Primeiro, em 1981 para o ex-diplomata e investidor de imóveis George Argyros, depois para o fundador e diretor financeiro do conglomerado Emmis Communications Jeff Smulyan em 1989. Apenas quatro anos após Smulyan comprar a equipe, ele a vendeu para a Nintendo of America.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Mario & Sonic",
      "descricao": "Série de jogos esportivos que reúne os personagens da Nintendo e da Sega, iniciada em 2007."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Rivais nos anos noventa, Mario e Sonic passaram a dividir a tela a partir de 2007 numa série de jogos sobre qual evento esportivo?",
    "resposta": "Jogos Olímpicos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mario_%26_Sonic_at_the_Olympic_Games"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mario_%26_Sonic_at_the_Olympic_Games",
        "situacao": "ok",
        "texto": "Mario & Sonic at the Olympic Games is a 2007 crossover sports video game developed and published by Sega for the Wii, with Nintendo publishing it in Japan. It was released for the Nintendo DS the following year. It is the first installment in the Mario & Sonic series, a crossover between Nintendo's Mario and Sega's Sonic the Hedgehog series, and the first licensed crossover game to feature charact\n[…]\nCritics praised the multiplayer interaction of the Wii game, and variety of events of both versions, but criticized the Wii version for its complexity and its DS counterpart for not offering the same interaction between players. The Wii game was awarded the \"Best Wii game of 2007\" at the Games Convention in Leipzig. Mario & Sonic sold over 10 million units and started a series of related sport video games to coincide with upcoming Olympic events.\n[…]\nThe development of the game was swifter than planned; in October 2007, Sega announced that Mario & Sonic at the Olympic Games' scheduled release date for the Wii has been advanced by two weeks and the game had gone gold. It was released in 2007 in North America on November 6, in Japan on November 22, in Australia and in Europe on November 23, and in Korea on May 29, 2008.\n[…]\nThe commercial success of Mario & Sonic at the Olympic Games started a series of Mario & Sonic sport video games to coincide with upcoming Summer and Winter Olympic Games.\n[…]\nTitles such as Mario & Sonic at the Olympic Winter Games, based on the 2010 Winter Olympics in Vancouver and released on the Wii and the Nintendo DS in October 2009, sold 6.53 million copies in the US and Europe by March 31, 2010, while Mario & Sonic at the London 2012 Olympic Games, based on the 2012 Summer Olympics and released on the Wii in November 2011 and the Nintendo 3DS in February 2012, sold 3.28 million copies in the US and Europe by March 31, 2012.\n[…]\nMario & Sonic (DS)  (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mario_%26_Sonic_at_the_Olympic_Games",
        "situacao": "ok",
        "texto": "Mario & Sonic at the Olympic Games (マリオ&ソニック AT 北京オリンピック, Mario ando Sonikku atto Pekin Orinpikku) é um jogo eletrônico para Wii e Nintendo DS, em que, pela primeira vez, Mario e Sonic se juntam em um mesmo jogo. Produzido pela Sega, distribuído no Japão pela Nintendo e na Europa e América do Norte pela própria Sega, o jogo consiste em eventos esportivos dos Jogos Olímpicos de 2008, em Pequim, na \n[…]\nUma sequência direta baseada nos Jogos Olímpicos de Inverno de 2010, Mario & Sonic at the Olympic Winter Games, foi lançada em 2009, também para Wii e Nintendo DS.\n[…]\n16 personagens estão no jogo, 8 da franquia Sonic e 8 da série Mario, cada um em uma categoria (força, velocidade, habilidade e balanceado), além da possibilidade de jogar com Miis (na versão de Wii).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Supercell",
      "descricao": "Estúdio de jogos para celular com sede em Helsinque, criador de Clash of Clans."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Angry Birds e Clash of Clans, dois fenômenos dos celulares, têm em comum o país de origem dos seus estúdios. Que país nórdico é esse?",
    "resposta": "Finlândia",
    "distratores": [
      "Suécia",
      "Noruega",
      "Dinamarca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Supercell_(video_game_company)",
      "https://en.wikipedia.org/wiki/Rovio_Entertainment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Supercell_(video_game_company)",
        "situacao": "ok",
        "texto": "Supercell Oy is a Finnish mobile game development company based in Helsinki. Founded on 14 May 2010, the company's debut game was the browser game Gunshine.net, and after its release in 2011, Supercell started developing games for mobile devices.\n[…]\nIn summer 2013, Supercell began a marketing collaboration with the Japanese video game company GungHo: the companies cross-marketed each other's games in their own markets. As a result, Clash of Clans became one of the most downloaded apps in Japan. GungHo's chairman of the board Taizo Son flew to Finland to thank Paananen and later introduced him to his brother Masayoshi Son, the CEO of the SoftBank Corporation. Soon, they proposed a corporate acquisition which indeed happened on 7 October 2013.\n[…]\nDuring Super Bowl XLIX in February 2015, Supercell spent $9 million for a 60-second runtime in front of 118.5 million viewers. According to The Guardian, the Clash of Clans advertisement was one of the most popular advertisements of the 61 spots aired on NBC. The commercial, dubbed \"Revenge\", featured Liam Neeson parodying his character from the Taken film series by seeking revenge in a coffee shop for a random player destroying his village.\n[…]\nIn 2012, Supercell was awarded as the best Nordic start-up company and chosen as the Finnish game developer of the year. The following year, Supercell won the Finnish Teknologiakasvattaja 2013 (Technology Educator 2013) contest, and the company was chosen as the software entrepreneur of the year. In 2014, the research and consultancy agency T-Media chose Supercell as Finland's most reputable company in their Luottamus&Maine (Trust&Reputation) report.\n[…]\nMedia related to Supercell (video game company) at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rovio_Entertainment",
        "situacao": "ok",
        "texto": "Rovio Entertainment Oy (formerly Relude Oy and Rovio Mobile Oy) is a Finnish video game developer based in Espoo. Founded in 2003 by Helsinki University of Technology students Niklas Hed, Jarno Väkeväinen and Kim Dikert, the company is best known for the Angry Birds franchise. The company currently operates studios in Barcelona, Toronto, Espoo, Stockholm, and Copenhagen, with former offices in Mon\n[…]\nThe company's success has helped to establish Finland as a leading player in the mobile game industry and has helped to create a thriving ecosystem for game development in the country. In August 2023, Sega purchased Rovio for US$776 million and it was made a subsidiary of the Sega Europe division.\n[…]\nIn January 2014, Rovio announced that its game series Angry Birds had reached its two billionth download. In addition, it was revealed that its flagship series, Angry Birds, \"leaked data\" to third-party companies, possibly to surveillance agencies like the NSA. In retaliation, anti-NSA hackers defaced Rovio's website.\n[…]\nOn 8 January 2026, Rovio announced that it has merged its Angry Birds licensing team into Sega's global character licensing business. By February 2026, Sega announced it would record a $200 million impairment write-down for Rovio during Q3 due to its inability to fully implement Rovio's Beacon technology in its own mobile titles.\n[…]\nPrior to creating Angry Birds, Rovio developed 51 games, a combination of work-for-hire projects, publishing contracts and independently released titles.\n[…]\nAngry Birds Toons (2013–2016)\n[…]\nAngry Birds Stella (2014–2016)\n[…]\nAngry Birds Blues (2017)\n[…]\nAngry Birds BirLd Cup (2018)\n[…]\nAngry Birds Zero Gravity (2018)\n[…]\nAngry Birds on the Run (2018–2020)\n[…]\nAngry Birds MakerSpace (2019–2025)\n[…]\nAngry Birds Slingshot Stories (2020–2026)\n[…]\nAngry Birds Bubble Trouble (2020–2023)\n[…]\nAngry Birds: Summer Madness (2022)\n[…]\nAngry Birds Mystery Island (2024)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Supercell_%28empresa%29",
        "situacao": "ok",
        "texto": "Supercell é uma desenvolvedora finlandesa de jogos eletrônicos para dispositivos móveis fundada em 14 de maio de 2010 por Ilkka Paananen e conhecida pelos seus jogos Boom Beach, Brawl Stars, Clash Royale, Clash of Clans, Hay Day, Squad Busters e Mo.co.\n[…]\nEssa decisão não poderia ter sido melhor pois desde que a Supercell entrou no mundo mobile ela já lançou seis jogos de sucesso: Clash of Clans, Clash Royale, Hay Day, Boom Beach, Brawl Stars e Squad Busters. Em abril de 2021, a desenvolvedora finlandesa anunciou 3 novos jogos baseados no mundo Clash em desenvolvimento, e são eles: Clash Quest (cancelado em 2022), Clash Mini (cancelado em 2024) e Clash Heroes (cancelado em 2024).\n[…]\nEm 2016 a Supercell lançou seu novo jogo que se tornou o fenômeno daquele ano, o Clash Royale. O jogo é um Tower defense online com elementos de Card Game baseado no Clash of Clans. O jogo foi vencedor na categoria Best Upcoming Game na 12th IMGA - International Mobile Gaming Awards que se realizou em São Francisco. Em maio do mesmo ano, foi o vencedor na categoria Best Game da premiação do Google Play Awards. Em março de 2019 o jogo chegou a marca de US$ 2,5 bilhões em receita\n[…]\nNa primeira leva de investimentos que ocorreu em 2016/2017, a Supercell comprou a Space Ape Games por US$ 55,8 milhões a companhia comprou também 51% das ações da Frogmind em um valor de US$ 7,1 milhões e 100% da Shipyard Games por US$ 2,9 milhões. Nos investimentos de 2018 a desenvolvedora finlandesa fez investimentos de US$ 5 milhões na Redemption Games, US$ 4,2 milhões na Trailmix e US$ 5,6 milhões na desenvolvedora de jogos de smartwatch Everywear Games.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "CD Projekt",
      "descricao": "Empresa de jogos com sede em Varsóvia, criadora das séries The Witcher e Cyberpunk."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O bruxo Geralt e a metrópole de Night City saíram do mesmo estúdio de jogos. Em que país fica esse estúdio?",
    "resposta": "Polônia",
    "distratores": [
      "República Tcheca",
      "Ucrânia",
      "Hungria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/CD_Projekt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/CD_Projekt",
        "situacao": "ok",
        "texto": "CD Projekt Red S.A. (Polish: [ˌt͡sɛˈdɛ ˈprɔjɛkt]) is a Polish video game company based in Warsaw, founded in May 1994 by Marcin Iwiński and Michał Kiciński. Iwiński and Kiciński were video game retailers before they founded the company, which initially acted as a distributor of foreign video games for the domestic market. The department responsible for developing original games, CD Projekt Red, be\n[…]\nThe franchise rights had been sold to Metropolis Software in 1997 and a playable version of the first chapter was made, but then left abandoned. CD Projekt acquired the rights to the Wiedźmin franchise in 2002. According to Iwiński, he and Kiciński had no idea how to develop a video game at that time.\n[…]\nCD Projekt acquired Metropolis Software in 2008.\n[…]\nCD Projekt Red opposes the inclusion of digital-rights-management technology in video games and software. The company believes that DRM is ineffective in halting software piracy, based on data from sales of The Witcher 2: Assassins of Kings. CD Projekt Red found that its initial release (which included DRM technology) was pirated over 4.5 million times; its DRM-free re-release was pirated far less. The Witcher 3: Wild Hunt and Cyberpunk 2077 were released without DRM technology.\n[…]\nAccording to Studio Head Adam Badowski, CD Projekt Red avoided becoming a subsidiary of another company in order to preserve its financial and creative freedom and ownership of its projects. In 2015, Electronic Arts was rumoured to be attempting to acquire CD Projekt, but this was denied by Iwiński who said that maintaining the company's independence was something he would be fighting for.\n[…]\nIn December 2021, CD Projekt agreed to pay $1.85 million while negotiating to settle a class-action lawsuit over the problematic release of Cyberpunk 2077, a game which at launch had several technical issues that many users experienced."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/CD_Projekt",
        "situacao": "ok",
        "texto": "A CD Projekt S.A. é uma desenvolvedora e publicadora de jogos eletrônicos polonesa sediada em Varsóvia, Mazóvia. A companhia foi fundada em maio de 1994 por Marcin Iwiński e Michał Kiciński. Iwiński e Kiciński eram varejistas de jogos antes de fundarem a empresa, que inicialmente atuou como distribuidora de jogos estrangeiros para o mercado interno do país.\n[…]\nA CD Projekt foi fundada em 1994 por Marcin Iwiński e Michal Kicińsk. De acordo com o primeiro, apesar de gostar de jogar jogos eletrônicos quando criança, eles eram escassos na Polônia (que na época estava sob a esfera de influência da União Soviética). Não existia nenhuma lei de direito autoral no país e Iwiński vendia cópias piratas de jogos ocidentais em um mercado de Varsóvia enquanto ainda estava no colegial.\n[…]\nSeus esforços foram bem sucedidos e Baldur's Gate vendeu dezoito mil unidades no dia de seu lançamento (mais do que a média de vendas de qualquer outro jogo na Polônia na época).\n[…]\nEles tinham a intenção de desenvolver um jogo baseado nos livros Wiedźmin escritos por Andrzej Sapkowski, que eram muito populares na Polônia, com o autor aceitando a proposta da empresa. Os direitos da franquia tinham sido vendidos para um estúdio polonês de jogos móveis, porém eles não haviam trabalhado em nada relacionado ao título e a CD Projekt conseguiu adquirir os direitos. De acordo com Iwiński, na época ele e Kicińsk não tinham ideia de como desenvolver um jogo eletrônico.\n[…]\nA CD Projekt reduziu sua parte para 8,29% já que a companhia queria entrar no mercado internacional ao invés de permanecer apenas na Polônia. As empresas mesmo assim cooperam para a distribuição de jogos.\n[…]\nA CD Projekt tem um escritório em Cracóvia, que já ajudou no desenvolvimento dos jogos anteriores, e espera-se que ele comece a desenvolver seus próprios títulos no futuro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Minecraft",
      "descricao": "Jogo de construção com blocos criado pelo sueco Markus Persson e lançado em 2009."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Desde 2014, o que o Minecraft e o sistema Windows têm em comum?",
    "resposta": "Pertencem à Microsoft",
    "fonte": [
      "https://en.wikipedia.org/wiki/Minecraft",
      "https://en.wikipedia.org/wiki/Mojang_Studios"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Minecraft",
        "situacao": "ok",
        "texto": "Minecraft is a sandbox video game developed and published by the Swedish company Mojang Studios. Following its initial public alpha release as an early access title on 17 May 2009, it was formally released on 18 November 2011 for personal computers. The game has since been ported to numerous platforms, including mobile devices and various video game consoles.\n[…]\nThe first public alpha build of Minecraft was released on 17 May 2009 on TIGSource. On 1 December 2011, Persson stepped down from development, handing the project's lead to Jens \"Jeb\" Bergensten. On 15 September 2014, Microsoft, the developer behind the Microsoft Windows operating system and Xbox video game console, announced a $2.5 billion acquisition of Mojang, which included the Minecraft intellectual property.\n[…]\nA port of Pocket Edition was released for Windows Phone 8.1 on 10 December 2014. In July 2015, a port of the Pocket Edition to Windows 10 was released as the Windows 10 Edition, with full crossplay to other Pocket versions. In January 2017, Microsoft announced that it would no longer maintain the Windows Phone versions of Pocket Edition.\n[…]\nFor the full year 2012, Minecraft ranked as the most purchased title on Xbox Live Arcade and the fourth most played title on Xbox Live by average unique users per day. As of 4 April 2014, the Xbox 360 version had sold 12 million copies. Minecraft contributed $63 million to Microsoft's total first-party revenue in the second quarter of 2015. The PlayStation 3 Edition sold one million copies within five weeks of release.\n[…]\nIn 2014, the British Museum announced a project to reproduce its building and exhibits in Minecraft in collaboration with the public. Microsoft and Code.org have offered Minecraft-based tutorials and activities designed to teach programming, reporting by 2018 that more than 85 million children had used their resources."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mojang_Studios",
        "situacao": "ok",
        "texto": "Mojang AB, trading as Mojang Studios, is a Swedish video game developer and a studio of Xbox based in Stockholm. The studio is best known for developing the sandbox and survival game Minecraft, the best-selling video game of all time.\n[…]\nMinecraft became highly successful, giving Mojang sustained growth. With a desire to move on from the game, Persson offered to sell his share in Mojang, and the company was acquired by Microsoft for its Microsoft Studios (later Xbox Game Studios) unit in November 2014. Persson, Porsér, and Manneh subsequently left Mojang. The company was rebranded as Mojang Studios in May 2020 and changed to reporting to Microsoft's Xbox division in July 2026.\n[…]\nPersson, exhausted from the pressure of being the owner of Minecraft, tweeted in June 2014 asking whether anyone would be willing to purchase his share in Mojang. Several parties expressed interest in this offer, including Activision Blizzard, Electronic Arts, and Microsoft. Phil Spencer, the head of Microsoft's Xbox division, urged Microsoft's newly appointed chief executive Satya Nadella to purchase Mojang to set out \"a pretty bold vision\" for Microsoft's gaming business.\n[…]\nFurthermore, the company had $2.5 billion in offshore bank accounts that it could not bring back to the United States without paying repatriation taxes. Nadella separately stated the possible use of Minecraft with the HoloLens, Microsoft's mixed reality device, to have been a major factor in pursuing the acquisition. The company first approached Mojang regarding a potential acquisition in June 2014, making its first offer shortly thereafter. Mojang subsequently hired advisers from JPMorgan Chase."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Minecraft",
        "situacao": "ok",
        "texto": "Minecraft é um jogo eletrônico sandbox de sobrevivência de 2011 desenvolvido e publicado pela desenvolvedora sueca Mojang Studios. Originalmente criado por Markus \"Notch\" Persson usando a linguagem de programação Java, a primeira versão alfa pública foi lançada em 17 de maio de 2009. O jogo foi desenvolvido continuamente a partir de então, recebendo um lançamento completo em 18 de novembro de 2011\n[…]\nO jogo pode ser executado em diversos sistemas operacionais de computadores pessoais (PCs), incluindo Microsoft Windows, macOS e Linux. Além de Minecraft: Java Edition e Minecraft: Windows 10 Edition, existem outras versões de Minecraft para PC, incluindo Minecraft Classic, Minecraft 4K e Minecraft: Education Edition.\n[…]\nEm 16 de agosto de 2011, Minecraft: Pocket Edition foi lançado para o Xperia Play no Android Market como uma versão alfa. Foi então lançado para vários outros dispositivos compatíveis com o sistema Android em 8 de outubro de 2011. Uma versão de Pocket Edition para iOS foi lançada em 17 de novembro de 2011. Um porte foi disponibilizado para Windows Phone logo após a Microsoft adquirir a Mojang.\n[…]\nEm 10 de dezembro de 2014, em cumprimento à aquisição da Mojang pela Microsoft, um porte de Pocket Edition foi lançada para o Windows Phone 8.1. Em 19 de dezembro de 2016, a versão completa de Pocket Edition foi lançada para iOS, Android e Windows Phone. Em 18 de janeiro de 2017, a Microsoft anunciou que não manteria mais as versões de Pocket Edition para Windows Phone e Windows 10 Mobile, devido a descontinuação desses sistemas operacionais.\n[…]\nUma bifurcação de Minecraft VR, conhecida como Vivecraft, foi portada para o OpenVR e é voltada para dá suporte ao hardware do HTC Vive. Em 15 de agosto de 2016, a Microsoft lançou o suporte oficial do Oculus Rift para Minecraft: Windows 10 Edition.\n[…]\n«Minecraft Classic» (em inglês)\n[…]\nMinecraft Wiki (em português)\n[…]\nMinecraft Wiki (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Minecraft",
      "descricao": "Jogo de construção com blocos criado pelo sueco Markus Persson e lançado em 2009."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Lançado em 2009, o Minecraft foi criado por qual programador sueco?",
    "resposta": "Markus Persson, o Notch",
    "fonte": [
      "https://en.wikipedia.org/wiki/Markus_Persson",
      "https://en.wikipedia.org/wiki/Minecraft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Markus_Persson",
        "situacao": "ok",
        "texto": "Markus Alexej Persson (  PEER-sən, Swedish: [ˈmǎrːkɵs ˈpæ̌ːʂɔn] ; born 1 June 1979), also known by the pseudonym Notch, is a Swedish video game programmer and designer. He is the creator of Minecraft, the best-selling video game in history. He founded the video game development company Mojang Studios in 2009.\n[…]\nMarkus Alexej Persson was born in Stockholm, Sweden, to a Finnish mother, Ritva, and a Swedish father, Birger, on 1 June 1979. He has one sister. He grew up in Edsbyn until he was seven years old, when his family moved back to Stockholm. In Edsbyn, Persson's father worked for the railroad, and his mother was a nurse. He spent much time outdoors in Edsbyn, exploring the woods with his friends.\n[…]\nBetween 2004 and 2009 Persson worked as a game developer for Midasplayer (later known as King). There, he worked as a programmer, mostly building browser games made in Flash. He later worked as a programmer for jAlbum.\n[…]\nIn September 2010 Persson travelled to Valve Corporation's headquarters in Bellevue, Washington, United States, where he took part in a programming exercise and met Gabe Newell. Persson was subsequently offered a job at Valve, which he turned down in order to continue work on Minecraft.\n[…]\nPersson has stated that, due to the intense media attention and public pressure, he became exhausted with running Minecraft and Mojang.\n[…]\nPersson's most popular creation is the survival sandbox game Minecraft, which was first publicly available on 17 May 2009 and fully released on 18 November 2011. Persson left his job as a game developer to work on Minecraft full-time until completion. In early 2011, Mojang AB sold the one millionth copy of the game, several months later their second, and several more their third.\n[…]\nMarkus Persson at IMDb\n[…]\nMarkus Persson on Tumblr\n[…]\nnotch.tumblr.com archives"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Minecraft",
        "situacao": "ok",
        "texto": "Minecraft is a sandbox video game developed and published by the Swedish company Mojang Studios. Following its initial public alpha release as an early access title on 17 May 2009, it was formally released on 18 November 2011 for personal computers. The game has since been ported to numerous platforms, including mobile devices and various video game consoles.\n[…]\nOriginally created by Markus \"Notch\" Persson using the Java programming language, Jens \"Jeb\" Bergensten was handed control over the game's development following its full release. In November 2014, Mojang and the Minecraft intellectual property were purchased by Microsoft for US$2.5 billion; Xbox Game Studios holds the publishing rights for the Bedrock Edition, the unified cross-platform version which evolved from the Pocket Edition codebase and replaced the legacy console versions.\n[…]\nBefore creating Minecraft, Markus \"Notch\" Persson was a game developer at King, where he worked until March 2009. At King, he primarily developed browser games and learned several programming languages. During his free time, he prototyped his own games, often drawing inspiration from other titles, and was an active participant on the TIGSource forums for independent developers.\n[…]\nMarkus Persson developed a separate game, Minicraft, for a Ludum Dare competition in 2011. In 2025, Persson used a poll on his X account to signal he was considering a spiritual successor to Minecraft, subsequently clarifying he was \"100% serious\" and had effectively announced Minecraft 2, though he cancelled the plans within days after consulting his team.\n[…]\nGoldberg, Daniel (2013). Minecraft: The Unlikely Tale of Markus \"Notch\" Persson and the Game That Changed Everything. New York: Seven Stories Press. ISBN 978-1-60980-537-1.\n[…]\nMinecraft Classic –⁠⁠⁠⁠⁠⁠ a remake version based on an old version of Minecraft"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Notch",
        "situacao": "ok",
        "texto": "Markus Alexej Persson (Estocolmo, 1 de junho de 1979), mais conhecido como Notch, é um programador e designer de jogos eletrônicos sueco. É conhecido por criar o videogame sandbox Minecraft, que se tornou o jogo de videogame mais vendido da história, e por fundar a empresa de desenvolvimento de videogames Mojang Studios em 2009.\n[…]\nMarkus Alexej Persson nasceu em Estocolmo, Suécia, filho de mãe finlandesa Ritva e de pai sueco Birger, em 1 de junho de 1979. Possui uma irmã. Ele cresceu em Edsbyn até os 7 anos, antes de sua família voltar para Estocolmo. Em Edsbyn, o pai de Persson trabalhava em uma ferrovia e sua mãe era enfermeira. Seu passatempo favorito era ficar ao ar livre em Edsbyn, explorando a floresta com seus amigos.\n[…]\nRubyDung é o primeiro protótipo de Minecraft conhecido criado por Persson.\n[…]\nEm setembro de 2010, Persson viajou para a sede da Valve Corporation em Bellevue, Washington, onde participou de um exercício de programação e se encontrou com Gabe Newell. Persson recebeu uma oferta de emprego na Valve, que recusou para continuar trabalhando no Minecraft. Posteriormente, Persson foi homenageado pela Valve com um chapéu no jogo Team Fortress 2, após ele ter declarado que: \"nenhum jogador acreditava que ele era o verdadeiro Notch\".\n[…]\nPersson é membro do grupo sueco da Mensa International.\n[…]\nA criação mais popular de Persson é o jogo sandbox de sobrevivência Minecraft, que foi disponibilizado publicamente pela primeira vez em 17 de maio de 2009 e totalmente lançado em 18 de novembro de 2011. Persson deixou seu emprego como desenvolvedor de jogos para trabalhar no Minecraft em tempo integral até a conclusão. No início de 2011, a Mojang AB vendeu a milionésima cópia do jogo, vários meses depois a segunda e vários outros a terceira.\n[…]\nnotch.tumblr.com\n[…]\nNotch no IMDb\n[…]\nArquivos notch.net\n[…]\nArquivos notch.tumblr.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lara Croft: Tomb Raider",
      "descricao": "Filme de 2001 baseado na série de jogos Tomb Raider."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que atriz vencedora do Oscar deu vida à arqueóloga Lara Croft no cinema, em 2001?",
    "resposta": "Angelina Jolie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lara_Croft:_Tomb_Raider"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lara_Croft:_Tomb_Raider",
        "situacao": "ok",
        "texto": "Lara Croft: Tomb Raider is a 2001 action adventure film directed by Simon West and written by Patrick Massett and John Zinman, based on the Tomb Raider video game series by Core Design. An international co-production between the United States, Canada, United Kingdom, Japan and Germany, the film stars Angelina Jolie as Lara Croft, with the cast also featuring Jon Voight, Iain Glen, Noah Taylor, and\n[…]\nThe casting of Jolie was controversial among many fans of the Tomb Raider series, with complaints about an American actress being hired to play a British character; others cited Jolie's tattoos and well-publicized controversial personal life. Director Simon West dismissed these concerns and said, in reference to Jolie's penchant for sexual knife play, \"it was always Angelina. I mean, Lara sleeps with knives and doesn't take shit from anybody.\n[…]\nThe site's consensus is \"Angelina Jolie is perfect for the role of Lara Croft, but even she can't save the movie from a senseless plot and action sequences with no emotional impact.\" Metacritic assigned the film a weighted average score of 33 out of 100, based on reviews from 31 critics, indicating \"generally unfavorable\" reviews. Audiences surveyed by CinemaScore gave the film a grade B on scale of A to F.\n[…]\nDirector Simon West would comment a decade after its release that the creation of Lara Croft was influenced by a film market that \"wasn't used to women leading summer blockbusters\". This factor influenced his decision to cast Angelina Jolie who was not well known at the time, and not the studio's first choice (in contrast to Catherine Zeta-Jones, Ashley Judd, and Jennifer Lopez).\n[…]\nJolie returned in the 2003 sequel Lara Croft: Tomb Raider – The Cradle of Life. While it was viewed as a critical improvement over its predecessor, it did not repeat its financial success, grossing $160 million.\n[…]\nLara Croft: Tomb Raider at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lara_Croft%3A_Tomb_Raider",
        "situacao": "ok",
        "texto": "Lara Croft: Tomb Raider é o primeiro filme baseado na série de videogame Tomb Raider, dirigido por Simon West e estrelando Angelina Jolie como a heroína Lara Croft. Com $274 milhões mundialmente Tomb Raider se tornou a maior bilheteria inspirada em um game e também o filme mais lucrativo estrelado por uma mulher, e teve uma continuação, The Cradle of Life.\n[…]\nAngelina Jolie - Lara Croft\n[…]\nLara Croft: Tomb Raider tem recepção geralmente desfavorável por parte da crítica profissional. Com a pontuação de 19% em base de 55 avaliações, o Rotten Tomatoes chegou ao consenso: \"Angelina Jolie é perfeita para o papel de Lara Croft, mas mesmo ela não pode salvar o filme a partir de um enredo e ação sem sentido sequências com nenhum impacto emocional\".\n[…]\nO filme foi indicado para dois MTV Movie Awards, incluindo: Melhor Performance Feminina e Melhor Cena de Luta, mas perdeu para Moulin Rouge! e Rush Hour 2, respectivamente. O filme também foi indicado ao Prémio Teen Choice de Melhor Filme – Drama. Angelina Jolie foi indicada para o Framboesa de Ouro de pior atriz por seu papel no filme, mas perdeu para Mariah Carey em Glitter.\n[…]\nAngelina Jolie, retornou na sequência Lara Croft Tomb Raider: The Cradle of Life (2003). Embora tenha sido visto como uma melhora da crítica em relação ao seu antecessor, o filme não repetiu seu sucesso financeiro, arrecadando US$ 156 milhões em comparação com os US$ 274 milhões da parcela anterior.\n[…]\nA GK Films adquiriu pela primeira vez os direitos de reiniciar o filme em 2011. Em abril de 2016, a MGM e a GK Films anunciaram a reinicialização do filme estrelado por Alicia Vikander como Lara Croft e Roar Uthaug dirigindo Tomb Raider foi lançado em 16 de março de 2018.\n[…]\nLara Croft: Tomb Raider no AllMovie (em inglês)\n[…]\nLara Croft: Tomb Raider (em inglês). no Box Office Mojo.\n[…]\n«Lara Croft: Tomb Raider» (em inglês). no Metacritic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Joel",
      "descricao": "Protagonista do jogo The Last of Us, da Naughty Dog, e da série de TV baseada nele."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ator interpretou tanto Joel, na série The Last of Us, quanto o protagonista de The Mandalorian?",
    "resposta": "Pedro Pascal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Joel_(The_Last_of_Us)",
      "https://en.wikipedia.org/wiki/The_Last_of_Us_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joel_(The_Last_of_Us)",
        "situacao": "ok",
        "texto": "Joel Miller is a character in the video game series The Last of Us by Naughty Dog. He is portrayed by Troy Baker through performance capture in the games, and by Pedro Pascal in the television adaptation. In the first game, The Last of Us (2013), Joel serves as the main protagonist and is tasked with escorting the young Ellie across a post-apocalyptic United States in an attempt to create a potent\n[…]\nPedro Pascal was cast as Joel in HBO's television adaptation of the video games on February 10, 2021. Earlier that day, it was reported Mahershala Ali was offered the role of Joel after Matthew McConaughey turned it down; The Hollywood Reporter noted Ali \"did circle a role\" in the show, but a deal was never formed.\n[…]\nPascal became available for a new series after the release of the second season of The Mandalorian, attracting several offers for projects from large networks, of which he chose The Last of Us, partly to work with co-creator Craig Mazin. Mazin and Druckmann had been considering Pascal for some time. He accepted the role within 24 hours; The Mandalorian producers gave Pascal permission to work on the series.\n[…]\nIn the television series, Pascal's performance and chemistry with Bella Ramsey's Ellie received high praise. Empire's John Nugent and /Film's Valerie Ettenhofer referred to Pascal's performance as the best of his career, citing his ability to portray nuance and rare vulnerability. TechRadar's Axel Metz described him as the \"perfect real-world manifestation\" of Joel.\n[…]\nGameSpot's Mark Delaney said Pascal's performance in the first episode made him cry twice and lauded his ability to portray different sides of Joel; Push Square's Aaron Bayne found Pascal's performance reflected Joel's torment without speaking, In the fourth episode, The A.V. Club's David Cote enjoyed Pascal's warmth and humor, particularly in scenes in which he teaches Ellie."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_(TV_series)",
        "situacao": "ok",
        "texto": "The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the video game franchise developed by Naughty Dog, the series is set decades after the collapse of society caused by a mass fungal infection that transforms its hosts into zombie-like creatures. The first season, based on 2013's The Last of Us, follows Joel (Pedro Pasc\n[…]\nPedro Pascal as Joel Miller (seasons 1–2), a hardened middle-aged survivor who is tormented by the trauma of his past. He is tasked with smuggling a young girl, Ellie, out of a quarantine zone and across the United States. Joel is portrayed as more physically vulnerable in the series compared to the game—he is hard of hearing in one ear and his knees ache when he stands.\n[…]\nThough both were featured on Game of Thrones, Pascal and Ramsey had not met before the filming of The Last of Us began but found they had instant chemistry, which developed over production.\n[…]\nThe season was released for digital purchase in May alongside the ASL versions, including as a bundle with the first season, and was released on DVD, Blu-ray, and Ultra HD Blu-ray in the United Kingdom on September 15, and in the United States on September 23, containing featurettes including set tours, a Q&A with Pascal and Ramsey, and the behind-the-scenes series Making of The Last of Us.\n[…]\nPascal, Ramsey, Mazino, Merced, and Dever appeared on talk shows and Ramsey and Merced on magazine covers.\n[…]\nThe performances in the second season received acclaim, with Pascal and Ramsey's chemistry continuing to receive praise; Rolling Stone's Alan Sepinwall found some episodes weaker for their absence. Critics lauded Pascal for bringing warmth, charisma, and hardiness to Joel, and Ramsey for developing Ellie into a traumatized young adult while maintaining emotional immaturity and playfulness.\n[…]\nThe Last of Us playlist on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joel_%28The_Last_of_Us%29",
        "situacao": "ok",
        "texto": "Joel Miller é um personagem fictício da franquia de jogos eletrônicos The Last of Us, da Naughty Dog. No primeiro jogo, Joel é encarregado de acompanhar a jovem Ellie em um Estados Unidos pós-apocalíptico, na tentativa de criar uma cura potencial para uma infecção à qual Ellie é imune. Ele é o principal personagem jogável do primeiro jogo e aparece brevemente no conteúdo para download The Last of \n[…]\nJoel é interpretado pelo ator Troy Baker através de sua voz e captura de movimentos; ele é dublado em português do Brasil por Luiz Carlos Persy, e em português europeu por Marcantonio Del Carlo, enquanto na série de televisão, Joel é interpretado pelo ator chileno Pedro Pascal. Joel foi criado por Neil Druckmann, o diretor de criação e escritor de The Last of Us.\n[…]\nBaker contribuiu muito para o desenvolvimento do personagem; por exemplo, ele convenceu Druckmann de que Joel cuidaria de Tess devido à sua solidão. Ao projetar a aparência física de Joel, a equipe tentou fazê-lo parecer \"flexível o suficiente\" para permitir que ele aparecesse tanto como \"um operador implacável no subsolo de uma cidade em quarentena\" quanto como uma \"figura paterna para Ellie\".\n[…]\nPor outro lado, Tom Mc Shea, da GameSpot, achou Joel duvidoso e pouco confiável.\n[…]\nPor seu papel em The Last of Us, Baker venceu o prêmio de \"Melhor Interpretação Masculina\" na Spike VGX 2013, e foi indicado como \"Melhor Intérprete\" pela The Daily Telegraph, \"Excelência em Performance de Personagem\" no D.I.C.E. Awards 2014 e \"Melhor Performance\" na British Academy Video Games Awards de 2014. O desempenho de Baker em The Last of Us Part II foi igualmente elogiado.\n[…]\nCruea, Mark (Outubro de 2018). Taylor, Nicholas; Voorhees, Gerald, eds. (Re)reading Fatherhood: Applying Reader Response Theory to Joel’s Father Role in The Last of Us. Masculinities in Play. [S.l.]: Palgrave Macmillan. pp. 93–108. ISBN 978-3-319-90581-5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Doutor Eggman",
      "descricao": "Cientista vilão da série Sonic, da Sega, também chamado Doutor Robotnik."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Nos filmes de Sonic, o Doutor Robotnik foi vivido pelo mesmo ator de O Máskara e Ace Ventura. Quem é ele?",
    "resposta": "Jim Carrey",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doctor_Eggman",
      "https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doctor_Eggman",
        "situacao": "ok",
        "texto": "Doctor Ivo Robotnik, also known as Doctor Eggman or simply Eggman, is a character created by the Japanese game designer Naoto Ohshima and the main antagonist of Sega's Sonic the Hedgehog franchise. Eggman is a mad scientist who seeks to steal the mystical Chaos Emeralds, destroy his archenemy Sonic the Hedgehog, and conquer the world. Eggman and his \"Badnik\" brand of military robots serve as bosse\n[…]\nJim Carrey was the first to portray Dr. Eggman in a live-action film, beginning with Sonic the Hedgehog in 2020. He reprised the role in the 2022 and 2024 sequels.\n[…]\nDr. Ivo \"Eggman\" Robotnik appears in the theatrical Sonic the Hedgehog film released by Paramount Pictures in 2020, with Jim Carrey portraying a live-action version of the character. In the film, he is referred to almost exclusively as Robotnik, and is depicted as a twisted scientist hired by the United States Department of Defense to hunt down Sonic after the latter caused a power outage across the Pacific Northwest.\n[…]\nIn February 2024, it was announced that Carrey would be reprising his role for the third film, which was released on December 20, 2024. In the time since his last defeat, Robotnik has taken up refuge, watches telenovelas and eats junk food, giving him his distinguished belly. In an effort to stop Shadow the Hedgehog, he forms an alliance with Sonic, but betrays him upon learning his grandfather Gerald Robotnik is working with Shadow to activate the Eclipse Cannon, an advanced space weapon.\n[…]\nIn his final moments, Robotnik broadcasts a message to Stone, proclaiming his friendship and appreciation for him, before the Eclipse Cannon explodes with him still inside. At the 2025 Kids' Choice Awards, Carrey won the \"Favorite Villain\" award for his dual role as Ivo and Gerald, respectively, in the third Sonic film.\n[…]\nDoctor Eggman at Sonic-City (archived)\n[…]\nDoctor Eggman at Sonic Channel (in Japanese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(film)",
        "situacao": "ok",
        "texto": "Sonic the Hedgehog is a 2020 action-adventure comedy film based on the Sonic video game series. It is the first installment in the Sonic the Hedgehog film series, it was directed by Jeff Fowler (in his feature film directorial debut), written by Pat Casey and Josh Miller, and stars James Marsden, Ben Schwartz, Tika Sumpter, Natasha Rothwell, Adam Pally, Neal McDonough, and Jim Carrey.\n[…]\nSchwartz voices Sonic, a blue hedgehog who can run at supersonic speeds, who teams up with the town sheriff Tom Wachowski (Marsden) to stop the mad scientist Dr. Robotnik (Carrey) from taking over the world.\n[…]\nJim Carrey as Dr. Robotnik, a brilliant robotics expert and mad scientist who works with the American government, covets Sonic's abilities, and plans to exploit them for his own personal gain, leading him to become Sonic's arch-nemesis. Carrey compared his character to his portrayal of the Riddler in Batman Forever (1995), saying: \"I wouldn't put one against the other. I think they'd be a great team.\n[…]\nIn May 2018, it was reported that Paul Rudd was in talks for a lead role as Tom, \"a cop who befriends Sonic and will likely team up to defeat Dr. Robotnik\"; however, this was later denied by Paramount. A day later, it was announced that James Marsden was cast in an undisclosed role but later revealed to be Tom Wachowski. In June, Tika Sumpter was cast as Tom's wife Maddie, with Jim Carrey cast to play the villain, Dr. Robotnik.\n[…]\nAkeem Lawanson of IGN gave the film a score of 7 out of 10, praising the performances and the nostalgia, stating, \"While this family-friendly action-comedy suffers from a simplistic story and leans too heavily on tired visual clichés, Sonic the Hedgehog is nevertheless boosted by solid performances from Ben Schwartz as Sonic and Jim Carrey as Dr. Robotnik.\n[…]\nSonic the Hedgehog at Rotten Tomatoes\n[…]\nSonic the Hedgehog at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doutor_Eggman",
        "situacao": "ok",
        "texto": "A série de jogos Sonic the Hedgehog começou originalmente em 1991 com dois personagens principais: o protagonista, Sonic the Hedgehog, e o antagonista, Dr. Eggman, também conhecido como Dr. Robotnik. Mais de três décadas depois, entretanto, a Sega ampliou o número de personagens significativamente. Este anexo lista quaisquer personagens notáveis que apareceram em mais de um jogo, na ordem de sua i\n[…]\nO nome do personagem vem da palavra inglesa \"Supersonic\" (\"Supersônico\"), pois Yuji Naka, o criador de Sonic, queria um nome que sugerisse velocidade. Sempre tenta impedir o Dr. Robotnik (também conhecido como Dr. Eggman) de pegar as Esmeraldas do Caos e, como sempre, consegue. Há um gene no DNA dos mamíferos que foi designado Sonic hedgehog, em sua homenagem.\n[…]\nDoutor Ivo Robotnik, mais conhecido como Doutor Eggman é um cientista maluco com um QI de 300. Ele sempre planeja dominar o mundo transformando em robôs tudo que vive e capturando todas as Esmeraldas do Caos, podendo assim criar a sua cidade utópica, Eggmanland. Geralmente Ivo Robotnik é o chefe do final das fases. Ele foi jogável em Sonic Adventure 2, Sonic Adventure 2: Battle, Sonic Advance 3 (na fase Non-Agression) e Sonic Riders.\n[…]\nShadow, o Ouriço é um anti-herói da série Sonic. Shadow é o terceiro ouriço a integrar o universo de Sonic the Hedgehog, foi criado por Gerald Robotnik, avô do vilão principal da série, Dr. Eggman, há 50 anos. Shadow se diz a \"forma de vida suprema\".\n[…]\nUm ouriço prateado que estreou em Sonic the Hedgehog (2006). Tem 14 anos. Apesar de possuir uma velocidade bem grande, Silver não corre tanto quanto Sonic e Shadow. Os fãs especulam que, do mesmo modo que Eggman Nega é um descendente de Eggman, Silver poderia ser descendente distante de Sonic ou de Shadow.\n[…]\nUm chacal mercenário de 19 anos, que foi apresentado pela primeira vez num evento da Sega, mas oficialmente ele estreou em Sonic Forces.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Metal Gear",
      "descricao": "Série de jogos de espionagem e infiltração da Konami, iniciada em 1987."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que designer japonês criou a série de espionagem Metal Gear, estrelada pelo soldado Snake?",
    "resposta": "Hideo Kojima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Metal_Gear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Metal_Gear",
        "situacao": "ok",
        "texto": "Metal Gear (Japanese: メタルギア) is a Japanese franchise of action-adventure stealth games created by Hideo Kojima. Developed and published by Konami, the first game, Metal Gear, was released in 1987 for MSX home computers. The player often takes control of a special forces operative, usually Solid Snake, who is typically assigned the task of finding the titular superweapon, \"Metal Gear\", a bipedal wa\n[…]\nHideo Kojima designed the original Metal Gear, which debuted in Japan and Europe in 1987 for the MSX2 computer platform. A separate team created a heavily modified Nintendo Entertainment System (NES) port of the game that was released in Japan on December 22, 1987, North America in June 1988, and Europe and Australia sometime in 1989. Konami produced an NES sequel, Snake's Revenge, again without Kojima, released in North America and Europe in 1990.\n[…]\nThe project was re-announced at the Metal Gear 25th Anniversary on August 30, 2012: Hideo Kojima announced that Arad Productions (led by Avi Arad) would produce the Metal Gear Solid movie for Columbia Pictures, with Sony Pictures in charge of distribution. On June 3, 2014, Deadline Hollywood reported that Sony was in talks with Jordan Vogt-Roberts to direct the film; he was confirmed to be attached as director of the project in 2015.\n[…]\nMetal Gear Survive, the first Metal Gear game to be developed since series creator Hideo Kojima left Konami, sold only a fraction of the sales made by Metal Gear Solid V: The Phantom Pain.\n[…]\nHideo Kojima's ambitious script in Metal Gear Solid 2 has been praised, some calling it the first example of a postmodern video game, while others have argued that it anticipated concepts such as post-truth politics, fake news, echo chambers and alternative facts. The series' storytelling in general has received praise for being among \"the most fascinating science fiction stories in any medium\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metal_Gear",
        "situacao": "ok",
        "texto": "Metal Gear (メタルギア) é uma série de jogos eletrônicos de tiro em terceira pessoa e de furtividade, criada por Hideo Kojima e produzida pela Konami. Nele, o jogador tem o controle de um soldado altamente treinado em infiltração (Solid Snake, Big Boss ou Raiden) e tem que enfrentar armas com capacidade de destruição em massa, Metal Gear, tanques gigantescos com capacidade de lançar ataques nucleares e\n[…]\nO primeiro jogo da série Metal Gear foi lançado em 1987 para o MSX2, com uma conversão inferior para o NES. Em 1990, foi lançada a sua sequência, Metal Gear 2: Solid Snake. Com o surgimento da quinta geração de consoles, Hideo Kojima conseguiu usar o potencial do PlayStation para criar o Metal Gear Solid com gráficos 3D excepcionais (para a época) e dublagens em todas as línguas.\n[…]\nMetal Gear Solid 4: Guns of the Patriots é o quarto jogo da série \"Solid\", lançado 12 de junho de 2008, exclusivamente para o PlayStation 3. Possui o tema \"sem lugar para se esconder\" (\"no place to hide\"). Foi produzido por Ken-ichiro Imaizumi e Hideo Kojima, este último continuando como diretor, com a ajuda de Shuyo Murata como co-diretor.\n[…]\nMesmo sem ter a participação de Hideo Kojima, o jogo foi considerado por ele como satisfatório, e, dele, veio a inspiração para fazer a verdadeira sequência do primeiro Metal Gear: o Metal Gear 2: Solid Snake, que sobrepôs toda a \"história\" do Snake's Revenge.\n[…]\nApós a saída de Hideo Kojima, a Konami anuncia Metal Gear Survive, game voltado para a cooperação online que se passa em uma MSF absorvida por um buraco de minhoca, parando em uma dimensão paralela na qual enfrenta zumbis cristalinos, o fato do game destoar da proposta stealth de Metal Gear acabou gerando a revolta de fãs, declarando a série como morta, o game foi lançado em 20 de fevereiro de 2018 e recebeu dois trailers.\n[…]\nMetal Gear >> Solid Snake: Music Compilation of Hideo Kojima/Red Disc (1998)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Game Boy",
      "descricao": "Videogame portátil da Nintendo lançado em 1989."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que engenheiro da Nintendo, também criador do Game and Watch, liderou o desenvolvimento do Game Boy?",
    "resposta": "Gunpei Yokoi",
    "distratores": [
      "Shigeru Miyamoto",
      "Satoru Iwata",
      "Hiroshi Yamauchi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gunpei_Yokoi",
      "https://en.wikipedia.org/wiki/Game_Boy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gunpei_Yokoi",
        "situacao": "ok",
        "texto": "Gunpei Yokoi (Japanese: 横井 軍平, Hepburn: Yokoi Gunpei; 10 September 1941 – 4 October 1997), sometimes transliterated as Gumpei Yokoi, was a Japanese toy maker and video game designer. As a long-time Nintendo employee, he was best known as the original designer of several notable Nintendo products, including the Ultra Hand toy, the Game & Watch and Game Boy handheld game systems, as well as the prod\n[…]\nYokoi said \"The Nintendo way of adapting technology is not to look for the state of the art but to utilize mature technology that can be mass-produced cheaply.\" He articulated his philosophy of \"Lateral Thinking with Withered Technology\" (枯れた技術の水平思考, Kareta Gijutsu no Suihei Shikō) (also translated as \"Lateral Thinking with Seasoned Technology\"), in the book Yokoi Gunpei Game House.\n[…]\nThe title of his main biography from 2010 translates from Japanese as Father of Games – Gunpei Yokoi, the Man Who Created Nintendo's DNA. A 1997 book's title translates to Yokoi's House of Gaming, which was explored in English in 2010 by Tokyo Scum Brigade. A 2014 book about him is Gunpei Yokoi: The Life & Philosophy of Nintendo's God of Toys.\n[…]\nIn 2003, Yokoi posthumously received the Lifetime Achievement Award of the International Game Developers Association. GameTrailers placed him on their lists for the \"Top Ten Game Creators\". An art gallery in Japan created an art exhibit in 2010 titled \"The Man Who Was Called the God of Games\" featuring all his key Nintendo works. In 1999, Bandai began releasing a series of handheld puzzle games named Gunpey as a tribute to their original creator, Yokoi.\n[…]\nGame & Watch (1980)\n[…]\nGame Boy (1989)\n[…]\nGame Boy Pocket (1996)\n[…]\nGunpei Yokoi's Lifetime Achievement Award\n[…]\nN-Sider Profile: Gunpei Yokoi\n[…]\nGunpei Yokoi In Memoriam 1941 – 1997\n[…]\nSearching for Gunpei Yokoi Archived 26 December 2007 at the Wayback Machine\n[…]\nTwenty Years of the Game Boy – Celebrating Gunpei Yokoi's Genius"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Game_Boy",
        "situacao": "ok",
        "texto": "The Game Boy is a handheld game console developed and marketed by Nintendo. It was released in Japan on April 21, 1989, followed by North America on July 31, 1989 and Europe on September 28, 1990. Nintendo's first handheld to use ROM cartridges, it succeeded the Game & Watch line of handheld electronic games and competed with Sega's Game Gear, Atari's Lynx, and NEC's TurboExpress in the fourth gen\n[…]\nNintendo Research & Development 1, under Gunpei Yokoi and Satoru Okada, designed the Game Boy. To expand on the single-game Game & Watch, Nintendo adopted a dot-matrix display and interchangeable game cartridges. They prioritized affordability, battery life, and durability over the faster processors and color graphics of its competitors; following Yokoi's philosophy of using mature, low-cost technology, the Game Boy has a monochromatic display and an 8-bit processor.\n[…]\nOn June 10, 1987, division director Gunpei Yokoi informed R&D1 that Yamauchi wanted a successor to Game & Watch priced under ¥10,000 (equivalent to ¥12,840 in 2024). From the very first meeting, the team knew they wanted to use a dot-matrix display and codenamed the project Dot Matrix Game (DMG), a name later reflected in the Game Boy's official model number: DMG-01.\n[…]\nMost of R&D1, including Okada, was reassigned. However, Yokoi remained committed to the project. Defying Yamauchi's decision, he continued refining the display. During discussions with a Sharp director involved in Game & Watch, the team learned of a super-twisted nematic (STN) display secretly in development. While it had a green tint and slightly lower contrast, it dramatically improved the viewing angle. Yokoi devised a plan.\n[…]\nAs a result, Tetris was bundled with the Game Boy in every region except Japan.\n[…]\nLego created a set based on the Game Boy in partnership with Nintendo. The set came out in October 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gunpei_Yokoi",
        "situacao": "ok",
        "texto": "Gunpei Yokoi, também podendo ser escrito Gumpei Yokoi (横井 軍平 Yokoi Gunpei, 10 de setembro de 1941 — 4 de outubro de 1997) foi um designer da fabricante de videojogos Nintendo, sendo uma das mais importantes figuras na história da companhia. É conhecido principalmente por ser o criador dos consoles portáteis Game Boy e Game & Watch, do direcional digital nos controles, e criador e produtor das séri\n[…]\nYokoi desenvolveu também vários outros brinquedos, durante a era de brinquedos da Nintendo, incluindo o quebra-cabeça Ten Billion Barrel, uma máquina de arremessar bolas de basebol chamada Ultra Machine, e um Love Tester. Outra invenção dele, com a colaboração de Masayuki Uemoura da Sharp, foi o conjunto do jogos com a Nintendo Gun, o Precursor da Nes Zapper.\n[…]\nA Nintendo começou eventualmente a vender videojogos, e Yamauchi pediu para Yokoi para fazer algo que mudasse os videojogos. O resultado foi a popular série de portáteis da Nintendo Game & Watch. O Game & Watch era joguinhos individuais com aproximadamente o tamanho de um cartão de crédito, e tinha uma tela de cristal líquido. Alguns consideram a série de pequenos portáteis um protótipo do Game Boy, que foi lançado mais tarde e acabou sendo o maior projeto de Yokoi.\n[…]\nA série Game & Watch teve 59 títulos entre 1980 e 1991. Vários jogos populares de fliperama foram transformados em títulos do Game & Watch, incluindo Donkey Kong e Super Mario Bros., que Yokoi ajudou a criar junto com Shigeru Miyamoto. Vários desses títulos de Game & Watch foram incluídos em uma larga série de jogos de compilação lançada em vários Game Boy, e incluía clássicos assim como versões reinventadas de Ball, Flagman, Oil Panic e Fire entre outros títulos.\n[…]\nTalvez o maior sucesso criado por Gunpei Yokoi seja o console portátil Game Boy, em 1989.\n[…]\nEm 4 de outubro de 1997, um ano depois do Virtual Boy (1996), Yokoi morreu em um acidente de automóvel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Game Boy",
      "descricao": "Videogame portátil da Nintendo lançado em 1989."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No lançamento americano do Game Boy, em 1989, que jogo de peças que caem vinha dentro da caixa do aparelho?",
    "resposta": "Tetris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Game_Boy",
      "https://en.wikipedia.org/wiki/Tetris_(Game_Boy_video_game)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Game_Boy",
        "situacao": "ok",
        "texto": "The Game Boy is a handheld game console developed and marketed by Nintendo. It was released in Japan on April 21, 1989, followed by North America on July 31, 1989 and Europe on September 28, 1990. Nintendo's first handheld to use ROM cartridges, it succeeded the Game & Watch line of handheld electronic games and competed with Sega's Game Gear, Atari's Lynx, and NEC's TurboExpress in the fourth gen\n[…]\nIn North America and Europe, the Game Boy was backed by a large marketing campaign and bundled with Tetris, which increased its appeal beyond traditional video game audiences. Although its monochromatic display and technical limitations drew criticism, the Game Boy's low price, long battery life, and extensive game library drove strong sales worldwide. The success of Nintendo's Pokémon series helped maintain its popularity late into the 1990s.\n[…]\nAlthough the Game Boy version of Tetris would not be ready for the console's Japanese debut, it was completed in time for its North American launch in July 1989. Henk Rogers, who had acquired the rights to Tetris, convinced Nintendo of America president Minoru Arakawa to make it the pack-in game with the Game Boy instead of Super Mario Land, arguing that while Mario primarily appealed to young boys, Tetris would appeal to everyone.\n[…]\nAs a result, Tetris was bundled with the Game Boy in every region except Japan.\n[…]\nWhen the Game Boy launched in Japan in April 1989, it featured four launch titles: Alleyway (a Breakout clone), Baseball (a port of the NES game), Super Mario Land (an adaptation of the Mario franchise for the handheld format) and Yakuman (a Japanese mahjong game). When the console debuted in North America, two additional launch titles were added: Tetris and Tennis (another NES port), while Yakuman never saw a wide international release."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tetris_(Game_Boy_video_game)",
        "situacao": "ok",
        "texto": "Tetris is a 1989 puzzle video game developed and published by Nintendo for the Game Boy. It is a portable version of Alexey Pajitnov's original Tetris and it was bundled with the North American and European releases of the Game Boy itself. It is the first game to have been compatible with the Game Link Cable, a pack-in accessory that allows two Game Boy consoles to link for multiplayer purposes. A\n[…]\nKnowing Nintendo was planning to release the Game Boy, Rogers approached Nintendo of America president Minoru Arakawa to suggest Tetris as the perfect bundled launch game. Arakawa questioned the idea, having planned to bundle Super Mario Land, but Rogers countered by stating that though a Mario game would promote the Game Boy to young boys, Tetris would promote it to everyone. Rogers was told to pursue the rights; he approached Stein to seek rights for it to be distributed with the Game Boy.\n[…]\nAn updated version of the game for Game Boy Color, titled Tetris DX, was developed by Nintendo and released in Japan on October 21, 1998, in North America on November 18, 1998, and in Europe and Australia in 1999. Tetris DX features battery-saved high scores and three player profiles. It has a new single-player mode against the CPU and also features two new modes of play. In \"Ultra Mode\", players must accumulate as many points as possible within a three-minute time period.\n[…]\nThe Game Boy version of Tetris was released in North America and Europe as a Virtual Console game for the Nintendo 3DS on December 22, 2011 and on December 28 in Japan. In contrast to the original version, it is not possible to play multiplayer in the Virtual Console version. The Virtual Console version of Tetris was delisted from the Nintendo eShop after December 31, 2014 in Europe and North America.\n[…]\nIn the Weekly Famitsu, the reviewers were familiar with Tetris, saying the game had to be banned from the Famitsu offices."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Game_Boy",
        "situacao": "ok",
        "texto": "O Game Boy (ゲームボーイ, Gēmu Bōi) é um console portátil desenvolvido pela Nintendo, lançado em 21 de abril de 1989 no Japão, em 31 de julho de 1989 na América do Norte e em 28 de setembro de 1990 na Europa (1991 em Portugal). É o primeiro console da linha Game Boy, foi criado por Gunpei Yokoi e pela Nintendo Research & Development 1, versões redesenhadas do console foram lançadas em 1996 e em 1998, o \n[…]\nO Game Boy foi lançado em abril de 1989 com um display de cristal líquido monocromático de fundo verde, jogos em preto e branco, gráficos de 8-Bits e com a possibilidade de ser jogado por mais de uma pessoa, utilizando o Cabo Game Link. Já vinha de fábrica com o jogo Tetris e a sua produção durou entre 1989 e 1995.\n[…]\nLançado em 1 de janeiro de 1995 no Japão, as especificações eram as mesmas do aparelho original, foi o primeiro a incluir diferentes cores, o modelo transparente foi exclusivo para a América do Norte, no Reino Unido foi lançada uma versão especial do Manchester United.\n[…]\nO Game Boy Pocket foi lançado no Japão em 20 de julho de 1996 e na América do Norte em 2 de setembro de 1996, por US$69,99 (equivalente a $144 em 2025). O Game Boy Pocket revitalizou as vendas de hardware e seu lançamento foi oportuno, pois coincidiu com o lançamento do primeiro jogo Pokémon, que catapultou o Game Boy para um reino desconhecido de triunfo comercial.\n[…]\nA primeira versão vinha apenas em prata e não tinha um LED de energia. Uma revisão no início de 1997 adicionou um LED de energia, diferentes cores da carcaça (vermelho, verde, amarelo, preto, metal dourado, transparente e azul) e baixou o preço para US$54,95 (equivalente a $110 em 2025). Em meados de 1998, poucos meses antes de o Game Boy Color ser colocado à venda, os preços haviam caído para US$4 995 (equivalente a $99 em 2025).\n[…]\nGame & Watch\n[…]\nGame Gear\n[…]\n«Game Boy Land». muitos artigos, reviews, curiosidades, etc.\n[…]\n«Game Boy Land» (em alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Super Mario Bros.",
      "descricao": "Jogo de plataforma da Nintendo lançado em 1985 para o NES, o Nintendinho."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem compôs a famosa música tema de Super Mario Bros., um dos temas mais conhecidos dos videogames?",
    "resposta": "Koji Kondo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Koji_Kondo",
      "https://en.wikipedia.org/wiki/Super_Mario_Bros."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Koji_Kondo",
        "situacao": "ok",
        "texto": "Koji Kondo (Japanese: 近藤 浩治, Hepburn: Kondō Kōji; born August 13, 1961) is a Japanese composer and senior executive at the video game company Nintendo. He is best known for his contributions for the Super Mario and The Legend of Zelda series, with his Super Mario Bros. theme being the first piece of music from a video game included in the American National Recording Registry.\n[…]\nKondo was hired by Nintendo in 1984 as its first dedicated composer and is currently a Senior Officer at its Entertainment Planning & Development division.\n[…]\nKondo returned to the Super Mario series to produce the scores to Super Mario Bros. 3 (1988) and the SNES launch title Super Mario World (1990). Koichi Sugiyama directed a jazz arrangement album of Super Mario World's music and oversaw its performance at the first Orchestral Game Musical Concert in 1991.\n[…]\nSince then, he has been collaborating with other staff members at Nintendo, advising and supervising music created by others, as well as providing additional compositions for games, including Super Mario Galaxy, The Legend of Zelda: Spirit Tracks, The Legend of Zelda: Skyward Sword and Super Mario 3D World. Kondo also served as the lead composer of Super Mario Maker and Super Mario Maker 2. He was a consultant for the score to The Super Mario Bros. Movie (2023).\n[…]\nKondo's work has been cited for allowing game music to transition from simple melodies to more complex orchestrations. Kondo attended the world premiere of Play! A Video Game Symphony at the Rosemont Theater in Chicago in May 2006, where his music from the Super Mario Bros. and The Legend of Zelda series was performed by a full symphony orchestra. Kondo also attended and performed in a series of three concerts celebrating the 25th anniversary of The Legend of Zelda series in late 2011.\n[…]\nKoji Kondo at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Super_Mario_Bros.",
        "situacao": "ok",
        "texto": "Super Mario Bros. is a 1985 platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). Directed and produced by Shigeru Miyamoto, it is the successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series. Players control Mario, or his brother Luigi in the multiplayer mode, to traverse the Mushroom Kingdom to rescue Princess Toadstool f\n[…]\nMiyamoto and Takashi Tezuka designed Super Mario Bros. as a culmination of the team's experience working on Devil World and the side-scrollers Excitebike and Kung Fu. Miyamoto wanted to create a more colorful platform game with a scrolling screen and larger characters. The team designed the first level, World 1-1, as a tutorial for platform gameplay. Koji Kondo's soundtrack is one of the earliest in video games, making music a centerpiece of the design.\n[…]\nNintendo sound designer Koji Kondo created the six-track score and all sound effects. At the time he was composing, video game music was mostly meant to attract attention, not necessarily to enhance or conform to the game. Kondo's work on Super Mario Bros. was one of the major forces in the shift towards music becoming an integral and participatory part of video games.\n[…]\nKondo later composed new music for the Super Mario Bros. snow, desert, and forest level themes that appeared in the 2019 level-creator game Super Mario Maker 2.\n[…]\nThe game's success helped establish Mario as a worldwide cultural icon; in 1990, a study taken in North America suggested that more children in the United States were familiar with Mario than they were with Mickey Mouse, another popular media character. The game's musical score composed by Koji Kondo, particularly the game's \"overworld\" theme, has also become a prevalent aspect of popular culture, with the latter theme being featured in nearly every single Super Mario game.\n[…]\nSuper Mario Bros. at MobyGames"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Koji_Kondo",
        "situacao": "ok",
        "texto": "Koji Kondo (近藤 浩治, Kondō Kōji) (Nagoia, 13 de agosto de 1961) é um compositor e músico japonês, famoso pelas trilhas sonoras produzidas para os jogos de videogame da empresa Nintendo. Seus principais trabalhos ficaram conhecidos nas séries Super Mario, Star Fox, The Legend of Zelda, entre muitos outros.\n[…]\n1985 Super Mario Bros.\n[…]\n1986 Super Mario Bros.: The Lost Levels\n[…]\n1987 Yume Kōjō: Doki Doki Panic (Super Mario Bros. 2 fora do Japão)\n[…]\n1988/1990 Super Mario Bros. 3\n[…]\n1990 Super Mario World\n[…]\n1995 Super Mario World 2: Yoshi's Island\n[…]\n1996 Super Mario 64\n[…]\n1999 Super Smash Bros. (com outros músicos)\n[…]\n2000 Mario Party 3 (com Ichiro Shimakura)\n[…]\n2001 Super Smash Bros. Melee (com outros músicos)\n[…]\n2002 Super Mario Sunshine (com Shinobu Tanaka)\n[…]\n2006 New Super Mario Bros. (com Asuka Ota e Hajime Wakai)\n[…]\n2007 Super Mario Galaxy (com Mahito Yokota)\n[…]\n2008 Super Smash Bros. Brawl (com outros músicos)\n[…]\n2010 Super Mario Galaxy 2 (com Mahito Yokota e Ryo Nagamatsu)\n[…]\n2013 Super Mario 3D World (com Mahito Yokota, Toru Minegishi e Yasuaki Iwata)\n[…]\n2015 Super Mario Maker (com Naoto Kubo e Asuka Hayazaki)\n[…]\n2017 Super Mario Odyssey (com Naoto Kubo e Shiho Fujii)‎\n[…]\n2019 Super Mario Maker 2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Super Mario Bros.",
      "descricao": "Jogo de plataforma da Nintendo lançado em 1985 para o NES, o Nintendinho."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Super Mario Bros., clássico do Nintendinho, foi lançado no Japão em que ano?",
    "resposta": "1985",
    "fonte": [
      "https://en.wikipedia.org/wiki/Super_Mario_Bros."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Super_Mario_Bros.",
        "situacao": "ok",
        "texto": "Super Mario Bros. is a 1985 platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). Directed and produced by Shigeru Miyamoto, it is the successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series. Players control Mario, or his brother Luigi in the multiplayer mode, to traverse the Mushroom Kingdom to rescue Princess Toadstool f\n[…]\nTo have a new game available for the end-of-year shopping season, Nintendo aimed for simplicity. In December 1984, the team created a prototype in which the player moved a 16x32-pixel rectangle around a single screen. Tezuka suggested using Mario after seeing the sales figures of Mario Bros. In February 1985, the team chose the name Super Mario Bros. after implementing the Super Mushroom power-up.\n[…]\nSuper Mario Bros. was first released in Japan on September 13, 1985, for the Family Computer (Famicom). It was released later that year in North America for the Nintendo Entertainment System (NES). Its exact North American release date is debated; though most sources report it was released in October 1985 as a launch game, when the NES had a limited release in the US, several sources suggest it was released between November 1985 and early 1986.\n[…]\nVS. Super Mario Bros. is a 1986 arcade adaptation of Super Mario Bros (1985), released on the Nintendo VS. System and the Nintendo VS. Unisystem (and its variant, Nintendo VS. Dualsystem). Existing levels were made much more difficult, with narrower platforms, more dangerous enemies, fewer hidden power-ups, and 200 coins needed for an extra life instead of 100. Several of the new levels went on to be featured in the Japanese sequel, Super Mario Bros. 2.\n[…]\n\"Super Mario Bros. for Virtual Console\". Nintendo.com. Archived from the original on December 30, 2007.\n[…]\nSuper Mario Bros. Official 3DS Virtual Console website (in Japanese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Super_Mario_Bros.",
        "situacao": "ok",
        "texto": "Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu) é um jogo eletrônico de plataforma desenvolvido pela Nintendo Research & Development 4 e publicado pela Nintendo para o Famicom em 1985 no Japão e para o Nintendo Entertainment System (NES) em 1985 e 1987 na América do Norte e Europa, respectivamente. É o sucessor do jogo de arcade Mario Bros., de 1983.\n[…]\nMiyamoto explicou: \"Sentimos fortemente como fomos os primeiros a criar o gênero [o que chamamos de \"jogo atlético\"] e nosso objetivo era continuar pressionando. [...] Tínhamos acumulado muito conhecimento desde o lançamento do console e chegou a hora de provar que isso seria possível.\" O jogo foi feito em conjunto com The Legend of Zelda, outro jogo dirigido e projetado por Miyamoto, lançado no Japão cinco meses após Super Mario Bros.\n[…]\nSuper Mario Bros. foi lançado pela primeira vez no Japão em 13 de setembro de 1985, para o Family Computer. Foi lançado mais tarde naquele ano na América do Norte para o Nintendo Entertainment System (NES).\n[…]\nEm 2004, foi lançada um porte para Game Boy Advance de Super Mario Bros. (parte do Classic NES Series), que não possui nenhum dos extras ou desbloqueáveis ​​disponíveis em Super Mario Bros. Deluxe. Naquela versão, a IGN observou que \"não oferecia quase tanto quanto o que já havia sido dado no Game Boy Color\" e deu a ela uma nota 8/10. Super Mario Bros.\n[…]\n2, foi lançada para o Famicom Disk System em 1986, exclusivamente no Japão, e mais tarde foi lançada em outros lugares como parte de Super Mario All-Stars sob o nome de Super Mario Bros.: The Lost Levels. Os conceitos e elementos de jogabilidade estabelecidos em Super Mario Bros. são predominantes em quase todos os jogos seguintes da série Super Mario. Ela consiste em mais de 15 títulos; pelo menos um novo Super Mario foi lançado em quase todos os consoles da Nintendo até o momento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Enterro dos cartuchos da Atari",
      "descricao": "Descarte em massa de cartuchos e consoles da Atari num aterro sanitário, em 1983, incluindo cópias do jogo E.T."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1983, a Atari enterrou milhares de cartuchos encalhados, inclusive do jogo E.T., num aterro de qual estado americano?",
    "resposta": "Novo México",
    "distratores": [
      "Nevada",
      "Arizona",
      "Texas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atari_video_game_burial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atari_video_game_burial",
        "situacao": "ok",
        "texto": "The Atari video game burial was a mass burial of unsold video game cartridges, consoles, and computers in a landfill site in Alamogordo, New Mexico, undertaken by the American video game and home computer company Atari, Inc. in 1983. Before 2014, the goods buried were rumored to be unsold copies of E.T.\n[…]\nIn 2014, Fuel Industries, Microsoft, and others worked with the New Mexico government to excavate the site as part of a documentary, Atari: Game Over. On April 26, 2014, the excavation revealed discarded games and hardware. Only a small fraction, about 1,300 cartridges, were recovered, with a portion given for curation and the rest auctioned to raise money for a museum to commemorate the burial.\n[…]\nIn September 1983, the Alamogordo Daily News of Alamogordo, New Mexico, reported in a series of articles that between 10 and 20 semi-trailer truckloads of Atari boxes, cartridges, and systems from an Atari storehouse in El Paso, Texas, were crushed and buried at the landfill to the south of city. It was Atari's first dealings with the landfill, which was chosen because no scavenging was allowed and its garbage was crushed and buried nightly.\n[…]\nOn September 28, 1983, The New York Times reported on the story of Atari's dumping in New Mexico. An Atari representative confirmed the story for the newspaper, stating that the discarded inventory came from Atari's plant in El Paso, which was being closed and converted to a recycling facility. The reports noted that the site was guarded to prevent reporters and the public from affirming the contents.\n[…]\nList of commercial failures in video and arcade games\n[…]\nSecond generation of video game consoles\n[…]\nMedia related to Atari video game burial at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enterro_de_jogos_eletr%C3%B4nicos_da_Atari",
        "situacao": "ok",
        "texto": "O enterro de jogos eletrônicos da Atari foi o sepultamento em massa de consoles, computadores e cartuchos de jogos eletrônicos realizado pela empresa norte-americana Atari, Inc. em um aterro no Novo México (EUA) em 1983. Acredita-se que o material descartado compreenda milhões de cópias de E.T.\n[…]\nEm setembro de 1983, o jornal Alamogordo Daily News de Alamogordo, no estado do Novo México (Estados Unidos), noticiou em uma série de reportagens que entre 10 e 20 semirreboques transportando caixas, cartuchos e sistemas da Atari vindos de um depósito em El Paso, Texas haviam descarregado no aterro sanitário municipal, com o material sendo compactado e enterrado no local.\n[…]\nEm 28 de maio de 2013, a Comissão Municipal de Alamogordo concedeu à empresa de entretenimento canadense Fuel Industries uma licença de seis meses para explorar o aterro sanitário e filmar um documentário sobre os acontecimentos de 1983, além de realizar uma escavação em busca do material descartado pela Atari. Na segunda quinzena de abril de 2014, foi confirmado que a Atari realmente enterrou os cartuchos. Na escavação, foram encontrados exemplares dos jogos E.T., Space Invaders e Centipede.\n[…]\nTodo o trabalho de escavação foi registrado para ser lançado como documentário da Microsoft, a ser lançado no ano de 2014 no Xbox One e Xbox 360, com o título \"Atari: Game Over\" produzido pela Lightbox, uma companhia britânica-americana. A escavação foi interrompida brevemente por uma reclamação do Departamento Ambiental do Novo México, citando riscos em potencial, mas os problemas foram resolvidos em Abril de 2014, e a escavação foi continuada.\n[…]\nCrise dos jogos eletrônicos de 1983",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Blanka",
      "descricao": "Lutador de pele verde da série Street Fighter, da Capcom, que solta descargas elétricas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Blanka, o lutador de pele verde que dá choques em Street Fighter 2, cresceu na selva de qual país?",
    "resposta": "Brasil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blanka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blanka",
        "situacao": "ok",
        "texto": "Blanka ( ; Japanese: ブランカ), also known by his birth name Jimmy, is a character in Capcom's Street Fighter fighting game series. He first appeared in Street Fighter II (1991) as one of eight playable characters, and continued to appear in sequel and spin-off games. Blanka is also present in a number of Capcom's crossover games, including the SNK vs. Capcom series.\n[…]\nBlanka first appears in Street Fighter II, when he sees his mother (who tells his backstory) after he competes in the World Warrior tournament. According to the story, Blanka was born as a boy named Jimmy who was involved in a plane crash in the Amazon rainforest. Although in the initial games Blanka's mother says the plane crashed when he was \"a little boy\", the manual for Street Fighter IV says it happened when he was a baby.\n[…]\nBlanka also appears in several spin-off titles. He is a playable character in the later Street Fighter EX series games (Street Fighter EX2 and Street Fighter EX3), Capcom vs. SNK, Capcom vs. SNK 2 and the home version of Street Fighter: The Movie. Blanka is a playable character by default in the PlayStation Vita version of Street Fighter X Tekken, and via downloadable content in the Xbox 360 and PlayStation 3 versions. He is a boss character in Street Fighter X Mega Man.\n[…]\nBlanka briefly appears in Street Fighter II: The Animated Movie, when he is lowered from a cage and defeats Zangief in Las Vegas.\n[…]\nA 2012 meme said that O Maior Brasileiro de Todos os Tempos, the Brazilian version of 100 Greatest Britons, had chosen Blanka the \"Greatest Brazilian of All Time\".\n[…]\nIGN ranked Blanka seventh of its \"Top 25 Street Fighter Characters\", noting his unique characteristics, and GameDaily placed Blanka fourth on its \"Top 20 Street Fighter Characters of All Time\" list.\n[…]\nMedia related to Blanka (Street Fighter) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blanka",
        "situacao": "ok",
        "texto": "Blanka (ブランカ, Buranka) é um personagem fictício da série de jogos de luta Street Fighter da Capcom. Ele apareceu pela primeira vez no videogame Street Fighter II de 1991 como um dos oito personagens jogáveis, e foi posteriormente apresentado sequências e spin-off. Blanka também está presente em vários jogos de crossover da Capcom, incluindo a série SNK vs. Capcom.\n[…]\nBlanka foi originalmente concebido como um personagem humano por Akira \"Akiman\" Yasuda, e sofreu várias reconceituações durante a produção de Street Fighter II antes de chegar à sua versão final como uma fera selvagem com pele verde e longos cabelos laranja. A história de fundo de Blanka é que ele já foi humano, mas depois de um acidente de avião no Brasil ele sofreu uma mutação (resultando em sua coloração verde e sua capacidade de gerar eletricidade).\n[…]\nBlanka foi geralmente bem recebido pelos críticos e fãs, tornando-se um dos personagens mais populares da franquia.\n[…]\nA equipe então adotou a aparência feroz de Blanka, porque eles sentiram que o jogo seria \"chato\" com apenas personagens humanos. Apesar de ser alocado no Brasil, seu nome é grafado em espanhol, o que indica confusão com o português. Seu nome foi inspirado no Hama Blanca, um parque próximo da sede da CAPCOM no Japão.\n[…]\nA característica física mais proeminente de Blanka é sua cor verde, inicialmente atribuída ao seu consumo de clorofila das plantas para se misturar em seu ambiente selvagem. No entanto, quando Street Fighter foi trazido para os EUA, a coloração de Blanka foi atribuída a ele ser atingido por um raio durante a tempestade elétrica em que seu avião caiu. Em Street Fighter II, a pele de Blanka é verde-amarelada, mas versões posteriores do personagem são de um verde brilhante.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Nintendo",
      "descricao": "Empresa japonesa de videogames fundada em 1889, criadora de Mario e Zelda."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em qual cidade japonesa, antiga capital imperial, a Nintendo foi fundada e mantém sua sede até hoje?",
    "resposta": "Quioto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops, publishes, and manufactures both video games and video game consoles.\n[…]\nIn April 2020, Reuters reported that ValueAct Capital had acquired over 2.6 million shares in Nintendo stock worth US$1.1 billion over the course of a year, giving them an overall stake of 2% in Nintendo.\n[…]\nNintendo Systems\n[…]\nTime magazine in turn chose Nintendo in 2018 as one of the \"50 Genius Companies\" of the year, saying that \"resurrection\" has become a \"habit\" of the company and highlighting the success of the Nintendo Switch over the Wii U. Its capital in 2018 exceeded ten billion yen and net sales were over nine billion dollars, mostly in the North American market, making it one of Japan's richest and most valuable companies.\n[…]\nSuper Nintendo World\n[…]\nUniversal City Studios, Inc. v. Nintendo Co., Ltd.\n[…]\n— (2015c). La historia de Nintendo Volumen III (in Spanish). Héroes de papel. ISBN 978-84-176491-0-4.\n[…]\nSheff, David (1994). Game Over: How Nintendo Conquered the World (1st ed.). New York: Vintage Books. ISBN 9780307800749. OCLC 780180879.\n[…]\n— (1999). Game Over: How Nintendo Conquered the World (1st GamePress ed.). Wilton, CT: GamePress. ISBN 978-0-966-9617-0-6. OCLC 1131659026. Retrieved 27 July 2019.\n[…]\n— (2011) [1999]. Game Over: How Nintendo Conquered The World. Knopf Doubleday Publishing Group. ISBN 9781299040625. OCLC 1237159707.\n[…]\nSloan, Daniel (2011). Playing to Wiin: Nintendo and the Video Game Industry's Greatest Comeback. Wiley. ISBN 978-0-470-82512-9. OCLC 707935885.\n[…]\n\"Nintendo: Company History\". Nintendo.com. Nintendo of America. 1996. Archived from the original on 5 February 1998."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. (任天堂株式会社, Nintendō Kabushiki Gaisha) é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto, no Japão. Foi fundada em setembro de 1889 pelo artesão e empresário Fusajiro Yamauchi, e originalmente era uma fabricante de cartas de baralho tradicionais japonesas.\n[…]\nA Nintendo foi fundada no dia 23 de setembro de 1889 em Quioto, Japão, pelo artesão Fusajiro Yamauchi, originalmente sob o nome de Nintendo Koppai.\n[…]\nA necessidade de diversificação levou a Nintendo a negociar ações nas bolsas de valores de Quioto e Osaka a partir de 1962, transformando-se em uma empresa de capital aberto no ano seguinte, com o nome de Nintendo Co., Ltd., além de conseguir uma receita de 150 milhões de ienes em 1964. Apesar de ter alcançado um período de prosperidade, os jogos de cartas derivados dos produtos da Disney a deixaram muito dependente do mercado infantil.\n[…]\nAo mesmo tempo uma série de mudanças administrativas ocorreu, quando a sede corporativa mudou para um edifício no bairro de Minami em Quioto e a Nintendo Benelux foi inaugurada a fim de cuidar dos negócios da empresa nos países da Benelux.\n[…]\nA Nintendo possui cinco escritórios no Japão: três em Quioto e dois em Tóquio. O edifício sede original fora inaugurado em 1889 e acabou demolido em 2004, ficando no leste de Quioto às margens do rio Kamo, na rua Shomen Dori. A sede foi transferida em 1959 para o distrito de Higashiyama-ku, com a companhia inaugurando dois anos depois escritórios no distrito de Chiyoda em Tóquio.\n[…]\nA sede da Nintendo fica desde 2000 no número 11-1 na esquina das ruas Kuzebashi e Shinmachi no distrito de Minami-Ku em Quioto. A empresa inaugurou em 2014 um novo centro de pesquisa e desenvolvimento na rua de trás do edifício sede.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Nintendo",
      "descricao": "Empresa japonesa de videogames fundada em 1889, criadora de Mario e Zelda."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quando foi fundada, em 1889, muito antes dos videogames, a Nintendo fabricava qual produto?",
    "resposta": "Cartas de baralho hanafuda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo",
      "https://en.wikipedia.org/wiki/Hanafuda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops, publishes, and manufactures both video games and video game consoles.\n[…]\nThe history of Nintendo began when craftsman Fusajiro Yamauchi founded the company in 1889 to produce handmade hanafuda playing cards. After venturing into various lines of business and becoming a public company, Nintendo began producing toys in the 1960s, and later video games. Nintendo developed its first arcade games in the 1970s, and distributed its first system, the Color TV-Game in 1977.\n[…]\nNintendo was founded as Nintendo Koppai on 23 September 1889 by craftsman Fusajiro Yamauchi in Shimogyō-ku, Kyoto, Japan, as an unincorporated establishment, to produce and distribute Japanese playing cards, or karuta (かるた; from Portuguese carta, 'card'), most notably hanafuda (花札, 'flower cards').\n[…]\nOther card manufacturers had opted to leave the market, not wanting to be associated with its criminality, but Yamauchi persisted despite such fears to become the primary producer of hanafuda within a few years. With the increase of the cards' popularity, Yamauchi hired assistants to mass-produce them to satisfy the demand.\n[…]\nNintendo reached an agreement with Embracer Group in May 2024 to acquire 100% of the shares in Shiver Entertainment, a company that has specialized in porting triple-A games like Hogwarts Legacy and Mortal Kombat 1 to the Switch, making it a wholly owned subsidiary of Nintendo, subject to closing conditions. In October 2024, the company opened the Nintendo Museum on the site of its former Uji Ogura plant, where it had manufactured playing and hanafuda cards.\n[…]\nNintendo Systems"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hanafuda",
        "situacao": "ok",
        "texto": "Hanafuda (花札; lit. 'flower cards')) are a type of Japanese playing cards. They are typically smaller than Western playing cards, only 5.4 by 3.2 centimetres (2.1 by 1.3 in), but thicker and stiffer. On the face of each card is a depiction of plants, tanzaku (短冊; 'paper strips'), animals, birds, or man-made objects. One single card depicts a human. The back side is usually plain, without a pattern \n[…]\nSo as a loophole to the ban, early hanafuda were made to have old poems on some of the cards, disguising them as Uta-garuta. Remnants of this can be seen via the tanzaku-ranked cards.\n[…]\nIn 1889, Fusajiro Yamauchi founded Nintendo for the purposes of producing and selling hand-crafted hanafuda. Nintendo has focused on video games since the 1970s but continues to produce cards in Japan, including themed sets based on Mario, Pokémon, and Kirby. The Koi-Koi game played with hanafuda is included in Nintendo's own Clubhouse Games (2006) for the Nintendo DS, and Clubhouse Games: 51 Worldwide Classics (2020) for the Nintendo Switch.\n[…]\nThough modern Japanese hanafuda is primarily made today by either of the long-standing Oishi Tengudo (1800) or Nintendo (1889), dozens of others have manufactured hanafuda, such as Angel, Tamura Shogundo, Matsui Tengudo, Ace, Maruē, and many more.\n[…]\nIn Unicode, a symbol to represent hanafuda is available at U+1F3B4 🎴 FLOWER PLAYING CARDS in the Miscellaneous Symbols and Pictographs block. This character is typically rendered as the Full Moon with Red Sky card. It was added as part of Unicode 6.0 in 2010 for compatibility with a KDDI emoji character, and was added to Unicode Emoji 1.0 in 2015.\n[…]\nCategory:Films about hanafuda\n[…]\nCategory:Hanafuda manufacturers\n[…]\nMedia related to Hanafuda at Wikimedia Commons\n[…]\nThe dictionary definition of hanafuda at Wiktionary\n[…]\nHanafuda   at BoardGameGeek\n[…]\nHanafuda rules\n[…]\nCommentary on Hanafuda cards, including Korean variants"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. (任天堂株式会社, Nintendō Kabushiki Gaisha) é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto, no Japão. Foi fundada em setembro de 1889 pelo artesão e empresário Fusajiro Yamauchi, e originalmente era uma fabricante de cartas de baralho tradicionais japonesas.\n[…]\nOutra medida foi começar a oferecer seus produtos em outras cidades, como Osaka, onde grandes quantidades de dinheiro eram movimentadas em jogos de cartas e os empresários locais renovavam quase continuamente os baralhos, evitando assim suspeitas de marcação.\n[…]\nEsta situação se acentuou porque as vendas de hanafudas, destinadas ao público adulto, caíram muito enquanto a sociedade japonesa passava a se interessar em outras formas de entretenimento, como pachinkos, boliche e até mesmo passeios noturnos. Portanto, assim que as vendas dos baralhos da Disney começaram a cair, a Nintendo logo percebeu que não tinha alternativas para aliviar a situação.\n[…]\nO principal negócio da Nintendo é a pesquisa, desenvolvimento, produção e distribuição de produtos de entretenimento, principalmente jogos eletrônicos, consoles e baralhos de cartas, com seus principais mercados sendo o Japão, América do Norte e Europa, embora mais de 70% de suas vendas globais provenham destes dois últimos.\n[…]\nA companhia continua a produzir e disponibilizar suas linhas de baralhos tradicionais japoneses, incluindo cartas hanafuda, kabufuda e Hyakunin Isshu, além de baralhos especiais temáticos de Pokémon, Mario e The Legend of Zelda. Também existe a opção do cliente personalizar suas cartas a partir de seus próprios desenhos. Outros produtos semelhantes vendidos pela empresa são jogos de tabuleiro shogi, go e mahjong, este último desde 1964 sob a marca registrada Yakoman.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Grand Theft Auto: Vice City",
      "descricao": "Jogo da Rockstar Games de 2002, ambientado numa cidade fictícia nos anos oitenta."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ensolarada Vice City, cenário de GTA ambientado nos anos oitenta, é inspirada em qual cidade americana?",
    "resposta": "Miami",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City",
        "situacao": "ok",
        "texto": "Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fourth main game in the Grand Theft Auto series, following 2001's Grand Theft Auto III, and the sixth entry overall. Set in 1986 within the fictional Vice City (based on Miami), the single-player story follows gangster Tommy Vercetti's rise to power after being release\n[…]\nThe game is set in 1986 in fictional Vice City, which is based heavily on the city of Miami, Florida. Vice City previously appeared in the original Grand Theft Auto (1997); the development team decided to reuse the location and incorporate ideas from within the studio and from the fanbase. They wanted to satirise a location that was not contemporary, in contrast to Grand Theft Auto III's modern-day Liberty City.\n[…]\nIn January 2004, North Miami's majority Haitian-American council filed an ordinance to ban the selling or renting of violent games to anyone under 18 without parental permission. The proposal, apparently sparked by Vice City, was supported by North Miami mayor Josaphat Celestin, who stated \"We don't believe the First Amendment was written to protect those who want to incite violence\". The case was later downgraded from federal court to state court.\n[…]\nGrand Theft Auto: Vice City was released for Windows on 13 May 2003 in North America and 16 May in Europe, supporting higher screen resolutions and draw distance, and featuring more detailed textures. Vice City was bundled with Grand Theft Auto III in a compilation titled Grand Theft Auto: Double Pack, released on the Xbox on 4 November 2003 in North America and 2 January 2004 in Europe.\n[…]\nKushner, David (3 April 2012). Jacked: The Outlaw Story of Grand Theft Auto. Turner Publishing Company. ISBN 978-0-470-93637-5.\n[…]\nRockstar North (2002). Grand Theft Auto: Vice City Game Manual. Rockstar Games."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Theft_Auto%3A_Vice_City",
        "situacao": "ok",
        "texto": "Grand Theft Auto: Vice City é um jogo eletrônico de ação-aventura de 2002 desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o quarto título principal da série Grand Theft Auto, após Grand Theft Auto III (2001), e o sexto título no geral. Ambientado em 1986 na fictícia Vice City (baseada em Miami), a história para um jogador acompanha a ascensão ao poder do gângster Tommy Vercetti\n[…]\nO jogo se passa em 1986 na cidade ficcional de Vice City, modelada a partir de Miami e Miami Beach. Vice City anteriormente já tinha aparecido no Grand Theft Auto original, com a equipe decidindo usar a mesma locação e incorporar ideias vindas do próprio estúdio e dos fãs. A Rockstar desejava satirizar um local não-contemporâneo, diferentemente da Liberty City de Grand Theft Auto III.\n[…]\nOs desenvolvedores organizaram viagens de pesquisa para Miami logo depois da finalização de Grand Theft Auto III, dividindo-se em pequenos grupos e observando as ruas.\n[…]\nA cidade foi reutilizada em Grand Theft Auto: Vice City Stories (2006), que se passa em 1984 e funciona como prequela direta de Vice City. O título mostra versões anteriores de locais, negócios e personagens que aparecem no jogo de 2002, estabelecendo uma cronologia interna para a encarnação da cidade utilizada nos jogos da chamada geração tridimensional da série.\n[…]\nUma nova interpretação de Vice City também integra o cenário de Grand Theft Auto VI. A página oficial do jogo identifica o cenário como \"Vice City, USA\", dentro do estado fictício de Leonida, e informa lançamento para 19 de novembro de 2026 no PlayStation 5 e Xbox Series X/S. O retorno do nome Vice City décadas depois reforça a permanência do cenário na identidade da série, embora o jogo de 2026 apresente uma interpretação própria da cidade.\n[…]\n«Manual oficial de Grand Theft Auto: Vice City (PDF)» (PDF) (em inglês)\n[…]\n«Suporte oficial de Grand Theft Auto: Vice City» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Pong",
      "descricao": "Jogo de fliperama da Atari que simula tênis de mesa, lançado em 1972."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano a Atari lançou Pong, o fliperama de tênis de mesa que popularizou os videogames?",
    "resposta": "1972",
    "distratores": [
      "1968",
      "1977",
      "1980"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pong"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pong",
        "situacao": "ok",
        "texto": "Pong is a 1972 sports video game developed and published by Atari, Inc. for arcades. It was created by Allan Alcorn as a training exercise assigned to him by Atari co-founder Nolan Bushnell. Bushnell and Atari co-founder Ted Dabney were so surprised by the quality of Alcorn's work that they decided to manufacture the game.\n[…]\nHowever, Alcorn has claimed it was in direct response to Bushnell's viewing of the Magnavox Odyssey's Tennis game. In May 1972, Bushnell had visited the Magnavox Profit Caravan in Burlingame, California where he played the Magnavox Odyssey demonstration, specifically the table tennis game. Though he thought the game lacked quality, seeing it prompted Bushnell to assign the project to Alcorn.\n[…]\nIn August 1972, Bushnell and Alcorn installed the Pong prototype at a local bar, Andy Capp's Tavern. They selected the bar because of their good working relationship with the bar's owner and manager, Bill Gaddis; Atari supplied pinball machines to Gaddis. Bushnell and Alcorn placed the prototype on one of the tables near the other entertainment machines: a jukebox, pinball machines, and Computer Space.\n[…]\nAfter hearing about the game's success, Bushnell decided there would be more profit for Atari to manufacture the game rather than license it. Bushnell had difficulty finding financial backing for Pong; banks viewed it as a variant of pinball, which at the time the general public associated with the Mafia. Atari eventually obtained a line of credit from Wells Fargo that it used to expand its facilities to house an assembly line. The company announced Pong on November 29, 1972.\n[…]\nAtari remade the game on numerous platforms. In 1977, Pong and several variants of the game were featured in Video Olympics, one of the original release titles for the Atari 2600.\n[…]\nPong Flyer\n[…]\nPong variants at MobyGames"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pong",
        "situacao": "ok",
        "texto": "Pong é um jogo eletrônico de esporte de arcade com temática de tênis de mesa, com gráficos bidimensionais, desenvolvido pela Atari e lançado originalmente em 1972. Foi um dos primeiros jogos de arcade; foi criado por Allan Alcorn como um exercício de treinamento atribuído a ele pelo cofundador da Atari, Nolan Bushnell, mas Bushnell e o cofundador da Atari, Ted Dabney, ficaram surpresos com a quali\n[…]\nPong foi o primeiro jogo desenvolvido pela Atari Inc., fundada em junho de 1972 por Nolan Bushnell e Ted Dabney. Depois de produzir Computer Space, Bushnell decidiu formar a empresa para produzir mais jogos ao licenciar ideias de outras empresas. O primeiro contrato foi com Bally Technologies para um jogo de corrida.\n[…]\nEntretanto, Alcorn diz que foi uma resposta direta para o jogo de tênis da Magnavox Odyssey. Em maio de 1972, Bushnell havia visitado Magnavox Provit Caravan em Burlingame, Califórnia, onde ele jogou a demonstração de Magnavox Odyssey, especificamente o jogo de tênis de mesa. Apesar dele ter pensado que o jogo devia em qualidade, o jogo inspirou Bushnell a passar o projeto para Alcorn.\n[…]\nEm setembro de 1972, Bushnell e Alcorn instalaram um protótipo de Pong no bar local, Andy Capp's Tavern. Eles escolheram o bar por causa das boas relações com o gerente, Bill Gaddis; Atari fornecia máquinas de pinball para Gaddis. Bushnell e Alcorn colocaram o protótipo em uma das mesas perto de outras máquinas de entretenimento: uma jukebox, máquinas de pinball, e Computer Space. O jogo foi bem recebido na primeira noite e a popularidade continuou a crescer durante os dez dias seguintes.\n[…]\nBushnell sentiu que o melhor modo de competir contra os imitadores era criar produtos melhores, fazendo com que a Atari produzisse sequências do jogo nos anos seguintes após o lançamento original: Pong Doubles, Super Pong, Quadrapong, e Pin-Pong.\n[…]\n«Nolan Bushnell, PONG e o nascimento da Atari !»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Triforça",
      "descricao": "Relíquia sagrada formada por três triângulos dourados na série The Legend of Zelda."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na série Zelda, a Triforça é formada por três triângulos: o do Poder, o da Sabedoria e qual outro?",
    "resposta": "Coragem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Triforce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Triforce",
        "situacao": "ok",
        "texto": "The Triforce (Japanese: トライフォース, Hepburn: Toraifōsu) is a fictional artifact and icon of Nintendo's The Legend of Zelda video game franchise. It first appeared in the original The Legend of Zelda video game (1986) and has appeared in almost every subsequent game in the series. It consists of three equilateral triangles that are joined to form a large equilateral triangle. In-universe, it represent\n[…]\nIn The Legend of Zelda video game, the Triforce was simply described as magical triangles of great power, but its significance was expanded in subsequent games. The first game established it as an object of desire and a central plot device that binds the three characters. Initially comprising two pieces, the third piece, the Triforce of Courage, was introduced in Zelda II: The Adventure of Link.\n[…]\nIn Super Smash Bros for Nintendo 3DS and Wii U, Link's and Toon Link's final smash is the Triforce Slash, which traps enemies in the Triforce before relentlessly slashing at them. In Super Smash Bros. Ultimate, the Triforce Slash appears in Toon Link's and Young Link's \"Final Smash\" attack. In the same game, Zelda uses the Triforce of Wisdom as her Final Smash, which produces a glowing triangle that sucks in opponents and deals damage.\n[…]\nIn 2023, the British metal band DragonForce released a single titled \"Power of the Triforce\", which is a tribute to The Legend of Zelda series.\n[…]\nLuke Plunkett of Kotaku opined that the Triforce is \"one of the most iconic designs in the history of video games\" and \"the object that lies at the heart of The Legend of Zelda\". Eurogamer staff commented that the Triforce symbolises \"Zelda's perpetually cycling legend\" and is the blueprint for every game in the series, with Link representing \"agency, curiosity, the eternal innocence\", Ganon representing \"selfishness, megalomania, destruction\" and Zelda representing \"insight and direction\".\n[…]\nSierpiński triangle"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Triforce",
        "situacao": "ok",
        "texto": "Triforce é uma artefato fictício sagrado da franquia de jogos The Legend of Zelda. Definido como \"Poder Supremo\", o artefato foi criado pelas deusas Din, Farore e Nayru após estas terem criado o reino de Hyrule. A Deusa Hylia foi escolhida para proteção deste mundo e da Triforce. Após Hylia deixar de existir como uma deusa, a Triforce será protegida pela Família Real de Hyrule, os sábios e os Shei\n[…]\nÉ representada por três triângulos equiláteros: a Triforce do Poder, associada com vermelho e Din; a Triforce da Sabedoria, associada com azul e Nayru; e a Triforce da Coragem, associada com verde e Farore.\n[…]\nPortanto, se alguém com um coração puro obtiver a Triforce, o mundo entrará numa era de paz e prosperidade; porém se alguém com o coração caucásico e ambicioso tocá-la, o mundo conhecerá uma era de trevas. Por ser capaz de realizar qualquer desejo, a relíquia se tornou alvo de inúmeras pessoas pelo mundo, porém ninguém foi capaz de encontrá-la. Cada parte da Triforce contem a essência de cada deusa. O Triângulo da Deusa da Coragem que é Farore é a Triforce que tem Habilidade, Coragem e Energia.\n[…]\n\"Antes que a vida existisse, antes do mundo tivesse forma, três deusas áureas desceram sobre a caótica terra de Hyrule, elas eram Din, a deusa do Poder; Nayru, a deusa da Sabedoria; e Farore, a deusa da Coragem.\n[…]\nEm Ocarina of Time conta-se que quando alguém de coração impuro toca a Triforce seus pedaços se dispersam, ficando com a pessoa apenas aquele que representa a Força em que ela mais acredita. As outras Forças iriam para a pessoa que melhor as representa no mundo. Quando Ganondorf tenta pegar a Triforce, os três pedaços se separam e ele mantém a Força do Poder. É informado pouco antes da batalha final que as Forças da Sabedoria e da Coragem ficam respectivamente com Zelda e Link.\n[…]\nTriângulo de Sierpinski",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
