Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Pré-História e Idade do Bronze** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Paleolítico",
      "descricao": "Primeiro e mais longo período da Idade da Pedra, marcado pelas ferramentas de pedra lascada e pelos caçadores-coletores."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que período da Pré-História foi de longe o mais longo, com mais de dois milhões de anos de duração?",
    "resposta": "Paleolítico",
    "distratores": [
      "Mesolítico",
      "Neolítico",
      "Calcolítico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paleolithic",
      "https://pt.wikipedia.org/wiki/Paleol%C3%ADtico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paleolithic",
        "situacao": "ok",
        "texto": "The Paleolithic (  PAY-lee-oh-LITH-ik, PAL-ee-), or Old Stone Age, is a period in human prehistory distinguished by the original development of stone tools. It represents almost the entire period of human prehistoric technology, extending from the earliest known use of stone tools by hominins, c. 3.3 million years ago, to the end of the Pleistocene, c. 11,650 cal BP.\n[…]\nMen may have participated in gathering plants, firewood and insects, and women may have procured small game animals for consumption and assisted men in driving herds of large game animals (such as woolly mammoths and deer) off cliffs. Additionally, recent research by anthropologist and archaeologist Steven Kuhn from the University of Arizona is argued to support that this division of labor did not exist prior to the Upper Paleolithic and was invented relatively recently in human pre-history.\n[…]\nSexual division of labor may have been developed to allow humans to acquire food and other resources more efficiently. Possibly there was approximate parity between men and women during the Middle and Upper Paleolithic, and that period may have been the most gender-equal time in human history.\n[…]\nEarly examples of artistic expression, such as the Venus of Tan-Tan and the patterns found on elephant bones from Bilzingsleben in Thuringia, may have been produced by Acheulean tool users such as Homo erectus prior to the start of the Middle Paleolithic period.\n[…]\nHowever, during the early Upper Paleolithic it was probably more common for all members of the band to participate equally and fully in religious ceremonies, in contrast to the religious traditions of later periods when religious authorities and part-time ritual specialists such as shamans, priests and medicine men were relatively common and integral to religious life.\n[…]\nDonsmaps: a vast repository of Paleolithic resources"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paleol%C3%ADtico",
        "situacao": "ok",
        "texto": "O Paleolítico (παλαιός, palaiós=\"antigo\",  λίθος, lithos=\"pedra\",  \"pedra antiga\") ou Idade da Pedra Antiga, é um período na pré-história humana que se distingue pelo desenvolvimento original de ferramentas de pedra e que representa quase todo o período da tecnologia da pré-história humana. Estende-se desde o primeiro uso conhecido de ferramentas de pedra por hominídeos, c. 3,3 milhões de anos atr\n[…]\nNeste período, os humanos eram essencialmente nômades caçadores-coletores, tendo que se deslocar constantemente em busca de alimentos. Desenvolveram os primeiros instrumentos de caça feitos em madeira, osso ou pedra lascada. A Era Paleolítica na Europa precedeu a Era Mesolítica, embora a data da transição varie geograficamente em vários milhares de anos.\n[…]\nO termo Paleolítico foi empregado pela primeira vez pelo historiador John Lubbock. Foi precedido pelo período pré-histórico que alguns historiadores chamam de Eolítico, e sucedido pelo Neolítico. Na Europa e em outros locais onde ocorreram glaciações, intercala-se o período chamado Mesolítico entre o Paleolítico e o Neolítico.\n[…]\nOs objetos foram confeccionados primeiro em osso e madeira, depois em pedra e marfim. Usavam um machado de pedra, para cortar e esmagar os alimentos, para defesa e fazer furos. As lascas eram aproveitadas para fabricar objetos cortantes, daí o Paleolítico ter ficado também conhecido como Período ou Idade da Pedra Lascada.\n[…]\nO paleolítico médio é um conceito que compreende um espaço temporal, cultural e geográfico mais restrito do que os períodos do Paleolítico que o antecedem e sucedem.\n[…]\nA passagem do período Paleolítico para o Neolítico foi bastante gradual, tendo levado cerca de 10 mil anos, e ficou conhecida como a Revolução Neolítica (nome dado pelo historiador Gordon Childe), visto terem ocorrido conquistas tecnológicas que garantiram a sobrevivência dos povos nesse período.\n[…]\nArte do Paleolítico"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Caverna de Lascaux",
      "descricao": "Caverna no sudoeste da França com pinturas rupestres de animais feitas há cerca de dezessete mil anos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na caverna de Lascaux, na França, há centenas de animais pintados. Qual deles aparece mais vezes?",
    "resposta": "Cavalo",
    "distratores": [
      "Bisão",
      "Auroque",
      "Cervo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lascaux"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (English:  la-SKOH, US also  lah-SKOH; French: Grotte de Lascaux French pronunciation: [ɡʁɔt də lasko], \"Lascaux Cave\") is a network of caves near the village of Montignac, in the department of Dordogne in southwestern France. Over 600 parietal wall paintings cover the interior walls and ceilings of the cave. The paintings represent primarily large animals, typical local contemporary fauna\n[…]\n— (1980) [1955]. Prehistoric Painting: Lascaux; or, The Birth of Art. Geneva: Skira. ISBN 978-0-333-30809-7.\n[…]\nNechvatal, Joseph (2005). \"Immersive Excess in the Apse of Lascaux\". Technoetic Arts. 3 (3): 181–192. doi:10.1386/tear.3.3.181/1. ISSN 1477-965X.\n[…]\nB.et G. Delluc (dir.), Le Livre du Jubilé de Lascaux 1940–1990, Société historique et archéologique du Périgord, supplément au tome CXVII, 1990, 155 p., ill.\n[…]\nB. et G. Delluc, 2003: Lascaux retrouvé. Les recherches de l'abbé André Glory, Pilote 24 édition, 368 p., ill.\n[…]\nB. et G. Delluc, 2006: Discovering Lascaux, Sud Ouest, nouvelle édition entièrement revue et très augmentée, 80 p., ill. plans et coupe.\n[…]\nB. et G. Delluc, 2008: Dictionnaire de Lascaux, Sud Ouest, Bordeaux. Plus de 600 entrées et illustrations. Bibliographie (450 références). ISBN 978-2-87901-877-5.\n[…]\nB. et G. Delluc, 2010: Lascaux et la guerre. Une galerie de portraits, Bull. de la Soc. historique et arch. du Périgord, CXXXVI, 2e livraison, 40 p., ill., bibliographie.\n[…]\nA. Glory, 2008: Les recherches à Lascaux (1952–1963). Documents recueillis et présentés par B. et G. Delluc, XXXIXe suppl. à Gallia-Préhistoire, CNRS, Paris.\n[…]\nRigaud, Jean-Philippe (October 1988). \"Art Treasures from the Ice Age: Lascaux Cave\". National Geographic. Vol. 174, no. 4. pp. 482–499. ISSN 0027-9358. OCLC 643483454.\n[…]\nThe microbiology of Lascaux Cave\n[…]\nLascaux Cave Art Symposium The Bradshaw Foundation\n[…]\nLascaux Symphony by Alan Bush, performed by the Royal Scottish National Orchestra"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lascaux",
        "situacao": "ok",
        "texto": "Lascaux (Inglês [læˈskoʊ] la-SKOH, [USalsolɑːˈskoʊ] lah-SKOH; em francês: Grotte de Lascaux fr, \"Cavernas Lascaux\") é um complexo de cavernas perto da comuna de Montignac, no departamento de Dordonha, no sudoeste da França, famosas por suas pinturas rupestres.\n[…]\nAs paredes da caverna estão pintadas com bovídeos, cavalos, cervos, cabras e felinos, entre outros animais, que correspondem ao registro fóssil do Paleolítico Superior da região.\n[…]\nO Divertículo axial está também ornamentado de bovídeos, junto de cavalos acompanhados por cervos e de cabritos. Um desenho representando um cavalo a fugir foi pintado com giz de manganês a uns 2,50 metros do chão. Alguns animais foram pintados no teto, parecendo saltar de uma a outra parede. Com estas representações, que devem ter precisado do uso de andaimes, entremesclaram-se numerosos signos (bastões, pontos e retângulos).\n[…]\nO Divertículo dos Felinos deve o seu nome a um grupo de felinos, dos quais um parece estar a urinar para marcar o território. De difícil acesso, podem-se ver aqui gravuras de feras de feitura muito ingênua. Encontram-se também outros animais associados a signos, como uma representação de cavalo visto de frente, algo excepcional na arte paleolítica, pois os animais são, em geral, representados de perfil ou com uma perspectiva torcida.\n[…]\nO Poço apresenta a cena mais misteriosa de Lascaux: um homem, com cabeça de pássaro e de sexo erecto, pareça cair, investido talvez por um bisão desventrado por uma azagaia; de lado está representado um objeto alongado sobreposto a uma ave, que talvez seja um propulsor; na esquerda, um rinoceronte parece afastar-se. Na parede oposta, há também representado um cavalo. Dois grupos de signos são de notar nesta composição:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Jericó",
      "descricao": "Cidade na Cisjordânia habitada desde o Neolítico, famosa por suas antigas muralhas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Jericó, perto do mar Morto, é uma das cidades mais antigas do mundo. Que outro recorde, desta vez geográfico, ela tem?",
    "resposta": "É a cidade mais baixa do mundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jericho",
      "https://pt.wikipedia.org/wiki/Jeric%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jericho",
        "situacao": "ok",
        "texto": "Jericho ( JERR-ik-oh; Arabic: أريحا, romanized: Arīḥā, IPA: [ʔaˈriːħaː] ; Hebrew: יְרֵחוֹ, romanized: Yərīḥō) is a city in the West Bank, Palestine, and the capital of the Jericho Governorate. The city is located in the Jordan Valley, with the Jordan River to the east and Jerusalem to the west.\n[…]\nUmayyad rule ended in 750 and was followed by the Arab caliphates of the Abbasid and Fatimid dynasties. Irrigated agriculture was developed under Islamic rule, reaffirming Jericho's reputation as a fertile \"City of the Palms\". Al-Maqdisi, the Arab geographer, wrote in 985 that \"the water of Jericho is held to be the highest and best in all Islam. Bananas are plentiful, also dates and flowers of fragrant odor\". Jericho is also referred to by him as one of the principal cities of Jund Filastin.\n[…]\nIn 1226, Arab geographer Yaqut al-Hamawi said of Jericho, \"it has many palm trees, also sugarcane in quantities, and bananas. The best of all the sugar in the Ghaur land is made here.\" In the 14th century, Abu al-Fida writes that there are sulfur mines in Jericho, \"the only ones in Palestine\".\n[…]\nJericho was incorporated into the Ottoman Empire in 1517 with all of Palestine, and in 1545 a revenue of 19,000 Akçe was recorded, destined for the new Waqf for the Haseki Sultan Imaret of Jerusalem. The villagers processed indigo as one source of revenue, using a cauldron specifically for this purpose that was loaned to them by the Ottoman authorities in Jerusalem. Later that century, the Jericho revenues no longer went to the Haseki Sultan Imaret.\n[…]\nLocality Development Priorities and Needs in Jericho City, ARIJ\n[…]\nJericho Municipality Official Website Historical site\n[…]\nJericho Cable Car\n[…]\nJericho: Tel es-Sultan Archived 13 October 2008 at the Wayback Machine\n[…]\nThe walls of Jericho fell in 1550 BCE"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeric%C3%B3",
        "situacao": "ok",
        "texto": "Jericó (em árabe: أريحا, transl. Ārīḥā) é uma cidade situada na Palestina. Fica a poucos quilômetros do rio Jordão, a 8 quilômetros da ponta norte do Mar Morto e aproximadamente a 27 km de Jerusalém. É considerada a cidade mais antiga ainda existente, habitada há 11 000 anos (desde antes de 9 000 a.C.). Situada a cerca de 270 metros abaixo do nível do mar, é também a cidade mais baixa do planeta.\n[…]\nHá mais de uma teoria para a origem do nome de Jericó. O nome Jericó é conhecido pelos seus habitantes locais como Ārīḥā (em árabe: أريحا), o qual significa \"perfumado\" e deriva da palavra cananeia (assim como o árabe e o hebraico) Reah, de mesmo significado. Jericó também é pronunciado Yəriḥo () em hebraico, e uma teoria alternativa fortalece que ela é derivada da palavra \"lua\" (Yareah) em cananeu e hebraico, sendo que a cidade foi um antigo centro de adoração a deuses lunares.\n[…]\nAcredita-se que Jericó seja uma das mais antigas cidades continuamente habitadas do mundo, com evidência de assentamentos datados de antes de 9 000 a.C., provendo informações importantes sobre antigas habitações humanas no Oriente Próximo. Por volta de 8000 a.C., havia se transformado em uma pequena cidade murada, com casas em forma de colmeia, fundações de pedra e pisos rebocados, muitas das quais possuíam pátios privados e fornos.\n[…]\nO Livro de Josué narra a famosa batalha de Jericó, afirmando que ela foi rodeada por sete vezes pelos Filhos de Israel até que as paredes vieram abaixo, após a qual Josué amaldiçoa a cidade: «Naquele tempo, Josué fez o povo jurar e dizer: Maldito diante do Senhor seja o homem que se levantar e reedificar esta cidade de Jericó; com a perda do seu primogênito lhe porá os fundamentos e, à custa do mais novo, as portas\". \"Gritou, pois, o povo, e os sacerdotes tocaram as trombetas.\n[…]\nSaiba mais em Vale do Jordão.\n[…]\nCidade mais velha do mundo, Jericó faz 10 mil anos - (em português)"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Newgrange",
      "descricao": "Túmulo de corredor neolítico no vale do rio Boyne, na Irlanda."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes monumentos da Antiguidade foi construído primeiro?",
    "resposta": "Newgrange",
    "distratores": [
      "Grande Pirâmide de Gizé",
      "Zigurate de Ur",
      "Porta dos Leões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Newgrange"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newgrange",
        "situacao": "ok",
        "texto": "Newgrange (Irish: Sí an Bhrú) is a prehistoric monument in County Meath in Ireland, placed on a rise overlooking the River Boyne, eight kilometres (five miles) west of the town of Drogheda. It is an exceptionally grand passage tomb built during the Neolithic Period, around 3100 BC, making it older than Stonehenge and the Egyptian pyramids.\n[…]\nNewgrange is the main monument in the Brú na Bóinne complex, a World Heritage Site that also includes the passage tombs of Knowth and Dowth, as well as other henges, burial mounds and standing stones.\n[…]\nThe monument now known as Newgrange forms part of the prehistoric landscape called Brú na Bóinne, meaning the palace or mansion of the Boyne. The name refers to the ceremonial complex along the River Boyne that includes the major passage tombs of Knowth, Dowth, and Newgrange itself.\n[…]\nThis tale has also been linked with recent DNA analysis, which found that a man buried at Newgrange had parents who were most likely siblings (see #Construction and burials).\n[…]\nNewgrange is 8.4 kilometres (5.2 mi) west of Drogheda in County Meath. The interpretive centre is on the south bank of the river, and Newgrange is on its north side. Access is only from the interpretive centre, by guided tour only. Tours begin at the Brú na Bóinne Visitor Centre, from which visitors are taken to the site in groups.\n[…]\nTo experience the phenomenon on the morning of the Winter Solstice from inside Newgrange, visitors to Bru Na Bóinne Visitor Centre must enter an annual lottery at the centre. Of the tens of thousands who enter, sixty are chosen each year. Winners are permitted to bring a single guest. The winners are split into groups of ten and taken in on the five days around the solstice in December when sunlight can enter the chamber, weather permitting.\n[…]\nNewgrange.com\n[…]\nNewgrange winter solstice simulation in 3D"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Newgrange",
        "situacao": "ok",
        "texto": "Newgrange (em irlandês:  Sí an Bhrú) é uma tumba do Conjunto Arqueológico do Vale do Boyne, no Condado de Meath, na Irlanda, um dos mais famosos sítios pré-históricos do mundo e o mais famoso da Irlanda. Newgrange foi construído de modo que, ao nascer do sol do dia mais curto do ano (solstício de inverno), um fino raio de sol ilumina por pouco tempo o piso da câmara no final de um longo corredor.\n[…]\nFoi construída por volta de 3200 a.C, durante o período Neolítico, o que o faz mais antigo do que Stonehenge e as pirâmides do Egito.\n[…]\nNewgrange parece ter sido usada principalmente como uma tumba. Foram encontrados restos humanos cremados de cinco indivíduos. O sol parece ter sido um importante elemento nas crenças religiosas do Neolítico.\n[…]\nO alinhamento solar em Newgrange é ainda muito preciso se comparado a outros fenômenos, tais como o que acontece nas Ilhas Órcades, perto da costa de Escócia.\n[…]\nDe acordo com a Mitologia irlandesa, Newgrange era um dos Sídhes (montes) onde Tuatha Dé Danann vivia. Foi construído pelo deus Dagda. De acordo com a lenda, o herói Cú Chulainn nasceu lá. Contudo, a maioria dos ciclos místicos associados com Newgrange datam da era Céltica da mitologia e da História da Irlanda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Newgrange",
      "descricao": "Túmulo de corredor neolítico no vale do rio Boyne, na Irlanda."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A grande pedra deitada diante da entrada do túmulo de Newgrange, na Irlanda, é famosa por gravações de que forma?",
    "resposta": "Espirais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Newgrange"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Newgrange",
        "situacao": "ok",
        "texto": "Newgrange (Irish: Sí an Bhrú) is a prehistoric monument in County Meath in Ireland, placed on a rise overlooking the River Boyne, eight kilometres (five miles) west of the town of Drogheda. It is an exceptionally grand passage tomb built during the Neolithic Period, around 3100 BC, making it older than Stonehenge and the Egyptian pyramids.\n[…]\nNewgrange is the main monument in the Brú na Bóinne complex, a World Heritage Site that also includes the passage tombs of Knowth and Dowth, as well as other henges, burial mounds and standing stones.\n[…]\nThe monument now known as Newgrange forms part of the prehistoric landscape called Brú na Bóinne, meaning the palace or mansion of the Boyne. The name refers to the ceremonial complex along the River Boyne that includes the major passage tombs of Knowth, Dowth, and Newgrange itself.\n[…]\nNewgrange is 8.4 kilometres (5.2 mi) west of Drogheda in County Meath. The interpretive centre is on the south bank of the river, and Newgrange is on its north side. Access is only from the interpretive centre, by guided tour only. Tours begin at the Brú na Bóinne Visitor Centre, from which visitors are taken to the site in groups.\n[…]\nTo experience the phenomenon on the morning of the Winter Solstice from inside Newgrange, visitors to Bru Na Bóinne Visitor Centre must enter an annual lottery at the centre. Of the tens of thousands who enter, sixty are chosen each year. Winners are permitted to bring a single guest. The winners are split into groups of ten and taken in on the five days around the solstice in December when sunlight can enter the chamber, weather permitting.\n[…]\n101 Facts About Newgrange\n[…]\nNewgrange.com\n[…]\nBrú na Bóinne in myth and folklore\n[…]\nNewgrange winter solstice simulation in 3D\n[…]\nConsanguineous unions in the archaeology and mythology of the Neolithic passage-tomb at Newgrange, Ireland (Graham 2021)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Newgrange",
        "situacao": "ok",
        "texto": "Newgrange (em irlandês:  Sí an Bhrú) é uma tumba do Conjunto Arqueológico do Vale do Boyne, no Condado de Meath, na Irlanda, um dos mais famosos sítios pré-históricos do mundo e o mais famoso da Irlanda. Newgrange foi construído de modo que, ao nascer do sol do dia mais curto do ano (solstício de inverno), um fino raio de sol ilumina por pouco tempo o piso da câmara no final de um longo corredor.\n[…]\nNewgrange parece ter sido usada principalmente como uma tumba. Foram encontrados restos humanos cremados de cinco indivíduos. O sol parece ter sido um importante elemento nas crenças religiosas do Neolítico.\n[…]\nO alinhamento solar em Newgrange é ainda muito preciso se comparado a outros fenômenos, tais como o que acontece nas Ilhas Órcades, perto da costa de Escócia.\n[…]\nDe acordo com a Mitologia irlandesa, Newgrange era um dos Sídhes (montes) onde Tuatha Dé Danann vivia. Foi construído pelo deus Dagda. De acordo com a lenda, o herói Cú Chulainn nasceu lá. Contudo, a maioria dos ciclos místicos associados com Newgrange datam da era Céltica da mitologia e da História da Irlanda.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Vênus de Hohle Fels",
      "descricao": "Estatueta feminina do Paleolítico Superior, em marfim de mamute, achada em 2008 numa caverna perto de Schelklingen, na Alemanha."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as estatuetas femininas da era glacial chamadas de vênus, qual tem a datação mais recuada, de cerca de quarenta mil anos?",
    "resposta": "Vênus de Hohle Fels",
    "distratores": [
      "Vênus de Willendorf",
      "Vênus de Lespugue",
      "Vênus de Dolní Věstonice"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_of_Hohle_Fels"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_of_Hohle_Fels",
        "situacao": "ok",
        "texto": "The Venus of Hohle Fels (also known as the Venus of Schelklingen; in German variously Venus vom Hohlen Fels, vom Hohle Fels; Venus von Schelklingen) is an Upper Paleolithic Venus figurine made of mammoth ivory that was unearthed in 2008 in Hohle Fels, a cave near Schelklingen, Germany, part of the Caves and Ice Age Art in the Swabian Jura UNESCO World Heritage Site.\n[…]\nWithin a distance of 70 cm (27.6 in) to the Venus figurine, Conard's team also found a flute made from a vulture bone. Additional artifacts excavated from the same cave layer included flint-knapping debris, worked bone, and carved ivory as well as remains of tarpans, reindeer, cave bears, woolly mammoths, and Alpine ibexes.\n[…]\nThe discovery of the Venus of Hohle Fels by the archaeological team led by archaeology professor Nicholas Conard of the University of Tübingen pushed back the date of the oldest known human figurative art, by several millennia, establishing that works of art were being produced throughout the Aurignacian Period.\n[…]\nThe remarkably early figurine was discovered in September 2008 in a cave called Hohle Fels (Swabian German for 'hollow rock') near Schelklingen, some 15 km (9 mi) west of Ulm, Baden-Württemberg, in southwestern Germany. The find was reported by Conard and his team in Nature. The figurine was found in the cave hall, approximately 20 m (66 ft) from the entrance and 3 m (10 ft) below the current ground level.\n[…]\nVenus of Berekhat Ram\n[…]\nVenus of Tan-Tan\n[…]\nVenus of Willendorf\n[…]\nVenus of Dolní Věstonice\n[…]\n\"Venus of Hohle Fels (38,000 - 33,000 BCE)\". Encyclopedia of Art Education (Visual-Arts-Cork).\n[…]\nNeil Patrick (8 Jun 2016). \"The Venus of Hohle Fels is the oldest statue depicting a woman's figure\". The Vintage News.\n[…]\nDon Hitchcock (Don's Maps): \"The Venus of Hohle Fels\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%AAnus_de_Hohle_Fels",
        "situacao": "ok",
        "texto": "A Vênus de Hohle Fels (também conhecida como \"Vênus de Schelklingen\") é uma estatueta de Vênus esculpida em marfim de mamute. Ela foi encontrada em 2008 perto da cidade de  Schelklingen, na Alemanha, e possui cerca de 35.000–40.000 anos de idade, pertencendo, portanto, ao período Paleolítico Inferior associado com Australopitecos, Pithecanthropus erectus, Sinanthropus pekinenses, Paleantropos, Hom\n[…]\nA estatueta é o mais sólido e antigo indício de figurativismo humano pré-histórico já descoberto de arte pré-histórica, perdendo só para a estatueta do Homem-Leão, que é antropomórfica. A Vênus foi examinada em 2011, na Universidade de Tubinga, Alemanha, e na época discutia-se a possibilidade de deixá-la junto com outras descobertas, aos cuidados de um novo museu na região de Suábia, no sul do país. Encontra-se conservada no Museu Pré-Histórico de Blaubeuren (Urgeschichtliches Museum Blaubeuren).\n[…]\nA descoberta da Vênus de Hohle Fels indica que os primeiros seres humanos modernos produziam arte figurativa há mais tempo do que se pensava, e demonstra que várias obras de arte foram produzidas ao longo do Período Aurignaciano.\n[…]\nA estatueta foi encontrada em setembro de 2008, na gruta arqueológica de Hohle Fels (\"rocha oca\" em alemão suábio), perto de Schelklingen, a aproximadamente 15 km a oeste da cidade de Ulm, no estado alemão de Baden-Württemberg, localizado no sudoeste do país. Ela estava a uma distância de 20 metros da entrada da caverna, e a 3 metros abaixo da terra. Também foi encontrada por perto uma flauta de osso que data de 42.000 anos, e é, incontestavelmente, o instrumento mais antigo conhecido até agora.\n[…]\nVênus de Berekhat Ram\n[…]\nVênus de Tan-Tan\n[…]\nVênus de Willendorf",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tesouro de Atreu",
      "descricao": "Grande túmulo micênico em forma de colmeia, de cerca de 1250 a.C., perto de Micenas, na Grécia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que túmulo micênico em forma de colmeia, perto de Micenas, teve por mais de mil anos a maior cúpula do mundo?",
    "resposta": "Tesouro de Atreu (ou Túmulo de Agamenon)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Treasury_of_Atreus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treasury_of_Atreus",
        "situacao": "ok",
        "texto": "The Treasury of Atreus or Tomb of Agamemnon is a large tholos or beehive tomb constructed between 1300 and 1250 BCE in Mycenae, Greece.\n[…]\nThe nearby tombs known as the Tomb of Clytemnestra and Tomb of Aegisthus are so named by association with the Treasury of Atreus.\n[…]\nThe site of Mycenae is situated in Argolis, in the north-eastern Peloponnese, on the eastern edge of the Argive Plain. The Treasury of Atreus is located to the west side of the modern road leading to the citadel, approximately 500 m south-southwest of the Lion Gate.\n[…]\nThe Treasury of Atreus is set alone at the southern edge of a bowl on the Panagia ridge's eastern slope. Prior to its construction, the site was occupied by a building, which was demolished to build the tholos. Michael Boyd has suggested that the tomb's position was intended to 'co-opt the traditions of the past without directly competing with the present', since most contemporary burials were made in chamber tombs further from the acropolis.\n[…]\nIn 1801, Elgin had tasked his draughtsman, Giovanni Battista Lusieri, and Philip Hunt, a chaplain to the British embassy in Greece, to investigate various archaeological sites in Greece with a view to finding antiquities that might be taken back to Britain. Hunt visited Mycenae in August, and reported the Treasury of Atreus as 'a most stupendous conical subterranean building, quite entire, called by some antiquaries the Tomb of Agamemnon, by others the Royal Treasury of Mycenae'.\n[…]\nTreasury of Atreus at Structurae\n[…]\nTreasury of Atreus 360° Interactive virtual tour\n[…]\nA different light inside Treasury of Atreus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tesouro_de_Atreu",
        "situacao": "ok",
        "texto": "O Tesouro de Atreu, também chamado Tumba de Atreu e Tumba de Agamenão, é a tumba abobadada, ou tolo, mais monumental que se conhece em Grécia. Está nas cercanias de Micenas, e a princípio é atribuído a Atreu, o pai do grande rei Agamemnon, cabeça visível da guerra dos aqueus contra Troia, pois que acostuma datar-se no século XIII a.C..\n[…]\nEsta tumba pertence à arte creto-micênica. Segue o modelo difundido por todo o Mediterrâneo de tumba precedida por um corredor. Neste caso, tem duas câmaras, destacando-se a \"falsa abóbada\" da maior delas. Obtém-se mediante fiadas concêntricas de silhares que vão reduzindo o espaço, pelo qual as suas pressões são verticais e não oblíquas, como numa verdadeira abóbada.\n[…]\nOlga, Psychogiou (2012). Treasure of Atreus (em inglês). [S.l.]: Ministry of Culture and Sports. Consultado em 23 de abril de 2019",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Civilização do Vale do Indo",
      "descricao": "Civilização da Idade do Bronze no noroeste do subcontinente indiano, também chamada civilização harappiana, com cidades como Harappa e Mohenjo-daro."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Comparada às civilizações do Egito e da Mesopotâmia da mesma época, em que a civilização do Vale do Indo se destacava?",
    "resposta": "Ocupava a maior área",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation",
        "situacao": "ok",
        "texto": "The Indus Valley Civilisation (IVC), also known as the Indus Civilisation, was a Bronze Age civilisation in the northwestern regions of South Asia, lasting from 3300 BCE to 1300 BCE, and in its mature form from 2600 BCE to 1900 BCE. Together with ancient Egypt, Mesopotamia, and China, it was one of the four centres of the ancient world; it was geographically larger than ancient Egypt and Mesopotam\n[…]\nThe Indus Valley Civilisation is\n[…]\nDuring 4300–3200 BCE of the chalcolithic period (copper age), the Indus Valley Civilisation area shows ceramic similarities with southern Turkmenistan and northern Iran which suggest considerable mobility and trade. During the Early Harappan period (about 3200–2600 BCE), similarities in pottery, seals, figurines, ornaments, etc. document intensive caravan trade with Central Asia and the Iranian plateau.\n[…]\nJudging from the dispersal of Indus Valley Civilisation artefacts, the trade networks economically integrated a huge area, including portions of Afghanistan, the coastal regions of Persia connected by the Gulf of Oman from the Arabian Sea, northern and western India, and Mesopotamia, leading to the development of Indus-Mesopotamia relations. Studies of tooth enamel from individuals buried at Harappa suggest that some residents had migrated to the city from beyond the Indus Valley.\n[…]\nPreviously, scholars believed that the decline of the Harappan civilisation led to an interruption of urban life in the Indian subcontinent. However, the Indus Valley Civilisation did not disappear suddenly, and many elements of the Indus civilisation appear in later cultures. The Cemetery H culture may be the manifestation of the Late Harappan over a large area in the region of Punjab, Haryana and western Uttar Pradesh, and the Ochre Coloured Pottery culture its successor.\n[…]\nHarappa and Indus Valley Civilization at harappa.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Civiliza%C3%A7%C3%A3o_do_Vale_do_Indo",
        "situacao": "ok",
        "texto": "Civilização do Vale do Indo (CVI) foi uma civilização da Idade do Bronze nas regiões noroeste do sul da Ásia, que existiu entre 3 300 a.C. e 1 300 a.C., sendo que atingiu seu auge entre 2600 e 1 900 a.C..\n[…]\nA civilização do Indo era aproximadamente contemporânea das demais civilizações ribeirinhas do mundo antigo: o Egito ao longo do Nilo, Mesopotâmia nas terras regadas pelo Eufrates e Tigre e a China na bacia de drenagem do rio Amarelo. Na época de sua fase madura, a civilização havia se espalhado por uma área maior do que as outras mencionadas, o que incluía um núcleo de 1.500 km acima do plano aluvial do Indo e de seus afluentes.\n[…]\nDurante o período de aproximadamente 1900 a 1 700 a.C., várias culturas regionais surgiram na área da civilização do Vale do Indo. A cultura do Cemitério H estava em Punjabe, Hariana e oeste de Utar Pradexe, a cultura Jucar estava em Sinde e a cultura Rangepur estava em Guzerate. Outros sítios associados à fase tardia da cultura harapeana são Pirak, no Baluchistão, Paquistão, e Daimabad, em Maharashtra, Índia.\n[…]\nAnteriormente, os estudiosos acreditavam que o declínio da civilização harapeana levou a uma interrupção da vida urbana no subcontinente indiano. No entanto, a civilização do vale do Indo não desapareceu repentinamente e muitos de seus elementos aparecem em culturas posteriores. A cultura do Cemitério H pode ser a manifestação do período tardio em uma grande área na região de Punjabe, Hariana e oeste de Utar Pradexe, e a cultura da cerâmica colorida de ocre é sua sucessora.\n[…]\nCivilização védica\n[…]\nHarappa and Indus Valley Civilization at harappa.com\n[…]\nAn invitation to the Indus Civilization (Tokyo Metropolitan Museum)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Civilização do Vale do Indo",
      "descricao": "Civilização da Idade do Bronze no noroeste do subcontinente indiano, também chamada civilização harappiana, com cidades como Harappa e Mohenjo-daro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os pequenos selos de pedra da civilização do Vale do Indo mostram com frequência qual animal fantástico de um só chifre?",
    "resposta": "Unicórnio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation",
      "https://en.wikipedia.org/wiki/Unicorn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation",
        "situacao": "ok",
        "texto": "The Indus Valley Civilisation (IVC), also known as the Indus Civilisation, was a Bronze Age civilisation in the northwestern regions of South Asia, lasting from 3300 BCE to 1300 BCE, and in its mature form from 2600 BCE to 1900 BCE. Together with ancient Egypt, Mesopotamia, and China, it was one of the four centres of the ancient world; it was geographically larger than ancient Egypt and Mesopotam\n[…]\nThe Indus Valley Civilisation is\n[…]\nAccording to archaeological finds, the Indus Valley Civilisation had a diet dominated by meats of animals such as cattle, buffalo, goat, pig and chicken. Remnants of dairy products were also discovered. According to Akshyeta Suryanarayan et al., available evidence indicates culinary practices to be common over the region; food-constituents were dairy products (in low proportion), ruminant carcass meat, and either non-ruminant adipose fats, plants, or mixtures of these products.\n[…]\nThe Harappan language is the unknown language (or languages) of the Indus Valley Civilisation. The Harappan script is yet undeciphered, indeed it has not even been demonstrated to be a writing system, and therefore the language remains unknown.\n[…]\nPreviously, scholars believed that the decline of the Harappan civilisation led to an interruption of urban life in the Indian subcontinent. However, the Indus Valley Civilisation did not disappear suddenly, and many elements of the Indus civilisation appear in later cultures. The Cemetery H culture may be the manifestation of the Late Harappan over a large area in the region of Punjab, Haryana and western Uttar Pradesh, and the Ochre Coloured Pottery culture its successor.\n[…]\nThe inhabitants of the Indus Valley Civilisation migrated from the river valleys of Indus and Ghaggar-Hakra, towards the Himalayan foothills of the Ganga-Yamuna basin.\n[…]\nHarappa and Indus Valley Civilization at harappa.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Unicorn",
        "situacao": "ok",
        "texto": "The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead.\n[…]\nA bovine type unicorn is thought by some scholars to have been depicted on seals of the Bronze Age Indus Valley civilization—an interpretation that remains controversial. An equine form of the unicorn was mentioned by the ancient Greeks in accounts of natural history by various writers, including Ctesias, Strabo, Pliny the Younger, Aelian, and Cosmas Indicopleustes. Some versions of re'em, a word appearing in the Hebrew Bible (in, e.g., Psalm 92:11 and Deuteronomy 33:17), are rendered as unicorn.\n[…]\nA creature with a single horn, conventionally called a unicorn, is the most common image on the soapstone stamp seals of the Bronze Age Indus Valley civilization, from the centuries around 2000 BC. It has a body more like a cow than a horse, and a curved horn that goes forward, then up at the tip. The mysterious feature depicted coming down from the front of the back is usually shown; it may represent a harness or other covering.\n[…]\nIn South Asia, the unicorn is only seen during the Indus Valley period, and disappeared in South Asian art after this. Jonathan Mark Kenoyer stated the Indus Valley \"unicorn\" has no \"direct connection\" with later unicorn motifs observed in other parts of the world; nonetheless, it remains possible that the Indus Valley unicorn had contributed to later myths of fantastical one-horned creatures in West Asia.\n[…]\nUnicorn meat was said to be too bitter to eat.\n[…]\nOkapi (real animal once known as \"African unicorn\")\n[…]\nWinged unicorn\n[…]\nDavid Badke, The Medieval Bestiary: Unicorn"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Civiliza%C3%A7%C3%A3o_do_Vale_do_Indo",
        "situacao": "ok",
        "texto": "Civilização do Vale do Indo (CVI) foi uma civilização da Idade do Bronze nas regiões noroeste do sul da Ásia, que existiu entre 3 300 a.C. e 1 300 a.C., sendo que atingiu seu auge entre 2600 e 1 900 a.C..\n[…]\nUma divindade humana com chifres, cascos e cauda de um touro também aparece nos selos, em particular em uma cena de luta com um animal com chifres de tigre. Essa divindade foi comparada ao Enkidu meopotâmico. Vários selos também mostram um homem lutando com dois leões ou tigres, um motivo de \"mestre dos animais\" comum às civilizações do oeste e do sul da Ásia.\n[…]\nDurante 4300–3 200 a.C., no período calcolítico (idade do cobre), a área da Civilização do Vale do Indo mostra semelhanças cerâmicas com o sul do Turquemenistão e o norte do Irã, o que sugere considerável mobilidade e comércio. Durante o período inicial (ca. 3200–2600 a.C.), semelhanças em cerâmica, selos, estatuetas, ornamentos, etc, documentam o intenso comércio de caravanas com a Ásia Central e o planalto iraniano.\n[…]\nUm selo do Vale do Indo mostra uma figura sentada com um toucado com chifres, possivelmente tricefálico e possivelmente fálico, cercado por animais. Marshall identificou a figura como uma forma primitiva do deus hindu Shiva (ou Rudra), associado ao ascetismo, ioga e linga; considerado como um senhor de animais e frequentemente descrito como tendo três olhos. O selo passou a ser conhecido como o Selo Pashupati, por conta de Pashupati (senhor de todos os animais), um epíteto de Shiva.\n[…]\nDavid Gordon White cita três outros estudiosos tradicionais que \"demonstraram enfaticamente\" que a religião védica deriva parcialmente das Civilizações do Vale do Indo.\n[…]\nHarappa and Indus Valley Civilization at harappa.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Língua hitita",
      "descricao": "Língua indo-europeia falada pelos hititas na Anatólia durante a Idade do Bronze, escrita em cuneiforme."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na família indo-europeia, a mesma do português, qual língua antiga tem os registros escritos mais antigos?",
    "resposta": "Hitita",
    "distratores": [
      "Latim",
      "Sânscrito",
      "Grego"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hittite_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hittite_language",
        "situacao": "ok",
        "texto": "Hittite, also known as Nesite, is an extinct Indo-European language formerly spoken in Anatolia during the Bronze Age. The language is attested in cuneiform texts, primarily from the archives of the city of Hattusa, between the 17th century BC to the 13th century BC. Isolated Hittite words and personal names appear in Old Assyrian documents in Kanesh from as early as the 20th century BC, making it\n[…]\nUnlike most other Indo-European languages, Hittite does not distinguish between masculine and feminine grammatical gender, and it lacks subjunctive and optative moods as well as aspect. Various hypotheses have been formulated to explain these differences.\n[…]\nThe verbal morphology is less complicated than for other early-attested Indo-European languages like Ancient Greek and Vedic. Hittite verbs inflect according to two general conjugations (mi-conjugation and hi-conjugation), two voices (active and medio-passive), two moods (indicative mood and imperative), two aspects (perfective and imperfective), and two tenses (present and preterite). Verbs have two infinitive forms, a verbal noun, a supine, and a participle.\n[…]\nAfter a brief initial delay because of disruption during the First World War, Hrozný's decipherment, tentative grammatical analysis and demonstration of the Indo-European affiliation of Hittite were rapidly accepted and more broadly substantiated by contemporary scholars such as Edgar H. Sturtevant, who authored the first scientifically acceptable Hittite grammar with a chrestomathy and a glossary. The most up-to-date grammar of the Hittite language is currently Hoffner and Melchert (2008).\n[…]\nHittitology\n[…]\nHittite basic lexicon at the Global Lexicostatistical Database\n[…]\nA video introduction to Hittite at glottothèque – Ancient Indo-European Grammars online, an online collection of introductory videos to Ancient Indo-European languages produced by the University of Göttingen"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_hitita",
        "situacao": "ok",
        "texto": "O hitita (neshili) era a língua falada pelos hititas, povo que formou um império centrado na antiga Hatusa (moderna Boğazköy), no centro-norte da Anatólia (atual Turquia). A língua foi falada desde aproximadamente 1 600 a.C. (e provavelmente antes) até 1 100 a.C. Há alguma atestação de que o hitita e idiomas relacionados continuaram sendo falados na Anatólia durante algumas centenas de anos após o\n[…]\nO hitita é a mais antiga língua indo-europeia atestada. Devido a diferenças notáveis na sua estrutura e fonologia, alguns dos primeiros filólogos, mais notadamente Warren Cowgill, argumentaram que ela deveria ser classificada como língua-irmã das línguas indo-europeias, e não como língua-filha.\n[…]\nNas línguas hitita e luvita há muitas palavras emprestadas, particularmente vocabulário religioso, das línguas não-indo-europeias hurrita e hatita. O hatita foi a língua do hatitas, habitantes locais da terra de Hati antes de serem absorvidos ou deslocados pelo hititas. Os textos hititas sagrados e mágicos muitas vezes eram escritos em hatita, hurrita e acádio, mesmo após o hitita ter se tornado a norma para outros escritos.\n[…]\nA preservação das laringais e a falta de qualquer evidência de que o hitita tenha compartilhado características gramaticais possuídas por outras línguas indo-europeias antigas levaram alguns filólogos a acreditar que as línguas anatólias se separaram das restantes do proto-indo-europeu muito antes das outras divisões da proto-língua. Alguns propuseram uma família ou superfamília linguística \"indo-hitita\", que incluiria as demais indo-europeias de um lado e as anatólias do outro.\n[…]\nComo uma das mais antigas línguas indo-europeias atestadas, o hitita é alvo de interesse basicamente porque carece de várias características gramaticais exibidas por outras línguas indo-europeias \"antigas\" como o lituano, o sânscrito e o grego.\n[…]\nEscrita Hitita em “omniglot.com”",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Enheduanna",
      "descricao": "Sacerdotisa de Ur e filha do rei Sargão da Acádia, do século vinte e três a.C., autora de hinos sumérios."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes poetas da Antiguidade, todos com obras preservadas, viveu primeiro?",
    "resposta": "Enheduanna",
    "distratores": [
      "Homero",
      "Hesíodo",
      "Safo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enheduanna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enheduanna",
        "situacao": "ok",
        "texto": "Enheduanna (Sumerian: 𒂗𒃶𒌌𒀭𒈾 Enḫéduanna, also transliterated as Enheduana, En-he2-du7-an-na, or variants; fl. c. 2300 BCE) was the entu (high) priestess of the moon god Nanna (Sīn) in the Sumerian city-state of Ur in the reign of her father, Sargon of Akkad (r. c. 2334 – c. 2279 BCE). She was likely appointed by her father as the leader of the religious group at Ur to cement ties between the Akkadi\n[…]\nit might be reasonable to accept a claim for (Enheduanna)'s authorship or editorship\" for only Hymn 42, the final hymn in the collection.\n[…]\nThe two hymns dedicated to Nanna are labeled by Westenholz as Hymn of Praise to Ekisnugal and Nanna on [the] Assumption of En-ship (incipit e ugim e-a) and Hymn of Praise of Enheduanna (incipit lost). The second hymn is very fragmentary.\n[…]\nIn 1976, American anthropologist Marta Weigle introduced Enheduanna to an audience of feminist scholars as \"the first known author in world literature\" with her introductory essay \"Women as Verbal Artists: Reclaiming the Sisters of Enheduanna\".\n[…]\nEnheduanna has also been analyzed as an early rhetorical theorist. Roberta Binkley finds evidence in The Exaltation of Inanna of invention and classical modes of persuasion. Hallo, building on the work of Binkley, compares the sequence of the Hymn to Inanna, Inanna and Ebih, and the Exaltation of Inanna to the biblical Book of Amos, and considers these both evidence of \"the birth of rhetoric in Mesopotamia.\"\n[…]\nEnheduanna (crater)\n[…]\n\"Enheduanna: The world's first named author\". BBC Culture. 25 October 2022. Retrieved 28 October 2022.\n[…]\nEnglish Translations of works attributed to Enheduanna at the Electronic Text Corpus of Sumerian Literature\n[…]\nArtifacts depicting Enheduanna\n[…]\nDisk of Enheduanna in the Penn Museum Collections Database\n[…]\nSpotlight on the Disk of Enheduanna Archived 9 December 2023 at the Wayback Machine (Penn Museum Blog)\n[…]\nDisk of Enheduanna\n[…]\nSeal of Enheduanna"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enheduana",
        "situacao": "ok",
        "texto": "Enheduana (acádio: 𒂗𒃶𒁺𒀭𒈾) também transliterado como Enheduana, En-hedu-ana, e suas variantes foi uma poeta e filósofa suméria, filha do rei Sargão da Acádia. Foi eleita alta sacerdotisa do deus lunar Nana na cidade suméria de Ur. Seu nome é composto pelas palavras \"en\", que significa \"alta sacerdotisa\"; a palavra \"heduana\" é um epíteto poético para a Lua (algo como \"adorno do céu\"), mas que também\n[…]\nEnheduana deixou um grande legado literário, definitivamente escrito por ela, que inclui textos devotados à deusa Inana e uma coleção de hinos conhecido como Hinos Sumérios do Templo. É conhecida por ser uma das primeiras autoras e poetas de nome conhecido e atribuído na história.\n[…]\nEnheduana compôs 42 hinos dirigidos aos templos por toda a Suméria e Acádia, incluindo Eridu, Sipar e Esnuna. Os textos foram reconstruídos com base em 37 placas de argila de Ur e Nippur, a maioria datando dos Antigos Períodos babilônicos e de Ur III. A coleção, conhecida como \"Os Hinos Sumérios do Templo\" foram os primeiros deste tipo. Enheduana assim declama:\n[…]\nGrande parte dos trabalhos de Enheduana está disponível com tradução para a língua inglesa no Electronic Text Corpus of Sumerian Literature, tendo sido traduzidos pelo especialista em povos sumérios, Samuel Noah Kramer e pela poeta Diane Wolkstein, no livro Inana, Rainha dos Céus e da Terra: suas histórias e hinos da Suméria, publicado em 1983.\n[…]\nNin-me-šara, \"A Exaltação de Inana\", 153 linhas, editado e traduzido primeiro por Hallo and van Dijk (1968), depois por Annette Zgoll (1997) em alemão. As primeiras 65 linhas se dirigem à deusa com uma lista de epítetos, comparando-a Anu, deus supremo do panteão sumério. Depois, Enheduana fala em primeira pessoa, expressando sua infelicidade por ter sido exilada do templo e das cidades de Ur e Uruk. Ela clama pela providência de Nana para que retorne ao templo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Múmias Chinchorro",
      "descricao": "Corpos mumificados artificialmente pela cultura Chinchorro, de pescadores do litoral do deserto do Atacama, no norte do Chile e sul do Peru."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "As múmias da cultura Chinchorro, do deserto do Atacama, são cerca de dois mil anos mais antigas que as de qual povo famoso?",
    "resposta": "Egípcios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinchorro_mummies"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinchorro_mummies",
        "situacao": "ok",
        "texto": "The Chinchorro mummies are naturally and artificially preserved human remains associated with the Chinchorro culture, an Indigenous people who lived along the Pacific coast of what is now northern Chile and southern Peru. The oldest known naturally preserved Chinchorro individual dates to about 7020 BCE, while deliberate mummification began by about 5050 BCE, making the Chinchorro mummies the olde\n[…]\nThe exceptional preservation of the remains reflects both the hyper-arid environment of the Atacama Desert and the methods the Chinchorro used to prepare their dead. As a result, archaeologists have been able to examine both naturally and artificially preserved individuals in exceptional detail.\n[…]\nScientific study has shown that Chinchorro mortuary practices developed over more than 5,000 years. The earliest known naturally preserved individual associated with the culture, known as Acha Man, died around 7020 BCE. His body was preserved by the hyper-arid conditions of the Atacama Desert.\n[…]\nAfter surviving for about 7,000 years in the extremely dry Atacama Desert, some Chinchorro mummies have begun to deteriorate under modern storage conditions. A 2016 study reported increasingly rapid damage during the previous decade among mummies held at the University of Tarapacá in Arica, northern Chile. Areas of preserved skin had darkened and begun to ooze.\n[…]\nOf the 282 Chinchorro mummies found to date, 29% of them were results of the natural mummification process (7020–1300 BCE). In northern Chile, environmental conditions greatly favor natural mummification. The soil is very rich in nitrates which, when combined with other factors such as the aridity of the Atacama Desert, ensure organic preservation. Salts halt bacterial growth; the hot, dry conditions facilitate rapid desiccation, evaporating all bodily fluids of the corpses.\n[…]\nChinchorro and other mummies\n[…]\nCultura Chinchorro Momias Chinchorro"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Caverna Chauvet",
      "descricao": "Caverna no sul da França com algumas das pinturas rupestres mais antigas conhecidas, descoberta em 1994."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao contrário de outras cavernas, a Chauvet, na França, tem muitas pinturas de animais perigosos, como leões, ursos e qual animal de chifre no focinho?",
    "resposta": "Rinoceronte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chauvet_Cave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chauvet_Cave",
        "situacao": "ok",
        "texto": "The Chauvet-Pont-d'Arc Cave (French: Grotte Chauvet-Pont d'Arc [ɡʁɔt ʃovɛ pɔ̃ daʁk]) in the Ardèche department of southeastern France is a cave that contains some of the best-preserved figurative cave paintings in the world, as well as other evidence of Upper Paleolithic life. It is located near the commune of Vallon-Pont-d'Arc on a limestone cliff above the former bed of the river Ardèche, in the\n[…]\nCaverne du Pont-d'Arc (Grotte Chauvet 2), a facsimile of Chauvet Cave on the model of the so-called \"Faux Lascaux\", was opened to the general public on 25 April 2015. It is the largest cave replica ever built worldwide, ten times bigger than the Lascaux facsimile. The art is reproduced full-size in a condensed replica of the underground environment, in a circular building above ground, a few kilometres from the actual cave.\n[…]\nChauvet, Jean-Marie; Eliette Brunel Deschamps; Christian Hillaire (1996). Dawn of Art: The Chauvet Cave. Paul G. Bahn (Foreword), Jean Clottes (Epilogue). New York: Harry N. Abrams. ISBN 0-8109-3232-6.; UK edition. Chauvet Cave: The Discovery of the World's Oldest Paintings (Thames & Hudson, 1996). English translation by Paul G. Bahn from the French edition La Grotte Chauvet.\n[…]\nClottes, Jean (2003b). Chauvet Cave: The Art of Earliest Times. Paul G. Bahn (translator). University of Utah Press. ISBN 0-87480-758-1. Translation of La Grotte Chauvet, l'art des origins, Éditions du Seuil, 2001.\n[…]\nThe Cave of Chauvet-Pont-d'Arc French Ministry of Culture information site; includes an interactive map with photos.\n[…]\nAncient Grand Masters: Chauvet Cave, France A brief article by Jean Clottes of the French Ministry of Culture, responsible for overseeing the authentication of the contents and art of the cave\n[…]\nChauvet Cave (ca. 30,000 b.c.) on the Metropolitan Museum of Art's Timeline of Art History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_de_Chauvet",
        "situacao": "ok",
        "texto": "A Caverna de Chauvet ou Chauvet-Pont-d'Arc está localizada ao sul da França. Tornou-se famosa em 1994 quando um trio de espeleólogos descobriu que ela continha os restos fossilizados de muitos animais, incluindo alguns já extintos. Mais importante que isso, descobriram que as paredes da caverna são ricamente decoradas com pinturas rupestres. Junto com Lascaux, Serra da Capivara e a Caverna de Alta\n[…]\nAs gargantas da região de Ardèche têm numerosas cavernas, muitas com importância geológica ou arqueológica. Entretanto a caverna de Chauvet é incaracteristicamente longa e a quantidade, qualidade e o estado de conservação das pinturas encontradas em suas paredes tem sido chamado de espetacular.\n[…]\nParece ter sido ocupada por humanos em dois diferentes períodos. A maior parte das pinturas é do mais antigo (30.000 a 32.000 anos). A última ocupação  (25.000 a 27.000 anos) deixou poucas marcas, como a impressão de um pé de criança, restos de fogueiras e a fuligem das tochas usadas para clarear mas que enfumaçou as pinturas. A caverna ganhou esse nome por seu descobridor, Jean-Marie Chauvet, que a descobriu em 18 de dezembro de 1994, juntamente com Christian Hillaire e Eliette Brunel-Deschamps.\n[…]\nForam catalogadas 435 pinturas de animais, descrevendo treze diferentes espécies, incluindo algumas que pouco ou nunca tinham sido encontradas em sítios equivalentes. Leões, panteras, ursos, aves predadoras parecidas com corujas, rinocerontes e hienas, além das espécies mais comuns, como cavalos, bovídeos e veados.\n[…]\nTipicamente, como em outras cavernas, não existem figuras humanas completas. Nas paredes da caverna também podem ser vistas cerca de dez mãos em representações negativas e positivas, além de desenhos do sexo de mulheres. Pegadas de ursos no solo da gruta indicam que esses animais provavelmente hibernavam na caverna.\n[…]\n«Site sobre a caverna feito pelo Minisitério de Cultura da França»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Skara Brae",
      "descricao": "Aldeia neolítica de pedra nas ilhas Órcadas, na Escócia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas ilhas Órcadas quase não havia árvores. De que eram feitos as camas, os armários e as prateleiras das casas neolíticas de Skara Brae?",
    "resposta": "Pedra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Skara_Brae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Skara_Brae",
        "situacao": "ok",
        "texto": "Skara Brae () is a stone-built Neolithic settlement located along the Bay of Skaill on the west coast of Mainland, Orkney. The site was discovered following a storm  exposing the presence of stone structures within the coastal sand dunes. Today, ten structures and four passageways are visible, as well as the remains of stone furniture and fixtures.\n[…]\n\"The Heart of Neolithic Orkney\" was inscribed as a World Heritage site in December 1999. In addition to Skara Brae the site includes Maeshowe, the Ring of Brodgar, the Standing Stones of Stenness and other nearby sites. It is managed by Historic Environment Scotland, whose \"Statement of Significance\" for the site begins:\n[…]\nThe monuments at the heart of Neolithic Orkney and Skara Brae proclaim the triumphs of the human spirit in early ages and isolated places. They were approximately contemporary with the mastabas of the archaic period of Egypt (first and second dynasties), the brick temples of Sumeria, and the first cities of the Harappa culture in India, and a century or two earlier than the Golden Age of China.\n[…]\nIn 2019, a risk assessment was performed to assess the site's vulnerability to climate change. The report by Historic Environment Scotland, the Orkney Islands Council and others concludes that the entire Heart of Neolithic Orkney World Heritage Site, and in particular Skara Brae, is \"extremely vulnerable\" to climate change due to rising sea levels, increased rainfall and other factors; it also highlights the risk that Skara Brae could be partially destroyed by one unusually severe storm.\n[…]\nIn Kim Stanley Robinson's 1991 novelette A History of the Twentieth Century, with Illustrations, the main character visits Skara Brae and other Neolithic sites in the Orkney Islands during a journey undertaken to gain perspective on the violent history of the twentieth century."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Skara_Brae",
        "situacao": "ok",
        "texto": "Skara Brae [ˈskærə ˈbreɪ] é um assentamento neolítico, situado na Baía de Skaill, a maior das ilhas Órcades. É composto por dez casas agrupadas que foram habitadas aproximadamente entre 3180 a 2500 AEC. Skara Brae é a aldeia neolítica mais completa e bem preservada do norte da Europa, tendo sido eleita como património mundial pela UNESCO, como um dos locais que constituem o \"Coração Neolítico das \n[…]\nTendo em conta a falta de madeira julga-se que os telhados fossem feitos com as costelas de baleias, cobertas com peles de animais e depois colocada vegetação em cima para uma melhor protecção contra o clima severo. Nas casas as lajes de pedra serviam de mobília tanto para criar prateleiras, arcas e camas que depois eram cheias com vegetação e pele de animais. Esta povoação foi abandonada por volta de 2500 a.C. a mudança de clima tornando-se mais frio e úmido terá sido a razão do abandono.\n[…]\nA povoação de Skara Brae foi construída na ilha principal de Orkney, a população neolítica utilizou uma alternativa á rara madeira da área para construir a povoação: Placas de pedra. Isto permitiu um vislumbre sobre o que seria uma casa neolítica. No centro da ilha temos uma série de depressões criadas por um monte de lixo, que foram aproveitadas para a construção de oito casas, todas feitas de pedra, com um comprimento entre os 4 e os 6 metros numa área rectangular com um forno central.\n[…]\nTendo em conta a falta de madeira julga-se que os telhados fossem feitos com as costelas de baleias, cobertas com peles de animais e depois colocada vegetação em cima para uma melhor protecção contra o clima severo. Nas casas as lajes de pedra serviam de mobília tanto para criar prateleiras, arcas e camas que depois eram cheias com vegetação e pele de animais. Esta povoação foi abandonada por volta de 2500 a.C. a mudança de clima tornando-se mais frio e úmido terá sido a razão do abandono.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Sambaqui",
      "descricao": "Monte artificial pré-histórico de conchas e restos, comum no litoral brasileiro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos sambaquis do litoral sul do Brasil, arqueólogos acharam esculturas de pedra polida em forma de peixes e aves. Que nome elas recebem?",
    "resposta": "Zoólitos",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sambaqui",
      "https://pt.wikipedia.org/wiki/Zo%C3%B3lito"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sambaqui",
        "situacao": "ok",
        "texto": "Os sambaquis (português brasileiro) ou concheiros (português europeu) são depósitos construídos pelo homem, constituídos por materiais orgânicos e calcários que, empilhados ao longo do tempo, vêm sofrendo a ação das intempéries. Similares a um tel, acabaram por sofrer uma fossilização química, já que a chuva deforma as estruturas dos moluscos e dos ossos enterrados, difundindo o cálcio em toda a e\n[…]\nNo Brasil, no meio acadêmico são comuns as denominações \"população sambaquieira\", \"sociedade sambaquieira\" e \"povo sambaquieiro\" para aqueles que habitavam e construíram os sambaquis.\n[…]\nNo século XIX, esses monumentos pré-históricos foram visitados pelo Imperador dom Pedro II, que por eles se encantou. No século XX, foram alvos de estudos por parte da Universidade de São Paulo e atraíram a atenção de Paul Rivet, o diretor do Museu do Homem, e \"pai\" da moderna antropologia americana. No litoral sul do Brasil, foram estudados pelo arqueólogo João Alfredo Rohr, diretor do Museu do Homem do Sambaqui, em Florianópolis (SC).\n[…]\nHoje, os sítios mais importantes estão localizados no litoral sul do estado de Santa Catarina. As cidades de Laguna e Jaguaruna abrigam 42 sambaquis dos mais diversos tamanhos e alturas, destacando-se entre eles o Garopaba do Sul e o Jabuticabeira, (em Jaguaruna); e os Figueirinha I e II, mais precisamente na praia de Nova Camboriú (também em Jaguaruna).\n[…]\nO Sambaqui de Cananeia, localizado na Ilha do Cardoso, em Cananéia, no litoral do Estado de São Paulo, é um dos mais antigos do Brasil, com cerca de 8 mil anos (DIDONÊ, Revista Nova Escola, maio, 2008).\n[…]\nOs concheiros algarvios.\n[…]\nNa América do Norte, foram encontrados \"sambaquis\" bem menores — às vezes com menos de dois metros de altura — e com o objetivo de traçar desenhos no terreno que só podem ser vistos do alto. A maior frequência desses sítios arqueológicos registra-se na fronteira dos Grandes Lagos."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zo%C3%B3lito",
        "situacao": "ok",
        "texto": "Zoólito é um artefato arqueológico construído em pedra, cuja aparência se assemelha à um animal. Daí a origem do nome (zoo=animal, e lito=pedra). Geralmente são produzidos por culturas pré-históricas, como os povos sambaquieiros do Brasil.\n[…]\nO termo é empregado à objetos arqueológicos que facilmente se assemelham a animais, mas também à outros objetos cuja referência à forma de animal é mais difícil de conceber, tendo uma forma mais geométrica ou abstrata. O termo também inclui objetos que se assemelham à figura humana, embora o termo correto para este tipo de artefato seja antropólito.\n[…]\nAs primeiras ferramentas, artefatos produzidos pela humanidade eram objetos de pedra que utilizavam para atividades como cortar, raspar, moer, quebrar semente, para triturar e também para sua defesa. Entre os artefatos mais comuns, estão as lâminas de machado, os raspadores, os furadores, e as lascas, pontas e fragmentos que restavam da preparação destes artefatos.\n[…]\nOs achados mais notáveis estão na América do Sul, principalmente no Brasil, onde foram encontrados zoolitos em forma de peixe e outros animais, principalmente nos sítios arqueológicos de sambaquis.\n[…]\nNa galeria abaixo, constam alguns zoólitos ora exibidos no Museu Nacional do Rio de Janeiro"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Parque Nacional da Serra da Capivara",
      "descricao": "Parque nacional no sudeste do Piauí, com milhares de pinturas rupestres pré-históricas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Parque Nacional da Serra da Capivara, no Piauí, um sítio arqueológico célebre tem o nome de um paredão com um enorme buraco natural. Qual?",
    "resposta": "Boqueirão da Pedra Furada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pedra_Furada",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pedra_Furada",
        "situacao": "ok",
        "texto": "Pedra Furada (Portuguese pronunciation: [ˈpɛdɾɐ fuˈɾadɐ], meaning pierced rock) is an important collection of over 800 archaeological sites in the state of Piauí, Brazil. These include hundreds of rock paintings dating from circa 12,000 years before present.\n[…]\nIn 1991, Pedra Furada became a World Heritage Site.\n[…]\nGuidon established 15 distinct levels, classified in three cultural phases, called Pedra Furada, that includes the oldest remains; and Serra Talhada, from 12,000 to 7,000 BP, with tools such as knives, scrapers, flakes used \"as is\" or with some retouch and lithic cores, all made of quartz or quartzite. Third is Agreste late phase. The site also has hundreds of rock paintings dated from 5,000 to 11,000 years ago.\n[…]\nAs of 2014 the nearby site of Sitio do Meio has been excavated over the years. Although not as old, it helps to support and clarify the chronology of Pedra Furada. The lithics at Sitio do Meio are better preserved.\n[…]\nAmericans should excavate more and write less.\" French palaeolithic archaeologist Jacques Pelegrin, believes there is a possibility for natural processes creating flaked stones that could mimic the Pedra Furada specimens because of their simplicity, but he finds this very unlikely in this case because of continuous human presence in the site.\n[…]\nCaverna da Pedra Pintada\n[…]\nAIMOLA, Giulia et al. Final Pleistocene and Early Holocene at Sitio do Meio, Piauí, Brazil: Stratigraphy and comparison with Pedra Furada. Journal of Lithic Studies, [S.l.], v. 1, n. 2, p. 5-24, September. 2014. ISSN 2055-0472. Available at: <https://journals.ed.ac.uk/lithicstudies/article/view/1125/1631>. Date accessed: 16 April 2016 doi:10.2218/jls.v1i2.1125\n[…]\nThe rock art of Pedra Furada bradshawfoundation.com\n[…]\nSerra Da Capivara on Pinterest.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara",
        "situacao": "ok",
        "texto": "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza que ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias, todos localizados no estado do Piauí. Esta área tem a maior e mais antiga concentração de sítios pré-históricos da América. Estudos científicos confirmam que a cadeia montanhosa de Capivara\n[…]\nO Parque Nacional Serra da Capivara se localiza no Estado do Piauí, ao Sudeste do Estado. Existem atualmente cerca de 400 sítios arqueológicos catalogados onde foram encontrados artefatos líticos, esqueletos humanos e  pinturas rupestres. No sítio Toca do Boqueirão da Pedra Furada, 63 datações por carbono-14 (C-14) permitiram o estabelecimento de uma coluna cronoestratigráfica que vai de 59 000 até 5 000 anos AP. Numerosas pinturas rupestres se encontram na área.\n[…]\nOcre vermelho utilizado para desenhar nas rochas foi encontrado em camadas com datações de entre 17 000 e 25 000 anos AP. Recentes trabalhos no pedestal do Boqueirão da Pedra Furada e no local ao ar livre próximo do Vale da Pedra Furada têm produzido mais evidências para a ocupação humana que se estende por mais de 20.000 anos, argumento é apoiado por uma série de datações por C-14 e OSL (luminescência estimulada opticamente), e pelo análise técnica do conjunto de ferramentas de pedra.\n[…]\nNo início de 2017 o Museu do Homem Americano passou a ser de responsabilidade do comitê permanente de acompanhamento e gestão do Parque Nacional da Serra da Capivara, um modelo de gerenciamento compartilhado instituído pelo governo do estado do Piauí e pelo Ministério da Cultura.\n[…]\nSerra da Capivara (Território do Piauí)\n[…]\nParque Nacional Serra da Capivara - PI - Portal Brasil\n[…]\nParque Nacional Serra da Capivara - Instituto do Patrimônio Artístico e Histórico Nacional\n[…]\nParque Nacional da Serra da Capivara - Fotorreportagem Olhar sobre o Mundo"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Zigurate",
      "descricao": "Templo mesopotâmico em forma de torre com terraços em degraus."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Sem pedra em abundância, os povos da Mesopotâmia ergueram os zigurates, templos em degraus, principalmente com que material?",
    "resposta": "Tijolos de barro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ziggurat",
      "https://pt.wikipedia.org/wiki/Zigurate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ziggurat",
        "situacao": "ok",
        "texto": "A ziggurat ( ); Cuneiform: 𒅆𒂍𒉪, is a type of massive structure built in ancient Mesopotamia and Iran. It has the form of a terraced compound of successively receding stories or levels. Notable ziggurats include the Great Ziggurat of Ur near Nasiriyah, the Ziggurat of Aqar Quf near Baghdad, the no longer extant Etemenanki in Babylon, Chogha Zanbil in Khūzestān and Sialk.\n[…]\nIn the present state of our knowledge it seems reasonable to adopt as a working hypothesis the suggestion that the ziggurats developed out of the earlier temples on platforms and that small shrines stood on the highest stages ...\n[…]\nAn example of a simple ziggurat is the White Temple of Uruk, in ancient Sumer. The ziggurat itself is the base on which the White Temple is set. Its purpose is to get the temple closer to the heavens, and provide access from the ground to it via steps. The Mesopotamians believed that these pyramid temples connected heaven and earth. In fact, the ziggurat at Babylon was known as Etemenanki, which means \"House of the foundation of heaven and earth\" in Sumerian.\n[…]\nThe biblical account of the Tower of Babel has been associated by modern scholars to the massive construction undertakings of the ziggurats of Mesopotamia, and in particular to the ziggurat of Etemenanki in Babylon in light of the Tower of Babel Stele describing its restoration by Nebuchadnezzar II.\n[…]\nAccording to some historians the design of Egyptian pyramids—especially the stepped designs of the oldest pyramids (Pyramid of Zoser at Saqqara, 2600 BCE)—may have been an evolution from the ziggurats built in Mesopotamia. Others say the Pyramid of Zoser and the earliest Egyptian pyramids may have been derived locally from the bench-shaped mastaba tomb.\n[…]\nCategory:Ziggurat style modern architecture\n[…]\nUNESCO Heritage site for Choqa Zanbil ziggurat, Iran.\n[…]\nArticle on the status of Sialk ziggurat, Iran."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zigurate",
        "situacao": "ok",
        "texto": "O zigurate é uma forma de templo, criada pelos sumérios e comum para os babilônios, assírios e acádios, pertinente à época do antigo vale da Mesopotâmia e construído na forma de pirâmides terraplanadas. O formato era o de vários andares construídos um sobre o outro, com o diferencial de cada andar possuir área menor que a plataforma inferior sobre a qual foi construído — as plataformas poderiam se\n[…]\nO zigurate era construído com um núcleo de tijolo de barro e um exterior coberto com tijolo cozido. Não tinha câmaras internas e tinha um formato quadrangular ou retangular, com média de 170 pés (50 metros) quadrados ou 125 × 170 pés (40 × 50 metros) na base.\n[…]\nOs exemplos mais antigos de zigurates datam do final do terceiro milênio a.C., enquanto os mais recentes, do século VI a.C., e alguns dos exemplos mais notáveis dessas estruturas incluem as ruínas na cidade de Ur e de Corsabade na Mesopotâmia.\n[…]\nUm exemplo de zigurate mais simples é o do Templo Branco de Uruque, na antiga Suméria, que deve ter sido construído por volta de 3200-3 000 a.C.. O próprio zigurate é a base sobre o qual o Templo Branco repousa, e sua função é trazer o templo mais próximo aos céus, de forma que pudesse prover acesso desde o solo até lá, por meio de degraus — a estrutura teria a função, portanto, de uma ponte entre os dois mundos.\n[…]\nÉ sabido que havia três escadarias que levavam ao templo, e diz-se que duas delas ascendiam apenas até a metade da altura do zigurate.\n[…]\nO nome sumério para a estrutura era Etemenanki, palavra que significa \"A Fundação do Céu e da Terra.\" Provavelmente construído sob as ordens de Hamurabi, averiguou-se que o centro do zigurate de Marduque continha restos de outros zigurates e estruturas mais antigas. O estágio final consistia dum encaixamento de 15 metros de tijolos reforçados construído pelo monarca Nabucodonosor I.\n[…]\nZigurate de Ur"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Vênus de Dolní Věstonice",
      "descricao": "Estatueta feminina de cerâmica do Gravetiano, achada em Dolní Věstonice, na atual República Tcheca."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Vênus de Dolní Věstonice, estatueta de cerca de trinta mil anos, é um dos objetos mais antigos do mundo feitos de qual material?",
    "resposta": "Cerâmica (argila cozida)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_of_Doln%C3%AD_V%C4%9Bstonice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_of_Doln%C3%AD_V%C4%9Bstonice",
        "situacao": "ok",
        "texto": "The Venus of Dolní Věstonice (Czech: Věstonická venuše) is a Venus figurine, a ceramic statuette of a nude female figure dated to 31,000–27,000 years ago (Gravettian industry). It was found at the Paleolithic site Dolní Věstonice south of Brno, in the base of Děvín mountain in what is today the Czech Republic. This figurine and a few others from locations nearby are the oldest known ceramic articl\n[…]\nThe palaeolithic settlement of Dolní Věstonice in Moravia, a part of Czechoslovakia at the time organized excavation began, now located in the Czech Republic, has been under systematic archaeological research since 1924, initiated by Karel Absolon. In addition to the Venus figurine, figures of animals – bear, lion, mammoth, horse, fox, rhino, and owl – and more than 2,000 balls of burnt clay have been found at Dolní Věstonice.\n[…]\nIts firing likely used a communal hearth designed to reach temperatures between 500°C and 800°C. This process induced a permanent alteration in the loess-bone mixture, resulting in a hardened, water-resistant ceramic. The archaeological context at Dolní Věstonice suggests that firing may have served a ritualistic or \"performance\" function; thousands of ceramic fragments found at the site appear to have been intentionally thermal-shocked to cause them to shatter in the fire.\n[…]\nVenus of Hohle Fels\n[…]\nVenus of Petřkovice\n[…]\nVenus of Willendorf\n[…]\nNational Geographic Society. Wonders of the Ancient World; National Geographic Atlas of Archaeology, Norman Hammond, Consultant, Nat'l Geogr. Soc., (Multiple Staff authors), (Nat'l Geogr., R.H.Donnelley & Sons, Willard, OH), 1994, 1999, Reg or Deluxe Ed., 304 pgs. Deluxe ed. photo (pg 248): \"Venus, Dolni Věstonice, 24,000 B.C.\"  In section titled: The Potter's Art, pp. 246–253.\n[…]\nPictures of Venus and other ceramic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%AAnus_de_Doln%C3%AD_V%C4%9Bstonice",
        "situacao": "ok",
        "texto": "A Vênus de Dolní Věstonice (em tcheco: Věstonická Venuše) é uma estatueta de terracota de uma figura feminina (Vênus), datada entre 29000 a.C. e 25000 a.C. (manufaturas gravettenses), que foi encontrada no sitio arqueológico de Dolní Věstonice paleolítico situado na aldeia homônima (a sul de Brno, na República Tcheca).\n[…]\nEsta conhecida Vênus apareceu nas primeiras campanhas.\n[…]\nEsta estatueta poderia ser uma das evidências mais antigas da cerâmica.\n[…]\nOs últimos estudos chegaram a localizar uma impressão digital (marcada na argila antes da cocção) que, aparentemente, pertenceu a um menino dentre sete e quinze anos (porém, não se acredita que fosse o autor).\n[…]\nAs escavações, além disso, poderiam tirar à luz a oficina de um artista paleolítico, pois esta figura é uma mais entre centenas que apareceram na segunda moradia (ursos, mamutes, cavalos, raposas, rinocerontes, mesmo uma coruja; além de outras figuras femininas, algumas muito estilizadas) com mais de 2000 bolas de argila sem moldar:\n[…]\nA Vênus de Dolní Věstonice está no Museu de Brno. Devido à sua delicadeza, não é exposta ao público, mas apenas uma réplica.\n[…]\nNo mesmo sítio de Dolní Věstonice apareceram várias esculturas de marfim, entre elas vários rostos muito realistas, bem como um boneco masculino articulado.\n[…]\nLista de estatuetas de vênus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Liras de Ur",
      "descricao": "Instrumentos de corda sumérios, de cerca de 2500 a.C., achados no Cemitério Real de Ur e decorados com cabeças de touro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As liras de madeira achadas no Cemitério Real de Ur, com cerca de quatro mil e quinhentos anos, têm na frente a cabeça de qual animal?",
    "resposta": "Touro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lyres_of_Ur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lyres_of_Ur",
        "situacao": "ok",
        "texto": "The Lyres of Ur or Harps of Ur is a group of four string instruments excavated in a fragmentary condition at the Royal Cemetery at Ur in Iraq from 1922 onwards. They date back to the Early Dynastic III Period of Mesopotamia, between about 2550 and 2450 BC, making them the world's oldest surviving stringed instruments. Carefully restored and reconstructed, they are now divided between museums in Ir\n[…]\nThe decorations on the lyres are fine examples of the court art of Mesopotamia of the period.\n[…]\nBecause of their positioning in situ it is believed that the lyres were used in burial ceremonies in accompaniment to songs. Each lyre has 11 strings to play on that would produce a buzzing noise that is repeated throughout the song. The musician playing the instrument would repeat the pattern displayed on the lyre.\n[…]\nThe body of the bull was originally wood but did not survive. Its discoverer, Woolley, believed that, unlike the other lyres, the body of the \"Golden Lyre\" would have originally had legs.\n[…]\nThe \"Bull Headed Lyre\" is 40 cm in height, 11 cm in width, and 19 cm in depth. The shape of the lyre is meant to resemble a bull's body. Its head, face and horns are all wrapped in gold foil while its hair, beard, and eyes are made of lapis lazuli. Below the head is a front panel made of shell inlay set into bitumen. This panel depicts a figure holding onto a bull's horns above, and animals acting as humans below.\n[…]\nThe \"Silver Lyre\" is 110 cm (42 in) in height and 97 cm (38 in) in width. It is one of two silver lyres taken from the \"Great Death Pit\". Both lyres were made of wood and then covered in sheets of silver that were attached with small silver nails. The eyes are made of lapis lazuli and the lyre was also trimmed with narrow borders of lapis lazuli. This is the only lyre that is not bearded. Because of this fresh face some believe it is actually a cow rather than a bull."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liras_de_Ur",
        "situacao": "ok",
        "texto": "As Liras de Ur ou Harpas de Ur são consideradas como sendo os instrumentos de cordas sobreviventes mais antigos do mundo. Em 1929, arqueólogos descobriram peças de três liras e uma harpa em Ur, localizada no que foi a antiga Mesopotâmia e é o Iraque contemporâneo. Elas têm mais de 4.500 anos de idade.\n[…]\nLeonard Woolley liderou a equipe que descobriu os instrumentos como parte de sua escavação do Cemitério Real de Ur de 1922 e 1934. Os restos dos instrumentos foram restaurados e distribuídos entre os museus que participaram das escavações.\n[…]\nA \"Lira de Ouro de Ur\" ou \"Lira do Touro\" é a melhor lira, e foi entregue ao Museu Nacional do Iraque, em Bagdá. Seu corpo reconstruído de madeira foi danificado devido a inundações durante a segunda Guerra do Iraque. Uma réplica dela está sendo usada como parte de uma orquestra em turnê.\n[…]\nA \"Lira da Rainha\" é um dos dois que ele encontrou no túmulo da rainha Puabi. Ela encontra-se no Museu Britânico.\n[…]\nUma lira de prata em forma de barco e uma lira com a cabeça de um touro feito de folha de ouro e uma barba de lápis-lazúli estão localizadas no Museu de Arqueologia e Antropologia da Universidade da Pensilvânia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Roda",
      "descricao": "Invenção de um disco que gira em torno de um eixo, surgida na Pré-História, usada em cerâmica e em veículos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Mesopotâmia, antes de mover carroças, a roda já girava em que trabalho artesanal?",
    "resposta": "Na fabricação de cerâmica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wheel",
      "https://en.wikipedia.org/wiki/Potter%27s_wheel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wheel",
        "situacao": "ok",
        "texto": "A wheel is a rotating component (typically circular in shape) intended to turn on an axle bearing. The wheel is one of the key components of the wheel and axle, which is one of the six simple machines. Wheels, in conjunction with axles, allow heavy objects to be moved easily, facilitating transportation, supporting loads, and performing work in machines. Wheels are also used for other purposes, su\n[…]\nHowever, a potter's wheel found in western Ukraine, of the Cucuteni–Trypillia culture, dates to the middle of the 5th millennium BCE which predates the earliest use of the potter's wheel in Mesopotamia. Wheels of uncertain dates have been found in the Indus Valley civilization of the late 4th millennium BCE covering areas of modern India and Pakistan.\n[…]\nThe fundamental materials of modern tires are synthetic rubber, natural rubber, fabric, and wire, along with other compound chemicals. They consist of a tread and a body. The tread provides traction while the body ensures support. Before rubber was invented, the earliest versions of tires were simply metal bands that fitted around wooden wheels to prevent wear and tear.\n[…]\nRelated technologies and concepts: Archimedes screw, Barrel, Breaking wheel, Color wheel, Compact disc, Ferris wheel, Pottery wheel, Propeller, Reinventing the wheel, Spindle whorl, Trackball, Wagon-wheel effect, Water wheel, Wheelbarrow, Wheelie, Wheel of Fortune, Wheelwright, Windlass, Windmill\n[…]\nHistory: History of the wheel in Africa, The Horse, The Wheel and Language, Rotating locomotion in living systems, Terrestrial locomotion in animals: Rolling, Robot locomotion\n[…]\nTheory: Rolling resistance, Rotational energy, Torque, Wheel and axle (simple machine), Wheel sizing\n[…]\nKiel University. \"3400 BC: The oldest evidence for the use of the wheel and wagon originates from Northern Germany\". Online: April 11, 2022. Retrieved: April 14, 2022."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Potter%27s_wheel",
        "situacao": "ok",
        "texto": "In pottery, a potter's wheel is a machine used in the shaping (known as throwing) of clay into round ceramic ware. The wheel may also be used during the process of trimming excess clay from leather-hard dried ware that is stiff but malleable, and for applying incised decoration or rings of colour. Use of the potter's wheel became widespread throughout the Old World but was unknown in the Pre-Colum\n[…]\nBecause China focused on decorative wares, most of their pottery was centered around porcelain instead of earthen wares seen almost everywhere else, and they used the potter's wheel for the development of porcelain clay culture. Porcelain took off during the Ming Dynasty and the Qing Dynasty (1644-1911), when the iconic blue and white porcelain ceramics emerged. Several places in China mix traditional elements and methods with modern design and technologies.\n[…]\nNative Americans have been creating ceramics by hand and in more modern eras started incorporating a wheel into their work. Pottery can be identified in the Southwest of North American dating back to 150 CE and has been an important part of Native American culture for over 2,000 years. Historically Native Americans have been using the coiling method to achieve their decorative and functional pieces, and the technology to create an electric wheel did not show up until the arrival of Europeans.\n[…]\nSocial consequences that can arrive of these technological advancements include increased economic advancements in the sales of pottery created using the potter’s wheel and industrialization of the ceramics processes. The potter’s wheel greatly increased the production rate of ceramics, which allowed for more products to be created.\n[…]\nVertical lathe, industrial metal fabrication machine with an operation reminiscent of a potter's wheel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roda",
        "situacao": "ok",
        "texto": "Uma roda é uma peça geralmente circular que gira em torno de um eixo ou junto com ele e, nos veículos, sustenta parte da carga enquanto sua borda rola sobre o chão, o que costuma exigir menos força do que arrastar o mesmo peso diretamente sobre uma superfície. Ligada a um ei maior que o raio do eixo, permitindo trocaxo, ela também pode formar a roda e eixo, uma das seis máquinas simples.\n[…]\nAo construir uma roda, é preciso decidir como as forças passarão entre o eixo, o centro e a periferia. Cubo, mancal, disco, raios, aro e pneu podem assumir formas muito diferentes conforme a função. Para a montagem de rodas raiadas por arame, consulte Construção de rodas. Para a fabricação de rodas com outros tipos de raios, consulte Construção de roda.\n[…]\nDurante milênios, rodas de transporte foram feitas principalmente de madeira, em formas que podiam usar discos maciços ou conjuntos de peças unidas. Com cargas maiores e velocidades mais altas, metais passaram a ser usados no aro, no cubo, nos raios e, em alguns projetos, em toda a roda. Rodas modernas podem usar aço, ligas leves, titânio ou materiais compósitos, conforme as exigências de massa, resistência, custo e fabricação.\n[…]\nA forma, o material e o processo de fabricação precisam manter tensões e deformações em níveis compatíveis com essas cargas. Trincas por fadiga, deformação permanente ou falhas nas ligações entre cubo, raios e aro podem inutilizar a roda antes que ocorra uma ruptura completa.\n[…]\nDispositivos giratórios usados na cerâmica são anteriores aos veículos com rodas, mas nem todo suporte rotativo antigo era uma roda rápida de oleiro. No sul do Levante, recipientes moldados com rolos de argila já eram afinados ou ajustados sobre bases giratórias na segunda metade do quinto milênio a.C., e técnicas parecidas também foram usadas no norte da Mesopotâmia.\n[…]\nRoda, Infopédia, Porto Editora.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Palácio de Cnossos",
      "descricao": "Grande complexo palaciano da Idade do Bronze em Creta, centro da civilização minoica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No início do século vinte, o arqueólogo Arthur Evans reconstruiu partes do palácio de Cnossos, em Creta, com um material moderno e polêmico. Qual?",
    "resposta": "Concreto armado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Knossos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Knossos",
        "situacao": "ok",
        "texto": "Knossos (; Ancient Greek: Κνωσσός, romanized: Knōssós; Greek: Κνωσός, romanized: Knōsós; Linear B: 𐀒𐀜𐀰 Ko-no-so) is an archaeological site and ancient urban centre in Crete, Greece. It is located within the southern periphery of Heraklion, about 5 km (3.1 mi) south of the city's historic centre. The site was occupied from the Neolithic period into the first millennium AD and became the largest and\n[…]\nIn 1900, Arthur Evans began large-scale excavations at Knossos. Working with archaeologists and architects including Duncan Mackenzie, David George Hogarth, Theodore Fyfe and Christian Doll, Evans uncovered most of the palace and many parts of the surrounding settlement.\n[…]\nEvans undertook extensive reconstructions at the palace using reinforced concrete, colour and architectural interpretation. These works made the site visually accessible to visitors but have also been criticised because they sometimes go beyond what can be securely reconstructed from the archaeological evidence. They are now part of the modern history of Knossos as well as part of the visitor experience.\n[…]\nResearch at Knossos continued after Evans through excavation, conservation, museum study, survey and reanalysis of earlier material. The British School at Athens, the Greek Archaeological Service and other institutions have worked on the palace, the town, the cemeteries and the wider archaeological landscape.\n[…]\nConservation at Knossos is complex because of the age of the remains, the high number of visitors and the early twentieth-century reconstructions carried out by Evans. These reconstructions are now part of the history of the site, but they also require continued monitoring and maintenance.\n[…]\nEvans, Arthur (1921–1935). The Palace of Minos: A Comparative Account of the Successive Stages of the Early Cretan Civilization as Illustrated by the Discoveries at Knossos. London: Macmillan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cnossos",
        "situacao": "ok",
        "texto": "Cnossos (em grego: Κνωσός; romaniz.: Knossós; AFI: [kno̞ˈso̞s]) é o maior sítio arqueológico da Idade do Bronze da ilha grega de Creta, provável centro cerimonial e político-cultural da Civilização Minoica. Situado próximo da cidade moderna de Heraclião, atualmente Cnossos é visitado por muitos turistas, que visitam a \"reconstrução\" imaginativa feita a partir das ruínas que existiam no local.\n[…]\nAs ruínas de Cnossos foram descobertas em 1878 por Minos Kalokairinos, um comerciante e antiquário cretense, que liderou as primeiras escavações do Monte Cefala, durante as quais foram escavados os armazéns da ala oeste e partes da fachada ocidental. Depois de Kalokairinos diversas pessoas tentaram continuar os trabalhos no sítio, porém apenas em 16 de março de 1900 o arqueólogo inglês sir Arthur Evans podia comprar todo o sítio e realizar um trabalho ali em grande escala.\n[…]\nO palácio de Cnossos serviu de modelo, ou ao menos de inspiração, aos demais palácios em Creta. O átrio cheio de colunas na parte norte do palácio, além de ser uma das entradas do palácio, tinha no seu piso superior, agora destruído, uma cozinha como em Zacro, pois assim apontam os vestígios cerâmicos ali encontrados.\n[…]\nA norte dos aposentos reais ficavam as oficinas dos artesãos do palácio, como mostram os diversos vestígios arqueológicos, como uma reserva de lapis-lacadaemonia, um canteiro de vasos, bem como dois vasos de pedras inacabados. Em sala próxima também foram encontrados diversos materiais de pintura.\n[…]\nAusência de elementos arquitetônicos defensivos como fortificações e muros, segundo Cunha (2013-103) onde “Seus palácios surgem como entrepostos comerciais com aspirações sagradas e receptores das oferendas devotadas aos cultos locais”, demonstra o forte poder religioso em Cnossos, e no regime palaciano como um todo de Creta.\n[…]\n«O Grande Palácio de Cnossos». www.earth-history.com\n[…]\n«Cnossos». no WikiMapia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Linear B",
      "descricao": "Escrita silábica da Idade do Bronze usada em Creta e na Grécia micênica."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A escrita Linear B, das tabuletas de argila de Creta e de Micenas, registra a forma mais antiga conhecida de qual língua?",
    "resposta": "Grego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Linear_B"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "Linear B is a syllabic script that was used for writing in Mycenaean Greek, the earliest attested form of the Greek language. The script predates the Greek alphabet by several centuries, the earliest known examples dating to around 1450 BC. It is adapted from the earlier Linear A, an undeciphered script, perhaps used for writing the Minoan language, as is the later Cypriot syllabary, which also re\n[…]\nThe main archives for Linear B are associated with these stages of Late Minoan and Helladic pottery:\n[…]\nThe Ventris decipherment did not immediately meet with universal approval, and was initially viewed with some scepticism. Professor A. J. Beattie of Edinburgh published his doubts in the later 1950s. Saul Levin of the State University of New York considered that Linear B was partly Greek but with an earlier substrate, in his 1964 book The Linear B controversy reexamined.\n[…]\nLinear B was added to the Unicode Standard in April 2003 with the release of version 4.0.\n[…]\nThe Linear B Syllabary block is U+10000–U+1007F.\n[…]\nThe Linear B Ideograms block is U+10080–U+100FF.\n[…]\nA variety of fonts encode Linear B.\n[…]\nMinoan Language Linear A Linked to Linear B in Groundbreaking Research – Greek Reporter – 20 April 2022\n[…]\nAger, Simon (1998–2009). \"Linear B\". Omniglot. Retrieved 6 January 2009.\n[…]\n\"Google Noto Fonts: Beautiful and free fonts for all languages: Linear B\".\n[…]\nLinear B online transliterator\n[…]\nLinear B Explorer\n[…]\nMcCreedy, David; Weiss, Mimi. \"Gallery of Unicode Fonts: Linear B Syllabary\". WAZU, Japan. Retrieved 11 January 2009.\n[…]\nPalaeolexicon – \"Word study tool of Ancient languages, including Linear B\". Palaeolexicon.com.\n[…]\nRaymoure, K.A. (2012). \"Linear B Transliterations\". Minoan Linear A & Mycenaean Linear B. Deaditerranean. Archived from the original on 18 March 2016.\n[…]\nDel Freo, Maurizio; Di Filippo, Francesco. \"LiBER – Linear B Electronic Resources Portal\". Consiglio Nazionale delle Ricerche, CNR."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "A escrita Linear B é um silabário que foi utilizado pelos povos micênicos entre os séculos XV a.C. e XII a.C. Ela era usada para se escrever em Grego micênico, a forma mais antiga do grego que se conhece, e é derivada provavelmente da escrita denominada Linear A, que ainda não foi decifrada. A Linear B foi encontrada talhada em algumas tabuinhas de argila e vasos nos palácios de Pilos, Micenas, Ti\n[…]\nProvavelmente Sir Arthur teria sido capaz de decifrar essa escrita, mas ele acreditava ser uma escrita que não possuía nenhuma relação com o grego arcaico, diferentemente de Ventris e Chadwick, que conseguiram decifrar a escrita Linear B correlacionando-a com o grego antigo.\n[…]\nEm julho de 1952, o arquiteto inglês Michael Ventris anunciou pela rádio BBC, em Londres, a decifração da Linear B, sustentando que se tratava duma forma de grego arcaico, com uma grafia silábica.\n[…]\na casualidade de a língua escrita em Linear B ser uma antepassada do grego, uma língua sumamente atestada e conhecida pelos filólogos.\n[…]\nA decifração de Ventris foi completada com a ajuda de John Chadwick, professor de Cambridge e filólogo especialista em grego arcaico, e com as contribuições de outros estudiosos (Alice Kober, Emmet L. Bennet Jr. etc.).\n[…]\nAs consoantes \"l\", \"m\", \"n\", \"r\", \"s\" não eram representadas em final de palavra (grego Faistos escrevia-se \"pa-i-to\").\n[…]\nEstas normas eram seguidas em todos os centros administrativos, embora haja alguma pequena diferença no uso segundo os diferentes escribas ou lugares, bem como exceções a alguma regra. Epigrafistas e filólogos foram-nas descobrindo ao estudarem os textos das tabuinhas, ajudados pelos conhecimentos do grego clássico, das características de alguns dialetos, e da linguística Indo-europeia.\n[…]\nSe o seixo de Kafkania (datado no século XVII a.C.) for autêntico, seria a inscrição micênica mais antiga e, portanto, o testemunho mais antigo da língua grega.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Linear B",
      "descricao": "Escrita silábica da Idade do Bronze usada em Creta e na Grécia micênica."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As tabuletas de Linear B eram de argila crua, feitas para durar pouco. O que as endureceu e as preservou por mais de três mil anos?",
    "resposta": "Os incêndios que destruíram os palácios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Linear_B"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "Linear B is a syllabic script that was used for writing in Mycenaean Greek, the earliest attested form of the Greek language. The script predates the Greek alphabet by several centuries, the earliest known examples dating to around 1450 BC. It is adapted from the earlier Linear A, an undeciphered script, perhaps used for writing the Minoan language, as is the later Cypriot syllabary, which also re\n[…]\nThe Knossos archive was dated by Arthur Evans to the destruction by conflagration of about 1400 BC, which would have baked and preserved the clay tablets. He dated this event to the LM II period. This view stood until Carl Blegen excavated the site of ancient Pylos in 1939 and uncovered tablets inscribed in Linear B. They were fired in the conflagration that destroyed Pylos about 1200 BC, at the end of LHIIIB.\n[…]\nWith the decipherment of Linear B by Michael Ventris in 1952, serious questions about Evans's date began to be considered. Most notably, Blegen said that the inscribed stirrup jars, which are oil flasks with stirrup-shaped handles imported from Crete around 1200, were of the same type as those dated by Evans to the destruction of 1400.\n[…]\nThe excavation was over for that year by 2 June. Evans reported: \"only a comparatively small proportion of the tablets were preserved in their entirety,\" the causes of destruction being rainfall through the roof of the storage room, crumbling of small pieces, and being thrown away by workmen who failed to identify them.\n[…]\nLinear B online transliterator\n[…]\nLinear B Explorer\n[…]\nPalaeolexicon – \"Word study tool of Ancient languages, including Linear B\". Palaeolexicon.com.\n[…]\nRaymoure, K.A. (2012). \"Linear B Transliterations\". Minoan Linear A & Mycenaean Linear B. Deaditerranean. Archived from the original on 18 March 2016.\n[…]\nDel Freo, Maurizio; Di Filippo, Francesco. \"LiBER – Linear B Electronic Resources Portal\". Consiglio Nazionale delle Ricerche, CNR."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "A escrita Linear B é um silabário que foi utilizado pelos povos micênicos entre os séculos XV a.C. e XII a.C. Ela era usada para se escrever em Grego micênico, a forma mais antiga do grego que se conhece, e é derivada provavelmente da escrita denominada Linear A, que ainda não foi decifrada. A Linear B foi encontrada talhada em algumas tabuinhas de argila e vasos nos palácios de Pilos, Micenas, Ti\n[…]\nA finalidade de praticamente todas as inscrições encontradas era a de registrar a administração do palácio durante um período de um ano. Quando passava o ano administrativo, as tabuinhas eram destruídas e começava-se novamente. Há, porém, casos em que as tabuinhas que ainda se guardavam do ano anterior.\n[…]\nApesar de os textos serem monótonos, ajudaram a conhecer aspectos de uma sociedade anterior à grega arcaica, da qual temos muitos mais dados. Com estas listas foi possível descobrir como funcionava o governo desta cultura, os tipos de trabalhos dentro do palácio, como era a sua economia, nomes dos principais deuses, tipos e partes de armaduras e carros, valor das unidades de medida, fases de elaboração de alguns objetos manufaturados, nomes de territórios, festas populares, nomes de meses, etc.\n[…]\nO principal material de suporte das inscrições escritas em Linear B conservado foi a argila cozida. Chegou até a atualidade quase por acaso, pois os micênicos não coziam a argila, mas deixavam-na secar ao ar uma vez escrita. Contudo, quando se foram produzindo as sucessivas quedas dos palácios, com os incêndios dos mesmos, ficaram cozidos todos os objetos de argila seca.\n[…]\nAs tabuinhas de folha de palma são menores e costumam conter duas ou três linhas de informação. As tabuinhas de folha de página são maiores, e portanto, dão mais informação. Provavelmente uma única colhia a informação de várias tabuinhas de folha de palma. Colecionavam-se em caixas feitas de vime.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Alfabeto fenício",
      "descricao": "Sistema de escrita dos fenícios, ancestral dos alfabetos grego e latino."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O alfabeto fenício, ancestral distante do nosso, só tinha letras para que tipo de som?",
    "resposta": "Consoantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phoenician_alphabet",
      "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        "situacao": "ok",
        "texto": "The Phoenician alphabet is an abjad (consonantal alphabet)  that was used across the Mediterranean civilization of Phoenicia for most of the 1st millennium BC. It was one of the first alphabets, attested in Canaanite and Aramaic inscriptions found across the Mediterranean basin. In the history of writing systems, the Phoenician script was also the first to have a fixed writing direction—while prev\n[…]\nThe Phoenician alphabet was known to the Jewish sages of the Second Temple era, who called it the \"Old Hebrew\" (Paleo-Hebrew) script.\n[…]\nThe Aramaic alphabet, used to write Aramaic, is an early descendant of Phoenician. Aramaic, being the lingua franca of the Middle East, was widely adopted. It later split off into a number of related alphabets, including Hebrew, Syriac, and Nabataean, the latter of which, in its cursive form, became an ancestor of the Arabic alphabet. The Hebrew alphabet emerges in the Second Temple period, from around 300 BC, out of the Aramaic alphabet used in the Persian empire.\n[…]\nIt has been proposed, notably by Georg Bühler (1898), that the Brahmi script of India (and by extension the derived Indic alphabets) was ultimately derived from the Aramaic script, which would make Phoenician the ancestor of virtually every alphabetic writing system in use today, with the notable exception of hangul.\n[…]\nThe Latin alphabet was derived from Old Italic (originally derived from a form of the Greek alphabet), used for Etruscan and other languages. The origin of the Runic alphabet is disputed: the main theories are that it evolved either from the Latin alphabet itself, some early Old Italic alphabet via the Alpine scripts, or the Greek alphabet. Despite this debate, the Runic alphabet is clearly derived from one or more scripts that ultimately trace their roots back to the Phoenician alphabet.\n[…]\nOmniglot.com (Phoenician alphabet)\n[…]\n[1] Free-Libre GPL2 Licensed Unicode Phoenician Font"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio",
        "situacao": "ok",
        "texto": "O alfabeto fenício (na verdade um consonantário, por ter apenas as consoantes e não as vogais), foi o sistema de escrita usado na Fenícia (atuais Síria, Líbano e norte de Israel) que viria a dar origem a grande parte dos sistemas atuais. Foi adaptado do anterior alfabeto semítico e seu registro mais antigo data de 1200 a.C. O sistema deriva da escrita protosinaítica, por sua vez derivada dos hieró\n[…]\nA inovação do alfabeto fenício está em sua natureza puramente fonética, na qual cada símbolo representa um som, que exige a memorização de apenas alguns caracteres, diferentemente dos sistemas logográficos hieroglíficos e cuneiformes (apesar de não totalmente logográficos), com o primeiro se valendo de caracteres fonéticos e do segundo se valendo de um sistema silábico[A partir de quando?\n[…]\nAntes ou depois do surgimento do sistema fenício?], em que cada caractere representava uma palavra, fazendo necessária a existência de milhares de caracteres (de forma similar aos caracteres chineses), que por sua vez exigiam alta especialização para serem aprendidos.\n[…]\nDentre os sistemas derivados do fenício, estão o alfabeto grego, a escrita itálica antiga e o aramaico (que por sua vez originaria os abjads hebraico e árabe). Não são exemplos de descendência aqueles sistemas do sul da Arábia e o etíope.\n[…]\nO alfabeto fenício é melhor descrito como um abjad porque só contém caracteres para representar consoantes, as vogais devendo ser inferidas, enquanto que um verdadeiro alfabeto representa tanto consoantes quanto vogais.\n[…]\nÉ interessante observar que, tendo origem em sistemas logográficos como o egípcio, o desenho das letras e seus nomes são acrofônicos, com o nome da letra iniciando com o som que ela representa e denunciando sua antiga significação pictográfica."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita criado na Mesopotâmia, com sinais marcados em tabuletas de argila."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os escribas da Mesopotâmia marcavam os sinais cuneiformes na argila mole usando que instrumento?",
    "resposta": "Estilete de junco (cálamo)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuneiform"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuneiform",
        "situacao": "ok",
        "texto": "Cuneiform is a logo-syllabic writing system that was used to write several languages of the ancient Near East. The script was in active use from the early Bronze Age until the 1st century BC. Cuneiform scripts are marked by and named for the characteristic wedge-shaped impressions (Latin: cuneus) which form their signs. Cuneiform is the earliest known writing system and was originally developed to\n[…]\nThere are many instances of Egypt-Mesopotamia relations at the time of the invention of writing, and standard reconstructions of the development of writing generally place the development of the Sumerian proto-cuneiform script before the development of Egyptian hieroglyphs, with the suggestion the former influenced the latter. Given the lack of direct evidence for the transfer of writing, \"no definitive determination has been made as to the origin of hieroglyphics in ancient Egypt\".\n[…]\nBeginning in the later half of the 1st millennium BC cuneiform rapidly fell into dis-use. In part this was due to the slow replacement of the Akkadian language by the Aramaic, written in the Aramaic alphabet, in Mesopotamia and the growing influence of the Persian\n[…]\nCuneiform script was used in many ways in ancient Mesopotamia. Besides the well-known clay tablets and stone inscriptions, cuneiform was also written on wax boards. One example from the 8th century BC was found at Nimrud. The wax contained toxic amounts of arsenic. It was used to record laws, like the Code of Hammurabi. It was also used for recording maps, compiling medical manuals, and documenting religious stories and beliefs, among other uses.\n[…]\nCuneiform Digital Library Initiative\n[…]\nFinding aid to the Columbia University Cuneiform Collection at Columbia University. Rare Book & Manuscript Library\n[…]\nA sign list by Assyriologist Kateřina Šašková, featuring Ur III and Neo-Assyrian cuneiform shapes, their composition and pronunciations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_cuneiforme",
        "situacao": "ok",
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nAjustando a posição relativa da tabuleta ao estilete, o escritor poderia usar uma única ferramenta para fazer uma grande variedade de signos.\n[…]\nUm poema mesopotâmico antigo conta a primeira história conhecida sobre a invenção da escrita:\n[…]\nOriginalmente, os pictogramas eram desenhados em tabuinhas de argila em colunas verticais com um estilete de junco afiado ou incisos em pedra. Este estilo primitivo não tinha a forma cunha característica dos traços. A maioria dos registros proto-cuneiformes deste período era de natureza contábil. A lista de sinais proto-cuneiformes cresceu, à medida que novos textos são descobertos, e diminuiu, à medida que sinais variantes são combinados.\n[…]\nEm meados do 3º milênio a.C., foi introduzido um novo estilete com ponta em cunha, que era pressionado na argila, produzindo uma escrita cuneiforme em forma de cunha. Esse desenvolvimento tornou a escrita mais rápida e fácil, especialmente ao escrever em argila macia. Ao ajustar a posição relativa do estilete em relação à tabuinha, o escriba podia usar uma única ferramenta para fazer uma variedade de impressões.\n[…]\nPara números, um estilete de ponta redonda era inicialmente usado, até que o estilete de ponta em cunha foi generalizado. A direção da escrita era de cima para baixo e da direita para a esquerda. As tabuinhas de argila cuneiformes podiam ser queimadas em fornos para endurecê-las e, assim, fornecer um registro permanente, ou podiam ser deixadas úmidas e recicladas se a permanência não fosse necessária.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita criado na Mesopotâmia, com sinais marcados em tabuletas de argila."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Há mais de cinco mil anos, para que finalidade prática os sumérios usaram a escrita nos seus primeiros registros?",
    "resposta": "Contabilidade e administração",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuneiform",
      "https://pt.wikipedia.org/wiki/Escrita_cuneiforme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuneiform",
        "situacao": "ok",
        "texto": "Cuneiform is a logo-syllabic writing system that was used to write several languages of the ancient Near East. The script was in active use from the early Bronze Age until the 1st century BC. Cuneiform scripts are marked by and named for the characteristic wedge-shaped impressions (Latin: cuneus) which form their signs. Cuneiform is the earliest known writing system and was originally developed to\n[…]\nby the receiver of the text. They included legal and administrative texts, and letters. Use began in\n[…]\nBecause of its simplicity and logical structure, the Old Persian cuneiform script was the first to be deciphered by modern scholars, starting with the accomplishments of Georg Friedrich Grotefend in 1802. Various ancient bilingual or trilingual inscriptions then permitted to decipher the other, much more complicated and more ancient scripts, as far back as to the 3rd millennium Sumerian script.\n[…]\nThe Sumerian cuneiform script had on the order of 1,000 distinct signs, or about 1,500 if variants are included. This number was reduced to about 600 by the 24th century BC and the beginning of Akkadian records. Not all Sumerian signs are used in Akkadian texts, and not all Akkadian signs are used in Hittite.\n[…]\nThe introduction of a cursive script in the Old Babylonian period coincided with the expansion of literacy beyond institutional settings, leading to greater variation in writing styles. This shift may have influenced the increasing number of documented signs, as reflected in later sign lists. As writing adapted to new contexts—whether for administrative, literary, or private use—the need for expanded and specialized sign inventories became more apparent.\n[…]\nU+12000–U+123FF (922 assigned characters) Cuneiform\n[…]\nCuneiform Digital Library Initiative\n[…]\nA sign list by Assyriologist Kateřina Šašková, featuring Ur III and Neo-Assyrian cuneiform shapes, their composition and pronunciations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_cuneiforme",
        "situacao": "ok",
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nAntes da descoberta da civilização Suméria, o uso da escrita cuneiforme apesar das dificuldades levou muitos filólogos a suspeitar da existência de uma civilização precursora à babilônica. A sua invenção ficou a dever-se às necessidades de administração dos palácios e dos templos (cobrança de impostos, registro de cabeças de gado, medidas de cereal, etc.).\n[…]\n| header=Fichas de contabilidade\n[…]\nAs tabuinhas cuneiformes às vezes eram envoltas em envelopes de argila selados para serem abertos pelo destinatário do texto. Incluíam textos legais e administrativos, e cartas. O uso começou no período Dinástico Antigo IIIb (c. 2500-2340 a.C.) e continuou até que as tabuinhas cuneiformes caíssem em desuso. A extensão geográfica parece restrita à Mesopotâmia, embora fragmentos de envelopes quebrados nem sempre tenham sido registrados nas escavações, portanto isso é incerto.\n[…]\nDevido à sua simplicidade e estrutura lógica, a escrita cuneiforme persa antiga foi a primeira a ser decifrada por estudiosos modernos, começando com as realizações de Georg Friedrich Grotefend em 1802. Várias inscrições bilingues ou trilingues antigas permitiram então decifrar as outras escritas, muito mais complicadas e mais antigas, até o 3º milênio da escrita suméria.\n[…]\nÀ medida que a escrita se adaptava a novos contextos — fosse para uso administrativo, literário ou privado — a necessidade de inventários de sinais ampliados e especializados tornava-se mais aparente.\n[…]\n«Evolution of Cuneiform» (em inglês). -"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Göbekli Tepe",
      "descricao": "Sítio arqueológico no sudeste da Turquia com pilares de pedra esculpidos há cerca de onze mil anos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Alguns pilares em forma de T de Göbekli Tepe, na Turquia, têm braços e mãos esculpidos nas laterais. O que eles representariam?",
    "resposta": "Figuras humanas estilizadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe",
        "situacao": "ok",
        "texto": "Göbekli Tepe (pronounced ɟœbecˈli teˈpe  meaning 'Potbelly Hill') is a Neolithic archaeological site in Upper Mesopotamia (al-Jazira) in modern-day Turkey. The settlement was inhabited from around 9500 BCE to at least 8000 BCE, during the Pre-Pottery Neolithic. It is known for its large circular structures that contain large stone pillars – among the world's oldest known megaliths.\n[…]\nFew humanoid figures have appeared in the art at Göbekli Tepe. Some of the T-shaped pillars have human arms carved on their lower half; however, this suggested to site excavator Schmidt that they were intended to represent the bodies of stylised humans (or perhaps deities). Loincloths appear on the lower half of a few pillars. Schmidt thought the horizontal stone slab on top symbolised shoulders, which suggests that the figures were left headless.\n[…]\nSchmidt also speculated about the belief systems of said nomadic bands that created Göbekli Tepe based on comparisons with other shrines and settlements. He presumed shamanic practices. He suggested that the T-shaped pillars represent human forms, perhaps ancestors. In contrast, he saw a fully articulated belief in deities as not developing until later, in Mesopotamia, that was associated with extensive temples and palaces.\n[…]\nExpanding on Schmidt's interpretation that round enclosures could represent sanctuaries, Gheorghiu's semiotic interpretation reads the Göbekli Tepe iconography as a cosmogonic map that would have related the local community to the surrounding landscape and the cosmos.\n[…]\nMedia related to Göbekli Tepe at Wikimedia Commons\n[…]\nExplore Göbekli Tepe in the UNESCO collection on Google Arts and Culture\n[…]\nGöbekli Tepe, UNESCO World Heritage List\n[…]\nTepe Telegrams, blog of the DAI's Göbekli Tepe Research project\n[…]\n\"Göbekli Tepe\". Megalithic Portal.\n[…]\nGöbekli Tepe, Platform for Neolithic Radiocarbon Dates (PPND)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%B6bekli_Tepe",
        "situacao": "ok",
        "texto": "Göbekli Tepe (\"Colina Barriguda\"; Curdo: Girê Mirazan ou Xerabreşkê, 'Colina dos Desejos') é um sítio arqueológico neolítico na Alta Mesopotâmia (Jazira), na atual Turquia. O assentamento foi habitado desde cerca de 9500 a.C. até pelo menos 8000 a.C., durante o Neolítico Pré-Cerâmico.\n[…]\nPoucas figuras humanoides apareceram na arte de Göbekli Tepe. Alguns dos pilares em forma de T têm braços humanos esculpidos na metade inferior; no entanto, isso sugeriu ao arqueólogo Schmidt que eles representavam os corpos de humanos estilizados (ou talvez divindades). Tangas aparecem na metade inferior de alguns pilares. Schmidt pensou que a laje de pedra horizontal no topo simbolizava ombros, o que sugere que as figuras foram deixadas sem cabeça.\n[…]\nIsso é confirmado pelo fato de que alguns pilares incluem – além de relevos de animais – esculturas de braços, mãos e tangas.\n[…]\nUma das estruturas continha um \"totem\" que data do início do NPCB. Remontado, ele mede 192 centímetros de altura e 30 centímetros de diâmetro. Representa três figuras (de cima para baixo): um predador (um urso ou um grande felino) sem cabeça e com o pescoço e os braços de um humano; outra figura sem cabeça com braços humanos, provavelmente masculina; e uma terceira figura com a cabeça intacta. Serpentes estão esculpidas em ambos os lados.\n[…]\nSchmidt também especulou sobre os sistemas de crenças dos grupos que criaram Göbekli Tepe, com base em comparações com outros santuários e assentamentos, e presumiu práticas xamânicas. Ele sugeriu que os pilares em forma de T representam formas humanas, talvez ancestrais. Em contraste, ele considerou que uma crença plenamente articulada em divindades só se desenvolveu mais tarde, na Mesopotâmia, associada a extensos templos e palácios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Disco de Festo",
      "descricao": "Disco de argila cozida de Creta, da Idade do Bronze minoica, coberto de sinais de escrita não decifrada."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os sinais em espiral do Disco de Festo, de Creta, não foram desenhados à mão. Como foram feitos na argila?",
    "resposta": "Carimbados com punções",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phaistos_Disc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phaistos_Disc",
        "situacao": "ok",
        "texto": "The Phaistos Disc, or Phaistos Disk, is a disc of fired clay from the island of Crete, Greece, possibly from the middle or late Minoan Bronze Age (second millennium BC), bearing a text in an unknown script and language. Its purpose and its original place of manufacture remain disputed. It is now on display at the archaeological museum of Heraklion. The name is sometimes spelled Phaestos or Festos.\n[…]\nFemale images with pendulous breasts have also been found at Malia and Phaistos.The Arkalochori Axe also bears a short inscription that uses several signs similar to those of the disc.\n[…]\nParallels between the Phaistos disc script and Anatolian hieroglyphs were proposed, among others, by S. Davis in 1961 and Jan Best and Fred Woudhuizen in 1988. In 2004, Winfried Achterberg and others proposed an extensive mapping to Anatolian hieroglyphs, which led them to a full decipherment claim. The third revised and extended edition of the authors' monograph on the subject was published in 2021.\n[…]\nA set of 46 symbols from the Phaistos Disc, comprising Evans's 45 signs and one combining oblique stroke, have been encoded in Unicode since April 2008 (Unicode version 5.1). They are assigned to the range 101D0–101FF in Plane 1 (the Supplementary Multilingual Plane). These characters were encoded with strong left-to-right directionality, and so in code charts and text (such as elsewhere on this page) the glyphs are mirrored from the way they appear on the disc itself.\n[…]\nSide A of the Phaistos Disc is used as the logo of FORTH, one of the largest research centers in Greece.\n[…]\n[1] Thomas G. Palaima, Emmet L. Bennet, Jr., Michael G.F. Ventris, Alice E. Kober, \"Cryptanalysis, Decipherment and the Phaistos Disc.\", in M.-L. Nosch and H. Landenius-Enegren eds., Aegean Scripts, (Incunabula Graeca 105, Rome: 2017) vol. 2, pp. 771–788\n[…]\nExploring the Enduring Mystery of Crete's Phaistos Disc – AtlasObscura – 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Disco_de_Festo",
        "situacao": "ok",
        "texto": "O Disco de Festo é um achado arqueológico, provavelmente datado de metade ou do final da Idade do Bronze da Civilização Minoica. Seu propósito, significado e até mesmo o local de manufatura, permanecem disputados, fazendo do disco um dos mais famosos mistérios da arqueologia. Este objeto único atualmente está em exibição no museu arqueológico de Heraclião em Creta, Grécia.\n[…]\nA transcrição começa na linha vertical de cinco pontos , que circula uma vez que a borda do disco é no sentido dos ponteiros do relógio (13 palavras em A, 12 em B) antes de continuar em espiral em direção ao centro (8 palavras mais em cada lado) O último sinal de uma palavra A8 está eliminado; o linguista Godart observou que alguns sinais se repetem.\n[…]\nBalistier, Thomas. The Phaistos Disc - an account of its unsolved mystery, Verlag Thomas Balistier, 2000.\n[…]\nDuhoux, Yves. How not to decipher the Phaistos Disc, American Journal of Archaeology, Vol. 104, n° 3 (2000), p. 597-600 (PDF 5.9 Mb).\n[…]\nGodart, Louis. The Phaistos Disc - the enigma of an Aegean script, ITANOS Publications, 1995.\n[…]\nTrauth, Michael: The Phaistos Disc and the Devil’s Advocate. On the Aporias of an Ancient Topic of Research. 1990, Glottometrika 12, pp. 151 - 173.\n[…]\nAchterberg, Winfried; Best, Jan; Enzler, Kees; Rietveld, Lia; Woudhuizen, Fred, The Phaistos Disc: A Luwian Letter to Nestor, Publications of the Henry Frankfort Foundation vol XIII. Amsterdam: Dutch Archeological and Historical Society, 2004\n[…]\nBalistier, Thomas, The Phaistos Disc - an account of its unsolved mystery, Verlag Thomas Balistier, 2000 (citado más arriba); describe los intentos de descifrado de Aarten y Ohlenroth.\n[…]\nPolygiannakis, Ο Δισκος της Φαιστού Μιλάει Ελληνικά (El disco de Festo habla en griego). Atenas:  Georgiadis, 2000.\n[…]\nDisco de Festos – Leis em versos de Tartesos?\n[…]\nDescifran el disco de Festos, la 'Rosetta' de la cultura minoica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Idade do Ferro",
      "descricao": "Período que sucedeu a Idade do Bronze, marcado pelo uso generalizado de ferramentas de ferro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O bronze dependia do estanho, raro em muitas regiões. Que vantagem do ferro fez ele substituir o bronze nas ferramentas e armas?",
    "resposta": "O minério de ferro é mais abundante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iron_Age",
      "https://pt.wikipedia.org/wiki/Idade_do_Ferro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iron_Age",
        "situacao": "ok",
        "texto": "The Iron Age is the final epoch of the three-age system of technology after the Copper Age and Bronze Age. It has also been considered as the final age of the three-age division starting with prehistory (before recorded history) and progressing to protohistory (before written history). In this usage, it is preceded by the Stone Age (subdivided into the Paleolithic, Mesolithic and Neolithic) and Br\n[…]\nSmelted iron appears sporadically in the archeological record from the middle Bronze Age. Whilst terrestrial iron is abundant naturally, temperatures above 1,250 °C (2,280 °F) are required to smelt it, which was impractical to achieve with the technology available commonly until the end of the second millennium BC.\n[…]\nEarly evidence for iron technology in Sub-Saharan Africa can be found at sites such as KM2 and KM3 in northwest Tanzania and parts of Nigeria and the Central African Republic. Nubia was one of the relatively few places in Africa to have a sustained Bronze Age along with Egypt and much of the rest of North Africa.\n[…]\nVery early copper and bronze working sites in Niger may date as early as 1500 BC. There is also evidence of iron metallurgy in Termit, Niger from around this period. Nubia was a major manufacturer and exporter of iron after the expulsion of the Nubian dynasty from Egypt by the Assyrians in the 7th century BC.\n[…]\nJacobson, E. (1987). Burial Ritual, Gender, and Status in South Siberia in the Late Bronze-early Iron Age. Papers on inner Asia. Indiana University, Research Institute for Inner Asian Studies.\n[…]\nWaldbaum, J.C. (1978). From Bronze to Iron: The Transition from the Bronze Age to the Iron Age in the Eastern Mediterranean. Vol. 54–55. P. Aström. ISBN 978-91-85058-79-2.\n[…]\n\"Mass burial suggests massacre at Iron Age hill fort\". Archaeologists have found evidence of a massacre linked to Iron Age warfare at a hill fort in Derbyshire. BBC. 17 April 2011"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Idade_do_Ferro",
        "situacao": "ok",
        "texto": "A Idade do Ferro (c. de 1 200 a.C. à c. 1 000 d.C.) se refere ao período em que ocorreu a metalurgia do ferro (metal superior ao bronze em relação à dureza e abundância de jazidas). Essa Idade é caracterizada pela utilização do ferro como metal, utilização importada do Oriente através da emigração de diversas tribos da Eurásia, que a partir de 1 200 a.C. começaram a chegar a Eurásia ocidental, e o\n[…]\nJá foi sugerido que a falta de estanho fosse o motivo do colapso da Idade do Bronze, com a interrupção do comércio no Mediterrâneo por volta de 1 300 a.C. levando à busca de metais alternativos. Existem evidências nesta época que vários objetos de bronze foram reciclados e transformados em armas. Com o uso mais difundido do ferro, foi desenvolvida a tecnologia necessária para fazer um aço maleável, fazendo com que os preços baixassem.\n[…]\nComo resultado, quando houve estanho disponível novamente, o ferro já havia ganhado a preferência na produção de armas e ferramentas, sendo barato o suficiente para substituir o bronze. O ferro sendo um material mais resistente e leve, trazia vantagens tecnológicas para as civilizações que o adotavam.\n[…]\nPorém trabalhos arqueológicos mais recentes, mudaram não somente a cronologia, mas também as causas da transição do bronze para o ferro. Além do ferro estar sendo produzido na Índia desde 1 800 a.C., vários sítios africanos possuem artefatos de ferro desde pelo menos 1 200 a.C., se opondo a ideia de que houve uma descoberta única do ferro que depois se difundiu pelo mundo.\n[…]\nO desenvolvimento da fundição de ferro já foi atribuído aos Hititas. Acreditava-se que eles mantiveram o monopólio da metalurgia do ferro e que seu império foi baseado nesta vantagem tecnológica. Porém esta teoria não é mais aceita pela maioria dos especialistas, já que não existe evidência arqueológica desse monopólio."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Domesticação do gato",
      "descricao": "Processo pré-histórico pelo qual o gato-selvagem-africano se aproximou dos humanos e deu origem ao gato doméstico, no Oriente Médio."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Há cerca de dez mil anos, gatos selvagens se aproximaram das primeiras aldeias agrícolas do Oriente Médio. O que os atraía?",
    "resposta": "Os ratos atraídos pelos grãos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cat",
      "https://pt.wikipedia.org/wiki/Gato"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cat",
        "situacao": "ok",
        "texto": "The cat (Felis catus), also called domestic cat and house cat, is a small domesticated carnivorous mammal. It is a member of Felidae, the family of mammals in the order Carnivora also colloquially referred to as cats. An obligate carnivore requiring a predominantly meat-based diet, it has retractable claws adapted to killing small prey species such as mice and rats. It has a strong, flexible body,\n[…]\nDiseases affecting domestic cats include acute infections, parasitic infestations, injuries, and chronic diseases such as kidney disease, hyperthyroidism, and arthritis. Vaccinations are available for many infectious diseases, as are treatments to eliminate parasites such as worms, ticks, and fleas.\n[…]\nIn the United States, feral and free-ranging domestic cats kill an estimated 6.3–22.3 billion mammals annually.\n[…]\nA few attempts to build a cat census have been made over the years, both through associations or national and international organizations (such as that of the Canadian Federation of Humane Societies) and over the Internet. General estimates for the global population of domestic cats range widely from anywhere between 200 million to 600 million. Walter Chandoha made his career photographing cats after his 1949 images of Loco, a stray cat, were published.\n[…]\nHerodotus expressed astonishment at the domestic cats in Egypt, because he had only ever seen wildcats.\n[…]\nAncient Greeks and Romans kept weasels as pets, which were seen as the ideal rodent-killers. The earliest unmistakable evidence of the Greeks having domestic cats comes from two coins from Magna Graecia dating to the mid-fifth century BC showing Iokastos and Phalanthos, the legendary founders of Rhegion and Taras respectively, playing with their pet cats. The usual ancient Greek word for 'cat' was ailouros, meaning 'thing with the waving tail'.\n[…]\n\"Cat, Domestic, The\" . Encyclopedia Americana. 1920."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gato",
        "situacao": "ok",
        "texto": "Gato (nome científico: Felis catus) ou gato doméstico é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular\n[…]\nOs gatos domésticos atuais são uma adaptação evolutiva dos gatos-bravo, cujos cruzamentos entre diferentes espécimes os tornaram menores e menos agressivos aos humanos. A primeira indicação conhecida da domesticação de um gato-selvagem-africano (F. lybica) foi escavada perto de uma sepultura neolítica humana em Silurocambo, ao sul de Chipre, datando de cerca de 7 500–7 200 a.C..\n[…]\nOs cientistas, portanto, assumem que os gatos-selvagens-africanos foram atraídos aos primeiros assentamentos humanos no Crescente Fértil por roedores, em particular o rato-doméstico (Mus musculus), e foram domesticados por agricultores neolíticos.\n[…]\nPor possuírem forte instinto caçador, esses animais espontaneamente passaram a viver nas cidades e exerciam importante função na sociedade: eliminar os ratos e camundongos, que invadiam os silos de cereais e outros lugares onde eram armazenados os alimentos. Essa relação mútua entre os primeiros fazendeiros e os gatos domesticados durou milhares de anos. À medida que as práticas agrícolas se espalharam, também se espalharam os gatos mansos e domesticados.\n[…]\nOs hebreus acreditavam que o gato teria sido criado por Deus dentro da Arca, quando Noé, preocupado com a proliferação dos ratos que se procriaram excessivamente na embarcação, implorou à Deus para que Ele providenciasse uma solução. Deus então fez com que o leão da Arca espirrasse, e do espirro desse felino, surgiram os gatos domésticos.\n[…]\nGatos na cultura popular\n[…]\nLista de raças de gatos domésticos"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Homem de Tollund",
      "descricao": "Corpo de um homem da Idade do Ferro, de cerca de 400 a.C., preservado num pântano de turfa da Jutlândia, na Dinamarca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Homem de Tollund, morto há mais de dois mil anos na Dinamarca, foi achado em 1950 com o rosto quase intacto. O que o preservou?",
    "resposta": "O pântano de turfa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tollund_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tollund_Man",
        "situacao": "ok",
        "texto": "The Tollund Man (died between 405 and 384 BCE) is a naturally mummified corpse of a man who lived during the period characterised in Scandinavia as the Pre-Roman Iron Age. The mummy, found in 1950, was preserved as a bog body near Silkeborg on the Jutland peninsula in Denmark. The man's physical features were so well preserved that he was mistaken for a recent murder-victim. Twelve years before hi\n[…]\nOn 8 May 1950, Tollund Man was discovered in the peat layer of the peat bog, 12 km (7.5 mi) west of Silkeborg, Denmark, by peat cutters Viggo and Emil Hojgaard after Viggo's wife, Grethe Hojgaard, noticed his body in a peat pit. His remains were so well preserved that the family believed they had discovered the victim of a recent murder, and the police were called.\n[…]\nOn 31 May 1950, about three weeks after his discovery, Tollund Man was taken to Bispebjerg Hospital in Copenhagen for medical examination by physicians Christian Bastrup and Bjovulf Vimtrup. X-rays showed that his brain remained recognisable although it had shrunk during preservation in the bog, while the vertebrae of his neck showed no fractures.\n[…]\nWhen Tollund Man was removed from the peat in 1950, conservators faced the problem of preserving remains that had survived for more than 2,000 years in a waterlogged environment. Exposure to air could cause the tissues to dry, shrink and deteriorate. Earlier preservation methods, including nineteenth-century attempts to smoke bog bodies like meat, had slowed decomposition but caused considerable shrinkage and loss of detail.\n[…]\nAs displayed today at Museum Silkeborg in Silkeborg, Denmark, the original preserved head is attached to the reconstructed body, recreating his appearance when he was discovered in 1950.\n[…]\nThe Tollund Man and The Tollund Man in Springtime by Seamus Heaney\n[…]\nImage of the facial reconstruction to show what Tollund Man had looked when he was alive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Tollund",
        "situacao": "ok",
        "texto": "Homem de Tollund (c. 445–420 a.C.) refere-se ao cadáver de um homem naturalmente mumificado descoberto na Dinamarca em 6 de maio de 1950. O Homem de Tollund viveu no século IV a.C., período caracterizado pela idade do ferro pré-romana na Escandinávia. Ele foi enforcado, provavelmente como uma forma de um sacrifício, e jogado no pântano, tendo consequentemente o seu corpo preservado devido à camada\n[…]\nMúmias com essas características já foram encontradas na Irlanda, Reino Unido, Alemanha, Holanda e principalmente na Dinamarca.\n[…]\nDevido às técnicas limitadas de preservação de material orgânico na época da descoberta do corpo, apenas a cabeça foi conservada, enquanto o restante do corpo deteriorou-se. Em 1987 uma réplica foi construída, estando atualmente exposta, juntamente com a cabeça original, no Museu de Silkeborg.\n[…]\nHomem de Lindow\n[…]\nHomem de Grauballe\n[…]\n«Homem de Tollund» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Neolítico",
      "descricao": "Último período da Idade da Pedra, marcado pela agricultura, pela vida sedentária e pelas ferramentas de pedra polida."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nas escolas brasileiras, o Paleolítico é chamado de Idade da Pedra Lascada. E que outro nome recebe o Neolítico?",
    "resposta": "Idade da Pedra Polida",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Neol%C3%ADtico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Neol%C3%ADtico",
        "situacao": "ok",
        "texto": "Neolítico (do grego néos, novo, e lithos, pedra, \"pedra nova\") ou Período da Pedra Polida é o período histórico que vai aproximadamente do X milênio a.C. (12 mil anos atrás) quando a agricultura apareceu no Oriente Próximo e Mesopotâmia e mais tarde no resto do mundo. Durou no Oriente Próximo até o período de transição do Calcolítico (Era do Cobre) de cerca de 6.500 anos atrás (4500 a.C.), marcado\n[…]\nO Neolítico, pelo fato de ter sido o último período da Idade da Pedra, terminou com o surgimento da Idade dos Metais. Mas a transição do Neolítico para a Idade dos Metais (Idade do Cobre, Bronze e Ferro) caracterizou a transição da Pré-História para a História em alguns locais, já que a escrita surgiu quase na mesma época.\n[…]\nO Hipogeu de Ħal-Saflieni, em Paola, Malta, é uma estrutura subterrânea escavada por volta de 2500 a.C.; originalmente um santuário, tornou-se uma necrópole, o único templo subterrâneo pré-histórico do mundo, e exibe um grau de arte em escultura em pedra único na pré-história das ilhas maltesas.\n[…]\nEntre as principais inovações encontram-se o aperfeiçoamento das ferramentas de pedra, especialmente com a pedra polida, e o desenvolvimento de técnicas como a cerâmica, a tecelagem, a cestaria e a moagem. Essas atividades permitiram a fabricação de recipientes, tecidos, cestos e instrumentos destinados ao processamento de produtos agrícolas.\n[…]\nNo Neolítico, as técnicas mais comuns incluíam o uso de mós do tipo vai‑e‑vem, compostas por uma laje inferior e uma pedra manual superior utilizada em movimento recíproco, e conjuntos portáteis de mão e base (mano e metate). Em algumas regiões, surgem mós rotativas, mais eficientes, permitindo moagem contínua. Estudos experimentais demonstram diferenças de esforço e produtividade entre os tipos de moagem.\n[…]\nNeolítico pré-cerâmico B\n[…]\nSAHLINS, Marshall. Economia da Idade da Pedra. São Paulo: Jorge Zahar, 1972. (ISBN: 9788571107564)."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Caverna de Altamira",
      "descricao": "Caverna na Cantábria, Espanha, famosa pelos bisões pintados no Paleolítico."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa dos bisões pintados no seu teto, a caverna de Altamira, na Espanha, ganhou um apelido que a compara a qual obra de Michelangelo?",
    "resposta": "Capela Sistina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cave_of_Altamira",
      "https://pt.wikipedia.org/wiki/Caverna_de_Altamira"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cave_of_Altamira",
        "situacao": "ok",
        "texto": "The Cave of Altamira ( AL-tə-MEER-ə; Spanish: Cueva de Altamira [ˈkweβa ðe altaˈmiɾa]) is a cave complex, located near the historic town of Santillana del Mar in Cantabria, Spain. It is renowned for prehistoric cave art featuring charcoal drawings and polychrome paintings of contemporary local fauna and human hands. The earliest paintings were applied during the Upper Paleolithic, around 36,000 ye\n[…]\nThe Spanish comic series Altamiro de la Cueva, created in 1965, is named for the Altamira Cave. The comic series depicts the adventures of a group of prehistoric cavemen, shown as modern people, but dressed in pieces of fur, similarly to the Flintstones.\n[…]\nIn 2016, British director Hugh Hudson released the film Altamira (called Finding Altamira outside Spain) about the discovery of the caves, starring Antonio Banderas and with music by Mark Knopfler released on the soundtrack album Altamira.\n[…]\n7742 Altamira, asteroid named after the cave\n[…]\nSustainable tourism and social value at World Heritage Sites: Towards a conservation plan for Altamira, Spain. Annals of Tourism Research. Eva Parga-Dans & Pablo Alonso González.\n[…]\nThe Altamira controversy: Assessing the economic impact of a world heritage site for planning and tourism management. Journal of Cultural Heritage. Eva Parga-Dans & Pablo Alonso González.\n[…]\nThe social value of heritage: Balancing the promotion-preservation relationship in the Altamira World Heritage Site, Spain. Journal of Destination Marketing & Management. Eva Parga-Dans, Pablo Alonso González & Raimundo Otero-Enríquez.\n[…]\nAltamira Cave National Museum (in Spanish and English)\n[…]\nThe Spanish Cave of Altamira opens – with politics Bradshaw Foundation Article\n[…]\n\"Les peintures préhistoriques de la grotte d’Altamira\", Cartailhac and Breuil founding article (1903), online and analyzed on BibNum [click 'à télécharger' for English version]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_de_Altamira",
        "situacao": "ok",
        "texto": "Altamira é uma caverna na qual se conserva um dos conjuntos pictóricos mais importantes da Pré-história. Fica no município espanhol de Santillana del Mar, Cantábria, num prado do qual tomou o nome. Por volta de 11 000 a.C., a queda de uma rocha bloqueou a entrada da caverna, impedindo a continuidade da ocupação humana e assim preservando o seu interior.\n[…]\nQualificativos como: \"Capela Sistina\" da arte rupestre; \"...a manifestação mais extraordinária desta arte paleolítica...\", \"... a primeira caverna decorada que se descobriu e que contínua sendo a mais esplêndida\"; e \"...se a pintura rupestre [paleolítica] é o exemplo de uma grande capacidade artística, a caverna de Altamira representa a sua obra mais sobresselente\", indicam a qualidade e a beleza do trabalho do homem magdaleniano neste recinto.\n[…]\nFoi declarada Património da Humanidade em 1985. Em 2008, a nomeação foi estendida  para outras 17 cavernas do País Basco, das Astúrias e da própria Cantábria,  chamando o conjunto \"Caverna de Altamira e arte rupestre paleolítica do norte da Espanha\".\n[…]\n\"Grande sala\", \"grande sala dos policromos\", \"sala dos animais\", \"grande teto\", \"Sala dos frescos\" e outros muitos nomes são os que receberam a segunda sala e que é a alberga o grande conjunto de pinturas policromas, alcumada por Déchelette a \"Capela Sistina da Arte Quaternária\".\n[…]\nA Caverna de Altamira foi declarada Patrimônio da Humanidade pela UNESCO em 1985. Posteriormente, em 2008, foi estendida a proteção para outras 17 cavernas com vestígios humanos (talvez as mais bem conservadas e representativas de um grupo maior conhecido como Arte rupestre paleolítica do norte da Espanha).\n[…]\n«Información práctica de la cueva de Altamira y la neocueva». Rutas por Cantabria y Picos de Europa (em espanhol). Diario Montañés. Consultado em 2 de maio de 2012. Arquivado do original em 22 de Abril de 2012"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lábris",
      "descricao": "Machado de lâmina dupla, símbolo sagrado da civilização minoica de Creta."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo uma hipótese, o lábris, machado de lâmina dupla sagrado para os minoicos de Creta, deu origem a qual palavra famosa?",
    "resposta": "Labirinto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Labrys",
      "https://en.wikipedia.org/wiki/Labyrinth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Labrys",
        "situacao": "ok",
        "texto": "A labrys (Greek: λάβρυς, romanized: lábrys) (plural labryes (λάβρυες)) is a kind of double-bitted axe that traces back to the Minoan civilization of Crete. Originally a sacred symbol of the Minoan religion, it was adapted by numerous other ancient religions and cultures. It became a symbol in Thracian religion; a symbol for Zeus Labrandos in the Greek religion; and entered Greek and Roman myths. I\n[…]\nIn feminist interpretations, the labrys is a symbol of matriarchy and female empowerment.\n[…]\nIn the 1970s, the labrys was adopted by the lesbian community, as a lesbian feminist symbol, representing strength and self-sufficiency. The symbol is described to represent a butterfly and the labia, and is seen as an embodiment of the female spirit.\n[…]\nThe lesbian flag, created in 1999 by Sean Campbell, depicts a labrys superimposed on an inverted black triangle and set against a violet background.\n[…]\nThe labrys has been seen as having been co-opted by the trans-exclusionary radical feminism movement in the early 2000s, but some trans lesbians have since reclaimed the symbol.\n[…]\nThe labrys is incorporated into the logo of The Charlotte Museum, a lesbian museum in Auckland, New Zealand. \"Labrys\" is the name of an LGBT rights organization in Kyrgyzstan. The group's goal is to improve the quality of life for all LGBT individuals in their country as well as Central Asia. Similarly, Labrisz is an association in Hungary for lesbian and bisexual women.\n[…]\nEnszer, Julie (26 June 2017). \"My labrys, my self\". Argot Magazine. Archived from the original on 31 July 2018. Retrieved 31 July 2018.\n[…]\n\"Hellenic nativistic collective LABRYS\". Hellēnismôs. 2015. Archived from the original on 11 July 2018.\n[…]\n\"Λατρευτική Κοινότητα ΛΑΒΡΥΣ\" [Worship community LAVRYS]. labrys.gr (in Greek).\n[…]\n\"Labrys\". Oxford Reference. Oxford University Press.\n[…]\n\"Labrys\". Ancient-Symbols.com."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Labyrinth",
        "situacao": "ok",
        "texto": "In Greek mythology, the Labyrinth (Ancient Greek: λαβύρινθος, romanized: Labúrinthos) is an elaborate, confusing structure designed and built by the mythological artificer Daedalus for King Minos of Crete at Knossos. Its function was to hold the Minotaur, the monster eventually killed by the hero Theseus. Daedalus had so cunningly made the Labyrinth that he could barely escape it after he built it\n[…]\nLabyrinth is a word of pre-Greek origin whose derivation and meaning are uncertain. Maximillian Mayer suggested in 1892 that labyrinthos might derive from labrys, a Lydian word for \"double-bladed axe\".\n[…]\nThe association with \"labrys\" lost some traction when Linear B was deciphered in the 1950s, and an apparent Mycenaean Greek rendering of \"labyrinth\" appeared as da-pu₂-ri-to (𐀅𐀢𐀪𐀵). This may be related to the Minoan word du-pu₂-re, which appears in Linear A on libation tablets and in connection with Mount Dikte and Mount Ida, both of which are associated with caverns. Caverns near Gortyna, the Cretan capital in the 1st century AD, were called labyrinthos.\n[…]\nBeekes also finds the relation with labrys speculative, and suggests instead a relation with Greek λαύρα ('narrow street').\n[…]\nWhen the Bronze Age site at Knossos was excavated by archaeologist Arthur Evans, the complexity of the architecture prompted him to suggest that the palace had been the Labyrinth of Daedalus. Evans found various bull motifs, including an image of a man leaping over the horns of a bull, as well as depictions of a labrys carved into the walls. On the strength of a passage in the Iliad, it has been suggested that the palace was the site of a dancing-ground made for Ariadne by the craftsman Daedalus,\n[…]\nEttore Selli, Labirinti Vegetali, la guida completa alle architetture verdi dei cinque continenti, Ed. Pendragon, 2020; ISBN 9788833642222"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1bris",
        "situacao": "ok",
        "texto": "Lábris (em grego:  λάβρυς), também chamado machado da dupla lâmina, é um machado de dupla face simétrica, conhecido pelos gregos clássicos como pelequis (pelekys) ou sagáris.\n[…]\nPlutarco relata que a palavra lábrys era uma palavra lídia para “machado”: Λυδοὶ γὰρ ‘λάβρυν’ τὸν πέλεκυν ὀνομάζουσι. (“Pois os lídios nomeiam o machado de dois gumes ‘Labrys’”). Muitos estudiosos, inclusive Arthur Evans, afirmam que a palavra labirinto é derivada de lábris e, portanto, implica “casa do machado duplo”. Uma corporação sacerdotal em Delfos chamava-se Labyades; o nome original era provavelmente Labryades, servos do machado duplo.\n[…]\nEm Creta, o “machado duplo” não é uma arma e sempre acompanha deusas femininas, não deuses masculinos, referindo-se ao próprio deus touro masculino. Robert S. P. Beekes considera especulativa a relação de labirinto com lábris e propõe uma relação com laura (λαύρα), “rua estreita”, ou com o teônimo cariano Dabraundos (Δαβραυνδος).\n[…]\nDe acordo com alguns estudiosos modernos, poderia ser lido como *δαφυρίνθοιο (*daphyrinthoio), ou algo semelhante, e, portanto, sem uma certa ligação com o λάβρυς ou com o labirinto.\n[…]\nTambém foi sugerida uma ligação com os símbolos do machado duplo em Çatalhöyük, que datam do Neolítico. Em Labraunda, na Cária, bem como na cunhagem dos governantes hecatomnidas da Cária, o machado duplo acompanha o deus da tempestade Zeus Labraundos. Arthur Evans observa,\"Parece natural interpretar os nomes dos santuários carianos, como Labranda, no sentido mais literal, como o local do lábris sagrado, que era o nome lídio (ou cariano) para o grego πέλεκυς [pelekys], ou machado de dois gumes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Cobre",
      "descricao": "Metal avermelhado, o primeiro a ser trabalhado em larga escala na Pré-História e base da liga de bronze."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome latino do cobre vem de qual ilha do Mediterrâneo, grande exportadora desse metal na Idade do Bronze?",
    "resposta": "Chipre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Copper",
      "https://pt.wikipedia.org/wiki/Cobre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Copper",
        "situacao": "ok",
        "texto": "Copper is a chemical element; it has symbol Cu (from Latin cuprum) and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.\n[…]\nCopper is one of the few native metals, meaning metals that occur naturally in a directly usable, unalloyed metallic form. This led to very early human use in several regions, from c. 8000 BC. Thousands of years later, it was the first metal to be smelted from sulfide ores, c. 5000 BC; the first metal to be cast into a shape in a mold, c. 4000 BC; and the first metal to be purposely alloyed with another metal, tin, to create bronze, c. 3500 BC.\n[…]\nThe name of the metal derives from aes cyprium meaning 'metal of Cyprus' in Latin. In Late Latin this became cuprum. Old English adopted this as coper; copper derives from that word and first used in the 12th century.\n[…]\nThe major applications of copper are electrical wire (60%), roofing and plumbing (20%), and industrial machinery (15%). Copper is used mostly as a pure metal, but when greater hardness is required, it is put into such alloys as brass and bronze (5% of total use). For more than two centuries, copper paint has been used on boat hulls to control the growth of plants and shellfish. A small part of the copper supply is used for nutritional supplements and fungicides in agriculture.\n[…]\nCopper is biostatic, meaning bacteria and many other forms of life will not grow on it. For this reason it has long been used to line parts of ships to protect against barnacles and mussels. It was originally used pure, but has since been superseded by Muntz metal and copper-based paint.\n[…]\nCopper foil\n[…]\nusgs.gov (Mineral Commodity Summaries 2025): Copper"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cobre",
        "situacao": "ok",
        "texto": "O cobre é um elemento químico de símbolo Cu (do latim cuprum), número atômico 29 (29 prótons e 29 elétrons) e de massa atómica 63,54 u. À temperatura ambiente o cobre encontra-se no estado sólido.\n[…]\nOs egípcios também descobriram que a adição de pequenas quantidades de estanho facilitava a fusão do metal e aperfeiçoaram os métodos de obtenção do bronze; ao observarem a durabilidade do material representaram o cobre com o Ankh, símbolo da vida eterna.\n[…]\nNa Europa o homem de gelo encontrado no Tirol (Itália) em 1991, cujos restos têm uma idade de 5 300 anos, estava acompanhado de um machado de cobre com uma pureza de 99,7%, e os elevados índices de arsênico encontrados em seu cabelo levam a supor que fundiu o metal para a fabricação da ferramenta.\n[…]\nFenícios importaram o cobre da Grécia, não tardando em explorar as minas do seu território, como atestam os nomes das cidades Calce, Calcis e Calcitis (de χαλκος, bronze), ainda que tenha sido Chipre, a meio caminho entre Grécia e Egito, por muito tempo o país do cobre por excelência, ao ponto de os romanos chamarem o metal de aes cyprium ou simplesmente cyprium e cuprum, donde provém o seu nome.\n[…]\nAlém disso, o cobre foi representado com o mesmo signo que Vênus (a afrodite grega), pois Chipre estava consagrada a deusa da beleza e os espelhos eram fabricados com este metal. O símbolo, espelho de Vênus da mitologia e da alquimia, modificação do egípcio Ankh, foi posteriormente adotado por Carl Linné para simbolizar o gênero feminino(♀).\n[…]\nOutras ligas de cobre importantes são latões (zinco), bronzes (estanho), cupro-alumínios (alumínio), cuproníqueis (níquel), cuprosilícios (silício) e alpacas (níquel-zinco).\n[…]\nCategoria: Compostos de cobre"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Uruk",
      "descricao": "Antiga cidade suméria da Baixa Mesopotâmia, onde surgiram alguns dos primeiros registros escritos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo uma hipótese, o nome do Iraque viria de qual antiga cidade suméria, terra do lendário rei Gilgamesh?",
    "resposta": "Uruk",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iraq",
      "https://en.wikipedia.org/wiki/Uruk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iraq",
        "situacao": "ok",
        "texto": "Iraq, officially the Republic of Iraq, is a country in West Asia. Located within the Middle East, it is bordered by Saudi Arabia to the south, Turkey to the north, Iran to the east, the Persian Gulf and Kuwait to the southeast, Jordan to the southwest, and Syria to the west. The country covers an area of 438,317 square kilometres (169,235 sq mi) and has a population of over 46 million, making it t\n[…]\nThere are several suggested origins for the name. One dates to the Sumerian city of Uruk and is thus ultimately of Sumerian origin. Another possible etymology for the name is from the Middle Persian word erāg, meaning \"lowlands\". An Arabic folk etymology for the name is \"deeply rooted, well-watered; fertile\".\n[…]\nBabylonian economic traditions persisted during this period, including the continued use of the silver shekel. Babylonian chronicle fragments record Seleucid rulers engaging with local institutions, while temple authorities, scholarly traditions, and cuneiform writing continued to function during the Seleucid period. Archaeological evidence from Uruk indicates that Babylonian religious institutions and architectural traditions continued to function during this period.\n[…]\nOne of which was the Epic of Gilgamesh, which is regarded as the earliest surviving notable literature.\n[…]\nIraqi cuisine can be traced back some 10,000 years – to the Sumerians, Akkadians, Babylonians, Assyrians and Ancient Persians. Tablets found in ancient ruins in Iraq show recipes prepared in the temples during religious festivals – the first cookbooks in the world. Ancient Iraq, or Mesopotamia, was home to many sophisticated and highly advanced civilisations, in all fields of knowledge – including the culinary arts.\n[…]\nPetrie, Cameron A. (2002). \"Seleucid Uruk: An Analysis of Ceramic Distribution\". Iraq. 64. British Institute for the Study of Iraq: 123–146. JSTOR 4200514."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Uruk",
        "situacao": "ok",
        "texto": "Uruk, the archeological site known today as Warka, was an ancient city in the Near East or West Asia, located east of the current bed of the Euphrates River, on an ancient, now-dried channel of the river in Muthanna Governorate, Iraq. The site lies 93 kilometers (58 miles) northwest of ancient Ur, 108 kilometers (67 miles) southeast of ancient Nippur, and 24 kilometers (15 miles) northwest of anci\n[…]\nUruk () has several spellings in cuneiform. In Sumerian, it is 𒀕𒆠 unugᵏⁱ, and in Akkadian, it is spelled 𒌷𒀕 or 𒌷𒀔 Uruk (URUUNUG). In Arabic, it is called وركاء (Warkāʾ) or أوروك (Auruk); in Syriac, ܐܘܿܪܘܿܟ (ʾÚrūk); and in Biblical Hebrew, אֶרֶךְ (ʾÉreḵ). In Ancient Greek, it was known as Ὀρχόη (Orkhóē), Ὀρέχ (Orékh), and Ὠρύγεια (Ōrúgeia).\n[…]\nAccording to the SKL, Uruk was founded by the king Enmerkar. Though the king-list mentions a father before him, the epic Enmerkar and the Lord of Aratta relates that Enmerkar constructed the House of Heaven (Sumerian: e₂-anna; cuneiform: 𒂍𒀭 E₂.AN) for the goddess Inanna in the Eanna District of Uruk. In the Epic of Gilgamesh, Gilgamesh builds the city wall around Uruk and is king of the city.\n[…]\nThe Mask of Warka, also known as the 'Lady of Uruk' and the 'Sumerian Mona Lisa', dating from 3100 BC, is one of the earliest representations of the human face. The carved marble female face is probably a depiction of Inanna. It is approximately 20 cm (7.9 in) tall, and may have been incorporated into a larger cult image. The mask was looted from the Iraq Museum during the invasion of Iraq in April 2003. It was recovered in September 2003 and returned to the museum.\n[…]\nHe commented that other scans of that part of the site so far were a surprisingly good match for Sumerian descriptions of Uruk as it was in Gilgamesh's day, making the theory that the poem was also right about the tomb more plausible.\n[…]\nUruk at CDLI wiki\n[…]\nDigital images of tablets from Uruk – CDLI"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iraque",
        "situacao": "ok",
        "texto": "O Iraque (em árabe العراق, transl. al-Irāq, em curdo Îraq), oficialmente República do Iraque é um país do Oriente Médio, limitado a norte pela Turquia, a leste pelo Irã, a sul pelo Golfo Pérsico, pelo Kuwait e pela Arábia Saudita e a oeste pela Jordânia e pela Síria. Sua capital é a cidade de Bagdá, no centro do país, às margens do rio Tigre.\n[…]\nO território do atual Iraque foi o berço da civilização suméria (a civilização mais antiga do mundo) por volta de 4 000 a.C. No ano de 2 550 a.C., ocorreu a unificação da Suméria com a Acádia feita pelo patesi Sargão. Séculos mais tarde o Império de Sargão desmorona: ocorrem revoltas internas e os povos nômades vindos dos Montes Zagros (os povos gútios) conquistam o Império. No ano de 1 950 a.C. eles conquistam o Império definitivamente depois de diversos ataques dos elamitas e dos Amoritas.\n[…]\nA dissolução tanto do exército baathista, como da antiga infraestrutura governamental, pelas potências ocidentais acabou levando o país ao caos, virando o Iraque numa zona de guerra sangrenta e brutal.\n[…]\nCom seus 143,1 bilhões de barris (2 275 × 1 010 m3) de reservas provadas de petróleo, o Iraque ocupa o segundo lugar no mundo, atrás apenas da Arábia Saudita, no montante de reservas deste recurso. Os níveis de produção de petróleo chegaram a 3,4 milhões de barris por dia até dezembro de 2012. Apenas cerca de 2 000 poços de petróleo foram perfurados no Iraque, em comparação com cerca de 1 milhão poços perfurados apenas no Texas.\n[…]\nA história da culinária iraquiana remonta a cerca de 10 000 anos — influenciada pelos antigos impérios sumério, acadiano, babilônico, assírio e persa antigo. As tábuas de argila sumérias, encontradas em ruínas antigas no Iraque, mostram receitas preparadas em templos durante feriados religiosos — sendo uma representação dos primeiros livros de culinária do mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Cultura Clovis",
      "descricao": "Cultura pré-histórica de caçadores da América do Norte, de cerca de treze mil anos, conhecida por suas pontas de lança de pedra."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A cultura Clovis, de antigos caçadores de mamutes da América do Norte, recebeu esse nome por causa de quê?",
    "resposta": "Uma cidade do Novo México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Clovis_culture"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Clovis_culture",
        "situacao": "ok",
        "texto": "The Clovis culture is an archaeological culture from the Paleoindian period of North America, spanning around 13,050 to 12,750 years Before Present (BP). The type site is Blackwater Draw locality No. 1 near Clovis, New Mexico, where stone tools were found alongside the remains of Columbian mammoths in 1929. Clovis sites have been found across North America. The most distinctive part of the Clovis \n[…]\nSequencing of his genome demonstrates that he is part of the same population as most modern Native Americans, and in particular is part of the \"Southern Native American\" (SNA) branch that is ancestral to modern Indigenous Americans in Central and South America, as opposed to the \"Northern Native American\" branch (which split from the SNA branch around 16,000 years ago) ancestral to most contemporary Indigenous Americans in North America north of Mexico.\n[…]\n~15,500- to 13,500 years BP) in Texas, are suggested to be considerably older than the oldest Clovis sites. The White Sands footprints in New Mexico may be even older, dating to the Last Glacial Maximum, around 23,000 years ago.\n[…]\nThe Clovis culture is known from localities across North America, from southern Canada to northern Mexico and across the east and west of the continent. The area of its origin remains unclear, though the development of fluted Clovis points appears to have occurred in North America south of the Laurentide Ice Sheet and not in Beringia. The Clovis culture may have originated from the Dyuktai lithic style widespread in Beringia.\n[…]\nAlternatives to the Clovis First theory\n[…]\nDixon, E. James (1999). Bones, Boats and Bison: Archeology and the First Colonization of Western North America. Albuquerque: University of New Mexico Press. ISBN 978-0-8263-2057-5. OCLC 42022335.\n[…]\nStanford DJ, Bradley BA (2012). Across Atlantic Ice: The Origin of America's Clovis Culture. University of California Press. ISBN 978-0-520-22783-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cultura_Cl%C3%B3vis",
        "situacao": "ok",
        "texto": "A Cultura Clóvis é uma cultura pré-histórica da América que surgiu há cerca de 13 200-12 900 anos, no final da última Idade do Gelo. Chama-se assim por causa dos artefatos encontrados perto da cidade americana de Clovis, nos Estados Unidos. Esses artefatos passaram a ser chamados de “pontas de Clóvis”. O povo de Clóvis era considerado o mais antigo habitante do Novo Mundo. Contudo, essa visão tem \n[…]\nEm 1929, Ridgely Whiteman descobriu o sítio Clovis perto do Blackwater Draw no leste do Novo México. A primeira evidência da presença de Clovis foi descoberta perto de Folsom, Novo México. Neste local eles encontraram a primeira ponta Folsom junto a ossos extintos de Bison antiquus, um parente extinto do bisão americano, e com a confirmação de presença humana no Pleistoceno, as buscas por evidências se intensificaram na região.\n[…]\nA hipótese afirma que não havia humanos nas Américas antes da civilização Clóvis, que data de há 13 000 anos, e que a indústria lítica Clóvis é a tecnologia “mãe” de todos os demais artefatos encontrados no Novo Mundo.\n[…]\nEssa hipótese foi predominante desde que as primeiras evidências de presença humana nas Américas foram encontradas. Em 1926, Jesse Higgins, do Museu de História Nacional do Colorado, nos EUA, encontrou um artefato de pedra lascada em um sítio próximo de Folsom, Novo México, colhido junto de um esqueleto de bisão.\n[…]\nNa época, isso não foi considerado uma evidência de ocupação humana, sendo confirmado apenas quando foram encontrados artefatos no sítio de Blackwater Draw, próximo a cidade de Clóvis, no Novo México, em 1932. O projeto foi coordenado por Edgar B. Howard, contando com o apoio institucional da Academia de Ciências Naturais da Philadelphia e do Museu da Universidade da Pennsylvania, bem como o apoio financeiro do Carnagie Institution de Washington DC.\n[…]\nAs pontas encontradas são hoje conhecidas como “pontas Clóvis”.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Sistema sexagesimal",
      "descricao": "Sistema de numeração de base sessenta, criado na Mesopotâmia antiga."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A contagem de base sessenta da Mesopotâmia sobrevive nos minutos da hora e também na divisão do círculo em quantos graus?",
    "resposta": "Trezentos e sessenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sexagesimal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sexagesimal",
        "situacao": "ok",
        "texto": "Sexagesimal, also known as base 60, is a numeral system with sixty as its base. It originated with the ancient Sumerians in the 3rd millennium BC, was passed down to the ancient Babylonians, and is still used—in a modified form—for measuring time, angles, and geographic coordinates.\n[…]\nThe sexagesimal system as used in ancient Mesopotamia was not a pure base-60 system, in the sense that it did not use 60 distinct symbols for its digits. Instead, the cuneiform digits used ten as a sub-base in the fashion of a sign-value notation: a sexagesimal digit was composed of a group of narrow, wedge-shaped marks representing units up to nine (, , , , ..., ) and a group of wide, wedge-shaped marks representing up to five tens (, , , , ).\n[…]\nMedieval astronomers also used sexagesimal numbers to note time. Al-Biruni first subdivided the hour sexagesimally into minutes, seconds, thirds and fourths in 1000 while discussing Jewish months. Around 1235 John of Sacrobosco continued this tradition, although Nothaft thought Sacrobosco was the first to do so. The Parisian version of the Alfonsine tables (ca. 1320) used the day as the basic unit of time, recording multiples and fractions of a day in base-60 notation.\n[…]\nBecause √2 ≈ 1.41421356... is an irrational number, it cannot be expressed exactly in sexagesimal (or indeed any integer-base system), but its sexagesimal expansion does begin 1;24,51,10,7,46,6,4,44... (OEIS: A070197)\n[…]\n\"Facts on the Calculation of Degrees and Minutes\" is an Arabic language book by Sibṭ al-Māridīnī, Badr al-Dīn Muḥammad ibn Muḥammad (b. 1423). This work offers a very detailed treatment of sexagesimal mathematics and includes what appears to be the first mention of the periodicity of sexagesimal fractions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_sexagesimal",
        "situacao": "ok",
        "texto": "O sistema sexagesimal é um sistema de numeração de base 60, criado pela antiga civilização Suméria. Uma possível razão para o aparecimento deste sistema de numeração poderá residir no elevado número de divisores de 60 (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 e 60). Outra hipótese poderá vir de uma união de um sistema de contagem de base 5 que se baseava em contar com os dedos da mão e o sistema de co\n[…]\nO sistema consistia em contar as falanges dos dedos da mão direita, utilizando o polegar, totalizando doze falanges (três falanges em quatro dedos),com os cinco dedos da mão esquerda, contam-se as dúzias, totalizando cinco dúzias ou seja 60.\n[…]\nEste sistema é utilizado nas medidas de ângulos (e de coordenadas geográficas angulares) e de tempo.\n[…]\nA medida angular de um grau é dividida em 60 minutos de arco, e cada minuto de arco em 60 segundos de arco.\n[…]\nNas medidas usuais de tempo, uma hora é dividida em 60 minutos, e cada minuto em 60 segundos. Antigamente o segundo era dividido em 60 terceiros e assim por diante, mas hoje em dia, o segundo é dividido através de um sistema decimal.\n[…]\n\"Fatos sobre o cálculo de graus e minutos\" é um livro de 1825, em árabe, que é considerada a primeira publicação a discutir frações sexagesimais e trabalhos relacionados",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Ötzi",
      "descricao": "Múmia natural de um homem da Idade do Cobre achada nos Alpes em 1991."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo alguns pesquisadores, muitas das tatuagens de Ötzi, o homem do gelo dos Alpes, coincidem com pontos usados por qual terapia oriental?",
    "resposta": "Acupuntura",
    "fonte": [
      "https://en.wikipedia.org/wiki/%C3%96tzi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/%C3%96tzi",
        "situacao": "ok",
        "texto": "Ötzi (German: [œtsi]; c. 3275 BC – c. 3230 BC), also called The Iceman, Similaun man, or Tyrolean Iceman, is the natural mummy of a man who lived during the 4th millennium BC. Ötzi's remains were discovered on 19 September 1991 in the Ötztal Alps (hence the nickname \"Ötzi\") at the Austria–Italy border. He is Europe's oldest known natural human mummy, showing an unprecedented view of Chalcolithic (\n[…]\nRadiological examination of his bones showed \"age-conditioned or strain-induced degeneration\" corresponding to many tattooed areas, including osteochondrosis and slight spondylosis in the lumbar spine and wear-and-tear degeneration in the knee and especially in the ankle joints. These tattoos may have been part of pain relief treatments similar to acupressure or acupuncture, though Ötzi lived at least 2,000 years before their earliest use in China (c. 1000 BC).\n[…]\nIceman – a 2017 fictional film about the life of Ötzi\n[…]\nMacintyre, Ben (1 November 2003). \"We know Oetzi had fleas, his last supper was steak ... and he died 5,300 years ago\". The Times..\n[…]\nDe Marinis, Raffaele C.; Brillante, Giuseppe (1998). La Mummia del Similaun: Ötzi, l'uomo venuto dal ghiaccio [The Mummy of the Similaun: Ötzi, the Man who Came from the Ice]. Venice, Italy: Marsilio. ISBN 978-88-317-7073-6. (in Italian)\n[…]\nOfficial website about Ötzi by the South Tyrol Museum of Archeology\n[…]\nÖtzi Links ... Der Mann aus dem Eis vom Hauslabjoch – a list of links to websites about Ötzi in English, German and Italian (last updated 28 January 2006)\n[…]\nOtzi, the 5,300 Year Old Iceman from the Alps: Pictures & Information (last updated 27 October 2004)\n[…]\n\"The Iceman Mummy: Finally Face to Face High definition image of a reconstruction of Ötzi's face.\n[…]\n\"An Ice Cold Case\" RadioLab interviews Albert Zink, Head of EURAC Research and the scientist in charge of Ötzi research.\n[…]\n\"Ötzi's Shoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%96tzi",
        "situacao": "ok",
        "texto": "Ötzi ou Múmia do Similaun é uma múmia masculina bem conservada com cerca de 5 300 anos. A múmia foi encontrada por um casal de alpinistas, nos Alpes orientais, em 1991, num glaciar perto do monte Similaun, na fronteira da Áustria com a Itália. Ele rivaliza com a múmia egípcia “Ginger” no título de mais velha múmia humana conhecida, e oferece uma visão sem precedentes da vida e hábitos dos homens e\n[…]\nEle tinha 61 tatuagens, algumas das quais eram localizadas em (ou perto de) pontos que coincidem com os atuais pontos de acupuntura, que podem ter sido feitas para tratar os sintomas de doenças de que Ötzi parece ter sofrido, como parasitas digestivos e artrose. Alguns cientistas acreditam que esses pontos indiquem uma primitiva forma de acupunctura.\n[…]\nEm 2007, uma equipe de pesquisadores italianos e suíços usou a tecnologia de raio-X para comprovar que a causa da morte foi uma lesão sofrida numa artéria próxima do ombro e provocada pela ponta de flecha que permanece até hoje cravada nas costas. Os mesmos cientistas concluíram que a morte de Ötzi foi imediata.\n[…]\nAnálises dos intestinos de Ötzi mostraram duas refeições, uma de carne de bode da montanha, a segunda de carne de veado, ambas consumidas com alguns cereais. Porém na segunda refeição mostra que esta foi consumida em uma floresta de coníferas a meia-altitude.\n[…]\nExiste uma superstição que envolve Ötzi. Segundo a crença, acredita-se haver uma maldição ao redor da múmia quinquemilenar que estaria zangada com as pessoas que a perturbassem em seu descanso. Até agora 7 das pessoas que entraram em contato com o cadáver congelado tiveram acidentes estranhos que resultaram em morte.\n[…]\nÖtzi o homem do gelo no site Mummy Tombs de James M. Deem.\n[…]\nWeb site de PBS para o programa Ötzi\n[…]\nSite do Discovery Channel sobre Ötzi\n[…]\nÖtzi links (Alemão/Italiano/Inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Pedra da Gávea",
      "descricao": "Montanha de granito na cidade do Rio de Janeiro, cuja face lembra um rosto e onde lendas viram inscrições antigas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma lenda sem base científica diz que marcas na Pedra da Gávea, no Rio de Janeiro, seriam inscrições de qual povo navegador da Antiguidade?",
    "resposta": "Fenícios",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedra_da_G%C3%A1vea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_da_G%C3%A1vea",
        "situacao": "ok",
        "texto": "Pedra da Gávea é uma montanha monolítica na Floresta da Tijuca, no Rio de Janeiro, Brasil. Composta por granito e gneisse, a sua altitude é de 842 metros, tornando-se uma das montanhas mais altas do mundo junto de margens oceânicas. As trilhas na montanha foram abertas pela população agrícola local em 1830; hoje, o local está sob a administração do Parque Nacional da Tijuca.\n[…]\nA meteorização diferenciada em um dos lados da rocha criou o que é descrito como um rosto humano estilizado. As marcas na outra face foram descritas como uma inscrição. Geólogos e cientistas estão quase de acordo de que a \"inscrição\" na verdade o resultado da erosão e que o \"rosto\" é um produto de pareidolia. Além disso, o consenso de arqueólogos e acadêmicos no Brasil é que a montanha não deve ser vista como um sítio arqueológico.\n[…]\nEsse nome, por sua vez, veio a ser dado à região da Gávea Pequena e para o atual bairro da Gávea da cidade do Rio de Janeiro.\n[…]\nHá uma suposta inscrição esculpida na rocha, que alguns afirmam estar em fenício, uma língua semítica conhecida pelos estudiosos modernos apenas através de inscrições. De acordo com Paul Herrmann em seu livro Conquests by Man, a inscrição na montanha era conhecida há algum tempo, mas tinha sido meramente atribuída a \"algum povo americano pré-histórico desconhecido\". Um exame mais detalhado, no entanto, levou alguns pesquisadores a acreditarem que era de origem fenícia.\n[…]\nArqueólogos e estudiosos brasileiros adotaram uma atitude negativa em relação ao tratamento do local, com Herrmann observando que \"a arqueologia brasileira nega totalmente a existência da inscrição fenícia em qualquer parte do país\".\n[…]\nA pedra da Gávea foi usada como cenário de vários filmes brasileiros. Em Roberto Carlos e o Diamante Cor-de-Rosa, a pedra era o túmulo de um rei fenício.\n[…]\n«Pedra da Gávea - Visit.Rio»\n[…]\n«Alma Carioca - História - Pedra da Gávea»"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Stonehenge",
      "descricao": "Monumento pré-histórico de grandes pedras em círculo, na Inglaterra."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Stonehenge é muitas vezes associado a quais sacerdotes celtas, embora o monumento seja muito mais antigo que eles?",
    "resposta": "Druidas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stonehenge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge is a prehistoric megalithic structure on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones which are held in place with mortise and tenon joints—a feature unique amon\n[…]\nWhen Stonehenge was first opened to the public, it was possible to walk among and even climb on the stones, but they were roped off in 1977 due to serious erosion. Visitors are no longer permitted to touch the stones but are able to walk around the monument from a short distance away. English Heritage does, however, permit access during the summer and winter solstice, and the spring and autumn equinox. Additionally, visitors can make special bookings to access the stones throughout the year.\n[…]\nAs motorised traffic increased, the setting of the monument began to be affected by the proximity of the two roads – on the north side the A344 to Shrewton and Devizes which passed within three metres of the Heel Stone, and to the south the A303, a trunk route connecting London with Devon and Cornwall. In 1979, the Department of the Environment proposed moving visitor facilities into the dip of Stonehenge Bottom.\n[…]\nAlthough the first years of the Free Festival (annual, from 1975 onwards) saw \"very little vandalism\", Stonehenge was fenced off from 1978 onwards. Later, repeated vandalism in the 1980s and 1990s led the authorities to deploy up to hundreds of police, erect barriers around Stonehenge, and impose exclusion zones up to six kilometres from the archaeological monument. The vandalism of 1984 included defacing the monument with purple spray paint.\n[…]\nStonehenge Landscape National Trust – information about the surrounding area."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge é uma estrutura composta, formada por círculos concêntricos de pedras, que chegam a ter 5 metros de altura e a pesar quase 50 toneladas, localizada na Inglaterra, no condado de Wiltshire, na Planície de Salisbury.\n[…]\nA respeito da sua forma e funções arquitetónicas, os estudiosos sugeriram que Stonehenge — especialmente os seus círculos mais antigos — pretendia ser a réplica de um santuário de pedra, santuários de madeira eram mais comuns em épocas Neolíticas.[carece de fontes]?\n[…]\nUma das opiniões mais populares foi a de John Aubrey. No século XVIII, antes do desenvolvimento dos métodos de datação arqueológica e da pesquisa histórica, foi quem primeiro associou este monumento, e outras estruturas megalíticas na Europa, aos antigos druidas, promovendo ideias que difundiram-se na cultura popular do século XVII, mantendo-se até aos dias atuais.\n[…]\nNa realidade, os druidas só apareceram na Grã-Bretanha após 300 a.C., mais de 1500 anos após os últimos círculos de pedras terem sido erguidos. Algumas evidências, entretanto, sugerem que os druidas encontraram os círculos de pedra e os utilizaram com fins religiosos.\n[…]\nOutros autores sugeriram que os monumentos megalíticos foram erguidos pelos romanos, embora esta ideia seja ainda mais improvável, uma vez que os romanos só ocuparam as Ilhas Britânicas após 43, quase dois mil anos após a construção do monumento.\n[…]\nA equipe descobriu um encaixe que, no passado, abrigou as chamadas pedras azuis, rochas vulcânicas de tom azulado, a maioria já desaparecida, que formava a primeira estrutura construída no monumento. Eles acreditam que as pedras azuis podem confirmar a tese de que Stonehenge era um local onde as pessoas iam em busca de cura.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Revolução Neolítica",
      "descricao": "Transição de sociedades caçadoras-coletoras para a agricultura e a vida sedentária no Neolítico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A agricultura começou no Crescente Fértil, no Oriente Médio, há cerca de quantos anos?",
    "resposta": "Doze mil anos",
    "distratores": [
      "Cinco mil anos",
      "Trinta mil anos",
      "Cem mil anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neolithic_Revolution",
      "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Neol%C3%ADtica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neolithic_Revolution",
        "situacao": "ok",
        "texto": "The Neolithic Revolution, also known as the  First Agricultural Revolution, was the wide-scale transition of many human cultures during the Neolithic period in Afro-Eurasia from a lifestyle of hunting and gathering to one of agriculture and settlement, making an increasingly large population possible. These settled communities permitted humans to observe and experiment with plants, learning how th\n[…]\nThe term 'neolithic revolution' was invented by V. Gordon Childe in his book Man Makes Himself (1936). Childe introduced it as the first in a series of agricultural revolutions in Middle Eastern history, calling it a \"revolution\" to denote its significance, the degree of change to communities adopting and refining agricultural practices.\n[…]\nOn the African continent, three areas have been identified as having independently developed agriculture: the Ethiopian highlands, the Sahel and West Africa. By contrast, agriculture in the Nile River Valley is thought to be related to migration of populations and to have developed from the original Neolithic Revolution in the Fertile Crescent.\n[…]\nSince the original human expansions out of Africa 200,000 years ago, different prehistoric and historic migration events have taken place in Europe. Considering that the movement of the people implies a consequent movement of their genes, it is possible to estimate the impact of these migrations through the genetic analysis of human populations. Agricultural and husbandry practices originated 10,000 years ago in a region of the Near East known as the Fertile Crescent.\n[…]\nStrang supports her theory through a comparison of aquatic deities before and after the Neolithic Agricultural Revolution, most notably the Venus of Lespugue and the Greco-Roman deities such as Circe or Charybdis: the former venerated and respected, the latter dominated and conquered."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Neol%C3%ADtica",
        "situacao": "ok",
        "texto": "Revolução neolítica ou Transição Demográfica Neolítica, às vezes chamada de Revolução Agrícola, foi a revolução tecnológica que permitiu a transição em grande escala de muitas culturas humanas do estilo de vida de caçador-coletor e nômade para um agrícola e sedentário fixo, tornando possível uma população cada vez maior. Estas comunidades estabelecidas permitiram que os seres humanos observassem e\n[…]\nDados arqueológicos indicam que a domesticação de vários tipos de plantas e animais evoluiu em locais separados em todo o mundo, começando na época geológica do Holoceno, cerca de 12.500 anos atrás. Foi a primeira revolução agrícola historicamente verificável no mundo. A Revolução Neolítica reduziu muito a diversidade de alimentos disponíveis, com uma mudança para a agricultura que levou a uma diminuição da nutrição humana.\n[…]\nO Oriente Médio possui as mais antigas evidências de agricultura, possuindo diversos sítios arqueológicos que fornecem valiosas informações sobre a Revolução Neolítica nesta região. Frequentemente o surgimento de tal prática neste período e região é dividido em 5 fases. No final da última era glacial, os humanos que habitavam o Oriente Médio eram caçadores e coletores nômades, que se movimentavam de acordo com a presença ou ausência de recursos ao longo do ano.\n[…]\nO termo \"Revolução Neolítica\" foi cunhado em 1923 por V. Gordon Childe para descrever o primeiro de uma série de revoluções agrícolas na história do Oriente Médio. O período é descrito como uma \"revolução\" para denotar sua importância e o grande significado e grau de mudança que afetam as comunidades nas quais novas práticas agrícolas foram gradualmente adotadas e refinadas.\n[…]\nO começo deste processo em diferentes regiões foi datado entre 10 000 a 8 000 a.C. no Crescente Fértil e talvez 8 000 a.C. no Antiga Área Agrícola de Kuk, na Melanésia.\n[…]\nNeolítico\n[…]\nRevolução urbana"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Idade do Bronze",
      "descricao": "Período da Pré-História e da Antiguidade marcado pelo uso de ferramentas e armas de bronze, entre o Calcolítico e a Idade do Ferro."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Por volta de que ano a Idade do Bronze começou no Oriente Próximo, na época das primeiras cidades sumérias?",
    "resposta": "3300 a.C.",
    "distratores": [
      "5500 a.C.",
      "2200 a.C.",
      "1200 a.C."
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bronze_Age"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bronze_Age",
        "situacao": "ok",
        "texto": "The Bronze Age is an archaeological and anthropological term defining a phase in the development of material culture among ancient societies in Asia, the Near East and Europe. An ancient civilisation or culture is deemed part of the Bronze Age if it either produced bronze by smelting its own copper and alloying it with tin, arsenic, or other metals, or traded other items for bronze from producing \n[…]\nEarly Bronze Age (EBA or EB): 3300–2100 BC\n[…]\n3300–3000: EBA I\n[…]\nThe cities of the Ancient Near East housed several tens of thousands of people. Ur, Kish, Isin, Larsa, and Nippur in the Middle Bronze Age and Babylon, Calah, and Assur in the Late Bronze Age similarly had large populations. The Akkadian Empire (2335–2154 BC) became the dominant power in the region. After its fall, the Sumerians enjoyed a renaissance with the Neo-Sumerian Empire. Assyria, along with the Old Assyrian Empire (c.\n[…]\nThe Bronze Age on the Indian subcontinent began c. 3300 BC with the beginning of the Indus Valley Civilization. Inhabitants of the Indus Valley, the Harappans, developed new techniques in metallurgy and produced copper, bronze, lead, and tin. The Late Harappan culture (1900–1400 BC), overlapped the transition from the Bronze Age to the Iron Age; thus it is difficult to date this transition accurately.\n[…]\nThe Yamnaya culture (c. 3300–2600 BC) was a Late Copper Age/Early Bronze Age culture of the Pontic-Caspian steppe associated with early Indo-Europeans. It was followed on the steppe by the Catacomb culture (c. 2800–2200 BC) and the Poltavka culture (c. 2800–2200 BC). The closely related Corded Ware culture in the forest-steppe region to the north (c. 3000–2350 BC) spread eastwards with the Fatyanovo culture (c. 2900–2050 BC), which subsequently developed into the Abashevo culture (c.\n[…]\nUmha Aois – ancient bronze casting videoclip\n[…]\nDivers unearth Bronze Age hoard off the coast of Devon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Idade_do_Bronze",
        "situacao": "ok",
        "texto": "A Idade do Bronze é um período da civilização no qual ocorreu o desenvolvimento desta liga metálica, resultante da mistura de cobre com estanho. Iniciou-se no Oriente Médio em torno de 3300 a.C., substituindo o Calcolítico, embora noutras regiões esta última idade seja desconhecida e a do bronze tenha substituído diretamente o período neolítico. Na África subsaariana, o neolítico é seguido da idad\n[…]\nA Idade do Bronze no antigo Oriente Próximo começou com a ascensão da Suméria no quarto milênio a.C.. O antigo Oriente Próximo é considerado por alguns como o berço da civilização; e praticavam a agricultura intensiva durante todo o ano; desenvolveram um sistema de escrita; inventaram a roda de oleiro; criaram um governo centralizado, códigos de leis e impérios; e introduziram a estratificação social, a escravidão e a guerra organizada.\n[…]\nA Idade do Bronze da Mesopotâmia começou por volta de 3500 a.C. e terminou com o período cassita (c. 1 500–1 155 a.C.). As cidades do antigo Oriente Próximo abrigavam várias dezenas de milhares de pessoas. Ur, Quis, Isim, Larsa e Nipur na Idade do Bronze Média e Babilônia, Ninrude e Assur na Idade do Bronze Final também tinham grandes populações.\n[…]\nCom a primeira dinastia, a capital mudou-se de Abidos para Mênfis com um Egito unificado governado por um rei-deus. Abidos permaneceu como a maior terra santa no sul. As marcas da antiga civilização egípcia, como arte, arquitetura e muitos aspectos da religião, tomaram forma durante o período protodinástico. Mênfis no início da Idade de Bronze era a maior cidade da época.\n[…]\nNa Coréia, o início da Idade do Bronze foi por volta de 1 000–800 a.C., no período Gojoseon.\n[…]\nIsso não apenas tornou as cidades com grandes quantidades desses produtos extremamente ricas, mas também levou a uma mistura de culturas pela primeira vez na história.\n[…]\nDurante a Idade do Bronze se passa o Dilúvio de Deucalião.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Vênus de Willendorf",
      "descricao": "Estatueta paleolítica de uma figura feminina, esculpida em calcário."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Vênus de Willendorf, estatueta paleolítica que aparece em tantos livros de arte, tem cerca de que altura?",
    "resposta": "Onze centímetros",
    "distratores": [
      "Três centímetros",
      "Quarenta centímetros",
      "Um metro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Venus_of_Willendorf"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Venus_of_Willendorf",
        "situacao": "ok",
        "texto": "The Venus of Willendorf is an 11.1-centimetre-tall (4.4 in) Venus figurine estimated to have been made c. 30,000 years ago. It was recovered on 7 August 1908 on an archaeological dig conducted by Josef Szombathy, Hugo Obermaier, and Josef Bayer at a Paleolithic site near Willendorf, a village in Lower Austria. The figurine was found by a workman named either Johann Veran or Josef Veram and is carv\n[…]\nSome scholars reject this terminology, instead referring to the statuette as the Woman of or from Willendorf.\n[…]\nVery little is known about the Venus' origin, method of creation, or cultural significance; however, it is one of numerous \"Venus figurines\" surviving from Paleolithic Europe. The purpose of the carving is the subject of much speculation. Like other similar sculptures, it probably never had feet, and would not have stood on its own, although it might have been pegged into soft ground.\n[…]\nParts of the body associated with fertility and childbearing have been emphasized, leading some researchers to believe that the Venus of Willendorf and similar figurines may have been used as fertility goddesses. The figure has no visible face, her head being covered with circular horizontal bands of what might be rows of plaited hair, or perhaps a type of headdress.\n[…]\nThis reasoning has been criticized by McGill University anthropologist Michael S. Bisson, who notes that water pools and puddles would have been readily available natural mirrors for Paleolithic humans.\n[…]\nArt of the Upper Paleolithic\n[…]\nChristopher L. C. E. Witcombe, \"Women in Prehistory:Venus of Willendorf\" Archived 2004-04-03 at the Wayback Machine.\n[…]\nDon Hitchcock (Don's Maps): \"Venus figures from the Stone Age - The Venus of Willendorf\"\n[…]\n3D model of the Venus of Willendorf in the 3D museum of the Natural History Museum, Vienna"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/V%C3%A9nus_de_Willendorf",
        "situacao": "ok",
        "texto": "Vênus de Willendorf, hoje também conhecida como Mulher de Willendorf, é uma estatueta de Vénus estimada como esculpida entre 28 000 e 25 000 anos antes de Cristo. Ela foi encontrada em 7 de Agosto de 1908 por um trabalhador de nome Johann Veram ou Josef Veram, não se sabe ao certo, que trabalhava na equipe do arqueólogo Josef Szombathy.\n[…]\nPossui 11,1 cm (4 3/8 polegadas) de altura representando estilisticamente uma mulher, descoberta no sítio arqueológico do paleolítico situado perto de Willendorf, na Áustria.\n[…]\nChristopher Witcombe, professor na Sweet Briar College, em Virgínia por exemplo, refere que \"a identificação irónica destas figuras com Vénus satisfez de forma prazeirosa alguns conceitos correntes, na época, sobre o que era na época em que o homem ainda na havia evoluído como agora, sobre as mulheres e sobre o sentido estético\". Outros autores têm alguma relutância em identificá-la como a deusa Mãe-Terra (Grande Mãe) da cultura européia do Paleolítico.\n[…]\nAlguns sugerem que a corpulência representa um elevado estatuto social numa sociedade caçadora-coletora e que, além da óbvia referência à fertilidade, a imagem podia ser também um símbolo de segurança, de sucesso e de bem-estar.\n[…]\nOs pés da estátua não estão esculpidos de forma que se mantenha em pé por si mesma. Por essa razão, especula-se que fosse usada para ser trazida por alguém em vez de ser apenas observada, podendo ser apenas um amuleto. Há ainda quem avance a hipótese de que poderia ser inserida na vagina, em rituais de fertilidade.\n[…]\nA Vénus faz parte da coleção do Museu de História Natural de Viena (Naturhistorisches Museum).\n[…]\nOutras representações semelhantes foram descobertas depois desta, ficando também conhecidas como \"Vénus\".\n[…]\nArte do Paleolítico\n[…]\nArte da Pré-História\n[…]\nVênus de Brassempouy",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Troia",
      "descricao": "Cidade antiga da Idade do Bronze no sítio de Hisarlik, no noroeste da Turquia, associada à Guerra de Troia da Ilíada."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nas escavações de Troia, na Turquia, arqueólogos identificaram cerca de quantas camadas principais de cidades construídas umas sobre as outras?",
    "resposta": "Nove",
    "distratores": [
      "Duas",
      "Quatro",
      "Vinte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Troy",
      "https://pt.wikipedia.org/wiki/Troia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Troy",
        "situacao": "ok",
        "texto": "Troy or Ilion was an ancient city located in present-day Çanakkale, Turkey. It is best known as the setting for the Greek myth of the Trojan War. The modern-day archaeological site, also known as Hisarlık, is open to the public as a tourist destination, and was added to the UNESCO World Heritage list in 1998.\n[…]\nEarly modern travellers in the 16th and 17th centuries, including Pierre Belon and Pietro Della Valle, had mistakenly identified Troy with Alexandria Troas, a ruined Hellenistic town approximately 20 kilometres (12 mi) south of Hisarlık. In the late 18th century, French scholar Jean-Baptiste le Chevalier identified a location near the village of Pınarbaşı, Ezine, a mound approximately 5 kilometres (3.1 mi) south of the currently accepted location.\n[…]\nThe next excavation at Hisarlık was conducted in 1865 by Frank Calvert, a man of English descent who owned a farm nearby. Calvert made extensive surveys of the site and correctly identified it with classical-era Ilion. This identification convinced Heinrich Schliemann that Homeric Troy should be sought beneath the classical-era remains and led to their subsequent partnership.\n[…]\nTroy VIIb3: c. 1050 – c. 950 BC\n[…]\nTroy VI–VII is believed to be the city referred to as Wilusa and Taruisa in Hittite records. These correspondences were first proposed in 1924 by E. Forrer on the basis of linguistic similarities, since \"Taruisa\" is a plausible correspondent of the Greek name \"Troia\" and \"Wilusa\" likewise for the Greek \"Wilios\" (later \"Ilion\"). Subsequent research on Hittite geography has made these identifications more secure, though not all scholars regard them as firmly established.\n[…]\nTroia Projekt and CERHAS (2013). \"Welcome to Troy\". Troy. University of Cincinnati. Archived from the original on 14 May 2008. Retrieved 8 August 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Troia",
        "situacao": "ok",
        "texto": "Troia AO 1990 (em grego antigo Τροία, transl. Troia, ou Ίλιον, transl. Ílion; em latim Troia ou Ilium; em hitita Wilusa ou Truwisa; em turco Truva) é uma cidade lendária, onde ocorreu a célebre Guerra de Troia, descrita na Ilíada, um dos poemas atribuídos a Homero.\n[…]\nNos anos 1870 o arqueólogo alemão Heinrich Schliemann escavou a área. As escavações revelaram várias cidades construídas em sucessão a cada outra. Uma das cidades (Troia VII) é frequentemente identificada com a Troia homérica. Enquanto uma identidade é disputada, o sítio é sucessivamente identificado com a cidade chamada Wilusa em textos hititas; Ilion (grafada originalmente como Ϝιλιον, Wilion, com a letra grega Ϝ) é tida como a versão grega daquele nome.\n[…]\nA história dos troianos começou em mito. De acordo com a mitologia grega, os troianos foram os antigos cidadãos de Troia na Anatólia, atual Turquia. Embora parte da Ásia, Troia é apresentada na lenda como parte da cultura grega de cidades-estado.Troia era conhecida por seus ricos ganhos do comércio portuário com o leste e o oeste, roupas pomposas, produção de ferro e maciças muralhas de defesa. A família real troiana partiu de Electra e Zeus, os pais de Dardano.\n[…]\nPosteriormente, Dardano desposou as filhas de Teucro, e fundou Dardânia (mais tarde governada por Eneias). Com a morte de Dardano, o reino foi passado a seu neto Tros, que chamou seus habitantes de troianos e a terra de Trôade, derivados de seu próprio nome. Ilo, filho de Tros, fundou a cidade de Ilion (Troia), nome derivado do dele próprio. Zeus deu a Ilo o paládio. Posídon e Apolo construíram as muralhas e fortificações ao redor de Troia para Laomedonte, filho mais jovem de Ilo.\n[…]\nEsta é uma lista de soberanos de Troia de acordo com a mitologia grega:"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Çatalhöyük",
      "descricao": "Grande povoado neolítico na Anatólia central, na Turquia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na aldeia neolítica de Çatalhöyük, na Turquia, onde os moradores costumavam enterrar os seus mortos?",
    "resposta": "Sob o piso das casas",
    "fonte": [
      "https://en.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk",
        "situacao": "ok",
        "texto": "Çatalhöyük (English: Chatalhoyuk; , cha-tal-HOO-yuhk; Turkish pronunciation: [tʃaˈtaɫhœjyc]; also Çatal Höyük and Çatal Hüyük; from Turkish çatal \"fork\" + höyük \"tumulus\") is a tell (a mounded accretion resulting from long-term human settlement) of a very large Neolithic and Chalcolithic proto-city settlement in southern Anatolia, which existed from around 7500 BC to 5600 BC and flourished around \n[…]\nEstonian folklorist Uku Masing has suggested as early as in 1976, that Çatalhöyük was probably a hunting and gathering religion and the Mother Goddess figurine did not represent a female deity. He implied that perhaps a longer period of time was needed to develop symbols for agricultural rites. His theory was developed in the paper \"Some remarks on the mythology of the people of Catal Hüyük\".\n[…]\nNeolithic Revolution\n[…]\nMellaart, James (1967). Çatal Hüyük: A Neolithic Town in Anatolia. London; New York: Thames & Hudson; McGraw-Hill Book Company – via archive.org.\n[…]\nRast-Eicher, Antoinette; Karg, Sabine; Jørgensen, Lise Bender (2021) [1144]. \"The use of local fibres for textiles at Neolithic Çatalhöyük\" (PDF). Antiquity. 95 (383): 1129–1144. doi:10.15184/aqy.2021.89. hdl:11250/3032773.\n[…]\nTodd, Ian A. (1976). Çatal Hüyük in Perspective. Menlo Park, California: Cummings Pub. Co. ISBN 0-8465-1957-7.ISBN 0-8465-1958-5\n[…]\nTwiss, Katheryn C.; Bogaard, Amy; Haddow, Scott; et al. (6 September 2024). \"'But some were more equal than others:' Exploring inequality at Neolithic Çatalhöyük\". PLOS ONE. 19 (9) e0307067. doi:10.1371/journal.pone.0307067. PMC 11379307. PMID 39240951.\n[…]\nHodder, Ian (4 December 2019). What we learned from 25 Years of Research at Catalhoyuk. Oriental Institute lecture – via YouTube.\n[…]\nÇatalhöyük — Excavations of a Neolithic Anatolian Höyük\n[…]\nÇatalhöyük photos at flickr.com\n[…]\nHodder, Ian. \"Çatalhöyük, Religion & Templeton's 25%\". huffingtonpost.com (Interview). Retrieved 21 May 2026."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%87atalh%C3%BCy%C3%BCk",
        "situacao": "ok",
        "texto": "Çatalhüyük (pronuncia-se ʧɑtɑl højyk), Çatal Hüyük, Çatalhöyük, ou Çatalhoyük, é um tel (um acréscimo montanhoso resultante de assentamento humano de longo prazo) de um grande assentamento proto-urbano neolítico e calcolítico no sul da Anatólia, que existiu de aproximadamente 7500 a.C. a 5600 a.C. e floresceu por volta de 7000 a.C.. Em julho de 2012, foi inscrito como Património Mundial da UNESCO.\n[…]\nOs povoados pré-históricos em montes foram abandonados antes da Idade do Bronze. Um canal do rio Çarşamba corria entre os dois montes, e o povoado foi construído sobre argila aluvial, que pode ter favorecido a agricultura primitiva. Atualmente, o rio mais próximo é o Eufrates. Mostra um estágio cultural refinado, com casas de tijolos crus nas quais se entrava pelo teto, possivelmente por uma escada de madeira. O trânsito entre as casas se fazia por cima destas, já que não havia ruas entre elas.\n[…]\nAs casas tinham plataformas para dormir, sentar ou trabalhar, e um fogão. As áreas eram divididas em plataformas, separando as partes limpas (que parecem ter sido usadas para dormir, sentar, armazenar e preparar alimentos) das partes sujas.\n[…]\nOs mortos eram enterrados dentro da própria casa em posição fetal, sob plataformas que talvez fossem usadas como cama.\n[…]\nAlém da cerâmica, há várias camadas de murais superpostas dentro das casas, alguns deles figurativos e outros em forma de padrões repetidos. Há muitas esculturas, em osso ou modeladas, algumas representando uma figura feminina cujo significado é discutido pelos arqueólogos: seria talvez uma deusa, ou uma imagem para propiciar a fecundidade.\n[…]\nMellaart, James (1967). Catal Huyuk: A Neolithic Town in Anatolia. [S.l.]: McGraw-Hill",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Tratado de Kadesh",
      "descricao": "Tratado de paz entre o Egito de Ramsés II e o Império Hitita, de cerca de 1259 a.C., firmado após a Batalha de Kadesh."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Uma réplica do tratado de paz entre egípcios e hititas, de mais de três mil anos, fica exposta na sede de qual organização?",
    "resposta": "ONU, em Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian%E2%80%93Hittite_peace_treaty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian%E2%80%93Hittite_peace_treaty",
        "situacao": "ok",
        "texto": "The Egyptian–Hittite peace treaty, also known as the Eternal Treaty or the Silver Treaty, was concluded between Ramesses II of the Egyptian Empire and Ḫattušili III of the Hittite Empire around 1259 BC. It is the oldest known surviving peace treaty (though the much older treaty between Ebla and Abarsal may be the earliest recorded diplomatic treaty in human history) and the only one from the ancie\n[…]\nThough it is sometimes called the Treaty of Kadesh, the text itself does not mention the Battle of Kadesh, which took place around 1274 BC. Both sides of the treaty have been the subject of intensive scholarly study. Despite being agreed upon by the Egyptian pharaoh and the Hittite king, it did not bring about an enduring peace; in fact, \"an atmosphere of enmity between Hatti and Egypt lasted many years\" until the eventual treaty of alliance was signed.\n[…]\nHittite-Egyptian relations officially began once Hatti took over Mitanni's role as the ruling power in central Syria and from there tensions would continue to be high until the conclusion of the treaty nearly 100 years later. During the invasion and the eventual defeat of Mitanni, the Hittite armies poured into Syria and began to exert their rule over the Egyptian vassals of Kadesh and Amurru.\n[…]\nThe peace treaty of Ramesses II and Hattušiliš III is known as one of the most important official \"international\" peace treaties between two great powers from the ancient Near East because its exact wording is known to us. Divided into points, the treaty flows between the Egyptians and Hittites as each side makes pledges of brotherhood and peace to the other in terms of the objectives.\n[…]\nBy furthering their bonds of friendship through marriage, the Hittites and Egyptians maintained a mutually-beneficial peace that would exist between them until the fall of Hatti to Assyria, nearly a century later."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Cades",
        "situacao": "ok",
        "texto": "O Tratado Egípcio-Hitita, usualmente designado por Tratado de Cades ou de Cadexe, foi um tratado de paz celebrado entre o faraó egípcio Ramessés II e o rei hitita Hatusil III c. 1 259 a.C., que marcou o fim oficial das guerras entre as duas grandes potências do Médio Oriente, que se seguiram aos conflitos armados de grandes proporções que culminaram na célebre batalha de Cades, travada 16 anos ant\n[…]\nO tratado foi assinado para pôr termo a uma longa guerra entre os hititas e os egípcios, que lutaram durante mais de dois séculos pelo domínio dos territórios do Mediterrâneo Oriental. O conflito culminou com a tentativa de invasão egípcia em 1 274 a.C., que foi travada pelos hititas na cidade de Cades, nas margens do rio Orontes, a pouca distância da atual cidade síria de Hómece.\n[…]\nDuas das tabuletas estão atualmente em exposição na secção do Oriente dos Museus Arqueológicos de Istambul. A terceira está exposta nos Museus Estatais de Berlim. Uma cópia do tratado está exposta em posição de destaque numa parede da Sede das Nações Unidas em Nova Iorque.\n[…]\nOutros incentivos ao tratado eram o fim da pressão sobre as finanças das onerosas guerras com Hati e o facto de que o aumento da segurança dos interesses egípcios na Síria dava a Ramessés a oportunidade de clamar a sua \"derrota\" dos hititas. Como tinha sido Hatusil a aproximar-se de Ramessés, o faraó é representado no Ramesseum recebendo os hititas numa atitude de submissão.\n[…]\nEsta agressão tornou mais tensas as relações entre os dois países e, mais importante que isso, os assírios davam sinais de se estarem a colocar em posição para lançarem mais ataques no lado ocidental do rio Eufrates. O perigo de uma invasão assíria foi uma das motivos mais fortes que levou os hititas a negociar com os egípcios. Nos termos do tratado, os egípcios comprometiam-se a juntarem-se aos seus aliados hititas se a Assíria invadisse o território de Hati.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Domesticação do arroz",
      "descricao": "Processo pré-histórico pelo qual o arroz selvagem foi transformado em planta cultivada, na China."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O arroz foi domesticado há cerca de nove mil anos no vale de qual grande rio chinês?",
    "resposta": "Yangtzé (rio Azul)",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_rice_cultivation",
      "https://en.wikipedia.org/wiki/Rice"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_rice_cultivation",
        "situacao": "ok",
        "texto": "The history of rice cultivation is an interdisciplinary subject that studies archaeological and documentary evidence to explain how rice was first domesticated and cultivated by humans, the spread of cultivation to different regions of the planet, and the technological changes that have impacted cultivation over time.\n[…]\nThere are two most likely centers of domestication for rice as well as the development of the wetland agriculture technology. The first is in the lower Yangtze River, believed to be the homelands of the pre-Austronesians and possibly also the Kra–Dai, and associated with the Kauhuqiao, Hemudu, Majiabang, Songze, Liangzhu, and Maqiao cultures. It is characterized by pre-Austronesian features, including stilt houses, jade carving, and boat technologies.\n[…]\nRecent research indicates that rice was independently domesticated in South America before the 14th century from Amazon wild rice.\n[…]\nHowever, the climate in regions north of the Pearl River would likely be less suitable for this wild rice. Human activity over thousands of years may also have removed populations of wild rice from their previous ranges. Based on Chinese texts, it is speculated there are populations of native wild rice along the Yangtze basin in c. AD 1,000 that have recently become extinct.\n[…]\nIn 2003, Korean archaeologists announced they discovered rice husks in Soro-ri, Korea, which dated to 13,000 BC, that they claimed show signs of having been cut by stone tools. These antedates the oldest grains found in China, which were dated to 10,000 BC, and potentially challenge the explanation that domesticated rice originated in the Yangtze River basin of China. The findings were received by academia with strong skepticism and the claim remains dubious.\n[…]\nRice was cultivated as far south as the commune San Carlos."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rice",
        "situacao": "ok",
        "texto": "Rice is a cereal grain and, in its domesticated form, is the staple food of over half of the world's population, particularly in Africa and Asia. Rice is the seed of the grass species Oryza sativa (Asian rice)—or, less commonly, Oryza glaberrima (African rice). Asian rice was domesticated in China some 13,500 to 8,200 years ago; African rice was domesticated independently in West Africa about 3,00\n[…]\nOryza sativa rice was first domesticated in China 9,000 years ago, by people of Neolithic cultures in the Upper and Lower Yangtze, associated with Hmong–Mien speakers and pre-Austronesians, respectively. The functional allele for nonshattering, the critical indicator of domestication in grains, as well as five other single-nucleotide polymorphisms, is identical in both indica and japonica. This implies a single domestication event for O. sativa.\n[…]\nRice spread around the rest of the world through cultivation, migration and trade, eventually to the Americas as part of the Columbian exchange after 1492. The now less common Oryza glaberrima (African rice) was independently domesticated in Africa around 3,000 years ago, and introduced to the Americas by the Spanish.\n[…]\nThe high-yielding varieties are a group of crops created during the Green Revolution to increase global food production radically. The first Green Revolution rice variety, IR8, was produced in 1966 at the International Rice Research Institute through a cross between an Indonesian variety named \"Peta\" and a Chinese variety named \"Dee Geo Woo Gen\". Green Revolution varieties were bred to have short strong stems so that the rice would not lodge or fall over.\n[…]\nArtificial rice\n[…]\nDirect seeded rice\n[…]\nList of rice dishes\n[…]\nRice Belt\n[…]\nSingh, B. N. (2018). Global Rice Cultivation & Cultivars. New Delhi: Studium Press. ISBN 978-1-62699-107-1. Archived from the original on March 14, 2018. Retrieved March 14, 2018."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Domesticação da mandioca",
      "descricao": "Processo pré-histórico pelo qual povos indígenas sul-americanos transformaram uma planta selvagem na mandioca cultivada."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A mandioca, base da farinha e da tapioca, foi domesticada há milhares de anos em que região da América do Sul?",
    "resposta": "Sudoeste da Amazônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cassava",
      "https://pt.wikipedia.org/wiki/Mandioca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cassava",
        "situacao": "ok",
        "texto": "Manihot esculenta, commonly called cassava, manioc, or yuca (among numerous regional names), is a woody shrub of the spurge family, Euphorbiaceae, native to South America, from Brazil, Paraguay and parts of the Andes. Although a perennial plant, cassava is extensively cultivated in tropical and subtropical regions as an annual crop for its edible starchy tuberous root.\n[…]\nIn Taiwanese culture, later spread to the United States, cassava \"juices\" are dried to a fine powder and used to make tapioca, a popular starch used to make bubbles (tapioca pearl), a chewy topping in bubble tea. Haitian bambouri and Jamaican bammy are blended Caribbean food traditions, combining Indigenous Caribbean cassava-based cooking with African cultural practices.\n[…]\nAlcoholic beverages made from cassava include cauim (Brazil), kasiri (Venezuela, Guyana, Suriname), parakari or kari (Venezuela, Guyana, Surinam), and nihamanchi (South America),\n[…]\nAn ancestral method used by the indigenous people of the Caribbean to detoxify cassava is by peeling, grinding, and mashing; filtering the mash through a basket tube (sebucan or tipiti) to remove the hydrogen cyanide; and drying and sieving the mash for flour. The poisonous filtrate water was boiled to release the hydrogen cyanide, and used as a base for stews.\n[…]\nManí, a Tupí myth of origins, is the name of an indigenous girl with very fair complexion. The Amazonian legend of Maní is related to the cult of Manioc, the native staple  that sprang from her grave. Sometime later a crack opened on the earth and the people of the tribe found a fruit that resembled the white skin tone of the dead child's body. They picked up the fruit from the ground, peeled and cooked it, and for their surprise it tasted delicious. It even renewed their strength.\n[…]\nWhy cassava? Global Cassava Development Strategy Archived 7 November 2016 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandioca",
        "situacao": "ok",
        "texto": "Manihot esculenta, conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga, é uma planta da família das Euphorbiaceae. Esta planta é nativa da América do Sul, no entanto está presente em muitas regiões do mundo.\n[…]\nPodridão Radicular – Afeta principalmente os cultivos da região norte. Estima-se que na região amazônica em áreas de várzea a perda chegue a mais de 50% e, em áreas de terra firme, 30%. Já em áreas que detêm solos com má drenagem da água da chuva observa-se que estas perdas são, na maioria dos casos, totais.\n[…]\nFarinha de tapioca\n[…]\nDela, também se faz outra farinha: o polvilho (fécula de mandioca), doce ou azedo, que serve para a preparação de diversas comidas típicas brasileiras, como o pão de queijo. Apesar de frequente em países da África e da Ásia, para onde foram levadas pelos colonizadores ibéricos, o hábito de se utilizar as folhas da planta para alimentação, no Brasil, só ocorre na Região Norte.\n[…]\nOs araras do Pará, que eram nômades não cultivavam mandioca. Os omáguas do Alto Amazonas colhiam a mandioca e a enterravam deixando apodrecer parcialmente e assim a consumiam. Os camaiurás de Mato Grosso, para virar beiju, talhavam na madeira a pá, que apresentava a extremidade semi circular.\n[…]\nMingau de tapioca — a tapioca era cozida em água até formar uma substância gomosa, onde era acrescentado sal, açúcar ou suco de frutas. Os tucanos da Amazônia ingeriam este mingau pela manhã.\n[…]\nPão de guerra — feito por índios de Itacoatiara, no Amazonas, o pão de guerra, cuja matéria-prima era a farinha de mandioca, apresentava a superfície esverdeada devido aos fungos e algas que nela se desenvolviam quando era armazenado.\n[…]\nFabricação de farinha de mandioca\n[…]\nFarinha múltipla ou Farinha multimistura"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cemitério Real de Ur",
      "descricao": "Conjunto de túmulos sumérios em Ur, com ricos objetos de ouro e outros tesouros."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O lápis-lazúli azul das joias do Cemitério Real de Ur, na Mesopotâmia, vinha de minas de qual país atual?",
    "resposta": "Afeganistão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Royal_Cemetery_at_Ur",
      "https://en.wikipedia.org/wiki/Lapis_lazuli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Royal_Cemetery_at_Ur",
        "situacao": "ok",
        "texto": "The Royal Cemetery at Ur is an archaeological site in modern-day Dhi Qar Governorate in southern Iraq. The initial excavations at Ur took place between 1922 and 1934 under the direction of Leonard Woolley in association with the British Museum and the University of Pennsylvania  Museum of Archaeology and Anthropology in Philadelphia, Pennsylvania, United States.\n[…]\nIn contrast to the Great Death Pit, one of the royal tombs at Ur survived practically in its entirety, which was most notably due to its treasures left largely unscathed on the body of royal lineage. Such a body belonged to Queen Puabi and was easy to identify due to her jewelry made out of beads of gold, silver, lapis lazuli, carnelian, and agate.\n[…]\nThe various female personages and attendants buried at the cemetery of Ur were adorned with jewelry made from gold, silver, lapis lazuli and carnelian including a variety of necklaces, earrings, headdresses, and hair rings. The presence of carnelian beads amongst the grave goods at the cemetery indicated trade with the Indus Valley. Hair ornaments included hair combs with floral elements made of gold, lapis, shell, and pink limestone.\n[…]\nThe pottery types at Ur included mostly jar forms and bowls with limited variety in style. Conical bowls, as recorded by the excavators, fall into two categorical types based on their rim diameters. Woolley identified 24 different pottery types at the Royal Cemetery based on the excavation of 238 graves. In order to date the pottery and burials at Ur, some scholars have looked to the pottery to compare to similar types from other sites in Mesopotamia and then checked using cylinder seals.\n[…]\nOther details such as the eyes, horns, and beard are fashioned from lapis lazuli.\n[…]\nSeveral artefacts are known from tomb PG 779 at the Royal Cemetery at Ur, such as the famous Standard of Ur, and decorated shell plaques."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lapis_lazuli",
        "situacao": "ok",
        "texto": "Lapis lazuli (UK: ; US: ) is a deep-blue metamorphic rock used as a semi-precious stone that has been prized since antiquity for its intense color. Its name originates from the Persian word for the gem, lāžward, and serves as the root for the word for \"blue\" in several languages, including Spanish and Portuguese azul and English azure. Lapis lazuli is a rock composed primarily of the minerals lazu\n[…]\nLapis lazuli is found in limestone in the Kokcha River valley of Badakhshan Province in north-eastern Afghanistan, where the Sar-i Sang mine deposits have been worked for more than 6,000 years. Afghanistan was the source of lapis for the ancient Persian, Egyptian and Mesopotamian civilizations, as well as the later Greeks and Romans. Ancient Egyptians obtained the material through trade with Mesopotamians, as part of Egypt–Mesopotamia relations and from ancient Ethiopia.\n[…]\nLapis lazuli has been mined in Afghanistan and exported to the Mediterranean world and South Asia since the Neolithic age, along the ancient trade route between Afghanistan and the Indus Valley dating to the 7th millennium BC. Quantities of these beads have also been found at 4th millennium BC settlements in Northern Mesopotamia, and at the Bronze Age site of Shahr-e Sukhteh in southeast Iran (3rd millennium BC).\n[…]\nLapis was also used in ancient Persia, Mesopotamia by the Akkadians, Assyrians, and Babylonians for seals and jewelry. It is mentioned several times in the Mesopotamian poem, the Epic of Gilgamesh (17th–18th century BC), one of the oldest known works of literature. The Statue of Ebih-Il, a 3rd millennium BC statue found in the ancient city-state of Mari in modern-day Syria, now in the Louvre, uses lapis lazuli inlays for the irises of the eyes.\n[…]\n\"Why a Medieval Woman Had Lapis Lazuli Hidden in Her Teeth\", The Atlantic, January 2019\n[…]\nLapis Lazuli birthstone virtues and story at birthstone.guide"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
