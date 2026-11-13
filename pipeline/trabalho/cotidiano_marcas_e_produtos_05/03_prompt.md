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
      "nome": "Coca-Cola",
      "descricao": "Refrigerante de cola criado em Atlanta, nos Estados Unidos, em 1886."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Coca-Cola vem de dois ingredientes da fórmula original: a folha de coca e qual semente africana, rica em cafeína?",
    "resposta": "Noz-de-cola",
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
    "indice": 2,
    "ancora": {
      "nome": "Coca-Cola",
      "descricao": "Refrigerante de cola criado em Atlanta, nos Estados Unidos, em 1886."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Sócio e contador do farmacêutico John Pemberton, quem sugeriu o nome Coca-Cola e desenhou a letra cursiva do logotipo?",
    "resposta": "Frank Robinson",
    "distratores": [
      "Asa Candler",
      "Robert Woodruff",
      "Willis Venable"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Frank_Mason_Robinson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frank_Mason_Robinson",
        "situacao": "ok",
        "texto": "Frank Mason Robinson (September 12, 1845 – July 8, 1923) was an important early marketer and advertiser of what became known as Coca-Cola.\n[…]\nIn 1886 Frank Robinson officially settled in Atlanta where a new business was made called the Pemberton Chemical Company consisting of Robinson, Pemberton, David Doe and Pemberton's old partner, Ed Holland.\n[…]\nCandler, Frank M. Robinson and two other associates. Robinson served as treasurer and secretary and changed the Coca-Cola syrup formula so as not to include any faint traces of cocaine by the time of the Pure Food and Drug Act initiated by the Federal Government in 1906. The starting capitalization for the company was at $100,000.\n[…]\nRobinson overall was responsible for the early advertising of Coca-Cola before and after Candler bought the name and syrup formula from Pemberton, the first ads appearing in The Atlanta Journal in 1887. While still working with Pemberton, Robinson had the initial ads display short phrases such as \"Coca-Cola! Delicious! Refreshing! Exhilarating! Invigorating!\n[…]\nOriginally from Maine, as a young man he was in Iowa where he married Laura Clapp. Robinson had a home in Druid Hills, an early suburb of Atlanta. He also had a 40-acre (160,000 m2) country home on the Cobb County banks of the Chattahoochee River. The property had been a southern fortification defending the railroad bridge. The property is currently the Frank Mason Robinson Nature Preserve. He owned six residences which were occupied rent free by family and friends.\n[…]\nRobinson died in July 1923 and was buried in Atlanta's Westview Cemetery."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "KFC",
      "descricao": "Rede americana de lanchonetes de frango frito fundada por Harland Sanders, o Coronel Sanders, em Kentucky."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Harland Sanders, o fundador do KFC, nunca foi militar. De onde veio o título de coronel que ele usava?",
    "resposta": "Honraria do governo do Kentucky",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colonel_Sanders"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colonel_Sanders",
        "situacao": "ok",
        "texto": "Harland David Sanders (September 9, 1890 – December 16, 1980), commonly known as Colonel Sanders, was an American entrepreneur and founder of fast food chicken restaurant chain Kentucky Fried Chicken (KFC). He later acted as the company's brand ambassador and symbol. His name and image are still symbols of the company today.\n[…]\nSanders was commissioned as a Kentucky Colonel in 1935 by Kentucky governor Ruby Laffoon. His local popularity grew, and, in 1939, food critic Duncan Hines visited Sanders's restaurant and included it in Adventures in Good Eating, his guide to restaurants throughout the US. The entry read:\n[…]\nHe left his mistress, Claudia Ledington-Price, as the manager of the North Corbin restaurant and motel. In 1942, he sold the Asheville business. In 1947, he and Josephine divorced. In 1949, Sanders married Claudia, as he had long desired. In 1950, Sanders was \"re-commissioned\" as a Kentucky Colonel by his friend, Governor Lawrence Wetherby.\n[…]\nThe company's rapid expansion to more than 600 locations became overwhelming for the aging Sanders. In 1964, then 73 years old, he sold the Kentucky Fried Chicken corporation for $2 million ($20.8 million today) to a partnership of Kentucky businessmen headed by John Y. Brown Jr., a 29-year-old lawyer and future governor of Kentucky, and Jack C. Massey, a venture capitalist and entrepreneur. Sanders became a salaried brand ambassador.\n[…]\nAfter being recommissioned as a Kentucky colonel in 1950 by Governor Lawrence Wetherby, Sanders began to dress the part, growing a goatee and wearing a black frock coat (later switching to a white suit) and a black ribbon bow tie, and referring to himself as \"Colonel\". His associates went along with the title change, \"jokingly at first and then in earnest\", according to biographer Josh Ozersky.\n[…]\nClaudia Sanders Dinner House"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coronel_Sanders",
        "situacao": "ok",
        "texto": "Coronel Harland David Sanders (Henryville, 9 de setembro de 1890 — Louisville, 16 de dezembro de 1980) foi um empresário americano, mais conhecido por fundar a cadeia de restaurantes de fast food de frango Kentucky Fried Chicken (também conhecida como KFC) e mais tarde atuar como embaixador da marca da empresa e símbolo. Seu nome e imagem ainda são símbolos da empresa.\n[…]\nA rápida expansão da empresa nos Estados Unidos e no exterior tornou-se esmagadora para Sanders. Em 1964, então com 73 anos, ele vendeu a empresa para um grupo de investidores liderado por John Y. Brown Jr. e Jack C. Massey por dois milhões de dólares (18,9 milhões de dólares em 2023). No entanto, ele manteve o controle das operações no Canadá e se tornou um embaixador assalariado da marca Kentucky Fried Chicken.\n[…]\nDepois de ser recomissionado como coronel do Kentucky em 1950 pelo governador Lawrence Wetherby, Sanders começou a se vestir para o papel, deixando crescer um cavanhaque e vestindo uma sobrecasaca preta (mais tarde mudando para um terno branco), uma gravata-borboleta e referindo-se a si mesmo como \"Coronel\". Seus associados aceitaram a mudança de título, \"primeiro de brincadeira e depois a sério\", de acordo com o biógrafo Josh Ozersky.\n[…]\nSanders foi diagnosticado com leucemia aguda em junho de 1980. Ele morreu de pneumonia no Hospital Judeu de Louisville seis meses depois, em 16 de dezembro, aos noventa anos de idade. Sanders permaneceu ativo até um mês antes de sua morte, aparecendo em seu terno branco para multidões. Seu corpo foi velado na rotunda do Capitólio do Estado de Kentucky em Frankfort após um funeral na Capela do Seminário Teológico Batista do Sul, que contou com a presença de mais de quinhentas pessoas.\n[…]\nEncyclopedia of Kentucky. New York, New York: Somerset Publishers. 1987. pp. 185–186. ISBN 0-403-09981-1\n[…]\nCoronel Sanders no IMDb\n[…]\n«Claudia Sanders Dinner House»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Nike",
      "descricao": "Empresa americana de calçados e artigos esportivos fundada por Phil Knight e Bill Bowerman, dona do logotipo Swoosh."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de adotar o nome Nike, no começo dos anos setenta, como se chamava a empresa de Phil Knight e Bill Bowerman?",
    "resposta": "Blue Ribbon Sports",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nike,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.\n[…]\nThe company was founded on January 25, 1964, as \"Blue Ribbon Sports\", by Bill Bowerman and Phil Knight, and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess of victory. Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding and Nike CR7. The company also sells products under its Air Jordan brand and its Converse subsidiary.\n[…]\nNike, originally known as Blue Ribbon Sports (BRS), was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 1964. The company initially operated in Eugene, Oregon, as a distributor for Japanese shoemaker Onitsuka Tiger, making most sales at track meets out of Knight's automobile.\n[…]\nBowerman's design led to the introduction of the \"Moon Shoe\" in 1972, so named because the waffle tread was said to resemble the footprints left by astronauts on the Moon. Further refinement resulted in the \"Waffle Trainer\" in 1974, which helped fuel the explosive growth of Blue Ribbon Sports/Nike.\n[…]\nUnder that bill's terms, Beaverton is specifically barred from forcibly annexing the land that Nike and Columbia Sportswear occupy in Washington County for 35 years, while Electro Scientific Industries and Tektronix receive the same protection for 30 years.\n[…]\nPhil Knight (17.4%)\n[…]\nNike have introduced a premium line, focused more on streetwear than sports wear called NikeLab."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nike%2C_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. é uma empresa estadunidense de calçados e vestuário esportivos sediada nas proximidades de Beaverton, no Oregon. É a maior fornecedora mundial de calçados esportivos e vestuário e uma importante fabricante de equipamentos esportivos, com receita superior a US$ 46 bilhões em seu ano fiscal de 2022.\n[…]\nA empresa foi fundada em 25 de janeiro de 1964, como \"Blue Ribbon Sports\", por Bill Bowerman e Phil Knight, e tornou-se oficialmente Nike, Inc. em 30 de maio de 1971. A empresa recebeu seu nome de Nice, a deusa grega da vitória. A Nike comercializa seus produtos sob sua própria marca, bem como sob Nike Golf, Nike Pro, Nike+, Nike Blazer, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding e Nike CR7. A empresa também vende produtos sob sua marca Air Jordan e sua subsidiária Converse.\n[…]\nA Nike, originalmente conhecida como Blue Ribbon Sports (BRS), foi fundada pelo atleta de atletismo da Universidade de Oregon Phil Knight e por seu treinador, Bill Bowerman, em 25 de janeiro de 1964. A empresa operava inicialmente em Eugene, no Oregon, como distribuidora da fabricante japonesa de calçados Onitsuka Tiger, realizando a maior parte das vendas em competições de atletismo a partir do automóvel de Knight.\n[…]\nO projeto de Bowerman levou ao lançamento do \"Moon Shoe\" em 1972, assim chamado porque se dizia que o padrão em forma de waffle da sola lembrava as pegadas deixadas por astronautas na Lua. Um aperfeiçoamento posterior resultou no \"Waffle Trainer\", em 1974, que ajudou a impulsionar o rápido crescimento da Blue Ribbon Sports/Nike.\n[…]\nPhil Knight anunciou em meados de 2015 que deixaria o cargo de presidente do conselho da Nike em 2016. Ele deixou oficialmente todas as suas funções na empresa em 30 de junho de 2016.\n[…]\nPhil Knight (17,4%)\n[…]\nDados comerciais para Nike, Inc.:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Toyota",
      "descricao": "Montadora japonesa de automóveis fundada em 1937 por Kiichiro Toyoda, a partir da empresa de teares da família Toyoda."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Fundada pela família Toyoda, a montadora japonesa passou a se chamar Toyota em parte por um motivo de sorte. Qual?",
    "resposta": "Escreve-se com oito traços, número da sorte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn: Toyota Jidōsha kabushiki gaisha; IPA: [toꜜjota], English: , commonly known as simply Toyota) is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. Founded in 1937 by Kiichiro Toyoda, Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.\n[…]\nAs of 2026, the Toyota Motor Corporation produces vehicles under four brands: Century, Daihatsu, Lexus and the namesake Toyota.\n[…]\nAlso in 1981, Eiji Toyoda stepped down as president and assumed the title of chairman. He was succeeded as president by Shoichiro Toyoda, the son of the company's founder. Within months, Shoichiro started to merge Toyota's sales and production organizations, and in 1982 the combined companies became the Toyota Motor Corporation. The two groups were described as \"oil and water\" and it took years of leadership from Shoichiro to successfully combine them into one organization.\n[…]\nAisin, another member of the Toyota Group of companies, uses the same Toyota wordmark logo to market its home-use sewing machines. Aisin was founded by Kiichiro Toyoda after he founded the Toyota Motor Corporation. According to Aisin, he was so pleased with the first sewing machine, he decided to apply the same Toyota branding as his auto business, despite the companies being independent from each other.\n[…]\nToyota Motor North America is headquartered in Plano, Texas, and operates as a holding company for all operations of the Toyota Motor Corporation in Canada, Mexico, and the United States. Toyota's operations in North America began on October 31, 1957, and the current company was established in 2017 from the consolidation of three companies: Toyota Motor North America, Inc., which controlled Toyota's corporate functions; Toyota Motor Sales, U.S.A., Inc.\n[…]\nToyota Cup\n[…]\nToyota model codes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (em Japonês: トヨタ自動車株式会社, Toyota Jidōsha kabushikigaisha) é um fabricante automotivo japonês com sede na cidade de Toyota, província de Aichi, no Japão. Em março de 2014, a corporação multinacional era composta por 338 875 funcionários em todo o mundo e, em fevereiro de 2016, era a 13.ª maior empresa do mundo por receita. A Toyota foi o maior fabricante de automóveis em 201\n[…]\nEm julho desse ano, a companhia relatou a produção de seu veículo número 200 milhões. A Toyota é a primeira fabricante de automóveis do mundo a produzir mais de 10 milhões de veículos por ano. Fez isso em 2012 de acordo com a OICA, e em 2013 de acordo com dados da empresa. Em julho de 2014, era a maior empresa listada no Japão por capitalização de mercado (vale mais do que o dobro da segunda classificada, a SoftBank) e por receitas.\n[…]\nEm 2016, comercializou 10,18 milhões de unidades, somando as marcas Toyota, Lexus, Daihatsu e Hino Motors. Desta maneira, ficou abaixo dos números da sua concorrente, a europeia Grupo Volkswagen (10,3 milhões em vendas), ocupando o 2° lugar no ranking em vendas mundiais de veículos.\n[…]\nA empresa foi fundada por Kiichiro Toyoda em 1937, como uma subsidiária da empresa de seu pai, a Toyota Industries, para criar automóveis. Três anos antes, em 1934, enquanto ainda era um departamento da Toyota Industries, criou seu primeiro produto, o tipo A, e, em 1936, seu primeiro carro de passageiros, o Toyota AA. A Toyota Motor Corporation produz veículos sob cinco marcas: Toyota, Hino, Lexus, Ranz e Daihatsu.\n[…]\nO nome original da família era Toyoda, mas, por questões numerológicas, a indústria foi batizada como Toyota. As origens da empresa remontam à criação de uma secção dedicada à produção de automóveis na, já existente, empresa de fabricação de teares automáticos, chamada Toyoda Automatic Loom, em setembro de 1933.[carece de fontes]?\n[…]\n«Estudo de Caso Toyota»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Toyota",
      "descricao": "Montadora japonesa de automóveis fundada em 1937 por Kiichiro Toyoda, a partir da empresa de teares da família Toyoda."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os carros Toyota têm a ver com a indústria têxtil japonesa?",
    "resposta": "Nasceram de uma fábrica de teares",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota",
      "https://en.wikipedia.org/wiki/Toyota_Industries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn: Toyota Jidōsha kabushiki gaisha; IPA: [toꜜjota], English: , commonly known as simply Toyota) is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. Founded in 1937 by Kiichiro Toyoda, Toyota is the largest automobile manufacturer in the world, producing about 10 million vehicles per year.\n[…]\nToyota's first manufacturing investment in the United States came in 1972 when the company struck a deal with Atlas Fabricators, to produce truck beds in Long Beach, in an effort to avoid the 25% \"chicken tax\" on imported light trucks. By importing the truck as an incomplete chassis cab (the truck without a bed), the vehicle only faced a 4% tariff. Once in the United States, Atlas would build the truck beds and attach them to the trucks.\n[…]\nToyota Industries Corporation (8.79%)\n[…]\nToyota Motor Europe is headquartered in Brussels, Belgium, and oversees all operations of the Toyota Motor Corporation in Europe and western Asia. Toyota's operations in Europe began in 1963. Toyota has a significant presence in Europe with nine production facilities in Kolín, Czech Republic, Burnaston, England, Deeside, Wales, Onnaing, France, Jelcz-Laskowice, Poland, Wałbrzych, Poland, Ovar, Portugal, Saint Petersburg, Russia, and Arifiye, Turkey.\n[…]\nToyota Motor North America is headquartered in Plano, Texas, and operates as a holding company for all operations of the Toyota Motor Corporation in Canada, Mexico, and the United States. Toyota's operations in North America began on October 31, 1957, and the current company was established in 2017 from the consolidation of three companies: Toyota Motor North America, Inc., which controlled Toyota's corporate functions; Toyota Motor Sales, U.S.A., Inc.\n[…]\nToyota Cup\n[…]\nToyota model codes\n[…]\nToyota Verblitz, the company's rugby team\n[…]\nBusiness data for Toyota Motor Corp:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Toyota_Industries",
        "situacao": "ok",
        "texto": "Toyota Industries Corporation (Japanese: 株式会社豊田自動織機, Hepburn: Kabushiki gaisha Toyota Jidō Shokki; literally \"Stock Company Toyota Automatic Loom\") is a Japanese machine maker. Originally, and still actively (as of 2026), a manufacturer of automatic looms, it is the company from which Toyota Motor Corporation developed. It is the world's largest manufacturer of forklift trucks measured by revenues\n[…]\nIn 1933, the company established its automobile department, led by Kiichiro Toyoda, the eldest son of Sakichi Toyoda. This department was spun off as Toyota Motor Co., Ltd. in 1937 and is now known as Toyota Motor Corporation. Toyota Industries is one of 13 core companies of the Toyota Group. The company owns 9.15% of Toyota Motor and is the largest shareholder (excluding trust revolving funds).\n[…]\nToyota Industries is active in five business areas: automotive, materials handling, electronics, logistics, and textile machinery.\n[…]\nToyota-branded forklifts from Toyota Industries share the same logo as Toyota automobiles from Toyota Motor Corporation and are manufactured at the Toyota Material Handling Inc. (TMH), previously known as Toyota Industrial Equipment Manufacturing (TIEM), facility in Columbus, Indiana, for the US market.\n[…]\nToyota Industries Corporation is under contract from Toyota Motor Corporation for the production and assembly of the Toyota RAV4 vehicles. The company manufactures automotive engines for use in Toyota-branded automobiles such as Avensis, Corolla, Crown, and Land Cruiser.\n[…]\nIn 2000, Toyota Industries acquired the Swedish-based forklift truck corporation BT Industries, alongside BT's subsidiaries The Raymond Corporation and CESAB. Combined with Toyota Industries' materials handling division, this created the largest forklift company in the world, Toyota Material Handling Corporation.\n[…]\nToyota Industries Shining Vega, a Japanese women's softball team"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (em Japonês: トヨタ自動車株式会社, Toyota Jidōsha kabushikigaisha) é um fabricante automotivo japonês com sede na cidade de Toyota, província de Aichi, no Japão. Em março de 2014, a corporação multinacional era composta por 338 875 funcionários em todo o mundo e, em fevereiro de 2016, era a 13.ª maior empresa do mundo por receita. A Toyota foi o maior fabricante de automóveis em 201\n[…]\nA empresa foi fundada por Kiichiro Toyoda em 1937, como uma subsidiária da empresa de seu pai, a Toyota Industries, para criar automóveis. Três anos antes, em 1934, enquanto ainda era um departamento da Toyota Industries, criou seu primeiro produto, o tipo A, e, em 1936, seu primeiro carro de passageiros, o Toyota AA. A Toyota Motor Corporation produz veículos sob cinco marcas: Toyota, Hino, Lexus, Ranz e Daihatsu.\n[…]\nO nome original da família era Toyoda, mas, por questões numerológicas, a indústria foi batizada como Toyota. As origens da empresa remontam à criação de uma secção dedicada à produção de automóveis na, já existente, empresa de fabricação de teares automáticos, chamada Toyoda Automatic Loom, em setembro de 1933.[carece de fontes]?\n[…]\nCom o lucro recorde de 2006, a Toyota esteve muito perto de superar a norte-americana GM, tornando-se a maior fabricante de automóveis do mundo. No mês de maio de 2007, foi considerada a maior fabricante de automóveis do mundo, tendo, assim, superado a antiga rival norte-americana GM. Transformou-se na maior montadora do mundo, sempre fiel ao seu lema \"um cliente é para sempre\".\n[…]\nEm 1971 abriu em Ovar a primeira fábrica da Toyota implantada na Europa. Embora em 2018 tenha um posicionamento mais secundário em termos de produção, a fábrica mantém-se em atividade, produzindo o modelo Land Cruiser 70 com a particularidade de que toda a sua produção tem como destino o estrangeiro.\n[…]\n«Toyota em Portugal»\n[…]\n«Toyota no Brasil»\n[…]\n«Estudo de Caso Toyota»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Nutella",
      "descricao": "Creme de avelã com cacau da empresa italiana Ferrero, lançado em 1964."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Nutella junta um diminutivo italiano a uma palavra da língua inglesa. O que essa palavra inglesa significa?",
    "resposta": "Noz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nutella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nutella",
        "situacao": "ok",
        "texto": "Nutella (UK:  nuh-TEL-ə, US:   noo-TEL-ə, Italian: [nuˈtɛlla]; stylized in all lowercase) is an Italian brand of sweetened hazelnut cocoa spread. Nutella is manufactured by the Italian company Ferrero and was introduced in 1964, although the first iteration dates to 1963.\n[…]\nOn 14 May 2014, Poste Italiane issued a 50th anniversary Nutella commemorative stamp. The 70 Euro cent stamp was designed by Istituto Poligrafico e Zecca dello Stato and features a jar of Nutella on a golden background. Ferrero held a Nutella Day on 17 and 18 May to celebrate the anniversary.\n[…]\nThe main ingredients of Nutella are sugar and palm oil (greater than 50%). It also contains 13% hazelnuts, (fat-reduced) cocoa powder (7.4%), and skimmed milk. In the United States and the United Kingdom, Nutella contains soy products. Nutella is marketed as \"hazelnut cream\" in many countries. Under Italian law, it cannot be labelled as a \"chocolate cream\", as it does not meet minimum cocoa solids concentration criteria. Each 220g jar of Nutella uses approximately 50 hazelnuts.\n[…]\nNutella entered the Russian market and has a production plant in Vladimir.\n[…]\nIn Italy, one of the most common ways to consume it is by spreading it on slices of filone (a typical Italian loaf bread) or between two or more slices of sandwich bread (pancarrè e Nutella). These two uses are very typical among Italian children as an afternoon snack or during school recess. It is also traditionally used as a filling in cornetti, bomboloni, and crepes, or in recipes such as sbriciolona alla Nutella and nutellotti, soft cookies with a warm Nutella centre.\n[…]\nPadovani, Gigi (2014). Mondo Nutella. 50 Anni di Innovazione [Nutella World: 50 Years of Innovation] (in Italian). Milan: Rizzoli Etas. ISBN 978-88-17-07167-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nutella",
        "situacao": "ok",
        "texto": "Nutella (nuˈtɛla) é uma marca de um creme de avelã com cacau e leite  que está presente em quase todo o mundo. Nutella foi criado pela empresa italiana Ferrero no ano de 1963. A receita foi desenvolvida a partir de um outro produto lançado pela Ferrero em 1944. Nutella é atualmente vendido em mais 75 países. No Brasil, é vendida desde 2005.\n[…]\nPopular tanto entre crianças quanto entre adultos, os esquerdistas a tinham em alta estima como a resposta italiana à manteiga de amendoim americana. Em 1983, a Nutella foi lançada na América pela primeira vez.\n[…]\nEm 14 de maio de 2014, a Poste Italiane emitiu um selo comemorativo de 50 anos da Nutella. O selo de 70 Euro cent foi desenhado pelo Istituto Poligrafico e Zecca dello Stato e apresenta um pote de Nutella sobre fundo dourado. A Ferrero realizou um Dia da Nutella nos dias 17 e 18 de maio para celebrar o aniversário.\n[…]\nDuas das quatro fábricas da Ferrero na Itália produzem Nutella, em Alba, Piemonte, e em Sant'Angelo dei Lombardi, na Campânia. Na França, uma instalação de produção está localizada em Villers-Écalles. Para a Europa Oriental (incluindo Sudeste Europeu, Polônia, Turquia, República Tcheca e Eslováquia) e África do Sul, é produzida em Varsóvia e Manisa. Para a Alemanha e Europa Setentrional, a Nutella é produzida na fábrica da Ferrero em Stadtallendorf, que existe desde 1956.\n[…]\nAlguns supermercados da Itália decidiram retirar o produto de circulação, de acordo com o resultado do relatório da AESA. Segundo as autoridades, o óleo de palma é prejudicial à saúde quando é submetido a temperaturas maiores que 200° C, pois libera ácidos graxos que podem causar câncer. A Ferrero, empresa responsável pelo produto, negou que a Nutella cause qualquer tipo de risco. De acordo com a Ferrero, na produção do alimento, a temperatura não chega a 200° C.\n[…]\nCulinária da Itália",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Aspirina",
      "descricao": "Medicamento à base de ácido acetilsalicílico, lançado pela Bayer em 1899, usado contra dor, febre e inflamação."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Aspirina, criado pela Bayer, traz um pedaço do antigo nome científico de qual planta, fonte natural de um composto parecido?",
    "resposta": "Ulmária",
    "distratores": [
      "Salgueiro",
      "Papoula",
      "Camomila"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aspirin",
      "https://en.wikipedia.org/wiki/Filipendula_ulmaria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aspirin",
        "situacao": "ok",
        "texto": "Aspirin () is the genericized trademark for acetylsalicylic acid (ASA), a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation, and as an antithrombotic. Aspirin is used to treat inflammatory conditions including Kawasaki disease, pericarditis, and rheumatic fever.\n[…]\nAspirin's popularity grew over the first half of the 20th century, leading to competition between many brands and formulations. The word Aspirin was Bayer's brand name; however, its rights to the trademark were lost or sold in many countries.\n[…]\nSalicylic acid had been extracted in 1839 from the herb meadowsweet, whose German name, Spirsäure, was the basis for naming the newly synthesized drug, which, by 1899, Bayer was selling globally. The word Aspirin was Bayer's brand name, rather than the generic name of the drug; however, Bayer's rights to the trademark were lost or sold in many countries.\n[…]\nBayer lost its trademark for aspirin in the United States and some other countries in actions taken between 1918 and 1921, because it had failed to use the name for its own product correctly and had for years allowed the use of \"Aspirin\" by other manufacturers without defending the intellectual property rights. Aspirin is a generic trademark in many countries.\n[…]\nAspirin, with a capital \"A\", remains a registered trademark of Bayer in Germany, Canada, Mexico, and over 80 other countries, for acetylsalicylic acid in all markets, but using different packaging and physical aspects for each.\n[…]\nNo clinical signs of toxicosis occurred when cats were given 25 mg/kg of aspirin every 48 hours for 4 weeks, but the recommended dose for relief of pain and fever and for treating blood clotting diseases in cats is 10 mg/kg every 48 hours to allow for metabolization."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Filipendula_ulmaria",
        "situacao": "ok",
        "texto": "Filipendula ulmaria, commonly known as meadowsweet or mead wort, is a perennial herbaceous plant in the family Rosaceae that grows in damp meadows. It is native throughout most of Europe and Western Asia (Near East and Middle East). It has been introduced and naturalised in North America.\n[…]\nThe specific epithet ulmaria means \"elmlike\", possibly in reference to its individual leaves which resemble those of the elm (Ulmus). The generic name, Filipendula, comes from filum, meaning \"thread\" and pendulus, meaning \"hanging\". This is said to describe the slender attachment of root tubers, which hang characteristically on the genus, on fibrous roots.\n[…]\nMeadowsweet leaves are commonly galled by the bright orange-rust fungus Triphragmium ulmariae, which creates swellings and distortions on the stalk and/or midrib.\n[…]\nThe fungus Ramularia ulmariae causes purple blotches on the leaves.\n[…]\nThe midge Dasineura ulmaria causes pinkish-white galls on the leaves that can distort the leaf surface.\n[…]\nChemical constituents include salicin, flavone glycosides, essential oils, and tannins. In 1838, Raffaele Piria obtained salicylic acid from the buds of meadowsweet. Thereafter in 1899, scientists at the firm Bayer used salicylic acid derived from meadowsweet to synthesise acetylsalicylic acid (aspirin), which was named after the old botanical name for meadowsweet, Spiraea ulmaria. The name then became aspirin.\n[…]\nA natural black dye can be obtained from the roots by using a copper mordant.\n[…]\nA tea made from Filipendula ulmaria flowers or leaves has been used in traditional Austrian herbal medicine for the treatment of rheumatism, gout, infections, and fever.\n[…]\nMedia related to Filipendula ulmaria at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81cido_acetilsalic%C3%ADlico",
        "situacao": "ok",
        "texto": "O ácido acetilsalicílico ou AAS (C9H8O4), conhecido popularmente como aspirina, nome de uma marca que se tornou de uso comum, é um fármaco da família dos salicilatos. É utilizado como medicamento para tratar a dor (analgésico), a febre (antipirético) e a inflamação (anti-inflamatório não esteroide), devido ao seu efeito inibidor, não selectivo, da ciclo-oxigenase.\n[…]\nEm 1897, os cientistas da Bayer começaram a estudar a aspirina como um possível substituto menos irritante que os medicamentos de salicilato comuns. No entanto, antes de 1899, a Bayer conferiu ao fármaco o nome Aspirina e passou a comercializar a marca em todo mundo, os direitos da empresa sobre a marca perderam-se ou foram vendidos em muitos países.\n[…]\nEm 1897 o laboratório farmacêutico alemão Bayer conjugou quimicamente o ácido salicílico com acetato, criando o ácido acetilsalicílico (Aspirina), que descobriram ser menos tóxico. O ácido acetilsalicílico foi o primeiro fármaco a ser sintetizado na história da farmácia e não recolhido na sua forma final da natureza. Foi a primeira criação da indústria farmacêutica. Foi também o primeiro fármaco vendido em tabletes.\n[…]\nE em julho de 1899 a Bayer começou a comercializar a aspirina, obtendo sucesso imediato.\n[…]\nA Bayer perdeu a marca registada Aspirina em muitos países após a Primeira Guerra Mundial, como reparação de guerra aos países aliados.\n[…]\nAspirina nunca pode ser ministrada em casos de dengue.\n[…]\nPesquisadores do Instituto Francis Crick, em Londres, afirmaram em 2015 que a aspirina pode ajudar no tratamento do câncer.\n[…]\nHistória da aspirina\n[…]\nK Akre, A M Ekström, L B Signorello, et. al. Aspirin and risk for gastric cancer: a population-based case-control study in Sweden. Br J Cancer 2001; 84(7):965-8\n[…]\nMétodo laboratorial de síntese da aspirina\n[…]\nBula da aspirina",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Fanta",
      "descricao": "Refrigerante criado na Alemanha em 1940 pela filial alemã da Coca-Cola."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Alemanha dos anos quarenta, o nome Fanta nasceu de um pedido do chefe da filial da Coca-Cola: que a equipe usasse o quê?",
    "resposta": "A imaginação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fanta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta () is a German-founded, American-owned brand of carbonated, fruit-flavored soft drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith. Today, the brand features over 200 flavors worldwide.\n[…]\nHe later described them as the \"leftovers of leftovers\". The name was the result of a brainstorming session, which started with Keith's exhorting his team to \"use their imagination\" (Fantasie in German), to which one of his salesmen, Joe Knipp, retorted \"Fanta!\".\n[…]\nIn Israel the Fanta flavors were marketed as Kinley because a small beverage company from Tiberias owned the Fenta brand, using the same spelling as Fanta in Hebrew. After that company ceased to exist, Coca Cola rebranded its fruity flavored sodas Fanta.\n[…]\nIn early February 2024, The Coca-Cola Company announced that Lilt (a pineapple and grapefruit soft drink sold in countries such as the UK and Ireland) would be rebranded as Fanta Pineapple and Grapefruit flavour on 14 February 2023.\n[…]\nIn February 2015, a 75th-anniversary version of Fanta was released in Germany. Packaged in glass bottles evoking the original design and with an authentic original wartime flavor including 30% whey and pomace, it is described on the packaging as \"less sweet\" and a German original. An associated television ad referenced the history of the drink and said the Coca-Cola company wanted to bring back \"the feeling of the Good Old Times\" which was interpreted by many to mean Nazi rule.\n[…]\n\"Why Coca-Cola Invented Fanta In Nazi Germany\". Business Insider. November 8, 2019. Archived from the original on December 21, 2021.\n[…]\n\"Coca Cola and the war\". Digger History.\n[…]\n\"How Fanta was invented in Nazi Germany to quench people's thirst for Coke\" Julius Haswell"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fanta",
        "situacao": "ok",
        "texto": "Fanta é uma marca de refrigerantes que detém uma linha variada de produtos e que pertence à The Coca-Cola Company. Criada e lançada na Alemanha durante a Segunda Guerra Mundial, atualmente é comercializada em 188 países.\n[…]\nFoi a partir de um concurso realizado entre os funcionários da fábrica alemã coordenada por Max Keith que surgiu o nome Fanta. Keith pediu aos empregados que usassem a “imaginação\" (Fantasie em alemão). Ao ouvir isso, o vendedor veterano Joe Knipp imediatamente deixou escapar “Fanta” que passou a ser adotado como marca. Os trabalhadores da Coca-Cola em Essen antes da guerra não podiam mudar de emprego ou protestar além de produzirem em um ritmo frenético.\n[…]\nA Coca-Cola criou novas filiais em áreas ocupadas por nazistas. A Fanta usou trabalho escravo na Alemanha Nazi, limitou a rotatividade de emprego e pagava abaixo da inflação.. Apesar de todos estes fatos, a Coca-cola afirma que \"nem Max Keith nem a empresa engarrafadora estavam ligados ao regime\".\n[…]\nFanta Laranja - Lançada no mercado brasileiro em 1964. Segundo a Coca Cola, o país corresponde ao maior mercado de Fanta Laranja no mundo.\n[…]\nAconteceu também a retirada por sobreposição de produtos, isto é, a mesma empresa (Coca-Cola) comercializando itens similares, foi o que ocorreu com a Fanta Limão (lançada em 1978 e descontinuada em 1984, ano de lançamento do Sprite limão), e com a Fanta Guaraná (lançada no final da década de 70 e substituída pelo Guaraná Taí no início da década de 80, e este, por sua vez, substituído em boa parte do país pela marca Kuat, e relançada em 2017).\n[…]\nFanta Mundo Brasil Limetto – Limão –  Alemanha - Lançada em 2008\n[…]\nFanta Mundo Brasil Maçã-verde – Coreia\n[…]\nFanta Mundo Brasil Uva –  Portugal - Lançada em 2006",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ray-Ban",
      "descricao": "Marca de óculos escuros criada nos Estados Unidos pela Bausch & Lomb nos anos 1930."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome dos óculos escuros Ray-Ban descreve, em inglês, o que as lentes fazem. O quê?",
    "resposta": "Barram os raios de sol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ray-Ban"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ray-Ban",
        "situacao": "ok",
        "texto": "Ray-Ban is an American Italian-owned brand of luxury sunglasses and standard glasses created in 1936 by Canadian international company Bausch & Lomb. The brand is most notable for its Wayfarer and Aviator lines of sunglasses. In 1999, Bausch & Lomb sold the brand to Italian eyewear conglomerate Luxottica Group for a reported $640 million."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ray-Ban",
        "situacao": "ok",
        "texto": "Ray-Ban é uma marca de óculos de sol e óculos de grau, fundada em 1937 pela companhia norte-americana Bausch & Lomb. O nome dos óculos Ray-Ban vem de banir o sol (Banir o Raio), uma vez que bania o sol quando usados por pilotos americanos. A marca tornou-se famosa por seus modelos de óculos de sol Wayfarer e Aviator. Em 1999, a Bausch & Lomb vendeu a marca para o grupo óptico italiano Luxottica, p\n[…]\nEm 1929, o Coronel do Corpo Aéreo do Exército dos Estados Unidos, John A. Macready, trabalhou com a Bausch & Lomb, uma fabricante de equipamentos médicos com sede em Nova York, para criar óculos de sol da aviação que reduzissem a distração causada nos pilotos ​​pelos intensos tons de azul e branco do céu. Especificamente, MacCready estava preocupado com a forma como os óculos dos pilotos embaçavam, reduzindo drasticamente sua visibilidade em grandes altitudes.\n[…]\nO protótipo, criado em 1936 e conhecido como 'Anti-Glare' (Anti-Brilho), tinha armação de plástico e lentes verdes que conseguiam cortar o brilho sem obscurecer a visão. Em 1938 também foram adicionadas lentes resistentes a impacto. No ano seguinte, os óculos de sol foram redesenhados com uma armação de metal e patenteados como Ray-Ban Aviator.\n[…]\nDe acordo com a BBC, os óculos usavam \"lentes Kalichrome projetadas para aprimorar os detalhes e minimizar a neblina, filtrando a luz azul, tornando-os ideais para condições enevoadas\".\n[…]\nOs óculos de sol mais populares da Ray-Ban são os modelos Wayfarer e Aviator. Durante a década de 1950, a Ray-Ban lançou o modelo Caravans, que tinha um armação mais quadrada. Em 1965, os modelos Olympian I e II foram introduzidos; eles tornaram-se popular quando Peter Fonda os usou no filme de 1969 Easy Rider.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Rolex",
      "descricao": "Fabricante de relógios de luxo fundada em 1905 por Hans Wilsdorf e Alfred Davis, hoje sediada em Genebra."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que Hans Wilsdorf escolheu um nome curto e inventado como Rolex para a sua marca de relógios?",
    "resposta": "Fácil de pronunciar em qualquer idioma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rolex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rolex",
        "situacao": "ok",
        "texto": "Rolex SA ( ) is a Swiss luxury watchmaker and manufacturer based in Geneva, Switzerland. Founded in 1905 in London as Wilsdorf and Davis by German businessman Hans Wilsdorf and British investor and watch dealer Alfred Davis, who were importing watches from Switzerland to England. The company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915.\n[…]\nRolex founder Hans Wilsdorf created the Air-Prince line to honor RAF pilots of the Battle of Britain, releasing the first model in 1958. By 2007, the 1142XX iteration of the Air-King featured a COSC-certified movement in a 34mm case, considered by some a miniaturized variant of the 39mm Rolex Explorer as both watches featured very similar styling cues; the 34mm Air-King lineup was the least expensive series of Oyster Perpetual.\n[…]\nOne month later, on 24 November 1927, Wilsdorf launched the Rolex Oyster watch in the United Kingdom with a full front page Rolex advertisement in the Daily Mail.\n[…]\nBy the start of World War II, Royal Air Force pilots were buying Rolex watches to replace their inferior standard-issue watches; however, when captured and sent to prisoner of war (POW) camps, their watches were confiscated. When Hans Wilsdorf heard of this, he offered to replace all watches that had been confiscated and not require payment until the end of the war, if the officers would write to Rolex and explain the circumstances of their loss and where they were being held.\n[…]\nOn 10 March 1943, while still a prisoner of war, Corporal Clive James Nutting, one of the organizers of the Great Escape, ordered a stainless steel Rolex Oyster 3525 Chronograph (valued at a current equivalent of £1,200) by mail directly from Hans Wilsdorf in Geneva, intending to pay for it with money he saved working as a shoemaker at the camp. The watch (Rolex watch no.\n[…]\nRolex Tower\n[…]\nRolex v EUIPO"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rolex",
        "situacao": "ok",
        "texto": "Rolex SA é uma empresa suíça fabricante de relógios de pulso de luxo, fundada em Londres no ano de 1905 sob o nome de Wilsdorf & Davis pelo relojoeiro alemão Hans Wilsdorf e Alfred Davis. Fabrica anualmente cerca de 2 milhões de relógios e tem sede em Genebra. Sendo amplamente conhecida como a maior e mais famosa marca de relógios do mundo, é detida pela Fundação Hans Wilsdorf, também detentora da\n[…]\nHoje, praticamente todos os fabricantes de relógios seguiram a Rolex e oferecem relógios à prova de água.\n[…]\nEm 1908, antes que ninguém tivesse proferido o termo multinacional, Wilsdorf registrou com marca a palavra Rolex, um nome facilmente pronunciável em diferentes idiomas e curto o suficiente para se adequar a um mostrador de relógio. Diz-se que Wilsdorf sonhou com a palavra ao andar em um ônibus em Londres, tendo sido inspirado pelo som de um relógio ao ser dada a corda.\n[…]\nQuando da chegada da Segunda Guerra Mundial, o nome Rolex tinha tanto prestígio na Grã-Bretanha que os pilotos da Real Força Aérea (RAF) rejeitavam relógios inferiores distribuídos pelo governo e usavam seus soldos para quase esgotar o estoque inglês de Oyster Perpetuals. A gentileza era devidamente recompensada: qualquer prisioneiro de guerra britânico cujo Rolex fosse confiscado precisava apenas escrever para Genebra para receber sua reposição.\n[…]\nO que fez a Rolex ser tão resistente? A coisa mais importante que ajudou a salvar a Rolex foi que até então a empresa havia sido gerida por apenas dois diretores: Hans Wilsdorf e André Heiniger. Eles realmente nunca tiveram que se preocupar com os resultados do trimestre. Eles podiam pensar no longo prazo: \"Onde nós estaremos em cinco ou dez anos?\" Era uma filosofia completamente diferente da de qualquer outra casa relojoeira.\n[…]\nE não porque a Rolex gosta de esbanjar dinheiro, mas porque é assim que ela faz as coisas.\n[…]\nSite oficial da marca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Chupa Chups",
      "descricao": "Marca espanhola de pirulitos fundada por Enric Bernat em 1958, com logotipo em forma de margarida."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Antes de virar Chupa Chups, o pirulito do espanhol Enric Bernat tinha um nome tirado do futebol. Qual?",
    "resposta": "Gol",
    "distratores": [
      "Pênalti",
      "Craque",
      "Bola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chupa_Chups"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chupa_Chups",
        "situacao": "ok",
        "texto": "Chupa Chups (Spanish pronunciation: [ˈtʃupa ˈtʃups]) is a Spanish brand of confectionery found in over 150 countries. It was founded in 1958 by Enric Bernat and is owned by the Italian-Dutch company Perfetti Van Melle. The name comes from the Spanish verb chupar, meaning \"to suck\". Similar confections are known as lollipops or suckers in English.\n[…]\nIn the early 1950s, Enric Bernat founded the company Productos Bernat, which specialized in the production of confectionery. Bernat began working for an apple jam factory called \"Granja Asturias\" in 1954. By 1958, he controlled 100% of the capital of Granja Asturias and renamed the company Chupa Chups in 1961. He built the production machines and sold a striped bonbon on a wooden stick, but later it was changed to a plastic one.\n[…]\nSince 2007, Chupa Chups was the signature sweet of the Marriott brand hotel Springhill Suites. Chupa Chups were available at the front desk of any Springhill Suites property for free to any guest, child or adult. As of August 2021, Marriott has begun stepping away from Chupa Chups as a signature item for Springhill Suites.\n[…]\nMesser Chups is a surf rock band from Saint Petersburg, Russia. In the group's name, \"Messer\" is taken from the German word for \"knife\" and \"Chups\" from Chupa Chups lollipops.\n[…]\nIn 2025, Chupa Chups launched an Australian advertising campaign with the slogan \"Suck Yeah\"; this is the company's first major campaign in the country in more than a decade.\n[…]\nChupa Chups has a large product range, with their flagship lollipop being the most popular.\n[…]\nChupa Chups has more than 100 flavours available worldwide, including sugar-free varieties. They are individually heat-sealed in the factory, and are best opened by twisting the base of the wrapper.\n[…]\nChupa Chups World (official site) (Flash)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chupa_Chups",
        "situacao": "ok",
        "texto": "Chupa Chups (pronúncia espanhola: Espanhol: [ˈtʃupa ˈtʃups]) é uma empresa espanhola de chupa-chupas ou pirulitos criada no ano de 1958 pelo catalão Enric Bernat, e atualmente parte da multinacional Perfetti Van Melle. Seus produtos são vendidos em mais de 150 países ao redor do mundo.\n[…]\nNo início da década de 50, Enric Bernat trabalhava em uma fábrica de geleia de maçãs chamada \"Granja Asturias\" quando teve a ideia de produzir chupa-chupas e renomeou o nome da companhia para Chupa Chups. A ideia das sobremesas veio da sensação de que os doces e confeitos da época não eram devidamente desenhados para o consumo por crianças, um potencial público-alvo.\n[…]\nA companhia obteve grande sucesso de vendas e, em 5 anos, os doces já eram vendidos em mais de 300 mil lojas. Na década de 70, espalharam-se pelo mundo, chegando ao Japão e ao Sudeste Asiático. Em 2003, 4 bilhões de chupa-chupas foram vendidos em mais de 150 países.\n[…]\nEm 1991, Bernat transferiu o controle formal da companhia para seu filho Xavier. Em julho de 2006, a companhia foi adquirida pelo grupo italiano Perfetti Van Melle.\n[…]\nO logotipo da Chupa Chups foi desenhado em 1969 por Salvador Dalí. As campanhas de marketing da companhia utilizaram grandes celebridades, como Madonna, em seus comerciais. A campanha publicitária de 1997/1998 contou com a banda pop Spice Girls e, em 2001/2002, com o desenho animado mundialmente conhecido Simpsons.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Barbie",
      "descricao": "Boneca lançada pela empresa americana Mattel em 1959, criada por Ruth Handler."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a fabricante Mattel, qual é o nome completo da boneca Barbie?",
    "resposta": "Barbara Millicent Roberts",
    "distratores": [
      "Barbara Ann Carson",
      "Barbara Jean Miller",
      "Barbara Louise Wilson"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Barbie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barbie",
        "situacao": "ok",
        "texto": "Barbie is a fashion doll franchise created by American businesswoman Ruth Handler, manufactured by American toy and entertainment company Mattel and introduced on March 9, 1959. The toy was based on the German Bild Lilli doll which Handler had purchased while in Europe. The figurehead of an eponymous brand that includes a range of fashion dolls and accessories, Barbie has been an important part of\n[…]\nUpon her return to the United States, Handler redesigned the doll (with help from local inventor-designer Jack Ryan) and the doll was given a new name, Barbie, after her daughter Barbara (born May 21, 1941). Barbara Handler \"hated being known as the inspiration for the Barbie doll.\" The doll made its debut at the American International Toy Fair in New York City on March 9, 1959. This date is also used as Barbie's official birthday.\n[…]\nBarbie's full name is Barbara Millicent Roberts and her parents' names are given as George and Margaret Roberts from the fictional town of Willows, Wisconsin, in a series of novels published by Random House in the 1960s. In those novels, Barbie attended Willows High School; while in the Generation Girl books, published by Golden Books in 1999, she attended the fictional Manhattan International High School in New York City (based on the real-life Stuyvesant High School).\n[…]\nIn 2023, Mattel broke ground on a theme park near Phoenix, Arizona. The park is to open in 2027 and highlights Mattel's toys, including a Barbie Beach House, a Thomas & Friends themed ride, and a Hot Wheels go-kart race track. The theme park will take place at the VAI Resort complex, located 15 miles (24 km) west of Phoenix, Arizona.\n[…]\nMattel filed a lawsuit in 2004 in the U.S. against Barbara Anderson-Walley, a Canadian business owner whose nickname is Barbie, over her website, which sells fetish clothing. The lawsuit was dismissed.\n[…]\nList of Barbie video games\n[…]\nTotally Hair Barbie"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barbie",
        "situacao": "ok",
        "texto": "Barbie é uma boneca e personagem fictícia fabricada pela empresa estadunidense de brinquedos Mattel, Inc. e lançada em 9 de março de 1959. A empresária Ruth Handler é creditada como a criadora da boneca usando uma boneca alemã chamada Bild Lilli como sua inspiração. Barbie é a figura principal de uma marca de bonecas e acessórios da Mattel, incluindo outros membros da família e bonecas colecionáve\n[…]\nRuth Handler observou sua filha Barbara brincar com bonecas de papel e percebeu que ela costumava gostar de dar a elas papéis de adultos. Na época, a maioria das bonecas infantis eram representações de bebês. Percebendo que poderia haver um nicho de mercado não explorado, Handler sugeriu a ideia de uma boneca com corpo adulto para seu marido Elliot, cofundador da empresa de brinquedos Mattel. No início, ele não ficou entusiasmado com a ideia, assim como os diretores da Mattel.\n[…]\nDurante uma viagem à Alemanha em 1956 com seus filhos Barbara e Kenneth, Ruth Handler se deparou com uma boneca de brinquedo alemã chamada Bild Lilli. A boneca de figura adulta era exatamente o que Handler tinha em mente, então ela comprou três delas. Ela deu uma para a filha e levou as outras de volta para a Mattel. A boneca Lilli foi baseada em uma personagem popular que aparece em uma história em quadrinhos desenhada por Reinhard Beuthin para o jornal Bild.\n[…]\nApós seu retorno aos Estados Unidos, Handler redesenhou a boneca (com a ajuda do inventor e designer local Jack Ryan) e a boneca recebeu um novo nome, Barbie, em homenagem à filha de Handler, Barbara. A boneca estreou na American International Toy Fair em Nova York em 9 de março de 1959.\n[…]\nO nome completo da Barbie é Barbara Millicent Roberts. Em uma série de romances publicados pela Random House na década de 1960, os nomes de seus pais são George e Margaret Roberts, da cidade fictícia de Willows, Wisconsin.\n[…]\nBarbie no Instagram\n[…]\nBarbie Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "BMW",
      "descricao": "Montadora alemã de automóveis e motocicletas sediada em Munique, cujo logotipo é um círculo azul e branco."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A sigla BMW abrevia um nome em alemão. Traduzido para o português, como fica esse nome por extenso?",
    "resposta": "Fábrica de Motores da Baviera",
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
        "texto": "Bayerische Motoren Werke (em português:  Fábrica de Motores da Baviera; conhecida simplesmente como BMW) é uma empresa automobilística alemã, fabricante de motocicletas e automóveis de luxo, sediada na Baviera, Alemanha. A BMW desenvolve, fabrica e comercializa seus automóveis sob as marcas BMW, Mini e Rolls-Royce, e as motocicletas sob a marca BMW Motorrad.\n[…]\nA empresa foi fundada em 1916 como fabricante de motores de aeronaves, que produziu de 1917 a 1918 e novamente de 1933 a 1945, criando motores para aeronaves que foram usadas na Segunda Guerra Mundial.\n[…]\nAs raízes da BMW estão ligadas a Karl Rapp e Gustav Otto. Em 1917, a empresa Rapp Motorenwerke Byertoren Werke, Aktiengesellschaft. Em 1916, a empresa Flugmaschinenfabrik Gustav Otto foi incorporada à Bayerische Flugzeug-Werke (BFW) a pedido do governo. A BMW posteriormente transferiu suas operações de construção de motores – incluindo a empresa e os nomes da marca – para a BMW, em 1922.\n[…]\nA data de fundação da BMW, 7 de março de 1916, entrou para a história como a data de nascimento da Bayerische Motoren Werke.\n[…]\nInicialmente a Bayerische Motoren Werke foi fundada com o intuito de produzir motores para aviões, mas após a Primeira Guerra Mundial, devido ao Tratado de Versailles, foi proibida de construí-los. Por esse motivo chegou a produzir motocicletas, e mais tarde dedicou-se à fabricação de automóveis.\n[…]\nA BMW historicamente, sempre esteve envolvida nos desportos motorizados, inicialmente nas motocicletas e posteriormente nos automóveis. Durante a Segunda Guerra Mundial, a BMW usou cerca de 30 mil trabalhadores forçados em sua fábrica, utilizados na produção de veículos terrestres e motores para os aviões da Luftwaffe.\n[…]\nA BMW S1000RR é uma motocicleta sport inicialmente fabricada pela BMW Motorrad para competir na temporada de 2009 e 2010 do Campeonato Mundial de Superbike.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que problema, vivido no coral da igreja, deu a Art Fry, químico da 3M, a ideia do bloquinho Post-it?",
    "resposta": "Os marcadores caíam do hinário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_Note",
      "https://en.wikipedia.org/wiki/Art_Fry"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_Note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 2019, the Post-it App was relaunched.\n[…]\nIn 2010, the creators of the Post-it note joined the National Inventors Hall of Fame as a result of the widespread success of the Post-it note.\n[…]\nPost-it notes may have a positive effect on how people interact with information presented to them. This is backed up by research that aimed to determine how attaching a blank Post-it note to a survey affected participation in the survey. The research found that the surveys with affixed Post-it notes were more likely to be completed and returned, and that the participants were more likely to write higher quality responses to the questions.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Art_Fry",
        "situacao": "ok",
        "texto": "Arthur \"Art\" Fry (born August 19, 1931) is an American inventor and scientist. He is credited as the co-creator of the Post-it Note (though this is disputed by some), an item of office stationery manufactured by 3M. As of 2006, Post-it products are sold in more than 100 countries.\n[…]\nIt took a few years for the concept to come to fruition, due to both technical problems with production and management's doubts about the product's saleability. Post-it Notes were released to the national market in 1980. In 1981, 3M named Post-it Notes its Outstanding New Product. In 1980 and 1981, the Post-it Note team received 3M's Golden Step Award, given to teams who create major new products that are significantly profitable. 3M named Fry a corporate researcher in 1986.\n[…]\nPost-it Note inventor Arthur Fry participated in the panel which was curated by Museum of Modern Art (MoMA) head of design Paola Antonelli.\n[…]\nIn 2025, the Post-it Note was included in Pirouette: Turning Points in Design, an exhibition at the MoMA featuring \"widely recognized design icons [...] highlighting pivotal moments in design history.\"\n[…]\nInventor Alan Amron claimed to have disclosed the technology used in the Post-it Note to 3M in 1974. His 1997 suit against 3M was settled and 3M paid Amron. As part of the settlement, Amron undertook not to make future claims against the company except if ever a breach of the settlement agreement should occur. In 2016, he launched a further suit against 3M, asserting that 3M were wrongly claiming to be the inventors, and seeking $400 million in damages. In September 2016, the case was dismissed.\n[…]\nArt Fry and the Invention of Post-it Notes - From the 3M United States website."
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
    "indice": 16,
    "ancora": {
      "nome": "Gillette",
      "descricao": "Marca americana de aparelhos de barbear fundada por King Camp Gillette no começo do século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "King Gillette criou a lâmina de barbear descartável inspirado pelo conselho do inventor de qual objeto, também feito para ser jogado fora?",
    "resposta": "Tampinha de garrafa",
    "fonte": [
      "https://en.wikipedia.org/wiki/King_C._Gillette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_C._Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (January 5, 1855 – July 9, 1932) was an American businessman who invented a bestselling safety razor and was the founder of the Gillette razor company. Gillette's innovation was the thin, inexpensive, disposable blade of stamped steel. Gillette is often erroneously credited with inventing the so-called razor-and-blades business model, in which razors are sold cheaply to increase\n[…]\nGillette joined the Baltimore Crown Cork and Seal Company in 1891 and developed a close friendship with the founder, William Painter, inventor of the disposable metal bottle cap (\"crown cork\"). Painter advised him, \"King, you are always thinking and inventing something.\n[…]\nGillette married Alanta \"Lantie\" Ella Gaines (1868–1951) in 1890. They had one child, King Gaines Gillette (1891–1955).\n[…]\nIt is now known as Global Blades & Razors, with the Gillette brand, a business unit of Procter & Gamble.\n[…]\nAfter the university moved to a purpose-built campus, the King Gillette ranch was collaboratively purchased for $35 million by the Mountains Recreation and Conservation Authority, National Park Service, Santa Monica Mountains Conservancy and California State Parks, who then made it available for public use. Those agencies are also funding an $8.4 million visitor center on the property.\n[…]\nOn June 30, 2007, the 588-acre (2.38 km2) King Gillette Ranch opened to the public as a park. The ranch is situated adjacent to Malibu Creek State Park in the Santa Monica Mountains, at 26800 West Mulholland Highway in Calabasas, California.\n[…]\nAdams, Russell B. Jr. (1978). King C. Gillette: The Man and His Wonderful Shaving Device. Little, Brown & Co. ISBN 0-316-00937-7.\n[…]\nDowling, Tim (2001). Inventor of the Disposable Culture: King Camp Gillette 1855–1932. Short Books. ISBN 0-571-20810-X.\n[…]\nKing Gillette Ranch Park\n[…]\nKing C. Gillette at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/King_Camp_Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (Fond du Lac, 5 de janeiro 1855 — Los Angeles, 9 de julho de 1932) foi um inventor estadunidense, conhecido pela lâmina de barbear que leva o seu nome. Ele inventou uma versão mais vendida do aparelho de barbear. Vários modelos já existiam antes do projeto da Gillette. A inovação da Gillette foi a lâmina fina, barata e descartável de aço estampado.\n[…]\nEnquanto trabalhava como vendedor para a Crown Cork and Seal Company na década de 1890, Gillette viu tampas de garrafas, com o selo de cortiça que vendeu, jogadas fora depois que a garrafa foi aberta. Isso o fez reconhecer o valor de basear um negócio em um produto que foi usado algumas vezes e depois descartado. Os homens se barbeavam com navalhas que precisavam ser afiadas todos os dias com uma tira de couro.\n[…]\nComo as lâminas de barbear existentes, relativamente caras, tornavam-se cegas rapidamente e precisavam de ser afiadas continuamente, uma navalha cuja lâmina pudesse ser jogada fora ao ficar cega atenderia a uma necessidade real e provavelmente seria lucrativa.\n[…]\nA parte mais difícil do desenvolvimento foi projetar as lâminas, pois o aço fino e barato era difícil de trabalhar e afiar. Isso explica o atraso entre a ideia inicial e o lançamento do produto. Steven Porter, um maquinista que trabalhava com a Gillette, usou os desenhos da Gillette para criar a primeira navalha de barbear descartável que funcionou.\n[…]\nNo segundo ano, ele vendeu 90 884 barbeadores e 123 648 lâminas, graças em parte aos preços baixos da Gillette, técnicas de fabricação automatizadas e boa publicidade. As vendas e distribuição eram feitas por uma empresa separada, Townsend and Hunt, que foi absorvida pela empresa-mãe por US$ 300 000 em 1906. Em 1908, a corporação havia estabelecido fábricas nos Estados Unidos, Canadá, Grã-Bretanha, França e Alemanha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ikea",
      "descricao": "Rede sueca de lojas de móveis fundada em 1943 por Ingvar Kamprad."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos cinquenta, um funcionário da Ikea tirou as pernas de uma mesa para ela caber num carro. Que costume da loja nasceu daí?",
    "resposta": "Vender móveis desmontados em caixas planas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gillis_Lundgren"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gillis_Lundgren",
        "situacao": "ok",
        "texto": "Leif Gillis Arthur Lundgren (26 August 1929 – 25 February 2016) was a Swedish furniture designer and the fourth employee of IKEA. He designed the Billy bookcase of which over 140 million have been produced."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Listerine",
      "descricao": "Enxaguante bucal antisséptico criado nos Estados Unidos em 1879 por Joseph Lawrence."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nos anos vinte, as propagandas do enxaguante Listerine tornaram popular qual termo médico, até então pouco conhecido?",
    "resposta": "Halitose",
    "distratores": [
      "Gengivite",
      "Tártaro",
      "Placa bacteriana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Listerine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Listerine",
        "situacao": "ok",
        "texto": "Listerine ( LIST-ər-EEN) is an American brand of antiseptic mouthwash that is promoted with the slogan \"Kills germs that cause bad breath\". Named after Joseph Lister, who pioneered antiseptic surgery at the Glasgow Royal Infirmary in United Kingdom, Listerine was developed in 1879 by Joseph Lawrence, a chemist in St. Louis, Missouri.\n[…]\nListerine, for instance, was invented in the nineteenth century as powerful surgical antiseptic. It was later sold, in distilled form, as both a floor cleaner and a cure for gonorrhea. But it wasn't a runaway success until the 1920s, when it was pitched as a solution for \"chronic halitosis\"—a then obscure medical term for bad breath. Listerine's new ads featured forlorn young women and men, eager for marriage but turned off by their mate's rotten breath.\n[…]\n\"Can I be happy with him in spite of that?\" one maiden asked herself. Until that time, bad breath was not conventionally considered such a catastrophe. But Listerine changed that. As the advertising scholar James B. Twitchell writes, \"Listerine did not make mouthwash as much as it made halitosis.\" In just seven years, the company's revenues rose from $115,000 to more than $8 million.\n[…]\nListerine also sell a formulation called Listerine Advanced Defence Gum Treatment containing a common food preservative, ethyl lauroyl arginate (LAE) at 0.147%.\n[…]\nOn April 11, 2007, McNeil-PPC disclosed that there were potentially contaminants in all Listerine Agent Cool Blue products sold since its launch in 2006, and that all bottles were being recalled. The recall affected some 4,000,000 bottles sold since that time. According to the company, Listerine Agent Cool Blue is the only product affected by the contamination and no other products in the Listerine family were under recall.\n[…]\nOfficial Listerine Middle East Website\n[…]\nListerine Fluoride Animation"
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
    "indice": 19,
    "ancora": {
      "nome": "Bacardi",
      "descricao": "Marca de rum fundada em 1862 por Facundo Bacardí Massó, cujo símbolo é um morcego."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que um morcego virou o símbolo do rum Bacardi, criado no século dezenove?",
    "resposta": "Havia morcegos vivendo na destilaria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bacardi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bacardi",
        "situacao": "ok",
        "texto": "Bacardi Limited ( bə-KAR-dee, Spanish: [bakaɾˈði], Catalan: [bəkəɾˈði]) is the largest privately held, family-owned spirits company in the world. Originally known for its Bacardí brand of white rum, it now has a portfolio of more than 200 brands and labels. Founded in Cuba in 1862 by Facundo Bacardí i Massó, a Spanish businessman born in Sitges, Bacardi Limited has been family-owned for seven gene\n[…]\nBacardi Dark Rum\n[…]\nBacardi Spiced Rum\n[…]\nBacardi Gold Rum\n[…]\nBacardi 151\n[…]\nBacardi Gold\n[…]\nBacardi Mojito\n[…]\nBacardi Breezer\n[…]\nBacardi Apple\n[…]\nBacardi Lemon\n[…]\nBacardi Carta Blanca\n[…]\nIn his article \"The Old Man and the Daiquiri\", Wayne Curtis writes about how Hemingway's \"home bar also held a bottle of Bacardí rum\". Hemingway wrote in Islands in the Stream, \"...this frozen daiquirí, so well beaten as it is, looks like the sea where the wave falls away from the bow of a ship when she is doing thirty knots.\"\n[…]\nOn August 16, 2012 temporary worker Lawrence Daquan \"Day\" Davis was crushed to death when a faulty palletizer he was cleaning was activated. It was his first day on the job at the Jacksonville, Florida Bacardi Bottling facility. No lockout/tagout procedures had been implemented. An Occupational Safety and Health Administration (OSHA) investigation found 12 safety violations, and Bacardi was fined $192,000, but reached an agreement where it paid $110,000.\n[…]\nWhen Russia invaded Ukraine, Bacardi claimed that it would halt all exports to Russia and freeze investment and advertising programs, but from June 2022 through June 2023 the company imported $169 million worth of products  and tripled its profits, and through the summer of 2023 it increased its business in Russia and sought new employees for its Russian branch. When this gained international media attention, the pledge disappeared from their company website.\n[…]\nOn August 10, 2023, Ukrainian authorities added Bacardi to their list of International Sponsors of War."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bacardi",
        "situacao": "ok",
        "texto": "Bacardi Limited é uma fabricante de bebida alcoólica. Fundada em 1862, é a maior fabricante de destilados do mundo. Originalmente conhecida por sua marca Bacardí de rum branco, ela agora tem um portfólio de mais de 200 marcas e rótulos.\n[…]\nFundada em 4 de fevereiro de 1862 por Facundo Bacardí Massó (em catalão:  Facund Bacardí i Massó), um imigrante catalão em Santiago de Cuba.\n[…]\nDon Facundo Bacardí Massó e sua esposa, Amalia Moreau, iniciaram um novo negócio em 1862 com a compra de uma destilaria em Santiago de Cuba. Após extensa experimentação, Don Facundo desenvolveu um rum leve e elegante, com sabor que contrastava com o popular conhaque. Quando se mudaram,  Amalia notou uma colônia de morcegos frugívoros fazendo ninhos nos beirais da destilaria com telhado de zinco e sugeriu ao marido que o morcego se tornasse o símbolo do rum Bacardi.\n[…]\nA seleção do morcego também tem raízes no folclore, já que os morcegos simbolizam boa sorte tanto na Catalunha terra natal dos Bacardís, quanto entre as populações indígenas cubanas locais\n[…]\nBacardi Breezer\n[…]\nBacardi Superior\n[…]\nBacardi Gold (Gold) - o mais tradicional, muito usado no drink cuba libre.\n[…]\nBacardi Black\n[…]\nBacardi 151\n[…]\nBacardi Añejo\n[…]\nBacardi 8\n[…]\nBacardi Big Apple\n[…]\nBacardi Big Lemon\n[…]\nBacardi Big Pineapple\n[…]\nBacardi Cóco\n[…]\nBacardi Razz\n[…]\nBacardi O\n[…]\nBacardi Limón\n[…]\nBacardi Grand Melon\n[…]\nBacardi Vaníla\n[…]\nBacardi Mojito\n[…]\nOs produtos da marca foram concedidos a diversas ocasiões, incluindo organizações de prestígio. Bacardi 8, Bacardi Gold, Bacardi Reserva Limitada  receberam um prêmio de 'International High Quality Trophy' aos seleções mundial de qualidade, organizado pela Monde Selection. Bacardi 8 também foi premiado com uma medalha de ouro em 2011.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de viagem e de restaurantes publicado pela fabricante francesa de pneus Michelin desde 1900, famoso por suas estrelas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os irmãos Michelin, fabricantes de pneus, lançaram em 1900 um guia gratuito para os motoristas franceses?",
    "resposta": "Para estimular viagens de carro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\nIn 1900, there were fewer than 3,000 cars on the roads of France. To increase the demand for cars, and accordingly car tyres, car tyre manufacturers and brothers Édouard and André Michelin published a guide for French motorists, the Guide Michelin (Michelin Guide). Michelin distributed nearly 35,000 copies of this first, free edition.\n[…]\nRémy described the French Michelin inspector's life as lonely, underpaid drudgery, driving around France for weeks on end, dining alone, under intense pressure to file detailed reports to strict deadlines. He maintained that the guide had become lax in its standards.\n[…]\nRémy accused the guide of favouritism. He alleged that Michelin treated famous and influential chefs, such as Paul Bocuse and Alain Ducasse, as \"untouchable\" and not subject to the same rigorous standards as lesser-known chefs. Michelin denied Rémy's charges, but refused to say how many inspectors it actually employed in France.\n[…]\nThe Michelin Guide New York 2007 included 526 restaurants, compared to 2,014 in Zagat New York 2007; after The Four Seasons Restaurant received no stars in that edition, co-owner Julian Niccolini said Michelin \"should stay in France, and they should keep their guide there\".\n[…]\nMichelin Guide to the British Isles, London: Michelin Tyre Company, 1913, OL 14022740M (+ List of excursions)\n[…]\nMichelin Guide to the Battlefields of the World War, Milltown, N.J.: Michelin, 1919, OL 24432211M\n[…]\n1900 Michelin Guide Archived 23 May 2025 at the Wayback Machine\n[…]\nVía Michelin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guia_Michelin",
        "situacao": "ok",
        "texto": "Guia Michelin é um guia turístico publicado pela primeira vez em 1900 por André Michelin, um industrial francês fundador da Compagnie Générale des Établissements Michelin, fabricante de pneus mais conhecida como Michelin. O objetivo de André era o de promover o turismo para o crescente mercado automobilístico.\n[…]\nGanhar uma estrela do guia significa a ascensão do restaurante e dos seus chefs ao passo que perder uma delas pode levar até a uma tragédia como a do chef Bernard Loiseau que se suicidou em Fevereiro de 2003, aos 52 anos, desesperado com o rumor de que o seu estabelecimento perderia a classificação de \"três estrelas\" no Guia Michelin.\n[…]\nO primeiro Guia Michelin publicado em Portugal data de 1910.\n[…]\nDesde 1929, data de introdução das estrelas no Guia Michelin, que Portugal tem restaurantes premiados com Estrelas Michelin. A lista dos restaurantes premiados com estrelas no Guia Michelin 2024 inclui 39 restaurantes, 8 com duas estrelas (1 novo) e 31 com uma estrela (4 novos).\n[…]\nDesde 1997 foi introduzida a distinção de Bib Gourmand. Esta categoria, inferior às estrelas, inclui restaurantes com a melhor relação qualidade-preço. A lista dos restaurantes distinguidos como Bib Gourmand no Guia Michelin 2024 inclui 30 restaurantes em Portugal (7 novos).\n[…]\nO Guia Michelin classifica os hotéis recomendados em 5 categorias de conforto, de um a cinco pavilhões, além de uma categoria especial para turismo rural ou de habitação, atribuindo a cor vermelha aos estabelecimentos que considera especialmente agradáveis. No Guia Michelin 2019 são distinguidos com pavilhões vermelhos 32 estabelecimentos em Portugal.\n[…]\nO primeiro Guia Michelin começou a ser publicado no Brasil em 2015. Ele foi dividido entre restaurantes de São Paulo e Rio de Janeiro.\n[…]\nLista dos restaurantes estrelados do Guia Michelin",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Avon",
      "descricao": "Empresa de cosméticos de venda direta fundada em Nova York em 1886 por David McConnell."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Antes de fundar a Avon, David McConnell vendia de porta em porta e dava perfumes de brinde, que faziam mais sucesso que o produto. Que produto era?",
    "resposta": "Livros",
    "distratores": [
      "Sabonetes",
      "Panelas",
      "Remédios"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Avon_Products"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Avon Products, Inc., doing business as Avon ( AY-von), is an Anglo-American multinational company selling cosmetics, skin care, perfume, and personal care products. It is a multi-level marketing company based in London. In 2020, Avon had annual sales of $9.1 billion worldwide.\n[…]\nAvon Products founder, David H. McConnell, initially sold books as a door-to-door salesman to New York homes. In September 1886, he decided to sell perfumes rather than books. He started the new business in a small office at 126 Chambers Street, Manhattan, New York. McConnell changed the company name in 1892.\n[…]\nIn 1939, the California Perfume Company changed its name to Avon Products, Inc.\n[…]\nAvon Products purchased Silpada, a direct seller of silver jewelry, in 2010 for $650 million. In May 2012, perfume company Coty offered $24.75 a share for Avon, which was nearly 20 percent above Avon's stock price at the time.\n[…]\nIn July 2018, Avon Products sold its last remaining factory in the United States to the Fareva Group.\n[…]\nLaws in various countries require companies to pay for animal testing through a commercial business in order to sell certain products in that country. Because Avon Products is not globally animal-testing free, People for the Ethical Treatment of Animals (PETA) has not included Avon Products on their cruelty-free list.\n[…]\nIn 2019, Avon Products ended all regulatory-required animal testing, making it the first global beauty company selling in China to stop all animal testing of ingredients and products across all its brands by developing new ways to deliver products that do not require animal testing, such as reformulating products. PETA has since announced that it has added Avon Products Inc. to their list of companies \"Working for Regulatory Change\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avon_Products",
        "situacao": "ok",
        "texto": "Fundada pelo empresário David McConnell, a Avon é uma empresa de cosméticos que historicamente fundamentou seu modelo de negócios no sistema de venda direta.\n[…]\nA empresa nasceu em 1886, com o nome de Califórnia Perfume Company e apenas em 1939 passou a se chamar Avon. No Brasil, a marca aterrissou e começou seus processos de consolidação e vendas no ano de 1958. A sede principal da Avon está localizada em Nova York, mas a marca também conta com 18 fábricas, distribuídas em 15 países diferentes.\n[…]\nA companhia também passou por uma reestruturação de canais de distribuição, adotando uma estratégia de participação em canais online e, também, para compras fixas. Além do modelo tradicional de venda direta, a empresa expandiu a distribuição de produtos para o varejo físico por meio de parcerias com as redes Soneda e Bel Cosméticos, além de iniciar a operação de uma loja virtual na plataforma Mercado Livre.\n[…]\nNa área de responsabilidade social, o Instituto Avon atua há mais de 20 anos no fomento à conscientização sobre o câncer de mama e no combate à violência contra mulheres e meninas no Brasil.\n[…]\nDurante o ciclo de 2020 a 2021, em resposta ao aumento de casos de violência doméstica durante a pandemia de Covid-19, o Instituto Avon estabeleceu uma parceria com o Grupo Accor e o Ministério da Saúde, com foco no enfrentamento da violência doméstica durante esse período.\n[…]\nNo setor profissional, o Prêmio Avon de Maquiagem, criado em 1995, atua no reconhecimento de maquiadores em produções audiovisuais e de moda.\n[…]\nSite oficial de Avon Angola\n[…]\nSite oficial de Avon Brasil\n[…]\nSite oficial de Avon Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Louis Vuitton",
      "descricao": "Marca francesa de artigos de luxo fundada em Paris em 1854 pelo artesão Louis Vuitton."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No fim do século dezenove, a Louis Vuitton criou sua estampa de monograma, com as iniciais da marca, para combater o quê?",
    "resposta": "As falsificações",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Vuitton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Vuitton",
        "situacao": "ok",
        "texto": "Louis Vuitton Malletier SAS is a French luxury fashion house and company founded in 1854 by Louis Vuitton. The label's LV monogram appears on most of its products, ranging from luxury bags and leather goods to ready-to-wear, shoes, perfumes, watches, jewellery, accessories, sunglasses, and books. Louis Vuitton is one of the world's leading international fashion houses.\n[…]\nThe line officially launched on 29 August 2025 on Louis Vuitton's website and select stores worldwide, with 55 lipstick shades, 10 lip balms and eight eyeshadow palettes in the debut line. The number of lipstick shades was chosen as a reference to the Roman numeral LV, which equals 55, and is known as the brand's monogram.\n[…]\nThe Louis Vuitton brand and the LV monogram are among the world's most valuable brands.\n[…]\nLouis Vuitton is one of the most counterfeited brands in the fashion world due to its image as a status symbol. Ironically, the signature Monogram canvas was created to prevent counterfeiting. In 2004, Louis Vuitton fakes accounted for 18% of counterfeit accessories seized in the European Union.\n[…]\nIn June 2021, Louis Vuitton sparked controversy by marketing a $700 scarf called 'Monogram Keffieh'. The traditional Palestinian black and white keffiyeh has been a symbol of Palestinian nationalism since 1968. Louis Vuitton, however, changed the colours from the original black and white to blue and white which Palestinians and pro-Palestine social media activists called the colours of the flag of Israel, sporting with House signature patterns which was described as 'disgraceful'.\n[…]\nIn 2017 Louis Vuitton collaborated with American streetwear brand Supreme, releasing products in various pop-up stores in major cities around the world. Items feature the Louis Vuitton Monogram canvas mixed with the Supreme box-logo design."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Vuitton",
        "situacao": "ok",
        "texto": "A Louis Vuitton é uma empresa especializada na produção de bolsas e malas de viagens, feitas em couro e lona, bem como na sua comercialização. Produz e vende também vestuário, sapatos, relógios, joias, acessórios, óculos de sol e livros. Concorre com Versace, Gucci, Chanel, Prada, Armani, Dolce & Gabbana, Christian Dior, Calvin Klein, Yves Saint Laurent, Óscar de la Renta, Burberry e outras marcas\n[…]\nO fundador da marca, Louis Vuitton (Anchay, 4 de agosto de 1821 — Paris, 27 de fevereiro de 1892) foi um fabricante de malas e bolsas na segunda metade do século XIX, em Paris. Criou sua oficina em 1854, em Paris, onde produzia artesanalmente malas e bolsas. Seu trabalho foi reconhecido na Europa quando reinventou o formato das malas de viagem e criou um padrão de desenho diferente comparado ao que havia na época.\n[…]\nPor conta das novidades introduzidas por Louis Vuitton, os seus produtos começaram a ser imitados na Europa. Para impedir as falsificações, Vuitton tentou diferentes desenhos nos produtos para que pudessem identificar a sua autoria. Finalmente em 1896, criou o monograma das letras “L” e “V”, juntamente com símbolos que reproduziam flores – os desenhos recobriam a lona que servia de insumo para os produtos.\n[…]\nA Louis Vuitton lançou, em setembro de 2016, a sua primeira coleção de perfumes desde 1946. Tem sete fragrâncias e, como rosto, a atriz francesa Léa Seydoux.\n[…]\nA política de comunicação da Louis Vuitton é uma das políticas mais importantes da marca. Ela utiliza duas ferramentas principais: relações públicas e publicidade. A primeira baseia-se no mecenato cultural e desportivo. Ou seja, é o patrocínio ou a criação e desenvolvimento de atividades de cultura ou esporte. No setor da cultura, criou, em 1985, a “Fondation Louis Vuitton” que financiou uma ópera em Avinhão. No esporte, desenvolveu uma competição de regatas que leva o seu nome.\n[…]\nLVMH Moët Hennessy • Louis Vuitton",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "WD-40",
      "descricao": "Lubrificante e desengripante em spray criado em San Diego, nos Estados Unidos, em 1953."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O lubrificante WD-40 foi usado primeiro para proteger da ferrugem a fuselagem de qual equipamento militar americano?",
    "resposta": "Mísseis Atlas",
    "distratores": [
      "Submarinos nucleares",
      "Caças a jato",
      "Tanques de guerra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/WD-40"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/WD-40",
        "situacao": "ok",
        "texto": "WD-40 is a multi-purpose water-displacing product with penetrating and lubricating properties, manufactured by the WD-40 Company based in San Diego, California. Its formula was invented by the company (then known as the Rocket Chemical Company) in 1953, and it became available as a commercial product in 1958. It acts as a lubricant, rust preventive, penetrant and moisture displacer. In 2014, it wa\n[…]\nLarsen.\" \"WD-40\" is abbreviated from the term \"Water Displacement, 40th formula\"; the product was the result of the fortieth attempt at developing its formulation. The spray, composed of various hydrocarbons, was originally designed to be used by Convair to protect the outer skin of the Atlas missile from rust and corrosion. This outer skin also functioned as the outer wall of the missile's delicate balloon tanks.\n[…]\nWD-40 was later found to have many household uses and was made available to consumers in San Diego in 1958.\n[…]\nIn 1973, WD-40 Company, Inc., went public with its first stock offering. Its NASDAQ stock symbol is (Nasdaq: WDFC).\n[…]\nWD-40's formula is a trade secret. The original copy of the formula was moved to a secure bank vault in San Diego in 2018. To avoid disclosing its composition, the product was not patented in 1953, and the window of opportunity for patenting it has long since closed.\n[…]\nWD-40's main ingredients as supplied in aerosol cans, according to the US material safety data sheet information, and with the CAS numbers interpreted:\n[…]\nIn 2009, Wired published an article with the results of gas chromatography and mass spectrometry tests on WD-40, showing that the principal components were C9 to C14 alkanes and mineral oil.\n[…]\nWD-40 Safety Data Sheets\n[…]\nWD-40 uses, by Snopes.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/WD-40",
        "situacao": "ok",
        "texto": "WD-40 (abreviação de Water Displacement, 40th formula) é uma marca americana e a marca registrada de um óleo penetrante fabricado pela WD-40 Company, com sede em San Diego, Califórnia. Sua fórmula foi inventada para a Rocket Chemical Company em 1953, antes de a empresa se tornar a WD-40 Company. O WD-40 tornou-se disponível como produto comercial em 1961. Atua como lubrificante, preventivo de ferr\n[…]\n\"WD-40\" é a abreviação do termo \"Water Displacement, 40th formula\", sugerindo que foi o resultado da 40ª tentativa de criar o produto. O spray, composto de vários hidrocarbonetos, foi originalmente projetado para ser usado pela Convair para proteger a camada externa do míssil Atlas contra ferrugem e corrosão. Essa camada externa também funcionava como a parede externa dos delicados tanques de balão do míssil.\n[…]\nEm 1969, o WD-40 começou a ser comercializado para agricultores e mecânicos na Inglaterra. Em 1973, a WD-40 Company, Inc. abriu seu capital com sua primeira oferta pública de ações. Seu símbolo na NASDAQ é (NASDAQ: WDFC).\n[…]\nA fórmula do WD-40 é um segredo comercial. A cópia original da fórmula foi transferida para um cofre bancário seguro em San Diego em 2018. Para evitar a divulgação de sua composição, o produto não foi patenteado em 1953, e a oportunidade para patenteá-lo já se encerrou há muito tempo.\n[…]\nOs principais ingredientes do WD-40, conforme fornecido em latas de aerossol, conforme as informações da ficha de segurança de materiais dos Estados Unidos, e com os números CAS interpretados:\n[…]\n<25% de hidrocarbonetos alifáticos (mesmo número CAS do primeiro item, mas inflamável)\n[…]\nEm 2009, a revista Wired publicou um artigo com os resultados de testes de cromatografia gasosa e espectrometria de massa no WD-40, mostrando que os principais componentes eram alcanos C9 a C14 e óleo mineral.\n[…]\nWD-40 uses, por Snopes.com (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Bic Cristal",
      "descricao": "Caneta esferográfica descartável de corpo transparente e sextavado, lançada na França pela empresa de Marcel Bich."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a tampa da caneta esferográfica Bic Cristal tem um furinho na ponta?",
    "resposta": "Para não sufocar quem a engolir",
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
    "indice": 25,
    "ancora": {
      "nome": "Vaselina",
      "descricao": "Marca de geleia de petróleo criada pelo químico americano Robert Chesebrough no século dezenove."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Robert Chesebrough teve a ideia da vaselina ao ver operários de poços de petróleo usando uma cera das máquinas para quê?",
    "resposta": "Tratar cortes e queimaduras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Petroleum_jelly",
      "https://en.wikipedia.org/wiki/Vaseline"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Petroleum_jelly",
        "situacao": "ok",
        "texto": "Petroleum jelly, petrolatum (), white petrolatum, soft paraffin, or multi-hydrocarbon, CAS number 8009-03-8, is a semi-solid mixture of hydrocarbons (with carbon numbers mainly higher than 25), commonly promoted as a topical ointment for its healing properties. Vaseline has been the dominant brand of petroleum jelly sold since 1870.\n[…]\nRobert Chesebrough, a young chemist whose previous work of distilling fuel from the oil of sperm whales had been rendered obsolete by petroleum, went to Titusville, Pennsylvania, to see what new materials had commercial potential. Chesebrough took the unrefined green-to-gold-colored \"rod wax\", as the drillers called it, back to his laboratory to refine it and explore potential uses.\n[…]\nHe discovered that by distilling the lighter, thinner oil products from the rod wax, he could create a light-colored gel. Chesebrough patented the process of making petroleum jelly by U.S. patent 127,568 in 1872. The process involved vacuum distillation of the crude material followed by filtration of the still residue through bone char.\n[…]\nChesebrough traveled around New York demonstrating the product to encourage sales by burning his skin with acid or an open flame, then spreading the ointment on his injuries and showing his past injuries healed, he said, by his miracle product. He opened his first factory in 1870 in Brooklyn using the name Vaseline.\n[…]\nVaseline brand First Aid Petroleum Jelly, or carbolated petroleum jelly containing phenol to give the jelly additional antibacterial effect, has been discontinued.\n[…]\nThis article incorporates text from a publication now in the public domain: Chisholm, Hugh, ed. (1911). \"Vaseline\". Encyclopædia Britannica (11th ed.). Cambridge University Press.\n[…]\nThe dictionary definition of petroleum jelly at Wiktionary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vaseline",
        "situacao": "ok",
        "texto": "Vaseline ( ) is an American brand of petroleum jelly-based products owned by Unilever. Products include plain petroleum jelly and a selection of skin creams, soaps, lotions, cleansers, and deodorants.\n[…]\nIn 1859, Robert Chesebrough, a chemist who formerly clarified lamp oil from sperm oil, a waxy oil from the heads of sperm whales, was losing business as whale oil was replaced by petroleum-derived coal oil. He traveled to the oil fields in Titusville, Pennsylvania, to research what new materials might be created from this new fuel. There he learned of a residue called rod wax that had to be periodically removed from oil rig pumps.\n[…]\nThe oil workers had been using the substance to heal cuts and burns. Chesebrough took samples of the rod wax back to Brooklyn, extracted the usable petroleum jelly, and began manufacturing a medicinal product he called Vaseline.\n[…]\nThe first known reference to the name Vaseline was by the Chesebrough Manufacturing Company in the U.S. patent (U.S. Patent 127,568) in 1872. \"I, Robert Chesebrough, have invented a new and useful product from petroleum which I have named Vaseline...\"\n[…]\nVaseline was made by the Chesebrough Manufacturing Company until the company, which merged with Pond's in 1955, was purchased by Unilever in 1987.\n[…]\nVaseline contains mineral oils. Unrefined mineral oils often contain adulterants including polycyclic aromatic hydrocarbons (PAHs), which can increase risk for certain forms of cancer when consumed orally. When used topically (as is recommended with Vaseline), dermal absorption of PAHs is insignificant. No link between topical petroleum jelly-based moisturizers and cancer has been found in large studies over many years."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vaselina",
        "situacao": "ok",
        "texto": "A vaselina ou gelatina de petróleo é uma parafina líquida: é oleaginosa, límpida, incolor, não fluorescente, inodora quando fria, (mas apresenta leve odor de petróleo quando aquecida) e insípida. Insolúvel na água e no álcool, miscível com a exceção do óleo de rícino, solúvel no éter, clorofórmio, éter de petróleo e nos óleos essenciais.\n[…]\nA vaselina é hidrófoba, ou seja, praticamente não se dissolve em água, e é menos densa que esta (0,9 g/cm3).\n[…]\nA primeira referência ao nome (Vaseline) está relacionada com o inventor da geleia de petróleo (petroleum jelly), Robert Chesebrough através de uma patente dos Estados Unidos para o processo de fabrico (U.S. Patent 127568) em 1872.\n[…]\nEm 1859, Chesebrough foi aos campos petrolíferos em Titusville (Pensilvânia), e aí soube que um resíduo chamado \"rod wax\" era usado pelos trabalhadores dos campos petrolíferos para curar cortes, feridas e queimaduras. Chesebrough levou amostras do \"rod wax\" para Brooklyn, extraiu a geleia de petróleo (petroleum jelly) utilizável, e começou a fabricar o produto medicinal a que chamou \"Vaseline\".\n[…]\nA vaselina, sob o nome comercial \"Vaseline\", foi feita pela Chesebrough Manufacturing Company até esta ter sido comprada pela Unilever em 1987.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Asics",
      "descricao": "Fabricante japonesa de tênis e artigos esportivos sediada em Kobe."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos sessenta, a empresa que viraria a Nike começou revendendo nos Estados Unidos os tênis de qual marca japonesa, que depois formou a Asics?",
    "resposta": "Onitsuka Tiger",
    "distratores": [
      "Mizuno",
      "Yonex",
      "Descente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Asics",
      "https://en.wikipedia.org/wiki/Nike,_Inc."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Asics",
        "situacao": "ok",
        "texto": "ASICS Corporation (Japanese: 株式会社アシックス, Hepburn: Kabushiki gaisha Ashikkusu), commonly known as Asics (,  or ), is a Japanese multinational sportswear company headquartered in Kobe, Hyōgo Prefecture. It manufactures athletic and lifestyle footwear, apparel and sports equipment, and is particularly known for its running shoes. Performance Running is its largest product category; its other businesse\n[…]\nIn March 2018, Yasuhito Hirota became president, COO and representative director, while Oyama continued as chairman, CEO and a representative director. During Hirota's presidency, Asics introduced a category-based business management structure and established the China Division and Onitsuka Tiger Company.\n[…]\nIn Japan, sales to inbound tourists rose by about 84% to ¥47.4 billion; ¥41.5 billion of that total came from Onitsuka Tiger.\n[…]\nIn June 2026, Asics announced a planned reorganization of its Onitsuka Tiger business under the newly established, wholly owned OT GROUP Corporation. Under the plan, the Onitsuka Tiger business directly operated by ASICS Corporation is scheduled to be succeeded by OT GROUP through an absorption-type company split effective January 1, 2027; the company also adopted a policy to reorganize Onitsuka Tiger operations held by regional subsidiaries under OT GROUP.\n[…]\nReuters reported that the reorganization was intended to speed decision-making at a brand that had become a major profit driver for Asics; Onitsuka Tiger's sales had risen 43% in 2025 to ¥136.5 billion.\n[…]\nNike, Inc. originated as Blue Ribbon Sports (BRS), founded by Phil Knight and Bill Bowerman to distribute Onitsuka Tiger shoes in the United States. Knight visited Japan in 1963 after graduating from Stanford University and approached Onitsuka about becoming its U.S. distributor. Bowerman subsequently worked on running-shoe designs manufactured by Onitsuka for the U.S. market."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "situacao": "ok",
        "texto": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.\n[…]\nNike, originally known as Blue Ribbon Sports (BRS), was founded by University of Oregon track athlete Phil Knight and his coach, Bill Bowerman, on January 25, 1964. The company initially operated in Eugene, Oregon, as a distributor for Japanese shoemaker Onitsuka Tiger, making most sales at track meets out of Knight's automobile.\n[…]\nTension between BRS and Onitsuka Tiger increased in 1971 as the latter attempted a takeover of BRS by extending an ultimatum proposal that would give the Japanese company 51 percent of BRS. In 1972, the relationship between BRS and Onitsuka Tiger came to an end. BRS prepared to launch its own line of footwear. The previous year, it was already able to place from two Japanese shoe manufacturers the company's first independent order for 20,000, which included 6,000 that had the Nike logo.\n[…]\nNike sponsored Tiger Woods until 2024, and remained on his side amid the controversies that shaped the golfer's career. In January 2013, Nike signed Rory McIlroy, the then No 1 golfer in the world to a 10-year sponsorship deal worth $250 million. Nike has also gone on to sign top players in golf including Scottie Scheffler, Brooks Koepka, Nelly Korda, Tommy Fleetwood, Tony Finau and Cam Davis.\n[…]\nOn 3 November 2026, Libyan Grand Mufti Sadiq al-Gharyani banned the sale of Nike products on Islamic grounds due to it depicting the Greek goddess.\n[…]\nNike timeline\n[…]\nBreaking2 – A project by Nike to break the 2 hour marathon barrier.\n[…]\nBusiness data for Nike, Inc.:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Asics",
        "situacao": "ok",
        "texto": "Asics (アシックス, Ashikkusu; estilizado como ASICS) é uma empresa multinacional de artigos desportivos localizada em Kōbe, Japão. O nome é um acrônimo da frase em latim anima sana in corpore sano (traduzido pela Asics como \"alma sã em corpo são\"). A Asics é mais conhecida por seus tênis, mas também produz outros calçados, como sandálias, além de roupas (camisetas, jaquetas, moletons, roupas de banho, \n[…]\nA Asics começou como Onitsuka Co., Ltd em 1.º de setembro de 1949. O fundador Kihachiro Onitsuka começou a fabricar tênis de basquetebol em sua cidade natal de Kōbe, na Prefeitura de Hyōgo, Japão. A gama de atividades esportivas atendidas pela empresa se expandiu para uma variedade de estilos olímpicos usados desde a década de 1950 por atletas em todo o mundo.\n[…]\nApesar da mudança de nome, uma linha vintage de tênis Asics ainda é produzida e vendida internacionalmente sob a etiqueta Onitsuka Tiger. Em 2015, a Asics lançou sua marca de estilo de vida \"Asics Tiger\" para comercializar roupas esportivas inspiradas nos designs da empresa das décadas de 1970 a 1990.\n[…]\nA Asics gerou 484,6 bilhões de ienes em vendas líquidas e 19,9 bilhões de ienes em lucro líquido no ano fiscal de 2022. 53% da receita da empresa veio da venda de tênis de corrida de performance, 20% de outros calçados, 7% de vestuário e equipamentos, e 9% da Onitsuka Tiger. 25% das vendas da empresa foram no Japão, 22% na América do Norte, 27% na Europa, 13% na China e 19% em outras regiões.\n[…]\nA Nike, Inc. (originalmente conhecida como Blue Ribbon Sports) foi fundada para vender os calçados da Onitsuka Tiger nos Estados Unidos. Quando Phil Knight visitou o Japão em 1963, logo após se formar na Universidade de Stanford, ele ficou impressionado com os calçados Onitsuka Tiger e imediatamente visitou o escritório da marca e pediu para ser o representante de vendas deles nos Estados Unidos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Puma",
      "descricao": "Empresa alemã de calçados e artigos esportivos fundada por Rudolf Dassler em Herzogenaurach, em 1948."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os fundadores da Puma e da Adidas, que viraram rivais numa mesma cidadezinha da Baviera, tinham que parentesco?",
    "resposta": "Eram irmãos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Puma_(brand)",
      "https://en.wikipedia.org/wiki/Adidas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Puma_(brand)",
        "situacao": "ok",
        "texto": "Puma SE is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. Puma is the third largest sportswear manufacturer in the world.\n[…]\nA few months before the 1970 FIFA World Cup, Armin Dassler (Rudolf's son) of Puma and his cousin Horst Dassler (Adi's son) of Adidas signed \"the Pelé Pact\", an agreement that neither company would contract with Pelé, the world's most famous athlete. The companies reasoned that a bidding war for Pelé would be too expensive. Puma soon broke the pact and signed him.\n[…]\nIn April 2025, Puma announced that CEO Arne Freundt would step down due to differing views on strategy with the supervisory board. He is to be succeeded by Arthur Hoeld, a former Adidas executive, effective 1 July 2025.\n[…]\nPuma ranks as one of the top shoe brands with Adidas and Nike, and employs more than 18,000 people worldwide. The company has corporate offices around the world, including four defined as \"central hubs\": Assembly Row, Somerville, Massachusetts; Hong Kong; Ho Chi Minh City, Vietnam; and global headquarters in Herzogenaurach, Germany.\n[…]\nAccording to a joint report from Labour Behind the Label and Community Legal Education Centre, 30 workers fainted in November 2012 while producing clothing for Puma in China. The faintings were caused by excessive heat and alleged forced overtime. In 2014, almost 120 workers fainted in two Cambodian clothing factories where sportswear was being produced for Puma and Adidas, due to temperatures above 100 degrees Fahrenheit (38 °C).\n[…]\nIn March 2017, 150 workers assembling Puma products in Cambodia fainted due to thick smoke.\n[…]\nSabel v Puma, a CJEU case on trade marks"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Adidas",
        "situacao": "ok",
        "texto": "Adidas AG (German pronunciation: [ˈadiˌdas] ; styled as adidas since 1949) is a German multinational athletic apparel and footwear corporation headquartered in Herzogenaurach, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. It is the holding company for the Adidas Group, which also owns an 8.33% stake in the football club Bayern Munich\n[…]\nsprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas and Rudolf established Puma, which became Adidas's business rival.\n[…]\nAt the 1960 Summer Olympics, Puma paid German sprinter Armin Hary to wear Pumas in the 100 meter sprint final. Hary had worn Adidas before and asked Adolf for payment, but Adidas rejected this request. The German won gold in Pumas, but then laced up Adidas for the medals ceremony, to the shock of the two Dassler brothers. Hary hoped to cash in from both, but Adi was so enraged he banned the Olympic champion.\n[…]\nThe \"Pelé Pact\" was the most notable event in the Dassler brothers feud, when both owners of Adidas and Puma agreed not to sign a sponsorship deal with Pelé for the 1970 FIFA World Cup, feeling that a bidding war for the most famous athlete in the world would become too expensive, only for Puma to break the pact and sign him. Many business experts credit the brothers' rivalry and competition for transforming sports apparel into a multi-billion pound industry.\n[…]\nIn July 2019, Adidas and Arsenal agreed to a five-year kit deal, beginning with the 2019–20 Premier League season. This kit deal has a guaranteed minimum value of £300 million (US$406.41 million) and replaces rival Puma as the club's global equipment partner.\n[…]\nAdidas Originals\n[…]\nPuma (brand), formed by Rudolf Dassler, brother of Adolf Dassler\n[…]\nAdidas Group, corporate site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Puma_SE",
        "situacao": "ok",
        "texto": "PUMA é uma empresa alemã de equipamentos desportivos, fundada em 1948 pelo empresário alemão Rudolf Dassler, com sede em Herzogenaurach, Alemanha.\n[…]\nA empresa surgiu através da separação da Gebrüder Dassler Schuhfabrik, uma antiga fábrica de calçados de pano criada por Rudolf e seu irmão Adolf Dassler (fundador da também alemã Adidas) em 1924. No ano de 1924 dois irmãos, Adolf (apelido Adi) e Rudolf (apelido Rudi) Dassler, criaram uma pequena empresa de calçados de pano, a Gebrüder Dassler Schuhfabrik. Aos poucos a produção começou a crescer e fornecer sapatos para atletas olímpicos.\n[…]\nO atleta Jesse Owens, nas Olimpíadas de Berlim, 1936, começou a mostrar o trabalho dos irmãos alemães ao mundo.\n[…]\nA empresa mostrava um desenvolvimento rápido, numa velocidade que fez com que os irmãos buscassem seus próprios lucros, ou seja, se separaram. No ano de 1948, Adi Dassler fundou a Adidas enquanto Rudolf criou a Puma Fábrica de Sapatos Rudolf Dassler. Um ano após a divisão da empresa, Rudolf mudou a sede da empresa para Herzogenaurach, cidade próxima do grande centro Nuremberg.\n[…]\nO que não se esperava com essa expansão global era uma crise, que estourou logo no ano de 1993. Nike e Adidas melhoravam cada vez mais seus produtos e ganhavam de vez o consumidor, enquanto a Puma enfrentava uma forte desvalorização de seus produtos que não acompanhavam a novas tendências. Em menos de três anos,1991 a 1993, três presidentes foram embora. A empresa teve de demitir 50% de seu pessoal na Alemanha, enquanto mais 36% perdiam seu emprego ao redor do mundo.\n[…]\nHá muitos anos, a Puma começou investir no mercado futebolístico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Apple",
      "descricao": "Empresa americana de tecnologia fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne, fabricante do iPhone e dos computadores Mac."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O primeiro logotipo da Apple, de 1976, mostrava qual cientista sentado debaixo de uma macieira?",
    "resposta": "Isaac Newton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Apple_Inc.",
      "https://en.wikipedia.org/wiki/Ronald_Wayne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Apple_Inc.",
        "situacao": "ok",
        "texto": "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, in Silicon Valley, and known for consumer electronics, software and online services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. Its current name was adopted in 20\n[…]\nDuring the 1990s, Apple branched out beyond computers into consumer electronics and other markets, developing products such as the QuickTake digital cameras, PowerCD, Pippin game console, eWorld online service, Apple Interactive Television Box, and Newton personal digital assistant line. None achieved widespread commercial success.\n[…]\nAccording to Steve Jobs, the company's name was inspired by his visit to an apple farm while on a fruitarian diet. Apple's first logo, designed by Ron Wayne, depicts Sir Isaac Newton sitting under an apple tree. It was replaced in 1977 by a rainbow-colored silhouette of an apple with a bite taken out of it, designed by Rob Janoff.\n[…]\nApple's first slogan, \"Byte into an Apple\", was coined in the late 1970s. From 1997 to 2002, the slogan \"Think different\" was used in advertising campaigns, and is still closely associated with Apple. Apple also has slogans for specific product lines—for example, \"iThink, therefore iMac\" was used in 1998 to promote the iMac, and \"Say hello to iPhone\" has been used in iPhone advertisements. \"Hello\" was also used to introduce the original Macintosh, Newton, iMac (\"hello (again)\"), and iPod.\n[…]\nAs of 2024, Apple was the world's fourth-largest personal computer vendor, the largest vendor of tablet computers, and the largest vendor of mobile phones. It is a Big Tech company.\n[…]\nOutline of Apple Inc.\n[…]\nApple Inc. on OpenSecrets, a website that tracks and publishes data on campaign finance and lobbying\n[…]\nApple Inc. at Encyclopædia Britannica"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ronald_Wayne",
        "situacao": "ok",
        "texto": "Ronald Gerald Wayne (born May 17, 1934) is an American retired electronics industry business executive. He co-founded Apple Computer Company—which later became simply Apple—as a partnership with Steve Wozniak and Steve Jobs on April 1, 1976, providing administrative oversight and documentation for the new venture. He has been often referred to by media as the 'forgotten founder' of Apple.\n[…]\nIn 1976, Wayne was well respected for his sophisticated and comprehensive internal corporate documentation systems at the three-year-old Atari. There, he met coworkers Steve Jobs and Steve Wozniak. To assist in mediation of one of their typically intense discussions about the design of computers and the future of the industry, Wayne invited the pair to his home to facilitate and advise them.\n[…]\nIn the ensuing two-hour conversation about technology and business, Jobs proposed the founding of a computer company led by Wozniak and himself. The two would each hold a 45% stake so that Wayne could receive a 10% stake to act as a tie-breaker in their decisions. As the venture's self-described \"adult in the room\" at age 41, Wayne drafted the original partnership agreement, and the three founded Apple Computer on April 1, 1976.\n[…]\nWayne created the first illustrations of the Apple logo (known as Apple Newton). He also wrote the Apple I Operations Manual.\n[…]\nIn July 2011, Wayne published a memoir titled Adventures of an Apple Founder. His plan for initial exclusivity on the Apple Books store did not materialize.\n[…]\nNPR report \"Lost\" Apple Founder Has No Regrets – June 13, 2010\n[…]\nRon Wayne, Apple Co-Founder, Shares Steve Jobs' \"Richest Man in the Cemetery\" Sentiment Almost Verbatim Archived December 7, 2014, at the Wayback Machine, Village Voice, October 8, 2011"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apple",
        "situacao": "ok",
        "texto": "Apple (NASDAQ: AAPL; anteriormente Apple Computer) é uma empresa multinacional norte-americana que tem o objetivo de projetar e comercializar produtos eletrônicos de consumo, software de computador e computadores pessoais. Os produtos de hardware mais conhecidos da empresa incluem a linha de computadores Macintosh, iPod, iPhone, iPad, Apple TV e o Apple Watch.\n[…]\nFundada em 1 de abril de 1976 em Cupertino, Califórnia, e incorporada 3 de janeiro de 1977, a empresa foi anteriormente denominada Apple Computer nos seus primeiros 30 anos, mas retirou a palavra \"Computer\" em 9 de janeiro de 2007, para refletir a contínua expansão da empresa no mercado de eletrônicos de consumo, além de seu foco tradicional em computadores pessoais.\n[…]\nO primeiro protótipo da empresa foi o Apple I que foi demonstrado na Homebrew Computer Club em 1975, as vendas começaram em julho de 1976 com o preço de US$ 666,66, aproximadamente 200 unidades foram vendidas, em 1977 a empresa conseguiu o aporte de Mike Markkula e um empréstimo do Bank of America.\n[…]\nA partir de 1993 a Apple começa a lançar diferentes produtos, no mesmo ano lança o seu primeiro tablet o Apple Newton, outros produtos incluem o reprodutor de CD PowerCD do mesmo ano, a câmera Apple QuickTake de 1994, o set-top-box Apple Interactive Television Box e o console de jogos eletrônicos Apple Pippin.\n[…]\nO primeiro logotipo da Apple, desenhado por Ron Wayne, retrata Sir Isaac Newton sentado sob uma macieira. Foi quase imediatamente substituído pelo \"arco-íris Apple\" de Rob Janoff, a agora conhecida silhueta cor de arco-íris de uma maçã com uma mordida. Janoff apresentou Jobs com vários temas monocromáticos diferentes para o logotipo \"mordido\" e Jobs imediatamente gostou dele. No entanto, Jobs insistiu que o logotipo deveria ser colorido para humanizar a empresa.\n[…]\nApple Store\n[…]\n«Apple Brasil». (BR)\n[…]\n«Apple Portugal». (PT)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Apple",
      "descricao": "Empresa americana de tecnologia fundada em 1976 por Steve Jobs, Steve Wozniak e Ronald Wayne, fabricante do iPhone e dos computadores Mac."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Ao lado de Steve Jobs e Steve Wozniak, quem foi o terceiro fundador da Apple, que vendeu sua parte poucos dias depois?",
    "resposta": "Ronald Wayne",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ronald_Wayne"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ronald_Wayne",
        "situacao": "ok",
        "texto": "Ronald Gerald Wayne (born May 17, 1934) is an American retired electronics industry business executive. He co-founded Apple Computer Company—which later became simply Apple—as a partnership with Steve Wozniak and Steve Jobs on April 1, 1976, providing administrative oversight and documentation for the new venture. He has been often referred to by media as the 'forgotten founder' of Apple.\n[…]\nRonald Wayne was born in Cleveland, Ohio, on May 17, 1934. He trained as a technical draftsman at the School of Industrial Art High School in New York City.\n[…]\nIn 1976, Wayne was well respected for his sophisticated and comprehensive internal corporate documentation systems at the three-year-old Atari. There, he met coworkers Steve Jobs and Steve Wozniak. To assist in mediation of one of their typically intense discussions about the design of computers and the future of the industry, Wayne invited the pair to his home to facilitate and advise them.\n[…]\nIn the ensuing two-hour conversation about technology and business, Jobs proposed the founding of a computer company led by Wozniak and himself. The two would each hold a 45% stake so that Wayne could receive a 10% stake to act as a tie-breaker in their decisions. As the venture's self-described \"adult in the room\" at age 41, Wayne drafted the original partnership agreement, and the three founded Apple Computer on April 1, 1976.\n[…]\nWayne appeared in the documentary Welcome to Macintosh in 2008, where he describes some of his early experiences with Jobs and Wozniak.\n[…]\nWayne lives in Pahrump, Nevada.\n[…]\nRon Wayne interview by OMT\n[…]\nNPR report \"Lost\" Apple Founder Has No Regrets – June 13, 2010\n[…]\nRon Wayne, Apple Co-Founder, Shares Steve Jobs' \"Richest Man in the Cemetery\" Sentiment Almost Verbatim Archived December 7, 2014, at the Wayback Machine, Village Voice, October 8, 2011\n[…]\nRonald G. Wayne interviewed on the TV show Triangulation on the TWiT.tv network"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ronald_Wayne",
        "situacao": "ok",
        "texto": "Ronald Gerald Tito Wayne (Cleveland, Ohio, Estados Unidos; 17 de maio de 1934) é um empresário americano aposentado da indústria eletrônica. Ele co-fundou a Apple Computer (atual Apple Inc.), juntamente com Steve Jobs e Steve Wozniak, em 1º de abril de 1976, proporcionando supervisão administrativa fundamental para o novo empreendimento.\n[…]\nDoze dias depois, ele vendeu sua participação de 10% na nova empresa de volta para Jobs e Wozniak por US$ 800 (equivalente a US$ 3.810 em 2021), e um ano depois aceitou um final de US$ 1.500 (equivalente a US$ 7.143 em 2021) para perder qualquer potenciais reivindicações futuras contra a recém-incorporada Apple.\n[…]\nRon Wayne – Official Website\n[…]\nRon Wayne on Facebook\n[…]\nRon Wayne on Twitter\n[…]\nRon Wayne interview by OMT\n[…]\nNPR report \"Lost\" Apple Founder Has No Regrets – June 13, 2010\n[…]\nRon Wayne, Apple Co-Founder, Shares Steve Jobs' \"Richest Man in the Cemetery\" Sentiment Almost Verbatim, Village Voice, October 8, 2011",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Porsche",
      "descricao": "Fabricante alemã de carros esportivos sediada em Stuttgart, que leva o sobrenome do engenheiro Ferdinand Porsche."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O engenheiro Ferdinand Porsche, cujo sobrenome batiza uma marca de carros esportivos, projetou nos anos trinta qual carro popular alemão?",
    "resposta": "Fusca",
    "distratores": [
      "Kombi",
      "Trabant",
      "Opel Kadett"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferdinand_Porsche",
      "https://en.wikipedia.org/wiki/Volkswagen_Beetle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_Porsche",
        "situacao": "ok",
        "texto": "Ferdinand Porsche (3 September 1875 – 30 January 1951) was an Austrian-German automotive engineer and founder of the Porsche AG. He is best known for creating the first gasoline-electric hybrid vehicle (Lohner-Porsche), the Volkswagen Beetle, the Auto Union racing cars, the Mercedes-Benz SS/SSK, and several other important developments and Porsche automobiles.\n[…]\nThe Volkswagen plant was completed in 1938 after workers from Italy were brought in. Volkswagen, under Ferdinand Porsche, used and profited from forced labour. That included a large number of Soviets. By early 1945, German nationals comprised only 10% of Volkswagen's workforce.\n[…]\nViews of Ferdinand Porsche have been polarised in the postwar years. Though he was recognised and honoured for his contributions to the automotive and engineering industries, with Volkswagen Group – which his heirs control – being the second-largest car manufacturer in the world, he was also criticised for his significant involvement in the Nazi regime, having contributed to the Nazi cause through his production of military vehicles and weapons systems used during World War II.\n[…]\nHans Baron von Veyder-Malberg, who succeeded Rosenberger at Porsche, intervened with the Gestapo and affected his release after three months of imprisonment. Rosenberger had to leave Germany, and his ownership stake was subject to \"Aryanization\", a Nazi policy that was part of the broader persecution of Jews. That allowed Ferdinand Porsche and Anton Piëch to acquire Rosenberger's stake in the company at nominal value, well below its worth.\n[…]\nArthur Constantin Krebs, managing director of Panhard, with whom Ferdinand Porsche designed a hybrid car.\n[…]\nFerdinand Porsche Birth House Škoda Museum\n[…]\nFerdinand Porsche at Find a Grave\n[…]\nNewspaper clippings about Ferdinand Porsche in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Beetle",
        "situacao": "ok",
        "texto": "The Volkswagen Beetle, officially the Volkswagen Type 1, is a small family car produced by the German company Volkswagen from 1938 to 2003. A global cultural icon known for its bug-like design, the Beetle is widely regarded as one of the most influential cars of the 20th century. Its production period of 65 years is the longest for any single generation of automobile.\n[…]\nOn 22 June 1934, Ferdinand Porsche received a development contract from the Verband der Automobilindustrie (German Association of the Automotive Industry) for the prototype of an inexpensive and economical passenger car after Hitler decided there was a need for a people's car (in German, \"volkswagen\")—a car affordable and practical enough for lower-class people to own—to serve the country's new road network, the Reichsautobahn.\n[…]\nAlthough the Volkswagen car was primarily the conception of Porsche and Hitler, the idea of a \"people's car\" is much older than Nazism, and has existed since the introduction of automotive mass production.\n[…]\nGerman-Bohemian engineer Ferdinand Porsche and his team were generally known as the original designers of the Volkswagen. However, there has been debate over whether he was the original designer. Rumours circulated suggesting that other designers, such as Béla Barényi, Paul Jaray, Josef Ganz and Hans Ledwinka, may have influenced its design.\n[…]\nOfficial exportation of the Beetle to the Brazilian market began on 23 March 1953, with its parts imported from Germany. For the local market, the Type 1 was officially known \"Volkswagen Fusca\". In January 1959, Volkswagen shifted assembly to the new São Bernardo do Campo plant, initially maintaining 60 per cent of its German parts. However, by the mid-1960s, the cars had about 99.93 per cent Brazilian-made components."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferdinand_Porsche",
        "situacao": "ok",
        "texto": "Ferdinand Porsche (Professor Doktor Ingenieur Honoris Causa (Dr. h.c. Ing.); pronúncia em alemão: [ˈpɔʁʃə] () (Maffersdorf, 3 de setembro de 1875 – Stuttgart, 30 de janeiro de 1951) foi um engenheiro automotivo austríaco naturalizado alemão, conhecido por seus projetos inovadores no campo da engenharia automotiva. Entre seus trabalhos mais notáveis está o desenvolvimento do Volkswagen Fusca (conhe\n[…]\nPorsche nasceu em uma família de língua alemã, na cidade de Maffersdorf (Vratislavice nad Nisou), região da Boêmia, Áustria-Hungria. Seu local de nascimento é hoje parte da cidade de Liberec, República Checa. Porsche é mais conhecido pelo desenho original do Type I (Fusca no Brasil e Carocha em Portugal) e por suas contribuições ao projeto de tanques de guerra alemães dos modelos Tiger I, Tiger II, Maus e Elefant.\n[…]\nEles também consertavam carros, bombas d'água e guinchos. A empresa também iniciou um novo projeto, o Porsche 356, o primeiro veículo a ter a marca Porsche. A empresa se localizava em Gmünd, na época território austríaco, onde se instalaram oriundos de Stuttgart a fim de se abrigarem dos bombardeiros aliados. A empresa começou a fabricar o Porsche 356 numa antiga serraria em Gmünd. Eles montaram 49 carros inteiramente à mão.\n[…]\nPorsche foi posteriormente contratado pela Volkswagen para consultoria adicional, e recebeu royalties por cada Volkswagen do Tipo I (Fusca) fabricado. Isto o deixou em situação financeira confortável, pois mais de 20 milhões de unidades do carro foram produzidas.\n[…]\nEm novembro de 1950, Porsche visitou a fábrica da Volkswagen em Wolfsburg pela primeira vez desde o final da Segunda Guerra Mundial. Durante a visita, conversou com o então presidente da empresa, Heinrich Nordoff, sobre o futuro do Fusca, o qual já estava sendo produzido em grande escala.\n[…]\nFerdinand Porsche, from Auto History Online\n[…]\nWest Ham's Cedes Stoll Trolleybus Porsche design",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cookie com gotas de chocolate",
      "descricao": "Biscoito americano com pedaços de chocolate, criado nos anos 1930 no restaurante Toll House, em Massachusetts."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a história mais conhecida, Ruth Wakefield cedeu à Nestlé a receita do cookie com gotas de chocolate em troca de quê?",
    "resposta": "Chocolate de graça pelo resto da vida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chocolate_chip_cookie",
      "https://en.wikipedia.org/wiki/Ruth_Graves_Wakefield"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chocolate_chip_cookie",
        "situacao": "ok",
        "texto": "A chocolate chip cookie is a drop cookie that contains pieces of chocolate mixed into the dough before baking. Texture and appearance vary with ingredients and preparation, ranging from moist, chewy cookies to ones that are crispy.\n[…]\nChocolate chip cookies are closely associated with the United States, where they are the most popular cookie. Their invention is generally credited to Massachusetts chef and hotelier Ruth Graves Wakefield in the 1930s, although versions existed that preceded hers.\n[…]\nRuth Wakefield created her recipe for chocolate chip cookies in the 1930s, although sources differ on the specific year. With her husband Kenneth, Wakefield owned and ran the Toll House Inn, a hotel and restaurant in Whitman, Massachusetts, that was well-known in the region. Several accounts exist of how Wakefield created her recipe for chocolate chip cookies, with older versions describing an accidental invention and more modern versions arguing that Wakefield created it intentionally.\n[…]\nThe chocolate chip cookies these businesses produced varied: Amos made small cookies out of margarine and pecans, while Fields made large cookies with macadamia, the latter bringing about a home baking trend of large chocolate chip cookies. 1979 also marked the end of Nestlé's agreement with Wakefield to put her recipe on their packaging, and they took the opportunity to modify it for the modern kitchen, omitting steps to sift flour and produce a paste of baking powder and water.\n[…]\nIn Massachusetts, the chocolate chip cookie was designated as the Official State Cookie in 1997 in reference to the story of Ruth Wakefield creating the cookie in a Massachusetts inn.\n[…]\nOatmeal raisin cookie\n[…]\nPeanut butter cookie\n[…]\nNestle Toll House Cookie recipe"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ruth_Graves_Wakefield",
        "situacao": "ok",
        "texto": "Ruth Graves Wakefield (née  Jones Graves; June 17, 1903 – January 10, 1977) was an American chef, known for her innovations in the baking field. She made the first chocolate chip cookie recipe, an invention many people loved. Her new dessert was an inspiration behind the massively popular Toll House Chocolate Chip Cookie. Throughout her life, Wakefield found occupation as a educator, business owne\n[…]\nWakefield was looking to improve on the colonial-style desserts she had been serving to her customers. In 1938, Ruth, along with her cooking assistant Sue Brides, were experimenting with a thin butterscotch pecan cookie that had been incredibly popular with guests. Her intuition was to add melting squares of baking chocolate to the blond batter, but she realized her baking cabinet was out of the ingredient.\n[…]\nThe closest substitute at her disposal was semi-sweet chocolate bars from the Nestlé company. Continuing to improvise, Ruth used an icepick to break the chocolate into pea-sized bits, which today would be recognized as the cookie's staple, chocolate \"chips.\" As opposed to melting and disseminating across the cookie, the bits maintained their chunky form as they baked. Inn visitors loved the revolutionary good and the novel dessert created an influx of visitors.\n[…]\nIt became so popular that it was featured in newspapers, and the Wakefields received countless letters from people requesting the recipe, and the Toll House Cookie became the most popular dessert of the time.\n[…]\nIn exchange for Wakefield offering Nestlé permission to print the recipe and market their semi-sweet chocolate as a key ingredient, Wakefield received a $1 payment for recipe rights, a lifetime supply of baking chocolate, and a consulting deal with Nestlé. In tribute to the origin story, Nestlé branded the products \"Toll House Cookies.\"\n[…]\nRuth Graves Wakefield at Find a Grave"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada em 1963 por Ferruccio Lamborghini em Sant'Agata Bolognese, cujo símbolo é um touro."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a história contada pela família, Ferruccio Lamborghini decidiu fabricar carros esportivos depois de uma discussão com qual fabricante italiano?",
    "resposta": "Enzo Ferrari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lamborghini",
      "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nFerruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978.\n[…]\nIn contrast to his rival Enzo Ferrari, Ferruccio Lamborghini had decided early on that there would be no factory-supported racing of Lamborghinis, viewing motorsport as too expensive and too draining on company resources. This was unusual for the time, as many sports car manufacturers sought to demonstrate speed, reliability, and technical superiority through motorsport participation.\n[…]\nEnzo Ferrari in particular was known for considering his road car business mostly a source of funding for his participation in motor racing. Ferruccio's policy led to tensions between him and his engineers, many of whom were racing enthusiasts; some had previously worked at Ferrari.\n[…]\nFerrucio Lamborghini (1963–1972)\n[…]\nList of automobile manufacturers of Italy\n[…]\n\"Principales cláusulas de los contratos con USA e Italia\" [Main Contract Terms between USA and Italy]. lamborghini-latinoamerica.com (in Spanish). Automóviles Lamborghini Latinoamérica S.A. de C.V. 5 August 1995. Archived from the original (JPG) on 2 October 2013. Retrieved 2 August 2012."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Lamborghini  ( LAM-bər-GHEE-nee, Italian: [ferˈruttʃo lamborˈɡiːni]; 28 April 1916 – 20 February 1993) was an Italian automobile designer and industrialist who created Lamborghini Trattori in 1948 and Automobili Lamborghini in 1964, a maker of high-end sports cars in Sant'Agata Bolognese.\n[…]\nFerruccio Lamborghini was born on 28 April 1916 to viticulturists Antonio and Evelina Lamborghini in house number 22 in Renazzo di Cento, in the Province of Ferrara, in the Emilia-Romagna region of Northern Italy. According to his baptismal certificate, Ferruccio was baptised as a Roman Catholic four days later, on 2 May.\n[…]\nLamborghini found that Ferrari's cars were equipped with inferior clutches, and required continuous trips to Maranello for rebuilds; technicians would secrete the car away for several hours to perform the work, much to Lamborghini's annoyance. He had previously expressed dissatisfaction with Ferrari's after sales service, which he perceived to be substandard. Lamborghini brought his misgivings to Enzo Ferrari's attention, but was dismissed by Ferrari.\n[…]\nAfter successfully modifying one of his personally owned Ferrari 250 GTs to outperform stock models, Lamborghini gained the impetus to pursue an automobile manufacturing venture of his own, aiming to create the perfect touring car that he felt no one could build for him. Lamborghini believed that a grand tourer should have attributes that were lacking in Ferrari's offerings, namely high performance without compromising tractability, ride quality, and interior appointments.\n[…]\nIn 1995 son Tonino opened a museum that honors Lamborghini's legacy, the Centro Studi e Ricerche Ferruccio Lamborghini in Dosso (Ferrara), which was moved to Argelato (Bologna) in 2014 with the new name Museo Lamborghini."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "A Automobili Lamborghini (pronúncia italiana: [autoˈmɔːbili lamborˈɡiːni]), usualmente chamada de Lamborghini ou coloquialmente Lambo, é uma fabricante italiana de automóveis esportivos de luxo e de alto desempenho, criada originalmente para competir com a Ferrari. Desde 1998, faz parte do Grupo Volkswagen por meio de sua subsidiária Audi, onde intercambia tecnologias entre Audi R8 e os modelos ma\n[…]\nFundada em 1963 por Ferruccio Lamborghini (1916–1993) como uma filial da sua bem-sucedida fábrica de tratores Lamborghini Trattori, que produzia tratores com motores de tanques da Segunda Guerra Mundial. Instalou-se em Sant’Agata Bolognese e contratou uma série de engenheiros de renome para construir os seus carros, como foi o caso de Giotto Bizzarrini (responsável pela criação da Ferrari 250 GTO), Giampaolo Dallara e Paolo Stanzani.\n[…]\nFerrucio era grande apreciador de touradas, por isso muitos dos seus carros tem nomes de touros famosos.\n[…]\nEm 1972 o Lamborghini Urraco permitiu à marca italiana entrar no segmento dos pequenos supercarros. Ainda nesse ano a Lamborghini vendeu 51% das suas ações a um empresário suíço, com os restantes 49% a serem entregues a outro suíço em 1974. Pelo meio, em 1973 o Miura foi substituído por um outro modelo que também fez história no mundo dos carros de características desportivas, o Countach.\n[…]\nEm 1987, a marca norte-americana Chrysler comprou a Lamborghini e, além do substituto do Countach, começou a preparar um motor para equipar carros de Fórmula 1. A estreia nesta competição automobilística ocorreu em 1989, mas nunca teve sucesso. Desde 1998 a Lamborghini pertence ao grupo Volkswagen. Já o substituto do Countach, o Diablo, foi apresentado em 1990 e obteve grande sucesso, mantendo-se em produção para além do ano 2000.\n[…]\n«Lamborghini by KLD Concept (fotos, videos)» (em inglês)\n[…]\nRevista Classic Show. Na crise da década de 70, surge o Lamborghini Bravo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada em 1963 por Ferruccio Lamborghini em Sant'Agata Bolognese, cujo símbolo é um touro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes dos carros esportivos, Ferruccio Lamborghini ficou rico fabricando que tipo de veículo, usado no campo?",
    "resposta": "Tratores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
      "https://en.wikipedia.org/wiki/Lamborghini_Trattori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferruccio_Lamborghini",
        "situacao": "ok",
        "texto": "Ferruccio Lamborghini  ( LAM-bər-GHEE-nee, Italian: [ferˈruttʃo lamborˈɡiːni]; 28 April 1916 – 20 February 1993) was an Italian automobile designer and industrialist who created Lamborghini Trattori in 1948 and Automobili Lamborghini in 1964, a maker of high-end sports cars in Sant'Agata Bolognese.\n[…]\nTrattori's unionised employees could not be laid off, putting immense strain on the company. In 1972, Lamborghini sold his entire holding in the company to rival tractor builder SAME. Soon, the entire Lamborghini group found itself in financial trouble. Development at the automaker slowed as costs were cut. Ferruccio Lamborghini began courting buyers for Automobili and Trattori, entering negotiations with Georges-Henri Rossetti, a wealthy Swiss businessman and friend.\n[…]\nAll of Ferruccio Lamborghini's companies continue to operate today in one form or another. His son, Tonino, designs a collection of clothing and accessories under the Tonino Lamborghini brand, as well as designing the Town Life, an electric microcar which was revealed at the Bologna Motor Show in 1999. Ferruccio's daughter, Patrizia Lamborghini, runs the Lamborghini winery on his Umbria estate.\n[…]\nIn 1995 son Tonino opened a museum that honors Lamborghini's legacy, the Centro Studi e Ricerche Ferruccio Lamborghini in Dosso (Ferrara), which was moved to Argelato (Bologna) in 2014 with the new name Museo Lamborghini.\n[…]\nCowell, Alan (22 February 1993). \"Ferruccio Lamborghini, 76, Dies; A Top Maker of Stylish Sports Cars\". New York Times. New York City, New York. ISSN 0362-4331. Archived from the original on 20 April 2013. Retrieved 11 August 2012.\n[…]\nPatrizia Lamborghini discussing Lamborghini winery\n[…]\nAutomobili Lamborghini S.p.A. Automobiles; now a subsidiary of AUDI AG"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini_Trattori",
        "situacao": "ok",
        "texto": "Lamborghini Trattori is an Italian agricultural machinery manufacturer. The company designs and builds tractors. It was founded in 1948 in Cento, Italy, by Ferruccio Lamborghini, who later went on to establish Automobili Lamborghini. In 1973, it became part of SAME (Società Accomandita Motori Endotermici).\n[…]\nFounded in 1948 by Ferruccio Lamborghini, Lamborghini Trattori did not have a long tradition like the historical names Fiat Trattori and Landini; in fact, it had to use discarded war materials to produce its first tractors.\n[…]\nIn 1951, the \"L 33\" came into being – the first production tractor made entirely by Lamborghini, with the exception of the engine: a diesel-fuelled 3,500 cc in-line 6 cylinder Morris, equipped with the fuel atomiser patented by Ferruccio Lamborghini.\n[…]\nIn 1962, with its \"2R DT\" model, Lamborghini produced a series of four-wheel-drive tractors with air-cooled engines.\n[…]\nFlush with cash from his success in tractors and air conditioners, and following an argument with Enzo Ferrari about a faulty clutch in his Ferrari 250 GT, Ferruccio Lamborghini decided to start building his own luxury cars and introduced the Lamborghini marque. The first model introduced was the 350 GTV in 1963, which evolved into the production version 350 GT in 1964 and then further with the 400GT 2+2 in 1966.\n[…]\nThe highly sought after Miura came in 1966, pushing Automobili Lamborghini into the world of super sports cars it is known for today.\n[…]\nThanks to Nitro, Lamborghini Trattori won a series of international awards, including Tractor of the Year – Golden Tractor for the Design 2014 and the RedDot Award 2014."
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
    "indice": 34,
    "ancora": {
      "nome": "Guinness World Records",
      "descricao": "Livro anual de recordes mundiais, lançado em 1955 por iniciativa da cervejaria irlandesa Guinness."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que ligação tem o famoso livro anual dos recordes mundiais com uma cerveja escura irlandesa?",
    "resposta": "Foi criado pela cervejaria Guinness",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guinness_World_Records",
      "https://en.wikipedia.org/wiki/Hugh_Beaver"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guinness_World_Records",
        "situacao": "ok",
        "texto": "Guinness World Records (), known from its inception in 1955 until 1999 as The Guinness Book of Records and in previous United States editions as The Guinness Book of World Records, is a British reference book published annually, listing world records both of human achievements and the extremes of the natural world. Sir Hugh Beaver created the concept in order to settle pub debates, and twin brothe\n[…]\nIn 1976, a Guinness Book of World Records museum opened in the Empire State Building. Speed shooter Bob Munden then went on tour promoting The Guinness Book of World Records by performing his record fast draws with a standard weight single-action revolver from a Western movie-type holster. His fastest time for a draw was 0.02 seconds.\n[…]\nAfter being sold to Hit Entertainment, the data concerning the Official Chart Company's singles and albums charts were combined under the title British Hit Singles & Albums, with Hit Entertainment publishing the book from 2003 to 2006 (under the Guinness World Records brand).\n[…]\nAfter Guinness World Records was sold to The Jim Pattison Group, it was effectively replaced by a series of books published by Ebury Publishing/Random House with the Virgin Book of British Hit Singles first being published in 2007 and with a Hit Albums book following two years later.\n[…]\nIn 1975, Parker Brothers marketed a board game, The Guinness Game of World Records, based on the book. Players compete by setting and breaking records for activities such as the longest streak of rolling dice before rolling doubles, stacking plastic pieces, and bouncing a ball off alternating sides of a card, as well as answering trivia questions based on the listings in the Guinness Book of World Records.\n[…]\nIn 2012, Warner Bros. announced the development of a live-action film version of Guinness World Records with Daniel Chun as scriptwriter. The film, however, never entered production."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hugh_Beaver",
        "situacao": "ok",
        "texto": "Sir Hugh Eyre Campbell Beaver, KBE (4 May 1890 – 16 January 1967) was an English-South African civil engineer, industrialist and bureaucrat, who founded the Guinness World Records (then known as Guinness Book of Records). He was Director-General of the Ministry of Works and managing director at Guinness Brewery.\n[…]\nDuring World War II he was Director-General in the newly formed Ministry of Works, and was in charge of the whole wartime programme of works.\n[…]\nBeaver joined Arthur Guinness Son & Co. (Guinness Brewery) in 1945 as assistant managing director. He was appointed managing director in November 1946. The brewery was modernised and the company's interests were widened under his direction.\n[…]\nHistory of the Guinness World Records - Official Site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guinness_World_Records",
        "situacao": "ok",
        "texto": "Guinness World Records (pronunciado /ˈɡɪnɪs/ em inglês), chamado The Guinness Book of Records desde sua criação, em 1955, até 1999, e The Guinness Book of World Records em antigas edições dos Estados Unidos, é uma obra de referência britânica publicada anualmente que reúne recordes mundiais de realizações humanas e extremos do mundo natural. Em português, também é chamado de Livro Guinness dos Rec\n[…]\nA expansão da franquia fez do Guinness World Records uma das principais autoridades internacionais na catalogação e verificação de um grande número de recordes mundiais.\n[…]\nAlgumas categorias encerradas foram reabertas. A de engolir espadas, por exemplo, constava como encerrada no Guinness Book of World Records de 1990, mas voltou a receber tentativas e Johnny Strange quebrou uma marca no programa Guinness World Records Live. Os recordes de consumo rápido de cerveja, retirados em 1991, reapareceram 17 anos depois na edição de 2008. Eles deixaram a seção \"Human Achievements\", onde apareciam nas edições antigas, e passaram para \"Modern Society\".\n[…]\nEm 1976, um museu Guinness Book of World Records abriu no Empire State Building. O atirador Bob Munden passou a excursionar promovendo o livro, realizando saques rápidos de uma arma de ação simples com peso comum, retirada de um coldre semelhante aos usados em filmes de faroeste. Seu menor tempo de saque era de 0,02 segundo.\n[…]\nEm 1975, a Parker Brothers comercializou o jogo de tabuleiro The Guinness Game of World Records, baseado no livro. Os jogadores competem tentando estabelecer ou superar recordes em atividades como obter a maior sequência de lançamentos de dados antes de tirar números iguais, empilhar peças de plástico e fazer uma bola quicar alternadamente nos dois lados de uma carta. O jogo também traz perguntas de conhecimentos gerais baseadas nas entradas de The Guinness Book of World Records.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "McDonald's",
      "descricao": "Rede americana de lanchonetes de hambúrguer criada pelos irmãos Richard e Maurice McDonald na Califórnia, em 1940."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1940, os irmãos Richard e Maurice McDonald abriram o restaurante que deu origem à rede em qual cidade da Califórnia?",
    "resposta": "San Bernardino",
    "distratores": [
      "Los Angeles",
      "San Diego",
      "Sacramento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/McDonald%27s"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/McDonald%27s",
        "situacao": "ok",
        "texto": "McDonald's Corporation is an American multinational fast food restaurant chain. Founded in 1940 as a restaurant operated by brothers Richard and Maurice McDonald in San Bernardino, California, the company has grown into one of the world's largest restaurant chains. At the end of 2025, the McDonald's system comprised 45,356 restaurants in more than 100 countries, approximately 95% of which were ope\n[…]\nSiblings Richard and Maurice McDonald, with the goal of making $1 million before they turned 50, opened the first McDonald's at 1398 North E Street at West 14th Street in San Bernardino, California, on May 15, 1940.\n[…]\nKroc and the McDonald brothers fought for control of the business, as documented in Kroc's autobiography. In 1961, he purchased the McDonald brothers' equity in the company and began the company's worldwide reach. The sale cost Kroc $2.7 million (worth almost $29,089,644 in the current day). The San Bernardino restaurant was eventually torn down in 1971, and the site was sold to the Juan Pollo chain in 1998.\n[…]\nMcDonald's wants to add 900 McDonald's restaurants in the U.S. and 10,000 more worldwide (totaling 50,000 restaurants globally) by 2027.\n[…]\nMcDonald's has committed to eliminating deforestation from its global supply chain by 2030 for beef and four other commodities. The company also has a 2050 net-zero carbon emissions commitment, to bring global carbon emissions down. Digitizing the Arches is a new initiative of McDonald's. From this, McDonald's announces a partnership with Google to automate restaurants using artificial intelligence, and Google Cloud technology.\n[…]\nList of countries with McDonald's restaurants\n[…]\nMaDonal, a restaurant in Iraq that copies many features of McDonald's\n[…]\nAshenfelter, Orley, and Štěpán Jurajda. \"Minimum Wages, Wages, and Price Pass-Through: The Case of McDonald's Restaurants.\" Journal of Labor Economics 40.S1 (2022): S179-S201. abstract"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/McDonald%27s",
        "situacao": "ok",
        "texto": "McDonald's Corporation é uma rede multinacional estadunidense de fast food, fundada em 1940 como um restaurante operado por Richard e Maurice McDonald, em San Bernardino, Califórnia, Estados Unidos. Eles rebatizaram seu negócio como uma barraca de hambúrguer e mais tarde transformaram a empresa em uma franquia, com o logotipo Arcos Dourados sendo introduzido em 1953 em uma unidade em Phoenix, Ariz\n[…]\nEm 1955, Ray Kroc, um empresário, ingressou na empresa como agente de franquia e passou a comprar a rede dos irmãos McDonald. A empresa tinha sua sede anterior em Oak Brook, Illinois, mas mudou sua sede global para Chicago em junho de 2018. Também é uma empresa imobiliária por meio da propriedade de todos os restaurantes.\n[…]\nOs irmãos Richard e Maurice McDonald abriram o primeiro McDonald's na 1398 North E Street na West 14th Street em San Bernardino, Califórnia, em 15 de maio de 1940. Os irmãos introduziram o \"Sistema de Serviço Speedee\" em 1948, colocando em uso expandido os princípios do fast food que seu predecessor White Castle havia colocado em prática mais de duas décadas antes. O mascote original do McDonald's era um chapéu de chef em cima de um hambúrguer, conhecido como \"Speedee\".\n[…]\nKroc e os irmãos McDonald lutaram pelo controle do negócio, conforme documentado na autobiografia de Kroc. Em 1961, ele comprou a participação dos irmãos McDonald na empresa e iniciou a expansão mundial da empresa. A venda custou a Kroc cerca de 2,7 milhões de dólares, uma quantia enorme naquela época. O restaurante de San Bernardino acabou sendo demolido em 1971 e o local foi vendido para a rede Juan Pollo em 1998 e serve como sede da empresa e como um museu do McDonald's e da Rota 66.\n[…]\nNo início de 2023, o McDonald's abriu seu primeiro restaurante totalmente automatizado em Fort Worth, Texas.\n[…]\nMaDonal, restaurante no Iraque que copia muitas características do McDonald's\n[…]\nMcDonald's Portugal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Lego",
      "descricao": "Marca dinamarquesa de brinquedos de blocos de montar plásticos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em qual pequena cidade dinamarquesa o carpinteiro Ole Kirk Christiansen fundou a empresa que virou a Lego?",
    "resposta": "Billund",
    "distratores": [
      "Copenhague",
      "Aarhus",
      "Odense"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lego_Group",
      "https://en.wikipedia.org/wiki/Billund,_Denmark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lego_Group",
        "situacao": "ok",
        "texto": "Lego A/S, also known as the Lego Group, is a Danish construction toy manufacturer and media company based in Billund. It manufactures Lego-branded toys, consisting mostly of interlocking acrylonitrile butadiene styrene (ABS) plastic and rubber bricks. The Lego Group has also built several amusement parks around the world, each known as Legoland, and operates numerous retail stores.\n[…]\nThe Lego company was founded in 1932 by Ole Kirk Christiansen, a carpenter whose primary business of producing household goods had suffered due to the Great Depression. Initially producing wooden toys, the company later developed a system of interlocking bricks. Manufacturing of plastic Lego bricks began in Denmark in 1947. After a fire in the woodworking department, Ole's son, Godtfred, decided to stop the production of wooden toys and solely focus on plastic products and the Lego system.\n[…]\nIn 1961, Christiansen built the beginning of Billund Airport to facilitate the sale of Lego toys around the world.\n[…]\nIn 1995, the company's ruling Kristiansen/Christiansen family began running the Lego Group through the Kirkbi investment firm.\n[…]\nThe Lego Group has built eleven amusement parks around the world, each known as Legoland. Each park features large-scale Lego models of famous landmarks and miniature Lego models of famous cities, along with Lego-themed rides. The first Legoland park was built in the Lego Group's home town of Billund in Denmark in 1968. This was followed by Legoland Windsor Resort in Windsor, England, Legoland California in Carlsbad, United States and Legoland Deutschland Resort in Günzburg, Germany.\n[…]\nLego bricks are manufactured using injection moulding. The factories in Monterrey, Nyíregyháza, Jiaxing, and Ho Chi Minh City handle moulding, processing and packaging. The factory in Billund focuses on moulding, while Kladno specialises in processing and packaging."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Billund,_Denmark",
        "situacao": "ok",
        "texto": "Billund (Danish pronunciation: [ˈpiˌlɔnˀ]) is a town in Jutland, Denmark. With a population of 7,446 (as of 1 January 2026), Billund is the second largest town in Billund Municipality, behind the municipal seat of Grindsted. It is located approximately 13 kilometers (8.1 miles) east of Grindsted and 27 kilometers (17 miles) west of Vejle.\n[…]\nIn 1916, Ole Kirk Christiansen, who later founded The Lego Group, bought Billund Machine Joinery and Carpentry Business from master carpenter Steffen Pedersen, who had originally founded it in 1895. The business constructed houses during the summer and produced furniture in the winter. He invested in the town, creating a new dairy and the Skjoldbjerg church a few miles south of town.\n[…]\nIn 1924, after his house and workshop burned down, Kirk Christiansen built a house at Hovedgaden in Billund with two stone lions placed at the entrance. Due to the impact of the Great Depression, people in the town were unable to afford to build houses, so in 1932, he began producing utility items such as ironing boards, stepladders and miniature toys. The toys became the main product of the business and in 1934, he named the toy factory \"Lego\".\n[…]\nSince it was founded in 1932, The Lego Group has been based in Billund. Its headquarters, offices and factory are all situated in the town, close to Legoland. Historically the prosperity of the town has been closely tied with the success of the company. When Godtfred Kirk Christiansen took over The Lego Group as managing director in 1957 due to his father's illness, the company experienced continued international and economic growth over several decades.\n[…]\nGodtfred Kirk Christiansen (1920 in Billund – 1995) the managing director of The Lego Group from 1957 to 1979\n[…]\nWeather forecast Billund, Denmark weather-atlas.com\n[…]\nBillund travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Lego_Group",
        "situacao": "ok",
        "texto": "LEGO Group  é uma empresa familiar dinamarquesa com sede em Billund, na Dinamarca. É mais conhecido pela fabricação de brinquedos da marca Lego, que consistem principalmente em blocos de montar de plástico interligados.\n[…]\nO primeiro parque temático LEGO foi construído em 1968, na mesma Billund que viu o produto nascer. Para a confecção da cidade do LEGO foram utilizados mais de 55 milhões de peças, que formam diferentes tipos de estruturas, figuras e esculturas. Mais de 31 milhões de visitantes de todo o mundo já visitaram este parque desde a sua inauguração.\n[…]\nDesde o final da década de 1990 a empresa Lego começou a investir na diversificação da sua produção de brinquedos agregando os jogos eletrônicos e outras atividades.\n[…]\nEm 2009, a Lego, em parceria com a Alcatel, lançou um telefone celular desmontável. O seu proprietário pode alterar-lhe a aparência, trocando a parte externa, exatamente igual às pequenas peças do brinquedo. Em 2018, foi criado um carro, cópia do modelo Bugatti Chiron, feito de mais de 1 milhão de peças de Lego. Ela conta com uma armação de ferro para sustentar o peso das peças em si, cerca de 1.500 kg, e o de um motorista humano, e as rodas também são as mesmas usadas na versão real do Chiron.\n[…]\nUma série animada gerada por computador baseada em Lego Ninjago: Masters of Spinjitzu começou em 2011 e outra baseada em Legends of Chima começou em 2013. A também foi anunciada uma série de televisão da cidade de Lego .\n[…]\nHá também a revista Lego Club e a Brickmaster, que foram descontinuadas em 2011.\n[…]\nA Kabooki, uma empresa dinamarquesa fundada em 1993, produz roupas com a marca \"Lego Wear\", sob licença do Grupo Lego.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Lego",
      "descricao": "Marca dinamarquesa de brinquedos de blocos de montar plásticos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os bonequinhos da Lego, de cabeça amarela e mãos em forma de garra, foram lançados em que década?",
    "resposta": "Década de 1970",
    "distratores": [
      "Década de 1950",
      "Década de 1960",
      "Década de 1980"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lego_minifigure"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lego_minifigure",
        "situacao": "ok",
        "texto": "A Lego minifigure, often simply referred to as a Lego figure or a minifig, is a small plastic articulated figurine made of special Lego bricks produced by Danish building toy manufacturer The Lego Group. They were first produced in 1978 and have been a success, with over 4 billion produced worldwide as of 2020. Minifigures are usually found within Lego sets, although they are also sold separately \n[…]\nVarious stop motion animated films and television series are made using Lego minifigures.\n[…]\nIn January 2012, a Lego minifigure carrying a Canadian flag was sent up to the stratosphere and garnered worldwide attention.\n[…]\nThe Adult Swim series Robot Chicken, Lego minifigures were used in various Lego skits of the show.\n[…]\nLego minifigures were featured in Pixar's Toy Story 3 and the Toy Story Toons short Hawaiian Vacation.\n[…]\nThe 2014 episode of The Simpsons, \"Brick Like Me\", featuring Lego minifigure versions of the characters in a Lego version of Springfield.\n[…]\nThe Collectible Minifigures (later renamed to Lego Minifigures) theme, introduced on 5 March 2010, is a set of individually packaged \"blind bag\" minifigures. Each series consists of approximately 16 new and exclusive minifigures, with a random assortment of 60 polybags per box. A new series is released every three to four months, with some having a theme (e.g. monsters or masquerade) and others including a wide variety of minifigs.\n[…]\nSeveral blogs publish \"feel guides\" to help collectors figure out which minifigures are inside the opaque package. The minifigures can be based on fictional archetypes, history, or jobs, sports, life styles and hobbies (i.e. Punk Rocker, Dino Tracker, Caveman). All CMF minifigures come with a Lego \"stand\". Most CMF come with an (often unique) accessory and many have uniquely printed body parts.\n[…]\nTimeline of Lego"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Havaianas",
      "descricao": "Marca brasileira de sandálias de borracha lançada em 1962 pela Alpargatas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As sandálias de borracha Havaianas foram inspiradas no zori, um chinelo tradicional de qual país?",
    "resposta": "Japão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Havaianas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Havaianas",
        "situacao": "ok",
        "texto": "Havaianas (stylized in all lowercase) is a Brazilian brand of flip-flop sandals created and patented in 1962. The brand was founded by Brazilian manufacturer Alpargatas S.A.\n[…]\nInspired by the hybrid Hawaiian and Japanese zori sandals popularized in Hawaii, there are claims that Havaianas were the first mass-produced flip-flops made out of rubber, but this claim is false, the first mass-produced flip-flops made of rubber, were produced in Hawaii in the late 1920’s or early 1930’s and is possibly where the creators of the Havaiana brand got the idea.\n[…]\nThe popularity of Havaianas is generalized in Brazil and the brand controls 80% of the Brazilian rubber slippers market. The brand was featured in promotional campaigns with celebrities such as Jennifer Aniston, Kelly Slater, and in  haute couture runways of fashion designers such as Jean Paul Gaultier, Saint Laurent, and Dion Lee. They are among the most sold rubber flip-flop sandals in the world, with about 200 million pairs sold every year in over 100 countries.\n[…]\nThe hallmark of Havaianas's success is innovation. Creative styles with various colors were manufactured in addition to closed-toed sandals for customers who live in cooler climates. Sandals with embellishments, like Swarovski crystals were also integrated in the new styles to be used for fashion shows and to be worn by models on runways. Another necessity was to invest greatly in sales and advertising of the shoes.\n[…]\nThe usage of these techniques has reached people from all classes and from different areas across the globe. Millions of people wear Havaianas, whether it be in the form of flip-flops, apparel, or accessories."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Havaianas",
        "situacao": "ok",
        "texto": "Havaianas é uma marca brasileira de sandálias de borracha produzidas pela Alpargatas, uma empresa da Itaúsa, proprietária de empresas como Itaú Unibanco e Dexco. A marca, que possui participação de 80% no mercado brasileiro de chinelos de borracha, comercializa cerca de 210 milhões de sandálias anualmente, dos quais 10% para mais de 100 países dos cinco continentes, podendo ser encontrada em mais \n[…]\nAs vendas da sandália de borracha Havaianas, produto de sucesso da Alpargatas, já representam metade do faturamento da companhia, que no ano passado foi de 1,6 bilhão de reais. O investimento em marketing da marca, de 12% a 13% do faturamento, tem mantido a Havaianas em trajetória de crescimento. O percurso para a sandália ganhar status de marca fashion foi longo. Ele começou a ser traçado em 1994, quando a marca estava em crise, com queda de vendas.\n[…]\nA ideia para o produto foi inspirada nas Zori, sandálias japonesas feitas de palha de arroz ou madeira lascada e que são usadas com os quimonos. Em 8 de junho de 1962, foram lançadas as sandálias brasileiras feitas de borracha. O primeiro modelo é o mais tradicional: branco com tiras e laterais da base azuis. Não possuíam um atrativo visual, porém, eram demasiado baratas. Com o fator preço favorecendo o mercado, em menos de um ano a Vespasiano produzia mais de 13 mil pares por dia.\n[…]\nO grande público das Havaianas foi, durante trinta anos, uma classe financeiramente desfavorecida que a comprava em mercados de bairro. Assim, as Havaianas ficaram conhecidas como \"chinelo de pobre\". Tentando mudar esta ideia, a companhia lança em 1991 o modelo Havaianas Sky, com cores fortes e calcanhar mais alto, dando a ideia de que pertencia a um público de classe mais alta. Seu preço também é mais elevado que o das tradicionais.\n[…]\nZōri\n[…]\nHavaianas no Facebook\n[…]\nHavaianas no Twitter\n[…]\nHavaianas no YouTube\n[…]\nHavaianas no Instagram",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Microsoft",
      "descricao": "Empresa americana de software fundada em 1975 por Bill Gates e Paul Allen."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Antes de se mudar para a região de Seattle, a Microsoft foi fundada em 1975 em qual cidade americana?",
    "resposta": "Albuquerque",
    "distratores": [
      "Phoenix",
      "Denver",
      "São Francisco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Microsoft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation is an American multinational technology conglomerate headquartered in Redmond, Washington. The company became influential in the rise of personal computers through software like Windows and has since expanded into areas such as Internet services, cloud computing, artificial intelligence and video gaming among others.\n[…]\nAllen worked on a simulator for the Altair while Gates developed the interpreter, and it worked flawlessly when they demonstrated it to MITS in March 1975 in Albuquerque, New Mexico. MITS agreed to distribute it, marketing it as Altair BASIC. Gates and Allen established Microsoft on April 4, 1975, with Gates as CEO, and Allen suggested the name \"Micro-Soft\", short for micro-computer software.\n[…]\nDuring the COVID-19 pandemic, Microsoft's president, Brad Smith, announced that it had donated an initial batch of supplies, including 15,000 protection goggles, infrared thermometers, medical caps, and protective suits, to healthcare workers in Seattle, with further aid to come.\n[…]\nMicrosoft was the first company to participate in the PRISM surveillance program, according to leaked NSA documents obtained by The Guardian and The Washington Post in June 2013, and acknowledged by government officials following the leak. The program authorizes the government to secretly access data of non-US citizens hosted by American companies without a warrant. Microsoft has denied participation in such a program.\n[…]\nOn March 20, 2025, before an event at Seattle's Great Hall with Brad Smith and Steve Ballmer, protestors projected \"Microsoft powers genocide\" on the wall. Subsequently, two employees, software engineers Ibtihal Aboussad and Vaniya Agrawal, interrupted AI executive Mustafa Suleyman at a speaking event on April 4, 2025, in protest at the company's support of Israel.\n[…]\nMicrosoft Enterprise Agreement"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Microsoft",
        "situacao": "ok",
        "texto": "Microsoft Corporation (NASDAQ: MSFT) é uma corporação transnacional de tecnologia dos Estados Unidos com sede em Redmond, Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais. Entre seus produtos de software mais conhecidos estão as linhas de sistemas operacionais Windows e a rede social LinkedIn, a linha de ap\n[…]\nA Microsoft foi fundada por Bill Gates e Paul Allen em 4 de abril de 1975 para desenvolver e vender interpretadores BASIC para o Altair 8800. A empresa posteriormente iria dominar o mercado de sistemas operacionais de computadores pessoais com o MS-DOS, em meados da década de 1980, seguido pelo Microsoft Windows. A oferta pública inicial da empresa, em 1986, e o subsequente aumento no preço de suas ações, tornou bilionários e milionários cerca de um terço dos 12 mil funcionários da Microsoft.\n[…]\nA Microsoft foi fundada em 1975 por Bill Gates e Paul Allen. O primeiro produto desenvolvido pela empresa foi uma versão do interpretador BASIC, para o computador Altair 8800 da MITS. Em 1976 é lançado o Microsoft FORTRAN, para computadores baseados em CP/M.\n[…]\nEm 1980, a IBM planejava lançar seu computador pessoal com o sistema CP/M, mas as negociações com a Digital Research falham e a IBM procura a Microsoft para desenvolver o seu sistema operacional. Sem ter um sistema para entregar, a Microsoft acerta um contrato não exclusivo de licenciamento com a IBM e procura a Seattle Computers para comprar o seu sistema Q-DOS.\n[…]\nA Microsoft comprou a divisão mobile da Nokia por cerca de US$ 7,2 bilhões (R$ 17 bilhões) e nomeou a divisão Microsoft Lumia.[carece de fontes]?\n[…]\nEm 2007, é eleita a melhor subsidiária da Microsoft Internacional e volta a ser eleita melhor empresa para se trabalhar em Portugal.\n[…]\nLista de ferramentas e serviços da Microsoft\n[…]\nMicrosoft Most Valuable Professional",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Ferrari",
      "descricao": "Fabricante italiana de carros esportivos fundada por Enzo Ferrari, com o símbolo do cavalo empinado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em qual pequena cidade italiana, perto de Modena, fica desde os anos quarenta a fábrica da Ferrari?",
    "resposta": "Maranello",
    "distratores": [
      "Sant'Agata Bolognese",
      "Turim",
      "Imola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ferrari",
      "https://en.wikipedia.org/wiki/Maranello"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ferrari",
        "situacao": "ok",
        "texto": "Ferrari S.p.A. (; Italian: [ferˈraːri]) is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947. Ferrari became a public company in 1960, and from 1963 to 2014, it was a subsidiary of Fiat S.p.A. It was sp\n[…]\nThough the new facility was nonetheless bombed twice, Ferrari remains in Maranello to this day.\n[…]\nIn the 1950s and 1960s, clients often personalized their vehicles as they came straight from the factory. This philosophy added to the mystique of the brand at the time. Every Ferrari that came out of Maranello could be built to an individual customer's specification.\n[…]\nFerrari formalized this concept with its earlier Carrozzeria Scaglietti programme. The options offered here were more typical such as racing seats, rearview cameras, and other special trim. In late 2011, Ferrari announced a significant update of this philosophy. The Tailor Made programme allows clients to work with designers in Maranello to make decisions at every step of the process. Through this program almost any trim, any exterior colour or any interior material is possible.\n[…]\nFor many years, rosso corsa ('racing red') was the required colour of all Italian racing cars. It is also closely associated with Ferrari: even after livery regulations changed, allowing race teams to deviate from their national colours, Scuderia Ferrari continued to paint its cars bright red, as it does to this day.\n[…]\nFerrari also runs a museum, the Museo Ferrari in Maranello, which displays road and race cars and other items from the company's history.\n[…]\nScuderia Ferrari\n[…]\nAdler, Dennis, Ferrari: The Road from Maranello. Random House, 2006. ISBN 978-1-4000-6463-2.\n[…]\nFerrari Special Projects listing on Coachbuild.com\n[…]\nBusiness data for Ferrari:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maranello",
        "situacao": "ok",
        "texto": "Maranello (Modenese: Maranèl) is a city of Italy in the province of Modena, in the region of Emilia-Romagna, 18 km from Modena, with a population of 17,504 as of 2017. It is known worldwide as the home of Ferrari and the Formula One racing team, Scuderia Ferrari. Maranello was also home to coachbuilding firm Carrozzeria Scaglietti, owned by Ferrari.\n[…]\nMaranello has been the location of the Ferrari factory since the early 1940s. During World War II, Enzo Ferrari transferred to Modena, ending its ownership of Alfa Romeo. Initially, Ferrari's factory in Maranello was shared with Auto Avio Costruzioni, a machine tool manufacturing business started by Enzo to tide the company over while Alfa Romeo's ban on Enzo Ferrari making cars bearing the Ferrari name was in force.\n[…]\nMaranello also houses the Museo Ferrari public museum, collecting sports cars, racing cars and trophies.\n[…]\nAmerican Haas F1 Team's design team is based in Maranello. Haas's design team is led by technical director Andrea De Zordo, who oversees Haas's R&D functions, including the Aerodynamics and CFD departments. Since the team's inception, Haas has maintained a close technical collaboration with Maranello based Scuderia Ferrari. Haas's current car utilizes, among other things, a Ferrari power unit, steering, and transmission.\n[…]\nMaranello's new town library was designed jointly by Andrea Maffei and Isozaki. The library opened in 2012.\n[…]\nMaranello is the starting point of the annual Italian Marathon, which finishes in nearby Carpi.\n[…]\nThe Maranello track has a yearly marathon going around the Ferrari track and factory, with having different lengths for different levels.\n[…]\nMichael Schumacher (1969), German F1 racer and honorary citizen of Maranello\n[…]\nEdinson Cavani (1987), Uruguayan footballer of Italian descent from Maranello"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ferrari",
        "situacao": "ok",
        "texto": "Ferrari S.p.A. é uma fabricante italiana de automóveis desportivos de luxo sediada em Maranello, na Itália. Fundada em 1939 por Enzo Ferrari (1898–1988), a empresa construiu seu primeiro carro, o Auto Avio Costruzioni 815, em 1940, adotou o nome atual em 1945 e começou a produzir sua atual linha de automóveis de rua em 1947. A Ferrari tornou-se uma empresa de capital aberto em 1960 e, de 1963 a 20\n[…]\nDurante a guerra, a empresa de Enzo fabricou motores de aeronaves e máquinas-ferramentas para as forças armadas italianas; esses contratos eram lucrativos e proporcionaram grande quantidade de capital à nova companhia. Em 1943, diante da ameaça de bombardeios dos Aliados, a fábrica foi transferida para Maranello. Embora as novas instalações tenham sido bombardeadas duas vezes, a Ferrari permanece em Maranello até hoje.\n[…]\nDesde 2019, a Scuderia Ferrari participa de corridas virtuais.\n[…]\nNas décadas de 1950 e 1960, os clientes frequentemente personalizavam seus veículos ainda durante a fabricação. Essa filosofia contribuiu para a aura de mistério da marca na época. Cada Ferrari que saía de Maranello podia ser construída de acordo com as especificações individuais do comprador.\n[…]\nPaolina de Biancoli, mãe de Francesco, sugeriu que Ferrari adotasse o cavalo como amuleto de boa sorte; ele aceitou, e o Cavalo Rampante foi utilizado pela primeira vez por sua equipe de corrida em 1932, aplicado a um Alfa Romeo 8C sobre um fundo amarelo-canário — a “cor de Módena”, cidade natal de Enzo. A versão retangular do Cavalo Rampante é utilizada desde 1947, quando o Ferrari 125 S, também o primeiro carro esportivo da marca, tornou-se o primeiro a ostentá-la.\n[…]\nA empresa também mantém o Museo Ferrari, em Maranello, que expõe automóveis de rua e de corrida, além de outros objetos relacionados à história da companhia.\n[…]\nEnzo Ferrari (1939–1971)\n[…]\nIndústria automotiva na Itália\n[…]\nFerrari Challenge\n[…]\nScuderia Ferrari",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Melitta",
      "descricao": "Empresa alemã de café e filtros de papel fundada por Melitta Bentz em Dresden, em 1908."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Para coar café em 1908, Melitta Bentz furou uma panela de latão e usou uma folha de papel tirada de onde?",
    "resposta": "Do caderno escolar do filho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Melitta_Bentz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Melitta_Bentz",
        "situacao": "ok",
        "texto": "Amalie Auguste Melitta Bentz (née Liebscher, January 31, 1873 – June 29, 1950) was a German inventor and entrepreneur known for revolutionizing the process of coffee brewing with her invention of the coffee filter. Her company, Melitta, has long been a significant leader in the coffee industry. Her contributions enhanced coffee preparation methods and influenced coffee culture around the world.\n[…]\nBentz established the Melitta company with her husband Hugo in 1908. At first, the couple produced coffee filters at home; Hugo handled production and Melitta led marketing efforts. After World War I, the company expanded rapidly. In 1932, the company introduced cone-shaped filters, thus enhancing and refining the brewing process step-by-step.\n[…]\n\"Overlooked No More: Melitta Bentz, Who Invented the Coffee Filter.\" The New York Times, 2018-09-05, www.nytimes.com/2018/09/05/obituaries/melitta-bentz-overlooked.html.\n[…]\nOesterreich, Hans-Günther [in German] (1958). Bentz, Horst Wolfgang (ed.). Geschichte und Geschichten um Melitta - geröstet, gemahlen und gefiltert - zum 50jährigen Bestehen der Melitta-Werke Bentz & Sohn in Minden [History and stories around Melitta - roasted, grinded and filtered - at the 50th anniversary of Melitta-Werke Bentz & Sohn in Minden] (in German) (1 ed.). Bremen, Germany: Melitta-Werke Bentz & Sohn / Druckerei Otto-Behrens.\n[…]\nSchwenke, Philipp (2021-09-04). \"Wie Melitta Bentz den Kaffeefilter erfand und damit einen Weltkonzern schuf - Melitta Bentz – Erfinderin, Gründerin, Phantom\". Wirtschaft & Politik > History & Crime. Capital. Pionierinnen der Wirtschaft (in German). Vol. 2021, no. 9. Retrieved 2024-01-27.\n[…]\n\"The invention of the coffee filters - Melitta Bentz, mother of filter coffee: Inventor and entrepreneur\". German Patent and Trade Mark Office (DPMA). 2023-01-27. Archived from the original on 2023-01-29. Retrieved 2023-01-29."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Melitta_Bentz",
        "situacao": "ok",
        "texto": "Amalie Auguste Melitta Bentz (nascida Amalie Auguste Melitta Liebscher; Dresden, 31 de janeiro de 1873 — Porta Westfalica, 29 de junho de 1950) foi a inventora do filtro de café em 1908.\n[…]\nMelitta então experimentou diversas técnicas, quando teve uma ideia bem simples e genial: ela fez pequenos furos no fundo de uma caneca de latão para transformá-lo em um tipo de peneira, depois utilizou um pedaço de papel borrão do caderno escolar do seu filho Willy e assim, inventa o primeiro filtro de café. Sem resíduos e mais fraco, o café ganhou o gosto da família. Melitta decidiu criar seu próprio negócio.\n[…]\nO Serviço Imperial de Patentes da Alemanha lhe concedeu uma em 20 de junho de 1908 e em 15 de dezembro do mesmo ano a companhia entrou com um pedido de registro comercial. Depois de contratar um ferreiro para manufaturar os equipamentos, a empresa vendeu 1.200 filtros de café em uma feira em Leipzig, em 1909.\n[…]\nSeu marido presidia a empresa, chamada de \"Bentz & Sohn,\" em 1930. Melitta transferiu suas ações da empresa para Horst e Willy em 1932, mas se manteve na empresa, assegurando-se que os empregados fossem bem tratados, recebessem bônus de Natal, tendo aumentado os dias de férias de 6 para 15 dias e reduzindo a semana de trabalho para 5 dias. Ela acabou criando o Sistema “Melitta Aid”, um fundo social da empresa para os empregados.\n[…]\nMelitta faleceu em 29 de junho de 1950, aos 77 anos. Na época, a empresa valia cerca de 4.7 milhões de marcos alemães, cerca de 2.4 bilhões de euros hoje.\n[…]\nOs bisnetos de Melitta, Thomas e Stephen Bentz, ainda controlam a empresa, cuja sede ainda é em Minden, contando com 3 mil empregados em cinquenta filiais pelo mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Chiclete de Thomas Adams",
      "descricao": "Goma de mascar feita de chicle, produzida em Nova York por Thomas Adams a partir de 1871."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O chicle, base das gomas de mascar de Thomas Adams, é o látex extraído de qual árvore das Américas?",
    "resposta": "Sapotizeiro",
    "distratores": [
      "Seringueira",
      "Mogno",
      "Pau-brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicle",
      "https://en.wikipedia.org/wiki/Manilkara_zapota"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicle",
        "situacao": "ok",
        "texto": "Chicle () is a latex traditionally used in making chewing gum and other products. It is collected from several species of Mesoamerican trees in the genus Manilkara, including M. zapota, M. chicle, M. staminodella, and M. bidentata.\n[…]\nThe tapping of the gum is similar to the tapping of latex from the rubber tree: zig-zag gashes are made in the tree trunk and the dripping gum is collected in small bags. It is then boiled until it reaches the correct thickness. Locals who collect chicle are called chicleros.\n[…]\nThe word chicle comes from the Nahuatl word for the latex, tzictli [ˈt͡sikt͡ɬi], which can be translated as \"sticky stuff\". Alternatively, it may have come from the Mayan word tsicte. Chicle was well known to the Aztecs and to the Maya, and early European settlers prized it for its subtle flavor and high sugar content.\n[…]\nThe word is used in the Americas and Spain to refer to chewing gum, chicle being a common term for it in Spanish and chiclete being the Portuguese term (both in Brazil and in parts of Portugal; other areas also use the term chicla). The word has also been exported to other languages such as Greek, which refers to chewing gum as τσίχλα (tsichla).\n[…]\nThe American Chicle Company, incorporated in June 1899, was the first prominent commercial user of this ingredient in the production of chewing gum. Its brand name, Chiclets, is derived from the word chicle.\n[…]\nBy the 1960s, most chewing gum companies had switched from using chicle to polybutadiene, which was cheaper to manufacture. Only a handful of small gum companies still use chicle, including Gud Gum, Glee Gum, Simply Gum, and Tree Hugger Gum."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Manilkara_zapota",
        "situacao": "ok",
        "texto": "Manilkara zapota, commonly known as sapodilla (Spanish: [ˌsapoˈðiʝa]), sapote, chicozapote, chico, chicoo, chicle, naseberry, nispero, or soapapple, among other names, is an evergreen tree native to southern Mexico and Central America. An example of natural occurrence is in coastal Yucatán, in the Petenes mangroves ecoregion, where it is a subdominant plant species. It was introduced to the Philip\n[…]\nA sapodilla tree can live up to one hundred years. It can grow to more than 30 m (98 ft) tall with a trunk diameter of up to 1.5 m (5 ft); but the average height of cultivated specimens is usually between 9 and 15 m (30 and 49 ft) with a trunk diameter not exceeding 50 cm (20 in). It is wind-resistant and the bark is rich in a white, gummy latex called chicle.\n[…]\nThe fruit is a large berry, 4–8 cm (2–3 in) in diameter. An unripe fruit has a firm outer skin and when picked, releases white latex (chicle) from its stem. A fully ripened fruit has saggy skin and does not release chicle when picked. Inside, its flesh ranges from a pale yellow to an earthy brown color with a grainy texture akin to that of a well-ripened pear. Each fruit contains one to six seeds.\n[…]\nThe fruit is edible and a favorite in the tropical Americas. Chicle from the bark is used to make chewing gum."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chicle",
        "situacao": "ok",
        "texto": "Chicle (do náuatle tzictli) designa o látex ou seiva da árvore Sapota zapotilla, originária da América Central e América do Sul, conhecida no Brasil como sapoti, com o qual se fazia originariamente a goma de mascar (chiclete).\n[…]\nO sapotizeiro também produz uma fruta comestível do tamanho de uma ameixa, com uma polpa marrom translúcida.\n[…]\nO chicle é extraído dessa árvore do mesmo modo que o látex da borracha, ou seja, são feitos com um canivete, uma série de cortes em \"V\" no seu tronco, um acima do outro mas alinhados por um corte ao prumo (os cortes anteriores já cicatrizados são escarificados).\n[…]\nA árvore exsuda por estes cortes pequenas gotas de seiva que descem pelos cortes e se depositam em pequenos recipientes fixados no tronco, logo abaixo. O \"chiclero\" faz esta sangria em uma porção de árvores pela manhã, fixando nelas os recipientes, que à tarde coleta, reunindo a seiva bruta.\n[…]\nAtualmente há outras formas de se produzir artificialmente o chicle, a partir da seiva de outras árvores e até mesmo a partir de derivado de petróleo. Às respectivas massas, então, são adicionados corantes, fragrâncias e essências de sabor.\n[…]\nO hábito de mascar chicle remonta às culturas pré-colombiana dos astecas e maias e os colonos europeus logo o adquiriram em virtude do agradável sabor e aroma característicos e do alto grau de açúcar que a seiva contém.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Corn Flakes",
      "descricao": "Flocos de milho torrados criados no fim do século dezenove no sanatório de Battle Creek, em Michigan."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Antes de usar o milho, os irmãos Kellogg obtiveram por acaso os primeiros flocos de cereal com qual grão?",
    "resposta": "Trigo",
    "distratores": [
      "Aveia",
      "Arroz",
      "Cevada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Corn_flakes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Corn_flakes",
        "situacao": "ok",
        "texto": "Corn flakes, or cornflakes, is a breakfast cereal made from toasting flakes of corn (maize). Originally invented as a breakfast food to counter indigestion, it has become a popular food item in the American diet and in the United Kingdom where over 6 million households consume them.\n[…]\nThe cereal, originally made with wheat, was created by Will Kellogg in 1894 for patients at the Battle Creek Sanitarium where he worked with his brother John Kellogg who was the superintendent. The breakfast cereal proved popular among the patients and Kellogg subsequently started what became the Kellogg Company to produce corn flakes for the wider public. A patent for the process was granted in 1896, after a legal battle between the two brothers.\n[…]\nWith corn flakes becoming popular in the wider community, a previous patient at the sanitarium, C. W. Post, started to make rival products. Kellogg continued to experiment with various ingredients and different grains. In 1928, he started to manufacture Rice Krispies, another successful breakfast cereal.\n[…]\nThe first mascot of Kellogg's Corn Flakes was a female figure, The Sweetheart of the Corn, who appeared on the first boxes. In 1957 Cornelius The Rooster or Corny, created by Leo Burnett advertising agency, made his debut first on boxes of Corn Flakes and later in television commercials. In early commercials, he would speak the catchphrase \"Wake up, up, up to Kellogg's Cornflakes!\" Dallas McKennon and Andy Devine voiced him. Later, he stopped talking and simply crowed.\n[…]\nThere is a disputed claim that corn flakes were intended to suppress sexual desire. Kellogg did promote a \"simple, pure and unstimulating diet\" for that reason, but the marketing and patent on corn flakes made no mention of it."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flocos_de_milho",
        "situacao": "ok",
        "texto": "Flocos de milho (em inglês:  corn flakes) são um cereal matinal produzido pela torrefação de flocos feitos de grãos de milho. Esta preparação do cereal foi criada por John Harvey Kellogg em 1894, como alimento que achava que seria saudável para os pacientes do Sanatório de Battle Creek, no Michigan, que dirigia. O cereal matinal veio a revelar-se popular entre os pacientes e a Kellogg's Company (K\n[…]\nJohn, Will, para produzir flocos de milho para o público em geral. Uma patente para o processo de fabrico foi atribuída em 1896.\n[…]\nCom os flocos de milho a tornarem-se muito populares na comunidade norte-americana, um paciente anterior no sanatório, C. W. Post, começou a fabricar produtos rivais. Kellogg continuou a experimentar e vários ingredientes foram adicionados à receita e diferentes grãos foram utilizados. Em 1928, começou a fabricar Rice Krispies, outro cereal matinal de sucesso, à base de arroz.\n[…]\nA herança ocidental dos flocos de milho remonta ao século XIX, quando um grupo de adventistas começou a desenvolver um novo alimento que atendesse aos padrões de sua dieta vegetariana estrita. Os membros do grupo experimentaram numerosos grãos, incluindo trigo, aveia, arroz, cevada e, claro, milho. O Dr. John Harvey Kellogg, diretor do Battle Creek Sanitarium em Battle Creek e adventista, usou essas receitas para seus pacientes, como parte de um regime vegetariano rigoroso.\n[…]\nA ideia surgiu por acaso, quando o Dr. Kellogg e seu irmão, Will Keith Kellogg, deixaram um pouco de trigo cozido em repouso, enquanto resolviam alguns problemas do sanatório. Ao retornarem, descobriram que o trigo tinha sido alterado, mas como o seu orçamento era rigoroso, decidiram continuar com o processo forçando-o com rolos e esperando obter folhas finas e longas de massa. Para sua surpresa, o que conseguiram foram pequenos flocos, que serviram aos seus pacientes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Senhor Cabeça de Batata",
      "descricao": "Brinquedo americano de batata com peças de rosto encaixáveis, lançado em 1952 pela Hasbro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1952, o Senhor Cabeça de Batata vinha sem cabeça de plástico, só com olhos, nariz e boca. Onde as crianças espetavam essas peças?",
    "resposta": "Em batatas e legumes de verdade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mr._Potato_Head"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mr._Potato_Head",
        "situacao": "ok",
        "texto": "Mr. Potato Head is a toy produced by Hasbro since 1952. It consists of a plastic model of a potato \"head\" to which a variety of plastic parts can attach; typically ears, eyes, shoes, hat, nose, mustache, pipe (1952–1987), pants, glasses, and mouth.\n[…]\nMr. Potato Head was invented and manufactured by toymaker George Lerner in 1949, but was first distributed by Hasbro in 1952. It was the first toy advertised on television and has remained in production since. In its original form, Mr. Potato Head was offered as separate plastic parts with pushpins to be affixed to a real potato or other vegetable.\n[…]\nIn 1985, Mr. Potato Head received four postal votes in the run for mayor of Boise, Idaho in the \"most votes for Mr. Potato Head in a political campaign\" as verified by Guinness World Records. In November 1987, Mr. Potato Head became \"Spokespud\" for the annual Great American Smokeout and surrendered his pipe to Surgeon General C. Everett Koop in Washington, D.C. In 1989, Hasbro replaced the attached bendable arms with the removable plastic arms. In the 1990s, the League of Women Voters used Mr.\n[…]\nIn the same year, Hasbro introduced a line called \"Sports Spuds\" with a generic plastic potato (smaller than the standard size) customized to a wide variety of professional sports teams. In 2010, Hasbro received a Toy & Game Innovation Award from Chicago's Museum of Science and Industry. In the same year, Hasbro tweaked the Mr. and Mrs. Potato Head body design to give it a slimmer appearance, commonly referred to as \"Active Adventures\". As of 2012, sales of Mr.\n[…]\nIn 2020, Hasbro announced a sustainable version of the toy known as Mr. Potato Head Goes Green. This version was made from plant-based plastic derived from sugarcane.\n[…]\nPotato gun"
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
    "indice": 45,
    "ancora": {
      "nome": "Guinness",
      "descricao": "Cerveja escura irlandesa produzida desde o século dezoito na cervejaria de St. James's Gate, em Dublin."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Que instrumento musical aparece como símbolo no rótulo da cerveja irlandesa Guinness?",
    "resposta": "Harpa",
    "distratores": [
      "Gaita de foles",
      "Violino",
      "Flauta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guinness"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guinness",
        "situacao": "ok",
        "texto": "Guinness ( ) is a stout that originated in the brewery of Arthur Guinness at St. James's Gate, Dublin, Ireland, in the 18th century. It is now owned by the British multinational alcoholic beverage maker Diageo. It is one of the most successful alcohol brands worldwide, brewed in almost 50 countries, and available in over 120. Sales in 2011 amounted to 850,000,000 litres (190,000,000 imp gal; 220,0\n[…]\nFollowing the COVID-19 pandemic and pub closures, Guinness produced a \"Looks Like Guinness\" advert in anticipation of pubs reopening in 2021.\n[…]\nAs of 2024, Guinness is the official beer of the Premier League.\n[…]\nGuinness began retailing in India in 2007.\n[…]\nThe Guinness Storehouse at St. James's Gate Brewery in Dublin is the most popular tourist attraction in Ireland  (attracting over 1.7 million visitors in 2019) where a self-guided tour includes an account of the ingredients used to make the stout and a description of how it is made. Visitors can sample the smells of each Guinness ingredient in the Tasting Rooms, which are coloured with a unique lighting design that emits Guinness's gold and black branding.\n[…]\nThe Guinness Book of Records started as a Guinness marketing giveaway, based on an idea of its then Managing Director, Sir Hugh Beaver. Its holding company, Guinness World Records Ltd, was owned by Guinness plc, subsequently Diageo, until 2001.\n[…]\nThe 2025 drama series House of Guinness deals with the growth of the business in 19th century Ireland.\n[…]\nGuinness Storehouse website\n[…]\nHow Guinness saved Ireland during WWII\n[…]\nSelection of Guinness commercials including Noitulove, Dancing Man, Surfer Archived 23 July 2011 at the Wayback Machine\n[…]\nMoriarty, Philip. \"Guinness\". Sixty Symbols. Brady Haran for the University of Nottingham.\n[…]\nLighting design of The Tasting Rooms in Guinness Storehouse\n[…]\nDocuments and clippings about Guinness in the 20th Century Press Archives of the ZBW"
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
    "indice": 46,
    "ancora": {
      "nome": "Peugeot",
      "descricao": "Fabricante francesa de automóveis, originada de uma empresa familiar de produtos de aço do século dezenove."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Muito antes dos carros, a família Peugeot já fabricava, no século dezenove, qual utensílio de cozinha que leva a marca até hoje?",
    "resposta": "Moedor de pimenta",
    "distratores": [
      "Panela de pressão",
      "Abridor de latas",
      "Ralador de queijo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peugeot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot (UK:  , US:  ; French: [pøʒo] ) is a French automobile brand owned by Stellantis.\n[…]\nTheir familiarity with the Peugeot engine was the basis of the famed Miller racing engine, which later developed into the Offenhauser.\n[…]\nAs of 2021, the separate Peugeot-family-owned firm Peugeot Saveurs, previously named PSP Peugeot, continues to make and market pepper grinders, salt grinders, corkscrews for wine bottles, cutlery, tableware, and other kitchen- and table-service equipment.\n[…]\nThe company has produced household mills since the 19th century. Its first coffee mill, the R model, was launched in 1840, followed by large cast-iron grocers’ mills in 1855. Peugeot introduced the Z model table pepper mill in 1874, which remains in production.\n[…]\nThe product range has expanded to include coffee grinders, nutmeg mills, chilli grinders, and spice mills for seeds such as flax or sesame, as well as wine accessories such as corkscrews, decanters, champagne coolers, and vacuum pumps. Peugeot Saveurs also manufactures glazed ceramic ovenware under the “Appolia” brand line.\n[…]\nProduction remains centered in Quingey, in the Franche-Comté region of France, where most of its mills are manufactured. The firm has been awarded the French Entreprise du Patrimoine Vivant (Living Heritage Company) label in recognition of its traditional expertise. Peugeot Saveurs reports annual production of more than two million mills and exports to over 80 countries. The company employs around 185 people, most of them at the Quingey facility.\n[…]\nPeugeot Concours Design\n[…]\nThe Peugeot Museum at Sochaux\n[…]\nPeugeot Mills"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot ([inglês RU: ˈpɜːʒəʊ], [inglês EUA: p(j)uːˈʒoʊ], francês: [pøʒo]) é uma fabricante de automóveis francesa fundada em 1810 por Armand Peugeot, pertencente à Stellantis. É a marca de automóveis mais antiga do mundo.\n[…]\nO maior sucesso da Peugeot no mundo foi o Peugeot 206, estando entre os carros mais vendidos da história. No Brasil chegou várias vezes a aparecer entre os 10 mais vendidos no ranking da Anfavea, foi o primeiro modelo a ser fabricado no Brasil, quando inaugurou sua fábrica em Porto Real (RJ) em abril de 2000.\n[…]\nA família Peugeot, que desde 1810 tinham um moinho hidráulico familiar, vem envolvida em vários tipos de negócios desde o século XVIII. Em 1842, entraram no ramo alimentício produzindo moinhos de café, depois disso começaram a produzir armações para vestidos, guarda-chuvas, fundição de aço, ferramentas e utensílios domésticos, em 1882 começaram a fabricar bicicletas e motos.\n[…]\nPor volta de 1850, a marca teve a necessidade de distinguir as diferentes ferramentas que fabricava, e por isso registou três logotipos distintos: uma mão (para os produtos de 3ª categoria), uma lua crescente (2ª categoria) e um leão (1ª categoria), apenas o leão sobreviveu com o passar do tempo. A marca do leão foi registrada em 1858 pelos irmãos Peugeot (Jules e Emile) e feita pelo artesão Julien Blazer, para representar força, resistência e dinamismo.\n[…]\n1985 — Peugeot 205 Turbo 16 — Ganha campeonato (Pilotos e Carros)\n[…]\n1986 — Peugeot 205 Turbo 16 — Ganha campeonato (Pilotos e Carros)\n[…]\n2000 — Peugeot 206 WRC — Ganha o campeonato (Pilotos e Carros)\n[…]\n2001 — Peugeot 206 WRC — Ganha o campeonato (Somente Carros)\n[…]\n2002 — Peugeot 206 WRC — Ganha o campeonato (Pilotos e Carros)\n[…]\nSite Oficial da Peugeot — Portugal\n[…]\nPeugeot",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A primeira câmera Kodak, de 1888, já vinha carregada de fábrica com filme para quantas fotos?",
    "resposta": "Cem",
    "distratores": [
      "Doze",
      "Vinte e quatro",
      "Trinta e seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kodak",
      "https://en.wikipedia.org/wiki/George_Eastman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "The Eastman Kodak Company, referred to simply as Kodak ( ), is an American public company that produces various products related to its historic roots in film photography. The company is headquartered in Rochester, New York, and is incorporated in New Jersey. It is best known for photographic film products, which it brought to a mass market for the first time.\n[…]\nIn 1888, the Kodak camera was patented by Eastman. It was a box camera with a fixed-focus lens on the front with no viewfinder; two V shape silhouettes at the top aided in aiming in the direction of the subject. At the top, it had a rotating key to advance the film, a pull-string to set the shutter, and a button on the side to release it, exposing the celluloid film. Inside, it had a rotating bar to operate the shutter.\n[…]\nKodak encountered several challenges from rival patents for film and cameras. These began while Eastman was still developing his first camera, when he was forced to pay inventor David Houston for a license to his pre-existing patents. A major lawsuit for patent infringement would come from rival film producer Ansco. Inventor Hannibal Goodwin had filed his own patent for nitrocellulose film in 1887, before the one owned by Kodak, but his was initially denied by the patent office.\n[…]\nShortly after the announcement, Polaroid filed a complaint for patent infringement in the U.S. District Court District of Massachusetts, beginning a lawsuit which would last a decade. Polaroid Corporation v. Eastman Kodak Company was decided in Polaroid's favor in 1985, and after a short period of appeals, Kodak was forced to exit the instant camera market immediately in 1986. On October 12, 1990, Polaroid was awarded $909 million in damages.\n[…]\nEastman Kodak. Story of the Kodak Camera (1948)\n[…]\nKodak Camera Catalog Info at Historic Camera. Archived May 24, 2013, at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Eastman",
        "situacao": "ok",
        "texto": "George Eastman  (July 12, 1854 – March 14, 1932) was an American innovator and entrepreneur who founded the Eastman Kodak Company and helped to bring the photographic use of roll film into the mainstream. After a decade of experiments in photography, he patented and sold a roll film camera, making amateur photography accessible to the general public for the first time. Working as the treasurer and\n[…]\nIn 1885, he received a patent for a film roll and then focused on creating a camera to use the rolls. In 1888, he patented and released the Kodak camera (\"Kodak\" being a word Eastman created). It was sold loaded with enough roll film for 100 exposures. When all the frames had been exposed, the photographer mailed the camera back to the Eastman company in Rochester, along with $10.\n[…]\nThe separation of photo-taking from the difficult process of film development was novel and made photography more accessible to amateurs than ever before, and the camera was immediately popular with the public. By August 1888, Eastman was struggling to meet orders, and he and his employees soon had several other cameras in development. The rapidly-growing Eastman Dry Plate Company was reorganized as the Eastman Company in 1889, and then incorporated as Eastman Kodak in 1892.\n[…]\nKodak's growth was sustained during the 20th century by innovations in film and cameras, including the Brownie camera, which was marketed to children. Eastman took interest in color photography in 1904, and funded experiments in color film production for the next decade. The resulting product, created by John Capstaff, was a two-color process named Kodachrome. Later, in 1935, Kodak would release the more famous second Kodachrome, the first marketed integral tripack film.\n[…]\nU.S. patent 388,850 \"Camera\", filed March 1888, issued September 1888.\n[…]\nIn 1934, the George Eastman Monument at Kodak Park (now Eastman Business Park) was unveiled."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kodak",
        "situacao": "ok",
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nA onipresença da empresa era tal que o seu slogan \"momento Kodak\" entrou no léxico comum para descrever um evento pessoal que merecia ser registrado para a posteridade. Kodak começou a ter dificuldades financeiras no final da década de 1990, como resultado do declínio nas vendas de filmes fotográficos e sua lentidão na mudança para a fotografia digital, apesar de desenvolver a primeira câmera digital independente.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Em 1975, o engenheiro Steven Sasson construiu um protótipo pioneiro de câmera digital trabalhando para qual empresa?",
    "resposta": "Kodak",
    "distratores": [
      "Sony",
      "Polaroid",
      "Canon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Steven_Sasson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Steven_Sasson",
        "situacao": "ok",
        "texto": "Steven J. Sasson is an American electrical engineer and the inventor of the self-contained (portable) digital camera. He joined Kodak shortly after his graduation from engineering school and retired from Kodak in 2009.\n[…]\nSteven Sasson developed a portable, battery operated, self-contained digital camera at Kodak in 1975. It weighed 8 pounds (3.6 kg) and used a Fairchild CCD image sensor having only 100 × 100 pixels (0.01 megapixels). The images were digitally recorded onto a cassette tape, a process that took twenty-three seconds per image. His camera took images in black and white.\n[…]\nIn 1977, Kodak filed a patent application on some features of Sasson's prototype camera. Titled \"electronic still camera\", the patent listed Sasson and Gareth Lloyd as co-inventors. The issued patent, U.S. patent number 4,131,919, claims an arrangement that allows the CCD to be read out quickly (\"in real time\") into a temporary buffer of random-access memory and then written to storage at the lower speed of the storage device.\n[…]\nSome modern digital cameras still use such an arrangement, which had been described in an earlier MIT patent that also stored digital images using a digital tape recorder, but employed a vidicon sensor rather than a CCD. Sasson's prototype camera was first disclosed publicly in a May, 2000 presentation by Kodak which described the evolution of digital cameras.\n[…]\nHis work on digital cameras began in 1975 with a broad assignment from his supervisor at Eastman Kodak Company, Gareth A. Lloyd: to attempt to build an electronic camera using a commercially available charge-coupled device (CCD). The resulting camera invention was awarded the U.S. patent number 4,131,919."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Steven_Sasson",
        "situacao": "ok",
        "texto": "Steven J. Sasson (Brooklyn, Nova Iorque, 4 de julho de 1950) é um engenheiro estadunidense, que construiu a primeira câmera digital em 1975 na Kodak.\n[…]\nSasson estudou engenharia elétrica no Instituto Politécnico Rensselaer, onde obteve os graus de bacharel em 1972 e mestre em 1973. Em seguida trabalhou na Eastman Kodak, onde Gareth A. Lloyd o conduziu para a construção de uma câmera com sensor CCD. Tinha massa de 3,6 kg, era transportável e comportava apenas 10.000 pixel (de acordo com um chip-CCD Fairchild). A imagem era em preto e branco, armazenada em uma fita cassete e projetada em um televisor.\n[…]\nSasson recebeu em 26 de dezembro de 1978 a patente U.S. 4.131.919.\n[…]\nErste Digitalkamera, Der Mann, der die Zukunft erfand, Kommentierte Fotostrecke, einestages, 27. Oktober 2015",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Subaru",
      "descricao": "Montadora japonesa de automóveis cujo logotipo mostra um grupo de estrelas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas estrelas aparecem no logotipo da montadora japonesa Subaru?",
    "resposta": "Seis",
    "distratores": [
      "Cinco",
      "Sete",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Subaru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Subaru",
        "situacao": "ok",
        "texto": "Subaru (スバル;  or ; Japanese pronunciation: [sɯꜜbaɾɯ]) is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries), the twenty-first largest automaker by production worldwide in 2017.\n[…]\nMost of its modern products use highly recyclable materials throughout the vehicle, in the engine, transmission, suspension and elsewhere in each vehicle leaving Subaru with a 97.3% recycling ratio rate for their end-of-life vehicles.\n[…]\nSubaru Bighorn (1988–1993, rebadged Isuzu Trooper)\n[…]\nSubaru Justy (1994–2010, 2016–present: rebadged Suzuki Cultus (1994–2003), Suzuki Ignis (2003–2007), Daihatsu Boon (2007–2010) and Daihatsu Thor (2016–present). Nameplate originally used from 1984 to 1994.)\n[…]\nSubaru Traviq (1999–2005, rebadged Opel Zafira)\n[…]\nSubaru Dex (2006–2012, rebadged Toyota bB)\n[…]\nSubaru Dias Wagon (2009–present, rebadged Daihatsu Atrai)\n[…]\nSubaru Lucra (2010–2015, rebadged Daihatsu Tanto Exe)\n[…]\nSubaru Trezia (2010–2016, rebadged Toyota Ractis)\n[…]\nSubaru Pleo (2010–2018 as a rebadged Daihatsu Mira, nameplate in use since 1998)\n[…]\nSubaru Stella (2010–2023, 2025–present: rebadged Daihatsu Move)\n[…]\nSubaru Pleo Plus (2012–present, rebadged Daihatsu Mira e:S)\n[…]\nSubaru Sambar (2012–present as a rebadged Daihatsu Hijet, nameplate in use since 1961)\n[…]\nSubaru Chiffon (2016–present, rebadged Daihatsu Tanto)\n[…]\nSubaru Rex (2022–present, rebadged Daihatsu Rocky)\n[…]\nProdrive Motorsport team selected by Subaru to run its World Rally Team\n[…]\nSubaru Technica International (also known as STI)\n[…]\nList of Subaru engines\n[…]\nList of Subaru transmissions\n[…]\nSubaru EA engine series\n[…]\nSubaru EF engine series\n[…]\nSubaru EJ engine series\n[…]\nSubaru FB engine series\n[…]\nSubaru CB engine\n[…]\nSubaru at the Internet Movie Cars Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Subaru",
        "situacao": "ok",
        "texto": "A Subaru (em escrita japonesa katakana: スバル),  é uma empresa automobilística japonesa, subsidiária do grupo industrial Fuji Heavy Industries Co., Ltd. (FHI). A norte-americana General Motors já teve uma participação minoritária de 20% em suas ações.\n[…]\nCriada em 23 de fevereiro de 1953, foi uma das primeiras empresas automobilísticas do Japão. \"Subaru\", que é o nome, em japonês, do grupo de estrelas Plêiades, está representado no logotipo da empresa. Apesar de ser uma empresa pequena no ramo automobilístico, quando comparada com muitas de suas competidoras, a Subaru vem sendo uma empresa altamente lucrativa há vários anos.\n[…]\nSubaru BRZ\n[…]\nSubaru Crosstrek\n[…]\nA SUBARU desde 1965 que produz motores boxer ou de cilindros horizontalmente opostos montado longitudinalmente, sendo uma das poucas marcas no mundo a utilizar motores com esta disposição.\n[…]\nA SUBARU decidiu aplicar este princípio ao diferencial central do seu sistema SymmetricalAWD, com acoplamento viscoso de forma a limitar os níveis de potência transferidos, possibilitando o controlo da distribuição de potência verificada entre as rodas da frente e traseiras.\n[…]\nA disposição longitudinal do motor Boxer SUBARU, permite que este seja montado à frente do eixo da frente, com a caixa de velocidades imediatamente a seguir, deixando mais espaço para uma fixação da suspensão com maior nível de rigidez, consequentemente mais eficaz. Daqui resulta uma melhor performance em curvas a velocidades elevadas e com fortes forças laterais Gs, uma direcção precisa a velocidades baixas e médias, além do conforto proporcionado pelo facto do curso da suspensão ser maior.\n[…]\nSubaru Global (em inglês)\n[…]\nSite Subaru Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Bic Cristal",
      "descricao": "Caneta esferográfica descartável de corpo transparente e sextavado, lançada na França pela empresa de Marcel Bich."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A caneta esferográfica Bic Cristal, do empresário francês Marcel Bich, foi lançada em que década?",
    "resposta": "Década de 1950",
    "distratores": [
      "Década de 1930",
      "Década de 1940",
      "Década de 1960"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bic_Cristal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "The Bic Cristal (stylised as BiC Cristal and also known as the Bic Biro) is an inexpensive, disposable ballpoint pen mass-produced and sold by Société Bic of Clichy, Hauts-de-Seine, France. It was introduced in 1950 and is the best-selling pen in the world, with the 100 billionth sold in September 2006. It has become the archetypal ballpoint pen and is considered ubiquitous, to the extent that the\n[…]\nBetween 1949 and 1950, the Bic Cristal was designed by the Décolletage Plastique design team at Société PPA. Bich invested in Swiss technology capable of shaping metal down to 0.01 millimetres (0.00039 in), which could produce a stainless steel one-millimetre (0.039 in) sphere which allowed ink to flow freely. Bich developed an improved ink with a viscosity that neither leaked nor clogged and, under a ballpoint pen patent licensed from Bíró, launched the Cristal in December 1950.\n[…]\nBich invested heavily in advertising, hiring poster designer Raymond Savignac in 1952, and won the French Oscar de la publicité award for advertising. In 1953, advertising executive Pierre Guichenné advised Bich to shorten his family name to Bic as an easy-to-remember, globally adaptable trade name for the pen, which fit in with product branding trends of the post-war era. Early Bic advertisements in France referred to the Cristal as the \"Atomic pen\".\n[…]\nIn 1959 Bich brought the pen to the American market: the Bic pen was soon selling at 29 cents (equivalent to $3.20 in 2025) with the slogan \"writes first time, every time.\" In 1965, the French Ministry of Education approved the Bic Cristal for use in classrooms.\n[…]\nOne Kenyan manufacturer of the Cristal reportedly lost 100 M KES (approx. 1.3 M USD at 2009 exchange rate) to cheap copies from China, forcing them to negotiate more affordable licensing from Bic.\n[…]\nOfficial website  of the Bic Cristal at Société BIC\n[…]\nBic Cristal at the Museum of Modern Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "A BIC Cristal (estilizada como BiC Cristal e também conhecida como Bic Biro) é uma caneta esferográfica de baixo custo, produzida em larga escala e vendida pela Société Bic, com sede em Clichy, Hauts-de-Seine, na França. Lançada em 1950, é a caneta mais vendida do mundo, tendo atingido a marca de cem bilhões de unidades vendidas em setembro de 2006.\n[…]\nEla se tornou o modelo clássico de caneta esferográfica e é considerada onipresente, a ponto de o Museu de Arte Moderna (MoMA) incluí-la permanentemente em sua coleção. Seu formato hexagonal e design imitam um lápis padrão, e ela é comercializada em seis tipos de ponta e 18 cores ao redor do mundo.\n[…]\nAo passar dos anos, a caneta ganhou várias variações como uma versão em miniatura, 7 variações de pontas que vão da ultrafina, cuja ponta tem 0,7 milímetros até a Cristal Bold, cuja ponta chega a 1,6 milímetros, além de uma variação com tinta com várias essências e também edições temáticas e limitadas. Desde 1991 há um pequeno orifício na ponta da tampa da caneta para que no caso de uma ingestão acidental, a tampa não sufoque a vítima, permitindo a passagem de ar.\n[…]\nPara muitos no mundo ocidental é o padrão da caneta esferográfica. As pessoas chamavam de simplesmente uma caneta de Biro. Marcel Bich fixou os direitos de autor à caneta esferográfica, inventada por László Biró em 1950. Ele escolhera Bic como nome como uma variação mais curta de seu próprio nome porque temeu que os norte-americanos pudessem desmoralizar com o palavrão Bitch (vadia, em inglês).\n[…]\nA caneta Bic Cristal faz parte da coleção permanente do MoMa, museu da arte moderna de Nova Iorque.\n[…]\nPágina oficial da empresa em português",
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
