Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Religiões** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Noventa e Cinco Teses",
      "descricao": "Documento de Martinho Lutero de 1517 que deu início à Reforma Protestante"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, em 1517 Martinho Lutero pregou suas Noventa e Cinco Teses na porta da igreja de que cidade alemã?",
    "resposta": "Wittenberg",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ninety-five_Theses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ninety-five_Theses",
        "situacao": "ok",
        "texto": "The  Ninety-five Theses or  Disputation on the Power and Efficacy of Indulgences is a list of propositions for an academic disputation written in 1517 by Martin Luther, then a professor of moral theology at the University of Wittenberg, Germany. The Theses are retrospectively considered to have launched the Protestant Reformation and the birth of Protestantism, despite various quasi- or proto-Prot\n[…]\nMartin Luther, professor of moral theology at the University of Wittenberg and town preacher, wrote the Ninety-five Theses against the contemporary practice of the church with respect to indulgences. In the Roman Catholic Church, which was practically the only Christian church in Western Europe at the time, indulgences were part of the economy of salvation.\n[…]\nJohann Tetzel was commissioned to preach and offer the indulgence in 1517, and his campaign in cities near Wittenberg drew many Wittenbergers to travel to these cities and purchase them, since sales had been prohibited in Wittenberg and other Saxon cities.\n[…]\nJohann Tetzel responded to the Theses by calling for Luther to be burnt for heresy and having theologian Konrad Wimpina write 106 theses against Luther's work. Tetzel defended these in a disputation before the University of Frankfurt on the Oder in January 1518. 800 copies of the printed disputation were sent to be sold in Wittenberg, but students of the university seized them from the bookseller and burned them.\n[…]\nDuring the 1617 Reformation Jubilee, the centenary of 31 October was celebrated by a procession to the Wittenberg Church, where Luther was believed to have posted the Theses. An engraving was made showing Luther writing the Theses on the door of the church with a gigantic quill. The quill penetrates the head of a lion symbolizing Pope Leo X. In 1668, 31 October was made Reformation Day, an annual holiday in Electoral Saxony, which spread to other Lutheran lands."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/95_Teses",
        "situacao": "ok",
        "texto": "As 95 Teses ou Disputação do Doutor Martinho Lutero sobre o Poder e Eficácia das Indulgências (em latim: Disputatio pro declaratione virtutis indulgentiarum) são uma lista de proposições para uma disputa acadêmica escrita em 1517 por Martinho Lutero, professor de teologia moral da Universidade de Vitemberga, Alemanha, as quais iniciaram a Reforma Protestante, um cisma da Igreja Católica que mudou \n[…]\nMartinho Lutero, professor de teologia moral da Universidade de Vitemberga e pregador na cidade, escreveu as 95 Teses contra a prática contemporânea da igreja com respeito às indulgências. Na Igreja Católica, praticamente a única igreja cristã na Europa na época, as indulgências faziam parte do que era chamado de economia da salvação.\n[…]\nAndreas Karlstadt havia escrito um conjunto dessas teses em abril de 1517, e estas eram mais radicais em termos teológicos do que as de Lutero. Ele as postou na porta da Igreja do Castelo, como Lutero teria feito com as Noventa e Cinco Teses. Karlstadt postou suas teses num momento em que as relíquias da igreja foram colocadas em exibição, e isso pode ter sido considerado um gesto provocativo.\n[…]\nDa mesma forma, Lutero publicou as Noventa e Cinco Teses no Dia de Todos-os-Santos, o dia mais importante do ano para a exibição de relíquias na Igreja do Castelo.\n[…]\nEm Vitemberga, os estatutos universitários exigem que as teses sejam afixadas em cada porta da igreja da cidade, mas Filipe Melâncton, que mencionou pela primeira vez a postagem das teses, só a fez na porta da Igreja do Castelo. Melâncton também afirmou que Lutero postou as teses em 31 de outubro, porém, isso está em conflito com as várias das declarações de Lutero sobre o curso dos acontecimentos.\n[…]\n95 Teses no Projeto Gutenberg\n[…]\n«95 Teses». no Portal Luteranos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Sinagoga Kahal Zur Israel",
      "descricao": "Sinagoga fundada no Recife durante o domínio holandês, no século dezessete"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Fundada durante o domínio holandês e considerada a sinagoga mais antiga das Américas, a Kahal Zur Israel fica em que capital brasileira?",
    "resposta": "Recife",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sinagoga_Kahal_Zur_Israel",
      "https://en.wikipedia.org/wiki/Kahal_Zur_Israel_Synagogue"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sinagoga_Kahal_Zur_Israel",
        "situacao": "ok",
        "texto": "A Sinagoga Kahal Zur Israel (em hebraico:  קהל צור ישראל, \"Rocha de Israel\") é uma sinagoga localizada na cidade do Recife, no estado de Pernambuco, no Brasil. Suas instalações compreendem hoje o Arquivo Histórico Judaico de Pernambuco, no bairro do Recife, no centro histórico da cidade. Foi a primeira sinagoga da América.\n[…]\nA Kahal Zur Israel (Congregação Rochedo de Israel) foi a primeira sinagoga das Américas. Funcionou em Pernambuco durante o período de dominação holandesa (1630 a 1657).\n[…]\nOs primeiros judeus chegados à cidade norte-americana de Nova Iorque, fundadores da primeira sinagoga local, eram refugiados do Recife e membros da sinagoga Kahal Zur Israel.[1]\n[…]\nCom a rendição dos exércitos holandeses, em 27 de janeiro de 1654, uma população de cerca de 400 judeus residentes no Recife teve “o prazo de três meses para liquidar seus negócios e abandonar o país.\n[…]\nFora ele o primeiro judeu a se fixar na que viria a ser a cidade de Nova York, para onde se transferiu através da Holanda. A informação é acrescida por Günter Böhm, salientando que Barsimson, depois do seu regresso do Brasil, saiu da Holanda a bordo do navio Pereboom, tendo aportado na Nova Amsterdã (depois Nova York) em 8 de julho de 1654, um pouco antes da chegada dos 23 judeus vindos do Recife.\n[…]\nSegundo comprovação de pesquisas junto ao arquivo do cemitério da Kahal Kadosh Shearith Israel, ou seja, Santa Congregação “O Remanescente de Israel”, daquela cidade, membros da Congregação Zur Israel do Recife aparecem em documentos da época. Um deles, Benjamin Bueno de Mesquita, um dos 172 subscritores do Haskamot, firmado no Recife em 30 de novembro de 1648, ali falecido em 1683, tem a sua lousa tumular preservada naquele cemitério.\n[…]\nLista de sinagogas mais antigas do mundo\n[…]\nSinagoga Kahal Zur Israel, homepage\n[…]\nArqueologia da Sinagoga Kahal Zur Israel"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kahal_Zur_Israel_Synagogue",
        "situacao": "ok",
        "texto": "The Kahal Zur Israel Synagogue (Hebrew: קהל צור ישראל, lit. 'Congregation Rock of Israel'; Portuguese: Sinagoga Kahal Zur Israel; Dutch: Synagoge Kahal Zur Israel) was a former Jewish synagogue, located at 197 Rua do Bom Jesus (Rua dos Judeus), in the old city of Recife, in the state of Pernambuco, in northeastern Brazil.\n[…]\nIn 1630, Moses Cohen Henriques led a Jewish contingent to Itamaracá, an island off Brazil. From there they settled in Recife. After his retirement circa 1636 from privateering for the Dutch and perhaps pirating, Cohen Henriques assisted his brother, Abraham Cohen, in establishing the Kahal Zur Israel synagogue. It is perhaps one of the only synagogues to have been partially established by a pirate.\n[…]\nThe Jewish museum, designed to resemble synagogues built in the 17th and 18th centuries by Sephardic Jews from Spain and Portugal, opened in 2001. Today, there are four synagogues in Recife. Many Jews choose to celebrate their weddings and Bnei Mitzvot celebrations in the Kahal Zur Israel because of its symbolism as a connection to their long history in the country. The synagogue is also at the center of a broader cultural renaissance.\n[…]\nJosé Luiz Mota Menezes: Sinagoga Kahal Zur Israel, Recife[link removed] José Luiz Mota Menezes' reconstruction of Kahal Zur Israel (Portuguese) 4 April 2020\n[…]\nKahal Zur Israel Synagogue Archived 21 April 2024 at the Wayback Machine Jobson Figueiredo's restoration project\n[…]\nThe Jewish Community of Recife ANU – Museum of the Jewish People\n[…]\nDougherty, Ron November 26, 2019 We Visit Recife ... Brazil Old Recife to the Synagogue"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sinagoga Kahal Zur Israel",
      "descricao": "Sinagoga fundada no Recife durante o domínio holandês, no século dezessete"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1654, um grupo de judeus que deixou o Recife holandês ajudou a fundar a primeira comunidade judaica de que futura metrópole norte-americana?",
    "resposta": "Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kahal_Zur_Israel_Synagogue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kahal_Zur_Israel_Synagogue",
        "situacao": "ok",
        "texto": "The Kahal Zur Israel Synagogue (Hebrew: קהל צור ישראל, lit. 'Congregation Rock of Israel'; Portuguese: Sinagoga Kahal Zur Israel; Dutch: Synagoge Kahal Zur Israel) was a former Jewish synagogue, located at 197 Rua do Bom Jesus (Rua dos Judeus), in the old city of Recife, in the state of Pernambuco, in northeastern Brazil.\n[…]\nIn 1630, Moses Cohen Henriques led a Jewish contingent to Itamaracá, an island off Brazil. From there they settled in Recife. After his retirement circa 1636 from privateering for the Dutch and perhaps pirating, Cohen Henriques assisted his brother, Abraham Cohen, in establishing the Kahal Zur Israel synagogue. It is perhaps one of the only synagogues to have been partially established by a pirate.\n[…]\nFrom 1636 to 1654, the synagogue functioned on the site of the houses no. 197 and 203 Rua do Bom Jesus (formerly Rua dos Judeus, lit. 'Street of the Jews'). It flourished in the mid-17th century when the Dutch briefly controlled this part of northeastern Brazil. The synagogue then served a community of approximately 1,450 Jews. It had a cantor, Josue Velosino, and a rabbi, Isaac Aboab da Fonseca, sent to Recife in 1642.\n[…]\nThe Jewish museum, designed to resemble synagogues built in the 17th and 18th centuries by Sephardic Jews from Spain and Portugal, opened in 2001. Today, there are four synagogues in Recife. Many Jews choose to celebrate their weddings and Bnei Mitzvot celebrations in the Kahal Zur Israel because of its symbolism as a connection to their long history in the country. The synagogue is also at the center of a broader cultural renaissance.\n[…]\nJosé Luiz Mota Menezes: Sinagoga Kahal Zur Israel, Recife[link removed] José Luiz Mota Menezes' reconstruction of Kahal Zur Israel (Portuguese) 4 April 2020\n[…]\nThe Jewish Community of Recife ANU – Museum of the Jewish People"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sinagoga_Kahal_Zur_Israel",
        "situacao": "ok",
        "texto": "A Sinagoga Kahal Zur Israel (em hebraico:  קהל צור ישראל, \"Rocha de Israel\") é uma sinagoga localizada na cidade do Recife, no estado de Pernambuco, no Brasil. Suas instalações compreendem hoje o Arquivo Histórico Judaico de Pernambuco, no bairro do Recife, no centro histórico da cidade. Foi a primeira sinagoga da América.\n[…]\nA Kahal Zur Israel (Congregação Rochedo de Israel) foi a primeira sinagoga das Américas. Funcionou em Pernambuco durante o período de dominação holandesa (1630 a 1657).\n[…]\nO desembarque ocorreu em Nova Amsterdã, atual Nova York, onde os judeus formaram a Congregação Shearith Israel, a primeira comunidade judaica da América do Norte.\n[…]\nOs primeiros judeus chegados à cidade norte-americana de Nova Iorque, fundadores da primeira sinagoga local, eram refugiados do Recife e membros da sinagoga Kahal Zur Israel.[1]\n[…]\n“Erguido pelo Estado de Nova York em homenagem à memória dos vinte e três homens, mulheres e crianças que aqui desembarcaram em setembro de 1654 e fundaram a primeira comunidade judaica da América do Norte”.\n[…]\nO Rosh Hashanah (ano novo judaico), no ano de 5415, caiu em 12 de setembro, e os adultos entre esses judeus, juntos com muitos outros que já estavam em a Nova Amsterdã, bem podiam ter dirigido nesse dia o primeiro dos cultos divinos a realizar-se na Ilha de Manhattan. Esses vinte e três judeus, refugiados do Brasil, foram os fundadores da primeira comunidade judaica de Nova York.\n[…]\nFora ele o primeiro judeu a se fixar na que viria a ser a cidade de Nova York, para onde se transferiu através da Holanda. A informação é acrescida por Günter Böhm, salientando que Barsimson, depois do seu regresso do Brasil, saiu da Holanda a bordo do navio Pereboom, tendo aportado na Nova Amsterdã (depois Nova York) em 8 de julho de 1654, um pouco antes da chegada dos 23 judeus vindos do Recife.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Basílica da Natividade",
      "descricao": "Igreja cristã erguida sobre a gruta onde a tradição situa o nascimento de Jesus"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade da Cisjordânia fica a Basílica da Natividade, erguida sobre a gruta onde a tradição situa o nascimento de Jesus?",
    "resposta": "Belém",
    "fonte": [
      "https://en.wikipedia.org/wiki/Church_of_the_Nativity"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_the_Nativity",
        "situacao": "ok",
        "texto": "The Church of the Nativity, or Basilica of the Nativity, is a basilica located in Bethlehem, West Bank, Palestine. The grotto holds a prominent religious significance to Christians of various denominations as the birthplace of Jesus. The grotto is the oldest site continuously used as a place of worship in Christianity, and the basilica is the oldest major church in the Holy Land.\n[…]\nThe centrepiece of the Nativity complex is the Grotto of the Nativity, a cave which enshrines the site where Jesus is said to have been born.\n[…]\nA number of ancient trough-shaped tombs can be seen in the Catholic-owned caves adjacent to the Nativity Grotto and St Jerome's Cave, some of them inside the Chapel of the Innocents; more tombs can be seen on the southern, Greek-Orthodox side of the Basilica of the Nativity, also presented as being those of the infants murdered by Herod.\n[…]\n18 and 19 January for the Armenian Apostolic Church, which combines the celebration of the Nativity with that of the Baptism of Jesus into the Armenian Feast of Theophany on 6 January, according to the early traditions of Eastern Christianity, but follows the rules of the Armenian Patriarchate of Jerusalem in its calculations (6 January Julian style corresponds to 19 January Gregorian style).\n[…]\nThe patriarch carries a figurine of the Baby Jesus and places it on the silver star in the Nativity Grotto under the basilica.\n[…]\nNativity of Jesus\n[…]\nNativity scene\n[…]\nBianca e Gustav Kühnel, The Church of the Nativity in Bethlehem. The Crusader Lining of an Early Christian Basilica, Regensburg, 2019.\n[…]\nWinfried Weber, abstract of Reflections on the reconstruction of the Constantine Church of the Nativity in Bethlehem. It presents a reconsideration of the Constantinian eastern ending of the church: a polygonal baptistery included in the basilica, rather than a tall octagonal tower rising high above it. ما"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bas%C3%ADlica_da_Natividade",
        "situacao": "ok",
        "texto": "A Basílica da Natividade (em hebraico: כנסיית המולד, e em árabe: كنيسة المهد), também conhecida como Igreja da Natividade, localizada em Belém, no Estado de Israel, especificamente no território palestino da Cisjordânia, é uma das mais antigas igrejas ainda em uso no mundo. Sua estrutura foi construída sobre uma caverna que a tradição cristã marca como o local de nascimento de Jesus.\n[…]\nO local sagrado conhecida como a Gruta da Natividade, em que a Igreja da Natividade fica no topo, é hoje associado com a caverna em que o nascimento de Jesus de Nazaré ocorreu. Em 135 d.C., o imperador romano Adriano ordenou a construção de um local de culto para Adônis, o deus grego da beleza e do desejo.\n[…]\nUm padre da Igreja, Jerônimo, observou antes de sua morte, em 420 d.C., que a caverna da natividade estava em um ponto consagrado pelos pagãos ao culto de Adônis, e que um bosque agradável foi plantado lá, a fim de acabar com a memória de Jesus Cristo.\n[…]\n100-165 d.C.), que observou em sua obra Diálogo com Trifão que a Sagrada Família (José, Maria e o menino Jesus) se refugiou em uma caverna fora da cidade:\"José pegou seus aposentos em uma determinada caverna perto da aldeia (Belém), e enquanto eles estavam lá Maria deu à luz o Cristo e colocou-o numa manjedoura, e aqui os Magos que vieram da Arábia encontraram ele.\" (capítulo LXXVIII).Além disso, o filósofo grego Orígenes de Alexandria (185 d.C.\n[…]\nEm 2002, Israel invadiu Belém (que fica em território palestino) em busca de militantes muçulmanos. Um grupo deles se refugiou dentro da basílica da Natividade e acabou ficando por lá com alguns civis por 39 dias – enquanto os israelenses fizeram um cerco à igreja exigindo a rendição dos militantes muçulmanos – que acabaram sendo exilados na Europa e na faixa de Gaza.\n[…]\n«A Basílica da Natividade». www.italiamiga.com.br",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Igrejas de Lalibela",
      "descricao": "Conjunto de igrejas cristãs ortodoxas escavadas na rocha na cidade de Lalibela, por volta dos séculos doze e treze"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que país africano ficam as igrejas de Lalibela, talhadas inteiramente na rocha por cristãos na Idade Média?",
    "resposta": "Etiópia",
    "distratores": [
      "Egito",
      "Sudão",
      "Quênia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rock-Hewn_Churches,_Lalibela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rock-Hewn_Churches,_Lalibela",
        "situacao": "ok",
        "texto": "The eleven Rock-hewn Churches of Lalibela are monolithic churches located in the western Ethiopian Highlands near the town of Lalibela, named after the late-12th and early-13th century King Gebre Meskel Lalibela of the Zagwe dynasty, who commissioned the massive building project of 11 rock-hewn churches to recreate the holy city of Jerusalem in his own kingdom.\n[…]\nThe site of the rock-hewn churches of Lalibela was first included on the UNESCO World Heritage List in 1978.\n[…]\nThe rock-hewn churches at Lalibela are made through a subtractive processes in which space is created by removing material. Out of the 11 churches, 4 are free-standing (monolithic) and 7 share a wall with the mountain out of which they are carved. The churches are each unique, giving the site an architectural diversity that is evident by the human figures of bas-reliefs inside Bet Golgotha, and the colorful paintings of geometrical designs and biblical scenes in Bet Mariam.\n[…]\nThe Churches of Lalibela hold important religious significance for Ethiopian Orthodox Christians. Together they form a pilgrimage site with particular spiritual and symbolic value, with a layout representing the holy city of Jerusalem. The site continues to be used for daily worship and prayer, the celebration of religious festivals like Timkat and Genna, as a home to clergy, and as a place which increasingly brings together religious adherents and leaders every year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Igrejas_rupestres_de_Lalibela",
        "situacao": "ok",
        "texto": "As igrejas escavadas na rocha de Lalibela constituem um Patrimônio Cultural da Humanidade situado na Etiópia, a 640 km ao norte da capital, Adis Abeba, e a 1 500 m de altitude.\n[…]\nOnze igrejas e um mosteiro, além de vários sepulcros e outros lugares sagrados formam uma cidade labiríntica escavada no subsolo. Cada um destes templos foi talhado na rocha da montanha, como se fossem esculturas. O templo de São Jorge, um monólito em forma de cruz grega, é o principal.\n[…]\nNo século XII, o rei Lalibela apresentou-se como herdeiro da dinastia salomónica — estirpe dinástica criada por Menelique I, filho do rei Salomão e da rainha de Sabá — e ordenou a escavação de vários templos na rocha vulcânica a muitos metros de profundidade, dando início às construções do local.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Santo Agostinho",
      "descricao": "Teólogo e bispo cristão dos séculos quatro e cinco, autor das Confissões"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Santo Agostinho, autor das Confissões, foi bispo da cidade de Hipona. Em que país atual ficava essa cidade?",
    "resposta": "Argélia",
    "distratores": [
      "Tunísia",
      "Marrocos",
      "Líbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hippo_Regius",
      "https://pt.wikipedia.org/wiki/Agostinho_de_Hipona"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hippo_Regius",
        "situacao": "ok",
        "texto": "Hippo Regius (also known as Hippo or Hippone) is the ancient name of the modern city of Annaba, Algeria. It served as an important city for the Phoenicians, Berbers, Romans, and Vandals. Hippo was the capital city of the Vandal Kingdom from AD 435 to 439. After the Vandal capture of Carthage in 439, Carthage became the capital.\n[…]\nThree church councils were held at Hippo (393, 394, 426) and more synods – also in 397 (two sessions, June and September) and 401, all under Aurelius.\n[…]\nThe synods of the Ancient (North) African church were held, with but few exceptions (e.g. Hippo, 393; Milevum, 402) at Carthage. We know from the letters of Saint Cyprian that, except in time of persecution, the African bishops met at least once a year, in the springtime, and sometimes again in the autumn. Six or seven synods, for instance, were held under St. Cyprian's presidency during the decade of his administration (249–258), and more than fifteen under Aurelius (391–429)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Agostinho_de_Hipona",
        "situacao": "ok",
        "texto": "Aurélio Agostinho de Hipona (em latim: Aurelius Augustinus Hipponensis; Tagaste, 13 de novembro de 354 – Hipona, 28 de agosto de 430), conhecido universalmente como Santo Agostinho, foi um dos mais importantes teólogos e filósofos nos primeiros séculos do cristianismo, cujas obras foram muito influentes no desenvolvimento do cristianismo e filosofia ocidental. Foi bispo de Hipona, uma cidade na pr\n[…]\nGrande parte do que sabemos sobre os anos finais de Agostinho foi relatada por seu amigo Possídio, o bispo de Calama (moderna Guelma, na Argélia), em sua obra Sancti Augustini Vita. Possídio admirava Agostinho como uma pessoa intelectualmente poderosa e de retórica arrebatadora que aproveitava todas as oportunidades para defender o cristianismo contra seus detratores.\n[…]\nPorém, uma passagem de sua \"Cidade de Deus\" sobre o Apocalipse pode indicar que Agostinho de fato acreditava numa exceção para crianças pequenas nascidas de pais cristãos.\n[…]\nNo entanto, uma passagem de sua Cidade de Deus, referente ao Apocalipse, pode indicar que Agostinho acreditava em uma exceção para crianças nascidas de pais cristãos.\n[…]\nAgostinho tornou-se bispo coadjutor de Hipona em 395 e, como acreditava que a conversão deveria ser voluntária, seus apelos aos donatistas eram verbais. Durante vários anos, ele usou propaganda popular, debate, apelo pessoal, Concílios Gerais, apelos ao imperador e pressão política para trazer os donatistas de volta à união com os católicos, mas todas as tentativas falharam.\n[…]\nAlém destas, Agostinho é também bastante conhecido por suas \"Confissões\", que é um relato pessoal de seus primeiros anos, e pela \"Cidade de Deus\" (De Civitate Dei; em 22 livros), que ele escreveu para restaurar a confiança aos seus companheiros cristãos abalados pelo saque de Roma pelos visigodos em 410.\n[…]\nObras de Santo Agostinho na Biblioteca Nacional Digital"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Palácio de Potala",
      "descricao": "Palácio no Tibete que foi residência oficial dos dalai-lamas"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Construído no alto de uma colina, o Palácio de Potala, antiga residência dos dalai-lamas, fica em que cidade?",
    "resposta": "Lhasa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Potala_Palace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Potala_Palace",
        "situacao": "ok",
        "texto": "Potala Palace (Tibetan: ཕོ་བྲང་པོ་ཏ་ལ་, Wylie: pho brang po ta la; simplified Chinese: 布达拉宫; traditional Chinese: 布達拉宮; pinyin: Bùdálā Gōng) is a museum complex in Lhasa, the capital of the Tibet Autonomous Region of China. It was formerly the winter palace of the Dalai Lamas, and from 1649 until 1959 served as the Dalai Lamas' residence. The palace complex became a museum following the annexation\n[…]\nThe Dalai Lama inhabited an estate at Drepung Monastery known as Ganden Podrang. During 1621 Lhasa was made the jurisdiction of Ganden Podrang by Tsang. During the third month of 1642 Gushri Khan Dhamma King, Holder of the Faith, had taken from the  Sde-srid Tsang-pa regime of the Garma Gagyu Sect   (Tsang) by military forces the places in Tibet, which was the Land of Wooden Doors, held by that governship; and then offered the thirteen parts of Tibet, which is the whole, to the Dalai Lama.\n[…]\nNgawang Lozang Gyatso, the Great Fifth Dalai Lama, started the construction of the modern Potala Palace in 1645, after one of his spiritual advisers, Konchog Chophel, pointed out that the site was ideal as a seat of government, situated as it is between Drepung and Sera monasteries and the old city of Lhasa.\n[…]\nLhasa Mass Art Museum\n[…]\nLhasa Zhol Pillar\n[…]\nPatala, Patala/Potala\n[…]\nDas, Sarat Chandra. Lhasa and Central Tibet. (1902). Edited by W. W. Rockhill. Reprint: Mehra Offset Press, Delhi (1988), pp. 145–146; 166–169; 262–263 and illustration opposite p. 154.\n[…]\nLarsen and Sinding-Larsen (2001). The Lhasa Atlas: Traditional Tibetan Architecture and Landscape, Knud Larsen and Amund Sinding-Larsen. Shambhala Books, Boston. ISBN 1-57062-867-X.\n[…]\nYule, Henry; Waddell, Lawrence. This article incorporates text from a publication now in the public domain: Chisholm, Hugh, ed. (1911). \"Lhasa\". Encyclopædia Britannica. Vol. 16 (11th ed.). Cambridge University Press. pp. 529–532. (See p. 530.)\n[…]\nThe Potala palace (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_de_Potala",
        "situacao": "ok",
        "texto": "O Palácio de Potala (em tibetano: =པོ་ཏ་ལ, Wylie: Po ta la; no chinês simplificado: 布达拉宫, no chinês tradicional: 布達拉宮; pinyin: Bùdálā Gōng) está localizado em Lassa, no Tibete, ocupado pela China em 1950. Foi a principal residência do Dalai Lama, até à fuga do 14º Dalai Lama para Dharamsala, Índia, depois de uma revolta falhada, em 1959. Atualmente o palácio é um museu estadual da China. Recebeu o\n[…]\nConstruído a uma altitude de 3.700 m (12.100 pés), do lado da colina Marpo Ri, a Montanha Encarnada, no centro do Vale de Lassa, o Palácio de Potala, com as suas vastas muralhas interiores apenas quebradas nas partes superiores por filas retas de muitas janelas, e os seus telhados planos em vários níveis, não é diferente de uma fortaleza na sua aparência. Na base Sul da rocha fica um grande espaço encerrado por muros e portões, com grandes pórticos no lado interior.\n[…]\nAdicionalmente, o Templo Putuo Zongcheng chinês, construído entre 1767 e 1771, foi inspirado no Palácio de Potala.\n[…]\nA galeria central principal do Palácio Encarnado é a Grande Galeria Oeste, a qual consiste em quatro grandes capelas que proclamam a glória e o poder do construtor do Potala, o 5.º Dalai Lama. A galeria é notável pelos seus refinados murais reminiscentes das miniaturas persas, representando eventos da vida do quinto Dalai Lama. A famosa cena da sua visita ao Imperador Shun Zhi em Pequim fica localizada na parede leste, do lado de fora da entrada.\n[…]\nA sepultura do 13º Dalai Lama fica localizada a Oeste da Grande Galeria Oeste e só pode ser alcançada a partir de um piso superior e com a companhia de um monge ou de um guia do Potala. Construida em 1933, a gigantesca stupa contém joias principescas e uma tonelada de ouro maciço. Tem 14 metros (46 pés) de altura. Entre as ofertas votivas encontram-se presas de elefantes da Índia, leões e vasos de porcelana e um pagode feito com mais de 200.000 pérolas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Budas de Bamiyan",
      "descricao": "Duas estátuas gigantes de Buda esculpidas num penhasco do vale de Bamiyan e destruídas em 2001"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Esculpidas num penhasco por volta do século seis e destruídas em 2001, as estátuas gigantes dos Budas de Bamiyan ficavam em que país?",
    "resposta": "Afeganistão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Buddhas_of_Bamiyan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Buddhas_of_Bamiyan",
        "situacao": "ok",
        "texto": "The Buddhas of Bamiyan (Dari: تندیس‌های بودا در بامیان) were two monumental Buddhist reliefs in the Bamiyan Valley of Afghanistan, carved possibly around the 6th-century.\n[…]\nLater, on 18 March 2001, then Taliban ambassador-at-large Sayed Rahmatullah Hashemi said that the destruction of the statues was carried out by the Head Council of Scholars after a Swedish monuments expert proposed to restore the statues' heads. Rahmatullah Hashemi is reported as saying: \"When the Afghan head council asked them to provide the money to feed the children instead of fixing the statues, they refused and said, 'No, the money is just for the statues, not for the children'.\n[…]\nThe destruction of the Bamiyan Buddhas despite protests from the international community has been described by Michael Falser, a heritage expert at the Center for Transcultural Studies in Germany, as an attack by the Taliban against the globalising concept of \"cultural heritage\". The UNESCO Director-General Kōichirō Matsuura called the destruction a \"...crime against culture.\n[…]\nIn 2001 in China, carving of a 37-metre (121 ft) high Buddha was initiated in Sichuan, which is the same height as the smaller of the two Bamiyan Buddhas. It was funded by a Chinese businessman, Liang Simian. The project appears to have been given up for unknown reasons.\n[…]\nThe 2022 Indian film Ram Setu shows the destruction of the Buddhas of Bamiyan and an archaeological team's subsequent attempts to salvage the remains where they discover a fictional treasure belonging to Raja Dahir and a colossal reclining Buddha (which has been described in the writings of Xuanzang but has not actually been discovered)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Budas_de_Bami%C3%A3",
        "situacao": "ok",
        "texto": "A Paisagem Cultural e Vestígios Arqueológicos do Vale de Bamiã (em persa: بامیان; romaniz.: Bāmīyān), localiza-se  a 240 km de Cabul, no Afeganistão, são um local que contém diversos testemunhos culturais do Reino da Báctria, dos séculos I a XIII, nomeadamente da corrente Gandara da arte budista.\n[…]\nOs monges dos mosteiros viviam como eremitas, em pequenas cavernas esculpidas nas laterais das rochas de Bamiã. Muitos desses monges embelezavam suas cavernas com estatuária religiosa e produziam frescos (ou Afrescos - português brasileiro).\n[…]\nAs duas estátuas mais proeminentes eram os dois Budas, medindo 55 e 38 metros de altura, os maiores exemplares de Budas em pé esculpidos no mundo.\n[…]\nO peregrino chinês budista Hsüan-tsang viajou pela área por volta de 630 e descreveu os Budas de Bamiã como um florescente centro Budista \"com mais de dez mosteiros e mais de mil monges\". Ele destacou que ambas as estátuas do Buda estavam \"decoradas com ouro e pedras preciosas\".\n[…]\nEm março de 2001, por ordem do governo fundamentalista Talibã, foram destruídas as gigantescas estátuas dos Budas de Bamiã - a maior das quais tinha 53 metros de altura e era o Buda mais alto do mundo - que haviam sido escavadas em nichos na rocha, por volta do século V. A destruição, segundo um dos homens que foi obrigado a participar, Mirza Hussain, durou cerca de 25 dias, utilizando armas e dinamites.\n[…]\nEmbora as figuras dos dois Budas gigantes estejam quase completamente destruídas, os seus contornos e algumas feições são ainda reconhecíveis entre os restos. É também possível, ainda, explorar as cavernas dos monges e as passagens que as ligam. Como parte do esforço internacional para reconstruir o Afeganistão depois da guerra do Talibã, o governo do Japão comprometeu-se a reconstruir os dois Budas gigantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Dalai-lama",
      "descricao": "Título do principal líder espiritual da escola Gelug do budismo tibetano"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1959, após uma revolta fracassada no Tibete, o décimo quarto dalai-lama fugiu para o exílio em que país?",
    "resposta": "Índia",
    "fonte": [
      "https://en.wikipedia.org/wiki/14th_Dalai_Lama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/14th_Dalai_Lama",
        "situacao": "ok",
        "texto": "The 14th Dalai Lama (born Lhamo Thondup, 6 July 1935; full spiritual name: Jetsun Jamphel Ngawang Lobsang Yeshe Tenzin Gyatso, shortened as Tenzin Gyatso) is the current Dalai Lama, the highest spiritual leader and head of Tibetan Buddhism. He served as the resident spiritual and temporal leader of Tibet before 1959, and subsequently led the Tibetan government in exile represented by the Central T\n[…]\nDuring the 1959 Tibetan uprising, the Dalai Lama escaped to India, where he continues to live. On 29 April 1959, the Dalai Lama established the independent Tibetan government in exile in the north Indian hill station of Mussoorie, which then moved in May 1960 to Dharamshala, where he resides. He retired as political head in 2011 to make way for a democratic government, the Central Tibetan Administration.\n[…]\nAt the outset of the 1959 Tibetan uprising, fearing for his life, the Dalai Lama and his retinue fled Tibet with the help of the CIA's Special Activities Division, crossing into India on 30 March 1959, reaching Tezpur in Assam on 18 April. Some time later he set up the Government of Tibet in Exile in Dharamshala, India, which is often referred to as \"Little Lhasa\".\n[…]\nThe Dalai Lama maintains close ties with India. In 2008, the Dalai Lama said that Arunachal Pradesh, partially claimed by China, is part of India, citing the disputed 1914 Simla Accord.\n[…]\nDalai Lama Awakening (2014)\n[…]\nIn a February 2023 video, the Dalai Lama was seen kissing a boy on the lips and asking the child to suck his tongue. The incident took place at his temple in Dharamshala, Himachal Pradesh, India. Nearly 100 students were in attendance, as well as the boy's mother, a trustee of the event's organiser. Her son had requested a hug from the Dalai Lama, who then asked for and received a kiss from the child, pulling him closer to touch lips.\n[…]\nTeachings by the Dalai Lama\n[…]\n14th Dalai Lama on Nobelprize.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenzin_Gyatso",
        "situacao": "ok",
        "texto": "O 14.º Dalai Lama (nome espiritual Jetsun Jamphel Ngawang Lobsang Yeshe Tenzin Gyatso, conhecido como Tenzin Gyatso; nascido Lhamo Thondup), conhecido como Gyalwa Rinpoche entre o povo tibetano, é o atual Dalai Lama, o mais alto líder espiritual e ex-chefe de Estado do Tibete. Nascido em 6 de julho de 1935, ou, no calendário tibetano, no ano do Porco-Madeira, 5.º mês, 5.º dia.\n[…]\nApós a anexação do Tibete pela República Popular da China, durante a revolta tibetana de 1959, o Dalai Lama fugiu para a Índia, onde atualmente vive no exílio, permanecendo o líder espiritual mais importante do Tibete. O Dalai Lama defende o bem-estar dos tibetanos enquanto continua a apelar para a Abordagem do Caminho do Meio com a China para resolver pacificamente a questão do Tibete; \"O povo tibetano não aceita o status atual do Tibete sob a República Popular da China.\n[…]\nNo início da revolta tibetana de 1959, temendo por sua vida, o Dalai Lama e sua comitiva fugiram do Tibete com a ajuda da Divisão de Atividades Especiais da CIA, cruzando para a Índia em 30 de março de 1959, chegando a Tezpur em Assam em 18 de abril. Algum tempo depois, ele estabeleceu o Governo do Tibete no Exílio em Dharamshala, Índia, que é muitas vezes referido como \"Pequeno Lhasa\".\n[…]\nO décimo quarto Dalai Lama foi criado em uma família carnívora, mas se converteu ao vegetarianismo depois de chegar à Índia, onde os vegetais são muito mais facilmente disponíveis e o vegetarianismo é generalizado. Ele passou muitos anos como vegetariano, mas depois de contrair hepatite na Índia e sofrer de fraqueza, seus médicos lhe disseram para voltar a comer carne, o que agora ele come duas vezes por semana.\n[…]\nEm 2008, o Dalai Lama disse pela primeira vez que o território que a Índia reivindica e administra como parte de Arunachal Pradesh faz parte da Índia, citando o disputado Acordo de Simla de 1914.\n[…]\nFrases pelo Dalai Lama",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Apocalipse",
      "descricao": "Último livro do Novo Testamento, atribuído a um autor chamado João"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Segundo o próprio texto, em que ilha grega João recebeu as visões que deram origem ao livro do Apocalipse?",
    "resposta": "Patmos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Book_of_Revelation",
      "https://en.wikipedia.org/wiki/Patmos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Book_of_Revelation",
        "situacao": "ok",
        "texto": "The Book of Revelation, also known as the Book of the Apocalypse or the Apocalypse of John, is canonically the last book of the New Testament. Written in Greek, its title is derived from the first word of the text, apocalypse (Koine Greek: ἀποκάλυψις, romanized: apokálypsis), which means \"revelation\" or \"unveiling\". The Book of Revelation is the only apocalyptic book in the New Testament canon, an\n[…]\nThe book spans three literary genres: the epistolary, the apocalyptic, and the prophetic. It begins with John, on the island of Patmos in the Aegean Sea, addressing letters to the \"Seven Churches of Asia\" with exhortations from Christ. He then describes a series of prophetic and symbolic visions preceding the Second Coming of Jesus Christ.\n[…]\nThe author names himself as simply \"John\" in the text, and states in Revelation 1:9 that he is on the island of Patmos, and so he is conventionally called \"John of Patmos\". He was a Jewish–Christian prophet, probably belonging to a group of such prophets, and was accepted by the congregations to whom he addressed his letter. The New Testament canon has four other \"Johannine works\" ascribed to authors named John, and a tradition dating from Irenaeus (c. 130 – c.\n[…]\n202 AD) identifies John the Apostle as the author of all five. The idea of a Johannine community has been increasingly challenged, and there is no consensus among scholars today. John of Patmos wrote the Book of Revelation separately.\n[…]\nThe Book of Revelation is an apocalyptic prophecy, with an epistolary introduction addressed to the \"Seven Churches\" of Asia Minor with exhortations from Christ. The seven cities where these churches were located are close together, and the island of Patmos is near the western coast of the Anatolian Peninsula. The first word of the text, apocalypse (Koine Greek: ἀποκάλυψις, translit.\n[…]\nSchem, A. J. (1879). \"Apocalypse\". The American Cyclopædia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Patmos",
        "situacao": "ok",
        "texto": "Patmos (Greek: Πάτμος, pronounced [ˈpatmos]) is a Greek island in the Aegean Sea. It is famous as the place where, according to Christian belief, John of Patmos received the vision found in the Book of Revelation of the New Testament, and where the book was written.\n[…]\nIn 1999, the island's historic center, Chora, along with the Monastery of Saint John the Theologian and the Cave of the Apocalypse were declared World Heritage Sites by UNESCO because of their significance in Christianity and the preservation of ancient religious ceremonies on the island. The monastery was founded by Christodoulos Latrinos. Patmos is also home to the Patmian School, a notable Greek seminary.\n[…]\nPatmos is mentioned in the Book of Revelation, the last book of the Christian Bible. The book's introduction states that its author, John, was on Patmos when he was given (and recorded) a vision from Jesus. Early Christian tradition identified this writer John of Patmos as John the Apostle. For this reason, Patmos is a destination for Christian pilgrimage.\n[…]\nPatmos's economy is largely reliant on tourism during the summer months with Christian pilgrims frequently visiting due to the island's connection with the apostle John and the writing of the Book of Revelation.\n[…]\nJohn of Patmos, author of the Book of Revelation\n[…]\nPatmos is twinned with:\n[…]\nPatmos, Arkansas\n[…]\nTom Stone: The Summer of My Greek Taverna: A Memoir, Simon & Schuster, New York NY 2003, ISBN 0-7432-4771-X (Stone brings readers into the tiny Greek island world of Patmos.)\n[…]\nPatmos Web (English)\n[…]\nThe Historic Centre (Chorá) with the Monastery of Saint-John the Theologian and the Cave of the Apocalypse on the Island of Pátmos – UNESCO Collection on Google Arts and Culture\n[…]\nPatmos Travel Guide(English)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Apocalipse_%28B%C3%ADblia%29",
        "situacao": "ok",
        "texto": "O Livro do Apocalipse, ou Livro da Revelação (também chamado de \"Apocalipse de João\"), é o último livro do Novo Testamento (e, portanto, o último livro da Bíblia Cristã). Escrito em grego koiné, seu título é derivado da primeira palavra do texto, \"apokalypsis\", que significa \"apocalipse\", \"revelação\" ou \"desvendamento\". É descrito como o único livro apocalíptico no cânone do Novo Testamento. Ele o\n[…]\nA pesquisa moderna geralmente adota uma visão diferente, com muitos estudiosos considerando que nada pode ser conhecido sobre o autor, exceto que ele era um profeta cristão. Os estudiosos teológicos modernos caracterizam o autor do Livro do Apocalipse como \"João de Patmos\". A maioria das fontes tradicionais data o livro ao reinado do imperador romano Domiciano (81–96 d.C.), e as evidências tendem a confirmar isso.\n[…]\nO livro abrange três gêneros literários: o epistolar, o apocalíptico e o profético. Ele começa com João, na ilha de Patmos, no Mar Egeu, dirigindo cartas às \"Sete Igrejas da Ásia\". Em seguida, descreve uma série de visões proféticas, incluindo figuras como o Dragão de Sete Cabeças, a Serpente e a Besta, que culminam na Segunda Vinda de Jesus.\n[…]\nEntretanto, correntes há que acreditam que o João mencionado aqui (referido como \"João de Patmos\") é outro indivíduo, diferente do apóstolo João. De acordo com Clarence Larkin, a circunstância de o estilo deste livro ser totalmente diferente das epístolas de João é porque o autor do livro é Jesus Cristo, sendo João apenas seu escriba.\n[…]\nSegundo o espiritismo, em desdobramento (\"Eu fui arrebatado em Espírito\" Apocalipse 1:10), João recebera as revelações na forma de figuras vividas e imagens simbólicas, que se assemelham àquelas encontradas nos livros proféticos do Antigo Testamento. Ele registra suas visões na ordem em que as recebeu, muitas das quais retratam os mesmos acontecimentos através de diferentes perspectivas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Mesquita-Catedral de Córdoba",
      "descricao": "Antiga grande mesquita da Espanha muçulmana, transformada em catedral cristã no século treze"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que cidade espanhola fica a antiga Grande Mesquita que, depois da reconquista cristã no século treze, passou a abrigar uma catedral?",
    "resposta": "Córdoba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mesquita-Catedral_de_Córdoba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita-Catedral_de_Córdoba",
        "situacao": "ok",
        "texto": "A Mesquita-Catedral de Córdova oficialmente conhecida pelo seu nome eclesiástico, a Catedral de Nossa Senhora da Assunção (em espanhol: Catedral de Nuestra Señora de la Asunción) é a catedral da Diocese Católica Romana de Córdoba dedicada à Assunção de Maria e localizado na região espanhola da Andaluzia. Devido ao seu status como uma antiga mesquita islâmica, também é conhecida como Mesquita e com\n[…]\nDoze tesouros da Espanha"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Quibla",
      "descricao": "Direção para a qual os muçulmanos se voltam ao rezar"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Nos primeiros anos do islã, antes de se voltarem para Meca, os muçulmanos rezavam voltados para que cidade?",
    "resposta": "Jerusalém",
    "fonte": [
      "https://en.wikipedia.org/wiki/Qibla"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Qibla",
        "situacao": "ok",
        "texto": "The qibla (Arabic: قبلة, lit. 'direction') is the direction towards the Kaaba in the Sacred Mosque in Mecca, which is used by Muslims in various religious contexts, particularly the direction of prayer for the salah. According to Islamic tradition, the Kaaba is believed to be a sacred site built by prophets Abraham and Ishmael, and that its use as the qibla was ordained by God in several verses of\n[…]\nPrior to this revelation, Muhammad and his followers in Medina faced Jerusalem for prayers. Most mosques contain a mihrab (a wall niche) that indicates the direction of the qibla.\n[…]\nThere are different reports of the qibla direction when Muhammad was in Mecca (before his migration to Medina). According to a report cited by historian al-Tabari and exegete (textual interpreter) al-Baydawi, Muhammad prayed towards the Kaaba. Another report, cited by al-Baladhuri and also by al-Tabari, says that Muhammad prayed towards Jerusalem while in Mecca.\n[…]\nAnother report, mentioned in Ibn Hisham's biography of Muhammad, says that Muhammad prayed in such a way as to face the Kaaba and Jerusalem simultaneously. The qibla status of the Kaaba (or the Sacred Mosque in which it is located) is based on the verses 144, 149, and 150 of the al-Baqarah chapter of the Quran, each of which contains a command to \"turn your face toward the Sacred Mosque\" (fawalli wajhaka shatr al-Masjid il-Haram).\n[…]\nAccording to Islamic traditions, these verses were revealed in the month of Rajab or Sha'ban in the second Hijri year (623 CE), or about 15 or 16 months after Muhammad's migration to Medina. Prior to these revelations, Muhammad and the Muslims in Medina had prayed towards Jerusalem as the qibla, the same direction as the prayer direction—the mizrah—used by the Jews of Medina.\n[…]\nKing, David A. (2018). \"Bibliography of books, articles and websites on historical qibla determinations\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quibla",
        "situacao": "ok",
        "texto": "Quibla (em árabe: القبلة; romaniz.: al-qibla) é a palavra genérica para direção. No Islão é definido como a direção da Caaba em Meca para onde devem ser dirigidas as orações. Em cada mesquita existe um lugar que indica a direção da quibla chamado mirabe.\n[…]\nO cálculo da quibla pode ser feito de duas maneiras diferentes:\n[…]\nPelo método do Grande Círculo ou Ortodrómia, que calcula a menor distância entre o lugar onde a pessoa está e a Caaba em Meca.\n[…]\nNa determinação da quibla com uma bússola deve-se levar em consideração a declinação magnética do local.\n[…]\nSendo as coordenadas geográficas do lugar de oração φ1, λ1 e sendo as coordenadas da Caaba φ2, λ2, a seguinte expressão trigonométrica calcula o azimute da Quibla em coordenadas horizontais do lugar de oração:\n[…]\nAs coordenadas de Meca aplicáveis a esta fórmula são latitude φ2 = 21° 27' 00\" N e longitude λ2 = 39° 49' 00\" E.\n[…]\nFranca, Rubem (1994). Arabismos: uma mini-enciclopédia do mundo árabe. Recife: Fundação de Cultura Cidade do Recife\n[…]\n«Cálculo da Qibla e declinação magnética.»\n[…]\n«Cálculo da Qibla e declinação magnética.»\n[…]\nDenis Roegel : An Extension of Al-Khalīlī's Qibla Table to the Entire World, 2008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Primeiro Concílio de Niceia",
      "descricao": "Concílio de bispos cristãos convocado pelo imperador Constantino, que formulou o Credo Niceno"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Convocado pelo imperador Constantino, o Concílio de Niceia, que formulou o Credo cristão, aconteceu em que século?",
    "resposta": "Século quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/First_Council_of_Nicaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/First_Council_of_Nicaea",
        "situacao": "ok",
        "texto": "The First Council of Nicaea was a council of Christian bishops convened in the Bithynian city of Nicaea (now İznik, Turkey) by the Roman Emperor Constantine I, also known as the First Ecumenical Council. It met from May until the end of July 325.\n[…]\nIn 331, Constantine commissioned fifty Bibles for the use of the Bishop of Constantinople, but little else is known (in fact, it is not even certain whether his request was for fifty copies of the entire Old and New Testaments, only the New Testament, or merely the Gospels). Some scholars believe that this request provided motivation for canon lists.\n[…]\nThe doctrine in a more full-fledged form was not formulated until the Council of Constantinople in 381 and a final form formulated primarily by Gregory of Nyssa.\n[…]\nEusebius Pamphilius: Church History, Life of Constantine, Oration in Praise of Constantine, NPNF2, vol. 1, retrieved 24 February 2014\n[…]\nEusebius Pamphilius, The Life of Constantine [Vita Constantini].\n[…]\nSocrates of Constantinople, The Ecclesiastical History of Socrates Scholasticus, retrieved 24 February 2014\n[…]\nConstantine the Great, \"Constantinus Augustus to the Churches quoted by Theodoret\", The Ecclesiastical History of Theodoret, retrieved 24 February 2014\n[…]\nConstantine the Great, \"On the Keeping of Easter quoted by Eusebius\", The Life of Constantine\n[…]\nHilary of Poitiers, Contra Constantium Augustum Liber [A Book Against the Emperor Constantine]\n[…]\nPhotios I of Constantinople; Walford, Edward (trans), Epitome of the Ecclesiastical History of Philostorgius, Compiled by Photius, Patriarch of Constantinople\n[…]\nFernández, Samuel (2020). \"Who convened the First Council of Nicaea: Constantine or Ossius?\". The Journal of Theological Studies. 71: 196–211. doi:10.1093/jts/flaa036."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Primeiro_Conc%C3%ADlio_de_Niceia",
        "situacao": "ok",
        "texto": "O Primeiro Concílio de Niceia foi um concílio de bispos, reunidos na cidade de Niceia da Bitínia (atual İznik, província de Bursa, Turquia) pelo Imperador Romano Constantino I em 325. Constantino I organizou o concílio nos moldes do senado romano e o presidiu, mas não votou oficialmente as Questões de fé.\n[…]\nO Primeiro Concílio de Niceia foi convocado pelo Imperador Constantino, o Grande, em consequência das recomendações de um sínodo liderado por Ósio de Córdoba no tempo pascal de 325. Este sínodo havia sido encarregado de investigar o problema causado pela controvérsia ariana no leste grego do mundo greco-romano. Para a maioria dos bispos, os ensinamentos de Ário eram heréticos e perigosos para a salvação das almas.\n[…]\nO concílio declarou que o Filho era verdadeiro Deus, coeterno com o Pai e gerado de sua mesma substância, argumentando que tal doutrina codificava melhor a apresentação bíblica do Filho, assim como a crença cristã tradicional sobre ele transmitida pelos apóstolos. Essa crença foi expressa pelos bispos no Credo de Niceia, que formou a base do que é conhecido atualmente como Credo Niceno-Constantinopolitano.\n[…]\nEm curto prazo, no entanto, o concílio não resolveu completamente os problemas que foi convocado para discutir e um período de conflito e agitação continuou por algum tempo. O próprio Constantino foi sucedido por dois imperadores arianos no Império Romano do Oriente: seu filho, Constâncio II, e Valente. Este não conseguiu resolver as questões eclesiásticas notáveis ​​e, sem sucesso, confrontou Basílio de Cesareia sobre o Credo Niceno.\n[…]\nConstantino morreu no ano seguinte, depois de finalmente receber o batismo do arcebispo Eusébio de Nicomédia, e \"com sua morte na primeira rodada da batalha depois que o Concílio de Niceia foi encerrado\".\n[…]\nSegundo Concílio de Niceia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Bíblia de Gutenberg",
      "descricao": "Bíblia em latim impressa por Johannes Gutenberg em Mainz com tipos móveis"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o alemão Johannes Gutenberg imprimiu em Mainz sua famosa Bíblia, usando tipos móveis?",
    "resposta": "Século quinze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gutenberg_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gutenberg_Bible",
        "situacao": "ok",
        "texto": "The Gutenberg Bible, also known as the 42-line Bible, the Mazarin Bible or the B42, is the earliest major book printed in Europe using mass-produced metal movable type. It marked the start of the \"Gutenberg Revolution\" and the age of printed books in the West. The book is valued and revered for its high aesthetic and artistic qualities and its historical significance.\n[…]\nThe Gutenberg Bible is an edition of the Latin Vulgate printed in the 1450s by Johannes Gutenberg in Mainz (Holy Roman Empire), in present-day Germany. Out of either 158 or 180 copies that were originally printed, 49 survive in at least substantial portion, 21 of them in entirety; of these, the copy with the earliest visible print date is marked as 15 August 1456. They are thought to be among the world's most valuable books, although no complete copy has been sold since 1978.\n[…]\nIn a legal paper, written after completion of the Bible, Johannes Gutenberg refers to the process as Das Werk der Bücher (\"the work of the books\"). He had introduced the printing press to Europe and created the technology to make printing with movable types finally efficient enough to facilitate the mass production of entire books.\n[…]\nAlthough many Gutenberg Bibles have been rebound over the years, nine copies retain fifteenth-century bindings. Most of these copies were bound in either Mainz or Erfurt. Most copies were divided into two volumes, the first volume ending with The Book of Psalms. Copies on vellum were heavier and for this reason were sometimes bound in three or four volumes.\n[…]\nHistory in the Headlines: 7 Things You May Not Know About the Gutenberg Bible History.com, February 23, 2015\n[…]\nFragment of the Gutenberg Bible, Biblia Latina [Armoire S], at the Library of Trinity College Dublin\n[…]\nFragment of the Gutenberg Bible at the John Carter Brown Library of the Early Americas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_de_Gutenberg",
        "situacao": "ok",
        "texto": "A Bíblia de Gutenberg (também conhecida como Bíblia de Mazari ou Bíblia de 42 linhas) é o incunábulo impresso da tradução em latim da Bíblia, por Johannes Gutenberg, em Mogúncia (atual Mainz), Alemanha. A produção da Bíblia começou em 1450, tendo Gutenberg usado uma prensa de tipos móveis. Calcula-se que tenha terminado em 1455. Essa Bíblia é considerada o incunábulo mais importante, pois marca o \n[…]\nA preparação da Bíblia provavelmente começou logo após 1450, e os primeiros exemplares finalizados ficaram prontos em 1454 ou 1455. Não se sabe exatamente quanto tempo levou para imprimir a Bíblia. A primeira impressão com data precisa é a Indulgência de Gutenberg, com 31 linhas, que certamente existia em 22 de outubro de 1454.\n[…]\nA Bíblia de 42 linhas foi impressa em um papel do tamanho conhecido como 'Real'. Uma folha inteira de papel Real mede 42 cm × 60 cm (17 pol × 24 pol) e uma única folha fólio não aparada mede 42 cm × 30 cm (17 pol × 12 pol). Um único exemplar completo da Bíblia de Gutenberg tem 1.288 páginas (4×322 = 1288) (geralmente encadernado em dois volumes); com quatro páginas por folha fólio, são necessárias 322 folhas de papel por exemplar.\n[…]\nEmbora muitas Bíblias de Gutenberg tenham sido reencadernadas ao longo dos anos, nove exemplares conservam as encadernações do século XV. A maioria desses exemplares foi encadernada em Mainz ou Erfurt. A maioria dos exemplares foi dividida em dois volumes, o primeiro volume terminando com o Livro dos Salmos. Os exemplares em pergaminho eram mais pesados ​​e, por esse motivo, às vezes eram encadernados em três ou quatro volumes.\n[…]\nA Biblioteca Nacional do Brasil, no Rio de Janeiro, possui uma cópia de uma bíblia do início da produção em Mainz, mas ela foi produzida por dois ex-sócios de Gutenberg, os alemães Johann Fust e Peter Schoffer, e não é uma bíblia de Gutenberg, como é frequentemente divulgado. ==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Holi",
      "descricao": "Festa hindu em que as pessoas se cobrem de pós e águas coloridas"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Holi, festa hindu em que as pessoas se cobrem de pós coloridos, celebra a chegada de que estação do ano?",
    "resposta": "Primavera",
    "distratores": [
      "Verão",
      "Outono",
      "Inverno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Holi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi (IPA: ['hoːli:, hoːɭiː]) is a major Hindu festival of colours, love and spring. It celebrates the love between the deities Radha and Krishna.\n[…]\nIn the Braj region of India, where the Hindu deities Radha and Krishna grew up, the festival is celebrated until Rang Panchmi in commemoration of their divine love for each other. The festivities officially usher in spring, with Holi celebrated as a festival of love. Garga Samhita, a puranic work by Sage Garga was the first work of literature to mention the romantic description of Radha and Krishna playing Holi.\n[…]\nThere is a symbolic legend found in the 7th chapter of the Bhagavata Purana explaining why Holi is celebrated as a festival of triumph of good over evil in the honour of Hindu god Vishnu and his devotee Prahlada.\n[…]\nIn 1837, Sir Henry Fane who was the commander-in-chief of the British Indian army joined the Holi celebrations organised by Ranjit Singh. A mural in the Lahore Fort was sponsored by Ranjit Singh and it showed the Hindu god Krishna playing Holi with gopis. After the death of Ranjit Singh, his Sikh sons and others continued to play Holi every year with colours and lavish festivities. The colonial British officials joined these celebrations.\n[…]\nIn Mughal India, Holi was at times suppressed, and at others celebrated with such exuberance that Hindu citizens of all castes could throw colour on the Muslim Mughal Emperor.\n[…]\nHoli is celebrated as a social event in parts of the United States. For example, at Sri Sri Radha Krishna Temple in Spanish Fork, Utah, NYC Holi Hai in Manhattan, New York, and Festival of Colors: Holi NYC in New York City, New York.\n[…]\nLathmar Holi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Holi",
        "situacao": "ok",
        "texto": "Holi ou Festival das Cores é um festival realizado na Índia e em alguns outros lugares todos os anos entre fevereiro e março, que comemora a chegada da Primavera. Neste dia, as pessoas atiram tintas das mais diversas cores umas às outras, com muita bebida, comida e música.\n[…]\nHoli, também chamado de Festival das Cores, é um popular festival  Primavera observado na Índia, Suriname, Guiana, Trindade, Reino Unido, Ilhas Fiji e no Nepal. Em Bengala Ocidental da Índia e do Bangladesh, é conhecido como Dolyatra (Doljatra) ou Boshonto Utsav ( \"Festa da Primavera\").\n[…]\nO principal dia, Holi, também conhecido como Dhulheti, Dhulandi ou Dhulendi, é celebrado por pessoas que atiram água e pó colorido uns aos outros. As pessoas cumprimentam-se dizendo “Holi Hai”.\n[…]\nHiaranyakashyap combinou com a sua terrível irmã Holika, que tinha o poder de não se queimar, que ela entraria numa fogueira com Prahlad em seus braços para matá-lo. Mas foi Holika quem morreu carbonizada por não saber que o seu poder de enfrentar o fogo seria anulado quando entrasse na fogueira acompanhada de outra pessoa. O deus Vishnu reconheceu a bondade e devoção de Prahlad e salvou-o. O festival, portanto, celebra a vitória de um deus contra o outro e o triunfo da devoção.\n[…]\nApesar de esta ser uma festa colorida, existem vários aspectos de Holi, o que o torna tão importante para a cultura da Índia. Embora possa não ser tão evidente, um olhar mais atento e um pouco de pensamento revelará o significado do Holi em mais formas do que aquilo que simplesmente se vê.\n[…]\nHoli celebra também a lenda de Radha e Krishna, que descreve o extremo prazer que Krishna teve na aplicação de cor sobre Radha e Gopis. Esta brincadeira de Krishna mais tarde, tornou-se uma tendência e uma parte das festividades do Holi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Páscoa",
      "descricao": "Principal festa cristã, que celebra a ressurreição de Jesus"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Pela regra tradicional, a Páscoa cristã cai no domingo seguinte à primeira lua cheia depois de que marco do calendário?",
    "resposta": "Equinócio de março",
    "fonte": [
      "https://en.wikipedia.org/wiki/Date_of_Easter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Date_of_Easter",
        "situacao": "ok",
        "texto": "As a moveable feast, the date of Easter is determined in each year through a calculation known as computus paschalis (Latin for 'Easter computation') – often simply Computus – or as paschalion particularly in the Eastern Orthodox Church. Easter is celebrated on the first Sunday after the Paschal full moon (a mathematical approximation of the first astronomical full moon, on or after 21 March –  it\n[…]\nAdditionally, the church wished to eliminate dependencies on the Hebrew calendar, by deriving the date for Easter directly from the March equinox.\n[…]\nThe calculations produce different results depending on whether the Julian calendar or the Gregorian calendar is used. For this reason, the Catholic Church and Protestant churches (which follow the Gregorian calendar) celebrate Easter on a different date from that of the Eastern and Oriental Orthodoxy (which follow the Julian calendar). It was the drift of 21 March from the observed equinox that led to the Gregorian reform of the calendar, to bring them back into line.\n[…]\nThis does affect the date of the equinox, but it so happens that the interval between northward (northern hemisphere spring) equinoxes has been fairly stable over historical times, especially if measured in mean solar time.\n[…]\nThe range of days considered for the full moon to determine Easter are 21 March (the day of the ecclesiastical equinox of spring) to 18 April—a 29-day range. However, in the mod 30 arithmetic of variable d and constant M, both of which can have integer values in the range 0 to 29, the range is 30. Therefore, adjustments are made in critical cases.\n[…]\nOnce d is determined, this is the number of days to add to 22 March (the day after the earliest possible full moon allowed, which is coincident with the ecclesiastical equinox of spring) to obtain the date of the day after the full moon.\n[…]\nA calendar page and calculator by Holger Oertel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A1lculo_da_P%C3%A1scoa",
        "situacao": "ok",
        "texto": "O cálculo da data da Páscoa, também conhecido como Computus em latim, é fundamental no calendário cristão desde os primórdios da cristandade, tornando-se definido na Idade Média.\n[…]\nA Páscoa é celebrada no primeiro domingo após a primeira lua cheia que ocorre no dia do equinócio da Primavera, ou logo a seguir, (no hemisfério norte, outono no hemisfério sul), ou seja, é equivalente à antiga regra de que seria o primeiro Domingo após o 14º dia do mês lunar de Nissan. O dia do domingo de Páscoa pode variar entre as datas extremas de 22 de Março e de 25 de Abril, dependendo da disposição dos dias e dos meses nas semanas.\n[…]\nOs dias extremos deste intervalo correspondem muito raramente a domingos de Páscoa. A última vez que ocorreu a 22 de Março foi em 1818 e a próxima será em 2285. Menos raras são as Páscoas a 23 de Março (anos 1913, 2008 e 2160) e 25 de Abril (anos 1943, 2038 e 2190).\n[…]\nA Páscoa será celebrada ao domingo seguinte à data encontrada na tabela. Caso a data já seja um domingo, a Páscoa é o domingo da semana seguinte.\n[…]\nConsultando na tabela, chega-se a 8 de abril, depois procura-se o domingo seguinte. A Páscoa em 2020 será no dia 12 de abril, já que o dia 8 é uma quarta-feira.\n[…]\nmarço = 22 + d + e\n[…]\nSE março ≤ 31 :\n[…]\ndia = março\n[…]\nMÊS = (1 + 0 - 7 × 0 + 114) \\ 31 = 3 (Março)\n[…]\nOu seja, a Páscoa de 2008 caiu em 23 de Março.\n[…]\nExemplo de código em PHP, o PHP possui nativamente um recurso para obter a data da páscoa, sendo:Porém, a função easter_date() pode retornar a data incorreta dependendo do fuso horário do servidor. Para corrigir isto, pode-se usar o seguinte código (compatível com PHP 5.3+):Exemplo manual de cálculo para obter a data da Páscoa:\n[…]\nA primeira fórmula:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Corpus Christi",
      "descricao": "Festa católica que celebra a eucaristia, conhecida no Brasil pelos tapetes de rua"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Tradicionalmente, a festa católica de Corpus Christi, famosa no Brasil pelos tapetes enfeitando as ruas, cai em que dia da semana?",
    "resposta": "Quinta-feira",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Corpus_Christi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Corpus_Christi",
        "situacao": "ok",
        "texto": "Corpus Christi (em Latim eclesiástico: Dies Sanctissimi Corporis et Sanguinis Domini Iesu Christi, em tradução literal Dia do Santíssimo Corpo e Sangue do Senhor Jesus Cristo), também chamada de Solenidade do Santíssimo Corpo e Sangue de Cristo ou Corpus Domini, e generalizada em Portugal como Corpo de Deus, é uma celebração litúrgica dedicada à adoração e à veneração da presença real de Jesus Cri\n[…]\nÉ celebrada pela Igreja Católica, mas também, com algumas diferenças, por algumas igrejas ortodoxas de rito ocidental, luteranas evangélicas e anglicanas. A solenidade ocorre na quinta-feira seguinte ao Domingo da Santíssima Trindade, que sucede o Domingo de Pentecostes.\n[…]\nPara garantir a prontidão ao amanhecer, centenas de voluntários se reúnem para confeccionar os tapetes durante a noite, trabalhando incansavelmente até a manhã da quinta-feira de Corpus Christi. Mesmo em circunstâncias excepcionais, como a pandemia de COVID-19 em 2020 e 2021, a tradição dos tapetes foi mantida, embora a procissão tradicional tenha sido suspensa. Felizmente, a procissão retornou em 2022, trazendo de volta a alegria e devoção característica dessa celebração única.\n[…]\nA cidade de Mariana, em Minas Gerais, no Brasil, comemora a festa de Corpus Christi enfeitando as ruas com tapetes de serragem e pinturas. No município de Coronel Fabriciano, os fiéis realizam a montagem dos tapetes de serragem que marcam o percurso da procissão nas ruas da região central da cidade, saindo da cocatedral de São Sebastião. Tal manifestação mantém rituais originados na década de 1940 pela Paróquia São Sebastião e foi tombada como patrimônio cultural da cidade.\n[…]\nOs tapetes de rua são uma tradição e manifestação artística popular realizada por fiéis da Igreja Católica, confeccionados para a passagem da procissão de Corpus Christi. A tradição da confecção do tapete surgiu em Portugal e veio para o Brasil com os colonizadores."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Lavagem do Bonfim",
      "descricao": "Festa religiosa de Salvador em que baianas lavam as escadarias da Igreja do Senhor do Bonfim"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que mês as baianas lavam as escadarias da Igreja do Senhor do Bonfim, em Salvador, na tradicional festa da Lavagem?",
    "resposta": "Janeiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Lavagem_do_Bonfim",
        "situacao": "ok",
        "texto": "A Lavagem do Bonfim é uma celebração inter-religiosa que tem lugar em Salvador da Bahia, Brasil. Acontece na quinta-feira que antecede o segundo domingo após o Dia de Reis, no mês de janeiro.\n[…]\nA tradicional Lavagem não deve ser confundida com a Festa que marca o encerramento do novenário solene, no domingo seguinte, quando ocorre a missa ao Senhor do Bonfim. A lavagem da Igreja teve início em 1773, quando os integrantes da \"Devoção do Senhor Bom Jesus do Bonfim\", constituída por devotos leigos, faziam os escravizados lavar e ornamentar a Igreja como parte dos preparativos para a festa do Senhor do Bonfim.\n[…]\nPosteriormente, para os adeptos do candomblé, a lavagem da igreja do Senhor do Bonfim passou a ser parte da cerimônia das Águas de Oxalá. A Arquidiocese de Salvador, então, proibiu a lavagem na parte interna do templo e transferiu o ritual para as escadarias e o adro.\n[…]\nA lavagem festiva acontece com a saída, pela manhã da quinta-feira, do tradicional cortejo de baianas da Igreja de Nossa Senhora da Conceição da Praia, o qual segue a pé até o alto do Bonfim, para lavar com vassouras e água de cheiro as escadarias e o átrio da Igreja do Nosso Senhor do Bonfim.\n[…]\nTodos se vestem de branco, a cor do orixá, e percorrem 8 quilômetros em procissão, desde o largo da Conceição até o largo do Bonfim. O ponto alto da festa ocorre quando as escadarias da igreja são lavadas por cerca de 200 baianas vestidas a caráter que, de suas \"quartinhas\" — vasos, que trazem aos ombros — despejam água nas escadarias e no átrio da igreja, ao som de palmas, toque de atabaque e cânticos de origem africana.\n[…]\nFesta do Bonfim, no site da Fundação Gregório de Mattos"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Papado de Avignon",
      "descricao": "Período em que os papas residiram em Avignon, no sul da França, em vez de Roma"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século os papas deixaram Roma e passaram quase setenta anos morando em Avignon, no sul da França?",
    "resposta": "Século quatorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avignon_Papacy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avignon_Papacy",
        "situacao": "ok",
        "texto": "The Avignon Papacy (Occitan: Papat d'Avinhon; French: Papauté d'Avignon) was the period from 1309 to 1376 during which seven successive popes resided in Avignon (at the time within the Kingdom of Arles, part of the Holy Roman Empire, now part of France) rather than in Rome. The situation arose from the conflict between the papacy and the French crown, culminating in the death of Pope Boniface VIII\n[…]\nThe two Avignon-based antipopes were:\n[…]\nBy the time of the Avignon Papacy, the power of the French king in this region was dominant, although still not legally binding.\n[…]\nThe period has been called the \"Babylonian captivity\" of the popes. When and where this term originated is uncertain although it may have sprung from Petrarch, who in a letter to a friend (1340–1353) written during his stay at Avignon, described Avignon of that time as the \"Babylon of the west\", referring to the worldly practices of the church hierarchy.\n[…]\nAs noted, the \"captivity\" of the popes at Avignon lasted about the same amount of time as the exile of the Jews in Babylon, making the analogy convenient and rhetorically potent. The Avignon papacy has been and is often today depicted as being totally dependent on the French kings, and sometimes as even being treacherous to its spiritual role and its heritage in Rome.\n[…]\nIn the period of the Schism, the power struggle in the papacy became a battlefield of the major powers, with France supporting the antipopes in Avignon and England supporting the popes in Rome. During the Schism, papal allegiance increasingly followed political and dynastic divisions, with France generally supporting the Avignon line and England supporting the Roman line.\n[…]\nFleck, Cathleen A. (2009). \"Seeking Legitimacy: Art and Manuscripts for the Popes in Avignon from 1378 to 1417\". In Rollo-Koster, Joëlle; Izbicki, Thomas M. (eds.). A Companion to the Great Western Schism (1378–1417). Brill."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Papado_de_Avinh%C3%A3o",
        "situacao": "ok",
        "texto": "O Papado de Avinhão, conhecido também como \"Cativeiro de Avignon\" ou ''Papado de Avignon'', diz respeito a um período da história do papado e da Igreja Católica, compreendido entre 1309 e 1377, quando a residência do papa foi alterada de Roma para Avinhão. À medida que o poder real foi se fortalecendo na França, surgiram conflitos com a Igreja. Durante o reinado de Filipe IV de França, o Belo (128\n[…]\nEste episódio é conhecido como a \"Crise de Avinhão\", dando início ao período chamado de \"cativeiro babilônico dos papas\" (ou da Igreja), uma alusão ao exílio bíblico de Israel na Babilônia. Este apelido é controverso pelo que se refere à crítica expressa do facto de a prosperidade da Igreja deste tempo ter sido acompanhada de um profundo compromisso da integridade espiritual do papado, especialmente no que toca à alegada submissão dos poderes da Igreja às ambições do rei francês.\n[…]\nPor coincidência, o \"cativeiro\" dos papas em Avinhão durou aproximadamente o mesmo tempo que o exílio dos Judeus na Babilônia, (ver: Cativeiro Babilônico) tornando a analogia ainda mais conveniente e retoricamente poderosa.\n[…]\nO rei Filipe IV de França conseguiu que fosse eleito papa um francês em 1305 (que adotou o nome de Clemente V) e, em 1309, persuadiu-o a deslocar a sede papal de Roma para Avinhão, às margens do rio Ródano.\n[…]\nSete papas residiram em Avinhão:\n[…]\nHouve um período de controvérsia entre 1378 e 1414 ao qual escolásticos católicos se referem como o \"Cisma Papal\", ou, \"A grande controvérsia dos AntiPapas\" (também chamado \"o segundo Grande Cisma\" ou Grande Cisma do Ocidente por muitos historiadores protestantes ou seculares), quando facções da igreja católica se dividiram quanto aos vários pretendentes a Papa. O Concílio de Constança, em 1414 resolveu finalmente esta controvérsia, desmantelando os últimos vestígios do papado de Avinhão.\n[…]\nArquidiocese de Avinhão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Maomé",
      "descricao": "Profeta do islã, nascido em Meca"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição islâmica, Maomé nasceu em Meca em que século da era cristã?",
    "resposta": "Século seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad",
        "situacao": "ok",
        "texto": "Muhammad (c. 570 CE – 8 June 632 CE) was an Arab religious, military, and political leader, and the founder of Islam. According to Islam, he was the final prophet of God who was divinely inspired to preach and confirm the monotheistic teachings of Adam, Noah, Abraham, Moses, Jesus, and other prophets in Islam. He is believed by Muslims to be the Seal of the Prophets, and along with the Quran, his \n[…]\nMuhammad treated slaves as human beings and clearly held some in the highest esteem\".\n[…]\nMuhammad's message transformed society and moral orders of life in the Arabian Peninsula; society focused on the changes to perceived identity, worldview, and the hierarchy of values. Economic reforms addressed the plight of the poor, which was becoming an issue in pre-Islamic Mecca. The Quran requires payment of an alms tax (zakat) for the benefit of the poor; as Muhammad's power grew he demanded that tribes who wished to ally with him implement the zakat in particular.\n[…]\nIan Almond says that German Romantic writers generally held positive views of Muhammad: \"Goethe's 'extraordinary' poet-prophet, Herder's nation builder (...) Schlegel's admiration for Islam as an aesthetic product, enviably authentic, radiantly holistic, played such a central role in his view of Mohammed as an exemplary world-fashioner that he even used it as a scale of judgement for the classical (the dithyramb, we are told, has to radiate pure beauty if it is to resemble 'a Koran of poetry')\".\n[…]\nThe sunnah contributed much to the development of Islamic law, particularly from the end of the first Islamic century. Muslim mystics, known as Sufis, who were seeking for the inner meaning of the Quran and the inner nature of Muhammad, viewed the prophet of Islam not only as a prophet but also as a perfect human being. All Sufi orders trace their chain of spiritual descent back to Muhammad."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maom%C3%A9",
        "situacao": "ok",
        "texto": "Maomé, em árabe مُحَمَّدُ, Muḥammad, também chamado Muhammad ou Mohammed, foi um líder religioso, político e militar árabe da tribo dos Coraixitas. Sua pregação deu origem ao islã, e a primeira comunidade muçulmana viveu sob sua liderança em Medina. Na tradição islâmica, ele nasceu em Meca, por volta de 570, e morreu em Medina, em 632.\n[…]\nEm 628, Maomé partiu em peregrinação a Meca com um grupo estimado pela tradição em 1.400 pessoas. Apresentou-se como peregrino em paz, mas os habitantes da cidade recusaram o acesso ao santuário. As duas partes assinaram então a trégua de Hudaibia. A inclusão da peregrinação no culto islâmico preservou o movimento de peregrinos e sua importância econômica para Meca. Também reduziu a oposição das elites coraixitas, e figuras como Calide ibne Alualide e Anre ibne Alás aderiram a Maomé.\n[…]\nCadija, primeira esposa de Maomé, era uma viúva rica que trabalhava no comércio e o empregou antes do casamento. As listas atribuem ao casal seis ou sete filhos, dependendo da inclusão de nomes cuja historicidade é discutida. Quatro filhas constam com regularidade nas listas. Cadija é lembrada como a primeira pessoa a aceitar as revelações e teria morrido cerca de três anos antes da Hégira. Pouco depois de sua morte, tradicionalmente datada de 619, Maomé se casou com Sawda bint Zam'a.\n[…]\nRelatos religiosos escritos muito antes da medicina moderna não permitem diagnosticar Maomé retrospectivamente com epilepsia, esquizofrenia ou qualquer outra condição. As interpretações psicológicas dizem mais sobre a história dessas leituras do que sobre um diagnóstico clínico. Elas costumam partir de dois elementos da biografia tradicional. Maomé teria ficado órfão aos seis anos e se casado com Cadija por volta dos 25, permanecendo monogâmico até a morte dela.\n[…]\nCaaba, santuário de Meca presente em sua pregação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Édito de Tessalônica",
      "descricao": "Decreto imperial romano de 380 que tornou o cristianismo niceno a religião oficial do Império"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 380, pelo Édito de Tessalônica, que imperador romano fez do cristianismo a religião oficial do Império?",
    "resposta": "Teodósio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edict_of_Thessalonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edict_of_Thessalonica",
        "situacao": "ok",
        "texto": "The Edict of Thessalonica (Greek: Διάταγμα της Θεσσαλονίκης), issued on 27 February AD 380 by Theodosius I, made Nicene Christianity the state church of the Roman Empire. It condemned other Christian creeds such as Arianism as heresies of \"foolish madmen\", and authorized their punishment.\n[…]\nThis edict, addressed to the inhabitants of Constantinople whom Theodosius wished to pacify in order to make the city his imperial residence, constitutes the first known secular law which includes in its preamble a clear definition of what a Christian Roman ruler considers as religious orthodoxy, opening the way of repression against dissidents qualified as \"heretics\".\n[…]\nIn 313 the emperor Constantine I, together with his eastern counterpart Licinius, issued the Edict of Milan, which granted religious toleration and freedom for persecuted Christians.\n[…]\nCunctos populos, quos clementiae nostrae regit temperamentum, in tali volumus religione versari, quam divinum Petrum apostolum tradidisse Romanis religio usque ad nunc ab ipso insinuata declarat quamque pontificem Damasum sequi claret et Petrum Aleksandriae episcopum virum apostolicae sanctitatis, hoc est, ut secundum apostolicam disciplinam evangelicamque doctrinam patris et filii et spiritus sancti unam deitatem sub pari maiestate et sub pia trinitate credamus.\n[…]\nEMPERORS GRATIAN, VALENTINIAN AND THEODOSIUS AUGUSTI. EDICT TO THE PEOPLE OF CONSTANTINOPLE. It is our desire that all the various nations which are subject to our Clemency and Moderation, should continue to profess that religion which was delivered to the Romans by the divine Apostle Peter, as it has been preserved by faithful tradition, and which is now professed by the Pontiff Damasus and by Peter, Bishop of Alexandria, a man of apostolic holiness."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89dito_de_Tessal%C3%B4nica",
        "situacao": "ok",
        "texto": "O Édito de Tessalônica (português brasileiro) ou Tessalónica (português europeu) ou Salonica, também conhecido como Cunctos Populos ou De Fide Catolica foi decretado pelo imperador romano Teodósio I a 27 de fevereiro de 380 d.C. pelo qual estabeleceu que o cristianismo tornar-se-ia, exclusivamente, a religião de estado, no Império Romano, abolindo todas as práticas politeístas dentro do império e \n[…]\nNos primórdios do século IV, Constantino terminara com a clandestinidade dos cristãos, outorgando-lhes certos privilégios e permitindo a construção de grandes templos. Em 313 d.C., através do Édito de Milão, o imperador decretara a liberdade de culto religioso a toda manifestação de crença, inclusive cristã, e o fim do paganismo como religião oficial do Império Romano.\n[…]\nCom ele começava uma nova época para a igreja, e em transcurso do século IV a sua influência nas esferas do poder aumentaria, apesar do parêntese de três anos que implicou o governo de Juliano, durante o qual o paganismo foi restaurado, porém em 380 d.C., através do Édito de Tessalônica, o cristianismo tornou-se na religião oficial tanto no Oriente quanto no Ocidente.\n[…]\nContudo, esta oficialização do culto também não beneficiou totalmente a Igreja. Como máxima autoridade do império, Teodósio incluiu o sacerdócio nos funcionários públicos, o que na prática os situava sob a sua autoridade.\n[…]\nNo ano seguinte da promulgação do Édito de Tessalônica, o mesmo imperador Teodósio convocava o Primeiro Concilio Ecumênico de Constantinopla. O seu objetivo era conciliar a ortodoxia cristã com os simpatizantes do arianismo e tratar a problemática da heresia macedônica. Também confirmar o credo Niceno como a doutrina oficial da igreja. Na realidade, as teses arianas foram de novo recusadas, e posteriormente foi emitido um novo édito imperial que dava caráter legal às conclusões do concílio.\n[…]\nÉdito de Constantino\n[…]\nÉdito de Milão",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Vulgata",
      "descricao": "Tradução latina da Bíblia feita no fim do século quatro, adotada como texto oficial da Igreja Católica"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No fim do século quatro, que estudioso cristão traduziu a Bíblia para o latim, na versão que ficou conhecida como Vulgata?",
    "resposta": "São Jerônimo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vulgate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vulgate",
        "situacao": "ok",
        "texto": "The Vulgate () is a late-4th-century Latin translation of the Bible. It is largely the work of Saint Jerome, who was commissioned by Pope Damasus I in 382 to revise the Vetus Latina Gospels used by the Roman Church. Later, of his own initiative, Jerome extended this work of revision and translation to include most of the books of the Bible.\n[…]\nAs with the vetus latina and the Greek text types, manuscript versions of the Vulgate texts exhibit a considerable number of minor variations by scribes. Regular attempts were made over the centuries to conserve Jerome's text or to purify the text of obvious errors or substitutions from vetus latina phrases: attempts such as by Cassiodorus in the 6th century, Alcuin in the 8th, Stephen Harding in the 12th, Erasmus in the 16th, to the modern Stuttgart Vulgate.\n[…]\nThose marginal notes of variant readings along with their sources \"seem to foreshadow the thirteenth-century correctoria.\" In the 9th century the Vetus Latina texts of Baruch and the Letter of Jeremiah were introduced into the Vulgate in versions revised by Theodulf of Orleans and are found in a minority of early medieval Vulgate pandect bibles from that date onward.\n[…]\nBy the 9th century, due to the success of Alcuin's edition, the Vulgate had replaced the Vetus Latina as the most available edition of the Latin Bible.\n[…]\nIn 1907, Pope Pius X commissioned the Benedictine monks to prepare a critical edition of Jerome's Vulgate, entitled Biblia Sacra iuxta latinam vulgatam versionem. This text was originally planned as the basis for a revised complete official Vulgate for the Catholic Church to replace the Clementine edition. The first volume, the Pentateuch, was completed in 1926.\n[…]\nOxford Vulgate\n[…]\nNova Vulgata\n[…]\nWorks about the Vulgate\n[…]\nWorks by or about Vulgate at the Internet Archive\n[…]\nWorks by Vulgate at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vulgata",
        "situacao": "ok",
        "texto": "Vulgata é a forma latina abreviada de vulgata editio ou vulgata versio ou vulgata lectio, respectivamente 'edição', 'versão' ou 'leitura' de divulgação popular — a versão mais difundida (ou mais aceita como autêntica) de um texto.\n[…]\nA Vulgata foi produzida para ser mais exata e mais fácil de compreender do que suas predecessoras. Foi a primeira, e por séculos a única, versão da Bíblia que verteu o Antigo Testamento diretamente do hebraico e não da tradução grega conhecida como Septuaginta. No Novo Testamento, São Jerônimo selecionou e revisou textos. Chama-se, pois, Vulgata a esta versão latina da Bíblia que foi usada pela Igreja Católica Romana durante muitos séculos, e ainda hoje é fonte para diversas traduções.\n[…]\nCom o passar dos séculos, as cópias da Vulgata Latina de São Jerônimo começaram a apresentar diferenças textuais por erros dos copistas, passando a circular diferentes versões do que se chamava \"Vulgata\" e várias outras versões latinas da Bíblia.\n[…]\nComo ainda não havia uma única versão oficial da Vulgata de São Jerônimo para ser considerada como a \"antiga edição da Vulgata\", mencionada pelo Concílio de Trento, a Igreja Católica fez uma revisão das versões latinas existentes, incluindo as ditas vulgatas em circulação, tendo como um dos consultores São Roberto Berlarmino, e publicou a chamada Vulgata Sixto-Clementina a fim de disponibilizar uma versão oficial da tradução de São Jerônimo e de torná-la a versão oficial para a liturgia católica latina.\n[…]\nEntre os mais notáveis prólogos se destaca o Prologus Galeatus, de Jerônimo. Jerónimo traduziu os deuterocanónicos, que traduziu do aramaico. Os deuterocanónicos foram incluídos na edição da Vulgata conforme estavam na Antiga Latina.\n[…]\nNova Vulgata",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Primeiro Templo de Jerusalém",
      "descricao": "Templo judaico erguido em Jerusalém e destruído pelos babilônios no século seis antes de Cristo"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a Bíblia hebraica, que rei, filho de Davi, construiu o Primeiro Templo de Jerusalém?",
    "resposta": "Salomão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Solomon%27s_Temple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Solomon%27s_Temple",
        "situacao": "ok",
        "texto": "Solomon's Temple, also known as the First Temple (Hebrew: בַּיִת רִאשׁוֹן, romanized: Bayyit Rīšōn, lit. 'First Temple'), was a Temple in Jerusalem believed to have existed between the 10th and 6th centuries BCE. Its description is largely based on narratives in the Hebrew Bible, in which it was commissioned by biblical king Solomon, the son of King David. It was reportedly destroyed during the si\n[…]\nDue to the extreme religious and political sensitivity of the site, no recent archaeological excavations have been conducted on the Temple Mount, and no positively identified remains of the destroyed temple have been found. Most modern scholars agree that the First Temple existed on the Temple Mount in Jerusalem by the time of the Babylonian siege, and there is significant debate among scholars over the date of its construction and the identity of its builder.\n[…]\nPreviously, many scholars accepted the biblical narrative of the First Temple's construction by Solomon as authentic. During the 1980s, skeptical approaches to the biblical text as well as the archaeological record led some scholars to doubt whether there was any Temple in Jerusalem constructed as early as the 10th century BCE. Some scholars have suggested that the original structure built by Solomon was relatively modest, and was later rebuilt on a larger scale.\n[…]\nMost scholars today agree that a temple had existed on the Temple Mount by the time of the Babylonian siege of Jerusalem (587 BCE), but the identity of its builder and its construction date are strongly debated. Because of the religious and political sensitivities involved, no archaeological excavations and only limited surface surveys of the Temple Mount have been conducted since Charles Warren's expedition of 1867–1870.\n[…]\nThe Israelite temple at Tel Motza, c. 750 BCE discovered in 2012 a few kilometres west of Jerusalem."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Salom%C3%A3o",
        "situacao": "ok",
        "texto": "Templo de Salomão, também conhecido como Primeiro Templo (em hebraico: בֵּית-הַמִּקְדָּשׁ הָרִאשׁוֹן; romaniz.: Primeira Casa do Santuário), foi um templo bíblico em Jerusalém que se acredita ter existido entre os séculos X e VI a.C. Sua descrição é amplamente baseada em narrativas da Bíblia hebraica, na qual foi encomendado pelo rei bíblico Salomão antes de ser destruído durante o Cerco de Jerusa\n[…]\nDuas descobertas do século XXI do período israelita no atual Israel foram encontradas com semelhanças ao Templo de Salomão, conforme descrito na Bíblia hebraica: um modelo de santuário da primeira metade do século X a.C. em Khirbet Qeiyafa ; e o templo de Tel Motza, datado do século IX a.C. e localizado no bairro de Motza, em Jerusalém Ocidental.\n[…]\nO arqueólogo Israel Finkelstein escreve que a localização exata do Templo é desconhecida. Acredita-se que ele tenha sido situado na colina que forma o local do Segundo Templo e do atual Monte do Templo, onde o Domo da Rocha está situado. Segundo a Bíblia, o Templo de Salomão foi construído no Monte Moriá, em Jerusalém, onde um anjo de Deus apareceu a Davi (II Crônicas 3:1). O local era originalmente uma eira que Davi havia comprado de Araúna, o jebuseu (II Samuel 24:18–25 ;II Crônicas 2:3:1).\n[…]\nDe acordo com 1 Reis, a fundação do templo é lançada em Ziv, o segundo mês do quarto ano do reinado de Salomão, e a construção é concluída em Bul, o oitavo mês do décimo primeiro ano de Salomão, levando cerca de sete anos.\n[…]\nA Bíblia hebraica registra que os tírios desempenharam um papel de liderança na construção do templo. O Segundo Livro de Samuel menciona como Davi e Hirão forjaram uma aliança. Essa amizade continua depois que Salomão sucede Davi e os dois se referem um ao outro como irmãos. Um relato literário de como Hirão ajuda Salomão a construir o templo é dado em 1 Reis (capítulos 5–9) e 2 Crônicas (capítulos 2–7).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Presépio",
      "descricao": "Representação do nascimento de Jesus, com a manjedoura, Maria, José e os animais"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1223, na aldeia italiana de Greccio, que santo encenou o nascimento de Jesus, num gesto apontado como a origem do presépio?",
    "resposta": "São Francisco de Assis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nativity_scene"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nativity_scene",
        "situacao": "ok",
        "texto": "In the Christian tradition, a nativity scene, also known as a manger scene, crib or crèche ( or , from French; in Italian presepio or presepe; in some other languages also called a \"Bethlehem\") is the special exhibition, particularly during Christmastide, of art objects representing the birth of Jesus Christ.\n[…]\nThe first nativity scene featuring live actors was organized by Francis of Assisi in 1223 in the Italian town of Greccio. Francis had been inspired by his visit to the Holy Land, where he had been shown the Grotto of the Nativity.\n[…]\nThe first seasonal nativity scene, which seems to have been a dramatic rather than sculptural rendition, is attributed to Saint Francis of Assisi. Its creation is described by Saint Bonaventure in his Life of Saint Francis of Assisi c. 1260.\n[…]\nSaint Francis' manger scene is said to have been enacted at Christmas 1223 in a cave near the Sanctuary of Greccio in the Central Italy town of Greccio. The very small chapel where it is said to have taken place survives. The painting over its altar, and others before 1400, by Giotto at the Assisi Lower Church, and by Antonio Vite in Pistoia, depict Saint Francis kneeling and placing a small baby into a chest-like manger. Giotto adds a miniature ox and ass.\n[…]\nWithin the realm of legend, there is speculation that it was in San Cristóbal de La Laguna, Tenerife, where a nativity scene was first publicly displayed in a private home in Spain. Likewise, the Tenerifean saint Peter of Betancur, a Franciscan and founder of the Bethlehemite Brothers in the 17th century, is credited with being one of the main precursors of nativity scene design in the American lands discovered by the Spanish.\n[…]\nThis is precisely one of the reasons why this saint is often called the \"Saint Francis of Assisi of the Americas\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pres%C3%A9pio",
        "situacao": "ok",
        "texto": "Na tradição cristã, um presépio é a exibição especial, particularmente durante a época natalícia, de objetos de arte que representam o nascimento de Jesus. Embora o termo possa ser usado para qualquer representação do tema muito comum da Natividade de Jesus na arte, ele tem um sentido mais especializado referindo-se a exibições sazonais, em particular conjuntos de figuras esculturais individuais e\n[…]\nOutros personagens da história do nascimento de Jesus, como pastores, ovelhas e anjos, podem ser exibidos perto da manjedoura em um estábulo (ou caverna) destinado a abrigar animais de fazenda, conforme descrito no Evangelho segundo Lucas. Um burro e um boi são tipicamente representados na cena, e os Reis Magos e seus camelos, descritos no Evangelho segundo Mateus, também são incluídos. Muitos também incluem uma representação da Estrela de Belém.\n[…]\nO primeiro presépio vivo, atribuído a São Francisco de Assis, surgiu em 1223 na cidade italiana de Greccio. Francisco teria se inspirado em sua visita à Terra Santa, onde lhe foi mostrado o local tradicional do nascimento de Jesus.\n[…]\nO primeiro presépio sazonal, que parece ter sido uma representação dramática em vez de escultural, é atribuído a São Francisco de Assis. Sua criação é descrita por São Boaventura em sua Vida de São Francisco de Assis c. 1260.\n[…]\nTrês Reis Magos: Os Santos Reis - Gaspar, Baltasar e Melquior - representam os povos pagãos. Eram considerados sábios. Estes três nomes simbolizam as raças distintas, representando a universalidade da Salvação. Eles vieram do Oriente conduzidos pela estrela. Chegaram à cidade de Belém, local de nascimento do Menino Jesus, trazendo presentes: mirra, ouro e incenso. O ouro representava a realeza, a mirra era símbolo da paixão e o incenso é oferecido a Deus: representa a divindade de Jesus.\n[…]\nPresépio Cavalinho\n[…]\nPresépio do Pipiripau\n[…]\nMedia relacionados com Presépio no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Suma Teológica",
      "descricao": "Obra de teologia católica escrita no século treze, que procura conciliar a fé cristã e a filosofia de Aristóteles"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que frade dominicano italiano do século treze escreveu a Suma Teológica, uma das obras centrais do pensamento católico?",
    "resposta": "São Tomás de Aquino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Summa_Theologica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Summa_Theologica",
        "situacao": "ok",
        "texto": "The Summa Theologiae or Summa Theologica (transl. 'Summary of Theology'), often referred to simply as the Summa, is the best-known work of Thomas Aquinas (1225–1274), a scholastic theologian and Doctor of the Church. It is a compendium of all of the main theological teachings of the Catholic Church.\n[…]\nTreatise on the theological virtues (qq. 1–46)\n[…]\n1663. Summa totius theologiae (Ordinis Praedicatorum ed.), edited by Gregorio Donati (d. 1642)\n[…]\n1886–92. Die katholische Wahrheit oder die theologische Summa des Thomas von Aquin (in German), translated by C.M Schneider. Regensburg: G. J. Manz.\n[…]\n1927–43. Theologische Summa (in Dutch), translated by Dominicanen Order. Antwerpen.\n[…]\n1911. The Summa Theologiæ of St. Thomas Aquinas, translated by Fathers of the English Dominican Province. New York: Benziger Brothers.\n[…]\n1920–22. The Summa Theologiæ of St. Thomas Aquinas (revised ed.). London: Benziger Brothers. (A literal and faithful translation)\n[…]\n1989. Summa Theologiae: A Concise Translation, T. McDermott. London: Eyre & Spottiswoode. (Abridged translation)\n[…]\nSumma logicae of William of Ockham\n[…]\nSumma Theologiæ (A Searchable Latin text for Android devices)\n[…]\nSumma Theologica public domain audiobook at LibriVox\n[…]\nSumma Theologiae (A new English translation in progress, by Alfred Freddoso)\n[…]\nPrima pars secunde partis Summe Theologie beati Thome de Aquino. Naples, 1484. (Digitized codex, Latin text, at Somni)\n[…]\n\"Compendium of Theology\". Internet Archive. Translated by Cyril Vollert, S.J., S.T.D. St. Louis, London: B. Herder Book & Co. 1947. p. 396.{{cite web}}:  CS1 maint: deprecated archival service (link) (Compendium Theologiae, an unfinished Aquinas' synthesis of the Summa Theologiae for the salvation of common lay people who were not teachers, novices or university students of theology)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Suma_Teol%C3%B3gica",
        "situacao": "ok",
        "texto": "A Suma Teológica ou Summa Theologiae (significado: 'Resumo da Teologia') muitas vezes referida simplesmente como a Suma, é a obra mais conhecida de Tomás de Aquino (1225–1274), um teólogo escolástico e Doutor da Igreja. É um compêndio de todos os principais ensinamentos da Igreja Católica, destinado a ser um guia introdutório para estudantes de teologia, incluindo seminaristas e leigos.\n[…]\nAquino concebeu a Suma especificamente como uma obra adequada aos teólogos iniciantes, como cita no Prooemium (Prólogo):\n[…]\nEnquanto lecionava no Santa Sabina studium provincale - percursor da Santa Maria sopra Minerva studium generale e do Colégio de São Tomé, que no século XX, se tornaria a Pontifícia Universidade de São Tomás de Aquino, Angelicum - que Tomás começou a escrever a Suma. Ele completou a Prima Pars ('primeira parte') em sua totalidade e a distribuiu na Itália antes de partir para assumir sua segunda regência na França, como professor da Universidade de Paris (1269–1272).\n[…]\nA Parte III da Suma (Tertia Pars) trata de questões sobre a pessoa e a obra de Cristo, e os sacramentos. É composta por 90 questões e 549 artigos. Esta parte não chegou a ser completada por Tomás de Aquino. O conteúdo é o seguinte:\n[…]\nO Apóstolo - Paulo, o Apóstolo: Ele escreveu a maioria do cânone do Novo Testamento, após sua conversão, o que lhe rendeu o título de \"O Apóstolo\" por Tomás de Aquino, mesmo que Paulo não estivesse entre os doze apóstolos originais de Jesus.\n[…]\nAl-Ghazel – Aquino também cita o teólogo islâmico al-Ghazali (Algazel).\n[…]\nSegundo o Papa Pio XI, \"A Suma Teológica é o céu visto da terra\" (in: Alocução de 12 de dezembro de 1924 no colégio Angelicum de Roma), ou que \"A todos quantos agora sentem sede da verdade, dizemos-lhes: ide a Tomás de Aquino\" (in: Studiorum Ducem (es)).\n[…]\nfragmentos da Suma Teológica.\n[…]\nA Suma Teologica Em Forma de Catecismo - Pe. Tomás Pégues OP - Google Livros",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Metodismo",
      "descricao": "Movimento cristão protestante surgido na Inglaterra no século dezoito"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que pregador anglicano do século dezoito, ao lado do irmão Charles, deu origem ao movimento metodista na Inglaterra?",
    "resposta": "John Wesley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Methodism",
      "https://en.wikipedia.org/wiki/John_Wesley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Methodism",
        "situacao": "ok",
        "texto": "Methodism, also called the Methodist movement, is a Protestant Christian tradition whose origins, doctrines and practice derive from the life and teachings of John Wesley. George Whitefield and John's brother Charles Wesley were also significant early leaders in the movement. They were named Methodists for \"the methodical way in which they carried out their Christian faith\".\n[…]\nIn 1735, at the invitation of the founder of the Georgia Colony, General James Oglethorpe, both John and Charles Wesley set out for North America to be ministers to the colonists and missionaries to the Native Americans. Unsuccessful in their work, the brothers returned to England conscious of their lack of genuine Christian faith.\n[…]\nHe records in his journal: \"I felt I did trust in Christ, Christ alone, for salvation; and an assurance was given me that He had taken away my sins, even mine, and saved me from the law of sin and death.\" Charles Wesley had reported a similar experience a few days previously. Considering this a pivotal moment, Daniel L. Burnett writes: \"The significance of [John] Wesley's Aldersgate Experience is monumental ...\n[…]\nWesleyan Methodism is broadly evangelical in doctrine and is characterized by Wesleyan theology; John Wesley is studied by Methodists for his interpretation of church practice and doctrine. At its heart, the theology of John Wesley stressed the life of Christian holiness: to love God with all one's heart, mind, soul and strength and to love one's neighbour as oneself. One popular expression of Methodist doctrine is in the hymns of Charles Wesley.\n[…]\nKent, John. (2002) Wesley and the Wesleyans, Cambridge University Press, ISBN 0-521-45532-4\n[…]\nTurner, John Munsey. (2003) John Wesley: The Evangelical Revival and the Rise of Methodism in England\n[…]\nWesleyan Methodist theological texts, tracts, and discipleship resources"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_Wesley",
        "situacao": "ok",
        "texto": "John Wesley (; 28 June [O.S. 17 June] 1703 – 2 March 1791) was an English cleric, theologian, and evangelist who was a principal leader of a revival movement within the Church of England known as Methodism. The societies he founded became the dominant form of the ongoing independent Methodist movement.\n[…]\nAs the number of preachers and preaching-houses increased, doctrinal and administrative matters needed to be discussed; so John and Charles Wesley, along with four other clergy and four lay preachers, met for consultation in London in 1744. This was the first Methodist conference; subsequently, the Conference (with Wesley as its president) became the ruling body of the Methodist movement.\n[…]\nFollowing an illness in 1748 Wesley was nursed by a class leader and housekeeper, Grace Murray, at an orphan house in Newcastle. Taken with Grace, he invited her to travel with him to Ireland in 1749 where he believed them to be betrothed though they were never married. It has been suggested that his brother Charles Wesley objected to the engagement, though this is disputed. Subsequently, Grace married John Bennett, a preacher.\n[…]\nWesley's prose, Works, were first collected by himself (32 vols., Bristol, 1771–74, frequently reprinted in editions varying greatly in the number of volumes). His chief prose works are a standard publication in seven octavo volumes of the Methodist Book Concern, New York. The Poetical Works of John and Charles, ed. G. Osborn, appeared in 13 vols., London, 1868–72.\n[…]\nSermons of John Wesley\n[…]\nWorks by John Wesley at Project Gutenberg\n[…]\nWorks by or about John Wesley at the Internet Archive\n[…]\nWorks by John Wesley at LibriVox (public domain audiobooks)\n[…]\nWorks by John Wesley at the Biodiversity Heritage Library\n[…]\nJohn Wesley at the Eighteenth-Century Poetry Archive (ECPA)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Metodismo",
        "situacao": "ok",
        "texto": "O Metodismo é uma família denominacional protestante, originária de um avivamento espiritual cristão ocorrido na Inglaterra do século XVIII. As igrejas originárias do movimento são chamadas de metodistas. A primeira denominação metodista foi organizada em 1739. O movimento enfatizou a relação íntima do indivíduo com Deus, iniciando-se com uma conversão pessoal e seguindo uma vida de ética e moral \n[…]\nOutra ênfase forte do movimento foi o seu engajamento em questões de assistência e ação social. O metodismo foi liderado pelos Reverendos John Wesley (1703–1791) e seu irmão Charles Wesley (1707–1788), considerado um dos maiores expoentes da música sacra protestante, ambos ministros da Igreja Anglicana. A maioria das denominações metodistas são membros do Concílio Metodista Mundial.\n[…]\nA origem do metodismo está ligada a três nomes: John Wesley, seu autor e organizador, Charles Wesley, seu irmão, escritor de hinos, e George Whitefield, um eloquente pregador e reavivalista. Em 1729, John, recém ordenado diácono, se reuniu com um grupo de estudantes organizado por seu irmão Charles, na Universidade de Oxford, com o propósito de estudar as Escrituras, e praticar a religião com fidelidade.\n[…]\nMais tarde, após uma viagem à América (1736–1738), John Wesley organizou, em 1739, a primeira Sociedade Metodista, e abriu uma capela (The Foundry) em Londres. Como os púlpitos da Igreja Anglicana foram se fechando aos irmãos Wesley e Whitefield, este decidiu fazer as pregações ao ar livre. Seu sucesso foi enorme, e logo os irmãos Wesley seguiram seu exemplo.\n[…]\nEm 1742, foi criado um sistema de \"classes\", grupos pequenos de aproximadamente 12 pessoas nos quais os metodistas se aconselhavam e prestavam contas mutuamente de sua vida espiritual. Dois anos depois foi realizada a primeira conferência anual dos pregadores metodistas com o rev. John Wesley.\n[…]\nIgreja Evangélica Metodista Portuguesa.\n[…]\nJohn Wesley",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cientologia",
      "descricao": "Movimento religioso criado nos Estados Unidos nos anos 1950"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor americano de ficção científica criou a Cientologia, nos anos 1950?",
    "resposta": "L. Ron Hubbard",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scientology"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scientology",
        "situacao": "ok",
        "texto": "Scientology is a set of beliefs and practices created by the American author L. Ron Hubbard. Hubbard initially presented his ideas in 1950 as a form of talk therapy called Dianetics. He later expanded and reframed those ideas as a religion, which he named Scientology. In 1953, he founded the Church of Scientology, which, by one 2014 estimate, had around 30,000 members.\n[…]\nFrench courts have issued multiple convictions involving Scientology, including a fraud conviction of L. Ron Hubbard tried in absentia (1978), fraud and involuntary homicide in Lyon (1996), witness tampering in Marseilles (1996), fraud in Marseille (1999), and organized fraud in Paris (2009).\n[…]\nScientology has been opposed to psychiatry and psychology since the 1950s. L. Ron Hubbard portrayed those fields as harmful and illegitimate. The Church promotes auditing as an alternative practice, which medical experts and scholars describe as unlicensed psychological therapy, and which led to charges of \"practicing medicine without a license\" in the early 1950s and 1960s. Scientology's anti-psychiatry campaigns have discouraged people from seeking medical and mental health treatment.\n[…]\nMany of the organization's critics have utilized the internet, for instance to disseminate leaked confidential documents. The Church of Scientology has sought to sue websites for disseminating Hubbard's writings.\n[…]\nScientology has received an unusually high level of media attention. Hubbard often described journalists in negative terms, calling them \"merchants of chaos\", and discouraged Scientologists from interacting with journalists.\n[…]\nAn Annotated Bibliographical Survey of Primary and Secondary Literature on L. Ron Hubbard and Scientology\n[…]\nLord, Phil (2019). \"Scientology's Legal System\". Marburg Journal of Religion. 21 (1). Marburg Journal of Religion. doi:10.2139/ssrn.3232113. SSRN 3232113."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cientologia",
        "situacao": "ok",
        "texto": "Cientologia é um conjunto de crenças e práticas relacionadas criado por L. Ron Hubbard (1911–1986), começando em 1952, como sucessor ao seus sistemas de auto-ajuda chamado Dianéticas. Hubbard caracterizou a Cientologia como religião e em 1953 incorporou a Igreja da Cientologia em Camden, Nova Jersey.\n[…]\nA segunda Igreja da Cientologia a ser criada, após a da Califórnia, estava em Auckland, Nova Zelândia. Em 1955, Hubbard criou a Igreja Fundadora da Cientologia em Washington, D.C. Em 1957, Igreja da Cientologia da Califórnia recebeu concessão de estatuto de isenção fiscal por parte dos Estados Unidos Receita Federal (IRS), e assim, por um tempo, existiu ainda outras igrejas locais. IEm 1958, no entanto, a Receita Federal iniciou uma revisão da adequação desse status.\n[…]\nEm 1967, a Receita Federal dos EUA removeu o status de isenção fiscal da Cientologia, afirmando que suas atividades eram comerciais e operadas para o benefício de Hubbard e não para fins de caridade ou religião. A decisão resultou em um processo judicial que foi resolvido em favor da Igreja, um quarto de século mais tarde. Este foi o mais longo processo judicial na história da Receita Federal americana\n[…]\nHá rumores de que os níveis de OT adicionais, que dizem ser baseado em material escrito por Hubbard há muito tempo, serão lançados em algum momento apropriado no futuro.\n[…]\nOutra grande influência foi a Semântica Geral de Alfred Korzybski. Hubbard era amigo do colega escritor de ficção científica A. E. van Vogt, que explorou as implicações de lógica não-aristotélica das obras de Korzybski como The World of Null-A, e a visão de Hubbard sobre \"mente reativa\" tem paralelos claros e reconhecidos com o pensamento de Korzybski, na verdade, o \"antropômetro\" de Korzybski pode ter inspirado invenção do E-meter de Hubbard.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Frei Galvão",
      "descricao": "Frade franciscano paulista do século dezoito, primeiro santo nascido no Brasil"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 2007, numa missa em São Paulo, que papa canonizou Frei Galvão, o primeiro santo nascido no Brasil?",
    "resposta": "Bento Dezesseis",
    "distratores": [
      "João Paulo Segundo",
      "Francisco",
      "Paulo Sexto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Frei_Galvão"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Frei_Galvão",
        "situacao": "ok",
        "texto": "Santo Antônio de Sant'Ana Galvão, O.F.M (Guaratinguetá, 1739 — São Paulo, 23 de dezembro de 1822), mais conhecido como Frei Galvão ou São Frei Galvão foi um frade franciscano brasileiro, reconhecido por sua vida de virtude exemplar, profunda humildade e dons extraordinários de oração e caridade. É considerado uma das figuras religiosas mais veneradas do Brasil, conhecido por seus poderes de cura, \n[…]\nFoi canonizado pelo Papa Bento XVI em 11 de maio de 2007, durante sua visita apostólica ao Brasil, tornando-se assim o primeiro santo nascido em território brasileiro. A causa de sua canonização foi conduzida pela Irmã Célia Cadorin, da Congregação das Irmãzinhas da Imaculada Conceição, com apoio decisivo do Cardeal Dom Paulo Evaristo Arns, então arcebispo de São Paulo.\n[…]\nEm 25 de outubro de 1998, Galvão se tornou o primeiro religioso nascido no Brasil a ser beatificado pelo Vaticano, tendo sido declarado Venerável um ano antes, em 8 de março de 1997. Em 11 de maio de 2007, durante a visita de cinco dias do Papa Bento XVI ao Brasil, se tornou a primeira pessoa nascida no Brasil a ser canonizada pela Igreja Católica.\n[…]\nA cerimônia de mais de duas horas, realizada ao ar livre no Aeroporto Militar Campo de Marte, perto do centro de São Paulo, reuniu cerca de 800 mil pessoas, segundo estimativas oficiais. Galvão foi o primeiro santo que o Papa Bento XVI canonizou numa cerimônia realizada fora da Cidade do Vaticano. Sua elevação ao status de santo veio depois que a Igreja concluiu que ele havia realizado pelo menos dois milagres.\n[…]\nEm julho de 2012, Frei Galvão ficou em 23º lugar entre os \"100 maiores brasileiros de todos os tempos\", concurso realizado pelo SBT baseado no programa The Greats da BBC.\n[…]\nLista de santos brasileiros\n[…]\n«Homilia de canonização». Canção Nova\n[…]\n«Papa canonizará Frei Galvão em missa em São Paulo». BBC"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ordem Mevlevi",
      "descricao": "Ordem sufi turca famosa pela dança giratória dos dervixes"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Os dervixes rodopiantes da ordem sufi Mevlevi seguem os ensinamentos de que poeta místico de língua persa do século treze?",
    "resposta": "Rumi",
    "distratores": [
      "Omar Khayyam",
      "Hafez",
      "Saadi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mevlevi_Order"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mevlevi_Order",
        "situacao": "ok",
        "texto": "The Mevlevi Order or Mawlawiyya (Turkish: Mevlevilik; Persian: طریقت مولویه) is a Sufi order that originated in Konya, Turkey (formerly capital of the Sultanate of Rum) and which was founded by the followers of Jalaluddin Muhammad Balkhi Rumi, a 13th-century Persian poet, Sufi mystic, and theologian. The Mevlevis are also known as the \"whirling dervishes\" due to their famous practice of whirling w\n[…]\nStudy of the Quran and Rumi's works (especially the Masnavi-e-Ma'navi)\n[…]\nRumi mentions whirling in a number of his poems. In one ghazal in the Divani Shamsi Tabriz he says:\n[…]\nBy the late Ottoman period, the Mevlevi Order held a significant ceremonial role in state affairs. Sultan Mehmed V Reşâd demonstrated reverence for the Mevlevi tradition by involving the order in his enthronement ritual. During a visit to Rumi’s mausoleum, he entrusted a sword belonging to Caliph Omar to the grandson of Rumi, Abdülhalim Çelebi, who girded the sword at the Sultan’s waist before performing a two-rakat prayer.\n[…]\nAccording to a legend, Murad II dreamt of meeting Rumi at the site and vowed to construct a Mevlevi lodge there. This project may have been a way to strengthen the Sultan’s influence in western Anatolia by aligning with the Mevlevis, who held social influence in the region. However, between 1435 and 1453, Murad II expelled the Mevlevis, possibly for political reasons, and the convent-mosque was turned into a congregational mosque.\n[…]\nThe Mevlevi Order’s influence extended into Ottoman education and architecture. The Madrasa of Sultan Walad, built within the Mevlevi complex in Konya by Sultan Murad III in 1584, was named after Rumi’s son, reflecting the lasting ties between the order and the ruling class. More recently, in 2004, a conference hall named after Sultan Walad was included in the Mevlana Cultural Centre in Konya.\n[…]\nMevlevi Order of America"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mevlevi",
        "situacao": "ok",
        "texto": "Mevlevi (em turco: Mevlevilik, \"mevlevismo\"; em turco otomano: مولويه, transl. Mevleviyye) é uma ordem (tariqa) sufi islâmica, fundada pelos seguidores de Jalaladim Maomé Rumi, um poeta, jurista e teólogo persa do século XIII, na cidade de Cônia, na atual Turquia. São conhecidos também como dervixes rodopiantes, devido à sua célebre prática do rodopio, como forma de dhikr (lembrança de Deus). Os i\n[…]\nLiteratura persa\n[…]\nMisticismo\n[…]\n«Galata Mevlevi Ensemble». www.galatamevlevi.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Buda",
      "descricao": "Siddhartha Gautama, mestre espiritual da Índia antiga que fundou o budismo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Buda não era o nome de Siddhartha Gautama, mas um título dado a ele. Em sânscrito, o que esse título significa?",
    "resposta": "O Desperto",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Buddha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Buddha",
        "situacao": "ok",
        "texto": "Siddhartha Gautama, most commonly referred to as the Buddha (lit. 'the awakened one'), was a wandering religious teacher who lived in the eastern Indo-Gangetic Plains during the 6th or 5th century BCE and founded Buddhism. According to Buddhist legends, he was born in Lumbini, in what is now Nepal, to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic.\n[…]\nThe sources which present a complete picture of the life of Siddhārtha Gautama are a variety of different, and sometimes conflicting, traditional biographies from a later date. These include the Buddhacarita, Lalitavistara Sūtra, Mahāvastu, and the Nidānakathā. Of these, the Buddhacarita is the earliest full biography, an epic poem written by the poet Aśvaghoṣa in the first century CE.\n[…]\nThe ancient Indians were generally unconcerned with chronologies, being more focused on philosophy. Buddhist texts reflect this tendency, providing a clearer picture of what Gautama may have taught than of the dates of the events in his life. These texts contain descriptions of the culture and daily life of ancient India which can be corroborated from the Jain scriptures, and make the Buddha's time the earliest period in Indian history for which significant accounts exist.\n[…]\nBritish author Karen Armstrong writes that although there is very little information that can be considered historically sound, we can be reasonably confident that Siddhārtha Gautama did exist as a historical figure. Michael Carrithers goes further, stating that the most general outline of \"birth, maturity, renunciation, search, awakening and liberation, teaching, death\" must be true.\n[…]\nSri Siddhartha Gautama, a 2013 Sinhalese epic biographical film based on the life of Lord Buddha.\n[…]\nFamily of Gautama Buddha\n[…]\nList of places where Gautama Buddha stayed\n[…]\nWorks by or about Siddhārtha Gautama at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sidarta_Gautama",
        "situacao": "ok",
        "texto": "Sidarta Gautama, também chamado Buda (\"o desperto\"), foi um mestre religioso itinerante, ou śramaṇa, que viveu nas planícies indo-gangéticas orientais no século VI ou V a.C. e fundou o budismo. Segundo as narrativas budistas, nasceu em Lumbini, no atual Nepal, em uma família do clã Shakya, e deixou a vida doméstica para viver como asceta itinerante. Depois de mendigar, praticar o ascetismo e medit\n[…]\nNos nicaias, Buda costuma referir-se a si mesmo como Tathāgata. O título \"Buda\", que pode ser traduzido como \"desperto\" ou \"iluminado\", está documentado desde o século III a.C. A comunidade budista reuniu regras de disciplina monástica no Vinaya Piṭaka e discursos atribuídos a ele no Sutta Piṭaka. Esses textos foram transmitidos oralmente em línguas indo-arianas médias.\n[…]\nBuda significa \"desperto\" ou \"iluminado\". O termo vem da raiz sânscrita budh (बुध्), que pode significar acordar, perceber, aprender ou tomar consciência. A raiz também permite a imagem de \"abrir-se\", como uma flor. Assim, Buda é um título, e não um nome pessoal: designa alguém que alcançou bodhi, o despertar. Buddhi, a faculdade de formar conceitos, raciocinar, discernir e compreender, permite distinguir o verdadeiro (satya) do falso.\n[…]\nSammāsambuddho — \"perfeitamente desperto por si mesmo\".\n[…]\nO Dhammacakkappavattana Sutta (SN 56) atribui ao Tathāgata a descoberta do Caminho do Meio, distante tanto da entrega aos prazeres quanto da mortificação do corpo. Esse caminho é apresentado como o Nobre Caminho Óctuplo. Em textos posteriores, Gautama aparece cada vez mais sob o título de Buda, \"o desperto\".\n[…]\nNo século XX, Muhammad Hamidullah sugeriu que a figueira mencionada na sura 95 do Alcorão aludiria ao local do despertar de Buda e permitiria interpretá-lo como profeta. Essa leitura é uma hipótese particular, não uma identificação expressa no texto corânico.\n[…]\nTemplo de Mahabodhi, complexo no local tradicional do despertar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pentecostes",
      "descricao": "Festa cristã que celebra a descida do Espírito Santo sobre os apóstolos, depois da Páscoa"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A festa cristã de Pentecostes, que celebra a descida do Espírito Santo, tem nome de origem grega. O que ele significa?",
    "resposta": "Quinquagésimo dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pentecost"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pentecost",
        "situacao": "ok",
        "texto": "Pentecost (also called Whit Sunday, Whitsunday or Whitsun) is a Christian holiday that takes place on the 49th day (50th day when inclusive counting is used) after Easter. It commemorates the descent of the Holy Spirit upon the Apostles of Jesus, Mary, and other followers of Christ, while they were in Jerusalem celebrating the Feast of Weeks, as described in the Acts of the Apostles (Acts 2:1–31).\n[…]\nAcross denominational lines Pentecost has been an opportunity for Christians to honor the role of the Holy Spirit in their lives, and celebrate the birth of the Christian Church in an ecumenical context.\n[…]\nAbove all, Pentecost is a day to hold Confirmation celebrations for youth. Flowers, the wearing of white robes or white dresses recalling Baptism, rites such as the laying on of hands, and singing play prominent roles on these occasions.\n[…]\nA popular tradition arose in both West and East of decorating the church with roses on Pentecost, leading to a popular designation of Pentecost as Latin: Festa Rosalia or \"Rose Feast\"; in Greek this became ρουσάλια (rousália). This led to Rusalii becoming the Romanian-language term for the feast, as well as the Neapolitan popular designation Pasca rusata (\"rosey Easter\").\n[…]\nIn Port Vila, the capital of Vanuatu, people originating from Pentecost Island usually celebrate their island's name-day with a special church service followed by cultural events such as dancing.\n[…]\nWilliam Shakespeare mentions Pentecost in a line from Romeo and Juliet Act 1, Scene V. At the ball at his home, Capulet speaks in refuting an overestimate of the time elapsed since he last danced: \"What, man? 'Tis not so much, 'tis not so much! 'Tis since the nuptial of Lucentio, Come Pentecost as quickly as it will, Some five-and-twenty years, and then we mask'd.\" Note here the allusion to the tradition of mumming, Morris dancing and wedding celebrations at Pentecost.\n[…]\nPentecost season"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pentecostes",
        "situacao": "ok",
        "texto": "Pentecostes, também conhecido como Domingo de Pentecostes ou Dia de Pentecostes, é um feriado cristão que ocorre no 49º dia (50º dia quando a contagem inclusiva é usada) após a Páscoa. Comemora a descida do Espírito Santo sobre os apóstolos de Jesus enquanto eles estavam em Jerusalém celebrando a Festa das Semanas, conforme descrito nos Atos dos Apóstolos (Atos 2:1-31).\n[…]\nÉ frequentemente considerado o dia do nascimento da Igreja e inspirou o movimento pentecostal, além de marcar o último dia da Festa do Divino Espírito Santo, uma tradição no catolicismo popular brasileiro e em outros países.\n[…]\nO termo Pentecostes vem do grego koiné: πεντηκοστή, romaniz: pentēkostē, lit. 'quinquagésimo'. Um dos significados de \"Pentecostes\" na Septuaginta, a tradução koiné da Bíblia hebraica, refere-se ao festival de Shavuot, um dos Três Festivais de Peregrinação, que é celebrado no quinquagésimo dia após o Pessach, de acordo com Deuteronômio 16:10, e Êxodo 34:22, onde é referido como o \"Festival das Semanas\" (grego koiné: ἑορτὴν ἑβδομάδων, romaniz: heortēn hebdomádōn ).\n[…]\nPentecostes é o símbolo do Cenáculo, onde os apóstolos se reuniram, pela primeira vez, à espera do Espírito Santo. O Cenáculo, a partir deste momento, passa a ser considerado um símbolo de sacralidade na ótica cristã, pois até então era considerado pelos judeus como apenas um lugar de reuniões. Atualmente o 50 º dia após a Páscoa é considerado pelos cristãos como o dia de Pentecostes, e também foi o dia da descida do Espírito Santo (Espírito de Deus) sobre os apóstolos.\n[…]\nTal experiência é chamada de batismo no Espírito Santo. Existem movimentos inspirados no Pentecostes em toda a história do cristianismo, sendo enfatizados, especialmente em meados do século XX, com o surgimento das primeiras Igrejas Pentecostais, e o nascimento da Renovação Carismática Católica.\n[…]\nEspírito Santo\n[…]\nDons do Espírito Santo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Diwali",
      "descricao": "Grande festa hindu celebrada com lamparinas, velas e fogos de artifício"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Diwali, grande festa hindu celebrada com velas e fogos de artifício, vem de uma palavra sânscrita que significa o quê?",
    "resposta": "Fileira de lamparinas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diwali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "Dipavali (IAST: Dīpāvalī), commonly known as Diwali (), is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It symbolises the spiritual victory of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance. Diwali is celebrated during the Hindu lunisolar months of Ashvin (according to the amanta tradition) a\n[…]\nThe 16th-century Portuguese traveller Domingo Paes wrote of his visit to the Hindu Vijayanagara Empire, where Dipavali was celebrated in October with householders illuminating their homes, and their temples, with lamps. It is mentioned in the Ramayana that Diwali was celebrated for only 2 years in Ayodhya.\n[…]\nThis day is commonly celebrated as Diwali in Tamil Nadu, Goa, and Karnataka. Traditionally, Marathi Hindus and South Indian Hindus receive an oil massage from the elders in the family on the day and then take a ritual bath, all before sunrise. Many visit their favourite Hindu temple.\n[…]\nNational and civic leaders such as the former Prince Charles have attended Diwali celebrations at prominent Hindu temples in the UK, such as the Swaminarayan Temple in Neasden, using the occasion to highlight contributions of the Hindu community to British society. Additionally, cities across the UK show support of the celebrations through Diwali lights, decorations, and cultural festivities such as dance performances, food stalls and workshops.\n[…]\nDiwali was first celebrated in the White House by George W. Bush in 2003, and its religious and historical significance was officially recognized by the United States Congress in 2007. Barack Obama became the first president to personally attend Diwali at the White House in 2009. On the eve of his first visit to India as President of the United States, Obama released an official statement sharing his best wishes with \"those celebrating Diwali\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "O Diwali (também Deepavali ou Deepawali) é uma festa religiosa hindu, conhecida também como o festival das luzes. Durante o Diwali, celebrado uma vez ao ano, as pessoas estreiam roupas novas, dividem doces e lançam fogos de artifício. Este festival celebra, entre outras histórias, a destruição de Narakasura por Sri Krishna, o que converte o Diwali num evento religioso que simboliza a destruição da\n[…]\nO Diwali é um grande feriado indiano, e um importante festival para o hinduísmo, o sikhismo, o budismo e o jainismo. Muitas histórias são associados a Diwali. O feriado é atualmente comemorado pelos hindus, sikhs e jainas em todo o mundo como o festival das luzes, onde as luzes ou lâmpadas significam a vitória do bem sobre o mal dentro de cada ser humano.\n[…]\nEm muitas partes da Índia, é o Baile do Rei Ramachandra em Ayodhya, após 14 anos de exílio na floresta. Sri Rama, um dos avatares de Vishnu, derrotou o mal encarnado em Ravana, que havia raptado sua esposa Sitadevi. O povo de Ayodhya (a capital do seu reino) congratulou-se com Rama por iluminação em fileiras (avali) das lâmpadas (Deepa), dando assim o seu nome: Deepavali. Esta palavra, em devido tempo, se tornou Diwali em hindi.\n[…]\nMas, no sul indiano em algumas línguas, a palavra não sofreu qualquer alteração e, portanto, o festival é chamado Deepavali no sul da Índia. Existem várias observâncias do feriado em toda a Índia.\n[…]\nApós a sua libertação ele foi para o Darbar Sahib (Templo Dourado) na cidade santa de Amritsar, onde foi saudado pelo povo com tamanha felicidade que acenderam velas e diyas para cumprimentar o Guru. Devido a isto, sikhs referem frequentemente que Diwali também como BANDI Chhorh Divas - \"o dia da libertação dos detidos\".\n[…]\n«Diwali - Veja as fotos do festival das luzes na Índia». Folha de S.Paulo\n[…]\n«Fotos: Diwali, o festival das luzes». Resumo Fotográfico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Allan Kardec",
      "descricao": "Educador francês, nascido Hippolyte Léon Denizard Rivail, que codificou a doutrina espírita"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a tradição espírita, o pseudônimo Allan Kardec teria sido o nome do educador francês numa vida passada, quando ele foi o quê?",
    "resposta": "Um druida",
    "distratores": [
      "Um monge beneditino",
      "Um cavaleiro templário",
      "Um sacerdote egípcio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Allan_Kardec"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Allan_Kardec",
        "situacao": "ok",
        "texto": "Hippolyte Léon Denizard Rivail (French: [ʁivaj]; 3 October 1804 – 31 March 1869), known by the pen name of Allan Kardec ([kaʁdɛk]), was a French educator, translator, and writer. He is the author of the five books known as the Spiritist Codification, and the founder of Spiritism.\n[…]\nRivail's work with Pestalozzi helped lay the foundations for the teaching model in schools in France and Germany. For several decades he helped advance Pestalozzi's pedagogy in France, founding schools and working as a teacher, educational writer and translator.\n[…]\nRivail wrote under the name \"Allan Kardec\", allegedly following the suggestion of a spirit identified as \"Truth\". On 18 April 1857, as Allan Kardec, Rivail published his first book on Spiritism, The Spirits Book, comprising a series of answered questions (502 in the first edition and 1,019 in later editions) exploring matters concerning the nature of spirits, the spirit world, and the relationship between the spirit world and the material world.\n[…]\nAfter his death caused by aneurysm in 1869, Kardec was buried at the Cimetière du Père Lachaise.\n[…]\nThe Spirits' Book by Allan Kardec (PDF)\n[…]\nThe Book on Mediums by Allan Kardec (PDF)\n[…]\nThe Gospel According to Spiritism by Allan Kardec (PDF)\n[…]\nHeaven and Hell by Allan Kardec (PDF)\n[…]\nGenesis by Allan Kardec (PDF)\n[…]\nAllan Kardec Educational Society\n[…]\nALLAN KARDEC: Free PDF spiritist books in several languages\n[…]\nKardec a 2019 film.\n[…]\nAllan Kardec Biographic Information\n[…]\nThe Spirits' Book Archived 2005-09-06 at the Wayback Machine by Allan Kardec\n[…]\nDivulgacion de Espiritismo en Argentina de Allan Kardec\n[…]\nLibros de Espiritismo de Allan Kardec\n[…]\nWorks by Allan Kardec at Domínio Público\n[…]\nWorks by Allan Kardec at LibriVox (public domain audiobooks)\n[…]\n[1] by Federação Espirita Brasileira"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Allan_Kardec",
        "situacao": "ok",
        "texto": "Hippolyte Léon Denizard Rivail (francês: [ʁivɑj]; Lyon, 3 de outubro de 1804 – Paris, 31 de março de 1869) foi um educador, autor e tradutor francês. Sob o pseudônimo de Allan Kardec (francês: [kaʁdɛk]), notabilizou-se como o codificador do espiritismo (neologismo por ele criado).\n[…]\nDurante este período, também tomou conhecimento da psicografia. Ele então teria tido contato com um \"espírito familiar\", que supostamente teria passado a orientar os seus trabalhos. O pseudônimo \"Allan Kardec\" foi escolhido porque esta entidade teria revelado que ambos haviam vivido juntos, em uma vida passada, entre os druidas do povo celta, na região da Gália (atual França).\n[…]\nAllan Kardec já fez declarações controversas, que foram tidas como etnocêntricas e racistas em várias de suas obras ainda no século XIX contra chineses e africanos, sendo amplamente criticado no meio católico mais tradicionalista por conta disso.\n[…]\nOutro texto conhecido de Allan Kardec, publicado em 1862 em uma revista de artigos da doutrina espírita na França, diz:\n[…]\nNo entanto, Kardec apoiava o conceito de união \"sem distinção de raças\", como na obra O Evangelho Segundo o Espiritismo, de 1864. Na obra O Livro dos Espíritos, ele também afirma que todos os homens são iguais perante Deus, rumam para o mesmo fim e estão sujeitos às mesmas leis.\n[…]\nSão popularmente conhecidas como cinco obras básicas que versam sobre o Espiritismo, sob o pseudônimo Allan Kardec:\n[…]\nModerno Espiritualismo\n[…]\nAllan Kardec. «O Livro dos Espíritos» (PDF). Dominiopublico.gov.br. Cópia arquivada (PDF) em 29 de junho de 2020\n[…]\nAllan Kardec. «O Evangelho Segundo o Espiritismo» (PDF). Dominiopublico.gov.br. Cópia arquivada (PDF) em 29 de junho de 2020\n[…]\nAllan Kardec. «A Gênese» (PDF). Dominiopublico.gov.br. Cópia arquivada (PDF) em 1 de março de 2021",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Xiismo",
      "descricao": "Um dos dois grandes ramos do islã, ao lado do sunismo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra xiita vem de uma expressão árabe que significa o partido ou os seguidores de quem?",
    "resposta": "Ali",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shia_Islam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shia_Islam",
        "situacao": "ok",
        "texto": "Shia Islam is the second-largest branch of Islam. It is rooted in the belief that the Islamic prophet Muhammad explicitly designated his cousin and son-in-law Ali ibn Abi Talib (r. 656–661) as his rightful political successor (caliph) and the divinely guided spiritual leader of the Muslim community (imam).\n[…]\nThe practical significance of ʿaql as a jurisprudential source is considerable: it gives Shia jurisprudence a degree of rational flexibility that allows it to engage with novel legal questions through reasoned argument rather than exclusively through textual precedent.\n[…]\nSignificant Shia communities exist in the coastal regions of West Sumatra and Aceh in Indonesia (see Tabuik). The Shia presence is negligible elsewhere in Southeast Asia, where Muslims are predominantly Shāfiʿī Sunnīs.\n[…]\nA significant Shia minority is present in Nigeria, made up of modern-era converts to a Shia movement centered around Kano and Sokoto states. Several African countries like Kenya, South Africa, Somalia, etc. hold small minority populations of various Shia subsects, primarily descendants of immigrants from South Asia during the colonial period, such as the Khoja.\n[…]\nTwelver Shia constitute the majority of the population in Iran (90%), Iraq (65%) and Azerbaijan (55%). Significant populations also exist in Afghanistan, Bahrain (40% of Muslims) and Lebanon (27–29% of Muslims).\n[…]\nHouthis and their allies gained control of a significant part of Yemen's territory, and resisted the Saudi Arabian-led intervention in Yemen seeking to restore Hadi in power. (See: Iran–Saudi Arabia proxy conflict). Both the Houthis and the Saudi Arabian-led coalition were being attacked by the Sunnī Islamist militant group and Salafi-jihadist terrorist organization ISIL/ISIS/IS/Daesh."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xiismo",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nOs xiitas (em árabe: شيعة , Shīʿah, abreviatura de شيعة علي, Shīʻatu ʻAlī, \"partido de Ali\") são o segundo maior ramo de crentes do Islão, constituindo 16% do total dos muçulmanos, atrás dos sunitas, que são 84% da totalidade dos muçulmanos. Os xiitas consideram Ali, o genro e primo do profeta Maomé, como o seu sucessor legítimo e consideram ilegítimos os três califas sunitas que assumiram a liderança da comunidade muçulmana após a morte de Maomé.\n[…]\nOs muçulmanos xiitas estão espalhados por todas as partes do mundo, mas alguns países têm uma concentração particularmente forte: o Irão é quase totalmente xiita, e no Iraque, um país onde cerca de 95% da população é muçulmana, cerca de dois terços são xiitas. Eles eram oprimidos pelo partido Baath, de Saddam Hussein, composto sobretudo por sunitas.\n[…]\nOs últimos ficaram conhecidos como xiitas duodecimanos, enquanto os primeiros como ismailitas; o termo xiita é geralmente usado hoje em dia como sinónimo dos xiitas duodecimanos (\"dos Doze\"), uma vez que são os xiitas maioritários.\n[…]\nEm certas regiões do Oriente Médio e da Ásia, a Ashura tomou uma visão grotesca, com autoflagelações e situações anti-islâmicas. A autoflagelação é proibida dentro do Islã, e esta atitude é realizada por uma ínfima minoria dentro do xiismo. Grandes sábios desaprovam e se opõem vigorosamente à autoflagelação, chamando-a de bidah (\"inovação\").\n[…]\n(em português) Web Site Islâmico Xiita Brasileiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Xiismo",
      "descricao": "Um dos dois grandes ramos do islã, ao lado do sunismo"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A separação entre sunitas e xiitas, os dois grandes ramos do islã, nasceu de uma divergência sobre o quê?",
    "resposta": "A sucessão de Maomé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shia_Islam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shia_Islam",
        "situacao": "ok",
        "texto": "Shia Islam is the second-largest branch of Islam. It is rooted in the belief that the Islamic prophet Muhammad explicitly designated his cousin and son-in-law Ali ibn Abi Talib (r. 656–661) as his rightful political successor (caliph) and the divinely guided spiritual leader of the Muslim community (imam).\n[…]\nThis divergence produces concrete disagreements over specific narrations in the Sunni canonical collections.\n[…]\nThe most fundamental divergence between Shia and Sunni hadith methodology concerns the doctrine of ʿAdālat al-Ṣaḥāba — the collective presumption of uprightness applied to all companions of the Prophet in Sunni hadith criticism, by virtue of which a narrator's status as a companion is in itself sufficient to establish the reliability of their transmissions.\n[…]\nWith the eventual development of Twelver Shia Islam into the more literalistic (zahīr) oriented Akhbari and later Usuli schools of thought, Shia Islam further developed in two separate directions: the metaphorical Ismāʿīlī group focusing on the mystical path and nature of God and the divine manifestation in the personage of the \"Imam of the Time\" as the \"Face of God\", with the more literalistic Twelver group focusing on divine law (sharī'ah) and the deeds and sayings (sunnah) attributed to Muhammad and his successors (the Ahl al-Bayt), who as A'immah were guides and a light (nūr) to God.\n[…]\nLater to be known as the Druze, they believe Al-Ḥākim to be God incarnate and the prophesied Mahdi on Earth, who would one day return and bring justice to the world. The Druze faith further split from Ismāʿīlīsm as it developed into a distinct monotheistic Abrahamic religion and ethno-religious group with its own unique doctrines, and finally separated from both Ismāʿīlīsm and Islam altogether."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xiismo",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nOs xiitas (em árabe: شيعة , Shīʿah, abreviatura de شيعة علي, Shīʻatu ʻAlī, \"partido de Ali\") são o segundo maior ramo de crentes do Islão, constituindo 16% do total dos muçulmanos, atrás dos sunitas, que são 84% da totalidade dos muçulmanos. Os xiitas consideram Ali, o genro e primo do profeta Maomé, como o seu sucessor legítimo e consideram ilegítimos os três califas sunitas que assumiram a liderança da comunidade muçulmana após a morte de Maomé.\n[…]\nO Islão xiita contemporâneo pode ser subdividido em três ramos principais: os xiitas duodecimanos, os ismaelitas e os zaiditas. Todos estes grupos estão de acordo em relação à legitimidade dos quatro primeiros imames. Porém, discordam em relação ao quinto: a maioria do xiitas acredita que o neto de Huceine, Maomé Albaquir era o imã legítimo, enquanto que outros seguem o irmão de Albaquir, Zaíde, sendo por isso conhecidos como zaiditas.\n[…]\nPara os ismailitas, Ismail nomeou o seu filho Maomé ibne Ismael como seu sucessor, tendo a linha sucessória dos imames continuado com ele e com os seus descendentes. Os ismailitas tornaram-se poderosos no século X no Norte de África, onde fundam na Ifríquia (Tunísia) o Califado Fatímida (909–1171) que em 969 conquista o Egito (onde fundam a Universidade de Alazar) e a Síria. O persa Adarazi declarou que o quarto califa fatímida, Aláqueme Bianre Alá, era Deus, dando origem à religião drusa.\n[…]\nIslão Sunita\n[…]\n(em português) Web Site Islâmico Xiita Brasileiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Halloween",
      "descricao": "Festa de 31 de outubro, véspera de uma celebração cristã, popular nos países de língua inglesa"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Halloween encurta uma antiga expressão inglesa que quer dizer véspera de que festa cristã?",
    "resposta": "Dia de Todos os Santos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Halloween"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Halloween",
        "situacao": "ok",
        "texto": "Halloween, also known as All Hallows' Eve, or All Saints' Eve,  is a celebration observed in many countries  on 31 October, the eve of the Western Christian feast of All Hallows' Day. It is at the beginning of the observance of Allhallowtide, the time in the Christian liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed.\n[…]\nList of foods associated with Halloween:\n[…]\nOthers consider Halloween to be completely incompatible with the Christian faith due to its putative origins in the Festival of the Dead celebration. Indeed, even though Eastern Orthodox Christians observe All Hallows' Day on the First Sunday after Pentecost, the Eastern Orthodox Church recommends the observance of Vespers or a Paraklesis on the Western observance of All Hallows' Eve, out of the pastoral need to provide an alternative to popular celebrations.\n[…]\nIn the American economy, Halloween accounts for over $10 billion every year. According to the National Retail Federation, Americans were projected to spend $12.2 billion on Halloween in 2023, up from $10.6 billion in 2022. Of this amount, $3.9 billion is projected to be spent on home decorations, up from $2.7 billion in 2019.\n[…]\nThe National Retail Federation projects it to increase to $13.1 billion in 2025 with  Decorations accounting for $4.2 billion, costumes with a total cost of $4.3 billion, greeting cards costing $700 million, and candy  $3.9 billion. The popularity of Halloween decorations has been growing in recent years, with retailers offering a wider range of increasingly elaborate and oversized decorations.\n[…]\n\"A brief history of Halloween\" by the BBC\n[…]\n\"All Hallows Eve (Halloween) in the Traditional, Pre-1955 Liturgical Books\" by the Liturgical Arts Journal\n[…]\n\"The History of Halloween\" by the History Channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_das_Bruxas",
        "situacao": "ok",
        "texto": "Dia das Bruxas (originalmente em inglês: Halloween, pronuncia-se [hæləʊˈiːn], ou [ˌhæloʊˈiːn], contracção de \"All Hallows' Eve\", cujo significado é \"Véspera de Todos os Santos\")\n[…]\né uma celebração observada em muitos países no dia 31 de outubro, véspera da festa cristã ocidental do Dia de Todos os Santos. Ele marca o início da observância da Estação de Todos os Santos, o período do ano litúrgico cristão dedicado à lembrança dos mortos, incluindo santos, mártires e todos os fiéis falecidos. Na cultura popular, o Halloween se tornou uma celebração do horror e está associado ao macabro e ao sobrenatural.\n[…]\nAssim, o nome tem origem no cristianismo e significa 'véspera dos Santos'.\n[…]\nO Halloween é influenciado pelas crenças e práticas cristãs em torno do Dia de Todos os Santos. A palavra inglesa 'Halloween' vem de \"All Hallows' Eve\", sendo a noite anterior aos dias santos cristãos do Dia de Todos os Santos, em 1 de novembro, e do Dia de Finados, em 2 de novembro. Desde os primórdios da Igreja, as principais festas do cristianismo (como o Natal, a Páscoa e o Pentecostes) tinham vigílias que começavam na noite anterior, assim como a festa de Todos os Santos.\n[…]\nOutras consideram o Halloween completamente incompatível com a fé cristã devido às suas supostas origens na celebração do Festival dos Mortos. De fato, embora os cristãos ortodoxos orientais observem o Dia de Todos os Santos no primeiro domingo após Pentecostes, a Igreja Ortodoxa Oriental recomenda a observância das Vésperas ou de uma Paráclese na observância ocidental da Véspera de Todos os Santos, devido à necessidade pastoral de fornecer uma alternativa às celebrações populares.\n[…]\nVéspera de Todos os Santos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Umbanda",
      "descricao": "Religião brasileira que reúne elementos africanos, indígenas, católicos e espíritas, surgida no início do século vinte"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A umbanda tem como marco uma sessão realizada em 1908 no estado do Rio. Seu Dia Nacional coincide com que feriado brasileiro?",
    "resposta": "Proclamação da República",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Umbanda"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Umbanda",
        "situacao": "ok",
        "texto": "Umbanda é uma religião brasileira formada no início do século XX, caracterizada pela articulação de elementos oriundos de tradições religiosas afro-brasileiras, do espiritismo kardecista, do catolicismo popular e de cosmologias indígenas. Desenvolvida sobretudo em contextos urbanos, a Umbanda apresenta ampla diversidade interna de práticas, doutrinas e formas organizacionais, não constituindo um s\n[…]\nA Umbanda, assim como outras religiões de matriz africana, esteve historicamente associada a processos de perseguição, criminalização e estigmatização social no Brasil. Essas práticas se relacionam tanto a políticas de Estado quanto a discursos médicos, jurídicos e religiosos que classificaram manifestações religiosas populares como formas de superstição, feitiçaria ou desvio moral.\n[…]\nPesquisa realizada em 2025 pela Rede Nacional de Religiões Afro-brasileiras e Saúde (Renafro), apresentada a organismos internacionais, apontou que a maioria dos terreiros consultados relatou ter sido alvo de ameaças, depredações ou outros tipos de violência em um período de dois anos, o que reforça o caráter sistêmico da perseguição contemporânea às religiões de matriz africana.\n[…]\nA Umbanda exerceu influência significativa na cultura brasileira, especialmente nos campos da música, da literatura, das artes visuais e das manifestações populares. Enquanto expressão religiosa surgida em contextos urbanos e marcada pelo sincretismo, a Umbanda contribuiu para a elaboração de linguagens simbólicas que dialogam com questões de identidade nacional, religiosidade popular e relações raciais no Brasil.\n[…]\nDiplomatas, escritores e intelectuais laicos também produziram obras em que a Umbanda aparece como componente da diversidade cultural brasileira, associada a debates sobre identidade nacional, sincretismo religioso e pluralismo.\n[…]\nReligiões afro-brasileiras\n[…]\nEspiritismo no Brasil"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Ogum",
      "descricao": "Orixá guerreiro, ligado ao ferro, cultuado no candomblé e na umbanda"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "No sincretismo religioso do Rio de Janeiro, o orixá guerreiro Ogum corresponde a que santo católico?",
    "resposta": "São Jorge",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ogum"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ogum",
        "situacao": "ok",
        "texto": "Ogum (em iorubá: Ògún; em castelhano: Oggún; em francês: Ogoun; em fon,Gu) é um vodum loá e orixá do ferro, guerra, agricultura, caminhos, caça, tecnologia e protetor de artesãos e ferreiros.\n[…]\nPrincipalmente no Sudeste brasileiro, Ogum é sincretizado com São Jorge, formando um dos exemplos mais expressivos de sincretismo religioso na cultura brasileira. Diferentemente de outros casos em que o sincretismo apenas mascara o culto de um orixá sob a forma de um santo católico, substituindo sua imagética original, no caso de Jorge e Ogum observa-se uma via de mão dupla.\n[…]\nNessa dinâmica, elementos associados ao orixá se assentam de forma orgânica e significativa que influenciam a imagem de São Jorge e estimulam seu culto popular.\n[…]\nEssas festividades são frequentemente marcadas por elementos da cultura afro-brasileira, mesmo quando organizadas em contextos católicos, refletindo o processo histórico da influência simbólica de Ogum na religiosidade popular. Nesse sentido, a devoção contemporânea ao santo incorpora camadas culturais associadas ao orixá, ainda que sua matriz católica permaneça distinta em termos teológicos.\n[…]\nAlém de ser representado com o nome e a imagem de São Jorge, em algumas vertentes das religiões afro-brasileiras, Ogum passa a ser associado às cores vermelho e branco, ao invés do tradicional azul, e ao cavalo, ao invés da serpente, o que mostra que, embora sua influência na imagem de São Jorge, a figura de Ogum também é remoldada historicamente por elementos do santo.\n[…]\nOgum é homenageado na música de sucesso \"Ogum\", gravada originalmente por Zeca Pagodinho, em 2008, homenageando também São Jorge, com quem é sincretizado."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Ismael",
      "descricao": "Filho de Abraão com Agar, personagem do Gênesis e da tradição islâmica"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, Ismael, filho de Abraão com a serva Agar, é o ancestral de que povo?",
    "resposta": "Os árabes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ishmael"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ishmael",
        "situacao": "ok",
        "texto": "In the biblical Book of Genesis, Ishmael was the first son of Abraham. His mother was Hagar, the handmaiden of Abraham's wife Sarah. He died at the age of 137.\n[…]\nWithin Islam, Ishmael is regarded as a prophet and the ancestor of the Ishmaelites (Hagarenes or Adnanites) and patriarch of Qaydār.\n[…]\nKedar (קֵדָר Qēḏār), father of the Qedarites, a northern Arab tribe that controlled the area between the Persian Gulf and the Sinai Peninsula. According to tradition, he is the ancestor of the Quraysh tribe, and thus, ancestor of the Islamic prophet Muhammad.\n[…]\nJewish and Islamic traditions consider Ishmael to be the ancestor of Arabs.\n[…]\nIshmael (Arabic: إسماعيل Ismāʿīl) is recognized as an important prophet of Islam. Like Christians and Jews, Muslims believe that Ishmael was the firstborn of Abraham, born to him from his wife's maidservant Hagar. Ishmael is recognized by Muslims as the ancestor of several northern prominent Arab tribes and the forefather of Adnan, the ancestor of Muhammad. Muslims also believe that Muhammad was the descendant of Ishmael who would establish a great nation.\n[…]\nOn one of his visits to Mecca, Abraham is said to have asked his son to help him raise the foundation of the Kaaba. Islamic traditions hold that the Kaaba was first built by Adam and that Abraham and Ishmael rebuilt the Kaaba on the old foundations. As Ishmael grew up in Arabia, he is said to have become fluent in Arabic. In the genealogical trees that the early scholars drew, Ishmael was considered the ancestor of the Northern Arabs and Muhammad was linked to him through the lineage of Adnan.\n[…]\nGigot, Francis (1910). \"Ismael\" . Catholic Encyclopedia. Vol. 8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ismael",
        "situacao": "ok",
        "texto": "Ismael (em hebraico: יִשְׁמָעֵאל; romaniz.: Yišmāʿē(ʔ)l; em árabe: إِسْمَاعِيْل; romaniz.: ʔIsmāʿīl) é um personagem primeiramente mencionado no livro de Gênesis e depois referenciado no Alcorão. De acordo com Gênesis, Ismael foi o primeiro filho de Abraão, que o teve através de sua serva, Agar. Apesar de nascer de Agar, de acordo com a lei mesopotâmica, Ismael era creditado como filho de Sara tor\n[…]\nCom o nascimento de Isaac, surgem conflitos entre ele e Ismael e Sara, impelida pelas provocações, exige que Abraão mande embora Agar e Ismael. O conflito se torna claro em Gênesis 21:9–10: \"Sara porém, como visse o filho de Agar egiptana brincando com seu filho Isaac, disse para Abraão: expulsa esta escrava com seu filho; porque o filho da escrava não será herdeiro com meu filho Isaac.\". Não se tratava duma inocente brincadeira de criança por parte de Ismael.\n[…]\nApós isso Abraão enviou Agar e Ismael para o vale árido de Becá, ao sul. Ismael deu origem à nação árabe, e Isaque origem à nação judaica.\n[…]\nEm Gênesis 25:12–18 fala sobre a descendência de Ismael: \"Estas, porém, são as gerações de Ismael filho de Abraão, que a serva de Sara, Agar, egípcia, deu a Abraão. E estes são os nomes dos filhos de Ismael, pelos seus nomes, segundo as suas gerações: O primogênito de Ismael era Nebaiote, depois Quedar, Adbeel e Mibsão, Misma, Dumá, Massá, Hadade, Tema, Jetur, Nafis e Quedemá.\n[…]\nEm Gênesis 28:8–9 há uma passagem sobre Esaú, quando este toma sua prima Maalate como esposa: \"Vendo também Esaú que as filhas de Canaã eram más aos olhos de Isaque seu pai, foi Esaú a Ismael, e tomou para si por mulher, além das suas mulheres, a Maalate filha de Ismael, filho de Abraão, irmã de Nebaiote.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Quaresma",
      "descricao": "Período de quarenta dias de penitência que antecede a Páscoa cristã"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os quarenta dias da Quaresma, antes da Páscoa, lembram que episódio da vida de Jesus narrado nos Evangelhos?",
    "resposta": "O jejum no deserto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lent",
        "situacao": "ok",
        "texto": "Lent (Latin: Quadragesima, 'Fortieth') is the solemn Christian religious observance in the liturgical year in preparation for Easter. It echoes the 40 days Jesus spent fasting in the desert and enduring temptation by Satan, according to the Gospels of Matthew, Mark and Luke, before beginning his public ministry. Lent is usually observed in the Catholic, Lutheran, Moravian, Anglican, United Protest\n[…]\nLent is a period of penitence, which ends at the arrival of Easter. The purpose of Lent is the preparation of the believer for Easter through prayer, fasting, and almsgiving (the three pillars of Lent), as well as mortifying the flesh, repentance of sins, simple living, and self-denial. In Lent, many Christians commit to fasting, as well as giving up certain luxuries in imitation of Christ's sacrifice during his journey into the desert for 40 days; this is known as one's Lenten sacrifice.\n[…]\nAmong Christians of the Roman Catholic, Evangelical Lutheran and Anglican denominations, the Stations of the Cross are a devotion observed during Lent, especially on Fridays, in remembrance of the Via Dolorosa of Jesus.\n[…]\n[and] a shower from heaven might pour down upon the dry earth of the whole world, and the abundant waters of the saving bath might saturate the lengthy drought of the Gentiles.\" In the New Testament, Jesus went into the desert to fast and pray for 40 days and 40 nights; it was during this time that Satan tried to tempt him (cf. Matthew 4:1–3). The 40-day and night fasts of Moses, Elijah, and Jesus prepared them for their work.\n[…]\nThe Hebrew people wandered 40 years in the desert while traveling to the Promised Land\n[…]\nWednesday of Holy Week, Holy Wednesday (also sometimes known as Spy Wednesday) commemorates Judas Iscariot's bargain to betray Jesus.\n[…]\nThe next day is Good Friday, which begins the Easter Triduum; on this day Christians remember Jesus' crucifixion, death, and burial."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quaresma",
        "situacao": "ok",
        "texto": "O Tempo da Quaresma é o período do ano litúrgico cristão que antecede a celebração da Páscoa, sendo observado por diversas tradições cristãs, entre as quais a Igreja Católica, a Ortodoxa, a Comunhão Anglicana, as igrejas luteranas e algumas denominações reformadas. É um tempo em que os fiéis se preparam para a celebração da ressurreição de Jesus Cristo, núcleo central da fé cristã.\n[…]\nO termo “Quaresma” deriva do latim quadragesima dies, que significa “quadragésimo dia”, em referência aos quarenta dias de preparação que caracterizam esse período. O adjetivo correspondente é “quaresmal” ou, mais raramente, “quadragesimal”. A duração de quarenta dias remete a diversos episódios bíblicos, como os quarentas dias do Dilúvio, os quarenta anos do povo de Israel no deserto e os quarenta dias de jejum de Jesus no deserto antes do início de seu ministério.\n[…]\nOs serviços religiosos desse tempo intentam a preparação da comunidade de fiéis para a celebração da festa pascal, que comemora a ressurreição e a vitória de Cristo depois de seus sofrimentos e morte, conforme narrados nos Evangelhos. Tradicionalmente, a preparação é marcada por práticas penitenciais como o jejum, a abstinência, a oração e as obras de caridade.\n[…]\nJesus, antes de iniciar a sua vida pública, retira-se no deserto por quarenta dias e quarenta noites, sem comer (Mateus 4:2 e Lucas 4:1-2).\n[…]\nDurante quarenta dias Jesus ressuscitado instrui os seus discípulos, antes de subir ao Céu e enviar o Espírito Santo (Atos 1:1-3).\n[…]\nOs fiéis são exortados a guardarem a abstinência de carne ou de outro alimento segundo as determinações da conferência episcopal, todas as sextas-feiras do ano, a não ser que coincidam com algum dia enumerado entre as solenidades. Os fiéis devem seguir o preceito da abstinência e do jejum na Quarta-feira de Cinzas e na Sexta-feira da Paixão e Morte de Nosso Senhor Jesus Cristo (Cân. 1251).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Dia do Senhor",
      "descricao": "O domingo como dia sagrado semanal dos cristãos"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os primeiros cristãos passaram a guardar o domingo, e não o sábado judaico, para celebrar que acontecimento?",
    "resposta": "A ressurreição de Jesus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lord%27s_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lord%27s_Day",
        "situacao": "ok",
        "texto": "In Christianity, the Lord's Day refers to Sunday, the traditional day of communal worship. It is the first day of the week in the Hebrew calendar and traditional Christian calendars. It is observed by most Christians as the weekly memorial of the resurrection of Jesus Christ, who is said to have been raised from the dead early on the first day of the week. The phrase appears only once in Revelatio\n[…]\nSome Protestant scholars have argued that Christian Sunday worship traces back even further, to the resurrection appearances of Jesus recorded in the Gospel narratives where Jesus would appear to his disciples on the first day of the week.\n[…]\nLutheranism places an emphasis on the celebration of the Eucharist on the Lord's Day:\n[…]\nRather, “Jesus Christ has come in the flesh” (1 John 4:2), and continues to teach and act in physical, “fleshy” ways. How wondrous! Jesus, the God-man, still ministers in the flesh for us. The third stanza of Luther’s Commandment hymn reinforces this truth about Sabbath Day worship. Concerning the day of rest, he writes, “and put aside the work you do, So that God may work in you” (LSB 581:4). Luther’s words apply to the preaching Christ does for His gathered church (Rom. 10:17; Luke 10:16).\n[…]\nIn part, the reason Orthodox Christians continue to celebrate Saturday as Sabbath is because of its role in the history of salvation: it was on a Saturday that Jesus \"rested\" in the tomb after his work on the cross. For this reason also, Saturday is a day for general commemoration of the departed, and special requiem hymns are often chanted on this day.\n[…]\nEvery member of the Fire-Baptized Holiness Association of America shall be required to observe the Lord's Day according to the teachings of Jesus Christ and the holy apostles, and to abstain from doing their own pleasure thereon."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Caaba",
      "descricao": "Santuário em forma de cubo no centro da Grande Mesquita de Meca"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que relíquia, beijada ou saudada pelos peregrinos, fica encravada num dos cantos da Caaba, em Meca?",
    "resposta": "A Pedra Negra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Stone",
      "https://en.wikipedia.org/wiki/Kaaba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Stone",
        "situacao": "ok",
        "texto": "The Black Stone (Arabic: الحجر الأسود, romanized: al-Ḥajar al-Aswad) is a rock set into the eastern corner of the Kaaba, the ancient building in the center of the Masjid al-Haram in Mecca, Saudi Arabia. It is revered by most Muslims as an Islamic relic which, according to tradition, dates back to the time of Adam and Eve.\n[…]\nAt the end of the second [circumambulation of the Kaaba], I was granted one of those extraordinary moments which sometimes occur around the Black Stone. As I approached the Corner the large crowd was suddenly pushed back by a strong man who had just kissed the Black Stone.\n[…]\nThe Black Stone and the Kaaba's opposite corner, al-Rukn al-Yamani, are both often perfumed by the mosque's custodians. This can cause problems for pilgrims in the state of ihram ('consecration'), who are forbidden from using scented products and will require a kaffara (donation) as a penance if they touch either.\n[…]\nOne tradition holds that the Black Stone was placed by Adam in the original Kaaba.\n[…]\nAbraham ordered his son Ishmael, who in Muslim belief is an ancestor of Muhammad, to build a new temple, the Kaaba, into which the stone was to be embedded.\n[…]\nWhen Abraham took the Black Stone from Abu Qubays to build the Kaaba, the mountain asked him to intercede with God so that it would not be returned to Khorasan but would stay in Mecca.\n[…]\nIn recent years, several literalist views of the Black Stone have emerged. A small minority accepts as literally true a hadith, usually taken as allegorical, which asserts that \"the Stone will appear on the Day of Judgement (Qiyamah) with eyes to see and a tongue to speak, and give evidence in favour of all who kissed it in true devotion, but speak out against whoever indulged in gossip or profane conversations during his circumambulation of the Kaaba\"."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kaaba",
        "situacao": "ok",
        "texto": "The Kaaba (Arabic: الكعبة, romanized: al-Kaʿba, lit. 'the Cube'), also spelled Kaʽba, Kaʽbah or Kabah, sometimes referred to as al-Kaʽba al-Musharrafa (Arabic: الكعبة المشرفة, lit. 'the Honored Ka'ba'), is a stone building at the center of Islam's most important mosque and holiest site, the Masjid al-Haram in Mecca, Saudi Arabia. It is considered by Muslims to be the Baytullah (Arabic: بيت اللَّٰه\n[…]\nThe Rukn al-'Iraqi (Arabic: الركن العراقي, romanized: ar-Rukn al-'Iraqi, lit. 'The Iraqi Corner'), is the corner that faces slightly northeast from the center of the Kaaba.\n[…]\nThe keys to the Kaaba are held by the Banī Shaybah (Arabic: بني شيبة) tribe, an honor bestowed upon them by Muhammad. Members of the tribe greet visitors to the inside of the Kaaba on the occasion of the cleaning ceremony.\n[…]\nThe Governor of the Makkah Province and accompanying dignitaries clean the interior of the Kaaba using cloths dipped in Zamzam water scented with oud perfume. Preparations for the washing start a day before the agreed date, with the mixing of Zamzam water with several luxurious perfumes including Tayef rose, 'oud and musk. Zamzam water mixed with rose perfume is splashed on the floor and is wiped with palm leaves. Usually, the entire process is completed in two hours.\n[…]\nAccording to Shia Muslims, Ali ibn Abi Talib was born inside the Kaaba, though the majority of Sunni scholars reject this and maintain that Hakim ibn Hizam was the only person who was born inside the Kaaba.\n[…]\nMiscellaneous Symbols and Pictographs (Unicode block), which contains a pictogram for the Kaaba, U+1F54B 🕋 KAABA\n[…]\nSA's Official Live Webcam of the Kaaba\n[…]\nFormer door of the Kaaba (ca. 1635)\n[…]\nKaaba | Definition, Interior, Black Stone, & Fact\n[…]\nThe Kaaba (article) | Islam\n[…]\nThe Kaaba\n[…]\nMecca pilgrimage: 10 things to know about the Kaaba\n[…]\nThe History Of Kaaba\n[…]\nKaaba - Hajj"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_Negra",
        "situacao": "ok",
        "texto": "Pedra Negra (em árabe: ٱلْحَجَرُ ٱلْأَسْوَد, al-Ḥajaru al-Aswad, 'Pedra Negra') é uma rocha situada no canto leste da Caaba, o antigo edifício no centro da Grande Mesquita em Meca, Arábia Saudita. É venerado pelos muçulmanos como uma relíquia islâmica que, de acordo com a tradição muçulmana, remonta à época de Adão e Eva.\n[…]\nA moldura de prata em torno da Pedra Negra e o kiswah ou tecido preto envolvendo a Kaaba foram, durante séculos, mantidos pelos sultões otomanos em seu papel de guardião das Duas Mesquitas Sagradas. As molduras se desgastaram com o tempo devido ao manuseio constante dos peregrinos e eram substituídas periodicamente. Molduras gastas foram levadas de volta a Istambul, onde ainda são mantidas como parte das relíquias sagradas do Palácio de Topkapi.\n[…]\nA Pedra Negra foi descrita por viajantes europeus na Arábia no século XIX e no início do XX, que visitaram a Caaba disfarçados de peregrinos. O viajante suíço Johann Ludwig Burckhardt visitou Meca em 1814 e forneceu uma descrição detalhada em seu livro de 1829, Viagens na Arábia :\n[…]\nA Pedra Negra era reverenciada muito antes da pregação do Islã por Maomé. Há muito tempo ela é associado à Caaba, que foi construída no período pré-islâmico e era um local de peregrinação dos nabateus que visitavam o santuário uma vez por ano para realizar sua peregrinação. A Caaba tinha 360 ídolos dos deuses de Meca.\n[…]\nNa obra Dawn in Madinah: A Pilgrim's Progress, Muzaffar Iqbal descreveu sua experiência de venerar a Pedra Negra durante uma peregrinação a Meca:\n[…]\nQuando Ibrahim pegou a Pedra Negra de Abu Cubais para construir a Caaba, a montanha pediu a Ibrahim para interceder junto a Deus para que ela não fosse devolvida à região de Coração e ficasse em Meca.\n[…]\nMedia relacionados com Pedra Negra no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Bhagavad Gita",
      "descricao": "Texto sagrado hindu em forma de diálogo entre Krishna e o guerreiro Arjuna"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Bhagavad Gita, diálogo entre o deus Krishna e o guerreiro Arjuna, é um trecho de que grande épico indiano?",
    "resposta": "Mahabharata",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bhagavad_Gita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bhagavad_Gita",
        "situacao": "ok",
        "texto": "The Bhagavad Gita (; Sanskrit: भगवद्गीता, IPA: [ˌbʱɐɡɐʋɐd ˈɡiːtaː], romanized: bhagavad-gītā, lit. 'God's song'), often referred to as the Gita (IAST: Gītā), is a Hindu scripture, likely composed in the second or first century BCE, which forms part of the epic poem Mahabharata. The Bhagavad Gita is a synthesis of various strands of Indian religious thought, including the Vedic concept of dharma (d\n[…]\nThe Gita is a dialogue between Krishna and Arjuna right before the start of the climactic Kurukshetra War in the Hindu epic Mahabharata. Two massive armies have gathered to destroy each other. The Pandava prince Arjuna asks his charioteer Krishna to drive to the centre of the battlefield so that he can get a good look at both the armies and all those \"so eager for war\". He sees that some among his enemies are his relatives, beloved friends, and revered teachers.\n[…]\nThe Bhagavad Gita contains 18 chapters and 700 verses found in the Bhishma Parva of the epic Mahabharata. Because of differences in recensions, the verses of the Gita may be numbered in the full text of the Mahabharata as chapters 6.25–42 or as chapters 6.23–40. The number of verses in each chapter varies in some manuscripts of the Gita discovered on the Indian subcontinent.\n[…]\nUthaya Sankar SB retold the complete text in Bahasa Malaysia prose as Bhagavad Gita: Dialog Arjuna dan Krishna di Kurukshetra (2021).\n[…]\nIn Aurobindo's view, Krishna was a historical figure, but his significance in the Gita is as a \"symbol of the divine dealings with humanity\", while Arjuna typifies a \"struggling human soul\". However, Aurobindo rejected the interpretation that the Gita, and the Mahabharata by extension, is only \"an allegory of the inner life\" and therefore that it has nothing to do with our outward human life and actions.\n[…]\nBhagavad Gita article in the Internet Encyclopedia of Philosophy\n[…]\nBhagavad Gita poetry at the britannica.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bagavadeguit%C3%A1",
        "situacao": "ok",
        "texto": "Bagavadeguitá (em sânscrito: भगवद्गीता; romaniz.: Bhagavad Gītā: \"Canção Divina\"; IAST: bhagavad-gītā; IPA: ˈbʱaɡəʋəd̪ ɡiːˈt̪aː) é um texto religioso hindu escrito em sânscrito, parte do poema épico indiano Maabárata (escrito em partes e em épocas diferentes), datado do século IV a.C. (próximo ao advento da era de Kali ou era das desavenças), que relata o diálogo de Críxena/Krishna (suprema person\n[…]\nArjuna representa o papel de uma alma confusa sobre seu dever e, recebe iluminação diretamente do Senhor Críxena, instruindo na ciência da autorrealização, ao explicar-lhe o sustentáculo do Reto Agir (darma, o carmaioga, o serviço desinteressado). No desenrolar da conversa são colocados pontos importantes da filosofia divina, que incluía já na época elementos das filosofias religiosas bramanismo e sânquia.\n[…]\nA obra é a essência do conhecimento védico e sagrado da Índia e um dos maiores clássicos de filosofia perene e de espiritualidade do mundo, influenciando inúmeros movimentos espiritualistas. Compõe a principal obra do vixenuísmo, que envolve várias ramificações de fé em Vixenu ou Críxena, dentre as quais o popularmente conhecido movimento para consciência de Seri Críxena, que a difundiu, a partir de 1965, no ocidente, através do líder religioso indiano Bhaktivedanta Swami Prabhupada.\n[…]\nEste traduziu, e comentou, sem adulteração, com bênção de um mestre Parampara (sucessão discipular), dando origem ao livro Bhagavad-Gita: Como Ele É, contendo os principais ensinamentos do \"caminho para a verdade superior\" Darma, religião Bagavata Purana e instruções a respeito do serviço devocional a Críxena, segundo os preceitos de inúmeros escritos sagrados védicos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Muro das Lamentações",
      "descricao": "Muro de pedra em Jerusalém, local de oração mais sagrado do judaísmo"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Muro das Lamentações, em Jerusalém, é parte do muro de sustentação que cercava que construção destruída pelos romanos?",
    "resposta": "O Segundo Templo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Western_Wall"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Western_Wall",
        "situacao": "ok",
        "texto": "The Western Wall (Hebrew: הַכּוֹתֶל הַמַּעֲרָבִי, romanized: HaKotel HaMa'aravi lit. 'the western wall'; Ashkenazi Hebrew pronunciation: HaKosel HaMa'arovi) is an ancient retaining wall of the built-up hill known to Jews and Christians as the Temple Mount of Jerusalem.\n[…]\nThe new plaza created in 1967 is used for worship and public gatherings, including Bar mitzvah celebrations and the swearing-in ceremonies of newly full-fledged soldiers in the Israel Defense Forces. Tens of thousands of Jews flock to the wall on the Jewish holidays, and particularly on the fast of Tisha B'Av, which marks the destruction of the Temple and on Jerusalem Day, which commemorates the reunification of Jerusalem in 1967 and the delivery of the Wall into Jewish hands.\n[…]\nBut in the first week of our visit, before this decree, we went all the way in, and kissed it, and I prostrated myself before its base, and there I said the ordered prayers, and also entreated God to bless all the Jews of Carpi ... Though it is called the Western Wall, nothing of the Temple whatever survived the destruction, the looting by thieves, and the construction of the mosque. They built a citadel on the site of the Foundation Stone, surpassingly lovely ...Tensions eventually calmed again.\n[…]\nIn January 2016, the Israeli Cabinet approved a plan to designate a new space at the Kotel that would be available for egalitarian prayer and that would not be controlled by the Rabbinate. Women of the Wall welcomed the decision, although Sephardic Chief Rabbi Shlomo Amar of Jerusalem said creating a mixed-gender prayer section was paramount to destroying the Wall. The Chief Rabbinate said it would create an alternate plan.\n[…]\nWalls of Jerusalem"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muro_das_Lamenta%C3%A7%C3%B5es",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nTrata-se do único vestígio do antigo Templo de Herodes, erguido por Herodes, o Grande no lugar do Templo de Jerusalém inicial. Herodes mandou construir grandes muros de contenção em redor do monte Moriá, ampliando a pequena esplanada sobre a qual foram edificados o Primeiro e o Segundo Templo de Jerusalém, formando o que hoje se designa como a Esplanada das Mesquitas.\n[…]\nAssim, o atual Muro das Lamentações é a parte que restou de um muro de arrimo que servia de sustentação para uma das paredes do edifício principal e que em si mesmo, não integrava o Templo que foi destruído pelo general Tito, que depois se tornaria imperador romano, no ano de 70.\n[…]\nO Primeiro Templo, ou Templo de Salomão, foi construído no século X a.C., e derrubado pelos babilónios em 586 a.C. O Segundo Templo, entretanto, foi construído por Zorobabel após o Exílio Babilônico, e voltou a ser destruído pelos romanos no ano 70 da nossa era, durante a Primeira Guerra Judaico-Romana. Deste modo, cada templo esteve erguido durante 400 anos.[carece de fontes]?\n[…]\nQuando as legiões do então general Tito destruíram o templo, só uma parte do muro exterior ficou em pé. Tito deixou este muro para que os judeus tivessem a amarga lembrança de que Roma vencera a Judeia (daí o nome de Muro das Lamentações). Os judeus, porém, atribuíram-no a uma promessa feita por Deus, segundo a qual sempre ficaria de pé ao menos uma parte do sagrado templo como símbolo da sua aliança perpétua com o povo judeu.\n[…]\n«Parte do Muro em 3D»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Grande Santuário de Ise",
      "descricao": "Complexo de santuários xintoístas no Japão dedicado à deusa do sol Amaterasu"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Grande Santuário de Ise, o mais sagrado do xintoísmo, é tradicionalmente reconstruído do zero a cada quantos anos?",
    "resposta": "Vinte anos",
    "distratores": [
      "Dez anos",
      "Cinquenta anos",
      "Cem anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ise_Grand_Shrine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ise_Grand_Shrine",
        "situacao": "ok",
        "texto": "The Ise Shrine (Japanese: 伊勢神宮, Hepburn: Ise Jingū), located in Ise, Mie Prefecture of Japan, is a Shinto shrine dedicated to the solar goddess Amaterasu Ōmikami and the grain goddess Toyouke-hime. Also known simply as Jingū (神宮), Ise Shrine is a shrine complex composed of many Shinto shrines centered on two main shrines, Naikū (内宮) and Gekū (外宮).\n[…]\nThe shrine has evolved throughout the years in its reconstruction, while maintaining some of its key features. The shrine was not originally constructed with gold copper adornments; however, because of advancements in technology as well as Buddhist influence, it gained them over the years. Another example of Buddhist influence on the shrine is the use of Suedama, which are Buddhist orbs seen on various religious structures.\n[…]\nAmaterasu is linked with Toyouke-hime as the sun is necessary for food to grow. This was prior to the Tenson Korin. Emperor Suinin is said to have established the shrine to worship Amaterasu at a permanent location after many temporary locations. In contrast with Kotai jingu, this shrine is not explicitly mentioned in the Kojiki or the Nihon Shoki.\n[…]\nKotai Jingū is said to hold the Sacred Mirror, one of three Imperial Regalia of Japan said to have been given to the first Emperor by the gods. From a path that follows the line of the outer wall, the distinctive roof of the shrine building can be seen through the trees. In front of the walled shrine compound can be seen an open area which was the location of the rebuilding of the shrine in 2013.\n[…]\nCluzel, Jean-Sébastien; Nishida, Masatsugu (2015). Le Sanctuaire d'Ise. Récit de la 62e reconstruction. Éditions Mardaga. ISBN 978-2-8047-0289-2\n[…]\nIse Jingu – Iseshima General Sightseeing Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_de_Ise",
        "situacao": "ok",
        "texto": "O Santuário Ise é um santuário xintoísta dedicado à deusa do sol, Amaterasu e está situado na cidade de Ise, na província de Mie, no Japão.\n[…]\nTambém é conhecido por Ise Jingu, ou apenas por Jingu (\"o Santuário\") e é um dos mais importantes santuários xintoístas do Japão.\n[…]\nYamatohime fora encarregada pelo pai de encontrar um sitio adequado para realizar oferendas a Amaterasu e percorreu o Japão durante vinte anos até que chegou a Ise e ouviu a voz da deusa dizendo-lhe que aquele era o local onde desejava ser adorada. O reconhecimento a Yamatohime está hoje expresso no santuário que lhe é dedicado, o Yamatohime-no-Miya, construído no percurso entre o Geku e o Naiku.\n[…]\nKotaijingu - santuário principal: Trata-se do local mais sagrado de todo o Ise Jingu, onde está o espírito nigimitama de Amaterasu. É neste local que é conservado o \"Espelho Sagrado\" (Yata no kagami), um dos três tesouros imperiais do Japão, que se crê tenham sido dados por Amaterasu ao primeiro Imperador do Japão.\n[…]\nA arquitetura de Ise Jingu é escrupulosamente preservada. Os edifícios, bem como a ponte de Uji, são completamente reconstruídos a cada 20 anos, numa cerimónia conhecida por Shikinen Sengu. A 61ª primeira cerimónia aconteceu em 1993, estando a próxima prevista para o ano de 2033.\n[…]\nAo longo de cada período de vinte anos vão-se realizando vários rituais preparatórios: desde o abate das árvores que irão fornecer a madeira, ao transporte dos troncos - no qual participa a população da cidade de Ise - no festival de Okihiki, culminando na transferência dos símbolos do kami e do tesouro para o novo edifício, na cerimónia de Sengyo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, em Istambul, construída no início do século dezessete"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Mesquita Azul de Istambul, construída no século dezessete, chama atenção por ter quantos minaretes?",
    "resposta": "Seis",
    "distratores": [
      "Dois",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nAfter the Peace of Zsitvatorok, seen as a blow to Ottoman prestige, Sultan Ahmed I decided to build a large mosque in Istanbul in the hope of soliciting God's favour. He was the first sultan to build an imperial mosque since Selim II (d. 1574), as both Murad III and Mehmed III before him had not constructed their own.\n[…]\nDuring excavations in the early 20th century, some of the ancient seats were discovered in the mosque's courtyard. Given the mosque's location, size, and number of minarets, it is probable that Sultan Ahmed intended to create a monument that rivalled or surpassed the Hagia Sophia.\n[…]\nDespite the opposition, the sultan went ahead with the project. Construction started in 1609 and completed in 1617, when the opening ceremony was held, though the year 1616 is mentioned on some of the mosque's inscriptions. Ahmed I died around the same time or very soon afterwards in 1617.\n[…]\nIn the end, the mosque's grandeur, its luxurious decoration, and the elaborate public ceremonies that Ahmed I organized to celebrate the project appear to have swayed public opinion and overcome the initial controversy over its construction. It became one of the most popular mosques in the city. The mosque has left a major mark on the city and has given its name to the surrounding neighbourhood, now known as Sultanahmet.\n[…]\nHistorically, the muezzin had to climb a narrow spiral staircase inside the minarets five times a day to announce the call to prayer."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesquita_Azul",
        "situacao": "ok",
        "texto": "A Mesquita do Sultão Ahmed (em turco: Sultanahmet Camii), também conhecida como Mesquita Azul, é uma mesquita otomana de Istambul, Turquia. Foi construída entre 1609 e 1616 e está situada na Praça Sultanahmet, no distrito de Fatih, em frente da Basílica de Santa Sofia, da qual se encontra separada por um espaço ajardinado. É uma das 5 mesquitas da Turquia que possui seis minaretes.\n[…]\nA Mesquita Azul é um triunfo em harmonia, proporção e elegância. Construída em um estilo clássico otomano, o seu magnífico exterior não faz sombra a seu suntuoso interior. Uma verdadeira sinfonia de belos azulejos azuis de İznik dão a este espaço uma atmosfera muito especial. A mesquita ocupa uma parte da área outrora ocupada pelo Grande Palácio de Constantinopla, a residência dos imperadores bizantinos entre 330 e 1081.\n[…]\nEm 1606 o sultão Amade I quis construir uma mesquita maior, mais imponente e mais bonita do que Santa Sofia. O edifício tem 43 metros de altura.\n[…]\nAs mesquitas geralmente eram construídas com um intuito de serviço público. A  külliye da Mesquita Azul inclui ou incluiu  uma madraça, um hamame, uma cozinha que fornecia sopa aos pobres e lojas (o Bazar Arasta), cujas rendas se destinam a financiar o complexo.\n[…]\nA mesquita foi revestida com azulejos sobretudo azuis e possui ricos vitrais também do mesmo tom. Não há figuras no interior da mesquita pois os muçulmanos não cultuam imagens. Ao entrar na mesquita é necessário tirar os sapatos. Calções, bermudas, minissaias ou camisetas sem mangas não são recomendados. Funcionários da mesquita fornecem uma espécie de canga para cobrir as partes do corpo que segundo as regras islâmicas não devem ser ser expostas num espaço sagrado.\n[…]\nGuia da Mesquita Azul. www.turismogrecia.info",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Via-Sacra",
      "descricao": "Devoção cristã que percorre as etapas do caminho de Jesus até a crucificação"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Na forma tradicional católica, a Via-Sacra, que relembra o caminho de Jesus até a crucificação, tem quantas estações?",
    "resposta": "Catorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stations_of_the_Cross"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stations_of_the_Cross",
        "situacao": "ok",
        "texto": "The Stations of the Cross or the Way of the Cross, also known as the Way of Sorrows, the Via Crucis or the Via Dolorosa, are any series of fourteen images depicting Jesus Christ on the day of his crucifixion and accompanying prayers. These fourteen stations are derived from the imitations of the Via Dolorosa of Old Jerusalem which is a traditional processional route in Palestine symbolizing the pa\n[…]\nOut of the fourteen traditional Stations of the Cross, only eight have a clear scriptural foundation. Station 4 appears out of order from scripture; Jesus's mother is present at the crucifixion but is only mentioned after Jesus is nailed to the cross and before he dies (between stations 11 and 12). The scriptures contain no accounts whatsoever of any woman wiping Jesus's face (Station 6) nor of Jesus falling as stated in Stations 3, 7 and 9.\n[…]\nJesus is crucified;\n[…]\nJesus promises Heaven to the repentant thief\n[…]\nJesus dies on the Cross\n[…]\nJesus is laid in the tomb\n[…]\nJesus rises from the dead\n[…]\nFranz Liszt wrote a Via Crucis for choir, soloists and piano or organ or harmonium in 1879. In 1931, French organist Marcel Dupré improvised and transcribed musical meditations based on fourteen poems by Paul Claudel, one for each station.\n[…]\nDavid Bowie regarded his 1976 song \"Station to Station\" as \"very much concerned with the stations of the cross\". Polish composer Paweł Łukaszewski wrote Via Crucis in 2000 and it was premiered by the Podlaska Opera and Orchestra on March 8, 2002. Stefano Vagnini's 2002 modular oratorio, Via Crucis, is a composition for organ, computer, choir, string orchestra and brass quartet. Italian composer Fabio Mengozzi released his electronic album Via crucis in 2022.\n[…]\nActs of Reparation to Jesus Christ\n[…]\nLife of Jesus in the New Testament\n[…]\nSayings of Jesus on the cross\n[…]\nVia Crucis celebration texts used by the Vatican on Good Fridays since 1991 from the official Vatican website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Via-cr%C3%BAcis",
        "situacao": "ok",
        "texto": "A via-crúcis (em latim: Via Crucis; lit. \"Caminho da Cruz\"), também chamada via-sacra, refere-se ao trajeto que foi percorrido por Jesus carregando a cruz, desde o Pretório até o Calvário, onde morreu.\n[…]\nO exercício da Via Sacra consiste na prática devocional religiosa na qual os fiéis percorrem, mentalmente e por via de orações próprias, o percurso de Jesus a carregar a Cruz desde o Pretório de Pôncio Pilatos até ao Monte Calvário, meditando simultaneamente na Paixão de Cristo.\n[…]\nTal exercício, muito usual no tempo da Quaresma, teve origem na época das Cruzadas (do século XI ao XIII): os fiéis que, então, percorriam, na Terra Santa, os lugares sagrados da Paixão de Cristo quiseram reproduzir, no Ocidente, a peregrinação feita ao longo da Via Dolorosa em Jerusalém. O número de estações, passos ou etapas dessa caminhada foi sendo definido paulatinamente, chegando à forma atual, de catorze estações, no século XVI.\n[…]\nO exercício da via-sacra tem sido muito recomendado pelos Sumos Pontífices da Igreja Católica, pois proporciona uma frutuosa meditação da paixão e morte de Jesus Cristo.\n[…]\nAs meditações da Via Sacra são baseadas nas tradicionais 14 estações ou etapas em que se apresentam as cenas da Paixão de Cristo a serem meditadas pelos Seus seguidores e devotos:\n[…]\nEstação: Jesus carrega a cruz às costas;\n[…]\nEstação: Jesus é pregado na cruz;\n[…]\nEstação: Jesus morre na cruz;\n[…]\nEstação: Jesus é descido da cruz;\n[…]\nO Papa João Paulo II sugeriu que fosse criada uma décima-quinta estação na Via Sacra para recordar a ressurreição de Jesus, embora esta seja opcional e não entre na estrutura tradicional da Via-Sacra (assim como acontece com os Mistérios Luminosos no Santo Rosário).\n[…]\n«A Via Sacra : As 14 estações»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Evangelho de Marcos",
      "descricao": "Um dos quatro evangelhos do Novo Testamento"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dos quatro evangelhos do Novo Testamento, qual é o mais curto?",
    "resposta": "Marcos",
    "distratores": [
      "Mateus",
      "Lucas",
      "João"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gospel_of_Mark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gospel_of_Mark",
        "situacao": "ok",
        "texto": "The Gospel of Mark is the second of the four canonical Gospels and one of the three Synoptic Gospels. It narrates the ministry of Jesus from his baptism by John the Baptist to his crucifixion, his burial, and the discovery of his empty tomb. It portrays Jesus as a teacher, an exorcist, a healer, and a miracle worker.\n[…]\nThe author introduces his work as \"gospel\", meaning \"good news\", a literal translation of the Greek \"evangelion\" – he uses the word more often than any other writer in the New Testament except Paul. Paul uses it to mean \"the good news (of the saving significance of the death and resurrection) of Christ\"; Mark extends it to the career of Christ as well as his death and resurrection.\n[…]\nIn the Old Testament, the cloud is the garment or dwelling-place of deity, the symbol of its presence in the midst of the people. Isaiah 19:1 lauds the \"Lord riding upon a soft cloud\"; at the transfiguration, the cloud was the sign of God's presence on the mountain (Matt 17:5 and parallels); and on the day of his ascension, Jesus was taken up in a cloud. The equivalence of these three titles, Christ, Son of God, Son of Man, the common element being the reference to kingly power.\n[…]\nOnly place in the New Testament where Jesus is referred to as \"the son of Mary\".\n[…]\nMark is the only canonical gospel with significant various alternative endings. Most of the contents of the traditional \"Longer Ending\" (Mark 16:9–20) are found in other New Testament texts and are not unique to Mark, see Mark 16 § Longer ending, the one significant exception being Mark 16:18b (\"and if they drink any deadly thing, it shall not hurt them\"), which is unique to Mark."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Evangelho_segundo_Marcos",
        "situacao": "ok",
        "texto": "O Evangelho Segundo Marcos (em grego:  κατὰ Μᾶρκον εὐαγγέλιον, τὸ εὐαγγέλιον κατὰ Μᾶρκον - transl. euangelion kata Markon) é o segundo livro do Novo Testamento. Sendo o evangelho mais curto da Bíblia cristã, com apenas 16 capítulos, ele conta a história de Jesus de Nazaré. É considerado pelos eruditos um dos três evangelhos sinópticos. De acordo com a tradição, Marcos foi pensado para ser um epíto\n[…]\nAssim, os eruditos no Novo Testamento concordam que o Evangelho segundo Marcos é um documento, escrito emgrego koiné e que serviu de base para os Evangelhos Sinópticos. Ele fornece a cronologia geral da vida de Jesus, desde o batismo até o túmulo vazio.\n[…]\nO Evangelho segundo Marcos é o mais curto dos evangelhos canônicos. Seus manuscritos, tanto os pergaminhos quanto os códices, possuem diferentes versões do texto, principalmente no início e no final. Estas perdas não afetam essencialmente o conteúdo teológico do evangelho.\n[…]\nO Evangelho segundo Marcos é diferente dos outros evangelhos em vários detalhes, na linguagem e no conteúdo. Sua teologia é única. O vocabulário presente nesta obra possui 1330 palavras distintas, das quais 60 são nomes próprios. Oitenta palavras (exclusivo de nomes próprios) não são encontradas em outras partes do Novo Testamento. Cerca de um quarto delas não são clássicas.\n[…]\nAlém disso, Marcos faz uso do presente histórico, bem como do segredo messiânico a fim de revelar a mensagem do seu Evangelho.\n[…]\nOs cristãos consideram o Evangelho segundo Marcos como divinamente inspirado, tendo a teologia desta obra em consonância com a do resto da Bíblia. Cada um vê Marcos como uma das mais importantes contribuições para a teologia cristã, apesar de os cristãos discordarem às vezes sobre a natureza dessa teologia. No entanto, a contribuição deste evangelho para a teologia do Novo Testamento pode ser identificada como única em si.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Igreja do Santo Sepulcro",
      "descricao": "Igreja de Jerusalém erguida sobre os locais tradicionais da crucificação e do túmulo de Jesus"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Há séculos, as chaves da Igreja do Santo Sepulcro, em Jerusalém, ficam sob a guarda de famílias de que religião?",
    "resposta": "Muçulmana",
    "distratores": [
      "Judaica",
      "Drusa",
      "Bahá'í"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre",
        "situacao": "ok",
        "texto": "The Church of the Holy Sepulchre,  also known as the Church of the Resurrection, is a fourth-century church in the Christian Quarter of the Old City of Jerusalem. The church is simultaneously the seat of the Armenian Patriarchate of Jerusalem, Greek Orthodox Patriarchate of Jerusalem, and the Catholic Latin Patriarchate of Jerusalem. It is the holiest site in Christianity, and it has been an impor\n[…]\nControl of Jerusalem, and thereby the Church of the Holy Sepulchre, continued to change hands several times between the Fatimids and the Seljuk Turks (loyal to the Abbasid caliph in Baghdad) until the Crusaders' arrival in 1099.\n[…]\nThe dispute stemmed from a safety measure that prohibited all religious gatherings of more than 50 people at Old City holy sites including the Western Wall, Church of the Holy Sepulchre, and the Dome of the Rock. The safety precautions were instituted as a result of a missile strike days earlier due to the ongoing war with Iran.\n[…]\nThis event drew criticism from Italian Prime Minister Giorgia Meloni and the Spanish Prime Minister Pedro Sanchez who both called it an attack against religious freedoms, from French President Emmanuel Macron who likewise condemned the move and said it came in the context of \"the worrying increase in violations of the status of the Holy Places in Jerusalem\", and from U.S.\n[…]\nFrom the ninth century onward, the construction of churches inspired by the Anastasis was extended across Europe. One example is Santo Stefano in Bologna, Italy, an agglomeration of seven churches recreating shrines of Jerusalem.\n[…]\nThey include the Heiliges Grab (\"Holy Tomb\") of Görlitz, constructed between 1481 and 1504, the New Jerusalem Monastery in Moscow Oblast, constructed by Patriarch Nikon between 1656 and 1666, and Mount St. Sepulchre Franciscan Monastery built by the Franciscans in Washington, D.C. in 1898.\n[…]\nThe Holy Sepulchre Virtual Tour"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santo_Sepulcro",
        "situacao": "ok",
        "texto": "A Basílica do Santo Sepulcro  também conhecida como Igreja da Ressurreição, é um templo cristão localizado no Bairro Cristão da Cidade Antiga de Jerusalém. A igreja é a sede do Patriarcado Ortodoxo Grego de Jerusalém.\n[…]\nO imperador decidiu então construir um santuário apropriado no local, a Igreja do Santo Sepulcro, no lugar do templo do imperador Adriano dedicado a Vênus. Os arquitectos inspiraram-se não nas estruturas religiosas pagãs, mas na basílica, um edifício que entre os romanos servia como local de encontro, de comércio e de administração da justiça.\n[…]\nEm 638, a cidade de Jerusalém, assim como toda a Palestina, passou para as mãos dos muçulmanos. Os primeiros líderes muçulmanos de Jerusalém revelaram-se tolerantes para com o cristianismo. Em 966, as portas e o telhado da igreja foram queimados durante um motim. Em 1009, o califa fatímida Aláqueme Bianre Alá ordenou a destruição de todas as igrejas de Jerusalém, incluindo o Santo Sepulcro, sendo que somente os pilares da igreja, que eram da época de Constantino, sobreviveram à destruição.\n[…]\nA Rotunda está localizada no centro do Anastasis, abaixo da maior das duas cúpulas da igreja. No centro da Rotunda está uma pequena capela ou edifício religioso chamada de Edícula (do latim ædiculum, pequeno edifício), construída no século XIX, onde está o Santo Sepulcro, propriamente dito. A Edícula tem dois quartos, o primeiro é a Capela do Anjo, que é onde se acredita estar um fragmento da pedra grande que selou o túmulo; no segundo está o próprio túmulo.\n[…]\nLista de locais de sepultamento de fundadores de tradições religiosas\n[…]\nBasílica da Anunciação\n[…]\nBasílica da Natividade",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Ganesha",
      "descricao": "Deus hindu com cabeça de elefante, ligado à sabedoria e à remoção de obstáculos"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No hinduísmo, cada deus tem um animal que lhe serve de montaria. Qual é o do deus Ganesha, que tem cabeça de elefante?",
    "resposta": "Rato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ganesha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ganesha",
        "situacao": "ok",
        "texto": "Ganesha, or Ganesh (Sanskrit: गणेश, IAST: Gaṇeśa, IPA: [ɡɐˈɳeːɕɐ]), also known as Ganapati, Vinayaka and Pillaiyar, is one of the best-known and most revered and worshipped deities in the Hindu pantheon and is the Supreme god in the Ganapatya sect. His depictions are found throughout India. Hindu denominations worship him regardless of affiliations. Ganesha also holds the Title of \"Pratham Pujya\" \n[…]\nGanesha is mentioned in Hindu texts between the 1st century BCE and 2nd century CE, and a few Ganesha images from the 4th and 5th centuries CE have been documented by scholars. Hindu texts identify him as the son of Parvati and Shiva of the Shaivism tradition, but he is a pan-Hindu god found in its various traditions. In the Ganapatya tradition of Hinduism, Ganesha is the Supreme Being. The principal texts on Ganesha include the Ganesha Purana, the Mudgala Purana, and the Ganapati Atharvasirsha.\n[…]\nGanapati (also known as Vinayaka in Buddhism) was adopted as a deity into Indian Vajrayana Buddhism and Ganapati (Tibetan: tshogs bdag) remains a deity in the Tibetan Buddhist pantheon. There are thirty texts contained in the Tibetan Buddhist canon which deal with Ganesha. In these texts, which are Indian texts preserved in Tibetan translation, Ganapati is depicted as a wealth deity which can also grant worldly pleasures like sex and food.\n[…]\nThe canonical literature of Jainism does not mention the worship of Ganesha. However, Ganesha is worshipped by some Jains, for whom he appears to have taken over certain functions of the god of wealth, Kubera. Jain ties with the trading community support the idea that Jainism took up Ganesha worship as a result of commercial connections and influence of Hinduism. The earliest known Jain Ganesha statue dates to about the 9th century.\n[…]\nThirty-two forms of Ganesha – 32 forms of Hindu god Ganesha\n[…]\nGanesh: Symbol and presence"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ganesha",
        "situacao": "ok",
        "texto": "Ganesha (em sânscrito: गणेश), também aportuguesado como Ganexa, é um dos mais conhecidos e venerados deuses do hinduísmo. Este epíteto é composto das palavras gaṇa (sânscrito: गण = tropas, grupos, exércitos) + īśa (sânscrito: ईश = senhor), as quais, por acomodação eufônica formam Gaṇeśa. É o primeiro filho de Xiva e Pārvatī, irmão de Escanda, e o esposo de Budhi (Aprendizado) e Siddhi (Realização)\n[…]\nGanesha é o símbolo das soluções lógicas e deve ser interpretado como tal. Seu corpo é humano enquanto a cabeça é de um elefante; ao mesmo tempo, seu transporte (vahana) é um rato. Desta forma, Ganesha representa uma solução lógica para os problemas: é o \"Destruidor de Obstáculos\". Sua consorte é Buddhi (um sinônimo de \"mente\") e ele é adorado junto de Lakṣmi (a deusa da abundância) pelos mercadores e homens de negócio. O culto de Ganesha é amplamente difundido, mesmo fora da Índia.\n[…]\nDizem que certa vez, Ganesha após ter recebido de muitos de seus devotos uma enorme quantidade de doces (Modak), para poder digerir melhor essa incrível quantidade de comida, decidiu ir passear. Ele montou em seu rato, que utiliza como veículo, e foi adiante. Foi uma noite magnífica e a lua estava resplandecente. De repente, uma cobra apareceu do nada e assustou o rato, que pulou e tirou Ganesha de sua montaria.\n[…]\nSatisfeito com essa solução, ele remontou em seu rato e continuou sua excursão. Candradeva (O Deus da Lua) observou toda aquela cena e caiu na gargalhada.\n[…]\nUma vez ocorreu uma grande competição entre os Devas para decidir quem entre eles seria o chefe do Gaṇa (tropas de semideuses à serviço de Xiva). Foi pedido aos competidores que eles dessem a volta ao mundo o mais rápido possível e retornassem para os pés de Xiva. Os deuses foram, cada um em seu próprio veículo, e mesmo Ganesha participou com entusiasmo desta corrida; mas ele era extremamente pesado e seu veículo era um rato!",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
