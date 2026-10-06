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
      "nome": "Sete Maravilhas do Mundo Antigo",
      "descricao": "Lista clássica de sete monumentos notáveis da Antiguidade mediterrânea, compilada por autores gregos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Das sete maravilhas do mundo antigo, listadas por autores gregos, qual é a única que ainda está de pé?",
    "resposta": "Grande Pirâmide de Gizé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Wonders_of_the_Ancient_World",
        "situacao": "ok",
        "texto": "The Seven Wonders of the Ancient World, also known as the Seven Wonders of the World or simply the Seven Wonders, is a list of seven notable structures present during classical antiquity, first established in the 1572 publication Octo Mundi Miracula using a combination of historical sources.\n[…]\nModern historians, working on the premise that the original Seven Ancient Wonders List was limited in its geographic scope, also had their versions to encompass sites beyond the Hellenistic realm—from the Seven Wonders of the Ancient World to the Seven Wonders of the World.\n[…]\nEighth Wonder of the World, about attempted additions to the famous ancient list.\n[…]\nSeven Wonders of the World (1956 film)\n[…]\n7 Wonders of the Ancient World (2007 video game)\n[…]\nSeven Wonders (2013 book series)\n[…]\nBrodersen, Kai (1992). Reiseführer zu den Sieben Weltwundern. Philon von Byzanz und andere antike Texte [A guide to the Seven Wonders of the World. Philo of Byzantium and other ancient texts]. Frankfurt/Leipzig: Insel, ISBN 3-458-33092-5 (collection of ancient sources in original language and in translated form).\n[…]\nClayton, Peter; Price, Martin (1988). The Seven Wonders of the Ancient World. Routledge. ISBN 9780710211590\n[…]\nHiggins, Michael Denis (2023). The Seven Wonders of the Ancient World: Science, Engineering and Technology. New York: Oxford University Press. ISBN 9780197648155.\n[…]\nTobin, Jennifer (2011). Seven Wonders of the Ancient World (PDF). Recorded Books. ISBN 978-1-4498-3527-9.\n[…]\n\"Seven Ancient Wonders of the World\" on The History Channel website. Also includes links to medieval, modern and natural wonders.\n[…]\nParkin, Tim, Researching Ancient Wonders: A Research Guide, from the University of Canterbury, New Zealand. – a collection of books and Internet resources with information on seven ancient wonders."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sete_maravilhas_do_mundo",
        "situacao": "ok",
        "texto": "As sete maravilhas do mundo antigo são uma famosa lista de majestosas obras artísticas e arquitetônicas erguidas durante a Antiguidade Clássica, cuja origem atribui-se a um pequeno poema do poeta grego Antípatro de Sídon. Das sete maravilhas, a única que resiste até hoje praticamente intacta é a Pirâmide de Quéops, construída há quase cinco mil anos.\n[…]\nÉ interessante que na Grécia se encontravam a estátua de Zeus em Olímpia, construída em ouro e marfim com 12 metros de altura e o colosso de Rodes, na ilha homônima. A ideia que se tem dela vem das moedas de Elis (atual Élida) onde foi cunhada a figura da estátua de Zeus. Ao contrário do que muitos pensam, é apenas a Pirâmide de Quéops (e não todas as três grandes Pirâmides de Gizé) que faz parte da lista original das Sete Maravilhas do Mundo.\n[…]\nA conquista grega de grande parte do mundo ocidental conhecido no século IV a.C. deu aos viajantes helenísticos acesso às civilizações dos egípcios, persas e babilônios. Impressionados e cativados pelos marcos e maravilhas das várias terras, esses viajantes começaram a listar o que viram para se lembrar deles.\n[…]\nAo contrário do que muitos pensam, é apenas a Grande Pirâmide de Gizé (e não todas as três grandes Pirâmides de Gizé) que faz parte da lista original das Sete Maravilhas do Mundo e a única que ainda está de pé.\n[…]\nAs novas sete maravilhas do mundo foi uma revisão de caráter informal e recreativo da lista original das sete maravilhas, idealizada por uma organização suíça chamada New Open World Corporation (NOWC). A seleção foi feita mundialmente por votos pela internet gratuitos e ligações telefônicas. Os vencedores foram: Necrópole de Gizé (título honorário); Grande Muralha da China; Petra; Coliseu; Chichen Itza; Machu Picchu; Taj Mahal e Cristo Redentor.\n[…]\nMedia relacionados com Sete maravilhas do mundo no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Ordem dórica",
      "descricao": "Ordem arquitetônica clássica grega de colunas sem base e capitel liso, usada no Partenon."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das ordens clássicas da arquitetura grega, qual é a mais simples, com colunas sem base e capitel liso, usada no Partenon?",
    "resposta": "Dórica",
    "distratores": [
      "Jônica",
      "Coríntia",
      "Compósita"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Doric_order"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Doric_order",
        "situacao": "ok",
        "texto": "The Doric order (Latin: Ordo Doricus) is one of the three orders of ancient Greek and later Roman architecture; the other two canonical orders were the Ionic and the Corinthian. The Doric is most easily recognized by the simple circular capitals at the bottom of the columns. Originating in the western Doric region of Greece, it is the earliest and, in its essence, the simplest of the orders, thoug\n[…]\nThe Parthenon is in the Doric order, and in antiquity and subsequently has been recognized as the most perfect example of the evolved order. It was most popular in the Archaic Period (750–480 BC) in mainland Greece, and also found in Magna Graecia (southern Italy), as in the three temples at Paestum. These are in Archaic Doric, where the capitals spread wide from the column compared to later Classical forms, as exemplified in the Parthenon.\n[…]\nA classic statement of the Greek Doric order is the Temple of Hephaestus in Athens, built about 447 BC. The contemporary Parthenon, the largest temple in classical Athens, represents the peak of perfection of Doric order architecture, although the sculptural enrichment is more familiar in the Ionic order: the Greeks were never as doctrinaire in the use of the Classical vocabulary as Renaissance theorists or Neoclassical architects.\n[…]\nThe Roman architect Vitruvius, following contemporary practice, outlined in his treatise the procedure for laying out constructions based on a module, which he took to be one half a column's diameter, taken at the base. An illustration of Andrea Palladio's Doric order, as it was laid out, with modules identified, by Isaac Ware, in The Four Books of Palladio's Architecture (London, 1738), is illustrated at Vitruvian module.\n[…]\nAncient Greek, Classical\n[…]\nAlexander Tzonis, Classical Architecture: The Poetics of Order (Alexander Tzonis website)\n[…]\nMedia related to Doric columns at Wikimedia Commons\n[…]\nClassical orders and elements"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ordem_d%C3%B3rica",
        "situacao": "ok",
        "texto": "A ordem dórica é uma das ordens arquitetônicas clássicas, sendo a mais rústica das três, dado que, de acordo com Vitrúvio, é quase certo que esta ordem se originou de um tipo primitivo de construção em madeira. Entre as suas características é possível citar as colunas desprovidas de base, assentando no último degrau ou estilóbato; capitel despojado, arquitrave lisa, friso com métopas e tríglifos, \n[…]\nA coluna de estilo dórico surgiu nas costas do Peloponeso, ao sul, no início do século VII a.c. A ordem dórica, a mais antiga das existentes na arte grega, apresenta formas geométricas, regras rígidas, uma elegância formal e um equilíbrio de proporções. É principalmente empregada no exterior de templos dedicados a divindades masculinas e é a mais simples das três ordens gregas definindo um edifício em geral baixo e de caráter sólido.\n[…]\nA coluna não tem base, tem entre quatro e oito módulos de altura, o fuste é raramente monolítico e apresenta vinte estrias ou sulcos verticais denominados de caneluras. O capitel é formado pelo equino, ou coxim, que se assemelha a uma almofada e por um elemento quadrangular, o ábaco. O friso é intercalado por módulos compostos de três estrias verticais, os tríglifos, com dois painéis consecutivos lisos ou decorados, as métopas.\n[…]\nA versão romana transmite, em geral, maior leveza através das suas dimensões mais reduzidas.\n[…]\nOrdem jônica\n[…]\nOrdem coríntia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Angkor Wat",
      "descricao": "Templo do Império Khmer do século doze, no Camboja."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Erguido pelo Império Khmer no século doze, que templo do Camboja é considerado o maior monumento religioso do mundo?",
    "resposta": "Angkor Wat",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angkor_Wat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat (; Khmer: អង្គរវត្ត, 'City/Capital of Temples') is a Theravada Buddhist temple complex originally built as a Vaishnava Hindu temple, in Siem Reap, Cambodia. It is the largest religious complex in the world. Located on a site measuring 162.6 hectares (1.6 km2; 401.8 acres) within the medieval capital of Angkor, it was constructed between 1113 and 1150 CE during the reign of the Khmer kin\n[…]\nAngkor Wat is a Buddhist temple complex. Located on a site measuring 162.6 ha (1,626,000 m2; 402 acres) within the ancient Khmer capital city of Angkor, it is considered as the largest religious structure in the world by Guinness World Records.\n[…]\nSuch reinterpretations contributed to Angkor Wat's continued use as a place of worship, distinguishing it from many other monuments of the Angkor region that were abandoned after the decline of the Khmer state.\n[…]\nMyths associated with Angkor Wat reflect the influence of Buddhist traditions that developed in Cambodia over several centuries. By the 16th and 17th centuries, Theravada Buddhism had become the dominant religious system in the region, contributing to a gradual reinterpretation of the monument from a Hindu temple into a sacred Buddhist site.\n[…]\nModern scholarship indicates that the religious transformation of Angkor Wat took place over several centuries and involved gradual structural and ritual modifications. These developments reflect the sustained influence of Buddhist practices, beliefs, and myths on the interpretation of the monument.\n[…]\nThe role of Buddhism in shaping both popular and scholarly understandings of Angkor Wat remains significant. The monument is widely regarded as a symbol of the country's Buddhist heritage and continues to feature prominently in contemporary cultural and religious identity.\n[…]\nAngkor Wat and Angkor photo gallery by Jaroslav Poncar May 2010\n[…]\nPBS NOVA Angkor: Hidden Jungle Empire"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Angkor_Wat",
        "situacao": "ok",
        "texto": "Angkor Wat (ou Angkor Vat) é um templo situado 5,5 km a norte da cidade de Siem Reap, na província homônima do Camboja. É o maior e mais bem preservado templo dos que integram o assentamento de Angkor. É também o único que restou com significado religioso importante — inicialmente hindu, e depois budista — desde a sua fundação. O templo é o ponto máximo do estilo clássico da arquitetura Khmer.\n[…]\nAngkor Wat faz parte do complexo de templos construídos na zona de Angkor, a antiga capital do Império khmer, durante a sua época de esplendor, entre os séculos IX e XV. Angkor abrange uma extensão em torno de 200 km², embora recentes pesquisas estimem uma extensão de 3000 km² e uma população de até meio milhão de habitantes, o que o tornaria o maior assentamento pré-industrial da humanidade.\n[…]\nAngkor Wat é o expoente máximo da arquitetura do Império khmer, cujos primeiros templos remontam ao século VI. O promotor deste gigantesco monte-templo foi Suryavarman II, que reinou de 1113 até 1150 d.C.\n[…]\nEntre os séculos XIV e XV, o Império khmer viu chegar do Sri Lanka os primeiros monges budistas Teravadas, que transformariam os templos para a nova religião. O templo de Angkor Wat foi então remodelado para se adaptar ao culto Teravada, fatos que aconteceram pouco antes do abandono final de Angkor.\n[…]\nOs templos khmer não eram concebidos como locais para a reunião dos fiéis mas para morada dos deuses, pelo qual apenas a elite religiosa e política do país tinha acesso aos recintos centrais. Angkor Wat apresenta a particularidade de ser um templo cuja finalidade última era servir de tumba para o rei. Esta concepção dos templos khmer ocasiona que as suas zonas mais sagradas careçam de grandes entradas ou espaços cerimoniais, para que a atenção seja focada na percepção exterior do templo.\n[…]\nAngkor\n[…]\nModelo virtual de Angkor Wat",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pirâmide do Sol",
      "descricao": "Grande pirâmide da antiga cidade de Teotihuacan, perto da Cidade do México."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na antiga cidade de Teotihuacan, perto da Cidade do México, qual é a maior de todas as construções?",
    "resposta": "Pirâmide do Sol",
    "distratores": [
      "Pirâmide da Lua",
      "Templo de Quetzalcóatl",
      "Pirâmide de Kukulcán"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_the_Sun",
        "situacao": "ok",
        "texto": "The Pyramid of the Sun is the largest building in Teotihuacan, and one of the largest in Mesoamerica. It is believed to have been constructed about 200 AD. Found along the Avenue of the Dead, in between the Pyramid of the Moon and the Ciudadela, and in the shadow of the mountain Cerro Gordo, the pyramid is part of a large complex in the heart of the city.\n[…]\nThe name Pyramid of the Sun comes from the Aztecs, who visited the city of Teotihuacan centuries after it was abandoned; the name given to the pyramid by the Teotihuacanos is unknown. It was constructed in two phases. The first construction stage, around 200 AD, brought the pyramid to nearly the size it is today.\n[…]\nIn view of the position of the pyramid over the grotto, it would seem that the cave was the focal point and not an accidental coincidence, and that it may have determined the site for the construction of a primitive place of worship and then for the pyramid.\n[…]\nThe city layout of Teotihuacan incorporated alignments dictated by the astronomically significant orientation of the Pyramid of the Sun: the peak of the pyramid aligned with the horizon in order to serve as a natural marker of the sun's position on the Aztec quarter days of the year. Thus, this cave is more important than most in Aztec culture and religion. Recently, scientists have used muon detectors to try to find other chambers within the interior of the pyramid.\n[…]\nA unique historical artifact discovered near the foot of the pyramid at the end of the nineteenth century was the Teotihuacan Ocelot, which is now in the British Museum's collection. In addition, burial sites of children have been found in excavations at the corners of the pyramid. It is believed that these burials were part of a sacrificial ritual dedicating the building of the pyramid.\n[…]\nList of Mesoamerican pyramids"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Sol",
        "situacao": "ok",
        "texto": "A Pirâmide do Sol é a maior das pirâmides da cidade de Teotihuacan, a segunda maior de todo o México e a terceira maior do mundo.\n[…]\nDurante o auge de Teotihuacan, as pirâmides eram pintadas de vermelho brilhante e se destacavam na paisagem.\n[…]\nEstudos e escavações realizadas em 1971, conduziram à descoberta de uma grande caverna sob a estrutura da Pirâmide do Sol. A partir da caverna, existem quatro portas dispostas como pétalas de flor, que levam a outras salas. O acesso à caverna é feito através de um poço com 7 m de altura situado junto às escadas na base da pirâmide.\n[…]\nEssa caverna é, na verdade, um túnel natural elaborado e alargado por antigas correntes de lava, devido à região onde Teotihuacan está localizada, sobre uma bacia natural numa extensa região de vulcões. Alguns estudiosos acreditam que a razão para a pirâmide estar construída sobre a caverna é que ela era considerada sagrada e utilizada para atividades religiosas e rituais.\n[…]\nSua base é 97% da base da Grande Pirâmide de Gizé. A relação entre o seu perímetro e a sua base é 4 pi vezes a sua altura. O \"pi\" (π) é uma razão matemática que se baseia no conhecimento de geometria, o que implica o conhecimento de matemática sofisticada. Ela tem uma inclinação de 17º em relação ao polo terrestre, o que faz com que ela aponte para o pólo geográfico da Terra, permitindo que o Sol coincida com o seu centro nos dias 20 de maio e 18 de junho.\n[…]\nForam utilizados 2,5 milhões de toneladas de pedra para a sua construção, 4 milhões a menos que a Grande Pirâmide de Gizé.\n[…]\nTeotihuacan\n[…]\nPirâmide da Lua\n[…]\nMedia relacionados com Pirâmide do Sol no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Coliseu",
      "descricao": "Anfiteatro Flávio, o grande anfiteatro de Roma inaugurado no ano 80 depois de Cristo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Inaugurado no ano oitenta, que edifício de Roma é o maior anfiteatro já construído na Antiguidade?",
    "resposta": "Coliseu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colosseum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colosseum",
        "situacao": "ok",
        "texto": "The Colosseum ( KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world. Construction began under the Emperor Vespasian (r. 69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus \n[…]\nThis is often mistranslated to refer to the Colosseum rather than the Colossus (as in, for instance, Byron's poem Childe Harold's Pilgrimage). However, at the time that the Pseudo-Bede wrote, the masculine noun coliseus was applied to the statue rather than to the amphitheatre.\n[…]\nSimilarly, the Italian: colosseo, or coliseo, are attested as referring first to the amphitheatre in Rome, and then to any amphitheatre (as Italian: culiseo in 1367). By 1460, an equivalent existed in Catalan: coliseu; by 1495 had appeared the Spanish: coliseo, and by 1548 the Portuguese: coliseu.\n[…]\nThe text states: \"This Amphitheatre was commonly called Colosseum, of Neroes Colossus, which was set up in the porch of Neroes house.\" Similarly, John Evelyn, translating the Middle French name: le Colisée used by the architectural theorist Roland Fréart de Chambray, wrote \"And 'tis indeed a kind of miracle to see that the Colosseum … and innumerable other Structures which seemed to have been built for Eternity, should be at present so ruinous and dilapidated\".\n[…]\nThe Colosseum has appeared in numerous films, artworks and games. It is featured in films such as Roman Holiday, Gladiator, The Way of the Dragon, Jumper, and Godzilla x Kong: The New Empire. Additionally, Coliseum Mountain in Alberta, Canada was named after the Colosseum.\n[…]\nThe Los Angeles Memorial Coliseum entrance was inspired by the Colosseum.\n[…]\nVirtual tour of the Colosseum\n[…]\n3D model of the past and present of the colosseum – The Only Progress is Human"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coliseu",
        "situacao": "ok",
        "texto": "Coliseu (em italiano:  Colosseo), também conhecido como Anfiteatro Flaviano (em latim: Amphitheatrum Flavium; em italiano:  Anfiteatro Flavio), é um anfiteatro oval localizado no centro da cidade de Roma, capital da Itália. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.\n[…]\nO nome Anfiteatro Flavio é empregado ainda hoje, embora seja mais popularmente conhecido como Coliseu de Roma.\n[…]\nO Coliseu de Roma foi construído entre 72 d.C e 80 d.C. Iniciado por Vespasiano (69 a 79 d.C.), mais tarde foi inaugurado por Tito (79 a 81 d.C.), embora apenas tivesse sido finalizado poucos anos depois. Empresa colossal, este edifício, inicialmente, poderia sustentar no seu interior cerca de 50 000 espectadores, em três andares. Durante o reinado de Alexandre Severo e Gordiano III, foi ampliado com um quarto andar, podendo abrigar então cerca de 90 000 espectadores.\n[…]\nVespasiano morreu mesmo antes do Coliseu ser concluído. O edifício tinha alcançado o terceiro piso e Tito foi capaz de terminar a construção tanto do Coliseu como dos banhos públicos adjacentes (que são conhecidos como as Termas de Tito) apenas um ano depois da morte de Vespasiano. A grandeza deste monumento testemunha verdadeiramente o poder e esplendor de Roma na época dos Flávios.\n[…]\nOs jogos inaugurais do Coliseu tiveram lugar no ano 80, sob o mandato de Tito, para celebrar a finalização da construção. Depois do curto reinado de Tito começar com vários meses de desastres, incluindo a erupção do Vesúvio de 79, um incêndio em Roma em 64 e um surto de \"peste\", o mesmo imperador inaugurou o edifício com jogos pródigos que duraram mais de cem dias, talvez para tentar apaziguar o público romano e os deuses.\n[…]\nRoma Antiga\n[…]\nJogos inaugurais do Coliseu\n[…]\nTour virtual do Coliseu\n[…]\nEstrutura do Coliseu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Hagia Sophia",
      "descricao": "Antiga catedral bizantina de Constantinopla, depois mesquita, em Istambul, concluída em 537."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Concluída no século seis, que igreja foi a maior catedral do mundo por quase mil anos?",
    "resposta": "Hagia Sophia (Santa Sofia)",
    "distratores": [
      "Basílica de São Pedro",
      "Catedral de Colônia",
      "Notre-Dame de Paris"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hagia_Sophia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hagia_Sophia",
        "situacao": "ok",
        "texto": "Hagia Sophia, officially the Hagia Sophia Grand Mosque, is a mosque and a major cultural and historical site in Istanbul, Turkey. It was formerly a church (360–1453) and a museum (1935–2020). The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537, becoming the world's largest interior space and among the first to employ a f\n[…]\nThe World Council of Churches condemned the decision to convert the building into a mosque, saying that would \"inevitably create uncertainties, suspicions and mistrust\". At the recitation of the Sunday Angelus prayer at St Peter's Square on 12 July Pope Francis said, \"My thoughts go to Istanbul. I think of Santa Sophia and I am very pained\" (Italian: Penso a Santa Sofia, a Istanbul, e sono molto addolorato).\n[…]\nWith the use of ground-penetrating radar (GPR), teams discovered weak zones within the Hagia Sophia's gallery and also concluded that the curvature of the vault dome has been shifted out of proportion, compared to its original angular orientation.\n[…]\nThe Catedral Metropolitana Ortodoxa in São Paulo and the Église du Saint-Esprit (Paris) both replace the two large tympanums beneath the main dome with two shallow semi-domes. Several churches combine elements of the Hagia Sophia with a Latin cross plan. For instance, the transept of the Cathedral Basilica of Saint Louis (St. Louis) is formed by two semi-domes surrounding the main dome. The church's column capitals and mosaics emulate the style of the Hagia Sophia.\n[…]\nOther examples include the Alexander Nevsky Cathedral, Sofia, St Sophia's Cathedral, London, Saint Clement Catholic Church, Chicago, and the Basilica of the National Shrine of the Immaculate Conception. Several mosques commissioned by the Ottoman dynasty have plans based on the Hagia Sophia, including the Süleymaniye Mosque and the Bayezid II Mosque."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santa_Sofia",
        "situacao": "ok",
        "texto": "Santa Sofia (em grego: Άγια Σοφία; romaniz.: Agia Sophia, que significa \"Sagrada Sabedoria\"; em turco: Ayasofya), oficialmente Grande Mesquita de Santa Sofia (em turco:  Ayasofya-i Kebir Cami-i Şerifi), é um imponente edifício construído entre 532 e 537 pelo Império Bizantino para ser a catedral de Constantinopla (atualmente Istambul, na Turquia).\n[…]\nEmbora ela seja chamada de \"Santa Sofia\" (como se tivesse sido dedicada em homenagem a Santa Sofia), sophia é a transliteração fonética em latim da palavra grega para \"sabedoria\" — o nome completo da igreja em grego é Ναός της Αγίας του Θεού Σοφίας, \"Igreja da Santa Sabedoria de Deus\".\n[…]\nInaugurada em 15 de fevereiro de 360 pelo bispo ariano Eudóxio de Antioquia, ela foi construída próxima da região onde o palácio imperial estava sendo construído. A igreja chamada Hagia Irene (\"Santa Paz\") foi completada antes e serviu como catedral até que Santa Sofia estivesse completada. As duas foram as principais igrejas do Império Bizantino.\n[…]\nDurante o Império Latino (1204–1261), a cidade foi ocupada e a basílica se transformou numa catedral da Igreja Católica Romana. Balduíno I foi coroado imperador em 16 de maio de 1204 em Santa Sofia, numa cerimônia muito parecida com o ritual bizantino.\n[…]\nSanta Sofia é um dos grandes exemplos ainda existentes da arquitetura bizantina. Seu interior, decorado com pilares de mármore e mosaicos é de grande valor artístico. O próprio imperador Justiniano supervisionou a finalização da maior catedral já construída na época. Ela foi a maior conquista arquitetônica da antiguidade tardia e sua influência se espalhou pelo mundo ortodoxo, católico e islâmico.\n[…]\nA natureza única do projeto de Santa Sofia faz desta estrutura um dos monumentos mais avançados e ambiciosos construídos na Antiguidade Tardia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Empire State Building",
      "descricao": "Arranha-céu art déco em Manhattan, Nova York, inaugurado em 1931."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Inaugurado em Nova York em 1931, que arranha-céu foi o prédio mais alto do mundo por quase quarenta anos?",
    "resposta": "Empire State Building",
    "distratores": [
      "Edifício Chrysler",
      "Edifício Woolworth",
      "Rockefeller Center"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Empire_State_Building"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Empire_State_Building",
        "situacao": "ok",
        "texto": "The Empire State Building is a 102-story, supertall skyscraper in the Midtown South neighborhood of Manhattan, New York City, United States. The building was designed in the Art Deco style by Shreve, Lamb & Harmon and constructed between 1930 and 1931. Its name is derived from \"Empire State\", the nickname of New York state. The building has a roof height of 1,250 feet (380 m) and stands a total of\n[…]\nAs of 2022, it is the seventh-tallest building in New York City and the tenth-tallest in the United States. The Empire State Building is the 49th-tallest in the world as of February 2021. It is also the eleventh-tallest freestanding structure in the Americas behind the tallest U.S. buildings and the CN Tower.\n[…]\nThe Empire State Building has been hailed as an example of a \"wonder of the world\" due to the massive effort expended during construction. The Washington Star listed it as part of one of the \"seven wonders of the modern world\" in 1931, while Holiday magazine wrote in 1958 that the Empire State's height would be taller than the combined heights of the Eiffel Tower and the Great Pyramid of Giza.\n[…]\nThe building has also inspired replicas. The New York-New York Hotel and Casino in Paradise, Nevada, contains the \"Empire Tower\", a 47-story replica of the Empire State Building. A portion of the hotel's interior was also designed to resemble the Empire State Building's interior.\n[…]\nAs an icon of New York City, the Empire State Building has been featured in various films, books, TV shows, and video games. According to the building's official website, more than 250 movies contain depictions of the Empire State Building. In his book about the building, John Tauranac writes that its first documented appearance in popular culture was Swiss Family Manhattan, a 1932 children's story by Christopher Morley.\n[…]\nEmpire State Building under construction (1930–1931) at the New York Public Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Empire_State_Building",
        "situacao": "ok",
        "texto": "O Empire State Building é um arranha-céu de 102 andares no centro de Manhattan, Nova York, na Quinta Avenida, entre as ruas 33ª e 34ª Oeste. Ele tem uma altura do telhado de 381 metros, mas com a sua torre de antena incluída, o edifício chega a 443 m de altura. Seu nome é derivado do apelido do estado de Nova York, o Empire State(Estado Império).\n[…]\nApós os ataques terroristas de 11 de setembro de 2001, que destruíram as Torres Gêmeas, o Empire State Building de novo tornou-se o edifício mais alto da cidade, até o novo One World Trade Center atingir uma altura maior em abril de 2012. O edifício é atualmente o quinto mais alto arranha-céu nos Estados Unidos e o 54º mais alto do mundo. É também a quinta estrutura autônoma mais alta na América.\n[…]\nA construção foi parte de uma intensa competição em Nova York pelo título de Edifício Mais alto do Mundo. Os outros projetos concorrendo pelo título, 40 Wall Street e o Chrysler Building, ainda estavam no projeto quando as construções começaram. Ambos teriam mantido o título por menos de um ano, quando o Empire State os superou em sua conclusão, apenas 410 dias após as construções começarem.\n[…]\nO Empire State Building continuou a ser o arranha-céu mais alto do mundo por 41 anos, e a estrutura mais alta já feita pelo homem por 23 anos. Ele foi superado com a construção da Torre Norte do World Trade Center em 1972.\n[…]\nCom a destruição do World Trade Center nos ataques de 11 de setembro de 2001, o Empire State Building novamente tornou-se o edifício mais alto na cidade de Nova York até 2013 e o terceiro edifício mais alto de todo os Estados Unidos, atrás apenas da Willis Tower, que fica em Chicago e o One World Trade Center que fica em Nova York com 541,3 m.\n[…]\n«Empire State Building Trivia» (em inglês)\n[…]\n«A Construção do Empire State Building, 1930-1931, Biblioteca Pública de Nova York» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Sagrada Família",
      "descricao": "Basílica projetada por Antoni Gaudí em Barcelona, ainda em construção por mais de um século."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Das três grandes fachadas da Sagrada Família, em Barcelona, qual foi erguida em grande parte sob a direção do próprio Gaudí?",
    "resposta": "Fachada da Natividade",
    "distratores": [
      "Fachada da Paixão",
      "Fachada da Glória",
      "Fachada da Ressurreição"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nativity_fa%C3%A7ade",
      "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nativity_fa%C3%A7ade",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia",
        "situacao": "ok",
        "texto": "Basílica i Temple Expiatori de la Sagrada Família, or simply Sagrada Família, is a Catholic church in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, it is the tallest church\n[…]\nin the world. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a basilica. In 2005, parts of the Sagrada Família (Nativity façade and Crypt) were declared a UNESCO World Heritage Site, under \"Works of Antoni Gaudí\".\n[…]\nThe steeples on the Nativity façade are crowned with geometrically shaped tops that are reminiscent of Cubism (they were finished around 1930), and the intricate decoration is contemporary to the style of Art Nouveau, but Gaudí's unique style drew primarily from nature, not other artists or architects, and resists categorization.\n[…]\nGaudí used hyperboloid structures in later designs for Sagrada Família (more obviously after 1914). However, there are a few places on the nativity façade—a design not equated with Gaudí's ruled-surface design—where the hyperboloid appears. For example, all around the scene with the pelican, there are numerous examples (including the basket held by one of the figures). There is a hyperboloid adding structural stability to the cypress tree (by connecting it to the bridge).\n[…]\nAntoni Gaudí\n[…]\nIn 2005, UNESCO extended the inscription for Works of Antoni Gaudí – No 320 bis to include four additional buildings in Barcelona, with item 320-005 listed as two specific sections of Sagrada Família: the Crypt and the Nativity façade.\n[…]\nPuig i Boada, Isidre (1952). El templo de la Sagrada Familia (in Spanish). Barcelona, Spain: Omega.\n[…]\nGaudí, Sagrada Família Archived 7 November 2014 at the Wayback Machine (video), Smarthistory"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua art déco de Jesus Cristo de braços abertos no alto do morro do Corcovado, no Rio de Janeiro, inaugurada em 1931."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O concreto armado do Cristo Redentor, no Rio, é revestido por milhares de pequenos triângulos de que pedra?",
    "resposta": "Pedra-sabão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
      "https://pt.wikipedia.org/wiki/Cristo_Redentor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nConstructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other.\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nChrist the Redeemer of Malacca, on the Portuguese Settlement Square in Melaka (20 ft, 6.1 m)\n[…]\nCristo Rey on the Cerro del Cubilete in Guanajuato, inspired by Rio's Christ the Redeemer (23 m, 75 ft)\n[…]\nCristo Redentor in Barranca Province, Lima Region, Peru\n[…]\nCristo Rei (Christ the King) in Almada (28 m, 92 ft)\n[…]\nSagrat Cor de Jesus (Sacred Heart of Jesus), Ibiza, inspired by Christ the Redeemer (23 m, 75 ft)\n[…]\nChrist of the Ozarks near Eureka Springs, Arkansas, inspired by Rio's Christ the Redeemer (20 m, 66 ft)\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nGiumbelli, Emerson & Bosisio, Izabella (2010). \"A Política de um Monumento: as Muitas Imagens do Cristo Redentor\". Debates do NER (in Portuguese). 2 (18): 173–192. doi:10.22456/1982-8136.17638. hdl:10183/187720. ISSN 1982-8136.\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham.\n[…]\nSanctuary of Christ the Redeemer at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nFeito de concreto armado e pedra-sabão, tem trinta metros de altura (uma das maiores estátuas do mundo), sem contar os oito metros do pedestal, sendo a mais alta estátua do mundo no estilo Art Déco. Seus braços se esticam por 28 metros de largura e a estrutura pesa 1 145 toneladas.\n[…]\nUm grupo de engenheiros e técnicos estudou as apresentações de Landowski e tomou a decisão de construir a estrutura em concreto armado (projetado por Albert Caquot) em vez de aço, mais adequado para uma estátua em forma de cruz. As camadas exteriores são feitas de pedra-sabão, escolhida por suas qualidades duradouras e facilidade de uso. A construção durou nove anos (entre 1922 e 1931) e custou o equivalente a 250 mil dólares (ou 3,3 milhões de dólares em valores de 2014).\n[…]\nA estátua foi atingida por um raio durante uma violenta tempestade em 10 de fevereiro de 2008 e sofreu alguns danos nos dedos, cabeça e sobrancelhas. Um esforço de restauração foi posto em prática pelo governo do estado do Rio de Janeiro para substituir algumas das camadas de pedra-sabão exteriores e reparar os para-raios instalados na estátua. O monumento foi danificado novamente por um raio em 17 de janeiro de 2014, quando um dedo na mão direita foi destruído.\n[…]\nSantuário Nacional de Cristo Rei\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube\n[…]\n«Trem do Corcovado»"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Arquitetura gótica",
      "descricao": "Estilo arquitetônico europeu da Baixa Idade Média, das catedrais com arcos ogivais, vitrais e arcobotantes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas catedrais góticas, que arcos externos escoram as paredes e permitiram abrir janelas enormes com vitrais?",
    "resposta": "Arcobotantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flying_buttress",
      "https://en.wikipedia.org/wiki/Gothic_architecture"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flying_buttress",
        "situacao": "ok",
        "texto": "The flying buttress (arc-boutant, arch buttress) is a specific form of buttress composed of a ramping arch that extends from the upper portion of a wall to a pier of great mass, to convey to the ground the lateral forces that push a wall outwards, which are forces that arise from vaulted ceilings of stone and from wind-loading on roofs.\n[…]\nAs a lateral-support system, the flying buttress was developed during late antiquity and later flourished during the Gothic period (12th–16th c.) of architecture. Ancient examples of the flying buttress can be found on the Basilica of San Vitale in Ravenna and on the Rotunda of Galerius in Thessaloniki.\n[…]\nThe architectural design of Late Gothic buildings featured flying buttresses, some of which included flyers decorated with crockets (hooked decorations) and sculpted figures set in aedicules (niches) recessed into the buttresses.\n[…]\nBy relieving the load-bearing walls of excess weight and thickness, in the way of a smaller area of contact, using flying buttresses enables installing windows in a greater wall surface area. This feature and a desire to let in more light, led to flying buttresses becoming one of the defining factors of medieval Gothic architecture and a feature used extensively in the design of churches from then and onwards.\n[…]\nThe architecture and construction of a medieval cathedral with flying buttresses figures prominently into the plot of the historical novel The Pillars of the Earth by Ken Follett (1989).\n[…]\nWatkin, David (1986). A History of Western Architecture. Barrie and Jenkins. ISBN 0-7126-1279-3."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gothic_architecture",
        "situacao": "ok",
        "texto": "Gothic architecture is an architectural style that was prevalent in Europe from the late 12th to the 16th century, during the High and Late Middle Ages, surviving into the 17th and 18th centuries in some areas. It evolved from Romanesque architecture and was succeeded by Renaissance architecture. The style is characterised by pointed arches, rib vaults, flying buttresses and large, traceried stain\n[…]\nGothic architecture was a continual search for greater height, thinner walls, and more light. This was clearly illustrated in the evolving elevations of the cathedrals.\n[…]\nGothic civil architecture in Spain includes the Silk Exchange in Valencia, Spain (1482–1548), a major marketplace, which has a main hall with twisting columns beneath its vaulted ceiling.\n[…]\nCram, Ralph Adams (1909). \"Gothic Architecture.\" The Catholic Encyclopedia. Vol. 6. New York: Robert Appleton Company, 1909.\n[…]\nSimson, Otto Georg (1988). The Gothic cathedral: origins of Gothic architecture and the medieval concept of order. Princeton Univ. P. ISBN 978-0-691-09959-0.\n[…]\nMoore, Charles (1890). Development & Character of Gothic Architecture. Macmillan and Co. ISBN 978-1-4102-0763-0. {{cite book}}: ISBN / Date incompatibility (help)\n[…]\nWilson, Christopher (2005). The Gothic Cathedral – Architecture of the Great Church. Thames and Hudson. ISBN 978-0-500-27681-5.\n[…]\nGothic Architecture—Encyclopædia Britannica\n[…]\nHolbeche Bloxam, Matthew (1841). Gothic Ecclesiastical Architecture, Elucidated by Question and Answer. Gutenberg.org, from Project Gutenberg\n[…]\nBrandon, Raphael; Brandon, Arthur (1849). An analysis of Gothick architecture: illustrated by a series of upwards of seven hundred examples of doorways, windows, etc., and accompanied with remarks on the several details of an ecclesiastical edifice. Archive.org, from Internet Archive\n[…]\nParker, J. H. (1881), A B C of Gothic Architecture. Oxford: Parker & Co."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arcobotante",
        "situacao": "ok",
        "texto": "O arcobotante (arco botaréu, arco aviajado, arco esconso ou pegão) é uma construção em forma de meio arco, erguida na parte exterior dos edifícios na arquitetura gótica para apoiar as paredes e repartir o peso das paredes e colunas, servindo de estribo no encontro ou pilar a que se transmitem as cargas de uma estrutura. Só assim se conseguiu aumentar as alturas das edificações, dando forma (beleza\n[…]\nOs elementos arquitectónicos precursores do arcobotante medieval derivam da arquitetura bizantina e da arquitetura românica, no desenho de igrejas, como a Catedral de Durham, onde os arcos transmitem as forças laterais provocadas pela abóbada de pedra sobre os corredores; os arcos ficavam escondidos sob o teto da galeria e transmitiam as forças laterais às maciças paredes exteriores.\n[…]\nOs arcobotantes de Notre-Dame de Paris, construídos em 1180, foram um dos primeiros a serem usados numa catedral gótica. Os arcobotantes também foram usados quase na mesma época para apoiar as paredes superiores da abside da Igreja de Saint-Germain-des-Prés, concluída em 1163.\n[…]\nAo aliviar o excesso de peso e espessura das paredes estruturais, proporcionando uma menor área de contato, o uso de arcobotantes permite a instalação de janelas numa maior superfície de parede. Esta característica e o desejo de deixar entrar mais luz fizeram com que os arcobotantes se tornassem um dos factores definidores da arquitectura gótica medieval e uma característica amplamente utilizada no desenho de igrejas a partir de então.\n[…]\nTambém torna o espaço mais dinâmico e menos estático, separando o estilo gótico do estilo românico, mais plano e bidimensional. Após a introdução do arcobotante, este mesmo conceito também pôde ser visto no exterior das catedrais. O espaço aberto abaixo dos arcos do arcobotante tem o mesmo efeito que o clerestório dentro da igreja, permitindo ao observador ver através dos arcos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Atena Pártenos",
      "descricao": "Estátua colossal de Atena feita por Fídias para o interior do Partenon, em Atenas, hoje perdida."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A estátua colossal de Atena que Fídias fez para o interior do Partenon era revestida de que dois materiais preciosos?",
    "resposta": "Ouro e marfim",
    "fonte": [
      "https://en.wikipedia.org/wiki/Athena_Parthenos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Athena_Parthenos",
        "situacao": "ok",
        "texto": "The statue of Athena Parthenos (Ancient Greek: Παρθένος Ἀθηνᾶ, lit. 'Athena the Virgin') was a monumental chryselephantine sculpture of the goddess Athena. Attributed to Phidias and dated to the mid-fifth century BCE, it was an offering from the city of Athens to Athena, its tutelary deity. The naos of the Parthenon on the acropolis of Athens was designed exclusively to accommodate it.\n[…]\nThe new building was not intended to become a temple, but a treasury meant to house the colossal chryselephantine statue of Athena Parthenos. It is even likely that the statue project preceded the building project. This was an offering from the city to the goddess, but not a statue of worship: there was no priestess of Athena Parthenos.\n[…]\nHowever, given the cost of precious materials (gold and ivory), it could also have been installed elsewhere, at the foot of the sacred rock, far from the comings and goings of the main site and its dust.\n[…]\nIvory work was much more difficult, even if the statue of Athena Parthenos was not the first Greek statue to use this imported material. Oppian gives valuable indications of the techniques used. The necessary surfaces (face, arms, and feet) far exceeded the size of elephant tusks. However, these are made up of thin layers of superimposed ivory that can be \"unrolled like a roll of papyrus\". The next problem was to give shape to these long blades.\n[…]\nAccording to sources in 438 BCE (from the consecration of the statue) or in 432 BCE (just before the outbreak of the Peloponnesian War), Phidias was accused of diverting part of the precious metals used to make the statue of Athena Parthenos, which was also sacrilege in itself since gold belonged to the goddess. Arrested, he would have escaped, which was interpreted as an admission of guilt. He reportedly fled to Olympia where he made the Chryselephantine statue of Zeus and where he died."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atena_Partenos",
        "situacao": "ok",
        "texto": "Atena Partenos (em grego: Ἀθηνᾶ Παρθένος; romaniz.: Athenas Parténos; lit. \"Atena virgem\") foi uma monumental estátua representando a deusa Atena criada pelo escultor grego Fídias para o Partenon de Atenas em meados do século V a.C. Com cerca de 12 metros de altura, e revestida de ouro e marfim, custou uma fortuna e anos de trabalho, mas foi imediatamente reconhecida como uma maravilha, garantindo\n[…]\nSeus braços, pés e face foram cobertos de marfim, enquanto que o traje e armas foram revestidos de placas de bronze e, por cima, placas removíveis de ouro que pesavam no total em torno de 40 talentos (cerca de 1 tonelada), técnica conhecida como criselefantina.\n[…]\nÉ possível que o pedestal, sobre cuja autoria ainda pairam algumas incertezas, também tenha sido revestido a ouro, mas as evidências não são claras.\n[…]\nÉ possível que ao longo dos séculos de sua existência a Atena tenha passado mais de uma vez por obras de conservação. Uma das versões da vida de Fídias conta que a camada de ouro da Atena foi removida uma vez em 433 a.C. para o metal ser pesado e verificar se o artista havia roubado; alguém subtraiu o gorgonião de ouro do escudo durante a Guerra do Peloponeso, mas ele foi substituído antes de 398 a.C.; o ouro foi removido outra vez em 296 a.C.\n[…]\npara pagar as tropas do usurpador Lácares, \"deixando Atena nua\", como se queixaram vários cronistas, e seu revestimento foi provavelmente substituído por placas de bronze dourado, de custo muito inferior. Não há notícia de que o ouro tenha sido recolocado, e imediatamente após esta data aparece uma grande cunhagem de moedas de ouro atenienses, de um tipo usado somente em graves crises, cujo metal se presume ser aquele retirado da estátua.\n[…]\nFoi identificado o local do atelier de Fídias, onde se encontraram vestígios de moldes, marfim e ferramentas provavelmente usados na construção da estátua.\n[…]\nFídias\n[…]\nAtena Promacos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua colossal de cobre na ilha da Liberdade, em Nova York, presente da França aos Estados Unidos, inaugurada em 1886."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na mão esquerda, a Estátua da Liberdade segura uma tábua com uma data gravada em algarismos romanos. Que data é essa?",
    "resposta": "4 de julho de 1776",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
        "situacao": "ok",
        "texto": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture of a robed and crowned woman on Liberty Island, part of New York City, in New York Harbor. The copper-clad statue, a gift to the United States from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi, and its metal framework built by Gustav\n[…]\nThe statue is a figure of a classically draped woman, inspired by the Roman goddess of liberty, Libertas. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776, in Roman numerals), the date of the U.S. Declaration of Independence. With her left foot she steps on a broken chain and shackle, commemorating the national abolition of slavery following the American Civil War.\n[…]\nA powerful new lighting system was installed in advance of the American Bicentennial in 1976. The statue was the focal point for Operation Sail, a regatta of tall ships from all over the world that entered New York Harbor on July 4, 1976, and sailed around Liberty Island. The day concluded with a spectacular display of fireworks near the statue.\n[…]\nThe statue and Liberty Island reopened to the public on July 4, 2013. Ellis Island remained closed for repairs for several more months but reopened in late October 2013.\n[…]\nThe Statue of Liberty has also been closed due to government shutdowns and protests, as well as for disease pandemics. During the October 2013 United States federal government shutdown, Liberty Island and other federally funded sites were closed. In addition, Liberty Island was briefly closed on July 4, 2018, after a woman protesting against American immigration policy climbed onto the statue.\n[…]\nThe Statue of Liberty, BBC Radio 4 discussion with Robert Gildea, Kathleen Burk & John Keane (In Our Time, February 14, 2008)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Est%C3%A1tua_da_Liberdade",
        "situacao": "ok",
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nÉ uma figura de uma mulher vestida de forma clássica, provavelmente inspirada na deusa romana da liberdade, Libertas. Em uma pose de contrapposto, ela segura uma tocha acima da cabeça com a mão direita e na mão esquerda carrega uma tabula ansata com a inscrição JULY IV MDCCLXXVI (4 de julho de 1776, em algarismos romanos), a data da Declaração de Independência dos EUA.\n[…]\nUm novo e poderoso sistema de iluminação foi instalado antes do Bicentenário Americano em 1976. A estátua foi o ponto focal da Operação Vela, uma regata de navios altos de todo o mundo que entrou no porto de Nova York em 4 de julho de 1976 e navegou ao redor da Ilha da Liberdade. O dia terminou com uma espetacular exibição de fogos de artifício perto da estátua.\n[…]\nDe 3 a 6 de julho de 1986, foi designado \"Fim de Semana da Liberdade\", marcando o centenário da estátua e sua reabertura. O presidente Reagan presidiu a reinauguração, com a presença do presidente francês François Mitterrand. Em 4 de julho, ocorreu uma reprise da Operação Vela e a estátua foi reaberta ao público em 5 de julho. No discurso de inauguração de Reagan, ele declarou: \"Nós somos os guardiões da chama da liberdade; nós a mantemos bem alto para que o mundo a veja.\"\n[…]\nmeses\" antes da ilha ser reaberta ao público. A estátua e a Ilha da Liberdade reabriram ao público em 4 de julho de 2013. A Ellis Island permaneceu fechada para reparos por mais alguns meses, mas reabriu no final de outubro de 2013.\n[…]\n«Informações sobre a Estátua da Liberdade» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Abu Simbel",
      "descricao": "Par de templos escavados na rocha por ordem de Ramsés II, no sul do Egito, junto ao Lago Nasser"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Abu Simbel, ao lado do grande templo de Ramsés Segundo, o templo menor homenageia que rainha, sua esposa principal?",
    "resposta": "Nefertari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel (Arabic: أبو سمبل), Aswan Governorate, Upper Egypt, near the border with Sudan. It is located on the western bank of Lake Nasser, about 230 km (140 mi) southwest of Aswan (about 300 km (190 mi) by road). Its latitude of 22° 20′ 13″ N (22.3369 °N) is 1.0978°, which are 122 km (75.8 ml), south of the t\n[…]\nThe most prominent temples are the rock-cut temples near the modern village of Abu Simbel, at the Second Nile Cataract, the border between Lower Nubia and Upper Nubia. There are two temples, the Great Temple, dedicated to Ramesses II himself, and the Small Temple, dedicated to his chief wife Queen Nefertari.\n[…]\nThe temple of Hathor and Nefertari, also known as the Small Temple, was built about 100 m (330 ft) northeast of the temple of Ramesses II and was dedicated to the goddess Hathor and Ramesses II's chief consort, Nefertari. This was in fact the second time in ancient Egyptian history that a temple was dedicated to a queen. The first time, Akhenaten dedicated a temple to his great royal wife, Nefertiti.\n[…]\nOn the south and the north walls of this chamber there are two graceful and poetic bas-reliefs of the king and his consort presenting papyrus plants to Hathor, who is depicted as a cow on a boat sailing in a thicket of papyri. On the west wall, Ramesses II and Nefertari are depicted making offerings to the god Horus and the divinities of the Cataracts—Satis, Anubis and Khnum.\n[…]\nOn the back wall, which lies to the west along the axis of the temple, there is a niche in which Hathor, as a divine cow, seems to be coming out of the mountain: the goddess is depicted as the Mistress of the temple dedicated to her and to queen Nefertari, who is intimately linked to the goddess.\n[…]\nNubian Monuments from Abu Simbel to Philae. A short film produced by UNESCO on Abu Simbel."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abul-Simbel",
        "situacao": "ok",
        "texto": "Os templos de Abul-Simbel são dois enormes templos esculpidos na rocha em Abu Simbel (em árabe: أبو سمبل), uma vila na província de Assuão, Alto Egito, perto da fronteira com o Sudão. Eles estão situados na margem oeste do Lago Nasser, cerca de 230 km sudoeste de Assuão (cerca de 300 km de carro). O complexo faz parte do Patrimônio Mundial da UNESCO conhecido como \"Monumentos Núbios\", que vão de A\n[…]\nOs templos mais proeminentes são os templos talhados na rocha perto da moderna vila de Abu Simbel, na Segunda Catarata do Nilo, a fronteira entre a Baixa Núbia e a Alta Núbia. Existem dois templos, o Grande Templo, dedicado ao próprio Ramessés II, e o Pequeno Templo, dedicado à sua esposa principal, a Rainha Nefertari.\n[…]\nO templo de Hator e Nefertari, também conhecido como o Pequeno Templo, foi construído por volta de 100 m a nordeste do templo de Ramessés II e foi dedicado à deusa Hator e a consorte de Ramessés, Nefertari. Na verdade, esta foi a segunda vez na história do antigo Egito que um templo foi dedicado a uma rainha. Na primeira vez, Akhenaton dedicou um templo a sua grande esposa real, Nefertiti. A fachada talhada na rocha é decorada com dois grupos de colossos separados pelo grande portal.\n[…]\nNotavelmente, este é um dos poucos exemplos na arte egípcia em que as estátuas do rei e de sua consorte têm o mesmo tamanho. Tradicionalmente, as estátuas das rainhas ficavam próximas às do faraó, mas nunca eram mais altas do que seus joelhos. Ramessés foi para Abul-Simbel com sua esposa no 24º ano de seu reinado. Como o Grande Templo do rei, existem pequenas estátuas de príncipes e princesas ao lado de seus pais.\n[…]\nNa parede posterior, que fica a oeste ao longo do eixo do templo, há um nicho no qual Hator, como uma vaca divina, parece estar saindo da montanha: a deusa é retratada como a Senhora do templo dedicado a ela e à rainha Nefertari, que está intimamente ligada à deusa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Fontana di Trevi",
      "descricao": "Fonte barroca do século dezoito no bairro Trevi, em Roma."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Fontana di Trevi, em Roma, a grande figura central, sobre um carro em forma de concha puxado por cavalos-marinhos, representa que divindade?",
    "resposta": "Oceano",
    "distratores": [
      "Netuno",
      "Júpiter",
      "Apolo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Trevi_Fountain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trevi_Fountain",
        "situacao": "ok",
        "texto": "The Trevi Fountain (Italian: Fontana di Trevi) is an 18th-century fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini in 1762. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the world and one of the most famous fountains in the world.\n[…]\nSalvi died in 1751 with his work half finished, but he had made sure a barber's unsightly sign would not spoil the ensemble, hiding it behind a sculpted vase, called by Romans the asso di coppe, the \"Ace of Cups\", because of its resemblance to a Tarot card. Four different sculptors were hired to complete the fountain's decorations: Pietro Bracci (whose statue of Oceanus sits in the central niche), Filippo della Valle, Giovanni Grossi, and Andrea Bergondi.\n[…]\nThe Trevi Fountain was finished in 1762 by Pannini, who substituted the present allegories for planned sculptures of Agrippa and Trivia, the Roman virgin. It was officially opened and inaugurated on 22 May by Pope Clement XIII. The majority of the piece is made from Travertine stone, quarried near Tivoli, about 35 kilometres (22 miles) east of Rome.\n[…]\nThe Trevi Fountain is depicted in the third movement, \"The Trevi Fountain at Noon\", of Ottorino Respighi's 1916 symphonic poem Fountains of Rome.\n[…]\nIn 1973, the Italian national postal service dedicated a postage stamp to the Trevi Fountain.\n[…]\nLego released a set based on Trevi Fountain on March 1, 2025.\n[…]\nList of fountains in Rome\n[…]\nEngraving of the fountain's more modest predecessor.\n[…]\nRoman Bookshelf – Trevi Fountain – Views from the 18th and 19th centuries\n[…]\nTrevi Fountain Live Cam\n[…]\nTrevi Fountain Virtual 360° panorama and photo gallery.\n[…]\nTurismoroma: Poli Palace – Trevi fountain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fontana_di_Trevi",
        "situacao": "ok",
        "texto": "A Fontana di Trevi (em português Fontana di Trevi) é a maior (cerca de 26 metros de altura e 20 metros de largura) e mais ambiciosa construção de fontes barrocas da Itália e está localizada no rione Trevi, em Roma. A fonte está encostada na fachada do Palazzo Poli.\n[…]\nA fonte situava-se no cruzamento de três estradas (tre vie), marcando o ponto final do Acqua Vergine, um dos mais antigos aquedutos que abasteciam a cidade de Roma. No ano 19 a.C., supostamente ajudados por uma virgem, técnicos romanos localizaram uma fonte de água pura a pouco mais de 22 quilômetros da cidade (cena representada em escultura na própria fonte, atualmente).\n[…]\nA água desta fonte foi levada pelo menor aqueduto de Roma, diretamente para as termas de Marco Vipsânio Agripa e serviu a cidade por mais de 400 anos.\n[…]\nA Fontana di Trevi foi concluída em 1762 por Pannini, que substituiu pelas alegorias atuais as esculturas planejadas de Agripa e Trívia, a virgem romana. Foi oficialmente inaugurado e inaugurado em 22 de maio pelo Papa Clemente XIII.\n[…]\nEm 2 de fevereiro de 2026, a prefeitura de Roma começou a cobrar taxa de turistas para visitar a fonte.\n[…]\nEstima-se que 3 000 euros sejam jogados na fonte todos os dias. Em 2016, cerca de € 1,4 milhão (US$ 1,5 milhão) foi jogado na fonte. O dinheiro foi usado para subsidiar um supermercado para os pobres de Roma; No entanto, há tentativas regulares de roubar moedas da fonte, mesmo que seja ilegal fazê-lo.\n[…]\nEm 1964, foi lançado o filme que leva seu nome Fontana di Trevi - filmado pelo diretor Carlo Campogalliani.\n[…]\nPrecedentemente, a fonte foi o cenário do filme estadunidense Three Coins in the Fountain, onde a fonte do título é a própria Fontana di Trevi.\n[…]\n«Trevi Fountain». Virtual 360° panorama and photo gallery.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Moais da Ilha de Páscoa",
      "descricao": "Estátuas monolíticas esculpidas pelo povo Rapa Nui na Ilha de Páscoa."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Ilha de Páscoa, a grande maioria dos moais foi esculpida em que rocha, tirada da pedreira de Rano Raraku?",
    "resposta": "Tufo vulcânico",
    "distratores": [
      "Mármore",
      "Granito",
      "Arenito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Moai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moai",
        "situacao": "ok",
        "texto": "Moai or moꞌai (  MOH-eye; Rapa Nui: moꞌai, lit. 'statue', pronounced [ˈmoʔai]; Spanish: moái) are monolithic human figures carved from stone by the Rapa Nui people, on Rapa Nui (Easter Island) in eastern Polynesia between the years 1250 and 1500. Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the isl\n[…]\nAll but 53 of the more than 900 moai known to date were carved from tuff (a compressed volcanic ash) from Rano Raraku, where 394 moai in varying states of completion are still visible today. There are also 13 moai carved from basalt, 22 from trachyte and 17 from fragile red scoria. At the end of carving, the builders would rub the statue with pumice.\n[…]\nIt is not known exactly which groups within the Rapa Nui communities were responsible for carving statues. Oral traditions suggest that the moai were carved either by a distinguished class of professional carvers who were comparable in status to high-ranking members of other Polynesian craft guilds, or, alternatively, by members of each clan. The oral histories show that the Rano Raraku quarry was subdivided into different territories for each clan.\n[…]\nIn years after the arrival in 1722 of Jacob Roggeveen, all of the moai that had been erected on ahu were toppled; some last standing statues were reported in 1838 by Abel Aubert du Petit-Thouars, but none remained by 1868, apart from the partially buried ones on the outer slopes of Rano Raraku.\n[…]\nIn 2022, an unknown number of moai in Rano Raraku were damaged by a wildfire that covered an area of around 150 to 250 acres. The Mayor of Rapa Nui, Pedro Edmunds Paoa, stated the fire was started intentionally. Other authorities believe the damage to some of the affected statues is \"irreparable\".\n[…]\nMoai statues at Easter Island Travel\n[…]\nMoai database at Terevaka Archaeological Outreach"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moai",
        "situacao": "ok",
        "texto": "Moai ou moꞌai (em rapanui: moꞌai, \"estátua\") são figuras humanas monolíticas esculpidas em pedra pelo povo rapanui, em Rapa Nui (Ilha de Páscoa) na Polinésia Oriental entre os anos 1250 e 1500. Quase metade ainda está em Rano Raraku, a principal pedreira de moai, mas centenas foram transportadas de lá e colocadas em plataformas de pedra chamadas ahu ao redor do perímetro da ilha.\n[…]\nQuase todos os moai têm cabeças desproporcionalmente grandes, que representam três oitavos do tamanho total da estátua. Eles também não têm pernas. Os moai são principalmente os rostos vivos (aringa ora) de ancestrais deificados (aringa ora ata tepuna). Embora os moai de pedra sejam os mais famosos, os rapanui também esculpiram pequenos moai de madeira: moꞌai kavakava (masculino), moꞌai paepae / papa (feminino) e moꞌai taŋata (masculino).\n[…]\nAs estátuas ainda contemplavam o interior, através das terras de seus clãs, quando os europeus visitaram a ilha pela primeira vez em 1722, mas todas elas haviam caído no final do século XIX. Os moai foram derrubados no final do século XVIII e início do século XIX, possivelmente como resultado do contato europeu ou de guerras tribais internas.\n[…]\nEm 2010, moai foi incluído como um emoji \"moyai\" (🗿) na versão 6.0 do Unicode sob o ponto de código U+1F5FF como \"estátua de pedra japonesa semelhante a Moai na Ilha de Páscoa\".\n[…]\nO nome oficial Unicode para o emoji é escrito \"moyai\", pois o emoji representa a estátua moyai perto da Estação Shibuya em Tóquio. A estátua foi um presente do povo de Nii-jima (uma ilha 163 quilômetros (101 mi) de Tóquio, mas administrativamente parte da cidade) inspirado nos moai da Ilha de Páscoa. O nome da estátua foi derivado da combinação de \"moai\" e da palavra dialetal japonesa moyai (催合い) 'ajudando uns aos outros'.\n[…]\nCzech who made moai statues walk returns to Easter Island",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Basílica de São Pedro",
      "descricao": "Basílica renascentista no Vaticano, com grande cúpula, principal templo da Igreja Católica."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Sob a cúpula da Basílica de São Pedro, que grande estrutura de bronze com colunas torcidas, obra de Bernini, cobre o altar-mor?",
    "resposta": "Baldaquino",
    "fonte": [
      "https://en.wikipedia.org/wiki/St._Peter%27s_Baldachin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/St._Peter%27s_Baldachin",
        "situacao": "ok",
        "texto": "St. Peter's Baldachin (Italian: Baldacchino di San Pietro, L'Altare di Bernini) is a large Baroque sculpted bronze canopy, technically called a ciborium or baldachin, over the high altar of St. Peter's Basilica in Vatican City, the city-state and papal enclave surrounded by Rome, Italy. The baldachin is at the center of the crossing, and directly under the dome of the basilica.\n[…]\nDesigned by the Italian artist Gian Lorenzo Bernini, it was intended to mark, in a monumental way, the place of Saint Peter's tomb underneath. Under its canopy is the high altar of the basilica. Commissioned by Pope Urban VIII, the work began in 1623 and ended in 1634.\n[…]\nThe form of the structure is an updating in Baroque style of the traditional ciborium or architectural pavilion found over the altars of many important churches, and ceremonial canopies used to frame the numinous or mark a sacred spot. Old St. Peter's Basilica had a ciborium, like most major basilicas in Rome, and Bernini's predecessor, Carlo Maderno, had produced a design, also with twisted Solomonic columns, less than a decade before.\n[…]\nThere remained an issue that Bernini was not to resolve until later in his career. In a Latin cross church, the high altar should be placed in the chancel at the end of the longitudinal axis and yet in St. Peter's it was located in the centre of the crossing. Bernini sought a solution whereby the high altar above the tomb of the first Pope of the Catholic Church could be reconciled with tradition.\n[…]\nA more popular tradition tells the story of the complicated pregnancy of a niece of Urban VIII's and of his vow to dedicate an altar in St. Peter's to a successful delivery. A third tradition explains the allegory as Bernini's revenge against the pope's decision to disavow a child illegally born to his nephew Taddeo Barberini and the sister of one of Bernini's pupils."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baldaquino_da_Bas%C3%ADlica_de_S%C3%A3o_Pedro",
        "situacao": "ok",
        "texto": "O Baldaquino é um cibório ou baldaquino monumental, no altar papal acima do túmulo de São Pedro situado dentro da Basílica de São Pedro, em Roma, e criado por Gian Lorenzo Bernini. Foi elaborado para o Papa Urbano VIII.\n[…]\nPara obter bronze suficiente o papa ordenou derreter bronzes antigos do Panteão, fazendo com isso o povo de Roma dizer: \"O que os bárbaros não conseguiram fazer, fizeram os Barberini\".\n[…]\nA ideia de erguer um baldaquino para assinalar o túmulo de São Pedro não foi ideia do próprio Bernini, pois já existiam várias estruturas com colunas. Mesmo antes do papado de Urbano VIII, sob o qual a obra da basílica foi concluída, baldaquinos temporários eram usados ​​no interior durante a Quaresma e outras celebrações eclesiais.\n[…]\nA posição ocupada pelo baldaquino sob a cúpula obriga a que o altar-mor seja deslocado para o centro do transepto e não para a ábside, como corresponde à tradição cristã da época. Para recuperar a tradição, Bernini coloca um outro elemento capitel na abside, na posição que normalmente ocuparia o altar-mor. Trata-se da Cadeira de São Pedro, outra magnífica composição barroca do mesmo autor construída entre 1656 e 1665.\n[…]\nO baldaquino é talvez o elemento mais sumptuoso entre os inúmeros que a Basílica do Vaticano possui. Representou uma grande inovação em termos de materiais e de design que marcaria o percurso do estilo barroco. Esta é a obra mais marcante de Bernini, que anos mais tarde criaria a Praça de São Pedro com a sua imponente colunata e também a Cátedra, na abside da basílica. Foi muito celebrado na sua época.\n[…]\nCom o advento do Neoclassicismo, o colossal baldaquino passou a simbolizar a desordem e o excesso dos artistas barrocos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Catedral de Brasília",
      "descricao": "Catedral metropolitana de Brasília, com 16 colunas curvas de concreto em forma de hiperboloide."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na entrada da Catedral de Brasília, quatro grandes estátuas de bronze de Alfredo Ceschiatti representam que personagens bíblicos?",
    "resposta": "Os quatro evangelistas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "The Cathedral of Brasília (Portuguese: Catedral Metropolitana de Brasília, \"Metropolitan Cathedral of Brasília\") is the Roman Catholic cathedral serving Brasília, Brazil, and serves as the seat of the Archdiocese of Brasília. It was designed by Brazilian architect Oscar Niemeyer and engineered by Brazilian structural engineer Joaquim Cardozo, and was completed and dedicated on May 31, 1970.\n[…]\nIn the square access to the cathedral are four 2.5-meter (8 ft 2 in) tall bronze sculptures representing the four Evangelists, created by sculptors Alfredo Ceschiatti and Dante Croce in 1968. Also outside the cathedral, to the right as visitors face the entrance, stands a 20-meter (66 ft) tall bell tower containing four large bells donated by Spanish residents of Brazil and cast in Miranda de Ebro.\n[…]\nOver the nave are sculptures of three angels suspended by steel cables. These were created in 1970 by Alfredo Ceschiatti with the collaboration of Dante Croce. The shortest is 2.22 meters (7 ft 3 in) long and weighs 100 kilograms (220 lb), the middle 3.4 meters (11 ft) long and weighs 200 kilograms (440 lb), and the largest is 4.25 meters (13.9 ft) long and weighs 300 kilograms (660 lb).\n[…]\nThe Cathedral of Brasília, officially the Metropolitan Cathedral of Our Lady of Aparecida (Catedral Metropolitana Nossa Senhora Aparecida), dedicated to the Blessed Virgin Mary under her title of Our Lady of Aparecida, proclaimed by the Church as Queen and Patroness of Brazil, was designed by the architect Oscar Niemeyer and projected by the structural engineer Joaquim Cardozo.\n[…]\n15. Mayer, R. A linguagem de Oscar Niemeyer. Masters dissertation. Federal University of Rio Grande do Sul, Brazil, 2003. Available in: https://www.lume.ufrgs.br/handle/10183/6693\n[…]\nPhoto 360° Cathedral of Brasília - GUIABSB (most of roof glass has been restored)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "Catedral Metropolitana - Nossa Senhora Aparecida ou simplesmente Catedral de Brasília, é um templo católico brasileiro, na qual se encontra a cátedra da Arquidiocese de Brasília, localizada na capital federal, ao sul da S1, no Eixo Monumental, região da Esplanada dos Ministérios. A cerimônia de posse do presidente do Brasil tradicionalmente costuma se iniciar nesta catedral.\n[…]\nA Catedral de Brasília, oficialmente a Catedral Metropolitana Nossa Senhora Aparecida, dedicada à Virgem Maria, sob o título de Nossa Senhora de Aparecida, proclamada pela Igreja como Rainha e Padroeira do Brasil, foi concebida pelo arquiteto Oscar Niemeyer, com projeto estrutural do engenheiro Joaquim Cardozo.\n[…]\nNa praça de acesso ao templo, encontram-se quatro esculturas em bronze com três metros de altura, representando os Quatro Evangelistas, de Alfredo Ceschiatti, com a colaboração de Dante Croce em 1970. Um campanário de 20 metros de altura sustenta quatro grandes sinos doados por moradores espanhóis do Brasil e trazidos de Miranda de Ebro na parte externa da catedral. Na entrada, está um pilar com passagens da vida de Maria, mãe de Jesus, pintado por Athos Bulcão.\n[…]\nNa catedral, sobre a nave, estão esculturas de três anjos, suspensas por cabos de aço. O mais curto tem 2,22 metros de comprimento e pesa 100 kg, o médio tem 3,4 metros de comprimento e pesa 200 quilos e o maior tem 4,25 metros e pesa 300 quilos. As esculturas são de Alfredo Ceschiatti, com a colaboração de Dante Croce, em 1970. O altar foi doado pelo Papa Paulo VI e a imagem da padroeira Nossa Senhora de Aparecida é a réplica do original que está no município de Aparecida, São Paulo.\n[…]\nO Caminho da Cruz é uma obra de Di Cavalcanti. Sob o altar principal está uma pequena capela acessível por cada lado do altar. O interior da catedral é revestido com 500 toneladas de mármore.\n[…]\nArquidiocese de Brasília",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Portão de Brandemburgo",
      "descricao": "Portal neoclássico do século dezoito no centro de Berlim, símbolo da reunificação alemã."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 1806, Napoleão levou para Paris o carro de bronze puxado por quatro cavalos que coroa o Portão de Brandemburgo. Como se chama esse conjunto?",
    "resposta": "Quadriga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brandenburg_Gate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brandenburg_Gate",
        "situacao": "ok",
        "texto": "The Brandenburg Gate (German: Brandenburger Tor [ˈbʁandn̩ˌbʊʁɡɐ ˈtoːɐ̯] ) is an 18th-century neoclassical monument in Berlin, Germany. One of the best-known landmarks of the country, it was erected on the site of a former city gate that marked the start of the road from Berlin to Brandenburg an der Havel, the former capital of the Margraviate of Brandenburg.\n[…]\nThe current structure was built from 1788 to 1791 by orders of King Frederick William II of Prussia, based on designs by the royal architect Carl Gotthard Langhans. The bronze sculpture of the quadriga crowning the gate is a work by the sculptor Johann Gottfried Schadow.\n[…]\nThe Brandenburg Gate has played different political roles in German history. After the 1806 Prussian defeat at the Battle of Jena-Auerstedt, Napoleon was the first to use the Brandenburg Gate for a triumphal procession, and took its quadriga to Paris. After Napoleon's defeat in 1814 and the Prussian occupation of Paris by General Ernst von Pfuel, the quadriga was restored to Berlin.\n[…]\nOn 21 September 1956, the East Berlin magistrate decided to restore the damaged monument, which was the only surviving city gate. Despite fierce arguments and mutual accusations, East and West Berlin collaborated on the project. Workers patched the structural holes, though the repairs remained visible for years. The quadriga was entirely recreated using a 1942 plaster cast.\n[…]\nIn 1990, the quadriga was removed from the gate as part of renovation work carried out by the East German authorities following the fall of the wall in November 1989. Germany was officially reunified in October 1990.\n[…]\nOn 12 July 1994, U.S. President Bill Clinton spoke at the Brandenburg Gate about peace in post–Cold War Europe.\n[…]\nEvents at Brandenburg Gate. Archived 24 July 2019 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Port%C3%A3o_de_Brandemburgo",
        "situacao": "ok",
        "texto": "O Portão de Brandemburgo (em alemão: Brandenburger Tor de) é um monumento neoclássico do século XVIII localizado em Berlim. Um dos marcos mais conhecidos da Alemanha, foi erguido no local de um antigo portão que marcava o início da estrada de Berlim a Brandenburg an der Havel, antiga capital do Margraviato de Brandemburgo. A construção atual foi erguida entre 1788 e 1791 por ordem do rei Frederico\n[…]\nA escultura de bronze da quadriga no topo do portão é obra do escultor Johann Gottfried Schadow.\n[…]\nDepois de um andar superior em estilo ático que é simples, exceto por largos degraus laterais recuando em ambas as direções, levando, no lado leste apenas, a um grande relevo alegórico chamado “Triunfo da Paz”, com figuras em sua maioria femininas e infantis, vem uma segunda cimalha, com seção central em projeção. Acima disso há um grupo escultórico “em bronze” de Johann Gottfried Schadow representando uma quadriga — uma carruagem puxada por quatro cavalos — conduzida por uma deusa.\n[…]\nO portão era o primeiro elemento de uma “nova Atenas às margens do Spree” concebida por Langhans.\n[…]\nO Portão de Brandemburgo desempenhou diferentes papéis políticos na história alemã. Após a derrota prussiana na Batalha de Jena–Auerstedt (1806), Napoleão foi o primeiro a utilizá-lo em uma procissão triunfal, levando sua quadriga a Paris. Após a derrota de Napoleão em 1814 e a ocupação de Paris pelos prussianos sob comando do general Ernst von Pfuel, a quadriga foi devolvida a Berlim.\n[…]\nO portão sobreviveu à Segunda Guerra Mundial e estava entre as estruturas danificadas ainda de pé na Pariser Platz em 1945 (outra era a Academia de Belas Artes). Foi fortemente atingido, com buracos de bala nas colunas e explosões próximas. A cabeça de um dos cavalos da quadriga original sobreviveu e hoje integra a coleção do Märkisches Museum.\n[…]\nPortão de Brandemburgo\n[…]\n«Deutsche Welle - 1791: Abertura do Portão de Brandemburgo»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Machu Picchu",
      "descricao": "Cidadela inca do século quinze no alto dos Andes, no Peru."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os incas ergueram muitos muros de Machu Picchu com pedras cortadas com tanta precisão que elas se encaixam sem usar o quê?",
    "resposta": "Argamassa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Machu_Picchu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern  Peru  on a mountain ridge at  2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate.\n[…]\nThis precise alignment suggests that Inti Mach'ay functioned as a solar observatory associated with the Capac Raymi festival. Inti Mach'ay is located on Machu Picchu's eastern side, just north of the \"Condor Stone\". Many of the caves surrounding this area were prehistorically used as tombs, yet there is no evidence that Mach'ay was a burial ground.\n[…]\nThe central buildings of Machu Picchu are built in classical Inca dry masonry, with large blocks precisely shaped through quarrying, stone-cutting, and stone-dressing, then fitted together without mortar.\n[…]\nThe section of the mountain where Machu Picchu was built provided various challenges that the Incas solved with local materials. One issue was the seismic activity due to two fault lines, which made mortar and similar building methods nearly useless.\n[…]\nMachu Picchu has appeared in several films, television programmes and music productions. The Paramount Pictures film Secret of the Incas (1954), starring Charlton Heston and Yma Sumac, was filmed on location at Machu Picchu and Cusco, marking the first time a major Hollywood studio shot on site. Werner Herzog's drama Aguirre, the Wrath of God (1972) opens with scenes shot in the Machu Picchu area and on the stone stairway of Huayna Picchu.\n[…]\nStories on Machu Picchu by Fernando Astete, former Chief of National Archaeological Park of Machupicchu\n[…]\nPlants and animals in Machu Picchu Archived 4 November 2023 at the Wayback Machine\n[…]\nFirst photographs of Hiram Bingham in Machu Picchu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Machu_Picchu",
        "situacao": "ok",
        "texto": "Machu Picchu  é uma cidadela inca do século XV localizada na Cordilheira Oriental do sul do Peru, em uma crista montanhosa a 2.430 metros de altura. Está situado no distrito de Machupicchu, na província de Urubamba, cerca de 80 quilômetros a noroeste de Cusco, acima do Vale Sagrado e ao longo do rio Urubamba, que forma um cânion profundo com um clima subtropical de montanha.\n[…]\nRelatos contemporâneos observam a manutenção local desses caminhos e sua convergência no sítio, o que complica as interpretações de Machu Picchu como completamente isolado.\n[…]\nOs edifícios centrais de Machu Picchu são construídos em alvenaria seca inca clássica, com grandes blocos precisamente moldados através de extração, corte e preparação de pedra, e depois encaixados sem argamassa.\n[…]\nA seção da montanha onde Machu Picchu foi construída apresentou diversos desafios que os incas resolveram com materiais locais. Um dos problemas era a atividade sísmica causada por duas falhas geológicas, o que tornava a argamassa e outros métodos de construção semelhantes praticamente inúteis.\n[…]\nMachu Picchu estava conectada ao sistema de estradas incas e ao comércio de longa distância, como demonstram os nódulos de obsidiana encontrados perto da entrada do sítio arqueológico. As análises de Burger e Asaro na década de 1970 rastrearam-nas até as fontes do Titicaca ou de Chivay, indicando extensas redes de troca pré-hispânicas.\n[…]\nMachu Picchu já apareceu em diversos filmes, programas de televisão e produções musicais. O filme da Paramount Pictures, O Segredo dos Incas (1954), estrelado por Charlton Heston e Yma Sumac, foi filmado em locações em Machu Picchu e Cusco, marcando a primeira vez que um grande estúdio de Hollywood filmou no local. O drama de Werner Herzog, Aguirre, der Zorn Gottes (1972), começa com cenas filmadas na área de Machu Picchu e na escadaria de pedra de Huayna Picchu.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Aleijadinho",
      "descricao": "Antônio Francisco Lisboa, escultor e arquiteto do barroco mineiro do século dezoito."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, quando a doença deformou seus dedos, de que jeito Aleijadinho passou a segurar o martelo e o cinzel?",
    "resposta": "Amarrados às mãos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aleijadinho",
      "https://pt.wikipedia.org/wiki/Aleijadinho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aleijadinho",
        "situacao": "ok",
        "texto": "Antônio Francisco Lisboa (c. 29 August 1730 or 1738 – 18 November 1814), better known as Aleijadinho (Portuguese pronunciation: [aleiʒaˈdʒiɲu], lit. 'little cripple'), was a sculptor, carver and architect of Colonial Brazil, noted for his works on and in various churches of Brazil.\n[…]\nLittle is known about the life of Antônio Francisco Lisboa. Practically all the data available today are derived from a biography written in 1858 by Rodrigo José Ferreira Bretas, 44 years after Aleijadinho's death, allegedly based on documents and testimonies of individuals who had known the artist personally.\n[…]\nThe memorandum, written while Aleijadinho was still alive, contained a description of the artist's most notable works and some biographical indications, and was partly based on it that Bretas wrote Traços biográficos relativos ao finado Antônio Francisco Lisboa, distinto escultor mineiro, mais conhecido pelo apelido de Aleijadinho, where he reproduced excerpts from the original document, which was later lost.\n[…]\n\"In Brazil, Aleijadinho would not have escaped this collective representation that surrounds the artist. The account of midwife Joana Lopes, a woman from the people who served as the basis for both the stories that spread by word of mouth and for the work of biographers and historians, made Antônio Francisco Lisboa the arhcetype of the genius cursed by the disease.\n[…]\nHogan, James E (1974). \"Antônio Francisco Lisboa, o Aleijadinho: An Annotated Bibliography\". Latin American Research Review. 9 (2): 83–94. doi:10.1017/S0023879100026224. JSTOR 2502724. S2CID 253150662.\n[…]\nVasconcelos, Silvio de (1979). Vida e Obra de Antônio Francisco Lisboa: o Aleijadinho (in Portuguese). São Paulo: Plamipress.\n[…]\nAleijadinho at Encyclopædia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aleijadinho",
        "situacao": "ok",
        "texto": "Antônio Francisco Lisboa, mais conhecido como Aleijadinho, (Ouro Preto, c. 29 de agosto de 1730 ou, mais provavelmente, 1738 – Ouro Preto, 18 de novembro de 1814) foi um importante escultor, entalhador e arquiteto do Brasil colonial.\n[…]\nContinuando, Bretas relatou que depois de 1777 o artista começou a exibir sinais de uma misteriosa doença degenerativa, que lhe valeu o apelido de \"Aleijadinho\". O seu corpo foi progressivamente se deformando, o que lhe causava dores contínuas; teria perdido vários dedos das mãos, restando-lhe apenas o indicador e o polegar, e todos dos pés, obrigando-o a andar de joelhos.\n[…]\n'\"No Brasil o Aleijadinho não teria escapado a essa representação coletiva que circunda a figura do artista. O relato da parteira Joana Lopes, uma mulher do povo que serviu de base tanto para as histórias que corriam de boca em boca quanto para o trabalho de biógrafos e historiadores, fez de Antônio Francisco Lisboa o protótipo do gênio amaldiçoado pela doença.\n[…]\nO pesquisador chama a atenção ainda para a evidência documental de recibos assinados em 1796, onde sua caligrafia ainda é firme e desembaraçada, fato inexplicável se aceitarmos o que disse Bretas ou os relatos de viajantes do século XIX, como Luccock, Friedrich von Weech, Francis de Castelnau e outros, certamente repetindo o que proclamava a voz popular, que diziam ele ter perdido não só dedos, mas até as mãos.\n[…]\nProporções quadrangulares das mãos e unhas, com o polegar recuado e alongado e indicador e mínimo afastados, anular e médio unidos de igual comprimento; nas figuras femininas os dedos se afunilam e ondulam, elevando-se em seus terços médios;\n[…]\n1794 — Ouro Preto: Inspeção de obras na Igreja de São Francisco.\n[…]\n«Museu Aleijadinho, página oficial»"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Palácio da Alvorada",
      "descricao": "Palácio projetado por Oscar Niemeyer em Brasília, à beira do lago Paranoá, residência oficial do presidente da República."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Projetado por Oscar Niemeyer à beira do lago Paranoá, que função tem o Palácio da Alvorada, em Brasília?",
    "resposta": "Residência oficial do presidente",
    "distratores": [
      "Gabinete de trabalho presidencial",
      "Residência do vice-presidente",
      "Sede do Itamaraty"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_da_Alvorada",
      "https://en.wikipedia.org/wiki/Pal%C3%A1cio_da_Alvorada"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%A1cio_da_Alvorada",
        "situacao": "ok",
        "texto": "Palácio da Alvorada é um edifício localizado na cidade de Brasília, a capital do Brasil. O palácio é a residência oficial do Presidente do Brasil. Situa-se às margens do Lago Paranoá, tendo sido o primeiro edifício inaugurado na Capital Federal, em 30 de junho de 1958.\n[…]\nA construção de Niemeyer e Cardozo foi batizada por Juscelino Kubitschek e, quando questionado sobre o porquê do nome \"alvorada\", o então presidente da República respondeu com outra questão: \"Que é Brasília, senão a alvorada de um novo dia para o Brasil?\". É dito que Juscelino recusou o primeiro projeto feito por Niemeyer, por \"falta de monumentalidade\", e pediu que o arquiteto refizesse os traços para construir um palácio \"que daqui a cem anos ainda seja admirado\".\n[…]\nNo entanto, apenas sete dias (de 17 a 24 de fevereiro) de residência no Palácio da Alvorada, Temer desistiu e retornou ao Palácio do Jaburu, a residência oficial do vice-presidente. Desde que se mudou para o Alvorada, o presidente mostrava incômodo com o novo endereço. O argumento para a demora da mudança foi o mesmo que motivou a desistência de ficar no novo palácio: o Alvorada era \"grande demais\" e não tinha \"cara de casa\".\n[…]\nO andar térreo abriga os salões governamentais usados ​​pela presidência para recepções oficiais. É composto pelo Hall de Entrada, Sala de Espera, Sala de Estado, Biblioteca, Mezanino, Sala de Jantar, Sala Nobre, Sala de Música e Sala de Banquetes.\n[…]\nO subsolo abriga um auditório para 30 pessoas, Sala de Jogos, Almoxarifado, Despensa, Cozinha, Lavanderia e a Administração do Palácio. O primeiro andar é a parte residencial do palácio, com o apartamento presidencial composto por quatro suítes, dois apartamentos e outros quartos privados.\n[…]\n«Página oficial»\n[…]\nPalácio da Alvorada no TripAdvisor"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pal%C3%A1cio_da_Alvorada",
        "situacao": "ok",
        "texto": "The Palácio da Alvorada (Portuguese pronunciation: [paˈlasju dawvoˈɾadɐ]) is the official residence of the president of Brazil. It is located in the national capital of Brasília, on a peninsula at the margins of Paranoá Lake. The building was designed by Oscar Niemeyer and built between 1957 and 1958 in the modernist style. It has been the residence of every Brazilian president since Juscelino Kub\n[…]\nThe Palácio da Alvorada is used as a residence and for official receptions. The president's workplace and center of the executive branch is the Palácio do Planalto.\n[…]\nThe building was initially referred to as the \"Presidential Palace\". The name \"Palácio da Alvorada\" (\"Palace of Dawn\") comes from a quote by Juscelino Kubitschek: \"Que é Brasília, senão a alvorada de um novo dia para o Brasil?\" (\"What is Brasília, if not the dawn of a new day for Brazil?\").\n[…]\nThe ground floor houses the state rooms used by the presidency for official receptions. It is made up of the Entrance Hall, Waiting Room, State Room, Library, Mezzanine, Dining Room, Noble Room, Music Room and Banquet Room.\n[…]\nThe Entrance Hall is the main entrance area of the palace. Its main feature is a golden wall inscribed with a phrase by president Kubitschek: \"From this central plateau, this vast emptiness that will soon become the center of national decisions, I look once more at the future of my country and foresee this dawn with an unshakeable faith in its great destiny - Juscelino Kubitschek, October 2, 1956\".\n[…]\nThe second floor is the residential part of the palace, with the presidential apartment consisting of four suites, two guest apartments and other private rooms.\n[…]\nThere are 160 employees currently working at the palace, including secretaries, assistants, waiters, cooks, doctors and security personnel. The palace complex is protected by the Presidential Guard Battalion.\n[…]\nPresidency of Brazil: Palácio da Alvorada"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Stonehenge",
      "descricao": "Monumento pré-histórico de grandes pedras dispostas em círculo na planície de Salisbury, na Inglaterra."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Inglaterra, o eixo principal do círculo de pedras de Stonehenge está alinhado com o nascer do sol em que data especial do ano?",
    "resposta": "Solstício de verão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stonehenge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge is a prehistoric megalithic structure on Salisbury Plain in Wiltshire, England, two miles (3 km) west of Amesbury. It consists of an outer ring of vertical sarsen standing stones, each around 13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons, topped by connecting horizontal lintel stones which are held in place with mortise and tenon joints—a feature unique amon\n[…]\nStonehenge was produced by a culture that left no written records. Many aspects of Stonehenge, such as how it was built and for what purposes it was used, remain subject to debate. A number of myths surround the stones. The site, specifically the great trilithon, the encompassing horseshoe arrangement of the five central trilithons, the heel stone, and the embanked avenue, are aligned to the sunset of the winter solstice and the opposing sunrise of the summer solstice.\n[…]\nDuring 2017 and 2018, excavations by professor Parker Pearson's team at Waun Mawn, a large stone circle site in the Preseli Hills, suggested that the site had originally housed a 110-metre (360 ft) diameter stone circle of the same size as Stonehenge's original bluestone circle, also orientated towards the midsummer solstice.\n[…]\nWhen Stonehenge was first opened to the public, it was possible to walk among and even climb on the stones, but they were roped off in 1977 due to serious erosion. Visitors are no longer permitted to touch the stones but are able to walk around the monument from a short distance away. English Heritage does, however, permit access during the summer and winter solstice, and the spring and autumn equinox. Additionally, visitors can make special bookings to access the stones throughout the year.\n[…]\nStonehenge English Heritage official site: access and visiting information; research; future plans\n[…]\nStonehenge Landscape National Trust – information about the surrounding area."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stonehenge",
        "situacao": "ok",
        "texto": "Stonehenge é uma estrutura composta, formada por círculos concêntricos de pedras, que chegam a ter 5 metros de altura e a pesar quase 50 toneladas, localizada na Inglaterra, no condado de Wiltshire, na Planície de Salisbury.\n[…]\nDurante o chamado Período II (c. 2150 a.C.), deu-se a realocação do santuário de madeira, a construção de dois círculos de pedras azuis (coloridas com um matiz azulado), o alargamento da entrada, a construção de uma avenida de entrada marcada por valas paralelas alinhadas com o Sol nascente do primeiro dia do verão, e a construção do círculo externo, com 35 pedras que pesavam toneladas. As altas pedras azuis, que pesam 4 t, foram transportadas das montanhas de Gales, a cerca de 240 km ao Norte.\n[…]\nRecolhendo os dados a respeito do movimento de corpos celestiais, as observações de Stonehenge foram usadas para indicar os dias apropriados no ciclo ritual anual. Nesta consideração, a estrutura não foi usada somente para determinar o ciclo agrícola, uma vez que nesta região o solstício de verão ocorre bem após o começo da estação de crescimento; e o solstício de inverno bem depois que a colheita é terminada.\n[…]\n(Pi) em seus círculos de pedra.\n[…]\nA explicação científica para a construção está no ponto em que o monumento tenha sido concebido para que um observador em seu interior possa determinar, com exatidão, a ocorrência de datas significativas, tais como solstícios e equinócios, eventos celestes que anunciam as mudanças de estação. Para isto, basta se posicionar adequadamente entre os mais de 70 blocos de arenito que o compunham e observar-se na direção certa.\n[…]\nCírculos de pedras da Senegâmbia\n[…]\nParque Arqueológico do Solstício\n[…]\nNovo monumento cerimonial encontrado perto de Stonehenge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "O Beijo (Rodin)",
      "descricao": "Escultura de um casal nu abraçado, feita por Auguste Rodin em 1882."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O casal da escultura O Beijo, de Rodin, representa que dois amantes trágicos da Divina Comédia, de Dante?",
    "resposta": "Paolo e Francesca",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Kiss_(Rodin_sculpture)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Kiss_(Rodin_sculpture)",
        "situacao": "ok",
        "texto": "The Kiss (French: Le Baiser) is an 1882 marble sculpture by the French sculptor Auguste Rodin.\n[…]\nThe sculpture, The Kiss, was originally titled Francesca da Rimini, as it depicts the 13th-century Italian noblewoman immortalised in Dante's Inferno (Circle 2, Canto 5) who falls in love with her husband Giovanni Malatesta's younger brother Paolo. Having fallen in love while reading the story of Lancelot and Guinevere, the couple are later discovered and killed by Francesca's husband. In the sculpture,  the book can be seen in Paolo's hand.\n[…]\nThe lovers' lips do not touch in the sculpture, creating further tension within the work, alluding to the potentiality of either the imminent murder of Francesca in her lovers arms or the act of lust itself (her hamartia), existing fleetingly before her infidelity.\n[…]\nWhen critics first saw the sculpture in 1887, they suggested the less specific title Le Baiser (The Kiss).\n[…]\nBefore creating the marble version of The Kiss, Rodin produced several smaller sculptures in plaster, terracotta and bronze.\n[…]\nA large numbers of bronze casts have been done of The Kiss. The Musée Rodin reports that the Barbedienne foundry alone produced 319. According to French law issued in 1978, only the first twelve can be called original editions.\n[…]\nLink to The Kiss on the official website of the Musée Rodin.\n[…]\nThe Kiss, Analysis and Critical Reception\n[…]\nAlighieri, Dante. Inferno, Canto V\n[…]\nRodin: The B. Gerald Cantor Collection, a full text exhibition catalog from The Metropolitan Museum of Art, which contains material on The Kiss\n[…]\nThe Kiss, on Ars Europae XIX, 8th of June 2025"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Beijo",
        "situacao": "ok",
        "texto": "O Beijo é uma escultura em mármore do artista realista Auguste Rodin que está atualmente no Museu Rodin (Musée Rodin), em Paris.\n[…]\nNa obra do escultor francês, o artista inspirou-se nos delírios amorosos vividos com Camille Claudel, sua assistente. Como muitos dos mais conhecidos trabalhos de Rodin, incluindo \"O Pensador\", o casal que se abraça retratado na escultura apareceu originalmente como parte de um grupo no trabalho de Rodin os \"Os Portões do Inferno\", encomendado por um planeado museu de arte em Paris.\n[…]\n\"O Beijo\" originalmente tinha o nome \"Francesca da Rimini\", pois descreve a nobre do século XIII italiano imortalizado no Inferno de Dante (Círculo 2, Canto 5) que se apaixona por Paolo, irmão mais novo do seu marido Giovanni Malatesta. Tendo-se apaixonado ao ler a história de Lancelot e Guinevere, o casal é descoberto e morto pelo marido de Francesca. Na escultura, o livro pode ser visto nas mãos de Paolo.\n[…]\nEm 1900, Rodin fez uma cópia para Perry Edward Warren, um excêntrico colecionador norte-americano que vivia em Lewes, no East Sussex, na Inglaterra, com sua colecção de antiguidades gregas e a sua amante, John Marshall. Depois de ver o beijo no Salon de Paris, o pintor William Rothenstein recomendou a Warren como uma possível aquisição, mas o O Beijo tinha sido encomendado pelo governo francês, e não estava disponível para venda.\n[…]\nUm grande número de bronze moldes foram feitos. O Musée Rodin relata que a \"Fundação Barbedienne\" sozinha produziu 319. De acordo com a lei francesa, decretada em 1978, apenas as primeiras doze podem ser chamadas de originais.\n[…]\nO Beijo no Musée Rodin, Paris, França",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Davi (Michelangelo)",
      "descricao": "Estátua de mármore de Michelangelo, de 1504."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário de versões que mostram o herói com a cabeça de Golias, o Davi de Michelangelo costuma ser visto em que momento da história?",
    "resposta": "Antes da luta com Golias",
    "fonte": [
      "https://en.wikipedia.org/wiki/David_(Michelangelo)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/David_(Michelangelo)",
        "situacao": "ok",
        "texto": "David is  a masterpiece of Italian Renaissance sculpture in marble created from 1501 to 1504 by Michelangelo. With a height of 5.17 metres (17 ft 0 in), the David was not only the first colossal marble statue made in the High Renaissance, but also the first since classical antiquity, setting a precedent for the 16th century and beyond.\n[…]\nPlans were being made by the Operai del Duomo for a statue of David long before Michelangelo's began his work on it, which lasted from 1501 to 1504. The statue's commission was made during a decisive period in the history of the Florentine republic established before the expulsion of the Medici. The advantages of democratic government never materialized, and internal circumstances grew worse as dangers from without increased.\n[…]\nA node of marble on the gigante that Michelangelo chiseled away before he began work on David in earnest has been interpreted by historians as a knot of drapery, based on the surmise that Agostino di Duccio's figure was intended to be clothed. Irving Lavin proposes that the node may have been a point, that is, a knob of marble left purposely by Agostino as a fixed reference for a mechanical transfer measuring off his statue from the model.\n[…]\nCoonin, Arnold Victor (2014). From Marble to Flesh: The Biography of Michelangelo's David. Florence: B'Gruppo. ISBN 978-88-97696-02-5.\n[…]\nHirst, Michael (2000), \"Michelangelo in Florence: David in 1503 and Hercules in 1506\", The Burlington Magazine, vol. 142, pp. 487–492\n[…]\nLevine, Saul (1974), \"The Location of Michelangelo's David: The Meeting of January 25, 1504\", The Art Bulletin, vol. 56, pp. 31–49\n[…]\nSeymour, Jr., Charles (1967). Michelangelo's David: A Search for Identity. Mellon Studies in the Humanities. Pittsburgh: University of Pittsburgh Press.\n[…]\nThe Digital Michelangelo Project, Stanford University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/David_%28Michelangelo%29",
        "situacao": "ok",
        "texto": "David ou Davi é uma das esculturas mais famosas do artista renascentista Michelangelo. O trabalho retrata o herói bíblico com realismo anatômico impressionante, sendo considerada uma das mais importantes obras do Renascimento. A escultura encontra-se em Florença, Itália, cidade que originalmente encomendou a obra.\n[…]\nSua ligação com o projeto teve fim, por razões desconhecidas, com a morte de Donatello em 1466, sendo que mais de uma década após, Antonio Rossellino seria contratado para substituí-lo.\n[…]\nMichelangelo é considerado nesta obra uma espécie de inovador, pois retrata o personagem não após a batalha contra Golias (como Donatello e Verrochio antes dele fizeram), mas no momento imediatamente anterior a ela, quando David está apenas se preparando para enfrentar uma força que todos julgavam ser impossível de derrotar. Michelangelo neste trabalho usou o realismo do corpo nu e o predomínio das linhas curvas.\n[…]\nA postura de David, de Michelangelo, difere em muito das representações renascentistas do personagem. As esculturas em bronze de Donatello e Verrocchio representam o herói bíblico em postura arrojada e vitoriosa sobre ou portando a cabeça de Golias. Uma pintura de Andrea del Castagno, inclusive, retrata o jovem Davi em postura titubeante com a cabeça de Golias aos seus pés. Entretanto, nenhum outro artista florentino havia retratado o personagem sem a presença de seu algoz.\n[…]\nDe acordo com Helen Gardner e outros historiadores, David é representado nos instantes anteriores à sua mítica batalha contra Golias. Ao invés de ser demonstrado vitorioso sobre um oponente muito superior, Davi é retratado por Michelangelo tomado de tensão antes de seu confronto decisivo.\n[…]\nO contrapposto é enfatizado pela direção da cabeça à esquerda e pelas posições contrastantes dos braços.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Exército de Terracota",
      "descricao": "Conjunto de milhares de estatuetas de soldados de barro enterradas junto ao mausoléu de Qin Shi Huang, em Xian."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hoje com a cor do barro, os guerreiros de terracota de Xian tinham que aparência quando foram feitos?",
    "resposta": "Eram pintados com cores vivas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Terracotta_Army"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Terracotta_Army",
        "situacao": "ok",
        "texto": "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE in his mausoleum with the purpose of protecting him in his afterlife.\n[…]\nBetween 15 June and 17 September 2006 the exhibition entitled \"Los Guerreros de Terracota: Un Ejercito Inmortal\" (\"The Terracotta Warriors: An Immortal Army\"), composed of 73 objects, were displayed at the National Museum of Colombia in Bogotá.\n[…]\nIn Italy, from July 2008 to 16 November 2008, five of the warriors of the terracotta army were displayed in Turin at the Museum of Antiquities, and from 16 April 2010 to 5 September 2010 nine statues including officials, lancers and an archer were displayed at the Royal Palace in Milan at the exhibition entitled \"The Two Empires\".\n[…]\nSeveral Terracotta Army figures were on display, along with many other objects, in an exhibit entitled \"Age of Empires: Chinese Art of the Qin and Han Dynasties\" at The Metropolitan Museum of Art in New York City from 3 April 2017 to 16 July 2017.\n[…]\nAn exhibition featuring ten Terracotta Army figures and other artifacts, \"Terracotta Warriors of the First Emperor,\" was on display at the Pacific Science Center in Seattle, Washington, from 8 April 2017 to 4 September 2017 before traveling to The Franklin Institute in Philadelphia, Pennsylvania, to be exhibited from 30 September 2017 to 4 March 2018 with the addition of augmented reality.\n[…]\nPortal, Jane (2007). The First Emperor: China's Terracotta Army. Cambridge: Harvard University Press. ISBN 978-0-674-02697-1.\n[…]\nPeople's Daily article on the Terracotta Army\n[…]\nEmperor's Ghost Army PBS Nova\n[…]\nChina's Terracotta Warriors Documentary produced by the PBS Series Secrets of the Dead"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ex%C3%A9rcito_de_terracota",
        "situacao": "ok",
        "texto": "Exército de terracota, Guerreiros de Xian ou ainda Exército do imperador Qin, é uma coleção de esculturas de terracota representando os exércitos de Qin Shi Huang, o primeiro imperador da China. É uma forma de arte funerária enterrada com o imperador em 210-209 a.C. e cuja finalidade era proteger o governante chinês em sua vida após a morte.\n[…]\nOs soldados variam em altura de acordo com suas funções, sendo os generais os mais altos. As estátuas incluem guerreiros, carruagens e cavalos. Estimativas atuais são de que nos três poços que contêm o Exército de Terracota, havia mais de oito mil soldados, 130 carruagens com 520 cavalos e 150 soldados de cavalaria, a maioria dos quais ainda estão enterrados nas covas nas proximidades Mausoléu de Qin Shihuang‎.\n[…]\nAlgumas figuras de terracota possuíam marcas produzidas de diferente maneiras (gravadas, pintadas e carimbadas), contendo certos padrões de informações como nome de lugares, de artesãos e de oficinas; e sequências de números. Essas marcas, principalmente as envolvendo nome de lugares citavam outras cidades além de Xi'an como Xianyang, Yueyang, Linjin e Anyi.\n[…]\nApesar do incêndio, muitos dos guerreiros de Xian sobreviveram em vários estágios de preservação, cercados pelos restos das estruturas queimadas.[carece de fontes]?\n[…]\nOs guerreiros de Xian são hoje um fenomenal sítio arqueológico e um ícone do passado distante da China. O poderio do primeiro imperador Qin Shihuang  é evidente na massiva e monumental presença de seus soldados, eternamente prontos a proteger seu líder.[carece de fontes]?\n[…]\n(em inglês) Ledderose, Lothar. \"A Magic Army for the Emperor.\" from \"Ten Thousand Things : Module and Mass Production in Chinese Art\" ed. Lothar Ledderose, (Princeton UP, 2000): 51-73.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Torre de Belém",
      "descricao": "Torre fortificada manuelina do início do século dezesseis, na margem do rio Tejo, em Lisboa."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Hoje cartão-postal de Lisboa, a Torre de Belém foi erguida no início do século dezesseis com que função principal?",
    "resposta": "Defender a entrada do Tejo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower",
        "situacao": "ok",
        "texto": "Belém Tower (Portuguese: Torre de Belém, pronounced [ˈtoʁɨ ðɨ βɨˈlɐ̃j]; literally: Bethlehem Tower), officially the Tower of Saint Vincent (Portuguese: Torre de São Vicente), is a 16th-century fortification located in Lisbon, Portugal, which served as a point of embarkation and disembarkation for Portuguese explorers and as a ceremonial gateway to Lisbon. The tower symbolizes Portugal's maritime a\n[…]\nIn 1571, Francisco de Holanda advised the monarch that it was necessary to improve the coastal defences in order to protect the kingdom's capital. He suggested the construction of a \"strong and impregnable\" fort that could easily defend Lisbon and that the Belém Tower \"should be strengthened, repaired and completed...that it has cost so much without being completed\". D'Holanda designed an improved rectangular bastion with several turrets.\n[…]\nIn 1589, Philip I of Portugal ordered Italian engineer Friar João Vicenzio Casale to build a well-defended fort to be constructed in place of the \"useless castle of São Vicente\". The engineer submitted three designs, proposing that the bastion would be surrounded by another bastion of greater dimensions, but the project never materialized.\n[…]\nThe Belém Tower was built from a beige-white limestone local to the Lisbon area and thereabouts called Lioz. The building is divided into two parts: the bastion and the four-story tower located on the north side of the bastion.\n[…]\nThe 16th-century tower is considered one of the principal works of the Portuguese Late Gothic Manueline style. This is especially apparent in its elaborate rib vaulting, crosses of the Order of Christ, armillary spheres and twisted rope, common to the nautically inspired organic Manueline style.\n[…]\nThe Tower of Belém on Google Arts & Culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Bel%C3%A9m",
        "situacao": "ok",
        "texto": "A Torre de Belém, antigamente Torre de São Vicente a Par de Belém, oficialmente Torre de São Vicente, é uma fortificação localizada na freguesia de Belém, Município e Distrito de Lisboa, em Portugal. Na margem direita do rio Tejo, onde existiu outrora a praia de Belém, era primitivamente cercada pelas águas em todo o seu perímetro. Ao longo dos séculos foi envolvida pela praia, até se incorporar h\n[…]\nA Torre de São Vicente é um exemplo de transição entre a arquitetura da Idade Média e o Renascimento, de uma forma consonante aliada à boa maneira Manuelina, a massa de uma recuada torre quadrangular de índole medieval, com aproximadamente trinta metros de altura, num corpo avançado de \"embasamento\" e base, reforçando a horizontalidade e abraçando a forma hexagonal irregular, com quarenta metros de comprimento, orientados para sul e para o Tejo, visando desarmar com as suas baterias de fogo, colocadas no baluarte \"acasamatado\", qualquer tentativa de assalto por via marítima.\n[…]\nOriginalmente sob a invocação de São Vicente de Saragoça, padroeiro da cidade de Lisboa, designada no século XVI pelo nome de Baluarte de São Vicente a par de Belém e por Baluarte do Restelo, esta fortificação integrava o plano defensivo da barra do rio Tejo projetado à época de D. João II (1481-95), integrado na margem direita do rio pelo Baluarte de Cascais e, na esquerda, pelo Baluarte da Caparica.\n[…]\n\"E assim mandou fazer então a (…) torre e baluarte de Caparica, defronte de Belém, em que estava muita e grande artilharia; e tinha ordenado de fazer uma forte fortaleza onde ora está a formosa torre de Belém, que el-Rei D. Manuel, que santa glória haja, mandou fazer; para que a fortaleza de uma parte e a torre da outra tolhessem a entrada do rio.\n[…]\nPalácio Nacional de Belém\n[…]\nTorre de São Vicente / Torre de Belém na base de dados SIPA da Direção-Geral do Património Cultural\n[…]\n«A Torre de Belém em panoramas 360°»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Teatro Amazonas",
      "descricao": "Teatro de ópera de Manaus, inaugurado em 1896, no auge do ciclo da borracha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1896, no auge da borracha, o Teatro Amazonas, em Manaus, tem a cúpula coberta de telhas pintadas com as cores de quê?",
    "resposta": "Da bandeira do Brasil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amazon_Theatre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_Theatre",
        "situacao": "ok",
        "texto": "The Amazon Theatre (Portuguese: Teatro Amazonas) is an opera house located in Manaus, Brazil, in the heart of the Amazon rainforest. It is the location of the annual Festival Amazonas de Ópera (Amazonas Opera Festival) and the home of the Amazonas Philharmonic Orchestra which regularly rehearses and performs at the Amazon Theatre along with choirs, musical concerts and other performances.\n[…]\nThe Amazonas Theatre was built during the Belle Époque at a time when fortunes were made in the rubber boom. Construction of the Amazon Theatre was first proposed in 1881 by a member of the local House of Representatives, Antonio Jose Fernandes Júnior, who envisioned a \"jewel\" in the heart of the Amazon rainforest.\n[…]\nBy 1895, when the masonry work and exterior were completed, the decoration of the interior and the installation of electric lighting could begin more rapidly. The theatre was inaugurated on December 31, 1896, with the first performance occurring on January 7, 1897, with the Italian opera, La Gioconda, by Amilcare Ponchielli.\n[…]\nIt is featured twice in novels by Eva Ibbotson: Journey to the River Sea and A Company of Swans. Both are adventure stories set principally in the city of Manaus (where the theatre is situated) and surroundings in 1912. In the former (children's) book a visiting acting group performs the play, Little Lord Fauntleroy at the theatre, which is briefly described.\n[…]\nThe theatre is mentioned in Daniel Catán's 1996 opera \"Florencia en el Amazonas\" as the location where the titular opera singer Florencia Grimaldi is traveling to give a concert.\n[…]\nHistory of Manaus, for the development of the city during the Amazon rubber boom\n[…]\nTeatro da Paz, another major 19th-century opera house in the Brazilian Amazon\n[…]\nAmazon Theatre YouTube\n[…]\nAmazon Theatre Gallery of 19 photos of the Amazon Theatre by Jorge Vismara"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teatro_Amazonas",
        "situacao": "ok",
        "texto": "Teatro Amazonas é uma casa de ópera localizada em Manaus, no estado do Amazonas, sendo o principal cartão-postal da cidade. Situado no Largo de São Sebastião, no Centro Histórico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da época, que idealizava a cidade à altura dos grandes centros culturais. É amplamente considerado como um dos mais belos teatros do mundo.\n[…]\nPor ser uma obra singular no Brasil e representar o apogeu de Manaus durante o ciclo da borracha, foi reconhecido como Patrimônio Mundial pela UNESCO em 2026.\n[…]\nO Teatro do Amazonas é o principal monumento cultural arquitetônico do Estado e foi tombado como patrimônio histórico em 28 de novembro de 1966. O edifício, que tem capacidade para 701 pessoas, foi restaurado em 1975 pelo governo de Enoque da Silva Reis. Atualmente, o teatro abriga o Festival Amazonas de Ópera, um dos maiores e mais conceituados eventos no contexto da música erudita brasileira.\n[…]\nÉ composta de 36 mil peças de escamas em cerâmica esmaltada e telhas vitrificadas, vindas da Alsácia, na França. Foi adquirida na Casa Koch Frères, em Paris. A pintura ornamental é da autoria de Lourenço Machado. O colorido original, em verde, azul e amarelo é uma analogia à exuberância da bandeira brasileira.\n[…]\nTombado como Patrimônio Histórico Nacional em 1966, o Teatro Amazonas preserva parte da arquitetura e decoração originais. O estilo arquitetônico é renascentista, com detalhes ecléticos. Na área externa, a famosa cúpula chama a atenção pela imponência, composta por 36 mil peças nas cores da bandeira brasileira, importadas da Alsácia, na França.\n[…]\nNa minissérie da teledramaturgia brasileira “Amazônia, de Galvez a Chico Mendes” de 2007, o teatro serviu como plano de fundo na primeira parte da minissérie para o cenário de Manaus do século XIX.\n[…]\n«Museu do Teatro Amazonas»\n[…]\n«Teatro Amazonas no Youtube»\n[…]\n«Viva Manaus»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Coliseu",
      "descricao": "Anfiteatro Flávio, o grande anfiteatro de Roma inaugurado no ano 80 depois de Cristo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O anfiteatro romano chamado oficialmente de Anfiteatro Flávio ganhou o nome popular de Coliseu provavelmente por causa de que obra que ficava ao lado?",
    "resposta": "Estátua gigante de Nero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Colosseum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Colosseum",
        "situacao": "ok",
        "texto": "The Colosseum ( KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world. Construction began under the Emperor Vespasian (r. 69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus \n[…]\nThe name Colosseum is believed to be derived from a colossal statue of Nero on the model of the Colossus of Rhodes. The giant bronze sculpture of Nero as a solar deity was moved to its position beside the amphitheatre by the emperor Hadrian (r. 117–138). The word colosseum is a neuter Latin noun formed from the adjective colosseus, meaning \"gigantic\" or \"colossean\". By the year 1000 the Latin name \"Colosseum\" had been coined to refer to the amphitheatre from the nearby \"Colossus Solis\".\n[…]\nHe built the grandiose Domus Aurea on the site, in front of which he created an artificial lake surrounded by pavilions, gardens and porticoes. The existing Aqua Claudia aqueduct was extended to supply water to the area and the gigantic bronze Colossus of Nero was set up nearby at the entrance to the Domus Aurea.\n[…]\nAlthough the Colossus was preserved, much of the Domus Aurea was torn down. The lake was filled in and the land reused as the location for the new Flavian Amphitheatre. Gladiatorial schools and other support buildings were constructed nearby within the former grounds of the Domus Aurea. Vespasian's decision to build the Colosseum on the site of Nero's lake can be seen as a populist gesture of returning to the people an area of the city which Nero had appropriated for his own use.\n[…]\nThe Los Angeles Memorial Coliseum entrance was inspired by the Colosseum.\n[…]\nNero Burning ROM's logo is inspired by the colosseum.\n[…]\n3D model of the past and present of the colosseum – The Only Progress is Human"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coliseu",
        "situacao": "ok",
        "texto": "Coliseu (em italiano:  Colosseo), também conhecido como Anfiteatro Flaviano (em latim: Amphitheatrum Flavium; em italiano:  Anfiteatro Flavio), é um anfiteatro oval localizado no centro da cidade de Roma, capital da Itália. Construído com tijolos revestidos de argamassa e areia, e originalmente cobertos com travertino é o maior anfiteatro já construído e está situado a leste do Fórum Romano.\n[…]\nO nome Anfiteatro Flavio é empregado ainda hoje, embora seja mais popularmente conhecido como Coliseu de Roma.\n[…]\nA sua designação de \"Coliseu\" começou a difundir-se a partir do século VIII, o qual se crê que tenha sido devido a uma grande estátua de Nero, que se encontrava perto do edifício, na Casa Dourada, conhecida popularmente como o Colosso de Nero. Este fato pode ter sido a razão pela qual o anfiteatro de Roma tenha adoptado o nome de Coliseu. Essa dita estátua foi destruída provavelmente para reciclagem do seu bronze.\n[…]\nA construção começou sob ordem de Vespasiano numa área que se encontrava no fundo de um vale entre as colinas de Célio, Esquilino e Palatino. O lugar fora devastado pelo Grande incêndio de Roma do ano 64, durante a época de governo do imperador Nero, e mais tarde havia sido reurbanizado para o prazer pessoal do imperador com a construção de um enorme lago artificial, da Casa Dourada (em latim: Domus Aurea), situada num complexo de uma villa, e de uma colossal estátua de si mesmo.\n[…]\nDrenou-se o lago e o lugar foi designado para o Coliseu. Reclamando a terra da qual Nero se apropriou para o seu anfiteatro, Vespasiano conseguiu dois objectivos: por um lado realizava um gesto muito popular e por outro colocava um símbolo do seu poder no coração da cidade. Mais tarde foram construídos uma escola de gladiadores e outros edifícios de apoio dentro das antigas terras da Casa Dourada, a maior parte da qual havia sido derrubada.\n[…]\nTour virtual do Coliseu\n[…]\nEstrutura do Coliseu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Farol de Alexandria",
      "descricao": "Torre de sinalização erguida na ilha de Faros, no porto de Alexandria, no Egito, uma das sete maravilhas do mundo antigo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que maravilha do mundo antigo, erguida numa ilha de um porto egípcio, teve o nome transformado na palavra para as torres que orientam navios?",
    "resposta": "Farol de Alexandria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria",
        "situacao": "ok",
        "texto": "The Pharos of Alexandria was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). It has been estimated to have been at least 100 metres (330 ft) in overall height. One of the Seven Wonders of the Ancient World, for many centuries it was one of the world's tallest man-made structures.\n[…]\nThe etymology of \"Pharos\" is uncertain. The word became generalised in modern Greek to mean \"lighthouse\" (φάρος 'fáros'), and was borrowed by many Romance languages such as Catalan or Romanian (far), French (phare), Italian and Spanish (faro) – and thence into Esperanto (faro), and Portuguese (farol), and even some Slavic languages like Bulgarian (far). In French, Portuguese, Spanish, Turkish, Serbian, Bulgarian and Russian, a derived word means \"headlight\" (phare, farol, faro, far, фар, фара).\n[…]\nThe George Washington Masonic National Memorial, in Alexandria, Virginia, is fashioned after the ancient Lighthouse.\n[…]\nTower of Hercules, a Roman lighthouse in Spain\n[…]\nChugg, Andrew Michael (2024). The Pharos Lighthouse In Alexandria – Second Sun and Seventh Wonder of Antiquity. Routledge.\n[…]\nClarie, Thomas C. (2009). Pharos – A Lighthouse For Alexandria. Back Channel. ISBN 978-1-934-58212-1.\n[…]\nLevi-Provençal, Évariste (1935). Une Description Arabe Inédite du Phare d'Alexandrie,(An Unpublished Description of the Lighthouse of Alexandria), extract from Mémoires de l'Institut Francais. unpublished.\n[…]\nHiggins, Michael Denis (2023). \"A Reverse History of the Pharos Lighthouse of Alexandria: From the Underwater Remains to the First Structure\". The Ancient Near East Today. 11 (10).\n[…]\nLighthouse of Alexandria—World History Encyclopedia\n[…]\nDescription of Alexandria and the Pharos in the Zhu fan zhi\n[…]\nA frightening vision: on plans to rebuild the Alexandria Lighthouse (Archived June 12, 2018, at the Wayback Machine)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Farol_de_Alexandria",
        "situacao": "ok",
        "texto": "Farol de Alexandria (em grego:  ὁ Φάρος της Ἀλεξανδρείας) foi um farol construído pelo Reino Ptolomaico entre 280 e 247 a.C. na cidade de Alexandria. Ele tinha entre 120 e 137 metros de altura e era uma das sete maravilhas do mundo antigo, sendo que por muitos séculos foi uma das estruturas mais altas no mundo. Danificado por três terremotos entre os anos de 956 e 1323, tornou-se uma ruína abandon\n[…]\nAté 1480, era a terceira maravilha antiga sobrevivente (depois do Mausoléu de Halicarnasso e da Grande Pirâmide de Gizé), quando então a última de suas pedras remanescentes foi usada para construir a Cidadela de Qaitbay no mesmo local. Em 1994, os arqueólogos franceses descobriram parte dos restos do farol no Porto Oriental de Alexandria.\n[…]\nO farol foi construído no século III a.C. Depois que Alexandre, o Grande morreu de uma febre aos 32 anos, o primeiro Ptolomeu (Ptolemeu I Sóter) anunciou-se rei em 305 a.C. e comissionou a sua construção pouco depois. O edifício foi terminado durante o reinado de seu filho, o segundo Ptolomeu (Ptolemeu II Filadelfo). Levou doze anos para completar, com um custo total de 800 talentos e serviu como um protótipo para todos os faróis posteriores no mundo.\n[…]\nMoedas romanas encontrado no mosteiro alexandrino mostram que uma estátua de um Tritão ficava posicionada em cada um dos quatro cantos do edifício. Uma estátua de Poseidon ou de Zeus ficava no topo do farol. Os blocos de alvenaria do Faros estavam interligados, selados com chumbo derretido, para resistir às ondas do mar.\n[…]\nNo final de 1994, arqueólogos gregos liderados por Jean-Yves Empereur redescobriram os restos físicos do farol no piso do Porto Oriental de Alexandria. Alguns destes restos foram trazidos acima e ficaram em exposição pública até o fim de 1995. Subsequentes imagens de satélite revelaram mais vestígios. É possível mergulhar e ver as ruínas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, construída no início do século dezessete em Istambul, na Turquia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em Istambul, a Mesquita do Sultão Ahmed é chamada de Mesquita Azul por causa de que revestimento do seu interior?",
    "resposta": "Azulejos pintados à mão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nIn the end, the mosque's grandeur, its luxurious decoration, and the elaborate public ceremonies that Ahmed I organized to celebrate the project appear to have swayed public opinion and overcome the initial controversy over its construction. It became one of the most popular mosques in the city. The mosque has left a major mark on the city and has given its name to the surrounding neighbourhood, now known as Sultanahmet.\n[…]\nSome of it was a gift from the Signoria of Venice, following a request from Ahmed I in 1610. Most of these original windows have been lost and since replaced with less elaborate modern windows. The modern windows probably make the mosque's interior today brighter than the original stained glass windows would have.\n[…]\nAs in most major Ottoman religious foundations, the Sultan Ahmed Mosque is the main element of a larger complex of buildings. Unlike in previous imperial mosque complexes, the other structures of this complex are not arranged in a regular, well-organized plan around the mosque. Because the mosque was built next to the Hippodrome, the site created difficulties for a planned complex and the auxiliary buildings were instead placed in various locations near the mosque or around the Hippodrome.\n[…]\nThe tomb is fronted by a portico with three arches. Inside are the tombs of Sultan Ahmed I and some of his family, including his wife Kösem and four of his sons, Sultan Osman II, Sultan Murad IV (r. 1623–1640), Şehzade Mehmed (d. 1621) and Şehzade Bayezid (d. 1635)."
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
    "indice": 31,
    "ancora": {
      "nome": "Casa Batlló",
      "descricao": "Edifício residencial remodelado por Antoni Gaudí no Passeig de Gràcia, em Barcelona, entre 1904 e 1906."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Pelas formas de suas varandas e colunas, a Casa Batlló, de Gaudí, em Barcelona, ganhou que apelido popular?",
    "resposta": "Casa dos Ossos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Casa_Batll%C3%B3"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Casa_Batll%C3%B3",
        "situacao": "ok",
        "texto": "Casa Batlló (Catalan pronunciation: [ˈkazə βəˈʎːo] ) is a building in the center of Barcelona, Spain. It was designed by Antoni Gaudí, and is considered one of his masterpieces. A remodel of a previously built house, it was redesigned in 1904 by Gaudí (although the actual construction had not begun at this point) and has been refurbished several times since. Gaudí's assistants Domènec Sugrañes i G\n[…]\nThe building that is now Casa Batlló was built in 1877. Commissioned by Lluís Sala Sánchez, it was designed by Emili Sala Cortés, one of Gaudí's professors at Escuela Técnica Superior de Arquitectura de Barcelona. Cortés's building was a classical building without remarkable characteristics within the eclecticism traditional in the late 19th century. The building had a basement, a ground floor, four other floors, and a garden in the back.\n[…]\nThe local name for the building is Casa dels ossos (House of Bones), as its biomorphic aesthetic has a skeletal quality. Like everything Gaudí designed, Casa Batlló can only be considered Modernisme or Art Nouveau in the broadest sense. The ground floor is especially striking, with tracery, irregular oval windows, and flowing sculpted stone work.\n[…]\nIn 2002, as part of the celebration of the International Year of Gaudí, the house opened its doors to the public and people were allowed to visit the noble floor. Casa Batlló proved immensely popular, and visitors were eager to see the rest of the house. Two years later, in celebration of the one hundredth anniversary of the beginning of work on Casa Batlló, the fifth floor was restored and the house extended public access to the loft and the well.\n[…]\nLahuerta, Juan José (2001), Casa Batlló, Barcelona, Gaudí, Pere Vivas i Ricard Pla, photographer, Triangle Postals, ISBN 978-84-8478-025-0, retrieved 7 March 2012\n[…]\nCasa Batlló pictures at barcelona-tourist-guide.com\n[…]\nCasa Batllo at Gaudidesigner.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Casa_Batll%C3%B3",
        "situacao": "ok",
        "texto": "A Casa Batlló é um edifício modernista, mais precisamente modernista catalão, concebido pelo arquiteto Antoni Gaudí, auxiliado pelos arquitetos Josep Maria Jujol e Joan Rubió i Bellversituado, e que se situa no n.º 43 do Passeig de Grácia, na chamada Ilha da Discórdia, um bairro modernista da cidade de Barcelona. O imóvel foi encomendado por Josep Batlló Casanovas, industrial do setor têxtil. O ed\n[…]\nNesta parte inferior da fachada, as formas dos espaços vazios são curvas e a pedra parece ter a forma de lábios, dando ao conjunto o aspecto de uma enorme boca aberta, que valeu à casa o apelido de Casa dels badalls, « casa dos bocejos ». Outros nomes que a casa ganhou como apelido foram: casa dos crânios, casa dos ossos, e casa das máscaras.\n[…]\nA distribuição dos apartamentos da Casa Batlló, possuíam janelas para duas fachadas, de modo à se beneficiarem de uma ventilação cruzada. Gaudí adicionou a este dispositivo (que já era típico dos prédios de Barcelona, para amenizar o forte calor de verão) um sistema de abertura suplementar, localizado abaixo das janelas abertas no vão central, para aproveitar da entrada de ar fresco e das brisas noturnas de verão, como uma espécie de ar condicionado primitivo.\n[…]\nAs colunas da galeria do andar principal possuem também formas de ossos, contendo plantas carnívoras no centro de suas articulações. Gaudí faz aqui uma alusão á regeneração contínua da criação.\n[…]\nMais tarde ocorre uma nova guinada no seu estilo, de 1890 a 1899, em direção às formas curvas e assimétricas do modernismo, rompendo definitivamente com o estilo Pompadour então em moda. Gaudi já havia projetado os móveis da Casa Calvet, mas, para a mobília da Casa Batlló, a decoração cede espaço ao orgânico, e as formas evocam seres vivos.\n[…]\nAntoni Gaudí\n[…]\nBarcelona",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Barroco",
      "descricao": "Estilo artístico e arquitetônico europeu dos séculos dezessete e dezoito, marcado pelo movimento, contraste e ornamentação."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segundo a explicação mais aceita, a palavra barroco vem do português e designava originalmente que objeto imperfeito?",
    "resposta": "Pérola irregular",
    "distratores": [
      "Concha quebrada",
      "Vaso trincado",
      "Moeda torta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baroque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baroque",
        "situacao": "ok",
        "texto": "The Baroque (UK:  bə-ROK, US:  bə-ROHK, French: [baʁɔk]) is a Western style of architecture, music, dance, painting, sculpture, poetry, and other arts that flourished from the early 1600s until the 1750s. It followed Renaissance art and Mannerism and preceded the Rococo (in the past often referred to as \"late Baroque\") and Neoclassical styles.\n[…]\nThe English word baroque comes directly from the French. The French word originated the Portuguese term barroco 'a flawed pearl', pointing to the Latin verruca 'wart', or to a word with the Romance suffix -ǒccu (common in pre-Roman Iberia). Other sources suggest a Medieval Latin term used in logic, baroco, as the most likely source.\n[…]\nThe word baroque was also associated with irregular pearls before the 18th century. The French baroque and Portuguese barroco were terms often associated with jewelry. An example from 1531 uses the term to describe pearls in an inventory of Charles V of France's treasures.\n[…]\nLater, the word appears in a 1694 edition of Le Dictionnaire de l'Académie Française, which describes baroque as \"only used for pearls that are imperfectly round.\" A 1728 Portuguese dictionary similarly describes barroco as relating to a \"coarse and uneven pearl\".\n[…]\nPorto is the city of Baroque in Portugal. Its historical centre is part of UNESCO World Heritage List.\n[…]\nAt the end of the interwar period, with the rise in popularity of the International Style, characterized by the complete lack of any ornamentation led to the complete abandonment of influence and revivals of the Baroque. Multiple International Style architects and designers, but also Modernist artists criticized Baroque for its extravagance and what they saw as \"excess\". Ironically this was just at the same time as the critical appreciation of the original Baroque was reviving strongly.\n[…]\nThe baroque and rococo culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barroco",
        "situacao": "ok",
        "texto": "Barroco é o estilo artístico que floresceu entre o final do século XVI e meados do século XVIII, inicialmente na Itália, difundindo-se em seguida pelos países católicos da Europa e da América, antes de atingir, em uma forma modificada, as áreas protestantes e alguns pontos do Oriente.\n[…]\nNeste período a doutrina acadêmica atingiu o auge de seu rigor, abrangência, uniformidade, formalismo e explicitude, e segundo Barasch em nenhum outro momento da história da teoria da arte a ideia de Perfeição foi mais intensamente cultivada como o mais alto objetivo do artista, tendo como modelo máximo a produção da Alta Renascença italiana, daí que no caso francês o Barroco sempre permaneceu mais ou menos afiliado à tradição clássica.\n[…]\nUsualmente, considera-se que o termo \"barroco\" originalmente significaria \"pérola irregular ou imperfeita\", um termo cuja origem é obscura, pode derivar do português antigo, do espanhol, do francês ou do árabe. Segundo outras opiniões, porém, o termo tem origem em uma fórmula mnemotécnica usada pelos escolásticos para designar um dos modos do silogismo, o que daria ao termo um sentido pejorativo de raciocínio estranho, tortuoso, que confunde o falso com o verdadeiro.\n[…]\nA palavra rapidamente ganhou circulação nas línguas francesa e italiana, mas nas artes plásticas só foi usada no fim do período em questão, quando novos classicistas começaram a criticar excessos e irregularidades de um estilo já então visto como decadente e uma simples degeneração dos princípios clássicos.\n[…]\nSegundo Hauser, a tendência barroca de substituir o absoluto pelo relativo, a limitação pela liberdade, é expressa mais nitidamente no uso de formas abertas.\n[…]\nMas talvez os mais notáveis representantes sejam os espanhóis José de Ribera, Francisco Ribalta e Francisco de Zurbarán.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Arquitetura gótica",
      "descricao": "Estilo arquitetônico europeu da Baixa Idade Média, das catedrais com arcos ogivais, vitrais e arcobotantes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os renascentistas deram ao estilo das catedrais medievais um nome pejorativo, que lembrava um povo considerado bárbaro. Que povo era esse?",
    "resposta": "Godos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gothic_architecture"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gothic_architecture",
        "situacao": "ok",
        "texto": "Gothic architecture is an architectural style that was prevalent in Europe from the late 12th to the 16th century, during the High and Late Middle Ages, surviving into the 17th and 18th centuries in some areas. It evolved from Romanesque architecture and was succeeded by Renaissance architecture. The style is characterised by pointed arches, rib vaults, flying buttresses and large, traceried stain\n[…]\nThe term \"Gothic architecture\" originated as a pejorative description. Giorgio Vasari used the term \"barbarous German style\" in his Lives of the Artists (1550) to describe what is now considered the Gothic style, and in the introduction to the Lives he attributes various architectural features to the Goths, whom he held responsible for destroying the ancient buildings after they conquered Rome, and for erecting new ones in this style.\n[…]\nSimilarities have also been observed between early medieval Armenian buildings (such as the Cathedral of Ani) and Gothic churches, including pointed arches and clustered piers. However, Armenian architecture is not widely considered to be a major influence on Gothic architecture. The proposed “proto-Gothic” character of the ogival arches of the cathedral of Ani has also been questioned, as these arches do not serve the same function in supporting the vault.\n[…]\nIn the 16th century, as Renaissance architecture from Italy began to appear in France and other countries in Europe. The Gothic style began to be described as outdated, ugly and even barbaric. The term \"Gothic\" was first used as a pejorative description. Giorgio Vasari used the term \"barbarous German style\" in his 1550 Lives of the Artists to describe what is now considered the Gothic style.\n[…]\nSimson, Otto Georg (1988). The Gothic cathedral: origins of Gothic architecture and the medieval concept of order. Princeton Univ. P. ISBN 978-0-691-09959-0.\n[…]\nGothic Architecture—Encyclopædia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arquitetura_g%C3%B3tica",
        "situacao": "ok",
        "texto": "A arquitetura gótica é um estilo arquitetónico que, precedida pela arquitetura românica e sucedida pela arquitetura renascentista, teve origem na primeira metade do século XII na Europa Ocidental, a partir da França do Norte e, mais particularmente, do centro dessa região — o domínio real delimitado pelos rios Sena, Marne, Aisne e Oise —, que se chamava a Francia propriamente dita e, mais tarde, Î\n[…]\nO termo \"gótico\" foi, de resto, cunhado precisamente durante o Renascimento italiano por artistas e historiadores como Giorgio Vasari, que utilizavam a expressão de forma pejorativa para classificar a arte medieval como \"bárbara\" ou própria dos Godos (ou chamada por alguns na Itália de \"alemã\").\n[…]\nA associação do termo \"gótico\" aos Godos resultou de interpretações posteriores desenvolvidas durante a Renascença, quando autores italianos empregaram a designação de forma pejorativa para caracterizar a arquitetura medieval como uma arte \"bárbara\", atribuindo-a simbolicamente aos povos germânicos responsáveis pela queda do Império Romano do Ocidente.\n[…]\nGiorgio Vasari foi um dos que utilizou a expressão em 1530 (além de \"maneira bárbara alemã\" na sua Le vite de' più eccellenti pittori, scultori e architettori, 1550) para descrever aquilo que hoje é considerado o estilo gótico, e, na introdução das Vidas, atribui diversas características arquitetónicas aos Godos, que considerava responsáveis pela destruição dos edifícios antigos após o saque de Roma, bem como pela construção de novos edifícios neste estilo, fruto do esquecimento das técnicas e dos cânones estéticos greco-romanos.\n[…]\nNo século XVI, à medida que a arquitetura renascentista vinda da Itália começava a aparecer na França e em outros países da Europa, o estilo gótico passou a ser descrito como ultrapassado, feio e até bárbaro, por autores como Giorgio Vasari.\n[…]\nMedievalismo\n[…]\nArquitetura de catedrais e grandes igrejas\n[…]\nEstilo arquitetônico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Estátua da Liberdade",
      "descricao": "Estátua colossal de cobre na ilha da Liberdade, em Nova York, presente da França aos Estados Unidos, inaugurada em 1886."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que engenheiro francês, autor de uma famosa torre de Paris, projetou a estrutura interna de ferro da Estátua da Liberdade?",
    "resposta": "Gustave Eiffel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Statue_of_Liberty"
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
        "texto": "Estátua da Liberdade (Liberdade Iluminando o Mundo; em francês: La Liberté éclairant le monde) é uma escultura neoclássica colossal na Ilha da Liberdade, no porto de Nova York, na cidade de Nova York, Estados Unidos. A estátua revestida de cobre, um presente do povo francês ao povo americano, foi projetada pelo escultor francês Frédéric Auguste Bartholdi e sua estrutura de metal foi construída por\n[…]\nA cabeça e o braço foram construídos com a ajuda de Viollet-le-Duc, que adoeceu em 1879. Ele morreu logo em seguida, sem deixar nenhuma indicação de como pretendia fazer a transição da pele de cobre para o seu proposto píer de alvenaria. No ano seguinte, Bartholdi conseguiu obter os serviços do inovador designer e construtor Gustave Eiffel. Eiffel e seu engenheiro estrutural, Maurice Koechlin, decidiram abandonar o píer e, em vez disso, construir uma torre de treliça de ferro.\n[…]\nNum processo de trabalho intensivo, cada sela teve de ser trabalhada individualmente. Para evitar a corrosão galvânica entre a pele de cobre e a estrutura de suporte de ferro, Eiffel isolou a pele com amianto impregnado com goma-laca.\n[…]\nO engenheiro civil imigrante norueguês Joachim Goschen Giæver projetou a estrutura da Estátua da Liberdade. Seu trabalho envolvia cálculos de projeto, desenhos detalhados de fabricação e construção, e supervisão da construção. Ao concluir sua engenharia para a estrutura da estátua, Giæver trabalhou a partir de desenhos e esboços produzidos por Gustave Eiffel.\n[…]\nToda a armadura de ferro projetada por Gustave Eiffel foi substituída. As barras de aço inoxidável de baixo carbono e resistentes à corrosão que agora seguram os grampos próximos à pele são feitas de ferralium, uma liga que se curva ligeiramente e retorna à sua forma original conforme a estátua se move. Para evitar que o raio e o braço fizessem contato, o raio foi realinhado em vários graus.\n[…]\nLista de estátuas por altura",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Edifício Chrysler",
      "descricao": "Arranha-céu de Manhattan, em Nova York, concluído em 1930, com coroa de arcos de aço inoxidável."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Edifício Chrysler, em Nova York, e o Cristo Redentor, no Rio, ambos do início dos anos trinta, são ícones de que estilo?",
    "resposta": "Art déco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chrysler_Building",
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chrysler_Building",
        "situacao": "ok",
        "texto": "The Chrysler Building is a 1,046-foot-tall (319 m), Art Deco-style supertall skyscraper in the East Midtown neighborhood of Manhattan, New York City, United States. Located at the intersection of 42nd Street and Lexington Avenue, it is the tallest steel-framed brick building in the world. It was both the world's first supertall skyscraper and the world's tallest building for 11 months after its co\n[…]\nThe economic boom of the 1920s and speculation in the real estate market fostered a wave of new skyscraper projects in New York City. The Chrysler Building was built as part of an ongoing building boom that resulted in the city having the world's tallest building from 1908 to 1974. Following the end of World War I, European and American architects came to see simplified design as the epitome of the modern era and Art Deco skyscrapers as symbolizing progress, innovation, and modernity.\n[…]\nArchitectural critic Ada Louise Huxtable stated that the building had \"a wonderful, decorative, evocative aesthetic\", while Paul Goldberger noted the \"compressed, intense energy\" of the lobby, the \"magnificent\" elevators, and the \"magical\" view from the crown. Anthony W. Robins said the Chrysler Building was \"one-of-a-kind, staggering, romantic, soaring, the embodiment of 1920s skyscraper pizzazz, the great symbol of Art Deco New York\".\n[…]\nThe Chrysler Building is widely heralded as an Art Deco icon. Fodor's New York City 2010 described the building as being \"one of the great art deco masterpieces\" which \"wins many a New Yorker's vote for the city's most iconic and beloved skyscraper\". Frommer's states that the Chrysler was \"one of the most impressive Art Deco buildings ever constructed\". Insight Guides' 2016 edition maintains that the Chrysler Building is considered among the city's \"most beautiful\" buildings.\n[…]\nList of tallest buildings in the United States\n[…]\nList of tallest buildings in New York City"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nThe statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca National Park overlooking the city of Rio de Janeiro. This statue is the largest Art Deco–style sculpture in the world. A symbol of Christianity around the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil and was voted one of the New 7 Wonders of the World.\n[…]\nCristo Redentor, Puerto Plata\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nCristo Redentor in Barranca Province, Lima Region, Peru\n[…]\nCristo Rei (Christ the King) in Almada (28 m, 92 ft)\n[…]\nCristo Rei, Madeira on Madeira island, completed in 1927 (15 m, 49 ft)\n[…]\nCristo del Otero in Palencia, built in 1930 (21 m, 69 ft)\n[…]\nCristo Rey by Urbici Soler in Sunland Park, New Mexico (8.83 m, 29.0 ft)\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nGiumbelli, Emerson & Bosisio, Izabella (2010). \"A Política de um Monumento: as Muitas Imagens do Cristo Redentor\". Debates do NER (in Portuguese). 2 (18): 173–192. doi:10.22456/1982-8136.17638. hdl:10183/187720. ISSN 1982-8136.\n[…]\nGiumbelli, Emerson (2013). \"O Cristo Pichado\". Ponto Urbe. Revista do Núcleo de Antropologia Urbana da USP (in Portuguese) (12). doi:10.4000/pontourbe.586. ISSN 1981-3341.\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chrysler_Building",
        "situacao": "ok",
        "texto": "O Chrysler Building (em português:  Edifício Chrysler) é um arranha-céu edificado em Nova Iorque, nos Estados Unidos, figurando, atualmente, como o terceiro edifício mais alto da cidade, o sétimo mais alto do país e o 60º maior do mundo, com 319 m (1 047 ft).\n[…]\nInaugurado em 1930, foi o edifício mais alto dos EUA e do mundo (superando a Torre Eiffel como a maior estrutura já construída, na época), quando foi inaugurado, porém, perdeu este título apenas um ano depois, para o Empire State Building, também em Nova Iorque. O sistema estrutural utilizado é a estrutura metálica. É também a estrutura de tijolos mais alta do mundo.\n[…]\nA construção teve início em 19 de setembro de 1928. No total cerca de 3 826 000 tijolos foram usados na construção. Mesmo antes de sua conclusão, o Edifício Chrysler já competia com outro prédio a ser construído em Manhattan, o The Trump Building projetado por H. Craig Severance. Craig Severance determinou uma altura maior para o seu projeto e mais tarde alegou que este seria o prédio mais alto do planeta (sem contar as estruturas não habitáveis).\n[…]\nO prédio foi concluído em 28 de maio de 1930, ultrapassando o seu rival, o The Trump Building, e a Torre Eiffel. Aberto ao público em 17 de maio de 1931, o Edifício Chrysler foi a primeira estrutura habitável a ultrapassar a altura de 1 000 ft (304,8 m), porém apenas um ano depois da sua conclusão, o Chrysler foi superado pelo arrojado Empire State Building. Embora tenha sido superado no seu recorde mundial, o Chrysler Building ainda é considerado a mais alta estrutura de tijolos do planeta.\n[…]\nMarcos históricos nacionais em Nova Iorque\n[…]\nMedia relacionados com Chrysler Building no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Sesc Pompeia",
      "descricao": "Centro cultural e esportivo instalado numa antiga fábrica no bairro da Pompeia, em São Paulo, projetado por Lina Bo Bardi."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O Sesc Pompeia, centro cultural numa antiga fábrica paulistana, e o MASP, na Avenida Paulista, foram projetados por que arquiteta?",
    "resposta": "Lina Bo Bardi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lina_Bo_Bardi",
      "https://pt.wikipedia.org/wiki/Lina_Bo_Bardi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lina_Bo_Bardi",
        "situacao": "ok",
        "texto": "Lina Bo Bardi, born Achillina Bo (5 December 1914 – 20 March 1992), was an Italian-born Brazilian modernist architect. A prolific architect and designer, she devoted her working life, most of it spent in Brazil, to promoting the social and cultural potential of architecture and design. While she studied under radical Italian architects, she quickly became intrigued with Brazilian vernacular design\n[…]\nSolar do Unhão is Salvador's main cultural center. It was founded by Lina Bo Bardi after an invitation by the governor of Bahia to direct a new art museum in the North East of Brazil. Bo Bardi wanted this museum to show primitive art from the North East of Brazil, as well as the practical nature of their designs. The design of the museum reflects the culture in Salvador, but also the practicality and beauty of the region.\n[…]\nThe Centro de Lazer Fábrica da Pompéia (now called the SESC Pompéia) was one of Bo Bardi's largest and most important projects, in addition to being an early example of adaptive reuse. The site was a former steel drum and refrigerator factory in São Paulo, and was to be redeveloped into a leisure and recreation center for the working class.\n[…]\nIn 1990, the Instituto Lina Bo Bardi e P.M. Bardi was established to promote the study of Brazilian culture and architecture. Bo Bardi died in 1992 in Sao Paulo, Brazil.\n[…]\nBiography at the Instituto Lina Bo e Pietro M. Bardi\n[…]\nVeikos, Cathrine. Lina Bo Bardi: The Theory of Architectural Practice (Routledge, Taylor & Francis, 2013) link\n[…]\nAnelli, Renato. “Bauhaus and Lina Bo Bardi: From the Modern Factory to the Pompeia Leisure Center.” Journal / International Working-Party for Documentation and Conservation of Buildings, Sites and Neighbourhoods of the Modern Movement, no. 61 (1 January 2019):\n[…]\n\"17 Lina Bo Bardi por escrito. Textos escogidos 1943–1991, de Lina Bo Bardi – ALIAS\" (in Mexican Spanish). Retrieved 5 March 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lina_Bo_Bardi",
        "situacao": "ok",
        "texto": "Achillina Bo, mais conhecida como Lina Bo Bardi, (Roma, 5 de dezembro de 1914 – São Paulo, 20 de março de 1992) foi uma arquiteta modernista ítalo-brasileira. Naturalizada no Brasil após a Segunda Guerra Mundial, ela se tornou uma das mais importantes arquitetas do país, conhecida por projetos como o complexo cultural Sesc Pompeia, em São Paulo, inaugurado em 1982, e o Museu de Arte de São Paulo (\n[…]\nOs Bardi tornam-se personagens constantes na vida intelectual do país, relacionando-se com personalidades diversas da cultura brasileira. Tendo conhecido Assis Chateaubriand neste período, Lina aceita o pedido do projeto da sede, um museu sugerido pelo jornalista. No final dos anos 1950, aceitando um convite de Diógenes Rebouças, vai para Salvador proferir uma série de palestras.\n[…]\nMobiliário de Lina Bo Bardi\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi. O que eu queria era ter história' (biografia em português). 2021. São Paulo: Companhia das Letras.\n[…]\nLIMA, Zeuler R. M. de A. La dea stanca. Vita di Lina Bo Bardi (biografia em italiano). 2021. Monza/Milão: Johan & Levi Editore.\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi. 2013 (monografia em inglês). New Haven: Yale University Press.\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi, Drawings (monografia em inglês). 2019. Princeton: Princeton University Press.\n[…]\nLIMA, Zeuler R. M. de A. Lina Bo Bardi dibuixa (catálogo de exposição). 2019. Barcelona: Fondació Joan Miro.\n[…]\nOLIVEIRA, Olivia de. Lina Bo Bardi: Obra Construída. Built Work. Fotografias Nelson Kon. 2014. Editora Gustavo Gili Brasil\n[…]\nOLIVEIRA, Olívia de. Lina Bo Bardi: sutis substâncias da arquitetura. 2006. Romano Guerra Editora, São Paulo. Editoral Gustavo Gili S.A., Barcelona.\n[…]\nRUBINO, Silvana (org.); GRINOVER, Marina (org.); Lina por escrito. Textos escolhidos de Lina Bo Bardi. Coleção Face Norte, volume 13, Cosac Naify, São Paulo; 1ª edição, 2009.\n[…]\n«Biografia - Lina Bo Bardi»\n[…]\n«Obras de design de Lina»"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Parque do Flamengo",
      "descricao": "Grande parque construído sobre aterro à beira da baía de Guanabara, no Rio de Janeiro, inaugurado nos anos 1960."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O paisagismo do Aterro do Flamengo e os mosaicos do calçadão de Copacabana, nos anos setenta, têm a assinatura de que paisagista?",
    "resposta": "Roberto Burle Marx",
    "fonte": [
      "https://en.wikipedia.org/wiki/Roberto_Burle_Marx",
      "https://en.wikipedia.org/wiki/Flamengo_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roberto_Burle_Marx",
        "situacao": "ok",
        "texto": "Roberto Burle Marx (August 4, 1909 – June 4, 1994) was a Brazilian landscape architect (as well as a painter, print maker, ecologist, naturalist, artist and musician) whose designs of parks and gardens made him world-famous. He is credited with having introduced modernist landscape architecture to Brazil. He was known as a modern nature artist and a public urban space designer. His work had a grea\n[…]\nRoberto Burle Marx founded a landscape studio in 1955 and in the same year he founded a landscape company, called Burle Marx & Cia. Ltda. He opened an office in Caracas, Venezuela in 1956 with landscape architects Fernando Tábora and John Godfrey William Stoddart to create Caracas' largest public park, the Parque del Este and started working with architects Jose Tabacow and Haruyoshi Ono in 1968.\n[…]\nAnita Berrizbeitia (2005). Roberto Burle Marx in Caracas: Parque del Este, 1956–1961. Penn Studies in Landscape Architecture, University of Pennsylvania Press.\n[…]\nVaccarino, R (2000), Roberto Burle Marx: Landscapes Reflected, Princeton Architectural Press with the Harvard University Graduate School of Design\n[…]\nRoberto Silva (2006). New Brazilian Gardens: the Legacy of Burle Marx. Thames & Hudson. ISBN 978-0-500-51286-9.\n[…]\nMarx, Roberto Burle; Cavalcanti, Lauro, eds. (2011). Roberto Burle Marx: The Modernity of Landscape. Actar, Barcelona. ISBN 978-84-92861-67-5. First English Language Edition.\n[…]\nGillian Mawrey (2001). \"Roberto Burle Marx\". Historic Gardens Review. {{cite journal}}: Cite journal requires |journal= (help)\n[…]\nIn 2014, Roberto Burle Marx was commemorated on his 20 year legacy reference: https://issuu.com/alejapv/docs/moderndesigners\n[…]\nRoberto Burle Marx, Encyclopædia Britannica, archived from the original on March 22, 2006.\n[…]\nSítio Roberto Burle Marx, BR: Maria Brazil. Tourist guide page with many pictures.\n[…]\nRoberto Burle Marx, Land Living, archived from the original on May 11, 2006."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flamengo_Park",
        "situacao": "ok",
        "texto": "Flamengo Park, also known as Aterro do Flamengo, Eduardo Gomes Park, and Aterro do Brigadeiro Eduardo Gomes, is the largest public park and recreation area within the city of Rio de Janeiro, in eastern Brazil, and the largest urban seaside park in the world. [1]\n[…]\nThe park is located along Guanabara Bay, in the Flamengo neighborhood of the city, between Downtown Rio and Copacabana.\n[…]\nFlamengo Park was envisioned by Lota de Macedo Soares, while conceived and designed by Affonso Eduardo Reidy with Modernist park gardens and civic landscapes designed by world-renowned landscape designer and artist Roberto Burle Marx. The 296 acres (120 ha) park was completed in 1965.\n[…]\nFlamengo Park is the location of the Rio de Janeiro Museum of Modern Art, the Carmen Miranda Museum, and the Monument to the Dead of World War II with Modernist memorial sculptures.\n[…]\nFlamengo Park has a strong sports tradition, with many different outdoor recreational facilities available.\n[…]\nVarious marathons in the city start and finish in the park. It provides a main segment for Rio's Cycling Race, which is allotted the largest number of points among the Latin American events on the Union Cycliste Internationale (UCI) world ranking.\n[…]\nIn the 2007 Pan American Games, Marina da Glória was the main venue for the Rio 2007 Sailing competitions. Also during the Games, the Marathon (men's and women's) arrival points were set up at the Flamengo Park, which also staged the Race Walking and Cycling Road competitions."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roberto_Burle_Marx",
        "situacao": "ok",
        "texto": "Roberto Burle Marx (São Paulo, 4 de agosto de 1909 – Rio de Janeiro, 4 de junho de 1994) foi um artista plástico e paisagista brasileiro. Embora tenha ficado conhecido internacionalmente ao exercer a profissão de paisagista, também era pintor, desenhista, designer, escultor e cantor.\n[…]\nDurante a estada na Alemanha, Burle Marx estudou pintura no ateliê de Degner Klemn. De volta ao Rio de Janeiro, em 1930, Lúcio Costa, que era seu amigo e vizinho do Leme, o incentivou a ingressar na Escola Nacional de Belas Artes, atual Escola de Belas Artes da Universidade Federal do Rio de Janeiro. Burle Marx conviveu na universidade com aqueles que se tornariam reconhecidos na arquitetura moderna brasileira: Oscar Niemeyer, Hélio Uchôa, Milton Roberto, entre outros.\n[…]\nPaisagismo\n[…]\nSítio Roberto Burle Marx\n[…]\nRIZZO, Giulio G.; \"Roberto Burle Marx. Il giardino del Novecento\"; Firenze, Cantini editore; 1992\n[…]\nLEENHARDT, Jacques (org); Nos jardins de Burle Marx; São Paulo: Editora Perspectiva, 1994; ISBN 85-273-0093-1\n[…]\nRIZZO, Giulio G.; Roberto Burle Marx: non solo arte dei giardini; su \"Controspazio\", vol. 4; p. 66-73,1995.\n[…]\nRIZZO Giulio G.; Il progetto dei grandi parchi urbani di Roberto Burle Marx. In \"Paesaggio Urbano\", vol. 4-5; p. 82-89, 1995.\n[…]\nSIQUEIRA, Vera Beatriz; Burle Marx; São Paulo: Cosac e Naify, 2001.\n[…]\nTABACOW, José (org.); Arte e Paisagem - Roberto Burle Marx; São Paulo: Livros Studio Nobel, 2004.\n[…]\nRIZZO, Giulio G. : Il giardino privato di Roberto Burle Marx: Il Sìtio.Sessant'anni dalla fondazione. Cent'anni dalla nascita di Roberto Burle Marx.Gangemi Editore,Roma 2009.ISBN:  978-88-492-1987-6\n[…]\n«Instituto Burle Marx»\n[…]\n«Sítio Roberto Burle Marx - IPHAN»\n[…]\n«Escritório Burle Marx»\n[…]\n«Biografia - Roberto Burle Marx»\n[…]\n«Site do Instituto Inhotim, onde Roberto Marx foi colaborador»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Torre de Pisa",
      "descricao": "Campanário inclinado da catedral de Pisa, na Itália."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Torre de Pisa começou a inclinar ainda durante a construção, no século doze. Qual foi a causa?",
    "resposta": "Solo mole e instável",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa",
        "situacao": "ok",
        "texto": "The Leaning Tower of Pisa (Italian: torre pendente di Pisa [ˈtorre penˈdɛnte di ˈpiːza, - ˈpiːsa]), or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cath\n[…]\nOn 23 February 1260, Guido Speziale, son of Giovanni Pisano, was elected to oversee the building of the tower. On 12 April 1264, the master builder Giovanni di Simone, architect of the Camposanto, and 23 workers went to the mountains close to Pisa to cut the required marble. The cut stones were given to Rainaldo Speziale, worker of St. Francesco. In 1272, construction resumed under Di Simone.\n[…]\nTwo German churches have challenged the tower's status as the world's most lopsided building: the 15th-century square Leaning Tower of Suurhusen and the 14th-century bell tower of the Oberkirche in the town of Bad Frankenhausen. Guinness World Records measured the Pisa and Suurhusen towers, finding Pisa's tilt to be 3.97 degrees.\n[…]\nIn June 2010, Guinness World Records certified the Capital Gate building in Abu Dhabi, UAE as the \"World's Furthest Leaning Man-made Tower\". It has an 18-degree slope, almost five times more than the Tower of Pisa, but was deliberately engineered to slant. The Leaning Tower of Wanaka in Wānaka, New Zealand, also deliberately built, leans at 53 degrees to the ground.\n[…]\nLeaning Temple of Huma\n[…]\nList of leaning towers\n[…]\nLeaning Tower of Niles, a replica of the Tower of Pisa\n[…]\nTorre delle Milizie, a tilting medieval tower in Rome\n[…]\nPiazza dei Miracoli digital media archive (Creative Commons – licensed photos, laser scans, panoramas), data from a University of Ferrara/CyArk research partnership, includes 3D scan data from the Leaning Tower of Pisa.\n[…]\nLeaning Tower of Pisa at Structurae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Pisa",
        "situacao": "ok",
        "texto": "A torre inclinada de Pisa (em italiano Torre pendente di Pisa), ou simplesmente Torre de Pisa, é um campanário (campanile ou campanário autônomo) da catedral da cidade italiana de Pisa. Está situada atrás da catedral, e é a terceira mais antiga estrutura na praça da Catedral de Pisa (Campo dei Miracoli), depois da catedral e do baptistério.\n[…]\nEmbora destinada a ficar na vertical, a torre começou a inclinar-se para sudeste logo após o início da construção, em 1173, devido a uma fundação mal construída e a um solo de fundação mal consolidado, que permitiu à fundação ficar com assentamentos diferenciais. A torre atualmente se inclina para o sudoeste.\n[…]\nA altura do solo ao topo da torre é de 55,86 metros no lado mais baixo e de 56,70 metros na parte mais alta. A espessura das paredes na base é de 4,09 metros e 2,48 metros no topo. Seu peso é estimado em 14 500 toneladas. A torre tem 296 ou 294 degraus: o sétimo andar da face norte das escadas tem dois degraus a menos. Antes do trabalho de restauração realizado entre 1990 e 2001 a torre estava inclinada com um ângulo de 5,5 graus, estando agora a torre inclinada em cerca de 3,99 graus.\n[…]\nA torre começou a inclinar-se após a progressão de construção para o terceiro andar em 1178. Isto deveu-se a uma fundação de meros três metros sobre um subsolo fraco e instável, um projecto que falhou desde o início. A construção foi posteriormente paralisada por quase um século, porque o Pisanos estavam continuamente envolvidos em batalhas com Génova, Lucca e Florença. Este tempo permitiu ao solo subjacente ajustar-se. Caso contrário, a torre de Pisa quase certamente teria sido derrubada.\n[…]\nThe Leaning Tower of Pisa - vídeos de realidade virtual\n[…]\nHow the process of inclination was stopped\n[…]\nPictures of Leaning structures\n[…]\nAprendendo a Torre de Pisa em base de dados Structurae.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Taj Mahal",
      "descricao": "Mausoléu de mármore branco do século dezessete às margens do rio Yamuna, em Agra, na Índia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezessete, o imperador mogol Shah Jahan mandou erguer o mais famoso mausoléu da Índia em memória de quem?",
    "resposta": "Sua esposa Mumtaz Mahal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taj_Mahal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "The Taj Mahal ( TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his late wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.\n[…]\nConstruction of the mausoleum was completed in 1648, although work on other parts of the complex continued for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2015 would be approximately ₹52.8 billion (US$827 million).\n[…]\nThe Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year while giving birth to their 14th child, Gauhara Begum. Construction started in 1632, and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later.\n[…]\nWhen the structure was partially completed, the first ceremony was held at the mausoleum by Shah Jahan on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal. Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The Taj Mahal complex is believed to have been completed in 1653 at a cost estimated at the time to be around ₹32 million, which in 2015 would be approximately ₹52.8 billion (US$827 million).\n[…]\nDescription of the Taj Mahal at the Archaeological Survey of India\n[…]\n\"Outlying Buildings\". Taj Mahal. Archived from the original on 4 February 2015. Retrieved 7 February 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "O Taj Mahal (em hindi: ताज महल) é um mausoléu situado em Agra, na Índia, sendo o mais conhecido dos monumentos do país. Encontra-se classificado pela UNESCO como Patrimônio da Humanidade. Foi anunciado em 2007 como uma das sete maravilhas do mundo moderno.\n[…]\nA obra foi feita entre 1632 e 1653 com a força de cerca de 20 mil homens, trazidos de várias cidades do Oriente, para trabalhar no suntuoso monumento de mármore branco que o imperador Shah Jahan mandou construir em memória de sua esposa favorita, Aryumand Banu Begam, a quem chamava de Mumtaz Mahal (\"A joia do palácio\"). Ela morreu após dar à luz o 14.º filho, tendo o Taj Mahal sido construído sobre seu túmulo, junto ao rio Yamuna.\n[…]\nMausoléu;\n[…]\nA tradição muçulmana proíbe a decoração elaborada das campas, pelo que os corpos de Mumtaz e Xá Jahan descansam numa câmara relativamente simples debaixo da sala principal do Taj Mahal. Estão sepultados segundo um eixo norte-sul, com os rostos inclinados para a direita, em direcção a Meca.[carece de fontes]?\n[…]\nA palavra \"Taj\" provém do persa, linguagem da corte mogol, e significa \"Coroa\", enquanto que \"Mahal\" é uma variante curta de Mumtaz Mahal, o nome formal na corte de Arjumand Banu Begum, cujo significado é \"Primeira dama do palácio\". Taj Mahal, então, refere-se à \"coroa de Mahal\", a amada esposa de Xá Jahan. Já em 1663 o viajante francês François Bernier mencionou o edifício como \"Tage Mehale\".\n[…]\nOs livros islâmicos descrevem a sepultura em ataúdes como \"um gasto inútil, que poderia ser melhor utilizado para alimentar o faminto ou ajudar o necessitado\". Segundo a visão de Aurangzeb, construir um mausoléu novo para Xá Jahan teria sido um desperdício. Por isso sepultou o seu pai junto a Mumtaz Mahal sem mais complicações.\n[…]\n«Fotos do Taj Mahal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Catedral de Notre-Dame de Paris",
      "descricao": "Catedral gótica medieval na Île de la Cité, em Paris."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezenove, que romance de Victor Hugo despertou o interesse do público e ajudou a salvar da ruína a grande catedral gótica de Paris?",
    "resposta": "O Corcunda de Notre-Dame",
    "fonte": [
      "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "Notre-Dame de Paris (French: Cathédrale Notre-Dame de Paris French: [nɔtʁ(ə) dam də paʁi] : \"Cathedral of Our Lady of Paris\"), often referred to simply as Notre-Dame, is a medieval Catholic cathedral and basilica on the Île de la Cité (an island in the River Seine), in the 4th arrondissement of Paris, France. It is the cathedral church of the Roman Catholic Archdiocese of Paris.\n[…]\nThe 1831 publication of Victor Hugo's novel Notre-Dame de Paris (English title: The Hunchback of Notre-Dame) inspired interest which led to restoration between 1844 and 1864, supervised by Eugène Viollet-le-Duc. On 26 August 1944, the Liberation of Paris from German occupation was celebrated in Notre-Dame with the singing of the Magnificat. Beginning in 1963, the cathedral's façade was cleaned of soot and grime. Another cleaning and restoration project was carried out between 1991 and 2000.\n[…]\nIn the decades after the Napoleonic Wars, Notre-Dame fell into such a state of disrepair that Paris officials considered its demolition. Victor Hugo, who admired the cathedral, wrote the novel Notre-Dame de Paris (published in English as The Hunchback of Notre-Dame) in 1831 to save Notre-Dame. The book was an enormous success, raising awareness of the cathedral's decaying state. The same year as Hugo's novel was published, anti-Legitimists plundered Notre-Dame's sacristy.\n[…]\nThe position of titular organist (\"head\" or \"chief\" organist; French: titulaires des grandes orgues) of the great organ of Notre-Dame is considered one of the most prestigious organist posts in France, along with the post of titular organist of Saint Sulpice in Paris, Cavaillé-Coll's largest instrument.\n[…]\nOfficial site of Music at Notre-Dame de Paris (in English) also (in French)\n[…]\nNotre-Dame de Paris Cathedral Fire  Archived 1 June 2022 at the Wayback Machine\n[…]\nRe-opening ceremony for Notre Dame in Paris, 2024 on C-SPAN"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Notre-Dame_de_Paris",
        "situacao": "ok",
        "texto": "A Catedral de Notre-Dame de Paris (em francês: Cathédrale Notre-Dame de Paris; em português: \"Catedral de Nossa Senhora de Paris\") é uma das mais antigas catedrais francesas em estilo gótico. Iniciada sua construção no ano de 1163, é dedicada à Virgem Maria e situa-se na Île de la Cité em Paris, rodeada pelas águas do rio Sena.\n[…]\nÉ possível visitar a torre norte de onde, após uma subida de 386 degraus, se pode vislumbrar a cidade de Paris, os pináculos e os gárgulas da catedral que povoaram o romance de Victor Hugo.\n[…]\nO gótico permite a ligação da terra ao céu e, no interior de uma catedral do estilo, o crente é impelido à ascensão pela afirmação constante da verticalidade, pela monumentalidade das paredes que parecem erguer-se segundo uma teoria contrária à da gravidade, tornando-as leves, deixando por elas filtrar o colorido dos grandes vitrais numa aura etérea. A utilização de tais elementos arquitectónicos numa catedral deve-se mais a um propósito religioso prático que a aspirações artísticas.\n[…]\nSeu badalado só ocorre em eventos de grande importância, como visitas do papa, comemorações e funerais presidenciais. Desde a sua instalação, em 1681, o Bourdon Emmanuel tocou apenas 84 vezes. Os sinos da torre norte, instalados desde 1856, badalam a cada 15 minutos ou em eventos históricos, como no fim da Primeira Guerra Mundial ou na libertação de Paris em 1944. Mais recentemente, tocaram em honra às vítimas do atentado de 11 de setembro.\n[…]\nEm 2012 estes sinos foram derretidos e substituídos por nove novos sinos e isto ocorreu porque os mesmos perderam o tom devido ao desgaste do cobre. Na manhã do dia 8 de novembro de 2024, os oito sinos do campanário norte da catedral tocaram mais de cinco anos depois do incêndio que destruiu o edifício.",
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
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos anos sessenta, os templos de Abu Simbel foram serrados em blocos e remontados num ponto mais alto. Por quê?",
    "resposta": "Inundação pela represa de Assuã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abu_Simbel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abu_Simbel",
        "situacao": "ok",
        "texto": "Abu Simbel is a historic site comprising two massive rock-cut temples in the village of Abu Simbel (Arabic: أبو سمبل), Aswan Governorate, Upper Egypt, near the border with Sudan. It is located on the western bank of Lake Nasser, about 230 km (140 mi) southwest of Aswan (about 300 km (190 mi) by road). Its latitude of 22° 20′ 13″ N (22.3369 °N) is 1.0978°, which are 122 km (75.8 ml), south of the t\n[…]\nMax McCullough a special assistant for educational and cultural affairs in the State Department, who was the American representative on the UNESCO committee stated, \"This means that for the first time we have a plan acceptable to everybody and, secondly that we are within striking distance of the money required for the project.\"\n[…]\nTwo international committees containing archaeologists, architects and engineers provided technical advice to the joint venture, while the Egyptian government interests was represented on site by their own resident engineer who was supported by archaeologists from the Department of Antiquities. By the spring of 1964 approximately 1,000 people were being employed by the project at Abu Simbel.\n[…]\nThe single entrance is flanked by four colossal, 20 m (66 ft) statues, each representing Ramesses II seated on a throne and wearing the double crown of Upper and Lower Egypt. The statue to the immediate left of the entrance was damaged in an earthquake, causing the head and torso to fall away; these fallen pieces were not restored to the statue during the relocation but placed at the statue's feet in the positions originally found.\n[…]\nThe rock-cut sanctuary and the two side chambers are connected to the transverse vestibule and are aligned with the axis of the temple. The bas-reliefs on the side walls of the small sanctuary represent scenes of offerings to various gods made either by the pharaoh or the queen.\n[…]\nof the first stage of the project for saving Abu Simbel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abul-Simbel",
        "situacao": "ok",
        "texto": "Os templos de Abul-Simbel são dois enormes templos esculpidos na rocha em Abu Simbel (em árabe: أبو سمبل), uma vila na província de Assuão, Alto Egito, perto da fronteira com o Sudão. Eles estão situados na margem oeste do Lago Nasser, cerca de 230 km sudoeste de Assuão (cerca de 300 km de carro). O complexo faz parte do Patrimônio Mundial da UNESCO conhecido como \"Monumentos Núbios\", que vão de A\n[…]\nAlgumas estruturas foram até salvas debaixo das águas do Lago Nasser. Hoje, algumas centenas de turistas visitam os templos diariamente. Muitos visitantes também chegam de avião a um campo de aviação que foi construído especialmente para o complexo do templo, ou por estrada saindo de Assuã, a cidade mais próxima.\n[…]\nAo lado das pernas de Ramessés há várias outras estátuas menores, nenhuma mais alta do que os joelhos do faraó, representando: sua esposa principal, Nefertari Meritemute; sua rainha mãe Mute-Tuia; seus primeiros dois filhos, Amenerquepexefe e Ramessés B; e suas primeiras seis filhas: Bintanath, Baketmut, Nefertari, Meritamon, Nebettawy e Iseteneferte.\n[…]\nComo no templo maior dedicado ao rei, o salão hipostilo no templo menor é sustentado por seis pilares; neste caso, entretanto, eles não são pilares de Osíris representando o rei, mas são decorados com cenas com a rainha tocando o sistro (um instrumento sagrado para a deusa Hator), junto com os deuses Hórus, Quenúbis, Quespisquis e Tote, e as deusas Hator, Ísis, Maat, Mut de Asher, Sátis e Tuéris; em uma cena, Ramessés apresenta flores ou queima incenso.\n[…]\nO santuário talhado na rocha e as duas câmaras laterais são conectados ao vestíbulo transversal e alinhados com o eixo do templo. Os baixos-relevos nas paredes laterais do pequeno santuário representam cenas de oferendas a vários deuses feitas pelo faraó ou pela rainha.\n[…]\n«Abu Simbel, por Marie Parsons» (em inglês)\n[…]\n«Fotografias de Abul-Simbel, por M. Sullivan» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Grande Muralha da China",
      "descricao": "Conjunto de muralhas e fortificações erguidas ao longo de séculos no norte da China."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os trechos mais conhecidos da Muralha da China, visitados hoje pelos turistas, foram construídos durante que dinastia?",
    "resposta": "Dinastia Ming",
    "distratores": [
      "Dinastia Qin",
      "Dinastia Han",
      "Dinastia Tang"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Wall_of_China"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Wall_of_China",
        "situacao": "ok",
        "texto": "The Great Wall of China is a series of fortifications in China. They were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The first walls date to the 7th century BC; these were joined together in the Qin dynasty. Successive dynasties expanded the wall system; the best-known sections wer\n[…]\nThe Ming dynasty made substantial contributions to the Great Wall, following their defeat to the Oirats in the Battle of Tumu. This defeat had come in the context of protracted conflict with Mongol tribes; a new strategy for defense was thus realized by constructing walls along the northern border of China. Acknowledging the Mongol control established in the Ordos Desert, the wall followed the desert's southern edge, instead of incorporating the bend of the Yellow River.\n[…]\nUnder Qing rule and the annexation of Mongolia into the empire, China's borders extended beyond the Great Wall; work on it for the purpose of border defense was thus discontinued. Construction nevertheless persisted with projects like the Willow Palisade; following a line similar to that of the Liaodong Wall of the Ming, it was meant to prevent Han Chinese migration into Manchuria.\n[…]\nEarly European accounts were mostly modest and empirical, closely mirroring contemporary Chinese understanding of the Wall, although later they slid into hyperbole, including the erroneous but ubiquitous claim that the Ming walls were the same ones that were built by the first emperor in the 3rd century BC.\n[…]\nA section of the wall in Shanxi province was severely damaged in 2023 by construction workers, who widened an existing gap in the wall to make a shortcut for an excavator to pass through. Police described the act as causing \"irreversible damage to the integrity of the Ming Great Wall and to the safety of the cultural relics\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Muralha_da_China",
        "situacao": "ok",
        "texto": "Grande Muralha da China (chinês tradicional: 萬里長城; chinês simplificado: 万里长城; pinyin: Wànlǐ Chángchéng, literalmente \"muro de dez mil li de comprimento\") é uma série de fortificações na China. Elas foram construídas ao longo das fronteiras históricas do norte dos antigos estados chineses e da China Imperial como proteção contra vários grupos nômades da Estepe Euroasiática. As primeiras muralhas da\n[…]\nDinastias sucessivas expandiram o sistema de muralhas; as seções mais conhecidas foram construídas pela dinastia Ming (1368–1644).\n[…]\nCom a morte do imperador Qin Shihuang, iniciou-se na China um período de agitações políticas e de revoltas, durante o qual os trabalhos na Grande Muralha ficaram paralisados. Com a ascensão da Dinastia Han ao poder, por volta de 206 a.C., reiniciou-se o crescimento chinês e os trabalhos na muralha foram retomados ao longo dos séculos até o seu esplendor na Dinastia Ming, por volta do século XV, quando adquiriu os atuais aspectos e uma extensão de cerca de sete mil quilômetros.\n[…]\nPor não se tratar de uma estrutura única, as características da Grande Muralha variam de acordo com a região em que os diferentes trechos estão construídos. Devido a diferenças de materiais, condições de relevo, projetos e técnicas de construção, e mesmo da situação militar vivida por cada dinastia, os trechos da muralha apresentam variações.\n[…]\nA Muralha da China após um concurso informal internacional em 2007, foi considerada uma das sete maravilhas do mundo moderno. Em 1986, a China a inscreveu na Lista de Património Mundial da UNESCO, além da Muralha, os Palácios Imperiais das Dinastias Ming e Qing em Pequim e Shenyang, o Sítio do Homem de Pequim em Zhoukoudian, as Grutas de Mogao em Dunhuang, o Exército de Terracota e o Monte Tai. Estas indicações foram formalmente aceitas pelo Comité do Património Mundial em 1987.\n[…]\nGrande Canal da China\n[…]\n«Muralha da China». em Fortalezas.org.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Exército de Terracota",
      "descricao": "Conjunto de milhares de estatuetas de soldados de barro enterradas junto ao mausoléu de Qin Shi Huang, em Xian."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década camponeses chineses, cavando um poço perto de Xian, encontraram os primeiros guerreiros do Exército de Terracota?",
    "resposta": "Década de 1970",
    "fonte": [
      "https://en.wikipedia.org/wiki/Terracotta_Army"
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
        "texto": "Exército de terracota, Guerreiros de Xian ou ainda Exército do imperador Qin, é uma coleção de esculturas de terracota representando os exércitos de Qin Shi Huang, o primeiro imperador da China. É uma forma de arte funerária enterrada com o imperador em 210-209 a.C. e cuja finalidade era proteger o governante chinês em sua vida após a morte.\n[…]\nAs imagens em terracota foram enterradas junto ao mausoléu do primeiro imperador, Qin Shihuang em c. 259-210 a.C. e foram descobertas em março de 1974 por agricultores locais que escavavam um poço de água a leste do monte Lishan, uma elevação de terra feita por mãos humanas e que contém a necrópole do primeiro imperador da dinastia Qin. A construção desse mausoléu começou em 246 a.C. e acredita-se que 700 000 trabalhadores e artesãos levaram 38 anos para a completar.\n[…]\nSeria protegido por um exército de soldados em terracota guardados nas proximidades, mas os restos de muitos artesãos e suas ferramentas foram encontrados, o que faz acreditar que tenham sido enterrados com o imperador para impedir que revelassem as riquezas ou as entradas aos salteadores.[carece de fontes]?\n[…]\nAs figuras de terracota foram encontradas em três diferentes trincheiras, e uma quarta foi encontrada vazia. Acredita-se que a trincheira maior, contendo mais de 6000 figuras de soldados, carruagens e cavalos, representavam a armada principal do primeiro imperador. A segunda trincheira continha cerca de 1400 figuras da cavalaria e infantaria, também com carros e cavalos, representava a guarda militar.\n[…]\nOs guerreiros de Xian são hoje um fenomenal sítio arqueológico e um ícone do passado distante da China. O poderio do primeiro imperador Qin Shihuang  é evidente na massiva e monumental presença de seus soldados, eternamente prontos a proteger seu líder.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pirâmide de Djoser",
      "descricao": "Pirâmide em degraus construída para o faraó Djoser na necrópole de Sacara, no Egito, no século vinte e sete antes de Cristo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No Egito antigo, que arquiteto, mais tarde venerado como deus da medicina, projetou a pirâmide em degraus do faraó Djoser?",
    "resposta": "Imhotep",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyramid_of_Djoser",
      "https://en.wikipedia.org/wiki/Imhotep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyramid_of_Djoser",
        "situacao": "ok",
        "texto": "The Pyramid of Djoser, sometimes called the Step Pyramid of Djoser or Step Pyramid of Horus Netjerikhet, is an archaeological site in the Saqqara necropolis, Egypt, northwest of the ruins of Memphis. It was the first Egyptian pyramid to be built. The six-tier, four-sided structure is the earliest colossal stone building in Egypt. It was built in the 27th century BC during the Third Dynasty for the\n[…]\nAlthough the plan of Djoser's pyramid complex is different from later complexes, many elements persist and the step pyramid sets the stage for later pyramids of the 4th, 5th, and 6th Dynasties, including the great pyramids of Giza. Though the Dynastic Egyptians themselves did not credit him as such, most Egyptologists credit Djoser's vizier Imhotep with the design and construction of the complex.\n[…]\nThis is based on the presence of his statue in the funerary complex of Djoser, his title of \"overseer of sculptors and painters\", and a comment made by the 3rd century BC historian Manetho claiming Imhotep was the \"inventor of building in stone\". Imhotep would later be deified and known as Asclepios by the Greeks.\n[…]\nLauer believes this chamber contained a statue of Djoser on a pedestal that bore his name and Imhotep's titles. The torso and base of this statue were found in the entrance colonnade. The west wall of the entrance colonnade has the form of an open door which leads into the south court.\n[…]\nThe south court is a large court between the south tomb and the pyramid. Within the court are curved stones thought to be territorial markers associated with the Heb-sed festival, an important ritual completed by Egyptian kings (typically after 30 years on the throne) to renew their powers. These would have allowed Djoser to claim control over all of Egypt, while its presence in the funerary complex would allow Djoser to continue to benefit from the ritual in the afterlife."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Imhotep",
        "situacao": "ok",
        "texto": "Imhotep (; Ancient Egyptian: ỉỉ-m-ḥtp \"(the one who) comes in peace\"; fl. late 27th century BC) was an Egyptian chancellor to the King Djoser, possible architect of Djoser's step pyramid, and high priest of the sun god Ra at Heliopolis. Very little is known of Imhotep as a historical figure, but in the 3,000 years following his death, he was gradually glorified and deified.\n[…]\nImhotep's historicity is confirmed by two contemporary inscriptions made during his lifetime on the base or pedestal of one of Djoser's statues (Cairo JE 49889) and also by a graffito on the enclosure wall surrounding Sekhemkhet's  unfinished step pyramid. The latter inscription suggests that Imhotep outlived Djoser by a few years and went on to serve in the construction of King Sekhemkhet's pyramid, which was abandoned due to this ruler's brief reign.\n[…]\nImhotep was one of the chief officials of the Pharaoh Djoser. Concurring with much later legends, Egyptologists credit him with the design and construction of the Pyramid of Djoser, a step pyramid at Saqqara built during the 3rd Dynasty. He may also have been responsible for the first known use of stone columns to support a building.\n[…]\nImhotep Museum\n[…]\nGarry, T. Gerald (1931). Egypt: The home of the occult sciences, with special reference to Imhotep, the mysterious wise man and Egyptian god of medicine. London, UK: John Bale, Sons and Danielsson.\n[…]\nHurry, Jamieson B. (1978) [1926]. Imhotep: The Egyptian god of medicine (2nd ed.). New York, NY: AMS Press. ISBN 978-0-404-13285-9.\n[…]\nHurry, Jamieson B. (2014) [1926]. Imhotep: The Egyptian god of medicine (reprint ed.). Oxford, UK: Traffic Output. ISBN 978-0-404-13285-9.\n[…]\nRisse, Guenther B. (1986). \"Imhotep and medicine — a re-evaluation\". Western Journal of Medicine. 144 (5): 622–624. PMC 1306737. PMID 3521098.\n[…]\n\"Imhotep (2667–2648 BCE)\". BBC History. British Broadcasting Corporation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Djoser",
        "situacao": "ok",
        "texto": "A Pirâmide de Djoser, também chamada de Pirâmide de Sacará ou Pirâmide de Degraus, foi erguida para o sepultamento do Faraó Djoser por seu vizir, ou arquiteto real, Imhotep. Construída durante o século XXVII a.C. na necrópole de Sacará, a nordeste da cidade de Mênfis, é o edifício central de um grande complexo mortuário num amplo pátio cercado por estruturas elementos decorativos cerimoniais.\n[…]\nÉ considerada a primeira pirâmide a ser erguida do Egito, composta por seis mastabas (de dimensões decrescentes, de baixo para cima) construídas uma sobre a outra. Nota-se que o projeto original sofreu revisões e adaptações à medida que a construção evoluía. Originalmente, a pirâmide alcançava 62 m, com uma base de 109 m x 125 m, e era revestida por pedra calcária branca polida.\n[…]\nA pirâmide de degraus é vista como a mais antiga construção monumental em pedra do mundo, embora o sítio vizinho de Gisr el-mudir talvez anteceda o complexo de Djoser.\n[…]\nSeu complexo interno é relativamente pequeno, comparado ao da Grande Pirâmide de Gizé, ou de Quéops.\n[…]\nEm 2006 começaram obras de reabilitação, uma vez que a pirâmide corria o risco de colapso. No entanto, em 2011, os eventos da Primavera Árabe forçaram as autoridades egípcias a suspender o trabalho que não foi retomado até ao final de 2013. A restauração da pirâmide de Djoser incluiu a substituição das lacunas nas suas paredes por blocos semelhantes aos originais. A câmara funerária e o sarcófago do faraó, bem como os estreitos corredores internos da pirâmide, também foram reformados.\n[…]\nLista de pirâmides do Egito\n[…]\nAntigo Egito\n[…]\nMedia relacionados com Pirâmide de Djoser no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cristo Redentor",
      "descricao": "Estátua art déco de Jesus Cristo de braços abertos no alto do morro do Corcovado, no Rio de Janeiro, inaugurada em 1931."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Inaugurado em 1931 no alto do Corcovado, o Cristo Redentor foi esculpido por que artista francês?",
    "resposta": "Paul Landowski",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
      "https://pt.wikipedia.org/wiki/Cristo_Redentor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
        "situacao": "ok",
        "texto": "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot and Romanian sculptor Gheorghe Leonida who sculpted the face.\n[…]\nConstructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other.\n[…]\nLocal engineer Heitor da Silva Costa and artist Carlos Oswald designed the statue. French sculptor Paul Landowski created the work.\n[…]\nIn 1922, Landowski commissioned fellow Parisian Romanian sculptor Gheorghe Leonida, who studied sculpture at the Fine Arts Conservatory in Bucharest and in Italy. A group of engineers and technicians studied Landowski's submissions, and they felt building the structure out of reinforced concrete (designed by Albert Caquot) instead of steel was more suitable for the cross-shaped statue. The concrete making up the base was supplied from Limhamn, Sweden.\n[…]\nCristo Redentore (Christ the Redeemer) of Maratea (21 m, 69 ft)\n[…]\nCristo Rey on the Cerro del Cubilete in Guanajuato, inspired by Rio's Christ the Redeemer (23 m, 75 ft)\n[…]\nCristo Rei (Christ the King) in Almada (28 m, 92 ft)\n[…]\nGiumbelli, Emerson (2008). \"A modernidade do Cristo Redentor\". Dados (in Portuguese). 51 (1): 75–105. doi:10.1590/S0011-52582008000100003. ISSN 0011-5258.\n[…]\nPoliakoff, Martyn. \"Soapstone @ Cristo Redentor\". The Periodic Table of Videos. University of Nottingham.\n[…]\nSanctuary of Christ the Redeemer at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo_Redentor",
        "situacao": "ok",
        "texto": "Cristo Redentor é uma estátua que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, dentro do Parque Nacional da Tijuca. Tem vista para parte considerável da cidade brasileira do Rio de Janeiro, sendo a frente da estátua voltada para a Baía de Guanabara e as costas para a Floresta da Tijuca.\n[…]\nA ideia de construir uma grande estátua no alto do Corcovado foi sugerida pela primeira vez em meados do século XIX, mas foi o Círculo Católico do Rio de Janeiro que conseguiu as doações necessárias para colocar a ideia em prática no início do século XX. O monumento foi construído na França a partir de 1922 através de uma colaboração entre os brasileiros Heitor da Silva Costa e Carlos Oswald, os franceses Paul Landowski e Albert Caquot e o romeno Gheorghe Leonida.\n[…]\nA estátua do Cristo Redentor de braços abertos, um símbolo de paz, foi a escolhida. O engenheiro local Heitor da Silva Costa projetou a estátua, que foi esculpida por Paul Landowski, um escultor franco-polonês.\n[…]\nTornando-se famoso na França como retratista, ele foi incluído por Paul Landowski na equipe que começou a trabalhar no Cristo Redentor em 1922. Gheorghe Leonida contribuiu retratando o rosto de Jesus Cristo na estátua, fato que o tornou famoso.\n[…]\nO monumento foi inaugurado em 12 de outubro de 1931.\n[…]\nOs direitos comerciais da estátua foram objetos de contenda pela família do escultor Paul Maximilian Landowski quando uma joalheria foi autorizada pela Arquidiocese de São Sebastião do Rio de Janeiro, que administra o monumento, a comercializar produtos que retratavam o Cristo Redentor. A família de Landowski moveu ação reivindicando direitos autorais sobre o uso da imagem do Cristo, mas a Justiça negou o pedido.\n[…]\nCristo Redentor no Instagram\n[…]\nCristo Redentor no Facebook\n[…]\nCristo Redentor no YouTube\n[…]\n«Trem do Corcovado»"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Ópera de Sydney",
      "descricao": "Casa de espetáculos com cobertura em forma de cascas brancas, no porto de Sydney, na Austrália, inaugurada em 1973."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Com seu telhado de cascas brancas que lembram velas de barco, a Ópera de Sydney foi projetada por que arquiteto dinamarquês?",
    "resposta": "Jørn Utzon",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sydney_Opera_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
        "situacao": "ok",
        "texto": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings, and a masterpiece of 20th-century architecture.\n[…]\nIn the late 1990s, the Sydney Opera House Trust resumed communication with Utzon in an attempt to effect a reconciliation and to secure his involvement in future changes to the building. In 1999, he was appointed by the trust as a design consultant for future work.\n[…]\nAfter the resignation of Utzon, the Minister for Public Works, Davis Hughes, and the Government Architect, Ted Farmer, organised a team to bring the Sydney Opera House to completion. The architectural work was divided between three appointees who became the Hall, Todd, Littlemore partnership. David Littlemore would manage construction supervision, Lionel Todd contract documentation, while the crucial role of design became the responsibility of Peter Hall.\n[…]\nHall agreed to accept the role on the condition there was no possibility of Utzon returning. Even so, his appointment did not go down well with many of his fellow architects who considered that no one but Utzon should complete the Sydney Opera House. Upon Utzon's dismissal, a rally of protest had marched to Bennelong Point. A petition was also circulated, including in the Government Architects office.\n[…]\nRAIA Commemorative Award, Jørn Utzon – Sydney Opera House, 1992\n[…]\nCompetition drawings submitted by Jørn Utzon to the Opera House Committee\n[…]\n\"Sydney Opera House\". Dictionary of Sydney. Retrieved 8 October 2015. [CC-By-SA]. Includes 'Sydney Opera House' by Laila Ellmoos, 2008 and 'Utzon's Opera House' by Eoghan Lewis, 2014.\n[…]\nSydney Opera House at Google Cultural Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93pera_de_Sydney",
        "situacao": "ok",
        "texto": "A casa da Ópera de Sydney (em inglês Sydney Opera House), também conhecida como Teatro de Sydney, é um dos edifícios de espetáculo mais marcantes em nível mundial, e um dos símbolos da Austrália, localizada na cidade de Sydney.\n[…]\nA construção, projetada por Jørn Utzon, começou em 1959 e está localizada sobre a Baía de Sydney. Apesar de o arquiteto ter abandonado o projeto em 1966, o edifício foi inaugurado em 20 de outubro de 1973.\n[…]\nUtzon ganhou o concurso internacional de arquitetura para a Ópera de Sydney em 1957, aos 38 anos. Havia 232 candidatos e terá sido o arquitecto finlandês Eero Saarinen, que fazia parte do júri, a apoiar o seu projeto. Fez a obra com o engenheiro anglo-dinamarquês Ove Arup e o edifício demorou anos a ser construído (de 1956 a 1973). A polemica instalou-se e, em 1966, quando Jorn Utzon abandonou a direção da obra e a Austrália, para onde se tinha mudado com a sua família.\n[…]\nAlguns pormenores da obra, nomeadamente no seu interior, não foram acabados segundo os seus planos. Utzon nunca chegou a visitar o edifício, mesmo depois de se ter reconciliado com a Fundação da Ópera de Sydney nos anos 1990 e mais tarde o seu filho Jan, também arquitecto, ter feito a renovação do interior do edifício, aproximando-o mais daquilo que o pai tinha projetado.\n[…]\nAinda que às estruturas dos telhados da Casa de Ópera de Sydney sejam habitualmente designadas como cascas (como neste artigo), estas de facto não o são no sentido arquitetônico da palavra, já que estão formadas por painéis pré-fabricados de betão que se apoiam em costillas pré-fabricadas do mesmo material.\n[…]\nDuek-Cohen, Elias, Utzon and the Sydney Opera House, Morgan Publications, Sydney, 1967-1998.\n[…]\nThe Sydney Opera House mapygon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pirâmide do Louvre",
      "descricao": "Pirâmide de vidro e metal que serve de entrada principal do Museu do Louvre, em Paris, concluída nos anos 1980."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Erguida nos anos oitenta como nova entrada do museu, a pirâmide de vidro do Louvre, em Paris, foi projetada por que arquiteto sino-americano?",
    "resposta": "I. M. Pei",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louvre_Pyramid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louvre_Pyramid",
        "situacao": "ok",
        "texto": "The Louvre Pyramid (French: Pyramide du Louvre) is a large glass-and-metal entrance way and skylight designed by the Chinese-American architect I. M. Pei. The pyramid is in the main courtyard (Cour Napoléon) of the Louvre Palace in Paris, surrounded by three smaller pyramids of the same style which also serve as lightwells. A companion Inverted Pyramid also provides light to underground passageway\n[…]\nThe large pyramid serves as the main entrance way to the Louvre Museum, allowing light to the below ground visitors hall, while also allowing sight lines of the palace to visitors in the hall, and through access galleries to the different wings of the palace. On three sides are low modernist triangular reflecting pools with fountains. Completed in 1989 as part of the broader Grand Louvre project, it has become a landmark of Paris and a symbol of the museum.\n[…]\nThe Grand Louvre project was announced in 1981 by François Mitterrand, the president of France. In 1983 the Chinese-American architect I. M. Pei was selected as its architect. The pyramid structure was initially designed by Pei in late 1983 and presented to the public in early 1984. Constructed entirely with glass segments and metal poles, it reaches a height of 21.6 metres (71 ft). Its square base has sides of 34 metres (112 ft) and a base surface area of 1,000 square metres (11,000 ft2).\n[…]\nThose criticizing the aesthetics said it was sacrilegious to tamper with the Louvre's majestic old French Renaissance architecture, and called the pyramid an anachronistic intrusion of an Egyptian death symbol in the middle of Paris. Meanwhile, political critics referred to the structure as Pharaoh François' Pyramid.\n[…]\nIn 1605 the city of Paris demolished a 20-foot (6.1 m) pyramid opposite the Louvre after the Jesuits objected to a pillar inscription, according to the memoirs of Maximilien de Béthune (1560 – 1641).\n[…]\nLouvre"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_do_Louvre",
        "situacao": "ok",
        "texto": "A Pirâmide do Louvre é uma estrutura de forma piramidal, construída em vidro e metal, rodeada por três pirâmides menores, no pátio principal do Palácio do Louvre em Paris, França. A Grande Pirâmide serve de entrada principal do Museu do Louvre. Concluída em 1989, tornou-se um ponto de referência para a cidade de Paris.\n[…]\nA construção da pirâmide provocou uma considerável controvérsia, porque muitas pessoas sentiram que o edifício futurista, parecia completamente fora de lugar em frente ao Museu do Louvre, com sua arquitetura clássica. Alguns detratores atribuíram-lhe como um complexo \"faraônico\" de Mitterrand. Outros, vieram para apreciar a justaposição de estilos e contrastantes de arquitetura, como uma fusão bem sucedida do velho e o novo, do clássico e o ultramoderno.\n[…]\nA Pirâmide principal é na verdade, apenas a maior das várias pirâmides de vidro que foram construídas perto do museu, incluindo, a pirâmide que aponta para baixo, La Pyramide Inversée que tem como função de uma clarabóia/janela, em um centro comercial subterrâneo, em frente ao museu.\n[…]\nA história dos 666 painéis originou na década de 1980, quando a brochura oficial havia publicado, durante a construção, de facto, citava este número (até duas vezes, apesar de algumas páginas anteriores, o número total de painéis foi dado como 673). O número 666, também foi citado em vários jornais. O museu do Louvre, no entanto afirma que a Pirâmide contém 673 painéis de vidro (603 losangos e 70 triângulos). Um valor maior foi obtido por David A.\n[…]\nO museu investirá 53,5 milhões de euros num projeto do estúdio de arquitetura Search e foi aprovado pelo próprio Pei - que aos 97 anos não pode viajar a Paris.\n[…]\nI. M. Pei; Arquiteto *(Ver no Youtube, vídeo entrevista com I. M. Pei \"Designing the Louvre\")\n[…]\nMuseu do Louvre\n[…]\n«Photographs of the Louvre Pyramids»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Taj Mahal",
      "descricao": "Mausoléu de mármore branco do século dezessete às margens do rio Yamuna, em Agra, na Índia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Às margens do rio Yamuna, o Taj Mahal fica em que cidade indiana?",
    "resposta": "Agra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taj_Mahal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "The Taj Mahal ( TAHJ mə-HAHL, TAHZH -⁠; Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; lit. 'Crown of the Palace') is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658), to house the tomb of his late wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.\n[…]\nIn the 18th century, the Jat rulers of Bharatpur attacked the Taj Mahal while invading Agra and took away two chandeliers, one of agate and another of silver, which had hung over the main cenotaph and the gold and silver screen. Kanbo, a Mughal historian, said the gold shield which covered the 4.6-metre-high (15 ft) finial at the top of the main dome was also removed during the Jat despoliation.\n[…]\nEver since its construction, the building has been the source of an admiration transcending culture and geography, and so personal and emotional responses have consistently eclipsed scholastic appraisals of the monument. A longstanding myth holds that Shah Jahan planned a mausoleum to be built in black marble as a Black Taj Mahal across the Yamuna river. The idea originates from fanciful writings of Jean-Baptiste Tavernier, a European traveler and gem merchant, who visited Agra in 1665.\n[…]\nNo evidence exists for claims that Lord William Bentinck, governor-general of India in the 1830s, supposedly planned to demolish the Taj Mahal and auction off the marble. Bentinck's biographer John Rosselli says that the story arose from Bentinck's fund-raising sale of discarded marble from Agra Fort. Another myth suggests that beating the silhouette of the finial will cause water to come forth. To this day, officials find broken bangles surrounding the silhouette.\n[…]\nProfile of the Taj Mahal at UNESCO\n[…]\n\"Outlying Buildings\". Taj Mahal. Archived from the original on 4 February 2015. Retrieved 7 February 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taj_Mahal",
        "situacao": "ok",
        "texto": "O Taj Mahal (em hindi: ताज महल) é um mausoléu situado em Agra, na Índia, sendo o mais conhecido dos monumentos do país. Encontra-se classificado pela UNESCO como Patrimônio da Humanidade. Foi anunciado em 2007 como uma das sete maravilhas do mundo moderno.\n[…]\nPara transportar o mármore e outros materiais desde Agra até ao local da edificação, construiu-se uma rampa de terra de 15 km de comprimento. De acordo com os registos da época, para o transporte dos grandes blocos utilizaram-se carreiras especialmente construídas, tiradas por carros de vinte ou trinta bois. Para colocar os blocos em posição foi necessário um elaborado sistema de roldanas montadas sobre postes e vigas de madeira, e a força de juntas de bois e mulas.[carece de fontes]?\n[…]\nOs cronistas europeus, especialmente durante o primeiro período do Raje britânico, sugeriram que alguns dos trabalhos do Taj Mahal tinham sido obra de artesãos europeus. A maioria destas suposições eram puramente especulativas, mas uma referência de 1640, segundo a carta de um frade espanhol que visitou Agra, menciona que Geronimo Veroneo, um aventureiro italiano na corte de Xá Jahan, foi o responsável principal do desenho.\n[…]\nDe acordo com John Rosselli, biógrafo de Bentinck, a história foi criada a partir de outros acontecimentos, de tipo diferente: a venda de mármore proveniente do forte de Agra e a de um famoso embora obsoleto canhão, em ambos casos com fins de beneficência.\n[…]\nEm 2000 a Supremo Tribunal de Justiça indeferiu as petições de Oak relativas à declaração de origem hindu do Taj Mahal, e condenou-o a pagar os custos judiciais. De acordo com Oak, a rejeição pelo governo indiano da sua petição é parte de uma conspiração contra o hinduísmo.\n[…]\n«Fotos do Taj Mahal»\n[…]\n«Taj Mahal em 3D»  no Google Earth",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Mesquita Azul",
      "descricao": "Mesquita do Sultão Ahmed, construída no início do século dezessete em Istambul, na Turquia."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Erguida no início do século dezessete em Istambul, a Mesquita Azul chama atenção pelo número incomum de minaretes. Quantos são?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sultan_Ahmed_Mosque",
        "situacao": "ok",
        "texto": "The Sultan Ahmed Mosque (Turkish: Sultanahmet Camii), popularly known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. It was constructed between 1609 and 1617 during the rule of Ahmed I. It attracts a large number of tourists and is one of the most iconic and popular monuments of Ottoman architecture.\n[…]\nThe mosque has a classical Ottoman layout with a central dome surrounded by four semi-domes over the prayer hall. It is fronted by a large courtyard and flanked by six minarets. On the inside, it is decorated with thousands of Iznik tiles and painted floral motifs in predominantly blue colours, which give the mosque its popular name. The mosque's külliye (religious complex) includes Ahmed's tomb, a madrasa, and several other buildings in various states of preservation.\n[…]\nDuring excavations in the early 20th century, some of the ancient seats were discovered in the mosque's courtyard. Given the mosque's location, size, and number of minarets, it is probable that Sultan Ahmed intended to create a monument that rivalled or surpassed the Hagia Sophia.\n[…]\nThe Blue Mosque is one of the five mosques in Turkey that has six minarets (one in the modern Sabancı Mosque in Adana, the Muğdat Mosque in Mersin, Çamlıca Mosque in Üsküdar and the Green mosque in Arnavutköy).\n[…]\nAs in most major Ottoman religious foundations, the Sultan Ahmed Mosque is the main element of a larger complex of buildings. Unlike in previous imperial mosque complexes, the other structures of this complex are not arranged in a regular, well-organized plan around the mosque. Because the mosque was built next to the Hippodrome, the site created difficulties for a planned complex and the auxiliary buildings were instead placed in various locations near the mosque or around the Hippodrome.\n[…]\nÇamlıca Mosque\n[…]\nShah Mosque"
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
    "indice": 50,
    "ancora": {
      "nome": "Catedral de Brasília",
      "descricao": "Catedral metropolitana de Brasília, com 16 colunas curvas de concreto em forma de hiperboloide."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A Catedral de Brasília, de Niemeyer, lembra mãos erguidas ao céu. Quantas colunas curvas de concreto formam sua estrutura?",
    "resposta": "Dezesseis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cathedral_of_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "The Cathedral of Brasília (Portuguese: Catedral Metropolitana de Brasília, \"Metropolitan Cathedral of Brasília\") is the Roman Catholic cathedral serving Brasília, Brazil, and serves as the seat of the Archdiocese of Brasília. It was designed by Brazilian architect Oscar Niemeyer and engineered by Brazilian structural engineer Joaquim Cardozo, and was completed and dedicated on May 31, 1970.\n[…]\nThe cathedral is a hyperboloid structure constructed from 16 concrete columns weighing 90 tons each.\n[…]\nThe Cathedral of Brasília, officially the Metropolitan Cathedral of Our Lady of Aparecida (Catedral Metropolitana Nossa Senhora Aparecida), dedicated to the Blessed Virgin Mary under her title of Our Lady of Aparecida, proclaimed by the Church as Queen and Patroness of Brazil, was designed by the architect Oscar Niemeyer and projected by the structural engineer Joaquim Cardozo.\n[…]\nCoinciding with the 50th anniversary of Brasília, major renovations were begun on April 21, 2012 to update and repair the building and infrastructure, and address issues with the roof. The exterior glazing is being replaced, and the original stained glass designed by Marianne Peretti (which used hand made glass and thus varied widely in thickness) is being replaced by uniform glass cut and assembled in Brazil from plates manufactured in Germany.\n[…]\nIn addition to the roof repairs, all marble surfaces will be polished, concrete repaired and painted, the angels in the nave will be cleaned and re-mounted, and the bell mechanisms will be replaced. The cathedral will be open to the public during renovation.\n[…]\n15. Mayer, R. A linguagem de Oscar Niemeyer. Masters dissertation. Federal University of Rio Grande do Sul, Brazil, 2003. Available in: https://www.lume.ufrgs.br/handle/10183/6693\n[…]\nPhoto 360° Cathedral of Brasília - GUIABSB (most of roof glass has been restored)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_Metropolitana_de_Bras%C3%ADlia",
        "situacao": "ok",
        "texto": "Catedral Metropolitana - Nossa Senhora Aparecida ou simplesmente Catedral de Brasília, é um templo católico brasileiro, na qual se encontra a cátedra da Arquidiocese de Brasília, localizada na capital federal, ao sul da S1, no Eixo Monumental, região da Esplanada dos Ministérios. A cerimônia de posse do presidente do Brasil tradicionalmente costuma se iniciar nesta catedral.\n[…]\nOs colaboradores habituais do arquiteto também contribuíram para a obra. O complexo projeto estrutural foi feito pelo engenheiro Joaquim Cardozo, que também calculou outras obras desafiadoras da nova cidade, como o Palácio do Congresso Nacional. De uma área de setenta metros de diâmetro, se elevam dezesseis colunas de concreto com noventa toneladas cada (pilares de seção parabólica), num formato hiperboloide.\n[…]\nO projeto estrutural do engenheiro Joaquim Cardozo reduziu o número de pilares para dezesseis, com bases delgadas e, na parte superior, uma laje posta um tanto mais abaixo do previsto. O engenheiro também calculou o efeito de cargas de vento sobre os vitrais e colunas, um cálculo avançado para a época.\n[…]\nA Catedral de Brasília, oficialmente a Catedral Metropolitana Nossa Senhora Aparecida, dedicada à Virgem Maria, sob o título de Nossa Senhora de Aparecida, proclamada pela Igreja como Rainha e Padroeira do Brasil, foi concebida pelo arquiteto Oscar Niemeyer, com projeto estrutural do engenheiro Joaquim Cardozo.\n[…]\nO prédio é formado estrutura hiperboloide de concreto armado, aparece com o seu telhado de vidro a ser alcançado, aberto, para o céu. A maior parte da catedral está abaixo do solo, sendo que apenas o telhado de 70 metros, o telhado oval do batistério e o campanário estão visíveis acima do solo. A forma do telhado é baseada em um hiperboloide com seções assimétricas. A estrutura hiperboloide consiste em 16 colunas de concreto idênticas montadas no local.\n[…]\nOscar Niemeyer",
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
