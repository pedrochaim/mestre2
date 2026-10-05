Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Egito Antigo** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Grande Pirâmide de Gizé",
      "descricao": "Maior das pirâmides egípcias de Gizé, tumba do faraó Quéops da Quarta Dinastia."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Quando a Grande Pirâmide de Gizé foi construída, ainda sobrevivia, numa ilha do Ártico, uma população de qual animal da Era do Gelo?",
    "resposta": "Mamute-lanoso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Woolly_mammoth",
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woolly_mammoth",
        "situacao": "ok",
        "texto": "The woolly mammoth (Mammuthus primigenius) is an extinct species of mammoth that lived from the Middle Pleistocene until its extinction in the Holocene epoch. It was one of the last in a line of mammoth species, beginning with the African Mammuthus subplanifrons in the early Pliocene. The woolly mammoth began to diverge from the steppe mammoth about 800,000 years ago in Siberia. Its closest extant\n[…]\nA 2011 genetic study showed that two examined specimens of the Columbian mammoth were grouped within a subclade of woolly mammoths. This suggests that the two populations interbred and produced fertile offspring. A North American type formerly referred to as M. jeffersonii may be a hybrid between the two species. A 2015 study suggested that the animals in the range where M. columbi and M. primigenius overlapped formed a metapopulation of hybrids with varying morphology.\n[…]\nA small population of woolly mammoths survived on St. Paul Island, Alaska, well into the Holocene, with their extinction on the island being tightly constrained to around 5,600 years ago based on direct dating of bones and environmental proxies. This population is suggested to have gone extinct as a result of sea-level rise and increasing dryness of the island reducing freshwater availability, along with mammoth activity degrading the few freshwater sources on the island.\n[…]\nThe last known fossil population remained on Wrangel Island in the Arctic Ocean until 4,000 years ago, around 2000 BCE, centuries after the dawn of human civilization and the construction of the Great Pyramid and Sphinx of ancient Egypt.\n[…]\nBernard Heuvelmans included the possibility of residual populations of Siberian mammoths in his 1955 book, On The Track Of Unknown Animals; while his book was a systematic investigation into possible unknown species, it became the basis of the cryptozoology movement."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        "situacao": "ok",
        "texto": "The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. The Great Pyramid served as the tomb of Egyptian Pharaoh Khufu (\"Cheops\"), who ruled during the Fourth Dynasty of the Old Kingdom. It was built c. \n[…]\nIn the past the Great Pyramid was dated by its attribution to Khufu alone, putting the construction of the Great Pyramid within his reign, hence dating the pyramid was a matter of dating Khufu and the 4th dynasty. The relative sequence and synchrony of events is the focal point of this method.\n[…]\nGreaves, in 1646, reported the great difficulty of ascertaining a date for the pyramid's construction based on the lacking and conflicting historic sources. Because of the differences in spelling, he did not recognize Khufu on Manetho's king list (as transcribed by Africanus and Eusebius), hence he relied on Herodotus' incorrect account. Summating the duration of lines of succession, Greaves concluded 1266 BC to be the beginning of Khufu's reign.\n[…]\nThe pyramid was once topped by a capstone known as a pyramidion. The material from which it was made is subject to much speculation; limestone, granite or basalt are commonly proposed, while in popular culture it is often solid gold, gilded or electrum. All known 4th dynasty pyramidia (of the Red Pyramid, Satellite Pyramid of Khufu (G1-d) and Queen's Pyramid of Menkaure (G3-a)) are of white limestone and were not gilded.\n[…]\nLudwig Borchardt suggested that the Subterranean Chamber was originally planned to be the burial place for pharaoh Khufu, but that it was abandoned during construction in favour of a chamber higher up in the pyramid.\n[…]\n\"The gang, Khufu-excites-love\"\n[…]\nBuilding the Khufu Pyramid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamute-lanoso",
        "situacao": "ok",
        "texto": "O mamute-lanoso ou mamute-lanudo (Mammuthus primigenius) foi a última espécie de mamute que se adaptou às regiões mais a norte do planeta. Em relação a outras espécies do gênero Mammuthus eles são animais de tamanho modesto com um porte aproximado ao elefante-africano atual. Os hábitos e aparência desta espécie estão entre os mais detalhados entre as espécies pré-históricas, por conta das descober\n[…]\nO mamute-lanoso conviveu com os humanos, que os caçaram para conseguir comida, além de usarem seus ossos e presas para fazerem ferramentas, habitações e artes (pingentes). Os mamutes-lanosos começaram a desaparecer por volta do ano 10.000 a.C, uma população isolada sobreviveu até o ano 5.600 a.C na ilha de São Paulo e na ilha de Wrangel eles morreram por volta de 2000 a.C.\n[…]\nEste habitat não era dominado por gelo e neve, como se acredita popularmente, uma vez que se pensa que essas regiões eram áreas de alta pressão na época. O habitat do mamute-lanoso abrigava outros herbívoros pastando, como o rinoceronte-lanoso, cavalos selvagens e bisões. As regiões de Altai-Sayan são os biomas modernos mais semelhantes à \"estepe de mamute\".\n[…]\nA análise do genoma do mamute lanoso, em 2015, revelou grandes mudanças genéticas que permitiram que os mamutes se adaptarem à vida no ártico. Os genes de mamute que diferem dos seus homólogos em elefantes desempenharam papéis no desenvolvimento da pele e pelo, metabolismo da gordura, sinalização da insulina e muitas outras características. Genes ligados a traços físicos, como forma do crânio, pequenas orelhas e caudas curtas também foram identificados.\n[…]\nEm 2013, uma expedição às Ilhas Lyakhovsky, na costa da Sibéria, encontrou uma carcaça de mamute-lanoso, contendo sangue em estado líquido. Amostras do sangue foram coletadas, alimentando esperanças de clonar o animal.\n[…]\n«IG: Russos encontram carcaça de  mamute com sangue líquido»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Grande Pirâmide de Gizé",
      "descricao": "Maior das pirâmides egípcias de Gizé, tumba do faraó Quéops da Quarta Dinastia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "A Grande Pirâmide foi a construção mais alta do mundo por cerca de três mil e oitocentos anos. Que catedral inglesa a superou no século quatorze?",
    "resposta": "Catedral de Lincoln",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lincoln_Cathedral",
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lincoln_Cathedral",
        "situacao": "ok",
        "texto": "Lincoln Cathedral, also called Lincoln Minster, and formally the Cathedral Church of the Blessed Virgin Mary of Lincoln, is a Church of England cathedral in Lincoln, England. It is the seat of the bishop of Lincoln and is the mother church of the diocese of Lincoln. The cathedral is governed by its dean and chapter, and is a grade I listed building.\n[…]\nSome (Kidson, 1986; Woo, 1991) have suggested that the damage to Lincoln Cathedral was probably exacerbated by poor construction or design, with the actual collapse most probably caused by a vault failure.\n[…]\nRemigius de Fécamp, Bishop of Lincoln (1072–92) – began the construction of Lincoln Cathedral, which was consecrated in 1092, two days after his death\n[…]\nWilliam John Butler, Dean of Lincoln\n[…]\nIn Letitia Elizabeth Landon's poetical illustration Lincoln Cathedral to a painting by Thomas Allom, she remarks on the derivation of Gothic tracery from \"the arches of the old oak trees\". This was published in Fisher's Drawing Room Scrap Book, 1837.\n[…]\nLincoln Cathedral was used for The Grand Tour final show of series 3 to memorialize the Ford Mondeo, which ended production. This was concurrent with the show ending its studio segments and pivoting to specials only, with a special service singing the hymn Dear Lord and Father of Mankind, with a slight variation, whilst showcasing a montage of others who have fond memories of Ford vehicles they have driven when they were younger.\n[…]\nLincoln Medieval Bishop's Palace\n[…]\nVicars' Court, Lincoln\n[…]\nLincoln Cathedral: Official Guide, Diocese of Lincoln\n[…]\nLincoln Cathedral, Peter B. G. Binnall, Pitkin Publishing, ISBN 978-0-85372-203-8\n[…]\nLincoln Cathedral Choir & Old Choristers Association\n[…]\nFriends of Lincoln Cathedral\n[…]\nCapturing Lincoln Cathedral\n[…]\nA history of the choristers of Lincoln Cathedral\n[…]\nDetailed historic record for Lincoln Cathedral"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
        "situacao": "ok",
        "texto": "The Great Pyramid of Giza is the largest of the Egyptian pyramids and the most famous landmark of the Giza pyramid complex in Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. The Great Pyramid served as the tomb of Egyptian Pharaoh Khufu (\"Cheops\"), who ruled during the Fourth Dynasty of the Old Kingdom. It was built c. \n[…]\nGraffiti on the stones included 4 instances of the name \"Khufu\", 11 instances of \"Djedefre\", a year (in reign, season, month and day), measurements of the stone, various signs and marks, and a reference line used in construction, all done in red or black ink.\n[…]\nIn the past the Great Pyramid was dated by its attribution to Khufu alone, putting the construction of the Great Pyramid within his reign, hence dating the pyramid was a matter of dating Khufu and the 4th dynasty. The relative sequence and synchrony of events is the focal point of this method.\n[…]\nGreaves, in 1646, reported the great difficulty of ascertaining a date for the pyramid's construction based on the lacking and conflicting historic sources. Because of the differences in spelling, he did not recognize Khufu on Manetho's king list (as transcribed by Africanus and Eusebius), hence he relied on Herodotus' incorrect account. Summating the duration of lines of succession, Greaves concluded 1266 BC to be the beginning of Khufu's reign.\n[…]\nLudwig Borchardt suggested that the Subterranean Chamber was originally planned to be the burial place for pharaoh Khufu, but that it was abandoned during construction in favour of a chamber higher up in the pyramid.\n[…]\n\"The gang, The-white-crown-of Khnumkhufu-is-powerful\" (Khnum-Khufu is Khufu's full birth name)\n[…]\nA worker's cemetery used at least between Khufu's reign and the end of the Fifth Dynasty was discovered south of the Wall of the Crow by Hawass in 1990.\n[…]\nBuilding the Khufu Pyramid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Lincoln",
        "situacao": "ok",
        "texto": "A Catedral de Lincoln (em inglês:  Lincoln Cathedral; oficialmente denominada The Cathedral Church of the Blessed Virgin Mary of Lincoln, ou apenas St. Mary's Cathedral) é uma histórica catedral anglicana localizada em Lincoln, na Inglaterra e sede do Bispo de Lincoln, da Igreja Anglicana. Ela foi o edifício mais alto do mundo por pouco mais de dois séculos (1311–1549). A ponta da torre central fo\n[…]\nRemigius de Fécamp, primeiro bispo de Lincoln, ordenou a construção da catedral em 1072. Antes disso, a Igreja de Santa Maria em Lincoln era uma igreja-mãe, mas não uma catedral, e a sede da diocese era a Abadia de Dorchester, em Dorchester-on-Thames, Oxfordshire. A primeira Catedral de Lincoln, construída no lugar onde se encontra atualmente, foi finalizada em 1092. Em 1141, a cobertura de madeira foi destruída em um incêndio.\n[…]\nO bispo Alexandre reconstruiu e expandiu a catedral, mas ela foi novamente destruída por um terremoto cerca de quarenta anos mais tarde, em 1185.\n[…]\nA catedral é a terceira mais extensa da Grã-Bretanha (compreendendo a planta baixa), depois da Catedral de São Paulo e da Catedral de Iorque, com medidas de 148 por 83 metros. Ela é o maior edifício de Lincolnshire e até 1549 sua torre era considerada a mais alta torre medieval da Europa. Entretanto, a altura exata tem sido tema de debates. É considerada a segunda igreja mais alta do mundo, com 160 metros de altura.\n[…]\nO acervo da catedral alberga uma das quatro cópias originais da Magna Carta ainda existentes, atualmente exposta no Castelo de Lincoln.\n[…]\nO órgão é um dos mais refinados exemplos das obras de Henry Willis, datado de 1898 (este foi seu último órgão de catedral antes de sua morte, em 1901).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Colossos de Mêmnon",
      "descricao": "Par de estátuas colossais de Amenhotep III diante do seu templo funerário, em Luxor, no Egito."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de um terremoto, um dos Colossos de Mêmnon passou a emitir um som que atraía viajantes romanos. Em que momento do dia isso acontecia?",
    "resposta": "Ao amanhecer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colossi_of_Memnon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colossi_of_Memnon",
        "situacao": "ok",
        "texto": "The Colossi of Memnon (Arabic: el-Colossat or es-Salamat) are two large stone statues of the Pharaoh Amenhotep III, which stand at the front of the ruined Mortuary Temple of Amenhotep III, the largest temple in the Theban Necropolis. They have stood since 1350 BC, and were well known to ancient Greeks and Romans, as well as early modern travelers and Egyptologists.\n[…]\nScholars have debated how the identification of the northern colossus as \"Memnon\" is connected to the Greek name for the entire Theban Necropolis as the Memnonium.\n[…]\nHe was associated with colossi built several centuries earlier, because of the reported cry at dawn of the northern statue (see below), which became known as the Colossus of Memnon. Eventually, the entire Theban Necropolis became generally referred to as the Memnonium making him \"Ruler of the west\" as in the case of the god Osiris who was called chief of the west.\n[…]\nAs a result, many Greco-Roman travelers, drawn by the mystique of the site, would etch their names upon the colossi during their visits, leaving behind inscriptions that reflect their fascination and desire for posterity.\n[…]\nColossal red granite statue of Amenhotep III\n[…]\nLord Curzon: \"The Voice of Memnon\" in Tales of Travel (1923)\n[…]\nRupert T. Gould: \"Three Strange Sounds: The Cry of Memnon\" in Enigmas: Another Book of Unexplained Facts (1929)\n[…]\nArmin Wirsching: \"Excursion on transport and erection of the Colossi\" in: Armin Wirsching: Obelisken transportieren und aufrichten in Aegypten und in Rom (3rd ed. 2013) ISBN 978-3-8334-8513-8\n[…]\nRosenmeyer, Patricia A. The language of Ruins: Greek and Latin Inscriptions on the Memnon Colossus. New York, NY: Oxford University Press, 2018.\n[…]\nColossus of Memnon (Nova/PBS)\n[…]\nDavid Roberts: Statues of Memnon Thebes Decr 4th 1838"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Colossos_de_M%C3%AAmnon",
        "situacao": "ok",
        "texto": "Colossos de Mêmnon é a designação atribuída a duas estátuas gigantescas do faraó Amenófis III da XVIII Dinastia, situadas na necrópole da antiga cidade de Tebas, a oeste da cidade de Luxor, no Egito.\n[…]\nUm sismo ocorrido em 27 a.C., referido por Estrabão, abriu uma fenda no colosso norte. A partir de então todas as manhãs ocorria no local um fenómeno estranho segundo o qual a estátua \"cantaria\". O que realmente sucedia era que a acumulação de humidade durante a noite evaporava com o surgimento dos primeiros raios do sol, emitindo um som, que para Pausânias se assemelhava ao de uma cítara.\n[…]\nNo começo da era cristã os gregos visitaram o local e associaram a estátua norte ao herói Mêmnon, filho de Eos. De acordo com a lenda homérica, este herói, morto na guerra de Troia, recebeu a imortalidade de Zeus, dedicando-se a chamar pela sua mãe todas as manhãs. Em 199 d.C o imperador romano Septímio Severo mandou restaurar a estátua, que a partir de então parou de cantar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Calendário egípcio",
      "descricao": "Calendário civil solar do Egito Antigo, com doze meses de trinta dias e dias extras no fim do ano"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Para os antigos egípcios, o ano novo ideal coincidia com a volta de qual estrela ao céu do amanhecer, perto do início da cheia do Nilo?",
    "resposta": "Sírius",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_calendar",
      "https://en.wikipedia.org/wiki/Sirius"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_calendar",
        "situacao": "ok",
        "texto": "The ancient Egyptian calendar –  a civil calendar –  was a solar calendar with a 365-day year. The year consisted of three seasons of 120 days each, plus a short intercalary 'month' of five epagomenal days that was treated as outside of the year proper. Each season was divided into four months of 30 days. These twelve months were initially numbered within each season but came to also be known by t\n[…]\nThis civil calendar ran concurrently with an Egyptian lunar calendar which was used for some religious rituals and festivals.\n[…]\nCurrent understanding of the earliest development of the Egyptian calendar remains speculative. A tablet from the reign of the First Dynasty pharaoh Djer (c. 3000 BC) was once thought to indicate that the Egyptians had already established a link between the heliacal rising of Sirius (Ancient Egyptian: Spdt or Sopdet, \"Triangle\"; Ancient Greek: Σῶθις, Sôthis) and the beginning of their year, but more recent analysis has questioned whether the tablet's picture refers to Sirius at all.\n[…]\nFollowing Censorinus and Meyer, the standard understanding was that, four years from the calendar's inception, Sirius would have no longer reappeared on the Egyptian New Year but on the next day (I Akhet 2); four years later, it would have reappeared on the day after that; and so on through the entire calendar until its rise finally returned to I Akhet 1 1460 years after the calendar's inception, an event known as \"apocatastasis\".\n[…]\nOwing to the event's extreme regularity, Egyptian recordings of the calendrical date of the rise of Sirius have been used by Egyptologists to fix its calendar and other events dated to it, at least to the level of the four-Egyptian-year periods which share the same date for Sirius's return, known as \"tetraëterides\" or \"quadrennia\".\n[…]\nEgyptian astronomy\n[…]\nEgyptian days\n[…]\nDetailed information about the Egyptian calendars, including lunar cycles"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sirius",
        "situacao": "ok",
        "texto": "Sirius is the brightest star in the night sky, located in the southern constellation of Canis Major. Its name is derived from the Ancient Greek word Σείριος (Latin script: Seirios; lit. 'glowing' or 'scorching'). The star is designated α Canis Majoris, Romanized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa. With a visual apparent magnitude of −1.46, Sirius is almost twice as bright a\n[…]\nThe goddess Sopdet was later syncretized with the goddess Isis, Sah was linked with Osiris (which is by some suggested as a root for the name of Sirius), and Sopdu was linked with Horus. The joining of Sopdet with Isis would allow Plutarch to state that \"The soul of Isis is called Dog by the Greeks\", meaning Sirius worshiped as Isis-Sopdet by Egyptians was named the Dog by the Greeks and Romans.\n[…]\nThe 70 day period of the absence of Sirius from the sky was understood as the passing of Sopdet-Isis and Sah-Osiris through the Egyptian underworld.\n[…]\nAround the year 150 AD, Claudius Ptolemy of Alexandria, an ethnic Greek Egyptian astronomer of the Roman period, mapped the stars in Books VII and VIII of his Almagest, in which he used Sirius as the location for the globe's central meridian. He described Sirius as reddish, along with five other stars, Betelgeuse, Antares, Aldebaran, Arcturus, and Pollux, all of which are at present observed to be of orange or red hue.\n[…]\nThe midnight culmination of Sirius in the northern hemisphere coincides with the beginning of the New Year of the Gregorian calendar during the decades around the year 2000. Over the years, its midnight culmination moves slowly, owing to the combination of the star's proper motion and the precession of the equinoxes.\n[…]\nNASA Astronomy Picture of the Day: Sirius B in x-ray (6 October 2000)\n[…]\nSankey, John. \"Getting Sirius About Time\". www.johnsankey.ca. Archived from the original on 21 February 2020. Retrieved 21 March 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_eg%C3%ADpcio",
        "situacao": "ok",
        "texto": "O calendário egípcio é considerado um dos primeiros calendários conhecidos da história da humanidade e, está ligado com a sua ocupação nas margens do rio Nilo.\n[…]\nHá cerca de 11 mil anos A.C., algumas plantas foram domesticadas na Ásia e a agricultura de pequena escala teve início no Egito em torno de 7000 a.C.Imagina-se que a razão dos egípcios criarem o calendário deva-se à necessidade de se preparar para a época de plantio nas imediações do rio Nilo, ou Aur ou Ar, que significa negro, numa alusão à terra negra trazida pelo rio no regime das cheias. Esta terra é bastante fértil e que serve como adubo natural ao solo.\n[…]\nInicialmente o ano lunar, para os egípcios era composto de 12 aparições da Lua, perfazendo 29,5x12=354 dias.\n[…]\nOs egípcios perceberam que as cheias do rio Nilo coincidiam com o nascimento helieia da estrela Sirius, que fica na constelação do Cão Maior ou Canis Major. À medida que o Sol surgiu no horizonte o brilho da estrela era atenuada. Desta forma, os egípcios alteraram o calendário ajustando-o com este evento, sendo o primeiro dia do ano criando o calendário solar.\n[…]\nSegundo a mitologia, a estrela Sirius é chamada \"Soped\" que representa o deus Osíris, o símbolo da realeza, que representa a vegetação e a vida no Além. Assim sendo, o nascimento helíaco de Sirius repete-se ano após ano com a periodicidade próxima do ano trópico, ou seja, em data fixa durante 3000 anos. De acordo com este calendário, o ano era dividido em 12 meses de 30 dias acrescido de 5 dias especiais para homenagear os deuses Hórus, Seti, Ísis e Osíris.\n[…]\nAbaixo segue a nomenclatura empregada pelos egípcios, comparada com nomes do calendário copta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pirâmide de Miquerinos",
      "descricao": "Menor das três grandes pirâmides de Gizé, construída para o faraó Miquerinos, da Quarta Dinastia"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Pirâmide de Miquerinos, a menor das três grandes pirâmides de Gizé, foi erguida em qual período da história egípcia?",
    "resposta": "Antigo Império",
    "distratores": [
      "Médio Império",
      "Novo Império",
      "Período ptolemaico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_Menkaure"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_Menkaure",
        "situacao": "ok",
        "texto": "The pyramid of Menkaure (Arabic: هرم منقرع, romanized: Haram Manqaraʿ or Arabic: هرم منكاورع, romanized: Haram Minkāwraʿ) is the smallest of the three main pyramids of the Giza pyramid complex, located on the Giza Plateau in the southwestern outskirts of Cairo, Egypt. It is thought to have been built to serve as the tomb of the Fourth Dynasty King Menkaure.\n[…]\nSouth of the pyramid of Menkaure, close to the crude-brick wall enclosing the more intimate precincts of the pyramid itself, are three smaller pyramids, aligned east to west and designated G3-a, G3-b, and G3-c, each accompanied by a small crude-brick temple set against its eastern face and a substructure.\n[…]\nHerodotus, in his Histories (written around the 440s BC), recounts the story of Mycerinus (Menkaure) and describes his pyramid as square and built of \"Ethiopian stone\" up to half its height, but much smaller than that of his father (in reality, his grandfather), twenty feet lower and with sides three plethra wide.\n[…]\nExcavations resumed in 1988 under Mark Lehner, leading in 2000 to the discovery of the pyramid town southeast of Menkaure's valley temple.\n[…]\nMaragioglio, Vito; Rinaldi, Celeste (1967). L'architettura delle piramidi menfite [The Architecture of the Memphite Pyramids] (in Italian). Vol. VI: La Grande Fossa di Zauiet el-Aryan, la Piramide di Micerino, il Mastabat Faraun, la Tomba di Khentkaus. Rapallo: Officine Grafiche Canessa.\n[…]\n\"Egypt to reinstall outer casing of Pyramid of Menkaure\". Egypt Independent. 27 January 2024. Retrieved 3 August 2026.\n[…]\nState Information Service (16 February 2024). \"Review Committee Rejects Restoring Casing Blocks to Menkaure Pyramid of Giza\". Egypt State Information Service. Retrieved 3 August 2026.{{cite web}}:  CS1 maint: ref duplicates default (link)\n[…]\nGuardian's Ancient Egypt: The Pyramid of Menkaure\n[…]\nNOVA Online – Pyramids: Menkaure's Inside Story"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Miquerinos",
        "situacao": "ok",
        "texto": "Pirâmide de Miquerinos é a menor em tamanho e a terceira dentre as mais famosas pirâmides do mundo antigo, as Pirâmides de Gizé. A pirâmide foi feita para ser tumba do faraó Miquerinos, filho do faraó Quéfren e o quinto soberano da Quarta Dinastia.\n[…]\nA pirâmide de Miquerinos tinha uma altura original de 65,5 metros e era a menor das três principais pirâmides da necrópole de Gizé. Ela agora tem 61 m de altura, com uma base de 108,5 m. Seu ângulo de inclinação é de aproximadamente 51°20′25″. Foi construída em calcário e granito de Aswan. A porção superior foi revestida da maneira normal com calcário de Tora. Parte do granito foi deixada bruta.\n[…]\nHavia uma inscrição no templo mortuário que dizia que \"o construía (o templo) como monumento a seu pai, rei do alto e baixo Egito\". Durante as escavações dos templos, Reisner encontrou um grande número de estátuas, principalmente de Miquerinos, sozinhas e como membro de um grupo. Tudo isso foi esculpido no estilo naturalista do Império Antigo, com um alto grau de detalhe evidente.\n[…]\nMais fundo na pirâmide, Vyse encontrou um sarcófago de basalto, descrito como bonito e rico em detalhes, com uma cornija corajosa e saliente, que continha os ossos de uma jovem. Infelizmente, esse sarcófago está agora no fundo do mar Mediterrâneo, afundando em 13 de outubro de 1838, com o navio Beatrice, enquanto ela caminhava entre Malta e Cartagena, a caminho da Grã-Bretanha. Foi um dos poucos sarcófagos do Império Antigo a sobreviver no período moderno.\n[…]\nVerner, Miroslav (2001). The Pyramids: The Mystery, Culture and Science of Egypt's Great Monuments. New York: Grove Press. ISBN 978-0-8021-1703-8\n[…]\nMedia relacionados com Pirâmide de Miquerinos no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Paleta de Narmer",
      "descricao": "Placa de pedra entalhada do início da história egípcia que mostra o rei Narmer com as coroas do Alto e do Baixo Egito"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Paleta de Narmer, que mostra um rei usando as coroas do Alto e do Baixo Egito, data de cerca de quando?",
    "resposta": "3100 antes de Cristo",
    "distratores": [
      "2000 antes de Cristo",
      "1300 antes de Cristo",
      "500 antes de Cristo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Narmer_Palette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Narmer_Palette",
        "situacao": "ok",
        "texto": "The Narmer Palette, also known as the Great Hierakonpolis Palette or the Palette of Narmer, is a significant Egyptian archaeological find, dating from about the 31st century BC, belonging, at least nominally, to the category of cosmetic palettes. It contains some of the earliest hieroglyphic inscriptions ever found. The tablet is thought by some to depict the unification of Upper and Lower Egypt u\n[…]\nAttached to the belt worn by Narmer are four beaded tassels, each capped with an ornament in the shape of the head of the goddess Hathor. They also are the same heads as those that adorn the top of each side of the palette. At the back of the belt is attached a long fringe representing a bull's tail.\n[…]\nThe Narmer Palette is featured in the 2009 film Watchmen as one of the Egyptian objects that are present in Ozymandias's office. The Australian author Jackie French used the Palette, and recent research into Sumerian trade routes, to create her historical novel Pharaoh (2007). The Palette is featured in manga artist Yukinobu Hoshino's short story El Alamein no Shinden. The Palette is also featured in The Kane Chronicles by Rick Riordan where the palette is fetched by a magical shawabti servant.\n[…]\nThe Narmer Palette is a main plot point in Lincoln Child’s The Third Gate novel, in which they attempt to find the tomb of king Narmer in the Sudd.\n[…]\nKinnaer, Jacques (Spring 2004). \"What is Really Known About the NARMER PALETTE?\". KMT: A Modern Journal of Ancient Egypt. 15 (1). ISSN 1053-0827. OCLC 193808645.\n[…]\nChisholm, Hugh, ed. (1911). \"Narmer Palette in the Ancient Egypt article\". Encyclopædia Britannica (11th ed.). Cambridge University Press. At The Early Kings (B) and Plate II. fig. 23.\n[…]\n\"The Narmer Palette\". reshafim.org.il. 2019-02-28. Archived from the original on 2019-04-05. Retrieved 2024-07-08.\n[…]\n\"Narmer Palette, 3D Model\". Sketchfab. 2021-02-13. Retrieved 2024-07-08."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paleta_de_Narmer",
        "situacao": "ok",
        "texto": "A Paleta de Narmer é uma placa de siltito com 63.5 cm de altura, decorada em baixo-relevo, contendo uma inscrição com o nome do faraó Narmer, a quem se atribui a unificação do Alto e Baixo Egito. Ela foi encontrada pelos arqueólogos britânicos James E. Quibell e Frederick W. Green, no final do século XIX, em Hieracômpolis, na região do Alto Egito, no interior do que eles denominaram Depósito Princ\n[…]\nDatada de cerca de 3100 a.C., pertence formalmente à categoria de paletas para cosméticos, embora sua grande dimensão e peso sugiram um uso ritual ou votivo. Sua decoração em baixo-relevo é comumente interpretada como uma representação da unificação do Alto e Baixo Egito sob o faraó Narmer (possivelmente outro nome para Menés ou um antecessor seu), com alguns dos mais antigos hieróglifos actualmente conhecidos.\n[…]\nA zona intermédia superior apresenta do lado esquerdo Narmer usando a coroa vermelha (deshert) do Baixo Egito, sendo ele a figura de maiores dimensões da composição.\n[…]\nA zona intermédia inferior apresenta dois serpopardos cujos pescoços se entrelaçam formando um círculo no centro da representação. Estes animais são domados por duas figuras totalmente representadas de lado (vista utilizada para figuras de menor importância) e crê-se simbolizarem a união entre o Alto e o Baixo Egito. A representação de pares simétricos de animais sendo domados pode ter sido adaptada da Mesopotâmia, talvez da iconografia Elamita.\n[…]\nA zona intermédia é a de maior destaque desta face e simboliza o poder e a vitória do faraó unificador, Narmer, que uma vez mais é representado como a figura de maiores dimensões e que usa, nesta cena, a coroa branca (hedjet) do Alto Egito e a cauda taurina, peça usada em acontecimentos solenes. Ajoelhado aos seus pés, do lado direito, está uma figura agarrada pelos cabelos simbolizando o inimigo e a derrota das regiões conquistadas.\n[…]\nNarmer Catalog (Narmer Palette)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Templo de Edfu",
      "descricao": "Templo dedicado ao deus Hórus na cidade de Edfu, no sul do Egito, um dos mais bem conservados do país"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O templo de Hórus em Edfu, um dos mais bem conservados do Egito, foi construído na época de qual dinastia?",
    "resposta": "Dinastia ptolemaica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Temple_of_Edfu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temple_of_Edfu",
        "situacao": "ok",
        "texto": "The Temple of Edfu is an Egyptian temple located on the west bank of the Nile in Edfu, Upper Egypt. The city was known in the Hellenistic period in Koine Greek as Ἀπόλλωνος πόλις and in Latin as Apollonopolis Magna, after the chief god Horus, who was identified as Apollo under the interpretatio graeca. It is one of the best preserved shrines in Egypt. The temple was built in the Ptolemaic Kingdom \n[…]\nIn particular, the Temple's inscribed building texts \"provide details of its construction, and also preserve information about the mythical interpretation of this and all other temples as the Island of Creation.\" There are also \"important scenes and inscriptions of the Sacred Drama which related the age-old conflict between Horus and Seth.\" They are translated by the Edfu-Project.\n[…]\nEdfu was one of several temples built during the Ptolemaic Kingdom, including the Dendera Temple complex, Esna, the Temple of Kom Ombo, and Philae. Its size reflects the relative prosperity of the time. The present temple, which was begun \"on 23 August 237 BC, initially consisted of a pillared hall, two transverse halls, and a barque sanctuary surrounded by chapels.\" The building was started during the reign of Ptolemy III Euergetes and completed in 57 BC under Ptolemy XII Auletes.\n[…]\nThe snakelike Apophis tried to impede the creation. Horus shuddered in fear, yet a harpoon, one of the forms of Ptah, came to the rescue. The enemy was defeated and the creation continued. A falcon formed the sky dome, its wings reaching from horizon to horizon, and the sun began its daily cycle. Then the first temple of Edfu was designed by the gods Thoth and Seshat, one responsible for wisdom, the other for scripture.\n[…]\nEdfu South Pyramid\n[…]\nKurth, Dieter. The Temple of Edfu. 2004. American University in Cairo Press. ISBN 977 424 764 7\n[…]\nÉmile Gaston Chassinat, Maxence de Rochemonteix, Le temple d'Edfou, 14 vols. (1892–1934)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Edfu",
        "situacao": "ok",
        "texto": "O Templo de Edfu é um templo egípcio situado na margem oeste do Nilo em Edfu, Alto Egito.\n[…]\nO templo atual, que foi iniciado \"em 23 de agosto de 237 a.C., inicialmente consistia em um salão de pilares, dois salões transversais e um santuário cercado por capelas\". O edifício foi iniciado durante o reinado de Ptolomeu III Euergetes e concluído em 57 a.C. sob Ptolomeu XII Auletes.\n[…]\nO Templo de Edfu está quase intacto e um bom exemplo de um antigo templo egípcio. Seu significado arqueológico e alto estado de preservação tornou-o um centro turístico no Egito e uma parada frequente para os muitos barcos fluviais que cruzam o Nilo. Em 2005, o acesso ao templo foi renovado com a adição de um centro de visitantes e estacionamento pavimentado. Um sofisticado sistema de iluminação foi adicionado no final de 2006 para permitir visitas noturnas.\n[…]\nO templo de Edfu é o maior templo dedicado a Hórus e Hathor de Dendera. Foi o centro de vários festivais sagrados para Hórus. Todos os anos, \"Hathor viajava para o sul de seu templo em Dendera para visitar Hórus em Edfu, e este evento marcando seu casamento sagrado foi a ocasião de um grande festival e peregrinação.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Retratos de Faium",
      "descricao": "Retratos realistas pintados sobre tábuas de madeira e colocados sobre o rosto de múmias no Egito"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os retratos de Faium, rostos realistas pintados em madeira e postos sobre múmias, são de qual período da história do Egito?",
    "resposta": "Período romano",
    "distratores": [
      "Antigo Império",
      "Novo Império",
      "Período de Amarna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fayum_mummy_portraits"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fayum_mummy_portraits",
        "situacao": "ok",
        "texto": "Mummy portraits or Fayum mummy portraits are a type of naturalistic encaustic portrait typically painted on wooden boards attached to the mummies of upper class individuals living in Egypt during the Roman period. They belong to the tradition of panel painting, one of the most highly regarded forms of art in the Classical world. The Fayum portraits are the only large body of art from that traditio\n[…]\nThere is evidence of a religious crisis at the same time. This may not be as closely connected with the rise of Christianity as previously assumed. (The earlier suggestion of a 4th-century end to the portraits would coincide with the widespread distribution of Christianity in Egypt. Christianity also never banned mummification.) An increasing neglect of Egyptian temples is noticeable during the Roman imperial period, leading to a general drop in interest in all ancient religions.\n[…]\nAlthough interest in ancient Egypt steadily increased after that period, further finds of mummy portraits did not become known before the early 19th century. The provenance of these first new finds is unclear; they may come from Saqqara as well, or perhaps from Thebes. In 1820, the Baron of Minotuli acquired several mummy portraits for a German collector, but they became part of a whole shipload of Egyptian artifacts lost in the North Sea.\n[…]\nOnce again, a long period elapsed before more mummy portraits came to light. In 1887, Daniel Marie Fouquet heard of the discovery of numerous portrait mummies in a cave. He set off to inspect them some days later, but arrived too late, as the finders had used the painted plaques for firewood during the three previous cold desert nights. Fouquet acquired the remaining two of what had originally been fifty portraits.\n[…]\nDetailed discussion of mummy portraits (in English)\n[…]\nDetailed discussion of mummy portraits (in French)\n[…]\nGallery of Fayum Mummy Portraits at Flickr"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Retratos_de_Faium",
        "situacao": "ok",
        "texto": "Os Retratos de Faium (Fayyum, Faiyum ou Fayum) é a expressão moderna usada para definir um tipo de retrato realista pintado sobre madeira (carvalho, cedro ou cipreste) em múmias egípcias do Egito romano. Os retratos são inovações que datam da época da ocupação romana do Egito, e eram comuns desde o delta do Nilo até a Núbia.\n[…]\nFazem parte da tradição da pintura de painéis, que continuou na arte bizantina (iconografia) e na arte copta. Em termos de tradição artística, os retratos derivam mais da arte greco-romana do que da antiga arte egípcia e isso decorre da grande quantidade de imigrantes gregos no Egipto ptolemaico. Sob o domínio greco-romano, o Egito tinha várias colônias gregas, a maioria delas concentradas em Alexandria.\n[…]\nOutra dessas colônias era Faium, que também abrigava habitantes de outras partes do Egito, como o delta do Nilo e Mênfis.\n[…]\nDois tipos de retratos podem ser diferenciados pela técnica: os que utilizam a encáustica e outros que usam a têmpera. A maioria dos retratos foi encontrada na necrópole de Faium.\n[…]\nHoje, os retratos de Faium podem ser encontrados em importantes museus arqueológicos do mundo, tais como o Museu Britânico, o Museu Metropolitano de Arte em Nova Iorque e o Louvre em Paris.\n[…]\nOs hábitos relacionados aos enterros na dinastia ptolemaica seguiam as antigas tradições. Os corpos dos membros das classes altas eram mumificados, colocados em caixões decorados e era também colocada uma máscara para cobrir a cabeça. Os gregos da região praticavam a tradição da cremação. Isso reflete a situação geral do Egito no período helenista: os governantes se auto-proclamavam faraós, mas incorporavam apenas poucos hábitos locais, seguindo o estilo de vida grego.\n[…]\nTudo mudou com a chegada dos romanos. Em poucas gerações, todas as tradições gregas desapareceram.\n[…]\nHistória da Pintura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Pedra de Roseta",
      "descricao": "Estela de granodiorito com um decreto de 196 antes de Cristo em três escritas, chave para a decifração dos hieróglifos"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desde 1802, a Pedra de Roseta, chave para decifrar os hieróglifos, fica exposta em qual museu?",
    "resposta": "Museu Britânico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosetta_Stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosetta_Stone",
        "situacao": "ok",
        "texto": "The Rosetta Stone is a stele of granodiorite inscribed with three versions of a decree issued in 196 BC during the Ptolemaic dynasty of Egypt, on behalf of King Ptolemy V Epiphanes. The top and middle texts are in Ancient Egyptian using hieroglyphic and Demotic scripts, respectively, while the bottom is in Ancient Greek. The decree has only minor differences across the three versions, making the R\n[…]\nMenou quickly claimed the stone, too, as his private property.\n[…]\nYoung's new insights were prominent in the long article \"Egypt\" that he contributed to the Encyclopædia Britannica in 1819. He could make no further progress, however.\n[…]\nFrom this point, the stories of the Rosetta Stone and the decipherment of Egyptian hieroglyphs diverge, as Champollion drew on many other texts to develop an Ancient Egyptian grammar and a hieroglyphic dictionary which were published after his death in 1832.\n[…]\nDacier, but incompletely, according to early British critics: for example, James Browne, a sub-editor on the Encyclopædia Britannica (which had published Young's 1819 article), anonymously contributed a series of review articles to the Edinburgh Review in 1823, praising Young's work highly and alleging that the \"unscrupulous\" Champollion plagiarised it. These articles were translated into French by Julius Klaproth and published in book form in 1827.\n[…]\nThe term Rosetta stone has been also used idiomatically to denote the first crucial key in the process of decryption of encoded information, especially when a small but representative sample is recognised as the clue to understanding a larger whole. According to the Oxford English Dictionary, the first figurative use of the term appeared in the 1902 edition of the Encyclopædia Britannica relating to an entry on the chemical analysis of glucose. Another use of the phrase is found in H. G.\n[…]\n\"How the Rosetta Stone works\". Howstuffworks.com. 11 December 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_de_Roseta",
        "situacao": "ok",
        "texto": "A Pedra de Roseta é um fragmento de uma estela de granodiorito erigida no Egito Ptolemaico, cujo texto foi crucial para a compreensão moderna dos hieróglifos egípcios e deu início a um novo ramo do conhecimento, a egiptologia. Frequentemente descrita como \"a pedra mais famosa do mundo\", sua inscrição guarda um decreto de um conselho de sacerdotes estabelecendo o culto ao faraó Ptolemeu V, no prime\n[…]\nTurner transportou a Pedra para a Inglaterra a bordo da fragata francesa capturada HMS Egyptienne, que ancorou em Portsmouth em fevereiro de 1802. Suas ordens eram entregá-la, junto com outras antiguidades, a Jorge III do Reino Unido. O monarca, representado por seu secretário de guerra, ordenou que fosse exposta no Museu Britânico.\n[…]\nDe acordo com os registros do museu, a Pedra de Roseta é o seu objeto mais visitado, e por várias décadas uma imagem sua foi o cartão postal mais vendido no museu.\n[…]\nDesde 2004 a Pedra está em exibição em uma caixa de vidro, especialmente construída no centro da Galeria de Escultura Egípcia. Uma réplica da Pedra de Roseta é exibida na Biblioteca do Rei no Museu Britânico, desprotegida e livre para ser tocada, tal qual teria sido exibida aos visitantes do início do século XIX.\n[…]\nMais tarde ele sugeriu que poderia abandonar sua reivindicação pelo retorno permanente da Pedra de Roseta, caso o Museu Britânico emprestasse a Pedra ao Egito por três meses para a abertura do Grande Museu Egípcio de Gizé, em 2013, mas por fim reiterou que um eventual empréstimo não afetaria seu pedido de repatriação definitiva.\n[…]\nComo John Ray observou, \"pode chegar o dia em que a Pedra tenha passado mais tempo no Museu Britânico do que em Roseta\". Existe uma forte oposição dos museus dos países desenvolvidos à repatriação de objetos de importância cultural internacional, como a Pedra de Roseta.\n[…]\nPedra Moabita\n[…]\n«Captura tridimensional da Pedra de Roseta» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pedra de Roseta",
      "descricao": "Estela de granodiorito com um decreto de 196 antes de Cristo em três escritas, chave para a decifração dos hieróglifos"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Pedra de Roseta traz o mesmo decreto em hieróglifos, em grego antigo e em qual terceira escrita?",
    "resposta": "Demótico",
    "distratores": [
      "Hierático",
      "Aramaico",
      "Latim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosetta_Stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosetta_Stone",
        "situacao": "ok",
        "texto": "The Rosetta Stone is a stele of granodiorite inscribed with three versions of a decree issued in 196 BC during the Ptolemaic dynasty of Egypt, on behalf of King Ptolemy V Epiphanes. The top and middle texts are in Ancient Egyptian using hieroglyphic and Demotic scripts, respectively, while the bottom is in Ancient Greek. The decree has only minor differences across the three versions, making the R\n[…]\nThe Rosetta Stone is 112.3 cm (3 ft 8 in) high at its highest point, 75.7 cm (2 ft 5.8 in) wide, and 28.4 cm (11 in) thick. It weighs approximately 760 kilograms (1,680 lb). It bears three inscriptions: the top register in Ancient Egyptian hieroglyphs, the second in the Egyptian Demotic script, and the third in Ancient Greek.\n[…]\nThe hieroglyphic text is Middle Egyptian, a form of the Egyptian language that had been obsolete for centuries at the time the stone was inscribed, and specifically \"neo-Middle Egyptian\", a deliberately archaic imitation of the original Middle Egyptian language that was used in formal religious texts. The Demotic text more closely represents the stage of Egyptian that was spoken in Ptolemaic times.\n[…]\nHe also noticed that these characters resembled the equivalent ones in the demotic script, and went on to note as many as 80 similarities between the hieroglyphic and demotic texts on the stone, an important discovery because the two scripts were previously thought to be entirely different from one another. This led him to deduce correctly that the demotic script was only partly phonetic, also consisting of ideographic characters derived from hieroglyphs.\n[…]\nDuring the early 1850s, German Egyptologists Heinrich Brugsch and Max Uhlemann produced revised Latin translations based on the demotic and hieroglyphic texts. The first English translation followed in 1858, the work of three members of the Philomathean Society at the University of Pennsylvania."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_de_Roseta",
        "situacao": "ok",
        "texto": "A Pedra de Roseta é um fragmento de uma estela de granodiorito erigida no Egito Ptolemaico, cujo texto foi crucial para a compreensão moderna dos hieróglifos egípcios e deu início a um novo ramo do conhecimento, a egiptologia. Frequentemente descrita como \"a pedra mais famosa do mundo\", sua inscrição guarda um decreto de um conselho de sacerdotes estabelecendo o culto ao faraó Ptolemeu V, no prime\n[…]\nA Pedra de Roseta tem atualmente 112,3 centímetros de altura em seu ponto mais alto, 75,7 centímetros de largura e 28,4 centímetros de espessura, e pesa aproximadamente 760 quilogramas. Sua superfície frontal é polida e traz três inscrições sucessivas: no topo um registro em hieróglifos egípcios, no centro um outro em egípcio demótico e, embaixo, um último registro em grego antigo.\n[…]\nPor exemplo, o Decreto de Canopo, emitido em 238 AEC, durante o reinado de Ptolemeu III Evérgeta, foi inscrito em uma estela com 219 centímetros de altura e 82 centímetros de largura, com 36 linhas de texto hieroglífico, 73 de egípcio demótico e 74 de grego antigo, e apresenta textos com extensões semelhantes.\n[…]\nUma segunda data é mencionada nos textos em grego e egípcio hieroglífico, que corresponde a 27 de novembro de 197 AEC, dia da coroação de Ptolemeu. A inscrição em egípcio demótico conflita com as datas em grego antigo e egípcio hieroglífico, enumerando dias consecutivos em março para o decreto e o aniversário. Embora os motivos para estas discrepâncias permaneçam incertos, há consenso de que o decreto data de 196 AEC e tinha como intenção restabelecer o domínio dos reis ptolemaicos sobre o Egito.\n[…]\nRichard Parkinson ressalta que a linguagem da versão hieroglífica se desvia do formalismo de textos egípcios mais antigos e, ocasionalmente, usa uma linguagem mais próxima da do registro demótico, que os sacerdotes usavam mais comumente na vida cotidiana.\n[…]\nLista de sistemas de escrita\n[…]\nPedra Moabita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Batalha de Kadesh",
      "descricao": "Batalha travada por volta de 1274 antes de Cristo entre o exército de Ramsés II e o Império Hitita, junto ao rio Orontes"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Por volta de 1274 antes de Cristo, Ramsés Segundo enfrentou os hititas na Batalha de Kadesh, às margens do rio Orontes. Em que país atual?",
    "resposta": "Síria",
    "distratores": [
      "Turquia",
      "Iraque",
      "Israel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Battle_of_Kadesh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Kadesh",
        "situacao": "ok",
        "texto": "The Battle of Kadesh was a major military conflict in the early 13th century BC, between the attacking Ramesses II of the Egyptian Empire and defending Muwatalli II of the Hittite Empire. In the previous year, Ramesses II had invaded the neighboring province of Amurru. At the Orontes River, the armies engaged each other just upstream of Lake Homs and near the stronghold of Kadesh, along what is to\n[…]\nAfter expelling the Hyksos' 15th Dynasty around 1550 BC, the rulers of the New Kingdom of Egypt became more aggressive in reclaiming control of their state's borders. Thutmose I, Thutmose III, and his son and coregent Amenhotep II fought battles from Megiddo north to the Orontes, including conflict with Kadesh.\n[…]\nThe immediate antecedents to the Battle of Kadesh were the early campaigns of Ramesses II into Canaan. In the fourth year of his reign, he marched north into Syria to recapture Amurru or as a probing effort to confirm his vassals' loyalty and explore the terrain for possible battlegrounds. In the spring of the fifth year of his reign, in May 1274 BC, Ramesses II launched a campaign from his capital Pi-Ramesses (modern Qantir).\n[…]\nThey have their weapons of war at the ready. They are more numerous than the grains of sand on the beach. Behold, they stand equipped and ready for battle behind the old city of Kadesh.\"\n[…]\nFollowing the battle, the Hittites were routed, but they held on to Kadesh.\n[…]\nTrevor Bryce states that both sides claimed victory. Ramesses got the upper-hand at the end of Kadesh, but failed to retake Amurru and Qadesh which the dispute were about. Essentially describing an Egyptian tactical victory at Kadesh's battlefield by preventing the Hittites from defeating the Egyptians, but a Hittite strategic victory as it kept control over the disputed territory.\n[…]\nThe Battle of Kadesh in the context of Hittite history (hittites.info)\n[…]\nBattle of Kadesh (historynet.com)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Batalha_de_Cades",
        "situacao": "ok",
        "texto": "A Batalha de Cades (ou Cadexe, Kadesh, Cadech ou Qadesh) travou-se entre o Egito, sob a égide de Ramessés II, e o Império Hitita, comandado por Muatal II, às margens do rio Orontes, junto à cidade-fortaleza de Cades (localizada na moderna Síria).\n[…]\nVindo da Fenícia, Ramessés II penetrou no vale do Orontes, marchando rio abaixo. Iludido pelo relato de prisioneiros hititas (que se deixaram capturar), ele acreditou que Muatal ainda se encontrava em Alepo, seguindo rumo a Cades. Foi então que planejou capturar a fortaleza, antecipando-se à chegada das forças hititas. Imprudente,  avançou acompanhado apenas por sua guarda pessoal e seguido de perto pela divisão Ra, enquanto o grosso do exército, mais lento, ficava para trás.\n[…]\nApesar dos óbvios exageros do Poema de Pentaur, a verdade é que Ramessés II e os que estavam ao seu lado realizaram prodígios de valor, lutando admiravelmente. Pode-se dizer que foi a coragem e o destemor deles, ao se lançarem contra o inimigo muito mais numeroso, adjunto ao fato de que os Hititas perderam um precioso tempo pilhando os ouros do acampamento egípcio, que acabou revertendo o resultado dessa batalha que poderia ter se tornado um dos maiores desastres militares da história do Egito.\n[…]\nEm termos estratégicos, a Batalha de Cades terminou sendo um \"empate técnico\". Os exércitos empataram em combate mas os hititas impediram o avanço egípcio no vale do Orontes e ainda expandiram seus territórios sobre reinos antes egípcios. Portanto a guerra, como um todo, teve triunfo Hitita. No final, os dois impérios reconheceram (como nos tempos de Seti I) possuir forças equivalentes, e que, portanto, nenhum dos dois podia aspirar destruir o outro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tratado de paz egípcio-hitita",
      "descricao": "Acordo de paz firmado por volta de 1259 antes de Cristo entre Ramsés II e o rei hitita Hatusil III"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Uma réplica ampliada do tratado de paz entre Ramsés Segundo e os hititas fica exposta na sede de qual organização internacional, em Nova York?",
    "resposta": "Organização das Nações Unidas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian%E2%80%93Hittite_peace_treaty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian%E2%80%93Hittite_peace_treaty",
        "situacao": "ok",
        "texto": "The Egyptian–Hittite peace treaty, also known as the Eternal Treaty or the Silver Treaty, was concluded between Ramesses II of the Egyptian Empire and Ḫattušili III of the Hittite Empire around 1259 BC. It is the oldest known surviving peace treaty (though the much older treaty between Ebla and Abarsal may be the earliest recorded diplomatic treaty in human history) and the only one from the ancie\n[…]\nThough it is sometimes called the Treaty of Kadesh, the text itself does not mention the Battle of Kadesh, which took place around 1274 BC. Both sides of the treaty have been the subject of intensive scholarly study. Despite being agreed upon by the Egyptian pharaoh and the Hittite king, it did not bring about an enduring peace; in fact, \"an atmosphere of enmity between Hatti and Egypt lasted many years\" until the eventual treaty of alliance was signed.\n[…]\nThe Hittite treaty was discovered by Hugo Winckler in 1906 at Boğazkale in Ottoman Empire. In 1921, Daniel David Luckenbill, crediting Bruno Meissner for the original observation, noted that \"this badly broken text is evidently the Hittite version of the famous battle of Kadesh, described in prose and verse by the scribes of Ramses II\".\n[…]\nThe peace treaty of Ramesses II and Hattušiliš III is known as one of the most important official \"international\" peace treaties between two great powers from the ancient Near East because its exact wording is known to us. Divided into points, the treaty flows between the Egyptians and Hittites as each side makes pledges of brotherhood and peace to the other in terms of the objectives.\n[…]\nBy furthering their bonds of friendship through marriage, the Hittites and Egyptians maintained a mutually-beneficial peace that would exist between them until the fall of Hatti to Assyria, nearly a century later.\n[…]\nPritchard 1969, pp. 199–201: \"Treaty between the Hittites and Egypt\" – via Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Cades",
        "situacao": "ok",
        "texto": "O Tratado Egípcio-Hitita, usualmente designado por Tratado de Cades ou de Cadexe, foi um tratado de paz celebrado entre o faraó egípcio Ramessés II e o rei hitita Hatusil III c. 1 259 a.C., que marcou o fim oficial das guerras entre as duas grandes potências do Médio Oriente, que se seguiram aos conflitos armados de grandes proporções que culminaram na célebre batalha de Cades, travada 16 anos ant\n[…]\nEste período é notável nas relações entre os hititas e os egípcios porque apesar das hostilidades entre as duas nações e das conquistas na Síria, Cades foi o último confronto militar direto oficial entre as duas potências. Alguns historiadores consideram que este período pode por isso ser considerado uma \"guerra fria\" entre Hati e o Egito.\n[…]\nDuas das tabuletas estão atualmente em exposição na secção do Oriente dos Museus Arqueológicos de Istambul. A terceira está exposta nos Museus Estatais de Berlim. Uma cópia do tratado está exposta em posição de destaque numa parede da Sede das Nações Unidas em Nova Iorque.\n[…]\nOutros incentivos ao tratado eram o fim da pressão sobre as finanças das onerosas guerras com Hati e o facto de que o aumento da segurança dos interesses egípcios na Síria dava a Ramessés a oportunidade de clamar a sua \"derrota\" dos hititas. Como tinha sido Hatusil a aproximar-se de Ramessés, o faraó é representado no Ramesseum recebendo os hititas numa atitude de submissão.\n[…]\nEsta agressão tornou mais tensas as relações entre os dois países e, mais importante que isso, os assírios davam sinais de se estarem a colocar em posição para lançarem mais ataques no lado ocidental do rio Eufrates. O perigo de uma invasão assíria foi uma das motivos mais fortes que levou os hititas a negociar com os egípcios. Nos termos do tratado, os egípcios comprometiam-se a juntarem-se aos seus aliados hititas se a Assíria invadisse o território de Hati.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Barco de Quéops",
      "descricao": "Embarcação de madeira desmontada e enterrada num fosso junto à Grande Pirâmide de Gizé, achada em 1954"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O barco de Quéops, enterrado desmontado ao pé da Grande Pirâmide, foi feito principalmente com cedro trazido de qual região?",
    "resposta": "Líbano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Khufu_ship"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Khufu_ship",
        "situacao": "ok",
        "texto": "The Khufu ship is an intact full-size solar barque from ancient Egypt. It was sealed into a pit alongside the Great Pyramid of pharaoh Khufu around 2500 BC, during the Fourth Dynasty of the ancient Egyptian Old Kingdom. Like other buried Ancient Egyptian ships, it was part of the extensive grave goods intended for use in the afterlife. The Khufu ship is one of the oldest, largest, best preserved v\n[…]\nThe ship was preserved in the Giza Solar boat museum, but was moved to the Grand Egyptian Museum in August 2021.\n[…]\nThe history and function of the ship is not precisely known. It is of the type known as a \"solar barge\", a ritual vessel believed by ancient Egyptians to carry the resurrected king across the heavens with the sun god Ra.\n[…]\nHowever, it bears some signs of having been used in water, and it is possible that the ship was either a funerary \"barge\" used to carry the king's embalmed body from Memphis to Giza, or even that Khufu himself used it as a \"pilgrimage ship\" to visit holy places and that it was then buried for him to use in the afterlife. It contained no bodies, unlike northern European ship burials.\n[…]\nThe Khufu ship was put on public display in a specially built museum at the Giza pyramid complex in 1982; the museum was a small modern facility resting alongside the Great Pyramid. The first floor of the museum took the visitor through visuals, photographs, and writings on the process of excavating and restoring the boat. The ditch where the main boat was found was incorporated into the museum's ground floor design.\n[…]\nIn August 2021, the ship was relocated to the Grand Egyptian Museum.\n[…]\nNancy Jenkins (1980). The boat beneath the pyramid: King Cheops' royal ship  ISBN 0-03-057061-1\n[…]\nThe Solar Barque, Nova Online\n[…]\nWeb archive backup: Ships of the World: An Historical Encyclopedia – \"Cheops ship\"\n[…]\nA Visitors Perspective of the Khufu Boat Museum\n[…]\nKhufu ship free high resolution images"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barca_funer%C3%A1ria_de_Qu%C3%A9ops",
        "situacao": "ok",
        "texto": "A barca funerária de Quéops é um navio de tamanho completo e intacto do Antigo Egito que foi selado em um poço no complexo da Necrópole de Gizé ao pé da Grande Pirâmide em torno de 2 500 a.C.. O navio agora é preservado no Museu da Barca Solar de Gizé. O navio foi quase certamente construído para Quéops, o segundo faraó da IV dinastia egípcia do Império Antigo.\n[…]\nO barco era parte de um par de embarcações redescobertos em 1954 por Kamal el-Mallakh - que ficou intocado desde que foi selado em um poço cinzelado fora do planalto de Gizé. Foi construído em grande parte de tábuas de cedro-do-líbano, usando espigas de Paliurus spina-christi. O navio foi reconstruído a partir de 1.224 peças que tinham sido colocados em uma ordem lógica, desmontados na cova ao lado da pirâmide.\n[…]\nNo entanto, ele tem alguns sinais de ter sido usado na água e é possível que o navio era ou uma \"barca\" funerária usada para transportar o corpo embalsamado do rei de Mênfis para Gizé, ou mesmo que o próprio Quéops pode tê-lo usado como um \"navio de peregrinação\" para visitar lugares sagrados e que foi depois enterrado com ele uso na vida após a morte.\n[…]\nO navio de Quéops está exposto ao público desde 1982 em um museu especialmente construído para ele no complexo da Necrópole de Gizé. Sua descoberta foi descrita como uma das maiores descobertas do Egito Antigo no documentário de Zahi Hawass, Os Dez Grandes Descobrimentos do Egito.\n[…]\nBarca solar\n[…]\nNancy Jenkins – The boat beneath the pyramid: King Cheops' royal ship (1980) ISBN 0-03-057061-1\n[…]\nPaul Lipke – The royal ship of Cheops: a retrospective account of the discovery, restoration and reconstruction. Based on interviews with Hag Ahmed Youssef Moustafa (Oxford: B.A.R., 1984) ISBN 0-86054-293-9\n[…]\nMedia relacionados com Barca funerária de Quéops no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Escriba Sentado",
      "descricao": "Estátua egípcia de calcário pintado do Antigo Império que mostra um escriba de pernas cruzadas, com olhos incrustados"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A estátua do Escriba Sentado, de olhos incrustados que parecem acompanhar o visitante, é uma das joias de qual museu?",
    "resposta": "Museu do Louvre",
    "distratores": [
      "Museu Britânico",
      "Museu Egípcio do Cairo",
      "Museu Metropolitano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Seated_Scribe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Seated_Scribe",
        "situacao": "ok",
        "texto": "The sculpture of the Seated Scribe or Squatting Scribe  is a famous work of ancient Egyptian art. It represents a figure of a seated scribe at work. The sculpture was discovered at Saqqara, north of the alley of sphinxes leading to the Serapeum of Saqqara, in 1850, and dated to the period of the Old Kingdom, from either the 5th Dynasty, c. 2450–2325 BCE or the 4th Dynasty, 2620–2500 BCE. It is now\n[…]\nThis painted limestone sculpture represents a man in a seated position, presumably a scribe. The figure is dressed in a white kilt stretched to its knees. It is holding a half rolled papyrus. Perhaps the most striking part aspect of the figure is its face. Its realistic features stand in contrast to perhaps more rigid and somewhat less detailed body. The hands, fingers, and fingernails of the sculpture are delicately modeled. The hands are in writing position.\n[…]\nThe sculpture of the seated scribe was discovered in Saqqara on 19 November 1850, to the north of the Serapeum's line of sphinxes by French archeologist Auguste Mariette. The precise location remains unknown, as the document describing these excavations was published posthumously and the original excavation journal has been lost.\n[…]\nThe Seated Scribe was made around 2450–2325 BCE; it was discovered near a tomb made for an official named Kai and is sculpted from limestone. Many pharaohs and high-ranking officials would have their servants depicted in some form of image or sculpture so that when they went to the afterlife they would be able to utilize their skills to help them in their second life. The scribes were some of the very few who knew how to read and write, and were highly regarded and well-paid.\n[…]\nList of ancient Egyptian scribes\n[…]\nMedia related to The Seated Scribe at Wikimedia Commons\n[…]\nDescription of The Seated Scribe on the Louvre Official Site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Escriba_Sentado",
        "situacao": "ok",
        "texto": "O Escriba Sentado é uma escultura produzida no Antigo Egito representando um escriba durante seu trabalho, atualmente exposta no Museu do Louvre, em Paris. Foi descoberta em Sacará, em 1850. Data do período da IV dinastia do Reino Antigo, por volta de 2620 a 2500 a.C.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Oráculo de Amon em Siwa",
      "descricao": "Templo oracular do deus Amon no oásis de Siwa, no deserto ocidental do Egito, visitado por Alexandre, o Grande"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 331 antes de Cristo, Alexandre, o Grande, atravessou o deserto para consultar o oráculo do deus Amon. Em que oásis ficava o templo?",
    "resposta": "Siwa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Siwa_Oasis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Siwa_Oasis",
        "situacao": "ok",
        "texto": "The Siwa Oasis (Arabic: واحة سيوة Wāḥat Sīwah [ˈwæːħet ˈsiːwæ]) is an urban oasis in Egypt. It is situated between the Qattara Depression and the Great Sand Sea in the Western Desert, 50 kilometres (31 mi) east of the Egypt–Libya border and 560 kilometres (350 mi) from the Egyptian capital city of Cairo.\n[…]\nSiwa was also the site of some fighting during World War I and World War II. The British Army's Long Range Desert Group (LRDG) was based here, but Rommel's Afrika Korps also took possession three times. German soldiers went skinny dipping in the lake of the oracle, contrary to local customs which prohibit public nudity. In 1942, while the Italian 136th Infantry Division Giovani Fascisti occupied the oasis, a tiny Egyptian puppet government-in-exile was set up at Siwa.\n[…]\nThe traditional culture of Siwa shows many unique elements, some reflecting its longstanding links with the isolated oasis life and the fact that the inhabitants are Siwi Berbers. There are 10 tribes in Siwa that speak an eastern Berber language (Siwi). These tribes have their own cultures and ideals. Until a tarmac road was built to the Mediterranean coast in the 1980s Siwa's only links with the outside world were by arduous camel tracks through the desert.\n[…]\nIn 1995, Greek archaeologist Liana Souvaltzi announced that she had identified the tomb of Alexander the Great in the oasis of Siwa. She made the following statement to the Greek media:\n[…]\nIn late 2013, an announcement was made regarding the apparent archaeoastronomy discovery of precise spring and fall equinox sunrise alignments over the Aghurmi mound/Amun Oracle when viewed from Timasirayn temple in the Western Desert, 12 km away across Lake Siwa. The first known recent public viewing of this event occurred on March 21, 2014, during the spring equinox."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O%C3%A1sis_de_Siu%C3%A1",
        "situacao": "ok",
        "texto": "O Oásis de Siuá ou de Siua (ou Siwa; em árabe: واحة سيوة‎; romaniz.: Wāḥat Sīwah, do berbere Siwa, \"ave de rapina\", pássaro protetor do deus do Sol, Amon-Rá) é um oásis no Deserto da Líbia a cerca de 50 km (30 mi) leste da fronteira Líbia e 560 km (348 mi) do Cairo.\n[…]\nDepois de ter conquistado o Egito aos Persas, Alexandre Magno dirigiu-se ao oásis de Siuá para consultar o oráculo, tendo sido confirmado não só como filho de Zeus, mas do deus egípcio Ámon. Este acto é interpretado como uma manobra de propaganda que visava legitimar o poder de um estrangeiro sobre o Egito.\n[…]\nOs alimentos para o festival são comprados coletivamente, com fundos reunidos pelas mesquitas do oásis. As comemorações duram três dias Qamari e, no início da manhã do quarto dia, os homens siwanos formam uma grande marcha, segurando bandeiras e cantando músicas espirituais. A marcha começa em Gabal El - Dakrour e termina na praça Sidi Solayman - no centro de Siwa - declarando o fim dos festivais e o início de um novo ano sem ódio ou rancor, com amor, respeito e reconciliação.\n[…]\nOs berberes de Siwa são cerca de 30.000.\n[…]\nQuando o antropólogo nascido em Siwa, Fathi Malim, incluiu referências à homossexualidade Siwana (especialmente um poema de amor de um homem para um jovem) em seu livro Oasis Siwa (2001), o conselho tribal exigiu que ele apagasse o material na edição atual do livro e o removesse de edições futuras, ou seria expulso da comunidade. Malim concordou relutantemente e removeu fisicamente as passagens da primeira edição de seu livro, excluindo-as da segunda.\n[…]\nUm livro mais recente, Siwa Past and Present (2005), de A. Dumairy, diretor da Siwa Antiquities, omite discretamente qualquer menção às famosas práticas históricas dos habitantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Alto Egito",
      "descricao": "Região do vale do Nilo que formava uma das duas metades do Egito Antigo, ao lado do Baixo Egito"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Egito Antigo se dividia em Alto e Baixo Egito. Em que parte do país, em relação ao Baixo Egito, ficava o Alto Egito?",
    "resposta": "Ao sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Upper_Egypt"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Upper_Egypt",
        "situacao": "ok",
        "texto": "Upper Egypt (Arabic: صعيد مصر, romanized: Ṣaʿīd Miṣr, shortened to الصعيد, Egyptian Arabic pronunciation: [es.sˤe.ˈʕiːd], locally: [es.sˤɑ.ˈʕiːd]) is the southern portion of Egypt and is composed of the Nile River valley south of the delta and the 30th parallel North. It thus starts at Beni Suef and stretches down to Lake Nasser (formed by the Aswan High Dam).\n[…]\nIn twentieth-century Egypt, the title Prince of the Sa'id (meaning Prince of Upper Egypt) was used by the heir apparent to the Egyptian throne.\n[…]\nAnthropologist Alain Anselin had issued a comparative review of Afro-Asiatic language families which suggested earliest speakers of the Egyptian language could be located in regions south of Upper Egypt or the Saharan hinterland. In his concluding passage, he found it plausible that early Upper Egyptian cultures were a crossroads for North Eastern African groups such as the Beja peoples.\n[…]\nAccording to historical linguist, Christopher Ehret, the material cultural indicators of the Nabta Playa complex in Upper Egypt, correspond with the conclusion that the inhabitants of the wider Nabta Playa region were a Nilo-Saharan-speaking population.\n[…]\nBritish linguist, Roger Blench, observed that pockets of Nilo-Saharan speakers are present in Upper Egypt. He further added that it was possible that early Afro-Asiatic speakers had domesticated wild cattle in the Egyptian-Sudanese border 10,000 years ago.\n[…]\nThe Cushitic language which is a sub-branch of the Afro-Asiatic language family was spoken in Lower Nubia, an ancient region which extends from Upper Egypt to Northern Sudan, before the arrival of North Eastern Sudanic languages in the Middle Nile Valley.\n[…]\nNowadays, Upper Egypt forms part of these 7 governorates:\n[…]\nLarge cities located in Upper Egypt:\n[…]\nUpper and Lower Egypt\n[…]\nReferences to Upper Egypt in Coptic Literature—Coptic Scriptorium database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alto_Egito",
        "situacao": "ok",
        "texto": "Alto Egito (em árabe: صعيد مصر‎; romaniz.: Sa'id Misr) é uma faixa de terra, em ambos lados do Vale do Nilo, que se estende desde os limites da catarata ao norte do atual Assuão para a área entre El-Ayait e Dachur (que fica ao sul do atual Cairo). O trecho norte do Alto Egito, entre El-Ayait e Sohag é às vezes conhecido como Médio Egito. O Alto Egito é mais frequentemente usada como uma divisão do\n[…]\nOs modernos habitantes do Alto Egito são conhecidos como saidis; eles geralmente falam o árabe saidi. O Alto Egito era conhecido como Ta Shemau, que significa “terra de juncos”. Foi dividido em 22 distritos chamados nomos. O primeiro nomo foi mais ou menos onde é Assuão e o vigésimo segundo foi na moderna Atfih (Afroditópolis), logo ao sul do Cairo.\n[…]\nA primeira casa do Alto Egito pré-dinástico foi Hieracômpolis (em grego: Hierakonpolis), cuja divindade patrono era a deusa abutre Necbete. Para a maior parte do Egito faraônico, Tebas era o orifício administrativo do Alto Egito. Após a sua destruição pelos assírios sua importância diminuiu. Sob os ptolomeus a cidade de Ptolemaida, assumiu o papel de capital do Alto Egito. O Alto Egito era representado pela coroa branca Hedjete, e seus símbolos eram o lótus e o carriço.\n[…]\nPor volta de 3 200 a.C., o Alto Egito, sob Narmer, conquistou o Baixo Egito, unificando todo o território sob uma coroa.\n[…]\nNo século XX no Egito, o título Príncipe de Saíde (significando príncipe do Alto Egito) foi usado pelo herdeiro aparente ao trono egípcio. Apesar de a monarquia egípcia ter sido abolida em 1953, o título continua a ser usado por Maomé Ali e chefe hereditário, Xejque Beja Cauar Alalaqui, Príncipe do Saíde.\n[…]\nChauveau, Michel (2000) Egypt in the Age of Cleopatra: History and Society Under the Ptolemies Cornell University Press, Ithaca, New York, ISBN 0-8014-3597-8\n[…]\nBaixo Egito\n[…]\nMédio Egito\n[…]\nAlto e Baixo Egito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Textos das Pirâmides",
      "descricao": "Conjunto de fórmulas religiosas gravadas nas paredes internas de pirâmides do fim do Antigo Império para garantir a vida eterna do rei"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os Textos das Pirâmides, fórmulas para a vida eterna do rei, aparecem gravados pela primeira vez na pirâmide de Unas. Em que necrópole ela fica?",
    "resposta": "Sacará",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_Texts",
      "https://en.wikipedia.org/wiki/Pyramid_of_Unas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_Texts",
        "situacao": "ok",
        "texto": "The Pyramid Texts are the oldest ancient Egyptian funerary texts, dating to the late Old Kingdom. They are the earliest known corpus of ancient Egyptian religious texts. Written in Old Egyptian, the Pyramid Texts were carved onto the subterranean walls and sarcophagi of pyramids at Saqqara from the end of the Fifth Dynasty, and throughout the Sixth Dynasty of the Old Kingdom, and into the Eighth D\n[…]\nWith the exception of the walls immediately surrounding the sarcophagus, which were lined with alabaster and painted to resemble reed mats with a wood-frame enclosure, the remaining walls of the antechamber, burial chamber, and a section of the horizontal passage were covered with vertical columns of hieroglyphs that make up the Pyramid Texts. Unas' sarcophagus was left without inscription. The king's royal titulary did not appear on the walls surrounding it, as it does in later pyramids.\n[…]\nThe set up and layout of the Unas pyramid were replicated and expanded on for future pyramids. The causeway ran 750 meters long and is still in good condition, unlike many causeways found in similar ancient Egyptian pyramids. In the pyramid of Unas, the ritual texts could be found in the underlying supporting structure. The antechamber and corridor contained texts and spells personalized to the Pharaoh himself.\n[…]\nKurt Sethe's first edition of the pyramid texts contained 714 distinct spells. Later additional spells were discovered, for a total of 759. No single edition includes all recorded spells. The following example of a spell comes from the pyramid of Unas. It was to be recited in the South Side Burial Chamber and Passage, and it was the Invocation to New Life. Utterance 213:\n[…]\nUnas is the bull of heaven\n[…]\nAllen, James P. (2013). A New Concordance of the Pyramid Texts. Brown University.\n[…]\nSamuel A. B. Mercer translation of the Pyramid Texts\n[…]\nThe Complete Pyramid Texts of King Unas, Unis or Wenis"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_Unas",
        "situacao": "ok",
        "texto": "The pyramid of Unas (Egyptian: Nfr swt Wnjs, lit. 'Beautiful are the places of Unas') is the funerary monument built for the Egyptian pharaoh Unas, the ninth and final king of the Fifth Dynasty, in the 24th century BC. It is the smallest Old Kingdom pyramid, but significant due to the discovery of Pyramid Texts – spells for the king's afterlife – incised into the walls of its subterranean chambers\n[…]\nThough they first appeared in Unas's pyramid, many of the texts are significantly older. The texts subsequently appeared in the pyramids of the kings and queens of the Sixth to Eighth Dynasties, until the end of the Old Kingdom. With the exception of a single spell, copies of Unas's texts appeared throughout the Middle Kingdom and later, including a near complete replica of the texts in the tomb of Senwosretankh at El-Lisht.\n[…]\nParts of the corpus of Pyramid Texts were passed down into the Coffin Texts, an expanded set of new texts written on non-royal tombs of the Middle Kingdom, some retaining Old Kingdom grammatical conventions and with many formulations of the Pyramid Texts recurring. The transition to the Coffin Texts was begun in the reign of Pepi I and completed by the Middle Kingdom. The Coffin Texts formed the basis for the Book of the Dead in the New Kingdom and Late Period.\n[…]\nThe Egyptologist Jaromír Málek contends that the evidence only suggests a theoretical revival of the cult, a result of the valley temple serving as a useful entry path into the Saqqara necropolis, but not its persistence from the Old Kingdom. Despite renewed interest in the Old Kingdom rulers at the time, their funerary complexes, including Unas's, were partially reused in the construction of Amenemhat I's and Senusret I's pyramid complexes at El-Lisht.\n[…]\nPyramid Texts Online – Read the texts in situ. View the hieroglyphs and the complete translation.\n[…]\nVirtual exploration of the pyramid of Unas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Textos_das_Pir%C3%A2mides",
        "situacao": "ok",
        "texto": "Os Textos da Pirâmide de Unas, descobertos em 1881 por Gaston Maspero, são os escritos religiosos mais antigos descobertos até hoje. Por apresentarem uma síntese das crenças religiosas do Antigo Egito, eles datam de 4500 anos ou mais, considerando que estas crenças devem ter nascido muito antes de serem transcritas na pedra.\n[…]\nEmbora a Pirâmide de Unas seja a menor das pirâmides reais construídas no Antigo Império, ela foi a primeira a trazer em suas paredes internas este conjunto de encantamentos (fórmulas), que ajudariam a alma do faraó em sua jornada para o próximo mundo.\n[…]\nOs textos estão gravados nas colunas, sobre as paredes do corredor, da antecâmara e da passagem que leva à câmara funerária da pirâmide. As paredes que cercam o sarcófago não têm texto e o teto é coberto por estrelas.\n[…]\nOs Textos da Pirâmide de Unas estão dispostos na tumba do Oeste para o Leste, simbolizando a crença que o reino dos mortos ficava no Ocidente - a maioria das necrópoles estão dispostas na margem oeste do Nilo - e o Sol, associado à Ressurreição por reaparecer vivificado após o seu trajeto noturno, ressurge sempre no Oriente.\n[…]\nEstes textos foram retomados pelos soberanos seguintes e, posteriormente, pelas rainhas no fim do Antigo Império. Algumas fórmulas foram utilizadas também nos Textos dos Sarcófagos.\n[…]\n«The Pyramid Texts» (em inglês). , traduzidos por Samuel A. B. Mercer em 1952\n[…]\nWolfgang Kosack: Die altägyptischen Pyramidentexte. In neuer deutscher Uebersetzung; vollständig bearbeitet und herausgegeben von Wolfgang Kosack. Christoph Brunner, Berlin 2012, ISBN 978-3-9524018-1-1.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ramsés II",
      "descricao": "Faraó da décima nona dinastia que reinou no século treze antes de Cristo, conhecido como Ramsés, o Grande"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1976, a múmia de Ramsés Segundo viajou ao exterior para ser tratada contra fungos e foi recebida com honras militares. Em que cidade?",
    "resposta": "Paris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramesses_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramesses_II",
        "situacao": "ok",
        "texto": "Ramesses II (; Ancient Egyptian: rꜥ-ms-sw, Rīꜥa-masē-sə, Ancient Egyptian pronunciation: [ɾiːʕamaˈseːsə]; c. 1303 BC – 1213 BC), commonly known as Ramesses the Great, was the third pharaoh of the Nineteenth Dynasty of Egypt. Ramesses II is often regarded as the greatest, most celebrated, and most powerful pharaoh of the New Kingdom, which itself was the most powerful period of ancient Egypt.\n[…]\nIn May 2023, French archaeologists from the Sorbonne University in Paris identified part of the original granite sarcophagus of Ramesses II. The fragment of granite sarcophagus had been reused by a high priest of the 21st Dynasty named Menkheperre, around 1000 BC but its original owner was unknown until Frédéric Payraudeau's careful analysis discovered the cartouche of Ramesses II on it.\n[…]\nIn 1975, Maurice Bucaille, a French doctor, examined the mummy at the Cairo Museum and found it in poor condition. French President Valéry Giscard d'Estaing succeeded in convincing Egyptian authorities to send the mummy to France for treatment. In September 1976, it was greeted at Paris–Le Bourget Airport with full military honours befitting a king, then taken to a laboratory at the Musée de l'Homme.\n[…]\nThe mummy was forensically tested in 1976 by Pierre-Fernand Ceccaldi, the chief forensic scientist at the Criminal Identification Laboratory of Paris. Ceccaldi observed that the mummy had slightly wavy, red hair. From this trait combined with cranial features, he concluded that Ramesses II was of a \"Berber type\" and hence – according to Ceccaldi's analysis – fair-skinned. Subsequent microscopic inspection of the roots of Ramesses II's hair proved that the king's hair originally was red.\n[…]\nAfter being irradiated in an attempt to eliminate fungi and insects, the mummy was returned from Paris to Egypt in May 1977.\n[…]\nEgypt's Golden Empire: Ramesses II\n[…]\nList of Ramesses II's family members and state officials"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ramess%C3%A9s_II",
        "situacao": "ok",
        "texto": "Ramessés II ou Ramsés II, também conhecido pela titulatura helenizada Osimandias (em grego:  Ὀσυμανδύας), foi o terceiro faraó da XIX dinastia egípcia, uma das dinastias que compõem o Império Novo. Reinou entre aproximadamente 1279 a.C. e 1213 a.C., tendo tido um dos mais prestigiosos reinados da história egípcia, nos aspetos econômico, administrativo, cultural e militar. Teve também um dos mais l\n[…]\nSua múmia, preservada no Museu Egípcio no Cairo, é a de um homem já idoso com um rosto longo e estreito, nariz proeminente e maxilar maciço. O reinado de conquistas e prosperidades de Ramessés II, o Grande, foi o último pico de poder do reino egípcio. Após sua morte o Egito conseguiu manter sua soberania. Ele foi um líder notável, exímio militar e administrador competente e fez com que o país fosse próspero em seu reinado.\n[…]\nAos dez anos, Ramessés recebeu o título de \"filho primogénito do rei\", o que correspondia a ser declarado herdeiro do trono. Seu pai introduziu-o no mundo das campanhas militares quando era ainda adolescente e Ramessés acompanhou-o contra os líbios e em campanhas em Canaã e Sinai.\n[…]\nO segundo templo (Pequeno Templo), a norte do Grande Templo, é dedicado a Nefertari (associada a Hator). Na sua fachada encontram-se quatro estátuas de Ramessés e duas de Nefertari.\n[…]\nEm 1974, egiptólogos visitando sua tumba perceberam que as condições de sua múmia estavam rapidamente se deteriorando, pelo que foi levada de avião a Paris para estudos.\n[…]\nEm 1976, a múmia foi finalmente recebida no Aeroporto de Paris-Le Bourget com todas as honrarias militares cabidas a um rei. Fez parte de uma exposição dedicada ao faraó e onde foi sujeita a análises com raios X. Na capital francesa uma equipe composta por cento e dez cientistas foi responsável por tentar descobrir as razões pelas quais a múmia se degradava progressivamente.\n[…]\nTumba de Ramessés II",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Templo de Debod",
      "descricao": "Templo egípcio antigo da Núbia doado pelo Egito à Espanha e remontado num parque de Madri"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Templo de Debod, doado pelo Egito como agradecimento pela ajuda no salvamento dos monumentos da Núbia, foi remontado em qual capital europeia?",
    "resposta": "Madri",
    "distratores": [
      "Roma",
      "Lisboa",
      "Berlim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Temple_of_Debod"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temple_of_Debod",
        "situacao": "ok",
        "texto": "The Temple of Debod (Spanish: Templo de Debod) is an ancient Nubian temple currently located in Madrid, Spain. The temple was originally erected in the early 2nd century BC 15 km (9.3 mi) south of Aswan, Egypt. The Egyptian government donated the temple to Spain in 1968 as a sign of gratitude for their participation in the International Campaign to Save the Monuments of Nubia. It was taken apart, \n[…]\nIn 1960, due to the construction of the Aswan High Dam and the consequent threat posed by its reservoir to numerous monuments and archaeological sites, UNESCO made an international call to save this rich historical legacy. As a sign of gratitude for the help provided by Spain in saving the Abu Simbel temples, the Egyptian state donated the Temple of Debod to Spain in 1968.\n[…]\nJambrina, C. (2000) «El viaje del templo de Debod a España». Historia 16, 286.\n[…]\nJaramago, M. (1998) «El templo de Debod. Bosquejo histórico de un \"monumento madrileño\"». Historia 16, 265\n[…]\nJaramago, M. (1998) «El templo de Debod: recientes investigaciones». En: Egipto, 200 años de investigación arqueológica. Ed. Zugarto.\n[…]\nJaramago, M. (2008) «El templo de Debod, una muerte agónica». Muy Historia, 15 (enero de 2008), p. 85.\n[…]\nPriego, C. y Martin, A. (1992) Templo de Debod. Madrid: Ayuntamiento de Madrid. 67 págs.\n[…]\nReal Academia de la Historia. (2007) «Declaración de Bien de Interés Cultural del Templo de Debod (Madrid)». En: Informes oficiales aprobados por la Real Academia de la Historia. Boletín de la RAH, 204(2): 137–138.\n[…]\nRoeder, Günther (1911). Debod bis Bab Kalabsche (in German). Caire: Institut français d'archéologie orientale. Series of pictures of the temple of Debod taken in 1911.\n[…]\nMadrid City Council: Templo de Debod. official website (in Spanish)\n[…]\nDebod Temple: Official Virtual tour\n[…]\n19th century travellers' descriptions and prints of the Debod temple\n[…]\nVídeo: Templo de Debod. Joya de Egipto en Madrid (Canal UNED)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Debode",
        "situacao": "ok",
        "texto": "O Templo de Debode constitui um dos poucos testemunhos arquitectónicos núbio-egípcios completos que podem ser contemplados fora do Egito e o único destas características existente na Espanha.\n[…]\nConstruído no século IV a.C. pelo rei cuxita Adijalamani para reverenciar o deus Amom, até há apenas algumas décadas situava-se 15 km ao sul de Assuão, no Egito, muito próximo da primeira catarata do Nilo e do grande centro religioso da deusa Ísis, em Filas.\n[…]\nOriginalmente as paredes do templo eram decoradas com ilustrações mostrando o rei Adijalamani como um faraó egípcio doando oferendas aos deuses. Essas pinturas perderam muito de seu brilho natural quando o templo ficou submerso no rio de Assuão.\n[…]\nEm 1968, o templo foi doado a Espanha pelo Estado egípcio em agradecimento pela ajuda prestada ao salvamento dos templos de Abul-Simbel.\n[…]\nUma vez transferido a Espanha, pedra por pedra, o templo foi exposto a um complicado trabalho de reconstrução e restauração. Estes trabalhos incluíram a instalação no seu interior de ar condicionado quente para criar uma atmosfera seca que se aproximasse do clima de Núbia. Para representar o rio que teve o templo nas suas proximidades, construiu-se um tanque de pouca profundidade que se estende ao longo dos três portais de acesso ao templo.\n[…]\nOs trabalhos de reconstrução do monumento tardaram dois anos. O templo foi inaugurado a 20 de Julho de 1972.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Osíris",
      "descricao": "Deus egípcio dos mortos e do além, marido de Ísis e pai de Hórus"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No mito egípcio, Osíris foi assassinado e teve o corpo despedaçado e espalhado pelo Egito. Qual deus, seu próprio irmão, cometeu o crime?",
    "resposta": "Set",
    "fonte": [
      "https://en.wikipedia.org/wiki/Osiris",
      "https://en.wikipedia.org/wiki/Set_(deity)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Osiris",
        "situacao": "ok",
        "texto": "Osiris (, from Egyptian wsjr) was the god of fertility, agriculture, the afterlife, the dead, resurrection, life, and vegetation in ancient Egyptian religion. He was classically depicted with a pharaoh's beard, partially mummy-wrapped at the legs, wearing a distinctive atef crown and holding a symbolic crook and flail. He was one of the first to be associated with the mummy wrap.\n[…]\nPlutarch recounts one version of the Osiris myth in which Set (Osiris's brother), along with the Queen of Ethiopia, conspired with 72 accomplices to plot the assassination of Osiris. Set fooled Osiris into getting into a box, which Set then shut, sealed with lead, and threw into the Nile. Osiris's wife, Isis, searched for his remains until she finally found him embedded in a tamarisk tree trunk, which was holding up the roof of a palace in Byblos on the Phoenician coast.\n[…]\nThe Third Day: Osiris is mourned and the enemies of the land are destroyed.\n[…]\nThis name may have been a Hellenization of \"Osiris-Apis\". Osiris-Apis was a patron deity of the Memphite Necropolis and the father of the Apis bull who was worshipped there, and texts from Ptolemaic times treat \"Serapis\" as the Greek translation of \"Osiris-Apis\".\n[…]\nBut little of the early evidence for Serapis's cult comes from Memphis, and much of it comes from the Mediterranean world with no reference to an Egyptian origin for Serapis, so Mark Smith expresses doubt that Serapis originated as a Greek form of Osiris-Apis's name and leaves open the possibility that Serapis originated outside Egypt.\n[…]\nThe cult of Isis and Osiris continued at Philae until at least the 450s CE, long after the imperial decrees of the late 4th century that ordered the closing of temples to \"pagan\" gods. Philae was the last major ancient Egyptian temple to be closed.\n[…]\nMysteries of Osiris\n[…]\nOsiris—\"Ancient Egypt on a Comparative Method\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Set_(deity)",
        "situacao": "ok",
        "texto": "Set (; Egyptological: Sutekh - swtẖ ~ stẖ or: Seth ) is a god of deserts, storms, disorder, violence, and foreigners in ancient Egyptian religion. In Ancient Greek, the god's name is given as Sēth (Σήθ). Set had a positive role where he accompanied Ra on his barque to repel Apep (Apophis), the serpent of Chaos. Set had a vital role as a reconciled combatant. He was lord of the Red Land (desert), w\n[…]\nSet's negative aspects were emphasized during this period. Set was the killer of Osiris, having hacked Osiris' body into pieces and dispersed it so that he could not be resurrected. The Greeks would later associate Set with Typhon and Yahweh (being the three of them depicted as donkey-like creatures, classifying their worshippers as onolatrists).\n[…]\nSet and Typhon also had in common that both were sons of deities representing the Earth (Gaia and Geb) who attacked the principal deities (Osiris for Set, Zeus for Typhon). Nevertheless, throughout this period, in some outlying regions of Egypt, Set was still regarded as the heroic chief deity.\n[…]\nMeanwhile, Nephthys was also venerated as \"Mistress\" in the Osirian temples of these districts as part of the specifically Osirian college. It would appear that the ancient Egyptians in these locales had little problem with the paradoxical dualities inherent in venerating Set and Nephthys, as juxtaposed against Osiris, Isis, and Nephthys.\n[…]\nIn the 2016 fantasy action film Gods of Egypt, Set is portrayed by Gerard Butler. In the film, he is the primary antagonist who usurps the throne of Egypt after murdering his brother Osiris.\n[…]\nGriffiths, J. Gwyn (2001). \"Osiris\". In Redford, Donald B. (ed.). The Oxford Encyclopedia of Ancient Egypt. Vol. 2. Oxford University Press. pp. 615–619. ISBN 978-0-19-510234-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os%C3%ADris",
        "situacao": "ok",
        "texto": "Osíris (em egípcio: wsjr) é um deus da mitologia egípcia. Conhecido como o deus dos mortos, além de ser a divindade da vegetação, do julgamento e do além. Em outras culturas, seu nome é variavelmente transcrito em Asar, Ausir, Wesir, Ausare, Hagir, Heinir, Higor, Hermes, Antar, Varor, entre outros.\n[…]\nOsíris, é sem dúvida o deus mais conhecido do Antigo Egito, devido ao grande número de templos que lhe foram dedicados por todo o país, porém, os seus começos foram os de qualquer divindade local e é também um deus que julgava a alma dos egípcios se eles iam para o paraíso (lugar onde só há fartura). Para os seus primeiros adoradores, Osíris era apenas a encarnação das forças da terra e das plantas.\n[…]\nPoderia também ser retratado como uma múmia deitada de cujo corpo emergiam espigas (\"Osíris vegetante\"). Esta representação está associada a um prática dos Egípcios que consistia em regar uma estátua do deus feita de terra e de trigo. Estas estátuas eram depois enterradas nas terras agrícolas, acreditando-se que seriam a garantia de uma próspera colheita. Este costume está atestado desde a Pré-História do Egito até à época ptolemaica.\n[…]\nA representação de Osíris como um animal era rara. Quando se verificava o deus poderia surgir como um touro negro, um crocodilo ou um grande peixe.\n[…]\nContudo, Set encontra o sarcófago e furioso decide esquartejar Osíris em catorze pedaços e espalha essas partes do corpo de Osíris por todo o Egito; conforme alguns textos do período ptolemaico, teriam sido dezesseis ou quarenta e duas partes. Quanto ao significado destes números, deve referir-se que o catorze é número de dias que decorre entre a lua cheia e a lua nova e o quarenta era o número de províncias (ou nomos) em que o Egito se encontrava dividido.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Hieróglifos egípcios",
      "descricao": "Sistema de escrita formal do Egito Antigo, que combinava sinais de sons e de ideias"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1822, depois de estudar a Pedra de Roseta e outros textos, que estudioso francês anunciou ter decifrado os hieróglifos egípcios?",
    "resposta": "Jean-François Champollion",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Champollion",
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Champollion",
        "situacao": "ok",
        "texto": "Jean-François Champollion (French: [ʒɑ̃ fʁɑ̃swa ʃɑ̃pɔljɔ̃]), also known as Champollion le jeune ('the Younger'; 23 December 1790 – 4 March 1832), was a French philologist and orientalist, known primarily as the decipherer of Egyptian hieroglyphs and a founding figure in the field of Egyptology. Partially raised by his brother, the scholar Jacques Joseph Champollion-Figeac, Champollion was a child \n[…]\nFigeac honours him with La place des Écritures, a monumental reproduction of the Rosetta Stone by American artist Joseph Kosuth (pictured to the right). And a museum devoted to Jean-François Champollion was created in his birthplace at Figeac in Lot. It was inaugurated on 19 December 1986 in the presence of President François Mitterrand and Jean Leclant, Permanent Secretary of the Academy of Inscriptions and Letters. After two years of building work and extension, the museum re-opened in 2007.\n[…]\nIn Vif near Grenoble, The Champollion Museum is located at the former abode of Jean-François's brother.\n[…]\nChampollion has also been portrayed in many films and documentaries: For example, he was portrayed by Elliot Cowan in the 2005 BBC docudrama Egypt. His life and process of the decipherment of hieroglyphics were narrated by Françoise Fabian and Jean-Hugues Anglade in the 2000 Arte documentary film Champollion: A Scribe for Egypt. In David Baldacci's thriller novel involving the CIA, Simple Genius, the character named \"Champ Pollion\" was derived from Champollion.\n[…]\nAlso named after him is the Champollion crater, a lunar crater on the far side of the Moon.\n[…]\nWorks by Jean-François Champollion at Project Gutenberg\n[…]\nWorks by or about Jean-François Champollion at the Internet Archive\n[…]\nGiants of Egyptology: Jean-François Champollion, 1790–1832\n[…]\nBBC: Jean-François Champollion\n[…]\n\"Champollion, Jean François\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
        "situacao": "ok",
        "texto": "Ancient Egyptian hieroglyphs (, HY-roh-glifs) or hieroglyphics were the formal writing system used in Ancient Egypt for writing the Egyptian language. Hieroglyphs combined ideographic, logographic, syllabic, and alphabetic elements, with more than 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood.\n[…]\nScholars, spiritualists and treasure hunters collected highly sought-after artifacts in attempts to decode the language based on the phonetic and alphabetical similarities between Coptic and Hieroglyphs. The decipherment of hieroglyphic writing was finally accomplished in the 1820s by Jean-François Champollion, with the help of the Rosetta Stone.\n[…]\nAs the stone presented a hieroglyphic and a demotic version of the same text in parallel with a Greek translation, plenty of material for falsifiable studies in translation was suddenly available. In the early 19th century, scholars such as Silvestre de Sacy, Johan David Åkerblad, and Thomas Young studied the inscriptions on the stone, and were able to make some headway. Finally, Jean-François Champollion made the complete decipherment by the 1820s. In his Lettre à M. Dacier (1822), he wrote:\n[…]\nHere are several examples of the use of determinatives borrowed from the book, Je lis les hiéroglyphes (\"I am reading hieroglyphs\") by Jean Capart, which illustrate their importance:\n[…]\nList of Egyptian hieroglyphs\n[…]\nChampollion Museum\n[…]\nKamrin, Janice (2004). Ancient Egyptian Hieroglyphs: A Practical Guide. Harry N. Abrams, Inc. ISBN 978-0-8109-4961-4.\n[…]\nMcDonald, Angela. Write Your Own Egyptian Hieroglyphs. Berkeley: University of California Press, 2007 (paperback, ISBN 0-520-25235-7).\n[…]\nEgyptra - Egyptian Hieroglyphic Guide and Name Translator\n[…]\nAncient Egyptian Hieroglyphics – Aldokkan\n[…]\nThe Thot Sign List - an interactive hieroglyphic sign-list database."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jean-Fran%C3%A7ois_Champollion",
        "situacao": "ok",
        "texto": "Jean-François Champollion (Figeac, 23 de dezembro de 1790 – Paris, 4 de março de 1832), também conhecido como Champollion le jeune,  foi um filólogo, orientalista, egiptólogo, considerado o pai da egiptologia, que se tornou famoso pelos seus trabalhos sobre a cultura e a língua do Egito Antigo, e, em especial, por ter sido o principal responsável pela decifração dos hieróglifos egípcios.\n[…]\nConhecido principalmente como o decifrador de hieróglifos egípcios e uma figura fundadora no campo da egiptologia. Parcialmente criado por seu irmão, o estudioso Jacques Joseph Champollion-Figeac, Champollion foi uma criança prodígio em filologia, dando seu primeiro artigo público sobre a decifração de Demotic em sua adolescência. Quando jovem, ele era famoso nos círculos científicos e falava Copta, grego antigo, latim, hebraico e árabe.\n[…]\nEm 1820, Champollion embarcou a sério no projeto de decifração da escrita hieroglífica, logo ofuscando as realizações do polímata britânico Thomas Young, que havia feito os primeiros avanços na decifração antes de 1819. Em 1822, Champollion publicou seu primeiro avanço na decifração da hieróglifos da pedra de Roseta, mostrando que o sistema de escrita egípcio era uma combinação de sinais fonéticos e ideográficos – a primeira escrita desse tipo descoberta.\n[…]\nPanthéon égyptien, collection des personnages mythologiques de l'ancienne Égypte, d'après les monuments (explanatory text to illustrations by Léon-Jean-Joseph Dubois). Paris: Firmin Didot. 1823. OCLC 743026987\n[…]\nDecifração dos hieróglifos egípcios\n[…]\nJean-François Champollion (em inglês) no Find a Grave\n[…]\nObras de Jean-François Champollion (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Jean-François Champollion no Internet Archive\n[…]\nGiants of Egyptology: Jean-François Champollion, 1790–1832\n[…]\nBBC: Jean-François Champollion\n[…]\n«Champollion, Jean François». Nova Enciclopédia Internacional (em inglês). 1905",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Hieróglifos egípcios",
      "descricao": "Sistema de escrita formal do Egito Antigo, que combinava sinais de sons e de ideias"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra hieróglifo vem do grego e descreve a escrita gravada nas paredes dos templos egípcios. O que ela significa literalmente?",
    "resposta": "Entalhes sagrados",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
        "situacao": "ok",
        "texto": "Ancient Egyptian hieroglyphs (, HY-roh-glifs) or hieroglyphics were the formal writing system used in Ancient Egypt for writing the Egyptian language. Hieroglyphs combined ideographic, logographic, syllabic, and alphabetic elements, with more than 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood.\n[…]\nThe use of hieroglyphic writing derived from proto-literate symbol systems in the Early Bronze Age c. the 33rd century BC (Naqada III), with the first decipherable sentence written in the Egyptian language dating to the 28th century BC (Second Dynasty). Ancient Egyptian hieroglyphs developed into a mature writing system used for monumental inscription in the classical language of the Middle Kingdom period; during this period, the system used about 900 distinct signs.\n[…]\nList of Egyptian hieroglyphs\n[…]\nAllen, James P. (1999). Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs. Cambridge University Press. ISBN 978-0-521-77483-3.\n[…]\nCollier, Mark & Bill Manley (1998). How to Read Egyptian Hieroglyphs: a step-by-step guide to teach yourself. British Museum Press. ISBN 978-0-7141-1910-6.\n[…]\nSelden, Daniel L. (2013). Hieroglyphic Egyptian: An Introduction to the Language and Literature of the Middle Kingdom. University of California Press. ISBN 978-0-520-27546-1.\n[…]\nGardiner, Sir Alan H. (1957). Egyptian Grammar: Being an Introduction to the Study of Hieroglyphs, 3rd ed. revised. The Griffith Institute.\n[…]\nKamrin, Janice (2004). Ancient Egyptian Hieroglyphs: A Practical Guide. Harry N. Abrams, Inc. ISBN 978-0-8109-4961-4.\n[…]\nMcDonald, Angela. Write Your Own Egyptian Hieroglyphs. Berkeley: University of California Press, 2007 (paperback, ISBN 0-520-25235-7).\n[…]\nEgyptra - Egyptian Hieroglyphic Guide and Name Translator\n[…]\nAncient Egyptian Hieroglyphics – Aldokkan\n[…]\nEgyptian Language and Writing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hier%C3%B3glifos_eg%C3%ADpcios",
        "situacao": "ok",
        "texto": "Hieróglifos egípcios eram o sistema de escrita formal usado no Antigo Egito. Os hieróglifos combinavam elementos logográficos, silábicos e alfabéticos, com um total de cerca de 1 000 caracteres distintos. Acredita-se que tiveram origem por volta de 3000 a.C.\n[…]\nEstudiosos como Geoffrey Sampson argumentaram que os hieróglifos egípcios \"surgiram um pouco depois da escrita suméria e, provavelmente, [foram] inventados sob a influência desta\", e que é \"provável que a ideia geral de expressar palavras de uma língua por escrito tenha sido trazida para o Egito a partir da Mesopotâmia suméria\".\n[…]\nEmbora existam muitos exemplos de relações iniciais entre Egito e Mesopotâmia, a falta de evidências diretas da transferência da escrita significa que \"nenhuma determinação definitiva foi feita quanto à origem dos hieróglifos no antigo Egito\". Desde a década de 1990, as descobertas mencionadas acima de glifos em Abidos, datados entre 3400 e 3200 a.C., lançaram mais dúvidas sobre a noção clássica de que o sistema de símbolos mesopotâmico precede o egípcio. Uma data de 3400 a.C.\n[…]\nTendo aprendido que os hieróglifos eram uma escrita sagrada, os autores greco-romanos imaginaram o sistema complexo, mas racional, como um sistema alegórico, até mágico, que transmitia conhecimento secreto e místico.\n[…]\ndeve ser lido da esquerda para a direita, pois os sinais (como o do machado sagrado, do olho, e dos pássaros) estão voltados para a esquerda.\n[…]\nOutra forma como os hieróglifos funcionam é ilustrada pelas duas palavras egípcias pronunciadas pr (geralmente vocalizadas como per). Uma palavra significa 'casa', e a sua representação hieroglífica é direta:\n[…]\nOutra palavra pr é o verbo 'sair, partir'. Quando esta palavra é escrita, o hieróglifo 'casa' é usado como símbolo fonético:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Tumba de Tutancâmon",
      "descricao": "Tumba do faraó Tutancâmon no Vale dos Reis, catalogada como KV62 e encontrada quase intacta em 1922"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1922, ao espiar pela primeira vez a tumba de Tutancâmon à luz de uma vela, que arqueólogo inglês disse ver coisas maravilhosas?",
    "resposta": "Howard Carter",
    "fonte": [
      "https://en.wikipedia.org/wiki/KV62",
      "https://en.wikipedia.org/wiki/Howard_Carter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/KV62",
        "situacao": "ok",
        "texto": "The tomb of Tutankhamun (reigned c. 1332–1323 BC), a pharaoh of the Eighteenth Dynasty of ancient Egypt, is located in the Valley of the Kings. The tomb,  also known by its tomb number KV62, consists of four chambers and an entrance staircase and corridor. It is smaller and less extensively decorated than other Egyptian royal tombs of its time, and it probably originated as a tomb for a non-royal \n[…]\nTutankhamun's tomb was discovered in 1922 by excavators led by Howard Carter and his patron, George Herbert, 5th Earl of Carnarvon. As a result of the quantity and spectacular appearance of the burial goods, the tomb attracted a media frenzy and became the most famous find in the history of Egyptology.\n[…]\nAfter Davis gave up work on the valley, the archaeologist Howard Carter and his patron George Herbert, 5th Earl of Carnarvon, made an effort to clear the valley of debris down to the bedrock. Davis's finds of artefacts bearing Tutankhamun's name gave them reason to hope they might find his tomb. The discovery began on 4 November 1922 with a single step at the top of the entrance staircase.\n[…]\nAfter Lord Carnarvon's death, the tomb clearance continued under Carter's leadership. In the second season of the process, in late 1923 and early 1924, the antechamber was emptied of artefacts and work began on the burial chamber. The Egyptian government, which had become partially independent in 1922, fought with Carter over the question of access to the tomb; the government felt that Egyptians, and especially the Egyptian press, were given too little access.\n[…]\nCarter, Howard (1972). The Tomb of Tutankhamen. ISBN 978-0-525-70101-9.\n[…]\nJames, T. G. H. (2000). Howard Carter: The Path to Tutankhamun, Second Edition. I. B. Tauris. ISBN 978-1-86064-615-7.\n[…]\nWinstone, H. V. F. (2006). Howard Carter and the Discovery of the Tomb of Tutankhamun, Revised Edition. Barzan Publishing. ISBN 978-1-905521-04-3."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Howard_Carter",
        "situacao": "ok",
        "texto": "Howard Carter (9 May 1874 – 2 March 1939) was a British archaeologist and Egyptologist who became known for discovering the intact tomb of the 18th Dynasty Pharaoh Tutankhamun in November 1922, the best-preserved pharaonic tomb ever found in the Valley of the Kings.\n[…]\nHoward Carter was born in Kensington on 9 May 1874, the youngest child (of eleven) of artist and illustrator Samuel John Carter and Martha Joyce Carter (née Sands). His father helped train and develop his artistic talents.\n[…]\nProbate was granted on 5 July 1939 to Egyptologist Henry Burton and to publisher Bruce Sterling Ingram. Carter is described as Howard Carter of Luxor, Upper Egypt, Africa, and of 49 Albert Court, Kensington Grove, Kensington, London. His estate was valued at £2,002 (equivalent to £113,140 in 2025). The second grant of Probate was issued in Cairo on 1 September 1939.\n[…]\nIn 2019, the great-niece of Howard Carter opened a bistro in the town of Swaffham, the town in which Carter spent most of his childhood. The bistro has a collection of Egyptian artefacts and a collection of Carter's work; it also bears the name of Carter's discovery, Tutankhamun.\n[…]\nIn 2025, the Elliott Museum in Florida (USA) unveiled a real-time holographic AI avatar of Howard Carter, created by RAVATAR for its “Return of King Tut” exhibition. The digital recreation allows visitors to engage in live dialogue with Carter's likeness, as he recounts the discovery of Tutankhamun's tomb, describes moments from the excavation, and shares insights on ancient Egypt, all based on his original field notes and writings.\n[…]\nWorks by Howard Carter at Project Gutenberg\n[…]\nWorks by Howard Carter at LibriVox (public domain audiobooks)\n[…]\nNewspaper clippings about Howard Carter in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/KV62",
        "situacao": "ok",
        "texto": "A KV62 é a tumba no Vale dos Reis em que foi sepultado o faraó Tutancâmon, membro da Décima Oitava Dinastia do Antigo Egito. Ela consiste em quatro câmaras e um corredor e escadaria de entrada. É menor e bem menos decorada do que outras tumbas reais da época, provavelmente tendo-se originado como uma tumba para alguém de fora da família real e que foi adaptada para uso de Tutancâmon depois de sua \n[…]\nA posição da tumba no chão do vale permitiu que sua entrada fosse escondida por entulhos de construções e inundações, assim não foi saqueada durante o Terceiro Período Intermediário. Foi descoberta em novembro de 1922 por escavadores liderados por Howard Carter. Ela atraiu um frenesi da mídia pela quantidade e aparência espetacular de seus artefatos, se tornando o achado mais famoso na história da egiptologia.\n[…]\nDavis depois disso abriu mão do trabalho no vale, com o arqueólogo Howard Carter e seu patrono lorde George Herbert, 5.º Conde de Carnarvon, fazendo um esforço para liberar o vale de entulho até a base rochosa. As descobertas de Davis de artefatos com o nome de Tutancâmon deram a Carter e Carnarvon motivos para terem esperança de que talvez pudessem encontrar sua tumba.\n[…]\nA liberação da tumba de seus conteúdos foi finalizada em 1932. As exceções foram o sarcófago com sua tampa original substituída por uma placa de vidro e o caixão mais externo, em que a múmia de Tutancâmon foi colocada. Carter também pegou sem permissão alguns artefatos, porém eles foram descobertos após sua morte por Phyllis Walker, sua sobrinha e herdeira, e devolvidos ao governo egípcio. Suspeita-se que alguns itens foram parar ilicitamente em outras coleções, mas sua proveniência é incerta.\n[…]\nCarter, assim que os exames terminaram, colocou a múmia desmembrada em uma bandeja e devolveu-a no ano seguinte ao sarcófago na câmara mortuária.\n[…]\nKV62: Tutankhamen (em inglês) no Theban Mapping Project",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Busto de Nefertiti",
      "descricao": "Busto de calcário pintado da rainha Nefertiti, achado em Amarna em 1912 e exposto no Neues Museum de Berlim"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1912, o busto de Nefertiti foi achado em Amarna, no ateliê de qual escultor real, a quem a obra é atribuída?",
    "resposta": "Tutmés (o escultor)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nefertiti_Bust",
      "https://en.wikipedia.org/wiki/Thutmose_(sculptor)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nefertiti_Bust",
        "situacao": "ok",
        "texto": "The Nefertiti Bust is a painted stucco-coated limestone bust of Nefertiti, the Great Royal Wife of Egyptian pharaoh Akhenaten. It is on display in the Neues Museum of Berlin.\n[…]\nThe bust was found on 6 December 1912 at Amarna by an archaeological team funded by the German Oriental Company (Deutsche Orient-Gesellschaft – DOG), a voluntary association founded by one of the wealthiest men in Prussia, James Simon, who exported more than 20,000 artefacts from Egypt and Iraq. The team was led by German archaeologist Ludwig Borchardt. The bust was found in what had been the workshop of the sculptor Thutmose, along with other unfinished busts of Nefertiti.\n[…]\nThe bust also bears resemblance to other unfinished, but recognizable, busts of Queen Nefertiti.\n[…]\nA 2006 CT scan that discovered the \"hidden face\" of Nefertiti proved, according to Science News, that the bust was genuine.\n[…]\nIn 2023, images circulating on social media showed the ceiling of King Ramses IV's tomb as resembling the back of the bust of Nefertiti statue. These images are altered and do not represent the actual ceiling of any king tombs by patterns or designs as suggested by the fake images.\n[…]\nIn 1930, the German press described the bust as their new monarch, personifying it as a queen. As the \"'most precious ... stone in the setting of the diadem' from the art treasures of 'Prussia Germany'\", Nefertiti would re-establish the imperial German national identity after 1918. Hitler described the bust as \"a unique masterpiece, an ornament, a true treasure\", and pledged to build a museum to house it.\n[…]\nThirteen-minute documentary on the Nerfertiti Bust from Deutsche Welle"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thutmose_(sculptor)",
        "situacao": "ok",
        "texto": "Thutmose, also known as \"The King's Favourite and Master of Works, the Sculptor Thutmose\" (also spelled Djhutmose, Thutmosis, and Thutmes), was an Ancient Egyptian sculptor in the Amarna style. He flourished around 1350 BC, and is thought to have been the official court sculptor of the Egyptian pharaoh Akhenaten in the latter part of his reign.\n[…]\nA German archaeological expedition digging in Akhenaten's deserted city of Akhetaten, known today as Amarna, found a ruined house and studio complex (labeled P47.1-3) in early December 1912; the building was identified as that of Thutmose based on an ivory horse blinker found in a rubbish pit in the courtyard inscribed with his name and job title.\n[…]\nAmong many other sculptural items recovered at the same time was the polychrome bust of Nefertiti, apparently a master study for others to copy, which was found on the floor of a storeroom. In addition to this now-famous bust, twenty-two plaster casts of faces—some of which are full heads, others just the face—were found in Rooms 18 and 19 of the studio, with an additional one found in Room 14.\n[…]\nDodson, Aidan (2009). Amarna Sunset: Nefertiti, Tutankhamun, Ay, Horemheb, and the Egyptian Counter-Reformation. The American University in Cairo Press. ISBN 978-977-416-304-3.\n[…]\nRita E. Freed, Yvonne J. Markowitz, Sue H. D'Auria, Pharaohs of the Sun: Akhenaten - Nefertiti - Tutankhamen (Museum of Fine Arts, 1999), pp. 123–126.\n[…]\nKrauss, Rolf (2008). \"Why Nefertiti Went to Berlin\". Kmt. 19 (3): 44–53.\n[…]\nÄgyptisches Museum und Papyrussammlung Berlin, Friederike Seyfried (Hrsg.): Im Licht von Amarna: 100 Jahre Fund der Nofretete; [Katalog zur Ausstellung vom 07. Dezember 2012-13. April 2013: 100 Jahre Fund der Nofretete]. Imhof, Petersberg 2012, Seite 170 ff. Friederike Seyfried. Der Werkstattkomplex des Thutmosis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Busto_de_Nefertiti",
        "situacao": "ok",
        "texto": "O busto de Nefertiti é um busto feito de calcário com cerca de 3400 anos de idade, retratando Nefertiti, a Grande Esposa Real do faraó egípcio Aquenáton, uma das obras de arte mais imitadas do Antigo Egito. Devido à obra, Nefertiti tornou-se uma das mulheres mais célebres da Antiguidade, bem como um ícone da beleza feminina. Acredita-se que tenha sido feito em 1345 a.C., pelo escultor Tutemés.\n[…]\nUma equipe de arqueólogos alemães, liderada por Ludwig Borchardt, descobriu o busto em 1912, no ateliê de Tutemés em Amarna, no Egito, e ele foi desde então mantido em diversas localidades da Alemanha - incluindo uma mina de sal em Merkers-Kieselbach, o Museu Dahlem (então em Berlim Ocidental), o Museu Egípcio de Charlotemburgo e o Museu Altes. Atualmente está em exposição no Neues Museum, em Berlim, onde era exibido antes da Segunda Guerra Mundial.\n[…]\nNefertiti (literalmente em português \"A bela chegou\") foi a Esposa Real do faraó egípcio Aquenáton (seu nome de faraó oficial era Amenófis IV) na 18.ª Dinastia do Egito. Amenófis IV quando subiu ao trono, instituiu o culto enoteísta chamado Atonismo, dedicado ao Disco Solar Atom.\n[…]\nMaiores detalhes da vida da Esposa Real de Aquenáton são desconhecidos, ela desaparece das crônicas do reino de Amarna no duodécimo ano do reinado de Aquenáton, acredita-se que a referida rainha teria atingido o posto de faraó e governado sozinha após a morte do faraó. Entre muitas teorias, Nefertiti seria filha de um oficial chamado Ay (sucessor de Tutancâmon).\n[…]\nOutro ponto que vale ressaltar é que o busto não apresenta qualquer inscrição ou identificação. O Busto de Nefertiti é atribuído ao escultor real chamado Tutemés, no ano de 1345 a.C.\n[…]\nBreger, Claudia (2006). «The 'Berlin' Nefertiti Bust». In:  Regina Schulte. The body of the queen: gender and rule in the courtly world, 1500–2000. [S.l.]: Berghahn Book. ISBN 1-84545-159-7",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Grande Esfinge de Gizé",
      "descricao": "Estátua colossal de calcário com corpo de leão e cabeça humana, no planalto de Gizé, no Egito"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A maioria dos egiptólogos atribui a Grande Esfinge de Gizé a qual faraó da Quarta Dinastia, filho de Quéops?",
    "resposta": "Quéfren",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",
        "situacao": "ok",
        "texto": "The Great Sphinx of Giza (Arabic: أبو الهول, romanized: ʾabū al-Hawl) is a limestone statue of a resting sphinx, a mythical creature with the head of a human and the body of a lion. The monument was sculpted from the limestone bedrock of the Eocene-aged Mokattam Formation and faces east on the Giza Plateau, on the west bank of the Nile in Giza, Egypt. The oldest known monumental sculpture in Egypt\n[…]\nThe archaeological evidence suggests the Great Sphinx was created between 2600 and 2500 BC for the king Khufu, the builder of the Great Pyramid of Giza, or his son Khafre, the builder of the second Pyramid at Giza. The Sphinx is a monolith carved from the bedrock of the plateau, which also served as the quarry for the pyramids and other monuments in the area.\n[…]\nRainer Stadelmann, former director of the German Archaeological Institute in Cairo, examined the distinct iconography of the nemes (headdress) and the now-detached beard of the Sphinx and concluded the style is more indicative of the pharaoh Khufu (2589–2566 BC), known to the Greeks as Cheops, builder of the Great Pyramid of Giza and Khafre's father.\n[…]\nGeologist Colin Reader suggests water runoff from the Giza plateau is responsible for the differential erosion on the walls of the sphinx enclosure. Because the hydrological characteristics of the area were significantly changed by the quarries, Reader contends this suggests the sphinx likely predated the quarries (and thus, the pyramids).\n[…]\nThe Sphinx water erosion hypothesis contends the main type of weathering evident on the enclosure walls of the Great Sphinx could only have been caused by prolonged and extensive rainfall, and must therefore predate the time of the pharaoh Khafre. The hypothesis was championed by René Schwaller de Lubicz, John Anthony West, and geologist Robert M. Schoch.\n[…]\nMedia related to Great Sphinx of Giza at Wikimedia Commons\n[…]\nSphinx photo gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Esfinge_de_Giz%C3%A9",
        "situacao": "ok",
        "texto": "Grande Esfinge de Gizé (em árabe: أبو الهول; Abu al-Haul), comumente referida apenas como Esfinge, é uma estátua de pedra calcária que representa uma esfinge (uma criatura mítica com corpo de leão e cabeça humana) localizada no planalto de Gizé, na margem oeste do rio Nilo, em Gizé, Egito. O rosto do monumento é geralmente considerado como uma representação do rosto do faraó Quéfren.\n[…]\nÉ a maior estátua feita de monólito no mundo, com 73,5 metros de comprimento, 19,3 metros de largura e 20,22 m de altura. É a mais antiga escultura monumental conhecida e é comumente tida como uma obra construída por egípcios antigos do reino velho Reino Antigo durante o reinado do faraó Quéfren (c. 2558–2532 a.C.).\n[…]\nEmbora tenha havido evidências e pontos de vista conflitantes ao longo dos anos, a opinião da moderna egiptologia permanece que a Grande Esfinge foi construída em aproximadamente 2 500 a.C. para o faraó Quéfren, o construtor da Segunda Pirâmide de Gizé.\n[…]\nA Estela dos Sonhos, erigida muito mais tarde pelo faraó Tutemés IV (1401–1391 ou 1397–1 388 a.C.), associa a Esfinge a Quéfren (Cafre). Quando a estela foi descoberta, suas linhas de texto já estavam danificadas e incompletas, e se referiam apenas a Caf, não a Cafre. Um extrato foi traduzido:\n[…]\nO egiptólogo Mark Lehner inicialmente afirmou que não houve uma tentativa de restauração durante o Reino Antigo (c. 2686–2184), embora ele tenha posteriormente se retratado.\n[…]\nColin Reader propôs que a Esfinge era o foco da adoração solar no início da Época Tinita, antes que o planalto de Gizé se tornasse uma necrópole no Reino Antigo (c. 2686–2134). Ele vincula isso às suas conclusões de que a Esfinge, o templo da Esfinge, a calçada e o templo mortuário de Quéfren fazem parte de um complexo que antecede a IV dinastia egípcia (c. 2613–2494). O leão tem sido um símbolo associado ao sol nas antigas civilizações do Oriente Próximo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Hatshepsut",
      "descricao": "Rainha da décima oitava dinastia que governou o Egito como faraó no século quinze antes de Cristo"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Anos depois da morte de Hatshepsut, imagens e nomes dela foram apagados de muitos monumentos no reinado de qual faraó, seu sucessor?",
    "resposta": "Tutmés III",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hatshepsut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hatshepsut",
        "situacao": "ok",
        "texto": "Hatshepsut ( haht-SHEPP-sut; c. 1505–1458 BC) was the sixth pharaoh of the Eighteenth Dynasty of Egypt, ruling first as regent, then as queen regnant from c. 1479 BC until c. 1458 BC (Low Chronology) and the Great Royal Wife of Pharaoh Thutmose II. She was Egypt's second confirmed woman who ruled in her own right, the first being Sobekneferu/Neferusobek in the Twelfth Dynasty.\n[…]\nWhile it is clear that much of this rewriting of Hatshepsut's history occurred only during the close of Thutmose III's reign, it is not clear why it happened, other than as a manifestation of the typical pattern of self-promotion that existed among the pharaohs and their administrators, or perhaps to save money by not building new monuments for the burial of Thutmose III, and instead using the grand structures built by Hatshepsut.\n[…]\nIt has long been assumed statuary of Hatshepsut was abased by Thutmose III in an\n[…]\nHistorian Joyce Tyldesley stated that Thutmose III may have ordered public monuments to Hatshepsut and her achievements to be altered or destroyed in order to place her in a lower position of co-regent, meaning he could claim that royal succession ran directly from Thutmose II to Thutmose III without any interference from his aunt. This was supported by Thutmose III's officials, and as Hatshepsut's officials either died or were no longer in the public eye, there was little opposition to this.\n[…]\nTyldesley, along with historians Peter Dorman and Gay Robins, say that the erasure and defacement of Hatshepsut's monuments may have been an attempt to extinguish the memory of female kingship (including its successes, as opposed to the female pharaoh Sobekneferu, who failed to rejuvenate Egypt's fortunes and was therefore more acceptable to the conservative establishment as a tragic figure) and re-legitimise his right to rule.\n[…]\nDjehuty, overseer of the treasury under Hatshepsut's rule"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hatshepsut",
        "situacao": "ok",
        "texto": "Hatshepsut (também aportuguesado como Hatexepsute) (c. 1 507 a.C. – 1 458 a.C.) foi uma princesa, grande esposa real, regente e rainha-faraó do Antigo Egito. Viveu no começo do século XV a.C., pertencendo à XVIII Dinastia do Reino Novo. O seu reinado, de cerca de vinte e dois anos, corresponde a uma era de prosperidade econômica e relativo clima de paz.\n[…]\nHatshepsut passa a governar o Egito, deixando de ser regente para transformar-se em faraó. Contudo, ela não substituiu Tutemés III, havendo na época algo inédito: o poder nas mãos de dois reis. Muitos escritores atuais a chamam de usurpadora por causa da tomada do poder. Porém, ao contrário do que se pensa, Hatshepsut não excluiu o rei da história, e em quase todas as imagens produzidas em monumentos o mesmo aparece junto com ela.\n[…]\nHatshepsut é considerada uma das pessoas mais importantes que governou o antigo Egito, tendo uma influência que ultrapassou os limites nacionais, mesmo que, posteriormente, seu sucessor tenha desprendido ações para apagar seu nome da lista de faraós. Faleceu em 1 473 a.C., e foi a quinta governanta egípcia de sua dinastia. Seu corpo está sepultado no Vale das Rainhas e seus monumentos foram derrubados após sua morte.\n[…]\nTutemés III, quando sobe ao trono como sucessor, procura retirar Hatshepsut da história do Egito como vingança do acontecimento em sua infância. Mokhtar (2010) relata a história contada pelo próprio faraó quando, aos trinta anos de idade, descobriu sua vocação para o reinado. O faraó diz que durante uma participação como sacerdote em uma cerimônia em Carnaque juntamente com seu pai, o oficiante, a estátua de Amom lhe escolheu como rei do Egito através de um oráculo.\n[…]\nApós sua morte, aos 37 anos e com 22 anos de reinado, Tutemés III subiu ao trono do Egito. Hatshepsut foi enterrada na tumba KV20.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "O Egito é uma dádiva do Nilo",
      "descricao": "Frase sobre a dependência do Egito em relação ao rio Nilo, celebrizada pelas Histórias de Heródoto"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A frase o Egito é uma dádiva do Nilo ficou famosa na obra de qual historiador grego do século cinco antes de Cristo?",
    "resposta": "Heródoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nile",
      "https://en.wikipedia.org/wiki/Herodotus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nile",
        "situacao": "ok",
        "texto": "The Nile is a major north-flowing river in northeast Africa which empties into the Mediterranean Sea. At 7,088 kilometers (4,404 mi) long, it is the longest river in the world, although the volume of water it carries is much smaller than other major rivers such as the Amazon or the Congo. The Nile has played a central role in the environmental, economic, and cultural history of Africa for millenni\n[…]\nSince the time of the ancient Greeks, Europeans have been curious about the source of the Nile and the origin of its floods. Herodotus was a Greek historian who visited Egypt in 457 BCE and traveled up the Nile to Aswan; he was puzzled by the Nile floods, which began in the summer – a season when Egypt had no rainfall. Geographers in Europe, Africa, and Arabia – dating back to Eratosthenes in the second century BCE – speculated that the source was a collection of lakes in central Africa.\n[…]\nThe vast majority of Egypt's farmland is located in the Nile Delta, with the remainder along the banks of the Nile.\n[…]\nIsis was a major deity in the Egyptian religion, strongly associated with the Nile. Cults based on Isis spread from Egypt into Europe in the second century BCE. An example of the influence of the cult of Isis in Europe is the Nile mosaic of Palestrina, located in Rome and dated to the first century BCE: the 4 by 3 meter mosaic depicts a detailed Nilotic landscape.\n[…]\nThe Nile is mentioned in the Bible dozens of times, including a story in the Book of Exodus about the infant Moses being placed in a basket in the river. Some authorities identify the river Gihon – which is mentioned in the Book of Genesis as one of the four Rivers of Paradise – as the Nile. A story particularly important to the Coptic peoples of Egypt is found in the Book of Matthew: it recounts how Joseph and Mary fled to Egypt and lived near the Nile for several years, thus avoiding Herod."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Herodotus",
        "situacao": "ok",
        "texto": "Herodotus (Ancient Greek: Ἡρόδοτος, romanised: Hēródotos; c. 484 – c. 425 BC) was a Greek historian and geographer from the Greek city of Halicarnassus (now Bodrum, Turkey), under Persian control in the 5th century BC, and a later citizen of Thurii in modern Calabria, Italy. He wrote the Histories, a detailed account of the Greco-Persian Wars, among other subjects such as the rise of the Achaemeni\n[…]\nAs Herodotus himself reveals, Halicarnassus, though a Dorian city, had ended its close relations with its Dorian neighbours after an unseemly quarrel (I,144), and it had helped pioneer Greek trade with Egypt (II, 178). It was, therefore, an outward-looking, international-minded port within the Persian Empire, and the historian's family could well have had contacts in other countries under Persian rule, facilitating his travels and his research.\n[…]\nH. B. Rosén (ed.) Herodoti Historiae. Vol. I: Libros I–IV continens. (Leipzig 1987)\n[…]\nN. G. Wilson (ed.) Herodoti Historiae. Tomvs prior: Libros I–IV continens. (Oxford 2015)\n[…]\nN. G. Wilson (ed.) Herodoti Historiae. Tomvs alter: Libri V–IX continens. (Oxford 2015)\n[…]\nSeveral English translations of Herodotus's Histories are available in multiple editions, including:\n[…]\nWalter Blanco, Herodotus: The Histories: The Complete Translation, Backgrounds, Commentaries. Edited by Jennifer Tolbert Roberts. New York: W. W. Norton, 2013.\n[…]\nTom Holland, The Histories, Herodotus. Introduction and notes by Paul Cartledge. New York, Penguin, 2013.\n[…]\nThe History of Herodotus, at The Internet Classics Archive (translation by George Rawlinson).\n[…]\nParallel Greek and English text of the History of Herodotus at the Internet Sacred Text Archive\n[…]\nHerodotus Histories on the Perseus Project\n[…]\nHerodotus Histories on the Scaife Viewer\n[…]\nThe Histories of Herodotus, A.D. Godley translation with footnotes (\"Direct link to PDF\" (PDF). Archived from the original on 15 July 2011. (14 MB))"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Nilo",
        "situacao": "ok",
        "texto": "O Nilo é um rio do continente africano, considerado o segundo mais extenso curso d'água do mundo. Situado no nordeste do continente africano, sua nascente está a sul da linha do Equador e sua foz ocorre no mar Mediterrâneo. Ele segue essa trajetória há 30 milhões de anos.\n[…]\nA sua bacia hidrográfica, a bacia do Nilo, ocupa uma área de 3 349 000 km², abrangendo Uganda, Tanzânia, Ruanda, Quénia, República Democrática do Congo, Burundi, Sudão, Sudão do Sul, Etiópia e Egito. A partir da sua fonte mais remota, situada no \"Nyungwe National Park\" do Ruanda, o Nilo tem um comprimento de 7 088 km.\n[…]\nA palavra Nilo (em árabe: nīl), deriva do grego Νεῖλος (Neilos), que seria uma transcrição deformada do termo egípcio Na-eiore, plural de eior designando o delta. Em árabe escreve-se النيل‎ (An-Nil).\n[…]\nA primeira catarata situa-se em Assuão, constituindo hoje em dia a única catarata do Nilo em território egípcio. Esta catarata era na Antiguidade a fronteira sul do Antigo Egito, pois a partir dali começava a Núbia.\n[…]\nAo longo do curso do Nilo existem algumas barragens, sendo uma das mais importantes a Grande Barragem de Assuão.\n[…]\nEm meados do século V a.C., o historiador grego Heródoto realizou uma viagem ao Egito, tendo percorrido o rio até Assuão, a fronteira tradicional do Antigo Egito.\n[…]\nEm 66 d.C., na época do imperador Nero, o exército romano tentou encontrar a nascente do rio. Porém, e segundo Séneca, o pântano Sudd, impediu o exército de avançar. Ainda no século I um mercador grego chamado Diógenes relatou ao geógrafo Marino de Tiro que durante uma viagem pela costa oriental africana decidiu penetrar pelo continente, tendo ao fim de vinte e cinco dias chegado junto a dois grandes lagos e a uma cadeia de montanhas cobertas de neve de onde o Nilo nasceria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Grande Hino a Áton",
      "descricao": "Poema religioso egípcio de louvor ao disco solar Áton, encontrado numa tumba de Amarna"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "O Grande Hino a Áton, poema de louvor ao disco solar com semelhanças com um salmo da Bíblia, é atribuído a qual faraó?",
    "resposta": "Aquenáton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Hymn_to_the_Aten"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Hymn_to_the_Aten",
        "situacao": "ok",
        "texto": "The Great Hymn to the Aten is the longest of a number of hymn-poems written to the sun-disk deity Aten. Composed in the middle of the 14th century BC, it is varyingly attributed to  the 18th Dynasty Pharaoh Akhenaten or his courtiers, depending on the version, who radically changed traditional forms of Egyptian religion by replacing them with Atenism. The hymn bears a notable resemblance to the bi\n[…]\nVarious courtiers' rock tombs at Amarna (ancient Akhet-Aten, the city Akhenaten founded) have similar prayers or hymns to the deity Aten or to the Aten and Akhenaten jointly. One of these, found in almost identical form in five tombs, is known as The Short Hymn to the Aten. The long version discussed in this article was found in the tomb of the courtier (and later Pharaoh) Ay.\n[…]\nNot a rag of superstition or of falsity can be found clinging to this new worship evolved out of the old Aton of Heliopolis, the sole Lord of the universe.\n[…]\nMiriam Lichtheim describes the hymn as \"a beautiful statement of the doctrine of the One God.\"\n[…]\nEgyptologist Dominic Montserrat discusses the terminology used to describe these texts, describing them as formal poems or royal eulogies. He views the word 'hymn' as suggesting \"outpourings of emotion\" while he sees them as \"eulogies, formal and rhetorical statements of praise\" honoring Aten and the royal couple.\n[…]\nThe \"Hymn to the Aten\" was set to music by Philip Glass in his 1984 opera Akhnaten.\n[…]\nJames K. Hoffmeier, The Great Hymn to the Aten: The Ultimate Expression of Atenism? (pp.43-55) in THE JOURNAL OF THE SOCIETY FOR THE STUDY OF EGYPTIAN ANTIQUITIES, (ed: Edmund S. Meltzer & Jacqueline E. Jay), VOLUME XLII (42) 2015-2016, Toronto Canada\n[…]\nComparison between the Egyptian Hymn of Aten and modern scientific conceptions"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Hino_a_Aton",
        "situacao": "ok",
        "texto": "O Grande Hino a Aton é um texto religioso do Antigo Egito cuja autoria é atribuída ao faraó do Império Novo Amen-hotep IV, mais conhecido pelo nome de Aquenáton, que governou o Egito entre 1351 e 1334 AEC (segundo o egiptólogo alemão Jürgen von Beckerath).\n[…]\nEm cinco outros túmulos de Amarna existem composições dedicadas a Aton ou a Aton e ao rei que devido às suas semelhanças se acredita serem oriundas duma mesma fonte.\n[…]\nÉ o principal documento para o estudo das concepções religiosas desenvolvidas por Aquenáton, as quais são por vezes designadas sob o termo de \"atonismo\", dado o deus Aton ocupar nelas o papel principal. É provável que o hino fosse utilizado em celebrações religiosas.\n[…]\nA composição gira em torno de três figuras: Ré-Horakhti na sua manifestação de Aton, Aquenáton e Nefertiti. Aton é apresentado como o criador dos seres e das coisas, que protege, sendo Aquenáton o único ser humano que tem acesso ao deus.\n[…]\nTem sido apontadas as semelhanças entre o hino e o Salmo 104 da Bíblia, o que para alguns sugere uma relação entre o monoteísmo de Aquenáton e o monoteísmo abraâmico, que surgiu cerca de 1800 AEC. Porém, hoje em dia sugere-se que as semelhanças são oriundas do mesmo substrato cultural do Médio Oriente. Muito mais do que um monoteísmo, as concepções religiosas de Aquenáton seriam um henoteísmo exacerbado.\n[…]\nPara além disso, o hino não é completamente original, dado que alguns elementos presentes já se encontram em composições anteriores, como nos Textos dos Sarcófagos e num hino a Amon que se encontra no Papiro Bulaq 17. No entanto, o hino é considerado como uma bela manifestação literária deste período.\n[…]\nEis algumas linhas deste hino:\n[…]\nÓ Aton vivo, aquele que deu início à vida,\n[…]\nTu és belo, grande, refulgente,",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Templo de Hatshepsut",
      "descricao": "Templo mortuário em três terraços da faraó Hatshepsut, em Deir el-Bahari, perto de Luxor."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O templo em terraços de Hatshepsut, em Deir el-Bahari, é tradicionalmente atribuído a qual arquiteto e alto funcionário da rainha?",
    "resposta": "Senenmut",
    "distratores": [
      "Imhotep",
      "Ineni",
      "Amenhotep, filho de Hapu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Senenmut",
      "https://en.wikipedia.org/wiki/Mortuary_Temple_of_Hatshepsut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Senenmut",
        "situacao": "ok",
        "texto": "Senenmut (Ancient Egyptian: sn-n-mwt, sometimes spelled Senmut, Senemut, or Senmout) was an 18th Dynasty ancient Egyptian architect and government official. His name means \"brother of Mut\", but can also translate literally as \"brother of the mother\"; i.e. \"uncle\".\n[…]\nSenenmut claims to be the chief architect of Hatshepsut's works at Deir el-Bahri. Senenmut's masterpiece building project was the Mortuary Temple of Hatshepsut, also known as the Djeser-Djeseru, designed and implemented by Senenmut on a site on the west bank of the Nile, close to the entrance to the Valley of the Kings.\n[…]\nThe building complex design is thought to be derived from the mortuary temple of Mentuhotep II built nearly 500 years earlier at Deir-el-Bahri. Senenmut's importance at the royal court under Hatshepsut is unquestionable:\n[…]\nSome Egyptologists have theorized that Senenmut was Hatshepsut's lover. Facts that are typically cited to support the theory are that Hatshepsut allowed Senenmut to place his name and an image of himself behind one of the main doors in Djeser-Djeseru, and the presence of graffiti in an unfinished tomb used as a rest house by the workers of Djeser-Djeseru depicting a male and a hermaphrodite in pharaonic regalia engaging in an explicit sexual act.\n[…]\nAlthough it is not known where he is buried, Senenmut had a tomb constructed for himself and a cenotaph-hypogeum. The unfinished tomb is at (TT71) in the Tombs of the Nobles and his cenotaph-hypogeum (numbered as TT353), near Hatshepsut's mortuary temple, and contains a famous star ceiling. They were both heavily vandalized during the reign of Thutmose III, perhaps during the latter's campaign to eradicate all trace of Hatshepsut's memory."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mortuary_Temple_of_Hatshepsut",
        "situacao": "ok",
        "texto": "The mortuary temple of Hatshepsut (Egyptian: Ḏsr-ḏsrw, lit. 'Holy of Holies') was built during the reign of Pharaoh Hatshepsut of the Eighteenth Dynasty of Egypt. Located opposite the city of Luxor, it is considered to be a masterpiece of ancient architecture. Its three massive terraces rise above the desert floor and into the cliffs of Deir el-Bahari. Hatshepsut's tomb, KV20, lies inside the same\n[…]\nThe identity of the architect behind the project remains unclear. It is possible that Senenmut, the Overseer of Works, or Hapuseneb, the High Priest, were responsible. It is also likely that Hatshepsut provided input to the project. Throughout its construction, the temple plan underwent several revisions between the seventh and twentieth years of Hatshepsut's reign.\n[…]\nBeyond this is a vestibule containing two columns and a double sanctuary. Reliefs on the walls of the shrine depict Hathor with Hatshepsut, the goddess Weret-hekhau presenting the pharaoh with a Menat necklace, and Senenmut. Hathor holds special significance in Thebes, representing the hills of Deir el-Bahari, and also to Hatshepsut, who presented herself as a reincarnation of the goddess. Hathor is also associated with Punt, which is the subject of reliefs in the proximate portico.\n[…]\nIt has been suggested that Hatshepsut's tomb in the Valley of the Kings, KV20, was meant to be an element of the mortuary complex at Deir el-Bahari. The arrangement of the temple and tomb bear a spatial resemblance to the pyramid complexes of the Old Kingdom, which comprised five central elements: valley temple, causeway, mortuary temple, main pyramid, and cult pyramid. Hatshepsut's temple complex included the valley temple, causeway, and mortuary temple.\n[…]\nPolish-Egyptian Archaeological and Conservation Mission at the Temple of Hatshepsut at Deir el-Bahari\n[…]\nAll Polish Deir el-Bahari Projects"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senemute",
        "situacao": "ok",
        "texto": "Senemute era um arquitecto da 18ª Dinastia do Egito. Existem algumas provas controversas que o dão com amante da mulher do faraó Hatexepsute.\n[…]\nAlguns egiptólogos pensam que Senemute começou por estar ao serviço no reinado de Tutemés I, mas é mais provável ter sido durante o reinado de Tutemés II ou quando Hatexepsute estava no poder. Depois de Hatshepsut ter sido coroado, foram atribuídos a Senemute cargos mais importantes e foi promovido a vizir.\n[…]\nSenemute supervisionou a obtenção e transporte dos materiais para dois obeliscos gémeos da entrada do Templo de Carnaque, e a sua construção. Um deles continua de pé nos nossos dias.\n[…]\nA obra mais grandiosa de Senemute foi o Templo de Hatexepsute em Deir Elbari. Foi construído na margem direita do Nilo à entrada do Vale dos Reis. Djeser-Djeseru, uma estrutura colunada harmoniosamente concebida foi também um dos seus projetos mais ambiciosos. Djeser-Djeseru é constituído por uma sobreposição de terraços enormes adornados com múltiplos jardins. Este monumento é considerado por muitos um dos maiores empreendimentos da Antiguidade.\n[…]\nNão se sabe onde foi sepultado. Foram-lhe construídos dois túmulos, um em Luxor e outro junto a Deir Elbari, perto do Templo de Hatexepsute. Ambos os túmulos foram vandalizados durante o reinado de Tutemés III, durante uma campanha de erradicação de memórias da antiga rainha Hatexepsute.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Farol de Alexandria",
      "descricao": "Torre de sinalização construída pelos ptolomeus na ilha de Faros, em Alexandria, uma das Sete Maravilhas do Mundo Antigo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que ilha diante de Alexandria, onde ficava uma das Sete Maravilhas do Mundo Antigo, deu nome às torres que orientam navios na costa?",
    "resposta": "Faros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
      "https://en.wikipedia.org/wiki/Pharos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nIn 1994, a team of French archaeologists dived in the water of Alexandria's Eastern Harbour and discovered some remains of the lighthouse on the sea floor. In 2016, the Ministry of State of Antiquities in Egypt had plans to turn submerged ruins of ancient Alexandria, including those of the Pharos, into an underwater museum.\n[…]\nThe etymology of \"Pharos\" is uncertain. The word became generalised in modern Greek to mean \"lighthouse\" (φάρος 'fáros'), and was borrowed by many Romance languages such as Catalan or Romanian (far), French (phare), Italian and Spanish (faro) – and thence into Esperanto (faro), and Portuguese (farol), and even some Slavic languages like Bulgarian (far). In French, Portuguese, Spanish, Turkish, Serbian, Bulgarian and Russian, a derived word means \"headlight\" (phare, farol, faro, far, фар, фара).\n[…]\nChugg, Andrew Michael (2024). The Pharos Lighthouse In Alexandria – Second Sun and Seventh Wonder of Antiquity. Routledge.\n[…]\nClarie, Thomas C. (2009). Pharos – A Lighthouse For Alexandria. Back Channel. ISBN 978-1-934-58212-1.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nThompson, Alice (2002). Pharos. London: Virago.\n[…]\nLighthouse of Alexandria—World History Encyclopedia\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi\n[…]\nA frightening vision: on plans to rebuild the Alexandria Lighthouse (Archived June 12, 2018, at the Wayback Machine)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pharos",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nIn 1994, a team of French archaeologists dived in the water of Alexandria's Eastern Harbour and discovered some remains of the lighthouse on the sea floor. In 2016, the Ministry of State of Antiquities in Egypt had plans to turn submerged ruins of ancient Alexandria, including those of the Pharos, into an underwater museum.\n[…]\nThe etymology of \"Pharos\" is uncertain. The word became generalised in modern Greek to mean \"lighthouse\" (φάρος 'fáros'), and was borrowed by many Romance languages such as Catalan or Romanian (far), French (phare), Italian and Spanish (faro) – and thence into Esperanto (faro), and Portuguese (farol), and even some Slavic languages like Bulgarian (far). In French, Portuguese, Spanish, Turkish, Serbian, Bulgarian and Russian, a derived word means \"headlight\" (phare, farol, faro, far, фар, фара).\n[…]\nChugg, Andrew Michael (2024). The Pharos Lighthouse In Alexandria – Second Sun and Seventh Wonder of Antiquity. Routledge.\n[…]\nClarie, Thomas C. (2009). Pharos – A Lighthouse For Alexandria. Back Channel. ISBN 978-1-934-58212-1.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nThompson, Alice (2002). Pharos. London: Virago.\n[…]\nLighthouse of Alexandria—World History Encyclopedia\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi\n[…]\nA frightening vision: on plans to rebuild the Alexandria Lighthouse (Archived June 12, 2018, at the Wayback Machine)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Farol_de_Alexandria",
        "situacao": "ok",
        "texto": "Farol de Alexandria (em grego:  ὁ Φάρος της Ἀλεξανδρείας) foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do mundo antigo, sendo que por muitos séculos foi uma das estruturas mais altas no mundo. Danificado por três terremotos entre os anos de 956 e 1323, tornou-se uma ruína abandon\n[…]\nEm 2015, o Ministério de Estado das Antiguidades do Egito planejou transformar as ruínas submersas da antiga Alexandria, incluindo as de Faros, em um museu subaquático. Em maio do mesmo ano, o Comitê Permanente do Egito para Antiguidades anunciou planos de reconstruir o monumento.\n[…]\nFaros era uma pequena ilha localizada na margem ocidental do Delta do Nilo. Em 332 a.C., Alexandre, o Grande fundou a cidade de Alexandria em um istmo oposto a Faros. Alexandria e Faros foram conectadas depois por um molhe que media mais de 1200 metros e era chamado de Heptastádio (\"sete estádios\" - um estádio era uma unidade de comprimento da Grécia Antiga que media aproximadamente 180 m).\n[…]\nMoedas romanas encontrado no mosteiro alexandrino mostram que uma estátua de um Tritão ficava posicionada em cada um dos quatro cantos do edifício. Uma estátua de Poseidon ou de Zeus ficava no topo do farol. Os blocos de alvenaria do Faros estavam interligados, selados com chumbo derretido, para resistir às ondas do mar.\n[…]\nO escritor do século X Almaçudi relata um conto lendário sobre a destruição do farol, segundo o qual no tempo do califa Abedal Maleque ibne Maruane (705-715) os bizantinos enviaram um agente eunuco que adotou o islamismo e a confiança do califa, o que lhe garantiu permissão para procurar o tesouro escondido na base do farol. A busca foi feita astutamente, de tal maneira que os fundamentos foram minados e Faros entrou em colapso. O agente conseguiu escapar em um navio que esperava por ele.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Farol de Alexandria",
      "descricao": "Torre de sinalização construída pelos ptolomeus na ilha de Faros, em Alexandria, uma das Sete Maravilhas do Mundo Antigo"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Farol de Alexandria ficou de pé por mais de mil e quinhentos anos. Que fenômeno natural o danificou e acabou por arruiná-lo na Idade Média?",
    "resposta": "Terremotos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nIn his encyclopedic manuscript Geographica, Strabo, who visited Alexandria in the late first century BC, reported that Sostratus of Cnidus had a dedication to the \"Saviour Gods\" inscribed in metal letters on the lighthouse. Writing in the first century AD, Pliny the Elder stated in his Natural History that Sostratus was the architect, although this conclusion is disputed.\n[…]\nThe etymology of \"Pharos\" is uncertain. The word became generalised in modern Greek to mean \"lighthouse\" (φάρος 'fáros'), and was borrowed by many Romance languages such as Catalan or Romanian (far), French (phare), Italian and Spanish (faro) – and thence into Esperanto (faro), and Portuguese (farol), and even some Slavic languages like Bulgarian (far). In French, Portuguese, Spanish, Turkish, Serbian, Bulgarian and Russian, a derived word means \"headlight\" (phare, farol, faro, far, фар, фара).\n[…]\nChugg, Andrew Michael (2024). The Pharos Lighthouse In Alexandria – Second Sun and Seventh Wonder of Antiquity. Routledge.\n[…]\nClarie, Thomas C. (2009). Pharos – A Lighthouse For Alexandria. Back Channel. ISBN 978-1-934-58212-1.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nThompson, Alice (2002). Pharos. London: Virago.\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi\n[…]\nA frightening vision: on plans to rebuild the Alexandria Lighthouse (Archived June 12, 2018, at the Wayback Machine)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Farol_de_Alexandria",
        "situacao": "ok",
        "texto": "Farol de Alexandria (em grego:  ὁ Φάρος της Ἀλεξανδρείας) foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do mundo antigo, sendo que por muitos séculos foi uma das estruturas mais altas no mundo. Danificado por três terremotos entre os anos de 956 e 1323, tornou-se uma ruína abandon\n[…]\nFaros era uma pequena ilha localizada na margem ocidental do Delta do Nilo. Em 332 a.C., Alexandre, o Grande fundou a cidade de Alexandria em um istmo oposto a Faros. Alexandria e Faros foram conectadas depois por um molhe que media mais de 1200 metros e era chamado de Heptastádio (\"sete estádios\" - um estádio era uma unidade de comprimento da Grécia Antiga que media aproximadamente 180 m).\n[…]\nJudith McKenzie escreve que \"as descrições árabes do farol são notavelmente consistentes, embora tenha sido reparado várias vezes, especialmente após danos causados ​​por terremotos. A altura que dão varia apenas 15%, de 103 a 118 metros, em uma base quadrada com lados de cerca de 30 metros.\"\n[…]\nA descrição mais completa do farol vem do viajante árabe Abou Haggag Youssef Ibn Mohammed el-Balawi el-Andaloussi, que visitou Alexandria em 1166.\n[…]\nO farol foi gravemente danificado por um terremoto em 956 e novamente em 1303 e 1323. Finalmente o restante da estrutura desapareceu em 1480, quando o então Sultão do Egito, Qaitbay, construiu uma fortaleza medieval na plataforma do local do farol usando algumas das pedras caídas.\n[…]\nNo final de 1994, arqueólogos gregos liderados por Jean-Yves Empereur redescobriram os restos físicos do farol no piso do Porto Oriental de Alexandria. Alguns destes restos foram trazidos acima e ficaram em exposição pública até o fim de 1995. Subsequentes imagens de satélite revelaram mais vestígios. É possível mergulhar e ver as ruínas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ankh",
      "descricao": "Símbolo egípcio em forma de cruz com uma alça no alto, frequentemente seguro pelos deuses nas representações"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O ankh, a cruz com uma alça no alto que os deuses seguram nas pinturas egípcias, era o hieróglifo de qual palavra?",
    "resposta": "Vida",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ankh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ankh",
        "situacao": "ok",
        "texto": "The ankh or key of life is an ancient Egyptian hieroglyphic symbol used to represent the word for \"life\" and, by extension, as a symbol of life itself.\n[…]\nElsewhere in the Near East, the sign was incorporated into Anatolian hieroglyphs to represent the word for \"life\", and the sign was used in the artwork of the Minoan civilization centered on Crete. Minoan artwork sometimes combined the ankh, or the related tyet sign, with the Minoan double axe emblem.\n[…]\nIt resembles the staurogram, a sign that resembles a Christian cross with a loop to the right of the upper bar and was used by early Christians as a monogram for Jesus, as well as the crux ansata, or \"handled cross\", which is shaped like an ankh with a circular rather than oval or teardrop-shaped loop. The staurogram has been suggested to be influenced by the ankh, but the earliest Christian uses of the sign date to around AD 200, well before the earliest Christian adoption of the ankh.\n[…]\nThe earliest known example of a crux ansata comes from a copy of the Gospel of Judas from the 3rd or early 4th century AD. The adoption of this sign may have been influenced by the staurogram, the ankh, or both.\n[…]\nAccording to Socrates of Constantinople, when Christians were dismantling Alexandria's greatest temple, the Serapeum, in 391 AD, they noticed cross-like signs inscribed on the stone blocks. Pagans who were present said the sign meant \"life to come\", an indication that the sign Socrates referred to was the ankh; Christians claimed the sign was their own, indicating that they could easily regard the ankh as a crux ansata.\n[…]\nMedia related to Ankh at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ankh",
        "situacao": "ok",
        "texto": "O ankh ou chave da vida (em unicode: ☥) é um antigo símbolo hieroglífico egípcio usado na arte e na escrita egípcias para representar a palavra «vida» e, por extensão, é símbolo da própria vida.\n[…]\nO ankh tem uma forma de cruz, mas com um laço em forma de lágrima na parte superior da linha vertical da mesma. As origens do símbolo não são conhecidas, embora tenham sido propostas muitas hipóteses e teorias. Foi usado na escrita como um sinal triliteral, representando uma sequência de três consoantes, Ꜥ-n-ḫ. Esta sequência foi encontrada em várias palavras egípcias, incluindo as palavras que significam «espelho», «buquê floral» e «vida».\n[…]\nNa língua egípcia, essas consoantes foram encontradas no verbo que significa \"viver\", o substantivo que significa \"vida\", e palavras derivadas delas, como sꜤnḫ, que significa \"causar a vida\" ou \"nutrir\"; Ꜥnḫ evoluiu para ⲱⲛϩ (onh) no estágio copta da língua. O sinal é conhecido em inglês como \"ankh\", com base na pronúncia hipotética da palavra egípcia, ou como \"chave da vida\", com base em seu significado.\n[…]\nAllen, em um livro introdutório sobre a língua egípcia publicado em 2014, assume que o sinal originalmente significava \"alça de sandália\" e o usa como um exemplo do princípio rebus na escrita hieroglífica.\n[…]\nNa crença egípcia, o sêmen estava conectado com a vida e, até certo ponto, com \"poder\" ou \"domínio\", e alguns textos indicam que os egípcios acreditavam que o sêmen se originava nos ossos. Portanto, Gordon e Schwabe sugerem que os sinais são baseados em partes da anatomia do touro através das quais se pensava que o sêmen passava: o ankh é uma vértebra torácica, o djed é o sacro e as vértebras lombares, e o was é o pênis seco do touro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Cartucho",
      "descricao": "Contorno oval que envolve os nomes reais nos hieróglifos egípcios"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O contorno oval que envolve os nomes dos faraós nos hieróglifos ganhou um nome francês dos soldados de Napoleão. Com que objeto eles o compararam?",
    "resposta": "Cartucho de munição",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cartouche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cartouche",
        "situacao": "ok",
        "texto": "In Egyptian hieroglyphs, a cartouche ( kar-TOOSH) is an oval with a line at one end tangent to it, indicating that the text enclosed is a royal name. The first examples of the cartouche are associated with pharaohs at the end of the Third Dynasty, but the feature did not come into common use until the beginning of the Fourth Dynasty under Pharaoh Sneferu.\n[…]\nWhile the cartouche is usually vertical with a horizontal line, if it makes the name fit better it can be horizontal, with a vertical line at the end (in the direction of reading). The ancient Egyptian word for cartouche was shenu (compare with Coptic ϣⲛⲉ šne yielding eventual sound changes), and the cartouche was essentially an expanded shen ring. Demotic script reduced the cartouche to a pair of brackets and a vertical line.\n[…]\nAt times amulets took the form of a cartouche displaying the name of a king and placed in tombs. Archaeologists often find such items important for dating a tomb and its contents. Cartouches were formerly only worn by pharaohs. The oval surrounding their name was meant to protect them from evil spirits in life and after death. The cartouche has become a symbol representing good luck and protection from evil.\n[…]\nAs a hieroglyph, a cartouche can represent the Egyptian-language word for \"name\". It is listed as no. V10 in Gardiner's Sign List.\n[…]\nToki Pona, a modern constructed language using cartouches to write proper names\n[…]\n\"Cartouche\". Merriam-Webster.com Dictionary. Merriam-Webster. OCLC 1032680871.\n[…]\n\"Ancient Egyptian Cartouche Lesson\". Artyfactory.com. Archived from the original on 2023-10-19. Retrieved 2024-02-27.\n[…]\n\"Cartouches\" (PDF) (in Arabic). Egypt State Information Service. Archived from the original (PDF, 8.87 MB) on June 15, 2011. Retrieved 13 July 2010.\n[…]\nAncient Egyptian Cartouche facts\n[…]\nThe Ancient Egyptian Cartouche Archived 2025-06-23 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cartucho_eg%C3%ADpcio",
        "situacao": "ok",
        "texto": "Um cartucho  (ou cartela) é um símbolo com uma forma oblonga, rematado por um traço, onde se escrevia o nome de um rei do Antigo Egito.\n[…]\nEm português, a designação \"cartucho\" originou-se do francês \"cartouche\", termo cunhado pelos soldados de Napoleão Bonaparte na época da invasão ao Egito, quando notaram uma semelhança entre o desenho e os cartuchos das suas balas. Na língua egípcia o cartucho era designado \"chenu\".\n[…]\nA partir da V dinastia os reis egípcios tinham cinco nomes que formavam aquilo que se designa como titulatura. Dois destes nomes eram escritos em hieróglifos no interior dos cartuchos: o nome de nascimento do soberano (também conhecido como nomen ou nome de \"Filho de Ré\") e o nome que este assumia aquando da sua coroação (ou prenomen ou nome do Rei do Alto e do Baixo Egito).\n[…]\nOs cartuchos derivam do círculo chen, que simbolizava o Sol e a Eternidade. Surgem pela primeira vez na época da IV dinastia egípcia.\n[…]\nOs sarcófagos e as câmaras funerárias do tempo da XVIII dinastia egípcia reproduziam a forma de um cartucho. Simbolicamente procurava-se proteger o corpo do rei com este símbolo.\n[…]\nNo tempo de Aquenáton, o cartucho também foi usado para se inscrever o nome do deus Aton. A partir da XXI dinastia as mulheres que ocuparam o cargo de Adoradora divina de Amon também tiveram direito a colocar o seu nome de coroação numa cartela. A sua forma serviu igualmente como inspiração para objectos como anéis ou caixas. Existiram também cartuchos nos quais se inscreviam os nomes de reis e de cidades derrotados pelos Egípcios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Livro dos Mortos",
      "descricao": "Coletânea egípcia de fórmulas mágicas escritas em papiro e postas nas tumbas para guiar o morto no além"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome egípcio original do Livro dos Mortos costuma ser traduzido como livro de sair para onde?",
    "resposta": "Para a luz do dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Book_of_the_Dead"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Book_of_the_Dead",
        "situacao": "ok",
        "texto": "The Book of the Dead is the name given to an ancient Egyptian funerary text generally written on papyrus and used from the beginning of the New Kingdom (around 1550 BC) to around 50 BC. \"Book\" is the closest term to describe the loose collection of texts consisting of a number of magic spells intended to assist a dead person's journey through the Duat, or underworld, and into the afterlife and wri\n[…]\nIn 1842, the Egyptologist Karl Richard Lepsius introduced for these texts the German name Todtenbuch (modern spelling Totenbuch), translated to English as 'Book of the Dead'. The original Egyptian name for the text, transliterated rw nw prt m hrw, is translated as Spells of Coming Forth by Day.\n[…]\nIn one case, a Book of the Dead was written on second-hand papyrus.\n[…]\nBardo Thodol (Tibetan book of the dead)\n[…]\nTaylor, John H. (Editor), Ancient Egyptian Book of the Dead: Journey through the afterlife. British Museum Press, London, 2010. ISBN 978-0-7141-1993-9\n[…]\nAllen, Thomas George, The Egyptian Book of the Dead: Documents in the Oriental Institute Museum at the University of Chicago. University of Chicago Press, Chicago 1960.\n[…]\nAllen, Thomas George, The Book of the Dead or Going Forth by Day. Ideas of the Ancient Egyptians Concerning the Hereafter as Expressed in Their Own Terms, SAOC vol. 37; University of Chicago Press, Chicago, 1974.\n[…]\nFaulkner, Raymond O; Andrews, Carol (editor), The Ancient Egyptian Book of the Dead. University of Texas Press, Austin, 1972.\n[…]\nScalf, Foy (editor), Book of the Dead: Becoming a God in Ancient Egypt, Oriental Institute Museum Publications 39, The Oriental Institute of the University of Chicago, 2017  ARCHIVED COPY\n[…]\nDas altägyptische Totenbuch - ein digitales Textzeugenarchiv Complete digital archive of all witnesses for the Book of the Dead (with descriptions of the (c. 3000) objects and (c. 20,000) images)\n[…]\nVideo: British Museum curator introduces the Book of the Dead"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Livro_dos_Mortos",
        "situacao": "ok",
        "texto": "O Livro dos Mortos (em egípcio:  𓂋𓏤𓈒𓈒𓈒𓏌𓏤𓉐𓂋𓏏𓂻𓅓𓉔𓂋𓅱𓇳𓏤, rw n(y)w prt m hrw(w)) é um antigo texto funerário egípcio geralmente escrito em papiro e usado desde o início do Império Novo (cerca de 1550 a.C.) O nome egípcio original para o texto, transliterado rw nw prt m hrw, é traduzido como Livro do Surgimento do Dia.\n[…]\nO Livro dos Mortos, que era colocado no caixão ou câmara mortuária do falecido, fazia parte de uma tradição de textos funerários que inclui os anteriores Textos da Pirâmide e Textos do Caixão, que foram pintados em objetos, não escritos em papiro. Alguns dos feitiços incluídos no livro foram extraídos dessas obras mais antigas e datam do terceiro milênio a.C. Outros feitiços foram compostos posteriormente na história egípcia, datando do Terceiro Período Intermediário (séculos 11 a 7 a.C.).\n[…]\nO melhor exemplo existente do Livro Egípcio dos Mortos na antiguidade é o Papiro de Ani. Ani era um escriba egípcio. Foi descoberto por Sir E. A. Wallis Budge em 1888 e levado para o Museu Britânico, onde reside atualmente.\n[…]\nA primeira tradução do Livro dos mortos foi publicada em 1842. Foi uma edição em língua alemã, fruto do trabalho do egiptólogo alemão Karl Richard Lepsius, traduzida com base no Papyrus de Iuef-Ânkh, da época ptolomaica e guardada no museu egiptólogo de Turim. Lepsius dividiu esse papiro, um dos mais completos, em 165 capítulos numerados (um capítulo por cada fórmula mágica distinta). Por razões práticas, essa numeração mesmo que arbitrária é sempre atual no meio da filologia egípcia.\n[…]\nMuseu Egípcio (Turim) Livro dos Mortos de Taysnakht, filha de Taymes. O Museu de Turim, depois do Museu de Cairo, no próprio Egito, é considerado o segundo maior Museu egípcio existente, contendo milhares de artefatos, que eram colecionados pela realeza da família Saboia da Casa de Saboia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Livro dos Mortos",
      "descricao": "Coletânea egípcia de fórmulas mágicas escritas em papiro e postas nas tumbas para guiar o morto no além"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na cena do julgamento descrita no Livro dos Mortos, o coração do morto era posto numa balança. Contra o que ele era pesado?",
    "resposta": "A pena de Maat",
    "fonte": [
      "https://en.wikipedia.org/wiki/Book_of_the_Dead",
      "https://en.wikipedia.org/wiki/Maat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Book_of_the_Dead",
        "situacao": "ok",
        "texto": "The Book of the Dead is the name given to an ancient Egyptian funerary text generally written on papyrus and used from the beginning of the New Kingdom (around 1550 BC) to around 50 BC. \"Book\" is the closest term to describe the loose collection of texts consisting of a number of magic spells intended to assist a dead person's journey through the Duat, or underworld, and into the afterlife and wri\n[…]\nThe deceased's first task was to correctly address each of the forty-two Assessors of Maat by name, while reciting the sins they did not commit during their lifetime. This process allowed the dead to demonstrate that they knew each of the judges' names or Ren and established that they were pure, and free of sin.\n[…]\nIf all the obstacles of the Duat could be negotiated, the deceased would be judged in the \"Weighing of the Heart\" ritual, depicted in Spell 125. The deceased was led by the god Anubis into the presence of Osiris. There, the dead person swore that he had not committed any sin from a list of 42 sins, reciting a text known as the \"Negative Confession\". Then the dead person's heart was weighed on a pair of scales, against the goddess Maat, who embodied truth and justice.\n[…]\nMaat was often represented by an ostrich feather, the hieroglyphic sign for her name. At this point, there was a risk that the deceased's heart would bear witness, owning up to sins committed in life; Spell 30B guarded against this eventuality. If the scales balanced, this meant the deceased had led a good life. Anubis would take them to Osiris and they would find their place in the afterlife, becoming maa-kheru, meaning \"vindicated\" or \"true of voice\".\n[…]\nIf the heart was out of balance with Maat, then another fearsome beast called Ammit, the Devourer, stood ready to eat it and put the dead person's afterlife to an early and rather unpleasant end.\n[…]\nVideo: British Museum curator introduces the Book of the Dead"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Maat",
        "situacao": "ok",
        "texto": "Maʽat  or Maat  (Egyptian: mꜣꜥt /ˈmuʀʕat/, Coptic: ⲙⲉⲓ) is the ancient Egyptian concept of truth, balance, law, morality, and justice. Maat was also the goddess who personified this concept and regulated the stars, seasons, and the actions of mortals and the deities who had brought order from chaos at the moment of creation. Her ideological opposite was Isfet (Egyptian jzft), meaning injustice, ch\n[…]\nThoth was the patron of scribes who is described as the one \"who reveals Maat and reckons Maat; who loves Maat and gives Maat to the doer of Maat\". In texts such as the Instruction of Amenemope the scribe is urged to follow the precepts of Maat in his private life as well as his work. The exhortations to live according to Maat are such that these kinds of instructional texts have been described as \"Maat Literature\".\n[…]\nWhen rhetors are attempting to achieve balance in their arguments, they are practicing Maat.\n[…]\nThe Tale of The Eloquent Peasant is an extended discourse on the nature of Maat in which an officer under the direction of the King is described as taking the wealth of a nobleman and giving it to a poor man he had abused. Another text describes how the divine King:\n[…]\nIn the Duat, the Egyptian underworld, the hearts of the dead were said to be weighed against her single \"Feather of Maat\", symbolically representing the concept of Maat, in the Hall of Two Truths. This is why hearts were left in Egyptian mummies while their other organs were removed, as the heart (called \"ib\") was seen as part of the Egyptian soul. If the heart was found to be lighter or equal in weight to the feather of Maat, the deceased had led a virtuous life and would go on to Aaru.\n[…]\nMaad – Title given to a male monarch by the Serer people of Senegal, Gambia and Mauritania, and sometimes mistakenly confused with the Serer religious title Maat.\n[…]\nMedia related to Maat at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Livro_dos_Mortos",
        "situacao": "ok",
        "texto": "O Livro dos Mortos (em egípcio:  𓂋𓏤𓈒𓈒𓈒𓏌𓏤𓉐𓂋𓏏𓂻𓅓𓉔𓂋𓅱𓇳𓏤, rw n(y)w prt m hrw(w)) é um antigo texto funerário egípcio geralmente escrito em papiro e usado desde o início do Império Novo (cerca de 1550 a.C.) O nome egípcio original para o texto, transliterado rw nw prt m hrw, é traduzido como Livro do Surgimento do Dia.\n[…]\nO melhor exemplo existente do Livro Egípcio dos Mortos na antiguidade é o Papiro de Ani. Ani era um escriba egípcio. Foi descoberto por Sir E. A. Wallis Budge em 1888 e levado para o Museu Britânico, onde reside atualmente.\n[…]\nA primeira tradução do Livro dos mortos foi publicada em 1842. Foi uma edição em língua alemã, fruto do trabalho do egiptólogo alemão Karl Richard Lepsius, traduzida com base no Papyrus de Iuef-Ânkh, da época ptolomaica e guardada no museu egiptólogo de Turim. Lepsius dividiu esse papiro, um dos mais completos, em 165 capítulos numerados (um capítulo por cada fórmula mágica distinta). Por razões práticas, essa numeração mesmo que arbitrária é sempre atual no meio da filologia egípcia.\n[…]\nTaylor, John H. (Editor), Ancient Egyptian Book of the Dead: Journey through the afterlife. British Museum Press, London, 2010. ISBN 978-0-7141-1993-9\n[…]\nMuseu Egípcio (Turim) Livro dos Mortos de Taysnakht, filha de Taymes. O Museu de Turim, depois do Museu de Cairo, no próprio Egito, é considerado o segundo maior Museu egípcio existente, contendo milhares de artefatos, que eram colecionados pela realeza da família Saboia da Casa de Saboia\n[…]\nUma das vinhetas mais conhecidas do Livro dos Mortos é a da pesagem do coração (“psicostasia”) no tribunal da Dupla Verdade, na presença de Osíris e outros deuses do submundo. O coração do falecido é colocado em um prato de uma balança e uma pena no outro prato. A pena simboliza a deusa Maat, protetora da justiça e da ordem cósmica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Tutmés III",
      "descricao": "Faraó da décima oitava dinastia, sucessor de Hatshepsut, conhecido pelas muitas campanhas militares no século quinze antes de Cristo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa de suas muitas campanhas militares vitoriosas, Tutmés Terceiro foi apelidado por historiadores modernos com o nome de qual general francês?",
    "resposta": "Napoleão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thutmose_III"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thutmose_III",
        "situacao": "ok",
        "texto": "Thutmose III (variously also spelled Tuthmosis or Thothmes, Ancient Egyptian: 𓅝𓄟𓄤𓆣; c. 1485 BC - 11 March 1425 BC), sometimes called Thutmose the Great, was a pharaoh of the 18th Dynasty of Egypt. He is regarded as one of the greatest warriors, military commanders, and military strategists of his time; as Egypt's preeminent warrior pharaoh and conqueror; and as a dominant figure in the New Kingdom\n[…]\nThutmose III conducted between 17 and 20 military campaigns, all victorious, which brought ancient Egypt's empire to its zenith. They are detailed in the inscriptions known as the Annals of Thutmose III. He also created the ancient Egyptian navy, the first navy in the ancient world. Historian Richard Gabriel called him the \"Napoleon of Egypt\".\n[…]\nThutmose III conducted at least 16 campaigns in 20 years. American Egyptologist James Breasted referred to him as  \"the Napoleon of Egypt\" for his conquests and expansionism. He is recorded to have captured 350 cities during his rule and conquered much of the Near East from the Euphrates River to Nubia. He was the first pharaoh after Thutmose I to cross the Euphrates River, doing so during his campaign against Mitanni.\n[…]\nIn Year 38, Thutmose III conducted his 13th military campaign returning to Nuhašše for a very minor campaign.\n[…]\nHistory of ancient Egypt\n[…]\nRedford, Donald B. (2003). The Wars in Syria and Palestine of Thutmose III. Culture and History of the Ancient Near East 16. Leiden: Brill. ISBN 978-90-04-12989-4.\n[…]\nRiver God by Smith, Wilbur along with the rest of his Egyptian series of historical fiction novels are based in a large part on Thutmose III's time along with his story and that of his mother through the eyes of his mother's vizier mixing in elements of the Hyksos' domination and eventual overthrow.\n[…]\nA Short History of Ancient Egypt – Dynasties XVIII to XX, with a few Thutmoside documents translated."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tutem%C3%A9s_III",
        "situacao": "ok",
        "texto": "Tutemés III ou Tutemósis III (sendo esta última forma a versão helenizada do seu nome) foi o sexto faraó da XVIII dinastia egípcia, da época do Império Novo. O seu prenome ou nome de coroação foi Menkheperré o que significa \"Estável é a manifestação de Ré\".\n[…]\nTutemés III notabilizou-se pela sua atividade militar, mas também pela sua intensa atividade construtora. Alguns autores consideram-no como um dos faraós mais importantes do Antigo Egito, tendo mesmo sido apelidado de \"Napoleão do Egito\" por James Henry Breasted.\n[…]\nNo trigésimo terceiro ano do seu reinado, Tutemés realiza uma campanha que atinge o próprio reino de Mitani. O faraó ordena a construção de vários barcos em madeira de cedro, que são colocados em carroças puxadas por bois e que serviriam para atravessar o rio Eufrates. O confronto não está descrito em pormenor nas fontes históricas, mas sabe-se que o seu resultado foi a fuga do rei de Mitani e a tomada de soldados e de mulheres do seu harém.\n[…]\nEm comemoração pela vitória, Tutemés manda erguer uma estela junto ao rio ao lado de uma estela que tinha sido erguida pelo seu avô Tutemés I. De regresso ao Egito aproveita para caçar elefantes no vale do Orontes; de acordo com as fontes o faraó teria sido imprudente, enfurecendo os animais que se encontravam num lago, tendo sido necessário que um dos seus militares, Amenemheb, entrasse na água para salvá-lo.\n[…]\nTutemés III foi enterrado no Vale dos Reis, na tumba KV34, descoberta em 1898 pelo egiptólogo francês Victor Loret. À semelhança do que aconteceu com outros túmulos este também foi alvo de pilhagens.\n[…]\nGRIMAL, Nicholas - History of Ancient Egypt. Blackwell Publishing, 1994. ISBN 0-631-19396-0.\n[…]\n(em inglês) Tutemés III",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Tutancâmon",
      "descricao": "Faraó da décima oitava dinastia do Egito, morto por volta dos dezoito anos, cuja tumba foi achada intacta em 1922."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de adotar o nome que homenageia o deus Amon, Tutancâmon foi chamado por um nome que homenageava o disco solar. Qual era?",
    "resposta": "Tutancáton",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tutankhamun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tutankhamun",
        "situacao": "ok",
        "texto": "Tutankhamun or Tutankhamen (Ancient Egyptian: twt-ꜥnḫ-jmn; c. 1342 BC – c. 1323 BC), was the third to last pharaoh of the Eighteenth Dynasty of ancient Egypt, who ruled c. 1332 – 1323 BC, dying at about the age of 19. Born Tutankhaten, his administration restored the traditional polytheistic form of ancient Egyptian religion, undoing a previous shift to the religion known as Atenism. Tutankhamun's\n[…]\nand ... to the royal ka of Tutankhamun\n[…]\nTutankhamun's trumpets – Pair of the oldest operational trumpets\n[…]\nBell, Lanny (1985). Aspects of the Cult of the Deified Tutankhamun.\n[…]\nBrier, Bob (17 January 2023). Tutankhamun and the Tomb that Changed the World. New York, NY: Oxford University Press. ISBN 978-0-19-763505-6.\n[…]\nBrier, Bob (31 December 1998). The Murder of Tutankhamen. Weidenfeld and Nicolsen. ISBN 978-0-9655988-6-6.\n[…]\nDodson, Aidan (25 October 2022). Tutankhamun, King of Egypt. Cairo: Lives and Afterlives. ISBN 978-1-64903-161-7.\n[…]\nEaton-Krauss, Marianne (17 December 2015). The Unknown Tutankhamun. London New York: Bloomsbury Publishing. ISBN 978-1-4725-7563-0.\n[…]\nHawass, Zahi (28 October 2025). Discovering Tutankhamun. Cairo: The American University in Cairo Press. ISBN 978-1-64903-463-2.\n[…]\nReeves, Nicholas (10 January 2023). Complete Tutankhamun. London: National Geographic Books. ISBN 978-0-500-05216-7.\n[…]\nKawai, Nozumu, \"The Time of Tutankhamun: What the new evidence reveals\" in SCRIBE: The Magazine of the American Research Center in Egypt, Unlocking Tutankhamun, Spring 2022, 76 pages\n[…]\nShaw, Garry J. (3 January 2023). The Story of Tutankhamun. New Haven: Yale University Press. ISBN 978-0-300-26904-8.\n[…]\nTyldesley, Joyce (13 April 2023). Tutankhamun: Lost for three thousand years, misunderstood for a century. Headline. ISBN 978-1-4722-8986-5.\n[…]\nTutankhamun and the Age of the Golden Pharaohs website\n[…]\nBritish Museum Tutankhamun highlight\n[…]\n\"Swiss geneticists examine Tutankhamun's genetic profile\" by Reuters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tutanc%C3%A2mon",
        "situacao": "ok",
        "texto": "Tutancâmon(pt-BR) ou Tutancámon(pt), Tutancamon(pt-BR) ou ainda Tutankhamon (c. 1 341 a.C. — c. 1 323 a.C.) foi um faraó da décima oitava dinastia (governou de c. 1332–1323 a.C. na cronologia egípcia), durante o período da história egípcia conhecido como Império Novo. Desde a descoberta de sua tumba intacta, foi referido coloquialmente como Rei Tut. Seu nome original, Tutancáton, significa \"Imagem\n[…]\nTutancâmon era filho de Aquenáton (anteriormente Amenhotep IV) com alguma irmã do próprio Aquenáton ou possivelmente uma de suas primas. Ainda como príncipe, era conhecido como Tutancaten. Ele subiu ao trono em 1333 a.C., com a idade de nove ou dez anos, assumindo o nome Nebkheperure. Sua ama de leite foi uma mulher chamada Maia, segundo conta em seu túmulo em Sacará. Seu professor foi Sennedjem.\n[…]\nEm seu terceiro ano de reinado, sob a influência de seus conselheiros, Tutancâmon reverteu várias mudanças feitas durante o reinado de seu pai. Ele terminou a adoração do deus Áton e restaurou o deus Amom à supremacia. A proibição do culto de Amom foi suspensa e os privilégios tradicionais foram restaurados ao seu sacerdócio. A capital foi transferida de volta para Tebas e a cidade de Aquetatem foi abandonada.\n[…]\nFoi quando ele mudou seu nome para Tutancâmon, \"Imagem viva de Amom\", reforçando a restauração de Amom.[carece de fontes]?\n[…]\nTutancâmon era magro e tinha quase 1,67 m de altura. Ele tinha grandes incisos frontais e a arcada dentária superior projetada para frente, característica da linhagem real tuteméssida à qual pertencia. Entre setembro de 2007 e outubro de 2009, várias múmias foram submetidas a estudos antropológicos, radiológicos e genéticos detalhados, como parte do King Tutankhamun Family Project.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Maldição dos faraós",
      "descricao": "Lenda de que quem perturba a múmia de um faraó é castigado, popularizada após a abertura da tumba de Tutancâmon"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Lord Carnarvon, financiador da escavação da tumba de Tutancâmon, morreu em 1923 e alimentou a lenda da maldição. Sua infecção fatal começou em quê?",
    "resposta": "Uma picada de mosquito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Curse_of_the_pharaohs",
      "https://en.wikipedia.org/wiki/George_Herbert,_5th_Earl_of_Carnarvon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Curse_of_the_pharaohs",
        "situacao": "ok",
        "texto": "The curse of the pharaohs or the mummy's curse or the Curse of King Tut is a curse alleged to be cast upon anyone who disturbs the mummy of an ancient Egyptian, especially a pharaoh. This curse, which does not differentiate between thieves and archaeologists, is claimed to cause bad luck, illness, or death. Since the mid-20th century, many authors and documentaries have argued that the curse is 'r\n[…]\nThe first of the deaths was that of Lord Carnarvon, who financed the excavation. He had been bitten by a mosquito, and later slashed the bite accidentally while shaving. It became infected and that resulted in blood poisoning. Two weeks before Carnarvon died, Marie Corelli wrote an imaginative letter that was published in the New York World magazine, in which she quoted an obscure book that confidently asserted that \"dire punishment\" would follow any intrusion into a sealed tomb.\n[…]\nMorton), \"I give him six weeks to live.\" The first autopsy carried out on the body of Tutankhamun by Dr. Derry found a healed lesion on the left cheek, but as Carnarvon had been buried six months previously it was not possible to determine if the location of the wound on the King corresponded with the fatal mosquito bite on Carnarvon.\n[…]\nGeorge Herbert, 5th Earl of Carnarvon, financial backer of the excavation, who was present at the tomb's opening, died on 5 April 1923 after a mosquito bite became infected; he died 4 months and 7 days after the opening of the tomb.\n[…]\nHoward Carter opened the tomb on 16 February 1923 and died well over sixteen years later on 2 March 1939; however, some have still attributed his death to the curse.\n[…]\nPharaoh's Curse (1957 film)\n[…]\nThe Curse of King Tut's Tomb (1980 film)\n[…]\nCurse of Timur\n[…]\nFellowes, Ross (2024). \"The Pharaoh's Curse: New Evidence of Unusual Deaths Associated with Ancient Egyptian Tombs\". Journal of Scientific Exploration. 38: 41–60. doi:10.31275/20242855."
      },
      {
        "url": "https://en.wikipedia.org/wiki/George_Herbert,_5th_Earl_of_Carnarvon",
        "situacao": "ok",
        "texto": "George Edward Stanhope Molyneux Herbert, 5th Earl of Carnarvon (26 June 1866 – 5 April 1923), styled Lord Porchester until 1890, was an English peer and aristocrat best known as the financial backer of the search for and excavation of Tutankhamun's tomb in the Valley of the Kings.\n[…]\nOn 19 March 1923, Carnarvon suffered a severe mosquito bite, which became infected after a razor cut. On 5 April, he died in the Continental-Savoy Hotel in Cairo from, according to contemporary reports, blood poisoning progressing to pneumonia. On 14 April, Lady Almina Carnarvon moved Lord Carnarvon's remains to England. His tomb appropriately reflects his archaeological interest, being situated within an ancient hill fort on Beacon Hill overlooking his Highclere family seat.\n[…]\nEncouraged by newspaper speculation, the ‘Curse of Tutankhamun’, or the Mummy's Curse entered into popular culture and was fuelled further by the author Sir Arthur Conan Doyle's suggestion that Carnarvon's death had been caused by ‘elementals’ created by Tutankhamun's priests to guard the royal tomb. On 3 April 1923, just six weeks after Howard Carter had unsealed the burial chamber in the tomb of Tutankhamun, Conan Doyle arrived in New York to begin a four-month lecture tour on Spiritualism.\n[…]\nTwo days later he was asked by a reporter whether he connected the breaking news of Carnarvon’s death with the curse of the pharaohs. Conan Doyle responded to this question by drawing parallels between the death of Carnarvon and his late friend Bertram Fletcher Robinson, and his comments were reported in an article, which appeared in the Daily Express newspaper on 7 April 1923, as follows:\n[…]\nThe animated TV series, Mummies Alive!, features a protagonist named “Presley Carnovan” as a tribute to Lord Carnarvon."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maldi%C3%A7%C3%A3o_do_fara%C3%B3",
        "situacao": "ok",
        "texto": "A Maldição do Faraó é a crença de que qualquer pessoa que viole a múmia de um faraó do Antigo Egito cairá em uma maldição, pela qual a vítima morrerá em breve. Trata-se de uma lenda contemporânea, que surgiu no início do século XX. Ninguém sabe ao certo quem é o responsável por sua elaboração e propagação, mas a mídia, ao mesmo tempo, tornou-a numa lenda de renome internacional.\n[…]\nA maldição associada com a descoberta da tumba de Tutancâmon da XVIII Dinastia, é a mais famosa na cultura ocidental. Ela afirma que alguns membros da equipe de arqueólogos que desenterraram a múmia do faraó Tutancâmon morreram de causas sobrenaturais na sequência de uma maldição do governante falecido. De fato, vários membros da equipe morreram alguns anos depois da descoberta, incluindo o ilustre Lord Carnarvon, promotor das escavações.\n[…]\nCarnavon, o financiador da expedição, tinha vindo no início ao Egito por causa de sua saúde. Essa decisão na verdade foi fatal. Na primavera de 1923, Lorde Carnavon se cortou acidentalmente com uma navalha quando fazia barba. O corte foi acima de uma picada de mosquito que levara dias antes, quando ainda estava na expedição. O ferimento não sarava e dias depois em uma viagem para o Cairo, Carnavon foi devastado pela febre.\n[…]\nSeu secretário enviou as más notícias a Howard Carter dizendo que a picada de mosquito que Carnavon levara tinha infeccionado. Na verdade o quadro de Carnavon era irreversível e ele faleceu.\n[…]\nUm professor de egiptologia da universidade da Pensilvânia, David Silverman, traduziu muitas das maldições dos faraós. Um delas de 4 mil anos atrás: a Maldição de Rezi. Segundo Silverman, a maldição de Rezi era uma interdição a qualquer um que entrasse na tumba e que tivesse comido algum alimento proibido, como carne de porco ou peixe, ou algo impuro ligado a sua alma, como cometer um ato de impureza sexual e, neste caso, adultério.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Deir el-Medina",
      "descricao": "Aldeia dos artesãos que escavavam e decoravam as tumbas reais do Vale dos Reis, na margem oeste de Tebas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No reinado de Ramsés Terceiro, os artesãos das tumbas reais fizeram uma das greves mais antigas registradas na história. O que os levou a parar?",
    "resposta": "Atraso nas rações de pagamento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Deir_el-Medina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deir_el-Medina",
        "situacao": "ok",
        "texto": "Deir el-Medina (Egyptian Arabic: دير المدينة), or Dayr al-Madīnah, is an ancient Egyptian workmen's village which was home to the artisans who worked on the tombs in the Valley of the Kings during the 18th to 20th Dynasties of the New Kingdom of Egypt (ca. 1550–1080 BC). The settlement's ancient name was Set maat (\"Place of Truth\"), and the workmen who lived there were called \"Servants in the Plac\n[…]\nThe French Egyptologist and author Christian Jacq has written a tetralogy called the Stone of Light series dealing with Deir el-Medina and its artisans, as well as Egyptian political life at the time.\n[…]\nChristian Jacq, Egyptologist and author of historical novels on Ancient Egypt, a tetralogy having to do with Deir el-Medina and its artisans.\n[…]\nWill of Naunakhte, the will of a free woman from Deir el-Medina.\n[…]\nJaana Toivari-Viitala, Egyptologist who worked on the role of women at Deir el-Medina\n[…]\nLeonard H. Lesko, ed. (1994). Pharaoh's Workers: The Villagers of Deir El Medina. Cornell University Press. ISBN 0-8014-8143-0.\n[…]\nDavies, Benedict (2018). Life within the Five Walls. A Handbook to Deir el-Medina PDF. Abercromby Press. ISBN 978-0-670-85976-4.\n[…]\nHaring, B.J.J., Late Twentieth Dynasty ostraca and the end of the necropolis workmen’s settlement at Deir el-Medina PDF in S. Töpfer, P. Del Vesco, & F. Poole (editors), Deir el-Medina through the kaleidoscope. Proceedings of the international workshop Turin 8–10 October 2018 (pp. 44–62). Modena: Museo Egizio en Franco Cosimo Panini Editore, 2022, pp. 44–62\n[…]\nMedia related to Deir el-Medina at Wikimedia Commons\n[…]\nImages of Deir el-Medina : Past & Present\n[…]\nYouTube video clip of Deir -el-Medina 1.\n[…]\nYouTube video clip of Deir -el-Medina 2.\n[…]\nPhotographs of Deir el-Medina\n[…]\nA Survey of the New Kingdom Non-literary Texts from Deir el-Medina – Leiden University (Database) Archived 5 November 2017 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deir_Almedina",
        "situacao": "ok",
        "texto": "Deir Almedina (em árabe: دير المدينة; romaniz.: Deir el-Medina) é uma vila do Antigo Egito que serviu de residência de artesãos que trabalharam em tumbas do Vale dos Reis entre a XVIII e XX dinastias do Reino Novo (1550–1069 a.C.). Seu nome antigo era Sete Maate (\"O Lugar da Verdade\") e os trabalhadores que viveram lá se chamavam Servos do Lugar da Verdade. Na época cristã, o Templo de Hator foi c\n[…]\nEm torno do vigésimo quinto ano de Ramessés III (ca. 1 159 a.C.), trabalhadores ficaram tão exasperados com o atraso que lançaram as ferramentas e saíram do trabalho no que pode ter sido a primeira ação grevista registrada da história. Escreveram uma carta ao vizir reclamando da falta de rações de trigo. Os líderes da aldeia tentaram argumentar, mas se recusaram a voltar ao trabalho até que suas queixas fossem abordadas. Responderam aos anciãos com \"grandes juramentos\" de \"Estamos com fome\".\n[…]\n\"Dezoito dias se passaram neste mês\", relataram, e ainda não receberam as rações, sendo forçados a comprar trigo. Lhes disseram para enviar ao faraó ou vizir para tratar dessas questões. Depois que as autoridades ouviram suas reclamações, se dirigiram a eles e os trabalhadores voltaram a trabalhar no dia seguinte. Houve várias greves que se seguiram. Após um deles, quando o líder grevista pediu que o seguissem, lhe disseram que já estavam fartos e voltaram ao trabalho.\n[…]\nEsta não foi a última greve, mas logo restauraram o suprimento regular de trigo e as greves chegaram ao fim nos anos restantes de Ramessés. Porém, como os chefes apoiavam as autoridades, os trabalhadores não confiavam mais neles e escolhiam seus próprios representantes. Outras queixas dos artesãos são registradas 45 anos após a disputa inicial, durante os reinados de Ramessés IX (r. 1126–1108 a.C.) e Ramessés X (r. 1108–1099 a.C.).\n[…]\n«Deir el-Medina database» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Ramsés III",
      "descricao": "Faraó da vigésima dinastia do Egito, que reinou no século doze antes de Cristo e foi alvo de uma conspiração do harém"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ramsés Terceiro foi alvo de uma conspiração tramada no próprio harém. Em 2012, tomografias da sua múmia revelaram qual ferimento fatal?",
    "resposta": "Garganta cortada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramesses_III"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramesses_III",
        "situacao": "ok",
        "texto": "Usermaatre Meryamun Ramesses III was the second Pharaoh of the Twentieth Dynasty in ancient Egypt. Some scholars date his reign from 26 March 1185 to 15 April 1154 BC, and he is considered to be the last pharaoh of the New Kingdom to have wielded substantial power.\n[…]\nRamesses III was not closely related to Ramesses I or Ramesses II.\n[…]\nHe also did not respect their birth order, and the heir he designated, Ramesses IV, was likely younger than another of his sons, Khaemwaset. This miscalculation may have led his second wife, Queen Tiye, to believe that her own younger son could also bypass his elder brothers and become pharaoh, thereby enabling her to plot a conspiracy to murder the king within the royal harem.\n[…]\nThe December 2012 issue of the British Medical Journal quoted the conclusion of the study of the team of researchers, led by Zahi Hawass, the former head of the Egyptian Supreme Council of Antiquity, and his Egyptian team, as well as Albert Zink from the Institute for Mummies and the Iceman of Eurac Research in Bolzano, Italy, which stated that conspirators murdered Ramesses III by cutting his throat. Zink observed in an interview that:\n[…]\nCombined with the unusual mummification procedure of Unknown Man E, which has been interpreted as indicative of punishment, the authors concluded that he is a strong candidate for Pentawere, the son of Ramesses III implicated in the harem conspiracy. The precise cause of death of Unknown Man E could not be determined.\n[…]\nPapyrus Harris I records some of Ramesses III's activities:\n[…]\nCline, Eric H.; O'Connor, David (eds) (2012). Ramesses III: The Life and Times of Egypt's Last Hero. University of Michigan Press (essays by scholars).\n[…]\nConspiracies in ancient Egypt"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ramess%C3%A9s_III",
        "situacao": "ok",
        "texto": "Ramessés III (Titulatura real egípcia: Usermaat-re-meryamun) foi o segundo faraó da XX dinastia egípcia, e é considerado como o último grande faraó do Império Novo a exercer uma grande autoridade sobre o Egito. Ele era filho do faraó Setnakht com a rainha Tiy-merenese. O reinado de Ramessés III durou, aproximadamente, de 1194 – 1163 a.C., 31 anos.\n[…]\nNo Antigo Egito, era comum que dentre as esposas e mulheres do harém, o faraó tivesse uma principal, a “grande esposa”, mas durante o reinado de Ramessés III, isso parece não ter sido bem definido, o que pode ter inflamado a disputa pelo poder, resultando na conspiração. Os principais envolvidos no esquema eram a esposa Tiyi, o provável “tesoureiro” real Pabakkamen, e o príncipe Pentawere, filho de Tiyi e Ramessés III.\n[…]\nDe acordo com egiptólogos, Pentawere seria, inclusive, a múmia conhecida como “a múmia que grita” e “o Desconhecido E”; testes de DNA relacionaram positivamente o material genético da múmia de Ramsés III com a polêmica múmia, identificando o primeiro como pai do segundo. Documentos oficiais revelam que a tentativa de golpe fracassou e dezenas de envolvidos foram condenados, porém, não relatam se os conspiradores conseguiram por as mãos no faraó durante a execução do plano.\n[…]\nNo entanto, sabe-se que Ramsés III morreu na mesma época da conspiração, e tomografias feitas em sua múmia constataram um corte profundo no pescoço, lesões no esôfago e nos vasos sanguíneos (o que teria provocado uma intensa hemorragia que provavelmente o levou a morte) e um outro corte em um dedo do pé, feito com um tipo de lâmina diferente da usada no pescoço, o que sugere um assassinato. O faraó foi enterrado na tumba KV11, mas sua múmia atualmente reside no Museu Egípcio do Cairo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Abu Simbel",
      "descricao": "Par de templos escavados na rocha por ordem de Ramsés II, no sul do Egito, junto ao Lago Nasser"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O templo menor de Abu Simbel foi dedicado à deusa Hátor e também a uma rainha, a grande esposa de Ramsés Segundo. Qual?",
    "resposta": "Nefertari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel",
      "https://en.wikipedia.org/wiki/Nefertari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel (Arabic: أبو سمبل), Aswan Governorate, Upper Egypt, near the border with Sudan. It is located on the western bank of Lake Nasser, about 230 km (140 mi) southwest of Aswan (about 300 km (190 mi) by road). Its latitude of 22° 20′ 13″ N (22.3369 °N) is 1.0978°, which are 122 km (75.8 ml), south of the t\n[…]\nThe most prominent temples are the rock-cut temples near the modern village of Abu Simbel, at the Second Nile Cataract, the border between Lower Nubia and Upper Nubia. There are two temples, the Great Temple, dedicated to Ramesses II himself, and the Small Temple, dedicated to his chief wife Queen Nefertari.\n[…]\nThe complex consists of two temples. The larger one is dedicated to Ra-Horakhty, Ptah and Amun, Egypt's three state deities of the time, and features four large statues of Ramesses II in the facade. The smaller temple is dedicated to the goddess Hathor, personified by Nefertari, Ramesses's most beloved of his many wives. The temple is now open to the public.\n[…]\nThe temple of Hathor and Nefertari, also known as the Small Temple, was built about 100 m (330 ft) northeast of the temple of Ramesses II and was dedicated to the goddess Hathor and Ramesses II's chief consort, Nefertari. This was in fact the second time in ancient Egyptian history that a temple was dedicated to a queen. The first time, Akhenaten dedicated a temple to his great royal wife, Nefertiti.\n[…]\nOn the back wall, which lies to the west along the axis of the temple, there is a niche in which Hathor, as a divine cow, seems to be coming out of the mountain: the goddess is depicted as the Mistress of the temple dedicated to her and to queen Nefertari, who is intimately linked to the goddess.\n[…]\nNubian Monuments from Abu Simbel to Philae. A short film produced by UNESCO on Abu Simbel."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nefertari",
        "situacao": "ok",
        "texto": "Nefertari (also known as Nefertari Meritmut; Akkadian: Naptera) was an Egyptian queen and the first of the Great Royal Wives (or principal wives) of Ramesses the Great. She is one of the best known Egyptian queens, among such women as Cleopatra, Nefertiti, and Hatshepsut, and one of the most prominent Egyptian royal consorts. She was highly educated and able to both read and write hieroglyphs, a v\n[…]\nThe greatest honor was bestowed on Nefertari however in Abu Simbel. Nefertari is depicted in statue form at the great temple, but the small temple is dedicated to Nefertari and the goddess Hathor. The building project was started earlier in the reign of Ramesses II, The temple had already been completed and put into use before the twentieth year of Ramesses II's reign, with some of its decorations added at a later stage.\n[…]\nIn the past, this stela was mistakenly thought to represent the dedication ceremony of Abu Simbel, a theory that has since been refuted. The tenure of Heqanakht, the Viceroy of Kush, ended in the twenty-fourth year of Ramesses II's reign, and Nefertari must therefore have died before this date.\n[…]\nInside the temple Nefertari is depicted on one of the pillars in the great pillared hall worshipping Hathor of Ibshek.\n[…]\nThe small temple at Abu Simbel was dedicated to Nefertari and Hathor of Ibshek. The dedication text on one of the buttresses states:\n[…]\nThe small temple of the Ramesseum is dedicated to Nefertari and the Queen Mother Tuya. This temple was jointly associated with the two of them. This temple is divided into two parts, each dedicated to them respectively.\n[…]\nThe Temple of Aniba houses a statue of Nefertari and features a complete set of associated cult practices, with clear evidence showing that these rituals continued at least until the reign of Ramses VI.\n[…]\nThe tomb of Nefertari Merytmut Archived 2015-09-01 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abul-Simbel",
        "situacao": "ok",
        "texto": "Os templos de Abul-Simbel são dois enormes templos esculpidos na rocha em Abu Simbel (em árabe: أبو سمبل), uma vila na província de Assuão, Alto Egito, perto da fronteira com o Sudão. Eles estão situados na margem oeste do Lago Nasser, cerca de 230 km sudoeste de Assuão (cerca de 300 km de carro). O complexo faz parte do Patrimônio Mundial da UNESCO conhecido como \"Monumentos Núbios\", que vão de A\n[…]\nOs templos mais proeminentes são os templos talhados na rocha perto da moderna vila de Abu Simbel, na Segunda Catarata do Nilo, a fronteira entre a Baixa Núbia e a Alta Núbia. Existem dois templos, o Grande Templo, dedicado ao próprio Ramessés II, e o Pequeno Templo, dedicado à sua esposa principal, a Rainha Nefertari.\n[…]\nO complexo consiste em dois templos. O maior é dedicado a Rá-Haraqueti, Ptá e Ámon, as três divindades estatais do Egito da época, e apresenta quatro grandes estátuas de Ramessés II na fachada. O templo menor é dedicado à deusa Hator, personificada por Nefertari, a mais amada das muitas esposas de Ramessés. O templo agora está aberto ao público.\n[…]\nO templo de Hator e Nefertari, também conhecido como o Pequeno Templo, foi construído por volta de 100 m a nordeste do templo de Ramessés II e foi dedicado à deusa Hator e a consorte de Ramessés, Nefertari. Na verdade, esta foi a segunda vez na história do antigo Egito que um templo foi dedicado a uma rainha. Na primeira vez, Akhenaton dedicou um templo a sua grande esposa real, Nefertiti. A fachada talhada na rocha é decorada com dois grupos de colossos separados pelo grande portal.\n[…]\nNa parede posterior, que fica a oeste ao longo do eixo do templo, há um nicho no qual Hator, como uma vaca divina, parece estar saindo da montanha: a deusa é retratada como a Senhora do templo dedicado a ela e à rainha Nefertari, que está intimamente ligada à deusa.\n[…]\n«Fotografias de Abul-Simbel, por M. Sullivan» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Apófis",
      "descricao": "Serpente gigante da mitologia egípcia que encarnava o caos e atacava todas as noites a barca do deus-sol Rá"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Um asteroide famoso pela passagem rente à Terra em abril de 2029 recebeu o nome grego de qual serpente egípcia, inimiga do deus-sol Rá?",
    "resposta": "Apófis",
    "fonte": [
      "https://en.wikipedia.org/wiki/99942_Apophis",
      "https://en.wikipedia.org/wiki/Apep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/99942_Apophis",
        "situacao": "ok",
        "texto": "99942 Apophis (provisional designation 2004 MN4) is a near-Earth asteroid and a potentially hazardous object, 450 metres (1,480 ft) by 170 metres (560 ft) in size. During a brief period of concern in December 2004, initial observations indicated a probability of 2.7% that the asteroid would hit Earth on Friday, April 13, 2029. Later observations eliminated that possibility of an impact with Earth,\n[…]\nApophis will evolve from an Aten- into an Apollo-type asteroid as a result of the 2029 encounter. Apollo asteroids are usually named after Greek deities, Aten asteroids after Egyptian ones. The name Apophis is a nod to that: It is the Greek name of an Egyptian deity.\n[…]\nApophis is the target of the European Space Agency's approved Ramses (Rapid Apophis Mission for Security and Safety) mission, with a launch in April or May 2028 and rendezvous with the asteroid in February 2029.\n[…]\nChina had planned an encounter with Apophis in 2022, several years prior to the close approach in 2029. This mission, now known as Tianwen-2, would have included exploration and close study of three asteroids including an extended encounter with Apophis for close observation, and land on the asteroid 1996 FG3 to conduct in situ sampling analysis on the surface. The spacecraft launched on 28 May 2025, with a different set of targets.\n[…]\nIn music, the asteroid Apophis is referred to in the song \"The Profit of Doom\" by gothic metal band Type O Negative on their 2007 album Dead Again. The lyrics refer to the asteroid 99942 Apophis, which at that time was considered to have a possibility of hitting Earth on Friday, April 13, 2029.\n[…]\nApophis Asteroid\n[…]\nHarry Baker (17 July 2026). \"'Shared cosmic experience': 'Potentially hazardous' asteroid Apophis could be visible to 90% of Earth's population during ultraclose 2029 flyby, new maps reveal\". Live Science. Retrieved 22 August 2026.\n[…]\n99942 Apophis at the JPL Small-Body Database"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Apep",
        "situacao": "ok",
        "texto": "Apophis (; from Ancient Greek: Ἄποφις, romanized: Ápophis), also known as Apep (Ancient Egyptian: 𓉻𓐰𓊪𓐱𓊪𓆙, romanized: ꜥꜣpp) or Aphoph (, Coptic: Ⲁⲫⲱⲫ, romanized: Aphōph) is the ancient Egyptian deity of chaos, darkness and fire, and is thus the opponent of light and Maat (order/truth). Ra was the bringer of light and hence the biggest opposer of Apophis, who was usually depicted as a giant snake or\n[…]\nThe Egyptian priests had a detailed guide to fighting Apophis, referred to as The Books of Overthrowing Apep (or the Book of Apophis, in Greek). The chapters described a gradual process of dishonoring, dismemberment, and disposal, which include:\n[…]\nPutting Fire Upon Apophis\n[…]\nIn addition to stories about Ra's victories, this guide had instructions for making wax models, or small drawings, of the serpent, which would be spat on, mutilated and burnt, whilst reciting spells that would aid Ra in killing Apophis. Fearing that even the image of Apophis could give power to the demon, any rendering would always include another deity to subdue the monster.\n[…]\nAs Apophis was thought to live in the underworld, he was sometimes thought of as an Eater of Souls. Thus the dead also needed protection, so they were sometimes buried with spells that could destroy Apophis . The Book of the Dead does not frequently describe occasions when Ra defeated the chaos snake explicitly called Apophis. Only Book of the Dead Spells 7 and 39 can be explained as such.\n[…]\n99942 Apophis, near Earth asteroid\n[…]\nApep (star system), triple star system that is a gamma-ray burst progenitor in the Milky Way\n[…]\nReferenced in John Langan's The Fisherman (novel), the world-girdling serpent harnessed as a source of magical potency\n[…]\nNikko Jenkins, American criminal who motivated his series of murders by claiming that he is a worshipper of Apophis\n[…]\nAncient serpent\n[…]\nApep, Water Snake-Demon of Chaos, Enemy of Ra...\n[…]\nAncient Egypt: The Mythology - Apep"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/99942_Ap%C3%B3fis",
        "situacao": "ok",
        "texto": "Apófis (nome astronômico 99942 Apófis, designação provisória: 2004 MN4) é um asteroide com 370 metros de diâmetro, que causou um breve período de preocupação em dezembro de 2004 porque as observações iniciais indicavam uma probabilidade pequena (até 2,7%) de que ele poderia atingir a Terra em 2029. Observações adicionais melhoraram as predições e eliminaram a possibilidade de um impacto na Terra o\n[…]\nEntretanto, uma possibilidade ainda existe de que na passagem de 2029 o Apófis venha a passar por uma fenda de ressonância gravitacional, uma região precisa não maior que 600 metros, causaria um impacto direto em 13 de abril de 2036. Esta possibilidade manteve o asteroide no Nível 1 da escala de perigo de impacto de Turim até agosto de 2006. Ele quebrou o recorde de maior nível na escala de Turim, estando, por um espaço curto de tempo, no nível 4, antes de ser rebaixado.\n[…]\nApófis é o nome grego do inimigo de Rá: Apófis (Apep), o Descriador, uma serpente que se esconde nas escuridões eternas do Duat (meio da Terra) e tenta engolir Rá durante a sua passagem noturna.\n[…]\nNa sexta-feira, 13 de abril de 2029, o Apófis irá passar pela Terra entre as órbitas de satélite de comunicação geosíncronos. Depois desta passagem ele irá retornar para outra passagem próxima à Terra em 2036.\n[…]\n\"Se conseguirmos obter dados de radar em 2013 [a próxima boa oportunidade], poderemos prever a localização de 2004 MN4 para até pelo menos 2070\" disse Jon Giorgini do JPL O Apófis irá passar perto da Terra numa distância de 0,09666 AU (14,4 milhões de quilômetros) em 2013 permitindo aos astrônomos refinar a trajetória para futuras passagens que o asteroide passar próximo da Terra.\n[…]\nA Fundação B612 fez estimativas do caminho do Apófis se um impacto com a Terra em 2036 acontecesse, como parte de um esforço para desenvolver estratégias de deflexão.\n[…]\nGraphics and orbit of (99942) Apophis (Sormano Astr. Obs.)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Thoth",
      "descricao": "Deus egípcio da escrita, da sabedoria e da lua, representado com cabeça de íbis"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os gregos identificaram Thoth, o deus egípcio da escrita e da sabedoria, com qual deus do seu próprio panteão?",
    "resposta": "Hermes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thoth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thoth",
        "situacao": "ok",
        "texto": "Thoth (from Koine Greek: Θώθ Thṓth, borrowed from Coptic: Ⲑⲱⲟⲩⲧ Thōout, Ancient Egyptian: Ḏḥwtj, the reflex of ḏḥwtj \"[he] is like the ibis\") is an ancient Egyptian deity. In art, he was often depicted as a man with the head of an ibis or a baboon, animals sacred to him. His feminine counterpart is Seshat, and his wife is Ma'at. He is the god of the Moon, wisdom, knowledge, writing, hieroglyphs, s\n[…]\nIn addition, Thoth was also known by specific aspects of himself, for instance the Moon god Iah-Djehuty (j3ḥ-ḏḥw.ty), representing the Moon for the entire month. The Greeks related Thoth to their god Hermes due to his similar attributes and functions. One of Thoth's titles, \"Thrice great\", was translated to the Greek τρισμέγιστος (trismégistos), making Hermes Trismegistus.\n[…]\nThoth's qualities also led to him being identified by the Greeks with their closest matching god Hermes, with whom Thoth was eventually combined as Hermes Trismegistus, leading to the Greeks' naming Thoth's cult center as Hermopolis, meaning city of Hermes.\n[…]\nThere was also an Egyptian pharaoh of the Sixteenth dynasty named Djehuty (Thoth) after him, and who reigned for three years.\n[…]\nArtapanus of Alexandria, an Egyptian Jew who lived in the third or second century BC, euhemerized Thoth-Hermes as a historical human being and claimed he was the same person as Moses, based primarily on their shared roles as authors of texts and creators of laws. Artapanus's biography of Moses conflates traditions about Moses and Thoth and invents many details.\n[…]\nMany later authors, from late antiquity to the Renaissance, either identified Hermes Trismegistus with Moses or regarded them as contemporaries who expounded similar beliefs.\n[…]\nIn Dennis E. Taylor's fifth book of the Bobiverse series Not Till We Are Lost, Thoth serves as the namesake of an AI, alluding to its wisdom.\n[…]\nBook of Thoth\n[…]\nMedia related to Thoth at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tote",
        "situacao": "ok",
        "texto": "Tote, também grafado como Thoth, Tot, Toth ou Thot (em grego clássico: Θώθ; romaniz.: Thóth; ou Djeuti em egípcio: Dḥwtj), é o deus egípcio da lua, do conhecimento, da sabedoria, da escrita, da música e da magia. O seu principal centro de culto situava-se em Khmunu (renomeada posteriormente como Hermópolis Magna pelos gregos).\n[…]\nPara além da escrita comum, Tote era o guardião dos \"Livros de Tote\". Segundo a tradição mitológica, estes livros continham segredos tão terríveis e poderosos que quem os lesse poderia controlar a própria natureza, dominar os elementos e até forçar os deuses a obedecerem. Acreditava-se que o acesso a este conhecimento proibido trazia uma maldição a qualquer mortal que o buscasse, refletindo o aspecto mais austero e temível de Tote como o senhor da sabedoria oculta.\n[…]\nNo entanto, o roubo atrai a ira de Tote, e Setne sofre uma série de terríveis maldições e alucinações até que se arrepende e devolve o papiro ao seu lugar de descanso. Esta história demonstra que a magia de Tote era vista com grande temor e reverência pela população egípcia.\n[…]\nCom a chegada dos gregos ao Egito após as conquistas de Alexandre, o Grande, houve uma intensa fusão cultural. Os gregos identificaram Tote com o seu próprio deus mensageiro, Hermes. Dessa fusão nasceu a figura de Hermes Trismegisto (Hermes, o Três Vezes Grande).\n[…]\nOs gregos ptolomaicos declararam Tote/Hermes como o inventor da astronomia, astrologia, ciência dos números, matemática, geometria, topografia, medicina, botânica, teologia, governo civilizado, alfabeto, leitura, escrita e oratória. Eles afirmavam que ele era o verdadeiro autor de todas as obras de todos os ramos do conhecimento, tanto humano quanto divino. Este sincretismo deu origem a uma tradição filosófica e esotérica duradoura conhecida como Hermetismo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pschent",
      "descricao": "Coroa dupla dos faraós, que unia as coroas do Alto e do Baixo Egito como símbolo do país unificado"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A coroa dupla dos faraós juntava a coroa branca do Alto Egito com a coroa do Baixo Egito. De que cor era esta segunda?",
    "resposta": "Vermelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pschent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pschent",
        "situacao": "ok",
        "texto": "The pschent (/pskʰént/; Greek ψχέντ) was the double crown worn by rulers in ancient Egypt. The ancient Egyptians generally referred to it as Pa-sekhemty (pꜣ-sḫm.ty), the Two Powerful Ones, from which the Greek term is derived. It combined the White Hedjet Crown of Upper Egypt and the Red Deshret Crown of Lower Egypt.\n[…]\nThe Pschent represented the pharaoh's power over all of unified Egypt. It bore two animal emblems:  an Egyptian cobra, known as the uraeus, ready to strike, which symbolized the Lower Egyptian goddess Wadjet; and a vulture representing the Upper Egyptian tutelary goddess Nekhbet. These were fastened to the front of the Pschent and referred to as the Two Ladies.\n[…]\nThe invention of the Pschent is generally attributed to the First Dynasty pharaoh Menes, but the first one known to wear a Double Crown was the First Dynasty pharaoh Djet: a rock inscription shows his Horus wearing it.\n[…]\nThe king list on the Palermo Stone, which begins with the names of Lower Egyptian pharaohs (nowadays thought to have been mythological demigods), shown wearing the Red Crown, marks the unification of the country by giving the Pschent to all First Dynasty and later pharaohs. The Cairo fragment, on the other hand, shows these prehistoric rulers wearing the Pschent.\n[…]\nAs is the case with the Deshret and the Hedjet Crowns, no Pschent is currently known to have survived. It is known only from statuary, depictions, inscriptions, and ancient tales.\n[…]\nMedia related to pschent at Wikimedia Commons\n[…]\nThe dictionary definition of pschent at Wiktionary"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Punhal de ferro meteórico de Tutancâmon",
      "descricao": "Punhal com lâmina de ferro encontrado junto à múmia de Tutancâmon, em sua tumba no Vale dos Reis"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Um punhal encontrado junto à múmia de Tutancâmon tem lâmina de ferro, metal raro no Egito da época. De onde veio esse ferro?",
    "resposta": "De um meteorito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tutankhamun%27s_meteoric_iron_dagger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tutankhamun%27s_meteoric_iron_dagger",
        "situacao": "ok",
        "texto": "Tutankhamun's meteoric iron dagger, also known as Tutankhamun's iron dagger and King Tut's dagger, is an iron-bladed dagger from the tomb of the ancient Egyptian Pharaoh Tutankhamun (reigned c. 1334–1325 BC). As the blade composition and homogeneity closely correlate with meteorite composition and homogeneity, the material for the blade is determined to have originated by way of a meteoritic landi\n[…]\nThe nickel content in the bulk metal of most iron meteorites ranges from 5% to 35%, whereas it never exceeds 4% in historical iron artifacts from terrestrial ores produced before the 19th century.\n[…]\nHowever, iron working methods and iron's uses, and its dispersion and circulation within prehistoric societies, are contentious issues within the scientific community due to gaps in knowledge and data. These debates have included the presumed meteoritic source as the material from which the iron dagger blade is made.\n[…]\nHence, \"for the first time using modern technology researchers recorded conclusive proof that the earliest known use of iron by Egyptians was from a meteorite.\"\n[…]\nMeteoric iron\n[…]\nJohnson, Diane; Tyldesley, Joyce; Lowe, Tristan; Withers, Philip J.; Grady, Monica M. (2013). \"Analysis of a prehistoric Egyptian iron bead with implications for the use and perception of meteorite iron in ancient Egypt\". Meteoritics & Planetary Science. 48 (6): 997. Bibcode:2013M&PS...48..997J. doi:10.1111/maps.12120. S2CID 59452569.\n[…]\nRehren, Thilo; Belgya, Tamás; Jambon, Albert; Káli, György; Kasztovszky, Zsolt; Kis, Zoltán; Kovács, Imre; Maróti, Boglárka; Martinón-Torres, Marcos; Miniaci, Gianluca; Pigott, Vincent C.; Radivojević, Miljana; Rosta, László; Szentmiklósi, László; Szőkefalvi-Nagy, Zoltán (2013). \"5,000 years old Egyptian iron beads made from hammered meteoritic iron\" (PDF). Journal of Archaeological Science. 40 (12): 4785. Bibcode:2013JArSc..40.4785R. doi:10.1016/j.jas.2013.06.002."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adaga_de_ferro_mete%C3%B3rico_de_Tutanc%C3%A2mon",
        "situacao": "ok",
        "texto": "A adaga de ferro meteórico de Tutancâmon, também conhecida como adaga de ferro de Tutancâmon e adaga do Rei Tut, é uma adaga com lâmina de ferro descoberta em 1925 no túmulo do antigo faraó egípcio Tutancâmon do século XIV AC, pelo arqueólogo Howard Carter. Como a composição e a homogeneidade do metal da lâmina correspondem ao de proveniente de meteoritos do tipo siderito, determina-se que o mater\n[…]\nDesde a década de 1960, o alto teor de níquel na lâmina foi aceito como indicativo de origem meteórica. Um estudo mais recente publicado em junho de 2016 derivado da análise do espectrômetro de fluorescência de raios X mostra que a composição da lâmina é principalmente ferro (Fe) e 11% de níquel (Ni) e 0,6% de cobalto (Co).\n[…]\nIsso significa que sua composição está situada na mediana de um grupo de 76 meteoritos de ferro previamente descobertos.O teor de níquel no metal da maioria dos meteoritos de ferro varia de 5% a 35%, enquanto nunca excede 4% em artefatos históricos de ferro de minérios terrestres produzidos antes do século XIX.Além disso, a proporção de níquel para cobalto desta lâmina é comparável aos materiais de meteoritos de ferro.\n[…]\nNa época da mumificação do rei Tutancâmon em aproximadamente 1323 a.C. (na Idade do Bronze), a fundição e fabricação de ferro eram raras. Objetos de ferro eram usados apenas para fins artísticos, ornamentais, rituais, presentes e cerimoniais, bem como para pigmentação. Portanto, o ferro durante essa época era mais valioso ou precioso do que o ouro.\n[…]\nArtefatos de ferro foram dados como presentes reais durante o período imediatamente anterior ao governo de Tutancâmon (ou seja, durante o reinado de Amenhotep III).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Templo de Karnak",
      "descricao": "Vasto complexo de templos dedicado sobretudo ao deus Amon, na antiga Tebas, atual Luxor"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A grande sala hipostila do templo de Karnak, em Luxor, é uma verdadeira floresta de colunas de pedra. Quantas colunas ela tem?",
    "resposta": "134",
    "distratores": [
      "48",
      "72",
      "300"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Karnak"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karnak",
        "situacao": "ok",
        "texto": "The Karnak Temple Complex, commonly known as Karnak (), comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt. Construction at the complex began during the reign of Senusret I (reigned 1971–1926 BCE) in the Middle Kingdom (c. 2000–1700 BC) and continued into the Ptolemaic Kingdom (305–30 BCE), although most of the extant buildings date from the New Kingdom.\n[…]\nThe area around Karnak was the ancient Egyptian Ipet-isut (\"The Most Selected of Places\") and the main place of worship of the 18th Dynastic Theban Triad, with the god Amun as its head.\n[…]\nIt is part of the monumental city of Thebes, and in 1979 it was added to the UNESCO World Heritage List along with the rest of the city. Karnak gets its name from the nearby, and partly surrounded, modern village of El-Karnak, 2.5 kilometres (1.6 miles) north of Luxor.\n[…]\nThe original name of the temple was Ipet-isut, meaning \"The Most Select of Places\". The complex's modern name \"Karnak\" comes from the nearby village of el-Karnak, which means \"fortified village\".\n[…]\nThe Great Hypostyle Hall in the Precinct of Amun-Re has an area of 5,000 m2 (1.2 acres) with 134 massive columns arranged in 16 rows. One hundred and twenty-two of these columns are 10 metres (33 ft) tall, and the other 12 are 21 metres (69 ft) tall with a diameter of over 3 metres (9.8 ft). The architraves, on top of these columns, are estimated to weigh 70 tons.\n[…]\nAncient Greek and Roman writers wrote about a range of monuments in Upper Egypt and Nubia, including Karnak, Luxor temple, the Colossi of Memnon, Esna, Edfu, Kom Ombo, Philae, and others.\n[…]\nCFEETK – Centre Franco-Égyptien d'Étude des Temples de Karnak (en)\n[…]\nKarnak images\n[…]\nwww.karnak3d.net :: \"Web-book\" The 3D reconstruction of the Great Temple of Amun in Karnak. Marc\n[…]\nDigital Karnak UCLA\n[…]\nKarnak Temple picture gallery at Remains.se"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carnaque",
        "situacao": "ok",
        "texto": "Templo de Carnaque (Karnak), ou simplesmente Carnaque, é um templo dedicado ao deus Amom-Rá. Seu nome \"Karnak\" deriva do árabe: خورنق,  \"Khurnaq\" -  \"aldeia fortificada\" . Tem esse nome devido a uma aldeia vizinha chamada Carnaque, mas no tempo dos antigos faraós a aldeia era conhecida como Ipete-sute (\"o melhor de todos os lugares\").\n[…]\nUm aspecto famoso de Carnaque é o Grande Salão Hipostilo no recinto de Amon-Rá, uma área de salão de 5.000 m2  com 134 colunas maciças dispostas em 16 fileiras. Cento e vinte e duas dessas colunas têm 10 metros (33 pés) de altura e as outras 12 têm 21 metros (69 pés) de altura com um diâmetro de mais de 3 metros (9,8 pés). Estima -se que as arquitraves no topo dessas colunas pesem 70 toneladas. Essas arquitraves podem ter sido levantadas a essas alturas usando alavancas.\n[…]\nA construção mais importante do conjunto de Carnaque é o grande templo de Amom-Rá, cujo plano, muito complexo, testemunha numerosas vicissitudes da história dos faraós. O grande eixo este-oeste é balizado por uma série de pátios e pilones; medindo 103m de largura por 52m de profundidade, a célebre sala hipostila encerra verdadeira floresta de 134 colossais colunas em forma de enormes papiros.\n[…]\nCom 21m de altura e diâmetro de 4 m, essas colunas não dão, apesar de maciças, impressão de peso; os nomes de Seti I e Ramessés II aí se veem inscritos, repetidos indefinidamente. Numerosos edifícios secundários completam o grande templo de Amom-Rá: capelas de Osíris, templo de Ptá, templo de Opeth etc. A parte S do complexo é chamada Luxor. Os anais de Tutemés III, nas paredes, registram 20 anos de conquistas e arrolam as plantas e animais exóticos que o faraó trouxe da Ásia.\n[…]\nEsfinges de pedra, ao longo do eixo principal, parecem guardar as ruínas, na fímbria do deserto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Múmia egípcia",
      "descricao": "Corpo humano ou animal preservado artificialmente pelos antigos egípcios para a vida após a morte"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Entre a morte e o enterro, o processo completo de mumificação de um egípcio rico costumava levar quantos dias?",
    "resposta": "Setenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ancient_Egyptian_funerary_practices",
      "https://en.wikipedia.org/wiki/Mummy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ancient_Egyptian_funerary_practices",
        "situacao": "ok",
        "texto": "The ancient Egyptians had an elaborate set of funerary practices that they believed were necessary to ensure their immortality after death. These rituals included mummifying the body, casting magic spells, and burials with specific grave goods thought to be needed in the afterlife.\n[…]\nThe visual depiction of what judgment looks like has been discovered through ancient Egyptian ruins and artifacts. The procedure was depicted as follows: the deceased's heart was weighed in comparison to the feather of Maat, while Ammit awaited to eat the heart if the deceased was found to be a sinner. Among other deities, Osiris was a judge and represented an ideal output of the judgment process for the deceased who entered the judgment hall.\n[…]\nIf the scribe ran out of room while doing the transcription, it would just stop without completion. It is not until the Twenty-sixth Dynasty that there began to be any regulation of the order or even the number of spells that were to be included in the Book of the Dead. At that time, the regulation was set at 192 spells to be placed in the book, with certain ones holding the same place at all times.\n[…]\nIn addition to sources by ancient writers and modern scientists, a better understanding of the Ancient Egyptian mummification process is promoted through the study of mummies. The majority of what is known to be true about the mummification process is based on the writing of early historians who carefully recorded the processes—one of whom was Herodotus. Now, modern day archaeologists are using the writings of early historians as a basis for their study.\n[…]\nBolesław Prus, Pharaoh (1895), depicts the whole process of mummification and funeral at the fall of the 20th Dynasty and New Kingdom."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mummy",
        "situacao": "ok",
        "texto": "A mummy is a dead human or an animal whose soft tissues and organs have been preserved by either intentional or accidental exposure to chemicals, extreme cold, very low humidity, or lack of air, so that the recovered body does not decay further if kept in cool and dry conditions. Some authorities restrict the use of the term to bodies deliberately embalmed with chemicals, but the use of the word t\n[…]\nHer corpse was so well-preserved that surgeons from the Hunan Provincial Medical Institute were able to perform an autopsy. The exact reason why her body was so completely preserved has yet to be determined.\n[…]\nIn 2010, a team led by forensic archaeologist Stephen Buckley mummified Alan Billis using techniques based on 19 years of research of 18th-dynasty Egyptian mummification. The process was filmed for television, for the documentary Mummifying Alan: Egypt's Last Secret. Billis made the decision to allow his body to be mummified after being diagnosed with terminal cancer in 2009. His body currently resides at London's Gordon Museum.\n[…]\nForensic examinations at the Hospital das Clínicas identified an incision in the jugular vein, used to inject aromatic substances such as camphor and myrrh during the original embalming. According to forensic archaeologist Valdirene Ambiel, the preservation was aided by the casket's hermetic seal, which prevented the growth of microorganisms. Before reinterment, the body was re-embalmed using methods similar to the original 19th-century process.\n[…]\nThese blends appeared on the market as forgeries of powdered mummy pigment but were ultimately considered as acceptable replacements, once antique mummies were no longer permitted to be destroyed. In 1890, about 180,000 mummified cats were excavated and shipped from Egypt to England to be processed for use in fertilizer."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Anúbis",
      "descricao": "Deus egípcio da mumificação e protetor dos mortos e das necrópoles"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Anúbis, o deus egípcio que protegia os mortos e presidia a mumificação, era representado com a cabeça de qual animal?",
    "resposta": "Chacal",
    "distratores": [
      "Falcão",
      "Íbis",
      "Carneiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anubis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anubis",
        "situacao": "ok",
        "texto": "Anubis ( ; Ancient Greek: Ἄνουβις), also known as Inpu, Inpw, Jnpw, or Anpu in Ancient Egyptian (Coptic: ⲁⲛⲟⲩⲡ, romanized: Anoup), is the god of funerary rites, protector of graves, and guide to the underworld in ancient Egyptian religion, usually depicted as a canine or a man with a canine head.\n[…]\n\"Anubis\" is a Greek rendering of this god's Egyptian name. Before the Greeks arrived in Egypt, around the 7th century BC, the god was known as Anpu or Inpu.\n[…]\nOne of the roles of Anubis was as the \"Guardian of the Scales.\" The critical scene depicting the weighing of the heart, in the Book of the Dead, shows Anubis performing a measurement that determined whether the person was worthy of entering the realm of the dead (the underworld, known as Duat). By weighing the heart of a deceased person against ma'at, who was often represented as an ostrich feather, Anubis dictated the fate of souls.\n[…]\nAnubis was one of the most frequently represented deities in ancient Egyptian art. He is depicted in royal tombs as early as the First Dynasty. The god is typically treating a king's corpse, providing sovereign to mummification rituals and funerals, or standing with fellow gods at the Weighing of the Heart of the Soul in the Hall of Two Truths.\n[…]\nIn the early dynastic period, he was depicted in animal form, as a black canine. Anubis's distinctive black color did not represent the animal, rather it had several symbolic meanings. It represented \"the discolouration of the corpse after its treatment with natron and the smearing of the wrappings with a resinous substance during mummification.\" Being the color of the fertile silt of the River Nile, to Egyptians, black also symbolized fertility and the possibility of rebirth in the afterlife.\n[…]\nThe dictionary definition of Anubis at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/An%C3%BAbis",
        "situacao": "ok",
        "texto": "Anúbis ([əˈnjuːbᵻs]; em grego clássico: Ἄνουβις) ou Anupo é, no panteão do Antigo Egito, o deus dos mortos e moribundos, que guiava e conduzia as almas ao mundo dos mortos. É representado com cabeça de chacal, embora os egiptólogos mais conservadores afirmem que não há como saber com certeza o animal que o representa.\n[…]\nÉ um local onde Anúbis exerce sua proteção sobre cadáveres, em processo de transformação durante a mumificação. O baú que representa um templo ou um naos e no qual Anúbis é freqüentemente retratado deitado é talvez uma representação do seh netjer.\n[…]\nAo longo XX século XX Século XX, muitos especialistas estimam que o animal de Anúbis é um ser híbrido, cão-lobo, lobo-chacal, chacal-cão, etc  Segundo George Hart, escritor e conferencista do Museu Britânico \"o cão Anubis é provavelmente um chacal[...] Mas outros cães, por exemplo o pária cor de ferrugem, podem ter servido como protótipo. Anubis talvez represente o epítome dos cães do deserto\".\n[…]\nA assimilação de Anubis ao chacal é baseada em um critério comportamental: este canino noturno é conhecido por assombrar cemitérios à noite, e mais particularmente em torno de sepulturas recém-cavadas, a fim de desenterrar e devorar cadáveres. Esse comportamento teria sido associado pelos antigos egípcios à morte e, por extensão, à mumificação e às cerimônias fúnebres.\n[…]\nOs antigos egípcios certamente não deixaram de notar esse comportamento em seus cães de caça ou nos caninos que conheciam, como o chacal dourado ( Canis aureus ), a raposa vermelha ( Vulpes vulpes ), o feneco ( Vulpes zerda ) ou o selvagem africano. Cão ( Lycaon pictus ). O deus Anúbis pode ter sido representado na forma canina por causa desse comportamento escavador, sendo o principal papel de uma divindade funerária esconder os restos mortais da vista dos vivos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Cleópatra",
      "descricao": "Cleópatra Sétima, última soberana da dinastia ptolemaica do Egito, morta em 30 antes de Cristo"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Cleópatra pertencia a uma dinastia de origem macedônica. Segundo Plutarco, ela foi a primeira da família a aprender qual idioma?",
    "resposta": "Egípcio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cleopatra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cleopatra",
        "situacao": "ok",
        "texto": "Cleopatra VII Thea Philopator (Koine Greek: Κλεοπάτρα Θεά Φιλοπάτωρ, lit. 'Cleopatra father-loving goddess'; 70/69 BC – 10 or 12 August 30 BC) was Queen of the Ptolemaic Kingdom of Egypt from 51 to 30 BC, and the last active Hellenistic pharaoh. A member of the Ptolemaic dynasty, she was a descendant of its founder, Ptolemy I Soter, a Macedonian Greek general and companion of Alexander the Great.\n[…]\nIn addition to her portrayal as a \"vampire\" queen, Bara's Cleopatra also incorporated tropes familiar from 19th-century Orientalist painting, such as despotic behavior, mixed with dangerous and overt female sexuality. Colbert's character of Cleopatra served as a glamour model for selling Egyptian-themed products in department stores in the 1930s, targeting female moviegoers.\n[…]\nCleopatra belonged to the Macedonian Greek dynasty of the Ptolemies, their European origins tracing back to northern Greece. Through her father, she was a descendant of two prominent companions of Alexander the Great of Macedon: the general Ptolemy I Soter, founder of the Ptolemaic Kingdom of Egypt, and Seleucus I Nicator, the Macedonian Greek founder of the Seleucid Empire of West Asia. While Cleopatra's paternal line can be traced, the identity of her mother is uncertain.\n[…]\nStacy Schiff writes that Cleopatra was a Macedonian Greek with some Persian ancestry, arguing that it was rare for the Ptolemies to have an Egyptian mistress. Duane W.\n[…]\nRoller speculates that Cleopatra could have been the daughter of a theoretical half-Macedonian-Greek, half-Egyptian woman from Memphis in northern Egypt belonging to a family of priests dedicated to Ptah (a hypothesis not generally accepted in scholarship), but contends that whatever Cleopatra's ancestry, she valued her Greek Ptolemaic heritage the most. Ernle Bradford writes that Cleopatra challenged Rome not as an Egyptian woman \"but as a civilized Greek\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cle%C3%B3patra",
        "situacao": "ok",
        "texto": "Cleópatra VII Filopátor (em grego clássico: Κλεοπᾰ́τρᾱ Φιλοπάτωρ; romaniz.: Kleopátrā Philopátōr; Alexandria, 69 a.C. – Alexandria, 10 ou 12 de agosto de 30 a.C.) foi a última governante ativa do Reino Ptolemaico do Egito. Como membro da dinastia ptolemaica, foi descendente de Ptolemeu I Sóter, um general greco-macedônio e companheiro de Alexandre, o Grande. Sua língua materna era o grego koiné, e\n[…]\nOs faraós ptolemaicos eram coroados pelo sumo sacerdote de Ptá em Mênfis, mas residiam na cidade multicultural e em grande parte grega de Alexandria, fundada por Alexandre, o Grande da Macedônia. Eles falavam grego e governavam o Egito como monarcas helenísticos, recusando-se a aprender a língua nativa. Em contraste, Cleópatra dominava vários idiomas na idade adulta e foi a primeira governante de sua dinastia a aprender a língua egípcia.\n[…]\nNas artes cênicas, a morte de Isabel I de Inglaterra em 1603 e a publicação alemã em 1606 de supostas cartas de Cleópatra inspiraram Samuel Daniel a alterar e republicar sua peça Cleopatra de 1594 em 1607. Posteriormente o Antônio e Cleópatra de William Shakespeare, baseado em Plutarco, foi apresentado pela primeira vez em 1608 e forneceu uma visão um tanto obscena da egípcia, em contraste com a Rainha Virgem inglesa.\n[…]\nEm 2016, o perfil de Cleópatra foi incluído na primeira edição do livro Histórias de Ninar para Garotas Rebeldes: Cem fábulas sobre mulheres extraordinárias, como uma das cem mulheres mais influentes.\n[…]\nRoller especulou que ela poderia ter sido filha de uma teórica meio greco-macedônia, meio-egípcia de Mênfis, no norte do Egito, pertencente a uma família de sacerdotes dedicados a Ptá (uma hipótese comumente rejeitada na academia), mas afirma que, qualquer que seja sua ancestralidade, ela valorizou mais sua herança grega. Ernle Bradford escreveu que a rainha desafiou Roma não como uma mulher egípcia, \"mas como uma grega civilizada\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Ushabti",
      "descricao": "Estatueta funerária egípcia colocada nas tumbas, muitas vezes em grande número, junto com o morto"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os ushabtis, estatuetas que os egípcios punham às centenas em certas tumbas, tinham qual função no além?",
    "resposta": "Trabalhar no lugar do morto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ushabti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ushabti",
        "situacao": "ok",
        "texto": "The ushabti (also known as shabti or shawabti, with a number of differing spellings) was an ancient Egyptian funerary figurine. The Egyptological term is derived from the Egyptian word 𓅱𓈙𓃀𓏏𓏭𓀾 wšbtj, which replaced earlier 𓆷𓍯𓃀𓏏𓏭𓀾 šwbtj, perhaps the nisba of 𓈙𓍯𓃀𓆭 šwꜣb (persea tree).\n[…]\nShabtis were servant figures that carried out the tasks required of the deceased in the underworld. It was necessary for the owner's name to be inscribed on an ushabti, along with a phrase sending them to action, written in the hieratic script.\n[…]\nIt is thought by some that the term ushabti meant \"follower\" or \"answerer\" in Ancient Egyptian, because the figurine \"answered\" for the deceased person and performed all the routine chores of daily life for its master in the afterlife that the gods had planned for them, although it would be difficult to reconcile this derivation with the form shawabti.\n[…]\nUshabtis of Yuya\n[…]\nStick shabti\n[…]\nTaylor, Richard (2000). \"SHABTI (USHABTI, SHAWABTI)\". Death and the Afterlife: a cultural encyclopedia. California: ABC-CLIO. pp. 320–321. ISBN 978-0-87436-939-7.\n[…]\nStewart, Harry M. (1995). Egyptian Shabtis. Princes Risborough. ISBN 978-0-7478-0301-0.\n[…]\nWhelan, Paul (2007). Mere Scraps of Rough Wood?: 17th - 18th Dynasty Stick Shabtis in the Petrie Museum and Other Collections. London: Golden House. ISBN 978-1-906137-00-7.\n[…]\nWhitford, Michelle F.; Wyatt-Spratt, Simon; Gore, Damian B.; Johnsson, Mattias T.; Power, Ronika K.; Rampe, Michael; Richards, Candace; Withford, Michael J. (October 2020). \"Assessing the standardisation of Egyptian shabti manufacture via morphology and elemental analyses\". Journal of Archaeological Science: Reports. 33 102541. Bibcode:2020JArSR..33j2541W. doi:10.1016/j.jasrep.2020.102541. S2CID 224873688.\n[…]\nUshabtis database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shabti",
        "situacao": "ok",
        "texto": "Shabti, shauabti ou chauabti, dentre outras variações, é o termo que designa um tipo de estatueta funerária egípcia de aspecto mumiforme, destinada a substituir o falecido na execução dos seus afazeres após a morte. Recebem a denominação ushebti, uchebti ou ushabti, dentre outras, os exemplares executados a partir da XXI dinastia, quando a passam a representar não somente o defunto, mas também seu\n[…]\nA princípio, eram moldadas em cera ou a partir do lodo retirado do rio Nilo. Como o tempo, tornam-se mais sofisticadas, passando a ser executadas em diversos suportes distintos, como madeira, pedra, terracota, porcelana e, mais esporadicamente, bronze. Na Época Baixa, quando predominam os exemplares em cerâmica verde e azul, os ushebtis adquirem novos detalhes no modelado, como pedestais, pilares dorsais e características típicas da estatuária do período saíta, como o sorriso das figuras.\n[…]\n(em inglês)The ushabti: an existence of eternal servitude",
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
