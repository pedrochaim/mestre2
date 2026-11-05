Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Invenções e História da Ciência** (tema **Ciências**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Penny-farthing",
      "descricao": "Biciclo do século dezenove com roda dianteira enorme e roda traseira pequena."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O biciclo do século dezenove, de roda dianteira enorme e traseira pequena, ganhou em inglês o nome penny-farthing, inspirado em quê?",
    "resposta": "Duas moedas britânicas",
    "distratores": [
      "Duas rodas de carroça",
      "Dois inventores ingleses",
      "Duas aves inglesas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Penny-farthing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penny-farthing",
        "situacao": "ok",
        "texto": "The penny-farthing, also known as a high wheel, high wheeler or ordinary, is an early type of bicycle distinguished by its large front wheel and comparatively small back wheel. It was popular in the 1870s and 1880s, with its large front wheel providing high speeds, owing to its travelling a long distance for every rotation of the wheel. These bicycles had solid rubber tires and as a consequence th\n[…]\nThe nephew of one of the men responsible for popularity of the penny-farthing was largely responsible for its demise. James Starley had built the Ariel (spirit of the air) high-wheeler in 1870, but this was a time of innovation, and when chain drives were upgraded so that each link had a small roller, higher and higher speeds became possible without the need for a large front wheel.\n[…]\nThe high-wheeler lives on in the gear inch units used by cyclists in English-speaking countries to describe gear ratios. These are calculated by multiplying the wheel diameter in inches by the number of teeth on the front chain-wheel and dividing by the teeth on the rear sprocket. The result is the equivalent diameter of a penny-farthing wheel.\n[…]\nThe penny-farthing is a symbol of the cities of Sparta, Wisconsin; Davis, California; and Redmond, Washington.\n[…]\nIn October there is a bicycle ride from the 30 feet (9.1 m) statue of an 1890s bicyclist on a penny-farthing in Port Byron, Illinois, named \"Will B. Rolling\" to a similar statue in Sparta, Wisconsin named \"Ben Bikin'\".\n[…]\nIn 2004, British leukemia patient and charity fundraiser Lloyd Scott (43) rode a penny-farthing across the Australian outback to raise money for a charitable cause.\n[…]\nIn November 2008, Briton Joff Summerfield completed a 22,000 miles (35,000 km) round-the-world trip on a penny-farthing. Summerfield spent two-and-a-half years cycling through 23 countries, visiting locations including the Taj Mahal, Angkor Wat and Mount Everest."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biciclo",
        "situacao": "ok",
        "texto": "O biciclo (também conhecido pelas designações inglesas penny-farthing, high wheel e ordinary) é um tipo de veículo velocípede de duas rodas, semelhante a uma bicicleta, mas caracterizado por contar com uma roda dianteira de dimensões significativamente maiores do que as da roda traseira.\n[…]\nEmbora sejam hoje conhecidas, no mundo anglo-saxónico como penny-farthings, este termo provavelmente começou a ser utilizado quando já estavam fora de moda; a primeira referência impressa de que se tem conhecimento consta da edição da Bicycling News de 1891. O termo vem da Inglaterra, por causa das moedas penny e farthing, sendo uma bem maior que a outra, de modo que elas representam a bicicleta de lado. Para a maioria das pessoas elas eram conhecidas simplesmente como bicicletas.\n[…]\nNo final da década de 1890, o nome \"ordinária\" começou a ser utilizado para distingui-las das \"bicicletas seguras\".\n[…]\nEmbora a moda das penny-farthing tenha durado pouco tempo, estas vieram a tornar-se num símbolo da era Vitoriana, sendo que a sua popularidade coincide com o nascimento do ciclismo desportivo.\n[…]\nO biciclo é um velocipede de mecanismo direto, o que quer dizer que os pedais e pedivelas estão ligados diretamente ao cubo.\n[…]\nUma vez que o biciclo não conta com uma corrente, cassetes de mudanças ou torniquete para poder multiplicar a relação entre os pedais e a roda, a roda principal foi aumentada para que as suas dimensões se aproximassem ao comprimento da perna do ciclista, assegurando assim maior velocidade. Isto fazia com que o ciclista ficasse posicionado praticamente no topo da roda, o que tornava impossível que este conseguisse tocar no chão com os pés, enquanto estava sentado no selim.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Zíper",
      "descricao": "Fecho deslizante de dentes intercalados usado em roupas, bolsas e calçados"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome zíper vem de uma marca registrada nos anos vinte pela fabricante americana B.F. Goodrich para que produto com esse fecho?",
    "resposta": "Galochas de borracha",
    "distratores": [
      "Malas de viagem",
      "Jaquetas de aviador",
      "Bolsas femininas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zipper"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zipper",
        "situacao": "ok",
        "texto": "A zipper (N. America), zip, zip fastener (UK), formerly known as a clasp locker, is a commonly used device for binding together two edges of fabric or other flexible material. Used in clothing (e.g., jackets and jeans), luggage and other bags, camping gear (e.g., tents and sleeping bags), and many other items, zippers come in a wide range of sizes, shapes, and colors. In 1892, Whitcomb L. Judson, \n[…]\nZippers may:\n[…]\nThe popular North American term zipper (UK zip, or occasionally zip-fastener) came from the B. F. Goodrich Company in 1923. The company used Gideon Sundbäck's fastener on a new type of rubber boots (or galoshes) and referred to it as the zipper, and the name stuck. The two chief uses of the zipper in its early years were for closing boots and tobacco pouches. Zippers began being used for clothing in 1925 by Schott NYC on leather jackets.\n[…]\nBottom Tape Extension (the fabric part of the zipper, that extends beyond the teeth, at the bottom of the chain)\n[…]\nSingle Tape Width (refers to the width of the fabric on one side of the zipper chain)\n[…]\nForbes reported in 2003 that although the zipper market in the 1960s was dominated by Talon Zipper (US) and Optilon (Germany), Japanese manufacturer YKK grew to become the industry giant by the 1980s. YKK held 45 percent of world market share, followed by Optilon (8 percent) and Talon Zipper (7 percent). YKK enters zipper historical records only following the significant contributions from Howe, Judson, Sundback and the B.F. Goodrich Company.\n[…]\nZippers have entered into urban legends. American folklorist Jan Brunvand noted that \"The zipper has been the subject of jokes and legends since... the 1920s\". Those stories reflect \"modern anxieties and desires\", emphasizing embarrassments and accidents, primarily involving the flies of men's trousers in stories such as \"The Unzipped Stranger\" and \"The Unzipped Fly\".\n[…]\nZipper storage bag\n[…]\nType of Zippers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%ADper",
        "situacao": "ok",
        "texto": "Um zíper, fecho éclair, fecho ecler, zíper ou fecho de correr [PT]   é um fecho utilizado em roupas e em artefatos de couro feito de dois cadarços com dentes plásticos ou metálicos, que se encaixam por ação de um cursor.\n[…]\nA história do zíper, fecho éclair ou simplesmente \"fecho\" começou em 1893 na Exposição Mundial de Chicago, nos EUA, onde este objeto deslizante para fechar e abrir roupas foi apresentado pela primeira vez. Tratava-se de uma versão primitiva do dispositivo, com minúsculos ganchos e argolas, desenvolvida pelo engenheiro americano Whitcomb L. Judson. Cansado de abrir e fechar todos os dias os cordões dos seus sapatos, ele teve a ideia de criar um artefato rudimentar, composto de ganchos e furos.\n[…]\nPorém, esse tipo de zíper não era muito eficiente: não fechava com facilidade e abria em horas impróprias.\n[…]\nO nome \"zíper\" vem da palavra zipper, em inglês. Este nome popularizou-se somente em 1923, vindo de um funcionário da empresa americana B. F. Goodrich, em que o termo foi usado para denominar o fecho da nova linha de galochas de borracha da fábrica, chamada Zipper Boots.\n[…]\nEm Portugal e no Brasil adotou-se a expressão «fecho éclair», vinda do francês fermeture Éclair, que se refere ao nome da sociedade detentora do registro da marca — a Éclair Prestil SN. Essa expressão foi utilizada durante muitos anos, por fecho éclair ser uma marca mundialmente conhecida desde a sua fundação em 1946.\n[…]\nAtualmente, o maior produtor de zíperes do mundo está localizado no Japão, onde o grupo YKK tornou-se o mais famoso do mundo na fabricação destes fechos.\n[…]\nLista de casos de degenerescência de marca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Sputnik 1",
      "descricao": "Primeiro satélite artificial da Terra, lançado pela União Soviética em 1957."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em russo, o nome Sputnik, dado ao primeiro satélite artificial, lançado pela União Soviética em 1957, significa o quê?",
    "resposta": "Companheiro de viagem",
    "distratores": [
      "Estrela vermelha",
      "Pequena lua",
      "Mensageiro veloz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sputnik_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sputnik_1",
        "situacao": "ok",
        "texto": "Sputnik 1  (, Russian: Спутник-1, Satellite 1), often referred to as simply Sputnik, was the first artificial Earth satellite. It was launched into an elliptical low Earth orbit by the Soviet Union on 4 October 1957 as part of the Soviet space program. It sent a radio signal back to Earth for three weeks before its three silver-zinc batteries became depleted. Aerodynamic drag caused it to fall bac\n[…]\nThe satellite's success was unanticipated by the United States. This precipitated the American Sputnik crisis and triggered the start of the Space Race. The launch was the beginning of a new era of political, military, technological, and scientific developments. The word sputnik is Russian for satellite when interpreted in an astronomical context; its other meanings are spouse or travelling companion.\n[…]\nСпутник-1, romanized as Sputnik-Odin (pronounced [ˈsputnʲɪk.ɐˈdʲin]), means 'Satellite-One'. The Russian word for satellite, sputnik, was coined in the 18th century by combining the prefix s- ('fellow') and putnik ('traveler'), thereby meaning 'fellow-traveler', a meaning corresponding to the Latin root satelles ('guard, attendant or companion'), which is the origin of English satellite.\n[…]\nThe success of Sputnik 1 seemed to have changed minds around the world regarding a shift in power to the Soviets.\n[…]\nInitially, U.S. President Dwight Eisenhower was not surprised by Sputnik 1. He had been forewarned of the R-7's capabilities by information derived from U-2 spy plane overflight photos, as well as signals and telemetry intercepts. General James M. Gavin wrote in 1958 that he had predicted to the Army Scientific Advisory Panel on 12 September 1957 that the Soviets would launch a satellite within 30 days, and that on 4 October he and Wernher von Braun had agreed that a launch was imminent.\n[…]\nILLIAC I — first computer to calculate the orbit of Sputnik 1\n[…]\nNASA on Sputnik 1"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sputnik-1",
        "situacao": "ok",
        "texto": "Sputnik-1 (em russo: Спутник-1), inicialmente batizado Iskusstvenni Sputnik Zemli (em russo: Искусственный спутник Земли, trad.: Satélite Artificial da Terra ou Companheiro Viajante Artificial da Terra) e aportuguesado Esputinique-1, foi o primeiro satélite artificial, isto é, o primeiro objeto posto pela humanidade em órbita ao redor de um corpo celeste, no caso a Terra.\n[…]\nLançado pela União Soviética em 4 de outubro de 1957, a partir do Cosmódromo de Baikonur, na República Socialista Soviética Cazaque, foi o primeiro de uma série de satélites produzidos pelo Programa Sputnik, cujo objetivo último consistia em estudar as propriedades das camadas superiores da atmosfera terrestre, as condições de lançamento de cargas úteis para o espaço e os efeitos da microgravidade e da radiação solar sobre os organismos vivos, com vista à preparação de missões tripuladas.\n[…]\nEm idioma russo a palavra \"Sputnik\" significa \"satélite\" ou, mais liricamente, \"companheiro viajante\". Durante suas fases de planejamento e lançamento, o satélite foi referido internamente como PS-1 (em russo: ПС-1), sigla para Satélite Elementar-1 (em russo: Простейший Спутник-1).\n[…]\nMais tarde ele seria anunciado publicamente com um nome sobretudo descritivo, Искусственный спутник Земли (romanizado Iskusstvenni Sputnik Zemli), que pode ser traduzido como \"Satélite Artificial da Terra\" e \"Companheiro Viajante Artificial da Terra\". Na sequência esse nome daria lugar à versão mais curta \"Sputnik Zemli\" (Satélite da Terra ou Companheiro Viajante da Terra) e, sobretudo fora da URSS, simplesmente Sputnik-1.\n[…]\nNa Rússia ele também continua a ser chamado \"Primeiro Satélite Artificial Soviético da Terra\". Seu nome foi oficialmente incorporado à língua portuguesa com a forma \"Esputinique\", constante do Vocabulário Ortográfico da Língua Portuguesa.\n[…]\nSalyut 1\n[…]\nLunokhod 1",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Telescópio",
      "descricao": "Instrumento óptico que usa lentes ou espelhos para observar objetos distantes."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome telescópio foi criado em 1611, num banquete em Roma em homenagem a Galileu. Em grego, essa palavra significa o quê?",
    "resposta": "Ver longe",
    "distratores": [
      "Olho mágico",
      "Grande lente",
      "Luz das estrelas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Telescope"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Telescope",
        "situacao": "ok",
        "texto": "A telescope is a device used to observe distant objects by their emission, absorption, or reflection of electromagnetic radiation. Originally, it was an optical instrument using lenses, curved mirrors, or a combination of both to observe distant objects – an optical telescope. Nowadays, the word \"telescope\" is defined as a wide range of instruments capable of detecting different regions of the ele\n[…]\nThe word telescope was coined in 1611 by the Greek mathematician Giovanni Demisiani for one of Galileo Galilei's instruments presented at a banquet at the Accademia dei Lincei. In the Starry Messenger, Galileo had used the Latin term perspicillum. The root of the word is from the Ancient Greek τῆλε, tele 'far' and σκοπεῖν, skopein 'to look or see'; τηλεσκόπος, teleskopos 'far-seeing'.\n[…]\nThe earliest existing record of a telescope was a 1608 patent submitted to the government in the Netherlands by Middelburg spectacle maker Hans Lipperhey for a refracting telescope. The actual inventor is unknown but word of it spread through Europe. Galileo heard about it and, in 1609, built his own version, and made his telescopic observations of celestial objects.\n[…]\nA Fresnel imager is a proposed ultra-lightweight design for a space telescope that uses a Fresnel lens to focus light.\n[…]\nGalileo to Gamma Cephei – The History of the Telescope. Archived 8 May 2013 at the Wayback Machine\n[…]\nThe Galileo Project – The Telescope by Al Van Helden\n[…]\n\"The First Telescopes\". Part of an exhibit from Cosmic Journey: A History of Scientific Cosmology. Archived 9 April 2008 at the Wayback Machine by the American Institute of Physics\n[…]\nTaylor, Harold Dennis; Gill, David (1911). \"Telescope\" . Encyclopædia Britannica. Vol. 26 (11th ed.). pp. 557–573.\n[…]\nOutside the Optical: Other Kinds of Telescopes\n[…]\nGray, Meghan; Merrifield, Michael (2009). \"Telescope Diameter\". Sixty Symbols. Brady Haran for the University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio",
        "situacao": "ok",
        "texto": "Um telescópio é um dispositivo usado para observar objetos distantes por meio de sua emissão, absorção ou reflexão de radiação eletromagnética. Originalmente, era um instrumento óptico que usava lentes, espelhos curvos ou uma combinação de ambos para observar objetos distantes - um telescópio óptico. Hoje em dia, a palavra \"telescópio\" é definida como uma ampla gama de instrumentos capazes de dete\n[…]\nA palavra telescópio foi cunhada em 1611 pelo matemático grego Giovanni Demisiani para um dos instrumentos de Galileo Galilei apresentados em um banquete na Accademia dei Lincei. No Mensageiro Sideral, Galileu usou o termo latino perspicillum. A raiz da palavra é do Grego Antigo τῆλε, romanizado tele 'longe' e σκοπεῖν, skopein 'olhar ou ver'; τηλεσκόπος, teleskopos 'ver ao longe'.\n[…]\nO termo \"telescópio\" (do grego tele = \"longe\" e skopein = \"olhar\" ou \"ver\") foi proposto pelo matemático grego Giovanni Demisiani em 1611, durante um banquete oferecido pela Academia dos Linces em homenagem a Galileu. Antes disso, o próprio Galileu utilizava o termo em latim perspicillum para se referir ao equipamento.\n[…]\nCom fótons de comprimentos de onda mais curtos e frequências mais altas, são usadas óticas de incidência oblíqua, em vez de óticas totalmente refletoras. Telescópios como TRACE e SOHO usam espelhos especiais para refletir extremo ultravioleta, produzindo imagens de resolução mais alta e mais brilhantes do que seria possível de outra forma. Uma abertura maior não significa apenas que mais luz é coletada, mas também permite uma resolução angular mais fina.\n[…]\nAlguns radiotelescópios, como o Allen Telescope Array, são usados por programas como SETI e o Observatório de Arecibo para buscar vida extraterrestre.\n[…]\nAlém desses tipos ópticos básicos, existem muitos subtipos de design óptico variado classificados pela tarefa que desempenham, como astrográfos, cometa-seekers e telescópios solares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Kodak",
      "descricao": "Empresa americana de fotografia fundada por George Eastman, que lançou em 1888 a primeira câmera Kodak."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "George Eastman inventou a palavra Kodak para sua empresa de fotografia. Que letra ele dizia ser a sua favorita, por parecer forte e incisiva?",
    "resposta": "A letra K",
    "distratores": [
      "A letra O",
      "A letra D",
      "A letra E"
    ],
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
        "texto": "A Eastman Kodak Company (referida simplesmente como Kodak) é uma companhia americana que produz vários produtos relacionados com a sua base histórica no analógico fotografia. A empresa está sediada em Rochester, Nova Iorque. A Kodak fornece embalagens, impressão funcional, comunicações gráficas e serviços profissionais para empresas em todo o mundo. Seus principais segmentos de negócios são Sistem\n[…]\nA Kodak foi fundada por George Eastman e Henry A. Strong em 4 de setembro de 1888. O nome foi inventado, a partir de um jogo de palavras cruzadas, ele e sua esposa usaram a letra \"K\", que o parecia ser uma letra forte. Compilaram as outras letras e formaram a palavra que foi patenteada. Durante a maioria do século XX a Kodak manteve uma posição dominante no cinema fotográfico.\n[…]\nPor se tratar da líder mundial no setor de fotografia, a empresa confiou demais no seu potencial e acreditou que nunca entraria em uma crise, desconsiderando o risco da expansão da concorrência no mercado. Desta forma, não foi reativa a ascensão de grandes corporações japonesas, incluindo a Canon, Sony e Fuji, as quais posteriormente ultrapassaram a Kodak em relação à abrangência no setor.\n[…]\nEmbora a Kodak tenha sido a criadora da primeira câmera fotográfica digital, em 1975, a empresa preferiu continuar a apostar no mercado de fotografia analógica. Apenas em 2003 decidiu entrar com mais força no setor digital, contudo, nesse momento as empresas japonesas já dominavam totalmente o mercado.\n[…]\nEssa demora para ingressar no setor digital praticamente levou a companhia, outrora bilionária, à falência. Como grande parte das receitas da Kodak era proveniente da fabricação de filmes fotográficos, a expansão das câmeras digitais, que ela mesmo havia inventado em 1975, causou súbita redução na demanda por tais filmes, afetando significativamente a economia da empresa.\n[…]\n«Kodak Brasil»\n[…]\n«Kodak Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Raio X",
      "descricao": "Radiação eletromagnética de alta energia usada em radiografias."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1895, o físico alemão Wilhelm Röntgen chamou de X os raios que tinha acabado de descobrir. Por que escolheu essa letra?",
    "resposta": "A natureza era desconhecida",
    "distratores": [
      "Formavam uma cruz",
      "Eram o décimo tipo",
      "Homenagem a um colega"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/X-ray"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/X-ray",
        "situacao": "ok",
        "texto": "An X-ray is a form of high-energy electromagnetic radiation with a wavelength shorter than those of ultraviolet rays and longer than those of gamma rays. Roughly, X-rays have a wavelength ranging from 10 nanometers to 10 picometers, corresponding to frequencies in the range of 30 petahertz to 30 exahertz (3×1016 Hz to 3×1019 Hz) and photon energies in the range of 100 eV to 100 keV, respectively.\n[…]\nX-rays were discovered in 1895 by the German scientist Wilhelm Conrad Röntgen, who named it X-radiation to signify an unknown type of radiation.\n[…]\nAlso in 1890, Röntgen's assistant Ludwig Zehnder noticed a flash of light from a fluorescent screen immediately before the covered tube he was switching on punctured.\n[…]\nOn 8 November 1895, German physics professor Wilhelm Röntgen discovered X-rays while experimenting with Lenard tubes and Crookes tubes and began studying them. He wrote an initial report \"On a new kind of ray: A preliminary communication\" and on 28 December 1895, submitted it to Würzburg's Physical-Medical Society journal. This was the first paper written on X-rays. Röntgen referred to the radiation as \"X\", to indicate that it was an unknown type of radiation.\n[…]\nRöntgen received the inaugural Nobel Prize in Physics for his discovery.\n[…]\nX-ray crystallography in which the pattern produced by the diffraction of X-rays through the closely spaced lattice of atoms in a crystal is recorded and then analysed to reveal the nature of that lattice. A related technique, fiber diffraction, was used by Rosalind Franklin to discover the double helical structure of DNA.\n[…]\n\"On a New Kind of Rays\". Nature. 53 (1369): 274–276. January 1896. Bibcode:1896Natur..53R.274.. doi:10.1038/053274b0.\n[…]\nSamuel JJ (20 October 2013). \"La découverte des rayons X par Röntgen\". Bibnum Education (in French). Röntgen's discovery of X-rays (PDF; English translation)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Raios_X",
        "situacao": "ok",
        "texto": "Para o exame de imagem, veja Radiografia.\n[…]\nOs raios X foram descobertos em 1895 pelo cientista alemão Wilhelm Conrad Röntgen, que lhes deu o nome de radiação X por se tratar de um tipo de radiação desconhecido.\n[…]\nOs primeiros indícios dos raios X surgiram nos experimentos com tubos de descarga, como uma radiação de natureza desconhecida. Os pesquisadores estudavam os raios catódicos, feixes de elétrons de alta energia observados pela primeira vez em 1869. Efeitos provocados pelos raios X foram percebidos em muitos dos primeiros tubos de Crookes, inventados por volta de 1875.\n[…]\nEm 8 de novembro de 1895, o professor de física alemão Wilhelm Röntgen descobriu os raios X durante experimentos com tubos de Lenard e de Crookes e começou a estudá-los. Escreveu um relato preliminar, \"On a new kind of ray: A preliminary communication\", e o apresentou à revista da Sociedade Físico-Médica de Wurtzburgo em 28 de dezembro de 1895. Foi o primeiro artigo sobre os raios X. Röntgen usou a letra \"X\" para indicar que se tratava de um tipo desconhecido de radiação.\n[…]\nNo início do século XX, um aparelho médico de raios X típico tinha uma bobina de Ruhmkorff ligada a um tubo de Crookes de cátodo frio. Um centelhador costumava ser ligado ao lado de alta tensão, em paralelo com o tubo, para verificar seu funcionamento. Ele permitia observar a polaridade das faíscas e estimar a tensão pelo comprimento delas, o que ajudava a avaliar o grau de vácuo do tubo, chamado de \"dureza\". Também oferecia um caminho para a descarga caso o tubo fosse desconectado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e matemático italiano (1564–1642), pioneiro do uso do telescópio na astronomia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1610, Galileu chamou as quatro luas de Júpiter que descobriu de estrelas de uma poderosa família de Florença. Que família?",
    "resposta": "Médici",
    "distratores": [
      "Bórgia",
      "Sforza",
      "Strozzi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Galilean_moons"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galilean_moons",
        "situacao": "ok",
        "texto": "The Galilean moons (), or Galilean satellites, are the four largest moons of Jupiter. They are, in descending-size order, Ganymede, Callisto, Io, and Europa. They are the most readily visible Solar System objects after Saturn, the dimmest of the classical planets; though their closeness to bright Jupiter makes naked-eye observation very difficult, they are readily seen with common binoculars, even\n[…]\nBy January 15, Galileo concluded that the stars were actually bodies orbiting Jupiter. He continued to observe these celestial orbs to 2 March 1610.\n[…]\nIn 1605, Galileo had been employed as a mathematics tutor for Cosimo de' Medici. In 1609, Cosimo became Grand Duke Cosimo II of Tuscany. Galileo, seeking patronage from his now-wealthy former student and his powerful family, used the discovery of Jupiter's moons to gain it. On 13 February 1610, Galileo wrote to the Grand Duke's secretary:\n[…]\nGalileo initially called his discovery the Cosmica Sidera (\"Cosimo's stars\"), in honour of Cosimo alone. Cosimo's secretary suggested to change the name to Medicea Sidera (\"the Medician stars\"), honouring all four Medici brothers (Cosimo, Francesco, Carlo, and Lorenzo). The discovery was announced in the Sidereus Nuncius (\"Starry Messenger\"), published in Venice in March 1610, less than two months after the first observations.\n[…]\nOn 12 March 1610, Galileo wrote his dedicatory letter to the Duke of Tuscany, and the next day sent a copy to the Grand Duke, hoping to obtain the Grand Duke's support as quickly as possible. On 19 March, he sent the telescope he had used to first view Jupiter's moons to the Grand Duke, along with an official copy of Sidereus Nuncius (The Starry Messenger) that, following the secretary's advice, named the four moons the Medician Stars. In his dedicatory introduction, Galileo wrote:\n[…]\nDominic Ford: The Moons of Jupiter. With a chart of the current position of the Galilean moons."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luas_de_Galileu",
        "situacao": "ok",
        "texto": "As Luas de Galileu (ou luas galileanas) [ɡælᵻˈliːən] são as quatro maiores luas de Júpiter, Io, Europa, Ganímedes e Calisto. Foram vistos pela primeira vez por Galileo Galilei em dezembro de 1609 ou janeiro de 1610, e reconhecidos por ele como satélites de Júpiter em março de 1610. Foram os primeiros objetos encontrados a orbitar um planeta diferente da Terra.\n[…]\nAs quatro luas galileanas eram as únicas luas conhecidas de Júpiter até a descoberta de Amalteia, a \"quinta lua de Júpiter\", em 1892.\n[…]\nEm 1605, Galileo Galilei foi contratado como tutor de matemática para Cosimo de' Medici. Em 1609, Cosimo tornou-se Grão-Duque Cosimo II da Toscana. Galileu, buscando patrocínio de seu agora rico ex-aluno e de sua poderosa família, usou a descoberta das luas de Júpiter para obtê-lo. Em 13 de fevereiro de 1610, Galileu escreveu ao secretário do grão-duque:\n[…]\nEm 12 de março de 1610, Galileu escreveu sua carta dedicatória ao duque da Toscana e, no dia seguinte, enviou uma cópia ao grão-duque, na esperança de obter o apoio do grão-duque o mais rápido possível. Em 19 de março, ele enviou o telescópio que havia usado para ver as luas de Júpiter pela primeira vez ao grão-duque, junto com uma cópia oficial de Sidereus Nuncius que, seguindo o conselho do secretário, chamou as quatro luas de Estrelas Medician. Em sua introdução dedicatória, Galileu escreveu:\n[…]\nGalileo Galilei inicialmente chamou sua descoberta de Cosmica Sidera (\"Estrelas Cosimo\"), em homenagem a Cosme II de Médici (1590–1621). Por sugestão de Cosimo, Galileu mudou o nome para Medicea Sidera (\"as Estrelas Medician\"), homenageando todos os quatro irmãos Medici (Cosimo, Francesco, Carlo e Lorenzo). A descoberta foi anunciada no Sidereus Nuncius, publicado em Veneza em março de 1610, menos de dois meses após as primeiras observações.\n[…]\nInteractive 3D visualisation of Jupiter and the Galilean moons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "James Watt",
      "descricao": "Engenheiro, inventor e químico escocês (1736–1819) que aperfeiçoou a máquina a vapor de Newcomen."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Para vender suas máquinas a vapor, James Watt criou uma unidade de potência que comparava o trabalho delas com o de que animal?",
    "resposta": "Cavalo",
    "distratores": [
      "Boi",
      "Mula",
      "Elefante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Horsepower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horsepower",
        "situacao": "ok",
        "texto": "Horsepower (hp) is a unit of measurement of power, or the rate at which work is done, usually in reference to the output of engines or motors. There are many different standards and types of horsepower. Two common definitions used today are the imperial horsepower, abbreviated hp or bhp, which is about 745.7 watts, and the metric horsepower, also represented as cv or PS, which is approximately 735\n[…]\nThe term was adopted in the late 18th century by Scottish engineer James Watt to compare the output of steam engines with the power of draft horses. It was later expanded to include the output power of other power-generating machinery such as piston engines,  turbines, and electric motors. The definition of the unit varied among geographical regions. Most countries now use the SI unit watt for measurement of power.\n[…]\nThe idea was later used by James Watt to help market the Watt steam engine, an improved Newcomen steam engine. He had previously agreed to take royalties of one-third of the savings in coal from the older Newcomen steam engines. This royalty scheme did not work with customers who did not have existing steam engines but used horses instead.\n[…]\nOther names for the metric horsepower are the Italian cavallo vapore (cv), Dutch paardenkracht (pk), the French cheval-vapeur (ch), the Spanish caballo de vapor and Portuguese cavalo-vapor (cv), the Russian лошадиная сила (л.\n[…]\nBrake refers to the device which is used to provide an equal braking force, load to balance, or equal an engine's output force and hold it at a desired rotational speed. During testing, the output torque and rotational speed are measured to determine the brake horsepower. Horsepower was originally measured and calculated by use of the \"indicator diagram\" (a James Watt invention of the late 18th century), and later by means of a Prony brake connected to the engine's output shaft."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo-vapor",
        "situacao": "ok",
        "texto": "Cavalo (em inglês: Horsepower (hp)) é uma unidade de medida de potência, ou a taxa na qual o trabalho é feito, geralmente em referência à produção de máquinas ou motores. Existem muitos padrões e tipos diferentes de cavalos. Duas definições comuns usadas hoje são a potência mecânica (ou potência imperial), que é cerca de 745,7 watts, e a potência métrica, que é de aproximadamente 735,5 watts.\n[…]\nO termo foi adoptado no final do século XVIII pelo engenheiro escocês James Watt para comparar a produção das máquinas a vapor com a potência dos cavalos de tração. Posteriormente, foi expandido para incluir a potência de saída de outros tipos de motores a pistão, bem como turbinas, motores eléctricos e outras máquinas. A definição da unidade variou entre as diversas regiões geográficas do globo. A maioria dos países agora usa a unidade de watt do SI para medir a potência.\n[…]\nCom a implementação da Diretiva 80/181 / EEC da UE no dia 1 de janeiro de 2010, o uso de cavalos na UE é permitido apenas como uma unidade suplementar.\n[…]\nO hp (horse-power em inglês) é uma unidade de origem inglesa. Fora dos países de língua inglesa, criou-se a unidade de medida cv (cavalo-vapor), porém não são iguais.\n[…]\nAssim, é habitual referir à potência dos motores de automóveis, embarcações etc. em cavalos-vapor, mas sem aclarar que nos países onde o Sistema Internacional é o único legal, se utiliza o quilowatt (kW) como unidade de potência, ainda que se acompanhe de sua equivalência em cv ou hp (na Europa, exceto Reino Unido e Irlanda, normalmente cv).\n[…]\nNo sistema Pés-Libras-Segundo ou FPS, a unidade básica de potência é pés-libras por segundo; entretanto, o horsepower (hp) é usado comumente na engenharia, sendoː\n[…]\nConvertendo para o sistema MKS de unidades: 1 lb·ft (0,138248 kgf-m), ou seja:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro (1873–1932), pioneiro dos dirigíveis e criador do 14-bis."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O inventor do 14-bis nasceu em 1873 em Palmira, Minas Gerais. Que nome essa cidade passou a ter, em homenagem a ele?",
    "resposta": "Santos Dumont",
    "distratores": [
      "Juiz de Fora",
      "Barbacena",
      "Ouro Branco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
      "https://pt.wikipedia.org/wiki/Santos_Dumont_(Minas_Gerais)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nOn 31 July 1932 state decree No. 10,447 changed the name of the town of Palmira, in Minas Gerais, to Santos-Dumont. Law No. 218, of 4 July 1936, declared 23 October to be \"aviator's day,\" celebrating the historic flight on this date in 1906, \"so that this commemoration will always have a worthy civic, sporting, and cultural celebration, especially in schools, emphasizing the initiative of the remarkable Brazilian Santos-Dumont\".\n[…]\nOn 10 November 2019, HBO released the miniseries Santos-Dumont across Latin America. The production follows the aviator's steps from childhood in his family's coffee fields Minas Gerais and São Paulo (where the family settled), to the sophisticated salons and aeroclubs in Paris, where Santos-Dumont made his historic flight in the 14-bis in 1906. Actor João Pedro Zappa played the inventor.\n[…]\n(...) Hoffman did not understand the customs and values of the time and saw everything with the distorted view that was held at that time in the United States.\" Also, in his article \"Alberto Santos-Dumont: Pioneiro da Aviação,\" Barros notes that Santos-Dumont had a media-heralded engagement to Edna Powers, daughter of an American millionaire. Cosme Degenar Drumond, writer of \"Alberto Santos-Dumont: Novas Revelações,\" says that in France Santos-Dumont has \"a reputation as a conqueror\".\n[…]\nHoffman, Paul (2003). Wings of Madness: Alberto Santos-Dumont and the Invention of Flight. Hyperion Books. ISBN 0-7868-8571-8.\n[…]\nAlberto Santos Dumont Article by writer Patricia Nell Warren."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santos_Dumont_(Minas_Gerais)",
        "situacao": "ok",
        "texto": "Santos Dumont é um município da Mesorregião da Zona da Mata, e microrregião de Juiz de Fora, no estado de Minas Gerais, no Brasil. Distante, aproximadamente 207 km de Belo Horizonte, a capital do estado; e 900 km de Brasília, capital brasileira. O município faz parte do trajeto da BR‑040, entre as cidades de Barbacena e Juiz de Fora. É conhecido como \"Terra do Pai da Aviação\".\n[…]\nSeu nome é uma homenagem ao conterrâneo Alberto Santos Dumont, considerado o \"Pai da Aviação\", nascido no Sítio de Cabangu, lugar onde hoje se encontra o Museu de Cabangu. Foi fundada por João Gomes, inicialmente com o nome de Arraial de João Gomes, que, mais tarde, elevando-se ao nível de cidade, recebeu o nome de Palmira. João Gomes era pai do inconfidente José Aires Gomes.\n[…]\nEm 31 de julho de 1932 o município de Palmyra recebeu o nome de Santos Dumont porque o célebre inventor Alberto Santos Dumont nasceu no sítio Cabangu, localizada a 16 quilômetros do então distrito de João Gomes. Isto deu muito prestígio ao município e, para homenageá-lo, mudou-se o nome.\n[…]\nO Museu Casa de Cabangu destaca-se como o expoente máximo do turismo local, unindo um profundo simbolismo histórico a um cenário de exuberante beleza natural, propício à contemplação da flora e fauna silvestre. O acervo preserva uma ampla gama de pertences a Alberto Santos Dumont e de sua família, além de registros documentais e itens que narram a trajetória de seus inventos e da aviação.\n[…]\nMonumento Alberto Santos Dumont\n[…]\nBiblioteca Pública Municipal Antenor Ayres Vianna: é um importante equipamento cultural de Santos Dumont, Minas Gerais, atuando como centro de preservação da memória local e fomento à leitura.\n[…]\nFundação Futuro Brasil de Santos Dumont: Fundada em 2002 é uma das organizações sociais mais atuantes em Santos Dumont, Minas Gerais, com foco no desenvolvimento integral de jovens em situação de risco social."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Eratóstenes",
      "descricao": "Matemático e geógrafo grego do século três a.C. que estimou a circunferência da Terra."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Eratóstenes, que estimou o tamanho da Terra, ganhou dos contemporâneos um apelido por ser considerado o segundo melhor em tudo. Que apelido?",
    "resposta": "Beta",
    "distratores": [
      "Alfa",
      "Delta",
      "Ômega"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eratosthenes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eratosthenes",
        "situacao": "ok",
        "texto": "Eratosthenes of Cyrene ( err-ə-TOSS-thə-neez; Ancient Greek: Ἐρατοσθένης [eratostʰénɛːs]; c. 276 BC – c. 195/194 BC) was an Ancient Greek polymath: a philosopher, scholar, mathematician, geographer, poet, astronomer, and music theorist. Eratosthenes eventually became the chief librarian at the Library of Alexandria. His work was the precursor to the modern discipline of geography, and he introduce\n[…]\nHis devotees nicknamed him Pentathlos after the Olympians who competed in that multi-event contest, for he had proven himself to be knowledgeable in every area of learning. Yet, according to an entry in the Suda (a 10th-century Byzantine encyclopedia), some critics scorned him, calling him Beta (Second, or Number 2) because he always came in second in all his endeavors.\n[…]\nLater authors may have shared this view to some extent: The Suda states that Eratosthenes was referred to as Beta (Second, or Number 2), because he was not seen as the leading expert in any given field. Others dubbed him Pentathlos (Πένταθλος – All-Rounded), given his various skills and areas of knowledge; Pentathlos, however, is also the title of an athlete who competes in many events but comes in second in all of them.\n[…]\nIt provides dates for several events: the fall of Troy (1184/1183 BCE), the Dorian migration (1104/1103 BCE), the first Olympiad (777/776 BCE), Xerxes' invasion (480/479 BCE), and the outbreak of the Peloponnesian War (432/431 BCE), Eratosthenes' dates are still considered authoritative.\n[…]\nEratosthenes Point in Antarctica.\n[…]\nList of ancient Greek mathematicians and contemporaries of Eratosthenes\n[…]\nEratosthenes' sieve in classic BASIC all-web based interactive programming environment\n[…]\nOpen source Physics Computer Model about Eratosthenes estimation of radius and circumference of Earth Archived 2020-01-05 at the Wayback Machine\n[…]\nEratosthenes, Katasterismoi (or Astrothesiae), original text"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erat%C3%B3stenes",
        "situacao": "ok",
        "texto": "Eratóstenes de Cirene (em grego:  Ἐρατοσθένης, transl.: Eratosthéni̱s; Cirene, 276 a.C. — Alexandria, 194 a.C.) foi um matemático, gramático, poeta, geógrafo, bibliotecário e astrônomo da Grécia Antiga, conhecido por calcular a circunferência da Terra. Nasceu em Cirene, na Líbia, e morreu em Alexandria. Estudou em Cirene, em Atenas e em Alexandria. Os contemporâneos chamavam-no de \"Beta\" porque o \n[…]\nEratóstenes é descrito pelo Suda (localização: Épsilon 2898, segundo Ada Adler) como tendo sido aluno do filósofo Aríston de Quio, do gramático Lisânias de Cirene e do poeta Calímaco. O Suda esclarece que Ptolomeu III Evérgeta trouxe-o de Atenas para Alexandria, onde permaneceu até o reinado de Ptolomeu V Epifânio. Afirma-se que Ptolomeu III trouxe-o inicialmente de Atenas para ensinar o seu filho Filopátor (Ptolomeu IV Filopátor).\n[…]\nDiz-se que ele foi chamado de \"Beta\" por estar sempre em segundo lugar em várias áreas do conhecimento. Outros, porém, o chamavam de \"Pentathlos\" - pentatleta - por sua diversidade de conhecimentos. No Suda é dito que ele nasceu no período da 126ª Olimpíada e morreu com a idade de 82 anos. Um dos seus discípulos foi Aristófanes de Bizâncio.\n[…]\nA ideia de Eratóstenes:\n[…]\nem que S é a distância entre Siena e Alexandria; θ é o ângulo formado das cidades de Siena e Alexandria; e C é a circunferência da Terra;\n[…]\nEste artigo incorpora texto de um trabalho de conteúdo livre. Licenciado em CC-BY-4.0 Azevedo, Levi O. A.; Ribeiro, Orlando S.; Costa, Natanael C.; Sinnecker, Elis H. C. P.; Gandelman, Miriam (10 de dezembro de 2021). «Revisitando o Experimento de Eratóstenes: medida do raio de Terra». Revista Brasileira de Ensino de Física: e20210354. ISSN 1806-1117. doi:10.1590/1806-9126-RBEF-2021-0354.\n[…]\nAlgoritmo do Crivo de Eratóstenes\n[…]\nLa mesure de la Terre par Eratosthène: Este artigo escrito por Arkan Simaan traz reflexões sobre a medição de Eratóstenes. (em francês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Escada rolante",
      "descricao": "Escada mecânica de degraus móveis que transporta pessoas entre andares."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra inglesa escalator, hoje usada para qualquer escada rolante, começou como o quê?",
    "resposta": "Marca registrada da Otis",
    "distratores": [
      "Sobrenome do inventor",
      "Nome de uma estação",
      "Termo da Marinha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Escalator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Escalator",
        "situacao": "ok",
        "texto": "An escalator is a moving staircase which carries people between floors of a building or structure. It consists of a motor-driven chain of individually linked steps on a track which cycle on a pair of tracks which keep the step tread horizontal.\n[…]\nAuthors and historians have offered multiple interpretations of the source of the word \"escalator\", and some degree of misinformation then proliferated. For reference, contradictory citations by seven separate individuals, including the Otis Elevator Company itself, are provided below.\n[…]\nThe alleged intended capitalization of \"escalator\" is likewise a topic of debate. Seeberger's trademark application lists the word not only with the \"E\", but also with all of the letters capitalized (in two different instances), and he specifies that \"any other form and character of type may be employed... without altering in any essential manner the character of [the] trade-mark.\" Otis Elevator Co. advertisements so frequently capitalized all of the letters in the word.\n[…]\nIn 1950, the landmark case Haughton Elevator Co. v. Seeberger precipitated the end of Otis's exclusive reign over the word \"escalator\", and simultaneously created a cautionary study for companies and individuals interested in trademark retention.\n[…]\nConfirming the contention of the Examiner of Trademark Interferences, Assistant Commissioner of Patents Murphy's decision rejected Otis' appeal to keep their trademark intact, and noted that \"the term 'escalator' is recognized by the general public as the name for a moving stairway and not the source thereof\", observing that Otis had \"used the term as a generic descriptive term... in a number of patents which [had] been issued to them and...\n[…]\nBroken escalator phenomenon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escada_rolante",
        "situacao": "ok",
        "texto": "Uma escada rolante é um método de transporte que consiste em uma escada inclinada cujos degraus movem-se para cima ou para baixo permanecendo numa posição horizontal. São usados para transportar confortavelmente e rapidamente um grande número de pessoas, entre andares dum dado edifício, especialmente em shopping centers.\n[…]\nNo Brasil, só começam a ser produzidas escadas rolantes em 1947 pela empresa Villares que, em 1951, assina um contrato com a prefeitura de São Paulo para fornecer escadas rolantes à Galeria Prestes Maia. Nessa época havia então, no Rio de Janeiro, apenas quatro escadas rolantes: na Sears, da marca Otis e em uma loja de Copacabana da marca Swiss. Com os princípios do mecanismo conhecidos, era necessário o desenvolvimento do projeto.\n[…]\nCentral–Mid-Levels escalator, 790 m: em Hong Kong, dezenas de milhares de pessoas viajam todos os dias úteis entre os níveis central e médio — um bairro residencial — usando este sistema de escadas e esteiras rolantes. É o sistema de escadas rolantes ao ar livre mais longo do mundo (não há um único intervalo). Vai apenas um sentido de cada vez; a direção inverte-se dependendo da direção do tráfego na hora de pico.\n[…]\nAs escadas rolantes mais longas do mundo estão instaladas nas estações subterrâneas profundas do Metrô de São Petersburgo. As estações Ploshchad Lenina, Tchernichevskaia e Admiralteiskaia têm escadas rolantes de até 138 m de comprimento e 69 m de altura.\n[…]\nA escada rolante mais longa suportada apenas nas extremidades do mundo está dentro do átrio do CNN Center em Atlanta, Estados Unidos. Sobe 8 andares e tem 62 m de comprimento. Originalmente construída como entrada para o parque de diversão The World of Sid and Marty Krofft, a escada rolante é agora utilizada para as excursões no estúdio da CNN.\n[…]\nEsteira rolante",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Velcro",
      "descricao": "Fecho de contato formado por uma face de ganchinhos e outra de laços, criado pelo engenheiro suíço George de Mestral."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nos anos quarenta, o suíço George de Mestral teve a ideia do velcro ao examinar o que grudava no pelo do seu cachorro depois de um passeio. O quê?",
    "resposta": "Carrapichos",
    "distratores": [
      "Teias de aranha",
      "Resina de pinheiro",
      "Lama seca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hook-and-loop_fastener"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hook-and-loop_fastener",
        "situacao": "ok",
        "texto": "Velcro is a brand of versatile fastening devices, known as hook-and-loop fasteners, hook-and-pile fasteners, or touch fasteners, that allow two surfaces to be repeatedly attached and detached with ease. A trademark of Velcro Companies, the brand name is often used generically to refer to this type of fastener. Invented in the mid-20th century, it is widely used in clothing, accessories, and variou\n[…]\nThe original hook-and-loop fastener was conceived in 1941 by Swiss engineer George de Mestral, which he named velcro. The word Velcro is a portmanteau of two French words: \"velours\" meaning velvet, and \"crochet\" meaning hook. The idea came to him one day after he returned from a hunting trip with his dog in the Alps. He took a close look at the burs of burdock that kept sticking to his clothes and his dog's fur.\n[…]\nVelcro Corporation products were displayed at a fashion show at the Waldorf-Astoria hotel in New York in 1959, and the fabric got its first break when it was used in the aerospace industry to help astronauts maneuver in and out of bulky space suits. However, this use reinforced the view among the populace that hook-and-loop was something with very limited utilitarian uses.\n[…]\nVelcro jumping is a game where people wearing hook-covered suits take a running jump and hurl themselves as high as possible at a loop-covered wall. The wall is inflated, and looks similar to other inflatable structures. It is not necessarily completely covered in the material—often there will be vertical strips of hooks. Sometimes, instead of a running jump, people use a small trampoline.\n[…]\n2002 – The Star Trek: Enterprise episode \"Carbon Creek\" portrays Velcro as being introduced to human society by Vulcans in 1957. One of the Vulcans in the episode is named \"Mestral\", after the fastener's actual inventor and founder of the brand.\n[…]\nMedia related to Hook-and-loop fasteners at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com radiação de micro-ondas, desenvolvido a partir da tecnologia de radar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O engenheiro Percy Spencer percebeu que as ondas do radar podiam cozinhar ao notar que algo tinha derretido no seu bolso. O quê?",
    "resposta": "Uma barra de chocolate",
    "distratores": [
      "Uma vela de cera",
      "Um tubo de cola",
      "Um pedaço de queijo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Microwave_oven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nThe development of the cavity magnetron in the United Kingdom made possible the production of electromagnetic waves of a small enough wavelength (microwaves) to efficiently heat up water molecules. American electrical engineer Percy Spencer is generally credited with developing and patenting the world's first commercial microwave oven, the Raytheon \"Radarange\", which was first sold in 1947. He based it on British radar technology which had been developed before and during World War II.\n[…]\nMicrowave ovens are a common kitchen appliance in households and kitchens and are popular for reheating previously cooked foods and cooking a variety of different foods. They rapidly heat foods which can easily burn or turn lumpy if cooked rapidly in conventional pans, such as butter, fats, chocolate, or porridge. Microwave ovens usually do not directly brown or caramelize food, since they rarely attain the necessary temperature to produce Maillard reactions.\n[…]\nIn 1945, the heating effect of a high-power microwave beam was independently and accidentally discovered by Percy Spencer, an American self-taught engineer from Howland, Maine. While employed at Raytheon, he noticed that microwaves from an active radar set he was working on started to melt a candy bar he had in his pocket. The first food deliberately cooked by Spencer was popcorn, and the second was an egg, which exploded in the face of one of the experimenters.\n[…]\nU.S. patent 2,495,429: Percy Spencer's original patent"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forno_de_micro-ondas",
        "situacao": "ok",
        "texto": "O forno de micro-ondas (também conhecido como forno micro-ondas ou simplesmente micro-ondas) é um eletrodoméstico utilizado principalmente na cozinha e que permite a preparação ou aquecimento rápido de alimentos.\n[…]\nA ideia de usar micro-ondas para cozinhar alimentos foi descoberta por Percy Spencer que trabalhava na empresa Raytheon, fabricando magnetrons para aparelhos de radar. Diz que um dia estava dirigindo com seu carro e passou num aparelho de radar ativo quando observou uma sensação repentina e estranha, e viu que uma barra de chocolate que carregava no bolso tinha derretido.\n[…]\nPercy não era nenhum estranho às  descobertas e experiências, devido ao seu suporte a 120 patentes e entendeu perfeitamente o que havia acontecido. O primeiro alimento a ser cozido deliberadamente com micro-ondas foi a pipoca e o segundo um ovo, que cozinhou de dentro para fora e explodiu devido à pressão.\n[…]\nEm 1945 a empresa Raytheon patenteou o processo de cozinhar por micro-ondas e em 1947, construíram o primeiro forno de micro-ondas comercial, o Radarange. Tinha 1,70 m de altura e pesava 340 kg. Era arrefecido a água e produzia 3000 watts, aproximadamente três vezes a quantidade de radiação produzida por fornos de micro-ondas atuais.\n[…]\nNão! A radiação do micro-ondas tem apenas a propriedade de cozinhar e/ou aquecer os alimentos, não alterando sua estrutura química ou molecular. Assim, o consumo de alimentos aquecidos no micro-ondas não aumenta o risco de câncer. Esse eletrodoméstico emite uma forma de radiação não ionizante classificada como possivelmente cancerígena para seres humanos, mas a estrutura do forno está preparada para que essa radiação não extravase para o ambiente externo, conforme explica o INCA.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Dinamite",
      "descricao": "Explosivo à base de nitroglicerina absorvida em material poroso, patenteado por Alfred Nobel em 1867."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Alfred Nobel buscou um explosivo mais seguro que a nitroglicerina depois que uma explosão na fábrica da família, em Estocolmo, em 1864, matou quem?",
    "resposta": "O irmão caçula, Emil",
    "distratores": [
      "O pai dele",
      "A noiva dele",
      "O sócio dele"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alfred_Nobel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "Alfred Bernhard Nobel ( noh-BEL; Swedish: [ˈǎlːfrɛd nʊˈbɛlː] ; 21 October 1833 – 10 December 1896) was a Swedish chemist, inventor, engineer, and businessman. Nobel is known for inventing dynamite, as well as having bequeathed his fortune to establish the Nobel Prizes. He worked on various important contributions and inventions to science, holding 355 patents during his life.\n[…]\nNobel's most famous invention, dynamite, was an explosive made using nitroglycerin, which was patented in 1867. He further invented gelignite in 1875 and ballistite in 1887.\n[…]\nOn 3 September 1864, a shed used for preparation of nitroglycerin exploded at the factory in Heleneborg, Stockholm, Sweden, killing five people, including Nobel's younger brother Emil. He was then deprived of his license to produce explosives. Fazed by the accident, Nobel founded the company Nitroglycerin AB in Vinterviken so that he could continue to work in a more isolated area. Nobel invented dynamite in 1867, a substance easier and safer to handle than the more unstable nitroglycerin.\n[…]\nNobel found that when nitroglycerin was incorporated in an absorbent inert substance like kieselguhr (diatomaceous earth) it became safer and more convenient to handle, and this mixture he patented in 1867 as \"dynamite\". Nobel demonstrated his explosive for the first time that year, at a quarry in Redhill, Surrey, England.\n[…]\nNobel later combined nitroglycerin with various nitrocellulose compounds, similar to collodion, but settled on a more efficient recipe combining another nitrate explosive, and obtained a transparent, jelly-like substance, which was a more powerful explosive than dynamite. Gelignite, or blasting gelatin, as it was named, was patented in 1876; and was followed by a host of similar combinations, modified by the addition of potassium nitrate and various other substances.\n[…]\nAlfred Nobel and his unknown coworker"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfred_Nobel",
        "situacao": "ok",
        "texto": "Alfred Bernhard Nobel ([noʊˈbɛl] noh-BEL; Sueco: [ˈǎlːfrɛd nʊˈbɛlː] (); 21 de outubro de 1833 – 10 de dezembro de 1896) foi um químico, inventor, engenheiro e empresário sueco. Nobel é conhecido por inventar a dinamite, bem como por ter legado sua fortuna para estabelecer os Prêmios Nobel. Ele trabalhou em várias contribuições e invenções importantes para a ciência, detendo 355 patentes durante su\n[…]\nA invenção mais famosa de Nobel, a dinamite, era um explosivo feito com nitroglicerina, patenteado em 1867. Ele inventou ainda a gelignite em 1875 e a balistite em 1887.\n[…]\nEm 3 de setembro de 1864, um galpão usado para a preparação de nitroglicerina explodiu na fábrica em Heleneborg, Estocolmo, Suécia, matando cinco pessoas, incluindo o irmão mais novo de Nobel, Emil Oskar Nobel. Ele então foi privado de sua licença para produzir explosivos. Abalado pelo acidente, Nobel fundou a empresa Nitroglicerina AB em Vinterviken para que pudesse continuar a trabalhar em uma área mais isolada.\n[…]\nNobel mais tarde combinou nitroglicerina com vários compostos de nitrocelulose, semelhantes ao colódio, mas optou por uma receita mais eficiente combinando outro explosivo nitrato, e obteve uma substância transparente e gelatinosa, que era um explosivo mais potente que a dinamite. A gelignite, ou gelatina explosiva, como foi chamada, foi patenteada em 1876; e foi seguida por uma série de combinações semelhantes, modificadas pela adição de nitrato de potássio e várias outras substâncias.\n[…]\nHá uma história bem conhecida sobre a origem do Prêmio Nobel, embora os historiadores não tenham conseguido verificá-la, e alguns descartem a história como um mito. Em 1888, a morte de seu irmão Ludvig supostamente fez com que vários jornais publicassem obituários de Alfred por engano.\n[…]\nThe Man Behind the Prize – Alfred Nobel\n[…]\nObras de ou sobre Alfred Nobel no Internet Archive\n[…]\nAlfred Nobel and his unknown coworker",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Desastre do Hindenburg",
      "descricao": "Incêndio do dirigível LZ 129 Hindenburg em 6 de maio de 1937, em Lakehurst, Nova Jersey."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1937, o dirigível alemão Hindenburg foi consumido pelo fogo em poucos segundos porque era inflado com que gás?",
    "resposta": "Hidrogênio",
    "distratores": [
      "Hélio",
      "Metano",
      "Propano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindenburg_disaster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindenburg_disaster",
        "situacao": "ok",
        "texto": "The Hindenburg disaster was an airship accident that occurred on May 6, 1937, in Manchester Township, New Jersey, United States. The LZ 129 Hindenburg (Luftschiff Zeppelin #129; Registration: D-LZ 129) was a Nazi German commercial passenger-carrying rigid airship, the lead ship of the Hindenburg class, the longest class of flying machine and the largest airship by envelope volume.\n[…]\nIn his book LZ-129 Hindenburg (1964), Zeppelin historian Douglas Robinson commented that although ignition of free hydrogen by static discharge had become a favored hypothesis, no such discharge was seen by any of the witnesses who testified at the official investigation into the accident in 1937. He continues:\n[…]\nThe inquiry reported that rivets connecting the aft end of the axial passageway to the hull had pulled out and that all radial wires in the frame closest to the stern had broken under tension. Although the Hindenburg had been recertified for passenger service in 1937, it had completed a full year of operations totalling around 170,000 miles, during which undetected lateral or torsional stress may have accumulated in its structure.\n[…]\nThe short film Hindenburg Explodes (1937) is available for free viewing and download at the Internet Archive.\n[…]\nThe short film Hindenburg Crash, June 5, 1937 (Disc 2) (1937) is available for free viewing and download at the Internet Archive.\n[…]\nMay 10, 1937 Special report on the Hindenburg disaster. Universal Newsreel YouTube\n[…]\nThe Hindenburg Makes Her Last Standing at Lakehurst – Life magazine article from 1937\n[…]\nRadio Gives Fast Zeppelin Coverage – Broadcasting Magazine. p. 14. (May 15, 1937) article on how radio reported the Hindenburg disaster\n[…]\nUnder Fire! – WLS Stand By magazine (May 15, 1937) article on Herb Morrison and his engineer Charlie Nehlsen reporting the Hindenburg disaster\n[…]\n\"Hindenburg & Hydrogen\" by Dr. Karl Kruszelnicki"
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
    "indice": 16,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Nos anos setenta, Art Fry, da 3M, viu utilidade na cola fraca de Spencer Silver porque queria marcar sem perder as páginas de quê?",
    "resposta": "Do hinário do coral",
    "distratores": [
      "De mapas rodoviários",
      "De livros escolares",
      "De listas telefônicas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 2019, the Post-it App was relaunched.\n[…]\nIn 2010, the creators of the Post-it note joined the National Inventors Hall of Fame as a result of the widespread success of the Post-it note.\n[…]\nPost-it notes may have a positive effect on how people interact with information presented to them. This is backed up by research that aimed to determine how attaching a blank Post-it note to a survey affected participation in the survey. The research found that the surveys with affixed Post-it notes were more likely to be completed and returned, and that the participants were more likely to write higher quality responses to the questions.\n[…]\nIn 2000, the 20th anniversary of Post-it notes was celebrated by having artists create artworks on the notes. One such work, by the artist R. B. Kitaj, sold for £640 in an auction, making it the most valuable Post-it note on record.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nEm 1968, Spencer Silver, um cientista da 3M nos Estados Unidos, tentou desenvolver um adesivo super forte. Em vez disso, ele acidentalmente criou um adesivo sensível à pressão \"low-tack\", reutilizável. Por cinco anos, Silver promoveu sua \"solução sem problemas\" dentro da 3M tanto informalmente quanto por meio de seminários, mas não conseguiu ganhar adeptos.\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Daguerreótipo",
      "descricao": "Processo fotográfico criado pelo francês Louis Daguerre, que produzia imagens únicas sobre placas de cobre prateadas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Numa foto de Daguerre de 1838, uma avenida movimentada de Paris parece vazia, mas mostra um homem. Por que ele ficou registrado?",
    "resposta": "Parou para engraxar as botas",
    "distratores": [
      "Era o próprio fotógrafo",
      "Estava deitado dormindo",
      "Usava roupa branca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Boulevard_du_Temple_(photograph)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Boulevard_du_Temple_(photograph)",
        "situacao": "ok",
        "texto": "Boulevard du Temple is a photograph of a Parisian streetscape made in 1838 (or possibly 1837), and is one of the earliest surviving daguerreotype plates produced by Louis Daguerre. Although the image seems to be of a deserted street, it is widely considered to be the earliest surviving photograph to include an image of a human.\n[…]\nThe earliest known photograph, the heliographic View from the Window at Le Gras, had been produced some ten years earlier using a technique that required multiple eight-hour exposures, which meant that only static objects could be recorded. However, by 1838, Daguerre had developed his own method whereby the exposure was reduced to only four to five minutes.\n[…]\nThe photograph was taken at 8:00 AM between 24 April and 4 May, either in 1837 or 1838, from a window in Daguerre's studio beside the Diorama de Louis Daguerre at 5 Rue des Marais, behind the Place du Château-d'Eau in Paris. This was at a time before the Place de la République had been built, and the location is where now Rue du Faubourg du Temple joins the Place de la République.\n[…]\nThere may have been photographs of people before 1838. Hippolyte Bayard claimed to have taken photographic self-portraits in 1837, but these have not survived. In an early picture of the Pont Neuf, made by Daguerre possibly as early as 1836, one or two people can be seen lying on the ground. A daguerreotype portrait attributed to Daguerre might date from 1837. The self-portrait by the American Robert Cornelius was taken in 1839.\n[…]\nThe location was reconstructed by the three Swedish filmmakers Maximilien Van Aertryck, Axel Danielson and Kalle Boman using analysis of the image's perspective, 3D models and old maps and plans of the area, which was substantially changed during Haussmann's renovation of Paris in the late 1800s."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boulevard_du_Temple_%28foto%29",
        "situacao": "ok",
        "texto": "A fotografia do Boulevard du Temple de 1838 (ou possivelmente 1839) é uma das primeiras placas daguerrotípicas produzidas por Louis Daguerre. Embora a imagem pareça ser de uma rua deserta, é amplamente considerada a primeira fotografia a incluir a imagem de um humano.\n[…]\nA fotografia mais antiga conhecida, a visão heliográfica da janela em Le Gras, havia sido produzida cerca de dez anos antes usando uma técnica que exigia um tempo de exposição de cerca de oito horas, o que significava que apenas objetos estáticos podiam ser registrados. No entanto, em 1838, Daguerre desenvolveu seu próprio método pelo qual a exposição foi reduzida para apenas sete minutos ou mais.\n[…]\nIsso foi em uma época antes da Place de la République ter sido construída e o lugar é onde agora a Rue du Faubourg du Temple  junta-se à Place de la République. A placa é de cerca de 13 por 16 centímetros. O Boulevard du Temple estaria ocupado com o tráfego de pessoas e cavalos, mas como seria necessário um tempo de exposição de aproximadamente dez minutos, as únicas pessoas registradas foram duas paradas - um engraxate e seu cliente na esquina da rua mostrado no canto inferior esquerdo da placa.\n[…]\nO tríceco foi colocado em exposição na Associação de Artes de Munique, onde imediatamente chamaram a atenção com o Leipzig Pfennig-Magazin dizendo da imagem das 8:00 da manhã que parecia haver um homem tendo suas botas polidas que deve ter ficado extremamente parado.\n[…]\nDurante a Segunda Guerra Mundial, os daguerrotipos originais foram mantidos em condições precárias até que, em 1970, foram colocados em empréstimo com o Stadtmuseum de Munique. A restauração foi tentada, mas com resultados desastrosos. Desde então, fac-símiles daguerreótipo foram produzidos a partir das cópias de Newhall.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Alexander Graham Bell",
      "descricao": "Inventor e cientista nascido na Escócia, a quem se atribui a primeira patente prática do telefone."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Graham Bell dedicou boa parte da vida a estudar o som e a ensinar a falar. Que condição tinham sua mãe e sua esposa?",
    "resposta": "Eram surdas",
    "distratores": [
      "Eram cantoras",
      "Eram cegas",
      "Eram gagas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alexander_Graham_Bell"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alexander_Graham_Bell",
        "situacao": "ok",
        "texto": "Alexander Graham Bell ( ; born Alexander Bell; March 3, 1847 – August 2, 1922) was a  Scottish-born Canadian-American inventor, scientist, and engineer who is credited with patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company (AT&T) in 1885.\n[…]\nBiography aired an episode Alexander Graham Bell: Voice of Invention on August 6, 1996.\n[…]\nAgarwal, Kanika. \"Was Alexander Graham Bell Anti-Deaf?.\" American Annals of the Deaf 167.3 (2022): 372-374. excerpt\n[…]\nGrosvenor, Edwin S. Alexander Graham Bell : the life and times of the man who invented the telephone (2016)  online\n[…]\nAlexander Graham Bell Institute at Cape Breton University (archived 8 December 2015)\n[…]\nBell Telephone Memorial, Brantford, Ontario\n[…]\nAlexander Graham Bell National Historic Site of Canada, Baddeck, Nova Scotia\n[…]\nAlexander Graham Bell Family Papers at the Library of Congress\n[…]\nAlexander Graham Bell—Biographical Memoirs of the National Academy of Sciences\n[…]\nScience.ca profile: Alexander Graham Bell\n[…]\nWorks by Alexander Graham Bell at Project Gutenberg\n[…]\nAlexander Graham Bell's notebooks at the Internet Archive\n[…]\nNewspaper clippings about Alexander Graham Bell in the 20th Century Press Archives of the ZBW\n[…]\nAlexander Graham Bell and the Aerial Experiment Association Photograph Collection Archived April 21, 2023, at the Wayback Machine at The Museum of Flight (Seattle, Washington).\n[…]\nAlexander Graham Bell at The Biography Channel\n[…]\nThe Story of Alexander Graham Bell (1939) at IMDb\n[…]\nAlexander Graham Bell portrayed by John Bach (1992). The Sound and the Silence (Television production). Canada, New Zealand, Ireland: Atlantis Films.\n[…]\nThe Animated Hero Classics: Alexander Graham Bell (1995) at IMDb\n[…]\nGray, Charlotte (May 2013). \"We Had No Idea What Alexander Graham Bell Sounded Like. Until Now\". Smithsonian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alexander_Graham_Bell",
        "situacao": "ok",
        "texto": "Alexander Graham Bell (Edimburgo, 3 de março de 1847 – Beinn Bhreagh, 2 de agosto de 1922) foi um cientista, inventor e fonoaudiólogo britânico, naturalizado estadounidense, fundador da Bell Telephone Company, a empresa protagonista dos primeiros passos da implantação do telefone como meio de comunicação de massa à escala internacional.\n[…]\nEm 1888, Alexander Graham Bell foi um dos fundadores da National Geographic Society e em 7 de janeiro de 1898 assumiu a presidência da instituição.\n[…]\nAlexander Graham Bell nasceu em Edimburgo numa família ligada ao ensino de elocução: o seu avô em Londres, seu tio em Dublin, e seu pai, Sr. Alexander Melville Bell, em Edimburgo, eram todos elocucionalistas professados. Este último publicou uma variedade de trabalhos sobre o assunto, dos quais vários são bem conhecidos, em especial o seu tratado na língua gestual, que apareceu em Edimburgo em 1868.\n[…]\nEm 1870, aos 23 anos, mudou-se com a família para o Canadá, onde se estabeleceram em Brantford, Ontário. Antes de sair da Escócia, Alexander Graham Bell virou a sua atenção para o telefone, e no Canadá continuou o seu interesse por máquinas de comunicação.\n[…]\nAlexander Graham Bell publicou mais de um tratado sobre o assunto em Washington, e é principalmente com os seus esforços que milhares de surdos na América passaram pelo processo de oralização.\n[…]\nA Bell Telephone Company foi fundada em 1877, pelo sogro de Alexander Graham Bell, Gardiner Greene Hubbard, que também ajudou a organizar a New England Telephone and Telegraph Company. Em 1879, a Bell Company comprou da Western Union as patentes do microfone de carbono (grafite ou antracite), criado por Thomas Edison. Isto tornou o telefone mais eficiente para chamadas de longa distância - não era mais necessário gritar para ser ouvido.\n[…]\n«Instituto Alexander Graham Bell» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Máquina a vapor de Newcomen",
      "descricao": "Máquina a vapor atmosférica criada pelo inglês Thomas Newcomen em 1712, antecessora da máquina de James Watt."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1712, a máquina a vapor do inglês Thomas Newcomen foi criada para resolver que problema?",
    "resposta": "Tirar água das minas",
    "distratores": [
      "Mover teares",
      "Puxar vagões",
      "Moer trigo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Newcomen_atmospheric_engine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newcomen_atmospheric_engine",
        "situacao": "ok",
        "texto": "The atmospheric engine was invented by Thomas Newcomen in 1712, and is sometimes referred to as the Newcomen fire engine (see below) or Newcomen engine. The engine was operated by condensing steam being drawn into the cylinder, thereby creating a partial vacuum which allowed atmospheric pressure to push the piston into the cylinder. It is significant as the first practical device to harness steam \n[…]\n\"Several of his papers were put before the Royal Society between 1707 and 1712 [including] a description of his 1690 atmospheric steam engine, similar to that built and [subsequently] put into use by Thomas Newcomen in 1712.\"\n[…]\nThere is a common legend that in 1713 a cock boy named Humphrey Potter, whose duty it was to open and shut the valves of an engine he attended, made the engine self-acting by causing the beam itself to open and close the valves by suitable cords and catches (known as the \"potter cord\"); however the plug tree device (the first form of valve gear) was very likely established practice before 1715, and is clearly depicted in the earliest known images of Newcomen engines by Henry Beighton (1717) (believed by Hulse to depict the 1714 Griff colliery engine) and by Thomas Barney (1719) (depicting the 1712 Dudley Castle engine).\n[…]\nHowever Bateman and Sherratt, and others, continued to sell atmospheric engines, some designed to use the separate condenser when the Watt patent expired. When the patents expired in 1800, there was a rush to use the separate condenser and so the remaining Newcomen engines were adapted or replaced, even in collieries.\n[…]\nAtmospheric railway\n[…]\nRolt, L. T. C.; J. S. Allen (1977). The Steam Engine of Thomas Newcomen. Hartington: Moorland. p. 160. ISBN 0-88202-171-0.\n[…]\nReprint: Rolt, L. T. C.; J. S. Allen (1998). The Steam Engine of Thomas Newcomen. Ashbourne Derbs: Landmark Publishing. p. 160. ISBN 1-901522-44-X."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Motor_a_vapor_de_Newcomen",
        "situacao": "ok",
        "texto": "O Motor a vapor de Newcomem foi inventado por Thomas Newcomen em 1712, muitas vezes chamado como Máquina atmosférica Newcomen. O motor é operado pelo vapor de condensação introduzido no cilindro, criando assim um vácuo parcial, permitindo assim que a pressão atmosférica empurre o pistão para dentro do cilindro. Foi o primeiro dispositivo prático a aproveitar o vapor para produzir trabalho mecânico\n[…]\nOs motores Newcomen foram usados em toda a Grã-Bretanha e Europa, principalmente para bombear água para fora das minas. Centenas foram construídas ao longo do século XVIII.\n[…]\nOs primeiros exemplos para os quais existem registros confiáveis foram dois motores no Black Country, dos quais o mais famoso foi erguido em 1712 no Conygree Coalworks perto de Dudley, Isso geralmente é aceito como o primeiro motor e Newcomen de sucesso, mas pode ter sido precedido por um construído a uma milha e meia a leste de Wolverhampton. Ambos foram usados por Newcomen e seu parceiro, John Calley, para bombear minas de carvão inundadas com água.\n[…]\nEmbora o seu primeiro uso tenha sido em áreas de mineração de carvão, o motor de Newcomen também foi usado para bombear água para fora das minas de metal em seu país nativo, como as minas de estanho de Cornwall. Antes da sua morte, Newcomen e outros instalaram mais de uma centena de seus motores, não só no West Country e nos Midlands, mas também no norte do País de Gales, perto de Newcastle e Cumbria.\n[…]\nEm 1725, o motor Newcomen era de uso comum na mineração, em particular em minas carvão. Ele manteve seu lugar com pouca mudança material para o resto do século. O uso do motor Newcomen foi ampliado em alguns locais para bombear o abastecimento de água municipal; Por exemplo, o primeiro motor Newcomen na França foi construído em Passy em 1726 para bombear água do rio Sena para a cidade de Paris.\n[…]\nLinha do tempo do motor a vapor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Draisiana",
      "descricao": "Veículo de duas rodas movido com os pés no chão, criado pelo alemão Karl Drais em 1817, ancestral da bicicleta."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A falta de cavalos, mortos de fome num ano sem verão, teria inspirado Karl Drais a criar a draisiana. O que causou esse ano sem verão?",
    "resposta": "Erupção do vulcão Tambora",
    "distratores": [
      "Um grande terremoto",
      "A queda de um meteoro",
      "Uma tempestade solar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dandy_horse",
      "https://en.wikipedia.org/wiki/Year_Without_a_Summer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dandy_horse",
        "situacao": "ok",
        "texto": "The dandy horse, an English nickname for what was first called a Laufmaschine ('running machine' in German), then a vélocipède or draisienne (in French and then English), and then a pedestrian curricle or hobby-horse, or swiftwalker, is a human-powered vehicle that, as the first two-wheeled vehicle, is regarded as the first bicycle. The dandy horse is powered by the rider's feet on the ground inst\n[…]\nIt was invented by Karl Drais, who called it a Laufmaschine German: [ˈlaʊfmaˌʃiːnə] 'running machine' in 1817, and patented by him in France in February 1818 as a vélocipède. It is also known as a Draisine (German: [dʁaɪˈziːnə]  in German, a term used in English only for light auxiliary railcars regardless of their form of propulsion), and as a draisienne (French: [drɛzjɛn] in French and English.\n[…]\nThe dandy-horse was a two-wheeled vehicle, with both wheels in line, propelled by the rider pushing along the ground with the feet as in regular walking or running. The front wheel and handlebar assembly was hinged to allow steering. The dandy horse was capable of more than doubling the average walking speed, to around 10 mph (16 km/h) on level ground.\n[…]\nDrais was inspired, at least in part, by the need to develop a form of transit that did not rely on the horse. After the 1815 eruption of Mount Tambora and the Year Without a Summer (1816), which followed close on the devastation of the Napoleonic Wars, widespread crop failures and food shortages resulted in the deaths of tens of thousands of horses, which either starved to death or were killed to provide meat and hides.\n[…]\nIn the 1860s in France, the vélocipède bicycle was created by attaching rotary cranks and pedals to the front-wheel hub of a dandy-horse.\n[…]\nThe dandy horse has been adapted as a starter bicycle for children, and is called a balance bike, or a run bike."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Year_Without_a_Summer",
        "situacao": "ok",
        "texto": "The year 1816 is known as the Year Without a Summer because of severe climate abnormalities that caused average global temperatures to decrease by 0.4–0.7 °C (0.7–1 °F). Summer temperatures in Europe that year were the coldest of any on record between 1766 and 2000, resulting in crop failures and major food shortages across the Northern Hemisphere.\n[…]\nAs a result of the series of volcanic eruptions in the 1810s, crops had been poor for several years; the final blow came in 1815 with the eruption of Tambora. Europe, still recuperating from the Napoleonic Wars, suffered from widespread food shortages, resulting in its worst famine of the century. Low temperatures and heavy rains resulted in failed harvests in Great Britain and Ireland. Famine was prevalent in north and southwest Ireland, following the failure of wheat, oat, and potato harvests.\n[…]\nHigh levels of tephra in the atmosphere caused a haze to hang over the sky for several years after the eruption, and created rich red hues in sunsets. Paintings during the years before and after seem to confirm that these striking reds were not present before Mount Tambora's eruption, and depict moodier, darker scenes, even in the light of both the sun and the moon. Caspar David Friedrich's The Monk by the Sea (ca. 1808–1810) and Two Men by the Sea (1817) indicate this shift of mood.\n[…]\nThe lack of oats to feed horses may have inspired the German inventor Karl Drais to research new ways of horseless transportation, which led to the invention of the draisine and velocipede, a precursor of the bicycle.\n[…]\nTambora culture – Lost village and culture on Sumbawa Island, Indonesia\n[…]\nWood, Gillen (2014). Tambora: the eruption that changed the world. Princeton University Press. p. 293. Bibcode:2014tetc.book.....W. ISBN 978-0691150543."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Draisiana",
        "situacao": "ok",
        "texto": "Draisiana, ou dresina, é um veículo de duas rodas inventado em 1817, precursor da bicicleta, e que foi chamado de draisiana em homenagem ao seu inventor, o barão Karl Drais.\n[…]\nA draisiana é a primeira definição viável do uso prático de uma bicicleta. Foi o primeiro veículo desse tipo que obteve êxito comercial em sua época, por ser dirigível e com grande interação homem-máquina. Na draisiana a tração era fornecida pelos próprios pés, por meio de empurrões do condutor contra o solo, semelhantemente ao que se faz num patinete, mas com a alternância das pernas. Não tardou que fosse desenvolvido um modelo com pedal na roda dianteira, que se denominou por velocípede.\n[…]\nEm 1817, o barão alemão Karl Christian Ludwig Drais von Sauerbronn inventou o primeiro veículo de duas rodas em linha, a que chamou Laufmaschine (\"máquina andante\"), precursora da bicicleta e da motocicleta. A laufmaschine consistia em um marco de madeira ao qual se ligavam duas rodas, alinhadas no sentido do giro, um banco e uma alavanca que fazia as vezes de guidão.\n[…]\nTal invento baseava-se na ideia de que uma pessoa, ao caminhar, desperdiça muita força por ter que deslocar seu peso de forma alternada de um pé a outro. Drais logrou criar o primeiro veículo simples que nos permitiu evitar esse trabalho. Essa máquina evoluiu rapidamente até chegar à bicicleta atual.\n[…]\nH.E.Lessing: How sophisticated was the draisine? The Boneshaker #159 (2002)\n[…]\nC.Reynaud: L'Ère de la Draisienne en France 1818-1870, Éditions Musée Vélo-Moto, Domazan 2015",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pólvora",
      "descricao": "Mistura explosiva de salitre, enxofre e carvão inventada na China, uma das Quatro Grandes Invenções chinesas."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A pólvora foi descoberta na China, por volta do século nove, por alquimistas que tentavam produzir o quê?",
    "resposta": "O elixir da imortalidade",
    "distratores": [
      "Ouro artificial",
      "Tinta para seda",
      "Remédio contra peste"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gunpowder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gunpowder",
        "situacao": "ok",
        "texto": "Gunpowder, referred to as black powder to distinguish it from modern smokeless powder, is the earliest known chemical explosive. It consists of a mixture of sulfur, charcoal (which is mostly carbon), and potassium nitrate (saltpeter). The sulfur and charcoal act as fuels, while the saltpeter is an oxidizer.\n[…]\nAccording to the Zhenyuan miaodao yaolüe, \"Some have heated together sulfur, realgar and saltpeter with honey; smoke and flames result, so that their hands and faces have been burnt, and even the whole house where they were working burned down.\" Based on these Taoist texts, the invention of gunpowder by Chinese alchemists was likely an accidental byproduct from experiments seeking to create the elixir of life.\n[…]\nAnother major area of contention in modern studies of the history of gunpowder is regarding the transmission of gunpowder. While the literary and archaeological evidence supports a Chinese origin for gunpowder and guns, the manner in which gunpowder technology was transferred from China to the West is still under debate.\n[…]\nIt is unknown why the rapid spread of gunpowder technology across Eurasia took place over several decades whereas other technologies such as paper, the compass, and printing did not reach Europe until centuries after they were invented in China.\n[…]\nIn late 14th century Europe and China, gunpowder was improved by wet grinding; liquid such as distilled spirits were added during the grinding-together of the ingredients and the moist paste dried afterwards. The principle of wet mixing to prevent the separation of dry ingredients, invented for gunpowder, is used today in the pharmaceutical industry."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%B3lvora",
        "situacao": "ok",
        "texto": "A pólvora é a designação genérica de qualquer mistura de substâncias pouco explosivas, que queima com rapidez, usada como carga propelente em armas de fogo, ou agentes explosivos em atividades de mineração ou desobstrução, e também em fogos de artifício. Historiadores creditam a descoberta aos chineses, que teria ocorrido acidentalmente por volta do século IX, pois no ano 1000 os chineses usavam a\n[…]\nDe acordo com o Zhenyuan miaodao yaolüe, \"alguns aqueceram juntos enxofre, realgar e salitre com mel; resultam fumaça e chamas, de modo que suas mãos e rostos foram queimados, e até toda a casa onde estavam trabalhando queimada\".Com base nesses textos taoístas, a invenção da pólvora pelos alquimistas chineses provavelmente foi um subproduto acidental de experimentos que tentavam criar o elixir da vida.\n[…]\nComo a \"pólvora negra\", eles foram produzidos em diferentes tamanhos de grãos. No Reino Unido, o grão mais fino era conhecido como \"sulfur-free gunpowder\" (SMP). Os grãos mais grossos foram numerados como pólvora sem enxofre (SFG n): 'SFG 12', 'SFG 20', 'SFG 40' e 'SFG 90', por exemplo; onde o número representa a menor malha da peneira BSS, que não retém nenhum grão.\n[…]\nAmostras de pólvora negra produzida para o fuzil M16 foram testadas em 2017, liberaram entre 3,8 e 10,6 megajoules por quilograma e contém seu próprio oxidante. A título de comparação, o TNT libera 4,7 megajoules por quilograma, e a gasolina 47,2 megajoules por quilograma, mas a gasolina requer um oxidante, então uma mistura otimizada de gasolina e O2 libera 10,4 megajoules por quilograma.\n[…]\nA pólvora negra também é usada em fogos de artifício para o elevar as cargas explosivas, em foguetes como combustível e em certos efeitos especiais.\n[…]\nHoje, os explosivos industriais para tais usos ainda são um grande mercado, mas a maior parte do mercado é de explosivos mais novos, em vez de pólvora negra.\n[…]\nSubstituto de pólvora negra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e matemático italiano (1564–1642), pioneiro do uso do telescópio na astronomia."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1633, julgado pela Inquisição por defender que a Terra gira em torno do Sol, Galileu foi condenado a quê?",
    "resposta": "Prisão domiciliar",
    "distratores": [
      "Morte na fogueira",
      "Exílio na Holanda",
      "Trabalhos forçados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Galileo_affair"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galileo_affair",
        "situacao": "ok",
        "texto": "The Galileo affair was an early 17th century political, religious, and scientific controversy regarding the astronomer Galileo Galilei's defence of heliocentrism, the idea that the Earth revolves around the Sun.\n[…]\nIn 1632, Galileo published his Dialogue Concerning the Two Chief World Systems, which defended heliocentrism while describing geocentrists as \"simpletons\". Responding to mounting controversy, the Roman Inquisition tried Galileo in 1633 and found him \"vehemently suspect of heresy\", sentencing him to house arrest. At this point, heliocentric books were banned and Galileo was ordered to abstain from holding, teaching or defending heliocentric ideas after the trial.\n[…]\nTo protect his good name, Galileo requested a letter from Bellarmine stating the truth of the matter. This letter assumed great importance in 1633, as did the question whether Galileo had been ordered not to \"hold or defend\" Copernican ideas (which would have allowed their hypothetical treatment) or not to teach them in any way. If the Inquisition had issued the order not to teach heliocentrism at all, it would have been ignoring Bellarmine's position.\n[…]\nGalileo was found guilty, and the sentence of the Inquisition, issued on 22 June 1633, was in three essential parts:\n[…]\nIn 1758 the Catholic Church dropped the general prohibition of books advocating heliocentrism from the Index of Forbidden Books. It did not, however, explicitly rescind the decisions issued by the Inquisition in its judgement of 1633 against Galileo, or lift the prohibition of uncensored versions of Copernicus's De Revolutionibus or Galileo's Dialogue.\n[…]\nGalileo's letter to the Grand Duchess Christina of 1615\n[…]\nInquisition documents, 1616 and 1633"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Processo_de_Galileu_Galilei",
        "situacao": "ok",
        "texto": "O Processo de Galileu Galilei (em italiano:  Il processo a Galileo Galilei) foi uma sequência de eventos, começando em torno de 1610, culminando com o julgamento e condenação de Galileu Galilei pela Inquisição Católica Romana em 1633 por sua defesa do heliocentrismo.\n[…]\nRespondendo a uma controvérsia crescente sobre teologia, astronomia e filosofia, a Inquisição Romana julgou Galileu em 1633 e o acusou de \"suspeito veementemente de heresia\", condenando-o a prisão indefinida. Galileu foi mantido em prisão domiciliar até sua morte em 1642.\n[…]\nCom a perda de muitos de seus defensores em Roma por causa do Diálogo sobre os Dois Principais Sistemas do Mundo, Galileu foi condenado a ser julgado por suspeita de heresia em 1633, \"por ter como verdade a falsa doutrina ensinada por alguns que o Sol é o centro do mundo\", contra a condenação de 1616, uma vez que\" foi decidido na Santa Congregação [...] em 25 de fevereiro de 1616 que [...] o Santo Ofício lhe daria uma liminar para abandonar esta doutrina, não para ensinar para os outros, não para defendê-la e não para tratar dela, e que, se você não concorda com esta liminar, você deve ser preso\".\n[…]\nFoi sentenciado à prisão formal pela disposição da Inquisição. No dia seguinte isso foi comutado para prisão domiciliar, onde ele permaneceu pelo resto de sua vida.\n[…]\nApós um período com o amigável arcebispo Ascanio Piccolomini em Siena, Galileu foi autorizado a retornar à sua villa em Arcetri, perto de Florença, onde passou o resto da vida sob prisão domiciliar. Continuou seu trabalho em mecânica, e em 1638 publicou um livro científico na Holanda. Sua posição permaneceria questionada em cada momento.\n[…]\nGalileo's letter to the Grand Duchess Christina of 1615\n[…]\nInquisition documents, 1616 and 1633",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Isaac Newton",
      "descricao": "Físico e matemático inglês (1643–1727), autor das leis do movimento e da gravitação universal."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1665, Isaac Newton voltou para a fazenda da família e ali fez descobertas decisivas. Por que a Universidade de Cambridge tinha fechado?",
    "resposta": "Uma epidemia de peste",
    "distratores": [
      "Um grande incêndio",
      "Uma guerra civil",
      "Uma revolta estudantil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Isaac_Newton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton ( ; 4 January 1643 [O.S. 25 December 1642] – 31 March 1727 [O.S. 20 March 1726]) was an English polymath who was a mathematician, physicist, astronomer, alchemist, theologian, historian and inventor. He was a key figure in the Scientific Revolution and the Enlightenment that followed.\n[…]\nSoon after Newton obtained his BA degree at Cambridge in August 1665, the university temporarily closed as a precaution against the Great Plague.\n[…]\nAll of Newton's known writings on alchemy are currently being put online in a project undertaken by Indiana University: \"The Chymistry of Isaac Newton\" and has been summarised in a book.\n[…]\nIn June 2020, two unpublished pages of Newton's notes on Jan Baptist van Helmont's book on plague, De Peste, were being auctioned online by Bonhams. Newton's analysis of this book, which he made in Cambridge while protecting himself from London's 1665–66 epidemic of the bubonic plague, is the most substantial written statement he is known to have made about the plague, according to Bonhams.\n[…]\nA statue of Isaac Newton, looking at an apple at his feet, can be seen at the Oxford University Museum of Natural History. A large bronze statue, Newton, after William Blake, by Eduardo Paolozzi, dated 1995 and inspired by William Blake's etching, dominates the piazza of the British Library in London. A bronze statue of Newton was erected in 1858 in the centre of Grantham where he went to school, prominently standing in front of Grantham Guildhall.\n[…]\nThe Isaac Newton Institute for Mathematical Sciences, an international research institute for mathematics and its applications at the University of Cambridge, is named in Newton's honour.\n[…]\nBernhardus Varenius, Geographia Generalis, ed. Isaac Newton, 2nd ed. (Cambridge: Joann. Hayes, 1681) from the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton PRS (Woolsthorpe-by-Colsterworth, 25 de dezembro de 1642jul./ 4 de janeiro de 1643greg. – Kensington, 20 de março de 1727jul./ 31 de março de 1727greg) foi um matemático, físico, astrônomo, alquimista, teólogo e escritor britânico (descrito em seus dias como um \"filósofo natural\") amplamente reconhecido como um dos cientistas mais influentes de todos os tempos e como uma figura-ch\n[…]\nLogo depois que Newton obteve seu diploma de bacharel, em agosto de 1665, a universidade fechou temporariamente como precaução contra a Grande Praga. Apesar de ter sido indistinguível como estudante de Cambridge, os estudos privados de Newton em Woolsthorpe ao longo dos dois anos seguintes viram o desenvolvimento de suas teorias em cálculo e outras áreas.\n[…]\nNewton também foi membro do Parlamento da Inglaterra pela Universidade de Cambridge em 1689 e 1701, mas, segundo alguns relatos, seus únicos comentários foram reclamar de uma corrente de ar frio na câmara e solicitar que a janela fosse fechada. Foi, no entanto, observado pelo diarista de Cambridge, Abraham de la Pryme, por ter repreendido estudantes que eram assustadores locais ao alegar que uma casa estava assombrada.\n[…]\nKeynes remontou metade da coleção de artigos de Newton sobre alquimia antes de doar sua coleção para a Universidade de Cambridge em 1946.\n[…]\nEm junho de 2020, duas páginas não publicadas das anotações de Newton sobre o livro de Jan Baptist van Helmont sobre a praga, De Peste, estavam sendo leiloadas online pela Bonham's. A análise de Newton deste livro, que ele fez em Cambridge enquanto se protegia da Grande Praga de Londres de 1665–66, é a declaração escrita mais substancial que se sabe que ele fez sobre a praga, segundo Bonham.\n[…]\nIsaac Newton (em inglês) no Mathematics Genealogy Project\n[…]\nBiografia de Newton (Universidade de St. Andrews)\n[…]\nRetratos de Sir Isaac Newton no National Portrait Gallery, em Londres",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Galileu Galilei",
      "descricao": "Astrônomo, físico e matemático italiano (1564–1642), pioneiro do uso do telescópio na astronomia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Pelo calendário então usado na Inglaterra, Isaac Newton nasceu no mesmo ano em que morreu que cientista italiano?",
    "resposta": "Galileu Galilei",
    "distratores": [
      "Evangelista Torricelli",
      "Giordano Bruno",
      "Alessandro Volta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Isaac_Newton",
      "https://en.wikipedia.org/wiki/Galileo_Galilei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton ( ; 4 January 1643 [O.S. 25 December 1642] – 31 March 1727 [O.S. 20 March 1726]) was an English polymath who was a mathematician, physicist, astronomer, alchemist, theologian, historian and inventor. He was a key figure in the Scientific Revolution and the Enlightenment that followed.\n[…]\nAt the time, Cambridge's teachings were based on those of Aristotle, whom Newton read along with then more modern philosophers, including René Descartes and astronomers such as Galileo Galilei and Thomas Street. He set down in his notebook a series of \"Quaestiones\" about mechanical philosophy as he found it. In 1665, he discovered the generalised binomial theorem and began to develop a mathematical theory that later became calculus.\n[…]\nNewton reported that he could see the four Galilean moons of Jupiter and the crescent phase of Venus with his new reflecting telescope. In 1671, he was asked for a demonstration of his reflecting telescope by the Royal Society. Their interest encouraged him to publish his notes, Of Colours, which he later expanded into the work Opticks. When Robert Hooke criticised some of Newton's ideas, Newton was so offended that he withdrew from public debate.\n[…]\nNewton has further been called \"the towering figure of the Scientific Revolution\" and that \"In a period rich with outstanding thinkers, Newton was simply the most outstanding.\" The polymath Johann Wolfgang von Goethe labelled the year in which Galileo Galilei died and Newton was born, 1642, as the \"Christmas of the modern age\". In the polymath Vilfredo Pareto's estimation, Newton was the greatest human being who ever lived.\n[…]\nWorks by Isaac Newton at LibriVox (public domain audiobooks)\n[…]\nBernhardus Varenius, Geographia Generalis, ed. Isaac Newton, 2nd ed. (Cambridge: Joann. Hayes, 1681) from the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Galileo_Galilei",
        "situacao": "ok",
        "texto": "Galileo di Vincenzo Bonaiuti de' Galilei (15 February 1564 – 8 January 1642), commonly referred to as Galileo Galilei or mononymously as Galileo, was an Italian astronomer, physicist, engineer and  polymath. He was born in Pisa, then part of the Duchy of Florence. Galileo has been called the father of observational astronomy, classical physics, the scientific method, and modern science.\n[…]\nIndeed, although Galileo states in the preface of his book that the character is named after a famous Aristotelian philosopher (Simplicius in Latin, \"Simplicio\" in Italian), the name \"Simplicio\" in Italian also has the connotation of \"simpleton\".\n[…]\nGalileo's theoretical and experimental work on the motions of bodies, along with the largely independent work of Kepler and René Descartes, was a precursor of the classical mechanics developed by Sir Isaac Newton.\n[…]\nBut the surface of the earth would be an instance of such a plane if all its unevenness could be removed. This was incorporated into Newton's laws of motion (first law), except for the direction of the motion: Newton's is straight, Galileo's is circular (for example, the planets' motion around the Sun, which according to him, and unlike Newton, takes place in absence of gravity).\n[…]\nSteven Weinberg writes that \"Galileo not only disobeyed the orders of the Roman Inquisition when he argued in his Dialogo that it is the Sun and not the Earth that is at rest, he wrote the Dialogo in Italian rather than in the Latin of scholars, using little mathematics, so that it could be read and understood by any literate Italian.\n[…]\nGalileo's main written works are as follows:\n[…]\nTribune of Galileo\n[…]\nWorks by Galileo Galilei at Open Library\n[…]\nWorks by Galileo Galilei at Project Gutenberg\n[…]\nWorks by Galileo Galilei at LibriVox (public domain audiobooks)\n[…]\nWorks by or about Galileo Galilei at the Internet Archive\n[…]\nWorks in Galileo's Personal Library at LibraryThing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton PRS (Woolsthorpe-by-Colsterworth, 25 de dezembro de 1642jul./ 4 de janeiro de 1643greg. – Kensington, 20 de março de 1727jul./ 31 de março de 1727greg) foi um matemático, físico, astrônomo, alquimista, teólogo e escritor britânico (descrito em seus dias como um \"filósofo natural\") amplamente reconhecido como um dos cientistas mais influentes de todos os tempos e como uma figura-ch\n[…]\nIsaac Newton nasceu no dia de Natal, 25 de dezembro de 1642 (de acordo com o calendário juliano, em uso na Inglaterra, na época) ou 4 de janeiro de 1643 (segundo o calendário gregoriano), \"entre uma e duas horas depois da meia-noite\", no Woolsthorpe Manor em Woolsthorpe-by-Colsterworth, uma aldeia no condado de Lincolnshire. Seu pai, também chamado Isaac Newton, morreu três meses antes.\n[…]\nNewton os complementou com o ensino de filósofos modernos como Descartes e astrônomos como Galileu e Thomas Street, através dos quais ele aprendeu sobre o trabalho de Kepler. Colocou, em seu caderno, uma série de \"Quaestiones\" (questões) sobre a filosofia mecânica. Em 1665, descobriu o teorema binomial generalizado e começou a desenvolver uma teoria matemática que, mais tarde, se tornou o cálculo.\n[…]\nOs filósofos do Iluminismo escolheram uma breve história dos predecessores científicos - principalmente Galileu, Boyle e Newton - como os guias e garantidores de suas aplicações do conceito singular de natureza e lei natural a todos os campos físicos e sociais da época. Nesse sentido, as lições da história e as estruturas sociais construídas sobre ela poderiam ser descartadas.\n[…]\nIsaac Newton, publicações indexadas pelo Google Scholar\n[…]\n\"The Chymistry of Isaac Newton\", pesquisa sobre seus escritos alquímicos\n[…]\nIsaac Newton (em inglês) no Mathematics Genealogy Project\n[…]\n\"A mente de Isaac Newton\" - imagens, áudio, animações e segmentos interativos\n[…]\nRetratos de Sir Isaac Newton no National Portrait Gallery, em Londres",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro (1873–1932), pioneiro dos dirigíveis e criador do 14-bis."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Por volta de 1904, que joalheiro francês criou um relógio de pulso para Santos-Dumont ver as horas sem tirar as mãos dos comandos?",
    "resposta": "Louis Cartier",
    "distratores": [
      "Louis Vuitton",
      "Hans Wilsdorf",
      "Abraham Breguet"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cartier_Santos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cartier_Santos",
        "situacao": "ok",
        "texto": "The Santos is a line of watches made by Cartier. It was created by Louis Cartier in 1911,\n[…]\nIn 1904, Brazilian pioneer aviator Alberto Santos-Dumont complained to his friend Louis Cartier of the unreliability and impracticality of using pocket watches while flying. Cartier designed a flat wristwatch with a distinctive square bezel that was favored by Santos-Dumont and many other customers. This was the first and only time the brand would name a watch after its original wearer. The \"Santos\" watch was Cartier's first men's wristwatch.\n[…]\nIn the 1988 film Wall Street, Michael Douglas, a symbol of the yuppie style, proudly wore a gold \"Cartier Santos\" watch.\n[…]\nCartier Tank"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Guglielmo Marconi",
      "descricao": "Inventor e engenheiro italiano (1874–1937), pioneiro da radiotelegrafia e Nobel de Física de 1909."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na inauguração do Cristo Redentor, em 1931, estava previsto que as luzes fossem acesas a partir de Roma, por sinal de rádio, por que inventor?",
    "resposta": "Guglielmo Marconi",
    "distratores": [
      "Nikola Tesla",
      "Thomas Edison",
      "Landell de Moura"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cristo_Redentor",
      "https://en.wikipedia.org/wiki/Guglielmo_Marconi"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nDurante a cerimônia de inauguração, a estátua foi iluminada por uma bateria de holofotes que acionada remotamente pelo pioneiro da rádio de ondas curtas, Guglielmo Marconi, que estava a 9 200 quilômetros de distância, em Roma, na Itália. A sua missa de inauguração aconteceu no Estádio de Laranjeiras, igualmente ocorrida no dia 12 de outubro de 1931.\n[…]\nA restauração de 2010 envolveu cem pessoas e usou mais de 60 mil pedaços de pedra retirados da mesma pedreira que a estátua original. Durante a inauguração da restauração, a estátua foi iluminada em verde-e-amarelo em apoio a Seleção Brasileira de Futebol, que estava jogando na Copa do Mundo FIFA de 2010.\n[…]\nEm 21 de novembro de 2007, o superintendente do Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis, Rogério Rocco, afirmou que, a partir daquela data, os católicos poderiam entrar gratuitamente no Cristo Redentor, mas apenas para celebrações religiosas em datas agendadas pela Arquidiocese do Rio de Janeiro.\n[…]\nO Trem do Corcovado é uma linha férrea que começa no bairro do Cosme Velho e segue até o cume do morro do Corcovado, a uma altitude de 710 m. A linha foi inaugurada pelo imperador Dom Pedro II em 9 de outubro de 1884. É, portanto, mais antigo que o monumento do Cristo Redentor, que foi aberto à visitação em 1931. De fato, as peças para a montagem da estátua do Cristo foram transportadas pelo próprio trem ao longo de quatro anos.\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guglielmo_Marconi",
        "situacao": "ok",
        "texto": "Guglielmo Giovanni Maria Marconi, 1st Marquess (25 April 1874 – 20 July 1937), was an Italian radio-frequency engineer, inventor, and politician known for his creation of a practical radio wave-based wireless telegraph system. This led to his being largely credited as the inventor of radio and sharing the 1909 Nobel Prize in Physics with Ferdinand Braun \"in recognition of their contributions to th\n[…]\nIn Guglielmo Marconi's historic transatlantic wireless communication experiment on 12 December 1901, the inaugural signal—consisting of the Morse code letter \"S\"—was received at Signal Hill in St. John's, Newfoundland, employing a mercury coherer detector connected to a telephone receiver. This self-restoring detector, essential for signal detection without mechanical decohering, was devised by Sir Jagadish Chandra Bose, a professor at Presidency College, Calcutta.\n[…]\nIsted, G.A., Guglielmo Marconi and the History of Radio – Part I, General Electric Company, p.l.c., GEC Review, Volume 7, No. 1, p. 45, 1991, ISSN 0267-9337.\n[…]\nIsted, G.A., Guglielmo Marconi and the History of Radio – Part II, General Electric Company, p.l.c., GEC Review, Volume 7, No. 2, p. 110, 1991, ISSN 0267-9337.\n[…]\nJolly, W.P., Marconi, 1972.\n[…]\nGuglielmo Marconi documentary Archived 9 July 2019 at the Wayback Machine, narrated by Walter Cronkite\n[…]\nNewspaper clippings about Guglielmo Marconi in the 20th Century Press Archives of the ZBW\n[…]\nUnited States Senate Inquiry into the Titanic disaster – Testimony of Guglielmo Marconi\n[…]\nI diari di laboratorio di Guglielmo Marconi (The diaries of laboratory Guglielmo Marconi)\n[…]\nComitato Guglielmo Marconi International, Bologna, Italy (Marconi's voice)\n[…]\nMarconi, Guglielmo: Statue north of Meridian Hill Park in Washington. Archived 3 August 2016 at the Wayback Machine, D.C. by Attilio Piccirilli\n[…]\nGuglielmo Marconi, 2000 Italian Lire (1990). Archived 18 April 2009 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista italiano do Renascimento (1452–1519), autor de cadernos com projetos de máquinas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1994, que bilionário americano da informática comprou o Códice Leicester, um caderno de anotações científicas de Leonardo da Vinci?",
    "resposta": "Bill Gates",
    "distratores": [
      "Steve Jobs",
      "Larry Ellison",
      "Paul Allen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Codex_Leicester"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Codex_Leicester",
        "situacao": "ok",
        "texto": "The Codex Leicester (also briefly known as the Codex Hammer) is a collection of scientific writings by Leonardo da Vinci. The codex is named after Thomas Coke, Earl of Leicester, who purchased it in 1719. The codex provides an insight into the mind of the Renaissance artist, scientist and thinker, as well as an exceptional illustration of the link between art and science and the creativity of the \n[…]\nWhen the manuscript was last sold to Bill Gates at Christie's auction house on 11 November 1994 in New York for US$30,802,500 (equivalent to $67 million in 2025), it was the most expensive manuscript ever sold.\n[…]\nLeicester estate (1759–1980)\n[…]\nThe codex was sold to Bill Gates by Christie's auction house on 11 November 1994 in New York for US$30,802,500. Until 2021, the codex remained the most expensive book ever sold.\n[…]\nAfter Gates acquired the codex, he had its pages scanned into digital image files, some of which were later distributed as screensaver and wallpaper files on a CD-ROM as part of a Microsoft Plus! for Windows 95 desktop theme, which would later be included with Windows 98 and Windows ME. A comprehensive CD-ROM version (titled Leonardo da Vinci) was released by Corbis in 1997.\n[…]\nThe codex was then on view at the Minneapolis Institute of Arts in an exhibition Leonardo Da Vinci, the Codex Leicester, and the Creative Mind that opened 21 June 2015, where it remained on display until 30 August 2015. As part of the same tour, the Codex Leicester was also on display at the North Carolina Museum of Art in Raleigh, North Carolina from 31 October 2015 to 17 January 2016.\n[…]\nList of works by Leonardo da Vinci\n[…]\nChristie's Auction House (1980). The Codex Leicester by Leonardo Da Vinci. Christie's.. Sale catalogue, held on Friday 12 December 1980.\n[…]\nLeonardo da Vinci: The Codex Leicester\n[…]\nWater as Microscope of Nature: Leonardo da Vinci's Codex Leicester, exhibition in Florence, Uffizi Galleries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Codex_Leicester",
        "situacao": "ok",
        "texto": "Codex Leicester ou Códice Hammer refere-se a uma compilação de textos e desenhos de Leonardo da Vinci que foram coletados entre 1508 e 1510. Trata-se de uma ampla variedade de tópicos, que incluem estudos de Astronomia, Meteorologia, Hidráulica, Cosmologia, Geologia, Paleontologia e entre outros estudos cientificos e técnicos. Algumas das escrituras apresentam textos autobiográficos e histórias de\n[…]\nO códice foi posteriomente intítulado Conde de Leicester, por Thomas Coke que o havia comprado em 1717. Das 30 publicações científicas de Leonardo, o Codex é considerada a mais famosa de todas.\n[…]\nEste códice havia sido adquirido por Bill Gates (fundador da Microsoft) no montante de 30802500 $, na casa de leilões Christie's, em Nova Iorque, a 11 de novembro de 1994. O documento esteve em exposição durante a EXPO´98, em Lisboa.\n[…]\nO manuscrito, conservado no Museu Britânico de Londres, inclui cadernos com diversos conteúdos, compilados por Leonardo na última fase da sua vida, regressando ao tema da água, tendo expressado mesmo a intenção de abordar o tema num volume a que pensava dar o título de \"Primeiro Livro da Água\".\n[…]\nApresenta-se na forma de 18 folhas duplas ou em 72 páginas no formato de 21,8 x 29,5 centímetros. O seu contéudo expõe uma visão geral acerca deste artísta, cientísta e pensador renascentista. É uma extraordinária representação da relação entre arte e ciência, bem como da criatividade no processo científico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Aristóteles",
      "descricao": "Filósofo e polímata grego (384–322 a.C.), fundador da escola peripatética no Liceu de Atenas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Por volta de 343 antes de Cristo, o rei Filipe da Macedônia chamou Aristóteles para ser professor de que filho, futuro conquistador?",
    "resposta": "Alexandre, o Grande",
    "distratores": [
      "Ptolomeu I",
      "Seleuco I",
      "Cassandro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aristotle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aristotle",
        "situacao": "ok",
        "texto": "Aristotle (Ancient Greek: Ἀριστοτέλης, romanized: Aristotélēs; 384–322 BC) was an ancient Greek philosopher and polymath. His writings span the natural sciences, philosophy, linguistics, economics, politics, psychology, and the arts. As the founder of the Peripatetic school of philosophy in the Lyceum in Athens, he began the wider Aristotelian tradition that followed, which set the groundwork for \n[…]\nShortly after Plato died, Aristotle left Athens and, at the request of Philip II of Macedon, tutored his son Alexander the Great beginning in 343 BC. He established a library in the Lyceum, which helped him to produce many of his hundreds of books on papyrus scrolls.\n[…]\nIn 343/42 BC, Aristotle was invited to Pella by Philip II of Macedon to become the tutor to his thirteen-year-old son Alexander; a choice perhaps influenced by the relationship of Aristotle's family with the Macedonian dynasty. Aristotle taught Alexander at the private school of Mieza, in the gardens of the Nymphs, the royal estate near Pella. Alexander's education probably included a number of subjects, such as ethics and politics, as well as standard literary texts, like Euripides and Homer.\n[…]\nFollowing Alexander's death, anti-Macedonian sentiment in Athens was rekindled. In 322 BC, Demophilus and Eurymedon the Hierophant reportedly denounced Aristotle for impiety, prompting him to flee to his mother's family estate in Chalcis, Euboea, at which occasion he was said to have stated \"I will not allow the Athenians to sin twice against philosophy\" – a reference to Athens's trial and execution of Socrates.\n[…]\nUnder the Ptolemies, the first medical teacher at Alexandria, Herophilus of Chalcedon, corrected Aristotle, placing intelligence in the brain, and connected the nervous system to motion and sensation. Herophilus also distinguished between veins and arteries, noting that the latter pulse while the former do not."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arist%C3%B3teles",
        "situacao": "ok",
        "texto": "Aristóteles (em grego antigo: Ἀριστοτέλης, Aristotélēs; 384–322 a.C.) foi um filósofo e polímata da Grécia Antiga. Seus escritos abrangem as ciências naturais, a filosofia, a linguística, a economia, a política, a psicologia e as artes. Fundou a escola peripatética no Liceu de Atenas, dando início à tradição do aristotelismo, que esteve na origem de parte do desenvolvimento posterior das ciências.\n[…]\nPouco depois da morte de Platão, Aristóteles deixou Atenas e, a pedido de Filipe II da Macedônia, foi tutor de seu filho Alexandre, o Grande a partir de 343 a.C. No Liceu, reuniu uma biblioteca e empreendeu pesquisas em diversas áreas.\n[…]\nEm 343/42 a.C., Aristóteles foi convidado para Pela por Filipe II da Macedônia para se tornar o tutor de seu filho de treze anos Alexandre; uma escolha talvez influenciada pela relação da família de Aristóteles com a dinastia macedónia. Aristóteles ensinou Alexandre na escola particular de Mieza, nos jardins das Ninfas, a propriedade real perto de Pela. A educação de Alexandre provavelmente incluiu temas como ética e política, além de textos literários padrão, como Eurípides e Homero.\n[…]\nSegundo Plutarco, Aristóteles aconselhou Alexandre a tratar os gregos como seu líder e os demais povos como seu senhor. O biógrafo afirma que Alexandre não seguiu esse conselho, que distinguia os gregos dos chamados \"bárbaros\". A distinção expressa uma visão etnocêntrica da época. A educação de Alexandre sob a tutela de Aristóteles provavelmente durou apenas alguns anos, pois por volta dos dezesseis anos ele retornou a Pela e foi nomeado regente da Macedônia por seu pai, Filipe.\n[…]\nEm filmes sobre Alexandre, o Grande, Aristóteles aparece como tutor do futuro rei. Barry Jones interpretou o filósofo em Alexandre Magno (1956), dirigido por Robert Rossen. Em Alexandre (2004), dirigido por Oliver Stone, o papel coube a Christopher Plummer.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Alexander Graham Bell",
      "descricao": "Inventor e cientista nascido na Escócia, a quem se atribui a primeira patente prática do telefone."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "De 1898 a 1903, Graham Bell presidiu que sociedade científica americana, famosa pela revista de moldura amarela na capa?",
    "resposta": "National Geographic Society",
    "distratores": [
      "Instituto Smithsoniano",
      "Sociedade Audubon",
      "Academia de Ciências"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/National_Geographic_Society"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/National_Geographic_Society",
        "situacao": "ok",
        "texto": "The National Geographic Society, headquartered in Washington, D.C., United States, is one of the largest nonprofit scientific and educational organizations in the world.\n[…]\nIn 1899, Bell's son-in-law Gilbert Hovey Grosvenor was named the first full-time editor of National Geographic magazine and eventually elected as the president of the society in 1920. Grosvenor resigned as editor and president in 1954 and served as chairman of the organization's board until his death in 1966. Members of the Grosvenor family have played important roles in the organization since.\n[…]\nThe National Geographic Society also awards, rarely, the Alexander Graham Bell Medal, for exceptional contributions to geographic research. The award is named after Alexander Graham Bell, scientist, inventor of the telephone and the second president of the NGS. Up to mid-2011, the medal has been twice presented:\n[…]\nNational Geographic Films appointed Adam Leipzig as president in 2004. The society formed in October 2007 National Geographic Entertainment division to include Cinema Ventures and Feature Films. In 2008, the film division and Image Nation formed a $100 million fund to develop, produce, finance and acquire over five years 10–15 films. The first film the fund invested in was The Way Back.\n[…]\nThe society formed in October 2007 National Geographic Entertainment division to include the Music & Radio division and promoted the division president David Beal was appointed head of Nat Geo Entertainment. In 2009, the division became a full-service record label as Nat Geo Music with Mat Whittington appointed as president.\n[…]\nWorks by National Geographic Society at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/National_Geographic_Society",
        "situacao": "ok",
        "texto": "A National Geographic Society (em português Sociedade Geográfica Nacional) foi fundada nos Estados Unidos em 27 de janeiro de 1888 por 33 homens interessados em \"organizar uma sociedade para o incremento e a difusão do conhecimento geográfico\". Começaram a discutir a formação da sociedade duas semanas antes, em 13 de janeiro de 1888. Gardnier Greene Hubbard se converteu no primeiro presidente, e s\n[…]\nA The National Geographic Magazine, mais tarde reduzida a National Geographic, foi publicada pela primeira vez nove meses depois da fundação da sociedade. Se tem convertido em uma das revistas mais conhecidas ao redor do mundo e é facilmente reconhecida por sua característica moldura amarela.\n[…]\nA revista National Geographic é publicada atualmente em 32 idiomas em muitos países ao redor do mundo.\n[…]\nThe National Geographic School Bulletin é uma revista similar a National Geographic, porém orientada aos jovens em idade escolar. Foi publicada durante o ano letivo desde 1919 até 1975, quando foi substituída pela National Geographic World. Em 1984 a sociedade criou a \"National Geographic Traveler\", que foi seguida en 1999 pela \"National Geographic Adventure Magazine\" e em 2001 pela \"National Geographic for Kids\".\n[…]\nA National Geographic Society também tem explorado o uso da televisão como um meio para levar as viagens de seus correspondentes e seus programas de interesses educacionais, culturais e científicos até aos lares das pessoas. Os programas especiais da National Geographic se têm transmitido durante muitos anos nos Estados Unidos pela PBS, a televisão aberta. Os programas televisivos começaram em 1964 na CBS, para mudar para ABC em 1973 e finalmente para a PBS (1975).\n[…]\nEm setembro de 1997, a sociedade lançou seu próprio canal televisivo, o National Geographic Channel que se pode ver por via cabo ou via satélite.\n[…]\nNational Geographic (revista)\n[…]\nNational Geographic Society",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Gustave Eiffel",
      "descricao": "Engenheiro francês, 1832-1923, cuja empresa construiu a torre de ferro do Campo de Marte, em Paris."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Anos antes de erguer sua torre em Paris, o engenheiro Gustave Eiffel projetou a estrutura interna de ferro de que monumento famoso?",
    "resposta": "Estátua da Liberdade",
    "distratores": [
      "Cristo Redentor",
      "Arco do Triunfo",
      "Big Ben"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty",
      "https://en.wikipedia.org/wiki/Gustave_Eiffel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World, French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman located on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built b\n[…]\nThe head and arm had been built with assistance from Viollet-le-Duc, who fell ill in 1879. He soon died, leaving no indication of how he intended to transition from the copper skin to his proposed masonry pier. The following year, Bartholdi was able to obtain the services of the innovative designer and builder Gustave Eiffel. Eiffel and his structural engineer, Maurice Koechlin, decided to abandon the pier and instead build an iron truss tower.\n[…]\nThe statue remained intact in Paris pending sufficient progress on the pedestal; by January 1885, this had occurred and the statue was disassembled and crated for its ocean voyage.\n[…]\nNorwegian immigrant civil engineer Joachim Goschen Giæver designed the structural framework for the Statue of Liberty. His work involved design computations, detailed fabrication and construction drawings, and oversight of construction. In completing his engineering for the statue's frame, Giæver worked from drawings and sketches produced by Gustave Eiffel.\n[…]\nThe entire puddled iron armature designed by Gustave Eiffel was replaced. Low-carbon corrosion-resistant stainless steel bars that now hold the staples next to the skin are made of Ferralium, an alloy that bends slightly and returns to its original shape as the statue moves. To prevent the ray and arm making contact, the ray was realigned by several degrees.\n[…]\nPlace des États-Unis, in Paris, France\n[…]\nStatue of Liberty National Monument\n[…]\nMade in Paris The Statue of Liberty 1877–1885 – many historical photographs"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gustave_Eiffel",
        "situacao": "ok",
        "texto": "Alexandre Gustave Eiffel (  EYE-fəl; French: [alɛksɑ̃dʁ ɡystav ɛfɛl]; né Bonickhausen dit Eiffel; 15 December 1832 – 27 December 1923) was a French civil engineer. A graduate of École Centrale des Arts et Métiers, he made his name with various bridges for the French railway network, most famously the Garabit Viaduct.\n[…]\nAlexandre Gustave Eiffel was born in France, in the Côte-d'Or, the first child of Catherine-Mélanie (née Moneuse) and Alexandre Bonickhausen dit Eiffel. He was a descendant of Jean-René Bönickhausen, who had emigrated from the German town of Marmagen and settled in Paris at the beginning of the 18th century. The family adopted the name Eiffel as a reference to the Eifel mountains in the region from which they had come.\n[…]\nPont de Ferro or Pont Eiffel in Girona (1876)\n[…]\nA number of works of Gustave Eiffel are in danger today. Some have already been destroyed, like in Vietnam.\n[…]\nA proposal to demolish the railway bridge of Bordeaux (also known as the \"passerelle St Jean\"), the first major work of Gustave Eiffel, resulted in a large response from the public. Actions to protect the bridge were taken as early as 2002 by the \"Association of the Descendants of Gustave Eiffel\", joined from 2005 onwards by the Association \"Sauvons la Passerelle Eiffel\" (Save the Eiffel Bridge). They led, in 2010, to the decision to list Eiffel's Bordeaux bridge as a French Historical Monument.\n[…]\nLoyrette, Henri (1985). Gustave Eiffel. New York: Rizzoli. ISBN 0-8478-0631-6.\n[…]\nOfficial website of the Association of the Descendants of Gustave Eiffel (in English)\n[…]\nGustave Eiffel: The Man Behind the Masterpiece Archived 6 July 2007 at the Wayback Machine\n[…]\nGustave Alexandre Eiffel at Structurae\n[…]\nNewspaper clippings about Gustave Eiffel in the 20th Century Press Archives of the ZBW\n[…]\nWorks by Gustave Eiffel at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nAo retornar do Egito, Bartholdi visitou uma escultura de Giovanni Battista Crespi de 23 metros de altura, em cobre repuxado, cobrindo uma armadura de ferro no Lago Maior, na Itália, e estava familiarizado com a construção semelhante do monumento de Vercingétorix, de Aimé Millet; a restauração da estátua de Millet um século depois chamou a atenção internacional para o péssimo estado da Estátua da Liberdade.\n[…]\nAo retornar do Egito, Bartholdi visitou uma escultura de Giovanni Battista Crespi de 23 metros de altura, em cobre repuxado, cobrindo uma armadura de ferro no Lago Maior, na Itália, e estava familiarizado com a construção semelhante do monumento de Vercingétorix, de Aimé Millet; a restauração da estátua de Millet um século depois chamou a atenção internacional para o péssimo estado da Estátua da Liberdade.\n[…]\nO engenheiro civil imigrante norueguês Joachim Goschen Giæver projetou a estrutura da Estátua da Liberdade. Seu trabalho envolvia cálculos de projeto, desenhos detalhados de fabricação e construção, e supervisão da construção. Ao concluir sua engenharia para a estrutura da estátua, Giæver trabalhou a partir de desenhos e esboços produzidos por Gustave Eiffel.\n[…]\nA nível subnacional, o Monumento Nacional da Estátua da Liberdade foi adicionado ao Registro de Lugares Históricos de Nova Jersey em 1971 e foi designado um marco da cidade de Nova Iorque em 1976.\n[…]\nLista de estátuas por altura\n[…]\nLista de estátuas por altura\n[…]\n«Informações sobre a Estátua da Liberdade» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pilha de Volta",
      "descricao": "Primeira bateria elétrica, formada por discos de metais diferentes empilhados, criada por Alessandro Volta em 1800."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1800, Alessandro Volta criou a pilha elétrica numa disputa com outro italiano, que atribuía a eletricidade aos músculos das rãs. Quem?",
    "resposta": "Luigi Galvani",
    "distratores": [
      "Evangelista Torricelli",
      "Amedeo Avogadro",
      "Galileu Galilei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Voltaic_pile"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voltaic_pile",
        "situacao": "ok",
        "texto": "The voltaic pile was the first electrical battery that could continuously provide an electric current to a circuit. It was invented by Italian chemist Alessandro Volta, who published his experiments in 1799. Its invention can be traced back to an argument between Volta and Luigi Galvani, Volta's fellow Italian scientist who had conducted experiments on frogs' legs.\n[…]\nVolta's invention was built on Luigi Galvani's 1780s discovery that a circuit of two metals and a frog's leg can cause the frog's leg to respond. Volta demonstrated in 1794 that when two metals and brine-soaked cloth or cardboard are arranged in a circuit they too produce an electric current. In 1800, Volta stacked several pairs of alternating copper (or silver) and zinc discs (electrodes) separated by cloth or cardboard soaked in brine, which increased the total electromotive force.\n[…]\nOn 20 March 1800, Alessandro Volta wrote to the London Royal Society to describe the technique for producing electric current using his device. On learning of the voltaic pile, William Nicholson and Anthony Carlisle used it to discover the electrolysis of water. Humphry Davy showed that the electromotive force, which drives the electric current through a circuit containing a single voltaic cell, was caused by a chemical reaction, not by the voltage difference between the two metals.\n[…]\nA number of high-voltage dry piles were invented between 1800 and the 1830s in an attempt to determine the source of electricity of the wet voltaic pile, and specifically to support Volta's hypothesis of contact tension. Indeed, Volta himself experimented with a pile whose cardboard discs had dried out, most likely accidentally.\n[…]\n\"The Voltaic Pile Archived 2023-10-12 at the Wayback Machine\". Electricity. Kenyon.edu.\n[…]\nLewis, Nancy D., \"Alesandro Volta The Voltaic Pile Archived 2008-08-28 at the Wayback Machine\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pilha_de_Volta",
        "situacao": "ok",
        "texto": "A Pilha de Volta, ou pilha voltaica, foi a primeira bateria que podia continuamente prover uma corrente elétrica a um circuito. Foi inventada por Alessandro Volta, que publicou seus experimentos em 1799.\n[…]\nA partir de então, a pilha voltaica foi seguida por uma série de outras descobertas, incluindo a decomposição elétrica (eletrólise) da água em oxigênio e hidrogênio por William Nicholson e Antony Carlisle (1800) e a descoberta da isolação dos elementos químicos sódio (1807), potássio, (1807), cálcio (1808), boro (1808), bário (1808), estrôncio (1808) e magnésio (1808) por Humphry Davy.Assim a pilha de Volta foi o primeiro gerador estático de energia elétrica a ser criado.\n[…]\nPor volta de 1750, o anatomista italiano Luigi Galvani (1717-1808), realizando experiências de anatomia com sapos, concluiu que a corrente elétrica tinha origem nos músculos animais.\n[…]\nAlessandro Volta partiu de um pressuposto diferente do de Galvani: o de que a eletricidade tinha origem nos metais. Como físico, Volta tentava provar que só existia um tipo de eletricidade, aquela estudada pelos físicos. Por isso, trocou os tecidos de organismos vivos por ferro, cobre e tecido molhado. Variando os metais usados, rapidamente se convenceu de que seu raciocínio fazia sentido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Sistema binário",
      "descricao": "Sistema de numeração de base dois, com apenas os algarismos zero e um, estudado por Leibniz e usado nos computadores."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "No fim do século dezessete, Leibniz viu no sistema binário, de zeros e uns, um paralelo com os hexagramas de que antigo livro chinês?",
    "resposta": "I Ching",
    "distratores": [
      "Tao Te Ching",
      "A Arte da Guerra",
      "Os Analectos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Binary_number"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Binary_number",
        "situacao": "ok",
        "texto": "A binary number is a number expressed in the base-2 numeral system or binary numeral system, a method for representing numbers that uses only two symbols for the natural numbers: typically 0 (zero) and 1 (one). A binary number may also refer to a rational number that has a finite representation in the binary numeral system, that is, the quotient of an integer by a power of two.\n[…]\nSets of binary combinations similar to the I Ching have also been used in traditional African divination systems, such as Ifá among others, as well as in medieval Western geomancy. The majority of Indigenous Australian languages use a base-2 system.\n[…]\nThe full title of Leibniz's article is translated into English as the \"Explanation of Binary Arithmetic, which uses only the characters 1 and 0, with some remarks on its usefulness, and on the light it throws on the ancient Chinese figures of Fu Xi\". Leibniz's system uses 0 and 1, like the modern binary numeral system. An example of Leibniz's binary numeral system is as follows:\n[…]\nWhile corresponding with the Jesuit priest Joachim Bouvet in 1700, who had made himself an expert on the I Ching while a missionary in China, Leibniz explained his binary notation, and Bouvet demonstrated in his 1701 letters that the I Ching was an independent, parallel invention of binary notation.\n[…]\nLeibniz was first introduced to the I Ching through his contact with the French Jesuit Joachim Bouvet, who visited China in 1685 as a missionary. Leibniz saw the I Ching hexagrams as an affirmation of the universality of his own religious beliefs as a Christian. Binary numerals were central to Leibniz's theology. He believed that binary numbers were symbolic of the Christian idea of creatio ex nihilo or creation out of nothing.\n[…]\nBinary numerals that neither terminate nor recur represent irrational numbers. For instance,"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio",
        "situacao": "ok",
        "texto": "O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um (0 e 1).\n[…]\nO sistema numérico binário moderno foi estudado na Europa nos séculos 16 e 17 por Thomas Harriot, Juan Caramuel Lobkowitz e Gottfried Leibniz. No entanto, sistemas envolvendo números binários já apareceram em várias culturas, incluindo o antigo Egito, China e Índia. Leibniz foi especificamente inspirado pelo I Ching chinês.\n[…]\nNa China antiga, no texto clássico do I Ching, uma série completa de 8 trigramas e 64 hexagramas (análogo a 3 bits) e números binários de 6 bits.\n[…]\nO estudioso e filósofo chinês Shao Yong no século XI desenvolveu um arranjo binário ordenado dos hexagramas do I Ching, representando a sequência decimal de 0 a 63, e um método para gerá-lo.\n[…]\nO antigo matemático Indiano Pingala desenvolveu um sistema binário para descrever a prosódia. Ele usava números binários na forma de sílabas curtas e longas (esta última igual a duas sílabas curtas), tornando-o semelhante ao código Morse. Eles eram conhecidos como sílabas laghu (leve) e guru (pesado).\n[…]\nEm 1670 Juan Caramuel publicou seu livro Mathesis Biceps; e nas páginas XLV a XLVIII ele deu uma descrição do sistema binário.\n[…]\nO sistema binário moderno foi totalmente documentado por Leibniz, no século XVIII, em seu artigo \"Explication de l'Arithmétique Binaire\". Ele menciona os símbolos binários usados pelos matemáticos chineses. Leibniz utilizou um sistema matemático de duas variáveis — 0/1 — para transformar termos linguísticos e, dessa forma, distribuir informações, assim como o sistema binário atual.\n[…]\nPrefixos binários",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Penny Black",
      "descricao": "Primeiro selo postal adesivo do mundo, emitido no Reino Unido em 1840 com o perfil da rainha Vitória."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que reformador britânico propôs o selo adesivo pago pelo remetente, o que levou à criação do Penny Black, em 1840?",
    "resposta": "Rowland Hill",
    "distratores": [
      "Robert Peel",
      "Charles Babbage",
      "Isambard Brunel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Penny_Black"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penny_Black",
        "situacao": "ok",
        "texto": "The Penny Black was the world's first adhesive postage stamp used in a public postal system. It was first issued in the United Kingdom on 1 May 1840 but was not valid for use until 6 May. The stamp features a profile of 21-year-old Queen Victoria.\n[…]\nIn 1837, British postal rates were high, complex, and anomalous. To simplify matters, Sir Rowland Hill proposed an adhesive stamp to indicate pre-payment of postage. At the time it was normal for the recipient to pay postage on delivery, charged by the sheet and on distance travelled. By contrast, the Penny Black allowed letters of up to 1⁄2 ounce (14 grams) to be delivered at a flat rate of one penny, regardless of distance.\n[…]\nOn 13 February 1837, Sir Rowland Hill proposed to a government enquiry both the idea of a pre-paid stamp and a pre-paid envelope, a separate sheet folded to form an enclosure for carrying letters. Hill was given a two-year contract to run the new system, and together with Henry Cole he announced a competition to design the stamps.\n[…]\nInitially, Hill specified that the stamps should be 3/4 inch square but altered the dimensions to 3/4 inch wide by 7/8 inch tall (approx 19 x 22 mm) to accommodate the writing at the bottom. The word \"POSTAGE\" at the top of the design distinguishes it from a revenue stamp which had long been used in the UK; \"ONE PENNY.\" at the bottom shows the amount pre-paid for postage of the stamped letter.\n[…]\nUniform Penny Post\n[…]\nMuller, Charli (2024). \"The Capitalist and Colonial Logics of Rowland Hill's Postal Reforms: Terra Nullius, Uniform Pricing, and 'Conveyance at the Lowest Rate'\". Monde(s). 26 (2): 51–73. doi:10.3917/mond1.226.0051.\n[…]\nThe 1840 Penny Black at the American National Postal Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/One_Penny_Black",
        "situacao": "ok",
        "texto": "O one penny black (um pêni preto) foi o primeiro selo postal do mundo. Começou a circular em Inglaterra a 6 de Maio de 1840. A ideia do selo postal para indicar pré-pagamento do correio foi de Sir Rowland Hill, incluída nas suas propostas de 1837 para a reforma do sistema postal Britânico. Era normal na época o destinatário pagar a postagem no recebimento da correspondência.\n[…]\nNo ano seguinte seria substituído pelo one penny red, pois a sua cor negra não permitia que os carimbos fossem visíveis e portanto era possível reutilizar os selos.\n[…]\nSistemas de entregas postais que utilizavam o que poderia ser selo adesivo existiam antes do Penny Black. Aparentemente a ideia teria já sido sugerida na Áustria, Suécia, e possivelmente Grécia.\n[…]\nInicialmente, os \"penny black\" tinham 3/4 de polegadas quadradas, mas foram modificados para as dimensões de 3/4 polegadas de largura por 7/8 polegadas de altura (algo aproximado de 19 x 22 mm) para acomodar a palavra \"POSTAGE\" no topo do desenho e \"ONE PENNY\" (um centavo) na parte inferior. Em primeiro plano, a imagem do perfil da Rainha Vitória em fundo negro.\n[…]\nO One Penny Black não é um selo raro. Foram impressas 286 700 folhas, totalizando 68 808 000 selos e uma considerável quantidade desses selos sobreviveu ao tempo, principalmente porque envelopes não eram usados com frequência. As cartas eram escritas diretamente em papéis de carta emitidos pela autoridade postal, que eram dobrados e selados. Então, se a carta era guardada, o selo sobrevivia.\n[…]\nA única folha completa de selos Penny Black conhecida pertence ao The British Postal Museum and Archive.\n[…]\ntwo penny blue",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Fax",
      "descricao": "Sistema de transmissão de documentos e imagens por linha telefônica ou fio, também chamado fac-símile."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1843, que relojoeiro escocês patenteou um telégrafo capaz de copiar imagens à distância, ancestral do fax?",
    "resposta": "Alexander Bain",
    "distratores": [
      "James Clerk Maxwell",
      "John Logie Baird",
      "Graham Bell"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fax"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax (short for facsimile), sometimes called telecopying or telefax (short for telefacsimile), is the telephonic transmission of scanned printed material (both text and images), normally to a telephone number connected to a printer or other output device.\n[…]\nScottish inventor Alexander Bain worked on chemical-mechanical fax-type devices and in 1846 Bain was able to reproduce graphic signs in laboratory experiments. He received British patent 9745 on May 27, 1843, for his \"Electric Printing Telegraph\". Frederick Bakewell made several improvements on Bain's design and demonstrated a telefax machine. The Pantelegraph was invented by the Italian physicist Giovanni Caselli.\n[…]\nIn 1964, Xerox Corporation introduced (and patented) what many consider to be the first commercialized version of the modern fax machine, under the name (LDX) or Long Distance Xerography. This model was superseded two years later with a unit that would set the standard for fax machines for years to come. Up until this point facsimile machines were very expensive and hard to operate. In 1966, Xerox released the Magnafax Telecopiers, a smaller, 46 lb (21 kg) facsimile machine.\n[…]\nBy the late 1970s, many companies around the world (especially Japanese firms) had entered the fax market, and prices for long-distance faxing in 1978 were significantly lower than they had been in 1968, both at high and low speeds. Faxes had become useful to large newspapers and multinational corporations, and some digital methods were being developed. However, the rise of the market was fairly slow.\n[…]\n\"Transmitting Photographs by Telegraph\", Scientific American article, 12 May 1877, p. 297"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fax",
        "situacao": "ok",
        "texto": "Fax, faxe, telefax (abreviaturas do termo latino facsimile e telefacsimile) ou telecópia é uma tecnologia das telecomunicações usada para a transferência remota de documentos através da rede telefônica.\n[…]\nA ideia de transmitir e reproduzir documentos à longa distância foi patenteada por Alexander Bain, em 1843. Da união da ideia de Bain com aparelho telefônico criado por Alexander Graham Bell, o primeiro protótipo do fac-símile, mais conhecido como fax, foi criado nos Laboratórios Bell, em 1926.\n[…]\nEm 1947, Gabriel Casotti, especialista em telegrafia sem fio, produziu o primeiro aparelho de fax, com a ajuda da agência de notícias Associated Newspapers.\n[…]\nO grande sucesso do fax deve-se principalmente à sua grande vantagem sobre os correios quando a comunicação é à longa distância, uma vez que a transferência de documentos daquele é quase instantânea.Com a popularização da Internet nos anos 2000, surge um novo serviço no meio das telecomunicações: o fax pela internet, também chamado de Internet Fax, ou ainda, Fax to Mail.\n[…]\nO serviço funcionava através de um servidor de fax, um software que permite o envio de fax a partir do computador via conexão na Internet. Com a popularização dos scanners, no entanto, o Internet Fax foi perdendo sua utilidade, já que aqueles permitem a digitalização das imagens e o envio por e-mail em conexões banda larga, muito mais rápidas e confiáveis que a conexão discada dos faxes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Paraquedas",
      "descricao": "Dispositivo que freia a descida de um objeto ou pessoa pela atmosfera, aqui sustentando uma cápsula espacial."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1797, que francês saltou de um balão sobre Paris usando um paraquedas de seda, sem armação rígida, criado por ele mesmo?",
    "resposta": "André-Jacques Garnerin",
    "distratores": [
      "Jacques Charles",
      "Louis Blériot",
      "Joseph Montgolfier"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andr%C3%A9-Jacques_Garnerin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andr%C3%A9-Jacques_Garnerin",
        "situacao": "ok",
        "texto": "André-Jacques Garnerin (French: [ɑ̃dʁeʒak ɡaʁn(ə)ʁɛ̃]; 31 January 1769 – 18 August 1823) was a French balloonist and the inventor of the frameless parachute. He was appointed Official Aeronaut of France.\n[…]\nAndré-Jacques Garnerin was born in Paris. During the first phase of the French Revolutionary Wars (1792–1797), he was captured by British troops. Subsequently, he was turned over to the Austrians and held as a prisoner of war in Buda, Hungary, for three years.\n[…]\nAndré-Jacques Garnerin was a student of the ballooning pioneer Professor Jacques Charles. Garnerin was heavily involved in the flight of hydrogen balloons, and worked with his older brother, Jean-Baptiste-Olivier Garnerin (1766–1849) in most of his ballooning activities. His significant contributions to ballooning and his expertise led to his appointment as the Official Aeronaut of France.\n[…]\nGarnerin went on to stage regular tests and demonstration of his parachute at Parc Monceau, Paris. On 22 October 1797, his parachute descent became a cause célèbre, particularly when he announced in 1798 that his next flight would include a woman as a passenger. Although the public and press were in favour, Garnerin was forced to justify his project before the officials of the Central Bureau of Police.\n[…]\nUpon the collapse of The Peace of Amiens, Garnerin returned to France where, on 3–4 October 1803, he covered a distance of 245 miles (395 km) between Paris and Clausen, Germany.\n[…]\n\"World's First Parachute Jump made in 1797\". George Galloway essay on Andre-Jacques Garnerin Archived 14 February 2004 at the Wayback Machine\n[…]\nM F Wright – profile of Andre Garnerin\n[…]\nAdditional information on Garnerin\n[…]\nAndré-Jacques Garnerin biography and picture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andr%C3%A9-Jacques_Garnerin",
        "situacao": "ok",
        "texto": "André-Jacques Garnerin (Paris, 31 de janeiro de 1769 - Paris, 18 de agosto de 1823), foi um engenheiro francês, inventor do paraquedas.\n[…]\nApós ser solto, Garnerin toma contacto com os voos de balão. Efectua o primeiro salto de paraquedas com um feito de seda, em 22 de Outubro de 1797, saltando sobre o parque de Monceau, em Paris. Depois de uma descida de 1 000 m, aterra junto de uma imensa multidão que assistia ao seu feito. Em 1803, entre o dia 3 e 4 de Outubro, Garnerin faz um voo de balão, entre Paris e Clausen, percorrendo cerca de 395 km.\n[…]\nA sua esposa, Jeanne-Geneviève, que acompanhou Garnerin em muitos dos seus saltos, tornou-se a primeira mulher a saltar de paraquedas. Garnerin morre em Paris, a 18 de Agosto de 1823, enquanto construía um balão.\n[…]\nMichel Poniatowski, Garnerin : le premier parachutiste de l'histoire, Albin Michel, Paris, 1983.\n[…]\n(em turco) André-Jacques Garnerin biography and picture",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Armônica de vidro",
      "descricao": "Instrumento musical de taças de vidro giratórias, tocadas com os dedos molhados, inventado por Benjamin Franklin em 1761."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Mozart e Beethoven compuseram para um instrumento de taças de vidro giratórias, tocadas com os dedos molhados. Que americano o inventou?",
    "resposta": "Benjamin Franklin",
    "distratores": [
      "Thomas Jefferson",
      "Thomas Edison",
      "Samuel Morse"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Glass_harmonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Glass_harmonica",
        "situacao": "ok",
        "texto": "The glass harmonica, also known as the glass armonica, glass harmonium, bowl organ, hydrocrystalophone, or simply the armonica or harmonica is a type of musical instrument that uses a series of glass bowls or goblets graduated in size to produce musical tones by means of friction (instruments of this type are known as friction idiophones). It was invented in 1761 by Benjamin Franklin and produces \n[…]\nWhen Benjamin Franklin invented his mechanical version of the instrument in 1761, he called it the armonica, based on the Italian word armonia, which means \"harmony\".\n[…]\nIn 1975, an original armonica was acquired by the Bakken Museum in Minneapolis and put on display, albeit without its original glass bowls (they were destroyed during shipment). It was purchased through a musical instrument dealer in France, from the descendants of Mme. Brillon de Jouy, a neighbor of Benjamin Franklin's from 1777 to 1785, when he lived in the Paris suburb of Passy. Some 18th- and 19th-century specimens of the armonica have survived into the 21st century.\n[…]\nI can still recall being mesmerized by the appearance of the original Benjamin Franklin harmonica then on display in its own showcase in the entry rotunda of the city's famed science museum.\" When Ronstadt joined Dolly Parton and Emmylou Harris to make the 1999 album Trio II, Dennis James played the glass harmonica in their cover of \"After the Gold Rush\".\n[…]\nJames Horner used a glass harmonica and pan flute for Spock's theme in the 1982 film Star Trek II: The Wrath of Khan. On February 23, 2007, the armonica was used by nu-metal band Korn while filming their session with MTV Unplugged. It was stated that it was of Benjamin Franklin's design. It was also used for the score of the 2026 feature film Project Hail Mary.\n[…]\nInstruction books\n[…]\nFranklin, J. E. Introduction to the Knowledge of the Seraphim or Musical Glasses.\n[…]\nBenjamin Franklin and his Glass Armonica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harm%C3%B3nica_de_vidro",
        "situacao": "ok",
        "texto": "A harmónica de vidro (em Portugal), harmônica de vidro (no Brasil) ou ainda Glass harmonica (nome nativo no EUA) é um instrumento musical, mais precisamente um idiofone friccionado.\n[…]\nA harmónica de vidro é constituída por um conjunto de taças de vidro semi-esféricas, de vários tamanhos, parcialmente inseridas uma dentro da outra por ordem de tamanho, de modo a fazer uma escala diatónica. Essas taças estão montadas num eixo que atravessa o centro dessas mesmas taças, e encontram-se semi-imersas num recipiente com água. Um sistema de pedal aciona o eixo de modo a que as taças girem no eixo.\n[…]\nO instrumento é tocado friccionando os dedos em cada uma das taças umedecidas, uma para cada nota.\n[…]\nO desenvolvimento da harmónica de vidro deveu-se sobretudo ao trabalho de Benjamin Franklin em 1761. A ideia surgiu a partir do copofone, que é um conjunto de copos de cristal que é tocado friccionando os bordos com os dedos ligeiramente umedecidos.\n[…]\nAlguns espécimes de Glass harmônica do século XVIII e XIX sobreviveram até hoje. Franz Anton Mesmer foi um dos interpretes mais famosos a tocá-la e a usou como parte integrante no trato com sua doutrina mesmérica.\n[…]\nWolfgang Amadeus Mozart compôs, em  1791, duas peças pouco conhecidas para o instrumento: um Adagio em dó Maior (K. 356) e um Adagio e Rondo (K. 617).\n[…]\nsuper.abril.com.br/ 8 instrumentos musicais que talvez você não conheça",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Disco de Ouro da Voyager",
      "descricao": "Disco fonográfico banhado a ouro, com sons, imagens e músicas da Terra, levado pelas sondas Voyager 1 e 2."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que astrônomo americano, famoso pela série Cosmos, de 1980, chefiou o comitê que escolheu o conteúdo do Disco de Ouro das sondas Voyager?",
    "resposta": "Carl Sagan",
    "distratores": [
      "Edwin Hubble",
      "Stephen Hawking",
      "Isaac Asimov"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Voyager_Golden_Record"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Voyager_Golden_Record",
        "situacao": "ok",
        "texto": "The Voyager Golden Records are two identical phonograph records, with one copy aboard each of the two Voyager spacecraft launched in 1977. The records contain sounds and data to reconstruct raster scan images selected to portray the diversity of life and culture on Earth, and are intended for any intelligent extraterrestrial life form who may find them. The records are a time capsule.\n[…]\nCarl Sagan noted that \"The spacecraft will be encountered and the record played only if there are advanced space-faring civilizations in interstellar space, but the launching of this 'bottle' into the cosmic 'ocean' says something very hopeful about life on this planet.\"\n[…]\nThe contents of the record were selected for NASA by a committee chaired by Carl Sagan of Cornell University. The selection of content for the record took almost a year. Sagan and his associates assembled 116 images (one used for calibration) and a variety of natural sounds, such as those made by surf, wind, thunder and animals (including the songs of birds and whales).\n[…]\nThe selection of music for the record was completed by a team composed of Carl Sagan as project director, Linda Salzman, Frank Drake, Ann Druyan as creative director, artist Jon Lomberg, ethnomusicologists Robert E. Brown and Alan Lomax, Timothy Ferris as producer, and Jimmy Iovine as sound engineer. The inclusion of Berry's \"Johnny B.\n[…]\nMost of the images used on the record (reproduced in black and white), together with information about its compilation, can be found in the 1978 book Murmurs of Earth: The Voyager Interstellar Record by Carl Sagan, F. D. Drake, Ann Druyan, Timothy Ferris, Jon Lomberg, and Linda Salzman. A CD-ROM version was issued by Warner New Media in 1992. Author Ann Druyan, who later married Carl Sagan, wrote about the Voyager Record in the epilogue of Sagan's final book Billions and Billions (1997)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Voyager_Golden_Record",
        "situacao": "ok",
        "texto": "Os Discos de Ouro da Voyager (em inglês, Voyager Golden Record) são discos fonográficos que estão a bordo de ambas as naves Voyager. Eles contêm sons e imagens selecionados como amostra da diversidade de vida e culturas da Terra e são dirigidos a qualquer forma de vida extraterrestre (ou seres humanos do futuro distante) que os encontrem.\n[…]\nO conteúdo dos discos foi selecionado por um comitê da NASA chefiado por Carl Sagan, da Universidade Cornell. Sagan e seus colegas reuniram 115 imagens e vários sons naturais, como o registro sonoro de trovões, vento, ondas do mar, e cantos de pássaros e baleias. Além disso, foi incluída uma coletânea musical com obras de diferentes épocas e culturas.\n[…]\nApós ter recebido críticas sobre a nudez das figuras humanas na Placa Pioneer, a NASA impediu que Sagan e sua equipe incluíssem entre as fotografias uma imagem com um homem e uma mulher nus. Em vez disso, apenas a silhueta de um casal foi gravada. As 115 imagens foram gravadas em forma analógica. A maioria do disco — projetado para ser tocado em 16⅔ RPM — foi usada para gravação de áudio.\n[…]\nSagan também queria incluir Here Comes the Sun, dos Beatles. Embora os Beatles tenham concordado, a gravadora EMI não deu sua autorização e a música não entrou na coletânea.\n[…]\nAbaixo, uma lista de todas as imagens contidas no Disco de Ouro Voyager, juntamente, conforme as licenças de direitos autorais, com a imagem atual, uma descrição da natureza da imagem e quais anotações foram incluídas neles.\n[…]\nO disco é feito de uma placa de cobre banhada a ouro. Uma amostra ultra pura do isótopo urânio-238 foi galvanizada na capa do disco. Como o urânio-238 tem uma meia vida de 4.5 bilhões de anos, a civilização que encontrar a Voyager poderá calcular a idade do disco.\n[…]\n«Site multimídia com todas as informações do disco.»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Alberto Santos-Dumont",
      "descricao": "Aviador e inventor brasileiro (1873–1932), pioneiro dos dirigíveis e criador do 14-bis."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1901, Santos-Dumont ganhou um prêmio ao sair de Saint-Cloud num dirigível, contornar um monumento de Paris e voltar em menos de meia hora. Que monumento?",
    "resposta": "Torre Eiffel",
    "distratores": [
      "Arco do Triunfo",
      "Catedral de Notre-Dame",
      "Panteão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Deutsch_de_la_Meurthe_prize",
      "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deutsch_de_la_Meurthe_prize",
        "situacao": "ok",
        "texto": "Henri Deutsch de la Meurthe (French: [ɑ̃ʁi døtsʃ də la mœʁt]; 25 September 1846 – 24 November 1919), born Salomon Henry Deutsch, was a successful French petroleum businessman (known as the \"Oil King of Europe\"), and a supporter of early aviation. He sponsored a number of prizes to encourage the development of aviation technologies, including the Grand Prix d'Aviation and the Deutsch de la Meurthe \n[…]\nIn April 1900, Henri offered the Deutsch de la Meurthe prize, also simply known as the Deutsch prize, of 100,000 francs to the first machine capable of flying a round trip from the Parc Saint Cloud to the Eiffel Tower in Paris and back in less than 30 minutes. The winner of the prize needed to maintain an average ground speed of at least 22 km/h (14 mph) to cover the round trip distance of 11 km (6.8 mi) in the allotted time. The prize was to be available from May 1, 1900, to October 1, 1903.\n[…]\nTo win the prize, Alberto Santos-Dumont decided to build the Santos-Dumont No. 5, a  larger airship than his earlier craft. On August 8, 1901, during one of his attempts, the dirigible began to lose hydrogen gas. It started to descend and was unable to clear the roof of the Trocadero Hotel. Santos-Dumont was left hanging in a basket from the side of the hotel. With the help of the Paris fire brigade, he climbed to the roof without injury.\n[…]\nOn October 19, 1901, after several attempts and trials, Santos-Dumont launched his Number 6 airship at 2:30 pm. After only nine minutes of flight, Santos-Dumont had rounded the Eiffel Tower, but then suffered an engine failure. To restart the engine, he had to climb back over the gondola rail without a safety harness. The attempt was successful, and he crossed the finish line in 29 minutes 30 seconds."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alberto_Santos-Dumont",
        "situacao": "ok",
        "texto": "Alberto Santos-Dumont (self-stylised as Alberto Santos=Dumont; 20 July 1873 – 23 July 1932) was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Pari\n[…]\nAt 3:30 pm on 13 November Santos-Dumont took off in No. 3 from Vaugirard Aerostation Park and went around the Eiffel Tower for the first time. From the monument he went to the Parc des Princes then to the Bagatelle Gamefield in the Bois de Boulogne (near the Hippodrome of Longchamp). He landed at the exact spot where No. 1 had crashed, this time under control.\n[…]\nDesirous of contributing to the solution of the problem of air travel, I undertake to place at the disposal of the Air Club a sum of 100,000 francs, constituting a prize, under the title of the Air Club Prize, to the aeronaut who, leaving the park of Saint Cloud, Longchamps, or any other point situated at an equal distance from the Eiffel Tower, reaches this monument in half an hour, and, surrounding it, returns to the point of departure.\n[…]\nIn 1902 the poet Eduardo das Neves composed the song \"A Conquista do Ar\" in honour of Santos-Dumont's achievements, described by Thomas Skidmore as 'a conspicuous example of \"ufanism\" during the [Brazilian] belle époque', while for Oliveira 2022 the song was \"...an effort to insert Afro-Brazilians into cosmopolitan visions of flight.\" In 1924 Tarsila do Amaral painted \"Carnaval em Madureira\", which showed the replica of the Eiffel Tower and the airship built in Madureira for the Carnaval celebrations of that year, alongside Afro-Brazilians attending the event.\n[…]\nWorks by or about Alberto Santos-Dumont at the Internet Archive\n[…]\nAlberto Santos Dumont Article by writer Patricia Nell Warren."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Henri_Deutsch_de_la_Meurthe",
        "situacao": "ok",
        "texto": "Henri Deutsch de la Meurthe (fr; 25 de setembro de 1846 – 24 de novembro de 1919), nascido Salomon Henry Deutsch, foi um bem-sucedido empresário francês do petróleo (conhecido como o \"Rei do Petróleo da Europa\"), e um apoiador da aviação primitiva. Ele patrocinou uma série de prêmios para incentivar o desenvolvimento de tecnologias de aviação, incluindo o Grand Prix d'Aviation e o prêmio Deutsch d\n[…]\nEm abril de 1900, Henri ofereceu o prêmio Deutsch de la Meurthe, também conhecido simplesmente como prêmio Deutsch, de 100 000 francos para a primeira máquina capaz de voar uma viagem de ida e volta do Parc Saint Cloud até a Torre Eiffel em Paris e voltar em menos de 30 minutos. O vencedor do prêmio precisava manter uma velocidade média de solo de pelo menos 22 km/h (14 mph) para cobrir a distância de ida e volta de 11 km (6,8 mi) no tempo estipulado.\n[…]\nPara ganhar o prêmio, Alberto Santos-Dumont decidiu construir o Santos-Dumont N.º 5, um dirigível maior que sua embarcação anterior. Em 8 de agosto de 1901, durante uma de suas tentativas, o dirigível começou a perder gás hidrogênio. Ele começou a descer e não conseguiu passar pelo telhado do Hotel Trocadero. Santos-Dumont ficou pendurado em uma cesta na lateral do hotel. Com a ajuda do corpo de bombeiros de Paris, ele subiu até o telhado sem ferimentos.\n[…]\nEm 19 de outubro de 1901, após várias tentativas e testes, Santos-Dumont lançou seu dirigível Número 6 às 14h30. Após apenas nove minutos de voo, Santos-Dumont havia contornado a Torre Eiffel, mas então sofreu uma falha no motor. Para reiniciar o motor, ele teve que subir de volta sobre a grade da gôndola sem um cinto de segurança. A tentativa foi bem-sucedida, e ele cruzou a linha de chegada em 29 minutos e 30 segundos.\n[…]\nEm um gesto de caridade, ele deu metade do prêmio à sua tripulação e depois doou a outra metade aos pobres de Paris.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Leonardo da Vinci",
      "descricao": "Pintor, inventor e cientista italiano do Renascimento (1452–1519), autor de cadernos com projetos de máquinas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Autor de projetos de máquinas voadoras, Leonardo da Vinci passou os últimos anos de vida em que país, a convite do rei?",
    "resposta": "França",
    "distratores": [
      "Espanha",
      "Áustria",
      "Inglaterra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519), better known as Leonardo da Vinci, was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he has also become known for his notebooks, in which he made drawings and notes on a variety\n[…]\nThe 19th century brought a particular admiration for Leonardo's genius, causing Henry Fuseli to write in 1801: \"Such was the dawn of modern art, when Leonardo da Vinci broke forth with a splendour that distanced former excellence: made up of all the elements that constitute the essence of genius...\" This is echoed by A. E. Rio who wrote in 1861: \"He towered above all other artists through the strength and the nobility of his talents.\"\n[…]\nIn 1863, fine-arts inspector general Arsène Houssaye received an imperial commission to excavate the site and discovered a partially complete skeleton with a bronze ring on one finger, white hair, and stone fragments bearing the inscriptions \"EO\", \"AR\", \"DUS\", and \"VINC\" –  interpreted as forming \"Leonardus Vinci\".\n[…]\nIn 2019, documents were published revealing that Houssaye had kept the ring and a lock of hair. In 1925, his great-grandson sold these to an American collector. Sixty years later, another American acquired them, leading to their being displayed at the Leonardo Museum in Vinci beginning on 2 May 2019, the 500th anniversary of the artist's death.\n[…]\nLeonardo da Vinci's Notebooks\n[…]\nUniversal Leonardo, a database of Leonardo's life and works maintained by Martin Kemp and Marina Wallace\n[…]\nLeonardo da Vinci on the National Gallery website\n[…]\nBiblioteca Leonardiana, online bibliography (in Italian)\n[…]\nWorks by Leonardo da Vinci at Project Gutenberg\n[…]\nWorks by Leonardo da Vinci at LibriVox (public domain audiobooks)\n[…]\nThe Notebooks of Leonardo da Vinci"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Leonardo_da_Vinci",
        "situacao": "ok",
        "texto": "Leonardo di Ser Piero da Vinci (), ou simplesmente Leonardo da Vinci (Anchiano, 15 de abril de 1452 — Amboise, 2 de maio de 1519), foi um polímata nascido na atual Itália, uma das figuras mais importantes do Alto Renascimento, que se destacou como cientista, matemático, engenheiro, inventor, anatomista, pintor, escultor, arquiteto, botânico, poeta e músico. É ainda conhecido como o precursor da av\n[…]\nNascido como filho ilegítimo de um notário, Piero da Vinci, e de uma camponesa, Caterina, em Vinci, na região da Florença, foi educado no ateliê do renomado pintor florentino, Verrocchio. Passou a maior parte do início de sua vida profissional a serviço de Ludovico Sforza (Ludovico il Moro), em Milão; trabalhou posteriormente em Veneza, Roma e Bolonha, e passou seus últimos dias na França, numa casa que lhe foi presenteada pelo rei Francisco I.\n[…]\nEm 1506 Leonardo acolheu outro pupilo, o conde Francesco Melzi, filho de um aristocrata da Lombardia. Melzi, estudante predileto de Leonardo, viajou com o tutor para a França, onde esteve ao seu lado durante todo o fim de sua vida. Com a morte de Leonardo, Melzi herdou as coleções, manuscritos e obras artísticas e científicas de Leonardo, patrimônio que ele administrou fielmente a partir de então.\n[…]\nAspectos do seu trabalho sobre os estudos de anatomia, luz e de paisagem foram montados para a publicação por seu pupilo Francesco Melzi e, finalmente publicado como Trattato della Pittura de Leonardo da Vinci, postumamente na França e na Itália em 1651, e na Alemanha em 1724, com gravuras baseadas em desenhos do pintor clássico Nicolas Poussin.\n[…]\nEm vida, a fama de Leonardo foi tamanha que o rei da França levou-o como um troféu, o mantendo na velhice, e o tinha preso nos braços quando morreu. O interesse por Leonardo nunca afrouxou.\n[…]\nObras de Leonardo da Vinci (em inglês) no Projeto Gutenberg\n[…]\nLeonardo da Vinci no Projeto Gutenberg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Arquimedes",
      "descricao": "Matemático, físico e inventor grego do século três a.C., nascido em Siracusa, na Sicília."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 212 antes de Cristo, o inventor Arquimedes foi morto por um soldado romano durante a tomada de que cidade da Sicília, onde nasceu?",
    "resposta": "Siracusa",
    "distratores": [
      "Palermo",
      "Messina",
      "Agrigento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Archimedes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archimedes",
        "situacao": "ok",
        "texto": "Archimedes of Syracuse ( AR-kih-MEE-deez; c. 287 – c. 212 BC) was an Ancient Greek mathematician, physicist, engineer, astronomer, and inventor from the city of Syracuse in Sicily. Although few details of his life are known, based on his surviving work, he is considered one of the leading scientists in classical antiquity, and one of the greatest mathematicians of all time.\n[…]\nGalileo Galilei, who invented a hydrostatic balance in 1586 inspired by Archimedes' work, considered it \"probable that this method is the same that Archimedes followed, since, besides being very accurate, it is based on demonstrations found by Archimedes himself.\"\n[…]\nThe reputation that Archimedes had for mechanical inventions in classical antiquity is well-documented; Athenaeus recounts in his Deipnosophistae how Archimedes launched the largest known ship in antiquity, the Syracusia, while Apuleius talks about his work in catoptrics.\n[…]\nLeonardo da Vinci repeatedly expressed admiration for Archimedes, and attributed his invention Architonnerre to Archimedes. Galileo Galilei called him \"superhuman\" and \"my master\", while Christiaan Huygens said, \"I think Archimedes is comparable to no one\", consciously emulating him in his early work. Gottfried Wilhelm Leibniz said, \"He who understands Archimedes and Apollonius will admire less the achievements of the foremost men of later times\".\n[…]\nLikewise, Alfred North Whitehead said that \"in the year 1500 Europe knew less than Archimedes who died in the year 212 BC.\" The historian of mathematics Reviel Netz, echoing Whitehead's proclamation on Plato and philosophy, said that \"Western science is but a series of footnotes to Archimedes,\" calling him \"the most important scientist who ever lived.\" and Eric Temple Bell, wrote that \"Any list of the three 'greatest' mathematicians of all history would include the name of Archimedes.\n[…]\nArchimedes at PhilPapers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arquimedes",
        "situacao": "ok",
        "texto": "Arquimedes de Siracusa (c. 287–212 a.C.) foi um matemático, físico, engenheiro, astrônomo e inventor grego de Siracusa, na Sicília. Pouco se sabe sobre sua vida. Seus escritos o situam entre os cientistas da Antiguidade Clássica e os matemáticos de maior destaque da história.\n[…]\nArquimedes morreu durante o cerco de Siracusa, morto por um soldado romano apesar das ordens para que fosse poupado. Cícero relatou uma visita a seu túmulo, que trazia uma esfera e um cilindro, figuras ligadas à demonstração matemática de que Arquimedes mais gostava.\n[…]\nNa Antiguidade, Arquimedes ficou conhecido sobretudo pela defesa de Siracusa contra os romanos. Plutarco afirma que as máquinas haviam sido construídas para Hierão II e permaneceram sem uso durante sua vida. Durante a Segunda Guerra Púnica, Siracusa passou a apoiar Cartago. No cerco romano de 213–212 a.C., quando as forças de Marco Cláudio Marcelo tentaram tomar a cidade, Arquimedes teria dirigido o emprego dos engenhos defensivos.\n[…]\nOs autores antigos contam versões diferentes da morte de Arquimedes durante o saque de Siracusa. Na mais antiga, de Tito Lívio, ele desenhava figuras na terra quando foi morto por um soldado que não o reconheceu. Plutarco relata que o soldado o mandou acompanhá-lo, mas Arquimedes quis terminar um problema matemático e foi morto à espada. Outra versão de Plutarco diz que o soldado confundiu seus instrumentos matemáticos com objetos valiosos.\n[…]\nNa animação A Espada Era a Lei, de 1963, a coruja que acompanha Merlin chama-se Arquimedes. O romance histórico The Sand-Reckoner, de Gillian Bradshaw, imagina o jovem matemático voltando de Alexandria para Siracusa, onde precisa trabalhar como engenheiro em meio à guerra.\n[…]\nBiografia de Arquimedes no MacTutor, Universidade de St Andrews (em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Relógio cuco",
      "descricao": "Relógio de parede com um pássaro mecânico que sai de uma portinhola para marcar as horas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O relógio cuco virou artesanato típico de que região montanhosa e arborizada do sudoeste da Alemanha?",
    "resposta": "Floresta Negra",
    "distratores": [
      "Alpes Bávaros",
      "Montes Harz",
      "Vale do Mosela"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuckoo_clock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuckoo_clock",
        "situacao": "ok",
        "texto": "A cuckoo clock is a type of clock, typically weight driven and pendulum regulated, that strikes the hours with a sound resembling a common cuckoo call and has an automated cuckoo bird that moves with each note. Some move their wings and open and close their beaks while leaning forwards, whereas others have only the bird's body leaning forward. The mechanism to produce the cuckoo call has been in u\n[…]\nIn the 1940s and 50s cuckoo clocks were made in Portugal by Fábrica Nacional de Relógios A Boa Reguladora, Reguladora from 1953, in Vila Nova de Famalicão. Their models were in the Black Forest traditional style, with wood carved animals and leaves, and they could be spring-driven or weight-driven. Since its early years, the Portuguese clockmaking company was a fully integrated enterprise, making its own cases and movements (until 1995).\n[…]\nIn Brazil, they were manufactured between the 1940s and the 1970s, marketed under different brand names such as Astro, Rei, H and Inrebra, the last two by INREBRA (Indústria de Relógios do Brasil Ltda.), São Paulo. Same as the Portuguese cuckoos, they were inspired by Black Forest models, with wood carvings or cases in the shape of a chalet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rel%C3%B3gio_cuco",
        "situacao": "ok",
        "texto": "Um relógio cuco é normalmente um relógio de pêndulo que marca as horas com um som semelhante a um cuco comum e tem um pássaro de cuco automatizado que se move a cada nota. Alguns movem as asas e abrem e fecham os bicos enquanto se inclinam para a frente, enquanto outros têm apenas o corpo do pássaro inclinado para a frente. O mecanismo para produzir a chamada do cuco está em uso desde meados do sé\n[…]\nNão se sabe quem inventou o relógio cuco e onde o primeiro foi feito. Pensa-se que grande parte do seu desenvolvimento e evolução foi feita na área da Floresta Negra, no sudoeste da Alemanha (estado de Baden-Württemberg), a região onde o relógio cuco foi popularizado. Esses relógios foram exportados para o resto do mundo a partir de meados da década de 1850. Hoje, o relógio cuco é uma das lembranças favoritas dos viajantes na Alemanha, Suíça e Áustria. Tornou-se um ícone cultural da Alemanha.\n[…]\nAlgumas décadas depois, as pessoas na Floresta Negra começaram a construir relógios cuco.\n[…]\nNão se sabe ao certo quem construiu os primeiros relógios cuco na Floresta Negra, mas há unanimidade de que o relógio incomum com o canto dos pássaros conquistou muito rapidamente a região. Em meados do século XVIII, várias pequenas relojoarias produziram relógios cuco com engrenagens de madeira. Os primeiros exemplos da Floresta Negra foram criados entre 1740 e 1750. Os primeiros exemplos da Floresta Negra tinham escudos decorados com papel.\n[…]\nCom relação a essa crônica, o historiador Adolf Kistner afirmou em seu livro \"Die Schwarzwälder Uhr\" (O Relógio da Floresta Negra), publicado em 1927, que não existe nenhum relógio cuco boêmio para verificar a tese de que esse relógio foi usado como uma amostra para copiar e produzir relógios cuco da Floresta Negra. A Bohemia não possuía indústria de relojoaria fundamental durante esse período.\n[…]\nMuseu Cuckooland, um museu dedicado ao relógio de cuco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Lápis",
      "descricao": "Instrumento de escrita e desenho com miolo sólido de grafite em um revestimento, aqui um lápis preto HB."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No século dezesseis, a descoberta de uma grande jazida de grafite puro levou à fabricação dos primeiros lápis. Em que país ela ficava?",
    "resposta": "Inglaterra",
    "distratores": [
      "Alemanha",
      "Itália",
      "Suécia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pencil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pencil",
        "situacao": "ok",
        "texto": "A pencil ( ) is a writing or drawing implement with a solid pigment core in a protective casing that reduces the risk of core breakage and keeps it from marking the user's hand."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1pis",
        "situacao": "ok",
        "texto": "Um lápis é um instrumento de escrever, pintar, desenhar e das mais variadas coisas, concebido para marcar, sublinhar e riscar. A acepção mais comum do termo atrela-se a um instrumento utilizado para escrever,[carece de fontes]? ou mesmo riscar sobre um papel; usualmente construído através de um estilete de grafite revestido de madeira, o tradicional lápis de escrever preto ou grafite (cor mais cin\n[…]\nOs primeiros lápis livres de chumbo datam do século XVI. Neste século foi descoberta, perto de Borrowdale, Cúmbria, Inglaterra, uma grande jazida de um material bastante puro e sólido, hoje reconhecido como o estado alotrópico mais comum do carbono, a grafite. À época nomeava-se tal elemento \"chumbo negro\" em alusão direta ao elemento concorrente e suas aplicações; e os habitantes locais descobriram rapidamente que o \"chumbo negro\" era muito útil para marcarem-se as ovelhas.\n[…]\nSabe-se que os lápis de grafite não eram muito comuns antes de 1540, contudo, em uma obra sobre fósseis, Konrad Gesner faz saber que esses já estavam a se popularizar em 1565. A primeira produção de lápis em massa é atribuída a Friedrich Staedtler em 1622, em Nuremberg, na Alemanha.\n[…]\nA mina de grafite de Borrowdale permaneceu por muito tempo como a fornecedora da melhor matéria prima para se confeccionarem os lápis, e apenas em 1795, à época de Napoleão Bonaparte, o francês Nicolas-Jacques Conté encontrou uma forma viável de produzir grafite aplicável à escrita a partir de material de qualidade incompatível. Contudo, em 1832 a importância da mina era ainda notória, e uma fábrica de lápis instalava-se nas redondezas da mesma.\n[…]\nMesmo com a ascensão dos lápis de grafite, os lápis de chumbo ainda guardaram significância até o século XIX, e vieram a extinguir-se definitivamente apenas no século XX, com a descoberta da toxicidade do chumbo.\n[…]\nDuas instituições registram o que consideram o menor lápis do mundo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Disco de Ouro da Voyager",
      "descricao": "Disco fonográfico banhado a ouro, com sons, imagens e músicas da Terra, levado pelas sondas Voyager 1 e 2."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Entre as músicas gravadas no Disco de Ouro das sondas Voyager, que viajam para fora do Sistema Solar, há um rock de Chuck Berry. Qual?",
    "resposta": "Johnny B. Goode",
    "distratores": [
      "Roll Over Beethoven",
      "Maybellene",
      "Sweet Little Sixteen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Contents_of_the_Voyager_Golden_Record"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Contents_of_the_Voyager_Golden_Record",
        "situacao": "ok",
        "texto": "The Voyager Golden Record contains 116 images and a variety of sounds. The items for the record, which is carried on both the Voyager 1 and Voyager 2 spacecraft, were selected for NASA by a committee chaired by Carl Sagan of Cornell University. Included are natural sounds (including some made by animals), musical selections from different cultures and eras, spoken greetings in 55 languages, human \n[…]\nThis is a list of the recorded greetings in order of appearance.\n[…]\nIncluded within the Sounds of Earth audio portion of the Golden Record is a track containing the inspirational message per aspera ad astra in Morse code. Translated from Latin, it means 'through hardships to the stars.'\n[…]\nFollowing is a list of all the images contained in the Voyager Golden Record together with a description of the nature of the image and what annotations were included in them, and when copyright permits, the actual image.\n[…]\nIf one such civilization intercepts Voyager and can understand these recorded contents, here is our message: This is a present from a small distant world, a token of our sounds, our science, our images, our music, our thoughts, and our feelings. We are attempting to survive our time so we may live into yours. We hope some day, having solved the problems we face, to join a community of galactic civilizations.\n[…]\nThis record represents our hope and our determination and our goodwill in a vast and awesome universe.\n[…]\nThe Golden Record, the official NASA Jet Propulsion Laboratory page about the record\n[…]\nThe Infinite Voyager : The Golden Record at the Wayback Machine (archived November 6, 2014), an MIT page of then-student Lily Bui comprising a collection of recordings included\n[…]\nVoyager 1 audio on Internet Archive\n[…]\nGolden Record: Sounds of Earth, an official NASA SoundCloud page with recordings\n[…]\nvoyager.damninteresting.com, an interactive multimedia presentation of the contents"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Escova de dentes",
      "descricao": "Utensílio de higiene bucal com cerdas presas a um cabo, produzido em massa desde o século dezoito."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As escovas de dentes com cerdas criadas na China, séculos antes das europeias, usavam pelos duros de que animal?",
    "resposta": "Porco",
    "distratores": [
      "Cavalo",
      "Texugo",
      "Cabra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Toothbrush"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toothbrush",
        "situacao": "ok",
        "texto": "A toothbrush is a special type of brush used to clean the teeth, gums, and tongue. It consists of a head of tightly clustered bristles, onto which toothpaste is applied, mounted on a handle that facilitates cleaning hard-to-reach areas of the mouth. They should be used in conjunction with tools that clean between the teeth―where toothbrush bristles cannot reach―such as floss, tape, interdental bru\n[…]\nBefore the invention of the toothbrush, a variety of oral hygiene measures were used. This has been verified by excavations during which tree twigs, bird feathers, animal bones and porcupine quills were recovered.\n[…]\nIn 1223, Japanese Zen master Dōgen Kigen recorded in his Shōbōgenzō that he saw monks in China clean their teeth with brushes made of horsetail hairs attached to an oxbone handle. The bristle toothbrush spread to Europe, brought from China to Europe by travellers. It was adopted in Europe during the 17th century. The earliest identified use of the word \"toothbrush\" in English was in the autobiography of Anthony Wood, who wrote in 1690 that he had bought a toothbrush from J. Barret.\n[…]\nEuropeans found the hog bristle toothbrushes imported from China too firm and preferred softer bristle toothbrushes made from horsehair. Mass-produced toothbrushes made with horse or boar bristle continued to be imported to Britain from China until the mid 20th century.\n[…]\nDuring the 1900s, celluloid gradually replaced bone handles. Natural animal bristles were also replaced by synthetic fibers, usually nylon, by DuPont in 1938. The first nylon bristle toothbrush made with nylon yarn went on sale on February 24, 1938. The first electric toothbrush, the Broxodent, was invented in Switzerland in 1954. By the turn of the 21st century nylon had come to be widely used for the bristles and the handles were usually molded from thermoplastic materials."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escova_de_dentes",
        "situacao": "ok",
        "texto": "A Escova de dentes é utilizada na higiene bucal. Promove, associada ao creme dental, a limpeza, a proteção e uma maior durabilidade dos dentes. Recomenda-se utilizá-la sempre após qualquer refeição para a manutenção de uma boa dentição. Já estão disponíveis no mercado escovas automatizadas que diminuem o esforço físico do usuário na hora da escovação, garantindo uma maior comodidade no procediment\n[…]\nA empresa química multinacional americana DuPont desenvolveu as cerdas de náilon, usadas hoje. Vale lembrar que a a primeira versão mais parecida com a nossa escova de dentes foi usada na China, em 1498, mas suas cerdas eram feitas com pelos de porco ou javalí e o corpo da mesma, feito de madeira de bambu. Mais tarde, estes foram substituídos por pelos de cavalo.\n[…]\nA escova de dentes mais antiga da Europa, que data de 300 anos atrás, é feita de osso e foi descoberta durante escavações arqueológicas em um antigo hospital municipal de Minden, na Alemanha. Os 19 buracos destinados a inserir os pelos de porco que funcionavam como cerdas são visíveis ainda hoje.\n[…]\nEscovas de dentes Interdental\n[…]\nEscovas de dentes mastigáveis\n[…]\nEscovar primeiro as superfícies voltadas para a bochecha dos dentes superiores e, depois, dos dentes inferiores;\n[…]\nEscovar as superfícies internas dos dentes superiores e, depois, dos inferiores;\n[…]\nO melhor local para guardar a escova de dentes é dentro do armário, longe das bactérias e insetos que podem circular por um banheiro. Após o uso, deve-se lavar bem a escova e eliminar o excesso de água com uma pequena batida no canto da pia, pois enxugá-la na toalha não é adequado.\n[…]\nOs fabricantes e dentistas recomendam trocar de escova depois de 3 meses, ou quando as cerdas estiverem deformadas ou gastas. É muito importante trocar de escova depois de uma gripe ou resfriado para diminuir o risco de nova infecção por meio dos germes que aderem às cerdas.\n[…]\nEscovação dos dentes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Guilhotina",
      "descricao": "Máquina de execução por decapitação com lâmina que cai entre dois postes, símbolo da Revolução Francesa."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Símbolo da Revolução Francesa, a guilhotina continuou sendo usada em execuções na França até que década?",
    "resposta": "Década de 1970",
    "distratores": [
      "Década de 1910",
      "Década de 1940",
      "Década de 1950"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Guillotine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guillotine",
        "situacao": "ok",
        "texto": "A guillotine ( GHIL-ə-teen  GHIL-ə-TEEN  GHEE-yə-teen) is an apparatus designed for effectively carrying out executions by beheading. The device consists of a tall, upright frame with a weighted and angled blade suspended at the top. The condemned person is secured with a pillory at the bottom of the frame, holding the position of the neck directly below the blade.\n[…]\nThe guillotine is best known for its use in France, particularly during the French Revolution (1789-1799), where the revolution's supporters celebrated it as the people's avenger and the revolution's opponents vilified it as the pre-eminent symbol of the violence of the Reign of Terror. While the name \"guillotine\" dates from this period, similar devices had been in use elsewhere in Europe over several centuries.\n[…]\nThe machine was judged successful because it was considered a humane form of execution in contrast with more cruel methods used in the pre-revolutionary Ancien Régime. In France, before the invention of the guillotine, members of the nobility were beheaded with a sword or an axe, which often took two or more blows to kill the condemned. The condemned or their families would sometimes pay the executioner to ensure that the blade was sharp in order to achieve a quick and relatively painless death.\n[…]\nIn the early phase of the French Revolution, before the guillotine's adoption, the slogan À la lanterne (lit. 'To the lamp post!') symbolized popular justice in revolutionary France. The revolutionary radicals hanged officials and aristocrats from street lanterns and also employed more gruesome methods of execution, such as the wheel or burning at the stake.\n[…]\nA number of countries, primarily in Europe, continued to employ this method of execution into the 19th and 20th centuries, but they ceased to use it before France did in 1977.\n[…]\nFabricius, Jørn. \"The Guillotine Headquarters\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guilhotina",
        "situacao": "ok",
        "texto": "A guilhotina foi um instrumento utilizado durante a Revolução Francesa para aplicar a pena de morte por decapitação. O aparelho é constituído de uma grande armação reta (aproximadamente 4 m de altura) na qual é suspensa uma lâmina trapezoidal pesada (de cerca de 40 kg). As medidas e peso indicados são os das normas francesas. A lâmina é guiada à parte superior da armação por uma corda, e fica mant\n[…]\nFoi o médico francês Joseph-Ignace Guillotin (1738-1814) que sugeriu o uso deste aparelho na aplicação da pena de morte. Guillotin considerava este método de execução mais humano do que o enforcamento ou a decapitação com um machado. Na realidade, a agonia do enforcado podia ser longa, caso o dano aos ossos do pescoço não causasse a morte imediata; já em certas decapitações, o machado não cumpria seu papel ao primeiro golpe, o que aumentava consideravelmente o sofrimento da vítima.\n[…]\nMas não foi ele o inventor desse aparelho de cortar cabeças, usado muitos séculos antes. Guillotin, na verdade, apenas sugeriu sua volta na Revolução Francesa como eficiente método de execução humana. O aparelho serviu para decapitar 2794 \"inimigos da Revolução\" em Paris. Sua primeira inspiração teria surgido diante de uma gravura do alemão Albrecht Dürer, feita no século XVI, na qual o ditador romano Tito Mânlio decapita seu próprio filho com um aparelho semelhante a uma guilhotina.\n[…]\nDesde o primeiro uso da guilhotina, há um debate sobre se a guilhotina proporcionou ou não uma morte tão rápida e indolor quanto Guillotin esperava. Com métodos anteriores de execução que pretendiam ser dolorosos, poucos expressaram preocupação com o nível de sofrimento que infligiam. No entanto, como a guilhotina foi inventada especificamente para ser mais humana, a questão de saber se o condenado experimenta ou não dor foi minuciosamente examinada e permanece um tópico controverso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Pascalina",
      "descricao": "Calculadora mecânica de engrenagens criada pelo francês Blaise Pascal para fazer somas e subtrações."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século o francês Blaise Pascal criou uma calculadora mecânica de engrenagens para ajudar o pai, cobrador de impostos?",
    "resposta": "Século dezessete",
    "distratores": [
      "Século dezesseis",
      "Século dezoito",
      "Século dezenove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pascal%27s_calculator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pascal%27s_calculator",
        "situacao": "ok",
        "texto": "The Pascaline (also known as the arithmetic machine or Pascal's calculator) is a mechanical calculator invented by Blaise Pascal in 1642. It was the first operational mechanical calculator with better tens-carry. Pascal was led to develop a calculator by the laborious arithmetical calculations required by his father's (Étienne Pascal) work as the supervisor of taxes in Rouen, France.\n[…]\nNine Pascal calculators presently exist; most are on display in European museums.\n[…]\nBlaise Pascal began to work on his calculator in 1642, when he was 18 years old. He had been assisting his father, who worked as a tax commissioner, and sought to produce a device which could reduce some of his workload. Pascal received a Royal Privilege in 1649 that granted him exclusive rights to make and sell calculating machines in France.\n[…]\nIn 1649, King Louis XIV gave Pascal a royal privilege (a precursor to the patent), which provided the exclusive right to design and manufacture calculating machines in France, allowing the Pascaline to be the first calculator sold by a distributor. Pascal feared that craftsmen would not be able to accurately reproduce his Pascaline, which would result in false copies that would ruin his reputation along with the reputation of his machine.\n[…]\nPascal lived in France during France's Ancien Régime. During his time, craftsmen in Europe increasingly organised into guilds, such as the English clockmakers who formed the Clockmakers guild in 1631, half-way through Pascal's efforts to create the calculator. This affected Pascal’s ability to recruit talent as guilds often reduced the exchange of ideas and trade; sometimes, craftsmen would withhold their labour altogether to rebel against the nobles.\n[…]\nBesides being the first calculating machine made public during its time, the Pascaline is also:\n[…]\nDetailed animation explaining how the Pascaline works."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pascalina",
        "situacao": "ok",
        "texto": "A pascalina (em francês: pascaline), também conhecida como máquina de Pascal, calculadora de Pascal e máquina aritmética, é uma calculadora mecânica inventada por Blaise Pascal em 1642. Pascal foi levado a desenvolver uma calculadora pelos trabalhosos cálculos aritméticos exigidos pelo trabalho de seu pai como supervisor de impostos em Ruão. Ele projetou a máquina para adicionar e subtrair dois nú\n[…]\nA calculadora de Pascal foi especialmente bem sucedida no projeto de seu mecanismo de transporte, que adiciona 1 a 9 em um mostrador e carrega 1 para o próximo mostrador quando o primeiro mostrador muda de 9 para 0. Sua inovação tornou cada dígito independente do estado do mostrador, permitindo que vários carregamentos passem rapidamente de um dígito para outro, independentemente da capacidade da máquina.\n[…]\nPascal projetou a máquina em 1642. Após 50 protótipos, apresentou o aparelho ao público em 1645, dedicando-o a Pierre Séguier, então chanceler da França. Pascal construiu cerca de vinte outras máquinas durante a década seguinte, muitas das quais eram novas versões que introduziam melhorias ao seu projeto original.\n[…]\nEm 1649, o rei Luís XIV da França concedeu a Pascal um privilégio real (semelhante a uma patente), que concedia o direito exclusivo de projetar e fabricar máquinas de calcular na França. Nove calculadoras Pascal existem atualmente; a maioria está em exibição em museus europeus.\n[…]\nMuitas calculadoras posteriores foram diretamente inspiradas ou moldadas pelas mesmas influências históricas que levaram à invenção de Pascal. Gottfried Leibniz inventou suas rodas de Leibniz depois de 1671, depois de tentar adicionar um recurso de multiplicação automática à pascalina. Em 1820, Thomas de Colmar projetou seu aritmômetro, a primeira calculadora mecânica suficientemente forte e confiável para ser usada diariamente em um ambiente de escritório.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Concorde",
      "descricao": "Avião comercial supersônico franco-britânico que operou de 1976 a 2003."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Em velocidade de cruzeiro, o avião supersônico Concorde voava a cerca de quantas vezes a velocidade do som?",
    "resposta": "Duas vezes",
    "distratores": [
      "Uma vez e meia",
      "Três vezes",
      "Cinco vezes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Concorde"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "Concorde ( KONG-kord, French: [kɔ̃kɔʁd] ) is a retired Anglo-French supersonic airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation (BAC).\n[…]\nThe main competing designs for the US government-funded supersonic transport (SST) were the swing-wing Boeing 2707 and the compound delta wing Lockheed L-2000. These were to have been larger, with seating for up to 300 people. The Boeing 2707 was selected for development. Concorde first flew in 1969, the year Boeing began building 2707 mockups after changing the design to a cropped delta wing; the cost of this and other changes helped to kill the project.\n[…]\nIn 1995, David Fahey, of the National Oceanic and Atmospheric Administration in the United States, warned that a fleet of 500 supersonic aircraft with exhausts similar to Concorde might produce a 2 per cent drop in global ozone levels, much higher than previously thought. Each 1 per cent drop in ozone is estimated to increase the incidence of non-melanoma skin cancer worldwide by 2 per cent.\n[…]\nKelly, Neil (2005). The Concorde Story: 34 Years of Supersonic Air Travel. Surrey, UK: Merchant Book Company Ltd. ISBN 978-1-904779-05-6.\n[…]\nOwen, Kenneth (2001). Concorde: Story of a Supersonic Pioneer. London: Science Museum. ISBN 978-1-900747-42-4.\n[…]\nConcorde Aircrew Manual Part 2\n[…]\nConcorde Operations Navigation Manual\n[…]\n\"First Concorde Supersonic Transport Flies\" (PDF). Aviation Week & Space Technology. 17 March 1969. Archived from the original (PDF) on 16 March 2015.\n[…]\nCapt R. E. Gillman (24 January 1976). \"Concorde as viewed from the flightdeck\". Flight International.\n[…]\n\"The day Concorde flew into the history books\". Airbus. 2 March 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Concorde",
        "situacao": "ok",
        "texto": "O Concorde foi um avião comercial supersônico de passageiros, que foi produzido de abril de 1965 até o final de 1978 pelo consórcio formado pela britânica British Aircraft Corporation (BAC) e a francesa Aérospatiale.\n[…]\nEm 21 de janeiro de 1976, o Concorde iniciou voos comerciais ligando Paris ao Rio de Janeiro, com uma escala em Dacar, e Londres a Bahrein. Voar no Concorde era uma experiência única. Tendo uma velocidade de cruzeiro em torno de 2,5 vezes a de qualquer aeronave de passageiros - 1 150 kn (2 130 km/h), contra 450 kn (833 km/h) de então, sendo 1 292 kn (2 390 km/h) o recorde em 19 de dezembro de 1985.\n[…]\nPorém, por se tratar de um avião supersônico, o Concorde emitia muito ruído e poluição, e assim, por muito tempo, restrições ambientais impediram sua operação nos Estados Unidos.\n[…]\nO serviço de passageiros no Concorde permaneceu sem acidentes por cerca de 24 anos, atendendo regularmente, além de Nova Iorque e Washington, as cidades de Miami, Bridgetown (Barbados), Caracas, Ilha de Santa Maria, Dacar, Bahrein, Singapura, Cidade do México e Rio de Janeiro. Ao longo destes anos, o avião rodou o mundo nas duas direções, visitando todos os continentes, exceto a Antártica.\n[…]\nDois protótipos (001 e 002) foram produzidos para aperfeiçoamentos no projeto inicial. Mais duas aeronaves foram construídas (101 e 102), como aeronaves de pré-produção, e também serviram para refinar o projeto, de forma a aproximá-lo da configuração ideal para o serviço comercial.\n[…]\nVelocidade Máxima de Operação: Mach 2,04\n[…]\nVelocidade Normal de Cruzeiro: Mach 2,00\n[…]\nVídeo com diversos voos do Concorde\n[…]\n«Site com informações, vídeos e fotos do Concorde» (em inglês e francês)\n[…]\n«Site com informações e fotos do Concorde» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Sistema braille",
      "descricao": "Sistema de leitura e escrita tátil com pontos em relevo, criado pelo francês Louis Braille no século dezenove."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No sistema de Louis Braille, cada letra é formada por pontos em relevo arrumados num pequeno retângulo, a cela. Quantas posições de ponto tem a cela?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Oito",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braille ( BRAYL; French: [bʁaj] ) is a tactile writing system used by blind or visually impaired people. It can be read either on embossed paper or by using refreshable braille displays that connect to computers and smartphone devices. Braille can be written using a slate and stylus, a braille writer, an electronic braille notetaker or with the use of a computer connected to a braille embosser. Fo\n[…]\nBraille is named after its creator, Louis Braille, a Frenchman who lost his sight as a result of a childhood accident. In 1824, at the age of fifteen, he developed the braille code based on the French alphabet as an improvement on night writing. He published his system, which subsequently included musical notation, in 1829. The second revision, published in 1837, was the first binary form of writing developed in the modern era.\n[…]\nHistorically, there have been three principles in assigning the values of a linear script (print) to Braille: Using Louis Braille's original French letter values; reassigning the braille letters according to the sort order of the print alphabet being transcribed; and reassigning the letters to improve the efficiency of writing in braille.\n[…]\nEvery year on 4 January, World Braille Day is observed internationally to commemorate the birth of Louis Braille and to recognize his efforts. Although the event is not considered a public holiday, it has been recognized by the United Nations as an official day of celebration since 2019.\n[…]\nThere is a variety of contemporary electronic devices that serve the needs of blind people that operate in Braille, such as refreshable braille displays and braille e-books that use different technologies for transmitting graphic information of different types (pictures, maps, graphs, texts, etc.).\n[…]\nBraille Part 1 Text To Speech For The Visually Impaired YouTube\n[…]\nBraille information and advice – Sense UK\n[…]\nBraille at Omniglot"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braile ou braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. É tradicionalmente escrito em papel relevo. Os usuários do sistema Braille podem ler em telas de computadores e em outros suportes eletrônicos graças a um mostrador em braile atualizáveis. Eles podem escrever em braile com reglete e punção, máquina de escrever em braille, notetaker em braille ou computa\n[…]\nEm inglês, o Braille tinha três níveis de codificação:\n[…]\nUma célula Braille completa inclui seis pontos dispostos em duas linhas verticais, cada uma com três pontos. As posições dos pontos são identificadas por números de um a seis. São 63 combinações possíveis para usar um ou mais pontos e 64 combinações possíveis considerando o espaço em branco. Uma única célula pode ser usada para representar uma letra do alfabeto, um número, um sinal de pontuação ou mesmo uma palavra inteira.\n[…]\nA solução de Braille foi usar células de 6 pontos e atribuir um padrão específico para cada letra do alfabeto. Inicialmente, o Braille era uma transliteração um–para–um da ortografia francesa, mas logo várias abreviaturas, contrações e até mesmo logogramas foram desenvolvidos. Isto criou um sistema muito mais parecido com a taquigrafia. O sistema inglês expandido chamado de Braille de grau 2 estava completo em 1905.\n[…]\nAs próximas dez letras (a próxima década) são as mesmas novamente, mas com pontos também nas posições 3 e 6 (pontos verdes). A letra w foi deixada de fora, porque não fazia parte do alfabeto francês enquanto Braille estava vivo. A ordem francesa em Braille é u v x y z ç é à è ù.\n[…]\nOs textos acadêmicos são às vezes escritos em um script de oito em vez de seis pontos por célula, permitindo-lhes codificar um maior número de símbolos. O Braille luxemburguês adotou células de oito pontos para uso geral. Por exemplo, adiciona um ponto abaixo de cada letra para derivar sua variante com letra maiúscula.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Isaac Newton",
      "descricao": "Físico e matemático inglês (1643–1727), autor das leis do movimento e da gravitação universal."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Além da física, Isaac Newton passou cerca de três décadas à frente de que instituição inglesa, onde chegou a perseguir falsificadores?",
    "resposta": "Casa da Moeda Real",
    "distratores": [
      "Banco da Inglaterra",
      "Universidade de Oxford",
      "Observatório de Greenwich"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Isaac_Newton"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton ( ; 4 January 1643 [O.S. 25 December 1642] – 31 March 1727 [O.S. 20 March 1726]) was an English polymath who was a mathematician, physicist, astronomer, alchemist, theologian, historian and inventor. He was a key figure in the Scientific Revolution and the Enlightenment that followed.\n[…]\nHe generalised the binomial theorem to any real number, introduced the Puiseux series, was the first to state Bézout's theorem, classified most of the cubic plane curves, contributed to the study of Cremona transformations, developed a method for approximating the roots of a function, originated the Newton–Cotes formulas used for numerical integration, and further produced the earliest explicit enunciation of the general Taylor series.\n[…]\nAll of Newton's known writings on alchemy are currently being put online in a project undertaken by Indiana University: \"The Chymistry of Isaac Newton\" and has been summarised in a book.\n[…]\nThe Isaac Newton Institute for Mathematical Sciences, an international research institute for mathematics and its applications at the University of Cambridge, is named in Newton's honour.\n[…]\nThe Institute of Physics, or IOP, has its highest and most prestigious award, the Isaac Newton Medal, named after Newton, which is given for world-leading contributions to physics. It was first awarded in 2008.\n[…]\nList of things named after Isaac Newton\n[…]\n\"Archival material relating to Isaac Newton\". UK National Archives.\n[…]\nPortraits of Sir Isaac Newton at the National Portrait Gallery, London\n[…]\nWorks by Isaac Newton at Project Gutenberg\n[…]\nWorks by or about Isaac Newton at the Internet Archive\n[…]\nWorks by Isaac Newton at LibriVox (public domain audiobooks)\n[…]\nBernhardus Varenius, Geographia Generalis, ed. Isaac Newton, 2nd ed. (Cambridge: Joann. Hayes, 1681) from the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Isaac_Newton",
        "situacao": "ok",
        "texto": "Sir Isaac Newton PRS (Woolsthorpe-by-Colsterworth, 25 de dezembro de 1642jul./ 4 de janeiro de 1643greg. – Kensington, 20 de março de 1727jul./ 31 de março de 1727greg) foi um matemático, físico, astrônomo, alquimista, teólogo e escritor britânico (descrito em seus dias como um \"filósofo natural\") amplamente reconhecido como um dos cientistas mais influentes de todos os tempos e como uma figura-ch\n[…]\nFoi cavaleiro da rainha Ana em 1705 e passou as últimas três décadas de sua vida em Londres servindo como diretor (1696–1700) e mestre (1700–1727) da Casa da Moeda Real e como presidente da Royal Society (1703–1727).\n[…]\nNewton tornou-se talvez o mestre mais conhecido da Casa da Moeda após a morte de Thomas Neale em 1699, cargo que Newton ocupou nos últimos 30 anos de sua vida.\n[…]\nComo diretor, e depois como mestre, da Casa da Moeda Real, Newton estimou que 20 por cento das moedas recunhadas durante o Grande Recunhagem de 1696 eram falsificadas. A falsificação era alta traição, punível com o crime ser enforcado, arrastado e esquartejado. Apesar disto, condenar até os criminosos mais flagrantes poderia ser extremamente difícil. No entanto, Newton se mostrou digno da tarefa.\n[…]\nEm abril de 1705, a rainha Ana tornou Newton um cavaleiro durante uma visita real ao Trinity College, Cambridge. É provável que a cavalaria tenha sido motivada por considerações políticas relacionadas às eleições parlamentares em maio de 1705, em vez de qualquer reconhecimento do trabalho ou serviços científicos de Newton como Mestre da Casa da Moeda. Newton foi o segundo cientista a ser cavaleiro, depois de Sir Francis Bacon.\n[…]\nJohn Conduitt, que foi assistente de Newton na Casa da Moeda Real e marido da sobrinha do cientista, também descreveu o evento quando escreveu sobre a vida de Newton:\n[…]\nRelatórios como mestre da casa da moeda (1701–1725)\n[…]\nIsaac Newton (em inglês) no Mathematics Genealogy Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Irmãos Wright",
      "descricao": "Orville e Wilbur Wright, inventores americanos que fizeram em 1903 o primeiro voo controlado e sustentado de um avião motorizado."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Antes do voo de 1903, os irmãos Wright tinham em Dayton, no estado de Ohio, uma loja onde fabricavam e consertavam o quê?",
    "resposta": "Bicicletas",
    "distratores": [
      "Relógios",
      "Máquinas de costura",
      "Carroças"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wright_brothers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wright_brothers",
        "situacao": "ok",
        "texto": "The Wright brothers, Orville Wright (August 19, 1871 – January 30, 1948) and Wilbur Wright (April 16, 1867 – May 30, 1912), were American aviation pioneers who researched, invented, built, and flew the world's first successful airplane. They made the first controlled, sustained flight of an engine-powered, heavier-than-air aircraft with the Wright Flyer on December 17, 1903, four miles (6 km) sout\n[…]\nWilbur and Orville Wright were two of seven children born to Milton Wright, a clergyman, and Susan Catherine Koerner. Milton Wright's mother, Catherine Reeder, was descended from the progenitor of the Vanderbilt family – one of America's richest families – and the Huguenot Gano family of New Rochelle, New York. The Wrights were distantly related to the Revolutionary War patriot John Gano. Wilbur was born near Millville, Indiana, in 1867; Orville in Dayton, Ohio, in 1871.\n[…]\nThe Wright Company was incorporated on November 22, 1909. The brothers sold their patents to the company for $100,000 and also received one-third of the shares in a million dollar stock issue and a 10 percent royalty on every airplane sold. With Wilbur as president and Orville as vice president, the company set up a factory in Dayton and a flying school / test flight field at Huffman Prairie; the headquarters office was in New York City.\n[…]\nIt was decided by the family that a new and far grander house would be built, using the money that the Wrights had earned through their inventions and business. Called affectionately Hawthorn Hill, building had begun in the Dayton suburb of Oakwood, Ohio, while Wilbur was in Europe. Katharine and Orville oversaw the project in his absence. Wilbur's one known expression upon the design of the house was that he have a room and bathroom of his own.\n[…]\nWright Brothers Collection (MS-001) at Dayton Metro Library\n[…]\nWright Brothers' Newspapers at Dayton Metro Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irm%C3%A3os_Wright",
        "situacao": "ok",
        "texto": "Os Irmãos Wright, Wilbur (Millville, 16 de abril de 1867; Dayton, 30 de maio de 1912) e Orville (Dayton, 19 de agosto de 1871; Dayton, 30 de janeiro de 1948), foram dois irmãos norte-americanos, inventores e pioneiros da aviação aos quais foi concedido o crédito pelo desenvolvimento da primeira máquina voadora mais pesada que o ar, que efetuou um voo controlado, em 17 de dezembro de 1903.\n[…]\nAproveitando o \"boom\" nacional das bicicletas logo depois da invenção da \"bicicleta segura\", os irmãos abriram uma loja de vendas e oficina de reparos em dezembro de 1892 (a Wright Cycle Exchange, mais tarde Wright Cycle Company) e começaram a construir bicicletas de sua própria marca em 1896. Eles usaram esse empreendimento para financiar seu crescente interesse em voar.\n[…]\nNa base da observação, Wilbur concluiu que os pássaros alteravam o ângulo da ponta de suas asas para fazer com seus corpos rolassem para a esquerda ou para a direita. Os irmãos decidiram que este seria uma boa maneira de uma máquina voadora para fazer curvas para um lado ou para outro, como uma pessoa numa bicicleta, uma experiência com a qual eles tinham bastante familiaridade.\n[…]\nDeixando de lado a estranha bicicleta de três rodas, eles construíram um túnel de vento de 1,83 m na sua loja e conduziram uma série de testes sistemáticos de asas em miniatura entre Outubro e Dezembro de 1901. Os suportes que eles montaram no interior do túnel para segurar as asas pareciam bem toscos, mas foram \"tão críticos para o sucesso final dos irmãos Wright quanto os próprios planadores\".\n[…]\nEm 1903, os irmãos construíram um modelo motorizado, o Wright Flyer I, usando o seu material preferido na construção, a picea, uma madeira leve e resistente, e musseline para a cobertura das superfícies. Eles também desenharam e esculpiram suas próprias hélices de madeira, e tinham um motor específico construído na sua loja de bicicletas.",
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
