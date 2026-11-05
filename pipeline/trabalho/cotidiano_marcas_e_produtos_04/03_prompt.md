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
      "nome": "Pepsi",
      "descricao": "Refrigerante de cola criado em New Bern, na Carolina do Norte, no fim do século dezenove."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O farmacêutico Caleb Bradham batizou a Pepsi pensando numa promessa da bebida. Ela supostamente ajudava em quê?",
    "resposta": "Na digestão",
    "distratores": [
      "No sono",
      "Na memória",
      "Na respiração"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pepsi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pepsi",
        "situacao": "ok",
        "texto": "Pepsi is a carbonated soft drink with a cola flavor, the flagship product of PepsiCo. In 2023, Pepsi was the second most valuable soft drink brand worldwide behind Coca-Cola; the two share a long-standing rivalry in what has been called the \"cola wars\".\n[…]\nPepsi, originally created in 1893 by Caleb Bradham and named \"Brad's Drink,\" was first sold in his drugstore in New Bern, North Carolina. Renamed \"Pepsi-Cola\" in 1898 due to its supposed digestive benefits, its name was shortened in marketing to \"Pepsi\" as early as 1951. Early on, Pepsi struggled with financial stability, going bankrupt in 1923 but was subsequently purchased and revived by Charles Guth, who reformulated the syrup.\n[…]\nPepsi was invented in 1893 as \"Brad's Drink\" by Caleb Bradham, who sold the drink at his drugstore in New Bern, North Carolina. Bradham sought to create a fountain drink that was appealing and would aid in digestion and boost energy.\n[…]\nIt was renamed \"Pepsi-Cola\" in 1898 due to its formula's inclusion of essence of pepsin. This was a then-common medicinal preparation made from the digestive enzyme pepsin, with glycerin and a mild alcohol added. It was often used as an additive to make bitter medicines palatable, as well as for curdling milk.\n[…]\nAccording to Beverage Digest's 2008 report on carbonated soft drinks, PepsiCo's U.S. market share is 30.8 percent, while The Coca-Cola Company's is 42.7 percent (this includes all their respective brands). Coca-Cola outsells Pepsi in most parts of the U.S., notable exceptions being central Appalachia, Montana, North Dakota, and Utah. In the city of Buffalo, New York, Pepsi outsells Coca-Cola by a two-to-one margin.\n[…]\nStoddard, Bob. Pepsi-Cola – 100 Years (1997), General Publishing Group, Los Angeles, California"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pepsi",
        "situacao": "ok",
        "texto": "Pepsi é um refrigerante gaseificado com sabor de cola, fabricado pela PepsiCo. Foi originalmente criado e desenvolvido em 1893 por Caleb Bradham nos Estados Unidos e tornou-se conhecido como Pepsi-Cola em 1898, antes de ser abreviado para Pepsi em 1961. Em 2023, era a segunda marca de refrigerantes mais valiosa do mundo, atrás apenas da Coca-Cola; ambas compartilham uma rivalidade de longa data no\n[…]\nA Pepsi foi inventada pela primeira vez em 1893 com o nome de \"Brad's Drink\" por Caleb Bradham, que vendia a bebida em sua drogaria em New Bern, Carolina do Norte, Estados Unidos.\n[…]\nFoi renomeada como \"Pepsi-Cola\" em 1898, \"Pepsi\" porque era anunciada para aliviar a dispepsia (indigestão) e \"Cola\" referindo-se ao sabor de cola. Alguns também sugeriram que o termo \"Pepsi\" pode ter sido uma referência à bebida que auxilia na digestão, como a enzima digestiva pepsina, mas a própria pepsina nunca foi usada como ingrediente da Pepsi-Cola. A receita original também incluía açúcar e baunilha.\n[…]\nBradham procurou criar uma bebida fonte que fosse atraente e ajudasse na digestão e aumentasse a energia.\n[…]\nEm 1934 a companhia lançou a garrafa de vidro de 355 mL,  que era vendida a 5 centavos de dólar, o mesmo valor pago pelas garrafas de 177 mL que era o padrão da concorrência. As vendas iniciaram na cidade de Baltimore, no estado americano de Maryland, sendo um sucesso de vendas em plena Grande Depressão americana. Em virtude das vendas, a empresa reiniciou suas atividades no Canadá. No mesmo ano, o inventor da bebida, Caleb Bradham, morre aos 66 anos de idade.\n[…]\nEm 1950, a Pepsi já era importada, dos Estados Unidos para uma loja do Rio Grande do Sul. Em 1952, foi inaugurada em Porto Alegre a fábrica brasileira de refrigerantes Refrigerantes Sul Rio-Grandense S.A., propriedade do imigrante português Heitor Pires, que começou a produzir a Pepsi-Cola em Porto Alegre.\n[…]\nIce Cola\n[…]\nCoca-Cola\n[…]\nBebida de cola",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Coca-Cola",
      "descricao": "Refrigerante de cola criado em Atlanta, nos Estados Unidos, em 1886."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Coca-Cola vem de dois ingredientes da fórmula original: as folhas de coca e qual semente africana rica em cafeína?",
    "resposta": "Noz-de-cola",
    "distratores": [
      "Semente de cacau",
      "Grão de café",
      "Semente de guaraná"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coca-Cola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coca-Cola",
        "situacao": "ok",
        "texto": "Coca-Cola, or Coke, is a cola soft drink manufactured by the Coca-Cola Company. In 2013, Coke products were sold in over 200 countries and territories worldwide, with consumers drinking more than 1.8 billion company beverage servings each day. Coca-Cola ranked No. 94 in the 2024 Fortune 500 list of the largest United States corporations by revenue. Based on Interbrand's \"best global brand\" study o\n[…]\nThe exact formula for Coca-Cola's natural flavorings is a trade secret. (All of its other ingredients are listed on the side of the bottle or can, and are not secret.) The original copy of the formula was held in Truist Financial's main vault in Atlanta for 86 years. Its predecessor, the Trust Company, was the underwriter for the Coca-Cola Company's initial public offering in 1919.\n[…]\nThis is a list of variants of Coca-Cola introduced around the world. In addition to the caffeine-free version of the original, additional fruit flavors have been included over the years. Not included here are versions of Diet Coke and Coca-Cola Zero Sugar; these variant versions of those no-calorie colas can be found in their respective articles.\n[…]\nBeginning in the 1940s, PepsiCo started marketing their drinks to African Americans, a niche market that was largely ignored by white-owned manufacturers in the US, and was able to use its anti-racism stance as a selling point, attacking Coke's reluctance to hire blacks and support by the chairman of the Coca-Cola Company for segregationist Governor of Georgia Herman Talmadge.\n[…]\nAs a result of this campaign, PepsiCo's market share as compared to Coca-Cola's shot up dramatically in the 1950s with African American soft-drink consumers three times more likely to purchase Pepsi over Coke.\n[…]\nElmore, Bartow J. (2017). Citizen Coke: The Making of Coca-Cola Capitalism. W. W. Norton & Company.\n[…]\nCoca-Cola: Refreshing Memories – slideshow by Life"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coca-Cola",
        "situacao": "ok",
        "texto": "Coca-Cola é um refrigerante carbonatado vendido em lojas, restaurantes, mercados e máquinas de venda automática em todo o mundo. Ele é produzido pela The Coca-Cola Company, sediada em Atlanta, Estados Unidos, e é muitas vezes referido apenas como Coca-Cola (a marca registrada da empresa Coca-Cola nos Estados Unidos desde 27 de março de 1944).\n[…]\nEm 1887, em seu primeiro ano de operação foram vendidos somente 25 galões de Coca-Cola, o que correspondia a 9 copos por dia, o que rendeu 50 dólares, tornando-se um prejuízo. Em 1888, devido a problemas de saúde e financeiros, Pemberton foi obrigado a vender a fórmula, pelo total de 1 750 dólares e, acabou falecendo, no dia 16 de agosto, dois anos após ter inventado a bebida que acabaria por se tornar um dos maiores símbolos americanos.\n[…]\nO refrigerante Coca-Cola normal tem como ingredientes, aromatizantes naturais, água gaseificada, açúcar, cafeína, extrato de Noz de cola, corante caramelo IV, acidulante Ácido Fosfórico (INS 338). É um produto não alcoólico, sem glúten e não contém quantidades significativas de proteínas, gorduras totais, gorduras saturadas, gorduras trans e fibras alimentares.\n[…]\nEntretanto, a informação sobre o risco de câncer desse ingrediente da Coca-Cola ainda não consta nas embalagens.\n[…]\nDesde 1980, nos Estados Unidos, a Coca-Cola tem sido feita com xarope de milho rico em frutose como ingrediente. Originalmente, ele era usado em combinação com mais açúcar de cana, mas no final de 1984, a formulação foi adoçado inteiramente com o xarope de milho. Alguns nutricionistas alertam contra consumo do xarope de milho, pois pode agravar a obesidade e diabetes tipo 2 mais do que o açúcar da cana.\n[…]\nSite da Coca-Cola Portugal\n[…]\nA história da Coca-Cola no mundo Arquivado em 24 de junho de  2010, no Wayback Machine.\n[…]\n«Twitter oficial da Coca-Cola» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Nike",
      "descricao": "Empresa americana de calçados e artigos esportivos fundada por Phil Knight e Bill Bowerman, dona do logotipo Swoosh."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A marca esportiva Nike tem o nome de uma deusa grega. O que essa deusa personificava?",
    "resposta": "A vitória",
    "distratores": [
      "A sabedoria",
      "A velocidade",
      "A coragem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nike,_Inc.",
      "https://en.wikipedia.org/wiki/Nike_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.\n[…]\nThe company was founded on January 25, 1964, as \"Blue Ribbon Sports\", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory. Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding and Nike CR7. The company also sells products under its Air Jordan brand and its Converse subsidiary.\n[…]\nNike, originally known as Blue Ribbon Sports (BRS), was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 1964. The company initially operated in Eugene, Oregon, as a distributor for Japanese shoemaker Onitsuka Tiger, making most sales at track meets out of Knight's automobile.\n[…]\nBowerman's design led to the introduction of the \"Moon Shoe\" in 1972, so named because the waffle tread was said to resemble the footprints left by astronauts on the Moon. Further refinement resulted in the \"Waffle Trainer\" in 1974, which helped fuel the explosive growth of Blue Ribbon Sports/Nike.\n[…]\nSince 1993, Nike has worked on its Reuse-A-Shoe program. This program is Nike's longest-running program that benefits both the environment and the community by collecting old athletic shoes of any type in order to process and recycle them. The material that is produced is then used to help create sports surfaces such as basketball courts, running tracks, and playgrounds."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nike_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology and ancient religion, Nike (Ancient Greek: Νίκη, lit. 'Victory') is the personification of the abstract concept of victory. She was the goddess of victory in battle, as well as in other kinds of contests. According to Hesiod's Theogony, she is the daughter of Styx and the Titan Pallas, and the sister of similar personifications: Zelus, Kratos, and Bia (i.e. Rivalry, Strength, an\n[…]\nThe first to do so was Styx, who brought Zeus her children: Nike, the personification of victory, and her brothers Zelus, Kratos, and Bia, the personifications of glory, power and strength. Nike and her siblings all represented qualities which would be invaluable to Zeus in the coming war. As a result, Zeus forever honored Nike and her brothers keeping them always with him. And as such, the qualities represented by Nike and her brothers would become attributes of Zeus himself.\n[…]\nSeveral examples, from as early as the third century BC, depict Nike striding forward on the prow of a ship, perhaps reflecting the increasing importance of naval battles during the wars between the Diadochi. Coins of the Macedonian king Demetrios Poliorketes (r. 301–285), depict such a striding Nike blowing into a military trumpet (salpinx). The Nike of Samothrace (\"Winged victory\"), a masterpiece of Hellenistic sculpture, also shows such a Nike on the prow of a warship.\n[…]\nNike is depicted on the second-century BC Pergamon Altar alongside Athena in the Gigantomachy, the war of the gods against the Giants. On the right side of the East frieze, Athena grabs a winged Giant (usually identified as Alcyoneus) by the hair. Below and to the right of Athena, the giant's mother Gaia rises from the ground, touching Athena's robe in supplication. Above Gaia, a winged Nike flies in to crown the victorious Athena.\n[…]\nThe Warburg Institute Iconographic Database (images of Nike)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nike%2C_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. é uma empresa estadunidense de calçados e vestuário esportivos sediada nas proximidades de Beaverton, no Oregon. É a maior fornecedora mundial de calçados esportivos e vestuário e uma importante fabricante de equipamentos esportivos, com receita superior a US$ 46 bilhões em seu ano fiscal de 2022.\n[…]\nA empresa foi fundada em 25 de janeiro de 1964, como \"Blue Ribbon Sports\", por Bill Bowerman e Phil Knight, e tornou-se oficialmente Nike, Inc. em 30 de maio de 1971. A empresa recebeu seu nome de Nice, a deusa grega da vitória. A Nike comercializa seus produtos sob sua própria marca, bem como sob Nike Golf, Nike Pro, Nike+, Nike Blazer, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding e Nike CR7. A empresa também vende produtos sob sua marca Air Jordan e sua subsidiária Converse.\n[…]\nA Nike, originalmente conhecida como Blue Ribbon Sports (BRS), foi fundada pelo atleta de atletismo da Universidade de Oregon Phil Knight e por seu treinador, Bill Bowerman, em 25 de janeiro de 1964. A empresa operava inicialmente em Eugene, no Oregon, como distribuidora da fabricante japonesa de calçados Onitsuka Tiger, realizando a maior parte das vendas em competições de atletismo a partir do automóvel de Knight.\n[…]\nO projeto de Bowerman levou ao lançamento do \"Moon Shoe\" em 1972, assim chamado porque se dizia que o padrão em forma de waffle da sola lembrava as pegadas deixadas por astronautas na Lua. Um aperfeiçoamento posterior resultou no \"Waffle Trainer\", em 1974, que ajudou a impulsionar o rápido crescimento da Blue Ribbon Sports/Nike.\n[…]\nA Nike produz uma ampla variedade de equipamentos e vestuário esportivos.\n[…]\nEm janeiro de 2023, um estudo da Rakuten concluiu que a Nike era a marca de roupas esportivas mais popular nos Estados Unidos, seguida por Lululemon e Adidas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Volkswagen",
      "descricao": "Montadora alemã de automóveis fundada em 1937, sediada em Wolfsburg, fabricante do Fusca."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em alemão, o que significa o nome da montadora Volkswagen?",
    "resposta": "Carro do povo",
    "distratores": [
      "Carro de corrida",
      "Carro do futuro",
      "Carro da Alemanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen",
        "situacao": "ok",
        "texto": "Volkswagen (German pronunciation: [ˈfɔlksˌvaːɡŋ̍] ), commonly abbreviated to VW, is a German automobile brand based in Wolfsburg, Lower Saxony, Germany. Established in 1937 by the German Labour Front, it was revived after World War II by British Army officer Ivan Hirst and grew into a global brand. As of 2025, the company had a market capitalization of approximately US$58.9 billion.\n[…]\nIn September 2019 at the Frankfurt Motor Show, Volkswagen officially unveiled a refreshed logo (a thinner, two-dimensional version of the previous logo) and new sonic branding to accompany the newly launched ID.3 electric vehicle. Volkswagen stated that the ID.3 signified the start of a \"new era\" of the company. In September 2019, Volkswagen also announced a program to allow old Beetle models to be converted to run on electric power.\n[…]\nUntil 2022, Volkswagen was a market leader in China, the largest single automotive market in the world. In 2019, 3.16 million Volkswagen-branded vehicles were delivered in the country. The importance of the market has justified a significant amount of China-specific models. Though Volkswagen was long a leader in the Chinese market, its market share declined in the 2020s due to the rapid adoption of electric vehicles and increasing competition from Chinese brands.\n[…]\nVolkswagen won the 2009, 2010 and 2011 Dakar Rally, held in South America.\n[…]\nArgentina: Many Volkswagen models have competed in TC 2000, including the 1980 to 1983 champion Volkswagen 1500 and the 1994 champion Volkswagen Gol.\n[…]\nWerner Oswald: Deutsche Autos, Band 3, 1945–1990, Ford, Opel und Volkswagen. 1. Auflage. Motorbuch Verlag, Stuttgart 2001, ISBN 3-613-02116-1.\n[…]\nVolkswagen is the owner of the 2. Bundesliga club Vfl Wolfsburg.\n[…]\nVolkswagen.com Volkswagen Cars Worldwide portal\n[…]\nVolkswagen Classic (in German)\n[…]\nVolkswagen Cars Technical Information\n[…]\nAir-cooled Volkswagen History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen",
        "situacao": "ok",
        "texto": "Volkswagen (VW) é uma fabricante de automóveis alemã que pertence ao Grupo Volkswagen. Sua sede principal fica na cidade de Wolfsburg. Em 2015, tomou o posto de maior fabricante de automóveis do mundo.\n[…]\nVolkswagen (pronuncia-se AFI: [ˈfɔlksˌvaːɡən]) é uma palavra que, em língua alemã, significa \"carro do povo\". Mas é normalmente referida pela abreviatura VW. Seu slogan comercial atual é Das Auto, expressão em alemão que significa \"O Carro\".\n[…]\nEm 1933, Adolf Hitler visitou o Salão Internacional do Automóvel de Berlim e viu, no Volkswagen, uma forma eficiente de propaganda nazista, e passou a defender a ideia de carro do povo como se fosse sua. Josef Ganz e Edmund Rumpler foram cogitados para dirigir o projeto, mas logo foram descartados por serem judeus.\n[…]\nCerca de 336 mil pessoas pagaram pelo modelo, e protótipos do carro, chamados em alemão KdF-Wagen (KDF significa Kraft durch Freude, em português, \"força através da alegria\", um dos lemas do Partido Nacional Socialista dos Trabalhadores Alemães, o conhecido Partido Nazista), surgiram a partir de 1936, sendo os primeiros modelos produzidos em Stuttgart. O carro já possuía as curvas de seu formato característico e o motor refrigerado a ar, de quatro cilindros, montado na traseira, similar ao Tatra.\n[…]\nEm 2002, a empresa alemã - cujo nome traduzido ao português significa \"carro do povo\" - lançou dois automóveis para o segmento de alto luxo: a limusine Phaeton (como se chamam os sedãs na Alemanha, seu maior mercado) e o SUV Volkswagen Touareg.\n[…]\n(em alemão) Pagina principal da Volkswagen AG\n[…]\nPagina principal da Volkswagen do Brasil\n[…]\nPagina principal da Volkswagen Autoeuropa, Portugal\n[…]\nVolkswagen: Serviços financeiros\n[…]\nFundação Volkswagen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Samsung",
      "descricao": "Conglomerado sul-coreano fundado em 1938 por Lee Byung-chul, conhecido por eletrônicos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Fundada em 1938, a sul-coreana Samsung tem um nome que, em coreano, significa o quê?",
    "resposta": "Três estrelas",
    "distratores": [
      "Sol nascente",
      "Montanha sagrada",
      "Dragão dourado"
    ],
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
        "texto": "Samsung, ou Grupo Samsung, é um conglomerado multinacional sul-coreano com sede em Seul. Reúne empresas de eletrônicos, construção, seguros e outros setores, em sua maioria sob a mesma marca. É o maior Chaebol da Coreia do Sul, nome dado aos grupos empresariais do país controlados por famílias.\n[…]\nO nome coreano Samsung, escrito 삼성 em hangul e 三星 em Hanja, significa \"três estrelas\". Na escolha de Lee Byung-chul, o número três expressava grandeza, abundância e poder, enquanto as estrelas expressavam a intenção de criar uma empresa duradoura. A grafia comercial também utiliza a forma SΛMSUNG.\n[…]\nEm 1938, durante a ocupação japonesa da Coreia, Lee Byung-chul, de uma família de proprietários de terras de Uiryeong, mudou-se para Daegu e fundou a Samsung Sanghoe. A empresa também tinha a denominação japonesa Mitsuboshi Shōkai, correspondente a \"comércio das três estrelas\". Começou com quarenta empregados em Su-dong, depois chamado Ingyo-dong, vendendo peixe seco, alimentos produzidos na região e macarrão.\n[…]\nEm maio de 2025, o United Auto Workers passou a representar os empregados da StarPlus Energy, sociedade da Samsung SDI com a Stellantis em Indiana, nos Estados Unidos. Em novembro, três sindicatos da Samsung Electronics formaram uma coalizão que defendia eliminar os limites dos bônus por desempenho e destinar aos empregados 15% do lucro operacional anual. O Samsung Electronics Labor Union, maior dos três, assumiu a representação nas negociações.\n[…]\nLee Kun-hee foi condenado a três anos de prisão, com suspensão da execução por cinco anos, e ao pagamento de uma multa de 11 bilhões de wons. Em 29 de dezembro de 2009, o presidente Lee Myung-bak concedeu-lhe um perdão especial e justificou a decisão pela possibilidade de Lee permanecer no Comitê Olímpico Internacional.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Volvo",
      "descricao": "Marca sueca de automóveis e veículos pesados, fundada em Gotemburgo em 1927."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em latim, o que significa a palavra volvo, que dá nome à montadora sueca?",
    "resposta": "Eu rolo",
    "distratores": [
      "Eu voo",
      "Eu corro",
      "Eu venço"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Volvo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volvo",
        "situacao": "ok",
        "texto": "Aktiebolaget Volvo ([ˈakːsɪɛbʊˌlɑːɡɛt ˈvɔlːvʊ]; shortened to AB Volvo [ˈoːˈbeː ˈvɔlːvʊ]), doing business as Volvo Group (Swedish: Volvokoncernen, pronounced [ˈvɔlːvʊkɔnˌsæːɳɛn]; stylized as VOLVO) is a Swedish multinational manufacturing corporation headquartered in Gothenburg. While its core activity is the production, distribution and sale of trucks, buses and construction equipment, Volvo also \n[…]\nBoth AB Volvo and Volvo Cars share the Volvo logo and cooperate in running the World of Volvo museum in Gothenburg, Sweden.\n[…]\nThe first truck, the \"Series 1\", debuted in January 1928 as an immediate success, and attracted attention outside the country. In 1930, Volvo sold 639 cars, and the export of trucks to Europe started soon after; the cars did not become well known outside Sweden until after World War II. AB Volvo was introduced at the Stockholm Stock Exchange in 1935 and SKF then decided to sell its shares in the company.\n[…]\nIn 2017 Volvo Cars owner Geely became the largest Volvo shareholder by number of shares after acquiring an 8.2% stake, displacing Industrivärden. Industrivärden kept more voting rights than Geely (Geely getting 15.8% of voting rights).\n[…]\nIn the early part of that period Volvo also started to venture into vehicles other than passenger cars and road-going commercial vehicles by acquiring the Eskilstuna plant (Bolinder-Munktell). From the 1970s onwards, Volvo set up various facilities in Bengtsfors, Lindesberg, Vara, Tanumshede, Färgelanda, and Borås, most of them within a 150-kilometer radius of Gothenburg, and gradually acquired the Dutch DAF car plants. It also established its first South American plant in Curitiba, Brazil.\n[…]\nIt also acts against unauthorised registration and use (including counterfeiting) of trademarks identical or similar to the Volvo trademarks on a global basis.\n[…]\nOfficial Volvo Group website\n[…]\nOfficial Volvo website – for Volvo-branded companies."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volvo",
        "situacao": "ok",
        "texto": "Volvo (em sueco:  Volvokoncernen; legalmente Aktiebolaget Volvo, abreviado para AB Volvo, estilizado como VOLVO) é uma empresa sueca, (não confundir com a Volvo Cars que é de propriedade chinesa) fundada em 1927, pelo engenheiro Gustav Larson e o economista Assar Gabrielsson na cidade de Gotemburgo. Em latim, Volvo significa \"eu rodo\" (em sueco: jag rullar) ou, por analogia, \"eu guio\".\n[…]\nA marca também é dona da Mack Trucks. A maior atividade da AB Volvo é a produção de caminhões/camiões – 64%, seguida da produção de equipamentos para construção – 21%.\n[…]\nEm 1999, a Volvo Cars - em sueco Volvo PV - deixou de fazer parte do grupo e foi vendida à Ford Motor Company. No dia 28 de março de 2010, a Ford acertou a venda da Volvo para a chinesa Zhejiang Geely Holdin Group, em uma transação envolvendo US$ 1,8 bilhão.\n[…]\nEm 2013, a AB Volvo assinou um acordo de cooperação com a empresa chinesa Dongfeng Motor Group, sendo o novo consórcio o maior fabricante de caminhões/camiões do mundo.\n[…]\nA Volvo iniciou as suas atividades em 14 de Abril de 1927 na cidade de Gotemburgo, capital do condado de Västra Götaland, na Suécia.\n[…]\nA maior contribuição da Volvo ao automobilismo foi a invenção do cinto de segurança de três pontos, introduzido em 1959.\n[…]\nEm 27 de março de 2024, produziu o último carro com motor a gasóleo, um Volvo XC90 na fábrica da Volvo Cars em Torslanda, na Suécia, e que seguiu diretamente para o museu da marca em Gotemburgo.\n[…]\nVolvo Cars\n[…]\nVolvo Buses\n[…]\n«Volvo Group» (em inglês)\n[…]\n«Volvo do Brasil»\n[…]\n«Grupo Volvo». em Portugal\n[…]\n«Volvo Cars» (em inglês)\n[…]\n«Volvo Cars». no Brasil\n[…]\n«Volvo Cars». em Portugal\n[…]\n«Volvo Amazon / P1800 / PV». www.volvo-classics.com\n[…]\n«Primeira página em português dedicada ao Volvo P1800». www.avantec.net\n[…]\nVolvo na Estrada. Globetrotter, uma revolução na cabine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Xerox",
      "descricao": "Empresa americana de copiadoras, sediada originalmente em Rochester, cujo nome virou sinônimo de fotocópia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Xerox, que no Brasil virou sinônimo de fotocópia, vem de uma palavra grega que significa o quê?",
    "resposta": "Seco",
    "distratores": [
      "Cópia",
      "Luz",
      "Rápido"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Xerography",
      "https://en.wikipedia.org/wiki/Xerox"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xerography",
        "situacao": "ok",
        "texto": "Xerography (from the Greek roots ξηρός xeros, meaning \"dry\" and -‍γραφία -‍graphia, meaning \"writing\") is a technique of printing and photocopying. Originally called electrophotography, it was renamed to emphasize that it uses no liquid chemicals, unlike reproduction techniques then in use such as cyanotype.\n[…]\nIt was almost 18 years before a fully automated process was developed, the key breakthrough being the use of a cylindrical drum coated with selenium instead of a flat plate. This resulted in the first commercial automatic copier, the Xerox 914, being released by Haloid/Xerox in 1960.\n[…]\nThe end-to-end dimension is the width of print to be produced plus a generous tolerance. The drums in the copiers originally developed by Xerox Corporation were manufactured with a surface coating of amorphous selenium (more recently ceramic or organic photoconductor), applied by vacuum deposition. Amorphous selenium will hold an electrostatic charge in darkness and will conduct away such a charge under light.\n[…]\nIn the original system, photocopiers that rely on silicon or selenium (and its alloys) are charged positively in use (hence work with negatively charged \"toner\" powder). In the 1970s, IBM Corporation sought to avoid Xerox's patents for selenium drums by developing organic photoconductors as an alternative to the selenium drum. Photoconductors using organic compounds  are electrochemically charged vice versa to the preceding system in order to exploit their native properties in printing.\n[…]\nOrganic photoconductors are now preferred because they can be deposited on a flexible, oval or triangular, belt instead of a round drum, facilitating significantly smaller device  size."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Xerox",
        "situacao": "ok",
        "texto": "Xerox Holdings Corporation (, ZEER-oks) is an American corporation that sells printers, digital document products, and services in more than 160 countries. Xerox was the pioneer of the photocopier market, beginning with the introduction of the Xerox 914 in 1959, so much so that the word xerox is commonly used as a synonym for photocopy.\n[…]\nXerox was founded in 1906 in Rochester, New York, as Haloid. It manufactured photographic paper and equipment.\n[…]\nThe complaint alleged Xerox deceived the public between 1997 and 2000 by employing several “accounting maneuvers”, the most significant of which was a change in which Xerox recorded revenue from copy machine leases – recognizing a “sale” when a lease contract was signed, instead of recognizing revenue over the entire length of the contract. At issue was when the revenue was recognized, not the validity of the revenue. Xerox's restatement only changed what year the revenue was recognized.\n[…]\nOn December 20, 2002, Xerox Corporation reported that it had discovered an error in the calculation of its non-cash interest expense related to a debt instrument and associated interest rate swap agreements, resulting in an after-tax understatement of interest expense of approximately $5 million to $6 million, or less than 1 cent per share in each of the four quarters of 2001 and for the first three quarters of 2002.\n[…]\nDuring a settlement with the Securities and Exchange Commission, Xerox began to revamp itself once more. As a symbol of this transformation, the relative size of the word “Xerox” was increased proportionally to “The Document Company” on the corporate signature, and the latter was dropped altogether in September 2004, along with the digital X. However, Fuji Xerox used the digital X and “The Document Company” until April 2008.\n[…]\nBusiness data for Xerox:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xerografia",
        "situacao": "ok",
        "texto": "Xerografia é o processo de reprodução de imagens e/ou texto mediante a utilização da máquina fotocopiadora. Este processo permite recortar, colar, modificar e interferir nas várias formas que se vai obtendo.\n[…]\nO processo é mais conhecido por ser usado por produtos da Xerox (que no Brasil é usada como verbo.)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Marca de fecho de gancho e argola inventado pelo engenheiro suíço George de Mestral nos anos 1940."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Velcro junta duas palavras francesas: a palavra para veludo e a palavra para qual objeto?",
    "resposta": "Gancho",
    "distratores": [
      "Botão",
      "Laço",
      "Agulha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nASTM D5169-98 (2010) Standard Test Method for Shear Strength (Dynamic Method) of Hook and Loop Touch Fasteners\n[…]\nASTM D5170-98 (2010) Standard Test Method for Peel Strength (\"T\" Method) of Hook and Loop Touch Fasteners\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Avon",
      "descricao": "Empresa de cosméticos de venda direta fundada em Nova York em 1886 por David McConnell."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da Avon foi inspirado em Stratford-upon-Avon, cidade inglesa natal de qual escritor admirado pelo fundador?",
    "resposta": "William Shakespeare",
    "distratores": [
      "Charles Dickens",
      "Jane Austen",
      "Lord Byron"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avon_Products"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Avon Products, Inc., doing business as Avon ( AY-von), is an Anglo-American multinational company selling cosmetics, skin care, perfume, and personal care products. It is a multi-level marketing company based in London. In 2020, Avon had annual sales of $9.1 billion worldwide.\n[…]\nOn January 28, 1916, the California Perfume Company was incorporated in the state of New York. McConnell, Henderson, and William Scheele were listed as company officials.\n[…]\nIn 1928, the company began to selling Avon products.\n[…]\nAlthough Avon Products does not practice animal testing of its cosmetics that are sold in the United States, certain specialty products do require extensive testing in other countries. In China, specialty products that require degrees of animal testing include but are not limited to: sunscreen products, whitening/pigmentation products, and hair dye/perm or growth products. Despite laws that require animal testing in some countries, Avon chooses to distribute its products in those jurisdictions.\n[…]\nLaws in various countries require companies to pay for animal testing through a commercial business in order to sell certain products in that country. Because Avon Products is not globally animal-testing free, People for the Ethical Treatment of Animals (PETA) has not included Avon Products on their cruelty-free list.\n[…]\nIn 2019, Avon Products ended all regulatory-required animal testing, making it the first global beauty company selling in China to stop all animal testing of ingredients and products across all its brands by developing new ways to deliver products that do not require animal testing, such as reformulating products. PETA has since announced that it has added Avon Products Inc. to their list of companies \"Working for Regulatory Change\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Fundada pelo empresário David McConnell, a Avon é uma empresa de cosméticos que historicamente fundamentou seu modelo de negócios no sistema de venda direta.\n[…]\nA partir de 2024, a Avon iniciou um processo de reestruturação global. Nos Estados Unidos, a holding original entrou com pedido de proteção contra falência (Chapter 11), o que resultou na transferência de ativos na Europa e Ásia para os fundos Regent LP e Arnest Group entre 2025 e 2026.\n[…]\nCom foco em alinhar o desenvolvimento de itens às preferências do mercado nacional, a Avon transferiu o seu centro global de inovação dos Estados Unidos para o Brasil.\n[…]\nNa área de responsabilidade social, o Instituto Avon atua há mais de 20 anos no fomento à conscientização sobre o câncer de mama e no combate à violência contra mulheres e meninas no Brasil.\n[…]\nDurante o ciclo de 2020 a 2021, em resposta ao aumento de casos de violência doméstica durante a pandemia de Covid-19, o Instituto Avon estabeleceu uma parceria com o Grupo Accor e o Ministério da Saúde, com foco no enfrentamento da violência doméstica durante esse período.\n[…]\nNo setor profissional, o Prêmio Avon de Maquiagem, criado em 1995, atua no reconhecimento de maquiadores em produções audiovisuais e de moda.\n[…]\nA empresa também promove o Prêmio Inspiradoras, focado na valorização de lideranças femininas nas áreas de ciência, economia e enfrentamento à violência. ==Referências==\n[…]\nSite oficial de Avon Angola\n[…]\nSite oficial de Avon Brasil\n[…]\nSite oficial de Avon Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Bibendum",
      "descricao": "Mascote da fabricante francesa de pneus Michelin, criado em 1898."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do Bibendum, mascote da Michelin, vem de um verso latino do poeta Horácio. O que esse verso quer dizer?",
    "resposta": "Agora devemos beber",
    "distratores": [
      "Agora devemos partir",
      "Agora devemos correr",
      "Agora devemos vencer"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Man",
        "situacao": "ok",
        "texto": "Bibendum (French pronunciation: [bibɛ̃dɔm]), commonly referred to in English as the Michelin Man or Michelin Tire Man, is the official mascot of the Michelin tire company. A humanoid figure consisting of stacked white tires, it was introduced at the Lyon Exhibition of 1894 where the Michelin brothers had a stand. He is one of the world's oldest trademarks still in active use. The slogan Nunc est b\n[…]\nCayce Pollard, the main character of William Gibson's novel Pattern Recognition, has a strong aversion to corporate brands and logos. The sight of Bibendum in particular gives her panic attacks.\n[…]\nBibendum made a brief guest appearance in the Asterix series, as the chariot-wheel dealer in certain translations, including the English one, of Asterix in Switzerland. (The original French version used the Gaulish warrior mascot of French service-station company Antar.)\n[…]\nThe mascot appears in a BBC Not the Nine O'Clock News comedy sketch, in which a restaurant waiter and chef suspect a diner, dressed as Bibendum, might be a food critic for the Michelin Guide.\n[…]\nMichelin sued the performance artist Momus in 1991 for releasing a song about the trademarked Michelin Man. The song, simply titled \"Michelin Man\", was released the same year as the third track on his album Hippopotamomus (which also had a hippopotamus-headed version of the Michelin Man on its cover) used the mascot as a metaphor for hypersexual rubber fetishism.\n[…]\nThe use of the Michelin Man in such explicit lyrics were not authorized by the Michelin company, and Momus was sued by the company for depicting their mascot in scenarios of a pornographic nature. As a result, all remaining copies of the album were destroyed, the song was removed from subsequent pressings of the album, and the hippo Michelin Man removed from the cover.\n[…]\nBibimage.com, Unofficial site dedicated to Bibendum. (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bibendum",
        "situacao": "ok",
        "texto": "Bibendum, popularmente conhecido como boneco da Michelin ou homem da Michelin, é o mascote da empresa francesa de pneus  Michelin.\n[…]\nÉ um dos mais antigos mascotes do mundo, criado pelo artista e cartunista francês O'Galop em 1898 para a Exposição Internacional e Colonial em Lyon. O nome tem origem na frase latina \" nunc est bibendum\" (Bebamos agora). Com o passar dos anos fica mais fino.\n[…]\nFoi protagonista no filme de curta-metragem de animação Logorama, onde uma série de Bibendums interpretam detetives de polícia, um xerife e um esquadrão da SWAT que trabalham juntos para tentar derrubar um criminoso psicótico e ultraviolento interpretado por Ronald McDonald.\n[…]\nImages publicitaires du Bibendum Michelin (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ferrero Rocher",
      "descricao": "Bombom de chocolate com avelã e wafer da empresa italiana Ferrero, lançado em 1982."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome do bombom Ferrero Rocher vem de uma gruta de qual santuário católico francês, venerado pelo fundador da empresa?",
    "resposta": "Lourdes",
    "distratores": [
      "Lisieux",
      "Chartres",
      "Mont-Saint-Michel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferrero_Rocher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferrero_Rocher",
        "situacao": "ok",
        "texto": "Ferrero Rocher (UK:  fə-RAIR-oh ROSH-ay, US:  -⁠ roh-SHAY, Italian: [ferˈrɛːro roʃˈʃe]; stylized in all caps) is an Italian brand of chocolate and hazelnut confection manufactured by the Italian company Ferrero. Created by Michele Ferrero in 1979, each Ferrero Rocher ball is covered in foil and placed into a paper liner. The confection is machine-made and much of its production process is kept sec\n[…]\nFerrero Rocher was introduced in 1979 in Italy and in other parts of Europe in 1982. Michele Ferrero, the credited inventor, named the chocolate after a grotto in the Roman Catholic shrine of Lourdes, Rocher de Massabielle. Rocher comes from French and means 'rock' or 'boulder'.\n[…]\nThe production process is a secret, and no smartphones or notebooks are allowed inside the production facilities. As of 2015, few journalists have ever been invited to visit. As of 2015, the production in the Alba factory totals 24 million Ferrero Rochers a day.\n[…]\nFerrero Rochers are associated with the holiday season during Christmas and New Year. As of 2015, 62% of Ferrero Rochers were sold within the last three months of the year.\n[…]\nFerrero Rocher is popular among immigrant communities in the United States due to its relatively low price compared with other luxury goods, along with its upscale appearance and marketing. Before Ferrero Rocher was available in mainland China, it was a popular gift from people in Hong Kong, who nicknamed Rocher \"gold sand\", to people on the mainland around Chinese New Year.\n[…]\nIn 2017, police made several arrests and seized 300,000 pieces of counterfeit Rocher which had been produced in a factory in Wuhu. Ferrero had spent US$1 million and five years fighting Chinese firm Montresor, whose \"Tresor Dore\" chocolates were priced at one-third of the cost of the genuine Rocher; an April 2008 court ruling had previously ordered Montresor to cease production."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferrero_Rocher",
        "situacao": "ok",
        "texto": "Ferrero Rocher é uma marca de bombom de chocolate fabricado e comercializado pelo grupo italiano Ferrero. Tem origem italiana criado em 1946, com intuito de fazer um chocolate diferente dos outros, refinado. É constituído de uma avelã inteira recheada de chocolate, envolvida por wafers e coberta de chocolate com pitadas de avelã. Cada bombom possui cerca de 72 calorias e são embalados tradicionalm\n[…]\nSite da Ferrero no Brasil\n[…]\nSite da Ferrero em Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "M&M's",
      "descricao": "Confeitos de chocolate com cobertura de açúcar colorida, lançados pela Mars nos Estados Unidos em 1941."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os dois emes do nome M&M's vêm dos sobrenomes de Forrest Mars e de qual sócio dele?",
    "resposta": "Bruce Murrie",
    "distratores": [
      "Milton Hershey",
      "John Mackintosh",
      "William Wrigley"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/M%26M%27s"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M%26M%27s",
        "situacao": "ok",
        "texto": "M&M's is a brand of sugar-coated dragée chocolate confectionery made by the Mars Wrigley Confectionery division of Mars Inc. since 1941. The confection has a dyed candy shell protecting its chocolate or variety filling from melting. Each piece has the serif letter \"m\" printed in white lower case on one side. The candies are produced in various bright colors and mixed together in a package.\n[…]\nIt was conceived in partnership between Forrest Mars and Bruce Murrie (representing the \"M\" and \"M\"), the son of the president of the rival Hershey Chocolate Company. Murrie sold his minority share in the venture to Mars in 1949. M&M was likely inspired from Smarties that Mars may have encountered during the Spanish Civil War (1936–1939).\n[…]\nOn March 3, 1941 in the United States, Mars received a patent for his own process. When his confection company was founded it was entitled, M&M Limited. The two Ms represent the last names of Forrest E. Mars Sr. and Bruce Murrie, the son of the Hershey Chocolate Company president, William F. R. Murrie, who had a 20 percent share in the product. The arrangement allowed the candies to be made with Hershey chocolate, as at the time, Hershey had control of the rationed chocolate in USA.\n[…]\nNestlé archives note that George Harris of Rowntree did not attempt to sue Mars for stealing the concept for Smarties and that after much negotiation, Harris and Forrest Mars Sr. agreed to share the marketplace rather than to compete, with Rowntree making Mars Bars in Canada, Ireland, and South Africa and with Mars making the sugar-coated confection in the United States without competition from Smarties.\n[…]\nIn October 2011, Mars released M&M's White Chocolate Candy Corn exclusively in the United States for Halloween. These candies come in three candy corn inspired colors: white, bright yellow, and bright orange."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%26M%27s",
        "situacao": "ok",
        "texto": "M&M's é uma marca pertencente a Mars, Incorporated que se refere principalmente a pequenos pedaços de chocolate ao leite recobertos por uma camada de açúcar. A marca possui conhecidos \"M&Ms falantes\" que aparecem nos comerciais de televisão do produto.\n[…]\nOs M&M's foram criados quando Forrest Mars viu soldados espanhóis a comerem pedaços de chocolate cobertos de açúcar para que o chocolate não derretesse nos dedos, durante a Guerra Civil Espanhola. Foi em 1941 que os primeiros M&M's foram vendidos nos Estados Unidos.\n[…]\nO nome M&M's surgiu de \"Mars & Murrie\" (o parceiro de negócios de Mars era Bruce Murrie, filho de William Murrie, rival de William S. Hershey). Os M&M's logo viraram um sucesso porque, na época, o ar condicionado ainda não era muito encontrado em lojas, casas e automóveis e o derretimento das barras de chocolate tornou-se um problema, mas os M&M's não derretiam devido ao seu revestimento de açúcar.\n[…]\nEm 1993, a Mars fez uma pesquisa com os consumidores nos Estados Unidos perguntando que cor eles preferiam que fosse introduzida: azul, rosa ou roxo. O azul ganhou e foi adicionado um tempo depois. Na mesma época, M&M's novos foram disponibilizados em lojas especializadas em 24 cores diferentes.\n[…]\nA franquia sueca de chocolates Marabou, subsidiária da Mondelēz, e a Mars tinham anteriormente um acordo de que a Mars não usaria a marca M&M's na Suécia, Noruega e Finlândia, para evitar confusão com a marca \"M\" da Marabou, que é usada desde 1957. O acordo expirou em 1998 e em 2009 a Mars Suécia começou a comercializar os M&M's nos países nórdicos.\n[…]\nApós uma decisão judicial, a Mars foi forçada a parar de vender o produto no mercado do país em 30 de junho de 2016.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Toyota",
      "descricao": "Montadora japonesa de automóveis fundada em 1937 por Kiichiro Toyoda, sediada na cidade de Toyota."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em japonês, a grafia Toyota foi preferida a Toyoda por ter um número de traços considerado de sorte. Quantos traços?",
    "resposta": "Oito",
    "distratores": [
      "Sete",
      "Três",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn: Toyota Jidōsha kabushiki gaisha; IPA: [toꜜjota], English: , commonly known as simply Toyota) is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. Founded in 1937 by Kiichiro Toyoda, Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.\n[…]\nAs of 2026, the Toyota Motor Corporation produces vehicles under four brands: Century, Daihatsu, Lexus and the namesake Toyota.\n[…]\nHowever, Rizaburo Toyoda, who had married into the family and was not born with that name, preferred \"Toyota\" (トヨタ) because it took eight brush strokes (a lucky number) to write in Japanese, was visually simpler (leaving off the diacritic at the end), and with a voiceless consonant instead of a voiced one (voiced consonants are considered to have a \"murky\" or \"muddy\" sound compared to voiceless consonants, which are \"clear\").\n[…]\nAlso in 1981, Eiji Toyoda stepped down as president and assumed the title of chairman. He was succeeded as president by Shoichiro Toyoda, the son of the company's founder. Within months, Shoichiro started to merge Toyota's sales and production organizations, and in 1982 the combined companies became the Toyota Motor Corporation. The two groups were described as \"oil and water\" and it took years of leadership from Shoichiro to successfully combine them into one organization.\n[…]\nAisin, another member of the Toyota Group of companies, uses the same Toyota wordmark logo to market its home-use sewing machines. Aisin was founded by Kiichiro Toyoda after he founded the Toyota Motor Corporation. According to Aisin, he was so pleased with the first sewing machine, he decided to apply the same Toyota branding as his auto business, despite the companies being independent from each other.\n[…]\nToyota model codes\n[…]\nBusiness data for Toyota Motor Corp:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (em Japonês: トヨタ自動車株式会社, Toyota Jidōsha kabushikigaisha) é um fabricante automotivo japonês com sede na cidade de Toyota, província de Aichi, no Japão. Em março de 2014, a corporação multinacional era composta por 338 875 funcionários em todo o mundo e, em fevereiro de 2016, era a 13.ª maior empresa do mundo por receita. A Toyota foi o maior fabricante de automóveis em 201\n[…]\nEm 2016, comercializou 10,18 milhões de unidades, somando as marcas Toyota, Lexus, Daihatsu e Hino Motors. Desta maneira, ficou abaixo dos números da sua concorrente, a europeia Grupo Volkswagen (10,3 milhões em vendas), ocupando o 2° lugar no ranking em vendas mundiais de veículos.\n[…]\nA empresa foi fundada por Kiichiro Toyoda em 1937, como uma subsidiária da empresa de seu pai, a Toyota Industries, para criar automóveis. Três anos antes, em 1934, enquanto ainda era um departamento da Toyota Industries, criou seu primeiro produto, o tipo A, e, em 1936, seu primeiro carro de passageiros, o Toyota AA. A Toyota Motor Corporation produz veículos sob cinco marcas: Toyota, Hino, Lexus, Ranz e Daihatsu.\n[…]\nO nome original da família era Toyoda, mas, por questões numerológicas, a indústria foi batizada como Toyota. As origens da empresa remontam à criação de uma secção dedicada à produção de automóveis na, já existente, empresa de fabricação de teares automáticos, chamada Toyoda Automatic Loom, em setembro de 1933.[carece de fontes]?\n[…]\nCom o lucro recorde de 2006, a Toyota esteve muito perto de superar a norte-americana GM, tornando-se a maior fabricante de automóveis do mundo. No mês de maio de 2007, foi considerada a maior fabricante de automóveis do mundo, tendo, assim, superado a antiga rival norte-americana GM. Transformou-se na maior montadora do mundo, sempre fiel ao seu lema \"um cliente é para sempre\".\n[…]\n«Toyota em Portugal»\n[…]\n«Toyota no Brasil»\n[…]\n«Estudo de Caso Toyota»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Mitsubishi",
      "descricao": "Grupo empresarial japonês fundado por Yataro Iwasaki em 1870, cujo logotipo vermelho é formado por losangos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em japonês, o nome Mitsubishi faz referência a quantos losangos, os mesmos que formam o logotipo vermelho da marca?",
    "resposta": "Três",
    "distratores": [
      "Dois",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mitsubishi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mitsubishi",
        "situacao": "ok",
        "texto": "Mitsubishi Group (三菱グループ, Mitsubishi Gurūpu) is a group of autonomous Japanese multinational companies.\n[…]\nA 2020 estimate concluded that all the Mitsubishi companies combined generate 7.7% of the total revenue of all publicly traded companies in Japan, and the group's assets amount to 433 trillion yen.\n[…]\nIn 1954, Mitsubishi Corporation was reformed, and the Mitsubishi Friday Club was established to foster camaraderie and information exchange among the chairpersons and presidents of major Mitsubishi companies. By 1964, Mitsubishi Heavy Industries also reemerged. The Friday Club symbolised the formation of an equal group of companies, rather than the revival of the pre-war Mitsubishi zaibatsu with Mitsubishi Headquarters at the apex.\n[…]\nThe Mitsubishi Group is made up of about 40 individual companies without a controlling parent company. Each of the Mitsubishi companies owns substantial (but usually not controlling) portions of the shares of the others.\n[…]\nSince 1993, the Friday Conference has officially been held as a social function, and not for the purpose of discussing or coordinating business strategy. Despite this, the Friday Conference has been a venue for informal cooperation and coordination between the group companies, most notably in bailing out Mitsubishi Motors during the mid-2000s.\n[…]\nMitsubishi Corporation\n[…]\nMitsubishi Heavy Industries\n[…]\nTen other \"major\" group companies participate in the coordinating meeting on a rotating basis (with six of the ten companies participating in any given month):\n[…]\nMitsubishi Pencil Company, which has never been part of the Mitsubishi Group despite its name"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mitsubishi",
        "situacao": "ok",
        "texto": "O Mitsubishi Group (三菱グループ, Mitsubishi Gurūpu) é um conjunto de empresas multinacionais japonesas autônomas que operam em uma variedade de indústrias.\n[…]\nFundado por Yatarō Iwasaki em 1870, o Mitsubishi Group tem suas origens no zaibatsu Mitsubishi, uma empresa unificada que existiu de 1870 a 1946. A empresa, junto com outros grandes zaibatsu (Mitsui, Sumitomo e Yasuda), foram dissolvidas durante a ocupação do Japão após a Segunda Guerra Mundial, por ordem dos Aliados. Apesar da dissolução, as empresas que antes faziam parte da empresa unificada continuam a compartilhar a marca e o logotipo Mitsubishi.\n[…]\nAs três principais entidades (gosanke) são o Mitsubishi UFJ Financial Group (o maior banco do Japão), a Mitsubishi Corporation (uma empresa de comércio geral) e a Mitsubishi Heavy Industries (empresas de manufatura diversificada).\n[…]\nEm 1873, seu nome foi alterado para Mitsubishi Shokai; consiste em duas partes: \"mitsu\" (三) que significa \"três\" (como nas três folhas de carvalho do emblema do clã Yamauchi ou Tosa que governou o local de nascimento de Yatarō e o empregou) e \"hishi\" (菱, que se torna \"bishi\" sob rendaku) que significa \"trapa\" e, portanto, \"losango\", que está refletido no logotipo da empresa. Também é traduzido como \"três diamantes\".\n[…]\nSob esta política, a Mitsubishi como um grupo foi dissolvida. Mitsubishi Heavy Industries e Mitsubishi Chemical foram divididos em três entidades separadas. Em seu leito de morte, Koyata Iwasaki defendeu firmemente suas ações, afirmando que havia feito o máximo por seu país e não tinha nada do que se envergonhar. Apesar de sua resistência, ele não conseguiu desafiar a maré dos tempos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Levi's",
      "descricao": "Fabricante americana de calças jeans fundada em São Francisco por Levi Strauss no século dezenove."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A etiqueta de couro das calças Levi's mostra uma calça que não rasga mesmo puxada por quantos cavalos?",
    "resposta": "Dois",
    "distratores": [
      "Um",
      "Três",
      "Quatro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
        "situacao": "ok",
        "texto": "Levi Strauss & Co. is an American clothing company known worldwide for its Levi's brand of denim jeans. It was founded in May 1853 when German-Jewish immigrant Levi Strauss moved from New York City, New York, to San Francisco, California, to open a West Coast branch of his brothers' New York dry goods business. The corporation is registered in Delaware and its headquarters is located in Levi's Pla\n[…]\nIn 2017, Levi Strauss & Co. released a \"smart jacket\", an apparel it developed in partnership with Google. After two years of collaboration, the result was a denim jacket set at $350.\n[…]\nLevi Strauss & Co. is a worldwide corporation organized into three geographic divisions: Levi Strauss Americas (LSA), which is headquartered in San Francisco; Levi Strauss Europe (LSE), which is based in Brussels; and Levi Strauss Asia Pacific, Middle East and Africa.\n[…]\nIn June 2026, during the 2026 FIFA World Cup, FIFA required non-sponsor corporate branding to be removed from host stadiums. As a result, Levi's Stadium was temporarily renamed \"San Francisco Bay Area Stadium\" and its Levi's branding was covered. Levi Strauss & Co. responded by incorporating the obscured logo into a social media marketing campaign, using the situation as a branding opportunity.\n[…]\nFollowing the rebranding of World Cup venues, Levi Strauss & Co. temporarily changed its profile image on social media to resemble the covered logo displayed at Levi's Stadium. The change drew media attention as part of the company's response to FIFA's sponsorship and branding regulations for tournament venues.\n[…]\nFord, Carin T. (2004). Levi Strauss: The Man Behind Blue Jeans (Famous Inventors). Enslow Publishers. ISBN 0-7660-2249-8.\n[…]\nVan Steenwyk, Elizabeth (1988). Levi Strauss: The Blue Jeans Man. Walker. ISBN 0-8027-6795-8.\n[…]\nMedia related to Levi Strauss & Co. at Wikimedia Commons\n[…]\nBusiness data for Levi Strauss & Co.:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Levi_Strauss_%26_Co.",
        "situacao": "ok",
        "texto": "Levi Strauss & Co., também conhecida como (LS&CO), é uma empresa norte-americana fundada em 1853 pelo industrial alemão Levi Strauss, é detentora da marca Levi's de jeans de renome mundial.\n[…]\nLevi Strauss & Co. é uma empresa multinacional organizada em três divisões geográficas: Levi Strauss Americas (LSA), com sede em São Francisco; Levi Strauss Europe, com sede no Meio Oeste e na Africa (LSEMA), com sede em  Bruxelas; também possuem escritórios na Ásia (APD), sediada em Singapura. A companhia emprega aproximadamente 10.000 pessoas no mundo, e produz desde calças jeans, camisas, boné, cintos a blusas e roupas sociais.\n[…]\nLevi Strauss Signature (em inglês)\n[…]\nLevi's Mobile Phone official site (em inglês)\n[…]\nLevi's Project 501 Design Challenge (em inglês)[ligação inativa]\n[…]\nLevi's Sponsorship of Project Runway (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Hello Kitty",
      "descricao": "Personagem de gatinha branca com laço criada em 1974 pela empresa japonesa Sanrio."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a Sanrio, a gatinha Hello Kitty tem a altura de quantas maçãs empilhadas?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Sete",
      "Dez"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hello_Kitty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty, also known by her real name Kitty White, is a fictional character created by Yuko Shimizu, designed by Yuko Yamaguchi, and owned by the Japanese company Sanrio. Sanrio depicts Hello Kitty as a British anthropomorphic white cat with a red bow and no visible mouth. According to her backstory, she lives in a London suburb with her family, and is close to her twin sister Mimmy, who is dep\n[…]\nHello Kitty was initially known only as \"the white kitten with no name\" (名前のない白い子猫). Shimizu got the name Kitty from Lewis Carroll's Through the Looking-Glass; during a scene early in the book, Alice plays with a cat she calls Kitty. Sanrio's motto is \"social communication\", and Tsuji wanted the brand name to reflect that by including a greeting. He first considered \"Hi Kitty\" before finally settling on \"Hello Kitty\", her current name.\n[…]\nHello Kitty Kruisers (2014, iOS, Wii U, Nintendo Switch): A kart racing game featuring Hello Kitty and other Sanrio characters\n[…]\nAlthough Sachs did not seek permission to use the character in his work, a brand marketing manager for Sanrio was quoted as saying \"You know, there was Marilyn Monroe and Andy Warhol, and then Michael Jackson and Jeff Koons. When you're an icon, that's what happens.\" In 2013 The Wall Street Journal said Sanrio's attitude to copyright was \"laissez-faire\" compared to companies like Disney, and that they have let artists use Hello Kitty's likeness without interfering.\n[…]\nIn 2022, Saturday Night Live aired a sketch parodying Hello Kitty's backstory (described by The A.V. Club as \"incongruous, corporate-sanctioned\") and Sanrio's handling of it. The sketch centers on managers at a fictional Hello Kitty store. They describe the character in contradictory terms as a \"human little girl\" who is in third grade and also 48 years old.\n[…]\nHello Kitty at Don Markstein's Toonopedia. Archived[link removed] from the original on 8 January 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty (japonês: ハロー・キティ, Hepburn: Harō Kiti), também conhecida por seu nome completo Kitty White (キティ・ホワイト, Kiti Howaito), é uma personagem criada pela empresa japonesa Sanrio. Apesar do bigode, das orelhas e do nome (\"Kitty\" é um termo equivalente a \"gatinho\", em inglês), Sanrio retrata Hello Kitty como uma jovem gijinka (antropomorfização) de um bobtail japonês com um laço vermelho e, nota\n[…]\nHello Kitty é um elemento básico do segmento kawaii da cultura popular japonesa. Em 2010, a Sanrio transformou a Hello Kitty em um fenômeno de marketing global, no valor de US$6 bilhões por ano. Em 2014, quando a Hello Kitty estava com 40 anos, ela estava valendo US$8 bilhões por ano. Desde 2019, Hello Kitty é a segunda franquia de mídia de maior valor de todos os tempos (atrás apenas de Pokémon), tendo gerado US$80 bilhões em vendas de varejo vitalícias.\n[…]\nA Hello Kitty foi criada originalmente pela designer da Sanrio, Yuko Shimizu, em 1974. Shimizu deixou a companhia aproximadamente um ano depois. A segunda designer, Setsuko Yonekubo, assumiu por cinco anos até 1980, quando essa tarefa foi dada a Yuko Yamaguchi, que ainda está à frente do trabalho.\n[…]\nExistem rumores e lendas urbanas de que a Hello Kitty seja, na realidade, um símbolo diabólico. Desde 2005, alguns sites da internet especulam que o motivo da Hello Kitty não possuir boca foi um pacto diabólico. Segundo essa lenda urbana, uma menina de 14 anos tinha câncer na boca e estava em fase terminal, então sua mãe fez um pacto com o diabo para que a menina se curasse[carece de fontes]? e em troca ela criaria uma marca que ganhasse sucesso mundialmente.\n[…]\nNo entanto, a Hello Kitty é de origem japonesa, não chinesa, Kitty significa \"gatinho\", e não se conhece nenhuma palavra chinesa em que \"kitty\" significa \"demônio\".\n[…]\nA empresa japonesa Sanrio falou sobre a polêmica:\n[…]\nHello Kitty (série)\n[…]\n«Especial Hello Kitty da Abril»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Hello Kitty",
      "descricao": "Personagem de gatinha branca com laço criada em 1974 pela empresa japonesa Sanrio."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Embora tenha sido criada no Japão, segundo a Sanrio a gatinha Hello Kitty nasceu e mora onde?",
    "resposta": "Perto de Londres",
    "distratores": [
      "Perto de Paris",
      "Perto de Tóquio",
      "Perto de Nova York"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hello_Kitty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty, also known by her real name Kitty White, is a fictional character created by Yuko Shimizu, designed by Yuko Yamaguchi, and owned by the Japanese company Sanrio. Sanrio depicts Hello Kitty as a British anthropomorphic white cat with a red bow and no visible mouth. According to her backstory, she lives in a London suburb with her family, and is close to her twin sister Mimmy, who is dep\n[…]\nHello Kitty was initially known only as \"the white kitten with no name\" (名前のない白い子猫). Shimizu got the name Kitty from Lewis Carroll's Through the Looking-Glass; during a scene early in the book, Alice plays with a cat she calls Kitty. Sanrio's motto is \"social communication\", and Tsuji wanted the brand name to reflect that by including a greeting. He first considered \"Hi Kitty\" before finally settling on \"Hello Kitty\", her current name.\n[…]\nHello Kitty Kruisers (2014, iOS, Wii U, Nintendo Switch): A kart racing game featuring Hello Kitty and other Sanrio characters\n[…]\nAlthough Sachs did not seek permission to use the character in his work, a brand marketing manager for Sanrio was quoted as saying \"You know, there was Marilyn Monroe and Andy Warhol, and then Michael Jackson and Jeff Koons. When you're an icon, that's what happens.\" In 2013 The Wall Street Journal said Sanrio's attitude to copyright was \"laissez-faire\" compared to companies like Disney, and that they have let artists use Hello Kitty's likeness without interfering.\n[…]\nIn 2022, Saturday Night Live aired a sketch parodying Hello Kitty's backstory (described by The A.V. Club as \"incongruous, corporate-sanctioned\") and Sanrio's handling of it. The sketch centers on managers at a fictional Hello Kitty store. They describe the character in contradictory terms as a \"human little girl\" who is in third grade and also 48 years old.\n[…]\nHello Kitty at Don Markstein's Toonopedia. Archived[link removed] from the original on 8 January 2016."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hello_Kitty",
        "situacao": "ok",
        "texto": "Hello Kitty (japonês: ハロー・キティ, Hepburn: Harō Kiti), também conhecida por seu nome completo Kitty White (キティ・ホワイト, Kiti Howaito), é uma personagem criada pela empresa japonesa Sanrio. Apesar do bigode, das orelhas e do nome (\"Kitty\" é um termo equivalente a \"gatinho\", em inglês), Sanrio retrata Hello Kitty como uma jovem gijinka (antropomorfização) de um bobtail japonês com um laço vermelho e, nota\n[…]\nA Hello Kitty foi criada originalmente pela designer da Sanrio, Yuko Shimizu, em 1974. Shimizu deixou a companhia aproximadamente um ano depois. A segunda designer, Setsuko Yonekubo, assumiu por cinco anos até 1980, quando essa tarefa foi dada a Yuko Yamaguchi, que ainda está à frente do trabalho.\n[…]\nA Hello Kitty nasceu em pequenos artigos para garotas e consequentemente se desenvolveu também da mesma forma. A Sanrio lança todos os anos uma série de artigos com a Hello Kitty, incluindo bolsas, cadernos, agendas, fichários, bijuterias, adesivos, (auto-colantes), chaveiros e muito mais.\n[…]\nVários jogos da Hello Kitty foram produzidos desde o lançamento do primeiro título para NES em 1992; entretanto, a maioria desses jogos nunca foi lançada fora do Japão. Hello Kitty também fez participações especiais em jogos com outros personagens da Sanrio, como o jogo Kero Kero Keroppi no Bōken Nikki: Nemureru Mori no Keroleen, lançado em 1994 para SNES.\n[…]\nForam lançados também consoles de edição especial, como o Hello Kitty Dreamcast, o Hello Kitty Game Boy Pocket e o Hello Kitty Crystal Xbox, vendidos exclusivamente no Japão. Hello Kitty também apareceu como personagem convidada no jogo Sonic Dash, como parte da parceria da Sega com a Sanrio. Hello Kitty (assim como My Melody, outra personagem da Sanrio) também apareceu em Super Mario Maker.\n[…]\nEm 17 de abril de 2019, a Sanrio anunciou uma parceria com a The Tetris Company e um crossover de Tetris com a Hello Kitty já está disponível no site oficial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de viagem e de restaurantes publicado pela fabricante francesa de pneus Michelin desde 1900, famoso por suas estrelas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na avaliação de restaurantes do Guia Michelin, qual é o número máximo de estrelas que uma casa pode receber?",
    "resposta": "Três",
    "distratores": [
      "Quatro",
      "Cinco",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\n: \"A very good restaurant in its category\" (Une très bonne table dans sa catégorie)\n[…]\nThe Michelin Guide also awards \"Rising Stars\", an indication that a restaurant has the potential to qualify for a star, or an additional star.\n[…]\nIn 2007, Tokyo's restaurants were awarded the most stars and in 2010 other Japanese cities like Kyoto and Osaka also received many stars. At the time this sparked questions from some over whether these high ratings were merited for Japanese restaurants, or whether the Michelin Guide was too generous in giving out stars to gain an acceptance with Japanese customers and to enable the tyre-selling parent company to market itself in Japan.\n[…]\nCasa Julio (Fontanars dels Alforins, Spain). After receiving a star for a perfumed cuisine in 2009, the restaurant chef Julio Biosca felt the award was granted to dishes that he did not like and which restricted his creativity. He tried to remove his star, and in December 2013 he discontinued his tasting menu. The removal took place in the 2015 guide.\n[…]\n't Huis van Lede (Belgium). After receiving a star in 2014, chef Frederick Dhooge said he did not want his Michelin star or his points in the Gault-Millau restaurant guide, stating: \"We noticed that this is not always understood by a group of customers that expect a spectacle of stars and points kitchen\" from a Michelin-starred restaurant rather than simple food.\n[…]\nLists of Michelin-starred restaurants\n[…]\n1900 Michelin Guide Archived 23 May 2025 at the Wayback Machine\n[…]\nVía Michelin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guia_Michelin",
        "situacao": "ok",
        "texto": "Guia Michelin é um guia turístico publicado pela primeira vez em 1900 por André Michelin, um industrial francês fundador da Compagnie Générale des Établissements Michelin, fabricante de pneus mais conhecida como Michelin. O objetivo de André era o de promover o turismo para o crescente mercado automobilístico.\n[…]\nÉ o guia de referência de hotéis e restaurantes. Impresso com o máximo sigilo e com tiragem desconhecida, este guia é o mais respeitado do mundo e premia os melhores restaurantes, classificando-os com estrelas (de 1 a 3) e que representam o sonho ou o pesadelo de qualquer chef.\n[…]\nGanhar uma estrela do guia significa a ascensão do restaurante e dos seus chefs ao passo que perder uma delas pode levar até a uma tragédia como a do chef Bernard Loiseau que se suicidou em Fevereiro de 2003, aos 52 anos, desesperado com o rumor de que o seu estabelecimento perderia a classificação de \"três estrelas\" no Guia Michelin.\n[…]\nUm novo guia vermelho é dedicado à cidade de Tóquio em 2008 e já conta com 8 restaurantes \"três estrelas\" entre mais de 150 \"estrelados\".\n[…]\nDesde 1929, data de introdução das estrelas no Guia Michelin, que Portugal tem restaurantes premiados com Estrelas Michelin. A lista dos restaurantes premiados com estrelas no Guia Michelin 2024 inclui 39 restaurantes, 8 com duas estrelas (1 novo) e 31 com uma estrela (4 novos).\n[…]\nDesde 1997 foi introduzida a distinção de Bib Gourmand. Esta categoria, inferior às estrelas, inclui restaurantes com a melhor relação qualidade-preço. A lista dos restaurantes distinguidos como Bib Gourmand no Guia Michelin 2024 inclui 30 restaurantes em Portugal (7 novos).\n[…]\nSegue-se uma lista dos restaurantes que receberam estrelas Michelin ao longo dos anos.\n[…]\nLista dos restaurantes estrelados do Guia Michelin\n[…]\nLista de restaurantes com três estrelas Michelin",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de viagem e de restaurantes publicado pela fabricante francesa de pneus Michelin desde 1900, famoso por suas estrelas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1900, por que uma fabricante de pneus, a Michelin, decidiu publicar um guia com hotéis e restaurantes?",
    "resposta": "Para incentivar viagens de carro",
    "distratores": [
      "Para vender comida",
      "Para premiar chefs franceses",
      "Para atrair turistas estrangeiros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\nThe Michelin Guide also awards \"Rising Stars\", an indication that a restaurant has the potential to qualify for a star, or an additional star.\n[…]\n't Huis van Lede (Belgium). After receiving a star in 2014, chef Frederick Dhooge said he did not want his Michelin star or his points in the Gault-Millau restaurant guide, stating: \"We noticed that this is not always understood by a group of customers that expect a spectacle of stars and points kitchen\" from a Michelin-starred restaurant rather than simple food.\n[…]\nBecause of their high status, Michelin-starred fine dining restaurants often rely on staging, a form of unpaid internship. At the three-star restaurant Noma, chef-owner René Redzepi yielded to public pressure in 2022 and began paying interns. After three months, Redzepi announced the restaurant was no longer financially sustainable and that the concept would close at the end of 2024.\n[…]\nThe power imbalance between chef-owners and staff has also resulted in workers at some fine-dining restaurants producing intricate dishes complaining of very long hours, difficulty affording food, physical and sexual abuse, refusal of permission to treat injuries at a hospital, and destruction of workers' personal property. Most chefs interviewed by The New York Times said the increase in business and job applicants that comes with the publicity around a Michelin star makes it worth seeking.\n[…]\nLists of Michelin-starred restaurants\n[…]\n1900 Michelin Guide Archived 23 May 2025 at the Wayback Machine"
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
    "indice": 20,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Lançada pela Kodak em 1900, a câmera Brownie popularizou a fotografia por custar quanto nos Estados Unidos?",
    "resposta": "Um dólar",
    "distratores": [
      "Cinquenta centavos",
      "Cinco dólares",
      "Dez dólares"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brownie_(camera)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brownie_(camera)",
        "situacao": "ok",
        "texto": "The Brownie was a series of camera models made by Eastman Kodak and first released in 1900.\n[…]\nFrank A. Brownell invented the Brownie for the Eastman Kodak Company. Named after The Brownies, characters popularised by the Canadian writer Palmer Cox, the camera was initially aimed at children. More than 150,000 Brownie cameras were shipped in the first year of production, and cost a mere 5 shillings in the United Kingdom. An improved model, No. 2 Brownie, came in 1901, which produced larger 3.25-by-2.25-inch (1.44:1 aspect ratio) photos, cost $2, and was also a huge success.\n[…]\nThe Kodak Brownie Number 2 is a box camera manufactured by the Eastman Kodak Company from 1901 to 1935. There were five models, A through F, and it was the first camera to use 120 film. It also came with a viewfinder and a handle. The Brownie Number 2 was made of a choice of three materials: cardboard, costing US$2, aluminum, costing US$2.75, and a color model, which cost US$2.50. It was a very popular and affordable camera, and many are still in use by film photographers.\n[…]\nThe cameras remained popular and spawned a wide variety, including a Boy Scout edition in the 1930s. In 1940, Kodak released the Six-20 Flash Brownie, Kodak's first internally synchronized flash camera, using General Electric bulbs. In 1957, Kodak produced the Brownie Starflash, Kodak's first camera with a built-in flash.\n[…]\nEastman Kodak. Story of the Kodak Camera (1948)\n[…]\nU.S. patent 725,034 Kodak Brownie, patented by George Eastman, filed July 1900\n[…]\nThe Brownie Camera @ 100: A Celebration on the Kodak website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brownie_%28c%C3%A2mera%29",
        "situacao": "ok",
        "texto": "As câmeras Brownie foram uma série de câmeras de baixo custo produzidas pela Eastman Kodak, dirigidas a amadores. As Brownies democratizaram a prática da fotografia, permitindo que qualquer pessoa tomasse suas próprias imagens. Segundo o slogan: \"Você aperta o botão, nós fazemos o resto\".\n[…]\nA primeira Brownie, lançada em 1900, consistia em uma pequena caixa de papelão, com uma lente menisco simples, que usava filme de rolo 120, e custava apenas 2 dólares a feita de papelão, 2,75 dolares a feita de alumínio e 2,50 dolares o modelo colorido. Mais tarde foram introduzidos novos modelos, de bakelite, com flash, com lentes melhoradas.\n[…]\nPortátil e simples, a Brownie produziu uma revolução no campo da fotografia permitindo boas fotos até mesmo por crianças, sem precisar ajustar o foco ou cronometrar. A Kodak usou o nome de um duende para denominar a câmera e usou a imagem do mito para enfatizar o pequeno tamanho e as qualidades da máquina.\n[…]\n(em inglês) Página da Câmera Brownie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "KitKat",
      "descricao": "Chocolate de wafer coberto lançado em 1935 pela britânica Rowntree's, hoje da Nestlé."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Lançado em 1935 pela britânica Rowntree's, o chocolate que viria a se chamar KitKat tinha quantos palitos de wafer?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Três",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kit_Kat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kit_Kat",
        "situacao": "ok",
        "texto": "KitKat is a British chocolate bar created by Rowntree's of York, England. It is produced globally by Nestlé (which acquired Rowntree's in 1988), except in the United States, where it is made under licence by the Hershey Company (an agreement Rowntree's first made with Hershey in 1970).\n[…]\nThe original four-finger version of the bar was developed after a worker at Rowntree's York factory put a suggestion in the recommendation box for \"a chocolate bar that a man could take to work in his pack up\". It was launched in September 1935 in the UK as Rowntree's Chocolate Crisp and the later two-finger version was launched in 1936. It was renamed Kit Kat Chocolate Crisp in 1937 and just Kit Kat after World War II.\n[…]\nThe original four-finger bar was developed after a worker at Rowntree's York Factory put a suggestion in a recommendation box for a snack that \"a man could take to work in his pack\". The bar was officially launched in September 1935, under the title of Rowntree's Chocolate Crisp (priced at 2d) and was sold in London and throughout southern England.\n[…]\nWhen first introduced in the United Kingdom in 1935, the original Rowntree's Chocolate Crisp bar had a red wrapper, which briefly became blue between 1945 and 1947. The Kit Kat logo was added in 1937. As a result of milk shortages after the end of World War II – a period of rationing in the UK – dark chocolate was used instead of milk chocolate during that period.\n[…]\nIn June 2020, Nestlé announced that KitKat was to end its relationship with the non-profit organisation, Fairtrade, instead choosing to source its cocoa for KitKat chocolate bars from farms with a Rainforest Alliance accreditation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kit_Kat",
        "situacao": "ok",
        "texto": "Kit Kat é uma marca comercial de chocolate composto pela combinação de wafer coberta por chocolate criada em 1935 pela empresa britânica Rowntrees e que desde 1988 é produzida pela transnacional Nestlé, exceto nos Estados Unidos, onde o chocolate é produzido pela Hershey's. Cada barra é composta por três camadas de wafer e coberta por uma camada externa de chocolate, com sabor variado, podendo con\n[…]\nA Nestlé lançou o Kit Kat no Brasil, pela primeira vez, em 1994, porém, com vendas abaixo do esperado, a comercialização oficial foi interrompida pouco tempo depois e o produto passou a ser obtido no país apenas através de lojas especializadas em importação de chocolates. No ano de 2011, como parte da comemoração dos 90 anos da empresa no Brasil e  dos 75 anos do Kit Kat no mercado internacional, a Nestlé retomou a comercialização oficial do produto no Brasil.\n[…]\nChocolate Branco\n[…]\nChocolate Branco\n[…]\nChocolate Branco\n[…]\nEm 2002 a Nestlé requisitou junto das autoridades europeias a proteção intelectual do design da marca KitKat. O estatuto foi atribuído, mas contestado pela Cadbury Schweppes, em 2007, dando início a uma batalha legal. Em 25 de Julho de 2018, o Tribunal Europeu de Justiça considerou que o formato das quatro barras de chocolate não é uma característica distintiva do KitKat e, portanto, não merece ser protegido dessa forma.\n[…]\nNo final de março de 2026, o grupo suíço Nestlé relatou o roubo de uma grande carga de barras de chocolate KitKat durante o transporte da Itália para a Polônia e advertiu que o cenário pode provocar escassez nas lojas justamente antes da Páscoa. A empresa confirmou que um caminhão que transportava 413.793 unidades, o equivalente a 12 toneladas, da sua nova linha de chocolates foi roubado durante o transporte na Europa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Lego",
      "descricao": "Marca dinamarquesa de brinquedos de blocos de montar plásticos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Seis tijolinhos Lego de dois por quatro pinos, todos da mesma cor, podem ser combinados de quantas maneiras?",
    "resposta": "Cerca de novecentos milhões",
    "distratores": [
      "Cerca de nove mil",
      "Cerca de nove milhões",
      "Cerca de noventa bilhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lego"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lego",
        "situacao": "ok",
        "texto": "Lego ( , LEG-oh; Danish: [ˈle̝ːko]) is a brand of plastic construction toys manufactured by the Lego Group, a privately held company based in Billund, Denmark. Lego consists of variously coloured interlocking plastic bricks made of acrylonitrile butadiene styrene (ABS) that accompany an array of gears, figurines called minifigures, and various other parts. Its pieces can be assembled and connected\n[…]\nLego pieces of all varieties constitute a universal system. Despite there being variations in the design and the purposes of individual pieces over the years, each remains compatible in some way with existing pieces. Lego bricks from 1958 still interlock with those made presently, and Lego sets for young children are compatible with those made for teenagers. Six bricks of 2 × 4 studs can be combined in 915,103,765 ways.\n[…]\nClague, Kevin; Agullo, Miguel; Hassing, Lars C. (2003). LEGO Software Power Tools, With LDraw, MLCad, and LPub. Syngress. ISBN 1-931836-76-0.\n[…]\nCourtney, Tim; Herrera, Ahui; Bliss, Steve (2003). Virtual LEGO: The Official LDraw.org Guide to LDraw Tools for Windows. San Francisco: No Starch Press. ISBN 1-886411-94-8.\n[…]\nMcKee, Jacob H (2003). Getting Started with LEGO Trains. San Francisco: No Starch Press. ISBN 1-59327-006-2.\n[…]\nFerrari, Mario; Ferrari, Giulio; Hempel, Ralph (2001). Building Robots With LEGO Mindstorms: The Ultimate Tool for Mindstorms Maniacs. Syngress Media. ISBN 1-928994-67-9.\n[…]\nPickering, David (1999). The Ultimate LEGO Book. New York: Dorling Kindersley. ISBN 0-7894-4691-X.\n[…]\nLipkowitz, Daniel (2012). The LEGO Book. London: Dorling Kindersley. ISBN 978-1-4093-7660-6.\n[…]\nWiencek, Henry (1987). The World of LEGO Toys. New York: Harry N. Abrams, Inc., Publishers. ISBN 0-8109-2362-9.\n[…]\nPilegaard, Ulrik; Dooley, Mike (2007). Forbidden LEGO. San Francisco: No Starch Press. ISBN 978-1-59327-137-4.\n[…]\nMedia related to Lego at Wikimedia Commons\n[…]\nLego sets guide and database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lego",
        "situacao": "ok",
        "texto": "Lego ([ˈlɛɡu], Dinamarquês: [ˈle̝ːko]; estilizado como LEGO) é uma linha de brinquedos de construção de plástico fabricados pelo The Lego Group, uma empresa privada com sede em Billund, Dinamarca. Lego consiste em blocos de plástico interligados de várias cores, feitos de acrilonitrila butadieno estireno (ABS), que acompanham uma série de engrenagens, bonecos chamados minifiguras e diversas outras\n[…]\nSuas peças podem ser montadas e conectadas de diversas maneiras para construir objetos, incluindo veículos, edifícios e robôs funcionais. Modelos de Lego montados podem ser desmontados e suas peças podem ser reutilizadas para criar novas construções.\n[…]\nO The Lego Group iniciou a fabricação dos blocos de brinquedo com encaixe em 1949. A moldagem é feita na Dinamarca, Hungria, México e China. A decoração e a embalagem dos blocos são feitas em fábricas nos três primeiros países e na República Tcheca. A produção anual média desses blocos é de aproximadamente 36 bilhões, ou cerca de 1.140 peças por segundo. Uma das maiores empresas da Europa, Lego é a maior fabricante de brinquedos do mundo em vendas.\n[…]\nAté julho de 2015, 600 bilhões de peças de Lego haviam sido produzidas.\n[…]\nO brinquedo surgiu numa pequena empresa familiar na década de 1930. Obteve sucesso na década de 1960, expandindo-se nas décadas seguintes. O criador fundiu duas palavras em dinamarquês para obter o nome \"LEGO\": leg godt que significa \"brincar bem\". Atualmente o grupo LEGO emprega mais de 10.000 pessoas em cerca de 140 países, ocupando a posição de líder mundial no segmento de brinquedos para crianças nas faixas dos três meses aos dezesseis anos de idade.\n[…]\nFIRST LEGO League Campeonato da LEGO de Robótica\n[…]\nViolência e Lego\n[…]\nHistória do Lego\n[…]\nPatente estadunidense do Lego\n[…]\n(em inglês) LEGO\n[…]\n(em inglês) LEGO BIONICLE\n[…]\n(em inglês) LEGO CLICKITS\n[…]\n(em inglês) LEGO EXO-FORCE\n[…]\n(em inglês) LEGO MINDSTORMS",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "KFC",
      "descricao": "Rede americana de lanchonetes de frango frito fundada por Harland Sanders, o Coronel Sanders, em Kentucky."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo a receita secreta do coronel Sanders, o frango frito original do KFC leva quantas ervas e especiarias?",
    "resposta": "Onze",
    "distratores": [
      "Sete",
      "Nove",
      "Treze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/KFC"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/KFC",
        "situacao": "ok",
        "texto": "KFC Corporation, trading as Kentucky Fried Chicken (KFC), is an American multinational fast food restaurant chain specializing in Southern fried chicken and chicken sandwiches. Headquartered in Plano, Texas, it is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with over 31,980 locations globally in 150 countries, as of September 2025. The chain is a subsidiary\n[…]\nKFC's original product is pressure-fried chicken pieces, seasoned with Sanders' signature recipe of \"11 herbs and spices\". The constituents of the recipe are a trade secret. Larger portions of fried chicken are served in a cardboard \"bucket\", which has become a feature of the chain since it was first introduced by franchisee Pete Harman in 1957.\n[…]\nThe new method reduced production time to be comparable with deep frying while, in the opinion of Sanders, retaining the quality of pan-fried chicken.\n[…]\nAustralia rebranded KFC back to its original name, \"Kentucky Fried Chicken\" in 2019.\n[…]\nJoe Ledington of Kentucky, a nephew by marriage of Colonel Sanders, claimed to have found a copy of the original KFC fried chicken recipe on a handwritten piece of paper in an envelope in a scrapbook. In August 2016, Chicago Tribune staffers conducted a cooking test of this recipe and claimed after a few attempts that, with the addition of the MSG flavor-enhancer Ac'cent, they produced fried chicken which tasted \"indistinguishable\" from the chicken they purchased at KFC.\n[…]\nAdvertising played a key role at KFC after it was sold by Sanders and the company began to advertise on US television with a budget of US$4 million in 1966. In order to fund nationwide advertising campaigns, the Kentucky Fried Chicken Advertising Co-Op was established, giving franchisees 10 votes and the company three when deciding on budgets and campaigns. In 1969, KFC hired its first national advertising agency, Leo Burnett."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kentucky_Fried_Chicken",
        "situacao": "ok",
        "texto": "Kentucky Fried Chicken (KFC; em português:  Frango Frito do Kentucky) é uma rede de restaurantes de fast-food americana, que explora a antiga receita de frango frito do Kentucky, criada pelo Coronel Harland Sanders, fundador do KFC, em 1939, na cidade de Corbin, no estado do Kentucky, nos Estados Unidos. Atualmente, tem a sua sede em Louisville, no estado de Kentucky e pertence à empresa Yum! Bran\n[…]\nA companhia adoptou a forma abreviada do seu nome em 1991 por três razões: para retirar ênfase ao frango (uma vez que pretendia oferecer outros tipos de comida), para afastar as conotações pouco saudáveis da palavra frito e por considerar que um nome mais curto atrairia melhor os jovens. Recentemente, começou a voltar a abraçar o nome Kentucky Fried Chicken, usando ambas as formas nos seus anúncios comerciais.\n[…]\nNascido e criado em Henryville, no estado de Indiana, o coronel Sanders teve várias profissões ao longo da sua vida. Começou por servir o seu frango frito durante a grande depressão, numa bomba de gasolina que possuía, em Corbin, no Kentucky, e, mais tarde, num restaurante e motel, rebatizado Harland Sanders Restaurant, que comprou do lado oposto da rua.\n[…]\nO coronel Sanders vendeu a rede completa do KFC em 1964 por 2 milhões de dólares (que correspondem a 20,6 milhões de dólares em 2025) e, desde então, a marca foi vendida mais três vezes, sendo a mais recente à PepsiCo, que em 1997 deu origem a uma nova empresa filiada especializada em restaurantes, hoje chamada Yum! Brands.\n[…]\nA receita secreta do coronel à base de 11 ervas e especiarias é comercializada como um dos mais bem guardados segredos. A receita original manuscrita está alegadamente trancada numa caverna em Louisville, no Kentucky, com cópias parciais de segurança noutros locais. A companhia afirma que os fornecedores dos temperos só fornecem uma parte da receita, ignorando a identidade uns dos outros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bombril",
      "descricao": "Marca brasileira de esponjas de lã de aço para limpeza, cujo nome virou sinônimo do produto."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo o slogan que marcou a marca no Brasil, a esponja de aço Bombril tem quantas utilidades?",
    "resposta": "Mil e uma",
    "distratores": [
      "Cem",
      "Mil",
      "Duas mil"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bombril"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bombril",
        "situacao": "ok",
        "texto": "A Bombril é uma empresa brasileira fabricante de produtos de higiene e limpeza doméstica. Fundada em 14 de janeiro de 1948 na cidade de São Paulo por Roberto Sampaio Ferreira, com a criação de uma lã de aço com a ideia de ajudar na limpeza de panelas de alumínio, a marca virou um sinônimo do produto no país. Com sucesso da lã de aço, a empresa passou diversificar seu portfólio no mercado, passando\n[…]\nAs várias utilidades de limpeza do produto inspiraram a criação do slogan \"1001 utilidades\".\n[…]\nEm maio de 2011, a Bombril comprou 75% da marca Ecologie, por quinze milhões de reais, criando mais tarde a Bril Cosméticos para competir no setor. Em 2012, foi lançado um limpador de telas de LCD, LED e outras superfícies delicadas.\n[…]\nEm janeiro de 2021, a Bombril lançou um pano umedecido com álcool a 70% de pureza, o qual ela integrou à marca Limpol, de produtos de limpeza.\n[…]\nA Bombril registrou um prejuízo líquido de 6,2 milhões de reais no segundo trimestre de 2018, uma grande queda em relação ao lucro de 22,1 milhões do segundo trimestre do ano anterior. A fabricante terminou o primeiro trimestre de 2019 com prejuízo de 5,5 milhões de reais, e mencionou a \"economia lenta\" como causa; um ano antes, tivera um prejuízo maior, de 15,8 milhões de reais.\n[…]\nA Caixa de Previdência dos Funcionários do Banco do Brasil (Previ) reduziu sua participação acionária de 7,79% para 2,10% em 30 de setembro de 2019. A Sociedade Corretora Paulista (Socopa) vendeu toda a sua participação na Bombril, de 15,54%, em abril de 2020.\n[…]\nA Bombril conta com uma extensa linha de produtos.\n[…]\nBombril é um sinônimo de lã de aço no Brasil. Durante o período em que Carlos Moreno foi o Garoto Bombril, fez aproximadamente quatrocentos comerciais diferentes, e entrou para o Guinness World Records por maior tempo de permanência no ar."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Bombril",
      "descricao": "Marca brasileira de esponjas de lã de aço para limpeza, cujo nome virou sinônimo do produto."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que ator brasileiro, de jeito tímido e engraçado, foi por mais de três décadas o garoto-propaganda da Bombril?",
    "resposta": "Carlos Moreno",
    "distratores": [
      "Tony Ramos",
      "Marcos Caruso",
      "Antônio Fagundes"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carlos_Moreno_(ator)",
      "https://pt.wikipedia.org/wiki/Bombril"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carlos_Moreno_(ator)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bombril",
        "situacao": "ok",
        "texto": "A Bombril é uma empresa brasileira fabricante de produtos de higiene e limpeza doméstica. Fundada em 14 de janeiro de 1948 na cidade de São Paulo por Roberto Sampaio Ferreira, com a criação de uma lã de aço com a ideia de ajudar na limpeza de panelas de alumínio, a marca virou um sinônimo do produto no país. Com sucesso da lã de aço, a empresa passou diversificar seu portfólio no mercado, passando\n[…]\nEm 1978, surge o \"Garoto Bombril\", interpretado pelo ator Carlos Moreno. Passou a ser vendido, também, o detergente Limpol. Em seguida, foram lançados produtos como os desinfetantes Pinho e Kalipto. No dia 1 de junho, o nome da empresa foi mudado para Bombril Indústria e Comércio. Em 1983, é lançado o amaciante Mon Bijou e inaugurada fábrica na Bahia.\n[…]\nEm 1997, comprou a fabricante de conservas de tomate italiana Cirio, e passou a patrocinar o time do São Paulo. No ano seguinte, compra a Indústria Alimentícia Carlos de Brito, que fabricava conservas de peixe. A Cirio foi revendida ao grupo de Cragnotti. Em 1998, lançou os limpadores Bombril Multi Uso e Multi Limpeza.\n[…]\nAssim, pela primeira vez em 33 anos, os anúncios não foram protagonizados por Carlos Moreno, mas por Dani Calabresa, Marisa Orth, Monica Iozzi e Ivete Sangalo.\n[…]\nEm 2016, a empresa teve de cortar todos os gastos com propaganda, inclusive cancelando o contrato de Carlos Moreno como o Garoto Bombril. Isso foi necessário devido aos vários prejuízos que ocorriam desde 2015, quando fornecedores se negaram a enviar matéria-prima às fábricas. Metade dos 550 tipos de produto foram limados, cinco marcas deixaram de existir, e 450 funcionários — 16% da força de trabalho — foram demitidos.\n[…]\nBombril é um sinônimo de lã de aço no Brasil. Durante o período em que Carlos Moreno foi o Garoto Bombril, fez aproximadamente quatrocentos comerciais diferentes, e entrou para o Guinness World Records por maior tempo de permanência no ar."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Puma",
      "descricao": "Empresa alemã de calçados e artigos esportivos fundada em 1948 por Rudolf Dassler em Herzogenaurach."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que parentesco unia os fundadores das marcas esportivas alemãs Puma e Adidas, rivais desde os anos quarenta?",
    "resposta": "Eram irmãos",
    "distratores": [
      "Pai e filho",
      "Primos",
      "Cunhados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Puma_(brand)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Puma_(brand)",
        "situacao": "ok",
        "texto": "Puma SE is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.\n[…]\nA few months before the 1970 FIFA World Cup, Armin Dassler (Rudolf's son) of Puma and his cousin Horst Dassler (Adi's son) of Adidas signed \"the Pelé Pact\", an agreement that neither company would contract with Pelé, the world's most famous athlete. The companies reasoned that a bidding war for Pelé would be too expensive. Puma soon broke the pact and signed him.\n[…]\nIn April 2025, Puma announced that CEO Arne Freundt would step down due to differing views on strategy with the supervisory board. He is to be succeeded by Arthur Hoeld, a former Adidas executive, effective 1 July 2025.\n[…]\nPuma ranks as one of the top shoe brands with Adidas and Nike, and employs more than 18,000 people worldwide. The company has corporate offices around the world, including four defined as \"central hubs\": Assembly Row, Somerville, Massachusetts; Hong Kong; Ho Chi Minh City, Vietnam; and global headquarters in Herzogenaurach, Germany.\n[…]\nAccording to a joint report from Labour Behind the Label and Community Legal Education Centre, 30 workers fainted in November 2012 while producing clothing for Puma in China. The faintings were caused by excessive heat and alleged forced overtime. In 2014, almost 120 workers fainted in two Cambodian clothing factories where sportswear was being produced for Puma and Adidas, due to temperatures above 100 degrees Fahrenheit (38 °C).\n[…]\nIn March 2017, 150 workers assembling Puma products in Cambodia fainted due to thick smoke.\n[…]\nSabel v Puma, a CJEU case on trade marks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Puma_SE",
        "situacao": "ok",
        "texto": "PUMA é uma empresa alemã de equipamentos desportivos, fundada em 1948 pelo empresário alemão Rudolf Dassler, com sede em Herzogenaurach, Alemanha.\n[…]\nA empresa surgiu através da separação da Gebrüder Dassler Schuhfabrik, uma antiga fábrica de calçados de pano criada por Rudolf e seu irmão Adolf Dassler (fundador da também alemã Adidas) em 1924. No ano de 1924 dois irmãos, Adolf (apelido Adi) e Rudolf (apelido Rudi) Dassler, criaram uma pequena empresa de calçados de pano, a Gebrüder Dassler Schuhfabrik. Aos poucos a produção começou a crescer e fornecer sapatos para atletas olímpicos.\n[…]\nO atleta Jesse Owens, nas Olimpíadas de Berlim, 1936, começou a mostrar o trabalho dos irmãos alemães ao mundo.\n[…]\nA empresa mostrava um desenvolvimento rápido, numa velocidade que fez com que os irmãos buscassem seus próprios lucros, ou seja, se separaram. No ano de 1948, Adi Dassler fundou a Adidas enquanto Rudolf criou a Puma Fábrica de Sapatos Rudolf Dassler. Um ano após a divisão da empresa, Rudolf mudou a sede da empresa para Herzogenaurach, cidade próxima do grande centro Nuremberg.\n[…]\nDessa forma a Puma atingia a América e conseguindo o direito da National Football League, NFL, passou a distribuir o uniforme para 13 equipes do esporte mais popular dos Estados Unidos, o Futebol Americano. Não demorou muito para conseguir a liberação da NBA, e fornece uniformes para nove equipes de outro desporto conhecido na terra norte-americana, o basquete.\n[…]\nDesde o ano de 2004, a logo marca encontra na África um novo investimento. A maioria das delegações africanas são patrocinadas pela Puma. Isso faz com que a Puma S.A. atinja os cinco continentes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Barbie",
      "descricao": "Boneca lançada pela empresa americana Mattel em 1959, criada por Ruth Handler."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Barbie foi inspirada em qual boneca alemã, baseada numa personagem de tirinha de jornal?",
    "resposta": "Lilli",
    "distratores": [
      "Heidi",
      "Gretel",
      "Sindy"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barbie",
      "https://en.wikipedia.org/wiki/Bild_Lilli_doll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barbie",
        "situacao": "ok",
        "texto": "Barbie is a fashion doll franchise created by American businesswoman Ruth Handler, manufactured by American toy and entertainment company Mattel and introduced on March 9, 1959. The toy was based on the German Bild Lilli doll which Handler had purchased while in Europe. The figurehead of an eponymous brand that includes a range of fashion dolls and accessories, Barbie has been an important part of\n[…]\nIn 1956, during a trip to Switzerland with her children Barbara and Kenneth, Ruth Handler encountered a German toy doll called Bild Lilli. The adult-figured doll was exactly what Handler had in mind, so she purchased three of them. She gave one to her daughter and took the others back to Mattel. The Lilli doll was based on a popular character appearing in a satirical comic strip drawn by Reinhard Beuthin for the newspaper Bild.\n[…]\nThe Lilli doll was first sold in West Germany in 1955, and although it was initially sold to adults, it became popular with children who enjoyed dressing her up in outfits that were available separately.\n[…]\nLouis Marx and Company sued Mattel in March 1961. After licensing Lilli, they claimed that Mattel had \"infringed on Greiner & Hausser's patent for Bild-Lilli's hip joint\", and also claimed that Barbie was \"a direct take-off and copy\" of Bild-Lilli. The company additionally claimed that Mattel \"falsely and misleadingly represented itself as having originated the design\". Mattel counter-claimed and the case was settled out of court in 1963.\n[…]\nIn 1964, Mattel bought Greiner & Hausser's copyright and patent rights for the Bild-Lilli doll for $21,600, equivalent to $218,000 in 2025.\n[…]\nThis statistic inspired the release of Judge Barbie in four different skin tones and hairstyles with judge robes and a gavel accessory.\n[…]\nTotally Hair Barbie\n[…]\nAnna Hart, Introducing the new, realistic Barbie: 'The thigh gap has officially gone', The Telegraph website, January 28, 2016"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bild_Lilli_doll",
        "situacao": "ok",
        "texto": "The Bild Lilli doll was a West German line of fashion doll launched by Greiner & Hausser GmbH on August 12, 1955 and produced until 1964. Its design was based on the comic-strip character Lilli, created by Reinhard Beuthien for the tabloid newspaper Bild. The doll was made of polystyrene, came in two sizes, and had an available wardrobe of 1950s fashion. The Lilli doll was copied, and altered to s\n[…]\nMattel acquired the rights to Bild Lilli in 1964, and production of the German doll ceased in favor of Mattel's new vinyl doll, which they called Barbie.\n[…]\nA total of 130,000 were made. The doll eventually became popular with children as well. Dollhouses, room settings, furniture, and other toy accessories to scale with the small Lilli were produced by German toy factories to cash in on her popularity amongst children and parents.\n[…]\nMattel's Barbie doll, which appeared in March 1959, was based on Bild Lilli dolls that co-founder Ruth Handler had acquired in Hamburg. The first Barbie doll was made of vinyl instead of hard plastic, had rooted hair with curly bangs rather than a wig-cap, and included separate shoes and earrings which were not molded on as Lilli's were. However, apart from these differences, the earliest Barbie dolls were in many ways quite similar to Lilli in overall shape and appearance.\n[…]\nLouis Marx and Company acquired the rights to the Bild Lilli doll from Hausser and sold Miss Seventeen and smaller Miss Marlene dolls. Mattel had bought all patents and copyrights to the Bild Lilli doll so that using that name as a book title or product name would infringe copyright laws. Marx unsuccessfully attempted to sue Mattel for patent infringement.\n[…]\nLilli has been a collector's piece. In the Coburg Doll Museum, over 1,000 historic dolls are displayed, including the Lilli doll, the \"grandmother\" of the world-famous Barbie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barbie",
        "situacao": "ok",
        "texto": "Barbie é uma boneca e personagem fictícia fabricada pela empresa estadunidense de brinquedos Mattel, Inc. e lançada em 9 de março de 1959. A empresária Ruth Handler é creditada como a criadora da boneca usando uma boneca alemã chamada Bild Lilli como sua inspiração. Barbie é a figura principal de uma marca de bonecas e acessórios da Mattel, incluindo outros membros da família e bonecas colecionáve\n[…]\nDurante uma viagem à Alemanha em 1956 com seus filhos Barbara e Kenneth, Ruth Handler se deparou com uma boneca de brinquedo alemã chamada Bild Lilli. A boneca de figura adulta era exatamente o que Handler tinha em mente, então ela comprou três delas. Ela deu uma para a filha e levou as outras de volta para a Mattel. A boneca Lilli foi baseada em uma personagem popular que aparece em uma história em quadrinhos desenhada por Reinhard Beuthin para o jornal Bild.\n[…]\nLilli era uma loira sensual, uma garota trabalhadora que sabia o que queria e não hesitava em usar homens para consegui-lo. A boneca Lilli foi vendida pela primeira vez na Alemanha em 1955 e, embora tenha sido inicialmente vendida para adultos, tornou-se popular entre as crianças que gostavam de vesti-la com roupas disponíveis separadamente.\n[…]\nA Louis Marx and Company processou a Mattel em março de 1961. Depois de licenciar a Lilli, eles alegaram que a Mattel havia \"infringido a patente de Greiner & Hausser para a articulação do quadril de Bild-Lilli\" e também alegaram que Barbie era \"uma cópia direta\" de Bild-Lilli. A empresa também alegou que a Mattel \"falsa e enganosamente se apresentou como tendo originado o design\". A Mattel rebateu e o caso foi resolvido fora do tribunal em 1963.\n[…]\nEm 1964, a Mattel comprou os direitos autorais e de patente da Greiner & Hausser para a boneca Bild-Lilli por 21,6 mil dólares.\n[…]\nProporções corporais irrealistas em bonecas Barbie têm sido associadas a alguns distúrbios alimentares em crianças.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Barbie",
      "descricao": "Boneca lançada pela empresa americana Mattel em 1959, criada por Ruth Handler."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Qual empresária americana, uma das fundadoras da Mattel, criou a boneca Barbie?",
    "resposta": "Ruth Handler",
    "distratores": [
      "Mary Kay Ash",
      "Estée Lauder",
      "Beatrice Alexander"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ruth_Handler"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ruth_Handler",
        "situacao": "ok",
        "texto": "Ruth Marianna Handler (née  Mosko; November 4, 1916 – April 27, 2002) was an American business magnate and inventor. She is best known for inventing the Barbie doll in 1959 and being co-founder of toy manufacturer Mattel with her husband Elliot, as well as serving as the company's first president from 1945 to 1975.\n[…]\nIn 1932, Ruth fell in love with Izzy Handler, an art student. The summer of her sophomore year at University of Denver, she went to Los Angeles and landed a job at Paramount Studio. Ruth and Izzy married in 1938 in Denver. Returning to California, Ruth encouraged her husband to become known by his middle name, Elliot. Ruth returned to work at Paramount and Elliot was employed as a lighting fixture designer.\n[…]\nBusiness executive Harold \"Matt\" Matson joined the Handlers' company, which they renamed Mattel by combining \"Matson\" and \"Elliot\". (Elliot later said that they were unable to think of a way to include Ruth's name.) When sales fell during World War II, Mattel began making toy furniture. Its success spurred the company's transition to toy manufacturing.\n[…]\nDuring a trip to Europe in 1956 with Barbara and her son Kenneth, Ruth came across Bild Lilli, a German doll. In an interview with Mary G. Lord, author of Forever Barbie, Handler said that she saw the doll in Lucerne, Switzerland. However, the book points out that on other occasions Handler said that she saw it in Zürich or Vienna. The adult-figured doll was exactly what Ruth had in mind. She purchased three, gave one to her daughter, and took the others to Mattel.\n[…]\nGerber, Robin. Barbie and Ruth: The Story of the World's Most Famous Doll and the Woman Who Created Her. Harper/Collins, 2008.\n[…]\nWepman, Dennis. \"Handler, Ruth\" American National Biography (2000) online\n[…]\nRuth Handler at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ruth_Handler",
        "situacao": "ok",
        "texto": "Ruth Handler (Denver, 4 de novembro de 1916 - Los Angeles, 27 de abril de 2002) foi uma empresária estadunidense, presidente da fábrica de brinquedos Mattel.\n[…]\nRuth Handler, uma das dez filhas de um casal de imigrantes poloneses, nasceu e foi criada em Denver, no Colorado. Foi criadora da Barbie, a boneca mais famosa do mundo, morreu aos 85 anos, em Los Angeles, na California.\n[…]\nRuth, que batizou a boneca com o nome da própria filha, Barbara, também foi uma das fundadoras da Mattel juntamente com o marido, a empresa fabricante das famosas bonecas. Mais tarde ela diversificou a produção ao criar Ken, o namorado de Barbie. O nome do boneco também teve origem na família de Handler. Ele foi batizado com o nome do filho, Kenneth, morto em 1994, vítima de um tumor no cérebro.\n[…]\nA linha de bonecas inclui ainda a irmãzinha de Barbie, Kelly, e outros personagens que foram criados em homenagem aos netos de Ruth. A vida de Ruth e do marido sofreu um revés no final da década de 70, quando foram forçados a deixar a empresa. Em 1978, ela foi condenada por fraude, tendo que pagar uma multa e prestar serviços comunitários.\n[…]\nA reviravolta veio em seguida, depois de Ruth ter retirado um seio que tinha sido atingido por câncer. Ela aderiu às campanhas de conscientização da mulher. Ruth Handler morreu de complicações pós-operatórias depois de ter sido operada para a retirada de um câncer no cólon no hospital Century City.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Chanel número cinco",
      "descricao": "Perfume da grife francesa Chanel lançado em 1921, criado pelo perfumista Ernest Beaux para Coco Chanel."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que atriz de Hollywood contou a um repórter que, para dormir, vestia apenas algumas gotas de Chanel número cinco?",
    "resposta": "Marilyn Monroe",
    "distratores": [
      "Audrey Hepburn",
      "Grace Kelly",
      "Elizabeth Taylor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chanel_No._5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chanel_No._5",
        "situacao": "ok",
        "texto": "Chanel No. 5 is the first perfume launched by French couturier Gabrielle \"Coco\" Chanel in 1921. The scent formula for the fragrance was compounded by French-Russian chemist and perfumer Ernest Beaux. The design of its bottle has been an important part of the product's branding. Coco Chanel was the first face of the fragrance, appearing in the advertisement published by Harper's Bazaar in 1937.\n[…]\nIn April 1952, American actress Marilyn Monroe appears for the first time on the cover of Life, and the article mentions her answer to the question, \"What do you wear to bed?\" and her reply, \"Chanel No. 5.\" In an unpublished photo shoot for an article by Sidney Skolsky in Modern Screen in 1953, a Chanel No. 5 bottle is seen on her nightstand.\n[…]\nIn the 1990s, more money was reportedly spent advertising Chanel No. 5 than was spent for the promotion of any other fragrance. Carole Bouquet was the face of Chanel No. 5 during this decade. In the UK, this product was the first ever commercial aired on the newly launched Channel 5 network. In 1998, Estella Warren became the new spokesmodel for Chanel and shot two commercials with French director Luc Besson the latter which aired in 2001.\n[…]\nIn May 2012, the company announced that Brad Pitt would be the first male to advertise Chanel No. 5.\n[…]\nIn 2013 Chanel ran an advertising campaign using a recorded interview with Marilyn Monroe in which she is asked about her use of Chanel No. 5. It featured Ed Feingersh's photograph of the actress splashing herself with a bottle of the perfume. On her first cover of Life magazine in 1952, Marilyn Monroe famously said she wore only Chanel No. 5 to bed. A recording of her discussing the subject further with Georges Belmont for Marie Claire in 1960 has been found. She said people pose questions.\n[…]\nCoco Chanel (1937)\n[…]\nMarilyn Monroe (2013)\n[…]\nMedia related to Chanel No. 5 at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanel_N%C2%BA_5",
        "situacao": "ok",
        "texto": "Chanel Nº 5 é um perfume feminino lançado em 1921 pela maison francesa Chanel. Criado pelo perfumista Ernest Beaux a pedido de Coco Chanel, é considerado uma das fragrâncias mais influentes da história da perfumaria moderna.\n[…]\nO perfume foi desenvolvido após Coco Chanel solicitar uma fragrância que representasse uma mulher moderna, afastando-se dos perfumes excessivamente florais do início do século XX.\n[…]\nErnest Beaux apresentou diversas amostras numeradas, e Chanel escolheu a quinta proposta, dando origem ao nome Nº 5. O lançamento oficial ocorreu em 5 de maio de 1921.\n[…]\nChanel Nº 5 pertence à família olfativa floral-aldeídica. Sua composição inclui aldeídos combinados com notas florais como jasmim e rosa de maio, além de notas amadeiradas na base.\n[…]\nDesde sua criação, Chanel Nº 5 esteve associado a campanhas publicitárias de grande visibilidade internacional.\n[…]\nNos anos 1970, a atriz Catherine Deneuve tornou-se o rosto da fragrância nos Estados Unidos.\n[…]\nChanel Nº 5 tornou-se um símbolo cultural do luxo e da feminilidade no século XX. A declaração atribuída à atriz Marilyn Monroe, afirmando que usava apenas algumas gotas do perfume ao dormir, contribuiu significativamente para sua notoriedade internacional.\n[…]\nAo longo de sua história, Chanel Nº 5 foi associado a diversas personalidades do cinema e da moda, que participaram de campanhas publicitárias internacionais:\n[…]\nCoco Chanel (1937)\n[…]\nMarilyn Monroe (imagens de arquivo) (2013)\n[…]\n(em inglês) Chanel Nº 5",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "BMW",
      "descricao": "Montadora alemã de automóveis e motocicletas sediada em Munique, cujo logotipo é um círculo azul e branco."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As cores azul e branca do logotipo da BMW vêm da bandeira de qual estado alemão?",
    "resposta": "Baviera",
    "distratores": [
      "Saxônia",
      "Hesse",
      "Turíngia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/BMW"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/BMW",
        "situacao": "ok",
        "texto": "Bayerische Motoren Werke AG, trading as BMW Group (commonly abbreviated to BMW (German pronunciation: [ˌbeːʔɛmˈveː] ), sometimes anglicised as Bavarian Motor Works), is a German multinational conglomerate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Germany. The moniker \"BMW\" first came into use when the German firm Rapp Motorenwerke changed its name to Bayerische Motor\n[…]\nThereafter, in 1922, the name and assets of BMW GmbH were transferred to the aircraft manufacturer Bayerische Flugzeugwerke AG (formerly Otto Flugmaschinenfabrik), thereby giving rise to the company known today as BMW AG.\n[…]\nBMW traces its origins to aircraft engine manufacturer [Otto Flugmaschinenfabrik,] founded in 1910 by Gustav Otto in the Kingdom of Bavaria, German Empire. On 18 August 1916, the firm was reorganized as Bayerische Flugzeugwerke (BFW). In 1922, BFW was renamed Bayerische Motoren Werke (BMW).\n[…]\nThe name BMW, however, had earlier been used by a company founded in 1913 by Karl Rapp as Rapp Motorenwerke. In 1922, the name and engine-production assets of Rapp Motorenwerke were transferred to Bayerische Flugzeugwerke, which adopted the BMW name in the same year.\n[…]\nBMW is an abbreviation for Bayerische Motoren Werke. This name is grammatically incorrect (in German, compound words must not contain spaces), which is why the grammatically correct form of the name, Bayerische Motorenwerke (German pronunciation: [ˈbaɪʁɪʃə moˈtoːʁənˌvɛʁkə] ) has been used in several publications and advertisements in the past. Bayerische Motorenwerke translates into English as Bavarian Motor Works.\n[…]\nThe circular blue and white BMW logo or roundel evolved from the circular Rapp Motorenwerke company logo, which featured a black ring bearing the company name surrounding the company logo, an image of a horse head on a plinth."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/BMW",
        "situacao": "ok",
        "texto": "Bayerische Motoren Werke (em português:  Fábrica de Motores da Baviera; conhecida simplesmente como BMW) é uma empresa automobilística alemã, fabricante de motocicletas e automóveis de luxo, sediada na Baviera, Alemanha. A BMW desenvolve, fabrica e comercializa seus automóveis sob as marcas BMW, Mini e Rolls-Royce, e as motocicletas sob a marca BMW Motorrad.\n[…]\nAs raízes da BMW estão ligadas a Karl Rapp e Gustav Otto. Em 1917, a empresa Rapp Motorenwerke Byertoren Werke, Aktiengesellschaft. Em 1916, a empresa Flugmaschinenfabrik Gustav Otto foi incorporada à Bayerische Flugzeug-Werke (BFW) a pedido do governo. A BMW posteriormente transferiu suas operações de construção de motores – incluindo a empresa e os nomes da marca – para a BMW, em 1922.\n[…]\nA data de fundação da BMW, 7 de março de 1916, entrou para a história como a data de nascimento da Bayerische Motoren Werke.\n[…]\nInicialmente a Bayerische Motoren Werke foi fundada com o intuito de produzir motores para aviões, mas após a Primeira Guerra Mundial, devido ao Tratado de Versailles, foi proibida de construí-los. Por esse motivo chegou a produzir motocicletas, e mais tarde dedicou-se à fabricação de automóveis.\n[…]\nAté há pouco tempo a própria BMW dizia que o seu símbolo representa uma hélice de avião a girar juntamente com o símbolo da Baviera, mas em descobertas recentes, a BMW alterou a sua versão sendo o azul/branco proveniente de uma antiga bandeira da Baviera. O símbolo BMW foi estampado na carroceria de um carro pela primeira vez em 1928.\n[…]\nA BMW iniciou investimentos em iniciativas sustentáveis e relacionadas à economia colaborativa. A montadora tem investido em compartilhamento de veículos, com as empresas DriveNow e ReachNow, disponibilizando carros para usuários na Europa e Estados Unidos, respectivamente.\n[…]\nQuatro Rodas. BMW CS: velocidade em estado da arte",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "All Star",
      "descricao": "Modelo de tênis de lona da americana Converse, também chamado Chuck Taylor All Star, criado no início do século vinte."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O nome Chuck Taylor, estampado no tênis All Star da Converse, é de um jogador e vendedor ligado a qual esporte?",
    "resposta": "Basquete",
    "distratores": [
      "Beisebol",
      "Tênis",
      "Atletismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chuck_Taylor_All-Stars"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chuck_Taylor_All-Stars",
        "situacao": "ok",
        "texto": "Chuck Taylor All-Stars or Converse All Stars (also referred to as  \"Converse\", \"Chuck Taylors\", \"Chucks\", \"Chuckys\", \"Cons\", \"All Stars\", and \"Chucky Ts\") are sneakers manufactured by American fashion brand Converse (a subsidiary of Nike, Inc. since 2003). Initially developed as a basketball shoe in the early 20th century, its design has remained largely unchanged since its introduction. The shoe \n[…]\ninto the high-top's ankle patch, resulting in the design that became known as the Chuck Taylor All Star.\n[…]\nIn 2013, Converse launched the Chuck Taylor All Star '70, which featured a build similar to the All Stars used for basketball games built in the late 1960s and early 1970s. This retro model differed from the then-current Chuck Taylor All Stars, as various changes happened to the All Star shoes over the intervening three decades.\n[…]\nOn July 28, 2015, Converse released the Chuck Taylor All Star II.\n[…]\nThe cast of several popular network television series such as Dennis the Menace (1959–64), M*A*S*H (1972–83), Happy Days (1974–84) and The A-Team (1983–87) have worn Converse All Star shoes. Wally and Beaver are seen wearing Converse as they climb a ladder in a 1958 episode (S1E18) of the MCA TV show Leave It to Beaver. Opie Taylor (Ron Howard) wore Chuck Taylor high tops in season 4 episode 9 of the Andy Griffith Show which first aired on 11/25/1963.\n[…]\nIn 2015, Converse released the Converse All-Star Andy Warhol collection, in partnership with the Andy Warhol Foundation. In honor of Warhol's contributions to visual art, Converse designed the All-Star shoe to commemorate Warhol's subcultural influence. Since 2018, sculptor Michael Leavitt has formatted long-running projects for art students and craftspeople to make a do-it-yourself Converse Chuck Taylor cardboard shoe.\n[…]\nThe low-top Chuck Taylors provide complete ankle mobility, as the canvas does not cover the ankles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chuck_Taylor_All_Star",
        "situacao": "ok",
        "texto": "Chuck Taylor All Star ou Converse All Star (também chamado  \"Chuck Taylor All-Stars\", \"Chuck Taylors\", \"Chucks\", \"Cons\", \"All Stars\" e \"Chucky Ts\") são tênis fabricados pela marca de moda americana Converse (uma subsidiária da Nike, Inc. desde 2003). Inicialmente desenvolvido como um tênis de basquetebol no início do século XX, seu design permaneceu praticamente inalterado desde sua introdução. O \n[…]\nA Converse começou a fabricar um tênis de basquete antigo em 1917 e o redesenhou em 1922, quando Chuck Taylor pediu à empresa para criar um tênis melhor com mais suporte e flexibilidade. Depois que a Converse adicionou a assinatura de Taylor ao remendo do tornozelo, eles ficaram conhecidos como Chuck Taylor All Stars.\n[…]\nNa década de 1960, a empresa havia conquistado cerca de 70 a 80 por cento do mercado de tênis de basquete, mas o tênis perdeu popularidade durante a década de 1970, quando os jogadores de basquete usavam marcas concorrentes. O Chuck Taylor All Stars teve um retorno em popularidade na década de 1980 como calçado casual de estilo retrô.\n[…]\nEmbora os Chuck Taylor All-Stars não sejam mais usados no basquete profissional, eles continuam populares como calçados casuais. A Converse lançou edições dos tênis em muitas cores e padrões, bem como modelos atualizados que mantêm a aparência original enquanto incorporam tecnologia mais nova.\n[…]\nInicialmente, foram produzidos em 1917 como uma tentativa da Converse padronizar os sapatos para o basquete. Eles não eram populares até o jogador Chuck Taylor adotá-los como seu sapato preferido para o esporte. Ele ficou impressionado com o design que, logo após, se tornou um dos sapatos mais vendidos. Depois de sugerir algumas alterações, o tênis ganhou o nome do jogador e sua assinatura na parte do tornozelo.\n[…]\nEmbora o preto seja o mais popular, Chuck preferia os tênis de cano longo (antigamente, conhecidos simplesmente como 'white').",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Peugeot",
      "descricao": "Fabricante francesa de automóveis, originada de uma empresa familiar de produtos de aço do século dezenove."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes dos automóveis, a família Peugeot já fabricava um utensílio de cozinha que leva a marca até hoje. Qual?",
    "resposta": "Moedor de pimenta",
    "distratores": [
      "Panela de pressão",
      "Batedeira",
      "Liquidificador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peugeot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot (UK:  , US:  ; French: [pøʒo] ) is a French automobile brand owned by Stellantis.\n[…]\nAs part of the Guangzhou Peugeot Automobile Company (GPAC) joint venture, the Peugeot 504 and 505 were built in China from 1985 to 1997.\n[…]\nIn January 2015, Indian multinational automotive giant Mahindra & Mahindra purchased a major stake of 51% of Peugeot Motocycles for a price of 28 million euro.\n[…]\nCzech Republic (Kolín), Toyota Peugeot Citroën Automobile Czech: Peugeot 107, Peugeot 108\n[…]\nDangote Peugeot Automobiles Nigeria: Peugeot 301\n[…]\nRussia (Kaluga), joint venture Peugeot Citroën Mitsubishi Automotiv: Peugeot 4007, Peugeot 308 (First Generation)\n[…]\nPeugeot has produced four \"Car of the Year Auto Europa\" award winners in Italy in 28 years, since 1987. \"Auto Europa\" is the prize awarded by the jury of the Italian Union of Automotive Journalists (UIGA), which annually celebrates the best car produced at least at 10,000 units in the 27 countries of the European Union, and sold between September and August the previous year.\n[…]\nTheir familiarity with the Peugeot engine was the basis of the famed Miller racing engine, which later developed into the Offenhauser.\n[…]\nPeugeot also had further success in international rallying, including in the World Rally Championship, with the four-wheel-drive turbo-charged versions of the Peugeot 205, and later the Peugeot 206. In 1981, Jean Todt, former co-driver for Hannu Mikkola, Timo Mäkinen, and Guy Fréquelin, among others, was asked by Jean Boillot, the head of Automobiles Peugeot, to create a competition department for PSA Peugeot Citroën.\n[…]\nPeugeot Mills"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot ([inglês RU: ˈpɜːʒəʊ], [inglês EUA: p(j)uːˈʒoʊ], francês: [pøʒo]) é uma fabricante de automóveis francesa fundada em 1810 por Armand Peugeot, pertencente à Stellantis. É a marca de automóveis mais antiga do mundo.\n[…]\nA família Peugeot, que desde 1810 tinham um moinho hidráulico familiar, vem envolvida em vários tipos de negócios desde o século XVIII. Em 1842, entraram no ramo alimentício produzindo moinhos de café, depois disso começaram a produzir armações para vestidos, guarda-chuvas, fundição de aço, ferramentas e utensílios domésticos, em 1882 começaram a fabricar bicicletas e motos.\n[…]\nPor volta de 1850, a marca teve a necessidade de distinguir as diferentes ferramentas que fabricava, e por isso registou três logotipos distintos: uma mão (para os produtos de 3ª categoria), uma lua crescente (2ª categoria) e um leão (1ª categoria), apenas o leão sobreviveu com o passar do tempo. A marca do leão foi registrada em 1858 pelos irmãos Peugeot (Jules e Emile) e feita pelo artesão Julien Blazer, para representar força, resistência e dinamismo.\n[…]\nCom o lançamento de uma gama inaugurada pelo novo Peugeot 308 na Europa e com o nascimento da Stellantis, em 25 de fevereiro de 2021 foi anunciado seu novo logotipo, que é, segundo a própria marca: \"um emblema que transmite identidade, atemporal, universal e multicultural. Um sinal distintivo, um símbolo de pertencimento, de reconhecimento. Sinônimo de prestígio, segurança, longevidade e linhagem. Com ele e seu novo universo gráfico, a PEUGEOT conjuga elementos históricos com a modernidade\".\n[…]\nPeugeot iOn\n[…]\nPeugeot Expert\n[…]\nPeugeot Traveller\n[…]\nPeugeot Boxer\n[…]\nPeugeot J5\n[…]\nPeugeot J7\n[…]\nPeugeot J9\n[…]\nPeugeot P4\n[…]\nSite Oficial da Peugeot — Brasil\n[…]\nSite Oficial da Peugeot — Portugal\n[…]\nPeugeot",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Toyota",
      "descricao": "Montadora japonesa de automóveis fundada em 1937 por Kiichiro Toyoda, sediada na cidade de Toyota."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes de fazer carros, a empresa da família Toyoda, que deu origem à Toyota, era conhecida por fabricar qual máquina?",
    "resposta": "Teares automáticos",
    "distratores": [
      "Máquinas de costura",
      "Bicicletas",
      "Motores de barco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota",
      "https://en.wikipedia.org/wiki/Toyota_Industries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn: Toyota Jidōsha kabushiki gaisha; IPA: [toꜜjota], English: , commonly known as simply Toyota) is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. Founded in 1937 by Kiichiro Toyoda, Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.\n[…]\nAs of 2026, the Toyota Motor Corporation produces vehicles under four brands: Century, Daihatsu, Lexus and the namesake Toyota.\n[…]\nIn April 1936, Toyoda's first passenger car, the Model AA, was completed. The sales price was ¥3,350, ¥400 cheaper than Ford or GM cars. The company's plant at Kariya was completed in May. In July, the company filled its first export order, with four G1 trucks exported to northeastern China. On September 19, 1936, the Japanese imperial government officially designated Toyota Automatic Loom Works as an automotive manufacturer.\n[…]\nSince toyoda literally means \"fertile rice paddies\", changing the name also prevented the company from being associated with old-fashioned farming. The newly formed word was trademarked and the company began trading on August 28, 1937, as the Toyota Motor Company Ltd. Kiichiro's brother-in-law Rizaburo Toyoda was appointed the firm's first president, with Kiichiro as vice-president. Toyota Automatic Loom Works formally transferred automobile manufacturing to the new entity on September 29.\n[…]\nToyota is headquartered in the city of Toyota, which was named Koromo until 1951, when it changed its name to match the automaker. Toyota City is located in the Aichi Prefecture of Japan. The main headquarters of Toyota is located in a four-story building that has been described as \"modest\". In 2013, company CEO Akio Toyoda reported that it had difficulties retaining foreign employees at the headquarters due to the lack of amenities in the city."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toyota_Industries",
        "situacao": "ok",
        "texto": "Toyota Industries Corporation (Japanese: 株式会社豊田自動織機, Hepburn: Kabushiki gaisha Toyota Jidō Shokki; literally \"Stock Company Toyota Automatic Loom\") is a Japanese machine maker. Originally, and still actively (as of 2026), a manufacturer of automatic looms, it is the company from which Toyota Motor Corporation developed. It is the world's largest manufacturer of forklift trucks measured by revenues\n[…]\nThe company was founded on 18 November 1926 as Toyoda Automatic Loom Works, Ltd. by Sakichi Toyoda, the inventor of a series of manual and machine-powered looms. The most significant of these was the 1924 Toyoda Automatic Loom, Type G, a completely automatic high-speed loom featuring the ability to change shuttles without stopping and dozens of other innovations.\n[…]\nIn 1933, the company established its automobile department, led by Kiichiro Toyoda, the eldest son of Sakichi Toyoda. This department was spun off as Toyota Motor Co., Ltd. in 1937 and is now known as Toyota Motor Corporation. Toyota Industries is one of 13 core companies of the Toyota Group. The company owns 9.15% of Toyota Motor and is the largest shareholder (excluding trust revolving funds).\n[…]\nToyota Industries also unveiled their new automated continuous spinning system. In 1967, the Toyota Publica entered into production at the company's Nagakusa plant. Toyota Industries had a monthly output of more than 1,000 units.\n[…]\nIn 2017, Toyota Industries acquired Bastian Solutions, a warehouse automation company, and Vanderlande, a manufacturer of automated material handling equipment, mostly for airports.\n[…]\nIn 2021, Toyota Industries formed T-Hive as TICO's solution for autonomous vehicle (AV) software solutions. The newly formed group focuses on warehouse, manufacturing, and airport logistics automation through AV's.\n[…]\nToyota Industries SC, a football club\n[…]\nToyota Industries Shining Vega, a Japanese women's softball team"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (em Japonês: トヨタ自動車株式会社, Toyota Jidōsha kabushikigaisha) é um fabricante automotivo japonês com sede na cidade de Toyota, província de Aichi, no Japão. Em março de 2014, a corporação multinacional era composta por 338 875 funcionários em todo o mundo e, em fevereiro de 2016, era a 13.ª maior empresa do mundo por receita. A Toyota foi o maior fabricante de automóveis em 201\n[…]\nA empresa foi fundada por Kiichiro Toyoda em 1937, como uma subsidiária da empresa de seu pai, a Toyota Industries, para criar automóveis. Três anos antes, em 1934, enquanto ainda era um departamento da Toyota Industries, criou seu primeiro produto, o tipo A, e, em 1936, seu primeiro carro de passageiros, o Toyota AA. A Toyota Motor Corporation produz veículos sob cinco marcas: Toyota, Hino, Lexus, Ranz e Daihatsu.\n[…]\nTambém detém uma participação de 16,66% na Fuji Heavy Industries, uma participação de 5,9% na Isuzu, uma participação de 3,58% na Yamaha Motor Company e uma participação de 0,27% na Tesla Motors, bem como joint-ventures na China (GAC Toyota e Sichuan FAW Toyota Motor), Índia (Toyota Kirloskar), República Tcheca (TPCA), juntamente com várias empresas \"não automotivas\".\n[…]\nO nome original da família era Toyoda, mas, por questões numerológicas, a indústria foi batizada como Toyota. As origens da empresa remontam à criação de uma secção dedicada à produção de automóveis na, já existente, empresa de fabricação de teares automáticos, chamada Toyoda Automatic Loom, em setembro de 1933.[carece de fontes]?\n[…]\nA Toyota abriu o ano de 2008 com o slogan “Ampliando Horizontes”, e em março anunciou o lançamento da 10.ª geração do Corolla, que veio para repetir o sucesso da geração anterior Ainda que a companhia seja hoje mais conhecida pelos carros que produz, seguindo o modelo produtivo Toyotismo, continua no negócio da produção de têxteis.[carece de fontes]?\n[…]\n«Estudo de Caso Toyota»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada em 1963 por Ferruccio Lamborghini, perto de Bolonha."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes de criar seus carros esportivos, o italiano Ferruccio Lamborghini enriqueceu fabricando qual tipo de veículo?",
    "resposta": "Tratores",
    "distratores": [
      "Motocicletas",
      "Caminhões",
      "Ônibus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
      "https://en.wikipedia.org/wiki/Lamborghini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Lamborghini  ( LAM-bər-GHEE-nee, Italian: [ferˈruttʃo lamborˈɡiːni]; 28 April 1916 – 20 February 1993) was an Italian automobile designer and industrialist who created Lamborghini Trattori in 1948 and Automobili Lamborghini in 1964, a maker of high-end sports cars in Sant'Agata Bolognese.\n[…]\nTrattori's unionised employees could not be laid off, putting immense strain on the company. In 1972, Lamborghini sold his entire holding in the company to rival tractor builder SAME. Soon, the entire Lamborghini group found itself in financial trouble. Development at the automaker slowed as costs were cut. Ferruccio Lamborghini began courting buyers for Automobili and Trattori, entering negotiations with Georges-Henri Rossetti, a wealthy Swiss businessman and friend.\n[…]\nLamborghini fathered a child, Patrizia, at age 58.\n[…]\nAll of Ferruccio Lamborghini's companies continue to operate today in one form or another. His son, Tonino, designs a collection of clothing and accessories under the Tonino Lamborghini brand, as well as designing the Town Life, an electric microcar which was revealed at the Bologna Motor Show in 1999. Ferruccio's daughter, Patrizia Lamborghini, runs the Lamborghini winery on his Umbria estate.\n[…]\nIn 1995 son Tonino opened a museum that honors Lamborghini's legacy, the Centro Studi e Ricerche Ferruccio Lamborghini in Dosso (Ferrara), which was moved to Argelato (Bologna) in 2014 with the new name Museo Lamborghini.\n[…]\nCowell, Alan (22 February 1993). \"Ferruccio Lamborghini, 76, Dies; A Top Maker of Stylish Sports Cars\". New York Times. New York City, New York. ISSN 0362-4331. Archived from the original on 20 April 2013. Retrieved 11 August 2012.\n[…]\nPatrizia Lamborghini discussing Lamborghini winery\n[…]\nAutomobili Lamborghini S.p.A. Automobiles; now a subsidiary of AUDI AG"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nFerruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978.\n[…]\nFerruccio Lamborghini, already an established industrialist who manufactured tractors, boilers, and air conditioners, founded Lamborghini Automobili on 7 May 1963.\n[…]\nAs of 2011, Lamborghini is structured as a wholly owned subsidiary of Audi AG named Automobili Lamborghini S.p.A.\n[…]\nAutomobili Lamborghini S.p.A. controls five principal subsidiaries: Ducati Motor Holding S.p.A., a manufacturer of motorcycles; Italdesign Giugiaro S.p.A., a design and prototyping firm that provides services to the entire Volkswagen Group; MML S.p.A. (Motori Marini Lamborghini), a manufacturer of marine engine blocks; and Volkswagen Group Italia S.p.A. (formerly Autogerma S.p.A.), which sells Audi and other Volkswagen Group vehicles in Italy.\n[…]\nFerrucio Lamborghini (1963–1972)\n[…]\n\"Principales cláusulas de los contratos con USA e Italia\" [Main Contract Terms between USA and Italy]. lamborghini-latinoamerica.com (in Spanish). Automóviles Lamborghini Latinoamérica S.A. de C.V. 5 August 1995. Archived from the original (JPG) on 2 October 2013. Retrieved 2 August 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Elio Arturo Lamborghini (Renazzo di Cento, 28 de abril de 1916 — Perugia, 20 de fevereiro de 1993) foi um industrial italiano, conhecido principalmente por ter fundado uma marca de automóveis de grande luxo que carrega o seu nome. Filho de fazendeiros, fundou em 1948 a Lamborghini Trattori, que rapidamente se tornou uma importante fabricante de equipamentos agrícolas em meio da reforma e\n[…]\nPara além do empenho que desde sempre dedicou ao setor de veículos agrícolas, a paixão por automóveis levou Ferruccio a construir, com o mesmo nome da marca dos seus tratores, o automóvel que se celebrizou com a designação de \"Miúra\", símbolo dos touros do mais conceituado criador de gado bravo espanhol Eduardo Miúra (1917) — lançando no mercado do setor de automóveis de luxo o primeiro Lamborghini, modelo \"GTV 350\" (apresentado no Salão de Turim de 1963).\n[…]\nUm problema mecânico surgiu na Ferrari de Ferruccio, relacionado à um mau funcionamento da sua embreagem, e Ferrucio Lamborghini teve a oportunidade de reclamar pessoalmente ao engenheiro Enzo Ferrari na sua fábrica de Maranello. Lamborghini obteve como resposta: \"Você não sabe nada sobre carros, o melhor que pode fazer é deslocar-se em seus tratores…\".\n[…]\nEm 1970, desmotivado com o atrás sucedido, numa altura onde na Itália as greves de trabalho e as conflitualidades sindicais eram uma constante, Ferruccio Lamborghini resolve descansar e viver dos muitos rendimentos de que já usufruía, vendendo seu projeto de automóveis a um grupo suíço, e os tratores, ao fabricante da Same. A marca de automóveis passou depois por diversos proprietários, incluindo a Chrysler, pertencendo atualmente ao grupo Volkswagen através da sua subsidiária Audi.\n[…]\nOs tratores Lamborghini foram comprados nesse ano por Francesco Cassani.\n[…]\nFerrucio Lamborghini faleceu de parada cardíaca em 20 de fevereiro de 1993, aos 76 anos.\n[…]\n«Lamborghini SpA»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada em 1963 por Ferruccio Lamborghini, perto de Bolonha."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que um touro bravo aparece no emblema da montadora italiana Lamborghini?",
    "resposta": "Era o signo do fundador",
    "distratores": [
      "Símbolo de Bolonha",
      "Brasão da família",
      "Mascote dos tratores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lamborghini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nFerruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978.\n[…]\nAutomobili Lamborghini S.p.A. controls five principal subsidiaries: Ducati Motor Holding S.p.A., a manufacturer of motorcycles; Italdesign Giugiaro S.p.A., a design and prototyping firm that provides services to the entire Volkswagen Group; MML S.p.A. (Motori Marini Lamborghini), a manufacturer of marine engine blocks; and Volkswagen Group Italia S.p.A. (formerly Autogerma S.p.A.), which sells Audi and other Volkswagen Group vehicles in Italy.\n[…]\nAutomotive industry in Italy\n[…]\n\"Principales cláusulas de los contratos con USA e Italia\" [Main Contract Terms between USA and Italy]. lamborghini-latinoamerica.com (in Spanish). Automóviles Lamborghini Latinoamérica S.A. de C.V. 5 August 1995. Archived from the original (JPG) on 2 October 2013. Retrieved 2 August 2012.\n[…]\n\"Volkswagen Aktiengesellschaft Facts and Figures 2012\" (PDF). Volkswagen AG. 11 June 2012. 1058.809.453.20. Archived from the original (PDF) on 2 October 2013. Retrieved 10 August 2012. Automobili Lamborghini S.p.A. (867 employees, founded in 1963, wholly owned by Audi AG since 1998)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "A Automobili Lamborghini (pronúncia italiana: [autoˈmɔːbili lamborˈɡiːni]), usualmente chamada de Lamborghini ou coloquialmente Lambo, é uma fabricante italiana de automóveis esportivos de luxo e de alto desempenho, criada originalmente para competir com a Ferrari. Desde 1998, faz parte do Grupo Volkswagen por meio de sua subsidiária Audi, onde intercambia tecnologias entre Audi R8 e os modelos ma\n[…]\nFundada em 1963 por Ferruccio Lamborghini (1916–1993) como uma filial da sua bem-sucedida fábrica de tratores Lamborghini Trattori, que produzia tratores com motores de tanques da Segunda Guerra Mundial. Instalou-se em Sant’Agata Bolognese e contratou uma série de engenheiros de renome para construir os seus carros, como foi o caso de Giotto Bizzarrini (responsável pela criação da Ferrari 250 GTO), Giampaolo Dallara e Paolo Stanzani.\n[…]\nEm 1972 o Lamborghini Urraco permitiu à marca italiana entrar no segmento dos pequenos supercarros. Ainda nesse ano a Lamborghini vendeu 51% das suas ações a um empresário suíço, com os restantes 49% a serem entregues a outro suíço em 1974. Pelo meio, em 1973 o Miura foi substituído por um outro modelo que também fez história no mundo dos carros de características desportivas, o Countach.\n[…]\nEm 1987, a marca norte-americana Chrysler comprou a Lamborghini e, além do substituto do Countach, começou a preparar um motor para equipar carros de Fórmula 1. A estreia nesta competição automobilística ocorreu em 1989, mas nunca teve sucesso. Desde 1998 a Lamborghini pertence ao grupo Volkswagen. Já o substituto do Countach, o Diablo, foi apresentado em 1990 e obteve grande sucesso, mantendo-se em produção para além do ano 2000.\n[…]\nMuseo Lamborghini\n[…]\nMotores Lamborghini na Fórmula 1\n[…]\n«Página oficial da Lamborghini» (em inglês)\n[…]\n«Lamborghini by KLD Concept (fotos, videos)» (em inglês)\n[…]\nRevista Classic Show. Na crise da década de 70, surge o Lamborghini Bravo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Hermès",
      "descricao": "Grife francesa de artigos de luxo fundada em Paris em 1837 por Thierry Hermès."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que ligação a grife francesa Hermès tem com os cavalos, que aparecem até no seu logotipo?",
    "resposta": "Começou fabricando arreios",
    "distratores": [
      "Patrocinava corridas de cavalo",
      "O fundador era jóquei",
      "Criava cavalos de raça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Herm%C3%A8s"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Herm%C3%A8s",
        "situacao": "ok",
        "texto": "Hermès International S.C.A. (  air-MEHZ, French: [ɛʁmɛs] ), using the trade name Hermès Paris or simply Hermès, is a French luxury goods company that was founded in 1837 by Thierry Hermès in Paris, France. At that time, it specialized in the saddlery and harness making trade, producing equipment for horse riders and their horses.\n[…]\nClemence leather is sometimes referred to as Bianca leather - a particular grain that originates from France. Another popular bag from the Hermès house is the Evelyne, a comparatively affordable saddle-style bag meant to be worn cross-body with a traditional fabric strap. The evelyne is available in 4 different sizes: the TPM (16 cm), PM (29 cm), GM (33 cm)and TGM (40 cm) and is generally made in relaxed leathers like clemence.\n[…]\nHermès oversaw the production of its scarves throughout the entire process, purchasing raw silk, spinning it into yarn, and weaving it into fabric twice as strong and heavy as most scarves available at the time. A variety of ranges followed: squares, ties, scarves, and shawls. Since the 1980s, Hermès has controlled the entire silk and textile production chain.\n[…]\nBetween 1880 and 1920, the first stores opened in France in seaside resorts, spa towns or cities related to equitation. Hermès' international expansion began in New York City, with hatmaker Dobb's in 1924, and continued more broadly after World War II, with the development of a network of directly-operated stores.\n[…]\nIt enables former craftsmen to give a second life to scraps of leather, fabric, silk or even buttons, buckles, Saint-Louis crystal and any other prestige material that has a defect and is destined to be used no more. Initially sold on an ad hoc basis, petit h productions have, since 2013, had their own dedicated space in the Hermès boutique at 17 rue de Sèvres in Paris."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Herm%C3%A8s",
        "situacao": "ok",
        "texto": "Hermès é uma empresa francesa fundada em 1837 por Thierry Hermès como produtora de arreios para cavalos. Ao longo do tempo passou a produzir diversos produtos de luxo. A marca é a segunda mais valiosa do mundo, segundo o ranking BrandZ, avaliada em 19,8 milhões de dólares. Em 2017, sua avaliação de marca subiu para 25,951 bilhões de dólares, sendo considerada também a 2ª marca mais valiosa da Fran\n[…]\n1801 – Nasce, em Krefeld, Alemanha, Thierry Hermes – filho de um pai imigrante francês, Thierry Hermès, e de uma mãe alemã, Agnese Kuhnen. Krefeld é conhecida como ‘Stadt wie Samt und Seide’, ou seja, Cidade da Seda e do Veludo, devido a sua forte tradição têxtil.\n[…]\n1828 – A família Hermès se muda para Pont Audemer, ao norte de Paris, onde o Thierry Jr. aprende técnicas de fabricação de couro e passa a fazer couraças.\n[…]\n1837 – Thierry Hermes funda a marca francesa Hermès como oficina de arnês no bairro Grands Boulevards de Paris. Sua loja serve os nobres europeus da época. A oficina também produz arneses de ferro forjado e freios para comércio de carruagens.\n[…]\n1878 – Morre Thierry Hermes.\n[…]\n1880 – O filho de Hermès, Charles-Emile Hermès, assume a gestão da oficina do pai e se muda para um local diferente, na 24 Rue du Faubourg Saint-Honore, onde a loja permanece até hoje. Aqui, ele continua com a manufatura de itens de montaria e passa a se concentrar nas vendas de varejo internacionais com linhas para a elite da Europa, Rússia, África do Norte, Ásia e as Américas.\n[…]\nInício de 1950 – A Hermès começa a usar um logotipo com base em um desenho do pintor francês Alfred de Dreux. Nessa época também, a marca começa a usar suas icônicas caixas de cor laranja.\n[…]\nA grife inaugurou sua primeira loja no Brasil em 13 de setembro de 2009 no Shopping Cidade Jardim na cidade de São Paulo.\n[…]\nSite Oficial da Hermès em português\n[…]\nInstagram Oficial da Hermès\n[…]\nLinha do tempo da Hermès",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Fusca",
      "descricao": "Automóvel popular da Volkswagen, projetado na Alemanha nos anos 1930, conhecido no exterior como Beetle."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Qual engenheiro austríaco, cujo sobrenome batiza uma marca de carros esportivos, projetou o Fusca da Volkswagen?",
    "resposta": "Ferdinand Porsche",
    "distratores": [
      "Enzo Ferrari",
      "Gottlieb Daimler",
      "Karl Benz"
    ],
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
        "texto": "Ferdinand Porsche (3 September 1875 – 30 January 1951) was an Austrian-German automotive engineer and founder of the Porsche AG. He is best known for creating the first gasoline-electric hybrid vehicle (Lohner-Porsche), the Volkswagen Beetle, the Auto Union racing cars, the Mercedes-Benz SS/SSK, and several other important developments and Porsche automobiles.\n[…]\nFerdinand Porsche was born to Anna Porsche (née  Ehrlich) and Anton Porsche, in Maffersdorf (Vratislavice nad Nisou) in northern Bohemia, part of Austria-Hungary at that time, and today part of the Czech Republic. Ferdinand was his parents' third child. His father was a master panel-beater.\n[…]\nDifferences within the French government and objections from the French automotive industry put a halt to the Volkswagen project before it had even begun. On 15 December 1945, French authorities arrested Porsche, Anton Piëch, and Ferry Porsche as war criminals. While Ferry was freed after six months, Ferdinand and Anton were imprisoned first in Baden-Baden and then in Paris and Dijon.\n[…]\nThe Volkswagen plant was completed in 1938 after workers from Italy were brought in. Volkswagen, under Ferdinand Porsche, used and profited from forced labour. That included a large number of Soviets. By early 1945, German nationals comprised only 10% of Volkswagen's workforce.\n[…]\nViews of Ferdinand Porsche have been polarised in the postwar years. Though he was recognised and honoured for his contributions to the automotive and engineering industries, with Volkswagen Group – which his heirs control – being the second-largest car manufacturer in the world, he was also criticised for his significant involvement in the Nazi regime, having contributed to the Nazi cause through his production of military vehicles and weapons systems used during World War II.\n[…]\nFerdinand Porsche at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Volkswagen_Typ_1",
        "situacao": "ok",
        "texto": "O Volkswagen Typ 1, popularmente conhecido como Fusca (no Brasil), Carocha (em Portugal) ou VW Käfer (em linguagem coloquial na Alemanha), foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen, sendo produzido entre 1938 e 2003. Foi o carro mais vendido no mundo, ultrapassando em 1972 o recorde que pertencia até então ao Ford Modelo T, de origem estadunidense. Foi produzido \n[…]\nA história do Fusca é uma das mais complexas e longas da história do automóvel. Em 22 junho de 1934, a União das Indústrias Automotivas (Verband der Automobilindustrie) firmou um contrato com o projetista Ferdinand Porsche para o desenvolvimento de um Volkswagen (\"carro do povo\"). Diferente da maioria dos outros carros, o projeto do Fusca envolveu várias empresas e até mesmo o governo de seu país, e levaria à fundação de uma fábrica inteira de automóveis no processo.\n[…]\nLogo em seguida viria o icônico Karmann Ghia, que permitiria a Volkswagen entrar timidamente no mercado de carros luxuosos. Já no final da década de 1950 o Fusca se mostrava uma aposta certeira para a Volkswagen, que se expandia rapidamente para além-mar (chegaria no Brasil, por exemplo, já em 1957).\n[…]\nEm Curitiba se fala 'fuqui' ou 'fuque', no Rio Grande do Sul é 'fuca'. Mas em São Paulo, talvez por uma questão de fonética, acrescentaram o 'S' na palavra e o Volkswagen virou Fusca.\"\n[…]\nUm Buggy Baja ou Fusca Baja é um tipo de carro fora de estrada muito popular. É feito á partir de um fusca comum com peças de carros diferentes. É comum no nordeste brasileiro por causa de sua versatilidade em terrenos ruins como em areia ou estrada de terra.\n[…]\nVolkswagen New Beetle\n[…]\nVolkswagen Fusca (A5)\n[…]\n«Mitológico Fusca». www.envenenado.com.br\n[…]\nQuatro Rodas. A história do Fusca usado na Antártida que venceu rali no deserto\n[…]\nQuatro Rodas. Grandes Brasileiros: VW Fusca 1500\n[…]\nMotor1.com. Carros para sempre: Fusca \"Itamar\" marcou a volta dos populares",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Porsche 911",
      "descricao": "Modelo de carro esportivo da montadora alemã Porsche, lançado em 1964."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Porsche 911 seria lançado como 901, mas mudou de nome porque qual montadora francesa usava números de três dígitos com zero no meio?",
    "resposta": "Peugeot",
    "distratores": [
      "Renault",
      "Citroën",
      "Bugatti"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Porsche_911"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Porsche_911",
        "situacao": "ok",
        "texto": "The Porsche 911 model series (pronounced Nine Eleven or in German: Neunhundertelf, or colloquially Neunelfer) is a family of two-door, high performance rear-engine sports cars, introduced in September 1964 by Porsche of Stuttgart, Germany, and now in its eighth generation. All 911s have a rear-mounted flat-six engine, and usually 2+2 seating, except for special 2-seater variants.\n[…]\nOriginally marketed as the Porsche 901 (referring to its internal project number, 901), 82 examples carried the 901 nameplate before French automobile manufacturer Peugeot protested, claiming it held exclusive rights in France to car names formed by three numbers with a zero in the middle. Rather than selling the new model with a different name in France, Porsche marketed the model instead as '911'. Internally, the part numbers for the model carried the prefix 901 for years.\n[…]\nThe first models of the 911 used a rear-mounted 130 PS (96 kW; 128 hp)[1] Type 901/01 flat-6 engine, in the \"boxer\" configuration like the 356. The engine is air-cooled and displaces 1,991 cc (2.0 L) as compared to the 356's four-cylinder, 1,582 cc (1.6 L). As a 2+2 body style, rear seating was provisional. A four or five-speed \"Type 901\" manual transmission was available. The styling was largely penned by Ferdinand \"Butzi\" Porsche, son of Ferdinand \"Ferry\" Porsche.\n[…]\nAt the 2018 Paris Motor Show held in October on the occasion of the 70th-anniversary celebration of the marque, Porsche unveiled the Speedster variant of the 991 generation for the 911, as a concept.\n[…]\nIn 2015, Car and Driver named the Porsche 911 \"the best premium sports car on the market\".\n[…]\nOfficial Porsche 911 microsite\n[…]\nOfficial USA Porsche 911 page\n[…]\nProduction videos: How Porsche 911 is made. Auto News. 5 December 2015. Retrieved 18 May 2017.\n[…]\n2015 Porsche 911 Engine Plant Assembly Line. Auto News. 6 May 2015. Retrieved 18 May 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Porsche_911",
        "situacao": "ok",
        "texto": "Porsche 911 (por vezes denominado Porsche 911 Carrera) é um automóvel esportivo produzido pela fabricante alemã Porsche AG, de Stuttgart, desde 1964. O modelo foi apresentado originalmente em 1963, no Salão do Automóvel de Frankfurt, com o nome de 901, sendo posteriormente renomeado para 911 por questões de direitos de nomenclatura. Desde então, o veículo tem passado por constantes atualizações té\n[…]\nAo ser apresentado no Salão do Automóvel de Frankfurt de 1963, o carro foi um sucesso imediato. Porém, numa história amplamente conhecida no meio automobilístico, a Peugeot conseguiu fazer a Porsche mudar o nome do carro, alegando que possuía os direitos dos nomes de veículos compostos de três algarismos e um zero no meio. Assim, mudando apenas um número, a Porsche criava uma marca que a acompanharia até hoje.\n[…]\nEle foi designado \"Porsche 901\" (901 sendo o número interno do projeto). A Peugeot protestou baseada no fato de que eles tinham o registro de todos os nomes de carros consistindo de dois números com um zero entre eles. Logo, antes do início da produção, o novo Porsche teve seu nome alterado para 911. Começou a ser vendido em 1964.\n[…]\nO 356 chegou ao fim da linha em 1965, mas ainda havia mercado para um Porsche quatro cilindros, sobretudo nos Estados Unidos. O Porsche 912, lançado no mesmo ano, serviu como um substituto direto. Ele usava o motor quatro cilindros, 1600 cc 90 PS (66 kW) do 356, com a carroceria do 911.\n[…]\nA potência do motor aspirado de 3,6-litros é de 409 cv @ 7600rpm. A potência específica é de 115 cv/l. Esses números são os mesmos do recém-lançado 911 GT3, mas o RS conta com um trem de força exclusivo, que lhe permite uma performance ainda melhor. O câmbio curto de seis marchas leva o carro, que é 20 kg mais leve, a acelerar de zero a 100 km/h em 4,2s e de zero a 200 km/h em 13,3s, com máxima de 310 km/h.\n[…]\nQuatro Rodas. Porsche 930 (911 Turbo): fôlego de atleta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Bic Cristal",
      "descricao": "Caneta esferográfica de corpo transparente lançada em 1950 pela empresa francesa Bic, de Marcel Bich."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que a tampa da caneta Bic Cristal tem um pequeno furo na ponta?",
    "resposta": "Evitar sufocamento se engolida",
    "distratores": [
      "Economizar plástico",
      "Indicar a cor da tinta",
      "Prender no bolso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bic_Cristal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "The Bic Cristal (stylised as BiC Cristal and also known as the Bic Biro) is an inexpensive, disposable ballpoint pen mass-produced and sold by Société Bic of Clichy, Hauts-de-Seine, France. It was introduced in 1950 and is the best-selling pen in the world, with the 100 billionth sold in September 2006. It has become the archetypal ballpoint pen and is considered ubiquitous, to the extent that the\n[…]\nThe Cristal's design has been widely copied around the world, especially in the Far East.\n[…]\nOne Kenyan manufacturer of the Cristal reportedly lost 100 M KES (approx. 1.3 M USD at 2009 exchange rate) to cheap copies from China, forcing them to negotiate more affordable licensing from Bic.\n[…]\nIn 2025, the Bic Cristal and the Décolletage Plastique design team were included in Pirouette: Turning Points in Design, an exhibition at MoMA featuring \"widely recognized design icons [...] highlighting pivotal moments in design history.\"\n[…]\nIn 2012, Bic marketed a spin-off product named the \"Bic Cristal for Her\". The pen, similar to the original, was supposedly designed specifically for women, and was sold in pink and purple colors. The product provoked outrage and ridicule, with television show host Ellen DeGeneres saying \"Can you believe this? We've been using man pens all these years,\" and comedian Bridget Christie titling her 2013 Edinburgh festival show A Bic For Her. The product also received many sarcastic Amazon reviews.\n[…]\nIn 2014 Bic released a new writing instrument based on the Cristal, a modified pen with a rubber tip opposite the ballpoint. This model, called the \"Cristal Stylus\", is for use on touchscreens. Bic funded a website to promote the stylus that crowdsourced a new typeface, named the Universal Typeface Experiment.\n[…]\nOfficial website  of the Bic Cristal at Société BIC\n[…]\nBic Cristal at the Museum of Modern Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "A BIC Cristal (estilizada como BiC Cristal e também conhecida como Bic Biro) é uma caneta esferográfica de baixo custo, produzida em larga escala e vendida pela Société Bic, com sede em Clichy, Hauts-de-Seine, na França. Lançada em 1950, é a caneta mais vendida do mundo, tendo atingido a marca de cem bilhões de unidades vendidas em setembro de 2006.\n[…]\nEla se tornou o modelo clássico de caneta esferográfica e é considerada onipresente, a ponto de o Museu de Arte Moderna (MoMA) incluí-la permanentemente em sua coleção. Seu formato hexagonal e design imitam um lápis padrão, e ela é comercializada em seis tipos de ponta e 18 cores ao redor do mundo.\n[…]\nFoi projetada pela equipe do Décolletage Plastique e é feita de poliestireno (corpo), de polipropileno (tampa), de carboneto de tungstênio (esfera) e de bronze/prata niquelada (ponta). Originalmente tinha quatro cores padrão: azul, preto, vermelho e verde e posteriormente foi expandido para 14 cores. O tamanho do ponto de uma caneta de ponta média é um milímetro, enquanto que a duração de sua tinta dura 2 quilômetros.\n[…]\nAo passar dos anos, a caneta ganhou várias variações como uma versão em miniatura, 7 variações de pontas que vão da ultrafina, cuja ponta tem 0,7 milímetros até a Cristal Bold, cuja ponta chega a 1,6 milímetros, além de uma variação com tinta com várias essências e também edições temáticas e limitadas. Desde 1991 há um pequeno orifício na ponta da tampa da caneta para que no caso de uma ingestão acidental, a tampa não sufoque a vítima, permitindo a passagem de ar.\n[…]\nA caneta Bic Cristal faz parte da coleção permanente do MoMa, museu da arte moderna de Nova Iorque.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Shell",
      "descricao": "Empresa petrolífera anglo-holandesa cujo símbolo é uma concha amarela e vermelha."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que a petrolífera Shell, cujo nome significa concha em inglês, adotou esse símbolo?",
    "resposta": "A família vendia conchas decorativas",
    "distratores": [
      "O primeiro poço era na praia",
      "Homenagem a pescadores",
      "Era um brasão real"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shell_plc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shell_plc",
        "situacao": "ok",
        "texto": "Shell plc is a British multinational oil and gas company, headquartered in London, England. Shell is a public limited company with a primary listing on the London Stock Exchange (LSE) and secondary listings on Euronext Amsterdam and the New York Stock Exchange. Shell is the largest investor owned oil company in Europe, third largest globally behind ExxonMobil and Chevron, and among the world's lar\n[…]\nThe Shell logo is one of the most familiar commercial symbols in the world. This logo is known as the \"pecten\" after the sea shell Pecten maximus (the giant scallop), on which its design is based. The yellow and red colours used are thought to relate to the colours of the flag of Spain, as Shell built early service stations in California, previously a Spanish colony. The current revision of the logo was designed by Raymond Loewy in 1971.\n[…]\nOn 15 November 2021, Royal Dutch Shell plc announced plans to change its name to Shell plc.\n[…]\nA statement from Shell read: \"Royal Dutch Shell acknowledges the outcome of Woodside Petroleum Limited's shareholders' negative vote on the selective buy-back proposal. Shell is reviewing its options in relation to its remaining 13.6 percent holding\".\n[…]\nBrunei Shell Petroleum (BSP) is a joint venture between the Government of Brunei and Shell. The British Malayan Petroleum Company (BMPC), owned by Royal Dutch Shell, first found commercial amounts of oil in 1929. It currently produces 350,000 barrels of oil and gas equivalent per day. BSP is the largest oil and gas company in Brunei, a sector which contributes 90% of government revenue. In 1954, the BMPC in Seria had a total of 1,277 European and Asian staff.\n[…]\nRoyal Dutch Shell operates in the Philippines under its subsidiary, Shell Pilipinas Corporation or SPC. Its headquarters is in Taguig and it has facilities in the Pandacan oil depot and other key locations.\n[…]\nBusiness data for Royal Dutch Shell plc:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shell_plc",
        "situacao": "ok",
        "texto": "Shell (anteriormente Royal Dutch Shell) é uma empresa multinacional petrolífera britânica com sede em Londres, que tem como principais atividades a refinação de petróleo e a extração de gás natural. A Shell é uma sociedade anônima com listagem primária na Bolsa de Valores de Londres (LSE) e listagens secundárias na Euronext Amsterdão e na Bolsa de Valores de Nova York.\n[…]\nA origem da marca Shell (que em inglês é concha) está vinculada as origens da Shell Transport and Trading Company. Em 1833, o pai do fundador, chamado Marcus Samuel, fundou um importante negócio para vender conchas marinhas a colecionadores de Londres.\n[…]\nO logotipo da Shell é um dos símbolos comerciais mais conhecidos do mundo. É conhecido como \"pecten\", em alusão à concha Pecten maximus (popularmente conhecida por vieira), na qual foi baseada. A atual versão do logotipo, desenhada por Raymond Loewy, foi apresentada em 1971.[carece de fontes]?\n[…]\nEm 15 de novembro de 2021, a Royal Dutch Shell plc anunciou planos para mudar seu nome para Shell plc.\n[…]\nO grupo Royal Dutch Shell foi fundado em 1907, quando a companhia Real Holandesa de Petróleos (em neerlandês:  N.V. Koninklijke Nederlandsche Petroleum Maatschappij) e a companhia Shell Transport and Trading Company Ltd fundiram suas operações a fim de competir mundialmente com a gigantesca companhia estadunidense Standard Oil. Antes da fusão, o grupo operava com uma série de acordos accionários e operatórios.[carece de fontes]?\n[…]\nA \"Shell\" Transport and Trading Company (as aspas faziam parte do nome legal) era uma companhia britânica fundada em 1897 por Marcus Samuel, 1º Visconde de Bearsted, e seu irmão Samuel Samuel. Seu pai era dono de uma empresa de antiguidades em Houndsditch, Londres que se expandiu em 1833 para importar e vender conchas, após o que a empresa \"Shell\" recebeu seu nome.[carece de fontes]?\n[…]\nShell Brasil\n[…]\nShell Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Marca de fecho de gancho e argola inventado pelo engenheiro suíço George de Mestral nos anos 1940."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O engenheiro suíço que inventou o velcro se inspirou nos frutos espinhosos de qual planta, que grudavam no pelo do seu cachorro?",
    "resposta": "Bardana",
    "distratores": [
      "Picão",
      "Urtiga",
      "Mamona"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
      "https://en.wikipedia.org/wiki/George_de_Mestral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nThe next major use hook-and-loop saw was with skiers, who saw the similarities between their outerwear and that of the astronauts, and thus saw the advantages of a suit that was easier to don and doff. Scuba and marine gear followed soon after. Having seen astronauts storing food pouches on walls, children's clothing makers came on board. As hook-and-loop fasteners became widely used only after NASA's adoption of the technology, NASA is popularly – and incorrectly – credited with its invention.\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\n2004 – One of the characters in the film Garden State made a fictional vast fortune from inventing \"silent Velcro\".\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_de_Mestral",
        "situacao": "ok",
        "texto": "George de Mestral ((1907-06-19)19 June 1907 – (1990-02-08)8 February 1990) was a Swiss electrical engineer who invented the hook and loop fastener which he named Velcro.\n[…]\nHe went for his favorite hobby of hunting and when he came back he discovered that his dog was covered with burs that had attached themselves to its fur. He then worked on inventing hook and loop fasteners for ten years starting in 1948. In 1955, he successfully patented hook and loop, eventually selling 60 million yards (about 55,000 km) a year through a multimillion-dollar company.\n[…]\nHe made additional inventions, and his wife said that his asparagus peeler was \"one stupid little thing that sold very well.\"\n[…]\nHe was inducted into the National Inventors Hall of Fame in 1999 for inventing hook and loop fasteners.\n[…]\nDe Mestral gave the name Velcro, a portmanteau of the French words velours (\"velvet\"), and crochet (\"hook\"), to his invention as well as his company, which continues to manufacture and market the fastening system.\n[…]\nHowever, hook and loop's integration into the textile industry took time, partly because of its appearance. Hook and loop in the early 1960s looked like it had been made from left-over bits of cheap fabric, an unappealing aspect for clothiers. The first notable use for Velcro® brand hook and loop came in the aerospace industry, where it helped astronauts manoeuvre in and out of bulky space suits. Eventually, skiers noted the similar advantages of a suit that was easier to get in and out of.\n[…]\nShort biography at National Inventors Hall of Fame"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Art Fry, da 3M, teve a ideia do Post-it porque queria marcadores que não caíssem de qual livro, no coral da igreja?",
    "resposta": "Hinário",
    "distratores": [
      "Bíblia",
      "Missal",
      "Catecismo"
    ],
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
    "indice": 43,
    "ancora": {
      "nome": "Fiat",
      "descricao": "Montadora italiana de automóveis fundada em 1899, cujo nome é uma sigla em italiano."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O nome Fiat é a sigla, em italiano, de Fábrica Italiana de Automóveis de qual cidade, onde a montadora foi fundada?",
    "resposta": "Turim",
    "distratores": [
      "Milão",
      "Gênova",
      "Modena"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fiat_Automobiles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fiat_Automobiles",
        "situacao": "ok",
        "texto": "FIAT Automobiles S.p.A., commonly known as FIAT (UK:  FEE-ət, -⁠at, US:  -⁠aht; Italian: [ˈfiːat]), is an Italian automobile manufacturer. FIAT Automobiles was formed in January 2007 when FIAT Group reorganized its automobile business, and traces its history back to 1899, when the first FIAT automobile, the FIAT 3½ HP, was produced.\n[…]\nOn 11 July 1899, Giovanni Agnelli was part of the group of founding members of FIAT, Fabbrica Italiana Automobili Torino. The first FIAT plant opened in 1900 with 35 staff making 24 cars. Known from the beginning for the talent and creativity of its engineering staff, by 1903 Fiat made a small profit and produced 135 cars; this grew to 1,149 cars by 1906. The company then went public selling shares via the Milan stock exchange.\n[…]\nThe European Car of the Year award has been awarded twelve times to the FIAT Group over the last forty years, more than any other manufacturer. Nine of these awards were won by FIAT Automobiles models. FIAT models awarded the title:\n[…]\nFIAT CEO Sergio Marchionne claimed in 2014 that each one was sold at a loss of $14,000. In 2016, after Tesla had announced the Model 3 and had a high number of reservations for the electric car, Marchionne questioned whether Tesla could produce the cars and be profitable. He then stated that \"if Tesla CEO Elon Musk can demonstrate that the car will be profitable at that price, I will copy the formula, add the Italian design flair, and get it to the market within 12 months\".\n[…]\nLancia took over the role of motorsport for the FIAT Group during the 1980s. After a long break of factory-supported entries, in 2003 a FIAT Punto S.1600 won the Italian Rally Championship, and in 2006 the FIAT Grande Punto S.2000 won the FIA European Rally Championship, followed by three successive wins in 2009, 2010 and 2011.\n[…]\nOld FIAT Concept Cars"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/FIAT",
        "situacao": "ok",
        "texto": "Fiat Automobiles S.p.A., mais conhecida como Fiat (em italiano: Fabbrica Italiana Automobili Torino; estilizado tudo em maiúsculas), é uma fabricante de automóveis italiana, pertencente a Stellantis. Sua sede principal fica em Turim, no norte da Itália.\n[…]\nFIAT é um acrônimo de Fabbrica Italiana Automobili Torino (\"Fábrica Italiana Automobilística de Turim\" em português), mas também pode significar \"faça-se\" em Latim. A empresa foi fundada por Giovanni Agnelli, em 11 de julho de 1899. Após a Primeira Guerra Mundial, a empresa com apoio do governo começou a investir em diversas áreas, como o mercado de jato, tratores, trens e construção.\n[…]\nEm abril de 2014, o Greenpeace lançou uma campanha pedindo à Fiat e às outras montadoras líderes em vendas que produzam carros no Brasil com a mesma eficiência energética dos veículos feitos na Europa, além de investirem em carros elétricos.\n[…]\nMais recentemente, a montadora tem ampliado investimentos em plataformas sustentáveis e compartilhadas de carsharing, como na empresa Enjoy, que atua na Itália.\n[…]\nPoucos meses depois, durante a estreia da nova Fiat Strada em 2021, a marca lançou o \"Fiat Flag\", um logotipo secundário - inspirado no logotipo do emblema da frente de 1982 - para ser usado na marca e no painel frontal, ao lado do logotipo principal porém com as cores da bandeira italiana.\n[…]\nNo Brasil, segundo o site da montadora, a FIAT está instalada desde 1976 em Betim, na Região Metropolitana de Belo Horizonte. A fábrica começou a ser construída em 1973, sendo inaugurada três anos depois. O primeiro veículo a sair de suas linhas de montagem foi o Fiat 147. Sua planta de Betim é a maior produtora de veículos do Grupo no mundo.\n[…]\nFiat 147 - Primeiro carro a álcool fabricado em série em todo o mundo;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "O Boticário",
      "descricao": "Empresa brasileira de perfumes e cosméticos fundada em 1977 pelo farmacêutico Miguel Krigsner."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A rede de cosméticos O Boticário nasceu em 1977 como uma pequena farmácia de manipulação em qual capital brasileira?",
    "resposta": "Curitiba",
    "distratores": [
      "Porto Alegre",
      "Belo Horizonte",
      "Florianópolis"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Botic%C3%A1rio"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Botic%C3%A1rio",
        "situacao": "ok",
        "texto": "O Boticário é uma empresa de cosméticos e perfumes brasileira, unidade de negócios do Grupo Boticário, uma holding presidida por Fernando Modé, com sede em São José dos Pinhais, no Paraná. É a maior rede de franquias do Brasil, segundo classificação da Associação Brasileira de Franchising (ABF) em 2020. São mais de 4000 pontos de venda espalhados por mais de 40 países. Foi fundada em 1977 por Migu\n[…]\nNos anos de 2017, 2018 e 2019 foi considerada \"a Marca de Beleza mais Amada do Brasil\".\n[…]\nEm 2022, recebeu os prêmios de mais admirada pelos consumidores e mais admirada pelos colaboradores, entre as empresas varejistas de cosméticos e perfumaria, segundo o IBEVAR.\n[…]\nEm 1977 foi fundada a Farmácia de Manipulação O Boticário, em Curitiba, no Paraná. Em 1980 a marca abre sua primeira franquia e dois anos depois inaugura sua primeira fábrica. No ano de 1985, a empresa abre sua primeira loja em Portugal e em 1987 inaugura sua milésima unidade.\n[…]\nVende seus produtos on-line desde dezembro de 2002, mas foi em 2011 que a empresa fez um grande investimento na qualidade e inovação de sua loja virtual. Em 2011, confirmou a sua primeira fábrica fora do Paraná, em Camaçari, estado da Bahia. O Boticário lançou em 2011 a marca Eudora. A marca de cosméticos tem 14 lojas e também oferece produtos de porta a porta (venda direta). No segmento de maquiagem, a empresa possui três marcas: Make B., Intense e Capricho.\n[…]\nEm 2012 o Boticário lançou mais três marcas, a The Beauty Box, a Nativa Spa, e a Skingen. Em 2013, reassumiu a liderança do mercado brasileiro de perfumaria, e hoje conta com mais de 3 mil lojas em mais de 1700 municípios do país.. Em 9 de março de 2018, anuncia a compra da Vult Cosméticos.\n[…]\n«Página oficial»  (Brasil)\n[…]\nO Boticário no Facebook\n[…]\nO Boticário no Twitter\n[…]\nO Boticário no Instagram\n[…]\nCanal de O Boticário no YouTube\n[…]\nPágina oficial do Grupo Boticário\n[…]\nFundação O Boticário de Proteção à Natureza"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Schweppes",
      "descricao": "Marca de água tônica e refrigerantes originada da fábrica de água gaseificada de Johann Jacob Schweppe."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O relojoeiro Jacob Schweppe, que deu nome à marca Schweppes, começou a fabricar água com gás em Genebra em que século?",
    "resposta": "Século dezoito",
    "distratores": [
      "Século dezesseis",
      "Século dezenove",
      "Século vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Schweppes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Schweppes",
        "situacao": "ok",
        "texto": "Schweppes ( SHWEPS, German: [ʃvɛps]) is a British soft drink brand founded in Geneva in 1783 by the German watchmaker and amateur scientist Johann Jacob Schweppe; it is now made, bottled, and distributed worldwide by multiple international conglomerates, depending on licensing and region, that manufacture and sell soft drinks. Schweppes was one of the earliest forms of a soft drink, originally bei\n[…]\nIn the late 18th century, German watchmaker and amateur scientist Johann Jacob Schweppe developed a process to manufacture bottled carbonated mineral water based on the discoveries of English chemist Joseph Priestley. Schweppe founded the Schweppes Company in Geneva in 1783 to sell carbonated water. In 1792, he moved to London to develop the business there.\n[…]\nAfter acquiring many other brands in the ensuing years, the company was split in 2008, with its US beverage unit becoming Dr Pepper Snapple Group, Inc. (DPSG, Inc.) and separated from is the new holding company of the confectionery business Cadbury PLC (now part of Mondelez International). In 2018, Keurig Green Mountain acquired DPSG, and became Keurig Dr Pepper. It is the current owner of the Schweppes trademark in Canada and the United States.\n[…]\nThe Coca-Cola Company owns the Schweppes brand in several territories, including 21 European countries through European Refreshments ULC. In a further 22 European countries, the brand is owned by Schweppes International Limited (a subsidiary of Suntory).\n[…]\nIn China, Hong Kong and Taiwan, Swire's subsidiary Swire Coca-Cola produces Schweppes branded beverages.\n[…]\nThe Japanese Asahi Group bought Schweppes Australia in 2008 from Cadbury, and owns the trademark in Australia.\n[…]\nMainstay Schweppes products include ginger ale (1870), bitter lemon (1957), and tonic water (the first carbonated tonic – 1871).\n[…]\nSchweppes Australia\n[…]\nSchweppes History Movie - 13 minute video on the history of Schweppes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Schweppes",
        "situacao": "ok",
        "texto": "Schweppes (Pron.: /chuéps/) é uma marca de refrigerantes integrante do portfólio da empresa Dr Pepper Snapple Group e licenciada para fabricantes nacionais. The Coca-Cola Company tem comprado o direito da marca em 155 paises.\n[…]\nA história da marca de refrigerantes Schweppes começa em 1783 na Suiça. Johann Jacob Schweppe, um joalheiro alemão e cientista amador desenvolveu um método para produzir água carbonatada em escala comercial, e fundou uma empresa em Genebra. Ele mudou-se ao Reino Unido e a primeira fábrica da então formada empresa \"J. Schweppe & Co\" inaugurou no ano de 1792, em Londres, produzindo assim, em larga escala, o refrigerante Schweppes Soda.\n[…]\nDois anos mais tarde a empresa foi condecorada com a garantia real pela Rainha Vitória. Em 1870, a fábrica aumentou sua linha de produtos, passando a produzir também Schweppes Tônica, água com altos teores de gás carbônico e um toque de quinino, chamada também de \"água tônica indiana\", pois, a ideia de colocar quinino na bebida nasceu dentro das fileiras do exército indiano como forma de combater a malária; e Schweppes Ginger Ale, com leve toque de gengibre.\n[…]\nEm 1999, a marca \"Schweppes\" foi adquirida parcialmente pela \"The Coca-Cola Company\", que distribui para 155 países da América Latina, continente africano e asiático.\n[…]\nA \"Schweppes\" da empresa original, dedica-se ao mercado europeu, Estados Unidos e Canadá, geralmente por meio de licenças a fabricantes nacionais. Em Portugal os produtos Schweppes são fabricados pela Orangina Schweppes, parte da Suntory do Japão.\n[…]\nTônica (água tônica)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Nike",
      "descricao": "Empresa americana de calçados e artigos esportivos fundada por Phil Knight e Bill Bowerman, dona do logotipo Swoosh."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que empresário americano fundou a Nike ao lado do seu antigo treinador de atletismo, Bill Bowerman?",
    "resposta": "Phil Knight",
    "distratores": [
      "Paul Fireman",
      "Kevin Plank",
      "Jim Davis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nike,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.\n[…]\nThe company was founded on January 25, 1964, as \"Blue Ribbon Sports\", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory. Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding and Nike CR7. The company also sells products under its Air Jordan brand and its Converse subsidiary.\n[…]\nNike, originally known as Blue Ribbon Sports (BRS), was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 1964. The company initially operated in Eugene, Oregon, as a distributor for Japanese shoemaker Onitsuka Tiger, making most sales at track meets out of Knight's automobile.\n[…]\nAccording to Otis Davis, a University of Oregon student-athlete coached by Bowerman and Olympic gold medalist at the 1960 Summer Olympics, his coach made the first pair of Nike shoes for him, contradicting a claim that they were made for Phil Knight. According to Davis, \"I told Tom Brokaw that I was the first. I don't care what all the billionaires say. Bill Bowerman made the first pair of shoes for me. People don't believe me. In fact, I didn't like the way they felt on my feet.\n[…]\nIn October 2025, Nike renamed its world headquarters in Beaverton, Oregon, the Philip H. Knight Campus in honor of co-founder Phil Knight.\n[…]\nPhil Knight (17.4%)\n[…]\nKnight Foundation (1.95%)\n[…]\nNike timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nike%2C_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. é uma empresa estadunidense de calçados e vestuário esportivos sediada nas proximidades de Beaverton, no Oregon. É a maior fornecedora mundial de calçados esportivos e vestuário e uma importante fabricante de equipamentos esportivos, com receita superior a US$ 46 bilhões em seu ano fiscal de 2022.\n[…]\nA empresa foi fundada em 25 de janeiro de 1964, como \"Blue Ribbon Sports\", por Bill Bowerman e Phil Knight, e tornou-se oficialmente Nike, Inc. em 30 de maio de 1971. A empresa recebeu seu nome de Nice, a deusa grega da vitória. A Nike comercializa seus produtos sob sua própria marca, bem como sob Nike Golf, Nike Pro, Nike+, Nike Blazer, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding e Nike CR7. A empresa também vende produtos sob sua marca Air Jordan e sua subsidiária Converse.\n[…]\nA Nike, originalmente conhecida como Blue Ribbon Sports (BRS), foi fundada pelo atleta de atletismo da Universidade de Oregon Phil Knight e por seu treinador, Bill Bowerman, em 25 de janeiro de 1964. A empresa operava inicialmente em Eugene, no Oregon, como distribuidora da fabricante japonesa de calçados Onitsuka Tiger, realizando a maior parte das vendas em competições de atletismo a partir do automóvel de Knight.\n[…]\nSegundo Otis Davis, atleta-estudante da Universidade de Oregon treinado por Bowerman e medalhista de ouro olímpico nos Jogos Olímpicos de Verão de 1960, seu treinador fez para ele o primeiro par de tênis Nike, contrariando a alegação de que teria sido feito para Phil Knight. Segundo Davis: \"Eu disse a Tom Brokaw que fui o primeiro. Não me importa o que todos os bilionários dizem. Bill Bowerman fez o primeiro par de tênis para mim. As pessoas não acreditam em mim.\n[…]\nPhil Knight (17,4%)\n[…]\nTravis Knight (animador) (3,14%)\n[…]\nKnight Foundation (1,95%)\n[…]\nDados comerciais para Nike, Inc.:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Aspirina",
      "descricao": "Medicamento à base de ácido acetilsalicílico, lançado pela Bayer em 1899, usado contra dor, febre e inflamação."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O princípio ativo da Aspirina deriva de uma substância usada contra a dor desde a Antiguidade, tirada da casca de qual árvore?",
    "resposta": "Salgueiro",
    "distratores": [
      "Eucalipto",
      "Carvalho",
      "Cedro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aspirin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aspirin",
        "situacao": "ok",
        "texto": "Aspirin () is the genericized trademark for acetylsalicylic acid (ASA), a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation, and as an antithrombotic. Aspirin is used to treat inflammatory conditions including Kawasaki disease, pericarditis, and rheumatic fever.\n[…]\nAspirin, an acetyl derivative of salicylic acid, is a white, crystalline, weakly acidic substance that melts at 136 °C (277 °F), and decomposes around 140 °C (284 °F). Its acid dissociation constant (pKa) is 3.5 at 25 °C (77 °F).\n[…]\nAs of August 2021, the European Society of Cardiology made similar recommendations; considering aspirin specifically to patients aged less than 70 at high or very high CVD risk, without any clear contraindications, on a case-by-case basis, considering both ischemic risk and bleeding risk.\n[…]\nAspirin use may reduce the overall risk of both getting cancer and dying from cancer. There is substantial evidence for lowering the risk of colorectal cancer (CRC), but aspirin must be taken for at least 10–20 years to see this benefit. It may also slightly reduce the risk of endometrial cancer and prostate cancer.\n[…]\nFor a small number of people, taking aspirin can result in symptoms including hives, swelling, and headache. Aspirin can exacerbate symptoms among those with chronic hives, or create acute symptoms of hives. These responses can be due to allergic reactions to aspirin, or more often due to its effect of inhibiting the COX-1 enzyme. Skin reactions may also tie to systemic contraindications, seen with NSAID-precipitated bronchospasm, or those with atopy.\n[…]\nThere are anecdotal reports that aspirin can improve the growth and resistance of plants, though most research has involved salicylic acid instead of aspirin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81cido_acetilsalic%C3%ADlico",
        "situacao": "ok",
        "texto": "O ácido acetilsalicílico ou AAS (C9H8O4), conhecido popularmente como aspirina, nome de uma marca que se tornou de uso comum, é um fármaco da família dos salicilatos. É utilizado como medicamento para tratar a dor (analgésico), a febre (antipirético) e a inflamação (anti-inflamatório não esteroide), devido ao seu efeito inibidor, não selectivo, da ciclo-oxigenase.\n[…]\nO ácido salicílico, presente nas folhas do salgueiro (Salix), tem sido utilizado pela humanidade há pelo menos 2400 anos. O ácido acetilsalicílico foi sintetizado pela primeira vez pelo químico francês Charles Frédéric Gerhardt em 1853, ao combinar o salicilato de sódio com cloreto de acetila. Na segunda metade do século XIX outros químicos descreveram a sua estrutura química e criaram métodos mais eficientes para sua síntese.\n[…]\nNo século V a.C., Hipócrates, médico grego e pai da medicina científica, escreveu que o pó ácido da casca do salgueiro ou chorão (que contém salicilatos mas é potencialmente tóxico) aliviava dores e diminuía a febre. Esse remédio também é mencionado em textos das civilizações antigas do Médio Oriente, Suméria, Egito e Assíria. Os nativos americanos usavam-no também para dores de cabeça, febre, reumatismo e tremores.\n[…]\nO reverendo Edmund Stone, de Chipping Norton no condado de Oxford, Reino Unido, redescobriu em 1763 as propriedades antipiréticas da casca do Salgueiro e as descreveu de forma científica.\n[…]\nO princípio activo da casca, a salicina (do nome latino do salgueiro Salix alba) foi isolado na sua forma cristalina em 1828 pelo químico alemão Johan Buchner e em 1829 pelo farmacêutico francês Henri Leroux, que obteve uma quantidade maior. Em 1838, o químico italiano Raffaele Piria descreveu a descoberta de uma substância nova, o Ácido salicílico, através da hidrólise da salicina, em Glicose e Álcool salicílico, seguida da oxidação deste.\n[…]\nBula da aspirina",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Starbucks",
      "descricao": "Rede americana de cafeterias fundada em Seattle em 1971."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que figura mitológica de duas caudas aparece no logotipo verde da rede de cafeterias Starbucks?",
    "resposta": "Sereia",
    "distratores": [
      "Dragão marinho",
      "Fênix",
      "Medusa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Starbucks"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Starbucks",
        "situacao": "ok",
        "texto": "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It was founded in 1971 by Jerry Baldwin, Zev Siegl, and Gordon Bowker at Seattle's Pike Place Market initially as a coffee bean wholesaler.\n[…]\nHoward Schultz, president and former CEO of Starbucks\n[…]\nStarbucks is phasing out disposable cups in Korea entirely by 2025.\n[…]\nStarbucks Korea apologized and its CEO, Son Jeong-Hyun, was fired. Starbucks Korea planned to shutter all its stores in South Korea for half a day on June 22 for its staff to attend a history lesson to increase historical awareness and social sensitivities.\n[…]\nBehar, Howard with Janet Goldstein. (2007). It's Not About the Coffee: Leadership Principles from a Life at Starbucks, 208 pages. ISBN 1-59184-192-5.\n[…]\nClark, Taylor. (2007). Starbucked: A Double Tall Tale of Caffeine, Commerce and Culture. 336 pages. ISBN 0-316-01348-X.\n[…]\nMichelli, Joseph A. (2006). The Starbucks experience: 5 principles for turning ordinary into extraordinary, 208 pages. ISBN 0-07-147784-5.\n[…]\nSchultz, Howard. and Dori Jones Yang. (1997). Pour Your Heart Into It: How Starbucks Built a Company One Cup at a Time, 350 pages. ISBN 0-7868-6315-3.\n[…]\nSimon, Bryant. (2009). Everything but the Coffee: Learning about America from Starbucks. 320 pages. ISBN 0-520-26106-2.\n[…]\nArchived at Ghostarchive and the Wayback Machine: \"How Starbucks Became An $80B Business\". CNBC. January 10, 2019.\n[…]\nArchived at Ghostarchive and the Wayback Machine: \"Why Starbucks Failed In Australia\". CNBC. June 26, 2018.\n[…]\nArchived at Ghostarchive and the Wayback Machine: \"Why Starbucks Is Struggling In South Africa\". CNBC. October 23, 2019.\n[…]\nBusiness data for Starbucks:\n[…]\n\"Inside Starbucks’ Dirty War Against Organized Labor\" at The New York Times"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Starbucks",
        "situacao": "ok",
        "texto": "Starbucks é uma empresa multinacional norte-americana, com a maior cadeia de cafeterias do mundo. Tem sua sede na cidade de Seattle, estado de Washington. A companhia criou seu nome inspirada em parte pelo personagem Starbuck, do livro Moby Dick, e seu logotipo é um entalhe escandinavo do século XVI de uma sereia com duas caudas.\n[…]\nO nome da empresa foi inspirado pela personagem Starbuck do livro Moby Dick, assim como um campo de mineração no Monte Rainier, Starbo ou Storbo. Seu logotipo apresenta uma sereia com duas caudas. A empresa quase foi batizada \"Cargo House\", Terry Heckler, sócio e amigo de Gordon Bowker, comentou informalmente que palavras iniciadas com \"st\" tinham um certo poder. Bowker então começou uma lista de palavras começadas com estas letras.\n[…]\nO logotipo da empresa é uma sereia com duas caudas, mas com o passar dos anos o logo foi simplificado. Na primeira versão, a sereia exibia os seios e suas caudas eram totalmente visíveis. Na segunda versão, seus seios foram cobertos com cabelo, enquanto seu umbigo ainda podia ser visto parte das caudas foi eliminada. Na versão atual, os seios e o umbigo não são visíveis e das caudas restam apenas a se(c)ção final.\n[…]\nA Starbucks está presente na América Latina desde 2002 quando começou a expansão pelo México - onde já existem 531 cafeterias - seguido por Porto Rico (também em 2002), Chile e Peru (ambos em 2003), Brasil (2006), Argentina (2008) e El Salvador (2010).\n[…]\nO \"Cafés Sereia do Brasil Participações S.A\" era controlado pela família Rodenbeck, responsáveis – nos anos 80 – pela vinda do McDonald's e, na década de 1990, da rede Outback Steakhouse ao Brasil. Até 2018, quando a fase de operação própria termina, a rede mantinha 113 lojas no país – todas nos estados de São Paulo ou Rio de Janeiro.\n[…]\nStarbucks (em inglês)\n[…]\nStarbucks Brasil\n[…]\nStarbucks Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Mercedes-Benz",
      "descricao": "Marca alemã de automóveis cujo nome Mercedes surgiu nos carros da Daimler no início do século vinte."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As três pontas da estrela da Mercedes-Benz simbolizam motores para a terra, para o mar e para onde?",
    "resposta": "Para o ar",
    "distratores": [
      "Para o espaço",
      "Para os trilhos",
      "Para as montanhas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mercedes-Benz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mercedes-Benz",
        "situacao": "ok",
        "texto": "Mercedes-Benz (German pronunciation: [mɛʁˌtseːdəs ˈbɛnts, -dɛs -] ), commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury automotive brand that was founded in 1926. Mercedes-Benz AG (a subsidiary of the Mercedes-Benz Group, established in 2019) is based in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG manufactures luxury vehicles and light commercial vehic\n[…]\nThe roots of the brand trace back to the 1901 Mercedes by Daimler-Motoren-Gesellschaft and the 1886 Benz Patent-Motorwagen and 1894 Benz Velo by Carl Benz, which is widely recognised as the first automobile powered by an internal combustion engine. The brand’s slogan is \"The Best or Nothing\".\n[…]\nMercedes-Benz traces its origins to Carl Benz's first internal combustion engine in a car, seen in the Benz Patent-Motorwagen – financed by Bertha Benz's dowry and patented in January 1886 – and Gottlieb Daimler and its engineer Wilhelm Maybach's conversion of a stagecoach, with the addition of a petrol engine, introduced later that year. The Mercedes automobile was first marketed in 1901 by Daimler Motoren Gesellschaft (DMG).\n[…]\nOn 24 August 2015, Mercedes-Benz was announced as the naming rights sponsor for the Atlanta Falcons' new home, Mercedes-Benz Stadium, (Mercedes-Benz's US headquarters are in Greater Atlanta) which opened in August 2017.\n[…]\nTo promote the release of Mario Kart 8, Nintendo and Mercedes-Benz partnered up to have three of its cars in its history, the 2014 Mercedes-Benz GLA, the 1957 SL 300 Roadster, and the 1934 W25 Silver Arrow as karts in the game. As part of the partnership, Mario, Luigi, and Peach appeared in Japanese commercials to promote the 2014 Mercedes-Benz GLA.\n[…]\nThe Mercedes-Benz was chosen by Mitsubishi Electric as an official sponsor of AFF Mitsubishi Electric Cup 2022, along with Maspion Holdings, Wuling, Gree, Yanmar and Tiger Brokers.\n[…]\nBertha Benz\n[…]\nMercedes-AMG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mercedes-Benz",
        "situacao": "ok",
        "texto": "Mercedes-Benz é uma marca alemã de automóveis de Stuttgart criada em 1924. Parte da Mercedes-Benz Group, é uma das mais antigas fabricantes de automóveis do mundo, sendo resultado de uma fusão entre a Benz & Cie e a Daimler-Motoren-Gesellschaft. Também produz caminhões, autocarros e os seus próprios motores.\n[…]\nA estrela de três pontas foi desenhada por Gottlieb Daimler em que cada ponta representava o ar, a terra e o mar mostrando que os motores desenhados adaptavam-se a estes três meios. A estrela apareceu primeiramente num automóvel de um Daimler datado de 1901, denominado Mercedes 35 HP, e viria a ser usada então pela Mercedes-Benz. O círculo à volta da estrela viria a ser desenhada por Karl Benz juntando na parte inferior o seu nome. Até 1937, este símbolo não era usado.\n[…]\nOs primeiros veículos da marca Mercedes-Benz foram produzidos em 1926, após a fusão das empresas fundadas por Karl Benz (Benz & Cie.) e Gottlieb Daimler (Daimler-Motoren-Gesellschaft) como Daimler-Benz em 28 de junho do mesmo ano.\n[…]\nKarl Benz decidiu acrescentar o seu nome \"Benz\" à marca Mercedes. Acrescentou uma auréola à volta da estrela e nasceu assim o famoso nome Mercedes-Benz juntamente com o seu símbolo e que dura até aos dias de hoje. Durante a Segunda Guerra Mundial, a DMG foi uma importante contribuidora de meios de transporte como carros de combate, automóveis militares e motores para aviões.\n[…]\nA Mercedes também faz o desenvolvimento de motores para competição. Um exemplo é a participação na Fórmula 1: faz parte das equipas Williams F1, Force India, Lotus F1, Mercedes GP, etc.\n[…]\nMercedes-Benz Juiz de Fora\n[…]\nMercedes-AMG\n[…]\n«Mercedes-Benz Portugal»\n[…]\n«Mercedes-Benz Brasil»\n[…]\n«Mercedes-Benz Club Brasil» , na Google Plus\n[…]\n«Portal Mercades-Benz Brasil (Não-oficial)»\n[…]\nQuatro Rodas. Mercedes-Benz W116: o primeiro da classe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Toblerone",
      "descricao": "Barra de chocolate suíça em formato de prismas triangulares, criada por Theodor Tobler em 1908."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No desenho da montanha do logotipo do Toblerone há um animal escondido, símbolo da cidade de Berna. Que animal é esse?",
    "resposta": "Urso",
    "distratores": [
      "Águia",
      "Leão",
      "Cabra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toblerone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toblerone",
        "situacao": "ok",
        "texto": "Toblerone (  TOH-blə-rohn, German: [tobləˈʁoːnə], Swiss Standard German: [toblɛˈroːnɛ]) is a chocolate brand owned by Mondelez International (originally Kraft Foods). It was produced in Bern, Switzerland, except for some produced before 1970 in England and Scotland, until 2022, when Mondelez began producing some of it in Bratislava, Slovakia.\n[…]\nToblerone thins in a beige triangular box:\n[…]\nTobler Truffles\n[…]\nIn 1995, it was revealed that the Swedish politician Mona Sahlin had misused her government-issued credit card for unauthorised purchases. Because she had bought, among many other more expensive items, two bars of Toblerone, pro-Sahlin journalists attempted to downplay her abuse of parliamentary financial privileges as the \"Toblerone affair\", but Sahlin was nevertheless forced to step down as a Prime Ministerial candidate. She returned to politics in 1998.\n[…]\nA triangular set of residences for students of the University of Manchester on the Oxford Road, Manchester, England, built in about 1975 are known as the Toblerones.\n[…]\nThe largest-sized Toblerone in production is used as a running gag in the 2017 Netflix series Neo Yokio.\n[…]\nToblerone has long been associated with air travel and duty-free retail. Food writer and cookbook author Irvin Lin wrote:\n[…]\nIt was something I associated with being a child, and that exclusivity of only getting it at the airport. Purchasing a Toblerone was very special for me. My friends' families would go on vacation and they brought back this chic, European, long triangle-shaped chocolate. I never saw [Toblerones] at a grocery store. I thought you could only get it at the airport or when you were traveling and part of the jet set.\n[…]\nIn 2024 Toblerone's \"Win a Diamond\" concept tied with the iconic Toblerone shape, and slogans like \"Diamonds are forever-ish\" brought humor and style to the travelers' experience."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toblerone",
        "situacao": "ok",
        "texto": "Toblerone é uma marca de chocolate suíço, originalmente produzida em Berna (parte da produção mudou para a Eslováquia) pela antiga empresa Chocolat Tobler AG, depois a Kraft Foods e, agora, a Mondelēz International — a maior empresa de alimentos e confeitos dos Estados Unidos.\n[…]\nEm 2023 — como a produção será feita parcialmente em outros países, principalmente na Eslováquia — e para corresponder aos requisitos da legislação suíça — adotada, em 2017, para proteger os produtos fabricados no país — algumas modificações foram feitas nas embalagens: o Matterhorn foi trocado por uma montanha estilizada e genérica; e a denominação \"da Suíça\" — que surge logo abaixo da marca na embalagem — foi substituída por \"estabelecido na Suíça\".\n[…]\nO nome do produto é um amálgama que combina o nome \"Tobler\" (sobrenome de um dos fundadores) com a palavra italiana torrone.\n[…]\nO nome também contém as letras do local onde era originalmente produzido: toblerone (Berne, nome francês de Berna). No logotipo aparece um urso estilizado em referência ao brasão da cidade.\n[…]\nChocolate de Leite Toblerone (1908, ano da fundação da fábrica)\n[…]\nChocolate Branco Toblerone (1970) – chocolate branco\n[…]\nChocolate Negro Toblerone (1969) – chocolate amargo\n[…]\nToblerone Minis (1995) – chocolates de 12,5 gramas com recheio de pralinê\n[…]\nToblerone Blue (1996) – chocolate ao leite com o interior de chocolate branco\n[…]\nToblerone One by One – triângulos de Toblerone separados, cada um numa embalagem\n[…]\nToblerone One by One Varieties – triângulos de Toblerone separados, com os cinco sabores (ao leite, branco, negro, minis e blue)\n[…]\nChocolate Fruit and Nut Toblerone (2008) – com uvas passas e nozes\n[…]\nChocolate Honey Crisp Toblerone (2008) – com \"pepitas\" de mel\n[…]\n«Página oficial da Toblerone no Brasil»\n[…]\n«Página oficial da Toblerone» (em alemão)",
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
