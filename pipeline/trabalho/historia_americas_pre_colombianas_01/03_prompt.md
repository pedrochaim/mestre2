Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Américas Pré-Colombianas** (tema **História**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Teotihuacan",
      "descricao": "Antiga cidade pré-colombiana no vale do México, com as pirâmides do Sol e da Lua, abandonada séculos antes dos astecas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Teotihuacan é um nome dado pelos astecas séculos depois do abandono da cidade. Ele costuma ser traduzido como lugar de nascimento de quem?",
    "resposta": "Dos deuses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teotihuacan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan (; Spanish: Teotihuacán, Spanish pronunciation: [teotiwaˈkan] ; Classical Nahuatl: Teōtīhuacān, Classical Nahuatl pronunciation: [te.oːtiːˈwakaːn] ) is an ancient Mesoamerican city located in a sub-valley of the Valley of Mexico, which is located in the State of Mexico, 40 kilometers (25 mi) northeast of modern-day Mexico City.\n[…]\nMore recently, Teotihuacan has become the center of controversy over Resplandor Teotihuacan, a massive light and sound spectacular installed to create a nighttime show for tourists. Critics explain that a large number of perforations for the project have caused fractures in stones and irreversible damage, while the project will have limited benefit.\n[…]\nOn May 31, 2021, 250 National Guard troops and 60 agents of the Attorney General's Office were sent to the Teotihuacán site to seize parcels of land intended for illegal construction and to forcibly stop further destruction of historical sites. The National Institute of Anthropology and History (INAH) had suspended authorization for those projects in March, yet construction work with heavy machinery and looting of artifacts had continued.\n[…]\nThe seizure of the land came a week after the International Council on Monuments and Sites (ICOMOS) warned that Teotihuacán was at risk of losing its UNESCO World Heritage designation.\n[…]\nAsteroid 293477 Teotihuacan\n[…]\nCerro de la Estrella, a large Teotihuacano-styled pyramid in what is now part of Mexico City\n[…]\nSpring equinox in Teotihuacán\n[…]\nTeotihuacan Research Guide, academic resources and links, maintained by Temple University\n[…]\nTeotihuacan Archived 2018-11-18 at the Wayback Machine Teotihuacan information and history\n[…]\nTeotihuacan article by Encyclopædia Britannica\n[…]\nTeotihuacan Multimedia Gallery\n[…]\nLidar scans of the Teotihuacán Valley reveal how the landscape was engineered centuries ago. Gizmodo Sept 21, 2021"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teotihuacan",
        "situacao": "ok",
        "texto": "Teotihuacan é uma antiga cidade mesoamericana localizada em um subvale do Vale do México, que fica no Estado do México, 40 quilômetros a nordeste da atual Cidade do México. É conhecida hoje como o sítio arqueológico de muitas das pirâmides mesoamericanas mais significativas do ponto de vista arquitetônico, construídas na América pré-colombiana, especificamente a Pirâmide do Sol e a Pirâmide da Lua\n[…]\nO nome Teōtīhuacān foi dado pelos astecas de língua náuatle séculos após a queda da cidade por volta de 550 d.C. O termo foi interpretado como \"berço dos deuses\" ou \"lugar onde os deuses nasceram\", refletindo os mitos de criação náuatles que supostamente ocorreram em Teotihuacan. A estudiosa náuatle Thelma D. Sullivan interpreta o nome como \"lugar daqueles que têm o caminho dos deuses\". Isso porque os astecas acreditavam que os deuses criaram o universo naquele local.\n[…]\nA partir de 23 de janeiro de 2018, o nome Teotihuacan passou a ser alvo de escrutínio por parte de especialistas, que agora acreditam que o nome do sítio pode ter sido alterado pelos colonizadores espanhóis no século XVI. A arqueóloga Verónica Ortega, do Instituto Nacional de Antropologia e História, afirma que a cidade parece ter sido, na verdade, chamada Teohuacan, que significa \"Cidade do Sol\", em vez de \"Cidade dos Deuses\", como sugere o nome atual.\n[…]\nO conhecimento das imensas ruínas de Teotihuacan nunca se perdeu completamente. Após a queda da cidade, diversos ocupantes viveram no local. Durante o período asteca, a cidade era um local de peregrinação e estava ligada ao mito de Tollan, o lugar onde o sol foi criado. Hoje, Teotihuacan é uma das atrações arqueológicas mais importantes do México.\n[…]\nElas são realmente únicas, mas não tenho ideia do que significam.\" Todos esses artefatos foram depositados deliberadamente e propositalmente, como se fossem oferendas para apaziguar os deuses.\n[…]\nTeotihuacan no Google Maps",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Avenida dos Mortos",
      "descricao": "Via principal de Teotihuacan, no México, ladeada pelas pirâmides do Sol e da Lua."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os astecas encontraram Teotihuacan já em ruínas e chamaram sua via principal de Avenida dos Mortos. Por que escolheram esse nome?",
    "resposta": "Achavam que os edifícios eram túmulos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Avenue_of_the_Dead"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Avenue_of_the_Dead",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Império Inca",
      "descricao": "Estado pré-colombiano andino, centrado em Cusco, que dominou boa parte da costa oeste da América do Sul nos séculos quinze e dezesseis."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os incas chamavam seu império de Tawantinsuyu. O que esse nome significa em quíchua?",
    "resposta": "Quatro regiões unidas",
    "distratores": [
      "Filhos do Sol",
      "Terra do Ouro",
      "Umbigo do Mundo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_Empire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Empire",
        "situacao": "ok",
        "texto": "The Inca Empire, officially known as the Realm of the Four Parts (Quechua: Tawantinsuyu pronounced [taˈwantiŋ ˈsuju], lit. 'land of four parts'), was the largest empire in pre-Columbian America. The administrative, political, and military center of the empire was in the city of Cusco. The Inca civilisation rose from the Peruvian highlands sometime in the early 13th century. The Portuguese explorer\n[…]\nThe Inca Empire was unique in that it lacked many of the features associated with civilization in the Old World. The anthropologist Gordon McEwan wrote that the Incas were able to construct \"one of the greatest imperial states in human history\" without the use of the wheel, draft animals, knowledge of iron or steel, or even a system of writing.\n[…]\nWhen the Spaniards arrived in the Empire of the Incas, they gave the name Peru to what the natives knew as Tawantinsuyu. The name \"Inca Empire\" originated from the Chronicles of the 16th century.\n[…]\nGuaman Poma's 1615 book, El primer nueva corónica y buen gobierno, shows numerous line drawings of Inca flags. In his 1847 book A History of the Conquest of Peru, William H. Prescott says that in the Inca army each company had its particular banner and that the imperial standard, high above all, displayed the glittering device of the rainbow, the armorial ensign of the Incas.\" A 1917 world flags book says the Inca \"heir-apparent ...\n[…]\nThe Incas had no iron or steel and their weapons were not much more effective than those of their opponents so they often defeated opponents by sheer force of numbers, or else by persuading them to surrender beforehand by offering generous terms. Inca weaponry included \"hardwood spears launched using throwers, arrows, javelins, slings, the bolas, clubs, and maces with star-shaped heads made of copper or bronze\".\n[…]\n\"Ice Treasures of the Inca\", National Geographic site.\n[…]\nInca Religion\n[…]\nA Map and Timeline of Inca Empire events"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Inca",
        "situacao": "ok",
        "texto": "Império Inca (em quíchua:  Tawantinsuyu, lit. \"quatro partes juntas\") foi o maior império da América pré-colombiana. O centro administrativo, político e militar do império ficava na cidade de Cusco. A civilização inca surgiu nas terras altas do Peru em algum momento do início do século XIII. Seu último reduto foi conquistado pelos espanhóis em 1572.\n[…]\nOs incas se referiam ao seu império como Tawantinsuyu, \"os quatro suyu\". Em quíchua, tawa é quatro e -ntin é um sufixo que designa um grupo, de modo que um tawantin é um quarteto, um grupo de quatro coisas juntas, neste caso os quatro suyu (\"regiões\" ou \"províncias\") cujos cantos se encontravam na capital. Os quatro suyu eram: Chinchaysuyu (norte), Antisuyu (leste; a selva amazônica), Qullasuyu (sul) e Kuntisuyu (oeste).\n[…]\nO Império Inca empregava planejamento central de sua economia. O império negociava com regiões externas, embora não operassem uma economia de mercado interna substancial.\n[…]\nO Império Inca era um sistema federalista que consistia em um governo central com os incas no topo e quatro quadrantes, ou suyu: Chinchay Suyu (NW), Anti Suyu (NE), Kunti Suyu (SW) e Qulla Suyu (SE). Eles se encontravam no centro, Cusco. Esses suyu provavelmente foram criados por volta de 1460 durante o reinado de Pachacuti, antes que o império atingisse sua maior extensão territorial.\n[…]\nEnquanto Cusco era essencialmente governada pelos Sapa Inca, seus parentes e as linhagens reais panaqa, cada suyu era governado por um Apu, um termo de estima usado para homens de status elevado e para montanhas veneradas. Tanto Cusco como um distrito e quanto os quatro suyu como regiões administrativas eram agrupados nas divisões hanan (superior) e hurin (inferior). Como os incas não tinham registros escritos, é impossível listar exaustivamente o wamani constituinte.\n[…]\nComer alimentos que o Sapa Inca consumia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Machu Picchu",
      "descricao": "Cidadela inca do século quinze nos Andes peruanos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em quíchua, o que significa machu, a primeira parte do nome Machu Picchu?",
    "resposta": "Velho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Machu_Picchu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern  Peru  on a mountain ridge at  2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate.\n[…]\nBeyond its historical significance, Machu Picchu houses a diverse range of species. Among them are the Andean fox, puma, vizcacha, spectacled bear, and white-tailed deer. The sanctuary is also a habitat for more than 420 bird species, such as the cock-of-the-rock and the Andean condor. The area hosts over 550 tree species across 74 families, including ferns, gymnosperms, and palms.\n[…]\nBetween the valley floor and the altitudinal zone of the Inca citadel, ranging from 2,200 metres (7,200 ft) to 2,500 metres (8,200 ft) meters above sea level, Machu Picchu features a subtropical highland climate, with an average annual precipitation of 2,010 millimetres (79 in) and an annual mean temperature of approximately 18 °C (64 °F). The site is characterized by steep slopes, dense vegetation, and significant rainfall, contributing to high humidity levels of 80–90%.\n[…]\nArchitecturally, Inti Mach'ay is often considered to be one of the most significant structures at Machu Picchu. Its entrances, walls, steps, and windows display some of the finest masonry in the Inca Empire. The cave also includes a tunnel-like window unique among Incan structures, designed so that sunlight enters the interior only for a few days around the December solstice.\n[…]\nStories on Machu Picchu by Fernando Astete, former Chief of National Archaeological Park of Machupicchu\n[…]\nPlants and animals in Machu Picchu Archived 4 November 2023 at the Wayback Machine\n[…]\nFirst photographs of Hiram Bingham in Machu Picchu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu  é uma cidadela inca do século XV localizada na Cordilheira Oriental do sul do Peru, em uma crista montanhosa a 2.430 metros de altura. Está situado no distrito de Machupicchu, na província de Urubamba, cerca de 80 quilômetros a noroeste de Cusco, acima do Vale Sagrado e ao longo do rio Urubamba, que forma um cânion profundo com um clima subtropical de montanha.\n[…]\nO sítio arqueológico fica em uma estreita passagem entre dois picos de montanha, Machu Picchu e Huayna Picchu. Em quéchua, machu significa 'velho' ou 'pessoa idosa' e wayna (escrito huayna (na ortografia espanhola padrão) significa 'jovem', enquanto pikchu refere-se a um 'cume', 'pico' ou 'pirâmide'. Assim, o nome do local é frequentemente traduzido como 'montanha velha' ou 'pico velho'.\n[…]\nDe volta a Cusco, Bingham perguntou aos plantadores sobre os lugares mencionados por Calancha, particularmente ao longo do rio Urubamba. Segundo Bingham, \"um velho garimpeiro disse que havia ruínas interessantes em Machu Picchu\", embora suas declarações \"não tenham recebido importância dos cidadãos mais influentes\". Somente mais tarde Bingham soube que Charles Wiener também ouvira falar das ruínas em Huayna Picchu e Machu Picchu, mas não conseguiu chegar até elas.\n[…]\nSua localização pode ter tido um significado simbólico dentro de uma paisagem sagrada, alinhando-se com picos proeminentes ao redor, como Veronica, Salcantay e Huayna Picchu.\n[…]\nMachu Picchu já apareceu em diversos filmes, programas de televisão e produções musicais. O filme da Paramount Pictures, O Segredo dos Incas (1954), estrelado por Charlton Heston e Yma Sumac, foi filmado em locações em Machu Picchu e Cusco, marcando a primeira vez que um grande estúdio de Hollywood filmou no local. O drama de Werner Herzog, Aguirre, der Zorn Gottes (1972), começa com cenas filmadas na área de Machu Picchu e na escadaria de pedra de Huayna Picchu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Machu Picchu",
      "descricao": "Cidadela inca do século quinze nos Andes peruanos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século quinze, Machu Picchu foi construída como propriedade de que imperador inca?",
    "resposta": "Pachacútec",
    "fonte": [
      "https://en.wikipedia.org/wiki/Machu_Picchu",
      "https://en.wikipedia.org/wiki/Pachacuti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern  Peru  on a mountain ridge at  2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate.\n[…]\nMachu Picchu’s early chronology continues to be a matter of scholarly debate. Earlier chronological models, based mainly on John H. Rowe's historical reconstruction of the reign of Pachacuti Inca Yupanqui, have placed the beginning of construction around 1450, 10 years after his takeover. However, a 2021 study led by Richard L.\n[…]\nBurger, professor of anthropology at Yale University), reporting 26 AMS radiocarbon measurements from human remains concluded that Machu Picchu was occupied from around 1420 to 1530. Similar conclusions supporting an earlier 15th-century chronology have been reported by other radiocarbon studies. Construction appears to date from two Sapa Incas, Pachacutec Inca Yupanqui (1438–1471) and Túpac Inca Yupanqui (1472–1493).\n[…]\nA consensus among archaeologists is that Pachacutec ordered the construction of the royal estate after his conquest of the middle and lower Urubamba; this has been interpreted as part of a broader program of establishing royal estates along the Urubamba River. Machu Picchu’s palace complex is thought to have functioned as a seasonal royal retreat. Although Machu Picchu is considered to be a royal estate, it would not have been passed down in the line of succession.\n[…]\nMachu Picchu was connected to the Inca road system and long-distance trade, as shown by obsidian nodules found near the site’s entrance. Analyses by Burger and Asaro in the 1970s traced them to the Titicaca or Chivay sources, indicating extensive pre-Hispanic exchange networks."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pachacuti",
        "situacao": "ok",
        "texto": "Pachacuti Inca Yupanqui, also called Pachacútec (Quechua: Pachakutiy Inka Yupanki, pronounced [ˈpatʃa ˈkuti ˈiŋka juˈpaŋki]), was the ninth Sapa Inca of the Chiefdom of Cusco, which he transformed into the Inca Empire (Tawantinsuyu). Most archaeologists now believe that the famous Inca site of Machu Picchu was built as an estate for Pachacuti.\n[…]\nPachacuti conquered lands along the Urubamba valley, where he founded the famous site of Machu Picchu.\n[…]\nThe Colla chiefdom and the Lupaca chiefdom of lake Titicaca, in the Altiplano, were one of the first of Pachacuti's targets. Following the construction of the Qurikancha, the \"temple of gold\" dedicated to the sun, Pachacuti sent an army near the border with the Colla chiefdom, before joining his forces not long after. The Colla chief or Colla Capac, informed of this, gathered his forces and awaited the Inca at the town of Ayaviri.\n[…]\nAccording to the traditions collected by colonial chroniclers, Amaru was a \"gentle individual\" concentrated on \"agriculture and the construction of hydraulic canals\". Lacking the military capacities necessary to become Sapa Inca, after 5 to 6 or 10 years of co-reign, Pachacuti revisited his decision and instead presented his son Tupac Yupanqui before the Inca nobles who proceeded to elect Tupac co-ruler.\n[…]\nPachacuti is featured as the leader of the Inca in the video games Europa Universalis IV, Civilization III, Civilization V, Civilization VI, and Civilization VII.\n[…]\nPachacuti, a resurrected Sapa Inca king who is over 500 years old, plays a major role in James Rollins' novel  Excavation, whose major action occurs in the Peruvian Andes. The book is steeped in history and culture about the Inca, Moche, and Quechan peoples, their interactions with the Dominican Order and Spanish conquistadors, and the Spanish Inquisition.\n[…]\nColla–Inca War"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu  é uma cidadela inca do século XV localizada na Cordilheira Oriental do sul do Peru, em uma crista montanhosa a 2.430 metros de altura. Está situado no distrito de Machupicchu, na província de Urubamba, cerca de 80 quilômetros a noroeste de Cusco, acima do Vale Sagrado e ao longo do rio Urubamba, que forma um cânion profundo com um clima subtropical de montanha.\n[…]\nFrequentemente chamada de \"Cidade Perdida dos Incas\", Machu Picchu é um dos símbolos mais icônicos da civilização inca e um importante sítio arqueológico nas Américas. Estima-se que tenha sido construída por volta de 1450, e acredita-se que tenha servido como propriedade do imperador inca Pachacuti, embora não existam registros escritos contemporâneos para confirmar isso. O sítio foi abandonado aproximadamente um século depois, provavelmente durante a conquista espanhola.\n[…]\nO nome inca original do local pode ter sido Huayna Picchu, em homenagem à montanha onde parte do complexo se encontra.\n[…]\nBurger, professor de antropologia da Universidade Yale, que relatou 26 medições de radiocarbono AMS em restos humanos, concluiu que Machu Picchu foi ocupada de cerca de 1420 a 1530. Conclusões semelhantes, que apoiam uma cronologia anterior, do século XV, foram relatadas por outros estudos de radiocarbono. A construção parece datar de dois Sapa Incas, Pachacuti Inca Yupanqui (1438–1471) e Túpac Inca Yupanqui (1472–1493).\n[…]\nHá consenso entre os arqueólogos de que Pachacuti ordenou a construção da propriedade real após sua conquista do médio e baixo Urubamba, o que tem sido interpretado como parte de um programa mais amplo de estabelecimento de propriedades reais ao longo do rio Urubamba. Acredita-se que o complexo palaciano de Machu Picchu tenha funcionado como um retiro real sazonal. Embora Machu Picchu seja considerada uma propriedade real, ela não teria sido transmitida na linha de sucessão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Chichén Itzá",
      "descricao": "Cidade maia na península de Iucatã, no México, com a pirâmide de Kukulcán."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Chichén Itzá significa na boca do poço dos itzás. Esse poço é que tipo de formação natural, típica do Iucatã?",
    "resposta": "Cenote",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chichen_Itza",
      "https://en.wikipedia.org/wiki/Sacred_Cenote"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chichen_Itza",
        "situacao": "ok",
        "texto": "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán, Mexico, between the cities of Valladolid and Mérida.\n[…]\nChichen Itza is located in the eastern portion of the Mexican state of Yucatán. The northern Yucatán Peninsula is karst, and the rivers in the interior all run underground. There are four visible, natural sink holes, called cenotes, that could have provided plentiful water year round at Chichén, making it attractive for settlement. Of these cenotes, the \"Cenote Sagrado\" or \"Sacred Cenote\" (also variously known as the Sacred Well or Well of Sacrifice), is the most famous.\n[…]\nWhether the human remains in this cenote are evidence of sacrificial behavior is still a subject of ongoing debate.\n[…]\nSouth of the North Group is a smaller platform that has many important structures, several of which appear to be oriented toward the second largest cenote at Chichen Itza, Xtoloc.\n[…]\nThe Temple of Xtoloc is a recently restored temple outside the Osario Platform is. It overlooks the other large cenote at Chichen Itza, named after the Maya word for iguana, \"Xtoloc\". The temple contains a series of pilasters carved with images of people, as well as representations of plants, birds, and mythological scenes.\n[…]\nThe museum offers a journey through the history of Chichen Itza through 14 thematic axes, highlighting the Sacred Cenote Room, which features a multimedia recreation of this ceremonial site. It also displays sculptures of Chac Mool, a stone table with reliefs of captives, and offerings discovered in the sacbeo'ob (Maya roads).\n[…]\nAncient Observatories page on Chichen Itza\n[…]\nChichen Itza reconstructed in 3D"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sacred_Cenote",
        "situacao": "ok",
        "texto": "The Sacred Cenote (Spanish: cenote sagrado, Latin American Spanish: [ˌsenote saˈɣɾaðo], \"sacred well\"; alternatively known as the \"Well of Sacrifice\") is a water-filled sinkhole in limestone at the pre-Columbian Maya archaeological site of Chichen Itza, in the northern Yucatán Peninsula.\n[…]\nThe northwestern Yucatán Peninsula is a limestone plain, with no rivers or streams, lakes or ponds. The region is pockmarked with natural sinkholes, called cenotes, which expose the water table to the surface. One of the most impressive of these is the Sacred Cenote, which is 60 metres (200 ft) in diameter and surrounded by sheer cliffs that drop to the water table some 27 metres (89 ft) below. It is connected to Chichen Itza's civic precinct by a 300-metre (980 ft) sacbe, a raised pathway.\n[…]\nMany perishable objects were preserved by the cenote. Wooden objects which normally would have rotted were preserved in the water. A great variety of wooden objects have been found including weapons, scepters, idols, tools, and jewelry. Jade was the largest category of objects found, followed by textiles. The presence of jade, gold and copper in the cenote offers proof of the importance of Chichén Itzá as a cultural city center.\n[…]\nNone of these raw materials are native to the Yucatán, which indicates that they were valuable objects brought to Chichén Itzá from other places in Central America and then sacrificed as an act of worship. Pottery, stone, bone and shells were also found in the cenote.\n[…]\nThe Franciscan leader Diego de Landa reported that he witnessed live sacrifices being thrown into the cenote at Chichén Itzá. However, his account does not indicate the regularity of this practice.\n[…]\nIk Kil, nearby cenote\n[…]\nCenotes of Chichén Itzá"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chich%C3%A9n_Itz%C3%A1",
        "situacao": "ok",
        "texto": "Chichén Itzá (do iucateque: Chi'ch'èen Ìitsha)  foi uma grande cidade pré-colombiana construída pela civilização maia no final do período clássico. O sítio arqueológico está localizado no município de Tinum, no estado de Yucatán, México.\n[…]\nA ascensão de Chichén Itzá está relacionada ao declínio de outros centros regionais das planícies do sul de Iucatã, como, por exemplo, Tikal. Frente a essa instabilidade sócio-política na região estava aberta a porta para a ascensão de uma nova região. Chichen Itzá teve ainda em seu favor, era o centro das rotas de comércio e intercâmbio de mercadorias daqueles grupos de mercadores da Costa do Golfo.\n[…]\nDurante a era de ouro de Chichén Itzá, a cidade experimentou um período de forte crescimento econômico e tornou-se o centro financeiro de Iucatã. As rotas de comércio possibilitaram a obtenção de ouro e outros recursos minerais para a região.\n[…]\nConta a história que Hunac Ceel previu todas suas conquistas, pois, em um dia dos dias do sacrifício, momento em que os indivíduos eram jogados no Cenote Sagrado e caso sobrevivessem seriam considerados sagrados, que não restou nenhum sobrevivente, Hunac resolveu se jogar no Cenote, tendo assim sobrevivido à queda. Hunac teria nesse momento profetizado todas suas conquistas.\n[…]\nA questão está envolvida em um grande enigma arqueológico até aos dias atuais. Após o período de ouro, acredita-se que Chichén Itzá entrou em declínio, mas alguns estudiosos sugerem que a região não foi completamente abanonada, já que os cenotes foram usados como local de peregrinação durante o extermínio do povo maia.\n[…]\nMedia relacionados com Chichén Itzá no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Quetzalcóatl",
      "descricao": "Divindade mesoamericana conhecida como serpente emplumada, cultuada por astecas e outros povos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em náuatle, o nome do deus Quetzalcóatl junta o quetzal, uma ave de penas verdes, a que outro animal?",
    "resposta": "Serpente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quetzalcoatl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quetzalcoatl",
        "situacao": "ok",
        "texto": "Quetzalcoatl () (Nahuatl: \"Feathered Serpent\") is a deity in Aztec culture and literature. Among the Aztecs, he was related to wind, the planet Venus, the Sun, merchants, arts, crafts,  knowledge, and learning. He was also the patron god of the Aztec priesthood. He is also a god of wisdom, learning and intelligence. He was one of several important gods in the Aztec pantheon, along with the gods Tl\n[…]\nAt least one major cache of offerings includes knives and idols adorned with the symbols of more than one god, some of which were adorned with wind jewels. Animals thought to represent Quetzalcoatl include resplendent quetzals, rattlesnakes (coatl meaning \"serpent\" in Nahuatl), crows, and macaws. In his form as Ehecatl he is the wind, and is represented by spider monkeys, ducks, and the wind itself. In his form as the morning star, Venus, he is also depicted as a harpy eagle.\n[…]\nRepresented as the plumed serpent, Quetzalcoatl was also seen as a manifestation of the wind, one of the most powerful forces of nature; a text in the Nahuatl language captures this relationship:\n[…]\nTo the Aztecs, Quetzalcoatl was, as his name indicates, a feathered serpent. He was a creator deity having contributed essentially to the creation of mankind. He also had anthropomorphic forms, for example in his aspects as Ehecatl the wind god. Among the Aztecs, the name Quetzalcoatl was also a priestly title, as the two most important priests of the Aztec Templo Mayor were called \"Quetzalcoatl Tlamacazqui\".\n[…]\nA 2012 exhibition at the Los Angeles County Museum of Art and the Dallas Museum of Art, \"The Children of the Plumed Serpent: the Legacy of Quetzalcoatl in Ancient Mexico\", demonstrated the existence of a powerful confederacy of Eastern Nahuas, Mixtecs and Zapotecs, along with the peoples they dominated throughout southern Mexico between 1200 and 1600 (Pohl, Fields, and Lyall 2012, Harvey 2012, Pohl 2003)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quetzalc%C3%B3atl",
        "situacao": "ok",
        "texto": "Quetzalcoatl é uma divindade na cultura e na literatura mesoamericanas cujo nome vem da Língua náuatle e significa \"serpente emplumada\" ou \"serpente de penas quetzal\". A adoração de uma Serpente Emplumada foi documentada pela primeira vez no Teotihuacan no primeiro século a.C. ou no primeiro século d.C.. Esse período situa-se no período do pré-clássico até o início do período clássico (400 a.C.\n[…]\nCholula é conhecido por ter permanecido como o mais importante centro de culto a Quetzalcoatl, a versão asteca/nahua da divindade serpente emplumada, no período pós-clássico.\n[…]\nPara os astecas, Quetzalcoatl era, como seu nome indica, uma serpente emplumada, um réptil voador (muito parecido com um dragão), que era um fazedor de fronteiras (e transgressor) entre a terra e o céu. Ele era uma divindade criadora, tendo contribuído essencialmente para a criação da Humanidade. Ele também tinha formas antropomórficas, por exemplo em seus aspectos como Ehecatl, o deus do vento.\n[…]\nUma exposição de 2012 no Museu de Arte do Condado de Los Angeles e no Museu de Arte de Dallas, \"Os Filhos da Serpente Emplumada: o Legado de Quetzalcoatl no México Antigo\", demonstrou a existência de uma poderosa confederação de nahuas orientais, mixtecas e zapotecas juntamente com os povos que dominaram em todo o sul do México entre 1200-1600 (Pohl, Fields e Lyall 2012, Harvey 2012, Pohl 2003).\n[…]\nQuetzelcoatl também apareceu em (Temporada 3) do documentário do Animal Planet, Lost Cassetes, em um episódio intitulado Q the Serpent God.\n[…]\nComeçando durante a crise em Standing Rock em 2016, em paralelo com a frase \"Mni Wiconi\" (\"Água é Vida\"), o apoio das populações indígenas mexicanas, mexicano-americanas e mexicanas incluiu o uso da frase em espanhol \"Agua es Vida\". Freqüentemente retratado com esta frase era Tlaloc ou Quetzalcoatl como uma serpente, ou às vezes ambos.\n[…]\nTopetzin Ce Acatl Quetzalcoatl",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Huitzilopochtli",
      "descricao": "Deus asteca da guerra e do sol, patrono dos mexicas de Tenochtitlan."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que pequena ave aparece no nome de Huitzilopochtli, o deus asteca da guerra?",
    "resposta": "Beija-flor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Huitzilopochtli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Huitzilopochtli",
        "situacao": "ok",
        "texto": "Huitzilopochtli (Classical Nahuatl: Huītzilōpōchtli, IPA: [wiːt͡siloːˈpoːt͡ʃt͡ɬi] ) is the solar and war deity of sacrifice in Aztec religion. He was also the patron god of the Aztecs and their capital city, Tenochtitlan. He wielded Xiuhcoatl, the fire serpent, as a weapon, thus also associating Huitzilopochtli with fire.\n[…]\nThe leader of one group, Huitzilopochtli, defeats the warriors of a woman leader, Coyolxauh, and tears open their breasts and eats their hearts. Both versions tell of the origin of human sacrifice at the sacred place, Coatepec, during the rise of the Aztec nation and at the foundation of Tenochtitlan.\n[…]\nHe always had a blue-green hummingbird helmet in any of the depictions found. In fact, his hummingbird helmet was the one item that consistently defined him as Huitzilopochtli, the sun god, in artistic renderings. He is usually depicted as holding a shield adorned with balls of eagle feathers, a homage to his mother and the story of his birth. He also holds the blue snake, Xiuhcoatl, in his hand in the form of an atlatl.\n[…]\nDiego Durán described the festivities for Huitzilopochtli. Panquetzaliztli (November 9 to November 28) was the Aztec month dedicated to Huitzilopochtli. People decorated their homes and trees with paper flags; there were ritual races, processions, dances, songs, prayers, and finally human sacrifices. This was one of the more important Aztec festivals, and the people prepared for the whole month.\n[…]\nFor the reconsecration of Great Pyramid of Tenochtitlan in 1487, dedicated to Tlaloc and Huitzilopochtli, the Aztecs reported that they sacrificed about 20,400 prisoners over the course of four days. While accepted by some scholars, this claim also has been considered Aztec propaganda. There were 19 altars in the city of Tenochtitlan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Huitzilopochtli",
        "situacao": "ok",
        "texto": "Huitzlopochtli (Náuatle clássico: Huītzilōpōchtli; traduzido por \"Beija-flor Azul\" ou \"Beija-flor Canhoto\" ou ainda \"Beija-flor do Sul\") era o deus do Estado e da guerra da religião asteca. Era o padroeiro da cidade de Tenochtitlán, capital da confederação asteca. Ele empunhava Xiuhcoatl, a serpente de fogo, como arma, associando assim Huitzilopochtli ao fogo.\n[…]\nHuitzilopochtli era uma divindade totalmente asteca sem nenhuma conexão  com outra civilização mesoamericana diferentemente de outros deuses do panteão asteca. E era o principal deus cultuado na capital do império Tenochtitlán. Comumente representado com seus membros pintados de azul com penas de beija-flor em sua perna esquerda além de uma lança cerimonial. A guerra e a morte estão bem entrelaçadas em suas manifestações rituais.\n[…]\nOs beija-flores, na cultura asteca e a ele associado em seu nome, eram considerados como sendo a alma de guerreiros perecidos que acompanhavam o Sol (Huitzilopochtli) em sua ronda diária pelo céu.\n[…]\nTenochtitlán a capital do império tem sua origem diretamente ligada ao culto de Huitzilopochtli. De acordo com relatos semi-históricos, o próprio deus teria indicado o caminho aos seus adoradores, futuros astecas, em direção ao Lago Texcoco atribuindo-lhes instruções e referências.\n[…]\nQuando então seus seguidores chegaram diante de uma águia empoleirada (que simboliza o Sol e o próprio Huitzilopochtli) sobre um cacto com frutos vermelhos (que simbolizavam o coração humano), novamente a divindade falou advertindo-os com as seguintes palavras: Oh, mexicas, serás aqui! Era exatamente o local onde a capital do futuro império asteca Tenochtitlán (Local do fruto do Cacto) seria enfim fundada.\n[…]\nMitologia Asteca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Olmecas",
      "descricao": "Civilização pré-colombiana do litoral do golfo do México, famosa pelas cabeças colossais de pedra."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os olmecas não se chamavam assim. O nome vem do náuatle dos astecas e quer dizer povo de que material?",
    "resposta": "Borracha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olmecs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olmecs",
        "situacao": "ok",
        "texto": "The Olmecs () or Olmec were an early major Mesoamerican civilization, flourishing in the modern-day Mexican states of Veracruz and Tabasco from roughly 1200 to 400 BC during Mesoamerica's formative period. They are known as one of the cradles of civilization. The Olmecs were initially centered at the site of their development in San Lorenzo Tenochtitlán, but moved to La Venta in the 10th century B\n[…]\nSan Jose Mogote is another site that has elements of cultural strides that the Olmecs could have adopted as the site can be dated back to 1500–500 BC. San Jose Mogote is a site that dates to the early Zapotecs, a civilization that situated well outside the Olmec heartland. The site shows some of the earlier signs of a working irrigation system by diverting water from streams over cropland. This irrigation system created by the Zapotecs existed well before the Olmecs existed as a society.\n[…]\nDespite evidence existing that at one time pointed in the direction that the Olmecs could have been a \"mother culture\" in Mesoamerica, these new discoveries largely refute that idea. The older evidence of the Zapotecs and other civilizations show that what was once considered Olmec technological and social evolutions were in fact much more widespread throughout the region before the Olmecs had even arrived at their strongest point.\n[…]\nAlthough several of these speculations, particularly the theory that the Olmecs were of African origin popularized by Ivan Van Sertima's book They Came Before Columbus, have become well known within popular culture, they are not considered credible by the vast majority of Mesoamerican researchers and scientists, who discard them as pop-culture pseudo-science.\n[…]\nBBC audio file. Discussion of Olmec culture (15 mins) A History of the World in 100 Objects"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olmecas",
        "situacao": "ok",
        "texto": "Olmecas é a designação do povo e da civilização que estiveram na origem da antiga cultura pré-colombiana da Mesoamérica e que se desenvolveram nas regiões tropicais do centro-sul do atual México durante o pré-clássico, próximo de onde hoje estão localizados os estados mexicanos de Veracruz e Tabasco, no Istmo de Tehuantepec, numa zona designada área nuclear olmeca.\n[…]\nO nome \"olmeca\" significa \"povo de borracha\" em náuatle, a língua dos astecas, e era o nome asteca para o povo que vivia na zona da área nuclear olmeca nos séculos XV e XVI, cerca de 2000 anos após o desaparecimento do que conhecemos como cultura olmeca. O termo \"povo de borracha\" remete para a antiga prática, utilizada desde os olmecas até aos astecas, de extrair látex da Castilla elastica, uma árvore da borracha da região.\n[…]\nA seiva de uma trepadeira local (Ipomoea alba), era então adicionada ao látex para formar borracha pelo menos desde o século XVI a.C.. Não se sabe como se autodenominavam os olmecas; alguns relatos mesoamericanas posteriores parecem referir-se aos antigos olmecas como \"Tamoanchan\". Outro termo às vezes utilizado para descrever a cultura olmeca é tenocelome, que significa \"boca do jaguar\".\n[…]\nOs olmecas, cujo nome significa \"povo de borracha\" na língua náuatle dos astecas, são fortes candidatos ao título de inventores do jogo de bola mesoamericano, tão disseminado entre as culturas mesoamericanas posteriores e utilizado com propósitos recreativos e religiosos. Uma dúzia de bolas de borracha datando de 1600 a.C. foram encontradas em El Manatí, um paul sacrificial olmeca situado dez quilómetros para leste de San Lorenzo Tenochtitlán.\n[…]\nA questão da cronologia olmeca chegou ao fim durante uma conferência havida em Tuxtla Gutiérrez em 1942, quando Alfonso Caso declarou que os olmecas eram a \"cultura mãe\" da Mesoamérica.\n[…]\nAstecas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Olmecas",
      "descricao": "Civilização pré-colombiana do litoral do golfo do México, famosa pelas cabeças colossais de pedra."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes povos da Mesoamérica floresceu primeiro?",
    "resposta": "Olmecas",
    "distratores": [
      "Astecas",
      "Toltecas",
      "Teotihuacanos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olmecs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olmecs",
        "situacao": "ok",
        "texto": "The Olmecs () or Olmec were an early major Mesoamerican civilization, flourishing in the modern-day Mexican states of Veracruz and Tabasco from roughly 1200 to 400 BC during Mesoamerica's formative period. They are known as one of the cradles of civilization. The Olmecs were initially centered at the site of their development in San Lorenzo Tenochtitlán, but moved to La Venta in the 10th century B\n[…]\nThe term Olmecs is derived from the Nahuatl Ōlmēcatl [oːlˈmeːkat͡ɬ] (singular) or Ōlmēcah [oːlˈmeːkaʔ] (plural). This word is composed of the two words: ōlli [ˈoːlːi], meaning \"natural rubber\", and the demonymic suffix -mēcatl [ˈmeːkat͡ɬ] . Thus literally meaning \"rubber people\" in Nahuatl.\n[…]\nIn counterpoint to Stirling, Covarrubias, and Alfonso Caso, however, Mayanists J. Eric Thompson and Sylvanus Morley argued for Classic-era dates for the Olmec artifacts. The question of Olmec chronology came to a head at a 1942 Tuxtla Gutierrez conference, where Alfonso Caso declared that the Olmecs were the \"mother culture\" (\"cultura madre\") of Mesoamerica.\n[…]\nDespite evidence existing that at one time pointed in the direction that the Olmecs could have been a \"mother culture\" in Mesoamerica, these new discoveries largely refute that idea. The older evidence of the Zapotecs and other civilizations show that what was once considered Olmec technological and social evolutions were in fact much more widespread throughout the region before the Olmecs had even arrived at their strongest point.\n[…]\nAlthough several of these speculations, particularly the theory that the Olmecs were of African origin popularized by Ivan Van Sertima's book They Came Before Columbus, have become well known within popular culture, they are not considered credible by the vast majority of Mesoamerican researchers and scientists, who discard them as pop-culture pseudo-science.\n[…]\nList of Mesoamerican pyramids"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olmecas",
        "situacao": "ok",
        "texto": "Olmecas é a designação do povo e da civilização que estiveram na origem da antiga cultura pré-colombiana da Mesoamérica e que se desenvolveram nas regiões tropicais do centro-sul do atual México durante o pré-clássico, próximo de onde hoje estão localizados os estados mexicanos de Veracruz e Tabasco, no Istmo de Tehuantepec, numa zona designada área nuclear olmeca.\n[…]\nEstes compartilhavam os mesmos cultivos alimentares básicos e tecnologias da civilização olmeca posterior.\n[…]\nEste ambiente altamente produtivo encorajou uma população densamente concentrada, o que por sua vez desencadeou o surgimento de uma elite, que criou a demanda pela produção de artefatos de luxo simbólicos e sofisticados que definem a cultura olmeca. Muitos desses artefatos eram feitos de materiais como jade, obsidiana e magnetita, que vinham de locais distantes e sugerem que as primeiras elites olmecas tinham acesso a uma extensa rede de comércio na Mesoamérica.\n[…]\nCampbell e Kaufman propõem também que estes empréstimos linguísticos podem ser vistos como um indicador de que os olmecas, a primeira \"sociedade altamente civilizada\" da Mesoamérica, falavam uma língua que é um ancestral das línguas mixe-zoque, e de que terão disseminado um vocabulário específico da sua cultura entre os outros povos da Mesoamérica.\n[…]\nUma vez que as línguas mixe-zoque ainda são, e historicamente sabe-se que foram, faladas numa área correspondendo aproximadamente à área nuclear olmeca, e dado que a cultura olmeca é actual e geralmente vista como a primeira \"alta cultura\" da Mesoamérica, tem sido geralmente admitida como provável a ideia de os olmecas terem falado uma língua mixe-zoque.\n[…]\nA questão da cronologia olmeca chegou ao fim durante uma conferência havida em Tuxtla Gutiérrez em 1942, quando Alfonso Caso declarou que os olmecas eram a \"cultura mãe\" da Mesoamérica.\n[…]\nMesoamérica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Quipu",
      "descricao": "Sistema inca de cordões coloridos com nós usado para registrar números e informações."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os incas registravam números em cordões coloridos chamados quipus. O que a palavra quipu significa em quíchua?",
    "resposta": "Nó",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quipu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quipu",
        "situacao": "ok",
        "texto": "Quipu ( KEE-poo), also spelled khipu (Ayacucho Quechua: kipu, [ˈkipu]; Cusco Quechua: khipu, [kʰipu]), are record-keeping devices fashioned from knotted cords. They were historically used by various cultures in the central Andes of South America, most prominently by the Inca Empire.\n[…]\nA 2005 report in the journal Science, titled \"Khipu Accounting in Ancient Peru\", may represent the first identification of a quipu element for a non-numeric concept. The report details a sequence of three figure-eight knots at the start of a quipu that seems to be a unique signifier. It could be a toponym for the city of Puruchuco (near Lima), or the name of the quipu keeper who made it, or its subject matter, or even a time designator.\n[…]\nWhile evidence for the latter is still under the critical eye of scholars around the world, the very fact that they are kept to this day without any confirmed level of fluent literacy in the system is testament to its historical 'moral authority.' Today, \"khipu\" is regarded as a powerful symbol of heritage, only 'unfurled' and handled by 'pairs of [contemporary] dignitaries,' as the system and its 'construction embed' modern 'cultural knowledge.' Ceremonies in which they are 'curated, even though they can no longer be read,' is even further support for the case of societal honor and significance associated with the quipu.\n[…]\nThe Khipu Field Guide (quipu schematics and investigations from a large quipu database)\n[…]\nCode of the Quipu: Databooks (contains the descriptions and data for the more than 200 quipus studied Marcia Ascher and Robert Ascher)\n[…]\nThe Khipu Keepers: Explore the undeciphered writing of the Incas (2020 exhibition by the Google Arts & Culture in collaboration with the Lima Art Museum)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quipo",
        "situacao": "ok",
        "texto": "Quipo ou Quipu (em quíchua: khipu) era um instrumento utilizado para comunicação, mas também como registro contábil e como registros mnemotécnicos entre os incas. Alguns expertos têm proposto que também eram utilizado como sistema de escrita, hipótese sustentada entre outras por William Burns Glynn, Gary Urton e Manuel Medrano.\n[…]\nEram feitos da união de cordões que podem ser coloridos ou não, e poderia ter enfeites, como por exemplo ossos e penas, onde cada nó que se dava em cada cordão significava uma mensagem distinta. Cada cordão poderia ter um ou mais nós, ou nenhum nó, ou um nó na ponta, um na base, enfim, tudo era comunicado e transportado rapidamente ao imperador Inca no centro do império Cusco.\n[…]\nAs potências de dez mostram uma posição ao longo da cadeia de nós e essas posições se alinham formando os números.\n[…]\nOs dígitos nas posições das unidades são representados por nós grande (exemplo, cinco é indicado por um nó de 5 voltas) Devido à forma de atar os nós, o número “um” deve ser representado pelo nó em “oito”.\n[…]\nEstando as unidade estar representada de forma diferente (“nó oito”), fica claro onde um número termina.\n[…]\nCada “capítulo” (cada cordão suspenso) pode conter mais de um número.\n[…]\nO número 841 estaria representado por  8s, 4s, E\n[…]\nO número 503 estaria representado por 5s, X, 3L\n[…]\nO número 206 seguido pelo número 71 seria por 2s, X, 6L, 7s, E\n[…]\nDesconhecendo-se o contexto de Quipos individuais, é difícil decifrar o significado de tais códigos. Outros aspectos dos Quipos poderiam ser usados para comunicar outras informações: as Cores, a locação relativa das cordas, o espaço entre os conjuntos de nós, a estrutura das cordas, as cordas secundárias.\n[…]\n\"Aluno de Harvard ajudou a decifrar o misterioso código secreto dos Incas\"; ZAP - 31 Dezembro, 2017.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Caribes",
      "descricao": "Povo indígena das Pequenas Antilhas, também chamado kalinago, que deu nome ao mar do Caribe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra canibal veio do espanhol e deriva do nome de que povo indígena das Antilhas?",
    "resposta": "Caribes",
    "distratores": [
      "Taínos",
      "Aruaques",
      "Lucaios"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cannibalism",
      "https://en.wikipedia.org/wiki/Kalinago"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cannibalism",
        "situacao": "ok",
        "texto": "Cannibalism is the act of consuming another individual of the same species as food. Cannibalism is a common ecological interaction in the animal kingdom and has been recorded in more than 1,500 species. Human cannibalism is also well documented, both in ancient and in recent times."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kalinago",
        "situacao": "ok",
        "texto": "The Kalinago, also historically known by the exonyms Island Caribs or simply Caribs, are an Indigenous people of the Lesser Antilles in the Caribbean. They may have been related to the Kalina of South America (historically called \"Mainland Caribs\"), but they spoke an unrelated language known as Kalinago or Island Carib. They also spoke a pidgin language associated with the Kalina.\n[…]\nThe exonym Caribe was first recorded by Christopher Columbus. One hypothesis for the origin of Carib is that it means \"brave warrior\". Its variants, including the English word Carib, were then adopted by other European languages. Early Spanish explorers and administrators used the terms Arawak and Caribs to distinguish the peoples of the Caribbean, with Carib reserved for Indigenous groups that they considered hostile and Arawak for groups that they considered friendly.\n[…]\nAnother model proposes that the Kalinago developed out of the Indigenous peoples of the Antilles. While the Caribs were commonly believed to have migrated from the Orinoco River area in South America to settle in the Caribbean islands around 1200 CE, an analysis of ancient DNA suggests that the Caribs had a common origin with contemporary groups in the Antilles. In this model, the transition from Igneri to Island Carib culture is theorised to have occurred around 1450.\n[…]\nRecent evidence from the Windward Islands supports a model of integration rather than displacement. In 1649, the French in Grenada distinguished between two groups: Caraïbes and Galibis. Archaeological findings link the Caraïbes to the Indigenous Suazan Troumassoid pottery tradition (developed in situ from earlier Saladoid populations) and the Galibis to the Cayo pottery tradition (derived from the mainland Koriabo complex).\n[…]\nSylvanie Burton – The first woman and first Kalinago president of Dominica, inaugurated in 2023.\n[…]\nKalinago Genocide of 1626"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canibalismo",
        "situacao": "ok",
        "texto": "Canibalismo é um tipo de relação ecológica em que certas espécies de animais se alimentam de indivíduos da mesma espécie. Segundo alguns investigadores, essa prática teria resultado da evolução das espécies, com o objetivo de eliminar os indivíduos menos aptos, por exemplo, provenientes de uma ninhada em que alguns filhotes saem dos ovos defeituosos ou imaturos (ver seleção natural). Muitas espéci\n[…]\nO termo terá origem no idioma arawan, por via do espanhol Caribal de “Caribe”, língua falada por uma tribo indígena da América do Sul ou povos caraíbas antilhanos, de que os viajantes europeus reportaram costumes antropofágicos, e poss. com infl. de can ‘cão1’; fr. Canniba.\n[…]\nA doença da vaca louca também é um famoso caso de problemas decorrente do canibalismo, apesar de o ser de maneira indireta. Eram preparadas rações industriais aos bovídeos que, entre os ingredientes que a compõe, havia farelo de osso e carne bovina para aumentar os níveis nutricionais e reduzir os custos. Como medida para resolver o problema, o governo britânico proibiu o uso de rações baseadas em tecidos de ruminantes,  este problema gerou grandes prejuízos a pecuária bovina daquele país.\n[…]\nEntre aves, canídeos e felinos, especialmente se criados em cativeiro, patologias maternas de natureza hormonal e inibição da percepção materna ou da produção de estímulos tácteis e olfatórios vindos dos filhotes podem levar a este comportamento. Quando os recursos são limitados, as fêmeas podem reduzir o tamanho da ninhada através do canibalismo; no entanto, em condições “normais”, este fenômeno de canibalismo materno, comum em laboratórios, ainda não é compreendido.\n[…]\nOutro fator que influencia no canibalismo entre aves é a super concentração em cativeiros, com o aumento da temperatura nesses locais as aves começam a comer as pernas umas das outras, causando ferimentos e consequentemente levando ao óbito dessas aves.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto humano de cerca de onze mil anos encontrado na região de Lagoa Santa, em Minas Gerais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O crânio de Luzia, achado em Minas Gerais, ganhou esse nome em homenagem a que famoso fóssil de hominídeo africano?",
    "resposta": "Lucy",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Luzia_(fóssil)",
      "https://en.wikipedia.org/wiki/Luzia_Woman"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_(fóssil)",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nFormalmente, o esqueleto se chama \"Lapa Vermelha IV Hominídeo 1\". \"Luzia\" é um apelido dado pelo biólogo Walter Alves Neves, do Instituto de Biociências da Universidade de São Paulo. Ele se inspirou em Lucy, o célebre fóssil de Australopithecus afarensis de 3,5 milhões de anos achado na Etiópia no ano de 1974.[carece de fontes]?\n[…]\nA gruta era famosa pelos trabalhos do cientista Peter Lund (1801–1880), que lá descobrira, entre 1835 e 1845, milhares de fósseis de animais extintos da época do Pleistoceno e 31 crânios humanos em estado fóssil do que passou a ser conhecido como o Homem de Lagoa Santa. Seus hábitos alimentares incluíam folhas, frutas, raízes e algumas vezes, carne.\n[…]\nO trabalho foi feito em conjunto pela USP, pela Universidade Harvard e pelo Instituto Max Planck, da Alemanha. Os cientistas estudaram nove ossadas humanas da região de Lagoa Santa, em Minas Gerais. Dos mesmos sítios arqueológicos de Luzia, a ossada de uma mulher que teria vivido há mais de 11 mil anos e é considerada a primeira brasileira.\n[…]\nEntretanto, o resultado do estudo mostrou que Luzia vai precisar de um rosto novo. O atual, com nariz e lábios mais grossos, foi feito com base na ideia de que ela descendia de negritos do Oceano Índico, aborígenes australianos ou melanésios. Contudo, a análise do DNA mostrou que o código genético do povo de Lagoa Santa é semelhante ao de todos os povos indígenas da América e, neste caso, as feições seriam mongoloides.\n[…]\nLucy"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nThe nickname Luzia was chosen in homage to the Australopithecus fossil Lucy. The fossil was kept at the National Museum of Brazil, where it was shown to the public until it was fragmented during a fire that destroyed the museum on September 2, 2018. On October 19, 2018, it was announced that most of Luzia's remains were identified from the Museu Nacional debris, which allowed them to rebuild part of her skeleton.\n[…]\nAncient DNA studies published in 2018 told a different story. Genetic analysis showed that Luzia was genetically Amerindian and found no evidence of a close genetic relationship between the people of Lagoa Santa and populations from Africa or Australia. These findings did not support the earlier hypothesis of a separate Australo-Melanesian migration into the Americas.\n[…]\nA comparison in 2005 of Lagoa Santa specimens with modern Aimoré people of the same region also showed strong affinities, leading Neves to classify the Aimoré as Paleo-Indian.\n[…]\nAndré Strauss of the Max Planck Institute, one of the authors of the Journal Science article remarked \"However, skull shape isn't a reliable marker of ancestrality or geographic origin. Genetics is the best basis for this type of inference,\" Strauss explained. \"The genetic results of the new study show categorically that there was no significant connection between the Lagoa Santa people and groups from Africa or Australia.\n[…]\nPeñon woman\n[…]\nBuhl Woman\n[…]\nMedia related to Luzia (fossil) at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Eldorado",
      "descricao": "Lenda de uma terra riquíssima em ouro, nascida de um ritual dos muíscas, na atual Colômbia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de virar sinônimo de cidade de ouro, a expressão espanhola El Dorado designava o quê?",
    "resposta": "Um chefe muísca coberto de ouro",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Dorado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Dorado",
        "situacao": "ok",
        "texto": "El Dorado (Spanish: [el doˈɾaðo]) is a mythical city of gold supposedly located somewhere in South America. The legend originated in 16th-century Spanish accounts of a ruler known as El Dorado, or the Golden One, who was said to cover himself in gold dust before washing it off in a sacred lake. Over time, the name came to refer not only to the ruler, but also to a lost city or kingdom of immense w\n[…]\nLater attempts were made to drain Lake Guatavita in search of treasure, and objects associated with the El Dorado tradition, including the Muisca raft, are now held by the Museo del Oro in Bogotá.\n[…]\nAvellaneda similarly rejects El Dorado as a motive for Belalcázar's expedition to the New Kingdom, stating that the legend became known only after Belalcázar had left Muisca territory.\n[…]\nQuintero-Guzmán suggests that the Guatavita ceremony may have been a one-time event, which lived on in the oral history of the Muisca until the arrival of the Spaniards.\n[…]\nAn archaeological find known as the Muisca raft has often been cited as evidence for the historicality of the El Dorado legend. Discovered in 1969 in a cave in the region of Pasca, this golden artefact depicts a man of high status, probably a chief, seated on a raft and surrounded by attendants. Quintero-Guzmán calls the relationship between this object and the legend of the golden man \"almost undeniable\".\n[…]\nThe Muisca raft is now held by the Museo del Oro in Bogotá.\n[…]\nWhen Jiménez de Quesada departed for Spain, he left his brother Hernán in temporary command of the Muisca province, now known as New Granada. After hearing accounts of El Dorado, Hernán organized an expedition to the south, believing that his position in the heart of Colombia and his men's local knowledge would give him an advantage in the search. The expedition left Bogotá in September 1541."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eldorado",
        "situacao": "ok",
        "texto": "El dorado é uma antiga lenda indígena da época da colonização da América e atraiu muitos aventureiros europeus. A lenda falava de uma cidade que foi toda feita de ouro maciço e puro, além de ter muitos outros tesouros na cidade. A lenda surgiu depois que os conquistadores souberam da Cerimônia Dourada dos Índios que acontecia no planalto Cundiboyacense, na Colômbia, onde o chefe ou Zipa de uma tri\n[…]\nAlgumas das peças de ouro recuperadas encontram-se no Museu do Ouro de Bogota.\n[…]\nEm 1534, logo depois que os espanhóis completaram a conquista do Império Inca e refundaram a Kitu dos incas como San Francisco de Quito (no atual Equador), o rei de uma tribo foi lá solicitar ajuda dos espanhóis para a guerra de seu povo contra os Muiscas. Ele afirmou que na terra dos muíscas havia muito ouro e esmeraldas e descreveu a cerimônia do homem coberto de ouro que, durante séculos, despertaria a cobiça dos conquistadores.\n[…]\nEldorado (do castelhano El Dorado, \"O Dourado\"), Manoa (da língua achaua manoa, \"lago\"), ou Manoa del Dorado (Lago d’O Dourado) é uma lenda que se iniciou nos anos 1530 com a história de um cacique ou sacerdote dos muíscas, indígenas da Colômbia, que se cobria com pó de ouro e mergulhava em um lago dos Andes. Inicialmente um homem dourado, índio dourado, ou rei dourado, foi depois fantasiado como um lugar, o reino ou cidade desse chefe lendário, riquíssimo em ouro.\n[…]\nEmbora os artistas muíscas trabalhassem peças de ouro, algumas das quais hoje formam o rico acervo do Museu do Ouro ,em Bogotá, nunca foram encontradas entre eles grandes minas, muito menos as cidades douradas sonhadas pelos conquistadores que pretendiam repetir a façanha de Francisco Pizarro no Peru. Tudo indica que os muíscas ou chibchas obtinham o ouro por meio de trocas com indígenas de outras regiões ou extraindo ouro dos rios da região.\n[…]\nMuseo del Oro: Eldorado Raft [4]\n[…]\nEmerald Stone: Cultura Muisca [5]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Tenochtitlan",
      "descricao": "Capital dos astecas mexicas, erguida numa ilha do lago Texcoco, onde hoje fica a Cidade do México."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda, os mexicas fundaram Tenochtitlan onde viram uma águia devorando uma serpente, pousada sobre que planta?",
    "resposta": "Cacto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenochtitlan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlan, also known as Mexico-Tenochtitlan, was a large Mexican altepetl in what is now the historic center of Mexico City. The exact date of the founding of the city is unclear, but the date 13 March 1325 was chosen in 1925 to celebrate the 600th anniversary of the city. The city was built on an island in what was then Lake Texcoco in the Valley of Mexico.\n[…]\nTenochtitlan was one of two Mexica āltepētl (city-states or polities) on the island, the other being Tlatelolco.\n[…]\nA thriving culture developed, and the Mexica civilization came to dominate other tribes around Mexico. The small natural island was perpetually enlarged as Tenochtitlan grew to become the largest and most powerful city in Mesoamerica. Commercial routes were developed that brought goods from places as far as the Gulf of Mexico, the Pacific Ocean and perhaps even the Inca Empire.\n[…]\nConcern about the health of the indigenous population in early post-conquest Mexico–Tenochtitlan led to the founding of a royal hospital for indigenous residents.\n[…]\nAnthropologist Susan Kellogg has studied colonial-era inheritance patterns of Nahuas in Mexico City, using Nahuatl- and Spanish-language testaments. On the 13th of August 1521, after over two months of fighting, Spanish conquistador Hernán Cortés succeeded in bringing about the fall of Tenochtitlan, the capital of the Aztec empire, and consequently brought an end to the Aztec empire.\n[…]\nMexico City's Zócalo, the Plaza de la Constitución, is located at the site of Tenochtitlan's original central plaza and market, and many of the original calzadas still correspond to modern city streets. The Aztec calendar stone was located in the ruins. This stone is 4 meters (13 ft 1 in) in diameter and weighs over 18.1 metric tons (20 short tons; 17.9 long tons). It was once located half-way up the great pyramid.\n[…]\nPortrait of Tenochtitlan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "Tenochtitlán foi uma grande cidade-estado (āltepētl) mexica situada no que é hoje o centro histórico da capital mexicana. A data exata da fundação da cidade não é clara, mas o dia 13 de março de 1325 foi escolhido em 1925 para celebrar o 600º aniversário da Cidade do México.\n[…]\nTenochtitlán era um dos dois āltepētl mexicas situados na ilha, sendo o outro Tlatelolco. O Sítio do Patrimônio Mundial de Xochimilco contém o que resta da geografia (água, barcos, jardins flutuantes) da capital mexica.\n[…]\nTradicionalmente, o nome Tenochtitlan acreditava-se que viesse do náuatle tetl (\"pedra\") e nōchtli (\"figo-da-índia\") e é frequentemente interpretado como \"Entre os figos-da-índia que crescem entre rochas\". No entanto, uma menção em um manuscrito do final do século XVI, conhecido como \"os diálogos de Bancroft\", sugere que a segunda vogal era curta, de modo que a verdadeira etimologia permanece incerta. Entretanto, também se acredita que a cidade recebeu o nome do líder mexica Tenoch.\n[…]\nTenochtitlán foi a capital do povo mexica, fundada em 1325. A religião oficial da civilização mexica aguardava o cumprimento de uma antiga profecia: as tribos nômades encontrariam o local destinado a uma grande cidade, cuja localização seria sinalizada por uma águia com uma serpente no bico, empoleirada no topo de um cacto (Opuntia).\n[…]\nTenochtitlán pode ser considerada a sociedade mais complexa da Mesoamérica em termos de estratificação social. O complexo sistema envolvia muitas classes sociais. Os macehualtin eram plebeus que viviam fora da cidade insular de Tenochtitlán. Os pipiltin eram nobres, parentes de líderes e ex-líderes, que viviam nos arredores da ilha. Cuauhipiltin, ou nobres águia, eram plebeus que impressionavam os nobres com sua proeza marcial e eram tratados como nobres.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tenochtitlan",
      "descricao": "Capital dos astecas mexicas, erguida numa ilha do lago Texcoco, onde hoje fica a Cidade do México."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A capital asteca Tenochtitlan foi erguida numa ilha de que lago, hoje quase todo aterrado sob a Cidade do México?",
    "resposta": "Lago Texcoco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenochtitlan",
      "https://en.wikipedia.org/wiki/Lake_Texcoco"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlan, also known as Mexico-Tenochtitlan, was a large Mexican altepetl in what is now the historic center of Mexico City. The exact date of the founding of the city is unclear, but the date 13 March 1325 was chosen in 1925 to celebrate the 600th anniversary of the city. The city was built on an island in what was then Lake Texcoco in the Valley of Mexico.\n[…]\nTenochtitlan covered an estimated 8 to 13.5 km2 (3.1 to 5.2 sq mi), situated on the western side of the shallow Lake Texcoco.\n[…]\nLake Texcoco was the largest of five interconnected lakes. Since it formed in an endorheic basin, Lake Texcoco was brackish. During the reign of Moctezuma I, the \"levee of Nezahualcoyotl\" was constructed, reputedly designed by Nezahualcoyotl. Estimated to be 12 to 16 km (7.5 to 9.9 mi) in length, the levee was completed c. 1453. The levee kept fresh spring-fed water in the waters around Tenochtitlan and kept the brackish waters beyond the dike, to the east.\n[…]\nThe Mexica saw this vision on what was then a small swampy island in Lake Texcoco, a vision that is now immortalized in Mexico's coat of arms and on the Mexican flag. Not deterred by the unfavourable terrain, they set about building their city, using the chinampa system (misnamed as \"floating gardens\") for agriculture and to dry and expand the island.\n[…]\nAfter a flood of Lake Texcoco, the city was rebuilt during the rule of Ahuitzotl, which was between 1486 and 1502, in a style that made it one of the grandest ever in Mesoamerica.\n[…]\nThe ruins, constructed over seven periods, were built on top of each other. The resulting weight of the structures caused them to sink into the sediment of Lake Texcoco; the ruins now rest at an angle instead of horizontally.\n[…]\nCoe, Michael D. (2008). Mexico: From the Olmecs to the Aztecs. New York, New York: Thames & Hudson.\n[…]\nA Portrait of Tenochtitlan, 1518 by Thomas Kole"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Texcoco",
        "situacao": "ok",
        "texto": "Lake Texcoco (Spanish: Lago de Texcoco; Nahuatl languages: Tetzco(h)co) was a natural saline lake within the Anahuac or Valley of Mexico. Lake Texcoco is best known for an island situated on the western side of the lake where the Mexica built the city of Mēxihco Tenōchtitlan, which would later become the capital of the Aztec Empire. After the Spanish conquest, efforts to control flooding led to mo\n[…]\nIn the drier winter months the lake system tended to separate into individual bodies of water, a flow that was mitigated by the construction of dikes and causeways in the Late Postclassic period (1200–1521 CE) of Mesoamerican chronology. Lake Texcoco was the lowest-lying of all the lakes, and occupied the minimum elevation in the valley so that water ultimately drained towards it. The Valley of Mexico is a closed or endorheic basin.\n[…]\nBetween the Pleistocene epoch and the last glacial period, the lake occupied the entire Mexico Valley. Lake Texcoco reached its maximum extent 11,000 years ago with a size of about 2,189 square miles (5,670 km2) and over 500 feet (150 m) deep. When the lake's water level fell, it created several paleo-lakes that would connect with each other from time to time.\n[…]\nRemnants of the ancient shoreline that Lake Texcoco had from the last glacial period can be seen on some slopes of Mount Tlaloc as well as mountains west of Mexico City. The disarticulated remains of seven Columbian mammoths dated between 10,220 ± 75 and 12,615 ± 95 years (BP) were found, suggesting human presence. It is believed that the lake may have disappeared and subsequently re-formed at least 10 times in the last 30,000 years.\n[…]\nThe term \"Texcoco Lake\" now refers only to a big area surrounded by salt marshes 4 km (2.5 mi) east of Mexico City, which covers part of the ancient lake bed. There are also small remnants of the lakes of Xochimilco, Chalco, and Zumpango.\n[…]\nHistory of Mexico City"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "Tenochtitlán foi uma grande cidade-estado (āltepētl) mexica situada no que é hoje o centro histórico da capital mexicana. A data exata da fundação da cidade não é clara, mas o dia 13 de março de 1325 foi escolhido em 1925 para celebrar o 600º aniversário da Cidade do México.\n[…]\nFoi construída em uma ilha no que era então o Lago de Texcoco, no Vale do México. A cidade foi a capital do crescente Império Asteca no século XV até ser conquistada pelos tlaxcaltecas e pelos espanhóis em 1521.\n[…]\nOs mexicas tiveram essa visão no que era então uma pequena ilha pantanosa no Lago Texcoco, visão que agora está imortalizada no brasão de armas do México e na bandeira mexicana. Sem se deixarem abater pelo terreno desfavorável, eles começaram a construir sua cidade, utilizando o sistema de chinampa (erroneamente denominado \"jardins flutuantes\") para agricultura e para drenar e expandir a ilha. Uma cultura próspera se desenvolveu e a civilização mexica passou a dominar outras tribos da região.\n[…]\nA pequena ilha natural foi continuamente ampliada, enquanto Tenochtitlan tornou-se a maior e mais poderosa cidade da Mesoamérica. Rotas comerciais foram desenvolvidas, trazendo mercadorias de lugares tão distantes quanto o Golfo do México, o Oceano Pacífico e talvez até mesmo o Império Inca. Após uma inundação do Lago de Texcoco, a cidade foi reconstruída durante o reinado de Ahuitzotl, que ocorreu entre 1486 e 1502, em um estilo que a tornou uma das mais grandiosas da Mesoamérica.\n[…]\nTenochtitlan cobria uma área estimada entre 8 e 13,5 quilômetros quadrados, situada no lado oeste do raso Lago de Texcoco.\n[…]\nTríplice Aliança Asteca\n[…]\nCivilização asteca\n[…]\nMapa Topográfico de Tenochtitlán - Biblioteca Digital Mundial\n[…]\nTenochtitlán, a capital asteca - Guia do Estudante",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Queda de Tenochtitlan",
      "descricao": "Cerco e conquista da capital asteca pelos espanhóis de Hernán Cortés e seus aliados indígenas, em 1521."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1520, que doença trazida pelos europeus matou o imperador Cuitláhuac e enfraqueceu Tenochtitlan antes do cerco final?",
    "resposta": "Varíola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
      "https://en.wikipedia.org/wiki/Cuitláhuac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fall_of_Tenochtitlan",
        "situacao": "ok",
        "texto": "The fall of Tenochtitlan, the capital of the Mexica, was an important event in the Spanish conquest of the Mexica. It occurred in 1521 following extensive negotiations between local factions and Spanish conquistador Hernán Cortés. He was aided by La Malinche, his interpreter and companion, and by thousands of indigenous allies, especially Tlaxcaltec warriors.\n[…]\nAlthough numerous battles were fought between the Mexica and the Spanish-led coalition, which was composed mainly of Tlaxcaltec men, it was the siege of Tenochtitlan that directly led to the fall of the Aztec civilization and the ensuing sacking and violence against the survivors. The indigenous population at the time was devastated due to a smallpox epidemic, which killed much of its leadership.\n[…]\nCortés was willing to promise anything in the name of the King of Spain, and agreed to their demands. The Spanish did complain about having to pay for their food and water with their gold and other jewels with which they had escaped Tenochtitlan. The Spanish authorities would later disown this treaty with the Tlaxcalans after the fall of Tenochtitlan.\n[…]\nSmallpox played a crucial role in the Spanish success during the Siege of Tenochtitlan from 1519 to 1521, a fact not mentioned in some historical accounts. The disease broke out in Tenochtitlan in late October 1520. The epidemic lasted sixty days, ending by early December.\n[…]\nCuitlahuac contracted the disease and died after ruling for eighty days. The disease also affected the Spanish-aligned forces, killing the Tlaxcalan chieftain Maxixcatl, but it had more dire consequences on the side of the Aztecs, enclosed in the cramped Tenochtitlan.\n[…]\nAt some point in the final days of the battle, a tornado struck the basin, over Tlatelolco, and then moved out over the lake. This was the first tornado seen by Europeans in the Americas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cuitláhuac",
        "situacao": "ok",
        "texto": "Cuitláhuac (Spanish pronunciation: [kwiˈtlawak] , ) (c. 1476 – 1520)  (in Spanish orthography; Nahuatl languages: Cuitlāhuac, Nahuatl pronunciation: [kʷiˈt͡ɬaːwak], honorific form: Cuitlahuatzin) was the 10th Huey Tlatoani (emperor) of the Aztec city of Tenochtitlan for 80 days during the year Two Flint (1520). He is credited with leading the resistance to the Spanish and Tlaxcalteca conquest of t\n[…]\nCuitláhuac was the eleventh son of the ruler Axayacatl and a younger brother of Moctezuma II, the late Emperor of Tenochtitlan, who died during the Spanish occupation of the city. His mother's father, also called Cuitlahuac, had been ruler of Iztapalapa, and the younger Cuitláhuac also ruled there initially. Cuitláhuac was an experienced warrior and an adviser to Moctezuma, warning him not to allow the Spaniards to enter Tenochtitlan. Hernán Cortés imprisoned both Moctezuma and Cuitláhuac.\n[…]\nCortes had to leave the city in order to meet a Spanish force sent by Diego Velasquez, Spanish governor of Cuba. Following the massacre of Aztec elites when Cortés was away from Tenochtitlan, the Mexica besieged the Spanish and their indigenous allies. Cuitláhuac was released on the pretense to reopen the market to get food to the invaders.\n[…]\nMoctezuma was stoned to death after trying to tell his people to withdraw from the battle between the Aztecs and the Spanish, and Cuitláhuac was elected tlatoani following the flight of the Spaniards and their allies from Tenochtitlan on June 30, 1520. Some sources claim he was serving in that role even before Moctezuma's death.\n[…]\nThere is an Avenue in Mexico City Called Cuitláhuac (Eje 3 Norte) that runs from Avenue Insurgentes to Avenue Mexico-Tacuba and that is part of an inner ring; also many streets in other towns and villages in Mexico are so called.\n[…]\nList of Tenochtitlan rulers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cerco_de_Tenochtitl%C3%A1n",
        "situacao": "ok",
        "texto": "O Cerco de Tenochtitlán foi uma grande batalha travada na capital do Império Asteca, que aconteceu em 1521, entre as forças do conquistador espanhol Hernán Cortés, apoiados por combatentes da tribo local de Tlaxcala, e as tropas de guerreiros astecas.\n[…]\nDepois de incontáveis confrontos de pequena e larga escala entre os exércitos inimigos, a luta por Tenochtitlán foi a batalha final e a que acabou decidindo o resultado de toda a guerra, culminando na queda da civilização asteca e o início da colonização espanhola do México e depois da América Latina.\n[…]\nApesar de escaramuças e combates travados, a maioria das mortes entre os nativos indígenas vieram de doenças trazidas pelos espanhóis, como a varíola.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Guerra civil inca",
      "descricao": "Conflito entre os irmãos Huáscar e Atahualpa pelo trono inca, pouco antes da chegada de Pizarro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A guerra civil entre os irmãos Huáscar e Atahualpa, que enfraqueceu os incas diante de Pizarro, começou após a morte de quem?",
    "resposta": "Huayna Cápac",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_Civil_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Civil_War",
        "situacao": "ok",
        "texto": "The Inca Civil War, also known as the Inca Dynastic War, the Inca War of Succession, or, sometimes, the War of the Two Brothers, was fought between half-brothers Huáscar and Atahualpa, sons of Huayna Capac, over succession to the throne of the Inca Empire. The war followed Huayna Capac's death.\n[…]\nThe outbreak of a disease killed the most people in the first years of the Civil War. Although Huayna Capac, who was in Tumebamba, did not personally encounter any Spaniards, he possibly contracted malaria or smallpox and died around 1527.\n[…]\nHuáscar and Atahualpa, two sons of Huayna Capac born of different mothers, both vied for the position. Huascar, was, through his mother, a part of Capac Ayllu, the panaka of Topa Inca. His parents, Huayna Capac and Chincha Ocllo, were siblings. As in some other cultures, the Inca violated incest rules to keep religious and political authority limited among a small elite. Huascar was therefore supported by the nobility in Cuzco, by religious and political authorities and other main figures.\n[…]\nIf Atahualpa's mother was from a Cuzco panaka, then the succession conflict was most likely a conflict between panakas. French historian Henri Favre argues that the conflict was not just between opposing panakas but all the panakas of Cusco, depending on whether they were Hurin (low) or Hanan (high). Another possible cause for the war is that Inca generals in the north, Quizquiz and Rumiñawi, previously employed by Huayna Capac, may have encouraged Atahualpa to rebel against his brother.\n[…]\nAtahualpa's men searched for Huayna Capac's sons, but several are believed to have survived by hiding. Months later, on August 29, 1533, Pizarro's men executed Atahualpa by strangulation at the plaza of Cajamarca after accusing him of multiple crimes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_dos_Dois_Irm%C3%A3os",
        "situacao": "ok",
        "texto": "A chamada Guerra dos Dois Irmãos é o capítulo da história do Império Inca que precede o seu epílogo com a conquista espanhola por Francisco Pizarro. Tratou-se de uma guerra de sucessão travada entre os dois filhos do inca Huayna Capac, iniciada cerca de cinco anos após a sua morte.\n[…]\nHuáscar nomeou como novo comandante supremo das suas forças outro de seus irmãos, Huanca Auqui , que, junto com Ahuapanti, Urco Huaranga e Inca Roca, marcharam para o norte na frente de um grande exército que incluíam membros das tribos do norte inimigas de 'Atahualpa. Enquanto isso, Atahualpa ordenou a seus generais Challcuchimac e Quizquiz enfrentar as tropas de Huascar, enquanto Rumiñahui permaneceu em Quito.\n[…]\nNa perseguição aos huascaristas, Atahualpa atacou os punaeños, os tumpis, os chimus, os yungas, os paltas e os cañaris. A campanha de Atahualpa tornou-se uma verdadeira guerra de extermínio . Em Tumbes  todos os chefes de Huascar foram mortos e suas peles usadas para fazer tambores. Ele também passou por Húasimo, Solana e Ayabaca, acabando com a resistência local e destruindo tudo em seu caminho.\n[…]\nCom o avanço das tropas de Atahualpa, os huascaristas recuaram para o sul, em direção a Cusco, sofrendo sucessivas derrotas ao longo do caminho. De acordo com o cronista Santa Cruz Pachacuti, vitórias de Atahualpa foram devido a Huanca Auqui entrou em acordos secretos com Atahualpa ser \"derrotado\" facilmente.\n[…]\nApós ser aprisionado, Huascar foi levado para Cusco por Chalcuchimac e Quizquiz, onde foi forçado a testemunhar a morte de seus parentes, tanto diretos como indiretos. Sua mãe o repreendera pelo estado em que tinha deixado o Império por sua forma de governar. Na prisão foi insultado, alimentavam-no com dejetos humanos e zombavam dele o tempo todo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Fenômeno 2012",
      "descricao": "Conjunto de crenças de que o mundo acabaria ou mudaria radicalmente em 21 de dezembro de 2012."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A crença de que o mundo acabaria em dezembro de 2012 vinha do fim de um ciclo de qual calendário?",
    "resposta": "Calendário maia de Contagem Longa",
    "fonte": [
      "https://en.wikipedia.org/wiki/2012_phenomenon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2012_phenomenon",
        "situacao": "ok",
        "texto": "The 2012 phenomenon was a range of eschatological beliefs that cataclysmic or transformative events would occur on or around 21 December 2012. This date was regarded as the end-date of a 5,126-year-long cycle in the Mesoamerican Long Count calendar, and festivities took place on 21 December 2012 to commemorate the event in the countries that were part of the Maya civilization (Mexico, Belize, Guat\n[…]\nHe believed that the Maya aligned their calendar to correspond to this phenomenon. Anthony Aveni has dismissed all of these ideas.\n[…]\nHe believed that the events of any given time are resonantly related to the events of other times, and chose the atomic bombing of Hiroshima as the basis for calculating his end date of November 2012. When he later discovered this date's proximity to the end of the 13th bʼakʼtun of the Maya calendar, he revised his hypothesis so that the two dates matched.\n[…]\nIn May 2012, an Ipsos poll of 16,000 adults in 21 countries found that 8 percent had experienced fear or anxiety over the possibility of the world ending in December 2012, while an average of 10 percent agreed with the statement \"the Mayan calendar, which some say 'ends' in 2012, marks the end of the world\", with responses as high as 20 percent in China, 13 percent in Russia, Turkey, Japan and Korea, and 12 percent in the United States.\n[…]\nThe TV series The X-Files cited 22 December 2012 as the date for an alien colonization of the Earth, and mentioned the Mayan calendar \"stopping\" on this date. The History Channel aired a handful of special series on doomsday that included analysis of 2012 theories, such as Decoding the Past (2005–2007), 2012, End of Days (2006), Last Days on Earth (2006), Seven Signs of the Apocalypse (2009), and Nostradamus 2012 (2008).\n[…]\nMedia related to 2012 phenomenon at Wikimedia Commons\n[…]\nNASA video for 22 December 2012 on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fen%C3%B4meno_2012",
        "situacao": "ok",
        "texto": "O fenômeno 2012 compreende um conjunto de crenças escatológicas segundo as quais eventos cataclísmicos ou transformadores aconteceriam no dia 21 de dezembro de 2012. Esta data é considerada como o último dia de um ciclo 5.125 anos do calendário de contagem longa mesoamericano. Vários alinhamentos astronômicos e fórmulas matemáticas têm sido colocados como pertencentes a essa data, apesar de nenhum\n[…]\nEstudiosos de várias áreas têm rejeitado a ideia de eventos cataclísmicos em 2012. Profissionais especializados na cultura maia dizem que as previsões de morte iminente não são encontradas em nenhum dos clássicos dessa civilização e a ideia de que o calendário de contagem longa \"termina\" em 2012 deturpa a cultura e história maia.\n[…]\nNa teoria mais aceita, dezembro de 2012 marca o fim do atual ciclo b'ak'tun da contagem longa mesoamericana, a qual era usada na América Central antes da chegada dos europeus. Embora a contagem longa tenha sido provavelmente inventada pelos olmecas, tornou-se estritamente relacionada com a civilização maia, cujo período clássico durou entre 250 e 900 d. C. Os maias clássicos eram alfabetizados e seu sistema de escrita encontra-se substancialmente decifrado.\n[…]\nHoje, as correlações mais amplamente aceitas para o final do décimo terceiro b'ak'tun são no calendário ocidental os dias 21 e 23 de dezembro de 2012.\n[…]\nNão há nenhum evento astronômico significativo relacionado à data de início do calendário de contagem longa. Porém, segundo a literatura da Nova Era, a data final do calendário está ligada a fenômenos astronômicos de uma grande importância para a astrologia. O principal desses eventos é o conceito de \"alinhamento planetário\".\n[…]\n«Descoberta de 'novo' calendário maia desmente teoria do fim do mundo»\n[…]\n«Calendário maia não profetiza fim do mundo, diz antropólogo». - Revista Veja\n[…]\n«NASA confirma mais uma vez: mundo não acaba em 2012»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Linhas de Nazca",
      "descricao": "Grandes geoglifos de figuras e linhas traçados no deserto do sul do Peru pela cultura Nazca."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que as Linhas de Nazca, riscadas no deserto peruano há cerca de dois mil anos, continuam visíveis até hoje?",
    "resposta": "Clima seco, sem chuva nem vento",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nazca_Lines"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nazca_Lines",
        "situacao": "ok",
        "texto": "The Nazca lines (, ) are a group of geoglyphs made in the soil of the Nazca Desert in southern Peru. They were created between 500 BC and 500 AD by people making depressions or shallow incisions in the desert floor, removing pebbles and leaving different-colored dirt exposed. There are two major phases of the Nazca lines, Paracas phase, from 400 to 200 BC, and Nazca phase, from 200 BC to 500 AD.\n[…]\nSome of the Nazca lines form shapes that are best seen from the air (at around 500 m [1,600 ft]), although they are also visible from the surrounding foothills and other high places. The shapes are usually made from one continuous line. The largest ones are about 370 m (400 yd) long. Because of its isolation and the dry, windless, stable climate of the plateau, the lines have mostly been preserved naturally. Extremely rare changes in weather may temporarily alter the general designs.\n[…]\nMost of the lines are formed on the ground by a shallow trench, with a depth between 10 and 15 cm (4 and 6 in). Such trenches were made by removing the reddish-brown, iron oxide-coated pebbles that cover the surface of the Nazca Desert. When this gravel is removed, the light-colored clay earth exposed in the bottom of the trench contrasts sharply in color and tone with the surrounding land surface, producing visible lines. This sub-layer contains high amounts of lime.\n[…]\nThe following are images of some of the Nazca lines.\n[…]\nNickell, Joe (1983). Skeptical Inquirer The Nazca Lines Revisited: Creation of a Full-Sized Duplicate Archived 13 June 2016 at the Wayback Machine.\n[…]\nReinhard, Johan (1996) (6th ed.) The Nazca Lines: A New Perspective on their Origin and Meaning. Lima: Los Pinos. ISBN 84-89291-17-9\n[…]\nNazca Designs and Lines at Discover Peru at the Wayback Machine (archived 22 September 2023)\n[…]\nPritchard, Ashley Hamer (1 September 2026). \"Skeptoid #1056: The Mystery of the Nazca Lines\". Skeptoid."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linhas_de_Nasca",
        "situacao": "ok",
        "texto": "Linhas de Nasca ou Nazca são um grupo de grandes geoglifos feitos no solo do deserto de Sechura no sul do Peru. Eles foram criados pela cultura nasca entre os anos 500 a.C. e 500 d.C. por pessoas fazendo depressões ou incisões rasas no solo do deserto, removendo seixos e deixando pó de cores diferentes exposto.\n[…]\nAlgumas das linhas formam formas que são melhor vistas do ar (~ 500 m), embora eles também sejam visíveis dos contrafortes e outros lugares altos. As formas são geralmente feitas de uma linha contínua. As maiores têm cerca de 370 m de comprimento. Devido ao seu isolamento e ao clima seco, sem vento e estável do planalto, as linhas foram preservadas naturalmente. Mudanças extremamente raras no clima podem alterar temporariamente os projetos gerais.\n[…]\nEmbora as linhas fossem parcialmente visíveis das colinas próximas, os primeiros a relatá-las no século XX foram os pilotos civis e militares peruanos. Em 1927, o arqueólogo peruano Toribio Mejía Xesspe as avistou enquanto ele caminhava pelo sopé. Ele falou sobre elas em uma conferência em Lima em 1939.\n[…]\nOs nasca usaram essa técnica para \"desenhar\" várias centenas de figuras animais e humanas simples, mas enormes e curvilíneas. No total, o projeto de terraplenagem é enorme e complexo: a área que abrange as linhas é de cerca de 450 km², e as maiores figuras podem abranger quase 370 m.\n[…]\nNicola Masini e Giuseppe Orefici realizaram pesquisas na Pampa de Atarco, cerca de 10 km ao sul do Pampa de Nasca, que eles acreditam revelar uma relação espacial, funcional e religiosa entre esses geoglifos e os templos de Cahuachi.\n[…]\nMais ao norte da região de Nazca, Palpas e ao longo da costa peruana estão outros glifos da cultura chincha que também foram descobertos.\n[…]\n«mapa das Linhas de Nasca»\n[…]\n«Linhas de Nazca»\n[…]\nNazca Lines Research (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Terra preta de índio",
      "descricao": "Solo escuro e muito fértil encontrado em vários pontos da Amazônia, formado por ocupações indígenas antigas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a terra preta de índio, encontrada em vários pontos da Amazônia, é tão escura e fértil?",
    "resposta": "Carvão e restos deixados por humanos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Terra_preta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Terra_preta",
        "situacao": "ok",
        "texto": "Terra preta (Portuguese pronunciation: [ˈtɛʁɐ ˈpɾetɐ], literally \"black earth\" in Portuguese), also known as Amazonian dark earth or Indian black earth, is a type of very dark, fertile anthropogenic soil (anthrosol) found in the Amazon Basin. In Portuguese its full name is terra preta do índio or terra preta de índio (\"black soil of the Indian\", \"Indians' black earth\"). Terra mulata (\"mulatto eart\n[…]\nTerra preta owes its characteristic black color to its weathered charcoal content, and was made by adding a mixture of charcoal, bones, broken pottery, compost and manure to the low fertility Amazonian soil. A product of indigenous Amazonian soil management and slash-and-char agriculture, the charcoal is stable and remains in the soil for thousands of years, binding and retaining minerals and nutrients.\n[…]\nThis type of soil appeared between 450 BCE and 950 CE at sites throughout the Amazon Basin. Recent research has reported that terra preta may be of natural origin, suggesting that pre-Columbian people intentionally utilized and improved existing areas of soil fertility scattered among areas of lower fertility.\n[…]\nTree Lucerne (tagasaste or Cytisus proliferus) is one type of fertilizer tree used to make terra preta. Efforts to recreate these soils are underway by companies such as Embrapa and other organizations in Brazil. A growing number of startups offer to scale biochar production in the Global South via the sale of carbon credits.\n[…]\nSynthetic terra preta is produced at the Sachamama Center for Biocultural Regeneration in High Amazon, Peru. This area has many terra preta soil zones, demonstrating that this anthrosol was created not only in the Amazon basin, but also at higher elevations.\n[…]\n\"Terra Preta\". Hypography discussion forum. Archived from the original on 8 April 2008. Retrieved 8 May 2006.\n[…]\n\"Terra Preta Home Page\". Retrieved 20 April 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terra_preta",
        "situacao": "ok",
        "texto": "A terra preta, também chamada terra preta de índio (TPI) é um tipo de solo escuro, fértil e antropogênico de origem pré-colombiana (anterior a chegada Cristovão colombo e os europeus) encontrado na região Amazônica.\n[…]\nInicialmente, propunha-se que a terra preta se desenvolveu a partir de depósitos antigos de cinzas vulcânicas ou de material orgânico acumulado em antigos lagos ou lagoas, e teria sido sua alta fertilidade natural que primeiro atraiu e fixou os grupos humanos.\n[…]\nEmbora seu horizonte subterrâneo seja profundo como os demais solos naturais de Amazônia, o horizonte superior da Terra Preta possui traços de carvão e forma estratos com até 2 metros de profundidade, contrastando, dessa forma, com os outros horizontes encontrados na região, cuja profundidade geralmente não ultrapassa de 20 centímetros de espessura.\n[…]\nA Terra Preta de Índio se difere de outros solos amazônicos quanto à quantidade de matéria orgânica, acidez, cor das superfície, fertilidade, elementos presentes e a capacidade de troca de cátions (CTC), esta última sendo uma medida de quantos cátions estão retidos e ligados de forma reversível a substâncias no solo. A TPI apresenta camadas ricas em carbono pirogênico (biochar), artefatos cerâmicos e ossos.\n[…]\nDevido ao clima tropical úmido da região, há intemperismo intenso e lixiviação, o que leva outros solos amazônicos a serem usualmente pobres em nutrientes. Contudo, a Terra Preta de Índio apresenta não só maior fertilidade, como também maior resiliência ao uso intensivo na agricultura.\n[…]\nNesse sentido, para algumas comunidades locais, a TPI é uma solução para o problema, visto que pode ser encontrada em uma área mais elevada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Crânios de Paracas",
      "descricao": "Crânios alongados encontrados nos sítios da cultura Paracas, no litoral sul do Peru."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Muitos crânios achados em Paracas, no Peru, são muito alongados e alimentam teorias sobre alienígenas. Qual é a explicação real?",
    "resposta": "Deformação proposital na infância",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paracas_culture",
      "https://en.wikipedia.org/wiki/Artificial_cranial_deformation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paracas_culture",
        "situacao": "ok",
        "texto": "The Paracas culture was an Andean society existing between approximately 800 BCE and 100 BCE, located in what today is the Ica Region of Peru. The Paracas people had extensive knowledge of irrigation and water management and made significant contributions in the textile arts. Most of the information about the lives of the Paracas people comes from excavations at the large seaside Paracas site on t\n[…]\nThe textiles and jewelry in the tombs and mummy bundles attracted looters. Once discovered, the Paracas Necropolis was looted heavily between the years 1931 and 1933, during the Great Depression, particularly in the Wari Kayan section. The amount of stolen materials is not known; however, Paracas textiles began to appear on the international market in the following years. It is believed the majority of Paracas textiles outside of the Andes were smuggled out of Peru.\n[…]\nLike many ancient Andean societies, the Paracas culture participated in artificial cranial deformation. Of the excavated and accessible skulls from the Paracas Cavernas, the vast majority of skulls were visibly modified. The skulls were observed to be primarily of two shapes: Tabular Erect or Bilobate. Though Tabular Erect was the most common among both sexes, Bilobate skulls were observed at a much higher rate in female skulls.\n[…]\nCurrently, the best estimate of the frequency of trepanations in the Paracas culture is around 40%, though sampling bias in the initial selection of skulls, the large quantity of unopened mummy bundles, and the 39% mortality rate of Paracas trepanation make an estimate this high very unlikely.\n[…]\nParacas Art and Architecture: Object and Context in South Coastal Peru by Anne Paul, Publisher: University of Iowa Press, 1991 ISBN 0-87745-327-6\n[…]\nGallery of Paracas objects (archived link, text in Spanish)\n[…]\nImpacts on Tourism at Paracas (in Spanish)\n[…]\nParacas textile at the British Museum"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Artificial_cranial_deformation",
        "situacao": "ok",
        "texto": "Artificial cranial deformation or modification, head flattening, or head binding is a form of body alteration in which the skull of a human being is deformed intentionally. It is done by distorting the normal growth of a child's skull by applying pressure. Flat shapes, elongated ones (produced by binding between two pieces of wood), rounded ones (binding in cloth), and conical ones are among those\n[…]\nThe earliest known cases of artificial headshaping in Eurasia were brought to light in the sites such as Ganj Dareh, in western Iran, and are dated to the 8th millenium BCE. These altered skulls were the result of tight bandages applied around the person's head during infancy. It is debated whether the resulting deformation was the intended result, or a byproduct of child-rearing techniques.\n[…]\nIt has also been suggested that the practice of cranial deformation originated as an attempt to emulate groups in which an elongated head shape was a natural condition. The skulls of some ancient Egyptians are among those identified as often being naturally elongated, and macrocephaly may be a familial characteristic. For example, Rivero and Tschudi describe an Inca mummy containing a fetus with an elongated skull, describing it thus:\n[…]\nThere is no statistically significant difference in cranial capacity between artificially deformed skulls and normal skulls in Peruvian samples.\n[…]\nHowever, cranial modification can lead to strong cranial and facial asymmetry. The practice can also cause bleedings, infections and necrosis of the compressed areas. After infancy, the effects of cranial deformation are progressively lost, and the body partially compensates to the shape imposed during childhood through adaptive compensatory growth.\n[…]\nReconstruction of an Ostrogoth woman from a skull (intentionally deformed), discovered in Globasnitz (Carinthia, Austria) : [2], [3], [4], [5], [6]."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cultura_paracas",
        "situacao": "ok",
        "texto": "A cultura Paracas (700 a.C. - 200 d.C.) é uma cultura pré-incaica que surgiu na costa sul do Peru, em assentamentos como Cerro Colorado ou Arenas Blancas durante o Horizonte Inicial. Embora fossem populações de caçadores e pescadores, deram origem à Civilização de Nazca, famosa pelas linhas desenhadas que podem ser apreciadas do alto. Atingiu um importante desenvolvimento na arte têxtil.\n[…]\nAlém desses dois cemitérios, Tello identificou na Península Paracas um terceiro cemitério, que ele chamou de Arena Blanca ou Cabeza Larga, o último nome por causa da presença de crânios deformados, alongados. Lá, além de túmulos saqueados, encontrou vestigios de habitações subterrâneas.\n[…]\nA presença de armas junto com as mortalhas, bem como a presença maciça de crânios quebrados e trepanados, seria sinais de um tempo muito violento.\n[…]\nHá evidências de que os paracas realizavam operações cirúrgicas, especialmente a chamada trepanação craniana. Para esta prática os cirurgiões paracas  utilizavam brocas obsidiana, Tumis ou facas afiadas em forma de crescente (feitos de uma mistura de ouro e prata) , bisturis e pinças. Também usavam algodão, gaze e ataduras. O crânio era perfurado com as brocas de obsidiana e o osso danificado era raspados ou escavados com o Tumi, fazendo um movimento circular.\n[…]\nAs razões que levaram à realização dessa prática têm sido muito discutidas; Acredita-se que tenham sido feitas com a intenção de curar fracturas afundamento das paredes ósseas, para o alívio de cefaleias e o tratamento de doenças mentais por procedimentos mágicos (acreditavam que a abertura do crânio para as bebidas espirituosas causas do mal).\n[…]\nMuitos crânios com sinais de trepanação indicam que as pessoas sobreviveram a esta prática, por causa da presença de calo ósseo na área operada, eles só formada ao longo dos anos em uma pessoa viva.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Guerras floridas",
      "descricao": "Combates ritualizados entre a Tríplice Aliança asteca e cidades vizinhas, como Tlaxcala."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Qual era o principal objetivo das guerras floridas, combates combinados entre os astecas e cidades vizinhas?",
    "resposta": "Capturar prisioneiros para sacrifício",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flower_war"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flower_war",
        "situacao": "ok",
        "texto": "A flower war or flowery war (Nahuatl languages: xōchiyāōyōtl, Spanish: guerra florida) was a ritual war fought intermittently between the Aztec Triple Alliance and its enemies on and off for many years in the vicinity and the regions around the ancient and vital city of Tenochtitlan, probably ending with the arrival of the Spaniards in 1519. Enemies included the city-states of Tlaxcala, Huejotzing\n[…]\nof Mexico [Tenochtitlan] said that the gods were angry at the empire, and that to placate them it was necessary to sacrifice many men, and that this had to be done regularly.\" Thus, Tenochtitlan (the Aztec capital), Texcoco, Tlaxcala, Cholula, and Huejotzingo agreed to engage in flower war for the purpose of obtaining human sacrifices for the gods.\n[…]\nFlower wars were generally less lethal than typical wars, but a long-running flower war could become increasingly deadly over time. For example, in a long-running flower war between the Aztecs and the Chalcas, there were few battle deaths at the start. After time had passed, captured commoners started to be killed, but captured nobles were frequently released; sacrifice was not always the fate of captives.\n[…]\nHistorians have thought that flower wars were fought for purposes including combat training and capturing humans for religious sacrifice. Historians note evidence of the sacrifice motive: one of Cortez's captains, Andres de Tapia, once asked Moctezuma II why the stronger Aztec Empire had not yet conquered the nearby state of Tlaxcala outright.\n[…]\nHowever, some scholars have suggested that the flower war served purposes beyond gaining sacrifices and combat training. For example, Hassig states that for the Aztecs, \"flower wars were an efficient means of continuing a conflict that was too costly to conclude immediately.\" As such, a purpose of these wars was to occupy and wear down the enemy's fighting force."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Kukulcán",
      "descricao": "Divindade maia da serpente emplumada, cultuada especialmente em Chichén Itzá."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que deus asteca corresponde a Kukulcán, divindade maia que dá nome à grande pirâmide de Chichén Itzá?",
    "resposta": "Quetzalcóatl",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kukulkan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kukulkan",
        "situacao": "ok",
        "texto": "Kukulkan, also spelled K’uk’ulkan (; lit. 'Plumed Serpent', 'Amazing Serpent'), is the serpent deity of Maya mythology. It  is closely related to the deity Qʼuqʼumatz of the Kʼicheʼ people and to Quetzalcoatl of Aztec mythology. Prominent temples to Kukulkan are found at archaeological sites in the Yucatán Peninsula, such as Chichen Itza, Uxmal and Mayapan.\n[…]\nThe cult of Kukulkan/Quetzalcoatl was the first Mesoamerican religion to transcend the old Classic Period linguistic and ethnic divisions. This cult facilitated communication and peaceful trade among peoples of many different social and ethnic backgrounds. Although the cult was originally centred on the ancient city of Chichen Itza in the modern Mexican state of Yucatán, it spread as far as the Guatemalan Highlands and northern Belize.\n[…]\nKukulkan was a deity closely associated with the Itza state in the northern Yucatán Peninsula, where the religion formed the core of the Territorial religion. Although the worship of Kukulkan had its origins in earlier Maya traditions, the Itza worship of Kukulkan was heavily influenced by the Quetzalcoatl religion of central Mexico. This influence probably arrived via Putún Maya merchants from the Gulf Coast of Mexico.\n[…]\nAt Chichen Itza, Kukulkan ceased to be the Vision Serpent that served as a messenger between the king and the gods and came instead to symbolise the divinity of the territory.\n[…]\nAfter the fall of Chichen Itza, the nearby Postclassic city of Mayapan became the centre of the revived Kukulkan worshipers, with temples decorated with feathered serpent columns. At the time of the Spanish colonization, the high priest of Kukulkan was the family patriarch of the Xiu faction and was one of the two most powerful men in the city.\n[…]\nChichen Itza, a pre-Columbian Maya city\n[…]\nKukulcania,  a genus of crevice weaver spiders named in honor of this god."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kukulc%C3%A1n",
        "situacao": "ok",
        "texto": "Kukulkán era a versão maia do deus asteca Quetzalcóatl, a serpente emplumada.\n[…]\nPara alguns pesquisadores este deus provém da cultura Tolteca, ou ainda dos Olmecas.\n[…]\nQuanto a suas diferenças com relação a Quetzalcóatl, parece que muitas delas se deviam às diferenças climáticas entre ambas regiões. Para os Astecas, Quetzalcoatl não só era o Senhor do Sol, mas o próprio Deus-Sol do país. Kukulkán, além disso, tem também atributos de um Deus-Trovão.\n[…]\nNo clima tropical de Yucatán e da Guatemala, o Sol ao meio-dia parece desenhar as nuvens de seu ao redor com formas serpenteantes; destas emanam o trovão, a luz e a chuva, por isso Kukulkán pareceria haver atraído aos maias mais como um deus do céu que como um deus da própria atmosfera, apesar de que muitas vezes as esteiras do Yucatán representem a Kukulkán com o ar saindo de sua boca, como muitas representações mexicanas de Quetzalcoatl.\n[…]\nEvidentemente é um deus do cultivo e herói, já que é representado plantando milho, levando ferramentas e continuando uma viagem, feito com que estabelece sua conexão solar.\n[…]\nSegundo as crônicas maias, Kukulkán, da mesma forma que Quetzalcóatl, é o conquistador que chegou em Yucatán pelo mar desde o Oeste, para finais do século XV, e se transformou em caudilho e fundador de sua civilização. Da fusão dos dois mitos, Kukulkán aparece como o senhor do vento porque rege e governa a nave que lhe conduziu a Yucatán e ao povo que fundou.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Chaac",
      "descricao": "Deus maia da chuva e dos raios, ligado à agricultura."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Chaac, o deus maia da chuva, tinha como equivalente entre os astecas qual deus?",
    "resposta": "Tláloc",
    "distratores": [
      "Huitzilopochtli",
      "Tezcatlipoca",
      "Xipe Tótec"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chaac",
      "https://en.wikipedia.org/wiki/Tlaloc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chaac",
        "situacao": "ok",
        "texto": "Chaac (also spelled Chac or, in Classic Mayan, Chaahk [t͡ʃaːhk]) is the name of the Maya god of rain, thunder, and lightning. With his lightning axe, Chaac strikes the clouds, causing them to produce thunder and rain. Chaac corresponds to Tlaloc among the Aztecs and Cocijo among the Zapotecs.\n[…]\nIn 16th-century Yucatán, the directional Chaac of the east was called Chac Xib Chaac 'Red Man Chaac', only the colors being varied for the three other ones.\n[…]\nAccording to a Late-Postclassic Yucatec tradition, Chac Xib Chaac (the rain deity of the east) was the title of a king of Chichen Itza, and similar titles were bestowed upon Classic rulers as well (see below).\n[…]\nLater, Chaac commits adultery with his brother's wife and is duly punished; his tears of agony give origin to the rain. Versions of this myth show the rain deity Chac in his war-like fury, pursuing the fleeing Sun and Moon, and attacking them with his lightning bolts.\n[…]\nChaac is usually depicted with a human body showing reptilian or amphibian scales, and with a non-human head evincing fangs and a long, pendulous nose. In the Classic style, a shell serves as his ear ornament. He often carries a shield and a lightning axe, the axe being personified by a closely related deity, K'awiil, called Bolon Dzacab in Yucatec. The Classic Chaac sometimes shows features of the Central Mexican (Teotihuacan) precursor of Tlaloc.\n[…]\nActivist lawyers sought to have the statue removed, and some people in Mexico cited Tropical Storm Alberto and Hurricane Beryl as proof that Chaac was upset at Poseidon.\n[…]\nChac: Dios de la lluvia (1975), a film made with Maya actors."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tlaloc",
        "situacao": "ok",
        "texto": "Tláloc (Classical Nahuatl: Tláloc [ˈtɬaːlok]) is the god of rain in Aztec religion. He was also a deity of earthly fertility and water, and worshipped as a giver of life and sustenance; many rituals and sacrifices predicated upon these aspects were held in his name. He was feared—albeit not as a malicious figure—for his power over hail, thunder, lightning, and rain. He is also associated with cave\n[…]\nAlthough the name Tláloc is specifically Nahuatl, worship of a storm god, associated with mountaintop shrines and with life-giving rain, is as at least as old as Teotihuacan. It was likely adopted from the Maya god Chaac, perhaps ultimately derived from an earlier Olmec precursor. Tláloc was mainly worshiped at Teotihuacan, while his big rituals were held on Cerro Tláloc. An underground Tláloc shrine has been found at Teotihuacan which shows many offerings left for this deity.\n[…]\nThese archaeological findings could explain why the Maya tended to associate their version of Tláloc, Chaac, with the bloodiness of war and sacrifice, because they adopted it from the Aztecs, who used Maya captives for sacrifice to Tláloc.\n[…]\nThis has led to Meso-American goggle-eyed rain gods being referred to generically as \"Tláloc,\" although in some cases it is unknown what they were called in these cultures, and in other cases we know that he was called by a different name, e.g., the Maya version was known as Chaac and the Zapotec deity as Cocijo.\n[…]\nThe current damage that is present at the top of Cerro Tláloc is thought to be likely of human destruction, rather than natural forces. There also appears to have been a construction of a modern shrine that was built in the 1970s, which suggests that there was a recent/present attempt to conduct rituals on the mountain top.\n[…]\nChaac\n[…]\nCerro Tláloc\n[…]\nMedia related to Tlaloc at Wikimedia Commons\n[…]\nTláloc image at the Federation for the Advancement of Mesoamerican Studies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chaac",
        "situacao": "ok",
        "texto": "Chaac (do maia yucateco: Cháak, “chuva”) foi um importante deus maia, associado à água e, sobretudo, à chuva. Semelhante ao Tláloc nahua, ao Pitao Cocijo zapoteca e ao Dzahui mixteca.\n[…]\nÀs vezes, ele segura em sua mão o machado-raio; outras vezes, carrega uma tocha, símbolo da seca, já que dependia dele que chovesse ou não, ou então, derrama água de um vaso. Chaac também tem sido associado à guerra e ao deus GI de Palenque.\n[…]\nRepresentado com um longo chifre inclinado para cima, Chaac tinha grande importância entre o povo, que o invocava para obter boas colheitas. Segundo os relatos, o deus — que possivelmente foi introduzido por influências do centro do México (por exemplo, de Teotihuacan) e que devia sua importância à escassez de grandes cursos d’água na península de Yucatán — habitava em cavernas ou cenotes, ou seja, nas entradas para o submundo.\n[…]\nEle é retratado nos edifícios de Puuc, região que também se caracterizava pela escassez de água. Às vezes, ele é representado como quatro deuses separados de acordo com os pontos cardeais: Chac Xib Chaac (Chaac Vermelho do Leste), Sac Xib Chaac (Chaac Branco do Norte), Ek Xib Chaac (Chaac Preto do Oeste) e Kan Xib Chaac (Chaac Amarelo do Sul).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Tikal",
      "descricao": "Antiga cidade maia em ruínas na floresta do Petén, na Guatemala."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As ruínas maias de Tikal aparecem como a base rebelde da lua Yavin quatro em que filme de 1977?",
    "resposta": "Star Wars (Guerra nas Estrelas)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tikal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tikal",
        "situacao": "ok",
        "texto": "Tikal (; Tik'al in modern Mayan orthography) is the ruin of an ancient city, which was likely to have been called Yax Mutal, found in a rainforest in Guatemala. One of the largest archaeological sites and urban centers of the pre-Columbian Maya civilization, it is located in the archaeological region of the Petén Basin in what is now the Petén Department in northern Guatemala. The site is part of \n[…]\nFilmmaker George Lucas used Tikal as a filming location for the fictional moon Yavin 4 in the first Star Wars film, which premiered in 1977. Subsequent Star Wars movie Rogue One (2016) and season 2 of TV series Andor (2025) were also filmed at Tikal for the same fictional location.\n[…]\nIn fact, it has been suggested that the style of the building has closer affinities with El Tajín and Xochicalco than with Teotihuacan itself. The vertical tablero panels are set between sloping talud panels and are decorated with paired disc symbols. Large flower symbols are set into the sloping talud panels, related to the Venus and star symbols used at Teotihuacan.\n[…]\nStela 30 is the first surviving monument to be erected after the Hiatus. Its style and iconography is similar to that of Caracol, one of the more important of Tikal's enemies.\n[…]\nStela 43 is paired with Altar 35. It is a plain monument at the base of the stairway of Temple IV.\n[…]\nTikal National Park makes up part of the global Man and the Biosphere Programme, within the Maya Biosphere Reserve. Because of its lush and varied ecosystem, many species of plants and animals thrive within the park boundaries. Five species of cats reside within the park, including the jaguar and puma, along with several species of monkeys and anteaters. In addition, more than 300 species of birds are found in the park, including the crane hawk and the ocellated turkey.\n[…]\nTikal Digital Media Archive at CyArk\n[…]\nTikal Google Street View\n[…]\nMayans and Tikal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tikal",
        "situacao": "ok",
        "texto": "Tikal (/ tiˈkɑːl /) (Tik'al na ortografia maia moderna) é a ruína de uma cidade antiga, que provavelmente se chamava Yax Mutal, encontrada em uma floresta tropical na Guatemala. É um dos maiores sítios arqueológicos e centros urbanos da civilização maia pré-colombiana. Ele está localizado na região arqueológica da Bacia de Petén, onde hoje fica o norte da Guatemala.\n[…]\nEsta cidade antiga também tem os restos de palácios reais, além de várias pirâmides menores, palácios, residências, e várias estelas e monumentos de pedra. Em 2021, foi descoberto que o que por muito tempo se supôs ser uma área de colinas naturais a uma curta caminhada do centro de Tikal era na verdade um bairro de edifícios em ruínas que foram projetados para se parecerem com os de Teotihuacan.\n[…]\nTikal dominava as terras baixas dos maias, mas estava freqüentemente em guerra. Várias inscrições dão conta de muitas alianças e guerras com outros estados maias vizinhos, dentre os quais Uaxactun, El Caracol, Naranjo e Calakmul.\n[…]\nIx Yo K'in (\"Senhora Tikal\") 511-527\n[…]\nHasaw Chan K’awil (\"Dupla Lua \", \"Senhor Chocolate\") 682-734 - sepultado no grande templo-pirâmide I; a sua rainha Doze Araras (d. 704) foi sepultada no templo-pirâmide II. Triunfou na guerra com Calakmul em 711.* Yik’in Chan Kawil 734-766\n[…]\nComo é frequente, a memória de ruínas tão enormes quão antigas jamais se perdeu entre os habitantes da região. Algumas publicações começaram a aparecer após o século XVII que atraíram a atenção de John Lloyd Stephens no início do século XIX, cuja obra é tida como o início dos estudos da cultura maia.\n[…]\nAs ruínas de Tikal são consideradas Patrimônio da Humanidade e podem ser visitadas pelo público. O sítio foi usado como paisagem de fundo na cena da base dos rebeldes do filme Star Wars.\n[…]\nParque Nacional de Tikal\n[…]\nQuickTime VR Volta virtual de Tikal no site destination360.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Senhor de Sipán",
      "descricao": "Governante moche cuja tumba intacta, cheia de joias, foi descoberta em 1987 no norte do Peru."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A tumba intacta do Senhor de Sipán, achada no Peru em 1987, é muitas vezes comparada à de que faraó egípcio?",
    "resposta": "Tutancâmon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lord_of_Sipán",
      "https://pt.wikipedia.org/wiki/Senhor_de_Sipán"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lord_of_Sipán",
        "situacao": "ok",
        "texto": "The Lord of Sipán (El Señor de Sipán) is the name given to the first of several Moche mummies found at Huaca Rajada, Sipán, Peru by archaeologist Walter Alva. The site was discovered in 1987.\n[…]\nThe third tomb found at Huaca Rajada was slightly older than the first two, but ornaments and other items found in the tomb indicated that the person buried in the tomb was of the same high rank as the first Lord of Sipán burial. DNA analysis of the remains in this third tomb established that the individual buried in the third tomb was related to the Lord of Sipán via the maternal line. As a result, the archeologists named this third individual The Old Lord of Sipán.\n[…]\nThe third tomb also contained the remains of two other people: a young woman, a likely sacrifice to accompany the Old Lord of Sipán to the next life; and a man with amputated feet, possibly sacrificed to be the Old Lord's guardian in the afterlife.\n[…]\nA total of fourteen tombs have been found at Sipán.\n[…]\nThe Royal Tombs of Sipán Museum, located in nearby Lambayeque, contains most of the important artifacts found at Huaca Rajada, including the Lord of Sipán and his entourage. Dr. Alva helped found and support construction of the museum, which opened in 2002. The museum was designed to resemble the ancient Moche tombs. He has been appointed as director of the museum. In 2009 a smaller museum was opened at the site of Huaca Rajada.\n[…]\nPhotos, videos, and 3D animation of Lord Sipan tombs, Peru Cultural website (in Spanish)\n[…]\n\"Archaeology of Sipan and Huaca Rajada\", Inka Natura"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senhor_de_Sipán",
        "situacao": "ok",
        "texto": "Senhor de Sipán foi um dignitário mochica que governou entre os séculos II e III. Sua tumba foi descoberta em 1987, pelo arqueólogo Walter Alva, e é considerada o achado arqueológico mais importante dos últimos cinqüenta anos no Peru.\n[…]\nNa tumba também há oferendas e pessoas para acompanhar o Senhor em sua jornada pós-morte: um guerreiro com os pés cortados - símbolo de sua proteção eterna ao Senhor -, um sacerdote, três concubinas, um cachorro, duas lhamas, uma criança, centenas de cerâmicas e ornatos de cobre e ouro.\n[…]\nTodos os artefatos arqueológicos foram depositados no Museu Tumbas Reais de Sipán, inaugurado em 2002, a fim de conservar e restaurar os tesouros da região.\n[…]\n«Museo Tumbas Reales de Sipán»\n[…]\n«Peru Cultural - El Señor de Sipán»\n[…]\n«Cultura peruana - Senhor de Sipán»"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Tupinambás",
      "descricao": "Povo tupi que ocupava grande parte do litoral brasileiro na chegada dos portugueses."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O ritual em que os tupinambás devoravam inimigos capturados inspirou que manifesto modernista de Oswald de Andrade, de 1928?",
    "resposta": "Manifesto Antropófago",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manifesto_Antropófago"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manifesto_Antropófago",
        "situacao": "ok",
        "texto": "O movimento antropofágico foi uma manifestação artística brasileira da década de 1920, fundada e teorizada pelo poeta Oswald de Andrade e pela pintora Tarsila do Amaral, ambos do estado de São Paulo. Foi enunciado no Manifesto Antropófago e divulgado através da Revista de Antropofagia.\n[…]\nAntes do Manifesto Antropófago, o escritor modernista Plínio Salgado já havia utilizado a metáfora da antropofagia em suas críticas a Oswald de Andrade. Na \"Carta antropofágica\", de 1927, Salgado comparava Oswald aos viajantes europeus Hans Staden e Jean de Léry: “Esses homens falaram sobre coisas brasileiras sem sentimento brasileiro. [...] Continuaram sempre estrangeiros, com os olhos na terra deles. Por isso tinham muito medo de ser comidos.”.\n[…]\nO Manifesto Antropófago (ou Manifesto Antropofágico) foi um manifesto publicado em 1928 pelo poeta e polemista brasileiro Oswald de Andrade, figura-chave do movimento cultural do modernismo brasileiro e colaborador da publicação Revista de Antropofagia. Foi inspirado em \"Abaporu\", pintura de Tarsila do Amaral, artista modernista e esposa de Oswald de Andrade.\n[…]\nO manifesto fundamentou o movimento antropofágico. Lido em 1928 para seus amigos na casa de Mário de Andrade, foi publicado na Revista de Antropofagia, a qual Oswald ajudou a fundar com Raul Bopp e Antônio de Alcântara Machado, com a datação de \"ano 374 da deglutição do Bispo Sardinha\".\n[…]\nEm 1990, o artista plástico brasileiro Antonio Peticov criou um mural em homenagem ao que teria sido o centenário de Andrade. A obra O Momento Antropofágico com Oswald de Andrade foi instalada na estação Republica do Metrô de São Paulo e foi inspirada em três obras de Andrade: O Perfeito Cozinheiro das Almas deste Mundo, Manifesto Antropofágico e O Homem do Povo.\n[…]\nArtigo sobre Antropofagia"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Muiraquitã",
      "descricao": "Amuleto de pedra verde, em geral em forma de sapo, produzido por povos antigos da Amazônia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que herói de Mário de Andrade passa o romance tentando recuperar seu muiraquitã, amuleto amazônico de pedra verde?",
    "resposta": "Macunaíma",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Muiraquitã",
      "https://en.wikipedia.org/wiki/Macunaíma_(novel)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Muiraquitã",
        "situacao": "ok",
        "texto": "Muiraquitãs ou muyrakytãs (do tupi ybyrakytã) são artefatos talhados em pedra, chamada de amazonita, representando animais (especialmente sapos, mas também tartarugas ou serpentes). Teriam sido usados pelos povos indígenas Tapajós e Konduri, que habitavam o Baixo Amazonas até a chegada do colonizador europeu, como amuletos, símbolos de poder, e ainda como material para compra e troca de objetos va\n[…]\nTambém são conhecidas as grafias ybyrakytã (em tupi), mirakitã (em nheengatu), baraquitãs, buraquitãs, puúraquitan, uuraquitan e mueraquitan (provavelmente formas aportuguesadas). Outros termos também usados para o artefato são \"pedra-das-amazonas\" e \"pedra-verde\".[carece de fontes]?\n[…]\nApós dormirem com os Guacaris, homens de outra tribo especialmente convidados para a festividade, as índias mergulhavam no lago e traziam um barro esverdeado com o qual modelavam muiraquitãs, que eram oferecidos como amuletos aos Guacaris.\n[…]\nA trama de Macunaíma (1928), de Mário de Andrade, importante marco do modernismo brasileiro, gira em torno do resgate de um muiraquitã. Entre 1993 e 1994, circulou no Brasil a cédula de 500 mil cruzeiros com tema dedicado ao autor, a qual continha a figura do artefato.\n[…]\nAssociação Brasileira dos Organizadores de Festivais de Folclore e Artes Populares. Estatuetas,  [4]. Muiraquitã,  [5].\n[…]\nMeirelles, Anna Cristina Resque (2011). Muiraquitã e contas do Tapajós no imaginário indígena: uma análise químico - mineralógica dos artefatos dos povos pré - históricos da Amazônia (PDF) (Tese de de Doutorado em Geoquímica e Petrologia). Belém: Universidade Federal do Pará. 102 páginas. Consultado em 28 de julho de 2015\n[…]\nTorres, M. (2007). «A pedra muiraquitã: O caso do rio Uruará no enfrentamento dos povos da floresta às madeireiras na Amazônia» (PDF). Revista de Direito Agrário. 20 (21): 89-119. Consultado em 28 de julho de 2015"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Macunaíma_(novel)",
        "situacao": "ok",
        "texto": "Macunaíma (Portuguese pronunciation: [makũna'ĩmɐ]) is a 1928 novel by Brazilian writer Mário de Andrade. It is one of the founding texts of Brazilian modernism. Macunaíma was published six years after the \"Semana de Arte Moderna\", which marked the beginning of the Brazilian modernism movement.\n[…]\nThis novel follows an unconventional hero, Macunaíma, who was born in the Amazon Rainforest and is called \"the hero with no character\" in the novel's subtitle. He is of indigenous origin and possesses magical powers which help guide him on his journey from the Amazon to the city of São Paulo and back. He encounters various different creatures from Brazilian mythology along the way, taking him on a quest to retrieve his stolen amulet, a muiraquitã, who was given to him from his love interest, Ci.\n[…]\nMacunaíma gains the title of \"The King of the Virgin Forest\" (Rei da Mata), which grants him the status of nature spirit/deity.\n[…]\nAndrade wrote the character Macunaíma to represent the idea that Brazil had no national character. Macunaíma became a symbol of Brazil's national identity. In order to make Macunaíma this symbol, Andrade strategically created the character as a conglomeration of various cultures. Additionally, within the story there is references to a variety of myths and cultures. The tale was heavily based on the Taulipang myth, Makunaima, which gave the tale its mythical structure.\n[…]\nAndrade, Mário de. Macunaíma: The Hero Without Any Character. Translated by Carl L. Engel, King Tide Press, Philadelphia, Pennsylvania (2023)\n[…]\nSilva, Daniel F. (2018). \"Mário de Andrade's Antropofagia and Macunaíma as Anti-Imperial Scene of Writing\". In Anti-Empire: Decolonial Interventions in Lusophone Literatures (pp. 69–105). Liverpool University Press."
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Sol de Maio",
      "descricao": "Sol com rosto humano presente nas bandeiras da Argentina e do Uruguai."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O sol com rosto humano nas bandeiras da Argentina e do Uruguai representa que deus inca?",
    "resposta": "Inti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sun_of_May"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sun_of_May",
        "situacao": "ok",
        "texto": "The Sun of May (Sol de Mayo) is one of the national emblems of Argentina and Uruguay, appearing on both countries’ national flags and coats of arms. It takes its name from the May Revolution of 1810, which marked the beginning of the independence process in the Viceroyalty of the Río de la Plata. The sun is commonly interpreted as a symbol of the birth of a new nation, a meaning also reflected in \n[…]\nIt is frequently claimed that the Sun of May represents Inti, the Inca sun god. This interpretation, popularized mainly by the historian Diego Abad de Santillán in the 20th century, lacks contemporary documentary support from the revolutionary period. No primary sources from 1813–1818 explicitly identify the emblem with Inti.\n[…]\nIn the case of Uruguay, it was constituted as a country in 1828 at the end of the Cisplatine War, which confronted the United Provinces of the Río de la Plata and the Empire of Brazil for the control of the Banda Oriental, and chose national symbols linked to those of Argentine independence. Similar to the Argentine case, the sun used in Uruguay's coat of arms and flag underwent numerous variations until its current design was formalized in 1952.\n[…]\nThe Sun of May is also known as the \"Inca sun\" (Spanish: \"sol incaico\"), as the most widespread explanation states it represents Inti, the solar god of the Incas. The supposed Inca origin of the symbol is often related to the fact that the national coat of arms was made by Juan de Dios Rivera, a goldsmith of Inca descent originally from Cusco but based in Buenos Aires. For this reason, he is regarded by some as the creator of the Sun of May.\n[…]\nThe sun was one of the aspects of the Uruguayan flag that changed the most over time, since the original law of creation only mentions a \"white square in which the sun will be placed\", which resulted in there being no regulations in its design.\n[…]\nNational symbols of Argentina"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sol_de_Maio",
        "situacao": "ok",
        "texto": "O Sol de Maio (em castelhano: Sol de Mayo) é um dos símbolos nacionais dos países do Rio da Prata, Argentina e Uruguai, presente em suas bandeiras e brasões. Seu nome remete à Revolução de Maio de 1810, o evento que catalisou o processo de independência no Vice-Reino do Rio da Prata. É também conhecido como sol inca (em castelhano: sol incaico), já que a explicação mais difundida sobre seu signifi\n[…]\nO Sol de Maio também é conhecido como \"sol inca\" (em castelhano: sol incaico), pois, segundo a explicação mais difundida, ele representa Inti, o deus solar dos incas. A suposta origem inca do símbolo é frequentemente relacionada ao fato de que o brasão nacional foi criado por Juan de Dios Rivera, um ourives de ascendência inca originário de Cusco, mas radicado em Buenos Aires. Por essa razão, ele é considerado por alguns como o criador do Sol de Maio.\n[…]\nNo final daquele ano, o novo Estado adotou sua primeira bandeira oficial, composta por 9 listras brancas alternadas com 9 listras azuis claras (em referência aos nove departamentos que compunham o país na época) e o Sol de Maio no canto superior esquerdo, assumindo o simbolismo da independência argentina.\n[…]\nEsse \"sol radiante\" com múltiplos raios retos era característico da época, aparecendo em várias formas em bandeiras, bem como em moedas de 1840 a 1969, no primeiro selo postal uruguaio, na fachada do Teatro Solís e em inúmeros edifícios públicos e publicações oficiais. Algumas versões chegavam a retratar um sol figurativo com rosto e cabelos, como visto em moedas de 1844 e 1869.\n[…]\nA harmonização entre a bandeira e o brasão foi finalizada em 1952, quando um decreto especificou o desenho da bandeira, determinando um sol dourado com dezesseis raios — alternando entre retos e em forma de chama — inserido em um quadrado branco, formalizando o desenho moderno do Sol de Maio uruguaio.\n[…]\nApu Inti",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Coricancha",
      "descricao": "Principal templo inca, dedicado ao Sol, em Cusco, no Peru."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Sobre as paredes do Coricancha, o templo inca do Sol em Cusco, os espanhóis ergueram que construção?",
    "resposta": "Convento de Santo Domingo",
    "distratores": [
      "Catedral de Cusco",
      "Convento de São Francisco",
      "Igreja da Companhia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coricancha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coricancha",
        "situacao": "ok",
        "texto": "The Coricancha (Cusco Quechua: Quri Kancha, lit. 'golden temple', pronounced [ˈqɔɾi ˈkantʃa]) was the most important temple in the Inca Empire, and was described by early Spanish colonialists. It is located in Cusco, Peru, which was the capital of the empire.\n[…]\nMuch of its stonework was used as the foundation for the seventeenth-century Church and Convent of Santo Domingo. It was built after the 1650 earthquake destroyed the first Dominican convent.\n[…]\nThe Spanish colonists built the Church and Convent of Santo Domingo on the site, demolishing the temple and using its foundations for the cathedral. They also used parts of the temple for other churches and residences. Construction took most of a century. This is one of numerous sites where the Spanish incorporated Inca stonework into the structure of a colonial building.\n[…]\nToday, at the Convent of Santo Domingo, are four remaining rooms of the ancient temple with sloping walls, in which there can still be seen broken stone relics from the House of the Sun (Inti-huasi), consisting primarily of blocks of grey andesite stone, of diorite stone and of limestone rock that had been carved and formed into ceremonial niches, or used for walls and canals.\n[…]\nThe Coricancha is located at the confluence of two rivers, one of which being the Huatanay River which is now highly polluted. Here, according to Inca myth, is where Manco Cápac decided to build the Coricancha, the foundation of Cusco, and the eventual Inca Empire. According to Ed Krupp, \"The Inca built the Coricancha at the confluence because that place represented terrestrially the organizing pivot of heaven.\"\n[…]\nChurch and Convent of Santo Domingo, Cusco\n[…]\nInca Garcilaso de la Vega's Comentarios Reales de los Incas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coricancha",
        "situacao": "ok",
        "texto": "Coricancha, Qorikancha, Korikancha ou Qurikancha (em quéchua, Quri Kancha, \"recinto de ouro\" ou \"templo dourado\", originalmente Inti Kancha, \"templo do sol\"), em Cusco no Peru, é uma obra da arquitetura Inca e um dos mais importantes complexos arqueológicos sagrados daquele povo.\n[…]\nFeito de pedras polidas e encaixes harmoniosos, Coricancha foi construído pelo imperador inca Pachacuti (em espanhol Pachacútec), assim como muitas outras edificações de seu mandato, por motivo de um vitória acometida contra os chankas por volta de 1438.\n[…]\nDestaca-se no complexo o Templo de Qorikancha ou Templo do Sol. Era um local sagrado de rituais e oferendas ao deus Sol, cultuado pelos Incas, nele habitava o sumo sacerdote (Willaq Umu) e só tinham autorização de ingressar o Inca (imperador), os sacerdotes e as virgens do sol. Suas paredes eram cobertas por folhas (lâminas) de ouro sólido e o adjacente foi preenchido com estátuas douradas. O Templo do Sol era também um observatório onde altos sacerdotes monitoravam atividades celestes.\n[…]\nFoi destruído pelos conquistadores espanhóis, mais precisamente pelos religiosos dominicanos que sobre ele erigiram o Convento e a Igreja de Santo Domingo. A construção levou um século para ser finalizada e uma, das muitas, edificações que os espanhóis aproveitaram do alicerce de pedras incas para erguerem edifícios coloniais.\n[…]\nDe forma interessante, o grande terremoto de 1950, destruiu a construção dos padres dominicanos e expôs o Templo do Sol, que resistiu firmemente ao terremoto, graças às técnicas incas de construção.\n[…]\nEsta teria sido a segunda vez que aquela construção dos dominicanos fora destruída, sendo que a primeira vez fora em 1650 quando a construção espanhola era bem diferente.\n[…]\nImpério Inca\n[…]\nCusco",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Cahokia",
      "descricao": "Grande cidade da cultura do Mississippi, com enormes montes de terra, no atual estado de Illinois."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Cahokia, cidade indígena da cultura do Mississippi famosa por seus montes de terra, fica perto de que cidade americana atual?",
    "resposta": "Saint Louis",
    "distratores": [
      "Chicago",
      "Memphis",
      "Nova Orleans"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cahokia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cahokia",
        "situacao": "ok",
        "texto": "The Cahokia Mounds (also simply known as Cahokia)  (11 MS 2) is the site of a Native American city (which existed c. 1050–1350 AD) directly across the Mississippi River from present-day St. Louis. The state archaeology park lies in south-western Illinois between East St. Louis and Collinsville. The park covers 2,200 acres (890 ha), or about 3.5 square miles (9 km2), and contains about 80 manmade m\n[…]\nIn the years around 1050 CE, the city-proper's three urban precincts: St. Louis, East St. Louis, and Cahokia were constructed. At the same time, an ordered city grid—oriented to the north along the Grand Plaza, Rattlesnake Causeway, and dozens of mounds—was imposed on earlier Woodland settlements. This was accompanied by a homogenization of material culture (e.g. pottery and architectural styles) that divided the smaller settlements beforehand.\n[…]\nAs one of the most impactful cities in the history of the North American continent, Cahokia's reach has been extensive. Many Native American peoples and tribes recognize the site today as being important to their heritage. The Osage Nation is a primary collaborator with archaeologists and site management. One of the only remaining Mississippian mounds across the river in St. Louis, Sugarloaf Mound, was purchased by the nation to care for it in posterity.\n[…]\nUntil the 19th century, a series of similar mounds was documented as existing in what is now the city of St. Louis, some 8 mi (13 km) to the west of Cahokia. Most of these mounds were leveled during the development of St. Louis, and much of their material was reused in construction projects.\n[…]\nOne survivor of these mounds is Sugarloaf Mound. Located on the west bank of the Mississippi, it marked the initial border between St. Louis and the once autonomous city of Carondelet. The basal remnant of another likely related mound is located in O'Fallon Park in St. Louis.\n[…]\nCahokia Mounds Homepage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_Hist%C3%B3rico_Estadual_dos_Cahokia_Mounds",
        "situacao": "ok",
        "texto": "Cahokia é a área de uma antiga cidade indígena (c. 600 - 1400 dC) localizada na planície de baixio norte-americana, entre Saint Louis Leste e Collinsville no Sudoeste de Illinois, através do Rio Mississippi, de St. Louis, Missouri. O local com cerca de 8,9 km2 incluiu 120 montes de terra estendendo-se através de  uma área de 15,5 quilómetros quadrados, dos quais 80 montes ainda existem.\n[…]\nCahokia é o maior sítio arqueológico relacionado com a cultura Mississippiana, que desenvolveu sociedades avançadas na América do Norte, Central e Oriental, começando mais de cinco séculos antes da chegada dos europeus até os anos 1400. É um exemplo notável de uma estrutura sedentária pré-urbana, que permite o estudo de um tipo de organização social sobre o qual não existem informações escritas.\n[…]\nEsta cultura surgiu no vale do Mississippi por volta de 700 d.C. Em seu auge nos anos 1100, Cahokia era o centro da cultura do Mississipi e lar de dezenas de milhares de nativos americanos que cultivavam, pescavam, comercializavam e construíam montes rituais gigantes. Nos anos 1400, Cahokia havia sido abandonada devido as mudanças climáticas na forma de inundações e secas consecutivas, elas desempenharam um papel fundamental no êxodo dos habitantes do Mississipi de Cahokia.\n[…]\nA região de Cahokia era uma cidade fantasma na época do contato europeu, com base no registro arqueológico. Uma nova onda de nativos americanos repovoou a região nos anos 1500 e manteve uma presença constante por volta dos anos 1700, quando migrações, guerras, doenças e mudanças ambientais levaram a uma redução na população local.\n[…]\n«Tour Virtual por Cahokia Mounds» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Manto tupinambá",
      "descricao": "Manto cerimonial de penas vermelhas dos tupinambás, levado à Europa no período colonial e devolvido ao Brasil em 2024."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Antes de voltar ao Brasil em 2024, um manto tupinambá de penas vermelhas passou mais de três séculos num museu de que país?",
    "resposta": "Dinamarca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manto_tupinambá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manto_tupinambá",
        "situacao": "ok",
        "texto": "Um manto tupinambá ou açoiaba tupinambá é uma vestimenta sagrada para alguns povos indígenas brasileiros, utilizada em diferentes cerimônias e rituais e produzida com penas de aves. Em 2024, eram reportados 11 mantos confeccionados nos séculos XVI e XVII, feitos de penas vermelhas de ave guará e fibra vegetal. Dez deles se encontram em cinco países da Europa, sendo um na Bélgica, quatro na Dinamar\n[…]\nUm dos mantos que estava na Dinamarca foi devolvido ao Brasil em julho de 2024.\n[…]\nA exposição do manto tupinambá no museu da Dinamarca contribuiu para uma visão exótica das culturas indígenas, além de trazer para o centro das discussões atuais uma reivindicação da sua importância cultural, propondo um novo olhar sobre a história da arte no Brasil, que inclua e valorize as contribuições indígenas.\n[…]\nPor ocasião da Mostra do Redescobrimento, Brasil 500 Anos, realizada no Parque Ibirapuera, em São Paulo, no ano 2000, um dos mantos existentes na Europa foi trazido do museu de Copenhagen (Dinamarca) para ser exposto naquela oportunidade. Após anos de negociação, este manto retornou ao Brasil. Trata-se do exemplar mais bem conservado que se tem notícia, que estava localizado na Dinamarca desde pelo menos 1699 e compunha o acervo do Museu Nacional da Dinamarca.\n[…]\nWillerslev, por sua vez, se sensibilizou com as correspondências e levou a reivindicação aos membros do conselho do museu dinamarques, que recomendaram ao ministério da Cultura da Dinamarca que organizasse a devolução da relíquia.\n[…]\nEm 12 de setembro de 2024, um manto original sagrado do povo Tupinambá, com mais de 300 anos, foi apresentado no Museu Nacional, no Rio de Janeiro.\n[…]\nPAIVA, Alessandra Simões. REVIRAVOLTAS DECOLONIAIS DO MANTO TUPINAMBÁ: Três artistas mulheres e seus trabalhos em torno do artefato que se tornou ícone da identidade brasileira. VISTA – Revista de Cultura Visual, número 12, 2024."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Manto tupinambá",
      "descricao": "Manto cerimonial de penas vermelhas dos tupinambás, levado à Europa no período colonial e devolvido ao Brasil em 2024."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O manto tupinambá devolvido ao Brasil em 2024 é coberto de penas vermelhas de que ave do litoral brasileiro?",
    "resposta": "Guará",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manto_tupinambá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manto_tupinambá",
        "situacao": "ok",
        "texto": "Um manto tupinambá ou açoiaba tupinambá é uma vestimenta sagrada para alguns povos indígenas brasileiros, utilizada em diferentes cerimônias e rituais e produzida com penas de aves. Em 2024, eram reportados 11 mantos confeccionados nos séculos XVI e XVII, feitos de penas vermelhas de ave guará e fibra vegetal. Dez deles se encontram em cinco países da Europa, sendo um na Bélgica, quatro na Dinamar\n[…]\nUm dos mantos que estava na Dinamarca foi devolvido ao Brasil em julho de 2024.\n[…]\nApós a sua chegada ao Brasil, os europeus ficaram impressionados com a originalidade e exuberância da plumária indígena, especialmente dos povos Tupinambás. No caso dos mantos, destaca-se o uso de penas da ave Guará, de coloração vermelha, além de penas de papagaio.\n[…]\nPara celebrar o seu retorno ao Brasil, o manto tupinambá ou assojaba foi o enredo de 2025 da escola de samba paulista Acadêmicos do Tucuruvi. Foi um momento especial de celebração para um povo já em festa pelo retorno dessa relíquia apartada do solo brasileiro. Apesar de ainda não exposto ao público, o manto tupinambá já se encontra em território Fluminense, no Museu Nacional. Maiores detalhes sobre a peça devem ser divulgados em breve.\n[…]\nEm 12 de setembro de 2024, um manto original sagrado do povo Tupinambá, com mais de 300 anos, foi apresentado no Museu Nacional, no Rio de Janeiro.\n[…]\nTupinambá, Glicéria; Valente, Renata. “O recado do manto na obra de Célia Tupinambá: em busca de uma dialogia profunda”. In: Dias, Carla [et al]. Espaço, imagem e cultura: 2. São João de Meriti, RJ: Desalinho, 2024.\n[…]\nPAIVA, Alessandra Simões. REVIRAVOLTAS DECOLONIAIS DO MANTO TUPINAMBÁ: Três artistas mulheres e seus trabalhos em torno do artefato que se tornou ícone da identidade brasileira. VISTA – Revista de Cultura Visual, número 12, 2024."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Atahualpa",
      "descricao": "Último imperador inca independente, capturado e executado pelos espanhóis de Francisco Pizarro."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1532, numa emboscada, Francisco Pizarro capturou o imperador inca Atahualpa em que cidade andina?",
    "resposta": "Cajamarca",
    "distratores": [
      "Cusco",
      "Quito",
      "Tumbes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atahualpa",
      "https://en.wikipedia.org/wiki/Battle_of_Cajamarca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atawallpa ( ), also Atahualpa or Ataw Wallpa (Classical Quechua: Ataw Wallpa, pronounced [ˈataw ˈwaʎpa]) (c. 1502 – 29 August 1533), whose regnal name was Caccha Pachacuti Inca Yupanqui Inca (from the caccha idol and to honour the emperor Pachacuti), was the last effective Inca emperor, reigning from April 1532 until his capture and execution in July-August of the following year, as part of the Sp\n[…]\nAround the same time as Atawallpa's victory, a group of Spanish conquistadors, led by Francisco Pizarro, arrived in the region. In November 1532, they captured Atahualpa during an ambush at Cajamarca. In captivity, Atahualpa gave a ransom in exchange for a promise of release and arranged for the execution of Huáscar. After receiving the ransom, the Spanish accused Atahualpa of treason, conspiracy against the Spanish Crown, and the murder of Huáscar.\n[…]\nAtawallpa had remained behind in the Andean city of Cajamarca, where he encountered the Spanish, led by Pizarro.\n[…]\nAbout a year and a half later, in September 1532, after reinforcements had arrived from Spain, Pizarro founded the city of San Miguel de Piura and then marched towards the heart of the Inca Empire with a force of 106 foot-soldiers and 62 horsemen. Atawallpa, in Cajamarca with his army of 80,000 troops, heard that this party of strangers was advancing into the empire and sent an Inca noble to investigate.\n[…]\nThe noble stayed for two days in the Spanish camp, making an assessment of the Spaniards' weapons and horses. Atawallpa decided that the 168 Spaniards were not a threat to him and his 80,000 troops, so he sent word inviting them to visit Cajamarca and meet him, expecting to capture them. Pizarro and his men thus advanced unopposed through some very difficult terrain. They arrived at Cajamarca on 15 November 1532.\n[…]\nIn Quito, the most important football stadium is named Estadio Atahualpa after Atawallpa.\n[…]\nHistory of the Inca"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Battle_of_Cajamarca",
        "situacao": "ok",
        "texto": "The Battle of Cajamarca, also spelled Cajamalca (though many contemporary scholars prefer to call it the Cajamarca massacre), was the ambush and seizure of the Incan ruler Atahualpa by a small Spanish force led by Francisco Pizarro, on November 16, 1532. The Spanish killed thousands of Atahualpa's counselors, commanders, and unarmed attendants in the great plaza of Cajamarca, and caused his armed \n[…]\nThe confrontation at Cajamarca was the culmination of a months-long struggle involving espionage, subterfuge, and diplomacy between Pizarro and the Inca via their respective envoys. Atahualpa had received the invaders from a position of immense strength.\n[…]\nEncamped along the heights of Cajamarca with a large force of nearly 80,000 battle-tested troops fresh from their victories in the civil war against his half-brother Huáscar, the Inca felt they had little to fear from Pizarro's tiny army, however exotic its dress and weaponry. In an ostensible show of goodwill, Atahualpa had lured the adventurers deep into the heart of his mountain empire where any potential threat could be isolated and responded to with massive force.\n[…]\nThe town itself had been largely emptied of its two thousand inhabitants, upon the approach of the Spanish force of 180 men, guided by an Inca noble sent by Atahualpa as an envoy. Atahualpa himself was encamped outside Cajamarca, preparing for his march on Cuzco, where his commanders had just captured Huáscar and defeated his army.\n[…]\nPizarro gathered his officers on the evening of November 15 and outlined a scheme that recalled memories of Cortés' exploits in Mexico in its audacity: he would capture the emperor from within the midst of his own armies. Since this could not realistically be accomplished in an open field, Pizarro had invited the Inca to Cajamarca.\n[…]\nFrancisco Xerez wrote an account of the Battle of Cajamarca."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atahualpa ou Atahuallpa (quéchua Ataw Wallpa, 30 de março de 1502 – Cajamarca, 26 de julho de 1533) foi o décimo terceiro e último Sapa Inca (imperador inca) de Tahuantinsuyu, como era chamado o Império Inca. Foi o governante de Quito por cinco anos antes de conquistar o Império Inca de seu irmão Huáscar. Depois de derrotar seu irmão, Atahualpa tornou-se muito brevemente o último Sapa Inca (impera\n[…]\nQuando os sobreviventes do exército de Huáscar chegaram a Cajamarca procuraram se reorganizar. La receberam reforços liderados pelo general Tito Atauch, eram cerca de 10 mil homens a maioria chachapoyas. Já as forças de Atahualpa lideradas por Quizquiz ocuparam Huanacopampa e avançaram para enfrentar o inimigo, travando a batalha de Cochahuaila (entre Huancabamba e Huambo). A luta foi sangrenta e durou até o final do dia.\n[…]\nEnquanto isso generais de Atahualpa Quizquiz e Challcuchimac cruzaram o rio Cotabamba com suas forças.\n[…]\nVoltando para a cidade de Cusco, a capital do império, para tomar posse do trono que recentemente conquistara, Atahualpa parou na cidade andina de Cajamarca, conduzindo um exército de cerca de 80 mil guerreiros, quando foi aprisionado pelo conquistador espanhol Francisco Pizarro, no dia 16 de novembro de 1532.\n[…]\nO episódio ocorreu quando o soberano inca, depois de aceitar um convite de Pizarro para jantar e conversar, veio à praça principal de Cajamarca trazendo apenas um pequeno contingente de guardas de honra. Quando Atahualpa chegou, a praça aparentava estar vazia, pois os homens de Pizarro aguardavam ocultos.\n[…]\nEmbora aturdido com o resgate, Pizarro jamais teve intenção de libertar Atahualpa, que pretendia mantê-lo como refém para evitar uma escalada da violência, já que o general inca Rumiñawi ainda estava no comando de grande contingente de guerreiros incas.\n[…]\n«Mistério do túmulo do último imperador inca a um passo de ser desvendado». Yahoo! Notícias Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Penacho de Moctezuma",
      "descricao": "Cocar asteca de penas de quetzal tradicionalmente associado ao imperador Moctezuma II."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O chamado Penacho de Moctezuma, cocar asteca de penas de quetzal, está hoje num museu de que cidade europeia?",
    "resposta": "Viena",
    "distratores": [
      "Madri",
      "Paris",
      "Londres"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Penacho_de_Moctezuma",
      "https://en.wikipedia.org/wiki/Weltmuseum_Wien"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penacho_de_Moctezuma",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Weltmuseum_Wien",
        "situacao": "ok",
        "texto": "The Weltmuseum (translating to World Museum) in Vienna is the largest anthropological museum in Austria, established in 1876. It is housed in a wing of the Hofburg Imperial Palace and holds a collection of more than 400,000 ethnographical and archaeological objects from Asia, Africa, Oceania, and America.\n[…]\nImportant collections include Mexican artifacts, such as a unique Aztec feathered headdress, part of James Cook's collection of Polynesian and Northwest Coast art (purchased in 1806), numerous Benin Bronzes, the collection of Charles von Hügel from India, Southeast Asia, and China, collections from the Austrian Brazil Expedition, artifacts collected during the circumnavigation of the globe by the SMS Novara, and two of the remaining rongorongo tablets.\n[…]\nThe museum's most famous piece is a feathered headdress which tradition holds belonged to Moctezuma II, the Aztec emperor at the time of the Spanish Conquest. This has created friction between the Mexican and the Austrian governments. Originally taken as war booty by the Spanish in the 16th century, Austria acquired it from France in 1880.\n[…]\nXokonoschtletl Gómora — Mexican activist who struggled for the return of Montezuma's headdress housed at the museum."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Caral",
      "descricao": "Sítio arqueológico com pirâmides e praças no vale do Supe, no Peru, centro da civilização Norte Chico."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A cidade de Caral, no Peru, já tinha pirâmides por volta de 2600 antes de Cristo. Elas são da mesma época das pirâmides de que país?",
    "resposta": "Egito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Caral",
      "https://en.wikipedia.org/wiki/Norte_Chico_civilization"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Caral",
        "situacao": "ok",
        "texto": "The Sacred City of Caral-Supe, or simply Caral, is an archaeological site in Peru where the remains of the main city of the Caral civilization are found. It is located in the Supe District of Peru, near the current town of Caral, 182 kilometres (113 mi) north of Lima, 23 kilometres (14 mi) from the coast and 350 meters above sea level. It is attributed an antiquity of 5,000 years and it is conside\n[…]\nCaral was flanked by 19 other temple complexes scattered across the 90 square kilometres (35 sq mi) area of the Supe Valley.\n[…]\nPeriodization of pre-Columbian Peru\n[…]\nTourism in Peru\n[…]\nOrtloff, C. R.; Moseley, M. E. (2012). \"2600–1800 BCE Caral: Environmental change at a Late Archaic period site in north central coast Perú. Ñawpa Pacha\". Journal of Andean Archaeology. 32 (2): 189–206.\n[…]\nShady, R., (2003). Los Orígenes de la Civilización y la Formación del Estado en el Perú: Las Evidencias Arqueológicas de Caral-Supe. In: Shady, R., Leyva, C. (Eds.), La Ciudad Sagrada de Caral-Supe. Los Orígenes de la Civilización Andina y la Formación del Estado Prístino en el Antiguo Perú. Instituto Nacional de Cultura, Lima, Peru.\n[…]\nShady, R. (2007). The Social and Cultural Values of Caral-Supe, the Oldest Civilization in Peru and America and its Role in Integral and Sustainable Development (original in Spanish) (Proyecto Especial Arqueológico Caral-Supe/INC, Lima, Peru), No. 4, 1–69.\n[…]\nShady, R., and Lopez, S. (2000 [1999]). \"Ritual de enterramiento de un recinto en el sector residencial A en Caral Supe.\" In El perıodo arcaico en el Perú: Hacia una definición de los orígenes, ed. P. Kaulicke, 187–212. Lima: Pontifıcia Universidad Catolica del Peru.\n[…]\nUNESCO – Sacred City of Caral-Supe (World Heritage)\n[…]\nTranscript of BBC Horizon program about Caral; accessed 24 January 2017\n[…]\nGigapan Caral high resolution panorama of Caral\n[…]\nLa Zona Arqueológica Caral"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Norte_Chico_civilization",
        "situacao": "ok",
        "texto": "Caral–Supe (also known as Caral and Norte Chico) was a complex pre-Columbian era society that included as many as thirty major population centers in what is now the Caral region of north-central coastal Peru. The civilization flourished between the 4th and 2nd millennia BCE, with the formation of the first city generally dated to around 3500 BCE, at Huaricanga, in the Fortaleza area. From 3100 BCE\n[…]\nHe finds the first two present in ancient Caral–Supe.\n[…]\nThe oldest known depiction of the Staff God was found in 2003 on some broken gourd fragments in a burial site in the Pativilca River Valley and the gourd was carbon dated to 2250 BCE. While still fragmentary, such archaeological evidence corresponds to the patterns of later Andean civilization and may indicate that Caral–Supe served as a template. Along with the specific finds, Mann highlights:\n[…]\nThe magnitude of the Caral–Supe discovery has generated academic controversy among researchers. The \"monumental feud\", as described by Archaeology, has included \"public insults, a charge of plagiarism, ethics inquiries in both Peru and the United States, and complaints by Peruvian officials to the U.S. government\".\n[…]\nAt issue is credit for the discovery of the civilization, naming it, and developing the theoretical models to explain it. In 1997, Shady described a civilization located on the Supe River, with Caral at its center, although she suggested a larger geographic base for the society.\n[…]\nSupe Puerto\n[…]\nShady, Ruth; Kleihege, Cristopher, eds. (2008). Caral: la primera civilización de América = the first civilization in the Americas. Lima: Universidad de San Martín de Porres. ISBN 978-9972-33-792-5.\n[…]\nShady Solís, Ruth (2005). Caral Supe, Perú: the Caral–Supe civilization: 5,000 years of cultural identity in Peru. Lima: Instituto Nacional de Cultura. ISBN 9972-9738-4-0.\n[…]\nCaral–Supe at Google Maps\n[…]\nPress kit photos and video of Caral"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caral",
        "situacao": "ok",
        "texto": "A Cidade Sagrada de Caral-Supe, ou simplesmente Caral, é um sítio arqueológico no Peru onde se encontram os restos da principal cidade da Civilização de Caral. Está localizada no Distrito de Supe, no Peru, perto da atual cidade de Caral, a 182 quilômetros (113 mi) ao norte de Lima, a 23 quilômetros (14 mi) da costa e a 350 metros acima do nível do mar. Atribui-se a ela uma antiguidade de 5 000 ano\n[…]\nMax Uhle descobriu Caral em 1905 enquanto realizava um levantamento de antigas cidades e cemitérios peruanos. Ele não reconheceu, no entanto, que as colinas no sítio eram pirâmides e atribuiu pouca importância a elas.\n[…]\nRuth Shady explorou ainda mais essa cidade de 4 000 a 4 600 anos de idade no deserto peruano, com seu complexo elaborado de templos, um anfiteatro e casas comuns. O complexo urbano espalha-se por mais de 150 hectares (370 acres) e contém praças e edifícios residenciais. Caral era uma metrópole próspera por volta da mesma época em que as grandes pirâmides estavam sendo construídas no Egito, o que é considerado uma das civilizações mais antigas do mundo.\n[…]\nCaral tinha uma população de cerca de 3 000 pessoas. No entanto, outros 19 sítios na área (exibidos em Caral) permitem calcular uma população total possível de 20 000 pessoas compartilhando a mesma cultura no Vale de Supe. Todos esses sítios compartilham semelhanças com Caral, incluindo pequenas plataformas ou círculos de pedra. Shady acredita que Caral era o centro dessa civilização.\n[…]\nA cidade de Caral estava dividida em duas seções, uma \"Metade Superior\" e uma \"Metade Inferior\". Essas metades eram divididas naturalmente pelo Vale do Rio Supe. Na Metade Superior existem seis complexos monumentais, cada um dos quais inclui uma pirâmide, uma praça aberta e um conjunto de edifícios residenciais. Na Metade Inferior existem edifícios residenciais, pequenas pirâmides e um complexo monumental chamado \"Templo do Anfiteatro\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Inti Raymi",
      "descricao": "Grande festa religiosa inca em honra ao deus Sol, celebrada em Cusco."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que momento astronômico do ano os incas celebravam o Inti Raymi, a festa do Sol em Cusco?",
    "resposta": "Solstício de inverno, em junho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inti_Raymi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inti_Raymi",
        "situacao": "ok",
        "texto": "The Inti Raymi (Quechua for \"Inti festival\") is a traditional religious ceremony of the Inca Empire in honor of the god Inti (Quechua for \"sun\"), the most venerated deity in Inca religion. It was the celebration of the winter solstice – the shortest day of the year in terms of the time between sunrise and sunset – and the Inca New Year, when the hours of light would begin to lengthen again.\n[…]\nCelebrated on June 25, the Inti Raymi was the most important festival of the Inca Empire, as described by Inca Garcilaso de la Vega, and took place in the Haukaypata, the main square of Cusco.\n[…]\nIn 1944, a historical reconstruction of the Inti Raymi was directed by Faustino Espinoza Navarro and indigenous actors. The first reconstruction was based largely on the chronicles of Garcilaso de la Vega and referred only to the religious ceremony. Since 1944, an annual theatrical representation of the Inti Raymi has been taking place at Saksaywaman on June 24, two kilometers (1.24 miles) from the original site of celebration in central Cusco.\n[…]\nInti Raymi is still celebrated in indigenous cultures throughout the Andes. Celebrations involve music, wearing of colorful costumes (most notable the woven aya huma mask), and the sharing of food. In many parts of the Andes though, this celebration has also been connected to the western Catholic festivals of Saint John the Baptist (June 24), which falls a few days after the southern winter solstice (June 21).\n[…]\nThe Inti Raymi is traditionally performed in three historical and natural settings commonly used for staging, where over 800 artists don typical garments and engage in diverse presentations, including dances and performances. These events primarily take place at the temple of Qorikancha, the Archaeological Park of Sacsayhuaman, and the Plaza de Armas (Main Square) of Cusco.\n[…]\nThe celebration of the Sun\n[…]\nInti Raymi - Cultura Interactiva"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inti_Raymi",
        "situacao": "ok",
        "texto": "Inti Raymi (em quéchua, \"Festa do Sol\") é um festival religioso incaico em homenagem a Inti, o deus-sol. Marca o solstício de inverno do hemisfério sul nos Andes. O local de realização da cerimônia é a fortaleza de Sacsayhuamán (a dois km de Cuzco), no dia 24 de junho de cada ano.\n[…]\nDurante a época dos incas, o Inti Raymi era o mais importante dos 4 festivais celebrados em Cusco, segundo relata o Inca Garcilaso de la Vega, e indicava o início do ano assim como a origem mística do Inca. Durava 9 dias nos quais se realizavam danças e sacrifícios. O último Inti Raymi com a presença do Imperador Inca, foi realizado em 1535.\n[…]\nNa época dos incas, esta cerimônia se realizava na praça Aucaypata, hoje, Plaza de Armas de Cuzco, sendo assistida pela totalidade da população da cidade (talvez umas 100 mil pessoas). No dia do solstício de inverno no hemisfério sul, quando o Polo Sul da Terra se encontra com sua inclinação máxima em direção ao Sol, começava o ano novo incaico, evento associado ao próprio surgimento da etnia inca.\n[…]\nHoje, o Inti Raymi, como não poderia ser de outra forma, tem um aspecto distinto, de espetáculo dirigido tanto aos turistas quanto aos próprios cuzquenhos, para quem é um ponto de referência de sua consciência nativa. Por este último aspecto, desperta tanto entusiasmo e participação maciça.\n[…]\nCom quase sessenta anos de existência, o novo Inti Raymi é agora parte inseparável da vida de Cuzco. Não só é a principal cerimônia do mês na cidade, mas também sua fama transcendeu as fronteiras peruanas e também, dentro delas, tornou-se um exemplo para outros festivais de identidade nacional, como o Sóndor Raymi que é encenado em Andahuaylas.\n[…]\n(em inglês)-Fotos da Comunidade Inti Raymi no Slow Travel[ligação inativa]\n[…]\n(em inglês)-Galeria de Fotos do Inti Raymi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Múmias chinchorro",
      "descricao": "Múmias preparadas artificialmente pelo povo chinchorro, no litoral do deserto do Atacama, no Chile e no Peru."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os chinchorros, pescadores do deserto do Atacama, já mumificavam seus mortos cerca de dois mil anos antes de que civilização famosa pela mesma prática?",
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
    "indice": 40,
    "ancora": {
      "nome": "L'Anse aux Meadows",
      "descricao": "Sítio arqueológico na ilha de Terra Nova, no Canadá, com restos de um povoado nórdico de cerca do ano mil."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No Canadá, o sítio de L'Anse aux Meadows guarda um povoado de cerca do ano mil, cinco séculos antes de Colombo. Que povo europeu o construiu?",
    "resposta": "Vikings",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows",
        "situacao": "ok",
        "texto": "L'Anse aux Meadows is an archaeological site, first excavated in the 1960s, of a Norse settlement dating to approximately 1,000 years ago. The site is located near St. Anthony on the northernmost tip of the island of Newfoundland in the Canadian province of Newfoundland and Labrador.\n[…]\nThere is no way to know the site's population at any given time, though the dwellings could accommodate 30 to 160 people. The entire population of Greenland at the time was about 2,500, meaning that the L'Anse aux Meadows site harbored far fewer than 10 percent of the number living at the Norse settlements on Greenland. Julian D. Richards notes: \"It seems highly unlikely that the Norse had sufficient resources to construct a string of such settlements.\"\n[…]\nL'Anse aux Meadows is the only confirmed Norse site in North America outside Greenland, and represents the farthest known extent of European exploration and settlement of the New World before the voyages of Christopher Columbus almost 500 years later. Historians have speculated that there were other Norse sites in the Canadian Arctic, or at least trade contacts between Norse and Native Americans.\n[…]\nIn November 1968, the Government of Canada named the archaeological site a National Historic Site of Canada. The site was also named a World Heritage Site in 1978 by UNESCO. After L'Anse aux Meadows was named a national historic site, the area, and its related tourist programs, have been managed by Parks Canada. After the first excavation was completed, two more excavations of the site were ordered by Parks Canada.\n[…]\nLogan, F. Donald (2005). The Vikings in History (third ed.). New York: Routledge. ISBN 0-415-32755-5. ISBN 0-415-32756-3 (paperback).\n[…]\nL'Anse aux Meadows National Historic Site, Parks Canada"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%27Anse_aux_Meadows",
        "situacao": "ok",
        "texto": "L'Anse aux Meadows é um sítio arqueológico, escavado pela primeira vez na década de 1960, que preserva os vestígios de um assentamento nórdico datado de aproximadamente mil anos atrás. O local fica próximo à cidade de St. Anthony, na ponta mais ao norte da ilha de Terra Nova, na província canadense de Terra Nova e Labrador, no Canadá.\n[…]\nCom estimativas por datação por radiocarbono situadas entre os anos 990 e 1050 d.C. (com média em 1014) e datação por anéis de árvores indicando o ano de 1021 , L'Anse aux Meadows é o único sítio comprovado de contato transoceânico pré-colombiano entre europeus e as Américas fora da Groenlândia.\n[…]\nAntes da chegada dos nórdicos à Terra Nova, há evidências de que cinco grupos indígenas ocuparam o sítio de L'Anse aux Meadows, sendo a ocupação mais antiga datada de aproximadamente 6 mil anos atrás. Nenhum desses grupos foi contemporâneo da presença nórdica. A ocupação anterior mais significativa foi a do povo Dorset, que esteve no local cerca de 300 anos antes dos nórdicos.\n[…]\nNa época, toda a população da Groenlândia era de cerca de 2.500 habitantes, o que significa que L'Anse aux Meadows representava menos de 10% do total dos assentamentos nórdicos na Groenlândia. O pesquisador Julian D. Richards observa: “Parece altamente improvável que os nórdicos tivessem recursos suficientes para construir uma série de assentamentos desse tipo.”\n[…]\nL'Anse aux Meadows é o único sítio nórdico na América do Norte fora da Groenlândia, e representa a mais distante colônia européia conhecida no Novo Mundo antes das viagens de Cristóvão Colombo e John Cabot quase 500 anos depois, e a única evidência genuína de um contato Pré-colombiano entre o Novo e o Velho Mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Escrita maia",
      "descricao": "Sistema de escrita hieroglífica usado pelos maias, com sinais que representam palavras e sílabas."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Nos anos 1950, quem propôs a leitura fonética dos sinais que abriu caminho para decifrar a escrita maia?",
    "resposta": "Yuri Knorozov",
    "distratores": [
      "Eric Thompson",
      "Linda Schele",
      "Tatiana Proskouriakoff"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_script",
      "https://en.wikipedia.org/wiki/Yuri_Knorozov"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_script",
        "situacao": "ok",
        "texto": "Maya script, also known as Maya glyphs, is historically the native writing system of the Maya civilization of Mesoamerica and is the only Mesoamerican writing system that has been substantially deciphered. The earliest inscriptions found which are identifiably Maya date to the 3rd century BCE in late Preclassic sites like Chakjobon (Mexico) and San Bartolo (Guatemala). Maya writing was in continuo\n[…]\nAlthough some specifics of his decipherment claims were later shown to be incorrect, the central argument of his work, that Maya hieroglyphs were phonetic (or more specifically, syllabic), was later supported by the work of Yuri Knorozov (1922–1999), who played a major role in deciphering Maya writing. Napoleon Cordy also made some notable contributions in the 1930s and 1940s to the early study and decipherment of Maya script, also arguing for some share of phonetic signs in 1946.\n[…]\nIn 1952 Knorozov published the paper \"Ancient Writing of Central America\", arguing that the so-called \"de Landa alphabet\" contained in Bishop Diego de Landa's manuscript Relación de las Cosas de Yucatán was made of syllabic, rather than alphabetic symbols. He further improved his decipherment technique in his 1963 monograph \"The Writing of the Maya Indians\" and published translations of Maya manuscripts in his 1975 work \"Maya Hieroglyphic Manuscripts\".\n[…]\nAlthough it was then clear what was on many Maya inscriptions, they still could not literally be read. However, further progress was made during the 1960s and 1970s, using a multitude of approaches including pattern analysis, de Landa's \"alphabet\", Knorozov's breakthroughs, and others. In the story of Maya decipherment, the work of archaeologists, art historians, epigraphers, linguists, and anthropologists cannot be separated.\n[…]\nFAMSI resources on Maya Hieroglyphic writing\n[…]\nMaya Writing in: Guatemala, Cradle of the Maya Civilization"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yuri_Knorozov",
        "situacao": "ok",
        "texto": "Yuri Valentinovich Knorozov (Russian: Юрий Валентинович Кнорозов; 19 November 1922 – 30 March 1999) was a Soviet and Russian linguist, epigraphist, and ethnologist. He is best known for the key role he played in the decipherment of the Maya script, the writing system of the Maya civilization of pre-Columbian Mesoamerica.\n[…]\nAt this point the focus of his research had not yet been drawn on the Maya script. This would change in 1947, when at the instigation of his professor, Knorozov wrote his dissertation on the \"de Landa alphabet\", a record produced by the 16th century Spanish Bishop Diego de Landa in which he claimed to have transliterated the Spanish alphabet into corresponding Maya hieroglyphs.\n[…]\nCoe writes that \"Yuri Knorozov, a man who was far removed from the Western scientific establishment and who, prior to the late 1980s, never saw a Mayan ruin nor touch[ed] a real Mayan inscription, had nevertheless, against all odds, made possible the modern decipherment of Maya hieroglyphic writing.\"\n[…]\nYershova, G. G. (2019). Последний гений XX века: Юрий Кнорозов: судьба ученого [The Last Genius of the Twentieth Century: Yuri Knorozov: The Fate of a Scientist] (in Russian). Moscow: Russian State University for the Humanities. ISBN 978-5-7281-2517-4.\n[…]\nGrube, Nikolai; Matthew Robb (April–June 2000). \"Yuri Valentinovich Knorozov (1922–1999)\". Actualidades Arqueológicas (in Spanish). 22. México, D.F.: Instituto de Investigaciones Arqueologicas-UNAM. OCLC 34202277. Archived from the original (Spanish edition of English-language original, Alfredo Vargas González (trans.)) on 27 March 2008. Retrieved 22 October 2008.\n[…]\nFinding aid to the Yuri Valentinovich Knorozov papers, 1945–1998 Archived 8 October 2025 at the Wayback Machine at Dumbarton Oaks"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_maia",
        "situacao": "ok",
        "texto": "A escrita maia, também vulgarmente chamada de hieróglifos maias, era o sistema de escrita da civilização maia da Mesoamérica pré-colombiana e presentemente o único sistema de escrita mesoamericano já decifrado. As inscrições mais antigas identificadas como maias datam do século III a.C. e este sistema de escrita foi continuamente usado até pouco depois da chegada dos conquistadores espanhóis duran\n[…]\nEmbora os maias realmente não escrevessem alfabeticamente, ainda assim Landa registou um glossário de sons maias e símbolos relacionados, por muito tempo considerado um disparate mas que eventualmente se tornaria um recurso chave na decifragem da escrita maia, apesar de não ter sido ainda possível decifrá-lo na sua totalidade.\n[…]\nA decifragem da escrita maia foi um processo laborioso e longo. Os investigadores do século XIX e início do século XX conseguiram descodificar os numerais maias e porções de textos relacionados com a astronomia e o calendário maia, mas a compreensão do restante escapava aos estudiosos. Um dos principais contribuidores para a decifragem da escrita maia foi sem dúvida Iuri Knorozov.\n[…]\nEm 1952 Knorozov publicou um artigo intitulado \"Ancient Writing of Central America\" argumentando que o chamado alfabeto de Landa, contido no seu manuscrito \"Relación de las Cosas de Yucatán\" era realmente composto por símbolos silábicos e não símbolos alfabéticos. Em 1963 melhorou ainda mais a sua técnica de decifragem na sua monografia \"The Writing of the Maya Indians\" e em 1975 publicou traduções de manuscritos maias na obra \"Maya Hieroglyphic Manuscripts\".\n[…]\nNa década de 1960 os avanços na decifragem revelaram os registos dinásticos dos governantes maias. Começando no início da década de 1980 demonstrou-se que a maioria dos símbolos previamente desconhecidos formam um silabário, e desde então o progresso na leitura da escrita maia avançou rapidamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Numeração maia",
      "descricao": "Sistema de numeração posicional dos maias, escrito com pontos, barras e um sinal de concha para o zero."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A numeração maia, que já usava o zero, tinha como base qual número?",
    "resposta": "Vinte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_numerals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_numerals",
        "situacao": "ok",
        "texto": "The Mayan numeral system was the system to represent numbers and calendar dates in the Maya civilization. It was a vigesimal (base-20) positional numeral system. The numerals are made up of three symbols: zero (a shell), one (a dot) and five (a bar). For example, thirteen is written as three dots in a horizontal row above two horizontal bars; sometimes it is also written as three vertical dots to \n[…]\nThe \"Long Count\" portion of the Maya calendar uses a variation on the strictly vigesimal numerals to show a Long Count date. In the second position, only the digits up to 17 are used, and the place value of the third position is not 20×20 = 400, as would otherwise be expected, but 18×20 = 360 so that one dot over two zeros signifies 360. Presumably, this is because 360 is roughly the number of days in a year.\n[…]\nEvery known example of large numbers in the Maya system uses this 'modified vigesimal' system, with the third position representing multiples of 18×20. It is reasonable to assume, but not proven by any evidence, that the normal system in use was a pure base-20 system.\n[…]\nSeveral Mesoamerican cultures used similar numerals and base-twenty systems and the Mesoamerican Long Count calendar requiring the use of zero as a place-holder. The earliest long count date (on Stela 2 at Chiappa de Corzo, Chiapas) is from 36 BC.\n[…]\nSince the eight earliest Long Count dates appear outside the Maya homeland, it is assumed that the use of zero and the Long Count calendar predated the Maya, and was possibly the invention of the Olmec. Indeed, many of the earliest Long Count dates were found within the Olmec heartland. However, the Olmec civilization had come to an end by the 4th century BC, several centuries before the earliest known Long Count dates—which suggests that zero was not an Olmec discovery.\n[…]\nMaya numerals converter - online converter from decimal numeration to Maya numeral notation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Numera%C3%A7%C3%A3o_maia",
        "situacao": "ok",
        "texto": "O sistema de numeração maia adotado pela civilização pré-colombiana dos Maias é um sistema de numeração vigesimal, ou seja, tem base em vinte.\n[…]\nNúmeros superiores a dezenove são escritos na vertical seguindo potências de vinte em notação posicional. Por exemplo o número trinta e dois é escrito como um ponto seguido logo abaixo por dois pontos horizontais sobre duas barras, representando uma vintena e treze unidades.\n[…]\nOutro exemplo é o número 819 que pode ser decomposto em potências de vinte da seguinte forma:\n[…]\nO sistema de contagem vigesimal também influenciava calendário maia sendo o fechamento de um período de vinte anos um momento parecido com o fechamento de uma década para nós. Alguns calendários usavam um sistema modificado de contagem onde a terceira casa  vigesimal não denotava múltiplos de 20 × 20, mas sim de 18 × 20 pois assim era possível uma contagem aproximada da duração em dias do ano solar dado que 18 × 20 = 360.\n[…]\n(Os maias tinham, no entanto, uma estimativa bastante precisa de 365,2422 dias para o ano solar, pelo menos desde o início da era clássica.) As posições subsequentes usam todos os vinte dígitos e os valores de lugar continuam como 18×20×20 = 7 200 e 18×20×20×20 = 144 000, etc.\n[…]\nVárias culturas mesoamericanas usaram numerais semelhantes e sistemas de base vinte e o calendário mesoamericano de contagem longa exigindo o uso de zero como um espaço reservado. A data de contagem longa mais antiga (em Estela 2 em Chiapa de Corzo, Chiapas) é de 36 a.C.\n[…]\nConversor de numerais maias - conversor - on-line de numeração decimal para notação numérica maia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pirâmide de Kukulcán",
      "descricao": "Pirâmide escalonada no centro de Chichén Itzá, no México, também chamada El Castillo."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Somando as quatro escadarias e o degrau da plataforma do topo, quantos degraus tem a pirâmide de Kukulcán, em Chichén Itzá?",
    "resposta": "365",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
        "situacao": "ok",
        "texto": "El Castillo (Spanish pronunciation: [el kas'tiʎo], 'the Castle'), also known as the Temple of Kukulcan, is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.\n[…]\nAll four sides of the temple have approximately 91 steps which, when added together and including the temple platform on top as the final \"step\", may produce a total of 365 steps (the steps on the south side of the temple are eroded). That number is equal to the number of days of the Haabʼ year and likely is significantly related to rituals.\n[…]\nJadeite was valuable economically and socially, and the acquisition and application of the material is indicative of the access Chichén Itzá had along its trade routes.\n[…]\nIn agreement with this pattern, detected both in the Maya Lowlands  and elsewhere in Mesoamerica, the north (and main) face of the temple of Kukulcán at Chichén Itzá has an azimuth of 111.72°, corresponding to sunsets on May 20 and July 24, separated by 65 and 300 days (multiples of 13 and 20). Significantly, the same dates are recorded by a similar temple at Tulum.\n[…]\nA handclap made near the foot of El Castillo's staircase returns as a brief descending frequency sweep. The sound has been compared with the call of the resplendent quetzal.\n[…]\nAround 2006, the National Institute of Anthropology and History (INAH), which manages the archaeological site of Chichen Itza, started closing monuments to the public. While visitors may walk around them, they may no longer climb them or enter the chambers. This followed a climber falling to her death.\n[…]\nDetermining the dates when these constructions happened will provide time periods of when Chichen Itza may have been significantly occupied."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Kukulc%C3%A1n",
        "situacao": "ok",
        "texto": "O Templo de Kukulkán ou Pirâmide de Kukulkán, ou incluso \"El Castillo\" Foi construído pelos maias itzáes na antiga cidade de Chichén Itzá, no território pertencente ao estado mexicano do Yucatã. Sua construção foi iniciada no século VI, tendo sido posteriormente ampliado nos séculos VIII e XI.\n[…]\nSeu desenho tem uma forma geométrica piramidal, conta com nove níveis ou patamares, quatro fachadas principais cada uma com uma escadaria central e um patamar superior terminado por um templo. Nesta construção rendeu culto ao deus maia Kukulcán (\"Serpente Emplumada\" na língua maia). Conta também com motivos que simbolizam os números mais importantes utilizados no calendário Haab (calendário solar agrícola), o calendário Tzolkin (calendário sagrado) e a roda calendárica.\n[…]\nO templo de Kukulcán conta com quatro escadarias, cada uma delas tem 91 degraus, desta forma somam 364, que somadas ao patamar do topo, comum às quatro escadas, dá um total 365 unidades que representam os dias do Haab.\n[…]\nEm Chichén Itzá o fenômeno vê-se em todo o seu esplendor e a imagem da serpente de triângulos de luz e sombra é projetada ao balaustre NNE; com o passar do tempo, parece descer do templo uma serpente e o último reduto de luz projeta-se na cabeça da serpente emplumada que se encontra na base da escadaria.\n[…]\nEm muitas partes da decoração arquitetônica de colunas e dintéis de Chichén Itzá, encontram-se alusões ao corpo da serpente, no próprio \"Templo de Kukulcán\", no \"Templo dos Jaguares\", no \"Templo dos Guerreiros\", no \"Jogo de Bola\", na \"Plataforma das Águias e os Jaguares\".\n[…]\nAdicionalmente à projeção do corpo imaginário da serpente (kaan) descendo pelo balaustre da escadaria, os maias colocavam bandeiras de canetas (k'u uk'um) nas ameias do templo superior durante as festividades equinociais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pirâmide de Kukulcán",
      "descricao": "Pirâmide escalonada no centro de Chichén Itzá, no México, também chamada El Castillo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos equinócios, a luz do fim da tarde na escadaria da pirâmide de Kukulcán cria a ilusão de que animal descendo?",
    "resposta": "Serpente",
    "fonte": [
      "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/El_Castillo,_Chichen_Itza",
        "situacao": "ok",
        "texto": "El Castillo (Spanish pronunciation: [el kas'tiʎo], 'the Castle'), also known as the Temple of Kukulcan, is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.\n[…]\nBuilt by the pre-Columbian Maya civilization sometime between the 8th and 12th centuries CE, the building served as a temple to the deity Kukulcán, the Yucatec Maya Feathered Serpent deity closely related to Quetzalcoatl, a deity known to the Aztecs and other central Mexican cultures of the Postclassic period. It has a substructure that likely was constructed several centuries earlier for the same purpose.\n[…]\nThe temple consists of a series of square terraces with stairways up each of the four sides to the temple on top. Sculptures of plumed serpents run down the sides of the northern balustrade. Around the spring and autumn equinoxes, the late afternoon sun strikes off the northwest corner of the temple and casts a series of triangular shadows against the northwest balustrade, creating the illusion of the feathered serpent \"crawling\" down the temple.\n[…]\nThe Temple of Kukulcán (El Templo) is located above a cavity filled with water, labeled a sinkhole or cenote. Recent archaeological investigations suggest that an earlier construction phase is located closer to the southeastern cenote, rather than being centered. This specific proximity to the cenote suggests that the Maya may have been aware of the cenote’s existence and purposefully constructed it there to facilitate their religious beliefs.\n[…]\nA handclap made near the foot of El Castillo's staircase returns as a brief descending frequency sweep. The sound has been compared with the call of the resplendent quetzal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_de_Kukulc%C3%A1n",
        "situacao": "ok",
        "texto": "O Templo de Kukulkán ou Pirâmide de Kukulkán, ou incluso \"El Castillo\" Foi construído pelos maias itzáes na antiga cidade de Chichén Itzá, no território pertencente ao estado mexicano do Yucatã. Sua construção foi iniciada no século VI, tendo sido posteriormente ampliado nos séculos VIII e XI.\n[…]\nSeu desenho tem uma forma geométrica piramidal, conta com nove níveis ou patamares, quatro fachadas principais cada uma com uma escadaria central e um patamar superior terminado por um templo. Nesta construção rendeu culto ao deus maia Kukulcán (\"Serpente Emplumada\" na língua maia). Conta também com motivos que simbolizam os números mais importantes utilizados no calendário Haab (calendário solar agrícola), o calendário Tzolkin (calendário sagrado) e a roda calendárica.\n[…]\nAo entardecer dos equinócios da Primavera e do Outono, observa-se na escadaria NNE da pirâmide de Kukulcán uma projeção solar serpentina, consistente em sete triângulos isósceles de luz invertidos, como resultado da sombra que projetam as nove plataformas desse edifício durante o pôr do sol.\n[…]\nNo Popol Vuh a divindade é referida como Gucumatz  (em língua quiché: Q'uk'umatz; \"serpente emplumada\") quem com Tepew são considerados os deuses formadores do universo.\n[…]\nAdicionalmente à projeção do corpo imaginário da serpente (kaan) descendo pelo balaustre da escadaria, os maias colocavam bandeiras de canetas (k'u uk'um) nas ameias do templo superior durante as festividades equinociais.\n[…]\nDesta forma, a construção da pirâmide parece ser um calendário arquitetônico que marca os solstícios e equinócios, datas importantes para os ciclos agrícolas. Quando a órbita da Lua se encontra na mesma posição equinocial de sol, também é possível ver no balaustre da escadaria NNE a figura projetada da serpente num espetáculo natural noturno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Qhapaq Ñan",
      "descricao": "Rede de estradas do Império Inca que ligava Cusco a todo o território andino."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A rede de estradas incas conhecida como Qhapaq Ñan atravessa o território de quantos países atuais?",
    "resposta": "Seis",
    "distratores": [
      "Três",
      "Quatro",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_road_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_road_system",
        "situacao": "ok",
        "texto": "The Inca road system (also spelled Inka road system and in Quechua: Qhapaq Ñan meaning \"royal road\") was the most extensive and advanced transportation system in pre-Columbian South America. It was about 40,000 kilometres (25,000 mi) long in total. The construction of the roads required a large expenditure of time and effort.\n[…]\nThe Inca Road system connected the northern territories with the capital city Cusco and the southern territories.\n[…]\nThese roads provided easy, reliable and quick routes for the Empire's administrative and military communications, personnel movement, and logistical support. After conquering a territory or convincing the local lord to become an ally, the Inca would employ a military-political strategy including the extension of the road system into the new dominated territories.\n[…]\nThe Qhapaq Ñan thus became a permanent symbol of the ideological presence of the Inca dominion in the newly conquered place. The road system facilitated the movement of imperial troops and preparations for new conquests as well as the quelling of uprisings and rebellions. However it was also allowed for sharing with the newly incorporated populations the surplus goods that the Inca produced and stored annually for the purpose of redistribution.\n[…]\nGarcilaso de la Vega underlines the presence of infrastructure on the Inca road system where all across the Empire lodging posts for state officials and chasqui messengers were ubiquitous, well-spaced and well provisioned. Food, clothes, and weapons were also stored and kept ready for the Inca army marching through the territory.\n[…]\nInca society\n[…]\nHyslop, John, 1984. Inka Road System. Academic Press, New York.\n[…]\nTrailer: \"Qhapaq Ñan, Voices of the Andes\"\n[…]\nGeographic database of the Inca road system from a French university\n[…]\nUNESCO World Heritage Centre – Main Inca Road – Qhapaq Ñan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caminhos_incas",
        "situacao": "ok",
        "texto": "Caminhos Incas são o extenso sistema de caminhos construído durante o Império Inca. Todos os caminhos da América do Sul direcionavam a Cusco (em quíchua, \"Umbigo do Mundo\"), a principal metrópole sul-americana do período pré-colombiano, legado de uma antiga tradição cultural. Foi usado pelos conquistadores espanhóis para dirigir-se a Bolívia, Chile e as pampas cordilheiranas argentinas.\n[…]\nOs Caminhos Incas foram incluídos na lista de patrimônio Mundial da UNESCO graças a \"sua extensa rede de comunicação, de defesa e comércio com estradas cobrindo uma área de 30.000 km\"\n[…]\nOs caminhos incas passam por seis países da América do Sulː Colômbia, Equador, Peru, Bolívia, Chile e Argentina; com a maior parte localizada no Peru. Os caminhos são compostos por duas vias principais, paralelas a costa pacífica do continente. Uma via principal vai de Tumbes, no Peru, até Santiago, no Chile, passando por Pachacamac, um dos principais santuários do período inca, localizado em Lima. Atualmente, é o caminho menos preservado.\n[…]\nA cada 20/25 quilômetros, os incas construíram abrigos (chaskiwasi) e locais de armazenagem de alimentos e água (colcas), para abastecer e abrigar o exército inca. Esses postos de abastecimento foram instalados por toda a extensão das vias, mesmo em regiões de deserto ou selva. Alguns postos eram maiores e mais elaborados, chamados de tambos.\n[…]\nAlguns trechos, do caminhos inca, estão aberto para o turismo para a atividade de trekking. A mais conhecida é a trilha que leva até Machu Picchu. Esta trilha se inicia em Piscacucho, possui 42 quilômetros de percurso, é necessário pagar uma taxa para percorre-la e há limite diário de usuários. Ao longo do caminho há postos de controle onde deverá apresentar o passaporte. Este caminho passa pelos sítios arqueológicos de Llactapata, Runkurakay, Sayacmarca, Phuyupatamarca, Wiñaywayna e Intipunku.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Confederação Iroquesa",
      "descricao": "Aliança de nações indígenas do nordeste da América do Norte, também chamada Haudenosaunee."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Antes da entrada dos tuscaroras, no século dezoito, quantas nações formavam a Confederação Iroquesa?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iroquois"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iroquois",
        "situacao": "ok",
        "texto": "The Haudenosaunee Confederacy ( HOH-din-oh-SHOH-nee; lit. 'those who build the longhouse'), also known as the Iroquois ( IRR-ə-kwoy, -⁠kwah), is a confederacy of Iroquoian-speaking indigenous peoples in northeast North America. They were known by the French during the colonial years as the Iroquois League, and later as the Iroquois Confederacy. They have also been called the Six Nations (Five Nati\n[…]\nBy the 1700s, the Haudenosaunee increasingly aligned with the British under the Covenant Chain, backing the British during the French and Indian War and securing protection from westward colonial expansion through the Royal Proclamation of 1763. During the American Revolution, Haudenosaunee unity collapsed, with the Oneida and Tuscarora fighting alongside the Patriots and the other nations of the confederacy allying with the British.\n[…]\nIn about 1722, the Iroquoian-speaking Tuscarora joined the League, having migrated northwards from the Carolinas after a bloody conflict with European settlers. A shared cultural background with the Five Nations of the Haudenosaunee, as well as a sponsorship from the Oneida, led to acceptance of the Tuscarora as the sixth nation in the confederacy in 1722; the Haudenosaunee become known afterwards as the Six Nations.\n[…]\nBeginning in 1953, a Federal task force began meeting with the tribes of the Six Nations. Despite tribal objections, legislation was introduced into Congress for termination. The proposed legislation involved more than 11,000 Indians of the Haudenosaunee Confederation and was divided into two separate bills. One bill dealt with the Mohawk, Oneida, Onondaga, Cayuga and Tuscarora tribes, and the other dealt with the Seneca.\n[…]\n6 Tuscarora\n[…]\nSeveral communities exist of people descended from the tribes of the Haudenosaunee confederacy.\n[…]\nTuscarora Nation of New York\n[…]\nHaudenosaunee Confederacy, official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iroqueses",
        "situacao": "ok",
        "texto": "Os iroqueses (em inglês e francês: Iroquois, pronunciado irocuá) ou Haudenosaunee são um grupo nativo norte-americano que vive em torno da região dos Grandes Lagos, primariamente no sul de Ontário, uma província do Canadá, e no nordeste dos Estados Unidos.\n[…]\nOs iroqueses de antigamente eram primariamente nômades. Até o século XVII, formavam o que é atualmente chamado de nação iroquesa. Atualmente, esta nação indígena é composta pelos povos seneca, cayuga, onondaga, oneida, mohawk e tuscarora, formando uma confederação distribuída entre o Canadá e os Estados Unidos (principalmente no Estado de Nova Iorque e na província de Quebec).\n[…]\nNesse sentido, Lafitau enaltecia os iroqueses, ao dizer que as construções náuticas desses povos eram parecidas, mas também os denegria, afirmando que a brutalidade dos heróis de Homero não se distinguia da ferocidade dos iroqueses, ferocidade esta que ele considerava como sendo inata. Mesmo assim, a importância se deu pelo fato de que Lafitau deixou os nativos mais humanos, diferentemente de pensadores anteriores (como Mandeville) que assemelhavam os nativos a monstros.\n[…]\nA Economia dos iroqueses se focaliza na produção comunal e ao sistema combinado de horticultura e de caçador-recolector. As tribos da Confederação Iroquesa e outras do norte do continente americano que compartilhavam idioma (iroqués), como o povo hurón, viviam na região que hoje é o Estado de Nova York e a Região dos Grandes Lagos. A Confederação Iroquesa compunha-se de seis tribos dantes da colonização européia da América.\n[…]\nMesmo não sendo iroquês, o povo hurón entrava no mesmo grupo linguístico e compartilhava economia com os iroqueses.\n[…]\nConfederação Iroquesa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Popol Vuh",
      "descricao": "Livro que reúne os mitos de criação e a história dos maias quichés, da Guatemala."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No Popol Vuh, livro sagrado dos maias quichés, os deuses falham com barro e com madeira. De que material eles finalmente fazem os humanos?",
    "resposta": "Milho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Popol_Vuh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "Popol Vuh (also  Popul Vuh or Pop Vuj) is a text recounting the mythology and history of the Kʼicheʼ people of Guatemala, one of the Maya peoples who also inhabit the Mexican states of Chiapas, Campeche, Yucatan and Quintana Roo, as well as areas of Belize, Honduras and El Salvador.\n[…]\nQuotes from the Popol Vuh are used in \"Live Gloriously\", the main theme for the video game Civilization VII.\n[…]\nFollowing the Twin Hero narrative, mankind is fashioned from white and yellow corn, demonstrating the crop's transcendent importance in Maya culture. To the Maya of the Classic period, Hun Hunahpu may have represented the maize god. Although in the Popol Vuh his severed head is unequivocally stated to have become a calabash, some scholars believe the calabash to be interchangeable with a cacao pod or an ear of corn.\n[…]\n2018. The Popol Vuh: A New Verse Translation. Bazzett, Michael (trans.). Seedbank Books. 2018. ISBN 978-1-5713-1468-0.{{cite book}}:  CS1 maint: others (link)\n[…]\nPopol Wuj Archives, sponsored by the Department of Spanish and Portuguese at The Ohio State University, Columbus, Ohio, and the Center for Latin American Studies at OSU.\n[…]\nA facsimile of the earliest preserved manuscript, in Quiché and Spanish, hosted at The Ohio State University Libraries. Learn more about this project by reading \"Decolonial Information Practices: Repatriating and Stewarding the Popol Vuh Online.\"\n[…]\nde los Monteros, Pamela Espinosa (2019-10-25). \"Decolonial Information Practices: Repatriating and Stewarding the Popol Vuh Online\". Preservation, Digital Technology & Culture. 48 (3–4): 107–119. doi:10.1515/pdtc-2019-0009. ISSN 2195-2965.\n[…]\nThe original Quiché text with line-by-line English translation Allen J. Christenson edition"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "O termo Popol Vuh, comumente traduzido do idioma quiché como \"livro da comunidade\", é um registro documental da cultura maia, produzido no século XVI, e que tem como tema a concepção de criação do mundo deste povo. Popol é interpretado como \"comunidade\" ou \"conselho\", e dá a ideia de algo que é de propriedade comum; e vuh ou wuj, em quiché moderno, significa \"livro\".\n[…]\nNo segundo momento da criação, os deuses consultaram os adivinhos Ixpiyacoc e Ixmucané, que lançaram a sorte com grãos de milho e orientaram que o novo homem fosse feito de madeira. Assim os deuses fizeram. Os homens de madeira se multiplicaram e dispersaram, porém, assim como o homem de lodo, não foram capazes de invocar seus criadores, sendo também destruídos num dilúvio de resina. Os sobreviventes tornaram-se macacos.\n[…]\nNa quarta e última idade abordada pelo Popol Vuh, uma nova tentativa de criação ocorre - dessa vez utilizando milho como matéria prima. Os homens feitos de milho tomaram ciência de si e então deram graças aos seus deuses criadores. Essa é a explicação da origem da atual humanidade  e  da criação dos povos que habitavam a Mesoamérica.\n[…]\nCriação dos homens de milho, que se tornaram a atual humanidade.\n[…]\nPor fim, a criação dos homens de milho é entendida como consagração da centralidade agrícola na sociedade maia. O milho, considerado sagrado, constitui a essência da humanidade e garante a sobrevivência coletiva. Nesse ponto, a narrativa aproxima-se de outros mitos de origem mesoamericanos, reforçando a importância do ciclo agrícola e da reciprocidade entre humanos, natureza e divindades.\n[…]\nIxpiyacol e Ixmucané são interpretados como adivinhos e guias espirituais dos maias. Consultados para a segunda criação dos homens, sugerem que estes sejam feitos de madeira, após lançarem a sorte com grãos de milho.\n[…]\nThe Popol Vuh. Tradução ao inglês, acessado em 09 de junho de 2012.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Chocolate asteca",
      "descricao": "Bebida amarga de cacau consumida pelos astecas, chamada xocolatl, antecessora do chocolate moderno."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os astecas tomavam o chocolate amargo, espumante e sem açúcar, muitas vezes com um ingrediente ardido. Qual era?",
    "resposta": "Pimenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_chocolate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_chocolate",
        "situacao": "ok",
        "texto": "The history of chocolate dates back more than 5,000 years, when the cacao tree was first domesticated in present-day Ecuador. Soon after domestication, the tree was introduced to Mesoamerica, where cacao drinks gained significance as an elite beverage among cultures including the Maya and the Aztecs. Cacao was considered a gift from the gods and was used as currency, medicine, and in ceremonies.\n[…]\nAlthough chocolate was primarily served as a drink, it was sometimes eaten. It was served both hot and cold. A gruel made by adding maize was held to be lower-quality than drinks without. While the highest-quality chocolate was pure, additions were often made, requiring the removal and then replacement of the foam. The most popular addition throughout Mesoamerica was dried and ground chili, though ingredients such as honey, dried and ground vanilla or flowers, and annatto were added.\n[…]\nChocolate arrived in England from France around 1657, around the same time as tea and coffee, and encountered an initial backlash from those with medical concerns. Cocoa was supplied by Jamaican plantations, after the British conquered the Spanish territory in 1655. While chocolate had begun being flavored with new, highly perfumed ingredients such as jasmine and ambergris in Italy in the 17th century, in England chocolate was a commercial product and production was simpler and less careful.\n[…]\nBefore Lindt invented conching, chocolate had been gritty. He kept conching as a trade secret for more than 20 years. Able to integrate more smoothly with batters and doughs, conching allowed chocolate to become a more common ingredient in baking.\n[…]\nValrhona introduced single-origin, vintage-dated chocolate in 1998 from a Trinidadian plantation.\n[…]\nShort documentary on historical chocolate-making processes (with English subtitles) on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_chocolate",
        "situacao": "ok",
        "texto": "A história do chocolate remonta a mais de 5.000 anos, quando o cacaueiro foi domesticado pela primeira vez no atual Equador. Logo após a domesticação, a árvore foi introduzida na Mesoamérica, onde as bebidas à base de cacau ganharam importância como uma bebida da elite entre culturas como a civilização maia e a asteca. O cacau era considerado uma dádiva dos deuses e utilizado como moeda, medicamen\n[…]\nA pasta de cacau era aromatizada com aditivos como baunilha e earflower (esta última, quando torrada, apresentava sabor semelhante ao da pimenta-branca). Antes de ser servido, o chocolate era vertido de uma altura entre recipientes para produzir uma espuma marrom muito apreciada. Esse processo também emulsionava parte da manteiga de cacau que havia sido adicionada novamente.\n[…]\nO ingrediente adicional mais popular em toda a Mesoamérica era a pimenta-malagueta seca e moída, embora também fossem adicionados ingredientes como mel, baunilha seca e moída ou flores, e urucum. Atualmente, as bebidas de chocolate astecas são geralmente consideradas como contendo canela, apesar de essa especiaria só ter sido introduzida na Mesoamérica pelos espanhóis durante a conquista.\n[…]\nO chocolate foi um gosto adquirido pelos espanhóis que viviam nas Américas, sendo amplamente rejeitado até a década de 1590, e sua espuma era considerada especialmente desagradável. A população espanhola, predominantemente masculina, teve contato com o chocolate por meio das mulheres astecas com quem se casava ou que tomava como concubinas.\n[…]\nEm 2006, bebidas ainda eram preparadas a partir de sementes de cacau em toda a Mesoamérica, incluindo as bebidas bupu e tejate, de Oaxaca. Em muitas áreas rurais da América Central e do México, discos de chocolate adoçado eram vendidos em mercados locais em 2017. Durante a década de 2000, o consumo cresceu na África; na Nigéria, por exemplo, o mercado cresceu 775% entre 2006 e 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ilhas flutuantes dos uros",
      "descricao": "Ilhas artificiais construídas pelo povo uro no lago Titicaca, no Peru."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No lago Titicaca, o povo uro vive em ilhas flutuantes feitas de que planta aquática?",
    "resposta": "Totora",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uru_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uru_people",
        "situacao": "ok",
        "texto": "The Uru or Uros (Uru: Qhas Qut suñi) are an indigenous people of Bolivia and Peru. They live on a still-growing group of about 120 self-fashioned floating islands in Lake Titicaca near Puno. They form three main groups: the Uru-Chipaya, Uru-Murato, and Uru-Iruito. The Uru-Iruito still inhabit the Bolivian side of Lake Titicaca and the Desaguadero River.\n[…]\nThe Uru use bundles of dried Totora reeds to make reed boats (balsas), and to make the islands themselves.\n[…]\nThe islets are made of multiple natural layers harvested in Lake Titicaca. The base is made of large pallets of floating totora roots, which are tied together with ropes and covered in multiple layers of totora reeds. These dense roots that the plants develop and interweave form a natural layer called khili (about one to two meters thick), which are the main flotation and stability devices of the islands.\n[…]\nIf it is hot outside, they sometimes roll the white part of the reed in their hands and split it open, placing the reed on their forehead. In this form, it is very cool to the touch. The white part of the reed is also used to help ease alcohol-related hangovers. The totora reeds are a primary source of food. The Uru also make a reed flower tea.\n[…]\nLocal residents fish ispi, carachi and catfish. Trout was introduced to the lake from Canada in 1940, and kingfish was introduced from Argentina. Uru also hunt birds such as seagulls, ducks and flamingos, and graze their cattle on the islets. They also run crafts stalls aimed at the numerous tourists who visit ten of the islands each year. They barter totora reeds on the mainland in Puno to get products they need, such as quinoa and other foods.\n[…]\nThe Uros People at GlobalAmity.net\n[…]\nUros Indian Culture - Home"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uros",
        "situacao": "ok",
        "texto": "Os Uros ou Urus (Em uru: Qhas Qut suñi) são uma etnia que habita uma vasta região entre a Bolívia e o Peru.\n[…]\nNa Bolívia estão hoje cerca de 2600 indígenas que se estabeleceram nas bordas de rios e lagos. Do lado peruano são cerca de 2 mil Uros, que vivem principalmente no local denominado Ilhas Flutuantes dos Uros, sobre o Lago Titicaca ou às margens dele, próximo a cidade de Puno. Em princípio, os Uros falavam seu próprio idioma, o uruquilla, mas devido a terem assimilado a cultura dos Aimarás, pelos quais foram dominados por longo período, perderam sua língua própria.\n[…]\nA existência dos Uros naquela região já se verifica desde a era pré-colombiana, quando desenvolveram a habilidade de habitarem sobre as ilhas flutuantes, tendo em vista maior segurança. Desde tempos remotos, os Uros sobrevivem através da pesca, da caça de aves e da coleta de ovos de aves. Ultimamente têm se aplicado ao turismo, onde apresentam seu peculiar modo de vida e seu artesanato.\n[…]\nOs Uros possuem uma relação especial com o Lago Titicaca. De acordo com historiadores, para não serem escravizados, esses indígenas se embrenharam em meio a vegetação de totora no interior do Titicaca, escondendo-se em balsas. Posteriormente, tiveram a engenhosidade de construir plataformas artificiais, hoje comumente chamadas de ilhas flutuantes, com o abundante junco que predomina no lago.\n[…]\nUros - Ilhotas artificiais do lago Titicaca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cacau",
      "descricao": "Semente da árvore do cacau, domesticada na América e base do chocolate."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Entre os astecas, as sementes de cacau tinham que outra função, além de virar bebida?",
    "resposta": "Moeda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cocoa_bean"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cocoa_bean",
        "situacao": "ok",
        "texto": "The cocoa bean, also known as cocoa () or cacao (), is the dried and fully fermented seed of Theobroma cacao, the cacao tree. Due to its high fat content, the bean can be ground into a liquor, from which cocoa butter and cocoa powder are extracted. Cacao trees are native to the Amazon rainforest. They are the basis of chocolate and Mesoamerican foods including tejate, an indigenous Mexican drink.\n[…]\nCocoa beans, cocoa butter and cocoa powder are traded on futures markets. The London market is based on West African cocoa and New York on cocoa predominantly from Southeast Asia. Cocoa is the world's smallest soft commodity market. The futures price of cocoa butter and cocoa powder is determined by multiplying the bean price by a ratio. The combined butter and powder ratio has tended to be around 3.5.\n[…]\nCocoa beans also have a potential to be used as a bedding material in farms for cows. Using cocoa bean husks in bedding material for cows may contribute to udder health (less bacterial growth) and ammonia levels (lower ammonia levels on bedding).\n[…]\nPeople around the world consume cocoa in many different forms, consuming more than 3 million tons of cocoa beans yearly. Once the cocoa beans have been harvested, fermented, dried and transported they are processed in several components. Processor grindings serve as the main metric for market analysis. Processing is the last phase in which consumption of the cocoa bean can be equitably compared to supply.\n[…]\nAlternatively, cocoa powder and cocoa butter can be separated using a hydraulic press or the Broma process. Treating cocoa with an alkali produces Dutch process cocoa, which has a different flavor profile than untreated cocoa. Roasting can also be done on the whole bean or nib, affecting the final flavor.\n[…]\nMedia related to Cocoa beans at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gr%C3%A3o_de_cacau",
        "situacao": "ok",
        "texto": "O grão de cacau ou simplesmente cacau é a seca e totalmente fermentada semente de Theobroma cacao, da qual os sólidos do cacau (uma mistura de substâncias sem gordura) e a manteiga de cacau (a gordura) podem ser extraídos. Os grãos de cacau são a base do chocolate e dos alimentos mesoamericanos, incluindo o tejate, uma bebida indígena mexicana que também inclui o milho.\n[…]\nO termo cacau também significa\n[…]\na bebida também é comumente chamada de cacau quente ou chocolate quente\n[…]\nA análise química de resíduos extraídos de cerâmica escavada em um sítio arqueológico em Puerto Escondido, em Honduras, indica que os produtos do cacau foram consumidos lá pela primeira vez em aglum momento entre 1500 e 1400 a.C. Evidências também indicam que, muito antes de o sabor da semente (ou grão) do cacau se popularizar, a polpa doce do fruto do chocolate, usada na fabricação de uma bebida fermentada (5,34% de álcool), chamou a atenção para a planta pela primeira vez nas Américas.\n[…]\nO grão de cacau era uma moeda de troca comum em toda a Mesoamérica antes da conquista espanhola.\n[…]\nO cacau era uma mercadoria importante na Mesoamérica pré-colombiana. Um soldado espanhol que participou da conquista do México por Hernán Cortés conta que quando Moctezuma II, imperador dos astecas jantava, não tomava outra bebida senão o chocolate, servido em uma taça de ouro. Aromatizado com baunilha ou outras especiarias, seu chocolate era batido até formar uma espuma que se dissolvia na boca.\n[…]\nA transpiração é importante para a qualidade dos grãos, que originalmente tinham um sabor fortemente amargo. Se a \"sudorese\" for interrompida, o cacau resultante pode ser arruinado; se mal fermentada, a semente do cacau mantém um sabor semelhante ao da batata crua e torna-se suscetível ao mofo. Alguns países produtores de cacau destilam bebidas alcoólicas usando a polpa liquefeita.",
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
