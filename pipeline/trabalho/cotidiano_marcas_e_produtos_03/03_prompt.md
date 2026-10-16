Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Marcas e Produtos** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Fanta",
      "descricao": "Refrigerante de sabores de frutas criado na Alemanha em 1940, durante a Segunda Guerra Mundial, hoje da Coca-Cola."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na Alemanha da Segunda Guerra, a primeira Fanta era feita com soro de leite e com sobras de qual fruta?",
    "resposta": "Maçã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fanta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta () is a German-founded, American-owned brand of carbonated, fruit-flavored soft drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith. Today, the brand features over 200 flavors worldwide.\n[…]\nFanta was eventually phased out in the 2000s and was absorbed by Royal as CCBPI's local brand for Fanta.\n[…]\nIn Mexico, Fanta is made with cane sugar whereas the US version uses high fructose corn syrup.\n[…]\nIn Chile, Fanta is commonly combined with beer (also known as schop) and the shandy-like combination is known as fanschop.\n[…]\nA 2005 British television advertisement for Fanta Z, depicting people spitting out the drink, was the ninth most complained-about advert that year, according to the Advertising Standards Authority. 272 viewers complained that it encouraged copycat behaviour in children. The Authority therefore restricted the advert to post-9pm watershed viewing.\n[…]\nIn February 2015, a 75th-anniversary version of Fanta was released in Germany. Packaged in glass bottles evoking the original design and with an authentic original wartime flavor including 30% whey and pomace, it is described on the packaging as \"less sweet\" and a German original. An associated television ad referenced the history of the drink and said the Coca-Cola company wanted to bring back \"the feeling of the Good Old Times\" which was interpreted by many to mean Nazi rule.\n[…]\nFanta cake\n[…]\n\"Why Coca-Cola Invented Fanta In Nazi Germany\". Business Insider. November 8, 2019. Archived from the original on December 21, 2021.\n[…]\n\"How Fanta was invented in Nazi Germany to quench people's thirst for Coke\" Julius Haswell"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta é uma marca de refrigerantes que detém uma linha variada de produtos e que pertence à The Coca-Cola Company. Criada e lançada na Alemanha durante a Segunda Guerra Mundial,  atualmente é comercializada em 188 países.\n[…]\nO produto, por sua vez, mudava de acordo com a natureza dos ingredientes que estavam disponíveis no país sancionado, como as sobras da fabricação de sidra (fibra de maçã) ou, até mesmo, o subproduto da confecção de queijo (soro de leite).\n[…]\nA fórmula original da Fanta laranja, disponível na Alemanha, Áustria e outros países, é completamente diferente da bebida comercializado nos Estados Unidos como Fanta Laranja.\n[…]\nFanta Banana com Leite –  Japão\n[…]\nFanta Láctea (Leite) –  Hong Kong\n[…]\nFanta Maçã-verde –  China e  Brasil\n[…]\nFanta Maçã –  Argentina\n[…]\nFanta Uva\n[…]\nFanta Laranja - Lançada no mercado brasileiro em 1964. Segundo a Coca Cola, o país corresponde ao maior mercado de Fanta Laranja no mundo.\n[…]\nFanta Caju - Lançada em agosto de 2024\n[…]\nA permanência de um produto no mercado depende diretamente da receptividade do público, e quando não acontece, o mesmo acaba sendo descontinuado da linha de produção, fato este ocorrido com a Fanta Maçã (lançada em fevereiro de 2002 e descontinuado em 2004), a Fanta Citrus (lançada em fevereiro de 2002 e descontinuada em 2004 – Mix de Laranja, Pomelo/Grapefruit e Maçã), a Fanta Morango (lançada em 2003, descontinuada em 2004, relançada em 2012 e produzida por tempo limitado) e a Fanta Mix (lançada em 2004 e descontinuada em 2005 – Mix de Laranja e Tangerina, sabor desenvolvido por brasileiros).\n[…]\nFanta Mundo Brasil Karnivale – Mix de Kiwi, maçã e limão – África do Sul.\n[…]\nFanta Mundo Brasil Limetto – Limão –  Alemanha - Lançada em 2008\n[…]\nFanta Mundo Brasil Maçã-verde – Coreia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Molho inglês",
      "descricao": "Molho fermentado criado em Worcester, na Inglaterra, e vendido pela Lea & Perrins desde o século dezenove."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O molho inglês, vendido desde o século dezenove pela Lea e Perrins, leva na receita qual peixe pequeno?",
    "resposta": "Anchova",
    "fonte": [
      "https://en.wikipedia.org/wiki/Worcestershire_sauce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Worcestershire_sauce",
        "situacao": "ok",
        "texto": "Worcestershire sauce or Worcester sauce (  WUUS-tər(-shər)) is a fermented condiment invented by the pharmacists John Wheeley Lea and William Henry Perrins in Worcester, Worcestershire, England, during the first half of the 19th century. They later formed the company Lea & Perrins. Worcestershire sauce has been a generic term since 1876, when the High Court of Justice ruled that Lea & Perrins did \n[…]\nSeveral anchovy-free vegetarian and vegan varieties are available for those who avoid, or are allergic to, fish. The Codex Alimentarius recommends that prepared food containing Worcestershire sauce with anchovies include a label warning of fish content, although this is not required in most jurisdictions. The U.S. Department of Agriculture has required the recall of some products with undeclared Worcestershire sauce.\n[…]\nIn Brazil and Portugal, it is known as molho inglês ('English sauce').\n[…]\nWorcestershire sauce, known as salsa inglesa ('English sauce') or salsa Perrins ('Perrins sauce'), is very popular in El Salvador. Many restaurants provide a bottle on each table, and the per capita annual consumption is 2.5 ounces (71 g), the highest in the world as of 1996.\n[…]\nA sweeter, less salty version of the sauce called Worcestersauce Dresdner Art was developed in the beginning of the 20th century in Dresden, where it is still being produced. It contains smaller amounts of anchovies. It is mostly consumed in the eastern part of the country.\n[…]\nLea & Perrins Worcestershire Sauce is sold in the United States by Kraft Heinz following the Kraft & Heinz merger in 2015.\n[…]\nGy-Nguang (Thai: ไก่งวง) Worcestershire sauce has been produced since 1917. It relies on soy sauce instead of anchovies for the umami flavour. The company makes two versions: Formula 1 for Asian taste, and Formula 2 for international taste. The two differ only in that Formula 2 contains slightly less soy sauce and slightly more spices."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Molho_Worcestershire",
        "situacao": "ok",
        "texto": "O molho Worcestershire, também conhecido como molho Worcester ou molho inglês, é um condimento líquido fermentado, amplamente usado na culinária, sobretudo na culinária inglesa. É preparado com vinagre, melaço, xarope de milho, água, chili, molho de soja, pimentão, tamarindo, anchovas, cebolas, cravo-da-índia e alho.\n[…]\nÉ considerado um intensificador de sabor, utilizado em vários pratos, tanto cozidos como crus; na culinária inglesa é empregado na preparação da carne de vaca; na das Filipinas, em marinadas, especialmente com carne de porco. É um ingrediente essencial no tempero da Salada César, no preparo do coquetel Bloody Mary e no molho Lea & Perrins como um concentrado.\n[…]\nHistoricamente, muitos molhos adquiriram fama pelo contacto intercultural entre dois ou mais povos, como por exemplo o garum, um molho fermentado de anchovas que pode ter nascido devido à pujança greco-romana no mar Mediterrâneo. Do molho Worcestershire pode se dizer igualmente que é um dos muitos legados do contato que a cozinha inglesa manteve com a cozinha da Índia.\n[…]\nEmbora algumas fontes refiram que o comércio de molhos de anchova fermentada iniciou-se no século XVII em mercados da Europa, o molho Worcester não se tornou popular até à década de 1930.\n[…]\nSegundo a lenda, este molho foi criado por dois dos cozinheiros do lorde britânico Lord Marcus Sandys ex-governador da cidade de Bengal que, ao chegar das Índias, pediu-lhes que recriassem uma receita que lá havia conhecido e que tinha perdido na viagem.\n[…]\nMolho de soja",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pringles",
      "descricao": "Marca de batatas em formato de sela vendidas em tubos, lançada nos Estados Unidos pela Procter & Gamble em 1968."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As batatas Pringles não são fatias cortadas de batatas. Elas são moldadas a partir de uma massa feita com o quê?",
    "resposta": "Flocos de batata desidratada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pringles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pringles",
        "situacao": "ok",
        "texto": "Pringles is an American brand of stackable potato-based chips invented by Procter & Gamble (P&G) in 1968 and marketed as \"Pringle's Newfangled Potato Chips\". Pringles are technically considered an extruded snack because of the manufacturing process. The brand was sold in 2012 to Kellanova, which in 2024 was purchased by Mars Inc.\n[…]\nIn 2013, Lucasfilm and Pringles jointly commissioned crowdsourcing video studio Tongal for a commercial, with a total of $75,000 in prize money distributed to seven finalists.\n[…]\nThe aerodynamics of Pringles chips (as well as other consumer products) have been optimized for food processing using supercomputers. Kellogg's has used this fact in a 2022 Pringles advertisement campaign.\n[…]\nThe Pringles logo is a stylized cartoon caricature of the head of a male figure designed by Louis R. Dixon, with a large mustache and parted bangs (until 2001, the character had eyebrows and his bow tie framed the product name; in 1998, the bangs and lips were removed from the logo, and his head was widened a little). In 2020, the character was again revised with a minimalistic approach to generally negative reception.\n[…]\nThe mascot originally had no name, and the name originated with a Wikipedia hoax; in 2006, an editor inserted the then-hoax \"Julius\" into the Pringles Wikipedia article, which was subsequently picked up by other news outlets. The editors supported and promoted their claim through creating a Facebook page to raise awareness of Julius Pringles being his name. Prior to this the mascot was officially known only as \"Mr. P\", no first name.\n[…]\nBy 2013, the name had spread and in a case of citogenesis-turned-real, Kellogg's formally acknowledged Julius Pringles (abbreviated as \"Mr. P\").\n[…]\nPringles Unsung\n[…]\n\"Are Pringles 'real food'?\"—Opinion piece at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pringles",
        "situacao": "ok",
        "texto": "Pringles é uma marca americana de batatas chips produzido pela empresa Kellogg Company. Foi fundada em 1967 nos Estados Unidos da América. Tornou-se a primeira batata a ser vendida num tubo cilíndrico.\n[…]\nBauer o tubo característico da Pringles foi criado para resolver as principais reclamações dos consumidores como batatas quebradas e murchas depois de aberto o Bauer criou o tubo para ser uma câmara protetora onde as batatas ficassem empilhadas, que ajudem a evitar que quebrem, o tubo de papelão também foi criado com revestimento de papel alumínio para impedir, que entrasse ar na lata o que mantêm as batatas crocantes por mais tempo.\n[…]\nJulius Pringles é o mascote da marca de batatas fritas Pringles, conhecido como \"Mr. P\". O personagem foi criado em 1967, mas o nome \"Julius Pringles\" foi inventado por estudantes em 2006 como uma brincadeira na Wikipédia e foi adotado oficialmente pela empresa em 2013.\n[…]\nAinda que a princípio o aperitivo seja feito de batatas, o fabricante alega que elas representam menos de 50% do produto e que a base seria feita de gordura e farinha, numa tentativa de se livrar do IVA (Imposto sobre o Valor Agregado). A justiça britânica, contudo, definiu que Pringles são mesmo batatas e a empresa deverá pagar o imposto supracitado.\n[…]\nAs batatas Pringles são desidratadas transformadas em purê depois prensadas e fritas, o FDA (Food and Drug Administration) determinou que eles precisavam indicar no rótulo, que eram chips de batata, feitos de batata desidratada, pois seria uma explicação muito longa, porquê a Pringles acabou adotando a expressão Crisps de batata, que fica escondido bem na cara nas latas desde o fim dos anos 70.\n[…]\nP&G Brasil - Pringles\n[…]\nPringles Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Ovomaltine",
      "descricao": "Bebida em pó à base de malte criada em Berna, na Suíça, em 1904, pela empresa de Albert Wander."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Ovomaltine, criado na Suíça em 1904, tem como base o extrato de malte de qual cereal?",
    "resposta": "Cevada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ovaltine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ovaltine",
        "situacao": "ok",
        "texto": "Ovaltine, also known by its original name Ovomaltine, is a brand of milk flavouring product made with malt extract, sugar (except in Switzerland), and whey. Some flavours also have cocoa. Ovaltine, a registered trademark of Associated British Foods, is made by Wander AG, a subsidiary of Twinings, which acquired the brand from Novartis in 2002, except in the United States, where Nestlé acquired the\n[…]\nOvaltine was developed in 1904 by chemist Albert Wander (1867–1950), in Bern, Switzerland, where it is known by its original name, Ovomaltine (from ovum, Latin for \"egg\", and malt, which were originally its key ingredients). In 1927, the factory moved out to the village of Neuenegg, a short distance west of Bern, where it is still produced.\n[…]\nA chocolate malt version is sold as a powder which is mixed with hot or cold milk as a beverage. Malt Ovaltine (a version without cocoa) and Rich Chocolate Ovaltine (a version without malt) are also available in some markets. Ovaltine also expanded by offering chocolate bars, chocolate Easter eggs, parfait, cookies, and breakfast cereals flavored with the original powder.\n[…]\nIn Brazil (where the brand is still known by its original name, \"Ovomaltine\"), local fast-food chain Bob's has offered, since 1959, Ovaltine-flavored milkshakes and sundaes, which have amounted to flagship products of Bob's. In 2016, McDonald's Brazil acquired exclusive rights to sell \"Ovomaltine\"-branded milkshakes. The world's second-largest Ovomaltine factory is located in São Paulo state, and Brazil, right behind Thailand, is the second-largest consumer market for the product.\n[…]\nOvomaltine in the online Culinary Heritage of Switzerland database.\n[…]\nUK Ovaltine site\n[…]\nUS Ovaltine site Archived 20 March 2017 at the Wayback Machine\n[…]\nVilla Park Historical Society's Ovaltine Exhibit\n[…]\nWhat Is Ovaltine, Please? by Brendan I. Koerner"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ovomaltine",
        "situacao": "ok",
        "texto": "Ovomaltine é uma bebida, originalmente suíça, composta de malte, cacau, leite e ovo. Pertencente ao grupo Associated British Foods.\n[…]\nO Ovomaltine foi desenvolvido em 1904 pelo químico Albert Wander (1867–1950), em Berna, Suíça. A preocupação inicial era a subnutrição dos suíços. O nome do produto vem do latim, sendo ovum para \"ovo\", e malte, que eram originalmente seus ingredientes principais. Em 1927, a fábrica mudou-se para a vila de Neuenegg. Inicialmente, a bebida tinha fins médicos e era vendida em farmácias.\n[…]\nO Ovomaltine apoiou Edmund Hillary, o primeiro homem a alcançar o cume do Everest. Pelé e Muhammad Ali também já foram patrocinados pelo Ovomaltine. No Brasil, era chamado de \"o alimento oficial dos atletas\" durante os Jogos Olímpicos de Verão de 1948, patrocinando a cobertura da Rádio Globo. A marca também apoiava eventos esportivos na Suíça e os esquiadores locais.\n[…]\nEm outubro de 2002, a divisão de alimentos e bebidas da Novartis, fabricante do Ovomaltine, foi comprada pela Associated British Foods. A ABF atualmente produz Ovomaltine na Suíça, China, Tailândia, Nigéria e Austrália. No Canadá, o Ovomaltine é produzido pela Grace Foods em biscoitos e bebidas em pó. Nos Estados Unidos, a Nestlé fabrica o Ovomaltine.\n[…]\nEm 1959, passou a ser a base para o milk-shake da rede de fast food Bob's, do Rio de Janeiro. A popularidade dentro da rede de lanchonetes fez com que o Brasil fosse o segundo país que mais consumisse Ovomaltine no mundo, perdendo apenas para a Tailândia.\n[…]\nPágina oficial do Ovomaltine Brasil\n[…]\nPágina oficial do Ovomaltine Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Bombril",
      "descricao": "Marca brasileira de esponjas de lã de aço para limpeza, cujo nome virou sinônimo do produto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A esponja Bombril, marca tão famosa que virou nome genérico no Brasil, é feita de lã de qual material?",
    "resposta": "Aço",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bombril"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bombril",
        "situacao": "ok",
        "texto": "A Bombril é uma empresa brasileira fabricante de produtos de higiene e limpeza doméstica. Fundada em 14 de janeiro de 1948 na cidade de São Paulo por Roberto Sampaio Ferreira, com a criação de uma lã de aço com a ideia de ajudar na limpeza de panelas de alumínio, a marca virou um sinônimo do produto no país. Com sucesso da lã de aço, a empresa passou diversificar seu portfólio no mercado, passando\n[…]\nEm maio de 2011, a Bombril comprou 75% da marca Ecologie, por quinze milhões de reais, criando mais tarde a Bril Cosméticos para competir no setor. Em 2012, foi lançado um limpador de telas de LCD, LED e outras superfícies delicadas.\n[…]\nEm janeiro de 2021, a Bombril lançou um pano umedecido com álcool a 70% de pureza, o qual ela integrou à marca Limpol, de produtos de limpeza.\n[…]\nEm 2016, a empresa teve de cortar todos os gastos com propaganda, inclusive cancelando o contrato de Carlos Moreno como o Garoto Bombril. Isso foi necessário devido aos vários prejuízos que ocorriam desde 2015, quando fornecedores se negaram a enviar matéria-prima às fábricas. Metade dos 550 tipos de produto foram limados, cinco marcas deixaram de existir, e 450 funcionários — 16% da força de trabalho — foram demitidos.\n[…]\nA Caixa de Previdência dos Funcionários do Banco do Brasil (Previ) reduziu sua participação acionária de 7,79% para 2,10% em 30 de setembro de 2019. A Sociedade Corretora Paulista (Socopa) vendeu toda a sua participação na Bombril, de 15,54%, em abril de 2020.\n[…]\nA Bombril conta com uma extensa linha de produtos.\n[…]\nBombril é um sinônimo de lã de aço no Brasil. Durante o período em que Carlos Moreno foi o Garoto Bombril, fez aproximadamente quatrocentos comerciais diferentes, e entrou para o Guinness World Records por maior tempo de permanência no ar."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Tabasco",
      "descricao": "Molho de pimenta produzido pela McIlhenny Company em Avery Island, na Luisiana, desde o século dezenove."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O molho Tabasco, feito na Luisiana desde o século dezenove, leva só três ingredientes: pimenta, vinagre e qual outro?",
    "resposta": "Sal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tabasco_sauce"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tabasco_sauce",
        "situacao": "ok",
        "texto": "Tabasco is an American brand of hot sauce made from vinegar, tabasco peppers, and salt. It is produced by the McIlhenny Company of Avery Island in southern Louisiana, having been created in 1868 by Edmund McIlhenny. Originally, the tabasco peppers were grown only on Avery Island; they are now primarily cultivated in Central America, South America, and Africa.\n[…]\nIn a market full of similar products, the McIlhenny business pursued legal means to deny any other business from using the word \"tabasco\" to describe their hot sauce. This happened even though a common ingredient in these hot sauces was tabasco peppers. After five decades of litigation in several courtrooms across the United States, McIlhenny won the rights to using the word \"tabasco\" as a proprietary name in 1948 from a court in Louisiana.\n[…]\nThis, in spite of losses in other courts, allowed McIlhenny to call his sauce \"tabasco\" and barred any other competitor from using what used to be a generic name for the product except as an ingredient.\n[…]\nMcIlhenny Company also permits other brands to use and advertise Tabasco sauce as an ingredient in their products (a common marketing practice called \"co-branding\"), including Spam, Hormel chili, Slim Jim beef sticks, Heinz ketchup, A1 steak sauce, Plochman's mustard, Lawry's salt, Zapp's potato chips, Heluva Good dip, and Vlasic Pickles.\n[…]\nIn Back to the Future Part III, the saloon bartender uses Tabasco as an ingredient for an instant hangover cure he calls \"wake-up juice\". Tabasco sauce was also an important element in the television series Roswell about alien/human hybrid teenagers who craved foods that were sweet and spicy and often carried bottles of Tabasco sauce with them. When the network tried to cancel the series in the first season, thousands of fans mailed bottles of Tabasco to the network to show their support.\n[…]\nTabasco Road"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Molho_Tabasco",
        "situacao": "ok",
        "texto": "O Tabasco ou molho de tabasco é um molho de pimenta fabricado nos Estados Unidos, conhecido e vendido em todo o mundo. De sabor picante, prepara-se com pimentos vermelhos Capsicum frutescens da variedade tabasco, vinagre e sal, macerados em barris de carvalho. O molho é produzido na ilha de Avery, que fica localizada na Paróquia de Iberia, no estado estadunidense da Luisiana.\n[…]\nÉ vendido em mais de 160 países e territórios, sendo embalado em 22 línguas e dialetos. São produzidas cerca de 720.000 pequenas garrafas de 57 ml por dia, na fábrica de tabasco na ilha de Avery, na Luisiana. Existem garrafas de diversos tamanhos, desde as mais comuns de 57 ml e 148 ml, até às de 3,7 litros (que correspondem a um galão norte-americano), usadas na restauração, e às miniaturas de 3,7 ml.\n[…]\nAlém do molho tabasco clássico, existem outras variedades:\n[…]\no molho picante jalapenho, menos picante, feito à base de malaguetas jalapenho (Capsicum annuum);\n[…]\no molho picante habanero, mais picante, feito à base de malaguetas habanero (Capsicum chinense).\n[…]\nO molho tabasco foi inventado em 1868 por Edmund McIlhenny, um antigo banqueiro nascido no estado de Maryland, nos Estados Unidos, que se mudou para o estado da Luisiana por volta de 1840. Após a sua morte em 1890, foi sucedido pelo seu filho mais velho, John Avery McIlhenny, que expandiu e modernizou o negócio. Alguns anos mais tarde, este demitiu-se para se juntar a um regimento voluntário de cavalaria de Theodore Roosevelt.\n[…]\nPimenta\n[…]\nA tecnologia do tabasco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Campari",
      "descricao": "Aperitivo alcoólico italiano de cor vermelha e sabor amargo, criado em Novara por Gaspare Campari em 1860."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Até os anos dois mil, a cor vermelha do aperitivo italiano Campari vinha de um corante extraído de qual inseto?",
    "resposta": "Cochonilha",
    "distratores": [
      "Joaninha",
      "Bicho-da-seda",
      "Abelha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Campari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Campari",
        "situacao": "ok",
        "texto": "Campari (Italian: [kamˈpaːri]) is an Italian alcoholic liqueur, considered an apéritif of the bitter variety (and not an amaro) by Italians while considered an apéritif of the amaro variety by Americans, obtained from the infusion of herbs and fruit (including chinotto and cascarilla) in alcohol and water. It is a type of bitters, characterised by its dark red colour. It is produced by the Campari\n[…]\nThe Campari brand is now distributed in over 190 countries. Campari is a registered trademark of Davide Campari Milano S.P.A., which is part of Gruppo Campari (Campari Group).\n[…]\nCampari is often used in cocktails and is commonly served with soda water or citrus juice (most often pink grapefruit juice), often garnished with either blood orange or blood lime slice (mainly in Australia) or mixed with prosecco as a spritz.\n[…]\nCampari is an essential ingredient in several IBA official cocktails (of which Campari is a sponsor): the negroni, the Americano (which was named at a time when few Americans were aware of Campari), the boulevardier, and the old pal (removed from IBA list in 1987), as well as other drinks such as the Garibaldi. It is a common ingredient in spritzes, though other apéritif bitters are also common.\n[…]\nIn the Italian market, Campari mixed with soda water is sold in individual bottles as Campari Soda (10% alcohol by volume). Campari Soda is packaged in a distinctive bottle that was designed by Italian artist Fortunato Depero in 1932.\n[…]\nWine Enthusiast has reviewed Campari on a number of occasions, giving it a score of \"96/100\" in 2023.\n[…]\n\"Campari: the Italian classic that still has style\", The Daily Telegraph\n[…]\nChapter 9: \"Campari: product diversification and international expansion\", Corporate Strategy and Firm Growth: Creating Value for Shareholders, by Angelo Dringoli\n[…]\nThe Art of Campari"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Campari",
        "situacao": "ok",
        "texto": "Campari é uma bebida alcoólica italiana do tipo extrato herbal bitter (do inglês “amargo”), servido como aperitivo ou digestivo (antes ou após a refeição), obtida pela infusão de sessenta ingredientes (ervas e temperos) combinados e macerados em malte de água destilada e álcool, e é fabricado pelo Grupo Campari, na cidade de Milão, Itália.\n[…]\nFoi inventado pelo italiano Gaspare Campari entre os anos de 1862 e 1867. Ainda hoje o produto tem a mesma composição original, graças à fórmula que foi guardada em segredo por quase 150 anos.\n[…]\nNa década de 1840, Gaspare construiu um bar na cidade de Milão e, na década de 1860 criou este bitter batizado com o sobrenome da família (Campari). O primeiro coquetel baseado nesta bebida é chamado Milano-Torino: metade bitter e metade vermute (bebida da região de Turim). Em seguida foi o drink Americano: mix de campari, vermute e, club soda (água com gás).\n[…]\nCampari orange, a bebida com suco de laranja, fatias da fruta e, gelo. Formando assim uma bebida leve. O fundo para ganhar a coloração.\n[…]\nCampari milano, mix da bebida com gin, espumante moscatel e, gelo. Finalização com folhas de hortelã.\n[…]\nCampari tonic, mix com gin tônica saborizada, água tônica, gelo. Com a finalização da fatia de limão no final usada como guarnição. Coloque o bitter no fundo para ganhar um sabor.\n[…]\nCampari tonic-laranja, versão do bitter com tônica e suco de laranja-bahia (que diminui o amargor).==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Vaselina",
      "descricao": "Marca de geleia de petróleo criada pelo químico americano Robert Chesebrough no século dezenove."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Vaselina, patenteada pelo químico americano Robert Chesebrough em 1872, é obtida a partir de qual matéria-prima?",
    "resposta": "Petróleo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vaseline",
      "https://en.wikipedia.org/wiki/Petroleum_jelly"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vaseline",
        "situacao": "ok",
        "texto": "Vaseline ( ) is an American brand of petroleum jelly-based products owned by a British company Unilever. Products include plain petroleum jelly and a selection of skin creams, soaps, lotions, cleansers, and deodorants.\n[…]\nIn many languages, the word \"vaseline\" is used as a genericized word for petroleum jelly.\n[…]\nIn 1859, Robert Chesebrough, a chemist who formerly clarified lamp oil from sperm oil, a waxy oil from the heads of sperm whales, was losing business as whale oil was replaced by petroleum-derived coal oil. He traveled to the oil fields in Titusville, Pennsylvania, to research what new materials might be created from this new fuel. There he learned of a residue called rod wax that had to be periodically removed from oil rig pumps.\n[…]\nThe oil workers had been using the substance to heal cuts and burns. Chesebrough took samples of the rod wax back to Brooklyn, extracted the usable petroleum jelly, and began manufacturing a medicinal product he called Vaseline.\n[…]\nThe first known reference to the name Vaseline was by the Chesebrough Manufacturing Company in the U.S. patent (U.S. Patent 127,568) in 1872. \"I, Robert Chesebrough, have invented a new and useful product from petroleum which I have named Vaseline...\"\n[…]\nVaseline contains mineral oils. Unrefined mineral oils often contain adulterants including polycyclic aromatic hydrocarbons (PAHs), which can increase risk for certain forms of cancer when consumed orally. When used topically (as is recommended with Vaseline), dermal absorption of PAHs is insignificant. No link between topical petroleum jelly-based moisturizers and cancer has been found in large studies over many years."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Petroleum_jelly",
        "situacao": "ok",
        "texto": "Petroleum jelly, petrolatum (), white petrolatum, soft paraffin, or multi-hydrocarbon, CAS number 8009-03-8, is a semi-solid mixture of hydrocarbons (with carbon numbers mainly higher than 25), commonly promoted as a topical ointment for its healing properties. Vaseline has been the dominant brand of petroleum jelly sold since 1870.\n[…]\nNative Americans discovered the use of petroleum jelly for shielding and healing the skin. Sophisticated oil pits had been built as early as 1415–1450 in Western Pennsylvania. In 1859, workers operating the United States' first oil rigs noticed a paraffin-like material forming on rigs in the course of investigating malfunctions. Believing the substance hastened healing, the workers used the jelly on cuts and burns.\n[…]\nRobert Chesebrough, a young chemist whose previous work of distilling fuel from the oil of sperm whales had been rendered obsolete by petroleum, went to Titusville, Pennsylvania, to see what new materials had commercial potential. Chesebrough took the unrefined green-to-gold-colored \"rod wax\", as the drillers called it, back to his laboratory to refine it and explore potential uses.\n[…]\nHe discovered that by distilling the lighter, thinner oil products from the rod wax, he could create a light-colored gel. Chesebrough patented the process of making petroleum jelly by U.S. patent 127,568 in 1872. The process involved vacuum distillation of the crude material followed by filtration of the still residue through bone char.\n[…]\nVaseline brand First Aid Petroleum Jelly, or carbolated petroleum jelly containing phenol to give the jelly additional antibacterial effect, has been discontinued.\n[…]\nSome goalkeepers in association football put petroleum jelly on their gloves to make them stickier.\n[…]\nThe dictionary definition of petroleum jelly at Wiktionary"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Jägermeister",
      "descricao": "Licor alemão de ervas criado em 1934 em Wolfenbüttel, cujo rótulo mostra a cabeça de um cervo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No rótulo do licor alemão Jägermeister, o que brilha entre os chifres do cervo?",
    "resposta": "Uma cruz",
    "fonte": [
      "https://en.wikipedia.org/wiki/J%C3%A4germeister"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/J%C3%A4germeister",
        "situacao": "ok",
        "texto": "Jägermeister ( YAY-gər-my-stər, German: [ˈjɛːɡɐˌmaɪstɐ] ) is a German spiced digestif liqueur. Developed in 1934 by Wilhelm and Curt Mast, it has an alcohol by volume of 35% (61 degrees proof, or US 70 proof). The recipe of 56 herbs and spices has not changed since its creation, and the drink continues to be sold in a green glass bottle. It is the flagship product of Mast-Jägermeister SE, headquar\n[…]\nAs of 2018, Jägermeister has sponsored the National Hockey League (NHL) as the official shot of the NHL.\n[…]\nIn 2024, the USL announced a new competition open to teams playing in USL League One called the USL Cup, which is now open to USL Championship teams as well. It has been known as the Jägermeister Cup due to sponsorship reasons since its foundation.\n[…]\nJägermeister has been a sponsor of the second stage at the Rockstar Mayhem Festival since 2008. Mayhem Fest is a large hard rock and modern metal festival that tours the United States and Canada. In 2008, the stage featured the bands Machine Head, Airbourne, Five Finger Death Punch and Walls of Jericho. The 2009 Mayhem Fest Jäger Stage featured Trivium, All That Remains and God Forbid. The 2010 stage featured the bands Hatebreed, Chimaira, Shadows Fall and Winds of Plague.\n[…]\nThe Jägermeister Music Tour, which was owned by Sidney Frank Importing, was an event that was held each year in the spring and fall.\n[…]\nIn Australia, Jägermeister sponsors the AIR Charts, which are Australia's official independent music charts (run by the Australian Independent Record Labels Association).\n[…]\nIn 2020 Jägermeister USA launched a program titled \"Meister Class\", an initiative to provide emerging musicians with insight from and access to artists Mustard, Smino, and EarthGang.\n[…]\nOn December 18, 2020, it was announced that Jägermeister USA donated one million dollars to NIVA Emergency Relief Fund in support of venues struggling due to COVID-19 restrictions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/J%C3%A4germeister",
        "situacao": "ok",
        "texto": "Jägermeister (aka Organizer) é uma bebida composta de 56 ervas, frutas, raízes e temperos produzida na Alemanha desde 1935. É o nono destilado mais consumido no mundo. A sua origem é registrada durante o  período das guerras mundiais entre 1917 e 1945, na qual a bebida era produzida por caçadores alemães, dentre os ingredientes estão diversas ervas, frutas, raízes e temperos.\n[…]\nReza a lenda que os caçadores davam a bebida aos animais antes do abate, para acalmá-los e dar sabor à carne, entretanto dizem as más línguas que as esposas dos caçadores faziam isso com os caçadores. Ao contrário da lenda urbana, sangue de alce ou cervo não fazem parte da composição da bebida.\n[…]\nSua versatilidade proporciona as mais variadas combinações, sendo o mais famoso no mundo inteiro o \"JägerBomb\", em que se deixa cair um shot de Jägermeister num copo de Redbull.\n[…]\nSegundo o site oficial da Jägermeister, foi o filho de Wilhelm Mast, Curt Mast, que trouxe o comércio de vinagre da família a um outro patamar, seguindo em uma direção diferente. Alguns anos se passaram ao ponto de ter a proeza de aperfeiçoar a combinação de 56 ingredientes botânicos da bebida. Nos dias atuais, existe uma estátua de pedra, um busto, que imortaliza a contribuição do fundador.\n[…]\nA origem da imagem da marca vem da história de Santo Huberto, um caçador medieval que, numa de suas caçadas em plena Sexta-feira Santa, encontrou um cervo com uma cruz entre os chifres e com a voz de Deus lhe chamando a conversão, o que se deu logo em seguida, tornando-o amplamente venerado na Idade Média após sua morte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Hello Kitty",
      "descricao": "Personagem de gatinha branca com laço criada em 1974 pela empresa japonesa Sanrio."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que parte do rosto a gatinha Hello Kitty, criada pela japonesa Sanrio em 1974, não tem nos desenhos?",
    "resposta": "Boca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hello_Kitty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty, also known by her real name Kitty White, is a fictional character created by Yuko Shimizu, designed by Yuko Yamaguchi, and owned by the Japanese company Sanrio. Sanrio depicts Hello Kitty as a British anthropomorphic white cat with a red bow and no visible mouth. According to her backstory, she lives in a London suburb with her family, and is close to her twin sister Mimmy, who is dep\n[…]\nIn 1962, Shintaro Tsuji, founder of Sanrio, began selling rubber sandals with flowers painted on them. Tsuji noted the profits gained by adding a cute design to the shoes and hired cartoonists to design cute characters for his merchandise. Hello Kitty was designed by Yuko Shimizu and was added to the lineup of early Sanrio characters in 1974.\n[…]\nHello Kitty Dream Cafe (2017, Android, iOS): A café simulation game\n[…]\nHowever, due to high demand, the airline added two more alongside their existing A330-200s in mid-2012. A year later, EVA Air introduced one of their 777-300ERs as another Hello Kitty Jet, which featured other Sanrio characters as well as Hello Kitty.\n[…]\nAlthough Sachs did not seek permission to use the character in his work, a brand marketing manager for Sanrio was quoted as saying \"You know, there was Marilyn Monroe and Andy Warhol, and then Michael Jackson and Jeff Koons. When you're an icon, that's what happens.\" In 2013 The Wall Street Journal said Sanrio's attitude to copyright was \"laissez-faire\" compared to companies like Disney, and that they have let artists use Hello Kitty's likeness without interfering.\n[…]\nIn 2022, Saturday Night Live aired a sketch parodying Hello Kitty's backstory (described by The A.V. Club as \"incongruous, corporate-sanctioned\") and Sanrio's handling of it. The sketch centers on managers at a fictional Hello Kitty store. They describe the character in contradictory terms as a \"human little girl\" who is in third grade and also 48 years old."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty (japonês: ハロー・キティ, Hepburn: Harō Kiti), também conhecida por seu nome completo Kitty White (キティ・ホワイト, Kiti Howaito), é uma personagem criada pela empresa japonesa Sanrio. Apesar do bigode, das orelhas e do nome (\"Kitty\" é um termo equivalente a \"gatinho\", em inglês), Sanrio retrata Hello Kitty como uma jovem gijinka (antropomorfização) de um bobtail japonês com um laço vermelho e, nota\n[…]\nPorta-vozes da Sanrio disseram que a Hello Kitty não tem boca, pois querem que as pessoas \"projetem seus sentimentos no personagem\" e \"fiquem felizes ou tristes junto com a Hello Kitty.\" Outra explicação que a Sanrio deu para sua falta de boca é que ela \"fala com o coração. Ela é a embaixadora da Sanrio para o mundo e não está presa a nenhum idioma específico\".\n[…]\nExistem rumores e lendas urbanas de que a Hello Kitty seja, na realidade, um símbolo diabólico. Desde 2005, alguns sites da internet especulam que o motivo da Hello Kitty não possuir boca foi um pacto diabólico. Segundo essa lenda urbana, uma menina de 14 anos tinha câncer na boca e estava em fase terminal, então sua mãe fez um pacto com o diabo para que a menina se curasse[carece de fontes]? e em troca ela criaria uma marca que ganhasse sucesso mundialmente.\n[…]\nEsse boato começou a se espalhar a partir de um e-mail de 2008 em espanhol, com algumas modificações, afirmando que os pais de uma menina de 12 anos com câncer de boca fizeram um pacto com o diabo para trazer à fama mundial um personagem em troca do retorno de sua filha à saúde. O relato também afirma que \"Kitty\" é uma palavra chinesa que significa \"demônio\", portanto, Hello Kitty significa \"olá demônio\".\n[…]\n“Kitty parece feliz quando as pessoas estão felizes. Ela parece triste quando elas estão tristes. Por motivos psicológicos, achamos que ela não deveria estar presa a nenhuma emoção específica, e é por isso que ela não tem boca.”\n[…]\n«Especial Hello Kitty da Abril»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Peugeot",
      "descricao": "Montadora francesa de automóveis com o símbolo do leão, cuja empresa familiar foi fundada em 1810."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas montadoras pertence à empresa mais antiga, surgida como negócio familiar no começo do século dezenove?",
    "resposta": "Peugeot",
    "distratores": [
      "Ford",
      "Fiat",
      "Renault"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peugeot",
      "https://en.wikipedia.org/wiki/Fiat_Automobiles",
      "https://en.wikipedia.org/wiki/Renault"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot (UK:  , US:  ; French: [pøʒo] ) is a French automobile brand owned by Stellantis.\n[…]\nTheir familiarity with the Peugeot engine was the basis of the famed Miller racing engine, which later developed into the Offenhauser.\n[…]\nAs of 2021, the separate Peugeot-family-owned firm Peugeot Saveurs, previously named PSP Peugeot, continues to make and market pepper grinders, salt grinders, corkscrews for wine bottles, cutlery, tableware, and other kitchen- and table-service equipment.\n[…]\nThe company has produced household mills since the 19th century. Its first coffee mill, the R model, was launched in 1840, followed by large cast-iron grocers’ mills in 1855. Peugeot introduced the Z model table pepper mill in 1874, which remains in production.\n[…]\nThe product range has expanded to include coffee grinders, nutmeg mills, chilli grinders, and spice mills for seeds such as flax or sesame, as well as wine accessories such as corkscrews, decanters, champagne coolers, and vacuum pumps. Peugeot Saveurs also manufactures glazed ceramic ovenware under the “Appolia” brand line.\n[…]\nProduction remains centered in Quingey, in the Franche-Comté region of France, where most of its mills are manufactured. The firm has been awarded the French Entreprise du Patrimoine Vivant (Living Heritage Company) label in recognition of its traditional expertise. Peugeot Saveurs reports annual production of more than two million mills and exports to over 80 countries. The company employs around 185 people, most of them at the Quingey facility.\n[…]\nPeugeot Concours Design\n[…]\nThe Peugeot Museum at Sochaux\n[…]\nPeugeot Mills"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fiat_Automobiles",
        "situacao": "ok",
        "texto": "FIAT Automobiles S.p.A., commonly known as FIAT (UK:  FEE-ət, -⁠at, US:  -⁠aht; Italian: [ˈfiːat]), is an Italian automobile manufacturer. FIAT Automobiles was formed in January 2007 when FIAT Group reorganized its automobile business, and traces its history back to 1899, when the first FIAT automobile, the FIAT 3½ HP, was produced.\n[…]\nIt became a part of FIAT-Chrysler Automobiles (FCA) when the FIAT Group merged with the US Chrysler Group in 2014. Subsequently, in 2021 it became a subsidiary of Stellantis, the new holding company born from FCA's merge with the French Peugeot SA."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Renault",
        "situacao": "ok",
        "texto": "Renault S.A., commonly referred to as Groupe Renault (UK:  REN-oh, US:  rə-NOH; French: [ʁəno], also known as the Renault Group in English), is a French multinational corporation and automobile manufacturer established in 1899. The company produces a range of cars and vans; it has previously manufactured trucks, tractors, tanks, buses/coaches, aircraft and aircraft engines, as well as autorail veh\n[…]\nIn the late 1960s and 1970s, the company established subsidiaries in Eastern Europe, most notably Dacia in Romania, and South America (many of which remain active) and forged technological cooperation agreements with Volvo and Peugeot, (for instance, for the development of the PRV V6 engine, which was used in Renault 30, Peugeot 604, and Volvo 260 in the late 1970s).\n[…]\nWhen Peugeot acquired Citroën and formed PSA, the group's collaboration with Renault was reduced, although established joint production projects were maintained. Prior its merging with Peugeot, Citroën sold to Renault the truck and bus manufacturer Berliet in December 1974, merging it with its subsidiary Saviem in 1978 to create Renault Véhicules Industriels, which became the only French manufacturer of heavy commercial vehicles.\n[…]\nRenault's flagship showroom, L'Atelier Renault (French pronunciation: [latəlje ʁəno]), is located on the Champs-Élysées in Paris, with other manufacturers such as Peugeot, Citroën and Toyota. It opened in November 2000, located on the site of Pub Renault, which operated from 1963 until 1999. The first Renault venue at the location was the Magasin Renault in 1910, a pioneering car showroom."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot ([inglês RU: ˈpɜːʒəʊ], [inglês EUA: p(j)uːˈʒoʊ], francês: [pøʒo]) é uma fabricante de automóveis francesa fundada em 1810 por Armand Peugeot, pertencente à Stellantis. É a marca de automóveis mais antiga do mundo.\n[…]\nA família Peugeot, que desde 1810 tinham um moinho hidráulico familiar, vem envolvida em vários tipos de negócios desde o século XVIII. Em 1842, entraram no ramo alimentício produzindo moinhos de café, depois disso começaram a produzir armações para vestidos, guarda-chuvas, fundição de aço, ferramentas e utensílios domésticos, em 1882 começaram a fabricar bicicletas e motos.\n[…]\nCriado pela equipe de designers da marca, o felino francês ganhou contornos mais minimalistas mas ao mesmo tempo dinâmicos, além de apresentar um aspecto metalizado e modernista. O leão libertou-se igualmente do fundo azul para, segundo a marca, “exprimir melhor a sua força”. O primeiro veículo a ostentar o novo logotipo da marca foi o Peugeot RCZ, lançado no mercado europeu no primeiro semestre de 2010. Foi, sem dúvida, a celebração de um bicentenário projetado para o futuro.\n[…]\nCom o lançamento de uma gama inaugurada pelo novo Peugeot 308 na Europa e com o nascimento da Stellantis, em 25 de fevereiro de 2021 foi anunciado seu novo logotipo, que é, segundo a própria marca: \"um emblema que transmite identidade, atemporal, universal e multicultural. Um sinal distintivo, um símbolo de pertencimento, de reconhecimento. Sinônimo de prestígio, segurança, longevidade e linhagem. Com ele e seu novo universo gráfico, a PEUGEOT conjuga elementos históricos com a modernidade\".\n[…]\nPeugeot Traveller\n[…]\nPeugeot Boxer\n[…]\nPeugeot J5\n[…]\nPeugeot J7\n[…]\nPeugeot J9\n[…]\nPeugeot P4\n[…]\nSite Oficial da Peugeot — Brasil\n[…]\nSite Oficial da Peugeot — Portugal\n[…]\nPeugeot",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pirelli",
      "descricao": "Fabricante italiana de pneus fundada em Milão em 1872 por Giovanni Battista Pirelli."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre Pirelli, Goodyear, Firestone e Bridgestone, qual fabricante de pneus é a mais antiga?",
    "resposta": "Pirelli",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pirelli",
      "https://en.wikipedia.org/wiki/Firestone_Tire_and_Rubber_Company",
      "https://en.wikipedia.org/wiki/Bridgestone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pirelli",
        "situacao": "ok",
        "texto": "Pirelli & C. S.p.A. is an Italian multinational tyre manufacturer based in the city of Milan, Italy. The company, which has been listed on the Borsa Italiana since 1922, is the 5th-largest tyre manufacturer, and is focused on the consumer production of tyres for cars, motorcycles and bicycles. It is present in Europe, the Asia-Pacific, Latin America, North America, and the post-Soviet states, oper\n[…]\nThe list of Pirelli Board of Directors as of April 2023:\n[…]\nPirelli has been the sole tyre supplier in Formula One since 2011 following Bridgestone's decision to withdraw from the role at the end of 2010. Pirelli previously competed in Formula One from 1950–1958, 1981–1986 and 1989–1991. Pirelli also supplies tyres for the FIA Formula 2 Championship (formerly GP2 Series), FIA Formula 3 Championship (formerly GP3 Series) and F1 Academy, that form the feeder series to Formula One. The 2025 Dutch Grand Prix marked Pirelli's 500th Grand Prix entry.\n[…]\nStarting from 2027 to 2031 seasons Pirelli will be official sole tyre partner and supplier to MotoGP premier class replacing Michelin after eleven seasons.\n[…]\nPirelli has partnered with Italian Boat Manufacture Sacs Tecnorib Spa to create the Pirelli Rigid inflatable Boat. They have models ranging from 30 to 50 feet, including small tenders (X and J Models).\n[…]\nIn July 2018, Pirelli launched a Formula One wheel-shaped Bluetooth speaker, P Zero Sound. The Bluetooth speaker measures 330-millimetre (12.9 in) in diameter, weighs 9.5 kg (21 pounds) and has a 100-watt amplifier, a 100-millimetre (3.9 in) mid-woofer, a 25-millimetre (0.98 in) tweeter and also offers Bluetooth 4.0 with AptX for wireless connectivity. IXOOST is the manufacturer of P Zero Sound speaker, which majorly manufactures Motorsports-themed audio systems.\n[…]\nPirelliTyre.com Archived 20 November 2008 at the Wayback Machine Pirelli Tyres Worldwide\n[…]\nYahoo! Pirelli & C. S.p.A. Company Profile"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Firestone_Tire_and_Rubber_Company",
        "situacao": "ok",
        "texto": "Firestone Tire and Rubber Company is an American tire manufacturer based in Nashville, Tennessee. It was founded in 1900 by Harvey S. Firestone in Akron, Ohio, originally producing solid rubber side-wire tires for fire apparatus. The company later expanded to manufacture pneumatic tires for wagons, carriages, and other wheeled vehicles of the time.\n[…]\nIn 1988, after discussions with Pirelli, Nevin negotiated the sale of the company to the Japanese company Bridgestone, which was able to buy the company for much less than it had been worth a decade and a half earlier. The companies celebrated the 20th anniversary of the merger in 2008, and changed the name of the tire division to Bridgestone Americas Tire Operations, LLC.\n[…]\nThe Indianapolis 500 auto race was won in 1911 by a car running Firestone tires, as did all winners of the race from 1920 to 1966. The company also provided tires to NASCAR from 1948 to 1974, and to Formula One from 1950 to 1974 and returned again from 1999 to 2002 as a promotional circuit trackside sponsor due to Bridgestone tire partnership.\n[…]\nThe manufacturer returned in 1995 to the CART Series with technical assistance from Bridgestone. Firestone has been the sole supplier of tires for the IndyCar Series since 2000 and will run until the 2030 season.\n[…]\nAn abnormally high failure rate in Firestone's Wilderness AT, Firestone ATX, and ATX II tires resulted in multiple lawsuits, as well as an eventual mandatory recall. In 2001 Bridgestone/Firestone severed its ties to Ford citing a lack of trust. The lack of trust stemmed from concerns that Ford had not heeded warnings by Bridgestone/Firestone relating to the design of the Ford Explorer.\n[…]\nFirestone-Apsley Rubber Company\n[…]\nBridgestone\n[…]\nKnoll, Arthur J. \"Harvey S. Firestone's Liberian Investment (1922–1932).\" Liberian Studies Journal 14.1 (1989): 13–33. online"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bridgestone",
        "situacao": "ok",
        "texto": "Bridgestone Corporation (株式会社ブリヂストン, Kabushiki gaisha Burijisuton) is a Japanese multinational tire and rubber manufacturing company based in Kyōbashi, Tokyo. Founded in 1931 by Shōjirō Ishibashi in Kurume, it primarily manufactures tires, as well as golf equipment. In addition to automotive tires, the company produces tires for bicycles, motorcycles, and airplanes. The name Bridgestone comes from\n[…]\nIn order to increase the Firestone subsidiary's brand awareness, Bridgestone Firestone NAH Ltd, re-entered the Firestone brand into CART open-wheel racing in 1995 to challenge Goodyear. The tires proved better and Goodyear left the series for 2000. Since then, Firestone has been the single tire provider for the successor Champ Car World Series, the IndyCar Series and its feeder series Indy NXT.\n[…]\nThe first title was acquired right away in the second year, 1998 by Mika Häkkinen and McLaren–Mercedes. And Bridgestone users took five Drivers' Championship titles and five Constructors' Championship titles (1998, 2001–2004) for the period that competed with Goodyear (1997–1998) and Michelin (2001–2006). Especially, cooperation with Scuderia Ferrari and Michael Schumacher functioned well in this period.\n[…]\nOn 2 November 2009, Bridgestone announced that they would not be renewing their contract to supply tires to Formula One teams after 2010. The company said it was \"addressing the impact of the continuing evolution of the business environment\". Pirelli announced in June 2010 that it would serve as sole supplier for tires in the 2011 season.\n[…]\nAfter Bridgestone purchased Firestone in 1988, cost-cutting measures led to tread separations in tires manufactured in Firestone plants in the 1990s.\n[…]\nBridgestone Tower\n[…]\n(in English) News | Bridgestone\n[…]\nBridgestone Bicycles Official site\n[…]\n\"Company history books (Shashi)\". Shashi Interest Group. April 2016. — Wiki collection of bibliographic works on Bridgestone."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pirelli",
        "situacao": "ok",
        "texto": "A Pirelli é uma empresa italiana fundada em Milão em 1872 pelo engenheiro Giovanni Battista Pirelli.\n[…]\nA estrutura da Pirelli brasileira é composta por escritórios comerciais localizados nas principais capitais, a mais ampla rede autorizada de revenda e serviços e cinco fábricas espalhadas pelo país (Gravataí-RS, Campinas-SP, Santo André-SP, Sumaré-SP e Feira de Santana-BA), que produzem pneus para automóveis, camionetas, motos, scooters, bicicletas, caminhões, ônibus, tratores, máquinas agrícolas e veículos pesados voltados para a construção civil e uso industrial.\n[…]\nFeira de Santana: Na Fábrica baiana são produzidos pneus convencionais para, ônibus, caminhões leves e pesados, além de radiais para automóveis e utilitários esportivos. Anteriormente denominada Cia Pneus Tropical, foi adquirida pela Pirelli em 1986 e possui atualmente  1500  funcionários .\n[…]\nEm março de 2006, a Pirelli Pneus inaugurou em seu complexo industrial de Gravataí uma nova unidade destinada à produção de pneus Gigante Radial para caminhões e ônibus, ação que gerou 500 novos empregos diretos e indiretos. No dia 13 de maio de 2019, a Pirelli Pneus anunciou em sua sede global em Milão, na Itália, que vai fechar a fábrica de Gravataí, a empresa afirma que promoverá uma reorganização nas unidades locais, “tendo em vista o cenário conjuntural difícil”.\n[…]\nEm junho de 2026, após exercer uma opção de renovação por mais um ano com a Fórmula 1, a Pirelli prolongou seu contrato como fornecedora exclusiva de pneus do campeonato mundial até 2028.\n[…]\nPirelli internacional\n[…]\nPirelli Brasil\n[…]\nPirelli Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Guinness",
      "descricao": "Cerveja escura irlandesa produzida desde o século dezoito na cervejaria de St. James's Gate, em Dublin."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas marcas de cerveja é a mais antiga?",
    "resposta": "Guinness",
    "distratores": [
      "Heineken",
      "Budweiser",
      "Brahma"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guinness",
      "https://en.wikipedia.org/wiki/Heineken",
      "https://en.wikipedia.org/wiki/Budweiser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guinness",
        "situacao": "ok",
        "texto": "Guinness ( ) is a stout that originated in the brewery of Arthur Guinness at St. James's Gate, Dublin, Ireland, in the 18th century. It is now owned by the British multinational alcoholic beverage maker Diageo. It is one of the most successful alcohol brands worldwide, brewed in almost 50 countries, and available in over 120. Sales in 2011 amounted to 850,000,000 litres (190,000,000 imp gal; 220,0\n[…]\nFollowing the COVID-19 pandemic and pub closures, Guinness produced a \"Looks Like Guinness\" advert in anticipation of pubs reopening in 2021.\n[…]\nAs of 2024, Guinness is the official beer of the Premier League.\n[…]\nGuinness began retailing in India in 2007.\n[…]\nThe Guinness Storehouse at St. James's Gate Brewery in Dublin is the most popular tourist attraction in Ireland  (attracting over 1.7 million visitors in 2019) where a self-guided tour includes an account of the ingredients used to make the stout and a description of how it is made. Visitors can sample the smells of each Guinness ingredient in the Tasting Rooms, which are coloured with a unique lighting design that emits Guinness's gold and black branding.\n[…]\nThe Guinness Book of Records started as a Guinness marketing giveaway, based on an idea of its then Managing Director, Sir Hugh Beaver. Its holding company, Guinness World Records Ltd, was owned by Guinness plc, subsequently Diageo, until 2001.\n[…]\nThe 2025 drama series House of Guinness deals with the growth of the business in 19th century Ireland.\n[…]\nGuinness Storehouse website\n[…]\nHow Guinness saved Ireland during WWII\n[…]\nSelection of Guinness commercials including Noitulove, Dancing Man, Surfer Archived 23 July 2011 at the Wayback Machine\n[…]\nMoriarty, Philip. \"Guinness\". Sixty Symbols. Brady Haran for the University of Nottingham.\n[…]\nLighting design of The Tasting Rooms in Guinness Storehouse\n[…]\nDocuments and clippings about Guinness in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Heineken",
        "situacao": "ok",
        "texto": "Heineken Lager Beer (Dutch: Heineken Pilsener), or simply Heineken (pronounced [ˈɦɛinəkə(n)]), is a Dutch pale lager beer with 5% alcohol by volume, produced by the Dutch brewing company Heineken N.V. It is typically sold in a green bottle with a red star."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Budweiser",
        "situacao": "ok",
        "texto": "Budweiser (, German pronunciation: [ˈbu:tvaɪzɐ]) is an American-style pale lager, a brand of Belgian company AB InBev. Introduced in 1876 by Carl Conrad & Co. of St. Louis, Missouri, Budweiser is one of the largest selling beers in the United States. Budweiser is a filtered beer, available on draft and in bottles and cans, made with up to 30% rice in addition to hops and barley malt."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guinness",
        "situacao": "ok",
        "texto": "A Guinness é uma marca de cerveja irlandesa cuja história teve início em 1759, quando Arthur Guinness alugou uma fábrica em Dublin, na Irlanda, e começou a produzir sua cerveja. Em 1862 adotou a Harpa irlandesa como símbolo.\n[…]\nFundada em 1759, a Guinness mantém até hoje a produção baseada em malte irlandês, água de Dublin, lúpulo e levedura.\n[…]\nA cerveja Guinness é produzida localmente em 60 países e comercializada num total de 120 países, possuindo 80% de participação no mercado mundial de cerveja preta. Ao redor do mundo, 170 mil pubs consomem 10 milhões de copos (pints) de Guinness diariamente.\n[…]\nGuinness é a sexta cervejaria do mundo, proprietária das marcas Harp, Kilkenny, Red Strip, Kaliber, Smithwick's Ale e participante de fusões com cervejarias locais ao redor do mundo. Suas vendas chegam a de 2,7 bilhões de litros de cerveja por ano.\n[…]\nDados podem ser referenciados em sites oficiais ou literatura cervejeira.\n[…]\nGuinness Foreign Extra Stout\n[…]\nPágina oficial da cerveja Guinness",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Milka",
      "descricao": "Marca de chocolate ao leite de embalagem lilás, criada na Suíça em 1901 pela Suchard."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes chocolates foi lançado primeiro?",
    "resposta": "Milka",
    "distratores": [
      "Toblerone",
      "Snickers",
      "Kit Kat"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Milka",
      "https://en.wikipedia.org/wiki/Toblerone",
      "https://en.wikipedia.org/wiki/Kit_Kat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Milka",
        "situacao": "ok",
        "texto": "Milka is a European brand of chocolate confectionery. Originally made in Switzerland in 1901 by Suchard, it has been produced in Lörrach, Germany, since 1901. Since 2012 it has been owned by US-based company Mondelez International, when it demerged from its predecessor Kraft Foods Inc., which had taken over the brand in 1990. It is sold in bars and a number of novelty shapes for Easter and Christm\n[…]\nCarl Russ-Suchard, Philippe Suchard's son-in-law, invented the Milka brand in 1901. The first \"Milka\" chocolate was packaged in the distinctive lilac-colored packaging. Their products were introduced in Austria in the 1910s in order to spread popularity, and by 1913 the company was producing 18 times more chocolate than they did when at the original plant in 1880. By the 1920s Milka had introduced limited edition themed chocolates.\n[…]\nThemes were related around holidays such as Christmas and Easter and had chocolate cast into the shape of Santa Claus, Christmas ornaments, Easter bunnies and various sizes of Easter eggs. By the 1960s the Milka script logo and its lilac packaging was trademarked, quickly becoming Germany’s number one chocolate. Over the next few decades, Milka chocolate enlarged in bigger portions and improved their selection of chocolate products.\n[…]\nIn 2016, they further expanded their market into China. Also in that year, original manufacturer Suchard was among a number of brands sold off by Mondelēz to form Carambar & Co; Mondelēz retained ownership of Milka.\n[…]\nMilka is sold in a number of packages and flavors, according to where it is purchased:\n[…]\nMilka Toffee – Milk-chocolate-covered toffee filled with caramel\n[…]\nMilka Toffee Hazelnut\n[…]\nPhiladelphia Milka Cheese\n[…]\nPratesi, Carlo Alberto (July 1, 2002). \"The Milka case. Trying to become the leader of the chocolate bar market – 1999\". British Food Journal. 104 (6): 435–444. doi:10.1108/00070700210795615."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toblerone",
        "situacao": "ok",
        "texto": "Toblerone (  TOH-blə-rohn, German: [tobləˈʁoːnə], Swiss Standard German: [toblɛˈroːnɛ]) is a chocolate brand owned by Mondelez International (originally Kraft Foods). It was produced in Bern, Switzerland, except for some produced before 1970 in England and Scotland, until 2022, when Mondelez began producing some of it in Bratislava, Slovakia.\n[…]\nThe Tobler company was independent for many years. In 1970, it merged with Suchard, the makers of Milka, to become Interfood. After the Tobler & Suchard merger it was decided to create a new and single source for marketing & exporting the various products manufactured by both companies worldwide, Multifood. Max E. Baumann, the son of Emil Baumann, was made director of this new division. Tobler & Suchard companies merged with the Jacobs coffee company in 1982 to create Jacobs Tobler & Suchard.\n[…]\nMilk chocolate with a white chocolate centre (blue triangular box)\n[…]\nBy 1920, the Toblerone recipe already faced competition from other manufacturers, for instance from another Swiss manufacturer, Cailler, who launched the Chocmel tablet that year. Another comparable chocolate made in Switzerland (in this case both for the ingredients and shape) is Mahony, produced by Frey.\n[…]\nThe interior of the Tobler factory in Switzerland was the location where the title sequence of Willy Wonka & the Chocolate Factory (1971) was filmed. However, the majority of the film was produced in West Germany.\n[…]\nIt was something I associated with being a child, and that exclusivity of only getting it at the airport. Purchasing a Toblerone was very special for me. My friends’ families would go on vacation and they brought back this chic, European, long triangle-shaped chocolate. I never saw [Toblerones] at a grocery store. I thought you could only get it at the airport or when you were traveling and part of the jet set."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kit_Kat",
        "situacao": "ok",
        "texto": "KitKat is a British chocolate bar created by Rowntree's of York, England. It is produced globally by Nestlé (which acquired Rowntree's in 1988), except in the United States, where it is made under licence by the Hershey Company (an agreement Rowntree's first made with Hershey in 1970).\n[…]\nKit Kat became the official chocolate bars of Formula One, with the largest global sponsorship beginning at F1's 75th anniversary season in 2025.\n[…]\nMilk chocolate (66%) (sugar, cocoa butter, cocoa mass, dried whole milk, cocoa mass, lactose and proteins from whey, whey powder, emulsifier (sunflower lecithin), butterfat, flavouring), wheat flour, sugar, vegetable fat, cocoa mass, yeast, raising agent (sodium bicarbonate), salt, emulsifier (soya lecithin), flavourings.\n[…]\nHershey's Kit Kat Crisp Wafers in Chocolate contain sugar, wheat flour, cocoa butter, nonfat milk, chocolate, refined palm kernel oil, lactose (milk), milk fat, contains 2% or less of: soy lecithin, PGPR (emulsifier), yeast, artificial flavour, salt and sodium bicarbonate.\n[…]\nMilk chocolate (sugar, milk ingredients, cocoa butter, cocoa mass, whey powder, lactose, soya lecithin, polyglycerol polyricinoleate, natural flavour), wheat flour, sugar, modified palm oil, cocoa, sodium bicarbonate, soya lecithin, yeast, natural flavour.\n[…]\nDark chocolate: cocoa mass, sugar, wheat flour, palm kernel, palm, coconut and vegetable oils, modified milk ingredients, cocoa butter, sunflower and soy lecithins, yeast, sodium bicarbonate, calcium sulphate, salt, protease, xylanase, natural flavours.\n[…]\nIn Japan, Kit Kats are produced at Nestlé-owned factories in Himeji and Kasumigaura. The milk chocolate used for Kit Kats is made from whole-milk powder and Nestlé buys most of its cacao beans from West Africa."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milka",
        "situacao": "ok",
        "texto": "Milka é uma marca de confeitaria de chocolate originada na Suíça em 1901 e fabricada internacionalmente pela empresa de confeitaria norte-americana Mondelēz International (anteriormente conhecida como Kraft Foods) desde 1990. Por mais de 100 anos, a Milka foi produzida principalmente em Lörrach, Alemanha, produzindo cerca de 140 mil toneladas de chocolate em 2012. O chocolate é vendido em barras e\n[…]\nA Milka também produz cookies e biscoitos com cobertura de chocolate. O nome da marca Milka é derivado de uma pasta dos dois ingredientes principais do produto: \"MILch (leite) e KAkao (cacau ou chocolate).\"\n[…]\nMesmo assim diversas barras do chocolate ainda podem ser encontradas em algumas lojas espalhadas pelo país, importadas da Alemanha, da Áustria e da Polônia.\n[…]\n«Página oficial da Milka» (em inglês)\n[…]\n«Página oficial da Milka Alemanha» (em alemão)\n[…]\n«Milka Ski Sponsoring» (em alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Microsoft",
      "descricao": "Empresa americana de software fundada por Bill Gates e Paul Allen em 1975."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre Apple, Microsoft, Amazon e Google, qual empresa foi fundada primeiro?",
    "resposta": "Microsoft",
    "fonte": [
      "https://en.wikipedia.org/wiki/Microsoft",
      "https://en.wikipedia.org/wiki/Apple_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation is an American multinational technology conglomerate headquartered in Redmond, Washington. The company became influential in the rise of personal computers through software like Windows and has since expanded into areas such as Internet services, cloud computing, artificial intelligence and video gaming among others.\n[…]\nAs the smartphone industry boomed in the late 2000s, Microsoft had struggled to keep up with its rivals in providing a modern smartphone operating system, falling behind Apple and Google-sponsored Android in the United States. As a result, in 2010 Microsoft revamped its aging flagship mobile operating system, Windows Mobile, replacing it with the new Windows Phone OS that was released in October that year.\n[…]\nIn November 2014, Microsoft overtook ExxonMobil to become the second most-valuable company by market capitalization, behind only Apple Inc. Its total market value was over $410B—with the stock price hitting $50.04 a share, the highest since early 2000. In 2015, Reuters reported that Microsoft had earnings abroad of $76.4 billion which were untaxed by the Internal Revenue Service. Under U.S. law, corporations do not pay U.S.\n[…]\nIn 2022 Microsoft shared a $9 billion contract from the United States Department of Defense for cloud computing with Amazon, Google, and Oracle.\n[…]\nPhil Radford of Greenpeace said, \"We are concerned that this new explosion in electricity use could lock us into old, polluting energy sources instead of the clean energy available today\", and called on \"Amazon, Microsoft and other leaders of the information-technology industry must embrace clean energy to power their cloud-based data centers\". In 2013, Microsoft agreed to buy power generated by a Texas wind project to power one of its data centers.\n[…]\nMicrosoft and open source\n[…]\nBusiness data for Microsoft Corporation:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Apple_Inc.",
        "situacao": "ok",
        "texto": "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, in Silicon Valley, and known for consumer electronics, software and online services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. Its current name was adopted in 20\n[…]\nApple introduced the iPad on January 27, 2010. It ran the same touch-based operating system as the iPhone and supported existing iPhone applications. Released in the United States on April 3, 2010, the iPad sold more than 300,000 units on its first day and more than 500,000 during its first week. In May 2010, Apple's market capitalization exceeded Microsoft's for the first time since 1989.\n[…]\nOn October 5, 2011, Steve Jobs died. That same month, Apple released the iPhone 4s, which introduced Siri, an intelligent software assistant built into iOS. On August 20, 2012, Apple's rising stock price increased the company's market capitalization to a then-record $624 billion. This beat the non-inflation-adjusted record for market capitalization previously set by Microsoft in 1999.\n[…]\nApple has been a participant in various legal proceedings and claims since it began operation. In particular, Apple is known for and promotes itself as actively and aggressively enforcing its intellectual property interests. Some litigation examples include Apple v. Samsung, Apple v. Microsoft, Motorola Mobility v. Apple Inc., and Apple Corps v. Apple Computer. Apple has also had to defend itself against charges on numerous occasions of violating intellectual property rights.\n[…]\nOutline of Apple Inc.\n[…]\nBusiness data for Apple Inc.:\n[…]\nApple Inc. companies grouped at OpenCorporates\n[…]\nApple Inc. on OpenSecrets, a website that tracks and publishes data on campaign finance and lobbying\n[…]\nApple Inc. at Encyclopædia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation (ou simplesmente Microsoft)(NASDAQ: MSFT) é uma empresa transnacional de tecnologia dos Estados Unidos com sede em Redmond, Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais. Entre seus produtos de software mais conhecidos estão as linhas de sistemas operacionais Windows e a rede social\n[…]\nEm junho de 2012, a Microsoft entrou pela primeira vez no mercado de produção de computadores pessoais, com o lançamento do Surface, uma linha de computadores e tablets.\n[…]\nA Microsoft foi fundada em 1975 por Bill Gates e Paul Allen. O primeiro produto desenvolvido pela empresa foi uma versão do interpretador BASIC, para o computador Altair 8800 da MITS. Em 1976 é lançado o Microsoft FORTRAN, para computadores baseados em CP/M.\n[…]\nTradicionalmente, o movimento de software livre abriga os maiores críticos dos produtos Microsoft, em especial o Windows, considerado por muitos um produto instável e inseguro, e o crescimento de soluções livres como o sistema operacional GNU/Linux, que cresceu muito em número de usuários, o navegador Firefox, o servidor Apache e o conjunto de programas de escritório OpenOffice.org, sendo as maiores ameaças ao futuro dos negócios de empresa, juntando a Google e a Apple Inc., que têm crescido muito nos últimos anos.[carece de fontes]?\n[…]\nEm 2007, é lançado o Office 2007 com nova interface, maior produtividade e segurança. Em 2008, a Microsoft realizou uma proposta para comprar a Yahoo! por 44,6 bilhões de dólares como parte da sua estratégia para tentar superar o Google, porém a Yahoo! rejeitou oficialmente a oferta, dizendo que esta subestima o valor da empresa no mercado.\n[…]\nEm 2007, é eleita a melhor subsidiária da Microsoft Internacional e volta a ser eleita melhor empresa para se trabalhar em Portugal.\n[…]\nMicrosoft Most Valuable Professional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sprite",
      "descricao": "Refrigerante incolor de limão da Coca-Cola, lançado nos Estados Unidos em 1961."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre Coca-Cola, Pepsi, Fanta e Sprite, qual refrigerante foi lançado por último?",
    "resposta": "Sprite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sprite_(drink)",
      "https://en.wikipedia.org/wiki/Fanta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sprite_(drink)",
        "situacao": "ok",
        "texto": "Sprite is a clear, lemon-lime flavored soft drink created by the Coca-Cola Company. Sprite comes in additional flavors, including cranberry, cherry, grape, orange, tropical, ginger, pineapple, and vanilla. Ice, peach, Berryclear remix, Citrus and mint, and newer versions of the drinks are artificially sweetened. Sprite was created primarily to compete against PepsiCo's Starry and Keurig Dr Pepper'\n[…]\nIn 2022, Australia released lemon flavoured variants Sprite Lemon+ and Sprite Lemon+ Zero Sugar.\n[…]\nIn 2024, Sprite-mint was made available in some select Asian markets. In 2026 the Coca-Cola company started a new campaign called \"It's That Fresh\" where they brought back the \"Lymon\" as a nostalgia push in hopes to boost sales.\n[…]\nIn the Netherlands in March 2017, Coca-Cola announced that Sprite would be relaunched exclusively as a sugar-free drink, with the standard variety being discontinued and Sprite Zero being renamed as simply Sprite. This change was expanded to Ireland in 2018.\n[…]\nIn March 2023, Coca-Cola announced another further formula change for Sprite and Sprite Zero Sugar in the United Kingdom, produced to differentiate the two varieties. The new formula has slightly increased sugar content but still contains aspartame and acesulfame K. Some territories including France, Poland and Germany use a similar lower-sugar formula but do not utilize any artificial sweeteners.\n[…]\nWanna Sprite Cranberry?\n[…]\nThe commercial gained popularity on various sites for its meme potential, in particular the \"Wanna Sprite Cranberry\" line delivery and LeBron as he is portrayed in the ad were commonly associated with meme culture around the holidays as the commercial aired and re-aired yearly. The commercial was even edited by The Coca-Cola Company to feature Winter Spice Cranberry, the replacement for Sprite Cranberry, once Sprite Cranberry was phased out."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta () is a German-founded, American-owned brand of carbonated, fruit-flavored soft drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith. Today, the brand features over 200 flavors worldwide.\n[…]\nFollowing the launch of several drinks by Pepsi-Cola in the 1950s, Società Napoletana Imbottigliamento Bevande Gassate (SNIBEG) relaunched Fanta in 1955 with a different formulation. In 1960 Coca-Cola bought the brand, distributing it worldwide. The drink was heavily marketed in Europe, Asia, Africa, and South America, although it did not become widely available in the United States until the 1960s because the company feared it would undermine the strong market position of their flagship cola.\n[…]\nIn early February 2024, The Coca-Cola Company announced that Lilt (a pineapple and grapefruit soft drink sold in countries such as the UK and Ireland) would be rebranded as Fanta Pineapple and Grapefruit flavour on 14 February 2023.\n[…]\nIn February 2015, a 75th-anniversary version of Fanta was released in Germany. Packaged in glass bottles evoking the original design and with an authentic original wartime flavor including 30% whey and pomace, it is described on the packaging as \"less sweet\" and a German original. An associated television ad referenced the history of the drink and said the Coca-Cola company wanted to bring back \"the feeling of the Good Old Times\" which was interpreted by many to mean Nazi rule.\n[…]\nFanta cake\n[…]\n\"Why Coca-Cola Invented Fanta In Nazi Germany\". Business Insider. November 8, 2019. Archived from the original on December 21, 2021.\n[…]\n\"Coca Cola and the war\". Digger History.\n[…]\n\"How Fanta was invented in Nazi Germany to quench people's thirst for Coke\" Julius Haswell"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sprite",
        "situacao": "ok",
        "texto": "Sprite é a marca de um refrigerante com sabor de Lima-Limão produzido pela The Coca-Cola Company e que está presente em mais de 190 países.\n[…]\nNa década de 1940, o refrigerante Coca-Cola utilizava como “garoto-propaganda” um personagem chamado “Sprite” (Sprite Boy). A marca Sprite já fazia parte do acervo de nomes registrados da “The Coca-Cola Company”.\n[…]\n1955: a marca Sprite foi registrada como parte do catálogo de marcas da “The Coca-Cola Company”.\n[…]\n1961: o refrigerante Sprite sabor lima-limão é lançado nos Estados Unidos.\n[…]\n2010: é lançada a primeira campanha global do refrigerante Sprite envolvendo os mercados da Europa, EUA, África e Ásia.\n[…]\n1984: é lançado no Brasil o refrigerante Sprite sabor Limão. No mesmo ano a Fanta com sabor de Limão foi retirada do mercado.\n[…]\n1992: é lançado o Sprite Lima-Limão.\n[…]\n2009: é Lançado o Sprite 2.Zero, com fórmula sem adição de açúcar desenvolvida no Rio de Janeiro e comercializado somente no Brasil em substituição à Sprite Zero. No dia 18 de maio foi relançada a garrafa na cor azul na cidade de Porto Alegre.\n[…]\n2010: foram lançadas nacionalmente as novas embalagens com a tecnologia de Realidade Aumentada, o refrigerante Sprite tornou-se o primeiro refrigerante do Brasil a adotar tal tecnologia em latas e garrafas.\n[…]\n2009: o refrigerante Sprite começa a ser produzido em Angola.\n[…]\nSprite Ice ─ Refrigerante sabor lima-limão com menta\n[…]\nSprite Green ─ Refrigerante de baixa caloria adoçado com adoçante Truvia\n[…]\nSprite on Fire ─\n[…]\nO refrigerante Sprite na sua versão normal, não possui na sua composição quantidades significativas de proteínas, gorduras totais, gorduras saturadas, gorduras trans e fibras alimentares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Senhor Cabeça de Batata",
      "descricao": "Brinquedo americano de batata com peças de rosto encaixáveis, lançado em 1952 pela Hasbro."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes brinquedos americanos foi lançado primeiro?",
    "resposta": "Senhor Cabeça de Batata",
    "distratores": [
      "Barbie",
      "Comandos em Ação",
      "Hot Wheels"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mr._Potato_Head",
      "https://en.wikipedia.org/wiki/G.I._Joe",
      "https://en.wikipedia.org/wiki/Hot_Wheels"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mr._Potato_Head",
        "situacao": "ok",
        "texto": "Mr. Potato Head is a toy produced by Hasbro since 1952. It consists of a plastic model of a potato \"head\" to which a variety of plastic parts can attach; typically ears, eyes, shoes, hat, nose, mustache, pipe (1952–1987), pants, glasses, and mouth.\n[…]\nIn 1985, Mr. Potato Head received four postal votes in the run for mayor of Boise, Idaho in the \"most votes for Mr. Potato Head in a political campaign\" as verified by Guinness World Records. In November 1987, Mr. Potato Head became \"Spokespud\" for the annual Great American Smokeout and surrendered his pipe to Surgeon General C. Everett Koop in Washington, D.C. In 1989, Hasbro replaced the attached bendable arms with the removable plastic arms. In the 1990s, the League of Women Voters used Mr.\n[…]\nPotato Head in before his death.\n[…]\nPotato Head first appears in the prologue of the movie. Later during the main events of the film, he and his wife join Bonnie and her parents on their RV road trip. At the end of the film, they say goodbye to Woody who stays with Bo Peep (Annie Potts) to help find toys for owners.\n[…]\nMr. Potato Head is seen dancing in a Pixar Popcorn short called \"To Fitness and Beyond\".\n[…]\nMr. Potato Head appeared in Toy Story 5 (2026), now voiced by Jeff Bergman, who replaced Rickles following his death.\n[…]\nOn November 13, 1995, a computer game called Mr. Potato Head Saves Veggie Valley was released by Hasbro Interactive.\n[…]\nIn 1997, Hasbro Interactive released another game called Mr. Potato Head's Activity Pack.\n[…]\nMr. Potato Head has also appeared as the host in all installments of the popular video game series Hasbro Family Game Night. He also appeared in several Toy Story-based video games along with Toy Story Activity Center.\n[…]\nPotato gun"
      },
      {
        "url": "https://en.wikipedia.org/wiki/G.I._Joe",
        "situacao": "ok",
        "texto": "G.I. Joe is an American media franchise and a line of action figures owned and produced by the toy company Hasbro. The initial product offering represented four of the branches of the U.S. armed forces with the Action Soldier (U.S. Army), Action Sailor (U.S. Navy), Action Pilot (U.S. Air Force), Action Marine (U.S. Marine Corps), Action lifeline (U.S. Coast Guard) and later on, the Action Nurse. \"\n[…]\nAdventure Team boxed figures were subsequently released exclusively via Walmart. The available figures were the Land, Sea, Air Adventurers, Man of Action and the African American Adventurer. All figures except the African American used the (flocked) head sculpt of the 40th Anniversary series release.\n[…]\nThe G.I. Joe brand has made promotional action figures based on real-life persons, both military and civilian, that the company deems Real American Heroes.\n[…]\nThe main series released its final issue #155 in December 1994, coinciding with the end of the Real American Hero toy line.\n[…]\nThis was Hasbro's second commissioned feature using computer graphics to coincide with the line of the same name. By 2005, Hasbro had entered into an exclusive agreement with Paramount Pictures to have them distribute any future features based on the \"Real American Heroes\" line, but by the time a third movie was to be created, this time called, Attack of the BATS, Hasbro's sales on the \"Real American Heroes\" line had once again slumped, and the project was scrapped.\n[…]\nThere were several video game adaptations of G.I. Joe, including G.I. Joe: Cobra Strike by Parker Brothers for the Atari 2600 and Intellivision (1983), G.I. Joe: A Real American Hero by Epyx for the Apple II and the Commodore 64 (1985), Action Force by Virgin Games for the Commodore 64 (1987), a G.I. Joe video game by Taxan for the Nintendo Entertainment System (1991), a G.I. Joe arcade game by Konami for arcades (1992), and G.I."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hot_Wheels",
        "situacao": "ok",
        "texto": "Hot Wheels is an American media franchise and brand of scale model cars invented by Elliot Handler and introduced by his company Mattel on May 18, 1968. It was the primary competitor of Matchbox until Mattel bought Matchbox owner Tyco Toys in 1997.\n[…]\nIn 1970, Hot Wheels sponsored Trans-Am Series driver Dan Gurney and his All American Racers car. In 1992, Hot Wheels sponsored the Trans-Am car of Jack Baldwin as he went on to win that year's championship. Hot Wheels signed a sponsorship deal in 1997 with NASCAR driver Kyle Petty and the No. 44 PE2 Motorsports car and thus began making replicas of NASCAR stock cars. Three years later, Hot Wheels joined the Craftsman Truck Series team of Carlos Contreras and the No. 12 truck.\n[…]\nA coin-operated pinball machine based on Hot Wheels cars and the Hot Wheels City YouTube series was released by American Pinball in June 2020."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mr._Potato_Head",
        "situacao": "ok",
        "texto": "Mr. Potato Head é um brinquedo originário dos Estados Unidos composto de um modelo de uma batata de plástico que pode ser decorada, com o acréscimo de peças penhoráveis, como olhos e ouvidos, formando uma face. O brinquedo foi inventando e distribuído por George Lerner em 1949, e foi manufaturado e lançado no mercado pela primeira vez em 1952 através da empresa Hasbro.\n[…]\nO boneco também é conhecido por ser um personagem na franquia de Toy Story da Walt Disney, onde é conhecido pelo nome Senhor Cabeça de Batata na dublagem brasileira.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Avon",
      "descricao": "Empresa de cosméticos de venda direta fundada em Nova York em 1886 por David McConnell."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destas empresas de cosméticos foi fundada primeiro?",
    "resposta": "Avon",
    "distratores": [
      "L'Oréal",
      "Natura",
      "O Boticário"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avon_Products",
      "https://en.wikipedia.org/wiki/L%27Or%C3%A9al"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Avon Products, Inc., doing business as Avon ( AY-von), is an Anglo-American multinational company selling cosmetics, skin care, perfume, and personal care products. It is a multi-level marketing company based in London. In 2020, Avon had annual sales of $9.1 billion worldwide.\n[…]\nAvon Products founder, David H. McConnell, initially sold books as a door-to-door salesman to New York homes. In September 1886, he decided to sell perfumes rather than books. He started the new business in a small office at 126 Chambers Street, Manhattan, New York. McConnell changed the company name in 1892.\n[…]\nIn 1928, the company began to selling Avon products.\n[…]\nIn 1939, the California Perfume Company changed its name to Avon Products, Inc.\n[…]\nAvon Products purchased Silpada, a direct seller of silver jewelry, in 2010 for $650 million. In May 2012, perfume company Coty offered $24.75 a share for Avon, which was nearly 20 percent above Avon's stock price at the time.\n[…]\nAvon Products vowed in 1989 that as a company located in the United States, it would no longer participate in animal testing. Avon has since claimed to be working globally to introduce safer methods of testing cosmetics that do not require animals. These methods include in vitro testing, computer simulations, and testing cosmetics on human volunteers.\n[…]\nIn 2019, Avon Products ended all regulatory-required animal testing, making it the first global beauty company selling in China to stop all animal testing of ingredients and products across all its brands by developing new ways to deliver products that do not require animal testing, such as reformulating products. PETA has since announced that it has added Avon Products Inc. to their list of companies \"Working for Regulatory Change\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/L%27Or%C3%A9al",
        "situacao": "ok",
        "texto": "L'Oréal S.A. (French: [lɔʁe.al]) is a French multinational personal care corporation registered in Paris and headquartered in Clichy, Hauts-de-Seine. As of 2024, it is the world's largest cosmetics company. As of the early 2020s, L'Oréal owned 36 brands and 497 patents.\n[…]\nIn Kosovo, during the growth years of the mail-order business, L'Oréal and 3 Suisses founded Le Club des Créateurs de Beauté for mail-order sales of cosmetic products, with brands including Agnès b., Commence and Professeur Christine Poelman among others. In March 2008, L'Oréal acquired three Suisse's stake, taking sole control of the company. In November 2013, L'Oréal announced that Le Club des Créateurs de Beauté would cease activity in the first half of 2014.\n[…]\nL'Oréal acknowledged that the photos had been airbrushed but argued that the two cosmetic products could actually produce the results depicted in the ads and that the results of the products had been scientifically proven.\n[…]\nThe BBC's findings sparked global concern over labor practices in the perfume industry, particularly regarding the exploitation of children in rural areas of Egypt. The country's jasmine flowers are a key ingredient in high-end perfumes produced by companies like L'Oréal, leading to questions about the ethical sourcing of raw materials in the beauty and fragrance sector.\n[…]\nL'Oréal has been in a three-year trademark dispute with a small British hair-removal aftercare company called nkd on the grounds that its name might cause \"customer confusion\" with the L'Oréal \"Naked\" line of eyeshadow palettes and other make-up products. The nkd name was created in 2009, one year before the launch of the \"Naked\" line in the UK."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Fundada pelo empresário David McConnell, a Avon é uma empresa de cosméticos que historicamente fundamentou seu modelo de negócios no sistema de venda direta.\n[…]\nA empresa nasceu em 1886, com o nome de Califórnia Perfume Company e apenas em 1939 passou a se chamar Avon. No Brasil, a marca aterrissou e começou seus processos de consolidação e vendas no ano de 1958. A sede principal da Avon está localizada em Nova York, mas a marca também conta com 18 fábricas, distribuídas em 15 países diferentes.\n[…]\nEm janeiro de 2020, foi finalizada a compra da operação da Avon pela companhia brasileira Natura &Co. No mesmo ano, foi eleita a Melhor Operação Internacional de M&A na América Latina pela revista LatinFinance.\n[…]\nCom foco em alinhar o desenvolvimento de itens às preferências do mercado nacional, a Avon transferiu o seu centro global de inovação dos Estados Unidos para o Brasil.\n[…]\nNa área de responsabilidade social, o Instituto Avon atua há mais de 20 anos no fomento à conscientização sobre o câncer de mama e no combate à violência contra mulheres e meninas no Brasil.\n[…]\nDurante o ciclo de 2020 a 2021, em resposta ao aumento de casos de violência doméstica durante a pandemia de Covid-19, o Instituto Avon estabeleceu uma parceria com o Grupo Accor e o Ministério da Saúde, com foco no enfrentamento da violência doméstica durante esse período.\n[…]\nNo setor profissional, o Prêmio Avon de Maquiagem, criado em 1995, atua no reconhecimento de maquiadores em produções audiovisuais e de moda.\n[…]\nSite oficial de Avon Angola\n[…]\nSite oficial de Avon Brasil\n[…]\nSite oficial de Avon Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada por Ferruccio Lamborghini em 1963."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de desafiar a Ferrari com seus carros esportivos, o italiano Ferruccio Lamborghini enriqueceu fabricando que tipo de veículo?",
    "resposta": "Tratores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
      "https://en.wikipedia.org/wiki/Lamborghini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Lamborghini  ( LAM-bər-GHEE-nee, Italian: [ferˈruttʃo lamborˈɡiːni]; 28 April 1916 – 20 February 1993) was an Italian automobile designer and industrialist who created Lamborghini Trattori in 1948 and Automobili Lamborghini in 1964, a maker of high-end sports cars in Sant'Agata Bolognese.\n[…]\nFerruccio Lamborghini was born on 28 April 1916 to viticulturists Antonio and Evelina Lamborghini in house number 22 in Renazzo di Cento, in the Province of Ferrara, in the Emilia-Romagna region of Northern Italy. According to his baptismal certificate, Ferruccio was baptised as a Roman Catholic four days later, on 2 May.\n[…]\nAfter producing two cars with alphanumeric designations, Lamborghini once again turned to the bull breeder for inspiration. Don Eduardo was filled with pride when he learned that Ferruccio had named a car for his family and their line of bulls; the fourth Miura to be produced was unveiled to him at his ranch in Seville.\n[…]\nAll of Ferruccio Lamborghini's companies continue to operate today in one form or another. His son, Tonino, designs a collection of clothing and accessories under the Tonino Lamborghini brand, as well as designing the Town Life, an electric microcar which was revealed at the Bologna Motor Show in 1999. Ferruccio's daughter, Patrizia Lamborghini, runs the Lamborghini winery on his Umbria estate.\n[…]\nIn 1995 son Tonino opened a museum that honors Lamborghini's legacy, the Centro Studi e Ricerche Ferruccio Lamborghini in Dosso (Ferrara), which was moved to Argelato (Bologna) in 2014 with the new name Museo Lamborghini.\n[…]\nCowell, Alan (22 February 1993). \"Ferruccio Lamborghini, 76, Dies; A Top Maker of Stylish Sports Cars\". New York Times. New York City, New York. ISSN 0362-4331. Archived from the original on 20 April 2013. Retrieved 11 August 2012."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nFerruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978.\n[…]\nManufacturing magnate Italian Ferruccio Lamborghini founded the company in 1963 with the objective of producing a refined grand touring car to compete with offerings from established marques such as Ferrari. The company's first models, such as the 350 GT, were released in the mid-1960s. Lamborghini was noted for the 1966 Miura sports coupé, which used a rear mid-engine, rear-wheel drive layout.\n[…]\nIn contrast to his rival Enzo Ferrari, Ferruccio Lamborghini had decided early on that there would be no factory-supported racing of Lamborghinis, viewing motorsport as too expensive and too draining on company resources. This was unusual for the time, as many sports car manufacturers sought to demonstrate speed, reliability, and technical superiority through motorsport participation.\n[…]\nFerrucio Lamborghini (1963–1972)\n[…]\nAnnual Lamborghini new car sales\n[…]\nWood, Jonathan (23 February 1993). \"Obituary: Ferruccio Lamborghini\". The Independent. London: independent.co.uk. ISSN 0951-9467. Archived from the original on 7 November 2012. Retrieved 4 August 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Elio Arturo Lamborghini (Renazzo di Cento, 28 de abril de 1916 — Perugia, 20 de fevereiro de 1993) foi um industrial italiano, conhecido principalmente por ter fundado uma marca de automóveis de grande luxo que carrega o seu nome. Filho de fazendeiros, fundou em 1948 a Lamborghini Trattori, que rapidamente se tornou uma importante fabricante de equipamentos agrícolas em meio da reforma e\n[…]\nLamborghini era dono de uma fábrica de tratores que leva seu sobrenome, diz-se que ele entrou no ramo de carros de alta performance após divergir das opiniões de Enzo Ferrari, nascendo assim uma das maiores marcas do mundo do automóvel, a marca Lamborghini.\n[…]\nUm problema mecânico surgiu na Ferrari de Ferruccio, relacionado à um mau funcionamento da sua embreagem, e Ferrucio Lamborghini teve a oportunidade de reclamar pessoalmente ao engenheiro Enzo Ferrari na sua fábrica de Maranello. Lamborghini obteve como resposta: \"Você não sabe nada sobre carros, o melhor que pode fazer é deslocar-se em seus tratores…\".\n[…]\nE, depois da avaria técnica da Ferrari ter sido solucionada pelo próprio Ferruccio através da adaptação de uma embreagem Borg & Beck que usava na fabricação de seus tratores, o construtor de tratores italiano resolveu transformar mais um dos seus sonhos em realidade.\n[…]\nEm 1970, desmotivado com o atrás sucedido, numa altura onde na Itália as greves de trabalho e as conflitualidades sindicais eram uma constante, Ferruccio Lamborghini resolve descansar e viver dos muitos rendimentos de que já usufruía, vendendo seu projeto de automóveis a um grupo suíço, e os tratores, ao fabricante da Same. A marca de automóveis passou depois por diversos proprietários, incluindo a Chrysler, pertencendo atualmente ao grupo Volkswagen através da sua subsidiária Audi.\n[…]\nOs tratores Lamborghini foram comprados nesse ano por Francesco Cassani.\n[…]\n«Lamborghini SpA»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Nintendo",
      "descricao": "Empresa japonesa de videogames fundada em Quioto em 1889 por Fusajiro Yamauchi."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No fim do século dezenove, em Quioto, muito antes dos videogames, que produto a Nintendo fabricava?",
    "resposta": "Cartas de baralho hanafuda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nintendo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nintendo",
        "situacao": "ok",
        "texto": "Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto. It develops, publishes, and manufactures both video games and video game consoles.\n[…]\nNintendo was founded as Nintendo Koppai on 23 September 1889 by craftsman Fusajiro Yamauchi in Shimogyō-ku, Kyoto, Japan, as an unincorporated establishment, to produce and distribute Japanese playing cards, or karuta (かるた; from Portuguese carta, 'card'), most notably hanafuda (花札, 'flower cards').\n[…]\nThe name \"Nintendo\" is commonly assumed to mean \"leave luck to heaven\", but the assumption lacks historical validation; it has also been suggested to mean \"the temple of free hanafuda\", but even descendants of Yamauchi do not know the true intended meaning of the name. Hanafuda cards had become popular after Japan banned most forms of gambling in 1882, though tolerated hanafuda. Sales of hanafuda cards were popular with the yakuza-run gaming parlors in Kyoto.\n[…]\nNintendo reached an agreement with Embracer Group in May 2024 to acquire 100% of the shares in Shiver Entertainment, a company that has specialized in porting triple-A games like Hogwarts Legacy and Mortal Kombat 1 to the Switch, making it a wholly owned subsidiary of Nintendo, subject to closing conditions. In October 2024, the company opened the Nintendo Museum on the site of its former Uji Ogura plant, where it had manufactured playing and hanafuda cards.\n[…]\nNintendo Systems\n[…]\nSloan, Daniel (2011). Playing to Wiin: Nintendo and the Video Game Industry's Greatest Comeback. Wiley. ISBN 978-0-470-82512-9. OCLC 707935885.\n[…]\n\"Nintendo: Company History\". Nintendo.com. Nintendo of America. 1996. Archived from the original on 5 February 1998."
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
    "indice": 22,
    "ancora": {
      "nome": "Kleenex",
      "descricao": "Marca americana de lenços de papel da Kimberly-Clark, lançada em 1924."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Quando chegaram às lojas, em 1924, os lenços de papel Kleenex eram anunciados para qual uso?",
    "resposta": "Remover creme e maquiagem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kleenex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kleenex",
        "situacao": "ok",
        "texto": "Kleenex is a brand name primarily known for its line of facial tissues. Often used informally as a genericized trademark for facial tissue, Kleenex is a registered trademark of Kimberly-Clark applied to products made in 78 countries. The brand also includes other paper products, such as napkins and toilet paper.\n[…]\nKleenex began during the First World War when the Cellucotton Company developed a crepe paper gas mask filter. In the 1920s, the product was modified into the menstrual pad Kotex. A further modification of the original crepe paper made it thinner and softer, and the resultant 1924 product was called \"Kleenex\" and marketed as a cold cream remover.\n[…]\nThe original Kleenex trademark application at the United States Patent and Trademark Office (USPTO) was filed in the class of Medical, Beauty, & Agricultural Services by Cellucotton Products Company of Neenah, Wisconsin, on July 12, 1924. The description provided to the USPTO was \"absorbent pads or sheets for removing cold cream\".\n[…]\nIn the application, Cellucotton claimed that it had used the drawing and stylized word mark in commerce since June 12, 1924. The USPTO granted trademark registration on November 25, 1924. International Cellucotton Products Company officially assigned trademark interest and goodwill of the business to Kimberly-Clark Corporation on September 30, 1955. Kimberly-Clark Corporation of Neenah, Wisconsin, is the current registered owner of the Kleenex trademark.\n[…]\nNationwide marketing of Kleenex in the United States (as a means of removing cold cream rather than as a tissue for sneezes) was rolled out in the first week of September 1924 in Chicago with an ad for the Walgreen drug store chain on September 2 and with an offer on September 4 for a free sample in New York City.\n[…]\nKleenex History Timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kleenex",
        "situacao": "ok",
        "texto": "Kleenex é uma marca registrada mundialmente conhecida no ramo de lenços de papel (como lenços, papeis higiênicos, fraldas etc.) que pertence à empresa estadunidense Kimberly-Clark Worldwide, Inc.. Produtos da marca, que foi introduzida em 12 de junho de 1924, são oferecidos em mais de 130 países.\n[…]\nLogo https://logosmarcas.net/wp-content/uploads/2020/09/Kleenex-Logo.png",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Louis Vuitton",
      "descricao": "Marca francesa de artigos de luxo fundada em Paris em 1854 pelo artesão Louis Vuitton."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1854, em Paris, o artesão Louis Vuitton abriu sua casa especializada em qual objeto de viagem?",
    "resposta": "Baús de viagem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Vuitton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Vuitton",
        "situacao": "ok",
        "texto": "Louis Vuitton Malletier SAS is a French luxury fashion house and company founded in 1854 by Louis Vuitton. The label's LV monogram appears on most of its products, ranging from luxury bags and leather goods to ready-to-wear, shoes, perfumes, watches, jewellery, accessories, sunglasses, and books. Louis Vuitton is one of the world's leading international fashion houses.\n[…]\nThe Louis Vuitton label was founded by Vuitton in 1854 on Rue Neuve des Capucines in Paris. Louis Vuitton had observed that the H. J. Cave Osilite trunk could be easily stacked. In 1858, Vuitton introduced his flat-topped trunks with Trianon canvas, making them lightweight and airtight. Before the introduction of Vuitton's trunks, rounded-top trunks were used, generally to promote water runoff, and thus could not be stacked.\n[…]\nThe Louis Vuitton brand and the LV monogram are among the world's most valuable brands.\n[…]\nOn 19 November 2007 Louis Vuitton, in further efforts to prevent counterfeiting, successfully sued Britney Spears for violating anti-counterfeiting laws. A part of the music video for the song \"Do Somethin'\" shows fingers tapping on the dashboard of a hot pink Hummer with what looks like Louis Vuitton's \"Cherry Blossom\" design bearing the LV logo. Britney Spears herself was not found liable, but a civil court in Paris ordered Sony BMG and MTV Online to stop showing the video.\n[…]\nSho Hirano of Japanese group Number i was appointed as brand ambassador for the Japanese side of the brand on 7 January 2025. On his role as ambassador, Hirano said:  \"Louis Vuitton has been a brand I've admired for years, and I'm thrilled to be involved in future projects. I hope to share the charm of this iconic Maison in my own way. Let's explore the world of Louis Vuitton together.\" Hirano was in Paris for the brand's Fall/Winter 2025 campaign. He returned for the Spring/Summer 2026 showcase."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Vuitton",
        "situacao": "ok",
        "texto": "A Louis Vuitton é uma empresa especializada na produção de bolsas e malas de viagens, feitas em couro e lona, bem como na sua comercialização. Produz e vende também vestuário, sapatos, relógios, joias, acessórios, óculos de sol e livros. Concorre com Versace, Gucci, Chanel, Prada, Armani, Dolce & Gabbana, Christian Dior, Calvin Klein, Yves Saint Laurent, Óscar de la Renta, Burberry e outras marcas\n[…]\nO fundador da marca, Louis Vuitton (Anchay, 4 de agosto de 1821 — Paris, 27 de fevereiro de 1892) foi um fabricante de malas e bolsas na segunda metade do século XIX, em Paris. Criou sua oficina em 1854, em Paris, onde produzia artesanalmente malas e bolsas. Seu trabalho foi reconhecido na Europa quando reinventou o formato das malas de viagem e criou um padrão de desenho diferente comparado ao que havia na época.\n[…]\nAtualmente trabalham 9.671 pessoas para a Louis Vuitton. Sua missão é fazer da viagem uma experiência pessoal e única. Os seus valores, que não mudaram desde o ano de sua criação, são: originalidade, espírito “avant-garde”, qualidade, “saber fazer” e paixão.\n[…]\nA primeira loja aberta pela Louis Vuitton foi em 1854 em Paris, França. Em 1885 foi aberta a segunda loja em Londres, sucedida por lojas em Nova York, Bombaim, Washington, Londres, Alexandria e Buenos Aires). Atualmente, são 435 lojas, e a presença da marca alcança 63 países.\n[…]\nA política de produto da Louis Vuitton, desde que foi constituída, tem sido especializar-se na “arte da viagem”. Os seus produtos devem atender às demandas decorrentes do ato de viajar, por isso as malas sempre foram o grande foco da empresa. A posição da marca em relação à viagem é tal que se criaram produtos sob encomenda para esse fim: a “mala-cama”, em 1879; a “mala-secretária”; a mala de sapatos; e os reboques de camping no início do século XX.\n[…]\nLVMH Moët Hennessy • Louis Vuitton",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Gillette",
      "descricao": "Marca americana de aparelhos de barbear fundada por King Camp Gillette no começo do século vinte."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No começo do século vinte, qual foi a grande novidade do aparelho de barbear lançado pelo americano King Gillette?",
    "resposta": "Lâminas descartáveis",
    "fonte": [
      "https://en.wikipedia.org/wiki/King_C._Gillette",
      "https://en.wikipedia.org/wiki/Gillette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_C._Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (January 5, 1855 – July 9, 1932) was an American businessman who invented a bestselling safety razor and was the founder of the Gillette razor company. Gillette's innovation was the thin, inexpensive, disposable blade of stamped steel. Gillette is often erroneously credited with inventing the so-called razor-and-blades business model, in which razors are sold cheaply to increase\n[…]\nThe Gillette paternal ancestors were French Huguenots who sought refuge in England in the late 16th century. One or two generations later, in 1630, Nathan Gillette sailed from England to the newly founded Massachusetts Bay Colony in North America. King Camp Gillette was born on January 5, 1855, in Fond du Lac, Wisconsin, and raised in Chicago, Illinois. His family survived the Great Chicago Fire of 1871.\n[…]\nGillette married Alanta \"Lantie\" Ella Gaines (1868–1951) in 1890. They had one child, King Gaines Gillette (1891–1955).\n[…]\nAfter the university moved to a purpose-built campus, the King Gillette ranch was collaboratively purchased for $35 million by the Mountains Recreation and Conservation Authority, National Park Service, Santa Monica Mountains Conservancy and California State Parks, who then made it available for public use. Those agencies are also funding an $8.4 million visitor center on the property.\n[…]\nOn June 30, 2007, the 588-acre (2.38 km2) King Gillette Ranch opened to the public as a park. The ranch is situated adjacent to Malibu Creek State Park in the Santa Monica Mountains, at 26800 West Mulholland Highway in Calabasas, California.\n[…]\nAdams, Russell B. Jr. (1978). King C. Gillette: The Man and His Wonderful Shaving Device. Little, Brown & Co. ISBN 0-316-00937-7.\n[…]\nDowling, Tim (2001). Inventor of the Disposable Culture: King Camp Gillette 1855–1932. Short Books. ISBN 0-571-20810-X.\n[…]\nKing Gillette Ranch Park\n[…]\nKing C. Gillette at Find a Grave"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gillette",
        "situacao": "ok",
        "texto": "Gillette is an American brand of safety razors and other personal care products including shaving supplies, owned by the multi-national corporation Procter & Gamble (P&G). Based in Boston, Massachusetts, United States, it was owned by The Gillette Company, a supplier of products under various brands until that company merged into P&G in 2005. The Gillette Company was founded by King C. Gillette in\n[…]\nThe success of the coated Super Blue blades marked the start of a period when chemistry became as important as metallurgy in Gillette's blade manufacturing. The Super Blue's coating was a result of teamwork between the Gillette's British and American scientists.\n[…]\nGood News was released under various names in Europe and was equally and sometimes even more successful than Bic's razor. Gillette quickly brought its razor to markets Bic hadn't yet reached, such as Latin America where the razor was known as Prestobarba.\n[…]\nIn Latin America, Gillette used a so-called cannibalization strategy by selling the razor in several market segments: along with the heavily advertised Prestobarba, the razor was also sold under different names – such as Permasharp II in Mexico and Probak II in Brazil – and sold for at least 10 to 15 percent less.\n[…]\nDuring late 1989 and early 1990, Gillette launched the new product Sensor with a $175 million marketing campaign in 19 countries in North America and Western Europe.\n[…]\nKing C. Gillette Beard Care Line came out in May 2020 named for the company's founder and offers beard care products including a Complete Men's Beard Kit, a double-sided safety razor, shave gel, beard and face wash, balm and oil.\n[…]\nAdams, Russell (1978). King C. Gillette: The Man and His Wonderful Shaving Device. Little, Brown & Co. ISBN 978-0-316-00937-9.\n[…]\nGillette, King Camp (February 1918). \"Origin of the Gillette Razor\". The Gillette Blade. Boston: Gillette Safety Razor Company."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/King_Camp_Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (Fond du Lac, 5 de janeiro 1855 — Los Angeles, 9 de julho de 1932) foi um inventor estadunidense, conhecido pela lâmina de barbear que leva o seu nome. Ele inventou uma versão mais vendida do aparelho de barbear. Vários modelos já existiam antes do projeto da Gillette. A inovação da Gillette foi a lâmina fina, barata e descartável de aço estampado.\n[…]\nComo as lâminas de barbear existentes, relativamente caras, tornavam-se cegas rapidamente e precisavam de ser afiadas continuamente, uma navalha cuja lâmina pudesse ser jogada fora ao ficar cega atenderia a uma necessidade real e provavelmente seria lucrativa.\n[…]\nA parte mais difícil do desenvolvimento foi projetar as lâminas, pois o aço fino e barato era difícil de trabalhar e afiar. Isso explica o atraso entre a ideia inicial e o lançamento do produto. Steven Porter, um maquinista que trabalhava com a Gillette, usou os desenhos da Gillette para criar a primeira navalha de barbear descartável que funcionou.\n[…]\nPara vender o produto, Gillette fundou a American Safety Razor Company em 28 de setembro de 1901 (mudando o nome da empresa para Gillette Safety Razor Company em julho de 1902). Gillette obteve um registro de marca (0 056 921) para seu retrato e assinatura na embalagem. A produção começou em 1903, quando ele vendeu um total de 51 máquinas de barbear e 168 lâminas.\n[…]\nAs vendas de navalhas atingiram 450 000 unidades e as vendas de lâminas ultrapassaram 70 milhões de unidades em 1915. Em 1917, quando os Estados Unidos entraram na Primeira Guerra Mundial, a empresa forneceu a todos os soldados americanos um jogo de navalha de campo, pago pelo governo. A Gillette vetou um plano para vender os direitos de patente na Europa, acreditando corretamente que a Europa acabaria por fornecer um mercado muito grande.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Crocs",
      "descricao": "Marca americana de calçados de resina em formato de tamanco com furos, lançada em 2002."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os calçados furadinhos Crocs, lançados nos Estados Unidos em 2002, foram desenhados originalmente para qual atividade?",
    "resposta": "Passeios de barco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crocs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crocs",
        "situacao": "ok",
        "texto": "Crocs, Inc. is an American footwear company based in Broomfield, Colorado, which manufactures and markets the Crocs brand of foam footwear. Crocs, Inc. terms these \"clogs\", but they do not contain wood like traditional clogs. In 2021, they acquired the Italian footwear brand HEYDUDE for $2.5 billion. In 2025, Crocs revenue stood at $3.3 billion, an increase of 1.5% from the previous year.\n[…]\nScott Seamans, Lyndon Hanson and George Boedecker Jr. created Crocs in 2002 to make and distribute the sandals, as they saw its potential and ease of use for consumers.\n[…]\nIn 2002, Crocs unveiled their first model, the Beach, at the Fort Lauderdale Boat Show in Florida, and all 200 pairs produced sold out.\n[…]\nAs the demand for Crocs grew, the company underwent further development and rebranding. In 2005, TDA Boulder redesigned the original Crocs logo and launched the \"Ugly Can Be Beautiful\" campaign, the first national advertising campaign for the Crocs brand. This successful campaign, created by Creative Director Thomas Dooley, Designer Matt Ebbing, and Creative Director Jonathan Schoenberg, helped pave the way for Crocs' successful IPO.\n[…]\nAs a result of these factors, Crocs' sales had a two-digit rise annually during this period.\n[…]\nCrocs announced the Fuse and two others in 2009, formulated to dissipate static electricity by European standard EN ISO 20347:2004 (E), for use in the medical sector.\n[…]\nIn August 2026, the creative consultant Emily Keegin wrote in The New York Times that \"Blinged-Up Crocs\" are one of the 25 objects that \"reveal something special about\" America.. Her rendering of the place of Crocs in America highlighted both their low original reputation, their re-evaluation, and their function-over-form design, noting that \"in the right light, even ugly can be cute.\"\n[…]\nCrocs' Transformative History on YouTube, Pirouette: Turning Points in Design (MoMA)\n[…]\nBusiness data for Crocs:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crocs",
        "situacao": "ok",
        "texto": "Crocs Inc. é uma empresa norte-americana fundada em 2002 em Broomfield, Colorado, que fabrica e comercializa a marca de calçados de espuma. A Crocs chama esses sapatos de “tamancos”, mas eles não contêm madeira como os tamancos tradicionais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Toblerone",
      "descricao": "Barra de chocolate suíça em formato de prismas triangulares, criada por Theodor Tobler em 1908."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do chocolate Toblerone junta o sobrenome do criador, Theodor Tobler, com o nome italiano de qual doce?",
    "resposta": "Torrone",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toblerone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toblerone",
        "situacao": "ok",
        "texto": "Toblerone (  TOH-blə-rohn, German: [tobləˈʁoːnə], Swiss Standard German: [toblɛˈroːnɛ]) is a chocolate brand owned by Mondelez International (originally Kraft Foods). It was produced in Bern, Switzerland, except for some produced before 1970 in England and Scotland, until 2022, when Mondelez began producing some of it in Bratislava, Slovakia.\n[…]\nToblerone is known for its distinctive shape as a series of joined triangular prisms inspired by the Matterhorn mountain and lettering engraved in the chocolate. \"Toblerone\" is a portmanteau of \"Tobler\", the surname of its co-founder Theodor Tobler, and \"torrone\", the Italian word for nougat. The company was independent from 1899 until 1970, then merged with Suchard, then with Jacobs as Jacobs Suchard, then acquired by Kraft Foods—which has been renamed to Mondelez International—in 2012.\n[…]\nThe product's name is a combination of Tobler's name and the Italian word torrone (a type of nougat).\n[…]\nThe triangular shape of the Matterhorn in the Swiss Alps/Italian Alps is commonly believed to have given Theodor Tobler his inspiration for the shape of Toblerone. However, according to Theodor's sons, the triangular shape originates from a pyramid shape that dancers at the Folies Bergère created as the finale of a show that Theodor saw. Another source of inspiration could have been the similar triangular packaging of the Delta Peter brand.\n[…]\nTheodor Tobler applied for a patent for the Toblerone manufacturing process in Bern in 1909. The Toblerone brand was trademarked the same year, at the Swiss Federal Institute of Intellectual Property in Bern. Albert Einstein, who was working at the institute as a clerk, might have been involved in the patenting. Toblerone was thus the first patented milk chocolate bar.\n[…]\nToblerone Pralines\n[…]\nToblerone Tobelle\n[…]\nToblerone thins in a beige triangular box:\n[…]\nTobler Truffles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toblerone",
        "situacao": "ok",
        "texto": "Toblerone é uma marca de chocolate suíço, originalmente produzida em Berna (parte da produção mudou para a Eslováquia) pela antiga empresa Chocolat Tobler AG, depois a Kraft Foods e, agora, a Mondelēz International — a maior empresa de alimentos e confeitos dos Estados Unidos.\n[…]\nO chocolate Toblerone foi criado, em 1908, pelos suíços Theodor Tobler e Emil Baumann. Em 1911, passou a ser embalado em papel de alumínio, um produto que havia sido inventado no ano anterior por outra empresa suíça. O chocolate original é constituído por chocolate ao leite, amêndoas da Califórnia e mel.\n[…]\nO nome do produto é um amálgama que combina o nome \"Tobler\" (sobrenome de um dos fundadores) com a palavra italiana torrone.\n[…]\nO nome também contém as letras do local onde era originalmente produzido: toblerone (Berne, nome francês de Berna). No logotipo aparece um urso estilizado em referência ao brasão da cidade.\n[…]\nChocolate de Leite Toblerone (1908, ano da fundação da fábrica)\n[…]\nChocolate Branco Toblerone (1970) – chocolate branco\n[…]\nChocolate Negro Toblerone (1969) – chocolate amargo\n[…]\nToblerone Minis (1995) – chocolates de 12,5 gramas com recheio de pralinê\n[…]\nToblerone Blue (1996) – chocolate ao leite com o interior de chocolate branco\n[…]\nToblerone One by One – triângulos de Toblerone separados, cada um numa embalagem\n[…]\nToblerone One by One Varieties – triângulos de Toblerone separados, com os cinco sabores (ao leite, branco, negro, minis e blue)\n[…]\nChocolate Fruit and Nut Toblerone (2008) – com uvas passas e nozes\n[…]\nChocolate Honey Crisp Toblerone (2008) – com \"pepitas\" de mel\n[…]\n«Página oficial da Toblerone no Brasil»\n[…]\n«Página oficial da Toblerone» (em alemão)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Gatorade",
      "descricao": "Bebida isotônica criada em 1965 por pesquisadores da Universidade da Flórida para atletas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O isotônico Gatorade, criado em 1965 por médicos de uma universidade americana, tirou o nome do apelido de qual time?",
    "resposta": "Florida Gators",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gatorade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gatorade",
        "situacao": "ok",
        "texto": "Gatorade is a brand of sports drinks owned and manufactured by PepsiCo and is distributed in over 80 countries. The beverage was developed in 1965 by a team of researchers at the University of Florida led by Robert Cade. It was originally made for the school's student-athletes, the Gators, to replenish the carbohydrates that they burned and the combination of water and electrolytes that they lost \n[…]\nGatorade was created in 1965, by a team of scientists at the University of Florida College of Medicine, including Robert Cade, Dana Shires, Harry James Free, and Alejandro de Quesada. Following a request from Florida Gators football head coach Ray Graves, Gatorade was created to help athletes by acting as a replacement for body fluids lost during physical exertion.\n[…]\nLike many of the other sports drinks that pre-dated it by decades, such as Lucozade, the earliest version of the beverage consisted of a mixture of water, sodium, sugar, potassium, phosphate, and lemon juice. Ten players on the University of Florida football team tested the first version of Gatorade during practices and games in 1965, and the tests were deemed successful.\n[…]\nThe University of Florida researchers initially considered naming their product \"Gator-Aid\", but eventually settled on \"Gatorade\".\n[…]\nIn the early 1970s, legal questions arose regarding whether or not the researchers who invented Gatorade were entitled to ownership of its royalties since they had been working under a research grant from the federal government which provided financial stipends. The University of Florida also claimed partial rights of ownership, which was brought to resolution in 1973 in the form of a settlement awarding the university with a 20% share of Gatorade royalties.\n[…]\nThe Gatorade brand has continued to employ professional sports athletes in the promotion of its products.\n[…]\nGatorade Center\n[…]\nGatorade Sports Science Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gatorade",
        "situacao": "ok",
        "texto": "Gatorade é uma marca de bebidas isotônicas, atualmente uma divisão da PepsiCo, comercializada originalmente nos Estados Unidos e atualmente em mais de sessenta países.\n[…]\nGatorade foi criado em 1965 por 4 médicos pesquisadores da Universidade da Flórida: Robert Cade, Dana Shires, Harry James Free e Alejandro de Quesada. Isso aconteceu porque o técnico da equipe de Futebol americano da universidade (Os Florida Gators), Ray Graves, estava frustrado com o desempenho dos atletas de sua equipe durante jogos no verão. Ele pediu uma solução à equipe do Dr. Cade, que passou a trabalhar no desenvolvimento de uma bebida para a hidratação dos atletas.\n[…]\nA fórmula experimental desenvolvida pela equipe do dr. Cade foi testada pela primeira vez num jogo de futebol americano dos Baby Gators, a equipe de calouros dos Florida Gators, da Universidade da Flórida, em 1 de outubro de 1965, contra a equipe B da universidade. Os Baby Gators, que passaram o jogo inteiro hidratando-se com a nova bebida, venceram o jogo contra a equipa B, que não tinha a bebida.\n[…]\nNo dia seguinte, foi a vez de testar a bebida com o time principal da universidade. Num jogo contra o favorito LSU Tigers, os Florida Gators venceram por 14 a 7.\n[…]\nA mistura original de água, sais e carboidratos desenvolvida pela equipe do dr. Cade tinha um sabor pouco agradável. Durante os testes com os Florida Gators, para torná-la mais saborosa, os pesquisadores misturaram a bebida com suco de limão. O nome Gatorade surgiu da junção de Gators e da palavra lemonade (limonada), designando a \"limonada dos Gators\".\n[…]\n«www.gssiweb.com». GSSI - Gatorade Sports Science Institute (em língua inglesa)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Samsung",
      "descricao": "Conglomerado sul-coreano fundado em 1938 por Lee Byung-chul em Daegu."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em coreano, o que significa o nome Samsung, empresa fundada em 1938 como uma pequena comerciante?",
    "resposta": "Três estrelas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Samsung"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samsung",
        "situacao": "ok",
        "texto": "Samsung Group  (Korean: 삼성; pronounced [sʰamsɔŋ]; stylised as SΛMSUNG) is a South Korean multinational manufacturing conglomerate headquartered in the Samsung Town office complex in Seoul. The group consists of numerous affiliated businesses, most of which operate under the Samsung brand, and is the largest chaebol (family-controlled conglomerates in South Korea). As of 2024, Samsung has the world\n[…]\nOther significant subsidiaries are Samsung Life Insurance, the 14th-largest life insurance company globally, and Cheil Worldwide, the world's 15th-largest advertising agency by 2012 revenues.\n[…]\nCompared to other major Korean companies, Samsung survived the 1997 Asian financial crisis relatively unharmed. However, Samsung Motor was sold to Renault at a significant loss. As of 2010, Renault Samsung is 80.1 per cent owned by Renault and 19.9 per cent owned by Samsung. Additionally, Samsung manufactured a range of aircraft from the 1980s to the 1990s.\n[…]\nLee Byung-chul (1938–1966, 1968–1987)\n[…]\nIn the period from 2018 to 2022, Samsung contributed over US$306 billion in export revenue to Vietnam. In 2022 alone, despite the impact of the COVID-19 pandemic, the figure reached US$65 billion, contributing significantly to Vietnam's total export value, which for the first time exceeded the US$700 billion threshold, reaching over US$732 billion.\n[…]\nIn addition, Samsung has also brought Vietnamese businesses deeper into the global value chain and contributed significantly to the development of the electronics industry in Vietnam. Currently, the number of Vietnamese first- and second-tier suppliers in Samsung's global supply chain has increased tenfold, from 25 businesses in 2014 to 257 businesses by the end of 2022.\n[…]\nEstrin, James (13 November 2015). \"Samsung and the South Korean Success Story\". Lens Blog. The New York Times Company. Retrieved 6 October 2026.\n[…]\nSamsung Global Official YouTube channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samsung",
        "situacao": "ok",
        "texto": "O Grupo Samsung (ou simplesmente Samsung, estilizado como SΛMSUNG) (em coreano, 삼성 - samsʌŋ) é um conglomerado multinacional com sede na Samsung Town em Seul, Coreia do Sul. Compreende várias empresas afiliadas, a maioria unida sob a marca Samsung, e é o maior chaebol (conglomerado comercial) do país.\n[…]\nA Samsung foi fundada por Lee Byung-chul em 1938 como uma trading company. Nas três décadas seguintes, o grupo se diversificou em áreas como processamento de alimentos, têxtil, seguros, valores mobiliários e varejo. A Samsung entrou no setor de eletrônicos no final dos anos 1960 e nos setores de construção e construção naval em meados dos anos 1970; essas áreas impulsionariam seu crescimento subsequente.\n[…]\nEm abril de 2011, o Grupo Samsung possuía 59 empresas não listadas e 19 empresas listadas no Korea Exchange.\n[…]\nA Samsung Heavy Industries é uma empresa de engenharia e construção de navios sediada em Seoul. Foi fundada em agosto de 1974. Seus produtos principais são graneleiros, embarcações container, petroleiros, cruzadores, balsas de passageiros, equipamento de gerenciamento de materiais, além de estruturas de aço e pontes. Atingiu receita total de 13.358,6 bilhões de won em 2011 e é a segunda maior fabricante de navios por receitas (depois da Hyundai Heavy Industries).\n[…]\nA Samsung Life Insurance Co., Ltd. é uma empresa multinacional de seguros de vida sediada em Seoul. Foi fundada em 1957 como Dongbang Life Insurance e se tornou subsidiária do Grupo Samsung em julho de 1963.A principal atividade da Samsung Life é o fornecimento de seguros de vida e produtos e serviços de anuidade. Em dezembro de 2011 ela operava em 7 países, tinha 8,08 milhões de clientes e 5.975 de funcionários.\n[…]\nSamsung Group (em Coreano)\n[…]\nSamsung Group (em Chinês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Haribo",
      "descricao": "Fabricante alemã de balas de goma fundada em 1920 por Hans Riegel, famosa pelos ursinhos de goma."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Haribo, das balas de goma alemãs, junta as sílabas iniciais do fundador, Hans Riegel, e de qual cidade?",
    "resposta": "Bonn",
    "distratores": [
      "Bochum",
      "Colônia",
      "Hamburgo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Haribo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haribo",
        "situacao": "ok",
        "texto": "Haribo GmbH & Co. KG (German: [ˈhaːʁiboː], English:  HARR-ib-oh; stylized in all caps) is a German confectionery company founded by Hans Riegel Sr. It began in Kessenich, Bonn, Germany. The name \"Haribo\" is a syllabic abbreviation formed from Hans Riegel Bonn. The company created the first gummy candy in 1922 in the form of little gummy bears; this was later reworked into what became Goldbear whic\n[…]\nOn 13 December 1920, the company was registered in the commercial register by its founder Johannes Riegel. In 1921, his wife Gertrud Riegel was the company's first employee. According to the company, Riegel's seed capital was a sack of sugar, a copper pot, a marble slab, a stool, a stonewalled stove and a roller. In the same year, he bought a house that was located in the Kessenich district of Bonn, on a street called Bergstraße. The house was Haribo's first production facility.\n[…]\nIn 1957, Haribo took over the Godesberg company Kleutgen & Meier, where Hans Riegel Senior had had his first job. In 1961, Haribo took over Bonera Industrie en Handelsmaatschappij NV in Breda and continued to run it as Haribo Nederland BV. In the 1960s, a new headquarters building opened in Bonn.\n[…]\nLong-time employee Andreas Nickenig (* ~1968), who was considered Hans Riegel's foster son and got along well with Paul's sons of the same age, also had a strong role in managing the foreign business.\n[…]\nHaribo operates numerous factories around the world. In Europe it consists of five in Germany including the main one in Bonn and a major one in Solingen, another in Neuss, and outside this region in the Bavarian Mainbernheim and Saxon Wilkau-Haßlau. There is a sole factory in Linz, Austria, whereas in Great Britain there are warehousing and production facilities in Castleford, which opened in 2013 and was extended in 2026, and one in Pontefract (which also manufactures Pontefract cakes)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Haribo",
        "situacao": "ok",
        "texto": "A Haribo é uma empresa de confeitaria com sede em Bonn, na Alemanha, foi fundada em 1920 por Hans Riegel Sr., sendo a primeira fabricante de balas de goma.\n[…]\nA empresa é conhecida mundialmente pelas suas balas de goma em forma de ursos, chamados de \"Ursos Dourados\" (ou Goldbären em Alemão), que foram criados nos anos 1960 baseados numa versão similar da bala de goma que era conhecida como \"Ursinho Dançante\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman em Rochester, Nova York, no século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "George Eastman inventou a palavra Kodak do zero. Segundo ele, o nome começa e termina com qual letra, sua favorita?",
    "resposta": "K",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kodak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "The Eastman Kodak Company, referred to simply as Kodak ( ), is an American public company that produces various products related to its historic roots in film photography. The company is headquartered in Rochester, New York, and is incorporated in New Jersey. It is best known for photographic film products, which it brought to a mass market for the first time.\n[…]\nThe letter k was a favorite of George Eastman's; he is quoted as saying, \"it seems a strong, incisive sort of letter.\" He and his mother, Maria, devised the name Kodak using an Anagrams set. Eastman said that there were three principal concepts he used in creating the name: it should be short, easy to pronounce, and not resemble any other name or be associated with anything else.\n[…]\nAccording to a 1920 ad, the name \"was simply invented – made up from letters of the alphabet to meet our trademark requirements. It was short and euphonious and likely to stick in the public mind.\" The Kodak name was trademarked by Eastman in 1888.\n[…]\nKodak's involvement in document imaging technology began when George Eastman partnered with banks to image checks in the 1920s. Kodak subsidiary Recordak was founded in 1928 to manufacture some of the first microfilm. Kodak acquired the Bowe Bell & Howell scanner division in 2009. The Document Imaging division was transferred to Kodak Alaris in 2013.\n[…]\nKodak encountered several challenges from rival patents for film and cameras. These began while Eastman was still developing his first camera, when he was forced to pay inventor David Houston for a license to his pre-existing patents. A major lawsuit for patent infringement would come from rival film producer Ansco. Inventor Hannibal Goodwin had filed his own patent for nitrocellulose film in 1887, before the one owned by Kodak, but his was initially denied by the patent office.\n[…]\nGeorge Eastman, 1925–1934"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nImagens personalizadas e imagens de documentos agora fazem parte da Kodak Alaris, uma empresa separada de propriedade da Kodak Pension Plan, com sede no Reino Unido.\n[…]\nEm resposta à pandemia COVID-19, em 2020, a Kodak anunciou que começaria a produção de materiais farmacêuticos.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Brasil»\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "WD-40",
      "descricao": "Lubrificante e desengripante em spray criado em San Diego, nos Estados Unidos, em 1953."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome do lubrificante WD-40, as letras indicam deslocamento de água em inglês. E o número quarenta, indica o quê?",
    "resposta": "A quadragésima tentativa da fórmula",
    "fonte": [
      "https://en.wikipedia.org/wiki/WD-40"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/WD-40",
        "situacao": "ok",
        "texto": "WD-40 is a multi-purpose water-displacing product with penetrating and lubricating properties, manufactured by the WD-40 Company based in San Diego, California. Its formula was invented for the Rocket Chemical Company in 1953, and it became available as a commercial product in 1958. It acts as a lubricant, rust preventive, penetrant and moisture displacer. In 2014, it was inducted into the Interna\n[…]\nSources credit different people with inventing the WD-40 formula in 1953 as part of the Rocket Chemical Company (later renamed to the WD-40 Company), in San Diego, California; the formula was kept as a trade secret and was never patented to avoid public disclosure of the ingredients.\n[…]\nAccording to Iris Engstrand, a historian of San Diego and California history at the University of San Diego, Iver Norman Lawson invented the formula, while the WD-40 company website and other books and newspapers credit Norman B. Larsen. According to Engstrand, \"(Iver Norman) Lawson was acknowledged at the time, but his name later became confused with company president Norman B.\n[…]\nLarsen.\" \"WD-40\" is abbreviated from the term \"Water Displacement, 40th formula\", suggesting it was the result of the 40th attempt to create the product. The spray, composed of various hydrocarbons, was originally designed to be used by Convair to protect the outer skin of the Atlas missile from rust and corrosion. This outer skin also functioned as the outer wall of the missile's delicate balloon tanks.\n[…]\nWD-40's formula is a trade secret. The original copy of the formula was moved to a secure bank vault in San Diego in 2018. To avoid disclosing its composition, the product was not patented in 1953, and the window of opportunity for patenting it has long since closed.\n[…]\nThe European formulation is stated according to the REACH regulations:\n[…]\nThe Australian formulation is stated:\n[…]\nWD-40 Safety Data Sheets\n[…]\nWD-40 uses, by Snopes.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/WD-40",
        "situacao": "ok",
        "texto": "WD-40 (abreviação de Water Displacement, 40th formula) é uma marca americana e a marca registrada de um óleo penetrante fabricado pela WD-40 Company, com sede em San Diego, Califórnia. Sua fórmula foi inventada para a Rocket Chemical Company em 1953, antes de a empresa se tornar a WD-40 Company. O WD-40 tornou-se disponível como produto comercial em 1961. Atua como lubrificante, preventivo de ferr\n[…]\nFontes atribuem a diferentes pessoas a invenção da fórmula do WD-40 em 1953, como parte da Rocket Chemical Company (posteriormente renomeada para WD-40 Company), em San Diego, Califórnia; a fórmula foi mantida como um segredo comercial e nunca foi patenteada.\n[…]\nSegundo com Iris Engstrand, historiadora de San Diego e da história da Califórnia na Universidade de San Diego, Iver Norman Lawson inventou a fórmula, enquanto o site da WD-40 Company e outros livros e jornais atribuem a invenção a Norman B. Larsen. Segundo Engstrand, \"(Iver Norman) Lawson foi reconhecido na época, mas seu nome mais tarde foi confundido com o do presidente da empresa, Norman B. Larsen\".\n[…]\n\"WD-40\" é a abreviação do termo \"Water Displacement, 40th formula\", sugerindo que foi o resultado da 40ª tentativa de criar o produto. O spray, composto de vários hidrocarbonetos, foi originalmente projetado para ser usado pela Convair para proteger a camada externa do míssil Atlas contra ferrugem e corrosão. Essa camada externa também funcionava como a parede externa dos delicados tanques de balão do míssil.\n[…]\nA fórmula do WD-40 é um segredo comercial. A cópia original da fórmula foi transferida para um cofre bancário seguro em San Diego em 2018. Para evitar a divulgação de sua composição, o produto não foi patenteado em 1953, e a oportunidade para patenteá-lo já se encerrou há muito tempo.\n[…]\nA formulação europeia é declarada conforme os regulamentos REACH:\n[…]\nA formulação australiana é declarada:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Listerine",
      "descricao": "Enxaguante bucal antisséptico criado nos Estados Unidos em 1879 por Joseph Lawrence."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que cirurgião britânico do século dezenove, pioneiro do uso de antissépticos nas operações, deu nome a um famoso enxaguante bucal?",
    "resposta": "Joseph Lister",
    "fonte": [
      "https://en.wikipedia.org/wiki/Listerine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Listerine",
        "situacao": "ok",
        "texto": "Listerine ( LIST-ər-EEN) is an American brand of antiseptic mouthwash that is promoted with the slogan \"Kills germs that cause bad breath\". Named after Joseph Lister, who pioneered antiseptic surgery at the Glasgow Royal Infirmary in United Kingdom, Listerine was developed in 1879 by Joseph Lawrence, a chemist in St. Louis, Missouri.\n[…]\nInspired by Louis Pasteur's ideas on microbial infection, the English doctor Joseph Lister demonstrated in 1865 that use of carbolic acid on surgical dressings would significantly reduce rates of post-surgical infection. Lister's work in turn inspired St. Louis-based doctor Joseph Lawrence to develop an alcohol-based formula for a surgical antiseptic which included eucalyptol, menthol, methyl salicylate, and thymol (its exact composition was a trade secret).\n[…]\nFrom the 1930s into the 1950s, advertisements claimed that applying Listerine to the scalp could prevent \"infectious dandruff\".\n[…]\nListerine also sell a formulation called Listerine Advanced Defence Gum Treatment containing a common food preservative, ethyl lauroyl arginate (LAE) at 0.147%.\n[…]\nThe use of alcohol-containing mouthwash such as Listerine may increase the risk of developing oral cancer in some cases, see Oral cancer § Alcohol. In 2009, Johnson and Johnson launched a new alcohol-free version of the product called Listerine Zero.\n[…]\nOn April 11, 2007, McNeil-PPC disclosed that there were potentially contaminants in all Listerine Agent Cool Blue products sold since its launch in 2006, and that all bottles were being recalled. The recall affected some 4,000,000 bottles sold since that time. According to the company, Listerine Agent Cool Blue is the only product affected by the contamination and no other products in the Listerine family were under recall.\n[…]\nOfficial Listerine Middle East Website\n[…]\nListerine Fluoride Animation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Listerine",
        "situacao": "ok",
        "texto": "Listerine é uma marca de antisséptico bucal. É promovido com o slogan \"Mata germes que causam mau hálito\". Em homenagem a Joseph Lister, um pioneiro da cirurgia antisséptica, Listerine foi desenvolvido em 1879 por Joseph Lawrence, um químico em St. Louis, Missouri.\n[…]\nOriginalmente comercializado pela Lambert Pharmacal Company (mais tarde se tornou Warner-Lambert), Listerine foi fabricado e distribuído pela Johnson & Johnson desde dezembro de 2006, após adquirir a divisão de produtos de saúde da Pfizer.\n[…]\nO nome da marca Listerine também é usado em pastas de dente, enxágue Listerine Whitening Extreme, Anticáries, Tartar Control e Antimanchas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Frisbee",
      "descricao": "Disco voador de plástico para arremessar, vendido com esse nome pela empresa americana Wham-O a partir de 1957."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do disco Frisbee vem de uma padaria de Connecticut, cujas formas de qual alimento os estudantes arremessavam por diversão?",
    "resposta": "Torta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Frisbee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frisbee",
        "situacao": "ok",
        "texto": "A  frisbee (pronounced  FRIZ-bee), also called a flying disc or simply a disc, is a gliding toy or sporting item generally made of injection-molded plastic and roughly 20 to 25 centimetres (8 to 10 in) in diameter with a pronounced lip. It is used recreationally and competitively for throwing and catching, as in flying disc games.\n[…]\nIn June 1957, Wham-O co-founders Richard Knerr and Arthur \"Spud\" Melin gave the disc the brand name \"Frisbee\" after learning college students were calling the Pluto Platter by that term, which was derived from the Connecticut-based pie manufacturer Frisbie Pie Company, a supplier of pies to Yale University, where students started a campus craze tossing empty pie tins stamped with the company's logo—the way Morrison and his wife had in 1937.\n[…]\nIn 1955 International Frisbee Association charter member Richard Warden first encountered frisbee as a freshman at Dartmouth.\n[…]\nBefore these tournaments, the Frisbee was considered a toy and used for recreation.\n[…]\nSources agree that controlling the trajectory of a frisbee to make landing points repeatable relies on understanding spin rate's effect on frisbee lift and curve. One study using smoke wire flow visualization and particle image velocimetry measurements determined that spin rate has a slight but noticeable effect on a disk's aerodynamic drag. At a low AOA (under 5 degrees), the trailing edge vortex strength remained unchanged between spinning and non-spinning tests.\n[…]\nHowever, greater angles of attack allowed rotation to generate a large vortex region that heightened drag. In a similar experiment using a different frisbee design, spin assisted lift across the board but lift enhancement was inversely proportional to the angle of attack.\n[…]\nHistory of Frisbee and Disc Sports\n[…]\nAll Frisbee Throw and catch techniques"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frisbee",
        "situacao": "ok",
        "texto": "Frisbee ou disco voador é um objeto em forma de disco, geralmente feito de plástico com diâmetro entre 20 a 25 centímetros. Seu formato permite o voo quando são lançados em rotação. Frysbiees são jogados como parte de diferentes jogos, nos quais diversas pessoas e cães podem participar. Estes jogos em geral consistem de lançar o disco e pegá-lo ainda nos ares.\n[…]\nNa forma como hoje é conhecido, o Frisbee surgiu em 1957, sendo produzido pela empresa Wham-O toy company. Porém, a história do Frysbeie começou antes, em Bridgeport, Connecticut, onde William Frisbie abriu a Frisbie Pie Company em 1871. Estudantes de universidades próximas jogavam as latas de torta vazias entre si, gritando \"Frisbie!\".\n[…]\nEm 1948, Walter Frederick Morrison e seu parceiro Warren Franscyony inventaram uma versão plástica do disco chamada \"Disco Voador\" que podia voar mais longe e com mais precisão do que as placas de torta de estanho.\n[…]\nDepois de se separar de Franscioni, Morrison fez um modelo melhorado em 1955 e o vendeu para a empresa de brinquedos Wham-O como \"Pluto Platter\" - uma tentativa de lucrar com o sucesso relacionado a temáticas como o espaço sideral e OVNI. Em 1958, um ano após o primeiro lançamento do brinquedo, a Whoam-O mudou seu nome para o disco Frisbee.\n[…]\nFederação Paulista de Disco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Nivea",
      "descricao": "Marca alemã de cremes e cosméticos da Beiersdorf, lançada em 1911 com um creme em lata azul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do creme Nivea, lançado na Alemanha em 1911, vem de uma palavra latina que significa o quê?",
    "resposta": "Branca como a neve",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nivea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nivea",
        "situacao": "ok",
        "texto": "Nivea (German pronunciation: [niˈveːa] , stylized as NIVEA) is a German personal care brand that specializes in skin and body care. It is owned by the Hamburg-based company Beiersdorf Global AG, who also makes the Eucerin brand. Nivea comes from the Latin adjective niveus meaning \"snow-white\".\n[…]\nNivea soap was released in 1906, and in 1911, its signature creme was introduced.\n[…]\nIn 1900, a patent application was submitted for Lanolin, an emulsifying agent. Eucerit was the basis for Eucerin and, later on, for NIVEA Creme. The first overseas branch was established in London six years later. In 1909, Labello was launched on the market. It was the first lip care product in sliding tube packaging. \"Labello\" is derived from the Latin for \"lip\" (labium) and \"beautiful\" (bellum). Eventually, two years later, NIVEA Creme – the first stable water-in-oil emulsion – was introduced.\n[…]\nThe emulsifying agent Eucerit is made from lanolin, found in sheep's wool, and is the key to NIVEA Creme's unique properties. The deaths of entrepreneurs Oscar Troplowitz and his partner Otto Hanns Mankiewicz resulted in the formation of a formal company on 1 June 1922.\n[…]\nIn 1950, ph5 Eucerin was launched on the market. This ointment emphasized the importance of the skin's own natural protective acid barrier in maintaining good skin health. During the 1950s and 1960s, the brand was extended into a product family and the first deodorizing soap, 8x4, was introduced. NIVEA milk, liquid NIVEA Creme in a water-in-oil emulsion, was introduced \"for all-over body care\". Beiersdorf launched a protective hand cream called \"atrix\" on the market.\n[…]\nMedia related to Nivea at Wikimedia Commons\n[…]\nNIVEA's History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nivea_%28marca%29",
        "situacao": "ok",
        "texto": "Nivea (estilizado como NIVEA) é uma marca da empresa Beiersdorf AG sediada em Hamburgo, Alemanha, que opera nos mercados internacionais de cuidado da pele.\n[…]\nA empresa foi fundada em 28 de março de 1882 pelo farmacêutico Paul Carl Beiersdorf. Em 1900, a empresa foi comprada por Oscar Troplowitz, Isaac Lifschütz (químico) e o dermatologista Paul Gerson Unna. Em 1911, eles lançaram o primeiro creme hidratante da história,[carece de fontes]? desenvolvido com uma combinação de óleo e água numa mistura extremamente fina e estável. Esta inovação é conhecida como Eucerit, e o creme hidratante NIVEA representa a primeira emulsão estável deste tipo.\n[…]\nO nome NIVEA deriva do próprio creme. Devido à sua cor branca como a neve, NIVEA deriva das palavras em latim \"nix, nivis\" que significa neve. Deste modo, a tradução literal de NIVEA é \"neve branca\".\n[…]\nDurante os anos de 1930, a Beiersdorf AG iniciou a produção de produtos como óleos bronzeadores, cremes de barbear, shampoo e toners faciais. A marca foi lançada em muitos países após a Segunda Guerra Mundial. Durante os anos 1980, a marca expandiu-se em um mercado mais amplo e global, sendo conhecido pela utilização de perfume nos seus produtos. Depois dos primeiros produtos de sucesso para homem, NIVEA lança o bálsamo After Shave sem álcool.\n[…]\nEm janeiro de 2020, NIVEA une-se à Start-se para criar um programa de desenvolvimento de startups para a distribuição de cosméticos.\n[…]\nA NIVEA foi eleita vencedora na categoria beleza nos Prémios Marketeer 2023.==Referências==\n[…]\n«Nivea - Site Mundial» (em inglês). www.nivea.com\n[…]\n«Nivea - Brasil». www.nivea.com.br\n[…]\n«Nivea - Portugal». www.nivea.pt",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Band-Aid",
      "descricao": "Marca de curativos adesivos da Johnson & Johnson, inventada em 1920 por Earle Dickson."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1920, um funcionário da Johnson e Johnson inventou o curativo Band-Aid pensando em qual pessoa, que vivia se cortando na cozinha?",
    "resposta": "A esposa dele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Band-Aid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Band-Aid",
        "situacao": "ok",
        "texto": "Band-Aid is a brand of adhesive bandages distributed by the consumer health company Kenvue, spun off from Johnson & Johnson in 2023. Invented in 1920, the brand has become a generic term for adhesive bandages in countries such as the United States, Canada, Australia, and others.\n[…]\nThe Band-Aid was invented in 1920 by a Johnson & Johnson employee, Earle Dickson, in Highland Park, New Jersey, for his wife Josephine, who frequently injured, cut and burned herself while cooking. The prototype was a strip of gauze down the middle of a long piece of surgical tape that allowed her to dress her wounds without assistance. Dickson passed the idea on to his employer, which went on to produce and market the product as the Band-Aid.\n[…]\nDuring World War II, millions were shipped internationally, helping popularize the product. Since then, Johnson & Johnson has estimated a sale of over 100 billion Band-Aids worldwide.\n[…]\nJohnson & Johnson introduced its famous \"I am stuck on BAND-AID Brand ’cuz BAND-AID’s stuck on me\" jingle in 1975. The jingle was written by Barry Manilow.\n[…]\nIn 2022, Band-Aid was named the most trusted brand in the United States, beating the second place brand, Lysol, by more than two points.\n[…]\nOver time, Band-Aid has become a well-known example of a genericized trademark in the United States, Canada and South America. Johnson & Johnson has registered Band-Aid as a trademark on the Principal Register of the United States Patent and Trademark Office and has tried to prevent its genericization in its marketing.\n[…]\nBand-Aid Brand History\n[…]\nJohnson & Johnson First Aid Website Archived 2011-07-30 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Band-Aid",
        "situacao": "ok",
        "texto": "Bandeide (português brasileiro) ou penso rápido (português europeu) (em inglês:  Band-Aid) é uma marca de bandagens adesivas distribuídas pela empresa americana farmacêutica e de dispositivos médicos da Kenvue desde 2022, devido a cisão da Johnson & Johnson. Inventada em 1920, a marca tornou-se um termo genérico para bandagens adesivas em países como Estados Unidos, Canadá, Austrália, Filipinas e \n[…]\nO Band-Aid foi inventado em 1920 por um funcionário da Johnson & Johnson, Earle Dickson, em Highland Park, Nova Jérsia, para sua esposa Josephine, que frequentemente se cortava e se queimava enquanto cozinhava. O protótipo permitiu que ela curasse suas feridas sem assistência. Dickson passou a ideia para seu empregador, que passou a produzir e comercializar o produto como Band-Aid.\n[…]\nDickson teve uma carreira de sucesso na Johnson & Johnson, chegando a vice-presidente antes de sua aposentadoria em 1957.\n[…]\nOs Band-Aids originais eram feitos à mão e não eram muito populares. Em 1924, a Johnson & Johnson introduziu band-aids feitos à máquina e começou a venda de band-aids esterilizados em 1939.\n[…]\nNa Segunda Guerra Mundial, milhões foram enviados para o exterior, ajudando a popularizar o produto. Desde então, a Johnson & Johnson estimou uma venda de mais de cem bilhões de band-aids em todo o mundo.\n[…]\nBand-Aid tornou-se, com o tempo, um exemplo bem conhecido de marca genérica nos Estados Unidos, Canadá e América do Sul, mas a Johnson & Johnson registrou Band-Aid como marca registrada no Registro Principal no Escritório de Patentes e Marcas Registradas dos Estados Unidos e o registro é válido e legal. A Johnson & Johnson continua a defender a marca Band-Aid contra a sua generalização.\n[…]\nBand-Aid Brand Official Website\n[…]\nBand-Aid Brand History\n[…]\n«Johnson & Johnson First Aid Website». Arquivado em 2011-07-30 no Wayback Machine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de hotéis e restaurantes publicado pela fabricante francesa de pneus Michelin desde 1900, famoso por suas estrelas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1900, por que os irmãos Michelin, fabricantes de pneus, lançaram um guia com hotéis, oficinas e restaurantes?",
    "resposta": "Para incentivar as viagens de carro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\nThe Michelin Guide also awards \"Rising Stars\", an indication that a restaurant has the potential to qualify for a star, or an additional star.\n[…]\nThe Michelin Guide New York 2007 included 526 restaurants, compared to 2,014 in Zagat New York 2007; after The Four Seasons Restaurant received no stars in that edition, co-owner Julian Niccolini said Michelin \"should stay in France, and they should keep their guide there\".\n[…]\nIn 2007, Tokyo's restaurants were awarded the most stars and in 2010 other Japanese cities like Kyoto and Osaka also received many stars. At the time this sparked questions from some over whether these high ratings were merited for Japanese restaurants, or whether the Michelin Guide was too generous in giving out stars to gain an acceptance with Japanese customers and to enable the tyre-selling parent company to market itself in Japan.\n[…]\n't Huis van Lede (Belgium). After receiving a star in 2014, chef Frederick Dhooge said he did not want his Michelin star or his points in the Gault-Millau restaurant guide, stating: \"We noticed that this is not always understood by a group of customers that expect a spectacle of stars and points kitchen\" from a Michelin-starred restaurant rather than simple food.\n[…]\nMichelin Guide to the British Isles, London: Michelin Tyre Company, 1913, OL 14022740M (+ List of excursions)\n[…]\nMichelin Guide to the Battlefields of the World War, Milltown, N.J.: Michelin, 1919, OL 24432211M\n[…]\n1900 Michelin Guide Archived 23 May 2025 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guia_Michelin",
        "situacao": "ok",
        "texto": "Guia Michelin é um guia turístico publicado pela primeira vez em 1900 por André Michelin, um industrial francês fundador da Compagnie Générale des Établissements Michelin, fabricante de pneus mais conhecida como Michelin. O objetivo de André era o de promover o turismo para o crescente mercado automobilístico.\n[…]\nOs Guias Michelin vermelhos são cada vez mais numerosos e diversos. Em 2006, 12 guias vermelhos citavam mais de 45.000 hotéis e restaurantes em toda a Europa e em Nova Iorque (desde 2006). O guia vermelho é publicado para a França, o Benelux, a Itália, a Alemanha, a Espanha e Portugal, a Suíça, o Reino Unido e a Irlanda e as principais cidades da Europa como Paris, Roma e Londres.\n[…]\nDesde 1929, data de introdução das estrelas no Guia Michelin, que Portugal tem restaurantes premiados com Estrelas Michelin. A lista dos restaurantes premiados com estrelas no Guia Michelin 2024 inclui 39 restaurantes, 8 com duas estrelas (1 novo) e 31 com uma estrela (4 novos).\n[…]\nDesde 1997 foi introduzida a distinção de Bib Gourmand. Esta categoria, inferior às estrelas, inclui restaurantes com a melhor relação qualidade-preço. A lista dos restaurantes distinguidos como Bib Gourmand no Guia Michelin 2024 inclui 30 restaurantes em Portugal (7 novos).\n[…]\nO Guia Michelin classifica os hotéis recomendados em 5 categorias de conforto, de um a cinco pavilhões, além de uma categoria especial para turismo rural ou de habitação, atribuindo a cor vermelha aos estabelecimentos que considera especialmente agradáveis. No Guia Michelin 2019 são distinguidos com pavilhões vermelhos 32 estabelecimentos em Portugal.\n[…]\nO primeiro Guia Michelin começou a ser publicado no Brasil em 2015. Ele foi dividido entre restaurantes de São Paulo e Rio de Janeiro.\n[…]\nLista dos restaurantes estrelados do Guia Michelin\n[…]\nGuia Quatro Rodas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Câmera Polaroid",
      "descricao": "Câmera fotográfica instantânea criada pelo americano Edwin Land e lançada pela Polaroid em 1948."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1943, a filha pequena de Edwin Land fez uma pergunta que inspirou a câmera Polaroid. O que ela queria saber?",
    "resposta": "Por que não podia ver a foto na hora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edwin_H._Land",
      "https://en.wikipedia.org/wiki/Instant_camera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edwin_H._Land",
        "situacao": "ok",
        "texto": "Edwin Herbert Land, ForMemRS, FRPS, Hon.MRI (May 7, 1909 – March 1, 1991) was an American scientist and inventor, best known as the co-founder of the Polaroid Corporation. He invented inexpensive filters for polarizing light, a practical system of in-camera instant photography, and the retinex theory of color vision. His Polaroid instant camera went on sale in 1948 and made it possible for a pictu\n[…]\nElkan Blout, a close colleague of Edwin Land at Polaroid, wrote: \"What was Land like? Knowing him was a unique experience. He was a true visionary; he saw things differently from other people, which is what led him to the idea of instant photography. He was a brilliant, driven man who did not spare himself and who enjoyed working with equally driven people.\"\n[…]\nIn 1957, Harvard University awarded him an honorary doctorate, and Edwin H. Land Blvd., a street in Cambridge, Massachusetts, was later named in his memory. The street is at one end of Memorial Drive, in Cambridge, where the Polaroid company headquarters building was located (over a mile west on Memorial Drive from Land Blvd.). Polaroid occupied several buildings in various places in Cambridge.\n[…]\nDespite the tremendous success of his instant cameras, Land's Polavision instant movie system was a financial disaster, and he resigned as Chairman of Polaroid on July 27, 1982. When he retired, he had 535 patents to his name, only surpassed by Thomas Edison and Elihu Thomson. While he was set for retirement years, this did not mean the end of his passion in research and decided to continue with his interest in color vision.\n[…]\nLand was:\n[…]\nLand is referenced in the Lego set based on the Polaroid OneStep SX-70 Camera.\n[…]\nLand, Edwin H., \"Generation of Greatness: The Idea of a University in an Age of Science\", Ninth Annual Arthur Dehon Little Memorial Lecture at the Massachusetts Institute of Technology. May 22, 1957"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Instant_camera",
        "situacao": "ok",
        "texto": "An instant camera is a camera which uses self-developing film to create a chemically developed print shortly after taking the picture. Polaroid Corporation pioneered (and patented) consumer-friendly instant cameras and film, and were followed by various other manufacturers.\n[…]\nModels which used SX-70 film were introduced in a folding version, with later versions being solid plastic bodied. Third generation Polaroids, like the once popular SX-70, used a square format integral film, in which all components of the film (negative, developer, fixer, etc.) were contained. The SX-70 instant camera used the print technology that Edwin Land had most desired.\n[…]\nThe earliest instant cameras were conceived before Edwin Land's invention of the instant camera. These cameras were, however, more portable wet darkrooms than \"instant\" camera and were difficult to use.\n[…]\nIntegral film cameras, such as the SX-70, 600 series, Spectra, and Captiva cameras went a long way in accomplishing Edwin Land's goal of creating a seamless process in producing instant photos. The photographer simply pointed the camera at the subject, framed it and took the photo.\n[…]\nThe name and app icon of the social photo sharing platform Instagram, founded in 2010, originated from the instant camera, with the 2010 icon directly resembling a Polaroid Land Camera 1000.\n[…]\nThe Land List, a list of Polaroid cameras and FAQs\n[…]\nJim's Polaroid camera collection, a private pack film collection with information about pack film and Polaroid history\n[…]\n\"The Polaroid genius who re-imagined the way we take photos\" (video). Instant: The Story of Polaroid, author Christopher Bonanos compares the company's dynamic founder, Edwin Land, with Apple's iconic inventor, Steve Jobs. BBC News Online. 2013-01-23. Retrieved 2013-01-26."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Edwin_Land",
        "situacao": "ok",
        "texto": "Edwin Herbert Land (Bridgeport, 7 de maio de 1909 — Cambridge, 1 de março de 1991) foi um físico, industrial e inventor estadunidense.\n[…]\nPouco mais de três anos depois, em 21 de fevereiro de 1947, Land demonstrou uma câmera instantânea e um filme associado à Optical Society of America. Chamada de Land Camera, ela estava à venda comercial menos de dois anos depois. A Polaroid fabricou originalmente sessenta unidades desta primeira câmera. Cinquenta e sete foram colocados à venda na loja de departamentos Jordan Marsh em Boston antes do feriado de Natal de 1948.\n[…]\nÀ medida que a empresa Polaroid crescia, Land tinha equipes de assistentes trabalhando em turnos ao seu lado. À medida que uma equipe se desgastava, a próxima equipe era trazida para continuar o trabalho.\n[…]\nElkan Blout, um colega próximo de Edwin Land na Polaroid, escreveu: \"Como era Land? Conhecê-lo foi uma experiência única. Ele foi um verdadeiro visionário; viu as coisas de maneira diferente das outras pessoas, e foi o que o levou à ideia de fotografia instantânea. Ele era um homem brilhante e motivado, que não se poupava a si mesmo e que gostava de trabalhar com pessoas igualmente motivadas\".\n[…]\nEm 1957, a Universidade de Harvard concedeu-lhe um doutorado honorário, e Edwin H. Land Blvd., uma rua em Cambridge, Massachusetts, foi mais tarde nomeada em sua memória. A rua fica em uma das pontas da Memorial Drive, em Cambridge, onde ficava o prédio da sede da Polaroid (mais de um quilômetro e meio a oeste na Memorial Drive da Land Blvd.). A Polaroid ocupou vários edifícios em vários locais de Cambridge.\n[…]\nMedalha Edwin H. Land\n[…]\nEdwin Herbert Land\n[…]\nCâmera Polaroid Land",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Chanel número 5",
      "descricao": "Perfume da maison francesa Chanel, lançado em 1921 e criado pelo perfumista Ernest Beaux."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O perfumista Ernest Beaux apresentou a Coco Chanel uma série de frascos numerados. Por que o perfume escolhido se chama número cinco?",
    "resposta": "Era a quinta amostra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chanel_No._5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chanel_No._5",
        "situacao": "ok",
        "texto": "Chanel No. 5 is the first perfume launched by French couturier Gabrielle \"Coco\" Chanel in 1921. The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. The design of its bottle has been an important part of the product's branding. Coco Chanel was the first face of the fragrance, appearing in the advertisement published by Harper's Bazaar in 1937.\n[…]\nIn 1920, when presented with small glass vials containing sample scents numbered 1 to 5 and 20 to 24 for her assessment, she chose the fifth vial. Chanel told her master perfumer, Ernest Beaux, whom she had commissioned to develop a new fragrance, \"I present my dress collections on the fifth of May, the fifth month of the year and so we will let this sample number five keep the name it has already, it will bring good luck.\"\n[…]\nCoco Chanel had wanted to develop a distinctly modern fragrance for some time prior to early-1920. At this time, Chanel's lover was Grand Duke Dmitri Pavlovich Romanov of Russia, the murderer of Rasputin. The duke introduced her to Ernest Beaux on the French Riviera. Beaux was the master perfumer at A. Rallet and Company, where he had been employed since 1898. The company was the official perfumer to the Russian imperial family, and \"the imperial palace at St.\n[…]\nThe key was Beaux's use of aldehydes as aroma boosters. Beaux's student, Constantin Weriguine, said the aldehyde Beaux used had the clean note of the Arctic, \"a melting winter note\". A laboratory assistant, mistaking a full strength mixture for a ten percent dilution, had jolted the compound with a quantity of aldehyde never before used. Beaux prepared ten glass vials for Chanel's assessment. Numbered 1–5 and 20–24, each group a variation of the compound. \"Number five.\n[…]\nCoco Chanel (1937)\n[…]\nMedia related to Chanel No. 5 at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanel_N%C2%BA_5",
        "situacao": "ok",
        "texto": "Chanel Nº 5 é um perfume feminino lançado em 1921 pela maison francesa Chanel. Criado pelo perfumista Ernest Beaux a pedido de Coco Chanel, é considerado uma das fragrâncias mais influentes da história da perfumaria moderna.\n[…]\nO perfume foi desenvolvido após Coco Chanel solicitar uma fragrância que representasse uma mulher moderna, afastando-se dos perfumes excessivamente florais do início do século XX.\n[…]\nErnest Beaux apresentou diversas amostras numeradas, e Chanel escolheu a quinta proposta, dando origem ao nome Nº 5. O lançamento oficial ocorreu em 5 de maio de 1921.\n[…]\nO frasco, de linhas retas e estética minimalista, tornou-se um marco do design moderno e integra a coleção permanente do Museu de Arte Moderna de Nova Iorque.\n[…]\nChanel Nº 5 pertence à família olfativa floral-aldeídica. Sua composição inclui aldeídos combinados com notas florais como jasmim e rosa de maio, além de notas amadeiradas na base.\n[…]\nDesde sua criação, Chanel Nº 5 esteve associado a campanhas publicitárias de grande visibilidade internacional.\n[…]\nEm 1986, a campanha estrelada por Carole Bouquet e dirigida por Ridley Scott consolidou o uso de linguagem cinematográfica na publicidade de perfumes.\n[…]\nChanel Nº 5 tornou-se um símbolo cultural do luxo e da feminilidade no século XX. A declaração atribuída à atriz Marilyn Monroe, afirmando que usava apenas algumas gotas do perfume ao dormir, contribuiu significativamente para sua notoriedade internacional.\n[…]\nAo longo de sua história, Chanel Nº 5 foi associado a diversas personalidades do cinema e da moda, que participaram de campanhas publicitárias internacionais:\n[…]\nCoco Chanel (1937)\n[…]\n(em inglês) Chanel Nº 5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A cola fraca dos bloquinhos Post-it nasceu, em 1968, de uma tentativa fracassada de criar o quê?",
    "resposta": "Uma cola superforte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_Note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_Note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 2019, the Post-it App was relaunched.\n[…]\nIn 2010, the creators of the Post-it note joined the National Inventors Hall of Fame as a result of the widespread success of the Post-it note.\n[…]\nPost-it notes may have a positive effect on how people interact with information presented to them. This is backed up by research that aimed to determine how attaching a blank Post-it note to a survey affected participation in the survey. The research found that the surveys with affixed Post-it notes were more likely to be completed and returned, and that the participants were more likely to write higher quality responses to the questions.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Doritos",
      "descricao": "Marca americana de salgadinhos de tortilha de milho, hoje da PepsiCo, surgida nos anos 1960."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os salgadinhos Doritos surgiram nos anos sessenta num restaurante de comida mexicana dentro de qual parque de diversões da Califórnia?",
    "resposta": "Disneylândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Doritos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doritos",
        "situacao": "ok",
        "texto": "Doritos () is an American brand of flavored tortilla chips produced by Frito-Lay, a wholly owned subsidiary of PepsiCo. The concept for Doritos originated at Disneyland at a restaurant managed by Frito-Lay.\n[…]\nThe original product was made at the Casa de Fritos (now Rancho Del Zocalo) at Disneyland in Anaheim, California, during the early 1960s. Using surplus tortillas and taking inspiration from a traditional Mexican snack known as totopo, the company-owned restaurant cut them into smaller pieces, fried them, and added basic seasoning. Arch West was the vice president of marketing of Frito-Lay at the time, and noticed their popularity.\n[…]\nHe made a deal in 1964 with Alex Foods, the provider of many items for Casa de Fritos at Disneyland, and produced the chips for a short time regionally, before it was overwhelmed by the volume, and Frito-Lay moved the production in-house to its Tulsa plant.\n[…]\nIn the 1990s, in partnership with parent company PepsiCo's fast food brands, two new flavors of Doritos were introduced, Taco Bell's Taco Supreme (incorporating a \"beef\" flavoring that was quite different from the original 1960s \"Taco\" incarnation) and Pizza Hut's Pizza Cravers. After PepsiCo spun off its restaurant division in 1997, the flavors were simply renamed taco and pizza, respectively, with the pizza flavor discontinued in some markets.\n[…]\nFrom 1978 to 1997, both Taco Bell and Doritos were under the same corporate umbrella within PepsiCo until PepsiCo spun off its restaurant business into what would eventually become what is now Yum! Brands.\n[…]\nIn April 2013, Doritos released Doritos Locos Chips with Nacho Cheese and Cool Ranch to match Taco Bells campaign.\n[…]\nDoritos UK"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Doritos",
        "situacao": "ok",
        "texto": "Doritos (literalmente, a partir de espanhol mexicano Doradito ou  Doritos)  é um salgadinho/xilito/chilito (do inglês \"Chips\") de tortilla que foi lançado em 1964 no mercado norte-americano pela Alex Foods, somente na costa oeste, com formato triangular e crocante, no sabor original de milho torrado.\n[…]\nNo ano de 1989, a versão Light foi reintroduzida no mercado com o nome Doritos Light Tortilla Chips.\n[…]\nEm 1992 uma campanha intitulada “George Foreman and Sons”, em conjunto com funcionários voluntários da Fritolay, conduziram a maior amostra grátis de um produto no mundo. Ela aconteceu em 2 de maio em mais de onze mil pontos de vendas nos Estados Unidos e foi nomeado de \"D-Day\", fazendo parte do relançamento do novo Doritos Nacho Cheesier. Ainda nesse mesmo ano foram lançados no mercado, como teste experimental nas cidades de Tulsa e Omaha, os novos sabores Doritos Thins Salted e Salsa N’Cheese.\n[…]\nEm 1993, esses novos sabores foram introduzidos nacionalmente com o comediante Chevy Chase estrelando a campanha televisiva. No ano de 1994 foi lançado o Doritos Cooler Ranch. Uma das campanhas publicitárias mais famosas foi lançada em 1996. No ano seguinte foi introduzida a campanha comercial criada pela agência BBDO. Em 1998 foi lançada a versão sem gordura e o Doritos 3D.\n[…]\nNo Brasil o Doritos estreou em 1986 juntamente com a batata Ruffles. Atualmente existem no mercado brasileiro os sabores Queijo Nacho, Sweet Chili (apimentado), Doritos Dippas (Milho Branco), Cool Ranch (Salsa e Cebola), Doritos Rainbow (versão especial com vários sabores, entre eles pimenta preta), além do Doritos Wasabi.\n[…]\nEm 2010 é lançado a linha De Montão, uma mistura dos salgadinhos Ruffles, Doritos e Baconzitos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Chocolates Garoto",
      "descricao": "Fabricante brasileira de chocolates fundada em 1929 em Vila Velha pelo imigrante alemão Heinrich Meyerfreund."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A fábrica de chocolates Garoto foi fundada em 1929, por um imigrante alemão, em qual estado brasileiro?",
    "resposta": "Espírito Santo",
    "distratores": [
      "Minas Gerais",
      "Rio de Janeiro",
      "Santa Catarina"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chocolates_Garoto",
      "https://en.wikipedia.org/wiki/Chocolates_Garoto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chocolates_Garoto",
        "situacao": "ok",
        "texto": "Garoto é uma indústria brasileira do ramo alimentício, sediada no município de Vila Velha, estado do Espírito Santo. É uma das dez maiores fabricantes de chocolates do mundo, sendo a maior da América Latina.\n[…]\nDentre os produtos que fabrica estão: caixas de bombons, tabletes, ovos de Páscoa e chocolate para uso culinário como coberturas e pó solúvel, que podem ser encontrados em mais de 50 países. Seus maiores sucessos são a Caixa Amarela e os tabletes familiares com a marca Garoto; as variedades dos chocolates Baton e Talento, além do clássico bombom Serenata de Amor.\n[…]\nDentre suas atividades de comunicação destacam-se as Dez Milhas Garoto. É a mais tradicional e importante corrida do Espírito Santo entre os corredores profissionais e amadores.\n[…]\nEm celebração ao tradicionalismo gaúcho, durante a Semana Farroupilha, a empresa muda, anualmente, o seu nome para \"Guri\", palavra frequentemente utilizada na Região Sul do Brasil como sinônimo a \"garoto\" ou \"menino\". A sua primeira edição foi lançada em 2024, e é a primeira vez que o tradicional logo \"Garoto\" foi substituído.\n[…]\nGaroto, usada para chocolate e pastilhas de hortelã;\n[…]\nOpereta, usada para chocolate e sorvetes;\n[…]\nIt Coco, usada para chocolate;\n[…]\nAero, usada para chocolate (Aero é uma marca mundial da Nestlé para chocolate aerado mas que no Brasil foi lançada pela Garoto, em 2014).\n[…]\nA Chocolates Garoto vem praticando de forma contínua a chamada maquiagem de produtos, que é a redução do volume de suas mercadorias. Como exemplo temos o chocolate em barra, que foi perdendo volume de forma paulatina, passando dos 200 gramas originais para até 90 gramas (-55%). A tradicional caixa de bombons passou de 500 gramas para 250 gramas (-50%)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chocolates_Garoto",
        "situacao": "ok",
        "texto": "Chocolates Garoto S.A. is a Brazilian chocolate and confectionery company headquartered in Vila Velha, Espírito Santo. The company was founded in 1929 by German immigrant Heinrich Meyerfreund and acquired by Nestlé in 2002.\n[…]\nThe company Chocolates Garoto was founded on August 16, 1929, by the German immigrant Heinrich Meyerfreund, with the name of candy factory H. Meyerfreund & Cia., in a warehouse located in Prainha, a neighborhood located in the city of Vila Velha in the Brazilian state Espírito Santo. Garoto started by producing the Pastilha Garoto mint.\n[…]\nIn 1934, Heinrich Meyerfreund received an inheritance from his parents and bought machines for the production of chocolates. Two years later, he obtained financing to set up a more modern factory in the Glória neighborhood, where Garoto's industrial park still stands today. With new infrastructure and chocolate-based products, the company entered a phase of strong growth and began selling beyond the limits of Espírito Santo.\n[…]\nToday, Garoto is one of the largest chocolate manufacturers in Brazil. It exports its chocolate to various countries. Garoto's chocolate candy bars are distributed by a variety of distributors. Walgreens had sold Garoto's candies under the brand name of Regal Dynasty, but has recently switched to a Polish supplier.\n[…]\nOn January 16, 2013, the company signed sponsorship of 200 million reais with FIFA and the CBF to be the official chocolate of the Confederations Cup 2013 and the 2014 World Cup in Brazil.\n[…]\nList of bean-to-bar chocolate manufacturers"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Smirnoff",
      "descricao": "Marca de vodca originada na destilaria fundada por Piotr Smirnov no século dezenove, hoje da Diageo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A vodca Smirnoff nasceu de uma destilaria fundada no século dezenove por Piotr Smirnov em qual cidade?",
    "resposta": "Moscou",
    "fonte": [
      "https://en.wikipedia.org/wiki/Smirnoff"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smirnoff",
        "situacao": "ok",
        "texto": "Smirnoff (; Russian: [smʲɪrˈnof]) is a brand of vodka owned and produced by the British company Diageo. The Smirnoff brand began with a vodka distillery founded in Moscow by Pyotr Arsenievich Smirnov (1831–1898), but its modern incarnation traces back to the 1930s, by American liquor distributor Heublein. Distributed in 130 countries, it is manufactured in different countries depending on market, \n[…]\nSmirnoff Sourced Cranberry Apple. Cranberry-Apple flavoured vodka with real juice added.\n[…]\nSmirnoff Ice Peach Bellini\n[…]\nSmirnoff Ice Screwdriver\n[…]\nSmirnoff Ice Watermelon Mimosa\n[…]\nThese are not to be confused with Smirnoff's Red-, Gold-, and Black-label vodkas.\n[…]\nSmirnov No.21 Vodka [50 cl, 70 cl or 1 liter bottle (40% ABV)] Red and White label with gold border. The vodka, like its Western cousin, is charcoal-filtered.\n[…]\nSmirnov ЗОЛОТАЯ (Zolotaya > \"Golden\") Vodka [61 cl bottle (40% ABV)] Brown and Tan label with gold border. The vodka passes through a second gold-alloy filter for a smoother taste.\n[…]\nSmirnov ИМПЕРИАЛЪ (Imperial > \"Imperial\") Vodka [61 cl bottle (40% ABV)] Black label with silver border. Comes in a cardboard gift box. The vodka is made in small batches and uses natural honey rather than sugar as an ingredient.\n[…]\nSmirnov ТИТУЛЪ (Titul > \"Title\") Vodka [50 cl or 70 cl bottle (40% ABV)] Crimson label with silver border and sculpted bottle. The 70 cl bottle comes in a cardboard gift box. The small-batch vodka is double-distilled in a copper alembic for a smoother finish.\n[…]\n\"Sea\", a Smirnoff advertising campaign\n[…]\nSmirnoff Company website\n[…]\nSmirnoff Vodka Archived 14 April 2015 at the Wayback Machine on thebar.com UK, owned by Diageo\n[…]\nSmirnoff and Smirnov back together (28 February 2006)\n[…]\nSmirnoff and Smirnov battle it out in Russia's vodka wars (28 November 1997)\n[…]\nLinda Himelstein Author of a book about Smirnoff (the original founder)\n[…]\nYes, Olga, There is a Mr. Smirnoff: The Odd History of Smirnoff Vodka"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smirnoff",
        "situacao": "ok",
        "texto": "Smirnoff é uma marca de vodca criada por Piotr Arsenieyevich Smirnov em Moscovo, Rússia. Pertence atualmente ao conglomerado britânico Diageo. Smirnoff, tem o nome de \"Смирновская Водка\" (transliterado Smirnovskaya Vodka). Pertence à Diageo desde 2006.\n[…]\nPiotr Smirnov fundou sua primeira destilaria de vodca em Moscovo na década de 1860, sob o nome PA Smirnoff. Ele morreu em 1898, e foi sucedido por Vladimir Smirnov. A companhia prosperou, produzindo mais de 4 milhões de engradados de vodca por ano.\n[…]\nDurante a Revolução de Outubro, a destilaria foi confiscada e a família teve de fugir. Vladimir Smirnov restabeleceu a fábrica em Istambul em 1920. Quatro anos depois ele se mudou para Lviv, Ucrânia, e começou a vender a vodca sob a pronúncia francesa do nome, \"Smirnoff\". O novo produto foi um sucesso, e já no final da década de 1930 era exportado para a maioria dos países europeus. Uma filial foi aberta em Paris em 1925. Hoje é produzida em 19 países.\n[…]\nGraças ao surgimento de cocktails de vodca e bem sucedidas campanhas publicitárias, a popularidade da Smirnoff aumentou consideravelmente.\n[…]\nPágina oficial da Smirnoff\n[…]\nPágina oficial da Smirnoff Black\n[…]\nComprar Smirnoff",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Nokia",
      "descricao": "Empresa finlandesa de telecomunicações fundada em 1865 como fábrica de papel."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Nokia, que começou em 1865 como fábrica de papel, tirou seu nome de uma cidade de qual país?",
    "resposta": "Finlândia",
    "distratores": [
      "Suécia",
      "Noruega",
      "Dinamarca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nokia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nokia",
        "situacao": "ok",
        "texto": "Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics corporation, originally established as a pulp mill in 1865. Nokia's main headquarters are in Espoo, Finland, in the Helsinki metropolitan area, but the company's actual roots are in the Tampere region of Pirkanmaa.\n[…]\nNokia's history dates from 1865, when mining engineer Fredrik Idestam established a pulp mill on the shores of the Tammerkoski rapids near the town of Tampere, Finland (then a Grand Duchy under the Russian Empire's rule). A second pulp mill was opened in 1868 near the neighboring town of Nokia, where there were better hydropower resources.\n[…]\nIn November 2014, Nokia Technologies launched its first product, the Nokia N1 tablet computer. In July 2015, Nokia Technologies introduced a VR camera called OZO, designed for professional content creators and developed in Tampere, Finland. With its 8 synchronized shutter sensors and 8 microphones, the product can capture stereoscopic 3D video and spatial audio.\n[…]\nHMD Global is a mobile phone company based in Espoo, Finland. The Nokia brand has been licensed by former Nokia employees who founded HMD Global and introduced Nokia-branded Android-based devices to the market in 2017. Initially, Nokia had no investment in the company but retained some input in the development of its devices.\n[…]\nNokia are based at Karaportti in Espoo, Finland, just outside capital Helsinki. It has been its head office since 2014 after moving from the purpose-built Nokia House in Espoo as part of the sale of the mobile phone business to Microsoft. The building in Karaportti was previously the headquarters of NSN (now Nokia Networks).\n[…]\nMartti Häikiö (October 2002). Nokia: The Inside Story. FT / Prentice Hall. ISBN 0-273-65983-9.\n[…]\nBusiness data for Nokia:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nokia",
        "situacao": "ok",
        "texto": "Nokia Corporation (pronúncia em finlandês: [ˈnɔkiɑ], nóquia) é uma empresa multinacional finlandesa fundada em 1865, de infraestruturas de telecomunicações, tecnologia de telecomunicações e tecnologia de consumo. A Nokia tem sede em Keilaniemi, Espoo, cidade vizinha a Helsínquia, capital da Finlândia.\n[…]\nA Nokia tem uma longa história que remonta a 1865, quando Fredrik Idestam, um engenheiro de minas, criou uma fábrica de transformação de pasta de celulose em papel, perto da cidade de Tampere, na Finlândia (que à época estava integrada no Império Russo). Uma segunda fábrica foi construída em 1868 perto da cidade de Nokia.\n[…]\nEm 1871, Idestam em conjunto com o seu amigo Leo Mechelin formaram uma empresa conjunta e deram-lhe o nome de Nokia, inspirado no nome da cidade onde se situava a segunda fábrica. Nos 90 anos que se seguiram, a Nokia constituiu-se como uma empresa virada para a indústria florestal e para a indústria energética.\n[…]\nA Nokia começou também a fazer equipamento militar para as forças de defesa da Finlândia, tais como o Sanomalaite M/90 communicator em 1983 e a máscara de gás M61 de 1960. Em paralelo, a companhia começou também a produzir telefonias móveis profissionais, interruptores telefônicos, condensadores e computadores químicos e pessoais sob o nome MikroMikko (pela divisão de dados da Nokia) de 1981 a 1991.\n[…]\nA 18 de maio de 2016, a Microsoft anunciou a venda da divisão de telemóveis básicos, bem como a licença que tinha para utilizar a marca Nokia nesses mesmos dispositivos, à HMD Global, e as fábricas da antiga Nokia à FIH Mobile, uma subsidiária da Foxconn. Em simultâneo, a HMD Global, uma start-up finlandesa formada por antigos empregados da Nokia, acordou com a empresa o direito de utilização da marca Nokia, bem como das suas patentes, em smartphones Android.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Puma",
      "descricao": "Marca alemã de artigos esportivos fundada por Rudolf Dassler em Herzogenaurach em 1948."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que as marcas esportivas alemãs Puma e Adidas têm em comum na sua origem?",
    "resposta": "Foram fundadas pelos irmãos Dassler",
    "fonte": [
      "https://en.wikipedia.org/wiki/Puma_(brand)",
      "https://en.wikipedia.org/wiki/Adidas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Puma_(brand)",
        "situacao": "ok",
        "texto": "Puma SE is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.\n[…]\nFollowing the split, Rudolf originally registered the newly established company as Ruda (derived from Rudolf Dassler, as Adidas was based on Adi Dassler), but later changed the name to Puma. Puma's earliest logo consisted of a square and beast jumping through a D, which was registered, along with the company's name, in 1948. Puma's shoe and clothing designs feature the Puma logo and the distinctive \"Formstrip\" which was introduced in 1958.\n[…]\nAs of 2022, Puma is operational in over 120 countries worldwide.\n[…]\nA few months later, Rudolf's company changed its name to Puma Schuhfabrik Rudolf Dassler.\n[…]\nAt the 1960 Summer Olympics, Puma paid German sprinter Armin Hary to wear Pumas in the 100-metre sprint final. Hary had previously worn Adidas products and approached Adolf for compensation. However, Adidas declined the request. Despite winning a gold medal in Pumas, Hary chose to wear Adidas during the medals ceremony, surprising the two Dassler brothers. Hary seemingly aimed to benefit financially from both brands, but Adolf was infuriated to the extent of banning the Olympic champion.\n[…]\nA few months before the 1970 FIFA World Cup, Armin Dassler (Rudolf's son) of Puma and his cousin Horst Dassler (Adi's son) of Adidas signed \"the Pelé Pact\", an agreement that neither company would contract with Pelé, the world's most famous athlete. The companies reasoned that a bidding war for Pelé would be too expensive. Puma soon broke the pact and signed him.\n[…]\nSabel v Puma, a CJEU case on trade marks"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Adidas",
        "situacao": "ok",
        "texto": "Adidas AG (German pronunciation: [ˈadiˌdas] ; styled as adidas since 1949) is a German multinational athletic apparel and footwear corporation headquartered in Herzogenaurach, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. It is the holding company for the Adidas Group, which also owns an 8.33% stake in the football club Bayern Munich\n[…]\nBusiness was successful and the Dasslers were selling 200,000 pairs of shoes every year before World War II.\n[…]\nThe brothers split up in 1947 after relations between them had broken down, with Adolf forming a company registered as Adidas AG, from Adi Dassler, on 18 August 1949, and Rudolf forming a new firm that he called Ruda – from Rudolf Dassler, later rebranded Puma. Urban myths have popularised two false backronyms for the name \"Adidas\": All Day I Dream About Sports and All Day I Dream About Sex.\n[…]\nAt the 1960 Summer Olympics, Puma paid German sprinter Armin Hary to wear Pumas in the 100 meter sprint final. Hary had worn Adidas before and asked Adolf for payment, but Adidas rejected this request. The German won gold in Pumas, but then laced up Adidas for the medals ceremony, to the shock of the two Dassler brothers. Hary hoped to cash in from both, but Adi was so enraged he banned the Olympic champion.\n[…]\nThe \"Pelé Pact\" was the most notable event in the Dassler brothers feud, when both owners of Adidas and Puma agreed not to sign a sponsorship deal with Pelé for the 1970 FIFA World Cup, feeling that a bidding war for the most famous athlete in the world would become too expensive, only for Puma to break the pact and sign him. Many business experts credit the brothers' rivalry and competition for transforming sports apparel into a multi-billion pound industry.\n[…]\nAdidas Originals\n[…]\nPuma (brand), formed by Rudolf Dassler, brother of Adolf Dassler\n[…]\nAdidas Group, corporate site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Puma_SE",
        "situacao": "ok",
        "texto": "PUMA é uma empresa alemã de equipamentos desportivos, fundada em 1948 pelo empresário alemão Rudolf Dassler, com sede em Herzogenaurach, Alemanha.\n[…]\nA empresa surgiu através da separação da Gebrüder Dassler Schuhfabrik, uma antiga fábrica de calçados de pano criada por Rudolf e seu irmão Adolf Dassler (fundador da também alemã Adidas) em 1924. No ano de 1924 dois irmãos, Adolf (apelido Adi) e Rudolf (apelido Rudi) Dassler, criaram uma pequena empresa de calçados de pano, a Gebrüder Dassler Schuhfabrik. Aos poucos a produção começou a crescer e fornecer sapatos para atletas olímpicos.\n[…]\nO atleta Jesse Owens, nas Olimpíadas de Berlim, 1936, começou a mostrar o trabalho dos irmãos alemães ao mundo.\n[…]\nA empresa mostrava um desenvolvimento rápido, numa velocidade que fez com que os irmãos buscassem seus próprios lucros, ou seja, se separaram. No ano de 1948, Adi Dassler fundou a Adidas enquanto Rudolf criou a Puma Fábrica de Sapatos Rudolf Dassler. Um ano após a divisão da empresa, Rudolf mudou a sede da empresa para Herzogenaurach, cidade próxima do grande centro Nuremberg.\n[…]\nDessa forma a Puma atingia a América e conseguindo o direito da National Football League, NFL, passou a distribuir o uniforme para 13 equipes do esporte mais popular dos Estados Unidos, o Futebol Americano. Não demorou muito para conseguir a liberação da NBA, e fornece uniformes para nove equipes de outro desporto conhecido na terra norte-americana, o basquete.\n[…]\nEm 18 de fevereiro de 2022, a Puma foi anunciada como patrocinadora das ligas de Free Fire da América Latina. O anúncio foi feito pela Garena, desenvolvedora do jogo virtual.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Sopa Campbell",
      "descricao": "Marca americana de sopas enlatadas da Campbell Soup Company, fundada em Nova Jersey no século dezenove."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que artista pop americano expôs, em 1962, uma série de trinta e duas telas com latas de sopa Campbell?",
    "resposta": "Andy Warhol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans",
        "situacao": "ok",
        "texto": "Campbell's Soup Cans is a series of 32 paintings produced by American artist Andy Warhol between 1961 and 1962. Each painting depicts a different variety of Campbell's soup cans in a uniform 20-by-16-inch format. First exhibited in July 1962 at the Ferus Gallery in Los Angeles, the pop art works challenged traditional distinctions between fine art and commercial imagery. Warhol's association with \n[…]\nAccording to writer Gary Indiana in Andy Warhol & the Can That Sold the World (2008), the November 1963 assassination of President John F. Kennedy marked the moment when Warhol's Campbell's Soup Cans acquired a darker resonance. As Warhol became increasingly associated with the counterculture, the series developed what Indiana describes as an edgy connection to \"social upheaval,\" a day when \"America lost its innocence,\" transforming the soup cans into an emblem of an emblem of a nation in crisis.\n[…]\nWarhol is said to have been an inspiration for artists such as Jeff Koons and Banksy. Koons, in particular, extended Warhol's exploration of art as commodity into the 21st century. According to Irish Arts Review writer Riann Coulter, Neil Shawcross was influenced by Warhol's 1962 presentation of American culture with everyday food packaging in that year when Shawcross moved to Belfast. Shawcross eventually produced an exhibition entitled Letters to Andy after visiting the Andy Warhol Foundation.\n[…]\nIn 2021, Campbell Company of Canada partnered with the Andy Warhol Foundation for the Visual Arts to mark the 60th anniversary of Warhol's Campbell's Soup Cans with four limited-edition Pop art–inspired soup labels released across Canada. The campaign invited Canadian artists and consumers to create and share their own Pop art works online, with a curated selection of submissions featured in a digital gallery hosted by Refinery29.\n[…]\nCampbell's Soup Cans, 1962 – The Museum of Modern Art, New York"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Latas_de_Sopa_Campbell",
        "situacao": "ok",
        "texto": "Latas de sopa Campbell (cujo título original em inglês é Campbell's Soup Cans), também conhecida como 32 latas de sopa Campbell, é um obra de arte produzida em 1962 pelo artista norte americano Andy Warhol. Consiste em 33 quadros, cada um com 50,8 cm de altura por 40,6 cm de largura, com a pintura de uma lata de sopa Campbell — cada uma das variedades de sopa enlatada que a companhia oferecia naqu\n[…]\nNão só foi a primeira exposição individual de Warhol, como também foi considerada a estreia da pop art na Costa Oeste. A primeira individual de Andy Warhol, em Nova Iorque, teve lugar na Galeria Stable de Eleanor Ward, entre 6 e 24 de Novembro de 1962. A exposição incluía obras como Marilyn Diptych, Green Coca-Cola Bottles e as Latas de Sopa Campbell.\n[…]\nMuitas história mencionam que a escolha das latas de sopa reflectem a sua devoção às sopas da Campbell como consumidor. Robert Indiana referiu em tempos: \"Conheci o Andy muito bem. A razão porque ele pintou as latas de sopa, é porque ele gostava de sopa.\" Pensa-se que ele as escolheu como tema porque faziam parte da sua alimentação diária. Outros acham que Warhol só pintava coisas que estivessem próximo dele em termos emocionais.\n[…]\nDepois da sua morte, tornou-se o tema do maior museu de arte dedicado a um artista nos Estados Unidos. Muitas exibições de arte de Warhol incluem excertos do seu trabalho como realizador (p. ex.: The Museum of Contemporary Art's ANDY WARHOL/SUPERNOVA: Stars, Deaths, Disasters, 1962–1964 do Museu de Arte Contemporânea, em exibição de 18 de Março de 2006 a 18 de Junho do mesmo ano). Alguns acham que os seus trabalhos como artista ficam atrás das suas contribuições como produtor cinematográfico.\n[…]\nAngell, Callie, Andy Warhol Screen Tests: The Films of Andy Warhol Catalogue Raissonné, Abrams Books em associação com Museu Americano Whitney de Arte, Nova Iorque, 2006, ISBN 0-8109-5539-3",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Yamaha",
      "descricao": "Marca japonesa fundada em 1887 por Torakusu Yamaha como fabricante de órgãos, presente em instrumentos musicais e motocicletas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ligação existe entre as motos Yamaha e os pianos Yamaha?",
    "resposta": "Nasceram da mesma fábrica de instrumentos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yamaha_Corporation",
      "https://en.wikipedia.org/wiki/Yamaha_Motor_Company"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yamaha_Corporation",
        "situacao": "ok",
        "texto": "Yamaha Corporation (ヤマハ株式会社, Yamaha Kabushiki gaisha; ; Japanese pronunciation: [jamaha]) is a Japanese multinational musical instrument and audio equipment manufacturer.\n[…]\nNippon Gakki Co., Ltd. (日本楽器製造株式会社, Nihon Gakki Seizō Kabushiki gaisha; lit. 'Japan Musical Instrument Manufacture') was established in 1887 as a reed organ manufacturer by Torakusu Yamaha (山葉寅楠) in Hamamatsu, Shizuoka Prefecture, and was incorporated on 12 October 1897. In 1900, the company manufactured the first piano to be made in Japan, and its first grand piano two years later.\n[…]\nIn 1987, 100 years after the first reed organ built by Yamaha, the company was renamed Yamaha Corporation in honor of its founder. The company's origins as a musical instrument manufacturer are still reflected today in the group's logo—a trio of interlocking tuning forks.\n[…]\nYamaha has grown into the world's largest manufacturer of musical instruments (including pianos, \"silent\" pianos, drums, guitars, brass instruments, woodwinds, violins, violas, cellos, and vibraphones), and a leading manufacturer of semiconductors, audio/visual, computer-related products, sporting goods, home appliances, specialty metals, and industrial robots. Yamaha released the Yamaha CS-80 in 1977.\n[…]\nYamaha is segmented into three primary business domains of musical instruments, audio equipment, and others (industrial machinery and components, etc.)\n[…]\nMusical Instruments – the manufacture and sales of pianos; digital musical instruments; brass, woodwind, string, and percussion instruments; and other music-related activities.\n[…]\nDigital Musical Instruments\n[…]\n1965 – Band instruments (trumpet first)\n[…]\nYamaha Motor Company\n[…]\nYamaha Pro Audio\n[…]\nYamaha XG"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yamaha_Motor_Company",
        "situacao": "ok",
        "texto": "Yamaha Motor Co., Ltd. (ヤマハ発動機株式会社, Yamaha Hatsudōki Kabushiki gaisha) is a Japanese multinational conglomerate mobility manufacturer that was founded in 1955. The company operates across various industries and manufactures a wide range of motorized products, including motorcycles, motorboats, outboard motors, and semiconductor manufacturing equipment.\n[…]\nLed by Genichi Kawakami, the company's founder and first president, Yamaha Motor spun off from musical instrument manufacturer Yamaha Corporation in 1955 and began production of its first product, the YA-1 125 cc motorcycle. It was quickly successful and won the 3rd Mount Fuji Ascent Race in its class.\n[…]\nNippon Gakki Co., Ltd (currently Yamaha Corporation) was founded by Torakusu Yamaha in 1887 to manufacture reed organs and pianos and became the largest Japanese manufacturer of musical instruments in the early 20th Century. Yamaha was contracted to manufacture wooden and (later) metal airplane propellers by the Japanese government during World War II.\n[…]\nAfter a few years on the market, the engine was upgraded with the installation of a six-speed transmission, together with a newer instrument panel and handlebar switches, as well as a cross-drilled front disc brake rotor, while the rear remained with the drum brakes. The design was unchanged until it was updated in 2004, with the rear lights being borrowed by the Yamaha Y125Z and a new headlight. It was also installed with a catalytic converter, which reduced its horsepower to 19bhp.\n[…]\nTo make matters worse, Japan was in the midst of an economic downturn, which made Yamaha believe there would be no customers for the car, and so the project was cancelled in 1994 after many delays, with only 3 prototypes in existence.\n[…]\nYamaha confirmed at the 46th Tokyo Motor Show in 2019 that cars were no longer in the company's plans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Yamaha_Corporation",
        "situacao": "ok",
        "texto": "A Yamaha Corporation (ヤマハ株式会社, Yamaha Kabushiki gaisha; [ˈjɑːməhɑː]) é uma companhia japonesa multinacional fabricante de instrumentos musicais e equipamentos de áudio.\n[…]\nÉ uma das empresas que compõem o índice Nikkei 225 e é a maior fabricante de instrumentos musicais do mundo.\n[…]\nFoi fundada em 1887 por Torakusu Yamaha como uma fabricante de pianos e órgãos, originalmente com o nome de Nippon Gakki Co., Ltd. em Hamamatsu, Shizuoka no Japão e foi incorporada em 12 de outubro de 1897. A origem da companhia como um fabricante de instrumentos musicais continua refletindo hoje no logo do grupo; um trio de garfos (diapasões) entrecruzados.\n[…]\nA Yamaha cresceu até se tornar a maior fabricante do mundo de instrumentos musicais (incluindo pianos, percussão, guitarras, flautas, violinos, violas, violoncelos, e vibrafones), bem como um fabricante líder de semicondutores, Audiovisual, produtos informáticos conexos, esportivos, eletrodomésticos e móveis, metais, máquina ferramenta, e robôs industriais.\n[…]\nA Yamaha fabrica os mais diversos tipos de instrumentos musicais, como:\n[…]\nAlém de instrumentos musicais, a Yamaha também produz hardwares e softwares voltados para a edição musical como gravadores portáteis, monitores de áudio, mesas de som, interfaces USB, e, desde 2005, é proprietária da Steinberg, empresa especializada em softwares de gravação.\n[…]\nEm 2014, a Yamaha Corporation anunciou um acordo definitivo para adquirir a Line 6, fabricante de soluções tecnológicas para músicos.\n[…]\n1955: Motocicletas – fabricadas pela Yamaha Motor Company, que começou como uma empresa afiliada à Nippon Gakki (nome da Yamaha Corporation na época), mas hoje é uma empresa separada\n[…]\nYamaha Motor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ikea",
      "descricao": "Rede sueca de lojas de móveis fundada em 1943 por Ingvar Kamprad."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O nome da rede sueca de móveis Ikea traz as iniciais do fundador, da fazenda e da vila onde ele cresceu. Quem é esse fundador?",
    "resposta": "Ingvar Kamprad",
    "fonte": [
      "https://en.wikipedia.org/wiki/IKEA",
      "https://en.wikipedia.org/wiki/Ingvar_Kamprad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/IKEA",
        "situacao": "ok",
        "texto": "IKEA ( eye-KEE-ə, Swedish: [ɪˈkêːa]) is a multinational conglomerate founded in Sweden that designs and sells ready-to-assemble furniture, household goods, and other related services.\n[…]\nIKEA was founded in 1943 by Ingvar Kamprad, and has been the world's largest furniture retailer since 2008. The brand name is an acronym of the initials of the names of Ingvar Kamprad, the founder, Elmtaryd, the family farm where Kamprad was born, and Agunnaryd, Kamprad's hometown in Småland, southern Sweden.\n[…]\nIn 1943, the 17-year-old Ingvar Kamprad founded IKEA as a mail-order sales business and began to resell furniture five years later. The first store was opened in Älmhult, Småland, Sweden on 28 October 1958, under the name Möbel-IKÉA (möbel meaning \"furniture\" in Swedish). IKEA is an acronym standing for Ingvar Kamprad, the founder's name; Elmtaryd, the farm where he was born; and the nearby village of Agunnaryd where he was raised.\n[…]\nIn June 2013, Ingvar Kamprad resigned from the board of Inter IKEA Holding SA, and his youngest son, Mathias Kamprad, replaced Per Ludvigsson as the chairman of the holding company. Following his decision to step down, the 87-year-old founder explained, \"I see this as a good time for me to leave the board of Inter IKEA Group.\n[…]\nIn 2009, Sweden's largest television station, SVT, revealed that IKEA's money—the three per cent collection from each store—does not actually go to a charitable foundation in the Netherlands, as IKEA has said. Inter IKEA is owned by a foundation in Liechtenstein, called Interogo, which has amassed $12 billion (£18 billion), and is controlled by the Kamprad family.\n[…]\nIKEA effect\n[…]\nBusiness data for IKEA International A/S:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ingvar_Kamprad",
        "situacao": "ok",
        "texto": "Feodor Ingvar Kamprad (Swedish: [ˈɪ̌ŋːvar ˈkǎmːprad] ; 30 March 1926 – 27 January 2018) was a Swedish billionaire businessman who founded IKEA in 1943 and grew it into a multinational retail company that became the world's largest furniture seller in 2008.\n[…]\nFrom the age of 6 onwards, Ingvar Kamprad lived on the farm with his parents, sister, and grandmother.\n[…]\nIngvar attended Gothenburg's Handelsinstitut, now part of Hvitfeldtska Gymnasiet, from 1943 to 1945. In 1943, when he was 17 Kamprad founded IKEA at his uncle Ernst's kitchen table. In 1948, Kamprad diversified his portfolio, adding furniture. His business was mostly mail order. The acronym IKEA is made up of the initials of his name (Ingvar Kamprad); plus those of Elmtaryd, the family farm where he was born; and the nearby village of Agunnaryd where he was raised.\n[…]\nThe Dutch-registered Stichting INGKA Foundation is named after Ingvar Kamprad (i.e., ING + KA) which owns INGKA Holding, the parent company for all IKEA stores. Kamprad was chairman of the foundation.\n[…]\nKamprad also worked with Swedish journalist Bertil Torekull on Leading by Design: The IKEA Story. In the autobiographical book, Kamprad further describes his philosophies and the trials and triumphs of the founding of IKEA.\n[…]\nIn a 2010 interview, Kamprad reportedly referred to Engdahl as \"a great man\".\n[…]\nIngvar Kamprad, Founder of Ikea and Creator of a Global Empire, Dies at 91[link removed] by Robert D. McFadden. New York Times obituary 28 October 2018\n[…]\nIngvar Kampra Founder of Ikea, the home-furnishing giant, who made a fortune from flat-pack furniture and meatballs, but lived a simple life The Times obituary 29 October 2018\n[…]\nIngvar Kamprad: IKEA Founder and One of the World's Richest Men by Scott Allen, at LiveAbout 05/30/19"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/IKEA",
        "situacao": "ok",
        "texto": "IKEA (PRONÚNCIA SUECA/; PRONÚNCIA PORTUGUESA/) é uma empresa multinacional sueca dedicada à produção e venda a retalho de mobiliário, decoração, electrodomésticos, utensílios, acessórios para o lar e alimentos, fundada na província de Småland, Suécia, em 1943 por Ingvar Kamprad.\n[…]\nO IKEA foi fundada em Älmhult, Suécia no ano de 1943 por Ingvar Kamprad, então com 17 anos. O nome da companhia é um acrónimo composto pelas primeiras letras de seu nome seguido das primeiras letras dos nomes da herdade onde nasceu e da aldeia em que cresceu: Ingvar Kamprad Elmtaryd Agunnaryd. Originalmente, o IKEA vendia canetas, carteiras, molduras para fotos, mesas, relógios, jóias ou praticamente qualquer coisa que Kamprad acreditava que poderia vender a baixo preço.\n[…]\nO mobiliário entrou na lista de produtos do IKEA em 1947 e, em 1955, passou a desenhar seus próprios móveis. No início, Kamprad vendia seus produtos em sua casa e enviava as encomendas pelo correio até que abriu uma loja em Älmhult sob o nome «Möbel-IKÉA» (Möbel significa \"mobília\" em sueco). Foi também o local da primeira «loja armazém» que tornaria-se o modelo para as outras lojas IKEA.\n[…]\nO fundador da empresa era disléxico e descobriu que ao nomear os móveis com nomes próprios, em vez de um código, fazia com que os produtos fossem mais facilmente lembrados. Tipicamente, o nome é escolhido de uma base de dados mantido pelo IKEA da Suécia, mas pode acontecer que o designer ou criador do produtor sugira um nome.\n[…]\nPara além do restaurante, todas os IKEA têm um espaço de recreação infantil gratuito chamado Småland, que em sueco quer dizer: «terras pequenas»; mas é também o nome da província sueca onde nasceu Ingvar Kamprad, o fundador da loja.\n[…]\nSite internacional do IKEA\n[…]\nSite do IKEA Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Fusca",
      "descricao": "Automóvel popular da Volkswagen, projetado na Alemanha nos anos 1930 e chamado de Fusca no Brasil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro, cujo sobrenome virou marca de carros esportivos, projetou nos anos trinta o carro que no Brasil se chama Fusca?",
    "resposta": "Ferdinand Porsche",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
      "https://en.wikipedia.org/wiki/Ferdinand_Porsche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nThe Beetle was conceived in the early 1930s, when the leader of Nazi Germany, Adolf Hitler, decided there was a need for a people's car—an inexpensive, simple, mass-produced car—to serve Germany's new road network, the Reichsautobahn. Engineer Ferdinand Porsche and his design team began developing and designing the car in the early 1930s, but the fundamental design concept can be attributed to Béla Barényi in 1925, predating Porsche's claims by almost ten years.\n[…]\nOn 22 June 1934, Ferdinand Porsche received a development contract from the Verband der Automobilindustrie (German Association of the Automotive Industry) for the prototype of an inexpensive and economical passenger car after Hitler decided there was a need for a people's car (in German, \"volkswagen\")—a car affordable and practical enough for lower-class people to own—to serve the country's new road network, the Reichsautobahn.\n[…]\nAlthough the Volkswagen car was primarily the conception of Porsche and Hitler, the idea of a \"people's car\" is much older than Nazism, and has existed since the introduction of automotive mass production.\n[…]\nGerman-Bohemian engineer Ferdinand Porsche and his team were generally known as the original designers of the Volkswagen. However, there has been debate over whether he was the original designer. Rumours circulated suggesting that other designers, such as Béla Barényi, Paul Jaray, Josef Ganz and Hans Ledwinka, may have influenced its design.\n[…]\nThe In-Depth History of the Volkswagen Super Beetle"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_Porsche",
        "situacao": "ok",
        "texto": "Ferdinand Porsche (3 September 1875 – 30 January 1951) was an Austrian-German automotive engineer and founder of the Porsche AG. He is best known for creating the first gasoline-electric hybrid vehicle (Lohner-Porsche), the Volkswagen Beetle, the Auto Union racing cars, the Mercedes-Benz SS/SSK, and several other important developments and Porsche automobiles.\n[…]\nDifferences within the French government and objections from the French automotive industry put a halt to the Volkswagen project before it had even begun. On 15 December 1945, French authorities arrested Porsche, Anton Piëch, and Ferry Porsche as war criminals. While Ferry was freed after six months, Ferdinand and Anton were imprisoned first in Baden-Baden and then in Paris and Dijon.\n[…]\nThe Volkswagen plant was completed in 1938 after workers from Italy were brought in. Volkswagen, under Ferdinand Porsche, used and profited from forced labour. That included a large number of Soviets. By early 1945, German nationals comprised only 10% of Volkswagen's workforce.\n[…]\nViews of Ferdinand Porsche have been polarised in the postwar years. Though he was recognised and honoured for his contributions to the automotive and engineering industries, with Volkswagen Group – which his heirs control – being the second-largest car manufacturer in the world, he was also criticised for his significant involvement in the Nazi regime, having contributed to the Nazi cause through his production of military vehicles and weapons systems used during World War II.\n[…]\nArthur Constantin Krebs, managing director of Panhard, with whom Ferdinand Porsche designed a hybrid car.\n[…]\nFerdinand Porsche Birth House Škoda Museum\n[…]\nFerdinand Porsche at Find a Grave\n[…]\nWest Ham's Cedes Stoll Trolleybus Porsche design\n[…]\nNewspaper clippings about Ferdinand Porsche in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Typ_1",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil), Carocha (em Portugal) ou VW Käfer (em linguagem coloquial na Alemanha), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido \n[…]\nA história do Fusca é uma das mais complexas e longas da história do automóvel. Em 22 junho de 1934, a União das Indústrias Automotivas (Verband der Automobilindustrie) firmou um contrato com o projetista Ferdinand Porsche para o desenvolvimento de um Volkswagen (\"carro do povo\"). Diferente da maioria dos outros carros, o projeto do Fusca envolveu várias empresas e até mesmo o governo de seu país, e levaria à fundação de uma fábrica inteira de automóveis no processo.\n[…]\nJá no Brasil, o nome Fusca é um pouco mais peculiar: a origem do nome no Brasil está relacionada com a pronúncia alemã da palavra Volkswagen, que significa \"carro(s) do povo\". O fonema da letra V em alemão é algo como \"fau\" e o W é \"vê\". Ao abreviar a palavra Volkswagen para VW, os alemães falavam \"fauvê\". Logo que o Fusca foi lançado na Alemanha, ficou comum a frase \"Isto é um VW\" (\"Das ist ein VW\"). A abreviação alemã \"fauvê\" logo se transformaria em \"fulque\" e \"fulca\"[carece de fontes]?.\n[…]\nEm Curitiba se fala 'fuqui' ou 'fuque', no Rio Grande do Sul é 'fuca'. Mas em São Paulo, talvez por uma questão de fonética, acrescentaram o 'S' na palavra e o Volkswagen virou Fusca.\"\n[…]\nUm Buggy Baja ou Fusca Baja é um tipo de carro fora de estrada muito popular. É feito á partir de um fusca comum com peças de carros diferentes. É comum no nordeste brasileiro por causa de sua versatilidade em terrenos ruins como em areia ou estrada de terra.\n[…]\nVolkswagen\n[…]\nMotor1.com. Carros para sempre: Fusca \"Itamar\" marcou a volta dos populares",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Big Mac",
      "descricao": "Sanduíche de dois hambúrgueres do McDonald's, criado em 1967 por um franqueado de Pittsburgh."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O Big Mac, criado em 1967 por um franqueado do McDonald's em Pittsburgh, tem dois hambúrgueres e quantas partes de pão?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Big_Mac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Big_Mac",
        "situacao": "ok",
        "texto": "The Big Mac is a brand of hamburger sold by the international fast food restaurant chain McDonald's. It was introduced by a Greater Pittsburgh area franchisee in 1967 and expanded nationwide in 1968, and is  regarded as McDonald's flagship product.\n[…]\nThe Big Mac was created by Jim Delligatti, who stated later he did not invent the Big Mac but merely copied the double deck hamburger marketed by the Big Boy hamburger chain since the 1940s. Delligatti operated several McDonald's restaurants in the Pittsburgh area. It was created in the kitchen of Delligatti's first McDonald's franchise, located on McKnight Road in suburban Ross Township.\n[…]\nThe Big Mac debuted at the McDonald's owned by Delligatti in Uniontown, Pennsylvania, on April 22, 1967, selling for US$0.45 (equivalent to $4.35 in 2025). It was designed to compete with Big Boy Restaurants' Big Boy hamburger. Eat'n Park was the Pittsburgh area's Big Boy franchisee at the time. The Big Mac proved popular and it was added to the menu of all U.S. McDonald's restaurants in 1968.\n[…]\nThe Double Big Mac is the biggest regular hamburger the chain produces and it has 680 calories.\n[…]\nThe Big Mac is a geographically localized product. In the United States, the Big Mac has 580 kcal (2,400 kJ), 34 grams of fat and 25 grams of protein. In Australia, it is slightly smaller with 559 kcal (2,340 kJ) and 26.9 grams of fat, but similar amounts of protein with 25.2 grams, while the Japanese burger tops out the scales at 557 kcal and 30.5 grams of fat. Several McDonald's subsidiaries adapt the standard features of the Big Mac (from the US) to regional requirements.\n[…]\nBig Jack (Hungry Jack's), subject of a trademark infringement lawsuit filed by McDonald's."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Big_Mac",
        "situacao": "ok",
        "texto": "O Big Mac é uma marca de hambúrguer com queijo vendido pela cadeia internacional de fast food McDonald's. Introduzido por um franqueado da região da Grande Pittsburgh em 1967 e expandido para todo o território dos Estados Unidos em 1968, é amplamente considerado o produto principal da empresa. Um dos mais vendidos da empresa, é comercializado desde 1968.\n[…]\nO hambúrguer é composto por um pão de três fatias com gergelim contendo dois hambúrgueres de carne bovina de 1,6 oz (45 g), uma fatia de queijo, alface desfiada, picles, cebola picada e um molho do tipo molho Thousand Island anunciado como \"molho especial\". Esses ingredientes são anunciados com uma propaganda e um jingle clássico do McDonald’s: «Dois hambúrgueres de carne, molho especial, alface, queijo, picles, cebolas – num pão com gergelim».\n[…]\nO Big Mac foi criado por Jim Delligatti, que mais tarde afirmou não ter inventado o Big Mac, mas apenas copiado o hambúrguer de dois andares comercializado pela rede Big Boy desde os anos 1940. Delligatti operava vários restaurantes McDonald's na região de Pittsburgh. O sanduíche foi criado na cozinha da sua primeira franquia, localizada na McKnight Road, no subúrbio de Ross Township.\n[…]\nO Big Mac é composto por dois hambúrgueres de carne bovina de 1,6 oz (45 g), “molho especial” (semelhante ao molho Thousand Island), alface iceberg desfiada, uma fatia de queijo americano processado, dois picles de pepino em rodelas e cebola picada, servido num pão de três fatias com gergelim. A 1 de outubro de 2018, o McDonald's anunciou que removeria todos os conservantes, aromatizantes e corantes artificiais do Big Mac.\n[…]\nChicken Big Mac: versão com dois hambúrgueres de frango panado.\n[…]\nGiga Big Mac (Japão): três vezes a quantidade de carne.\n[…]\nTeen Burger (A&W) não é um hambúrguer de dois andares como o Big Mac, mas seu \"molho teen\" é semelhante ao molho Big Mac.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Audi",
      "descricao": "Montadora alemã de automóveis fundada por August Horch em 1909."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "As argolas do logotipo da Audi representam as fabricantes que se uniram na antiga Auto Union. Quantas argolas são?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Audi",
      "https://en.wikipedia.org/wiki/Auto_Union"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Audi",
        "situacao": "ok",
        "texto": "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a wholly owned subsidiary of the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.\n[…]\nThe company name is based on the Latin translation of the surname of the founder, August Horch. Horch, meaning 'listen, hark' in German, translates to audi in Latin. The four rings of the Audi logo each represent one of four car companies that banded together to create Audi's predecessor company, Auto Union. Audi's slogan is Vorsprung durch Technik, which is translated as 'Progress through Technology'. Audi became a sister to Dr. Ing. h.c. F.\n[…]\nAudi has competed in various forms of motorsports. Audi's tradition in motorsport began with its former company Auto Union in the 1930s. In the 1990s, Audi found success in the Touring and Super Touring categories of motor racing after success in circuit racing in North America.\n[…]\nThe Audi emblem is four overlapping rings that represent the four marques of Auto Union. The Audi emblem symbolises the amalgamation of Audi with DKW, Horch and Wanderer: the first ring from the left represents Audi, the second represents DKW, third is Horch, and the fourth and last ring Wanderer.\n[…]\nThe design is popularly believed to have been the idea of Klaus von Oertzen, the director of sales at Wanderer—when Berlin was chosen as the host city for the 1936 Summer Olympics and that a form of the Olympic logo symbolized the newly established Auto Union's desire to succeed. Somewhat ironically, the International Olympic Committee later sued Audi in the International Trademark Court in 1995, where it lost.\n[…]\nVolkswagen Group – parent company of current Audi."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Auto_Union",
        "situacao": "ok",
        "texto": "Auto Union AG was an amalgamation of four German automobile manufacturers, founded in 1932 and established in 1936 in Chemnitz, Saxony. It is the immediate predecessor of Audi as it is known today.\n[…]\nThe current corporate entity which bears the Auto Union name, Auto Union GmbH, was founded in 1985 and is a wholly owned subsidiary of Audi AG; its purpose is to act as owner of Auto Union's historical trademarks and intellectual property, as well as managing Audi's heritage operations. The company's distinctive logo of four interlocking rings to represent the original four members of the Auto Union survives as the logo of Audi.\n[…]\nAfter being merged with Neckarsulm car maker NSU, the official name became Audi NSU Auto Union AG, which was simply shortened to Audi AG in 1985, ending both the Auto Union and NSU brands. The company's headquarters returned to Ingolstadt; at the same time Audi formed the new companies Auto Union GmbH, and NSU GmbH as wholly owned subsidiaries whose function was to own and protect the historical trademarks and intellectual property of both Auto Union and NSU.\n[…]\nThe trademark symbol of Auto Union (and present-day Audi), the four overlapping rings, symbolized the four marques forming Auto Union: Audi, DKW, Horch, and Wanderer.\n[…]\nClarke, R.M., ed. (1986). On Audi & Auto Union 1952-1980. Road & Track Series. Cobham, Surrey, UK: Brooklands Books. ISBN 0948207876.\n[…]\nWard, Rod (2015). Auto Union: Audi, Horch, Wanderer, DKW, Framo (and NSU). Auto Review series, no. 112. Leeds, UK: Zeteo Publishing. OCLC 919299525.\n[…]\nAudi History\n[…]\nAUTO UNION Sales Brochures 1939\n[…]\nAuto Union Historic site\n[…]\nDocuments and clippings about Auto Union in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Audi",
        "situacao": "ok",
        "texto": "Audi é uma empresa automobilística alemã de veículos de luxo, parte do Grupo Volkswagen. A empresa controla a Bentley, Ducati e Lamborghini, sendo consideradas marcas de luxo do Grupo Audi.\n[…]\nAs quatro argolas unidas representam as marcas alemãs que formaram a Auto Union, fundada em 1928, quando Jørgen Rasmussen, dono da DKW (Dampf-Kraft-Wagen), comprou grande parte das ações da empresa. Naquele mesmo ano, Rasmussen comprou a falida empresa americana Rickenbacker, a qual produzira modelos com blocos V8, os quais seriam utilizados nas próximas geração da Audi, com os modelos Zwickau e Dresden, lançados em 1929.\n[…]\nAs quatro argolas surgem quando, em 1932, a Auto Union adquire mais duas empresas: A Wanderer e, curiosamente, a Horch, nascendo o símbolo das Quatro Argolas, originário da fusão entre as quatro empresas de automóvel. Com o fim da II Guerra, houve a separação alemã: nasciam a Alemanha Oriental e a Alemanha Ocidental - respectivamente, Comunista e Capitalista.\n[…]\nExtinguiam-se, então, a Audi e a Horch, enquanto a Wanderer se dedicou a fabricar outros produtos, como geladeiras.\n[…]\nAté 1964, a DKW estava sob a propriedade da Daimler-Benz, quando a Volkswagen a adquire em definitivo. Era quando havia um novo projeto de motor de quatro cilindros e quatro tempos para o futuro modelo DKW F103, o qual jamais existiu. Sabendo da ligação do DKW ao motor de dois cilindros, a VW decidiu ressuscitar a marca Audi, lançando o DKW F103 sob a marca Audi. Nasce o modelo simplesmente chamado de Audi.\n[…]\nAuto Union\n[…]\n«Página da Audi de Portugal». www.audi.pt\n[…]\n«Página da Audi Brasil». www.audi.com.br\n[…]\nEstadão. Jornal do Carro. Museum Mobile: Conheça o museu da Audi, na Alemanha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.67 — 2026-10-13**
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
