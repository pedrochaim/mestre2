Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Culinária e Bebidas** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Croissant",
      "descricao": "Pão folhado amanteigado em forma de meia-lua, símbolo da padaria francesa"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do croissant, pão folhado símbolo da padaria francesa, quer dizer o quê em francês?",
    "resposta": "Crescente",
    "distratores": [
      "Folhado",
      "Enrolado",
      "Amanteigado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Croissant",
      "https://pt.wikipedia.org/wiki/Croissant"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Croissant",
        "situacao": "ok",
        "texto": "A croissant (; French: [kʁwasɑ̃] ) is a Viennoiserie in a crescent shape made from a laminated yeast dough that sits between a bread and a puff pastry.\n[…]\nCrescent-shaped breads have been made since the Renaissance, and crescent-shaped cakes possibly since antiquity. The modern croissant was developed in the early 20th century, when French bakers replaced the brioche dough of the kipferl with a yeast-leavened laminated dough.\n[…]\nUncooked viennoiserie dough can also be wrapped around any praline, almond paste, or chocolate before it is baked (in the last case, it becomes like pain au chocolat, which has a different, non-crescent, shape), or sliced to include sweet or savoury fillings. It may be flavored with dried fruit such as sultanas or raisins, or other fruits such as apples. In France and Spain, croissants are generally sold without filling and eaten without added butter, but sometimes with almond filling.\n[…]\nIn the German-speaking part of Switzerland, the croissant is typically called a Gipfeli. Variants include Buttergipfeli, for the traditional  croissant, chocolate filled versions called Schoggigipfeli and Laugegipfeli which are actually a pretzel made in a crescent shape.\n[…]\nOn 11 November, St. Martin's Day is celebrated in the Polish region of Greater Poland, mainly in its capital city Poznań. On this day, the people of Poznań purchase and eat considerable amounts of sweet, crescent-shaped pastries called rogale świętomarcińskie ('St. Martin's croissants'). They are made specially for this occasion from puff pastry filled with ground white poppy seeds, almonds, raisins, and nuts."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Croissant",
        "situacao": "ok",
        "texto": "Um croissant (pronúncia em francês: /kʁwasɑ̃/; tr.: ‘crescente’), por vezes aportuguesado como croassã ou, mais raramente, croassão, é um tipo de viennoiserie de massa folhada em formato de meia-lua, feito de farinha, açúcar, sal, leite, fermento, manteiga e ovo para pincelar.\n[…]\nA sua origem é atribuída aos padeiros de Viena, na Áustria, onde era conhecido pelo nome de Kipferl desde o século XIII, sendo feito de tamanhos variados. Segundo a tradição, em 1683 (Batalha de Viena), enquanto trabalhavam à noite, os padeiros de Viena ouviram o barulho que o inimigo otomano fazia ao cavar um túnel e, ao dar o alarme sobre o que estava acontecendo, conseguiram impedir o êxito do ataque. O formato em crescente seria alusivo à bandeira do Império Otomano.\n[…]\nOs franceses, ainda hoje, chamam este tipo de pão amanteigado de viennoiserie.\n[…]\nAlguns pesquisadores atribuem sua invenção ao comerciante vienense de origem polaca Franz Georg Kolchitsky, que vivia em Constantinopla. Esse homem conheceu o café nessa cidade em 1475 e, com cerca de 500 sacas do produto abandonadas pelos Turcos após derrota em batalha, abriu um café onde passou a servir a bebida. Aí, para acompanhar o café, inventou esse pão em formato de crescente.\n[…]\nMaria Antonieta, originária de Viena, introduziu e popularizou o croissant na França, a partir de 1770. Hoje, ele é um elemento tradicional do desjejum francês, tomado junto com café com leite.\n[…]\nUm bom croissant deve ter um bom aspecto, como uma lua em quarto crescente, com uma crosta crocante e uma bela cor dourada. As pontas devem estar descoladas do meio, e o miolo deve ser alvo, aerado, e mostrar a consistência certa.\n[…]\nCroissant aux amandes"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Sanduíche",
      "descricao": "Alimento formado por fatias de pão com recheio entre elas, cujo nome vem do quarto conde de Sandwich."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a história mais contada, o sanduíche deve o nome a um nobre inglês do século dezoito. Que título esse nobre tinha?",
    "resposta": "Conde de Sandwich",
    "distratores": [
      "Duque de Wellington",
      "Conde de Cardigan",
      "Duque de Bedford"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sandwich",
      "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sandwich",
        "situacao": "ok",
        "texto": "A sandwich is a dish typically consisting variously of meat, cheese, sauces, and vegetables used as a filling between slices of bread, or placed atop a slice of bread (known as an open sandwich); or, more generally, any dish in which bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient food in the Western world, and over time it has become prev\n[…]\nThe use of some kind of bread or bread-like substance to lie under some other food, or to scoop it up and enclose or wrap it, is found in many cultures historically. Before being known as a \"sandwich\", this food combination seems to have been known as \"bread and meat\" or \"bread and cheese\". These two phrases are found throughout English drama from the 16th and 17th centuries.\n[…]\nThe State of New York has a definition of \"sandwich\" that explicitly includes burritos, gyros, hot dogs, and wraps and pita sandwiches.\n[…]\nSandwiches have been widely sold in cafes, railway stations, pubs and diners since the invention of sliced bread in the 1920s. Sandwiches kept unwrapped, drying up and edges curling, until they were sold, were widely found in Britain until the 1970s. Cafes and buffets in railway stations and on trains were notorious, and the term \"British Rail sandwich\" was often used satirically.\n[…]\nIn 1979 the British store chain Marks & Spencer introduced a small range of chilled, pre-made sandwiches sold in wedge-shaped boxes, sealed to keep them fresh. As they proved popular, a small experiment involving five stores rapidly grew to cover more than one hundred stores. Within a year, the store was looking for ways to manufacture sandwiches at an industrial scale. By the end of the decade, the British sandwich industry had become worth £1 billion.\n[…]\nIn 2017, the British sandwich industry made and sold £8 billion worth of sandwiches.\n[…]\nThe British Sandwich Association"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Montagu,_4th_Earl_of_Sandwich",
        "situacao": "ok",
        "texto": "John Montagu, 4th Earl of Sandwich, PC, FRS (13 November 1718 – 30 April 1792) was a British statesman who succeeded his grandfather Edward Montagu, 3rd Earl of Sandwich, as the Earl of Sandwich in 1729, at the age of ten. He held various military and political offices during his life, including Postmaster General, First Lord of the Admiralty, and Secretary of State for the Northern Department. He\n[…]\nSome historians have suggested that Lord Sandwich was not perhaps as incompetent as suggested, but that previous historians have placed too much emphasis on sources from his political enemies.\n[…]\n1718: The 4th Earl of Sandwich is born on 13 November 1718\n[…]\n1729: Succeeds his grandfather, Edward Montagu, 3rd Earl of Sandwich, in the earldom\n[…]\nThe comedian Woody Allen wrote a short, satirical biography of the Earl, detailing his struggles to create the perfect sandwich, which was published as an article in The New Yorker on 8 October 1966.\n[…]\nActor Bill Nighy was cast as Lord Sandwich in the TV series, Longitude in 2000.\n[…]\nLevy, Martin (January 2005). Love & Madness: The Murder of Martha Ray, Mistress of the Fourth Earl of Sandwich Paperback. Harper Perennial. pp. 240 pages. ISBN 0-06-055975-6.\n[…]\nRodger, N. A. M (1993). The Insatiable Earl: A Life of John Montagu, Fourth Earl of Sandwich 1718-1792. London: HarperCollins. pp. 425 pages. ISBN 978-0-002-15784-1.\n[…]\nRodger, N. A. M. \"Montagu, John, fourth earl of Sandwich (1718–1792)\". Oxford Dictionary of National Biography (online ed.). Oxford University Press. doi:10.1093/ref:odnb/19026. (Subscription, Wikipedia Library access or UK public library membership required.)\n[…]\n\"Montagu, John, 4th Earl of Sandwich (MNTG735J)\". A Cambridge Alumni Database. University of Cambridge.\n[…]\n\"Montague family history page\". Archived from the original on 18 May 2000.\n[…]\nGuide to the papers of Lord Sandwich, 1718–1792 held and digitised by the National Library of Australia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sandu%C3%ADche",
        "situacao": "ok",
        "texto": "Um sanduíche (plural sanduíches; também chamado sandes em Portugal, chandula em Angola e, coloquialmente no Brasil, sanduba ou lanche) é um prato que consiste tipicamente em carne, queijo, molhos ou vegetais usados como recheio entre fatias de pão, ou colocados sobre uma fatia; ou, de forma mais geral, qualquer prato em que o pão serve como recipiente ou envoltório para outro alimento.\n[…]\nO sanduíche surgiu como alimento portátil e prático no mundo ocidental e tornou-se ubíquo globalmente, sendo hoje uma das refeições rápidas mais consumidas. É comum no almoço, lanches ou piqueniques, podendo ser servido quente ou frio, caseiro ou industrial.\n[…]\nO nome moderno surgiu em 1762 com John Montagu, 4.º Conde de Sandwich, aristocrata inglês que, para não interromper jogos de cartas, pedia rosbife entre duas fatias de pão torrado. A moda espalhou-se rapidamente pela aristocracia londrina e, no século XIX, com a Revolução Industrial, tornou-se essencial para trabalhadores urbanos.\n[…]\nJames Cook baptizou as atuais ilhas do Havaí como «Ilhas Sandwich» em homenagem ao conde. Existem ainda as Ilhas Sandwich do Sul no Atlântico Sul.\n[…]\nHá debate jurídico e cultural sobre o que constitui um sanduíche:\n[…]\nUSDA (EUA): sanduíche fechado ≥ 35 % carne cozida e ≤ 50 % pão; aberto ≥ 50 % carne cozida.\n[…]\nTribunal de Boston (2006): burrito, taco e quesadilla não são sanduíches.\n[…]\nTribunal de Indiana (2024): tacos e burritos são sanduíches de estilo mexicano.\n[…]\nBritish Sandwich Association: “qualquer forma de pão com recheio, geralmente montado frio” – inclui wraps e bagels, exclui hambúrgueres.\n[…]\nDesde a invenção do pão de forma (década de 1920), os sanduíches são vendidos em estações, cafés e pubs. Em 1979, a Marks & Spencer lançou os sanduíches triangulares refrigerados embalados, revolucionando o mercado britânico – em 2017 a indústria valia £8 mil milhões.\n[…]\nBritish Sandwich & Food to Go Association",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pizza marguerita",
      "descricao": "Pizza napolitana clássica coberta com tomate, muçarela e folhas de manjericão"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição napolitana, a pizza marguerita, de tomate, muçarela e manjericão, recebeu esse nome em homenagem a quem?",
    "resposta": "Rainha Margarida de Saboia",
    "distratores": [
      "Uma santa napolitana",
      "A esposa do pizzaiolo",
      "A flor margarida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pizza_Margherita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pizza_Margherita",
        "situacao": "ok",
        "texto": "Pizza Margherita, also known as Margherita pizza, is, together with the pizza marinara, the typical Neapolitan pizza. It is roundish in shape with a raised edge (the cornicione) and seasoned with hand-crushed peeled tomatoes, mozzarella (buffalo mozzarella or fior di latte), fresh basil leaves, and extra virgin olive oil. The dough is made by mixing water, salt, and yeast (either sourdough, or fre\n[…]\nThe dough is stretched by the pizzaiolo ('pizza maker') in a motion going outwards from the center, pressing with the fingers of both hands on the dough ball, and flipping it several times, shaping it into a disc. It is then topped and baked in an oven, which is traditionally made of brick and wood-fired (electric or gas ovens are also used). Pizza Margherita is usually served hot on a plate or folded into four and wrapped in paper (pizza a portafoglio or a libretto).\n[…]\nThe origins of pizza Margherita came from mixing similar toppings that were already present in Naples between 1796 and 1810. In 1849 Emanuele Rocco recorded different pizza toppings including basil, tomatoes, and thin slices of mozzarella; the mozzarella was thinly sliced, and added to the toppings already present.\n[…]\nA popular legend holds that the archetypal pizza Margherita was invented on 10 June 1889, when the Royal Palace of Capodimonte commissioned the Neapolitan pizzaiolo Raffaele Esposito to create a pizza in honor of the visiting Queen Margherita. Of the three different pizzas he created, the queen strongly preferred a pizza swathed in the colours of the national flag of Italy—red (tomato), white (mozzarella), and green (basil).\n[…]\nMedia related to Pizza Margherita at Wikimedia Commons\n[…]\nNeapolitan pizza\n[…]\nPizza marinara\n[…]\nList of pizza varieties by country"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pizza_Margherita",
        "situacao": "ok",
        "texto": "A margherita ou marguerita é um tipo de pizza tradicional de Nápoles, na Itália.\n[…]\nAs origens da pizza Margherita remontam à combinação de ingredientes semelhantes que já eram utilizados em Nápoles entre 1796 e 1810. Em 1849, Emanuele Rocco registou diferentes coberturas para pizza, incluindo manjericão, tomate e finas fatias de mozarela; a mozarela era cortada em fatias finas e acrescentada às coberturas já existentes.\n[…]\nPor vezes, a massa é dobrada sobre si mesma, formando o que se chama calzone.Segundo uma lenda popular, a pizza Margherita, na sua forma mais característica, foi criada em 10 de junho de 1889, quando o Palácio Real de Capodimonte encarregou o pizzaiolo napolitano Raffaele Esposito de preparar uma pizza em homenagem à rainha Margarida, que se encontrava de visita.\n[…]\nDas três pizzas que criou, a rainha terá preferido uma que ostentava as cores da bandeira italiana — vermelho (tomate), branco (mozarela) e verde (manjericão). Alegadamente, este tipo de pizza passou então a ser designado «Margherita», em homenagem à rainha, tendo sobrevivido até aos dias de hoje uma carta oficial de reconhecimento assinada pelo chefe da Casa da Rainha, exposta na pizzaria de Esposito, atualmente denominada Pizzeria Brandi.\n[…]\nPizza no estilo de Detroit\n[…]\n«Pizza Margherita». 123 Receitas. Arquivado do original em 17 de novembro de 2021\n[…]\n«Pizza Margherita (marguerita)». Manjericão Cook. Arquivado do original em 5 de abril de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Espaguete",
      "descricao": "Massa italiana longa, fina e cilíndrica, feita de trigo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome espaguete vem de um diminutivo italiano. Por causa do formato fino e comprido, que objeto essa palavra lembra?",
    "resposta": "Barbante",
    "distratores": [
      "Agulha",
      "Cabelo",
      "Minhoca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Spaghetti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spaghetti",
        "situacao": "ok",
        "texto": "Spaghetti (Italian: [spaˈɡetti] 'little strings' plural diminutive of spago 'string'; similarly spaghetto is a single strand) is a long, thin, solid, cylindrical pasta. It serves as a staple food of Italian cuisine and is made of milled wheat and water (sometimes enriched with vitamins and minerals), with the standard Italian version using durum-wheat semolina. The pasta is usually white because r\n[…]\nIn Naples, spaghetti is thinner than it is in the United States. Spaghettoni is a thicker spaghetti, and spaghettini is a thinner spaghetti, although it is thicker than the pasta of Naples.\n[…]\nFresh or dried spaghetti is cooked in a large pot of salted, boiling water and then drained in a colander (Italian: scolapasta). Utensils used in its preparation include the spaghetti scoop and spaghetti tongs.\n[…]\nAn emblem of Italian cuisine, spaghetti is frequently served with tomato sauce, which may contain various herbs (especially oregano and basil), olive oil, meat or vegetables. Other spaghetti preparations include amatriciana or carbonara. Grated hard cheeses, such as pecorino romano, Parmesan, and Grana Padano, are often sprinkled on top.\n[…]\nIn a humorous scene in the 1931 silent film City Lights, Charlie Chaplin tries to eat an extremely long spaghetti in a restaurant.\n[…]\nPoorly structured computer source code is often described as spaghetti code. A similar and more physical concept, \"cable spaghetti\", applies to poor cable management. In women's clothing, very thin straps supporting a dress or topwear are called \"spaghetti straps\". The term spaghetti Western refers to Western films made in Europe that were produced and directed by Italians.\n[…]\nThere is a very common folk belief that says that when you break a piece of spaghetti, an Italian person dies.\n[…]\nMedia related to Spaghetti at Wikimedia Commons\n[…]\nThe dictionary definition of spaghetti at Wiktionary\n[…]\nSpaghetti at Wikibooks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espaguete",
        "situacao": "ok",
        "texto": "Espaguete (português brasileiro) ou esparguete (português europeu) (Italiano: [spaˈɡetti]), também chamado de macarronete, é uma massa alimentícia longa, fina, sólida e cilíndrica. É um alimento básico da cozinha tradicional italiana. Como outras massas, o espaguete é feito de trigo moído, água e às vezes enriquecido com vitaminas e minerais. O espaguete italiano é tipicamente feito de sêmola de t\n[…]\nEspaguete vem do italiano spaghetti, a forma plural da palavra italiana spaghetto, que é diminutivo de spago, cujo significado é 'corda fina'.\n[…]\nA popularidade do espaguete se espalhou por toda a Itália após o estabelecimento de fábricas do alimento no século XIX, permitindo a produção em massa para o mercado italiano.\n[…]\nNos Estados Unidos, por volta do final do século XIX, o espaguete era oferecido em restaurantes como Spaghetti Italienne (que provavelmente consistia em massa cozida al dente e um molho de tomate suave aromatizado com especiarias e vegetais facilmente encontrados, como cravo, folhas de louro, e alho) e só décadas mais tarde passou a ser comumente preparado com orégano ou manjericão.\n[…]\nO termo Spaghetti western foi usado por críticos americanos e de outros países porque a maioria dos filmes de faroeste feitos na Europa foram produzidos e dirigidos por italianos.\n[…]\nO programa de televisão da BBC Panorama apresentou um programa fraudulento sobre a colheita do espaguete na Suíça em Dia da Mentira, 1957.\n[…]\nO conto \"Confession publique faite par la dernière mangeuse de spaghettis\", da coletânea Le Génie de l'aubergine et autres contes loufoques, de Pierre Cormon (1997), apresenta uma mulher que se recusa a abrir mão do espaguete tradicional em a favor dos cubos de esparguete, a mais recente inovação da indústria agro-alimentar em 2053, e paga um preço elevado por isso.\n[…]\nNa área de TI, código espaguete significa código mal escrito.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Herdado do tupi, o nome da fruta abacaxi significa o quê?",
    "resposta": "Fruta cheirosa",
    "distratores": [
      "Fruta espinhosa",
      "Coroa do rei",
      "Fruta azeda"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Abacaxi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Abacaxi",
        "situacao": "ok",
        "texto": "Ananás (português europeu) ou abacaxi (português brasileiro) (Ananas comosus) é uma infrutescência tropical produzida pela planta de mesmo nome, caracterizada como uma planta monocotiledônea da família das bromeliáceas da subfamília Bromelioideae. É um símbolo das regiões tropicais e subtropicais. Os abacaxizeiros cultivados pertencem à espécie Ananas comosus, que compreende muitas variedades frut\n[…]\nApesar do que dita o senso comum, o abacaxi não é uma fruta cítrica.\n[…]\nDe acordo com o escritor e linguista Clóvis Chiaradia, o termo \"abacaxi\" (em português brasileiro) apresenta duas possíveis etimologias, ambas provenientes da família Tupi-Guarani, elas são: a) da junção dos termos \"I'bá\" (fruto) e \"cati\" ou \"caxi\" (cheiroso), ou seja, \"fruto que recende\"; b) da junção dos termos \"I'bá\" (fruto), \"caá\" (folha) e \"ti\" ou \"xi\" (fruto de ponta aguda).\n[…]\nAlém da mudança não explicada de ⟨i⟩ em ⟨a⟩ de \"I'bá\", todas as menções à palavra \"abacaxi\" até meados do século XVIII são em referência ao Rio Abacaxis e ao povo indígena hoje extinto que habitava o interior da Amazônia, região que historicamente não possuía falantes de tupi antigo — registros do uso daquela palavra para a fruta só surgiriam no século seguinte, não parecendo correto supor que a etimologia final seja \"fruto que recende\".\n[…]\nEm Portugal, o termo \"abacaxi\" é usado para distinguir a fruta importada da América do Sul e Central da fruta cultivada localmente, normeadamente nos Açores.\n[…]\nmaior indústria de suco concentrado da fruta do Brasil).\n[…]\nOutro fato típico de cultura do abacaxi brasileira é o deslocamento constante das áreas de produção, devido ao aparecimento de problemas fitossanitários. A grande maioria dos abacaxis produzidos no Brasil é destinada ao consumo interno, como fruta fresca. São Paulo e os estados do Sul absorvem grande parte das produções de abacaxi da Paraíba, Minas Gerais e Tocantins.\n[…]\nToda Fruta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Salada Caesar",
      "descricao": "Salada de alface-romana, croûtons, parmesão e molho à base de ovo, anchova e limão"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A salada Caesar, de alface-romana, parmesão e pão torrado, leva o nome de quem?",
    "resposta": "O restaurador Caesar Cardini",
    "distratores": [
      "Júlio César",
      "César Ritz",
      "Augusto César"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Caesar_salad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caesar_salad",
        "situacao": "ok",
        "texto": "A Caesar salad (also spelled Cesar, César and Cesare), also known as Caesar's salad, is a green salad of romaine lettuce and croutons commonly dressed with lemon juice (or lime juice), olive oil, eggs, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan and black pepper.\n[…]\nThe salad's creation is generally attributed to the restaurateur Caesar Cardini, an Italian immigrant who operated restaurants in Mexico and the United States. Cardini lived in San Diego, but ran one of his restaurants, Caesar's, in Tijuana, Mexico, to attract American customers seeking to circumvent the restrictions of Prohibition. His daughter, Rosa, recounted that her father invented the salad at the Tijuana restaurant when a Fourth of July rush in 1924 depleted the kitchen's supplies.\n[…]\nA 2024 book confirmed the claim that Caesar Cardini originated the recipe. Livio Santini's son, Aldo, countered that his father provided the recipe while working as a cook in Cardini's restaurant.\n[…]\nThe American chef and writer Julia Child said that she had eaten a Caesar salad at Cardini's restaurant in her youth during the 1920s, made with whole romaine lettuce leaves, which were meant to be lifted by the stem and eaten with the fingers, tossed with olive oil, salt, pepper, lemon juice, Worcestershire sauce, coddled eggs, Parmesan, and croutons made with garlic-infused oil.\n[…]\nIn 1946, the newspaper columnist Dorothy Kilgallen wrote of a Caesar containing anchovies, differing from Cardini's version:\n[…]\nIn a 1952 interview, Cardini said the salad became well known in 1937, when Manny Wolf, story editor and Paramount Pictures writer's department head, provided the recipe to Hollywood restaurants.\n[…]\ngrated Parmesan cheese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caesar_salad",
        "situacao": "ok",
        "texto": "Caesar salad, salada Caesar ou salada César é uma salada preparada com alface-romana e molho Caesar. Os temperos usados mais habitualmente para compor este molho são azeite de oliva, suco de limão, anchovas, queijo parmesão, molho inglês, sal, açúcar e pimenta-preta. A salada geralmente é servida com croutons e queijo parmesão fresco ralado. Atribui-se ao chef ítalo-americano Cesare Cardini, em Ti\n[…]\nExistem muitas versões sobre a origem da Caesar salad. A mais conhecida é que a salada teria sido criada por um chef italiano chamado Cesare Cardini. Cardini, cujo sobrenome está relacionado com a culinária do famoso Hotel Peñafiel de Tehuacán,  a\n[…]\nOutra versão é que foi criada em uma das cidades de Tijuana ou Ensenada (México) pelo chef Livio Santini de origem italiana no final da década de 1930, na cozinha do restaurante do Hotel Caesar's, propriedade de Cesare Cardini.\n[…]\nConta-se que pilotos norte-americanos chegavam ao hotel e pediam uma simples salada. Na falta de tomates ou outros ingredientes típicos, o chef Santini seguiu uma velha receita familiar, do sul da Itália, que sua mãe os alimentava em tempos difíceis: uma salada romana, ovos, pequenos pedaços de pão fritos com azeite, queijo seco, azeite de oliva, umas gotas de molho inglês e suco de limão.\n[…]\nA salada, tendo agradado aos pilotos, foi denominada inicialmente como \"salada dos aviadores\"; com o tempo, César Cardini registrou-a como sua criação e a divulgou.\n[…]\n«Receita de Caesar salad» (em espanhol)\n[…]\n«Receitas de Caesar salad no Wikilivros» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Muçarela",
      "descricao": "Queijo fresco italiano de massa filada, originário do sul da Itália"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome muçarela vem de um verbo do dialeto napolitano ligado ao preparo do queijo. Que verbo é esse?",
    "resposta": "Cortar",
    "distratores": [
      "Esticar",
      "Ferver",
      "Enrolar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mozzarella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mozzarella",
        "situacao": "ok",
        "texto": "Mozzarella (often colloquially shortened to mozza) is a semi-soft non-aged cheese prepared using the pasta filata ('stretched-curd') method. It has a long history in southern Italy, although its precise origins are uncertain.\n[…]\nVarieties of mozzarella are distinguished by the milk used: mozzarella fior di latte when prepared with cow's milk and buffalo mozzarella (mozzarella di bufala in Italian) when the milk of the Italian buffalo is used. Genetic research suggest buffalo came to Italy by migration of river buffalo from India in the 7th century CE.\n[…]\nA denser mozzarella is made by adding citric acid and partly drying (desiccated). This is often used to prepare baked dishes, such as lasagna and pizza.\n[…]\nSeveral variants have been specifically formulated and prepared for use on pizza, such as low-moisture mozzarella cheese. The International Dictionary of Food and Cooking defines this cheese as \"a soft spun-curd cheese similar to mozzarella made from cow's milk\" that is \"[u]sed particularly for pizzas and [that] contains somewhat less water than real mozzarella\".\n[…]\nLarge quantities of mozzarella are exported internationally.\n[…]\nLow-moisture mozzarella can be kept refrigerated for up to a month, although some shredded low-moisture mozzarella is sold with a shelf life of up to six months.\n[…]\nMozzarella (Basilicata)\n[…]\nMozzarella silana (Calabria)\n[…]\nMozzarella della mortella (Campania)\n[…]\nMozzarella di Brugnato (Liguria)\n[…]\nCow's mozzarella (Molise)\n[…]\nMozzarella or fior di latte (Apulia)\n[…]\nMozzarella (Sicily)\n[…]\nStep-by-step photo guide to making Mozzarella\n[…]\nMozzarella di Bufala Campana trade organization\n[…]\nSito di approndimento scientifico sulla mozzarella, e l'allevamento di bufala campana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mozarela",
        "situacao": "ok",
        "texto": "A mozarela, muçarela, ou mussarela do italiano mozzarella, é uma variedade de queijo de massa filada com origem na comuna (município) de Aversa, CE, na região italiana da Campânia.\n[…]\nSua receita tradicional indica o uso exclusivo de leite de búfala, produzindo o queijo em formato de bolotas conservadas em soro, brancas e bem macias. Em Itália, a mozarela de leite de vaca sem denominação de origem protegida é produzida e comercializada sob o nome de \"mozzarella\", \"mozzarella di latte vaccino\" ou \"fior di latte\". A receita tradicional é comercializada legalmente como \"mozzarella di latte di bufala\" ou \"mozzarella di bufala\".\n[…]\nExiste ainda uma versão que mistura leite de vaca com leite de búfala, denominada \"mozzarella con latte di bufala\". São produzidas, em média, 33 mil toneladas deste queijo por ano em território italiano.\n[…]\nDe origem italiana, o nome desse queijo foi aportuguesado apenas nas últimas décadas. Até à segunda década do século XXI, no Brasil, é majoritariamente escrito, popular e comercialmente, como \"mussarela\", forma que segue portaria governamental: o \"Regulamento Técnico de Identidade e Qualidade\", Portaria 364, de 4 de setembro de 1997, que internalizou a Resolução Mercosul GMC 78, de 1996, determinou que a denominação do queijo no Brasil poderia ser \"mozzarella\" ou \"mussarela\".\n[…]\nO Dicionário Aurélio não aceita nem \"muçarela\" nem \"mussarela\", mas apenas \"mozarela\" ou \"mozzarella\".\n[…]\nA forma \"mussarela\", que ocorre, entre outros, nos dicionários Aulete e Priberam, é ainda a mais encontrada no Brasil em supermercados e restaurantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Acarajé",
      "descricao": "Bolinho baiano frito no azeite de dendê e recheado com vatapá e camarão, de origem africana"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em iorubá, as duas palavras que formam o nome do acarajé baiano querem dizer o quê?",
    "resposta": "Comer bola de fogo",
    "distratores": [
      "Pão da rainha",
      "Bolinho de feijão",
      "Comida de santo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acaraj%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acaraj%C3%A9",
        "situacao": "ok",
        "texto": "O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira. Trata-se de um bolinho feito de massa de feijão-fradinho, cebola e sal, e frito em azeite de dendê. Na África Ocidental, onde consiste uma comida de rua muito comum, é servido com pimenta em pó ou molho de tomate picante. Já no Brasil, especialmente na Bahia, é servido com pimenta, camarão seco, caruru e vatapá (\n[…]\nNo continente africano é conhecido como akara, e especificamente no norte da Nigéria é também chamado de kosai. Em Gana, por sua vez, a iguaria é mais conhecida como koose. Na África, na língua iorubá, é chamado de àkàrà, que significa \"bola de fogo\", enquanto que je possui o significado de \"comer\".\n[…]\n\"Acará\" também é o nome de um pedaço de algodão embebido em azeite que era colocado em chamas e engolido pelos filhos de santo para estes provarem que estavam em transe, nos rituais de candomblé (daí, a expressão \"bola de fogo\").\n[…]\nO acarajé dos Iorubás da África Ocidental (Togo, Benim, Nigéria, Camarões), que corresponde à iguaria consumida no Brasil, é semelhante ao faláfel árabe do Oriente Médio. Os árabes levaram essa iguaria para a África em diversas incursões entre os séculos VII e XIX. As favas secas e grão de bico do faláfel foram substituídos pelo feijão-fradinho na África.\n[…]\nA forma de preparo do acarajé da baiana é praticamente a mesma em relação ao acarajé de orixá: a diferença está no modo de ser servido. Ele pode ser cortado ao meio e recheado com vatapá, caruru, camarão refogado e pimenta.\n[…]\nO acarajé tem similaridade com o abará, diferindo apenas na maneira de cozer. O acarajé é frito, ao passo que o abará é cozido no vapor.\n[…]\nReceita de Acarajé da Bahia\n[…]\nAcarajé de Jesus\n[…]\nA baiana do acarajé\n[…]\nA baiana do acarajé\n[…]\nAcarajé, Lúcia Gaspar, Bibliotecária da Fundação Joaquim Nabuco\n[…]\nCarolina Cantarino, Baianas do acarajé:uma história de resistência"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Biscoito",
      "descricao": "Pequeno alimento assado e seco de massa de farinha, doce ou salgado."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome biscoito vem do latim e descreve como ele era preparado antigamente, para durar mais. O que esse nome significa?",
    "resposta": "Cozido duas vezes",
    "distratores": [
      "Assado na brasa",
      "Pão pequeno",
      "Feito de trigo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Biscuit",
      "https://pt.wikipedia.org/wiki/Biscoito"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Biscuit",
        "situacao": "ok",
        "texto": "A biscuit is a flour-based baked food item. Biscuits are typically hard, flat, and unleavened. They are usually sweet and may be made with sugar, chocolate, icing, jam, ginger, or cinnamon. Savoury biscuits are called crackers or biscuits for cheese."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biscoito",
        "situacao": "ok",
        "texto": "O biscoito ou biscouto é um produto de pastelaria confeccionado à base de farinha.\n[…]\nHistoricamente, o biscoito era um tipo de provisão, usado nas viagens marítimas, caracterizando-se por ser cozido duas ou mais vezes, por molde a minimizar a quantidade de humidade nele contida e assim maximizar a sua longevidade.\n[…]\nA palavra «biscoito» (grafia alternativa «biscouto») advém do étimo latino medieval biscoctus, que significa «duas vezes cozido».\n[…]\nNo período em que os homens viviam em cavernas, parte de sua alimentação era baseada em grãos triturados pelos dentes. A partir disso, teve-se a ideia de se moer os grãos com pedras, misturá-los com água e secá-los no fogo duas vezes. A esses alimentos, secos e quebradiços, deu-se o nome de biscoitos. Mas o confeccionamento profissional do alimento surgiu no século VII a.C. entre os persas. O biscoito surge no século VII a.C.\n[…]\nConsistia num pão de farinha de trigo, de forma achatada, cozido no forno duas, três ou mais vezes, de modo a assegurar-lhes a durabilidade das suas qualidades alimentares durante muito tempo, deveria ser muito duro.\n[…]\nMesmo assim, as necessidades de produção de biscouto não amainaram, de forma que ainda no século XVI houve a necessidade de passar a importá-los, também. O padre Raphael Bluteau na sua obra Vocabulário português e latino, chama-lhe mesmo “pão do mar” ou \"pão namor\". Em 1498, a ração de biscoito, por cada tripulante era de 28 arráteis por mês (o arrátel equivale a 459 gramas) o que dá um pouco mais de 12 quilos, isto é, 428 gramas por dia.\n[…]\nBolacha"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ossobuco",
      "descricao": "Especialidade lombarda de jarrete de vitela em fatia transversal, braseado com legumes, vinho branco e caldo."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em italiano, o que quer dizer ossobuco, nome da fatia de jarrete de vitela braseada típica de Milão?",
    "resposta": "Osso furado",
    "distratores": [
      "Osso cozido",
      "Carne macia",
      "Osso de boi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ossobuco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ossobuco",
        "situacao": "ok",
        "texto": "Ossobuco or osso buco (Italian: [ˌɔssoˈbuːko]; Milanese: òss bus [ˌɔz ˈbyːs]), also known as ossobuco alla milanese, is a specialty of Lombard cuisine of cross-cut veal shanks braised with vegetables, white wine, and broth. It is often garnished with gremolada and traditionally served with either risotto alla milanese or polenta, depending on the regional variation. The marrow from the hole in the\n[…]\nThe two types of ossobuco are a modern version that has tomatoes and the original version which does not. The older version, ossobuco in bianco, is flavored with cinnamon, bay leaf, and gremolada. The modern and more popular recipe includes tomatoes, carrots, celery, and onions; gremolada is optional.\n[…]\nOssobuco or osso buco is Italian for 'bone with a hole' (osso: 'bone', buco: 'hole'), a reference to the marrow hole at the center of the cross-cut veal shank. In the Milanese variant of the Lombard language, this dish's name is òss bus.\n[…]\nRisotto alla milanese is the traditional accompaniment to ossobuco in bianco in a one-dish meal. Ossobuco (especially the tomato-based version, prepared south of the River Po) is also eaten with polenta or mashed potatoes. South of the Po, it is sometimes served with pasta.\n[…]\nMedia related to Ossobuco at Wikimedia Commons\n[…]\nOssobuco Alla Milanese at the Wikibooks Cookbook subproject"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ossobuco",
        "situacao": "ok",
        "texto": "O Chambaril ou ossobuco é um prato tradicional italiano da região da Lombardia, em especial da cidade de Milão.\n[…]\nO nome deste chambão de vitela à italiana significa literalmente \"Osso (com) buraco\". A explicação desta designação é simples: no norte da Itália (região da Lombardia) o chambão de vitela é cortado em rodelas juntamente com os ossos. Cada rodela tem no centro um bocado de osso em forma de tubo. No \"buraco\" encontra-se o tutano que não deve ser retirado. As rodelas do chambão são passadas por farinha e depois fritas em azeite (ou óleo ou manteiga).\n[…]\n(em português) Receita de Ossobuco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Galette des rois",
      "descricao": "Torta folhada francesa recheada de creme de amêndoas, com uma pequena figura escondida na massa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na galette des rois, a figurinha escondida na massa se chama fève, lembrando o objeto original. Que alimento esse nome indica?",
    "resposta": "Fava",
    "distratores": [
      "Amêndoa",
      "Ervilha",
      "Avelã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/King_cake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_cake",
        "situacao": "ok",
        "texto": "A king cake, also known as a three kings cake or a baby cake, is a cake associated in many countries with the Epiphany, the celebration of the Twelfth Night after Christmas. Traditionally made with brioche dough, in most cases a fève (lit. 'fava bean'), such as a figurine representing Christ as a child, was hidden inside. After the cake is cut, whoever finds the fève in their slice wins a prize.\n[…]\nThe Guianan galette (more commonly known as the Creole galette) is a traditional pastry of French Guianan cuisine. This is a Creole variant of the galette des rois which is eaten as a dessert during Epiphany. It can be garnished with cream, coconut, guava, etc. It is consumed throughout the Carnival period (from the Epiphany until Ash Wednesday) and preferably accompanied by champagne.\n[…]\nA paper crown is included with purchased cakes to crown the \"king\" or \"queen\" who finds the \"fève\" or bean, or coin hidden inside the cake. To ensure a random distribution of the pieces, the youngest person is to place themselves under the table and name the recipient of each piece as they are cut. When store-bought, the fève can be a tiny porcelain figurine of a religious character or, nowadays, a figurine referencing pop-culture or popular cartoons.\n[…]\nBolo-rei (lit. 'king cake') is a traditional Portuguese cake eaten from the beginning of December until Epiphany. The recipe is derived from the Southern French gâteau des rois, which found its way to Portugal when Confeitaria Nacional opened as the Portuguese monarchy's official bakery in 1829.\n[…]\nThe cake is round with a large hole in the centre, resembling a crown covered with crystallized and dried fruit. It is baked from a soft, white dough, with raisins, various nuts and crystallized fruit. Also included is the dried fava bean, and tradition dictates that whoever finds the fava has to pay for the cake next year.\n[…]\nRecipes: Portugal’s Bolo Rei"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bolo-rei",
        "situacao": "ok",
        "texto": "Bolo-rei é um bolo festivo em forma de coroa, que faz parte da tradição portuguesa, e que se come tipicamente na Quadra Natalícia e Dia de Reis. O seu nome alude aos três reis magos.\n[…]\nSegundo esta tradição francesa, eram incluídos no bolo uma fava seca e um brinde de porcelana, normalmente uma figura da natividade do presépio. A quem calhasse a fava era considerado o rei ou rainha da festa, com direito a usar uma coroa de circunstância e poderia pedir um desejo, mas também deveria pagar o próximo bolo.\n[…]\nO bolo-rei popularizado em Portugal no século XIX segue uma receita originária do sul de Loire, um bolo em forma de coroa feito de massa leveda. Tanto quanto se sabe, a primeira casa onde se vendeu em Portugal foi a Confeitaria Nacional, em Lisboa, por volta de 1869-1870. O responsável foi o afamado confeiteiro francês Gregoire (Gregório, como ficou conhecido), recrutado em Paris por Baltasar Rodrigues Castanheiro Júnior, que adaptaram e utilizaram uma receita trazida da capital francesa.\n[…]\nHoje em dia o bolo-rei começa a ser produzido em Novembro e Dezembro com o começo da época Natalícia, tradicionalmente por padarias e pastelarias, mas também é produzido por supermercados em Portugal.\n[…]\nTradicionalmente o bolo-rei era confecionado e vendido com fava seca e brinde no interior. No entanto, em 1999, Portugal começou a limitar a inclusão destes \"extras\" nas doçarias, quando entrou em vigor o decreto-lei n.º 158/99, de 11 de maio. O artigo 4.º proibiu “a comercialização de géneros alimentícios que contenham brindes misturados” em Portugal, dando (no número 3 do mesmo) uma exceção ao bolo-rei “por razões de reconhecida tradição cultural”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Batata",
      "descricao": "Tubérculo comestível da planta Solanum tuberosum, nativa dos Andes"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na botânica, o que a batata, o tomate, a berinjela e o pimentão têm em comum?",
    "resposta": "Família das solanáceas",
    "distratores": [
      "São todos tubérculos",
      "Família das abóboras",
      "Família das couves"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Solanaceae",
      "https://pt.wikipedia.org/wiki/Solanaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solanaceae",
        "situacao": "ok",
        "texto": "Solanaceae (), commonly known as the nightshades, is a family of flowering plants in the order Solanales. The family contains approximately 2,700 species, several of which are used as agricultural crops, medicinal plants, and ornamental plants. Many members of the family have high alkaloid contents, making some highly toxic, but many—such as tomatoes, potatoes, eggplants and peppers—are commonly u\n[…]\nWhile several core genera were widely accepted to be a part of Solanaceae, others have been less stable in their placement. The problem of some species having a mix of solanaceous and non-solanaceous traits continued to be a significant source of conflict in Solanaceae taxnomy. The families Duckeodendraceae, Goetzaceae, and Nolanaceae were particularly tantalizing; it had long been known that they were closely related to Solanceae, but to what extent was unclear.\n[…]\nAll three families have extremely similar wood anatomy to Solanaceae, and in at least the case of Goetzeaceae leaf anatomy as well.\n[…]\nSolanaceae originated in South America. It is unique in this regard compared to other families in the order Solanales, which originated primarily in Africa. Its geographic isolation as a result is likely what triggered its initial diversification into a distinct lineage.\n[…]\nWatson, L.; Dallwitz, M. J. \"Solanaceae\". The families of flowering plants: descriptions, illustrations, identification, and information retrieval. Version: 1 June 2007. Archived from the original on 2007-10-26. Retrieved 2007-11-04.\n[…]\nSolanaceae Archived 2007-10-26 at the Wayback Machine in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants: descriptions, illustrations, identification, information retrieval.\n[…]\nFamily Solanaceae Archived 2013-06-18 at the Wayback Machine Flowers in Israel\n[…]\nImagines de various species of Solanaceae\n[…]\nSolanaceae de Chile, by Chileflora\n[…]\nSolanaceae Resources on the Web"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Solanaceae",
        "situacao": "ok",
        "texto": "Solanaceae Juss., 1789, ou Solanáceas são uma família de plantas com flor do grupo das dicotiledóneas, com espécies herbáceas e outras lenhosas, em geral com folhas alternas, simples e sem estípulas, pertencente à ordem Solanales. Na sua presente circunscrição taxonómica agrupa cerca de 98 géneros e mais de 2700 espécies, com grande diversidade de hábito, morfologia e ecologia.\n[…]\nEntre as solanáceas contam-se espécies alimentícias tão importantes como a batata (Solanum tuberosum), o tomate (Solanum lycopersicum), o chili e o pimento (Capsicum annuum) ou a beringela (Solanum melongena). Nicotiana tabacum, originária das Américas, é cultivada em todo o mundo para produzir tabaco.\n[…]\nMuitas espécies da família, entre elas o tabaco e o tomate, servem como organismo modelo para a investigação de questões biológicas básicas. Um de tais aspetos, a genómica das solanáceas, é um projecto internacional que intenta responder a questões de como pode um mesmo conjunto comum de genes ou proteínas a dar origem a organismos morfológica e ecologicamente tão diferenciados entre si como são as solanáceas. Um primeiro grande objetivo deste projecto foi sequenciar o genoma do tomate.\n[…]\nWatson, L.; Dallwitz, , M. J. «Solanaceae». The families of flowering plants: descriptions, illustrations, identification, and information retrieval. Version: 1 June 2007. Consultado em 4 de novembro de 2007\n[…]\nWatson, L.; Dallwitz, M. J. «Solanaceae». The families of flowering plants: descriptions, illustrations, identification, and information retrieval. Version: 1st June 2007. (em inglês). Consultado em 4 de novembro de 2007. Cópia arquivada em 26 de outubro de 2007\n[…]\nSolanaceae in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants: descriptions, illustrations, identification, information retrieval. http://delta-intkey.com\n[…]\nSolanaceae Resources on the Web"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pistache",
      "descricao": "Semente comestível verde da árvore Pistacia vera, da família do caju, usada em doces e sorvetes."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Usado em doces e sorvetes, o pistache pertence à mesma família botânica da manga e de qual fruta nordestina?",
    "resposta": "Caju",
    "distratores": [
      "Pitanga",
      "Graviola",
      "Acerola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anacardiaceae",
      "https://en.wikipedia.org/wiki/Pistachio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anacardiaceae",
        "situacao": "ok",
        "texto": "The Anacardiaceae, commonly known as the cashew family or sumac family, are a family of flowering plants, including about 83 genera with about 860 known species. Members of the Anacardiaceae bear fruits that are drupes and in some cases produce urushiol, an irritant.\n[…]\nThe cashew family is more abundant in warm or tropical regions, with only a few species living in the temperate zones. Mostly native to tropical Americas, Africa, and India. Pistacia and some species of Rhus can be found in southern Europe,  Rhus species can be found in much of North America, and Schinus inhabits South America exclusively.\n[…]\nFruits rarely open at maturity (exceptions include the pistachio) and are most often drupes.\n[…]\nAugustin Pyramus de Candolle in 1824, used Robert Brown's name Cassuvlæ or Anacardeæ, wrote another description of the group, and filled it with the genera Anacardium, Semecarpus, Holigarna, Mangifera, Buchanania, Pistacia, Astronium, Comocladia, and Picramnia.\n[…]\nThe genus Pistacia has sometimes been separated into its own family, the Pistaciaceae, based on the reduced flower structure, differences in pollen, and the feathery style of the flowers.The nature of its ovary, though,  does suggest it belongs in the Anacardiaceae, a position supported by morphological and molecular studies, and recent classifications have included Pistacia in the Anacardiaceae. The genus Abrahamia was separated from Protorhus in 2004.(Pell 2004)\n[…]\nMembers of this family produce cashew and pistachio nuts, and mango and marula fruits.\n[…]\nAnacardiaceae in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants.\n[…]\nAnacardiaceae in BoDD – Botanical Dermatology Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pistachio",
        "situacao": "ok",
        "texto": "The pistachio (, UK also ; Pistacia vera) is a small to medium-sized tree  of the cashew family. The tree produces seeds that are widely consumed as food. Pistachios can be used as an ingredient in desserts, chocolate, candy, ice cream, and as a paste or butter. As a tree nut, pistachios are considered a priority allergen that may induce allergic reactions in susceptible people.\n[…]\nThe pistachio tree is native to Iran and Central Asia.\n[…]\nArchaeologists have found evidence from excavations at Jarmo in northeastern Iraq for the consumption of Atlantic pistachio.\n[…]\nIn the 19th century, the pistachio was cultivated commercially in parts of the English-speaking world, including Australia and the United States, in the states of New Mexico and California, where it had been introduced as a garden tree in 1854.\n[…]\nIn 1904 and 1905, David Fairchild of the United States Department of Agriculture introduced hardier cultivars to California collected from China, but it was not promoted as a commercial crop until 1929. Walter T. Swingle's pistachios from Syria had already fruited well at Niles, California, by 1917.\n[…]\nThe first commercial pistachio harvest in California took place in 1976. By 2008, U.S. pistachio production rivaled that of Iran. Drought and cold weather in Iran led to severe declines in production, while U.S. production was increasing. At that time, pistachios were Iran's second-most important export product, after the oil and gas sector.\n[…]\nBy 2020, there were 150,000 pistachio farmers in Iran, approximately 70% of whom were small-scale producers using inefficient manual picking and processing techniques. There were 950 far larger U.S. producers, using highly efficient mechanized production techniques.\n[…]\nPistacia lentiscus\n[…]\nChisholm, Hugh, ed. (1911). \"Pistachio Nut\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anacardiaceae",
        "situacao": "ok",
        "texto": "Anacardiaceae é uma família botânica representada por 80 gêneros e cerca de 800 espécies. No Brasil ocorrem 14 gêneros e cerca de 57 espécies. É conhecida por suas espécies frutíferas, entre estas a manga (Mangifera indica), originária da Ásia e o caju (Anacardium occidentale), nativo do Brasil. São, geralmente, árvores ou arbustos com canais resinosos que, quando expostos por injúrias, têm um che\n[…]\nDe anacardium do grego latinizado ἀνά (aná) 'voltado para cima' e καρδία (kardía) 'coração', devido ao formato de coração dos frutos, como a castanha do caju e a manga.\n[…]\nAnacardiaceae R.Br. compreende ca. 80 gêneros e 800 espécies, distribuídas principalmente em regiões tropicais ou subtropicais. Ademais, várias espécies da família são cultivadas fora de seus ambientes naturais, devido a sua importância ornamental, alimentícia (manga, caju, pistache e outros) ou madeireira.\n[…]\nEsse núcleo poderá originar um tecido triploide rico em substâncias nutritivas, chamado endosperma ou albúmen, como ocorre em sementes do milho, arroz, caju e outras.\n[…]\nAs Anacardiaceas possuem muitos frutos comestíveis, dente elas a manga (Mangifera indica) o cajá (Spondias spp), siriguela (Spondias purpurea), dentre outras. O pseudo-fruto do caju (Anacardium occidentale) e e seu fruto, a castanha, são comercializados no mundo inteiro.\n[…]\nAnacardiaceae in L. Watson and M.J. Dallwitz (1992 onwards). The families of flowering plants: descriptions, illustrations, identification, information retrieval. http://delta-intkey.com\n[…]\nSOUZA, V. C, LORENZI, H. Botânica sistemática: guia ilustrado para identificação das famílias de Fanerógamas nativas e exóticas no Brasil em APG II. 2 ed. Nova Odessa, SP. Editora Instituto Plantarum 2008.\n[…]\nL. Watson and M. J. Dallwitz, The families of flowering plants em DELTA – DEscription Language for TAxonomy\n[…]\n«Familia Anacardiaceae na Flora Digital de Portugal - Jardim Botânico UTAD»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Morango",
      "descricao": "Fruto vermelho do morangueiro (Fragaria × ananassa), da família das rosáceas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O morango, a maçã e a pera pertencem à mesma família botânica de qual flor famosa?",
    "resposta": "Rosa",
    "distratores": [
      "Orquídea",
      "Margarida",
      "Tulipa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosaceae",
      "https://pt.wikipedia.org/wiki/Rosaceae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosaceae",
        "situacao": "ok",
        "texto": "Rosaceae (), the rose family, is a family of flowering plants that includes 4,828 known species in 91 genera.\n[…]\nThe name is derived from the type genus Rosa. The family includes herbs, shrubs, and trees. Most species are deciduous, but some are evergreen. They have a worldwide range but are most diverse in the Northern Hemisphere.\n[…]\nFor example, Cotoneaster contains between 70 and 300 species, Rosa around 100 (including the taxonomically complex dog roses), Sorbus 100 to 200 species, Crataegus between 200 and 1,000, Alchemilla around 300 species, Potentilla roughly 500, and Rubus hundreds, or possibly even thousands of species.\n[…]\nThe rose family is considered one of the six most economically important crop plant families, and includes apples, pears, quinces, medlars, loquats, almonds, peaches, apricots, plums, cherries, strawberries, blackberries, raspberries, sloes, and roses.\n[…]\nMany genera are also highly valued ornamental plants. These include trees and shrubs (Aronia, Cotoneaster, Chaenomeles, Crataegus, Dasiphora, Exochorda, Kerria, Photinia, Physocarpus, Prunus, Pyracantha, Rhodotypos, Rosa, Sorbus, Spiraea), herbaceous perennials (Alchemilla, Aruncus, Filipendula, Geum, Potentilla, Sanguisorba), alpine plants (Dryas, Geum, Potentilla) and climbers (Rosa).\n[…]\nIn Bulgaria and parts of western Asia, the production of rose oil from fresh flowers such as Rosa damascena, Rosa gallica, and other species is an important economic industry.\n[…]\nRosaceae at the DELTA Online Families of Flowering Plants Archived 14 May 2011 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rosaceae",
        "situacao": "ok",
        "texto": "As rosáceas (Rosaceae) são uma família de plantas com flor da ordem Rosales, que inclui pelo menos 4 828 espécies repartidas por 91 géneros. A família inclui espécies com grande diversidade de hábito, desde herbáceas a arbustos e árvores, maioritariamente espécies decíduas. A família tem distribuição cosmopolita, embora com maior diversidade no Hemisfério Norte.\n[…]\nA família Rosaceae, cujo nome deriva do género tipo Rosa, é considerada uma das mais diversificadas no clado de angiospermas, integrando cerca de 5000 espécies repartidas por 90-91 géneros, incluindo uma grande diversidade de plantas ornamentais, como as roseiras (Rosa sp.), e frutíferas, como as macieiras (Malus sp.) e as frutas de carouço.[carece de fontes]?\n[…]\nAs estípulas estão geralmente presentes, sempre pareadas, e essa característica é considerada primitiva na família e foi independentemente perdida em muitos grupos de do clado Amygdaloideae (previamente designado por Spiraeoideae). As estípulas às vezes são adnatas (aderentes) à base do pecíolo foliar (por exemplo, em Rosa).\n[…]\nA circunscrição taxonómica desta subfamília é agora reduzida (excluindo, por exemplo, o géneros que faziam parte do agrupamento Dryadoideae), mas permanece um grupo diverso contendo cinco ou seis tribos e 20 ou mais géneros, incluindo Rosa, Rubus (amora, framboesa), Fragaria (morango), Potentilla e Geum.\n[…]\nNo campo do interesse alimentar, a família inclui Malus domestica (macieira), Prunus persica (pessegueiro), Eriobotrya japonica (nespereira) e Fragaria x ananassa (morangueiro). Com interesse ornamental contam-se os géneros Cotoneaster (cotoneasteres), Pyracantha (piracantas), Rosa (roseiras) e Spiraea (grinalda-de-noiva). No campo da produção de madeira, destaque-se Prunus avium, a cerejeira-brava.\n[…]\nA família Rosaceae inclui uma grande variedade de árvores, arbustos e herbáceas."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Amendoeira",
      "descricao": "Árvore Prunus dulcis, da família das rosáceas, cuja semente é a amêndoa."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A amendoeira, árvore que dá a amêndoa, é do mesmo gênero botânico de qual destas árvores frutíferas?",
    "resposta": "Pessegueiro",
    "distratores": [
      "Macieira",
      "Nogueira",
      "Figueira"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Almond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Almond",
        "situacao": "ok",
        "texto": "The almond (Prunus amygdalus, syn. Prunus dulcis (Mill.) D.A.Webb, nom. illeg. non Prunus dulcis Rouchy) is a species of tree from the genus Prunus. Along with the peach, it is classified in the subgenus Amygdalus, distinguished from the other subgenera by corrugations on the woody shell (endocarp) surrounding the seed.\n[…]\nIt was not until 1967 that the combination Prunus dulcis was published for the almond by David Allardice Webb, on the assumption that Amygdalus dulcis was nothing more than a synonym of Amygdalus communis, and thus an available name for that species. The epithet dulcis (1768) is older than amygdalus (1801) and would therefore have priority. Webb noted that it was unfortunate that a species known for 165 years as Prunus amygdalus now had to be renamed under the rules of nomenclature.\n[…]\nHowever, it later turned out that in 1967 the name Prunus dulcis was no longer available for the almond because it had already been used for a cherry in an 1878 publication by L'Abbé Rouchy. The oldest valid combination in Prunus is therefore Prunus amygdalus.\n[…]\nThe seeds of Prunus amygdalus var. dulcis are predominantly sweet but some individual trees produce seeds that are somewhat more bitter. The genetic basis for bitterness involves a single gene, the bitter flavour furthermore being recessive, both aspects making this trait easier to domesticate. The fruits from Prunus amygdalus var. amara are always bitter, as are the kernels from other species of genus Prunus, such as apricot, peach and cherry (although to a lesser extent).\n[…]\nData related to Prunus amygdalus at Wikispecies\n[…]\n\"Prunus dulcis\". Plants for a Future."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amendoeira",
        "situacao": "ok",
        "texto": "Prunus dulcis (antes classificada como Prunus amygdalus ou Amygdalus communis), popularmente conhecida como amendoeira, amêndoa-de-coco, amêndoa-durázio e amêndoa-molar, é uma espécie de árvores de folhas caducas (perdidas geralmente em meses frios) da família Rosaceae (plantas com flor da ordem Rosales), que possui a semente do fruto geralmente considerada como um fruto seco: a amêndoa, uma oleag\n[…]\nApesar de o termo amêndoa se referir ao fruto da amendoeira (Prunus dulcis), usualmente ele também é referido a sua semente, ou mesmo às sementes de outras variedades de amendoeiras. De tais sementes, são extraídos óleos e essências possuidores de propriedades medicinais e muito utilizados na indústria de cosméticos e na produção do licores.\n[…]\nUm de seus usos culinários é a produção do Leite-de-amêndoa.\n[…]\n\"Amêndoa\" provém do grego amygdále, através do latim amygdala. Prunus dulcis, traduzido do latim, significa \"ameixa doce\". \"Durázio\" provém do latim duracinu, significando \"duro\". \"Molar\" provém do latim molare, \"de moinho\".\n[…]\nSegundo a tradição Judaica, por sua vez, a antiga Menorah do Templo de Salomão era adornada com botões de amendoeira, bem como o cajado de Messias será feito de tal madeira.\n[…]\nNo Nordeste Transmontano, sobretudo nas terras da Terra Quente e do Douro Superior, mais para sul do distrito de Bragança, concentra-se a maior parte do amendoal português, 16 mil dos cerca de 24 mil hectares, e daqui sai 67% da produção nacional de amêndoa.\n[…]\nEm Portugal, entre os anos de 2010 e 2022 a produção de amêndoa com casca aumentou 40.000 toneladas .\n[…]\nhttps://odigital.sapo.pt/producao-de-miolo-de-amendoa-devera-subir-20-para-20-000-toneladas/",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Martíni",
      "descricao": "Coquetel de gim e vermute, guarnecido com azeitona ou casca de limão."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que agente secreto dos livros e do cinema costuma pedir o seu martíni batido, e não mexido?",
    "resposta": "James Bond",
    "distratores": [
      "Jason Bourne",
      "Ethan Hunt",
      "Austin Powers"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shaken,_not_stirred"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shaken,_not_stirred",
        "situacao": "ok",
        "texto": "\"Shaken, not stirred\" is a James Bond catchphrase. It describes how Ian Fleming's fictional British Secret Service agent James Bond prefers his martini cocktail.\n[…]\nThe earliest form of the \"shaken, not stirred\" motif appears in the first Bond novel, Casino Royale (1953), where it only specifies \"shake it\". After meeting his CIA contact Felix Leiter for the first time, James Bond orders a drink from a bartender while at the casino.\n[…]\nFirst said by Bond in the novel Dr. No (1958):\n[…]\nIn George Lazenby's only film as Bond, On Her Majesty's Secret Service, Bond never actually orders himself a drink. Still, when he meets Marc-Ange Draco (Gabriele Ferzetti) for the first time, Draco tells his assistant, Olympe (Virginia North), to get a dry martini for Bond. Draco then adds, \"Shaken, not stirred.\"\n[…]\nIn \"Stirred\", an episode of The West Wing, President Josiah Bartlet (Martin Sheen) disagrees with Bond in a conversation with his aide Charlie Young: \"Shaken, not stirred, will get you cold water with a dash of gin and dry vermouth. The reason you stir it with a special spoon is to prevent the ice from chipping. James is ordering a weak martini and being snooty about it.\"\n[…]\nOtherwise, in the films, James Bond normally has a fondness for vodka, which is accompanied by product placement for a brand. For instance, Smirnoff was clearly shown in 1962's Dr. No and in 1997's Tomorrow Never Dies, in which Bond sits drinking a bottle while in his hotel room in Hamburg. Other brands featured in the films have included Absolut Vodka, Stolichnaya and Finlandia.\n[…]\nOutline of James Bond\n[…]\n\"Shaken and Stirred, James Bond Loves His Booze\" at Time.com."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Negroni",
      "descricao": "Coquetel italiano de partes iguais de gim, vermute rosso e Campari."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Segundo a história, o Negroni nasceu em Florença quando um conde pediu gim no lugar da água com gás de qual coquetel?",
    "resposta": "Americano",
    "distratores": [
      "Spritz",
      "Bellini",
      "Martíni"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Negroni",
      "https://en.wikipedia.org/wiki/Americano_(cocktail)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Negroni",
        "situacao": "ok",
        "texto": "A Negroni is an Italian cocktail, made of equal parts gin, vermouth rosso (red, semi-sweet), and Campari, generally served with ice, and commonly garnished with an orange slice or orange peel. It is considered an apéritif.\n[…]\nThere is no known recipe for a \"Negroni\" or an equal-parts drink of gin, vermouth, and Campari in Italian cocktail books before the 1940s. For example, the encyclopedic Grassi (1936) contains 1,000 recipes, including several with Campari (two versions of the Milano–Torino and a dozen versions of the Americano), but no negroni or gin/vermouth/Campari drink.\n[…]\nNegroni\n[…]\nThe most widely reported account is that it was first mixed in Florence, Italy, in 1919, at Caffè Casoni (now Caffè Giacosa), on Via de' Tornabuoni, by bartender Fosco Scarselli, for his customer Count Camillo Negroni; see Picchi (2002). The commonly held origin story is that it was concocted by a member of the Negroni family asking the bartender to strengthen the Americano by adding gin, rather than the normal soda water.\n[…]\nThe bartender also added an orange garnish rather than the typical lemon garnish of the Americano to signify that it was a different drink. Cocktail historian David Wondrich researched Camillo Negroni, whose status as a count is questionable, but whose grandfather, Luigi Negroni, was indeed a count. The year 1919 may be a confusion with the amaro today sold as Old 1919 (Antico Negroni 1919); see below.\n[…]\nHe finds an Italian origin implausible, as at the time the spirits-based cocktails popular in the United States were not made in Italy; they were considered American style, as seen in the American Bar (London, 1893), Harry's New York Bar (Paris, 1911), and Harry's Bar (Venice, 1931).\n[…]\nNegroni Week"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Americano_(cocktail)",
        "situacao": "ok",
        "texto": "The Americano is an IBA official cocktail composed of Campari, sweet vermouth and, for the sparkling version, club soda and garnished with a slice of lemon or an orange twist.\n[…]\nThe cocktail was first served in creator Gaspare Campari's bar, Caffè Campari in Milan. In the 1860s, an American man, who was under the impression that Campari was a long drink, ordered it, hated it, and said it would be better served iced and fizzy. He ordered a Campari and soda, which became too bitter; after a few iterations he and the esteemed bartender decided on Vermouth as the perfect blend.\n[…]\nIt is the first drink ordered by James Bond in the first novel in Ian Fleming's series, Casino Royale. In From Russia With Love, Bond drinks \"two excellent Americanos\" in Rome during his flight to Istanbul.\n[…]\nIn the short story \"From a View to a Kill\", Bond chooses an Americano as an appropriate drink for a mere café; suggesting that \"in cafés you have to drink the least offensive of the musical comedy drinks that go with them.\" Bond always stipulates Perrier, for, in his opinion, expensive soda water was the cheapest way to improve a poor drink.\n[…]\nIn The Tourist, Elise and Fred, each had an Americano (or two) before their fancy dinner at a Venetian restaurant, and resumed drinking that post-dinner back in their hotel room. In The Talented Mr. Ripley, Tom and Dickie drink americanos on the Via Veneto in Rome.\n[…]\nVarious twists on the classic Americano exists. Most commonly, the Guido Americano or Beericano replaces the club soda with beer. The beer can be frothed to create a salty foam to garnish the cocktail, or poured straight.\n[…]\nNegroni"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Negroni",
        "situacao": "ok",
        "texto": "O negroni é um coquetel feito de uma parte de gim, uma parte de vermute rosso (vermelho, semidoce), e uma parte de Campari, enfeitado com casca de laranja. É considerado um aperitivo.\n[…]\nO coquetel é de origem italiana e sua receita deriva-se da receita do clássico americano. Faz parte do grupo de coquetéis \"inesquecíveis\" de acordo com a International Bartenders Association (IBA).\n[…]\nEnquanto a origem exata da bebida é desconhecida, o relato mais amplamente reportado é que o coquetel foi inicialmente elaborado em 1919 no Caffè Casoni (antigo Caffè Giacosa, atualmente chamado Caffè Roberto Cavalli), situado na Via de' Tornabuoni em Florença, na Itália. O general Pascal Olivier, conde Negroni, fez o arranjo pedindo ao barman Fosco Scarselli para deixar mais forte o seu coquetel favorito, o americano, ao adicionar gim em vez da habitual água gaseificada.\n[…]\nO historiador de coquetéis David Wondrich pesquisou Pascal Negroni, que nasceu em 4 de abril de 1829.[carece de fontes]? Enquanto sua situação como conde é questionável seu avô Luigi Negroni era certamente um conde.\n[…]\nSegundo a IBA o coquetel é servido antes da refeição principal e é composto de\n[…]\nO coquetel Americano é feito com 30 ml de Campari, 30 ml de Vermute vermelho doce e uma pequena porção (um \"splash\") de água gaseificada.\n[…]\nBoulevardier: um coquetel similar que usa uísque no lugar de gin.\n[…]\nO Dutch Count Negroni usa Genebra no lugar do gin.\n[…]\nUm negroni que substitui gim por tequila é conhecido como \"Agavoni\" ou \"Tegroni\".\n[…]\nO White Negroni é feito com o gin Lillet blanc e Suze.\n[…]\nLista de coquetéis oficiais da IBA\n[…]\n(em italiano) Origine e curiosità del cocktail IBA Negroni",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ratatouille",
      "descricao": "Prato francês da Provença de legumes de verão cozidos em azeite, como abobrinha, berinjela, pimentão e tomate."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na animação da Pixar que leva o nome do prato provençal ratatouille, que bicho é o cozinheiro protagonista?",
    "resposta": "Um rato",
    "distratores": [
      "Um gato",
      "Um pato",
      "Um cachorro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ratatouille_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ratatouille_(film)",
        "situacao": "ok",
        "texto": "Ratatouille ( RAT-ə-TOO-ee) is a 2007 American animated comedy-drama film written and directed by Brad Bird, from a story by Jan Pinkava, Jim Capobianco and Bird. Produced by Pixar Animation Studios for Walt Disney Pictures, the film stars the voices of Patton Oswalt, Lou Romano, Ian Holm, Janeane Garofalo, Peter O'Toole, Brian Dennehy, Peter Sohn and Brad Garrett. The title refers to the French d\n[…]\nDisney/Pixar was concerned that audiences, particularly children, would not be familiar with the word \"ratatouille\" and its pronunciation. As a result, the title was spelled phonetically (as \"rat-a-too-e\") within trailers and on posters.\n[…]\nOK, one more and then I'll be done: it's yummy.\" Peter Hartlaub of the San Francisco Chronicle gave the film four out of four stars, saying \"Ratatouille never overwhelms, even though it's stocked with action, romance, historical content, family drama and serious statements about the creation of art.\" Richard Corliss of Time gave the film a positive review, saying \"From the moment Remy enters, crashing, to the final happy fadeout, Ratatouille parades the brio and depth that set Pixar apart from and above other animation studios.\" Roger Ebert of the Chicago Sun-Times gave the film four out of four stars, saying \"A lot of animated movies have inspired sequels, notably Shrek, but Brad Bird's Ratatouille is the first one that made me positively desire one.\" Peter Howell of the Toronto Star gave the film four out of four stars, saying \"Had Bird gone the safe route, he would have robbed us of a great new cartoon figure in Remy, who like the rest of the film is rendered with animation that is at once fanciful and life-like.\n[…]\nIt's also my pick for Pixar's best.\"\n[…]\nRatatouille is also among the films represented in Kinect Rush: A Disney-Pixar Adventure, released in March 2012 for Xbox 360.\n[…]\nRatatouille at IMDb\n[…]\nRatatouille at the TCM Movie Database (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ratatouille_%28filme%29",
        "situacao": "ok",
        "texto": "Ratatouille (bra: Ratatouille; prt: Ratatui) é um filme estadunidense do gênero animação, sendo o oitavo longa-metragem do gênero produzido pela Pixar e lançado em 2007. Conta a história de Remy, um rato vivendo em Paris que sonha em se tornar um chef de cozinha. O filme foi dirigido por Brad Bird, que assumiu depois de Jan Pinkava em 2005, foi lançado nos EUA em 29 de junho de 2007 e foi lançado \n[…]\nO elenco que interpreta as personagens da animação é composto por: Patton Oswalt como o protagonista, o rato Remy. Brad Garrett, dá voz ao chef Auguste Gusteau. O pai de Remy, Jango, é interpretado por Brian Dennehy. Outras vozes conhecidas são de Janeane Garofalo, Ian Holm, o consagrado ator Peter O'Toole, além de Lou Romano e Peter Sohn, que participaram de Os Incríveis (trabalho anterior de Bird).\n[…]\nQuanto a Bird, ele já havia dirigido outro filme do mesmo estúdio, The Incredibles (2004), e quando começou a trabalhar em Ratatouille, ele afirmou que a estranheza do conceito e do conflito do filme fez com que ele ficasse bastante atraído à animação, em uma entrevista ele disse: \"esta é uma história sobre um rato que tem sentidos extraordinários de cheiro que se vê arrastado para cozinhar e não tem qualquer ideia de como se tornar um chef de cozinha.\n[…]\nMas as inovações não deixam de estar lá, no grão fino de cada imagem: no olhar emaranhado de pele de rato molhado, na boa utilização dos arranhões brilhantes nas pátinas de panelas de cobre, na umidade presente sobre a superfície dos vegetais cortados e no avental dos cozinheiros manchado de molho\". Ele terminou sua revisão do filme com um simples \"obrigado\" para os criadores da animação. Outro crítico chamado Paul Arendt, escrevendo para a BBC, também deu um bom comentário sobre a trama.\n[…]\nPrice, Davidl \"A Magia da Pixar\" (Edição 1). Editora Campus Elsevier, 2009, ISBN 978-85-352-3669-9\n[…]\n«Página oficial do filme em Pixar.com» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Madeleine",
      "descricao": "Pequeno bolo francês assado em forma de concha, originário da Lorena."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em qual romance de Marcel Proust uma madeleine molhada no chá desperta as lembranças de infância do narrador?",
    "resposta": "Em Busca do Tempo Perdido",
    "distratores": [
      "Os Miseráveis",
      "Madame Bovary",
      "O Vermelho e o Negro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Madeleine_(cake)",
      "https://pt.wikipedia.org/wiki/Em_Busca_do_Tempo_Perdido"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madeleine_(cake)",
        "situacao": "ok",
        "texto": "The madeleine (English:   MAD-əl-in,  MAD-əl-ayn or  MAD-əl-AYN, French: [madlɛn] ) is a small traditional cake that originated in Commercy and Liverdun, two communes of the Lorraine region in northeastern France.\n[…]\nMarcel Proust's description of his experience as an adult of the taste of a madeleine dipped in tea triggering memories of childhood in his early 20th century Remembrance of Things Past caused the term 'Proustian' to become synonymous with something that \"evok(es) the recall of a forgotten memory\".\n[…]\nMadeleines are characterized both by the shell pattern with well-defined ridges on one side and by the typical bump or hump on the other side. The interior is tender and the exterior is crisp.\n[…]\nIn In Search of Lost Time (also known as Remembrance of Things Past), author Marcel Proust uses madeleines to contrast involuntary memory with voluntary memory. The latter designates memories retrieved by \"intelligence\", that is, memories produced by putting conscious effort into remembering events, people, and places. Proust's narrator laments that such memories are inevitably partial, and do not bear the \"essence\" of the past.\n[…]\nThe most famous instance of involuntary memory by Proust is known as the \"episode of the madeleine\", yet there are at least half a dozen other examples in In Search of Lost Time.\n[…]\nAnd all from my cup of tea.The \"episode of the madeleines\" is considered one of the most important moments in the work and to \"encapsulat(e) its theme of involuntary memory\". The terms 'Proustian' and 'memoires de Proust' are often used to refer to something that \"evok(es) the recall of a forgotten memory\".\n[…]\nBahulu, a Malaysian version of madeleines, inspired by European influence"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Em_Busca_do_Tempo_Perdido",
        "situacao": "ok",
        "texto": "Em busca do tempo perdido (do francês À la recherche du temps perdu) é uma obra romanesca de Marcel Proust escrita entre 1908-1909 e 1922, publicada entre 1913 e 1927 em sete volumes, os três últimos postumamente.\n[…]\nPelas suas ambições (alcançar a substância do tempo para poder se subtrair de sua lei, a fim de tentar apreender, pela escrita, a essência de uma realidade escondida no inconsciente “recriada pelo nosso pensamento”), sua desproporção (quase 3500 páginas na coleção de bolso), e sua influência em trabalhos literários e nas pesquisas a vir (Proust é considerado como o primeiro autor clássico de seu tempo), \"Em busca do tempo perdido\" se classifica entre as maiores obras da literatura universal.\n[…]\nA homossexualidade é um dos temas principais do romance, especialmente em Sodoma e Gomorra e nos volumes seguintes. \"Em Busca do Tempo Perdido\" é o primeiro dos grandes romances em que a homossexualidade é tema central, tanto como conceito para discussão como pela descrição do comportamento dos seus personagens. Embora o narrador se descreva como heterossexual, suspeita constantemente das relações da sua apaixonada com outras mulheres.\n[…]\nA monumental confrontação do tema da homossexualidade em \"Em Busca do Tempo Perdido\" permitiu aos leitores que a homossexualidade poderia ser mais que apenas actos lascivos de sodomitas ou os maneirismos afectados de homens obcecados em negar a sua masculinidade. Em vez disso, o romance de Proust apresentou a homossexualidade como um assunto complexo e multifacetado, que, se examinado de perto, derrota todos os estereótipos.\n[…]\nO Tempo Reencontrado (2005)\n[…]\nPor Mario Sergio Conti e Rosa Freire d'Aguiar, que saiu como À Procura do Tempo Perdido:"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Saquê",
      "descricao": "Bebida alcoólica tradicional do Japão, obtida pela fermentação do arroz polido."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que o saquê, o shoyu e o missô, três pilares da cozinha japonesa, têm em comum na fabricação?",
    "resposta": "O fungo koji",
    "distratores": [
      "São feitos de soja",
      "Levam vinagre de arroz",
      "Envelhecem em barris"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aspergillus_oryzae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aspergillus_oryzae",
        "situacao": "ok",
        "texto": "Aspergillus oryzae, also known as kōji mold (Japanese: ニホンコウジカビ (日本麹黴), Hepburn: nihon kōji kabi), is a mold used in East Asia to saccharify rice, sweet potato, and barley in the making of alcoholic beverages such as sake and shōchū, and also to ferment soybeans for making soy sauce and miso. It is one of the different koji molds used for food fermentation.\n[…]\nEiji Ichishima of Tohoku University called the kōji fungus a \"national fungus\" (kokkin) in the journal of the Brewing Society of Japan, because of its importance not only for making the kōji for sake brewing, but also for making the kōji for miso, soy sauce, and a range of other traditional Japanese foods. His proposal was approved at the society's annual meeting in 2006.\n[…]\nThree varieties of kōji mold are used for making shōchū, each with distinct characteristics.\n[…]\nYellow kōji (A. oryzae) is used to produce sake, and at one time all honkaku shōchū. However, yellow kōji is extremely sensitive to temperature; its moromi can easily sour during fermentation. This makes it difficult to use in warmer regions such as Kyūshū, and gradually black and white kōji became more common in production of shōchū.\n[…]\nIts strength is that it gives rise to a rich, fruity, refreshing taste, so despite the difficulties and great skill required, it is still used by some manufacturers. It is popular amongst young people who previously had no interest in typically strong potato shōchū, playing a role in its recent revival. Thus, white and black kōji are mainly used in the production of shōchū, but only yellow kōji (A. oryzae) is usually used in the production of sake.\n[…]\nHowever, over time this may potentially allow the kōji to gain new transporters due to the environment's conditions.\n[…]\nMaking Rice Koji from Koji Spores\n[…]\nSake World's description of koji"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aspergillus_oryzae",
        "situacao": "ok",
        "texto": "Aspergillus oryzae (chinês: 麴菌, 麴霉菌, 曲霉菌, pinyin: qū meí jūn; japonês: 麹, kōji, ou 麹菌, kōji-kin, coreano: 누룩균, nurukgyun)  é um fungo filamentoso (um bolor). É utilizado nas culinárias chinesa e japonesa para a fermentação do feijão de soja. É também usado para sacarificar o arroz e outros cereais, e batatas na produção de bebidas alcoólicas como huangjiu, saquê, e shōchū, bem como na produção de \n[…]\nInicialmente mantido em segredo, o genoma de A. oryzae foi tornado público por um consórcio de companhias japonesas de biotecnologia  no final de 2005. Os oito cromossomas compreendem 37 milhões de pares de bases e uns estimados doze mil genes. Assim, o genoma de A. oryzae é maior em um terço do que os de duas outras espécies de Aspergillus; o organismo modelo Aspergillus nidulans e o perigoso patógeno humano Aspergillus fumigatus. Crê-se que muitos dos genes extras de A.\n[…]\noryzae estejam relacionados com o metabolismo secundário. A estirpe sequenciada foi isolada em 1950 e é designada RIB40 ou ATCC 42149; a sua morfologia, crescimento, e produção enzimática são típicos das estirpes usadas na produção de saquê.\n[…]\n«Sake World's description of koji» (em inglês)\n[…]\n«Koji, an Aspergillus], by Fujita, Chieko, Tokyo Foundation» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Café",
      "descricao": "Bebida preparada com os grãos torrados e moídos do cafeeiro, originário da Etiópia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que compositor alemão do século dezoito escreveu uma cantata cômica sobre uma jovem viciada em café?",
    "resposta": "Johann Sebastian Bach",
    "distratores": [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Georg Friedrich Händel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffee_Cantata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_Cantata",
        "situacao": "ok",
        "texto": "Schweigt stille, plaudert nicht (Be still, stop chattering), BWV 211, also known as the Coffee Cantata, is a secular cantata by Johann Sebastian Bach. He composed it probably between 1732 and 1735. Although classified as a cantata, it is essentially a miniature comic opera. In a satirical commentary, the cantata amusingly tells of an addiction to coffee.\n[…]\nBach regularly directed a musical ensemble based at Zimmermann's coffee house called a collegium musicum, founded by Georg Philipp Telemann in 1702. The libretto suggests that some people in eighteenth-century Germany viewed coffee drinking as a bad habit. However, the work is likely to have been first performed at the coffee house in Leipzig.\n[…]\nThe cantata's libretto (written by Christian Friedrich Henrici, known as Picander), features lines like \"If I couldn't, three times a day, be allowed to drink my little cup of coffee, in my anguish I will turn into a shriveled-up roast goat\".\n[…]\nBach wrote no operas: the cantata was written for concert performance, but is frequently performed today fully staged with costumes.\n[…]\nEmma Kirkby, Rogers Covey-Crump, David Thomas, Academy of Ancient Music, Christopher Hogwood. J.S. Bach: Coffee Cantata / Peasant Cantata. L'Oiseau-Lyre, 1987.\n[…]\nAmsterdam Baroque Orchestra & Choir, Ton Koopman. J.S. Bach: Complete Cantatas Vol. 4. Antoine Marchand, 1996.\n[…]\nBach Collegium Japan, Masaaki Suzuki, Makoto Sakurada, Carolyn Sampson, Stephan Schreckenberger. Bach Secular Cantatas BWV 210 and BWV 211. BIS, 2004.\n[…]\nSchweigt stille, plaudert nicht, BWV 211: performance by the Netherlands Bach Society (video and background information)\n[…]\nSchweigt stille, plaudert nicht: history, scoring, Bach website (in German)\n[…]\nBach Cantata Translations: German libretto with parallel English translation by Pamela Dellal"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lei da Pureza da Cerveja",
      "descricao": "Regulamento da Baviera que limitava os ingredientes permitidos na fabricação de cerveja"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na versão original, a Lei da Pureza da Baviera permitia fazer cerveja com quantos ingredientes?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Reinheitsgebot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Reinheitsgebot",
        "situacao": "ok",
        "texto": "The Reinheitsgebot (German pronunciation: [ˈʁaɪnhaɪtsɡəˌboːt] ; lit. 'purity order') is a series of regulations limiting the ingredients in beer in Germany and the states of the former Holy Roman Empire. The best known version of the law was adopted in Bavaria in 1516 (by William IV), but similar regulations predate the Bavarian order, and modern regulations also significantly differ from the 1516\n[…]\nModern versions of the law have contained significant exceptions for different types of beer (such as top-fermented beers), for export beers, and for different regions. The basic law now declares that only malted barley/wheat/rye, hops, water and yeast are permitted. The Reinheitsgebot strictly forbids the use of extenders such as rice, maize, sorghum and other grains favored by American brewers to give a lighter taste as well as being less expensive to brew.\n[…]\nIn response to the growth of craft breweries globally, some commentators, German brewers, and even German politicians have argued that the Reinheitsgebot has slowed Germany's adoption of beer trends popular in the rest of the world, such as Belgian lambics and American craft styles. In late 2015, Bavarian brewers voted in favor of a revision to the beer laws to allow other natural ingredients.\n[…]\nOutside of Germany, the Reinheitsgebot was formally incorporated in Greek law by the first Greek king, Otto (originally a Bavarian prince). German brewers at the Tsingtao Brewery in the German colony in Qingdao, China also followed the law voluntarily.\n[…]\nSome breweries outside Germany also claim to be compliant with the Reinheitsgebot as part of their marketing, such as:\n[…]\nFor some vegans the Reinheitsgebot can be seen as a strong indication that the beer marked as such is vegan. This is in absence of legislation in the UK and elsewhere which require beers to be labelled with all their ingredients and nutritional information."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reinheitsgebot",
        "situacao": "ok",
        "texto": "A Reinheitsgebot (português: Lei da Pureza da Cerveja) foi uma lei promulgada pelo duque Guilherme IV da Baviera, em 23 de abril de 1516. A lei da pureza da cerveja instituiu que a cerveja deveria ser fabricada apenas com os seguintes ingredientes: água, malte de cevada e lúpulo. A levedura de cerveja não era conhecida à época.\n[…]\nHoje, devido à regulamentação europeia, outros ingredientes são autorizados nas cervejas alemãs, mas a maioria dos cervejeiros alemães continua a seguir as prescrições do Reinheitsgebot, consideradas garantia de qualidade. Isto acontece principalmente nas marcas vendidas em território alemão.\n[…]\nProclamamos com este decreto, por Autoridade de nossa Província, que no Ducado da Baviera, bem como no país, nas cidades e nos mercados, as seguintes regras se aplicam à venda da cerveja:\n[…]\nDo dia de São Jorge (23 de Abril) ao dia de São Miguel (29 de setembro), o litro [nota: uma unidade equivalente ao atual litro] não será vendido por mais de dois pfennig do mesmo valor, e o copo não mais de três Heller (Heller geralmente é meio pfennig).\n[…]\nAlém disso, nós desejamos enfatizar que no futuro em todas as cidades, nos mercados e no país, os únicos ingredientes usados para fabricação da cerveja devem ser cevada, lúpulo e água.\n[…]\nSe, entretanto, um comerciante no país, na cidade ou nos mercados comprar dois ou três barris da cerveja (que contém 60 litros) para revendê-los ao vendedor comum, apenas para este será permitido acrescentar mais um Heller por copo, do que o mencionado acima. Além disso, deverá acrescentar um imposto e aumentos subsequentes ao preço da cevada (considerando também que os tempos da colheita diferem, devido à localização das plantações).\n[…]\nNós, o Ducado da Baviera, teremos o direito de fazer apreensões para o bem de todos os interessados.\n[…]\nCerveja na Alemanha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Café expresso",
      "descricao": "Café concentrado preparado forçando água quente sob alta pressão através do pó fino, de origem italiana."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Para fazer um café expresso, a máquina força a água quente pelo pó a uma pressão de cerca de quantas atmosferas?",
    "resposta": "Cerca de nove",
    "distratores": [
      "Cerca de duas",
      "Cerca de trinta",
      "Cerca de cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Espresso"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Espresso",
        "situacao": "ok",
        "texto": "Espresso ( , Italian: [eˈsprɛsso]) is a concentrated form of coffee produced by forcing hot water under high pressure through finely ground coffee beans. Originating in Italy, espresso has become one of the most popular coffee-brewing methods worldwide. It is characterized by its small serving size, typically 25–30 ml, and its distinctive layers: a dark body topped with a lighter-coloured foam cal\n[…]\nThe first Bezzera and Pavoni espresso machines in 1906 took 45 seconds to make a cup of coffee, one at a time, expressly for you.\n[…]\nItaly uses the term espresso, substituting s for most x letters in Latin-root words, with the term deriving from the past participle of the Italian verb esprimere, itself derived from the Latin exprimere, which means 'to express', and refers to the process by which hot water is forced under pressure through ground coffee; x is not considered part of the standard Italian alphabet. Italians commonly refer to espresso simply as caffè (lit. 'coffee'), espresso being the ordinary coffee to order.\n[…]\nAccording to Slate magazine, most commentary on whether expresso should be considered correct takes the negative. Such sources include Garner's Modern American Usage and Oxford Dictionaries online, who defer to how espresso is spelled in Italy. Among some of these opponents, its use is considered a faux pas, and a mark of lacking sophistication. The Oxford English Dictionary and Merriam-Webster call it a variant spelling.\n[…]\nTriple baskets are normally straight-sided. Portafilters will often come with two spouts, usually closely spaced, and a double-size basket. Each spout can optionally dispense into a separate cup, yielding two solo-size (but doppio-brewed) espresso, or into a single cup (hence the close spacing). True solo espresso are rare, with a single espresso in a café generally being half of a doppio espresso.\n[…]\nUnderstanding Espresso series by James Hoffmann"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caf%C3%A9_expresso",
        "situacao": "ok",
        "texto": "Café expresso, expresso, ou internacionalmente, espresso (do italiano caffè espresso), é um método de preparar café através da passagem de água quente sob alta pressão pelo café moído. O café expresso tradicional, em máquina industrial, é feito sob pressão de novecentos a mil quilopascals (nove a dez atmosferas ou bars).\n[…]\nFoi criado e desenvolvido na Itália desde o início do século XX, mas até a década de 1940 era preparada sob pressão de vapor. Sua invenção é atribuída ao milanês Luigi Bezzera em 1901, mas o termo \"expresso\" (expresso) surgiu por volta de 1946 com a comercialização das máquinas do inventor Achille Gaggia e a popularização deste processo de extração do café.\n[…]\nEm Portugal, quando se pede um café, é servido um café expresso, termo que, no entanto, não é usado correntemente. Em Lisboa, o termo tradicional para designar o expresso é \"bica\", referente ao tubo por onde sai o café dos antigos recipientes de café filtrado. Por outro lado, no Porto, era costume pedir um \"cimbalino\", como referência a La Cimbali, uma popular marca de máquinas de fazer expresso.\n[…]\nGalão: café com espuma de leite, misturado na proporção cerca de 1/4 do café, 3/4 espuma de leite, servido num copo alto.\n[…]\nCafé cortado: espresso \"cortado\" com uma pequena quantidade de leite quente para reduzir a acidez.\n[…]\nLong Black: espresso e água quente em partes iguais.\n[…]\n\"Café carioca\" ou \"carioca de café\": variação popular no Brasil e em Portugal, respectivamente. Filtrado ou coado (muitas vezes, servido adoçado com açúcar ou adoçante), fraco (maior proporção de água). É o famoso \"cafezinho\" brasileiro. Segundo o costume portugues o \"carioca\" deve ter metade do café de um expresso (na prática, extraem-se directamente dois cariocas por cada dose de café). [carece de fontes]?\n[…]\nCafé",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Açafrão",
      "descricao": "Especiaria feita dos estigmas secos da flor Crocus sativus, usada em pratos como a paella e o risoto"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O açafrão é feito dos fiozinhos vermelhos colhidos à mão no centro da flor. Quantos desses estigmas cada flor tem?",
    "resposta": "Três",
    "distratores": [
      "Um",
      "Cinco",
      "Doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Saffron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saffron",
        "situacao": "ok",
        "texto": "Saffron ( SAF-rən, -⁠ron; Persian: زعفران, romanized: zafarān) is a spice derived from the sterile autumn-blooming flower of Crocus sativus, commonly known as the \"saffron crocus\". The vivid crimson stigma and styles (in industry jargon: 'threads') are collected and dried for use mainly as a food seasoning and colourant.\n[…]\nCommon saffron substitutes include safflower (Carthamus tinctorius, which is often sold as \"Portuguese saffron\" or \"açafrão\"), annatto, and turmeric (Curcuma longa). In Medieval Europe, turmeric was also known as \"Indian saffron\" because of its yellow-orange colour.\n[…]\nThe Essex town of Saffron Walden, named for its new specialty crop, emerged as a prime saffron growing and trading centre in the 16th and 17th centuries but cultivation there was abandoned; saffron was re-introduced around 2013 as well as other parts of the UK (Cheshire).\n[…]\nAccording to Afghanistan's Ministry of Agriculture, Irrigation, and Livestock, production increased from 20 metric tons in 2022 to 46 metric tons in 2024. Key export markets include India, Europe, and the United States, where Afghan saffron is prized for its high quality.\n[…]\nSaffron cultivation contributes significantly to Afghanistan's economy, supporting thousands of farmers, particularly women. Over 80% of the saffron workforce consists of women, who primarily handle harvesting and processing. The sector has provided employment opportunities for over 40,000 people, playing a role in agricultural sustainability and rural development.\n[…]\nAfghan saffron is known for its deep red color, strong aroma, and high crocin content, a compound that determines color intensity. It has been ranked among the highest quality saffron varieties in recent years with a 310 Crocin color quality based on ISO 3632.2 standards.\n[…]\n\"Saffron\", Darling Biomedical Library, UCLA"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7afr%C3%A3o",
        "situacao": "ok",
        "texto": "Crocus sativus, popularmente referido por açafrão, é uma planta da família das iridáceas. É utilizado desde a antiguidade como especiaria, principalmente na culinária do Mediterrâneo — região de onde a variedade é originária — no preparo de risotos, aves, caldos, massas e doces. É um ingrediente essencial à paelha espanhola.\n[…]\nNo entanto, os açafrões verdadeiros têm três estames e três estiletes, enquanto os colchicums têm seis estames e um estilete; e pertencem a uma família diferente, Colchicaceae. Colchicums também são tóxicos, tornando-se particularmente crucial distingui-los do açafrão.\n[…]\nA palavra \"açafrão\" provém do árabe hispânico azza‘farán, derivado do árabe za‘farān (زعفران). A origem mais remota do termo é incerta; alguns autores a relacionam ao persa antigo zarparān, \"de fios dourados\", em alusão aos estigmas da flor ou à coloração dourada produzida pela especiaria.\n[…]\nOs estigmas da flor são usados como tempero culinário açafrão. Dependendo do tamanho dos estigmas colhidos, as flores de 50.000 a 75.000 plantas individuais são necessárias para produzir cerca de 1 libra de açafrão; cada cormo produz apenas uma ou duas flores, e cada flor produz apenas três estigmas. Os estigmas devem ser colhidos no meio da manhã, quando as flores estão totalmente abertas.\n[…]\nEm média, uma flor fresca fornece 0,03 g de açafrão fresco ou 0,007 g de açafrão seco.\n[…]\nCormos de açafrão devem ser plantados 4 in (10 cm) separados e em uma calha 4 in (10 cm) profundo. A flor cresce melhor em áreas de pleno sol em solo bem drenado com níveis moderados de conteúdo orgânico. Os rebentos se multiplicarão a cada ano e cada rebentos durará de 3 a 5 anos.\n[…]\nHistória do açafrão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Beaujolais Nouveau",
      "descricao": "Vinho tinto jovem da região francesa de Beaujolais, feito com a uva gamay e lançado poucas semanas após a colheita."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O vinho Beaujolais Nouveau é lançado todo ano numa quinta-feira fixa de novembro. Qual delas?",
    "resposta": "A terceira",
    "distratores": [
      "A primeira",
      "A segunda",
      "A última"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beaujolais_nouveau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beaujolais_nouveau",
        "situacao": "ok",
        "texto": "Beaujolais nouveau ( BOH-zhə-LAY noo-VOH, French: [boʒɔlɛ nuvo]) is a red wine made from Gamay grapes produced in the Beaujolais region of France. It is a vin de primeur, fermented just a few weeks before being released for sale on the third Thursday of November. Distributors compete to get the first bottles to different global markets. In 2024, Beaujolais nouveau sold 14.3 million bottles worldwi\n[…]\nThese rules were relaxed in November 1951, and the Union Interprofessionnelle des Vins du Beaujolais (Uivb) formally set 15 November as the release date for what would henceforth be known as Beaujolais nouveau. In 1985, the Institut National des Appellations d'Origine (INAO) established the third Thursday of November as a uniform release date for wine.\n[…]\nThe release date of Beaujolais nouveau was set in 1985. Under French law, Beaujolais nouveau is released at 00:01 am on the third Thursday of November.\n[…]\nThis \"Beaujolais Day\" is accompanied by publicity events and heavy advertising. The traditional slogan, even in English-speaking countries, was \"Le Beaujolais nouveau est arrivé!\" (literally, \"The new Beaujolais has arrived!\"), but in 2005, this was changed to \"It's Beaujolais Nouveau Time!\". In the United States, it is promoted as a drink for Thanksgiving, which always falls exactly one week after the wine is released (on the fourth Thursday of November).\n[…]\nThe commercial success of Beaujolais nouveau led to the development of other \"primeur\" wines in different parts of France, such as the Gaillac AOC near Toulouse. These wines are typically released on the third Thursday of November, just as their counterparts in Beaujolais are. The practice has spread to other wine-producing countries such as Italy (\"Vino Novello\"), Spain (\"vino joven\"), the Czech Republic (\"Svatomartinské víno\") and the US (\"nouveau wine\")."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Beaujolais_nouveau",
        "situacao": "ok",
        "texto": "Beaujolais nouveau (pronúncia em francês: ​[bo.ʒɔ.lɛ nu.vo]) é um vinho tinto feito de uvas Gamay cuja produção é feita na região francesa de Beaujolais. É o mais popular vin de primeur, fermentado por poucas semanas antes de ser comercializado na terceira quinta-feira de novembro. Esse \"Dia do Beaujolais Nouveau\" costumava ser objeto de muita propaganda, com disputas para fazer as primeiras garra\n[…]\nA prática de lançamento corrente é enviar as caixa do vinho com antecedência da data prevista e vendê-la a partir do primeiro minuto da terceira quinta-feira do mês de novembro no horário local.\n[…]\nAs corridas de distribuição espalharam-se para os países europeus vizinhos na década de 1980, seguidos pela América do Norte, e década de 1990 para a Ásia. Em 1985, a data foi mudada para a terceira quinta-feira do mês de novembro para obter maiores vantagens na comercialização durante o fim de semana subsequente.\n[…]\nEsse vinho é produzido para consumo imediato. Ainda que alguns nouveau possam ser mantidos por alguns anos, não razão a justificar isso, uma vez que ele não melhora com a idade. Como comparação, os outros vinhos Beaujolais AOC são lançados no ano seguinte ao da colheita e podem ser armazenados por um ou mais anos antes do consumo. Os vinhos possuem variação definida entre as safras e como tais podem ser considerados uma prévia indicativa da qualidade da safra regional de cada ano.\n[…]\nO sucesso comercial do Beaujolais nouveau levou ao desenvolvimento de outros vinhos \"primeur\" em outras partes da França, tais como o Gaillac AOC, próximo a Toulouse. Esses vinhos são tipicamente lançados na terceira quinta-feira de novembro, na mesma data dos vinhos em Beaujolais. A prática difundiu-se em outros países vitivinicultores, tais como a Itália (\"Vino Novello\"), Espanha (\"vino nuevo\") e os Estados Unidos (\"nouveau wine\").\n[…]\nBeaujolais\n[…]\nFatos Fascinantes sobre o Beaujolais Nouveau (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Doze uvas da sorte",
      "descricao": "Tradição espanhola de comer uma uva a cada badalada da meia-noite na virada do Ano-Novo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Espanha, à meia-noite da virada do ano, come-se uma uva a cada badalada do relógio. Quantas uvas são ao todo?",
    "resposta": "Doze",
    "distratores": [
      "Sete",
      "Nove",
      "Treze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Twelve_Grapes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Twelve_Grapes",
        "situacao": "ok",
        "texto": "The Twelve Grapes (Spanish: las doce uvas (de la suerte), lit. 'the twelve grapes (of luck)') is a Spanish tradition that consists of eating a grape with each of the twelve clock bell strikes at midnight of 31 December to welcome the New Year. Each grape and clock bell strike represents each of the coming twelve months."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Parmesão",
      "descricao": "Queijo italiano duro e granuloso de leite de vaca (Parmigiano Reggiano), curado por pelo menos doze meses."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Uma roda inteira do queijo parmesão italiano, o Parmigiano Reggiano, pesa em média cerca de quantos quilos?",
    "resposta": "Cerca de quarenta",
    "distratores": [
      "Cerca de cinco",
      "Cerca de quinze",
      "Cerca de cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Parmigiano_Reggiano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Parmigiano_Reggiano",
        "situacao": "ok",
        "texto": "Parmesan (Italian: Parmigiano Reggiano, pronounced [parmiˈdʒaːno redˈdʒaːno]) is an Italian hard, granular cheese produced from cow's milk and aged at least 12 months. It is a grana-type cheese, along with Grana Padano, the historic Granone Lodigiano, and others.\n[…]\nThe term Parmesan may refer to either Parmigiano Reggiano or, when outside the European Union and Lisbon Agreement countries, a locally produced imitation.\n[…]\nThe names Parmigiano Reggiano and Parmesan are protected designations of origin (PDO) for cheeses produced in these provinces under Italian and European law. Outside the EU, the name Parmesan is legally used for imitations, with only the full Italian name unambiguously referring to PDO Parmigiano Reggiano.\n[…]\nA typical Parmigiano Reggiano wheel is about 18–24 cm (7–9 in) high, 40–45 cm (16–18 in) in diameter, and weighs 38 kg (84 lb).\n[…]\nIn many areas outside Europe the name Parmesan has become genericised and may denote any of several hard Italian-style grating types of cheese. These cheeses, chiefly from the US and Argentina, are often sold under names intended to evoke the original, such as Parmesan, Parmigiana, Parmesana, Parmabon, Real Parma, Parmezan, or Parmezano.\n[…]\nGrana Padano is an Italian cheese similar to Parmigiano Reggiano, but is produced mainly in Lombardy, where Padano refers to the Po Valley (Pianura Padana); the cows producing the milk may be fed silage as well as grass; the milk may contain slightly less fat, milk from several different days may be used, and must be aged a minimum of nine months.\n[…]\nReggianito is an Argentine cheese similar to Parmigiano Reggiano. Developed by Italian-Argentine cheesemakers, the cheese is made in smaller wheels and aged for less time but is otherwise broadly similar.\n[…]\nParmesan knife"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parmes%C3%A3o",
        "situacao": "ok",
        "texto": "O parmesão é um tipo de queijo italiano, com denominação de origem controlada conhecida como Parmigiano-Reggiano. Devido a sua popularidade na culinária, este tipo de queijo foi copiado e é produzido em regiões com presença de colônias italianas como o Brasil e os Portugal , o que tem gerado disputas legais quanto ao uso da marca.\n[…]\nPor ser um produto de Denominação de Origem Protegida, a marca Parmigiano-Reggiano, legalmente, só pode ser usada em queijos produzidos na região de Parma, Reggio Emilia, Módena, Bolonha e Mântua (ao sul do rio Pó), enquanto que a sua contraparte produzida a norte do Pó é o Grana Padano.\n[…]\nO parmesão vem do suíço sbrinz. Durante a Idade Média, o sbrinz foi transportado da Suíça para a Itália através dos Alpes. O queijo era chamado de spalenkäse naquela época, antes de assumir o nome de sbrinz no século XVI. Os queijeiros suíços estabeleceram-se na Itália e deram origem ao parmesão, feito com a mesma técnica do sbrinz.\n[…]\nO queijo parmesão deve possuir as seguintes características:\n[…]\nTodos os produtores de queijo Parmigiano Reggiano são membros do Consorzio del Formaggio Parmigiano Reggiano, fundado em 1928. Para além de estabelecer e fazer cumprir as normas DOP, o Consorzio patrocina também eventos de marketing.\n[…]\nQuando uma série de terramotos atingiu o norte de Itália em 2012, as prateleiras que armazenavam cerca de 12 milhões de quilogramas - ou mais de 300.000 rodelas - de parmesão foram derrubadas. Os prejuízos, que representam cerca de 10% da produção anual, foram estimados em cerca de 80 milhões de euros. O queijo retirado dos círculos danificados foi vendido para angariar fundos para as reparações.\n[…]\nA partir de 2017, são produzidas anualmente cerca de 3,6 milhões de cabeças (aproximadamente 137 000 toneladas) de parmesão, que consome cerca de 18% de todo o leite produzido em Itália.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Tequila",
      "descricao": "Bebida destilada mexicana, originária da região de Jalisco"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pelas regras mexicanas, no mínimo que parte dos açúcares fermentados de uma tequila precisa vir do agave-azul?",
    "resposta": "Cinquenta e um por cento",
    "distratores": [
      "Trinta por cento",
      "Setenta e cinco por cento",
      "Cem por cento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tequila"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tequila",
        "situacao": "ok",
        "texto": "Tequila (; Spanish: [teˈkila] ) is a distilled beverage made from the blue agave plant, primarily in the area surrounding the town of Tequila 65 km (40 mi) northwest of Guadalajara, and in the Jaliscan Highlands (Los Altos de Jalisco) of the central western Mexican state of Jalisco.\n[…]\nThe Norma Oficial Mexicana (NOM) applies to all processes and activities related to the supply of agave, production, bottling, marketing, information, and business practices linked to the distilled alcoholic beverage known as tequila. Tequila must be produced using agave of the species Tequilana Weber Blue variety, grown in the federal states and municipalities indicated in the Declaration.\n[…]\nThe Mexican government took initiatives to protect tequila as early as the 1970s. Tequila became the country's first appellation of origin (AO) in 1974, and in 1978 it was internationally registered for protection under the Lisbon Agreement for the Protection of Appellations of Origin and their International Registration. The AO defines the area in which tequila can be produced, essentially the area home to the blue agave from which it is derived.\n[…]\nUnder the AO, selected municipalities within only five Mexican states can grow the agave and produce tequila. These municipalities were selected based on geographical factors (such as climate, altitude and soil characteristics) and human factors (the use of traditional techniques of producing tequila that have been passed on from generation to generation).\n[…]\nFurther to the AO registration, the Mexican government holds all the rights over the use of the name tequila.\n[…]\nThe Mexican authorities took the opportunity of the bilateral negotiations with China to ensure that the latter accepted tequila as a geographically indicated product.\n[…]\nMexican wine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tequila",
        "situacao": "ok",
        "texto": "Tequila ou tequilha é uma bebida alcoólica destilada feita da agave-azul, primariamente na região da cidade de Tequila, no estado mexicano de Jalisco, a 65 quilómetros a nordeste de Guadalajara.\n[…]\nO solo vulcânico vermelho da região circundante é particularmente propício ao crescimento do agave-azul, e mais de 300 milhões de plantas são colhidas por ano. A agave tequilana cresce diferentemente dependendo da região. Agaves-azuis plantadas em áreas altas são maiores e mais doces em aroma e sabor. Agaves das áreas mais baixas têm um sabor e fragrância mais herbáceos.\n[…]\nO agave-azul é uma planta semelhante a um \"abacaxi gigante\" e só se desenvolve em terrenos de solo vulcânico e clima árido. Precisa de 8 a 12 anos de idade para estar pronto para produção, sendo necessários 7 quilos de agave para produção de 1 litro de tequila.\n[…]\nA produção se inicia assando as piñas (o centro da planta) da agave-azul por mais de 48 horas e esfriando por mais 14 horas antes de serem retiradas dos fornos, para converter as fibras em açúcar fermentável (frutose). Depois dessa etapa, são moídas para extração de todo açúcar e o resultado é um rico líquido chamado Aguamiel. Adiciona-se a levedura natural ou de Saccharomyces cerevisiae para fermentação, que quebra as moléculas do açúcar e as transforma em álcool.\n[…]\nSe a garrafa de tequila não indica, no seu rótulo, que é feita cem por cento de agave-azul (sem adição de açúcar), então a tequila provavelmente é mixto (no mínimo 51 por cento de agave-azul em sua composição).\n[…]\nMuitas tequilas de alta qualidade, feitas cem por cento com agave, não provocam sensação significativa de ardor na garganta.\n[…]\nCámara Nacional de la Industria Tequilera (em castelhano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Garrafa de vinho",
      "descricao": "Recipiente de vidro padronizado em que o vinho é engarrafado e vendido."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Muito usada para champanhe em comemorações, a garrafa chamada magnum equivale a quantas garrafas comuns de vinho?",
    "resposta": "Duas",
    "distratores": [
      "Três",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wine_bottle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wine_bottle",
        "situacao": "ok",
        "texto": "A wine bottle is a bottle, generally a glass bottle, that is used for holding wine. Some wines are fermented in the bottle while others are bottled only after fermentation. Recently the bottle has become a standard unit of volume to describe sales in the wine industry, measuring 750 millilitres (26.40 imp fl oz; 25.36 US fl oz). Wine bottles are produced, however, in a variety of volumes and shape\n[…]\nMost champagne houses are unable to carry out secondary fermentation in bottles larger than a magnum due to the difficulty in riddling large, heavy bottles. After the secondary fermentation completes, the champagne must be transferred from the magnums into larger bottles, which results in a loss of pressure.\n[…]\nSome believe this re-bottling exposes the champagne to greater oxidation and therefore results in an inferior product compared to champagne which remains in the bottle in which it was fermented.\n[…]\nChampagne and other sparkling wines: Broadly similar to Burgundy bottles, with sloping shoulders, but wider, thick-walled, and with a more pronounced punt\n[…]\nIt increases the strength of the bottle, allowing it to hold the high pressure of sparkling wine/champagne.\n[…]\nIt provides a grip for riddling a bottle of sparkling wine manually in the traditional champagne production process."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garrafa_de_vinho",
        "situacao": "ok",
        "texto": "Uma garrafa de vinho é uma garrafa, geralmente uma garrafa de vidro, que é usada para segurar vinho. Alguns vinhos são fermentados na garrafa, enquanto outros são engarrafados somente após a fermentação. Recentemente, a garrafa tornou-se uma unidade padrão de volume para descrever as vendas na indústria vinícola, medindo 750 mililitros (26,40 imp fl oz; 25,36 FL oz). Garrafas de vinho são produzid\n[…]\nGarrafa lyonesa\n[…]\nEnvelhecimento do vinho\n[…]\nSegredos do Vinho: Tipos de garrafas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Lei Seca dos Estados Unidos",
      "descricao": "Proibição nacional da produção, do transporte e da venda de bebidas alcoólicas nos Estados Unidos, de 1920 a 1933."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Lei Seca, que proibiu as bebidas alcoólicas nos Estados Unidos, foi instituída por qual emenda à Constituição americana?",
    "resposta": "Décima Oitava Emenda",
    "distratores": [
      "Primeira Emenda",
      "Quinta Emenda",
      "Vigésima Primeira Emenda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eighteenth_Amendment_to_the_United_States_Constitution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eighteenth_Amendment_to_the_United_States_Constitution",
        "situacao": "ok",
        "texto": "The Eighteenth Amendment (Amendment XVIII) to the United States Constitution established the prohibition of alcohol in the United States. The amendment was proposed by Congress on December 18, 1917, and ratified by the requisite number of states on January 16, 1919. The Eighteenth Amendment was repealed by the Twenty-first Amendment on December 5, 1933, making it the only constitutional amendment \n[…]\nOrganized-crime syndicates became skilled at bribing police and politicians to overlook violations of Prohibition during the 1920s. Chicago's Al Capone emerged as the most notorious example, earning an estimated $60 million annually from his bootlegging and speakeasy operations. Gambling and prostitution also reached new heights, and a growing number of Americans came to blame Prohibition and to condemn it as a dangerous infringement of individual freedom.\n[…]\nRoosevelt included a plan for repealing the 18th Amendment, and his victory that November led to the end of Prohibition.\n[…]\nThe prisons became crowded, which led to fewer arrests for the distribution of alcohol, as well as those arrested being charged with small fines rather than prison time. The murder rate fell for two years, but then rose to record highs due to gangland killings, a trend that reversed the very year prohibition ended. The homicide rate increased from six per 100,000 population in the pre-Prohibition period to nearly ten.\n[…]\nAnti-prohibition groups were formed and worked to have the Eighteenth Amendment repealed, which was done by adoption of the Twenty-first Amendment on December 5, 1933.\n[…]\nSection 113 of the Constitution of Australia\n[…]\nThe Constitution of the United States of America: Analysis and Interpretation: Analysis of Cases Decided by the Supreme Court of the United States to June 28, 2002, United States Senate doc. no. 108–17.\n[…]\nCRS Annotated Constitution: 18th Amendment"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/D%C3%A9cima_Oitava_Emenda_%C3%A0_Constitui%C3%A7%C3%A3o_dos_Estados_Unidos",
        "situacao": "ok",
        "texto": "A Décima Oitava Emenda à Constituição dos Estados Unidos, juntamente com a Lei Volstead que definiu o conceito de \"licor embriagador\" nos Estados Unidos, estabeleceu a lei seca no país. Foi ratificada em janeiro de 1919 e substituída pela Vigésima Primeira Emenda em 1933, sendo a única instância de uma Emenda que foi depois anulada.\n[…]\nA Emenda XVIII também foi única pelo facto de ter estabelecido um prazo para a entrada em vigor após a ratificação, além de colocar um prazo para ser ratificada pelos Estados.\n[…]\nSection 3. This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of the several States, as provided in the Constitution, within seven years from the date of the submission hereof to the States by the Congress.\n[…]\nSecção 1. Um ano depois da ratificação deste artigo serão proibidos pelo presente artigo o fabrico, venda ou transporte de licores embriagantes dentro dos Estados Unidos e de todos os territórios submetidos à sua jurisdição, bem como a sua importação para os mesmos.\n[…]\nSecção 2. O Congresso e os Estados terão autoridade concorrente para reforçar este artigo por meio de legislação apropriada.\n[…]\nSecção 3. Este artigo ficará sem efeito a menos que seja ratificado como emenda à Constituição pelas legislaturas da maioria dos distintos Estados na forma prevista pela Constituição e dentro dos sete anos seguintes à data em que o Congresso o submeta aos Estados.\n[…]\nA ratificação da Emenda ficou completa em 16 de janeiro de 1919, quando o Nebraska se tornou o 36.º dos 48 estados então integrantes da União a ratificá-la. Em 29 de janeiro, o secretário de Estado Frank L. Polk certificou a ratificação.\n[…]\nOs seguintes Estados ratificaram a emenda:\n[…]\nOs seguintes estados rejeitaram a Emenda:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pizza",
      "descricao": "Prato italiano de massa de trigo achatada coberta com tomate, queijo e outros ingredientes, assada em forno quente."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A pizza moderna, de massa coberta com molho de tomate e queijo, nasceu em qual cidade italiana?",
    "resposta": "Nápoles",
    "distratores": [
      "Roma",
      "Milão",
      "Veneza"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pizza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pizza",
        "situacao": "ok",
        "texto": "Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.\n[…]\nThe term pizza was first recorded in AD 997, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania. Raffaele Esposito is often credited with creating the modern version of pizza in Naples at the end of the 19th century. In 2009, Neapolitan pizza was registered with the European Union as a traditional speciality guaranteed (TSG) dish. In 2017, the art of making Neapolitan pizza was included on UNESCO's list of intangible cultural heritage.\n[…]\nThe Associazione Verace Pizza Napoletana (lit. 'True Neapolitan Pizza Association') is a non-profit organization founded in 1984 headquartered in Naples that aims to promote traditional Neapolitan pizza. In 2009, upon Italy's request, Neapolitan pizza was registered with the European Union as a traditional speciality guaranteed (TSG) dish, and in 2017 the art of its making was included on UNESCO's list of intangible cultural heritage.\n[…]\nAuthentic Neapolitan pizza (Italian: pizza napoletana) is made with San Marzano tomatoes, grown on the volcanic plains south of Mount Vesuvius, and either mozzarella di bufala campana, made with milk from water buffalo raised in the marshlands of Campania and Lazio, or fior di latte. Buffalo mozzarella is protected with its own European protected designation of origin (PDO).\n[…]\nPissaladière is similar to an Italian pizza, with a slightly thicker crust and a topping of cooked onions, anchovies, and olives.\n[…]\nPizza strips is a tomato pie of Italian-American origin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pizza",
        "situacao": "ok",
        "texto": "Pizza  (português brasileiro e português europeu) ou piza (português europeu) é uma preparação culinária que consiste em um disco de massa fermentada de farinha de trigo, coberto com molho de tomate e os ingredientes variados que normalmente incluem algum tipo de queijo, carnes preparadas ou defumadas e ervas, normalmente orégano ou manjericão, tudo assado em forno.\n[…]\nO termo pizza foi registrado pela primeira vez no ano de 997 d.C., em um manuscrito em latim da cidade do sul da Itália de Gaeta, em Lazio, na fronteira com Campânia. Raffaele Esposito é frequentemente creditado por criar a pizza moderna em Nápoles. Em 2009, a pizza napolitana foi registrada junto à União Europeia como um prato de especialidade tradicional garantida. Em 2017, a arte de fazer pizza napolitana foi adicionada à lista de patrimônio cultural imaterial da UNESCO.\n[…]\nMas foi em Nápoles, sul da Itália, nos anos de 1600, que se preparou a primeira pizza como hoje conhecemos. Os italianos acrescentaram o tomate, domesticado pelos povos indígenas na América e levado à Europa pelos conquistadores espanhóis. Porém, nessa época, a pizza ainda não tinha a sua forma característica, redonda, como a conhecemos hoje, mas sim dobrada ao meio, feito um sanduíche ou um calzone.\n[…]\nEsta iguaria da gastronomia italiana foi amplamente difundida em meados do século XIX, em 1889, graças à habilidade do primeiro pizzaiolo da história, dom Raffaele Espósito, um padeiro de Nápoles ao serviço do rei Humberto I e da sua esposa Margarida, a quem ele homenageia ao confeccionar uma pizza imitando as cores da bandeira italiana — branco, vermelho e verde — utilizando para isso mussarela, tomate e manjericão, produtos que lhe permitiam obter as colorações desejadas.\n[…]\nMargherita: queijo mozarela, tomate italiano e folhas de manjericão (nomeada em homenagem à princesa-consorte Margarida de Saboia).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Milho",
      "descricao": "Gramínea alta Zea mays, domesticada no México, cultivada pelos grãos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O milho, que vira pipoca, pamonha e polenta, foi domesticado há cerca de nove mil anos em qual país atual?",
    "resposta": "México",
    "distratores": [
      "Peru",
      "Brasil",
      "Estados Unidos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maize"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maize",
        "situacao": "ok",
        "texto": "Maize (US: ; Zea mays), also known as corn, is a tall stout grass that produces cereal grain. The leafy stalk of the plant gives rise to male inflorescences or tassels which produce pollen, and female inflorescences called ears. The ears yield grain, known as kernels or seeds. In modern commercial varieties, these are usually yellow or white; other varieties can be of many colors. Maize was domest\n[…]\nIn 2004, John Doebley identified Balsas teosinte, Zea mays subsp. parviglumis, native to the Balsas River valley in Mexico's southwestern highlands, as the crop wild relative genetically most similar to modern maize. The middle part of the short Balsas River valley is the likely location of early domestication. Stone milling tools with maize residue have been found in an 8,700 year old layer of deposits in a cave not far from Iguala, Guerrero.\n[…]\nMaize requires human intervention for its propagation. The kernels of its naturally-propagating teosinte ancestor fall off the cob on their own, while those of domesticated maize do not. All maize arose from a single domestication in southern Mexico about 9,000 years ago. The oldest surviving maize types are those of the Mexican highlands. Maize spread from this region to the lowlands and over the Americas along two major paths.\n[…]\nThe centre of domestication was most likely the Balsas River valley of south-central Mexico. Maize reached highland Ecuador at least 8000 years ago. It reached lower Central America by 7,600 years ago, and the valleys of the Colombian Andes between 7,000 and 6,000 years ago.\n[…]\nBonavia, Duccio (May 13, 2013). Maize: Origin, Domestication, and Its Role in the Development of Culture. Cambridge University Press. ISBN 978-1-107-02303-1.\n[…]\n\"Zea mays\". Germplasm Resources Information Network. Agricultural Research Service, United States Department of Agriculture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milho",
        "situacao": "ok",
        "texto": "O milho (Zea mays), também conhecido como milho-maís, maís, ou abati, é um cereal cultivado em grande parte do mundo e extensivamente utilizado como alimento humano ou para ração animal devido às suas qualidades nutricionais. Todas as evidências científicas levam a crer que seja uma planta de origem mexicana, já que a sua domesticação começou de 7 500 a 12 000 anos atrás na área central do México.\n[…]\nSegundo Mary Poll, em trabalho publicado na revista Proceedings of the National Academy of Sciences, os primeiros registros do cultivo do milho datam de há 7 300 anos, tendo sido encontrados em pequenas ilhas próximas ao litoral do México, no Golfo do México. Vestígios arqueológicos de milho encontrados na caverna Guila Naquitz no Vale de Oaxaca datam de há cerca de 6 250 anos e os mais antigos restos em cavernas de Tehuacán são de há cerca de 5 450 anos.\n[…]\nDe acordo com a Empresa Brasileira de Pesquisa Agropecuária, no Brasil apenas cinco por cento do milho produzido se destina ao consumo direto humano. No Brasil, é a matéria-prima principal de vários pratos da culinária típica brasileira, como canjica, cuscuz, polenta, angu, mingaus, pamonhas, cremes, bolos, pipoca ou simplesmente milho cozido. Na indústria, pode ser usado como componente para a fabricação de rebuçados, biscoitos, pães, chocolates, geleias, sorvetes e maionese.\n[…]\nDe acordo com um estudo genético, verificou-se que o cultivo do milho foi introduzido na América do Sul a partir do México, em duas grandes ondas: a primeira, há 5 000 anos, difundida através dos Andes; a segunda, há 2 000 anos, através das terras baixas da América do Sul.\n[…]\nNo México, o milho transgênico também enfrenta séria oposição governamental: em 1998, foi proibida a experimentação, o cultivo e a importação de milho transgênico.\n[…]\n«Página do Greenpeace sobre denúncia de plantio de milho transgênico no México»\n[…]\n«Página sobre aspectos agronômicos do Milho»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Amendoim",
      "descricao": "Planta leguminosa Arachis hypogaea, cujas sementes comestíveis se formam sob o solo"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Muito presente nas cozinhas da África e da Ásia, o amendoim é originário de qual parte do mundo?",
    "resposta": "América do Sul",
    "distratores": [
      "África",
      "Sul da Ásia",
      "Oceania"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peanut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peanut",
        "situacao": "ok",
        "texto": "The peanut (Arachis hypogaea), also known as the groundnut, goober (US, via Kikongo), goober pea, pindar (US, via Kikongo) or monkey nut (UK), is a legume crop grown mainly for its edible seeds, contained in underground pods. It is widely grown in the tropics and subtropics by small and large commercial producers, both as a grain legume and as an oil crop.\n[…]\nEdible products include peanut oil and peanut butter. Peanut sauces are used in Latin America, West Africa, and Southeast Asia, while in the Indian subcontinent, they are added to salads and stews. In North America, peanuts are used in candies, cakes, and cookies, while peanut butter is widely eaten. Some people are allergic to peanuts and can have a fatal reaction.\n[…]\nThe Arachis genus is native to South America, east of the Andes, around Peru, Bolivia, Argentina, and Brazil. Cultivated peanuts (A. hypogaea) arose from a hybrid between two wild species of peanut, thought to be A. duranensis and A. ipaensis. The initial hybrid would have been sterile, but spontaneous chromosome doubling restored its fertility, forming what is termed an amphidiploid or allotetraploid. Genetic analysis suggests the hybridization may have occurred only once and gave rise to A.\n[…]\nBeasley, John (2019). \"Peanuts\". New Georgia Encyclopedia; 49% of the American peanut crop is grown in the state of Georgia.\n[…]\nHammons, R. O. (1994). \"The origin and history of the groundnut\" in The groundnut crop: a scientific basis for improvement. Springer Netherlands. pp. 24–42.\n[…]\nJohnson, Sylvia A. (1997). Tomatoes, Potatoes, Corn, and Beans: How the Foods of the Americas Changed Eating around the World. Atheneum Books.\n[…]\nKrampner, Jon (2013). Creamy and Crunchy: An Informal History of Peanut Butter, the All-American Food. Columbia University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amendoim",
        "situacao": "ok",
        "texto": "O amendoim (Arachis hypogaea L.) é uma planta da família Fabaceae. A planta do amendoim é uma planta herbácea, com caule pequeno e folhas compostas e pinadas, contendo quatro folíolos de formato elíptico e com inserção alternada. Possui abundante indumento, raiz aprumada, medindo entre 30–50 cm de profundidade.\n[…]\nO amendoim tem uma grande importância económica, principalmente na indústria alimentar. Algumas variedades produzem sementes com uma grande quantidade de lípidos (de 45 a 50% de lipídios) e têm sido utilizadas para a fabricação de óleo de cozinha. Em várias regiões da África, o amendoim é moído para cozinhar vários pratos da culinária local, que ficam assim mais ricos em lípidos e proteínas. É muito apreciado como aperitivo, torrado ou frito.\n[…]\nO amendoim é uma planta originária da América do Sul (Brasil e países fronteiriços: Paraguai, Bolívia e norte da Argentina), na região compreendida entre as latitudes de 10º e 30º sul, com provável centro de origem na região do Chaco, incluindo os vales do Rio Paraná e Paraguai.\n[…]\nA difusão do amendoim iniciou-se para as diversas regiões da América Latina, América Central e México. No século XVIII foi introduzido na Europa. No século XIX difundiu-se do Brasil para África e do Peru para as Filipinas, China, Japão e Índia.\n[…]\nNa pendência do século XVI, os portugueses descobrem o amendoim no Brasil, onde já era cultivado pelos ameríndios nativos, tendo-o ulteriormente introduzido em Portugal, no século XVIII, e posteriormente em África, no século XIX.\n[…]\nA produção mundial de amendoins no ano de 2018, de acordo com dados da FAOSTAT, foi de aproximadamente 45,9 milhões de toneladas. A China lidera como maior produtor mundial, com 37,7% do volume produzido no mundo. O ranking dos principais produtores mundiais está listado a baixo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Pêssego",
      "descricao": "Fruto aveludado do pessegueiro, Prunus persica, originário da China."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Embora o nome remeta à Pérsia, o pêssego é originário de qual país?",
    "resposta": "China",
    "distratores": [
      "Índia",
      "Turquia",
      "Irã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peach"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peach",
        "situacao": "ok",
        "texto": "The peach (Prunus persica) is a deciduous tree that bears edible juicy fruits with various characteristics. Most are simply called peaches, while the glossy-skinned, non-fuzzy varieties are called nectarines. Though from the same species, they are regarded commercially as different fruits.\n[…]\nIn addition to being planted for its fruit, peaches are planted as ornamentals for their flowers. It is relatively short lived, usually not exceeding twenty years of age. Peaches were first domesticated and cultivated in China during the Neolithic period. The specific name persica refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted to Europe.\n[…]\nThe exact place of origin for the domestic peach is unknown. Based on archeology from the 2010s, East China near the Yangtze Delta has emerged as a likely candidate and contradicting the theory of domestication in Northwestern China. Many sources since the 1980s have listed North China as its likely place of origin. They are now naturalized in many other parts of Asia. It grows throughout eastern China and into Inner Mongolia. To the east they are found on the Korean Peninsula and in Japan.\n[…]\nAlthough its botanical name Prunus persica refers to Persia, peaches originated in China, where they have been cultivated since the Neolithic period. From the 1980s to the 2010s it was believed that cultivation started around 2000 BCE. In 2014 new research was published showing that domestication occurred as early as 6000 BCE in Zhejiang Province on the central east coast of China. The oldest archaeological peach stones are from the Kuahuqiao site near Hangzhou.\n[…]\n\"Prunus persica\". Plants for a Future.\n[…]\nBioimages.vanderbilt.edu – Prunus persica images"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pessegueiro",
        "situacao": "ok",
        "texto": "O pessegueiro (Prunus persica) é uma árvore decídua, nativa da China e sul da Ásia, de folhas alternas e serreadas, flores roxas e drupas pubescentes, comestíveis e com propriedades aperitivas e digestivas. Possui inúmeras variedades hortícolas. A infusão das folhas e sementes é calmante e as flores são usualmente utilizadas como laxante suave.\n[…]\nO nome científico da espécie, Prunus persica, significa literalmente \"ameixa persa\", pois está intimamente relacionado com a ameixa. A palavra pêssego provém do latim persicum, que significa \"da Pérsia\" pois os romanos referiam-se a essa planta como malus persicum ou \"maçã da Pérsia\", uma referência ao largo cultivo da espécie no Irã (antiga Pérsia) durante a Antiguidade, de onde foi transplantada para a Europa.\n[…]\nEstudos genéticos e a descoberta de oito  endocarpos de pêssego fossilizados bem preservados no sudoeste da China remontando a mais de dois milhões e meio de anos, sugerem que o pêssego é originário da China. A espécie é cultivada desde cerca de 2000 anos antes de Cristo. O pêssego foi trazido da China, passando pela Pérsia (Irã), e alcançou a Grécia por volta do ano 300 A.C. Os pêssegos já eram bem conhecidos pelos romanos no primeiro século antes de Cristo.\n[…]\nOs pessegueiros crescem bem em zonas temperadas de clima Mediterrânico quente com temperaturas entre 10 a 22 graus devendo ficar exposto em pleno Sol.O solo deve ser franco-limoso ou Sílico-argilosos, profundo,  bem drenado, arejado e fértil em profundidade maior que 50 cm.\n[…]\nAlergia ou intolerância são formas relativamente comuns de hipersensibilidade às proteínas contidas nos pêssegos. Os sintomas vão desde reações locais (por exemplo, síndrome alérgica oral e urticária de contato) a sintomas sistêmicos, incluindo anafilaxia (por exemplo, urticária, angioedema, sintomas gastrointestinais e respiratórios).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Moscow mule",
      "descricao": "Coquetel de vodca, ginger beer e limão, servido em caneca de cobre."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Criado nos anos quarenta, o coquetel Moscow mule, de vodca servida em caneca de cobre, surgiu em qual país?",
    "resposta": "Estados Unidos",
    "distratores": [
      "Rússia",
      "Inglaterra",
      "Polônia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moscow_mule"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moscow_mule",
        "situacao": "ok",
        "texto": "A Moscow mule is a cocktail made with vodka, ginger beer, and lime juice; garnished with a slice or wedge of lime. The drink, being a type of buck, is sometimes called vodka buck. It is properly served in a copper mug, which takes on the cold temperature of the liquid.\n[…]\nMerican Mule: Canned Moscow Mule brand.\n[…]\nMumbai mule: Moscow mule, coriander, cumin.\n[…]\nA variant which uses Mountain Dew soda in place of the ginger beer is known as a Moscow Mole.\n[…]\nThe other photo was put into a collection and used as proof to the next bar Martin visited of the popularity of the Moscow mule. The copper mug remains, to this day, a popular serving vessel for the Moscow mule.\n[…]\nAccording to a 1942 Insider Hollywood article, the Moscow mule was most popular in Los Angeles, where it originated. The Nevada State Journal (October 12, 1943) reinforced the mule's popularity in reporting: \"Already the mule is climbing up into the exclusive handful of most-popular mixed drinks\". It became known as a favorite drink of Reno casino owner William F. Harrah. In his book Beat the Dealer (1964), Edward O.\n[…]\nThorp did not name the Tahoe casino where he thought he had been poorly treated as a card counter. Instead, he wrote, \"Immediately I had a Moscow mule\", subtly hinting that the location was Harrah's Lake Tahoe, due to Harrah's then well-known proclivity for the drink.\n[…]\nThere are some health concerns related to the tradition of serving a Moscow Mule in a copper vessel. The ingredients in a Moscow mule cocktail are acidic, and the resulting beverage has a pH well below 6.0. This creates a problem when using traditional copper mugs without coating, as copper can start dissolving into acidic solutions. Copper in solution is considered toxic at concentrations above 1 mg/L.\n[…]\nKYIV MULE"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moscow_mule",
        "situacao": "ok",
        "texto": "Moscow Mule também conhecido como vodka buck é um cocktail feito com vodka, cerveja de gengibre picante, e suco de limão. Tradicionalmente, a bebida é servida numa caneca de cobre, que pode ser decorada com uma fatia de limão em sua borda.\n[…]\nA bebida foi criada no início da década de 1940 no \"Chatham Hotel\", em Manhattan, Nova Iorque quando no lançamento da cerveja de gengibre picante. Outra versão põe a origem da bebida na mesma data e local, mas na ocasião de um dos bartenders ter que limpar o estoque de vodka e cerveja de gengibre. Pelo forte sabor da cerveja e o uso de vodka, ganhou o nome de Moscow mule (mula de Moscou), mas a bebida é de origem estadunidense.\n[…]\nEm 2022, bares estadunidenses passaram a chamar o drink de \"Kiev mule\" após a invasão russa na Ucrânia no começo do ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Escala de Scoville",
      "descricao": "Escala que mede a ardência das pimentas pela concentração de capsaicinoides, criada em 1912 por Wilbur Scoville."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Criada em 1912, a escala que mede a ardência das pimentas leva o nome de qual farmacêutico americano?",
    "resposta": "Wilbur Scoville",
    "distratores": [
      "John Pemberton",
      "Gail Borden",
      "Joseph Lister"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scoville_scale",
      "https://en.wikipedia.org/wiki/Wilbur_Scoville"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scoville_scale",
        "situacao": "ok",
        "texto": "The Scoville scale is a measurement of spiciness of chili peppers and other substances, recorded in Scoville heat units (SHU). It is based on the concentration of capsaicinoids, among which capsaicin is the predominant component.\n[…]\nThe scale is named after its creator, American pharmacist Wilbur Scoville, whose 1912 method is known as the Scoville organoleptic test. The Scoville organoleptic test is a subjective assessment derived from the capsaicinoid sensitivity by people experienced with eating hot chilis.\n[…]\nThe class of compounds causing pungency in plants such as chili peppers is called capsaicinoids, which display a linear correlation between concentration and Scoville scale, and may vary in content during ripening. Capsaicin is the major capsaicinoid in chili peppers.\n[…]\nThe Scoville Heat Unit may be used to express the approximate pungency of other, unrelated TRPV1 agonists, sometimes with extrapolation for much hotter compounds. One such substance is resiniferatoxin, an alkaloid present in the sap of some species of Euphorbia plants (spurges). Since it is 1,000 times as hot as capsaicin, it would have a Scoville scale rating of 16 billion. In the table below, non-capsaicinoid compounds are italicized.\n[…]\nThe ratings for piperine (150,000 SHU) and gingerol (60,000 SHU) for example are comparative estimates and are not official Scoville ratings. While the ratings are expressed in Scoville Heat Units (SHU), they do not technically belong on the official Scoville scale because the scale is scientifically designed and defined exclusively for capsaicinoids found in chili peppers."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wilbur_Scoville",
        "situacao": "ok",
        "texto": "Wilbur Lincoln Scoville (January 22, 1865 – March 10, 1942) was an American pharmacist best known for his creation of the \"Scoville Organoleptic Test\", standardized as the Scoville scale. He devised the test and scale in 1912 while working at the Parke-Davis pharmaceutical company to measure pungency, \"spiciness\" or \"capsaicin concentration\" of various chili peppers.\n[…]\nScoville was born in Bridgeport, Connecticut, on January 22, 1865. He married Cora B. Upham on September 1, 1891, in Wollaston (Quincy, Massachusetts). They had two daughters: Amy Augusta, born August 21, 1892, and Ruth Upham, born October 21, 1897.\n[…]\nScoville wrote The Art of Compounding, which was first published in 1895 and has gone through at least 8 editions. The book was used as a pharmacological reference up until the 1960s, also making one of the earliest mentions of milk as an antidote for pepper heat. Scoville also wrote Extracts and Perfumes, which contained hundreds of formulations.\n[…]\nFor a time he was a professor at the Massachusetts College of Pharmacy and Health Sciences. In 1912, he devised the test and scale known as the \"Scoville Organoleptic Test\" while working at the Parke-Davis pharmaceutical company. While using human testers, it measured pungency, or \"spiciness\", of various chili peppers. The system was standardized as the Scoville scale.\n[…]\nScoville died of unknown causes on March 10, 1942, in Gainesville, Florida at the age of 77.\n[…]\nIn 1922, Scoville won the Ebert prize from the American Pharmaceutical Association, which is given to \"recognize the author(s) of the best report of original investigation of a medicinal substance.\" In 1929, he received the Remington Honor Medal, the APhA's top award. Scoville also received an honorary Doctor of Science from Columbia University in 1929.\n[…]\nScoville Scale/Scoville Heat Units explanation at Tabasco's website."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Scoville",
        "situacao": "ok",
        "texto": "A Escala de Scoville é usada para indicar o grau de picância ou pungência de plantas Capsicum, como as pimentas ou malaguetas.\n[…]\nEm 1912 o farmacêutico Wilbur Scoville desenvolveu um método para medir o grau de picância das pimentas. Este teste é chamado de Teste Organoléptico de Scoville ou Procedimento de Diluição e Prova. O método foi melhorado e foi criada a escala de unidades de picância de Scoville (Scoville heat units, ou SHU).\n[…]\nPimenta\n[…]\nTabela de pimentas classificadas pela escala Scoville",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Chocolate",
      "descricao": "Alimento feito das sementes fermentadas e torradas do cacau, consumido originalmente como bebida na Mesoamérica."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1875, que chocolateiro suíço acrescentou leite ao chocolate sólido e criou o chocolate ao leite?",
    "resposta": "Daniel Peter",
    "distratores": [
      "Rodolphe Lindt",
      "Coenraad van Houten",
      "Philippe Suchard"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Daniel_Peter",
      "https://en.wikipedia.org/wiki/Milk_chocolate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Daniel_Peter",
        "situacao": "ok",
        "texto": "Daniel Peter (9 March 1836 – 4 November 1919) was a Swiss chocolatier and entrepreneur who founded Peter's Chocolate. A neighbour of Henri Nestlé in Vevey, he was one of the first chocolatiers to make milk chocolate and is credited for inventing it, in 1875 or 1876, by adding powdered milk to the chocolate.\n[…]\nHe married in 1863 to Fanny-Louise Cailler, a daughter of François-Louis Cailler, also a chocolatier.\n[…]\nWhen Peter came up with the process of making milk chocolate in 1857, he had a problem with removing the water from the milk, which caused mildew to form. It was not until he enlisted the cooperation of Henri Nestlé, then a baby-food manufacturer who had invented a milk-condensation process, that finally, in 1875, after seven years of effort, he was able to bring the product onto the market.\n[…]\nHowever, it is only after many years of fine-tuning that the original formula was developed and, in 1887, the Gala Peter brand was finally launched. Daniel Peter called his product 'Gala' after the Greek word meaning 'milk'. From these developments, Switzerland soon dominated the chocolate market. Earlier, in 1896, Daniel Peter wrote:\n[…]\nDaniel Peter also launched the Delta Peter brand, which consisted of milk and cocoa powder that could be added to water to make a chocolate drink. Peter used a triangular packaging, with each individual triangle of pressed powder to be used for one cup.\n[…]\nEarlier, in 1879, Daniel Peter and Henri Nestlé formed a partnership that organised the Nestlé Company, eventually one of the largest of Europe-based confection industries, into existence. In 1904, he merged with the Kohler company. All Peter, Cailler, and Kohler brands were bought by Nestlé in 1929.\n[…]\nDaniel Peter died on 4 November 1919 in Vevey."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Milk_chocolate",
        "situacao": "ok",
        "texto": "Milk chocolate is a form of solid chocolate containing cocoa, sugar and milk. It is the most consumed type of chocolate, and is used in a wide diversity of bars and other confectionery products. Although rich in cocoa butter, milk chocolate contains a smaller amount of cocoa mass than dark chocolate does, and (as with white chocolate) contains milk solids. While its taste has been key to its popul\n[…]\nChocolate was originally sold and consumed as a beverage in pre-Columbian times, and upon its introduction to Western Europe. The word chocolate arrived in the English language about 1600, but initially described dark chocolate. The first use of the term \"milk chocolate\" was for a beverage brought to London from Jamaica in 1687, but it was not until the Swiss inventor Daniel Peter successfully combined cocoa and condensed milk in 1875 that the milk chocolate bar was invented.\n[…]\nIn 1875, the Swiss entrepreneur and chocolatier Daniel Peter, based in Vevey and related to the Cailler family, first successfully combined cocoa mass, cocoa butter, and sugar with condensed milk (recently created by his neighbour and friend Henri Nestlé) to produce solidified milk chocolate. However, this was not meant to be eaten, but it was meant to be used for chocolate milk drinks; milk chocolate as we know it today was only created a decade later.\n[…]\nBy 1911, Peter's milk chocolate recipe represented half of the world's chocolate consumption. Milk chocolate became the standard of what the public thought chocolate should be.\n[…]\nThis is the original method developed by Daniel Peter to make milk chocolate. It consists of mixing cocoa liquor with sweetened condensed milk and drying it into a hard, dry, brittle powder resembling bread crumbs. The powder is then liquefied again with additional cocoa butter, and the resulting paste undergoes refining and conching."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Daniel_Peter",
        "situacao": "ok",
        "texto": "Daniel Peter (Vevey, 1836 – 1919) foi um chocolateiro suíço. Foi o primeiro fabricante a fazer uma barra de chocolate ao leite, em 1875. Peter começou sua carreira como doceiro na sua cidade natal Vevey. O chocolateiro suíço, teve a ideia de usar leite em pó, inventado pelo químico Henri Nestlé em 1867, para fazer o chocolate ao leite.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Tarte Tatin",
      "descricao": "Torta francesa de maçãs caramelizadas na manteiga e no açúcar, popularizada no Hotel Tatin."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição, quem criou a tarte Tatin, de maçãs caramelizadas, no hotel da família, no fim do século dezenove?",
    "resposta": "Duas irmãs hoteleiras",
    "distratores": [
      "Um monge beneditino",
      "O chef do rei",
      "Um padeiro parisiense"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tarte_Tatin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tarte_Tatin",
        "situacao": "ok",
        "texto": "The tarte Tatin (French pronunciation: [taʁt tatɛ̃]) is a tart in which the fruit (usually apples) is caramelized in butter and sugar before the tart is baked. Named after the Tatin sisters who invented it and served it in their hotel as its signature dish, it originated in France but has spread to other countries over time.\n[…]\nA popular myth tells the tarte Tatin was created accidentally at the Hôtel Tatin in Lamotte-Beuvron, Loir-et-Cher, 169 km (105 mi) south of Paris, in the 1880s. The hotel was run by two sisters, Stéphanie and Caroline Tatin. There are several myths concerning the tart's origin, but the most common is that Stéphanie Tatin, who did most of the cooking, was overworked one day. She started to make a traditional apple pie but left the apples cooking in butter and sugar for too long.\n[…]\nThe tarte became a signature dish of the Hôtel Tatin. Historians and gourmets have argued whether it is a genuine creation of the Demoiselles (Misses) Tatin or the branding of an improved version of the tarte solognote, a traditional dish named after the Sologne region which surrounds Lamotte-Beuvron.\n[…]\nResearch suggests that while the tarte became a specialty of the Hôtel Tatin, the sisters did not set out to create a \"signature dish\"; they never wrote a cookbook or published their recipe; they never even called it tarte Tatin. That recognition was bestowed upon them by Curnonsky, the  French writer and epicure, as well as the Parisian restaurant Maxim's after the sisters' deaths.\n[…]\nMedia related to Tarte Tatin at Wikimedia Commons\n[…]\nGourmet magazine's recipe for tarte tatin\n[…]\nAnnual Tarte Tatin competition and recipe"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tarte_Tatin",
        "situacao": "ok",
        "texto": "A Tarte Tatin (lê-se \"tatan\") é uma torta de frutas clássica da culinária francesa, conhecida por sua combinação de maçãs caramelizadas e uma crosta de massa folhada. Originária do Vale do Loire, na França, essa receita tornou-se um ícone gastronômico e é apreciada em todo o mundo, inventada pelas irmãs Stéphanie e Caroline Tatin.\n[…]\nConsiste em uma tarte normal de fruta, com a especial particularidade de ser confeccionada ao contrário, ou seja: na forma colocam-se as frutas e por cima, derrama-se até cobrir, a massa. Ao desenformar a tarte após cozedura no forno, esta fica com as frutas no topo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Macarrão instantâneo",
      "descricao": "Macarrão pré-cozido e desidratado, preparado em minutos com água quente, inventado no Japão em 1958."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1958, que empresário japonês, nascido em Taiwan, inventou o macarrão instantâneo?",
    "resposta": "Momofuku Ando",
    "distratores": [
      "Kikunae Ikeda",
      "Akio Morita",
      "Soichiro Honda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Momofuku_Ando",
      "https://en.wikipedia.org/wiki/Instant_noodle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Momofuku_Ando",
        "situacao": "ok",
        "texto": "Momofuku Ando (Japanese: 安藤 百福, Hepburn: Andō Momofuku; March 5, 1910 – January 5, 2007), born Go Pek-Hok (Chinese: 吳百福; Pe̍h-ōe-jī: Gô͘ Pek-hok; Tâi-lô: Gôo Pik-hok), was a Taiwanese-born, ethnic Chinese, Japanese inventor and businessman who founded Nissin Food Products Co., Ltd. He is known as the inventor of Nissin Chikin Ramen, the first brand of commercially available prepackaged instant noo\n[…]\nAccording to The Financial Times, Ando's invention of Cup Noodles in 1971, at the age of 61, helped spark the popularity of instant noodles overseas. He had observed that Americans ate noodles by breaking the noodles in half, putting them into a paper cup, and pouring hot water over the noodles. They also ate them with a fork instead of chopsticks.\n[…]\nNevertheless, in 1966, Ando naturalized through marriage and became a Japanese citizen. \"Momofuku\" is the Japanese pronunciation of his given name (百福; Pek-hok), while Andō (安藤) is the surname of his Japanese wife.\n[…]\nOn April 8, 2008, a ramen summit was held in Osaka and a bronze statue of Ando was unveiled at the Momofuku Ando Instant Ramen Museum in Ikeda, Osaka Prefecture The statue depicts Ando standing atop a base resembling a noodle container while holding a packet of instant noodles in his right hand. Yasuhiro Nakasone (former Prime Minister of Japan) and Masako Ando (Ando's wife) attended the unveiling ceremony.\n[…]\nThe name of the Momofuku restaurants in the United States alludes to Momofuku Ando.\n[…]\nList of instant noodle brands\n[…]\nList of inventors\n[…]\nBeech, Hannah (2006). \"Momofuku Ando: A late bloomer invented the instant noodles that fueled the Asian Miracle\". Time. Archived from the original on March 7, 2008.\n[…]\n\"Inventor of instant noodles dies\". BBC. January 6, 2007.\n[…]\nWallace, Bruce (January 7, 2007). \"Momofuku Ando, 96; inventor's Cup Noodle became an instant hit\". Los Angeles Times.\n[…]\nA Tribute To Momofuku Ando and His Life"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Instant_noodle",
        "situacao": "ok",
        "texto": "Instant noodles, or instant ramen, is a type of food consisting of noodles sold in a precooked and dried block with flavoring powder and/or seasoning oil. The dried noodle block was originally created by flash-frying cooked noodles, which is still the dominant method used in Asian countries; air-dried noodle blocks are favored in Western countries. Dried noodle blocks are designed to be cooked or \n[…]\nInstant noodles were invented by Momofuku Ando of Nissin Foods in Japan. They were launched in 1958 under the brand name Chikin Ramen. In the 1960s, they became popular in the United States, and a subsidiary of Nissin Foods was established there. In 1971, Nissin introduced Cup Noodles, the first cup noodle product. Instant noodles are marketed worldwide under many brand names.\n[…]\nModern instant noodles were created by Momofuku Ando in Japan. They were first marketed on 25 August 1958 by Ando's company, Nissin, under the brand name Chikin Ramen.\n[…]\nBefore Ando invented instant noodles, the process of mechanically curving noodles into a wavy shape had already been invented by Yoshio Murata in 1953. Murata's invention made it possible to curl noodles dozens of times faster, paving the way for the mass production of instant noodles.\n[…]\nAndo developed the entire production method of creating \"instant\" noodles, from the processes of noodle-making, steaming, and seasoning, to dehydrating through flash-frying in hot oil. This dried the noodles and gave them a longer shelf life, exceeding that of frozen noodles. Each noodle block was pre-seasoned and sold for ¥35. The instant noodles became ready to eat in two minutes by adding boiling water.\n[…]\nA separate claim of origin for instant noodles comes from Pingtung County in Taiwan. Chang Kuo-wen, a Pingtung local, filed a patent for instant noodles in 1956. On 16 August 1961, Zhang supposedly transferred the patent to Momofuku Ando for ¥23 million."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Momofuku_Ando",
        "situacao": "ok",
        "texto": "Momofuku Ando (安藤 百福), nasceu como Gô Peh-hok (Kagi, 5 de março de 1910 — Ikeda, 5 de janeiro de 2007), foi o fundador e presidente da Nissin Food Products Co., Ltd., e o inventor do moderno macarrão instantâneo, popularmente conhecido no Brasil como \"miojo\".\n[…]\nAndo nasceu em Kagi (atualmente Chiayi), Taiwan e cresceu na cidade de Tainan. Em 1948, Momofuku Ando fundou o que viria a ser a Nissin em Ikeda, Osaka, Japão. Era uma pequena companhia de família, ainda.\n[…]\nEm 25 de Agosto de 1958, quando tinha 48 anos, depois de meses de tentativa e erro, Ando anunciou que, finalmente, aperfeiçoou o seu método de \"fritura-relâmpago\" que levou à invenção do macarrão instantâneo.\n[…]\nMomofuku morreu aos 96 anos, em 5 de Janeiro de 2007, em Osaka em consequência de um ataque cardíaco.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Abacaxi",
      "descricao": "Fruta tropical da planta Ananas comosus, nativa da América do Sul"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Quem faz gelatina com abacaxi fresco descobre que ela não endurece. Por que isso acontece?",
    "resposta": "Enzima que digere proteínas",
    "distratores": [
      "Acidez da fruta",
      "Excesso de água",
      "Excesso de açúcar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bromelain",
      "https://en.wikipedia.org/wiki/Gelatin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bromelain",
        "situacao": "ok",
        "texto": "Bromelain is an enzyme extract derived from the stems of pineapples, although it exists in all parts of the fresh plant and fruit. The extract has a history of folk medicine use. As a culinary ingredient, it may be used as a meat tenderizer.\n[…]\nBromelain extract is a mixture of protein-digesting (proteolytic) enzymes and several other substances in smaller quantities. The proteolytic enzymes are sulfhydryl proteases; a free sulfhydryl group of a cysteine amino acid side chain is required for function. The two main enzymes are:\n[…]\nBromelain is present in all parts of the pineapple plant (Ananas sp.), but the stem is the most common commercial source, presumably because usable quantities are readily extractable after the fruit has been harvested."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gelatin",
        "situacao": "ok",
        "texto": "Gelatin in American English or gelatine in British English (from the Latin gelatus, 'stiff, frozen') is a translucent, colorless, flavorless food ingredient, commonly derived from partial hydrolysis of collagen taken from animal body parts. It is brittle when dry, and rubbery when moist. It is commonly used as a gelling agent in food, beverages, medications, drug or vitamin capsules, photographic \n[…]\nGelatin is a collection of peptides and proteins produced by partial hydrolysis of collagen extracted from the skin, bones, and connective tissues of animals such as domesticated cattle, chickens, pigs, and fish. During hydrolysis, some of the bonds between and within component proteins are broken. Its chemical composition is, in many aspects, closely similar to that of its parent collagen. Photographic and pharmaceutical grades of gelatin generally are sourced from cattle bones and pig skin.\n[…]\nWhen dry, gelatin consists of 98–99% protein, but it is not a nutritionally complete protein since it is missing tryptophan and is deficient in isoleucine, threonine, and methionine. The amino acid content of hydrolyzed collagen is the same as collagen. Hydrolyzed collagen contains 19 amino acids, predominantly glycine (Gly) 26–34%, proline (Pro) 10–18%, and hydroxyproline (Hyp) 7–15%, which together represent around 50% of the total amino acid content.\n[…]\nThe French government viewed gelatin as a potential source of cheap, accessible protein for the poor, particularly in Paris.\n[…]\nBallistic gelatin is used to test and measure the performance of bullets shot from firearms.\n[…]\nThe consumption of gelatin from particular animals may be forbidden by religious rules or cultural taboos.\n[…]\nBuddhist, Hindu, and Jain customs may require gelatin alternatives from sources other than animals, as many Hindus, almost all Jains and some Buddhists are vegetarian.\n[…]\nMedia related to Gelatin at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bromelina",
        "situacao": "ok",
        "texto": "Bromelina é um extracto contendo enzimas proteolíticas extraídas de plantas  da família Bromeliaceae, que inclui o ananás. O extracto apresenta também outras enzimas como células  e frutas e substâncias como o cálcio. É produzida comercialmente no Haiti e Afeganistão.\n[…]\nA presença de enzimas proteolíticas no sumo de ananás foi detectada pela primeira vez em 1892 por Chittenden, que denominou o extracto como bromelina. Posteriormente, o termo 'bromelaína' foi introduzido, tendo como definição qualquer protease de qualquer planta da família Bromeliaceae. A bromelaína começou por ser usada como suplemento terapêutico em 1957.\n[…]\nHoje, cerca de 90% do entenrecimento de carne usando enzimas é feito em ambiente doméstico. A bromelaína é vendida na forma de pó, que poderá ser combinado com uma marinada ou polvilhado directamente sobre a carne crua. A enzima penetrará, então, na carne, tornando-a mais tenra e, eventualmente, de sabor mais agradável depois de cozida.\n[…]\nContudo, se se mantiver a acção da enzima sobre a carne durante demasiado tempo, o resultado poderá ser considerado como \"demasiado pastoso\" para as preferências de alguns consumidores.\n[…]\nA bromelaína é obtida do toco ou de porções da raiz da planta do ananás após a colheita do fruto. Tais partes são descascadas e trituradas de modo a extrair o suco com a enzima, que é solúvel. Posteriormente, ocorrem processos como a precipitação da enzima com o fim de a purificar. Tais procedimentos devem ocorrer em fábricas e laboratórios sob condições muito restritas e controladas de modo a assegurar a qualidade a nível microbiológico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Maçã",
      "descricao": "Fruto da macieira (Malus domestica), cultivado no mundo todo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que a maçã cortada fica escura depois de alguns minutos exposta ao ar?",
    "resposta": "Oxidação por enzimas da fruta",
    "distratores": [
      "Perda de água",
      "Ação de bactérias",
      "Efeito da luz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Food_browning",
      "https://en.wikipedia.org/wiki/Polyphenol_oxidase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Food_browning",
        "situacao": "ok",
        "texto": "Browning is the processes of food turning brown due to the chemical reactions that take place within. The process of browning is one of the chemical reactions that take place in food chemistry and represents an interesting research topic regarding health, nutrition, and food technology. Though there are many different ways food chemically changes over time, browning in particular falls into two ma"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Polyphenol_oxidase",
        "situacao": "ok",
        "texto": "Polyphenol oxidase (PPO; also polyphenol oxidase i, chloroplastic), an enzyme involved in fruit browning, is a tetramer that contains four atoms of copper per molecule."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dourado_%28culin%C3%A1ria%29",
        "situacao": "ok",
        "texto": "Dourado é a cor acastanhada obtida nos alimentos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Hashi",
      "descricao": "Par de palitos usado como talher no Japão, na China e em outros países do Leste Asiático."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No Japão, deixar os hashis espetados de pé numa tigela de arroz é falta grave de etiqueta. Por quê?",
    "resposta": "Lembra um ritual funerário",
    "distratores": [
      "Ofende o cozinheiro",
      "Anuncia o fim",
      "Pede mais comida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chopsticks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chopsticks",
        "situacao": "ok",
        "texto": "Chopsticks are shaped pairs of equal-length sticks that have been used as kitchen and eating utensils in most countries of the Sinosphere for over three millennia. They are held in the dominant hand, secured by fingers, and wielded as extensions of the hand, to pick up food.\n[…]\nIn general, chopsticks should not be left vertically stuck into a bowl of rice because it resembles the ritual of incense-burning that symbolizes \"feeding\" the dead.\n[…]\nIt is rude to stand chopsticks vertically in rice, or pass food from one pair of chopsticks to another, as these are reminiscent of parts of Japanese funeral traditions.\n[…]\nIn Korea, chopsticks are paired with a spoon, forming a sujeo set. Sujeo are placed on the right side and parallel to bap (rice) and guk (soup). Chopsticks are laid on the right side of the paired spoon. One must never put the chopsticks to the left of the spoon. Chopsticks are only laid to the left during the food preparation for the funeral or the memorial service for the deceased family members, known as jesa.\n[…]\nSearching through food: When eating rice but holding chopsticks in hand and constantly picking at food, in order to find a preferred food item, is likened to the act of \"grave theft\". This behavior also belongs to the behavior of lack of upbringing, causing offense.\n[…]\nHistorically, Thai people used bare hands to eat and occasionally used a spoon and fork for curries or soup, the result of Western influence. But many Thai noodle dishes served in a bowl are eaten with chopsticks. Unlike in China and in Vietnam, chopsticks are not used with a bowl of rice. It is considered impolite to make a sound with chopsticks. It is poor etiquette to rest or hold chopsticks pointing towards others, as pointing is considered disrespectful."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hashi",
        "situacao": "ok",
        "texto": "Os hashis, fachis, pauzinhos ou palitinhos são as varetas utilizadas como talheres em parte dos países da Ásia, como a Tailândia, a China, o Japão, o Vietnã e a Coreia.\n[…]\nOs pauzinhos são usualmente feitos de madeira, bambu, marfim ou metal, e modernamente de plástico. O par de pauzinhos é tradicionalmente manuseado com a mão direita (embora atualmente seja aceitável manuseá-lo com a mão esquerda), entre o dedo polegar e os dedos anelar, médio e indicador, e serve para apanhar pedaços de comida ou empurrá-los diretamente da tigela para a boca.\n[…]\nA palavra em mandarim para os pauzinhos é 筷子 (kuàizi), em que o carácter 筷 significa \"objetos de bambu para comer rapidamente\". Sendo originários da China\n[…]\nUtensílios que se assemelham a pauzinhos foram encontrados no posto arqueológico de Megido em Israel, pertencendo aos citas, invasores de Canaã. Esta descoberta revela a possibilidade de existência de relacionamento comercial entre o Médio Oriente e o Extremo Oriente ou eventualmente o desenvolvimento dos mesmos utensílios em paralelo mas de modo autónomo.\n[…]\nOs pauzinhos também eram artigos comuns na civilização uigur, das estepes da Mongólia durante os séculos VI ao VIII.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Oktoberfest",
      "descricao": "Festa popular anual de Munique, na Alemanha, famosa pela cerveja e pelos trajes típicos bávaros."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A primeira Oktoberfest, realizada em Munique em 1810, foi organizada para comemorar o quê?",
    "resposta": "Casamento do príncipe herdeiro",
    "distratores": [
      "Fim de uma guerra",
      "Colheita do lúpulo",
      "Coroação do rei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Oktoberfest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "Oktoberfest (German pronunciation: [ɔkˈtoːbɐˌfɛst] ; Bavarian: Oktobafest/d'Wiesn) is the world's largest Volksfest. It combines a beer festival with a fun fair and is held annually in Munich on the Theresienwiese from mid-September to the first Sunday in October.\n[…]\nThe first Oktoberfest was held on 12 October 1810 to celebrate the wedding of Crown Prince Ludwig and Princess Therese of Saxony-Hildburghausen. The festival has been cancelled on multiple occasions, most recently in 2020 and 2021 during the COVID-19 pandemic in Germany.\n[…]\nIn 2005 organisers introduced a \"quiet Oktoberfest\": tents played only traditional brass music until 18:00, with afternoon volume capped at 85 dB.\n[…]\nOktoberfest organizers implement strict waste management and restroom policies to maintain hygiene and safety on the festival grounds.\n[…]\nBlumenau Oktoberfest (Blumenau, Brazil) – about 600,000 visitors annually\n[…]\nFestivals inspired by Oktoberfest are also held in Australia, Russia, Namibia and Japan.\n[…]\nIn Germany itself, many cities host their own Oktoberfest-style events:\n[…]\nOktoberfest Hannover – approximately 500,000 visitors, the second-largest Oktoberfest in Germany\n[…]\nA German historical drama called Oktoberfest: Beer and Blood was released in 2020. Set in 1900, it focuses on the showman brewer Curt Prank as he transforms the festival into a global tourist attraction by replacing the local brewery stands with one large pavilion. Critics have compared the show's graphic violence and German new wave music soundtrack to Peaky Blinders. A second season was announced by head writer Ronny Schalk in 2021.\n[…]\nBeer and Oktoberfest Museum\n[…]\nVirtual exhibition: Oktoberfest – History, Background, Highlights, in the culture portal bavarikon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oktoberfest",
        "situacao": "ok",
        "texto": "A Oktoberfest (também conhecida como \"Wiesn\" em Munique[carece de fontes]?) é um festival de cerveja originado em Munique, Alemanha. Foi criado pelo rei bávaro Luís I para celebrar o seu casamento em 1810. A Oktoberfest é também uma feira de produtos e diversões celebrada em Munique (München), no estado da Baviera (Bayern), no sul da Alemanha, e disseminada por vários lugares do mundo.\n[…]\nA Oktoberfest é frequentado anualmente por seis milhões de visitantes de todo o mundo e se inicia desde 1872 sempre no sábado depois do 15 de Setembro as 12h00 horas com a tradicional cerimonia de abertura \"O'zapft is\". Termina duas semanas mais tarde, no primeiro domingo de Outubro - daí o nome Oktoberfest (em alemão, \"Oktober\" significa outubro, \"Fest\", festa ou festival, literalmente \"Festa de Outubro\").\n[…]\nNo Brasil, o primeiro festival foi realizado em Porto Alegre, no Rio Grande do Sul, em 8 de outubro de 1911, por iniciativa de Fernando Schlatter e um grupo de amigos, membros da Sociedade Die Haberer, em parceria com a Sociedade Ginástica Turner-Bund (posteriormente Sogipa).\n[…]\nA Oktoberfest de Blumenau atrai turistas do Brasil e do exterior, especialmente da Alemanha. mas também de países vizinhos da América do Sul e da América do Norte, sendo considerada a maior festa alemã das Américas e a segunda maior do mundo - atrás apenas da Oktoberfest original, em Munique. Segundo o site oficial do evento, em 2009 a Oktoberfest de Blumenau, atraiu 731 934 visitantes que consumiram pouco mais de 450 mil litros de chope e 19 821 garrafas de cervejas importadas.\n[…]\nA Oktoberfest entrou para o calendário oficial de eventos da cidade apenas em 2017. Na ocasião, o evento foi realizado na Arena Anhembi, voltando a acontecer no mesmo local no ano seguinte. Em 2019, o festival ocorreu no Jockey Club.\n[…]\nOktoberfest de Santa Cruz do Sul\n[…]\nFotos de Oktoberfest\n[…]\n(em alemão) Oktoberfest Munique",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Fettuccine Alfredo",
      "descricao": "Prato de fettuccine com manteiga e parmesão, ou molho cremoso de queijo, criado em Roma."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a história, o restaurador romano Alfredo di Lelio criou seu famoso fettuccine com manteiga e parmesão para alimentar quem?",
    "resposta": "A esposa, após o parto",
    "distratores": [
      "Astros de Hollywood",
      "O rei da Itália",
      "Um cardeal do Vaticano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fettuccine_Alfredo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fettuccine_Alfredo",
        "situacao": "ok",
        "texto": "Fettuccine Alfredo (Italian: [fettut'tʃiːne alˈfreːdo]) is a pasta dish consisting of fettuccine tossed with butter and Parmesan cheese which is melted and emulsified to form a rich cheese sauce coating the pasta. Originating in Rome in the early 20th century, the recipe is now known primarily in the United States and other countries.\n[…]\nThe dish is named after Alfredo Di Lelio, a Roman restaurateur who created and popularized it. Di Lelio's tableside service was an integral part of the recipe's early success. Fettuccine Alfredo is a variant of standard Italian preparations fettuccine al burro ('fettuccine with butter'), pasta burro e parmigiano ('pasta with butter and Parmesan cheese'), and pasta in bianco ('plain pasta').\n[…]\nBoth the old restaurant (now called Alfredo alla Scrofa), and the post-war iteration (known as Il Vero Alfredo and still run by the Di Lelio family) serve \"fettuccine Alfredo\" and compete vigorously, with escalating puffery (e.g., \"the king of fettuccine\", \"the real king of fettuccine\", \"the magician of fettuccine\", \"the emperor of fettuccine\", \"the real Alfredo\", etc.). In 1981, there were about 50 restaurants in Rome selling similar fettuccine dishes, mostly called fettuccine alla romana.\n[…]\nFettuccine Alfredo, minus the spectacle, has become ubiquitous in Italian-style restaurants outside of Italy, although despite its worldwide renown, in Italy this dish is usually still called simply fettuccine al burro. According to the Roman edition of the Corriere della Sera, since 2005 Fettuccine Alfredo Day has been celebrated on 7 February \"throughout the world\" to commemorate Di Lelio's famous creation.\n[…]\nPipola, Clementina, ed. (2017). Fettuccine Alfredo. A true love story. Roma: Agra Editrice. ISBN 978-88-6140-220-1.\n[…]\nOur History (via Il Vero Alfredo)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fettuccine_Alfredo",
        "situacao": "ok",
        "texto": "Fettuccine Alfredo é um prato feito de fettuccine com queijo parmesão e manteiga. À medida que o queijo derrete, ele emulsifica os líquidos para formar uma cobertura leve e rica sobre a massa. O termo é um sinônimo para massa com manteiga e queijo parmesão (Italiano: pasta al burro e parmigiano), uma das mais antigas e simples maneiras de preparar massa. O nome do prato vem de Alfredo Di Lelio, um\n[…]\nMaurizio Pelli (2012). Fettuccine Alfredo, Spaghetti Bolognaise & Caesar Salad. The Triumph of the World's False Italian Cuisine (em inglês). Pittsburgh, PA: Dorrance. ISBN 9781434917829\n[…]\nClementina Pipola, ed. (2017). Fettuccine Alfredo. Una vera storia d'amore (em italiano). Roma: Agra Editrice. ISBN 978-88-6140-219-5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Risoto",
      "descricao": "Prato italiano de arroz cozido lentamente em caldo até ficar cremoso."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Qual destas variedades de arroz, italiana, de grão curto e rica em amido, é típica do risoto?",
    "resposta": "Arbório",
    "distratores": [
      "Basmati",
      "Jasmim",
      "Agulhinha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arborio_rice",
      "https://en.wikipedia.org/wiki/Risotto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arborio_rice",
        "situacao": "ok",
        "texto": "Arborio rice is an Italian medium-grain rice. It is named after the comune (municipality) of Arborio, in the Po Valley, which is situated in the Piedmont region. When cooked, the rounded grains are firm, creamy and chewy compared to other varieties of rice, due to their higher amylopectin starch content. It has a starchy taste and blends well with other flavours. Arborio rice is often used to make\n[…]\nArborio rice is also usually used for rice pudding.\n[…]\nArborio is a cultivar of the Japonica group of varieties of Oryza sativa.\n[…]\nMedia related to Arborio rice at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Risotto",
        "situacao": "ok",
        "texto": "Risotto (,  riz-OT-oh, Italian: [riˈzɔtto, -ˈsɔt-]; from riso, 'rice') is an Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish or vegetables. Many types of risotto contain butter, onion, white wine, and Parmesan cheese. It is one of the most common ways of cooking rice in Italy. Saffron was originally used for flavour and its signat\n[…]\nA high-starch, round, medium- or short- grain white rice is usually used for making risotto. Such rices can absorb liquids and release starch, so they are stickier than the long grain varieties. The principal varieties used in Italy are Arborio, Baldo, Carnaroli, Maratelli, Padano, Roma, and Vialone Nano. Carnaroli, Maratelli (a historical Italian variety), and Vialone Nano are considered to be the best (and most expensive) varieties, with different users preferring one over another.\n[…]\nThey have slightly different properties. For example, Carnaroli is less likely than Vialone Nano to get overcooked, but the latter, being smaller, cooks faster and absorbs condiments better. Other varieties such as Baldo, Originario, Ribe, and Roma may be used but will not have the creaminess of the traditional dish; these varieties are considered better for soups and other non-risotto rice dishes and sweet rice desserts.\n[…]\nThere are many different risotto recipes with different ingredients, but they are all based on rice of an appropriate variety, cooked in a standard procedure. Risotto, unlike other rice dishes, requires constant care and attention. The rice is not to be pre-rinsed, boiled, or drained, as washing would remove much of the starch required for a creamy texture.\n[…]\nProperly cooked risotto is rich and creamy, even if no cream is added, due to the starch in the grains.\n[…]\nMedia related to Risotto at Wikimedia Commons\n[…]\nRisotto at the Wikibooks Cookbook subproject"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arroz_arb%C3%B3rio",
        "situacao": "ok",
        "texto": "Arroz arbório é uma variedade italiana de arroz. O seu nome vem da comuna de Arborio, província de Vercelli, região do Piemonte, na Planície Padana, onde é cultivado. Quando cozido, os grãos tornam-se firmes, cremosos e mastigáveis, graças ao alto conteúdo de amilopectina; o que faz com que este arroz possua um sabor próprio, mas que combina bem com outros sabores. É usado na confeção de risotto e\n[…]\nDo ponto de vista botânico, arbório é um cultivar do grupo Japonica, sendo uma variedade de Oryza sativa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Carbonara",
      "descricao": "Massa italiana do Lazio com porco curado, queijo duro, ovos e pimenta-do-reino."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na receita tradicional romana da carbonara, qual carne curada de porco é usada no lugar do bacon?",
    "resposta": "Guanciale (bochecha de porco)",
    "distratores": [
      "Presunto cru",
      "Linguiça calabresa",
      "Mortadela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carbonara",
      "https://en.wikipedia.org/wiki/Guanciale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carbonara",
        "situacao": "ok",
        "texto": "Carbonara (Italian: [karboˈnaːra]) is a pasta dish made with cured pork, hard cheese, eggs, salt, and black pepper. It is typical of the Lazio region of Italy. The dish took its modern form and name in the middle of the 20th century.\n[…]\nThe cheese used is usually pecorino romano. Some variations use Parmesan, Grana Padano, or a combination of cheeses. Spaghetti is the most common pasta, but bucatini or rigatoni are also used. While guanciale, a cured pork jowl, is traditional, some variations use pancetta, and lardons of smoked bacon are a common substitute outside Italy.\n[…]\nGuanciale is the most commonly used meat for the dish in Italy, but pancetta and pancetta affumicata ('smoked pancetta') are also used and, in English-speaking countries, bacon is often used as a substitute. The usual cheese is pecorino romano; occasionally Parmesan, Grana Padano, or a combination of hard cheeses are used. Recipes differ as to which part of the egg is used—some use the whole egg, some others only the yolk, and still others a mixture.\n[…]\nOutside Italy, variations on carbonara may include green peas, broccoli, tenderstem broccoli, leeks, onions, other vegetables or mushrooms, and may substitute a meat such as ham or coppa for the fattier guanciale or pancetta.\n[…]\nA product described as carbonara sauce is sold as a ready-to-eat convenience food in grocery stores in many countries. Unlike the original preparation, which is inseparable from its dish as its creamy texture is created on the pasta itself, the ultra-processed versions of carbonara are prepared sauces to be applied onto separately cooked pasta. They may be thickened with cream and sometimes food starch, and often use bacon or cubed pancetta slices instead of guanciale."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guanciale",
        "situacao": "ok",
        "texto": "Guanciale (Italian: [ɡwanˈtʃaːle]) is an Italian salt-cured meat product prepared from pork jowl or cheeks. Its name is derived from guancia, meaning 'cheek'. Its rendered fat gives flavour to and thickens the sauce of pasta dishes.\n[…]\nGuanciale is usually rubbed with just salt and ground black pepper by cooks in Rome, but some producers use other spices, herbs, peperoncino or red pepper, and sometimes garlic. After a few weeks of this initial brining process, salt is washed off with wine. Then, it is spiced once again with pepper or chili powder and air-cured for weeks to months until it loses approximately 30% of its original weight.\n[…]\nGuanciale may be cut and eaten directly in small portions, but is often used as an ingredient in pasta dishes such as spaghetti alla carbonara and sauces such as sugo all'amatriciana.\n[…]\nIt is a specialty of central Italy, particularly Umbria and Lazio. Pancetta, a cured Italian bacon, is sometimes used as a substitute when guanciale is not available.\n[…]\nMedia related to Guanciale at Wikimedia Commons\n[…]\nCarbonara"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carbonara",
        "situacao": "ok",
        "texto": "Carbonara (do italiana carbone: \"carvão\"), spaghetti alla carbonara ou pasta alla carbonara, é uma receita tradicional italiana de massa. Acredita-se que tenha sido uma receita apreciada pelos preparadores de carvão vegetal (carbinai) dos montes apeninos, na região italiana da Úmbria. Outras teorias apontam, por outro lado, que o nome se deve apenas à cor escura da pimenta preta recém moída, que é\n[…]\nA receita original de Roma é preparada com ovos, queijo parmesão, queijo pecorino romano, toucinho, pimenta-preta e banha, azeite ou manteiga. As natas não são um ingrediente da receita original, não sendo normalmente utilizadas com massa no centro da Itália. O toucinho indicado é o denominado guanciale, preparado com bochechas de porco. Pode, contudo, ser substituído por outros toucinhos.\n[…]\nEm ambas as versões da receita, os ovos são adicionados crus ao molho e acabam por cozinhar apenas com o calor da massa.\n[…]\nTal como a maior parte das receitas tradicionais, origem deste prato é incerta, existindo diversas lendas. Refere-se que possa ter sido criada na região italiana do Lazio, na Roma antiga, sendo uma possível evolução da pasta (massa) cacio (queijo de ovelha ou cabra) e ova (ovo). Como o nome deriva da palavra italiana para carvão, alguns acreditam que tenha sido uma refeição suculenta para os carvoeiros na Itália (carbinai). Outros dizem que antigamente era feita sobre grelhadores de carvão.\n[…]\nOutras teorias apontam que o primeiro a dar-lhe um nome foi o escritor culinário napolitano Ippolito Cavalcanti, que publicou a receita pela primeira vez no ano de 1839, no seu livro Cucina teorico-pratica. Uma outra hipótese indica que o prato pode ter tido origem em Carbonia, uma povoação a oeste de Cagliari, fruto da criatividade de um cozinheiro talentoso, que acabaria por se mudar para Roma, à procura de trabalho.\n[…]\n«- ThiagoSodré.com.br Receita para um macarrão a carbonara»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Feijoada",
      "descricao": "Cozido de feijão com carnes de porco ou boi, prato emblemático do Brasil."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na feijoada completa, ao lado do arroz, da couve e da farofa, que fruta fatiada costuma ser servida?",
    "resposta": "Laranja",
    "distratores": [
      "Abacaxi",
      "Mamão",
      "Maçã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Feijoada",
      "https://pt.wikipedia.org/wiki/Feijoada"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Feijoada",
        "situacao": "ok",
        "texto": "Feijoada (European Portuguese: [fɐjˈʒwaðɐ], Brazilian Portuguese: [fejʒuˈadɐ]; from feijão, 'bean') is the name for varieties of bean stew with beef or pork prepared in the Portuguese-speaking world.\n[…]\nThe Portuguese version of feijoada originates mainly in the north of the country, where it is cooked with white beans in the northwest (Minho and Douro) or red beans in the northeast (Trás-os-Montes), and usually also includes other vegetables (tomatoes, carrots or kale) along with pork or beef, to which chorizo, blood sausage or farinheira can be added.\n[…]\nRaul Lody, a culinary expert, contends that the African presence in plantation kitchens, where enslaved women wearing vibrant turbans were rumored to sing while stirring abundant clay pots, is why feijoada has come to be known as \"slave food.\" The idealization of slavery in this picture obscures the brutality and oppression that Africans actually endured.\n[…]\nFeijoada is still a popular dish for ceremonial occasions like weddings, birthdays, and religious festivals since it is a historical representation of communities coming together. Brazil's national food, enjoyed leisurely with friends, family, music, and discussion, is as much a meal as an occasion and a symbol of culture from Rio de Janeiro to São Paulo.In addition to having a big influence on Brazilian food, feijoada has also had an impact on other international cuisines.\n[…]\nThe meal has gained popularity on menus in numerous Brazilian eateries outside of Brazil and has even served as the model for recipes in other nations. Feijoada has emerged as Brazil's culinary ambassador, bringing its distinctive tastes and culture to people all over the world."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Feijoada",
        "situacao": "ok",
        "texto": "Feijoada é uma designação portuguesa a um prato  da culinária transmontana que se popularizou também nos demais países lusófonos como Brasil, Angola, Moçambique, Timor-Leste e Macau.\n[…]\nApesar das estórias frequentemente propagadas no Brasil acerca da origem da feijoada, a realidade historiográfica é bastante mais rica e complexa.\n[…]\nDeste receituário secular nascem dezenas de feijoadas regionais, que celebram a alma e a diversidade gastronómica de todo o país.No Brasil, a feijoada é feita com a mistura de feijões pretos e diversos tipos de carne de porco e de boi. É tradicionalmente servida com farofa, arroz branco, couve refogada e laranja fatiada, entre outros acompanhamentos.\n[…]\nEsta versão, conhecida como feijoada à brasileira, teve sua primeira menção registrada em 2 de março de 1827, em um anúncio do Diário de Pernambuco, na cidade do Recife, O texto informava que, na Locanda d’Águia d’Ouro, na rua das Cruzes, às quintas-feiras era servida uma “excelente feijoada à brasileira, tudo por preço cômodo”.\n[…]\nFeijoada à moda de Angola  ou feijoada à moda de Luanda é um prato angolano próximo da dobrada ou das tripas à moda do Porto mas com algumas diferenças importantes como o uso de couve lombarda, barriga de porco, morcela de arroz e salsicha de churrasco.\n[…]\nFeijoada à brasileira, prato típico brasileiro feito à base de feijão preto, carnes salgadas de porco e bovina, guarnecido geralmente por arroz branco, farofa e couve refogada, podendo também ser acompanhado por frutas, molhos, carnes e frituras diversas. Em algumas variações regionais o feijão e as carnes são servidos separadamente.\n[…]\nFeijoada de Entrecosto com Couve-Lombarda\n[…]\nFeijoada de Salmão\n[…]\nFeijoada com Mel e Canela"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Brigadeiro",
      "descricao": "Doce brasileiro de leite condensado, chocolate e manteiga, enrolado em bolinhas e coberto de granulado"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O brigadeiro, doce de leite condensado com chocolate, surgiu durante uma campanha presidencial brasileira em qual década?",
    "resposta": "Década de 1940",
    "distratores": [
      "Década de 1920",
      "Década de 1960",
      "Década de 1970"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Brigadeiro_(doce)",
      "https://en.wikipedia.org/wiki/Brigadeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Brigadeiro_(doce)",
        "situacao": "ok",
        "texto": "Brigadeiro é um doce típico da culinária brasileira, de origem paulista, que rapidamente se difundiu pelo resto do país, tornando-se comum em todo o país a sua presença em festas de aniversário, junto com doces como o cajuzinho e o beijinho. É conhecido também no Rio Grande do Sul pelo nome de negrinho.\n[…]\nConforme relatam historiadores da alimentação, o nome seria uma homenagem ao brigadeiro da Força Aérea Brasileira Eduardo Gomes. Durante a candidatura do militar à presidência da República pela União Democrática Nacional na eleição de 1945, um grupo de mulheres paulistanas do bairro do Pacaembu, que eram engajadas na campanha do candidato, organizaram festas para promover sua candidatura.\n[…]\nO doce teria sido criado por essas mulheres durante a primeira campanha do candidato à presidência, pela conservadora UDN, logo após a queda de Getúlio Vargas.\n[…]\nA guloseima, feita de leite condensado, manteiga, açúcar e chocolate em pó, inicialmente feita como uma forma de arrecadar fundos para a campanha, rapidamente ganhou popularidade e se espalhou pelo resto do país junto à campanha de Gomes. Como as festas dos correligionários e cabos eleitorais eram muito disputadas pela população, estes logo começaram a chamar os amigos para irem comer o \"docinho do brigadeiro\".\n[…]\nEra justamente no estado de São Paulo em que se encontravam as duas únicas fábricas brasileiras de leite condensado (as fábricas da Nestlé nos municípios de Araras e São Paulo, fundadas em 1921), além de ser na cidade de São Paulo em que era fabricado o notório \"Chocolate do Padre\" (nome popular do chocolate citado em grande parte das receitas antigas do doce), o qual era produzido pela fábrica Gardano (fundada na capital paulistana também em 1921)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brigadeiro",
        "situacao": "ok",
        "texto": "Brigadeiro (Brazilian Portuguese pronunciation: [bɾiɡaˈdejɾu]) is a traditional Brazilian dessert. The dessert was created by a confectioner, Heloísa Nabuco de Oliveira, to promote the presidential candidacy of Eduardo Gomes. The ingredients are condensed milk, cocoa powder, butter and chocolate sprinkles, which coat the outside to prevent any sticking. It can be cooked in the stove or microwave t\n[…]\nIn recent years, flavor and coating variations on the traditional chocolate brigadeiros have become popular. This variation of flavors and easy manipulation of the original dessert lead into a trend of different recipes, such as cakes, tarts, ice cream, candies or even bread.\n[…]\nThe origin of the name \"brigadeiro\" is linked to the presidential campaign of Brigadier Eduardo Gomes, UDN candidate for the Presidency of the Republic in 1945. Heloísa Nabuco de Oliveira, a member of a traditional carioca family who supported the brigadier's candidacy, created a new confection and named it after the candidate. The doce do brigadeiro (lit. brigadier's candy) became popular, and the name was eventually shortened to just \"brigadeiro\".\n[…]\nWomen at the time would sell brigadeiro in support of the presidential candidate, as it was the first national election in which women were able to vote.\n[…]\nIn the state of Rio Grande do Sul, brigadeiros are most commonly known as negrinhos (literally \"little black ones\"). One researcher traced its origins back to the 1920s, when condensed milk by Nestlé started being sold in Brazil.\n[…]\nThere are many different versions of brigadeiros that can be made by switching ingredients. While the chocolate version is the most popular, variations range from fruity, nutty, coffee or infused treats. For example, Dois Amores (Two Loves), is a combination of dark chocolate and white chocolate. Another example is Beijinho (small kiss) which is coconut flavored brigadeiro."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Introdução do café no Brasil",
      "descricao": "Chegada das primeiras mudas de café ao território brasileiro, no século dezoito"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "As primeiras mudas de café chegaram ao Brasil, vindas da Guiana Francesa para o Pará, em qual século?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século dezesseis",
      "Século dezessete",
      "Século dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil",
      "https://pt.wikipedia.org/wiki/Caf%C3%A9_no_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coffee_production_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil produces about a third of the world's coffee, making the country by far the world's largest producer. Coffee plantations, covering some 27,000 km2 (10,000 sq mi), are mainly located in the southeastern states of Minas Gerais, São Paulo and Espírito Santo where the environment and climate provide ideal growing conditions.\n[…]\nCoffee was not native to the Americas but was imported to the country. The first crop arrived in Brazil in the 18th century making it the dominant producer by the 1840s. The first coffee bush in Brazil was planted by Francisco de Melo Palheta in Pará in 1727. According to legend, the Portuguese were looking for a cut of the coffee market, but could not obtain seeds from bordering French Guiana due to the governor's unwillingness to export the seeds.\n[…]\nPalheta was sent to French Guiana on a diplomatic mission to resolve a border dispute. On his way back home, he managed to smuggle the seeds into Brazil by seducing the governor's wife who secretly gave him a bouquet spiked with seeds.\n[…]\nThe second boom ran from the 1880s to the 1930s, corresponding to a period in Brazilian politics called café com leite (\"coffee with milk\"). The name refers to the largest states' dominant industries: coffee in São Paulo and dairy in Minas Gerais."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caf%C3%A9_no_Brasil",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Nhoque",
      "descricao": "Bolinhos de massa de batata e farinha da culinária italiana."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "No Brasil e na Argentina, em que dia de cada mês se come o nhoque da sorte, com dinheiro debaixo do prato?",
    "resposta": "Dia vinte e nove",
    "distratores": [
      "Dia primeiro",
      "Dia treze",
      "Dia quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gnocchi",
      "https://es.wikipedia.org/wiki/%C3%91oquis_del_29"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gnocchi",
        "situacao": "ok",
        "texto": "Gnocchi are a varied family of pasta-like dumplings in Italian cuisine. They are made of small rolls of dough, such as those composed of a simple combination of wheat flour, potato, egg, and salt. Variations of the dish supplement the simple recipe with flavour additives, such as semolina flour, cheese,  breadcrumbs, cornmeal or similar ingredients, and possibly including herbs, vegetables, and ot\n[…]\nSmall soup gnocchi are sometimes made by pressing the dough through a coarse sieve or a perforated spoon.\n[…]\nGnocchi are very popular and often served as a dish in coastal Croatia, typically being served as a first course or a side dish with dalmatinska pašticada. The Croatian name for gnocchi is njoki.\n[…]\nIn France, gnocchis à la parisienne is a hot dish of dumplings made of choux pastry served with béchamel sauce.\n[…]\nA specialty of Nice, gnocchi or gnoques de tantifla a la nissarda are made with potatoes, wheat flour, and eggs. Another version including blette (Swiss chard) is called merda dé can (lit. 'dog shit').\n[…]\nIn Provence, potato gnocchi can be made in a longer shape called longettes.\n[…]\nDue to the significant number of Italian immigrants who arrived in Argentina, Paraguay, and Uruguay, gnocchi, ñoqui (Spanish: [ˈɲoki]) or nhoque (Portuguese: [ˈɲɔki]) is a popular dish, even in areas with few Italian immigrants. In Uruguay, Paraguay, and Argentina, there is a tradition of eating gnocchi on the 29th of each month, with some people putting money beneath their plates to bring prosperity.\n[…]\nIndeed, in Argentina and Uruguay ñoqui is slang for a bogus employee (according to corrupt accountancy practices or, in the public sector, the distribution of political patronage), who only turns up at the end of the month to receive their salary.\n[…]\nGnocchi alla romana\n[…]\nDavidson, Alan (2006). \"gnocchi\". In Jaine, Tom (ed.). The Oxford Companion to Food (2nd ed.). Oxford University Press. ISBN 9780192806819."
      },
      {
        "url": "https://es.wikipedia.org/wiki/%C3%91oquis_del_29",
        "situacao": "ok",
        "texto": "Los ñoquis del 29 es la costumbre de comer los ñoquis el día 29 de cada mes, costumbre muy difundida en el Cono Sur, especialmente en Argentina, Brasil, Paraguay y Uruguay. ​​​ siendo países destino de una gran inmigración italiana a finales del siglo XIX y principios del siglo XX.\n[…]\nEs a raíz de esta costumbre de comer ñoquis el día 29 del mes que en los lunfardos argentino y uruguayo, por desplazamiento semántico, se le dice ñoqui a la persona que posee un puesto por un trabajo que no realiza​ pero que se presenta a fin de mes a cobrar su sueldo.​​​\n[…]\nLa tradición de servir ñoquis los días 29 de cada mes tiene al menos 2 versiones difundidas, aunque también existen otras versiones.\n[…]\nEl origen italiano del \"Gnocchi\" nace de una leyenda basada en la historia de San Pantaleón, un joven médico de Nicomedia que, tras convertirse al cristianismo, peregrinó por el norte de Italia. Allí practicó milagrosas curaciones, por las que fue canonizado\n[…]\nInmigración italiana en Argentina\n[…]\nInmigración italiana en Brasil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nhoque",
        "situacao": "ok",
        "texto": "O nhoque ou inhoque, também conhecidos no termo do italiano gnocco, plural gnocchi [ˈɲɔkki], é uma massa alimentícia preparada a base da mistura de batata, com farinha de trigo, sendo um prato típico da culinária da Itália, que pode ser servido com os molhos: Sugo, bolonhesa ou branco.\n[…]\nVariações do prato complementam a receita simples com aditivos de sabor, como farinha de sêmola, queijo, pão ralado, fubá ou ingredientes semelhantes, e possivelmente incluindo ervas, vegetais e outros ingredientes. Os ingredientes básicos podem ser substituídos por alternativas como batata-doce no lugar da batata ou farinha de arroz no lugar da farinha de trigo, no entanto tais variações frequentemente não são consideradas tradicionais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
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
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

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
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

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
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
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
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
