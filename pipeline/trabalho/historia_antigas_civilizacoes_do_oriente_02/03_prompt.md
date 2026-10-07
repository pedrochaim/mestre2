Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Antigas Civilizações do Oriente** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Nínive",
      "descricao": "Antiga capital do Império Assírio, às margens do rio Tigre, no norte do atual Iraque."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As ruínas de Nínive, a grande capital do Império Assírio, ficam às margens do Tigre, junto a que cidade do Iraque?",
    "resposta": "Mossul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nineveh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nineveh",
        "situacao": "ok",
        "texto": "Nineveh was an ancient Near Eastern city of Upper Mesopotamia, located in the modern-day city of Mosul in northern Iraq. It is located on the eastern bank of the Tigris River and was the capital and largest city of the Neo-Assyrian Empire, and potentially the wealthiest city in the ancient world. Today, it is a common name for the half of Mosul that lies on the eastern bank of the Tigris, and the \n[…]\nIn fulfillment of prophecy, God made \"an utter end of the place\". It became a \"desolation\". In Zephaniah 2:13–15 the minor prophet Zephaniah also predicts its destruction along with the fall of the empire of which it was the capital. Nineveh is also the setting of the Book of Tobit.\n[…]\nIn Warhammer 40,000, the perpetual Ollanius Persson is said to be born in Nineveh.\n[…]\nIsaac of Nineveh\n[…]\nJoanne Farchakh-Bajjaly photos Archived 2012-10-09 at the Wayback Machine of Nineveh taken in May 2003 showing damage from looters\n[…]\nJohn Malcolm Russell, \"Stolen stones: the modern sack of Nineveh\" in Archaeology; looting of sculptures in the 1990s\n[…]\n[20] Nineveh at the British Museum's website. Includes photographs of items from their collection.\n[…]\nUniversity of California Digital Nineveh Archives A teaching and research tool presenting a comprehensive picture of Nineveh within the history of archaeology in the Near East, including a searchable data repository for meaningful analysis of currently unlinked sets of data from different areas of the site and different episodes in the 160-year history of excavations\n[…]\nCyArk Digital Nineveh Archives, publicly accessible, free depository of the data from the previously linked UC Berkeley Nineveh Archives project, fully linked and georeferenced in a UC Berkeley/CyArk research partnership to develop the archive for open web use. Includes creative commons-licensed media items.\n[…]\nPhotos of Nineveh, 1989–1990\n[…]\nNineveh & Record"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%ADnive",
        "situacao": "ok",
        "texto": "Nínive (em acadiano: Ninua; neo-aramaico assírio: ܢܝܢܘܐ; em hebraico:  נינוה, Nīnewē; em grego:  Νινευη; em latim: Nineve; árabe: نينوى, Naīnuwa), uma \"cidade excessivamente grande\", como é chamada no Livro de Jonas, jazia na margem oriental do rio Tigre, na antiga Assíria. Nínive (Ninawa) era um grande amontoado de vários vilarejos ao longo do Rio Tigre. Atualmente, onde ficava, existe a cidade m\n[…]\nOs montículos antigos de Nínive, Kouyunjik e Nabī Yūnus (\"Profeta Jonas\" em árabe), estão localizados num nível da planície perto da confluência do rio Tigre e Khosr com uma área de 1800 acres circunscrita por uma muralha de tijolos de 12 quilômetros. Esse espaço extensivo inteiro é hoje uma imensa área de ruínas sobreposta em partes pelos novos subúrbios da cidade de Mossul.\n[…]\nA cidade de Nínive foi vassala do reino de Mitani até meados do século XIV a.C., quando os reis assírios de Assur a capturaram.\n[…]\nA grandeza de Nínive teve duração curta. Por volta do ano 633 a.C. o Segundo império Assírio começou a mostrar sinais de fraquezas, e Nínive foi atacada pelos medos, que por volta do ano 625 a.C., aliaram-se aos caldeus e sussianos, e a atacaram novamente. Nínive caiu em 612 a.C., e foi arrasada até o chão. O povo na cidade, que não pôde escapar para as últimas fortalezas assírias no oeste, foi massacrado ou deportado. Muitos esqueletos não enterrados foram encontrados por arqueólogos no sítio.\n[…]\nO Império Assírio então acabou, e os Medos e Babilônios dividiram suas províncias entre si.\n[…]\n\"11 Desta mesma terra saiu à Assíria e edificou a Nínive, Reobote-Ir, Calá”.Apesar do Livro de Reis e o Livro de Crônicas falarem bastante sobre o Império Assírio, Nínive não é notada até os dias de Jonas, quando é descrita (Jonas 3:3; 4:11) como uma “cidade excessivamente grande com três dias de jornada”, provavelmente em circuito. Isso daria uma circunferência de aproximadamente 100 quilômetros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Alfabeto fenício",
      "descricao": "Sistema de escrita alfabética criado pelos fenícios no litoral do Levante, ancestral dos alfabetos grego e latino."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O alfabeto fenício, ancestral do grego e do latino, nasceu em cidades como Biblos e Tiro. Hoje elas pertencem a que país?",
    "resposta": "Líbano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phoenician_alphabet",
      "https://en.wikipedia.org/wiki/Byblos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        "situacao": "ok",
        "texto": "The Phoenician alphabet is an abjad (consonantal alphabet)  that was used across the Mediterranean civilization of Phoenicia for most of the 1st millennium BC. It was one of the first alphabets, attested in Canaanite and Aramaic inscriptions found across the Mediterranean basin. In the history of writing systems, the Phoenician script was also the first to have a fixed writing direction—while prev\n[…]\nThe Phoenician alphabet was known to the Jewish sages of the Second Temple era, who called it the \"Old Hebrew\" (Paleo-Hebrew) script.\n[…]\nThe Aramaic alphabet, used to write Aramaic, is an early descendant of Phoenician. Aramaic, being the lingua franca of the Middle East, was widely adopted. It later split off into a number of related alphabets, including Hebrew, Syriac, and Nabataean, the latter of which, in its cursive form, became an ancestor of the Arabic alphabet. The Hebrew alphabet emerges in the Second Temple period, from around 300 BC, out of the Aramaic alphabet used in the Persian empire.\n[…]\nIt has been proposed, notably by Georg Bühler (1898), that the Brahmi script of India (and by extension the derived Indic alphabets) was ultimately derived from the Aramaic script, which would make Phoenician the ancestor of virtually every alphabetic writing system in use today, with the notable exception of hangul.\n[…]\nThe Latin alphabet was derived from Old Italic (originally derived from a form of the Greek alphabet), used for Etruscan and other languages. The origin of the Runic alphabet is disputed: the main theories are that it evolved either from the Latin alphabet itself, some early Old Italic alphabet via the Alpine scripts, or the Greek alphabet. Despite this debate, the Runic alphabet is clearly derived from one or more scripts that ultimately trace their roots back to the Phoenician alphabet.\n[…]\nOmniglot.com (Phoenician alphabet)\n[…]\n[1] Free-Libre GPL2 Licensed Unicode Phoenician Font"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Byblos",
        "situacao": "ok",
        "texto": "Byblos ( BIB-loss; Ancient Greek: Βύβλος), also known as Jbail, Jebeil, Jbeil or Jubayl (Arabic: جُبَيْل, romanized: Jubayl, locally Jbeil [ʒ(ə)beːl]), is an ancient city in the Keserwan-Jbeil Governorate of Lebanon. The area is believed to have been first settled between 8800 and 7000 BC and continuously inhabited since 5000 BC.\n[…]\nArchaeological evidence at Byblos, particularly the five Byblian royal inscriptions dating back to around 1150–950 BC, shows existence of a Phoenician alphabet of twenty-two characters; an important example is the Ahiram sarcophagus. The use of the alphabet was spread by Phoenician merchants through their maritime trade into parts of North Africa and Europe.\n[…]\nIn the Achaemenid Empire (538–332 BC), Byblos was the fourth of four Phoenician vassal kingdoms established by the Persians; the first three being Sidon, Tyr, and Arwad.\n[…]\nThe Byblos Wax Museum displays wax statues of characters whose dates of origin range from Phoenician times to current days.\n[…]\nHead, Barclay; et al. (1911). \"Phoenicia\". Historia Numorum (2nd ed.). Oxford: Clarendon Press. pp. 788–801.\n[…]\nAubet, Maria Eugenia (2001). The Phoenicians and the West: Politics, Colonies and Trade. Translated by Mary Turton (2d ed.). Cambridge, UK: Cambridge University Press. ISBN 978-0521795432.\n[…]\nBaumgarten, Albert I. (1981). The Phoenician History of Philo of Byblos: A Commentary. Leiden: E. J. Brill. ISBN 978-90-04-06369-3.\n[…]\nElayi, Josette; Elayi, A. G. (2014). A Monetary and Political History of the Phoenician City of Byblos: In the Fifth and Fourth Centuries B.C.E. Winona Lake, IN: Eisenbrauns. ISBN 978-1575063041.\n[…]\nKaufman, Asher S. (2004). Reviving Phoenicia: In Search of Identity In Lebanon. London: I.B. Tauris. ISBN 978-1780767796.\n[…]\nMoscati, Sabatino (1999). The World of the Phoenicians. London: Phoenix Giant. ISBN 9780753807460."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio",
        "situacao": "ok",
        "texto": "O alfabeto fenício (na verdade um consonantário, por ter apenas as consoantes e não as vogais), foi o sistema de escrita usado na Fenícia (atuais Síria, Líbano e norte de Israel) que viria a dar origem a grande parte dos sistemas atuais. Foi adaptado do anterior alfabeto semítico e seu registro mais antigo data de 1200 a.C. O sistema deriva da escrita protosinaítica, por sua vez derivada dos hieró\n[…]\nA inovação do alfabeto fenício está em sua natureza puramente fonética, na qual cada símbolo representa um som, que exige a memorização de apenas alguns caracteres, diferentemente dos sistemas logográficos hieroglíficos e cuneiformes (apesar de não totalmente logográficos), com o primeiro se valendo de caracteres fonéticos e do segundo se valendo de um sistema silábico[A partir de quando?\n[…]\nAntes ou depois do surgimento do sistema fenício?], em que cada caractere representava uma palavra, fazendo necessária a existência de milhares de caracteres (de forma similar aos caracteres chineses), que por sua vez exigiam alta especialização para serem aprendidos.\n[…]\nDentre os sistemas derivados do fenício, estão o alfabeto grego, a escrita itálica antiga e o aramaico (que por sua vez originaria os abjads hebraico e árabe). Não são exemplos de descendência aqueles sistemas do sul da Arábia e o etíope.\n[…]\nO alfabeto fenício é melhor descrito como um abjad porque só contém caracteres para representar consoantes, as vogais devendo ser inferidas, enquanto que um verdadeiro alfabeto representa tanto consoantes quanto vogais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Harappa",
      "descricao": "Sítio arqueológico da Idade do Bronze, na região do Punjab, que deu nome à civilização harappiana do Vale do Indo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O rio Indo deu nome à Índia, mas as ruínas de Harappa, que batizaram a civilização do Vale do Indo, ficam em que país?",
    "resposta": "Paquistão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harappa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harappa",
        "situacao": "ok",
        "texto": "Harappa (Punjabi pronunciation: [ɦəɽəˈpaː]) was a settlement in Punjab, Pakistan, about 24 kilometres (15 miles) west of Sahiwal, that takes its name from a modern village near the former course of the Ravi River. The Ravi now runs eight kilometres (five miles) to the north.\n[…]\nThe Harappans had traded with ancient Mesopotamia and Elam, among other areas. Cotton textiles and agricultural products were the primary trading objects. The Harappan merchants also had procurement colonies in Mesopotamia as well, which served as trading centres. They also traded extensively with people living in southern India, near modern-day Karnataka, to procure gold and copper from them.\n[…]\nHarappa is the type site of the Bronze Age Indus Valley Civilisation (\"IVC\"), as it was the first IVC site to be excavated by the Archaeological Survey of India during the British Raj, although its significance did not become manifest until the discovery of Mohenjo-daro in Sindh, Pakistan, some years later. For this reason, IVC is sometimes called the \"Harappan civilisation,\" a term more commonly used by the Archaeological Survey of India after decolonization in 1947.\n[…]\nThe discovery of Harappa and, soon afterwards, Mohenjo-Daro, two major urban IVC settlements, was the culmination of work that had begun after the founding of the Archaeological Survey of India in 1861.\n[…]\nThe area of the late Harappan period consisted of the areas of the Daimabad, Maharashtra, and Badakshan regions of Afghanistan. The area covered by this civilisation would have been very large with a distance of around 2,400 kilometres (1,500 mi).\n[…]\nHarappa Museum\n[…]\nHarappa.com\n[…]\n\"Harappa Town Planning\"- article by Dr. S. Srikanta Sastri\n[…]\n\"Harappa\". Department of Archaeology and Museums – Government of Pakistan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harapa",
        "situacao": "ok",
        "texto": "Harapa  era uma das cidades - e é um dos sítios arqueológicos - da antiga civilização harapeana, também chamada de 'civilização do Vale do Indo'. Esta civilização floresceu quando o equinócio de verão do hemisfério norte ocorria na constelação do Touro. Foi esquecida por milênios, e sua existência veio à luz com escavações feitas em 1920.\n[…]\nA civilização harapeana, até cerca de 1980 conhecida como Civilização do Vale do Indo, se estendeu por mais de 1,5 milhão de quilômetros quadrados, mais que a Mesopotâmia e o Antigo Egito juntos. A história da cultura indiana é a soma de várias idades, sendo a primeira, pré-védica, a civilização harapeana. Foram parte dela, entre outras: Harapa, Moenjodaro e Lotal, cidades que foram destruídas por volta de 1 900 a.C.\n[…]\nA matemática da civilização harapeana é a base dos Sulba Sutras, que davam instruções arquitetônicas detalhadas para a construção de altares. Os selos de Harapa mostram claramente algumas posturas de ioga como o padmasana, indicando o quanto são antigas as práticas de desenvolvimento da consciência na Índia. A escrita harapeana ainda não foi decifrada.\n[…]\nDe fato, uma seca de cerca de trezentos anos destruiu, por volta de 2 000 a.C., várias civilizações.\n[…]\nTambém não há sinais de migração dos dravídicos do sul para o vale do Indo, portanto não se pode estabelecer parentesco entre estes povos. Há, sim, apenas uma ligação cultural entre os sinais de cultos religiosos e os cultos descritos nos Vedas claramente impostos pelos invasores arianos que aproveitaram-se desta seca que enfraqueceu os harapeanos para invadi-los.\n[…]\nThe Indus Valley Civilization (harappa.com/)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Grande Canal da China",
      "descricao": "Sistema de canais artificiais da China, ampliado na dinastia Sui, que liga Pequim a Hangzhou."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Grande Canal da China, cavado ao longo de séculos, tem uma ponta em Pequim. Em que cidade do sul fica a outra?",
    "resposta": "Hangzhou",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Canal_(China)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Canal_(China)",
        "situacao": "ok",
        "texto": "The Grand Canal (Chinese: 大运河; pinyin: Dà yùnhé) is a system of interconnected canals linking various major rivers and lakes in North and East China, serving as an important waterborne transport infrastructure between the north and the south during Medieval and premodern China. It is the longest artificial waterway in the world and a World Heritage Site.\n[…]\nThe only other viable contender with Suzhou in the Jiangnan region was Hangzhou, but it was located 200 km (120 mi) further down the Grand Canal and away from the main delta. Even the shipwrecked Korean Choe Bu (1454–1504)—while traveling for five months throughout China in 1488—acknowledged that Hangzhou served not as a competitor but as an economic feeder into the greater Suzhou market.\n[…]\nThe canal was an important artery of transport and supply for the region during periods of disunity in medieval China and was particularly prosperous and vital during the Southern Song, who established their capital at Lin'an within present-day Hangzhou. During the Yuan, Ming, and Qing, the canal diminished in importance but was kept navigable until the development of railways and roads in the 19th and 20th century.\n[…]\nIn November 2008, the Eastern Zhejiang Canal was added to the Grand Canal's UNESCO nomination and, in May 2013, was officially included as part of the Grand Canal and listed among the 7th group of Major Historical and Cultural Sites Protected at the National Level by the Chinese government. In 2014, it was included with the Beijing–Hangzhou and Sui and Tang canals as part of UNESCO's listing for the Grand Canal.\n[…]\nThe convenience of transport also enabled rulers to lead inspection tours to southern China. In the Qing dynasty, the Kangxi and Qianlong emperors made twelve trips to the south, on all occasions but one reaching Hangzhou.\n[…]\nHangzhou Section of The Grand Canal – EN.GOTOHZ.COM"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Canal_da_China",
        "situacao": "ok",
        "texto": "O Grande Canal da China, conhecido também como Grande Canal Jing-Han é o canal ou rio artificial mais antigo do mundo.\n[…]\nNo ano 604, o imperador Yang Guang da dinastia Sui deixou a capital, Chang'an (em Xian) para trasladar-se a Luoyang. Em 605, o imperador ordenou a construção de dois projetos: transferir a capital do país para Luoyang (em Henan) e escavar o Grande Canal entre Pequim e Hancheu.\n[…]\nTardou-se seis anos para construir o canal, unindo todos os canais que se encontravam em seu curso e ligando o rio Amarelo ao Haihe, ao Huai, ao Yangzi e ao Qiantangjiang. O grande canal se inicia em Pequim e termina ao sul de Hancheu (Zhejiang). Seu comprimento total é de 1.794 quilômetros, sendo o mais extenso do mundo. Além do município de Pequim, cruza por Tianjin, Hebei, Shandong, Jiangsu e Zhejiang.\n[…]\nO problema é que está mal construída, esquecida e recebe lodo da bacia do rio Amarelo, o que dificulta a navegação. As zonas mais utilizadas atualmente são a parte sul e a zona central, foi construída para unificar os povos do norte e sul usando esse grande canal (pois as pessoas que iriam ajudando a construir o canal viam de norte e sul).\n[…]\nO Grande Canal foi incluído na lista de patrimônio Mundial da UNESCO por \"ser uma construção gigantesca, criando o maior e mais extenso projeto de engenharia antes da Revolução Industrial\".\n[…]\nThe Reinvigoration of the Grand Canal\n[…]\nHangzhou Section of The Grand Canal – EN.GOTOHZ.COM",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Grande Canal da China",
      "descricao": "Sistema de canais artificiais da China, ampliado na dinastia Sui, que liga Pequim a Hangzhou."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ligando o rio Amarelo ao Yangtzé, o Grande Canal foi aberto pelos imperadores chineses principalmente para quê?",
    "resposta": "Levar grãos do sul à capital",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Canal_(China)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Canal_(China)",
        "situacao": "ok",
        "texto": "The Grand Canal (Chinese: 大运河; pinyin: Dà yùnhé) is a system of interconnected canals linking various major rivers and lakes in North and East China, serving as an important waterborne transport infrastructure between the north and the south during Medieval and premodern China. It is the longest artificial waterway in the world and a World Heritage Site.\n[…]\nThe Yongle Emperor moved the Ming capital from Nanjing to Beijing in 1403. This move deprived Nanjing of its status as chief political center of China. The reopening of the Grand Canal also benefited Suzhou over Nanjing since the former was in a better position on the main artery of the Grand Canal, and so it became Ming China's greatest economic center.\n[…]\nThe Manchus invaded China in the mid-17th century, allowed through the northern passes by the Chinese general Wu Sangui once the Ming capital at Beijing had fallen into the hands of a rebel army. The Manchus established the Qing dynasty (1644–1912), and under their leadership, the Grand Canal was overseen and maintained just as in earlier times.\n[…]\nThe canal was an important artery of transport and supply for the region during periods of disunity in medieval China and was particularly prosperous and vital during the Southern Song, who established their capital at Lin'an within present-day Hangzhou. During the Yuan, Ming, and Qing, the canal diminished in importance but was kept navigable until the development of railways and roads in the 19th and 20th century.\n[…]\nIn 1345, Maghrebi traveler Ibn Battuta traveled China and journeyed through the Abe Hayat river (Grand Canal) up to the capital Khanbalik (Beijing).\n[…]\nIn 1793, after a largely fruitless diplomatic mission to Jehol, a large part of Lord Macartney's embassy returned south to the Yangtze delta via the Grand Canal.\n[…]\nHangzhou Section of The Grand Canal – EN.GOTOHZ.COM"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Canal_da_China",
        "situacao": "ok",
        "texto": "O Grande Canal da China, conhecido também como Grande Canal Jing-Han é o canal ou rio artificial mais antigo do mundo.\n[…]\nNo ano 604, o imperador Yang Guang da dinastia Sui deixou a capital, Chang'an (em Xian) para trasladar-se a Luoyang. Em 605, o imperador ordenou a construção de dois projetos: transferir a capital do país para Luoyang (em Henan) e escavar o Grande Canal entre Pequim e Hancheu.\n[…]\nTardou-se seis anos para construir o canal, unindo todos os canais que se encontravam em seu curso e ligando o rio Amarelo ao Haihe, ao Huai, ao Yangzi e ao Qiantangjiang. O grande canal se inicia em Pequim e termina ao sul de Hancheu (Zhejiang). Seu comprimento total é de 1.794 quilômetros, sendo o mais extenso do mundo. Além do município de Pequim, cruza por Tianjin, Hebei, Shandong, Jiangsu e Zhejiang.\n[…]\nO problema é que está mal construída, esquecida e recebe lodo da bacia do rio Amarelo, o que dificulta a navegação. As zonas mais utilizadas atualmente são a parte sul e a zona central, foi construída para unificar os povos do norte e sul usando esse grande canal (pois as pessoas que iriam ajudando a construir o canal viam de norte e sul).\n[…]\nO Grande Canal foi incluído na lista de patrimônio Mundial da UNESCO por \"ser uma construção gigantesca, criando o maior e mais extenso projeto de engenharia antes da Revolução Industrial\".\n[…]\nThe Reinvigoration of the Grand Canal\n[…]\nHangzhou Section of The Grand Canal – EN.GOTOHZ.COM",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Chang'an",
      "descricao": "Antiga capital chinesa das dinastias Han e Tang, extremo oriental da Rota da Seda, onde hoje fica Xian."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Chang'an, capital da dinastia Tang e ponto de partida da Rota da Seda, corresponde hoje a que cidade chinesa?",
    "resposta": "Xian",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chang%27an"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chang%27an",
        "situacao": "ok",
        "texto": "Chang'an, located in China's Shaanxi Province, was the capital city of several Chinese dynasties, including the Western Han and the Tang, from 202 BC to 907 AD. At various times, it was the largest city in the world. Its name was subsequently changed, and during the Ming dynasty period its modern name of Xi'an was adopted.\n[…]\nMuch of Chang'an was destroyed during its repeated sacking during the An Lushan Rebellion and several subsequent events. Chang'an was occupied by the forces of An Lushan and Shi Siming, in 756; then taken back by the Tang government and allied troops in 757. In 763, Chang'an, modern-day Xian,  was briefly occupied by the Tibetan Empire. In 765, Chang'an was besieged by an alliance of the Tibetan Empire and the Uyghur Khaganate.\n[…]\nIn 904, the warlord Zhu Wen ordered the city's buildings demolished and the construction materials moved to Luoyang, which became the new capital. The residents, together with the emperor Zhaozong, were also forced to move to Luoyang. Chang'an never recovered after the apex of the Tang dynasty, but there are some monuments from the Tang era still standing.\n[…]\nVictor Cunrui Xiong calls Sui-Tang Chang'an \"the most important city in early imperial China\". It was the most spacious and often the world's most populous urban center. Its grid of more than one hundred walled wards culminated a centuries-old tradition of Chinese capital planning. The city drew merchants, pilgrims, and scholars from across China and Asia. This plan influenced several later East Asian capitals.\n[…]\nThe modern Kyoto still retains some characteristics of Sui-Tang Chang'an. Similarly, the Korean Silla dynasty modeled their capital of Gyeongju after the Chinese capital. Sanggyeong, one of the five capitals of the state of Balhae, was also laid out like Chang'an.\n[…]\nAncient Chinese urban planning"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Changan",
        "situacao": "ok",
        "texto": "Xian (em chinês: 西安; romaniz.: Xian, Xi'an, Sian ou Hsian, no passado chamada Chang'an) é uma cidade da China, capital da província de Xianxim. Situa-se no vale do rio Wei. Foi a capital da China ao longo de várias dinastias: Qin (255 a 206 a.C.), Han (202 a.C. a 25 d.C.) e Tang (618 a 907).\n[…]\nXian é o limite oriental da Rota da Seda e é conhecida como o lugar do Exército de terracota, construídos durante a dinastia Qin. A cidade tem mais de 3 100 anos de história e era conhecida como Chang'an até a Dinastia Ming.\n[…]\nO primeiro imperador da China unificada, Qin Shi Huang, ordenou a construção do exército de Terracota e de seu mausoléu a oeste de Xian pouco antes de sua morte.\n[…]\nEm 202 a.C., o imperador Liu Bang da dinastia Han estabeleceu sua capital do Estado em Changan, seu primeiro palácio \"Palácio de Changle (长乐宫/長樂宮, perpétua felicidade) foi construído nas margens do rio das ruínas da capital da dinastia Qin. Esta é tradicionalmente aceita como a data de fundação de Chang'an ou Xian. Dois anos depois, Liu Bang construiu o palácio de Weiyang (未央宫) ao norte da atual Xian. O muro original da cidade de Xian começou a ser construído em 194 a.C.\n[…]\nApós centenas de anos de guerra, a Dinastia Sui reunificou a China novamente em 582. O imperador Sui ordenou que a nova capital fosse construída à sudeste da Capital Han, chamada DaXing. A nova capital era composta de três seções: O Palácio de Xian, a Cidade Imperial e a seção para o povo, com uma área total de 84 km² cercada pelos muros. Nesta época, esta era a maior cidade do mundo. A cidade foi renomeada Chang'an durante a Dinastia Tang.\n[…]\nA cidade é importante polo cinematográfico, produzindo grande parte dos filmes chineses. Zhang Yimou (张艺谋) e Gu Changwei (顾长卫) são dois diretores consagrados de Xian.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Todai-ji",
      "descricao": "Templo budista japonês do século oito que abriga uma gigantesca estátua de bronze de Buda."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O templo Todai-ji, com seu enorme Buda de bronze, fica em que antiga capital japonesa, famosa pelos cervos soltos nas ruas?",
    "resposta": "Nara",
    "fonte": [
      "https://en.wikipedia.org/wiki/T%C5%8Ddai-ji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/T%C5%8Ddai-ji",
        "situacao": "ok",
        "texto": "Tōdai-ji (東大寺, 'Eastern Great Temple') is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. The construction of the temple was an attempt to imitate Chinese temples from the much-admired Tang dynasty. Though it was originally founded in the year 738 CE, Tōdai-ji was not opened until the year 752 CE.\n[…]\nAs the center of power in Japanese Buddhism shifted away from Nara to Mount Hiei and the Tendai sect, and when the\n[…]\nAfter enduring multiple fires and earthquakes, the construction was eventually resumed in Nara in 745, and the Buddha was finally completed in 751. A year later, in 752, the eye-opening ceremony was held with an attendance of 10,000 monks and 4,000 dancers to celebrate the completion of the Buddha. The Indian priest Bodhisena performed the eye-opening for Emperor Shōmu. The project cost Japan greatly, as the statue used much of Japan's bronze and relied entirely on imported gold.\n[…]\n745: The capital returns to Heijō-kyō, construction of the Great Buddha resumes in Nara. Usage of the name Tōdai-ji appears on record.\n[…]\nFollowing the Notre-Dame de Paris fire in April 2019, Japanese authorities declared plans to expand fire prevention measures at several historic locations, including Tōdai-ji in Nara, partly by hiring new, younger employees in a context where temple and shrine staff are aging. Custodians of Todaiji temple also installed a donation box, stating \"Let's Rebuild Notre Dame Cathedral\", in the hallway behind the Great Buddha statue.\n[…]\nKobayashi Takeshi, Nara Buddhist Art: Todai-ji (New York: Weatherhill; Tokyo: Heibonsha, 1975)\n[…]\nUltimate Tōdaiji: Incomparable Masterworks from Nara's Great Eastern Temple (2002)\n[…]\nSiege of Nara\n[…]\nTōdai-ji Guide GoJapanGo\n[…]\nPhotos of Tōdai-ji Temple and sika deer\n[…]\nTodaiji Temple, from The Official Nara Travel Guide\n[…]\n251381458 Tōdai-ji on OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C5%8Ddai-ji",
        "situacao": "ok",
        "texto": "Tōdai-ji (東大寺, Tōdai-ji; Grande Templo Oriental) é um complexo budista na cidade de Nara, no Japão. O templo recebeu este nome por se situar a leste do Palácio Heijō). Seu Jardim do Grande Buda (大仏殿, Daibutsuden ) abriga a maior estátua do mundo de bronze do Buda Vairochana, conhecido no Japão simplesmente como Daibutsu (大仏).\n[…]\nO templo também serve como a sede japonesa da escola de budismo Kegon e é classificado pela UNESCO como Patrimônio da Humanidade dentro dos Monumentos Históricos da Antiga Nara, juntamente com sete outros locais, incluindo templos, santuários e lugares na cidade de Nara.\n[…]\nSob o  sistema de governo Ritsuryō no Período Nara , o budismo foi fortemente regulado pelo Estado através do Sōgō (僧綱;  Escritório de Assuntos Sacerdotais). Durante este tempo, Tōdai-ji serviu como sede administrativa central para os templos provinciais e para as seis escolas budistas que existiam no Japão naquele momento: o Hosso , Kegon , Satyasiddhi (Jōjitsu) , Sanron , Ritsu e Kusha.\n[…]\nQuando o centro de poder no Budismo Japonês passou passou de Nara para o templo Enryaku-ji (localizado no Monte Hiei perto de Quioto) e para a seita Tendai , e mais tarde, quando a capital do Japão mudou-se para Kamakura , o papel de liderança de Tōdai-ji também caiu. Nas gerações posteriores, a linhagem Vinaya também perdeu sua importância, apesar de repetidas tentativas de reanimá-la, dessa forma as cerimônias de ordenação não mais se realizaram em Tōdai-ji.\n[…]\nUm ano depois, em 752, a cerimônia de abertura dos olhos (Kaiguen Shiki) foi realizada com a presença de 10 mil pessoas para celebrar a conclusão do Buda. O monje indiano Bodhisena realizou a cerimonia na presença do Imperador Shomu. O projeto quase faliu a economia do Japão, consumindo a maior parte do bronze disponível na época.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Santuário de Itsukushima",
      "descricao": "Santuário xintoísta na ilha de Miyajima, no Japão, famoso pelo grande portal torii erguido sobre o mar."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O portal torii que parece flutuar sobre o mar, no santuário de Itsukushima, fica numa ilha perto de que grande cidade japonesa?",
    "resposta": "Hiroshima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Itsukushima_Shrine"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Itsukushima_Shrine",
        "situacao": "ok",
        "texto": "Itsukushima Shrine (厳島神社, Itsukushima-jinja) is a Shinto shrine on the island of Itsukushima (popularly known as Miyajima), best known for its \"floating\" torii. It is in the city of Hatsukaichi, in Hiroshima Prefecture in Japan, accessible from the mainland by ferry at Miyajimaguchi Station. The shrine complex is listed as a UNESCO World Heritage Site, and the Japanese government has designated se\n[…]\nThe Itsukushima shrine is one of Japan's most popular tourist attractions. It is most famous for its dramatic gate, or torii, on the outskirts of the shrine, the sacred peaks of Mount Misen, extensive forests, and its ocean view. The shrine complex itself consists of two main buildings: the Honsha shrine and the Sessha Marodo-jinja, as well as 17 other different buildings and structures that help to distinguish it.\n[…]\nThe most recognizable and celebrated feature of the Itsukushima shrine, is its 50-foot-tall (15 m) vermilion otorii gate (\"great gate\"), built of decay-resistant camphor wood. The placement of an additional leg in front of and behind each main pillar identifies the torii as reflecting the style of Ryōbu Shintō (dual Shinto), a medieval school of esoteric Japanese Buddhism associated with the Shingon Sect. The torii appears to be floating only at high tide.\n[…]\nThe Kangen-sai at Itsukushima Jinja (Itsukushima Shrine) in Japan is the most extensive and elaborate Shinto ritual held at the shrine, originating from the Heian period (794–1185). It takes place annually on June 17 according to the lunar calendar, usually falling between late July and early August. The festival was initiated by the Heike warlord Taira no Kiyomori in the 12th century to pacify the deities of the shrine and is one of Japan's three largest boat rituals.\n[…]\nHiroshima to Honolulu Friendship Torii (a half-size replica of the Itsukushima torii)\n[…]\nMiyajima Guide including Itsukushima Shrine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santu%C3%A1rio_de_Itsukushima",
        "situacao": "ok",
        "texto": "O Santuário de Itsukushima (japonês: 厳島神社, Hepburn: Itsukushima Jinja) é um santuário xintoísta situado na ilha de Itsukushima, perto da cidade de Hatsukaichi, na província de Hiroshima, no Japão, que foi construído sobre a água.\n[…]\nA ilha de Itsukushima é uma das muitas ilhas do Mar Interior(em japonês: 瀬戸内海, Seto Naikai) e é onde se localiza o monte mais elevado da região, o Monte Misen (530m). Devido ao costume xintoísta de adoração de montanhas o local foi considerado sagrado - e como tal vedado à presença humana, desde tempos remotos. Assim, o Santuário foi construído sobre a água, junto à ilha, que é hoje considerada parque natural.\n[…]\nA ilha de Itsukushima ganhou um importante papel comercial devido à sua posição no Mar Interior. No Período Muromachi foi construído um mercado, a volta do qual começou a desenvolver-se uma área urbana. Um templo budista que foi construído perto do cume do Monte Misen também atraía muitos peregrinos. A ilha foi perdendo o seu carácter sagrado e restrito, tornando-se um local de grande beleza pela integração paisagística das suas belezas naturais e dos seus edifícios religiosos.\n[…]\nAssim, no Santuário de Itsukushima, os edifícios principais são o Honden (edifício principal e santuário), o Haiden (oratório) e o Heiden (edifício das oferendas) alinhados com o grande Torii. Á sua frente está o Hirabutai (plataforma cerimonial), onde têm lugar as danças cerimoniais (Kagura). Do Hirabutai saem dois corredores para Este e para Oeste, que se ligam aos edifícios secundários do templo.\n[…]\nExiste ainda um segundo conjunto de santuários chamado o Sessha Marodo-jinja.\n[…]\nO Santuário de Itsukushima no site do Património Mundial da UNESCO",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Varanasi",
      "descricao": "Antiga cidade sagrada do hinduísmo, no norte da Índia, também chamada Benares."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Varanasi, cidade onde muitos hindus desejam morrer e ser cremados, fica às margens de que rio sagrado?",
    "resposta": "Ganges",
    "fonte": [
      "https://en.wikipedia.org/wiki/Varanasi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Varanasi",
        "situacao": "ok",
        "texto": "Varanasi (Hindi pronunciation: [ʋaːˈɾaːɳəsi], also Benares, Banaras Hindustani pronunciation: [bəˈnaːɾəs]), or Kashi, is a city on the Ganges river in northern India that has a central place in the traditions of pilgrimage, death, and mourning in the Hindu world. The city also has a syncretic tradition of Islamic artisanship that underpins its religious tourism. Located in the middle-Ganges valley\n[…]\nBenares became a princely state in 1911, with Ramnagar as its capital, but with no jurisdiction over the city proper. The religious head, Kashi Naresh, has had his headquarters at the Ramnagar Fort since the 18th century, also a repository of the history of the kings of Varanasi, which is situated to the east of Varanasi, across the Ganges. The Kashi Naresh is deeply revered by the local people and the chief cultural patron; some devout inhabitants consider him to be the incarnation of Shiva.\n[…]\nThe Dashashwamedh Ghat is the main and probably the oldest ghat of Varanasi located on the Ganges, close to the Kashi Vishwanath Temple. It is believed that Brahma created this ghat to welcome Shiva and sacrificed ten horses during the Dasa-Ashwamedha yajna performed there. Above and adjacent to this ghat, there are also temples dedicated to Sulatankesvara, Brahmesvara, Varahesvara, Abhaya Vinayaka, Ganga (the Ganges), and Bandi Devi, which are all important pilgrimage sites.\n[…]\nThe Kashi Vishwanath Temple, on the Ganges, is one of the 12 Jyotirlinga Shiva temples in Varanasi. The temple has been destroyed and rebuilt several times throughout its existence. The Gyanvapi Mosque, which is adjacent to the temple, is the original site of the temple. The temple, which is also known as the Golden Temple, was built in 1780 by Queen Ahilyabai Holkar of Indore. The two pinnacles of the temple are covered in gold and were donated in 1839 by Ranjit Singh, the ruler of Punjab.\n[…]\nVaranasi Documentary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Varanasi",
        "situacao": "ok",
        "texto": "Varanasi ou Varanássi (em sânscrito:  वाराणसी, Vārāṇasī, AFI:), comumente conhecida como Benares (em hindi:  बनारस e em urdu:  بنارس, transl. Banāras, AFI:) e, localmente, como Kashi (em hindi:  काशी, em urdu:  کاشی, Kāśī, AFI:), é uma cidade do estado de Utar Pradexe, na Índia. Localizada às margens do rio Ganges, tem mais de 3 000 000 de habitantes e é uma das cidades continuamente habitadas mai\n[…]\nA data exata da fundação de Varanasi é desconhecida, já que as únicas fontes de informações partem das tradições hindus. Segundo os brâmanes, Varanasi foi fundada por Xiva há mais de 5 000 anos, o que a faz uma das sete cidades sagradas do hinduísmo. Contudo, estudiosos consideram a hipótese de que a cidade tenha surgido há cerca de 3 000 anos.[carece de fontes]?\n[…]\nPor volta do ano 635 DC foi visitada pelo monge chinês Xuanzang, que registrou que a cidade era um centro religioso, artístico e educacional, e que se estendia por 5 km ao longo da margem ocidental do rio Ganges.\n[…]\nEm 1737, formou-se o Reino de Benares quando o Império Mogol reconheceu oficialmente sua independência. Entre 1775 e 1947 esteve sob controle colonial como um estado tributário, primeiro da Companhia Britânica das Índias Orientais, e após 1858 do Raj britânico, mas sempre mantendo a autonomia dos rajás e marajás, chamados de Kashi Maresh.\n[…]\nBenares obteve o status de estado principesco em 1911, que manteve até a independência da Índia em 1947, quando o reino foi dissolvido e se uniu ao Domínio da Índia, passando a compor o estado de Utar Pradexe. Mesmo sem o controle político da cidade, o Kashi Maresh ainda é reverenciado em Varanasi e atua como uma liderança religiosa, sendo considerado a reencarnação de Xiva. O título continua sendo passado hereditariamente pela dinastia Narayan.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Árvore Bodhi",
      "descricao": "Figueira sagrada sob a qual, segundo a tradição budista, Sidarta Gautama alcançou a iluminação."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A árvore sob a qual Sidarta Gautama teria alcançado a iluminação ficava em que localidade da Índia, hoje grande centro de peregrinação budista?",
    "resposta": "Bodh Gaya",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bodhi_Tree",
      "https://en.wikipedia.org/wiki/Bodh_Gaya"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bodhi_Tree",
        "situacao": "ok",
        "texto": "The Bodhi tree (Sanskrit and Pāli: Bodhi meaning \"awakening\" or \"enlightenment\") is the specific Bo tree (from the Sinhala bo, derived from bodhi)—a sacred fig (Ficus religiosa)—located within the Buddhist Mahabodhi Temple, a UNESCO World Heritage Site, in Bodh Gaya, Bihar, India.\n[…]\nThe Bodhi tree at the Mahabodhi Temple—revered as the Sri Maha Bodhi—marks the sacred site where Gautama Buddha is said to have attained enlightenment (bodhi) while meditating beneath its branches. According to Buddhist texts, around 528 BCE, Gautama seated himself beneath a Ficus religiosa at Uruvela (present-day Bodh Gaya, India). Resolving not to rise until he had realized the ultimate truth, he entered a state of profound meditation.\n[…]\nIn this year (the twelfth year of King Ashoka's reign), the right branch of the Bodhi tree was brought by Sanghamittā to Anurādhapura and placed by the left foot of Devanampiya Tissa. The Buddha, on his deathbed, had resolved five things, one being that the branch to be taken to Ceylon should detach itself. From Bodh Gayā, the branch was taken to Pātaliputta and thence to Tāmalittī, where it was placed on a ship and taken across the sea.\n[…]\nIn 1959, to mark a visit to Vietnam by the first president of India, Rajendra Prasad, a cutting of the original tree in Bodh Gaya was gifted, and it presently stands on the grounds of Trấn Quốc Pagoda in Hanoi.\n[…]\nIn 2012, the Bangladeshi philanthropist Brahmanda Pratap Barua took a sapling of the Bodhi tree from Bodh Gaya, to Thousand Oaks, California, where he presented it to his benefactor, Anagarika Glenn Hughes, who had funded much Buddhist work and teaches Buddhism in the United States.\n[…]\nRājāyatana tree\n[…]\nSacred tree\n[…]\nSahabi Tree"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bodh_Gaya",
        "situacao": "ok",
        "texto": "Bodh Gayā is a religious site and place of pilgrimage associated with the Mahabodhi Temple complex, situated in the Gaya district in the Indian state of Bihar. It is famous for being the place where Gautama Buddha is said to have attained enlightenment (Pali: bodhi) under what became known as the Bodhi Tree. Since antiquity, Bodh Gayā has remained the object of pilgrimage and veneration for Buddhi\n[…]\nFor Buddhists, Bodh Gayā is the most important of the four main pilgrimage sites related to the life of Gautama Buddha, the other three being Kushinagar, Lumbini, and Sarnath. In 2002, Mahabodhi Temple, located in Bodh Gayā, became a UNESCO World Heritage Site.\n[…]\nGautama's disciples began to visit the place during the full moon in the month of Vaisakha (April–May), as per the Hindu calendar. Over time, the place became known as Bodh Gayā, the day of enlightenment as Buddha Purnima, and the tree as the Bodhi Tree.\n[…]\nAn 80-foot (24 m) statue of the Buddha, known as The Great Buddha Statue, is in Bodh Gayā. It was unveiled and consecrated on 18 November 1989. The consecration ceremony was attended by the 14th Dalai Lama, who blessed the statue, the first great Buddha ever built in the history of India. Under the slogan \"Spread Buddha's rays to the Whole World\", Daijokyo spent seven years constructing the statue, mobilising 120,000 masons.\n[…]\nBodh Gaya is connected by road with the India–Nepal border through the Birgunj–Raxaul crossing. Travellers from Kathmandu commonly enter India via Raxaul and reach Bodh Gaya through the road network connecting Raxaul, Mehsi, Muzaffarpur, Patna and Gaya. The Government of Bihar and the Government of India identify Bodh Gaya as a major destination on the Buddhist Circuit with road connectivity supported through the national highway network.\n[…]\nBodh Gaya has one official sister city:\n[…]\nIndian Institute of Management Bodh Gaya\n[…]\nPlaces to Visit in Bodh Gaya"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81rvore_de_Bodhi",
        "situacao": "ok",
        "texto": "A Árvore de Bodhi ou Figueira de Bodhi era uma grande e antiga figueira sagrada da espécie Ficus religiosa localizada em Bodh Gaya, Bihar, na Índia. Siddhartha Gautama, o líder espiritual que fundou o budismo, teria atingido a Iluminação espiritual (Bodhi) por volta de 500 a.C. sob ela. Na iconografia budista, a Árvore Bodhi é representada por suas folhas em formato dde coração, que geralmente são\n[…]\nO termo \"árvore de Bodhi\" também é aplicado de maneira genérica a qualquer árvore da espécie Ficus religiosa.\n[…]\nA Árvore de Mahabodhi presente no templo de mesmo nome em Bodh Gaya é descrita como originária direta da Árvore de Bodhi. Plantada em 250 a.C., é uma destinação popular para peregrinos, sendo o mais importante dos quatro locais de peregrinação para os budistas. Outras árvores com importância para o budismo são as a Árvore de Anandabodhi em Jetavana na Índia e a Árvore Sri Maha Bodhi em Anuradhapura no Sri Lanka. Ambas também teriam se originado a partir da Árvore de Bodhi original.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Nowruz",
      "descricao": "Ano-novo persa, festa de origem zoroastrista celebrada no Irã e em vários países da Ásia Central."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Nowruz, ano-novo persa celebrado há milênios, começa no dia de que fenômeno astronômico?",
    "resposta": "Equinócio de março",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nowruz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nowruz",
        "situacao": "ok",
        "texto": "Nowruz (Persian: نوروز, Iranian Persian: [noːˈɾuːz], lit. 'New Day') is New Year's Day on the Iranian calendars, including the currently used Solar Hijri calendar. Historically, it has been observed by Iranian peoples, but is now celebrated by many Persianate cultures worldwide. It is a festival based on the Northern Hemisphere spring equinox, and thus usually coincides with a date between 19 Marc\n[…]\nNowruz's timing is based on the vernal equinox of the Northern Hemisphere. In Iran, it is the first day of the new year in the Solar Hijri algorithmic calendar, which is based on precise astronomical observations, and the sophisticated intercalation system, which makes it more accurate than its European counterpart, the Gregorian calendar.\n[…]\nA specific novella is not identified and Encyclopedia Britannica itself notes that \"no Jewish texts of this genre from the Persian period are extant, so these new elements can be recognized only inferentially.\" Purim is celebrated the 14 of Adar, usually within a month before Nowruz (as the date of Purim is set according to the Jewish calendar, which is lunisolar), while Nowruz occurs at the spring equinox.\n[…]\nBefore the Sasanians established their power in Western Asia in 224 – 226 AD, Parthians celebrated Nowruz in autumn, and the first of Farvardin began at the autumn equinox. During the reign of the Parthian dynasty, the spring festival was Mehregan, a Zoroastrian and Iranian festival celebrated in honor of Mithra.\n[…]\nTypically, before the arrival of Nowruz, family members gather around the Haft-sin table and await the exact moment of the March equinox to celebrate the New Year. The number 7 and the letter S are related to the seven Ameshasepantas as mentioned in the Zend-Avesta. They relate to the four elements of Fire, Earth, Air, Water, and the three life forms of Humans, Animals and Plants.\n[…]\n\"Nowruz\" at Encyclopædia Iranica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noruz",
        "situacao": "ok",
        "texto": "Noruz (em pársi نوروز; também transliterado como Nowroz, Noe - Rooz, Norooz, Novruz, Noh Ruz, Nav-roze, Navroz ou Náw-Rúz; em português: 'Dia Novo') é uma festa tradicional da Ásia Central que celebra o Ano Novo do calendário persa — marcando a renovação da natureza (primeiro dia da primavera). O Noruz pode acontecer no dia 20, 21 ou 22 de março do calendário Gregoriano, a depender do momento (dia\n[…]\nEm 2026 é comemorado a 21 de março, segundo o calendário persa. A celebração do Noruz ocorre há pelo menos 3 000 anos e está profundamente enraizada nos rituais e nas tradições do Zoroastrismo. Atualmente, acontece em muitos países que foram parte dos antigos impérios iranianos ou sofreram sua influência.\n[…]\nO primeiro dia do calendário iraniano cai no equinócio de março, que corresponde ao primeiro dia da primavera no Hemisfério Norte. Durante o equinócio, o sol incide diretamente sobre o equador.\n[…]\nNo século XIII foram feitas importantes reformas nos calendários iranianos com o propósito de fixar o início do ano calendário, i.e. Noruz, no equinócio vernal. Segundo a definição de Noruz dada pelo cientista iraniano Ṭūsī \"o primeiro dia do ano-novo oficial [Noruz] era sempre o dia em que o sol entrava em Áries antes do meio-dia\".\n[…]\nApós a queda do califado e a restauração das dinastias iranianas, como a dos Samânidas e a dos Buídas, o Noruz foi elevado a um nível ainda mais importante. Os Buídas fizeram reviver as antigas tradições da época Sassânida e outras celebrações menores, que haviam sido eliminadas pelo califado.\n[…]\nEmbora a data do Noruz seja determinada astronomicamente, e corresponda à data de 1 de Favardin, esta pode corresponder aos dias 20, 21 ou 22 de março do Calendário Gregoriano, dadas as irregularidades deste último:\n[…]\n«The Origin, History & Symbolism of No Ruz (Nowruz)» (em inglês)\n[…]\n«Haft Sin - The Ceremonial Spread for No Ruz (Nowruz, Norooz, Noruz)» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Kojiki",
      "descricao": "Crônica japonesa compilada em 712, que reúne mitos da criação e a história lendária dos imperadores."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Kojiki, a crônica mais antiga do Japão que chegou até nós, reúne mitos e a história dos imperadores. Em que século foi compilado?",
    "resposta": "Século oito",
    "distratores": [
      "Século quatro",
      "Século doze",
      "Século quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kojiki"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kojiki",
        "situacao": "ok",
        "texto": "The Kojiki (古事記; Japanese pronunciation: [kó̞.(ɟ̟͡)ʑì.k̟ʲì, kò̞.(ɟ̟͡)ʑí.-], \"Records of Ancient Matters\" or \"An Account of Ancient Matters\"), also sometimes read as Furukotofumi or Furukotobumi, is an early Japanese chronicle of myths, legends, hymns, genealogies, oral traditions, and semi-historical accounts dating as far back as 641 concerning the origin of the Japanese archipelago, the kami, an\n[…]\nThe Kojiki's preface indicates that leading families also kept their own historical and genealogical records; indeed, one of the reasons it gives for the compilation of the Kojiki is the correction of errors that had supposedly crept into these documents.\n[…]\nIt has also been noted that the text contains no reference to Buddhism, notwithstanding Emperor Tenmu's own devotion to the religion, a silence that has reinforced the view among historians and literary scholars that the Kojiki is best approached as myth rather than as history.\n[…]\nIn contrast to the Nihon Shoki (compiled 720), the first of six histories commissioned by the imperial court, which was modeled on Chinese dynastic histories and was intended to be a national chronicle that could be shown with pride to foreign envoys, the Kojiki is inward looking, concerned mainly with the ruling family and prominent clans, and is apparently intended for internal consumption.\n[…]\nThe Kojiki recounts the mythological creation of Japan, the genealogy of the Japanese gods (kami), and the histories of the semi-legendary early emperors of Japan. Its narrative portions also contain dozens of short songs and poems (uta), often spoken by gods, heroes, or early rulers.\n[…]\nBrownlee, John S. (1991). Political Thought in Japanese Historical Writing: From Kojiki (712) to Tokushi Yoron (1712). Waterloo, Ontario: Wilfrid Laurier University Press. (ISBN 0-88920-997-9)\n[…]\n(in English) Chamberlain's translation of Kojiki:\n[…]\nKojiki public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kojiki",
        "situacao": "ok",
        "texto": "Kojiki ou Furukotofumi (em japonês: 古事記) é o livro mais antigo sobre a história do Japão antigo. As canções incluídas no texto são em japonês arcaico, escritas foneticamente com Man'yōgana. O nome \"Kojiki\", em sua origem, significa \"registro das coisas antigas\".\n[…]\nO Kojiki foi apresentado por Ō no Yasumaro à Imperatriz Gemmei em 712. O livro foi  baseado em eventos que tinham sido memorizados de um livro anterior, o Kujiki, e também baseados nas histórias que passaram de geração em geração, assim como histórias memorizadas por Hieda no Are.\n[…]\nO Nakatsumaki inicia com a história do imperador Jimmu, o primeiro Imperador, e sua conquista do Japão e finaliza com o 15.º imperador, o imperador Ojin. Muitas histórias são mitológicas e o conteúdo considerado histórico é possivelmente suspeito. Por questões desconhecidas, o 2.º ao 9.º imperadores são listados, mas suas conquistas estão faltando na maior parte.\n[…]\nA primeira e mais conhecida tradução para o inglês foi feita pelo renomado japanólogo Basil Hall Chamberlain. Mais recentemente, uma tradução feita por Donald L. Philippi foi publicada pela Editora da Universidade de Tóquio em 1968 (ISBN 0-86008-320-9).\n[…]\nO Shinpukuji-bon (1371–1372) é o manuscrito mais antigo existente. Enquanto dividido no fragmento de Ise, é na verdade uma mistura dos dois fragmentos. O monge Ken'yu baseou sua cópia na de Ōnakatomi Sadayo. Em 1266, Sadayo copiou o primeiro e terceiro volumes, mas não teve acesso ao segundo. Finalmente, em 1282, ele obteve acesso ao segundo volume, através de um fragmento do manuscrito de Urabe, o qual ele transcreveu.\n[…]\nKojiki no Wikisource em inglês.\n[…]\nKojiki no Wikisource em castelhano.\n[…]\nArquivo de textos sagrados — versão online da tradução de Basil Hall Chamberlain (1919) do Kojiki. (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Li Bai",
      "descricao": "Poeta chinês do século oito, um dos mais célebres da literatura clássica chinesa."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Li Bai e Du Fu, os poetas mais célebres da China clássica, viveram durante que dinastia?",
    "resposta": "Dinastia Tang",
    "fonte": [
      "https://en.wikipedia.org/wiki/Li_Bai",
      "https://en.wikipedia.org/wiki/Du_Fu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Li_Bai",
        "situacao": "ok",
        "texto": "Li Bai (c. 701 – 762), also known by his courtesy name of Taibai, was a Chinese poet acclaimed as one of the best and most important poets of the Tang dynasty, and even in the whole of Chinese poetry. He and his friends such as Du Fu (712–770) were among the prominent figures in the flourishing of Chinese poetry of the Tang dynasty, often called the \"Golden Age of Chinese Poetry\". The expression \"\n[…]\nEven Li Bai and Du Fu, the two most famous and most comprehensively edited Tang poets, were affected by the destruction of the imperial Tang libraries and the loss of many private collections in the periods of turmoil (An Lushan Rebellion and Huang Chao Rebellion). Although many of Li Bai's poems have survived, even more were lost and there is difficulty regarding variant texts.\n[…]\nLi Bai was also noted as a master of the jueju, or cut-verse. Ming-dynasty poet Li Panlong thought Li Bai was the greatest jueju master of the Tang dynasty.\n[…]\nLi Bai's poetry was immensely influential in his own time, as well as for subsequent generations in China. From early on, he was paired with Du Fu. The recent scholar Paula Varsano observes that \"in the literary imagination they were, and remain, the two greatest poets of the Tang—or even of China\".\n[…]\nFor a more recent publication, see the selection of Li Bai's poetry in Chinese and in English translation, with biographical context and commentary, in Susan Wan Dolling's My China in Tang Poetry, Book 1: Superstars (2024).\n[…]\nDolling, Susan Wan (2024). My China in Tang Poetry, Book 1: Superstars (Hong Kong: Earnshaw Books). ISBN 978-988-8843-71-8.\n[…]\nWu, John C.H. (1972). The Four Seasons of Tang Poetry. Rutland, Vermont: Charles E. Tuttle. ISBN 978-0-8048-0197-3\n[…]\n34 Li Bai poems, in Chinese with English translation by Witter Bynner, from the Three Hundred Tang Poems anthology."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Du_Fu",
        "situacao": "ok",
        "texto": "Du Fu (Chinese: 杜甫; pinyin: Dù Fǔ; Wade–Giles: Tu Fu; 712 – 770) was a Chinese poet and government official of the Tang dynasty. Together with his older contemporary and friend Li Bai, he is one of the principal poets associated with Tang poetry. Nearly 1,500 poems attributed to him survive.\n[…]\nBelow is an example of one of Du Fu's later works. Like many other poems in the Tang it featured the theme of a long parting between friends, which was often due to officials being frequently transferred to the provinces:\n[…]\nLiterary conservatives could look to his technical mastery, while literary radicals were inspired by his innovations. Since the establishment of the People's Republic of China, Du Fu's loyalty to the state and concern for the poor have been interpreted as embryonic nationalism and socialism, and he has been praised for his use of simple, \"people's language\".\n[…]\nIn its publishing of Burton Watson's translation of Du Fu's poems, the Columbia University Press commented that Du Fu \"has been called China's greatest poet, and some call him the greatest nonepic, nondramatic poet whose writings survive in any language.\"\n[…]\nArthur Cooper also translated selected poems of Du Fu and Li Bai, which were published under the Penguin Classics imprint. David Hinton has also published selected poems for New Directions, first in 1989 followed by an expanded and revised edition in 2020. In 2015, Stephen Owen published annotated translations, with facing Chinese texts, of the complete poetry of Du Fu in six volumes.\n[…]\nClassical Chinese poetry\n[…]\nTang Dynasty art\n[…]\nTang poetry\n[…]\nHung, William (1952). Tu Fu: China's Greatest Poet. Cambridge: Harvard University Press. OCLC 697773.\n[…]\nDu Fu's poems included in 300 Selected Tang poems, translated by Witter Bynner"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Li_Bai",
        "situacao": "ok",
        "texto": "Li Bai, Li Po ou Li Bo (chinês: 李白, pinyin: Lǐ Bái, Wade-Giles: Li Pai) (701 — 762) foi um dos maiores poetas chineses da dinastia Tang. O caráter 白, pronunciado bái em mandarim moderno, tinha no passado uma pronunciação alternativa pó, motivo pelo qual seu nome transcrevia-se antigamente como Li Po, representação segundo o sistema Wade-Giles.\n[…]\nDe linguagem menos subjetiva que Du Fu, o outro grande poeta do período Tang, é citado por Ezra Pound em ABC of writing como o maior exemplo da visualidade da poesia chinesa, característica mais típica desta em relação à poesia ocidental, poesia que o poeta-crítico considera o ápice da imaginação visual em poesia.[carece de fontes]?\n[…]\nFoi influenciado pelo pensamento confuciano e taoísta, mas finalmente sua herança de família não permitiu grandes oportunidades dentro da aristocrática dinastia Tang. Apesar de expressar seu desejo de tornar-se oficial, não se apresentou ao exame de serviço civil chinês. Por outro lado, com 25 anos dedicou-se a viajar pela China, desenvolvendo uma personalidade selvagem e livre, muito ao contrário das ideias prevalecentes de um cavaleiro confuciano correto.\n[…]\nFoi-lhe outorgado um cargo na Academia Hanlin, que formava intelectuais expertos para a corte imperial. Li Bai permaneceu durante menos de dois anos como poeta ao serviço do imperador, mas foi finalmente despedido por uma indiscrição desconhecida. Em consequência,  vagou pela China durante o resto sua vida. Conheceu a Du Fu no outono de 744 e voltou-o encontrar o ano seguinte.\n[…]\nA espontaneidade de sua linguagem combinada com a extravagância de sua imaginação distinguiam Li Bai de qualquer outro poeta na história da China.\n[…]\nEm ambas as versões do filme em 360º do Epcot no pavilhão da China, Li Bai serve como narrador e guia do filme.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Babilônia",
      "descricao": "Antiga cidade da Mesopotâmia, às margens do rio Eufrates, capital de Hamurábi e de Nabucodonosor segundo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O rei persa Ciro, o Grande, tomou a Babilônia quase sem combate. Isso aconteceu em que século antes de Cristo?",
    "resposta": "Século seis antes de Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Babylon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Babylon",
        "situacao": "ok",
        "texto": "The fall of Babylon occurred in 539 BCE, when the Achaemenid Empire conquered the Neo-Babylonian Empire. The success of the Persian campaign, led by Cyrus the Great, brought an end to the reign of the last native dynasty of Mesopotamia and gave the Persians control over the rest of the Fertile Crescent.\n[…]\nBabylon, like Assyria, became a colony of the Achaemenid Empire in 539 BC.\n[…]\nBoth Xenophon and Daniel 5 describe the demise of Belshazzar on the night that the city was taken. Xenophon, Herodotus, and Daniel agree that the city was taken by surprise, at the time of a festival, and with some (but apparently not much) loss of life. The Cyropaedia (4.6.3) states that a father and son were both reigning over Babylon when the city fell, and that the younger ruler was killed.\n[…]\nThe conquest of Jerusalem by the Neo-Babylonian Empire and the exile of its elite in 586 BCE ushered in the next stage in the formation of the Book of Isaiah. Deutero-Isaiah addresses himself to the Israelites in exile, offering them the hope of return. Deutero-Isaiah's predictions of the imminent fall of Babylon and his glorification of Cyrus as the deliverer of Israel date his prophecies to 550–539 BCE, and probably towards the end of this period.\n[…]\nThe Book of Daniel chapter 5 relates the final night of Belshazzar, just before the Persian invasion. In the account, Belshazzar holds a feast, during which Belshazzar proclaims his guests receive the temple treasures from Jerusalem to drink from them, while praising Babylonian gods. He then sees a hand writing on the palace wall. The words that were written according to the Scriptures: MENE, MENE, TEKEL, UPHARSIN.\n[…]\nWhore of Babylon\n[…]\nMedo-Babylonian conquest of the Assyrian Empire\n[…]\nOates, Joan (1986). Babylon (revised ed.). Thames & Hudson. p. 132."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Queda_da_Babil%C3%B3nia",
        "situacao": "ok",
        "texto": "A queda da Babilónia é o conjunto de eventos históricos no final do Império Neobabilónico após a cidade da Babilónia ter sido conquistada pelo Império Aqueménida em 539 a.C., sob Ciro II, o Grande.\n[…]\nApós a queda, a Babilónia ficou sob domínio estrangeiro pela primeira vez. Foi estabelecido um novo sistema de governo e tornou-se num estado multinacional persa. Este sistema de governo chegou ao apogeu depois da conquista do Egito por Cambises II durante o reinado de Dario I, e recebeu fundamento ideológico na inscrição dos reis persas.\n[…]\nPor outro lado, a invasão da Babilónia por Ciro foi facilitada pela existência de uma parte da população descontente com a administração do Estado e com a presença de exiliados estrangeiros como os judeus, que tinham sido colocados no meio do país. Um dos primeiros atos de Ciro foi permitir que estes exiliados regressassem a casa, levando consigo artigos sagrados.\n[…]\nA permissão para o fazer estava incluída numa proclamação real, pela qual o conquistador se esforçava por justificar a sua pretensão ao trono da Babilónia. Diz-se que os judeus inicialmente saudaram os persas como libertadores. Ciro enviou os exiliados judeus de volta a Israel a partir do cativeiro da Babilónia.\n[…]\nEntre os babilónios, os sentimentos de que ninguém tinha direito a governar sobre a Ásia Ocidental continuaram fortes, até que Bel e os seus sacerdotes consagraram Ciro no cargo; em consequência, este assumiu o título imperial de Rei da Babilónia. Ciro afirmou ser o sucessor legítimo dos antigos reis da Babilónia e o vingador de Bel-Marduk, e autodescreveu-se como salvador escolhido por Marduk para restaurar a ordem e a justiça.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Muralha da China",
      "descricao": "Série de fortificações construídas ao longo da fronteira norte da China antiga e imperial."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A maior parte dos trechos da Muralha da China que os turistas visitam hoje foi erguida por que dinastia?",
    "resposta": "Dinastia Ming",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Wall_of_China"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Wall_of_China",
        "situacao": "ok",
        "texto": "The Great Wall of China is a series of fortifications in China. They were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The first walls date to the 7th century BC; these were joined together in the Qin dynasty. Successive dynasties expanded the wall system; the best-known sections wer\n[…]\nUnder Qing rule and the annexation of Mongolia into the empire, China's borders extended beyond the Great Wall; work on it for the purpose of border defense was thus discontinued. Construction nevertheless persisted with projects like the Willow Palisade; following a line similar to that of the Liaodong Wall of the Ming, it was meant to prevent Han Chinese migration into Manchuria.\n[…]\nSoon after the Portuguese reached Ming China by ship in the early 16th century, accounts of the Great Wall began circulating in Europe, although no European was able to see it for another 100 years. Possibly one of the earliest European descriptions of the wall and of its significance for the defense of the country against the \"Tartars\" (i.e. Mongols) may be the one contained in João de Barros's 1563 Asia.\n[…]\nIn 2012, based on existing research and the results of a comprehensive mapping survey, the National Cultural Heritage Administration of China concluded that the remaining Great Wall associated sites include 10,051 wall sections, 1,764 ramparts or trenches, 29,510 individual buildings, and 2,211 fortifications or passes, with the walls and trenches spanning a total length of 21,196.18 km (13,170.70 mi). It was further concluded that the Ming Great Wall measures 8,850 km (5,500 mi).\n[…]\nGreat Wall of China on In Our Time at the BBC\n[…]\nPhotoset of lesser visited areas of the Great Wall\n[…]\nGeographic data related to Great Wall of China at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Muralha_da_China",
        "situacao": "ok",
        "texto": "Grande Muralha da China (chinês tradicional: 萬里長城; chinês simplificado: 万里长城; pinyin: Wànlǐ Chángchéng, literalmente \"muro de dez mil li de comprimento\") é uma série de fortificações na China. Elas foram construídas ao longo das fronteiras históricas do norte dos antigos estados chineses e da China Imperial como proteção contra vários grupos nômades da Estepe Euroasiática. As primeiras muralhas da\n[…]\nCom a morte do imperador Qin Shihuang, iniciou-se na China um período de agitações políticas e de revoltas, durante o qual os trabalhos na Grande Muralha ficaram paralisados. Com a ascensão da Dinastia Han ao poder, por volta de 206 a.C., reiniciou-se o crescimento chinês e os trabalhos na muralha foram retomados ao longo dos séculos até o seu esplendor na Dinastia Ming, por volta do século XV, quando adquiriu os atuais aspectos e uma extensão de cerca de sete mil quilômetros.\n[…]\nA magnitude da obra, entretanto, não impediu as incursões de mongóis, xiambeis e outros povos, que ameaçaram o império chinês ao longo de sua história. Por volta do século XVI perdeu a sua função estratégica, vindo a ser abandonada a partir de 1664, com a expansão chinesa na direção norte na Dinastia Qing. No século XX, na década de 1980, Deng Xiaoping deu prioridade à Grande Muralha como símbolo da China, estimulando uma grande campanha de restauração de diversos trechos.\n[…]\nA Muralha da China após um concurso informal internacional em 2007, foi considerada uma das sete maravilhas do mundo moderno. Em 1986, a China a inscreveu na Lista de Património Mundial da UNESCO, além da Muralha, os Palácios Imperiais das Dinastias Ming e Qing em Pequim e Shenyang, o Sítio do Homem de Pequim em Zhoukoudian, as Grutas de Mogao em Dunhuang, o Exército de Terracota e o Monte Tai. Estas indicações foram formalmente aceitas pelo Comité do Património Mundial em 1987.\n[…]\nGrande Canal da China\n[…]\n«Muralha da China». em Fortalezas.org.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita da antiga Mesopotâmia, feito com marcas em forma de cunha em tabuletas de argila."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A escrita cuneiforme, uma das mais antigas do mundo, surgiu na Mesopotâmia por volta de que milênio?",
    "resposta": "Quarto milênio antes de Cristo",
    "distratores": [
      "Sexto milênio antes de Cristo",
      "Segundo milênio antes de Cristo",
      "Primeiro milênio antes de Cristo"
    ],
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
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nA escrita é registrada pela primeira vez em Uruque, no final do 4º milênio a.C., e pouco depois em várias partes do Oriente-Próximo.\n[…]\nNos últimos anos, surgiu uma visão contrária sobre as fichas serem o precursor da escrita.\n[…]\nEm meados do 3º milênio a.C., foi introduzido um novo estilete com ponta em cunha, que era pressionado na argila, produzindo uma escrita cuneiforme em forma de cunha. Esse desenvolvimento tornou a escrita mais rápida e fácil, especialmente ao escrever em argila macia. Ao ajustar a posição relativa do estilete em relação à tabuinha, o escriba podia usar uma única ferramenta para fazer uma variedade de impressões.\n[…]\nO cuneiforme elamita era uma forma simplificada do cuneiforme sumero-acádico, usado para escrever a língua elamita na área que corresponde ao atual Irã entre o 3º milênio e o século IV a.C. O cuneiforme elamita às vezes competia com outras escritas locais, o proto-elamita e o elamita linear. O texto cuneiforme elamita mais antigo conhecido é um tratado entre acádios e elamitas que data de 2200 a.C. Alguns acreditam que pode ter estado em uso desde 2500 a.C.\n[…]\nDevido à sua simplicidade e estrutura lógica, a escrita cuneiforme persa antiga foi a primeira a ser decifrada por estudiosos modernos, começando com as realizações de Georg Friedrich Grotefend em 1802. Várias inscrições bilingues ou trilingues antigas permitiram então decifrar as outras escritas, muito mais complicadas e mais antigas, até o 3º milênio da escrita suméria.\n[…]\nAntigo cuneiforme persa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita da antiga Mesopotâmia, feito com marcas em forma de cunha em tabuletas de argila."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Feita com estiletes de junco sobre tabuletas de argila, a escrita cuneiforme foi criada por que povo do sul da Mesopotâmia?",
    "resposta": "Sumérios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuneiform"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuneiform",
        "situacao": "ok",
        "texto": "Cuneiform is a logo-syllabic writing system that was used to write several languages of the ancient Near East. The script was in active use from the early Bronze Age until the 1st century BC. Cuneiform scripts are marked by and named for the characteristic wedge-shaped impressions (Latin: cuneus) which form their signs. Cuneiform is the earliest known writing system and was originally developed to\n[…]\nThere are many instances of Egypt-Mesopotamia relations at the time of the invention of writing, and standard reconstructions of the development of writing generally place the development of the Sumerian proto-cuneiform script before the development of Egyptian hieroglyphs, with the suggestion the former influenced the latter. Given the lack of direct evidence for the transfer of writing, \"no definitive determination has been made as to the origin of hieroglyphics in ancient Egypt\".\n[…]\nMost later adaptations of Sumerian cuneiform preserved at least some aspects of the Sumerian script. Written Akkadian included phonetic symbols from the Sumerian syllabary, together with logograms that were read as whole words. Many signs in the script were polyvalent, having both a syllabic and logographic meaning.\n[…]\nThe Sumerian cuneiform script had on the order of 1,000 distinct signs, or about 1,500 if variants are included. This number was reduced to about 600 by the 24th century BC and the beginning of Akkadian records. Not all Sumerian signs are used in Akkadian texts, and not all Akkadian signs are used in Hittite.\n[…]\nRegarding Akkadian forms, the standard handbook for many years was Borger (1981, Assyrisch-Babylonische Zeichenliste or \"ABZ\") with 598 signs used in Assyrian and Babylonian writing, recently superseded by Borger (2004, Mesopotamisches Zeichenlexikon or \"MesZL\") with an expansion to 907 signs, an extension of their Sumerian readings and a new numbering scheme."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_cuneiforme",
        "situacao": "ok",
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nA escrita cuneiforme foi adotada subsequentemente pelos acadianos, babilônicos, elamitas, hititas e assírios e adaptada para escrever em seus próprios idiomas; foi extensamente usada na Mesopotâmia durante aproximadamente 3 mil anos, apesar da natureza silábica do manuscrito (como foi estabelecido pelos sumérios) não ser intuitiva aos falantes de idiomas semíticos.\n[…]\nHá muitas instâncias de relações entre Egito e Mesopotâmia na época da invenção da escrita, e as reconstruções padrão do desenvolvimento da escrita geralmente colocam o desenvolvimento da escrita proto-cuneiforme suméria antes do desenvolvimento dos hieróglifos egípcios, com a sugestão de que a primeira influenciou a segunda. Dada a falta de evidências diretas para a transferência da escrita, \"nenhuma determinação definitiva foi feita quanto à origem dos hieróglifos no antigo Egito\".\n[…]\nO sumério escrito foi usado como língua de escribas até o século I d.C. A língua falada extinguiu-se entre c. 2100 e 1700 a.C.\n[…]\nEm relação às formas acádias, o manual padrão por muitos anos foi o de Borger (1981, Assyrisch-Babylonische Zeichenliste ou \"ABZ\") com 598 sinais usados nas escritas assíria e babilônica, recentemente substituído por Borger (2004, Mesopotamisches Zeichenlexikon ou \"MesZL\") com uma expansão para 907 sinais, uma extensão de suas leituras sumérias e um novo esquema de numeração.\n[…]\n«Online Translator». - Translates English words, sentences, and phrases into ancient Assyrian, Babylonian, Sumerian cuneiform",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Samurai",
      "descricao": "Classe de guerreiros nobres do Japão pré-moderno, a serviço de senhores feudais."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que era da história japonesa, iniciada em 1868, os samurais perderam seus privilégios e deixaram de existir como classe?",
    "resposta": "Era Meiji",
    "fonte": [
      "https://en.wikipedia.org/wiki/Samurai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Samurai",
        "situacao": "ok",
        "texto": "The samurai (侍) were members of the professional warrior class in pre-industrial Japan, who served as retainers to the lords. These men came from warrior families and trained from a young age in military arts through private instruction. Swordsmanship, archery, and horsemanship were the primary martial skills; and often in Japanese history, only samurai had the right to even possess these weapons.\n[…]\nAfter the Meiji Restoration, the abolition of the domains, conscription, the commutation and abolition of hereditary stipends, and the removal of privileges such as sword-wearing dismantled the institutional basis of samurai status; former samurai feudal lords were reorganized as kazoku (nobility) along with court nobles, while most former warriors became shizoku.\n[…]\nToyotomi Hideyoshi, who became a grand minister in 1586, created a law that non-samurai were not allowed to carry weapons, which the samurai caste codified as permanent and hereditary, thereby ending the social mobility of Japan, which lasted until the dissolution of the Edo shogunate by the Meiji revolutionaries.\n[…]\nIn 1867, Tokugawa Yoshinobu, the 15th Tokugawa shogun, returned governing authority to the emperor, and the following year the new Meiji government was established after the outbreak of the Boshin War. The Restoration did not immediately abolish the samurai.\n[…]\nThe institutional basis of samurai status was nevertheless dismantled through a series of reforms after the Meiji Restoration. In 1869, samurai feudal lords (daimyo) and court nobles (kuge) were reorganized as kazoku (nobility), while most former warriors became shizoku. The return of lands and people to the emperor and the abolition of the domains in 1871 weakened the old lord-retainer order and transferred the payment of former samurai stipends to the central government.\n[…]\nThe Samurai Archives Japanese History page\n[…]\nHistory of the Samurai"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Samurai",
        "situacao": "ok",
        "texto": "Samurai (侍, samurai; em português \"servo\", masculino) ou Bushi (武士; em português \"guerreiro\") e Onna-bugeisha (女武芸者; , feminino), era um servidor civil do império e Shogunato japonês, com as funções de cobrador de impostos (coletoria) e administrador de terras (daimyō).\n[…]\nEm 1185, Os samurais tornaram-se a classe dominante do Japão, com a fundação do Primeiro Xogunato (regime militar feudal Período Kamakura) pelo líder militar e posteriormente ditador (Shogun) Minamoto no Yoritomo, conhecido como \"Xogunato Kamakura\". Mas em 1868, com a restauração Meiji, os samurais perderam o poder para o imperador e declinaram rapidamente, sendo perseguidos e exterminados nove anos depois, no fim da Rebelião Satsuma.\n[…]\nNo século VIII, iniciou a formação da casta social dos samurai, mas foi apenas no final do século XII, com o estabelecimento do Período Kamakura houve o período de sete séculos de dominação política e social samurai sobre o povo japonês, que terminou com a Restauração Meiji determinando a queda do terceiro xogunato, na segunda metade do século XIX.\n[…]\nEm 1868, com as reformas da era Meiji, quando o imperador do Japão retomou ao poder do país, a classe dos samurai foi abolida e foi estabelecido um exército nacional ao estilo ocidental. O rígido código samurai bushido, ainda sobrevive na atual sociedade japonesa, tal como muitos outros aspectos tradicionais do modo de vida. O legado continua influenciando não apenas a sociedade japonesa, mas também o ocidente.\n[…]\nTal preocupação com o espírito que ajudou as artes samurai a se salvar de sua extinção na Restauração Meiji (época em que os samurais viraram burocratas a serviço do governo). O Koryū (ou Kobudo), como são conhecidos os estilos de combate criados pelos samurai ainda é praticado atualmente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Império Aquemênida",
      "descricao": "Primeiro Império Persa, fundado por Ciro, o Grande, no século seis antes de Cristo e conquistado por Alexandre, o Grande."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Conquistado por Alexandre, o Grande, o Império Aquemênida dos reis persas chegou ao fim em que século antes de Cristo?",
    "resposta": "Século quatro antes de Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Achaemenid_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Achaemenid_Empire",
        "situacao": "ok",
        "texto": "The Achaemenid Empire (, ə-KEE-mə-nid; Old Persian: 𐎧𐏁𐏂, Xšāça, lit. 'The Empire' or 'The Kingdom') was an ancient Iranian empire founded by Cyrus the Great of the Achaemenid dynasty in 550 BC. At peak, its territorial extent was roughly 5.5 million square kilometres (2.1 million square miles), making it the largest empire of its time.\n[…]\nSince its foundation by Cyrus, the Persian empire had been primarily a land empire with a strong army but void of any actual naval forces. By the 5th century BC, this was to change, as the empire came across Greek and Egyptian forces, each with their own maritime traditions and capabilities. Darius I was the first Achaemenid king to invest in a Persian fleet. Even by then no true \"imperial navy\" had existed either in Greece or Egypt.\n[…]\nThe use of a single official language, which modern scholarship has dubbed \"Official Aramaic\" or \"Imperial Aramaic\", can be assumed to have greatly contributed to the astonishing success of the Achaemenids in holding their far-flung empire together for as long as they did.\"\n[…]\nIn 1955, Richard Frye questioned the classification of Imperial Aramaic as an official language, noting that no surviving edict expressly and unambiguously accorded that status to any particular language. Frye reclassifies Imperial Aramaic as the lingua franca of the Achaemenid empire, suggesting that the use of Aramaic language in Achaemenid empire was more widespread than generally thought.\n[…]\nNagel, Alexander (2023). Color and meaning in the art of Achaemenid Persia. Cambridge; New York; Port Melbourne: Cambridge University Press. ISBN 978-1-00-936129-3.\n[…]\nAchemenet an electronic resource for the study of the history, literature and archaeology of the Persian EmpirePhotos of the tribute bearers from the 23 satrapies of the Achaemenid empire, from Persepolis\n[…]\nDynasty Achaemenid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Aquem%C3%AAnida",
        "situacao": "ok",
        "texto": "O Império Aquemênida (português brasileiro) ou Aqueménida (português europeu) (em persa antigo: Parsā; em persa: هخامنشیان; romaniz.: Hakhāmanishiya ou دودمان هخامنشي, Dudmān Hakhâmaneshi; c. 550–330 a.C.), por vezes referido como Primeiro Império Persa, foi um império iraniano situado no sudoeste da Ásia e Ásia Central, e fundado no século VI a.C. por Ciro, o Grande, que derrubou a Confederação M\n[…]\nO impacto do chamado Édito de Ciro, o Grande, foi mencionado nos textos judaico-cristãos, e o império foi fundamental na difusão do zoroastrianismo por grande parte da Ásia, até à China. Mesmo Alexandre, o Grande, o homem que acabaria por conquistar este vasto império, respeitou seus costumes e impôs o respeito aos reis persas (incluindo Ciro), e até mesmo adotou o costume real persa da prosquínese, apesar da forte desaprovação de seus compatriotas macedônios.\n[…]\nEm algum ponto em 550 a.C., Ciro, o Grande liderou uma rebelião contra o Império Medo, provavelmente devido à má administração feita pelos medos na Persis, derrotando-os e conquistando-os na sequência e criando o primeiro império persa.\n[…]\nA Revolta Jônia foi o primeiro grande conflito entre a Grécia e o Império Aquemênida, e como tal representa a primeira fase das chamadas Guerras Persas (ou Guerras Greco-Persas). A Ásia Menor voltou para o domínio persa, porém Dario jurou punir as cidades-estado gregas de Atenas e Erétria por seu apoio aos rebeldes durante a revolta.\n[…]\nCiro, o Grande fundou o Império Aquemênida como um império multi-estatal, governado a partir de quatro capitais: Pasárgada, Babilônia, Susã e Ecbátana. Os aquemênidas permitiam uma determinada quantidade de autonomia regional, na forma do sistema de satrapias. Cada satrapia era uma unidade administrativa distinta, geralmente organizada com base na geografia local.\n[…]\nA Vexiloide do Império Aquemênida tinha um falcão de ouro sobre um fundo carmesim.\n[…]\nLista de impérios",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Kama Sutra",
      "descricao": "Tratado indiano antigo, em sânscrito, sobre o amor, o prazer e a vida a dois."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Escrito em sânscrito na Índia antiga, o Kama Sutra, tratado sobre o amor e o prazer, é atribuído a que autor?",
    "resposta": "Vatsyayana",
    "distratores": [
      "Valmiki",
      "Kalidasa",
      "Kautilya"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kama_Sutra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kama_Sutra",
        "situacao": "ok",
        "texto": "The Kama Sutra, in English also  spelled Kamasutra (; Sanskrit: कामसूत्र, , Kāma-sūtra; lit. 'Principles of Love'), is an ancient Sanskrit text on sexuality, eroticism, and emotional fulfillment. Attributed to Vātsyāyana, the Kamasutra is neither exclusively nor predominantly a sex manual on sex positions, but rather a guide on the art of living well, the nature of love, finding partners, maintain\n[…]\nThe vision of Maharishi Vatsyayana is indispensable and beneficial for world culture.\n[…]\nThe Kamasutra, states the Indologist and Sanskrit literature scholar Ludo Rocher, discourages adultery but then devotes \"not less than fifteen sutras (1.5.6–20) to enumerating the reasons (karana) for which a man is allowed to seduce a married woman\". Vatsyayana mentions different types of nayikas (urban girls) such as unmarried virgins, those married and abandoned by husband, widow seeking remarriage and courtesans, then discusses their kama/sexual education, rights and mores.\n[…]\nIn 1961, S. C. Upadhyaya published his translation as the Kamasutra of Vatsyayana: Complete Translation from the Original. According to Jyoti Puri, it is considered among the best-known scholarly English-language translations of the Kamasutra in post-independent India.\n[…]\nOther translations include those by Alain Daniélou (The Complete Kama Sutra in 1994). This translation, originally into French, and thence into English, featured the original text attributed to Vatsyayana, along with a medieval and a modern commentary. Unlike the 1883 version, Daniélou's new translation preserves the numbered verse divisions of the original, and does not incorporate notes in the text.\n[…]\nDoniger takes Vatsyayana as the only one who can inspire contemporary Indians to overcome \"self-doubts and rejoice\" in the Kama Sutra as a \"great cultural masterpiece\".\n[…]\nThe Kama Sutra public domain audiobook at LibriVox\n[…]\nKama Sutra at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kama_Sutra",
        "situacao": "ok",
        "texto": "Kamasutra (Sânscrito: कामसूत्र),  geralmente conhecido no mundo ocidental como Kama Sutra, foi um antigo texto indiano publicado em algum período da segunda metade do século III d.C. e retrata sobre o comportamento sexual humano, e durante a antiguidade foi amplamente considerado o trabalho definitivo sobre amor na literatura sânscrita. O texto foi escrito por Vatsyayana, como um breve resumo dos \n[…]\n“Ao contrário do que muitos pensavam na época, o Kama Sutra não foi  um  manual de sexo, nem um trabalho sagrado ou religioso e também não foi um texto tântrico. Na abertura de um debate sobre os três objectivos da antiga  vida hindu - Darma, Artha e Kamadeva - a finalidade do Vatsyayana foi estabelecer kama, ou gozo dos sentidos, no contexto. Assim, Darma (ou vida virtuosa)  era o maior objetivo, Artha, o acúmulo de riqueza era a próxima, e Kama era o menor dos três.” — Indra Sinha.\n[…]\nKama foi considerado a literatura do desejo. Já o Sutra foi o discurso de uma série de aforismos. Sutra era um termo padrão para um texto técnico, assim como o Yôga Sútra de Pátañjali. O texto foi escrito originalmente como Vatsyayana Kamasutram (ou \"Aforismos sobre o amor, de Vatsyayana\"). A tradição dizia que o autor foi um estudante celibatário que viveu em Pataliputra, um importante centro de aprendizagem.\n[…]\nAs origens do autor não são muito claras, alguns historiadores acreditam  que ele tenha vivido entre o século I e VI d.C. por citar que Satakarni, um rei de Kuntala , matou Malayevati, sua esposa, com um instrumento chamado Katari, golpeando-a na paixão do amor. Acredita-se que este rei de Kuntala tenha vivido e reinado durante o século I a.C. e consequentemente Vatsyayana deve ter vivido depois dele.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Império Máuria",
      "descricao": "Império da Índia antiga, dos séculos quatro a dois antes de Cristo, que teve Ashoka entre seus imperadores."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que governante fundou o Império Máuria, no século quatro antes de Cristo, e era avô do imperador Ashoka?",
    "resposta": "Chandragupta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chandragupta_Maurya",
      "https://en.wikipedia.org/wiki/Maurya_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chandragupta_Maurya",
        "situacao": "ok",
        "texto": "Chandragupta Maurya (reigned c. 320 BCE – c. 298 BCE) was the founder and the first emperor of the Maurya Empire, based in Magadha (present-day Bihar) in the Indian subcontinent.\n[…]\nChandragupta's reign, and the Maurya Empire, which reached its peak under his grandson Ashoka the Great, began an era of economic prosperity, reforms, infrastructure expansions. Buddhism, Jainism and Ājīvika prevailed over the non-Maghadian Vedic and Brahmanistic traditions, initiating, under Ashoka, the expansion of Buddhism, and the synthesis of Brahmanic and non-Brahmanic religious traditions which converged in Hinduism. His legend still inspires visions of an undivided Indian nation.\n[…]\nAccording to Jeffery D. Long, in one Digambara version it was Samprati Chandragupta who renounced, migrated and performed sallekhana in Shravanabelagola. Long notes that scholars attribute the disintegration of the Maurya empire to the times and actions of Samprati Chandragupta, the grandson of Ashoka and great-great-grandson of Chandragupta Maurya, concluding that the two Chandraguptas have been confused to be the same in some Digambara legends.\n[…]\nThe Maurya rule was a structured administration; Chandragupta had a council of ministers (amatya), with Chanakya was his chief minister. The empire was organised into territories (janapada), centres of regional power were protected with forts (durga), and state operations were funded with treasury (kosa). Strabo, in his Geographica composed about 300 years after Chandragupta's death, describes aspects of his rule in his chapter XV.46–69.\n[…]\nChandragupta is a 1920 Indian silent film about the Mauryan king.\n[…]\nChandragupta Maurya's Greek satrapies campaigns"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maurya_Empire",
        "situacao": "ok",
        "texto": "The Maurya Empire was a geographically extensive Iron Age historical power in South Asia with its power base in Magadha. Founded by Chandragupta Maurya around c. 320 BCE, it existed in loose-knit fashion until 185 BCE. The primary sources for the written records of the Mauryan times are partial records of the lost history of Megasthenes in Roman texts of several centuries later; and the Edicts of \n[…]\nIn addition to this treaty, Seleucus dispatched an ambassador, Megasthenes, to Chandragupta, and later Deimakos to his son Bindusara, at the Mauryan court at Pataliputra (modern Patna in Bihar). Later, Ptolemy II Philadelphus, the ruler of Ptolemaic Egypt and contemporary of Ashoka, is also recorded by Pliny the Elder as having sent an ambassador named Dionysius to the Mauryan court.\n[…]\nSome historians, such as Hem Chandra Raychaudhuri, have argued that Ashoka's pacifism undermined the \"military backbone\" of the Maurya empire. Others, such as Romila Thapar, have suggested that the extent and impact of his pacifism have been \"grossly exaggerated\".\n[…]\nWhile according to Greek traveller Megasthenes, Chandragupta Maurya sponsored Brahmanical rituals and sacrifices, according to a Jain text from the 12th century, Chandragupta Maurya followed Jainism after retiring, when he renounced his throne and material possessions to join a wandering group of Jain monks and in his last days, he observed the rigorous but self-purifying Jain ritual of santhara (fast unto death), at Shravana Belgola in Karnataka, though it is also possible that \"they are talking about his great-grandson.\" Samprati, the grandson of Ashoka, patronised Jainism.\n[…]\nbetween 322 and 305 BCE: Chandragupta Maurya conquers the Nanda Empire, founding Maurya dynasty.\n[…]\n305–303 BCE: Chandragupta Maurya gains territory by defeating the Seleucid Empire.\n[…]\n269–232 BCE: The Mauryan Empire reaches its height under Ashoka, Chandragupta's grandson."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chandragupta_M%C3%A1uria",
        "situacao": "ok",
        "texto": "Chandragupta Máuria (em sânscrito: चन्द्रगुप्त मौर्य; 340 a.C. — 298 a.C.), foi um dos fundadores do Império Máuria que, pela primeira vez, abrangeu a maior parte do subcontinente indiano e por isto é considerado como primeiro unificador e genuíno primeiro imperador da Índia. Nos escritos gregos e latinos antigos, Chandragupta é conhecido como Sandrocupto (Σανδρόκυπτος), Sandrócoto (Σανδρόκοττος) \n[…]\nAntes de consolidar o seu poder, Chandragupta teria acedido ao poder num pequeno reino situado no nordeste do subcontinente da Índia de onde estendeu o seu domínio contra o Império Nanda dominando toda a Planície Indo Ganges. Depois das conquistas de Chandragupta o Império Máuria estendia-se desde Bengala e Assam no Leste, até o Afeganistão e o Baluquistão no Oeste, até Caxemira e Nepal no norte, e até o Planalto do Decão no sul.\n[…]\nNa Índia, o primeiro grande império foi fundado em 321 a.C. por um obscuro guerreiro, Chandragupta. Era o comandante do exército de Mágada, então sob o domínio da dinastia Nanda. Chandragupta dirigiu uma revolta que falhou e fugiu para junto de Alexandre Magno, para refúgio e conselho, quando este se encontrava no noroeste da Índia. Levou a cabo um novo ataque ao rei Nanda (possivelmente com apoio grego), matando-o e subindo ao trono.\n[…]\nDava-se início a uma nova dinastia na história da Índia, a dinastia Máuria.\n[…]\nChandragupta unificou o Norte da Índia e o seu império estendeu-se de Bengala ao Indocuche, nas fronteiras com o Afeganistão. Em 305 a.C., repeliu uma tentativa de invasão de Seleuco I Nicátor, um dos generais de Alexandre, que se apoderara da parte oriental do Império Macedónio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Zero",
      "descricao": "Número que representa a ausência de quantidade e que funciona como algarismo no sistema posicional."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século sete, que matemático indiano escreveu regras para somar, subtrair e multiplicar usando o zero como número?",
    "resposta": "Brahmagupta",
    "distratores": [
      "Aryabhata",
      "Panini",
      "Kautilya"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brahmagupta",
      "https://en.wikipedia.org/wiki/0"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brahmagupta",
        "situacao": "ok",
        "texto": "Brahmagupta  (c. 598 – c. 668 CE) was an Indian mathematician and astronomer who is credited as the first person to understand and formalize the concept of the number zero for nothing in mathematics. He is the author of two early works on mathematics and astronomy: the Brāhmasphuṭasiddhānta (BSS, \"correctly established doctrine of Brahma\", dated 628), a theoretical treatise, and the Khandakhadyaka\n[…]\nBrahmagupta's texts were translated into Arabic by Muḥammad ibn Ibrāhīm al-Fazārī, an astronomer in Al-Mansur's court, under the names Sindhind and Arakhand. An immediate outcome was the spread of the decimal number system used in the texts. The mathematician Al-Khwarizmi (800–850 CE) wrote a text called al-Jam wal-tafriq bi hisal-al-Hind (Addition and Subtraction in Indian Arithmetic), which was translated into Latin in the 13th century as Algorithmi de numero indorum.\n[…]\nIndian arithmetic was known in medieval Europe as modus Indorum meaning \"method of the Indians\". In the Brāhmasphuṭasiddhānta, four methods for multiplication were described, including gomūtrikā, which is said to be close to the present-day methods. In the beginning of chapter twelve of his Brāhmasphuṭasiddhānta, entitled \"Calculation\", he also details operations on fractions.\n[…]\nHere Brahmagupta states that ⁠0/0⁠ = 0 and as for the question of ⁠a/0⁠ where a ≠ 0 he did not commit himself. His rules for arithmetic on negative numbers and zero are quite close to the modern understanding, except that in modern mathematics division by zero is left undefined.\n[…]\nBrahmagupta triangle\n[…]\nBhattacharyya, R. K. (2011), \"Brahmagupta: The Ancient Indian Mathematician\", in B. S. Yadav; Man Mohan (eds.), Ancient Indian Leaps into Mathematics, Springer Science & Business Media, pp. 185–192, ISBN 978-0-8176-4695-0\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Brahmagupta\", MacTutor History of Mathematics Archive, University of St Andrews"
      },
      {
        "url": "https://en.wikipedia.org/wiki/0",
        "situacao": "ok",
        "texto": "0 (zero, ) is a number representing an empty quantity. Adding (or subtracting) 0 to any number leaves that number unchanged; in mathematical terminology, 0 is the additive identity of the integers, rational numbers, real numbers, and complex numbers, as well as other algebraic structures. Multiplying any number by 0 results in 0, and consequently dividing by 0 is generally considered to be undefin\n[…]\nThe role of 0 as additive identity generalizes beyond elementary algebra. In abstract algebra, 0 is commonly used to denote a zero element, which is the identity element for addition (if defined on the structure under consideration) and an absorbing element for multiplication (if defined). Examples include identity elements of additive groups and vector spaces. Another example is the zero function (or zero map) on a domain D.\n[…]\nThe rods gave the decimal representation of a number, with an empty space denoting zero. A circa 190 AD, manual, the \"Supplementary Notes on the Art of Figures\", by Xu Yue, also outlines the techniques to add, subtract, multiply, and divide numbers, containing zero values in a decimal power, on counting devices, that include counting rods, and abacus.\n[…]\nRules governing the use of zero appeared in Brahmagupta's Brahmasputha Siddhanta (7th century), which states the sum of zero with itself as zero, and incorrectly describes division by zero in the following way:\n[…]\nIn AD 813, astronomical tables were prepared by a Persian mathematician, Muḥammad ibn Mūsā al-Khwārizmī, using Hindu numerals; and about 825, he published a book synthesizing Greek and Hindu knowledge and also contained his own contribution to mathematics including an explanation of the use of zero. This book was later translated into Latin in the 12th century under the title Algoritmi de numero Indorum. This title means \"al-Khwarizmi on the Numerals of the Indians\".\n[…]\n\"Zero\". Encyclopedia Americana. 1920."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brahmagupta",
        "situacao": "ok",
        "texto": "Brahmagupta (c. 598 – após 665) foi um matemático e astrônomo indiano. É autor de uma das primeiras exposições conhecidas do zero como número e de regras para calcular com ele e com números negativos. Escreveu duas obras antigas sobre matemática e astronomia: o Brāhmasphuṭasiddhānta (BSS, \"doutrina de Brahma corretamente estabelecida\"), tratado teórico datado de 628, e o Khandakhadyaka (\"porção co\n[…]\n0\n[…]\nNa escrita algébrica de Brahmagupta, como na de Diofanto, números postos lado a lado indicavam uma soma. Um ponto acima do subtraendo indicava subtração, e o divisor colocado abaixo do dividendo indicava divisão, ainda sem uma barra de fração. Palavras abreviadas serviam para multiplicação, extração de raízes e incógnitas. Não se sabe se a escrita indiana recebeu alguma influência grega. É possível que as duas formas de abreviação tenham vindo de uma fonte babilônica comum.\n[…]\nAo expor adição, subtração, multiplicação e divisão, Brahmagupta usava métodos baseados no sistema de numeração decimal de origem indiana. Essas operações já eram praticadas por muitos povos antes dele. Para explicar uma maneira de multiplicar, ele compara o número a ser multiplicado a uma corda repetida conforme as partes do multiplicador:\n[…]\nEmbora o zero já servisse como marcador de posição na escrita de números, entre os babilônios e no manuscrito de Bakhshali, o Brāhmasphuṭasiddhānta dá regras para calcular com ele como um número por si só e também com números negativos. Brahmagupta compara quantidades positivas a bens e quantidades negativas a dívidas ao enunciar, no capítulo 18, as regras de adição e subtração:\n[…]\nBrahmagupta toma\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\n0\n[…]\nBhattacharyya, R. K. (2011). «Brahmagupta: The Ancient Indian Mathematician». In:  B. S. Yadav e Man Mohan. Ancient Indian Leaps into Mathematics. [S.l.]: Springer Science & Business Media. pp. 185–192. ISBN 978-0-8176-4695-0. Cópia arquivada em 2 de fevereiro de 2026",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Tao Te Ching",
      "descricao": "Texto clássico chinês, base do taoismo, tradicionalmente atribuído ao sábio Lao-Tsé."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Tao Te Ching, livro fundamental do taoismo, é tradicionalmente atribuído a que sábio da China antiga?",
    "resposta": "Lao-Tsé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tao_Te_Ching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "The Tao Te Ching or Dào Dé Jīng, (traditional Chinese: 道德經; simplified Chinese: 道德经; lit. 'Classic of the Way and its Virtue') also known simply as the Laozi, is an ancient Chinese classic text traditionally credited to the sage Laozi, regarded as the foundational Taoist text. Central to both philosophical and religious Taoism, it has been \"profoundly influential\" more broadly in Chinese culture, \n[…]\nThe title Tao Te Ching, designating the work's status as a classic (經; 经; jīng), was first applied during the reign of Emperor Jing of Han (157–141 BCE), but \"appears not to have been widely used\" until near the end of the Han dynasty. Later sources added that it was Emperor Jing himself who named it a classic, but the Shiji states that his mother the Empress Dowager Dou was a more dedicated student of the text.\n[…]\nThomas Michael sees a phenomenology in the Tao te Ching as developing out of bodily cultivation. He considers a jing 静 a central idea in the text; to be (clear, settled, calm, tranquil). Chapter 15 asks: \"what can be turbid and through jing become gradually clear?\", with a literal example of muddy water settling to become clear.\n[…]\nTaoism views them as inherently biased and artificial, widely using paradoxes to sharpen the point.\n[…]\nThe Tao Te Ching has been translated into Western languages over 250 times, mostly to English, German, and French. Another estimate is that there have been 1930 translations into 94 languages.\n[…]\nOther Taoism scholars, such as Michael LaFargue and Jonathan Herman, argue that, while these versions do not pretend to scholarship, they meet a real spiritual need in the West; they aim to make the wisdom of the Tao Te Ching more accessible to modern English-speaking readers by, typically, employing more familiar cultural and temporal references.\n[…]\nTao Te Ching public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "Tao Te Ching, Dao de Jing ou Tao-te king (em chinês: , Dàodé jīng), comumente traduzido como O Livro do Caminho e da Virtude, é uma das mais conhecidas e importantes obras da literatura da China. Foi escrito entre 350 e 250 a.C.\n[…]\nTrata‑se de um texto filosófico relativamente curto, com pouco mais de 5000 caracteres, que era originariamente conhecido como Lao Tzi (老子, que significa \"Velho Mestre\") ou como O Texto de 5000 palavras (五千字文, wǔqiān zìwén). O seu nome atual vem das palavras que iniciam cada uma das duas secções principais em que é hoje normalmente dividido, chamadas Livro do Tao (道經, dào jīng) e Livro do Te (德經, dé jīng). A palavra Ching (經, jīng) designa um livro considerado como um clássico.\n[…]\nA versão mais antiga que se conhece do Tao Te Ching foi encontrada em 1993, em Guodian, na China, num túmulo datado do período de meados do século IV ao início do século III a.C. Está escrita numa série de réguas de bambu, cada uma das quais contendo cerca de vinte caracteres. O texto passa de uma régua para outra, sem qualquer pontuação ou divisão em parágrafos ou capítulos.\n[…]\nAs diversas correntes do pensamento religioso e filosófico através dos tempos atribuíram milhares de interpretações diferentes ao sentido do Tao Te Ching. Porém, o tema principal do livro é localizado no seu primeiro provérbio: \"O tao que pode ser dito não é o tao verdadeiro\".\n[…]\nAs ideias cosmogónicas e metafísicas do Tao Te Ching, de acordo com algumas ramificações do taoismo, podem ser definidas da seguinte forma:\n[…]\nI Ching\n[…]\nLegge, James;  et al., eds. (1891), The Tao Teh King, Sacred Books of the East, Vol. XXXIX, Sacred Books of China, Vol. V, Oxford: Oxford University Press .\n[…]\nO Tao Te Ching em Rimas\n[…]\nO Tao Te Ching de Sthephen Mitchel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Seda",
      "descricao": "Tecido fino feito com o fio do casulo do bicho-da-seda, desenvolvido na China antiga."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Segundo a lenda chinesa, que imperatriz, esposa do Imperador Amarelo, descobriu a seda quando um casulo caiu em sua xícara de chá?",
    "resposta": "Leizu",
    "distratores": [
      "Wu Zetian",
      "Cixi",
      "Yang Guifei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leizu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leizu",
        "situacao": "ok",
        "texto": "Leizu (Chinese: 嫘祖; pinyin: Léi Zǔ), also known as Xi Ling-shi (Chinese: 西陵氏, Wade–Giles Hsi Ling-shih), was a legendary Chinese empress and wife of the Yellow Emperor. According to tradition, she discovered sericulture, and invented the silk loom, in the 27th century BC.\n[…]\nAccording to legend, Leizu discovered silkworms while having an afternoon tea, and a cocoon fell in her tea. It slowly unraveled and she was enchanted by it.\n[…]\nA fine thread started to separate itself from the silkworm cocoon. Leizu found that she could unwind this soft and lovely thread around her finger.\n[…]\nShe persuaded her husband to give her a grove of mulberry trees, where she could domesticate the worms that made these cocoons. She is attributed with inventing the silk reel, which joins fine filaments into a thread strong enough for weaving. She is also credited with inventing the first silk loom. It is not known how much, if any, of this story is true, but historians do know that China was the first civilization to use silk.\n[…]\nLeizu shared the art of silk with all of China and even other countries later on.\n[…]\nLeizu had two known sons with the Yellow Emperor named Shaohao and Changyi, with the latter the father of Zhuanxu. Zhuanxu's uncles and his father, the sons of Yellow Emperor, were bypassed and Zhuanxu was selected as heir.\n[…]\nKuhn, Dieter (1984). \"Tracing a Chinese Legend: In Search of the Identity of the 'First Sericulturalist.'\" T'oung Pao 70: 213–45."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Tipos móveis",
      "descricao": "Técnica de impressão com peças avulsas para cada caractere, que podem ser recombinadas para compor textos."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século onze, segundo o relato do sábio Shen Kuo, que artesão chinês criou tipos móveis de argila para imprimir textos?",
    "resposta": "Bi Sheng",
    "distratores": [
      "Cai Lun",
      "Zhang Heng",
      "Su Song"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bi_Sheng",
      "https://en.wikipedia.org/wiki/Movable_type"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bi_Sheng",
        "situacao": "ok",
        "texto": "Bi Sheng (died 1051) was a Chinese artisan and engineer during the Song dynasty (960–1279), who invented the world's first movable type. Bi's system used fired clay tiles, one for each Chinese character, and was invented between 1039 and 1048. Printing was one of the Four Great Inventions. Because Bi was a commoner, not an educated person, little is known about his life besides this invention.\n[…]\nBi Sheng's invention was only recorded in the Dream Pool Essays by Chinese scholar-official and polymath Shen Kuo (1031–1095). The book provides a detailed description of the technical details of Bi Sheng's invention of movable type printing:\n[…]\nBi Sheng also developed wooden movable type, but it was abandoned in favor of ceramic types due to the presence of wood grains and the unevenness of the wooden type after being soaked in ink.\n[…]\nAfter his death, ceramic movable type may have spread to the Tangut kingdom of Western Xia, where a Buddhist text known as the Vimalakirti Nirdesa Sutra was found in modern Wuwei, Gansu, dating to the reign of Emperor Renzong of Western Xia (r. 1125-1193). The text features traits that have been identified as hallmarks of clay movable type such as the hollowness of the character strokes and deformed and broken strokes. The ceramic movable-type also passed onto Bi Sheng's descendants.\n[…]\nThe next mention of movable type occurred in 1193 when a Southern Song chief counselor, Zhou Bida (周必大), attributed the movable-type method of printing to Shen Kuo. However Shen Kuo did not invent the movable type but credited it to Bi Sheng in his Dream Pool Essays. The ceramic movable type was also mentioned by Kublai Khan's councilor Yao Shu, who convinced his pupil Yang Gu to print language primers using this method.\n[…]\nBy 1490, bronze movable type was developed by the wealthy printer Hua Sui (1439–1513)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Movable_type",
        "situacao": "ok",
        "texto": "Movable type (US English; moveable type in British English) is the system and technology of printing and typography that uses movable components to reproduce the elements of a document (usually individual alphanumeric characters or punctuation marks) usually on the medium of paper.\n[…]\nBi Sheng (畢昇) (990–1051) developed the first known movable-type system for printing in China around 1040 AD during the Northern Song dynasty, using ceramic materials. As described by the Chinese scholar Shen Kuo (沈括) (1031–1095):\n[…]\nAfter his death, ceramic movable type may have spread to the Tangut kingdom of Western Xia, where a Buddhist text known as the Vimalakirti Nirdesa Sutra was found in modern Wuwei, Gansu, dating to the reign of Emperor Renzong of Western Xia (r. 1125-1193). The text features traits that have been identified as hallmarks of ceramic movable type such as the hollowness of the character strokes and deformed and broken strokes. The ceramic movable-type also passed onto Bi Sheng's descendants.\n[…]\nThe next mention of movable type occurred in 1193 when a Southern Song chief counselor, Zhou Bida (周必大), attributed the movable-type method of printing to Shen Kuo. However Shen Kuo did not invent the movable type but credited it to Bi Sheng in his Dream Pool Essays. Zhou used ceramic type to print the Yutang Zaji (Notes of the Jade Hall) in 1193.\n[…]\nBi Sheng (990–1051) of the Song dynasty also pioneered the use of wooden movable type around 1040 AD, as described by the Chinese scholar Shen Kuo (1031–1095). However, this technology was abandoned in favour of clay movable types due to the presence of wood grains and the unevenness of the wooden type after being soaked in ink.\n[…]\nSpread of European movable type printing\n[…]\nType foundry\n[…]\nMovable type of printing at Oxford Reference"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bi_Sheng",
        "situacao": "ok",
        "texto": "Bi Shēng (990-1051 dC) foi um artesão e inventor chinês que ficou conhecido pela primeira tecnologia de tipo móvel do mundo, uma das Quatro Grandes Invenções da China Antiga.\n[…]\nO sistema de Bi Sheng foi feito de porcelana chinesa e foi inventado entre 1041 e 1048 durante a dinastia Sung medieval.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Rota da Seda",
      "descricao": "Rede de rotas comerciais que ligava a China ao Mediterrâneo desde a Antiguidade."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que diplomata chinês, enviado ao oeste por um imperador Han no século dois antes de Cristo, abriu caminho para a Rota da Seda?",
    "resposta": "Zhang Qian",
    "distratores": [
      "Zheng He",
      "Xuanzang",
      "Cai Lun"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zhang_Qian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zhang_Qian",
        "situacao": "ok",
        "texto": "Zhang Qian (Chinese: 張騫; died c. 114 BC) was a Chinese diplomat, explorer, and politician who served as an imperial envoy to the world outside of China in the late 2nd century BC during the Western Han dynasty. He was one of the first official diplomats to bring back valuable information about Central Asia, including the Greco-Bactrian remains of the Macedonian Empire as well as the Parthian Empir\n[…]\nThe Central Asian parts of the Silk Road routes were expanded around 114 BC largely through the missions of and exploration by Zhang Qian. Today, Zhang is considered a Chinese national hero and revered for the key role he played in opening China and the countries of the known world to the wider opportunity of commercial trade and global alliances.\n[…]\nZhang Qian identifies \"Anxi\" (Chinese: 安息) as an advanced urban civilization, like Dayuan (Ferghana) and Daxia (Bactria). The name \"Anxi\" is a transcription of \"Arshak\" (Arsaces), the name of the founder of Arsacid Empire that ruled the regions along the Silk Road between the Tedzhen river in the east and the Tigris in the west, and running through Aria, Parthia proper, and Media proper.\n[…]\nFollowing Zhang Qian's embassy and report, commercial relations between China and Central as well as Western Asia flourished, as many Chinese missions were sent throughout the end of the 2nd century BC and the 1st century BC, initiating the development of the Silk Road:\n[…]\nZhang Qian's journeys had promoted a great variety of economic and cultural exchanges between the Han dynasty and the Western Regions. Because silk became the dominant product traded from China, this great trade route later became known as the Silk Road.\n[…]\nLoewe, Michael (2000). \"Zhang Qian 張騫\". A Biographical Dictionary of the Qin, Former Han, and Xin Periods (220 BC – AD 24). Leiden: Brill. pp. 687–9. ISBN 90-04-10364-3.\n[…]\nThe Opening of the Silk Road"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "O Conto de Genji",
      "descricao": "Obra clássica da literatura japonesa, escrita no início do século onze por uma dama da corte Heian."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Por volta do ano mil, que dama da corte imperial japonesa escreveu O Conto de Genji, clássico da literatura do Japão?",
    "resposta": "Murasaki Shikibu",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
      "https://en.wikipedia.org/wiki/Murasaki_Shikibu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
        "situacao": "ok",
        "texto": "The Tale of Genji (源氏物語, Genji Monogatari) is a classic work of Japanese literature said to have been written by the noblewoman, poet, and lady-in-waiting Murasaki Shikibu around the peak of the Heian period, in the early 11th century. It is the first novel written by a woman to have won global recognition. In Japan, The Tale of Genji has a stature similar to that of Shakespeare's works in English\n[…]\nMurasaki is said to have written the character of Genji based on the Minister on the Left at the time she was at court. Other translators, such as Tyler, believe the character Murasaki no Ue, whom Genji marries, is based on Murasaki Shikibu herself.\n[…]\nEdward Seidensticker, who made the second translation of the Genji, believed that Murasaki Shikibu had not had a planned story structure with an ending as such but would simply have continued writing as long as she could.\n[…]\nHerberth E. Herlitschka: Die Geschichte vom Prinzen Genji, wie sie geschrieben wurde um das Jahr Eintausend unserer Zeitrechnung von Murasaki, genannt Shikibu, Hofdame der Kaiserin von Japan. 2 volumes. Insel-Verlag, Leipzig 1937. (numerous new editions). Translated from Waley.\n[…]\nBowring, Richard John (1988). Murasaki shikibu, The Tale of Genji. Cambridge; New York: Cambridge University Press.\n[…]\nHenitiuk, Valerie (2008). \"Going to Bed with Waley: How Murasaki Shikibu Does and Does Not Become World Literature\". Comparative Literature Studies. 45 (1): 40–61. doi:10.1353/cls.0.0010. JSTOR 25659632. S2CID 161786027.\n[…]\nKamens, Edward B (1993). Approaches to Teaching Murasaki Shikibu's The Tale of Genji. New York: Modern Language Association of America.\n[…]\nKnapp, Bettina L (Spring 1992). \"Lady Murasaki Shikibu's the Tale of Genji: Search for the Mother\". Symposium. 46 (1): 34–48. doi:10.1080/00397709.1992.10733759.\n[…]\nPuette, William J (1983). Guide to the Tale of Genji by Murasaki Shikibu. Rutland, VT: C.E. Tuttle. ISBN 9780804814546."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Murasaki_Shikibu",
        "situacao": "ok",
        "texto": "Murasaki Shikibu (紫式部; [mɯ.ɾa.sa.kʲi ɕi̥.kiꜜ.bɯ, -ɕi̥ꜜ.kʲi-], c. 973 – c. 1014 or 1025), or Shijo (紫女; [ɕiꜜ.(d)ʑo], lit. 'Lady Murasaki'), was a Japanese novelist, poet and lady-in-waiting at the Imperial court in the Heian period. She was best known as the author of The Tale of Genji, widely considered to be one of the world's first novels, written in Japanese between about 1000 and 1012.\n[…]\nWhen Emperor Ichijō died in 1011, Shōshi retired from the Imperial Palace to live in a Fujiwara mansion in Biwa, most likely accompanied by Murasaki, who is recorded as being there with Shōshi in 1013. George Aston explains that when Murasaki retired from court she was again associated with Ishiyama-dera: \"To this beautiful spot, it is said, Murasaki no Shikibu [sic] retired from court life to devote the remainder of her days to literature and religion.\n[…]\nMurasaki may have died in 1014. Her father made a hasty return to Kyoto from his post at Echigo Province (modern Niigata) that year, possibly because of her death. Writing in A Bridge of Dreams: A Poetics of \"The Tale of Genji\", Shirane mentions that 1014 is generally accepted as the date of Murasaki Shikibu's death and 973 as the date of her birth, making her 41 when she died. Bowring considers 1014 to be speculative, and believes she may have lived with Shōshi until as late as 1025.\n[…]\nHelen McCullough describes Murasaki's writing as of universal appeal and believes The Tale of Genji \"transcends both its genre and age. Its basic subject matter and setting—love at the Heian court—are those of the romance, and its cultural assumptions are those of the mid-Heian period, but Murasaki Shikibu's unique genius has made the work for many a powerful statement of human relationships, the impossibility of permanent happiness in love ...\n[…]\nWorks by Murasaki Shikibu at Open Library\n[…]\nWorks by Murasaki Shikibu at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Genji_Monogatari",
        "situacao": "ok",
        "texto": "Genji Monogatari (源氏物語, lit. O Conto de Genji) é um livro de literatura clássica japonesa escrito durante o Período Heian da história do Japão. Com um total de 54 capítulos, a obra foi finalizada em 1008 e posteriormente ilustrada no emakimono \"O Conto de Genji Emaki\", no final do período Heian. O Conto de Genji é atribuído à poetisa e dama de companhia da corte Murasaki Shikibu. É considerado o p\n[…]\nApesar de não haver provas concretas a respeito da autoria desta obra, uma mulher que fazia parte da corte da imperatriz em finais do Século X e princípios do Século XI, chamada Murasaki Shikibu (紫 式部, em japonês), geralmente é considerada a autora do livro. Sabe-se o nome da autora somente indiretamente. Muitos literários acreditam que várias pessoas participaram de sua construção, especialmente na parte final da obra.\n[…]\nO debate sobre quanto do Genji foi realmente escrito por Murasaki Shikibu já dura séculos e é provável que jamais será resolvido, a menos que alguma grande descoberta arquivística seja feita. É geralmente aceito que o conto foi concluído em sua forma atual de 1021, quando a autora do Sarashina Nikki escreveu um diário famoso sobre sua alegria em adquirir uma cópia completa do conto.\n[…]\nFala-se que Murasaki escreveu sobre o personagem Genji baseado no Ministro da Esquerda na época em que ela estava na corte. Outros tradutores, como Tyler, mencionam o fato de que o personagem Murasaki no ue, que Genji, posteriormente, lhe faz sua esposa é baseado na própria Murasaki Shikibu. Curiosamente Murasaki Shikibu começou a escrever o romance a partir do Suma-capítulo 12 e Akashi-capítulo 13, antes de ela escrever o resto do livro.\n[…]\nA ascensão e queda de Genji\n[…]\n5 Waka murasaki   (若紫, わかむらさき)\n[…]\nThe Tale of Genji de Murasaki Shikibu(Mount Mercy College: 1330 Elmhurst Drive, Cedar Rapids, Iowa, EUA) . Versão deste e outros clássicos da literatura disponíveis em linha gratuitamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Mesopotâmia",
      "descricao": "Região histórica do Oriente Próximo, entre os rios Tigre e Eufrates, berço de sumérios, acádios, babilônios e assírios."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Mesopotâmia, dado pelos gregos à região do Tigre e do Eufrates, significa o quê?",
    "resposta": "Entre rios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mesopotamia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mesopotamia",
        "situacao": "ok",
        "texto": "Mesopotamia is a historical region of West Asia situated within the Tigris–Euphrates river system, in the northern part of the Fertile Crescent. It corresponds roughly to the territory of modern Iraq. Just beyond it lies southwestern Iran, where the region transitions into the Iranian plateau, marking the shift from the Arab world to Iran.\n[…]\nThe early logographic system of cuneiform script took many years to master. Thus, only a limited number of individuals were hired as scribes to be trained in its use. It was not until the widespread use of a syllabic script was adopted under Sargon's rule that significant portions of the Mesopotamian population became literate. Massive archives of texts were recovered from the archaeological contexts of Old Babylonian scribal schools, through which literacy was disseminated.\n[…]\nStudies indicate that the different ethno-religious groups of Iraq (Mesopotamia) share significant similarities in genetics and that Mesopotamian Arabs, who make up the majority of Iraqis, are more genetically similar to Iraqi Kurds than other Arab populations in the Middle East and Arabia.\n[…]\nNo significant differences in Y-DNA variation were observed among Iraqi Mesopotamian Arabs, Assyrians, or Kurds. Modern genetic studies indicate that Iraqi Mesopotamian Arabs are more related to Iraqi-Assyrians than Iraqi Kurds.\n[…]\nWhile other studies indicate that the Iraqi-Assyrian population was found to be significantly related to other Iraqis, especially Mesopotamian Arabs, likely due to the assimilation of indigenous Assyrians with other people groups who occupied and settled Mesopotamia after the fall of the Neo-Babylonian Empire.\n[…]\nAncient Mesopotamia – Timeline, definition, and articles at World History Encyclopedia\n[…]\nMesopotamia – Introduction to Mesopotamia from the British Museum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesopot%C3%A2mia",
        "situacao": "ok",
        "texto": "Mesopotâmia é uma região histórica da Ásia Ocidental situada dentro do sistema fluvial Tigre-Eufrates, na parte norte do Crescente Fértil. Corresponde aproximadamente ao território do Iraque moderno e forma a fronteira geográfica oriental do Oriente Médio moderno. Logo além dela fica o sudoeste do Irã, onde a região transita para o planalto persa, marcando a mudança do mundo árabe para o iraniano.\n[…]\nNormalmente, é feita uma distinção adicional entre a Mesopotâmia Setentrional (ou Alta Mesopotâmia) e a Mesopotâmia Meridional (ou Baixa Mesopotâmia). A Alta Mesopotâmia, também conhecida como Jazira, é a área entre o Eufrates e o Tigre, desde suas nascentes até Bagdá. A Baixa Mesopotâmia é a área que vai de Bagdá ao Golfo Pérsico e inclui o Kuwait e partes do oeste do Irã.\n[…]\nA Mesopotâmia abrange a região entre os rios Eufrates e Tigre, ambos com nascentes no planalto armênio vizinho. Ambos os rios são alimentados por numerosos afluentes, e todo o sistema fluvial drena uma vasta região montanhosa. As rotas terrestres na Mesopotâmia geralmente seguem o Eufrates, pois as margens do Tigre são frequentemente íngremes e de difícil acesso.\n[…]\nA geografia do sul da Mesopotâmia é tal que a agricultura só é possível com irrigação e boa drenagem, um fato que teve um profundo efeito na evolução da civilização mesopotâmica antiga. A necessidade de irrigação levou os sumérios, e mais tarde os acádios, a construir suas cidades ao longo do Tigre e do Eufrates e dos afluentes desses rios.\n[…]\nCidades importantes, como Ur e Uruque, se estabeleceram em afluentes do Eufrates, enquanto outras, notavelmente Lagash, foram construídas em afluentes do Tigre. Os rios forneciam ainda os benefícios do peixe, usado tanto para alimentação quanto para fertilizante, juncos e argila, para materiais de construção. Com a irrigação, o abastecimento de alimentos na Mesopotâmia era comparável ao das pradarias canadenses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Dinastia Han",
      "descricao": "Dinastia imperial chinesa que governou de 206 antes de Cristo a 220 depois de Cristo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O grupo étnico majoritário da China, que reúne mais de um bilhão de pessoas, leva o nome de que dinastia antiga?",
    "resposta": "Dinastia Han",
    "fonte": [
      "https://en.wikipedia.org/wiki/Han_Chinese",
      "https://en.wikipedia.org/wiki/Han_dynasty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Han_Chinese",
        "situacao": "ok",
        "texto": "The Han Chinese, alternatively Han people or Chinese people, are an East Asian ethnic group native to Greater China. With a global population of over 1.4 billion, the Han Chinese are the world's largest ethnic group, making up about 17% of the world population. The Han Chinese represent 91.11% of the population in China and 97% of the population in Taiwan.\n[…]\nThe Han Chinese people have had a substantial impact on the history of China, being considered the ethnic majority of the region for most of its history. The prevailing historical narrative of China is often told as the transference of power through dynasties, periods during which it has seen cycles of expansion, contraction, unity, and fragmentation.\n[…]\nRestoring Chinese rule to the Han majority was one of the motivations for supporters of the 1911 Revolution to overthrow the Manchu-led Qing dynasty in 1912, which led to the establishment of the Han-dominated Republic of China. After the establishment of the republic, Sun went to offer sacrifices in Hongwu Emperor's Xiao Mausoleum:\n[…]\nConfucianism, although sometimes described as a religion, is another indigenous governing philosophy and moral code with some religious elements like ancestor worship. It continues to be deeply ingrained in modern Chinese culture and was the official state philosophy in ancient China during the Han dynasty and until the fall of imperial China in the 20th century (though it is worth noting that there is a movement in China today advocating that the culture be \"re-Confucianized\").\n[…]\nHaplogroups O1 and O2 significantly peak in the southeastern coastlines and eastern regions of China respectively, according to one study.\n[…]\nJoniak-Luthi, Agnieszka (2015). The Han: China's Diverse Majority. University of Washington Press. ISBN 978-0-295-80597-9. JSTOR j.ctvbtzmcr. OCLC 1298712256. Project MUSE book 40511."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Han_dynasty",
        "situacao": "ok",
        "texto": "The Han dynasty (202 BC – 9 AD, 25–220 AD) was an imperial dynasty of China established by Liu Bang, and preceded by the short-lived Qin dynasty (221–206 BC) and the interregnum known as the Chu–Han Contention (206–202 BC). It was succeeded by the Three Kingdoms period (220–280 AD) and also briefly interrupted by the Xin dynasty (9–23 AD) established by the usurping regent Wang Mang. It is thus se\n[…]\nThe Han dynasty is considered a golden age in Chinese history, impacting Chinese identity in later periods. The majority ethnic group of modern China refer to themselves as the \"Han people\", while spoken Chinese and written Chinese are referred to respectively as the \"Han language\" and \"Han characters\".\n[…]\nChina's first imperial dynasty was the Qin dynasty (221–206 BC). The Qin united the Chinese Warring States by conquest, but their regime became unstable after the death of the first emperor Qin Shi Huang. Within four years, the dynasty's authority had collapsed in a rebellion. Two former rebel leaders, Xiang Yu (d. 202 BC) of Chu and Liu Bang (d.\n[…]\nTimber was the chief building material during the Han; it was used to build palace halls, multi-story residential towers and halls, and single-story houses. Because wood decays rapidly, the only remaining evidence of Han wooden architecture is a collection of scattered ceramic roof tiles. The oldest surviving wooden halls in China date to the Tang dynasty. Architectural historian Robert L.\n[…]\nTo address the problem of slowed timekeeping in the pressure head of the inflow water clock, Zhang was the first in China to install an additional tank between the reservoir and inflow vessel.\n[…]\n\"Han dynasty\" by Emuseum – Minnesota State University, Mankato\n[…]\nHan dynasty art with video commentary, Minneapolis Institute of Arts\n[…]\nEarly Imperial China: A Working Collection of Resources  Archived 25 June 2010 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Han_%28etnia%29",
        "situacao": "ok",
        "texto": "Han (em chinês simplificado: 汉; chinês: 漢; pinyin: hàn) é o maior grupo étnico da China (e de todo o mundo), representando quase 92% da população chinesa, ou seja, mais de 1,24 bilhão de pessoas (cerca de 18% da população mundial, equivalente à população da Índia).\n[…]\nO termo \"han\" foi usado pela primeira vez no século XIX para distinguir a maioria dos chineses da minoria manchu que governava a China. O nome vem da dinastia Han, que governou as partes da China de onde os chineses han têm origem. Mesmo hoje, são referidos como \"pessoas han\" (chinês: 汉人; pinyin: Hàn rén).\n[…]\nSua etnogênese envolve migrações do norte para o sul da China realizadas por um longo período. Sua origem está nas comunidades Huaxia, localizadas no norte da China.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Zen",
      "descricao": "Escola do budismo maaiana surgida na China com o nome de Chan e difundida no Japão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra japonesa zen vem do chinês chan, que por sua vez deriva de um termo do sânscrito. O que esse termo significa?",
    "resposta": "Meditação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zen",
      "https://en.wikipedia.org/wiki/Dhyana_in_Buddhism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zen",
        "situacao": "ok",
        "texto": "Zen (Japanese pronunciation: [dzeꜜɴ, dzeɴ]; from Chinese: Chan; in Korean: Seon, and Vietnamese: Thiền) is a Mahayana Buddhist tradition that developed in China during the Tang dynasty by blending Indian Mahayana Buddhism, particularly Yogacara and Madhyamaka philosophies, with Chinese Taoist thought, especially Neo-Daoist. Zen originated as the Chan school (禪宗, Chanzōng, 'meditation school') or t\n[…]\nThe practice of meditation (Chan in Chinese and dhyāna in Sanskrit), especially sitting meditation (坐禪, pinyin: zuòchán; zazen in Japanese) is a central part of Zen Buddhism.\n[…]\nEvidence for the practice of nianfo chan can also be found in Changlu Zongze's (died c. 1107) Chanyuan qinggui (The Rules of Purity in the Chan Monastery), perhaps the most influential Chan monastic code in East Asia. Nianfo continued to be taught as a form of Chan meditation by later Chinese figures such as Yongming Yanshou, Zhongfen Mingben, and Tianru Weize. During the late Ming, the tradition of Nianfo Chan meditation was continued by figures such as Yunqi Zhuhong and Hanshan Deqing.\n[…]\nEarly Chan refers to early Tang dynasty (618–750) Chan. The fifth patriarch Daman Hongren (601–674), and his dharma-heir Yuquan Shenxiu (606?–706) were influential in founding the first Chan institution in Chinese history, known as the \"East Mountain school\". Hongren emphasized the meditation practice of \"maintaining (guarding) the mind,\" which focuses on \"an awareness of True Mind or Buddha-nature within\".\n[…]\nThis became a widespread phenomenon and in time much of the distinction between them was lost, with many monasteries teaching both Chan meditation and the Pure Land practice of nianfo. Another prominent example is Ouyi Zhixu, who was a Patriarch of both the Chinese Pure Land and the Tiantai traditions in addition to being a Chan practitioner; he also wrote works expounding on the Weishi teachings.\n[…]\nChinese Chan"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dhyana_in_Buddhism",
        "situacao": "ok",
        "texto": "In the oldest texts of Buddhism, dhyāna (Sanskrit: ध्यान) or jhāna (Pāli) is a component of the training of the mind (bhāvanā), commonly translated as meditation, to withdraw the mind from the automatic responses to sense-impressions and \"burn up\" the defilements, leading to a \"state of perfect equanimity and awareness (upekkhā-sati-parisuddhi).\" Dhyāna may have been the core practice of pre-secta\n[…]\nIn Buddhist traditions of Chan and Zen (the names of which are, respectively, the Chinese and Japanese pronunciations of dhyāna), as in Theravada and Tiantai, anapanasati (mindfulness of breathing), which is transmitted in the Buddhist tradition as a means to develop dhyana, is a central practice. In the Chan/Zen-tradition this practice is ultimately based on Sarvastivāda meditation techniques transmitted since the beginning of the Common Era.\n[…]\nIn China, the word dhyāna was originally transliterated with Chinese: 禪那; pinyin: chánnà and shortened to just pinyin: chán in common usage. The word and the practice of Buddhist meditation entered into Chinese through the translations of An Shigao (fl. c. 148–180 CE), and Kumārajīva (334–413 CE), who translated Dhyāna sutras, which were influential early meditation texts mostly based on the Yogacara meditation teachings of the Sarvāstivāda school of Kashmir circa 1st–4th centuries CE.\n[…]\nAccording to Charles Luk, in the earliest traditions of Chan, there was no fixed method or formula for teaching meditation, and all instructions were simply heuristic methods, to point to the true nature of the mind, also known as Buddha-nature. According to Luk, this method is referred to as the \"Mind Dharma\", and exemplified in the story of Śākyamuni Buddha holding up a flower silently, and Mahākāśyapa smiling as he understood.\n[…]\nResearch on meditation\n[…]\nO'Brien, Barbara. \"Jhanas or Dhyanas: A Progression of Buddhist Meditation.\" Learn Religions, 28 Sept. 2018."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zen",
        "situacao": "ok",
        "texto": "Zen é o nome japonês da tradição Ch'an, que surgiu na China por volta do século VII. O Zen costuma ser associado ao Budismo do ramo mahayana. Foi cultivado, inicialmente, na China onde recebeu influências taoistas e posteriormente migrou para o Japão, Vietnã e Coreia. A prática básica do zen japonês é o zazen (literalmente, \"meditar sentado\"), tipo de meditação contemplativa que visa a levar o pra\n[…]\nNo Zen japonês, há duas vertentes principais: soto e rinzai. Enquanto a escola soto dá maior ênfase à meditação silenciosa, a escola rinzai faz amplo uso dos koans, ou \"enigmas\". Atualmente, o Zen é uma das escolas budistas mais conhecidas e de maior expansão no Ocidente. Popularizadores do Zen incluem Reginald Horace Blyth, D. T.\n[…]\nComo todas as escolas budistas, o zen remete as suas raízes ao budismo indiano. A palavra \"zen\" vem do termo sânscrito dhyāna, que denota o estado de concentração típico da prática meditativa. Na China, esse termo foi transliterado como channa e logo reduzido à sua forma mais curta, ch'an (禪). Daí, para o coreano como sŏn (선) e, finalmente, para o japonês como zen.\n[…]\nA escola rinzai descende da escola chinesa do mestre Linji Yixuan (em japonês, Rinzai Gigen) e foi levada até ao Japão em 1191 por Myōan Eisai, tendo adotado o nome japonês de seu fundador. A sua prática caracteriza-se por uma busca ativa da iluminação, através de processos árduos como o trabalho com koans e a prática de artes marciais, além de meditação.\n[…]\nDe um modo geral, os ensinamentos do zen criticam o estudo de textos e o desejo por realizações mundanas, recomendando, antes, a dedicação à meditação (zazen) como forma de experimentar a mente e a realidade de maneira direta. No entanto, o zen não chega a ser uma doutrina quietista - o mestre chan chinês Baizhang (em japonês, Hyakujo, 720-814), por exemplo, dedicava-se ao trabalho braçal em seu monastério.\n[…]\nTextos sobre o Zen Budismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Suástica",
      "descricao": "Símbolo em forma de cruz com braços dobrados, sagrado no hinduísmo, no budismo e no jainismo, mais tarde apropriado pelo nazismo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Muito antes do nazismo, a suástica já era um símbolo sagrado na Índia. O que significa seu nome em sânscrito?",
    "resposta": "Bem-estar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Swastika"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swastika",
        "situacao": "ok",
        "texto": "The swastika ( SWOS-tih-kə, Sanskrit: [ˈsʋɐstikɐ], Sanskrit Devanagari: स्वस्तिक ; 卐 or 卍) is an ancient cross-cultural geometrical symbol that has been used in many cultures and religions of Eurasia, as well as a few in Africa and the Americas, for thousands of years. The swastika was and continues to be used as a symbol of divinity and spirituality in several religions, including Hinduism, Buddh\n[…]\nAccording to the 19th-century Sanskrit scholar Monier Monier-Williams, most scholars consider the swastika to have originally been a solar symbol. The sign implies well-being, something fortunate, lucky, or auspicious. It is alternatively spelled in contemporary texts as svastika, and other spellings were occasionally used in the 19th and early 20th century, such as suastika.\n[…]\nThe manufacture, distribution, or broadcasting of a swastika, with the intent to propagate Nazism, is a crime in Brazil as dictated by article 20, paragraph 1, of federal statute 7.716, passed in 1989. The penalty is a two- to five-year prison term and a fine.\n[…]\nIn 2010, the Anti-Defamation League (ADL) downgraded the swastika from its status as a Jewish hate symbol, saying \"We know that the swastika has, for some, lost its meaning as the primary symbol of Nazism and instead become a more generalised symbol of hate.\" The ADL notes on their website that the symbol is often used as \"shock graffiti\" by juveniles, rather than by individuals who hold white supremacist beliefs, but it is still a predominant symbol among American white supremacists (particularly as a tattoo design) and used with antisemitic intention.\n[…]\nOn 13 August 1920, speaking to his followers in the Hofbräuhaus am Platzl of Munich, Hitler said of the Nazi symbol: \"You will find this cross as a swastika as far as India and Japan, carved in the temple pillars. It is the swastika, which was once a sign of established communities of Aryan Culture.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Su%C3%A1stica",
        "situacao": "ok",
        "texto": "Suástica, cruz suástica ou cruz gamada (unicode: 卐 ou 卍) é um símbolo místico encontrado em muitas culturas e religiões em tempos diferentes, do povo indígena Hopi aos Astecas, dos Celtas aos budistas, dos Gregos aos hindus, sendo encontrados registros de 5 mil anos atrás. Alguns autores acreditam que a suástica tem um valor especial por ser encontrada em muitas culturas sem contatos umas com as o\n[…]\nJá entre os hindus de Bengala (e atual Bangladesh), é comum ver-se o nome da suástica ser aplicado a um desenho ligeiramente diferente, mas com a mesma significação da suástica comum, e da mesma forma usada como sinal auspicioso. Este símbolo se parece um tanto com a figura de um ser humano, e é um nome bastante comum entre os bengali, a tal ponto que uma importante revista de Calcutá se chama  Suástica. A figura ali usada, entretanto, não tem uso muito comum, na Índia.\n[…]\nO formato da suástica foi usado por alguns dos povos americanos. Foi encontrado em escavações junto ao rio Mississipi, como no vale do rio Ohio, e era usada por muitas tribos norte-americanas, com destaque pelos Navajos. Em cada tribo a suástica possuía uma significação distinta. Para o povo hopi representava os clãs nômades; para os Navajos, era o símbolo usado para representar um tronco girando - imagem sagrada que evocava uma lenda usada nos rituais curativos.\n[…]\nA lua representa o budismo. No budismo a Lua é um símbolo com importante significado, pois Buda frequentemente a ela se referia para esclarecer seus ensinamentos. Note também que a Lua tem formato de cruz gamada com pontas direcionadas para o sentido horário, representando o movimento da polaridade positiva (esquerda) sobre a negativa (direita).\n[…]\n\"§ 1º Fabricar, comercializar, distribuir ou veicular símbolos, emblemas, ornamentos, distintivos ou propaganda que utilizem a cruz suástica ou gamada, para fins de divulgação do nazismo.\n[…]\nCruz (símbolo)\n[…]\nCruz Pátea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Kamikaze",
      "descricao": "Nome japonês, que significa vento divino, dado aos tufões que dispersaram as frotas mongóis que tentaram invadir o Japão no século treze."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Kamikaze, vento divino em japonês, foi o nome dado aos tufões que destruíram, no século treze, as frotas de que invasores?",
    "resposta": "Mongóis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kamikaze_(typhoon)",
      "https://en.wikipedia.org/wiki/Mongol_invasions_of_Japan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kamikaze_(typhoon)",
        "situacao": "ok",
        "texto": "The kamikaze (Japanese: 神風, lit. 'divine wind') were winds or storms that are said to have saved Japan from two Mongol fleets under Kublai Khan. These fleets attacked Japan in 1274 and again in 1281. Due to the growth of Zen Buddhism among Samurai at the time, these were the first events where the typhoons were described as \"divine wind\" as much by their timing as by their force. Since Man'yōshū, \n[…]\nThe term \"kamikaze\" is the native Japanese kun'yomi reading of the characters, and the main reading of them that was used more throughout history was the on'yomi (Sinitic) \"shinpu\".\n[…]\nSeven years later, the Mongols returned. Unable to find any suitable landing beaches due to the walls, the fleet stayed afloat for months and depleted their supplies as they searched for an area to land. After months of being exposed to the elements, the fleet was destroyed by a great typhoon, which the Japanese called \"kamikaze\" (divine wind). The Mongols never attacked Japan again, and more than 70,000 men were said to have been captured.\n[…]\nIn popular Japanese myths at the time, the god Raijin was the god who turned the storms against the Mongols. Other variations say that the gods Fūjin, Ryūjin or Hachiman caused the destructive kamikaze.\n[…]\nThe name given to the storm, kamikaze, was later used during World War II as nationalist propaganda for suicide attacks by Japanese pilots. The metaphor meant that the pilots were to be the \"Divine Wind\" that would again sweep the enemy from the seas. This use of kamikaze has come to be the common meaning of the word in the English lexicon.\n[…]\nJapan's Kamikaze Winds, the Stuff of Legend, May Have Been Real"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mongol_invasions_of_Japan",
        "situacao": "ok",
        "texto": "Major military efforts were taken by Kublai Khan of the Yuan dynasty in 1274 and 1281 to conquer the Japanese archipelago after the submission of the Korean kingdom of Goryeo to vassaldom. Ultimately a failure, the invasion attempts are of macro-historical importance because they set a limit on Mongol expansion and rank as nation-defining events in the history of Japan.\n[…]\nThe invasions are referred to in many works of fiction and are the origin of the word kamikaze (神風  \"divine wind\"), first used to describe the typhoons that destroyed the Mongol invasion fleets in the 13th century. The term was later adopted in the 20th century to describe Japanese pilots who deliberately crashed their aircraft into enemy warships during the last years of World War II.\n[…]\nOn 15 August, a great typhoon, known in Japanese as kamikaze, struck the fleet at anchor from the west and devastated it. Sensing the oncoming typhoon, Korean and south Chinese mariners retreated and unsuccessfully docked in Imari Bay, where they were destroyed by the storm. Thousands of soldiers were left drifting on pieces of wood or washed ashore. The Japanese defenders killed all those they found except for the southern Chinese, who they felt had been coerced into joining the attack on Japan.\n[…]\nThe Zen Buddhism of Hōjō Tokimune and his Zen master Bukkō gained credibility beyond national boundaries, and the first mass followings of Zen teachings among samurai began to flourish. The failed invasions also mark the first use of the word kamikaze (\"divine wind\")."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kamikaze_%28tuf%C3%A3o%29",
        "situacao": "ok",
        "texto": "Os Kamikaze (神風, japonês para vento divino), foram duas ventanias ou tempestades que acredita-se terem salvado o Japão das tentativas de invasão por duas frotas mongóis sob o comando de Kublai Khan. Tais frotas atacaram o país em 1274 e novamente em 1281. Dada a disseminação do zen budismo entre os samurais daquele tempo, estes foram os primeiros eventos nos quais tufões foram descritos como \"vent\n[…]\nA partir da Man'yōshū, a palavra kamikaze tem sido usada como uma metáfora poética.\n[…]\nNa primeira invasão, os mongóis conquistaram com sucesso os assentamentos japoneses nas ilhas de Tsushima e Iki. Quando desembarcaram na baía de Hakata, no entanto, encontraram forte resistência dos exércitos dos clãs samurais e foram forçados a se retirar para suas bases na China. No meio da retirada, eles foram atingidos por um tufão. A maioria de seus navios afundou e muitos soldados morreram afogados.\n[…]\nSete anos depois, os mongóis retornaram. Incapaz de encontrar praias de desembarque adequadas devido às paredes, a frota permaneceu à tona por meses e esgotou seus suprimentos enquanto procurava uma área para pousar. Após meses de exposição às intempéries, a frota foi destruída por um grande tufão, que os japoneses chamavam de \"kamikaze\" (vento divino). Os mongóis nunca mais atacaram o Japão e mais de 70 000 homens teriam sido capturados.\n[…]\nNos mitos japoneses populares da época, o deus Raijin era o deus que virou as tempestades contra os mongóis. Outras variações dizem que os deuses Fūjin, Ryūjin ou Hachiman causaram o kamikaze destrutivo.\n[…]\nO nome dado à tempestade, kamikaze, foi mais tarde usado durante a Segunda Guerra Mundial como propaganda nacionalista para ataques suicidas de pilotos japoneses. A metáfora significava que os pilotos seriam o \"Vento Divino\" que novamente varreria o inimigo dos mares. Esse uso de kamikaze passou a ser o significado comum da palavra em inglês.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Ishtar",
      "descricao": "Deusa mesopotâmica do amor, da fertilidade e da guerra, equivalente acádia da suméria Inanna."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A deusa babilônica Ishtar e a grega Afrodite, ambas ligadas ao amor, eram associadas a que planeta?",
    "resposta": "Vênus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inanna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inanna",
        "situacao": "ok",
        "texto": "Inanna is the ancient Mesopotamian goddess of war, love, and sex. She is also associated with political power, divine law, sensuality, and procreation. Originally worshipped in Sumer, she was known by the Akkadians, Babylonians, and Assyrians as Ishtar. Her primary title is \"the Queen of Heaven\".\n[…]\nShe was the patron goddess of the Eanna temple at the city of Uruk, her early main religious center. In archaic Uruk, she was worshipped in three forms: morning Inanna (Inana-UD/hud), evening Inanna (Inanna sig), and princely Inanna (Inanna NUN), the former two reflecting the phases of her associated planet Venus. Her most prominent symbols include the lion and the eight-pointed star.\n[…]\nInanna/Ishtar's most common symbol was the eight-pointed star, though the exact number of points sometimes varies; six-pointed stars also occur frequently, but their symbolic meaning is unknown. The eight-pointed star seems to have originally borne a general association with the heavens, but, by the Old Babylonian Period (c. 1830 – c. 1531 BCE), it had come to be specifically associated with the planet Venus, with which Ishtar was identified.\n[…]\nInanna was associated with the planet Venus, which is named after her Roman equivalent. Several hymns praise Inanna in her role as the goddess or personification of the planet Venus. Theology professor Jeffrey Cooley has argued that, in many myths, Inanna's movements may correspond with the movements of Venus across the sky. In Inanna's Descent to the Underworld, Inanna, unlike any other deity, is able to descend into the netherworld and return to the heavens.\n[…]\nThe discontinuous movements of Venus relate to both mythology as well as Inanna's dual nature.\n[…]\nIn Mandaean cosmology, one of the names for Venus is ʿStira, which is derived from the name Ishtar."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inana",
        "situacao": "ok",
        "texto": "Inana ([ɪˈnɑːnə]; em sumério: 𒀭𒈹; romaniz.: Dinanna, também 𒀭𒊩𒌆𒀭𒈾 Dnin-an-na) é uma antiga deusa mesopotâmica associada ao amor, ao erotismo, à fecundidade e à fertilidade. Apesar de ser alvo de culto em todas as cidades sumérias, era especialmente devotada em Ur. Ela foi originalmente adorada na Suméria e mais tarde foi adorada pelos acadianos, babilônios e assírios sob o nome de Istar ([ˈɪʃtɑːr]\n[…]\nEla era conhecida como a \"Rainha do Céu\" e era a deusa padroeira do templo de Eana na cidade de Uruque, que era seu principal centro de culto. Ela estava associada ao planeta Vênus e seus símbolos mais importantes incluíam o leão e a estrela de oito pontas. Seu marido era o deus Dumuzi (mais tarde conhecido como Tamuz) e sua sucal (sukkal), ou assistente pessoal, era a deusa Ninsubur (que mais tarde se tornou a divindade masculina Papsucal).\n[…]\nEla era especialmente amada pelos assírios, que a elevaram para se tornar a divindade mais alta do panteão, ficando, até mesmo, acima do deus nacional Assur. Inana-Istar é mencionada na Bíblia Hebraica e ela influenciou bastante a deusa fenícia Astarte, que mais tarde influenciou o desenvolvimento da deusa grega Afrodite.\n[…]\nNo mito da criação hitita, Istar nasce depois que o deus Kumarbi derruba seu pai, Anu. Kumarabi morde os órgãos genitais de Anu e os engole, fazendo com que ele engravide da prole de Anu, incluindo Istar e seu irmão, o deus hitita da tempestade, Tessube. Esse relato mais tarde se tornou a base para a história grega da castração de Urano por seu filho Cronos, resultando no nascimento de Afrodite, descrita na Teogonia de Hesíodo.\n[…]\nIstar então proclamou Sargão como seu amante e permitiu que ele se tornasse o governante da Suméria e Acádia.\n[…]\nO dia 2 de janeiro é considerada a data de nascimento de Inana e é uma data tradicionalmente consagrada a esta deusa.\n[…]\nDeusa mãe",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Ahura Mazda",
      "descricao": "Deus supremo do zoroastrismo, a religião da Pérsia antiga."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nome de que deus supremo do zoroastrismo, a religião da Pérsia antiga, inspirou o de uma montadora japonesa de automóveis?",
    "resposta": "Ahura Mazda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mazda",
      "https://en.wikipedia.org/wiki/Ahura_Mazda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mazda",
        "situacao": "ok",
        "texto": "Mazda Motor Corporation (マツダ株式会社, Matsuda Kabushiki gaisha) is a Japanese multinational automotive manufacturer headquartered in Fuchū, Hiroshima, Japan. The company was founded on January 30, 1920, as Toyo Cork Kogyo Co., Ltd., a cork-making factory, by Jujiro Matsuda. The company then acquired Abemaki Tree Cork Company. It changed its name to Toyo Kogyo Co., Ltd. in 1927 and started producing ve\n[…]\nMazda comes from Ahura Mazda, the god of harmony, intelligence and wisdom from the earliest civilization in West Asia. Key members of Toyo Kogyo interpreted Mazda as a symbol of the beginning of the East and the West civilization, but also a symbol of the automotive civilization and culture.\"\n[…]\nAfter substantial successes by the Mazda RX-2 and Mazda RX-3, the Mazda RX-7 has won more IMSA races in its class than any other model of automobile, with its hundredth victory on September 2, 1990. Following that, the RX-7 won its class in the IMSA 24 Hours of Daytona race ten years in a row, starting in 1982. The RX-7 won the IMSA Grand Touring Under Two Liter (GTU) championship each year from 1980 through 1987, inclusive.\n[…]\nMazda maintained sponsorship of the Laguna Seca racing course in California from 2001 until February 2018, going so far as to use it for its own automotive testing purposes as well as the numerous racing events (including several Mazda-specific series) that it used to host, as well as for the 2003 launch of the Mazda RX-8. Since April 2018, the venue's primary corporate sponsor is WeatherTech.\n[…]\nSince 2000, Mazda has used the phrase \"Zoom-Zoom\" to describe what it calls the \"emotion of motion\" that it claims is inherent in its cars. Extremely successful and long-lasting (when compared to other automotive marketing taglines), the Zoom-Zoom campaign has now spread around the world from its initial use in North America.\n[…]\nList of Mazda model codes\n[…]\nList of Mazda vehicles"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ahura_Mazda",
        "situacao": "ok",
        "texto": "Ahura Mazda ( ə-HOOR-ə MAZ-də), also known as Ormazd and Horomazes, is the principal God and sky deity in Zoroastrianism. He is the first and most frequently invoked spirit in the Yasna. The literal meanings of the words Ahura and Mazda are \"lord\" and \"wisdom\", respectively.\n[…]\nAccording to Zoroastrian tradition, at the age of 30, Zoroaster received a revelation: while fetching water at dawn for a sacred ritual, he saw the shining figure of an Amesha Spenta, Vohu Manah, who led Zoroaster to the presence of Ahura Mazda, where he was taught the cardinal principles of the \"Good Religion\" later known as Zoroastrianism. As a result of this vision, Zoroaster felt that he was chosen to spread and preach the religion.\n[…]\nThe use of images of Ahura Mazda began in the western satraps of the Achaemenid Empire in the late 5th century BC. Under Artaxerxes II, the first literary reference, as well as a statue of Ahura Mazda, was built by a Persian governor of Lydia in 365 BC.\n[…]\nAll devotional acts in Zoroastrianism originating from the Sassanian period begin with homage to Ahura Mazda. The five Gāhs start with the declaration in Middle Persian that \"Ohrmazd is Lord\" and incorporate the Gathic verse \"Whom, Mazda hast thou appointed my protector\". Zoroastrian prayers are to be said in the presence of light, either in the form of fire or the sun. In the Iranian languages Yidgha and Munji, the sun is still called ormozd.\n[…]\nSome scholars (Kuiper. IIJ I, 1957; Zimmer. Münchner Studien 1984:187–215) believe that Ahura Mazda originates from *vouruna-miθra, or Vedic Varuna (and Mitra). According to William W. Malandra both Varuna (in Vedic period) and Ahura Mazda (in old Iranian religion) represented the same Indo-Iranian concept of a supreme \"wise, all-knowing lord\".\n[…]\nMazda"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mazda",
        "situacao": "ok",
        "texto": "A Mazda Motor Corporation  é uma empresa japonesa fabricante de veículos, com sede em Hiroshima.\n[…]\nO nome Mazda teve origem em Aúra-Masda, o deus zoroastra. De igual modo, é bastante parecido com a fonética do nome do fundador da companhia, Jujiro Matsuda, que a criou em 1920 sob a denominação Toyo Cork Kogyo Co., Ltd.\n[…]\nA fabrica de máquinas-ferramentas teve início em 1929, sendo pouco tempo depois (1931) seguido de um veículo de carga de três rodas, o Mazdago. O primeiro carro, o Mazda R360 Coupé, um veículo de passageiros de duas portas, surgiu em 1960, e o Mazda Carol de quatro portas veio ao mundo em 1962. No ano seguinte, a produção automóvel acumulada atingiu um milhão de unidades.\n[…]\nEm 1979 a Ford Motor Company adquiriu 25% das ações da Mazda e chegou a deter 34% em meados da década de 1990. Entre abril e setembro de 2015, a Ford vendeu os 2,1% das ações da Mazda lhe restavam da companhia japonesa, o que colocou termo ao processo gradual de desvinculação de capital iniciado após a crise financeira de 2008. Além de deter algumas ações, a Ford possui acordos de colaboração para a produção de alguns modelos.\n[…]\nA Mazda também integra Joints Ventures com outras montadoras, especialmente com a própria Ford, na AutoAlliance (EUA e Tailândia) e Changan Ford Mazda (China); com a Sollers JSC na Rússia, sob o nome de MNazda Sollers; e outras menores, como a Mazda Malaysia (Malásia) e a Mazda Motor Manufacturing (México).\n[…]\nMazda MPV\n[…]\nMazda Sentia\n[…]\nMazda Spiano\n[…]\nMazda Titan\n[…]\nMazda Tribute\n[…]\nMazda Verisa\n[…]\nMazda Xedos\n[…]\nMazda Xedos 6\n[…]\nMazda Clube Portugal\n[…]\nMazda Canada\n[…]\nMazda Peru\n[…]\nMazda Venezuela\n[…]\nMazda VIN decoder",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ashoka",
      "descricao": "Imperador da dinastia Máuria, que governou quase todo o subcontinente indiano no século três antes de Cristo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A roda azul no centro da bandeira da Índia reproduz um símbolo gravado nas colunas de que imperador da Antiguidade?",
    "resposta": "Ashoka",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ashoka_Chakra",
      "https://en.wikipedia.org/wiki/Flag_of_India"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ashoka_Chakra",
        "situacao": "ok",
        "texto": "The Ashoka Chakra (Transl: Ashoka's wheel) is an Indian symbol which is a depiction of the Dharmachakra. It is called so because it appears on a number of edicts of Ashoka, most prominent among which is the Lion Capital of Ashoka.\n[…]\nThe most visible use of the Ashoka Chakra today is at the centre of the Flag of India (adopted on 22 July 1947), where it is rendered in a navy blue colour on a white background, replacing the symbol of charkha (spinning wheel) of the pre-independence versions of the flag. It is also shown in the Ashoka Chakra medal, which is the highest award for gallantry in peacetime.\n[…]\nThese spokes are interpreted as symbolizing the fourteen ratnas (jewels) possessed by a Chakravarti, as well as the fourteen Gunasthana in Jain philosophy. In statue Ashoka hand points towards 5th-6th to indicate his own progression levels attributed to a Chakravarti.\n[…]\nThe Ashoka Chakra depicts the 24 principles that should be present in a human.\n[…]\nAshoka Chakra was included in the middle of the national flag of India. The chakra intends to show that there is life in movement and death in stagnation. Originally, the Indian flag was based on the Swaraj flag, a flag of the Indian National Congress adopted by Mahatma Gandhi after making significant modifications to the design proposed by Pingali Venkayya. This flag included charkha which was replaced with Ashoka Chakra in 1947 by Surayya Tyabji and Badruddin Tyabji"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flag_of_India",
        "situacao": "ok",
        "texto": "The national flag of India, colloquially called Tiraṅgā (the tricolour), is a horizontal rectangular tricolour flag, the colours being of India saffron, white and India green; with the Ashoka Chakra, a 24-spoke wheel, in navy blue at its centre. It was adopted in its present form during a meeting of the Constituent Assembly held on 22 July 1947, and it became the official flag of the Union of Indi\n[…]\nOn 14 July 1947, the committee recommended that the flag of the Indian National Congress be adopted as the National Flag of India with suitable modifications, so as to make it acceptable to all parties and communities. It was also resolved that the flag should not have any communal undertones. The spinning wheel of the Congress flag was replaced by the Ashoka Chakra from the Lion Capital of Ashoka.\n[…]\nAccording to the Flag code of India, the Indian flag has a width:height aspect ratio of 3:2. All three horizontal bands of the flag (saffron, white and green) are equally sized. The Ashoka Chakra has twenty-four evenly spaced spokes.\n[…]\nThe size of the Ashoka Chakra is not specified in the flag code, but in section 4.3.1 of \"IS1: Manufacturing standards for the Indian Flag\", there is a chart that describes specific sizes of the flag and the chakra (reproduced alongside).\n[…]\nA few days before India became independent on 15 August 1947, the specially constituted Constituent Assembly decided that the flag of India must be acceptable to all parties and communities. A modified version of the Swaraj flag was chosen; the tricolour remained the same saffron, white and green. However, the spinning wheel was replaced by the Ashoka Chakra representing the eternal wheel of law.\n[…]\nLargest Human Flag of India\n[…]\nState Emblem of India\n[…]\n\"Flag Code of India\" (PDF). Ministry of Home Affairs (India). Archived from the original (PDF) on 19 October 2017. Retrieved 26 July 2016.\n[…]\nIndia at Flags of the World"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7oca_Chacra",
        "situacao": "ok",
        "texto": "Açoca ou Asoca Chacra (Ashoka Chakra) é uma representação da roda do darma. A roda tem 24 raios. O Açoca Chacra tem sido amplamente inscrito em muitas relíquias do imperador máuria Açoca (r. 273–232), mais proeminente entre os quais estão o Capitel do Leão de Sarnath e Pilar de Açoca.\n[…]\nO mais visível uso do Açoca Chacra hoje está no centro da bandeira nacional da República da Índia (adotada in 22 de Julho de 1947), onde é representado com a cor azul-marinha num fundo branco, substituindo o símbolo do Chacra (roca de fiar) das versões pré-independentes da bandeira. Açoca Chacra pode também ser vista na base Capitel de Leão de Asoca, no qual foi adotado como Emblema Nacional da Índia.\n[…]\nO Açoca Chacra foi construído pelo imperador máuria Açoca em seu reinado. Chacra é uma palavra em sânscrito no qual também significa círculo ou processo que se repete. O processo significa que é o círculo do tempo, como o mundo muda com o tempo. O cavalo significa precisão e velocidade, enquanto o touro significa trabalho duro.\n[…]\nOs vinte e quatro raios na roda do Chacra representam vinte e quatro virtudes:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Byodo-in",
      "descricao": "Templo budista do século onze em Uji, perto de Quioto, famoso pelo Pavilhão da Fênix."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Pavilhão da Fênix, do templo budista Byodo-in, perto de Quioto, está estampado em que moeda japonesa?",
    "resposta": "Moeda de dez ienes",
    "fonte": [
      "https://en.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in",
      "https://en.wikipedia.org/wiki/10_yen_coin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in",
        "situacao": "ok",
        "texto": "Byōdō-in (平等院, \"Temple of Equality\") is a Buddhist temple in the city of Uji in Kyoto Prefecture, Japan, built in the late Heian period. It is jointly a temple of the Jōdo-shū (Pure Land) and Tendai-shū (Heavenly Level) sects.\n[…]\nThe Byodoin Temple was designated as a UNESCO World Heritage as one of the Historic Monuments of Ancient Kyoto in 1994. Large scale renovation on the garden, the canopy of Amida Buddha statue and the overall outlook of the Phoenix Hall continues in the Heisei Period (1989–2019) until today.\n[…]\nAs the former temple museum which opened in 1965 had become outdated, an innovative third-generation museum was opened in 2001, which is named the Hoshokan Museum. This museum achieved a significantly improved storage and display environment for national treasures from the Byodoin Temple, including the Temple Bell, 26 statues of the Praying Bodhisattva on Clouds and a pair of Phoenix from the rooftop of Phoenix Hall. It is the first comprehensive museum run by a religious organisation.\n[…]\nA tea salon to try authentic Uji green tea in the precinct of Byodoin Temple. Tea leaves harvested in the tea fields of Uji City or neighbouring farms are used. Certified Japanese Tea Instructors will provide tea to visitors with the finest care and knowledge. Open Monday to Sunday but closed on Tuesday, from 10:00 to 16:30. Last order is at 16:00.\n[…]\nThe Phoenix Hall, the great statue of Amida inside it, and several other items at Byōdō-in are national treasures.\n[…]\nFukuyama Toshio, Heian Temples: Byodo-in and Chuson-ji, Heibonsha Survey of Japanese Art (New York: Weatherhill, 1976). ISBN 9780834810235\n[…]\nJapan National Tourism Organization: Byodo-in Temple\n[…]\nByodo-in - World History Encyclopedia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/10_yen_coin",
        "situacao": "ok",
        "texto": "The 10 yen coin (十円硬貨, Jū-en kōka) is one denomination of the Japanese yen.\n[…]\nThe obverse of the coin depicts the Phoenix Hall of Byōdō-in, a Buddhist temple in Uji, Kyoto prefecture, with the kanji for \"Japan\" and \"Ten Yen\". The reverse shows the numerals \"10\" and the date of issue in kanji surrounded by bay laurel leaves.\n[…]\nTen yen coins minted between 1951 and 1958 have reeded edges and are nicknamed Giza 10 (ギザ10, Giza Ju), meaning “jagged 10 yen coin” in Japanese. The design which is used today features Phoenix Hall of Byōdō-in on the obverse, and Bay laurel leaves on the reverse. The design remains essentially the same other than the reeds being dropped in 1959 which gave the coins a smooth edge. Slight modifications were also made in the latter half of 1986 regarding the design of Byōdō-in.\n[…]\nModifications to the ten yen coin were made in 1986 which show slight differences in the appearance of Byodoin Phoenix Hall. Those made in the latter half of 1986 with these temple changes were reported to be worth over $1,000 (USD) by TV Tokyo in 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in",
        "situacao": "ok",
        "texto": "O Byōdō-in (平等院) é um templo budista na cidade de Uji, Quioto, Japão. Ele é um templo das seitas Terra Pura (Jōdo-shū) e Tendai-shū.\n[…]\nA construção principal no Byōdō-in, o Salão da Fênix, consiste de um salão central flanqueado por dois corredores em ambos os lados do salão central, e um corredor cumprido. O salão central abriga uma imagem de Amida Buda. O teto do salão mostra estátuas de a fênix chinesa, chamada de hōō em japonês.\n[…]\nO museu Byōdō-in guarda e exige a maioria dos tesouros nacionais no templo, incluindo 52 Bodisatvas de madeira, o sino do templo, a ponta sul da Fênix e outros itens com importância histórica.\n[…]\nO Japão comemora sua longevidade e importância cultural mostrando sua imagem na moeda de 10 ienes, e a nota de 10 000 ienes exibe a imagem da fênix. Em dezembro de 1994, a UNESCO listou a construção como um patrimônio mundial que faz parte dos \"Monumentos Históricos da Antiga Quioto\". O Salão da Fênix, a grande estátua de Amida dentro dele e alguns outros itens no Byōdō-in são tesouros nacionais.\n[…]\nOs correios japoneses emitiram três selos definitivos mostrando o salão da fênix, cada um com pré-pagamento da taxa postal para carta estrangeira em superfície: 24 ienes - 1950, 24 ienes - 1957 e 30 ienes - 1959. Os selos foram produzidos por um método custo de gravação, mostrando a apreciação pelo salão.\n[…]\nDesde 2012 e até março de 2014, o Salão da Fênix esteve fechado para reforma. O acesso ao Salão não era permitido, ele estava completamente coberto por andaimes, incluindo o telhado, não estando visível. O jardim e volta e o museu estavam abertos a um preço reduzido de 300 ienes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Aryabhata",
      "descricao": "Matemático e astrônomo indiano do século cinco, autor do tratado Aryabhatiya."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O primeiro satélite artificial da Índia, lançado em 1975, recebeu o nome de que matemático e astrônomo indiano do século cinco?",
    "resposta": "Aryabhata",
    "distratores": [
      "Brahmagupta",
      "Kalidasa",
      "Chanakya"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aryabhata_(satellite)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aryabhata_(satellite)",
        "situacao": "ok",
        "texto": "Aryabhata was India's first satellite, named after the astronomer of the same name. It was launched on 19 April 1975 from Kapustin Yar, a Soviet rocket launch and development site in Astrakhan Oblast using a Kosmos-3M launch vehicle. It was built by ISRO and launched by the Soviet Union as a part of the Soviet Interkosmos programme which provided access to space for friendly states.\n[…]\nIt was launched on 19 April 1975 from Kapustin Yar, a Russian rocket launch and development site in Astrakhan Oblast, using a Kosmos-3M launch vehicle. It was built by the Indian Space Research Organisation (ISRO). The launch was based on an agreement between India and the Soviet Union directed by UR Rao and signed in 1972. The USSR agreed to launch various Indian satellites in exchange for using Indian ports for tracking ships and launching vessels.\n[…]\nOn 19 April 1975, the satellite's 96.46-minute orbit had an apogee of 619 kilometres (385 mi) and a perigee of 563 kilometres (350 mi), at an inclination of 50.7 degrees. It was built to conduct experiments in X-ray astronomy, aeronomics, and solar physics. The spacecraft was a 26-sided polyhedron 1.4 metres (4.6 ft) in diameter. All faces (except the top and bottom) were covered with solar cells supported by a Ni-Cd battery.\n[…]\nIt was named after the 6th-century astronomer and mathematician Aryabhata.\n[…]\nThe satellite's image appeared on the reverse of Indian two-rupee banknotes between 1976 and 1997 (Pick catalog).\n[…]\nTimeline of artificial satellites and space probes\n[…]\nAryabhata-1 Official ISRO Website Archived 15 August 2018 at the Wayback Machine\n[…]\nAstronautix Page\n[…]\nIndia in Space Page"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aryabhata_%28sat%C3%A9lite%29",
        "situacao": "ok",
        "texto": "O Aryabhata foi o primeiro satélite artificial fabricado pela Índia. O nome vem do matemático e astrônomo indiano Aryabhata (476-550). Foi lançado pela antiga União Soviética por meio de um foguete Kosmos-3M (Kosmos 11K65M) a partir de Kapustin Yar em 19 de abril de 1975. O satélite foi fabricado pela Agência Indiana de Pesquisa Espacial (ISRO).\n[…]\nAs operações científicas do satélite consistiam em experimentos sobre astronomia de raios-X, o estudo das camadas altas da atmosfera terrestre e sobre física solar. O satélite tinha forma de polígono de 26 faces, cobertas por painéis solares, exceto a face inferior para a superior; a massa total do corpo era de 360 ​​kg. Após quatro dias em órbita, uma falha de energia inutilizou o satélite para prosseguir com os experimentos, e os cinco dias de estar em órbita deixaram de receber sinais dele.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Xuanzang",
      "descricao": "Monge budista chinês do século sete que viajou à Índia em busca de textos sagrados."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A longa viagem do monge chinês Xuanzang à Índia, no século sete, inspirou que romance clássico estrelado pelo Rei Macaco?",
    "resposta": "Jornada ao Oeste",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xuanzang",
      "https://en.wikipedia.org/wiki/Journey_to_the_West"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xuanzang",
        "situacao": "ok",
        "texto": "Xuanzang (Chinese: 玄奘; Wade–Giles: Hsüen Tsang; [ɕɥɛ̌n.tsâŋ]; 6 April 602 – 5 February 664), born Chen Hui or Chen Yi (陳褘 / 陳禕), also known by his Sanskrit Dharma name Mokṣadeva, was a 7th-century Chinese Buddhist monk, scholar, traveller, and translator. He is known for the epoch-making contributions to Chinese Buddhism, the travelogue of his journey to the Indian subcontinent in 629–645, his eff\n[…]\nXuanzang (Chinese: 玄奘; pinyin: Xuánzàng; Cantonese Yale: Yùhnjohng; Wade–Giles: Hsüan-tsang; Japanese pronunciation: Genjō; Korean pronunciation: Hyeonjang; Vietnamese: Huyền Trang, McCune–Reischauer: Hyŏnjang.)\n[…]\nTripiṭaka Master Xuanzang (Chinese: 玄奘三藏; pinyin: Xuánzàng Sānzàng; Cantonese Yale: Yùhnjohng Sāamjohng; Wade–Giles: Hsüan-tsang San-tsang; Japanese pronunciation: Genjō-sanzō; Korean pronunciation: Hyeonjang-samjang; Vietnamese: Huyền Trang Tam Tạng, McCune–Reischauer: Hyŏnjang-samjang.)\n[…]\nGreat Master Xuanzang (traditional Chinese: 玄奘大師; simplified Chinese: 玄奘大师; pinyin: Xuánzàng Dàshī; Cantonese Yale: Yùhnjohng Daaihsī; Wade–Giles: Hsüan-tsang Ta-shih; Japanese pronunciation: Genjō-daishi; Korean pronunciation: Hyeonjang-daesa; Vietnamese: Huyền Trang Đại Sư, McCune–Reischauer: Hyŏnjang-taesa.)\n[…]\nXuanzang started his pilgrimage to India in either 627 or 629 CE, according to two East Asian versions. The 627 CE version is found in Guang hongming ji from Daoxun and is also in Japanese and Korean texts. The 629 CE is found in Chinese and western versions. This confusion, though merely of two years, is of significance to western history.\n[…]\nXuanzang's journey along the Silk Road, and the legends that grew up around it, inspired the Ming novel Journey to the West, one of the great classics of Chinese literature. The fictional counterpart Tang Sanzang is the reincarnation of the Golden Cicada, a disciple of Gautama Buddha, and is protected on his journey by four powerful disciples."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Journey_to_the_West",
        "situacao": "ok",
        "texto": "Journey to the West (traditional Chinese: 西遊記; simplified Chinese: 西游记; pinyin: Xīyóujì) is a Chinese novel published in the 16th century during the Ming dynasty and attributed to Wu Cheng'en. It is regarded as one of the great Chinese novels, and has been described as arguably the most popular literary work in East Asia. It was widely known in English-speaking countries through the British schola\n[…]\nThe novel is a fictionalized and fantastic account of the pilgrimage of the Chinese Buddhist monk Xuanzang, who went on a 19-year journey to India in the 7th century AD to seek out and collect Buddhist scriptures (sūtras). The novel retains the broad outline of Xuanzang's own account, Records of the Western Regions, but embellishes it with fantasy elements from folk tales and the author's invention.\n[…]\nThe modern 100-chapter form of Journey to the West dates from the 16th century. Embellished stories based on Xuanzang's journey to India had circulated in China through oral storytelling for centuries. They appeared in book form as early as the Southern Song dynasty (1127–1279). The Yongle Encyclopedia, completed in 1408, contains excerpts of a version of the story written in colloquial Chinese. The earliest surviving edition of Journey to the West was published in 1592 in Nanjing.\n[…]\nAlthough Journey to the West is a work of fantasy, it is based on the actual journey of the Chinese monk Xuanzang (602–664), who traveled to India in the 7th century in order to seek out Buddhist scriptures and bring them back to China. Xuanzang was a monk at Jingtu Temple in the imperial capital Chang'an (present-day Xi'an) during the late Sui dynasty and early Tang dynasty. He left Chang'an in 629, in defiance of Emperor Taizong of Tang's ban on travel.\n[…]\nJourney to the West from Xahlee (Simplified Chinese)\n[…]\nJourney to the West 西遊記 Chinese text with embedded Chinese-English dictionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xuanzang",
        "situacao": "ok",
        "texto": "Xuanzang (ou Hsuan-tsang) (602 - 664) nascido Chen Hui ou Chen Yi (陳褘 /陳禕), também conhecido pelo seu nome sânscrito Dharma Mokṣadeva, foi um monge budista chinês do século VII, estudioso, viajante e tradutor. Ele é conhecido pelas contribuições marcantes para o budismo chinês, o relato de viagem de sua jornada ao subcontinente indiano em 629-645, seus esforços para trazer pelo menos 657 textos in\n[…]\nAdotando o nome monástico Xuanzang, ele foi ordenado monge em 622, aos vinte anos. As inúmeras contradições e discrepâncias nas traduções chinesas da época levaram Xuanzang a decidir ir para a Índia e estudar no berço do budismo. Ele sabia da visita de Faxian à Índia e, como ele, buscou textos originais em sânscrito não traduzidos da Índia para ajudar a resolver algumas dessas questões.\n[…]\nMais tarde, ele viajou por toda a China em busca de livros sagrados do budismo. Por fim, ele chegou a Chang'an, então sob o governo pacífico do imperador Taizong de Tang, onde Xuanzang desenvolveu o desejo de visitar a Índia. Ele sabia sobre a visita do monge Faxian à Índia e, como ele, estava preocupado com a natureza incompleta e mal interpretada dos textos budistas que haviam chegado à China. Ele também estava preocupado com as teorias budistas concorrentes em traduções chinesas variantes.\n[…]\nAos 27 anos, ele começou sua jornada para a Índia. Ele desafiou a proibição de sua nação de viajar para o exterior, passando por cidades da Ásia Central, como Khotan, e reinos budistas, até a Índia. Ele visitou, entre outros lugares, a famosa Universidade Nalanda, na atual Bihar, onde estudou com o monge Śīlabhadra. Xuanzang partiu da Índia com vários textos sânscritos em uma caravana de vinte cavalos de carga.\n[…]\nSeu texto, por sua vez, forneceu a inspiração para o romance Jornada para o Oeste, escrito por Wu Cheng'en durante a dinastia Ming, cerca de nove séculos após a morte de Xuanzang.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Xerxes primeiro",
      "descricao": "Rei persa aquemênida do século cinco antes de Cristo, filho de Dario primeiro, que invadiu a Grécia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo Heródoto, por que o rei persa Xerxes mandou chicotear as águas do estreito do Helesponto?",
    "resposta": "Uma tempestade destruiu suas pontes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xerxes_I",
      "https://en.wikipedia.org/wiki/Dardanelles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xerxes_I",
        "situacao": "ok",
        "texto": "Xerxes I ( ZURK-seez; from Old Iranian Xšayār̥šā, commonly known as Xerxes the Great; c. 518 BC – 465 BC) was a Persian ruler who reigned as the fourth King of Kings of the Achaemenid Empire, reigning from 486 BC until his assassination in 465 BC. He was the son of Darius the Great and Atossa.\n[…]\nAfter Thermopylae, Athens was captured. Most of the Athenians had abandoned the city and fled to the island of Salamis before Xerxes arrived. A small group attempted to defend the Athenian Acropolis, but they were defeated. Xerxes ordered the Destruction of Athens and burnt the city, leaving an archaeologically attested destruction layer, known as the Perserschutt. The Persians thus gained control of all of mainland Greece to the north of the Isthmus of Corinth.\n[…]\nHerodotus's Histories, written later in the fifth century BC, centre on the Persian Wars, with Xerxes as a major figure. Some of Herodotus's information is spurious. Pierre Briant has accused him of presenting a stereotyped and biased portrayal of the Persians. Richard Stoneman regards his portrayal of Xerxes as nuanced and tragic, compared to the vilification that he suffered at the hands of the Macedonian king Alexander the Great (r. 336–323 BC).\n[…]\nThe historical novel Xerxes of de Hoogmoed (1919) by Dutch writer Louis Couperus describes the Persian wars from the perspective of Xerxes. Though the account is fictionalised, Couperus nevertheless based himself on an extensive study of Herodotus. The English translation Arrogance: The Conquests of Xerxes by Frederick H. Martens appeared in 1930.\n[…]\nThe Sixth Book, Entitled Erato in History of Herodotus.\n[…]\nThe Seventh Book, Entitled Polymnia in History of Herodotus.\n[…]\nMedia related to Xerxes I at Wikimedia Commons\n[…]\n\"Xerxes\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dardanelles",
        "situacao": "ok",
        "texto": "The Dardanelles ( DAR-də-NELZ), also known as the Strait of Gallipoli (after the Gallipoli peninsula), is a narrow, natural strait and internationally significant waterway in northwestern Turkey that forms part of the continental boundary between Asia and Europe and separates Asian Turkey from European Turkey. Together with the Bosporus, the Dardanelles forms the Turkish Straits.\n[…]\nThe ancient city of Troy was located near the western entrance of the strait. The strait's Asiatic shore was the focus of the Trojan War. Troy was able to control the marine traffic entering this vital waterway. The Persian army of Xerxes I, and, later the Macedonian army of Alexander the Great, crossed the Dardanelles in opposite directions to invade each other's lands, in 480 BC and 334 BC respectively.\n[…]\nHerodotus says that, circa 482 BC, Xerxes I had two pontoon bridges built across the width of the Hellespont at Abydos, so his huge army could cross from Persia into Greece. This crossing was named by Aeschylus, in his tragedy The Persians, as the cause of divine intervention against Xerxes. According to Herodotus, both bridges were destroyed by a storm, and Xerxes had those responsible for building the bridges beheaded.\n[…]\nXerxes is said to have thrown fetters into the strait, given it 300 lashes with multiple whips and branded it with red-hot irons as the soldiers shouted at the water. Herodotus comments that this was a \"highly presumptuous way to address the Hellespont\" but in no way atypical of Xerxes. Harpalus the engineer is said to have helped the invading armies to cross by lashing the ships together with their bows facing the current and adding two anchors to each ship."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xerxes_I",
        "situacao": "ok",
        "texto": "Xerxes I (em persa: خشایارشا, pronunciado \"Kshaiarsha\"; 519 a.C. – 465 a.C.) foi um xá aquemênida que governou de 486 a.C. até a data do seu assassinato em 465 a.C. Era filho de Dario I e neto de Histaspes e de Ciro, o Grande. Seu nome, Xerxes, é uma transliteração para o grego de seu nome persa depois de sua ascensão, Jshāyār Shah, que significa \"governante de heróis\".\n[…]\nXerxes herdou o trono por designação do pai, sendo coroado apesar de não ser o primogênito. Continuou a guerra contra os gregos, conhecida como Guerras Médicas, como forma de vingança, pois seu pai havia perdido a Batalha de Maratona em 490 a.C.\n[…]\nXerxes mandou construir um canal que atravessava a península de Atos, o que facilitou a passagem da frota. Após derrotar o exército de Leônidas I, vencendo a Batalha das Termópilas, que teve como palco o desfiladeiro de mesmo nome, Xerxes saqueou a Ática e, ao tomar Atenas, arrasou os santuários da Acrópole.\n[…]\nSua frota foi destruída na Salamina por Temístocles, em consequência dos graves erros táticos que cometeu, retornando à Pérsia. Ele nunca chegou a se recuperar dessa derrota e em seguida abandonou as ambições militares. Mais tarde morreria assassinado por seu ministro Artabano, em 465 a.C.\n[…]\nNos últimos anos de reinado, Xerxes dedicou-se à construção de palácios e monumentos que contribuíram para o embelezamento de Persépolis.\n[…]\nArtapano e o eunuco Aspamitres, conselheiros de Xerxes, o assassinaram, e convenceram Artaxerxes I de que Dario, seu irmão, havia assassinado o próprio pai; Dario foi levado ao palácio de Artaxerxes e, mesmo negando o crime, foi executado.\n[…]\nNa paródia Meet the Spartans, Ken Davitian é Xerxes.\n[…]\nEm Uma noite com o Rei, de 2006, Xerxes é vivido pelo ator Luke Goss.\n[…]\nXerxes foi interpretado por Carlo Porto na série A Rainha da Pérsia, da RecordTV.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Biblioteca de Assurbanipal",
      "descricao": "Coleção de milhares de tabuletas cuneiformes reunida pelo rei assírio Assurbanipal no século sete antes de Cristo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando Nínive foi saqueada e incendiada, em 612 antes de Cristo, por que tantas tabuletas da biblioteca de Assurbanipal resistiram?",
    "resposta": "O fogo cozeu a argila",
    "fonte": [
      "https://en.wikipedia.org/wiki/Library_of_Ashurbanipal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Library_of_Ashurbanipal",
        "situacao": "ok",
        "texto": "The Royal Library of Ashurbanipal, named after Ashurbanipal, the last great king of the Assyrian Empire, is a collection of more than 30,000 clay tablets and fragments containing texts of all kinds and in various languages from the 7th century BCE. Among its holdings was the famous Epic of Gilgamesh.\n[…]\nThe original library documents, however, which would have included leather scrolls, wax boards, and possibly papyri, contained perhaps a much broader spectrum of knowledge than that known from the surviving clay-tablet cuneiform texts. A large share of Ashurbanipal's libraries consisted of writing-boards and not clay tablets.\n[…]\nCreated in collaboration with the University of Mosul and funded by the Townley group, the British Museum has been compiling a catalogue record of artifacts from Ashurbanipal's library since 2002. The goal is to document the library in as much detail as possible in texts and images including sign-transliterations, hand-drawn copies, translations, and high-quality digital images.\n[…]\nFrom 2020-2023 a collaborative project, Reading the Library of Ashurbanipal: A multi-sectional Analysis of Assyriology's Foundational Corpus, was created between the British Museum and LMU Munich explored the library's initial origins. The goal of the project was to examine the scribal notes added to the end of the tablets (known as \"colophons\") to understand how and why the collection was produced. The project was led by Dr. Jon Taylor and Professor Enrique Jiménez.\n[…]\nGreat libraries of the ancient world\n[…]\nAshurbanipal\n[…]\nFincke, Jeanette (2004). \"The British Museum's Ashurbanipal Library Project\". Iraq, 66, Ninevah. 66: 55–60. doi:10.1017/S0021088900001637. S2CID 190727609.\n[…]\nMedia related to Library of Ashurbanipal at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biblioteca_de_N%C3%ADnive",
        "situacao": "ok",
        "texto": "A Biblioteca de Nínive, também conhecida como Biblioteca de Assurbanípal, é uma coleção de milhares de placas em argila contendo textos em escrita cuneiforme sobre vários assuntos, a partir do 7º século a.C. Dentro desse acervo está a famosa Epopeia de Gilgamés e fragmentos do Enuma Elis. Tal biblioteca é considerada a primeira da história, foi encontrada no século XIX por arqueólogos ingleses e f\n[…]\nA mais famosa obra literária da Mesopotâmia é a Epopeia de Gilgamés. Gilgamés é uma figura semilendária, rei da cidade-estado de Uruque, por volta de 2 700 a.C., e o que se conhece a respeito deve-se à epopeia construída em torno de seu nome, encontrada em doze plaquetas de argila que constam do acervo da Biblioteca de Nínive.\n[…]\nTais livros foram trazidos ao seu palácio em Nínive, onde ele os estudou, além de acrescentar cópias bilíngües em argila, na escritura cuneiforme, e que foram arquivadas. Assurbanípal era conhecido por ser um estudioso, mas também era cruel com seus inimigos, e foi capaz de usar ameaças para obter materiais literários para a Babilônia.\n[…]\nNínive foi destruída em 612 a.C., por uma coligação de babilônios, citas e medos, um antigo povo iraniano. Acredita-se, que durante a queima do palácio, um grande incêndio deve ter devastado a biblioteca, fazendo com que os tabletes de argila cuneiforme se tornassem parcialmente cozidos. Paradoxalmente, este evento potencialmente destrutivo ajudou a preservar as placas.\n[…]\nAssim como textos foram escritos em argila, alguns podem ter sido inscritos em placas de cera, os quais, devido à sua natureza biológica, foram perdidos.\n[…]\nEm 1853, o estudioso assírio Hormuzd Rassam (1826-1910), colaborador de Layard continuou as escavações de Nínive e descobriu o restante da Biblioteca; entre suas descobertas consideram-se as tábuas em argila com a Epopeia de Gilgamés, que faziam parte do acervo da Biblioteca de Assurbanípal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Fogos de artifício",
      "descricao": "Artefatos pirotécnicos de origem chinesa que produzem estampidos, luzes e cores."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na China antiga, bambus estourando no fogo e depois fogos de artifício eram usados em festas como o ano-novo. Com que objetivo?",
    "resposta": "Espantar maus espíritos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fireworks",
      "https://en.wikipedia.org/wiki/Firecracker"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fireworks",
        "situacao": "ok",
        "texto": "Fireworks are low explosive pyrotechnic devices used for aesthetic and entertainment purposes. They are most commonly used in fireworks displays (also called a fireworks show or pyrotechnics), combining a large number of devices in an outdoor setting. Such displays are the focal point of many cultural and religious celebrations, though mismanagement can lead to fireworks accidents.\n[…]\nFireworks were originally invented in China. China remains the largest manufacturer and exporter of fireworks in the world.\n[…]\nThe earliest fireworks came from China during the Song dynasty (960–1279). Fireworks were used to accompany many festivities. In China, pyrotechnicians were respected for their knowledge of complex techniques in creating fireworks and mounting firework displays.\n[…]\nFireworks were produced in Europe by the 14th century, becoming popular by the 17th century. Lev Izmailov, ambassador of Peter the Great, once reported from China: \"They make such fireworks that no one in Europe has ever seen.\" In 1758, the Jesuit missionary Pierre Nicolas le Chéron d'Incarville, living in Beijing, wrote about the methods and composition of Chinese fireworks to the Paris Academy of Sciences, which published the account five years later.\n[…]\nHalloween Happening fireworks, Derry\n[…]\nPlimpton, George (1984). Fireworks: A History and Celebration. Doubleday. ISBN 0385154143.\n[…]\nRussell, Michael S (2008). The chemistry of fireworks. Royal Society of Chemistry, Great Britain. ISBN 9780854041275.\n[…]\nShimizu, Takeo (1996). Fireworks: The Art, Science, and Technique. Pyrotechnica Publications. ISBN 978-0929388052.\n[…]\nWerrett, Simon (2010). Fireworks: Pyrotechnic Arts and Sciences in European History. University of Chicago Press. ISBN 978-0226893778.\n[…]\nNOVA Online Kaboom! with pyrotechnics, anatomy of fireworks, etc\n[…]\nCanadian Fireworks Association ACP\n[…]\nScientific American article, \"Firework Formula\", 16-July-1881, pp. 42"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Firecracker",
        "situacao": "ok",
        "texto": "A firecracker (cracker, noise maker, banger) is a small explosive device primarily designed to produce a large amount of noise, especially in the form of a loud bang, usually for celebration or entertainment; any visual effect is incidental to this goal. They have fuses, and are wrapped in a heavy paper casing to contain the explosive compound. Firecrackers, along with fireworks, originated in Chi\n[…]\nThe government only allows fireworks for public events, and some authorised events held by businesses and other groups with a permit.\n[…]\nOnly rocket-type fireworks and small firecrackers are currently allowed in Sweden. The ban of firecrackers was effectuated by the EU Parliament and Swedish government effective 1 December 2001, but in 2006 the EU Parliament changed the laws, allowing smaller types of firecrackers. By 2008, the law had to be in effect in all EU member countries, including Sweden.\n[…]\nIn 1997, firecrackers became illegal, but most other consumer fireworks are legal.\n[…]\nIn 2007, New York City lifted its decade-old ban on firecrackers, allowing a display of 300,000 firecrackers to be set off in Chinatown's Chatham Square. Under the supervision of the fire and police departments, Los Angeles regularly lights firecrackers every New Year's Eve, mostly at temples and the shrines of benevolent associations. The San Francisco Chinese New Year Parade, the largest outside China, is accompanied by numerous firecrackers, both officially sanctioned and illicit.\n[…]\nIn 1994, the Government of Vietnam decided to ban firecrackers nationwide. Only fireworks displays produced and performed by the government are permitted.\n[…]\nSalute (pyrotechnics) – Firework designed to make a loud bang\n[…]\nSuperstring (fireworks)\n[…]\nCherry bomb  – Small spherical firework\n[…]\nThe late Dennis Manochio Senior world's largest 4th of July Americana and fireworks collector! Historian for the American Pyrotechnics Association"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fogo_de_artif%C3%ADcio",
        "situacao": "ok",
        "texto": "O termo fogo de artifício (grafia anterior ao AO 1990: fogo-de-artifício) designa explosivos de efeito pirotécnico ou sonoro feitos para fins de entretenimento, efeitos estéticos ou visuais. Geralmente são utilizados em festividades, eventos, celebrações ou para efeitos especiais e visuais em apresentações, concertos, peças de teatro ou afins.\n[…]\nFogos de artifício são utilizados nas mais diversas ocasiões, principalmente em ocasiões festivas, feriados e festas religiosas. Eles também podem ter diversos tipos, formatos e efeitos diferentes: os mais comuns são os fogos de estampido e fogos de efeitos visuais que são divididos em diversos tipos (bombas, foguetes, rojões, fontes, etc), classificações (tipos, efeitos e categorias) e níveis de restrição (leis, regulamentos, licenças para soltá-los, etc.).\n[…]\nFogos de artifício são constantemente utilizados em festas populares, feriados, eventos sociais, esportivos e religiosos. O feriado mais típico para a utilização de fogos de artifício no mundo é o Ano Novo, seguido do Ano Novo Lunar e do Dia da Independência dos Estados Unidos onde somente em 2019, os estadunidenses gastaram cerca de US$ 1.3 bilhões de dólares com pirotecnia.\n[…]\nMenores de idade e crianças não devem brincar com fogos de artifício com exceção daqueles destinados e classificados para a sua idade com a supervisão de um adulto responsável. Lembre-se de ler sempre as instruções de segurança fornecidas pelo fabricante, geralmente elas estão presentes na embalagem do produto. Caso algum fogo de artifício falhe, não tente reutiliza-lo, molhe-o e descarte depois de um tempo seguro de no mínimo 10 minutos.\n[…]\n2009 - Incêndio causado por fogos de artifício durante as celebrações do ano-novo chinês destrói um prédio da CCTV, emissora estatal chinesa em Pequim, na China\n[…]\nRojões",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Código de Hamurábi",
      "descricao": "Código de leis babilônico do século dezoito antes de Cristo, gravado numa estela de basalto."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O princípio do olho por olho, dente por dente, presente no Código de Hamurábi, é conhecido por que nome?",
    "resposta": "Lei de talião",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eye_for_an_eye",
      "https://pt.wikipedia.org/wiki/Lei_de_tali%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eye_for_an_eye",
        "situacao": "ok",
        "texto": "\"An eye for an eye\" (Biblical Hebrew: עַיִן תַּחַת עַיִן, ʿayin taḥaṯ ʿayin) is a commandment found in the Book of Exodus 21:23–27 expressing the principle of reciprocal justice measure for measure. The earliest known use of the principle appears in the Code of Hammurabi, which predates the writing of the Hebrew Bible.\n[…]\nIn the legal Code of Hammurabi, the principle of exact reciprocity is very clearly used. For example, if a person caused the death of another person, the killer would be put to death.\n[…]\nIn Exodus 21, as in the Code of Hammurabi, the concept of reciprocal justice seemingly applies to social equals; the statement of reciprocal justice \"life for life, eye for eye, tooth for tooth, hand for hand, foot for foot, burn for burn, wound for wound, stripe for stripe\" is followed by an example of a different law: if a slave-owner blinds the eye or knocks out the tooth of a slave, the slave is freed but the owner pays no other consequence.\n[…]\nThe Quran (Q5:45) mentions the \"eye for an eye\" concept as being ordained for the Children of Israel. The principle of lex talionis in Islam is Qiṣāṣ (Arabic: قصاص) as mentioned in Qur'an, 2:178: \"O you who have believed, prescribed for you is legal retribution (Qisas) for those murdered – the free for the free, the slave for the slave, and the female for the female. But whoever overlooks from his brother anything, then there should be a suitable follow-up and payment to him with good conduct.\n[…]\nThe death penalty is applied to murderers in some jurisdictions, and is generally restricted to murderers in some, such as the United States. In Islamic penal jurisprudence, it is a consequence of the qisas principle.\n[…]\nHammurabi, Code of 1780 BC."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lei_de_tali%C3%A3o",
        "situacao": "ok",
        "texto": "A lei de talião (em latim: lex talionis; lex: lei e talio, de talis: tal, idêntico), também dita pena de talião, consiste na rigorosa reciprocidade do crime e da pena — apropriadamente chamada retaliação. Na perspectiva da lei de talião, a pessoa que fere outra deve ser penalizada em grau semelhante, e a punição deve ser aplicada pela parte lesada. Em interpretações mais suaves, significa que a ví\n[…]\nA intenção por trás do princípio era \"restringir\" a compensação ao valor da perda. A lei de talião é encontrada em muitos códigos de leis antigas. Ela pode ser encontrada nos livros do Antigo Testamento do Êxodo, Levítico e Deuteronômio. Mas, originalmente, a lei aparece no código babilônico de Hamurabi (datado de 1770 a.C.), que antecede os livros de direito judeus por centenas de anos.\n[…]\nO rei Hamurabi foi responsável pela compilação dessas leis de forma escrita (em pedras), quando ainda prevalecia a tradição oral. Ao todo, o código tinha 282 artigos a respeito de relações de trabalho, família, propriedade, crimes e escravidão. Dentre elas, a lei de talião.\n[…]\nA expressão mais comum de relacionada a Lei de Talião é a famosa frase \"olho por olho\", mas também foram feitas outras interpretações. Os códigos legais que seguem o princípio da lei de talião têm uma coisa em comum: contra-punição 'adequada' prescrita para um crime. No famoso código legal escrito por Hamurabi, o princípio da reciprocidade exata é usado de forma muito clara. Por exemplo, se uma pessoa causou a morte de outra pessoa, o assassino deverá ser condenado à morte.\n[…]\nApesar de terem sido substituídos por novos modos de teoria jurídica, os sistemas da lei de talião serviram a um propósito crítico no desenvolvimento dos sistemas sociais — o estabelecimento de um instituto cujo propósito era decretar a retaliação e garantir que essa fosse a única punição. Esta doutrina era o Estado em uma de suas formas mais antigas."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Ramayana",
      "descricao": "Poema épico da Índia antiga, em sânscrito, sobre o príncipe Rama e o resgate de sua esposa Sita."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No épico indiano Ramayana, que herói com forma de macaco ajuda o príncipe Rama a resgatar a esposa, Sita?",
    "resposta": "Hanuman",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramayana",
      "https://en.wikipedia.org/wiki/Hanuman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramayana",
        "situacao": "ok",
        "texto": "The Ramayana (; Sanskrit: रामायणम्, romanized: Rāmāyaṇam), also known as the Valmiki Ramayana, as traditionally attributed to Valmiki, is a Hindu smriti mythological epic poem (also described as a Sanskrit epic) from ancient India. It is one of the two important epics of Hinduism known as the Itihasas, the other being the Mahabharata, narratives of past events (purāvṛtta), interspersed with teachi\n[…]\nOn meeting Sītā, Rāma says; \"The dishonour meted out to him and the wrong done to her by Rāvaṇa have been wiped off by his victory over the enemy with the assistance of Hanumān, Sugrīva and Vibhishaṇa\". However, upon criticism from people in his kingdom about the chastity of Sītā, Rāma is extremely disheartened.\n[…]\nThe Balinese kecak dance for example, retells the story of the Ramayana, with dancers playing the roles of Rama, Sita, Lakshmana, Jatayu, Hanuman, Ravana, Kumbhakarna and Indrajit surrounded by a troupe of over 50 bare-chested men who serve as the chorus chanting \"cak\". The performance also includes a fire show to describe the burning of Lanka by Hanuman. In Yogyakarta, the Wayang Wong Javanese dance also retells the Ramayana.\n[…]\nMultiple modern, English-language adaptations of the epic exist, namely Ram Chandra Series by Amish Tripathi, Ramayana Series by Ashok Banker and a mythopoetic novel, Asura: Tale of the Vanquished by Anand Neelakantan. Another Indian author, Devdutt Pattanaik, has published three different retellings and commentaries of Ramayana titled Sita, The Book Of Ram and Hanuman's Ramayan. A number of plays, movies and television serials have also been produced based upon the Ramayana.\n[…]\nRamayana series by Ashok Banker. A fictional retelling of the Ramayana. It has eight books — Prince of Ayodhya, Siege of Mithila, Demons of Chitrakut, Armies of Hanuman, Bridge of Rama, King of Ayodhya, Vengeance of Ravana and Sons of Sita.\n[…]\nAbsolute dating of Ramayana"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hanuman",
        "situacao": "ok",
        "texto": "Hanuman (; Sanskrit: हनुमान्, IAST: Hanumān), also known as Maruti, Bajrangabali, and Anjaneya, is a deity in Hinduism, revered as a divine vanara, and a devoted companion of Lord Rama. Central to the Ramayana, Hanuman is celebrated for his unwavering devotion to Rama and is considered a chiranjivi. He is traditionally believed to be the spiritual offspring of the celestial wind-god Vayu.\n[…]\nHanuman in southeast Asian texts differs from the north Indian Hindu version in various ways in the Burmese Ramayana, such as Rama Yagan, Alaung Rama Thagyin (in the Arakanese dialect), Rama Vatthu and Rama Thagyin, the Malay Ramayana, such as Hikayat Sri Rama and Hikayat Maharaja Ravana, and the Thai Ramayana, such as Ramakien. However, in some cases, the aspects of the story are similar to Hindu versions and Buddhist versions of Ramayana found elsewhere on the Indian subcontinent.\n[…]\nDevotionalism to Hanuman and his theological significance emerged long after the composition of the Ramayana, in the 2nd millennium CE. His prominence grew after the arrival of Islamic rule in the Indian subcontinent. He is viewed as the ideal combination of shakti (\"strength, heroic initiative and assertive excellence\") and bhakti (\"loving, emotional devotion to his personal god Rama\"). Beyond wrestlers, he has been the patron god of other martial arts.\n[…]\nHanuman's iconography is most commonly derived from Valmiki's Ramayana. He is usually portrayed with other central figures of the Ramayana – Rama, Sita and Lakshmana. He carries weapons such as a gada (mace) and thunderbolt (vajra). In the Hanuman Chalisa, a 16th century song written by Tulsidas, he is described as golden in color, wearing beautiful clothes and earrings, and having thick, curly hair. Tulsidas through the Hanuman Chalisa also describes him as having a mace and flag in his hands.\n[…]\nHanuman Jayanti\n[…]\nHanuman at Encyclopædia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ram%C3%A1iana",
        "situacao": "ok",
        "texto": "O Ramáiana, também conhecido como Ramayana ou Ramaiana (devanágari: रामायण, transl Rāmāyaṇa) é um épico sânscrito atribuído ao poeta Valmiki, parte importante do cânon hindu (smṛti). O nome Rāmāyaṇa é um composto tatpurusa de Rāma e ayana \"indo, avançando\", cuja tradução é \"a viagem de Rama\". O Rāmāyaṇa consiste de 24.000 versos em sete cantos (kāṇḍas) e conta a história de um príncipe, Rama de Ai\n[…]\nO Ramáiana teve uma importante influência na poesia sânscrita posterior, principalmente devido ao uso da métrica Sloka. Mas, como o seu primo épico Maabárata, o Ramáiana não é só uma história ordinária. Contém os ensinamentos dos antigos sábios hindus e os apresenta através de alegorias na narrativa e a intercalação do filosófico e o devocional. Os personagens de Rama, Sita, Lakshmana, Bharata, Hanumān e Rāvana (o vilão da peça) são todos fundamentais à consciência cultural da Índia.\n[…]\nSundara Kanda – Livro de Sundara (Hanuman) em que Hanuman viaja a Lanka, encontra Sita aprisionada lá e leva as boas notícias a Rama.\n[…]\nHanuman é um vanara que pertence ao reino de Kishkinda. Ele adora Rama e o ajuda a encontrar Sita indo ao reino de Lanka e cruzando o grande oceano.\n[…]\nAssumindo a forma de um pequeno macaco, Hanuman rastejou debaixo da árvore, e, dando a ela o anel de Rama, pegou um anel dela. Ele se ofereceu para levá-la embora, mas Sita declarou que o próprio Rama deve resgatá-la, e, como prova de tê-la encontrado, Sita deu a Hanuman uma jóia sem preço para levar ao Rama.\n[…]\nExiste um sub-enredo no Ramayana, prevalecente em algumas partes da Índia, que relata as aventuras de Ahi Ravana e Mahi Ravana, o irmão mau de Ravana, que aumenta o papel de Hanuman na história. Hanuman resgata Rama e Lakshmana depois que são seqüestrados pelo Ahi-mahi Ravana a pedido de Ravana e mantidos como prisioneiros numa caverna subterrânea, prontos para serem sacrificados à deusa Kali.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Enuma Elish",
      "descricao": "Poema babilônico da criação do mundo, que narra a ascensão do deus Marduk."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Enuma Elish, poema babilônico da criação, que deus derrota a deusa Tiamat e, com o corpo dela, forma o céu e a terra?",
    "resposta": "Marduk",
    "fonte": [
      "https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/En%C5%ABma_Eli%C5%A1",
        "situacao": "ok",
        "texto": "Enūma Eliš (Akkadian Cuneiform: 𒂊𒉡𒈠𒂊𒇺, also spelled \"Enuma Elish\"), meaning \"When on High\", is a Babylonian creation myth (named after its opening words) from the late 2nd millennium BCE and the only complete surviving account of ancient near eastern cosmology. It was recovered by English archaeologist Austen Henry Layard in 1849 (in fragmentary form) in the ruined Library of Ashurbanipal at Ninev\n[…]\nDue to the nature of Enuma Elish, it may not be representative of Mesopotamian creation myths. Enuma Elish references multiple myths and other texts, and epithets usually attested in royal inscriptions were given to Marduk.\n[…]\nSimilarities with the Anzû myth are commonly observed, such as both myths using the Tablet of Destinies as a key object and the similarities between the weapons used by Ninurta and Marduk, and lines from the Anzu myth were adapted to fit the story of Enuma Elish, such as Anzu's feathers being blown off by the wind being adjusted to having Tiamat's blood being blown off by the wind.\n[…]\nMarduk using floods and storms as a weapon and using a net to capture Tiamat (the personified sea) does not make logical sense, but they were weapons that Ninurta used in the Anzu myth and in Lugal-e, and usage of a net would make sense against Anzu. Other traditions related to Ninurta were also applied to Marduk in Enuma Elish, such as the name of one of Ninurta's weapons (long wood) being given to Marduk’s bow.\n[…]\nA ritual text from the Seleucid period states that Enūma Eliš was recited during the Akitu festival. There is scholarly debate as to whether this reading occurred, its purpose, and even the identity of the text referred to. Most analysts consider that the festival concerned and included some form of re-enactment of Tiamat's defeat by Marduk, representing a renewal cycle and triumph over chaos. However an analysis by Jonathan Z."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Enuma_Elish",
        "situacao": "ok",
        "texto": "O Enûma Eliš é o mito de criação babilônico. Foi descoberto por Austen Henry Layard em 1849 (em forma fragmentada) nas ruínas da Biblioteca de Assurbanípal em Nínive (Mossul, Iraque), e publicado por George Smith em 1876.\n[…]\nMarduque divide o corpo de Tiamat, usando metade para criar a terra e a outra metade para criar o céu.\n[…]\nMarduque decide criar os seres humanos mas precisa de sangue para os criar, mas apenas um dos deuses poderá morrer, o culpado de lançar o mal sobre os deuses. Marduque consulta o conselho e descobre que quem incitou a revolta de Tiamat foi o seu marido, Kingu. Mata-O e usa seu sangue para criar o Homem, de forma a que este sirva de criado dos deuses. Em honra a Marduque, os deuses constroem-lhe uma casa na Babilónia, havendo um grande festim para os deuses quando terminada.\n[…]\nSão várias as similaridades entre a história da criação no Enuma Elish e a história da criação no Livro do Génesis. O Génesis descreve seis dias de criação, seguido de um dia de descanso, enquanto que o Enuma Elish descreve a criação de seis deuses e a escravização do homem, para que os deuses tenham um dia de descanso. Em ambos a criação é feita pela mesma ordem, começando na Luz e acabando no Homem.\n[…]\nW. C. Lambert, S. B. Parker, Enûma Eliš. The Babylonian Epic of Creation, Oxford (1966).\n[…]\nEpopeia da criação: Enuma Eliš. Traduzido por Jacyntho Lins Brandão 1 ed. Belo Horizonte: Autêntica. 2022. 432 páginas. ISBN 978-6559282012\n[…]\nO MITO BABILÔNICO DA CRIAÇÃO - Enuma Elish (em português)\n[…]\nEnuma Elish: o épico babilônico da criação (em português)\n[…]\nWikisource.org - Enuma Elish (em inglês)\n[…]\nThe full surviving text of the Enûma Elish (em inglês)\n[…]\nGenesis and Enûma Elish creation myth comparisons (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Vedas",
      "descricao": "Coleções de hinos e textos em sânscrito, as escrituras mais antigas do hinduísmo."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantos são os Vedas, as coleções de hinos em sânscrito que formam as escrituras mais antigas do hinduísmo?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vedas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vedas",
        "situacao": "ok",
        "texto": "The Vedas ( or ; Sanskrit: वेदः, romanised: Vēdaḥ, lit. 'knowledge'), sometimes collectively called the Veda, are a large body of religious texts originating in ancient India. Composed in Vedic Sanskrit, the texts constitute the oldest layer of Sanskrit literature and the oldest scriptures of Hinduism.\n[…]\n\"Divya Prabandha\", for example Tiruvaymoli, is a term for canonical Tamil texts considered as vernacular Veda by some South Indian Hindus.\n[…]\nVedas are recited by these Brahmins, and even their parrots are mentioned in the poem as those who sing the Vedic hymns. People in these Vedic villages did not eat meat, nor raise fowls. They ate rice, salad leaves boiled in ghee, pickles and vegetables. Apart from the Sanskrit Vedas there are other texts like Naalayira Divya Prabandham and Tevaram called as Tamil Veda and Dravida Veda.\n[…]\nCertain traditions which are often seen as being part of Hinduism also rejected the Vedas. For example, authors of the tantric Vaishnava Sahajiya tradition, like Siddha Mukundadeva, rejected the Vedas' authority. Likewise, some tantric Shaiva Agamas reject the Vedas. The Anandabhairava Tantra for example, states that \"the wise man should not elect as his authority the word of the Vedas, which is full of impurity, produces but scanty and transitory fruits and is limited.\"\n[…]\nThough many religious Hindus implicitly acknowledge the authority of the Vedas, this acknowledgment is often \"no more than a declaration that someone considers himself [or herself] a Hindu\", and \"most Indians today pay lip service to the Veda and have no regard for the contents of the text.\" Some Hindus challenge the authority of the Vedas, thereby implicitly acknowledging its importance to the history of Hinduism, states Lipner.\n[…]\nThe Vedas at sacred-texts.com, Sacred Texts."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vedas",
        "situacao": "ok",
        "texto": "Denominam-se Vedas as quatro obras, compostas em um idioma chamado Sânscrito védico, de onde se originou posteriormente o sânscrito clássico. Inicialmente, os Vedas eram transmitidos apenas de forma oral porque ainda hoje, em algumas regiões da Índia, como Kerala, há escolas védicas onde as crianças aprendem de cor o seu conteúdo.\n[…]\nOs Vedas formam a base do extenso sistema de escrituras sagradas do hinduísmo, que representam a mais antiga literatura de qualquer língua indo-europeia. A palavra Veda, em sânscrito, da raiz विद् vid- (reconstruída como sendo derivada do proto-indo-europeu weid-) que significa conhecer, escreve-se वेद veda em devanágari e significa \"conhecimento\". É a forma guna da raiz vid- acrescida do sufixo nominal -a.\n[…]\nSão estes os quatro Vedas:\n[…]\nO Rigveda contém a mais antiga parte dos textos, e consiste de 1028 hinos. O Samaveda é mais um arranjo do Rigveda para música. O Iajurveda dá orações sacrificiais e o Atarvaveda dá encantos, encantamentos e fórmulas mágicas. Separadamente destes, há alguns materiais seculares perdidos e lendas.\n[…]\nA tradição hindu considera os vedas incriados, eternos e que são revelados a sábios (Rixis). O rixi Krishna Dwaipayana, melhor conhecido como Veda Vyasa – Vyasa significando \"editor\" ou \"compilador\" – supostamente distribuiu esta massa de hinos nos quatro livros dos Vedas, sendo cada livro supervisionado por um de seus discípulos. Paila organizou os hinos do Rig Veda.\n[…]\nFilosofias e seitas que desenvolveram-se no subcontinente indiano tiveram diferentes posições nos Vedas. No budismo e no jainismo, a autoridade do Veda é repudiada, e ambos desenvolveram-se em religiões separadas. As seitas que não rejeitaram explicitamente os Vedas continuaram seguidores do Sanatana Dharma, que é conhecido, nos tempos modernos, como hinduísmo.\n[…]\nVedas (Catholic Encyclopedia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Guerra de Kurukshetra",
      "descricao": "Guerra narrada no Mahabharata entre os Pandavas e os Kauravas, travada na planície de Kurukshetra."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Segundo o Mahabharata, quantos dias durou a guerra de Kurukshetra entre os Pandavas e os Kauravas?",
    "resposta": "Dezoito",
    "distratores": [
      "Sete",
      "Quarenta",
      "Cem"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kurukshetra_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kurukshetra_War",
        "situacao": "ok",
        "texto": "The Kurukshetra War (Sanskrit: कुरुक्षेत्रयुद्ध), also called the Mahabharata War, is a war described in the Hindu epic poem Mahabharata, arising from a dynastic struggle between two groups of cousins, the Kauravas and the Pandavas, for the throne of Hastinapura. The war is used as the context for the dialogues of the Bhagavad Gita.\n[…]\nThe Mahābhārata recounts the lives and deeds of several generations of a ruling dynasty known as the Kuru clan. Central to the epic is a dynastic conflict between two branches of this family—the five Pandava brothers and their cousins, the hundred Kauravas—over the throne of Hastinapura. The climactic battle takes place at Kurukshetra, literally the \"field of the Kurus\", also called Dharmakshetra (\"field of dharma\").\n[…]\nWhile Arjuna destroys the rest of the Shakatavyuha, Vikarna, the third eldest Kaurava, challenges Arjuna to an archery fight. Arjuna asks Bhima to kill Vikarna, but Bhima refuses because Vikarna had defended the Pandavas during the Draupadi Vastrapaharanam. Bhima and Vikarna shoot arrows at each other, before Bhima kills Vikarna with his mace. Drona kills Vrihatkshatra, the King of Kekeya, and Dhrishtakethu, the King of Chedi.\n[…]\nKarna is made the Major General of the Kaurav Army. He is surrounded and attacked by Pandava generals, who are unable to defeat him. Karna inflicts heavy damage on the Pandava Army.\n[…]\nShalya takes over as the Major General of the remaining Kaurava forces. Yudhishthira kills him in spear combat and Sahadeva kills Shakuni. Nakula kills Shakuni's son Uluka. Realizing that he had been defeated, Duryodhana flees the battlefield and takes refuge in the lake, where the Pandavas catch up with him. Under the supervision of the now-returned Balarama, a battle between Bhima and Duryodhana begins.\n[…]\nKauravas\n[…]\nKurukshetra (town)\n[…]\nDating the Kurukshetra War"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Kurukshetra",
        "situacao": "ok",
        "texto": "A Guerra de Kurukshetra (na escrita Devanágari: कुरुक्षेत्र युद्ध) é um componente essencial do texto épico hindu Mahabharata e, portanto, da Baghavad-gita que é uma parte dela.\n[…]\nDe acordo com o Mahabharata, a luta entre clãs irmãos, os Káuravas e os Pândavas, pelo trono de Hastinapura (região localizada próxima da atual Nova Deli), foi resolvida em uma guerra em que um grande número de antigos reinos participaram como aliados dos clãs rivais. A batalha ocorreu em Kuru-kshetra (que significa campo dos Kuru), no atual estado de Haryana, no norte da Índia.\n[…]\nNo Mahabharata é contado que a batalha durou 18 dias, durante o qual vastos exércitos de toda a Índia lutaram em ambos os lados. A importância dada à narrativa desta guerra no Mahabharata é tanta que, apesar da duração da história inteira do Mahabharata permear séculos e envolver várias gerações de famílias de guerreiros, a narrativa da batalha de apenas 18 dias ocupa metade do livro.\n[…]\nOs hindus acreditam que a batalha de Kurukshetra foi um evento histórico, ocorrido entre o ano de 3102 A.C. e 800 da nossa era, com base em cálculos astronômicos e informações do Mahabharata. A mitologia da batalha de Kurukshetra também é descrita na Batalha dos Dez Reis, mencionada no Rigveda.\n[…]\nSegundo o livro, o exército dos Pândavas, comandado pelo Dhristadyumna, estava dividido em sete divisões, totalizando 1 530 900 homens, enquanto que seus rivais, os Káuravas, liderados por Bhishma somavam 11 divisões de 2 405 700 homens. A batalha custou caro para ambos os lados, sobrevivendo apenas 8 Pândavas e 4 Káuravas ao final.\n[…]\nIgnca.nic.in(datação da batalha de Kurukshetra).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Angkor Wat",
      "descricao": "Templo do Império Khmer do século doze, no Camboja."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hoje um templo budista, Angkor Wat foi erguido no século doze em honra de que deus hindu?",
    "resposta": "Vixnu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angkor_Wat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat (; Khmer: អង្គរវត្ត, 'City/Capital of Temples') is a Theravada Buddhist temple complex originally built as a Vaishnava Hindu temple, in Siem Reap, Cambodia. It is the largest religious complex in the world. Located on a site measuring 162.6 hectares (1.6 km2; 401.8 acres) within the medieval capital of Angkor, it was constructed between 1113 and 1150 CE during the reign of the Khmer kin\n[…]\nAngkor Wat was therefore also gradually converted into a Buddhist site with many Hindu sculptures replaced by Buddhist art.\n[…]\nIntegrated with the architecture of the building, one of the causes for its fame is Angkor Wat's extensive decoration, which predominantly takes the form of bas-relief friezes. The inner walls of the outer gallery bear a series of large-scale scenes mainly depicting episodes from the Hindu epics the Ramayana and the Mahabharata. Higham has called these \"the greatest known linear arrangement of stone carving\".\n[…]\nMyths associated with Angkor Wat reflect the influence of Buddhist traditions that developed in Cambodia over several centuries. By the 16th and 17th centuries, Theravada Buddhism had become the dominant religious system in the region, contributing to a gradual reinterpretation of the monument from a Hindu temple into a sacred Buddhist site.\n[…]\nLocal Cambodian traditions also reframed Angkor Wat within Buddhist cosmological narratives. Folklore identifies the temple as a site of merit-making, meditation, and spiritual ascent, sometimes described as a gateway between human and divine realms. Additional myths propose that the temple's extensive bas-reliefs encode hidden Buddhist teachings, despite their depiction of Hindu epics.\n[…]\nHigham, Charles (2001). The Civilization of Angkor. Phoenix. ISBN 978-1-84212-584-7.\n[…]\nMultimedia Resources of Angkor Wat March 2023\n[…]\nAngkor Wat and Angkor photo gallery by Jaroslav Poncar May 2010\n[…]\nPBS NOVA Angkor: Hidden Jungle Empire"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat (ou Angkor Vat) é um templo situado 5,5 km a norte da cidade de Siem Reap, na província homônima do Camboja. É o maior e mais bem preservado templo dos que integram o assentamento de Angkor. É também o único que restou com significado religioso importante — inicialmente hindu, e depois budista — desde a sua fundação. O templo é o ponto máximo do estilo clássico da arquitetura Khmer.\n[…]\nDedicado inicialmente ao deus Vixnu, o templo combina a tipologia hinduísta do templo-monte — representando o Monte Meru, morada dos deuses — com a tipologia de galerias própria de períodos posteriores. O templo consta de três recintos retangulares concêntricos de altura crescente, rodeados por um lago perimetral de 3,6 km de comprimento e de uma largura de 200 m.\n[…]\nQuer por ser um templo funerário para o rei, quer por estar dedicado ao deus Vixnu (associado ao quadrante oeste do universo), Angkor Wat, ao contrário do restante de templos, está orientado para oeste. Por este motivo, a direção das histórias narradas nos relevos do templo devem ser lidas no senso contrário às agulhas do relógio.\n[…]\nOs recintos segundo e terceiro possuem torres sobre os seus pavilhões. O recinto segundo carece de baixo-relevos, enquanto os relevos do primeiro estão dedicados ao deus Vixnu.\n[…]\nO primeiro recinto, acessível somente para o rei e o sumo sacerdote, é um quadrado de 60 metros de lado que contém, dispostos em quincúncio, os 5 Prasat ou templos piramidais que representam os picos do Monte Meru. Os cinco templetes ficam ligados mediante novos corredores que geram quatro pátios, similares aos do Preah Poan. O prasat central é maior que os demais, e na sua base alberga um amplo nicho de 4,6 m de lado no que se alojava uma estátua de Vixnu.\n[…]\nAmostra o clímax do livro Ramayana, no que o deus Rama (encarnação de Vixnu), ajudado por um exército de monos, derrota o demônio Ravana e resgata a sua esposa Sita.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Bússola",
      "descricao": "Instrumento de orientação baseado num ímã que aponta para o norte magnético, desenvolvido na China antiga."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Antes de guiar navegantes, as antigas bússolas chinesas, em forma de colher de ímã, eram usadas para quê?",
    "resposta": "Adivinhação e geomancia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Compass",
      "https://en.wikipedia.org/wiki/History_of_the_compass"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Compass",
        "situacao": "ok",
        "texto": "A compass is a device that shows the cardinal directions used for navigation and geographic orientation. It typically consists of a magnetized needle or another element, such as a compass card or compass rose, that pivots to align itself with magnetic north. Other methods may be used, including gyroscopes, magnetometers, and GPS receivers.\n[…]\nAmong the Four Great Inventions, the magnetic compass was first invented as a device for divination as early as the Chinese Han dynasty (since c. 206 BC), and later adopted for navigation by the Song dynasty Chinese during the 11th century. The first usage of a compass recorded in Western Europe occurred around 1190 and in the Islamic world in the 13th century.\n[…]\nSome claims state that the first devices utilising lodestone's natural magnetic properties were in ancient Han dynasty China. The earliest mention of a needle's attraction appears in a work composed between 20 and 100 AD, the Lunheng (Balanced Inquiries): \"A lodestone attracts a needle.\" In the 2nd century BC, Chinese geomancers were experimenting with the magnetic properties of lodestone to make a \"south-pointing spoon\" for divination.\n[…]\nthey are not affected by ferromagnetic metal (including iron, steel, cobalt, nickel, and various alloys) in a ship's hull. (No compass is affected by nonferromagnetic metal, although a magnetic compass will be affected by any kind of wires with electric current passing through them.)\n[…]\nHand compass – Compact magnetic compass\n[…]\nSouth-pointing chariot – Chinese two-wheeled chariot\n[…]\nAdmiralty, Great Britain (1915) Admiralty manual of navigation, 1914, Chapter XXV: \"The Magnetic Compass (continued): the analysis and correction of the deviation\", London: HMSO, 525 p.\n[…]\nHandbook of Magnetic Compass Adjustment Archived 2019-05-29 at the Wayback Machine\n[…]\nPaul J. Gans, The Medieval Technology Pages: Compass"
      },
      {
        "url": "https://en.wikipedia.org/wiki/History_of_the_compass",
        "situacao": "ok",
        "texto": "The compass is a magnetometer used for navigation and orientation that shows direction in regard to the geographic cardinal points. The structure of a compass consists of the compass rose, which displays the four main directions on it: East (E), South (S), West (W) and North (N). The angle increases in the clockwise position. North corresponds to 0°, east is 90°, south is 180° and west is 270°.\n[…]\nThe compass was invented in China during the Han dynasty between the 2nd century BC and 1st century AD where it was called the \"south-governor\" (sīnán 司南) or \"South Pointing Fish\" (指南魚). The magnetic compass was not, at first, used for navigation, but for geomancy and fortune-telling by the Chinese. The earliest Chinese magnetic compasses were possibly used to order and harmonize buildings by the geomantic principles of feng shui.\n[…]\nThe first clear account of magnetic declination occurs in the Kuan Shih Ti Li Chih Meng (\"Mr. Kuan's Geomantic Instructor\"), dating to 880. Another text, the Chiu Thien Hsuan Nu Chhing Nang Hai Chio Ching (\"Blue Bag Sea Angle Manual\") from around the same period, also has an implicit description of magnetic declination. It has been argued that this knowledge of declination requires the use of the compass.\n[…]\nThe first incontestable reference to a \"magnetized needle\" in Chinese literature appears in 1088. The Dream Pool Essays, written by the Song dynasty polymath scientist Shen Kuo, contained a detailed description of how geomancers magnetized a needle by rubbing its tip with lodestone and hung the magnetic needle with one single strain of silk with a bit of wax attached to the center of the needle. Shen Kuo pointed out that a needle prepared this way sometimes pointed south, sometimes north.\n[…]\nLane, Frederic C. (1963) \"The Economic Meaning of the Invention of the Compass\", The American Historical Review, 68 (3: April), p. 605–617 JSTOR 1847032"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%BAssola",
        "situacao": "ok",
        "texto": "Uma bússola é um instrumento que mostra os pontos cardeais usados na navegação e na orientação geográfica. Em geral, consiste em uma agulha magnetizada ou outro elemento, como um cartão de bússola ou uma rosa dos ventos, que gira até se alinhar com o norte magnético. Outros métodos também podem ser usados, entre eles giroscópios, magnetômetros e receptores do sistema de posicionamento global.\n[…]\nEntre as quatro grandes invenções chinesas, a bússola magnética surgiu primeiro como instrumento de adivinhação, já durante a China da Dinastia Han, a partir de cerca de 206 a.C., e passou a ser usada na navegação pelos chineses da Dinastia Sung no século XI. O primeiro uso registrado de uma bússola na Europa Ocidental ocorreu por volta de 1190 e, no mundo islâmico, no século XIII.\n[…]\nAlgumas interpretações situam os primeiros instrumentos que exploravam as propriedades magnéticas naturais da pedra-imã na China da Dinastia Han. A menção mais antiga à atração de uma agulha está no Lunheng (Investigações equilibradas), obra escrita entre 20 e 100 d.C.: \"Uma pedra-imã atrai uma agulha.\" No século II a.C., geomantes chineses experimentavam as propriedades magnéticas da pedra-imã para produzir uma \"colher que aponta para o sul\" usada em adivinhação.\n[…]\nComo qualquer dispositivo magnético, a bússola é afetada por materiais ferrosos próximos e por forças eletromagnéticas locais intensas. Bússolas usadas em navegação terrestre não devem ficar perto de objetos de metal ferroso ou de campos eletromagnéticos, como sistemas elétricos e motores de automóveis ou pitões de aço, pois isso pode alterar sua precisão.\n[…]\nBússolas giroscópicas ainda são usadas para fins militares, sobretudo em submarinos, onde bússolas magnéticas e GPS são inúteis. Em aplicações civis, foram em grande parte substituídas por bússolas GPS com bússolas magnéticas de reserva.\n[…]\nHandbook of Magnetic Compass Adjustment",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Sushruta",
      "descricao": "Médico e cirurgião da Índia antiga, autor tradicional do tratado médico Sushruta Samhita."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Sushruta, cirurgião da Índia antiga, ficou famoso por descrever uma técnica de reconstrução de que parte do corpo?",
    "resposta": "Nariz",
    "distratores": [
      "Joelho",
      "Mão",
      "Coração"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sushruta",
      "https://en.wikipedia.org/wiki/Sushruta_Samhita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sushruta",
        "situacao": "ok",
        "texto": "Suśruta (Sanskrit: सुश्रुत, lit. 'well heard', IAST: Suśruta) was an ancient Indian physician and surgeon, who made significant contributions to the field of plastic and cataract surgery. He is widely considered \"the father of plastic surgery\" and is credited with developing the method of reconstructive rhinoplasty, historically known as the \"Indian method\".\n[…]\nAcharya Sushruta was born in Kanyakubja and he later moved to Varanasi, where he wrote The Compendium of Suśruta.\n[…]\nModern scholarship generally places the composition of the Sushruta Samhita between the 1st millennium BCE, although the surviving Sushruta Samhita is a composite text compiled and revised over time. The early scholar Rudolf Hoernle proposed that some concepts from the Suśruta-Saṃhitā could be found in the Śatapatha-Brāhmaṇa, which he dated to the 600 BCE.\n[…]\nIn 1907, Kunja Lal Bhishagratna, a translator of the Suśrutasaṃhitā, asserted that Suśruta was one of the sons of the sage Vishvamitra. Bhisagratna also asserted that Sushruta was the name of the clan to which Vishvamitra belonged. In Chapter 7 of the five-volume History of Indian Medical Literature, published in 1999, physician-scholar Gerrit Jan Meulenbeld covers a variety of further theories on Suśruta's identity and the Sushruta Samhita's dating and publication history.\n[…]\nSushruta's medical prowess is exhibited through his writings on rhinoplasty, involving nasal reconstructions using skin from the patient's forehead or cheek, often for criminals punished with amputations. Based on reports in the October 1794 edition of The Gentleman's Magazine, published in London, Indians maintained Sushruta's surgical practices until the late 18th century.\n[…]\nThe bronze statue in honor of Sushruta was unveiled at the Royal College of Surgeons of Edinburgh in July 2026."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sushruta_Samhita",
        "situacao": "ok",
        "texto": "The Sushruta Samhita (Sanskrit: सुश्रुतसंहिता, lit. 'Suśruta's Compendium', IAST: Suśrutasaṃhitā) is an ancient Sanskrit text on medicine and one of the most important such treatises on this subject to survive from the ancient world. The Compendium of Suśruta is one of the foundational texts of Ayurveda, alongside the Charaka-Saṃhitā, the Bhela-Saṃhitā, and the medical portions of the Bower Manusc\n[…]\nThe Sushruta Samhita is among the most important ancient medical treatises. It is one of the foundational texts of the medical tradition in India, alongside the Caraka-Saṃhitā, the Bheḷa-Saṃhitā, and the medical portions of the Bower Manuscript.\n[…]\nThe Sushruta Samhita mentions various methods including sliding graft, rotation graft and pedicle graft. Reconstruction of a nose (rhinoplasty) which has been cut off, using a flap of skin from the cheek is also described. Labioplasty too has received attention in the samahita.\n[…]\nSushruta's treatise provides the first written record of a cheek flap rhinoplasty, a technique still used today to reconstruct a nose. The text mentions more than 15 methods to repair it. These include using a flap of skin from the cheek, which is akin to the most modern technique today.\n[…]\nColumbia University’s Irving Medical Centre noted that in 600 BCE Indian physician Sushruta Samhita documented instructions for performing complex surgical procedures, including three types of skin grafts and reconstruction of the nose.\n[…]\nSushruta\n[…]\nLoukas, M; et al. (2010). \"Anatomy in ancient India: A focus on the Susruta Samhita\". Journal of Anatomy. 217 (6): 646–650. doi:10.1111/j.1469-7580.2010.01294.x. PMC 3039177. PMID 20887391.\n[…]\nTipton, Charles (2008). \"Susruta of India, an unrecognized contributor to the history of exercise physiology\". Journal of Applied Physiology. 104 (6): 1553–1556. doi:10.1152/japplphysiol.00925.2007. PMID 18356481. S2CID 22761582."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sushruta",
        "situacao": "ok",
        "texto": "Sushruta foi um cirurgião e professor de Aiurveda que floresceu na cidade indiana de Benares (Kashi) no século VI a.C.. O tratado médico Sushruta Samhita— compilado em sânscrito védico - é atribuído a ele. O Sushruta Samhita contém diversas referências detalhadas a doenças e procedimentos médicos. É considerado o \"Pai da Cirurgia\".\n[…]\nSushruta serviu como cirurgião em Kashi, onde praticou medicina e identificou o tratamento e a origem de diversas doenças. A literatura arcaica da Índia data de antes de 1400 a.C. e a família brâmica de alfabetos apareceu no século III a.C.. As obras literárias passaram a ter maior visibilidade durante o primeiro milênio antes de Cristo, período em que surgiu o Sushruta Samhita. A obra de Sushruta foi compilada no século VI a.C..\n[…]\nAs obras médicas de Sushruta e de outro médico indiano, Charaka, foram traduzidas para o árabe durante o Califado Abássida (750). Estas obras em árabe chegaram à Europa através de intermediários; na Itália, a família Branca, da Sicília, e Gaspare Tagliacozzi, de Bolonha, familiarizaram-se com as técnicas de Sushruta.\n[…]\nMédicos ingleses viajaram até a Índia para ver rinoplastias sendo executadas por métodos nativos. Os relatos sobre as rinoplastias indianas foram publicadas na Gentleman's Magazine em 1794. Joseph Constantine Carpue passou 20 anos na Índia, estudando métodos locais de cirurgia plástica, e realizou a primeira rinoplastia de grande porte no Ocidente em 1815. Os instrumentos descritos no Sushruta Samhita foram modificados e aperfeiçoados no mundo ocidental.\n[…]\nDwivedi, Girish & Dwivedi, Shridhar (2007). History of Medicine: Sushruta – the Clinician – Teacher par Excellence. National Informatics Centre (Government of India).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Zodíaco chinês",
      "descricao": "Ciclo de doze anos da tradição chinesa, em que cada ano é associado a um animal."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na lenda da Grande Corrida, que animal chegou na frente de todos e por isso abre o ciclo do zodíaco chinês?",
    "resposta": "Rato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinese_zodiac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinese_zodiac",
        "situacao": "ok",
        "texto": "The Chinese zodiac is a traditional classification scheme based on the Chinese calendar that assigns an animal and its reputed attributes to each year in a repeating twelve-year (or duodenary) cycle. The zodiac is very important in Chinese culture as a reflection of traditional Chinese philosophy. Chinese folkways held that one's personality is related to the attributes of their zodiac animal.\n[…]\n未: Old Chinese *m[ə]t-s (compare Atayal miːts)\n[…]\nThe zodiac is widely used in commercial culture, for example, in the Chinese New Year market, and popular zodiac-related products, such as crafts, toys, books, accessories, and paintings and Chinese lunar coins. The coins depict zodiac animals, inspired the Canadian Silver Maple Leaf coins, as well as varieties from Australia, South Korea, and Mongolia.\n[…]\nThe Chinese zodiac is also used in some Asian countries that were under the cultural influence of China. However, some of the animals in the zodiac may differ by country.\n[…]\nThe Vietnamese zodiac varies from the Chinese zodiac with the second animal being the Water Buffalo instead of the Ox, and the fourth animal being the Cat instead of the Rabbit.\n[…]\nThe Cham zodiac uses the same order as the Chinese zodiac.\n[…]\nIn the Persian version of the Eastern zodiac brought by Mongols during the Middle Ages, the Chinese word lóng and Mongol word lū (Dragon) was translated as nahang meaning \"water beast\", and may refer to any dangerous aquatic animal both mythical and real (crocodiles, hippos, sharks, sea serpents, etc.).\n[…]\nIn the Kyrgyz version of the Chinese zodiac (Kyrgyz: мүчөл, müçöl) the words for the Dragon (Kyrgyz: улуу, uluu), Monkey (Kyrgyz: мечин, meçin) and Tiger (Kyrgyz: барс, bars) are only found in Chinese zodiac names, other animal names include Cow, Rabbit, Snake, Horse, Sheep, Chicken, Dog and Wild boar.\n[…]\nChinese animal symbolism\n[…]\nAnimal fighting styles\n[…]\nChinese spiritual world concepts"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hor%C3%B3scopo_chin%C3%AAs",
        "situacao": "ok",
        "texto": "O Horóscopo chinês dos 12 signos é uma das referências que a Astrologia chinesa utiliza para realizar seus estudos.\n[…]\nApenas doze animais compareceram e ganharam um ano de acordo com a ordem de chegada: o Rato; O Boi ou Búfalo (Vaca, na Tailândia); o Tigre (Pantera, na Mongólia); O Coelho ou Lebre (Gato, no Vietnã); o Dragão (Crocodilo, na Pérsia); a Cobra ou Serpente (Pequeno Dragão, na Tailândia); o Cavalo; a Cabra, Bode ou Ovelha; o Macaco; o Galo ou Galinha; o Cão; o Porco ou Javali. O Cavalo de Fogo rege a cada 60 anos.\n[…]\nDe acordo com um antigo texto budista, quando os animais terminam suas meritórias tarefas, fazem um juramento solene perante os budas de que um deles estará sempre, por um dia e por uma noite, pelo mundo, pregando e convertendo, enquanto os outros onze ficam praticando o bem em silêncio. O Rato inicia sua jornada no primeiro dia da sétima Lua; procura persuadir os nativos do seu signo a praticarem boas ações e a corrigirem os defeitos de seus temperamentos.\n[…]\nOs demais bichos fazem o mesmo, sucessivamente, e o Rato reinicia seu trabalho no 13º dia. Assim, graças ao trabalho constante dos animais, os budas garantem uma certa ordem no universo .\n[…]\nRato, Dragão, Macaco:\n[…]\nTudo possui frente e verso;\n[…]\nGrande Yin atrai pequeno Yin; o grande Yang atrai o pequeno Yang;\n[…]\nYang: Rato, Tigre, Dragão, Cavalo, Macaco e Cão\n[…]\nEm cada ano, um dos 12 animais do zodíaco é governado por um dos cinco elementos. Deste modo, o ciclo se encerra em 60 anos. A data é comemorada pelos povos orientais que seguem o calendário chinês, e dá início a uma nova repetição de animal e elemento.\n[…]\nÁgua: Rato e Porco",
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
