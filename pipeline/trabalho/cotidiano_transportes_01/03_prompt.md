Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Transportes** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Ônibus",
      "descricao": "Veículo rodoviário de grande porte para o transporte coletivo de passageiros."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra ônibus vem do latim omnibus. O que ela quer dizer?",
    "resposta": "Para todos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bus",
        "situacao": "ok",
        "texto": "A bus (contracted from omnibus, with variants multibus, motorbus, autobus, etc.) is a motor vehicle that carries significantly more passengers than an average car or van, but fewer than the average rail transport. It is most commonly used in public transport, but is also in use for charter purposes, or through private ownership. Although buses typically carry between 30 and 100 passengers, some bu\n[…]\nBefore the development of powered vehicles, urban public transport used horse-drawn omnibuses.\n[…]\nThe first mechanically propelled omnibus appeared on the streets of London on 22 April 1833. Steam carriages were much less likely to overturn, they travelled faster than horse-drawn carriages, they were much cheaper to run, and caused much less damage to the road surface due to their wide tyres.\n[…]\nSir William first proposed the idea in an article to the Journal of the Society of Arts in 1881 as an \"...arrangement by which an ordinary omnibus...would have a suspender thrown at intervals from one side of the street to the other, and two wires hanging from these suspenders; allowing contact rollers to run on these two wires, the current could be conveyed to the tram-car, and back again to the dynamo machine at the station, without the necessity of running upon rails at all.\"\n[…]\nIn Siegerland, Germany, two passenger bus lines ran briefly, but unprofitably, in 1895 using a six-passenger motor carriage developed from the 1893 Benz Viktoria. Another commercial bus line using the same model Benz omnibuses ran for a short time in 1898 in the rural area around Llandudno, Wales.\n[…]\nThe first mass-produced bus model was the B-type double-decker bus, designed by Frank Searle and operated by the London General Omnibus Company—it entered service in 1910, and almost 3,000 had been built by the end of the decade. Hundreds of them saw military service on the Western Front during the First World War."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%94nibus",
        "situacao": "ok",
        "texto": "Ônibus (português brasileiro) ou autocarro (português europeu), camioneta, machimbombo (no português moçambicano e português angolano), é um veículo motorizado terrestre designado para o transporte de pessoas. Ônibus podem ter a capacidade de carregar até 300 passageiros. O tipo mais comum de ônibus é o ônibus simples ou convencional, usado em grande parte dos centros urbanos para o transporte púb\n[…]\nA designação dos veículos de transporte de passageiros varia de país para país e até mesmo de região para região. Várias das designações têm origem da palavra \"Ónibus / Ômnibus\" (\"para todos\" em latim). Este termo foi usado, desde o século XIX, para designar um tipo de transporte coletivo de passageiros puxado a cavalo, usado nas grandes cidades do mundo, com caraterísticas e funções muito semelhantes aos transportes coletivos atuais.\n[…]\nNo Brasil, os transportes coletivos de passageiros são designados \"ônibus\", termo originado diretamente em \"omnibus\".\n[…]\nO termo ônibus parece vir do local onde os carros faziam o ponto final, diante de uma chapelaria, cujo dono, Omnes, em um jogo de palavras com seu próprio nome, denominou Omnes Omnibus, \"tudo para todos\". O nome pareceu bastante apropriado para o novo transporte coletivo e por associação foi adotado por este. Em outras versões da história, porém, ônibus simplesmente decorre de voiture omnibus (\"carro para todos\").\n[…]\nÉ o tipo mais popular e mais utilizado. Também chamado de ônibus simples, ônibus básico ou ônibus convencional, esse tipo de ônibus possui apenas um andar e uma unidade rígida (ao contrário dos articulados e biarticulados), de dois a quatro eixos. Podem apresentar uma ou mais portas para a entrada de passageiros, e a posição do motor pode variar de frontal, central e traseira. De todos os tipos, é o mais compacto, mais barato de se adquirir e manter.\n[…]\nMicro-ônibus\n[…]\nÔnibus de trânsito rápido\n[…]\nÔnibus articulado\n[…]\nParada de ônibus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Toyota",
      "descricao": "Montadora japonesa de automóveis fundada por Kiichiro Toyoda em 1937."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A família que fundou a montadora se chamava Toyoda, mas a marca virou Toyota. Que superstição explica a troca?",
    "resposta": "Oito traços, número da sorte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toyota"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toyota",
        "situacao": "ok",
        "texto": "Toyota Motor Corporation (Japanese: トヨタ自動車株式会社, Hepburn: Toyota Jidōsha kabushiki gaisha; IPA: [toꜜjota], English: , commonly known as simply Toyota) is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is the largest automobile manufacturer in the world, producing about 10 mill\n[…]\nAs of 2026, the Toyota Motor Corporation produces vehicles under four brands: Century, Daihatsu, Lexus and the namesake Toyota.\n[…]\nAlso in 1981, Eiji Toyoda stepped down as president and assumed the title of chairman. He was succeeded as president by Shoichiro Toyoda, the son of the company's founder. Within months, Shoichiro started to merge Toyota's sales and production organizations, and in 1982 the combined companies became the Toyota Motor Corporation. The two groups were described as \"oil and water\" and it took years of leadership from Shoichiro to successfully combine them into one organization.\n[…]\nAisin, another member of the Toyota Group of companies, uses the same Toyota wordmark logo to market its home-use sewing machines. Aisin was founded by Kiichiro Toyoda after he founded the Toyota Motor Corporation. According to Aisin, he was so pleased with the first sewing machine, he decided to apply the same Toyota branding as his auto business, despite the companies being independent from each other.\n[…]\nToyota Motor North America is headquartered in Plano, Texas, and operates as a holding company for all operations of the Toyota Motor Corporation in Canada, Mexico, and the United States. Toyota's operations in North America began on October 31, 1957, and the current company was established in 2017 from the consolidation of three companies: Toyota Motor North America, Inc., which controlled Toyota's corporate functions; Toyota Motor Sales, U.S.A., Inc.\n[…]\nToyota Cup\n[…]\nToyota model codes"
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
    "indice": 3,
    "ancora": {
      "nome": "Subaru",
      "descricao": "Marca japonesa de automóveis cujo logotipo traz seis estrelas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O logotipo da montadora japonesa Subaru tem estrelas porque o nome da marca designa qual conjunto de estrelas?",
    "resposta": "Plêiades",
    "distratores": [
      "Três Marias",
      "Cruzeiro do Sul",
      "Ursa Maior"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Subaru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Subaru",
        "situacao": "ok",
        "texto": "Subaru (スバル;  or ; Japanese pronunciation: [sɯꜜbaɾɯ]) is the automobile manufacturing division of Japanese transportation conglomerate Subaru Corporation (formerly known as Fuji Heavy Industries), the twenty-first largest automaker by production worldwide in 2017.\n[…]\nSubaru is the transliteration of the Japanese すばる, meaning the Pleiades star cluster M45, or the \"Seven Sisters\" (one of whom tradition says is invisible — hence only six stars in the Subaru logo), which in turn inspires the logo and alludes to the companies that merged to create FHI.\n[…]\nKenji Kita, CEO of Fuji Heavy Industries at the time, wanted the new company to be involved in car manufacturing and soon began plans for building a car with the development code-name P-1. Kita canvassed the company for suggestions about naming the P1, but none of the proposals were appealing enough. In the end he gave the company a Japanese name that he \"had been cherishing in his heart\": Subaru, which is the Japanese name for the Pleiades star cluster.\n[…]\nSubaru launched an animation series Wish Upon the Pleiades, also known as Hōkago no Pleiades (放課後のプレアデス, Hōkago no Pureadesu; lit. 'After School Pleiades'), developed jointly with Gainax. The 4-part mini episode series was released on YouTube on 1 February 2011. It featured a magical girl plot with Subaru as a leading protagonist.\n[…]\nAn excerpt from the Subaru website stated \"In 2006, SIA was awarded the United States Environmental Protection Agency's Gold Achievement Award as a top achiever in the agency's WasteWise program to reduce waste and improve recycling.\" The website also stated that \"It also became the first U.S. automotive assembly plant to be designated a wildlife habitat.\"\n[…]\nSubaru CB engine\n[…]\nSubaru at the Internet Movie Cars Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Subaru",
        "situacao": "ok",
        "texto": "A Subaru (em escrita japonesa katakana: スバル),  é uma empresa automobilística japonesa, subsidiária do grupo industrial Fuji Heavy Industries Co., Ltd. (FHI). A norte-americana General Motors já teve uma participação minoritária de 20% em suas ações.\n[…]\nCriada em 23 de fevereiro de 1953, foi uma das primeiras empresas automobilísticas do Japão. \"Subaru\", que é o nome, em japonês, do grupo de estrelas Plêiades, está representado no logotipo da empresa. Apesar de ser uma empresa pequena no ramo automobilístico, quando comparada com muitas de suas competidoras, a Subaru vem sendo uma empresa altamente lucrativa há vários anos.\n[…]\nSubaru BRZ\n[…]\nSubaru Crosstrek\n[…]\nA disposição longitudinal do motor Boxer SUBARU, permite que este seja montado à frente do eixo da frente, com a caixa de velocidades imediatamente a seguir, deixando mais espaço para uma fixação da suspensão com maior nível de rigidez, consequentemente mais eficaz. Daqui resulta uma melhor performance em curvas a velocidades elevadas e com fortes forças laterais Gs, uma direcção precisa a velocidades baixas e médias, além do conforto proporcionado pelo facto do curso da suspensão ser maior.\n[…]\nA SUBARU utiliza a designação SymmetricalAWD para promover uma distinção clara entre o seu sistema e outros sistemas de tracção permanente às 4 rodas. O sistema SymmetricalAWD proporciona uma elevada performance de condução, sendo claramente diferente dos outros sistemas de tracção às 4 rodas de outros fabricantes os quais têm vindo a ser desenvolvidos com a finalidade de ultrapassar obstáculos ou transitar em vias com mau pavimento ou com piso escorregadio.\n[…]\nSubaru Global (em inglês)\n[…]\nSite Subaru Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Volvo",
      "descricao": "Fabricante sueca de automóveis fundada em 1927 em Gotemburgo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em latim, o nome da montadora sueca Volvo significa o quê?",
    "resposta": "Eu rolo",
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
    "indice": 5,
    "ancora": {
      "nome": "Bonde",
      "descricao": "Veículo sobre trilhos para transporte urbano de passageiros, popular no Brasil a partir do século dezenove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Rio de Janeiro do século dezenove, os carros sobre trilhos puxados por burros ganharam o nome de bonde por causa de quê?",
    "resposta": "Dos bilhetes, chamados bonds",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bonde"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bonde",
        "situacao": "ok",
        "texto": "Um elétrico (português europeu) ou bonde (português brasileiro), trâmuei ou tranvia é um meio de transporte público tradicional em grandes cidades da Europa como Varsóvia, Basileia, Zurique, Helsinque, Lisboa e Porto, ou das Américas, como São Francisco, Rio de Janeiro e Toronto. Movimenta-se sobre carris (trilhos) que, em geral, encontram-se instalados nas partes mais antigas das cidades, uma vez\n[…]\nOutro tipo de bonde é o funicular, que pretendia reduzir os custos e as dificuldades com os animais. Os elétricos eram puxados ao longo da via férrea por um contínuo movimento de cabo a uma velocidade constante, que puxava individualmente os elétricos individuais e os soltava para parar. O poder de mover o cabo era fornecido de um local afastado. O primeiro funicular nos Estados Unidos foi testado em São Francisco, na Califórnia, em 1873.\n[…]\nOs teleféricos são especialmente eficazes em cidades montanhosas, porque o cabo puxa o carro até ao morro num ritmo forte e constante, ao contrário das motores a vapor de baixa potência, ou, pior ainda, um carro puxado por cavalos.\n[…]\nOs elétricos de São Francisco, embora significativamente em número reduzido, continuam a desempenhar uma função de transporte regular, além de serem uma atração turística. Uma única linha também sobrevive em Wellington, na Nova Zelândia (reconstruída em 1979, mas ainda chamado de Wellington Cable Car).\n[…]\nSiemens, posteriormente, projetou o seu próprio método de coleção atual, a partir de um fio, chamado curva do coletor, em Thorold, em Ontário, inaugurado em 1887, sendo considerado de bastante sucesso na época. Esta linha mostrou-se bastante versátil, tendo sido uma das primeiras instalações totalmente funcionais de elétricos, exigindo apoio ao escalar o Niágara e dois meses de inverno, quando a hidroeletricidade não estava disponível. Ela continuou em serviço na sua forma original até 1950.\n[…]\n«Museu do Carro Eléctrico»"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "RMS Titanic",
      "descricao": "Transatlântico britânico da White Star Line que afundou em 1912 após colidir com um iceberg."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Titanic levava antes do nome as letras erre, eme, esse, sigla inglesa que indicava que ele também transportava o quê?",
    "resposta": "Correspondência do correio real",
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_Mail_Ship",
      "https://en.wikipedia.org/wiki/Titanic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_Mail_Ship",
        "situacao": "ok",
        "texto": "Royal Mail Ship (sometimes Steam-ship or Steamer), usually seen in its abbreviated form RMS, is the ship prefix used for seagoing vessels that carry mail under contract to the British Royal Mail. The designation dates back to 1840. Any vessel designated as \"RMS\" has the right both to fly the pennant of the Royal Mail when sailing and to include the Royal Mail \"crown\" insignia with any identifying \n[…]\nThe most famous liner with the RMS title was the RMS Titanic.\n[…]\nIn recent years the shift to air transport for mail has left only three ships with the right to the prefix or its variations: RMS Segwun, which serves as a passenger vessel in Gravenhurst, Ontario, Canada; RMV Scillonian III, which serves the Isles of Scilly; and RMS Queen Mary 2. The \"RMS\" prefix was granted to QM2 by Royal Mail when she entered service in 2004 on the Southampton to New York route as a gesture to Cunard's history.\n[…]\nThe less-common designations RMMV for Royal Mail Motor Vessel and RMMS for Royal Mail Motor Ship, were used for a period when RMS was restricted to steam-ships. Motor Vessel and Motor Ship indicated that propulsion was provided by diesel rather than steam.\n[…]\nTitanic Archive Archived 9 July 2011 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic was a British ocean liner that sank in the early hours of 15 April 1912 after striking an iceberg on her maiden voyage from Southampton, England, to New York City. Of the 2,208 passengers and crew aboard, approximately 1,500 died (estimates vary), making the incident one of the deadliest peacetime sinkings of a single ship.\n[…]\nIt has been suggested that during the real event, the entire Grand Staircase was ejected upwards through the dome.\n[…]\nA decidedly unofficial departure was that of a crew member, stoker John Coffey, a Queenstown native who sneaked off the ship by hiding under mail bags being transported to shore. Titanic weighed anchor for the last time at 1:30 pm and departed on the westward journey across the Atlantic.\n[…]\nCarpathia docked at 9:30 pm on 18 April at New York's Pier 54 and was greeted by some 40,000 people waiting at the quayside in heavy rain. Immediate relief in the form of clothing and transportation to shelters was provided by the Women's Relief Committee, the Travelers Aid Society of New York, and the Council of Jewish Women, among other organisations. Many of Titanic's surviving passengers did not linger in New York but headed onwards immediately to relatives' homes.\n[…]\nTitanic conspiracy theories\n[…]\nTitanic in popular culture\n[…]\nSS Atlantic – White Star Line ship lost in 1873 with the greatest loss of life for the company before Titanic\n[…]\nTitanic Historical Society\n[…]\nRMS Titanic Inc. - the salvor-in-possession of the Titanic wreck site\n[…]\nTitanic collected news and commentary at The Guardian\n[…]\nTitanic collected news and commentary at The New York Times\n[…]\nTitanic in Black and White at Library of Virginia\n[…]\nTitanic Footage and Survivors Interviews on YouTube\n[…]\nTitanic Footage: Leaving Belfast – British Pathé on YouTube\n[…]\nRMS Titanic: Fascinating Engineering Facts on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Royal_Mail_Ship",
        "situacao": "ok",
        "texto": "Royal Mail ship ou Royal Mail steamer (significando \"navio\" ou \"vapor do Correio Real\" e, normalmente, abreviado para RMS) é um prefixo usado em navios mercantes britânicos contratados pela Royal Mail (companhia postal nacional do Reino Unido) para transportarem correio.\n[…]\nA designação começou a ser usada em 1840 e foi usada por um grande número de companhias, mas é associada frequentemente com a Cunard Line, a qual licitou com a Royal Mail um grande contrato de transporte e colocou o prefixo tradicional RMS em todos os seus navios. Hoje em dia, continua a usá-lo nos seus navios, entre os quais o RMS Queen Mary 2 e o RMS Queen Elizabeth 2.\n[…]\nO navio mais famoso a usar o prefixo RMS foi o tão conhecido RMS Titanic da White Star Line, que colidiu com um iceberg na noite de 14 de abril de 1912, vindo a naufragar nas primeiras horas do dia 15 de abril.\n[…]\nOs navios ingleses com função hospitalar durante a Primeira Guerra Mundial recebiam o prefixo HMHS (de His Majesty's Hospital Ship, significando Navio Hospital de Sua Majestade).\n[…]\nTecnicamente, um navio usaria o prefixo somente quando fosse contratado para transportar correio, caso contrário, usaria o  prefixo normal SS (de steam ship, significando \"navio a vapor\").\n[…]\nOs navios de pesquisa ingleses recebem o prefixo RRS (Royal Research Ship, Navio de Investigação Real). Até aos anos 1960 este navios eram operados pela Royal Navy, como parte da frota auxiliar.\n[…]\nTitanic Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "14-bis",
      "descricao": "Avião de Alberto Santos-Dumont que voou em Paris em 1906."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O avião com que Santos Dumont voou em Paris, em 1906, se chamava Quatorze Bis. De onde veio esse nome?",
    "resposta": "Foi testado preso ao dirigível número quatorze",
    "fonte": [
      "https://pt.wikipedia.org/wiki/14-bis",
      "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/14-bis",
        "situacao": "ok",
        "texto": "14-bis, também conhecido como Oiseau de Proie (francês para “ave de rapina”), foi um avião construído pelo inventor brasileiro Alberto Santos Dumont que em 12 de novembro de 1906 conquistou o Prêmio Archdeacon e o Prêmio do Aeroclube da França ao realizar um voo de 220 metros em Paris.\n[…]\nNo início do século XX, o desafio da aviação estava dividido em duas frentes: os aeróstatos (mais leves que o ar, como os dirigíveis) e os aeródinos (mais pesados que o ar). Santos Dumont já era uma celebridade mundial por seus voos controlados em dirigíveis, tendo vencido o Prêmio Deutsch de la Meurthe em 1901 com seu dirigível Nº 6.\n[…]\nA concepção do 14-bis é uma síntese de ideias. Sua estrutura celular de biplano foi diretamente inspirada nas pipas-caixa (box kites) do inventor australiano Lawrence Hargrave, conhecidas por sua notável estabilidade aerodinâmica. O nome \"14-bis\" (ou \"14-de novo\") surgiu de sua concepção inicial. Santos Dumont primeiro testou o aeroplano acoplado ao seu dirigível Nº 14 em meados de 1906.\n[…]\nA ideia era que o balão, preenchido com hidrogênio, compensasse o peso da máquina, facilitando os testes de controle e estabilidade. A aeronave era, literalmente, um \"anexo\" do dirigível 14. No entanto, o enorme arrasto aerodinâmico do balão impedia que o avião ganhasse velocidade, tornando o sistema inviável para o voo autônomo.\n[…]\nPrimeiros Saltos (Agosto-Setembro de 1906): Após abandonar o balão Nº 14, Santos Dumont realizou os primeiros testes no solo em Bagatelle. Em 13 de setembro, com o motor de 24 hp, conseguiu um \"salto\" de 7 a 11 metros, que terminou com o trem de pouso danificado. Ele então instalou o motor mais potente de 50 hp e rebatizou a aeronave de Oiseau de Proie.\n[…]\nPBS Nova: Wings of Madness (em inglês) - Documentário sobre a vida de Santos Dumont."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santos-Dumont_14-bis",
        "situacao": "ok",
        "texto": "The 14-bis (French: Quatorze-bis; (Portuguese: Quatorze-bis; English: Fourteen-again, approximating \"14B\"), also known as Oiseau de proie (\"bird of prey\" in French), was a pioneer era, canard-style biplane designed and built by Brazilian aviation pioneer Alberto Santos-Dumont. In 1906, near Paris, the 14-bis made a manned powered flight that was the first to be publicly witnessed by a crowd and al\n[…]\nThe first trials of the aircraft were made on 22 July 1906 at Santos-Dumont's grounds at Neuilly, where it had been assembled. In order to simulate flight conditions, Santos-Dumont attached the aircraft under his latest non-rigid airship, the Number 14, which is why the aircraft came to be known as the \"14-bis\". The aircraft was then transported to the grounds of the Château de Bagatelle in the Bois de Boulogne, where there was more space.\n[…]\nOn the morning of 12 November 1906 the aviation community of France assembled at the Château de Bagatelle's grounds to witness Santos-Dumont's next attempt. As Santos-Dumont allowed the 14-bis to run down the field, a car drove alongside, from which Henry Farman dropped a plate each time he observed the wheels of the aircraft leave the ground or touch down again.\n[…]\nThe Santos-Dumont 14-bis did not use a catapult and ran on wheels located at the back of the aircraft – said to have been adopted by Santos-Dumont for his 14-bis after personally witnessing Traian Vuia's contemporary, four-wheeled aircraft's flight attempts earlier in 1906 in the western suburbs of Paris, not far from the Château de Bagatelle's grounds – with a \"nose-skid\" under the front of the 14-bis' fuselage.\n[…]\nData from Opdycke, French Aeroplanes before the Great War; Gray, The 1906 Santos-Dumont No 14bisGeneral characteristics\n[…]\nGray, Carroll F. (November 2006). \"The 1906 Santos-Dumont No. 14bis\". WWI Aero: The Journal of the Early Aeroplane (194): 4–21. ISSN 0736-198X."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Penny-farthing",
      "descricao": "Biciclo do século dezenove com roda dianteira enorme e roda traseira pequena."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O antigo biciclo de roda dianteira enorme e traseira pequena era chamado em inglês de penny-farthing. A que se referia esse nome?",
    "resposta": "Duas moedas de tamanhos diferentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penny-farthing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penny-farthing",
        "situacao": "ok",
        "texto": "The penny-farthing, also known as a high wheel, high wheeler or ordinary, is an early type of bicycle distinguished by its large front wheel and comparatively small back wheel. It was popular in the 1870s and 1880s, with its large front wheel providing high speeds, owing to its travelling a long distance for every rotation of the wheel. These bicycles had solid rubber tires and as a consequence th\n[…]\nAt the bicycle exhibition at the Pré Catalan in November 1869 the unknown maker Alexandre Moyon exhibited what Le Vélocipède illustré called for the first time a \"grand bicycle\", the French term for a penny-farthing.\n[…]\nThe nephew of one of the men responsible for popularity of the penny-farthing was largely responsible for its demise. James Starley had built the Ariel (spirit of the air) high-wheeler in 1870; but this was a time of innovation, and when chain drives were upgraded so that each link had a small roller, higher and higher speeds became possible without the need for a large front wheel.\n[…]\nThe high-wheeler lives on in the gear inch units used by cyclists in English-speaking countries to describe gear ratios. These are calculated by multiplying the wheel diameter in inches by the number of teeth on the front chain-wheel and dividing by the teeth on the rear sprocket. The result is the equivalent diameter of a penny-farthing wheel.\n[…]\nThe penny-farthing is a symbol of the cities of Sparta, Wisconsin; Davis, California; and Redmond, Washington.\n[…]\nIn 2004, British leukemia patient and charity fundraiser Lloyd Scott (43) rode a penny-farthing across the Australian outback to raise money for a charitable cause.\n[…]\nIn November 2008, Briton Joff Summerfield completed a 22,000 miles (35,000 km) round-the-world trip on a penny-farthing. Summerfield spent two-and-a-half years cycling through 23 countries, visiting locations including the Taj Mahal, Angkor Wat and Mount Everest."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biciclo",
        "situacao": "ok",
        "texto": "O biciclo (também conhecido pelas designações inglesas penny-farthing, high wheel e ordinary) é um tipo de veículo velocípede de duas rodas, semelhante a uma bicicleta, mas caracterizado por contar com uma roda dianteira de dimensões significativamente maiores do que as da roda traseira.\n[…]\nEste estilo de veículo velocipede tornou-se popular depois dos chamados «boneshakers» e antes do desenvolvimento do \"biciclo seguro\", na década de 1880.\n[…]\nEmbora sejam hoje conhecidas, no mundo anglo-saxónico como penny-farthings, este termo provavelmente começou a ser utilizado quando já estavam fora de moda; a primeira referência impressa de que se tem conhecimento consta da edição da Bicycling News de 1891. O termo vem da Inglaterra, por causa das moedas penny e farthing, sendo uma bem maior que a outra, de modo que elas representam a bicicleta de lado. Para a maioria das pessoas elas eram conhecidas simplesmente como bicicletas.\n[…]\nEmbora a moda das penny-farthing tenha durado pouco tempo, estas vieram a tornar-se num símbolo da era Vitoriana, sendo que a sua popularidade coincide com o nascimento do ciclismo desportivo.\n[…]\nO biciclo é um velocipede de mecanismo direto, o que quer dizer que os pedais e pedivelas estão ligados diretamente ao cubo.\n[…]\nUma vez que o biciclo não conta com uma corrente, cassetes de mudanças ou torniquete para poder multiplicar a relação entre os pedais e a roda, a roda principal foi aumentada para que as suas dimensões se aproximassem ao comprimento da perna do ciclista, assegurando assim maior velocidade. Isto fazia com que o ciclista ficasse posicionado praticamente no topo da roda, o que tornava impossível que este conseguisse tocar no chão com os pés, enquanto estava sentado no selim.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mayday",
      "descricao": "Palavra usada internacionalmente no rádio como pedido de socorro por aviões e navios."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O pedido de socorro mayday, usado no rádio por pilotos e marinheiros, imita a pronúncia de uma expressão de qual língua?",
    "resposta": "Francês",
    "distratores": [
      "Inglês",
      "Alemão",
      "Espanhol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mayday"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday is an emergency procedure word used internationally as a distress signal in voice-procedure radio communications.\n[…]\nThe \"mayday\" procedure word was conceived as a distress call in the early 1920s by Frederick Stanley Mockford, officer-in-charge of radio at Croydon Airport, England. He had been asked to think of a word that would indicate distress and would easily be understood by all pilots and ground staff in an emergency. Since much of the air traffic at the time was between Croydon and Le Bourget Airport in Paris, he proposed the term \"mayday\", the phonetic equivalent of the French m'aider.\n[…]\nIf a mayday call cannot be sent because a radio is not available, a variety of other distress signals and calls for help can be used. Additionally, a mayday call can be sent on behalf of one vessel by another; this is known as a mayday relay.\n[…]\n\"Seelonce mayday\" (using an approximation of the French pronunciation of silence) is a demand that the channel only be used by the vessel/s and authorities involved with the distress. The channel may not be used for normal working traffic until \"seelonce feenee\" is broadcast. \"Seelonce mayday\" and \"seelonce feenee\" may only be sent by the controlling station in charge of the distress. The expression \"stop transmitting – mayday\" is an aeronautical equivalent of \"seelonce mayday\".\n[…]\nThe format for the \"seelonce feenee\" is MAYDAY, All stations x3, this is [controlling station] x3, date and time in UTC, distressed vessel's MMSI number, distressed vessel's name, distressed vessel's call sign, SEELONCE FEENEE.\n[…]\nTransport Canada: Radio Distress Procedures Card TP9878"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mayday",
        "situacao": "ok",
        "texto": "Mayday é uma palavra de procedimento de emergência utilizada internacionalmente como sinal de socorro em comunicações de rádio por voz.\n[…]\nA palavra de procedimento \"mayday\" foi concebida como um sinal de socorro no início da década de 1920 por Frederick Stanley Mockford, oficial encarregado do rádio no Aeroporto de Croydon, em Londres. Ele foi solicitado a criar um termo que indicasse perigo e fosse facilmente compreendido por pilotos e equipes de solo em emergências.\n[…]\nComo grande parte do tráfego aéreo na época ocorria na rota entre Croydon e o Aeroporto de Le Bourget, em Paris, ele propôs \"mayday\", o equivalente fonético do francês m'aider.\n[…]\nEmbora não tenha relação com o mês de maio(May em inglês), a expressão funciona como uma forma abreviada de venez m'aider (\"venha me ajudar\"). Apesar de a gramática francesa exigir tecnicamente o termo aidez-moi para uso isolado, a adaptação priorizou a comunicabilidade e o reconhecimento entre os idiomas. Conforme destacado pela revista Superinteressante, o uso de uma expressão em francês com boa sonoridade em inglês foi uma solução prática e eficiente.\n[…]\nApós testes, o sinal foi introduzido em fevereiro de 1923 para voos através do Canal da Mancha, substituindo gradualmente o código Morse SOS nas comunicações por voz, devido à dificuldade de distinguir a letra \"S\" via telefone. Por convenção, a palavra deve ser repetida três vezes (\"mayday, mayday, mayday\") para evitar confusão com termos de sonoridade similar. Em 1927, a Convenção Internacional de Radiotelegrafia de Washington, D.C.\n[…]\nVídeos da National Geographic Mayday! Desastres Aéreos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Nó (unidade)",
      "descricao": "Unidade de velocidade usada na navegação marítima e aérea, equivalente a uma milha náutica por hora."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que a velocidade dos navios é medida em nós?",
    "resposta": "Media-se com uma corda cheia de nós",
    "fonte": [
      "https://en.wikipedia.org/wiki/Knot_(unit)",
      "https://en.wikipedia.org/wiki/Chip_log"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knot_(unit)",
        "situacao": "ok",
        "texto": "The knot () is a unit of speed equal to one nautical mile per hour, exactly 1.852 km/h (approximately 1.151 mph or 0.514 m/s). The ISO standard symbol for the knot is kn. The same symbol is preferred by the Institute of Electrical and Electronics Engineers (IEEE), while kt is also common, especially in aviation, where it is the form recommended by the International Civil Aviation Organization (ICA\n[…]\nThe speeds of vehicles relative to the fluids in which they travel (boat speeds and air speeds) can be measured in knots. For consistency, the speeds of navigational fluids (ocean currents, tidal streams, river currents, and wind speeds) are also measured in knots. Thus, speed over the ground (SOG; ground speed (GS) in aircraft) and rate of progress towards a distant point (\"velocity made good\", VMG) can also be given in knots.\n[…]\nSince 1979, the International Civil Aviation Organization lists the knot as permitted for temporary use in aviation, but no end date to the temporary period has been agreed as of 2024.\n[…]\nKnots tied at a distance of 47 feet 3 inches (14.4018 m) from each other, passed through a sailor's fingers, while another sailor used a 30-second sand-glass (28-second sand-glass is the currently accepted timing) to time the operation. The knot count would be reported and used in the sailing master's dead reckoning and navigation.\n[…]\nThis method gives a value for the knot of 20+1⁄4 inches per second or 1.85166 kilometres per hour. The difference from the modern definition is less than 0.02%.\n[…]\nmetres per knot.\n[…]\nAlthough the unit knot does not fit within the SI system, its retention for nautical and aviation use is important because the length of a nautical mile, upon which the knot is based, is closely related to the longitude/latitude geographic coordinate system. As a result, nautical miles and knots are convenient units to use when navigating an aircraft or ship.\n[…]\nKnot count"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chip_log",
        "situacao": "ok",
        "texto": "A chip log, also called common log, ship log, or just log, is a navigation tool mariners use to estimate the speed of a vessel through  water. The word knot, to mean nautical mile per hour, derives from this measurement method.\n[…]\nMedia related to Category:Logs (ship) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%B3_%28unidade%29",
        "situacao": "ok",
        "texto": "Nó é uma unidade de medida de velocidade equivalente a uma milha náutica por hora, ou seja 1,852 km/h.\n[…]\nUma vez que o nó é, por definição, uma unidade de medida de velocidade que corresponde à distância percorrida em relação ao tempo, é incorreto usar a expressão \"nós por hora\". Na verdade, essa expressão indicaria uma aceleração, pois estaria a referir-se à alteração da velocidade ao longo do tempo. Este erro linguístico é, no entanto, comum na linguagem do dia a dia, quando se fala da velocidade de uma embarcação.\n[…]\nA origem do termo \"nó\" remonta às práticas utilizadas em navios para determinar a velocidade. Uma das abordagens mais comuns envolvia lançar um flutuador calibrado da popa do navio, que, devido ao atrito com a água, permanecia relativamente estático à superfície. Esse flutuador estava ligado ao navio por um cabo com nós espaçados regularmente.\n[…]\nKTAS significa \"knots true airspeed\", uma medida da velocidade real de uma aeronave através do ar.\n[…]\nKIAS significa \"knots indicated airspeed\", é velocidade em relação ao ar lida no odómetro ou outro instrumento de medida da velocidade.\n[…]\nKCAS significa \"knots calibrated airspeed\", é a velocidade em relação ao ar corrigida em função do erro posicional conhecido.\n[…]\nKEAS significa \"knots equivalent airspeed\", é a velocidade da aeronave em relação ao ar corrigida do erro causado pelos efeitos de compressibilidade.\n[…]\n«Conversor de unidades de velocidade» (em inglês)\n[…]\n«Funcionamento da barquinha na medição da velocidade da uma embarcação.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Ford Modelo T",
      "descricao": "Automóvel da Ford fabricado de 1908 a 1927, o primeiro carro produzido em massa em linha de montagem."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, o Ford Modelo T ganhou um apelido por causa das alavancas que ficavam junto ao volante. Qual era?",
    "resposta": "Ford Bigode",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ford_Modelo_T"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ford_Modelo_T",
        "situacao": "ok",
        "texto": "Ford Modelo T é um automóvel que foi desenvolvido e fabricado pela empresa norte-americana Ford Motor Company, de 1908 a 1927. Vigésimo modelo da marca, popularizou e revolucionou a indústria automobilística.\n[…]\nEm 1° outubro de 1908, a Ford lançou no mercado dos Estados Unidos o seu Modelo T, um veículo confiável, robusto, seguro, simples de dirigir e, principalmente, barato.\n[…]\nPor estas razões, o \"T\" conquistou o público americano e de outros países. Em 1914 iniciou-se a sua fabricação na Argentina. Em 1917 foi lançado o caminhão Modelo TT. Em 1919, a Ford se tornou o primeiro fabricante de automóveis no Brasil, com a produção do carro e do caminhão dessa linha. Em 1920, mais da metade dos veículos que circulavam ao redor do mundo eram modelos \"T\", que eram vistos até em países distantes, como Turquia e Etiópia.\n[…]\nComo parte das comemorações de seu centenário, em 2003, a Ford restaurou seis unidades. Uma versão de 2003, denominada Modelo T-100, foi fabricada totalmente à mão, sendo idêntica à original de 1914.\n[…]\nPrimeiro carro da Ford com volante no lado esquerdo. Era considerado leve em relação a outros modelos. Como no câmbio, a redução se fazia por meio de uma engrenagem helicoidal. No painel havia amperímetro e hodômetro.\n[…]\nAinda não era com o sistema de pedal, mas com uma alavanca junto ao volante, que formava par com outra, para ajustar o avanço de ignição. As duas alavancas, opostas, formavam a figura de um bigode, o que levou o \"T\" a ser chamado, no Brasil, de \"Ford Bigode\". Quando o nome pegou, os modelos fabricados no Brasil passaram a mostrar no ornamento do capô a figura de um bigode.\n[…]\nCronologia do modelo T\n[…]\nFord Hemp Body Car"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Shinkansen",
      "descricao": "Rede japonesa de trens de alta velocidade, inaugurada em 1964 e conhecida como trem-bala."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em japonês, o que significa Shinkansen, o nome da rede de trens-bala do país?",
    "resposta": "Nova linha tronco",
    "distratores": [
      "Trem do vento",
      "Flecha veloz",
      "Caminho do sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shinkansen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shinkansen",
        "situacao": "ok",
        "texto": "The Shinkansen (Japanese: 新幹線; [ɕiŋkaꜜɰ̃seɴ] , lit. 'new main line'), colloquially known in English as the bullet train, is a network of primarily high-speed railway lines in Japan. The system was developed to provide connections between Tokyo and other regions of the country. In addition to long-distance services, some sections in and around the largest metropolitan areas are used for commuter tr\n[…]\nIn English, Shinkansen trains are commonly referred to as the bullet train. This expression is a literal translation of the Japanese nickname dangan ressha (弾丸列車), which dates to 1939 and was originally applied to early high-speed rail proposals during the initial planning stages of the project. The name later became firmly associated with Shinkansen services due to their high operating speeds and the distinctive, bullet-like profile of the original 0 Series Shinkansen trains.\n[…]\nIn December 2009, then transport minister Seiji Maehara proposed a bullet train link to Haneda Airport, using an existing spur that connects the Tōkaidō Shinkansen to a train depot. JR Central called the plan \"unrealistic\" due to tight train schedules on the existing line, but reports said that Maehara wished to continue discussions on the idea. The succeeding minister has not indicated whether this proposal remains supported.\n[…]\n941 Type (rescue train)\n[…]\nShimomae, Tetsuo (2022). Birth of the Shinkansen. The Origin Story of the World-First Bullet Train. Springer. doi:10.1007/978-981-16-6538-7. ISBN 978-981-16-6537-0.\n[…]\nAbel, Jessamyn R. (2022). Dream Super-Express: A Cultural History of the World's First Bullet Train. Stanford University Press. ISBN 978-1-5036-2995-0.\n[…]\nBiting the Bullet: What we can learn from the Shinkansen, discussion paper by Christopher Hood in the electronic journal of contemporary Japanese studies, 23 May 2001\n[…]\nShinkansen Wheelchair Accessibility, review for riders with disabilities."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shinkansen",
        "situacao": "ok",
        "texto": "O Shinkansen (新幹線, Shinkansen; em Japonês) é a rede ferroviária de alta velocidade do Japão, operada pela companhia privada (Japan Railways Group) conhecida como JR.\n[…]\nA palavra Shinkansen significa literalmente \"Nova Linha Troncal\" e por isso refere-se estritamente aos carris, enquanto que os comboios propriamente ditos são referidos oficialmente como \"Super Expressos\" (超特急 chō-tokkyū). No entanto, esta distinção é muito raramente mencionada, mesmo no próprio Japão.\n[…]\nGrande parte da construção foi financiada com um empréstimo de US$ 80 milhões do Banco Mundial. Um troço da linha de testes de material circulante, hoje parte da linha principal, abriu em Kamonomiya em 1962. Considerado um dos maiores símbolos do progresso japonês, o Tokaido Shinkansen abriu a 1 de Abril de 1964, justo a tempo para os Jogos Olímpicos de Tóquio.\n[…]\nO Japão celebrou o 40.º aniversário dos caminhos de ferro de alta velocidade em 2004, onde apenas e só a linha Tōkaidō Shinkansen transportou 4,16 mil milhões de passageiros. A rede no total transportou cerca de 6 mil milhões de passageiros, mais que toda a população mundial hoje.\n[…]\nTambém existem planos a longo prazo para a extensão da rede, a Hokkaidō Shinkansen desde Aomori até Sapporo (através do Túnel Seikan), a linha Kyushu Shinkansen até Nagasaki, tal como completar a ligação entre Kanazawa até Osaka, apesar de nenhuma destes projectos dever estar completado antes de 2020.\n[…]\nPara a linha Channel Tunnel Rail Link de ligação de Londres ao Eurotúnel, serão exportadas EMUs construídas pela Hitachi baseadas na tecnologia Shinkansen para uso dos serviços pendulares de alta velocidade britânicos.\n[…]\nSéries 700T — Shinkansen",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Concorde",
      "descricao": "Avião comercial supersônico franco-britânico que operou de 1976 a 2003."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que vários países proibiam o Concorde de voar mais rápido que o som sobre terra firme?",
    "resposta": "Por causa do estrondo sônico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Concorde",
      "https://en.wikipedia.org/wiki/Sonic_boom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "Concorde ( KONG-kord, French: [kɔ̃kɔʁd] ) is a retired Anglo-French supersonic airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation (BAC).\n[…]\nWhile carrying a full load, Concorde achieved 15.8 passenger miles per gallon of fuel, while the Boeing 707 reached 33.3 pm/g, the Boeing 747 46.4 pm/g, and the McDonnell Douglas DC-10 53.6 pm/g. A trend in favour of cheaper airline tickets also caused airlines such as Qantas to question Concorde's market suitability. During the early 2000s, Flight International described Concorde as being \"one of aerospace's most ambitious but commercially flawed projects\",\n[…]\nConstruction of two prototypes began in February 1965: 001, built by Aérospatiale at Toulouse, and 002, by BAC at Filton, Bristol. 001 made its first test flight from Toulouse on 2 March 1969, piloted by André Turcat, and first went supersonic on 1 October. The first UK-built Concorde flew from Filton to RAF Fairford on 9 April 1969, piloted by Brian Trubshaw. Both prototypes were presented to the public on 7–8 June 1969 at the Paris Air Show.\n[…]\nData from The Wall Street Journal, The Concorde Story, The International Directory of Civil Aircraft, Aérospatiale/BAC Concorde 1969 Onwards (All Models)General characteristics\n[…]\nConcorde Lecture Notes. Volume 1, Instruments\n[…]\nConcorde Operations Navigation Manual\n[…]\n\"First Concorde Supersonic Transport Flies\" (PDF). Aviation Week & Space Technology. 17 March 1969. Archived from the original (PDF) on 16 March 2015.\n[…]\nCapt R. E. Gillman (24 January 1976). \"Concorde as viewed from the flightdeck\". Flight International.\n[…]\n\"The day Concorde flew into the history books\". Airbus. 2 March 2019."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sonic_boom",
        "situacao": "ok",
        "texto": "A sonic boom is a sound associated with shock waves created when an object travels through the air faster than the speed of sound. Sonic booms generate enormous amounts of sound energy, sounding similar to an explosion or a thunderclap to the human ear.\n[…]\nSonic booms were also a nuisance in North Cornwall and North Devon in the UK as these areas were underneath the transatlantic flight path of Concorde. Windows would rattle and in some cases, the \"torching\" (masonry mortar underneath roof slates) would be dislodged with the vibration.\n[…]\nEven strong N-waves such as those generated by Concorde or military aircraft can be far less objectionable if the rise time of the over-pressure is sufficiently long. A new metric has emerged, known as perceived loudness, measured in PLdB. This takes into account the frequency content, rise time, etc. A well-known example is the snapping of one's fingers in which the \"perceived\" sound is nothing more than an annoyance.\n[…]\nThe energy range of sonic boom is concentrated in the 0.1–100 hertz frequency range that is considerably below that of subsonic aircraft, gunfire and most industrial noise. Duration of sonic boom is brief; less than a second, 100 milliseconds (0.1 second) for most fighter-sized aircraft and 500 milliseconds for the space shuttle or Concorde jetliner. The intensity and width of a sonic boom path depend on the physical characteristics of the aircraft and how it is operated.\n[…]\nBoston Globe profile of Spike Aerospace planned S-521 supersonic jet Archived 22 June 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "O Concorde foi um avião comercial supersônico de passageiros, que foi produzido de abril de 1965 até o final de 1978 pelo consórcio formado pela britânica British Aircraft Corporation (BAC) e a francesa Aérospatiale.\n[…]\nNo início, o Concorde tinha cerca de 100 pedidos das companhias mais importantes do mundo, além da Air France, Pan Am e BOAC, atual British Airways, que eram as companhias lançadoras do tipo, a Japan Airlines, Lufthansa, American Airlines, Qantas e TWA também manifestaram interesse de compra.\n[…]\nEm 21 de janeiro de 1976, o Concorde iniciou voos comerciais ligando Paris ao Rio de Janeiro, com uma escala em Dacar, e Londres a Bahrein. Voar no Concorde era uma experiência única. Tendo uma velocidade de cruzeiro em torno de 2,5 vezes a de qualquer aeronave de passageiros - 1 150 kn (2 130 km/h), contra 450 kn (833 km/h) de então, sendo 1 292 kn (2 390 km/h) o recorde em 19 de dezembro de 1985.\n[…]\nTurbulência era uma coisa que raramente o Concorde enfrentava, devido à sua grande altitude de voo. Olhando pela janela podia-se ver claramente a curvatura do globo terrestre. A aeronave era mais rápida que a velocidade de rotação da Terra, e isso se fazia notar quando a decolagem em Londres era após o pôr do sol, chegando em Nova Iorque ainda de dia.\n[…]\nEm 25 de julho de 2000, uma das unidades da Air France (Voo Air France 4590) teve um acidente fatal, causado por uma peça de um DC-10 da Continental Airlines, que se soltara na pista minutos antes da decolagem do Concorde. Este acidente levou à paralisação de toda a frota francesa e britânica e considerado como a principal causa do fim dos voos do Concorde.\n[…]\nVídeo com diversos voos do Concorde\n[…]\n«Site com informações e fotos do Concorde» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Concorde",
      "descricao": "Avião comercial supersônico franco-britânico que operou de 1976 a 2003."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de quase trinta anos levando passageiros entre Europa e Estados Unidos, em que ano o Concorde fez seus últimos voos comerciais?",
    "resposta": "2003",
    "fonte": [
      "https://en.wikipedia.org/wiki/Concorde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "Concorde ( KONG-kord, French: [kɔ̃kɔʁd] ) is a retired Anglo-French supersonic airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation (BAC).\n[…]\nIn 2003, Air France and British Airways announced the retirement of Concorde, owing to rising maintenance costs, low passenger numbers following the 25 July 2000 crash, and the slump in air travel following the September 11 attacks.\n[…]\nAir France flew its last commercial flight on 30 May 2003 with British Airways retiring its Concorde fleet on 24 October 2003.\n[…]\nFour incidents of partial rudder separation similar to the above accidents occurred in 1991, 1998, 2002, and 2003. Three incidents involving separation of part of an elevon (control surface on the trailing edge of Concorde's delta wing) have also occurred inflight. Although similar to the occurrences described above under Accidents, available official reports do not describe these as accidents.\n[…]\nElizabeth II and Prime Ministers Edward Heath, Jim Callaghan, Margaret Thatcher, John Major and Tony Blair took Concorde in some charter flights such as the Queen's trips to Barbados on her Silver Jubilee in 1977, in 1987 and in 2003, to the Middle East in 1984 and to the US in 1991. Pope John Paul II flew on Concorde in May 1989.\n[…]\nData from The Wall Street Journal, The Concorde Story, The International Directory of Civil Aircraft, Aérospatiale/BAC Concorde 1969 Onwards (All Models)General characteristics\n[…]\nFrawley, Gerald (2003). The International Directory of Civil Aircraft, 2003/2004. Aerospace Publications. ISBN 978-1-875671-58-8.\n[…]\nDave North (20 October 2003). \"End of an Era\". Aviation Week & Space Technology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "O Concorde foi um avião comercial supersônico de passageiros, que foi produzido de abril de 1965 até o final de 1978 pelo consórcio formado pela britânica British Aircraft Corporation (BAC) e a francesa Aérospatiale.\n[…]\nSeus voos comerciais começaram em 21 de janeiro de 1976 e terminaram em 24 de outubro de 2003, tendo sido operado apenas pelas companhias British Airways e Air France.\n[…]\nEm 4 de setembro de 1970, o Concorde começou a sua série de voos de demonstração em uma turnê mundial, inclusive inaugurando o Aeroporto Internacional de Dallas-Fort Worth, em 1973, quando a aeronave visitou os Estados Unidos. Estes voos de demonstração fizeram com que a aeronave acumulasse sessenta pedidos de compra.\n[…]\nEm 21 de janeiro de 1976, o Concorde iniciou voos comerciais ligando Paris ao Rio de Janeiro, com uma escala em Dacar, e Londres a Bahrein. Voar no Concorde era uma experiência única. Tendo uma velocidade de cruzeiro em torno de 2,5 vezes a de qualquer aeronave de passageiros - 1 150 kn (2 130 km/h), contra 450 kn (833 km/h) de então, sendo 1 292 kn (2 390 km/h) o recorde em 19 de dezembro de 1985.\n[…]\nEm 10 de abril de 2003, Air France e British Airways decidiram juntas encerrar os voos comerciais da aeronave. A Air France em 31 de maio de 2003 e a British Airways em 24 de outubro do mesmo ano. O último voo oficial foi realizado pela aeronave G-BOAF da British Airways, em 26 de novembro de 2003, para Filton, cidade onde foi produzido o primeiro Concorde, quando homenagens e manobras foram realizadas, como o movimento do \"Bico\" (levantamento e abaixamento).\n[…]\nVídeo com diversos voos do Concorde\n[…]\n«Site com informações e fotos do Concorde» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Kombi",
      "descricao": "Furgão da Volkswagen, também chamado Volkswagen Type 2, fabricado no Brasil de 1957 a 2013."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Depois de mais de cinquenta anos de fabricação no Brasil, por que a Kombi saiu de linha no fim de 2013?",
    "resposta": "Exigência de airbag e freio ABS",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volkswagen_Type_2"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volkswagen_Type_2",
        "situacao": "ok",
        "texto": "The Volkswagen Transporter, initially the Type 2, is a range of light commercial vehicles, built as vans, pickups, and cab-and-chassis variants, introduced in 1950 by the German automaker Volkswagen. It was the company's second mass-production light motor vehicle series, and was inspired by an idea and request from Dutch VW importer Ben Pon.\n[…]\nKnown officially (depending on body type) as the Transporter, Kombi or Microbus—or informally as the Volkswagen Station Wagon (US), Bus (also US), Camper (UK) or Bulli (Germany), it was initially given the factory designation \"Type 2\", as it followed—and was for decades based on—the original Volkswagen (\"People's Car\"), which became VW's \"Type 1\" after the company's post-World War II reboot, and mostly known, in many languages, as the \"Beetle\".\n[…]\nIn 2017, decades after production of the Type 2 ended, Volkswagen announced the introduction of an electric VW microbus based on the new MEB platform in 2022.\n[…]\nThe Type 2 was available as a:\n[…]\nProduction of the Brazilian Volkswagen Kombi ended in 2013 with a production run of 600 Last Edition vehicles. A short film entitled \"Os Últimos Desejos da Kombi\" (English: The Kombi's Last Wishes) was made by Volkswagen Brazil to commemorate the end of production. Brazilian requirements that new cars have driver and passenger airbags and anti-lock brakes were also factors in the end of T2 production.\n[…]\nThe official German-language model names Transporter and Kombi (Kombinationskraftwagen, combined-use vehicle) have also caught on as nicknames. Kombi is not only the name of the passenger variant but also the Australasian and Brazilian term for the whole Type 2 family, in much the same way that they are all called VW-Bus in Germany, even the pickup truck variations.\n[…]\nVolkswagen California\n[…]\nVolkswagen I.D. Buzz\n[…]\nVolkswagen Transporter\n[…]\nVolkswagen Westfalia Camper"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Estrada de Ferro Madeira-Mamoré",
      "descricao": "Ferrovia construída em Rondônia no início do século vinte, conhecida como Ferrovia do Diabo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A ferrovia Madeira-Mamoré, em Rondônia, foi construída para cumprir um compromisso assumido pelo Brasil com qual país vizinho?",
    "resposta": "Bolívia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Madeira-Mamoré",
      "https://en.wikipedia.org/wiki/Treaty_of_Petrópolis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Madeira-Mamoré",
        "situacao": "ok",
        "texto": "Estrada de Ferro Madeira-Mamoré (EFMM) é uma ferrovia no atual estado de Rondônia, no Brasil, considerada um ícone ferroviário mundial.\n[…]\nO primeiro projeto de construção de uma ferrovia na região dos rios Madeira e Mamoré teve início no dia 10 de outubro de 1867 – em meio à Guerra do Paraguai, durante a qual o Governo Imperial já percebendo as dificuldades nas comunicações territoriais autorizou o livre comércio na região à Bolívia e iniciava às pressas o desenvolvimento da estrada de ferro – quando o então ministro da Agricultura, Manuel Pinto de Sousa Dantas, incumbiu os engenheiros José e Francisco Keller de planejarem uma estrada de ferro na região das cachoeiras do rio Madeira.\n[…]\nAinda, seu nome seria alterado para Companhia Estrada de Ferro do Madeira e Guaporé, e a concessionária teria um prazo de dois anos para iniciar a construção. Mas, como diversos outros empreendimentos que desmoronaram naquela década, a ferrovia não saiu do papel e sua concessão caducou. Enquanto a ferrovia em território brasileiro não saía do papel, a Bolívia assistia a uma lenta mudança em suas relações com o Chile e o Peru.\n[…]\nOs conflitos limítrofes entre o Brasil, Bolívia e Peru foram finalmente resolvidos com a assinatura do Tratado de Petrópolis em 17 de novembro de 1903, por meio do qual o Brasil adquiria a região do Acre pelo valor de £2.000.000 (Rs36:268$870 em moeda brasileira ao câmbio da época) e comprometia-se a construir a E.F. Madeira-Mamoré dentro de um prazo de quatro anos.\n[…]\nMuseu da Estrada de Ferro Madeira-Mamoré\n[…]\n«Estrada de Ferro Madeira-Mamoré.»\n[…]\nFotografias da construção da Estrada de Ferro Madeira-Mamoré"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Petrópolis",
        "situacao": "ok",
        "texto": "The Treaty of Petrópolis, signed on November 17, 1903, in the Brazilian city of Petrópolis, ended the Acre War between Bolivia and Brazil over the then-Bolivian territory of Acre (today the Acre state), a desirable territory in Bolivia-Brazil border during the contemporary rubber boom.\n[…]\nThe treaty, drafted by Brazilian foreign affairs minister José Maria da Silva Paranhos, gave Brazil the territory of Acre (191,000 km2), in exchange for over 3,000 km2 of Brazilian territory between the Abuna River and Madeira River, a monetary payment of two million British pounds, paid in two installments, and a pledge of a rail-link between the Bolivian city of Riberalta and the Brazilian city of Porto Velho, which would bypass the rapids on the Madeira.\n[…]\nThe rail line was called the Madeira-Mamoré Railway. It was supposed to go as far as Riberalta, on the Rio Beni, above that river's rapids, but had to stop short at Guajará-Mirim. This was the third such attempt. In the 1870s, during the rubber boom, the American George Church was defeated twice by the heat, the difficulty of the terrain, and the appalling loss of life from fever. Another American, Percival Farquhar, won the contract for the Madeira-Mamoré railway required by the treaty.\n[…]\nConstruction began in August 1907 and was completed on July 15, 1912. The project cost US$33 million. At least 3,600 men died building the 367 km of track Guajaramirin-Station (popular estimates say that each one hundred sleepers cost one human life). The Madeira-Mamoré railway had about a year of full operation before the combination of the collapse of rubber prices, the opening of a railway from Bolivia to the Pacific via Chile, and the Panama Canal rendered it uneconomical."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Caixa-preta",
      "descricao": "Gravador de dados e de voz da cabine instalado em aviões para investigar acidentes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Apesar do apelido, as caixas-pretas dos aviões são pintadas de laranja vivo. Por quê?",
    "resposta": "Para serem achadas nos destroços",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flight_recorder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flight_recorder",
        "situacao": "ok",
        "texto": "A flight recorder is an electronic recording device placed in an aircraft for the purpose of facilitating the investigation of aviation accidents and incidents. The device may be referred to colloquially as a \"black box\", an outdated name which has become a misnomer because they are required to be painted bright orange, to aid in their recovery after accidents.\n[…]\nMagnetic tape and wire voice recorders had been tested on RAF and USAAF bombers by 1943 thus adding to the assemblage of fielded and experimental electronic devices employed on Allied aircraft. As early as 1944 aviation writers envisioned use of these recording devices on commercial aircraft to aid incident investigations. When modern flight recorders were proposed to the British Aeronautical Research Council in 1958, the term \"black box\" was in colloquial use by experts.\n[…]\nBy 1967, when flight recorders were mandated by leading aviation countries, the expression had found its way into general use: \"These so-called 'black boxes' are, in fact, of fluorescent flame-orange in colour.\" The formal names of the devices are flight data recorder and cockpit voice recorder. The recorders must be housed in boxes that are bright orange in color to make them more visually conspicuous in the debris after an accident.\n[…]\nVoyage data recorder\n[…]\nJeremy Sear, \"The ARL 'Black Box' Flight Recorder\", University of Melbourne, October 2001\n[…]\n'The ARL 'Black Box' Flight Recorder': Melbourne University history honors thesis on the development of the first cockpit voice recorder by David Warren\n[…]\nFinnish Mata-Hari Flight Recorder in Museums of Tampere City\n[…]\netep, Flight Recorder designer\n[…]\nIRIG 106 Chapter 10: Flight data recorder digital recorder standard\n[…]\nUS 3075192  James J. Ryan: \"Coding Apparatus for Flight Recorders and the Like\"\n[…]\nFirst modern flight recorder \"Mata Hari\" at display in Tampere Vapriikki Museum Centre."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caixa_negra",
        "situacao": "ok",
        "texto": "A caixa-preta (português brasileiro) ou caixa-negra (português europeu) é nome popular de um sistema de registro de voz e dados existente nos aviões (e mais recentemente nas locomotivas dos Estados Unidos e Europa).\n[…]\nA incorporação destes sistemas nos aviões permitiu a melhoria da segurança nas viagens aéreas, já que foi possível assim detectar falhas que anteriormente davam origem a acidentes graves cuja causa não era possível ou muito difícil de determinar. Nos anos 50 era frequente o acréscimo de novos equipamentos às aeronaves, e os pilotos estadunidenses costumavam apelidá-los de caixas-pretas (another \"black box\" installed in our plane).\n[…]\nE, de fato, os primeiros registradores de voz de cabina eram realmente pretos como todos os demais aviônicos. Logo se percebeu que, após um acidente, era bem mais fácil encontrar o equipamento entre os destroços se ele possuísse uma cor destacada. Hoje, eles geralmente apresentam uma cor laranja ou vermelho vivo. Quando submersa, o que dificulta a sua identificação visual, a caixa negra é capaz de emitir um pulso sonoro, na frequência de 37,5 kHz, a uma profundidade de até 4267 m.\n[…]\nCom os avanços da tecnologia, as caixas-pretas utilizam como meio de gravação chips em invólucro resistente a chamas e impactos, e têm capacidade de gravação bem superior.\n[…]\nA caixa-preta é um instrumento de uso obrigatório e universal, e as autoridades aeronáuticas são unânimes quanto a sua utilidade e valor.\n[…]\n«O que é uma caixa-preta?»\n[…]\n«Como funcionam as caixas-pretas»\n[…]\n«Aviation Recorder Overview» (PDF). em inglês\n[…]\n«Should black box data be stored in the cloud?». em inglês\n[…]\n«Who Made That Black Box?». em inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Semáforo",
      "descricao": "Sinal luminoso que controla o trânsito de veículos e pedestres; o primeiro foi instalado em Londres em 1868."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O primeiro semáforo, aceso a gás e instalado em Londres em 1868, saiu de uso pouco depois. O que aconteceu com ele?",
    "resposta": "Explodiu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Traffic_light"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Traffic_light",
        "situacao": "ok",
        "texto": "Traffic lights, traffic signals, or stoplights – also known as robots in South Africa, Zambia, and Namibia – are signalling devices positioned at road intersections, pedestrian crossings, and other locations to control the flow of traffic.\n[…]\nIn December 1868, the first traffic signals showing a red or green light at night were installed outside the Houses of Parliament in London. They were invented by John Peake Knight. A police constable raised or lowered the semaphore arms and, at night, operated a lever to control the lights which drivers and pedestrians saw. This system exploded on 2 January 1869 and was taken down. This early traffic signal led to other parts of the world implementing similar traffic signal systems.\n[…]\nMany traffic light installations are fitted with vehicle actuation, i.e., detection, to improve the flexibility of traffic systems to respond to varying traffic flows. Detectors come in the form of digital sensors fitted to the signal heads or induction loops embedded in the road surface.\n[…]\nThe MUTCD identifies five types of traffic light mounts. On pedestals, signal heads are mounted on a single pole. This is the normal installation method for the UK. On mast arms, signal heads are mounted on a rigid arm over the road protuding from the pole. On strained poles, signals are suspended over a roadway on a wire, attached to poles at opposite kerbs. This is the most common installation method in the United States.\n[…]\nUnicode has U+1F6A5 🚥 HORIZONTAL TRAFFIC LIGHT and U+1F6A6 🚦 VERTICAL TRAFFIC LIGHT.\n[…]\nSCATS – Sydney Coordinated Adaptive Traffic System\n[…]\nSafety Evaluation of Converting Traffic Signals from Incandescent to Light-emitting Diodes: Summary Report Federal Highway Administration"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sem%C3%A1foro",
        "situacao": "ok",
        "texto": "Semáforos, também conhecidos como robôs na África do Sul, Zâmbia e Namíbia – são dispositivos de sinalização posicionados em cruzamentos de estradas, passagens de pedestres e outros locais para controlar o fluxo de tráfego.\n[…]\nEm dezembro de 1868, os primeiros semáforos que exibiam luz vermelha ou verde à noite foram instalados em frente ao Parlamento, em Londres. Eles foram inventados por John Peake Knight. Um policial levantava ou abaixava os braços do semáforo e, à noite, operava uma alavanca para controlar as luzes que motoristas e pedestres viam. Esse sistema explodiu em 2 de janeiro de 1869 e foi desmontado. Esse primeiro semáforo levou outras partes do mundo a implementarem sistemas de semáforos semelhantes.\n[…]\nNas duas primeiras décadas do século XX, semáforos como o de Londres eram usados em todos os Estados Unidos. Esses semáforos eram controlados por um agente de trânsito que ajustava os sinais para direcionar o tráfego.\n[…]\nAs três cores do semáforo são:\n[…]\nCaetano é a denominação dos controladores eletrônicos de trânsito instalados junto a semáforos em grandes cidades. Seu objetivo é fotografar as placas dos veículos automotores que cruzam a faixa destinada a travessia de pedestres, sejam avançando o sinal vermelho ou parando sobre a faixa, ambas as situações caracterizando infrações de trânsito. O equipamento fotografa o veículo que comete a infração e envia a imagem para o órgão autuador responsável por emitir a multa ao proprietário do veículo.\n[…]\nEm Portugal, o primeiro semáforo terá sido instalado em 1928, no cruzamento entre a Avenida da Liberdade e a Rua das Pretas, em Lisboa. O mesmo funcionava apenas com duas cores de luzes e era operado manualmente por um guarda sinaleiro da Polícia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Semáforo",
      "descricao": "Sinal luminoso que controla o trânsito de veículos e pedestres; o primeiro foi instalado em Londres em 1868."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O primeiro semáforo de Londres foi idealizado por um engenheiro que adaptou ao trânsito os sinais de qual outro meio de transporte?",
    "resposta": "Trem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Traffic_light"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Traffic_light",
        "situacao": "ok",
        "texto": "Traffic lights, traffic signals, or stoplights – also known as robots in South Africa, Zambia, and Namibia – are signalling devices positioned at road intersections, pedestrian crossings, and other locations to control the flow of traffic.\n[…]\nTraffic lights for public transport often use signals that are distinct from those for private traffic. They can be letters, arrows, or bars of white or (typically) coloured LED light (100-watt).\n[…]\nIn Japan, tram signals are under the regular vehicle signal; however, the colour of the signal intended for trams is orange (\"yellow\"). The small light at the top tells the driver when the traffic light receives the vehicle's transponder signal. In Hong Kong, an amber T-signal is used for trams, in place of the green signal. At any tramway junction, another set of signals is available to indicate the direction of the tracks.\n[…]\nmanufactures a programmable traffic signal that uses a software-controlled LED array and electronics to steer the light beam toward the desired approach.\n[…]\nAnother type of traffic light that is used in racing is the Christmas Tree, which is used in drag racing. The Christmas Tree has six lights: a blue staging light, three amber lights, a green light, and a red light. The blue staging light is divided into two parts: Pre-stage and stage. Sometimes, there are two sets of bulbs on top of each other to represent them. Once a driver is staged at the starting line, the starter will activate the light to commence racing, which can be done in two ways.\n[…]\nUnicode has U+1F6A5 🚥 HORIZONTAL TRAFFIC LIGHT and U+1F6A6 🚦 VERTICAL TRAFFIC LIGHT.\n[…]\nSafety Evaluation of Converting Traffic Signals from Incandescent to Light-emitting Diodes: Summary Report Federal Highway Administration"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sem%C3%A1foro",
        "situacao": "ok",
        "texto": "Semáforos, também conhecidos como robôs na África do Sul, Zâmbia e Namíbia – são dispositivos de sinalização posicionados em cruzamentos de estradas, passagens de pedestres e outros locais para controlar o fluxo de tráfego.\n[…]\n\"Semáforo\" procede da composição dos termos gregos sêma, atos (sinal) e phorós, ós, ón (que conduz).\n[…]\nNas duas primeiras décadas do século XX, semáforos como o de Londres eram usados em todos os Estados Unidos. Esses semáforos eram controlados por um agente de trânsito que ajustava os sinais para direcionar o tráfego.\n[…]\nO controle dos semáforos mudou com o surgimento dos computadores na América na década de 1950. Um dos melhores exemplos históricos de controle computadorizado de semáforos ocorreu em Denver, Colorado, em 1952. Em 1967, Toronto, Canadá, foi a primeira cidade a usar computadores mais avançados, mais adequados para a detecção de veículos. Os computadores mantinham o controle de 159 semáforos em Toronto por meio de linhas telefônicas.\n[…]\nCaetano é a denominação dos controladores eletrônicos de trânsito instalados junto a semáforos em grandes cidades. Seu objetivo é fotografar as placas dos veículos automotores que cruzam a faixa destinada a travessia de pedestres, sejam avançando o sinal vermelho ou parando sobre a faixa, ambas as situações caracterizando infrações de trânsito. O equipamento fotografa o veículo que comete a infração e envia a imagem para o órgão autuador responsável por emitir a multa ao proprietário do veículo.\n[…]\nEm Portugal, o primeiro semáforo terá sido instalado em 1928, no cruzamento entre a Avenida da Liberdade e a Rua das Pretas, em Lisboa. O mesmo funcionava apenas com duas cores de luzes e era operado manualmente por um guarda sinaleiro da Polícia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Proálcool",
      "descricao": "Programa Nacional do Álcool, lançado pelo governo brasileiro em 1975 para substituir a gasolina por etanol."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1975, o Brasil criou o Proálcool para trocar gasolina por álcool nos carros. Que crise mundial motivou o programa?",
    "resposta": "Crise do petróleo de 1973",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
      "https://en.wikipedia.org/wiki/1973_oil_crisis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the world's second largest producer of ethanol fuel. Brazil and the United States have led the industrial production of ethanol fuel for several years, together accounting for 85 percent of the world's production in 2017. Brazil produced 26.72 billion liters (7.06 billion U.S. liquid gallons), representing 26.1 percent of the world's total ethanol used as fuel in 2017.\n[…]\nThe National Alcohol Program -Pró-Álcool- (Portuguese: Programa Nacional do Álcool), launched in 1975, was a nationwide program financed by the government to phase out automobile fuels derived from fossil fuels, such as gasoline, in favor of ethanol produced from sugar cane.\n[…]\nSince 2009 the Brazilian ethanol industry has experienced a crisis due to multiple causes. They include the 2008 financial crisis; poor sugarcane harvests due to unfavorable weather; high sugar prices in the world market that made more attractive to produce sugar rather than ethanol; a freeze imposed by the Brazilian government on the petrol and diesel prices. Brazilian ethanol fuel production in 2011 was 21.1 billion liters (5.6 billion U.S.\n[…]\nA 2009 study published in Energy Policy found that the use of ethanol fuel in Brazil has allowed to avoid over 600 million tons of CO2 emissions since 1975, when the Pró-Álcool Program began. The study also concluded that the neutralization of the carbon released due to land-use change was achieved in 1992.\n[…]\nThe use of ethanol-only vehicles has also reduced CO emissions drastically. Before the Pró-Álcool Program started, when gasoline was the only fuel in use, CO emissions were higher than 50 g/km driven; they had been reduced to less than 5.8 g/km in 1995. Several studies have also shown that São Paulo has benefit with significantly less air pollution thanks to ethanol's cleaner emissions."
      },
      {
        "url": "https://en.wikipedia.org/wiki/1973_oil_crisis",
        "situacao": "ok",
        "texto": "In October 1973, the Organization of Arab Petroleum Exporting Countries (OAPEC) announced that it was implementing a total oil embargo against countries that had supported Israel at any point during the 1973 Yom Kippur War, which began after Egypt and Syria launched a large-scale surprise attack in an ultimately unsuccessful attempt to recover the territories that they had lost to Israel during th\n[…]\nThe embargo lasted from October 1973 to March 1974.\n[…]\nThe average US retail price of a gallon of regular gasoline rose 43% from 38.5¢ in May 1973 to 55.1¢ in June 1974. State governments asked citizens not to put up Christmas lights. Oregon banned Christmas and commercial lighting altogether. Politicians called for a national gasoline rationing program. Nixon asked gasoline retailers to voluntarily not sell gasoline on Saturday nights or Sundays.\n[…]\nThe oil shock destroyed the economy of South Vietnam. A spokesman for President Nguyễn Văn Thiệu admitted in a TV interview that the government was being \"overwhelmed\" by the inflation caused by the oil shock. An American businessman living in Saigon stated after the oil shock, that attempting to make money in South Vietnam was \"like making love to a corpse\". In December 1973, Vietcong sappers attacked and destroyed the petroleum depot of Nha Be, further depleting fuel sources.\n[…]\nBefore the energy crisis, large, heavy, and powerful cars were popular. By 1971, the standard engine in a Chevrolet Caprice was a 400-cubic inch (6.5 liter) V8. The wheelbase of this car was 121.5 inches (3,090 mm), and Motor Trend's 1972 road test of the similar Chevrolet Impala achieved no more than 15 highway miles per gallon. In the 15 years prior to the 1973 oil crisis, gasoline prices in the US had lagged well behind inflation.\n[…]\nUS Energy Information Administration (1998). 25th Anniversary of the 1973 Oil Embargo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Etanol_como_combust%C3%ADvel_no_Brasil",
        "situacao": "ok",
        "texto": "O Brasil é o segundo maior produtor mundial de etanol combustível e segundo maior exportador mundial. Juntos, Brasil e Estados Unidos lideram a produção industrial de etanol, representando em conjunto 82,4% da produção mundial em 2021.\n[…]\nOs primeiros usos práticos do etanol deram-se entre meados dos anos 1920 e início dos anos 1930. Mas somente nos anos 1970, com a crise do petróleo, o Brasil passou a usar maciçamente o etanol como combustível. Na segunda metade da década de 1980 por diversos motivos ocorreu uma forte retração no consumo de álcool combustível.\n[…]\nEm 14 de novembro de 1975 o decreto n° 76.593 cria o Programa Nacional do Álcool (Proálcool), sendo os engenheiros Lamartine Navarro Júnior e Cícero Junqueira Franco considerados \"os pais do Proálcool\", acompanhado pelo empresário Maurílio Biagi. O programa de motores a álcool foi idealizado pelo físico José Walter Bautista Vidal e pelo engenheiro Urbano Ernesto Stumpf.\n[…]\nDiante de uma situação nacional antiga e inconstante, justamente causada pelas altas e baixas do petróleo, as grandes montadoras brasileiras aprofundaram-se em pesquisas e, dessa forma, lançaram uma tecnologia revolucionária: os carros dotados de motor bicombustível, fabricados tanto para o uso de gasolina quanto de álcool.\n[…]\nCom a deflagração da Segunda Grande Guerra, o etanol combustível ganhou ainda mais proeminência, mas com o fim do conflito em 1945, e a normalização da produção e do comércio de combustíveis, em especial a gasolina ele viria a perder parte da importância adquirida na década anterior. Foi somente em 1974 com a Crise do Petróleo que o governo militar brasileiro enxergou a necessidade de solucionar o problema do Brasil em relação à importação de combustíveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Boeing 747",
      "descricao": "Avião a jato de grande porte da Boeing, com uma corcunda característica na parte dianteira."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a cabine dos pilotos do Boeing 747 fica numa corcunda, acima do piso dos passageiros?",
    "resposta": "Para o nariz abrir para carga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Boeing_747"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "The Boeing 747 is a long-range wide-body airliner designed and manufactured by Boeing Commercial Airplanes in the United States between 1968 and 2023.\n[…]\nBoeing 747 orders and deliveries (cumulative, by year):\n[…]\nFollowing its debut, the 747 rapidly achieved iconic status. The aircraft entered the cultural lexicon as the original Jumbo Jet, a term coined by the aviation media to describe its size, and was also nicknamed Queen of the Skies. Test pilot David P. Davies described it as \"a most impressive aeroplane with a number of exceptionally fine qualities\", and praised its flight control system as \"truly outstanding\" because of its redundancy.\n[…]\nBoeing 747 LCF\n[…]\nBoeing 747-8\n[…]\nBoeing 747-400\n[…]\nBoeing E-4\n[…]\nBoeing VC-25\n[…]\n\"747-8\". Boeing.\n[…]\nDebut of Boeing 747. British Movietone News. October 1, 1968.\n[…]\n\"Photos: Boeing 747-100 Assembly Line In 1969\". Aviation Week & Space Technology. April 28, 1969.\n[…]\n\"Boeing 747 Aircraft Profile\". FlightGlobal. June 3, 2007.\n[…]\n\"This Luxury Boeing 747-8 for the Super-Rich is a Palace in the Sky\". popular mechanics. February 24, 2015.\n[…]\n\"How Boeing and Pan Am created an airliner legend\". flightglobal. April 15, 2016.\n[…]\n\"Boeing 747: Evolution of a Jumbo, As Featured On Aviation Week's Covers\". Aviation Week. August 2016.\n[…]\n\"Boeing's Jumbo jet celebrates golden jubilee\". FlightGlobal. February 8, 2019.\n[…]\nGuy, Norris. \"Evolution of a Widebody: 50 Years of the Boeing 747\". Aviation Week & Space Technology.\n[…]\n\"The 747 Takes Off: The Dawn of the Jumbo Jet Age\". Digital Exhibit. Northwestern University Transportation Library. January 2020.\n[…]\nFlottau, Jens (January 26, 2023). \"How Boeing's 747 Revolutionized Air Travel\". Aviation Week & Space Technology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boeing_747",
        "situacao": "ok",
        "texto": "Boeing 747 é uma aeronave a jato usada no âmbito civil e militar para transporte de passageiros e de carga, referida com frequência como Jumbo Jet ou Queen of the Skies (Rainha dos Céus). A sua corcunda na parte superior frontal da fuselagem faz com que seja uma das aeronaves mais reconhecíveis do mundo, sendo também a primeira do género produzida em massa.\n[…]\nTodas as companhias resolveram este problema ao colocar o cockpit acima da linha de carga; a Douglas desenhou uma pequena cabine no topo da fuselagem, próximo às asas; a Lockheed desenhou uma \"espinha\" por todo o comprimento da fuselagem; a Boeing fundiu ambas as ideias com uma cabine que se estendia das asas até próximo do nariz da aeronave.\n[…]\nO -400 foi criado em várias versões, sendo elas a de passageiros (-400), passageiros/carga (-400M), doméstico (-400D) longo alcance de passageiros (-400ER), e longo alcance de carga (-400ERF). As versões de passageiros têm o mesmo piso superior que o -300, enquanto a versão de cargueiro nunca sofreu uma extensão do piso superior. O 747-400D foi construído para rotas domésticas, tendo uma capacidade máxima de 624 passageiros. As winglets não fazem parte desta versão, porém podem ser incorporadas.\n[…]\nNo final dos anos 1960 e inícios de 70, a Boeing estudou o desenvolvimento de um 747 menor, com apenas três motores, para competir com os L-1011 TriStar e McDonnell Douglas DC-10. O 747 trijato teria tido mais capacidade de carga, passageiros e alcance que o L-1011. Contudo, estudos de engenharia demonstraram que o design do 747 teria que ser alterado.\n[…]\nO voo 811 da United Airlines, no qual ocorreu uma explosão de descompressão a meio do seu voo, a 24 de Fevereiro de 1989, fez com que o NTSB (National Transportation Safety Board) fizesse um requerimento para que todas as portas de carga similares às do 747-200 no voo 881 fossem substituídas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Guia Michelin",
      "descricao": "Guia de viagem francês publicado desde 1900 pela fabricante de pneus Michelin, famoso por dar estrelas a restaurantes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1900, uma fabricante francesa de pneus lançou um guia com hotéis, oficinas e restaurantes. Qual era o objetivo?",
    "resposta": "Incentivar viagens de carro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Michelin_Guide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michelin_Guide",
        "situacao": "ok",
        "texto": "The Michelin Guide ( MISH-əl-in, MITCH-əl-in; French: Guide Michelin [ɡid miʃlɛ̃]) is a restaurant and hotel guide that has been published by the French tyre company Michelin since 1900. Originally created as a guide for French motorists, it later developed into an international reference for dining and travel. It awards up to three Michelin stars for excellence to a select few restaurants in cert\n[…]\nIn 1900, there were fewer than 3,000 cars on the roads of France. To increase the demand for cars, and accordingly car tyres, car tyre manufacturers and brothers Édouard and André Michelin published a guide for French motorists, the Guide Michelin (Michelin Guide). Michelin distributed nearly 35,000 copies of this first, free edition.\n[…]\nThe French chef Paul Bocuse, one of the pioneers of nouvelle cuisine in the 1960s, said, \"Michelin is the only guide that counts.\" In France, when the guide is published each year, it sparks a media frenzy which has been compared to that for annual Academy Awards for films. Media and others debate likely winners, speculation is rife, and TV and newspapers discuss which restaurant might lose, retain, or gain a Michelin star.\n[…]\nThe Michelin Green Guides review and rate attractions other than restaurants. There is a Green Guide for France as a whole, and a more detailed one for each of ten regions within France. Other Green Guides cover many countries, regions, and cities outside France. Many Green Guides are published in several languages. They include background information and an alphabetical section describing points of interest.\n[…]\nThe Michelin Guide New York 2007 included 526 restaurants, compared to 2,014 in Zagat New York 2007; after The Four Seasons Restaurant received no stars in that edition, co-owner Julian Niccolini said Michelin \"should stay in France, and they should keep their guide there\".\n[…]\nLists of Michelin-starred restaurants\n[…]\nVía Michelin"
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
    "indice": 23,
    "ancora": {
      "nome": "Linha de montagem de Henry Ford",
      "descricao": "Linha de montagem móvel adotada pela Ford em 1913 para produzir o Modelo T em massa."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A linha de montagem móvel da Ford foi inspirada nas linhas de desmontagem de que tipo de estabelecimento de Chicago?",
    "resposta": "Frigoríficos",
    "distratores": [
      "Tecelagens",
      "Moinhos de trigo",
      "Cervejarias"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Assembly_line"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Assembly_line",
        "situacao": "ok",
        "texto": "An assembly line, often called progressive assembly, is a manufacturing process where the unfinished product moves in a direct line from workstation to workstation, with parts added in sequence until the final product is completed. By mechanically moving parts to workstations and transferring the unfinished product from one workstation to another, a finished product can be assembled faster and wit\n[…]\nAccording to Henry Ford:\n[…]\nThe meatpacking industry of Chicago is believed to be one of the first industrial assembly lines (or disassembly lines) to be utilized in the United States starting in 1867. Workers would stand at fixed stations and a pulley system would bring the meat to each worker and they would complete one task. Henry Ford and others have written about the influence of this slaughterhouse practice on the later developments at Ford Motor Company.\n[…]\nFord's complex safety procedures—especially assigning each worker to a specific location instead of allowing them to roam about—dramatically reduced the rate of injury. The combination of high wages and high efficiency is called \"Fordism\", and was copied by most major industries. The efficiency gains from the assembly line also coincided with the take-off of the United States.\n[…]\nIn his 1922 autobiography, Henry Ford mentions several benefits of the assembly line including:\n[…]\nThese goals appear altruistic; however, it has been argued that they were implemented by Ford in order to reduce high employee turnover: when the assembly line was introduced in 1913, it was discovered that \"every time the company wanted to add 100 men to its factory personnel, it was necessary to hire 963\" in order to counteract the natural distaste the assembly line seems to have inspired.\n[…]\nWilson, J. M. \"Henry Ford vs. assembly line balancing.\" International Journal of Production Research (2014). 52(3), 757–765. https://doi.org/10.1080/00207543.2013.836616"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linha_de_produ%C3%A7%C3%A3o",
        "situacao": "ok",
        "texto": "Linha de produção ou linha de montagem pode ser entendida como uma forma de produção em série, onde vários operários, com ajuda de máquinas, especializados em diversas funções específicas e repetitivas, trabalhando de forma sequencial, chega-se a um produto semi-acabado ou acabado; ocorre quando um estabelecimento industrial com o auxílio de máquinas transformam as matérias-primas e produtos semi-\n[…]\nA forma mais característica, a da montagem em série, foi inventada por Henry Ford, empresário estadunidense do setor automobilístico. Graças a ela, Ford conseguiu produzir em massa seu famoso carro Ford T.\n[…]\nAs linhas de montagens são utilizadas desde então no processo de produção em série, para que o produto em fabricação seja deslocado ao longo de postos de trabalho, mas a sua eficiência depende da combinação de quatro condições indispensáveis (Teixeira et al., 2008, p. 31-33):\n[…]\nSegundo o livro no Sec XV, “O Arsenal Venziano “ já produzia galeras em esteiras rolantes e as montagens eram feitas em estágios.\n[…]\nO processo desenvolvido por Ford foi iniciado no dia 7 de outubro de 1913 em sua fábrica em Highland Park. Este sistema foi idealizado após Henry Ford ter analisado experiências bem sucedidas como: o moinho automatizado desenvolvido por Oliver Evans, a montagem de espingardas desenvolvida por Eli Withney ou a a produção de revólver de Samuel Colt, entre outras experiências.\n[…]\nA dimensão do produto influencia a concepção de uma linha de montagem pois vai restringir o número de produtos que podem existir em cada posto de trabalho afectando por sua vez o desempenho do trabalhador.\n[…]\nFordismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Francesco Baracca",
      "descricao": "Aviador italiano, ás da Primeira Guerra Mundial, morto em combate em 1918."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O aviador italiano Francesco Baracca, morto na Primeira Guerra, levava no avião um cavalo empinado. Hoje esse emblema é símbolo de qual marca de carros?",
    "resposta": "Ferrari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Francesco_Baracca",
      "https://en.wikipedia.org/wiki/Ferrari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Francesco_Baracca",
        "situacao": "ok",
        "texto": "Francesco Baracca (9 May 1888 – 19 June 1918) was Italy's top fighter ace of World War I. He was credited with 34 aerial victories. The emblem he wore side by side on his plane of a black horse prancing on its two rear hooves inspired Enzo Ferrari to use it on his racing car and later in his automotive company.\n[…]\nBaracca's total of 34 victory claims can largely be verified from known Austro-Hungarian losses and surviving military records, establishing the Italian as one of the highest-scoring Allied pilots during the conflict. After the war, his home in Lugo was turned into the Francesco Baracca Museum, which displays mementoes, uniforms, and medals from Baracca's life, as well as rudders and guns taken from shot-down aircraft.\n[…]\nIn the 1920s, a SPAD VII once flown by Baracca in December 1917 was presented for display, which was subsequently restored by GVAS (the Italian aeronautical preservation society).\n[…]\nOn 17 June 1923, a unique encounter intertwined the destinies of the Prancing Horse and Enzo Ferrari forever. Enzo Ferrari wrote about that encounter: 'When I won my first Savio Circuit in Ravenna in 1923, I met Count Enrico Baracca and Countess Paolina, parents of the flying hero. One day the Countess said to me, \"Ferrari, why don't you put my son's prancing horse on your cars?\n[…]\nStill, the Prancing Horse symbol would not appear on Scuderia Ferrari cars until 9 July 1932.\n[…]\nThe roller coaster at Ferrari World on Yas Island Flying Aces, is named after him and themed to him.\n[…]\nFlavio Baracchini\n[…]\nGabriele, Mariano (1963). \"BARACCA, Francesco\". Dizionario Biografico degli Italiani (in Italian). Vol. 5: Bacca–Baratta. Rome: Istituto dell'Enciclopedia Italiana. OCLC 883370.\n[…]\nRegia Aeronautica Italiana – Entry on Francesco Baracca[link removed]\n[…]\nFrancesco Baracca Museum in Lugo di Romagna"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferrari",
        "situacao": "ok",
        "texto": "Ferrari S.p.A. (; Italian: [ferˈraːri]) is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947. Ferrari became a public company in 1960, and from 1963 to 2014, it was a subsidiary of Fiat S.p.A. It was sp\n[…]\nEnzo Ferrari offered an account of the horse's origins. In his story, after a 1923 victory in Ravenna, the family of Francesco Baracca, a deceased flying ace who painted the emblem on his airplane, paid him a visit.\n[…]\nPaolina de Biancoli, Francesco's mother, suggested that Ferrari adopt the horse as a good luck charm: he accepted the request, and the Prancing Horse was first used by his racing team in 1932, applied to its Alfa Romeo 8C with the addition of a canary yellow background—the \"colour of Modena\", Enzo's hometown. The rectangular Prancing Horse has been used since 1947, when the Ferrari 125 S—also the first Ferrari-branded sports car—became the first to wear it.\n[…]\nFor many years, rosso corsa ('racing red') was the required colour of all Italian racing cars. It is also closely associated with Ferrari: even after livery regulations changed, allowing race teams to deviate from their national colours, Scuderia Ferrari continued to paint its cars bright red, as it does to this day.\n[…]\nSometimes, Ferrari's desire to maintain its brand perception goes against the wishes of its clientele. In an incident in 2014, the musician Deadmau5 was sent a cease and desist letter regarding his highly customised 458 Italia. The car, which he called the \"Purrari\", possessed custom badges and a Nyan Cat-themed wrap, and was put up for sale on Craigslist. In another case, the company sued the fashion designer Philipp Plein over \"distasteful\" Instagram posts featuring his personal 812 Superfast."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francesco_Baracca",
        "situacao": "ok",
        "texto": "Francesco Baracca (9 de maio de 1888 – 19 de junho de 1918) foi o maior ás da aviação de caça da Itália durante a Primeira Guerra Mundial. Foram-lhe creditadas 34 vitórias aéreas. O emblema que ele usava em seu avião, um cavalo negro empinando sobre as duas patas traseiras, inspirou Enzo Ferrari a usá-lo em seu carro de corrida e, posteriormente, em sua empresa automobilística.\n[…]\nAs 34 vitórias reivindicadas por Baracca podem ser amplamente verificadas a partir de perdas austro-húngaras conhecidas e registros militares sobreviventes, estabelecendo o italiano como um dos pilotos Aliados com mais vitórias durante o conflito. Após a guerra, sua casa em Lugo foi transformada no Museu Francesco Baracca, que exibe lembranças, uniformes e medalhas da vida de Baracca, bem como lemes e metralhadoras retiradas de aeronaves abatidas.\n[…]\nEm 17 de junho de 1923, um encontro único entrelaçou os destinos do Cavalo Empinado e de Enzo Ferrari para sempre. Enzo Ferrari escreveu sobre aquele encontro: 'Quando venci meu primeiro Circuito Savio em Ravena em 1923, conheci o Conde Enrico Baracca e a Condessa Paolina, pais do herói voador. Um dia, a Condessa me disse: \"Ferrari, por que você não coloca o cavalo empinado do meu filho em seus carros?\n[…]\nIsso lhe trará boa sorte.\" O Cavalo era e sempre será preto; eu adicionei o fundo amarelo-canário, a cor da cidade de Modena.' No entanto, o símbolo do Cavalo Empinado não apareceria nos carros da Scuderia Ferrari até 9 de julho de 1932. A montanha-russa no Ferrari World na Ilha de Yas, Flying Aces, recebeu esse nome em sua homenagem e tem sua temática.\n[…]\nFlavio Baracchini\n[…]\nGabriele, Mariano (1963). «BARACCA, Francesco». Dizionario Biografico degli Italiani (em italiano). 5: Bacca–Baratta. Roma: Istituto dell'Enciclopedia Italiana. OCLC 883370\n[…]\nRegia Aeronautica Italiana – Entry on Francesco Baracca\n[…]\nFrancesco Baracca Museum in Lugo di Romagna",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hindenburg",
      "descricao": "Dirigível alemão de passageiros destruído por um incêndio em Lakehurst, nos Estados Unidos, em 1937."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que banda britânica de rock estampou uma imagem do incêndio do dirigível Hindenburg na capa do seu primeiro disco?",
    "resposta": "Led Zeppelin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Led_Zeppelin_(album)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_(album)",
        "situacao": "ok",
        "texto": "Led Zeppelin (sometimes referred to as Led Zeppelin I) is the debut studio album by the English rock band Led Zeppelin. It was released in January 1969 in the United States, and on 31 March 1969 in the United Kingdom, through Atlantic Records.\n[…]\nRock journalist Cameron Crowe noted years later: \"It was a time of 'super-groups', of furiously hyped bands who could barely cut it, and Led Zeppelin initially found themselves fighting upstream to prove their authenticity.\"\n[…]\nThe album's success and influence is widely acknowledged, even by publications that were initially sceptical. In 2006, Mikal Gilmore commented in Rolling Stone on the originality of the music, and Zeppelin's heavy style, contrasting them with Cream, Jimi Hendrix, the MC5 and the Stooges, and noting that they had mass appeal. Led Zeppelin was cited by Stephen Thomas Erlewine as \"a significant turning point in the evolution of hard rock and heavy metal\".\n[…]\nSheldon Pearce from Consequence of Sound regarded it as Zeppelin's \"ode to rock's progressive metamorphosis\" and \"the first hard rock domino\" for their future accomplishments: \"Its orchestration delves adventurously through hard rock and heavy metal with bluesy undertones that often cause the chords to weep poignantly as if struck with malice\".\n[…]\nThe album was described as a \"brilliant if heavy-handed blues-rock offensive\" by popular music scholar Ronald Zalkind. Martin Popoff argued that while the album may not have been the first heavy metal record, it did feature what was likely to be the first metal song – \"Communication Breakdown\" – \"with its no-nonsense machine gun between the numbers riff\". In 2003, VH1 named Led Zeppelin the 44th-greatest album of all time.\n[…]\nLed Zeppelin at Discogs (list of releases)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Led_Zeppelin_%28%C3%A1lbum%29",
        "situacao": "ok",
        "texto": "Led Zeppelin é o álbum de estreia da banda britânica de rock Led Zeppelin. É amplamente aclamado pela crítica e pelo público pelo seu som pesado e inovador, sendo reconhecido como um dos álbuns precursores do heavy metal e do hard rock.\n[…]\nQuando ainda durante esse ano o logo foi alterado para cor de laranja, o invólucro turquesa tornou-se um artigo de colecionador. Em 2001, Greg Kot escreveu para a Rolling Stone que \"a capa do Led Zeppelin ... mostra o dirigível Hindenburg, em toda sua glória fálica, descendo em chamas. A imagem fez um trabalho muito bom de encapsular a música interior ... catástrofe, sexo e coisas explodindo\".\n[…]\nO disco de estreia da banda foi lançado em 13 de janeiro de 1969, entretanto, Grant já estava enviando cópias antecipadas de marca branca do disco nas principais estações de rádio FM, com o intuito de ajudar a divulgar a banda na América do Norte antes do início de uma turnê.\n[…]\nO álbum exerceu influência nos músicos da banda norte-americana de hard rock Aerosmith, assim como muitos discos posteriores do Led Zeppelin, além dos Yardbirds. Joe Perry citou que conhecer Page em 1990 foi algo \"além do reino da possibilidade.\" Tom Hamilton falou sobre a primeira vez que ouviu o disco de estreia da banda e suas impressões positivas do álbum.\n[…]\nEm 2014, Page anunciou a reedição do primeiro disco da banda junto aos seus sucessores Led Zeppelin II e os demais discos a serem relançados no mercado em 2 de junho do mesmo ano. As versões foram relançadas com remasterização e novos projetos gráficos. As edições de luxo trazem faixas bônus inéditas, resgatadas dos arquivos da banda. O grupo havia anunciado que estava em um \"extenso programa de reedição\" de seus nove álbuns de estúdio que foram remasterizados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Hindenburg",
      "descricao": "Dirigível alemão de passageiros destruído por um incêndio em Lakehurst, nos Estados Unidos, em 1937."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Que gás enchia o dirigível alemão Hindenburg, destruído por um incêndio nos Estados Unidos em 1937?",
    "resposta": "Hidrogênio",
    "distratores": [
      "Hélio",
      "Metano",
      "Nitrogênio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindenburg_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindenburg_disaster",
        "situacao": "ok",
        "texto": "The Hindenburg disaster was an airship accident that occurred on May 6, 1937, in Manchester Township, New Jersey, United States. The LZ 129 Hindenburg (Luftschiff Zeppelin #129; Registration: D-LZ 129) was a German commercial passenger-carrying rigid airship, the lead ship of the Hindenburg class, the longest class of flying machine and the largest airship by envelope volume.\n[…]\nIn his book LZ-129 Hindenburg (1964), Zeppelin historian Douglas Robinson commented that although ignition of free hydrogen by static discharge had become a favored hypothesis, no such discharge was seen by any of the witnesses who testified at the official investigation into the accident in 1937. He continues:\n[…]\nModern experiments that recreated the fabric and coating materials of the Hindenburg seem to discredit the incendiary fabric hypothesis. They conclude that it would have taken about 40 hours for the Hindenburg to burn if the fire had been driven by combustible fabric. Two additional scientific papers also strongly reject the fabric hypothesis.\n[…]\nThe short film Hindenburg Explodes (1937) is available for free viewing and download at the Internet Archive.\n[…]\nThe short film Hindenburg Crash, June 5, 1937 (Disc 2) (1937) is available for free viewing and download at the Internet Archive.\n[…]\nMay 10, 1937 Special report on the Hindenburg disaster. Universal Newsreel YouTube\n[…]\nThe Hindenburg Makes Her Last Standing at Lakehurst – Life magazine article from 1937\n[…]\nRadio Gives Fast Zeppelin Coverage – Broadcasting Magazine. p. 14. (May 15, 1937) article on how radio reported the Hindenburg disaster\n[…]\nUnder Fire! – WLS Stand By magazine (May 15, 1937) article on Herb Morrison and his engineer Charlie Nehlsen reporting the Hindenburg disaster\n[…]\n\"Hindenburg & Hydrogen\" by Dr. Karl Kruszelnicki\n[…]\nFaces of the Hindenburg: Biographies and photographs of the survivors and victims of the final voyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Desastre_do_Hindenburg",
        "situacao": "ok",
        "texto": "O desastre do Hindenburg ocorreu em 6 de maio de 1937, em Lakehurst, Nova Jersey, Estados Unidos. O dirigível alemão de passageiros LZ 129 Hindenburg pegou fogo e foi destruído durante a sua tentativa de atracar com o seu mastro de amarração na Estação Aérea Naval de Lakehurst. A bordo estavam 97 pessoas (36 passageiros e 61 tripulantes); houve 36 mortes (13 passageiros e 22 tripulantes, 1 trabalh\n[…]\nO gás de hidrogênio usado para mantê-lo no ar, altamente inflamável, foi inicialmente responsabilizado pelo enorme incêndio que tomou conta da aeronave e durou exatos trinta segundos. Logo após o evento, o governo alemão também sugeriu, de imediato, que uma sabotagem derrubara o grandioso zeppelin, que representava a superioridade tecnológica daquele país. Ambas as afirmações iam-se mostrar, contudo, essencialmente incorretas após as investigações.\n[…]\nA comissão americana, que investigou o acidente junto com a companhia Zeppelin, atribuiu falha humana ao acidente. Uma brusca manobra momentos antes do pouso causou o rompimento de um dos tanques de hidrogênio e uma faísca dera a início à ignição.\n[…]\nO hidrogênio, que também contribuiu de forma indireta para o incêndio, queima com chama azulada, quase invisível. Uma aeronave de dimensões idênticas, o LZ-130 Graf Zeppelin II, que substituiria o veterano LZ-127, chegou a ser construída por completo, mas foi desmontada em 1940, sem nunca ter operado regularmente.\n[…]\nUma outra hipótese aventada, chamada de \"Incendiary Paint Theory\" (IPT), culpava não o gás hidrogênio mas sim a própria estrutura do balão, construído com tecido de algodão impermeabilizado com acetato de celulose e recoberto com pó aglutinado de alumínio (a fim de conferir-lhe uma cor prateada permitindo o destaque da suástica) ligeiramente inflamáveis — pelo início e pela veloz propagação das chamas após iniciadas, essas vermelhas e amarelas, conforme relatos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Bondinho do Pão de Açúcar",
      "descricao": "Teleférico que liga a Praia Vermelha aos morros da Urca e do Pão de Açúcar, no Rio de Janeiro, inaugurado em 1912."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O bondinho do Pão de Açúcar começou a funcionar no mesmo ano em que afundou qual famoso transatlântico?",
    "resposta": "Titanic",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bondinho_do_Pão_de_Açúcar",
      "https://en.wikipedia.org/wiki/Titanic"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bondinho_do_Pão_de_Açúcar",
        "situacao": "ok",
        "texto": "Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca, no município brasileiro do Rio de Janeiro. Liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar.\n[…]\nO seu nome vem da semelhança dos carros do teleférico com os bondes que circulavam no Rio de Janeiro à época de sua inauguração. O Bondinho é privatizado, administrado pela concessionária Companhia Caminho Aéreo Pão de Açúcar, empresa criada pelo idealizador do projeto, o engenheiro Augusto Ferreira Ramos, desde a sua construção.\n[…]\nÀ inauguração do bondinho, em 27 de outubro de 1912, o teleférico só subia da Praia Vermelha até o morro da Urca. Três meses depois, em 18 de janeiro de 1913, já ia até o alto do Pão de Açúcar.\n[…]\nEm outubro de 1972, uma segunda linha, paralela, foi inaugurada, e os cabos de aços e os bondinhos foram trocados. As novas cabines importadas da Itália tinham capacidade para 75 passageiros. Com mais espaço e dois bondes em funcionamento, o fluxo aumentou de 115 para 1 360 passageiros por hora. Posteriormente, a capacidade foi reduzida para 65 por questões de conforto.\n[…]\nO bondinho foi cenário do filme 007 Contra o Foguete da Morte, de 1979, no qual o agente secreto britânico James Bond (interpretado pelo ator Roger Moore) derrota seu inimigo Dentes de Aço, interpretado por Richard Kiel. Ainda em 1979, o equilibrista Steven McPeak caminhou sobre o cabo de aço, no trecho mais alto do percurso do bondinho.\n[…]\nO bondinho funciona das 8 às 20 horas ao longo de duas rotas: uma ligando a base do morro da Babilônia ao morro da Urca e outra ligando o morro da Urca ao pico do Pão de Açúcar."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Titanic",
        "situacao": "ok",
        "texto": "RMS Titanic was a British ocean liner that sank in the early hours of 15 April 1912 after striking an iceberg on her maiden voyage from Southampton, England, to New York City. Of the 2,208 passengers and crew aboard, approximately 1,500 died (estimates vary), making the incident one of the deadliest peacetime sinkings of a single ship.\n[…]\nAround 4 am, RMS Carpathia arrived on the scene in response to Titanic's earlier distress calls.\n[…]\nDespite over 1,600 ships being built by Harland and Wolff in Belfast Harbour, Queen's Island became rebranded after its most famous ship, Titanic Quarter in 1995. Once a sensitive story, Titanic is now considered one of Northern Ireland's most revered and uniting symbols.\n[…]\nThere have been several proposals and studies for a project to build a replica ship based on the Titanic.\n[…]\nA Chinese shipbuilding company known as Wuchang Shipbuilding Industry Group Co., Ltd commenced construction in November 2016 to build a replica ship of the Titanic for use in a resort. The vessel was to house many features of the original, such as a ballroom, dining hall, theatre, first-class cabins, economy cabins and swimming pool. Tourists were to be able to reside inside the Titanic during their time at the resort.\n[…]\nTitanic conspiracy theories\n[…]\nTitanic in popular culture\n[…]\nSS Atlantic – White Star Line ship lost in 1873 with the greatest loss of life for the company before Titanic\n[…]\nTitanic Historical Society\n[…]\nRMS Titanic Inc. - the salvor-in-possession of the Titanic wreck site\n[…]\nTitanic collected news and commentary at The Guardian\n[…]\nTitanic collected news and commentary at The New York Times\n[…]\nTitanic in Black and White at Library of Virginia\n[…]\nTitanic Footage and Survivors Interviews on YouTube\n[…]\nTitanic Footage: Leaving Belfast – British Pathé on YouTube\n[…]\nRMS Titanic: Fascinating Engineering Facts on YouTube"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Expresso do Oriente",
      "descricao": "Serviço ferroviário de luxo criado em 1883 entre Paris e Constantinopla."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que escritora inglesa ambientou um de seus romances policiais mais famosos a bordo do Expresso do Oriente?",
    "resposta": "Agatha Christie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Murder_on_the_Orient_Express",
        "situacao": "ok",
        "texto": "Murder on the Orient Express is a mystery novel with a closed circle of suspects, written by English writer Agatha Christie and featuring the Belgian detective Hercule Poirot. It was first published in the United Kingdom by the Collins Crime Club on 1 January 1934. In the United States, it was published on 28 February 1934, under the title of Murder in the Calais Coach, by Dodd, Mead and Company. \n[…]\nDavid Suchet reprised the role of Hercule Poirot in \"Murder on the Orient Express\" (2010), a 90-minute movie-length episode of the television series Agatha Christie's Poirot co-produced by ITV Studios and WGBH-TV, adapted for the screen by Stewart Harcourt. The original air date was 11 July 2010 in the United States, and it was aired on Christmas Day 2010 in the UK.\n[…]\nThe point and click computer game Agatha Christie: Murder on the Orient Express was released in November 2006 for Windows and expanded on Agatha Christie's original story, revolving around Antoinette Marceau – a new character created specifically for the game – as Hercule Poirot (voiced by David Suchet) is ill and recovering in his train compartment.\n[…]\nOn October 19, 2023, Microids released a new video game adaptation titled Agatha Christie – Murder on the Orient Express. Having one prologue and thirteen chapters, Agatha Christie – Murder on the Orient Express faithfully adapts and modernizes the novel's plot, with the main characters retaining their original names and using mobile phones and computers. Players alternately take on the two roles of Poirot and an American detective named Joanna Locke.\n[…]\nAgatha Christie – Murder on the Orient Express is available on PC and PlayStation, Xbox, and Nintendo Switch consoles.\n[…]\nBaron Hotel – where Christie wrote the first part of the novel\n[…]\nOrient Express – the service on which Christie based her novel\n[…]\nMurder on the Orient Express at the official Agatha Christie website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Murder_on_the_Orient_Express",
        "situacao": "ok",
        "texto": "Murder on the Orient Express (Assassinato no Expresso Oriente, no Brasil / Um Crime no Expresso Oriente ou Crime no Expresso do Oriente, em Portugal) é um romance policial escrito por Agatha Christie e protagonizado pelo detetive belga Hercule Poirot. Foi publicado pela primeira vez no Reino Unido em 1º de Janeiro de 1934, pela editora Collins Crime Club. Chegou aos Estados Unidos em 28 de Feverei\n[…]\nO título americano foi alterado para Murder in the Calais Coach de modo a evitar confusão com a novela Stamboul Train, escrita pelo inglês Henry Grahan Greene, em 1932, e publicada nos Estados Unidos sob o título Orient Express.\n[…]\nPouco depois da meia-noite, uma tempestade de neve para o Expresso Oriente nos trilhos. O luxuoso trem está surpreendentemente cheio para essa época do ano. Mas, na manhã seguinte, há um passageiro a menos. Um homem é encontrado morto em sua cabine com doze facadas. Com o trem preso na neve, cabe à Hercule Poirot desvendar esse misterioso e conturbado crime.\n[…]\nO livro é baseado no verdadeiro caso de um sequestro ocorrido nos Estados Unidos, em 1932. Agatha Christie resolveu utilizar esse fato para criar um grande conflito moral nos leitores.\n[…]\n1974 Murder on the Orient Express.\n[…]\n2001 Murder on the Orient Express.\n[…]\n2017 Murder on the Orient Express.\n[…]\nRomance de espionagem",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro, pioneiro dos dirigíveis e do 14-bis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que objeto o joalheiro Louis Cartier criou para o amigo Santos Dumont ver as horas sem tirar as mãos dos comandos?",
    "resposta": "Relógio de pulso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
      "https://en.wikipedia.org/wiki/Cartier_(jeweler)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nIn 1904, renowned French jeweller Louis Cartier debuted the Santos-Dumont, a watch designed for the aviator himself. It was the first wristwatch the Maison made, and the collection retails to this day.\n[…]\nSantos-Dumont's friend Louis Cartier created a wristwatch for him in 1904. Up to that point, only women had wristwatches as they were considered a jewelry or fashion item only suitable for women; men only carried pocket watches. But Santos-Dumont needed both hands for flying and so Cartier created a wristwatch with a leather strap for him and called it the Cartier-Santos-Dumont.\n[…]\n(...) Hoffman did not understand the customs and values of the time and saw everything with the distorted view that was held at that time in the United States.\" Also, in his article \"Alberto Santos-Dumont: Pioneiro da Aviação,\" Barros notes that Santos-Dumont had a media-heralded engagement to Edna Powers, daughter of an American millionaire. Cosme Degenar Drumond, writer of \"Alberto Santos-Dumont: Novas Revelações,\" says that in France Santos-Dumont has \"a reputation as a conqueror\".\n[…]\nMusa, João Luis (2001). Alberto Santos Dumont – Eu naveguei pelo ar (in Brazilian Portuguese). Rio de Janeiro: Nova Fronteira.\n[…]\nWorks by Alberto Santos-Dumont at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Alberto Santos-Dumont at the Internet Archive\n[…]\nAlberto Santos Dumont Article by writer Patricia Nell Warren.\n[…]\nAviation Pioneer Santos-Dumont, Technological Institute of Aeronautics (ITA)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cartier_(jeweler)",
        "situacao": "ok",
        "texto": "Cartier ( KAR-tee-ay, French: [kaʁtje] ) is a French luxury goods conglomerate that designs, manufactures, distributes and sells jewelry, watches, leather goods, sunglasses and eyeglasses. Founded in 1847 by Louis-François Cartier (1819–1904) in Paris, France, the company remained under family control until 1964. The company is headquartered in Paris and is currently a subsidiary of the Swiss Rich\n[…]\nIn 1904, Brazilian pioneer aviator, Alberto Santos-Dumont complained to his friend Louis Cartier of the unreliability and impracticality of using pocket watches while flying. Cartier designed a flat wristwatch with a distinctive square bezel that was favored by Santos-Dumont and many other customers. This was the first and only time the brand would name a watch after its original wearer. The \"Santos\" watch was Cartier's first men's wristwatch.\n[…]\n1978 – Creation of the Santos de Cartier watch with a gold and steel bracelet. Creation of the first Cartier scarf collection.\n[…]\n1981 – Launch of the Must de Cartier and Santos de Cartier perfumes.\n[…]\nFrom its inception, Empress Eugénie was a valued client of Louis-François Cartier and Alfred Cartier, which solidified the reputation of the jeweler. Princess Mathilde, a relative of Napoleon and cousin of Emperor Napoleon III, made her initial purchase in 1856 and maintained her loyalty as a customer. The diamond tiara adorned with olive leaf motifs that Princess Marie Bonaparte wore highlighted the splendor of the Bonaparte family.\n[…]\nGrace Kelly possessed a diverse collection of jewelry, including her engagement ring from Prince Rainier III in 1955, princely emblems, various brooches, and clips she wore at the birth of Prince Albert. The Duchess of Cambridge wore a Cartier tiara from 1936 on her wedding day, which was originally commissioned by King George VI for his wife and later gifted to Princess Elizabeth on her 18th birthday.\n[…]\nCartier Tank"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos_Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos Dumont (Palmira, 20 de julho de 1873 – Guarujá, 23 de julho de 1932) foi um aeronauta, esportista, autodidata e inventor brasileiro. Santos Dumont projetou, construiu e voou os primeiros balões dirigíveis com motor a gasolina. Esse mérito lhe é garantido internacionalmente pela conquista do Prêmio Deutsch em 1901, quando em um voo contornou a Torre Eiffel com o seu dirigível Nº 6, t\n[…]\nEm 25 de julho de 1909, Louis Blériot atravessou o Canal da Mancha, tornando-se um herói na França. Santos Dumont, em carta, parabenizou Blériot, seu amigo, com as seguintes palavras: \"Esta transformação da geografia é uma vitória da navegação aérea sobre a navegação marítima. Um dia, talvez, graças a você, o avião atravessará o Atlântico\". Blériot, então, respondeu: \"Eu não fiz mais do que segui-lo e imitá-lo. Seu nome para os aviadores é uma bandeira. Você é o nosso líder\".\n[…]\nEm 2012, a Cartier produziu uma série de relógios com o nome do piloto brasileiro, celebrando a parceria entre a marca e Santos Dumont, responsável pelo desenho que até hoje é característico da empresa; como peça publicitária foi realizado um premiado filme pela francesa Quad Productions France com animação digital a mesclar-se em locações reais, em que aparece o piloto brasileiro interagindo com um leopardo, figura central da peça — intitulada L'Odyssée de Cartier.\n[…]\nAlém disso, em seu artigo \"Alberto Santos-Dumont: pioneiro da aviação\", Barros nota que Dumont chegou a ter um noivado anunciado pela mídia com Edna Powers, filha de um milionário americano. Além disso, Cosme Degenar Drumond, escritor de \"Alberto Santos-Dumont: Novas Revelações\", diz que na França Dumont tem \"fama de conquistador\".\n[…]\nColeção Santos Dumont\n[…]\nSantos Dumont — Academia Brasileira de Letras\n[…]\n«Histórias do Brasil - Santos Dumont»  — TV Senado\n[…]\n«O que eu vi, o que nós veremos»  — livro escrito por Dumont",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Peugeot",
      "descricao": "Fabricante francesa de automóveis, originada de uma empresa familiar de produtos de aço do século dezenove."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além de carros, a marca francesa Peugeot está ligada a que utensílio de cozinha, fabricado desde o século dezenove?",
    "resposta": "Moedor de pimenta",
    "distratores": [
      "Panela de pressão",
      "Abridor de latas",
      "Faca de chef"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peugeot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot (UK:  , US:  ; French: [pøʒo] ) is a French automobile brand owned by Stellantis.\n[…]\nFrance (Stellantis Rennes Plant): Peugeot 508, Peugeot 5008 (Second Generation)\n[…]\nFrance (joint venture Sevel Nord near Valenciennes): Peugeot Expert\n[…]\nPeugeot has flagship dealerships, named Peugeot Avenue, located on the Champs-Élysées in Paris, and in Berlin. The Berlin showroom is larger than the Paris one, but both feature regularly changing mini-exhibitions displaying production and concept cars. Both also feature a small Peugeot Boutique, and they are popular places for Peugeot fans to visit. Peugeot Avenue Berlin also features a café, called Café de France. The Peugeot Avenue at Berlin closed in 2009.\n[…]\nPeugeot also produced bicycles starting in 1882 in Beaulieu, France (with ten Tour de France wins between 1903 and 1983), followed by motorcycles and cars in 1889. In the late 1980s Peugeot sold the North American rights to the Peugeot bicycle name to ProCycle, a Canadian company which also sold bicycles under the CCM and Velo Sport names. The European rights were briefly sold to Cycleurope S.A., returning to Peugeot in the 1990s.\n[…]\nProduction remains centered in Quingey, in the Franche-Comté region of France, where most of its mills are manufactured. The firm has been awarded the French Entreprise du Patrimoine Vivant (Living Heritage Company) label in recognition of its traditional expertise. Peugeot Saveurs reports annual production of more than two million mills and exports to over 80 countries. The company employs around 185 people, most of them at the Quingey facility."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peugeot",
        "situacao": "ok",
        "texto": "Peugeot ([inglês RU: ˈpɜːʒəʊ], [inglês EUA: p(j)uːˈʒoʊ], francês: [pøʒo]) é uma fabricante de automóveis francesa fundada em 1810 por Armand Peugeot, pertencente à Stellantis. É a marca de automóveis mais antiga do mundo.\n[…]\nA família Peugeot, que desde 1810 tinham um moinho hidráulico familiar, vem envolvida em vários tipos de negócios desde o século XVIII. Em 1842, entraram no ramo alimentício produzindo moinhos de café, depois disso começaram a produzir armações para vestidos, guarda-chuvas, fundição de aço, ferramentas e utensílios domésticos, em 1882 começaram a fabricar bicicletas e motos.\n[…]\nDesde então, o logotipo associado à Peugeot foi evoluindo sempre a partir da imagem de um leão. Até 2002, foram sete as modificações feitas ao emblema, cada uma delas feita a pensar num maior impacto visual, solidez e flexibilidade de aplicação. Em janeiro de 2010, por ocasião do 200º aniversário da marca, a Peugeot anunciou a sua nova identidade visual.\n[…]\nCriado pela equipe de designers da marca, o felino francês ganhou contornos mais minimalistas mas ao mesmo tempo dinâmicos, além de apresentar um aspecto metalizado e modernista. O leão libertou-se igualmente do fundo azul para, segundo a marca, “exprimir melhor a sua força”. O primeiro veículo a ostentar o novo logotipo da marca foi o Peugeot RCZ, lançado no mercado europeu no primeiro semestre de 2010. Foi, sem dúvida, a celebração de um bicentenário projetado para o futuro.\n[…]\n1986 — Peugeot 205 Turbo 16 — Ganha campeonato (Pilotos e Carros)\n[…]\n2000 — Peugeot 206 WRC — Ganha o campeonato (Pilotos e Carros)\n[…]\n2001 — Peugeot 206 WRC — Ganha o campeonato (Somente Carros)\n[…]\n2002 — Peugeot 206 WRC — Ganha o campeonato (Pilotos e Carros)\n[…]\nPeugeot J7\n[…]\nPeugeot J9\n[…]\nPeugeot P4\n[…]\nPeugeot",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Lamborghini",
      "descricao": "Fabricante italiana de carros esportivos fundada por Ferruccio Lamborghini em 1963."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O nome Lamborghini aparece em carros esportivos e também em qual veículo, que seu fundador já fabricava antes?",
    "resposta": "Tratores",
    "distratores": [
      "Motocicletas",
      "Caminhões",
      "Lanchas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lamborghini",
      "https://en.wikipedia.org/wiki/Lamborghini_Trattori"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini",
        "situacao": "ok",
        "texto": "Automobili Lamborghini S.p.A. (colloquially Lambo) is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.\n[…]\nAs of 2011, Lamborghini is structured as a wholly owned subsidiary of Audi AG named Automobili Lamborghini S.p.A.\n[…]\nUnder the agreements, Automóviles Lamborghini is also allowed to manufacture Lamborghini vehicles and market them worldwide under the Lamborghini brand.\n[…]\nAutomóviles Lamborghini has produced two rebodied versions of the Diablo called the Eros and the Coatl. In 2015, Automóviles Lamborghini transferred the IP-rights to the Coatl foundation (chamber of commerce no. 63393700) in The Netherlands in order to secure these rights and to make them more marketable. The company has announced the production of a speedboat called the Lamborghini Glamour.\n[…]\nDeMatio, Joe (May 2003). \"Lamborghini's Big Four-O\". Automobile. Ann Arbor, Michigan: Source Interlink Media. ISSN 0894-3583. Archived from the original on 31 July 2012. Retrieved 10 August 2012.\n[…]\n\"Principales cláusulas de los contratos con USA e Italia\" [Main Contract Terms between USA and Italy]. lamborghini-latinoamerica.com (in Spanish). Automóviles Lamborghini Latinoamérica S.A. de C.V. 5 August 1995. Archived from the original (JPG) on 2 October 2013. Retrieved 2 August 2012.\n[…]\n\"Volkswagen Aktiengesellschaft Facts and Figures 2012\" (PDF). Volkswagen AG. 11 June 2012. 1058.809.453.20. Archived from the original (PDF) on 2 October 2013. Retrieved 10 August 2012. Automobili Lamborghini S.p.A. (867 employees, founded in 1963, wholly owned by Audi AG since 1998)\n[…]\nLamborghini Car Register Archived 17 April 2021 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lamborghini_Trattori",
        "situacao": "ok",
        "texto": "Lamborghini Trattori is an Italian agricultural machinery manufacturer. The company designs and builds tractors. It was founded in 1948 in Cento, Italy, by Ferruccio Lamborghini, who later went on to establish Automobili Lamborghini. In 1973, it became part of SAME (Società Accomandita Motori Endotermici).\n[…]\nA new plant was opened in 1956; in 1957, in the wake of the SAME Sametto, the company introduced the Lamborghinetta (weighing 1000 kg, with a 22 HP two-cylinder engine, and sold at a price of around one million lire).\n[…]\nIn 1962, with its \"2R DT\" model, Lamborghini produced a series of four-wheel-drive tractors with air-cooled engines.\n[…]\nFlush with cash from his success in tractors and air conditioners, and following an argument with Enzo Ferrari about a faulty clutch in his Ferrari 250 GT, Ferruccio Lamborghini decided to start building his own luxury cars and introduced the Lamborghini marque. The first model introduced was the 350 GTV in 1963, which evolved into the production version 350 GT in 1964 and then further with the 400GT 2+2 in 1966.\n[…]\nThe highly sought after Miura came in 1966, pushing Automobili Lamborghini into the world of super sports cars it is known for today.\n[…]\nThanks to a notable increase in sales, in 1968–69 Lamborghini Trattori adopted a strategy aimed at improving both the technical quality of its tractors and the production volumes. Lamborghini tractors were the first in Italy to be fitted with a synchronised gearbox as standard, and the range was further extended with high-power models.\n[…]\nThanks to Nitro, Lamborghini Trattori won a series of international awards, including Tractor of the Year – Golden Tractor for the Design 2014 and the RedDot Award 2014."
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
    "indice": 32,
    "ancora": {
      "nome": "Zepelim",
      "descricao": "Tipo de dirigível rígido desenvolvido na Alemanha no fim do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que conde alemão desenvolveu os grandes dirigíveis rígidos que até hoje são chamados pelo seu sobrenome?",
    "resposta": "Ferdinand von Zeppelin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zeppelin",
      "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zeppelin",
        "situacao": "ok",
        "texto": "A Zeppelin is a type of rigid airship named after the German inventor Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn] ) who pioneered rigid airship development at the beginning of the 20th century. Zeppelin's notions were first formulated in 1874 and developed in detail in 1893. They were patented in Germany in 1895 and in the United States in 1899. After the outstanding success of the\n[…]\nCount Ferdinand von Zeppelin's interest in airship development began in 1874, when he was inspired by a lecture given by Heinrich von Stephan on the subject of \"World Postal Services and Air Travel\" to outline the basic principle of his later craft in a diary entry dated 25 March 1874. It describes a large rigidly framed outer envelope containing several separate gasbags.\n[…]\nAnother two years passed before 18 September 1928, when the new dirigible, christened Graf Zeppelin in honour of the Count, flew for the first time. With a total length of 236.6 metres (776 ft) and a volume of 105,000 m3, it was the largest dirigible to have been built at the time. Eckener's initial purpose was to use Graf Zeppelin for experimental and demonstration purposes to prepare the way for regular airship traveling, carrying passengers and mail to cover the costs.\n[…]\nAs with the October 1928 flight to New York, Hearst had placed a reporter, Grace Marguerite Hay Drummond-Hay, on board: she therefore became the first woman to circumnavigate the globe by air. From there, Graf Zeppelin flew to Friedrichshafen, then Tokyo, Los Angeles, and back to Lakehurst, in 21 days, 5 hours, and 31 minutes. Including the initial and final trips between Friedrichshafen and Lakehurst and back, the dirigible had travelled 49,618 kilometres (30,831 mi).\n[…]\nZeppelin Museum Friedrichshafen\n[…]\nZeppelin Luftschifftechnik GmbH – The original company, now developing the Zeppelin NT\n[…]\nDark Autumn: The 1916 German Zeppelin Offensive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ferdinand_von_Zeppelin",
        "situacao": "ok",
        "texto": "Count Ferdinand von Zeppelin (German: Ferdinand Adolf Heinrich August Graf von Zeppelin; 8 July 1838 – 8 March 1917) was a German general and later inventor of the Zeppelin rigid airships. His name became synonymous with airships and dominated long-distance flight until the 1930s. He founded the company Luftschiffbau Zeppelin.\n[…]\nFerdinand was the son of Württemberg Minister and Hofmarschall Friedrich Jerôme Wilhelm Karl Graf von Zeppelin (1807–1886) and his wife Amélie Françoise Pauline (born Macaire d'Hogguer) (1816–1852). Ferdinand spent his childhood with his sister and brother at their Girsberg manor near Konstanz, where he was educated by private tutors. Ferdinand married Isabella Freiin von Wolff in Berlin.\n[…]\nFerdinand von Zeppelin served as an official observer with the Union Army during the U.S Civil War. During the Peninsular Campaign, he visited the balloon camp of Thaddeus S. C. Lowe shortly after Lowe's services were terminated by the Army. Zeppelin then travelled to St. Paul, where the German-born former Army balloonist John Steiner offered tethered flights. His first ascent in a balloon is said to have been the inspiration of his later interest in aeronautics.\n[…]\nZeppelin\n[…]\nVömel, Alexander (1909–1933). Graf Ferdinand von Zeppelin – Ein Mann der Tat.\n[…]\nLiterature by and about Ferdinand von Zeppelin in the German National Library catalogue\n[…]\n\"Biographie: Ferdinand Graf von Zeppelin, 1838–1917\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009.\n[…]\nMichael \"Walter\" Walz. \"Stuttgart im Bild – Ferdinand Graf von Zeppelin\" (in German). Deutschen Historischen Museums. Retrieved 12 September 2009. (Gravestone in Stuttgart, biography and images)\n[…]\nNewspaper clippings about Ferdinand von Zeppelin in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zepelim",
        "situacao": "ok",
        "texto": "Zeppelin ou Zepelim é um tipo de aeróstato rígido, mais especificamente um dirigível, cujo nome é uma homenagem ao Conde alemão Ferdinand Von Zeppelin, que foi pioneiro no desenvolvimento de dirigíveis rígidos no início do século XX. As primeiras ideias de Zeppelin foram formuladas em 1874 e desenvolvidas em detalhes em 1893, sendo patenteadas na Alemanha em 1895 e nos Estados Unidos em 1899.\n[…]\nO interesse do conde Ferdinand von Zeppelin no desenvolvimento de dirigíveis começou em 1874, quando ele se inspirou em uma palestra dada por Heinrich von Stephan, sobre o tema “Serviços postais mundiais e viagens aéreas”, para esboçar os princípios básicos de seu futuro aeróstato em um diário datado de 25 de Março de 1874. No diário, é descrito um grande envelope exterior, rigidamente emoldurado contendo várias cavidades de ar separadas.\n[…]\nFerdinand von Zeppelin começou a se dedicar mais seriamente ao seu projeto depois da sua reforma antecipada do exército em 1890 aos 52 anos. Convencido da importância potencial da aviação, ele começou a trabalhar em vários projetos em 1891, e teve esboços completamente detalhados em 1893. Um ano depois, em 1894, um comitê oficial revisou seus trabalhos e o concedeu a patente em 1895, tendo Theodor Kober produzido os desenhos técnicos.\n[…]\nImpelido pelo desejo de continuar experimentando, o Conde Von Zeppelin comprou dos outros acionistas a aeronave e os equipamentos, mas acabou eventualmente desmontando a nave em 1901.\n[…]\nEsse acidente teria terminado os experimentos de Zeppelin, mas graças aos seus trabalhos, seus voos haviam gerado grande interesse público e um senso de orgulho nacional e doações espontâneas começaram a chegar, totalizando mais de seis milhões de marcos. Essas doações permitiram o Conde fundar a Luftschiffbau Zeppelin GmbH (construção de dirigíveis Zeppelin Ltd.) e a Fundação Zeppelin.\n[…]\nDark Autumn: The 1916 German Zeppelin Offensive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Motor a diesel",
      "descricao": "Motor de combustão interna em que o combustível se inflama pela compressão do ar, sem vela de ignição."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que engenheiro alemão, que sumiu de um navio no Canal da Mancha em 1913, inventou o motor que leva seu sobrenome?",
    "resposta": "Rudolf Diesel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rudolf_Diesel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rudolf_Diesel",
        "situacao": "ok",
        "texto": "Rudolf Christian Karl Diesel (English: , German: [ˈʁuːdɔlf ˈkʀɪsti̯an kaʁl ˈdiːzl̩] ; 18 March 1858 – 29 September 1913) was a German inventor and mechanical engineer. He is best known for inventing the diesel engine, which burns diesel fuel. Both are named for him.\n[…]\nIn 1957, on the occasion of the 100th anniversary of Diesel's birth and the 60th anniversary of the diesel engine development, Yamaoka dedicated the Rudolf Diesel Memorial Garden (Rudolf-Diesel-Gedächtnishain) in Wittelsbacher Park in Augsburg, Bavaria, where Diesel had undertaken his early technical education and original engine development.\n[…]\nIn 1953, the German Institute for Inventions (Deutsches Institut für Erfindungswesen) created the Rudolf-Diesel-Medaille to recognize inventions and the entrepreneurship.\n[…]\nRudolf Diesel: Die Entstehung des Dieselmotors. Springer, Berlin 1913. ISBN 978-3-642-64940-0\n[…]\nGrosser, Morton (1978), Diesel: The Man and the Engine, New York: Atheneum, ISBN 978-0-689-30652-5, LCCN 78006196\n[…]\nMoon, John F. (1974), Rudolf Diesel and the Diesel Engine, London: Priory Press, ISBN 978-0-85078-130-4, LCCN 74182524\n[…]\nSittauer, Hans L. (1990), Biographien hervorragender Naturwissenschaftler, Techniker und Mediziner, issue 32: Nicolaus August Otto Rudolf Diesel (4th edition), Leipzig, DDR: Springer (BSB Teubner), ISBN 978-3-322-00762-9\n[…]\nBrunt, Douglas (2023), The Mysterious Case of Rudolf Diesel, United States: Atria Books, a division of Simon & Schuster, ISBN 978-1982169909\n[…]\nRudolf Diesel at ThoughtCo\n[…]\n\"Rudolf Diesel\". Hemp Car. Archived from the original on 3 August 2005. Retrieved 3 August 2005.\n[…]\n\"Diesel, Rudolf\". Encyclopedia Americana. 1920.\n[…]\n\"Diesel, Rudolf\". Collier's New Encyclopedia. 1921.\n[…]\n\"Diesel, Rudolf\". Encyclopædia Britannica (12th ed.). 1922."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rudolf_Diesel",
        "situacao": "ok",
        "texto": "Rudolf Christian Karl Diesel (Inglês [ˈdiːzəlˌ ʔsəl], de; 18 de março de 1858 – 29 de setembro de 1913) foi um inventor e engenheiro mecânico alemão. Ele é mais conhecido por inventar o motor diesel, que queima óleo diesel. Ambos levam seu nome.\n[…]\nCom a eclosão da Guerra Franco-Prussiana no mesmo ano, sua família foi deportada para a Inglaterra, estabelecendo-se em Londres, onde Diesel frequentou uma escola de língua inglesa. Antes do fim da guerra, no entanto, a mãe de Diesel enviou Rudolf, de 12 anos, para Augsburgo para viver com sua tia e tio, Barbara e Christoph Barnickel, para se tornar fluente em alemão e visitar a Königliche Kreis-Gewerbeschule (Escola Vocacional Real do Condado), onde seu tio ensinava matemática.\n[…]\nEm 1957, na ocasião do 100º aniversário do nascimento de Diesel e do 60º aniversário do desenvolvimento do motor diesel, Yamaoka dedicou o Jardim Memorial Rudolf Diesel (Rudolf-Diesel-Gedächtnishain) no Parque Wittelsbacher em Augsburgo, Baviera, onde Diesel havia realizado sua educação técnica inicial e o desenvolvimento original do motor.\n[…]\nEm 1953, o Instituto Alemão para Invenções (Deutsches Institut für Erfindungswesen) criou a Rudolf-Diesel-Medaille para reconhecer invenções e o empreendedorismo.\n[…]\nRudolf Diesel: Die Entstehung des Dieselmotors. Springer, Berlin 1913. ISBN 978-3-642-64940-0\n[…]\nMoon, John F. (1974), Rudolf Diesel and the Diesel Engine, ISBN 978-0-85078-130-4, London: Priory Press, LCCN 74182524\n[…]\nBrunt, Douglas (2023), The Mysterious Case of Rudolf Diesel, ISBN 978-1982169909, United States: Atria Books, a division of Simon & Schuster\n[…]\nRudolf Diesel no ThoughtCo\n[…]\n«Rudolf Diesel». Hemp Car. Consultado em 3 de agosto de 2005. Cópia arquivada em 3 de agosto de 2005",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Viagem de Bertha Benz",
      "descricao": "Viagem de cerca de cem quilômetros entre Mannheim e Pforzheim, na Alemanha, feita de automóvel em 1888."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1888, quem pegou escondido o automóvel do marido e fez, com os dois filhos, a primeira longa viagem de carro da história?",
    "resposta": "Bertha Benz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertha_Benz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz (German: [ˈbɛʁta ˈbɛnts] ; née Cäcilie Bertha Ringer; 3 May 1849 – 5 May 1944) was a German automotive pioneer. She was the business partner, investor and wife of automobile inventor Carl Benz. On 5 August 1888, she became the first person to drive an internal-combustion-engined automobile over a long distance, field testing the Benz Patent-Motorwagen, inventing brake lining and solvin\n[…]\nOn 5 August 1888, 39-year-old Bertha Benz drove from Mannheim to Pforzheim with her sons Richard and Eugen, thirteen and fifteen years old respectively, in a Model III, without telling her husband and without permission of the authorities, thus becoming the first person to drive an automobile a significant distance. Before this historic trip, motorized drives were merely very short trials, returning to the point of origin, made with assistance of mechanics.\n[…]\nIn 2008, the Bertha Benz Memorial Route was officially approved as a route of the industrial heritage of humankind, because it follows Bertha Benz's path during the world's first long-distance journey by automobile in 1888. Now it is possible to follow the 194 km of signs indicating her route from Mannheim via Heidelberg to Pforzheim (Black Forest) and back.\n[…]\nThe Bertha Benz Challenge, embedded in the framework of the ceremony of Automobile Summer 2011, the official German event and birthday party commemorating the invention of the automobile by Carl Benz 138 years ago, took place on Bertha Benz Memorial Route on 10 and 11 September 2011. It was open for sustainable mobility – hybrid and electric, hydrogen and fuel cell vehicles, and other economical vehicles.\n[…]\nThe motto is Bertha Benz Challenge – Sustainable Mobility on the World's Oldest Automobile Road!\n[…]\nBertha Benz Memorial Route\n[…]\nThe Car is Born Archived 18 December 2010 at the Wayback Machine – A documentary of Bertha Benz's historic drive by Ulli Kampelmann."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz, nascida Bertha Ringer (Pforzheim, 3 de maio de 1849 — Ladenburg, 5 de maio de 1944) foi uma das pioneiras do automóvel. Em 5 de agosto de 1888 ela foi a primeira pessoa na história a dirigir um automóvel a uma longa distância. Ao fazer isso, Bertha trouxe a atenção do mundo todo para o Benz Patent-Motorwagen, primeiro automóvel do mundo, iniciando as vendas da companhia.\n[…]\nBertha era uma moça bonita, inteligente e de família rica, portanto não lhe faltaram pretendentes. Em 27 de junho de 1869, porém, ela conheceu um engenheiro falido, que se juntou a ela e sua mãe em uma excursão, mencionando uma carruagem sem cavalos que ele vinha desenvolvendo, o que atraiu sua atenção imediatamente. O engenheiro era Karl Benz.\n[…]\nDois anos antes de conhecer Karl, ela usou parte de seu dote para investir em uma empresa de fundição. Mas ao se casar, pela lei alemã da época, a mulher perdia qualquer poder legal como investidora, assim qualquer decisão de negócios tinha que se conduzida por Karl. Os dois se casaram em 20 de julho de 1872 e Karl usou o dote de Bertha para investir em seus negócios, como a Benz & Cie.\n[…]\nEm 5 de agosto de 1888, aos 39 anos, Bertha dirigiu de Mannheim até Pforzheim, junto de seus filhos Richard e Eugen, de 13 e 15 anos de idade, em um Modelo III, sem contar ao marido e sem nenhuma permissão das autoridades, tornando-se a primeira pessoa a dirigir um automóvel a uma longa distância, ainda que ilegalmente. Antes desta viagem histórica, os carros motorizados eram conduzidos a curtas distâncias, retornando ao ponto de partida e muitas vezes com a ajuda de um mecânico.\n[…]\nBertha chegou a Pforzheim pouco antes do pôr do sol, mandando um telegrama ao marido, avisando sobre a viagem bem-sucedida. Ela voltou dirigindo para Pforzheim dias depois.\n[…]\nBertha Benz Memorial Route (Mannheim-Pforzheim-Mannheim)\n[…]\nProf. John H. Lienhard on Bertha Benz's ride",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Viagem de Bertha Benz",
      "descricao": "Viagem de cerca de cem quilômetros entre Mannheim e Pforzheim, na Alemanha, feita de automóvel em 1888."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na viagem pioneira de 1888, sem postos de gasolina pelo caminho, Bertha Benz comprou combustível em que tipo de estabelecimento?",
    "resposta": "Farmácia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bertha_Benz",
      "https://en.wikipedia.org/wiki/Bertha_Benz_Memorial_Route"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz (German: [ˈbɛʁta ˈbɛnts] ; née Cäcilie Bertha Ringer; 3 May 1849 – 5 May 1944) was a German automotive pioneer. She was the business partner, investor and wife of automobile inventor Carl Benz. On 5 August 1888, she became the first person to drive an internal-combustion-engined automobile over a long distance, field testing the Benz Patent-Motorwagen, inventing brake lining and solvin\n[…]\nShe and her family were very quickly co-opted by Nazi propaganda, and as early as Easter 1933, a National Socialist memorial was inaugurated for Carl Benz in Mannheim, in which Bertha participated. She later distanced herself from Hitler when she understood that his policies were leading to a new war.\n[…]\nIn 2008, the Bertha Benz Memorial Route was officially approved as a route of the industrial heritage of humankind, because it follows Bertha Benz's path during the world's first long-distance journey by automobile in 1888. Now it is possible to follow the 194 km of signs indicating her route from Mannheim via Heidelberg to Pforzheim (Black Forest) and back.\n[…]\nThe Bertha Benz Challenge, embedded in the framework of the ceremony of Automobile Summer 2011, the official German event and birthday party commemorating the invention of the automobile by Carl Benz 138 years ago, took place on Bertha Benz Memorial Route on 10 and 11 September 2011. It was open for sustainable mobility – hybrid and electric, hydrogen and fuel cell vehicles, and other economical vehicles.\n[…]\nIn honor of International Women's Day in 2019, the modern Daimler company commissioned a four-minute advertisement dramatizing portions of Bertha Benz’ 1888 journey. The ad was created by Berlin-based ad agency Antoni (the lead European agency for Mercedes-Benz), and directed by Sebastian Strasser via his production company, Anorak Film.\n[…]\nBertha Benz Memorial Route\n[…]\nAutomuseum Dr. Carl Benz, 2018."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bertha_Benz_Memorial_Route",
        "situacao": "ok",
        "texto": "The Bertha Benz Memorial Route is a German tourist and theme route in Baden-Württemberg and member of the European Route of Industrial Heritage. It opened in 2008 and follows the tracks of the world's first long-distance road trip by a vehicle powered with an internal combustion engine, in 1888. The trip was taken by Bertha Benz in the world's first automobile, the Benz Patent-Motorwagen, created \n[…]\nIn early August 1888, without her husband's knowledge, Bertha Benz, with her sons Richard (aged 14) and Eugen (aged 15), drove in Benz's newly constructed Patent Motorwagen No. 3 automobile from Mannheim to her own birthplace, Pforzheim, becoming the first person to drive an automobile powered with an internal combustion engine over more than a very short distance. The distance was about 104 km (65 mi).\n[…]\nIn 2007 a not-for-profit initiative, led by Edgar and Frauke Meyer, founded two societies, Bertha Benz Memorial Route e.V. and Bertha Benz Memorial Club e.V., to commemorate Bertha Benz and her historic pioneering deed.\n[…]\nOn February 25, 2008, the Bertha Benz Memorial Route was officially approved as a Tourist or Scenic Route by the German authorities, a dynamic monument of 194 km of German industrial culture.\n[…]\nThe authentic route taken by Bertha Benz not only links almost forgotten original sites she passed on her way, it also leads to the wine region of Baden.\n[…]\nThe Bertha Benz Memorial Route opened in September 2008. But the Ministry of State of Baden-Württemberg suggested embedding the official inaugural run in the framework of the ceremony of Automobile Summer 2011, the big official German event and birthday party commemorating the invention of the automobile by Karl Benz.\n[…]\nBertha Benz Memorial Route\n[…]\nProf. John H. Lienhard on Bertha Benz's ride\n[…]\nAutomuseum Dr. Carl Benz, Ladenburg\n[…]\nList of sights along the Bertha Benz Memorial Route"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bertha_Benz",
        "situacao": "ok",
        "texto": "Bertha Benz, nascida Bertha Ringer (Pforzheim, 3 de maio de 1849 — Ladenburg, 5 de maio de 1944) foi uma das pioneiras do automóvel. Em 5 de agosto de 1888 ela foi a primeira pessoa na história a dirigir um automóvel a uma longa distância. Ao fazer isso, Bertha trouxe a atenção do mundo todo para o Benz Patent-Motorwagen, primeiro automóvel do mundo, iniciando as vendas da companhia.\n[…]\nSeguindo as marcas das carroças, esta pioneira viagem cobriu 106 km entre uma cidade e outra. Apesar de o motivo da viagem fosse para visitar sua mãe, Bertha tinha outros motivos: provar ao seu marido, que não conseguiu fazer propaganda de sua invenção, de que o invento no qual eles tanto investiram poderia se tornar um sucesso comercial uma vez que se mostrasse útil ao grande público. Além disso, ela esperava que Karl ganhasse a confiança necessária para continuar seu trabalho.\n[…]\nBertha deixou Mannheim cedo pela manhã, resolvendo vários assuntos pelo caminho, demonstrando sua capacidade técnica com o veículo. Sem tanque adicional e com um suprimento de apenas 4,5 litros de combustível, ela precisou usar ligroína para tentar fazer o automóvel rodar. O produto só era vendido em boticários, então ela parou em uma farmácia, em Wiesloch e comprou mais.\n[…]\nEra comum para a época que petróleo e seus componentes fossem encontrados com químicos e boticários e assim uma farmácia se tornou o primeiro posto de combustível no mundo.\n[…]\nA viagem de Bertha ganhou notoriedade, como ela esperava. Esta viagem foi essencial para o desenvolvimento técnico do automóvel. O casal fez diversas melhorias à invenção após a viagem de Bertha e suas experiências na estrada. Ela lhe contou tudo o que aconteceu no caminho, dando sugestões como a de uma engrenagem extra para locais íngremes e correias mais resistentes para tornar a freada mais rápida.\n[…]\nBertha Benz Memorial Route (Mannheim-Pforzheim-Mannheim)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Expedição Kon-Tiki",
      "descricao": "Travessia do Oceano Pacífico numa jangada de troncos de balsa, do Peru à Polinésia, em 1947."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que explorador norueguês cruzou o Pacífico em 1947 numa jangada de troncos chamada Kon-Tiki?",
    "resposta": "Thor Heyerdahl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kon-Tiki_expedition",
      "https://en.wikipedia.org/wiki/Thor_Heyerdahl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kon-Tiki_expedition",
        "situacao": "ok",
        "texto": "The Kon-Tiki expedition was a 1947 journey by raft across the Pacific Ocean from South America to the Polynesian islands, led by Norwegian explorer and ethnographer Thor Heyerdahl. The raft was named Kon-Tiki after the Inca god Viracocha, for whom \"Kon-Tiki\" was said to be an old name. Heyerdahl's book on the expedition was entitled The Kon-Tiki Expedition: By Raft Across the South Seas. A 1950 do\n[…]\nThor Heyerdahl's book about his experience became a bestseller. It was published in Norwegian in 1948 as The Kon-Tiki Expedition: By Raft Across the South Seas, later reprinted as Kon-Tiki: Across the Pacific in a Raft. It appeared with great success in English in 1950, also in many other languages. A documentary motion picture about the expedition, also called Kon-Tiki, was produced from a write-up and expansion of the crew's filmstrip notes and won an Academy Award in 1951.\n[…]\nGerd Vold Hurum was the person who helped Thor Heyerdahl to organize the Kon-Tiki Expedition in the winter and spring of 1945–47 as a project manager.\n[…]\nA book documenting the voyage and raft was released in 1948 by Thor Heyerdahl, called The Kon-Tiki Expedition: By Raft Across the South Seas.\n[…]\nKon-Tiki is a 2012 Norwegian historical dramatized feature film about the 1947 Kon-Tiki expedition. It starred Pål Sverre Valheim Hagen as Thor Heyerdahl and was directed by Joachim Rønning and Espen Sandberg. It was the highest-grossing film of 2012 in Norway and the country's most expensive production to date.\n[…]\nHeyerdahl, Thor; Lyon, F.H. (translator) (1950). Kon-Tiki: Across the Pacific by Raft. Rand McNally & Company, Chicago, Ill.\n[…]\nAndersson, Axel (2010) A Hero for the Atomic Age: Thor Heyerdahl and the Kon-Tiki Expedition (Peter Lang) ISBN 978-1-906165-31-4\n[…]\nHeyerdahl, Thor (1973). Kon-Tiki. Simon & Schuster Paperbacks, New York. ISBN 978-1-4767-5337-9.\n[…]\nKon-Tiki Museum\n[…]\nKon-Tiki 1947 Documentary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thor_Heyerdahl",
        "situacao": "ok",
        "texto": "Thor Heyerdahl KStJ (Norwegian pronunciation: [tuːr ˈhæ̀ɪəɖɑːɫ]; 6 October 1914 – 18 April 2002) was a Norwegian adventurer and ethnographer with a background in biology with specialization in zoology, botany and geography.\n[…]\nIn May 2011, the Thor Heyerdahl Archives were added to UNESCO's Memory of the World Register. At the time, this list included 238 collections from all over the world. The Heyerdahl Archives span the years 1937 to 2002 and include his photographic collection, diaries, private letters, expedition plans, articles, newspaper clippings, and original book and article manuscripts. The Heyerdahl Archives are administered by the Kon-Tiki Museum and the National Library of Norway in Oslo.\n[…]\nOn the day before they sailed together to the Marquesas Islands in 1936, Heyerdahl married Liv Coucheron-Torp (1916–1969), whom he had met at the University of Oslo, and who had studied economics there. He was 22 years old and she was 20 years old. Eventually, the couple had two sons: Thor Jr. (1938–2024) and Bjørn (1940–2021). The marriage ended in divorce shortly before the 1947 Kon-Tiki expedition, which Liv had helped to organize.\n[…]\nAsteroid 2473 Heyerdahl is named after him, as are HNoMS Thor Heyerdahl, a Norwegian Nansen class frigate, along with MS Thor Heyerdahl (now renamed MS Vana Tallinn), and Thor Heyerdahl, a German three-masted sail training vessel originally owned by a participant of the Tigris expedition. Heyerdahl Vallis, a valley on Pluto, and Thor Heyerdahl Upper Secondary School in Larvik, the town of his birth, are also named after him.\n[…]\nThor Heyerdahl expeditions\n[…]\nBiography of Thor Heyerdahl\n[…]\nThor Heyerdahl – Daily Telegraph obituary\n[…]\nWorks by or about Thor Heyerdahl at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Kon-Tiki",
        "situacao": "ok",
        "texto": "Kon-Tiki foi o barco utilizado pelo explorador norueguês Thor Heyerdahl (1914-2002), em sua expedição pelo Oceano Pacífico, partindo da América do Sul para a Polinésia, em 1947, com o intuito de demonstrar a possibilidade de que a colonização da Polinésia tinha sido realizada por via marítima por indígenas (ou nativos) da América do Sul. O nome do barco foi homenagem ao deus do sol inca, Viracocha\n[…]\nA palavra \"tiki\" significa um deus, portanto, o deus Kon. Kon-Tiki é também o nome do livro que Heyerdahl escreveu sobre sua expedição.\n[…]\nHeyerdahl defendia a tese de que os povos da América do Sul poderiam ter alcançado a Polinésia em tempos pré-colombianos. Seu objetivo foi demonstrar a possibilidade de que a colonização da Polinésia tinha sido realizada por via marítima da América do Sul, em jangadas idênticas ao barco utilizado durante a expedição, e conduzido apenas pelas marés, correntes e força do vento, que é quase constante, na direção leste-oeste ao longo do Equador.\n[…]\nA expedição Kon-Tiki foi financiada através de empréstimos, e contou com doações de militares do exército dos Estados Unidos. Heyerdahl viajou para o Peru, algum tempo antes, junto com um pequeno grupo de pessoas e dentro do espaço previsto pelas autoridades nacionais, se dedicava à construção da jangada. Para isso, foram utilizas toras de madeira balsa e outros materiais nativos, e manteve o estilo de construção indígena como visto nas imagens deixadas pelos conquistadores espanhóis.\n[…]\nPágina do Museu Kon-tiki (em norueguês e em inglês).\n[…]\nHistória da teoria de Thor Heyerdhal\n[…]\nTesting Heyerdahl's Theories about Kon-Tiki 60 Years Later: Tangaroa Pacific Voyage (verano 2006) Azerbaijan International, Vol 14:4 (inverno 2006)\n[…]\nKon-Tiki in Reverse: The Tahiti-Nui Expedition\n[…]\nTV2Sumo WebTV programme \"Ekspedisjonen Tangaroa\" (Expedição Tangaroa) – norueguês\n[…]\nDocumentário Kon-Tiki 1947",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Expedição Kon-Tiki",
      "descricao": "Travessia do Oceano Pacífico numa jangada de troncos de balsa, do Peru à Polinésia, em 1947."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Em 1947, quantos tripulantes atravessaram o Pacífico a bordo da jangada Kon-Tiki?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kon-Tiki_expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kon-Tiki_expedition",
        "situacao": "ok",
        "texto": "The Kon-Tiki expedition was a 1947 journey by raft across the Pacific Ocean from South America to the Polynesian islands, led by Norwegian explorer and ethnographer Thor Heyerdahl. The raft was named Kon-Tiki after the Inca god Viracocha, for whom \"Kon-Tiki\" was said to be an old name. Heyerdahl's book on the expedition was entitled The Kon-Tiki Expedition: By Raft Across the South Seas. A 1950 do\n[…]\nThor Heyerdahl's book about his experience became a bestseller. It was published in Norwegian in 1948 as The Kon-Tiki Expedition: By Raft Across the South Seas, later reprinted as Kon-Tiki: Across the Pacific in a Raft. It appeared with great success in English in 1950, also in many other languages. A documentary motion picture about the expedition, also called Kon-Tiki, was produced from a write-up and expansion of the crew's filmstrip notes and won an Academy Award in 1951.\n[…]\nIn 1955, the Czech explorer and adventurer Eduard Ingris attempted to recreate the Kon-Tiki expedition on a balsa raft called Kantuta. His first expedition, Kantuta I, took place in 1955–1956 and led to failure. In 1959, Ingris built a new balsa raft, Kantuta II, and tried to repeat the previous expedition. The second expedition was a success. Ingris was able to cross the Pacific Ocean on the balsa raft from Peru to Polynesia.\n[…]\nA black and white film documentary about the voyage and raft was released in 1950, called Kon-Tiki (produced in 1947). It won the 1951 Oscar for Best Documentary Feature. There was also produced short Kodak Kodachrome color film from expedition in 1947.\n[…]\nKon-Tiki is a 2012 Norwegian historical dramatized feature film about the 1947 Kon-Tiki expedition. It starred Pål Sverre Valheim Hagen as Thor Heyerdahl and was directed by Joachim Rønning and Espen Sandberg. It was the highest-grossing film of 2012 in Norway and the country's most expensive production to date.\n[…]\nKon-Tiki Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Kon-Tiki",
        "situacao": "ok",
        "texto": "Kon-Tiki foi o barco utilizado pelo explorador norueguês Thor Heyerdahl (1914-2002), em sua expedição pelo Oceano Pacífico, partindo da América do Sul para a Polinésia, em 1947, com o intuito de demonstrar a possibilidade de que a colonização da Polinésia tinha sido realizada por via marítima por indígenas (ou nativos) da América do Sul. O nome do barco foi homenagem ao deus do sol inca, Viracocha\n[…]\nA palavra \"tiki\" significa um deus, portanto, o deus Kon. Kon-Tiki é também o nome do livro que Heyerdahl escreveu sobre sua expedição.\n[…]\nNo entanto, a expedição dispunha de equipamentos como rádio, relógios, mapas, sextantes e facas, ainda que os mesmos não fossem pertinentes ao tentar provar que uma jangada poderia fazer tal travessia. Aqueles instrumentos não influíram, contudo, no deslocamento do barco, apenas ajudaram na orientação e na comunicação com o continente, em caso de que houvesse algum acidente.\n[…]\nA expedição Kon-Tiki foi financiada através de empréstimos, e contou com doações de militares do exército dos Estados Unidos. Heyerdahl viajou para o Peru, algum tempo antes, junto com um pequeno grupo de pessoas e dentro do espaço previsto pelas autoridades nacionais, se dedicava à construção da jangada. Para isso, foram utilizas toras de madeira balsa e outros materiais nativos, e manteve o estilo de construção indígena como visto nas imagens deixadas pelos conquistadores espanhóis.\n[…]\nTesting Heyerdahl's Theories about Kon-Tiki 60 Years Later: Tangaroa Pacific Voyage (verano 2006) Azerbaijan International, Vol 14:4 (inverno 2006)\n[…]\nKon-Tiki in Reverse: The Tahiti-Nui Expedition\n[…]\nTV2Sumo WebTV programme \"Ekspedisjonen Tangaroa\" (Expedição Tangaroa) – norueguês\n[…]\nAcali 1973 – expedição em barco através do Atlântico Librarything, 2007\n[…]\nHsu-Fu 1993 – barco de bambu através do Pacífico (do oeste a este) personal.psu.edu\n[…]\nDocumentário Kon-Tiki 1947",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Cinto de segurança de três pontos",
      "descricao": "Cinto de segurança que prende o tronco e o quadril, introduzido pela Volvo em 1959."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1959, que engenheiro da Volvo criou o cinto de segurança de três pontos usado até hoje?",
    "resposta": "Nils Bohlin",
    "distratores": [
      "Béla Barényi",
      "Ferdinand Porsche",
      "Gottlieb Daimler"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nils_Bohlin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nils_Bohlin",
        "situacao": "ok",
        "texto": "Nils Ivar Bohlin (17 July 1920 – 21 September 2002) was a Swedish mechanical engineer and inventor who invented the three-point safety belt while working at Volvo.\n[…]\nBorn in Härnösand, Sweden, Bohlin received a diploma in mechanical engineering from Härnösand Läroverk in 1939. In 1942 he started working for the aircraft maker Saab as an aircraft designer and helped develop ejection seats. In 1958 he joined Volvo as a safety engineer. He is credited with the invention of the modern three-point safety belt, now a standard safety feature in all cars.\n[…]\nBohlin worked on the seat belt for about a year, using skills in developing ejection seats for SAAB; he concentrated on keeping the driver safe in a car accident. After testing the three-point safety belt, he introduced his invention to the Volvo company in 1959 and received his first patent (number 3,043,625). Ten years later, he led the Central Research and Development Department for Volvo in 1969.\n[…]\nDuring his adult life, he was married to Maj-Britt Bohlin. He was stepfather to Maj-Britt's two sons and then had two children together and thirteen grandchildren.\n[…]\n\"Nils I. Bohlin\". National Inventors Hall of Fame. Archived from the original on April 22, 2005. Retrieved August 1, 2005.\n[…]\n\"Three-point seatbelt inventor Nils Bohlin born\". History.com. Retrieved February 5, 2012.\n[…]\n\"Nils Bohlin\". safran-arts.com. Retrieved January 18, 2012.\n[…]\n\"Bohlin, Nils Ivar Biography\". S9.com. Archived from the original on September 23, 2011. Retrieved February 6, 2012.\n[…]\n\"Nils Bohlin, 82, Inventor of a Better Seat Belt\". New York Times. 2002-09-26. Retrieved January 27, 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nils_Bohlin",
        "situacao": "ok",
        "texto": "Nils Ivar Bohlin (Hernosândia, 17 de julho de 1920 — Ramfall, 21 de setembro de 2002) foi um engenheiro mecânico e inventor sueco.\n[…]\nInventou o cinto de segurança de três pontos, quando trabalhava na Volvo. Em 1999 foi incluído no Automotive Hall of Fame.\n[…]\nNascido em Härnösand, na Suécia, em 1920, Bohlin obteve um diploma em engenharia mecânica no Ginásio de Härnösand, em 1939. Em 1942, começou a trabalhar para a fabricante de aviões Saab AB como projetista de aeronaves e ajudou a desenvolver assentos ejetáveis. Em 1958, ingressou na Volvo como engenheiro de segurança. A ele é creditada a invenção do moderno cinto de segurança de três pontos, hoje um recurso de segurança padrão em todos os automóveis.\n[…]\nBohlin trabalhou no cinto de segurança por cerca de um ano, utilizando habilidades que usou no desenvolvimento de assentos ejetáveis para SAAB; ele se concentrou em manter o motorista seguro em um acidente de carro. Depois de testar o cinto de segurança de três pontos, ele apresentou sua invenção à empresa Volvo em 1959 e recebeu sua primeira patente (número 3.043.625). Dez anos depois, ele chefiou o Departamento Central de Pesquisa e Desenvolvimento da Volvo em 1969.\n[…]\nEm 1974, recebeu o Prêmio Ralph Isbrandt de Engenharia de Segurança Automotiva e, em 1989, foi incluído no Hall da Fama de Segurança e Saúde. Recebeu uma medalha de ouro da Academia Real Sueca de Ciências de Engenharia em 1995 e, em 1999, foi incluído no Automotive Hall of Fame. Aposentou-se da Volvo como engenheiro sênior em 1985 e foi postumamente incluído no Hall da Fama dos Inventores Nacionais. Bohlin se aposentou em 1995.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Metrô de Londres",
      "descricao": "Sistema de metrô de Londres, aberto em 1863 com a Metropolitan Railway."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O metrô de Londres é o mais antigo do mundo. Em que século ele foi inaugurado?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://en.wikipedia.org/wiki/London_Underground"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/London_Underground",
        "situacao": "ok",
        "texto": "The London Underground (also known simply as the Underground or as the Tube) is a rapid transit system serving Greater London and parts of the adjacent home counties of Buckinghamshire, Essex, and Hertfordshire in England. Managed by Transport for London (TfL), the network spans 11 lines and 250 miles (400 km) of track, serving 272 stations.\n[…]\nLondon Underground's eleven lines total 250 miles (402 km) in length, making it the thirteenth longest metro system in the world. These are made up of the sub-surface network and the deep-tube lines.\n[…]\nArt on the Underground was launched in 2000 to revive London Underground as a patron of the arts. Today, commissions range from the pocket Tube map cover, to temporary artworks, to large-scale permanent installations in stations.\n[…]\nThe Underground (including several fictitious stations) has appeared in many movies and television shows, including Skyfall, Death Line, Die Another Day, Sliding Doors, An American Werewolf in London, Creep, Tube Tales, Sherlock and Neverwhere. The London Underground Film Office received more than 200 requests to film in 2000. The Underground has also featured in music such as the Jam's \"Down in the Tube Station at Midnight\" and in literature such as the graphic novel V for Vendetta.\n[…]\nPopular legends about the Underground being haunted persist to this day. In 2016, British composer Daniel Liam Glyn released his concept album Changing Stations based on the 11 main tube lines of the London Underground network.\n[…]\nCharles Yerkes (1837–1905) was an American who founded the Underground Electric Railways Company of London (UERL) in 1902, which opened three tube lines and electrified the District Railway.\n[…]\nCarto.metro Track Map Archived 9 June 2021 at the Wayback Machine (more detailed; shows Underground, Overground, Crossrail, DLR, and mainline railway tracks as well)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metropolitano_de_Londres",
        "situacao": "ok",
        "texto": "Metropolitano de Londres, também conhecido como Metro de Londres (português europeu) ou Metrô de Londres (português brasileiro), ou no seu nome original London Underground, conhecido ainda por The Tube, Tube, The Underground ou Underground, é um sistema de metropolitano que serve grande parte da Grande Londres e as áreas vizinhas de Essex, Hertfordshire e Buckinghamshire, no Reino Unido, e constit\n[…]\nFoi também a primeira rede de metropolitano a operar com trens ou comboios elétricos. É geralmente referido como the Underground ou the Tube — um termo mais recente, devido à forma dos túneis do metrô, em forma de tubo — porém, cerca de 55% da rede do metropolitano é à superfície (apesar de o próprio nome do metropolitano ser Underground, que significa subterrâneo).\n[…]\nA infraestrutura do Metropolitano de Londres é das maiores do mundo em transporte urbano. Entre a inauguração e os nossos dias já passaram pelo sistema de metropolitano londrino dezenas de milhões de pessoas. Nos próximos 20 a 25 anos o sistema ganhará novas linhas e estações, assim como terá renovações e modificações na sua frota, tudo para tornar melhor e mais confortável o segundo meio de transporte mais usado na capital.\n[…]\nO Metropolitano de Londres surgiu em vários filmes e séries de televisão, incluindo Sliding Doors, Tube Tales e Neverwhere. O Escritório Cinematográfico do Metropolitano de Londres recebe mais de 100 pedidos por mês para filmagens no sistema de transportes. Este transporte também marcou e marca presença no mundo da música, como por exemplo, na banda The Jam, com a música \"Down in the Tube Station at Midnight\" e na literatura, como por exemplo na grande obra literária V for Vendetta.\n[…]\nWolmar, Christian (15 de novembro de 2002). Down the Tube: the Battle for London's Underground. [S.l.]: Aurum Press. 192 páginas. ISBN 1854108727\n[…]\nVisitar o Metropolitano de Londres\n[…]\nConstrução do Metropolitano de Londres",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Metrô de São Paulo",
      "descricao": "Sistema de metrô da cidade de São Paulo, o primeiro do Brasil."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década o metrô de São Paulo, o primeiro do Brasil, começou a levar passageiros?",
    "resposta": "Década de 1970",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Metrô_de_São_Paulo",
      "https://en.wikipedia.org/wiki/São_Paulo_Metro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Metrô_de_São_Paulo",
        "situacao": "ok",
        "texto": "Metrô de São Paulo ou Metropolitano de São Paulo, conhecido popularmente como Metrô, é o sistema de transporte metroviário da capital paulista. As linhas 1-Azul, 2-Verde, 3-Vermelha, 15-Prata e 17-Ouro são operadas pela Companhia do Metropolitano de São Paulo, sociedade de economia mista do estado de São Paulo. Fundada em 24 de abril de 1968, a empresa é responsável pelo planejamento, projeto, con\n[…]\nAs estações de metrô funcionam das 4h40 à 0 hora de domingo a sexta-feira e das 4h40 à 1 hora aos sábados. Em 2006, o sistema de metrô de São Paulo começou a utilizar um bilhete eletrônico denominado \"Bilhete Único\"; com este bilhete, usado como um cartão inteligente recarregável, o passageiro pode pegar até três ônibus num intervalo de três horas e embarcar no metrô ou trem metropolitano uma vez dentro das primeiras duas horas, pagando pouco menos de duas tarifas.\n[…]\nO mais notável é a bitola internacional de 1,435 metro, além do sistema de ar-condicionado, sendo a primeira frota do Metrô a possuí-lo. A operação comercial do trecho Capão Redondo–Largo Treze da Linha 5–Lilás começou em 20 de outubro de 2002, ampliando a rede ferroviária metropolitana para 57,6 quilômetros e 52 estações.\n[…]\nA poluição sonora também é um dos principais problemas das linhas do metrô elevadas e em superfície, sobretudo as mais antigas, implantadas nas décadas de 1970 e 1980.\n[…]\nDurante a implantação do Metrô nos anos 1970, não havia legislação ambiental regulamentada que regulasse o nível máximo de ruído produzido pelo sistema de Metrô, de forma que a passagem de trens nas linhas elevadas e em superfície chega a produzir sons de 75 a 80 dB (em alguns trechos como entre as estações Barra Funda e Marechal Deodoro ocorrem picos de 90 dB a 100 dB de níveis de ruído), similar ao de avenidas de alto tráfego, conforme constatado pela CPI da Poluição realizada em 2006 pela Câmara Municipal de São Paulo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/São_Paulo_Metro",
        "situacao": "ok",
        "texto": "The São Paulo Metro (Portuguese: Metrô de São Paulo, [meˈtɾo dʒi sɐ̃w ˈpawlu]), commonly called the Metrô, is one of the rapid transit companies serving the city of São Paulo, alongside the São Paulo Metropolitan Trains Company (CPTM), Motiva Linha 4, Motiva Linhas 5 e 17, ViaMobilidade Linhas 8 e 9 and TIC Trens, all five forming the largest metropolitan rail transport network of Latin America. T\n[…]\nThe Companhia do Metropolitano de São Paulo (Metrô) was founded on April 24, 1968. Eight months later, work on the initial North–South line (now Line 1 - Blue) was initiated. In 1972, the first test train trip occurred between Jabaquara and Saúde stations. On September 14, 1974, the segment between Jabaquara and Vila Mariana entered into commercial operation.\n[…]\nThe São Paulo Metro has been at the technological forefront not only in Latin America but also worldwide, since the conception of its first line in the 1960s. In 1971, the São Paulo Metro selected the American company Westinghouse Electric Corporation (WELCO) to install the ATO (Automatic Train Operation) system, which provides fully automated train signaling and control.\n[…]\nMetro's security agents have police powers and in case of need they will provide assistance. All police matters that occur within the system are directed to the police station of the subway system, Delegacia de Polícia do Metropolitano de São Paulo (DELPOM), located at Palmeiras-Barra Funda station.\n[…]\nList of São Paulo Metro stations\n[…]\nSão Paulo Metropolitan Trains - São Paulo Metropolitan system\n[…]\nCompanhia do Metropolitano de São Paulo - São Paulo Metropolitan Company\n[…]\nCompanhia Paulista de Trens Metropolitanos - São Paulo Metropolitan Trains' Company\n[…]\nList of São Paulo Metro yards\n[…]\nSão Paulo Metro website\n[…]\nEssential Network of São Paulo Metro (project of extension of the network to be ready by 2025) Archived 2020-07-20 at the Wayback Machine (in Portuguese)"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Estrada de Ferro Mauá",
      "descricao": "Primeira ferrovia do Brasil, construída por Irineu Evangelista de Sousa entre o porto de Mauá e Fragoso, no Rio de Janeiro."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano foi inaugurada a primeira ferrovia do Brasil, construída pelo empresário que se tornaria o Barão de Mauá?",
    "resposta": "1854",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mauá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estrada_de_Ferro_Mauá",
        "situacao": "ok",
        "texto": "A Estrada de Ferro Mauá, como é conhecida hoje em dia, e oficialmente denominada Imperial Companhia de Navegação a Vapor e Estrada de Ferro de Petropolis, foi a primeira ferrovia a ser estabelecida no Brasil, a terceira da América do Sul.\n[…]\nA ferrovia foi construída para conectar o Porto de Mauá, na Baía de Guanabara, ao sopé da Serra da Estrela, na região de Petrópolis, no estado do Rio de Janeiro. O objetivo principal era facilitar o transporte de cargas e passageiros do interior do estado para o Rio de Janeiro, especialmente para o transporte de café, um dos principais produtos de exportação do Brasil na época.\n[…]\nFoi inaugurada em 30 de abril de 1854 em seu trecho inicial, ligando o Porto de Mauá a Fragoso no Rio de Janeiro, num trecho de 14,5 km.\n[…]\nMais tarde foi prolongada, chegando a 15,19 km. Foi construída pelo empresário brasileiro Irineu Evangelista de Sousa, o Barão de Mauá.\n[…]\nO trecho ferroviário seguia da Estação Guia de Pacobaíba (antiga Estação Mauá, a estação recebeu esse nome após ser arrendada pela Estrada de Ferro Príncipe do Grão Pará), no atual município de Magé, até Fragoso, e posteriormente à localidade de Inhomirim, também conhecida como Raiz da Serra.\n[…]\nApesar do sucesso inicial e da importância histórica, a Estrada de Ferro Mauá enfrentou diversos desafios, incluindo dificuldades financeiras e concorrência com outras modalidades de transporte. Com o passar do tempo, a linha foi sendo ampliada e modernizada, integrando-se a outras ferrovias e continuando a desempenhar um papel vital na infraestrutura de transporte do Brasil.\n[…]\nTransporte ferroviário no Brasil\n[…]\n«Breve História da Estrada de Ferro Mauá»\n[…]\n«Estrada de Ferro Mauá e outras no site Estações Ferroviárias do Brasil»"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Irmãos Wright",
      "descricao": "Orville e Wilbur Wright, americanos pioneiros da aviação com o Wright Flyer em 1903."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1903, perto de qual vilarejo da Carolina do Norte os irmãos Wright fizeram seus voos históricos?",
    "resposta": "Kitty Hawk",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_brothers",
        "situacao": "ok",
        "texto": "The Wright brothers, Orville Wright (August 19, 1871 – January 30, 1948) and Wilbur Wright (April 16, 1867 – May 30, 1912), were American aviation pioneers generally credited with inventing, building, and flying the world's first successful airplane. They made the first controlled, sustained flight of an engine-powered, heavier-than-air aircraft with the Wright Flyer on December 17, 1903, four mil\n[…]\nIn 1900 the brothers went to Kitty Hawk, North Carolina, to begin their manned gliding experiments. In his reply to Wilbur's first letter, Octave Chanute had suggested the mid-Atlantic coast for its regular breezes and soft sandy landing surface. Wilbur also requested and examined U.S. Weather Bureau data, and decided on Kitty Hawk after receiving information from the government meteorologist stationed there.\n[…]\nThe brothers flew the glider for only a few days in early autumn 1900 at Kitty Hawk. In the first tests, probably on October 3, Wilbur was aboard while the glider flew as a kite not far above the ground with men below holding tether ropes. Most of the kite tests were unpiloted, with sandbags or chains and even a local boy as ballast.\n[…]\nOrville repeatedly objected to misrepresentation of the Aerodrome, but the Smithsonian was unyielding. Orville responded by lending the restored 1903 Kitty Hawk Flyer to the London Science Museum in 1928, refusing to donate it to the Smithsonian while the Institution \"perverted\" the history of the flying machine. Orville would never see his invention again, as he died before its return to the United States.\n[…]\nThe U.S. states of Ohio and North Carolina both take credit for the Wright brothers and their world-changing inventions—Ohio because the brothers developed and designed their plane in Dayton, and North Carolina because Kitty Hawk was the site of the Wrights' first powered flight.\n[…]\nWorks by Orville and Wilbur Wright at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Wright",
        "situacao": "ok",
        "texto": "Os Irmãos Wright, Wilbur (Millville, 16 de abril de 1867; Dayton, 30 de maio de 1912) e Orville (Dayton, 19 de agosto de 1871; Dayton, 30 de janeiro de 1948), foram dois irmãos norte-americanos, inventores e pioneiros da aviação aos quais foi concedido o crédito pelo desenvolvimento da primeira máquina voadora mais pesada que o ar, que efetuou um voo controlado, em 17 de dezembro de 1903.\n[…]\nEm 1900, os irmãos Wright viajaram para Kitty Hawk, Carolina do Norte, para dar início aos seus experimentos em voos tripulados. Em resposta a uma primeira carta de Wilbur, Octave Chanute sugeriu a zona central da costa do Atlântico devidos aos ventos regulares e a superfície de areia fofa para os pousos. Wilbur também solicitou dados detalhados do Weather Bureau e decidiu por Kitty Hawk depois de receber informações dos meteorologistas do governo lá alocados.\n[…]\nDepois dos reparos, os irmãos Wright finalmente decolaram em 17 de dezembro de 1903, fazendo dois voos cada um: o primeiro, pilotado por Orville as 10h35, percorreu 37 m em 12 segundos, a velocidade de 10,9 km/h. Os dois próximos voos cobriram aproximadamente 53 e 61 m por Wilbur e Orville respectivamente. A altura foi de cerca de 3 m acima do solo. O quarto voo pilotado por Wilbur já próximo ao meio dia, terminou num pequeno acidente depois de ter percorrido 259,69 m em 59 segundos.\n[…]\nOs irmãos Wright enviaram um telegrama sobre os voos para o seu pai, solicitando que ele \"informasse a imprensa\". No entanto, o Dayton Journal se recusou a publicar a história, dizendo que os voos foram muito curtos para que fossem considerados importantes.\n[…]\nWright Brothers Medal\n[…]\nTelegrama de Orville Wright em Kitty Hawk, Carolina do Norte, para seu pai, anunciando seus voos bem-sucedidos, 17 de dezembro de 1903 (em português)\n[…]\nPrimeiro voo motorizado dos irmãos Wright (em português)\n[…]\n1908: Irmãos Wright requeriam a patente do avião (em português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Irmãos Wright",
      "descricao": "Orville e Wilbur Wright, americanos pioneiros da aviação com o Wright Flyer em 1903."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de construir aviões, os irmãos Wright tinham uma loja em Dayton que vendia e consertava o quê?",
    "resposta": "Bicicletas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_brothers",
        "situacao": "ok",
        "texto": "The Wright brothers, Orville Wright (August 19, 1871 – January 30, 1948) and Wilbur Wright (April 16, 1867 – May 30, 1912), were American aviation pioneers generally credited with inventing, building, and flying the world's first successful airplane. They made the first controlled, sustained flight of an engine-powered, heavier-than-air aircraft with the Wright Flyer on December 17, 1903, four mil\n[…]\nWilbur and Orville Wright were two of seven children born to Milton Wright, a clergyman, and Susan Catherine Koerner. Milton Wright's mother, Catherine Reeder, was descended from the progenitor of the Vanderbilt family – one of America's richest families – and the Huguenot Gano family of New Rochelle, New York. Wilbur was born near Millville, Indiana, in 1867; Orville in Dayton, Ohio, in 1871. The brothers never married.\n[…]\nThe Wright Company was incorporated on November 22, 1909. The brothers sold their patents to the company for $100,000 and also received one-third of the shares in a million dollar stock issue and a 10 percent royalty on every airplane sold. With Wilbur as president and Orville as vice president, the company set up a factory in Dayton and a flying school / test flight field at Huffman Prairie; the headquarters office was in New York City.\n[…]\nThe Institution did not reveal the extensive Curtiss modifications, but Orville Wright learned of them from his brother Lorin and a close friend of his and Wilbur's, Griffith Brewer, who both witnessed and photographed some of the tests.\n[…]\nOrville succeeded to the presidency of the Wright Company upon Wilbur's death. He won the prestigious Collier Trophy in 1914 for development of his automatic stabilizer on the brothers' Wright Model E. Sharing Wilbur's distaste for business but not his brother's executive skills, Orville sold the company in 1915. The Wright Company then became part of Wright-Martin in 1916."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Wright",
        "situacao": "ok",
        "texto": "Os Irmãos Wright, Wilbur (Millville, 16 de abril de 1867; Dayton, 30 de maio de 1912) e Orville (Dayton, 19 de agosto de 1871; Dayton, 30 de janeiro de 1948), foram dois irmãos norte-americanos, inventores e pioneiros da aviação aos quais foi concedido o crédito pelo desenvolvimento da primeira máquina voadora mais pesada que o ar, que efetuou um voo controlado, em 17 de dezembro de 1903.\n[…]\nAproveitando o \"boom\" nacional das bicicletas logo depois da invenção da \"bicicleta segura\", os irmãos abriram uma loja de vendas e oficina de reparos em dezembro de 1892 (a Wright Cycle Exchange, mais tarde Wright Cycle Company) e começaram a construir bicicletas de sua própria marca em 1896. Eles usaram esse empreendimento para financiar seu crescente interesse em voar.\n[…]\nNa base da observação, Wilbur concluiu que os pássaros alteravam o ângulo da ponta de suas asas para fazer com seus corpos rolassem para a esquerda ou para a direita. Os irmãos decidiram que este seria uma boa maneira de uma máquina voadora para fazer curvas para um lado ou para outro, como uma pessoa numa bicicleta, uma experiência com a qual eles tinham bastante familiaridade.\n[…]\nDeixando de lado a estranha bicicleta de três rodas, eles construíram um túnel de vento de 1,83 m na sua loja e conduziram uma série de testes sistemáticos de asas em miniatura entre Outubro e Dezembro de 1901. Os suportes que eles montaram no interior do túnel para segurar as asas pareciam bem toscos, mas foram \"tão críticos para o sucesso final dos irmãos Wright quanto os próprios planadores\".\n[…]\nEm 1903, os irmãos construíram um modelo motorizado, o Wright Flyer I, usando o seu material preferido na construção, a picea, uma madeira leve e resistente, e musseline para a cobertura das superfícies. Eles também desenharam e esculpiram suas próprias hélices de madeira, e tinham um motor específico construído na sua loja de bicicletas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Fordlândia",
      "descricao": "Cidade fundada por Henry Ford na Amazônia em 1928 para produzir borracha."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No fim dos anos vinte, em que estado brasileiro Henry Ford fundou a Fordlândia para produzir borracha para pneus?",
    "resposta": "Pará",
    "distratores": [
      "Amazonas",
      "Acre",
      "Rondônia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fordlândia",
      "https://en.wikipedia.org/wiki/Fordlândia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fordlândia",
        "situacao": "ok",
        "texto": "Fordlândia é um distrito brasileiro de 14 568 km² de extensão, no município paraense de Aveiro, situado às margens do Rio Tapajós, na Amazônia. Recebeu este nome porque foi uma cidade operária do projeto agroindustrial \"Fordlândia\" do empresário estadunidense Henry Ford em 1927.\n[…]\nFord com este projeto tinha dois objetivos: sonhava em recriar uma nova América, que sob seu ponto de vista estava se deteriorando aceleradamente em seu país natal, além da intenção de tornar Fordlândia o polo fornecedor de látex aos seus empreendimentos (que causou entusiasmo nos Estados Unidos), já que o material era necessário à confecção de pneus para seus automóveis, pois o estado do Pará foi uma potência neste segmento no período chamado ciclo da borracha (1879–1912).[carece de fontes]?\n[…]\nOs termos da concessão, proposta pelo então governador Dionísio Bentes, isentavam a Companhia Ford do Brasil pagamento de qualquer taxa de exportação dos bens produzidos na gleba (borracha, látex, pele, couro, petróleo, sementes, madeira e outros). Jorge Dumont Villares, representante do governador, conduziu as negociações em visita a Henry Ford nos EUA, enquanto no Brasil \"O. Z. Ide\" e \"W. L. Reeves Blakeley\" representaram a Ford.\n[…]\nCom o falecimento de Henry Ford, seu neto Henry Ford II assumiu o comando da empresa nos Estados Unidos e decidiu encerrar o projeto de plantação de seringueiras no Brasil.\n[…]\nNa literatura, o historiador da Universidade de Nova Iorque Greg Grandin lançou o livro Fordlândia – A Ascensão e a Queda da Cidade Perdida na Selva de Henry Ford, considerado um dos cem melhores livros publicados em 2009 (no ranking do The New York Times). Além disso, um documentário sobre a cidade também foi desenvolvido pelos brasileiros Marinho Andrade e Daniel Augusto."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fordlândia",
        "situacao": "ok",
        "texto": "Fordlândia is a district and adjacent area of 14,268 square kilometres (5,509 sq mi) in the city of Aveiro, Pará, Brazil. It is located on the east banks of the Tapajós river roughly 300 kilometres (190 mi) south of the city of Santarém.\n[…]\nIn spite of the huge investment and numerous invitations, Henry Ford never visited either of his ill-fated towns. A 2009 NPR article reported, \"Not one drop of latex from Fordlândia ever made it into a Ford car\".\n[…]\nIn 2009, Greg Grandin published his non-fiction account Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City, and Montreal artist Scott Chandler produced photos.\n[…]\nIn the PC game The Amazon Trail, the player travels back in time to meet Henry Ford there.\n[…]\nBraudeau, Michel (2004). \"Henry Ford vaincu par la « rouille »\". Le rêve amazonien [Henry Ford defeated by 'rust'] (in French). éditions Gallimard. ISBN 2-07-077049-4.\n[…]\nColón, Marcos (April 2018). \"Slow Seeing and the Environment: Connections and Meanings in Beyond Fordlândia\". Sustainability in Debate. 9 (1). Brasília: 136–144. doi:10.18472/SustDeb.v9n1.2018.29861. ISSN 2179-9067.\n[…]\nColón, Marcos (2018). Beyond Fordlândia: An Environmental Account of Henry Ford's Adventures in the Amazon. Amazônia Latitude Films.\n[…]\nGrandin, Greg (2009). Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City. Metropolitan Books. ISBN 978-0805082364.\n[…]\nFordlandia: The Rise and Fall of Henry Ford’s Forgotten Jungle City - Democracy Now, broadcast 2 July 2009, Video and Discussion (transcript available).\n[…]\nFordlandia on Flickr - Historic images from the Benson Ford Research Center, a library and archive located at the Henry Ford Museum.\n[…]\nFordlandia - 99% Invisible podcast episode 298, posted 6 March 2018"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Rede Integrada de Transporte",
      "descricao": "Sistema de ônibus de Curitiba com canaletas exclusivas e estações-tubo, referência mundial em corredores expressos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Que cidade brasileira, com ônibus em pistas exclusivas e estações em forma de tubo, inspirou o sistema TransMilenio de Bogotá?",
    "resposta": "Curitiba",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rede_Integrada_de_Transporte",
      "https://en.wikipedia.org/wiki/TransMilenio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rede_Integrada_de_Transporte",
        "situacao": "ok",
        "texto": "Rede Integrada de Transporte (also known as RIT, Portuguese pronunciation: [ˈʁedʒĩ ĩteˈɡɾadɐ dʒi tɾɐ̃sˈpɔʁtʃi]; Portuguese for Integrated Transportation Network) is a bus rapid transit (BRT) system in Curitiba, Brazil, implemented in 1974. It was one of the first BRT systems in the world and a component of one of the first and most successful examples of transit-oriented development.\n[…]\nCuritiba has a well planned and integrated transport network, which includes dedicated lanes on major streets for a bus rapid transit system. The buses are long, with 157 bi-articulated (split into three sections) and 29 single-articulated vehicles, and stop at designated elevated tube-shaped stations to allow for fare prepayment and platform level boarding, complete with handicapped access.\n[…]\nThe Curitiba network is the source of inspiration for the TransMilenio in Bogotá, Colombia, Metropolitano in Lima, Peru,  TransJakarta in Jakarta, Indonesia, Metrovia in Guayaquil, Ecuador as well as the Emerald Express (EmX) of Eugene, Oregon and G Line of the Los Angeles, California, The Strip and Downtown Express in Las Vegas, Nevada and for a future transportation system in Panama City, Panama, Transmetro system in Guatemala City, Guatemala, the Metrobús of Mexico City and Buenos Aires, Argentina, and for the city of Bangalore.\n[…]\nIn 1980, the last line was building and the Rede Integrada de Transporte was created, allowing transit between any point in the city by paying just one fare. This part was inspired of the National Urban Transport Company a system that was created by the government of the neighboring country of Peru.\n[…]\nOn 23 November 2008, a bus crashed into a store in Curitiba and 3 passengers were injured.\n[…]\nTransport in Brazil\n[…]\nUrbs, Urbanização de Curitiba S/A\n[…]\nProposed electric transport for Curitiba."
      },
      {
        "url": "https://en.wikipedia.org/wiki/TransMilenio",
        "situacao": "ok",
        "texto": "TransMilenio is a bus rapid transit (BRT) system that serves Bogotá, the capital of Colombia, as well as Soacha, a neighbouring city. The system opened to the public in December 2000. As of 2024, 12 corridors containing 99 bus routes totalling 114.4 km (71 mi) run throughout the city.\n[…]\nIt is part of the city's Integrated Public Transport System (Spanish: Sistema Integrado de Transporte Público; SITP), along with the urban, complimentary, and special bus services operating on neighbourhood and main streets.\n[…]\nThe mayor oversaw the creation of a special company to build the project and run the central system. The operational design of TransMilenio was undertaken by transport consultants Steer Davies Gleave, with the financial structuring of the project led by Capitalcorp S.A., a local investment bank. Most of the money required to build TransMilenio was provided by the Colombian government, while the city of Bogotá provided the remaining 30%.\n[…]\nBogotá won the Sustainable Transport Award for a second time in 2022, due in part to the continued expansion and success of TransMilenio. A press release by the Institute for Transportation and Development Policy stated that \"The City of Bogotá has assembled a fleet of 1,485 electric buses for its public transportation system—placing the city among the three largest e-bus fleets outside of China.\"\n[…]\nSeveral policies have been adopted in order to confront this problem, like an exclusive bus for women, and special undercover policewomen, however TransMilenio continued to face reports of sexual assaults as of 2018.\n[…]\nTransMiCable\n[…]\nOfficial website of TransMilenio (in Spanish)\n[…]\nBogota's New Transit System, a TransMilenio slideshow by the New York Times\n[…]\nThe Economics of TransMilenio, an economic analysis of Bogotá's BRT system"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rede_Integrada_de_Transporte",
        "situacao": "ok",
        "texto": "Rede Integrada de Transporte (RIT) foi um sistema de transporte público baseado em ônibus construído a partir do conceito de Bus Rapid Transit (BRT), criado em Curitiba na década de 1970. A RIT conta com 81 quilômetros de corredores de ônibus, geralmente operados por carros biarticulados, que conectam os terminais integrados nas várias regiões da cidade e transportam cerca de 2 milhões de passagei\n[…]\nO sistema de transporte público curitibano inspirou diversas cidades no Brasil e em outros países a adotarem estratégias semelhantes. Nacionalmente, Rio de Janeiro, Belo Horizonte e Brasília começaram a implantar canaletas exclusivas para ônibus. Em 1998, Enrique Peñalosa, o então prefeito de Bogotá, capital da Colômbia, decidiu criar um sistema BRT em sua cidade depois que visitou Curitiba.\n[…]\nO TransMilenio, o sistema de ônibus rápidos de Bogotá, conta com veículos rápidos que circulam por vias totalmente exclusivas e transporta 1,7 milhão de pessoas todos os dias. Além disso, a RIT curitibana também serviu como inspiração para mais de 80 países ao redor do mundo.\n[…]\nEm 2025, ela foi substituída pelo Sistema Integrado de Mobilidade (SIM) afins de propor uma melhor reorganização em toda a malha de transporte urbano de Curitiba e Região.\n[…]\nNa década de 1990 surge a linha direta, comumente chamada de ligeirinho e as estações tubo, em 1992 começou a circular os biarticulados vermelhos com capacidade de 220 passageiros e em 1996 ocorre a integração entre a rede de transporte de Curitiba com a Rede Metropolitana chamada de RIT-M.\n[…]\nCuritiba possui vinte e dois terminais integrados, isto é, neles é possível realizar a transferência de um  ônibus para o outro com a mesma passagem (sem custo adicional para o usuário completar sua viagem). Esta tarifa integrada foi uma das inovações do sistema de transporte coletivo urbano (RIT), datada do início dos anos de 1980 e que vigora até os dias atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ferrovia Transiberiana",
      "descricao": "Rede ferroviária russa que liga Moscou ao Extremo Oriente russo, atravessando a Sibéria."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Ferrovia Transiberiana atravessa a Rússia, de Moscou até qual cidade às margens do Oceano Pacífico?",
    "resposta": "Vladivostok",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trans-Siberian_Railway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trans-Siberian_Railway",
        "situacao": "ok",
        "texto": "The Trans-Siberian Railway, historically known as the Great Siberian Route and often shortened to Transsib, is a large railway system that connects European Russia to the Russian Far East. Spanning a length of over 9,289 kilometers (5,772 miles), it is the longest railway line in the world. It runs from the city of Moscow in the west to the city of Vladivostok in the east.\n[…]\nDuring the period of the Russian Empire, government ministers—personally appointed by Alexander III and his son Nicholas II—supervised the building of the railway network between 1891 and 1916. Even before its completion, the line attracted travelers who documented their experiences. Since 1916, the Trans-Siberian Railway has directly connected Moscow with Vladivostok.\n[…]\nOn 9 March 1891, the Russian government issued an imperial rescript in which it announced its intention to construct a railway across Siberia. Tsarevich Nicholas (later Tsar Nicholas II) inaugurated the construction of the railway in Vladivostok on 19 May that year.\n[…]\nAfter the Russian Revolution of 1917, the railway served as the vital line of communication for the Czechoslovak Legion and the allied armies that landed troops at Vladivostok during the Siberian Intervention of the Russian Civil War. These forces supported the White Russian government of Admiral Alexander Kolchak, based in Omsk, and White Russian soldiers fighting the Bolsheviks on the Ural front.\n[…]\nRussian Railways\n[…]\nPepe, Jacopo Maria. \"The \"Eastern Polygon\" of the Trans-Siberian rail line: a critical factor for assessing Russia's strategy toward Eurasia and the Asia-Pacific.\" Asia Europe Journal 18.3 (2020): 305–324.\n[…]\nTrans-Siberian Railway: a view from Moscow to Vladivostok – a photo essay (27 December 2016), The Guardian. Photographs of \"life on board the Trans-Siberian Railway, and beyond the carriage window\".\n[…]\n\"A 1903 map of Trans-Siberian railway\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transiberiana",
        "situacao": "ok",
        "texto": "A ferrovia Transiberiana ou simplesmente Transiberiana (em russo: Транссибирская магистраль, Транссиб ou 'Transsibirskaya magistral', Transsib) é uma rede ferroviária conectando a Rússia Europeia com as províncias do Extremo-Oriente Russo, Mongólia, China e o Mar do Japão. É frequentemente associada com o comboio transcontinental russo que liga centenas de grandes e pequenas cidades da Rússia, tan\n[…]\nCom 9 289 km, abrangendo oito fusos horários e levando vários dias para realizar uma viagem completa, é o terceiro mais longo serviço contínuo do mundo, depois dos serviços das linhas Moscovo-Pyongyang (10 267 km) e a Donetsk-Vladivostok (9 903 km), ambos os quais também partilham a ferrovia Transiberiana em muitas das suas rotas.\n[…]\nOs planos originais e financiamento para a construção da ferrovia Transiberiana, para ligar a então capital São Petersburgo à cidade portuária de Vladivostok no oceano Pacífico, foram aprovados pelo Czar Alexandre II em São Petersburgo. O filho dele, o Czar Alexandre III, supervisionou a construção. O Czar nomeou pessoalmente Sergei Witte como Director dos Assuntos dos Caminhos-de-Ferro em 1889.\n[…]\nA rota principal é a linha Transiberiana inicia-se em  Moscou, passa por Iaroslavl no Volga, Perm no rio Kama, Ekaterinenburg nos Urais, Omsk no rio Irtysh, Novosibirsk no rio Ob, Krasnoyarsk no rio Ienissei, Irkutsk perto da extremidade sul do lago Baikal, Tchita, Blagoveshchensk, Khabarovsk e finalmente Vladivostok. Frequentemente em vez do trecho Moscou-Iaroslavl-Kirov usa-se rota ferroviária Moscou-Vladimir-Níjni Novgorod-Kirov.\n[…]\nVladivostok\n[…]\nMoscovo-Vladivostok: viagem virtual com mapas Google (vídeo com paisagens ao longo do todo caminho-de-ferro; através Níjni Novgorod)\n[…]\nThe TRANS-SIBERIAN RAILWAY (Web Encyclopedia) (em inglês)\n[…]\nO sítio dedicado ao itinerário de comboio \"Rússia\" (Moscovo-Vladivostok) (em inglês) (em russo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Ferrovia Transiberiana",
      "descricao": "Rede ferroviária russa que liga Moscou ao Extremo Oriente russo, atravessando a Sibéria."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com mais de nove mil quilômetros, qual destas é a linha ferroviária mais longa do mundo?",
    "resposta": "Transiberiana",
    "distratores": [
      "Canadian Pacific",
      "Qinghai-Tibete",
      "Transandina"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Trans-Siberian_Railway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trans-Siberian_Railway",
        "situacao": "ok",
        "texto": "The Trans-Siberian Railway, historically known as the Great Siberian Route and often shortened to Transsib, is a large railway system that connects European Russia to the Russian Far East. Spanning a length of over 9,289 kilometers (5,772 miles), it is the longest railway line in the world. It runs from the city of Moscow in the west to the city of Vladivostok in the east.\n[…]\nThe railway was laid 70 km (43 mi) to the south (instead crossing the Ob at Novonikolaevsk, later renamed Novosibirsk); a dead-end branch line connected with Tomsk, depriving the city of the prospective transit railway traffic and trade.\n[…]\nIn the Russo-Japanese War (1904–1905), the strategic importance and limitations of the Trans-Siberian Railway contributed to Russia's defeat in the war. As the line was single-track, transit was slower as trains had to wait in crossing sidings for opposing trains to cross. This limited the capacity of the line and increased transit times.\n[…]\nA trainload of containers can be taken from Beijing to Hamburg, via the Trans-Mongolian and Trans-Siberian lines in as little as 15 days, but typical cargo transit times are usually significantly longer and typical cargo transit time from Japan to major destinations in European Russia was reported as around 25 days.\n[…]\nRichmond, Simon (2009). Trans-Siberian Railway. Lonely Planet. Guide book for travelers\n[…]\nTrans-Siberian Railway, National Geographic Expeditions website\n[…]\n\"A 1903 map of Trans-Siberian railway\".\n[…]\nManley, Deborah, ed. (2009). The Trans-Siberian Railway: A Traveller's Anthology. Signal Books. ISBN 978-1-904955-49-8. Archived from the original on March 5, 2012.\n[…]\nWinchester, Clarence, ed. (1936), \"The Trans-Siberian Express\", Railway Wonders of the World, pp. 451–57 illustrated description of the route and the train\n[…]\nList of cities (with photos) most visited by tourists traveling along the Trans-Siberian Railway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transiberiana",
        "situacao": "ok",
        "texto": "A ferrovia Transiberiana ou simplesmente Transiberiana (em russo: Транссибирская магистраль, Транссиб ou 'Transsibirskaya magistral', Transsib) é uma rede ferroviária conectando a Rússia Europeia com as províncias do Extremo-Oriente Russo, Mongólia, China e o Mar do Japão. É frequentemente associada com o comboio transcontinental russo que liga centenas de grandes e pequenas cidades da Rússia, tan\n[…]\nCom 9 289 km, abrangendo oito fusos horários e levando vários dias para realizar uma viagem completa, é o terceiro mais longo serviço contínuo do mundo, depois dos serviços das linhas Moscovo-Pyongyang (10 267 km) e a Donetsk-Vladivostok (9 903 km), ambos os quais também partilham a ferrovia Transiberiana em muitas das suas rotas.\n[…]\nA rota principal é a linha Transiberiana inicia-se em  Moscou, passa por Iaroslavl no Volga, Perm no rio Kama, Ekaterinenburg nos Urais, Omsk no rio Irtysh, Novosibirsk no rio Ob, Krasnoyarsk no rio Ienissei, Irkutsk perto da extremidade sul do lago Baikal, Tchita, Blagoveshchensk, Khabarovsk e finalmente Vladivostok. Frequentemente em vez do trecho Moscou-Iaroslavl-Kirov usa-se rota ferroviária Moscou-Vladimir-Níjni Novgorod-Kirov.\n[…]\nA linha Transmanchuriana coincide com a Transiberiana até Tarskaya, algumas centenas de quilômetros a leste do lago Baikal. De Tarskaya a Transmanchuriana dirige-se para o sudeste, China adentro, terminando seu percurso em Pequim, sendo administrada pelo pessoal e administração russos baseados em Harbin, na Manchúria.\n[…]\nEm 1991, uma quarta rota indo mais longe para o norte foi finalmente terminada, depois de mais de 50 anos de trabalhos esporádicos. Conhecida como a linha Baikal Amur (em verde no mapa), esta extensão inicia-se da linha Transiberiana, há várias centenas de quilômetros a oeste do lago Baikal, e passa pelo lago na sua extremidade norte.\n[…]\nThe TRANS-SIBERIAN RAILWAY (Web Encyclopedia) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Benz Patent-Motorwagen",
      "descricao": "Automóvel patenteado por Karl Benz em 1886, considerado o primeiro automóvel moderno."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantas rodas tinha o automóvel patenteado por Karl Benz em 1886, considerado o primeiro carro moderno?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen",
        "situacao": "ok",
        "texto": "Benz Patent-Motorwagen (\"patent motorcar\") is used today to refer to the first cars produced by Benz & Cie between 1885 and 1893; these had three wheels, a single-cylinder four-stroke engine and belt-drive. Benz & Cie used the designation \"Patent-Motorwagen\" for their four-wheel cars until c.1900, but these are known today by their other names, such as Viktoria and Velo.\n[…]\nThe Patent-Motorwagen has been recognised as the first practical automobile (Nr. 2) and the first to enter production (Model 2). As its creator, Carl Benz has been hailed as the father and inventor of the automobile.\n[…]\nBenz started work on his Motorwagen in 1884 in his own time, outside his responsibilities as a director of the company. He continually made changes to it, so it is hard to tie down details of its specification at any particular date. What can be said is that the first version which Benz was happy to take into Mannheim and be seen in was the Patent-Motorwagen Nr. 2 in summer 1886. This was his first practical car: it fixed the greatest inadequacies in the design of Nr.\n[…]\nIn Mercedes-Benz: Personenwagen 1886-1945 (1985), Werner Oswald, with access to Mercedes-Benz's records, gives statistics of the numbers of vehicles sold by Benz & Cie from 1886 – 1900, broken down by country. However, while data are specified for each individual year after 1893, the data are aggregated for the years 1886 – 1893. Oswald states that about 25 three-wheel Patent-Motorwagen were manufactured (not sold).\n[…]\nOn 12 July 1925 the Allgemeine Schnauferl-Club organised a parade of historic vehicles in Munich which Benz headed, driving his Patent-Motorwagen for one final time.\n[…]\nPatent 37435, by Karl Benz for his 1885 Motorwagon The birth certificate of the automobile – the German patent application of January 29, 1886, that was granted on November 2, 1886, to Benz & Company in Mannheim"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Benz_Patent-Motorwagen",
        "situacao": "ok",
        "texto": "O Benz Patent-Motorwagen, construído em 1886, é amplamente reconhecido como o primeiro automóvel, ou seja, um veículo \"projetado\" para ser movido a motor.\n[…]\nO veículo recebeu a patente alemã número 37 435, requerida por Karl Benz em janeiro de 1886. Seguindo procedimentos oficiais, a data de requerimento torna-se a data da patente, que ocorreu em novembro do mesmo ano.\n[…]\nBenz apresentou sua invenção oficialmente ao público em 3 de julho de 1886 na Ringstraße em Mannheim, Alemanha.\n[…]\nO Benz Patent-Motorwagen era um automóvel de três rodas com um motor traseiro. O veículo continha muitas novas invenções. Foi construído com tubos de aço e painéis de madeira. As rodas de aço raiadas e pneus de borracha sólida foram projetos de Benz. A direção era por cremalheira que girava a roda da frente sem mecanismo de suspensão. Molas elípticas foram usadas na parte de trás juntamente com um eixo sólido e acionamento por corrente dos dois lados.\n[…]\nBertha Benz, casada com Karl, decidiu fazer a publicidade do Patent-Motorwagen de maneira única—ela tomou o Patent-Motorwagen Nr. 3, supostamente sem o conhecimento de seu marido, e dirigiu-o na primeira viagem a longa distância de automóvel, a fim de demonstrar sua viabilidade como meio de viagem a longas distâncias.\n[…]\nApós enviar um telegrama a seu marido ao chegar a Pforzheim, passou a noite na casa de sua mãe e voltou para casa três dias depois. A viagem total foi de 194 km.\n[…]\nHistória do automóvel\n[…]\nPatent 37435, by Karl Benz for his 1885 Motorwagon A \"certidão de nascimento\" do automóvel - o pedido de patente alemã de 29 de janeiro de 1886, concedido em 2 de novembro de 1886 à Benz & Company em Mannheim",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Caravela",
      "descricao": "Embarcação a vela leve usada por portugueses e espanhóis nas Grandes Navegações dos séculos quinze e dezesseis."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que tipo de vela triangular permitia às caravelas portuguesas avançar quase contra o vento?",
    "resposta": "Vela latina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caravel",
      "https://en.wikipedia.org/wiki/Lateen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caravel",
        "situacao": "ok",
        "texto": "The caravel (Galician: carabela, IPA: [kaɾaˈbɛla]; Portuguese: caravela, IPA: [kɐɾɐˈvɛlɐ]; Spanish: carabela, IPA: [kaɾaˈbela])  was a small sailing ship that developed from the fishing craft of Galicia, Portugal, and Atlantic Andalusia. It could be rigged either entirely with lateen sails or with a combination of lateen and square sails. It was noted for its capacity for sailing windward (beating\n[…]\nCaravels were used by the Portuguese and the Spanish for voyages of exploration during the 15th and 16th centuries, in the Age of Exploration.\n[…]\nThe design of the caravel developed from traditional small, single-masted fishing vessels used in the thirteenth century along the coasts of Galicia, Portugal, and Atlantic Andalusia. These early craft originated when Mediterranean trade networks carried lateen rigging westward through the Strait of Gibraltar, where regional shipwrights merged it with Atlantic boatbuilding practices.\n[…]\nThe design of the caravel allowed it to sail in difficult winds and open ocean conditions. It became the main vessel used by Portuguese explorers like Diogo Cão, Bartolomeu Dias, and the Corte-Real brothers (Gaspar and Miguel), and was used in Spanish expeditions by Christopher Columbus. They were easier to steer and handle than older designs like the barca and barinel. These explorations helped establish global trade networks and enabled the spice trade for Portugal and Spain.\n[…]\nTowards the end of the 15th century, the Portuguese developed a larger version of the caravel, bearing a forecastle and sterncastle – though not as high as those of a carrack, which would have made it unweatherly – but most distinguishable for its square-rigged foremast, and three other masts bearing lateen rig. In this form it was referred to in Portuguese as a \"round caravel\" (caravela redonda) as in Iberian tradition, a bulging square sail is said to be round."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lateen",
        "situacao": "ok",
        "texto": "A lateen (; from French  latine 'Latin'), also called a latin-rig, is a triangular sail set on a long yard mounted at an angle on the mast, and running in a fore-and-aft direction. The settee can be considered to be an associated type of the same overall category of sail.\n[…]\nUntil about 1500, square rig predominated in the Indian Ocean.This then changed rapidly, with nearly all vessels now being lateen rigged. As Mediterranean hull design and construction methods are known to have been subsequently adopted by Eastern Muslim shipbuilders, it is assumed that this process also included the lateen rigging of the novel caravel.\n[…]\nThe Northern European adoption of the lateen in the Late Middle Ages was a specialized sail that was one of the technological developments in shipbuilding that made ships more maneuverable, thus, in the historian's traditional progression, permitting merchants to sail out of the Mediterranean and into the Atlantic Ocean; caravels typically mounted three or more lateens.\n[…]\nHowever, there are forms of the lateen rig, as in vela latina canaria, where the spar is changed from one side to the other when tacking. This way, the rig does not suffer these airflow disruptions that come from the sail pushed against the mast.\n[…]\nThe lateen rig was also the ancestor of the Bermuda rig, by way of the Dutch bezaan rig. In the 16th century, when Spain ruled the Netherlands, the lateen rigs were introduced to Dutch boat builders, who soon modified the design by omitting the mast and fastening the lower end of the yard directly to the deck, the yard becoming a raked mast with a full-length, triangular (leg-of-mutton) mainsail aft.\n[…]\nSettee (a triangular sail with the front corner cut off)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caravela",
        "situacao": "ok",
        "texto": "A caravela é um tipo de embarcação inventada pelos portugueses durante a Era dos Descobrimentos, nos séculos XV e XVI.\n[…]\nA primeira referência documental às caravelas data de 1255, constando do foral de Gaia, no Norte de Portugal, sendo que, então, surgem mormente como embarcações de pesca.\n[…]\nEra uma embarcação rápida, de fácil manobra, capaz de bolinar e que, em caso de necessidade, podia ser movida a remos. Com cerca de 25 m de comprimento, 7 metros de boca (largura) e 3 m de calado deslocava cerca de 50 toneladas, tinha 2 ou 3 mastros, convés único e popa sobrelevada. As velas latinas (triangulares) permitiam-lhe bolinar (navegar em zigue-zague contra o vento).\n[…]\nGil Eanes utilizou um barco de vela redonda, mas seria numa caravela (tipo carraca) que Bartolomeu Dias dobraria o Cabo da Boa Esperança em 1488. É de salientar que a caravela é um desenvolvimento dos portugueses.\n[…]\nSe bem que a caravela latina se tenha revelado muito eficiente quando utilizada em mares de ventos inconstantes, como o Mediterrâneo, devido às suas velas triangulares, com as viagens às Índias, com ventos mais calmos, tal não era uma vantagem, já que se mostrava mais lenta que na variação de velas redondas. A necessidade de maior tripulação, armamentos, espaço para mercadorias fez com que fosse substituída por navios maiores.\n[…]\nHá que considerar dois tipos de caravelas, a caravela latina e a caravela redonda. A caravela latina é a original, relativamente à qual não há unanimidade na proveniência. É, no entanto, uma evolução do que já existia, provavelmente um navio de pesca do Algarve.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Fiat 147",
      "descricao": "Carro compacto produzido pela Fiat no Brasil a partir de 1976."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1979, o Fiat 147 entrou para a história como o primeiro carro de série do Brasil movido a quê?",
    "resposta": "Álcool",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fiat_147",
      "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fiat_147",
        "situacao": "ok",
        "texto": "The Fiat 147 was a three-door hatchback subcompact car produced by Fiat in the Brazilian state of Minas Gerais from autumn 1976 until 1987, when it was replaced by the Fiat Uno. It was the Brazilian variant of the Fiat 127. Some were also built by Sevel in Argentina (where later models were named Fiat Spazio, Brío and Vivace) until 1996, and assembly also took place in Colombia, Uruguay and Venezu\n[…]\nIn general, Fiat do Brasil introduced their changes for the coming model year at the time of the Salão do Automóvel, usually held in November. In 1978, the 147 lineup received the addition of the Furgoneta van. The Furgoneta had a solid division between the front seats and the cargo area, while all rear windows (including the one in the hatch) were panelled. Originally only available with the 1050 engine, the Furgoneta later also received the 1.3-liter álcool-powered engine.\n[…]\nAn interesting sub-species was the 1987 Fiat Brío - this utilized the original, pre-facelift, Brazilian bodywork from 1976 for a special bargain version with the 1.1 engine. The Brío was discontinued in 1989.\n[…]\nA total of 1,269,312 units were produced in Fiat's Brazilian factory in Betim, plus 232,807 units in the Sevel plant of Córdoba, Argentina. This includes Panoramas and Fiorinos; the total of three-door 147/Spazios built in Brazil (excluding CKD production) is 709,230. The 147 and derivatives were also assembled in the CCA plant in Bogotá, Colombia.\n[…]\nCastaings, Francis; Samahá, Fabrício (2016-07-08). \"Fiat 147, um pequeno que foi grande em significado\" [Fiat 147, a small car of great significance]. Best Cars (in Portuguese). Archived from the original on 2020-07-26.\n[…]\nde Simone, Rogério; Ferraresi, Rogério (2016), Clássicos do Brasil: Fiat 147 [Brazilian Classics: Fiat 147] (in Portuguese), Alaúde, ISBN 978-8578813642\n[…]\nFiat 147 history (in Portuguese)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ethanol_fuel_in_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the world's second largest producer of ethanol fuel. Brazil and the United States have led the industrial production of ethanol fuel for several years, together accounting for 85 percent of the world's production in 2017. Brazil produced 26.72 billion liters (7.06 billion U.S. liquid gallons), representing 26.1 percent of the world's total ethanol used as fuel in 2017.\n[…]\nAfter testing in government fleets with several prototypes developed by the local carmakers, and compelled by the second oil crisis, the Fiat 147, the first modern commercial neat ethanol car (E100 only) was launched to the market in July 1979.\n[…]\nThe rapid adoption and commercial success of \"flex\" vehicles, as they are popularly known, together with the mandatory blend of alcohol with gasoline as E25 fuel, have increased ethanol consumption up to the point that by February 2008 a landmark in ethanol consumption was achieved when ethanol retail sales surpassed the 50% market share of the gasoline-powered fleet. This level of ethanol fuel consumption had not been reached since the end of the 1980s, at the peak of the Pró-Álcool Program.\n[…]\nA 2009 study published in Energy Policy found that the use of ethanol fuel in Brazil has allowed to avoid over 600 million tons of CO2 emissions since 1975, when the Pró-Álcool Program began. The study also concluded that the neutralization of the carbon released due to land-use change was achieved in 1992.\n[…]\nThe use of ethanol-only vehicles has also reduced CO emissions drastically. Before the Pró-Álcool Program started, when gasoline was the only fuel in use, CO emissions were higher than 50 g/km driven; they had been reduced to less than 5.8 g/km in 1995. Several studies have also shown that São Paulo has benefit with significantly less air pollution thanks to ethanol's cleaner emissions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fiat_147",
        "situacao": "ok",
        "texto": "O Fiat 147 foi o primeiro modelo de automóvel produzido pela Fiat do Brasil entre 1976 e 1986, baseado no 127 italiano. Portanto, é o carro que inaugurou a FIAT no Brasil e foi o responsável por começar a trajetória da marca no país.\n[…]\nO primeiro veículo produzido pela fábrica de Betim foi concluído em julho de 1976. O carro foi mostrado oficialmente pela primeira vez no X Salão do Automóvel, realizado no dia 18 de Novembro de 1976. Foram expostas 15 unidades do FIAT 147 pintadas em cores diferentes e inclusive protótipos de 147 movidos a álcool (hoje comumente denominado etanol) - primeiro veículo movido a álcool em todo o mundo. Assim que chegou ao mercado nacional, o FIAT 147 ganhou o título de mais estável carro nacional.\n[…]\nEm 1975 o governo brasileiro lançou o Programa Nacional do Álcool visando produzir um combustível como alternativa à gasolina. A FIAT foi uma das primeiras montadoras do país a aderir ao programa, realizando testes com uma versão do 147 movida a álcool. Batizada informalmente de \"Cachacinha\", o 147 Álcool precisou de pequenas modificações para os testes.\n[…]\nO 147 foi o primeiro automóvel brasileiro movido a álcool fabricado em série. Os primeiros, com motor 1.3, foram adquiridos pelo governo brasileiro e por empresas públicas, sendo entregues em agosto de 1978.\n[…]\nA Sevel projetou e apresentou o FIAT-VAE (Vehículo De Alta Eficiencia) em 1985, uma versão do 147 despojada de diversos itens como o banco traseiro, painel, acabamento interno, com bancos tubulares de aço revestidos por faixas de tecido. Apesar da carroceria ser do 147 em produção (Europa), a frente era a dos primeiros 147 produzida no Brasil. Apesar do preço estimado ser até 40% menor, o governo argentino acabou recusando a ideia.",
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
