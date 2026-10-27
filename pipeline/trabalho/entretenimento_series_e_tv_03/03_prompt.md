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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6). Uma pergunta `aberta` cuja resposta é um ano ou uma data deve ser reescrita como `multipla`, com 3 anos ou datas próximos e críveis (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Ross Geller",
      "descricao": "Personagem da sitcom Friends, paleontólogo e irmão de Monica, interpretado por David Schwimmer."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Em Friends, qual dos seis amigos chega ao fim da série com mais divórcios, três ao todo?",
    "resposta": "Ross Geller",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ross_Geller"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ross_Geller",
        "situacao": "ok",
        "texto": "Ross Geller is one of the six main characters of the NBC sitcom Friends, portrayed by David Schwimmer. Ross is considered by many to be the most intelligent member of the group and is noted for his goofy but lovable demeanor. His relationship with Rachel Green was included in TV Guide's list of the best TV couples of all time, as well as Entertainment Weekly's \"30 Best 'Will They/Won't They?' TV C\n[…]\nRaised on Long Island, Ross is the elder brother of Monica Geller (Courteney Cox), and son of Jack (Elliott Gould) and Judy Geller (Christina Pickles). Ross and Monica are Jewish and see themselves as at least cultural Jews, with Ross taking a more active role in wanting to teach his son, Ben (Cole Sprouse), about the faith. Ross gets divorced and is newly single in the first episode because his wife, Carol (Jane Sibbett), has realized she's a lesbian.\n[…]\nRoss' daughter with Rachel, Emma Geller-Green, was born at the end of Season 8. Rachel's pregnancy was revealed in the season finale of Season 7. The conception of Emma was the result of a one-night stand, which was later revealed in the Season 8 episode, \"The One With The Videotape\".\n[…]\nRoss maintains a fairly healthy relationship with Carol after their divorce, and both decide to raise Ben together through shared parenting; but he doesn't hide his contempt for Susan as she \"destroyed their marriage\" and initially wanted to keep him out of Ben's life, having once told him that the baby was not his and would not have the surname \"Geller\".\n[…]\nRoss Geller has become a well-known figure in pop culture, particularly due to his relationship with Rachel Green, his neurotic nature, and his love for dinosaurs.\n[…]\nIn October 2016, Ross Geller was voted \"the Best Friends Character\" in an international poll held by Comedy Central, during six weeks of \"FriendsFest\" on the channel.\n[…]\nList of Friends and Joey characters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ross_Geller",
        "situacao": "ok",
        "texto": "Essa é uma lista de personagens da série estadunidense Friends:\n[…]\nCourteney Cox - Monica Geller, irmã de Ross e chef de cozinha, é obsessiva-compulsiva por limpeza e tem um espírito competitivo. Durante a adolescência, era obesa, o que é motivo de lembranças ruins e neuroses. Todos os personagens gostam de se encontrar no seu apartamento. Apesar dos defeitos, ela é a anfitriã-mor da série. Começa a namorar Chandler e se casa com ele na sétima temporada do programa.\n[…]\nDavid Schwimmer - Ross Geller, irmão mais velho de Monica, é um paleontólogo que ama dinossauros e que se divorciou três vezes durante o seriado: da lésbica Carol (que lhe deu seu primeiro filho, Ben), da britânica Emily (cujo nome ele trocou pelo de Rachel no dia do casamento), e de Rachel (casaram-se bêbados em Las Vegas). Rachel e Ross tiveram uma filha juntos, Emma. É muito inteligente e apaixonado por Rachel desde o colegial.\n[…]\nElliott Gould - Jack Geller (pai de Monica e Ross e marido de Judy, conhecido por seus comentários inapropriados e fora de hora)\n[…]\nChristina Pickles - Judy Geller (mãe de Monica e Ross e esposa de Jack, tem preferência nítida por seu filho, por considerá-lo um milagre da medicina, assim, ama exaltá-lo em tudo)\n[…]\nCole Sprouse - Ben (filho de Ross e Carol. É interpretado por Cole Sprouse a partir da sétima temporada, quando já não é mais tão novo, assim, se torna um garoto esperto e bastante astuto em alguns momentos, cabendo a Ross domá-lo. Ross descobre que sua ex-esposa Carol está grávida no segundo episódio da série, quando os dois já estão separados)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "The Big Bang Theory",
      "descricao": "Sitcom americana exibida de 2007 a 2019, sobre um grupo de jovens cientistas de Pasadena, na Califórnia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre os quatro amigos cientistas de The Big Bang Theory, qual é o engenheiro que só tem mestrado, sem doutorado, e vive sendo provocado por Sheldon?",
    "resposta": "Howard Wolowitz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Howard_Wolowitz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Howard_Wolowitz",
        "situacao": "ok",
        "texto": "Howard Joel Wolowitz, M.Eng. is a fictional character and one of the protagonists on the CBS television series The Big Bang Theory (2007–2019) created by Chuck Lorre and Bill Prady and portrayed by actor Simon Helberg. Among the four main male characters in the show, Howard is distinctive for being an engineer—rather than a physicist—and lacking a PhD. He is named after and based on a computer pro\n[…]\nMrs. Wolowitz (voiced by Carol Ann Susi) is not shown on screen until season 5, the final episode \"The Countdown Reflection\" and later in season 6 episode \"The Spoiler Alert Segmentation\". But her voice is heard when he is at their house or when he talks to her on the phone. She only communicates with Howard by yelling at him in an obnoxious manner, which results in awkward long-distance conversations, with Howard yelling back at her in a frustrated manner.\n[…]\nWolowitz would die in the season 8 episode \"The Comic Book Store Regeneration\". Howard receives a phone call while in the comic book store from his aunt Gladys in Florida, whom Mrs. Wolowitz had gone to visit. She says that she laid down for a nap and never woke up.\n[…]\nIn the early seasons, Howard was consistently depicted as the most perverted of the guys. For example, he develops a mathematical formula for the likelihood of his having relations by applying and modifying the Drake equation to include the \"Wolowitz coefficient\", which he defines as \"neediness times dress size squared\". When questioned if he is serious, he states, \"I'm a horny engineer...I never joke about math or sex\".\n[…]\nAlong with Leonard and Raj, Howard also attempts to woo Missy, Sheldon's twin sister. His offer is not accepted, although it was clear she was waiting for Raj. Katee Sackhoff appears as herself in \"The Vengeance Formulation\", where she is fantasized as Howard's dream girl. She appears again in season 4, in the same role."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Howard_Wolowitz",
        "situacao": "ok",
        "texto": "A série norte-americana The Big Bang Theory, criada e produzida por Chuck Lorre e Bill Prady, estreou na CBS em 24 de setembro de 2007 e encerrou em 16 de maio de 2019.\n[…]\nOs protagonistas são os colegas de quarto e físicos Sheldon Cooper e Leonard Hofstadter, que trabalham na Universidade Caltech. Além dos protagonistas, a série apresenta em papéis centrais Penny, uma garçonete e aspirante atriz que mora no apartamento em frente ao de Leonard e Sheldon; Howard Wolowitz, amigo e colega de trabalho da Caltech, é engenheiro aeroespacial; e Rajesh Koothrappali (Raj), que trabalha como astrofísico também na Caltech.\n[…]\nHoward Joel Wolowitz (interpretado por Simon Helberg) é um engenheiro espacial do Instituto de Tecnologia da Califórnia do departamento de Física Aplicada com mestrado em Engenharia, que muitas vezes está presente no apartamento de Leonard e Sheldon. Ao contrário de Sheldon, Leonard e Raj, Howard não tem doutoramento e, como resultado, constantemente é alvo de piadas, principalmente pelo Sheldon.\n[…]\nSheldon permite a Stuart estar no grupo, chamando-o de \"falso-Wolowitz\" e comparando a sua escolha de carreira na arte com a de Howard dizendo que é \"igualmente ridículo.\" Quando Howard retorna do espaço Sheldon quer demitir Stuart do grupo, mas isso não acontece.\n[…]\nSra. Wolowitz parece ser alheia sobre o trabalho de Howard como um engenheiro, e ela trata-o como se ele ainda é uma criança. Ela frequentemente se refere a Leonard, Sheldon e Raj como \"amiguinhos\" de Howard (como em \"Eu fiz alguns biscoitos e ponche havaiano para você e seus amiguinhos!\") E, muitas vezes refere-se a Faculdade Caltech como uma \"escola\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Teletubbies",
      "descricao": "Programa infantil britânico da BBC, estreado em 1997, com quatro criaturas coloridas que têm antenas na cabeça."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o maior dos quatro Teletubbies, o roxo que anda com uma bolsa vermelha?",
    "resposta": "Tinky Winky",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teletubbies",
      "https://en.wikipedia.org/wiki/Tinky_Winky"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teletubbies",
        "situacao": "ok",
        "texto": "Teletubbies is a British children's television series created by Anne Wood and Andrew Davenport for the BBC. The programme focuses on four differently coloured characters known as the Teletubbies, named after the television screens on their bellies. Recognised throughout popular culture for the uniquely shaped antenna protruding from the head of each character, the Teletubbies communicate mostly t\n[…]\nTinky Winky (portrayed by Dave Thompson and Simon Shelton, and voiced by Mark Heenehan in the original series and played by Jeremiah Krage in the revival series) is the first Teletubby, as well as the largest, oldest and leader of the group. He is covered in purple terrycloth and has a triangular antenna on his head. He often carries a red bag.\n[…]\nDespite the objections, the Independent on Sunday's editors included Tinky Winky as the only fictional character in the 2008 inaugural \"Happy List\", alongside 99 real-life adults recognised for making Britain a better and happier place.\n[…]\nIn response to this controversy, the gay community embraced the Teletubbies, with Tinky Winky leading pride parades and being featured on restaurant menus with themed items. In 2021, WildBrain, owner of the Teletubbies brand, declared their support for the LGBTQ+ community with the statement \"Teletubbies Love Pride.\" The company released a limited collection of merchandise with proceeds supporting GLAAD.\n[…]\nIn a statement, WildBrain said, \"The Teletubbies have always embraced their own offbeat quirkiness and sense of style. This Pride Month, we're celebrating that 'love who you are' spirit through our Collection of ready-to-rave fashion that makes Tinky Winky, Dipsy, Laa-Laa and Po very proud.\" This was followed up by a 30-piece gender-fluid adult fashion collection commemorating Pride 2022.\n[…]\nTeletubbies on CBeebies\n[…]\nTeletubbies on Nickelodeon Press Archived 16 June 2017 at the Wayback Machine\n[…]\nTeletubbies at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tinky_Winky",
        "situacao": "ok",
        "texto": "Teletubbies is a British children's television series created by Anne Wood and Andrew Davenport for the BBC. The programme focuses on four differently coloured characters known as the Teletubbies, named after the television screens on their bellies. Recognised throughout popular culture for the uniquely shaped antenna protruding from the head of each character, the Teletubbies communicate mostly t\n[…]\nTinky Winky (portrayed by Dave Thompson and Simon Shelton, and voiced by Mark Heenehan in the original series and played by Jeremiah Krage in the revival series) is the first Teletubby, as well as the largest, oldest and leader of the group. He is covered in purple terrycloth and has a triangular antenna on his head. He often carries a red bag.\n[…]\nDespite the objections, the Independent on Sunday's editors included Tinky Winky as the only fictional character in the 2008 inaugural \"Happy List\", alongside 99 real-life adults recognised for making Britain a better and happier place.\n[…]\nIn response to this controversy, the gay community embraced the Teletubbies, with Tinky Winky leading pride parades and being featured on restaurant menus with themed items. In 2021, WildBrain, owner of the Teletubbies brand, declared their support for the LGBTQ+ community with the statement \"Teletubbies Love Pride.\" The company released a limited collection of merchandise with proceeds supporting GLAAD.\n[…]\nIn a statement, WildBrain said, \"The Teletubbies have always embraced their own offbeat quirkiness and sense of style. This Pride Month, we're celebrating that 'love who you are' spirit through our Collection of ready-to-rave fashion that makes Tinky Winky, Dipsy, Laa-Laa and Po very proud.\" This was followed up by a 30-piece gender-fluid adult fashion collection commemorating Pride 2022.\n[…]\nTeletubbies on CBeebies\n[…]\nTeletubbies on Nickelodeon Press Archived 16 June 2017 at the Wayback Machine\n[…]\nTeletubbies at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teletubbies",
        "situacao": "ok",
        "texto": "Teletubbies é um programa televisivo britânico produzido pela BBC e Ragdoll Productions. Foi criado por Anne Wood CBE, o diretor criativo da Ragdoll, e Andrew Davenport, que escreveu cada um dos 365 episódios que compõem a série original. Narrado por Tim Whitnall (e Guilherme Briggs no Brasil), o programa rapidamente se tornou um sucesso comercial e de crítica na Grã-Bretanha e no exterior (partic\n[…]\nA serie se foca em atores com fantasias, o tanto diferentes nomeados para as telas de televisão implantados nas barrigas dos personagens. Reconhecido em toda a cultura popular para a antena exclusivamente em forma saindo da cabeça de cada ser, em seus respectivos nomes e cores de assinatura, os quatro Teletubbies descritos neste programa incluem Tinky Winky, Dipsy, Laa-Laa e Po.\n[…]\nTinky Winky é o primeiro dos Teletubbies, aparenta ser um pouco mais maduro em personalidade, sendo um pouco mais alto que os demais, é muito amistoso e gentil. Possui coloração roxa e sua antena tem a forma de um triângulo. Seu objeto favorito é uma bolsa de cor vermelha.\n[…]\n6 número quatro\n[…]\nAlguns setores conservadores da sociedade civil (igrejas, ativistas pró-família, associações de defesa dos pais e filhos, antiaborto, entre outros) fizeram várias denúncias, por conta das suspeitas das associações de Tinky Winky com a homossexualidade: Tinky Winky possui uma bolsa vermelha (uma \"bolsa mágica\", na série) e um triângulo invertido na cabeça (▼), todos de símbolos do orgulho gay.\n[…]\nA BBC, em resposta, afirmou: \"Tinky Winky é um simples e doce bebê tecnológico com uma bolsa mágica. Trata-se de um espetáculo para crianças\". Já a produção e os atores da série, em resposta, consideravam as acusações dos cristãos, as notícias de jornais e internet de associações da personagem à homossexualidade como \"absurdas e ofensivas\".\n[…]\n«Teletubbies Site oficial do Reino Unido»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "As Meninas Superpoderosas",
      "descricao": "Desenho animado americano do Cartoon Network, estreado em 1998, sobre três irmãs com superpoderes criadas pelo Professor Utônio."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na turma das Meninas Superpoderosas, qual das três irmãs é a mais durona e briguenta, de cabelo preto e curto?",
    "resposta": "Docinho",
    "fonte": [
      "https://pt.wikipedia.org/wiki/As_Meninas_Superpoderosas",
      "https://en.wikipedia.org/wiki/The_Powerpuff_Girls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/As_Meninas_Superpoderosas",
        "situacao": "ok",
        "texto": "The Powerpuff Girls (conhecido no Brasil como As Meninas SuperPoderosas) é uma série de desenho animado estadunidense criada e escrita por Craig McCracken. Sucesso em todo o mundo, a série foi considerada a nova mania dos Estados Unidos durante o fim da década de 90 e inicio dos anos 2000 e teve um reboot de mesmo nome no ano de 2016. As 4 primeiras temporadas foram produzidas pela Hanna-Barbera, \n[…]\nDocinho (dublada por Luisa Palomanes no Brasil e por Alexandra Sedas em Portugal) — Cabelos curtos e pretos com detalhes espetados, olhos verdes da cor do vestido. Agressiva, brincalhona, corajosa e sociável. A “lutadora” do trio (Durona das Meninas Superpoderosas). Elemento: Tempero (Spice). Ela tem a atitude de uma Menina Superpoderosa. Só quer saber de ser a mais forte do mundo, e a pior coisa para ela é ter que usar vestido longo. Docinho gosta de bater primeiro e perguntar depois...\n[…]\nUma paródia entre As Meninas Superpoderosas e a série 2 Broke Girls foi feita na época em que o Cartoon Network veículava a série de TV MAD, no episódio \"2 Broke Powerpuff Girls\". A paródia que foi ao ar em 30 de janeiro de 2012, com Lindinha e Docinho, que estão sem dinheiro e trabalhando para \"Ele\" em um restaurante depois que o show foi colocado em hiato permanente. Tara Strong (Lindinha no original) e Tom Kane (\"Ele\") reprisaram seus papeis aqui.\n[…]\nDont Just a Dream foi uma linha de produtos criada no outono de 2004 para As Meninas Superpoderosas. A divisão de produtos de consumo do Cartoon Network trabalhou com a nova linha para lançar uma coleção de moda inédita com as três meninas como adolescentes elegantes. A empresa criou Florzinha, Lindinha e Docinho com suas personalidades, mais acreditando que era desta forma que elas queriam ser vistas no futuro.\n[…]\n«Página oficial de The Powerpuff Girls pelo Cartoon Network americano» (em inglês)\n[…]\nThe Powerpuff Girls no IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Powerpuff_Girls",
        "situacao": "ok",
        "texto": "The Powerpuff Girls is an American animated superhero television series created by Craig McCracken for Cartoon Network. The show centers on Blossom, Bubbles, and Buttercup, three kindergarten-aged girls with superpowers. They live in the fictional city of Townsville with their father and creator, a scientist named Professor Utonium, and are frequently called upon by the city's mayor to help fight \n[…]\nThe show revolves around the adventures of three kindergarten-aged girls with an array of various superpowers: Blossom (pink), Bubbles (blue), and Buttercup (green). As depicted in the opening sequence of each episode, the Powerpuff Girls were created by Professor Utonium in an attempt to create the \"perfect little girl\" using a mixture of sugar, spice, and everything nice.\n[…]\nAs Cartoon Network executives did not allow McCracken to market the series with the word \"ass\", two of his friends came up separately with the name \"Powerpuff\", thus the title was changed from The Whoopass Girls to The Powerpuff Girls. In addition, the \"can of Whoopass\", which originally gave the girls their superpowers, was replaced with Chemical X. Seibert was impressed and began negotiations for a series pickup.\n[…]\nThe Powerpuff Girls peaked at the top spot in Entertainment Weekly's list of \"10 Best Cartoon Network Shows\" in 2012.\n[…]\nIn December 2006, U.S. Toy Company recalled 48,000 necklaces based on the series for high levels of lead; no injuries and incidents were reported. In 2014, IDW Publishing published a variant cover which showed aged-up versions of Powerpuff Girls with breasts and dressed in latex. The cover was designed by an artist working for Cartoon Network who was \"thinking of it more along the lines of 'female empowerment' than the kind of thing you guys are talking about\".\n[…]\nThe Powerpuff Girls at IMDb\n[…]\nMarkstein, Donald D. \"The Powerpuff Girls\". Toonopedia."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tartarugas Ninja",
      "descricao": "Franquia criada em 1984 por Kevin Eastman e Peter Laird, sobre quatro tartarugas mutantes treinadas em artes marciais, famosa pelo desenho animado de 1987."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das quatro Tartarugas Ninja, qual tem o pavio mais curto, sempre esquentada e rebelde, usando faixa vermelha?",
    "resposta": "Rafael",
    "distratores": [
      "Leonardo",
      "Donatello",
      "Michelangelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Raphael_(Teenage_Mutant_Ninja_Turtles)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Raphael_(Teenage_Mutant_Ninja_Turtles)",
        "situacao": "ok",
        "texto": "Raphael, nicknamed Raph, is a superhero and one of the four main characters of the Teenage Mutant Ninja Turtles comics and all related media. In most iterations, he is depicted as the most aggressive of the turtle brothers, physically the strongest and often at odds with his brother, Leonardo.\n[…]\nRaph appears in Tales of the Teenage Mutant Ninja Turtles, a follow-up 2d-animated series sequel to Teenage Mutant Ninja Turtles: Mutant Mayhem, with Brady Noon reprising his role from the latter film.\n[…]\nRaphael is featured as one of the playable characters from Teenage Mutant Ninja Turtles as DLC in Injustice 2, voiced by Ben Rausch. While Leonardo is the default turtle outside the gear loadout, he, Michelangelo, and Donatello can only be picked through the said loadout selection similar to the premier skin characters.\n[…]\nRaphael appears in Pixel Gun 3D as a skin called \"Super Turtle\".\n[…]\nRaphael is also a main playable character in the sequel to Turtles in Time, titled Teenage Mutant Ninja Turtles: Shredder's Revenge. In the game, Raphael is now the turtle with the most attack power and average speed, as opposed to Turtles in Time, where he had the highest speed with average attack power. He carries over his limited range from the original game. This is the first official Teenage Mutant Ninja Turtles game in which he is played by his original voice actor, Rob Paulsen.\n[…]\nOmar Miller the voice actor for Raphael in Rise of the Teenage Mutant Ninja Turtles said, in an interview with ComicsBeat, that he had positive reception from fans toward the series and Raphael's developing role as a leader who makes mistakes and learn as he goes to get his skills together.\n[…]\nTeenage Mutant Ninja Turtles Names and Character Biographies Archived 2019-03-30 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raphael_%28Teenage_Mutant_Ninja_Turtles%29",
        "situacao": "ok",
        "texto": "Raphael, também chamado de Rafa, é um dos protagonistas da franquia Teenage Mutant Ninja Turtles.\n[…]\nNas primeiras histórias, as Tartarugas Ninja usavam bandanas vermelhas, sendo que Raphael é o único que permanece com a mesma cor de bandana em todas as versões. Raphael usa um par de sai como arma de assinatura. Na série Next Mutation, os seus sai juntam-se e formam um espécie de bastão. Geralmente, Raphael tem emoções extremas e é descrito como agressivo, mal-humorado, enlouquecido e rebelde. A origem da raiva de Raphael nunca foi bem explorada.\n[…]\nTem uma relação turbulenta com o seu irmão mais velho, Leonardo, porque Leonardo é visto como o líder do grupo. Raphael adotou o nome do artista italiano do Renascimento Raffaello Sanzio da Urbino.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Os Jetsons",
      "descricao": "Desenho animado americano de 1962 sobre uma família que vive num futuro de carros voadores e robôs."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "No desenho Os Jetsons, quem é o mais novo dos dois filhos de George e Jane?",
    "resposta": "Elroy",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Jetsons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons is an American animated sitcom produced by Hanna-Barbera Productions. It originally aired in prime time from September 23, 1962, to March 17, 1963, on ABC, then later aired in reruns via syndication, with new episodes produced from 1985 to 1987. It was Hanna-Barbera's Space Age counterpart to The Flintstones.\n[…]\nPenny Singleton  – Jane Jetson, Alice (in \"The Space Car\"), Zoom Broom (in \"Elroy in Wonderland\")\n[…]\nJanet Waldo  – Judy Jetson, Celeste Skyler (in \"A Visit from Grandpa\"), Miss Brainmocker (in \"Elroy's Mob,\" \"Elroy Meets Orbitty\", \"Far-Out Father\"), Pliers Robot (in \"Elroy in Wonderland\"), Robot Cashier (in \"Rip-Off Rosie\"), Miss Booster (in \"Boy George\")\n[…]\nFrank Welker  – Orbitty, Felix (in \"Elroy Meets Orbitty\"), Elroy Jetson Look-alike (in \"Rosey Come Home\"), Richard Rocketeer (in \"Family Fallout\"), Hunky Moonrock (in \"S'No Relative\"), TV Reporter (in \"S'No Relative\"), Parking Meter (in \"Dance Time\"), Time Clock (in \"Judy Takes Off\"), Professor Proteus (in \"Mirrormorph\"), Francoise (in \"The Cosmic Courtship of George and Jane\"), Robot Dog (in \"Elroy in Wonderland\"), Nozzle (in \"Elroy in Wonderland\"), Space Bong (in \"Space Bong\"), Remote Control Cat (in \"Astro's Big Moment\"), IRS Agent #2 (in \"Future Tense\"), Jezebel (in \"Far-Out Father\"), Toy Robot Cat (in \"The Jetson Christmas Carol\"), Young Cosmo Spacely (in \"The Jetson Christmas Carol\")\n[…]\nIn later productions, Jeff Bergman has voiced George, Elroy, and Mr. Spacely. Bergman completed voice work as George and Spacely for Jetsons: The Movie (1990) after George O'Hanlon and Mel Blanc died during production. Controversially, Janet Waldo was replaced—after recording all of her dialogue—by then-popular singer Tiffany for Jetsons: The Movie. Lauri Fraser has provided the voice of Jane Jetson in television commercials for Radio Shack."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons (em português Os Jetsons) é uma série animada de televisão produzida pela Hanna-Barbera, exibida originalmente na ABC entre 1962 e 1963. Foi exibida no Brasil pela TV Excelsior. Mais tarde a série foi relançada com novos episódios produzidos entre 1984 e 1987, como parte do programa The Funtastic World of Hanna-Barbera. Foi exibida no canal brasileiro SBT.\n[…]\nOs Jetsons são uma família residente em Orbit City. A arquitetura da cidade segue o estilo Googie, com todas as casas e empresas suspensas sobre o chão e com colunas ajustáveis. George Jetson mora com a família num apartamento panorâmico: sua esposa Jane é dona-de-casa e eles tem dois filhos: a adolescente Judy que frequenta a Escola Secundária Orbit, e o menino de seis anos de idade  Elroy, que estuda na Little Dipper School.\n[…]\nGeorge Jetson: 40 anos de idade é o protagonista da série. Ele é um amoroso chefe de família que sempre parece tomar as decisões erradas. Ele é empregado da companhia Sprockets ligando e desligando o computador R.U.D.I. (sigla em inglês para Referential Universal Digital Indexer). É casado com Jane e tem dois filhos, Judy e Elroy.\n[…]\nElroy Jetson: com 6½ de idade é o mais novo dos dois filhos dos Jetsons. É muito inteligente e perito em toda ciência espacial. Bem-educado e bom filho, Elroy estuda na Little Dipper School, onde tem aulas de História Espacial, Astrofísica e Geometria Estelar. Elroy ama seu cão Astro e sempre o defende quando George perde a paciência com aquele mascote.\n[…]\nAstro: é o cão da família Jetsons. Antes de ser um Jetson seu nome era Tralfaz e pertencia ao fabulosamente rico J.P. Gottrockets. Astro é um dos melhores amigos de George (como o computador do trabalho, R.U.D.I.) bem como o melhor amigo de Elroy. É capaz de falar um inglês rosnado e latido, num jeito que depois o dublador Don Messick reutilizaria para Scooby-Doo.\n[…]\nJetson's Movie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Maggie Simpson",
      "descricao": "Personagem de Os Simpsons, a filha bebê de Homer e Marge, que quase nunca fala."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na família de Os Simpsons, quem é a caçula, o bebê que vive com uma chupeta na boca?",
    "resposta": "Maggie Simpson",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Maggie_Simpson",
      "https://en.wikipedia.org/wiki/Maggie_Simpson"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Maggie_Simpson",
        "situacao": "ok",
        "texto": "Margaret Evelyn Lenny \"Maggie\" Simpson é uma personagem que aparece no desenho animado Os Simpsons. Ela é a filha mais nova dos personagens principais Homer Simpson e Marge, e eternamente um bebê.\n[…]\nAlguns fãs sugerem que Maggie provavelmente será o verdadeiro gênio da família Simpson, uma vez que com um ano de idade já escreveu a equação E=MC² com seus cubos de brinquedo, enquanto o maior feito de Lisa com os mesmos blocos aconteceu com 3 anos, escrevendo a palavra ESTRELA.\n[…]\nNo episódio Holidays of Future Passed, através de fotos de natal para o Álbum da Família Simpson, é mostrado como seria o desenvolvimento de Maggie em 30 anos: ela cresceria sendo muito parecida com Lisa, pelo menos até o começo da adolescência, quando Maggie começa a aparecer aborrecida nas fotos, ao mesmo tempo em que  seu cabelo de “estrela-do-mar” ficaria com as “pontas curvas”.\n[…]\nNa abertura de Os Simpsons Maggie é passada na máquina registradora do caixa e custa 847,63 dólares - valor estipulado para criar uma criança nos EUA na década de 1990. A partir da temporada 21 ela passa a custar 243,26 dólares. Tal valor foi mais uma vez alterado, agora para 486,52 dólares.\n[…]\nMaggie surpreende pela habilidade nata no boliche, que é uma das poucas coisas em que Homer também é bom. Entretanto, ela também parece ter uma propensão natural para violência e já foi vista jogando pôquer no computador. Maggie assim como sua irmã Lisa, demonstrou uma inteligência tão grande que superou a de sua irmã, o que a tornou por um episódio a mais inteligente dos Simpsons, mesmo depois a família deles ter descoberto que era tudo uma farsa..\n[…]\nOs Simpsons TV Oficial no Brasil\n[…]\nOs Simpsons TV Oficial em Portugal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maggie_Simpson",
        "situacao": "ok",
        "texto": "Margaret \"Maggie\" Simpson is a fictional character in the animated television series The Simpsons. She debuted in the Tracey Ullman Show short \"Good Night\" in 1987. Maggie was created and designed by cartoonist Matt Groening, who named her after his youngest sister. The shorts aired from 1987 to 1989 before The Simpsons debuted on Fox on December 17, 1989. Maggie is the youngest child of Homer and\n[…]\nMaggie has also saved Homer from drowning and from being shot by Russ Cargill.\n[…]\nIn 1989, the shorts became The Simpsons, a half-hour Fox series.\n[…]\nGroening designed the Simpson family to be recognizable in silhouette. The original shorts retained the rough appearance of his sketches because the animators traced them instead of cleaning them up as he expected. Working in black and white, he gave Lisa and Maggie spiky \"starfish\" hair without considering how it would look in color. Groening made Maggie largely silent but able to express any emotion a scene required.\n[…]\nIn 1991, HarperCollins published four children's books by Maggie Groening and Matt Groening: Maggie Simpson's Book of Animals, Maggie Simpson's Counting Book, Maggie Simpson's Book of Colors and Shapes, and Maggie Simpson's Alphabet Book. Maggie is playable in The Simpsons Game. She also appears in the mobile game The Simpsons: Tapped Out. She appears in The Simpsons Ride, which opened in 2008 at Universal Studios Florida and Universal Studios Hollywood.\n[…]\nIn 2009, the USPS issued stamps featuring the five members of the Simpson family; Maggie's was voted the most popular in an online USPS poll. In 2000, Maggie and the rest of the Simpson family were awarded a star on the Hollywood Walk of Fame.\n[…]\nIn 2006, IGN ranked Elizabeth Taylor's performance as Maggie in \"Lisa's First Word\" thirteenth on its \"Top 25 Simpsons Guest Appearances\" list. Writing in The Guardian, Peter Bradshaw called Taylor an \"inspired casting choice\"."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "A Grande Família (2001)",
      "descricao": "Série de humor da TV Globo, exibida de 2001 a 2014, sobre uma família do subúrbio carioca."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na casa de Lineu e Nenê, na série A Grande Família de dois mil e um, quem era o morador mais velho?",
    "resposta": "Seu Floriano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/A_Grande_Fam%C3%ADlia_(2001)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/A_Grande_Fam%C3%ADlia_(2001)",
        "situacao": "ok",
        "texto": "A Grande Família é uma série de televisão brasileira de comédia produzida e exibida pela TV Globo de 29 de março de 2001 a 11 de setembro de 2014, em 485 episódios divididos em 14 temporadas. A série é um reboot baseado no seriado homônimo transmitido de 1972 a 1975 escrita por Oduvaldo Vianna Filho e Armando Costa.\n[…]\nNo episódio inicial, alguns personagens imaginam como seria o futuro do novo integrante da família Silva: Florianinho. A dona Nenê, agora vovó, passa a mimar bastante o neto. Enquanto isso, Lineu, agora aposentado, passa a vigiar mais a família, principalmente Tuco. Mas o aposentado logo sente vontade de voltar a trabalhar e abre uma pet shop, direcionando a sua vida a sua formação acadêmica, atuando como veterinário, fazendo uma sociedade com Gina e empregando o seu filho na loja.\n[…]\nA família desconfia de ser interesse do caçula dos Silva, no entanto ele prova ao contrário, continuando firme no namoro com Gina mesmo após um imprevisto na sua segunda tentativa de casamento com a amada (a primeira foi na 6ª temporada): o pai de Gina passa mal após entrar em falência. No natal, Bebel e Nenê se desentendem porque enquanto a mãe quer reunir a família em sua tradicional ceia de natal, a filha quer fazer o 1° aniversário de Florianinho, cada uma em sua própria casa.\n[…]\nNo Rio Grande do Sul, na décima primeira temporada, os episódios foram assistidos por mais de 4 milhões de telespectadores, sendo que 63% são do sexo feminino, com cerca de 89% do público do programa pertencendo às classes A, B e C e 77% sendo maiores de 18 anos. No final de 2011, em Florianópolis, a série foi o terceiro produto mais assistido no ano, perdendo apenas para a novela das nove e o Jornal Nacional e na frente de Tapas & Beijos e RBS Notícias.\n[…]\nA Grande Família - O Filme"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Castelo Rá-Tim-Bum",
      "descricao": "Programa infantil da TV Cultura, de 1994, passado num castelo onde vive o aprendiz de feiticeiro Nino."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "No Castelo Rá-Tim-Bum, qual personagem é a mais velha de todas, com seis mil anos de idade?",
    "resposta": "Morgana",
    "distratores": [
      "Doutor Victor",
      "Nino",
      "Celeste"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Castelo_R%C3%A1-Tim-Bum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_R%C3%A1-Tim-Bum",
        "situacao": "ok",
        "texto": "Castelo Rá-Tim-Bum é uma série de televisão infantil brasileira produzida e exibida pela TV Cultura entre 9 de maio de 1994 e 24 de dezembro de 1997, totalizando 90 episódios e um episódio especial. É considerado um dos melhores produtos audiovisuais da história da televisão brasileira. O programa já marcou audiência média de 12 pontos, a maior de qualquer outro programa educativo da TV Cultura, a\n[…]\nNino é um garoto de 300 anos que vive com seu tio, o Dr. Victor, um feiticeiro e cientista, e com sua tia-avó Morgana, uma feiticeira de 6.000 anos de idade. Os três moram em um castelo em algum bairro implícito na cidade de São Paulo. Aprendiz de feiticeiro, Nino nunca frequentou uma escola por causa da idade nada comum de 300 anos. Seus pais o deixaram morando com Victor e Morgana porque precisavam viajar numa expedição no espaço sideral, levando seus dois irmãos mais novos.\n[…]\nEm 9 de setembro de 2017 é lançado o musical Castelo Rá-Tim-Bum: O Musical, que não trouxe nenhum membro do elenco original, nem os mesmos autores da série. A história seguia a premissa do começo da série, sobre o solitário Nino que consegue finalmente fazer amigos, trazendo uma nova roupagem aos personagens da original, como Dr. Abobrinha, Morgana, Penélope, Caipora e até mesmo participações especiais marcantes como Zula e Ulisses.\n[…]\nEm 2018 Rosi estrelou mais uma peça sobre Morgana, intitulada A Saga da Bruxa Morgana contra o Infalível Senhor do Tempo, que ficou em cartaz entre 9 de junho e 29 de julho. A peça narrava as aventuras de Morgana e seus afilhados para encontrar o Senhor do Tempo e descobrir com exatidão quantos anos ela tinha, uma vez que ela lembrava apenas ter mais de 6 mil, fazendo uma viagem em seu passado.\n[…]\nA trilha sonora da série Castelo Rá-Tim-Bum foi lançada em 17 de dezembro de 1995 pela Velas. Anos mais tarde, a trilha sonora foi relançada pela Universal Music."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Emília (personagem)",
      "descricao": "Boneca falante do Sítio do Picapau Amarelo, criada por Monteiro Lobato e levada várias vezes à televisão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Sítio do Picapau Amarelo, a boneca Emília, que ganhou o dom da fala, foi feita por Tia Nastácia com que material?",
    "resposta": "Pano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Em%C3%ADlia_(personagem)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Em%C3%ADlia_(personagem)",
        "situacao": "ok",
        "texto": "Emília é uma das principais personagens da obra infantil de Monteiro Lobato, na série relacionada ao Sítio do Picapau Amarelo.\n[…]\nEmília é uma boneca de pano, recheada de macela. Em muitas histórias, ela troca de vestido, é consertada ou é recheada novamente. Narizinho também faz e refaz suas sobrancelhas (segundo Reinações de Narizinho) e seus olhos (de retrós e por isso arrebentam se Emília os arregala demais). Ela é capaz de andar e se movimentar livremente, porém muitas vezes é tratada por Narizinho como uma boneca comum e é \"enfiada no bolso\".\n[…]\nJean Gabriel Villin traz uma Emília de cabelos claros, com pernas e braços afilados e compridos (1931-34); Belmonte traz uma Emília com feições mais humanas, tendo evoluído para as bonecas que imitavam o rosto infantil - mantendo os \"olhos de retrós\", ou seja, dois pontos negros (1936-39). Rodolpho (1944) coloca Emília nas proporções devidas - pequenina como as bonecas de pano devem ser e, claro, sem nariz. Jurandir U.\n[…]\nDurante inúmeras versões do Sítio do Picapau Amarelo para o cinema e a televisão, a personagem Emília já foi interpretada por\n[…]\nLúcia Lambertini nas versões feitas do Sítio do Picapau Amarelo pela extinta TV Tupi (de 1952 a 1962) e pela TV Cultura (1964);\n[…]\nSandroni, Laura Constância (2014) [1986]. «A função transgressora de Emília no universo do Picapau Amarelo». Letras De Hoje. 17 (3)\n[…]\nMatos, Paula Daniele Torres de Castro (2022). O estudo de gênero na literatura infantil (PDF). análise do empoderamento feminino na personagem Emília, do Sítio do Picapau Amarelo (Estudo). Campina Grande: IFPB. 38 páginas\n[…]\nFlogão - Sítio do PicaPau Amarelo Amosítio"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Chapolin Colorado",
      "descricao": "Seriado humorístico mexicano de 1973 sobre um atrapalhado super-herói vestido de vermelho."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além das anteninhas de vinil, que arma faz parte do equipamento do Chapolin Colorado para bater nos vilões?",
    "resposta": "Marreta biônica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chapolin_Colorado",
      "https://en.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chapolin_Colorado",
        "situacao": "ok",
        "texto": "El Chapulín Colorado (no Brasil, Chapolin Colorado) é um personagem fictício da série de televisão mexicana de mesmo nome. Este super herói é raro, seus super poderes e qualidades são diferentes de os dos outros heróis, mas consegue superar as suas deficiências e superar seus problemas, aí reside a grandeza do ser humano. Ele usa um uniforme vermelho cobrindo todo o corpo.\n[…]\nNo capuz vermelho saem duas anteninhas de vinil e sobre o peito está estampado o seu escudo, um coração amarelo contendo as iniciais CH. Para chamá-lo, alguém tem que dizer: \"Oh, e agora? Quem poderá me defender/ajudar?\" Ele aparece, e quem chamou diz: \"O Chapolin Colorado\".\n[…]\nAnteninhas de Vinil: captam (muito mal) todos os sinais de rádio do Universo. Entendem e traduzem todos os idiomas do Sistema Solar e avisam Chapolin da presença de algum inimigo. Elas começam a apitar e ele diz \"Silêncio, silêncio... Minhas anteninhas de vinil estão detectando a presença do inimigo.\". As anteninhas estão ligadas ao seu sistema nervoso, quando agarradas lhe causam dor, têm cerca de 30 cm de comprimento e são enfeitadas com pompons bicolores (vermelho e amarelo).\n[…]\nMarreta Biônica: vem às mãos do herói com um único chamado. Assim como Chapolin, a marreta aparece do nada, é só ele pensar nela. Útil para dar boas marteladas nos inimigos quando ele é obrigado a usar de métodos mais \"rígidos\" de fazer justiça. É uma espécie de martelo com cabeça dupla simétrica de plástico vermelho e com um cabo amarelo.\n[…]\nSeu teletransporte rompe as barreiras do tempo, levando chapolin ao passado (episódios no velho oeste e eras medievais), presente e futuro (episódios envolvendo astronautas).\n[…]\n\"Silêncio, silêncio! Minhas anteninhas de vinil estão detectando a presença do inimigo!\"\n[…]\nEl Chapulín Colorado Animado\n[…]\n«El Chapulín Colorado» (em espanhol)\n[…]\n«Chapolin Colorado»\n[…]\n«Ficha técnica de Chapulín Colorado» (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/El_Chapul%C3%ADn_Colorado",
        "situacao": "ok",
        "texto": "El Chapulín Colorado (Spanish pronunciation: [el tʃapuˈliŋ koloˈɾaðo], transl. The Red Grasshopper) is a Mexican superhero comedy television series that aired from 1973 to 1979 and parodied superhero shows. It was created by actor and comedian Roberto Gómez Bolaños, who also played the main character. It was first aired by Televisa in 1973 in Mexico, and then was aired across Latin America and Spa\n[…]\nEl Pistolero Veloz (in Portuguese as Pistoleiro Veloz; or in English as The Speedy Gunman): (1973) Played by Ramón Valdés. He is a villain, gunman and robber who claims to be the fastest triggerman in the entire Old West, and had his only appearance in the episode El pistolero veloz (in Portuguese as O Pistoleiro da Marreta Biônica; or in English as The Gunman with the Bionic Sledgehammer).\n[…]\nAfter biting into the apple, she fainted on the floor, and when the seven dwarfs returned, they were quite surprised and sad, thinking that she had died. And according to the magic mirror, the only hope of removing the spell from Snow White is Chapulín Colorado himself, who was called by the seven dwarfs and unexpectedly played the role of Prince Charming, putting his bionic mallet in her mouth to try to undo the spell.\n[…]\nSo, Snow White woke up, came out of the spell and was quite delighted that the bionic mallet had saved her from it, to the surprise of Chapulín and the seven dwarves.\n[…]\nEl Chapulín Colorado is also extremely popular in Brazil. The company, Tec Toy, responsible for distributing the Sega consoles in Brazil, published a video game for the Sega Master System called Chapolim x Drácula: Um duelo assustador (Chapulín vs. Dracula: A Frightening Duel). It was a localization of another existing SMS title, Ghost House, with the hero's graphics changed to Chapulín's.\n[…]\nEl Chapulín Colorado at IMDb\n[…]\nA profile of El Chapulín Colorado\n[…]\nAbout the movie of El Chapulín Colorado"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Friends",
      "descricao": "Sitcom americana sobre seis amigos que vivem em Nova York, exibida de 1994 a 2004."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na famosa abertura de Friends, os seis amigos aparecem dançando, com guarda-chuvas, dentro de quê?",
    "resposta": "Uma fonte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Friends",
      "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You_(The_Rembrandts_song)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Friends",
        "situacao": "ok",
        "texto": "Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, and David Schwimmer, the show revolves around six friends in their 20s and early 30s who live in Manhattan, New York City. The or\n[…]\nNetflix added all ten seasons of Friends in high definition to its streaming service in the United States in January 2015 before the platform discontinued the series in late 2019.\n[…]\nAfter the series finale in 2004, LeBlanc signed on for the spin-off series, Joey, following Joey's move to Los Angeles to pursue his acting career. Kauffman and Crane were not interested in the spin-off, although Bright agreed to executive produce the series with Scott Silveri and Shana Goldberg-Meehan. NBC heavily promoted Joey and gave it Friends' Thursday 8:00 pm timeslot.\n[…]\nOn Friends, Joey was a womanizer, but we enjoyed his exploits. He was a solid friend, a guy you knew you could count on. Joey was deconstructed to be a guy who couldn't get a job, couldn't ask a girl out. He became a pathetic, mopey character. I felt he was moving in the wrong direction, but I was not heard.\n[…]\nHello Friends (TV series)\n[…]\nThe Friends Experience\n[…]\nMusic of Friends\n[…]\nLittlefield, Warren (May 2012). \"With Friends Like These\". Vanity Fair. Archived from the original on April 22, 2019. Retrieved April 22, 2019.\n[…]\nAllen, Samantha (September 12, 2014). \"The Best Reason to Love 'Friends' Is the One We Never Realized at the Time\". Mic.\n[…]\nIhnat, Gwen (August 18, 2014). \"How 'Friends' Changed the Sitcom Landscape\". The A.V. Club.\n[…]\nHarrison, Andrew (September 12, 2014). \"The Hunting of the Snark: Friends, 20 Years On\". New Statesman.\n[…]\nFriends at IMDb\n[…]\nFriends on Rotten Tomatoes\n[…]\nFriends at The Interviews: An Oral History of Television"
      },
      {
        "url": "https://en.wikipedia.org/wiki/I%27ll_Be_There_for_You_(The_Rembrandts_song)",
        "situacao": "ok",
        "texto": "\"I'll Be There for You\" is a song by American pop rock duo the Rembrandts. The song was written by David Crane, Marta Kauffman and Allee Willis as the main theme song to the NBC sitcom Friends, which was broadcast from 1994 to 2004. American rock band R.E.M. was originally asked to allow their song \"Shiny Happy People\" to be used for the Friends theme, but they turned the opportunity down. \"I'll B\n[…]\n\"I'll Be There for You\" is an upbeat song about traveling, dead-end jobs, and friendship.\n[…]\nMark Sutherland from NME wrote, \"Another record that makes you want to be American. This time it's one of the boho twentysomethings who populate US sitcom Friends, to which this is the theme. And, as such, it's the aural equivalent of the programme: all snazzy handclaps, ever-so-slightly alternative guitars, 'kooky' harmonies and lyrics that hint at existential angst but, fortunately, only the kind that can be sorted out in half an hour in front of a live studio audience.\n[…]\nThe music video for \"I'll Be There for You\" features the band performing in a studio while the cast of Friends join in. Some scenes are shot in black-and-white. The Rembrandts members Phil Sōlem and Danny Wilde disclosed during a live interview on The Today Show on September 20, 2019, to celebrate the 25th anniversary of the song that the video was shot on the set of SNL (Studio 8H).\n[…]\nAmerican punk rock band Pink Lincolns covered this song under the title \"Friends\" for a 1997 compilation album titled Show & Tell.\n[…]\nMeghan Trainor covered the song on September 22, 2019, to celebrate the Friends 25th Anniversary at the Empire State Building light show.\n[…]\nIn 2020, retro musical collective Postmodern Jukebox released a cover titled Evolution Of The \"Friends\" TV Theme Song, presenting the song in a series of period-inspired arrangements spanning the 20th century, with The Rembrandts themselves performing the \"1990s version\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Friends",
        "situacao": "ok",
        "texto": "Friends é uma sitcom americana criada por David Crane e Marta Kauffman e apresentada pela rede de televisão NBC entre 22 de setembro de 1994 e 6 de maio de 2004, com um total de 236 episódios. A série girava em torno de um grupo de amigos que vivia no bairro de Greenwich Village, na ilha de Manhattan, na cidade de Nova York. A série foi produzida pela Bright/Kauffman/Crane Productions em associaçã\n[…]\nQuando Cox fez o teste para o papel, os produtores foram surpreendidos pela sua direção da personagem e a colocaram como parte do elenco. Quando Matt LeBlanc fez o teste para Joey, ele colocou uma abordagem sobre o personagem. Os escritores não pretendiam, originalmente, que Joey fosse fraco, mas acharam que iria ser uma grande fonte de comédia. LeBlanc também deu o coração do personagem, que os escritores não perceberam que Joey tinha.\n[…]\nA primeira temporada foi filmada no Estúdio 5 do Warner Bros Studios, em Burbank, Califórnia. Executivos da NBC estavam preocupados que a decoração do café Central Perk era muito hip e solicitaram que a série fosse definida em um jantar, mas finalmente concordaram com a conceito de coffee house. As cenas da abertura foram filmadas em uma fonte no Rancho Warner Bros às 04h00, enquanto estava particularmente frio naquela manhã em Burbank.\n[…]\nEm Pequim, na República Popular da China, o empresário Du Xin abriu uma lanchonete chamada \"Central Perk\", baseada no café de Friends.\n[…]\nA partir de 5 de março de 2012, versões em alta definição de todos os 236 episódios de Friends foram disponibilizados para todas as emissoras que transmitem a série. Para remasterizar os episódios, a Warner Bros. restaurou imagens anteriormente cortadas nos lados esquerdo e direito da tela, utilizando a fonte original 35 mm, para aproveitar toda a tela cheia 16:9. Entretanto, esta edição já tinha começado a ser transmitida na Nova Zelândia pela TV2 desde janeiro de 2011.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Jornal Nacional",
      "descricao": "Telejornal noturno da Rede Globo, transmitido em rede nacional."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Em mil novecentos e sessenta e nove, Cid Moreira apresentou a primeira edição do Jornal Nacional ao lado de qual locutor?",
    "resposta": "Hilton Gomes",
    "distratores": [
      "Sérgio Chapelin",
      "Heron Domingues",
      "Celso Freitas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jornal_Nacional"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jornal_Nacional",
        "situacao": "ok",
        "texto": "Jornal Nacional (também conhecido pela sigla JN) é um telejornal brasileiro produzido e exibido desde 1.º de setembro de 1969 pela TV Globo. Transmitido de segunda-feira a sábado no horário nobre, é considerado o principal noticiário televisivo em audiência e repercussão no país. É apresentado por César Tralli e Renata Vasconcellos.\n[…]\nCom a apresentação de Cid Moreira, o telejornal entrou no ar em 1969 e foi o primeiro programa gerado no Rio de Janeiro em rede nacional. No encerramento da edição, Cid Moreira disse: \"É o Brasil ao vivo aí na sua casa. Boa noite\".\n[…]\nEm 1983, houve novas mudanças: o Jornal Nacional ganhou a sua primeira vinheta eletrônica.[carece de fontes]? A dupla de apresentadores também mudou: no lugar de Sérgio Chapelin, que apresentava o JN com Cid Moreira, entrou Celso Freitas, que já apresentava eventualmente o telejornal. Moreira e Freitas ficaram juntos no JN até 1989, mesmo ano em que o telejornal estreou abertura, cenário, e logotipos novos.\n[…]\nHilton Gomes e Cid Moreira comandaram a primeira edição do Jornal Nacional, em 1.º de setembro de 1969. No ano seguinte, Hilton foi substituído por Sérgio Chapelin, que formou com Cid Moreira a dupla que mais tempo apresentou o telejornal. Em 1979, Chapelin foi para o Jornal da Globo e o cenário passou a ser menor, com lugar para apenas um apresentador. Cid Moreira estreou o novo cenário em 2 de abril de 1979, data da estreia da segunda versão do Jornal da Globo.\n[…]\nEvandro Carlos de Andrade, à época diretor de jornalismo da Globo, promoveu uma grande mudança no telejornal. substituindo Moreira e Chapelin por William Bonner e Lillian Witte Fibe, que assumiram a bancada como parte do projeto de substituir locutores por jornalistas na apresentação dos telejornais da emissora.\n[…]\nJornal Nacional no G1\n[…]\nJornal Nacional no Twitter\n[…]\nJornal Nacional no Memória Globo"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Os Flintstones",
      "descricao": "Desenho animado americano de 1960 sobre uma família da Idade da Pedra."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na família Flintstone, da Idade da Pedra, como se chama a filha de Fred e Wilma?",
    "resposta": "Pedrita",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Os_Flintstones",
      "https://en.wikipedia.org/wiki/Pebbles_Flintstone"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Flintstones",
        "situacao": "ok",
        "texto": "Os Flintstones (em inglês: The Flintstones) é uma série de televisão animada que foi exibida de 1960 a 1966 e criada por William Hanna e Joseph Barbera. O desenho retrata o cotidiano de uma família de classe média da Idade da Pedra. Calcula-se que já foi assistido por 300 milhões de espectadores em 80 países, sendo dublado em 22 idiomas. A série estreou às 20:30 do dia 30 de setembro de 1960, no c\n[…]\nCom o tempo, surgiram Pedrita (Pebbles), a filha dos Flintstones, em 1962, e Bam-Bam, filho adotivo dos Rubbles, em 1963.\n[…]\nFred Flintstone ganha a vida como operador de dinossauro da Slaterock Gravel Company. É casado com Wilma e pai de Pedrita, sendo exímio jogador de boliche e membro da confraria dos Búfalos d'Água. Seu patrão é o Senhor Pedregulho. O prato preferido de Fred é o Brontossaurobúrguer (ou Brontoburguer) com Cactus-Cola e também Costelas de Brontossauro. Nos episódios, Fred sempre entra em confusão. Seu famoso bordão é \"yabadabadoo\".\n[…]\nFred é casado com Wilma Flintstone, uma exímia dona-de-casa, mãe de Pedrita. Sua melhor amiga é Betty Rubble, sua vizinha. Vilma já pensou m trabalhar fora várias vezes, mas seu marido Fred é contra. Na série animada, Vilma é da classe operária, assim como Fred; porém, no filme Viva Rock Vegas, ela é caracterizada como sendo de família rica. Pedrita, filha do casal, anos mais tarde, casa-se com Bambam Rubble ao tornar-se adulta.\n[…]\nBambam e Pedrita (1971-72)\n[…]\nNo mês de Setembro/Outubro de 2010, a rede de lanchonetes McDonald's estavam oferecendo como brinde do McLanche Feliz mini-pelúcias do Fred Flintstone, Pedrita Flintstone, Bambam Rubble e Dino. O tema da promoção era os clássicos personagens da Hanna-Barbera. Alem das mini-pelúcias do Fred Flintstone, Pedrita Flintstone, Bambam Rubble e Dino, tambem tinham mini-pelúcias do Scooby-Doo e Salsicha Rogers, do clássico Scooby-Doo, e Tom e Jerry, do clássico Tom and Jerry.\n[…]\nThe Flintstone Kids"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pebbles_Flintstone",
        "situacao": "ok",
        "texto": "Pebbles Flintstone is a fictional character in the Flintstones franchise. The red-haired daughter of Fred and Wilma Flintstone, Pebbles was born near the end of the third season. She is most famous in her infant form on The Flintstones, but has also appeared at various other ages, including as a teenager on the early 1970s spin-off The Pebbles and Bamm-Bamm Show and as an adult in three television\n[…]\nThroughout the different iterations of the Flintstones series, Pebbles' age has varied significantly, depicted as an adolescent in one spin-off and reverting to an infant in the next. Listed approximately in order of release, Pebbles has appeared in the following Flintstones incarnations:\n[…]\nThe Flintstones\n[…]\nThe Man Called Flintstone\n[…]\nThe New Fred and Barney Show\n[…]\nThe Flintstones' New Neighbors\n[…]\nThe Flintstones: Fred's Final Fling\n[…]\nThe Flintstones: Wind-Up Wilma\n[…]\nThe Flintstones: Jogging Fever\n[…]\nA Flintstones Christmas Carol\n[…]\nA Flintstone Christmas\n[…]\nThe Flintstones: Little Big League\n[…]\nThe Flintstones Movie (live-action)\n[…]\nThe Flintstone Comedy Hour\n[…]\nThe Flintstone Comedy Show\n[…]\nThe Flintstone Funnies\n[…]\nA Flintstone Family Christmas\n[…]\nIn 1963, when Hanna-Barbera decided to add a baby to the show, their first choice was a boy named Fred Junior. When Ideal Toy Company heard this, company executives approached Hanna-Barbera with a proposal to change the baby character to a girl for which the toymaker could create a doll, and Hanna-Barbera agreed.\n[…]\nPebbles also appears on the packages of \"Flintstones\" children's vitamins and with Bamm-Bamm on the packages of \"Flintstones\" toddler vitamins, which are manufactured by Bayer Healthcare (formerly Miles Laboratories).\n[…]\nInfant Pebbles was voiced by Jean Vander Pyl, who also voiced her mother, Wilma.\n[…]\nPebbles appeared in the 1994 live-action Flintstones movie, where she was played by twins Elaine and Melanie Silver."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Teletubbies",
      "descricao": "Programa infantil britânico da BBC, estreado em 1997, com quatro criaturas coloridas que têm antenas na cabeça."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Cada Teletubbie tem uma antena na cabeça e, na barriga, que objeto embutido?",
    "resposta": "Uma tela de televisão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teletubbies"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teletubbies",
        "situacao": "ok",
        "texto": "Teletubbies is a British children's television series created by Anne Wood and Andrew Davenport for the BBC. The programme focuses on four differently coloured characters known as the Teletubbies, named after the television screens on their bellies. Recognised throughout popular culture for the uniquely shaped antenna protruding from the head of each character, the Teletubbies communicate mostly t\n[…]\nThe artist who originally drew the characters that would become the Teletubbies was the illustrator and caricaturist Jonathan Hills, who also designed digital images for television programmes including Poirot. In 2022 a sample from a collection of original drawings were presented by Hills' widow Lucy on the BBC show Antiques Roadshow. The collection was valued, by expert Mark Hill, at up to £80,000.\n[…]\nOverseas Teletubbies merchandise sales throughout the 1990s delivered €136 million in profits for the BBC. By the time of the programme's cancellation, Teletubbies toys had generated over £200 million in revenue for co-creator Anne Wood alone. In 2005, Chris Hastings and Ben Jones of The Daily Telegraph called Teletubbies \"the most lucrative show in BBC television history.\"\n[…]\nTo commemorate the tenth anniversary of the premiere of Teletubbies, a series of events took place from March to April 2007. The characters headlined an invitation-only event in London on 21 March 2007. They appeared in New York City's Times Square, Grand Central Terminal, and Apollo Theater. They were also interviewed on NBC's The Today Show in an episode that included the first televised appearance of the actors without their costumes.\n[…]\nThroughout May 2016, the characters appeared on various breakfast television programmes to promote the upcoming series debut on the Nick Jr. Channel in the United States.\n[…]\nTeletubbies on Nickelodeon Press Archived 16 June 2017 at the Wayback Machine\n[…]\nTeletubbies at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teletubbies",
        "situacao": "ok",
        "texto": "Teletubbies é um programa televisivo britânico produzido pela BBC e Ragdoll Productions. Foi criado por Anne Wood CBE, o diretor criativo da Ragdoll, e Andrew Davenport, que escreveu cada um dos 365 episódios que compõem a série original. Narrado por Tim Whitnall (e Guilherme Briggs no Brasil), o programa rapidamente se tornou um sucesso comercial e de crítica na Grã-Bretanha e no exterior (partic\n[…]\nA serie se foca em atores com fantasias, o tanto diferentes nomeados para as telas de televisão implantados nas barrigas dos personagens. Reconhecido em toda a cultura popular para a antena exclusivamente em forma saindo da cabeça de cada ser, em seus respectivos nomes e cores de assinatura, os quatro Teletubbies descritos neste programa incluem Tinky Winky, Dipsy, Laa-Laa e Po.\n[…]\nAo longo de cada episódio, uma variedade de rituais são realizados que são, às vezes, de maneira diferente em cada renovação, Tais como as interações lúdicas entre os Teletubbies e o alto falante. Os acidentes causados por Noo-noo, a imagem das crianças brincando e criando algo que é exibido na tela da barriga de um dos personagens e, particularmente, o \"evento mágico\", que ocorre uma vez por episódio.\n[…]\nO evento é cada vez diferente e muitas vezes é causado inexplicavelmente, e é freqüentemente psicodélica e estranha, contudo lunática.\n[…]\nPo é a quarta e mais nova dos Teletubbies sendo visivilmente mais baixinha em altura dentre os quatro, possui uma personalidade inocente e ao mesmo tempo curiosa e travessa apresentando muitas vezes características como as de um bebê. Ela possui coloração vermelha e a antena de sua cabeça tem um formato circular no topo semelhante a um soprador de bolas de sabão. Seu objeto favorito é um patinete.\n[…]\nDarral Macqueen, o produtor executivo, afirmou: \"Trabalhar na evolução dos Teletubbies é como lidar com as jóias da coroa da Televisão.\"\n[…]\n«Teletubbies Site oficial do Reino Unido»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Power Rangers (Mighty Morphin)",
      "descricao": "Série americana de ação de 1993, Mighty Morphin Power Rangers, sobre adolescentes que viram heróis de uniformes coloridos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos Power Rangers dos anos noventa, as máquinas dos cinco heróis, inspiradas em dinossauros, se juntam para formar que robô gigante?",
    "resposta": "Megazord",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mighty_Morphin_Power_Rangers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mighty_Morphin_Power_Rangers",
        "situacao": "ok",
        "texto": "Mighty Morphin Power Rangers (MMPR) is an American superhero television series produced by Saban Entertainment, which aired from August 28, 1993 to November 27, 1995, on the Fox Kids programming block, lasting three seasons. The series drew elements and stock footage from Super Sentai, a Japanese television series by Toei Company. Each season was inspired by Kyoryu Sentai Zyuranger, Gosei Sentai D\n[…]\nBilly Cranston The Blue Ranger of MMPR and the Blue Ninja Ranger; also the longest-lasting member of the original team. He wields the Power Lance and pilots the Triceratops Dinozord, Unicorn Thunderzord, Wolf Ninjazord, and Blue Shogunzord. Also commands the Dino Megazord (after Jason). Billy was portrayed by David Yost.\n[…]\nRocky DeSantos The second Red Ranger of MMPR and the Red Ninja Ranger. He wields the Power Sword and pilots the Red Dragon Thunderzord (after Jason), Ape Ninjazord, Red Shogunzord, and Tyrannosaurus Dinozord (after Jason). Also commands the Thunder Megazord (after Jason), Ninja Megazord, and Shogun Megazord. Rocky was portrayed by Steve Cardenas.\n[…]\nIn June 2024, the Mighty Morphin Power Rangers appeared in ARK: Survival Ascended through a collaboration content pack. The ARK x Power Rangers kit included Ranger character skins, dinosaur skins resembling Dinozords, and other themed items. A second wave of content released in February 2025 added additional skins for the Green Ranger, White Ranger, Lord Zedd, and Rita Repulsa, along with creature skins for Zords such as the White Tigerzord and Megazord.\n[…]\nIn August 2025, characters from Mighty Morphin Power Rangers were featured in a crossover event in Fortnite Battle Royale, including skins for the Red, Black, Blue, Yellow, and Pink Rangers, plus the Green Ranger (with White Ranger as an alternate style) and villain Lord Zedd, along with a Dino Megazord item.\n[…]\nMighty Morphin Power Rangers | Season 1 playlist on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mighty_Morphin_Power_Rangers",
        "situacao": "ok",
        "texto": "Mighty Morphin Power Rangers (bra/prt: Power Rangers) é uma série de televisão infanto-juvenil de super-heróis norte-americana do gênero Super Sentai, que estreou em 28 de agosto de 1993, no bloco semanal Fox Kids. A série é sobre um grupo de adolescentes que foram escolhidos para proteger o mundo de um grupo de invasores alienígenas; e lhes foram dadas a capacidade de se \"transformar\" em super-po\n[…]\nUm filme inspirado na série pelo estúdio Lionsgate foi lançado em 2017. Em 2023, celebrando o trigésimo aniversário da franquia, saiu no Netflix o filme Mighty Morphin Power Rangers: Once and Always, uma continuação trazendo de volta seis dos Rangers originais.\n[…]\nTigre Dentes-de-Sabre Dino Zord: Com certeza esse zord é um dos que têm mais habilidades. Com saltos muito altos, ele é pilotado por Trini e foi a escolha certa para a Ranger Amarela. Sua cauda pode formar um canhão que pode soltar diversos lasers. Quando esse zord é chamado por Trini, ele salta da floresta rapidamente. No Megazord formava a perna direita. Depois foi transformado no Grifo Amarelo Thunder Zord.\n[…]\nDragão Zord: Quando Tommy foi enfeitiçado por Rita, ela deu a ele o DragonZord. No começo tentou destruir os Dino Zords, mas depois se uniu aos Rangers juntamente a Tommy. Pode soltar mísseis de seus dedos e usar sua cauda como uma furadeira. Contém um tipo de cetro que usou várias vezes em suas batalhas. Pode se unir a alguns DinoZords para formar o Dragão Zord em modo de Batalha ou ao Megazord para formar o Mega Dragão Zord.\n[…]\nNinja Megazord: Ele é a junção de todos os Ninja Zords (menos o Falcão). Pode golpear o inimigo com seus punhos usando o poder do Macaco Ninja e do Lobo Ninja. É o Megazord mais poderoso da temporada e um dos mais famosos da franquia por sua participação em Power Rangers O Filme onde lutou contra Ivan Ooze.\n[…]\nMighty Morphin Power Rangers: Rock Aventura\n[…]\nMighty Morphin Power Rangers no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "TV Colosso",
      "descricao": "Programa infantil da TV Globo exibido de 1993 a 1997, passado numa emissora de TV fictícia comandada por bonecos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No programa infantil TV Colosso, da Globo nos anos noventa, os bonecos que comandavam a emissora fictícia eram de que animal?",
    "resposta": "Cachorros",
    "fonte": [
      "https://pt.wikipedia.org/wiki/TV_Colosso"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/TV_Colosso",
        "situacao": "ok",
        "texto": "TV Colosso foi um programa infantil de televisão brasileiro que substituiu o Show do Mallandro na TV Globo. O programa foi exibido entre 19 de abril de 1993 a 3 de janeiro de 1997. Criado e dirigido por Luiz Ferré, Beto Dorneles e Boninho, o programa era protagonizado por bonecos caracterizados como cães, simulando todas as instâncias de uma emissora de TV; do presidente ao office-boy.\n[…]\nAlguns dos programas apresentados pela TV Colosso eram paródias dos programas da Rede Globo e de outras emissoras e foram o noticiário Jornal Colossal, sátira do Jornal Nacional; o \"Clip-cão\", paródia do Clip Clip, com o apresentador Thunderdog, um sósia canino do então VJ da MTV Thunderbird; a novela mexicana Pedigree, Os Vegetais não Mentem, A Princesa Pirata e outras cópias caninas das novelas da TV Globo; o seriado \"As Aventuras do Super-Cão\", remetendo ao seriado norte-americano As Aventuras do Superman exibido na época pela própria Globo; as \"Olimpíadas de Cachorro\", versão canina do Globo Esporte e Esporte Espetacular; e os programas do cachorro contador de histórias Jaca Paladium: o Acredite Se Puder e Selvagem Mundo Animal com os maiores absurdos da história satirizando respectivamente os programas Acredite se quiser,  apresentado por Jack Palance, Mundo Animal e as revistas eletrônicas da própria Globo como Globo Repórter e Fantástico.\n[…]\nEm 24 de dezembro de 1993 e em 24 de dezembro de 1994 foram ao ar especiais de Natal estrelados pela TV Colosso, exibidos no horário nobre da TV Globo por volta das 23 horas. Durante a Copa de 1994, era exibido durante a programação um clip com os personagens interpretando a música Coração Verde e Amarelo, tema da Globo para a Copa e que posteriormente seria convertido em tema das transmissões de futebol da emissora.\n[…]\nTV Colosso Memória Globo\n[…]\n«Criadores e Criaturas - Blogue dos criadores do programa»\n[…]\nTV Colosso no IMDb"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Sai de Baixo",
      "descricao": "Série humorística brasileira da TV Globo, estreada em 1996, passada num apartamento no Largo do Arouche."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No elenco do humorístico Sai de Baixo, gravado com plateia, que ator interpretava o esnobe e falido Caco Antibes?",
    "resposta": "Miguel Falabella",
    "distratores": [
      "Luis Gustavo",
      "Tom Cavalcante",
      "Marco Nanini"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sai_de_Baixo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sai_de_Baixo",
        "situacao": "ok",
        "texto": "Sai de Baixo é um sitcom brasileiro produzido e exibido inicialmente pela TV Globo de 31 de março de 1996 a 31 de março de 2002, em 241 episódios divididos em 7 temporadas.\n[…]\nCarlos Augusto Vasconcellos Antibes (Caco) (Miguel Falabella) — Antes um membro da rica sociedade em São Paulo, Caco Antibes foi vítima de uma auditoria da Receita Federal que descobriu um número ilimitado de maracutaias e falcatruas, algumas delas envolvendo políticos influentes. Com isso, Caco e sua esposa Magda foram despejados de sua mansão junto com a sogra, indo morar no apartamento de Vavá.\n[…]\nCarlota Vasconcellos Antibes (Caca) (Miguel Falabella) - Mãe de Caco e sogra de Magda. Caca, assim como seu filho, se considera parte da alta sociedade e é metida a madame, também tendo horror a pobres. Apesar das semelhanças, o relacionamento entre mãe e filho nem sempre é dos melhores, e Caca é do tipo que, mesmo não morando com Caco, muitas vezes vive às custas dos bens do filho e adora abusar, exigindo presentes caros e reclamando da bagunça no apartamento de Vavá.\n[…]\nCarlos Augusto Antibes  Junior (Caquinho) (Lucas Hornos) — Filho de Caco e Magda na quarta e da quinta temporada, sendo que depois é mandado para um internato.\n[…]\nOutros dois atores que fizeram parte do elenco fixo nas temporadas seguintes também não estiveram presentes. Luiz Carlos Tourinho, que vivia o porteiro Ataíde, faleceu em 2008, enquanto Cláudia Rodrigues, que interpretou a última empregada, Sirene, não chegou a ser convidada após a produção avaliar que a história não deixava brechas para sua recolocação. Também como na primeira versão, Miguel Falabella  participou da criação dos textos nos novos episódios."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Os Jetsons",
      "descricao": "Desenho animado americano de 1962 sobre uma família que vive num futuro de carros voadores e robôs."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na casa futurista dos Jetsons, como se chama a empregada, que é um robô de avental?",
    "resposta": "Rosie",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Jetsons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons is an American animated sitcom produced by Hanna-Barbera Productions. It originally aired in prime time from September 23, 1962, to March 17, 1963, on ABC, then later aired in reruns via syndication, with new episodes produced from 1985 to 1987. It was Hanna-Barbera's Space Age counterpart to The Flintstones.\n[…]\nJanet Waldo  – Judy Jetson, Celeste Skyler (in \"A Visit from Grandpa\"), Miss Brainmocker (in \"Elroy's Mob,\" \"Elroy Meets Orbitty\", \"Far-Out Father\"), Pliers Robot (in \"Elroy in Wonderland\"), Robot Cashier (in \"Rip-Off Rosie\"), Miss Booster (in \"Boy George\")\n[…]\nDon Messick  – Astro the Space Mutt, RUDI, Pet Shop Employee (in \"The Coming of Astro\"), Police Officer (in \"The Coming of Astro\", \"Rosey's Boyfriend\", \"A Visit from Grandpa\", \"Rip-Off Rosie\"), Mac (in \"Rosey's Boyfriend\", \"Rosie Come Home\", \"Wedding Bells for Rosey\"), Mr. Transitor (in \"Elroy's TV Show\"), Uniblab (in \"Uniblab\", \"G.I. Jetson\", \"Little Bundle of Trouble\"), Dr. Radius (in \"Test Pilot\"), Delivery Boy (in \"G.I.\n[…]\nMcGravity (in \"Dude Ranch\"), Kenny Countdown (in \"Elroy's Mob\"), Police Officer #1 (in \"Elroy's Mob\"), Orville (in \"Elroy Meets Orbitty\"), Announcer (in \"Elroy Meets Orbitty\", \"Rosey Come Home\"), William Martin (in \"Fugitive Fleas\"), Professor Ozone (in \"S'No Relative\"), Robot Repairer (in \"Dance Time\"), Moonstone (in \"Mirrormorph\"), Newscaster (in \"The Cosmic Courtship of George and Jane\"), Saturn Trash Stasher (in \"Elroy in Wonderland\"), Roboto (in \"Rip-Off Rosie\"), Wolf (in \"Haunted Halloween\"), Edgar (in \"Haunted Halloween\"), Robot Usher (in \"Haunted Halloween\"), Starbite (in \"Astro's Big Moment\"), IRS Agent #1 (in \"Future Tense\"), Ghost of Christmas Past (in \"A Jetson Christmas Carol\")\n[…]\nThe Jetsons & WWE: Robo-WrestleMania! (2017)\n[…]\nJetson's Movie\n[…]\nThe Cartoon Scrapbook – Profile on The Jetsons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Jetsons",
        "situacao": "ok",
        "texto": "The Jetsons (em português Os Jetsons) é uma série animada de televisão produzida pela Hanna-Barbera, exibida originalmente na ABC entre 1962 e 1963. Foi exibida no Brasil pela TV Excelsior. Mais tarde a série foi relançada com novos episódios produzidos entre 1984 e 1987, como parte do programa The Funtastic World of Hanna-Barbera. Foi exibida no canal brasileiro SBT.\n[…]\nA empregada doméstica é a robô Rosie, que cuida da limpeza e outras tarefas que usualmente são feitas a partir de apertos em incontáveis botões. A família tem um cão chamado Astro, com um sotaque que muda as consoantes das palavras para som de \"R\", como um rosnado.\n[…]\nJane Jetson: 33 anos de idade é a esposa de George, mãe de dois filhos, e uma dona-de-casa (apesar de  Rosie fazer a maior parte do trabalho). Jane é fascinada por moda e novos eletrodomésticos. Sua loja favorita é a Mooning Dales, trocadilho de Bloomingdales. É uma esposa obediente que sempre procura tornar a vida da família a mais agradável possível. Fora do lar, ela é membro da Galaxy Women Historical Society e fã de Leonardo de Vênus e Picasso Pia.\n[…]\nRosie: é a empregada doméstica robô da família. É um modelo fora-de-linha que os Jetsons amam e nunca trocariam por outro mais moderno. Rosie faz todo o trabalho de casa e também ajuda como babá. É autoritária e ocasionalmente distribui pílulas para a família. Excluindo uma cena de encerramento dos episódios, Rosie aparece em apenas dois da primeira temporada, mas fez muitas aparições no programa da década de 1980.\n[…]\nHenry Orbit: é o zelador do edifício dos Jetsons. Está sempre ajudando e possui bom humor. Seu robô Mac tem uma queda por Rosie.\n[…]\nThe Jetsons & WWE: Robo-WrestleMania! (2017)\n[…]\n1                      Rosie, a robô                                    Rosie the Robot\n[…]\n2                      Rosie volte para casa                         Rosie Come Home\n[…]\nJetson's Movie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Game of Thrones",
      "descricao": "Série de fantasia da HBO, exibida de 2011 a 2019, sobre a disputa pelo Trono de Ferro em Westeros."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Game of Thrones, que lema da Casa Stark dá título ao primeiro episódio da série?",
    "resposta": "O inverno está chegando",
    "fonte": [
      "https://en.wikipedia.org/wiki/Winter_Is_Coming"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Winter_Is_Coming",
        "situacao": "ok",
        "texto": "\"Winter Is Coming\" is the series premiere of the HBO medieval fantasy television series Game of Thrones. The first episode of the first season, it was written by series creators David Benioff and D. B. Weiss, in an adaptation of the first chapters of George R. R. Martin's book A Game of Thrones. The episode was directed by Tim Van Patten, redoing the work done by director Tom McCarthy in an unaire\n[…]\nA week before the episode first aired, HBO made the first 15 minutes available as an internet preview.\n[…]\nThe title of the episode is the motto (referred to as \"House Words\" in-universe) of House Stark, which is spoken several times in the episode and the series.\n[…]\nThe series would begin with the first book from 1996, \"A Game of Thrones\", with the intention that each novel in the series would form the basis for a season's worth of episodes. However, Benioff and Weiss had to resubmit a proposal after Carolyn Strauss stepped down as president of HBO in 2008. The first and second drafts of the pilot script, written by Benioff and Weiss, were submitted in August 2007 and June 2008 respectively.\n[…]\nThe first episode of Game of Thrones obtained 2.2 million viewers in its premiere airing, with an additional 2 million viewers in the reruns that aired during the same night. The day after the premiere HBO aired the episode six additional times, adding another 1.2 million to the viewer's figures. Reruns aired during the following week upped the total viewership to 6.8 million.\n[…]\nHitFix's Alan Sepinwall wrote that while it was too early to say if Game of Thrones belonged to the HBO pantheon with shows like The Sopranos or The Wire, it had many things in common with those shows. IGN's Matt Fowler wrote that the episode \"effortlessly takes us along, faithfully, through the book, but it also manages to capture the majestically morbid spirit of Martin's pages and turn them into thrilling television\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Winter_Is_Coming",
        "situacao": "ok",
        "texto": "\"Winter Is Coming\" (em português:  \"O Inverno Está Chegando\") é o primeiro episódio da primeira temporada da série de televisão Game of Thrones. Com 63 minutos de duração, foi exibido originalmente pelo canal HBO nos Estados Unidos em 17 de abril de 2011.\n[…]\nDe volta a Winterfell, Catelyn informa ao marido de uma carta recém-entregue anunciando a morte de Jon Arryn, antigo mentor de Eddard e até então a Mão do Rei. A mensagem também informa que o próprio rei está chegando a Winterfell.\n[…]\nThomas McCarthy foi escolhido para dirigir o episódio, filmado entre 24 de outubro e 19 de novembro de 2009, em locações na Irlanda do Norte, Escócia e Marrocos. Em setembro de 2010, a HBO deu sinal verde para Game of Thrones. Entretanto, devido a razões artísticas e de seleção de elenco, foi decidido que o piloto não serviria como primeiro episódio e foi encomendada uma refilmagem.\n[…]\nO primeiro episódio de Game of Thrones obteve 2,2 milhões de telespectadores em sua exibição de estreia, com um adicional de dois milhões de espectadores nas reprises que foram ao ar na mesma noite. Um dia depois da estreia, a HBO exibiu o episódio mais seis vezes, adicionando 1,2 milhões aos números iniciais. As reprises que foram ao ar durante a semana elevaram a audiência para 6,8 milhões de telespectadores.\n[…]\nA resposta da crítica ao primeiro episódio da série foi extremamente positiva. James Poniewozik, da revista TIME, o considerou uma \"vitória épica\", e Jace Lacob, do jornal The Daily Beast, chamou-o de \"inesquecível\". Alan Sepinwall, do site de notícias HitFix, escreveu que, embora fosse muito cedo para dizer se Game of Thrones pertencia ao \"panteão HBO\" com programas bem-sucedidos como The Sopranos e The Wire, ele tinha muitas coisas em comum com essas atrações.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Homer Simpson",
      "descricao": "Personagem de Os Simpsons, o pai da família, funcionário da usina nuclear de Springfield."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Os Simpsons, qual é a marca de cerveja que Homer vive bebendo na taverna do Moe?",
    "resposta": "Duff",
    "fonte": [
      "https://en.wikipedia.org/wiki/Duff_Beer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Duff_Beer",
        "situacao": "ok",
        "texto": "Duff Beer is a brand of beer that originated as a fictional beverage on the American animated series The Simpsons. Beers using the Duff branding have been brewed in a number of countries, resulting in legal battles with varying results. An official version is sold in three variations near the Simpsons Ride at Universal Studios. In 2015, 20th Century Fox, the producer of The Simpsons, began selling\n[…]\nDuff is Homer Simpson's beer of choice. It is a parody of stereotypical mass-market American lager: cheap, poor-quality, high in alcohol, and heavily marketed everywhere.\n[…]\nFudd, a competitor to Duff, appears in the episodes \"Colonel Homer\" and \"Lemon of Troy\", the latter showing it being enjoyed by residents of Shelbyville, rival town to the Simpsons' home of Springfield. Consumption of Fudd however is alleged by bartender Moe Szyslak to have made hillbillies go blind.\n[…]\nBilbo's pizza and brewery in Kalamazoo, Michigan also brewed their own form of Duff beer, which had a Homer Simpson tap handle to complete the reference.\n[…]\nDuff Beer UG's beer was introduced into France in 2011, though with limited success. Since French television has a strict prohibition on advertising and product placement of alcohol, subsequent broadcasts of The Simpsons have blurred the Duff logo on screen. The name is not censored on the soundtrack, but Duffman was redubbed \"Uffman\".\n[…]\nWhile Duff Brewery in Dunedin, New Zealand brewed Duff Beer many years before The Simpsons, after  threats of legal action by Fox, they negotiated to rename to McDuff.\n[…]\nThe gift shop of The Simpsons Ride at Universal Studios sells a canned energy drink made by Boston America Corp. that is designed to look like a Duff Beer can. It is also sold at a limited number of other locations, including Five Below, 2nd & Charles, and in the UK at American import stores such as Cybercandy, and Bootleggers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Duff_Beer",
        "situacao": "ok",
        "texto": "As Empresas Duff de Bebidas Alcoólicas (em inglês: Duff Beer) é a marca de cerveja favorita de Homer Simpson em Os Simpsons. O seu empregado mais conhecido que diz sempre: \"Oooyee\" e \"Eu sou o Duffman\" o Duffman!.\n[…]\nEm 2003, Bart Simpson e seus colegas da Escola Elementar de Springfield fizeram uma ameaça terrorista que todas as crianças também devem experimentar a cerveja Duff.\n[…]\nA Duff Beer é comercializada no mundo real por diversas empresas sem autorização oficial ou consentimento do criador de Os Simpsons, Matt Groening. Groening declarou que não pretendia jamais licenciar a marca Duff para uma bebida alcoólica verdadeira por temer encorajar crianças a beber, entretanto nenhum procedimento contra o uso é conhecido, permitindo o estímulo de consumo entre menores.\n[…]\nA Duff que está à venda não é um produto oficial da Fox, detentora dos direitos sobre a história da família Simpson.\n[…]\nO responsável pela criação é o mexicano Rodrigo Contreras, que registrou a marca no México e lançou a cerveja na Espanha em 2007, numa parceria com a cervejaria belga Haacht Brewery.\n[…]\nOs direitos de produção no Brasil foram adquiridos no ano passado pela Duff do Brasil.\n[…]\nA bebida não é mais fabricada no Brasil, quem tinha os direitos da fabricação era a Saint Bier, responsável também pela produção da Cerveja Coruja.\n[…]\nConrado Kaczynski, sócio da Duff do Brasil, explica que a fórmula muda de acordo com o país: \"Enquanto as versões europeias são mais massificadas e baratas, tentamos fazer no Brasil uma cerveja premium que tenha um sabor leve e especial.\"\n[…]\nO nome da cerveja é uma homenagem ao baixista Duff Mckagan da banda de rock Guns N' Roses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Gary, o Caracol",
      "descricao": "Bicho de estimação de Bob Esponja na série animada Bob Esponja Calça Quadrada, que se comunica miando."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Gary, o bichinho de estimação de Bob Esponja que mia como um gato, é que tipo de animal?",
    "resposta": "Caracol",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_SpongeBob_SquarePants_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_SpongeBob_SquarePants_characters",
        "situacao": "ok",
        "texto": "The characters in the American animated television series SpongeBob SquarePants were created by artist, animator, and former marine biologist Stephen Hillenburg. The series chronicles the adventures of the character SpongeBob SquarePants and his various friends in the fictional underwater city of Bikini Bottom. Most characters are anthropomorphic sea creatures based on real-life species.\n[…]\nGary the Snail (vocal effects provided by Tom Kenny) is SpongeBob's pet sea snail who lives with him in their pineapple home and vocalizes like a cat. Other snails and SpongeBob can understand and talk to him. Depicted as a level-headed, wise, and sophisticated character, Gary often serves as a voice of reason and a foil to SpongeBob and helps solve problems that his owner cannot solve by himself. He has a pink shell that is impossibly spacious on the inside.\n[…]\nGranny (voiced by Amy Poehler) is an elderly fish who appears in \"Have You Seen This Snail?\". She finds snails and force-feeds them so that she can eat them and lock their shells in a closet. She adopts Gary, who was lost in an alley, as her latest victim, but he manages to escape.\n[…]\nKing Poseidon (voiced by Matt Berry) is the ruler of the seven seas who resides in Atlantic City and is much different from King Neptune. He uses snails' slime as face cream to look younger, which is the reason he kidnapped SpongeBob's pet snail Gary once he was all out of snails. He only appeared in The SpongeBob Movie: Sponge on the Run.\n[…]\nIn 2012, Rodger Bumpass' performance as Squidward was nominated for Outstanding Performer in an Animated Program at the 39th Daytime Emmy Awards. Additionally, Patrick as a character won in the category \"Favorite Animated Animal Sidekick\" at the 2014 Kids' Choice Awards."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_SpongeBob_SquarePants",
        "situacao": "ok",
        "texto": "Esta é uma lista de personagens de SpongeBob SquarePants, uma série televisiva de animação norte-americana. Criada por Stephen Hillenburg, a série, exibida pela Nickelodeon, narra as aventuras e os empreendimentos do personagem-título e de seus diversos amigos na fictícia cidade subaquática de Bikini Bottom. A maioria dos personagens são criaturas marinhas antropomórficas baseadas em espécies reai\n[…]\nA maneira de falar de Krabs também foi inspirada pelo dono do restaurante, que lembrava um pirata com seu forte sotaque do Maine. No entanto, o proprietário não era ganancioso; esse detalhe foi adicionado por Hillenburg para \"dar mais personalidade\" ao personagem. O objetivo de Hillenburg era desenvolver cada personagem principal do seriado representando um tipo diferente de animal.\n[…]\nBrown declarou que improvisou durante sua audição e não encontrou dificuldades para encontrar a voz correta para o personagem. Bumpass, por sua vez, descreveu a voz de Squidward como \"muito nasal e monótona\" e que o personagem se tornou interessante para sua performance por causa do \"amplo espectro de emoções\" que apresenta. Fagerbakke expressa Patrick da mesma maneira que ele expressaria qualquer tipo de personagem. Ele, inclusive, chegou a ser comparado ao personagem que interpreta. Mr.\n[…]\nAlém disso, o personagem Patrick venceu a categoria \"Favorite Animated Animal Sidekick\" do Kids' Choice Awards 2014.\n[…]\nEles também apareceram em trajes de mascotes no Nickelodeon Suites Resort em 2005 e tem feito aparições regulares em eventos da Nickelodeon desde então. Plâncton, Karen e Gary são os únicos personagens principais que nunca foram vistos como mascotes; em eventos, eles são normalmente representados como fantoches ou estátuas. Em dezembro de 2011, um desfile de mascotes e carros alegóricos intitulado \"SpongeBob ParadePants\" estreou no Sea World Austrália.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Spock",
      "descricao": "Oficial de ciências meio humano e meio vulcano da nave Enterprise em Jornada nas Estrelas, vivido por Leonard Nimoy."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Jornada nas Estrelas, o senhor Spock, filho de pai vulcano e mãe humana, tem sangue de que cor?",
    "resposta": "Verde",
    "distratores": [
      "Azul",
      "Prateado",
      "Roxo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Spock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spock",
        "situacao": "ok",
        "texto": "Spock is a fictional character in the Star Trek media franchise. Portrayed by Leonard Nimoy, he is one of the three central characters in the original Star Trek series (1966–69), alongside Captain James T. Kirk (William Shatner) and Dr. Leonard \"Bones\" McCoy (DeForest Kelley). On that series, Spock served as first officer and science officer of the starship Enterprise. Spock's mixed human–Vulcan h\n[…]\nSpock on TV's Star Trek, the role that made Leonard Nimoy famous.\"\n[…]\nFans asked Nimoy questions about current events such as the Vietnam War and LSD as if he were the Vulcan scientist; one even asked the actor to lay his hands on a friend's eyes to heal them. When a biracial girl wrote asking for advice on how to deal with persecution as \"a half-breed\", Nimoy responded that young Vulcans had treated Spock similarly and that she should, as he did, \"realize the difference between popularity and true greatness\".\n[…]\nSpock understands the trauma of human existence, for he is not home with earthmen or Vulcan; he can function only in the fabricated and neatly ordered society of the Enterprise. There, he knows who he is; he relates to his role very specifically, and this gives him a kind of cool.\n[…]\nCritical reaction to Spock's death was mixed. Film critic Roger Ebert lauded Spock's death: \"He makes a choice in Star Trek II that would be made only by a hero, a fool, or a Vulcan.\n[…]\nSpock has been parodied by, and has also been the inspiration for, pop culture works in various media. Composer/keyboardist George Duke's 1976 Solo Keyboard Album features two tracks which pay homage to Spock: \"Spock Gets Funky\" and \"Vulcan Mind Probe\". Rock guitarist Paul Gilbert wrote the song \"Mr. Spock\" on his Space Ship One album. Swedish synthpop band S.P.O.C.K makes music heavily influenced by the Star Trek universe.\n[…]\nSpock Archived December 22, 2008, at the Wayback Machine at StarTrek.com\n[…]\nSpock at Memory Alpha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Spock",
        "situacao": "ok",
        "texto": "Spock é um personagem da franquia de entretenimento Star Trek. Interpretado primeiramente por Leonard Nimoy na série Star Trek original, Spock também aparece na série de animação Star Trek, dois episódios de Star Trek: The Next Generation, sete filmes da franquia e inúmeros livros, quadrinhos e video games. A partir do filme Star Trek, o personagem passou a ser interpretado por Zachary Quinto. Nos\n[…]\nSpock serve a bordo da nave estelar USS Enterprise, como oficial de ciências e primeiro oficial, e mais tarde como oficial comandante. A ascendência mista vulcana/humana de Spock, sendo também um dos primeiros vulcanos a servir na Frota Estelar (o primeiro vulcano é a oficial T'Pol, que serviu a bordo da Enterprise em 2151). Serve como importante elemento de enredo em várias aparições do personagem. Junto com James T.\n[…]\nStar Trek também apresenta elementos da família e do crescimento de Spock. \"Journey to Babel\" mostra seus pais: Sarek, um embaixador vulcano da Federação Unida dos Planetas, e Amanda Grayson, uma humana. A decisão de Spock de se juntar a Frota Estelar, ao invés da Academia de Ciências de Vulcano, foi contrária a vontade de seu pai. A relação de Spock e Sarek é tensa e turbulenta, apesar de enraizada em um respeito subjacente e um cuidadoso e contido amor pelo outro.\n[…]\n\"Yesteryear\", de The Animated Series, mostra o Spock de sete anos escolhendo o estilo de vida vulcano, dedicado a lógica e a supressão de emoções.\n[…]\nQuinto expressou seu interesse pelo papel devido a dualidade da ascendência meio-humana e meio-vulcana de Spock, e como o personagem \"está constantemente explorando a noção de como evoluir de modo responsável e de como evoluir de modo respeitoso. Eu achou que isso são coisas que nós como uma sociedade, e certamente o mundo, poderia implementar\". Nimoy conversou com Quinto depois dele ter sido escolhido para o papel.\n[…]\nSpock (em inglês) no StarTrek.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gregory House",
      "descricao": "Médico protagonista da série americana House, interpretado por Hugh Laurie."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Por causa de uma lesão no músculo da coxa, que objeto o doutor Gregory House usa o tempo todo para andar?",
    "resposta": "Uma bengala",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gregory_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gregory_House",
        "situacao": "ok",
        "texto": "Gregory House is a fictional character and the titular protagonist of the American medical drama series House. Created by David Shore and portrayed by English actor Hugh Laurie, he leads a team of diagnosticians and is the Head of Diagnostic Medicine at the fictional Princeton-Plainsboro Teaching Hospital in Princeton, New Jersey. House's character has been described as a misanthrope, cynic, narci\n[…]\nGregory House was born to John and Blythe House on June 11, 1959, or May 15, 1959. House is a military brat; his father served as a Marine Corps aviator and transferred often to other bases during House's childhood. House presumably picked up his affinity with languages during this period and shows a level of understanding of Chinese, Greek, Japanese, Portuguese, Spanish, Hindi, and Yiddish.\n[…]\nThis is also an example of House's tendency to self-experiment and submit to risky medical procedures in the name of truth.\n[…]\nHe planned to audition for the roles of both James Wilson and Gregory House. However, when he read that Wilson was a character with a \"handsome open face\", he decided to audition solely for the role of House. Laurie chose not to change his clothing, but to remain in the costume he wore for the film; he also decided not to shave his beard.\n[…]\nThroughout the series' run, the character received positive reviews. Tom Shales of The Washington Post called House \"the most electrifying character to hit television in years\".\n[…]\nHoltz, Andrew (2006). The Medical Science of House, M.D.. New York: Berkley Books. ISBN 978-0-425-21230-1.\n[…]\nHoltz, Andrew (2011). House M.D. vs. Reality: Fact and Fiction in the Hit Television Series. New York: Berkley Books. ISBN 978-0-425-23893-6.\n[…]\nHockley, L.; Gardner, L. (2010). House The Wounded Healer on Television: Jungian and Post-Jungian Reflections. Routledge. ISBN 978-0-415-47913-4.\n[…]\nGregory House at the TV IV\n[…]\nDr. House modelled after Sherlock Holmes"
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
    "indice": 25,
    "ancora": {
      "nome": "Dana Scully",
      "descricao": "Agente do FBI cética da série Arquivo X, parceira de Fox Mulder, interpretada por Gillian Anderson."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em Arquivo X, a cética agente Dana Scully, que costuma fazer as autópsias dos casos, é formada em quê?",
    "resposta": "Medicina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dana_Scully"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dana_Scully",
        "situacao": "ok",
        "texto": "Dana Katherine Scully, M.D., is one of the two protagonists in the Fox science-fiction, supernatural television series The X-Files. The character, played by Gillian Anderson, is a Federal Bureau of Investigation (FBI) Special Agent and a medical doctor (MD). She investigates unsolved criminal cases labeled X-Files, which are often revealed to be supernatural or extraterrestrial in nature.\n[…]\nUpon being partnered with Mulder, Scully maintained her medical skills by acting as a forensic pathologist, often performing or consulting on autopsies of victims on X-Files cases.\n[…]\nIn \"Mulder and Scully Meet the Were-Monster,\" Scully jokes that she often enters dangerous situations alone due to the immortality she seemingly obtained during the events of the episode \"Tithonus.\" At the end of \"Mulder and Scully Meet the Were-Monster,\" Scully steals a dog from an animal control center, named Daggoo, which is named after yet another character from Moby-Dick. In \"Home Again\" Dana's mother, Margaret Scully, dies after suffering a heart attack.\n[…]\nThroughout the series, Scully's Catholic faith served as a cornerstone, although a contradiction to her otherwise rigid skepticism of the paranormal. Due to her career in science and medicine, she drifted from her Catholic Christian upbringing, but remained somewhat entrenched in her religious beliefs.\n[…]\nIn the film, The X-Files: I Want to Believe, which takes place six years later, Mulder and Scully are still in a relationship.\n[…]\nThe character is believed by some to have initiated a phenomenon referred to as \"The Scully Effect,\" as the character's role as a medical doctor and FBI Special Agent inspired many young women to pursue careers in science, medicine, engineering, and law enforcement, and as a result brought a perceptible increase in the number of women in those fields.\n[…]\nDana Scully on IMDb\n[…]\nThe Scully Effect on Fanlore"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dana_Scully",
        "situacao": "ok",
        "texto": "The X-Files (Brasil: Arquivo X / Portugal: Ficheiros Secretos) é uma série de televisão norte-americana de ficção científica criada por Chris Carter. A série foi exibida originalmente entre 10 de setembro de 1993 e 19 de maio de 2002, no canal norte-americano Fox, e em um reavivamento de duas temporadas adicionais exibidas entre 24 de janeiro de 2016 e 21 de março de 2018.\n[…]\nNa série, os agentes especiais do FBI, Fox Mulder (David Duchovny) e Dana Scully (Gillian Anderson), investigam os Arquivos-x: casos não solucionados envolvendo fenômenos paranormais. Mulder acredita na existência de extraterrestres e em paranormalidade, enquanto Scully, uma médica cética, é designada para fazer análises científicas das descobertas de Mulder e propor alternativas racionais ao seu trabalho.\n[…]\nPara ter um conceito mais estável que o de Kolchak, Carter resolveu se basear em The Silence of the Lambs e firmar a série a partir de dois agentes do FBI que resolveriam casos não totalmente resolvidos, Fox Mulder — batizado com o nome de um vizinho de infância e o sobrenome de solteira de sua mãe — e Dana Scully — com o sobrenome inspirado pelo locutor de beisebol Vin Scully (e o parceiro de Scully, Jerry Doggett, batizaria o substituto de Mulder na oitava temporada, John Doggett).\n[…]\nNa tentativa de invalidar as suas investigações e fechar o arquivo x, o FBI recruta a agente Dana Scully, uma agente que, além de médica, cientista e legista, é cética e deve reportar e dar uma explicação científica para os estranhos casos que Mulder e ela vão investigar, mais ou menos como uma espiã.\n[…]\nEntretanto, com o passar do tempo, a própria agente Scully começa a se dar conta de que as inacreditáveis teorias de seu parceiro fazem sentido e cada vez mais a sua ciência passa não mais a confrontar o que testemunha, mas a buscar respostas científicas para tais acontecimentos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Dexter Morgan",
      "descricao": "Protagonista da série americana Dexter, de 2006, um assassino em série que só mata outros criminosos, vivido por Michael C. Hall."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na série Dexter, o assassino em série Dexter Morgan trabalha como perito da polícia de Miami, analisando o quê?",
    "resposta": "Manchas de sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dexter_Morgan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dexter_Morgan",
        "situacao": "ok",
        "texto": "Dexter Morgan (né Moser) is a fictional character and the antihero protagonist of the Dexter book series by the American author Jeff Lindsay, and the television series Dexter. He is mainly portrayed by Michael C. Hall in the original series as well as in Dexter: New Blood and Dexter: Resurrection or by Patrick Gibson in Dexter: Original Sin.\n[…]\nDexter Morgan was born in Miami, Florida, United States, in 1971. At the story's outset, Dexter remembers very little about his life prior to being adopted by Harry and Doris Morgan. Harry only tells Dexter that his biological parents both died in a car accident, and Harry brought him home from the crime scene. Harry and Doris have a biological daughter, Debra (\"Deborah\" in the novels) Morgan, who becomes Dexter's adoptive sister.\n[…]\nDexter blames himself, and realizes he will always destroy those he loves; he sees at last he can never have a happy life.\n[…]\nDuring a chance meeting with Angel Batista (now Captain of Miami Metro) at a police conference in New York City, Angela learns about Dexter Morgan's supposed death, and after some investigation discovers the true identity of \"Jim Lindsay\". Dexter tells her the truth about faking his death—while leaving out that he is a serial killer—but she breaks up with him regardless. This causes awkwardness between them after she catches Harrison in bed with Audrey.\n[…]\nJeff Lindsay has written two comic miniseries for Marvel featuring Dexter Morgan: Dexter and Dexter: Down Under.\n[…]\nA nonfiction book on the case, The Devil's Cinema, detailed how Twitchell had written Facebook status updates under his Dexter Morgan account, including, \"Dexter is patiently waiting for his next victim ... uh, play date buddy\", but his followers did not know how true these posts really were.\n[…]\nDexter Morgan[link removed] at Metacritic\n[…]\nDexter Morgan at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dexter_Morgan",
        "situacao": "ok",
        "texto": "Dexter Morgan é um personagem de ficção e o anti-herói da série de livros de ficção de Jeff Lindsay, incluindo Darkly Dreaming Dexter (2004), Dearly Devoted Dexter (2005), Dexter in the Dark (2007), Dexter by Design (2009), Dexter Is Delicious (2010), Double Dexter (2011) e Dexter's Final Cut (2013). Em 2006, o primeiro livro foi adaptado na série televisiva da Showtime Dexter e da sua companheira\n[…]\nNa série de TV, Dexter é um analista forense de padrões de sangue que trabalha para o ficcional Departamento da Polícia Metropolitana de Miami. No seu tempo livre, ele é um assassino em série vigilante que tem por alvo outros assassinos que fugiram ao sistema judiciário.\n[…]\nNo início da primeira temporada, Dexter tem uma vida estável como analista de padrões de sangue para o Departamento da Polícia Metropolitana de Miami durante o dia, e assassino em série à noite.\n[…]\nOs dois homens ficam chegados, e Dexter até torna Prado o seu padrinho de casamento. Prado gradualmente percebe que Dexter é um assassino em série e começam a matar juntos consoante o código de Dexter. Quando Prado se desvia do código para matar um advogado de defesa rival, começa a competição e chantagem entre os dois homens. Dexter descobre que o sangue na camisola é de vaca, o que singifica que Prado apenas o estava a usar como desculpa para matar. Zangado e magoado, ele decide matar Prado.\n[…]\nNo início da sétima temporada, Dexter diz a uma Debra confusa que matou Marshall por impulso depois de Marshall o ter encurralado. Debra acredita no início, e ajuda-o a destruir a antiga igreja, com o corpo de Marshall lá dentro. Alguns dias depois, Debra encontra as facas de Dexter e a colecção de lamelas com sangue, e pergunta-lhe directamente se ele é um assassino em série; sem saber o que mais dizer, Dexter responde que sim.\n[…]\nDexter Morgan at Metacritic\n[…]\nDexter Morgan at The New York Times",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "MacGyver (série de 1985)",
      "descricao": "Série americana de ação exibida de 1985 a 1992, sobre um agente que resolve situações improvisando com objetos comuns."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que ferramenta o agente MacGyver, que evita usar armas de fogo, sempre leva no bolso para seus improvisos?",
    "resposta": "Canivete suíço",
    "fonte": [
      "https://en.wikipedia.org/wiki/MacGyver_(1985_TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/MacGyver_(1985_TV_series)",
        "situacao": "ok",
        "texto": "MacGyver is an American action-adventure television series created by Lee David Zlotoff and starring Richard Dean Anderson as the title character. Henry Winkler and John Rich were the executive producers. The series follows the adventures of Angus MacGyver, a secret agent armed with remarkable scientific resourcefulness to solve any problem out in the field using any materials at hand.\n[…]\nHis main asset is his practical application of scientific knowledge and inventive use of common items. The clever solutions MacGyver implemented to seemingly unsolvable problems‍—‌often in life-or-death situations requiring him to improvise complex devices in a matter of minutes‍—‌were a major attraction of the show, which helped generate interest in the applied sciences, including engineering, and for providing entertaining storylines.\n[…]\nMacGyverism led to the verb to MacGyver. In 1989, Richard Dean Anderson discussed this term on The Arsenio Hall Show; Hall had heard it used to mean 'to do the impossible', and suggested it belonged in a dictionary. MacGyver entered the Oxford Dictionaries website in 2015 as a verb meaning \"make or repair (an object) in an improvised or inventive way, making use of whatever items are at hand\".\n[…]\nJared Padalecki was part of a failed pilot for a MacGyver show.\n[…]\nAnderson reprised his role as MacGyver in September 2012 in a new series of short films, created by Mercedes-Benz for the launch of their new MPV Citan in Europe.\n[…]\nIn 2022, series creator Lee David Zlotoff and author Eric Kelley collaborated on the first novel based on the series, MacGyver: Meltdown. The novel and its followup, 2024's MacGyver: Seismic Shift, are continuations of the television series and see MacGyver once again working for the United States government.\n[…]\nList of MacGyver (1985 TV series) episodes\n[…]\nMacGyver Online – A fan site\n[…]\nMacGyver at IMDb\n[…]\nMacGyver at epguides.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/MacGyver",
        "situacao": "ok",
        "texto": "MacGyver (bra: Profissão: Perigo; palop/prt: MacGyver) é uma série de televisão norte-americana de ação-aventura criada por Lee David Zlotoff. Estrelada por Richard Dean Anderson no papel de Angus MacGyver, a série foi exibida originalmente pela ABC entre 29 de setembro de 1985 e 21 de maio de 1992, totalizando sete temporadas. A produção foi filmada principalmente em Los Angeles e Vancouver.\n[…]\nCientista por formação e veterano da Guerra do Vietnã, MacGyver utiliza seus conhecimentos de ciências aplicadas, raciocínio e criatividade para solucionar situações complexas, frequentemente improvisando ferramentas e dispositivos a partir de objetos comuns. Seu principal instrumento é um canivete suíço, que costuma carregar consigo. MacGyver é retratado como contrário à violência e ao uso de armas de fogo, preferindo encontrar soluções não violentas para os problemas que enfrenta.\n[…]\nA série gira em torno do agente secreto Angus MacGyver, cujo principal recurso é a sua aplicação prática do conhecimento científico e do uso inventivo de itens comuns — como um canivete suíço a qual o personagem sempre leva consigo, fita adesiva e fósforos (esses dois últimos itens são usados ocasionalmente).\n[…]\nEm Moçambique, a série foi transmitida pela TVM na década de 1990.\n[…]\nEm Angola, a série foi transmitida pela TPA1.\n[…]\nEm 2008, a frase \"O que MacGyver faria?\" foi usada em um comercial de televisão da Nova Zelândia. O comercial apresentou a palavra \"MacGyver\" se desdobrando como um quebra-cabeça com um descascador de batata e uma faca de corte que se abrem como as lâminas de uma faca de um canivete suíço.\n[…]\nApesar de ser um agente secreto, MacGyver era diferente de outros personagens de outras séries de televisão e filmes de espionagem pois carregava consigo apenas um canivete suíço e até mesmo fita adesiva em alguns episódios, mas nunca uma arma de fogo ou um revólver como um agente comum faria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "ALF",
      "descricao": "Sitcom americana exibida de 1986 a 1990 sobre um extraterrestre peludo do planeta Melmac que vive escondido com uma família."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na série ALF, para desespero da família que o esconde, o extraterrestre peludo do planeta Melmac adora comer que animal?",
    "resposta": "Gatos",
    "fonte": [
      "https://en.wikipedia.org/wiki/ALF_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ALF_(TV_series)",
        "situacao": "ok",
        "texto": "ALF is an American television science fiction sitcom that aired on NBC from September 22, 1986, to March 24, 1990.\n[…]\nGordon Shumway is an alien from the planet Melmac who follows an amateur radio signal to Earth and crash-lands into the garage of the Tanners, a suburban middle-class family who live in the San Fernando Valley area of California. The family consists of social worker Willie (Max Wright), his wife Kate (Anne Schedeen), their teenage daughter Lynn (Andrea Elson), younger son Brian (Benji Gregory), and pet cat Lucky, whom ALF wishes to consume.\n[…]\nLater it is revealed that ALF's home planet, Melmac, exploded due to nuclear war, leaving him and other survivors of his species without a home, and that he survived its destruction because he was away as part of the Melmac Orbit Guard.\n[…]\nGordon \"ALF\" Shumway (performed by Paul Fusco; credited by Michu Meszaros as one of ALF's assistants in costume, Lisa Buckley and Bob Fappiano as assistant puppeteers) is an alien from the planet Melmac, where he was a member of its Orbit Guard, who arrives on Earth and lands in the Tanner family's garage. He is given the nickname \"ALF\" by Willie.\n[…]\nTo capitalize on the success of the series, a spin-off animated series was produced, airing Saturday mornings on NBC. ALF: The Animated Series, set on ALF's home planet of Melmac, ran from 1987 to 1988 and was produced by DIC Entertainment. This was a prequel series, set on Melmac before the planet exploded. The show focused on ALF, his family, his friends, and his girlfriend Rhonda and their various exploits."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alf_%28teless%C3%A9rie%29",
        "situacao": "ok",
        "texto": "ALF (bra: Alf, O ETeimoso; prt: Alf, Uma Coisa do Outro Mundo) é uma série de televisão norte-americana, exibida pela NBC entre 22 de setembro de 1986 e 24 de março de 1990.\n[…]\nSem saberem ao certo o que fazer, os Tanner levam ALF para casa e o escondem da Alien Task Force (um grupamento do exército que procura extraterrestres) e de seus vizinhos intrometidos Trevor e Raquel Ochmonek (John LaMotta e Liz Sheridan), até que ele possa reparar sua nave espacial. ALF geralmente fica escondido na cozinha. Ele torna-se um membro permanente da família, embora o choque cultural, a solidão e a saudade de casa frequentemente causem problemas aos Tanner.\n[…]\nA série original teve 102 episódios, cada um com o nome de uma música referente ao tema abordado, onde ALF aprende sobre a cultura da Terra e faz novos amigos dentro e fora da família Tanner, incluindo Neal (Jim J.\n[…]\nVárias mudanças ocorrem na família Tanner no decorrer da série, como o nascimento de um novo filho, a construção de um pequeno apartamento para ALF e a morte da gata Lucky, ao que ALF demonstra respeito apesar de sempre ter tentado pegar a gata para comê-la, pois no seu planeta natal gatos eram um prato comum.\n[…]\nO corpo de ALF é coberto por pelos marrons (a cor descrita por ele é \"marrom siena\"). Ele tem um focinho enrugado, sinais no rosto, sete estômagos e o coração localizado, aparentemente, na cabeça. Gosta de arrotar, comer gatos e tinha um melhor amigo chamado Malhar Naik. Ele também tinha um amigo chamado Skip e uma amiga (que ia sair com ele no aniversário, mas no mesmo dia ouve a explosão de Melmac) chamada Rhonda, que também escaparam da explosão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Scooby-Doo",
      "descricao": "Cachorro dinamarquês medroso, personagem-título dos desenhos da Hanna-Barbera criados em 1969."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que guloseima faz o medroso Scooby-Doo aceitar enfrentar fantasmas e monstros?",
    "resposta": "Biscoito Scooby",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scooby-Doo_(character)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scooby-Doo_(character)",
        "situacao": "ok",
        "texto": "Scoobert Doo, more commonly known as Scooby-Doo, is an American cartoon character and the titular main protagonist of the eponymous animated television franchise created in 1969 by the American animation company Hanna-Barbera. He is a male Great Dane and lifelong companion of amateur detective Shaggy Rogers, with whom he shares many personality traits.\n[…]\nScooby-Doo and Shaggy both appeared in \"The Official BBC Children in Need Medley\" in 2009.\n[…]\nScooby-Doo is a playable character alongside Shaggy in the crossover video game Lego Dimensions. His character includes a large sandwich called the \"Scooby Snack\". Frank Welker reprises the role.\n[…]\nScooby-Doo appears in the 2021 film Space Jam: A New Legacy. His design is the same from the 2020 film, Scoob!.\n[…]\nScooby-Doo makes a non-speaking cameo appearance in Mortal Kombat Legends: Battle of the Realms, where he is seen alongside Shaggy in his \"Ultra Instinct Shaggy\" form in the Warner Bros. Animation logo after the latter grabs Scorpion by the neck and pulls him into the Netherrealm.\n[…]\nScooby-Doo makes a non-speaking appearance in Jellystone! in the episode \"Frankenhooky\", where he and the Mystery Inc. Gang stop the Ghost Chasers from attacking Yogi Bear and Boo-Boo at an abandoned cheese theme park.\n[…]\nScooby-Doo appears in Fortnite during 2025's Fortnitemares. He appears with other members of Mystery Incorporated and was added to the game October 10.\n[…]\nCasey Kasem, the original voice actor for Shaggy Rogers, said that Scooby is \"the star of the show—the Shaquille O'Neal of the show.\" Kasem explained, \"People love animals more than they love people. Am I right or wrong? They give more love to their pets than they give to people. Scooby is vulnerable and lovable and not brave, and very much like the kids who watch. But like kids, he likes to think that he's brave.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Scooby-Doo_%28personagem%29",
        "situacao": "ok",
        "texto": "Scoobert Cornelius Doo, mais conhecido como Scooby-Doo, é um cão fictício e o protagonista da série de televisão Scooby-Doo. Scooby-Doo é o animal de estimação e o companheiro de longa vida de Salsicha Rogers. Ele pode falar e ficar sobre duas patas por muito tempo. É medroso, porém tem um coração de ouro e, assim como Salsicha, é comilão. O personagem utiliza muito o bordão \"Scooby-dooby-doo\". No\n[…]\nEm todas as versões do personagem, Scooby-Doo e Salsicha possuem diversos traços de personalidade, principalmente sendo covardes e sempre famintos, mas seus amigos (Velma, Daphne e Fred) incentivam-nos a ir atrás dos vilões fantasiados, geralmente com os \"Biscoitos Scooby\", um deleite do cão pelo biscoito (geralmente em forma de osso, ou, nas versões mais recentes das caricaturas, em forma do cão Scooby).\n[…]\nChiquita: Scooby se encontra com Chiquita, o animal de estimação do filho de Alejo Otero, Chihuahua, quando a turma chega ao hotel da família de Alejo. (Scooby-Doo! e o Monstro do México);\n[…]\nFrank Welker em Scooby-Doo (2002-presente), Scooby-Doo! O Mistério Começa e Scooby-Doo! A Maldição do Monstro do Lago\n[…]\nNeil Fanning em Scooby-Doo (2002) e Scooby-Doo 2 - Monstros à Solta (2004)\n[…]\nJosé Jorge Duarte (em Looney Tunes: De Novo a Ação (2003), Scooby-Doo 2 - Monstros à Solta (2004) e O Que Há de Novo, Scooby-Doo?)\n[…]\nRui de Sá (desde Scooby-Doo! Mistério S.A até ao presente)\n[…]\nOrlando Drummond (De Scooby Doo, Cadê Você? até Scooby Doo - Mistério S.A - 1a Voz)\n[…]\nTatá Guarnieri (Scooby-Doo e o Fantasma da Bruxa - Álamo)\n[…]\nReginaldo Primo (Scooby Doo Mistério S.A a 2020- 2a Voz)\n[…]\nA origem do nome \"Scooby-Doo\" veio da música Strangers in the Night, de Frank Sinatra. Mas a ideia veio do chefe de programação infantil da CBS, Fred Silverman, que pensou no nome quando Frank Sinatra canta \"doo-be-doo-be-doo\".\n[…]\nO Show do Scooby-Doo\n[…]\nWhat's New, Scooby-Doo?\n[…]\n«Site oficial do Scooby-Doo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Tartarugas Ninja",
      "descricao": "Franquia criada em 1984 por Kevin Eastman e Peter Laird, sobre quatro tartarugas mutantes treinadas em artes marciais, famosa pelo desenho animado de 1987."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Leonardo, Rafael, Donatello e Michelangelo, as Tartarugas Ninja, têm nomes de artistas de que período da história da arte?",
    "resposta": "Renascimento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles",
        "situacao": "ok",
        "texto": "Teenage Mutant Ninja Turtles (TMNT) is an American media franchise created by comic book artists Kevin Eastman and Peter Laird. It follows Leonardo, Donatello, Raphael and Michelangelo, four anthropomorphic turtle brothers trained in ninjutsu who fight evil in New York City. The franchise encompasses printed media, television series, feature films, video games, and merchandise.\n[…]\nEastman and Laird developed the concept into a comic book. They considered giving the turtles Japanese names, but instead named them after the Italian Renaissance artists Leonardo, Donatello, Raphael, and Michelangelo, which Laird said \"felt just quirky enough to fit the concept\". They developed a backstory referencing further elements of Daredevil: like Daredevil, the Turtles are altered by radioactive material, and their sensei, Splinter, is a play on Daredevil's sensei, Stick.\n[…]\nIn 2016, Activision and PlatinumGames developed Teenage Mutant Ninja Turtles: Mutants in Manhattan for the PlayStation 4, PlayStation 3, Xbox One, Xbox 360, and PC. The game is described as a third-person, team-based brawler. The campaign is playable either single-player or co-op and has an original story written by Tom Waltz, IDW comic writer and editor. The art style is based on longtime TMNT comic artist Mateus Santolouco.\n[…]\nOnce the Turtles broke into the mainstream, parodies also proliferated in other media, such as in satire magazines Cracked and Mad and numerous TV series of the period. The satirical British television series Spitting Image featured a recurring sketch \"Teenage Mutant Ninja Turds\".\n[…]\nEastman, Kevin (2002). Kevin Eastman's Teenage Mutant Ninja Turtles Artobiography. Los Angeles: Heavy Metal. ISBN 1-882931-85-8.\n[…]\nWiater, Stanley (1991). The Official Teenage Mutant Ninja Turtles Treasury. New York: Villard. ISBN 0-679-73484-8.\n[…]\nTeenage Mutant Ninja Turtles at Don Markstein's Toonopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartarugas_Ninja",
        "situacao": "ok",
        "texto": "As Tartarugas Ninja (Teenage Mutant Ninja Turtles, abreviado como TMNT) são quatro tartarugas antropomórficas batizadas com o nome de artistas italianos do Renascimento e treinadas na arte do ninjutsu por um rato sensei antropomórfico chamado Splinter. A partir da sua casa, os esgotos de Nova Iorque, batalham contra criminosos, senhores demoníacos, criaturas mutantes e alienígenas invasores, enqua\n[…]\nA Nickelodeon estreou uma nova série animada em 2D, Rise of the Teenage Mutant Ninja Turtles, em 2018. Na série ocorreram algumas mudanças na personalidade das tartarugas e de outros personagens, além de Raphael ser o líder da equipe.\n[…]\nTeenage Mutant Ninja Turtles (2014), filme no qual as Tartarugas enfrentam o Clã do Pé e descobrem que este se aliou à corporação que criou o mutagênico, e agora planejam lançar um vírus mortal na cidade de Nova Iorque.\n[…]\nBatman vs. Teenage Mutant Ninja Turtles (2019), filme de animação que apresenta um crossover entre o Batman e as Tartarugas, feito pela DC Entertainment e pela Nickelodeon.\n[…]\nRise of the Teenage Mutant Ninja Turtles: The Movie (2022), filme de animação da série de mesmo nome.\n[…]\nTeenage Mutant Ninja Turtles: Mutant Mayhem (2023), filme de animação produzido por Seth Rogen, onde as Tartarugas enfrentam um grupo de animais mutantes que planeja se vingar dos humanos.\n[…]\nA medida que a popularidade das tartarugas baixava, a Konami lançou em 1993 Teenage Mutant Ninja Turtles: Tournament Fighters, jogo de luta baseado em Street Fighter.\n[…]\nEm 2013, foi lançado  pela Activision o jogo Teenage Mutant Ninja Turtles: Out Of The Shadows, baseado na série animada exibida pela Nickelodeon.\n[…]\nEm 2022, a Dotemu lançou Teenage Mutant Ninja Turtles: Shredder's Revenge, um jogo inspirado nos dois arcades originais permitindo até seis jogadores simultâneos, já que além das Tartarugas tem April, Splinter e Casey como personagens jogáveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Chaves",
      "descricao": "Seriado humorístico mexicano criado por Roberto Gómez Bolaños, sobre um menino que vive numa vila."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No México, o seriado Chaves se chama El Chavo del Ocho. O número oito do título se refere a quê?",
    "resposta": "Ao canal de TV onde estreou",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "El Chavo, also known as El Chavo del Ocho is a Mexican television sitcom created by Roberto Gómez Bolaños and produced by Televisa. It premiered on February 26, 1973, and concluded on January 7, 1980, after 7 seasons and 312 episodes, and aired across Latin America and Spain.\n[…]\nRoberto Gómez Bolaños as El Chavo\n[…]\nOn January 8, 1973, Telesistema Mexicano and Televisión Independiente de México merged to become Televisa. After the merger, on February 26, 1973, El Chavo del Ocho premiered as a half-hour weekly television series.\n[…]\nThe show was so popular in Latin America and among the Spanish-speaking community of the United States that many of the phrases El Chavo and his friends used have become part of the vernacular of countries like Peru, Uruguay, and Argentina. \"Chespirito\" has established legal battles with former El Chavo del Ocho actors to prevent them from using the show's characters in Mexico without his permission.\n[…]\nEl Chavo del Ocho became one of the most influential TV shows in Latin America as it turned into a shared cultural reference across the region. Its impact came from how it portrayed everyday life in a simple neighborhood, using humor to reflect social realities such as poverty, inequality, and childhood experiences that many viewers across Latin America could recognize.\n[…]\nEl Chavo del Ocho has been broadcast in several Latin American and American countries; until 2011, it was distributed in at least 20 countries, including Mexico.\n[…]\nIn 2013, an independent funk group known as Bonde TNT made a song in homage to El Chavo del Ocho entitled Piripaque do Chaves (El Chavo's Stiffs), which went viral on the Internet with a clip of the group members dressed up as the protagonist dancing.\n[…]\nEl Chavo del Ocho at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "El Chavo del Ocho (no Brasil, Chaves), ou El Chavo, é um seriado de televisão de comédia mexicano escrito, dirigido e estrelado por Roberto Gómez Bolaños (conhecido como Chespirito) com produção da Televisa e exibido entre 26 de fevereiro de 1973 e 8 de janeiro de 1980, primeiramente no Canal 8 e depois no Canal 2. O roteiro veio de um esquete escrito por Bolaños, em que uma criança de oito anos d\n[…]\nApós colaborar com o programa Cómicos y canciones como escritor e ator ocasional, o mexicano Roberto Gómez Bolaños, mais conhecido como Chespirito, estreou no canal 8 (XEQ-TV) com a série El ciudadano Gómez produzida pela Televisión Independiente de México, no qual atuava junto com Rubén Aguirre (que anteriormente participava de El club del Shory).\n[…]\nNo Brasil, recebeu o título de Chaves e começou a ser transmitido pelo SBT em 24 de agosto de 1984 dentro do programa TV Powww!. Tempos depois, após também passar pelo infantil Bozo, o seriado ganhou um horário próprio na grade do SBT devido ao grande sucesso. Até 2010, o SBT foi o único canal que exibiu a série no Brasil.\n[…]\nEm 9 de dezembro de 2024, o SBT promoveu o retorno do seriado Chaves à sua grade diária de programação. A trama passou a ser exibida em dois horários: às 12h45, no SBT São Paulo, no canal simulcast do +SBT e praças sem programação local, e às 20h45, em rede nacional.\n[…]\nEm 1995, foi lançado o livro El diario del Chavo del Ocho, escrito pelo próprio autor da série e publicado pela editora Santillana em duas versões: inglesa e castelhana. A obra contém a biografia do próprio Chaves em primeira pessoa e sua vivência com as pessoas da vila. Em 2006, começou a transmissão de El Chavo, La Serie Animada, sendo considerado um \"popular mexicano\" pela emissora. Sua quinta temporada estreou em abril de 2012, ainda com boa audiência.\n[…]\nGómez Bolaños, Roberto (1995). El Diario de El Chavo del Ocho. [S.l.]: Santillana. ISBN 9707310944",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Zé Colmeia",
      "descricao": "Urso de chapéu e gravata dos desenhos da Hanna-Barbera, que vive roubando cestas de piquenique no Parque Jellystone."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome original do urso Zé Colmeia, Yogi Bear, faz trocadilho com o apelido de qual astro americano do beisebol?",
    "resposta": "Yogi Berra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yogi_Bear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yogi_Bear",
        "situacao": "ok",
        "texto": "Yogi Bear is an anthropomorphic animal character who has appeared in numerous comic books, animated television shows, and films. He made his debut in 1958 as a supporting character in The Huckleberry Hound Show.\n[…]\nYogi's name was similar to that of contemporary baseball star Yogi Berra, who was known for his amusing quotes, such as \"half the lies they tell about me aren't true.\" Berra filed a defamation lawsuit against Hanna-Barbera, but the company argued that any resemblance was purely coincidental. Berra withdrew his suit, but the defense was considered implausible. At the time Yogi Bear first hit TV screens, Yogi Berra was a household name.\n[…]\nJournalist Walter Brasch once wrote that \"whether coincidence or not, it is difficult to find anyone else in the [animation] industry who believes it.\" Berra himself said, \"I was going to sue the Yogi Bear program for using my name until somebody reminded me that Yogi isn't my real name. It's Lawrence.\"\n[…]\nD.A.R.E. Bear Yogi (1989)\n[…]\nHey There, It's Yogi Bear, a 1964 music from the original motion picture soundtrack\n[…]\nDC Comics Deathstroke/Yogi Bear Special #1\n[…]\nYogi Bear lends his name to a chain of recreational vehicle and camping parks (\"Yogi Bear's Jellystone Park Camp-Resorts\"), with the first opening in 1969 in Sturgeon Bay, Wisconsin. As of 2019, more than eighty locations in the United States and Canada have hosted the parks.\n[…]\nAs of 2018, one restaurant remains from the chain bearing Yogi's name, \"Yogi Bear's Honey Fried Chicken\", in Hartsville, South Carolina.\n[…]\nList of Yogi Bear live action voice actors\n[…]\nList of Yogi Bear characters\n[…]\nThe New Yogi Bear Show\n[…]\nThe Yogi Bear Show at IMDb\n[…]\nYogi Bear is available for free viewing and download at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yogi_Bear",
        "situacao": "ok",
        "texto": "Yogi Bear, conhecido como Zé Colmeia no Brasil e em Portugal, é um personagem de desenho animado. Um urso antropomórfico (animal com características humanas), que estrelou várias séries animadas criada por William Hanna e Joseph Barbera, foi criado em 1958 como um personagem secundário, num dos segmentos do programa de desenho animado The Huckleberry Hound Show (Dom Pixote).\n[…]\nYogi Berra, um famoso jogador de beisebol nas décadas de 1950 e 1960, cunhou frases que se tornaram expressões conhecidíssimas em língua inglesa e por este motivo, acredita-se que os estúdios Hanna-Barbera inspiraram-se no atleta para criar o personagem Yogi Bear. Após um processo de difamação, os estúdios alegaram mera coincidência, porém, fontes ligadas a empresa de animação afirmam que Zé Colmeia foi, sim, inspirado em Berra.\n[…]\nComo a maioria dos personagens criados por Hanna-Barbera, a peculiaridade e personalidade de Zé Colmeia foram baseadas em alguma celebridade popular daquela época. Muitos autores apontam como sendo a fonte inspiradora de Zé Colmeia, Ed Norton (Art Carney), personagem da série de televisão \"The Honeymooners\" e o seu nome Yogi (nome original de Zé Colmeia) foi baseado no astro famoso do beisebol Yogi Berra.\n[…]\nYogi Bear and the Three Stooges Meet the Mad, Mad, Mad Dr. No-No: em 1966, surge um álbum de comédia, lançado pela Hanna-Barbera Records. O disco apresentava os Three Stooges (Os Três Patetas) como ineptos guardas florestais para resgatar o Zé Colmeia, depois dele ser raptado pelo satânico Dr No-No. Curiosamente este também foi o último disco gravado pelos Three Stooges.\n[…]\nAdventures of Yogi Bear (Super NES), (1994)\n[…]\nYogi Bear: Great Balloon Blast (Game Boy Color) (2000)\n[…]\nYogi Bear: the Video Game (Wii, Nintendo DS, Playstation 3, XBox 360), (2010)\n[…]\nYo Yogi!\n[…]\nThe Yogi Bear Show no IMDb\n[…]\n«Yogi Bear» (em inglês). no TV.com\n[…]\nYogi Bear (em inglês) no Big Cartoon DataBase",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Malhação",
      "descricao": "Novela adolescente da TV Globo exibida a partir de 1995, com temporadas renovadas e elencos jovens."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A novela adolescente Malhação, da Globo, ganhou esse título por causa do cenário de suas primeiras temporadas. Que cenário era esse?",
    "resposta": "Uma academia de ginástica",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Malha%C3%A7%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Malha%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Malhação é uma série de televisão adolescente brasileira produzida e exibida pela TV Globo entre 24 de abril de 1995 a 3 de abril de 2020, com um total de 27 temporadas e 6.191 episódios. A faixa continuou ainda com reprises de temporadas anteriores até 28 de janeiro de 2022.\n[…]\nEntre a primeira temporada e a primeira fase da terceira temporada a única locação era uma academia no Rio de Janeiro intitulada Malhação – onde havia o centro atlético, piscinas, vestiários, um café – tendo ainda cenas externas gravadas, porém nenhum outro cenário em estúdio. A academia foi construída nos estúdios da Cinédia, em Jacarepaguá, e ocupava uma área de 1.560m².\n[…]\nNa quarta temporada, a trama passou por uma expansão significativa de seus ambientes, diversificando o foco narrativo. Durante a primeira metade da temporada, a academia Malhação — cenário que dava nome ao seriado — assumiu um papel secundário. O protagonismo das cenas deslocou-se para a Praia do Mucuim, para o barco Argonauta e, principalmente, para o universo corporativo das produtoras de vídeo M.R. Produções (Milton Ranieri Produções) e Altas Produções.\n[…]\nFoi a partir desta temporada que Malhação passou a ser totalmente gravada no Projac (atualmente Estúdios Globo), encerrando o ciclo de gravações divididas com os estúdios da Cinédia. Como a proposta do cenário único e do formato ao vivo não agradou ao público, a estrutura da narrativa sofreu alterações na segunda metade da temporada: Retorno da Academia: A Academia Malhação voltou a ser o cenário principal, agora estabelecida em uma nova sede.\n[…]\nOs anos da Academia (1995–1999)\n[…]\nNos primeiros anos, o foco era a academia de ginástica e os dilemas típicos da \"geração saúde\".\n[…]\nMalhação no Twitter\n[…]\nMalhação no Facebook\n[…]\nMalhação no Instagram"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Dona Clotilde",
      "descricao": "Vizinha idosa da vila de Chaves, conhecida como a Bruxa do 71."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Chaves, as crianças chamam a vizinha Dona Clotilde de Bruxa do 71. O que indica esse número no apelido?",
    "resposta": "O número da casa dela",
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_El_Chavo_del_Ocho_characters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_El_Chavo_del_Ocho_characters",
        "situacao": "ok",
        "texto": "El Chavo del Ocho, often shortened to El Chavo, is a Mexican television sitcom series created by Roberto Gómez Bolaños (Chespirito). The show was based on a series of sketches performed on Gómez's eponymous sketch show, Chespirito, which were first performed in 1972. El Chavo became its own series in 1973 and aired until 1980, becoming one of the most popular television programs in the world.\n[…]\nDoña Clotilde (erroneously called Doña Cleotilde by Don Ramón), sometimes referred to as \"La bruja del 71\", is a retired woman who often chases after Don Ramón. She lives in the apartment #71. Because she is old and somewhat eccentric, the kids think she is a witch, and refer to her as \"The Witch from (Apartment) 71\". Some of the adults also refer to her as that, often by mistake, due to the kids frequently calling her a \"witch\".\n[…]\nIn the English dub of the animated series, and the official English subtitles for the Netflix print of the original, she was renamed Miss Pinster (a pun on the word spinster) or nicknamed The Witch of 71 by the children and is voiced in the animated series by Mona Marshall. In Brazil, her name is Dona Clotilde or Bruxa do 71.\n[…]\nThe kids even call her \"La Loca de la Escalera\" (\"The crazy lady from upstairs\"). In the very next episode, Doña Clotilde is back and Doña Eduviges is never seen or mentioned again. Jaimito is assumed to have moved into her apartment or the one next to it, since he usually came from the same direction.\n[…]\nRubia Margot (Portuguese: Loira Margô; English: Margot Haddock, or simply as Blonde Margot) is an actress of some movies and TV shows that Don Ramón falls in love, in the debut, Don Ramón is knocked out that makes a hallucination to Doña Clotilde as the actress, despiste she strongly hates her. El Chavo and the gang believed that Don Ramón is charmed by the witch's spells."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_personagens_de_El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "Esta é uma lista de todos os personagens pertencentes ao seriado mexicano El Chavo del Ocho, um programa criado, protagonizado e roteirizado pelo ator e comediante mexicano Roberto Gómez Bolaños.\n[…]\nO Seu Madruga frequentemente interfere nas brigas entre o Chaves e o Quico, defendendo o bochechudo, mesmo sabendo que a Dona Florinda raramente aceita as suas explicações. Sempre foge do Senhor Barriga para não pagar o aluguel de sua casa, pois sempre lhe deve e atrasa o pagamento (é comum que deva 14 meses) e graças a isso, vive inventando pretextos para que Seu Barriga lhe perdoe a dívida ou que espere ser pago.\n[…]\nProfesor Jirafales (Professor Girafales) (interpretado por Rubén Aguirre; 1973 / 1973–1980 / 1980–1992) — Professor das crianças da série, que vai sempre à vila visitar Dona Florinda, que o convida para tomar uma xícara de café em sua casa. É muitas vezes chamado de inconveniente, por usar um vocabulário culto demais para os padrões da vila e também por interferir em assuntos que não lhe dizem respeito.\n[…]\nGeralmente, as guloseimas são visadas e acabam roubadas pelas crianças da vila. As mesmas crianças, sobretudo a Chiquinha, frequentemente a chamam de Bruxa do 71, como acabou se tornando conhecida por todos, por sua aparência velha e excêntrica. Às vezes, Dona Clotilde se aproveita disso para pregar sustos nas crianças e vê em Glória uma rival quando se trata do seu Madruga.\n[…]\nDono do Restaurante (interpretado por Horacio Gómez Bolaños; 1979) — É o primeiro dono do restaurante. Aparece no episódio \"Os Penetras\". Depois que Chaves destrói toda a festinha do Professor na casa da Dona Florinda, eles vão a este restaurante, onde comem panquecas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Stranger Things",
      "descricao": "Série de ficção científica da Netflix, criada pelos irmãos Duffer, ambientada na cidade fictícia de Hawkins, Indiana."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que jogo de RPG de mesa os meninos de Stranger Things jogam no porão e também inspirou o desenho Caverna do Dragão?",
    "resposta": "Dungeons & Dragons",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stranger_Things",
      "https://pt.wikipedia.org/wiki/Caverna_do_Drag%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stranger_Things",
        "situacao": "ok",
        "texto": "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two volumes in May and July 2022. The fifth and final season\n[…]\nIt has also inspired several books, comics, tie-in media, a pop-up shop, and a Dungeons & Dragons role-playing starter set game based on the series.\n[…]\nStranger Things came about as it sounded similar to another King novel, Needful Things, though Matt noted they still had a \"lot of heated arguments\" over this final title.\n[…]\nSet work was done at Screen Gem Studios in Atlanta and the first season was filmed with a RED Epic Dragon camera. Filming for the first season concluded in early 2016.\n[…]\nThe title sequence uses close-ups of the letters in the Stranger Things title with a red tint against a black background as they slide into place within the title. The sequence was created by the studio Imaginary Forces, formerly part of R/GA, led by creative director Michelle Doughtey. Levy introduced the studio to the Duffer Brothers, who explained their vision of the 1980s-inspired series, which helped the studio to fix the concept the producers wanted.\n[…]\nProtesters pointed out the prison's involvement in the Holocaust and its role in the Ponary massacre; denounced Netflix's partnering with local tourism board Go Vilnius to rent out a refurbished Stranger Things-themed prison cell on Airbnb; and criticized Netflix's decision to repost images of fans' Eleven-inspired numerical tattoos on their Instagram, saying it \"desecrates the living memories of Holocaust survivors\".\n[…]\nStranger Things on Netflix\n[…]\nStranger Things at IMDb\n[…]\nStranger Things at Metacritic\n[…]\nStranger Things at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_do_Drag%C3%A3o",
        "situacao": "ok",
        "texto": "Dungeons & Dragons (Brasil: Caverna do Dragão ) é uma série de animação baseada no jogo de RPG homônimo da TSR, coproduzida pela Marvel Productions, TSR e Toei Animation. A série possui 27 episódios divididos em três temporadas, transmitidas originalmente entre os anos de 1983 e 1985 pela rede de televisão estadunidense CBS. A animação da série ficou a cargo da empresa japonesa Toei Animation. A s\n[…]\nA série mostra uma história de seis crianças americanas dos anos 1980 que tentam voltar a seu mundo após chegarem ao Reino de Dungeons & Dragons em um passeio de montanha russa. O desenho possui várias referências ao universo do jogo de role-playing game Dungeons & Dragons.\n[…]\nO mundo de Caverna do Dragão é simplesmente chamado de \"O Reino\" (Realm of Dungeons & Dragons, no original). Há diversas cidades pequenas (vilarejos ou burgos) espalhadas pelo Reino, chefiadas por pessoas denominadas \"prefeitos\" (ou burgo-mestres). Há cidadelas maiores, cercadas por grandes muros e governadas como um principado ou um reino. A maioria das aglomerações urbanas tem ciência do Vingador e muitas demonstram temor e obediência a ele.\n[…]\nDungeons & Dragons – Le Sourire du dragon: publicado na França, é uma coleção de seis livros que reconta alguns dos episódios mais populares.\n[…]\nDungeons & Dragons 3.5 – Animated Series Handbook: produzido pela Wizards of the Coast e publicado no box de DVD lançado pela Ink & Paint em 2006, o livro de 32 páginas é finalmente uma publicação oficial de D&D sobre Caverna do Dragão. Traz fichas de cada protagonista e uma história para ser jogada, ambientada cronologicamente antes do episódio O Cemitério dos Dragões.\n[…]\nDungeons and Dragons: jogo criado por fãs para o MSX e lançando em 2004 no evento  MSX-Jaú 2004.\n[…]\nSérgio Peixoto (2011). «Dungeons and Dragons ou Caverna do Dragão». Revista Clube dos Heróis (10). São Paulo, Brasil: Editora Minuano. pp. 3–26"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Jovem Sheldon",
      "descricao": "Série de comédia americana exibida de 2017 a 2024, Young Sheldon, sobre a infância do gênio Sheldon Cooper no Texas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A série Jovem Sheldon, de dois mil e dezessete, conta a infância no Texas de um personagem de qual sitcom?",
    "resposta": "The Big Bang Theory",
    "fonte": [
      "https://en.wikipedia.org/wiki/Young_Sheldon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Young_Sheldon",
        "situacao": "ok",
        "texto": "Young Sheldon is an American sitcom television series created by Chuck Lorre and Steven Molaro that aired on CBS from September 25, 2017, to May 16, 2024. A spin-off and prequel to The Big Bang Theory, the series is set from the late 1980s to the mid-1990s and follows the childhood of Sheldon Cooper, a gifted young prodigy growing up with his family in Medford, Texas.\n[…]\nStephen Hawking as himself (voice-only). Hawking previously guest-starred as himself in a recurring role in The Big Bang Theory.\n[…]\nPenn Jillette and Teller as Pimple and Pus, Sheldon's imaginary personifications of his first pimple and its pus, who appear when he begins going through puberty, and promise to return before exploding into nothingness when Missy helps her brother pop his pimple. Teller also appeared in multiple episodes of The Big Bang Theory as Sheldon's father-in-law Larry Fowler.\n[…]\nIn November 2016, it was reported that CBS was in negotiations to create a spin-off of The Big Bang Theory centered on Sheldon Cooper as a young boy.\n[…]\nThe initial idea for the series came from Jim Parsons (who portrays the adult Sheldon on The Big Bang Theory), who passed it along to The Big Bang Theory producers. On March 13, 2017, CBS ordered the spin-off Young Sheldon series, which was created by Lorre and Molaro. Jon Favreau directed and executive produced the pilot. Parsons, Lorre, Molaro and Todd Spiewak also serve as executive producers on the series, for Chuck Lorre Productions and Warner Bros. Television.\n[…]\nYoung Sheldon began airing weekly episodes on CBS on November 2, 2017, after The Big Bang Theory. It premiered as a special preview on September 25, 2017. The one hour series finale aired on May 16, 2024.\n[…]\nNow in the United Kingdom & Republic Of Ireland, TLC UK is the home of Young Sheldon, as well as The Big Bang Theory, Georgie & Mandy’s First Marriage, and Mike & Molly."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Young_Sheldon",
        "situacao": "ok",
        "texto": "Young Sheldon (Estilizado como young Sheldon) (bra: Jovem Sheldon) foi uma série de televisão americana da CBS como um spin-off da série The Big Bang Theory e serve como uma prequela da série, apresentando o personagem Sheldon Cooper como uma criança vivendo com sua família no Leste do Texas e indo ao colégio. A série foi criada por Chuck Lorre e Steven Molaro, e Iain Armitage é apresentado como o\n[…]\nBob Newhart como Arthur Jeffries, um cientista que interpreta o personagem principal do Professor Proton, a série de televisão educacional favorita de Sheldon. Newhart retoma seu papel do personagem de The Big Bang Theory.\n[…]\nA ideia inicial para a série veio de Jim Parsons (que interpreta Sheldon em The Big Bang Theory), que passou aos produtores de The Big Bang Theory. Em 13 de março de 2017, a CBS ordenou a série Young Sheldon, que foi criada por Lorre e Molaro. Jon Favreau serviu como produtor executivo dirigiu o piloto. Parsons, Lorre, Molaro e Todd Spiewak também serão os produtores executivos da série, para Chuck Lorre Productions, Inc., em associação com a Warner Bros. Television.\n[…]\nNo início de março de 2017, Iain Armitage foi escalado como o jovem Sheldon, igualmente com Zoe Perry como sua mãe, Mary Cooper. Perry é a filha de Laurie Metcalf, que interpreta Mary Cooper em The Big Bang Theory. Além disso, Lance Barber estrela como George Cooper, Sr., pai de Sheldon; Raegan Revord estrela como Missy Cooper, a irmã gêmea de Sheldon; e Montana Jordan como George Cooper, Jr., o irmão mais velho de Sheldon.\n[…]\nYoung Sheldon começou a ser transmitido pela CBS em 2 de novembro de 2017, após The Big Bang Theory. Teve uma prévia especial em 25 de setembro de 2017. Em Portugal, a série estreou em 5 de outubro de 2017 pelo canal a cabo AXN White. No Brasil, a estreia da série foi em 8 de outubro de 2017 pelo canal a cabo Warner Channel sob o título de O Jovem Sheldon.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Better Call Saul",
      "descricao": "Série americana de 2015, criada por Vince Gilligan e Peter Gould, sobre o advogado Jimmy McGill, que se torna Saul Goodman."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O advogado trapaceiro Saul Goodman ganhou série própria em dois mil e quinze, depois de aparecer como coadjuvante em qual série?",
    "resposta": "Breaking Bad",
    "fonte": [
      "https://en.wikipedia.org/wiki/Better_Call_Saul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
        "situacao": "ok",
        "texto": "Better Call Saul is an American neo-noir legal crime drama television series created by Vince Gilligan and Peter Gould for AMC. Part of the Breaking Bad franchise, it is a spin-off of Gilligan's previous series, Breaking Bad (2008–2013), to which it serves primarily as a prequel, with some scenes taking place during and after the events of Breaking Bad. Better Call Saul premiered on AMC on Februar\n[…]\nBetter Call Saul is a spin-off of Breaking Bad, a popular crime drama television series that ran from 2008 to 2013. It is primarily a prequel that focuses on Jimmy McGill, a former con artist aiming to gain respectability as a public defender, and chronicles his gradual transformation into his eventual Breaking Bad persona of Saul Goodman, the flamboyant criminal lawyer with ties to the drug cartel.\n[…]\nThe character of Saul Goodman first appeared during Breaking Bad's second season, in an episode that was also titled \"Better Call Saul\". Bob Odenkirk, who portrayed Saul Goodman, had never seen the series prior to his appearance. The character was originally intended to appear in only four episodes, but soon became much more developed than the staff had planned. He stayed on the series and became central to its narrative.\n[…]\nBetter Call Saul had its series premiere on February 8, 2015, and aired for six seasons until its series finale on August 15, 2022. Its episodes are split between two main timelines. The primary timeline begins in 2002, six years before the first episode of Breaking Bad. During this period, where a majority of the series takes place, Saul Goodman mainly practices as a lawyer in Albuquerque, New Mexico under his birthname Jimmy McGill.\n[…]\nBetter Call Saul  has its own set of official multimedia spin-offs and related media within the Breaking Bad franchise. This includes a talk show, several web series and digital shorts, comic books, and an insider podcast."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
        "situacao": "ok",
        "texto": "Better Call Saul é uma série de televisão de drama norte-americana criada por Vince Gilligan e Peter Gould. A série é uma pré-sequência derivada de Breaking Bad, que também foi criada por Gilligan. Os eventos de Better Call Saul decorrem a partir de 2002 e contam a história de um simples advogado chamado James Morgan \"Jimmy\" McGill (Bob Odenkirk), seis anos antes de sua aparição em Breaking Bad, m\n[…]\nAlguns eventos exibidos em Better Call Saul situam-se depois de Breaking Bad, embora sejam explorados de uma forma extremamente breve.\n[…]\nTal como Breaking Bad, Better Call Saul tem recebido uma enorme aclamação por parte da critica, obtendo diversas indicações, como cinco Emmys do Primetime, três Writers Guild of America, dois Critics' Choice Television Awards e um Screen Actors Guild Award. A estreia da série detinha o recorde de maior audiência na história da TV a cabo no momento de sua exibição.\n[…]\nEm julho de 2012, o criador de Breaking Bad, Vince Gilligan anunciou a possibilidade de um spin-off sobre Saul Goodman.\n[…]\nEm julho de 2013, a série ainda precisava do sinal verde. A Netflix foi um dos muitos distribuidores interessados, mas no final, um acordo foi feito entre o canal AMC e a empresa responsável pela produção de Breaking Bad, Sony Pictures Television. Gilligan e Gould são os produtores da série e Gilligan dirigiu o piloto.\n[…]\nBetter Call Saul também usa os saltos no tempo que eram frequentes em Breaking Bad.\n[…]\nBetter Call Saul é filmada em Albuquerque, New Mexico, onde Breaking Bad também foi filmada.\n[…]\nBob Odenkirk como James Morgan \"Jimmy\" McGill/Saul Goodman/Gene Takovic, um advogado e, posterior aos eventos de Breaking Bad, gerente em uma loja da franquia Cinnabon em Omaha, Nebraska.\n[…]\nJonathan Banks como Michael \"Mike\" Ehrmantraut, Investigador particular de Saul. Também um personagem recorrente de Breaking Bad.\n[…]\nBetter Call Saul no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Blackadder",
      "descricao": "Série de comédia britânica da BBC exibida de 1983 a 1989, com Rowan Atkinson como o anti-herói Edmund Blackadder em várias épocas da história inglesa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Antes de Mr. Bean, Rowan Atkinson estrelou que série de humor da BBC, sobre um anti-herói que atravessa várias épocas da história inglesa?",
    "resposta": "Blackadder",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blackadder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blackadder",
        "situacao": "ok",
        "texto": "Blackadder is a series of four period British sitcoms — The Black Adder, Blackadder II, Blackadder the Third and Blackadder Goes Forth — along with several one-off installments, that originally aired on BBC1 from 1983 to 1989. All episodes starred Rowan Atkinson as the antihero Edmund Blackadder and Tony Robinson as Blackadder's servant Baldrick.\n[…]\nBlackadder II, the second series of Blackadder, was written by Richard Curtis and Ben Elton, the team who would also write the subsequent two series, and originally aired on BBC1 from 9 January to 20 February 1986. The series is set in England during the reign of Queen Elizabeth I (1558–1603), often referred to as \"Queenie\", who is portrayed by Miranda Richardson. The principal character is Edmund, Lord Blackadder (Rowan Atkinson), the great-grandson of the original Black Adder.\n[…]\nRowan Atkinson as Edmund Blackadder, the series' protagonist. In The Black Adder he is Prince Edmund, Duke of Edinburgh, nicknamed \"The Black Adder\". In Blackadder II he is Edmund, Lord Blackadder, a nobleman in the court of Queen Elizabeth I. In Blackadder the Third he is Mr. Edmund Blackadder Esq., servant to the Prince Regent. In Blackadder's Christmas Carol he is Ebenezer Blackadder, the Victorian proprietor of a \"moustache shop\".\n[…]\nIn January 2005, Tony Robinson told ITV's This Morning that Rowan Atkinson was more keen than he has been in the past to do a fifth series, set in the 1960s (centred on a rock band called the \"Black Adder Five\", with Baldrick – a.k.a. 'Bald Rick' – as the drummer). In the documentary Blackadder Rides Again, Robinson stated that the series would present Blackadder as the bastard son of Queen Elizabeth II and running a Beatles-like rock band.\n[…]\nIn December 2020, Rowan Atkinson told the Radio Times:\n[…]\nBlackadder at IMDb\n[…]\nBlackadder at BBC Online\n[…]\nBlackadder at British Comedy Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Blackadder",
        "situacao": "ok",
        "texto": "\"The Blackadder\" é a denominação de quatro séries de televisão pseudo-históricas da BBC One. Foram produzidas por John Lloyd e estreladas por Rowan Atkinson como o anti-herói epónimo \"Edmund Blackadder\" e Tony Robinson como seu subalterno/criado, Baldrick.\n[…]\nApesar de cada série ambientar-se em diferentes épocas, todas seguem as fortunas (ou melhor, infortúnios) de Edmund Blackadder (Interpretado por Atkinson), quem em cada série é um membro de uma dinastia familiar inglesa presente em muitos significantes períodos e lugares na História Inglesa.\n[…]\nEmbora o personagem comece sendo pouco inteligente na primeira série e gradualmente se torna inteligente e mais perceptivo através de cada passagem de geração (ao mesmo tempo cai seu status social), cada Blackadder é cínico, covardemente oportunista interessado com a manutenção e o crescimento de seu próprio status e fortuna, independentemente do que o cerca.\n[…]\nEm cada série, Blackadder é usualmente uma cínica (quase moderna) voz que mostra suas pretensões e estupidez daqueles que estão ao seu redor, e que podem ser vistas (através de seus modernos olhos) como as mais ridículas e insanas peripécias da história.\n[…]\nEsse papel foi interpretado nas duas primeiras séries por Lorde Percy Percy (Tim McInnerny), na terceira série por Príncipe George, Príncipe Regente e na quarta pelo Tenente George, os dois últimos interpretados por Hugh Laurie (Dr. House). Cada série foi ambientada em períodos diferentes da História Inglesa, começando em 1485 e terminando em 1917, compreendendo seis episódios de meia hora. A primeira série, feita em 1983, foi chamada The Black Adder.\n[…]\nSeguida de Blackadder II em 1985, Blackadder the Third em 1987 e finalmente Blackadder Goes Forth em 1989.\n[…]\nBlackadder no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Veep",
      "descricao": "Série de comédia da HBO exibida de 2012 a 2019, sobre a vice-presidente americana fictícia Selina Meyer."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que série da HBO deu a Julia Louis-Dreyfus, a Elaine de Seinfeld, o papel de uma vice-presidente dos Estados Unidos?",
    "resposta": "Veep",
    "fonte": [
      "https://en.wikipedia.org/wiki/Veep_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Veep_(TV_series)",
        "situacao": "ok",
        "texto": "Veep is an American political satire comedy television series that aired on HBO from April 22, 2012, to May 12, 2019. The series was created by Armando Iannucci. The series follows Selina Meyer (Julia Louis-Dreyfus), the fictional Vice President of the United States, and her team as they attempt to make their mark and leave a legacy but often instead become mired in day-to-day political games.\n[…]\nJulia Louis-Dreyfus as Selina Meyer (née Eaton): Born Selina Catherine Eaton, a former U.S. Senator from Maryland who, in the start of the series, is the titular Vice President, or \"Veep.\" She has a strained relationship with the President. After the president declines to run for a second term, she begins campaigning for the presidency in Season 3. At the end of Season 3, she becomes president when he resigns for personal issues.\n[…]\nThe site's consensus reads, \"The jokes are funny and Julia Louis-Dreyfus is great in the lead, but Veep is still working to find its voice.\" Hank Stuever of The Washington Post praised the series, writing, \"Thanks to Louis-Dreyfus, and the show's remarkable knack for dialogue and timing, Veep is instantly engaging and outrageously fun.\" Rob Brunner of Entertainment Weekly gave the season a positive review: \"Charmingly goofy as ever, Louis-Dreyfus isn't quite believable as a Vice President – even a sitcom VP whose lack of gravitas is the show's central joke.\n[…]\nThe sixth season received critical acclaim. On Metacritic, it has a score of 88 out of 100 based on 15 reviews, indicating \"universal acclaim\". It has a 94% rating on Rotten Tomatoes based on 36 reviews with an average score of 8.2/10. The site's critical consensus reads, \"A move from the White House hasn't dulled Veep's razor-sharp satirical edge, thanks to Julia Louis-Dreyfus and her castmates' deft comic chemistry.\"\n[…]\nVeep at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Veep",
        "situacao": "ok",
        "texto": "Veep é uma premiada série de televisão norte-americana do gênero comédia. Estreou em 22 de abril de 2012 no canal HBO, e no Brasil três meses depois, em 23 de julho na HBO Brasil. A série concluiu em 12 de maio de 2019 sua sétima e última temporada.\n[…]\nSelina Meyer é Vice-presidente dos Estados Unidos, que pretende se manter o mesmo cargo, integrando a chapa que concorrerá a reeleição, em meio a sua oscilante popularidade.\n[…]\nJulia Louis-Dreyfus — Selina Meyer, vice-presidente dos Estados Unidos / POTUS\n[…]\nAnna Chlumsky — Amy Brookheimer, chefe de gabinete da vice-presidente\n[…]\nTony Hale — Gary Walsh, assessor pessoal da vice-presidente / presidente Meyer\n[…]\nMatt Walsh — Mike McLintock, diretor de imprensa da vice-presidente / Secretário de Imprensa da Casa Branca\n[…]\nReid Scott — Dan Egan, vice-diretor de imprensa da vice-presidente\n[…]\nSufe Bradshaw — Sue Wilson, secretária da vice-presidente\n[…]\nSarah Sutherland — Catherine Meyer, Filha da vice-presidente\n[…]\nA série, criada pelo escocês Armando Iannucci, é inspirada no filme britânico In the loop, escrito e dirigido por ele, do qual Anna Chlumsky também fez parte. A série é ambientada em Washington, D.C. mas filmada em Baltimore. Julia Louis-Dreyfus além de atuar, também é uma das produtoras da série. Em abril de 2015, Iannucci anunciou que estava deixando a produção da série, que passou ser comandada por David Mandel (Curb Your Entusiasm).\n[…]\nEm sua 1ª temporada, Veep teve recepção geralmente favorável por parte da crítica especializada. Com base de 30 avaliações profissionais, alcançou uma pontuação de 72% no Metacritic. Por votos dos usuários do site, atinge uma nota de 7.9, usada para avaliar a recepção do público.\n[…]\nVeep no IMDb\n[…]\n«Veep» (em inglês)  no Metacritic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Twin Peaks",
      "descricao": "Série de TV de mistério criada por David Lynch e Mark Frost, estreada em 1990."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que crime põe em movimento a trama de Twin Peaks, a série de mistério de David Lynch de mil novecentos e noventa?",
    "resposta": "O assassinato de Laura Palmer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Twin_Peaks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Twin_Peaks",
        "situacao": "ok",
        "texto": "Twin Peaks is an American surrealist mystery-horror-drama television series created by David Lynch and Mark Frost. It premiered on ABC on April 8, 1990, and ran for two seasons until its cancellation in 1991. The show returned in 2017 for a third season on Showtime.\n[…]\nThe original run was followed by the 1992 feature film Twin Peaks: Fire Walk with Me, which serves as a prequel to the series. The success created a media franchise, leading to the release of several tie-in books, starting with The Secret Diary of Laura Palmer. Under Lynch's direction, the show's 2017 revival included much of the original cast.\n[…]\nLynch and Frost were less involved and exercised less control in the second season, corresponding with what is generally regarded as a decrease in the show's quality once the identity of Laura Palmer's murderer was revealed.\n[…]\nThe 1992 film Twin Peaks: Fire Walk with Me, serves as a prequel to the television series. It tells of the investigation into the murder of Teresa Banks, and the last seven days in the life of Laura Palmer. David Lynch and most of the television cast returned for the film, with the notable exceptions of Lara Flynn Boyle, who declined to return as Donna Hayward and was replaced by Moira Kelly, and Sherilyn Fenn due to scheduling conflicts.\n[…]\nThe Black Lodge aesthetically inspired Lil Uzi Vert and Young Thug's 2023 music video for \"Up\". Bands like Bastille have penned songs in honor of the show like \"Laura Palmer\", which was influenced by the \"slightly weird, eerie\" atmosphere of the show. Xiu Xiu completed and released a 2017 tribute album titled Plays the Music of Twin Peaks, where they performed several tracks from the show's main soundtrack and leaned into a more experimental sound.\n[…]\nTwin Peaks at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Twin_Peaks",
        "situacao": "ok",
        "texto": "Twin Peaks é uma série de televisão americana de drama, mistério e terror surrealista, criada por Mark Frost e David Lynch. Estreou na ABC em 8 de abril de 1990 e durou duas temporadas até ser cancelada em 1991. A série retornou em 2017 para uma terceira temporada no Showtime.\n[…]\nAmbientada na cidade fictícia de Twin Peaks, no noroeste do Pacífico, a série acompanha uma investigação liderada pelo agente especial do FBI Dale Cooper (Kyle MacLachlan) sobre o assassinato da adolescente local Laura Palmer (Sheryl Lee). A narrativa da série se baseia nas características da ficção policial, mas seu tom misterioso, elementos sobrenaturais e a representação exagerada e melodramática de personagens excêntricos também se inspiram em tropos de terror e novelas americanas.\n[…]\nRay Wise .... Leland Palmer\n[…]\nSheryl Lee .... Laura Palmer/Madeleine Ferguson (18 episódios)\n[…]\nCom a resolução do principal ponto de atração de Twin Peaks (o assassinato de Laura Palmer) no meio da segunda temporada, e com as tramas subsequentes se tornando mais obscuras e arrastadas, o interesse do público começou a diminuir. Esse descontentamento, somado às mudanças de horário da ABC em diversas ocasiões, levou a uma queda drástica na audiência da série, que se tornou um dos programas de televisão mais assistidos nos Estados Unidos em 1990.\n[…]\nO filme de 1992 Twin Peaks: Fire Walk with Me serve como uma prequela para a série de televisão. Ele conta a investigação do assassinato de Teresa Banks e os últimos sete dias na vida de Laura Palmer. David Lynch e a maior parte do elenco de televisão retornaram para o filme, com as notáveis ​​exceções de Lara Flynn Boyle, que se recusou a retornar como Donna Hayward e foi substituída por Moira Kelly, e Sherilyn Fenn devido a conflitos de agenda.\n[…]\nTwin Peaks Gazette",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Prison Break",
      "descricao": "Série americana de 2005 sobre o engenheiro Michael Scofield, que planeja uma fuga de dentro de uma penitenciária."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em Prison Break, por que o engenheiro Michael Scofield assalta um banco de propósito e se deixa prender?",
    "resposta": "Para tirar o irmão da prisão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Prison_Break"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Prison_Break",
        "situacao": "ok",
        "texto": "Prison Break is an American crime drama television series created by Paul Scheuring for Fox. The series revolves around two brothers: Lincoln Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller); Lincoln has been sentenced to death for a crime he did not commit, while Michael devises an elaborate plan to help his brother escape prison and clear his name.\n[…]\nWentworth Miller as Michael Scofield: Michael is Lincoln's brother (his last name is his mother's maiden name), and worked as a structural engineer before devoting full-time to his brother's case. In order to save his brother's life, Michael creates an elaborate plan to help his brother escape from prison.\n[…]\nThe new series was planned to instead begin under the Prison Break brand similar to CSI: Miami and CSI: NY, but ultimately did not go into production.\n[…]\nA video game based on Prison Break was in development for PlayStation 3 and Xbox 360 for release in February 2009, but was cancelled when Brash Entertainment shut down.\n[…]\nDevelopment of Prison Break: The Conspiracy restarted when the game's developer, ZootFly, found a new publisher. The video game was released on March 30, 2010. The game's protagonist is Tom Paxton, a Company employee who is sent inside of Fox River to observe and report every move of Michael Scofield. The game features voices from the original cast members with the exception of Sarah Wayne Callies (Dr. Sara Tancredi).\n[…]\nIn August 2026, Sean Bridgers, Sam Trammell, Kerry Bishé, Robin Weigert, Jean Louisa Kelly and Chris Coy joined the series in recurring roles. In September 2026, Noah Emmerich, Catfish Jean, Augie Duke, Brad Beyer, Greg Vrotsos, Daniel David Stewart and Michael Mosley joined the series in recurring roles. In the same month, it was announced that the filming of the series, which was titled as Prison Break: Black Creek, had begun.\n[…]\nPrison Break at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Prison_Break",
        "situacao": "ok",
        "texto": "Prison Break (Prison Break: Em Busca da Verdade, no Brasil e Fuga da Prisão, em Portugal) é uma série de televisão norte-americana de ação, crime e drama transmitida originalmente pela Fox de 29 de agosto de 2005 a 30 de maio de 2017. Em 2015, a Fox anunciou uma quinta temporada com 9 episódios, que estreou a 4 de abril de 2017.\n[…]\nA história gira em torno de Lincoln Burrows, um homem que foi sentenciado à morte por supostamente ter assassinado o irmão da vice-presidente dos EUA, e seu irmão, Michael Scofield, um engenheiro civil, que cria um plano para resgatá-lo da prisão antes que  seja executado.\n[…]\nMichael, considerado um gênio criativo por seu psiquiatra, tatua o mapa do presídio (camuflado por outras imagens) no corpo  e assalta um banco para, assim ser preso e enviado para a Penitenciária Estadual de Fox River, onde seu irmão está no corredor da morte. Dentro da prisão, Scofield precisa fazer alianças perigosas com presidiários  de alta periculosidade, como T-Bag, um pedófilo assassino condenado a prisão perpétua, e John Abruzzi, ex-chefe da máfia.\n[…]\nO irmão de Michael Scofield, Lincoln Burrows, está no corredor da morte e será executado na cadeira elétrica em alguns meses, após ser condenado por um assassinato, que Michael está convencido que Lincoln não cometeu. Michael decide assaltar um banco para ser preso e levado para a Penitenciária Estadual Fox River, o mesmo local onde seu irmão está a cumprir pena.\n[…]\nEntão, Michael assume a morte de Kim, para evitar que Sara seja detida, e acaba por ser enviado para a Penitenciaría Federal de Sona, no Panamá, considerada uma das mais violentas e perigosas do mundo, juntamente com Bellick, que havia caído em uma armadilha de T-bag, e Mahone, que foi acusado de posse de drogas e é condenado a 10 anos de prisão na mesma prisão que Scofield.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Rick Grimes",
      "descricao": "Protagonista da série The Walking Dead, xerife que lidera um grupo de sobreviventes num mundo de zumbis, vivido por Andrew Lincoln."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No início de The Walking Dead, o xerife Rick Grimes acorda num hospital abandonado. Por que ele estava internado?",
    "resposta": "Levou um tiro em serviço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rick_Grimes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rick_Grimes",
        "situacao": "ok",
        "texto": "Rick Grimes (full name in the television series: Richard D. Grimes; full name in the comic book series: Richie Grimes) is a fictional character and the protagonist of the post-apocalyptic comic book series The Walking Dead, the live-action television series of the same name and its franchise, in which he is portrayed by Andrew Lincoln. Created by writer Robert Kirkman and artist Tony Moore, the ch\n[…]\nIn the season premiere, \"The Day Will Come When You Won't Be\", it is revealed that Negan's two victims were Abraham and Glenn. Negan torments Rick, saying that their deaths were his fault for crossing the Saviors, and threatens to kill them all unless Rick submits. In \"Service\", Rick is forced to abide by Negan's rules and the opposition of Spencer, whom he threatens.\n[…]\nAs the second season of The Walking Dead progressed, Kirkman discerned that the sophomore season revolved around Rick's ability to emerge as a credible leader, proving to the group that he can adequately protect everyone in the group. He continued: \"This is one more thing emerging where you see that this is a guy who can gun down people when they're a threat and can definitely handle himself when it comes to walkers but also cares about people.\n[…]\nIn the seventh season, Zack Handlen for The A.V. Club was critical of the morality of Rick and Tara raiding Oceanside. He assessed, \"...we are forcibly reminded of The Walking Dead's greatest weakness: Rick Must Always Be Right (except when he's trying to fight against his destiny as a leader).\n[…]\nNoel Murray of Rolling Stone ranked Rick Grimes 5th in a list of 30 best Walking Dead characters, saying, \"while former sheriff Rick Grimes has had plenty of stretches where he's been overwhelmed by his emotions or has made outright idiotic decisions, he's ultimately remained the compelling, charismatic character that he was when we first met him.\n[…]\nRick Grimes at AMC\n[…]\nRick Grimes on IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rick_Grimes",
        "situacao": "ok",
        "texto": "Rick Grimes é um personagem fictício da história em quadrinhos em preto e branco The Walking Dead, sendo interpretado por Andrew Lincoln na série de televisão de mesmo nome e na série derivada Fear the Walking Dead, numa participação especial. Criado por Robert Kirkman e o artista Tony Moore, o personagem fez sua estreia nos quadrinhos The Walking Dead em 2003.\n[…]\nGrimes é protagonista da série e é apresentado no inicio como um vice-xerife de uma pequena cidade, onde acorda depois de um coma no hospital, para descobrir que o mundo estava infestado de zumbis. A série centra-se nas tentativas de Grimes de encontrar e proteger sua família e depois em seu papel como líder de um grupo de sobreviventes em um mundo pós-apocalítico.\n[…]\nAo despertar dois meses depois do apocalipse ter iniciado, ele é confundido com um Walker (The Walking Dead foi criado em um universo onde os famosos filmes de zombies nunca existiram, tendo assim como se os personagens não soubessem com o que estavam lidando), e é atingido por uma pá na cabeça dado por um jovem chamado Duane Jones, filho de Morgan Jones, ficando assim desacordado. Pouco tempo depois, Rick acorda e Morgan explica o apocalipse zumbi.\n[…]\nEm preparação para o papel, Lincoln procurou inspiração da série dramática americana Breaking Bad, bem como no filme americano High Noon (1952). Uma vez que ele sentiu que The Walking Dead imitou as obras cinematográficas americanas, Lincoln achou High Noon muito útil em projetar um personagem do país, como Rick Grimes.\n[…]\nEste, é especificamente mostrado como Rick luta quando acabou sendo dada a oportunidade de voltar à normalidade.\n[…]\nRobert Kirkman sentia que o episódio \"Nebraska\", demonstrava que Rick Grimes não estava delirando, como Shane o acusou de estar:\n[…]\n«Rick Grimes» (em inglês)  no Internet Movie Database\n[…]\n«Rick Grimes» (em inglês)  na AMC",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Um Maluco no Pedaço",
      "descricao": "Sitcom americana exibida de 1990 a 1996, estrelada por Will Smith como um jovem da Filadélfia que vai morar com os tios ricos em Bel-Air."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a música de abertura de Um Maluco no Pedaço, por que a mãe de Will o manda da Filadélfia para Bel-Air?",
    "resposta": "Ele se meteu numa briga",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air",
        "situacao": "ok",
        "texto": "The Fresh Prince of Bel-Air is an American television sitcom created by Andy and Susan Borowitz that aired on NBC from September 10, 1990, to May 20, 1996. The series stars Will Smith as a fictionalized version of himself, a street-smart teenager born and raised in West Philadelphia who is sent to live with his wealthy uncle and aunt in Bel-Air, Los Angeles, where his lifestyle often clashes with \n[…]\nAuthor Willie Tolliver noted: \"What The Fresh Prince did accomplish was to put Smith and his character Will into an environment of affluence and possibility, thus changing the terms of his own Black identity. This social and cultural mobility is central to Smith's racial significance, and this will become evident again and again; he moves the image of the Black male into unaccustomed spaces just as Smith himself was in the process of conquering Hollywood.\"\n[…]\nIn 2019, a mock trailer titled Bel-Air was uploaded on YouTube, written and directed by Morgan Cooper, for a darker, more dramatic re-imagining of the sitcom. Will Smith subsequently heavily praised the fan film, commenting that \"Morgan did a ridiculous trailer for Bel-Air. Brilliant idea, the dramatic version of The Fresh Prince for the next generation\", expressing interest in expanding the idea beyond the short film into a full Bel-Air reboot series.\n[…]\nMuch of the cast virtually reunited over a video call in an episode of Smith's Snapchat reality series Will From Home that premiered in April 2020. A reunion of the surviving original cast, The Fresh Prince Reunion, aired on HBO Max in November 2020. Among other reminisces, Janet Hubert appeared, also appearing around this time in a joint radio interview with Smith where the two reconcile.\n[…]\nThe Fresh Prince of Bel-Air at epguides.com\n[…]\nThe Fresh Prince of Bel-Air at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Fresh_Prince_of_Bel-Air",
        "situacao": "ok",
        "texto": "The Fresh Prince of Bel-Air (bra: Um Maluco no Pedaço; prt: O Príncipe de Bel-Air) é uma sitcom americana criada por Andy e Susan Borowitz, produzida por Quincy Jones e exibida originalmente pela rede NBC, de 10 de setembro de 1990 até 20 de maio de 1996. Um sucesso de audiência, The Fresh Prince of Bel-Air totalizou 148 episódios ao longo de seis temporadas.\n[…]\nA série é estrelada por Will Smith – até então conhecido por sua carreira musical com a dupla DJ Jazzy Jeff & the Fresh Prince – como versão fictícia de si mesmo, um jovem nascido e criado no oeste da Filadélfia que vai morar com seus tios ricos no luxuoso bairro de Bel Air (Los Angeles). O elenco principal é completado por James Avery, Alfonso Ribeiro, Karyn Parsons, Tatyana M.\n[…]\nApós uma briga com valentões drogados na cidade de Filadélfia, a mãe de Will (Vernee Watson-Johnson), temendo que o futuro do filho passasse pelo mundo do crime, resolve enviá-lo para a mansão de sua irmã Vivian (Janet Hubert-Whitten nas três primeiras temporadas; Daphne Maxwell Reid a partir da quarta temporada), uma professora, e de seu cunhado Phillip Banks (James Avery) marido de Vivian e advogado (que depois se tornou juiz), muito bem estabelecido, que mora no elegante e luxuoso bairro de Bel-Air em Los Angeles, para que o filho possa ter uma educação de alto nível.\n[…]\nO autor Willie Tolliver observou: \"O que Um Maluco no Pedaço conseguiu foi colocar Smith e seu personagem Will em um ambiente de riqueza e possibilidades, mudando assim os termos de sua própria identidade negra. Essa mobilidade social e cultural é central para a importância racial de Smith, e isso se tornará evidente repetidamente; ele move a imagem do homem negro para espaços desconhecidos, assim como o próprio Smith estava no processo de conquistar Hollywood\".\n[…]\nThe Fresh Prince of Bel-Air no IMDb",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Chaves",
      "descricao": "Seriado humorístico mexicano criado por Roberto Gómez Bolaños, sobre um menino que vive numa vila."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na vila do seriado Chaves, onde o menino costuma se enfiar para se esconder ou ficar sozinho?",
    "resposta": "Dentro de um barril",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chaves",
      "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chaves",
        "situacao": "desambiguacao",
        "texto": "Chaves pode referir-se a:\nPlural de chave\n\n\n== Portugal ==\nChaves (Portugal) — cidade e município no distrito de Vila Real\nDiocese de Águas Flávias — diocese titular católica sediada em Chaves\nGrupo Desportivo de Chaves\n\n\n== Brasil ==\nChaves (Pará) — município\n\n\n== Ficção ==\nEl Chavo del Ocho — série de televisão mexicana intitulada Chaves no Brasil e em Angola\nEl Chavo (personagem) — personagem d"
      },
      {
        "url": "https://en.wikipedia.org/wiki/El_Chavo_del_Ocho",
        "situacao": "ok",
        "texto": "El Chavo, also known as El Chavo del Ocho is a Mexican television sitcom created by Roberto Gómez Bolaños and produced by Televisa. It premiered on February 26, 1973, and concluded on January 7, 1980, after 7 seasons and 312 episodes, and aired across Latin America and Spain.\n[…]\nIn 2013, an independent funk group known as Bonde TNT made a song in homage to El Chavo del Ocho entitled Piripaque do Chaves (El Chavo's Stiffs), which went viral on the Internet with a clip of the group members dressed up as the protagonist dancing.\n[…]\nwhich again featured the presence of Ramón Valdés in the first episodes, this time using the original name of his character Don Ramón and Kiko returned to wear his classic iconic black outfit from El Chavo del Ocho.\n[…]\nSome attempts to replicate the success of El Chavo del Ocho have also occurred in Brazil. One of the first attempts occurred in 1997 when the TV channel Rede Manchete made the children's TV series Vila do Tiririca starring the comedian Tiririca, which only lasted one season.\n[…]\nLater, in 2004, RedeTV! produced another series, Vila Maluca, which, unlike Miguelito, was better accepted by the public and lasted until 2006.\n[…]\nBoth comics feature stories with El Chavo and El Chapulín Colorado. During this period, some comics focused on Chaves were published under the title Gibizinho.\n[…]\nDuring a visit to Peru in 2008, Roberto Gómez Bolaños told the media that he originally planned to make a proper finale to El Chavo del Ocho. In this finale, El Chavo would die after being run over by a car while trying to save another kid. However, one of Bolaños' daughters, who is a psychologist, convinced her father to drop the idea since, according to her, it could depress many children and even lead them to commit suicide.\n[…]\nEl Chavo del Ocho at IMDb"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Xica da Silva (telenovela)",
      "descricao": "Telenovela da Rede Manchete exibida a partir de 1996, escrita por Walcyr Carrasco e estrelada por Taís Araújo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A novela Xica da Silva, exibida pela Manchete em mil novecentos e noventa e seis, se passa em que povoado mineiro do século dezoito, centro da extração de diamantes?",
    "resposta": "Arraial do Tijuco",
    "distratores": [
      "Vila Rica",
      "Mariana",
      "São João del-Rei"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Xica_da_Silva_(telenovela)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Xica_da_Silva_(telenovela)",
        "situacao": "ok",
        "texto": "Xica da Silva é uma telenovela brasileira produzida pela Rede Manchete e exibida de 17 de setembro de 1996 a 11 de agosto de 1997, em 231 capítulos, substituindo Tocaia Grande e antecedendo Mandacaru.\n[…]\nPela personagem, Taís Araújo se tornou a terceira atriz negra a protagonizar uma telenovela brasileira, após Iolanda Braga em A Cor da Sua Pele (1965) e Ruth de Souza em A Cabana do Pai Tomás (1969). Xica da Silva foi a segunda telenovela cujos protagonistas são baseados em pessoas e fatos reais: Francisca da Silva de Oliveira de fato viveu no Arraial do Tijuco, hoje Diamantina, no século XVIII.\n[…]\nEntre as cidades com maior número de garimpos, estava Arraial do Tijuco, atualmente conhecida por Diamantina, onde se desenrola a trama de Xica da Silva, a negra escravizada que tornou-se sinhá, e uma das personalidades mais influentes nas decisões locais, o que escandalizou a sociedade de sua época.\n[…]\nO Rei de Portugal exige que ele regresse ao país, deixando o Arraial do Tijuco sob o comando de Conde Valladares. Sem o apoio do marido, já em terras lusitanas, Xica acaba presa, denunciada por Violante, acusada de bruxaria.\n[…]\nCom a reconstituição fiel a época e o forte apelo erótico, Xica da Silva levou a Rede Manchete, – na época já a beira da falência – ao segundo lugar de audiência. Para isso, a emissora investiu 6 milhões de dólares e construiu em Maricá no Rio de Janeiro a cidade cenográfica de Arraial do Tijuco. Algumas cenas foram gravadas em Minas Gerais e as últimas cenas de Violante em um castelo foram registradas no Palácio do Marques de Pombal em Portugal.\n[…]\nQüenda - Patrícia Amaral (Tema de Xica)\n[…]\nTema de Xica(Qüenda) - Marcus Viana (Tema de Xica e João Fernandes)\n[…]\nXica da Silva no IMDb"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Dark",
      "descricao": "Série alemã de ficção científica da Netflix, lançada em 2017, sobre viagens no tempo e quatro famílias."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidadezinha alemã fictícia, cercada de floresta e vizinha de uma usina nuclear, se passa a série Dark?",
    "resposta": "Winden",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dark_(TV_series)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dark_(TV_series)",
        "situacao": "ok",
        "texto": "Dark is a German science-fiction mystery thriller television series created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. The story primarily follows four families from the fictional town of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance, unraveling a sinister time travel conspiracy that spans several generations.\n[…]\nChildren start vanishing from the German town of Winden, bringing to light the fractured relationships, double lives, and dark pasts of four families living there and unfurling a mystery that spans four generations.\n[…]\nThe second season continues the families' attempts to reunite with their missing loved ones several months after the first-season finale, in 2020, 1987 and 1954, respectively. Additional storylines are set in 2053 and 1921. The second season introduces Sic Mundus Creatus Est, a major faction in the ongoing battle for the ultimate fate of the people of Winden and the world. The season counts down to the apocalypse.\n[…]\nThe tension between each of these conflicting ideas is so interwoven, making it hard to discern where one ends and the other begins. And so Dark concludes not with a hard endpoint on a line, but by elegantly and satisfyingly circling back into itself.\"\n[…]\n[...] [It] manages to neatly tie up all of its loose ends to finally find the one true \"origin,\" so, at last, the town of Winden can free itself from the trappings of time and fate.\" GameSpot listed it as one of the year's ten best TV shows, with one of its writers Mike Rougeau stating, \"what really impressed us about Season 3 is how it wrapped things up, even while continuing the tradition of adding yet another new dimension (so to speak) to the show's tangled timelines.\n[…]\nDark matter\n[…]\nDark – The Official Guide\n[…]\nDark at IMDb\n[…]\nDark at Metacritic\n[…]\nDark at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dark",
        "situacao": "ok",
        "texto": "Dark (estilizado como D A R K ou D A Я K) é uma aclamada e premiada série alemã de drama, suspense e ficção científica criada  por Baran bo Odar e Jantje Friese e eleita em votação popular no site Rotten Tomatoes como a melhor série original Netflix.\n[…]\nA trama da série se passa na fictícia cidade alemã de Winden, quando quatro famílias iniciam uma busca desesperada por respostas após o desaparecimento de duas crianças que aparenta estar relacionado a um outro desaparecimento ocorrido 33 anos antes. Aos poucos, segredos familiares passam a ser expostos e um complexo mistério envolvendo três gerações começa a se revelar.\n[…]\nO desaparecimento recente de crianças na pequena cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos e coloca quatro famílias no centro de uma teia de mistérios envolvendo uma misteriosa caverna, uma usina nuclear suspeita e um estranho homem recém-chegado na cidade.\n[…]\nA história começa em 2019, mas se espalha para incluir histórias em 1986 e 1953 através de viagens no tempo, à medida que certos personagens das principais famílias da cidade se conscientizam da existência de um buraco de minhoca que permite as viagens no sistema de cavernas abaixo da usina nuclear local, que é administrada pela influente família Tiedemann.\n[…]\nA terceira e última temporada segue as quatro famílias ao longo do tempo na esteira do apocalipse em 2020, enquanto também introduz um mundo paralelo cujos eventos estão interconectados com aqueles do primeiro mundo. A temporada se passa principalmente em 1888, 1954, 1987, 2020 e 2053 no primeiro mundo e em 2019 e 2052 no segundo mundo, enquanto os personagens trabalham para encontrar uma saída do ciclo repetitivo de eventos em Winden em ambos os mundos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Seu Madruga",
      "descricao": "Personagem do seriado Chaves, o pai da Chiquinha e vizinho do Chaves, interpretado por Ramón Valdés."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em Chaves, Seu Madruga vive fugindo do Seu Barriga porque está devendo quantos meses de aluguel?",
    "resposta": "Catorze meses",
    "distratores": [
      "Doze meses",
      "Dez meses",
      "Vinte meses"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Seu_Madruga"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Seu_Madruga",
        "situacao": "ok",
        "texto": "Seu Madruga (no original, Don Ramón) é um personagem de Chaves. Interpretado pelo ator mexicano Ramón Valdés. Ele é um viúvo desempregado que mora no apartamento nº. 72 (nº. 10 no desenho animado) na vila, propriedade do Seu Barriga. É pai da Chiquinha e neto da Dona Neves.\n[…]\nNenhum dos dois tem uma relação muito boa com o Senhor Barriga, a quem deve sempre catorze meses de aluguel (quinze, no episódio \"O Despejo do Seu Madruga\") e por isso o evita tanto quanto possível, como quando vem bater à porta do seu apartamento e sai pela janela sem que ele o veja, ou às vezes o distrai com outros assuntos para que não lhe cobre o aluguel, como num episódio em que diz que vai ver o Monterrey (time de futebol preferido do senhor Barriga, Corinthians em português).\n[…]\nNo episódio da terceira temporada de Chaves em Desenho Animado, \"Não se Vá, Nhonho\", Seu Madruga fica feliz ao saber que o Senhor Barriga está se mudando, até que Dona Florinda o lembra o quão bom o Senhor Barriga tem sido com ele por não tê-lo expulsado mesmo embora ele lhe deva catorze meses de aluguel, e para assustá-lo, ela lhe disse que o novo dono do bairro iria expulsá-lo.[carece de fontes]?\n[…]\nO fato de usar sempre as mesmas roupas foi refletido por Chaves, que no episódio \"O Futebol Americano\" (1976), quando Seu Madruga disse ao professor Girafales que as crianças não teriam motivação para brincar porque \"não gostavam da camisa\", Chaves respondeu a Seu Madruga que era óbvio que ele adorava a camisa, pois sempre usava a mesma. Nas primeiras aparições, a camiseta preta foi substituída por uma camiseta branca, amarela ou turquesa.\n[…]\nO Wikiquote possui citações de ou sobre: Don Ramón"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Round 6",
      "descricao": "Série sul-coreana da Netflix sobre centenas de pessoas endividadas que disputam jogos mortais por um prêmio milionário."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na primeira temporada de Round 6, quantos jogadores endividados entram na disputa pelos jogos mortais?",
    "resposta": "456",
    "distratores": [
      "300",
      "365",
      "500"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Squid_Game"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Squid_Game",
        "situacao": "ok",
        "texto": "Squid Game (Korean: 오징어 게임; RR: Ojingeo geim) is a South Korean dystopian survival thriller drama television series created, written, and directed by Hwang Dong-hyuk for Netflix. The series depicts a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series of children's games that result in death if eliminated, for the chance to win a ₩45.6 bi\n[…]\nInitially, Netflix had named the series Round Six, rather than Squid Game as Hwang had suggested; according to Netflix's vice president for content in Asia Kim Minyoung, while they knew that the name \"squid game\" would be familiar to Korean viewers from the children's game, it \"wouldn't resonate because not many people would get it\", and opted to use Round Six (stylized as Round 6) as it self-described the nature of the competition.\n[…]\nIn Thailand, several events were hosted to promote Squid Game, including a recreation of the skipping rope game at Lan Khon Mueang, a town square near Wat Suthat and Giant Swing.\n[…]\nNetflix announced a reality competition series, Squid Game: The Challenge, in June 2022 along with an open casting call. The ten-episode series saw 456 players competing for a US$4.56 million cash prize, with challenges based on those in the show. Production was a joint work of Studio Lambert and The Garden. The filming started in early 2023 at Cardington Studios in Bedfordshire.\n[…]\nThe first five episodes of the show were released internationally on November 22, 2023, while four more episodes were released on November 29, with its finale released on December 6; a second season was announced. On 10 July 2025, the show was renewed for a third season. On 3 March 2026, Netflix announced that the third season, retitled Squid Game: The VIP Challenge, would feature 8 celebrity VIP players.\n[…]\nSquid Game on Netflix\n[…]\nSquid Game at IMDb\n[…]\nSquid Game at HanCinema"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Squid_Game",
        "situacao": "ok",
        "texto": "Squid Game (coreano: 오징어 게임; RR: Ojing-eo Geim: \"jogo da lula\"), conhecida como Round 6 no Brasil, é uma série de televisão sul-coreana de drama e thriller transmitida pela Netflix, escrita e dirigida por Hwang Dong-hyuk, sobre 456 jogadores bem endividados que participam de um misterioso jogo de sobrevivência com consequências fatais, competindo pelo prêmio de 45,6 bilhões de won, que vai se acum\n[…]\nSquid Game (ou Round 6) conta a história de 456 pessoas que são convidadas a arriscar suas vidas em um misterioso jogo de sobrevivência do tipo Battle Royale, composto por seis brincadeiras infantis (seis \"rounds\", daí o título em português), que disputam um prêmio de ₩45,6 bilhões (US $38,7 milhões). Como a espinha dorsal, o destaque é Seong Gi-Hun (Lee Jung-jae) que recebe o número 456. Gi-hun é um motorista divorciado e viciado em jogos de azar.\n[…]\nNo agregador de críticas Rotten Tomatoes, que categoriza as opiniões apenas como positivas ou negativas, a primeira temporada tem um índice de aprovação de 94% calculado com base em 33 comentários dos críticos que é seguido do consenso: \"A brutalidade inflexível do Squid Game não é para os fracos de coração, mas comentários sociais afiados e um núcleo surpreendentemente terno manterão os espectadores grudados na tela – mesmo que seja enquanto assistem entre os dedos\".\n[…]\nPouco depois do lançamento do programa, os usuários das redes sociais adaptaram alguns dos jogos apresentados no Squid Game como desafios da Internet, incluindo o primeiro jogo \"Red Light, Green Light\" e o segundo jogo de biscoitos coreanos dalgona (chamados em inglês de honeycomb). Os usuários do ambiente interativo Roblox criaram vários jogos no sistema que foram baseados em um ou mais dos desafios do Squid Game.\n[…]\nSquid Game na Netflix\n[…]\nSquid Game no IMDb\n[…]\nSquid game  (em inglês) no Rotten Tomatoes\n[…]\nSquid Game no HanCinema (em inglês)\n[…]\nSquid game (em coreano) no Daum",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "2-5499 Ocupado",
      "descricao": "Telenovela da TV Excelsior, estrelada por Tarcísio Meira e Glória Menezes, considerada a primeira novela diária da TV brasileira."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Com Tarcísio Meira e Glória Menezes, a novela Dois Cinco Quatro Nove Nove Ocupado, da TV Excelsior, a primeira exibida diariamente no Brasil, estreou em que ano?",
    "resposta": "1963",
    "distratores": [
      "1958",
      "1960",
      "1966"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/2-5499_Ocupado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/2-5499_Ocupado",
        "situacao": "ok",
        "texto": "2-5499 Ocupado é uma telenovela mais conhecida por ter sido a primeira telenovela diária da televisão brasileira. Foi produzida pela extinta TV Excelsior e exibida de 22 de julho a 7 de setembro de 1963 no horário das 19h30, totalizando 42 capítulos. Foi uma obra adaptada de Dulce Santucci para o original do argentino Alberto Migré com a direção de Tito Di Miglio.\n[…]\nHá poucos registros da novela devido ao fato de que antigamente as fitas eram reutilizadas, gravando novos capítulos e novas novelas por cima de produções antigas."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Malhação",
      "descricao": "Novela adolescente da TV Globo exibida a partir de 1995, com temporadas renovadas e elencos jovens."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A novela adolescente Malhação, que lançou muitos atores jovens da Globo, estreou em que ano?",
    "resposta": "1995",
    "distratores": [
      "1992",
      "1998",
      "2000"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Malha%C3%A7%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Malha%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Malhação é uma série de televisão adolescente brasileira produzida e exibida pela TV Globo entre 24 de abril de 1995 a 3 de abril de 2020, com um total de 27 temporadas e 6.191 episódios. A faixa continuou ainda com reprises de temporadas anteriores até 28 de janeiro de 2022.\n[…]\nO projeto foi batizado como Malhação, inspirado pelo nome da academia em que se centralizava a trama, e o formato anunciado como uma soap opera – estilo famoso nos Estados Unidos mas ainda desconhecido no Brasil, baseando-se em histórias com longa duração de anos e dividido em temporadas, onde cada uma delas difere o elenco e a trama da anterior. A série estreou em 24 de abril de 1995 às 17h15. Maria Mariana, autora de Confissões de Adolescente, chegou a escrever a quinta e sexta temporadas.\n[…]\nOs anos da Academia (1995–1999)\n[…]\nMalhação gerou diversos produtos, especialmente entre 1995 e 1999, quando foram lançados sandálias, linha de roupas e assessórios esportivos e cosméticos. Em 1995 a Editora Globo investiu R$ 500.000 no lançamento de uma revista mensal de mesmo título da série, inspirada pelos formatos da Capricho e Atrevida, sendo focada em temas relacionados ao universo adolescente, permanecendo nas bancas até 1997.\n[…]\nO primeiro capítulo da primeira temporada apresentou índices de audiência satisfatórios, quase duplicando a audiência da TV Globo na faixa das 17h30, com uma média de 31 pontos em São Paulo. O programa humorístico Escolinha do Professor Raimundo, que ocupava o horário da série, tinha médias entre 15 e 18 pontos. Do início de 2004 até novembro de 2005, Malhação obteve uma média de 34 pontos no ibope. A meta de audiência de Malhação foi, de 1995 a 2006, de 25 pontos.\n[…]\nSite Oficial na Globo Internacional\n[…]\nMalhação no Twitter\n[…]\nMalhação no Facebook\n[…]\nMalhação no Instagram"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.75 — 2026-10-23**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
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
- no máximo **5 perguntas por âncora** no banco inteiro (3 até 2026-10-23), somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Saturação:** o áudio conta no limite de 5 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
