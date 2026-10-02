Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Relevo e Maravilhas Naturais** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre Nepal e China, o ponto mais alto da Terra acima do nível do mar."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1953, o neozelandês Edmund Hillary chegou ao cume do Everest ao lado de qual alpinista sherpa?",
    "resposta": "Tenzing Norgay",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenzing_Norgay",
      "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenzing_Norgay",
        "situacao": "ok",
        "texto": "Tenzing Norgay (; Sherpa: བསྟན་འཛིན་ནོར་རྒྱས tendzin norgyé; May 1914 – 9 May 1986), born Namgyal Wangdi, and also referred to as Sherpa Tenzing, was a Nepalese-Indian Sherpa mountaineer. On 29 May 1953, he and Edmund Hillary were the first people confirmed to have reached the summit of Mount Everest, as part of the 1953 British Mount Everest expedition. Time named Norgay one of the 100 most influ\n[…]\nIn 1953, Tenzing Norgay took part in John Hunt's expedition; Tenzing had previously been to Everest six times (and Hunt three). A member of the team was Edmund Hillary, who fell into a crevasse but was saved from hitting the bottom by Norgay's prompt action in securing the rope using his ice axe, which led Hillary to consider him the climbing partner of choice for any future summit attempt.\n[…]\nOther relatives include Norgay's nephews, Nawang Gombu and Topgay, who took part in the 1953 Everest expedition; and his grandsons, Tashi Tenzing, who lives in Sydney, Australia, and the Trainor grandsons: Tenzing, Kalden, and Yonden. Tenzing Trainor is an actor who appeared on the  Dreamworks Animation's Abominable.\n[…]\nTenzing, Tashi; Tenzing, Judy (2003). Tenzing Norgay and the Sherpas of Everest. International Marine/Ragged Mountain Press. ISBN 978-0-07-141309-1.\n[…]\nDouglas, Ed (2003). Tenzing: Hero of Everest, a Biography of Tenzing Norgay. Washington, D.C: National Geographic. ISBN 978-0-7922-6983-0.\n[…]\nNorgay, Jamling Tenzing; Coburn, Broughton (2002). Touching My Father's Soul: In The Footsteps of Sherpa Tenzing. London: Ebury Press. ISBN 978-0-09-188467-3.\n[…]\nNorgay, Tenzing; Barnes, Malcolm (1977). After Everest: An Autobiography. London: G. Allen & Unwin. ISBN 978-0-04-920050-0.\n[…]\nNorgay, Tenzing; Ullman, James Ramsey (1955). Man of Everest: The Autobiography of Tenzing. London: George G. Harrap and Co. (also published as The Tiger of the Snows)\n[…]\nTenzing Norgay Sherpa Foundation"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition",
        "situacao": "ok",
        "texto": "The 1953 British Mount Everest expedition was the ninth mountaineering expedition to attempt the first ascent of Mount Everest, and the first confirmed to have succeeded when Tenzing Norgay and Edmund Hillary reached the summit on 29 May 1953 at 11:30 a.m. Led by Colonel John Hunt, it was organised and financed by the Joint Himalayan Committee. News of the expedition's success reached London in ti\n[…]\nThey were led by their Sirdar, Tenzing Norgay, who was attempting Everest for the sixth time and was, according to Band, \"the best-known Sherpa climber and a mountaineer of world standing\". Although Tenzing was offered a bed in the embassy, the remaining Sherpas were expected to sleep on the floor of the embassy garage; they urinated in front of the embassy the following day in protest at the lack of respect they had been shown.\n[…]\nThe first assault party using closed-circuit oxygen equipment was to start from Camp VIII and aim to reach the South Summit (and if possible the Summit), composed of Tom Bourdillon and Charles Evans as only Bourdillon could cope with the experimental sets. The second assault party using open-circuit oxygen equipment was to be the strongest climbing pair, Ed Hillary and Tenzing Norgay; to start from Camp IX higher on the South Col. The third assault party would have been Wilf Noyce and Mike Ward.\n[…]\nOn 27 May, the expedition made its second assault on the summit with the second climbing pair, the New Zealander Edmund Hillary and Sherpa Tenzing Norgay from Nepal. Norgay had previously ascended to a record high point on Everest as a member of the Swiss expedition of 1952. They left Camp IX at 6.30 am, reached the South Summit at 9 am, and reached the summit at 11:30 am on 29 May 1953, climbing the South Col route.\n[…]\nList of 20th-century summiters of Mount Everest\n[…]\nIncludes – Chapter 16: Hilary, Edmund (1953). \"The Summit\". The Ascent of Everest. pp. 197–209"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenzing_Norgay",
        "situacao": "ok",
        "texto": "Sardar Tenzing Norgay (1914 – Darjeeling, 9 de maio de 1986) foi um alpinista e guia de alta montanha sherpa nepalês, tendo sido o primeiro homem a chegar ao topo do monte Everest, em companhia de Sir Edmund Hillary.\n[…]\nDepois de várias tentativas, Norgay conseguiu estar entre os primeiros a chegar ao cume do monte Everest, quando da expedição liderada por John Hunt em 29 de Maio de 1953. Edmund Hillary e Tenzing Norgay foram os primeiros a atingir o pico.\n[…]\nEm 1952, Tenzing teria atingido uma altitude jamais alcançada anteriormente, 8 599 m, com a equipe de uma expedição suíça dirigida por Raymond Lambert. Tenzing tornou-se em seguida responsável pelo treinamento in situ do Instituto de Alpinismo do Himalaia (Himalayan Montaineering Institute), em Darjeeling. Em 1978 ele fundou a empresa Tenzing Norgay Adventures, propondo escaladas no Himalaia.\n[…]\nDesde 2003, essa empresa é dirigida pelo filho de Tenzing Norgay e que se chama Jamling Tenzing Norgay, que também escalou o Everest em 1996.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre Nepal e China, o ponto mais alto da Terra acima do nível do mar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O calcário do cume do Everest guarda fósseis de animais antigos. Onde viviam esses animais?",
    "resposta": "No fundo do mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Everest",
      "https://en.wikipedia.org/wiki/Qomolangma_Formation"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Everest",
        "situacao": "ok",
        "texto": "Mount Everest (known in Nepali as Sagarmāthā, in Sherpa as Chamolangma, and in Tibetan  as Jomolangma/Čhomolangma is the highest mountain on Earth above sea level. It lies in the Mahalangur Himal sub-range of the Himalayas and marks part of the China–Nepal border at its summit. Its height was most recently measured in 2020 through a joint survey by Nepalese and Chinese authorities as 8,848.86 m (2\n[…]\nMount Everest's Nepali name is सगरमाथा = Sagarmāthā (in IAST transcription), pronounced [sʌɡʌrmatʰa], lit. ''head in the sky'' (loosely translated as \"goddess of the sky\").\n[…]\nMiyolangsangma, a Tibetan Buddhist \"Goddess of Inexhaustible Giving\", is believed to have lived at the top of Mount Everest. According to Sherpa Buddhist monks, Mount Everest is Miyolangsangma's palace and playground, and all climbers are only partially welcome guests, having arrived without invitation.\n[…]\nThe Sherpa people also believe that Mount Everest and its flanks are blessed with spiritual energy, and one should show reverence when passing through this sacred landscape. Here, the karmic effects of one's actions are magnified, and impure thoughts are best avoided.\n[…]\nAstill, Tony (2005). Mount Everest: The Reconnaissance 1935.\n[…]\nHoldich, Thomas (1911). \"Everest, Mount\" . Encyclopædia Britannica. Vol. 10 (11th ed.). p. 7.\n[…]\nWashburn, Bradford (November 1988). \"Mount Everest: Surveying the Third Pole\". National Geographic. Vol. 174, no. 5. pp. 652–659. ISSN 0027-9358. OCLC 643483454.\n[…]\nMount Everest on Himalaya-Info.org (German)\n[…]\n360 panorama view from top of Mount Everest – large dimension drawing\n[…]\nNational Geographic site on Mount Everest\n[…]\nNOVA site on Mount Everest\n[…]\nMount Everest on Summitpost\n[…]\nMount Everest panorama, Mount Everest interactive panorama (QuickTime format), Virtual panoramas\n[…]\nHimalayan Database: Data Visualization of Mount Everest Summit, Attempt, and Death"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Qomolangma_Formation",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Evereste",
        "situacao": "ok",
        "texto": "Monte Everest ou, na sua forma portuguesa, Evereste, também conhecido no Nepal como Sagarmāthā (सगरमाथा), no Tibete como Chomolungma (ཇོ་མོ་གླང་མ) e Zhūmùlǎngmǎ Fēng em chinês (珠穆朗玛峰), é a montanha de maior altitude da Terra. Seu pico está a 8 848,86 metros acima do nível do mar, na subcordilheira Mahalangur Himal dos Himalaias. A fronteira internacional entre o distrito nepalês do Solukhumbu e o \n[…]\nO cume do Everest é o ponto em que a superfície da Terra atinge a maior distância acima do nível do mar. Diversas outras montanhas são por vezes reivindicadas como sendo as \"montanhas mais altas da Terra\". O Mauna Kea, no Havai, é a mais alta quando medida a partir da sua base; ele eleva-se mais de 10 200 m (33 464,6 ft) da sua base no fundo do oceano, mas atinge apenas 4 205 m (13 796 ft) acima do nível do mar.\n[…]\nEmbora geralmente menos popular do que a primavera, o Monte Everest também tem sido escalado no outono (também chamada de \"temporada pós-monção\"). Por exemplo, em 2010, Eric Larsen e cinco guias nepaleses chegaram ao cume do Everest no outono pela primeira vez em dez anos. A temporada de outono, quando a monção termina, é considerada mais perigosa porque normalmente há muita neve fresca que pode ser instável.\n[…]\nO astronauta dos EUA Karl Gordon Henize morreu em outubro de 1993 numa expedição de outono, enquanto conduzia uma experiência sobre radiação. A quantidade de radiação de fundo aumenta com altitudes mais elevadas.\n[…]\nEm maio de 2005, o piloto francês Didier Delsalle aterrou um helicóptero Eurocopter AS350 B3 no cume do Monte Everest. Ele precisava de aterrar por dois minutos para estabelecer o recorde oficial da Federação Aeronáutica Internacional (FAI), mas permaneceu durante cerca de quatro minutos, por duas vezes. Neste tipo de aterragem, os rotores permanecem engatados, o que evita depender da neve para suportar totalmente a aeronave.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Himalaia",
      "descricao": "Cordilheira da Ásia que separa o subcontinente indiano do planalto do Tibete e reúne as montanhas mais altas do mundo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em sânscrito, o nome Himalaia significa morada de quê?",
    "resposta": "Da neve",
    "fonte": [
      "https://en.wikipedia.org/wiki/Himalayas",
      "https://pt.wikipedia.org/wiki/Himalaia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Himalayas",
        "situacao": "ok",
        "texto": "The Himalayas, or Himalaya, is a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the highest peaks on Earth, including the highest, Mount Everest. More than 100 peaks exceeding elevations of 7,200 metres (23,600 feet) above sea level lie in the Himalayas.\n[…]\nDespite their scale, the Himalayas do not form a major continental divide, and a number of rivers cut through the range, particularly in the eastern part of the range. As a result, the main ridge of the Himalayas is not clearly defined, and mountain passes are not as significant for traversing the range as with other mountain ranges. Himalayas' rivers drain into two large systems:\n[…]\nLocal impacts on climate are significant throughout the Himalayas. Temperatures fall by 0.2 to 1.2 °C for every 100 m (330 ft) rise in altitude. This gives rise to a variety of climates, from a nearly tropical climate in the foothills, to tundra and permanent snow and ice at higher elevations.\n[…]\nThe Rai and Limbu women wear big gold earrings and nose rings to show their wealth through their jewelry. Several places in the Himalayas are of religious significance in Buddhism, Jainism, Sikhism, Islam and Hinduism. A notable example of a religious site is Paro Taktsang, where Padmasambhava is said to have founded Buddhism in Bhutan.\n[…]\nSerenari, Christopher; Leung, Yu-Fai; Attarian, Aram; Franck, Chris (2012), \"Understanding environmentally significant behavior among whitewater rafting and trekking guides in the Garhwal Himalaya, India\", Journal of Sustainable Tourism, 20 (5): 757–772, Bibcode:2012JSusT..20..757S, doi:10.1080/09669582.2011.638383, S2CID 153859477\n[…]\nThe Digital Himalaya research project at Cambridge and Yale (archived)\n[…]\nBirth of the Himalaya\n[…]\nBiological diversity in the Himalayas Encyclopedia of Earth"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Himalaia",
        "situacao": "ok",
        "texto": "Himalaias são a mais alta cadeia montanhosa do mundo, localizada entre a planície indo-gangética, ao sul, e o planalto tibetano, ao norte. A cordilheira abrange cinco países (Paquistão, Índia, China (região do Tibete), Nepal e Butão) e nela se situa a montanha mais alta do planeta, o Monte Everest. O nome Himalaia vem do sânscrito e significa \"morada da neve\".\n[…]\nAs altas altitudes dos Himalaias são cobertas por neve durante todo o ano, apesar de sua proximidade aos trópicos; e origina as fontes de vários rios perenes que na sua maioria associam-se a uma das duas bacias:\n[…]\nRecentemente, cientistas têm monitorado o notável aumento da taxa de derretimento dos glaciares do Himalaia devido as alterações climáticas globais. Embora os efeitos desse derretimento não sejam tão claros no presente, eles podem, potencialmente, num futuro próximo, significar uma calamidade para milhões de pessoas que contam com os glaciares para alimentar os rios durante a estação da seca.\n[…]\nAs cadeias de montanhas ocidentais também resultam na precipitação de neve na região de Caxemira e em partes de Punjab e no norte da Índia. Apesar de ser uma barreira para os ventos frios de norte no inverno, o vale do Bramaputra recebe parte dos ventos frios diminuindo a temperatura nos estados do nordeste indiano e do Bangladesh.\n[…]\nEncontra-se acima da linha das árvores, ou seja, nesse ponto em diante não são mais encontradas árvores, e predomina vegetação arbustiva e pastagens alpinas. Entre os mamíferos encontram-se o leopardo-das-neves (Uncia uncia), o carneiro-azul (Pseudois nayaur), o tar (Hemitragus jemlahicus), o takin (Budorcas taxicolor), o goral-himalaio (Nemorhaedus baileyi) e a marmota-himalaia (Marmota himalayana).\n[…]\nHimalaias de Bengala\n[…]\n«Algumas montanhas dos Himalaias»"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Himalaia",
      "descricao": "Cordilheira da Ásia que separa o subcontinente indiano do planalto do Tibete e reúne as montanhas mais altas do mundo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Himalaia se ergueu com a colisão entre a placa tectônica da Eurásia e qual outra placa?",
    "resposta": "Placa Indiana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Himalayas",
      "https://en.wikipedia.org/wiki/Indian_Plate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Himalayas",
        "situacao": "ok",
        "texto": "The Himalayas, or Himalaya, is a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the highest peaks on Earth, including the highest, Mount Everest. More than 100 peaks exceeding elevations of 7,200 metres (23,600 feet) above sea level lie in the Himalayas.\n[…]\nThe Himalayas were uplifted after the collision of the Indian tectonic plate with the Eurasian plate, specifically, by the folding, or nappe-formation of the uppermost Indian crust, even as a lower layer continued to push on into Tibet and add thickness to its plateau; the still lower crust, along with the mantle, however, subducted under Eurasia. The Himalayan mountain range runs west-northwest to east-southeast in an arc 2,400 km (1,500 mi) long.\n[…]\nThe Indian plate was not the only landmass that had rifted from Gondwana and drifted northward toward Eurasia. Before the India-Eurasia collision in Middle Paleocene (60 Mya) and subsequent Himalayan orogeny, two other landmasses, the Qiangtang terrane and Lhasa terrane, had drifted up from Gondwana. Qiangtang, a geological region in what is today northern Tibet, had done so in Late Triassic (237–201 Mya).\n[…]\nDuring the India-Eurasia collision, two elongated protrusions located on either side of the northern border of the Indian continent generated areas of extreme deformation. A point where mountain ranges with different directions of extension, and thus formed by tectonic forces at varying angles, converge is called a syntaxis (Greek: convergence).\n[…]\nGupta, Raj Kumar, Bibliography of the Himalayas, Gurgaon, Indian Documentation Service, 1981.\n[…]\nNandy, S.N., Dhyani, P.P. and Samal, P.K., Resource Information Database of the Indian Himalaya, Almora, GBPIHED, 2006.\n[…]\nBirth of the Himalaya\n[…]\nBiological diversity in the Himalayas Encyclopedia of Earth"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Indian_Plate",
        "situacao": "ok",
        "texto": "The Indian plate is a minor tectonic plate straddling the equator in the Indian Ocean. Originally a part of the ancient continent of Gondwana, the Indian plate broke away from the other fragments of Gondwana 100 million years ago and began moving north, carrying Insular India with it. It was once fused with the adjacent Australian plate to form a single Indo-Australian plate, but recent studies su\n[…]\nHowever, some authors suggest the collision between India and Eurasia occurred much later, around 35 million years ago. If the collision occurred between 55 and 50 Mya, the Indian plate would have covered a distance of 3,000 to 2,000 km (1,900–1,200 mi), moving more quickly than any other known plate.\n[…]\nNew paleomagnetic results of this critical time interval from southern Tibet do not support this Greater Indian Ocean basin hypothesis and the associated dual collision model.\n[…]\nPérez-Díaz concludes that the accelerated movement of the Indian plate is an illusion wrought by large errors in geomagnetic reversal timing around the Cretaceous–Paleogene boundary, and that a recalibration of the time scale shows no such acceleration exists.\n[…]\nThe Indian plate is currently moving north-east at five cm (2.0 in) per year, while the Eurasian plate is moving north at only two cm (0.79 in) per year. This is causing the Eurasian plate to deform, and the Indian plate to compress at a rate of four mm (0.16 in) per year.\n[…]\nThe westerly side of the Indian plate is a transform boundary with the Arabian plate called the Owen fracture zone, and a divergent boundary with the African plate called the Central Indian Ridge (CIR). The northerly side of the plate is a convergent boundary with the Eurasian plate forming the Himalaya and Hindu Kush mountains, called the Main Himalayan Thrust.\n[…]\nList of tectonic plate interactions\n[…]\nList of tectonic plates\n[…]\nMedia related to Indian tectonic plate at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Himalaias",
        "situacao": "ok",
        "texto": "Himalaias são a mais alta cadeia montanhosa do mundo, localizada entre a planície indo-gangética, ao sul, e o planalto tibetano, ao norte. A cordilheira abrange cinco países (Paquistão, Índia, China (região do Tibete), Nepal e Butão) e nela se situa a montanha mais alta do planeta, o Monte Everest. O nome Himalaia vem do sânscrito e significa \"morada da neve\".\n[…]\nOs Himalaias estão entre as formações montanhosas mais jovens do planeta. De acordo com a moderna teoria das placas tectônicas, sua formação é resultado de uma colisão continental, ou então do processo de orogenia (isto é, processo de formação de montanhas) entre os limites convergentes entre as placas Indo-australiana e da Eurásia. A colisão iniciou-se no Cretáceo Superior há cerca de 70 milhões de anos, quando a placa Indo-australiana se moveu rumo ao norte e colidiu com a placa da Eurásia.\n[…]\nA placa Indo-australiana ainda se move numa proporção de 67 mm/ano, e nos próximos dez milhões de anos avançará cerca de 1 500 km para o interior da Ásia. Cerca de 20 mm/ano da convergência da Índia com a Ásia é absorvida pelo empuxo ao longo da frente sul dos Himalaias. Isto leva os Himalaias a elevarem-se cerca de 5 mm/ano; fazendo com que eles sejam geologicamente ativos.\n[…]\nO movimento da placa indiana em direção à placa eurasiática também faz esta região ser sismicamente ativa, induzindo terremotos periodicamente.\n[…]\nNa planície Indo-gangética, na base dos Himalaias, uma planície aluvial drenada pelos rios Indo, Ganges e Bramaputra, uma vegetação exuberante se distribui, de oeste para leste, variando conforme a intensidade das chuvas. Uma vegetação xerófila ocupa as planícies do Indo no Paquistão e no Punjab (Índia). Mais a leste uma floresta decídua úmida se estende pelos estados indianos de Uttar Pradesh, Bihar e Bengal Ocidental, seguindo o curso do Ganges.\n[…]\nHimalaias de Bengala",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Deserto do Saara",
      "descricao": "Maior deserto quente do mundo, que ocupa grande parte do norte da África."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Saara vem de uma palavra árabe. O que essa palavra significa?",
    "resposta": "Deserto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sahara",
      "https://pt.wikipedia.org/wiki/Saara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sahara",
        "situacao": "ok",
        "texto": "The Sahara (, ) is a desert spanning North Africa. With an area of 9,200,000 square kilometres (3,600,000 sq mi), it is the largest hot desert in the world and the third-largest desert overall, smaller only than the deserts of Antarctica and the northern Arctic.\n[…]\nThe Sahara is the world's largest hot desert. It is located in the horse latitudes under the subtropical ridge, a significant belt of semi-permanent subtropical warm-core high pressure where the air from the upper troposphere usually descends, warming and drying the lower troposphere and preventing cloud formation.\n[…]\nThe Byzantine Empire ruled the northern shores of the Sahara from the 5th to the 7th centuries. After the Muslim conquest of Arabia, specifically the Arabian peninsula, the Muslim conquest of North Africa began in the mid-7th to early 8th centuries and Islamic influence expanded rapidly on the Sahara. By the end of 641 all of Egypt was in Muslim hands. Trade across the desert intensified, and a significant slave trade crossed the desert.\n[…]\nBy the beginning of the 20th century, the trans-Saharan trade had clearly declined because goods were moved through more modern and efficient means, such as airplanes, rather than across the desert.\n[…]\nIn the post–World War II era, several mines and communities have developed to use the desert's natural resources. These include large deposits of oil and natural gas in Algeria and Libya, and large deposits of phosphates in Morocco and Western Sahara. Libya's Great Man-Made River is the world's largest irrigation project.\n[…]\nList of deserts\n[…]\nList of deserts by area\n[…]\nList of Saharan explorers\n[…]\nSahara Sea – Engineering project to flood parts of the Sahara Desert with sea water\n[…]\nTrans-Saharan slave trade – c. 650–1930 CE slave trade"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saara",
        "situacao": "ok",
        "texto": "O Deserto do Saara (português brasileiro) ou Deserto do Sara ou Deserto do Sáara (português europeu) (em árabe: الصحراء الكبرى; romaniz.: aṣ-ṣaḥrā al-koubra) é conhecido por ser o maior deserto quente do mundo. Oficialmente, é o terceiro maior deserto da Terra, logo após a Antártida e o Ártico, pois estas duas também são consideradas desertos.\n[…]\nO nome Saara é uma transliteração da palavra árabe صحراء, que por sua vez é a tradução da palavra tuaregue tenere (deserto). O deserto do Saara compreende parte dos seguintes países e territórios: Argélia, Chade, Egito, Líbia, Mali, Mauritânia, Marrocos, Níger, Saara Ocidental, Sudão e Tunísia. Atualmente vivem cerca de 2,5 milhões de pessoas na região do Saara.\n[…]\nO Saara é conhecido por ter um dos climas mais áridos do mundo. O vento que vem do nordeste prevalece, e pode por várias vezes fazer com que a areia dê forma a \"furacões\". As precipitações, muito raras mas não desconhecidas, acontecem ocasionalmente nas zonas de beira-mar ao norte e ao sul, e o deserto recebe aproximadamente 25 mm de chuva em um ano. As chuvas acontecem muito raramente, geralmente torrenciais após os longos períodos secos, que podem durar anos.[carece de fontes]?\n[…]\nDromedários e cabras são os animais predominantes no Saara. Por causa das suas habilidades de sobrevivência, da resistência e da velocidade, o dromedário é o animal favorito dos nômades. Dentre os mamíferos também há o feneco, um onívoro, o Dassie, cujo primeiro fóssil encontrado remonta a 40 milhões de anos atrás e o adax, um grande antílope branco, o qual atualmente é uma espécie ameaçada. Muito adaptado ao deserto, pode sobreviver por até um ano sem água.\n[…]\nA chita do Saara vive no Níger, no Mali e no Chade.\n[…]\n«Fauna e flora do deserto do Saara.» (em inglês)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Deserto do Saara",
      "descricao": "Maior deserto quente do mundo, que ocupa grande parte do norte da África."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Levada pelo vento sobre o Atlântico, a poeira do Saara ajuda a fertilizar qual grande floresta sul-americana?",
    "resposta": "Floresta Amazônica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bod%C3%A9l%C3%A9_Depression",
      "https://en.wikipedia.org/wiki/Amazon_rainforest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bod%C3%A9l%C3%A9_Depression",
        "situacao": "ok",
        "texto": "The Bodélé Depression (pronounced [bɔ.de.le]), located at the southern edge of the Sahara Desert in north central Africa, is the lowest point in Chad. It is 500 km long, 150 km wide and around 160 m deep. Its bottom lies about 155 meters above sea level. The dry endorheic basin is a major source of fertile dust essential for the Amazon rainforest, with some studies suggesting that it supplies over\n[…]\nDiatoms from these fresh water lakes, once part of the prehistoric Mega-Lake Chad, now make up the surface of the depression and are the source material for the dust, which, carried across the Atlantic Ocean, is an important source of nutrient minerals for the Amazon rainforest.\n[…]\nThis jet maximum coincides with the exit gap of the North-easterlies between the Tibesti mountains and the Ennedi massif, which lie 2600 m and 1000 m above the flat terrain in the Djourab Desert of Chad, respectively. The effect of the Tibesti massif is clearly evident in creating a split in the low-level easterly flow north and south of these mountains. While the jet feature is pronounced over the Bodélé, it is absent from other longitudes over west Africa along 18 N.\n[…]\nThe same researchers who in 2004 more accurately determined the speed of wind through the depression also published in 2006 work showing that more than half of the dust needed for fertilizing the Amazon rainforest is provided by the Bodélé depression, which deposits up to 50 million tonnes in South America per year.\n[…]\nThe research also shows that, contrary to what was previously thought, most of the Saharan dust that reaches the east coast of the United States originates from a single source—the Bodélé depression."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_rainforest",
        "situacao": "ok",
        "texto": "The Amazon rainforest, also called the Amazon jungle, Amazonia, or simply the Amazon, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7 million km2 (2.7 million sq mi), of which 6 million km2 (2.3 million sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344\n[…]\nDuring the mid-Eocene, it is believed that the drainage basin of the Amazon was split along the middle of the continent by the Purus Arch. Water on the eastern side flowed toward the Atlantic, while to the west water flowed toward the Pacific across the Amazonas Basin. As the Andes Mountains rose, however, a large basin was created that enclosed a lake; now known as the Solimões Basin.\n[…]\nMore than 56% of the dust fertilizing the Amazon rainforest is blown by the wind to the Amazon from the Bodélé depression in Northern Chad in the Sahara desert. The dust contains phosphorus, important for plant growth. The yearly Sahara dust replaces the equivalent amount of phosphorus washed away yearly in Amazon soil from rains and floods.\n[…]\nNASA's CALIPSO satellite has measured the amount of dust transported by wind from the Sahara to the Amazon: an average of 182 million tons of dust are windblown out of the Sahara each year (some dust falls into the Atlantic), 15% of which of falls over the Amazon basin (22 million tons of it consisting of phosphorus).\n[…]\nScientists at the Brazilian National Institute of Amazonian Research argued in the article that this drought response, coupled with the effects of deforestation on regional climate, are pushing the rainforest towards a \"tipping point\" where it would irreversibly start to die. It concluded that the forest is on the brink of being turned into savanna or desert, with catastrophic consequences for the world's climate."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Depress%C3%A3o_de_Bod%C3%A9l%C3%A8",
        "situacao": "ok",
        "texto": "A depressão Bodélé é uma depressão africana localizada no Chade que teria se formado quando o maior lago da África, o mega-lago Chade, secou há cerca de mil anos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em tupi-guarani, o que significa o nome Iguaçu?",
    "resposta": "Água grande",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Igua%C3%A7u",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Igua%C3%A7u",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nSeu nome vem das palavras Tupi ou Guarani y ɨ (água) e ûasú waˈsu (grande). Reza a lenda que um deus planejava se casar com uma bela mulher chamada Naipi, que fugiu com seu amante mortal Tarobá em uma canoa. Com raiva, o deus cortou o rio, criando as cachoeiras e condenando os amantes a uma queda eterna. O primeiro europeu a descobrir e descrever as cataratas foi o conquistador espanhol Álvar Núñez Cabeza de Vaca, em 31 de janeiro de 1542, e uma das quedas no lado argentino recebeu seu nome.\n[…]\nA área das Cataratas do Iguaçu passou a ser predominantemente ocupada por povos guaranis, pertencentes ao tronco linguístico tupi-guarani, que migraram para o sul da América do Sul e estabeleceram aldeias ao longo dos rios Paraná e Iguaçu. Diversas narrativas tradicionais associadas às cataratas sobreviveram entre os povos indígenas da região, destacando-se a lenda de Naipi e Tarobá, que explica a origem das quedas d'água por meio da ação de uma divindade ligada às forças da natureza.\n[…]\nO sistema consiste de 275 cachoeiras ao longo de 2,7 km do rio Iguaçu. Algumas das quedas individuais têm  até 82 metros de altura, embora a maioria tenha cerca de 64 metros. A Garganta do Diabo é a queda com maior fluxo das Cataratas do Iguaçu, que têm cerca de 275 quedas de água, com uma altura superior a 70 metros ao longo de 2,7 km do Rio Iguaçu. A Garganta do Diabo principia em forma de \"U\" invertido com 150 metros de largura e 80 metros de altura.\n[…]\nCataratas do Iguaçu no X\n[…]\nCataratas do Iguaçu no Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; howe\n[…]\nThe name Iguazú comes from the Guarani or Tupi words y [ɨ], meaning 'water', and ûasú [waˈsu], meaning 'big'. Legend has it that a deity planned to marry a beautiful woman named Naipí, who fled with her mortal lover Tarobá in a canoe. In a rage, the deity sliced the river, creating the waterfalls and condemning the lovers to an eternal fall. The first European to record the existence of the falls was the Spanish Conquistador Álvar Núñez Cabeza de Vaca in 1541.\n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nThe falls may be reached from two main towns, with one on either side of the falls: Foz do Iguaçu in Brazil and Puerto Iguazú in Argentina, as well as from Ciudad del Este, Paraguay, on the other side of the Paraná River from Foz do Iguaçu, each of those three cities having commercial airports. The falls are shared by the Iguazú National Park (Argentina) and Iguaçu National Park (Brazil). The two parks were designated UNESCO World Heritage Sites in 1984 and 1986, respectively.\n[…]\nIguazu Falls has been featured in several TV shows and films, including:\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)\n[…]\nIguazu Falls at UNESCO World Heritage Centre\n[…]\nIguazu Falls facts at BeautifulWorld.com\n[…]\n\"Iguazu Falls\". World Waterfall Database."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Qual é o nome do salto mais imponente das Cataratas do Iguaçu, um cânion estreito em forma de U?",
    "resposta": "Garganta do Diabo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Igua%C3%A7u",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Igua%C3%A7u",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nO sistema consiste de 275 cachoeiras ao longo de 2,7 km do rio Iguaçu. Algumas das quedas individuais têm  até 82 metros de altura, embora a maioria tenha cerca de 64 metros. A Garganta do Diabo é a queda com maior fluxo das Cataratas do Iguaçu, que têm cerca de 275 quedas de água, com uma altura superior a 70 metros ao longo de 2,7 km do Rio Iguaçu. A Garganta do Diabo principia em forma de \"U\" invertido com 150 metros de largura e 80 metros de altura.\n[…]\nEstá localizada no Parque Nacional do Iguaçu  estado do Paraná, Brasil, fazendo fronteira com o Parque Nacional Iguazú, na província de Misiones, Argentina. Embora o território brasileiro abrigue mais de 95% da bacia do rio Iguaçu, dois terços das cataratas ficam em território argentino.\n[…]\nO acesso pela Argentina é facilitado pelo Trem Ecológico da Selva, que leva os visitantes diretamente para a entrada da Garganta do Diabo, bem como as trilhas superiores e inferiores.\n[…]\nA lenda de Naipi e Tarobá, de origem kaingang, é uma das narrativas mais simbólicas associadas às Cataratas do Iguaçu e à cultura de Foz do Iguaçu. Segundo a tradição, Mboi, uma divindade em forma de serpente e guardião das águas, exigia o sacrifício anual de uma jovem para manter a harmonia entre a natureza e a comunidade. Quando Naipi foi escolhida para o ritual, seu amado, o guerreiro Tarobá, fugiu com ela pelo Rio Iguaçu.\n[…]\nCataratas do Iguaçu no X\n[…]\nCataratas do Iguaçu no YouTube\n[…]\nCataratas do Iguaçu no TripAdvisor\n[…]\nCataratas do Iguaçu no Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; howe\n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nAbout half of the river's flow falls into a long and narrow chasm called the Devil's Throat (Garganta del Diablo in Spanish or Garganta do Diabo in Portuguese).\n[…]\nThe falls may be reached from two main towns, with one on either side of the falls: Foz do Iguaçu in Brazil and Puerto Iguazú in Argentina, as well as from Ciudad del Este, Paraguay, on the other side of the Paraná River from Foz do Iguaçu, each of those three cities having commercial airports. The falls are shared by the Iguazú National Park (Argentina) and Iguaçu National Park (Brazil). The two parks were designated UNESCO World Heritage Sites in 1984 and 1986, respectively.\n[…]\nThe Argentine access, across the forest, is by a Rainforest Ecological Train very similar to the one in Disney's Animal Kingdom. The train brings visitors to the entrance of Devil's Throat, as well as the upper and lower trails. The Paseo Garganta del Diablo is a 1 km-long (0.6 mi) trail that brings visitors directly over the falls of Devil's Throat, the highest and deepest of the falls.\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)\n[…]\nIguazu Falls at UNESCO World Heritage Centre\n[…]\nIguazu Falls facts at BeautifulWorld.com\n[…]\n\"Iguazu Falls\". World Waterfall Database."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Cataratas Vitória",
      "descricao": "Queda d'água do rio Zambeze, na fronteira entre Zâmbia e Zimbábue."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os povos locais chamam as Cataratas Vitória de Mosi-oa-Tunya. O que significa esse nome?",
    "resposta": "A fumaça que troveja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_Falls",
      "https://pt.wikipedia.org/wiki/Cataratas_Vit%C3%B3ria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_Falls",
        "situacao": "ok",
        "texto": "Victoria Falls (Lozi: Mosi-oa-Tunya, \"Thundering Smoke/Smoke that Rises\"; Tonga: Shungu Namutitima, \"Boiling Water\") is a waterfall on the Zambezi River, located on the border between Zambia and Zimbabwe. It is one of the world's largest waterfalls, with a width of 1,708 m (5,604 ft). The region around it has a high degree of biodiversity in both plants and animals.\n[…]\nThe nearby national park in Zambia is named Mosi-oa-Tunya, whereas the national park and town on the Zimbabwean shore are both named Victoria Falls.\n[…]\nFirst Gorge: the one the river falls into at Victoria Falls\n[…]\nThe southern Tonga people known as the Batoka/Tokalea called the falls Shungu na mutitima. The Matabele, later arrivals, named them aManz' aThunqayo, and the Batswana and Makololo (whose language is used by the Lozi people) call them Mosi-o-Tunya. All these names mean essentially \"the smoke that thunders\".\n[…]\nThe two national parks at the falls are relatively small– Mosi-oa-Tunya National Park is 66 km2 (25 sq mi) and Victoria Falls National Park is 23 km2 (8.9 sq mi). However, next to the latter on the southern bank is the Zambezi National Park, extending 40 km (25 mi) west along the river. Animals can move between the two Zimbabwean parks and can also reach Matetsi Safari Area, Kazuma Pan National Park and Hwange National Park to the south.\n[…]\nThe national parks contain abundant wildlife including sizeable populations of African bush elephant, Cape buffalo, giraffe, Grant's zebra, and a variety of antelope. Lions, African leopards and South African cheetahs are only occasionally seen. Vervet monkeys and baboons are common. Southern white rhinoceroses inhabit Mosi-oa-Tunya National Park. Black rhinoceroses roam Victoria Falls Private Game Reserve. The river above the falls contains large populations of hippopotamus and Nile crocodile.\n[…]\n\"Victoria Falls\". UNESCO World Heritage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_Vit%C3%B3ria",
        "situacao": "ok",
        "texto": "As cataratas de Vitória ou quedas de Vitória (o conjunto de quedas é chamado de Mosi-o-Tunya em tonga, que em português significa a fumaça que troveja) são uma das mais espetaculares quedas d'água do mundo. Situam-se no rio Zambeze, na fronteira entre a Zâmbia e o Zimbábue, e têm cerca de 1,5 km de largura e altura máxima de 128 m. Ao saltar, o Zambeze mergulha na garganta de Kariba e atravessa vá\n[…]\nTanto o Parque Nacional de Mosi-oa-Tunya quanto o Parque Nacional das Cataratas Vitória, no Zimbábue, estão inscritos desde 1989 na lista de Património Cultural da Humanidade mantida pela Unesco. Esta igualmente conservada por estar dentro da Área de Conservação Transfronteiriça Cubango-Zambeze.\n[…]\nOficialmente, no entanto, Livingstone foi o primeiro ocidental a avistá-las em 17 de novembro de 1855, dando-lhes o nome em honra à rainha Vitória — o nome local é  Mosi-oa-tunya, que quer dizer \"fumo que troveja\", em referência ao vapor que sobe da garganta das quedas.\n[…]\n«Livingstone deu às cataratas um novo nome, ‘Vitória’, em homenagem à rainha Vitória, que na época regia o Reino Unido. Livingstone mais tarde diria que as cataratas foram a coisa mais impressionante que chegou a ver durante seus trinta anos de exploração da África.»\n[…]\nEm 1860, Livingstone voltou à zona das cataratas e fez um estudo detalhado. Formidável explorador, além das quedas de Vitória, atravessou duas vezes o deserto do Calaári, navegou o rio Zambeze de Angola até Moçambique, procurou as fontes do rio Nilo e foi o primeiro europeu a atravessar o Lago Tanganica.\n[…]\nEm 1905 foi inaugurada a ponte ferroviária Cataratas Vitória, que passa perto das quedas de água e que liga a Zâmbia e o Zimbábue."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Cataratas Vitória",
      "descricao": "Queda d'água do rio Zambeze, na fronteira entre Zâmbia e Zimbábue."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1855, que explorador escocês deu às grandes cataratas do rio Zambeze o nome da rainha britânica?",
    "resposta": "David Livingstone",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_Falls",
      "https://en.wikipedia.org/wiki/David_Livingstone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_Falls",
        "situacao": "ok",
        "texto": "Victoria Falls (Lozi: Mosi-oa-Tunya, \"Thundering Smoke/Smoke that Rises\"; Tonga: Shungu Namutitima, \"Boiling Water\") is a waterfall on the Zambezi River, located on the border between Zambia and Zimbabwe. It is one of the world's largest waterfalls, with a width of 1,708 m (5,604 ft). The region around it has a high degree of biodiversity in both plants and animals.\n[…]\nDavid Livingstone was the first European recorded to have viewed the falls on 16 November 1855, from an island now known as Livingstone Island, one of two land masses in the middle of the river, immediately upstream from the falls near the Zambian shore. Livingstone named his sighting in honour of Queen Victoria, but the Lozi language name Mosi-oa-Tunya, meaning \"the smoke that thunders\", continues in common usage. Both names are recognised in the World Heritage List.\n[…]\nA map drawn by Nicolas de Fer in 1715 shows the fall clearly marked in the correct position. It also shows dotted lines denoting trade routes that David Livingstone followed 140 years later. A map from c. 1750 drawn by Jacques Nicolas Bellin for Abbé Antoine François Prevost d'Exiles marks the falls as \"cataractes\" and notes a settlement to the north of the Zambezi as being friendly with the Portuguese at the time.\n[…]\nIn November 1855, David Livingstone was the first European who saw the falls, when he travelled from the upper Zambezi to the mouth of the river between 1852 and 1856. The falls were well known to local tribes, and Voortrekker hunters may have known of them, as may the Arabs under a name equivalent to \"the end of the world\". Europeans were sceptical of their reports, perhaps thinking that the lack of mountains and valleys on the plateau made a large fall unlikely.\n[…]\nLivingstone had been told about the falls before he reached them from upriver and was paddled across to the Livingstone Island in Zambia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/David_Livingstone",
        "situacao": "ok",
        "texto": "David Livingstone (; 19 March 1813 – 1 May 1873) was a Scottish doctor, Congregationalist, pioneer Christian missionary with the London Missionary Society, and an explorer in Africa. Livingstone was married to Mary Moffat Livingstone, from the prominent 18th-century Moffat missionary family.\n[…]\nA new statue of David Livingstone was erected in November 2005 on the Zambian side of Victoria Falls.\n[…]\nThe David Livingstone Memorial statue at Victoria Falls, Zimbabwe, erected in 1934 on the western bank of the falls. Michler 2007 quoted 1954 which is wrong. The statue was unveiled on 5 August 1934\n[…]\nDavid Livingstone Memorial Primary School in Blantyre.\n[…]\nThe David Livingstone (Anderson College) Memorial Prize in Physiology commemorates him at the University of Glasgow.\n[…]\nDavid Livingstone Primary School in Thornton Heath, South London.\n[…]\nDavid Livingstone Elementary School, Vancouver.\n[…]\nDavid Livingstone Community School, Winnipeg.\n[…]\nLivingstone has been portrayed by M. A. Wetherell in Livingstone (1925), Percy Marmont in David Livingstone (1936), Sir Cedric Hardwicke in Stanley and Livingstone (1939), Michael Gough in BBC television series The Search for the Nile (1971), Bernard Hill in Mountains of the Moon (1990) and Sir Nigel Hawthorne in the TV movie Forbidden Territory (1997).\n[…]\nLivingstone Online – Explore the manuscripts of David Livingstone Images of original documents alongside transcribed, critically edited versions\n[…]\nDavid Livingstone (c. 1956) Archived 1 April 2012 at the Wayback Machine. Archive film from the National Library of Scotland: Scottish Screen Archive\n[…]\nWorks by David Livingstone at Project Gutenberg\n[…]\nThe Personal Life of David Livingstone\n[…]\nWorks by or about David Livingstone at the Internet Archive\n[…]\nWorks by David Livingstone at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_de_Vit%C3%B3ria",
        "situacao": "ok",
        "texto": "As cataratas de Vitória ou quedas de Vitória (o conjunto de quedas é chamado de Mosi-o-Tunya em tonga, que em português significa a fumaça que troveja) são uma das mais espetaculares quedas d'água do mundo. Situam-se no rio Zambeze, na fronteira entre a Zâmbia e o Zimbábue, e têm cerca de 1,5 km de largura e altura máxima de 128 m. Ao saltar, o Zambeze mergulha na garganta de Kariba e atravessa vá\n[…]\nUm mapa datado de cerca de 1750, desenhado por Jacques-Nicolas Bellin para o abade Antoine François Prévost, marca as quedas como \"cataractes\" e assinala uma povoação ao norte do Zambeze como sendo na época \"MORTAL\" aos portugueses. Antes ainda, um mapa da África Austral feito por Nicolas de Fer, em 1715, tem a queda claramente marcada na posição correta. Ele também apresenta linhas pontilhadas que denotam rotas comerciais que o explorador escocês David Livingstone seguiria 140 anos mais tarde.\n[…]\nOficialmente, no entanto, Livingstone foi o primeiro ocidental a avistá-las em 17 de novembro de 1855, dando-lhes o nome em honra à rainha Vitória — o nome local é  Mosi-oa-tunya, que quer dizer \"fumo que troveja\", em referência ao vapor que sobe da garganta das quedas.\n[…]\n«Livingstone deu às cataratas um novo nome, ‘Vitória’, em homenagem à rainha Vitória, que na época regia o Reino Unido. Livingstone mais tarde diria que as cataratas foram a coisa mais impressionante que chegou a ver durante seus trinta anos de exploração da África.»\n[…]\nEm 1860, Livingstone voltou à zona das cataratas e fez um estudo detalhado. Formidável explorador, além das quedas de Vitória, atravessou duas vezes o deserto do Calaári, navegou o rio Zambeze de Angola até Moçambique, procurou as fontes do rio Nilo e foi o primeiro europeu a atravessar o Lago Tanganica.\n[…]\nEm 1905 foi inaugurada a ponte ferroviária Cataratas Vitória, que passa perto das quedas de água e que liga a Zâmbia e o Zimbábue.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Vulcão",
      "descricao": "Abertura na crosta terrestre por onde saem magma, gases e cinzas, e a montanha formada por esse material."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra vulcão vem, através do nome de uma ilha italiana, de qual deus romano do fogo?",
    "resposta": "Vulcano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volcano",
      "https://en.wikipedia.org/wiki/Vulcano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volcano",
        "situacao": "ok",
        "texto": "A volcano is a vent or fissure in the crust of a planetary-mass object that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface. On Earth, volcanoes are most often found where tectonic plates are diverging or converging, and because most of Earth's plate boundaries are underwater, most volcanoes are found underwater.\n[…]\nThe word volcano (UK: ; US: ) originates from the early 17th century, derived from the Italian name Vulcano, a volcanic island in the Aeolian Islands of Italy, which in turn comes from the Latin name Volcānus or Vulcānus, referring to Vulcan, the god of fire in Roman mythology.\n[…]\nThe set of processes and phenomena involved in volcanic activity is called volcanism [early 19th century: from volcano + -ism]. The study of volcanism and volcanoes is called volcanology [mid-19th century: from volcano + -logy], sometimes spelled vulcanology.\n[…]\nVulcanian eruptions are characterized by yet higher viscosities and partial crystallization of magma, which is often intermediate in composition. Eruptions take the form of short-lived explosions for several hours, which destroy a central dome and eject large lava blocks and bombs. This is followed by an effusive phase that rebuilds the central dome. Vulcanian eruptions are named after Vulcano. Eruption columns from these eruptions do not exceed 20 kilometres (12 mi) in height.\n[…]\nTourism associated with volcanoes is also a worldwide industry.\n[…]\nHowever, others proposed more natural (but still incorrect) causes of volcanic activity. In the fifth century BC, Anaxagoras proposed eruptions were caused by a great wind.\n[…]\nU.S. Federal Emergency Management Agency Volcano advice Archived August 27, 2021, at the Wayback Machine\n[…]\nVolcano World\n[…]\n\"Global Volcanism Program\". Smithsonian Institution."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vulcano",
        "situacao": "ok",
        "texto": "Vulcano (Sicilian: Vurcanu) or Vulcan is a small volcanic island  belonging to Italy in the Tyrrhenian Sea, about 20 km (12 mi) north of Sicily and located at the southernmost end of the seven Aeolian Islands. The island is known for its volcanic activity and contains several volcanic calderas, including one of the four active volcanoes in Italy that are not submarine. The English word \"volcano\" a\n[…]\nThe name derives from the Roman belief that the tiny island was the chimney of Vulcan, the Roman god of fire. In November 2021, 150 people were evacuated from the island's harbour area due to increased volcanic activity and gases; an amber alert had been issued in October 2021 after several significant changes in the volcano's parameters. In the fall of 2025, volcanic unrest increased again with strong gas emissions reported on October 15, 2025.\n[…]\nSince Vulcano island has volcanic activity, it is a place where thermophiles and hyperthermophiles are found. The hyperthermophilic archaean Pyrococcus furiosus was described for the first time when it was isolated from sediments of this island.\n[…]\nThe first ascent of the volcanic cone is documented for the 13th century. The Dominican friar Burchard of Mount Sion, in his pilgrimage report to the Holy Land, tells of his return journey via Sicily, which probably took place in 1284. On Vulcano he had climbed the summit \"crawling on his hands and feet\". His ascent can be considered authentic, as he reports in detail on his observations of the landscape and nature, for example describing the fumaroles or the diameter of the crater.\n[…]\nAn asteroid is named after this island, 4464 Vulcano.\n[…]\nList of volcanoes in Italy\n[…]\nVulcano (Sicily)\n[…]\nEzio Giunta, dir. (2005). \"Vulcano\". Estateolie 2005 the Essential Guide (English Version of Tourist Guidebook): 80–87.\n[…]\n\"Vulcano\". Global Volcanism Program. Smithsonian Institution. Retrieved 2008-12-18."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vulc%C3%A3o",
        "situacao": "ok",
        "texto": "Vulcão é uma estrutura geológica criada quando o magma, gases e partículas quentes (como cinza vulcânica) \"escapam\" para a superfície. Eles ejetam altas quantidades de poeira, gases e aerossóis na atmosfera, interferindo no clima. São frequentemente considerados causadores de poluição natural. Tipicamente, os vulcões apresentam formato cónico e montanhoso.\n[…]\nA palavra \"vulcão\" deriva do nome do deus do fogo na mitologia romana Vulcano. A ciência que estuda os vulcões é chamada de vulcanologia, e o profissional que atua na área vulcanólogo, que deve ter conhecimento em geofísica, a outros ramos da geologia tais como a petrologia e a geoquímica.\n[…]\nNão existe um consenso entre os vulcanologistas para definir o que é um vulcão \"ativo\". O tempo de vida de um vulcão pode ir de alguns meses até alguns milhões de anos. Por exemplo, em vários vulcões na Terra ocorreram várias erupções nos últimos milhares de anos mas atualmente não dão sinais de atividade.\n[…]\nOs vulcões extintos são aqueles que os vulcanólogos consideram pouco provável que entrem em erupção de novo, mas não é fácil afirmar com certeza que um vulcão está realmente extinto.\n[…]\nEstes vulcões encontram-se extintos há vários milhões de anos, mas a sonda europeia Mars Express encontrou indícios de que poderiam ter ocorrido erupções vulcânicas num passado recente em Marte.[carece de fontes]?\n[…]\nUma das luas de Júpiter, Io, é o corpo mais vulcânico de todo o sistema solar devido à interação de forças com Júpiter. Esta lua está coberta de vulcões que expelem enxofre, dióxido de enxofre e rochas ricas em sílica, o que leva a que a sua superfície esteja constantemente a ser renovada. As suas lavas são as mais quentes que se conhecem no sistema solar, com temperaturas que podem ultrapassar os 1 500 °C. Em fevereiro de 2001 a maior erupção de que há registo no sistema solar ocorreu em Io.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Uluru",
      "descricao": "Grande monólito de arenito no centro da Austrália, sagrado para o povo aborígene Anangu."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de adotar oficialmente o nome aborígene Uluru, o grande monólito australiano era conhecido por qual nome inglês?",
    "resposta": "Ayers Rock",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uluru",
      "https://pt.wikipedia.org/wiki/Uluru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (; Pitjantjatjara: Uluṟu [ˈʊlʊɻʊ]), also known as Ayers Rock ( AIRS) and officially gazetted as Uluru / Ayers Rock, is a large sandstone monolith. It crops out near the centre of Australia in the southern part of the Northern Territory, 335 km (208 mi) south-west of Alice Springs.\n[…]\nIn 1993, a dual naming policy was adopted that allowed official names that consist of both the traditional Aboriginal name (in the Pitjantjatjara, Yankunytjatjara and other local languages) and the English name. On 15 December 1993, it was renamed \"Ayers Rock / Uluru\" and became the first official dual-named feature in the Northern Territory.\n[…]\nThe order of the dual names was officially reversed to \"Uluru / Ayers Rock\" on 6 November 2002 following a request from the Regional Tourism Association in Alice Springs.\n[…]\nWhile exploring the area in 1872, Giles sighted Kata Tjuta from a location near Kings Canyon and called it Mount Olga, while the following year Gosse observed Uluru and named it Ayers' Rock, in honour of the Chief Secretary of South Australia, Sir Henry Ayers.\n[…]\nIn 1958, the area that would become the Uluṟu-Kata Tjuṯa National Park was excised from the Petermann Reserve; it was placed under the management of the Northern Territory Reserves Board and named the Ayers Rock–Mount Olga National Park. The first ranger was Bill Harney, a well-recognised central Australian figure. By 1959, the first motel leases had been granted and Eddie Connellan had constructed an airstrip close to the northern side of Uluru.\n[…]\nThere are a number of differing accounts given, by outsiders, of Aboriginal ancestral stories for the origins of Uluru and its many cracks and fissures. One such account, taken from Robert Layton's (1989) Uluru: An Aboriginal history of Ayers Rock, reads as follows:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (também conhecido como Ayers Rock ou The Rock - \"a rocha\") é um monólito situado no norte da área central da Austrália, no Parque Nacional de Uluru-Kata Tjuta perto da pequena cidade de Yulara, 400 km a sudoeste de Alice Springs (25° 20′ 41″ S, 131° 02′ 07″ L).\n[…]\nÉ sagrada aos aborígenes e tem inúmeras fendas, cisternas (poços com água), cavernas rochosas e pinturas antigas. Ayers Rock era o nome dado a ela por colonos europeus, em homenagem ao primeiro-ministro da Austrália Meridional Henry Ayers. Uluru é o nome aborígene, e desde a década de 1980 foi o nome oficialmente escolhido, embora muitas pessoas, especialmente os não-australianos, ainda chamem de Ayers Rock.\n[…]\nEm 1985 o governo australiano devolveu a propriedade de Uluru aos aborígenes locais, os Anangu (aborígenes) arrendaram então de volta ao Governo Australiano pelo período de 99 anos como Parque Nacional.Escalar a pedra é uma atração popular para uma grande fração dos muitos turistas que visitam Ayers Rock a cada ano. Uma corda com alça torna a subida mais fácil, mas ainda é uma subida realmente longa e íngreme e muitos escaladores experientes desistem.\n[…]\nHá várias histórias de turistas que levaram para casa um pedaço do Monte Uluru e devolveram a lembrança alegando que a peça estaria atraindo má-sorte. Eles dizem que foram amaldiçoados por levar uma parte do monumento, considerado sagrado para os aborígenes. O parque nacional australiano, responsável pela administração do monte, diz receber cerca de um pacote por dia, enviado de várias partes do mundo, com uma amostra do Uluru e um pedido de desculpas.\n[…]\nMedia relacionados com Uluru no Wikimedia Commons\n[…]\nParque Nacional Uluṟu - Kata Tjuṯa - Departamento Australiano de Ambiente e Recursos Hídricos"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Pico da Neblina",
      "descricao": "Montanha da Serra do Imeri, no Amazonas, junto à fronteira com a Venezuela, o ponto mais alto do Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por ficar quase sempre encoberto pelas nuvens, que nome recebeu o ponto mais alto do Brasil?",
    "resposta": "Pico da Neblina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pico_da_Neblina",
      "https://en.wikipedia.org/wiki/Pico_da_Neblina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pico_da_Neblina",
        "situacao": "ok",
        "texto": "Pico da Neblina (pronúncia em português: [ˈpiku dɐ neˈblĩnɐ]) é a montanha mais alta do Brasil, com 2995,30 m de altitude. Ergue-se no noroeste do Amazonas, na Serra da Neblina, parte da Serra do Imeri, próximo à borda sul do Planalto das Guianas. O cume fica cerca de 687 m dentro do território brasileiro. O vizinho Pico 31 de Março, segundo ponto mais alto do país, com 2974,18 m, fica diretamente\n[…]\nO Pico 31 de Março ergue-se a menos de um quilômetro de distância, diretamente sobre a fronteira internacional. Com 2974,18 m, é o segundo cume mais alto do Brasil e fica 21,12 m abaixo do Pico da Neblina. Os dois cumes se elevam a partir da parte mais alta da Serra do Imeri.\n[…]\nO Pico da Neblina é o ponto mais alto do Escudo das Guianas. É também o ponto mais alto da América do Sul a leste das cordilheiras andinas. A expressão \"montanha mais alta da América do Sul fora dos Andes\" é menos precisa. A Sierra Nevada de Santa Marta, na Colômbia, é fisicamente separada das principais cordilheiras andinas e se eleva a mais de 5700 m.\n[…]\nA mudança de altitude é especialmente brusca no lado brasileiro. Próximo à foz do Rio Tucano, o lado sudeste do maciço fica a apenas cerca de 50 m acima do nível do mar. O terreno então sobe até 2400 m no alto da Cachoeira do Anta antes de alcançar as cristas mais elevadas. O Pico da Neblina se eleva mais de 2900 m acima de algumas terras baixas próximas.\n[…]\nA partir de 2001, militares de infantaria da Força Aérea Brasileira em Manaus passaram a subir o Pico da Neblina por volta do Dia da Bandeira, em 19 de novembro, para substituir a bandeira brasileira no cume. Chegar ao topo exigia dias de viagem a pé a partir da região de Maturacá. A bandeira antiga era queimada durante a cerimônia do Dia da Bandeira e uma nova era hasteada em um mastro de quatro metros no ponto mais alto do Brasil.\n[…]\nLista de países por ponto mais alto"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pico_da_Neblina",
        "situacao": "ok",
        "texto": "Pico da Neblina (Portuguese pronunciation: [ˈpiku dɐ neˈblĩnɐ], literally \"Mist Peak\") is the highest mountain in Brazil, at 2,995.30 metres (9,827 ft) above sea level. It rises in northwestern Amazonas, in the Serra da Neblina of the Serra do Imeri, near the southern edge of the Guiana Highlands. The summit lies about 687 m (2,254 ft) inside Brazil. Nearby Pico 31 de Março, the country's second-h\n[…]\nAlthough the Neblina massif crosses the Brazil–Venezuela frontier, Pico da Neblina itself lies about 687 m (2,254 ft) inside Brazil.\n[…]\nyanomamii, were named from the Pico da Neblina area in 2026.\n[…]\nIn 2001, photographer José de Paula Machado and writer Márcio Souza published Pico da Neblina: Origens de Nossa Civilização. The 176-page book pairs Machado's photographs of the national park with Souza's writing about the region and its Indigenous peoples.\n[…]\nBeginning in 2001, Brazilian Air Force infantry personnel from Manaus climbed Pico da Neblina around Flag Day, on 19 November, to replace the Brazilian flag at the summit. Reaching the top required days of travel on foot from the Maturacá area. The old flag was burned during the Flag Day ceremony and a new one raised on a 4 m (13 ft) mast at Brazil's highest point.\n[…]\nThe mountain gave its name to the Brazilian HBO drama Pico da Neblina, which premiered in August 2019. The story is set in a fictional São Paulo after cannabis is legalized and follows Biriba, a former illegal dealer who enters the legal market. The series debuted in the United States on HBO Latino as Joint Venture on 9 August 2019. Its second season was released in 2022.\n[…]\nPico da Neblina National Park\n[…]\nMachado, José de Paula; Souza, Márcio (2001). Pico da Neblina: Origens de Nossa Civilização (in Portuguese). Rio de Janeiro: Agir. p. 176. ISBN 978-85-220-0530-7.\n[…]\nPico da Neblina National Park at the Chico Mendes Institute for Biodiversity Conservation (ICMBio)"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pico da Neblina",
      "descricao": "Montanha da Serra do Imeri, no Amazonas, junto à fronteira com a Venezuela, o ponto mais alto do Brasil."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Perto da fronteira com a Venezuela, em que estado brasileiro fica o Pico da Neblina?",
    "resposta": "Amazonas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pico_da_Neblina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pico_da_Neblina",
        "situacao": "ok",
        "texto": "Pico da Neblina (pronúncia em português: [ˈpiku dɐ neˈblĩnɐ]) é a montanha mais alta do Brasil, com 2995,30 m de altitude. Ergue-se no noroeste do Amazonas, na Serra da Neblina, parte da Serra do Imeri, próximo à borda sul do Planalto das Guianas. O cume fica cerca de 687 m dentro do território brasileiro. O vizinho Pico 31 de Março, segundo ponto mais alto do país, com 2974,18 m, fica diretamente\n[…]\nO Pico da Neblina ergue-se na Serra do Imeri, no noroeste do Amazonas, próximo à fronteira com a Venezuela. O cume fica no município de Santa Isabel do Rio Negro. O Parque Nacional do Pico da Neblina se estende para leste até São Gabriel da Cachoeira. De sua área, 70,79% fica em Santa Isabel do Rio Negro e 29,21% em São Gabriel da Cachoeira.\n[…]\nO maciço da Neblina atravessa a fronteira entre Brasil e Venezuela, mas seu cume mais alto não. O Pico da Neblina fica cerca de 687 m dentro do Brasil.\n[…]\nO IBGE substituiu o MAPGEO2015 pelo modelo hgeoHNOR2020 em 2021. Ele converte medições GNSS nas altitudes normais usadas pelo Sistema Geodésico Brasileiro. A altitude oficial do Pico da Neblina é de 2995,30 m.\n[…]\nO Pico da Neblina se ergue na parte ocidental do Escudo das Guianas, integrante do antigo Cráton Amazônico. O maciço da Neblina fica próximo à borda sul das terras altas do Pantepui, separado de outros blocos montanhosos elevados do Escudo das Guianas por terrenos muito mais baixos. Estende-se por cerca de 50 km de norte a sul e 20 km de leste a oeste, com a maior parte do maciço na Venezuela.\n[…]\nO Pico da Neblina se eleva a partir do divisor de águas Amazonas-Orinoco, um cinturão montanhoso que atravessa aproximadamente de sudoeste para nordeste a borda norte do Amazonas. Planaltos elevados são cortados por encostas íngremes, escarpas e vales fluviais muito próximos entre si. Grande parte do terreno imediatamente ao sul das montanhas fica a apenas 100 a 250 m acima do nível do mar."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Salto Ángel",
      "descricao": "Queda d'água que despenca de um tepui no Parque Nacional Canaima, na Venezuela."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do Salto Ángel, na Venezuela, não tem nada de religioso. Ele homenageia quem?",
    "resposta": "Jimmie Angel, aviador americano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angel_Falls",
      "https://en.wikipedia.org/wiki/Jimmie_Angel"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angel_Falls",
        "situacao": "ok",
        "texto": "Angel Falls   (Spanish: Salto Ángel; Pemon: Körepakupai Vená) is a waterfall in Venezuela.\n[…]\nThey were not known to the outside world until American aviator Jimmie Angel flew over them on 16 November 1933 on a flight while he was searching for a valuable ore bed.\n[…]\nThe name of the waterfall—\"Salto del Ángel\"—was first published on a Venezuelan government map in December 1939.\n[…]\nThe first person to jump from Angel Falls was Max Botto of Venezuela in November 1983. The first person to complete a base jump from Angel Falls was American Jerry Bird; even though he leaped after Max Botto, he deployed his parachute later and subsequently landed first.\n[…]\nThe American fantasy-romance film What Dreams May Come (1998), starring Robin Williams, Cuba Gooding Jr, and Annabella Sciorra, is set in Venezuela and shows Angel Falls.\n[…]\nIn November 1983, Mark III Productions of Miami, Florida filmed a short documentary about an expedition to BASE jump from Angel Falls, led by American skydiver Jerry Bird. It was broadcast on ABC's Ripley's Believe It or Not! in 1985.\n[…]\nThe 1990 film Arachnophobia was partly set at Angel Falls.\n[…]\nIn 1997, Folco Quilici wrote Cielo verde a novel – long present in the bestseller list in Italy. Spanish writer Alberto Vázquez-Figueroa covered Jimmie Angel's adventures in his 1998 novel Ícaro— ISBN 9788408025023, later translated into several foreign languages. Another book that details how Angel Falls got its name is Truth or Dare: The Jimmie Angel Story, written by Jan-Willem de Vries ISBN 9781419673665.\n[…]\nVideo Salto Angel filmed by Hakuna Matata. 2023"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jimmie_Angel",
        "situacao": "ok",
        "texto": "James Crawford Angel (August 1, 1899 – December 8, 1956) was an American aviator after whom Angel Falls in Venezuela, the tallest waterfall in the world, is named.\n[…]\nThe falls, which cascade from the top of Auyantepui in the remote Gran Sabana region of Venezuela, were not known to the outside world until Jimmie Angel flew over them on November 16, 1933, while searching for a valuable ore bed.\n[…]\nSpanish writer Alberto Vázquez-Figueroa covered Jimmie Angel's adventures in his 1998 novel Ícaro— ISBN 9788408025023, later translated into several foreign languages. There is also another book that details how Angel Falls got its name:  \"Truth or Dare: The Jimmie Angel Story\" written by Jan-Willem de Vries ISBN 9781419673665.\n[…]\nIn 2019, Angel's niece, Karen Angel, president of the  California-based nonprofit organization the Jimmie Angel Historical Project [JAHP], published \"Angel's Flight - The Life of Jimmie Angel - American Aviator-Explorer - Discoverer of Angel Falls\" [ISBN 978-1-4834-8948-3]. With over two-hundred photographs, the book is the result of twenty-three years of research by her and others. Research continues by the JAHP to verify the facts of his life.\n[…]\nAngel's Flight - The Life of Jimmie Angel - American Aviator-Explorer - Discoverer of Angel Falls, 2019,  by Karen Angel.\n[…]\nClover Air Field, Santa Monica, CA biography of Jimmy Angel\n[…]\nDavis-Monthan Aviation Field Register biography of Jimmy Angel\n[…]\nFlight to the Lost World of Venezuela on YouTube by Jake Howland describing visiting Angel Falls in the 1950s, including images of Angel's abandoned airplane.\n[…]\nJimmie Angel Historical Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_%C3%81ngel",
        "situacao": "ok",
        "texto": "O Salto Ángel ou Cataratas Ángel (nome nativo Parekupa-meru) é o mais alto salto do mundo, com 979 metros de altura (807 metros de queda sem interrupção), gerada pela queda do rio Churún desde o Auyantepui, no Estado de Bolívar, sudeste da Venezuela, próximo da fronteira Brasil-Guiana. Seu nome é alusivo ao aviador estado-unidense James Crawford Angel.\n[…]\nO salto era conhecido pelos indígenas da zona, que o chamavam Kerepakupai-meru (\"queda de água até o lugar mais profundo\"), em idioma pemon, mas seu \"descobrimento\" pelos ocidentais é um assunto controvertido. Alguns historiadores atribuem-no a Ernesto Sánchez, explorador que em 1910 notificou o achado ao Ministério de Minas e Hidrocarburos em Caracas. Outros citam o capitão Félix Cardona Puig, que em 1927, junto a Mundó Freixas, divisou o grande salto no maciço de Auyantepuy.\n[…]\nOs artigos e mapas da Venezuela atraíram a curiosidade e o espírito de aventura do aviador Angel. Em 21 de maio de 1937, Cardona acompanhou Jimmy Angel no sobrevoo ao salto. Em setembro do mesmo ano, Jimmy Angel insiste em aterrissar sobre o Auyantepuy, o que consegue abruptamente, incrustando seu pequeno avião no solo. As notícias do acidente, sem vítimas, motivaram que o grande salto fosse batizado como Salto Ángel.\n[…]\nO Salto Ángel também é conhecido erroneamente como Churún-merú, nome que corresponde a outro salto de uns 400 metros de altura localizado no fim do cañón del Diablo, que ocupa o quarto lugar mundial.\n[…]\no Salto também foi inspirador na produção do filme animado Up - Altas Aventuras, que descreve o local do salto como o \"Paraíso das Cachoeiras\".\n[…]\nMedia relacionados com Salto Angel no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pamukkale",
      "descricao": "Sítio natural no sudoeste da Turquia com terraços brancos de travertino formados por fontes termais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em turco, o que significa Pamukkale, nome dos terraços brancos formados por fontes termais na Turquia?",
    "resposta": "Castelo de algodão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pamukkale",
      "https://pt.wikipedia.org/wiki/Pamukkale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (Turkish pronunciation: [pa.mukˈka.le]) meaning \"cotton castle\" in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for a carbonate mineral left by the flowing of thermal spring water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year.\n[…]\nPamukkale's terraces are made of travertine, a sedimentary rock deposited by mineral water from the hot springs. In this area, there are 17 hot springs with temperatures ranging from 35 °C (95 °F) to 100 °C (212 °F). The water that emerges from the spring is transported 320 metres (1,050 ft) to the head of the travertine terraces and deposits calcium carbonate on a section 60 to 70 metres (200 to 230 ft) long covering an expanse of 24 metres (79 ft) to 30 metres (98 ft).\n[…]\nPamukkale is one of the most visited natural sites in Turkey, attracting more than two million visitors annually. Tourists can bathe in designated thermal pools, including the famous Cleopatra’s Pool, where ancient marble columns lie submerged. To protect the delicate travertine terraces, UNESCO and local authorities regulate the water flow and periodically close certain sections, allowing the formations to regenerate naturally.\n[…]\nPamukkale is recognized as a World Heritage Site together with Hierapolis. Hierapolis-Pamukkale was made a World Heritage Site in 1988. It is a tourist attraction because of this status and its natural beauty.\n[…]\nThe city of Pamukkale has two sister cities:\n[…]\nPink and White Terraces in New Zealand\n[…]\nPamukkale official site\n[…]\nPamukkale—spherical 360 degree panorama\n[…]\nThe Marble Stairs of Heaven on Earth: Pamukkale\n[…]\nHierapolis-Pamukkale at NASA Earth Observatory\n[…]\nVideo from Pamukkale (4k, UltraHD)\n[…]\nTop Tips For Visiting Pamukkale In The Summer\n[…]\nPlaces to visit in Pamukkale\n[…]\nPamukkale otelleri"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pamukkale",
        "situacao": "ok",
        "texto": "Pamukkale, (\"castelo de algodão\") em turco está situado em Denizli, Turquia. É um conjunto de piscinas termais de origem calcária que com o passar dos séculos formaram bacias gigantescas de água que descem em cascata numa colina. A formação do Pamukkale deve-se aos locais térmicos quentes por baixo do monte que provocam o derrame de carbonato de cálcio, que depois solidifica como mármore travertin\n[…]\nPamukkale, castelo de algodão - Thewotme travel blog"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Baía de Ha Long",
      "descricao": "Baía do norte do Vietnã com milhares de ilhotas e torres de calcário que saem do mar."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em vietnamita, o nome da Baía de Ha Long indica o lugar onde desceu qual criatura lendária?",
    "resposta": "Dragão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ha_Long_Bay",
      "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Ha_Long"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ha_Long_Bay",
        "situacao": "ok",
        "texto": "Hạ Long Bay or Halong Bay (Vietnamese: Vịnh Hạ Long, pronounced [vînˀ hâːˀ lawŋm] ) is a bay located in Northeastern Vietnam, administered by the city of Quảng Ninh. The name Hạ Long means \"descending dragon\". It features thousands of limestone karsts and islets in various shapes and sizes, for which it is listed as a UNESCO World Heritage Site and a popular travel destination.\n[…]\nHạ Long Bay is located in northeastern Vietnam, from E106°55' to E107°37' and from N20°43' to N21°09'. The bay stretches from Quang Yen town, past Hạ Long city, Cẩm Phả city to Vân Đồn District, is\n[…]\nHạ Long Bay was the site of the first ever raising of the new national flag of the Provisional Central Government of Vietnam on 5 June 1948 during the signing of the Halong Bay Agreements (Accords de la baie d’Along) by High Commissioner Emile Bollaert and President Nguyễn Văn Xuân.\n[…]\nIn 1962, the Vietnam Ministry of Culture, Sport and Tourism designated Hạ Long Bay a 'Renowned National Landscape Monument'.\n[…]\nIn writings about Hạ Long Bay, the following Vietnamese writers wrote:\n[…]\nOn another aspect, global climate change with rising sea levels will strongly impact the landscape, island systems, caves, and biodiversity of Ha Long Bay. Vietnam currently lacks the necessary human and material resources to adequately respond to these challenges.\n[…]\nSome experts suggest considering the expansion of the conservation area, not only limiting it to the small area of Ha Long Bay but also encompassing the surrounding sea area, including the areas close to the Vietnam–China border. With a length of about 300 km and a width of about 60 km, the entire area can be seen and conserved as a unique marine ecosystem of Vietnam.\n[…]\nEnvironmental capacity Hạ Long Bay – Bai Tu Long. Publisher: Natural Science and Technology. Hanoi. Editor: Nguyen Khoa Son, ISBN 978-604-913-063-2 – in Vietnamese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Ha_Long",
        "situacao": "ok",
        "texto": "A Baía de Ha Long ou Baía de Alongues (em português:\"Onde o Dragão entra no Oceano\"), com cerca de 1.969 ilhotas de calcário que se elevam das águas, é a mais conhecida baía do Vietname. A maior parte das ilhas não está habitada nem afectada pela presença humana. A beleza cénica do sítio é complementada pelo seu interesse biológico. As ilhas tem um número infinito de praias, grutas e cavernas.\n[…]\nDe acordo com a lenda, quando um grande dragão que vivia nas montanhas correu até ao mar, a sua cauda cavou vales que mais tarde foram enchidos com água, deixando apenas pedaços de terra à superfície, ou seja, as inúmeras ilhas que se avistam na baía. A Baía de Ha Long foi declarada Património Mundial da UNESCO em 1993."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Montanha da Mesa",
      "descricao": "Montanha de topo plano que domina a paisagem da Cidade do Cabo, na África do Sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Quando uma nuvem branca cobre o topo plano da Montanha da Mesa, na Cidade do Cabo, os moradores dizem que ela pôs o quê?",
    "resposta": "A toalha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Table_Mountain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Table_Mountain",
        "situacao": "ok",
        "texto": "Table Mountain (Khoekhoe: Huriǂoaxa, lit. 'sea-emerging'; Afrikaans: Tafelberg) is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa.\n[…]\nThe upper approximately 600-metre (2,000 ft) portion of the one-kilometre-high (0.62 mi) table-topped mountain, or mesa, consists of 450- to 510-million-year-old (Ordovician) rocks belonging to the two lowermost layers of the Cape Fold Mountains.\n[…]\nAntónio de Saldanha was the first European to land in Table Bay. He climbed the mighty mountain in 1503 and named it Taboa do Cabo (Table of the Cape, in his native Portuguese). The great cross that the Portuguese navigator carved into the rock of Lion's Head is still traceable.\n[…]\nIn November 2011, Table Mountain was named one of the New7Wonders of Nature.\n[…]\nThe Table Mountain Aerial Cableway takes passengers from the lower cable station on Tafelberg Road, about 302 metres (991 ft) above sea level, to the plateau at the top of the mountain, at 1,067 metres (3,501 ft). The upper cable station offers views overlooking Cape Town, Table Bay, Lion's Head and Robben Island to the north, and the Atlantic seaboard to the west and south. The top cable station includes curio shops, a restaurant and walking trails of various lengths.\n[…]\nThis route is very hot in summer, as it is located on the north facing slope of the mountain, with almost no shade along the 600 m climb from Tafelberg Road to the Table Mountain plateau.\n[…]\nLion's Head – Mountain in Cape Town, South Africa\n[…]\nTable Mountain National Park – Nature conservation area on the Cape Peninsula in Cape Town, South Africa\n[…]\nTable Mountain National Park official site\n[…]\nTable Mountain Aerial Cableway official site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montanha_da_Mesa",
        "situacao": "ok",
        "texto": "A montanha da Mesa, denominação traduzida do africânder Tafelberg ou do inglês Table Mountain,  é uma grande montanha de cume plano que domina a paisagem da Cidade do Cabo, na África do Sul. É representada na bandeira, no escudo e nos documentos oficiais da cidade. É também uma importante atração turística acedida pelo visitantes, seja pelo teleférico, seja por meio de caminhadas. Faz parte de um \n[…]\nA característica principal da montanha da Mesa é o planalto de aproximadamente 3 km de comprimento, cercado de altos cabeços. Estende-se do chamado Pico do Diabo a leste até à Cabeça do Leão a oeste, compondo o anfiteatro natural que circunda a Baía da Mesa. Atinge a altitude de 1084,6 m próximo à sua extremidade oriental.\n[…]\nEntre os desfiladeiros abre-se a garganta de Platteklip, que permite um acesso fácil ao cume e que foi também a rota utilizada pelo navegador português António de Saldanha na primeira ascensão documentada da montanha, em 1503. Foi também ele quem, em razão do cume extenso e plano, a denominou \"montanha da Mesa\", e quem talhou a cruz que ainda pode ser vista nas imediações da Cabeça do Leão.\n[…]\n«Site oficial do Parque nacional da montanha da Mesa»\n[…]\n«I love Table Mountain - blog»  (em inglês)\n[…]\nMontanha da Mesa (português)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Dolomitas",
      "descricao": "Cadeia de montanhas dos Alpes no nordeste da Itália, famosa por seus picos rochosos claros."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "As Dolomitas, nos Alpes italianos, devem o nome a uma rocha batizada em homenagem a um geólogo de que país?",
    "resposta": "França",
    "distratores": [
      "Itália",
      "Suíça",
      "Áustria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolomites",
      "https://en.wikipedia.org/wiki/D%C3%A9odat_de_Dolomieu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolomites",
        "situacao": "ok",
        "texto": "The Dolomites (Italian: Dolomiti, pronounced [doloˈmiːti]) or Pale Mountains (Italian: Monti Pallidi) are a mountain range in northeastern Italy. They form part of the Southern Limestone Alps and extend from the river Adige in the west to the Piave Valley (Pieve di Cadore) in the east. The northern and southern borders are defined by the Puster Valley and the Sugana Valley (Italian: Valsugana).\n[…]\nOther mountain groups of similar geological structure are spread along the river Piave to the east–Dolomiti d'Oltrepiave; and far away over the Adige River to the west Dolomiti di Brenta (Western Dolomites). A smaller group is called Piccole Dolomiti (Little Dolomites), between the provinces of Trentino, Verona and Vicenza.\n[…]\nThe Dolomiti Bellunesi National Park and many other regional parks are in the Dolomites. On 26 June 2009, the Dolomites were declared a UNESCO World Heritage Site. The Adamello-Brenta UNESCO Global Geopark is also in the Dolomites. The Geological Museum of the Dolomites (in Italian Museo Geologico delle Dolomiti) is located in Predazzo, Fiemme Valley.\n[…]\nDuring the First World War, the front line between the Italian and Austro-Hungarian Army ran through the Dolomites, where both sides used mines extensively. Open-air war museums are at Cinque Torri (\"Five Towers\"), Monte Piana and Mount Lagazuoi. Many people visit the Dolomites to climb the vie ferrate, protected paths through the rock walls that were created during the war.\n[…]\nItalian front (World War I)\n[…]\n\"HD Pictures of the main areas of the Dolomites\". Bruno Mandolesi.\n[…]\nRoger. \"Walks and Via Ferrata in the Dolomites\". CommunityWalk.com. Archived from the original on 8 January 2018. Retrieved 14 April 2010.\n[…]\n\"Monte Piana in the Dolomites\". Eclectica. August 21, 2006.\n[…]\nItalian official cartography (Istituto Geografico Militare - IGM); on-line version: www.pcn.minambiente.it\n[…]\nInformation of the Dolomites"
      },
      {
        "url": "https://en.wikipedia.org/wiki/D%C3%A9odat_de_Dolomieu",
        "situacao": "ok",
        "texto": "Dieudonné Sylvain Guy Tancrède de Gratet de Dolomieu usually known as Déodat de Dolomieu (French pronunciation: [deɔda də dɔlɔmjø]; 23 June 1750 – 28 November 1801) was a French geologist. The mineral and the rock dolomite and the largest summital crater on the Piton de la Fournaise volcano were named after him.\n[…]\nBy 1798 De Dolomieu had developed an international reputation as one of the leading geologists in the world and was invited to join the scientific expedition accompanying Bonaparte's invasion of Egypt, as part of the natural history and physics section of the Institut d'Égypte. In March 1799 Dolomieu became ill and was forced to leave Alexandria, Egypt for France. His ship, caught in a storm, sought refuge at the port of Taranto, Italy where Dolomieu was made a prisoner of war.\n[…]\nThe future emperor's approach to the problem was more direct. In the spring of 1800 Napoleon led the French army into Italy, delivering a crushing blow to the Austrians and their Italian allies on 14 June at the Battle of Marengo. All of Italy then came within Napoleon's sphere. One of the terms dictated by Napoleon in the peace treaty of Florence (March 1801) was the immediate release of Dolomieu.\n[…]\nCarozzi, A. V.; Zenger, D. H. (1981). \"On a type of calcareous rock that reacts very slightly with acid and that phosphoresces on being struck (translation, with notes of Dolomieu's paper, 1791)\". Journal of Geological Education. 29: 4–10.\n[…]\nCharles-Vallin, T. (2003). Les aventures du chevalier géologue Déodat de Dolomieu. Presses Universitaires de Grenoble, Grenoble. pp. 296 p.\n[…]\nGaudant, J., ed. (2005). Dolomieu et la géologie de son temps. Les Presses de l'École des Mines de Paris, Paris. pp. 200 p."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dolomitas",
        "situacao": "ok",
        "texto": "As Dolomitas (em italiano:  Dolomiti; ladino: Dolomites; em alemão:  Dolomiten; em vêneto:  Dołomiti: em friulano:  Dolomitis) formam uma cadeia montanhosa dos Alpes orientais no norte da Itália. A área dolomítica (secção alpina denominada Alpes Dolomíticos) estende-se entre as províncias de Belluno - que constitui sua parte mais relevante - Bolzano, Trento, Údine e Pordenone.\n[…]\nO ponto mais alto das Dolomitas é a Marmolada, com 3343 m de altitude. Outros picos importantes são o Piz de Léch, monte Schiara, monte Civetta e o monte Antelao.\n[…]\nO \"Dolomitas\" provém do famoso mineralogista francês Déodat Gratet de Dolomieu, que foi o primeiro a descrever a rocha dolomita, um tipo de rocha carbonatada responsável pelas formas características e pela cor destas montanhas, que anteriormente ao século XIX eram conhecidas como \"Montanhas Pálidas\".[carece de fontes]?\n[…]\nO artista Ticiano, do Renascimento italiano, nasceu em Pieve di Cadore, localidade nesta região, e daqui partiu para Veneza.[carece de fontes]?\n[…]\nParque Nacional das Dolomitas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Lençóis Maranhenses",
      "descricao": "Parque nacional no litoral do Maranhão, formado por dunas brancas intercaladas por lagoas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em parte do ano, surgem lagoas azuis entre as dunas dos Lençóis Maranhenses. De onde vem essa água?",
    "resposta": "Da chuva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses",
      "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses",
        "situacao": "ok",
        "texto": "O Parque Nacional dos Lençóis Maranhenses é uma unidade de conservação brasileira de proteção integral à natureza localizada na região nordeste do estado do Maranhão. O território do parque, com uma área de 156 584 ha, está distribuído pelos municípios de Barreirinhas, Primeira Cruz e Santo Amaro do Maranhão. O parque foi criado com a finalidade precípua de \"proteger a flora, a fauna e as belezas \n[…]\nO parque localiza-se na Microrregião dos Lençóis Maranhenses, ao norte do Brasil, no litoral nordeste do estado do Maranhão. Com um perímetro de 270 km e 156 584 ha de área, o parque está inserido no bioma costeiro marinho, com ecossistemas de mangue, restinga e dunas. Lençóis Maranhenses abriga em seu interior aproximadamente 90 000 ha de dunas livres e lagoas interdunares de água doce, além de grandes áreas de restinga e de costa oceânica.\n[…]\nA faixa de dunas avança, a partir da costa, de 5 a 25 km em direção ao interior. Na região encontra-se a nascente do rio Preguiças, que corta o parque até a sua foz no oceano Atlântico. A praia dos Grandes Lençóis que inicia na foz do Rio Preguiças no Canto de Atins no Município de Barreirinhas e finaliza no outro extremo, com 72 quilômetros de extensão, do Parque Nacional na Barra da Baleia no município de Primeira Cruz.\n[…]\nNa área do Parque Nacional e na APA dos Pequenos Lençóis Maranhenses abriga espécie endêmica a tartaruga-pininga (Trachemys adiutrix).\n[…]\nO Parque Nacional dos Lençóis Maranhenses recebe mais de cem mil visitantes por ano, tendo alcançado o número de 280 878 visitas em 2021, e cerac de 408 mil turistas em 2023, segundo o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Atividades comuns dentro do parque incluem surfe, canoagem e passeios a cavalo.\n[…]\nParques nacionais do Brasil\n[…]\nParque dos Lençóis, Secretaria de Turismo do Maranhão.\n[…]\nParque Nacional dos Lençóis Maranhenses na UNESCO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park",
        "situacao": "ok",
        "texto": "Lençóis Maranhenses National Park (, Parque Nacional dos Lençóis Maranhenses) is a national park in Maranhão state in northeastern Brazil, just east of the Baía de São José. Protected on June 2, 1981, the 155,000 ha (380,000-acre) park includes 70 km (43 mi) of coastline, and an interior composed of rolling sand dunes. During the rainy season, the valleys among the dunes fill with freshwater lagoo\n[…]\nThe park is located on the northeastern coast of Brazil in the state of Maranhão along the eastern coast, bordered by 70 kilometres (43 mi) of beaches along the Atlantic Ocean. Inland, it is bordered by the Parnaíba River, the São José Basin, and the rivers of Itapecuru, Munim, and Periá. The park encompasses an area of 155,000 hectares (380,000 acres), composed mainly of expansive coastal dune fields (composed of barchanoid dunes), which formed during the late Quaternary period.\n[…]\nLençóis Maranhenses National Park receives as many as 60,000 visitors a year. Common activities within the park include surfing, canoeing and horse riding.\n[…]\nFormer Lençóis Maranhenses National Park's Official site"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Grand Canyon",
      "descricao": "Grande desfiladeiro no estado do Arizona, nos Estados Unidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Ao longo de milhões de anos, que rio escavou o Grand Canyon, no Arizona?",
    "resposta": "Rio Colorado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Canyon",
      "https://pt.wikipedia.org/wiki/Grand_Canyon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).\n[…]\nThe Sinagua were a cultural group occupying an area to the southeast of the Grand Canyon, between the Little Colorado River and the Salt River, between approximately 500 and 1425 CE. The Sinagua may have been ancestors of several Hopi clans.\n[…]\nAccording to the San Francisco Herald, in a series of articles run in 1853, Captain Joseph R. Walker in January 1851 with his nephew James T. Walker and six men, traveled up the Colorado River to a point where it joined the Virgin River and continued east into Arizona, traveling along the Grand Canyon and making short exploratory side trips along the way. Walker is reported to have said he wanted to visit the \"Moqui\" (Hopi) Indians.\n[…]\nWeather in the Grand Canyon varies according to elevation. The forested rims are high enough to receive winter snowfall, but along the Colorado River in the Inner Gorge, temperatures are similar to those found in Tucson and other low elevation desert locations in Arizona.\n[…]\nThe three most common amphibians in these riparian communities are the canyon tree frog, red-spotted toad, and Woodhouse's Rocky Mountain toad. Leopard frogs are very rare in the Colorado River corridor; they have undergone major declines and have not been seen in the Canyon in several years. There are 33 crustacean species found in the Colorado River and its tributaries within Grand Canyon National Park. Of these 33, 16 are considered true zooplankton organisms.\n[…]\nGrand Canyon Backcountry Use Areas – Map\n[…]\nGrand Canyon – Street View – Google Maps"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "O Grand Canyon é um desfiladeiro íngreme esculpido pelo rio Colorado, no estado do Arizona, nos Estados Unidos. A formação faz parte do Parque Nacional do Grand Canyon. O ex-presidente estadunidense Theodore Roosevelt foi um grande defensor da preservação da área do Grand Canyon e visitou-o em várias ocasiões para caçar e apreciar a paisagem.\n[…]\nO Grand Canyon tem 446 km de comprimento, até 29 km de largura e atinge uma profundidade de mais de 1,8 km. Por 2 bilhões de anos de história geológica da Terra o rio Colorado e seus afluentes cortaram seus canais através das camadas de rocha enquanto o planalto do Colorado era erguido.\n[…]\nApesar de alguns aspectos sobre a história da incisão do canyon serem debatidos por geólogos, vários estudos recentes apoiam a hipótese de que o rio Colorado estabeleceu seu curso através da região há cerca de 5 ou 6 milhões de anos. Desde essa época, o rio tem aprofundado e alargado o desfiladeiro.\n[…]\nO Grand Canyon é um vale fluvial no Planalto do Colorado que expõe estratos Proterozóicos e Paleozoicos elevados, e também é uma das seis seções fisiográficas distintas da província do Planalto do Colorado. Mesmo que não seja o cânion mais profundo do mundo (Kali Gandaki Gorge no Nepal é muito mais profundo), o Grand Canyon é conhecido por seu tamanho visualmente esmagador e sua paisagem intrincada e colorida.\n[…]\nA elevação associada à formação de montanhas mais tarde moveu esses sedimentos milhares de metros para cima e criou o Planalto do Colorado. A maior elevação também resultou em maior precipitação na área de drenagem do rio Colorado, mas não o suficiente para mudar a área do Grand Canyon de semiárida. A elevação do Planalto do Colorado é desigual, e o Planalto Kaibab que o Grand Canyon corta é mais de mil pés (300 m) mais alto na Borda Norte do que na Borda Sul.\n[…]\nParque Nacional do Grand Canyon"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Monte Vesúvio",
      "descricao": "Vulcão no golfo de Nápoles, na Itália, cuja erupção do ano 79 soterrou cidades romanas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Além de Pompeia, que cidade romana, famosa por uma vila cheia de papiros, foi soterrada pelo Vesúvio no ano setenta e nove?",
    "resposta": "Herculano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Herculaneum",
      "https://en.wikipedia.org/wiki/Villa_of_the_Papyri"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Herculaneum",
        "situacao": "ok",
        "texto": "Herculaneum is an ancient Roman town located in the modern-day comune of Ercolano, Campania, Italy. Herculaneum was buried under a massive pyroclastic flow in the eruption of Mount Vesuvius in 79 AD.\n[…]\nLike the nearby city of Pompeii, Herculaneum is notable as one of the few well-preserved ancient Roman cities, as the volcanic material that buried the town helped protect it from looting and weathering. Although less known than Pompeii today, it was the first and, for a long time, the only discovered Vesuvian city (in 1709). Pompeii was revealed in 1748 and identified in 1763.\n[…]\nSince Herculaneum lay west of Vesuvius, it was only mildly affected by the first phase of the eruption. While roofs in Pompeii collapsed under the weight of falling debris, only a few centimetres of ash fell on Herculaneum, causing little damage; nevertheless, the ash prompted most inhabitants to flee.\n[…]\nMultidisciplinary research on the lethal effects of the pyroclastic surges in the Vesuvius area has shown that, in the vicinity of Pompeii and Herculaneum, intense heat was the main cause of the death of people who had previously been thought to have died by ash suffocation. Exposure to ≥250 °C (480 °F) had likely killed residents within 10 km, including those sheltering in buildings.\n[…]\nThe discovery of neighbouring Pompeii, substantially simpler to excavate due to a smaller layer of material covering the site (4m as compared to 20m at Herculaneum), diverted attention and effort.\n[…]\nDue to bradyseism, which affects the entire Vesuvius region, portions of the historic city of Herculaneum today lie as much as 4 metres below sea level.\n[…]\nPompeii – Ancient city near modern Naples, Italy"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Villa_of_the_Papyri",
        "situacao": "ok",
        "texto": "The Villa of the Papyri (Italian: Villa dei Papiri, also known as Villa dei Pisoni and in early excavation records as the Villa Suburbana) was an ancient Roman villa in Herculaneum, in what is now Ercolano, southern Italy. It is named after its unique library of papyrus scrolls, discovered in 1750. The Villa was considered to be one of the most luxurious houses in all of Herculaneum and in the Rom\n[…]\nIt was situated on the ancient coastline below the volcano Vesuvius with nothing to obstruct the view of the sea. It was perhaps owned by Julius Caesar's father-in-law, Lucius Calpurnius Piso Caesoninus.\n[…]\nIn AD 79, the eruption of Vesuvius covered all of Herculaneum with up to 30 metres (98 ft) of volcanic material from pyroclastic flows. Herculaneum was first excavated between 1750 and 1765 by Karl Weber by means of tunnels. The villa's name derives from the discovery of its library, the only surviving library from the Graeco-Roman world that exists in its entirety. It contained over 1,800 papyrus scrolls, now carbonised by the heat of the eruption, the \"Herculaneum papyri\".\n[…]\nThe opening pages of the 1850 fictional work A Few Days in Athens claim to be \"the translation of a Greek Manuscript discovered in Herculaneum\". The novel was written by Frances Wright, a female philosopher who was mentored by the Epicurean American founding father, Thomas Jefferson, and it unapologetically defends Epicurus's character, Epicurean philosophy, and secular values.\n[…]\nFriends of Herculaneum Society which encourages interest in the Villa and sponsors further excavation at the site.\n[…]\nDavid Sider, (2005), The Library of the Villa dei Papiri at Herculaneum. J. Paul Getty Museum. ISBN 0-89236-799-7\n[…]\nPapyri herculanensi online Archived 2016-03-04 at the Wayback Machine\n[…]\nThe Friends of Herculaneum Society\n[…]\nRoman Herculaneum website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Herculano",
        "situacao": "ok",
        "texto": "Herculano (em latim: Herculaneum e em italiano:   Ercolano) era uma cidade antiga, localizada na comuna moderna de Ercolano, Campânia, Itália. Herculano foi enterrada sob cinzas vulcânicas e pedra-pomes na erupção de 79 d.C. do Monte Vesúvio.\n[…]\nComo a cidade vizinha de Pompeia, Herculano é famosa como uma das poucas cidades antigas a ser preservada mais ou menos intacta, pois as cinzas que cobriam a cidade também a protegiam contra saques e intempéries. Embora menos conhecida hoje do que Pompeia, foi a primeira e por muito tempo a única cidade enterrada do Vesúvio a ser encontrada (em 1709), enquanto Pompeia só foi revelada a partir de 1748 e identificada em 1763.\n[…]\nEmbora fosse menor que Pompeia, com uma população de até 5 mil habitantes, Herculano era uma cidade mais rica. Era um refúgio popular à beira-mar para a elite romana, o que se reflete na extraordinária densidade de casas grandiosas e luxuosas com, por exemplo, um uso muito mais luxuoso de revestimento de mármore colorido. Edifícios famosos da cidade antiga incluem a Vila dos Papiros e as chamadas \"casas de barco\", nas quais foram encontrados os restos mortais de pelo menos 300 pessoas.\n[…]\nNos últimos anos da República Romana, Herculano atingiu o auge de seu esplendor graças à sua localização costeira, ar puro e clima ameno, tornando-se uma popular cidade turística para muitas famílias patrícias de Roma. A cidade era vibrante e densamente povoada quando o terremoto de 62 d.C. a atingiu, causando sérios danos; as obras de reconstrução ainda estavam em andamento quando a trágica erupção do Monte Vesúvio ocorreu em 79 d.C.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Krakatoa",
      "descricao": "Ilha vulcânica no estreito de Sunda, na Indonésia, cuja erupção de 1883 foi uma das mais violentas da história."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na erupção do Krakatoa, em 1883, a maior parte das dezenas de milhares de mortes foi causada por quê?",
    "resposta": "Tsunamis",
    "distratores": [
      "Fluxos de lava",
      "Chuva de cinzas",
      "Gases tóxicos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa",
        "situacao": "ok",
        "texto": "Between 19 May and 21 October 1883, the volcanic island of Krakatoa (located in the Sunda Strait, then part of the Dutch East Indies—modern-day Indonesia) began erupting, lasting more than five months. On 27 August, the island had its most significant eruption, which destroyed over 70% of the island and its surrounding archipelago, the island collapsing into a caldera.\n[…]\nOn 27 August, a series of eleven enormous explosions occurred, which marked the climax of the eruption. At 5:30 a.m., the first explosion was at Perboewatan, triggering a tsunami heading to Telok Betong, now known as Bandar Lampung. At 6:44 a.m., Krakatau exploded again at Danan, with the resulting tsunami propagating eastward and westward. The third and largest explosion, at 10:02 a.m.\n[…]\nThe combination of pyroclastic flows, volcanic ash, tsunamis and earthquakes associated with the Krakatoa eruptions had disastrous regional and global consequences, with the main one being caused by the massive redistribution of mass due to the earthquakes that shifted Earth's figure axis by roughly 17 cm. On the regional scale the effects were limited to some land in Banten, approximately 80 km south, never being repopulated and reverting to jungle, which is now the Ujung Kulon National Park.\n[…]\nA numerical model for a Krakatoa hydrovolcanic explosion and the resulting tsunami was described by Mader & Gittings, in 2006. A high wall of water is formed that is initially higher than 100 metres driven by the shocked water, basalt and air.\n[…]\n2022 Hunga Tonga–Hunga Haʻapai eruption and tsunami – Similar-sized eruption in 2022\n[…]\nKrakatit\n[…]\nDocumentary about the power of the Krakatoa eruption Archived 26 March 2025 at the Wayback Machine\n[…]\nWorks about the 1883 eruption of Krakatoa at Open Library\n[…]\nKrakatau, Indonesia (1883) Archived 16 December 2014 at the Wayback Machine information from San Diego State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erup%C3%A7%C3%A3o_do_Krakatoa_em_1883",
        "situacao": "ok",
        "texto": "A erupção do Krakatoa em 1883 ocorreu em 27 de agosto daquele ano na ilha de Krakatoa, localizada no estreito de Sunda, entre as ilhas de Sumatra e Java, nas Índias Orientais Holandesas (atual Indonésia). A ilha desapareceu quando o vulcão homônimo, no monte Perboewatan — supostamente extinto — entrou em erupção.\n[…]\nEsta é considerada a segunda erupção vulcânica mais fatal da história, a sexta maior erupção do mundo, além de o som mais alto já ouvido na História (o barulho do estrondo pôde ser ouvido a 5 mil quilômetros de distância).\n[…]\nPor causa das explosões, vários tsunamis ocorreram em diversos pontos do planeta. Perto das ilhas de Java e Sumatra, as ondas chegaram a mais de 40 metros de altura. Provavelmente o tsunami mais destrutivo registrado na história originou-se da explosão do Krakatoa, em uma série de quatro explosões que espalharam cinzas pelo mundo. A maioria das vítimas foi morta pelas ondas gigantes e não pela erupção que destruiu dois terços da ilha.\n[…]\nOndas tsunami geradas pela erupção foram observadas em todo o oceano Índico e no Pacífico, na costa oeste dos EUA, na América do Sul e até no canal da Mancha. Elas destruíram tudo em seu caminho e levaram para a costa blocos de corais de até 600 toneladas.\n[…]\nO escritor Simon Winchester descreveu o evento no seu livro: Krakatoa: The Day the World Exploded (Krakatoa: O dia em que o mundo explodiu). Um navio que se encontrava na área, de nome Berouw, foi arrastado terra adentro, tendo toda a tripulação morrido. De acordo com Winchester, corpos apareceram em Zanzibar e o som da destruição da ilha foi ouvido na Austrália e na Índia.\n[…]\nErupção do Monte Santa Helena de 1980\n[…]\nErupção do Monte Tambora em 1815\n[…]\nErupção do Vesúvio em 79\n[…]\nErupção freática\n[…]\nKrakatoa, o Inferno de Java\n[…]\nThe Java Disaster (1883), Capt. W. J. Watson",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Monte Tambora",
      "descricao": "Vulcão na ilha de Sumbawa, na Indonésia, cuja erupção de 1815 foi a maior da história registrada."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A erupção do vulcão Tambora, na Indonésia, em 1815, esfriou o planeta e deu ao ano seguinte qual apelido?",
    "resposta": "Ano sem verão",
    "fonte": [
      "https://en.wikipedia.org/wiki/1815_eruption_of_Mount_Tambora",
      "https://en.wikipedia.org/wiki/Year_Without_a_Summer"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1815_eruption_of_Mount_Tambora",
        "situacao": "ok",
        "texto": "In April 1815, Mount Tambora, a volcano on the island of Sumbawa in present-day Indonesia (then part of the Dutch East Indies), erupted in what is now considered the most powerful volcanic eruption in recorded human history. This eruption, with a volcanic explosivity index (VEI) of 7, ejected 37–45 km3 (8.9–10.8 cubic miles) of dense-rock equivalent (DRE) material into the atmosphere, and was the \n[…]\nMount Tambora experienced several centuries of dormancy before 1815, caused by the gradual cooling of hydrous magma in its closed magma chamber. Inside the chamber at depths between 1.5 and 4.5 km (5,000 and 15,000 ft), the exsolution of a high-pressure fluid magma formed during cooling and crystallisation of the magma. An over-pressurization of the chamber of about 4,000–5,000 bar (400–500 MPa; 58,000–73,000 psi) was generated, with the temperature ranging from 700–850 °C (1,290–1,560 °F).\n[…]\nThe explosion had an estimated VEI of 7. An estimated 41 km3 (10 cu mi) of pyroclastic trachyandesite were ejected, weighing about 10 billion tonnes. This left a caldera measuring 6–7 km (3+1⁄2–4+1⁄2 mi) across and 600–700 m (2,000–2,300 ft) deep. The density of fallen ash in Makassar was 636 kg/m3 (39.7 lb/cu ft). Before the explosion, Mount Tambora's peak elevation was about 4,300 m (14,100 ft), making it one of the tallest peaks in the Indonesian archipelago.\n[…]\nThe eruption caused a volcanic winter. During the Northern Hemisphere summer of 1816, global temperatures cooled by 0.53 °C (0.95 °F). This cooling directly or indirectly caused 90,000 deaths. The eruption of Mount Tambora was the largest cause of this climate anomaly. While there were other eruptions in 1815, Tambora is classified as a VEI-7 eruption with a column 45 km (148,000 ft) tall, eclipsing all others by at least one order of magnitude.\n[…]\nList of volcanoes in Indonesia\n[…]\nVolcanism of Indonesia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Year_Without_a_Summer",
        "situacao": "ok",
        "texto": "The year 1816 is known as the Year Without a Summer because of severe climate abnormalities that caused average global temperatures to decrease by 0.4–0.7 °C (0.7–1 °F). Summer temperatures in Europe that year were the coldest of any on record between 1766 and 2000, resulting in crop failures and major food shortages across the Northern Hemisphere.\n[…]\nEvidence suggests that the anomaly was predominantly a volcanic winter event caused by the massive eruption of Mount Tambora in the Dutch East Indies (modern-day Indonesia) in April 1815. This eruption was the largest in at least 1,300 years (after the hypothesized eruption causing the volcanic winter of 536); its effect on the climate may have been exacerbated by the 1814 eruption of Mayon in the Philippines.\n[…]\nThe main cause of the Year Without a Summer is generally held to be a volcanic winter created by the April 1815 eruption of Mount Tambora on Sumbawa. The eruption had a volcanic explosivity index (VEI) ranking of 7, and ejected at least 37 km3 (8.9 cu mi) of dense-rock equivalent material into the atmosphere. It remains the most recent confirmed VEI-7 eruption to date.\n[…]\nHigh levels of tephra in the atmosphere caused a haze to hang over the sky for several years after the eruption, and created rich red hues in sunsets. Paintings during the years before and after seem to confirm that these striking reds were not present before Mount Tambora's eruption, and depict moodier, darker scenes, even in the light of both the sun and the moon. Caspar David Friedrich's The Monk by the Sea (ca. 1808–1810) and Two Men by the Sea (1817) indicate this shift of mood.\n[…]\nTambora culture – Lost village and culture on Sumbawa Island, Indonesia\n[…]\nWood, Gillen (2014). Tambora: the eruption that changed the world. Princeton University Press. p. 293. Bibcode:2014tetc.book.....W. ISBN 978-0691150543."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erup%C3%A7%C3%A3o_do_Monte_Tambora_em_1815",
        "situacao": "ok",
        "texto": "A erupção do Monte Tambora em 1815, entre 5 e 10 de abril daquele ano, foi uma das mais poderosas já registradas. Ela atingiu o nível 7 no Índice de Explosividade Vulcânica (IEV), realizando a maior erupção desde a erupção do lago Taupo no ano 181 d.C. Esta erupção é considerada a maior registrada na Terra, detendo o recorde do volume de matéria expelida: 180 000 000 000 m³ ou 180 km³.\n[…]\nNa Alemanha a miséria é tal que o ano de 1816 é apelidado de \"ano do mendigo\". Os Alpes suíços são atingidos pelo frio, a tal ponto que durante o verão de 1816 neva quase todas as semanas no fundo do vale, fenómeno habitualmente observável apenas no inverno. A miséria daí decorrente conduz a uma importante emigração, por exemplo para o Brasil, com um grupo de 2000 colonos suíços do cantão de Friburgo que está na origem da fundação da cidade de Nova Friburgo em 1819.\n[…]\nA erupção do Tambora influencia fortemente a literatura britânica. Com efeito, Lord Byron, Percy Bysshe Shelley e Mary Shelley passam o verão de 1816 na Suíça. As chuvas contínuas obrigam-nos a permanecer fechados a maior parte do dia na sua villa à beira do Lago Léman. Dedicam-se assim a concursos de poesia ou à escrita de contos. Os dois primeiros acabarão por produzir algumas das suas obras mais conhecidas, nomeadamente Darkness (\"Trevas\").\n[…]\nAs consequências dramáticas da erupção são também um dos fatores que podem ter catalisado a inovação tecnológica e permitido certas viragens económicas. Na Nova Inglaterra, o ano sem verão gera mudanças nos hábitos e estratégias de pesca (mudança de espécies alvo, desenvolvimento da pesca de alto mar) e vê difundir-se o uso do isco (ou isca) para cavala, inventado no Cabo Ann, no Massachusetts.\n[…]\nErupção do Krakatoa em 1883\n[…]\nde Jong Boers, Bernice (outubro de 1995). «Mount Tambora in 1815: A Volcanic Eruption in Indonesia and Its Aftermath». Indonesia (em inglês). 60: 36-60",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Monte Tambora",
      "descricao": "Vulcão na ilha de Sumbawa, na Indonésia, cuja erupção de 1815 foi a maior da história registrada."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Presa em casa num verão frio e chuvoso, efeito da erupção do Tambora, que escritora começou a criar Frankenstein em 1816?",
    "resposta": "Mary Shelley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Year_Without_a_Summer",
      "https://en.wikipedia.org/wiki/Frankenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Year_Without_a_Summer",
        "situacao": "ok",
        "texto": "The year 1816 is known as the Year Without a Summer because of severe climate abnormalities that caused average global temperatures to decrease by 0.4–0.7 °C (0.7–1 °F). Summer temperatures in Europe that year were the coldest of any on record between 1766 and 2000, resulting in crop failures and major food shortages across the Northern Hemisphere.\n[…]\nHigh levels of tephra in the atmosphere caused a haze to hang over the sky for several years after the eruption, and created rich red hues in sunsets. Paintings during the years before and after seem to confirm that these striking reds were not present before Mount Tambora's eruption, and depict moodier, darker scenes, even in the light of both the sun and the moon. Caspar David Friedrich's The Monk by the Sea (ca. 1808–1810) and Two Men by the Sea (1817) indicate this shift of mood.\n[…]\nIn June 1816, \"incessant rainfall\" during the \"wet, ungenial summer\" forced Mary Shelley, Percy Bysshe Shelley, Lord Byron, John William Polidori, and their friends to stay indoors at Villa Diodati for much of their Swiss holiday.\n[…]\nInspired by a collection of German ghost stories that they had read, Lord Byron proposed a contest to see who could write the scariest story, leading Shelley to write Frankenstein and Lord Byron to write \"A Fragment\", which Polidori later used as inspiration for The Vampyre – a precursor to Dracula. Those days inside Villa Diodati, remembered fondly by Mary Shelley, were occupied by wine and laudanum use, a tincture of opium, and intellectual conversations.\n[…]\nTambora culture – Lost village and culture on Sumbawa Island, Indonesia\n[…]\nWood, Gillen (2014). Tambora: the eruption that changed the world. Princeton University Press. p. 293. Bibcode:2014tetc.book.....W. ISBN 978-0691150543.\n[…]\n1816, the Year Without a Summer on In Our Time at the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Frankenstein",
        "situacao": "ok",
        "texto": "Frankenstein; or, The Modern Prometheus is an 1818 Gothic novel written by English author Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a sapient creature from different body parts in an unorthodox scientific experiment. Shelley started writing the story when she was 18 and staying in Bath, and the first edition was published anonymously in London on 1 Janu\n[…]\nDuring the rainy summer of 1816, the \"Year Without a Summer\", the world was locked in a long, cold volcanic winter caused by the eruption of Mount Tambora in 1815. Mary Shelley, aged 18, and her lover (and future husband), Percy Bysshe Shelley, visited Lord Byron at the Villa Diodati by Lake Geneva, in the Swiss Alps. The weather was too cold and dreary that summer to enjoy the outdoor holiday activities they had planned, so the group retired indoors until dawn.\n[…]\nShelley's manuscripts for the first three-volume edition in 1818 (written 1816–1817), as well as the fair copy for her publisher, are now housed in the Bodleian Library in Oxford. The Bodleian acquired the papers in 2004, and they belong now to the Abinger Collection. In 2008, the Bodleian published a new edition of Frankenstein, edited by Charles E. Robinson, that contains comparisons of Mary Shelley's original text with Percy Shelley's additions and interventions alongside.\n[…]\nMary Shelley, Frankenstein, Or, The Modern Prometheus: Annotated for Scientists, Engineers, and Creators of All Kinds, edited by David H. Guston, Ed Finn, and Jason Scott Robert, MIT Press, 277 pp.\n[…]\nMary Shelley, The New Annotated Frankenstein, edited and with a foreword and notes by Leslie S. Klinger, Liveright, 352 pp.), The New York Review of Books, vol. LXIV, no. 20 (21 December 2017), pp. 38, 40–41.\n[…]\nMary Wollstonecraft Shelley: Chronology and Resources at Romantic Circles\n[…]\nOn Frankenstein; or, The Modern Prometheus, a review by Percy Bysshe Shelley"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ano_sem_Ver%C3%A3o",
        "situacao": "ok",
        "texto": "O denominado Ano sem Verão, Ano sem um Verão, Ano da Pobreza ou Ano em Que não Houve Verão, foi o ano de 1816, devido a graves anomalias climáticas que fizeram com que as temperaturas médias globais diminuíssem em 0,4-0,7 ºC. Neste ano, anormalidades climáticas severas do verão destruíram plantações na Europa Setentrional, no nordeste dos Estados Unidos e leste do Canadá.\n[…]\nNa China, o inverno gelado matou árvores, colheitas de arroz e até búfalos, especialmente ao norte do país. Enchentes destruíram muitas das colheitas restantes. A erupção do Monte Tambora afetou o período de chuvas na China, resultando em enchentes gigantescas no vale do Rio Yangtzé em 1816 e temperaturas baixas no verão e outono devastaram a produção de arroz em Yunnan no sudoeste, resultando em fome generalizada.\n[…]\nEm junho de 1816, as \"chuvas incessantes\" durante o \"verão muito desagradável\" forçaram Mary Shelley, Percy Bysshe Shelley, Lorde Byron, John William Polidori e seus amigos a permanecerem em casa na Villa Diodati [en] durante boa parte de suas férias na Suíça.\n[…]\nInspirados por uma coletânea de histórias de fantasmas alemãs que haviam lido, Lorde Byron propôs um concurso para ver quem escreveria a história mais assustadora, levando Shelley a escrever Frankenstein e Lorde Byron a escrever \"A Fragment\", que Polidori posteriormente usou como inspiração para O Vampiro, um precursor de Drácula. Aqueles dias dentro da Villa Diodati, lembrados com carinho por Mary Shelley, foram ocupados por vinho e uso de láudano, uma tintura de ópio, e conversas intelectuais.\n[…]\nA erupção do Krakatoa em 1883 fez as temperaturas médias de verão do Hemisfério Norte caírem em até 1,2 °C. Uma das estações chuvosas mais úmidas da história registrada seguiu-se na Califórnia durante 1883–1884;\n[…]\n\"Um ano sem verão\": como uma catástrofe climática ajudou a dar origem a “Frankenstein” - National Geographic",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Chimborazo",
      "descricao": "Vulcão inativo nos Andes do Equador, cujo cume é o ponto da superfície terrestre mais distante do centro da Terra."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o cume do Chimborazo, no Equador, mesmo mais baixo que o Everest, é o ponto mais distante do centro da Terra?",
    "resposta": "A Terra é mais larga no equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chimborazo",
      "https://pt.wikipedia.org/wiki/Chimborazo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chimborazo",
        "situacao": "ok",
        "texto": "Chimborazo (Spanish: [tʃimboˈɾaso] ) is a stratovolcano in Ecuador and the Cordillera Occidental range of the Andes. Its last known eruption is believed to have occurred around AD 550.\n[…]\nAs a result of the oblate spheroid shape of the planet Earth, which is thicker at the Equator than it is from pole to pole, the summit of Chimborazo is the fixed point on Earth that has the utmost distance from the center. Chimborazo is one degree south of the Equator and the Earth's diameter at the Equator is greater than at the latitude of Everest (8,848 m (29,029 ft) above sea level), nearly 28° north, with sea level also elevated.\n[…]\nDespite being 2,585 m (8,481 ft) lower in elevation above sea level, it is 6,384.4 km (3,967.1 mi) from the Earth's center, 2.1 km (1.3 mi) farther than the summit of Everest (6,382.3 km (3,965.8 mi) from the Earth's center). However, by height above sea level, Chimborazo is not the highest peak of the Andes.\n[…]\nCentrifugal force from the Earth's rotation, and distance from the center of the Earth, cause the force of gravity to be slightly reduced near the equator. The summit of Chimborazo has about one percent less gravity than the point with the highest gravitational force. Yet, due to its height above the surrounding terrain and local gravity anomalies, the summit of Huascarán is the place on Earth with the smallest gravitational force.\n[…]\nAmerican Dad! season 21, episode four is centered around the family's trip to Ecuador to climb Mount Chimborazo after Stan cannot afford to take them to Mount Everest. Chimborazo's summit height due to the equatorial bulge is mentioned frequently throughout the episode."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chimborazo",
        "situacao": "ok",
        "texto": "Chimboraço (em espanhol: Chimborazo) é um estratovulcão do Equador. É a mais alta montanha do país e do mundo, se medida desde o topo até ao centro da Terra. Está situado na província de Chimboraço, culminando a 6263 m de altitude e situa-se perto de Riobamba, a cerca de 180 km ao sul de Quito. É o pico mais alto dos Andes equatoriais, dominando uma região de 50 mil km² e apresentando uma base de \n[…]\nAté o início do século XIX, Chimboraço era considerado a mais alta montanha da Terra (a partir do nível do mar), e tal reputação levou a diversas tentativas de escalada. Em 1802, o naturalista alemão Alexander von Humboldt tentou escalá-lo, acompanhado por Aimé Bonpland e pelo equatoriano Carlos Montúfar, mas teve que abandonar a empreitada a 5875 m por causa da rarefação do ar. A essa altura, eles alcançaram a maior altitude confirmada jamais atingida por um ser humano.\n[…]\nAssim, é ao britânico Edward Whymper e aos irmãos Louis e Jean-Antoine Carrel que cabe a honra, em 1880, de serem os primeiros a atingir o cume do Chimboraço. Diversas pessoas duvidaram de tal feito, e Whymper escalou o vulcão mais uma vez no mesmo ano em companhia dos equatorianos David Beltrán e Francisco Campaña.\n[…]\nSua última erupção data de mais de dez mil anos, sendo assim considerado extinto.\n[…]\nO cume do Chimboraço é o ponto da superfície terrestre mais afastado do centro da Terra, sendo o mais alto quando medido pela distância do centro do planeta em relação a seu topo (em vez do nível do mar), e não o cume do monte Everest, devido ao fato de o planeta ser ligeiramente mais achatado em direção aos polos do que na linha do Equador, o que faz com que o diâmetro no equador seja 43 km maior do que o diâmetro de polo a polo. O nosso planeta tem o formato de esfera achatada.\n[…]\nO Chimboraço dista 6384,4 km do centro da Terra e o Everest 6382,6 km, o que resulta numa diferença de 1,8 km.\n[…]\nChimborazo: Etymology"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro no norte do Chile, entre o Oceano Pacífico e os Andes, um dos lugares mais secos do planeta."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Que corrente oceânica fria ajuda a manter o Deserto do Atacama entre os lugares mais secos do planeta?",
    "resposta": "Corrente de Humboldt",
    "distratores": [
      "Corrente do Golfo",
      "Corrente de Benguela",
      "Corrente do Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Atacama_Desert",
      "https://en.wikipedia.org/wiki/Humboldt_Current"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau on the Pacific coast of South America, stretching along a 1,600-kilometre-long (1,000-mile) strip of land in northern Chile, west of the Andes. It covers an area of 105,000 km2 (41,000 mi2), rising to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nThe Atacama is the driest non-polar desert in the world and the largest fog desert on Earth. Extreme aridity results from its position between two mountain chains—the Andes and the Chilean Coast Range—of sufficient height to block moisture from both the Pacific and Atlantic oceans, creating a two-sided rain shadow. The cool, north-flowing Humboldt Current and the South Pacific anticyclone reinforce this effect.\n[…]\nThe Atacama Desert may be the oldest desert on earth, and has experienced hyper aridity since at least the Middle Miocene, since the establishment of a proto-Humboldt current in conjunction with the opening of the Tasmania-Antarctic passage ca. 33 million years ago (Ma). The opening of the Tasmania-Antarctic passage allowed for cold currents to move along the west coast of South America, which influenced the availability of warm humid air to travel from the Amazon Basin to the Atacama.\n[…]\nBirds are one of the most diverse animal groups in the Atacama. Humboldt penguins live year-round along the coast, nesting in desert cliffs overlooking the ocean. Inland, high-altitude salt flats are inhabited by Andean flamingos, while Chilean flamingos can be seen along the coast. Other birds (including species of hummingbirds and rufous-collared sparrow) visit the lomas seasonally to feed on insects, nectar, seeds, and flowers.\n[…]\n\"Roving robot finds desert life\", article in Nature\n[…]\nAtacama Desert Photo Gallery, photos of many different landscapes, flora and fauna of the Atacama Desert"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Humboldt_Current",
        "situacao": "ok",
        "texto": "The Humboldt Current, also called the Peru Current, is a cold, low-salinity ocean current that flows north along the western coast of South America. It is an eastern boundary current flowing in the direction of the equator, and extends 500–1,000 km (310–620 mi) offshore. The Humboldt Current is named after the German naturalist Alexander von Humboldt even though it was discovered by José de Acosta\n[…]\nIn 1846, von Humboldt reported measurements of the cold-water current in his book Cosmos.\n[…]\nThe Humboldt has a considerable cooling influence on the climate of Chile, Peru and Ecuador. It is also largely responsible for the aridity of the Atacama Desert in northern Chile and coastal areas of Peru and also of the aridity of southern Ecuador. Marine air is cooled by the current and thus is not conducive to generating precipitation (although clouds and fog are produced).\n[…]\nJack mackerel (jurel) is the second largest fishery in the Humboldt Current System. As with the anchoveta in Peru, this species is believed to be composed of a single stock. Jurel are a straddling species. This means the species is found both within and outside of the 200-mile economic exclusive zone. Jurel became an important fishery in the 1970s to alleviate the pressure put on the anchoveta stock.\n[…]\nThe productivity of the Humboldt Current System is strongly affected by El Niño and La Niña events. During an El Niño event, the thermocline and upper region of the OMZ deepen to greater than 600 m. This causes a loss of nitrogen and decrease in export of carbon. El Niño also causes poleward currents to increase in velocity.\n[…]\nThis article incorporates public domain material from Humboldt current. NOAA.\n[…]\n\"Safeguarding Humboldt's biodiversity together\". IW:Learn. 23 November 2023. Retrieved 24 November 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_de_Atacama",
        "situacao": "ok",
        "texto": "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1 000 km de extensão, é considerado o deserto mais alto do mundo. É o deserto não polar mais seco do mundo, pois chove raramente na região, em consequência de as correntes marítimas do Oceano Pacífico não conseguirem passar para o deserto, por causa de sua altitude.\n[…]\nAssim, quando se evaporam, as nuvens úmidas descarregam seu conteúdo antes de chegar ao deserto, podendo deixá-lo durante longas épocas sem chuva.\n[…]\nPossui clima quente durante o dia e frio à noite, mas ao longo do ano é seco, apresentando variações de temperatura que vão de 0 °C a 40 °C. A falta de chuva nessa região é devida às correntes marinhas do Pacífico. A corrente marinha de Humboldt, deixa o ar muito frio, que ao se chocar com as correntes quentes do Pacífico geram condensação e consequentemente chuva. Porém, até chegar no deserto, as nuvens se descarregam chegando lá já vazias, fazendo com que não chova lá.\n[…]\nJá foi registrado como o menor índice pluviométrico do planeta. A Cordilheira dos Andes impede a chegada de ar úmido da Amazônia, pois funciona como uma barreira para a corrente de ar. O Oceano Pacífico seria então o encarregado de umidificar a região do deserto de Atacama mas, por ser uma corrente marítima fria não ocorre evaporação da água sendo que o ar que vai em direção ao deserto é seco.\n[…]\nO deserto do Atacama é muito visado por turistas, para prática do trekking, montanhismo, montaria, off-road, mountain bike, e arqueólogos, devido ao fato da região possuir interessantes artefatos arqueológicos e históricos, além de salinas, gêiseres, vulcões, lagoas coloridas, vales verdejantes e cânions de água cristalina. Também há múmias com mais de 1 000 anos deixadas pelos Chinchorros (antigos habitantes da área).\n[…]\nJorge Durán filmou Romance Policial no Deserto do Atacama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro no norte do Chile, entre o Oceano Pacífico e os Andes, um dos lugares mais secos do planeta."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Por sua aridez extrema, o Deserto do Atacama é usado pela NASA para testar equipamentos destinados a qual planeta?",
    "resposta": "Marte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atacama_Desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau on the Pacific coast of South America, stretching along a 1,600-kilometre-long (1,000-mile) strip of land in northern Chile, west of the Andes. It covers an area of 105,000 km2 (41,000 mi2), rising to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nIn 2003, a team of researchers published a report  in which they duplicated the tests used by the Viking 1 and Viking 2 Mars landers to detect life and were unable to detect any signs in Atacama Desert soil in the region of Yungay. The region may be unique on Earth in this regard and is being used by NASA to test instruments for future Mars missions.\n[…]\nThe climate of the Atacama Desert limits the number of animals living permanently in this extreme ecosystem. Some parts of the desert are so arid, no plant or animal life can survive. Outside of these extreme areas, sand-colored grasshoppers blend with pebbles on the desert floor, and beetles and their larvae provide a valuable food source in the lomas (hills). Desert wasps and butterflies can be found during the warm and humid season, especially on the lomas.\n[…]\nBecause of the desert's extreme aridity, only a few specially adapted mammal species live in the Atacama, such as Darwin's leaf-eared mouse. The less arid parts of the desert are inhabited by the South American gray fox and the viscacha (a relative of the chinchilla). Larger animals, such as guanacos and vicuñas, graze in areas where grass grows, mainly because it is seasonally irrigated by melted snow.\n[…]\nAtacama Giant\n[…]\n\"Mars-like Soils in the Atacama Desert, Chile, and the Dry Limit of Microbial Life\", NASA press release\n[…]\n\"Roving robot finds desert life\", article in Nature\n[…]\nAtacama Desert Photo Gallery, photos of many different landscapes, flora and fauna of the Atacama Desert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_de_Atacama",
        "situacao": "ok",
        "texto": "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1 000 km de extensão, é considerado o deserto mais alto do mundo. É o deserto não polar mais seco do mundo, pois chove raramente na região, em consequência de as correntes marítimas do Oceano Pacífico não conseguirem passar para o deserto, por causa de sua altitude.\n[…]\nAssim, quando se evaporam, as nuvens úmidas descarregam seu conteúdo antes de chegar ao deserto, podendo deixá-lo durante longas épocas sem chuva.\n[…]\nA região foi primeiramente habitada pelos atacamenhos, povo da região juntamente com a civilização dos nativos aymaras, ambos deixaram um legado inestimável em termos arqueológicos, daí o seu nome deserto de Atacama.\n[…]\nJá foi registrado como o menor índice pluviométrico do planeta. A Cordilheira dos Andes impede a chegada de ar úmido da Amazônia, pois funciona como uma barreira para a corrente de ar. O Oceano Pacífico seria então o encarregado de umidificar a região do deserto de Atacama mas, por ser uma corrente marítima fria não ocorre evaporação da água sendo que o ar que vai em direção ao deserto é seco.\n[…]\nO deserto de Atacama em geral apresenta um terreno rochoso muito seco e pouco propicio a brotar algumas plantas. Em alguns lugares próximos à região de Antofagasta existem grandes áreas de deserto absoluto, onde o solo é completamente desprovido de vegetação.\n[…]\nO deserto do Atacama é muito visado por turistas, para prática do trekking, montanhismo, montaria, off-road, mountain bike, e arqueólogos, devido ao fato da região possuir interessantes artefatos arqueológicos e históricos, além de salinas, gêiseres, vulcões, lagoas coloridas, vales verdejantes e cânions de água cristalina. Também há múmias com mais de 1 000 anos deixadas pelos Chinchorros (antigos habitantes da área).\n[…]\nJorge Durán filmou Romance Policial no Deserto do Atacama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As colunas de pedra, quase todas hexagonais, da Calçada dos Gigantes, na Irlanda do Norte, se formaram com o resfriamento de quê?",
    "resposta": "Lava",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
      "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
        "situacao": "ok",
        "texto": "The Giant's Causeway (Irish: Clochán an Aifir or Clochán na bhFomhórach) is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption, part of the North Atlantic Igneous Province active in the region during the Paleogene period. It is located in County Antrim on the north coast of Northern Ireland, about three miles (five kilometres) northeast \n[…]\nThe tops of the columns form stepping stones that lead from the cliff foot and disappear under the sea. Most of the columns are hexagonal, although some have between four and eight sides. The tallest are approximately 12 metres (39 ft) high, and the solidified lava in the cliffs is 28 metres (92 ft) thick in places.\n[…]\nAround 50 to 60 million years ago, during the Paleocene Epoch, Antrim was subject to intense volcanic activity, when highly fluid molten basalt intruded through chalk beds to form an extensive volcanic plateau. As the lava cooled, contraction occurred. Horizontal contraction fractured in a similar way to drying mud, with the cracks propagating down as the mass cooled, leaving pillarlike structures that also fractured horizontally into \"biscuits\".\n[…]\nIn many cases, the horizontal fracture resulted in a bottom face that is convex, while the upper face of the lower segment is concave, producing what are called \"ball and socket\" joints. The size of the columns was primarily determined by the speed at which lava cooled. The extensive fracture network produced the distinctive columns seen today. The basalts were originally part of a great volcanic plateau called the Thulean Plateau that formed during the Paleocene.\n[…]\nAcross the sea, there are identical basalt columns (a part of the same ancient lava flow) at Fingal's Cave on the Scottish isle of Staffa, and it is possible that the story was influenced by this.\n[…]\nGiant's Causeway information at the National Trust"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes",
        "situacao": "ok",
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nO magma se encolhia à medida que se resfriava lentamente e, por causa de sua composição química, fendas hexagonais regulares se formaram na superfície. Enquanto o magma continuava a se resfriar por dentro, as fendas desciam gradualmente, formando a grande quantidade de colunas de basalto semelhantes a lápis.\n[…]\nÀ cerca de 50 a 60 milhões de anos, durante a Época Paleoceno, Antrim esteve sujeita a uma intensa atividade vulcânica, quando o basalto fundido altamente fluido invadiu os leitos de giz para formar um extenso planalto vulcânico. À medida que a lava arrefecia, a contração ocorreu.\n[…]\nO tamanho das colunas foi determinado principalmente pela velocidade com que a lava arrefecia. A extensa rede de fraturas produziu as colunas distintas vistas hoje. Os basaltos eram originalmente parte de um grande planalto vulcânico chamado Thulean Plateau, que se formou durante o Paleoceno.\n[…]\nSegundo uma lenda irlandesa um gigante chamado Finn MacCool queria enfrentar numa luta um gigante escocês chamado Benandonner, mas havia um problema: não existia uma embarcação com tamanho suficiente para atravessar o mar e levar um ao encontro do outro. A lenda diz que MacCool resolveu o problema construindo uma calçada que ligava os dois lados, usando enormes colunas de pedra. Benandonner aceitou o desafio e viajou pela calçada ate à Irlanda. Ele era mais forte e maior do que MacCool.\n[…]\n«Guia oficial da Calçada do Gigante» (em inglês)\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda irlandesa, que gigante construiu a Calçada dos Gigantes para atravessar o mar até a Escócia?",
    "resposta": "Finn McCool",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
      "https://en.wikipedia.org/wiki/Fionn_mac_Cumhaill"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
        "situacao": "ok",
        "texto": "The Giant's Causeway (Irish: Clochán an Aifir or Clochán na bhFomhórach) is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption, part of the North Atlantic Igneous Province active in the region during the Paleogene period. It is located in County Antrim on the north coast of Northern Ireland, about three miles (five kilometres) northeast \n[…]\nAccording to legend, a form of geomyth, the columns are the remains of a causeway built by a giant. The story goes that the Irish giant Fionn mac Cumhaill (Finn MacCool), from the Fenian Cycle of Gaelic mythology, was challenged to a fight by the Scottish giant Benandonner. Fionn accepted the challenge and built the causeway across the North Channel so that the two could meet. In one version of the story, Fionn defeats Benandonner.\n[…]\nThe area is a haven for seabirds, such as fulmar, petrel, cormorant, shag, redshank, guillemot, and razorbill, while the weathered rock formations host numerous plant types, including sea spleenwort, hare's-foot trefoil, vernal squill, sea fescue, and frog orchid. A stromatolite colony was reportedly found at the Giant's Causeway in October 2011 – an unusual find, as stromatolites are more commonly found in warmer waters with higher saline content than that found at the causeway.\n[…]\nThe Belfast-Derry railway line run by Northern Ireland Railways connects to Coleraine and along the Coleraine-Portrush branch line to Portrush. Locally, Ulsterbus provides connections to the railway stations. There is a scenic walk of seven miles (eleven kilometres) from Portrush alongside Dunluce Castle and the Giant's Causeway and Bushmills Railway.\n[…]\nWatson, Philip S. (2000). The Giant's Causeway and the North Antrim coast. Dublin: O'Brien Press. ISBN 0-86278-675-4. OCLC 45829602.\n[…]\nGiant's Causeway information at the National Trust"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Fionn_mac_Cumhaill",
        "situacao": "ok",
        "texto": "Fionn mac Cumhaill (alternatively spelled Finn mac Cumhaill), sometimes anglicised Finn McCool or MacCool, is a hero in Irish mythology, as well as in later Scottish and Manx folklore. He is the leader of the Fianna bands of young roving hunter-warriors, as well as being a seer and poet. He is said to have a magic thumb that bestows him with great wisdom. He is often depicted hunting with his houn\n[…]\nIn both Irish and Manx popular folklore, Fionn mac Cumhail (known as \"Finn McCool\" or \"Finn MacCooill\" respectively) is portrayed as a magical, benevolent giant. The most famous story attached to this version of Fionn tells of how one day, while making a pathway in the sea towards Scotland—The Giant's Causeway—Fionn is told that the giant Benandonner (or, in the Manx version, a buggane) is coming to fight him.\n[…]\nFinn McCool is a character in Terry Pratchett's and Steve Baxter's The Long War.\n[…]\nDaniel Allison published a modern retelling of the Fenian cycle in his 2021 book Finn & the Fianna. The second edition, released in 2026, was retitled Irish Mythology: Fionn & the Fianna.\n[…]\nIn 1987 Harvey Holton (1949–2010) published Finn with the Three Tygers Press, Cambridge. This was a dramatic cycle of poems in Scots for the stage and with music by Hamish Moore, based on the legends of Finn McCool and first performed at The Edinburgh Festival in 1986 before going on tour around Scotland.\n[…]\nIn 2010, Washington, D.C.'s Dizzie Miss Lizzie's Roadside Revue debuted their rock musical Finn McCool at the Capitol Fringe Festival. The show retells the legend of Fionn mac Cumhaill through punk-inspired rock and was performed at the Woolly Mammoth Theater in March 2011.\n[…]\nImaginaire Celtique YouTube Channel : 'Finn MacCool: Legendary Hero of Ireland', with Natasha Sumner, Associate Professor, Harvard University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes",
        "situacao": "ok",
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nSegundo uma lenda irlandesa um gigante chamado Finn MacCool queria enfrentar numa luta um gigante escocês chamado Benandonner, mas havia um problema: não existia uma embarcação com tamanho suficiente para atravessar o mar e levar um ao encontro do outro. A lenda diz que MacCool resolveu o problema construindo uma calçada que ligava os dois lados, usando enormes colunas de pedra. Benandonner aceitou o desafio e viajou pela calçada ate à Irlanda. Ele era mais forte e maior do que MacCool.\n[…]\nPercebendo isso a esposa de Finn MacCool, de forma muito perspicaz decidiu vestir seu marido gigante como um bebé. Quando Benandonner chegou à casa dos dois e viu o bebé, pensou: “Se o bebê deste tamanho, imagine-se o pai!”, e fugiu correndo de volta para a Escócia. Para ter certeza de que não seria perseguido por Finn MacCool destruiu a estrada enquanto corria, restando apenas as pedras que agora formam a Calçada do Gigante.\n[…]\nComo supostamente a Calçada do Gigante foi construída para ligar a Irlanda com a Escócia, a sua outra extremidade pode ser vista a 130 km a nordeste, na pequenina ilha desabitada de Staffa, que fica perto da costa oeste de Escócia. O nome Staffa significa \"ilha dos pilares\". BenanDonner, que fugiu de Finn MacCool, também era chamado de Fingal. Em sua homenagem, a principal atração da ilha dos pilares recebeu o nome de Gruta de Fingal.\n[…]\n«Guia oficial da Calçada do Gigante» (em inglês)\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pedras deslizantes do Vale da Morte",
      "descricao": "Rochas que se deslocam sozinhas e deixam rastros no leito seco de Racetrack Playa, no Vale da Morte, na Califórnia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Vale da Morte, na Califórnia, pedras se arrastam sozinhas pelo chão. Elas são empurradas pelo vento sobre finas placas de quê?",
    "resposta": "Gelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sailing_stones",
      "https://en.wikipedia.org/wiki/Racetrack_Playa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sailing_stones",
        "situacao": "ok",
        "texto": "Sailing stones (also called sliding rocks, walking rocks, rolling stones, and moving rocks) are part of the geological phenomenon in which rocks move and inscribe long tracks along a smooth valley floor without animal intervention. The movement of the rocks occurs when large, thin sheets of ice floating on an ephemeral winter pond move and break up due to wind.\n[…]\nThe Racetrack's stones speckle the playa floor, predominantly in the southern portion. Historical accounts identify some stones around 100 m (330 ft) from shore, yet most of the stones are found relatively close to their respective originating outcrops. Three lithologic types are identified:\n[…]\nFurther understanding of the geologic processes at work in Racetrack Playa goes hand-in-hand with technological development. In 2009, development of inexpensive time-lapse digital cameras allowed the capturing of transient meteorological phenomena including dust devils and playa flooding. These cameras were aimed at capturing various stages of the previously mentioned phenomena, though discussion of the sliding stones ensued.\n[…]\nMessina, P., 1998, The Sliding Rocks of Racetrack Playa, Death Valley National Park, California: Physical and Spatial Influences on Surface Processes. Published doctoral dissertation, Department of Earth and Environmental Sciences, City University of New York, New York. University Microfilms, Incorporated, 1998.\n[…]\nStanley, G. M. (1955). \"Origin of playa stone tracks, Racetrack Playa, Inyo County, California\". Geological Society of America Bulletin. 66 (11): 1329–1350. Bibcode:1955GSAB...66.1329S. doi:10.1130/0016-7606(1955)66[1329:oopstr]2.0.co;2.\n[…]\nEarth Surface Dynamics Discussions: \"Trail formation by ice-shoved 'sailing stones' observed at Racetrack Playa, Death Valley National Park\"\n[…]\nYouTube: Moving Rocks of Death Valley's Racetrack Playa – video by Brian Dunning."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Racetrack_Playa",
        "situacao": "ok",
        "texto": "The Racetrack Playa, or The Racetrack, is a dry lake feature with sailing stones that inscribe linear \"racetrack\" imprints. It is located above the northwestern side of Death Valley, in Death Valley National Park, Inyo County, California, U.S.\n[…]\nRocks weighing up to 320 kg travel across Racetrack Playa in northern Death Valley National Park, California, leaving tracks. This phenomenon, which has been documented since 1948, is not unique and has been observed in various playas in southern California, the Tunisian Sahara, and South Africa.\n[…]\nThe sailing stones are a geological phenomenon found in the Racetrack. Slabs of dolomite and syenite ranging from a few hundred grams (few ounces) to hundreds of kilograms (pounds) inscribe visible tracks as they slide across the playa surface, without human or animal intervention. Instead, rocks move when ice sheets just a few millimeters thick  start to melt during periods of light wind.\n[…]\nGindarja Springs is an alignment of depressions that consists of three large indentations aligned in a northwesterly direction within the Racetrack playa. Two are completely within the playa and the third is on the edge. All three are associated with significant vegetation.\n[…]\nVisiting remote areas of Death Valley National Park bears considerable risk. Summer temperatures can surpass 120 °F (49 °C) in certain spots, large areas are without cellphone reception, roads are treacherous and the closest gas station is in Stovepipe Wells or in Furnace Creek (both are more than 60 miles away from Racetrack Playa).\n[…]\nUSGS: Racetrack Playa\n[…]\nThe Sliding Rocks of Racetrack Playa\n[…]\nDifferential GPS/GIS analysis of the sliding rock phenomenon of Racetrack Playa, Death Valley National Park"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rochas_deslizantes_de_Racetrack_Playa",
        "situacao": "ok",
        "texto": "As rochas deslizantes de Racetrack Playa (em português: Planície ou Praia dos Rastros) são um fenômeno geológico, que ocorre no lago seco chamado Racetrack Playa do Parque Nacional Vale da Morte no estado da Califórnia (Estados Unidos), onde pedras de dimensões variáveis, inclusive bastante grandes, são encontradas com um rastro de movimento atrás de si marcado no solo sem sinal de intervenção hum\n[…]\nPor muito tempo a causa deste movimento permaneceu controversa, embora várias teorias tentassem explicá-lo, mas o mistério foi resolvido com o registro de grandes placas flutuantes de gelo, formadas em noites frias, que são empurradas pelo vento e arrastam as rochas consigo. Casos semelhantes são encontrados em diversos outros lagos secos (playas) da região, mas os da Racetrack são os mais notáveis.\n[…]\nGeorge Stanley (1955) considerou que os ventos registrados na região são pouco potentes para mover rochas que pesam até 300 kg, e sugeriu que a formação de placas de gelo em torno das pedras poderia ser um fator auxiliar no aumento de sua superfície sem aumento significativo em seu peso, favorecendo a captação do vento e o incremento local de sua potência, bem como o deslizamento.\n[…]\nOs maiores episódios de movimento foram registrados com velocidades de vento acima de 5 metros por segundo. Enquanto as placas de gelo permanecem grandes, mas o calor do dia já abriu alguns caminhos de água livre para que possa haver um deslocamento, se encontram rochas pelo caminho, elas são empurradas também. Essas grandes placas explicam os movimentos paralelos de grupos de rochas, todas empurradas juntas pela mesma placa.\n[…]\nObservou-se que as rochas não flutuam sobre o gelo, aderidas a ele, como teorias antigas postulavam, mas são apenas empurradas pelas placas em movimento. No entanto, largas placas podem se acavalar sobre as rochas, aumentando ainda mais a área exposta ao vento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Jalapão",
      "descricao": "Região de cerrado no leste do Tocantins, conhecida por dunas, cachoeiras e fervedouros."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nos fervedouros do Jalapão, no Tocantins, ninguém consegue afundar. O que empurra o banhista para cima?",
    "resposta": "A pressão da água que brota do fundo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jalap%C3%A3o",
      "https://pt.wikipedia.org/wiki/Parque_Estadual_do_Jalap%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jalap%C3%A3o",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nO Jalapão abrange os municípios de Ponte Alta do Tocantins, Mateiros, São Félix do Tocantins, Lizarda, Rio Sono, Novo Acordo, Santa Tereza do Tocantins, Lagoa do Tocantins e Rio da Conceição, ocupando uma área equivalente ao estado de Sergipe. Passou à condição de parque estadual em 2001.\n[…]\nEm complemento à grande teia aquática, já vários pontos turísticos e curiosidades, como os \"fervedouros\", que são minas de água que jorram água com força suficiente para que uma pessoa não afunde em seu interior. Outro ponto turístico bastante interessante da região são as Dunas. Um ponto bastante visitado e que várias pessoas o procuram para admirar o pôr do sol. Atualmente a região possui boa estrutura para turistas nas cidades, sobretudo em Mateiros e Ponte Alta do Tocantins.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Estadual_do_Jalap%C3%A3o",
        "situacao": "ok",
        "texto": "O parque estadual do Jalapão é uma unidade de conservação brasileira de proteção integral à natureza localizada na região leste do estado do Tocantins. O território do parque, com uma área de 158 970,95 ha, está distribuído pelos municípios de Mateiros e\n[…]\nO Jalapão é uma região árida pontilhada de oásis. Está situada a leste do estado do Tocantins. Possui temperatura média de 30 graus Celsius. Sua área total é de 34 mil quilômetros quadrados. É cortado por imensa teia de rios, riachos e ribeirões, todos de água límpida e transparente.\n[…]\nO Jalapão abrange os municípios de Ponte Alta do Tocantins, Mateiros, São Félix do Tocantins, Lizarda, Rio Sono, Novo Acordo, Santa Tereza do Tocantins, Lagoa do Tocantins e Rio da Conceição, ocupando uma área equivalente ao estado de Sergipe. Passou à condição de parque estadual em 2001.\n[…]\nEm complemento à grande teia aquática, já vários pontos turísticos e curiosidades, como os \"fervedouros\", que são minas de água que jorram água com força suficiente para que uma pessoa não afunde em seu interior. Outro ponto turístico bastante interessante da região são as Dunas. Um ponto bastante visitado e que várias pessoas o procuram para admirar o pôr do sol. Atualmente a região possui boa estrutura para turistas nas cidades, sobretudo em Mateiros e Ponte Alta do Tocantins.\n[…]\nSão nascentes de rios subterrâneos que não encontram local de vazão e brotam em poços. Os fervedouros são as maiores atrações do Jalapão já que que por causa da pressão da água, os banhistas não afundam. Há algumas regras para as visitações, como o número limitado de visitantes por vez, para evitar a degradação do ambiente.\n[…]\nMedia relacionados com Parque Estadual do Jalapão no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Tepui de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Acredita-se que o Monte Roraima inspirou um romance de 1912 sobre dinossauros num planalto isolado. Quem escreveu esse livro?",
    "resposta": "Arthur Conan Doyle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Roraima",
      "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Roraima",
        "situacao": "ok",
        "texto": "Mount Roraima (Spanish: Monte Roraima; Tepuy Roraima; Cerro Roraima; Portuguese: Monte Roraima) is the highest of the Pacaraima chain of tepuis (table-top mountain) or plateaux in South America. It is located at the junction of Brazil, Guyana and Venezuela. A characteristic, large, flat-topped mountain surrounded by cliffs 400–1,000 m (1,300–3,300 ft) high, its highest point is located on the sout\n[…]\nSubsequently, teams of botanists, zoologists, and geologists mounted numerous expeditions to Mount Roraima to study its largely unknown flora and fauna and distinctive geological conditions.\n[…]\nMount Roraima and Mount Aoyan are the only flat-topped mountains in the Canaima National Park that can be climbed by hikers, with a monthly quota of 200 people. Its ascent takes three to five days in total, the summit route is on a natural slope on the southwestern cliffs of Mount Roraima, it does not require any special equipment or training, so it is chosen by almost all hikers, the only difficulty is that some streams and small waterfalls may become difficult to pass under heavy rain.\n[…]\nHowever, the length of the trail requires climbers to spend one night at the base camp at the foot of the cliff at an elevation of about 2,000 meters, and another night at the summit, taking several days to explore the plateau and two days to descend. The best time to climb Mount Roraima is in the dry season, however, when the sun is very strong and the temperature is high, it can make the road to the mountain difficult.\n[…]\n\"Mount Roraima information\". mountroraima.net.\n[…]\n\"Mount Roraima\". SummitPost.org.\n[…]\nBrazilian climber Eliseu Frechou and his team (2010). Dias de Tempestade [Days of Storm]. Vimeo (28m short documentary) (in Portuguese). 15300288. — shows a 2010 climb of Mount Roraima from the Guyana side\n[…]\n\"Mount Roraima guide\". explorationjunkie.com.\n[…]\n\"Mount Roraima interesting facts\". ospreyexpeditions.com. 2022."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)",
        "situacao": "ok",
        "texto": "The Lost World is an adventure and science fiction novel by British writer Sir Arthur Conan Doyle recounting an expedition to a remote plateau in the Amazon basin of South America where dinosaurs and other prehistoric animals still survive, along with a tribe of vicious ape-like creatures that are in conflict with a group of indigenous Indians.\n[…]\nThe work introduces the character of Professor Challenger, who leads the expedition (and who would appear in later Conan Doyle stories), and is narrated in the first person by the journalist member (Edward Malone) of the exploration party. The Lost World appeared in serial form in the Strand Magazine, illustrated by New-Zealand-born artist Harry Rountree, during the months of April to November 1912 and also was serialized in magazines in the United States from March to November 1912.\n[…]\nIn addition to lending its title to this subgenre, the title of Doyle's work was reused by Michael Crichton in his 1995 novel The Lost World, a sequel to Jurassic Park, and its film adaptation, The Lost World: Jurassic Park.\n[…]\nFawcett wrote in his posthumously published memoirs: \"Monsters from the dawn of Man's existence might still roam these heights unchallenged, imprisoned and protected by unscalable cliffs. So thought Conan Doyle when later in London I spoke of these hills and showed photographs of them. He mentioned an idea for a novel on Central South America and asked for information, which I told him I should be glad to supply.\n[…]\nSir Arthur Conan Doyle's The Lost World (1999–2002; TV series)\n[…]\nAdventures in Sir Arthur Conan Doyle's The Lost World (2002) (Canadian-French-Luxembourger animated series)\n[…]\nDinosaurs! (1966, an audio dramatic version of The Lost World adapted and directed by Ronald Liss and recorded by permission of the Estate of Sir Arthur Conan Doyle; MGM/Leo the Lion Records C/CH-1016)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Roraima",
        "situacao": "ok",
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nConhecido pelos ocidentais apenas no século XIX, o monte Roraima foi escalado pela primeira vez em 1884, por uma expedição britânica chefiada por Everard Ferdinand im Thurn. Entretanto, apesar das diversas expedições posteriores, sua fauna, flora e geologia permanecem largamente desconhecidas. A história de uma dessas incursões inspirou sir Arthur Conan Doyle a escrever o livro O Mundo Perdido, em 1912.\n[…]\nO monte Roraima é um tepui, um tipo de platô cercado por falésias, típico do planalto das Guianas. A montanha tem formato de arco no sentido norte-sul-leste-oeste com um estreitamento central causado pela presença de um grande circo natural em seu flanco noroeste.\n[…]\nNo interior do planalto, inúmeras cavernas e sumidouros conferem ao monte Roraima uma estrutura pseudocárstica. Essas cavernas formam uma verdadeira rede, denominada \"Monte Roraima Sur\" (\"Monte Roraima Sul\") Com 10 820 metros de extensão e um desnível de setenta e dois metros, é a maior caverna de quartzo do mundo.\n[…]\nDevido à descoberta e exploração tardias o monte Roraima só passou a ser considerado o ponto culminante do planalto das Guianas em 1931, quando uma comissão multinacional esteve no local para determinar a localização exata da tríplice fronteira entre Brasil, Guiana e Venezuela. As falésias ao norte ao nível da \"proa\" foram escaladas em 1973 pelos alpinistas britânicos Mo Anthoine, Joe Brown, Don Whillans e Hamish MacInnes.\n[…]\nSaiba tudo sobre o Monte Roraima - Muitas Informações - Portal Evolution",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Tepui de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Monte Roraima fica na fronteira entre o Brasil, a Venezuela e qual outro país?",
    "resposta": "Guiana",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Monte_Roraima",
      "https://en.wikipedia.org/wiki/Mount_Roraima"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Roraima",
        "situacao": "ok",
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nO monte Roraima está localizado no norte da América do Sul, na porção leste do planalto das Guianas, mais precisamente na serra de Pacaraíma, na região do planalto coberto pela Gran Sabana. Divide-se entre três países: Brasil a leste (5% de sua área), Guiana ao norte (10%) e Venezuela ao sul e oeste (85%).\n[…]\nO monte Roraima é um tepui, um tipo de platô cercado por falésias, típico do planalto das Guianas. A montanha tem formato de arco no sentido norte-sul-leste-oeste com um estreitamento central causado pela presença de um grande circo natural em seu flanco noroeste.\n[…]\nA 8,25 quilômetros ao norte do cume, uma outra elevação, com 2 772 metros de altitude, determina o ponto mais alto da Guiana, na fronteira com a Venezuela. Finalmente, ao norte do planalto, a 2 734 metros de altitude, encontra-se o marco da tríplice fronteira entre Brasil, Venezuela e Guiana.\n[…]\nDevido à descoberta e exploração tardias o monte Roraima só passou a ser considerado o ponto culminante do planalto das Guianas em 1931, quando uma comissão multinacional esteve no local para determinar a localização exata da tríplice fronteira entre Brasil, Guiana e Venezuela. As falésias ao norte ao nível da \"proa\" foram escaladas em 1973 pelos alpinistas britânicos Mo Anthoine, Joe Brown, Don Whillans e Hamish MacInnes.\n[…]\nOs picos mais altos do Brasil\n[…]\nSaiba tudo sobre o Monte Roraima - Muitas Informações - Portal Evolution\n[…]\nGuia de Mídia cidades do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Roraima",
        "situacao": "ok",
        "texto": "Mount Roraima (Spanish: Monte Roraima; Tepuy Roraima; Cerro Roraima; Portuguese: Monte Roraima) is the highest of the Pacaraima chain of tepuis (table-top mountain) or plateaux in South America. It is located at the junction of Brazil, Guyana and Venezuela. A characteristic, large, flat-topped mountain surrounded by cliffs 400–1,000 m (1,300–3,300 ft) high, its highest point is located on the sout\n[…]\nMount Roraima is located in the Pacaraima Mountains in the eastern part of the Guiana Highlands, in northern South America. Its area is shared among three countries: Brazil to the east (5%), Guyana to the north (10%), and Venezuela to the south and west (85%). Access to Mount Roraima from the Venezuelan side is close to the road and relatively easy; however, for both Brazil and Guyana the area is completely isolated and can be reached only by a few days of forest hikes or small local airstrip.\n[…]\nEuropean discovery was in 1595, during a Spanish and British race to colonize this part of South America. The English poet, army officer and explorer Walter Raleigh described it as an immeasurable \"crystal mountain\" gushing countless waterfalls. The first expedition to Mount Roraima took place in 1838, when German scientist and explorer Robert Hermann Schomburgk observed it during a Royal Geographical Society-funded expedition to explore British Guiana (1835–1839).\n[…]\nIn 1840, the British government commissioned him to establish the boundaries between British Guiana and Venezuela. When he returned to the area in 1844 to study the local flora, he reported that the peak seemed inaccessible due to its towering cliffs. In 1864, German naturalist and botanist Carl Ferdinand Appun and British geologist Charles Barrington Brown arrived at the southeastern tip of Mount Roraima for observation and proposed to go up the mountain by hot air balloon.\n[…]\n\"Mount Roraima guide\". explorationjunkie.com."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Monte Fuji",
      "descricao": "Vulcão de forma cônica na ilha de Honshu, o ponto mais alto do Japão."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o Monte Fuji teve a erupção Hoei, que cobriu de cinzas a cidade de Edo, atual Tóquio?",
    "resposta": "Século dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/H%C5%8Dei_eruption",
      "https://en.wikipedia.org/wiki/Mount_Fuji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/H%C5%8Dei_eruption",
        "situacao": "ok",
        "texto": "The Hōei eruption (Japanese: 宝永大噴火, Hōei daifunka) of Mount Fuji started on December 16, 1707 (during the Hōei era, 23rd day of the 11th month of the 4th year) and ended on February 24, 1708. It was the last confirmed eruption of Mount Fuji, with three unconfirmed eruptions reported from 1708 to 1854. The eruption took place during the reign of Emperor Higashiyama and the Shogun was Tokugawa Tsuna\n[…]\nThe eruption happened on Mount Fuji's east-southeast flank and formed three new volcanic vents, named No. 1, No. 2, and No. 3 Hōei vents. The catastrophe developed over several days; an initial earthquake with an explosion of cinders and ash was followed some days later with more forceful ejections of rocks and stones. The Hōei eruption is said to have caused the worst ash-fall disaster in Japanese history.\n[…]\nThe Hōei quake caused stress and compression of the magma chambers underneath Mount Fuji, leading to the eruption.\n[…]\nIt is assumed that, much like the 1707 Hōei eruption, the volcano would almost certainly erupt at the same vent where the previous eruption occurred.\n[…]\nA repeat of the 1707 Hōei eruption may impact over 30 million people in the highly populated areas of eastern Tokyo, Kanagawa, Chiba and parts of Yamanashi, Saitama, and Shizuoka. The volcano would most heavily affect Tokyo and would likely cause power outages, water shortages, and malfunctions in the highly technical city. Mount Fuji has more than 20 seismic activity stations monitoring any movement in the ground.\n[…]\nHistoric eruptions of Mount Fuji\n[…]\n富士山火山防災協議会 (Council for Fuji volcano disaster reduction)\n[…]\n富士山宝永噴火（1707）後の土砂災害(PDF) Archived 2007-09-27 at the Wayback Machine (Distribution of sediment disasters after the 1707 Hoei eruption of Fuji Volcano in central Japan, based on historical documents)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Fuji",
        "situacao": "ok",
        "texto": "Mount Fuji (富士山・富士の山, Fujisan, Fuji no Yama) is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the highest mountain in Japan, the second-highest volcano on any Asian island (after Mount Kerinci on the Indonesian island of Sumatra), and the seventh-highest peak of an island on Earth. Mount Fuji last erupted from 1707 t\n[…]\nThese 25 locations include Mount Fuji and the Shinto shrine, Fujisan Hongū Sengen Taisha.\n[…]\nAs of December 2002, the volcano was classified as active with a low risk of eruption. The last recorded eruption was the Hōei eruption which started on December 16, 1707 (Hōei 4, 23rd day of the 11th month), and ended about January 1, 1708 (Hōei 4, 9th day of the 12th month). The eruption formed a new crater and a second peak, named Mount Hōei, halfway down its southeastern side. Fuji spewed cinders and ash that resembled rainfall in Izu, Kai, Sagami, and Musashi.\n[…]\nParagliders take off in the vicinity of the fifth station, Gotemba parking lot, between Subashiri and Hōei-zan peak on Fuji's south side, and at other locations, depending on wind direction. Several paragliding schools use the wide sandy/grassy slope between Gotemba and Subashiri parking lots as a training hill.\n[…]\nIn Shinto mythology, Kuninotokotachi (国之常立神 Kuninotokotachi-no-Kami in Kojiki, or 国常立尊 Kuninotokotachi-no-Mikoto in Nihon Shoki) is one of the two gods born from \"something like a reed that arose from the soil\" when the earth was chaotic. According to the Nihon Shoki, Konohanasakuya-hime, wife of Ninigi, is the goddess of Mount Fuji, where Fujisan Hongū Sengen Taisha is dedicated to her.\n[…]\n\"Fujisan (Mount Fuji)\" (PDF). Japan Meteorological Agency. Archived (PDF) from the original on September 24, 2015.\n[…]\nFujisan (Mount Fuji) – Smithsonian Institution: Global Volcanism Program\n[…]\nMount Fuji Tours"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erup%C3%A7%C3%A3o_do_Monte_Fuji_de_1707",
        "situacao": "ok",
        "texto": "A erupção do monte Fuji da era Hōei (宝永大噴火, Hōei dai funka) foi a terceira erupção deste vulcão registrada, que ocorreu em 1707 (que corresponde ao ano 4 da era Hōei no calendário tradicional japonês), com início em 16 de dezembro, este fenômeno natural prolongou-se até 1 de janeiro de 1708, durante o período Edo. As duas erupções anteriores ocorreram no período Heian (as erupções de Enryaku Jōgan\n[…]\nApesar de não ter produzido qualquer fluxo de lava, a erupção da era Hōei expeliu-se para a atmosfera com um grande volume de cinzas vulcânicas, que se estenderam por vastas áreas ao seu redor, chegando exclusivamente a cidade de Edo, situada a 100 km do monte Fuji. Estima-se que o volume total de cinzas tivesse sido de 800.000.000 m³. As cinzas caíram como chuva nas províncias de Izu, Kai, Sagami e Musashi\n[…]\nA erupção ocorreu no lado sudoeste do monte Fuji, e criou três novas crateras numeradas de 1 a 3. O monte Fuji não voltou a entrar em erupção desde então.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Monte Fuji",
      "descricao": "Vulcão de forma cônica na ilha de Honshu, o ponto mais alto do Japão."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que artista japonês dedicou ao Monte Fuji uma série de trinta e seis gravuras, entre elas A Grande Onda de Kanagawa?",
    "resposta": "Hokusai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thirty-six_Views_of_Mount_Fuji",
      "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thirty-six_Views_of_Mount_Fuji",
        "situacao": "ok",
        "texto": "Thirty-six Views of Mount Fuji (Japanese: 富嶽三十六景, Hepburn: Fugaku Sanjūrokkei) is a series of landscape prints by the Japanese ukiyo-e artist Hokusai (1760–1849). The series depicts Mount Fuji from different locations and in various seasons and weather conditions. The immediate success of the publication led to another ten prints being added to the series.\n[…]\nThe series was produced from c. 1830 to 1832, when Hokusai was in his seventies and at the height of his career, and published  by Nishimura Yohachi. Among the prints are three of Hokusai's most famous: The Great Wave off Kanagawa, Fine Wind, Clear Morning, and Thunderstorm Beneath the Summit. The lesser-known Kajikazawa in Kai Province is also considered one of the series' best works. The Thirty-six Views has been described as the artist's \"indisputable colour-print masterpiece\".\n[…]\nThe most famous single image from the series is widely known in English as The Great Wave off Kanagawa. It is Hokusai's most celebrated work and is often considered the most recognizable work of Japanese art in the world. Another iconic work from Thirty-six Views is Fine Wind, Clear Morning, also known as Red Fuji, which has been described as \"one of the simplest and at the same time one of the most outstanding of all Japanese prints\".\n[…]\nThe Thirty-six Views of Mount Fuji prints were displayed at the National Gallery of Victoria in Melbourne, Australia as part of a Hokusai exhibit from 21 July through 22 October 2017. The exhibit featured two copies of The Great Wave off Kanagawa, one from the NGV and one from Japan Ukiyo-e Museum.\n[…]\nCalza, Gian Carlo (2003). Hokusai. Phaidon. ISBN 0714844578.\n[…]\nHokusai's 36 Views of Mount Fuji\n[…]\nA short biography of Hokusai including a section on the 36 Views of Mt. Fuji series.\n[…]\nA brief description and woodblock reprint collection of Hokusai's 36 Views of Mt. Fuji series."
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
        "situacao": "ok",
        "texto": "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura; lit. 'Under the Wave off Kanagawa') is a woodblock print by the Japanese ukiyo-e artist Hokusai (1760–1849), created in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large, cresting wave forming a spiral in the centre over the boats and Mount\n[…]\nThe Great Wave off Kanagawa has been described as \"possibly the most reproduced image in the history of all art\", as well as being a contender for the \"most famous artwork in Japanese history\". This woodblock print has influenced several Western artists and musicians, including Claude Debussy, Vincent van Gogh and Claude Monet. Hokusai's younger colleagues Hiroshige and Utagawa Kuniyoshi were inspired to make their own wave-centric works.\n[…]\nThe Great Wave off Kanagawa has two inscriptions. The title of the series is written in the upper-left corner within a rectangular frame, which reads: \"冨嶽三十六景/神奈川沖/浪裏\" Fugaku Sanjūrokkei / Kanagawa oki / nami ura, meaning \"Thirty-six views of Mount Fuji / On the high seas in Kanagawa / Under the wave\". The inscription to the left of the box bears the artist's signature: 北斎改爲一筆 Hokusai aratame Iitsu hitsu which reads as \"(painting) from the brush of Hokusai, who changed his name to Iitsu\".\n[…]\nHenri Rivière, a draughtsman, engraver, and watercolourist who was also an important figure behind the Paris entertainment venue Le Chat Noir, was one of the first artists to be heavily influenced by Hokusai's work, particularly The Great Wave off Kanagawa. In homage to Hokusai's work, Rivière published a series of lithographs titled The Thirty-Six Views of the Eiffel Tower in 1902.\n[…]\nMedia related to The Great Wave off Kanagawa by Katsushika Hokusai at Wikimedia Commons\n[…]\n\"Hokusai's 'The Great Wave'\"—Episode from the BBC show A History of the World in 100 Objects"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trinta_e_seis_vistas_do_monte_Fuji",
        "situacao": "ok",
        "texto": "36 vistas do monte Fuji (em japonês 富嶽三十六景, Fugaku Sanjū-Rokkei) é, apesar do nome, uma série de 46 gravuras em madeira (dez das quais adicionadas após a publicação), datadas de 1832, criadas pelo artista japonês de ukiyo-e Katsushika Hokusai (1760–1849) retratando o monte Fuji em diferentes estações do ano, de diferentes locais, mais ou menos distantes, e com diferentes condições do tempo.\n[…]\nHokusai, Katsushika (2007). L' ippocampo, Jocelyn Bouquillard, ed. Hokusai: le trentasei vedute del monte Fuji. Milano: [s.n.] ISBN 9788895363936\n[…]\n«As 36 Vistas do monte Fuji» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Parque Florestal Nacional de Zhangjiajie",
      "descricao": "Parque na província de Hunan, na China, com milhares de pilares de arenito cobertos de vegetação."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os pilares de pedra do parque de Zhangjiajie, na China, inspiraram as montanhas flutuantes de qual filme de James Cameron?",
    "resposta": "Avatar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park",
        "situacao": "ok",
        "texto": "Zhangjiajie National Forest Park (Chinese: 湖南张家界国家森林公园; pinyin: Húnán Zhāngjiājiè Guójiā Sēnlín Gōngyuán; lit. 'Hunan Zhangjiajie National Forest Park') is a national forest park located in Zhangjiajie, Hunan Province, China. It is one of several national parks within the Wulingyuan Scenic Area.\n[…]\nIn 1982, the park was recognized as China's first national forest park with an area of 4,810 ha (11,900 acres). Zhangjiajie National Forest Park is part of a much larger 397.5 km2 (153.5 sq mi) Wulingyuan Scenic Area. In 1992, Wulingyuan was officially recognized as a UNESCO World Heritage Site. It was then approved by the Ministry of Land and Resources as Zhangjiajie Sandstone Peak Forest National Geopark (3,600 km2 (1,400 sq mi)) in 2001.\n[…]\nOne of the park's quartz-sandstone pillars, the 1,080-metre (3,540 ft)  Southern Sky Column, was officially renamed \"Avatar Hallelujah Mountain\" (Chinese: 阿凡达-哈利路亚山; pinyin: Āfándá hālìlùyà shān) in honor of the movie Avatar in January 2010. The film's director and production designers said that they drew inspiration for the floating rocks from mountains from around the world, but mainly from Guilin, Huangshan, and Zhangjiajie in Hunan province.\n[…]\nThere are three gondola lift systems within the park—The Tianzi Mountain Cable Car, Yangjiajie cable car and Huangshizhai cable car.\n[…]\nAnother feature of the national park is the karst caves scattered throughout the area. In April and May of 2025, footage of the caves filled with garbage was published online, leading to a widespread cleaning operation in those caves.\n[…]\nList of national geoparks\n[…]\nTianmen Mountain, a feature within the nearby Tianmen Mountain National Park.\n[…]\nAvatar Hallelujah Mountain, the inspiration for the floating mountains in the movie “Avatar.” Atlas Obscura article with photos."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Monument Valley",
      "descricao": "Vale com grandes formações de arenito na fronteira entre Arizona e Utah, nos Estados Unidos, em território navajo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que diretor filmou tantos faroestes no Monument Valley que um mirante do vale ganhou o seu nome?",
    "resposta": "John Ford",
    "distratores": [
      "Sergio Leone",
      "Howard Hawks",
      "Sam Peckinpah"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Monument_Valley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monument_Valley",
        "situacao": "ok",
        "texto": "Monument Valley (Navajo: Tsé Biiʼ Ndzisgaii, pronounced [tsʰépìːʔ ǹtsɪ̀skɑ̀ìː], meaning \"valley of the rocks\") is a region of the Colorado Plateau characterized by a cluster of sandstone buttes, with the largest reaching 1,000 ft (300 m) above the valley floor. The most famous butte formations are located in northeastern Arizona along the Utah–Arizona state line. The valley is considered sacred by\n[…]\nMonument Valley has been featured in many forms of media since the 1930s. Famed director John Ford used the location for a number of his Westerns. Film critic Keith Phipps wrote that \"its five square miles [13 km2] have defined what decades of moviegoers think of when they imagine the American West\".\n[…]\nMonument Valley has been featured in numerous computer games, in print, and in motion pictures, including multiple Westerns directed by John Ford that influenced audiences' view of the American West, such as: Stagecoach (1939), My Darling Clementine (1946), Fort Apache (1948), She Wore a Yellow Ribbon (1949), and The Searchers (1956).\n[…]\nList of rock formations in Monument Valley\n[…]\nMcPherson, Robert S. (1994), \"Monument Valley\", Utah History Encyclopedia, University of Utah Press, ISBN 9780874804256, archived from the original on March 18, 2025, retrieved May 7, 2025\n[…]\n\"Monument Valley Tours & Tickets\". Travel Guide.\n[…]\n\"Complete Monument Valley Guide: Drive, Hotels, Camping, Seasons\". When To Go. November 12, 2017.\n[…]\n\"List of movies and television shows with scenes in Monument Valley\". IMDb.\n[…]\n\"Monument Valley\". American Southwest Guide.\n[…]\n\"Monument Valley\". Navajo Nation Parks. Archived from the original on January 4, 2006.\n[…]\n\"Photographs and documents of pre-automobile access Monument Valley from the Monument Highway Digital Collection\". Utah State University.\n[…]\n\"Uranium mining in Monument Valley and its decommissioning\". Energy Information Administration. Archived from the original on October 14, 2003."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monument_Valley",
        "situacao": "ok",
        "texto": "Monument Valley é uma região de clima desértico dos Estados Unidos situada na reserva dos índios Navajos em cuja área se encontra um monumento que marca o ponto de divisas de quatro Estados e é denominado \"As Quatro Esquinas\" que é comum a quatro estados, que são Utah, Colorado, Novo México e Arizona.\n[…]\nA região de Monument Valley foi muito usada para gravação de filmes desde os anos 1930, principalmente no gênero western e particularmente os do diretor John Ford tendo como ator principal John Wayne. E também é referenciada e retratada em diversos jogos eletrônicos.\n[…]\nGrand Theft Auto: San Andreas, a região de Bone County no jogo é baseado em Monument Valley.\n[…]\nO jogo Monument Valley para dispositivos móveis, é um jogo de puzzle com diversas referências à região.\n[…]\nValley of the Gods\n[…]\nLista de filmes e séries de tv com cenas em Monument Valley, IMDB, em inglês.\n[…]\n\"Monument Valley\", American Southwest, em inglês.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Monte Ararat",
      "descricao": "Vulcão adormecido no leste da Turquia, perto das fronteiras com a Armênia e o Irã."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição, que embarcação teria encalhado no Monte Ararat, no leste da Turquia?",
    "resposta": "Arca de Noé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Ararat",
      "https://pt.wikipedia.org/wiki/Monte_Ararat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Ararat",
        "situacao": "ok",
        "texto": "Mount Ararat, officially Mount Ağrı, also known as Masis, is a snow- capped and dormant compound volcano and a stratovolcano in easternmost Turkey. It consists of two major volcanic cones: Greater Ararat and Little Ararat. Greater Ararat is the highest peak in Turkey and the Armenian highlands with an elevation of 5,137 m (16,854 ft); Little Ararat's elevation is 3,896 m (12,782 ft). The Ararat ma\n[…]\nMount Ararat has been depicted on five Armenian dram banknotes issued sice 1993.\n[…]\nThe world renowned Turkish-Kurdish writer Yaşar Kemal's 1970 book entitled Ağrı Dağı Efsanesi (The Legend of Mount Ararat) is about a local myth about a poor boy and the governor's daughter. There is also an opera (1971) and a film (1975) based on that novel.\n[…]\nIn the 1984 science fiction novel Orion by Ben Bova, part three entitled \"Flood\" is set at an unspecified valley at the foot of Mount Ararat. The antagonist, Ahriman, floods the valley by melting the snow caps of the mountain in a bid to stop the invention of agriculture by a band of Epipalaeolithic hunter-gatherers.\n[…]\nSeveral major episodes in the supernatural spy novel Declare (2001) by Tim Powers take place on Mount Ararat, which is the focal point of supernatural happenings.\n[…]\n\"Holy Mountains\", the 8th track of the album Hypnotize (2005) by System of a Down, an American rock band composed of four Armenian Americans, \"references Mount Ararat [...] and details that the souls lost to the Armenian Genocide have returned to rest here\".\n[…]\nThe 2002 film Ararat by Armenian-Canadian filmmaker Atom Egoyan features Mount Ararat prominently in its symbolism.\n[…]\nIn 1927 the Kurdish nationalist party Xoybûn led by Ihsan Nuri, fighting an uprising against the Turkish government, declared the independence of the Republic of Ararat (Kurdish: Komara Agiriyê), centered around Mount Ararat.\n[…]\n\"Ararat\". Global Volcanism Program. Smithsonian Institution. Retrieved 2021-06-25."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Ararat",
        "situacao": "ok",
        "texto": "O Ararate (em turco: Ağrı Dağı; em armênio: Մասիս; romaniz.: Masis ou Արարատ, Ararat; em curdo: Çiyayê Agirî; em persa: کوه آرارات; romaniz.: Kuh-e Ararat) é a mais alta montanha da Turquia moderna. Tem dois picos: Grande Ararate (o pico mais alto da Turquia e de todo o planalto armênio com altitude de 5 137 m) e o Baixo Ararate (com uma altitude de 3 896 m). O maciço do Ararate tem de cerca de 40\n[…]\nA fronteira entre o Irã e a Turquia fica a leste do Baixo Ararate, o pico mais baixo do maciço do Ararate. Nesta área, pela Convenção de Teerã de 1932, realizou-se a mudança das fronteiras em favor da Turquia, permitindo a ela ocupar o flanco leste do maciço. O Monte Ararate, na tradição judaico-cristã, está associado com as \"Montanhas do Ararate\" onde, segundo o livro do Gênesis, a Arca de Noé estaria supostamente localizada.\n[…]\nO Monte Ararate está situado na região leste da Anatólia, Turquia, entre as províncias de Eder e Are, perto da fronteira com o Irã e a Armênia, entre os rios Aras e Murat. O seu cume fica a cerca de 16 km ao oeste do Irã e 32 km ao sul da fronteira com a Armênia. O exclave de Naquichevão pertencente ao Azerbaijão também está nas proximidades da montanha.\n[…]\nO Ararate domina o horizonte da capital da Armênia, Erevã. A montanha é reverenciada pelos armênios como um símbolo de sua identidade nacional e de seu irredentismo. O Ararate é o símbolo nacional da República da Armênia desde 1991, sendo apresentado no centro de seu brasão de armas. Em 1937, ele passou a figurar no brasão da República Socialista Soviética da Armênia, que caracterizava o Monte Ararat, juntamente com o martelo soviético e a foice com uma estrela vermelha atrás dele.\n[…]\nExpedições ao Mt. Ararate - Turquia\n[…]\nWebcam do Ararate\n[…]\nSite que reúne provas fotográficas e textuais da existência da Arca de Noé\n[…]\nTHE BOUNDARIES OF URARTU/ARARAT, By Rex Geissler, Gordon Franz, and Bill Crouse, Dez. 24, 2008"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Falésias de Moher",
      "descricao": "Penhascos sobre o Oceano Atlântico no condado de Clare, na costa oeste da Irlanda."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As Falésias de Moher, na costa oeste da Irlanda, aparecem em qual filme da saga Harry Potter?",
    "resposta": "O Enigma do Príncipe",
    "distratores": [
      "A Pedra Filosofal",
      "O Cálice de Fogo",
      "As Relíquias da Morte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cliffs_of_Moher"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cliffs_of_Moher",
        "situacao": "ok",
        "texto": "The Cliffs of Moher (; Irish: Aillte an Mhothair) are sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometres (9 miles).\n[…]\nThe area is considered a geologic laboratory that preserves a record of deltaic deposition in deep water. Individual strata vary in thickness from just a few centimetres to several metres, each representing a specific depositional event in the history of the delta. In aggregate, up to 200 metres of sedimentary rocks are exposed in the Cliffs of Moher.\n[…]\nThe Cliffs of Moher have appeared in numerous media. In cinema, the cliffs have appeared in several films, including The Princess Bride (1987) (as the filming location for \"The Cliffs of Insanity\"), Harry Potter and the Half-Blood Prince (2009) (as the filming location for where Harry Potter and Professor Dumbledore are looking for a horcrux in a sea cave),  Leap Year (2010) and Irish Wish (2024).\n[…]\nIn music, the cliffs have been the scene for music videos, including Maroon 5's \"Runaway\", Westlife's \"My Love\", and Rich Mullins' \"The Color Green\". In 1999, most of singer Dusty Springfield's ashes were scattered at the cliffs by her brother Tom. There is also an Irish fiddle tune called The Cliffs of Moher.\n[…]\nBus Éireann route 350 links the Cliffs of Moher to several locations: Ennis, Ennistymon, Doolin, Lisdoonvarna, Kinvara and Galway. This service includes a number of journeys each way daily. There is also a privately operated shuttle bus that serves the site from Doolin.\n[…]\nSlieve League, another Irish mountain with sea-cliffs\n[…]\nCroaghaun, another Irish mountain with sea-cliffs\n[…]\nOfficial website of Cliffs of Moher Visitor Experience"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fal%C3%A9sias_de_Moher",
        "situacao": "ok",
        "texto": "As Falésias de Moher (em irlandês: Aillte an Mhothair, lit. falésias da ruína, também escrito como Falésias de Mohair) localizam-se na paróquia de Liscannor, no ponto sudoeste da área de Burren, perto de Doolin, localizado no Condado de Clare, Irlanda. O nome deriva de um antigo forte chamado \"Mothar\", destruído durante as guerras contra Napoleão para a construção de um farol.\n[…]\nAs falésias estendem-se 8 km ao longo do Oceano Atlântico e atingem a sua altura máxima de 214 metros ao norte da Torre de O'Brien. A vista das falésias atrai perto de um milhão de visitantes por ano. Num dia limpo, são visíveis as ilhas de Aran na Baía de Galway, tal como os vales e colinas de Connemara.\n[…]\nA Torre de O'Brien é uma torre redonda de pedra que fica aproximadamente no ponto médio das falésias. Foi construída cerca de 1835 por sir Cornelius O'Brien, descendente do rei irlandês Brian Boru, para servir como ponto de observação para turistas vitorianos ou, segundo a lenda, para impressionar visitantes do sexo feminino. Do topo da vigia, é possível ver as ilhas de Aran e a Baía de Galway, as montanhas Maum Turk, os Doze Pins a norte em Connemara, e Loop Head a sul.\n[…]\nAs Falésias são um ponto importante de nidificação de aves marinhas na Irlanda e estão incluídas numa Área Especial de Proteção (Special Protection Area) ambiental.\n[…]\nMedia relacionados com Falésias de Moher no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Capadócia",
      "descricao": "Região histórica no centro da Turquia, famosa pelas chaminés de fada e pelas cidades subterrâneas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As chaminés de fada da Capadócia, na Turquia, foram esculpidas pela erosão de que tipo de rocha?",
    "resposta": "Tufo vulcânico",
    "distratores": [
      "Granito",
      "Mármore",
      "Arenito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cappadocia",
      "https://pt.wikipedia.org/wiki/Capad%C3%B3cia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cappadocia",
        "situacao": "ok",
        "texto": "Cappadocia (; Turkish: Kapadokya) is a historical region in Central Anatolia region, Turkey. It is largely in the provinces of Nevşehir, Kayseri, Aksaray, Kırşehir, Sivas and Niğde. Today, the touristic Cappadocia Region is located in Nevşehir province.\n[…]\nThe earliest record of the name of Cappadocia (; Turkish: Kapadokya; Ancient Greek: Καππαδοκία, romanized: Kappadokía, Classical Syriac: ܩܦܘܕܩܝܐ, romanized: Kəp̄uḏoqyā, from Old Persian: 𐎣𐎫𐎱𐎬𐎢𐎣 Katpatuka; Hittite: 𒅗𒋫𒁉𒁕, romanized: Katapeda; Armenian: Կապադովկիա,, romanized: Kapadovkia) dates from the late sixth century BC, when it appears in the trilingual inscriptions of two early Achaemenid emperors, Darius the Great and Xerxes I, as one of the countries (Old Persian dahyu-).\n[…]\nTo the crusaders, Cappadocia was terra Hermeniorum, the land of the Armenians, due to the large number of Armenians settled there.\n[…]\nCappadocia Church (Turkish: Kapadokya Kilisesi) is a Christian church and local congregation in Avanos, a town in Nevşehir Province in Cappadocia. The church holds Turkish-language worship services within a Protestant theological framework, according to its own statements. Several online travel and business directories list it as one of the places of worship and visitation in Avanos.\n[…]\nCappadocia is served by Nevşehir Kapadokya Airport (NAV), which functions as the region's primary airport. According to the Republic of Türkiye Directorate General of State Airports Authority (DHMİ), recent infrastructure and capacity expansion projects have increased the airport's annual passenger capacity to nearly 2 million, a level considered sufficient for the region's current tourism demand.\n[…]\nWeiskopf, Michael (1990). \"Cappadocia\". Encyclopaedia Iranica, Vol. IV, Fasc. 7–8. pp. 780–86."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Capad%C3%B3cia",
        "situacao": "ok",
        "texto": "A Capadócia (em turco: Kapadokya, em grego: Καππαδοκία; romaniz.:  Kappadokía) é uma região histórica e turística da Anatólia central, na Turquia.\n[…]\nAs características mais distintivas da região são as formações geológicas únicas, resultado de fenómenos vulcânicos e da erosão, e o seu rico património histórico e cultural, nomeadamente cidades subterrâneas e inúmeras habitações e igrejas escavadas em rocha, muitas destas com admiráveis frescos. Em 1985, o Parque Nacional de Göreme, uma das áreas mais famosas da região, com 9 576 ha, foi declarada Património Mundial pela UNESCO.\n[…]\nQuando na parte superior destas elevações existe rocha basáltica, mais resistente ao efeito abrasivo, são formadas as chamadas chaminés de fadas, as quais são cones coroados por grandes pedras praticamente planas, que tanto aparecem isoladas, como em grupo, criando paisagens insólitas. Com a continuação do efeito da erosão, os pedestais dos blocos basálticos acabam por colapsar.\n[…]\nAs zonas sem basalto deram origem a vales, as zonas de tufo macio desagregaram-se completamente, formando zonas planas poeirentas, enquanto que nas encostas, a erosão esculpiu desfiladeiros, mesas, escarpas, pirâmides de 15 a 30 metros,  picos, agulhas que por vezes lembram minaretes, cones e chaminés de fadas. A erosão continua nos nossos dias: os picos e cones atuais vão desaparecendo lentamente, ao mesmo tempo que outros se estão a formar nas encostas à beira dos planaltos.\n[…]\nAs obras seguintes não foram utilizadas diretamente, mas faziam parte do artigo «Capadocia» na Wikipédia em castelhano (acessado nesta versão), no qual grandes partes do texto foram baseadas."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Antártida",
      "descricao": "Continente gelado em torno do Polo Sul."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Considerando deserto toda região onde quase não chove nem neva, qual é o maior deserto do mundo?",
    "resposta": "Antártida",
    "distratores": [
      "Saara",
      "Deserto de Gobi",
      "Deserto da Arábia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_deserts_by_area",
      "https://en.wikipedia.org/wiki/Antarctica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_deserts_by_area",
        "situacao": "ok",
        "texto": "This article provides a list of deserts ranked by the total area that they cover on Earth. Only deserts greater than 50,000 km2 (19,300 sq mi) are included in this ranking.\n[…]\nList of deserts (all deserts and pseudo-deserts by continent)\n[…]\nDesertification\n[…]\nPolar desert\n[…]\nUnited Nations Convention to Combat Desertification\n[…]\nDesert greening"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antarctica",
        "situacao": "ok",
        "texto": "Antarctica ( ) is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered \n[…]\nThe name given to the continent originates from the word antarctic, which comes from Middle French antartique or antarctique ('opposite to the Arctic') and the Latin antarcticus ('opposite to the north'). Antarcticus is derived from the Greek ἀντι- ('anti-') and ἀρκτικός (arktikos, 'of the Bear [Ursa Major], northern'). The Greek philosopher Aristotle wrote in Meteorology about an \"Antarctic region\" in c. 350 BC.\n[…]\nThe Greek geographer Marinus of Tyre reportedly used the name in his world map in the second century AD. The Roman authors Gaius Julius Hyginus and Apuleius used for the South Pole the romanised Greek name polus antarcticus, from which derived the Old French pole antartike (modern pôle antarctique) attested in 1270, and from there the Middle English pol antartik, found first in a treatise written by the English author Geoffrey Chaucer.\n[…]\nAntarctica provides a unique environment for the study of meteorites: the dry polar desert preserves them well, and meteorites older than a million years have been found. They are relatively easy to find, as the dark stone meteorites stand out in a landscape of ice and snow, and the flow of ice accumulates them in certain areas. The Adelie Land meteorite, discovered in 1912, was the first to be found. Meteorites contain clues about the composition of the Solar System and its early development.\n[…]\nIndex of Antarctica-related articles\n[…]\nAntarctica. on In Our Time at the BBC\n[…]\nBritish Antarctic Survey (BAS)\n[…]\nU.S. Antarctic Program Portal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lista_de_desertos_por_%C3%A1rea",
        "situacao": "ok",
        "texto": "Segue-se abaixo a Lista de desertos por área.\n[…]\nLista de Desertos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Aconcágua",
      "descricao": "Montanha dos Andes na província argentina de Mendoza, o ponto mais alto das Américas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Fora da Ásia, qual é a montanha mais alta do mundo?",
    "resposta": "Aconcágua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aconcagua",
      "https://pt.wikipedia.org/wiki/Aconc%C3%A1gua"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aconcagua",
        "situacao": "ok",
        "texto": "Aconcagua (Spanish pronunciation: [akoŋˈkaɣwa]) is a mountain in the Principal Cordillera of the Andes range, located in Mendoza Province, Argentina. With a summit elevation of 6,967.15 metres (22,858.1 feet), it is the highest mountain outside Asia. It is the second-most topographically prominent peak in the world and one of the Seven Summits, the highest mountains on each of the seven continents\n[…]\nIn 2016, Fernanda Maciel set the first women's record for climbing and descending Aconcagua from Horcones in 22 hours, 52 minutes. The  current women's record is held by Ecuadorean Daniela Sandoval at 20 hours, 17 minutes.\n[…]\nAt nearly 7,000 m (23,000 ft), Aconcagua is the highest peak outside Asia. It is believed to have the highest death rate of any mountain in South America — around three a year — which has earned it the nickname \"Mountain of Death\". More than 100 people have died on Aconcagua since records began.\n[…]\nFor the Incas, Aconcagua was a sacred mountain. As on other mountains (e.g. Ampato), places of worship were built here and sacrifices, including human sacrifices, were made. The sites discovered in 1985 at an elevation of 5167 m are among the highest in the world and are the most difficult of all Inca sites to reach. Here, the remains of a child bedded on grass, cloth and feathers were found inside stone walls (Aconcagua mummy).\n[…]\nAconcagua mummy\n[…]\nAconcagua in Andeshandbook\n[…]\n\"Aconcagua\". SummitPost.org. Retrieved 26 October 2010.\n[…]\nCentro de Investigación en Medicina de Altura (CIMA) de Aconcagua, a consortium of researchers and mountaineers working to improve the understanding of high altitude illness.\n[…]\nBlog with information from a successful Aconcagua ascent\n[…]\nLive webcam from Aconcagua base camp (December to March)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aconc%C3%A1gua",
        "situacao": "ok",
        "texto": "Aconcágua (pronunciação espanhola: [akoŋkaɣwa]) é a montanha mais alta fora da Ásia, com 6.961 metros de altitude, e, por extensão, o ponto mais alto tanto no hemisfério ocidental quanto no hemisfério sul. Ele está localizado na Cordilheira dos Andes, na província de Mendoza, Argentina, e está situado 112 quilômetros a noroeste de sua capital, a cidade de Mendoza.\n[…]\nA primeira tentativa de chegar ao cume foi feita por um europeu em 1883 por um grupo liderado pelo geólogo e explorador alemão Paul Güssfeldt. A rota que ele usou é agora o itinerário normal até a montanha.\n[…]\nPor ser a montanha mais alta da América desafia todos os anos montanhistas de todo mundo a escalá-la. Existem alguns locais para acampamentos para quem deseja realizar a subida da montanha: Confluência a 3368 m de altitude, Plaza de Mulas 4370 m – que é o acampamento base –, Nido de Condores a 5560 m e Berlim a 5926 m.\n[…]\nApesar de sua altitude, o Aconcágua não é uma montanha difícil de ser escalada do ponto de vista técnico, pois para atingir o seu cume pela rota normal não é necessário que o montanhista realize escaladas técnicas. Porém, a subida pela face sul do Aconcágua é considerada uma das mais perigosas do mundo.[carece de fontes]? Para superar blocos de gelo do tamanho de edifícios são necessários bom conhecimento técnico e enorme capacidade física.\n[…]\nO desafio que a montanha apresenta é um teste de resistência física pois o montanhista tem que superar o frio e a falta de oxigênio comum às grandes altitudes. O Aconcágua foi escalado pela primeira vez pelo suíço Mathias Zürbriggen em 1897.\n[…]\nParque Provincial Aconcagua (em espanhol com opções de tradução)\n[…]\nInformação geográfica, história, rotas, acampamentos e clima de Cerro Aconcágua (em português)\n[…]\nDados e fotos relacionados a Face Sul do Aconcágua (em português)\n[…]\nTracklog para GPS do Aconcagua (em português)"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Mauna Kea",
      "descricao": "Vulcão adormecido na ilha do Havaí, nos Estados Unidos, cuja base fica no fundo do Oceano Pacífico."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Medida da base, no fundo do mar, até o cume, que montanha havaiana é considerada a mais alta da Terra?",
    "resposta": "Mauna Kea",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mauna_Kea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mauna_Kea",
        "situacao": "ok",
        "texto": "Mauna Kea (, Hawaiian: [ˈmɐwnə ˈkɛjə]; abbreviation for Mauna a Wākea, 'White Mountain') is a dormant shield volcano on the island of Hawaiʻi. Its peak is 13,803 feet (4,207.3 meters) above sea level, making it the highest point in Hawaii and the island with the second highest high point, behind New Guinea. The peak is about 125 ft (38 m) higher than Mauna Loa, its more massive neighbor.\n[…]\nThe Saddle Road, named for its crossing of the saddle-shaped plateau between Mauna Kea and Mauna Loa, was completed in 1943, and eased travel to Mauna Kea considerably.\n[…]\nIn February 2021, Victor Vescovo and Clifford Kapono made the first ascent of Mauna Kea from its subaerial base 16,785 ft below sea level using the submersible Limiting Factor, then ocean kayaks from above the mountain base 27 miles to the shoreline, then bicycles to a camp at about 9000 ft altitude from which they then walked to the 13,802 ft summit (a total gain of 30,587 ft).\n[…]\nThere are over 3,000 registered hunters on Hawaii island, and hunting, for both recreation and sustenance, is a common activity on Mauna Kea. A public hunting program is used to control the numbers of introduced animals including pigs, sheep, goats, turkey, pheasants, and quail. The Mauna Kea State Recreation Area functions as a base camp for the sport. Birdwatching is also common at lower levels on the mountain.\n[…]\nThese travelers used stone cabins constructed by the Civilian Conservation Corps in the 1930s as base camps, and it is from these facilities that the modern mid-level Onizuka Center for International Astronomy telescope support complex is derived. The first Mauna Kea summit road was built in 1964, making the peak accessible to more people.\n[…]\nMauna Kea Observatories. Tour of Mauna Kea's summit facilities.\n[…]\nOffice of Mauna Kea Management. Plan for land management.\n[…]\nMauna Kea Ice Age Reserve. Department of Land and Natural Resources."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mauna_Kea",
        "situacao": "ok",
        "texto": "Mauna Kea, na Ilha do Havai, arquipélago do Havai, é um vulcão em escudo extinto. É o ponto mais elevado do arquipélago e um dos mais proeminentes do mundo e também uma das montanhas de maior isolamento topográfico. No entanto, o Mauna Kea é a montanha mais alta do mundo se levarmos em consideração a medição desde a base até ao pico - tem 10 105 metros a partir do fundo do oceano Pacífico (5898 me\n[…]\nMauna Kea significa \"Montanha Branca\" no idioma havaiano, uma referência ao seu cume sendo regularmente coberto pela neve no inverno. Encontra-se extinto. A última erupção teria ocorrido há cerca de 4500 anos. No seu topo encontra-se um observatório astronómico, o Observatório W. M. Keck.\n[…]\nA altitude do Mauna Kea afeta o clima e é responsável pela queda de neve vários dias por ano. O monte apresenta vestígios de antigas glaciações. As vertentes norte e sul apresentam grande diferença pluviométrica. No cume, um outro cone forma no interior o lago Waiʻau, o mais alto de toda a bacia do Pacífico, a 3968 m de altitude. A fauna e a flora são repartidas em três níveis concêntricos distintos, dos quais o mais elevado é do tipo alpino.\n[…]\nOs recursos naturais do Mauna Kea foram explorados pelos autóctones a partir dos séculos XII e XIII. Um tipo de basalto muito duro, em particular, foi extraído para o fabrico de machadinhas. A madeira e as aves cinegéticas eram também recursos importantes. O cume da montanha, associado a divindades da mitologia havaiana, é sagrado e o acesso é restrito. Estas crenças são sempre evocadas em canções tradicionais.\n[…]\n«USGS - página sobre o Mauna Kea» (em inglês)\n[…]\n«\"A Gentle Rain of Starlight: The Story of Astronomy on Mauna Kea\" - Fotos do Mauna Kea por Michael J. West. ISBN 0-931548-99-3» (em inglês) .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Oito mil",
      "descricao": "Grupo das montanhas com mais de oito mil metros de altitude, todas no Himalaia e no Caracórum."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantas montanhas do planeta ultrapassam os oito mil metros de altitude?",
    "resposta": "Catorze",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eight-thousander"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eight-thousander",
        "situacao": "ok",
        "texto": "The eight-thousanders are 14 mountains recognised by the International Mountaineering and Climbing Federation (UIAA) with summits that exceed 8,000 metres (26,247 ft) in elevation above sea level and are sufficiently independent of neighbouring peaks as measured by topographic prominence.\n[…]\nAll of the Earth's eight-thousanders are located in the Himalayan and Karakoram mountain ranges in Asia, and their summits lie in the altitude range known as the death zone, where atmospheric oxygen pressure is insufficient to sustain human life for extended periods of time.\n[…]\nThe eight-thousanders are some of the world's deadliest mountains. The extreme altitude and the fact that the summits of all eight-thousanders lie in the Death Zone mean that climber mortality (or death rate) is high. Two metrics are quoted to establish a death rate (i.e. broad and narrow) that are used to rank the eight-thousanders in order of deadliest.\n[…]\nThe \"No O2\" column lists people who have climbed all 14 eight-thousanders without supplementary oxygen.\n[…]\nThe Eberhard Jurgalski List is also another important source for independent verification of claims to have summited all 14 eight-thousanders.\n[…]\nA recurrent problem with verification is the confirmation that the climber reached the true peak of the eight-thousander. Eight-thousanders present unique problems in this regard as they are so infrequently summited, their summits have not yet been exhaustively surveyed, and summiting climbers are often suffering the extreme altitude and weather effects of being in the death zone.\n[…]\nNote: This gallery is arranged in order of height, from tallest to shortest, of the eight-thousanders.\n[…]\nList of deaths on eight-thousanders\n[…]\nList of ski descents of eight-thousanders\n[…]\nNASA Earth Observatory: The Eight-Thousanders"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montanhas_com_mais_de_oito_mil_metros_de_altitude",
        "situacao": "ok",
        "texto": "Existem 14 montanhas com mais de 8 000 metros de altitude acima do nível do mar de acordo com a União Internacional das Associações de Alpinismo. Estão todas localizadas nas cordilheiras do Himalaia e Caracórum, na Ásia.\n[…]\nConsidera-se na lista que os 8 000 são os catorze picos ditos independentes e os oito-mileiros as pessoas que já subiram a todos os catorze. Na lista das mais altas montanhas é necessário usar um critério para excluir subcumes e incluir apenas montanhas independentes, critério esse que não é único nem universal. Todavia, a lista mais geralmente considerada é a que usa o critério de um limiar para a proeminência topográfica de 200 a 500 metros (610 a 1 524 pés).\n[…]\nA primeira pessoa a escalar todos as catorze montanhas com mais de 8 000 m foi o italiano Reinhold Messner. Ele completou essa façanha em 16 de outubro de 1986, sem nunca ter utilizado oxigênio suplementar. Um ano mais tarde, em 1987, Jerzy Kukuczka (da Polónia) foi o segundo homem a realizar a façanha e até 2009, um total de dezoito pessoas fizeram o mesmo, sendo que 10 deles o fizeram sem recurso a oxigénio suplementar.\n[…]\nA primeira mulher que completou a escalada dos catorze oito mil foi a espanhola Edurne Pasaban, enquanto a primeira a concluir essa façanha sem utilizar oxigênio engarrafado foi a austríaca Gerlinde Kaltenbrunner. Até hoje resultam ser as únicas duas mulheres que conseguiram com sucesso essa façanha. Várias pessoas morreram pouco antes de completarem a totalidade dos cumes.\n[…]\nLista das montanhas mais altas\n[…]\nMontanhismo\n[…]\n«Portal de referência sobre as expedições a montanhas de 8 mil metros» (em inglês)\n[…]\n«Estatísticas de ascensões a montanhas com mais de 8 mil metros e afins» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cordilheira dos Andes",
      "descricao": "Cadeia de montanhas que percorre todo o oeste da América do Sul, da Venezuela à Patagônia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantos países são atravessados pela Cordilheira dos Andes?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Seis",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Andes",
      "https://pt.wikipedia.org/wiki/Cordilheira_dos_Andes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andes",
        "situacao": "ok",
        "texto": "The Andes ( AN-deez), Andes Mountains or Andean Mountain Range (Spanish: Cordillera de los Andes; Quechua: Anti) are the longest continental mountain range in the world, forming a continuous highland along the western edge of South America. The range is 8,900 kilometres (5,500 mi) long and 200 to 700 kilometres (120 to 430 mi) wide (widest between 18°S and 20°S latitude) and has an average height \n[…]\nThe Andes are also part of the American Cordillera, a chain of mountain ranges (cordillera) that consists of an almost continuous sequence of mountain ranges that form the western \"backbone\" of the Americas and Antarctica.\n[…]\nThe term cordillera comes from the Spanish word cordel \"rope\" and is used as a descriptive name for several contiguous sections of the Andes, as well as the entire Andean range, and the combined mountain chain along the western part of the North and South American continents.\n[…]\nThe Andes mountain range, the longest continental mountain system in the world, extends approximately 7,000 km (4,300 mi) along the western edge of South America, spanning seven countries. Its width varies from 200 km (120 mi) to 700 km (430 mi), encompassing a series of parallel cordilleras, high plateaus, and deep intermontane valleys.\n[…]\nThis list contains some of the major peaks in the Andes mountain range. The highest peak is Aconcagua of Argentina.\n[…]\nMountain passes of the Andes\n[…]\nBiggar, John (2005). The Andes: A Guide for Climbers (3 ed.). Scotland: Andes Publishing. ISBN 978-0-9536087-2-0.\n[…]\nDarack, Ed (2001). Wild Winds: Adventures in the Highest Andes. Cordee / DPP. ISBN 978-1-884980-81-7.\n[…]\n\"Andes\" . Encyclopædia Britannica. Vol. II (9th ed.). 1878. p. 15–18.\n[…]\nUniversity of Arizona: Andes geology\n[…]\nBlueplanetbiomes.org: Climate and animal life of the Andes Archived 14 December 2007 at the Wayback Machine\n[…]\nDiscover-peru.org: Regions and Microclimates in the Andes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cordilheira_dos_Andes",
        "situacao": "ok",
        "texto": "Andes (em quíchua: Anti(s)) é uma vasta cadeia montanhosa formada por um sistema contínuo de montanhas ao longo da costa ocidental da América do Sul, tendo a sua formação geológica datada no período Terciário. A cordilheira possui aproximadamente oito mil quilômetros de extensão. É a maior cadeia de montanhas do mundo (em comprimento), e em seus trechos mais largos chega a 160 km do extremo leste \n[…]\nA cordilheira dos Andes se estende desde a Patagônia até a costa do mar do Caribe, atravessando todo o continente sul-americano de sul a norte, caracterizando a paisagem montanhosa do Argentina, Chile, Bolívia, Peru, Equador, Colômbia e oeste da Venezuela também conhecidos como América Andina.\n[…]\nA região de Mendoza, na Argentina é o destino escolhido por muitas pessoas que procuram por neve. Um dos marcos da viagem é atravessar uma estrada que cruza por regiões semidesérticas, até chegar ao Parque Nacional do Aconcágua, que fica no lado argentino da Cordilheira dos Andes, e visualizar o monte Aconcágua. Ao longo de todo o ano o visitante pode visualizar as neves eternas no topo das montanhas. Durante as nevascas mais intensas do inverno, alguns pontos da estrada ficam intransitáveis.\n[…]\nJá no extremo sul da cordilheira, setor onde os Andes cruzam a Patagônia, encontram se áreas com abundante presença de geleiras, picos nevados, tundras, lagos glaciais e fiordes. Como exemplos de áreas de interesse turístico nesta porção da cordilheira, é possível destacar Torres del Paine, no Chile, El Calafate e Ushuaia na Argentina, locais onde o cenário natural atraem milhares de turistas anualmente.\n[…]\nO norte do Chile e da Argentina compartilham os picos mais altos dos Andes, seguidos pela Cordilheira Branca, localizada no Peru, a Cordilheira Real da Bolívia e os Andes Equatorianos.\n[…]\n«Página com informações sobre montanhas dos Andes»\n[…]\n«Página com alguns roteiros de viagem nos Andes»"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pão de Açúcar",
      "descricao": "Morro de granito na entrada da Baía de Guanabara, no Rio de Janeiro, ligado ao Morro da Urca por um teleférico."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano foi inaugurado o primeiro trecho do bondinho do Pão de Açúcar?",
    "resposta": "1912",
    "distratores": [
      "1908",
      "1922",
      "1935"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Bondinho_do_P%C3%A3o_de_A%C3%A7%C3%BAcar",
      "https://en.wikipedia.org/wiki/Sugarloaf_Mountain"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Bondinho_do_P%C3%A3o_de_A%C3%A7%C3%BAcar",
        "situacao": "ok",
        "texto": "Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca, no município brasileiro do Rio de Janeiro. Liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar.\n[…]\nÉ uma das principais atrações turísticas da cidade. Foi inaugurado (o seu primeiro trecho, entre a Praia Vermelha e o Morro da Urca) em 27 de outubro de 1912 e, desde então, já transportou cerca de 37 milhões de pessoas, mantendo uma média atual de 2 500 visitantes por dia.\n[…]\nO seu nome vem da semelhança dos carros do teleférico com os bondes que circulavam no Rio de Janeiro à época de sua inauguração. O Bondinho é privatizado, administrado pela concessionária Companhia Caminho Aéreo Pão de Açúcar, empresa criada pelo idealizador do projeto, o engenheiro Augusto Ferreira Ramos, desde a sua construção.\n[…]\nÀ inauguração do bondinho, em 27 de outubro de 1912, o teleférico só subia da Praia Vermelha até o morro da Urca. Três meses depois, em 18 de janeiro de 1913, já ia até o alto do Pão de Açúcar.\n[…]\nO bondinho funciona das 8 às 20 horas ao longo de duas rotas: uma ligando a base do morro da Babilônia ao morro da Urca e outra ligando o morro da Urca ao pico do Pão de Açúcar.\n[…]\nA primeira linha (estação inicial - morro da Urca) possui extensão de 600 metros e a velocidade máxima durante a viagem é de 6 metros por segundo (21,6 quilômetros por hora). A segunda linha (morro da Urca - Pão de Açúcar) possui extensão de 850 metros e a velocidade máxima durante a viagem é de 10 metros por segundo (36 km/h)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sugarloaf_Mountain",
        "situacao": "ok",
        "texto": "Sugarloaf Mountain (Portuguese: Pão de Açúcar, pronounced [ˈpɐ̃w d(ʒi) aˈsukaʁ]) is a peak situated in Rio de Janeiro, Brazil, on a peninsula at the mouth of Guanabara Bay. Rising 396 m (1,299 ft) above the harbor, the peak is named for its resemblance to the traditional shape of concentrated refined sugarloaf. It is known worldwide for its  cable car and panoramic views of the city and beyond.\n[…]\nThe mountain is protected by the Sugarloaf Mountain and Urca Hill Natural Monument, created in 2006.\n[…]\nA glass-walled cable car (bondinho or, more formally, teleférico), capable of holding 65 people, runs along a 1,400 m (4,600 ft) route between the peaks of Sugarloaf and Morro da Urca every 20 minutes. The original cable car line was built in 1912, rebuilt around 1972–73, and rebuilt again in 2008. The cable car goes from a ground station, at the base of Morro da Babilônia, to Morro da Urca and thence to Sugarloaf's summit.\n[…]\nTo reach the summit, passengers take two cable cars. The first ascends to the shorter Morro da Urca, 220 m (722 ft) high. The second car ascends to Pão de Açúcar. The Swiss-made bubble-shaped cars offer passengers 360° views of the surrounding city. The ascent takes three minutes.\n[…]\n1912 – Opening of the cableway, the first in Brazil and the third of this kind worldwide; the first cable cars were made of coated wood and were used for 61 years.\n[…]\nThere are rock climbing routes on Sugarloaf that are mostly multipitch and are a mixture of sport and trad. There are also two other mountains in the area with technical rock climbing, Morro da Babilônia and Morro da Urca. Together, they form one of the largest urban climbing areas in the world, with more than 270 routes, between 1 and 10 pitches long.\n[…]\nMedia related to Sugarloaf Mountain at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Paricutín",
      "descricao": "Vulcão no estado de Michoacán, no México, que surgiu em 1943 num campo de milho."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1943, um vulcão nasceu de repente no milharal de um agricultor e cresceu centenas de metros. Em que país?",
    "resposta": "México",
    "distratores": [
      "Guatemala",
      "Chile",
      "Peru"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Par%C3%ADcutin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Par%C3%ADcutin",
        "situacao": "ok",
        "texto": "Parícutin (or Volcán de Parícutin, also accented Paricutín) is a cinder cone volcano located in the Mexican state of Michoacán, near the city of Uruapan and about 322 kilometers (200 mi) west of Mexico City. The volcano surged suddenly from the cornfield of local farmer Dionisio Pulido in 1943, attracting both popular and scientific attention.\n[…]\nParícutin is located in the Mexican municipality of Nuevo Parangaricutiro, Michoacán, 29 kilometers (18 mi) west of the city of Uruapan and about 322 km west of Mexico City. It lies on the northern flank of Pico de Tancítaro, which itself lies on top of an old shield volcano and extends 3,170 meters (10,400 ft) above sea level and 424 meters (1,391 ft) above the Valley of Quitzocho-Cuiyusuru.\n[…]\nIt has also created fertile soils by the widespread deposition of ash and thereby some of Mexico's most productive farmland. The volcanic activity here is a result of the subduction of the Rivera and Cocos plates along the Middle America Trench.\n[…]\nMore specifically, the volcano is the youngest of the approximately 1,400 volcanic vents of the Michoacán-Guanajuato volcanic field, a 40,000 square kilometers (15,000 mi2) basalt plateau filled with scoria cones like Parícutin, along with small shield volcanoes, maars, tuff rings and lava domes. Scoria cones are the most common type of volcano in Mexico, appearing suddenly and building a cone-shaped mountain with steep slopes before becoming extinct.\n[…]\nThe economy of the area was then and is now mostly agricultural, with a mostly Purépecha population, rural and poor. However, the eruption did cause a number of changes both social and economic to the affected areas, both to adapt to the changed landscape but also because the fame of the eruption has brought greater contact from the rest of Mexico and beyond.\n[…]\nList of volcanoes in Mexico"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paricut%C3%ADn",
        "situacao": "ok",
        "texto": "O Paricutín é um vulcão muito recente situado no estado de Michoacán, no México (19°29'35.70\"N, 102°15'3.93\"O), entre as povoações de San Juan Parangaricutiro (El Nuevo) e Angahuan. Está incluído em algumas listas das sete maravilhas naturais do mundo. A cidade mais próxima deste vulcão é Uruapan.\n[…]\nA maior parte do desenvolvimento deste vulcão ocorreu durante o seu primeiro ano de existência (1943), enquanto se encontrava na sua fase piroclástica explosiva. Durante diversas semanas desse ano, um grande número de ruídos estranhos foram ouvidos pelos habitantes em torno da pequena aldeia de Paricutín, apesar das condições meteorológicas serem normais.\n[…]\nA atividade do vulcão declinaria lentamente durante este período até os últimos seis meses da erupção, durante a qual a atividade violenta e explosiva foi frequente. Em 1952, a erupção terminou, e o Paricutín parou de crescer, alcançando uma altura final de 424 metros acima do terreno em que \"nasceu\" (elevação 3170 metros acima do nível do mar, uma vez que se situa em um platô vulcânico elevado).\n[…]\nComo a maioria dos cones de cinza, o Paricutín é um vulcão monogenético, o que significa que nunca voltará a ocorrer sua erupção.\n[…]\nO vulcanismo é um aspecto comum na paisagem mexicana. O Paricutín é meramente o mais novo dos mais de 1.400 respiradouros vulcânicos que existem na cadeia vulcânica Trans-Mexicana, que se estende pela região que inclui Michoacán e Guanajuato. Este vulcão é original pelo fato de que sua formação foi testemunhada desde o início. Surpreendentemente, nenhuma morte foi causada pela erupção, embora três pessoas tenham morrido em conseqüência dos relâmpagos associados a ela.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Círculo de Fogo do Pacífico",
      "descricao": "Faixa de intensa atividade vulcânica e sísmica que contorna as bordas de um oceano."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O chamado Círculo de Fogo, faixa com a maioria dos vulcões ativos da Terra, contorna qual oceano?",
    "resposta": "Oceano Pacífico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ring_of_Fire",
      "https://pt.wikipedia.org/wiki/C%C3%ADrculo_de_Fogo_do_Pac%C3%ADfico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ring_of_Fire",
        "situacao": "ok",
        "texto": "The Ring of Fire (also known as the Pacific Ring of Fire, the Rim of Fire, the Girdle of Fire or the Circum-Pacific belt) is a tectonic belt of earthquakes and volcanoes.\n[…]\nThere are gaps in the Ring of Fire at some parts of the Pacific coast of the Americas. In some places, the gaps are thought to be caused by flat slab subduction; examples are the three gaps between the four sections of the Andean Volcanic Belt in South America.\n[…]\nThe Northern Cordilleran Volcanic Province is an area of numerous volcanoes, which are caused by continental rifting,not subduction; therefore geologists often regard it as a gap in the Pacific Ring of Fire between the Cascade Volcanic Arc further south and Alaska's Aleutian Arc further north.\n[…]\nIndonesia is located where the Ring of Fire around the Pacific Ocean meets the Alpide belt (which runs from Southeast Asia to Southwest Europe).\n[…]\nThe eastern islands of Indonesia (Sulawesi, the Lesser Sunda Islands (excluding Bali, Lombok, Sumbawa and Sangeang), Halmahera, the Banda Islands and the Sangihe Islands) are geologically associated with subduction of the Pacific plate or its related minor plates and, therefore, the eastern islands are often regarded as part of the Ring of Fire.\n[…]\nThe soils of the Pacific Ring of Fire include andosols, also known as andisols; they have formed by the weathering of volcanic ash. Andosols contain large proportions of volcanic glass. The Ring of Fire is the world's main location for this soil type, which typically has good levels of fertility.\n[…]\nGeology of the Pacific Northwest\n[…]\nPacific Rim – Land area comprising the rim of the Pacific Ocean"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%ADrculo_de_Fogo_do_Pac%C3%ADfico",
        "situacao": "ok",
        "texto": "Círculo de fogo do Pacífico, ou Anel de fogo do Pacífico (ou às vezes apenas Anel de Fogo), é uma área onde há um grande número de terremotos e uma forte atividade vulcânica localizado no Norte do Oceano Pacífico. O Anel de Fogo do Pacífico tem a forma de ferradura, com cerca de 40.000 km de extensão e está associado a uma série quase contínua de trincheiras oceânicas, arcos vulcânicos, couraças v\n[…]\nO Círculo de Fogo do Pacífico foi formado ao longo de milhões de anos devido ao movimento das placas tectônicas. Ele é resultado da subducção, um processo geológico em que placas oceânicas mais densas mergulham sob placas continentais ou oceânicas menos densas. Esse movimento cria zonas de intensa atividade sísmica e vulcânica, como fossas oceânicas e cadeias de montanhas.\n[…]\nPor exemplo, a Fossa das Marianas, o ponto mais profundo dos oceanos, está localizada no Círculo de Fogo e foi formada pela subducção da Placa do Pacífico sob a Placa das Filipinas.\n[…]\nA região também é marcada pela presença de arco-ilhas, como o arquipélago do Japão e as Filipinas, que se formam quando o magma sobe à superfície devido à subducção. Esses arcos são frequentemente associados a vulcões ativos e terremotos.\n[…]\nO Círculo de Fogo abriga mais de 450 vulcões ativos, incluindo alguns dos mais famosos do mundo. O Monte Fuji, no Japão, é um símbolo cultural e geológico, enquanto o Monte Santa Helena, nos Estados Unidos, é conhecido por sua catastrófica erupção em 1980.\n[…]\nPaíses e regiões próximos ou inseridos no Círculo de Fogo:\n[…]\nCinturão vulcânico dos Andes\n[…]\nCírculo do Pacífico"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Monte Kilimanjaro",
      "descricao": "Montanha isolada no nordeste da Tanzânia, o ponto mais alto da África."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Kilimanjaro, ponto mais alto da África, não pertence a nenhuma cordilheira. Que tipo de montanha ele é?",
    "resposta": "Um vulcão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Kilimanjaro",
      "https://pt.wikipedia.org/wiki/Monte_Kilimanjaro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Kilimanjaro",
        "situacao": "ok",
        "texto": "Mount Kilimanjaro () is a large dormant stratovolcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m (19,341 ft) above sea level and 4,900 m (16,100 ft) above its plateau base. It is also the highest volcano in the Eastern Hemisphere and the fourth most prominent peak on Earth.\n[…]\nOne of several mountains arising from the East African Rift, Kilimanjaro was formed from volcanic activity over two million years ago. Its slopes host montane forests and cloud forests. Multiple species are endemic to Mount Kilimanjaro, including the giant groundsel Dendrosenecio kilimanjari. The mountain possesses a large ice cap and the largest glaciers in Africa, including Credner Glacier, Furtwängler Glacier, and the Rebmann Glacier.\n[…]\nIn respect of it being 'the highest stratovolcano of the East African Rift that maintains a glacier on its summit', the International Union of Geological Sciences (IUGS) included 'The Pleistocene Kilimanjaro volcano' in its assemblage of 100 'geological heritage sites' around the world in a listing published in October 2022.\n[…]\nSeveral climbs by disabled people have drawn attention. Wheelchair user Bernard Goosen from South Africa scaled Kilimanjaro in 6 days in 2007. In 2012, Kyle Maynard who has no forearms or lower legs, crawled unassisted to the summit of Mount Kilimanjaro. In 2020, a team featuring two double above-knee amputees, Hari Budha Magar and Justin Oliver Davis, summited Kilimanjaro. It took them 6 days to cover the 56 km (35 mi) distance to the summit.\n[…]\nKilimanjaro was featured in Toto's 1982 song \"Africa\". An IMAX film documenting an ascent—Kilimanjaro: To The Roof Of Africa—was released in 2002. Kilimanjaro is also prominently featured in the Lion King franchise.\n[…]\nAerial photographs of Mount Kilimanjaro, 1937–38"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Kilimanjaro",
        "situacao": "ok",
        "texto": "O Quilimanjaro ou Kilimanjaro (Oldoinyo Oibor, que significa montanha branca em massai, ou Kilima Njaro, montanha brilhante em suaíli) é um monte localizado no norte da Tanzânia, junto à fronteira com o Quénia. O Quilimanjaro é o ponto mais alto da África, com uma altura de 5 895 m no Pico Uhuru. É a montanha mais alta da África e a montanha independente mais alta do mundo acima do nível do mar (5\n[…]\nNascimento do paleo-vulcão de Kilema\n[…]\nNo total, o volume emitido por este paleo-vulcão poderia representar quase dois terços do volume atual.\n[…]\nDesde o início do Quaternário, o hemisfério norte sofreu vinte e uma eras glaciares maiores, sentidas até na África Oriental. Os vestígios destes arrefecimentos climáticos na África Oriental são observados no Kilimanjaro, no monte Quénia, na cordilheira do Rwenzori e no monte Elgon. São todas bolsas isoladas de ecossistemas alpinos semelhantes, com uma fauna e uma flora idênticas. Isto significa que este ecossistema deve ter sido mais extenso, a baixa altitude, e cobrir cada uma destas montanhas.\n[…]\nSão necessários entre seis e dez dias para alcançar o cume e regressar. Os trilhos para o topo do Quilimanjaro utilizam, na sua maioria, a vertente meridional do vulcão; alguns são muito frequentados. Os itinerários na vertente setentrional estão reservados a alpinistas experientes. Existem sete pontos de partida (gate) em redor da montanha e várias variantes:\n[…]\nNo cinema, em 1952, o filme As Neves do Kilimanjaro adaptou o conto homónimo de Hemingway. Mino Guerrini realizou em 1986 Le miniere del Kilimangiaro, um filme italiano que conta a história de um estudante americano à procura de diamantes perto da montanha em 1930, tendo de enfrentar nazis, gângsteres chineses e tribos locais. Noutro âmbito, o vulcão também aparece no filme de animação O Rei Leão 2: O Reino de Simba.\n[…]\nCitação: Dentro de uma década, não haverá mais neves no Kilimanjaro."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.42 — 2026-10-02**
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
