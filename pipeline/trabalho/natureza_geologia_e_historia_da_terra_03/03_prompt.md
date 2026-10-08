Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Geologia e História da Terra** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Mauna Kea",
      "descricao": "Vulcão adormecido da ilha do Havaí, cujo cume abriga grandes observatórios astronômicos."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Medido da base, no fundo do mar, até o topo, qual vulcão havaiano é considerado a montanha mais alta do mundo?",
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
    "indice": 2,
    "ancora": {
      "nome": "Ojos del Salado",
      "descricao": "Vulcão dos Andes na fronteira entre Argentina e Chile, com cerca de 6 900 metros de altitude."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na fronteira entre o Chile e a Argentina, qual é o vulcão mais alto do planeta, com quase sete mil metros?",
    "resposta": "Ojos del Salado",
    "distratores": [
      "Llullaillaco",
      "Aconcágua",
      "Licancabur"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ojos_del_Salado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ojos_del_Salado",
        "situacao": "ok",
        "texto": "Nevado Ojos del Salado (Spanish pronunciation: [ˈoxos ðel saˈlaðo] ) is a dormant complex volcano in the Andes on the Argentina–Chile border. It is the highest volcano on Earth and the highest peak in Chile. The upper reaches of Ojos del Salado consist of several overlapping lava domes, lava flows and volcanic craters, with sparse ice cover.\n[…]\nThe CVZ spans Peru, Bolivia, Chile and Argentina and contains about 1,100 recognized volcanoes, many of which are extremely old but are still recognizable owing to the low erosion rates in the region. Apart from stratovolcanoes, the CVZ includes numerous calderas, isolated lava domes and lava flows, maars and pyroclastic cones. Most of the volcanoes are remote and thus constitute a low hazard. Ojos del Salado is part of the CVZ and constitutes its southern boundary.\n[…]\nIn 1896, 1897 and 1903 the Chile–Argentina boundary commission identified a peak in the area and named it \"Ojos del Salado\"; according to a myth their \"Ojos del Salado\" was a much smaller mountain and the actual Ojos del Salado was their \"Peak 'e'\". The Polish climbers Justyn Wojsznis and Jan Szczepański from the Second Polish Andean Expedition reached the summit on February 26, 1937 and left a cairn, but most of the maps and report they drafted were lost during World War II.\n[…]\nThe Chilean party also claimed seeing the Argentine pampa to the east and the Pacific Ocean to the west from the summit. In 1957, the official elevation of Ojos del Salado was 6,870 metres (22,540 ft) according to Argentina and 6,880 metres (22,570 ft) according to Chile.\n[…]\nWest of the volcano lies the Nevado Tres Cruces National Park, and in 1991/1994 there were plans to make a national park on the Argentine side as well. As of 2020, the establishment of a \"zone of touristic interest\" encompassing Ojos del Salado was under discussion in Chile."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ojos_del_Salado",
        "situacao": "ok",
        "texto": "O Ojos del Salado é um estratovulcão com 6 893 metros de altitude, considerado o mais alto vulcão do mundo. É também a segunda mais alta montanha da América, do Hemisfério Ocidental, do Hemisfério Sul, e a mais alta do Chile. Este vulcão está localizado numa região bastante selvagem e muito pouco explorada da fronteira Argentina-Chile, a 600 km a norte do Aconcágua, ponto mais alto dos Andes, numa\n[…]\nA cidade mais próxima do Ojos del Salado é Copiapó, está a 280km da base do Vulcão, é conhecida como a ante-sala do deserto de Atacama. É nesta cidade que deve ser solicitada a autorização para escalada e feitas as últimas compras, depois não existe mais nenhum apoio.\n[…]\nPara a escalada do Ojos del Salado é necessário uma permissão que é emitida pela internet através do site da DIFROL, órgão governamental chilena que cuida dos limites e fronteiras daquele país.\n[…]\nO Ojos del Salado localiza-se no limite sul da Puna do Atacama, ficando na província de Catamarca na Argentina, a oeste da cidade de Fiambalá e na província de Copiapó no Chile, a leste da cidade de Copiapó.\n[…]\nApesar de ser uma região remota, com acesso a vários locais apenas por estradas de terra e caminhos para veículos 4x4, há uma estrada internacional atravessando o Passo de São Francisco (Rota 31 Chile e Rota 60 na Argentina) que fica a 20km aproximadamente a norte do Ojos del Salado, facilitando o acesso. O Ojos del Salado não forma um único cone no pico, sendo um maciço complexo formado por vários vulcões menores superpostos.\n[…]\nNevado Incahuasi\n[…]\nTracklog para GPS do Ojos del Salado (em português).\n[…]\n«Ojos del Salado no summitpost.org»\n[…]\n«Programa Global de Vulcões sobre o Ojos del Salado»  Inglês\n[…]\nRelato de uma escalada no Ojos del Salado\n[…]\nPeakery Ojos del Salado Inglês\n[…]\nSummit Post Ojos del Salado Inglês\n[…]\nPeak Visor Ojos del Salado. Vista 3d do cume.\n[…]\nCentro Cultural Argentino de Montanha. Completo artigo sobre o Ojos del Salado Espanhol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Chimborazo",
      "descricao": "Vulcão extinto coberto de gelo nos Andes do Equador, o pico mais alto do país."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Por causa do achatamento da Terra nos polos, qual montanha equatoriana tem o cume mais distante do centro do planeta?",
    "resposta": "Chimborazo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chimborazo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chimborazo",
        "situacao": "ok",
        "texto": "Chimborazo (Spanish: [tʃimboˈɾaso] ) is a stratovolcano in Ecuador and the Cordillera Occidental range of the Andes. Its last known eruption is believed to have occurred around AD 550.\n[…]\nAs a result of the oblate spheroid shape of the planet Earth, which is thicker at the Equator than it is from pole to pole, the summit of Chimborazo is the fixed point on Earth that has the utmost distance from the center. Chimborazo is one degree south of the Equator and the Earth's diameter at the Equator is greater than at the latitude of Everest (8,848 m (29,029 ft) above sea level), nearly 28° north, with sea level also elevated.\n[…]\nCentrifugal force from the Earth's rotation, and distance from the center of the Earth, cause the force of gravity to be slightly reduced near the equator. The summit of Chimborazo has about one percent less gravity than the point with the highest gravitational force. Yet, due to its height above the surrounding terrain and local gravity anomalies, the summit of Huascarán is the place on Earth with the smallest gravitational force.\n[…]\nDavid Weber's novel The Armageddon Inheritance mentions Mount Chimborazo as the site for a massive planetary defense installation.\n[…]\nAmerican Dad! season 21, episode four is centered around the family's trip to Ecuador to climb Mount Chimborazo after Stan cannot afford to take them to Mount Everest. Chimborazo's summit height due to the equatorial bulge is mentioned frequently throughout the episode.\n[…]\n\"Volcán Chimborazo, Ecuador\". Peakbagger.com. Retrieved 2012-11-06.\n[…]\n\"Climbing information for Chimborazo\". Summitpost.org. Retrieved 2011-10-25.\n[…]\n\"The last iceman of Chimborazo\". Retrieved 2011-10-25."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chimbora%C3%A7o",
        "situacao": "ok",
        "texto": "Chimboraço (em espanhol: Chimborazo) é um estratovulcão do Equador. É a mais alta montanha do país e do mundo, se medida desde o topo até ao centro da Terra. Está situado na província de Chimboraço, culminando a 6263 m de altitude e situa-se perto de Riobamba, a cerca de 180 km ao sul de Quito. É o pico mais alto dos Andes equatoriais, dominando uma região de 50 mil km² e apresentando uma base de \n[…]\nAté o início do século XIX, Chimboraço era considerado a mais alta montanha da Terra (a partir do nível do mar), e tal reputação levou a diversas tentativas de escalada. Em 1802, o naturalista alemão Alexander von Humboldt tentou escalá-lo, acompanhado por Aimé Bonpland e pelo equatoriano Carlos Montúfar, mas teve que abandonar a empreitada a 5875 m por causa da rarefação do ar. A essa altura, eles alcançaram a maior altitude confirmada jamais atingida por um ser humano.\n[…]\nAssim, é ao britânico Edward Whymper e aos irmãos Louis e Jean-Antoine Carrel que cabe a honra, em 1880, de serem os primeiros a atingir o cume do Chimboraço. Diversas pessoas duvidaram de tal feito, e Whymper escalou o vulcão mais uma vez no mesmo ano em companhia dos equatorianos David Beltrán e Francisco Campaña.\n[…]\nO cume do Chimboraço é o ponto da superfície terrestre mais afastado do centro da Terra, sendo o mais alto quando medido pela distância do centro do planeta em relação a seu topo (em vez do nível do mar), e não o cume do monte Everest, devido ao fato de o planeta ser ligeiramente mais achatado em direção aos polos do que na linha do Equador, o que faz com que o diâmetro no equador seja 43 km maior do que o diâmetro de polo a polo. O nosso planeta tem o formato de esfera achatada.\n[…]\nO Chimboraço dista 6384,4 km do centro da Terra e o Everest 6382,6 km, o que resulta numa diferença de 1,8 km.\n[…]\nChimborazo, tour 2003\n[…]\nChimborazo, Nov 2004\n[…]\nChimborazo: Etymology\n[…]\nChimborazo Volcano Data (Global Volcanism Program)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Placa do Pacífico",
      "descricao": "Placa tectônica oceânica sob a maior parte do oceano Pacífico."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é a maior placa tectônica da Terra, quase toda coberta por oceano?",
    "resposta": "Placa do Pacífico",
    "distratores": [
      "Placa Africana",
      "Placa Antártica",
      "Placa Norte-Americana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pacific_Plate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pacific_Plate",
        "situacao": "ok",
        "texto": "The Pacific plate is an oceanic tectonic plate that lies beneath the Pacific Ocean. At 103 million km2 (40 million sq mi), it is the largest tectonic plate.\n[…]\nThe Pacific plate contains an interior hot spot forming the Hawaiian Islands.\n[…]\nThe Pacific plate is almost entirely oceanic crust, but it contains some continental crust in New Zealand, Baja California, and coastal California.\n[…]\nThe Pacific plate has the distinction of showing one of the largest areal sections of the oldest members of seabed geology being entrenched into eastern Asian oceanic trenches. A geological map of the Pacific Ocean seabed shows not only the geologic sequences, and associated Ring of Fire zones on the ocean's perimeters, but the various ages of the seafloor in a stairstep fashion, youngest to oldest, the oldest being consumed into the Asian oceanic trenches.\n[…]\nThe Pacific plate originated at the triple junction of the three main oceanic plates of Panthalassa, the Farallon, Phoenix, and Izanagi plates, around 190 million years ago. The plate formed because the triple junction had converted to an unstable form surrounded on all sides by transform faults, due to the development of a kink in one of the plate boundaries.\n[…]\nThe \"Pacific Triangle\", the oldest part of the Pacific plate, created during the initial stages of plate formation, is located just east of the Mariana Trench. The growth of the Pacific plate reduced the Farallon plate to a few remnants along the west coast of the Americas (such as the Juan de Fuca plate) and the Phoenix plate to a small remnant near the Drake Passage, and destroyed the Izanagi plate by subduction under Asia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Placa_do_Pac%C3%ADfico",
        "situacao": "ok",
        "texto": "Placa do Pacífico é uma placa tectónica oceânica e abrange a maior parte do oceano Pacífico. Com 103 milhões de quilômetros quadrados de área, é a maior placa da Terra.\n[…]\nAo norte faz divisas com a placa do Explorador, a placa Juan de Fuca e a placa de Gorda. Estes conflitos geram fissuras na litosfera. Também faz limites com a placa Norte-americana (a consequência é a falha de San Andreas), a placa de Cocos e a placa de Nazca.\n[…]\nAo sul, sua colisão com a placa Antártica formou a placa Pacífico-Antártica.\n[…]\nTectônica de placas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Era Paleozoica",
      "descricao": "Era geológica entre cerca de 539 e 252 milhões de anos atrás, do Cambriano ao Permiano."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as eras Paleozoica, Mesozoica e Cenozoica, qual durou mais tempo?",
    "resposta": "Paleozoica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paleozoic",
      "https://en.wikipedia.org/wiki/Mesozoic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paleozoic",
        "situacao": "ok",
        "texto": "The Paleozoic ( PAL-ee-ə-ZOH-ik, -⁠ee-oh-, PAY-; or Palaeozoic) Era is the first of three geological eras of the Phanerozoic Eon. Beginning 538.8 million years ago (Ma), it succeeds the Neoproterozoic (the last era of the Proterozoic Eon) and ends 251.9 Ma at the start of the Mesozoic Era. The Paleozoic is subdivided into six geologic periods, (from oldest to youngest) Cambrian, Ordovician, Siluri\n[…]\nThe Paleozoic Era ended with the largest extinction event of the Phanerozoic Eon, the Permian–Triassic extinction event. The effects of this catastrophe were so devastating that it took life on land 30 million years into the Mesozoic Era to recover.\n[…]\nThe boundary between the Paleozoic and Mesozoic eras and the Permian and Triassic periods is marked by the first occurrence of the conodont Hindeodus parvus. This is the first biostratigraphic event found worldwide that is associated with the beginning of the recovery following the end-Permian mass extinctions and environmental changes. In non-marine strata, the equivalent level is marked by the disappearance of the Permian Dicynodon tetrapods.\n[…]\nThe Paleozoic marine fauna was notably lacking in predators relative to the present day. Predators made up about 4% of the fauna in Paleozoic assemblages while making up 17% of temperate Cenozoic assemblages and 31% of tropical ones. Infaunal animals made up 4% of soft substrate Paleozoic communities but about 47% of Cenozoic communities.\n[…]\nAdditionally, the Paleozoic had very few facultatively motile animals that could easily adjust to disturbance, with such creatures composing 1% of its assemblages in contrast to 50% in Cenozoic faunal assemblages. Non-motile animals untethered to the substrate, extremely rare in the Cenozoic, were abundant in the Paleozoic.\n[…]\n60+ images of Paleozoic Foraminifera\n[…]\nPaleozoic (chronostratigraphy scale) Archived 2020-10-30 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mesozoic",
        "situacao": "ok",
        "texto": "The Mesozoic Era is an era of Earth's geological history, lasting from about 252 to 66 million years ago, comprising the Triassic, Jurassic and Cretaceous Periods. It is characterized by the dominance of archosaurian reptiles such as the dinosaurs, and of gymnosperms such as cycads, ginkgoaceae and araucarian conifers; a hot greenhouse climate; and the tectonic break-up of Pangaea.\n[…]\nThe Mesozoic is the middle of the three eras since complex life evolved: the Paleozoic, the Mesozoic, and the Cenozoic.\n[…]\nThe current name was proposed in 1840 by the British geologist John Phillips (1800–1874). \"Mesozoic\" literally means 'middle life', deriving from the Greek prefix meso- (μεσο- 'between') and zōon (ζῷον 'animal, living being'). In this way, the Mesozoic is comparable to the Cenozoic (lit. 'new life') and Paleozoic ('old life') eras as well as the Proterozoic ('earlier life') Eon.\n[…]\nThe Mesozoic Era was originally described as the \"secondary\" era, following the \"primary\" (Paleozoic), and preceding the Tertiary.\n[…]\nFollowing the Paleozoic, the Mesozoic extended roughly 186 million years, from 251.902 to 66 million years ago when the Cenozoic Era began. This time frame is separated into three geologic periods. From oldest to youngest:\n[…]\nCompared to the vigorous convergent plate mountain-building of the late Paleozoic, Mesozoic tectonic deformation was comparatively mild. The sole major Mesozoic orogeny occurred in what is now the Arctic, creating the Innuitian orogeny, the Brooks Range, the Verkhoyansk and Cherskiy Ranges in Siberia, and the Khingan Mountains in Manchuria.\n[…]\nSome plant species had distributions that were markedly different from succeeding periods; for example, the Schizeales, a fern order, were skewed to the Northern Hemisphere in the Mesozoic, but are now better represented in the Southern Hemisphere.\n[…]\nPaleozoic Era\n[…]\nCenozoic Era"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paleozoico",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Paleozoico (pré-AO 1990: Paleozóico) é a primeira das três eras geológicas do éon Fanerozoico, que começou em 538,8 milhões e terminou em 251,9 milhões de anos, aproximadamente. A era Paleozoica sucede a era Neoproterozoica do éon Proterozoico e precede a era Mesozoica de seu éon. Divide-se nos períodos Cambriano, Ordoviciano, Siluriano, Devoniano, Carbonífero e Per\n[…]\nAlgumas escalas de tempo geológicas dividem o Paleozoico informalmente em sub-eras iniciais e tardias: o Paleozoico Inferior consistindo no Cambriano, Ordoviciano e Siluriano; o Paleozoico Superior consistindo no Devoniano, Carbonífero e Permiano.\n[…]\nO início do Paleozoico terminou, de forma bastante abrupta, com a curta, mas aparentemente severa, era glacial do final do Ordoviciano. Este período de frio causou a segunda maior extinção em massa do éon Fanerozoico, com o tempo, o clima mais quente mudou para a Era Paleozoica.\n[…]\nHá muitas perguntas sem resposta sobre o final do Paleozoico. O Mississipiano (início do período Carbonífero) começou com um aumento no oxigênio atmosférico, enquanto o dióxido de carbono despencou para novos mínimos. Isto desestabilizou o clima e levou a uma, e talvez duas, eras glaciais durante o Carbonífero. Estas foram muito mais severas do que a breve era glacial do Ordoviciano Superior; mas, desta vez, os efeitos na biota mundial foram inconsequentes.\n[…]\nMais tarde, os répteis prosperaram e continuaram a aumentar em número e variedade no final do período Permiano.\n[…]\nAlém disso, o Paleozoico tinha muito poucos animais com mobilidade facultativa que pudessem facilmente se ajustar às perturbações, com tais criaturas compondo 1% de suas assembleias, em contraste com 50% nas assembleias de fauna do Cenozoico. Animais imóveis e livres do substrato, extremamente raros no Cenozoico, eram abundantes no Paleozoico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cordilheira dos Andes",
      "descricao": "Cadeia de montanhas que percorre o oeste da América do Sul, da Venezuela à Patagônia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Com cerca de sete mil quilômetros, qual é a cordilheira mais longa do mundo fora dos oceanos?",
    "resposta": "Cordilheira dos Andes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Andes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Andes",
        "situacao": "ok",
        "texto": "The Andes ( AN-deez), Andes Mountains or Andean Mountain Range (Spanish: Cordillera de los Andes; Quechua: Anti) are the longest continental mountain range in the world, forming a continuous highland along the western edge of South America. The range is 8,900 kilometres (5,500 mi) long and 200 to 700 kilometres (120 to 430 mi) wide (widest between 18°S and 20°S latitude) and has an average height \n[…]\nThe Andes are also part of the American Cordillera, a chain of mountain ranges (cordillera) that consists of an almost continuous sequence of mountain ranges that form the western \"backbone\" of the Americas and Antarctica.\n[…]\nThe term cordillera comes from the Spanish word cordel \"rope\" and is used as a descriptive name for several contiguous sections of the Andes, as well as the entire Andean range, and the combined mountain chain along the western part of the North and South American continents.\n[…]\nThe Andes mountain range, the longest continental mountain system in the world, extends approximately 7,000 km (4,300 mi) along the western edge of South America, spanning seven countries. Its width varies from 200 km (120 mi) to 700 km (430 mi), encompassing a series of parallel cordilleras, high plateaus, and deep intermontane valleys.\n[…]\nThis list contains some of the major peaks in the Andes mountain range. The highest peak is Aconcagua of Argentina.\n[…]\nMountain passes of the Andes\n[…]\nBiggar, John (2005). The Andes: A Guide for Climbers (3 ed.). Scotland: Andes Publishing. ISBN 978-0-9536087-2-0.\n[…]\nDarack, Ed (2001). Wild Winds: Adventures in the Highest Andes. Cordee / DPP. ISBN 978-1-884980-81-7.\n[…]\n\"Andes\" . Encyclopædia Britannica. Vol. II (9th ed.). 1878. p. 15–18.\n[…]\nUniversity of Arizona: Andes geology\n[…]\nBlueplanetbiomes.org: Climate and animal life of the Andes Archived 14 December 2007 at the Wayback Machine\n[…]\nDiscover-peru.org: Regions and Microclimates in the Andes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Andes",
        "situacao": "ok",
        "texto": "Andes (em quíchua: Anti(s)) é uma vasta cadeia montanhosa formada por um sistema contínuo de montanhas ao longo da costa ocidental da América do Sul, tendo a sua formação geológica datada no período Terciário. A cordilheira possui aproximadamente oito mil quilômetros de extensão. É a maior cadeia de montanhas do mundo (em comprimento), e em seus trechos mais largos chega a 160 km do extremo leste \n[…]\nAo Norte do Equador, na fronteira com a Colômbia, os Andes constituem uma só cordilheira com picos vulcânicos de até 5 000 m de altitude, mas para o norte se divide rapidamente em duas cordilheiras chamadas respectivamente Cordilheira Ocidental (Colômbia) e Cordilheira Central (Colômbia), no local conhecido como Nudo das Pasto (Colômbia) e um pouco mais ao norte a Cordilheira Central (Colômbia) se desprende a Cordilheira Oriental (Colômbia).\n[…]\nA região de Mendoza, na Argentina é o destino escolhido por muitas pessoas que procuram por neve. Um dos marcos da viagem é atravessar uma estrada que cruza por regiões semidesérticas, até chegar ao Parque Nacional do Aconcágua, que fica no lado argentino da Cordilheira dos Andes, e visualizar o monte Aconcágua. Ao longo de todo o ano o visitante pode visualizar as neves eternas no topo das montanhas. Durante as nevascas mais intensas do inverno, alguns pontos da estrada ficam intransitáveis.\n[…]\nO monte Aconcágua - Sentinela de Pedra - tem 6 962 metros de altitude, e é simultaneamente o ponto mais alto das Américas, de todo o Hemisfério Sul e o mais alto fora da Ásia. Fica localizado nos Andes argentinos, a cerca de 112 km da cidade de Mendoza. Por ser a montanha mais alta das Américas desafia todos os anos montanhistas de todo mundo a escalá-la.\n[…]\nO norte do Chile e da Argentina compartilham os picos mais altos dos Andes, seguidos pela Cordilheira Branca, localizada no Peru, a Cordilheira Real da Bolívia e os Andes Equatorianos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Rocha sedimentar",
      "descricao": "Tipo de rocha formado pelo acúmulo e compactação de sedimentos, como o arenito e o calcário."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Apesar de serem só uma fina camada da crosta, que tipo de rocha cobre cerca de três quartos da superfície dos continentes?",
    "resposta": "Rochas sedimentares",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sedimentary_rock"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sedimentary_rock",
        "situacao": "ok",
        "texto": "Sedimentary rocks are types of rock formed by the cementation of sediments—i.e. particles made of minerals (geological detritus) or organic matter (biological detritus)—that have been accumulated or deposited at Earth's surface. Sedimentation is any process that causes these particles to settle in place. Geological detritus originates from weathering and erosion of existing rocks, or from the soli\n[…]\nA continental sedimentary environment is an environment in the interior of a continent. Examples of continental environments are lagoons, lakes, swamps, floodplains and alluvial fans. In the quiet water of swamps, lakes and lagoons, fine sediment is deposited, mingled with organic material from dead plants and animals. In rivers, the energy of the water is much greater and can transport heavier clastic material. Besides transport by water, sediment can be transported by wind or glaciers.\n[…]\nA type of basin formed by the moving apart of two pieces of a continent is called a rift basin. Rift basins are elongated, narrow and deep basins. Due to divergent movement, the lithosphere is stretched and thinned, so that the hot asthenosphere rises and heats the overlying rift basin. Apart from continental sediments, rift basins normally also have part of their infill consisting of volcanic deposits.\n[…]\nWhen a piece of lithosphere that was heated and stretched cools again, its density rises, causing isostatic subsidence. If this subsidence continues long enough, the basin is called a sag basin. Examples of sag basins are the regions along passive continental margins, but sag basins can also be found in the interior of continents. In sag basins, the extra weight of the newly deposited sediments is enough to keep the subsidence going in a vicious circle.\n[…]\nBasic Sedimentary Rock Classification Archived 2011-07-23 at the Wayback Machine, by Lynn S. Fichter, James Madison University, Harrisonburg.VI;"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rocha_sedimentar",
        "situacao": "ok",
        "texto": "As rochas sedimentares são rochas formadas através da deposição, e consequente cimentação ou consolidação de fragmentos provenientes de material mineral ou material orgânico.\n[…]\nNo caso do material orgânico, os respetivos fragmentos, denominados de detrito biológico, são geralmente provenientes de corpos e partes de organismos subaquáticos, essencialmente conchas, assim como das suas massas fecais. As rochas sedimentares acumulam-se em planaltos na crosta terrestre, tendo sido geralmente , conhecido como fundos marinhos, cobrindo cerca de 75% da superfície terrestre e 90% dos leitos marinhos, correspondendo ainda a 5% do volume da crosta terrestre.\n[…]\nAs rochas sedimentares classificam-se em três grupos de acordo com a sua origem e formação:\n[…]\nAs rochas sedimentares cobrem os continentes da crosta terrestre extensivamente, mas a contribuição total das rochas sedimentares estima-se que seja de apenas cinco por cento do total. Dessa forma, vemos que as sequências sedimentares representam apenas uma fina camada de uma crosta composta essencialmente de rochas ígneas e metamórficas.\n[…]\nRochas sedimentares biogênicas são formadas por materiais gerados por organismos vivos, como corais, moluscos e foraminíferos, que cobrem o fundo do oceano com camadas de calcite que podem mais tarde formar calcários. Outros exemplos incluem os estromatólitos, e o sílex encontrado em nódulos em giz (que é em si uma rocha sedimentar biogênica, uma forma de calcário).\n[…]\nRochas sedimentares quimiogênicas podem se formar quando em soluções minerais, tais como a água do mar que se evapora. Os exemplos incluem o calcário, o halite e o gesso.\n[…]\nMuseu Heinz Ebert - UNESP - Rochas sedimentares",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Corindo",
      "descricao": "Mineral de óxido de alumínio, de dureza nove na escala de Mohs, cujas variedades incluem o rubi e a safira."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Na escala de Mohs, que vai de um a dez, qual mineral fica logo abaixo do diamante, com dureza nove?",
    "resposta": "Corindo",
    "distratores": [
      "Topázio",
      "Quartzo",
      "Berilo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mohs_scale",
      "https://en.wikipedia.org/wiki/Corundum"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mohs_scale",
        "situacao": "ok",
        "texto": "The Mohs scale (  MOHZ) of mineral hardness is a qualitative ordinal scale, from 1 to 10, characterizing scratch resistance of minerals through the ability of harder material to scratch softer material.\n[…]\nEach of the ten hardness values in the Mohs scale is represented by a reference mineral, most of which are widespread in rocks.\n[…]\nThe Mohs scale is an ordinal scale. For example, corundum (9) is twice as hard as topaz (8), but diamond (10) is about four times as hard as corundum, for absolute hardness. The table below shows the comparison with the absolute hardness measured by a sclerometer, with images of the reference minerals in the rightmost column.\n[…]\nBelow is a table of more materials by Mohs scale. Some of them have a hardness between two of the Mohs scale reference minerals. Some solid substances that are not minerals have been assigned a hardness on the Mohs scale. Hardness may be difficult to determine, or may be misleading or meaningless, if a material is a mixture of multiple substances.\n[…]\nFor example, granite has been assigned by some sources a Mohs hardness between 6 and 7, but it is a rock made of several minerals, each with its own Mohs hardness. Topaz-rich granite is mainly composed of topaz (Mohs 8), quartz (Mohs 7), orthoclase (Mohs 6), plagioclase (Mohs 6–6.5), and mica (Mohs 2–4).\n[…]\nDespite its lack of precision, the Mohs scale is relevant for field geologists, who use it to roughly identify minerals using scratch kits. The Mohs scale hardness of minerals can be commonly found in reference sheets.\n[…]\nComparison between Mohs hardness and Vickers hardness:\n[…]\nCordua, William S. (c. 1990). \"The hardness of minerals and rocks\". Lapidary Digest – via gemcutters.org."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Corundum",
        "situacao": "ok",
        "texto": "Corundum is a crystalline form of aluminium oxide (Al2O3) typically containing traces of iron, titanium, vanadium, and chromium. It is a rock-forming mineral. It is a naturally transparent material, but can have different colors depending on the presence of transition metal impurities in its crystalline structure. Corundum has two primary gem varieties: ruby and sapphire.\n[…]\nBecause of corundum's hardness (pure corundum is defined to have 9.0 on the Mohs scale), it can scratch almost all other minerals. Emery, a variety of corundum with no value as a gemstone, is commonly used as an abrasive on sandpaper and on large tools used in machining metals, plastics, and wood. It is a black granular form of corundum, in which the mineral is intimately mixed with magnetite, hematite, or hercynite.\n[…]\nIn addition to its hardness, corundum has a density of 4.02 g/cm3 (251 lb/cu ft), which is unusually high for a transparent mineral composed of the low-atomic mass elements aluminium and oxygen.\n[…]\nCorundum occurs as a mineral in mica schist, gneiss, and some marbles in metamorphic terranes. It also occurs in low-silica igneous syenite and nepheline syenite intrusives. Other occurrences are as masses adjacent to ultramafic intrusives, associated with lamprophyre dikes and as large crystals in pegmatites. It commonly occurs as a detrital mineral in stream and beach sands because of its hardness and resistance to weathering.\n[…]\nSpinel – natural and synthetic mineral often mistaken for corundum"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Mohs",
        "situacao": "ok",
        "texto": "Escala de Mohs quantifica a dureza dos minerais, isto é, a resistência que um determinado mineral oferece ao risco, ou seja, à retirada de partículas da sua superfície.\n[…]\nO diamante risca o vidro, portanto, é mais duro que o vidro. Esta escala foi criada em 1812 pelo mineralogista alemão Friedrich Vilar Mohs com dez minerais de diferentes durezas existentes na crosta terrestre.\n[…]\nAtribuiu valores de 1 a 10. O valor de dureza 1 foi dado ao material menos duro da escala, que é o talco, e o valor 10 dado ao diamante que é a substância mais dura conhecida na natureza.\n[…]\nEsta escala não corresponde à dureza absoluta de um material. Por exemplo, o diamante tem dureza absoluta 1 500 vezes superior à do talco. Entre 1 e 9, a dureza aumenta de modo mais ou menos uniforme, mas de 9 para 10 há uma diferença muito acentuada, pois o diamante é muito mais duro que o coríndon (ou seja, que o rubi e a safira).\n[…]\nA escala de dureza Mohs é usada em mineralogia; no entanto, existem outras escalas de dureza utilizadas em ciência dos materiais, tais como:\n[…]\nDureza Brinell\n[…]\nDureza Rockwell\n[…]\nDureza Rockwell superficial\n[…]\nDureza Webster\n[…]\nDureza Vickers\n[…]\nA tabela abaixo incorpora substâncias adicionais susceptíveis de serem abrangidas entre os níveis:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Feldspato",
      "descricao": "Grupo de minerais silicatados de alumínio, presentes no granito e em muitas outras rochas."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Mais comum até que o quartzo, qual grupo de minerais é o mais abundante na crosta da Terra?",
    "resposta": "Feldspatos",
    "distratores": [
      "Micas",
      "Calcita",
      "Argilas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Feldspar",
      "https://www.britannica.com/science/feldspar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Feldspar",
        "situacao": "ok",
        "texto": "Feldspar ( FEL(D)-spar; sometimes spelled felspar) is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium. The most common members of the feldspar group are the plagioclase (sodium-calcium) feldspars and the alkali (potassium-sodium) feldspars. Feldspars make up about 60% of the Earth's crust and 41% of the Earth's c\n[…]\nThe change from Spat to -spar was influenced by the English word spar, meaning a non-opaque mineral with good cleavage. Feldspathic refers to materials that contain feldspar. The alternative spelling, felspar, has fallen out of use. The term \"felsic\", meaning light coloured minerals such as quartz and feldspars, is an acronymic word derived from feldspar and silica, unrelated to the obsolete spelling \"felspar\".\n[…]\nBuddingtonite is an ammonium feldspar with the chemical formula: NH4AlSi3O8. It is a mineral associated with hydrothermal alteration of the primary feldspar minerals.\n[…]\nChemical weathering of feldspars happens by hydrolysis and produces clay minerals, including illite, smectite, and kaolinite. Hydrolysis of feldspars begins with the feldspar dissolving in water, which happens best in acidic or basic solutions and less well in neutral ones. The speed at which feldspars are weathered is controlled by how quickly they are dissolved. Dissolved feldspar reacts with H+ or OH− ions and precipitates clays.\n[…]\nThe abundance of feldspars in the Earth's crust means that clays are very abundant weathering products. About 40% of minerals in sedimentary rocks are clays and clays are the dominant minerals in the most common sedimentary rocks, mudrocks. They are also an important component of soils. Feldspar that has been replaced by clay looks chalky compared to more crystalline and glassy unweathered feldspar grains.\n[…]\nusgs.gov (Mineral Commodity Summaries 2025): Feldspar and Nepheline Syenite"
      },
      {
        "url": "https://www.britannica.com/science/feldspar",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Feldspato",
        "situacao": "ok",
        "texto": "Feldspato (fórmula química (K, Na Ca) (Si, Al)4 O8) (do alemão feld, campo; e spat, uma rocha que não contém minério) é uma importante família de minerais, do grupo dos tectossilicatos, constituintes de rochas que formam cerca de 60% da crosta terrestre. Cristalizam nos sistemas triclínico ou monoclínico.\n[…]\nEles cristalizam do magma tanto em rochas intrusivas quanto extrusivas; os feldspatos ocorrem como minerais compactos, como filões, em pegmatitas e se desenvolvem em muitos tipos de rochas metamórficas. Também podem ser encontrados em alguns tipos de rochas sedimentares.O perfeito entendimento das relações entre os feldspatos apenas é atingido com a caracterização química e estrutural, aspectos dependentes da temperatura e pressão de cristalização e da história termal e deformacional subsequente.\n[…]\nOs feldspatos possuem numerosas aplicações na indústria, devido ao seu teor de álcalis e alumina. Dentre essas aplicações, estão:\n[…]\nFabrico de vidros (sobretudo feldspatos potássicos, que reduzem a temperatura de fusão do quartzo, ajudando a controlar a viscosidade do vidro).\n[…]\nFabrico de cerâmicas (são o segundo ingrediente mais importante depois das argilas; aumentam a resistência e durabilidade das cerâmicas).\n[…]\nComo material de incorporação em tintas, plásticos e borrachas, dada a sua boa dispersibilidade, o seu índice de refração relativamente alto (próximo de 1,5) e por serem quimicamente inertes, além de apresentarem pH estável, alta resistência à abrasão e ao congelamento (nessas aplicações usam-se feldspatos finamente moídos).\n[…]\nEsta família de minerais pode dividir-se em três grupos principais:\n[…]\nFeldspatos raros\n[…]\nLista de minerais\n[…]\n«Página do DNPM-PE sobre o feldspato»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Manto terrestre",
      "descricao": "Camada da Terra situada entre a crosta e o núcleo, formada por rocha quente e lentamente deformável."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual camada da Terra é a mais volumosa, ocupando mais de oitenta por cento do volume do planeta?",
    "resposta": "Manto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mantle_(geology)",
      "https://en.wikipedia.org/wiki/Earth%27s_mantle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mantle_(geology)",
        "situacao": "ok",
        "texto": "A mantle is a layer inside a planetary body bounded below by a core and above by a crust. Mantles are made of rock or ices, and are generally the largest and most massive layer of the planetary body. Mantles are characteristic of planetary bodies that have undergone differentiation by density. All terrestrial planets (including Earth), half of the giant planets, specifically ice giants, a number o\n[…]\nThe Earth's mantle is a layer of silicate rock between the crust and the outer core. Its mass of 4.01 × 1024 kg is 67% of the mass of the Earth. It has a thickness of 2,900 kilometres (1,800 mi) making up about 84% of Earth's volume. It is predominantly solid, but in geological time it behaves as a viscous fluid. Partial melting of the mantle at mid-ocean ridges produces oceanic crust, and partial melting of the mantle at subduction zones produces continental crust."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Earth%27s_mantle",
        "situacao": "ok",
        "texto": "Earth's mantle is a layer of silicate rock between the crust and the outer core. It has a mass of 4.01×1024 kg (8.84×1024 lb) and makes up 86% of the mass of Earth. It has a thickness of 2,900 kilometers (1,800 mi) making up about 46% of Earth's radius and 84% of Earth's volume. It is predominantly solid but, on geologic time scales, it behaves as a viscous fluid, sometimes described as having the"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Jade",
      "descricao": "Nome dado a pedras ornamentais verdes muito valorizadas na China, formadas por dois minerais distintos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O nome jade é dado a dois minerais diferentes, usados há milênios na China. Um deles é a jadeíta. Qual é o outro?",
    "resposta": "Nefrita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jade",
      "https://en.wikipedia.org/wiki/Nephrite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jade",
        "situacao": "ok",
        "texto": "Jade is an umbrella term for two different types of decorative rocks used for jewelry or ornaments. Jade is often referred to by either of two different silicate mineral names: nephrite (a silicate of calcium and magnesium in the amphibole group of minerals), or jadeite (a silicate of sodium and aluminum in the pyroxene group of minerals). Nephrite is typically green, although it may be yellow, wh\n[…]\nNephrite was deprecated by the International Mineralogical Association as a mineral species name in 1975 (replaced by tremolite). The name \"nephrite\" is mineralogically correct for referring to the rock. Jadeite is a legitimate mineral species, differing from the pyroxene jade rock. In China, the name jadeite has been replaced with fei cui, the traditional Chinese name for this gem that was in use long before Damour created the name in 1863.\n[…]\nJadeite, with its bright emerald-green, lavender, pink, orange, yellow, red, black, white, near-colorless and brown colors was imported from Burma to China in quantity only after about 1800. The vivid white to green variety became known as fei cui (翡翠) or kingfisher jade, due to its resemblance to the feathers of the kingfisher bird. That definition was later expanded to include all other colors that the rock is found in.\n[…]\nIt was not until 1863 that French mineralogist Alexis Damour determined that what was referred to as \"jade\" could in fact be one of two different minerals, either nephrite or jadeite.\n[…]\nNephrite can be found in a creamy white form (known in China as \"mutton fat\" jade) as well as in a variety of light green colours, whereas jadeite shows more colour variations, including blue, brown, red, black, dark green, lavender and white. Of the two, jadeite is rarer, documented in fewer than 12 places worldwide. Translucent emerald-green jadeite is the most prized variety, both historically and today.\n[…]\nJade trade in Myanmar\n[…]\nJade in Canada"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nephrite",
        "situacao": "ok",
        "texto": "Nephrite is a variety of the calcium, magnesium, and iron-rich amphibole minerals tremolite, actinolite or ferro-actinolite (aggregates of which also make up one form of asbestos). The chemical formula for nephrite is Ca2(Mg, Fe)5Si8O22(OH)2. It is one of two different mineral species called jade. The other mineral species known as jade is jadeite, which is a variety of pyroxene.\n[…]\nWhile nephrite jade possesses mainly grays and greens (and occasionally yellows, browns, black or whites), jadeite jade, which is rarer, can also contain blacks, reds, pinks and violets. Nephrite jade is an ornamental stone used in carvings, beads, or cabochon cut gemstones. Nephrite is also the official state mineral of Wyoming.\n[…]\nMiddleton, A. 2006. Jade – geology and mineralogy. – In: Gems (Ed. O’Donoghue, M.). 2006. Sixth Ed., Butterworth-Heinemann, Elsevier, Amsterdam – Boston – Heidelberg – London, 332-355.\n[…]\nMustoe, G. E. 2024. Nephrite jade and related rocks from Western Washington State, USA: A geologic overview. – Minerals, 14, 1186.\n[…]\nRawson, J. 1975. Chinese Jade Throughout the Ages. London.\n[…]\nWei, X., G. Shi, X. Zhang, J. Zhang, M. Shih. 2024. A new nephrite occurrence in Jiangxi Province, China: Its characterization and gemological significance. – Minerals, 14, 4, 432.\n[…]\nWen, G., Z. Jing. 1996. Mineralogical studies of Chinese archaic jade. – Acta Geologica Taiwanica, 32, 55-83.\n[…]\nWilkins, C. J., W. Craighead Tennant, B. E. Willianson, C. A. McCammon. 2003. Spectroscopic and related evidence on the coloring and constitution of New Zealand jade. – American Mineralogist, 88, 8-9, 1336-1344.\n[…]\nYang, Y. 1996. The Chinese jade culture. – In: Mysteries of Ancient China  (Ed. Rawson, J.). G. Braziller, London and New York, 225-296.\n[…]\nYin, Z., C. Jiang, M. Santosh, Y. Chen, Yi Bao, Q. Chen. 2014. Nephrite jade from Guangxi Province, China. – Gems & Gemology, 50, 3, 228-235."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jade",
        "situacao": "ok",
        "texto": "Jade (do francês jade; em espanhol piedra de la ijada, \"pedra do flanco\") é uma pedra ornamental muito dura e compacta, variando, na cor, de esbranquiçada a verde-escura. Designa a associação de dois minerais, a forma em nefrita da actinolite e um mineral chamado jadeíta. É geralmente empregada em objetos de adorno, em estatuetas etc.\n[…]\nJade é um nome que era aplicado às pedras ornamentais que eram trazidas à Europa da China e da América central. Somente em 1863 se percebeu que o termo \"jade\" estava sendo aplicado a dois minerais diferentes. A jadeíta quase nunca é encontrada em cristais individuais e é composta dos cristais bloqueando microscópicos que produzem um material muito resistente. Nefrita é realmente um não mineral, mas uma variedade da actinolita mineral.\n[…]\nA variedade de nefrita é composta de cristais fibrosos entrelaçados em uma massa compacta resistente. Outras variedades de actinolita são completamente diferentes da nefrita.\n[…]\nO jade é valioso ainda hoje por sua beleza. Suas muitas cores são apreciadas, mas a cor verde-esmeralda que a jadeíta produz assim bem, que está sendo altamente procurado por coletores da arte-final. Este jade verde-esmeralda, chamado \"jade imperial\", é colorido pelo cromo. Outras cores são influenciadas pelo ferro (verde e marrom) e o manganês é pensado para produzir as cores violetas. A nefrita é geralmente branco, verde e creme, quando a jadeíta puder ter a escala cheia de cores do jade.\n[…]\nNa cultura chinesa, a Jade é vista como um símbolo de riqueza e prosperidade, sendo usada em joias e objetos que atravessam gerações.\n[…]\n«Battling for Blood Jade: Inside One of the World's Most Dangerous Industries» (em inglês). Revista Time, 9 de março de 2017",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Mármore",
      "descricao": "Rocha metamórfica formada pela recristalização de calcário sob calor e pressão."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O mármore é um calcário transformado pelo calor e pela pressão. Qual mineral forma a maior parte dele?",
    "resposta": "Calcita",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marble"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marble",
        "situacao": "ok",
        "texto": "Marble is a metamorphic rock consisting of carbonate minerals (most commonly calcite  (CaCO3) or dolomite (CaMg(CO3)2) that have recrystallized under the influence of heat and pressure. It has a crystalline texture, and is typically not foliated (layered), although there are exceptions.\n[…]\nAlso, the low index of refraction of calcite allows light to penetrate 12.7 to 38 millimeters into the stone before being scattered out, resulting in the characteristic waxy look which brings a lifelike luster to marble sculptures of any kind, which is why many sculptors preferred and still prefer marble for sculpting the human form.\n[…]\nConstruction marble is a stone which is composed of calcite, dolomite or serpentine that is capable of taking a polish. More generally in construction, specifically the dimension stone trade, the term marble is used for any crystalline calcitic rock (and some non-calcitic rocks) useful as building stone. For example, Tennessee marble is really a dense granular fossiliferous gray to pink to maroon Ordovician limestone, that geologists call the Holston Formation.\n[…]\nMarmorino\n[…]\nDimension Stone Statistics and Information Archived 2009-12-23 at the Wayback Machine – United States Geological Survey minerals information for dimension stone\n[…]\nUSGS 2005 Minerals Yearbook: Stone, Crushed Archived 2007-09-26 at the Wayback Machine\n[…]\nUSGS 2005 Minerals Yearbook: Stone, Dimension Archived 2007-08-10 at the Wayback Machine\n[…]\nUSGS 2006 Minerals Yearbook: Stone, Crushed Archived 2008-02-27 at the Wayback Machine\n[…]\nUSGS 2006 Minerals Yearbook: Stone, Dimension Archived 2008-02-27 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/M%C3%A1rmore",
        "situacao": "ok",
        "texto": "Mármore é uma rocha metamórfica originada de calcário exposto a altas temperaturas e pressão de baixa a moderada. Por este motivo as maiores jazidas de mármore são encontradas em regiões de rocha matriz calcária e onde houve atividade vulcânica. O mármore é uma rocha explorada para uso em construção civil.\n[…]\nComercialmente são classificados como mármores, todas as rochas carbonáticas capazes de receber polimento. A composição mineralógica depende da composição química do sedimento e do grau metamórfico. Dessa forma, possuem uma variedade de cores e texturas, estruturas que as tornam bastante rentáveis na indústria de rochas ornamentais.\n[…]\nSendo certo que estes mármores têm maior expressão no Anticlinal de Estremoz (que se encontra no quadrante que vai de Estremoz a Barrancos), de onde, por sinal, é extraído o afamado mármore de Estremoz, também há consideráveis jazidas nos quadrantes que vão de Montemor a Ficalho e no Maciço de Beja, principalmente nas zonas que ficam entre Ficalho e Moura, Viana do Alentejo e Alvito, Escoural, Serpa, e Trigaches.\n[…]\nNestes quadrantes, os mármores surgem integrados em dois complexos vulcano-sedimentares (respectivamente o de Estremoz e o de Ficalho - Moura) que, apesar das diferenças geográficas entre si, exibem sequências litoestratigráficas semelhantes, sendo fundamentalmente constituídos por mármores, xistos e intercalações de rochas vulcânicas.\n[…]\nNo Brasil, as maiores concentrações de mármore estão no estado do Espírito Santo, sendo este também o maior produtor de rochas ornamentais do país.\n[…]\nMuseu de minerais e rochas Heinz Ebert (Unesp)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Rubi",
      "descricao": "Gema vermelha, variedade do mineral corindo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Traços de qual elemento químico dão ao rubi a sua cor vermelha?",
    "resposta": "Cromo",
    "distratores": [
      "Ferro",
      "Cobre",
      "Manganês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ruby"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ruby",
        "situacao": "ok",
        "texto": "Ruby is a pinkish-red to blood-red-colored gemstone, a variety of the mineral corundum, consisting of aluminium oxide (α-Al2O3). Ruby is one of the most popular traditional jewelry gems and is very durable. Other varieties of gem-quality corundum are called sapphires, and rubies are also sometimes referred to as \"red sapphires\".\n[…]\nIf a color needs to be added, the glass powder can be \"enhanced\" with copper or other metal oxides as well as elements such as sodium, calcium, potassium etc.\n[…]\nIn the 1939 film adaptation of Frank L. Baum's The Wonderful Wizard of Oz the \"Ruby Slippers\" are a driving element within the plot. The slippers are mysteriously magical footwear made of rubies. The equivalent shoes were made of silver in the novel, but were changed to ruby in the film to showcase the then-novel three-strip Technicolor technology with which the film was shot."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rubi",
        "situacao": "ok",
        "texto": "O rubi é uma pedra preciosa rosa a vermelho-sangue, uma variedade de corindo mineral (óxido de alumínio). Outras variedades de corindo com qualidade de gema são chamadas safiras. O rubi é uma das joias cardinais tradicionais, junto com ametista, safira, esmeralda e diamante. A palavra rubi vem de \"ruber\", latim para vermelho.\n[…]\nO rubi é uma pedra preciosa que vai de tons de vermelho a tons de cor de rosa.\n[…]\nO rubi é minerado na África, Ásia e na Austrália. Eles são mais comuns em Myanmar, no Sri Lanka e na Tailândia, porém também são encontrados em Montana e na Carolina do Sul nos Estados Unidos e Moçambique em África. Algumas vezes ocorrem juntamente com espinelas nas mesmas formações geológicas ocorrendo confusão entre as duas espécies: no entanto, bons exemplares de espinelas vermelhas têm um valor próximo do rubi.\n[…]\nO rubi tem dureza 9 na escala de Mohs, e entre as gemas naturais somente é ultrapassado pelo diamante em termos de dureza. As variedades de corindo não vermelhas são conhecidas como safiras.\n[…]\nAs gemas de rubi são valorizadas de acordo com várias características incluindo tamanho, cor, claridade e corte. Todos os rubis naturais contêm imperfeições. Por outro lado, rubis artificiais podem não conter imperfeições. Alguns rubis manufaturados têm substâncias adicionadas a eles para que possam ser identificados como artificiais, mas a maioria requer testes gemológicos para determinar a sua origem.\n[…]\nFoi usado um rubi sintético para criar o primeiro laser.\n[…]\nO maior rubi estrela do mundo é o Rajaratna, que pesa 495 g.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ardósia",
      "descricao": "Rocha metamórfica de grão fino que se parte em placas, usada em pisos, telhados e antigas lousas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A ardósia, usada em pisos e nas antigas lousas escolares, é uma rocha metamórfica formada a partir de qual outra rocha?",
    "resposta": "Folhelho",
    "distratores": [
      "Granito",
      "Calcário",
      "Arenito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Slate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slate",
        "situacao": "ok",
        "texto": "Slate is a fine-grained, foliated, homogeneous, metamorphic rock derived from an original shale-type sedimentary rock composed of clay or volcanic ash through low-grade, regional metamorphism. It is the finest-grained foliated metamorphic rock. Foliation may not correspond to the original sedimentary layering, but instead is in planes perpendicular to the direction of metamorphic compression.\n[…]\nSlate is a fine-grained, metamorphic rock that shows no obvious compositional layering but can easily be split into thin slabs and plates. It is usually formed by low-grade regional metamorphism of mudrock. This mild degree of metamorphism produces a rock in which the individual mineral crystals remain microscopic in size, producing a characteristic slaty cleavage in which fresh cleavage surfaces appear dull.\n[…]\nThis is in contrast to the silky cleaved surfaces of phyllite, which is the next-higher grade of metamorphic rock derived from mudstone. The direction of cleavage is independent of any sedimentary structures in the original mudrock, reflecting instead the direction of regional compression.\n[…]\nBecause slate was formed in low heat and pressure, compared to most other metamorphic rocks, some fossils can be found in slate; sometimes even microscopic remains of delicate organisms can be found in slate.\n[…]\nThe British Geological Survey recommends that the term \"slate\" be used in scientific writings only when very little else is known about the rock that would allow a more definite classification. For example, if the characteristics of the rock show definitely that it was formed by metamorphosis of shale, it should be described in scientific writings as a metashale. If its origin is uncertain, but the rock is known to be rich in mica, it should be described as a pelite."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ard%C3%B3sia",
        "situacao": "ok",
        "texto": "A ardósia é uma rocha metamórfica sílico-argilosa formada pela transformação da argila sob pressão e temperatura, endurecida em finas lamelas. De baixo grau metamórfico,  a ardósia é formada sob as menores pressões e temperaturas dentre as rochas metamórficas.\n[…]\nA ardósia pode ser transformada em placas ou telhas, chamadas soletos, porque tem duas linhas de folhabilidade: clivagem e grão. Isto torna possível que se divida em finas folhas. Coberturas sintéticas e manufaturadas podem, inicialmente, ser mais baratas no acto da colocação, mas os soletos de ardósia durarão muitos e muitos anos, fazendo deste material uma escolha de futuro mais econômica. A ardósia é uma rocha metamórfica.\n[…]\nOutras aplicações da ardósia incluem pavimentos, fachadas, tampos de laboratórios e em decorações interiores e exteriores. Folhas finas de ardósia preta ou cinza escuro eram o material mais usado na produção de quadros negros, ou lousa. Hoje em dia, com o surgimento de materiais mais adequados, a ardósia deixou de ser usada para esse propósito.\n[…]\nAlgumas das mais finas ardósias do mundo têm origem em Campo (Valongo) em Portugal, Pequim na China, Escócia, Slate Valley em Vermont e Nova York nos Estados Unidos.\n[…]\nO estado de Minas Gerais responde por 95% da produção de ardósia do Brasil. As áreas de extração e beneficiamento de ardósias de Minas Gerais estão situadas nos municípios de Caetanópolis, Curvelo, Felixlândia, Leandro Ferreira, Martinho Campos, Papagaios, Paraopeba e Pompéu. O Brasil é o segundo maior produtor e consumidor mundial. Em 2007, contava com 25 pedreiras e cerca de 200 indústrias de beneficiamento, que geravam cerca de cinco mil empregos diretos e mais de cinco mil indiretos.\n[…]\n«História da indústria de ardósia do País de Gales»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Manto terrestre",
      "descricao": "Camada da Terra situada entre a crosta e o núcleo, formada por rocha quente e lentamente deformável."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O manto superior da Terra é formado principalmente por qual mineral verde, que nas joias recebe o nome de peridoto?",
    "resposta": "Olivina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Olivine",
      "https://en.wikipedia.org/wiki/Peridot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olivine",
        "situacao": "ok",
        "texto": "The mineral olivine () is a magnesium iron silicate with the chemical formula (Mg,Fe)2SiO4. It is a type of nesosilicate or orthosilicate. The primary component of the Earth's upper mantle, it is a common mineral in Earth's subsurface, but weathers quickly on the surface. Olivine has many uses, such as the gemstone peridot (or chrysolite), as well as industrial applications like metalworking proce\n[…]\nOlivine occurs in both mafic and ultramafic igneous rocks and as a primary mineral in certain metamorphic rocks. Mg-rich olivine crystallizes from magma that is rich in magnesium and low in silica. That magma crystallizes to mafic rocks such as gabbro and basalt. Ultramafic rocks usually contain substantial olivine, and those with an olivine content of over 40% are described as peridotites.\n[…]\nMinerals in the olivine group crystallize in the orthorhombic system (space group Pbnm) with isolated silicate tetrahedra, meaning that olivine is a nesosilicate. The structure can be described as a hexagonal, close-packed array of oxygen ions with half of the octahedral sites occupied with magnesium or iron ions and one-eighth of the tetrahedral sites occupied by silicon ions.\n[…]\nOlivine is one of the less stable common minerals on the surface according to the Goldich dissolution series. It alters into iddingsite (a combination of clay minerals, iron oxides and ferrihydrite) readily in the presence of water. Artificially increasing the weathering rate of olivine, e.g. by dispersing fine-grained olivine on beaches, has been proposed as a cheap way to sequester CO2.\n[…]\nOlivine is used as a substitute for dolomite in steel works.\n[…]\nGem-quality olivine is used as a gemstone called peridot.\n[…]\nAnother experimental use for olivine is in making carbon-neutral or carbon-negative cement.\n[…]\nList of minerals\n[…]\nOlivine Page Farlang library: Historic sources + modern articles on Olivine and Peridot"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Peridot",
        "situacao": "ok",
        "texto": "Peridot ( PERR-ih-dot), sometimes called chrysolite, is a yellow-green transparent variety of olivine, specifically the magnesium rich end member called forsterite. Peridot is one of the few gemstones that occur in only one color.\n[…]\nOxidation of peridot does not occur at natural surface temperature and pressure but begins to occur slowly at 600 °C (870 K) with rates increasing with temperature. The oxidation of the olivine occurs by an initial breakdown of the fayalite component, and subsequent reaction with the forsterite component, to give magnetite and orthopyroxene.\n[…]\nOlivine, of which peridot is a type, is a common mineral in mafic and ultramafic rocks, often found in lava and in peridotite xenoliths of the mantle, which lava carries to the surface; however, gem-quality peridot occurs in only a fraction of these settings. Peridots can also be found in meteorites.\n[…]\nOlivine is an abundant mineral, but gem-quality peridot is rather rare due to its chemical instability on Earth's surface. Olivine is usually found as small grains and tends to exist in a heavily weathered state, unsuitable for decorative use. Large crystals of forsterite, the variety most often used to cut peridot gems, are rare; as a result, peridot is considered to be precious.\n[…]\nThe principal source of peridot olivine today is the San Carlos Apache Indian Reservation in Arizona, US.\n[…]\nIncreasing iron concentration ultimately forms the iron-rich end-member of the olivine solid solution series fayalite.\n[…]\nThe largest cut peridot olivine is a 310-carat (62-gram) specimen in the gem collection of the Smithsonian Museum in Washington, D.C.\n[…]\nPeridot olivine is the birthstone for the month of August.\n[…]\nMineralminers\n[…]\nFlorida State University – Peridot"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olivina",
        "situacao": "ok",
        "texto": "Olivina é um grupo de minerais da família dos nesossilicatos cujos membros são constituídos por silicatos de magnésio e ferro, com fórmula química (Mg,Fe)2SiO4, formando uma solução sólida em que a razão Fe/Mg varia entre dois extremos constituídos pela forsterite (Mg2SiO4) e a faialite (Fe2SiO4). Este mineral dá ainda o nome a um grupo de minerais com estrutura semelhante (o grupo da olivina) que\n[…]\nOs minerais do grupo da olivina cristalizam no sistema ortorrômbico, e são nesossilicatos.\n[…]\nÉ um dos minerais mais comuns na Terra, tendo também sido encontrada em rochas lunares, em meteoritos e inclusive em rochas de Marte.\n[…]\nA olivina apresenta-se geralmente com cor verde-oliva (daí o seu nome) ou amarelo-claro, apesar de poder apresentar uma cor avermelhada devido à oxidação do ferro. Tem fratura concoidal, sendo bastante friável. A sua dureza é igual a 6.5-7, com peso específico 3.27-3.37 e lustre vítreo. Pensa-se que a cor verde seja devida à presença de pequenas quantidades de níquel. O hábito das olivinas é normalmente granular e maciço.\n[…]\nA olivina transparente é por vezes usada como gema em joalharia, sendo geralmente designada como peridoto ou, por vezes, crisólito. As melhores amostras de olivina de qualidade gemológica têm sido obtidas de um jazigo constituído por rochas do manto, na ilha Zabargad, no Mar Vermelho.\n[…]\nA olivina ocorre em rochas ígneas máficas e ultramáficas e ainda como mineral primário em algumas rochas metamórficas pois cristaliza a partir de magma rico em magnésio e pobre em sílica, o qual dá origem à formação de rochas máficas e ultramáficas, como gabro, basalto, peridotito e dunito. A olivina ou as suas variantes estruturais de alta pressão constituem cerca de 50% do manto superior, tornando a olivina um dos minerais mais comuns do planeta, em volume.\n[…]\nHurlbut, Cornelius S.; Klein, Cornelis, 1985, Manual of Mineralogy, 20th ed., ISBN 0-471-80580-7",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Bauxita",
      "descricao": "Rocha sedimentar rica em óxidos de alumínio, principal minério desse metal."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A bauxita, rocha extraída em grandes minas no Pará, é a principal fonte de qual metal?",
    "resposta": "Alumínio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bauxite",
      "https://pt.wikipedia.org/wiki/Bauxita"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bauxite",
        "situacao": "ok",
        "texto": "Bauxite ( ) is a sedimentary rock with a relatively high aluminium content. It is the world's main source of aluminium and gallium. Bauxite consists mostly of the aluminium minerals gibbsite (Al(OH)3), boehmite (γ-AlO(OH)), and diaspore (α-AlO(OH)), mixed with the two iron oxides goethite (FeO(OH)) and hematite (Fe2O3), the aluminium clay mineral kaolinite (Al2Si2O5(OH)4) and small amounts of anat\n[…]\nDuring the processing of bauxite to alumina in the Bayer process, gallium accumulates in the sodium hydroxide liquor. From this it can be extracted by a variety of methods. The most recent is the use of ion-exchange resin. Achievable extraction efficiencies critically depend on the original concentration in the feed bauxite. At a typical feed concentration of 50 ppm, about 15 percent of the contained gallium is extractable. The remainder reports to the red mud and aluminium hydroxide streams.\n[…]\nAlthough there was no official plan to mine the Atewa Forest Reserve, tensions between local communities, NGO and the government began to rise. In 2019, tensions began to reach a peak when the government presented the Ghana Integrated Bauxite and Aluminium Development Authority Act that would create the legal framework required to develop and establish an integrated bauxite industry. In May of that year, the government began drilling deep holes in the reserve.\n[…]\nMost of India's bauxite ore reserves, which are among the top ten largest in the world, are located on tribal land. These tribal lands are densely populated and home to over 100 million Indigenous Indian peoples. The mountain summits located on these lands act as a source of water and greatly contribute to the regions fertility. The Indian bauxite industry is interested in developing this land for aluminium production, which poses great risk to the terrestrial and aquatic ecosystems.\n[…]\n\"Bauxite\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bauxita",
        "situacao": "ok",
        "texto": "A bauxita (em português brasileiro) (o -xi- é pronunciado -chi-) ou bauxite (em português europeu) é uma mistura natural de óxidos de alumínio considerada mineral. Seus principais componentes são a gibbsita Al(OH)3, boehmite γ-AlOOH e o diásporo α-AlO (OH), misturado com os dois óxidos de ferro (goethita e a hematita), além de caulinita, argila mineral e pequenas quantidades de TiO2 anatase.\n[…]\nBauxita é a matéria-prima mais usada na produção de alumina em escala comercial. Outras matérias-primas, como anortosito, alunita, rejeitos de carvão e petróleo de xisto, oferecem fontes potenciais adicionais de alumina. Embora pudessem requerer tecnologia nova, a alumina destes materiais não bauxíticos poderia satisfazer a demanda para metal primário, refratários, substâncias químicas de alumínio, e abrasivos.\n[…]\nSe fosse um mineral, a bauxita seria o terceiro mineral mais abundante na natureza e mesmo assim tornou-se um recurso natural muito valorizado. 90% do minério extraído destina-se à fabricação de alumínio, mas o processo continua sendo muito caro, pois são necessárias 5 toneladas de bauxita para produzir 1 tonelada de alumínio.\n[…]\nO termo bauxita é derivado do nome da aldeia Les Baux-de-Provence na França meridional, onde foi descoberta em 1821 pelo geólogo Pierre Berthier. Durante a segunda metade do século XIX, grande parte da produção de bauxita era realizada na França e utilizado para fins não metalúrgicos, enquanto a produção alumina era direcionada como mordente na indústria têxtil. Devido ao esgotamento de suas minas de bauxita, a França cessou quase completamente a sua exploração em 1991.\n[…]\nAs minas francesas eram localizadas em Var, Bouches-du-Rhône e Herault.\n[…]\nO aumento da reciclagem de alumínio, que tem a vantagem de reduzir o custo de energia elétrica na produção de alumínio, vai preservar consideravelmente as reservas mundiais de bauxita."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Cinza vulcânica",
      "descricao": "Material fino lançado por erupções vulcânicas explosivas, formado por fragmentos de rocha, cristais e vidro."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ao contrário da cinza de uma fogueira, a cinza lançada por um vulcão é formada por quê?",
    "resposta": "Fragmentos de rocha e vidro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volcanic_ash"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volcanic_ash",
        "situacao": "ok",
        "texto": "Volcanic ash consists of fragments of rock, mineral crystals, and volcanic glass, produced during volcanic eruptions and measuring less than 2 mm (0.079 inches) in diameter. The term volcanic ash is also often loosely used to refer to all explosive eruption products (correctly referred to as tephra), including particles larger than 2 mm. Volcanic ash is formed during explosive volcanic eruptions w\n[…]\nrhyolite) consists of pulverised products of pumice (vitric shards), individual phenocrysts (crystal fraction) and some lithic fragments (xenoliths).\n[…]\nConcavities, troughs, and tubes observed on grain surfaces are the result of broken vesicle walls. Vitric ash particles from high-viscosity magma eruptions are typically angular, vesicular pumiceous fragments or thin vesicle-wall fragments while lithic fragments in volcanic ash are typically equant, or angular to subrounded.\n[…]\nThe morphology of ash particles from phreatomagmatic eruptions is controlled by stresses within the chilled magma which result in fragmentation of the glass to form small blocky or pyramidal glass ash particles. Vesicle shape and density play only a minor role in the determination of grain shape in phreatomagmatic eruptions. In this sort of eruption, the rising magma is quickly cooled on contact with ground or surface water.\n[…]\nStresses within the \"quenched\" magma cause fragmentation into five dominant pyroclast shape-types: (1) blocky and equant; (2) vesicular and irregular with smooth surfaces; (3) moss-like and convoluted; (4) spherical or drop-like; and (5) plate-like.\n[…]\nThere is good evidence that pyroclastic flows produce high proportions of fine ash by communition and it is likely that this process also occurs inside volcanic conduits and would be most efficient when the magma fragmentation surface is well below the summit crater."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinza_vulc%C3%A2nica",
        "situacao": "ok",
        "texto": "A cinza vulcânica é composta de fragmentos de rocha, cristais minerais e vidro vulcânico, criada durante erupções vulcânicas explosivas, medindo menos de 2mm em diâmetro. Cinzas vulcânicas são formadas quando gases dissolvidos no magma expandem e escapam violentamente na atmosfera. A força dos gases despedaça o magma e o empurra até a atmosfera, onde ele se solidifica em fragmentos de rocha vulcân\n[…]\nCinzas vulcânicas também são produzidas a partir do contato do magma com água durante erupções freatomagmáticas, fazendo a água explodir violentamente em vapor e causando a fragmentação do magma quando no ar, cinzas podem ser transportadas por milhares de quilômetros de distância.\n[…]\nNa erupção vulcânica explosiva, o magma que está subindo passa por uma descompressão muito rápida. Isso faz com que os gases dissolvidos dentro dele (vapor d`água, dióxido de carbono e dióxido de enxofre) comecem a se separar e formar bolhas. Essas vão se expandir, e com isso a pressão interna do magma aumenta, onde se rompe e se fragmenta. Esse processo é chamado de fragmentação magmática, que gera parte das cinzas vulcânicas.\n[…]\nAs cinzas vulcânicas são formadas principalmente por materiais que são fragmentados e se originam do magma. Sua aparência se assemelha muito a poeira comum, porém suas propriedades físico-químicas são muito variadas e implicam em diversas áreas importantes da ciência, desde geologia até saúde pública.\n[…]\nFragmentos de vidro vulcânico, que se formam quando o magma resfria muito rápido no ar, podem ser frágeis e quebradiças, com borda afiada e irregulares.\n[…]\nFragmentos de rochas, são pedaços de rochas que foram retirados de dentro das paredes interna do vulcão ou do solo durante a explosão. Essas rochas têm diferentes origens, podendo ser ígneas, sedimentares ou metamórficas, podendo contribuir para a compreensão da história geológica do local.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Opala",
      "descricao": "Mineraloide de sílica hidratada, famoso pelo jogo de cores, com jazidas em Pedro II, no Piauí."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A opala, gema famosa pelos reflexos coloridos, guarda dentro da sua estrutura uma pequena quantidade de qual substância?",
    "resposta": "Água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Opal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Opal",
        "situacao": "ok",
        "texto": "Opal is a hydrated amorphous form of silica (SiO2·nH2O); its water content may range from 3% to 21% by weight, but is usually between 6% and 10%. Due to the amorphous (chemical) physical structure, it is classified as a mineraloid, unlike crystalline forms of silica, which are considered minerals. It is deposited at a relatively low temperature and may occur in the fissures of almost any kind of r\n[…]\nThe Mintabie Opal Field in South Australia located about 250 km (160 mi) northwest of Coober Pedy has also produced large quantities of crystal opal and the rarer black opal. Over the years, it has been sold overseas incorrectly as Coober Pedy opal. The black opal is said to be some of the best examples found in Australia.\n[…]\nOpal occurs in significant quantity and variety in central Mexico, where mining and production first originated in the state of Querétaro. In this region the opal deposits are located mainly in the mountain ranges of three municipalities: Colón, Tequisquiapan, and Ezequiel Montes. During the 1960s through to the mid-1970s, the Querétaro mines were heavily mined.\n[…]\nThe Flame Queen Opal\n[…]\nThe Sea of Opal, the largest black opal in the world\n[…]\nThe Fire of Australia, assumed to be \"the finest uncut opal in existence\"\n[…]\nBeverly the Bug, the first known example of an opal with an insect inclusion\n[…]\nCacholong – Variety of opal\n[…]\nFoil opal\n[…]\nOpalite – Trade name for opal and moonstone simulants\n[…]\nFarlang opal Hist. References Archived 17 December 2010 at the Wayback Machine Localities, anecdotes by Theophrastus, Isaac Newton, Georg Agricola etc.\n[…]\nICA's Opal Page: International Colored Stone Association\n[…]\nOpal Fossils from the South Australian Museum Archived 13 February 2014 at the Wayback Machine Accessed 19 October 2016.\n[…]\nOpal Mineral data and specimen images Mineralogy Database\n[…]\nOpalworld Archived 1 December 2023 at the Wayback Machine Australian Opal Fields – Map of precious opal deposits"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Opala",
        "situacao": "ok",
        "texto": "O mineraloide opala é sílica amorfa hidratada, cujo percentual de água varia entre 3% a 21%, mas geralmente está entre 6% e 10%. Por ser amorfo, ele não tem formato de cristal, ocorrendo em veios irregulares, massas, e nódulos. Ela é depositada em temperaturas relativamente baixas e tem a fratura conchoidal, brilho vítreo, dureza na escala de Mohs de  5,5-6,6, gravidade específica 2,1-2,3, e uma c\n[…]\nA estrutura da opala é formada por esferas de cristobalita ou de sílica amorfa, regularmente dispostas, entre as quais há água, ar ou geis de sílica. Quando as esferas têm o mesmo tamanho e um diâmetro semelhante ao comprimento de onda das radiações da luz visível, ocorre difração da luz e surge o jogo de cores da opala nobre. Se as esferas variam de tamanho, não há difração e tem-se a opala comum.\n[…]\nA maior parte da opala produzida no mundo (98%) vem da Austrália. A cidade de Coober Pedy, em particular, é uma das principais fontes. As variedades terra comum, água, geléia, e opala de fogo são encontradas na maior parte no México e Mesoamérica.\n[…]\nRelatou-se que opalas do norte da África foram usadas para fazer ferramentas já em 4000 a.C. O primeiro relato publicado de opala de gema da Etiópia apareceu em 1994, com a descoberta de opala preciosa no Distrito de Menz Gishe, Província de Shewa Norte. A opala, encontrada principalmente na forma de nódulos, era de origem vulcânica e foi encontrada predominantemente dentro de camadas intemperizadas de riolito.\n[…]\nOpalas mexicanas são às vezes cortadas em seu material hospedeiro riólitico, se este for suficientemente duro para permitir o corte e o polimento. Este tipo de opala mexicana é referido como opala de Cantera. Outro tipo de opala do México, chamada de opala de água mexicana, é uma opala incolor que exibe um brilho interno azulado ou dourado.\n[…]\nA opala é a Gema oficial da Austrália.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre o Nepal e a China, com o ponto mais alto acima do nível do mar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Perto do cume do Everest, a mais de oito mil metros de altitude, o calcário guarda fósseis de que tipo de seres?",
    "resposta": "Animais marinhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Everest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Everest",
        "situacao": "ok",
        "texto": "Mount Everest (known in Nepali as Sagarmāthā, in Sherpa as Chamolangma, and in Tibetan  as Jomolangma/Čhomolangma is the highest mountain on Earth above sea level. It lies in the Mahalangur Himal sub-range of the Himalayas and marks part of the China–Nepal border at its summit. Its height was most recently measured in 2020 through a joint survey by Nepalese and Chinese authorities as 8,848.86 m (2\n[…]\nHigh winds at these altitudes on Everest are also a potential threat to climbers.\n[…]\nOn 26 September 1988, having climbed the mountain via the Southeast Ridge, Jean-Marc Boivin made the first paraglider descent of Everest, in the process creating the record for the fastest descent of the mountain and the highest paraglider flight. Boivin said: \"I was tired when I reached the top because I had broken much of the trail, and to run at this altitude was quite hard.\"\n[…]\nIn 1991, four men in two balloons achieved the first hot-air balloon flight over Mount Everest. In one balloon were Andy Elson and Eric Jones (cameraman), and in the other balloon Chris Dewhirst and Leo Dickinson (cameraman). Dickinson went on to write a book about the adventure called Ballooning Over Everest. The hot-air balloons were modified to function at up to 12,000 m (40,000 ft) altitude.\n[…]\nAfter many Nepalis died in the icefall in 2014, the government had wanted helicopters to handle more transportation to Camp 1 but this was not possible because of the 2015 earthquake closing the mountain, so this was then implemented in 2016 (helicopters did prove instrumental in rescuing many people in 2015 though). That summer Bell tested the 412EPI, which conducted a series of tests including hovering at 5,500 m (18,000 ft) and flying as high as 6,100 m (20,000 ft) altitude near Mount Everest.\n[…]\nNOVA site on Mount Everest\n[…]\nMount Everest on Summitpost\n[…]\nHimalayan Database: Data Visualization of Mount Everest Summit, Attempt, and Death"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Evereste",
        "situacao": "ok",
        "texto": "Monte Everest ou, na sua forma portuguesa, Evereste, também conhecido no Nepal como Sagarmāthā (सगरमाथा), no Tibete como Chomolungma (ཇོ་མོ་གླང་མ) e Zhūmùlǎngmǎ Fēng em chinês (珠穆朗玛峰), é a montanha de maior altitude da Terra. Seu pico está a 8 848,86 metros acima do nível do mar, na subcordilheira Mahalangur Himal dos Himalaias. A fronteira internacional entre o distrito nepalês do Solukhumbu e o \n[…]\nNo que respeita ao reconhecimento das \"rochas mais altas do planeta\" como calcário marinho fossilífero, as Rochas Ordovicianas do Monte Everest foram incluídas pela União Internacional de Ciências Geológicas (IUGS) na sua lista de 100 sítios de património geológico em todo o mundo, publicada em outubro de 2022.\n[…]\nNas regiões mais altas do Monte Everest, os alpinistas que buscam o cume costumam passar um tempo substancial dentro da zona da morte (altitudes superiores a 8 000 metros (26 000 ft)), e enfrentam desafios significativos à sobrevivência. As temperaturas podem cair para níveis muito baixos, resultando em geladuras em qualquer parte do corpo exposta ao ar. Como as temperaturas são tão baixas, a neve fica bem congelada em certas áreas, podendo ocorrer morte ou ferimentos por escorregões e quedas.\n[…]\nUm estudo de 2008 observou que a \"zona da morte\" é, de fato, onde ocorre a maioria das mortes no Everest, mas também notou que a maioria dessas mortes acontece durante a descida do cume. Um artigo de 2014 na revista The Atlantic sobre as fatalidades no Everest pontuou que, embora as quedas sejam um dos maiores perigos que a zona da morte apresenta para todas as montanhas com mais de oito mil metros (os 8000ers), as avalanches são uma causa mais comum de morte em altitudes mais baixas.\n[…]\nNesse verão, a Bell testou o 412EPI, que realizou uma série de testes, incluindo pairar a 18 000 pés (5 500 m) e voar até 20 000 pés (6 100 m) de altitude perto do Monte Everest.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Limite Cretáceo-Paleogeno",
      "descricao": "Fina camada de rocha que marca a extinção em massa de cerca de 66 milhões de anos atrás, que eliminou os grandes dinossauros."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que metal raro, comum em asteroides, foi achado em excesso na camada de rocha que marca a extinção dos dinossauros?",
    "resposta": "Irídio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_boundary",
      "https://en.wikipedia.org/wiki/Alvarez_hypothesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_boundary",
        "situacao": "ok",
        "texto": "The Cretaceous–Paleogene (K–Pg) boundary, formerly known as the Cretaceous–Tertiary (K–T) boundary, is a geological signature, usually a thin band of rock containing much more iridium than other bands. The K–Pg boundary marks the end of the Cretaceous Period, the last period of the Mesozoic Era, and marks the beginning of the Paleogene Period, the first period of the Cenozoic Era.\n[…]\nThe K–Pg boundary is associated with the Cretaceous–Paleogene extinction event, a mass extinction which destroyed a majority of the world's Mesozoic species, including all dinosaurs except for some birds.\n[…]\nThey suggested that this layer was evidence of an impact event that triggered worldwide climate disruption and caused the Cretaceous–Paleogene extinction event, a mass extinction in which 75% of plant and animal species on Earth suddenly became extinct, including all non-avian dinosaurs.\n[…]\nThe Chicxulub crater is an impact crater buried underneath the Yucatán Peninsula in Mexico. Its center is located near the town of Chicxulub, after which the crater is named. It was formed by a large asteroid or comet about 10–15 km (6.2–9.3 mi) in diameter, the Chicxulub impactor, striking the Earth. The date of the impact coincides precisely with the Cretaceous–Paleogene boundary (K–Pg boundary), slightly more than 66 million years ago.\n[…]\nIn the years when the Deccan Traps theory was linked to a slower extinction, Luis Alvarez replied that paleontologists were being misled by sparse data. While his assertion was not initially well-received, later intensive field studies of fossil beds lent weight to his claim. Eventually, most paleontologists began to accept the idea that the mass extinctions at the end of the Cretaceous were largely or at least partly due to a massive Earth impact.\n[…]\nClimate across Cretaceous–Paleogene boundary\n[…]\nSub-Paleogene surface"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Alvarez_hypothesis",
        "situacao": "ok",
        "texto": "The Alvarez hypothesis posits that the mass extinction of the non-avian dinosaurs and many other living things during the Cretaceous–Paleogene extinction event was caused by the impact of a large asteroid on the Earth. Prior to 2013, it was commonly cited as having happened about 65 million years ago, but Renne and colleagues (2013) gave an updated value of 66 million years. Evidence indicates tha\n[…]\nIn 1980, a team of researchers led by Nobel prize-winning physicist Luis Alvarez, his son geologist Walter Alvarez, and chemists Frank Asaro and Helen Vaughn Michel, discovered that sedimentary layers found all over the world at the Cretaceous–Paleogene boundary (K–Pg boundary, formerly called Cretaceous–Tertiary or K–T boundary) contain a concentration of iridium hundreds of times greater than normal.\n[…]\nPreviously, in a 1953 publication, geologists Allan O. Kelly and Frank Dachille analyzed global geological evidence suggesting that one or more giant asteroids impacted the Earth, causing an angular shift in its axis, global floods, firestorms, atmospheric occlusion, and the extinction of the dinosaurs. There were other earlier speculations on the possibility of an impact event, but without strong confirming evidence.\n[…]\nPaul Renne of the Berkeley Geochronology Center has reported that the date of the asteroid event is 66,038,000 years ago, plus or minus 11,000 years, based on Ar-Ar dating. He further posits that the mass extinction of dinosaurs occurred within 33,000 years of this date.\n[…]\nAccording to a high-resolution study of fossilized fish bones published in 2022, the Cretaceous-Paleogene asteroid which caused mass extinction impacted during the Northern Hemisphere spring."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%ADvel_K-Pg",
        "situacao": "ok",
        "texto": "O nível K-Pg, limite K-Pg ou ainda fronteira K-Pg, anteriormente chamada de K-T, é uma assinatura geológica, usualmente uma camada fina que data de aproximadamente 66.0 milhões de anos atrás. K é a abreviatura tradicionalmente usada para o período Cretáceo, e Pg é a abreviatura para o período Paleogeno.\n[…]\nEste limite marca o final da Era Mesozoica e o início da Era Cenozoica, e está associado ao evento de extinção do Cretáceo-Paleogeno, uma extinção em massa que exterminou os dinossauros e outros animais e plantas.\n[…]\nCabe notar que essa camada possui, à nível global, uma fina camada com uma distribuição de irídio cerca de trinta vezes maior do que em outras camadas. Tal fato e o de que o irídio é raro na crosta terrestre e abundante em asteroides corroboram a teoria pela qual a extinção dos dinossauros tenha se dado pela colisão de um meteoro na cratera de Chicxulub em Yucatán, México.\n[…]\nO Brasil é um dos poucos locais do mundo onde este limite pode ser observado a céu aberto. Nos afloramentos da Pedreira Poty, em Paulista, Pernambuco, se observam claramente duas camadas: a inferior, denominada Formação Gramame, e a superior, chamada Formação Maria Farinha, equivalentes respectivamente aos períodos Cretáceo e Paleogeno.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Espato da Islândia",
      "descricao": "Variedade transparente de calcita, famosa por produzir imagens duplicadas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao olhar um texto através de um cristal transparente de calcita, o chamado espato da Islândia, o que se vê de curioso?",
    "resposta": "A imagem duplicada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iceland_spar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iceland_spar",
        "situacao": "ok",
        "texto": "Iceland spar, formerly called Iceland crystal (Icelandic: silfurberg [ˈsɪlvʏrˌpɛrk], lit. 'silver-rock') and also called optical calcite, is a transparent variety of calcite, a crystallized calcium carbonate, originally brought from Iceland and used in demonstrating the polarization of light.\n[…]\nIceland spar possesses remarkable optical properties:\n[…]\nNamed after Iceland due to its abundance on the island, Iceland spar occurs in locations worldwide including many mines producing related calcite and aragonite. Sources include China, the greater Sonoran Desert region of North America, Chihuahua, Mexico, and New Mexico, United States. The clearest specimens, as well as the single largest, are from the Helgustaðir mine in Iceland.\n[…]\nThe mining process for Iceland spar varies based on the specific geological conditions of the deposit. Open-pit mining or quarrying is common for surface deposits. Once extracted, the calcite is processed to remove impurities and prepared for applications including optical instruments and jewelry, and as a source of calcium carbonate for industrial use.\n[…]\nWilliam Nicol (1770–1851) used Iceland spar to invent the first polarizing prism, the Nicol prism.\n[…]\nAs a calcite, Iceland spar is used as a building material in cement and concrete. Its high purity and brightness make it an ideal filler in paints and coatings. In metallurgy, calcite acts as a flux to lower the melting point of metals during smelting and refining. It is used in agriculture as a soil conditioner and neutralizer to adjust soil pH levels and improve crop yields.\n[…]\nThe presence of Iceland spar can indicate hydrothermal activity, as calcite can form in hydrothermal veins.\n[…]\nThe Thomas Pynchon novel Against the Day uses the doubling effect of Iceland spar as a theme.\n[…]\nSpar sunstone"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Montanha de arenito na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Monte Roraima, na fronteira do Brasil com a Venezuela e a Guiana, é um tepui. Qual é o formato típico desse tipo de montanha?",
    "resposta": "Topo plano, como uma mesa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Roraima",
      "https://en.wikipedia.org/wiki/Tepui"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Roraima",
        "situacao": "ok",
        "texto": "Mount Roraima (Spanish: Monte Roraima; Tepuy Roraima; Cerro Roraima; Portuguese: Monte Roraima) is the highest of the Pacaraima chain of tepuis (table-top mountain) or plateaux in South America. It is located at the junction of Brazil, Guyana and Venezuela. A characteristic, large, flat-topped mountain surrounded by cliffs 400–1,000 m (1,300–3,300 ft) high, its highest point is located on the sout\n[…]\nMount Roraima is located in the Pacaraima Mountains in the eastern part of the Guiana Highlands, in northern South America. Its area is shared among three countries: Brazil to the east (5%), Guyana to the north (10%), and Venezuela to the south and west (85%). Access to Mount Roraima from the Venezuelan side is close to the road and relatively easy; however, for both Brazil and Guyana the area is completely isolated and can be reached only by a few days of forest hikes or small local airstrip.\n[…]\nIn 1840, the British government commissioned him to establish the boundaries between British Guiana and Venezuela. When he returned to the area in 1844 to study the local flora, he reported that the peak seemed inaccessible due to its towering cliffs. In 1864, German naturalist and botanist Carl Ferdinand Appun and British geologist Charles Barrington Brown arrived at the southeastern tip of Mount Roraima for observation and proposed to go up the mountain by hot air balloon.\n[…]\nAlthough its vertical cliffs make access very difficult, Mount Roraima was the first large mesa to be climbed in the Guyana Plateau. Henry Whiteley, who studied the birds of the area, observed that the summit could be reached from the south with the help of ropes and ladders.\n[…]\n\"Mount Roraima information\". mountroraima.net.\n[…]\n\"Mount Roraima\". SummitPost.org.\n[…]\n\"Mount Roraima guide\". explorationjunkie.com.\n[…]\n\"Mount Roraima interesting facts\". ospreyexpeditions.com. 2022."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tepui",
        "situacao": "ok",
        "texto": "A tepui (), or tepuy (Spanish: [teˈpuj]), is a member of a family of table-top mountains or mesas found in northern South America, especially in Venezuela, western Guyana, and northern Brazil. The word tepui means \"house of the gods\" in the native tongue of the Pemon, the indigenous people who inhabit the Gran Sabana.\n[…]\nthe Eastern Pantepui District is located east of the Caroni River in eastern Venezuela, western Guyana, and Roraima state of northern Brazil. It includes Mount Roraima, Auyan-tepui, and the Pacaraima Mountains. They are drained by the Caroni River, the Mazaruni and Essequibo rivers of Guyana, and the Rio Branco of Brazil.\n[…]\nMany tepuis are in the Canaima National Park in Venezuela, which has been classified as a World Heritage Site by UNESCO.\n[…]\nMount Roraima, also known as Roraima Tepui. A report by South American researcher Robert Schomburgk inspired the Scottish author Arthur Conan Doyle to write his novel The Lost World about the discovery of a living prehistoric world full of dinosaurs and other primordial creatures. The borders of Venezuela, Brazil, and Guyana meet on the top.\n[…]\nMatawi Tepui, also known as Kukenán, because it is the source of the Kukenán River, is considered the \"place of the dead\" by the local Pemon peoples. It is located next to Mount Roraima in Venezuela.\n[…]\nAutana Tepui stands 1,300 m (4,300 ft) above the forest floor. A unique cave runs from one side of the mountain to the other.\n[…]\nIlú-Tramen Massif is the most northerly mountain in the chain that stretches along the Venezuelan-Guyana border from Roraima in the south.\n[…]\nTafelberg in central Suriname is the easternmost tepui.\n[…]\nCanaima National Park – National park in Venezuela\n[…]\nNational Geographic Magazine, May 1989, \"Venezuela's Islands in Time,\" pp. 526–561\n[…]\nMongabay.com – pictures from Tepuis in Venezuela."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Roraima",
        "situacao": "ok",
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nO monte Roraima é um tepui, um tipo de platô cercado por falésias, típico do planalto das Guianas. A montanha tem formato de arco no sentido norte-sul-leste-oeste com um estreitamento central causado pela presença de um grande circo natural em seu flanco noroeste.\n[…]\nSeguindo a nordeste a partir das florestas da então Guiana Inglesa, Schomburgk teria sido o primeiro a avistar a montanha, durante uma expedição patrocinada pela Royal Geographical Society. Em 1845, ele retornaria à região para estudar a flora local, assinalando que o topo do monte parecia inacessível devido às suas altas falésias. Outra expedição semelhante foi realizada em 1864 pelo naturalista e botânico alemão Carl Ferdinand Appun.\n[…]\nDevido à descoberta e exploração tardias o monte Roraima só passou a ser considerado o ponto culminante do planalto das Guianas em 1931, quando uma comissão multinacional esteve no local para determinar a localização exata da tríplice fronteira entre Brasil, Guiana e Venezuela. As falésias ao norte ao nível da \"proa\" foram escaladas em 1973 pelos alpinistas britânicos Mo Anthoine, Joe Brown, Don Whillans e Hamish MacInnes.\n[…]\nNa Venezuela, o maciço do monte Roraima está inserido no Parque Nacional Canaíma, uma das maiores áreas de conservação da América Latina com mais de três milhões de hectares de extensão. No parque, que é declarado patrimônio da humanidade pela UNESCO, o monte Roraima é só mais um dos vários tepuis, montanhas em formato de mesa.\n[…]\nGuia de Mídia cidades do Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Onda S",
      "descricao": "Tipo de onda sísmica de cisalhamento, mais lenta que a onda P, que se propaga apenas em sólidos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos terremotos, as chamadas ondas S, ou secundárias, não conseguem atravessar que tipo de material?",
    "resposta": "Líquidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/S_wave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/S_wave",
        "situacao": "ok",
        "texto": "In solid mechanics, S waves, secondary waves, or shear waves (sometimes called elastic S waves) are a type of elastic wave and are one of the two main types of elastic body waves, so named because they move through the body of an object, unlike surface waves.\n[…]\nS waves are transverse waves, meaning that the direction of particle movement of an S wave is perpendicular to the direction of wave propagation, and the main restoring force comes from shear stress. Therefore, S waves cannot propagate in liquids with zero (or very low) viscosity; however, they may propagate in liquids with high viscosity. Similarly, S waves cannot travel through gases.\n[…]\nThey can still propagate through the solid inner core: when a P wave strikes the boundary of molten and solid cores at an oblique angle, S waves will form and propagate in the solid medium. When these S waves hit the boundary again at an oblique angle, they will in turn create P waves that propagate through the liquid medium. This property allows seismologists to determine some physical properties of the Earth's inner core.\n[…]\nis the frequency dependent phase velocity. One common approach to describing the shear modulus in viscoelastic materials is through the Voigt Model which states:\n[…]\nis the stiffness of the material and\n[…]\nMagnetic resonance elastography (MRE) is a method for studying the properties of biological materials in living organisms by propagating shear waves at desired frequencies throughout the desired organic tissue. This method uses a vibrator to send the shear waves into the tissue and magnetic resonance imaging to view the response in the tissue. The measured wave speed and wavelengths are then measured to determine elastic properties such as the shear modulus."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Tsunami",
      "descricao": "Série de ondas oceânicas gigantes provocadas por deslocamento súbito de água, em geral por terremotos submarinos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em mar aberto, onde quase não se nota, um tsunami pode viajar tão rápido quanto qual meio de transporte?",
    "resposta": "Um avião a jato",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tsunami"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tsunami",
        "situacao": "ok",
        "texto": "A tsunami ( (t)soo-NAH-mee, (t)suu-; from Japanese: 津波, lit. 'harbour wave', pronounced [tsɯnami]) is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake. Earthquakes, volcanic eruptions, underwater explosions, landslides, glacier calvings, meteorite impacts and other disturbances above or below water all have the potential\n[…]\nPhilippines warned to prepare for Japan's tsunami, Noypi.ph\n[…]\nKristy F. Tiampo: Earthquakes: simulations, sources and tsunamis. Birkhäuser, Basel 2008, ISBN 978-3-7643-8756-3.\n[…]\nLinda Maria Koldau: Tsunamis. Entstehung, Geschichte, Prävention, (Tsunami development, history and prevention) C.H. Beck, Munich 2013 (C.H. Beck Reihe Wissen 2770), ISBN 978-3-406-64656-0 (in German).\n[…]\nWalter C. Dudley, Min Lee: Tsunami! University of Hawaii Press, 1988, 1998, Tsunami! University of Hawaiʻi Press 1999, ISBN 0-8248-1125-9, ISBN 978-0-8248-1969-9.\n[…]\nHarvey Segur, Anjan Kundu,  Tsunami and Nonlinear Waves, Springer-Verlag Berlin Heidelberg, 2007 ISBN 978-3-540-71255-8\n[…]\nTsunami alert page (in English) from Japan Meteorological Agency\n[…]\nCaribbean Tsunami Information Centre (CTIC)\n[…]\nRecent and Historical Tsunami Events and Relevant Data – Pacific Marine Environmental Laboratory\n[…]\nIOC Tsunami Glossary – International Tsunami Information Center (UNESCO)\n[…]\nTsunami Data and Information – National Centers for Environmental Information\n[…]\nWorld's Tallest Tsunami – geology.com\n[…]\nTsunami & Earthquake Research at the USGS Archived 2005-05-21 at the Wayback Machine – United States Geological Survey\n[…]\nAlaska's near‑record landslide tsunami sent a wave 1,580 feet up the fjord walls – and left clues for building a warning system. A cruise ship visited Tracy Arm the night before! The Conversation (website), May 6, 2026\n[…]\nRaw Video: Tsunami Slams Northeast Japan – Associated Press\n[…]\nTsunami animation – Geoscience Australia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tsun%C3%A2mi",
        "situacao": "ok",
        "texto": "Tsunâmi (em japonês: 津波 AFI: [t͡sɯᵝnämi], lit. \"onda de porto\") ou maremoto (do latim: mare, mar + motus, movimento) é uma série de ondas de água causada pelo deslocamento de um grande volume de um corpo de água, como um oceano ou um grande lago. Tsunâmis são uma ocorrência frequente no oceano Pacífico: aproximadamente 195 eventos desse tipo já foram registrados. Devido aos imensos volumes de água\n[…]\nEssa onda pode viajar a mais de 800 km/h, mas devido ao seu grande comprimento de onda, seu período (intervalo de tempo entre a passagem de uma crista e outra no mesmo local) pode durar de 20 a 30 minutos, e a amplitude de onda pode não passar de um metro.\n[…]\nPesquisadores em 2017 descobriram que o movimento horizontal do fundo do mar inclinado durante um terremoto subaquático pode dar a tsunâmis um impulso crítico. Os cientistas assumiam anteriormente que o movimento vertical sozinho contribuía com a maior parte da energia de um tsunâmi.\n[…]\nA presença precoce (60 minutos antes da chegada do tsunâmi) de TIDs na ionosfera a 10° à frente da frente da onda do tsunâmi os torna um importante observável para a detecção de tsunâmi no campo distante. Pode complementar os sistemas de alerta precoce de tsunâmi existentes a um custo baixo.\n[…]\nAlguns zoólogos levantam a hipótese de que algumas espécies de animais têm a capacidade de sentir as ondas subsônicas de Rayleigh de um terremoto ou tsunâmi. Se correto, monitorar seu comportamento pode fornecer um aviso prévio de terremotos e tsunâmis. No entanto, as evidências são controversas e não são amplamente aceitas. Existem afirmações infundadas sobre o terremoto de Lisboa de que alguns animais escaparam para terras mais altas, enquanto muitos outros animais nas mesmas áreas se afogaram.\n[…]\nOs tsunâmis de origem vulcânica ou tectónica podem ser previstos pelos institutos sismológicos e o seu avanço pode ser monitorizado por satélites.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Dorsal Mesoatlântica",
      "descricao": "Cadeia de montanhas submarinas no meio do oceano Atlântico, onde placas tectônicas se afastam."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na dorsal mesoatlântica, as placas se afastam alguns centímetros por ano, mais ou menos no ritmo em que cresce qual parte do nosso corpo?",
    "resposta": "As unhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mid-Atlantic_Ridge",
      "https://en.wikipedia.org/wiki/Plate_tectonics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mid-Atlantic_Ridge",
        "situacao": "ok",
        "texto": "The Mid-Atlantic Ridge is a mid-ocean ridge (a divergent or constructive plate boundary) located along the floor of the Atlantic Ocean, and part of the longest mountain range in the world. In the North Atlantic, the ridge separates  North America from the Eurasian plate and the African plate, north and south of the Azores triple junction. In the South Atlantic, it separates the African and South A\n[…]\nThe ridge extends from a junction with the Gakkel Ridge (Mid-Arctic Ridge) northeast of Greenland southward to the Bouvet triple junction in the South Atlantic. Although the Mid-Atlantic Ridge is mostly an underwater feature, portions of it have enough elevation to extend above sea level, for example in Iceland. The ridge has an average spreading rate of about 2.5 centimetres (1 in) per year."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Plate_tectonics",
        "situacao": "ok",
        "texto": "Plate tectonics (from Latin  tectonicus, from Ancient Greek  τεκτονικός (tektonikós) 'pertaining to building') is the scientific theory that Earth's lithosphere comprises a number of large tectonic plates, which have been slowly moving since 3–4 billion years ago. The model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. Plate tectonics c"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dorsal_Mesoatl%C3%A2ntica",
        "situacao": "ok",
        "texto": "A Crista Média-Atlântica, também denominada por Dorsal Mesoatlântica, Cordilheira Mesoatlântica, ou Crista Oceânica do Atlântico, referida pela sigla CMA ou DMA (ou MAR, do inglês: Mid-Atlantic Ridge), é uma cordilheira submarina que se estende sob o Oceano Atlântico e o Oceano Ártico, desde a latitude 87°N até à ilha subantártica de Bouvet, à latitude 54°S.\n[…]\nOs pontos mais elevados desta cordilheira são os que emergem em vários locais formando ilhas oceânicas e subsequentemente os imersos montes submarinos.\n[…]\nA Crista Média-Atlântica faz parte do sistema global de dorsais oceânicas e, como é o caso de todas as dorsais oceânicas, a sua formação deve-se a um limite divergente entre placas tectónicas oceânicas: a placa Norte-Americana e a placa Euroasiática e a placa Africana, no Atlântico Norte e a placa Sul-Americana e a placa Africana no Atlântico Sul.\n[…]\nEstas placas encontram-se em movimento, e por isso o Atlântico encontra-se em expansão ao longo desta dorsal, ao ritmo de 2 a 10 cm por ano. Esta dorsal foi descoberta na década de 1950 por Bruce Heezen e Marie Tharp. Essa descoberta levou à formulação da teoria de expansão do fundo oceânico e à aceitação da teoria de deriva continental de Alfred Wegener.\n[…]\nPróximo da equador é cortada, pela fossa Romanche, em Dorsal do Atlântico Norte e Dorsal do Atlântico Sul. Alguns segmentos da dorsal podem adquirir nomes específicos, como é o caso do Segmento FAMOUS e da Dorsal de Reykjanes, a sul da península islandesa com o mesmo nome.\n[…]\nEstende-se por cerca de 11 300 km e na sua maior parte encontra-se submersa, mas ergue-se até à superfície, entre outros locais, na Islândia, na Ilha de Ascensão e nos Açores, onde se situa um dos seus pontos mais elevados, a Ponta do Pico na Ilha do Pico, com 2.351 metros de altitude.\n[…]\nDorsal oceânica\n[…]\nTectónica de placas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Areias monazíticas de Guarapari",
      "descricao": "Areias escuras de praias de Guarapari, no Espírito Santo, ricas no mineral monazita."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "As areias escuras de algumas praias de Guarapari, no Espírito Santo, ficaram famosas por qual propriedade incomum?",
    "resposta": "Radioatividade natural",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guarapari",
      "https://en.wikipedia.org/wiki/Monazite"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guarapari",
        "situacao": "ok",
        "texto": "Guarapari é um município brasileiro no litoral do estado do Espírito Santo, Região Sudeste do país. Localiza-se na Região Metropolitana de Vitória, estando situado a cerca de 50 km a sul da capital capixaba. Ocupa uma área de aproximadamente 590 km², sendo que 33 km² estão em área urbana, e sua população foi estimada em 137 659 habitantes em julho de 2026, sendo então o sétimo mais populoso do est\n[…]\nGuarapari é um destino turístico popular, sendo conhecido por suas praias, como a de Meaípe, famosa pelo alto nível de radioatividade natural de sua areia e suas qualidades terapêuticas.\n[…]\nRadioatividade natural\n[…]\nAs praias de Guarapari são famosas por possuírem um nível alto de radioatividade natural, proveniente das chamadas areias monazíticas, ricas nos elementos urânio e tório. Em alguns pontos das praias foram registradas leituras de até  20μSv/h (175 mSv por ano), uma dose equivalente à que seria recebida ao se tirar uma radiografia de tórax a cada cinco horas.\n[…]\nParque Natural Municipal Morro da Pescaria\n[…]\nGuarapari é um dos principais destinos turísticos do Espírito Santo, conhecida por seu litoral, suas praias urbanas e áreas naturais. Segundo a Prefeitura Municipal, o município possui mais de 50 praias, incluindo locais como a Praia do Morro, a Praia da Areia Preta, Meaípe, Setiba, Enseada Azul e outras praias distribuídas ao longo da costa.\n[…]\nO conjunto formado por estas praias é um dos principais cartões postais de Guarapari. Com faixas rajadas de marrom e amarelo de areia monazítica, pedras enormes intercalam-se com arrecifes, formando piscinas naturais. Durante a maré baixa, as crianças podem observar os peixes que ficam nestas piscinas. A água é transparente e tranquila. Na \"pedra da Paquera\", na ponta da praia do Meio, localiza-se o Clube Siribeira. Os turistas desfilam no largo calçadão sombreado pelas castanheiras.\n[…]\nNaturais de Guarapari\n[…]\nLista de municípios do Espírito Santo"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Monazite",
        "situacao": "ok",
        "texto": "Monazite is a primarily reddish-brown phosphate mineral that contains rare-earth elements. Due to variability in composition, monazite is considered a group of minerals. The most common species of the group is monazite-(Ce), that is, the cerium-dominant member of the group.\n[…]\nMonazite was the only significant source of commercial lanthanides, but because of concern over the disposal of the radioactive daughter products of thorium, bastnäsite came to displace monazite in the production of lanthanides in the 1960s due to its much lower thorium content. Increased interest in thorium for nuclear energy may bring monazite back into commercial use.\n[…]\nOne study done at Oak Ridge National Laboratory in Tennessee the performance of synthetic monazite to borosilicate glass in radioactive waste management is compared. This experiment involved synthetic monazite and borosilicate glass being soaked in a contaminated simulated Savannah River defense wastes for 28 days, during the time period the leaching rates from both materials were measured.\n[…]\nThe results show that the synthetic monazite is a far more effective material for containing radioactive waste due to its low leaching rates and slow corrosion rate.\n[…]\nIn a second study natural monazite is found to have an enhanced ability to deal with radiation byproducts due the property of radiation \"resistance\" as it is able to remain crystalline after being subjected to high amounts of alpha-decay radiation and becoming amorphized. Due to this high durability, it is seen as a better alternative for hosting materials such as radioactive strontium than other tested minerals.\n[…]\nSynthetic monazite is also shown to have similar durability to that of the natural crystalline samples after it becomes fully amorphized.\n[…]\nMonazite"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Amianto",
      "descricao": "Grupo de minerais fibrosos, também chamado asbesto, usado em telhas e isolantes e associado ao câncer."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Desde a Antiguidade, os panos tecidos com amianto, um mineral fibroso, impressionavam por qual propriedade?",
    "resposta": "Não pegavam fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Asbestos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Asbestos",
        "situacao": "ok",
        "texto": "Asbestos or asbestus ( ass-BES-təs, az-, -⁠toss) is a group of naturally occurring, fibrous silicate minerals that have been used for thousands of years to create flexible fire-resistant objects, such as fireproof fabrics. It is toxic and carcinogenic.\n[…]\nThe first diagnosis of asbestosis was made in the UK in 1924. Nellie Kershaw was employed at Turner Brothers Asbestos in Rochdale, Greater Manchester, England, from 1917, spinning raw asbestos fibre into yarn. Her death in 1924 led to a formal inquest. Pathologist William Edmund Cooke testified that his examination of the lungs indicated old scarring indicative of a previous, healed tuberculosis infection, and extensive fibrosis, in which were visible \"particles of mineral matter ...\n[…]\nThe potential for the use of asbestos to mitigate climate change has been raised. Although the adverse aspects of mining minerals, including health effects, must be taken into account, exploration of the use of mineral wastes to sequester carbon is being studied.\n[…]\nThe Assistant Secretary for Mine Safety and Health subsequently wrote to the news reporter, stating that \"In fact, the abbreviation ND (non-detect) in the laboratory report – indicates no asbestos fibers actually were found in the samples.\" Multiple studies by mineral chemists, cell biologists, and toxicologists between 1970 and 2000 found neither samples of asbestos in talc products nor symptoms of asbestos exposure among workers dealing with talc, but more recent work has rejected these conclusions in favor of \"same as\" asbestos risk.\n[…]\nTweedale, Geoffrey (2000). Magic Mineral to Killer Dust Turner & Newall and the Asbestos Hazard. Oxford Univ. Press. p. 336. ISBN 978-0-19-829690-4.\n[…]\nusgs.gov (Mineral Commodity Summaries 2025): Asbestos"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Amianto",
        "situacao": "ok",
        "texto": "O asbesto (da palavra grega ἀσβεστος, \"indestrutível\", \"imortal\", \"inextinguível\") ou amianto (do grego αμίαντος, \"puro\", \"sem sujidade\", \"sem mácula\") é uma designação comercial genérica para a variedade fibrosa de sais minerais metamórficos de ocorrência natural e utilizados em vários produtos comerciais. Trata-se de um material com grande flexibilidade e resistências química, térmica, eléctrica\n[…]\nOs minerais asbestiformes, dos quais fibras de amianto podem ser extraídas, podem ser classificados em dois grupos:\n[…]\nAs fibras de crisótilo são enroladas enquanto que as fibras de amianto de anfíbolas são cilíndricas. Os vários minerais do grupo das anfíbolas diferem uns dos outros nos teores de cálcio, magnésio, sódio e ferro neles contidos. Tanto os minerais do grupo da serpentina como os do grupo das anfíbolas ocorrem em variedades fibrosas e não fibrosas, sendo as variedades fibrosas designadas amianto. Têm sido identificadas variedades asbestiformes de várias outras anfíbolas.\n[…]\nUsado na antiguidade em mechas de lanternas, a resistência do amianto ao fogo é desde há muito aproveitada para uma variedade de propósitos. Foi utilizado em tecidos mortuários no antigo Egito bem como para fazer uma toalha de mesa para Carlos Magno, que de acordo com a lenda este atirou ao fogo para a limpar.\n[…]\nO crisótilo é o mineral mais utilizado na produção de amianto. As suas aplicações são inúmeras incluindo:\n[…]\nrevestimentos à prova de fogo\n[…]\nvestimentas de proteção à prova de fogo\n[…]\nO Canadá proíbe o uso do amianto no próprio país e é um dos maiores exportadores mundiais do produto, juntamente com a Rússia; seus maiores clientes são países em desenvolvimento.\n[…]\nNa América do Sul o uso do amianto é proibido na Argentina, no Chile, no Uruguai, na Colômbia (desde 2011) e no Brasil.\n[…]\nAsbesto-cimento\n[…]\n«O amianto no mundo» (em francês)\n[…]\nA maldição do amianto. Por Eliane Brum. El País, 6 de janeiro de 2014.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Grafite",
      "descricao": "Mineral macio e escuro formado por carbono em camadas, usado na ponta dos lápis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o mineral grafite, macio e escuro, e o diamante, duríssimo e transparente, têm em comum?",
    "resposta": "São formados só de carbono",
    "fonte": [
      "https://en.wikipedia.org/wiki/Graphite",
      "https://en.wikipedia.org/wiki/Diamond"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Graphite",
        "situacao": "ok",
        "texto": "Graphite () is a crystalline allotrope (form) of the element carbon. It consists of many stacked layers of graphene, typically in excess of hundreds of layers. Graphite occurs naturally and is the most stable form of carbon under standard conditions.\n[…]\nGraphite occurs in metamorphic rocks as a result of the reduction of sedimentary carbon compounds during metamorphism. It also occurs in igneous rocks and in meteorites. Minerals associated with graphite include quartz, calcite, micas and tourmaline. The principal export sources of mined graphite are, in order of tonnage, China, Mexico, Canada, Brazil, and Madagascar. Significant unexploited graphite resources also exist in Colombia's Cordillera Central in the form of graphite-bearing schists.\n[…]\nPyrolytic graphite and pyrolytic carbon are often confused but are very different materials.)\n[…]\nHigh-purity monolithics are often used as a continuous furnace lining instead of carbon-magnesite bricks.\n[…]\nThe exfoliation process for bulk graphite, which involves separating the carbon layers within graphite, has been extensively studied between 2012 and 2021. Specifically, ultrasonic and thermal exfoliation have been the two most popular approaches worldwide, with 4,267 and 2,579 patent families, respectively, significantly more than for either the chemical or electrochemical alternatives.\n[…]\nCarbon brushes represent a long-explored graphite application area. There have been few inventions in this area over the last decade, with less than 300 patent families filed from 2012 to 2021, very significantly less than between 1992 and 2011.\n[…]\nLipson, H.; Stokes, A. R. (1942). \"A New Structure of Carbon\". Nature. 149 (3777): 328. Bibcode:1942Natur.149Q.328L. doi:10.1038/149328a0. S2CID 36502694."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Diamond",
        "situacao": "ok",
        "texto": "Diamond is a mineral form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. Diamond is a tasteless, odorless, strong, brittle solid, a poor conductor of electricity, colorless in pure form, and insoluble in water. Another solid form of carbon known as graphite is the chemically stable form of carbon at room temperature and pressure, but diamond is metastabl\n[…]\nIn order of increasing rarity, yellow diamond is followed by brown, colorless, then by blue, green, black, pink, orange, purple, and red. \"Black\", or carbonado, diamonds are not truly black, but rather contain numerous dark inclusions that give the gems their dark appearance. Colored diamonds contain impurities or structural defects that cause the coloration, while pure or nearly pure diamonds are transparent and colorless.\n[…]\nThey are a mixture of xenocrysts and xenoliths (minerals and rocks carried up from the lower crust and mantle), pieces of surface rock, altered minerals such as serpentine, and new minerals that crystallized during the eruption. The texture varies with depth. The composition forms a continuum with carbonatites, but the latter have too much oxygen for carbon to exist in a pure form. Instead, it is locked up in the mineral calcite (CaCO3).\n[…]\nDiamonds in the mantle form through a metasomatic process where a C–O–H–N–S fluid or melt dissolves minerals in a rock and replaces them with new minerals. (The vague term C–O–H–N–S is commonly used because the exact composition is not known.) Diamonds form from this fluid either by reduction of oxidized carbon (e.g., CO2 or CO3) or oxidation of a reduced phase such as methane.\n[…]\nDiamonds may exist in carbon-rich stars, particularly white dwarfs. One theory for the origin of carbonado, the toughest form of diamond, is that it originated in a white dwarf or supernova. Diamonds formed in stars may have been the first minerals."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grafite",
        "situacao": "ok",
        "texto": "Grafite (ou, raramente, grafita) é um mineral, um dos alótropos do carbono. Ao contrário do diamante, a grafite é um condutor elétrico. Por isso possui aplicações em eletrônica, como em eletrodos e baterias. Em razão do seu alto ponto de fusão, também possui aplicações como material refratário, como em cadinhos de fundição de aço. A grafite pode ser dissolvida em ácido clorossulfúrico.\n[…]\nA grafite corresponde a uma das quatro formas alotrópicas do carbono. As outras são o diamante, o fulereno e o grafeno.\n[…]\nOutra forma conhecida da grafite, é a pirolítica (ingl.: Highly ordered pyrolytic graphite or highly oriented pyrolytic graphite — HOPG), uma grafite artificial policristalina, obtida por pirólise de um gás contendo carbono, submetido a temperatura superior a 2 000 °C.\n[…]\nA grafite é um dos alótropos do carbono; é um condutor elétrico e pode ser usado, por exemplo, como os eletrodos de uma lâmpada elétrica de arco voltaico. Também é utilizada na fabricação de motores e peças eletrônicas.\n[…]\nA condutividade e outras características físicas da grafite, como plano de clivagem e características lubrificantes se devem ao arranjo dos átomos no material, formando estruturas em forma de folhas, atraídas por ligações fracas (forças de Van der Waals). Nas \"folhas\", os átomos estão organizados como hexágonos, à semelhança dos favos de uma colmeia, onde cada átomo de carbono ocupa um vértice. Como nesta estrutura cada carbono se liga a outros três átomos, \"sobra\" uma ligação para cada átomo.\n[…]\nA grafite pode ser natural ou sintética. A grafite natural é umas das formas alotrópicas do carbono encontradas na natureza, enquanto a sintética é produzida industrialmente com o uso de altas temperaturas e pressão, empregando-se matérias primas tais como o coque da hulha ou o antracito.\n[…]\ntraço é cinza escuro ou castanho escuro\n[…]\nFibra de carbono\n[…]\nDiamante\n[…]\nalótropo do carbono\n[…]\nTimcal Graphite & Carbon",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Período Devoniano",
      "descricao": "Período da Era Paleozoica, entre cerca de 419 e 359 milhões de anos atrás, conhecido como a idade dos peixes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que os nomes dos períodos geológicos Devoniano e Jurássico têm em comum?",
    "resposta": "Vêm de lugares da Europa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Devonian",
      "https://en.wikipedia.org/wiki/Jurassic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Devonian",
        "situacao": "ok",
        "texto": "The Devonian ( də-VOH-nee-ən, deh-) is a geologic period and system of the Paleozoic era during the Phanerozoic eon, spanning 60.7 million years from the end of the preceding Silurian period at 419.62 million years ago (Ma), to the beginning of the succeeding Carboniferous period at 358.86 Ma. It is the fourth period of both the Paleozoic and the Phanerozoic. It is named after Devon, South West En\n[…]\nThe period is named after Devon, a county in southwestern England, where a controversial argument in the 1830s over the age and structure of the rocks found throughout the county was resolved by adding the Devonian Period to the geological timescale. The Great Devonian Controversy was a lengthy debate between Roderick Murchison, Adam Sedgwick and Henry De la Beche over the naming of the period. Murchison and Sedgwick won the debate and named it the Devonian System.\n[…]\nHowever, other researchers have questioned whether this revolution existed at all; a 2018 study found that although the proportion of biodiversity constituted by nekton increased across the boundary between the Silurian and Devonian, it decreased across the span of the Devonian, particularly during the Pragian, and that the overall diversity of nektonic taxa did not increase significantly during the Devonian compared to during other geologic periods, and was in fact higher during the intervals spanning from the Wenlock to the Lochkovian and from the Carboniferous to the Permian.\n[…]\nThe moss forests and bacterial and algal mats of the Silurian were joined early in the period by primitive rooted plants that created the first stable soils and harbored arthropods like mites, scorpions, trigonotarbids and myriapods (although arthropods appeared on land much earlier than in the Early Devonian and the existence of fossils such as Protichnites suggest that amphibious arthropods may have appeared as early as the Cambrian)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jurassic",
        "situacao": "ok",
        "texto": "The Jurassic ( juurr-ASS-ik) is a geologic period and stratigraphic system that lasted about 58.3 million years, spanning from the end of the Triassic Period 201.4 Ma (million years ago) to the beginning of the Cretaceous Period, 143.1 Ma. The Jurassic constitutes the second and middle period of the Mesozoic Era as well as the eighth period of the Phanerozoic Eon and is named after the Jura Mounta\n[…]\nThe end of the Jurassic, however, has no clear, definitive boundary with the Cretaceous and is the only boundary between geological periods to remain formally undefined.\n[…]\nThe Jurassic Period is divided into three epochs: Early, Middle, and Late. Similarly, in stratigraphy, the Jurassic is divided into the Lower Jurassic, Middle Jurassic, and Upper Jurassic series. Geologists divide the rocks of the Jurassic into a stratigraphic set of units called stages, each formed during corresponding time intervals called ages.\n[…]\nHermit crabs also first appeared during the Jurassic, with the earliest known being Schobertella hoelderi from the late Hettangian of Germany. Early hermit crabs are associated with ammonite shells rather than those of gastropods. Glypheids, which today are only known from two species, reached their peak diversity during the Jurassic, with around 150 species out of a total fossil record of 250 known from the period.\n[…]\nThe end-Triassic extinction had a severe impact on bivalve diversity, though it had little impact on bivalve ecological diversity. The extinction was selective, having less of an impact on deep burrowers, but there is no evidence of a differential impact between surface-living (epifaunal) and burrowing (infaunal) bivalves. Bivalve family level diversity after the Early Jurassic was static, though genus diversity experienced a gradual increase throughout the period.\n[…]\n\"Jurassic\" . Encyclopædia Britannica. Vol. 15 (11th ed.). 1911. With map and table."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Devoniano",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Devoniano ou Devónico, é o período da era Paleozoica do éon Fanerozoico que está compreendido entre há 419,62 milhões e 358,86 milhões de anos, aproximadamente. O período Devoniano sucede o período Siluriano e precede o período Carbonífero, ambos de sua era. Divide-se nas épocas Devoniana Inferior, Devoniana Média e Devoniana Superior, da mais antiga para a mais rec\n[…]\nDurante o Devoniano ocorreu a proliferação dos peixes, que dominaram de vez os ambientes aquáticos, motivo pelo qual o Devoniano é conhecido como \"Era dos Peixes\"; Além dessa proliferação, surgem os primeiros peixes com mandíbula. Surgem também os primeiros tubarões e os placodermos assumem o trono no topo da cadeia alimentar, porém se extinguem no final do período. Além disso, é neste período que surgem os primeiros anfíbios.\n[…]\nOs graptólitos graptolóides extinguem-se e os trilobites iniciam sua decadência. Neste período também surgem as primeira formas de ammonoides, que só serão extintos no final do período Cretáceo, junto com os dinossauros. Com relação a vida terrestre, esta permanece dominada por artrópodes, dentre eles escorpiões e centopeias.\n[…]\nCom relação as plantas, é neste período que licopódios, samambaias e progimnospermas formam os primeiros bosques. Nestes bosques algumas samambaias arborescentes e árvores (como Archaeopteris e a classe Cladoxylopsida, por exemplo) podiam ultrapassar os 20 metros de altura. Muitas destas arvores já apresentavam madeira de verdade (lignina) em seus troncos.\n[…]\nGeologia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mar Morto",
      "descricao": "Lago salgado entre Israel, Cisjordânia e Jordânia, cuja margem é o ponto mais baixo em terra firme."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o Mar Morto e o lago Tanganica, na África, têm em comum quanto à origem geológica?",
    "resposta": "Ficam em vales de rifte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dead_Sea",
      "https://en.wikipedia.org/wiki/Lake_Tanganyika"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dead_Sea",
        "situacao": "ok",
        "texto": "The Dead Sea (Arabic: اَلْبَحْر الْمَيِّت, romanized: al-Baḥr al-Mayyit; or اَلْبَحْر الْمَيْت, al-Baḥr al-Mayt; Hebrew: יַם הַמֶּלַח, romanized: Yam hamMelaḥ), also known by other names, is a landlocked salt lake bordered by Jordan to the east, the West Bank to the west and Israel to the southwest. It lies in the endorheic basin of the Jordan Rift Valley, and its main tributary is the Jordan Rive\n[…]\nThere are two contending hypotheses about the origin of the low elevation of the Dead Sea. The older hypothesis is that the Dead Sea lies in a true rift zone, an extension of the Red Sea Rift, or even of the Great Rift Valley of eastern Africa. A more recent hypothesis is that the Dead Sea basin is a consequence of a \"step-over\" discontinuity along the Dead Sea Transform, creating an extension of the crust with consequent subsidence.\n[…]\nDuring the late Pliocene-early Pleistocene, what is now the valley of the Jordan River, Dead Sea, and the northern Wadi Arabah was repeatedly inundated by waters from the Mediterranean Sea. The waters formed in a narrow, crooked bay that is called by geologists the Sedom Lagoon, which was connected to the sea through what is now the Jezreel Valley. The floods of the valley came and went depending on long-scale changes in the tectonic and climatic conditions.\n[…]\nIn prehistoric times, great amounts of sediment collected on the floor of Lake Amora. The sediment was heavier than the salt deposits and squeezed the salt deposits upwards into what are now the Lisan Peninsula and Mount Sodom (on the southwest side of the lake). Geologists explain the effect in terms of a bucket of mud into which a large flat stone is placed, forcing the mud to creep up the sides of the bucket.\n[…]\nYehouda Enzel, et al., eds (2006) New Frontiers in Dead Sea Paleoenvironmental Research, Geological Society of America, ISBN 978-0-8137-2401-0"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Tanganyika",
        "situacao": "ok",
        "texto": "Lake Tanganyika ( TANG-gən-YEE-kə, -⁠gan-; Kirundi: Ikiyaga ca Tanganyika) is an African Great Lake. It is the world's second-largest freshwater lake by volume and the second deepest, in both cases after Lake Baikal in Siberia. It is the world's longest freshwater lake. It is also the 6th largest lake by area.\n[…]\nToday Lake Tanganyika is situated within the Albertine Rift, the western branch of the East African Rift, and is confined by the mountainous walls of the valley. It is the largest rift lake in Africa and the second-largest freshwater lake by volume in the world. It is the deepest lake in Africa and holds the greatest volume of fresh water on the continent, accounting for 16% of the world's available fresh water.\n[…]\nAlthough Lake Tanganyika has fewer cichlid species than Lakes Malawi or Victoria—which both have experienced relatively recent explosive species radiations (resulting in many closely related species)—, its cichlids are the most morphologically and genetically diverse. This is linked to the maturity of Tanganyika, as it is far older than the other lakes. Tanganyika has the largest number of endemic cichlid genera of all African lakes.\n[…]\nA unique evolutionary radiation in the lake is the 15 species of Mastacembelus spiny eels, all but one endemic to its basin. Although other African Great Lakes have Synodontis catfish, endemic catfish genera and Mastacembelus spiny eels, the relatively high diversity is unique to Tanganyika, which likely is related to its old age.\n[…]\nLake Tanganyika fish can be found exported throughout East Africa. Major commercial fishing began in the mid-1950s and has, together with global warming, had a heavy impact on the fish populations, causing significant declines. In 2016, it was estimated that the total catch was up to 200,000 tonnes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_Morto",
        "situacao": "ok",
        "texto": "O mar Morto (em hebraico:  ים המלח, transl. ; em árabe: البحر الميت, transl. ) é um lago de água salgada do Oriente Médio.\n[…]\nO mar Morto é um lago endorreico localizado no vale do rio Jordão, uma característica geográfica formada pela falha transformante do mar Morto. Este movimento lateral esquerdo em falha transformante fica ao longo de uma fronteira de placas tectônicas, entre a placa Africana e a placa Arábica. Ele corre entre a Falha Oriental da Anatólia na zona da Turquia e no extremo norte da fenda do mar Vermelho ao largo da ponta sul do Sinai.\n[…]\nSegundo J. H. Kurtz, o nome \"Montanhas de Abarim\" era comum a toda a cadeia de montanhas de Moabe ao longo de toda a costa oriental do Mar Morto, indo do Wady Ahsy até a latitude de Hesbom.\n[…]\nO mar Morto situa-se no final do rio Jordão. Ele foi criado pela fricção de duas placas tectônicas que formam a chamada fenda Sírio-Africana, uma espécie de rachadura enorme responsável, também, por terremotos na região. Quando a fenda foi criada, água salgada entrou pela fissura.\n[…]\nHá cerca de 18 mil anos, a ligação com o mar Mediterrâneo secou e a água salgada, sem ter para onde escoar, ficou depositada em uma enorme bacia. Com o tempo, o lago diminuiu com a evaporação da água e se transformou no mar Morto.\n[…]\nO historiador judeu Josefo identifica o mar Morto na proximidade geográfica da antiga cidade bíblica de Sodoma. No entanto, ele refere-se ao lago pelo seu nome grego, asfaltites.\n[…]\nMonitoramento do Mar Morto (em inglês) - Instituto Israelense de Oceanografia e Limnologia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas-d'água do rio Iguaçu, na fronteira entre o Brasil e a Argentina."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que as Cataratas do Iguaçu e a terra roxa dos cafezais têm em comum quanto à rocha?",
    "resposta": "O basalto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iguazu_Falls",
      "https://pt.wikipedia.org/wiki/Terra_roxa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; howe\n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nThe staircase character of the falls consists of a two-step waterfall formed by three layers of basalt. The steps are 35 and 40 metres (115 and 131 ft) in height. The columnar basalt rock sequences are part of the 1,000-metre-thick (3,300 ft) Serra Geral formation within the Paleozoic-Mesozoic Paraná Basin. The tops of these sequences are characterized by 8–10 m (26–33 ft) of highly resistant vesicular basalt and the contact between these layers controls the shape of the falls.\n[…]\nSome points in the cities of Foz do Iguaçu, Brazil, Puerto Iguazú, Argentina, and Ciudad del Este, Paraguay, have access to the Iguazu River, where the borders of all three nations may be seen, a popular tourist attraction for visitors to the three cities.\n[…]\nAerolíneas Argentinas has direct flights from Buenos Aires to Iguazu International Airport. Azul, GOL, and LATAM Brasil offer services from main Brazilian cities to Foz do Iguaçu. From Foz do Iguaçu airport, the park may be reached by taking a taxi or bus to the entrance of the park. Their park has an entrance fee on both sides. Once inside, free and frequent buses are provided to various points within the park.\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)\n[…]\n\"Iguazu Falls\". World Waterfall Database."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Terra_roxa",
        "situacao": "ok",
        "texto": "O latossolo roxo, também conhecido por terra roxa, é um tipo de solo avermelhado muito fértil, caracterizado por ser o resultado de milhões de anos de decomposição de rochas basálticas. Essas rochas basálticas, pertencentes à Formação Serra Geral, se originaram do maior derrame vulcânico que o planeta já presenciou, causado pela separação do antigo supercontinente Gondwana nos atuais continentes A\n[…]\nO nome \"terra roxa\" é um equívoco. Os imigrantes italianos que trabalhavam nas fazendas de café referiam-se ao solo pelo nome terra rossa, já que rosso em italiano significa \"vermelho\". Os brasileiros aportuguesaram o termo italiano, então, para \"terra roxa\".\n[…]\nO solo de \"terra roxa\" também existe na Argentina, onde é conhecida como tierra colorada (\"terra vermelha\"). Está bastante presente nas províncias de Misiones e Corrientes."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Citrino",
      "descricao": "Gema amarela a alaranjada, variedade do quartzo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a ametista roxa e o citrino amarelo têm em comum?",
    "resposta": "São variedades de quartzo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Citrino",
      "https://en.wikipedia.org/wiki/Quartz"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Citrino",
        "situacao": "ok",
        "texto": "Citrus é um género de plantas lenhosas com flores, do porte de árvores ou arbustos, muito conhecidas por produzirem frutos habitualmente designados por citrinos, como a laranja, o limão, a toranja, a lima, a tangerina, o pomelo, e a cidra. Existem muitas variedades e híbridos destas plantas, que têm sido domesticadas e exploradas comercialmente há muitos séculos pela humanidade (por povos originai\n[…]\nEtimologicamente, o nome do gênero Citrus vem do Latin, em que originalmente referia-se tanto ao limão (uma variedade de C. medica) quanto à conífera (Thuja). O termo latino derivou do grego antigo κέδρος (kédros), que era usado para o cedro do Líbano, possivelmente por uma semelhança sensorial aos cheiros e texturas das folhas e frutos.\n[…]\nBiogeograficamente, todos os Citrus são nativos de regiões tropicais e subtropicais da Ásia, Oceania, e nordestes e centro-oeste da Austrália. Por conta da antiguidade do processo de domesticação e a complexidade das variedades cultivadas, é bastante difícil de saber apontar quando e em quais circumstâncias teria ocorrido. Em suma, recentes evidências genéticas apontam para apenas três espécies: a tangerina, a cidra e o pomelo e talvez espécies do subgênero Papeda.\n[…]\nEstas espécies e variedades serão detalhadas mais adiante.\n[…]\nO Greening ou amarelão dos citros, considerada a doença mais devastadora para a citricultura em escala internacional, que é causada por bactérias intracelulares do grupo Candidatus Liberibacter spp.\n[…]\nOs citros também são atacados por diversas pragas, tais como a broca da laranjeira (Cratosomus flavofasciatus), diversas cochonilhas, a mosca branca, a mosca-das-frutas e muitos pulgões. Alguns destes insetos podem transmitir doenças, com destaque especial para diferentes espécies de Aphis spp. eToxoptera spp. que transmitem o CTV, e para os psilídeos como Diaphorina citri que transmitem o amarelão dos citros."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Quartz",
        "situacao": "ok",
        "texto": "Quartz is a hard mineral composed of silica (silicon dioxide). Its atoms are linked in a continuous framework of SiO4 silicon–oxygen tetrahedra, with each oxygen atom being shared between two tetrahedra, giving an overall chemical formula of SiO2. Therefore, quartz is classified structurally as a framework silicate mineral and compositionally as an oxide mineral. Quartz is the second most common m\n[…]\nPure quartz, traditionally called rock crystal or clear quartz, is colorless and transparent or translucent. Colored varieties of quartz are common and include citrine, rose quartz, amethyst, smoky quartz, milky quartz, and others. These color differentiations arise from the presence of impurities which change the molecular orbitals, causing some electronic transitions that absorb electromagnetic energy from the visible spectrum.\n[…]\nLechatelierite is an amorphous silica glass SiO2 which is formed by lightning strikes in quartz sand.\n[…]\nAlthough citrine occurs naturally, the majority is the result of heat-treating amethyst or smoky quartz. Carnelian has been heat-treated to deepen its color since prehistoric times. Because natural quartz is often twinned, synthetic quartz is produced for use in industry. Large, flawless single crystals are synthesized in an autoclave via the hydrothermal process. Like other crystals, quartz may be coated with metal vapors to give it an attractive sheen.\n[…]\nFused quartz\n[…]\nQuartz fiber\n[…]\nQuartz reef mining\n[…]\nQuartzolite\n[…]\nShocked quartz\n[…]\nQuartz varieties, properties, crystal morphology. Photos and illustrations\n[…]\n\"The Quartz Watch – Inventors\". The Lemelson Center, National Museum of American History, Smithsonian Institution. Archived from the original on 7 January 2009.\n[…]\nTerminology used to describe the characteristics of quartz crystals when used as oscillators\n[…]\nQuartz use as prehistoric stone tool raw material"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Hematita",
      "descricao": "Mineral de óxido de ferro, principal minério de ferro, de traço avermelhado."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Por causa do seu pó avermelhado, a hematita, minério de ferro, tem nome derivado da palavra grega para quê?",
    "resposta": "Sangue",
    "distratores": [
      "Fogo",
      "Ferrugem",
      "Vinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hematite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hematite",
        "situacao": "ok",
        "texto": "Hematite ( HE(E)M-ə-tyte), also spelled as haematite, is a common iron oxide compound with the formula Fe2O3 and is widely found in rocks and soils. Hematite crystals belong to the rhombohedral lattice system which is designated the alpha polymorph of Fe2O3. It has the same crystal structure as corundum (Al2O3) and ilmenite (FeTiO3). With this crystal structure geometry it forms a complete solid s\n[…]\nRich deposits of hematite have been found on the island of Elba that have been mined since the time of the Etruscans.\n[…]\nUnderground hematite mining is classified as a carcinogenic hazard to humans.\n[…]\nHematite has been sourced to make pigments since earlier origins of human pictorial depictions, such as on cave linings and other surfaces, and has been employed continually in artwork through the eras. In Roman times, the pigment obtained by finely grinding hematite was known as sil atticum. Other names for the mineral when used in painting include colcotar and caput mortuum.\n[…]\nIn Spanish, it is called almagre or almagra, from the Arabic al-maghrah, red earth, which passed into English and Portuguese. Other ancient names for the pigment include ochra hispanica, sil atticum antiquorum, and Spanish brown. It forms the basis for red, purple, and brown iron-oxide pigments, as well as being an important component of ochre, sienna, and umber pigments. The main producer of hematite for the pigment industry is India, followed distantly by Spain.\n[…]\nAs mentioned earlier, hematite is an important mineral for iron ore. The physical properties of hematite are also employed in the areas of medical equipment, shipping industries, and coal production. Having high density and capable as an effective barrier against X-ray passage, it often is incorporated into radiation shielding. As with other iron ores, it often is a component of ship ballasts because of its density and economy."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hematita",
        "situacao": "ok",
        "texto": "Hematita ou hematite, cuja fórmula é Fe2O3, é um óxido de ferro de ocorrência frequente em solos e rochas. Seu nome provém do vocábulo grego αἷμα \"haima\" referente a \"sangue\", devido a sua cor. A despeito de sua composição rica em ferro, a hematita apresenta resposta muito fraca a um campo magnético, uma de suas características.\n[…]\nEste oxigênio disponível passou a reagir com o ferro formando hematita, que se precipitou no fundo do leito oceânico e tornou-se as unidades de rochas que atualmente são denominadas formações de bandas ferríferas. Muito do depósito sedimentar ferrífero contém hematita e magnetita, assim como outros minerais de ferro associados.\n[…]\nA NASA, em 2004, realizou a descoberta de que a hematita é um dos minerais mais abundantes das rochas e da superfície de Marte. Esta abundância de hematita nas rochas de Marte e nos materiais superficiais conferem à paisagem uma coloração marrom avermelhada, justificando a razão do planeta aparentar cor vermelha no céu noturno. Esta é a origem da designação “Planeta Vermelho” para Marte.\n[…]\nAs formações de hematita são opacas, embora transparentes em suas arestas. A coloração varia de cinza-aço, podendo apresentar manchas iridescentes opacas a vermelho brilhante; ou branco a cinza-claro com tonalidade azulada, em luz refletida, com reflexos internos vermelhos e avermelhados.\n[…]\nA fina textura da hematita desempenha importante função como agente cimentante para a formação de agregados no solo. Em secções finas analisadas por microscópio eletrônico, observou-se nódulos, concreções e ferricretes, sugerindo que o efeito cimentante ocorre pelo crescimento de cristais de óxido de ferro entre as partículas da matriz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Geysir",
      "descricao": "Fonte termal com erupções de água quente no sudoeste da Islândia, que deu nome a todos os gêiseres."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra gêiser, usada no mundo todo, vem do nome de uma fonte de água quente de qual país?",
    "resposta": "Islândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Geysir",
      "https://en.wikipedia.org/wiki/Geyser"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Geysir",
        "situacao": "ok",
        "texto": "Geysir (Icelandic pronunciation: [ˈceiːsɪr̥] ), sometimes known as The Great Geysir, is a geyser in south-western Iceland, that geological studies suggest started forming about 1150 CE. The English word geyser (a periodically spouting hot spring) derives from Geysir. The name Geysir itself is derived from the Icelandic verb geysa (\"to go quickly forward\").\n[…]\nGeysir was officially protected by the Ministry for the Environment and Natural Resources on 17 June 2020.\n[…]\nJones, B.; Renaut, R.W.; Torfason, H.; Owen, R.B. (2007). \"The geological history of Geysir, Iceland: a tephrochronological approach to the dating of sinter\". Journal of the Geological Society. 164 (6): 1241–1252. doi:10.1144/0016-76492006-178.\n[…]\nJones, B.; Renaut, R.W. (2021). \"Multifaceted incremental growth of a geyser discharge apron – Evidence from Geysir, Haukadalur, Iceland\". Sedimentary Geology. 419 105905. doi:10.1016/j.sedgeo.2021.105905. ISSN 0037-0738.\n[…]\nStefánsson, R.; Guðmundsson, G.B.; Halldórsson, P. (2000). The two large earthquakes in the South Iceland seismic zone on June 17 and 21, 2000. Veðurstofa Íslands (PDF) (Report). Archived from the original (PDF) on 25 January 2022. Retrieved 3 February 2024.\n[…]\nWalter, T.R.; Jousset, P.; Allahbakhshi, M.; Witt, T.; Gudmundsson, M.T.; Hersir, G.P. (2020). \"Underwater and drone based photogrammetry reveals structural control at Geysir geothermal field in Iceland\". Journal of Volcanology and Geothermal Research. 391: 106282. Bibcode:2020JVGR..39106282W. doi:10.1016/j.jvolgeores.2018.01.010.\n[…]\nThe Great Geysir, Helgi Torfason of the Icelandic National Energy Authority, 1985 (no ISBN, but book available from the Geysir tourist center).\n[…]\nMedia related to Great Geysir at Wikimedia Commons\n[…]\nInformation and photos of Geysir and the geothermal area\n[…]\n\"Geysir\". Global Volcanism Program. Smithsonian Institution. Retrieved 25 June 2021."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Geyser",
        "situacao": "ok",
        "texto": "A geyser (, UK: ) is a spring with an intermittent water discharge ejected turbulently and accompanied by steam. The formation of geysers is fairly rare and is caused by particular hydrogeological conditions that exist only in a few places on Earth.\n[…]\nGeysers are fragile, and if conditions change, they may go dormant or extinct. Many have been destroyed simply by people throwing debris into them, while others have ceased to erupt due to dewatering by geothermal power plants. However, the Geysir in Iceland has had periods of activity and dormancy. During its long dormant periods, eruptions were sometimes artificially induced—often on special occasions—by the addition of surfactant soaps to the water.\n[…]\nThe Taupō Volcanic Zone is located on New Zealand's North Island. It is 350 kilometres (217 mi) long by 50 km wide (31 mi) and lies over a subduction zone in the Earth's crust. Mount Ruapehu marks its southwestern end, while the submarine Whakatāne seamount (85 km or 53 mi beyond Whakaari / White Island) is considered its northeastern limit. Many geysers in this zone were destroyed due to geothermal developments and a hydroelectric reservoir: only one geyser basin at Whakarewarewa remains.\n[…]\nTwo most prominent geysers of Iceland are located in Haukadalur. The Great Geysir, which first erupted in the 14th century, gave rise to the word geyser. By 1896, Geysir was almost dormant before an earthquake that year caused eruptions to begin again, occurring several times a day; but in 1916, eruptions all but ceased. Throughout much of the 20th century, eruptions did happen from time to time, usually following earthquakes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Geysir",
        "situacao": "ok",
        "texto": "Geysir (pronúncia em islandês: ​[ˈceiːsɪr̥] ()) é uma nascente vulcânica que ocasionalmente lança jatos intermitentes de água quente seguidos de colunas de vapor de água, situada a 85 km a leste de Reiquiavique, e localizada no vale de Haukadalur, no Círculo Dourado no sudoeste da Islândia. O nome desta fonte – Geysir – deriva da palavra islandesa geysa (”jorrar”) e deu origem ao termo português g\n[…]\nA 50 metros do Geysir, está um outro gêiser, muito mais ativo, o Strokkur.\n[…]\nIslândia\n[…]\nTurismo na Islândia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Vulcano (ilha)",
      "descricao": "Ilha vulcânica do arquipélago das Eólias, ao norte da Sicília, na Itália."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que deus romano do fogo e da forja deu nome a uma ilha italiana e, por meio dela, a todas as montanhas que expelem lava?",
    "resposta": "Vulcano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vulcano_(island)",
      "https://en.wikipedia.org/wiki/Volcano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vulcano_(island)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Volcano",
        "situacao": "ok",
        "texto": "A volcano is a vent or fissure in the crust of a planetary-mass object that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface. On Earth, volcanoes are most often found where tectonic plates are diverging or converging, and because most of Earth's plate boundaries are underwater, most volcanoes are found underwater.\n[…]\nThe word volcano (UK: ; US: ) originates from the early 17th century, derived from the Italian name Vulcano, a volcanic island in the Aeolian Islands of Italy, which in turn comes from the Latin name Volcānus or Vulcānus, referring to Vulcan, the god of fire in Roman mythology.\n[…]\nThe set of processes and phenomena involved in volcanic activity is called volcanism [early 19th century: from volcano + -ism]. The study of volcanism and volcanoes is called volcanology [mid-19th century: from volcano + -logy], sometimes spelled vulcanology.\n[…]\nVulcanian eruptions are characterized by yet higher viscosities and partial crystallization of magma, which is often intermediate in composition. Eruptions take the form of short-lived explosions for several hours, which destroy a central dome and eject large lava blocks and bombs. This is followed by an effusive phase that rebuilds the central dome. Vulcanian eruptions are named after Vulcano. Eruption columns from these eruptions do not exceed 20 kilometres (12 mi) in height.\n[…]\nIn 1650, René Descartes proposed the core of Earth was incandescent and, by 1785, the works of Decartes and others were synthesized into geology by James Hutton in his writings about igneous intrusions of magma. Competing views existed in the geology academic mainstream by 1828 based on the heat in centre of the earth being transmitted to the surface by accidental vents or lava being a heated expansive elastic fluid."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Cristal de rocha",
      "descricao": "Quartzo incolor e transparente, conhecido desde a Antiguidade."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os gregos antigos achavam que o quartzo transparente era uma forma de qual substância, e daí veio a palavra cristal?",
    "resposta": "Gelo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crystal",
      "https://en.wikipedia.org/wiki/Quartz"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crystal",
        "situacao": "ok",
        "texto": "A crystal or crystalline solid is a solid material whose constituents (such as atoms, molecules, or ions) are arranged in a highly ordered microscopic structure, forming a crystal lattice that extends in all directions. In addition, macroscopic single crystals are usually identifiable by their geometrical shape, consisting of flat faces with specific, characteristic orientations. The scientific st\n[…]\nOther rock crystals have formed out of precipitation from fluids, commonly water, to form druses or quartz veins. Evaporites such as halite, gypsum and some limestones have been deposited from aqueous solution, mostly owing to evaporation in arid climates.\n[…]\nIn addition, the same atoms may be able to form noncrystalline phases. For example, water can also form amorphous ice, while SiO2 can form both fused silica (an amorphous glass) and quartz (a crystal). Likewise, if a substance can form crystals, it can also form polycrystals.\n[…]\nSpecific industrial techniques to produce large single crystals (called boules) include the Czochralski process and the Bridgman technique. Other less exotic methods of crystallization may be used, depending on the physical properties of the substance, including hydrothermal synthesis, sublimation, or simply solvent-based crystallization.\n[…]\nWeak van der Waals forces also help hold together certain crystals, such as crystalline molecular solids, as well as the interlayer bonding in graphite. Substances such as fats, lipids and wax form molecular bonds because the large molecules do not pack as tightly as atomic bonds. This leads to crystals that are much softer and more easily pulled apart or broken. Common examples include chocolates, candles, or viruses.\n[…]\nHoward, J. Michael; Darcy Howard (Illustrator) (1998). \"Introduction to Crystallography and Mineral Crystal Systems\". Bob's Rock Shop. Archived from the original on 2006-08-26. Retrieved 2008-04-20."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Quartz",
        "situacao": "ok",
        "texto": "Quartz is a hard mineral composed of silica (silicon dioxide). Its atoms are linked in a continuous framework of SiO4 silicon–oxygen tetrahedra, with each oxygen atom being shared between two tetrahedra, giving an overall chemical formula of SiO2. Therefore, quartz is classified structurally as a framework silicate mineral and compositionally as an oxide mineral. Quartz is the second most common m\n[…]\nThe Ancient Greeks referred to quartz as κρύσταλλος (krustallos) meaning 'crystal', derived from the Ancient Greek κρύος (kruos) meaning 'icy cold', because some philosophers (including Theophrastus) believed the mineral to be a form of supercooled ice. Today, the term rock crystal is sometimes used as an alternative name for transparent, coarsely crystalline quartz.\n[…]\nPure quartz, traditionally called rock crystal or clear quartz, is colorless and transparent or translucent. Colored varieties of quartz are common and include citrine, rose quartz, amethyst, smoky quartz, milky quartz, and others. These color differentiations arise from the presence of impurities which change the molecular orbitals, causing some electronic transitions that absorb electromagnetic energy from the visible spectrum.\n[…]\nQuartz is the most common material identified as the mystical substance maban in Australian Aboriginal mythology. It is found regularly in passage tomb cemeteries in Europe in a burial context, such as Newgrange or Carrowmore in Ireland. Quartz was also used in prehistoric Ireland, as well as many other countries, for stone tools; both vein quartz and rock crystal were knapped as part of the lithic technology of prehistoric peoples.\n[…]\nQuartz reef mining\n[…]\nQuartzolite\n[…]\nShocked quartz\n[…]\nQuartz varieties, properties, crystal morphology. Photos and illustrations\n[…]\nTerminology used to describe the characteristics of quartz crystals when used as oscillators\n[…]\nQuartz use as prehistoric stone tool raw material"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristal",
        "situacao": "ok",
        "texto": "Um cristal é um sólido no qual os constituintes, sejam eles átomos, moléculas ou íons, estão organizados num padrão tridimensional bem definido, que se repete no espaço, formando uma estrutura com uma geometria específica.\n[…]\nCristal deriva da palavra em grego clássico: κρύσταλλος (krustallos) que quer dizer ao mesmo tempo \"gelo\" e \"quartzo\".\n[…]\nNa linguagem corrente e no comércio, a palavra cristal é utilizada para designar vidros de elevada transparência e qualidade, genericamente comercializados como cristais. Estes cristais de vidro não são mais do que vidro com um elevado teor de óxido de chumbo, os quais, como vidros que são, não têm estrutura cristalina, já que neles os átomos não apresentam qualquer forma de arranjo regular.\n[…]\nUm exemplo típico deste  processo é a formação de gelo: quando o movimento browniano induzido pelo calor é suficientemente pequeno para permitir que as moléculas de água se liguem de forma estável (em água pura aos 0º C), as ligações entre as zonas de polarização elétrica positiva e negativa das moléculas são imobilizadas por ligações de van der Waals (assim denominadas em homenagem a Johannes Diderik van der Waals), as quais as mantêm em posição.\n[…]\nNa natureza encontram-se cristais de formas muito diversificadas, dependentes da forma de arranjo das cargas eléctricas nos átomos ou moléculas que formam o cristal e das condições em que a cristalização se deu por exemplo a água, pode assumir múltiplas formas cristalinas em função da forma como o cristal se formou: a neve e um cubo de gelo são formas completamente distintas de cristais de água, com estrutura diferenciada em função das condições de cristalização.\n[…]\nMuseu virtual do cristal (em inglês).\n[…]\nCristal Decoração.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Ametista",
      "descricao": "Variedade roxa do quartzo, muito extraída no Rio Grande do Sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome ametista vem de uma palavra grega ligada a uma crença antiga sobre essa pedra roxa. O que essa palavra significa?",
    "resposta": "Não embriagado",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amethyst"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amethyst",
        "situacao": "ok",
        "texto": "Amethyst is a violet variety of natural quartz. Ancient Greeks wore amethyst and carved drinking vessels from it in the belief that it would prevent intoxication. Amethyst, a semiprecious stone, is often used in jewelry. It occurs mostly in association with calcite, quartz, smoky quartz, hematite, pyrite, fluorite, goethite, agate, and chalcedony.\n[…]\nAmethyst is also found and mined in South Korea. The large opencast amethyst vein at Maissau, Lower Austria, was historically important, but is no longer included among significant producers. Much fine amethyst comes from Russia, especially near Mursinka in the Sverdlovsk oblast, where it occurs in drusy cavities in granitic rocks. Amethyst was historically mined in many localities in south India, though these are no longer significant producers.\n[…]\nHumbled by Amethyste's desire to remain chaste, Bacchus poured wine over the stone as an offering, dyeing the crystals purple.\n[…]\nThe highest-grade amethyst (called deep Russian) is exceptionally rare. When one is found, its value is dependent on the demand of collectors; however, the highest-grade sapphires or rubies are still orders of magnitude more expensive than amethyst.\n[…]\nThe most suitable setting for gem amethyst is a prong or a bezel setting. The channel method must be used with caution.\n[…]\nAmethyst has a good hardness, and handling it with proper care will prevent any damage to the stone. Amethyst is sensitive to strong heat and may lose or change its colour when exposed to prolonged heat or light. Polishing the stone or cleaning it by ultrasonic or steamer must be done with caution.\n[…]\nKostov, R.I. (1992). Amethyst: A geological-mineralogical and gemmological essay (Report) (in Bulgarian). Sofia, Bulgaria: Union of Scientists in Bulgaria.\n[…]\nLieber, W. (1994). Amethyst: Geschichte, Eigenschaften, Fundorte. München, DE: Christian Weise Verlag."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ametista",
        "situacao": "ok",
        "texto": "A ametista é uma variedade violeta ou púrpura do quartzo, muito usada como ornamento. Tem valor 7 de dureza (em escala de Mohs). Diz-se que a origem de seu nome é do grego a, \"não\" e methuskein, \"intoxicar\", de acordo com a antiga crença de que esta rocha protegia seu dono da embriaguez. Entretanto, de acordo com o Rev. C. W. King, a palavra provavelmente é uma corruptela de um nome oriental da pe\n[…]\nA cor da ametista é roxa e atualmente é atribuída à presença de ferro bivalente (Fe2+), mas ela é capaz de ser alterada e até removida por aquecimento ou radiação ultravioleta.\n[…]\nA ametista é a pedra de nascimento associada a Janeiro e Fevereiro, e está associada aos signos de Peixes, Câncer, Áries, Capricórnio, Aquário (especialmente as variedades roxa e violeta) e Sagitário. É um símbolo de entendimento celeste, do pensamento pioneiro e da ação na filosofia, religião e planos espirituais e materiais.\n[…]\nAmarrada ao pulso esquerdo, a ametista, dizem, permite ao usuário ver o futuro nos sonhos. Ela repele pensamentos e ações malignos, dá um senso apurado para os negócios e previne contra a saúde ruim. A ametista atrai o amor e a boa sorte e ajuda a prevenir a embriaguez.\n[…]\nNa mitologia grega a cor roxa da Ametista é atribuída ao deus Dionísio, que, em uma história de paixão, derramou vinho sobre um cristal em sinal de arrependimento, transformando-o na pedra que conhecemos hoje.\n[…]\nA ametista é uma pedra muito durável e por isso é uma ótima escolha para o uso diário. Deve-se apenas tomar o cuidado de retirar a joia em atividades em que a pedra possa sofrer riscos (na verdade, pela dureza somente poderá ser riscada por topázio, safiras, diamantes, mas é necessário ter muitas joias assim). Ressalta-se que o risco maior e quebrá-la pelo impacto, ou se for um cristal de coleção, desfigurar a terminação das pirâmides hexagonais.\n[…]\nTomando-se este cuidado, a pedra estará sempre intacta.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Himalaia",
      "descricao": "Cordilheira da Ásia que separa o subcontinente indiano do planalto do Tibete."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Himalaia continua subindo por causa do choque da placa da Eurásia com qual outra placa tectônica?",
    "resposta": "Placa Indiana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Himalayas",
      "https://en.wikipedia.org/wiki/Indian_Plate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Himalayas",
        "situacao": "ok",
        "texto": "The Himalayas, or Himalaya, is a mountain range in Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the highest peaks on Earth, including the highest, Mount Everest. More than 100 peaks exceeding elevations of 7,200 metres (23,600 feet) above sea level lie in the Himalayas.\n[…]\nThe Himalayas were uplifted after the collision of the Indian tectonic plate with the Eurasian plate, specifically, by the folding, or nappe-formation of the uppermost Indian crust, even as a lower layer continued to push on into Tibet and add thickness to its plateau; the still lower crust, along with the mantle, however, subducted under Eurasia. The Himalayan mountain range runs west-northwest to east-southeast in an arc 2,400 km (1,500 mi) long.\n[…]\nDuring the India-Eurasia collision, two elongated protrusions located on either side of the northern border of the Indian continent generated areas of extreme deformation. A point where mountain ranges with different directions of extension, and thus formed by tectonic forces at varying angles, converge is called a syntaxis (Greek: convergence).\n[…]\nThe Himalayas have a profound effect on the climate of the Indian subcontinent and the Tibetan Plateau. They prevent frigid, dry winds from blowing south into the subcontinent, which keeps South Asia much warmer than corresponding temperate regions in the other continents. It also forms a barrier for the monsoon winds, keeping them from traveling northwards, and causing heavy rainfall in the Terai region.\n[…]\nGupta, Raj Kumar, Bibliography of the Himalayas, Gurgaon, Indian Documentation Service, 1981.\n[…]\nNandy, S.N., Dhyani, P.P. and Samal, P.K., Resource Information Database of the Indian Himalaya, Almora, GBPIHED, 2006.\n[…]\nBirth of the Himalaya\n[…]\nBiological diversity in the Himalayas Encyclopedia of Earth"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Indian_Plate",
        "situacao": "ok",
        "texto": "The Indian plate is a minor tectonic plate straddling the equator in the Indian Ocean. Originally a part of the ancient continent of Gondwana, the Indian plate broke away from the other fragments of Gondwana 100 million years ago and began moving north, carrying Insular India with it. It was once fused with the adjacent Australian plate to form a single Indo-Australian plate, but recent studies su\n[…]\nUntil roughly 140 million years ago, the Indian plate formed part of the supercontinent, Gondwana, together with modern Africa, Australia, Antarctica, and South America. Gondwana fragmented as these continents drifted apart at different velocities; a process which led to the opening of the Indian Ocean.\n[…]\nHowever, some authors suggest the collision between India and Eurasia occurred much later, around 35 million years ago. If the collision occurred between 55 and 50 Mya, the Indian plate would have covered a distance of 3,000 to 2,000 km (1,900–1,200 mi), moving more quickly than any other known plate.\n[…]\nNew paleomagnetic results of this critical time interval from southern Tibet do not support this Greater Indian Ocean basin hypothesis and the associated dual collision model.\n[…]\nThe Indian plate is currently moving north-east at five cm (2.0 in) per year, while the Eurasian plate is moving north at only two cm (0.79 in) per year. This is causing the Eurasian plate to deform, and the Indian plate to compress at a rate of four mm (0.16 in) per year.\n[…]\nThe westerly side of the Indian plate is a transform boundary with the Arabian plate called the Owen fracture zone, and a divergent boundary with the African plate called the Central Indian Ridge (CIR). The northerly side of the plate is a convergent boundary with the Eurasian plate forming the Himalaya and Hindu Kush mountains, called the Main Himalayan Thrust.\n[…]\nList of tectonic plates\n[…]\nMedia related to Indian tectonic plate at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Himalaias",
        "situacao": "ok",
        "texto": "Himalaias são a mais alta cadeia montanhosa do mundo, localizada entre a planície indo-gangética, ao sul, e o planalto tibetano, ao norte. A cordilheira abrange cinco países (Paquistão, Índia, China (região do Tibete), Nepal e Butão) e nela se situa a montanha mais alta do planeta, o Monte Everest. O nome Himalaia vem do sânscrito e significa \"morada da neve\".\n[…]\nA cordilheira himalaia consiste em três cadeias paralelas, que do sul para o norte, são o sub-Himalaia, os Pequenos Himalaias e os Grandes Himalaias. As montanhas começaram a se formar por dobras há 40 milhões de anos, quando o subcontinente indiano se projetou em direção ao norte contra a principal massa terrestre asiática.\n[…]\nOs Himalaias estão entre as formações montanhosas mais jovens do planeta. De acordo com a moderna teoria das placas tectônicas, sua formação é resultado de uma colisão continental, ou então do processo de orogenia (isto é, processo de formação de montanhas) entre os limites convergentes entre as placas Indo-australiana e da Eurásia. A colisão iniciou-se no Cretáceo Superior há cerca de 70 milhões de anos, quando a placa Indo-australiana se moveu rumo ao norte e colidiu com a placa da Eurásia.\n[…]\nO movimento da placa indiana em direção à placa eurasiática também faz esta região ser sismicamente ativa, induzindo terremotos periodicamente.\n[…]\nOs Himalaias têm um efeito profundo sobre o clima do subcontinente indiano e do planalto tibetano. Impedem que os ventos frios e secos do Ártico soprem no subcontinente, e mantêm o Sul da Ásia muito mais quente do que ocorre nas regiões temperadas de outros continentes. Por outro lado, constituem uma barreira para os ventos sazonais das monções, impedindo-os de seguir para norte, e provocando fortes chuvas na região do Terai.\n[…]\nHimalaias de Bengala\n[…]\n«Algumas montanhas dos Himalaias»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Formação Botucatu",
      "descricao": "Camada de arenito do sul da América do Sul que armazena grande parte da água do Aquífero Guarani."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O arenito Botucatu, que guarda boa parte da água do Aquífero Guarani, se formou a partir de quê?",
    "resposta": "Dunas de um deserto antigo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Forma%C3%A7%C3%A3o_Botucatu",
      "https://pt.wikipedia.org/wiki/Aqu%C3%ADfero_Guarani"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Forma%C3%A7%C3%A3o_Botucatu",
        "situacao": "ok",
        "texto": "A Formação Botucatu é uma formação geológica da Bacia do Paraná, resultado da grande desertificação do ainda continente Gondwana, o “deserto Botucatu”, semelhante ao deserto do Saara e com área superior a um milhão de km². Os extensos campos de dunas, depositados por ação eólica, formaram os espessos pacotes de arenitos que hoje constituem o importante Aqüífero Guarani.\n[…]\nDurante todo o Período Triássico, Jurássico e início do Cretáceo a região da atual Bacia do Paraná estava sob influência de clima desértico, dominada por campos de dunas do chamado deserto Botucatu. A partir do Período Jurássico, a plataforma continental foi reativada, fenômeno que está associado ao processo de ruptura do supercontinente Gondwana e à formação do Atlântico Sul.\n[…]\nO resultado da reativação da plataforma e rifteamento foi a ocorrência de dezenas de eventos de vulcanismo que, ao longo de milhares de anos, cobriram todo o deserto Botucatu, dando origem a Formação Serra Geral. Entretanto, a condição climática desértica continuou durante todo o período em que ocorreram as dezenas de eventos de vulcanismo fissural, fazendo com que os mesmos fossem sucedidos por deposições eólicas de duração variável.\n[…]\nO primeiro trabalho que determinou a direção dos ventos, à época da deposição dos arenitos da Formação Botucatu, foi o trabalho de Bigarella e Salamuni, em 1961, estudando as estratificações cruzadas de paleo-dunas em 51 afloramentos localizados no Brasil e no Uruguai.\n[…]\nEm 2023 foi confirmado o primeiro dinossauro da Formação Botucatu, que foi identificado por meio de pegadas (Icnofóssil). O dinossauro Farlowichnus rapidus, da subordem dos Terápodes, era um pequeno carnívoro, bem apto para sobreviver nos desertos da época.==Referências=="
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aqu%C3%ADfero_Guarani",
        "situacao": "ok",
        "texto": "Aquífero Guarani é um imenso aquífero que abrange partes dos territórios do Uruguai, Argentina,  Paraguai e, principalmente, Brasil, ocupando 1 200 000 km². O nome foi proposto em 1996 pelo geólogo uruguaio Danilo Anton. Na ocasião, ele chegou a ser considerado o maior do mundo: hoje, é considerado o segundo maior, capaz de abastecer a população brasileira durante 2 500 anos. A maior reserva atual\n[…]\nNomeado em homenagem ao povo guarani (que, até a chegada dos colonizadores de origem europeia, no século XVI, ocupava grande parte do território do aquífero), tem uma espessura média de 250 metros e um volume de aproximadamente 45 000 km³. A profundidade máxima é por volta de 1 500 metros, com uma capacidade de recarregamento de aproximadamente 160 km³ ao ano por precipitação. É dito que esta vasta reserva subterrânea pode fornecer água potável ao mundo por duzentos anos.\n[…]\nO Aquífero Guarani consiste primariamente de sedimentos arenosos que, depositados por processos eólicos durante o período Triássico (há aproximadamente 220 milhões de anos), foram retrabalhados pela ação química da água, pela temperatura e pela pressão e se transformaram em uma rocha sedimentar chamada arenito. Essa rocha é muito porosa e permeável e, assim, permite a acumulação de água no seu interior.\n[…]\nEm muitas áreas, a água não é potável, mas é ótima para estâncias turísticas de águas minerais e termais. A água de melhor qualidade do Aquífero Guarani em geral está nos bordos das áreas de afloramento do aquífero e seus arredores. As maiores áreas com água de boa qualidade ficam em São Paulo, Rio Grande do Sul, Mato Grosso do Sul e Paraguai.\n[…]\nAquífero Grande Amazônia\n[…]\nProjeto de Desenvolvimento Sustentável e Proteção Ambiental do Sistema Aquífero Guarani\n[…]\nViagem virtual ao Aquífero Guarani em Botucatu (SP)... - Carneiro C.D.R. 2007 - Instituto de Geociências da UNICAMP\n[…]\nA redescoberta do Aquífero Guarani"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Uluru",
      "descricao": "Grande monólito de arenito no centro da Austrália, sagrado para os aborígenes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O que dá ao Uluru, o grande monólito no centro da Austrália, a sua cor avermelhada?",
    "resposta": "Óxido de ferro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uluru"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (; Pitjantjatjara: Uluṟu [ˈʊlʊɻʊ]), also known as Ayers Rock ( AIRS) and officially gazetted as Uluru / Ayers Rock, is a large sandstone monolith. It crops out near the centre of Australia in the southern part of the Northern Territory, 335 km (208 mi) south-west of Alice Springs.\n[…]\nThe order of the dual names was officially reversed to \"Uluru / Ayers Rock\" on 6 November 2002 following a request from the Regional Tourism Association in Alice Springs.\n[…]\nWhile exploring the area in 1872, Giles sighted Kata Tjuta from a location near Kings Canyon and called it Mount Olga, while the following year Gosse observed Uluru and named it Ayers' Rock, in honour of the Chief Secretary of South Australia, Sir Henry Ayers.\n[…]\nIn 1958, the area that would become the Uluṟu-Kata Tjuṯa National Park was excised from the Petermann Reserve; it was placed under the management of the Northern Territory Reserves Board and named the Ayers Rock–Mount Olga National Park. The first ranger was Bill Harney, a well-recognised central Australian figure. By 1959, the first motel leases had been granted and Eddie Connellan had constructed an airstrip close to the northern side of Uluru.\n[…]\nThere are a number of differing accounts given, by outsiders, of Aboriginal ancestral stories for the origins of Uluru and its many cracks and fissures. One such account, taken from Robert Layton's (1989) Uluru: An Aboriginal history of Ayers Rock, reads as follows:\n[…]\nThe mulgara is mostly restricted to the transitional sand plain area, a narrow band of country that stretches from the vicinity of Uluru to the northern boundary of the park and into Ayers Rock Resort. This area also contains the marsupial mole, woma python and great desert skink.\n[…]\nIndigenous Australian art\n[…]\nUluru Statement from the Heart"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uluru",
        "situacao": "ok",
        "texto": "Uluru (também conhecido como Ayers Rock ou The Rock - \"a rocha\") é um monólito situado no norte da área central da Austrália, no Parque Nacional de Uluru-Kata Tjuta perto da pequena cidade de Yulara, 400 km a sudoeste de Alice Springs (25° 20′ 41″ S, 131° 02′ 07″ L).\n[…]\nÉ sagrada aos aborígenes e tem inúmeras fendas, cisternas (poços com água), cavernas rochosas e pinturas antigas. Ayers Rock era o nome dado a ela por colonos europeus, em homenagem ao primeiro-ministro da Austrália Meridional Henry Ayers. Uluru é o nome aborígene, e desde a década de 1980 foi o nome oficialmente escolhido, embora muitas pessoas, especialmente os não-australianos, ainda chamem de Ayers Rock.\n[…]\nEm 1985 o governo australiano devolveu a propriedade de Uluru aos aborígenes locais, os Anangu (aborígenes) arrendaram então de volta ao Governo Australiano pelo período de 99 anos como Parque Nacional.Escalar a pedra é uma atração popular para uma grande fração dos muitos turistas que visitam Ayers Rock a cada ano. Uma corda com alça torna a subida mais fácil, mas ainda é uma subida realmente longa e íngreme e muitos escaladores experientes desistem.\n[…]\nHá várias histórias de turistas que levaram para casa um pedaço do Monte Uluru e devolveram a lembrança alegando que a peça estaria atraindo má-sorte. Eles dizem que foram amaldiçoados por levar uma parte do monumento, considerado sagrado para os aborígenes. O parque nacional australiano, responsável pela administração do monte, diz receber cerca de um pacote por dia, enviado de várias partes do mundo, com uma amostra do Uluru e um pedido de desculpas.\n[…]\nMedia relacionados com Uluru no Wikimedia Commons\n[…]\nParque Nacional Uluṟu - Kata Tjuṯa - Departamento Australiano de Ambiente e Recursos Hídricos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Fulgurito",
      "descricao": "Tubo de vidro natural formado na areia ou no solo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os fulguritos são tubos ocos de vidro natural achados na areia. O que os forma?",
    "resposta": "Raios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fulgurite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fulgurite",
        "situacao": "ok",
        "texto": "Fulgurites (from Latin  fulgur 'lightning' and  -ite), commonly called \"fossilized lightning\", are natural tubes, clumps, or masses of sintered, vitrified, or fused soil, sand, rock, organic debris and other sediments that sometimes form when lightning discharges into ground. When composed of silica, fulgurites are classified as a variety of the mineraloid lechatelierite.\n[…]\nThe Yale University Peabody Museum of Natural History displays one of the longest known preserved fulgurites, approximately 4 m (13 ft) in length. Charles Darwin in The Voyage of the Beagle recorded that tubes such as these found in Drigg, Cumberland, UK reached a length of 9.1 m (30 ft).\n[…]\nType V – [droplet] fulgurites (exogenic fulgurites), which show evidence of ejection (e.g. spheroidal, filamentous, or aerodynamic), related by composition to Type II and Type IV fulgurites\n[…]\nphytofulgurite – a proposed class of objects resulting from partial to total alteration of biomass (e.g. grasses, lichens, moss, wood) by lightning, described as \"natural glasses formed by cloud-to-ground lightning.\" These were excluded from the classification scheme because they are not glasses, so classifying them as a subset of fulgurites is debatable.\n[…]\nOther famous natural scientists, among them Charles Darwin, Horace Bénédict de Saussure and Alexander von Humboldt gave attention to fulgurites, among whom only Darwin noted a connection to lightning, elaborating the \"measure or bore of lightning\" that must have caused them, and referring to experiments carried out in Paris by M. Hachette and M. Beudant that succeeded in creating similar fulgurites upon passing strong shocks of galvanism through finely-powdered glass.\n[…]\nW. M. Myers and Albert B. Peck, \"A Fulgurite from South Amboy, New Jersey\", American Mineralogist, Volume 10, pages 152–155, 1925"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fulgurito",
        "situacao": "ok",
        "texto": "Fulgurito (do latim fulgur, \"raio\") é uma modificação de areias quartzosas, ou rochas quando submetidas a descargas elétricas de origem atmosférica. São corpos vitrificados, devido à fusão da sílica, de forma oblonga, cilíndrica ou tubular e geralmente ocos.\n[…]\nPodem medir de centímetros até metros de comprimento e possuem a exata forma do raio ao atingir o solo e por ele se espalhar, razão pela qual podem apresentar também ramificações laterais. São estruturas frágeis e devem ser escavados de forma cuidadosa para não se partirem e permitirem ser estudados. Normalmente são encontrados em região de dunas.\n[…]\nApós formado, o fulgurito fica totalmente enterrado na areia, mas devido a movimentação natural das mesmas os frágeis tubos de vidro ficam expostos, o que facilita serem visualizados e desenterrados. Notará que por dentro terá aparência vítrea, mas por fora os grãos de areia semi-fundidos dão-lhe uma aparência áspera. Possui as mais variadas tonalidades, dependendo da coloração da própria areia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Terremoto de Valdivia de 1960",
      "descricao": "Terremoto de magnitude 9,5 que atingiu o sul do Chile em 22 de maio de 1960."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1960, o terremoto de Valdivia, no Chile, gerou um tsunami que, quase um dia depois, matou mais de cem pessoas em qual país asiático?",
    "resposta": "Japão",
    "fonte": [
      "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake",
        "situacao": "ok",
        "texto": "On 22 May 1960, an earthquake and tsunami occurred in Chile, devastating the city of Valdivia. Most studies have placed it at 9.4–9.6 on the moment magnitude scale, making it the strongest earthquake ever recorded, while some studies have placed the magnitude lower than 9.4. It occurred in the afternoon (19:11:14 UTC, 15:11:14 local time), and lasted 10 minutes.\n[…]\nIn Valdivia, the tsunami swell penetrated along Calle-Calle River as far as Huellelhue, putting ashore piles of firewood that lay in the fields.\n[…]\nWhile the 1575 earthquake is considered the one most similar to that of 1960, it differed in not having caused any tsunami in Japan.\n[…]\nOn 27 February 2010 at 03:34 local time, an 8.8 magnitude earthquake occurred just to the north (off the coast of the Maule region of Chile, between Concepción and Santiago). This quake was reported to be centered approximately 35 kilometres (22 mi) deep and several miles off shore. It may have been related or consequential to the 1960 Valdivia quake, the strongest as recorded using modern technology. This 2010 earthquake was the largest to affect Valdivia since the 1960 event.\n[…]\nThirty five houses were severely damaged and some 44 other suffered reparable damage. A survey showed that 434 persons in Valdivia had their homes damaged by the earthquake. The damage was to areas of poor soil quality, chiefly former wetlands and artificial fills. Some sidewalks near the river shore in Valdivia cracked and collapsed much like in the 1960 earthquake. Overall the 2010 areas of damage in Valdivia were few and highly localized.\n[…]\nRojas Hoppe, Carlos Fernando (2010), Valdivia 1960: Entre aguas y escombros (in Spanish), Valdivia, Chile: Ediciones Universidad Austral de Chile\n[…]\nTsunami of 1960 – George Pararas-Carayannis\n[…]\n22 May 1960 South Central Chile Tsunami Amplitudes – National Oceanic and Atmospheric Administration"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sismo_de_Valdivia_de_1960",
        "situacao": "ok",
        "texto": "Sismo de Valdivia de 1960, ou Grande Sismo do Chile (designado oficialmente Grande Terremoto de Valdivia de 1960), foi um sismo de magnitude de 9,5 MW com epicentro próximo a Lumaco, província de Malleco, Região de Araucanía, ocorrido às 19h11 UTC (15h11 no horário local) do dia 22 de maio de 1960. O epicentro foi 160km de Valdivia e a 570 km ao sul de Santiago com o hipocentro situado a uma profu\n[…]\nO sismo foi sentido em diferentes partes da Terra e produziu um tsunami que afetou diversas localidades ao largo do Oceano Pacífico, como Havaí e Japão e a erupção do vulcão Puyehue. Cerca de 5 700 pessoas perderam a vida e mais de 2 milhões ficaram feridas por causa desta catástrofe. Tsunamis produzidos pelo tremor causaram 62 mortes no Havaí e 31 nas Filipinas nas horas seguintes, e réplicas do primeiro abalo puderam ser sentidas por mais de um ano.\n[…]\nOs terremotos chilenos de 1960 foram uma sequência de fortes terremotos que afetaram o Chile entre 21 de maio e 6 de junho do mesmo ano. O primeiro foi o terremoto de Concepción, que alcançou uma magnitude de 8,1MW, seguido pelo mais forte o terremoto de Valdivia.\n[…]\nApós os eventos ocorridos em Valdivia, uma onda cruzou o Oceano Pacífico. Quase 15 horas depois, um tsunami de 10 metros de altura atingiu a cidade de Hilo no Havaí, mais de 10 000 km de distância do epicentro, matando 61 pessoas. Eventos semelhantes foram registrados no Japão, Filipinas, Ilha de Páscoa, no oeste dos Estados Unidos, Nova Zelândia, Samoa e Ilhas Marquesas.\n[…]\nUma seicha de mais de 1 metro foi observada no Lago Panguipulli após o terremoto.\n[…]\nEm 22 de maio, ocorreu um seiche no lago argentino Nahuel Huapi a mais de 200 km de Valdivia. A onda, provavelmente produzida por um deslizamento de sedimento provocado pelo terremoto, matou duas pessoas e destruiu um píer na cidade de San Carlos de Bariloche.\n[…]\nSismo do Chile de 2010",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Paricutín",
      "descricao": "Vulcão do estado de Michoacán, no México, que surgiu em 1943 e ficou ativo até 1952."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1943, no México, o vulcão Paricutín começou a nascer do chão diante de um camponês, no meio de quê?",
    "resposta": "Uma plantação de milho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Par%C3%ADcutin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Par%C3%ADcutin",
        "situacao": "ok",
        "texto": "Parícutin (or Volcán de Parícutin, also accented Paricutín) is a cinder cone volcano located in the Mexican state of Michoacán, near the city of Uruapan and about 322 kilometers (200 mi) west of Mexico City. The volcano surged suddenly from the cornfield of local farmer Dionisio Pulido in 1943, attracting both popular and scientific attention.\n[…]\nParícutin erupted from 1943 to 1952, unusually long for this type of volcano, and with several eruptive phases. For weeks prior, residents of the area reported hearing noises similar to thunder but without clouds in the sky. This sound is consistent with deep earthquakes caused by the movement of magma. A later study indicated that the eruption was preceded by 21 earthquakes over 3.2 in magnitude starting five weeks before the eruption.\n[…]\nThe eruption began on 20 February 1943, at about 4:00 pm local time. The center of the activity was a cornfield owned by Dionisio Pulido, near the town of Parícutin. During that day, he and his family had been working their land, clearing it to prepare for spring planting. Suddenly the ground nearby swelled upward and formed a fissure between 2 and 2.5 meters across.\n[…]\nThe evacuations of Parícutin and San Juan were accomplished without loss of life due to the slow movement of the lava. These two phases lasted just over a year and account for more than 90% of the total material ejected from the cone, as well as almost four-fifths (330 meters) of the final height of 424 meters from the valley floor. It also sent ash as far as Mexico City.\n[…]\nThe worldwide effort to study Parícutin increased understanding of volcanism in general but particularly that of scoria cone formation.\n[…]\nList of volcanoes in Mexico\n[…]\nVideo documentary (eng/spa) Volcano Parícutin (4min)\n[…]\nParícutin at Peakbagger.com\n[…]\n1943–1952 The eruption of Parícutin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paricut%C3%ADn",
        "situacao": "ok",
        "texto": "O Paricutín é um vulcão muito recente situado no estado de Michoacán, no México (19°29'35.70\"N, 102°15'3.93\"O), entre as povoações de San Juan Parangaricutiro (El Nuevo) e Angahuan. Está incluído em algumas listas das sete maravilhas naturais do mundo. A cidade mais próxima deste vulcão é Uruapan.\n[…]\nA maior parte do desenvolvimento deste vulcão ocorreu durante o seu primeiro ano de existência (1943), enquanto se encontrava na sua fase piroclástica explosiva. Durante diversas semanas desse ano, um grande número de ruídos estranhos foram ouvidos pelos habitantes em torno da pequena aldeia de Paricutín, apesar das condições meteorológicas serem normais.\n[…]\nA atividade sísmica intensificou-se até 20 de fevereiro de 1943, quando o fazendeiro local Dioniso Pulido testemunhou a abertura de uma fissura vulcânica no meio de seu campo de milho. De acordo com alguns testemunhos, os aldeões tentaram fechar as fissuras enchendo-as com as rochas e o solo, antes que pequenas explosões e tremores violentos começassem a agitar a área.\n[…]\nComo a maioria dos cones de cinza, o Paricutín é um vulcão monogenético, o que significa que nunca voltará a ocorrer sua erupção.\n[…]\nO vulcanismo é um aspecto comum na paisagem mexicana. O Paricutín é meramente o mais novo dos mais de 1.400 respiradouros vulcânicos que existem na cadeia vulcânica Trans-Mexicana, que se estende pela região que inclui Michoacán e Guanajuato. Este vulcão é original pelo fato de que sua formação foi testemunhada desde o início. Surpreendentemente, nenhuma morte foi causada pela erupção, embora três pessoas tenham morrido em conseqüência dos relâmpagos associados a ela.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Topázio imperial",
      "descricao": "Variedade de topázio de cor alaranjada a rosada, típica de Minas Gerais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O topázio imperial, gema de cor alaranjada a rosada, tem suas jazidas mais famosas nos arredores de qual cidade histórica mineira?",
    "resposta": "Ouro Preto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Topaz",
      "https://pt.wikipedia.org/wiki/Top%C3%A1zio"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Topaz",
        "situacao": "ok",
        "texto": "Topaz is a silicate mineral made of aluminum and fluorine with the chemical formula Al2SiO4(F, OH)2. It is used as a gemstone in jewelry and other adornments. Common topaz in its natural state is colorless, though trace element impurities can make it pale blue or golden-brown to yellow-orange. Topaz is often treated with heat or radiation to make it a deep blue, reddish-orange, pale green, pink, o\n[…]\nAncient Sri Lanka (Tamraparni) exported topazes to Greece and ancient Egypt, which led to the etymologically related names of the island by Alexander Polyhistor (Topazius) and the early Egyptians (Topapwene) – \"land of the Topaz\". Pliny said that Topazos is a legendary island in the Red Sea and the mineral \"topaz\" was first mined there. Alternatively, the word topaz may be related to the Sanskrit word तपस् \"tapas\", meaning \"heat\" or \"fire\".\n[…]\nMany English translations of the Bible, including the King James Version, mention topaz. However, because these translations as topaz all derive from the Septuagint translation topazi[os], which referred to a yellow stone that was not topaz, but probably chrysolite (chrysoberyl or peridot), topaz is likely not meant here.\n[…]\nOrange topaz, also known as precious topaz, is the birthstone for the month of November, the symbol of friendship, and the state gemstone of the U.S. state of Utah. Blue topaz is the state gemstone of the US state of Texas. The 4th wedding anniversary gem is blue topaz and the 23rd is imperial topaz.\n[…]\nImperial topaz is yellow, pink (rare, if natural), or pink-orange. Brazilian imperial topaz can often have a bright yellow to deep golden brown hue, sometimes even violet. Many brown or pale topazes are treated to make them bright yellow, gold, pink, or violet colored. Some imperial topaz stones can fade from exposure to sunlight for an extended period of time. Naturally occurring blue topaz is quite rare."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Top%C3%A1zio",
        "situacao": "ok",
        "texto": "O topázio é um mineral nesossilicato de flúor e alumínio de fórmula química Al2(F,OH)2SiO4. É bastante utilizado em joalharia e classificado como pedra preciosa.\n[…]\nO topázio ocorre em pegmatitos, veios de quartzo de alta temperatura e em cavidades existentes em rochas ácidas como granito e riólito e pode ser encontrado associado com fluorita e cassiterita. Pode ser encontrado nas montanhas Urais e Ilmen (Rússia), na República Checa, Saxônia, Noruega, Suécia, Japão, Brasil, México, e Estados Unidos. O mais raro deles, o \"topázio imperial\" foi primeiramente encontrado na Rússia[carece de fontes]?\n[…]\n(de acordo com, o mesmo foi encontrado no Brasil pela primeira vez, conhecido como \"rubis brasileiros\", em 1751), os Urais foi o local das primeiras jazidas, exauridas durante o período Czarista. É encontrado hoje somente no Brasil, em minas de Ouro Preto, Minas Gerais. Pela sua raridade e beleza é uma das pedras mais valorizadas da atualidade.\n[…]\nO nome \"topázio\" é derivado do grego topazos (\"buscar\"), que era o nome de uma ilha no Mar Vermelho difícil de encontrar e da qual uma pedra amarela (atualmente acredita-se que fosse uma olivina amarelada) era minerada em tempos antigos. Na Idade Média, o nome topázio conhecido era usado como referência a qualquer gema amarela, mas atualmente o nome é aplicado corretamente somente ao silicato descrito acima.\n[…]\nTopázio é também um filme de Alfred Hitchcock, veja:  Topaz\n[…]\nTopázio é também uma empresa Portuguesa de produção e comércio de objectos em prata. veja: Topazio.pt"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Opala",
      "descricao": "Mineraloide de sílica hidratada, famoso pelo jogo de cores, com jazidas em Pedro II, no Piauí."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Qual estado do Nordeste tem, na cidade de Pedro Segundo, as jazidas de opala mais famosas do Brasil?",
    "resposta": "Piauí",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedro_II_(Piau%C3%AD)",
      "https://en.wikipedia.org/wiki/Opal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedro_II_(Piau%C3%AD)",
        "situacao": "ok",
        "texto": "Pedro II é um município brasileiro do estado do Piauí, na Região Nordeste do país. É chamada de \"Terra da Opala\", assim como de \"Suíça Piauiense\", por conta do seu clima serrano, frio, se comparado ao restante do estado, possuindo um grande potencial turístico, com as únicas minas de opala do Brasil, cachoeiras, um rico artesanato em tecelagem e o seu casario colonial, herança da colonização portu\n[…]\nAs mais famosas são a Cachoeira do Salto Liso, com 26 metros de altura e água fria, e a Cachoeira do Urubu Rei, com cascata de 76 metros, sendo considerada a queda d'água mais alta do Piauí e a única cachoeira que não seca o ano inteiro.\n[…]\nA Mina do Boi Morto é a maior mina de opala a céu aberto do mundo e a mais importante do Brasil.\n[…]\nA opala de Pedro II ganhou destaque internacional após a identificação de opala em Marte pela sonda Curiosity, da NASA, em 2022. Na Terra, a opala de qualidade nobre e com jogo de cores é encontrada principalmente em Pedro II, no Piauí, e na Austrália. A ocorrência piauiense é considerada uma das principais jazidas de opala do mundo.\n[…]\nNa Serra dos Matões, situada a seis quilômetros da sede, foi instalado na década de 1970 a retransmissão por ondas do sinal da TV Clube (Rede Globo) de Teresina pelo canal 6. Graças a altitude, o sinal da emissora de TV chegava em todos os municípios do norte do Piauí e municípios vizinhos do estado do Ceará.\n[…]\nOs Festejos de Nossa Senhora da Conceição constituem uma das principais manifestações religiosas e culturais de Pedro II. Realizados anualmente entre os dias 28 de novembro e 8 de dezembro, os festejos são dedicados à padroeira do município e reúnem celebrações religiosas e participação popular. Em 2024, por meio da Lei Estadual nº 8.495, de 4 de setembro, os festejos foram declarados Patrimônio Cultural Imaterial do Estado do Piauí e incluídos no Calendário Oficial de Eventos do Estado. [7]\n[…]\nPrefeitura de Pedro II"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Opal",
        "situacao": "ok",
        "texto": "Opal is a hydrated amorphous form of silica (SiO2·nH2O); its water content may range from 3% to 21% by weight, but is usually between 6% and 10%. Due to the amorphous (chemical) physical structure, it is classified as a mineraloid, unlike crystalline forms of silica, which are considered minerals. It is deposited at a relatively low temperature and may occur in the fissures of almost any kind of r\n[…]\nOther regions of the country that also produce opals (of lesser quality) are Guerrero, which produces an opaque opal similar to the opals from Australia (some of these opals are carefully treated with heat to improve their colors so high-quality opals from this area may be suspect). There are also some small opal mines in Morelos, Durango, Chihuahua, Baja California, Guanajuato, Puebla, Michoacán, and Estado de México.\n[…]\nOther significant deposits of precious opal around the world can be found in the Czech Republic, Canada, Slovakia, Hungary, Turkey, Indonesia, Brazil (in Pedro II, Piauí), Honduras (more precisely in Erandique), Guatemala, and Nicaragua.\n[…]\nThe Roebling Opal, Smithsonian Institution\n[…]\nThe Sea of Opal, the largest black opal in the world\n[…]\nThe Fire of Australia, assumed to be \"the finest uncut opal in existence\"\n[…]\nBeverly the Bug, the first known example of an opal with an insect inclusion\n[…]\nCacholong – Variety of opal\n[…]\nFoil opal\n[…]\nOpalite – Trade name for opal and moonstone simulants\n[…]\nFarlang opal Hist. References Archived 17 December 2010 at the Wayback Machine Localities, anecdotes by Theophrastus, Isaac Newton, Georg Agricola etc.\n[…]\nICA's Opal Page: International Colored Stone Association\n[…]\nOpal Fossils from the South Australian Museum Archived 13 February 2014 at the Wayback Machine Accessed 19 October 2016.\n[…]\nOpal Mineral data and specimen images Mineralogy Database\n[…]\nOpalworld Archived 1 December 2023 at the Wayback Machine Australian Opal Fields – Map of precious opal deposits"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Terremoto do Haiti de 2010",
      "descricao": "Terremoto de 12 de janeiro de 2010 que devastou Porto Príncipe e arredores, no Haiti."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em janeiro de qual ano um terremoto destruiu boa parte de Porto Príncipe, no Haiti, matando também a médica brasileira Zilda Arns?",
    "resposta": "2010",
    "fonte": [
      "https://en.wikipedia.org/wiki/2010_Haiti_earthquake",
      "https://pt.wikipedia.org/wiki/Zilda_Arns"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/2010_Haiti_earthquake",
        "situacao": "ok",
        "texto": "A catastrophic magnitude 7.0 Mw earthquake struck Haiti at 16:53 local time (21:53 UTC) on Tuesday, 12 January 2010. The epicenter was near the town of Léogâne, Ouest department, approximately 25 kilometres (16 mi) west of Port-au-Prince, Haiti's capital. The earthquake is locally nicknamed Goudougoudou, an onomatopoeia for the sound of collapsing buildings.\n[…]\nIn 2010 and 2011, for example, donors disbursed just US$125 million of the US$311 million in grants allocated to agriculture projects, and only US$108 million of the US$315 million in grants allocated to health projects. Only 6% of bilateral aid for reconstruction projects has gone through Haitian institutions, and less than 1% of relief funding has gone through the government of Haiti.\n[…]\nOn 25 August 2012, recovery was hampered due to Tropical Storm Isaac impacting Haiti's southern peninsula. There it caused flooding and 29 deaths according to local reporting. As a result of the 2010 earthquake, more than 400,000 Haitians continue to live in tents and experienced the storm without adequate shelter. In late October, with over 370,000 still living in tent camps, a second tropical storm, Hurricane Sandy, killed 55 and left large portions of Haiti under water.\n[…]\nThe Haiti 2010 earthquake has been depicted in the novel God Loves Haiti, by Dimitry Elias Léger.\n[…]\n2010 Haiti cholera outbreak\n[…]\nList of earthquakes in 2010\n[…]\nList of natural disasters in Haiti\n[…]\nTIME, Haiti; Richar Stengel; Nancy Gibbs; Timothy Fadek; Shaul Schwarz; Amy Wilentz; Bryan Walsh; Bill Clinton (2010). Michael Elliot; Jeffery Kluger; Richard Lacayo; Mary Beth Protomastro (eds.). Earthquake Haiti: Tragedy and Hope. New York: TIME Inc. Home Entertainment: Richard Fraiman. p. 80. ISBN 978-1-60320-163-6.\n[…]\nThe ICRC in Haiti, Features, photos, videos\n[…]\nPreventionWeb 2010 Haiti Earthquake Archived 12 February 2012 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Zilda_Arns",
        "situacao": "ok",
        "texto": "Zilda Arns Neumann (Forquilhinha, 25 de agosto de 1934 — Porto Príncipe, 12 de janeiro de 2010) foi uma médica, pediatra e sanitarista brasileira.\n[…]\nPediatria, na Sociedade Brasileira de Pediatria\n[…]\nZilda Arns encontrava-se em Porto Príncipe, no Haiti em missão humanitária, para introduzir a Pastoral da Criança no país. No dia 12 de janeiro de 2010, pouco depois de proferir uma palestra para cerca de 15 religiosos de Cuba, o país foi atingido por um violento terremoto. A Dra. Zilda foi uma das vítimas da catástrofe.\n[…]\nComo forma de preservar a memória de Zilda viva, sua irmã Otília Arns escreveu a obra literária \"Zilda Arns: A Trajetória da Médica Missionária\" no ano de 2010. A obra possui a história dos antepassados de Zilda, sua biografia e depoimentos de seus familiares.\n[…]\nTambém é cidadã honorária de onze estados brasileiros (Ceará, Rio de Janeiro, Paraíba, Alagoas, Mato Grosso, Rio Grande do Norte, Paraná, Pará, Mato Grosso do Sul, Espírito Santo, Tocantins) e de trinta e dois municípios e doutora Honoris Causa das seguintes universidades:\n[…]\nEm 10 de janeiro de 2015, uma Missa celebrada no Estádio Joaquim Américo Guimarães (Arena da Baixada), em Curitiba, marcou a entrega de um dossiê, enviado à Congregação para as Causas dos Santos, que solicita a abertura do processo de beatificação de Zilda Arns Neumann. Atualmente, seu processo de beatificação está nas mãos da Arquidiocese de Porto Príncipe, no Haiti.\n[…]\nEm agosto de 2016, o arcebispo de Curitiba, Dom José Antônio Peruzzo, enviou uma carta ao arcebispo de Porto Príncipe, Guire Poulard, solicitando a transferência dos trâmites de seu processo de beatificação para o Brasil."
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pleistoceno",
      "descricao": "Época geológica de cerca de 2,6 milhões a 11 700 anos atrás, marcada por repetidas glaciações."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os mamutes e as grandes glaciações marcaram qual época geológica, a que veio imediatamente antes do Holoceno?",
    "resposta": "Pleistoceno",
    "distratores": [
      "Plioceno",
      "Mioceno",
      "Eoceno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pleistocene"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pleistocene",
        "situacao": "ok",
        "texto": "The Pleistocene ( PLY-stə-seen, -⁠stoh-; referred to colloquially as the Ice Age) is the geological epoch that lasted from c. 2.58 million to 11,700 years ago, spanning the Earth's most recent period of repeated glaciations. Before a change was finally confirmed in 2009 by the International Union of Geological Sciences, the cutoff of the Pleistocene and the preceding Pliocene was regarded as being\n[…]\nThe Pleistocene has been dated from 2.580 million (±0.005) to 11,700 years BP with the end date expressed in radiocarbon years as 10,000 carbon-14 years BP. It covers most of the latest period of repeated glaciation, up to and including the Younger Dryas cold spell. The end of the Younger Dryas has been dated to about 9700 BCE (11,700 years before present). The end of the Younger Dryas is the official start of the current Holocene Epoch.\n[…]\nWhile radiocarbon dating is well-suited for dates in the Holocene, its half life is too short for practical use in Pleistocene dating. Instead geologists use marine isotope stages derived from oxygen isotopes to date materials deposited in the Pleistocene.\n[…]\nIt has been estimated that during the Pleistocene, the East Antarctic Ice Sheet thinned by at least 500 metres, and that thinning since the Last Glacial Maximum is less than 50 metres and probably started after c. 14 ka.\n[…]\nAccording to mitochondrial timing techniques, modern humans migrated from Africa after the Riss glaciation in the Middle Palaeolithic during the Eemian Stage, spreading all over the ice-free world during the late Pleistocene. A 2005 study posits that humans in this migration interbred with archaic human forms already outside of Africa by the late Pleistocene, incorporating archaic human genetic material into the modern human gene pool.\n[…]\nPleistocene Park\n[…]\nThe Climate Chronicles, a multimedia production on the history of climate change in the Pleistocene, Holocene, and Anthropocene."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pleistoceno",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Pleistoceno  ou Plistoceno é a época do período Quaternário da era Cenozoica do éon Fanerozoico que está compreendida há entre 2,588 milhões e 11,7 mil anos, abrangendo o período recente no mundo de glaciações repetidas. O termo Pleistoceno deriva do grego πλεῖστος (transl. pleistos, \"bastante mais\") e καινός (transl. kainos, \"novo\"), significando \"bastante mais nov\n[…]\nO Pleistoceno sucede o Plioceno e precede o Holoceno, ambos de seu período. Divide-se nas idades Gelasiano, Calabriano, Chibano e Taratiano, da mais antiga para a mais recente.\n[…]\nDurante o Pleistoceno grandes extensões de terra foram cobertas com uma imensa camada de gelo, um fenômeno conhecido como glaciação. Em alguns períodos o clima ficou mais quente e houve redução do tamanho das camadas de gelo. Esses períodos são chamados interglaciares.\n[…]\nUm grande evento de extinção de grandes mamíferos (megafauna), que incluía mamutes, mastodontes, tigres-dente-de-sabre, gliptodontes, o rinoceronte lanudo, vários girafídeos, como o Sivatherium; Preguiças terrestres, o alce-gigante, o urso das cavernas, lobos terríveis e ursos-de-cara-achatada, começou no final do Pleistoceno e continuou no Holoceno. Hominídeos como os neandertais e denisovanos, também se extinguiram durante esse período.\n[…]\nAs extinções dificilmente afetaram a África, mas foram especialmente severas na América e na Oceania. A África, onde os seres humanos se originaram, mostra muito menos evidências de perda na extinção megafaunal do Pleistoceno, talvez porque a coevolução de animais de grande porte ao lado de humanos primitivos tenha fornecido tempo suficiente para que estes desenvolvessem defesas eficazes. Sua localização nos trópicos também a poupou das glaciações do Pleistoceno e o clima não mudou muito.\n[…]\nLista de mamíferos do Pleistoceno\n[…]\nTransição do Pleistoceno Médio\n[…]\n«The Pleistocene - Berkeley University» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Anel de Fogo do Pacífico",
      "descricao": "Faixa em torno do oceano Pacífico com grande concentração de vulcões e terremotos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Aproximadamente que parcela dos terremotos do mundo acontece ao longo do Anel de Fogo do Pacífico?",
    "resposta": "Cerca de noventa por cento",
    "distratores": [
      "Cerca de dez por cento",
      "Cerca de um terço",
      "Cerca de metade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ring_of_Fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ring_of_Fire",
        "situacao": "ok",
        "texto": "The Ring of Fire (also known as the Pacific Ring of Fire, the Rim of Fire, the Girdle of Fire or the Circum-Pacific belt) is a tectonic belt of earthquakes and volcanoes.\n[…]\nFarther west, the Pacific plate is being subducted at the Kamchatka Peninsula and Kuril arcs. Farther south, at Japan, Taiwan and the Philippines, the Philippine Plate is being subducted beneath the Eurasian plate.\n[…]\nAbout 10% of the world's active volcanoes are found in Japan, which lies in a zone of extreme crustal instability. They are formed by subduction of the Pacific plate and the Philippine Sea plate. As many as 1,500 earthquakes are recorded yearly, and magnitudes of 4 to 6 are not uncommon. Minor tremors occur almost daily in one part of the country or another, causing some slight shaking of buildings.\n[…]\nIndonesia is located where the Ring of Fire around the Pacific Ocean meets the Alpide belt (which runs from Southeast Asia to Southwest Europe).\n[…]\nThe eastern islands of Indonesia (Sulawesi, the Lesser Sunda Islands (excluding Bali, Lombok, Sumbawa and Sangeang), Halmahera, the Banda Islands and the Sangihe Islands) are geologically associated with subduction of the Pacific plate or its related minor plates and, therefore, the eastern islands are often regarded as part of the Ring of Fire.\n[…]\nThe soils of the Pacific Ring of Fire include andosols, also known as andisols; they have formed by the weathering of volcanic ash. Andosols contain large proportions of volcanic glass. The Ring of Fire is the world's main location for this soil type, which typically has good levels of fertility.\n[…]\nGeology of the Pacific Northwest\n[…]\nPacific Rim – Land area comprising the rim of the Pacific Ocean"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%ADrculo_de_fogo_do_Pac%C3%ADfico",
        "situacao": "ok",
        "texto": "Círculo de fogo do Pacífico, ou Anel de fogo do Pacífico (ou às vezes apenas Anel de Fogo), é uma área onde há um grande número de terremotos e uma forte atividade vulcânica localizado no Norte do Oceano Pacífico. O Anel de Fogo do Pacífico tem a forma de ferradura, com cerca de 40.000 km de extensão e está associado a uma série quase contínua de trincheiras oceânicas, arcos vulcânicos, couraças v\n[…]\nO Círculo de Fogo do Pacífico foi formado ao longo de milhões de anos devido ao movimento das placas tectônicas. Ele é resultado da subducção, um processo geológico em que placas oceânicas mais densas mergulham sob placas continentais ou oceânicas menos densas. Esse movimento cria zonas de intensa atividade sísmica e vulcânica, como fossas oceânicas e cadeias de montanhas.\n[…]\nPor exemplo, a Fossa das Marianas, o ponto mais profundo dos oceanos, está localizada no Círculo de Fogo e foi formada pela subducção da Placa do Pacífico sob a Placa das Filipinas.\n[…]\nA região também é marcada pela presença de arco-ilhas, como o arquipélago do Japão e as Filipinas, que se formam quando o magma sobe à superfície devido à subducção. Esses arcos são frequentemente associados a vulcões ativos e terremotos.\n[…]\nO Círculo de Fogo abriga mais de 450 vulcões ativos, incluindo alguns dos mais famosos do mundo. O Monte Fuji, no Japão, é um símbolo cultural e geológico, enquanto o Monte Santa Helena, nos Estados Unidos, é conhecido por sua catastrófica erupção em 1980.\n[…]\nAlém disso, a região é palco de terremotos devastadores, como o de Tohoku em 2011, que gerou um tsunami com ondas de até 40 metros e causou o desastre nuclear de Fukushima. Outro exemplo notável é o terremoto de Valdivia em 1960, no Chile, que atingiu 9,5 na escala Richter, o maior já registrado na história.\n[…]\nPaíses e regiões próximos ou inseridos no Círculo de Fogo:\n[…]\nCinturão vulcânico dos Andes\n[…]\nCírculo do Pacífico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lava",
      "descricao": "Rocha derretida expelida por um vulcão durante uma erupção."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Ao sair de um vulcão, a lava basáltica costuma ter qual temperatura aproximada?",
    "resposta": "Mil e cem graus",
    "distratores": [
      "Trezentos graus",
      "Três mil graus",
      "Seis mil graus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lava"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lava",
        "situacao": "ok",
        "texto": "Lava is magma that has been expelled from the interior of a terrestrial planet (such as Earth) or a moon onto its surface. Lava may be erupted at a volcano or through a fracture in the crust, on land or underwater, usually at temperatures from 800 to 1,200 °C (1,470 to 2,190 °F). Lava may be erupted directly onto the land surface or onto the sea floor or it may be ejected into the atmosphere befor\n[…]\nPāhoehoe (also spelled pahoehoe, from Hawaiian [paːˈhoweˈhowe] meaning \"smooth, unbroken lava\") is basaltic lava that has a smooth, billowy, undulating, or ropy surface. These surface features are due to the movement of very fluid lava under a congealing surface crust. The Hawaiian word was introduced as a technical term in geology by Clarence Dutton.\n[…]\nOn the Earth, most lava flows are less than 10 km (6.2 mi) long, but some pāhoehoe flows are more than 50 km (31 mi) long. Some flood basalt flows in the geologic record extend for hundreds of kilometres.\n[…]\nVolcanoes are the primary landforms built by repeated eruptions of lava and ash over time. They range in shape from shield volcanoes with broad, shallow slopes formed from predominantly effusive eruptions of relatively fluid basaltic lava flows, to steeply-sided stratovolcanoes (also known as composite volcanoes) made of alternating layers of ash and more viscous lava flows typical of intermediate and felsic lavas.\n[…]\nLava deltas form wherever sub-aerial flows of lava enter standing bodies of water. The lava cools and breaks up as it encounters the water, with the resulting fragments filling in the seabed topography such that the sub-aerial flow can move further offshore. Lava deltas are generally associated with large-scale, effusive type basaltic volcanism.\n[…]\nUSGS hazards associated with lava flows\n[…]\nNational Geographic lava video (Archived 2016-03-03 at the Wayback Machine) Retrieved 23 August 2007"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lava",
        "situacao": "ok",
        "texto": "Lava (do italiano lava, derivado do latim labes: queda, declive ou penetrante) é a designação dada ao material geológico em fusão, com temperatura geralmente variando entre os 600 °C e os 1250 °C, que um vulcão expele durante uma erupção.\n[…]\nUma escoada de lava é um derrame de lava que resulta de uma erupção efusiva (uma erupção explosiva, pelo contrário, produz uma mistura de cinzas vulcânicas e outros fragmentos designados por piroclastos (ou tefra), e não escoadas de lava). A viscosidade da maior parte da lava é aproximadamente 10 000 a 100 000 vezes a da água à temperatura ambiente.\n[…]\nLavas de enxofre formaram escoadas com até 250 m de comprimento e 10 m de largura no vulcão Lastarria, no Chile. Estas escoadas foram formadas pela fusão de depósitos de enxofre a temperaturas tão baixas quanto 113 °C.\n[…]\nAs lavas encordoadas têm tipicamente uma temperatura de 1100 ºC a 1200 ºC. Na Terra, a maioria dos fluxos deste tipo de lava tem menos de 10 km de comprimento, mas algumas escoadas de lavas encordoadas têm mais de 50 km de comprimento. Algumas escoadas de basalto de inundação conhecidas do registo geológico estendem-se por centenas de quilómetros.\n[…]\nDesignam-se por lavas em almofada (frequentemente usando a terminologia anglófona pilow lava) as lavas basálticas solidificadas em ambiente subaquático, sendo estas as escoadas lávicas típicas das erupções vulcânicas submarinas. A denominação deve-se à morfologia esferoidal dos blocos, com secção transversal aproximadamente esférica, que forma massas em forma de almofada, dando ao conjunto um aspeto semelhante a almofadas empilhadas.\n[…]\nLagos de lava\n[…]\nCascatas de lava\n[…]\nCagsawa, Filipinas, soterrada pela lava que irrompeu do Vulcão Mayon em 1814;\n[…]\nUSGS hazards associated with lava flows",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A maioria das colunas de basalto da Calçada dos Gigantes, na Irlanda do Norte, tem quantos lados?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Giant%27s_Causeway"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Giant%27s_Causeway",
        "situacao": "ok",
        "texto": "The Giant's Causeway (Irish: Clochán an Aifir or Clochán na bhFomhórach) is an area of approximately 40,000 interlocking basalt columns, the result of an ancient volcanic fissure eruption, part of the North Atlantic Igneous Province active in the region during the Paleogene period. It is located in County Antrim on the north coast of Northern Ireland, about three miles (five kilometres) northeast \n[…]\nIn respect of its key role in the development of volcanology as a geoscience discipline, and notably the origin of basalt, the Palaeocene rocks of the Giant's Causeway and Causeway Coast were included by the International Union of Geological Sciences (IUGS) in its assemblage of 100 \"geological heritage sites\" around the world in a listing published in October 2022.\n[…]\nThe area is a haven for seabirds, such as fulmar, petrel, cormorant, shag, redshank, guillemot, and razorbill, while the weathered rock formations host numerous plant types, including sea spleenwort, hare's-foot trefoil, vernal squill, sea fescue, and frog orchid. A stromatolite colony was reportedly found at the Giant's Causeway in October 2011 – an unusual find, as stromatolites are more commonly found in warmer waters with higher saline content than that found at the causeway.\n[…]\nThe Belfast-Derry railway line run by Northern Ireland Railways connects to Coleraine and along the Coleraine-Portrush branch line to Portrush. Locally, Ulsterbus provides connections to the railway stations. There is a scenic walk of seven miles (eleven kilometres) from Portrush alongside Dunluce Castle and the Giant's Causeway and Bushmills Railway.\n[…]\nWatson, Philip S. (2000). The Giant's Causeway and the North Antrim coast. Dublin: O'Brien Press. ISBN 0-86278-675-4. OCLC 45829602.\n[…]\nGiant's Causeway information at the National Trust\n[…]\nWebsite and video of the Causeway Coast and Glens Heritage Trust"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cal%C3%A7ada_dos_Gigantes",
        "situacao": "ok",
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nSegundo uma lenda irlandesa um gigante chamado Finn MacCool queria enfrentar numa luta um gigante escocês chamado Benandonner, mas havia um problema: não existia uma embarcação com tamanho suficiente para atravessar o mar e levar um ao encontro do outro. A lenda diz que MacCool resolveu o problema construindo uma calçada que ligava os dois lados, usando enormes colunas de pedra. Benandonner aceitou o desafio e viajou pela calçada ate à Irlanda. Ele era mais forte e maior do que MacCool.\n[…]\nMilhares de colunas verticais de pedras de até 6 metros de altura, cada uma de 38 cm a 51 cm de largura, com topos planos e seis lados. Por serem tão uniformes, seus topos parecem se encaixar como favos. Cerca de um quarto das colunas tem cinco lados e também há algumas com quatro, sete, oito e até nove lados.\n[…]\nA \"Calçada\" é composta por três partes. A grande calçada, a maior, começa na praia ao sopé dos rochedos. Parece-se mais com um conjunto desordenado de enormes degraus, alguns com seis metros de altura. À medida que se estende em direção ao mar, dá para entender facilmente por que razão tem o seu nome: é devido aos seus topos, parecidos com favos de mel, que logo se nivelam, lembrando uma rua pavimentada com pedras arredondadas, que varia de vinte a trinta metros de largura.\n[…]\n«Guia oficial da Calçada do Gigante» (em inglês)\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)\n[…]\n«Formação das colunas de basalto» (em inglês)",
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
