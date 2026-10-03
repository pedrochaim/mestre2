Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Escultura e Arquitetura** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Conjunto Moderno da Pampulha",
      "descricao": "Conjunto arquitetônico projetado por Oscar Niemeyer nos anos 1940 em torno da lagoa da Pampulha, com a Igreja de São Francisco de Assis."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Conjunto Moderno da Pampulha, com a igreja ondulada que Niemeyer projetou nos anos quarenta, fica em que capital brasileira?",
    "resposta": "Belo Horizonte",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
      "https://en.wikipedia.org/wiki/Pampulha_Modern_Ensemble"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Conjunto_Moderno_da_Pampulha",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pampulha_Modern_Ensemble",
        "situacao": "ok",
        "texto": "The Pampulha Modern Ensemble (Portuguese: Conjunto Moderno da Pampulha) is an urban project in Belo Horizonte, Minas Gerais state of Brazil. It was designed around an artificial lake, Lake Pampulha, in the district of Pampulha and includes a casino (currently Pampulha Art Museum), a ballroom (Casa do Baile), the Golf Yacht Club (currently Iate Tênis Clube) and the Church of Saint Francis of Assisi\n[…]\nThe buildings were designed by the architect Oscar Niemeyer, in collaboration with the landscape architect Roberto Burle Marx, Brazilian Modernist artists, and structural engineer Joaquim Cardozo.\n[…]\nIn July 2016, the site was declared a UNESCO World Heritage Site because of its outstanding examples of modern architecture and its importance in the development of a Brazilian architectural identity.\n[…]\nExplore Pampulha Modern Ensemble in the UNESCO collection on Google Arts and Culture"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Museu de Arte Contemporânea de Niterói",
      "descricao": "Museu projetado por Oscar Niemeyer, em forma de disco, sobre um mirante à beira da baía de Guanabara, inaugurado em 1996."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com vista para a baía de Guanabara, o museu de arte contemporânea de Niemeyer em forma de disco voador fica em que cidade?",
    "resposta": "Niterói",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Museu_de_Arte_Contempor%C3%A2nea_de_Niter%C3%B3i",
      "https://en.wikipedia.org/wiki/Niter%C3%B3i_Contemporary_Art_Museum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_de_Arte_Contempor%C3%A2nea_de_Niter%C3%B3i",
        "situacao": "ok",
        "texto": "O Museu de Arte Contemporânea de Niterói (MAC) é um museu de arte contemporânea brasileira localizado na cidade de Niterói, no Rio de Janeiro, no Brasil. A obra foi inaugurada no dia 2 de setembro de 1996. Projetado pelo arquiteto Oscar Niemeyer, o MAC tornou-se um dos cartões-postais de Niterói. Destina-se principalmente a obras pertencentes à arte contemporânea brasileira da década de 1950 até h\n[…]\nA partir da concretização deste projeto, a Prefeitura Municipal de Niterói convidou o arquiteto a realizar outros trabalhos na cidade. A série de intervenções urbanísticas e edifícios que abrigam atividades culturais daí decorrentes, e que seguem um faixa contínua na paisagem da cidade, são conhecidos como Caminho Niemeyer.\n[…]\nO Caminho Niemeyer inclui atualmente dez projetos, cinco concluídos, dois em construção e três ainda em fase de projeto: Museu de Arte Contemporânea de Niterói, Praça JK, Memorial Roberto Silveira, Teatro Popular de Niterói, Estação Hidroviária de Charitas, prédio do Terminal das Barcas de Charitas e Fundação Oscar Niemeyer.\n[…]\nDe abril a maio de 2022 foi realizado o Projeto Mirante nas áreas externas do MAC Niterói e concebido pelo artista e curador Felippe Moraes, propondo a discussão de assuntos da jovem produção de arte contemporânea brasileira como território, antropoceno, ruína e trabalho. Segundo Moraes, o projeto \"é construído como forma de fazer o museu pensar sobre si mesmo, seu lugar social, político e sua relação com a cidade.\n[…]\nCineclube Cineolho - Local: auditório (subsolo do museu), distribuição de senhas a partir das 15h30 (60 lugares).\n[…]\nContação de Histórias no MAC de Niterói - Todo domingo, 16h.\n[…]\nPara quem estiver na cidade do Rio de Janeiro, a maneira mais usual e rápida para se chegar no Museu de Arte contemporânea de Niterói é ir até a Praça XV e atravessar a Baía de Guanabara por meio das barcas.\n[…]\nCaminho Niemeyer\n[…]\nTeatro Popular de Niterói"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Niter%C3%B3i_Contemporary_Art_Museum",
        "situacao": "ok",
        "texto": "The Niterói Contemporary Art Museum (Museu de Arte Contemporânea de Niterói — MAC) is situated in the city of Niterói, Rio de Janeiro, Brazil, and is one of the city’s main landmarks. It was completed in 1996.\n[…]\nThe MAC-Niterói was designed by Oscar Niemeyer with the assistance of structural engineer Bruno Contarini, who had worked with Niemeyer on earlier projects. The structure is 16 meters high; its cupola has a diameter of 50 meters with three floors. The museum has a collection of 1,217 works from the art collector João Sattamini. The collection was assembled since the 1950s by Sattamini, constituting the second largest collection of contemporary art in Brazil.\n[…]\nThe MAC Scandal was a political scandal that surrounded the acquisition of land for the museum. The sub-mayor of Niterói's Oceanic Region, Zeca Mocarzel, convinced the owner of the land that construction rights were locked by the city council and, therefore, were able to purchase the land at a low price. When the mayor, Jorge Roberto Silveira, sent the museum project to the city council to obtain the rights to construction, it was accepted in only two days.\n[…]\nAfter the inauguration of the MAC, which substantially increased the property values of nearby areas, the land was sold for more than 5 million reals (approximately 1,250,000 US dollars) in 1996. Because the land deal took place just before Christmas, the people of Niterói said that it was a Christmas present that Jorge Roberto Silveira, Zeca Mocarzel and João Sampaio's (another long-time Niterói politician) gave to themselves.\n[…]\nList of Oscar Niemeyer works\n[…]\nMedia related to Museu de Arte Contemporânea de Niterói at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Monte Rushmore",
      "descricao": "Memorial nacional dos Estados Unidos com os rostos de quatro presidentes esculpidos na rocha de uma montanha."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os rostos de quatro presidentes americanos esculpidos na rocha do Monte Rushmore ficam em que estado dos Estados Unidos?",
    "resposta": "Dakota do Sul",
    "distratores": [
      "Dakota do Norte",
      "Wyoming",
      "Montana"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monte_Rushmore",
      "https://en.wikipedia.org/wiki/Mount_Rushmore"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Rushmore",
        "situacao": "ok",
        "texto": "O Monte Rushmore (em inglês:  Mount Rushmore; em dacota: Tȟuŋkášila Šákpe, Igmútȟaŋka Pahá) é um monumento que localiza-se em Keystone, no estado do Dakota do Sul, Estados Unidos.\n[…]\nÉ um monte onde estão esculpidos os rostos de quatro Presidentes dos Estados Unidos: George Washington, o primeiro presidente dos EUA, Thomas Jefferson, autor da declaração da independência, Theodore Roosevelt, que conquistou maior conhecimento e liberdade de expressão, e Abraham Lincoln, que lutou pela paz do país durante toda a Guerra Civil.\n[…]\nO monumento é uma das atrações turísticas mais conhecidas dos Estados Unidos, rendendo ao Estado de Dakota do Sul o cognome de The Mount Rushmore State. Os gigantescos rostos, de 15 a 21 metros de altura, de George Washington, Thomas Jefferson, Abraham Lincoln e Theodore Roosevelt foram construídos com antigos instrumentos de engenharia, marretas e martelos a 150 metros de altura, na região de Black Hills. Borglum morreu pouco tempo antes de completar o seu trabalho.\n[…]\nO monte foi designado, em 19 de outubro de 1966, um distrito do Registro Nacional de Lugares Históricos bem como, um Memorial Nacional.\n[…]\nA escultura no Monte Rushmore foi construída em terras que foram ilegalmente tomadas da Nação Sioux na década de 1870. Os Sioux continuam a exigir a devolução das terras e, em 1980, a Suprema Corte dos EUA decidiu no caso Estados Unidos v. Nação Sioux dos indígenas que a tomada das Black Hills exigia uma compensação justa e concedeu à tribo US$ 102 milhões. Os Sioux recusaram o dinheiro e exigem a devolução total das terras.\n[…]\nMarco Histórico Nacional na Dakota do Sul"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Rushmore",
        "situacao": "ok",
        "texto": "The Mount Rushmore National Memorial is a national memorial  featuring a colossal sculpture carved into the granite face of Mount Rushmore (Lakota: Tȟuŋkášila Šákpe Pahá, or Six Grandfathers Mountain) in the Black Hills, about 2 mi (3 km) southwest of Keystone, South Dakota, United States. The sculptor, Gutzon Borglum, named it the Shrine of Democracy, and oversaw the execution from 1927 to 1941 w\n[…]\nBorglum saw the Stone Mountain and Mount Rushmore projects as explicitly related. In a 1924 letter, he described the South Dakota memorial as \"not unrelated to the Memorial to the great Confederates\" and as \"a great Northern National Memorial\" that would be \"equal in proportions to the Southern Memorial.\" Borglum stated his purpose for the Mount Rushmore memorial in nationalistic and civilizational terms.\n[…]\nMount Rushmore is largely composed of granite. The memorial is carved on the northwest margin of the Black Elk Peak granite batholith in the Black Hills of South Dakota, so the geologic formations of the heart of the Black Hills region are also evident at Mount Rushmore. The batholith magma intruded into the pre-existing mica schist rocks during the Proterozoic, 1.6 billion years ago.\n[…]\n\"The Mount Rushmore State\" has been South Dakota's official state nickname since 1980, in place of its former official nickname, \"The Coyote State\". The school district of South Dakota's largest city, Sioux Falls, has named its high schools for each of the four Mount Rushmore presidents. These are Washington High School opened in 1908, Lincoln High School opened in 1955, Roosevelt High School opened in 1991, and Jefferson High School opened in 2021.\n[…]\nReed, Paula S; Wallace, Edith B (2016). Shrine of Democracy and Sacred Stone: Historic Resource Study, Mount Rushmore National Memorial, South Dakota (PDF) (Report). Hagerstown, MD: Paula S. Reed & Associates / National Park Service."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Taj Mahal",
      "descricao": "Mausoléu de mármore branco do século dezessete, construído pelo imperador mogol Shah Jahan às margens do rio Yamuna, na Índia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Às margens do rio Yamuna, o Taj Mahal fica em que cidade indiana?",
    "resposta": "Agra",
    "distratores": [
      "Nova Délhi",
      "Jaipur",
      "Varanasi"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Taj_Mahal",
      "https://en.wikipedia.org/wiki/Taj_Mahal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "O Taj Mahal (em hindi: ताज महल) é um mausoléu situado em Agra, na Índia, sendo o mais conhecido dos monumentos do país. Encontra-se classificado pela UNESCO como Patrimônio da Humanidade. Foi anunciado em 2007 como uma das sete maravilhas do mundo moderno.\n[…]\nPara transportar o mármore e outros materiais desde Agra até ao local da edificação, construiu-se uma rampa de terra de 15 km de comprimento. De acordo com os registos da época, para o transporte dos grandes blocos utilizaram-se carreiras especialmente construídas, tiradas por carros de vinte ou trinta bois. Para colocar os blocos em posição foi necessário um elaborado sistema de roldanas montadas sobre postes e vigas de madeira, e a força de juntas de bois e mulas.[carece de fontes]?\n[…]\nOs cronistas europeus, especialmente durante o primeiro período do Raje britânico, sugeriram que alguns dos trabalhos do Taj Mahal tinham sido obra de artesãos europeus. A maioria destas suposições eram puramente especulativas, mas uma referência de 1640, segundo a carta de um frade espanhol que visitou Agra, menciona que Geronimo Veroneo, um aventureiro italiano na corte de Xá Jahan, foi o responsável principal do desenho.\n[…]\nDe acordo com John Rosselli, biógrafo de Bentinck, a história foi criada a partir de outros acontecimentos, de tipo diferente: a venda de mármore proveniente do forte de Agra e a de um famoso embora obsoleto canhão, em ambos casos com fins de beneficência.\n[…]\nEm 2000 a Supremo Tribunal de Justiça indeferiu as petições de Oak relativas à declaração de origem hindu do Taj Mahal, e condenou-o a pagar os custos judiciais. De acordo com Oak, a rejeição pelo governo indiano da sua petição é parte de uma conspiração contra o hinduísmo.\n[…]\n«Fotos do Taj Mahal»\n[…]\n«Taj Mahal em 3D»  no Google Earth"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "The Taj Mahal ( TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his late wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.\n[…]\nIn the 18th century, the Jat rulers of Bharatpur attacked the Taj Mahal while invading Agra and took away two chandeliers, one of agate and another of silver, which had hung over the main cenotaph and the gold and silver screen. Kanbo, a Mughal historian, said the gold shield which covered the 4.6-metre-high (15 ft) finial at the top of the main dome was also removed during the Jat despoliation.\n[…]\nEver since its construction, the building has been the source of an admiration transcending culture and geography, and so personal and emotional responses have consistently eclipsed scholastic appraisals of the monument. A longstanding myth holds that Shah Jahan planned a mausoleum to be built in black marble as a Black Taj Mahal across the Yamuna river. The idea originates from fanciful writings of Jean-Baptiste Tavernier, a European traveler and gem merchant, who visited Agra in 1665.\n[…]\nNo evidence exists for claims that Lord William Bentinck, governor-general of India in the 1830s, supposedly planned to demolish the Taj Mahal and auction off the marble. Bentinck's biographer John Rosselli says that the story arose from Bentinck's fund-raising sale of discarded marble from Agra Fort. Another myth suggests that beating the silhouette of the finial will cause water to come forth. To this day, officials find broken bangles surrounding the silhouette.\n[…]\nProfile of the Taj Mahal at UNESCO\n[…]\n\"Outlying Buildings\". Taj Mahal. Archived from the original on 4 February 2015. Retrieved 7 February 2015."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Alhambra",
      "descricao": "Complexo de palácios e fortaleza construído pelos governantes muçulmanos nacéridas na Andaluzia, Espanha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Alhambra, conjunto de palácios e fortaleza dos reis muçulmanos da Espanha, fica em que cidade da Andaluzia?",
    "resposta": "Granada",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Alhambra",
      "https://en.wikipedia.org/wiki/Alhambra"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Alhambra",
        "situacao": "ok",
        "texto": "Alhambra ou, preferencialmente, Alambra (em árabe: الحمراء; \"a Vermelha\") é um complexo palaciano e fortaleza localizado na cidade e município de Granada, na província homónima, comunidade autónoma da Andaluzia, na Espanha, em posição dominante no alto duma elevação arborizada na parte sudeste da cidade.\n[…]\nO domínio muçulmano de Granada chegou ao fim em 1492, quando os nacéridas foram derrotados pelo Rei Fernando II de Aragão e pela Rainha Isabel de Castela, os quais tomaram a região envolvente duma forma esmagadora. Depois dessa data, os conquistadores começaram a alterar o complexo arquitectónico, com os Reis Católicos a fazerem da Alhambra um palácio real. Os trabalhos inacabados foram cobertos de cal, apagaram-se as pinturas e dourados, o mobiliário foi destruído ou levado para outros locais.\n[…]\nO Comité do Património Mundial da UNESCO declarou a Alhambra e o Generalife de Granada como Património Cultural da Humanidade na sua sessão do dia 2 de Novembro de 1984 e, cinco anos depois, o bairro do Albaicín (Al Albayzín), antiga cidade medieval muçulmana, obteve a mesma denominação como extensão da declaração de Património Cultural da Humanidade de La Alhambra e do Generalife.\n[…]\nde altura), foi içada pela primeira vez a bandeira de Fernando II de Aragão e Isabel de Castela aquando da conquista espanhola de Granada no dia 2 de janeiro de 1492. Uma torreta contendo um grande sino foi acrescentada no século XIX e restaurada depois de ter sido danificada por um raio em 1881. Para lá da alcáçova fica o palácio dos soberanos mouros, a Alhambra propriamente dita; e para além desta situa-se a Alhambra Alta, originalmente ocupada por oficiais e cortesãos.\n[…]\n«Guia de Granada e da Alhambra»\n[…]\n«A arte nacérida. A Alhambra de Granada»\n[…]\n«Palácio de la Alhambra. CVC. O jardim andaluz. Granada nacérida»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alhambra",
        "situacao": "ok",
        "texto": "The Alhambra (, Spanish: [aˈlambɾa]; Arabic: الْحَمْرَاء, romanized: al-ḥamrāʼ ) is a palace and fortress complex located in Granada, Spain. It is one of the most famous monuments of Islamic architecture and the only well-preserved palace from the medieval Islamic world. Additionally, the palace contains notable examples of Spanish Renaissance architecture.\n[…]\nOn 18 August 2026, the Alhambra palace was temporarily closed for an inspection of the damage following an earthquake that occurred near Granada.\n[…]\nLocated just east of the Palace of Charles V is the Catholic Church of Santa María de la Alhambra ('Saint Mary of the Alhambra'), which stands on the site of the former Alhambra Mosque, the congregational mosque of the Alhambra complex. The church was built between 1581 and 1618. It is under the authority of the Archbishop of Granada. The building was designed by architects Juan de Herrera and Juan de Orea and completed by Ambrosio Vico.\n[…]\nThe main approach to the Alhambra today is through the Alhambra Woods in the valley on its south side. The outer entrance to the woods is through the Puerta de las Granadas ('Gate of the Pomegranates'), a formal Renaissance-style gate built in 1536 over the remains of an earlier Islamic-era gate.\n[…]\nThe earliest examples are dated to the late 13th or early 14th century, but the most elegant examples date from the late 14th or early 15th century. It is unclear where exactly they were produced, as there were several centres of ceramic production in the Nasrid kingdom, including Granada and Málaga. One of the best examples is the 14th-century Vase of the Gazelles, now kept at the Alhambra Museum.\n[…]\nVilla Alhambra (villa in Malta)\n[…]\nOfficial website  (Patronato of the Alhambra and Generalife)\n[…]\nMurphy, James Cavanah, 1816, The Alhamra (Alhambra) at Granada. Contains drawings of the Alhambra in the early 19th century."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Manneken Pis",
      "descricao": "Estatueta de bronze de um menino urinando numa fonte, símbolo da capital da Bélgica."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A pequena estátua de bronze de um menino fazendo xixi numa fonte, o Manneken Pis, é símbolo de que capital europeia?",
    "resposta": "Bruxelas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manneken_Pis",
      "https://en.wikipedia.org/wiki/Manneken_Pis"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manneken_Pis",
        "situacao": "ok",
        "texto": "Manneken Pis (traduzido da língua flamenga, \"garoto a urinar\")  é um monumento localizado no Centro de Bruxelas, na Bélgica. É uma pequena fonte em bronze de um menino a urinar para a bacia da fonte. É o mais conhecido símbolo do povo de Bruxelas, bem como de seu bom humor e de sua liberdade de pensamento.\n[…]\nComo mostrado por uma gravura de Jacques Harrewijn de 1697, a fonte já não estava localizada na rua, mas em um recesso no cruzamento da rua do Carvalho com a rua do Guisado. Em 1770, a coluna e a bacia retangular dupla já haviam desaparecido. A estátua estava integrada em uma nova decoração: um nicho de pedra no estilo \"jardim de pedra\", originário de uma fonte desativada de Bruxelas. A água fluía para uma grelha no chão, que viria a ser trocada por uma bacia no século XIX.\n[…]\nEmbora o Manneken pis de Bruxelas seja o mais famoso, existem outros no país. Existe uma disputa sobre qual é o Manneken pis mais antigo: o de Bruxelas ou o de Geraardsbergen. Estátuas similares podem ser encontradas nas cidades belgas de Koksijde, Hasselt, Ghent, Bruges, na cidade de Braine-l'Alleud (onde é chamado de \"garoto Quipiche\"), e na cidade francesa de língua flamenga Broxeele, que tem a mesma etimologia de Bruxelas.\n[…]\nDesde 1987, o Manneken pis tem um equivalente feminino em Bruxelas, a Jeanneke Pis, instalada no lado leste do Beco da Fidelidade, perto da Rua dos Açougueiros. Ela representa uma garota agachada, urinando, e alimenta uma pequena fonte. No entanto, não é tão famosa quanto seu equivalente masculino.\n[…]\nO Het Zinneke é a estátua de um cachorro urinando sobre uma baliza. Foi criado em 1998. Pode ser associado ao Manneken pis, embora não alimente uma fonte. Está situado no cruzamento da Rua dos Cartuxos com a Rua do Velho Mercado de Grãos, em Bruxelas.\n[…]\nManneken Pis em traje ucraniano"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Manneken_Pis",
        "situacao": "ok",
        "texto": "Manneken Pis (pronounced [ˌmɑnəkə(m) ˈpɪs] ; Dutch for 'Little Pissing Man') is a landmark 55.5 cm (21.9 in) bronze fountain sculpture in central Brussels, Belgium, depicting a puer mingens: a nude boy urinating into the fountain's basin. Though its existence is attested as early as the mid-15th century, Manneken Pis was redesigned by the Brabantine sculptor Jérôme Duquesnoy the Elder and put in p\n[…]\nDue to its long history, the statue is also sometimes dubbed le plus vieux bourgeois de Bruxelles in French or de oudste burger van Brussel in Dutch (\"the oldest bourgeois of Brussels\").\n[…]\nThe local and international press covered the story, contributing to the students' collection of funds donated to two orphanages. The case did go further, however, and the base was replaced identically by the Compagnie des Bronzes de Bruxelles, to which the statue was anchored by a reinforced bronze attachment.\n[…]\nHet Zinneke, sometimes called Zinneke Pis, another bronze sculpture in central Brussels, depicting a dog urinating against a bollard, can also be seen as a reference to Manneken Pis. It is, however, not associated with a fountain. Zinneke is a nickname chosen to represent a person from Brussels who was not born there.\n[…]\nIn June 2025, Manneken Pis was temporarily turned off to mark World Continence Week. This was part of an initiative by the Belgian charity PlasPraat vzw and the Dutch charity Bekkenbodem4all to raise awareness about incontinence, and to break down the stigma around people discussing the issue with medical professionals.\n[…]\nMedia related to Manneken Pis (Brussels) at Wikimedia Commons\n[…]\nIlotsacre.be - Manneken Pis: virtual visit, pictures and costumes\n[…]\nVisitOnWeb.com - Manneken Pis in 360 degrees\n[…]\nManneken Pis on BALaT - Belgian Art Links and Tools (KIK-IRPA, Brussels)"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Borobudur",
      "descricao": "Templo budista monumental do século nove, na ilha de Java."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Borobudur, enorme templo budista de pedra construído no século nove em forma de mandala, fica em que país?",
    "resposta": "Indonésia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Borobudur",
      "https://en.wikipedia.org/wiki/Borobudur"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Borobudur",
        "situacao": "ok",
        "texto": "Borobudur ou Barabudur (em indonésio: Candi Borobudur) é um templo budista maaiana situado na ilha de Java, Indonésia, no kabupaten (regência) de Magelang, Java Central. O edifício é frequentemente apontado como o maior templo budista e um dos mais importantes monumentos budistas do mundo. Desde 1991 que o sítio designado Conjunto de Borobudur, do qual fazem também parte os templos vizinhos de Men\n[…]\nConstruído no século IX d.C., durante o reinado da Dinastia Sailendra, o templo é de estilo budista javanês, o qual mistura elementos do culto indígena dos antepassados com o conceito budista do nirvana, apresentando também influências da arte do Império Gupta, que reflete as influências indianas na região. No entanto, há muitos aspetos na arquitetura do edifício e nas cenas representadas nos relevos que tornam Borobudur distintamente indonésio.\n[…]\nBorobudur possui o maior e mais completo conjunto de relevos budistas do mundo.\n[…]\nForam efetuados vários restauros de pequena monta, que não foram suficientes para uma proteção completa. Durante a Segunda Guerra Mundial e a Revolução Nacional da Indonésia, não houve restauros e o monumento foi ainda mais afetado pelo clima e pelos problemas de drenagem, o que fez com que o núcleo de terra do interior do templo se expandisse, fazendo pressão sobre a estrutura de pedra e inclinando as paredes. Na década de 1950 havia partes de Borobudur em sério risco de colapso.\n[…]\nBorobudur está construído como uma grande estupa única e, quando visto de cima, tem a forma de uma mandala do budismo tântrico, que representa simultaneamente a cosmologia budista e a natureza da mente. As fundações originais formam um quadrado com aproximadamente 118 metros de lado. Tem nove plataformas, dos quais as seis inferiores são quadradas e as três superiores são circulares. Na plataforma mais alta há 72 pequenas estupas em volta de uma grande estupa central."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Borobudur",
        "situacao": "ok",
        "texto": "Borobudur, also transcribed Barabudur (Indonesian: Candi Borobudur, Javanese: ꦕꦤ꧀ꦝꦶꦧꦫꦧꦸꦝꦸꦂ, romanized: Candhi Barabudhur), is a 9th-century Mahayana Buddhist temple in Magelang Regency, near the town of Muntilan, northwest of the city of Yogyakarta, in Central Java, Indonesia.\n[…]\nBuilt during the reign of the Sailendra dynasty, the temple design follows Javanese Buddhist architecture, which blends the Indonesian indigenous tradition of ancestor worship and the Buddhist concept of attaining nirvāṇa. The monument is a shrine to the Buddha and a place for Buddhist pilgrimage. Evidence suggests that Borobudur was constructed in the 8th century and subsequently abandoned following the 14th-century decline of Hindu kingdoms in Java and the Javanese conversion to Islam.\n[…]\nThe design of Borobudur took the form of a step pyramid. Previously, the prehistoric Austronesian megalithic culture in Indonesia had constructed several earth mounds and stone step pyramid structures called punden berundak as discovered in Pangguyangan site near Cisolok and in Cipari near Kuningan. The construction of stone pyramids is based on native beliefs that mountains and high places are the abode of ancestral spirits or hyangs.\n[…]\nToday, the actual-size replica of Borobudur Ship that had sailed from Indonesia to Africa in 2004 is displayed in the Samudra Raksa Museum, located a few hundred meters north of Borobudur.\n[…]\nThe monument has become one of the main tourism attraction in Indonesia, vital for generating local economy in the region surrounding the temple. The tourism sector of the city of Yogyakarta for example, flourishes partly because of its proximity to Borobudur and Prambanan temples.\n[…]\nCandi of Indonesia\n[…]\n360° virtual tour, Indonesian Directorate General of Buddhist Community Guidance"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Inhotim",
      "descricao": "Instituto Inhotim, museu de arte contemporânea e jardim botânico a céu aberto em Minas Gerais."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Inhotim, grande museu de arte contemporânea a céu aberto, cercado de jardins, fica em que município mineiro?",
    "resposta": "Brumadinho",
    "distratores": [
      "Ouro Preto",
      "Tiradentes",
      "Sabará"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Instituto_Inhotim",
      "https://en.wikipedia.org/wiki/Inhotim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Instituto_Inhotim",
        "situacao": "ok",
        "texto": "O Instituto Inhotim é a sede de um dos mais importantes acervos de arte contemporânea do Brasil e considerado o maior museu a céu aberto do mundo. Está localizado em Brumadinho (Minas Gerais), uma cidade com 38 mil habitantes, a 60 quilômetros de Belo Horizonte.\n[…]\nA instituição surgiu em 2004 para abrigar a coleção de Bernardo Paz, empresário da área de mineração e siderurgia, que foi casado com a artista plástica carioca Adriana Varejão, e há 20 anos começou a se desfazer de sua valiosa coleção de arte modernista, que incluía trabalhos de Portinari, Guignard e Di Cavalcanti, para formar o acervo de arte contemporânea que agora está no Inhotim.\n[…]\nEm 2014, o museu a céu aberto foi eleito, pelo site TripAdvisor, um dos 25 museus do mundo mais bem avaliados pelos usuários.\n[…]\nSegundo os moradores de Brumadinho, o local foi uma fazenda pertencente a uma empresa mineradora que, no século XIX, atuava na região e cujo responsável era um inglês, de nome Timothy – o \"Senhor Tim\", que, na linguagem local, acabou virando \"Nhô Tim\" ou \"Inhô Tim\".\n[…]\nNa década de 1980, o empresário Bernardo de Mello Paz decidiu transformar sua propriedade de quase mil hectares em um museu a céu aberto. Em 2002, foi fundado o Instituto Inhotim, instituição sem fins lucrativos.\n[…]\nAlém das 170 obras de arte em exposição, o museu conta com 98 bancos do designer Hugo França. O primeiro banco foi colocado no jardim em 1990, sob a sombra da árvore tamboril, um dos símbolos do parque. Os bancos são feitos de troncos e raízes de pequi-vinagreiro, árvore comum na mata atlântica, que são encontrados caídos ou mortos na floresta.\n[…]\nInstituto Inhotim no X\n[…]\nInstituto Inhotim no Facebook\n[…]\nInstituto Inhotim no Instagram\n[…]\nCanal de Instituto Inhotim no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Inhotim",
        "situacao": "ok",
        "texto": "The Inhotim Institute is a Brazilian contemporary art museum. It is one of the largest outdoor art centers in Latin America. It was founded by the former mining magnate Bernardo Paz in 2004 to house his personal art collection, but opened to the public a couple of years later. In 2014, the open-air museum was one of TripAdvisor's top 25 best-ranked museums in the world.\n[…]\nLocated in Brumadinho (Minas Gerais), just 60 km away from Belo Horizonte, the institute has a total area of 1,942.25 acres, mostly located in the biome of the Atlantic Forest. Of the total area, 1,087.26 acres are marked as preservation areas, of which 359 acres are part of the Reserva Particular do Patrimônio Natural RPPN, which makes it a natural heritage site. These geographic features made it possible for Inhotim to house a botanical garden, which has been developing since it was opened.\n[…]\nIn 2023, Inhotim closed an $80 million, ten-year sponsorship agreement with private mining company Vale.\n[…]\nInhotim Institute is the only place in Latin America that has the Carrion flower, a species native to Asia and famous for being the biggest flower in the world. It is also known for the strong odor it releases when blooming, which has given it the alternative name of \"corpse flower\". In Inhotim, it bloomed for the first time on December 15, 2010, and again on December 27, 2012. The flower is located in the \"Viveiro Educador\", in the Equatorial Greenhouse, and is open for visitation by the public.\n[…]\nIn 2008, Inhotim's status was changed from a private museum to a public institute, with an annual budget and a board of directors. Although the plan is for the place eventually to be self-funding, at the moment it is largely financed by Paz. Inhotim costs about $10 million to run a year, with about 15% of this coming from ticket receipts.\n[…]\nInhotim website"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Petra",
      "descricao": "Cidade antiga dos nabateus com fachadas monumentais escavadas em rocha rosada, no Oriente Médio."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Petra, cidade antiga com fachadas de templos esculpidas direto na rocha rosada, fica em que país?",
    "resposta": "Jordânia",
    "distratores": [
      "Egito",
      "Síria",
      "Arábia Saudita"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Petra",
      "https://en.wikipedia.org/wiki/Petra"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Petra",
        "situacao": "ok",
        "texto": "Petra (do grego πέτρα, petra; árabe: البتراء, Al-Bitrā/Al-Batrā), originalmente conhecida pelos nabateus como Raqmu, é uma cidade histórica e arqueológica localizada no sul da Jordânia. A cidade é famosa por sua arquitetura esculpida em rocha e por seu sistema de canalização de água. Outro nome para Petra é Cidade Rosa, devido à cor das pedras do local.\n[…]\nEstabelecido possivelmente já em 312 a.C. como a capital dos árabes nabateus, é um símbolo jordaniano, assim como a atração turística a mais visitada do país. Os nabateus eram árabes nômades que aproveitaram a proximidade de Petra com as rotas comerciais regionais para estabelecê-la como um importante centro comercial.\n[…]\nA cidade de Petra era denominada Sela em edomita, nome que significa \"pedra\", \"penhasco\" ou \"rocha\" nessa língua; o nome grego πέτρα - Pétra e latino Petra - pedra, penhasco, é a tradução da palavra edomita. O nome árabe البتراء, Al-Bitrā ou Al-Batrā  é a arabização do seu nome grego e latino.\n[…]\nUm bispado instalou-se na cidade durante esse período, utilizando como catedral um templo afastado da cidade, que ficou conhecido como o Monastério Al-Deir. Sob o domínio de Constantino, Petra passou por um período mais próspero até o ano de 363, quando um terremoto destruiu quase metade da cidade, o terremoto na Galileia em 363 [en]. Contudo a cidade não desapareceu.\n[…]\nA 6 de dezembro de 1985, Petra foi reconhecida como Patrimônio da Humanidade pela UNESCO. Em 2004, o governo jordaniano estabeleceu um contrato com uma empresa inglesa para construir uma autoestrada que levasse a Petra tanto estudiosos como turistas. A 7 de julho de 2007, foi eleita em Lisboa, no Estádio da Luz uma das Novas sete maravilhas do mundo.\n[…]\nHistória da Jordânia\n[…]\n«Petra completa (diretório web)». www.isidore-of-seville.com\n[…]\n«Fotos e explicações geológicas das rochas de Petra». www.pa-chouvy.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Petra",
        "situacao": "ok",
        "texto": "Petra (Arabic: ٱلْبَتْراء, romanized: al-Batrāʾ; Ancient Greek: Πέτρα, lit. 'Rock'), originally known to its inhabitants as Raqmu (Nabataean Aramaic: 𐢛𐢚𐢒‎ or 𐢛𐢚𐢓𐢈‎, *Raqēmō), is an ancient city and archaeological site in southern Jordan. Famous for its rock-cut architecture and water conduit systems, Petra is also called the \"Rose City\" because of the colour of the sandstone from which it is carve\n[…]\n2006–2010 Preservation and consolidation of the Wall Paintings in Siq al Barid by the Petra National Trust in cooperation with the Department of Antiquities of Jordan and the Courtauld Institute of Art (London).\n[…]\nPetra is central to Netflix's first Arabic original series Jinn, which is a young adult supernatural drama about the djinn in the ancient city of Petra. They must try and stop the demons from destroying the world. The show is shot in Jordan and has five episodes.\n[…]\nA part of the Zionist Youth movement was hikes across the Land of Israel. These often involved cross-border incursions into Syria and Jordan, reportedly pioneered by Meir Har-Zion. Petra was a popular, often deadly, destination. In 1958 Haim Hefer wrote the lyrics for a ballad called HaSela haAdom (\"The Red Rock\") about one such trip ended in death.\n[…]\nRidge Church – Ruined church in Petra, Jordan\n[…]\nParadise, T. R. (2005). \"Weathering of sandstone architecture in Petra, Jordan: influences and rates\" in GSA Special Paper 390: Stone Decay in the Architectural Environment: 39–49.\n[…]\nParadise, T. R. and Angel, C. C. (2015). Nabataean Architecture and the Sun: A landmark discovery using GIS in Petra, Jordan. ArcUser Journal, Winter 2015: 16-19pp.\n[…]\n\"The Zamani Project, Petra, Jordan (مشروع زماني، البترا) - MaDiH (مديح)\". maDIH. Archived from the original on 2020-07-12. Retrieved 2020-07-09.\n[…]\nSpecial Issue on Petra and Nabatean Culture, Jordan Journal for History and Archaeology, 2020 Archived 2022-12-02 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Edifício Copan",
      "descricao": "Edifício residencial sinuoso projetado por Oscar Niemeyer no centro de São Paulo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade brasileira fica o Edifício Copan, prédio residencial em forma de onda projetado por Oscar Niemeyer?",
    "resposta": "São Paulo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Edif%C3%ADcio_Copan",
      "https://en.wikipedia.org/wiki/Edif%C3%ADcio_Copan"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Edif%C3%ADcio_Copan",
        "situacao": "ok",
        "texto": "Edifício Copan, ou apenas Copan, é um dos mais importantes e emblemáticos edifícios da cidade de São Paulo, localizado no número 200 da Avenida Ipiranga, no centro da cidade, e foi inaugurado em 1966. É um dos símbolos da arquitetura moderna brasileira, concebido pelo arquiteto Oscar Niemeyer com projeto estrutural do engenheiro Joaquim Cardozo, visando às comemorações do Quarto Centenário da cida\n[…]\nSão Paulo também preparava-se para ser considerada uma grande metrópole e, desse modo, precisaria de elementos para representar sua grandiosidade de alguma forma. O Edifício Copan, com emblemático e diferenciado projeto, exerceria bem esse papel, sendo símbolo da arquitetura moderna brasileira e do desenvolvimento econômico da capital paulista.\n[…]\nO Copan foi um dos grandes projetos para São Paulo apresentados por Oscar Niemeyer em 1951, encomendado para o IV Centenário da cidade (que viria a ser comemorado em 1954). A ideia era inspirada no Rockefeller Center, de Nova Iorque, condomínio que unia um grande centro comercial e de lazer a residências.\n[…]\nNiemeyer relaciona a obra na autobiografia, apesar da insatisfação quanto ao Copan, cuja execução entregou a Carlos Lemos ao ver o edifício residencial apenas no terceiro piso durante as festas dos quatrocentos anos, e também porque estava a caminho de Brasília. O edifício Copan seria durante as décadas de 1950, 1960 e 1970 a imagem da \"São Paulo moderna\".\n[…]\nO edifício Copan, como um símbolo da cidade de São Paulo é um marco da arquitetura modernista no Brasil. É a maior estrutura de concreto armado do país, com 115 metros de altura e 120 mil metros de área construída, bem como o maior edifício residencial do planeta. Com a utilização da liberdade formal, leveza, materiais curvilíneos, o modernismo deixa de seguir padrões europeus e norte americanos e passa a expressar sua própria cultura.\n[…]\nLista de arranha-céus da cidade de São Paulo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Edif%C3%ADcio_Copan",
        "situacao": "ok",
        "texto": "The Edifício Copan (Copan Building), or just Copan, is one of the most important and emblematic buildings in the city of São Paulo, located at number 200 Avenida Ipiranga, in the city center, and was inaugurated in 1966. It is one of the symbols of modern Brazilian architecture, designed by architect Oscar Niemeyer with structural design by engineer Joaquim Cardozo, aiming to celebrate the Fourth \n[…]\nThe building was designed by Oscar Niemeyer's office in São Paulo; Niemeyer was personally responsible for the building's famous sinuous façade. The idea was a building open to a mixed cross-section of Brazilian society. The original project envisioned two buildings, the other being a hotel, but in the end only the residential building was built.\n[…]\nThe Copan Building has inspired writers, filmmakers, photographers, and other artists from all over the world. A short story collection titled Arca sem Noé - Histórias do Edifício Copan (\"Ark without Noah - Stories from the Copan Building\"), by Brazilian author Regina Rheda, was published in Portuguese in 1994 and won a 1995 Jabuti prize in Brazil.\n[…]\nThe Copan Building appeared on the second episode of The Amazing Race 9 and was the site of a task in which contestants had to run up one of the building's fire escapes and rappel down an exterior wall.\n[…]\nList of Oscar Niemeyer works\n[…]\n\"Stories from the Copan Building\" in FIRST WORLD THIRD CLASS AND OTHER TALES OF THE GLOBAL MIX, by Regina Rheda. Austin: University of Texas Press, 2005.\n[…]\nArca sem Noé - Histórias do Edifício Copan, by Regina Rheda. Second edition. Rio: Record, 2010. Short stories in Portuguese.\n[…]\nEdifício Copan Administration's Web site (in Portuguese)\n[…]\nArca sem Noé - Histórias do Edifício Copan by Regina Rheda (in Portuguese, 1st Edition in the Internet Archive."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua de Jesus Cristo de braços abertos no alto do morro do Corcovado, no Rio de Janeiro, inaugurada em 1931."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escultor francês criou a estátua do Cristo Redentor, inaugurada em 1931 no alto do Corcovado?",
    "resposta": "Paul Landowski",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cristo_Redentor",
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nA ideia de construir uma grande estátua no alto do Corcovado foi sugerida pela primeira vez em meados do século XIX, mas foi o Círculo Católico do Rio de Janeiro que conseguiu as doações necessárias para colocar a ideia em prática no início do século XX. O monumento foi construído na França a partir de 1922 através de uma colaboração entre os brasileiros Heitor da Silva Costa e Carlos Oswald, os franceses Paul Landowski e Albert Caquot e o romeno Gheorghe Leonida.\n[…]\nA estátua do Cristo Redentor de braços abertos, um símbolo de paz, foi a escolhida. O engenheiro local Heitor da Silva Costa projetou a estátua, que foi esculpida por Paul Landowski, um escultor franco-polonês.\n[…]\nTornando-se famoso na França como retratista, ele foi incluído por Paul Landowski na equipe que começou a trabalhar no Cristo Redentor em 1922. Gheorghe Leonida contribuiu retratando o rosto de Jesus Cristo na estátua, fato que o tornou famoso.\n[…]\nO monumento foi inaugurado em 12 de outubro de 1931.\n[…]\nOs direitos comerciais da estátua foram objetos de contenda pela família do escultor Paul Maximilian Landowski quando uma joalheria foi autorizada pela Arquidiocese de São Sebastião do Rio de Janeiro, que administra o monumento, a comercializar produtos que retratavam o Cristo Redentor. A família de Landowski moveu ação reivindicando direitos autorais sobre o uso da imagem do Cristo, mas a Justiça negou o pedido.\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube\n[…]\n«Trem do Corcovado»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nConstructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other.\n[…]\nLocal engineer Heitor da Silva Costa and artist Carlos Oswald designed the statue. French sculptor Paul Landowski created the work.\n[…]\nIn 1922, Landowski commissioned fellow Parisian Romanian sculptor Gheorghe Leonida, who studied sculpture at the Fine Arts Conservatory in Bucharest and in Italy. A group of engineers and technicians studied Landowski's submissions, and they felt building the structure out of reinforced concrete (designed by Albert Caquot) instead of steel was more suitable for the cross-shaped statue. The concrete making up the base was supplied from Limhamn, Sweden.\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nCristo Rey on the Cerro del Cubilete in Guanajuato, inspired by Rio's Christ the Redeemer (23 m, 75 ft)\n[…]\nCristo Rei (Christ the King) in Almada (28 m, 92 ft)\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham.\n[…]\nSanctuary of Christ the Redeemer at Google Cultural Institute"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua de Jesus Cristo de braços abertos no alto do morro do Corcovado, no Rio de Janeiro, inaugurada em 1931."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Por fora, o Cristo Redentor é revestido por milhares de pequenas peças triangulares de que pedra, a mesma usada por Aleijadinho?",
    "resposta": "Pedra-sabão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
      "https://pt.wikipedia.org/wiki/Cristo_Redentor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nChrist the Redeemer of the Andes\n[…]\nChrist the Redeemer in Rio Verde, Goiás\n[…]\nChrist of Havana in Havana, inspired by Christ the Redeemer (20 m, 66 ft)\n[…]\nCristo Redentor, Puerto Plata\n[…]\nImitation statue of Christ the Redeemer at Nellore, state of Andhra Pradesh\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nChrist the Redeemer of Malacca, on the Portuguese Settlement Square in Melaka (20 ft, 6.1 m)\n[…]\nCristo Rey on the Cerro del Cubilete in Guanajuato, inspired by Rio's Christ the Redeemer (23 m, 75 ft)\n[…]\nCristo Redentor in Barranca Province, Lima Region, Peru\n[…]\nCristo Rei (Christ the King) in Almada (28 m, 92 ft)\n[…]\nSagrat Cor de Jesus (Sacred Heart of Jesus), Ibiza, inspired by Christ the Redeemer (23 m, 75 ft)\n[…]\nChrist of the Ozarks near Eureka Springs, Arkansas, inspired by Rio's Christ the Redeemer (20 m, 66 ft)\n[…]\nChrist of the Ohio in Troy, Indiana\n[…]\nChrist of Vũng Tàu in (32 m, 105 ft)\n[…]\nChrist of the Abyss in various underwater locations\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nGiumbelli, Emerson & Bosisio, Izabella (2010). \"A Política de um Monumento: as Muitas Imagens do Cristo Redentor\". Debates do NER (in Portuguese). 2 (18): 173–192. doi:10.22456/1982-8136.17638. hdl:10183/187720. ISSN 1982-8136.\n[…]\nCorcovado Train\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham.\n[…]\nSanctuary of Christ the Redeemer at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nUm grupo de engenheiros e técnicos estudou as apresentações de Landowski e tomou a decisão de construir a estrutura em concreto armado (projetado por Albert Caquot) em vez de aço, mais adequado para uma estátua em forma de cruz. As camadas exteriores são feitas de pedra-sabão, escolhida por suas qualidades duradouras e facilidade de uso. A construção durou nove anos (entre 1922 e 1931) e custou o equivalente a 250 mil dólares (ou 3,3 milhões de dólares em valores de 2014).\n[…]\nEm 2003, mais transformações na estátua e em seus arredores foram realizadas, quando um conjunto de escadas rolantes, passarelas e elevadores foram instalados para facilitar o acesso à plataforma em torno da estátua. Em 2010, uma restauração maciça da estátua foi realizada. O monumento foi lavado, a argamassa e pedra-sabão que cobrem a estátua foram substituídos, a estrutura interna de ferro foi restaurada e a estátua tornou-se à prova d'água.\n[…]\nA estátua foi atingida por um raio durante uma violenta tempestade em 10 de fevereiro de 2008 e sofreu alguns danos nos dedos, cabeça e sobrancelhas. Um esforço de restauração foi posto em prática pelo governo do estado do Rio de Janeiro para substituir algumas das camadas de pedra-sabão exteriores e reparar os para-raios instalados na estátua. O monumento foi danificado novamente por um raio em 17 de janeiro de 2014, quando um dedo na mão direita foi destruído.\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube\n[…]\n«Trem do Corcovado»"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Museu de Arte de São Paulo",
      "descricao": "Museu de arte na Avenida Paulista, cuja sede, suspensa sobre um grande vão livre, foi inaugurada em 1968."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que arquiteta nascida na Itália projetou o prédio do MASP, suspenso sobre um grande vão livre na Avenida Paulista?",
    "resposta": "Lina Bo Bardi",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Museu_de_Arte_de_S%C3%A3o_Paulo",
      "https://pt.wikipedia.org/wiki/Lina_Bo_Bardi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_de_Arte_de_S%C3%A3o_Paulo",
        "situacao": "ok",
        "texto": "Museu de Arte de São Paulo Assis Chateaubriand (mais conhecido pelo acrônimo MASP) é um museu de arte particular e sem fins lucrativos brasileiro fundado em 1947 pelo empresário e jornalista Assis Chateaubriand e localizado na cidade de São Paulo. É considerado um dos centros culturais mais importantes do Brasil e um dos museus mais visitado do país e do mundo, sendo frequentemente listado entre o\n[…]\nPietro Maria Bardi, galerista, colecionador, jornalista e crítico de arte italiano, havia viajado ao Rio de Janeiro na companhia de sua esposa, a arquiteta Lina Bo, para apresentar a Exposição de Pintura Italiana Antiga no Ministério da Educação e Saúde, organizada pelo Studio d'Arte Palma, dirigido por Bardi em Roma. Durante um almoço em Copacabana, no verão de 1946, Chateaubriand o convidou para auxiliar a criar e a dirigir um \"Museu de Arte Antiga e Moderna\" no país.\n[…]\nPrimeiro edifício do MASP na Avenida Paulista, seu nome homenageia a arquiteta italiana Lina Bo Bardi, responsável pelo projeto. Foi erguido pela Prefeitura de São Paulo e inaugurado em 1968, com a presença da soberana britânica, a rainha Isabel II.\n[…]\nA esplanada sob o edifício Lina Bo Bardi, conhecida como “vão livre”, foi concebida para se tornar uma praça de uso da população. Considerado uma obra-prima da arquitetura e um dos espaços livres mais importantes de São Paulo, o belvedere foi concebido pela arquiteta Lina Bo Bardi em 1958, durante a realização do projeto inicial de sede do Museu de Arte de São Paulo Assis Chateaubriand.\n[…]\nDurante a gestão de Martins, também foi iniciado um projeto de expansão e modernização da infraestrutura, que adicionará 7 680m² à área do museu. Foi iniciada a restauração do prédio Lina Bo Bardi, incluindo a arquitetura original, áreas de acervo, salas expositivas, espaços administrativos, troca do sistema de ar condicionado e iluminação, assim como a reforma do sistema de segurança."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lina_Bo_Bardi",
        "situacao": "ok",
        "texto": "Achillina Bo, mais conhecida como Lina Bo Bardi, (Roma, 5 de dezembro de 1914 – São Paulo, 20 de março de 1992) foi uma arquiteta modernista ítalo-brasileira. Naturalizada no Brasil após a Segunda Guerra Mundial, ela se tornou uma das mais importantes arquitetas do país, conhecida por projetos como o complexo cultural Sesc Pompeia, em São Paulo, inaugurado em 1982, e o Museu de Arte de São Paulo (\n[…]\nOs Bardi tornam-se personagens constantes na vida intelectual do país, relacionando-se com personalidades diversas da cultura brasileira. Tendo conhecido Assis Chateaubriand neste período, Lina aceita o pedido do projeto da sede, um museu sugerido pelo jornalista. No final dos anos 1950, aceitando um convite de Diógenes Rebouças, vai para Salvador proferir uma série de palestras.\n[…]\nCasa de Vidro / Instituto Lina Bo e Pietro Maria Bardi, São Paulo, 1951 - originalmente a residência do casal e hoje sede do Instituto idealizado por eles;\n[…]\nBARDI, Lina Bo. Lina Bo Bardi. Instituto Lina Bo e P.M.Bardi. Organizador: Marcelo Carvalho Ferraz. 1993. São Paulo.\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi. O que eu queria era ter história' (biografia em português). 2021. São Paulo: Companhia das Letras.\n[…]\nLIMA, Zeuler R. M. de A. La dea stanca. Vita di Lina Bo Bardi (biografia em italiano). 2021. Monza/Milão: Johan & Levi Editore.\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi dibuixa (catálogo de exposição). 2019. Barcelona: Fondació Joan Miro.\n[…]\nOLIVEIRA, Olivia de. Lina Bo Bardi: Obra Construída. Built Work. Fotografias Nelson Kon. 2014. Editora Gustavo Gili Brasil\n[…]\nOLIVEIRA, Olívia de. Lina Bo Bardi: sutis substâncias da arquitetura. 2006. Romano Guerra Editora, São Paulo. Editoral Gustavo Gili S.A., Barcelona.\n[…]\nRUBINO, Silvana (org.); GRINOVER, Marina (org.); Lina por escrito. Textos escolhidos de Lina Bo Bardi. Coleção Face Norte, volume 13, Cosac Naify, São Paulo; 1ª edição, 2009.\n[…]\n«Biografia - Lina Bo Bardi»"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Museu de Arte de São Paulo",
      "descricao": "Museu de arte na Avenida Paulista, cuja sede, suspensa sobre um grande vão livre, foi inaugurada em 1968."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que rainha estrangeira esteve na inauguração da sede do MASP na Avenida Paulista, em 1968, e inaugurou a Ópera de Sydney, em 1973?",
    "resposta": "Elizabeth II",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Museu_de_Arte_de_S%C3%A3o_Paulo",
      "https://en.wikipedia.org/wiki/Sydney_Opera_House"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_de_Arte_de_S%C3%A3o_Paulo",
        "situacao": "ok",
        "texto": "Museu de Arte de São Paulo Assis Chateaubriand (mais conhecido pelo acrônimo MASP) é um museu de arte particular e sem fins lucrativos brasileiro fundado em 1947 pelo empresário e jornalista Assis Chateaubriand e localizado na cidade de São Paulo. É considerado um dos centros culturais mais importantes do Brasil e um dos museus mais visitado do país e do mundo, sendo frequentemente listado entre o\n[…]\nO edifício, projetado em 1958, levou dez anos para ser concluído. As obras se estenderam ao longo dos mandatos de Ademar de Barros e Prestes Maia, sendo somente finalizadas durante a gestão de Faria Lima. A nova sede do MASP foi finalmente inaugurada em 8 de novembro de 1968, na presença do príncipe Filipe e da rainha  Elizabeth II, da Inglaterra, a quem coube o discurso de inauguração.\n[…]\nPrimeiro edifício do MASP na Avenida Paulista, seu nome homenageia a arquiteta italiana Lina Bo Bardi, responsável pelo projeto. Foi erguido pela Prefeitura de São Paulo e inaugurado em 1968, com a presença da soberana britânica, a rainha Isabel II.\n[…]\nA esplanada sob o edifício Lina Bo Bardi, conhecida como “vão livre”, foi concebida para se tornar uma praça de uso da população. Considerado uma obra-prima da arquitetura e um dos espaços livres mais importantes de São Paulo, o belvedere foi concebido pela arquiteta Lina Bo Bardi em 1958, durante a realização do projeto inicial de sede do Museu de Arte de São Paulo Assis Chateaubriand.\n[…]\nO uso cultural do espaço remonta ao início da história do museu. Em 1969, ano de inauguração do Museu de Arte de São Paulo (MASP) na Avenida Paulista, foi realizada no vão livre a mostra Playgrounds, exposição individual do artista Nelson Leirner que incluiu uma série de obras participativas dispostas no local, proposta que foi retomada pelo museu em 2016.\n[…]\nMuseu de Arte de São Paulo no Google Sketchup\n[…]\nMuseu de Arte de São Paulo no Google Arts & Culture"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
        "situacao": "ok",
        "texto": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture.\n[…]\nDesigned by Danish architect Jørn Utzon and completed by an Australian architectural team headed by Peter Hall, the building was formally opened by Queen Elizabeth II on 20 October 1973, 16 years after Utzon's 1957 selection as winner of an international design competition. The Government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction.\n[…]\nThe layout of the interiors was changed, and the stage machinery, already designed and fitted inside the major hall, was pulled out and largely thrown away, as detailed in the 1968 BBC TV documentary Autopsy on a Dream, which \"chronicles the full spectrum of controversy surrounding the construction of the Sydney Opera House\".\n[…]\nIn 1965 Utzon was working closely with Ralph Symonds, a manufacturer of plywood based in Sydney and highly regarded by many, despite an Arup engineer warning that Ralph Symonds's \"knowledge of the design stresses of plywood was extremely sketchy\" and that the technical advice was \"elementary to say the least and completely useless for our purposes.\" Australian architecture critic Elizabeth Farrelly has referred to Ove Arup's project engineer Michael Lewis as having \"other agendas\".\n[…]\nThe Sydney Opera House was formally opened by Queen Elizabeth II, on 20 October 1973. A large crowd attended. The opening was televised and included fireworks and a performance of Beethoven's Symphony No. 9.\n[…]\nList of official openings by Elizabeth II in Australia"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Monumento às Bandeiras",
      "descricao": "Grande escultura de granito de Victor Brecheret, junto ao Parque Ibirapuera, em São Paulo, que homenageia as bandeiras."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escultor, que expôs na Semana de Arte Moderna de 1922, criou o Monumento às Bandeiras, de granito, junto ao Parque Ibirapuera?",
    "resposta": "Victor Brecheret",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monumento_%C3%A0s_Bandeiras",
      "https://pt.wikipedia.org/wiki/Victor_Brecheret"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monumento_%C3%A0s_Bandeiras",
        "situacao": "ok",
        "texto": "O Monumento às Bandeiras é uma obra em homenagem aos Bandeirantes, que exploraram os sertões durante os séculos XVII e XVIII. Foi inaugurada em 25 de janeiro de 1953, fazendo parte das comemorações do IV Centenário da cidade de São Paulo. O Monumento está localizado no Parque do Ibirapuera, na área que compreende a Praça Armando de Salles Oliveira.\n[…]\nO Monumento às Bandeiras, do escultor Victor Brecheret, começou a ser desenhado ainda em 1920, quando o artista tinha apenas 26 anos de idade. Por conta de uma série de questões políticas do país, a obra só foi concretizada 33 anos depois, às vésperas do IV Centenário da capital paulista de 1954. Já com 58 anos, Victor Brecheret não quis esperar o ano seguinte e finalizou a obra no ano de 1953.\n[…]\nO referido escultor da obra, Victor Brecheret, foi um dos integrantes da Semana de Arte Moderna de 1922, o que justifica a concepção do monumento característica do período que antecedeu a Semana de 22. O primeiro esboço do Monumento às Bandeiras data de 1920, quando Victor expôs pela primeira vez a maquete desse monumento na Casa Byington, um importante espaço de fomento a arte da cidade de São Paulo.\n[…]\nNa ocasião, uma série de homenagens estavam sendo planejadas para a comemoração da Independência, e a construção de um monumento em exaltação aos bandeirantes fez com que os modernistas se aproximassem de Victor Brecheret.\n[…]\nO Processo de Tombamento do Monumento às Bandeiras teve início no dia 8 de junho de 1984, trinta e um anos após o término da obra pelo escultor ítalo-brasileiro Victor Brecheret, 1953.\n[…]\nParque Ibirapuera\n[…]\nVictor Brecheret\n[…]\n«Monumento às Bandeiras, Monumentos de São Paulo.»\n[…]\n«O Monumento é uma atração do Parque Ibirapuera, vide informações sobre as atrações do Parque.»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Victor_Brecheret",
        "situacao": "ok",
        "texto": "Victor Brecheret, nascido Vittorio Breheret (Farnese, 15 de dezembro de 1894 – São Paulo, 17 de dezembro de 1955), foi um escultor ítalo-brasileiro, considerado um dos mais importantes do Brasil. Foi o responsável pela introdução do modernismo na cultura e escultura brasileira. Apesar de ser um dos principais artistas da vanguarda, Brecheret nunca abandonou sua formação artística clássica, ligada \n[…]\nA jovem cuidou do escultor e aquele foi o início da relação que duraria quinze anos — tempo de estada de Victor na França. Passou a estar presente em todos os momentos e os amigos do artista se referiam a ela, em suas cartas, como a \"noiva de Brecheret\".\n[…]\nAo longo de sua vida, Victor Brecheret passou por diferentes fases artísticas. Começando com a clássica figuração, se encaminhou para a abstração – a partir de processos de simplificação e transfiguração – e posteriormente a uma imagética da cultura indígena brasileira. Sua base artística foi construída entre Europa e Brasil, bem como sua carreira de escultor.\n[…]\nBrecheret viveu uma segunda fase parisiense. Houve o fim da bolsa do Pensionato Artístico e o escultor parecia ter se afirmado na Escola de Paris e amadurecido em relação à sua arte. Após a crise de 29, o trabalho de Victor viveu um momento de inquietações e buscas. Aproximou-se mais da arte abstrata, com referências a Constantin Brancusi e buscou um efeito maior de vitalidade e emoção nas obras, atentando-se a Henri Laurens e Jacques Lipchitz.\n[…]\nNa volta definitiva para o Brasil, Victor começou a se interessar por construir uma iconografia escultória brasileira, envolvendo as três raças. Seu interesse pela arte arcaica grega cresceu e, assim como Maillol — com quem ainda compartilhava ideias —, baseou-se nessa arte para fazer um modernismo clássico. Houve uma quebra da rigidez geométrica e o fim da segunda fase parisiense de sua arte.\n[…]\nInstituto Victor Brecheret"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Monumento às Bandeiras",
      "descricao": "Grande escultura de granito de Victor Brecheret, junto ao Parque Ibirapuera, em São Paulo, que homenageia as bandeiras."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por causa das figuras que fazem força para arrastar uma canoa, o Monumento às Bandeiras, em São Paulo, ganhou que apelido popular?",
    "resposta": "Empurra-empurra",
    "distratores": [
      "Puxa-puxa",
      "Cabo de guerra",
      "Vai e vem"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monumento_%C3%A0s_Bandeiras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monumento_%C3%A0s_Bandeiras",
        "situacao": "ok",
        "texto": "O Monumento às Bandeiras é uma obra em homenagem aos Bandeirantes, que exploraram os sertões durante os séculos XVII e XVIII. Foi inaugurada em 25 de janeiro de 1953, fazendo parte das comemorações do IV Centenário da cidade de São Paulo. O Monumento está localizado no Parque do Ibirapuera, na área que compreende a Praça Armando de Salles Oliveira.\n[…]\nAo longo desses anos, a obra foi tomando outras formas no imaginário da população paulista. O vigor dos bandeirantes como colonizadores, é interpretado como estando refletido na força produtiva do Estado de São Paulo no cenário nacional.\n[…]\nPublicada pela Pontifícia Universidade Católica de São Paulo, a Revista Eletrônica de História Social da Cidade – O monumento e a cidade, A obra de Brecheret na dinâmica urbana traz uma reflexão sobre a exaltação aos Bandeirantes paulistas na época da inauguração da obra: “Naquele contexto, em que a cidade experimentava um desenvolvimento econômico expressivo e transformações urbanas, o bandeirante foi celebrado como personagem chave do imaginário regional apto a reforçar as velhas tradições”.\n[…]\nUma lenda urbana muito conhecida a respeito do monumento, popularmente chamado de Empurra-empurra ou Deixa-Que-Eu-Empurro, refere-se ao fato da embarcação nunca sair do lugar, a despeito do contingente que supostamente a puxa. A \"resposta\" estaria no fato de que as figuras à frente da comitiva não estariam, realmente, tentando mover a canoa, pois as correias estão visivelmente frouxas, como se pode notar no detalhe da foto.\n[…]\nA única figura que realmente estaria esforçando-se é a última, a empurrar o barco.\n[…]\nO Processo de Tombamento do Monumento às Bandeiras teve início no dia 8 de junho de 1984, trinta e um anos após o término da obra pelo escultor ítalo-brasileiro Victor Brecheret, 1953.\n[…]\nObelisco de São Paulo\n[…]\n«Monumento às Bandeiras, Monumentos de São Paulo.»"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ópera de Sydney",
      "descricao": "Casa de espetáculos com coberturas em forma de cascas brancas, no porto de Sydney, na Austrália, inaugurada em 1973."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que arquiteto dinamarquês venceu o concurso para a Ópera de Sydney, mas abandonou a obra antes de vê-la pronta?",
    "resposta": "Jørn Utzon",
    "distratores": [
      "Arne Jacobsen",
      "Alvar Aalto",
      "Eero Saarinen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sydney_Opera_House",
      "https://en.wikipedia.org/wiki/J%C3%B8rn_Utzon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
        "situacao": "ok",
        "texto": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture.\n[…]\nIn the late 1990s, the Sydney Opera House Trust resumed communication with Utzon in an attempt to effect a reconciliation and to secure his involvement in future changes to the building. In 1999, he was appointed by the trust as a design consultant for future work.\n[…]\nAfter the resignation of Utzon, the Minister for Public Works, Davis Hughes, and the Government Architect, Ted Farmer, organised a team to bring the Sydney Opera House to completion. The architectural work was divided between three appointees who became the Hall, Todd, Littlemore partnership. David Littlemore would manage construction supervision, Lionel Todd contract documentation, while the crucial role of design became the responsibility of Peter Hall.\n[…]\nHall agreed to accept the role on the condition there was no possibility of Utzon returning. Even so, his appointment did not go down well with many of his fellow architects who considered that no one but Utzon should complete the Sydney Opera House. Upon Utzon's dismissal, a rally of protest had marched to Bennelong Point. A petition was also circulated, including in the Government Architects office.\n[…]\nRAIA Commemorative Award, Jørn Utzon – Sydney Opera House, 1992\n[…]\nCompetition drawings submitted by Jørn Utzon to the Opera House Committee\n[…]\n\"Sydney Opera House\". Dictionary of Sydney. Retrieved 8 October 2015. [CC-By-SA]. Includes 'Sydney Opera House' by Laila Ellmoos, 2008 and 'Utzon's Opera House' by Eoghan Lewis, 2014.\n[…]\nSydney Opera House at Google Cultural Institute"
      },
      {
        "url": "https://en.wikipedia.org/wiki/J%C3%B8rn_Utzon",
        "situacao": "ok",
        "texto": "Jørn Oberg Utzon (Danish: [ˈjɶɐ̯ˀn ˈut.sʌn]; 9 April 1918 – 29 November 2008) was a Danish architect. In 1957, he won an international design competition for his design of the Sydney Opera House in Australia. Utzon's revised design, which he completed in 1961, was the basis for the landmark, although it was not completed until 1973.\n[…]\nJørn Utzon and others, A survey of Utzon's work, some descriptions by Utzon, and the Sydney Opera House as finally contemplated, Zodiac 5, Milan 1959\n[…]\nJørn Utzon and others, Utzon's descriptions of the Sydney Opera House, the Silkeborg Museum and the Zurich Theatre. Also Giedion's Jørn Utzon and the Third Generation, Zodiac 14, Milan 1965\n[…]\nUtzon was bestowed an Honorary Fellowship of the American Institute of Architects (Hon. FAIA) in 1970 for his distinguished achievements as a foreign architect. On 17 May 1985, he was made an Honorary Companion of the Order of Australia (AC). He was given the Keys to the City of Sydney in 1998. He was involved in redesigning the Opera House, and in particular, the Reception Hall, beginning in 1999. In 2003, he received in his absence an honorary Doctor of Science degree in architecture (Hon.\n[…]\nFollowing Utzon's death in 2008, on 25 March 2009, a state memorial and reconciliation concert was held in the Concert Hall at Sydney Opera House.\n[…]\nDaryl Dellora: Jørn Utzon and the Sydney Opera House. Penguin, Melbourne 2013. ISBN 9780143570806\n[…]\nFrançoise Fromonot: Jørn Utzon, The Sydney Opera House. Corte Madera, California: Gingko Press, 1998. ISBN 3-927258-72-5\n[…]\nKatarina Stübe and Jan Utzon, Sydney Opera House: A Tribute to Jørn Utzon. Reveal Books, 2009. ISBN 978-0-9806123-0-1\n[…]\nUtzon Center\n[…]\nProfile at the Sydney Opera House\n[…]\nEoghan Lewis (2014). \"Utzon's Opera House\". Dictionary of Sydney. Dictionary of Sydney Trust. Retrieved 9 October 2015. [CC-By-SA]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_de_Sydney",
        "situacao": "ok",
        "texto": "A casa da Ópera de Sydney (em inglês Sydney Opera House), também conhecida como Teatro de Sydney, é um dos edifícios de espetáculo mais marcantes em nível mundial, e um dos símbolos da Austrália, localizada na cidade de Sydney.\n[…]\nA construção, projetada por Jørn Utzon, começou em 1959 e está localizada sobre a Baía de Sydney. Apesar de o arquiteto ter abandonado o projeto em 1966, o edifício foi inaugurado em 20 de outubro de 1973.\n[…]\nUtzon ganhou o concurso internacional de arquitetura para a Ópera de Sydney em 1957, aos 38 anos. Havia 232 candidatos e terá sido o arquitecto finlandês Eero Saarinen, que fazia parte do júri, a apoiar o seu projeto. Fez a obra com o engenheiro anglo-dinamarquês Ove Arup e o edifício demorou anos a ser construído (de 1956 a 1973). A polemica instalou-se e, em 1966, quando Jorn Utzon abandonou a direção da obra e a Austrália, para onde se tinha mudado com a sua família.\n[…]\nAlguns pormenores da obra, nomeadamente no seu interior, não foram acabados segundo os seus planos. Utzon nunca chegou a visitar o edifício, mesmo depois de se ter reconciliado com a Fundação da Ópera de Sydney nos anos 1990 e mais tarde o seu filho Jan, também arquitecto, ter feito a renovação do interior do edifício, aproximando-o mais daquilo que o pai tinha projetado.\n[…]\nDuek-Cohen, Elias, Utzon and the Sydney Opera House, Morgan Publications, Sydney, 1967-1998.\n[…]\n\"Opera House an architectural 'tragedy\"', ABC News online, 28-4-2005.\n[…]\nWatson, Anne (editor): \"Building a Masterpiece: The Sydney Opera House\", 2006, Lund Humphries, ISBN 0-85331-941-3, ISBN 978-0-85331-941-2\n[…]\nThe Sydney Opera House mapygon\n[…]\nSitio web de arquitetura em Sydney\n[…]\nWebcamda Ópera de Sydney",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Casa da Cascata",
      "descricao": "Residência construída nos anos 1930 sobre uma queda d'água na Pensilvânia, Estados Unidos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A Casa da Cascata, erguida nos anos trinta sobre uma queda d'água na Pensilvânia, é obra-prima de qual arquiteto americano?",
    "resposta": "Frank Lloyd Wright",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fallingwater",
      "https://pt.wikipedia.org/wiki/Casa_da_Cascata"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fallingwater",
        "situacao": "ok",
        "texto": "Fallingwater is a house museum in Stewart Township in the Laurel Highlands of southwestern Pennsylvania, United States. Designed by the architect Frank Lloyd Wright, it is built partly over a waterfall on the Bear Run stream. The three-story residence was developed as a weekend retreat for Edgar J. Kaufmann Sr., the owner of Kaufmann's Department Store in Pittsburgh, and his wife Liliane.\n[…]\nSeveral books have been written about Fallingwater, including Frank Lloyd Wright's Fallingwater (1978) by Donald Hoffmann, Fallingwater: A Frank Lloyd Wright Country House (1986) by Edgar Kaufmann Jr., Fallingwater: Frank Lloyd Wright's Romance with Nature (1996) by the WPC, and Fallingwater Rising (2001) by Franklin Toker. To celebrate the house's 75th anniversary, another book about its history was published in 2011.\n[…]\nFallingwater was deemed eligible for inclusion on UNESCO's World Heritage List in 2008, and the United States Department of the Interior nominated Fallingwater to the World Heritage List in 2015, alongside nine other buildings. UNESCO ultimately added eight properties, including Fallingwater, to the World Heritage List in July 2019 under the title \"The 20th-Century Architecture of Frank Lloyd Wright\".\n[…]\nHoffmann, Donald (1977). Frank Lloyd Wright's Fallingwater: The House and Its History (1st ed.). Dover Publications. ISBN 0-486-27430-6.\n[…]\nKaufmann, Edgar (1987). Fallingwater: A Frank Lloyd Wright Country House. WW Norton. ISBN 978-0-89659-662-7.\n[…]\nTafel, Edgar (1985). Years with Frank Lloyd Wright: Apprentice to Genius. Dover Publications. ISBN 978-0-486-14433-7.\n[…]\nToker, Franklin (2003). Fallingwater Rising: Frank Lloyd Wright, E. J. Kaufmann, and America's Most Extraordinary House. Knopf Doubleday Publishing Group. ISBN 978-0-307-42584-3.\n[…]\nStoller, Ezra (January 1, 2000). Frank Lloyd Wright's Fallingwater. New York: Springer Science & Business. ISBN 1-56898-203-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Casa_da_Cascata",
        "situacao": "ok",
        "texto": "A Casa da Cascata (em inglês:  Fallingwater) é um museu-casa localizado no Município de Stewart no estado da Pensilvânia, Estados Unidos. Foi projetada pelo arquiteto Frank Lloyd Wright e construída parcialmente sobre uma cascata no córrego de Bear Run. A residência foi desenvolvida como um retiro de fim de semana para a família de Edgar J. Kaufmann, o dono da loja de departamentos Kaufmann's.\n[…]\nFoi designada em maio de 1976 como um Marco Histórico Nacional nos Estados Unidos e em 2019 foi adicionada com sete outros edifícios no conjunto Arquitetura do Século XX de Frank Lloyd Wright como um Patrimônio Mundial.\n[…]\nPróximo estão a Área Natural de Bear Run ao norte, bem como o Parque Estadual de Ohiopyle e o Campo de Batalha Nacional do Forte Necessidade ao sul. A cidade mais próxima é Uniontown ao oeste. A Casa da Cascata é uma de quatro residências no sudoeste da Pensilvânia projetadas pelo arquiteto Frank Lloyd Wright. As outras são a Kentuck Knob aproximadamente onze quilômetros ao sudoeste, a Casa Duncan e a Casa Lindholm, ambas localizadas no Parque Polymath na comunidade de Acme.\n[…]\nWright foi premiado em 1940 com uma medalha de prata do Congresso Panamericano de Arquitetos pelo projeto da Casa da Cascata.\n[…]\nVários livros sobre a casa foram escritos, incluindo Fallingwater: A Frank Lloyd Wright Country House de 1986, escrito por Kaufmann Jr.. Fallingwater, livro editado por Waggoner, foi publicado pelo WPC em 2011 para marcar o aniversário de 75 anos da casa.\n[…]\nA Casa da Cascata tornou-se elegível para inclusão na lista de Patrimônios Mundiais da UNESCO em 2008, sendo nomeado como tal pelo Departamento do Interior dos Estados Unidos em 2015 junto com outros nove edifícios projetados por Wright. A UNESCO acabou adicionando oito prédios, incluindo a Casa da Cascata, em sua lista em julho de 2019 sob o conjunto \"Arquitetura do Século XX de Frank Lloyd Wright\"."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pirâmide do Louvre",
      "descricao": "Pirâmide de vidro e metal que serve de entrada principal do Museu do Louvre, em Paris, concluída no fim dos anos 1980."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Encomendada pelo presidente François Mitterrand, a pirâmide de vidro na entrada do Museu do Louvre foi projetada por que arquiteto sino-americano?",
    "resposta": "I. M. Pei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louvre_Pyramid",
      "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Louvre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louvre_Pyramid",
        "situacao": "ok",
        "texto": "The Louvre Pyramid (French: Pyramide du Louvre) is a large glass-and-metal entrance way and skylight designed by the Chinese-American architect I. M. Pei. The pyramid is in the main courtyard (Cour Napoléon) of the Louvre Palace in Paris, surrounded by three smaller pyramids of the same style which also serve as lightwells. A companion Inverted Pyramid also provides light to underground passageway\n[…]\nThe Grand Louvre project was announced in 1981 by François Mitterrand, the president of France. In 1983 the Chinese-American architect I. M. Pei was selected as its architect. The pyramid structure was initially designed by Pei in late 1983 and presented to the public in early 1984. Constructed entirely with glass segments and metal poles, it reaches a height of 21.6 metres (71 ft). Its square base has sides of 34 metres (112 ft) and a base surface area of 1,000 square metres (11,000 ft2).\n[…]\nThe project being megalomaniacal folly imposed by then-President François Mitterrand\n[…]\nChinese-American architect I.M. Pei being insufficiently familiar with the culture of France to be entrusted with the task of updating the treasured Parisian landmark.\n[…]\nThose criticizing the aesthetics said it was sacrilegious to tamper with the Louvre's majestic old French Renaissance architecture, and called the pyramid an anachronistic intrusion of an Egyptian death symbol in the middle of Paris. Meanwhile, political critics referred to the structure as Pharaoh François' Pyramid.\n[…]\nThe myth resurfaced in 2003, with the protagonist of the best-selling novel The Da Vinci Code saying: \"this pyramid, at President Mitterrand's explicit demand, had been constructed of exactly 666 panes of glass — a bizarre request that had always been a hot topic among conspiracy buffs who claimed 666 was the number of Satan.\" In fact, according to Pei's office, Mitterrand never specified the number of panes.\n[…]\nLouvre"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Louvre",
        "situacao": "ok",
        "texto": "A Pirâmide do Louvre é uma estrutura de forma piramidal, construída em vidro e metal, rodeada por três pirâmides menores, no pátio principal do Palácio do Louvre em Paris, França. A Grande Pirâmide serve de entrada principal do Museu do Louvre. Concluída em 1989, tornou-se um ponto de referência para a cidade de Paris.\n[…]\nEncomendado pelo então Presidente Francês François Mitterrand, em 1984, foi projetado pelo arquiteto I. M. Pei, que foi também responsável pela concepção do Museu Miho, no Japão, entre outros. A estrutura, que foi construído inteiramente com segmentos de vidro, atinge uma altura de 20,6 m, a sua base quadrada tem cerca de 35 m de lado. É constituída por 603 peças de losangos e 70 segmentos triangulares de vidro.\n[…]\nA construção da pirâmide provocou uma considerável controvérsia, porque muitas pessoas sentiram que o edifício futurista, parecia completamente fora de lugar em frente ao Museu do Louvre, com sua arquitetura clássica. Alguns detratores atribuíram-lhe como um complexo \"faraônico\" de Mitterrand. Outros, vieram para apreciar a justaposição de estilos e contrastantes de arquitetura, como uma fusão bem sucedida do velho e o novo, do clássico e o ultramoderno.\n[…]\nO mito ressurgiu em 2003, quando Dan Brown incorporou em seu best-seller O Código Da Vinci. Aqui, o protagonista reflete que \"esta pirâmide, a exigência expressa do presidente Mitterrand, tinha sido construído exatamente com 666 painéis de vidro, um pedido bizarro, que tinha sido sempre um tema quente entre os amantes da conspiração que alegaram que o 666, fosse o número de Satanás\".\n[…]\nO museu investirá 53,5 milhões de euros num projeto do estúdio de arquitetura Search e foi aprovado pelo próprio Pei - que aos 97 anos não pode viajar a Paris.\n[…]\nPalais du Louvre\n[…]\nMuseu do Louvre\n[…]\n«Photographs of the Louvre Pyramids»"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Catedral de São Basílio",
      "descricao": "Igreja de cúpulas coloridas em forma de bulbo na Praça Vermelha, em Moscou, construída no século dezesseis."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que czar mandou erguer a Catedral de São Basílio, na Praça Vermelha, para celebrar a conquista da cidade de Kazan?",
    "resposta": "Ivan, o Terrível",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral",
      "https://pt.wikipedia.org/wiki/Catedral_de_S%C3%A3o_Bas%C3%ADlio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Basil%27s_Cathedral",
        "situacao": "ok",
        "texto": "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), commonly known as Saint Basil's Cathedral, is a Russian Orthodox church on Red Square in the historic centre of Moscow. It is one of the most popular cultural symbols of Russia. The building, now a museum, is officially known as the Cathedral of the Intercession of the Most Holy Theotoko\n[…]\nTsar Ivan IV marked every victory of the Russo-Kazan War by erecting a wooden memorial church next to the walls of Trinity Church; by the end of his Astrakhan campaign, it was shrouded within a cluster of seven wooden churches. According to the report in Nikon's Chronicle, in the autumn of 1554 Ivan ordered the construction of the wooden Church of Intercession on the same site, \"on the moat\".\n[…]\nOn the Trinity on the Moat in Moscow.In the same year, through the will of czar and lord and grand prince Ivan began making the pledged church, as he promised for the capture of Kazan: Trinity and Intercession and seven sanctuaries, also called \"on the moat\". And the builder was Barma with company.\n[…]\nMany historians are convinced that it is a myth, as the architect later participated in the construction of the Cathedral of the Annunciation in Moscow as well as in building the walls and towers of the Kazan Kremlin. Postnik Yakovlev remained active at least throughout the 1560s. This myth likely originated with Jerome Horsey's account of Ivan III of Moscow having blinded the architect of the fortress of Ivangorod.\n[…]\nOn the day of its consecration the church itself became part of Orthodox thaumaturgy. According to the legend, its \"missing\" ninth church (more precisely a sanctuary) was \"miraculously found\" during a ceremony attended by Tsar Ivan IV, Metropolitan Makarius with the divine intervention of Saint Tikhon. Piskaryov's Chronist wrote in the second quarter of the 17th century:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_S%C3%A3o_Bas%C3%ADlio",
        "situacao": "ok",
        "texto": "Catedral de São Basílio (em russo:  Собор Василия Блаженногo/Sobor Vasiliya Blazhennogo), é uma catedral ortodoxa russa erguida na Praça Vermelha em Moscou, Rússia, entre 1555 e 1561. Construída sob a ordem de Ivã IV da Rússia, para comemorar a captura de Kazan e Astracã, marca o centro geométrico da cidade e o centro do seu crescimento, desde o século XIV. Foi o edifício mais alto de Moscou até a\n[…]\nA catedral tem operado como uma divisão do Museu Histórico do Estado desde 1928. Foi completamente secularizada em 1929 e, em 2010, continuou a ser uma propriedade federal da Federação Russa. A catedral é parte do Kremlin e da Praça Vermelha, Patrimônio Mundial da UNESCO desde 1990.\n[…]\nPertencente à Igreja Ortodoxa Russa, a catedral teve sua construção ordenada pelo Czar Ivan o Terrível para comemorar a conquista de Kazan, que realizou entre 1555 a 1561. Em 1588 o Czar Fiodor Ivanovich ordenou que se agregasse uma nova capela no lado leste da construção, sobre a tumba de São Basílio, o Bem-aventurado, santo por cujo nome foi chamada popularmente a catedral.\n[…]\nSão Basílio se encontra no extremo sudeste da Praça Vermelha, justamente à frente da Torre Spasskaya do Kremlin. Não sendo muito grande, consiste de 9 pequenas capelas construídas.\n[…]\nO conceito inicial era construir um grupo de capelas, cada uma dedicada a cada um dos santos em cujo dia o Czar ganhou uma batalha, mas a construção de uma torre central unifica estes espaços em uma só catedral. A lenda fala que o Czar Ivan deixou cego o arquitecto Postnik Yakovlev, para evitar que construísse uma construção mais magnífica para mais alguém.\n[…]\nA Catedral de São Basílio não deve ser confundida com o Kremlin de Moscovo, que está situado na Praça Vermelha, mesmo local onde a Catedral de São Basílio está situada.\n[…]\nPraça Vermelha\n[…]\n«Catedral de São Basílio». um artigo no âmbito do projeto \"Templos da Rússia\"\n[…]\nCatedral de São Basílio"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Exército de terracota",
      "descricao": "Milhares de estátuas de soldados e cavalos de barro enterradas junto ao túmulo do primeiro imperador da China, perto de Xian."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Os milhares de guerreiros de terracota de Xian foram feitos para guardar o túmulo de que imperador, o unificador da China?",
    "resposta": "Qin Shi Huang",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ex%C3%A9rcito_de_terracota",
      "https://en.wikipedia.org/wiki/Terracotta_Army"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ex%C3%A9rcito_de_terracota",
        "situacao": "ok",
        "texto": "Exército de terracota, Guerreiros de Xian ou ainda Exército do imperador Qin, é uma coleção de esculturas de terracota representando os exércitos de Qin Shi Huang, o primeiro imperador da China. É uma forma de arte funerária enterrada com o imperador em 210-209 a.C. e cuja finalidade era proteger o governante chinês em sua vida após a morte.\n[…]\nSeria protegido por um exército de soldados em terracota guardados nas proximidades, mas os restos de muitos artesãos e suas ferramentas foram encontrados, o que faz acreditar que tenham sido enterrados com o imperador para impedir que revelassem as riquezas ou as entradas aos salteadores.[carece de fontes]?\n[…]\nAs figuras de terracota foram encontradas em três diferentes trincheiras, e uma quarta foi encontrada vazia. Acredita-se que a trincheira maior, contendo mais de 6000 figuras de soldados, carruagens e cavalos, representavam a armada principal do primeiro imperador. A segunda trincheira continha cerca de 1400 figuras da cavalaria e infantaria, também com carros e cavalos, representava a guarda militar.\n[…]\nEscavações no sítio mostraram com grande precisão restos de um incêndio que queimou as estruturas de madeira que abrigavam o exército de terracota, como Sima Qian descreveu em seu livro, consequência de uma revolta liderada pelo general Xiang Yu menos de cinco anos após a morte do imperador. Ele disse que um dos atos do general Yu foi o saque da tumba e seu posterior incêndio.\n[…]\nOs guerreiros de Xian são hoje um fenomenal sítio arqueológico e um ícone do passado distante da China. O poderio do primeiro imperador Qin Shihuang  é evidente na massiva e monumental presença de seus soldados, eternamente prontos a proteger seu líder.[carece de fontes]?\n[…]\n(em inglês) Dillon, Michael(ed). \"China: A Cultural and Historical Dictionary,\" (Curzon Press, 1998): 196."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Terracotta_Army",
        "situacao": "ok",
        "texto": "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE in his mausoleum with the purpose of protecting him in his afterlife.\n[…]\nBetween 15 June and 17 September 2006 the exhibition entitled \"Los Guerreros de Terracota: Un Ejercito Inmortal\" (\"The Terracotta Warriors: An Immortal Army\"), composed of 73 objects, were displayed at the National Museum of Colombia in Bogotá.\n[…]\nA collection of 120 objects from the mausoleum and 12 terracotta warriors were displayed at the British Museum in London as its special exhibition \"The First Emperor: China's Terracotta Army\" from 13 September 2007 to April 2008. This exhibition made 2008 the British Museum's most successful year and made the British Museum the United Kingdom's top cultural attraction between 2007 and 2008. The exhibition brought the most visitors to the museum since the King Tutankhamun exhibition in 1972.\n[…]\nAn exhibition entitled 'The First Emperor – China's Entombed Warriors', presenting 120 artifacts was hosted at the Art Gallery of New South Wales, between 2 December 2010 and 13 March 2011. An exhibition entitled \"L'Empereur guerrier de Chine et son armée de terre cuite\" (\"The Warrior-Emperor of China and his terracotta army\"), featuring artifacts including statues from the mausoleum, was hosted by the Montreal Museum of Fine Arts from 11 February 2011 to 26 June 2011.\n[…]\nPortal, Jane (2007). The First Emperor: China's Terracotta Army. Cambridge: Harvard University Press. ISBN 978-0-674-02697-1.\n[…]\nPeople's Daily article on the Terracotta Army\n[…]\nEmperor's Ghost Army PBS Nova\n[…]\nChina's Terracotta Warriors Documentary produced by the PBS Series Secrets of the Dead"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Exército de terracota",
      "descricao": "Milhares de estátuas de soldados e cavalos de barro enterradas junto ao túmulo do primeiro imperador da China, perto de Xian."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Camponeses chineses que cavavam um poço encontraram por acaso o exército de terracota. Em que década do século vinte?",
    "resposta": "Década de 1970",
    "fonte": [
      "https://en.wikipedia.org/wiki/Terracotta_Army",
      "https://pt.wikipedia.org/wiki/Ex%C3%A9rcito_de_terracota"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Terracotta_Army",
        "situacao": "ok",
        "texto": "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE in his mausoleum with the purpose of protecting him in his afterlife.\n[…]\nShe said that \"the terracotta warriors may be inspired by Western culture, but were uniquely made by the Chinese,\" and many local elements also contributed to the creation of the Terracotta Army.\n[…]\nBetween 15 June and 17 September 2006 the exhibition entitled \"Los Guerreros de Terracota: Un Ejercito Inmortal\" (\"The Terracotta Warriors: An Immortal Army\"), composed of 73 objects, were displayed at the National Museum of Colombia in Bogotá.\n[…]\nIn Italy, from July 2008 to 16 November 2008, five of the warriors of the terracotta army were displayed in Turin at the Museum of Antiquities, and from 16 April 2010 to 5 September 2010 nine statues including officials, lancers and an archer were displayed at the Royal Palace in Milan at the exhibition entitled \"The Two Empires\".\n[…]\nSeveral Terracotta Army figures were on display, along with many other objects, in an exhibit entitled \"Age of Empires: Chinese Art of the Qin and Han Dynasties\" at The Metropolitan Museum of Art in New York City from 3 April 2017 to 16 July 2017.\n[…]\nPortal, Jane (2007). The First Emperor: China's Terracotta Army. Cambridge: Harvard University Press. ISBN 978-0-674-02697-1.\n[…]\nLedderose, Lothar (2000). \"A Magic Army for the Emperor\". Ten Thousand Things: Module and Mass Production in Chinese Art. The A.W. Mellon Lectures in the Fine Arts. Princeton, NJ: Princeton University Press. ISBN 978-0-691-00957-5. Archived from the original on 10 November 2013. Retrieved 15 September 2017.\n[…]\nPeople's Daily article on the Terracotta Army"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ex%C3%A9rcito_de_terracota",
        "situacao": "ok",
        "texto": "Exército de terracota, Guerreiros de Xian ou ainda Exército do imperador Qin, é uma coleção de esculturas de terracota representando os exércitos de Qin Shi Huang, o primeiro imperador da China. É uma forma de arte funerária enterrada com o imperador em 210-209 a.C. e cuja finalidade era proteger o governante chinês em sua vida após a morte.\n[…]\nOs soldados variam em altura de acordo com suas funções, sendo os generais os mais altos. As estátuas incluem guerreiros, carruagens e cavalos. Estimativas atuais são de que nos três poços que contêm o Exército de Terracota, havia mais de oito mil soldados, 130 carruagens com 520 cavalos e 150 soldados de cavalaria, a maioria dos quais ainda estão enterrados nas covas nas proximidades Mausoléu de Qin Shihuang‎.\n[…]\nOutras esculturas de terracota não-militares também foram encontradas em outros poços e incluem funcionários, acrobatas e músicos.\n[…]\nSeria protegido por um exército de soldados em terracota guardados nas proximidades, mas os restos de muitos artesãos e suas ferramentas foram encontrados, o que faz acreditar que tenham sido enterrados com o imperador para impedir que revelassem as riquezas ou as entradas aos salteadores.[carece de fontes]?\n[…]\nEscavações no sítio mostraram com grande precisão restos de um incêndio que queimou as estruturas de madeira que abrigavam o exército de terracota, como Sima Qian descreveu em seu livro, consequência de uma revolta liderada pelo general Xiang Yu menos de cinco anos após a morte do imperador. Ele disse que um dos atos do general Yu foi o saque da tumba e seu posterior incêndio.\n[…]\n(em inglês) Ledderose, Lothar. \"A Magic Army for the Emperor.\" from \"Ten Thousand Things : Module and Mass Production in Chinese Art\" ed. Lothar Ledderose, (Princeton UP, 2000): 51-73."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Basílica de São Pedro",
      "descricao": "Basílica renascentista no Vaticano, com grande cúpula, principal templo da Igreja Católica."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Já com mais de setenta anos, que artista renascentista foi nomeado arquiteto da Basílica de São Pedro e projetou sua enorme cúpula?",
    "resposta": "Michelangelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/St._Peter%27s_Basilica",
      "https://pt.wikipedia.org/wiki/Bas%C3%ADlica_de_S%C3%A3o_Pedro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/St._Peter%27s_Basilica",
        "situacao": "ok",
        "texto": "The Papal Basilica of Saint Peter in the Vatican (Italian: Basilica Papale di San Pietro in Vaticano), or simply St. Peter's Basilica (Latin: Basilica Sancti Petri; Italian: Basilica di San Pietro [baˈziːlika di sam ˈpjɛːtro]), is a church of the Italian Renaissance located in Vatican City, an independent microstate enclaved within the city of Rome, Italy. It was initially planned in the 15th cent\n[…]\nSt. Peter's is famous as a place of pilgrimage and for its liturgical functions. The pope presides at a number of liturgies throughout the year both within the basilica or the adjoining St. Peter's Square; these liturgies draw audiences numbering from 15,000 to over 80,000 people. St. Peter's has many historical associations, with the early Christian Church, the Papacy, the Protestant Reformation and Catholic Counter-Reformation and numerous artists, especially Michelangelo.\n[…]\nAs it stands today, St. Peter's has been extended with a nave by Carlo Maderno. It is the chancel end (the ecclesiastical \"Eastern end\") with its huge centrally placed dome that is the work of Michelangelo. Because of its location within the Vatican State and because the projection of the nave screens the dome from sight when the building is approached from the square in front of it, the work of Michelangelo is best appreciated from a distance.\n[…]\nOn 7 December 2007, a fragment of a red chalk drawing of a section of the dome of the basilica, almost certainly by the hand of Michelangelo, was discovered in the Vatican archives. The drawing shows a small precisely drafted section of the plan of the entablature above two of the radial columns of the cupola drum. Michelangelo is known to have destroyed thousands of his drawings before his death.\n[…]\nIn the first chapel of the north aisle is Michelangelo's Pietà.\n[…]\n\"Beggar's Rome\" - A self-directed virtual tour of St. Peter's Basilica and other Roman churches"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bas%C3%ADlica_de_S%C3%A3o_Pedro",
        "situacao": "ok",
        "texto": "Basílica de São Pedro (em latim: Basilica Sancti Petri, em italiano Basilica di San Pietro) é uma basílica do Alto Renascimento italiano, localizada no Estado do Vaticano, um microestado independente enclavado na cidade de Roma, Itália. Trata-se do maior e mais importante edifício religioso do catolicismo e um dos locais cristãos mais visitados do mundo. Cobre uma área de 23 000 m² ou 2,3 hectares\n[…]\nÉ o edifício com o interior mais proeminente do Vaticano, sendo a sua cúpula uma característica dominante do horizonte de Roma, adornado com 340 estátuas de santos, mártires e anjos. Situada na Praça de São Pedro, a sua construção recebeu contribuições de alguns dos maiores artistas da história da humanidade, tais como Bramante, Michelângelo, Rafael e Bernini.\n[…]\nO pontífice consultou os principais artistas da época, como Giovanni Giocondo que enviou de Veneza um projecto com planta de cruz inscrita com cinco cúpulas inspirado na Basílica de São Marcos. Entretanto, o trabalho foi incumbido a Bramante, que acabara de chegar de Milão. O seu projecto superou, inclusive, o de Giuliano da Sangallo, reforçando o lugar enquanto arquitecto mais influente do alto renascimento.\n[…]\nNo entanto, o seu poderoso ímpeto não é maneirista, e abrange já o barroco. O projecto de Michelangelo para a basílica do Vaticano criou uma massa única, compacta e orgânica.\n[…]\nO presidente da Microsoft, Brad Smith, descreveu o projeto como \"um dos projetos tecnologicamente mais avançados e sofisticados desse tipo alguma vez realizados\". O Vaticano colaborou ainda mais com a Microsoft em 2025 por meio da criação de outra versão interativa da Basílica, desta vez recriada no videogame Minecraft. O mapa Minecraft, intitulado \"Peter is Here\" (Pedro está aqui), foi desenvolvido como parte do Jubileu de 2025 com o objetivo de envolver o público jovem.\n[…]\nSão Pedro\n[…]\n«Visita virtual da Basílica de São Pedro». (em inglês) e italiano)"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Passeio Público do Rio de Janeiro",
      "descricao": "Jardim público no centro do Rio de Janeiro, construído no fim do século dezoito por ordem do vice-rei Luís de Vasconcelos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No fim do século dezoito, o vice-rei mandou construir o Passeio Público do Rio de Janeiro. Que escultor colonial projetou o jardim e seus chafarizes?",
    "resposta": "Mestre Valentim",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Passeio_P%C3%BAblico_(Rio_de_Janeiro)",
      "https://pt.wikipedia.org/wiki/Mestre_Valentim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Passeio_P%C3%BAblico_(Rio_de_Janeiro)",
        "situacao": "ok",
        "texto": "O Passeio Público do Rio de Janeiro é um parque localizado no bairro da Lapa, perto das proximidades da Cinelândia, na cidade do Rio de Janeiro, no Brasil. Foi inaugurado no século XVIII, tendo sido o primeiro parque público das Américas.\n[…]\nInspirado no Passeio Público de Lisboa, inaugurado na década de 1760, e na construção dos jardins do Palácio Real de Queluz, cuja primeira etapa estaria concluída em 1786, o Vice-Rei do Estado do Brasil, Luís de Vasconcelos e Sousa, entre 1779 e 1783, incumbiu o escultor e arquiteto Valentim da Fonseca e Silva (\"Mestre Valentim\") de construir um parque para a cidade, então a capital do Brasil Colônia.\n[…]\nVisando ao saneamento da área, promoveu-se o aterramento da mesma, utilizando-se, para esse fim, o material oriundo do desmonte do antigo morro das Mangueiras.Mestre Valentim projetou um parque em estilo francês, com alamedas retas, que se cruzavam ortogonalmente, e outras formando diagonais, ostentando elementos decorativos também criados pelo artista, como chafarizes, estátuas e pavilhões.\n[…]\nDa decoração original de Mestre Valentim, sobrou o conjunto do Chafariz do Menino, em ferro (1783), integrado por dois obeliscos de granito com medalhões em pedra lioz, escadas e amuradas e pela Fonte dos Amores, com estátuas de jacarés em bronze. As estátuas da Ninfa Eco (1783) e do Caçador Narciso (1785), do destruído Chafariz das Marrecas (1789), encontram-se agora em espaço próprio no Jardim Botânico do Rio de Janeiro.\n[…]\nPodem ainda ser novamente observados os degraus de granito do Chafariz dos Jacarés, também conhecido como Fonte dos Amores, de Mestre Valentim."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mestre_Valentim",
        "situacao": "ok",
        "texto": "Valentim da Fonseca e Silva, mais conhecido como Mestre Valentim (Serro, Minas Gerais, 13 de fevereiro de 1745 — Rio de Janeiro, 1 de março de 1813), foi um dos principais  artistas do Brasil colonial, tendo atuado como escultor, entalhador e urbanista no Rio de Janeiro.\n[…]\n\"Nesta Egreja a 1° de Março de 1813 foi sepultado Valentim da Fonseca e Silva, o Mestre da Arte Colonial no Rio de Janeiro. Homenagem prestada no dia 1° de Março de 1913, em que a Municipalidade, sendo Prefeito o Exmo. Sr. Gen. Bento Ribeiro Monteiro, inaugurou no Passeio Público a herma com o busto do grande artista como preito aos seus serviços e comemorando o Centenário de sua morte\".\n[…]\nDe seu primitivo local, o novo chafariz foi transferido para a beira-mar e Mestre Valentim chamado para executar a obra, inteiramente reformada, dada a fragilidade do material. Tem a forma de uma torre, encimada por uma pequena pirâmide em granito, com detalhes (placas comemorativas, pináculos em forma de fogaréus) em pedra de lioz portuguesa. Mestre Valentim acrescentou apenas o brasão do Vice-Rei, em mármore branco, e duas outras peças em homenagem à Rainha D. Maria I.\n[…]\nRecolhimento de Nossa Senhora do Parto: após o incêndio em 1789, Mestre Valentim projetou a reconstrução do edifício, já demolido.\n[…]\nPasseio Público: entre 1779 e 1783, D. Luís de Vasconcelos e Sousa incumbiu Mestre Valentim de construir um parque para a cidade, seguindo o exemplo do Passeio Público de Lisboa e dos jardins do Palácio Real de Queluz. O desenho original do parque foi muito alterado em uma reforma romântica feita pelo paisagista francês Auguste François Marie Glaziou por volta de 1864.\n[…]\nContribuições de Mestre Valentim como expressão de diversidade cultural na Colônia"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pássaro no Espaço",
      "descricao": "Série de esculturas abstratas de bronze polido e mármore de Constantin Brancusi, iniciada nos anos 1920."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Nos anos vinte, a alfândega americana cobrou imposto de uma escultura de bronze polido como se fosse utensílio de cozinha. Que escultor romeno fez esse Pássaro no Espaço?",
    "resposta": "Constantin Brancusi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brancusi_v._United_States",
      "https://en.wikipedia.org/wiki/Bird_in_Space"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brancusi_v._United_States",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bird_in_Space",
        "situacao": "ok",
        "texto": "Bird in Space (L'Oiseau dans l'espace) is a series of sculptures by Romanian sculptor Constantin Brâncuși. The original work was created in 1923 and made of marble. This sculpture is also known for containing seven marble figures and nine bronze casts. Brancusi created the piece over 14 times and in several mediums over a period of 20 years. It was sold in 2005 for $25.8 million, at the time a rec\n[…]\nIn 1926, Bird in Space was the subject of a court battle over its taxation by U.S. Customs. In October 1926, Bird in Space, along with 19 other Brâncuși sculptures, arrived in New York harbor aboard the steamship Paris. While works of art are not subject to custom duties, the customs officials refused to believe that the tall, thin piece of polished bronze was art.\n[…]\nMarcel Duchamp (who was an artist that accompanied the sculptures from Europe), American photographer Edward Steichen (who was to take possession of Bird in Space after exhibition), and Brâncuși himself were indignant; the sculptures were set to appear at the Brummer Gallery, an avant-garde art gallery in New York City, and then the Arts Club in Chicago. Under pressure from the press and artists, U.S.\n[…]\nThe American poet, Muriel Rukeyser (1913–1980) refers to Brâncuși's \"Bird\" in her poem, \"Reading time: 1 minute 26 seconds\" (1939) and uses this link to highlight the fear we have of embracing the new and non-utilitarian in the arts, and to encourage us to break through an unhealthy mind-set so that we may see the world anew: \"... The climax when the brain acknowledges the world, / all values extended into the blood awake. / Moment of proof.\n[…]\nAnd as they say Brancusi did, / building his bird to extend through soaring air, / as Kafka planned stories that draw to eternity / through time extended. And the climax strikes. ...\" (from A Turning Wind, 1939. Muriel Rukeyser).\n[…]\nThe 1928 bronze on display at the Museum of Modern Art"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Panteão de Roma",
      "descricao": "Antigo templo romano com pórtico de colunas e cúpula, em Roma, hoje igreja católica."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A fachada do Panteão de Roma traz o nome de Agripa, mas o edifício que vemos hoje foi reconstruído por que imperador, no século dois?",
    "resposta": "Adriano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pantheon,_Rome",
      "https://pt.wikipedia.org/wiki/Pante%C3%A3o_(Roma)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pantheon,_Rome",
        "situacao": "ok",
        "texto": "The Pantheon (UK: , US: ; Latin: Pantheum, from Ancient Greek  Πάνθειον (Pantheion) '[temple] of all the gods') is an ancient temple in Rome, Italy, originally built under emperor Augustus (27 BC–AD 14) and reconstructed under Hadrian (117–138); since AD 609, it is a Catholic church called the Basilica of St. Mary and the Martyrs (Italian: Basilica di Santa Maria ad Martyres). It is perhaps the mo\n[…]\nCassius Dio, a Graeco-Roman senator, consul and author of a comprehensive History of Rome, writing approximately 75 years after the Pantheon's reconstruction, mistakenly attributed the domed building to Agrippa rather than Hadrian. Dio appears to be the only near-contemporaneous writer to mention the Pantheon. Even by 200, there was uncertainty about the origin of the building and its purpose:\n[…]\nImperator Caesar Marcus Aurelius Antoninus Pius Felix Augustus, holding tribunician power for the fifth time, consul, proconsul, had the Pantheon, damaged by age, with all its adornments, restored.\n[…]\nPantheon, Moscow (never built)\n[…]\n\"Beggar's Rome\" – A self-directed virtual tour of St. Maria ad Martyres (Pantheon) and other Roman churches\n[…]\nPantheon Live Webcam, Live streaming Video of the Pantheon\n[…]\nPantheon Rome, Virtual Panorama and photo gallery\n[…]\nPantheon, article in Platner's Topographical Dictionary of Ancient Rome\n[…]\nPantheon Rome vs Pantheon Paris. Archived 24 June 2019 at the Wayback Machine.\n[…]\nTomás García Salgado, \"The geometry of the Pantheon's vault\"\n[…]\nPantheon at Great Buildings/Architecture Week website (archived 15 March 2008)\n[…]\nArt & History Pantheon. Archived 2010-11-24 at the Wayback Machine.\n[…]\nSummer solstice at the Pantheon (archived 15 July 2011)\n[…]\nPantheon at Structurae\n[…]\nVideo Introduction to the Pantheon\n[…]\nPanoramic Virtual Tour inside the Pantheon Archived 11 July 2021 at the Wayback Machine\n[…]\nHigh-resolution 360° Panoramas and Images of Pantheon|Art Atlas Archived 1 January 2022 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pante%C3%A3o_(Roma)",
        "situacao": "ok",
        "texto": "Panteão (em latim: Pantheon) é um edifício em Roma, Itália, encomendado por Marco Vipsânio Agripa durante o reinado do imperador Augusto (r. 27 a.C.–14 d.C.) e reconstruído por Adriano (r. 117–138) por volta de 126.\n[…]\nPorém, escavações arqueológicas revelaram que o Panteão de Agripa foi completamente demolido, com exceção da fachada. Lise Hetland defende que a construção moderna começou em 114, no reinado de Trajano, quatro anos depois de ter sido destruído num incêndio pela segunda vez (Oros. 7.12). Ela reexaminou o trabalho de Herbert Bloch (1959), que propôs a data adriânica geralmente defendida, e afirma que ele não deveria ter excluído todos os tijolos trajânicos de seu estudo dos selos de olaria.\n[…]\nO Panteão de Agripa foi destruído juntamente com muitos outros edifícios num gigantesco incêndio em 80 Domiciano reconstruiu o edifício, que queimou de novo em 110.\n[…]\nTerminado por Adriano, mas não reivindicado como uma de suas obras, o novo edifício reutilizou o texto da inscrição original na nova fachada (uma prática comum nos projetos de reconstrução de Adriano em toda Roma; o único edifício no qual ele pôs seu próprio nome foi o Templo do Divino Trajano). Não se sabe para quê o edifício era utilizado. A História Augusta relata que Adriano dedicou o Panteão (entre outros edifícios) em nome do patrono original (Hadr.\n[…]\nDião Cássio, escrevendo aproximadamente 75 anos depois da reconstrução do Panteão, atribuiu erroneamente o edifício a Agripa e não a Adriano, apesar de ser o único autor quase-contemporâneo a citar o Panteão. Já em 300 havia incerteza sobre a origem do edifício e seu objetivo:"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ilha Fiscal",
      "descricao": "Ilha da baía de Guanabara, no Rio de Janeiro, com um palacete neogótico onde ocorreu o último baile do Império, em 1889."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em novembro de 1889, o palacete neogótico da Ilha Fiscal, no Rio, sediou o último baile do Império. Que acontecimento veio seis dias depois?",
    "resposta": "Proclamação da República",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ilha_Fiscal",
      "https://pt.wikipedia.org/wiki/Baile_da_Ilha_Fiscal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_Fiscal",
        "situacao": "ok",
        "texto": "A Ilha Fiscal localiza-se no interior da baía de Guanabara, fronteira ao centro histórico da cidade do Rio de Janeiro, no Brasil.\n[…]\nA ilha tem notoriedade por abrigar o Palácio da Ilha Fiscal, ou Palacete Alfandegário da Ilha dos Ratos, mas popularmente chamado de \"Castelinho\", e o local onde foi celebrado o famoso baile da Ilha Fiscal, a mais dispendiosa e a maior festa promovida pelo Império do Brasil, celebração realizada na sexta-feira dia 8 de novembro, às vésperas do golpe de Estado cujo propósito era deposição do Imperador D.\n[…]\nPedro II e instauração de um regime republicano no país com a Proclamação da República do Brasil, em 15 de novembro de 1889. Atualmente o castelo da Ilha integra o Complexo Cultural da Marinha com um espaço cultural e museu, administrado pela Diretoria do Patrimônio Histórico e Documentação da Marinha.\n[…]\nNuma certa manhã, já na República, uma lancha passava em frente à Ilha Fiscal tendo a bordo Rui Barbosa, Aristides Lobo, Quintino Bocaiúva, Del Vecchio e outros personagens do regime republicano. Ao observarem o brasão imperial talhado em gnaisse, com absoluto respeito à heráldica e com os dois dragões a apoiá-lo, um dos passageiros da lancha declarou: \"Como? Pois o Brasil republicano ainda conserva em um próprio nacional as armas da monarquia!\n[…]\nSILVA, Hélio. Nasce a República. São Paulo: Três, 1975. p. 71.\n[…]\nREY, Marcos. Proclamação da República. São Paulo: Ática, 2003. p. 10.\n[…]\nBaile da Ilha Fiscal\n[…]\n«Site oficial: ILHA FISCAL»\n[…]\nMapa da Ilha Fiscal no OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baile_da_Ilha_Fiscal",
        "situacao": "ok",
        "texto": "O Baile da Ilha Fiscal, também conhecido como O Último Baile do Império, ocorreu em 9 de novembro de 1889, um sábado, em homenagem aos oficiais do navio chileno \"Almirante Cochrane\". Realizado na ilha Fiscal, no centro histórico do Rio de Janeiro, então capital do Império. Foi a última grande festa da monarquia antes da Proclamação da República, em 15 de novembro, uma sexta-feira, seis dias após o\n[…]\nAlém disso, a intenção do visconde de Ouro Preto, presidente do Conselho de Ministros, era de tornar inesquecível este baile, para reforçar a posição do Império, contra as conspirações republicanas. O dinheiro gasto por ele no baile, 250 contos de réis, foi retirado do Ministério da Viação e Obras Públicas, este valor correspondia a quase 10% do orçamento previsto de toda a província do Rio de Janeiro para o ano seguinte.\n[…]\nO baile teve um requinte incomum para a coroa brasileira, que era enxuta. O Palacete foi intensamente decorado, em seus jardins foram montadas duas mesas, em formato de ferradura, onde foi servido um jantar para 500 dos 4 500 convidados, sendo 250 em cada uma. Iguarias incomuns como o sorvete e o faisão foram servidas.\n[…]\n\"Dançou-se muito no O Último Baile do Império, mas o que os convidados não imaginavam, nem o imperador D. Pedro II, é que se dançava sobre um vulcão. À mesma hora em que se acendiam as luzes do palacete para receber os milhares de convidados engalanados, os republicanos reuniam-se no Clube Militar, presididos pelo tenente-coronel Benjamin Constant, para maquinar a queda do Império.\n[…]\nO baile foi comentado pela imprensa durante alguns dias, o que trouxe uma falsa imagem de solidez da coroa.\n[…]\nAscensão do Movimento Republicano\n[…]\nGolpe de Estado Republicano\n[…]\nRepública do Brasil\n[…]\nSILVA, Hélio. Nasce a República. São Paulo: Três, 1975. p. 71.\n[…]\nREY, Marcos. Proclamação da República. São Paulo: Ática, 2003. p. 10.\n[…]\nGOMES, Laurentino. 1889. São Paulo : Globo Livros."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Catedral de Colônia",
      "descricao": "Catedral gótica da cidade de Colônia, na Alemanha, iniciada em 1248."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Iniciada em 1248, a Catedral de Colônia, na Alemanha, ficou séculos inacabada. Em que século foi finalmente concluída?",
    "resposta": "Século dezenove",
    "distratores": [
      "Século dezesseis",
      "Século dezoito",
      "Século vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cologne_Cathedral",
      "https://pt.wikipedia.org/wiki/Catedral_de_Col%C3%B4nia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cologne_Cathedral",
        "situacao": "ok",
        "texto": "Cologne Cathedral (German: Kölner Dom, pronounced [ˌkœlnɐ ˈdoːm] ) is a Catholic cathedral in Cologne, North Rhine-Westphalia, Germany. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996. It is Germany's most visited landmark, attr\n[…]\nConstruction of Cologne Cathedral began in 1248, but was halted in the years around 1560. Attempts to complete construction began around 1814, but the project was not properly funded until the 1840s. The edifice was completed to its original medieval plan in 1880. The towers for its two huge spires give the cathedral the largest façade of any church in the world.\n[…]\nOn Thursday, 3 March 2022, landmark cathedrals across Europe chimed in unison \"in a gesture of solidarity with Ukraine, as bystanders gathered to mourn those killed during Russia's invasion and pray for peace.\" The Kölner Dom was among them.\n[…]\nThe Cathedral Chapter of Cologne is a community of diocesan priests that advises the archbishop of Cologne in the administration of the archdiocese. The members of the chapter, also known as canons (German: Domkapitular), is responsible for the pastoral care of the Cologne Cathedral, in particular the celebration of the liturgy inside the cathedral. Furthermore, the canons have the task of electing the archbishop of Cologne according to the Prussian Concordat.\n[…]\nCologne Cathedral quarter\n[…]\nWolff, Arnold, Cologne Cathedral. Its History – Its Works of Arts, Verlag (editor) Kölner Dom, Cologne: 2nd edition 2003, ISBN 978-3-7743-0342-3\n[…]\nCologne Cathedral music (in German)\n[…]\nunesco World Heritage Sites, Cologne Cathedral\n[…]\nWeb cam showing Cologne Cathedral (in German)\n[…]\nCologne Cathedral at Structurae\n[…]\n5 Gigapixels GigaPan of Cologne Cathedral\n[…]\n1896 Film showing persons leaving the cathedral after Mass"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Col%C3%B4nia",
        "situacao": "ok",
        "texto": "A Catedral de Colônia (português brasileiro) ou Colónia (português europeu) (alemão: Kölner Dom), localizada na cidade alemã de Colônia, é uma igreja católica de estilo gótico, o marco principal da cidade e seu símbolo não oficial.\n[…]\nÉ a quinta igreja mais alta do mundo e foi classificada como património da humanidade em 1996. O símbolo da cidade atrai seis milhões de turistas por ano, sendo o local turístico mais visitado da Alemanha. Em 1164, foram trazidas de Milão as supostas relíquias dos Três Reis Magos.\n[…]\nSua história se inicia em 1164, quando o imperador alemão Frederico Barba Ruiva saqueou Milão, transferindo para a cidade de Colônia os supostos restos mortais dos Três Reis Magos: Baltazar, Melchior e Gaspar. Colônia então transformou-se em local de peregrinação, e a afluência de fiéis era tão grande que a catedral da época não a comportava.\n[…]\nA construção da igreja gótica começou no século XIII (1248) e levou, com as interrupções, mais de 600 anos para ser completada. As duas torres possuem 157 metros de altura, com a catedral possuindo comprimento de 144 metros e largura de 86 metros. Quando foi concluída em 1880, era o prédio mais alto do mundo. A catedral é dedicada a São Pedro e a Nossa Senhora.\n[…]\nFoi construída no local de um templo romano do século IV, um edifício quadrado conhecido como a \"mais velha catedral\" e administrada por São Materno, o primeiro bispo cristão de Colônia. Uma segunda igreja foi construída no local, a chamada \"Velha Catedral\", cuja construção foi completada em 818, que acabou queimada em 30 de abril de 1248. São Severino foi bispo desta catedral.\n[…]\n«Catedral de Colônia - sítio oficial» (em inglês)"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Os Doze Profetas (Aleijadinho)",
      "descricao": "Conjunto de doze estátuas de pedra-sabão de Aleijadinho no adro do Santuário do Bom Jesus de Matosinhos, em Minas Gerais."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Já velho e doente, Aleijadinho esculpiu os Doze Profetas de pedra-sabão de Congonhas nos primeiros anos de que século?",
    "resposta": "Século dezenove",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Profetas_(Aleijadinho)",
      "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_do_Bom_Jesus_de_Matosinhos"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Profetas_(Aleijadinho)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_do_Bom_Jesus_de_Matosinhos",
        "situacao": "ok",
        "texto": "O Santuário do Bom Jesus de Matosinhos é um conjunto arquitetônico e paisagístico formado por uma igreja, um adro e seis capelas anexas, localizado no município brasileiro de Congonhas, estado de Minas Gerais.\n[…]\nA igreja é um importante exemplar da arquitetura colonial brasileira, com uma rica decoração interna em talha dourada e pinturas. O adro é ornado com doze estátuas de profetas em pedra-sabão e as capelas contêm grupos escultóricos em madeira policromada que representam passos da Paixão de Cristo, estátuas criadas pelo Aleijadinho e seus assistentes.\n[…]\nEm 1800 Aleijadinho iniciou a execução das imagens em pedra-sabão de doze profetas do Antigo Testamento, concluindo em 1805. Cada um deles segura um pergaminho com uma mensagem que convida à reflexão e à penitência, ou anuncia a vinda do Messias. A entrada é flanqueada por dois profetas maiores: Jeremias e Isaías. Marcia Toscan sintetizou seus atributos, e invocando Mucci, traduziu os textos latinos que apresentam:\n[…]\nE junto com os grupos das capelas os profetas são considerados o melhor da produção de Aleijadinho na escultura. Sintetizando a opinião dos estudiosos, Mucci afirmou que \"todos os críticos, e espectadores, são unânimes em admirar o 'quadro de rara beleza', a 'Bíblia de pedra-sabão', inscrita por um artista deformado pela doença e pela dor\". Carlos Drummond de Andrade os louvou em um poema:\n[…]\nGermain Bazin, um dos primeiros críticos de renome internacional a divulgar a arte brasileira no estrangeiro, disse que “o Barroco mineiro é um fenômeno excepcional no qual uma arte grandiosa, teatral, alcançou seu apogeu em Congonhas do Campo\".\n[…]\nProjeto Aleijadinho 3D, com imagens dos profetas digitalizadas em 3 dimensões e interativas"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica na Île de la Cité, em Paris, dedicada à Virgem Maria."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Marco da arquitetura gótica, a Catedral de Notre-Dame de Paris teve sua construção iniciada em que século?",
    "resposta": "Século doze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
      "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris (French: Cathédrale Notre-Dame de Paris French: [nɔtʁ(ə) dam də paʁi] : \"Cathedral of Our Lady of Paris\"), often referred to simply as Notre-Dame, is a medieval Catholic cathedral and basilica on the Île de la Cité (an island in the River Seine), in the 4th arrondissement of Paris, France. It is the cathedral church of the Roman Catholic Archdiocese of Paris.\n[…]\nDuring the late 12th and early 13th centuries, while the present Gothic cathedral was under construction, Notre-Dame de Paris became the birthplace and leading centre of the Notre-Dame school of polyphony.\n[…]\nShortly after the fire, French clockmaker Jean-Baptiste Vior discovered an almost identical 1867 Collin-Wagner movement in storage at Sainte-Trinité Church in northern Paris. Olivier Chandez, who had been responsible for the upkeep of Notre-Dame's clock, described the find as \"almost a miracle.\" The clock cannot be installed in Notre-Dame, but it was hoped that the clock could be used to create a new clock for Notre-Dame to the same specifications as the one which was destroyed.\n[…]\nUntil the French Revolution, Notre-Dame was the property of the archbishop of Paris and therefore the Catholic Church. It was nationalized on 2 November 1789 and since then has been the property of the French state. Under the Concordat of 1801, use of the cathedral was returned to the Church, but not ownership. Legislation from 1833 and 1838 clarified that cathedrals were maintained at the expense of the French government.\n[…]\nMusée de Notre Dame de Paris\n[…]\nNotre-Dame du Calvaire, Paris\n[…]\nOfficial website of Friends of Notre-Dame de Paris\n[…]\nOfficial site of Music at Notre-Dame de Paris (in English) also (in French)\n[…]\nNotre-Dame de Paris Cathedral Fire  Archived 1 June 2022 at the Wayback Machine\n[…]\nTridentine Mass celebrated in Notre-Dame in 2017\n[…]\nRe-opening ceremony for Notre Dame in Paris, 2024 on C-SPAN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "A Catedral de Notre-Dame de Paris (em francês: Cathédrale Notre-Dame de Paris; em português: \"Catedral de Nossa Senhora de Paris\") é uma das mais antigas catedrais francesas em estilo gótico. Iniciada sua construção no ano de 1163, é dedicada à Virgem Maria e situa-se na Île de la Cité em Paris, rodeada pelas águas do rio Sena.\n[…]\nA construção inicia-se em 1163 reflectindo alguns traços condutores da Catedral de Saint Denis, subsistindo ainda dúvidas quando à identidade de quem terá \"colocado\" a primeira pedra, o Bispo Maurice de Sully ou o Papa Alexandre III. Ao longo do processo (a construção, incluindo modificações, durou até sensivelmente meados do século XIV) foram vários os arquitectos que participaram no projecto, esclarecendo este factor as diferenças estilísticas presentes no edifício.\n[…]\nCom o florescer da época romântica, outros olhares são lançados à catedral e a filosofia vira-se para o passado, enaltecendo e mistificando numa aura poética e etérea a história de outras épocas e a sua expressão artística. Sob esta nova luz do pensamento é iniciado um programa de restauro da catedral em 1844, liderado pelos arquitectos Eugene Viollet-le-Duc e Jean-Baptiste-Antoine Lassus, que se estendeu por vinte e três anos.\n[…]\nEm 1871, com a curta ascensão da Comuna de Paris, a catedral torna-se novamente pano de fundo a turbulências sociais, durante as quais se crê ter sido quase incendiada. Em 1965, em consequência de escavações para a construção de um parque subterrâneo na praça da catedral, foram descobertas catacumbas que revelaram ruínas romanas, da catedral merovíngia do século VI e de habitações medievais.\n[…]\nÉ possível visitar a torre norte de onde, após uma subida de 386 degraus, se pode vislumbrar a cidade de Paris, os pináculos e os gárgulas da catedral que povoaram o romance de Victor Hugo."
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Ponte Golden Gate",
      "descricao": "Ponte pênsil pintada de laranja sobre o estreito de Golden Gate, em São Francisco, Estados Unidos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Com sua cor laranja inconfundível, a ponte Golden Gate, em São Francisco, foi aberta ao público em que década?",
    "resposta": "Década de 1930",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
      "https://pt.wikipedia.org/wiki/Ponte_Golden_Gate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_Gate_Bridge",
        "situacao": "ok",
        "texto": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean in California, United States. The structure links San Francisco—the northern tip of the San Francisco Peninsula—to Marin County, carrying both U.S. Route 101 and California State Route 1 across the strait. It also carries pedestrian and bicycl\n[…]\nSan Francisco and most of the counties along the North Coast of California joined the Golden Gate Bridge District, with the exception being Humboldt County, whose residents opposed the bridge's construction and the traffic it would generate.\n[…]\nThe bonds were approved in November 1930, by votes in the counties affected by the bridge. The construction budget at the time of approval was $27 million (equivalent to $520 million in 2025 adjusted for inflation). However, the District was unable to sell the bonds until 1932, when Amadeo Giannini, the founder of San Francisco–based Bank of America, agreed on behalf of his bank to buy the entire issue in order to help the local economy.\n[…]\nBus service across the bridge is provided by one public transportation agency, Golden Gate Transit, which runs numerous bus lines throughout the week. The southern end of the bridge, near the toll plaza and parking lot, is also accessible daily from 5:30 a.m. to midnight by San Francisco Muni line 28. Muni formerly offered Saturday and Sunday service across the bridge on the Marin Headlands Express bus line, but this was indefinitely suspended due to the COVID-19 pandemic.\n[…]\nGuthman, Edward (October 30, 2005). \"Lethal Beauty/the Allure: Beauty and an Easy Route to Death Have Long Made the Golden Gate Bridge a Magnet for Suicides\". San Francisco Chronicle. Archived from the original on February 17, 2006.\n[…]\n\"Images of the Golden Gate Bridge\". San Francisco Public Library's Historical Photograph database."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ponte_Golden_Gate",
        "situacao": "ok",
        "texto": "A Ponte Golden Gate é uma ponte localizada no estado da Califórnia, nos Estados Unidos, que liga a cidade de São Francisco até Sausalito, na região metropolitana de São Francisco, sobre o estreito de Golden Gate. A ponte é o principal cartão postal da cidade, uma das mais conhecidas construções dos Estados Unidos, e é considerada uma das Sete maravilhas do Mundo Moderno pela Sociedade Americana de\n[…]\nA ideia de uma ponte cruzando o Golden Gate surgiu pela primeira vez num artigo do jornalista James Wilkins em 1916. A ideia representava um grande desafio, já que o Golden Gate era conhecido pelos fortes ventos e correnteza e naquela época tal estrutura era considerada impossível de se construir.\n[…]\nO nome da ponte foi escolhido em 1927, quando M. M. O'Shaughnessy, importante engenheiro de São Francisco mencionou a ponte como Ponte Golden Gate, referindo-se ao estreito. A dificílima tarefa de projetar tal estrutura ficou a cargo do engenheiro alemão Joseph Strauss. Embora não tivesse nenhuma experiência com pontes suspensas, o engenheiro Joseph Strauss fechou contrato com a prefeitura e projetou a ponte que começou a ser construída em janeiro de 1933 e concluída em 1937.\n[…]\nA Golden Gate Bridge é uma ponte pênsil. Com 2 737 metros de comprimento total, incluindo os acessos, e 1 966 metros de comprimento suspenso, sendo a distância entre as duas torres de 1 280 metros. Estas torres de suspensão, por sua vez, erguem-se a 227 metros acima do nível do mar, suportando os cabos que, nas pontes com esta arquitetura, suportam o tabuleiro suspenso.\n[…]\nA também conhecida Ponte Hercílio Luz em Florianópolis no Brasil também se assemelha à ponte de Golden Gate, porém teve sua construção iniciada antes, em 14 de novembro de 1922 e foi inaugurada a 13 de maio de 1926.\n[…]\nPonte de San Mateo\n[…]\n«Website oficial da Golden Gate Bridge» (em inglês)"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Torre de Pisa",
      "descricao": "Campanário inclinado da catedral de Pisa, na Itália."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A obra da Torre de Pisa começou em 1173, num solo mole. Em que fase da sua história ela começou a se inclinar?",
    "resposta": "Ainda durante a construção",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
      "https://pt.wikipedia.org/wiki/Torre_de_Pisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
        "situacao": "ok",
        "texto": "The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cath\n[…]\nConstruction of the tower occurred in three stages over 199 years. On 5 January 1172, Donna Berta di Bernardo, a widow and resident of the house of dell'Opera di Santa Maria, bequeathed sixty soldi to the Opera Campanilis petrarum Sancte Marie. The sum was then used toward the purchase of a few stones which still form the base of the bell tower. On 9 August 1173, the foundations of the tower were laid.\n[…]\nIn 1178, the tower began to sink after construction progressed to the second floor. This was due to a mere three-metre foundation, set in weak, unstable subsoil, a design that was flawed from the beginning. Construction was subsequently halted for the better part of a century, as the Republic of Pisa was almost continually engaged in battles with Genoa, Lucca, and Florence. This allowed time for the underlying soil to settle. Otherwise, the tower would almost certainly have toppled.\n[…]\nOn 27 December 1233, the worker Benenato, son of Gerardo Bottici, oversaw the continuation of the tower's construction.\n[…]\nOn 23 February 1260, Guido Speziale, son of Giovanni Pisano, was elected to oversee the building of the tower. On 12 April 1264, the master builder Giovanni di Simone, architect of the Camposanto, and 23 workers went to the mountains close to Pisa to cut the required marble. The cut stones were given to Rainaldo Speziale, worker of St. Francesco. In 1272, construction resumed under Di Simone.\n[…]\nLeaning Tower of Niles, a replica of the Tower of Pisa\n[…]\nLeaning Tower of Pisa at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Pisa",
        "situacao": "ok",
        "texto": "A torre inclinada de Pisa (em italiano Torre pendente di Pisa), ou simplesmente Torre de Pisa, é um campanário (campanile ou campanário autônomo) da catedral da cidade italiana de Pisa. Está situada atrás da catedral, e é a terceira mais antiga estrutura na praça da Catedral de Pisa (Campo dei Miracoli), depois da catedral e do baptistério.\n[…]\nEmbora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção, em 1173, devido a uma fundação mal construída e a um solo de fundação mal consolidado, que permitiu à fundação ficar com assentamentos diferenciais. A torre atualmente se inclina para o sudoeste.\n[…]\nA Torre de Pisa é uma obra de arte em mármore branco, realizada em três fases ao longo de um período de cerca de 177 anos. A construção do primeiro andar começou no dia 9 de agosto de 1173, um período de sucesso militar e prosperidade. Este primeiro andar é uma arcada \"cega\" articulada por colunas clássicas coroadas com capitéis coríntios.\n[…]\nA torre começou a inclinar-se após a progressão de construção para o terceiro andar em 1178. Isto deveu-se a uma fundação de meros três metros sobre um subsolo fraco e instável, um projecto que falhou desde o início. A construção foi posteriormente paralisada por quase um século, porque o Pisanos estavam continuamente envolvidos em batalhas com Génova, Lucca e Florença. Este tempo permitiu ao solo subjacente ajustar-se. Caso contrário, a torre de Pisa quase certamente teria sido derrubada.\n[…]\nEm maio de 2008, após a remoção de mais 70 toneladas de terra, os engenheiros anunciaram que a torre tinha sido estabilizada em tal ordem que havia parado de se mover pela primeira vez em sua história. Eles declararam que seria estável durante pelo menos 200 anos.\n[…]\nThe Leaning Tower of Pisa - vídeos de realidade virtual\n[…]\nPictures of Leaning structures"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Museu Guggenheim Bilbao",
      "descricao": "Museu de arte contemporânea projetado por Frank Gehry, inaugurado em 1997 em Bilbao, na Espanha."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O Museu Guggenheim de Bilbao, projetado por Frank Gehry, tem suas curvas cobertas por finas placas de que metal?",
    "resposta": "Titânio",
    "distratores": [
      "Alumínio",
      "Aço inoxidável",
      "Cobre"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guggenheim_Museum_Bilbao",
      "https://pt.wikipedia.org/wiki/Museu_Guggenheim_Bilbao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guggenheim_Museum_Bilbao",
        "situacao": "ok",
        "texto": "The Guggenheim Museum Bilbao is a museum of modern and contemporary art in Bilbao, Biscay, Spain. It is one of several museums affiliated to the Solomon R. Guggenheim Foundation and features permanent and visiting exhibits of works by Spanish and international artists. It was inaugurated on 18 October 1997 by King Juan Carlos I of Spain, with an exhibition of 250 contemporary works of art. It is o\n[…]\nThe museum is seamlessly integrated into the urban context, unfolding its interconnecting shapes of stone, glass and titanium on a 32,500 m2 (350,000 sq ft) site along the Nervión River in the ancient industrial heart of the city; while modest from street level, it is most impressive when viewed from the river.\n[…]\nIts lamination process is delicate and has to be done in places with high energy sources, that is why the laminated parts were made in Pittsburgh, in the United States, the rolling allowed to obtain titanium plates only 0.4 mm (0.016 in) thick, which is much thinner than if steel plates had been used. Moreover, titanium is about half the weight of steel, and the museum's titanium coating represents only 60 t (59 long tons; 66 short tons).\n[…]\nTitanium is a low-polluting material, and each part has been designed differently according to its orientation on the building, so they correspond perfectly with the curves desired by Gehry.\n[…]\nEssentially, this software calculated point by point the stresses to which materials are subjected, by generating a 3D model showing the different tensions and allowing the values of many structural elements of the museum to be calculated: the steel structure, titanium cladding or foundations, among others. It also helped to automate the cutting of materials such as stone or titanium plates.\n[…]\nGuggenheim Bilbao: 3D Model and animation\n[…]\n\"Guggenheim Museum Bilbao\". Google Arts and Culture.\n[…]\nGuggenheim Museum Bilbao – Project for Public Spaces Hall of Shame"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Museu_Guggenheim_Bilbao",
        "situacao": "ok",
        "texto": "O Museu Guggenheim Bilbao, situado na cidade basca de Bilbau é um dos cinco museus pertencentes à Fundação Solomon R. Guggenheim no mundo. Projetado pelo arquiteto canadense naturalizado norte-americano Frank Gehry, é hoje um dos locais mais visitados da Espanha. Seu projeto foi parte de um esforço para revitalizar Bilbau e, hoje, recebe visitantes de todo o mundo.\n[…]\nExternamente, o museu é coberto por superfícies de titânio curvadas em vários pontos, que lembram escamas de um peixe, mostrando a influência das formas orgânicas presentes em muitos trabalhos de Gehry. Do átrio central, que tem 50 metros de altura e lembra uma flor cheia de curvas, partem  passarelas para os três níveis de galerias. Visto do rio, o edifício parece ter a forma de um barco, homenageando a cidade portuária de Bilbao que teve bons anos de festa marítima.\n[…]\nAs exposições no museu mudam frequentemente e contêm principalmente trabalhos realizados ao largo do século XX, sendo as obras pictóricas tradicionais e as esculturas uma parte minoritária comparada com outros formatos de instalações artísticas. O ponto alto, e a única exposição permanente, é The Matter of Time, uma série de  esculturas em aço desenhadas por Richard Serra. Muitos consideram o edifício mais importante do que as obras que fazem parte da coleção do museu.\n[…]\nO museu recebeu várias críticas desde que começou a ser construído, por ser um museu de vanguarda, mas somente por fora, pois as salas de exposição são quase todas iguais a de outros museus, ou seja, inovou-se no exterior mas não na função básica do museu, que é conservar e expor obras de arte. E por ser o museu tão inovador uma crítica que ele recebe é justamente ser mais atraente que as próprias obras expostas.\n[…]\nBilbao\n[…]\nImagem do museu no Google Maps\n[…]\nInfográfico sobre o museu\n[…]\nMuseu Guggenheim Bilbao\n[…]\nFotos do Museu Guggenheim Bilbao"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Palácio do Congresso Nacional",
      "descricao": "Sede do Poder Legislativo brasileiro em Brasília, projetada por Oscar Niemeyer, com duas cúpulas e duas torres."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Congresso Nacional, em Brasília, a cúpula virada para cima, como uma tigela, abriga que casa legislativa?",
    "resposta": "Câmara dos Deputados",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_do_Congresso_Nacional",
      "https://en.wikipedia.org/wiki/National_Congress_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_do_Congresso_Nacional",
        "situacao": "ok",
        "texto": "Palácio do Congresso Nacional é o edifício sede do Congresso Nacional do Brasil. O atual prédio, inaugurado em 1960, foi concebido pelo arquiteto Oscar Niemeyer, com projeto estrutural do engenheiro Joaquim Cardozo. É um dos três edifícios monumentais que definem a Praça dos Três Poderes, sendo os demais o Palácio do Planalto e o Supremo Tribunal Federal, também de autoria de Niemeyer e Cardozo.\n[…]\nDiferente da maneira que eles funcionavam no antigo Distrito Federal, no Rio de Janeiro, onde havia um prédio para cada casa legislativa - a Câmara Alta, o Senado Federal, era sediado no Palácio Monroe, e a Câmara Baixa, a Câmara dos Deputados, ficava no Palácio Tiradentes - em Brasília os dois seriam em um único palácio e de uma forma que as duas casas mantivessem sua independência.\n[…]\nJá a cúpula convexa, em forma de prato, virada para cima, a direita das torres, localizada acima da Câmara dos Deputados, é maior e mais aberta. Simbolicamente, seu vértice vasto está aberto a todas as ideias e ideologias, tendências, anseios e opiniões que compõem o povo brasileiro, representados no interior do edifício pelos deputados. Estruturalmente, ela foi muito mais desafiadora para Joaquim Cardozo, tendo os mesmos 10 metros de altura da cúpula do Senado, mas com 62 metros de diâmetro.\n[…]\nÉ um elipsóide de revolução e seu vão para a Câmara de 22 metros torna a estrutura apenas pousada nas bordas do vão. Para vencer o desafio, o teto da cúpula convexa foi feito com uma casca esférica rebaixada.\n[…]\nA Câmara tem três prédios anexos a parte do prédio original e o Senado, mais um, todos conectados ao prédio principal por corredores, esteiras e escadas rolantes. Pela Câmara, o Anexo II abriga as Comissões Permanentes, o Anexo III tem alguns gabinetes dos deputados, a Consultoria Legislativa e o Departamento Médico e o Anexo IV foi onde ficou a maior parte dos gabinetes dos deputados federais.\n[…]\nBrasília"
      },
      {
        "url": "https://en.wikipedia.org/wiki/National_Congress_of_Brazil",
        "situacao": "ok",
        "texto": "The National Congress (Portuguese: Congresso Nacional) is the legislative body of Brazil's federal government. Unlike the state legislative assemblies and municipal chambers, the Congress is bicameral, composed of the Federal Senate (the upper house) and the Chamber of Deputies (the lower house). The Congress meets annually in Brasília from 2 February to 22 December, with a mid-term break taking p\n[…]\nThe Chamber of Deputies (Câmara dos Deputados) is the lower house of the National Congress, it is composed of 513 federal deputies, who are elected by a proportional representation of votes to serve a four-year term. Seats are allotted proportionally according to each state's population, with each state eligible for a minimum of 8 seats (least populous) and a maximum of 70 seats (most populous).\n[…]\nOn 6 December 2007, the Institute of Historic and Artistic National Heritage (Instituto do Patrimônio Histórico e Artístico Nacional) decided to declare the building of the National Congress a historical heritage of the Brazilian people. The building has also been a UNESCO World Heritage Site, as part of Brasília's original urban buildings, since 1987.\n[…]\nOn 8 January Brasília attacks, supporters of President Jair Bolsonaro, disputing the 2022 election results, stormed the Congress, Supreme Court, and Presidential Palace, causing extensive damage and drawing international condemnation. In April 2025, approximately 8,000 Indigenous people from 150 ethnic groups gathered in Brasília to protest legislative measures perceived as threats to their land rights.\n[…]\nThe numbering of the legislatures is continuous, including the legislatures of the imperial General Assembly and of the republican National Congress. The inauguration of a new composition of Chamber of Deputies for a four-year term of office marks the start of a new legislature.\n[…]\nPhotos 360° of National Congress (in Portuguese)"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Palácio de Versalhes",
      "descricao": "Palácio real francês nos arredores de Paris, sede da corte a partir de Luís XIV."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1919, o tratado que encerrou a Primeira Guerra Mundial foi assinado em que salão do Palácio de Versalhes?",
    "resposta": "Galeria dos Espelhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hall_of_Mirrors",
      "https://pt.wikipedia.org/wiki/Galeria_dos_Espelhos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hall_of_Mirrors",
        "situacao": "ok",
        "texto": "The Hall of Mirrors (French: Grande Galerie, Galerie des Glaces, Galerie de Louis XIV) is a grand Baroque style gallery and one of the most emblematic rooms in the royal Palace of Versailles near Paris, France. The grandiose ensemble of the hall and its adjoining salons was intended to illustrate the power of the absolutist monarch Louis XIV. Located on the first floor (piano nobile) of the palace\n[…]\nThe Hall of Mirrors is—besides the Palace Chapel, completed in the early 18th century, the Court Opera and the Galerie des Batailles—one of the largest rooms in the palace. It is 73 m (240 ft) long and 10.50 m (34.4 ft) deep. With its height of 12.30 m (40.4 ft) it reaches to the Attic floor of the Corps de Logis. The square windows on the upper floor, which can be seen from the outside, only serve aesthetic purposes, as there are no rooms inside.\n[…]\nThe marble and porphyry busts of eight Roman emperors are accompanied by sculptures of Greek and Roman deities and Muses, such as Bacchus, Venus (Venus of Arles), Modesty, Hermes, Urania, Nemesis and Diana (Diana of Versailles). The latter, moved to the Louvre in 1798, was replaced by a Diana sculpted by René Frémin for the gardens of the Château de Marly until the restoration of the Hall of Mirrors during 2004 to 2007, which in turn was replaced by a copy of the original Diana.\n[…]\nThis was the manner in which nobles were able to obtain a much sought-after invitation to one of the king's house parties at the Château de Marly, a villa Louis XIV had built north of Versailles on the route to Saint-Germain-en-Laye.\n[…]\nA few decades later French Prime Minister Georges Clemenceau consciously chose the Hall of Mirrors as the site to sign the Treaty of Versailles on 28 June 1919, that officially ended World War I. Thus, the Entente dismantled the German Empire in the very room where it had been proclaimed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galeria_dos_Espelhos",
        "situacao": "ok",
        "texto": "A Galeria dos Espelhos (Galerie des Glaces) é uma das principais galerias do Palácio de Versalhes, em Versalhes, França. A sua construção data de 1678, no reinado de Luís XIV.\n[…]\nUma das características da galeria, são os 17 arcos revestidos com espelho que refletem as 17 janelas em arco viradas para o jardim. Cada arco contém 21 espelhos, num total de 357, utilizados para decorar a galeria. Os arcos estão fixados entre pilastras de mármore cujos capitéis ilustram os símbolos da França. Estes capiteis revestidos a bronze incluem a flor-de-lis e o galo gaulês.\n[…]\nVerlet, Pierre (1985). Le château de Versailles. [S.l.]: Paris: Librairie Arthème Fayard\n[…]\nJacquiot, Joseph (1985). «Remarques critiques sur les inscriptions de la galerie de Versailles, par Boileau-Despéaux». Colloque de Versailles\n[…]\nKimball, Fiske (março de 1940). «Mansart and LeBrun and the Genesis of the Grand Galerie de Versailles». The Art Bulletin. 22 (1): 1–6. JSTOR 3046675. doi:10.2307/3046675\n[…]\nLangner, Johannes (1982). «Le Brun interprête de l'histoire de Louis XIV: à propos d'un tableau de la Galerie des Glaces à Versailles». Formes. Spring: 21–26\n[…]\nMontagu, Jenifer (novembro de 1992). «Le Brun's Early Designs for the Grand Galerie: some comments on the drawings». Gazette des Beaux-Arts. 6 pér., tome 120: 195–206\n[…]\nSabatier, Gérard (1985). «Versailles, ou le sens perdu, manière de montrer la galerie des glaces aux 17e et 18e siècles». Colloque de Versailles\n[…]\nVerlet, Pierre (1985). «Les guéridons de la Galerie des Glaces». Bulletin de la société de l'art français: 129–135.\n[…]\n(em francês) Galerie des Glaces\n[…]\n(em francês) La galerie des Glaces em Chateau Versailles"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Big Ben",
      "descricao": "Grande sino da torre do relógio do Palácio de Westminster, em Londres, cujo nome se estendeu popularmente à torre."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Londres, muita gente chama a torre do relógio do Parlamento de Big Ben. Mas, originalmente, esse nome se refere a quê?",
    "resposta": "Ao grande sino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Big_Ben",
      "https://pt.wikipedia.org/wiki/Big_Ben"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Big_Ben",
        "situacao": "ok",
        "texto": "Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, and, by extension, for the clock tower that stands at the north end of the Palace of Westminster in London, England. Originally named the Clock Tower, the structure was renamed the Elizabeth Tower in 2012 to mark the Diamond Jubilee of Queen Elizabeth II. The clock is a striking clock with five bells.\n[…]\nElizabeth Tower, originally named the Clock Tower, and popularly known as \"Big Ben\", was built as a part of Charles Barry's design for a new Palace of Westminster after the old palace was largely destroyed by fire on 16 October 1834. Although Barry was the chief architect of the neo-gothic palace, he turned to Augustus Pugin for the design of the Clock Tower, which resembles earlier designs by Pugin, including one for Scarisbrick Hall, a country house in Lancashire.\n[…]\nIn February 2020, the renovations revealed that the Elizabeth Tower had sustained greater damage than previously thought from the May 1941 bombing raid that destroyed the adjacent Commons chamber. Other costly discoveries included asbestos in the belfry, the extensive use of lead paint, broken glass on the clock dials, and serious deterioration to intricate stone carvings due to air pollution.\n[…]\nOne of the most visible changes to the tower has been the restoration of the clock-face framework to its original colour of Prussian blue, used when the tower was first built in 1859, with the black paint that was used to cover up the soot-stained dial frames having been stripped away. The clock faces were regilded, and the shields of Saint George repainted in their original red and white colours. The 1,296 pieces of glass that make up the clock faces have also been removed and replaced.\n[…]\nWhat's inside Big Ben? (Elizabeth Tower) Comprehensive 2022 YouTube animation that shows clock's workings"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Big_Ben",
        "situacao": "ok",
        "texto": "Big Ben é um grande sino instalado na torre noroeste do Palácio de Westminster, a sede do Parlamento Britânico, localizado em Londres, no Reino Unido. O nome oficial da torre em que o Big Ben está localizado era originalmente Clock Tower, mas ela foi renomeada como Elizabeth Tower em 2012 para marcar o Jubileu de Diamante da Rainha Elizabeth II. A torre foi inaugurada durante a gestão de Sir Benja\n[…]\nEm 2 de junho de 2012, o Daily Telegraph informou que 331 membros do Parlamento, incluindo membros seniores de todos os três principais partidos, apoiaram uma proposta de mudar o nome de Clock Tower para Elizabeth Tower em homenagem à Rainha Elizabeth II em seu ano do jubileu de diamante. Isso foi considerado apropriado porque a grande torre oeste conhecida como Victoria Tower (Torre de Vitória) foi renomeada em homenagem à Rainha Vitória em seu jubileu de diamante.\n[…]\n11 de agosto de 2007: O relógio foi parado por seis semanas para reparos. Partes do mecanismo e o martelo do grande sino foram substituídos, pela primeira vez desde sua instalação. Durante os reparos, o relógio não funcionou pelo mecanismo original, mas por um motor elétrico. Novamente, a BBC Radio 4 teve que transmitir o sinal do horário de Greenwich durante este tempo. O relógio foi projetado para funcionar corretamente por mais 200 anos antes que outro grande reparo fosse necessário.\n[…]\nJunto com o grande sino Big Ben, o campanário abriga quatro sinos que tocam a melodia Quartos de Westminster a cada quarto de hora. Os quatro sinos de um quarto soam Sol♯, Fa♯, Mi e Si. Eles foram lançados por John Warner & Sons em sua Crescent Foundry em 1857 (Sol♯, Fa♯ e Si) e 1858 (Mi). A fundição ficava em Jewin Crescent, no que hoje é conhecido como The Barbican, na cidade de Londres.\n[…]\nTambém é considerada a imagem mais icônica para filmes rodados em Londres.\n[…]\nTorre de Vitória\n[…]\nTorre do Big Ben será renomeada para \"Elizabeth Tower\""
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Arquitetura gótica",
      "descricao": "Estilo arquitetônico europeu da Baixa Idade Média, marcado por arcos ogivais, abóbadas nervuradas e vitrais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O estilo das catedrais medievais de arcos pontudos recebeu dos renascentistas italianos um nome pejorativo, como sinônimo de bárbaro. Ele vem de que povo germânico?",
    "resposta": "Godos",
    "distratores": [
      "Vândalos",
      "Francos",
      "Lombardos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gothic_architecture",
      "https://pt.wikipedia.org/wiki/Arquitetura_g%C3%B3tica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gothic_architecture",
        "situacao": "ok",
        "texto": "Gothic architecture is an architectural style that was prevalent in Europe from the late 12th to the 16th century, during the High and Late Middle Ages, surviving into the 17th and 18th centuries in some areas. It evolved from Romanesque architecture and was succeeded by Renaissance architecture. The style is characterised by pointed arches, rib vaults, flying buttresses and large, traceried stain\n[…]\nMedieval contemporaries characterised the style in Latin as opus Francigenum (\"French work\" or \"Frankish work\"), as opus modernum (\"modern work\"), or as novum opus (\"new work\"). Italian-speakers could call it maniera tedesca (\"German style\").\n[…]\nThe term \"Gothic architecture\" originated as a pejorative description. Giorgio Vasari used the term \"barbarous German style\" in his Lives of the Artists (1550) to describe what is now considered the Gothic style, and in the introduction to the Lives he attributes various architectural features to the Goths, whom he held responsible for destroying the ancient buildings after they conquered Rome, and for erecting new ones in this style.\n[…]\nIn the 16th century, as Renaissance architecture from Italy began to appear in France and other countries in Europe. The Gothic style began to be described as outdated, ugly and even barbaric. The term \"Gothic\" was first used as a pejorative description. Giorgio Vasari used the term \"barbarous German style\" in his 1550 Lives of the Artists to describe what is now considered the Gothic style.\n[…]\nIn the 17th century, Molière also mocked the Gothic style in the 1669 poem La Gloire: \"...the insipid taste of Gothic ornamentation, these odious monstrosities of an ignorant age, produced by the torrents of barbarism...\" The dominant styles in Europe became in turn Italian Renaissance architecture, Baroque architecture, and the grand classicism of the style Louis XIV."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arquitetura_g%C3%B3tica",
        "situacao": "ok",
        "texto": "A arquitetura gótica é um estilo arquitetónico que, precedida pela arquitetura românica e sucedida pela arquitetura renascentista, teve origem na primeira metade do século XII na Europa Ocidental, a partir da França do Norte e, mais particularmente, do centro dessa região — o domínio real delimitado pelos rios Sena, Marne, Aisne e Oise —, que se chamava a Francia propriamente dita e, mais tarde, Î\n[…]\nO termo \"gótico\" foi, de resto, cunhado precisamente durante o Renascimento italiano por artistas e historiadores como Giorgio Vasari, que utilizavam a expressão de forma pejorativa para classificar a arte medieval como \"bárbara\" ou própria dos Godos (ou chamada por alguns na Itália de \"alemã\").\n[…]\nA associação do termo \"gótico\" aos Godos resultou de interpretações posteriores desenvolvidas durante a Renascença, quando autores italianos empregaram a designação de forma pejorativa para caracterizar a arquitetura medieval como uma arte \"bárbara\", atribuindo-a simbolicamente aos povos germânicos responsáveis pela queda do Império Romano do Ocidente.\n[…]\nO arquiteto e polímata Christopher Wren (1632–1723) desaprovava a designação \"gótico\" para a arquitetura de arcos apontados. Comparou-a à arquitetura islâmica, a que chamou \"estilo Sarraceno\", observando que a sofisticação do arco apontado não se devia aos Godos, mas sim ao Islão, que por sua vez o teria herdado dos Gregos. Escreveu:\n[…]\nNo século XVII, Molière também ridicularizou o estilo gótico no poema de 1669 La Gloire: «[...] o gosto insípido da ornamentação gótica, essas monstruosidades odiosas de uma época ignorante, produzidas pelas torrentes da barbárie [...]». Os estilos dominantes na Europa passaram a ser, sucessivamente, a arquitetura renascentista italiana, a arquitetura barroca e o grande classicismo do estilo Luís XIV.\n[…]\nArquitetura gótica na Itália\n[…]\nMedievalismo\n[…]\nArquitetura de catedrais e grandes igrejas\n[…]\nEstilo arquitetônico"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Estilo manuelino",
      "descricao": "Estilo arquitetônico português do início do século dezesseis, com motivos marítimos, presente na Torre de Belém e no Mosteiro dos Jerónimos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O estilo da Torre de Belém e do Mosteiro dos Jerónimos, cheio de cordas, conchas e motivos marítimos, leva o nome de que rei português?",
    "resposta": "Dom Manuel I",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estilo_manuelino",
      "https://en.wikipedia.org/wiki/Manueline"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estilo_manuelino",
        "situacao": "ok",
        "texto": "O estilo manuelino, por vezes também chamado de gótico português tardio ou flamejante, é um estilo decorativo, escultórico e de arte móvel que se desenvolveu no reinado de D. Manuel I e prosseguiu até e após a sua morte, ainda que já existisse desde o reinado de D. João II. É uma variação portuguesa do Gótico final, bem como da arte luso-mourisca ou arte mudéjar, marcada por uma sistematização de \n[…]\nIncorporou, mais tarde, ornamentações do Renascimento italiano. O termo \"Manuelino\" foi criado por Francisco Adolfo Varnhagen na sua Notícia Histórica e Descriptiva do Mosteiro de Belém, de 1842. O Estilo desenvolveu-se numa época propícia da economia portuguesa e deixou marcas em todo o território nacional.\n[…]\nA característica dominante do Manuelino é a exuberância de formas e uma forte interpretação naturalista-simbólica de temas originais, eruditos ou tradicionais. A janela, tanto em edifícios religiosos como seculares, é um dos elementos arquitectónicos onde melhor se pode observar este estilo. Estes motivos aparecem em construções, pelourinhos, túmulos ou mesmo peças artísticas, como em ourivesaria, de que a Custódia de Belém é um exemplo.\n[…]\nFala-se ainda de um \"Manuelino de segunda geração\", após o recrudescimento económico em Portugal, em consequência das Descobertas. Castilho, Boitaca e os irmãos Francisco e Diogo de Arruda, que desenharam a Torre de Belém, são os seus principais representantes.\n[…]\nDiogo Boitaca, mestre das obras régias de 1490 a 1522, foi o responsável pela continuação da construção do Claustro Real da Batalha, nomeadamente produziu o complexo rendilhado que adorna os vãos do claustro. O Mosteiro dos Jerónimos, em grande parte devido a Boitaca, constitui uma das mais eloquentes obras manuelinas, tendo a Torre de Belém sido contruída muito mais distante daí.\n[…]\nArte Manuelina, \"Imagens da Arte Portuguesa- Manuelino, um Estilo\" (Extrato de Programa), RTP, 1985"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Manueline",
        "situacao": "ok",
        "texto": "The Manueline (Portuguese: estilo manuelino, IPA: [ɨʃˈtilu mɐnweˈlinu]), occasionally known as Portuguese late Gothic, is the sumptuous, composite Portuguese architectural style originating in the 16th century, during the Portuguese Renaissance and Age of Discoveries. Manueline architecture incorporates maritime elements and representations of the discoveries brought from the voyages of Vasco da G\n[…]\nThe style was given its name, many years later, by Francisco Adolfo de Varnhagen, Viscount of Porto Seguro, in his 1842 book Noticia historica e descriptiva do Mosteiro de Belem, com um glossario de varios termos respectivos principalmente a architectura gothica, in his description of the Jerónimos Monastery. Varnhagen named the style after King Manuel I, whose reign (1495–1521) coincided with its development.\n[…]\nWhen King Manuel I died in 1521, he funded 62 construction projects. However, much original Manueline architecture in Portugal was lost or damaged beyond restoration in the 1755 Lisbon earthquake and subsequent tsunami. In Lisbon, the Ribeira Palace, the residence of King Manuel I, and the Hospital Real de Todos os Santos were destroyed, along with several churches.\n[…]\nOther remarkable Manueline buildings include the church of the Monastery of Jesus of Setúbal (one of the earliest Manueline churches, also designed by Diogo Boitac), the Santa Cruz Monastery in Coimbra, the main churches in Golegã, Vila do Conde, Moura, Caminha, Olivença and portions of the cathedrals of Braga (main chapel), Viseu (rib vaulting of the nave) and Guarda (main portal, pillars, vaulting).\n[…]\nCivil buildings in Manueline style exist in Évora (home to the  Évora Royal Palace of 1525, by Pedro de Trillo, Diogo de Arruda and Francisco de Arruda) and the Castle of Évoramonte of 1531), Viana do Castelo, Guimarães and some other towns.\n[…]\nNeo-Manueline\n[…]\nAtanázio, A Arte do Manuelino, Lisbon, Presença, 1984."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Móbile",
      "descricao": "Tipo de escultura cinética suspensa, com peças equilibradas que se movem com o ar, criada por Alexander Calder."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1931, Marcel Duchamp batizou as esculturas suspensas de Alexander Calder, que se movem com o ar, com que nome hoje comum em quartos de bebê?",
    "resposta": "Móbile",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alexander_Calder",
      "https://en.wikipedia.org/wiki/Mobile_(sculpture)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Calder",
        "situacao": "ok",
        "texto": "Alexander Calder (; July 22, 1898 – November 11, 1976) was an American sculptor known both for his innovative mobiles (kinetic sculptures powered by motors or air currents) that embrace chance in their aesthetic, his static \"stabiles\", and his monumental public sculptures.\n[…]\nDating from 1931, Calder's abstract sculptures of discrete movable parts powered by motors were christened \"mobiles\" by Marcel Duchamp, a French pun meaning both \"motion\" and \"motive\". However, Calder found that the motorized works sometimes became monotonous in their prescribed movements. His solution, arrived at by 1932, was hanging sculptures that derived their motion from touch or air currents.\n[…]\nHis 1946 show at Carré, which was organized by Duchamp, was composed mainly of hanging and standing mobiles, and it made a huge impact, as did the essay for the catalogue by French philosopher Jean-Paul Sartre. In 1951, Calder devised a new kind of sculpture, related structurally to his constellations. These \"towers\", affixed to the wall with a nail, consist of wire struts and beams that jut from the wall, with moving objects suspended from their armatures.\n[…]\nIn 1993, the owners of Rio Nero (1959), a sheet-metal and steel-wire mobile ostensibly by Calder, went to the United States District Court for the District of Columbia charging that it was not by Alexander Calder, as claimed by its seller. That same year, a federal judge ruled that for Rio Nero the burden of proof had not been fulfilled. Despite the decision, the owners of the mobile could not sell it because the recognized expert, Klaus Perls, had declared it a copy.\n[…]\nList of Alexander Calder public artworks\n[…]\nCalder Foundation website\n[…]\nNational Gallery of Art – Alexander Calder\n[…]\nAlexander Calder at the Museum of Modern Art"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mobile_(sculpture)",
        "situacao": "ok",
        "texto": "A mobile (UK: , US: ) is a type of kinetic sculpture constructed to take advantage of the principle of equilibrium. It consists of a number of rods, from which weighted objects or further rods hang. The objects hanging from the rods balance each other, so that the rods remain more or less horizontal. Each rod hangs from only one string, which gives it the freedom to rotate about the string.\n[…]\nMobiles are popular in the nursery, where they hang over cribs to give infants entertainment and visual stimulation. Mobiles have inspired many composers, including Morton Feldman and Earle Brown who were inspired by Alexander Calder's mobiles to create mobile-like indeterminate pieces. John Cage wrote the music for the short film Works of Calder that focused on Calder's mobiles. Frank Zappa stated that his compositions employ a principle of balance similar to Calder mobiles.\n[…]\nThe meaning of the term \"mobile\" as applied to sculpture has evolved since it was first suggested by Marcel Duchamp in 1931 to describe the early, mechanized creations of Alexander Calder. At this point, \"mobile\" was synonymous with the term \"kinetic art\", describing sculptural works in which motion is a defining property. While motor- or crank-driven moving sculptures may have initially prompted it, the word \"mobile\" later came to refer more specifically to Calder's free-moving creations.\n[…]\nCalder's work is the only one defined by the term \"mobile\"; however, three other notable artists worked on a similar concept. Man Ray experimented with this idea around 1920, Armando Reverón who during the 30s made a series of movable skeletons and Bruno Munari created his \"Aerial Machine\" in 1929 and the \"Useless Machines\" in 1933, made in cardboard and playful colors.\n[…]\nStraw mobile\n[…]\nAlexander Calder's Mobiles by Jean-Paul Sartre, Les Temps Modernes, 1963"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexander_Calder",
        "situacao": "ok",
        "texto": "Alexander Calder (Lawnton, Pensilvânia, 22 de julho de 1898 — Nova Iorque, 11 de novembro de 1976), também conhecido por Sandy Calder, foi um escultor e pintor estadunidense famoso por seus móbiles. Foi famoso por esculturas de grande porte, ele produziu numerosas figuras de arame, nomeadamente para circos em miniatura.\n[…]\nA escala e dimensão destas esculturas varia bastante, podendo chegar aos cinco metros, como é o caso do mobile executado para o Aeroporto JFK, em Nova Iorque.\n[…]\nDe 1931 datam as suas primeiras construções abstratas, nitidamente influenciadas por Mondrian, nesse mesmo ano Calder em uma de suas viagens conheceu Louisa James, sobrinha-neta do escritor Henry James, com quem se casou. Os primeiros móbiles são de 1932.\n[…]\nCalder ocupa lugar especial entre os escultores modernos. Criador dos stabiles, sólidas esculturas fixas, e dos móbiles, placas e discos metálicos unidos entre si por fios que se agitam tocados pelo vento, assumindo as formas mais imprevistas – a sua arte, no dizer de Marcel Duchamp, “é a sublimação de uma árvore ao vento”.\n[…]\nCalder foi o primeiro a explorar o movimento na escultura e um dos poucos artistas a criar uma nova forma – o mobile. Nos últimos anos mantinha um estúdio em Saché, perto de Tours  e embora vivesse aí a maior parte do tempo, conservou sua fazenda de Roxbury, Connecticut, comprada em 1933, e que se tornara um verdadeiro repositório de trabalhos e objetos feitos por ele – desde os andirons espiralados da lareira rústica até às bandejas feitas com latas de azeite italiano.\n[…]\nRosenthal, Mark, and Alexander S. C. Rower. The Surreal Calder. The Menil Collection, Houston, 2005, ISBN 978-0-939594-60-3\n[…]\nRower, Alexander S. C. Calder Sculpture. Universe Publishing, 1998, ISBN 978-0-7893-0134-5\n[…]\n«Calder Foundation (em inglês)»\n[…]\nAlexander Calder em francês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua colossal de cobre de uma figura feminina com uma tocha, na ilha da Liberdade, em Nova York, presente da França aos Estados Unidos em 1886."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que engenheiro francês, mais famoso por uma torre de ferro em Paris, projetou a estrutura interna da Estátua da Liberdade?",
    "resposta": "Gustave Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty",
      "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nThe head and arm had been built with assistance from Viollet-le-Duc, who fell ill in 1879. He soon died, leaving no indication of how he intended to transition from the copper skin to his proposed masonry pier. The following year, Bartholdi was able to obtain the services of the innovative designer and builder Gustave Eiffel. Eiffel and his structural engineer, Maurice Koechlin, decided to abandon the pier and instead build an iron truss tower.\n[…]\nNorwegian immigrant civil engineer Joachim Goschen Giæver designed the structural framework for the Statue of Liberty. His work involved design computations, detailed fabrication and construction drawings, and oversight of construction. In completing his engineering for the statue's frame, Giæver worked from drawings and sketches produced by Gustave Eiffel.\n[…]\nThe entire puddled iron armature designed by Gustave Eiffel was replaced. Low-carbon corrosion-resistant stainless steel bars that now hold the staples next to the skin are made of Ferralium, an alloy that bends slightly and returns to its original shape as the statue moves. To prevent the ray and arm making contact, the ray was realigned by several degrees.\n[…]\nA group of statues stands at the western end of the island, honoring those closely associated with the Statue of Liberty. Two Americans—Pulitzer and Lazarus—and three Frenchmen—Bartholdi, Eiffel, and Laboulaye—are depicted. They are the work of Maryland sculptor Phillip Ratner.\n[…]\nList of tallest statues\n[…]\nStatue of Liberty at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nA cabeça e o braço foram construídos com a ajuda de Viollet-le-Duc, que adoeceu em 1879. Ele morreu logo em seguida, sem deixar nenhuma indicação de como pretendia fazer a transição da pele de cobre para o seu proposto píer de alvenaria. No ano seguinte, Bartholdi conseguiu obter os serviços do inovador designer e construtor Gustave Eiffel. Eiffel e seu engenheiro estrutural, Maurice Koechlin, decidiram abandonar o píer e, em vez disso, construir uma torre de treliça de ferro.\n[…]\nNum processo de trabalho intensivo, cada sela teve de ser trabalhada individualmente. Para evitar a corrosão galvânica entre a pele de cobre e a estrutura de suporte de ferro, Eiffel isolou a pele com amianto impregnado com goma-laca.\n[…]\nO engenheiro civil imigrante norueguês Joachim Goschen Giæver projetou a estrutura da Estátua da Liberdade. Seu trabalho envolvia cálculos de projeto, desenhos detalhados de fabricação e construção, e supervisão da construção. Ao concluir sua engenharia para a estrutura da estátua, Giæver trabalhou a partir de desenhos e esboços produzidos por Gustave Eiffel.\n[…]\nToda a armadura de ferro projetada por Gustave Eiffel foi substituída. As barras de aço inoxidável de baixo carbono e resistentes à corrosão que agora seguram os grampos próximos à pele são feitas de ferralium, uma liga que se curva ligeiramente e retorna à sua forma original conforme a estátua se move. Para evitar que o raio e o braço fizessem contato, o raio foi realinhado em vários graus.\n[…]\nLista de estátuas por altura"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua colossal de cobre de uma figura feminina com uma tocha, na ilha da Liberdade, em Nova York, presente da França aos Estados Unidos em 1886."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando foi montada em Nova York, a Estátua da Liberdade tinha a cor marrom avermelhada do metal. Por que ela ficou verde?",
    "resposta": "Oxidação do cobre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty",
      "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nOn the sub-national level, the Statue of Liberty National Monument was added to the New Jersey Register of Historic Places in 1971, and was made a New York City designated landmark in 1976.\n[…]\nAs an American icon, the Statue of Liberty has been depicted on the country's coinage and stamps. It appeared on commemorative coins issued to mark its 1986 centennial, and on New York's 2001 entry in the state quarters series. An image of the statue was chosen for the American Eagle platinum bullion coins in 1997, and it was placed on the reverse, or tails, side of the Presidential Dollar series of circulating coins. Two images of the statue's torch appear on the current ten-dollar bill.\n[…]\nDepictions of the statue have been used by many regional institutions. Between 1986 and 2000, New York State issued license plates with an outline of the statue. The Women's National Basketball Association's New York Liberty use both the statue's name and its image in their logo, in which the torch's flame doubles as a basketball. The New York Rangers of the National Hockey League depicted the statue's head on their third jersey, beginning in 1997.\n[…]\nHistoric American Engineering Record (HAER) No. NY-138, \"Statue of Liberty, Liberty Island, Manhattan, New York City County, NY\", 404 photos, 59 color transparencies, 41 measured drawings, 10 data pages, 33 photo caption pages\n[…]\nThe Statue of Liberty, BBC Radio 4 discussion with Robert Gildea, Kathleen Burk & John Keane (In Our Time, February 14, 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nO cobre pode ter vindo de várias fontes e diz-se que parte dele veio de uma mina em Visnes, Noruega, embora isso não tenha sido determinado de forma conclusiva após o teste de amostras. Segundo Cara Sutherland, em seu livro sobre a estátua para o Museu da Cidade de Nova York, 90,7 quilos de cobre foi necessário para construir a estátua, e o industrial francês de cobre Eugène Secrétan doou 58 quilos.\n[…]\nQuando construída, a estátua era marrom-avermelhada e brilhante, mas em vinte anos ela se oxidou até sua cor verde atual por meio de reações com o ar, a água e a poluição ácida, formando uma camada de verdete que protege o cobre de mais corrosão.\n[…]\n“A liberdade iluminando o mundo”, de fato! Essa expressão nos deixa doentes. Esse governo é uma farsa. Ele não pode, ou melhor, “não protege” seus cidadãos dentro de suas “próprias” fronteiras.\n[…]\nA estátua rapidamente se tornou um marco. Originalmente, era uma cor cobre opaca, mas logo depois de 1900 uma pátina verde, também chamada de verdete, causada pela oxidação da pele de cobre, começou a se espalhar. Já em 1902 foi mencionado na imprensa; em 1906 já cobria completamente a estátua.\n[…]\nUm novo e poderoso sistema de iluminação foi instalado antes do Bicentenário Americano em 1976. A estátua foi o ponto focal da Operação Vela, uma regata de navios altos de todo o mundo que entrou no porto de Nova York em 4 de julho de 1976 e navegou ao redor da Ilha da Liberdade. O dia terminou com uma espetacular exibição de fogos de artifício perto da estátua."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Prêmio Pritzker",
      "descricao": "Prêmio internacional de arquitetura concedido anualmente desde 1979 pela Fundação Hyatt, nos Estados Unidos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Oscar Niemeyer, em 1988, e Paulo Mendes da Rocha, em 2006, receberam que prêmio, chamado de Nobel da arquitetura?",
    "resposta": "Prêmio Pritzker",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pritzker_Architecture_Prize",
      "https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Pritzker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pritzker_Architecture_Prize",
        "situacao": "ok",
        "texto": "The Pritzker Architecture Prize is an international award presented annually \"to honor a living architect or architects whose built work demonstrates a combination of those qualities of talent, vision and commitment which has produced consistent and significant contributions to humanity and the built environment through the art of architecture\". Founded in 1979 by Jay A. Pritzker and his wife Cind\n[…]\nrecognized professionals in their own fields of architecture, business, education, publishing, and culture\", deliberates and early in the following year announce the winner. The prize chair is the 2016 Pritzker laureate Alejandro Aravena; earlier chairs were J. Carter Brown (1979–2002), the Lord Rothschild (2003–2004), the Lord Palumbo (2005–2015), Glenn Murcutt (2016–2018) and Stephen Breyer (2019–2020).\n[…]\nPartners in architecture (in 2001, Jacques Herzog and Pierre de Meuron, in 2010, Kazuyo Sejima and Ryue Nishizawa, in 2020, Yvonne Farrell and Shelley McNamara, and in 2021, Anne Lacaton and Jean-Philippe Vassal) have shared the award. In 1988, Gordon Bunshaft and Oscar Niemeyer were both separately honored with the award. The 2017 winners, architects Rafael Aranda, Carme Pigem, and Ramón Vilalta  were the first group of three to share the prize.\n[…]\nScott Brown told CNN that \"as a woman, she had felt excluded by the elite of architecture throughout her career,\" and that \"the Pritzker Prize was based on the fallacy that great architecture was the work of a 'single lone male genius' at the expense of collaborative work.\" Responding to the petition, the 2013 prize jury said that it cannot revisit the decisions of past juries, either in the case of Scott Brown or that of Lu Wenyu, whose husband Wang Shu won in 2012.\n[…]\nDriehaus Architecture Prize\n[…]\nList of architecture awards\n[…]\n\"Past laureates\". Pritzker Architecture Prize official site. The Hyatt Foundation. Retrieved March 17, 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pr%C3%A9mio_Pritzker",
        "situacao": "ok",
        "texto": "Prémio (português europeu) ou Prêmio (português brasileiro) Pritzker é concedido anualmente para \"homenagear um ou mais arquitetos vivos, cujo trabalho demonstra uma combinação de qualidades, como talento, visão e compromisso, e que produziu contribuições consistentes e significativas para a humanidade e o ambiente construído por meio da arte da arquitetura\".\n[…]\nCriado em 1979 por Jay A. Pritzker e sua esposa Cindy, o prêmio é financiado pela Família Pritzker e patrocinado pela Fundação Hyatt. É considerado um dos maiores prêmios internacionais de arquitetura e é frequentemente referido como o Prêmio Nobel de Arquitetura.\n[…]\nO Prêmio Pritzker é concedido \"sem distinção de nacionalidade, raça, religião ou ideologia\"; os destinatários recebem um prêmio de 100 000 dólares, um certificado e, desde 1987, uma medalha de bronze.\n[…]\nPrêmios de arquitetura\n[…]\nPrémio Driehaus"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Santuário de Cristo Rei",
      "descricao": "Monumento religioso com estátua de Cristo de braços abertos em Almada, diante de Lisboa, inaugurado em 1959."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Cristo Rei de braços abertos em Almada, do outro lado do rio Tejo diante de Lisboa, foi inspirado em que monumento brasileiro?",
    "resposta": "Cristo Redentor",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_de_Cristo_Rei",
      "https://en.wikipedia.org/wiki/Sanctuary_of_Christ_the_King"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_de_Cristo_Rei",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sanctuary_of_Christ_the_King",
        "situacao": "ok",
        "texto": "The Sanctuary of Christ the King (Portuguese: Santuário de Cristo Rei) is a Catholic monument and shrine dedicated to the Sacred Heart of Jesus Christ overlooking the city of Lisbon situated in Almada, in Portugal. It was inspired by the Christ the Redeemer statue of Rio de Janeiro, in Brazil, after the Cardinal Patriarch of Lisbon visited that monument. The project was inaugurated on 17 May 1959.\n[…]\nWhen Pope Paul VI created the Diocese of Setúbal on 16 July 1975, by means of the Papal bull Studentes Nos, the Monument of Christ the King and the Seminary of Almada remained under the control of the Patriarchate of Lisbon. In June 1999 the site passed under the authority of the Diocese of Setúbal, which immediately started to restore the monument.\n[…]\nThe monument was erected on an isolated clifftop 133 m above the sea, overlooking the Tagus River left bank. It was constructed in the parish of Pragal, which was merged with the parishes of Almada, Cova da Piedade, Pragal e Cacilhas in 2013, into the municipality of Almada. It is the highest point in Almada, on a plateau dominated by the 25 de Abril Bridge, and close to the Estação Elevatória e Reservatório do Pragal.\n[…]\nThe interior of the monument is divided into various spaces, among them a library, a bar, two halls and the main chapel. Two religious spaces were dedicated, one to the Chapel of Our Lady of Peace (Portuguese: Capela de Nossa Senhora da Paz) and the other to the Confidants of Jesus (Portuguese: Capela dos Confidentes de Jesus).\n[…]\nCristo Rei of Dili, a comparable statue in the town of Dili; in the former Portuguese colony of East Timor\n[…]\nMonumento Nacional a Cristo Rei, memória histórica 1936/1959 (in Portuguese), Lisbon, Portugal: Secretariado Nacional do Monumento, 1965"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Castelo de Neuschwanstein",
      "descricao": "Castelo romântico do século dezenove nos Alpes da Baviera, mandado erguer pelo rei Luís II."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O castelo de Neuschwanstein, mandado erguer pelo rei Luís Segundo da Baviera, inspirou o castelo de que princesa na Disneylândia?",
    "resposta": "Bela Adormecida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
      "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
        "situacao": "ok",
        "texto": "Neuschwanstein Castle (German: Schloss Neuschwanstein, pronounced [ˈʃlɔs nɔʏˈʃvaːnʃtaɪn]; Southern Bavarian: Schloss Neischwanstoa; lit. 'Newswanstone') is a 19th-century historicist palace on a rugged hill of the foothills of the Alps in the very south of Germany, near the border with Austria. It is located in the Swabia region of Bavaria, in the municipality of Schwangau, above the incorporated \n[…]\nThe more detailed inspiration for the construction of Neuschwanstein came from two journeys that Ludwig took in 1867: one in May to the reconstructed Wartburg near Eisenach, site of the mythical Sängerkrieg and thus setting of Wagner's opera Tannhäuser and the Singers' Contest at Wartburg, and another in July to the Château de Pierrefonds, which Eugène Viollet-le-Duc was transforming from a ruined castle into a historicist palace for Napoleon III.\n[…]\nThe King never intended to make the palace accessible to the public. No more than six weeks after the King's death, the Prince-Regent Luitpold ordered the palace opened to paying visitors. The administrators of King Ludwig's estate managed to balance the construction debts by 1899. From then until World War I, Neuschwanstein was a stable and lucrative source of revenue for the House of Wittelsbach.\n[…]\nIt served as the inspiration for Disneyland's Sleeping Beauty Castle and Cinderella Castle, Cameran Palace in the animated Pokémon film Lucario and The Mystery of Mew (2005), and later similar structures. It is also visited by the character Grace Nakimura alongside Herrenchiemsee in the game The Beast Within: A Gabriel Knight Mystery (1996). It is also featured in the Globe Trot party game on the game Wii Party (2010).\n[…]\nNeuschwanstein Pictures and Videos: From a visitor's perspective.\n[…]\nNeuschwanstein Castle on Bavarian Palace Department website.\n[…]\nNeuschwanstein Castle on the Cultural Travel Explorer website."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "situacao": "ok",
        "texto": "Sleeping Beauty Castle is a fairy tale castle at  the center of Disneyland and formerly in Hong Kong Disneyland. It is based on the late 19th century Neuschwanstein Castle in Bavaria, Germany. It appeared in the Walt Disney Pictures logos from 1985 to 2006 before being merged with Cinderella Castle, both familiar symbols of the Walt Disney Company. The version at Disneyland is the only Disney cast\n[…]\nDuring the tenth anniversary of Disneyland Paris in 2002, the front of the castle was fitted with a golden scroll displaying a large 10. The scroll and other anniversary material in the park were removed in 2003.\n[…]\nThe castle closed on January 1, 2018 for a redesign as part of the park's 15th anniversary celebration. This redesign is meant to pay tribute to 14 Disney princesses and heroines. It has been renamed Castle of Magical Dreams.\n[…]\nIn celebration of Hong Kong Disneyland's fifth anniversary, Celebration in the Air, the castle was transformed into Tinker Bell's Pixie Dusted Castle. The castle was decorated with golden pixie dust, which sparkled and shimmered in the sun and was illuminated by night.\n[…]\nAlthough no significant decorations were added to Hong Kong Disneyland's Sleeping Beauty Castle for the park's 10th anniversary, the nightly \"Disney In The Stars\" fireworks show was added with elaborate projection mapping with visuals to complement the display. This, however, resulted in the elimination of a few pyrotechnic elements launched from the front of the castle during the show.\n[…]\nAs Sleeping Beauty Castle is a Disney icon, it was used in the opening of the Walt Disney anthology television series from the show's beginning in 1954 until the late 70s, when it was replaced by the Cinderella Castle. It was also the logo of Walt Disney Pictures, Walt Disney Television, Disney Music Group and Walt Disney Studios Motion Pictures from 1985–2006."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Castelo_de_Neuschwanstein",
        "situacao": "ok",
        "texto": "O Castelo de Neuschwanstein (em alemão Schloss Neuschwanstein) é um palácio alemão construído na segunda metade do século XIX, perto das cidades de Schwangau e Füssen, no sudoeste da Baviera, a escassas dezenas de quilômetros da fronteira com a Áustria.\n[…]\nFoi construído por Luís II da Baviera no século XIX, inspirado na obra de seu amigo e protegido, o grande compositor Richard Wagner. A arquitectura do castelo possui um estilo fantástico, o qual serviu de inspiração ao \"Castelo da Bela Adormecida\", símbolo dos estúdios Disney. Apesar de não ser permitido fotografar o seu interior, é um dos edifícios mais fotografados da Alemanha e um dos mais populares destinos turísticos europeus, além de também ser considerado o \"cartão postal\" daquele país.\n[…]\nA concepção do edifício foi esboçada por Luís II da Baviera numa carta a Richard Wagner, datada de 31 de maio de 1868;\n[…]\n\"É minha intenção reconstruir a ruína do velho castelo em Hohenschwangau, próximo do Desfiladeiro de Pollat, no verdadeiro espírito dos velhos castelos dos cavaleiros alemães (...) a localização é a mais bela que alguém pode encontrar, sagrada e inacessível, um templo digno para o divino amigo que trouxe a salvação e a verdadeira bênção ao mundo.\"\n[…]\nO castelo é propriedade do estado da Baviera, ao contrário do Castelo de Hohenschwangau que é pertença de Franz, Duque da Baviera. Este edifício inspirou a construção de um outro castelo da Casa de Wittelsbach, o Castelo de Ringberg. O Castelo de Neuschwanstein é contemporâneo do português Palácio da Pena, em Sintra, por vezes referido como \"o Neuschwanstein português' (cerca de 1840).\n[…]\nSchloss Neuschwanstein - o Guia Oficial, Bayerische Schlosseverwaltung,\n[…]\nCastelo de Neuschwanstein\n[…]\nNeuschwanstein O Castelo Dos Contos De Fadas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Teatro Amazonas",
      "descricao": "Teatro de ópera de Manaus, inaugurado em 1896, com cúpula decorada nas cores da bandeira brasileira."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O luxuoso Teatro Amazonas, inaugurado em Manaus no fim do século dezenove, foi erguido com a riqueza de que ciclo econômico?",
    "resposta": "Ciclo da borracha",
    "distratores": [
      "Ciclo do ouro",
      "Ciclo do café",
      "Ciclo do cacau"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
      "https://en.wikipedia.org/wiki/Amazon_Theatre"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
        "situacao": "ok",
        "texto": "Teatro Amazonas é uma casa de ópera localizada em Manaus, no estado do Amazonas, sendo o principal cartão-postal da cidade. Situado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo.\n[…]\nPor ser uma obra singular no Brasil e representar o apogeu de Manaus durante o ciclo da borracha, foi reconhecido como Patrimônio Mundial pela UNESCO em 2026.\n[…]\nManaus estava no auge do ciclo da borracha e era embalada pela riqueza provida da extração do látex amazônico, altamente valorizado pelas indústrias europeias e americanas. O projeto arquitetônico foi escolhido pelo Gabinete Português de Engenharia e Arquitetura de Lisboa em 1883. No entanto, devido as discussões sobre o terreno para a construção e os custos do trabalho, foi iniciado em 1884 com a pedra fundamental.\n[…]\nA decoração interna esteve ao encargo do decorador pernambucano, Crispim do Amaral, com exceção do corredor a área mais luxuosa do edifício entregue ao artista italiano Domenico de Angelis. Coordenadas pelo arquiteto italiano Celestial Sacardim, as obras começaram em 1884, tomaram impulso nos anos de 1890–1891, foram interrompidas, retomadas em 1893 e, finalmente, o Teatro Amazonas foi inaugurado no dia 31 de dezembro de 1896.\n[…]\nA mais importante casa de espetáculos do Amazonas tem, ainda, um museu com peças que ajudam a contar sua história, como as maquetes de óperas do compositor alemão Richard Wagner, concebidas pelo designer e cenógrafo inglês Ashley Martin-Davis, para as montagens do ciclo do “Anel do Nibelungo” em diferentes edições do Festival Amazonas de Ópera (FAO). São oito obras que estão expostas no segundo pavimento.\n[…]\n«Museu do Teatro Amazonas»\n[…]\n«Teatro Amazonas no Youtube»\n[…]\n«Viva Manaus»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_Theatre",
        "situacao": "ok",
        "texto": "The Amazon Theatre (Portuguese: Teatro Amazonas) is an opera house located in Manaus, Brazil, in the heart of the Amazon rainforest. It is the location of the annual Festival Amazonas de Ópera (Amazonas Opera Festival) and the home of the Amazonas Philharmonic Orchestra which regularly rehearses and performs at the Amazon Theatre along with choirs, musical concerts and other performances.\n[…]\nBy 1895, when the masonry work and exterior were completed, the decoration of the interior and the installation of electric lighting could begin more rapidly. The theatre was inaugurated on December 31, 1896, with the first performance occurring on January 7, 1897, with the Italian opera, La Gioconda, by Amilcare Ponchielli.\n[…]\nIt is featured twice in novels by Eva Ibbotson: Journey to the River Sea and A Company of Swans. Both are adventure stories set principally in the city of Manaus (where the theatre is situated) and surroundings in 1912. In the former (children's) book a visiting acting group performs the play, Little Lord Fauntleroy at the theatre, which is briefly described.\n[…]\nThe theatre is mentioned in Daniel Catán's 1996 opera \"Florencia en el Amazonas\" as the location where the titular opera singer Florencia Grimaldi is traveling to give a concert.\n[…]\nThe White Stripes performed in the theater on June 1, 2005. The show was later released on vinyl and DVD formats as Under Amazonian Lights. It was reported to be the first rock show at the theater.\n[…]\nBrazilian Belle Époque, the broader cultural and economic period in which the theatre was built\n[…]\nHistory of Manaus, for the development of the city during the Amazon rubber boom\n[…]\nTeatro da Paz, another major 19th-century opera house in the Brazilian Amazon\n[…]\nAmazon Theatre YouTube\n[…]\nAmazon Theatre Gallery of 19 photos of the Amazon Theatre by Jorge Vismara"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Taj Mahal",
      "descricao": "Mausoléu de mármore branco do século dezessete, construído pelo imperador mogol Shah Jahan às margens do rio Yamuna, na Índia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O imperador mogol Shah Jahan mandou construir o Taj Mahal, de mármore branco, como mausoléu em memória de quem?",
    "resposta": "Sua esposa Mumtaz Mahal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taj_Mahal",
      "https://pt.wikipedia.org/wiki/Taj_Mahal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "The Taj Mahal ( TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his late wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.\n[…]\nConstruction of the mausoleum was completed in 1648, although work on other parts of the complex continued for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2015 would be approximately ₹52.8 billion (US$827 million).\n[…]\nThe Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year while giving birth to their 14th child, Gauhara Begum. Construction started in 1632, and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later.\n[…]\nWhen the structure was partially completed, the first ceremony was held at the mausoleum by Shah Jahan on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The Taj Mahal complex is believed to have been completed in 1653 at a cost estimated at the time to be around ₹32 million, which in 2015 would be approximately ₹52.8 billion (US$827 million).\n[…]\nOfficial website of the Taj Mahal\n[…]\nProfile of the Taj Mahal at UNESCO\n[…]\n\"Outlying Buildings\". Taj Mahal. Archived from the original on 4 February 2015. Retrieved 7 February 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "O Taj Mahal (em hindi: ताज महल) é um mausoléu situado em Agra, na Índia, sendo o mais conhecido dos monumentos do país. Encontra-se classificado pela UNESCO como Patrimônio da Humanidade. Foi anunciado em 2007 como uma das sete maravilhas do mundo moderno.\n[…]\nA obra foi feita entre 1632 e 1653 com a força de cerca de 20 mil homens, trazidos de várias cidades do Oriente, para trabalhar no suntuoso monumento de mármore branco que o imperador Shah Jahan mandou construir em memória de sua esposa favorita, Aryumand Banu Begam, a quem chamava de Mumtaz Mahal (\"A joia do palácio\"). Ela morreu após dar à luz o 14.º filho, tendo o Taj Mahal sido construído sobre seu túmulo, junto ao rio Yamuna.\n[…]\nMausoléu;\n[…]\nA tradição muçulmana proíbe a decoração elaborada das campas, pelo que os corpos de Mumtaz e Xá Jahan descansam numa câmara relativamente simples debaixo da sala principal do Taj Mahal. Estão sepultados segundo um eixo norte-sul, com os rostos inclinados para a direita, em direcção a Meca.[carece de fontes]?\n[…]\nA palavra \"Taj\" provém do persa, linguagem da corte mogol, e significa \"Coroa\", enquanto que \"Mahal\" é uma variante curta de Mumtaz Mahal, o nome formal na corte de Arjumand Banu Begum, cujo significado é \"Primeira dama do palácio\". Taj Mahal, então, refere-se à \"coroa de Mahal\", a amada esposa de Xá Jahan. Já em 1663 o viajante francês François Bernier mencionou o edifício como \"Tage Mehale\".\n[…]\nOs livros islâmicos descrevem a sepultura em ataúdes como \"um gasto inútil, que poderia ser melhor utilizado para alimentar o faminto ou ajudar o necessitado\". Segundo a visão de Aurangzeb, construir um mausoléu novo para Xá Jahan teria sido um desperdício. Por isso sepultou o seu pai junto a Mumtaz Mahal sem mais complicações.\n[…]\n«Fotos do Taj Mahal»"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Touro de Wall Street",
      "descricao": "Escultura de bronze de um touro em posição de ataque, de Arturo Di Modica, no distrito financeiro de Nova York."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1989, o escultor Arturo Di Modica deixou um touro de bronze em Wall Street, sem pedir autorização. A obra foi uma resposta a que crise?",
    "resposta": "Crash da bolsa de 1987",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charging_Bull"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charging_Bull",
        "situacao": "ok",
        "texto": "Charging Bull (sometimes referred to as the Bull of Wall Street or the Bowling Green Bull) is a bronze sculpture that stands on Broadway just north of Bowling Green in the Financial District of Manhattan in New York City. The 7,100-pound (3,200 kg) bronze sculpture, standing 11 feet (3.4 m) tall and measuring 16 feet (4.9 m) long, depicts a bull, the symbol of financial optimism and prosperity.\n[…]\nThe sculpture was created by Italian artist Arturo Di Modica in the wake of the 1987 Black Monday stock market crash. Late in the evening of Thursday, December 14, 1989, Di Modica arrived on Wall Street with Charging Bull on the back of a truck and illegally dropped the sculpture outside of the New York Stock Exchange Building. After being removed by the New York City Police Department later that day, Charging Bull was installed at Bowling Green on December 20, 1989.\n[…]\nThe bull was cast by the Bedi-Makky Art Foundry in Greenpoint, Brooklyn. Di Modica spent $360,000 to create, cast, and install the sculpture following the 1987 stock market crash. The sculpture was Di Modica's idea. Having arrived penniless in the United States in 1970, Di Modica felt indebted to the nation for welcoming him and enabling his career as a successful sculptor.\n[…]\nCharging Bull was intended to inspire each person who came into contact with it to carry on fighting through the hard times after the 1987 stock market crash. Di Modica later recounted to art writer Anthony Haden-Guest, \"My point was to show people that if you want to do something in a moment things are very bad, you can do it. You can do it by yourself. My point was that you must be strong.\"\n[…]\nThe history of the sculpture and its sculptor was presented in the 2014 Italian documentary film Il Toro di Wall Street, released internationally as The Charging Bull. In Mr. Robot, Darlene Alderson (Carly Chaikin) is shown castrating the statue."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Touro_de_Wall_Street",
        "situacao": "ok",
        "texto": "O Touro de Wall Street (conhecido como Charging Bull, em inglês; \"Touro em investida\" em tradução livre) é uma escultura de bronze situada em Bowling Green, no distrito financeiro de Manhattan, na cidade de Nova Iorque, Estados Unidos. A obra pesa 3,5 toneladas, mede 3,4 metros de altura e 4,9 metros de comprimento. Foi idealizada por Arturo di Modica e instalada em dezembro de 1989, como uma form\n[…]\nA escultura representa um touro em posição de ataque, e simboliza um mercado financeiro pujante (bull market). Tornou-se uma atração turística da cidade logo após sua instalação.\n[…]\nModica idealizou a estátua após o crash da bolsa de valores de Nova Iorque de 1987, a \"segunda-feira negra\", como um presente para a cidade, um \"símbolo da força e poder do povo americano\". O artista gastou suas economias, 360 mil dólares, na obra, que foi instalada em 15 de dezembro de 1989 na Broad Street, em frente ao prédio da Bolsa de Valores. A escultura foi apreendida pela polícia de Nova Iorque e levada a um pátio de veículos.\n[…]\nO protesto público que se seguiu levou o Departamento de Parques e Recreação da  cidade a reinstalá-la dois quarteirões ao sul da Bolsa, em Bowling Green, com uma cerimônia em 21 de dezembro de 1989. Ela está voltada para a Broadway, em Whitehall Street.\n[…]\nA estátua foi comparada ao bezerro de ouro adorado pelos israelitas durante seu Êxodo do Egito. Durante o Occupy Wall Street em várias ocasiões um grupo inter-religioso de líderes religiosos liderou uma procissão de uma figura de bezerro de ouro que foi modelado com base no touro. Uma grande pinhata de papel-machê feita por Sebastian Errazuriz para um festival de design de Nova Iorque em 2014 foi concebida para ser uma reminiscência tanto do bezerro de ouro como do Charging Bull.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Antoni Gaudí",
      "descricao": "Arquiteto catalão, 1852-1926, autor da Sagrada Família, da Casa Batlló e do Parque Güell, em Barcelona."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1926, o arquiteto Antoni Gaudí morreu em Barcelona dias depois de ser atropelado por que veículo?",
    "resposta": "Um bonde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD",
      "https://pt.wikipedia.org/wiki/Antoni_Gaud%C3%AD"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD",
        "situacao": "ok",
        "texto": "Antoni Gaudí i Cornet ( gow-DEE,  GOW-dee; Catalan: [ənˈtɔni‿ɣəwˈði]; 25 June 1852 – 10 June 1926) was a Catalan architect and designer, widely known as the greatest exponent of Catalan Modernisme. Gaudí's works have a sui generis style, with most located in Barcelona, including his magnum opus, the Sagrada Família church.\n[…]\nBy the time that the chaplain of the Sagrada Família, Mosén Gil Parés, recognised him on the following day, Gaudí's condition had deteriorated too severely to benefit from additional treatment. Gaudí died on 10 June 1926 at age 73. A large crowd gathered to bid farewell in the chapel of Our Lady of Mount Carmel in the crypt of the Sagrada Família. His gravestone bears this inscription:Latin: Antonius Gaudí Cornet. Reusensis.\n[…]\n[Antoni Gaudí Cornet. From Reus. At the age of 74, a man of exemplary life, and an extraordinary craftsman, the author of this marvelous work, the church, died piously in Barcelona on the tenth day of June 1926; henceforward the ashes of so great a man await the resurrection of the dead. May he rest in peace.]\n[…]\nGiordano, Carlos (2007). Gómez Gimeno, Mária José (ed.). Templo expiatorio de La Sagrada Familia: la obra maestra de Antoni Gaudí [Expiatory Temple of La Sagrada Familia: the masterpiece of Antoni Gaudí] (in Spanish). Barcelona: Mundo Flip.\n[…]\nMartinell, Cèsar (1967). Gaudí, Su vida, su teoría, su obra [Gaudí, His life, his theory, his work] (in Spanish). Barcelona: Colegio de Arquitectos de Cataluña y Baleares. Comisión de Cultura.\n[…]\nTarragona, Josep María (2011). Antoni Gaudí, un arquitecto genial [Antoni Gaudí – a great architect] (in Spanish). Barcelona: Casals. ISBN 978-84-218-2430-6.\n[…]\nQuotations related to Antoni Gaudí at Wikiquote\n[…]\nMedia related to Antoni Gaudí at Wikimedia Commons\n[…]\nOverview of Gaudí's major works\n[…]\nAntoni Plàcid Guillem Gaudí i Cornet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Antoni_Gaud%C3%AD",
        "situacao": "ok",
        "texto": "Antoni Gaudí i Cornet (Reus ou Riudoms, 25 de junho de 1852 – Barcelona, 10 de junho de 1926) foi um famoso arquiteto catalão e figura de ponta do Modernismo catalão. As obras de Gaudí revelam um estilo único e individual e estão em sua maioria na cidade de Barcelona.\n[…]\nAntoni Gaudí trabalhou essencialmente em Barcelona, onde tinha estudado arquitetura. Originário de uma família não muito abastada, Gaudí tendeu para a procura do luxo durante a juventude; no entanto na idade adulta e no final de sua vida essa tendência desapareceu por completo. Quando jovem aderiu ao Movimento Nacionalista da Catalunha e assumiu algumas posições críticas à Igreja Católica, no final da sua vida essa faceta desapareceu. Gaudí nunca se casou.\n[…]\nMorreu aos 73 anos, vítima de atropelamento por um bonde no ano de 1926 em uma avenida de Barcelona. Encontra-se sepultado no Templo Expiatório da Sagrada Família, Barcelona, na Espanha.\n[…]\nGaudí iniciou a carreira profissional ainda na universidade, trabalhando como desenhista para alguns dos mais prestigiados arquitetos de Barcelona à época, como Joan Martorell, Josep Fontserè, Francisco de Paula del Villar y Lozano, Leandre Serrallach e Emili Sala Cortés. Gaudí tinha já uma longa relação com Josep Fontserè, uma vez que a sua família também era de Riudoms e se conheciam há bastante tempo.\n[…]\nBassegoda i Nonell, Juan. Antoni Gaudí (1852-1926). Barcelona: Fundació Caixa de Pensions, 1984. ISBN 84-505-0683-2.\n[…]\nvan Hensbergen, Gijs. Antoni Gaudí. Barcelona: Plaza & Janés, 2002. ISBN 84-01-30507-1.\n[…]\nAntoni Gaudí. Barcelona: Serbal, 1991. ISBN 84-7628-087-4.\n[…]\n«Antoni Gaudi (1852-1926), International Vegetarian Union.» (em inglês)\n[…]\n«Venerabile Servo di Dio Antoni Gaudí i Cornet (1852 - 1926), Dicastero delle Cause dei Santi.» (em italiano)"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Abu Simbel",
      "descricao": "Dois templos escavados na rocha por ordem do faraó Ramsés II, no sul do Egito, transferidos de lugar nos anos 1960."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, os templos de Abu Simbel, no Egito, foram cortados em blocos e remontados num terreno mais alto. Para escapar de quê?",
    "resposta": "Inundação pela represa de Assuã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel",
      "https://pt.wikipedia.org/wiki/Abu_Simbel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel (Arabic: أبو سمبل), Aswan Governorate, Upper Egypt, near the border with Sudan. It is located on the western bank of Lake Nasser, about 230 km (140 mi) southwest of Aswan (about 300 km (190 mi) by road). Its latitude of 22° 20′ 13″ N (22.3369 °N) is 1.0978°, which are 122 km (75.8 ml), south of the t\n[…]\nMax McCullough a special assistant for educational and cultural affairs in the State Department, who was the American representative on the UNESCO committee stated, \"This means that for the first time we have a plan acceptable to everybody and, secondly that we are within striking distance of the money required for the project.\"\n[…]\nTwo international committees containing archaeologists, architects and engineers provided technical advice to the joint venture, while the Egyptian government interests was represented on site by their own resident engineer who was supported by archaeologists from the Department of Antiquities. By the spring of 1964 approximately 1,000 people were being employed by the project at Abu Simbel.\n[…]\nThe single entrance is flanked by four colossal, 20 m (66 ft) statues, each representing Ramesses II seated on a throne and wearing the double crown of Upper and Lower Egypt. The statue to the immediate left of the entrance was damaged in an earthquake, causing the head and torso to fall away; these fallen pieces were not restored to the statue during the relocation but placed at the statue's feet in the positions originally found.\n[…]\nThe rock-cut sanctuary and the two side chambers are connected to the transverse vestibule and are aligned with the axis of the temple. The bas-reliefs on the side walls of the small sanctuary represent scenes of offerings to various gods made either by the pharaoh or the queen.\n[…]\nof the first stage of the project for saving Abu Simbel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Os templos de Abul-Simbel são dois enormes templos esculpidos na rocha em Abu Simbel (em árabe: أبو سمبل), uma vila na província de Assuão, Alto Egito, perto da fronteira com o Sudão. Eles estão situados na margem oeste do Lago Nasser, cerca de 230 km sudoeste de Assuão (cerca de 300 km de carro). O complexo faz parte do Patrimônio Mundial da UNESCO conhecido como \"Monumentos Núbios\", que vão de A\n[…]\nAlgumas estruturas foram até salvas debaixo das águas do Lago Nasser. Hoje, algumas centenas de turistas visitam os templos diariamente. Muitos visitantes também chegam de avião a um campo de aviação que foi construído especialmente para o complexo do templo, ou por estrada saindo de Assuã, a cidade mais próxima.\n[…]\nA entrada única é ladeada por quatro colossais, 20 m estátuas, cada uma representando Ramessés II sentado em um trono e usando a coroa dupla do Alto e do Baixo Egito. A estátua imediatamente à esquerda da entrada foi danificada por um terremoto, fazendo com que a cabeça e o torso caíssem; esses pedaços caídos não foram restaurados na estátua durante a realocação, mas colocados aos pés da estátua nas posições originalmente encontradas.\n[…]\nO salão hipostilo (às vezes também chamado de pronau) tem 18 m de comprimento e 16,7 m de largura e é suportado por oito enormes pilares representando o deificado Ramessés ligado ao deus Osíris, o deus da fertilidade, agricultura, vida após a morte, os mortos, ressurreição, vida e vegetação, para indicar a natureza eterna do faraó. As estátuas colossais ao longo da parede esquerda exibem a coroa branca do Alto Egito, enquanto as do lado oposto usam a coroa dupla do Alto e do Baixo Egito.\n[…]\nAs estátuas, pouco mais de 10 m alto, são do rei e de sua rainha. Em cada lado do portal estão duas estátuas do rei, usando a coroa branca do Alto Egito (colosso do sul) e a coroa dupla (colosso do norte); estes são flanqueados por estátuas da rainha."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Atomium",
      "descricao": "Estrutura de aço formada por nove esferas ligadas por tubos, construída em Bruxelas para a Exposição Universal de 1958."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Atomium, construído para a Exposição Universal de 1958, representa a estrutura cristalina de que metal, ampliada bilhões de vezes?",
    "resposta": "Ferro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atomium",
      "https://pt.wikipedia.org/wiki/Atomium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atomium",
        "situacao": "ok",
        "texto": "The Atomium ( ə-TOH-mee-əm, French: [atɔmjɔm], Dutch: [aːˈtoːmijəm]) is a landmark modernist building in Brussels, Belgium, originally constructed as the centrepiece of the 1958 Brussels World's Fair (Expo 58).\n[…]\nThe Atomium was built as the main pavilion and symbol of the 1958 Brussels World's Fair (Expo 58). Its nine 18-metre (59 ft) spheres depict nine iron atoms in a body-centred cubic (BCC) unit cell, which could, for example, represent an α-iron (ferrite) crystal, magnified 165 billion times. In the 1950s, faith in scientific progress was strong, and the subject was chosen to embody the enthusiasm of the Atomic Age.\n[…]\nThe construction of the Atomium was a technical feat. In January 1955, a first project was presented by the engineer André Waterkeyn, director of the economic department at Fabrimétal, the Federation of Companies in the Metal Fabricating Industry (now known as Agoria). The architects André and Jean Polak were responsible for the concept's architectural transposition, drawing up numerous sketches in the process. The company received assistance from the consulting engineers Artémy S.\n[…]\nBy the turn of the millennium, the state of the building had deteriorated and a comprehensive renovation was sorely needed. Renovation work, carried out by Belgian construction companies Jacques Delens and BESIX, began in March 2004. The Atomium was closed to the public in October of that year, and remained closed until 18 February 2006. Although the Atomium depicts an iron unit cell, the spheres were originally clad in aluminium.\n[…]\nMedia related to Atomium at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atomium",
        "situacao": "ok",
        "texto": "O Atomium foi construído em 1958 em Bruxelas no âmbito da Expo 58, sendo um dos principais cartões postais da Bélgica. Com 102 metros de altura, o Atomium representa um cristal elementar de ferro ampliado 165 milhões de vezes, com tubos que ligam as 9 partes formando 8 vértices.\n[…]\nAs esferas de ferro com cerca de 18 metros de diâmetro estão ligadas por tubos com escadas no seu interior com um comprimento de cerca de 35 metros. As janelas instaladas na esfera do topo oferecem aos visitantes uma vista panoramica da cidade. Outras esferas têm exposições sobre os anos 50. As três esferas, às quais só se tem acesso por tubos verticais, estão fechadas ao público por razões de segurança.\n[…]\nPlanejada inicialmente para durar apenas seis meses pelo arquiteto André Waterkeyn, sobreviveu tornando-se um local de visita obrigatória para os turistas. Muitos consideram o Atomium um ícone nacional, rivalizando com o Manneken Pis. Situa-se junto ao Estádio Balduíno I em Heysel Parque. Junto destes estão o centro de congressos e o Parque da Mini-Europa.\n[…]\nEm março de 2004, começaram as reparações no monumento, com a substituição das folhas de alumínio já gastas pelo tempo. Para ajudar no financiamento das obras, as velhas placas de alumínio foram vendidas ao público como lembrança. O Atomium esteve fechado ao público até janeiro de 2006.\n[…]\n«Sítio oficial do Atomium»\n[…]\n«Webcam Atomium»\n[…]\n«Atomium : visita virtual»\n[…]\natomium struct"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.44 — 2026-10-02**
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
