Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Ecossistemas e Ambientes Extremos** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Abismo Challenger",
      "descricao": "Ponto mais profundo conhecido do oceano, no extremo sul da Fossa das Marianas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Abismo Challenger, na Fossa das Marianas, é o ponto mais fundo conhecido dos oceanos. Aproximadamente quantos quilômetros abaixo da superfície ele fica?",
    "resposta": "Cerca de onze quilômetros",
    "distratores": [
      "Cerca de três quilômetros",
      "Cerca de seis quilômetros",
      "Cerca de vinte quilômetros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Challenger_Deep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Challenger_Deep",
        "situacao": "ok",
        "texto": "The Challenger Deep is the deepest known point of the seabed of Earth, located in the western Pacific Ocean at the southern end of the Mariana Trench, in the ocean territory of the Federated States of Micronesia.\n[…]\nThe Challenger expedition was the first major scientific expedition devoted entirely to the emerging science of oceanography, and the unlikely but serendipitous discovery of Earth's deepest depression was incredibly good fortune. For comparison, Earth's third deepest site (the Sirena Deep only 150 nautical miles east of the Challenger Deep), would remain undiscovered for another 122 years.\n[…]\nThe Scripps Institution of Oceanography deployed the 1,490-ton Navy-owned, civilian-crewed research vessel Thomas Washington (AGOR-10) to the Mariana Trench on several expeditions from 1975 to 1986. The first of these was the Eurydice Expedition, Leg 8 which brought Fisher back to the Challenger Deep's western basin from 28 to 31 March 1975. Thomas Washington established geodetic positioning by (SATNAV) with Autolog Gyro and EM Log.\n[…]\nThe 2.516-ton research vessel Melville, at the time operated by the Scripps Institution of Oceanography, took the Cook Expedition, Leg 6 with chief scientist Patricia Fryer of the University of Hawaiʻi from Guam on 10 February 2001 to the Challenger Deep for a survey titled \"Subduction Factory Studies in the Southern Mariana\", including HMR-1 sonar mapping, magnetics, gravity measurements, and dredging in the Mariana arc region.\n[…]\nEmden Deep\n[…]\nHorizon Deep\n[…]\nSirena Deep (formerly HMRG Deep)\n[…]\nList of people who descended to Challenger Deep\n[…]\nMariana Trench\n[…]\nMariana Trench: Seven miles deep, the ocean is still a noisy place Archived 15 January 2018 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Depress%C3%A3o_Challenger",
        "situacao": "ok",
        "texto": "A Depressão Challenger é o ponto mais profundo conhecido da superfície terrestre e localiza-se na Fossa das Marianas, próxima às Ilhas Marianas. A terra mais próxima é a Ilha Fais, no arquipélago de Yap, situada a cerca de 289 km a sudoeste; Guam encontra-se aproximadamente 306 km a nordeste. Suas coordenadas geográficas são 11° 22′ N, 142° 36′ L.\n[…]\nA depressão recebeu esse nome em homenagem aos navios de levantamento hidrográfico da Marinha Real Britânica HMS Challenger, cuja expedição (1872–1876) realizou as primeiras medições científicas da região, e HMS Challenger II, cuja expedição (1950–1952) confirmou sua profundidade recorde.\n[…]\nEm 23 de janeiro de 1960, o batiscafo suíço Trieste, adquirido pela Marinha dos Estados Unidos, desceu ao fundo oceânico, tripulado por Jacques Piccard (que foi com seu pai, Auguste Piccard, autor do submarino) e o tenente Don Walsh.\n[…]\nEm 1984, um navio japonês de oceanografia avaliou o fundo com um sonar e estimou a profundidade em 10 923 metros (35 838 pés). Em 2003, Kaikō, um veículo subaquático operado remotamente, foi perdido no oceano pois o cabo que o ligava ao navio base se rompeu.[carece de fontes]?\n[…]\nEm 31 de maio de 2009, o minissubmarino Nereus desceu a uma profundidade de 10 902 m, o que o tornou o veículo marítimo em atividade que atingiu a maior profundidade oceânica no mundo. Existe um fio ligando o minissubmarino a um navio base na superfície. O fato de descer a essa profundidade permite explorar lugares mais profundos que 6 500 m, já que essa era a profundidade máxima atingida pelos submarinos em atividade.\n[…]\nHMS Challenger (1858)\n[…]\nHMS Challenger (1931)\n[…]\nExpedição Challenger",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Tardígrado",
      "descricao": "Animais microscópicos de oito patas do filo Tardigrada, famosos pela resistência a condições extremas."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Os tardígrados, bichinhos microscópicos capazes de resistir a condições extremas, caminham com quantas patas?",
    "resposta": "Oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tardigrade"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tardigrade",
        "situacao": "ok",
        "texto": "Tardigrades ( ), also known as water bears or moss piglets, are a phylum of eight-legged segmented micro-animals. They were first described by the German zoologist Johann August Ephraim Goeze in 1773, who called them Kleiner Wasserbär 'little water bear'. In 1776, the Italian biologist Lazzaro Spallanzani named them Tardigrada, which means \"slow walkers\".\n[…]\nTardigrades are common in mosses and lichens on walls and roofs, and can readily be collected and viewed under a low-power microscope. If they are dry, they can be reanimated on a microscope slide by adding a little water, making them accessible to beginning students and amateur scientists. Current Biology attributed their popularity to \"their clumsy crawling [which] is about as adorable as can be.\" The zoologists James F. Fleming and Kazuhuru Arakawa called them \"a charismatic phylum\".\n[…]\nThey are popular enough to appear on merchandise like clothes, earrings, soft toys, and keychains, with crochet patterns for people to make their own tardigrades. The Dutch artist Arno Coenen created statues for St Eusebius' Church, Arnhem of microscopic organisms including a tardigrade and a coronavirus.\n[…]\nThe tardigrades' traits, including their ability to survive extreme conditions, have earned them a place in science fiction and other pop culture. The musician Cosmo Sheldrake imagines himself as a robust tardigrade in his 2015 \"Tardigrade Song\". He sings \"If I were a tardigrade ... Pressure wouldn't squash me and fire couldn't burn ... I can live life in vacuums for years with no drink (A ha)\".\n[…]\nThe scholar of science in popular culture Lisa Meinecke, in Fighting for the Future: Essays on Star Trek: Discovery, writes that the animal shares some of the real tardigrade's characteristics, including \"its physical resilience to extreme environmental\" stresses.\n[…]\nList of tardigrades of South Africa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tardigrada",
        "situacao": "ok",
        "texto": "Tardigrada (do latim: tardus, lento + gradus, passo) é um filo de animais microscópicos segmentados, relacionados com os artrópodes. Popularmente são conhecidos como ursos-d'água ou como tardígrados, aportuguesamento derivado do nome do filo. Foram descritos pela primeira vez por J.A.E. Goeze em 1773. O nome Tardigrada foi dado por Spallanzani em 1777. São em maioria fitófagos, mas alguns são pred\n[…]\nOs tardígrados têm corpos aproximadamente cilíndricos, com quatro pares de pernas atarracadas. A maioria tem entre 0,3 e 0,5 mm de comprimento, mas a maior espécie pode alcançar 1,2 milímetros. O corpo tem quatro segmentos (sem contar a cabeça), quatro pares de pernas sem articulações, e oito patas com quatro a oito garras em cada. A carapaça contém quitina e é trocada periodicamente.\n[…]\nEm maio de 2011, tardígrados foram enviados ao espaço junto a outros extremófilos na missão STS-134, o último voo do ônibus espacial Endeavour. Foram expostos não apenas ao vácuo do espaço, onde é impossível respirar, mas também a níveis de radiação capazes de incinerar um ser humano.\n[…]\nDe volta ao planeta Terra, um terço deles ainda estava vivo, mostrando-se assim os únicos animais nativos do planeta Terra de que se tem conhecimento capazes de sobreviver às condições do espaço extraterrestre sem a ajuda de equipamentos. Além do mais, 10 % dos sobreviventes foram capazes de reproduzir-se com sucesso, produzindo ovos que eclodiram normalmente. Em maio de 2011, estudos sobre os tardígrados foram incluídos na missão STS-134 do ônibus espacial Endeavour, em seu último voo ao espaço.\n[…]\nDesde que os tardígrados permaneçam na lua, suas chances de despertar espontaneamente são baixas. Sem água líquida, as criaturas permanecerão em um estado dormente e, embora haja evidências de gelo na Lua, não há água líquida em lugar algum.\n[…]\ng1.globo.com/ Tardigrado: ser microscópico pode abrir caminhos no estudo de vacinas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Pinguim-imperador",
      "descricao": "Maior e mais pesado dos pinguins (Aptenodytes forsteri), endêmico da Antártida, com manchas amarelas nos lados da cabeça."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No inverno antártico, o macho do pinguim-imperador equilibra o ovo sobre os pés, em jejum. Quanto tempo, aproximadamente, dura essa incubação?",
    "resposta": "Cerca de dois meses",
    "distratores": [
      "Cerca de duas semanas",
      "Cerca de cinco meses",
      "Cerca de oito meses"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emperor_penguin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emperor_penguin",
        "situacao": "ok",
        "texto": "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.\n[…]\nWhen a couple loses an egg in this manner, their relationship is ended and both walk back to the sea. They will return to the colony next year to try mating again. After a successful transfer of the egg to the male penguin, the female departs for the sea and the male spends the dark, stormy winter incubating the egg against his brood patch, a patch of skin without feathers.\n[…]\nThere he balances it on the tops of his feet, engulfing it with loose skin and feathers for around 65–75 days until hatching. The emperor is the only penguin species where the male alone incubates; in all other penguin species both parents take shifts incubating. By the time the egg hatches, the male will have fasted for around 120 days since arriving at the colony.\n[…]\nTo survive the cold and savage winds of up to 200 km/h (120 mph), the males huddle together, taking turns in the middle of the huddle. They have also been observed with their backs to the wind to conserve body heat. In the four months of travel, courtship, and incubation, the male may lose as much as 20 kg (44 lb), dropping from a total mass of 38 to 18 kg (84 to 40 lb).\n[…]\nDC Comics' crime boss character Oswald Chesterfield Cobblepot, aka \"The Penguin\", styles himself after an emperor penguin, a fact which is often referenced in stories, e.g., in his occasional alias \"Forster Aptenodytes\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-imperador",
        "situacao": "ok",
        "texto": "Pinguim-imperador (Aptenodytes forsteri) é a maior ave da família Spheniscidae (pinguins). Os adultos podem medir até 1,22 metros de altura e pesar até 37 kg. Os machos desta espécie são um dos poucos animais que passam o inverno na Antártida.\n[…]\nO padrão reprodutivo é bastante característico. As fêmeas põem um único ovo em maio/junho, no final do outono, que abandonam imediatamente para passar o inverno no mar. O ovo é incubado pelo macho durante cerca de 65 dias, que correspondem ao inverno antártico. Para superar temperaturas de -40 °C e ventos de 200 km/h, os machos amontoam-se e passam a maior parte do tempo dormindo para poupar energia.\n[…]\nQuer o macho quer a fêmea de pinguim-imperador procuram alimento até uma distância de 500 km das colónias, cobrindo no total entre 82 e 1454 km por indivíduo e por viagem. Um macho que regresse ao mar após o período de incubação, dirige-se directamente para áreas de mar aberto permanente, conhecidas como polínias, a cerca de 100 km da colónia.\n[…]\nO macho incuba o ovo numa bolsa de pele, ventral, balanceando-o com as patas, durante 64 dias consecutivos até a cria irromper do ovo. O pinguim-imperador é a única espécie onde este comportamento é observado; em outras espécies de pinguins, ambos os progenitores alternam a incubação do ovo. Por altura do nascimento da cria, o macho encontra-se sem comer por cerca de 115 dias, desde a sua chegada à colónia.\n[…]\nPara sobreviver ao frio e aos ventos de até 200 km/h, os machos formam agregados, andando às voltas dentro deles. Também foram observados expondo as costas em direcção ao vento, com vista a conservarem o calor corporal. Durante os quatro meses de incubação, o macho pode perder até cerca de 20 kg, dos 38 kg iniciais até aos 18 kg finais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Grand Canyon",
      "descricao": "Grande desfiladeiro no estado do Arizona, nos Estados Unidos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "As rochas mais antigas expostas no fundo do Grand Canyon, no Arizona, têm aproximadamente que idade?",
    "resposta": "Quase dois bilhões de anos",
    "distratores": [
      "Dez mil anos",
      "Sessenta milhões de anos",
      "Trezentos milhões de anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Canyon",
      "https://en.wikipedia.org/wiki/Geology_of_the_Grand_Canyon_area"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters).\n[…]\nWeather in the Grand Canyon varies according to elevation. The forested rims are high enough to receive winter snowfall, but along the Colorado River in the Inner Gorge, temperatures are similar to those found in Tucson and other low elevation desert locations in Arizona.\n[…]\nThere are many viewing points on all sides of the canyon, with the most accessible locations inside Grand Canyon National Park and the Hualapai Indian Reservation. About 90% of tourists visit the South Rim from Arizona State Route 64, which averages 7,000 feet (2,100 m) above sea level. The South Rim houses two visitor centers, a geological museum, art gallery/bookstore, and other attractions near Grand Canyon Village. Further east along the South Rim is the Desert View Watchtower.\n[…]\nGrand Canyon National Park also has a visitor center in an easterly area known as the North Rim, via Arizona State Route 67; the center and the road are closed in winter months. On the Hualapai reservation, Grand Canyon West is the third major area with tourist services, about 125 mi (201 km) driving from Las Vegas and about 250 miles (400 km) by road from Grand Canyon Village at the South Rim.\n[…]\nIn June 2026, three hikers died from suspected heat-related illnesses within the Inner Canyon region of Grand Canyon National Park in Arizona. The fatalities occurred across two separate incidents amidst a severe summer heatwave, where midday temperatures in shaded sections of the canyon floor regularly exceeded 109 °F (43 °C)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Geology_of_the_Grand_Canyon_area",
        "situacao": "ok",
        "texto": "The geology of the Grand Canyon area includes one of the most complete and studied sequences of rock on Earth. The nearly 40 major sedimentary rock layers exposed in the Grand Canyon and in the Grand Canyon National Park area range in age from about 200 million to nearly 2 billion years old. Most were deposited in warm, shallow seas and near ancient, long-gone sea shores in western North America.\n[…]\nAt the same time, streams flowed from highlands in central Arizona north and across what is today the western Grand Canyon, possibly feeding a larger river. The mechanism by which the ancestral Lower Colorado River captured this drainage and the drainage from much of the rest of the Colorado Plateau is not known. Possible explanations include headward erosion or a broken natural dam of a lake or river.\n[…]\nMajor northeast-trending fracture systems of normal faults that intersect the canyon include the West Kaibab and Bright Angel while northwest-trending systems include the Grandview—Phantom. Most earthquakes in the region occur in a narrow northwest-trending band between the Mesa Butte and West Kaibab fracture systems. These events are probably the result of eastward-migrating crustal stretching that may eventually move past the Grand Canyon area.\n[…]\nThe Trail of Time is an outdoor geology exhibit and nature trail on the South Rim of Grand Canyon National Park. Each meter walked on the trail represents one million years of Grand Canyon's geologic history. Bronze markers on the trail mark your location in time. The trail begins at \"Today\" near the Yavapai Geology Museum, and ends 2 billion years later at Verkamp's Visitor Center.\n[…]\nU.S. National Park Service (Department of the Interior) – Grand Canyon National Park:\n[…]\nThe Grand Age of Rocks: The Numeric Ages for Rocks Exposed within Grand Canyon Archived 2012-12-20 at the Wayback Machine\n[…]\nGeologic timeline for the Grand Canyon at PBS.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grand_Canyon",
        "situacao": "ok",
        "texto": "O Grand Canyon (Grande Cânion em inglês) é um desfiladeiro íngreme esculpido pelo rio Colorado, no estado do Arizona, nos Estados Unidos. A formação faz parte do Parque Nacional do Grand Canyon. O ex-presidente estadunidense Theodore Roosevelt foi um grande defensor da preservação da área do Grand Canyon e visitou-o em várias ocasiões para caçar e apreciar a paisagem.\n[…]\nO Grand Canyon tem 446 km de comprimento, até 29 km de largura e atinge uma profundidade de mais de 1,8 km. Por 2 bilhões de anos de história geológica da Terra o rio Colorado e seus afluentes cortaram seus canais através das camadas de rocha enquanto o planalto do Colorado era erguido.\n[…]\nQuase todo o escoamento da Margem Norte (que também recebe mais chuva e neve) flui em direção ao Grand Canyon, enquanto grande parte do escoamento no planalto atrás da Margem Sul flui para longe do cânion (seguindo a inclinação geral). O resultado são lavagens e cânions tributários mais profundos e longos no lado norte e desfiladeiros laterais mais curtos e íngremes no lado sul.\n[…]\nOs diferentes níveis geológicos do Grand Canyon criaram dois grandes aquíferos onde a água subterrânea se acumula. O aquífero C mais alto é um aquífero não confinado. Ele coleta água subterrânea que se infiltra através das Formações Kaibab e Toroweap no Arenito Coconino. Abaixo dela, a Formação Eremita do Permiano e o Grupo Supai fornecem uma barreira densa.\n[…]\nEstudos da composição química da água subterrânea em locais em toda a região do Grand Canyon indicam que a água subterrânea contém uma fração da água moderna (pós-1950), e que muitas nascentes têm uma mistura de água moderna e água subterrânea mais antiga. As idades médias estimadas para as águas subterrâneas da Margem Sul variam de 6 anos (San Francisco Peaks) a quase 20 000 anos (Bar Four well, Blue Spring).\n[…]\n«Unesco - Parque Nacional do Grand Canyon» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Old Faithful",
      "descricao": "Gêiser cônico do Parque Nacional de Yellowstone, em Wyoming, conhecido pelas erupções regulares."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O gêiser Old Faithful, em Yellowstone, entra em erupção com regularidade. Em média, quanto tempo passa entre uma erupção e a seguinte?",
    "resposta": "Cerca de uma hora e meia",
    "distratores": [
      "Cerca de cinco minutos",
      "Cerca de seis horas",
      "Cerca de um dia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Old_Faithful"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Old_Faithful",
        "situacao": "ok",
        "texto": "Old Faithful is a cone geyser in Yellowstone National Park in Wyoming, United States. It was named in 1870 during the Washburn–Langford–Doane Expedition and was the first geyser in the park to be named. It is a highly predictable geothermal feature, erupting on average every 92 minutes, with the period between eruptions ranging from as short as 35 minutes to as long as 120 minutes. The geyser and \n[…]\nIt spouted at regular intervals nine times during our stay, the columns of boiling water being thrown from ninety to one hundred and twenty-five feet at each discharge, which lasted from fifteen to twenty minutes. We gave it the name of \"Old Faithful.\"\n[…]\nIn the early days of the park, Old Faithful was often used as a laundry. As detailed in an 1883 Yellowstone guidebook:\n[…]\nBetween 1983 and 1994, four probes containing temperature and pressure measurement devices and video equipment were lowered into Old Faithful. The probes were lowered as deep as 72 feet (22 m). Temperature measurements of the water at this depth were 244 °F (118 °C), the same as was measured in 1942. The video probes were lowered to a maximum depth of 42 feet (13 m) to observe the conduit formation and the processes that took place in the conduit.\n[…]\nSteamboat Geyser, the largest geyser in Yellowstone\n[…]\n\"Old Faithful Live-streaming Webcam\". Webcams – Yellowstone National Park. U.S. National Park Service.\n[…]\n\"A day in the life of Old Faithful Geyser, as timelapse video\". YouTube.com. September 27, 2007. Archived from the original on December 11, 2021.\n[…]\n\"Old Faithful\". NASA Earth Observatory. November 30, 2008.\n[…]\n\"Full eruption of Old Faithful Geyser\". YouTube.com. June 19, 2020. Archived from the original on December 11, 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Old_Faithful",
        "situacao": "ok",
        "texto": "Old Faithful (Velho Fiel em português) é um gêiser localizado no Parque Nacional de Yellowstone, em Wyoming, nos Estados Unidos. Old Faithful foi nomeado em 1870 durante a Expedição Washburn e foi o primeiro gêiser do parque a receber um nome. O Old Faithful não é o mais alto ou maior gêiser do parque; esse título pertence ao menos previsível Steamboat Geyser.\n[…]\nAs erupções podem atingir 3 700 a 8 400 galões de água fervendo para uma altura de 106-184 pés (30-55 m), durando de 1,5 a 5 minutos. A altura média de uma erupção dele é de 145 pés (44 m). No entanto, as erupções ocorrem frequentemente cerca de 90 minutos, embora este intervalo possa variar de 45 a 125 minutos na ocasião. Estima-se que ocorreram mais de 137 000 erupções, visto que este número é a quantidade de vezes que as erupções foram gravadas.\n[…]\nWebcam do géiser Old Faithful\n[…]\nFilme completo tomado pela webcam do Old Faithful\n[…]\nOld Faithful Informacão em inglês na página de Yellowstone.\n[…]\nVideo do Old Faithful em Nationalgeographic.com.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Antártida",
      "descricao": "Continente gelado em torno do Polo Sul."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O manto de gelo da Antártida guarda aproximadamente que parte de toda a água doce do planeta?",
    "resposta": "Setenta por cento",
    "distratores": [
      "Dez por cento",
      "Trinta por cento",
      "Quase cem por cento"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Antarctica",
      "https://en.wikipedia.org/wiki/Antarctic_ice_sheet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antarctica",
        "situacao": "ok",
        "texto": "Antarctica ( ) is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered \n[…]\nThe name given to the continent originates from the word antarctic, which comes from Middle French antartique or antarctique ('opposite to the Arctic') and the Latin antarcticus ('opposite to the north'). Antarcticus is derived from the Greek ἀντι- ('anti-') and ἀρκτικός (arktikos, 'of the Bear [Ursa Major], northern'). The Greek philosopher Aristotle wrote in Meteorology about an \"Antarctic region\" in c. 350 BC.\n[…]\nThe Greek geographer Marinus of Tyre reportedly used the name in his world map in the second century AD. The Roman authors Gaius Julius Hyginus and Apuleius used for the South Pole the romanised Greek name polus antarcticus, from which derived the Old French pole antartike (modern pôle antarctique) attested in 1270, and from there the Middle English pol antartik, found first in a treatise written by the English author Geoffrey Chaucer.\n[…]\nIndex of Antarctica-related articles\n[…]\nList of Antarctic and sub-Antarctic islands\n[…]\nLucas, Mike (1996). Antarctica. New Holland Publishers. ISBN 978-1-85368-743-3.\n[…]\nStewart, John (2011). Antarctica: An Encyclopedia. Jefferson, N.C. and London: McFarland. ISBN 978-0-7864-3590-6.\n[…]\nIvanov, Lyubomir; Ivanova, Nusha (2022). The World of Antarctica. Generis Publishing. 241 pp. ISBN 979-8-88676-403-1\n[…]\nOfficial website of the Antarctic Treaty Secretariat (de facto government)\n[…]\nHigh resolution map (2022) – Reference Elevation Model of Antarctica (REMA)\n[…]\nAntarctica. on In Our Time at the BBC\n[…]\nBritish Antarctic Survey (BAS)\n[…]\nU.S. Antarctic Program Portal"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antarctic_ice_sheet",
        "situacao": "ok",
        "texto": "The Antarctic ice sheet is a continental glacier covering 98% of the Antarctic continent, with an area of 14 million square kilometres (5.4 million square miles) and an average thickness of over 2 kilometres (1.2 mi). It is the largest of Earth's two current ice sheets, containing 26.5 million cubic kilometres (6,400,000 cubic miles) of ice, which is equivalent to 61% of all fresh water on Earth.\n[…]\nA key reason for the uncertainty is limited certainty about future ice loss from Antarctica and the poor and inconsistent representation of ocean stratification in even the CMIP6 models - the most advanced generation available as of early 2020s. One study suggests that the circulation would lose half its strength by 2050 under the worst climate change scenario, with greater losses occurring afterwards.\n[…]\nThe icing of Antarctica began in the  Late Palaeocene or middle Eocene between 60 and 45.5 million years ago and escalated during the Eocene–Oligocene extinction event about 34 million years ago. CO2 levels were then about 760 ppm and had been decreasing from earlier levels in the thousands of ppm. Carbon dioxide decrease, with a tipping point of 600 ppm, was the primary agent forcing Antarctic glaciation.\n[…]\nThe glaciation was favored by an interval when Earth's orbit favored cool summers but oxygen isotope ratio cycle marker changes were too large to be explained by Antarctic ice-sheet growth alone indicating an ice age of some size. The opening of the Drake Passage may have played a role as well though models of the changes suggest declining CO2 levels to have been more important.\n[…]\nThe Western Antarctic ice sheet declined somewhat during the warm early Pliocene epoch, approximately five to three million years ago; during this time the Ross Sea opened up. But there was no significant decline in the land-based Eastern Antarctic ice sheet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%A1rtida",
        "situacao": "ok",
        "texto": "Antártida ou Antártica (ver questão do nome) é o mais meridional e o segundo menor dos continentes (maior apenas que a Austrália), com uma superfície de 14 milhões de quilômetros quadrados. Rodeia o polo Sul, e por esse motivo está quase completamente coberta por enormes geleiras (glaciares), exceção feita a algumas zonas de elevado aclive nas cadeias montanhosas e à extremidade norte da península\n[…]\nAproximadamente 98% da Antártida está coberta por um manto de gelo, que possui em média dois quilômetros de espessura, sendo 4 776 metros sua espessura máxima. Essa cobertura de gelo tem um volume estimado em 25,4 milhões de quilômetros cúbicos, contendo 70% de toda a água doce do planeta sendo assim o continente de maior altitude média.\n[…]\nEmbora a maior parte da massa continental da Antártida se encontre acima do nível do mar, uma grande parte da pequena Antárctica Ocidental encontra-se abaixo do nível do mar.\n[…]\nEm 9 de fevereiro de 2020, o continente registrou uma temperatura de 20,7 °C, a mais alta de toda a história da Antártida.\n[…]\nEm janeiro de 2008, cientistas da British Antarctic Survey (BAS), liderados por Hugh Corr e David Vaughan, relataram (na revista Nature Geoscience) que há 2 200 anos um vulcão entrou em erupção sob o manto de gelo da Antártida (com base no levantamento aéreo com imagens de radar). A maior erupção na Antártida nos últimos 10 000 anos, as cinzas vulcânicas foram encontradas depositadas na superfície de gelo sob as montanhas Hudson, perto do Glaciar de Pine Island.\n[…]\nNo entanto, a pequena quantidade de aquecimento da superfície na Antártida Ocidental não afeta diretamente a contribuição do manto de gelo da Antárctida Ocidental para o nível do mar. Em vez disso, acredita-se que os recentes aumentos no degelo glacial ocorreram devido a um influxo de água quente do oceano, ao largo da plataforma continental.\n[…]\nAntártica (região)\n[…]\nManto de gelo da Antártida Oriental",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Recife de coral",
      "descricao": "Estrutura submarina formada pelo acúmulo dos esqueletos calcários de corais ao longo de séculos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Os recifes de coral ocupam uma área minúscula do oceano, mas abrigam cerca de que fração de todas as espécies marinhas?",
    "resposta": "Cerca de um quarto",
    "distratores": [
      "Cerca de um centésimo",
      "Cerca de dois terços",
      "Quase todas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coral_reef"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coral_reef",
        "situacao": "ok",
        "texto": "A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups.\n[…]\nThe Philippines coral reef area, the second-largest in Southeast Asia, is estimated at 26,000 square kilometres. They are populated by over 900 reef fish species and 400 scleractinian coral species, 12 of which are endemic.\n[…]\nIn some situations, as in the Phoenix Islands Protected Area, MPAs provide revenue to locals. The level of income provided is similar to the income they would have generated without controls. Overall, it appears the MPAs can protect local coral reefs, but that clear management and sufficient funds are required.\n[…]\nThe Caribbean Coral Reefs – Status Report 1970–2012 states that coral decline may be reduced or even reversed. For this, overfishing needs to be stopped, especially fishing on species key to coral reefs, such as parrotfish. Direct human pressure on coral reefs should also be reduced, and the inflow of sewage should be minimised. Measures to achieve this could include restricting coastal settlement, development, and tourism.\n[…]\nConsequently, coral farming quickly replaced previously used transplantation methods, which involved physically moving sections or entire coral colonies to a new area. Transplantation has seen success in the past, and decades of experiments have led to a high success and survival rate. However, this method still requires removing corals from existing reefs. Given the current state of reefs, this method should generally be avoided if possible.\n[…]\nNOAA's Coral Reef Information System\n[…]\nAbout coral reefs Living Reefs Foundation, Bermuda"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Recife_de_coral",
        "situacao": "ok",
        "texto": "Recife de coral é um ambiente formado pela acumulação de animais marinhos e de certas algas. Com o tempo, em condições favoráveis, um recife de coral pode transformar-se numa ilha ou, pelo menos, em um atol.\n[…]\nEstima-se que os recifes de coral cubram cerca de 284 300 km2, com a região do Indo-Pacífico (Mar Vermelho, Oceano Índico, sudeste asiático e Oceano Pacífico) contribuindo com 91,9% do total, e os recifes do Oceano Atlântico e do Mar do Caribe contribuindo com apenas 7,6% do total.\n[…]\nDas aproximadamente 48 000 espécies reconhecidas de vertebrados, mais de metade (24 600) são peixes. Destes, mais de 60% vivem exclusivamente em ambientes marinhos. Apesar dos recifes de coral serem menos de 1% da área total de oceanos do mundo, aproximadamente metade de todas as espécies conhecidas de peixes marinhos encontram-se concentrados nestas águas tropicais.\n[…]\nOs recifes de coral do sudeste asiático estão em risco por práticas de pesca perigosas (como pesca com cianeto ou dinamite), pesca predatória, sedimentação, poluição e descoramento. Uma variedade de atividades, incluindo a educação, a regulamentação e o estabelecimento de zonas marinhas protegidas estão em curso para proteger estes recifes. A Indonésia, por exemplo, tem cerca de 33 000 quilômetros quadrados de recifes de corais.\n[…]\nOs mares da Indonésia é lar de um terço do total de corais do mundo e de um quarto das espécies de peixes de recifes do mundo. Os corais da Indonésia estão localizados no coração do Triângulo de Corais e tem sido vítima de pesca destrutiva, turismo desregulado e descoramento devido a mudanças climáticas.\n[…]\nA barreira de recife em Alagoas, com cerca de 135 km.\n[…]\nRecifes de coral das ilhas da Baía de Todos os Santos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Fumarola negra",
      "descricao": "Tipo de fonte hidrotermal do fundo do mar que expele água muito quente carregada de minerais escuros."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Por causa da enorme pressão do fundo do mar, a água das fumarolas negras não ferve, mesmo chegando a cerca de quantos graus?",
    "resposta": "Cerca de quatrocentos graus",
    "distratores": [
      "Cerca de sessenta graus",
      "Cerca de cem graus",
      "Cerca de mil graus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hydrothermal_vent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hydrothermal_vent",
        "situacao": "ok",
        "texto": "Hydrothermal vents are fissures on the seabed from which geothermally heated water discharges. They are commonly found near volcanically active places, areas where tectonic plates are moving apart at mid-ocean ridges, ocean basins, and hotspots. The dispersal of hydrothermal fluids throughout the global ocean at active vent sites creates hydrothermal plumes. Hydrothermal deposits are rocks and min\n[…]\nThe world's deepest known black smokers are located in the Cayman Trough, 5,000 m (3.1 miles) below the ocean's surface.\n[…]\nThe organisms at the base of the food chain also deposit minerals into the base of the black smoker, therefore completing the life cycle.\n[…]\nOn Easter Sunday April 15, 1979 during a dive of Alvin to 2,600 meters, Roger Larson and Bruce Luyendyk found a hydrothermal vent field with a biological community similar to the Galápagos vents. On a subsequent dive on April 21, William Normark and Thierry Juteau discovered the high temperature vents emitting black mineral particle jets from chimneys; the black smokers.\n[…]\nFollowing this Macdonald and Jim Aiken rigged a temperature probe to Alvin to measure the water temperature at the black smoker vents. This observed the highest temperatures then recorded at deep sea hydrothermal vents (380±30 °C). Analysis of black smoker material and the chimneys that fed them revealed that iron sulfide precipitates are the common minerals in the \"smoke\" and walls of the chimneys.\n[…]\nAs discussed above, black smokers produce an abundance of sulfides primarily through the production of Iron Sulfides, namely Pyrite. This sulfide production leads to high sulfide deposition local to many black smokers. Central to the conservation conversation, is weighing the possibilities for sustainable use of newly harvested sulfide against the effects of commercially attaining this sulfide via deep sea mining."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fissura_hidrotermal",
        "situacao": "ok",
        "texto": "Uma fissura hidrotermal (também chamada de respiradouro hidrotermal, fumarola hidrotermal ou fonte hidrotermal), pode ser definida como uma fissura na crosta terrestre a partir da qual emerge um fluido geotermal ou hidrotermal. A água penetra na crosta em altas profundidades e reage com os minerais presentes, sofrendo alterações físico-químicas no caminho. O aquecimento pelo gradiente geotérmico f\n[…]\nO crescimento das chaminés das fumarolas negras segue uma sequência mineralógica. Primeiramente, o cálcio presente na solução hidrotermal reage com o sulfato presente na água do mar precipitando na forma de CaSO4 (anidrita) ao redor da fissura por onde é emanado o fluido hidrotermal. As paredes de anidrita formadas isolam a solução hidrotermal da água do mar permitindo a precipitação de minerais de sulfetos metálicos, como a calcopirita (CuFeS2) e a esfalerita (ZnS) no interior da chaminé.\n[…]\nCorrentes oceânicas de fundo são responsáveis pela diluição e dispersão lateral destes fluidos na forma de pluma. Estas plumas hidrotermais têm um grande potencial de afetar a composição química da coluna d’água.\n[…]\nOs depósitos hidrotermais continuam a alterar-se devido a reações químicas com a água do mar. Em chaminés de fumarolas negras, a reação com o O2 converte os sulfetos de metal em óxidos. Conforme o sistema hidrotermal resfria, a anidrita se dissolve. Ainda, intemperismo físico e químico das rochas geram sedimentos que se acumulam nos campos hidrotermais. Sedimentação pelágica e precipitação da pluma hidrotermal contribuem para o total de sedimento formado.\n[…]\nEm sistemas hidrotermais com altas temperaturas, bactérias sulfeto-oxidantes são responsáveis pela maior parte da produção primária nas comunidades em fontes hidrotermais. O agente oxidante da reação é o O2, que é aportado pela água de mar transportada por correntes de fundo:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Andorinha-do-mar-ártica",
      "descricao": "Ave marinha Sterna paradisaea, que se reproduz no Ártico e passa o verão austral perto da Antártida."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Indo e voltando entre o Ártico e a Antártida, uma andorinha-do-mar-ártica percorre por ano, em média, cerca de quantos quilômetros?",
    "resposta": "Cerca de setenta mil",
    "distratores": [
      "Cerca de sete mil",
      "Cerca de vinte mil",
      "Cerca de trezentos mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arctic_tern"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arctic_tern",
        "situacao": "ok",
        "texto": "The Arctic tern (Sterna paradisaea) is a tern in the family Laridae. This bird has a circumpolar breeding distribution covering the Arctic and subarctic regions of Europe (as far south as Brittany), Asia, and North America (as far south as Massachusetts). The species is strongly migratory, seeing two summers each year as it migrates along a convoluted route from its northern breeding grounds to th\n[…]\nThe genus name Sterna is derived from Old English \"stearn\", \"tern\". The specific paradisaea is from Late Latin paradisus, \"paradise\".\n[…]\nThis bird's closest relatives are a group of South Polar species, the South American (Sterna hirundinacea), Kerguelen (S. virgata), and Antarctic (S. vittata) terns.\n[…]\nThe immature plumages of the Arctic tern were originally described as separate species, Sterna portlandica and Sterna pikei.\n[…]\nA European constellation of weather satellites in polar orbits is named EPS-Sterna in reference to the bird's long migrations.\n[…]\n\"Arctic tern media\". Internet Bird Collection."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gaivina-do-%C3%A1rtico",
        "situacao": "ok",
        "texto": "Sterna paradisaea Pontoppidan, 1763 é uma espécie de aves marinhas da família Laridae (antes Sternidae), conhecida pelos nomes comuns de gaivina-do-ártico, caracterizada pela plumagem branca, barrete preto e patas e bico vermelhos. A espécie tem distribuição natural circumpolar, nidificando em colónias nas zonas costeiras do Oceano Árctico e nas regiões subárcticas da Europa, Ásia e América do Nor\n[…]\nOcorre nas costas da Península Ibérica durante as passagens migratórias, sendo que esta espécie é uma grande migradora, aproveitando dois verões por ano quando migra dos seus territórios de nidificação boreais até aos oceanos próximos da Antárctida. Nesta migração cada ave percorre anualmente cerca de 38 600 km, sendo que para algumas populações que são obrigadas a contornar os continentes (ver mapa de distribuição) essa distância ultrapassa os 80 000 km em cada ano.\n[…]\nA espécie é célebre pela extensão da sua migração anual, voando anualmente desde a sua área de nidificação no Árctico até ao Arquipélago da Terra do Fogo e regressando. Esta viagem expõe a ave a dois verões por ano em latitudes elevadas, e, por essa razão, a mais luz do dia que qualquer outra criatura do planeta. Nesta migração, cada ave viajará em média ao longo da sua vida uma distância equivalente a uma ida e volta à Lua, cerca de 800 000 km.\n[…]\nOs parentes filogeneticamente mais próximos desta ave são um grupo de espécies do hemisfério sul: o trinta-réis Sterna hirundinacea, a espécie de garajau das ilhas Kerguelen (Sterna virgata) e o garajau antártico (Sterna vittata). É fácil distinguir S. paradisae dos seus parentes dependendo da área de invernagem, sendo que a diferença de seis meses na mudança de plumas é o melhor indício, posto que os garajaus-árticos apresentam plumagem invernal durante o verão austral.\n[…]\n«Folha: Ave do Ártico percorre seis vezes distância da Terra à Lua». www1.folha.uol.com.br",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Socotra",
      "descricao": "Maior ilha do arquipélago de Socotra, no oceano Índico, pertencente ao Iêmen e conhecida pelas espécies endêmicas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Cerca de que fração das plantas da ilha de Socotorá, no Oceano Índico, não existe em nenhum outro lugar do mundo?",
    "resposta": "Cerca de um terço",
    "distratores": [
      "Cerca de um centésimo",
      "Cerca de três quartos",
      "Quase todas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Socotra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Socotra",
        "situacao": "ok",
        "texto": "Socotra, locally known as Saqatri, is a Yemeni island in the Indian Ocean. It is situated between the Gulf of Aden, the Guardafui Channel and the Arabian Sea, and lies near major shipping routes. The largest of the six islands in the Socotra archipelago, it comprises around 95% of the landmass of the archipelago. It lies 380 kilometres (205 nautical miles) south of the Arabian Peninsula and 232 km\n[…]\nOn 30 November 1967, Socotra became part of South Yemen. Between 1976 and 1979, the island served as a base for the Soviet Navy, although the South Yemeni government and president, Ali Nasir Muhammad, denied their existence. Slavery in the island was abolished under the rule of the Yemeni Socialist Party.\n[…]\nSocotra is home to several native mammals, none of which are endemic.\n[…]\nThe earliest account concerning the presence of Christians in Socotra stems from the early-medieval 6th century AD Greek merchant Cosmas Indicopleustes. Later the Socotrans joined the Assyrian church. During the 10th century, Arab geographer Abu Muhammad al-Hasan al-Hamdani recorded during his visits that most of the islanders were Christian.\n[…]\nDoe, D. Brian (1992). Socotra: Island of Tranquility. London: Immel.\n[…]\nMiller, A.G. & Morris, M. (2004) Ethnoflora of the Socotra Archipelago. Royal Botanic Garden Edinburgh.\n[…]\nNaumkin, V. V.; Sedov, A. V. (1993). \"Monuments of Socotra\". In Boussac, Marie-Françoise; Salles, Jean-François (eds.). Athens, Aden, Arikamedu: Essays on the interrelations between India, Arabia and the Eastern Mediterranean. Delhi: Manohar. pp. 193–250. ISBN 978-81-7304-079-5.\n[…]\nZhukov, Valery A. (2014). The Results of Research of the Stone Age Sites in the Island of Socotra (Yemen) in 2008-2012 (in Russian). Moscow: Triada. ISBN 978-5-89282-591-7.\n[…]\nAudio interview with Socotra resident\n[…]\nA Historical Genealogy of Socotra as an Object of Mythical Speculation, Scientific Research & Development Experiment"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Socotor%C3%A1",
        "situacao": "ok",
        "texto": "Socotorá (em árabe: سقطرة; romaniz.: Suqutrah é um pequeno arquipélago formado por quatro ilhas no oceano Índico, em frente à costa do Chifre da África (Corno de África), a 250 km a leste do cabo Guardafui e a uns 380 km a sudeste da costa do Iêmen, que administra Socotorá em nome do Sultanato de Mara e Socotorá.\n[…]\nPara esse fim, fez embarcar uma estrutura de madeira prefabricada em Lisboa. A conquista da ilha teve lugar em 1507, sob o comando de Tristão da Cunha, após a tomada da Fortaleza de Çoco, guarnecida por 120 homens sob o comando do \"muito valente cavaleiro e sem medo nenhum\" Coje Abrahem, filho do rei de Caxem, cidade a alguns quilómetros do cabo Fartaque.\n[…]\nOs habitantes de Socotorá criam gado e cabras. A maioria vive sem eletricidade, água corrente ou estradas pavimentadas. Nos finais da década de 1990, foi implementado um Programa da Organização das Nações Unidas para o Desenvolvimento dedicado à ilha. Assim, em julho de 1999 um novo aeroporto internacional permitiu o acesso a Socotorá durante todo o ano.\n[…]\nNas ilhas se fala um idioma semítico próprio, o socotri, que está relacionado com outros idiomas da península Arábica.\n[…]\nO grande isolamento geológico do arquipélago, juntamente com o intenso calor e a falta de água, deu origem a uma interessante flora endêmica que é muito vulnerável a mudanças. Pelo menos um terço das 800 espécies de plantas que se encontram em Socotorá são endemismos. Os botânicos situam a flora de Socotorá entre as dez que correm os maiores perigos de extinção no mundo.\n[…]\nAssim como ocorre com outras ilhas isoladas, os morcegos são os únicos mamíferos nativos da ilha. Em contraste, a diversidade marinha é muito grande, e se caracteriza pela presença de espécies originárias das regiões biológicas próximas: o Oceano Índico e o Mar Vermelho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Caverna dos Cristais",
      "descricao": "Caverna na mina de Naica, no estado de Chihuahua, com cristais gigantes de gipsita e calor extremo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Caverna dos Cristais, no México, o ar chegava a que temperatura aproximada, obrigando os exploradores a usar roupas refrigeradas?",
    "resposta": "Quase sessenta graus",
    "distratores": [
      "Cerca de vinte graus",
      "Cerca de cem graus",
      "Cerca de 150 graus"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cave_of_the_Crystals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cave_of_the_Crystals",
        "situacao": "ok",
        "texto": "Cave of the Crystals (Spanish: Cueva de los cristales), also known as Naica Cave (Spanish: Cueva de Naica) or the Giant Crystal Cave, is a cave connected to the Naica Mine at a depth of 300 metres (980 ft), in Naica, Chihuahua, Mexico. It takes the form of a chamber within the limestone host rock of the mine, and is about 109 metres (358 ft) long with a volume of 5,000 to 6,000 cubic metres (180,0\n[…]\nIn 1910, miners discovered a cavern beneath the Naica Mine workings, the Cave of Swords (Spanish: Cueva de las espadas). It is located at a depth of 120 metres (390 ft), above the Cave of the Crystals, and contains spectacular, smaller (1-metre (3 ft 3 in) long) crystals. It is speculated that at this level, transition temperatures may have fallen much more rapidly, leading to an end in the growth of the crystals.\n[…]\nA scientific team coordinated by Paolo Forti, specialist of cave minerals and crystallographer at the University of Bologna (Italy), explored the cave in detail in 2006. To survive and to be able to work in the extreme temperature and humid conditions which prevent prolonged incursion in the crystal chamber, they partnered with Ferrino and La Venta to develop their own refrigerated suits and cold breathing systems (respectively dubbed Tolomea suit and Sinusit respirator).\n[…]\nThe cave was featured on the Discovery Channel program Naica: Beyond The Crystal Cave in February 2011. Earlier, it was featured on the History Channel program Life After People, in the episode \"Depths of Destruction\" of the second season. Additionally, these caves were also featured on the program Angry Planet, in season 3, episode 11. Exploration has given credence to the existence of further chambers, but further exploration would have required significant removal of the crystals.\n[…]\nBBC page on the cave with video\n[…]\nGiant Crystal project\n[…]\nCrystal Cave of Giants, account of a 2009 visit by George Kourounis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_dos_Cristais",
        "situacao": "ok",
        "texto": "Caverna dos Cristais (em castelhano Cueva de los Cristales) é uma caverna situada na mina de Naica no estado mexicano de Chihuahua. Esta caverna, com dimensões aproximadas de 10 por 30 metros, contém no seu interior cristais gigantes de selenite, alguns dos maiores cristais naturais já encontrados no mundo. O maior cristal tem 11 metros de comprimento(algumas fontes alegam ter 12 metros), 4 metros\n[…]\nEstas câmaras encontraram-se submersas e saturadas de minerais, durante 500.000 anos aproximadamente, durante os quais a água manteve uma temperatura estabilizada de 50 °C, o que permitiu aos cristais crescerem e tomarem dimensões bastante elevadas.\n[…]\nEm 1910 os trabalhadores descobriram uma câmara abaixo dos trabalhos da mina de Naica, a gruta/caverna das Espadas (es. cueva de las Espadas). Encontra-se a 120 m de profundidade acima da Caverna dos Cristais e contem espetaculares, embora pequenos em dimensão (1 m comprimento), cristais em forma de espada. Crê-se que nesta zona as temperaturas de transição tenham diminuído mais rápido, o que interrompeu o crescimento dos cristais.\n[…]\nA exploração destas grutas é bastante difícil, por não ser segura uma vez que esta coberta de cristais afiados, mas também devido às condições. A sua temperatura e humidade não permite ao ser humano uma exposição superior a 10 minutos. Como tal cientistas criaram fatos adequados às circunstâncias, com circuitos de arrefecimento ligados a uma mochila de aprox. 20 kg cheia de água gelada e gelo, o que lhes permitiu períodos de aproximadamente 30 minutos de exploração.\n[…]\nOs exploradores creem na existência de outras camaras, tanto abaixo como em frente da Caverna dos Cristais, entretanto, sua exploração não é viável, uma vez que teriam de destruir os cristais existentes. Ficou estabelecido que mais tarde as câmaras seriam novamente seladas e o nível da água irá assegurar o crescimento dos cristais..",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Ártico",
      "descricao": "Região polar em torno do Polo Norte, formada pelo Oceano Ártico e pelas terras vizinhas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra Ártico vem do grego e se refere a uma constelação que brilha no céu do norte. Que animal dá nome a essa constelação?",
    "resposta": "Urso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arctic"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arctic",
        "situacao": "ok",
        "texto": "The Arctic (; from Ancient Greek  ἄρκτος (árktos) 'bear') is the polar region of Earth that surrounds the North Pole, lying north of the Arctic Circle.\n[…]\nHerbivores on the tundra include the Arctic hare, lemming, muskox, and reindeer (caribou). They are preyed on by the snowy owl, Arctic fox, grizzly bear, and Arctic wolf. The polar bear is also a predator, though it prefers to hunt for marine life from the ice. There are also many birds (some 200 species breed in the Arctic) and marine species endemic to the colder regions. Other terrestrial animals include wolverines, moose, Dall sheep, ermines, and Arctic ground squirrels.\n[…]\nThe Arctic contains some of the last and most extensive continuous wilderness areas in the world, and its significance in preserving biodiversity and genotypes is considerable. The increasing presence of humans fragments vital habitats. The Arctic is particularly susceptible to the abrasion of groundcover and to the disturbance of the rare breeding grounds of the animals that are characteristic of the region. The Arctic also holds 1/5 of the Earth's water supply.\n[…]\nDuring the Cretaceous period, the Arctic still had seasonal snows, though only a light dusting and not enough to permanently hinder plant growth. Animals such as the Chasmosaurus, Hypacrosaurus, Troodon, and Edmontosaurus may have all migrated north to take advantage of the summer growing season, and migrated south to warmer climes when winter came. A similar situation may also have been found amongst dinosaurs that lived in Antarctic regions, such as the Muttaburrasaurus of Australia.\n[…]\nBlossoming Arctic\n[…]\nInternational Arctic Research Center"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81rtico",
        "situacao": "ok",
        "texto": "O Ártico (AO 1945: Árctico), ou Região Ártica (AO 1945: Região Árctica), é geralmente definido como a região do Hemisfério Norte circunscrita pela linha onde a temperatura média do mês mais quente é inferior a 10 ℃. A linha isotérmica delimitando esta região coincide aproximadamente com a linha das árvores ártica. A outra definição aponta o Ártico como sendo aquela zona circunscrita pelo Círculo P\n[…]\nDurante o inverno a área toda é coberta pelo gelo e a temperatura média pode atingir -40 ℃. A temperatura mais elevada alguma vez registada durante o verão foi de 38 ℃, em junho de 2020. A tundra é a vegetação principal, mas nas áreas mais aquecidas pode se encontrar salgueiros e bétulas. A vida animal é pobre no tocante ao número de espécies, existindo, por exemplo, ursos-polares, focas árcticas, raposas-do-Ártico e bois-almiscarados. Os países da zona têm disputado os recursos da região.\n[…]\nO adjetivo ártico tem origem no termo grego ἀρκτικός (árktikós), \"relativo a urso, árctico\" e este da palavra ἄρκτος (arktos), que significa urso. O nome refere-se ou à constelação da Ursa Maior, a \"Grande Ursa\", que é proeminente na porção setentrional da esfera celeste, ou à constelação da Ursa Menor, a \"Pequena Ursa\", que contém Polaris, a Estrela Polar.\n[…]\nOs insetos estão entre os grupos animais cuja vida é mais difícil no Ártico, seus corpos diminutos perdem calor rapidamente, e são encontradas poucas centenas de espécies. O Ártico tem um significativo número de espécies endêmicas. São típicas do Ártico espécies como o urso-polar, a raposa-do-ártico, várias espécies de foca, o boi-almiscarado, o elefante-marinho, a rena e baleias.\n[…]\nAo longo de todo o ano o Ártico irradia mais calor do que recebe, e a maior parte do seu calor vem dos trópicos através da circulação atmosférica e marítima. A Escandinávia é a região ártica mais quente devido à influência da Corrente do Golfo.\n[…]\nOceano Ártico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Welwitschia",
      "descricao": "Planta do deserto do Namibe, Welwitschia mirabilis, que vive séculos com apenas duas folhas de crescimento contínuo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na Namíbia, a welwitschia tem um nome em africâner que quer dizer duas folhas que não podem fazer o quê?",
    "resposta": "Morrer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Welwitschia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Welwitschia",
        "situacao": "ok",
        "texto": "Welwitschia is a monotypic genus of gnetophytes containing only the species Welwitschia mirabilis. It is named after the Austrian botanist Friedrich Welwitsch, who documented the plant in the 1850s. In common use, it is sometimes referred to as the tree tumbo or onyanga. It is native to Angola and Namibia, where it grows in the extreme conditions of the Namib desert, tolerating high heat and low p\n[…]\nWelwitschia is endemic to the Namib desert. Its range stretches over 1,000 km (620 mi) along the Angolan and Namibian coast, being found between 14th and 24th southern parallels. The area is arid; the coast is recorded as having almost zero rainfall, while less than 100 mm (3.9 in) of rain falls annually below the escarpment in the wet season from February to April. Populations tend to occur in ephemeral water sources, indicating a dependence on groundwater in addition to precipitation from fog.\n[…]\nIndigenous people occasionally consume the cone of the plant by eating it raw or baking it in hot ashes. The Herero name of the plant, onyanga, translates to \"onion of the desert\". Welwitschia is also featured on the coat of arms of Namibia growing from a sand dune.\n[…]\nThe wild population of Welwitschia is reasonably stable. The international trade in the plant is controlled under the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES). Plants in Angola are generally better protected than those in Namibia because the relatively high concentration of land mines from the Angolan Civil War that remain in the former region.\n[…]\nEarle, Christopher J., ed. (2018). \"Welwitschia mirabilis\". The Gymnosperm Database. Retrieved 21 July 2023.\n[…]\nImages of Dry Tropical Habitat: Welwitschia sp. from Namibia\n[…]\nNotten, Alice (March 2003). \"Welwitschia mirabilis\". PlantZAfrica. South African National Biodiversity Institute. Retrieved 21 July 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Welwitschia",
        "situacao": "ok",
        "texto": "Welwitschia (no vernáculo welwítschia) é um género monotípico de plantas verdes gimnospérmicas cuja única espécie é a famosa Welwitschia mirabilis, Hook.f. popularmente conhecida como polvo-do-deserto, tumbo ou tumboa, que só existe no deserto do Namibe em Angola. As Welwitschias são plantas gnetófitas da classe Gnetopsida, pertencentes à ordem Welwitsciales e família Welwitschiaceae; o gênero de \n[…]\nÉ uma planta rasteira, formada por um caule lenhoso que não cresce, uma enorme raiz aprumada e duas folhas apenas, provenientes dos cotilédones da semente; as folhas, em forma de fita larga, continuam a crescer durante toda a vida da planta, uma vez que possuem meristemas basais. Com o tempo, as folhas podem atingir mais de dois metros de comprimento e tornam-se esfarrapadas nas extremidades. É difícil avaliar a idade que estas plantas atingem, mas pensa-se que possam viver mais de 1000 anos.\n[…]\nApesar do clima em que vive, a Welwitschia consegue absorver a água do orvalho através das folhas.\n[…]\nOs jogadores da Seleção Namibiana de Rugby Union, esporte muito popular na Namíbia,  especialmente em sua população branca, são apelidados de Welwitschias. O país é bastante presente na Copa do Mundo da modalidade.\n[…]\nFoi o austríaco Frederich Welwitsch, que esteve em Angola a serviço do governo português entre 1853 e 1861, o primeiro naturalista a dar conta daquela enorme planta, que emerge insolitamente do solo desértico com uma cabeleira de folhas largas, e que na verdade são apenas duas que se vão desfiando com o tempo. O botânico Joseph Hooker, que denominou a espécie em homenagem ao seu descobridor, dizia que era a planta mais extraordinária e mais feia que conhecia.\n[…]\nWelwitschia no site Wayne's Word",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Vitória-régia",
      "descricao": "Planta aquática amazônica Victoria amazonica, de folhas circulares gigantes"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A vitória-régia, planta amazônica de folhas gigantes, recebeu o nome em homenagem a uma rainha do século dezenove. De que país ela era rainha?",
    "resposta": "Reino Unido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_amazonica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "Victoria amazonica (\"giant water lily\") is a species of flowering plant, the second largest in the water lily family Nymphaeaceae. It is called Vitória-Régia or Iaupê-Jaçanã (\"the jacana's waterlily\") in Brazil and Atun Sisac (\"great flower\") in Inca (Quechua). Its native region is tropical South America, specifically Guyana and the Amazon Basin.\n[…]\nThe diploid chromosome count of Victoria amazonica is 20.\n[…]\nVictoria amazonica has not yet been formally evaluated for the IUCN Red List, but a 2022 assessment proposed it as Least Concern (LC) due to its wide distribution across the Amazon basin. Potential threats include deforestation and climate change impacts on wetland ecosystems, though it is not currently considered endangered.\n[…]\nVictoria regia, as it was named, was described by Tadeáš Haenke in 1801. It was once the subject of rivalry between Victorian gardeners in England. Always on the lookout for a new species with which to impress their peers, Victorian \"gardeners\" such as the Duke of Devonshire and the Duke of Northumberland started a friendly competition to become the first to cultivate and bring to flower this large lily.\n[…]\nThe species captured the public's imagination and was the subject of several dedicated monographs. The botanical illustrations of cultivated specimens in Fitch and W.J. Hooker's 1851 work Victoria Regia received critical acclaim in the Athenaeum, \"they are accurate, and they are beautiful\". \"The Duke of Devonshire presented Queen Victoria with one of the first of these flowers and named it in her honour.\n[…]\nMedia related to Victoria amazonica at Wikimedia Commons\n[…]\nData related to Victoria amazonica at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Victoria_amazonica",
        "situacao": "ok",
        "texto": "A vitória-régina ou victória-régia (Victoria amazonica) é uma planta aquática da família das Nymphaeaceae, típica da região amazônica.\n[…]\nOs ingleses deram-lhe o nome em homenagem à Rainha Vitória, quando o explorador alemão a serviço da Coroa Britânica Robert Hermann Schomburgk levou suas sementes para os jardins de um palácio inglês.\n[…]\nA espécie faz parte do gênero Victoria, colocado por vezes na família Nymphaeaceae e outras vezes na Euryalaceae. A primeira descrição publicada do gênero foi feita por John Lindley em outubro de 1837, com base em espécimes dessa planta devolvidos da Guiana Inglesa por Robert Schomburgk. Lindley deu ao gênero o nome da recém-ascendida Rainha Vitória, e da espécie Victoria regia. A grafia na descrição de Schomburgk no Athenaeum, publicada no mês anterior, foi dada como Victoria Regina .\n[…]\nA espécie capturou a imaginação do público e foi tema de várias monografias dedicadas. As ilustrações botânicas de espécimes cultivados na obra Victoria Regia de Fitch e WJ Hooker de 1851 foram aclamadas pela crítica no Athenaeum, “elas são precisas e lindas”. “O Duque de Devonshire presenteou a Rainha Vitória com uma das primeiras dessas flores e a nomeou em sua homenagem.\n[…]\nO caule e a parte inferior das folhas são revestidos com muitos espinhos para se defender de peixes e outros herbívoros subaquáticos, embora também possam desempenhar um papel ofensivo ao esmagar plantas rivais nas proximidades, à medida que a vitória-régia se desenvolve agressivamente., privando outras plantas diretamente abaixo de suas folhas desse recurso vital e escurecendo significativamente as águas abaixo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Açaí",
      "descricao": "Palmeira amazônica Euterpe oleracea, cultivada pelo fruto roxo-escuro e pelo palmito."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na língua tupi, de onde vem a palavra, o nome açaí quer dizer o quê?",
    "resposta": "Fruta que chora",
    "distratores": [
      "Fruta da floresta",
      "Árvore que dança",
      "Fruto do rio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Açaí"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Açaí",
        "situacao": "ok",
        "texto": "O açaí (nome científico: Euterpe oleracea) é uma palmeira muito comum na região da Amazônia que produz um fruto bacáceo de cor roxa (a parede do órgão ovário amadurece e forma a camada externa comestível), muito utilizado na confecção de alimentos e bebidas. A palmeira do açaí é por vezes confundida, no estado do Pará, com a palmeira juçara, que embora seja outro tipo de palmeira, dá palmito de ex\n[…]\nCom o reconhecimento do açaí como um fruto com elevado poder energético e vitamínico os mercados nacional e internacional despertaram seu interesse pela fruta, promovendo assim um aumento da demanda, que segundo o plano estratégico Pará 2030 a exportação tem tido um crescimento médio de 13% ao ano. Tendo em vista a defasagem natural da oferta uma consequência clara desse aumento do consumo do açaí é sua elevação de preço.\n[…]\nNo mercado a polpa da fruta é o líder de exportação sendo responsável por 97%, porém outro produto que vem ganhando destaque é o mix, uma mistura de açaí com banana e guaraná, que em 2014 representava 0,2% e passou a 3% do volume comercializado.[carece de fontes]?\n[…]\nCom a verticalização da produção do açaí temos a expansão do consumo do açaí, sob as mais diversas formas, sendo criadas diversas linhas de produtos tendo em sua composição está fruta que ganha o titulo de \"mainstream\" . Diante desse cenário várias combinações do açaí são desenvolvidas na indústria de cosméticos, alimentação e farmacêutica. Abaixo elencaremos os principais produtos que tem como base o açaí.\n[…]\nAlém do uso da fruta o no processo de verticalização da produção temos também o potencial gerado pelos subprodutos do açaí que tem como base os caroços que são descartados na obtenção da polpa do açaí.\n[…]\nEm 2018, pesquisadores do curso de Bacharelado em Design, da Uepa, apresentaram a tecnologia que transforma as fibras do caroço de Açaí em um tecido não tecido.\n[…]\nÓleo de açaí\n[…]\nFeira do Açaí"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua tupi-guarani, o nome Iguaçu, das famosas cataratas na fronteira com a Argentina, significa o quê?",
    "resposta": "Água grande",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nSeu nome vem das palavras Tupi ou Guarani y ɨ (água) e ûasú waˈsu (grande). Reza a lenda que um deus planejava se casar com uma bela mulher chamada Naipi, que fugiu com seu amante mortal Tarobá em uma canoa. Com raiva, o deus cortou o rio, criando as cachoeiras e condenando os amantes a uma queda eterna. O primeiro europeu a descobrir e descrever as cataratas foi o conquistador espanhol Álvar Núñez Cabeza de Vaca, em 31 de janeiro de 1542, e uma das quedas no lado argentino recebeu seu nome.\n[…]\nA área das Cataratas do Iguaçu passou a ser predominantemente ocupada por povos guaranis, pertencentes ao tronco linguístico tupi-guarani, que migraram para o sul da América do Sul e estabeleceram aldeias ao longo dos rios Paraná e Iguaçu. Diversas narrativas tradicionais associadas às cataratas sobreviveram entre os povos indígenas da região, destacando-se a lenda de Naipi e Tarobá, que explica a origem das quedas d'água por meio da ação de uma divindade ligada às forças da natureza.\n[…]\nO Parque Nacional Iguazú, na Argentina, foi criado em 1934 com o objetivo de proteger as cataratas e a floresta subtropical circundante.\n[…]\nEstá localizada no Parque Nacional do Iguaçu  estado do Paraná, Brasil, fazendo fronteira com o Parque Nacional Iguazú, na província de Misiones, Argentina. Embora o território brasileiro abrigue mais de 95% da bacia do rio Iguaçu, dois terços das cataratas ficam em território argentino.\n[…]\nCataratas do Iguaçu no TripAdvisor\n[…]\nCataratas do Iguaçu no Google Maps"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "The Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; \n[…]\nThe name Iguazú comes from the Guarani or Tupi words y [ɨ], meaning 'water', and ûasú [waˈsu], meaning 'big'. Legend has it that a deity planned to marry a beautiful woman named Naipí, who fled with her mortal lover Tarobá in a canoe. In a rage, the deity sliced the river, creating the waterfalls and condemning the lovers to an eternal fall. The first European to record the existence of the falls was the Spanish Conquistador Álvar Núñez Cabeza de Vaca in 1541.\n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nThe layout of Iguazu Falls resembles a reversed letter \"J\". The Argentina–Brazil border runs through the Devil's Throat. On the right bank is the Brazilian territory, which is home to more than 95% of the Iguazu River basin but has just over 20% of the jumps of these falls, and the left side jumps are Argentine, which make up almost 80% of the falls.\n[…]\nThe falls may be reached from two main towns, with one on either side of the falls: Foz do Iguaçu in Brazil and Puerto Iguazú in Argentina, as well as from Ciudad del Este, Paraguay, on the other side of the Paraná River from Foz do Iguaçu, each of those three cities having commercial airports. The falls are shared by the Iguazú National Park (Argentina) and Iguaçu National Park (Brazil). The two parks were designated UNESCO World Heritage Sites in 1984 and 1986, respectively."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Ciclone tropical",
      "descricao": "Tempestade giratória que se forma sobre oceanos quentes, chamada de furacão ou tufão conforme a região"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra furacão chegou ao português pelo espanhol, que a tomou de um povo indígena das Antilhas. Que povo era esse?",
    "resposta": "Taínos",
    "distratores": [
      "Maias",
      "Astecas",
      "Guaranis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Juracán",
      "https://en.wikipedia.org/wiki/Tropical_cyclone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Juracán",
        "situacao": "ok",
        "texto": "Guabancex is the zemi or deity of chaos and disorder in Taíno mythology and religion, which was practiced by the Taíno people in Puerto Rico, Hispaniola, Jamaica, and Cuba, as well as by Arawak natives elsewhere in the Caribbean. She was described as a mercurial goddess that controlled the weather, conjuring storms known as \"juracán\" when displeased. The latter term was later used to name the clim\n[…]\nThe Taínos were aware of the spiraling wind pattern of hurricanes, a knowledge that they used when depicting the deity. Her zemi idol was said to depict a woman, but the most common depiction of Guabancex presents a furious face with her arms extended in a \"~\" pattern.\n[…]\nThe Spanish word huracán may be derived from juracán. The English word hurricane derives from the Spanish. There are many alternative spellings listed in the OED: furacan, furican, haurachan, herycano, hurachano, hurricano, and so on.\n[…]\nThe easternmost of the Greater Antilles, Puerto Rico is often in the path of the North Atlantic tropical storms and hurricanes which tend to come ashore on the east coast. The Taíno believed that upon reaching the rainforest peak of El Yunque, the goddess and her cohorts would clash with their supreme deity, Yúcahu, who was believed to live there. It is also said that she is a manifestation of Atabey’s anger."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tropical_cyclone",
        "situacao": "ok",
        "texto": "A tropical cyclone is a rapidly rotating storm system with a low-pressure area, a closed low-level atmospheric circulation, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain and squalls. Depending on its location and strength, a tropical cyclone is called a hurricane (), typhoon (), tropical storm, cyclonic storm, tropical depression, or simply cyclone. A hurricane is\n[…]\nEurope is rarely affected by tropical cyclones; however, the continent regularly encounters storms after they transitioned into extratropical cyclones. Only one tropical depression – Vince in 2005 – struck Spain, and only one subtropical cyclone – Subtropical Storm Alpha in 2020 – struck Portugal. Occasionally, there are tropical-like cyclones in the Mediterranean Sea.\n[…]\nIn 2003, the Atlantic hurricane reanalysis project examined and analyzed the historical record of tropical cyclones in the Atlantic back to 1851, extending the existing database from 1886.\n[…]\nTropical cyclones are regarded as a feature unique to Earth.\n[…]\nEarly planetary climate models with Earth-like atmospheres suggested that tidally locked exoplanets are capable of hosting environments conducive for tropical cyclogenesis, albeit favorability is limited by their slow rotation rates. Further simulations supported the viability of tropical cyclones on tidally locked planets.\n[…]\nA 2020 study found that tropical cyclones are more common for planets near the inner edge of the habitable zone, with cyclones forming in both the day and night hemispheres on such planets. A 2024 study further explored the influence of rotation periods on tropical cyclogenesis, concluding that planets with intermediate (8 day) rotation periods are most favorable for tropical cyclogenesis, though weak tropical cyclone-like systems spawned on planets with long (16 day) rotation periods as well.\n[…]\nTropical cyclones by year\n[…]\nTropical cyclones in 2026"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Aurora polar",
      "descricao": "Fenômeno luminoso no céu das regiões polares, chamado de aurora boreal no norte e de aurora austral no sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome aurora boreal, a palavra boreal vem de Bóreas, uma divindade grega. Ele era o deus de quê?",
    "resposta": "Do vento norte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aurora",
      "https://en.wikipedia.org/wiki/Boreas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aurora",
        "situacao": "ok",
        "texto": "An aurora (pl. aurorae or auroras) is a natural light display in Earth's upper atmosphere caused by charged particles from the Sun colliding with atoms in the atmosphere. These collisions excite oxygen and nitrogen, which then emit light of different colours such as green, red, and purple. When observed in high-latitude regions they are called polar lights and aurora polaris.\n[…]\nThe word aurora is derived from the name of the Roman goddess of the dawn, Aurora, who travelled from east to west announcing the coming of the Sun. Aurora was first used in English in the 14th century. The words borealis and australis are derived from the names of the ancient gods of the north wind (Boreas) and the south wind (Auster or australis) in Greco-Roman mythology.\n[…]\nIn northern latitudes, the effect is known as the aurora borealis or the northern lights. The southern counterpart, the aurora australis or the southern lights, has features almost identical to the aurora borealis and changes simultaneously with changes in the northern auroral zone. The aurora australis is visible from high southern latitudes in Antarctica, Patagonia, southeastern Australia, New Zealand, and the Falkland Islands.\n[…]\nOn rare occasions, the aurora borealis can be seen as far south as the Mediterranean, East Asia, and the southern states of the US, while the aurora australis can be seen as far north as New Caledonia, South Africa, the Pilbara region in Western Australia, and Uruguay. During the Carrington Event, the greatest geomagnetic storm ever observed, auroras were seen even in the tropics.\n[…]\nIn 1778, Benjamin Franklin theorized in his paper Aurora Borealis, Suppositions and Conjectures towards forming a Hypothesis for its Explanation that an aurora was caused by a concentration of electrical charge in the polar regions intensified by the snow and moisture in the air:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Boreas",
        "situacao": "ok",
        "texto": "Boreas (, UK: , UK: ; Ancient Greek: Βορέας, romanized: Boréas; also Βορρᾶς, Borrhâs) is the Greek god of the cold north wind, storms, and winter. Although he was normally taken as the north wind, the Roman writers Aulus Gellius and Pliny the Elder both took Boreas as a northeast wind, equivalent to the Roman god Aquilo or Septentrio. Boreas is depicted as being very strong, with a violent temper \n[…]\nWhen the goddess Leto, pregnant with Artemis and Apollo, was due, Boreas was ordered by Zeus to bring her to Poseidon, who in turn led her to the island of Ogygia where she could give birth to the twins, as Zeus' wife Hera had ordered all places and land to shun Leto.\n[…]\nIn an Aesop fable, Boreas and his uncle Helios the sun god argued about which one between them was the strongest god. They agreed that whoever was able to make a passing traveller remove his cloak would be declared the winner. Boreas was the one to try his luck first; but no matter how hard he blew, he could not remove the man's cloak, instead making him wrap his cloak around him even tighter.\n[…]\nAccording to Pausanias, Boreas blessed Musaeus with the gift of flight.\n[…]\nWhen Sirius, the dog star, began to burn hot after he could not have his beloved Opora, a minor goddess connected to the harvest, Boreas dealt with the intense heat by ordering his sons to deliver Opora to Sirius, while he cooled the earth down with blast of cold wind.\n[…]\nThe Roman equivalent of Boreas was Aquilo. This north (and slightly east) wind was associated with winter. The poet Virgil writes:\n[…]\nGreek deities were abundantly used in Greco-Buddhist art, so too Boreas and its velificatio depiction element. Boreas became the Japanese wind god Fujin through the Greco-Buddhist Wardo/Oado and Chinese Feng Bo/Feng Po (\"Uncle Wind\"; among various other names).\n[…]\nBOREAS from the Theoi Project\n[…]\nThe Warburg Institute Iconographic Database (images of Boreas)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aurora_polar",
        "situacao": "ok",
        "texto": "Aurora polar, Aurora boreal, ou também conhecida como luzes do norte (aurora boreal) ou luzes do sul (aurora austral), é um fenômeno luminoso natural no céu da Terra, observado principalmente em regiões de alta latitude (próximas ao Ártico e Antártica). As auroras exibem padrões dinâmicos de luzes brilhantes que aparecem como cortinas, raios, espirais ou cintilações que cobrem todo o céu.\n[…]\nEm latitudes do hemisfério norte é conhecida como aurora boreal (nome batizado por Galileu Galilei em 1619, em referência à deusa romana do amanhecer, Aurora, e Bóreas, deus grego, representante dos ventos nortes). A ocorrência deste fenômeno depende da atividade das fulgurações solares.\n[…]\nSeguindo a mesma ideia, o vento solar e a magnetosfera são fluidos condutores de eletricidade com movimento relativo, e são capazes de gerar corrente elétrica, que originam tal efeito luminoso.\n[…]\nNo século XVIII o navegador inglês James Cook presenciou no Oceano Índico o mesmo fenômeno de Galileu, batizando-o aurora austral. A partir de então ficou claro que o efeito não era exclusivo do hemisfério norte terrestre, criando-se a denominação aurora polar. Na mesma época, o astrônomo britânico Edmond Halley suspeitou que o campo magnético terrestre estivesse relacionado com a formação de auroras boreais.\n[…]\nOs trabalhos de Carl Stormer no campo do movimento de partículas eletrificadas em um campo magnético facilitaram a compreensão do mecanismo de formação das luzes do norte. A partir da década de 1950 descobriu-se a emissão de matéria pelo Sol, a qual foi chamada vento solar, efeito que também explica o fato das caudas de cometas estarem sempre opostas ao Sol. Tal teoria foi formulada pelo físico estadunidense Newman Parker em 1957, tendo sido comprovada no ano seguinte pelo satélite Explorer I.\n[…]\nVento solar\n[…]\n«Página sobre aurora boreal» (em inglês)\n[…]\n«Imagens de aurora boreal no Alasca e Canadá» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Pamukkale",
      "descricao": "Sítio natural no sudoeste da Turquia com terraços brancos de travertino formados por fontes termais."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em turco, o nome Pamukkale, dos terraços brancos formados por fontes termais, significa o quê?",
    "resposta": "Castelo de algodão",
    "distratores": [
      "Cascata de leite",
      "Montanha de sal",
      "Palácio de neve"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pamukkale"
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
        "texto": "Pamukkale, (\"castelo de algodão\") em turco está situado em Denizli, Turquia. É um conjunto de piscinas termais de origem calcária que com o passar dos séculos formaram bacias gigantescas de água que descem em cascata numa colina. A formação do Pamukkale deve-se aos locais térmicos quentes por baixo do monte que provocam o derrame de carbonato de cálcio, que depois solidifica como mármore travertin\n[…]\nPamukkale, castelo de algodão - Thewotme travel blog",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Tsingy de Bemaraha",
      "descricao": "Reserva natural de Madagascar famosa por suas agulhas de calcário, Patrimônio Mundial da UNESCO."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em malgaxe, a palavra tsingy, das agulhas de calcário de Madagascar, descreve um lugar onde não se consegue fazer o quê?",
    "resposta": "Andar descalço",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tsingy_de_Bemaraha_Strict_Nature_Reserve"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tsingy_de_Bemaraha_Strict_Nature_Reserve",
        "situacao": "ok",
        "texto": "Tsingy de Bemaraha Strict Nature Reserve (Malagasy: Tsingin'i Bemaraha, French: Réserve naturelle intégrale du Tsingy de Bemaraha) is a nature reserve located near the western coast of Madagascar in Melaky Region. The area was listed as a UNESCO World Heritage Site in 1990 due to the unique geography, preserved mangrove forests, and wild bird and lemur populations.\n[…]\nThe southern end of the protected area was changed into the Tsingy de Bemaraha National Park in 1997, while the northern end of the protected area remains as a strict nature reserve (Réserve Naturelle Intégrale). Borders were adjusted in 2011.\n[…]\nIt is characterised by needle-shaped limestone formations, above cliffs over the Manambolo River. The incredibly sharp limestone formations can cut through equipment and flesh easily, which makes traversing them extremely difficult. The word \"Tsingy\" is derived from a local word meaning \"the place where one cannot walk barefoot\".\n[…]\nList of national parks of Madagascar\n[…]\nMadagascar dry deciduous forests\n[…]\nTsingy de Bemaraha National Park\n[…]\nWorld Heritage Sites in Madagascar\n[…]\nTsingy de Bemaraha Official Website (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reserva_Natural_Integral_do_Tsingy_de_Bemaraha",
        "situacao": "ok",
        "texto": "O Reserva Natural Integral do Tsingy de Bemaraha fica na costa Oeste de Madagáscar e é próximo às cidades de Morondava e Antsalova. Por causa da sua geografia única, florestas de mangal preservadas, lémures e pássaros selvagens foi declarada Património Mundial da UNESCO em 1990.\n[…]\nOs Tsingy são um planalto de calcário de 1500 km2 que milhares de anos de erosão pela água e pelo vento esculpiram e transformaram numa densa floresta de aguçadíssimos picos calcários, que chegam até 100 metros de altura.\n[…]\nUNESCO - Reserva Natural Integral do Tsingy de Bemaraha\n[…]\nGaleria da UNESCO - Reserva Natural Integral do Tsingy de Bemaraha",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Arqueias",
      "descricao": "Domínio de microrganismos unicelulares, Archaea, distinto das bactérias e comum em ambientes extremos."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome arqueias, dado a micróbios comuns em fontes termais e lagos salgados, vem de uma palavra grega que significa o quê?",
    "resposta": "Antigas",
    "distratores": [
      "Extremas",
      "Escondidas",
      "Pequenas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Archaea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (  ar-KEE-ə) is a domain of organisms. Traditionally, Archaea included only its prokaryotic members, but has since been found to be paraphyletic, as eukaryotes are known to have evolved from archaea. Even though the domain Archaea cladistically includes eukaryotes, the term archaea (sing. archaeon  ar-KEE-on; from Ancient Greek  ἀρχαῖον arkhaîon 'ancient') in English still generally refers\n[…]\nAlthough these archaea can be present in extremely high numbers (up to 40% of the microbial biomass), almost none of these species have been isolated and studied in pure culture. Consequently, our understanding of the role of archaea in ocean ecology is rudimentary, so their full influence on global biogeochemical cycles remains largely unexplored.\n[…]\nIt has been demonstrated that in all oceanic surface sediments (from 1,000- to 10,000-m water depth), the impact of viral infection is higher on archaea than on bacteria and virus-induced lysis of archaea accounts for up to one-third of the total microbial biomass killed, resulting in the release of ~0.3 to 0.5 gigatons of carbon per year globally.\n[…]\nResearchers recently discovered archaeal involvement in ammonia oxidation reactions. These reactions are particularly important in the oceans. The archaea also appear crucial for ammonia oxidation in soils. They produce nitrite, which other microbes then oxidize to nitrate. Plants and other organisms consume the latter.\n[…]\nSome archaea are commensals, benefiting from an association without helping or harming the other organism. For example, the methanogen Methanobrevibacter smithii is by far the most common archaean in the human flora, making up about one in ten of the prokaryotes in the human gut. In termites and in humans, these methanogens may in fact be mutualists, interacting with other microbes in the gut to aid digestion.\n[…]\nBrowse any completed archaeal genome at UCSC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archaea",
        "situacao": "ok",
        "texto": "Archaea (singular: archaeon; do grego: ἀρχαῖος; archaĩos, antigo), em português:  arquea, arqueiaAO 1990 ou arquaia, é um domínio que agrupa microrganismos unicelulares procariontes (i.e. sem núcleo celular), morfologicamente semelhantes a bactérias, mas genética e bioquimicamente tão distintas destas como dos eucariontes.\n[…]\nO termo archaea tem origem no grego clássico ἀρχαῖα, palavra que significava 'coisas antigas' ou 'antiguidades', pois como os primeiros representantes do domínio Archaea fossem organismos metanogênicos assumiu-se que o seu metabolismo refletia a atmosfera primitiva da Terra (mais concretamente a atmosfera pré-biótica) e seria reflexo da antiguidade destes organismos. Contudo, à medida que novos habitats foram estudados, mais organismos foram descobertos, questionando esse entendimento.\n[…]\nEm conclusão, inicialmente, e durante um período alargado, apenas os microrganismos metanogênicos foram colocados neste novo domínio, e as arqueias eram vistos como extremófilos que existiam apenas em habitats como fontes termais com temperaturas elevadas, lagos salgados e lagos hipersalinos.\n[…]\nAs primeiras arqueias observadas foram extremófilos vivendo em ambientes extremos como fontes termais e lagos salgados, em ambientes sem outros organismos presentes. A melhoria das ferramentas de deteção molecular levou à descoberta de arqueias em quase todos os habitats, incluindo o solo, os oceanos e as áreas pantanosas. Arqueias são particularmente numerosos nos oceanos, e as arqueias presentes no plâncton podem ser um dos grupos de organismos mais abundantes no planeta.\n[…]\nAs arqueias são uma parte importante da vida na Terra, fazendo parte da microbiota de todos os organismos. No microbioma humano, estes organismos são importantes no intestino, na boca e na pele.\n[…]\n(em inglês) Géneros do domínio Archaea",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Vulcão",
      "descricao": "Abertura ou fissura na crosta por onde escapam lava, cinzas e gases de uma câmara magmática."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra que designa as montanhas que expelem lava e cinzas remonta ao nome de que deus romano do fogo?",
    "resposta": "Vulcano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Volcano"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Volcano",
        "situacao": "ok",
        "texto": "A volcano is a vent or fissure in the crust of a planetary-mass object that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface. On Earth, volcanoes are most often found where tectonic plates are diverging or converging, and because most of Earth's plate boundaries are underwater, most volcanoes are found underwater.\n[…]\nThe word volcano (UK: ; US: ) originates from the early 17th century, derived from the Italian name Vulcano, a volcanic island in the Aeolian Islands of Italy, which in turn comes from the Latin name Volcānus or Vulcānus, referring to Vulcan, the god of fire in Roman mythology.\n[…]\nThe set of processes and phenomena involved in volcanic activity is called volcanism [early 19th century: from volcano + -ism]. The study of volcanism and volcanoes is called volcanology [mid-19th century: from volcano + -logy], sometimes spelled vulcanology.\n[…]\nVulcanian eruptions are characterized by yet higher viscosities and partial crystallization of magma, which is often intermediate in composition. Eruptions take the form of short-lived explosions for several hours, which destroy a central dome and eject large lava blocks and bombs. This is followed by an effusive phase that rebuilds the central dome. Vulcanian eruptions are named after Vulcano. Eruption columns from these eruptions do not exceed 20 kilometres (12 mi) in height.\n[…]\nThe planet Venus has a surface that is 90% basalt, indicating that volcanism played a major role in shaping its surface. The planet may have had a major global resurfacing event about 500 million years ago, from what scientists can tell from the density of impact craters on the surface. Lava flows are widespread and forms of volcanism not present on Earth occur as well.\n[…]\nVolcano World\n[…]\n\"Global Volcanism Program\". Smithsonian Institution."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vulc%C3%A3o",
        "situacao": "ok",
        "texto": "Vulcão é uma estrutura geológica criada quando o magma, gases e partículas quentes (como cinza vulcânica) \"escapam\" para a superfície. Eles ejetam altas quantidades de poeira, gases e aerossóis na atmosfera, interferindo no clima. São frequentemente considerados causadores de poluição natural. Tipicamente, os vulcões apresentam formato cónico e montanhoso.\n[…]\nA palavra \"vulcão\" deriva do nome do deus do fogo na mitologia romana Vulcano. A ciência que estuda os vulcões é chamada de vulcanologia, e o profissional que atua na área vulcanólogo, que deve ter conhecimento em geofísica, a outros ramos da geologia tais como a petrologia e a geoquímica.\n[…]\nEventualmente o magma armazenado na câmara magmática é forçado a subir e é extruído e escorre pela superfície do planeta como lava, ou o magma pode aquecer água nas zonas próximas causando descargas explosivas de vapor, pode acontecer também que os gases que se libertam do magma projetem rochas, piroclastos, obsidianas e/ou cinzas vulcânicas. Apesar de serem sempre forças muito poderosas, as erupções podem variar de efusivas a extremamente explosivas.\n[…]\nOs vulcões extintos são aqueles que os vulcanólogos consideram pouco provável que entrem em erupção de novo, mas não é fácil afirmar com certeza que um vulcão está realmente extinto.\n[…]\nUma das luas de Júpiter, Io, é o corpo mais vulcânico de todo o sistema solar devido à interação de forças com Júpiter. Esta lua está coberta de vulcões que expelem enxofre, dióxido de enxofre e rochas ricas em sílica, o que leva a que a sua superfície esteja constantemente a ser renovada. As suas lavas são as mais quentes que se conhecem no sistema solar, com temperaturas que podem ultrapassar os 1 500 °C. Em fevereiro de 2001 a maior erupção de que há registo no sistema solar ocorreu em Io.\n[…]\nLava\n[…]\nÍndice de Explosividade Vulcânica\n[…]\nLista das maiores erupções vulcânicas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Coral",
      "descricao": "Animal marinho colonial da classe Anthozoa, cujos esqueletos formam os recifes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar do esqueleto duro, os corais pertencem ao mesmo grupo de que animais gelatinosos, famosos pelas queimaduras que causam nos banhistas?",
    "resposta": "Águas-vivas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coral",
      "https://en.wikipedia.org/wiki/Cnidaria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coral",
        "situacao": "ok",
        "texto": "Corals are colonial marine invertebrates within the subphylum Anthozoa of the phylum Cnidaria. They typically form compact colonies of many identical individual polyps. Coral species include the important reef builders that inhabit tropical oceans and secrete calcium carbonate to form a hard skeleton.\n[…]\nPresently, corals are classified as species of animals within the sub-classes Hexacorallia and Octocorallia of the class Anthozoa in the phylum Cnidaria. Hexacorallia includes the stony corals and these groups have polyps that generally have a 6-fold symmetry. Octocorallia includes blue coral and soft corals. Species of Octocorallia have polyps with an eightfold symmetry, with each polyp having eight tentacles and eight mesenteries.\n[…]\nRingstead Coral Bed\n[…]\nAllen, G.R.; R. Steene (1994). Indo-Pacific Coral Reef Field Guide. Tropical Reef Research. ISBN 978-981-00-5687-2.\n[…]\nCalfo, Anthony (2007). Book of Coral Propagation. Reading Trees Publications. ISBN 978-0-9802365-0-7.\n[…]\nColin, P.L.; C. Arneson (1995). Tropical Pacific Invertebrates. Coral Reef Press. ISBN 978-0-9645625-0-9.\n[…]\nGosliner, T.; D. Behrens; G. Williams (1996). Coral Reef Animals of the Indo-Pacific, Animals Life from Africa to Hawaiʻi (invertebrates). Sea Challengers. ISBN 978-0-930118-21-1.\n[…]\nSheppard, Charles R.C.; Davy, Simon K.; Pilling, Graham M. (25 June 2009). The Biology of Coral Reefs. OUP Oxford. ISBN 978-0-19-105734-2.\n[…]\nWells, Susan (1988). Coral Reefs of the World. IUCN, UNEP. ISBN 978-2-88032-944-0.\n[…]\nCoral Reefs The Ocean Portal by the Smithsonian Institution\n[…]\nNOAA – Coral Reef Conservation Program\n[…]\nNOAA CoRIS – Coral Reef Biology\n[…]\nNOAA Office for Coastal Management – Fast Facts – Coral Reefs\n[…]\n\"What is a coral?\". Stanford microdocs project. Archived from the original on 2014-01-06. Retrieved 2017-02-04."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cnidaria",
        "situacao": "ok",
        "texto": "Cnidaria ( nih-DAIR-ee-ə, ny-) is a phylum of animals make over 11,000 species of aquatic invertebrates found both in freshwater and marine environments (predominantly the latter), including jellyfish, hydroids, sea anemones, corals and some of the smallest marine parasites.\n[…]\nCoral reefs form some of the world's most productive ecosystems. Common coral reef cnidarians include both anthozoans (hard corals, octocorals, anemones) and hydrozoans (fire corals, lace corals). The endosymbiotic algae of many cnidarian species are very effective primary producers, in other words converters of inorganic chemicals into organic ones that other organisms can use, and their coral hosts use these organic chemicals very efficiently.\n[…]\nIn molecular phylogenetics analyses from 2005 onwards, important groups of developmental genes show the same variety in cnidarians as in chordates. In fact cnidarians, and especially anthozoans (sea anemones and corals), retain some genes that are present in bacteria, protists, plants and fungi but not in bilaterians.\n[…]\nBeaches protected from tides and storms by coral reefs are often the best places for housing in tropical countries. Reefs are an important food source for low-technology fishing, both on the reefs themselves and in the adjacent seas.\n[…]\nHowever, human activities damage reefs in several ways: mining for construction materials; pollution, including large influxes of fresh water from storm drains; commercial fishing, including the use of dynamite to stun fish and the capture of young fish for aquariums; and tourist damage caused by boat anchors and the cumulative effect of walking on the reefs. Coral, mainly from the Pacific Ocean has long been used in jewellery, and demand rose sharply in the 1980s."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Coral",
        "situacao": "ok",
        "texto": "Corais são animais cnidários da classe Anthozoa, que segregam um exosqueleto calcário ou de matéria orgânica, ao contrário das anêmonas-do-mar, que pertencem à mesma classe. Os indivíduos adultos são pólipos individuais ou coloniais e encontram-se em todos os oceanos.\n[…]\nO maior recife de coral vivo encontra-se na Grande Barreira de Coral, na costa de Queensland, Austrália, que é considerado o maior indivíduo vivo da Terra. A maioria das espécies de coral que constroem recifes desenvolve-se em águas tropicais e subtropicais, mas podem encontrar-se pequenas colónias de coral até em águas frias, como ao largo da Noruega.\n[…]\nOs corais são os membros da classe Anthozoa que constroem um exoesqueleto que pode ser de matéria orgânica ou de carbonato de cálcio.\n[…]\nAlguns corais se reproduzem sexuadamente, pela liberação de gametas na água que se fundem formando uma larva chamada planula, ou assexuadamente pelo brotamento, quando um coral brota de outro podendo separar-se dele ou não.\n[…]\nO grupo inclui os importantes construtores de recifes conhecidos como corais hermatípicos, encontrados nos oceanos tropicais.\n[…]\nA palavra coral é muito ambígua porque pode designar organismos marinhos coloniais pertencentes todos ao filo Cnidaria, mas há famílias muito diferentes, cujas exigências ecológicas são, desta maneira, muito diferentes.\n[…]\nO calcário de coral é utilizado em construções, principalmente no leste da África.\n[…]\nOs corais também podem ser utilizados para estudos do clima, para enfeitar aquários.\n[…]\nMuitas pessoas vão para recifes de corais como destino turístico.\n[…]\nOs corais também servem para viveiros de inúmeras espécie de animais marinhos de grande importância econômica ao homem.\n[…]\nInternational Coral Reef Information Network",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Manguezal",
      "descricao": "Ecossistema costeiro de árvores adaptadas à água salobra, na foz de rios em regiões tropicais"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que movimento musical, criado no Recife nos anos noventa por Chico Science, tirou seu nome do ecossistema costeiro de lama e caranguejos?",
    "resposta": "Manguebeat",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Manguebeat"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Manguebeat",
        "situacao": "ok",
        "texto": "Manguebeat (também grafado como manguebit ou mangue beat) é um movimento de contracultura brasileiro. Surgiu a partir de 1991, na cidade de Recife, e se destaca pela combinação original de diversos gêneros musicais, unindo ritmos regionais, como o maracatu, o rock, o hip hop, o funk e a música eletrônica.\n[…]\nÉ representado por um caranguejo, animal típico dos mangues e fonte de alimentação para as comunidades locais, sendo o início do movimento marcado pelo manifesto Caranguejos com Cérebro — é interessante observar que no manifesto, a imagem símbolo descrita pelo seu autor, Fred Zero Quatro, é uma antena parabólica enfiada na lama e não um caranguejo). Alcançou sucesso internacional com a banda Chico Science & Nação Zumbi.\n[…]\nO mangue pernambucano já havia sido abordado na literatura por João Cabral de Melo Neto em Morte e Vida Severina, de 1955, e por Josué de Castro em Homens e Caranguejos, de 1967. Entretanto, nos contextos destas obras, o ecossistema era descrito principalmente pela pobreza e pela fome. Chico Science, por outro lado, buscou associar a complexidade orgânica dos manguezais à diversidade da cena musical local.\n[…]\nJosué de Castro é citado como pessoa de interesse do movimento Manguebeat no manifesto e na faixa \"Da Lama ao Caos\", apesar de José Teles afirmar que Chico Science não teria lido nenhuma obra do geógrafo até pouco antes de sua morte.\n[…]\nO mangue beat, movimento musical e estético que nasceu em Pernambuco nos anos 1990, mudou a visibilidade das periferias e das manifestações culturais da Região Metropolitana do Recife e colocou o estado na rota do mercado musical mundial, após o lançamento de bandas como Chico Science e Nação Zumbi e Mundo Livre S.A.\n[…]\nNotáveis artistas e bandas que fazem ou fizeram parte do movimento Manguebeat incluem:\n[…]\n«Mangue, Site Trama»"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Monte Roraima",
      "descricao": "Tepui de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Monte Roraima é apontado como inspiração de um romance de 1912 sobre dinossauros num planalto isolado. Que escritor britânico o escreveu?",
    "resposta": "Arthur Conan Doyle",
    "distratores": [
      "H. G. Wells",
      "Rudyard Kipling",
      "Robert Louis Stevenson"
    ],
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
        "texto": "Monte Roraima é uma montanha localizada na América do Sul, na tríplice fronteira entre Brasil, Venezuela e Guiana. Constitui um tepui, um tipo de monte em formato de mesa bastante característico do planalto das Guianas. Delimitado por escarpas de cerca de 1 000 metros de altura, seu planalto apresenta um ambiente totalmente diferente da floresta tropical e da savana que se estende a seus pés.\n[…]\nConhecido pelos ocidentais apenas no século XIX, o monte Roraima foi escalado pela primeira vez em 1884, por uma expedição britânica chefiada por Everard Ferdinand im Thurn. Entretanto, apesar das diversas expedições posteriores, sua fauna, flora e geologia permanecem largamente desconhecidas. A história de uma dessas incursões inspirou sir Arthur Conan Doyle a escrever o livro O Mundo Perdido, em 1912.\n[…]\nA mesma rota foi utilizada em 1869 e 1872 pelo geólogo britânico Charles Barrington Brown. Chegando à extremidade sudeste do monte Roraima, Brown observou a presença de altos pináculos de rocha nesta área e propôs a subida à montanha através de um balão. Outra expedição, liderada por Flint e Edginton, chegou à montanha em 1877 e também anotou o caráter impenetrável das falésias ao norte, leste e sul (já exploradas nos dias atuais).\n[…]\nDevido à descoberta e exploração tardias o monte Roraima só passou a ser considerado o ponto culminante do planalto das Guianas em 1931, quando uma comissão multinacional esteve no local para determinar a localização exata da tríplice fronteira entre Brasil, Guiana e Venezuela. As falésias ao norte ao nível da \"proa\" foram escaladas em 1973 pelos alpinistas britânicos Mo Anthoine, Joe Brown, Don Whillans e Hamish MacInnes.\n[…]\nSaiba tudo sobre o Monte Roraima - Muitas Informações - Portal Evolution",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro do norte do Chile, entre o Oceano Pacífico e os Andes, famoso pela secura extrema."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Por ter um solo seco e estéril parecido com o de outro planeta, o deserto do Atacama serve de campo de testes para robôs que vão a qual planeta?",
    "resposta": "Marte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atacama_Desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau located on the Pacific coast of South America, in the north of Chile. Stretching over a 1,600-kilometre-long (1,000-mile) strip of land west of the Andes Mountains, it covers an area of 105,000 km2 (41,000 mi2), which increases to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nThe Atacama Desert flowering (Spanish: desierto florido) can be seen from September to November in years with sufficient precipitation, as happened in 2015.\n[…]\nThe Atacama Desert is popular with all-terrain sports enthusiasts. Various championships have taken place here, including the Lower Atacama Rally, Lower Chile Rally, Patagonia-Atacama Rally, and the latter Dakar Rally's editions. The rally was organized by the Amaury Sport Organisation and held in 2009, 2010, 2011, and 2012. The dunes of the desert are ideal rally races located in the outskirts of the city of Copiapó.\n[…]\nThe 2013 Dakar 15-Day Rally started on 5 January in Lima, Peru, through Chile, Argentina and back to Chile finishing in Santiago. Visitors also use the Atacama Desert sand dunes for sandboarding (Spanish: duna).\n[…]\nAn event called Volcano Marathon takes place near the Lascar volcano in the Atacama Desert.\n[…]\nMost people who go to tour the sites in the desert stay in the town of San Pedro de Atacama. The Atacama Desert is in the top three tourist locations in Chile. The specially commissioned ESO hotel is reserved for astronomers and scientists.\n[…]\nAtacama Giant\n[…]\n\"Mars-like Soils in the Atacama Desert, Chile, and the Dry Limit of Microbial Life\", NASA press release\n[…]\n\"Roving robot finds desert life\", article in Nature\n[…]\nDetailed article issued by the Geological Society of America on the history of aridity of the Atacama Desert\n[…]\nAtacama Desert Photo Gallery, photos of many different landscapes, flora and fauna of the Atacama Desert"
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
    "indice": 27,
    "ancora": {
      "nome": "Ararinha-azul",
      "descricao": "Pequena arara azul (Cyanopsitta spixii) da caatinga do norte da Bahia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Blu, um macho de ararinha-azul criado nos Estados Unidos, é o herói de que animação de 2011 dirigida pelo brasileiro Carlos Saldanha?",
    "resposta": "Rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_(2011_film)",
      "https://en.wikipedia.org/wiki/Spix%27s_macaw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_(2011_film)",
        "situacao": "ok",
        "texto": "Rio is a 2011 American animated adventure comedy film directed by Carlos Saldanha and written by Don Rhymer, Joshua Sternin, Jennifer Ventimilia, and Sam Harper. The title refers to the Brazilian city of Rio de Janeiro, where the film is set. Produced by 20th Century Fox Animation and Blue Sky Studios, the film features the voices of Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Leslie Mann, Ge\n[…]\nThe film was also dedicated to the memory of Clymene Campos Saldanha, the mother of Carlos Saldanha who died on December 11, 2010, during production.\n[…]\nIt therefore marked the second film that succeeded in topping the overseas box office three times in 2011, joining Tangled, although it is the only one that did it on three consecutive weekends.\n[…]\nRio finished 2011 with a final gross of $36.8 million (R$68.7 million), the second highest income of the year after The Twilight Saga: Breaking Dawn – Part 1.\n[…]\nA sequel, titled Rio 2, was released on April 11, 2014. Carlos Saldanha, the creator and director of the first film, returned as director. All of the main cast—Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Jamie Foxx, will.i.am, Tracy Morgan, George Lopez, Jake T. Austin, Leslie Mann, and Rodrigo Santoro—reprised their roles. New cast includes Andy García, Bruno Mars, Kristin Chenoweth, Rita Moreno, Amandla Stenberg, Rachel Crow, Pierce Gagnon, and Natalie Morales.\n[…]\nDirector Carlos Saldanha had kept the possibility for a third Rio film open. In an April 2014 interview, he stated, \"Of course, I have a lot of stories to tell, so we're [starting to] prepare for it.\" In a press kit released by Disney for the 2022 film The Ice Age Adventures of Buck Wild, it is mentioned that \"the next installment in the Rio franchise\" is in development, with Ray DeLaurentis writing the screenplay.\n[…]\nMedia related to Rio (2011 film) at Wikimedia Commons\n[…]\nQuotations related to Rio (2011 film) at Wikiquote"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spix%27s_macaw",
        "situacao": "ok",
        "texto": "Spix's macaw (Cyanopsitta spixii), also known as the little blue macaw, or simply blue macaw, is a macaw species that was endemic to Brazil. It is a member of tribe Arini in the subfamily Arinae (Neotropical parrots), part of the family Psittacidae (the true parrots). It was first described in 1638 by German naturalist Georg Marcgrave when he was working in Pernambuco in Dutch Brazil.\n[…]\nNaturalists have noted the Spix's similarity to other smaller members of tribe Arini based on general morphology as long ago as Rev. F.G. Dutton, president of the Avicultural Society U.K. in 1900: \"it's more like a conure\" ('conure' is not a defined taxon – in Dutton's time, it referred to the archaic genus Conurus; today those would be among the smaller non-macaw parakeets in Arini). Brazilian ornithologist Helmut Sick stated in 1981: \"Cyanopsitta spixii...is not a real macaw\".\n[…]\n(Sick's remark was in the context of an article on Lear's macaw, a larger blue macaw. He recognized, as Spix had not 150 years before, that C. spixii is notably different from the larger macaws).\n[…]\nIn 1990, the Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA, Brazilian Institute of Environment and Renewable Natural Resources) established the Permanent Committee for the Recovery of Spix's Macaw, called CPRAA, and its Ararinha Azul project (Little Blue Macaw project) in order to conserve the species. At that time, the known captive population of Spix's stood at 15, and one in the wild. Early 1990 was the low point for conservation of the Spix.\n[…]\nNote: table data based on \"Al Wabra ICMBio data from June 2013\" and Watson, R. (Studbook Keeper) 2011. \"Annual Report and Recommendations for 2011: Spix's Macaw (Cyanopsitta spixii)\".\n[…]\nARKive: Cyanopsitta spixii – photos, videos, information.\n[…]\nAnimal diversity web:  Cyanopsitta spixii\n[…]\nBBC Nature: Spix's macaw"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_%282011%29",
        "situacao": "ok",
        "texto": "Rio é um filme americano de animação digital de 2011, dos gêneros musical e comédia, produzido pela 20th Century Fox Animation e pela Blue Sky Studios. Dirigido por Carlos Saldanha, o título refere-se ao município do Rio de Janeiro, localizado no Brasil, onde o filme é ambientado. O longa-metragem conta a história de Blu, uma ararinha-azul macho que é levada à cidade para acasalar com uma fêmea ch\n[…]\nRio estreou em 22 de março de 2011 no bairro do Leblon, Rio de Janeiro, seguido por um lançamento nacional no Brasil em 8 de abril de 2011; nos Estados Unidos, o filme estreou em 15 de abril de 2011. Foi recebido com críticas positivas dos críticos de cinema, que elogiaram o visual, a dublagem e a música. O filme também foi um sucesso de bilheteria, arrecadando mais de US$ 143 milhões nos Estados Unidos e US$ 484 milhões em todo o mundo.\n[…]\nCarlos Saldanha teve a ideia do filme pela primeira vez em 2005, envolvendo um pinguim que seria levado da Antártida pelas águas do Oceano Atlântico até chegar nas praias de Ipanema; no entanto, a utilização de um pinguim foi alterada para uma arara depois que o diretor soube da produção de Happy Feet e Surf's Up, dois outros filmes de animação que também envolviam pinguins. Saldanha apresentou a ideia a Chris Wedge nos estúdios da Blue Sky em 2006.\n[…]\nA premiere mundial de Rio aconteceu no dia 22 de março de 2011, num cinema da rede Kinoplex localizado no bairro do Leblon, Rio de Janeiro, acompanhado de um lançamento nacional no Brasil no dia 8 de abril. Nos Estados Unidos, o filme estreou em 10 de abril de 2011 no Grauman's Chinese Theatre em Hollywood, Califórnia, sendo lançado amplamente em todo o país cinco dias depois.\n[…]\nEm abril de 2011, a empresa Oreo anunciou sua edição especial de bolachas com um creme azul em promoção do filme nos Estados Unidos. A promoção incluiu adesivos dentro de cada pacote dos biscoitos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Umbuzeiro",
      "descricao": "Árvore da caatinga, Spondias tuberosa, que produz o umbu e armazena água nas raízes."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que escritor chamou o umbuzeiro de árvore sagrada do sertão, no seu livro sobre a Guerra de Canudos?",
    "resposta": "Euclides da Cunha",
    "distratores": [
      "Graciliano Ramos",
      "José de Alencar",
      "Guimarães Rosa"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Umbuzeiro",
      "https://pt.wikipedia.org/wiki/Os_Sertões"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Umbuzeiro",
        "situacao": "ok",
        "texto": "Spondias tuberosa Arruda, popularmente conhecido como umbuzeiro, imbuzeiro ou jique é uma árvore de pequeno porte (mede até sete metros de altura), pertencente à família das anacardiáceas, de copa larga (até quinze metros de largura), originária dos chapadões semiáridos do Nordeste brasileiro, que se destaca por fornecer sombra e aconchego. Dada a importância de suas raízes, foi chamada \"árvore sa\n[…]\nA S. tuberosa possui nomes vulgares pelo Brasil, por exemplo, Alagoas, imbu e imbuzeiro, na Bahia, imbu, umbu e umbuzeiro, no Ceará, ambu, embu, imbu, imbuzeiro, ombu e umbuzeiro, na Paraíba, imbuzeiro e\n[…]\nA partir de projetos de beneficiamento do umbu em minifábricas do sertão baiano, essa fruta passou a ter importância na geração de renda e organização das comunidades rurais daquela região. Suas folhas, de grande valor alimentício, com gosto \"azedinho\", também são usadas como alimento pelos seres humanos. O fruto do umbuzeiro é denominado umbu ou imbu.\n[…]\nUma das alternativas para o melhoramento nutricional desses animais é a utilização do Umbuzeiro em sua dieta. O umbuzeiro é uma espécie do gênero Spondias, que pertence à família Anacardiaceae, sendo nativa do semiárido brasileiro. Ela é uma árvore frutífera que possui alta distribuição na Região Nordeste, sendo capaz de resistir às secas severas e ao clima nordestino. Por ser uma espécie túbera suas raízes absorvem bastante água.\n[…]\nConsiderando as características do Umbuzeiro, seus frutos, folhagens e túberas são destinados à alimentação dos animais domésticos e selvagens. Quando o Umbuzeiro está no período de frutificação - que ocorre entre novembro e abril -, é bastante comum observar-se nos recintos onde os caprinos são confinados para o pernoite uma quantidade significativa de caroços de umbu em suas fezes, evidenciando que esses animais se alimentaram do fruto.\n[…]\nA riqueza do umbuzeiro\n[…]\nUmbu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_Sertões",
        "situacao": "ok",
        "texto": "Os Sertões é um livro do escritor e jornalista brasileiro Euclides da Cunha, publicado em 1902. É considerado como o primeiro livro-reportagem brasileiro.\n[…]\nTrata da Guerra de Canudos (1896–1897), ocorrida em Canudos, município do interior da Bahia. Euclides da Cunha presenciou uma parte da guerra como correspondente do jornal O Estado de S. Paulo. Pertence, ao mesmo tempo, à prosa científica e à prosa artística. Pode ser entendido como uma obra de Sociologia, Geografia, História ou crítica humana, mas não é errado lê-lo como uma epopeia da vida sertaneja em sua luta diária contra a paisagem e a incompreensão da elite.\n[…]\nO determinismo julgava que o homem é produto do meio (geografia), da raça (hereditariedade) e do momento histórico (cultura). O autor faz uma análise da psicologia do sertanejo e de seus costumes; é uma descrição feita pelo sociólogo e antropólogo Euclides da Cunha, que mostra o habitante do lugar, sua relação com o meio, sua gênese etnológica, seu comportamento, crença e costume; mas depois se fixa na figura de Antônio Conselheiro, o líder de Canudos.\n[…]\nFala sobre o que foi a Guerra de Canudos e explica com riqueza de detalhes os fatos dessa guerra que dizimou a população de Canudos. Uma descrição feita por Euclides da Cunha, relatando as quatro expedições a Canudos, criando o retrato real só possível pela testemunha ocular da fome, da peste, da miséria, da violência e da insanidade da guerra.\n[…]\nOs Sertões em áudio livro [1]\n[…]\nArtigo Afinal, do que trata o livro Os Sertões?\n[…]\n«Juízos críticos: Os sertões : Campanha de Canudos». Biblioteca Brasiliana Guita e José Mindlin. Consultado em 8 de julho de 2023"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Bromélia",
      "descricao": "Planta da família Bromeliaceae, muitas vezes epífita, cujas folhas em roseta acumulam água."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que fruta tropical, muito consumida no Brasil, vem de uma planta da mesma família das bromélias?",
    "resposta": "Abacaxi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bromeliaceae",
      "https://en.wikipedia.org/wiki/Pineapple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bromeliaceae",
        "situacao": "ok",
        "texto": "Bromeliaceae, members of which are called bromeliads (), is a family of monocot flowering plants of about 80 genera and 3700 known species, native mainly to the tropical Americas, with several species found in the American subtropics and one in tropical west Africa, Pitcairnia feliciana.\n[…]\nThe long period between the origin and diversification of bromeliads, during which no extant species evolved, suggests that there was much speciation and extinction during that time, which would explain the genetic distance of the Bromeliaceae from other families within the Poales.\n[…]\nThe family Bromeliaceae is organized into eight subfamilies:\n[…]\nBromelioideae\n[…]\nBromeliads are important food plants for many peoples. For example, the Pima of Mexico occasionally consume flowers of Tillandsia erubescens and T. recurvata due to their high sugar content; in Argentina and Bolivia, the shoot apices of T. rubella and T.\n[…]\nmaxima are consumed; in Venezuela, indigenous coastal tribes eat a sour-tasting but sweet-smelling berry, known as 'Maya', of Bromelia chrysantha as a fruit or in fermented beverages; in Chile, the sweet fruit of Greigia sphacelata, known as 'chupones', is consumed raw.\n[…]\nList of foliage plant diseases (Bromeliaceae)\n[…]\nThe New Bromeliad Taxon List A constantly updated list of current Bromeliad names and synonyms.\n[…]\nLuther, H. E. (2008) An Alphabetical List of Bromeliad Binomials, Eleventh Edition The Marie Selby Botanical Gardens, Sarasota, Florida. Published by The Bromeliad Society International.\n[…]\nBromeliad care information\n[…]\nBromeliad cultivar registry\n[…]\nBromeliads of Chile in Chileflora\n[…]\nPalm trees, small palms, Cycads, Bromeliads and tropical plants Photos of Bromeliads and associated flora, with information on habitat and cultivation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pineapple",
        "situacao": "ok",
        "texto": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.\n[…]\nThe pineapple is native to South America, where it has been cultivated for many centuries. The introduction of the pineapple plant to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. The fruit, particularly its juice, has diverse uses in cuisines and desserts.\n[…]\nHistorically, tropical fruit agriculture, such as for pineapples, has been concentrated in so-called \"banana republics\".\n[…]\nThe European Union consumed 50% of the global total for pineapple juice in 2012–2016. The Netherlands was the largest importer of pineapple juice in Europe. Thailand, Costa Rica and the Netherlands are the major suppliers to the European Union market in 2012–2016. Countries consuming the most pineapple juice in 2017 were Thailand, Indonesia and the Philippines, having a combined consumption of 47% of the world total.\n[…]\nThe consumption of pineapple juice in China and India is low compared to their populations.\n[…]\nThe fabric was a luxury export from the Philippines during the Spanish colonial period and gained favor among European aristocracy in the 18th and 19th centuries. Domestically, they were used to make the traditional barong tagalog, baro't saya, and traje de mestiza clothing of the Filipino upper class, as well as women's kerchiefs (pañuelo). They were favored for their light and breezy quality, which was ideal in the hot tropical climate of the islands."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bromeliaceae",
        "situacao": "ok",
        "texto": "Bromeliaceae Juss. é uma família de monocotiledôneas, conhecidas comummente por bromeliáceas, que segundo a classificação filogenética AGP III (2009) pertence à ordem dos Poales, com plantas terrestres, rupícolas ou, principalmente epífitas, possui 3 172 espécies, distribuídas em 58 gêneros, sendo dividida em três subfamílias: Pitcairnioideae, Tillandsioideae e Bromelioideae, no entanto, estudos r\n[…]\nNo Brasil, é encontrada em todo o seu território nacional em 44 gêneros e aproximadamente 1 290 espécies, na qual, 1 145 são endêmicas, embora novas espécies são encontradas a cada dia,se tornando quase impossível termos dados atualizados a respeito dessa planta. É uma família que se destaca nos neotrópicos pela enorme diversidade genérica e específica, com exceção de uma única espécie, Pitcairnia feliciana, que ocorre no oeste do continente africano.\n[…]\nAs espécies de Bromeliaceae apresentam de modo geral hábito herbáceo, porém, pode ocorrer raramente o hábito lenhoso em espécies andinas do gênero Puya. As espécies pertencentes a esse gênero como Puya raimondii, chegam a ultrapassar os 10 metros de altura. Visto que, prevalecem na família as plantas de pequeno a médio porte. Em Tillandsia usneoides existe a formação de plantas pendentes, como uma longa cortina, bastante peculiar em formações florestais, caracterizando como epífita.\n[…]\nA reprodução será realizada de duas formas, assexuadamente ou sexuadamente. Na reprodução assexuada, ou vegetativa, produzem-se brotos decorrentes da planta mãe, que talvez saiam da base da planta por estolhos ou rizomas, ou saiam do interior da própria roseta. A produção de estolhos é característica de algumas espécies. A reprodução sexuada, ou por sementes é comum para muitas especies da família.\n[…]\nClassifica a família na classe Liliopsida, subclasse Zingiberidae, ordem Bromeliales com 12 gêneros.\n[…]\nhttp://www.jardimdeflores.com.br/ECOLOGIA/bromelia1.html",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Floresta de kelp",
      "descricao": "Ecossistema costeiro submerso dominado por grandes algas pardas do grupo kelp."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que mamífero marinho do Pacífico Norte protege as florestas de kelp ao comer os ouriços-do-mar que devoram essas algas?",
    "resposta": "Lontra-marinha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kelp_forest",
      "https://en.wikipedia.org/wiki/Sea_otter"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kelp_forest",
        "situacao": "ok",
        "texto": "Kelp forests are underwater areas with a high density of kelp, which covers a large part of the world's coastlines. Smaller areas of anchored kelp are called kelp beds. They are recognized as one of the most productive and dynamic ecosystems on Earth. Although algal kelp forest combined with coral reefs only cover 0.1% of Earth's total surface, they account for 0.9% of global primary productivity.\n[…]\nA wide range of sea life uses kelp forests for protection or food, including fish. In the North Pacific kelp forests, particularly rockfish, and many invertebrates, such as amphipods, shrimp, marine snails, bristle worms, and brittle stars. Many marine mammals and birds are also found, including seals, sea lions, whales, sea otters, gulls, terns, snowy egrets, great blue herons, and cormorants, as well as some shore birds.\n[…]\nKelp forests have been important to human existence for thousands of years. Indeed, many now theorise that the first colonisation of the Americas was due to fishing communities following the Pacific kelp forests during the last ice age.\n[…]\nOne theory contends that the kelp forests that would have stretched from northeast Asia to the American Pacific coast would have provided many benefits to ancient boaters  The kelp forests would have provided many sustenance opportunities, as well as acting as a type of buffer from rough water. Besides these benefits, researchers believe that the kelp forests might have helped early boaters navigate, acting as a type of \"kelp highway\".\n[…]\nAquaculture of giant kelp\n[…]\n\"Kelp Forest & Rocky Subtidal Habitats\". noaa.gov. Archived from the original on 2007-03-22.\n[…]\n\"2 Hours of Vancouver Island Kelp Forests\". ScubaBC. ScubaBC.ca. 2025-11-12. Retrieved 2025-11-13. Two hours of immersive ambient footage filmed over 80 dives in the Browning Passage area of northern Vancouver Island, featuring bull kelp, giant kelp, and marine life."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sea_otter",
        "situacao": "ok",
        "texto": "The sea otter (Enhydra lutris) is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. Adult sea otters typically weigh between 14 and 45 kg (30–100 lb), making them the heaviest members of the weasel family, but among the smallest marine mammals. Unlike most marine mammals, the sea otter's primary form of insulation is an exceptionally thick coat of fur, the dense\n[…]\nNorth Pacific areas that do not have sea otters often turn into urchin barrens, with abundant sea urchins and no kelp forest. Kelp forests are extremely productive ecosystems. Kelp forests sequester (absorb and capture) CO2 from the atmosphere through photosynthesis. Sea otters may help mitigate effects of climate change by their cascading trophic influence.\n[…]\nReintroduction of sea otters to British Columbia has led to a dramatic improvement in the health of coastal ecosystems, and similar changes have been observed as sea otter populations recovered in the Aleutian and Commander Islands and the Big Sur coast of California. However, some kelp forest ecosystems in California have also thrived without sea otters, with sea urchin populations apparently controlled by other factors.\n[…]\nThe role of sea otters in maintaining kelp forests has been observed to be more important in areas of open coast than in more protected bays and estuaries.\n[…]\n(Berents otters, Lutra lutra, occupy the same ecological niche and so are believed to help to control them in the Berents but this has not been studied.) Sea otters are also known to control the population of highly destructive invasive species such as the European green crab, which the American government has spent millions trying to unsuccessfully eradicate. The health of the kelp forest ecosystem is significant in nurturing populations of fish, including commercially important fish species."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Floresta_de_algas",
        "situacao": "ok",
        "texto": "Floresta de algas (também floresta de kelp ou bosque submarino) são comunidades submarinas com alta densidade de macroalgas (na sua maior parte da ordem Laminariales) que ocorrem em extensa áreas da zona nerítica (eufótica) ao longo das costas continentais em regiões de águas frias e abundantes em nutrientes.\n[…]\nAlém disso, várias espécies de peixes pelágicos e de mamíferos marinhos estão associados às florestas de algas, geralmente interagindo perto dos bordos enquanto os visitam para se alimentarem dos organismos residentes.\n[…]\nNum exemplo bem estudado das florestas de algas do Alasca, a população de lontras marinhas (Enhydra lutris) controla as populações de ouriços-do-mar herbívoros através da predação: quando as lontras marinhas são removidas do ecossistema (por exemplo, pela exploração humana), as populações de ouriços ficam livres do controlo predatório e crescem para níveis que conduzem ao aumento excessivo da pressão destes herbívoros sobre as algas, provocando o colapso da população destas.\n[…]\nEm consequência, a deterioração da população de algas resulta na perda da estrutura física do ecossistema e, posteriormente, na perda de outras espécies associadas ao habitat, desencadeando um ciclo de retroacção que por sua vez limita as populações de herbívoros. Nestas florestas de algas do Alasca, as lontras-marinhas são as espécies-chave que medeiam esta cascata trófica e asseguram a sustentabilidade global do ecossistema.\n[…]\nNas águas costeiras do sul da Califórnia, as florestas de algas persistem na ausência de lontras marinhas sendo o controle das populações de ouriços herbívoros mediado por um conjunto de predadores que inclui lagostas e grandes peixes grandes, com destaque para a espécie Semicossyphus pulcher, um bodião (Labridae) de grandes dimensões.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Erva-de-passarinho",
      "descricao": "Nome popular de plantas hemiparasitas que crescem sobre galhos de árvores, cujas sementes são espalhadas por aves."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que planta da tradição natalina europeia, sob a qual os casais se beijam, é uma erva-de-passarinho?",
    "resposta": "Visco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mistletoe",
      "https://en.wikipedia.org/wiki/Viscum_album"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mistletoe",
        "situacao": "ok",
        "texto": "Mistletoe is the common name for obligate hemiparasitic plants in the order Santalales. They are attached to their host tree or shrub by a structure called the haustorium, through which they extract water and nutrients from the host plant. There are hundreds of species which mostly live in tropical regions.\n[…]\nEuropean mistletoe has smooth-edged, oval, evergreen leaves borne in pairs along the woody stem, and waxy, white berries that it bears in clusters of two to six. The eastern mistletoe of North America is similar, but has shorter, broader leaves and longer clusters of ten or more berries.\n[…]\nMost mistletoe seeds are spread by birds who eat the 'seeds' (in actuality drupes). Of the many bird species that feed on them, the mistle thrush is the best-known in Europe, the phainopepla in southwestern North America, and Dicaeum flowerpeckers in Asia and Australia. Depending on the species of mistletoe and the species of bird, the seeds are regurgitated from the crop, excreted in their droppings, or stuck to the bill and causing the bird to have to wipe it off onto a branch.\n[…]\nThere are 1500 species of mistletoe, varying widely in toxicity to humans; the European mistletoe (Viscum album) is more toxic than the American mistletoe (Phoradendron serotinum).\n[…]\nIn European mistletoe (Viscum), viscumin is the more dangerous  active toxin. It acts by irreversibly inhibiting ribsomal protein synthesis in cells,  which leads to the death of the affected cell, tissue damage in the area of exposure from mass cell death in the very short term, with the potential for organ failure and death depending on the level of exposure.\n[…]\n\"Mistletoe\" . Encyclopædia Britannica. Vol. 16 (9th ed.). 1883.\n[…]\n\"Mistletoe\" . The New Student's Reference Work . 1914.\n[…]\nANBG: Mistletoe Accessed 22 January 2018."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Viscum_album",
        "situacao": "ok",
        "texto": "Viscum album is a species of mistletoe in the family Santalaceae, commonly called European mistletoe, common mistletoe, or simply mistletoe (Old English mistle). It is native to Europe, as well as western and southern Asia. V. album is found only rarely in North America, as an introduced species.\n[…]\nThe European mistletoe has one of the largest genomes of all organisms, at about 90 billion base pairs (compared to ~3 billion bp in the human genome). It encodes 39,092 distinct open reading frames encoding 32,064 proteins.\n[…]\nIf ingested in a concentrated form, such as a herbal tea infusion, European mistletoe is potentially fatal. People have been known to become seriously ill from eating the berries.\n[…]\nEuropean mistletoe features in many myths and legends, from early written sources into the modern period. In cultures across pre-Christian Europe, mistletoe was often seen as a representation of divine male essence (and thus romance, fertility, and vitality).\n[…]\nWhen Christianity became widespread in Europe after the third century AD, the ancient religious or mystical respect for the mistletoe plant was absorbed only as a cultural tradition. In some way that is not presently understood, this may have led to the widespread custom of kissing under the mistletoe plant during the Christmas season.\n[…]\nThe Latin word viscum, 'mistletoe, birdlime' is the source of viscous.\n[…]\nMistletoe is an ingredient of biska, a pomace brandy-based liquor made in Istria.\n[…]\nMistletoe leaves and young twigs are used by herbalists and preparations made from them are popular in Europe, especially in Germany, for attempting to treat circulatory and respiratory system problems. Use of mistletoe extract in the treatment of cancer originated with Rudolf Steiner, the founder of Anthroposophy."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erva-de-passarinho",
        "situacao": "ok",
        "texto": "Erva-de-passarinho, visco, ou guirarepoti, são as plantas arbustivas hemiparasitas das famílias Loranthaceae e Santalaceae, pertencentes à Ordem das Santalales. Nativa em todos os continentes do mundo, parasita diversas espécies de árvores de grande porte.\n[…]\nVisco é a denominação popular mais comum em Portugal, mas a planta também é conhecida como visgo ou agárico. No Brasil, ela é amplamente conhecida como erva-de-passarinho ou enxerto-de-passarinho.\n[…]\nAs espécies europeias e asiáticas são:\n[…]\nViscum album abietis, o visco dos abetos.\n[…]\nAs ervas-de-passarinho são plantas cuja dispersão de sementes se dá a partir da planta-mãe, sendo feita por aves frugívoras ou morcegos através de defecação ou regurgitação sobre as futuras plantas hospedeiras ou sobre seus galhos, como ocorre nos gêneros Struthanthus e Psittacanthus.\n[…]\nNa Europa, a planta está associada em algumas culturas às festividades do Natal, assim como o azevinho, ou ao renascimento, havendo uma lenda escandinava que diz que duas pessoas que se encontram debaixo de um visco devem se beijar para celebrar com amor a ressurreição de Balder, divindade da mitologia nórdica. Já os druidas a tinham como planta sagrada e sempre a colhiam no inverno, quando realizavam seus importantes atos religiosos.\n[…]\nNa série em quadrinhos Asterix, o druida Panoramix colhia o gui (“visco” em francês) das árvores.\n[…]\nO principal taxonomista das ervas-de-passarinho é o canadense Job Kuijt, mas há especialistas em quase todas as famílias. Destaca-se também o trabalho de Daniel L. Nickrent, que aborda não somente ervas-de-passarinho, mas plantas parasitas no geral, com foco em análises moleculares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Saguaro",
      "descricao": "Cacto colunar gigante, Carnegiea gigantea, de braços erguidos, típico do sudoeste dos Estados Unidos e do noroeste do México."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "As flores do saguaro abrem à noite e são visitadas por um mamífero voador que bebe seu néctar e as poliniza. Que animal é esse?",
    "resposta": "Morcego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saguaro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saguaro",
        "situacao": "ok",
        "texto": "The saguaro ( sə-(G)WAR-oh, Spanish: [saˈɣwaɾo]; Carnegiea gigantea) is a tree-like cactus species in the monotypic genus Carnegiea that can grow to be over 12 meters (40 feet) tall. It is native to the Sonoran Desert in Arizona, the Mexican state of Sonora, and the Whipple Mountains and Imperial County areas of California. Saguaro typically grow at elevations ranging from sea level to 4,500 feet \n[…]\nWhat tribe Carnegiea gigantea belongs to is a matter of taxonomic dispute. A molecular analysis of the cactus family in 2010 placed the saguaro in the Echinocereinae. The ARS Germplasm Resources Information Network places it in the Echinocereeae.\n[…]\nThe generic name honors businessman and philanthropist Andrew Carnegie. The specific epithet gigantea refers to its formidable size.\n[…]\nThe genus name Carnegiea honors industrialist Andrew Carnegie (1835-1919), whose Carnegie Institution established the Desert Botanical Laboratory in Tucson in 1903. The species epithet gigantea derives from the Greek root for giant, giga, due to the massive size of the cactus.\n[…]\nThe saguaro provides voluminous amounts of pollen, nectar, and fruits. The fruits are eaten by the white-winged dove and ants, so that seeds rarely escape to germinate. White-winged doves are important pollinators, visiting blooms more often than any other bird species. For desert white-winged doves, 60% or more of their diet is saguaro-based. Their breeding cycle coincides with that of the saguaro blooming.\n[…]\nA variety of alkaloids, including carnegine, gigantine, and salsolidine, make the stems quite bitter, and an unpalatable way to gain water.\n[…]\nThe saguaro features prominently in indigenous folklore and religions.\n[…]\nFlora of North America: Carnegiea gigantea\n[…]\nJepson Flora Project: Carnegiea gigantea\n[…]\nCalphotos: Carnegiea gigantea\n[…]\nUSDA Plants Profile: Carnegiea gigantea\n[…]\nSaguaroCactus.org\n[…]\nwww.desertmuseum.org/kids/facts/?animal=Saguaro%20Cactus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saguaro",
        "situacao": "ok",
        "texto": "O saguaro (Carnegiea gigantea) faz parte da família Cactaceae, sendo nativo da região do Deserto de Sonora, que abrange parte do México e Estados Unidos. Trata-se de um cacto colunar, com ramificações em forma de candelabro, espinhos curtos e grandes flores brancas e tubulares, com antese noturna.\n[…]\nSe várias plantas de saguaro estabelecem-se sob uma mesma planta facilitadora, esta tende a morrer mais rápido. Como estratégia de dispersão de sementes, os frutos do saguaro amadurecem nas épocas mais quentes que antecedem as monções no deserto, animais buscam estes frutos como alimento e os consomem abaixo das sombras das plantas facilitadoras, justamente antes do início do período de chuvas.\n[…]\nAs relações entre ambos são comparadas a um ciclo oscilatório entre predador e presa, onde o saguaro (predador) acelera a morte da planta facilitadora (presa), reduzindo potenciais microclimas para lento estabelecimento do próprio saguaro, possibilitando novo aumento das populações da plantas facilitadoras.\n[…]\nQuando o saguaro independe de plantas facilitadoras, seu crescimento depende do clima, da precipitação e de sua localização. O período de maior crescimento do saguaro é quando começam a surgir seus característicos braços, normalmente aos 50 a 70 anos de idade. Em áreas de menores precipitações, o aparecimento dos braços pode levar até 100 anos. O período fértil da planta começa a partir dos 35 anos. Suas flores surgem no ápice do tronco principal e/ou no ápice dos braços.\n[…]\nA idade de saguaro adulto é considerada é aproximadamente 125 anos. Pode pesar cerca de seis toneladas e chegar a 15 metros de altura. O tempo médio de vida de um saguaro é de cerca de 175 anos, porém há planta de até 200 anos.\n[…]\n«Saguaro Cactus at cactus-guide.com» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Superflorada do deserto",
      "descricao": "Fenômeno raro em que sementes dormentes de flores silvestres do deserto germinam e florescem ao mesmo tempo após uma estação muito chuvosa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No deserto do Atacama, as raras superfloradas costumam vir depois de chuvas trazidas por que fenômeno climático do Pacífico?",
    "resposta": "El Niño",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flowering_desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flowering_desert",
        "situacao": "ok",
        "texto": "A desert bloom is a climatic phenomenon that occurs in various deserts around the world. The phenomenon consists of the blossoming of a wide variety of flowers during early-mid spring in years when rainfall is unusually high.\n[…]\nIn the Atacama Desert, a desert bloom (Spanish: desierto florido) occurs between the months of September and November in years when rainfall is unusually high. Normally, the Atacama Desert receives less than 12 mm (0.47 in) of rain a year.\n[…]\nClimatically, the event is related to the El Niño phenomenon, a band of anomalously warm ocean water temperatures that occasionally develops off the western coast of South America, which can lead to an increase in evaporation and therefore precipitation.\n[…]\nIn response to this, the Chilean Government has established a series of prohibitions and controls, in addition to informative campaigns to the public, and especially to tourists, in order to limit the damage. Comisión del Desierto Florido de la Región de Atacama was created in 1997, and re-launched in 2015, by the regional government of Atacama Region as an agency aimed to finds ways to protect the desert bloom.\n[…]\nIn June 2022 Copiapó passed a municipal decree establishing fines for those who damage the desert bloom. On October 2, 2022, the Desierto Florido National Park in 2023 was officially announced.\n[…]\nIn a single day in March 2015, parts of the area received 23 mm (0.91 in) of rain from El Niño, causing flowering in September and October 2015.\n[…]\nRelated to desert blooms in Chile:\n[…]\nAtacama Flowers – Photos of the blooming Atacama Desert in Chile\n[…]\nVideo Atacama Desert in Bloom – Video showing the entire cycle of the blooming Atacama\n[…]\nAtacama Flora\n[…]\nFlora and Fauna of the Atacama Desert\n[…]\nDesert Flowers"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Mar de Aral",
      "descricao": "Lago salgado da Ásia Central, entre Cazaquistão e Uzbequistão, que encolheu drasticamente desde o século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na era soviética, os rios que alimentavam o Mar de Aral foram desviados para irrigar plantações, e o lago quase sumiu. Que cultura era irrigada?",
    "resposta": "Algodão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aral_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aral_Sea",
        "situacao": "ok",
        "texto": "The Aral Sea was an endorheic salt lake lying between Kazakhstan to its north and Uzbekistan to its south, which began shrinking in the 1950s - 1960s and had largely dried up into desert by 2007. It was in the Aktobe and Kyzylorda regions of Kazakhstan and the Karakalpakstan autonomous region of Uzbekistan. The name roughly translates from Mongolic and Turkic languages to \"Sea of Islands\", a refer\n[…]\nFormerly the fourth-largest lake in the world with an area of 68,000 km2 (26,300 sq mi), the Aral Sea began shrinking in the 1960s after the rivers that fed it were diverted by Soviet irrigation projects. By 2007, it had declined to 10% of its original size, splitting into four lakes: the North Aral Sea, the eastern and western basins of the once far larger South Aral Sea, and the smaller intermediate Barsakelmes Lake.\n[…]\nIn the early 1960s, as part of the Soviet government plan for cotton, or \"white gold\", to become a major export, the Amu Darya river in the south and the Syr Darya river in the east were diverted from feeding the Aral Sea to irrigate the desert in an attempt to grow cotton, melons, rice and cereals. This plan was initially successful, and by 1988, Uzbekistan was the world's largest exporter of cotton.\n[…]\nThe International Fund for Saving the Aral Sea (IFAS) is an intergovernmental organization whose goal is to finance and support collaborative initiatives and ecological, social, and technical projects aimed at addressing the catastrophic environmental and human impacts caused by the Aral Sea's desiccation, attributed to unsustainable irrigation practices during the Soviet era.\n[…]\nIn 1948, a top-secret Soviet bioweapons laboratory was established on the island, in the centre of the Aral Sea which is now disputed territory between Kazakhstan and Uzbekistan.\n[…]\nAral Sea Foundation\n[…]\nQazaq Lens: \"The Aral Sea Is Not Simply Gone\" — sourced explainer including the northern recovery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar_de_Aral",
        "situacao": "ok",
        "texto": "O mar de Aral foi um lago de água salgada, localizado na Ásia Central, entre as províncias de Aqtöbe e Qyzylorda (ao norte), e a região autônoma usbeque de Caracalpaquistão (ao sul). O nome (em português, mar das Ilhas) refere-se à grande quantidade de ilhas presentes em seu leito (mais de 1500).\n[…]\nO governo soviético começou a desviar parte das águas dos rios que alimentavam o mar de Aral, o Amu Dária (ao sul) e o Sir Dária (no nordeste) em 1918. Com o fim da I Guerra Mundial havia a necessidade de aumentar a produção de alimentos, tais como arroz, cereais e melões. Havia também planos de se produzir algodão no deserto próximo ao lago; o algodão sempre valorizado era chamado “ouro branco”.\n[…]\nA quantidade de água retirada dos rios que abasteciam o mar de Aral duplicou entre 1960 e 2000, assim como a produção de algodão. No mesmo período, o Usbequistão tornou-se o 3º maior exportador de algodão do mundo. Como consequência da redução do volume de água, a salinidade do lago quase quintuplicou e matou a maior parte de sua fauna e flora naturais. A próspera indústria pesqueira faliu, assim como as cidades ao longo das margens. Houve desemprego e dificuldades econômicas.\n[…]\nEm torno de 2,7 bilhões de metros cúbicos de água transbordam da barragem de Kokaral para a parte sul do Mar de Aral, todos os anos. No entanto, a evaporação dessa água impede o aumento do nível do sul do lago. A necessidade econômica do rio Amu Dária para irrigação da produção de algodão no Usbequistão tem impedido a realização de projetos para a recuperação do sul do lago. Essa porção é constituída por uma faixa de água no oeste e uma bacia seca no leste.\n[…]\nPlantar cultivares de algodão que necessitem de menos água;\n[…]\nReduzir o número de fazendas de algodão próximas ao lago e afluentes;\n[…]\nAral Sea Foundation",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Lago Natron",
      "descricao": "Lago salgado e muito alcalino no norte da Tanzânia, local de reprodução de flamingos-pequenos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Flamingos-pequenos fazem ninhos no lago Natron, de águas cáusticas e muito salgadas. Que vantagem esse lugar hostil dá a eles?",
    "resposta": "Proteção contra predadores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lake_Natron"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lake_Natron",
        "situacao": "ok",
        "texto": "Lake Natron is a highly alkaline salt lake located in north Ngorongoro District of Arusha Region in Tanzania with its far northern end crossing into Kajiado County and Narok County in Kenya. It is in the Gregory Rift, which is the eastern branch of the East African Rift. The lake is within the Lake Natron Basin, a Ramsar Site wetland of international significance.\n[…]\nLake Natron is a safe breeding location because its caustic environment is a barrier against predators trying to reach their nests on seasonally forming evaporite islands. Greater flamingoes also breed on the mud flats.\n[…]\nThe lake has inspired the nature documentary The Crimson Wing: Mystery of the Flamingos by Disneynature, for its close relationship with the Lesser flamingoes as their only regular breeding area.\n[…]\nThere is no formal protection.\n[…]\nAccording to Chris Magin, the RSPB's international officer for Africa, \"The chance of the lesser flamingoes continuing to breed in the face of such mayhem are next to zero. This development will leave lesser flamingoes in East Africa facing extinction\". Seventy-five percent of the world's lesser flamingoes are born on Lake Natron.\n[…]\nBecause of its unique biodiversity, Tanzania named the Lake Natron Basin to the Ramsar List of Wetlands of International Importance on 4 July 2001. The lake is also the World Wildlife Fund East African halophytics ecoregion.\n[…]\nThere are a number of campgrounds near the lake, which is also the base for climbing Ol Doinyo Lengai. Lake Natron has tourist attraction potentials that are important for ecotourism development.\n[…]\nThe Crimson Wing: Mystery of the Flamingos\n[…]\nThink Pink – Save Africa's Flamingos\n[…]\nNBC article about Nick Brandt's photos of petrified animals at Natron lake\n[…]\n\"Lake Natron, Tanzania\". Earth Observatory Newsroom. Archived from the original on 1 October 2006. Retrieved 17 April 2018."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lago_Natron",
        "situacao": "ok",
        "texto": "O Lago Natron é um lago salgado alcalino situado no norte da Tanzânia, próximo da fronteira deste país com o Quénia, no Grande Vale do Rifte. Trata-se de um lago endorreico, de origem tectónica e com menos de três metros de profundidade.\n[…]\nAs suas águas apresentam um pH elevado, entre 9 e 10.5, e apresentam uma cor característica de lagos com elevadas taxas de evaporação. À medida que a água evapora durante a estação seca, os níveis de salinidade aumentam até ao ponto em que os microrganismos adaptados a ambientes salinos (ou halófilos) começam a desenvolver-se.\n[…]\nEntre estes contam-se algumas cianobactérias, cujo pigmento vermelho dá origem aos tons profundos de vermelho apresentados pelas águas mais profundas do lago e pelos alaranjados nas zonas menos profundas.\n[…]\nO lago Natron é também o único local de reprodução dos flamingos-pequenos (Phoenicopterus minor) que vivem nesta região e que se alimentam das cianobactérias do lago. Quanto mais elevada for a salinidade, maior é a quantidade de cianobactérias que se desenvolvem no lago e, por conseguinte, maior é o número de ninhos de flamingos-pequenos que o lago pode suportar.\n[…]\nAlém do flamingo-pequeno habitam este lago tilápias (Oreochromis alcalica), que ocupam as zonas adjacentes às nascentes de água quente que brotam nalgumas partes lago.\n[…]\nnoticias.seuhistory.com/ O lago que transforma animais em pedras",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Estação Antártica Comandante Ferraz",
      "descricao": "Base científica brasileira na ilha Rei George, na Antártida."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2012, a Estação Comandante Ferraz, base científica brasileira na Antártida, foi em grande parte destruída. O que causou a destruição?",
    "resposta": "Um incêndio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Estação_Antártica_Comandante_Ferraz",
      "https://en.wikipedia.org/wiki/Comandante_Ferraz_Antarctic_Station"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Estação_Antártica_Comandante_Ferraz",
        "situacao": "ok",
        "texto": "Estação Antártica Comandante Ferraz (EACF) é uma base antártica pertencente ao Brasil localizada na ilha do Rei George, a 130 quilômetros da Península Antártica, na baía do Almirantado, na Antártida. O nome da estação homenageia Luís Antônio de Carvalho Ferraz, hidrógrafo, oceanógrafo e comandante da Marinha Brasileira que visitou o continente antártico por duas vezes a bordo de navios britânicos \n[…]\nA estação começou a operar em 6 de fevereiro de 1984, levada à Antártida, em módulos, pelo navio oceanográfico NApOc Barão de Teffé (H-42) e diversos outros navios da Marinha do Brasil. Ela foi parcialmente destruída por um incêndio no dia 25 de fevereiro de 2012, com sua reconstrução terminada em 2020 após um investimento de cerca de 100 milhões de dólares.\n[…]\nO combate ao incêndio seguiu pelo dia com o grupo de 12 militares que se manteve na base até que a Marinha decidiu interromper o trabalho devido às condições climáticas adversas, características da Antártida. Junto a um navio da Armada Chilena, planejaram voltar ao local para avaliação dos danos e estimaram destruição de 70% da base. O prédio principal, que incluía os alojamentos e alguns laboratórios, foi completamente destruído.\n[…]\nO governo federal anunciou dias depois do incêndio de 2012 um programa para a reconstrução da base antártica, com projeto mais moderno, com prazo de conclusão de dois anos. No dia 6 de outubro de 2012 foi iniciada a mais complexa antártica brasileira, com quinhentas pessoas e cinco navios.\n[…]\nA Estação Antártica Comandante Ferraz serviu de inspiração para o design da estação de pesquisa fictícia do filme The Midnight Sky (2020). Chamado de “Observatório de Barbeau”, as instalações contam com um grande telescópio CGI posicionado ao lado dos módulos da estação brasileira. As cenas internas foram gravadas em um estúdio no Reino Unido.\n[…]\nLista de estações de pesquisas na Antártida\n[…]\nPROANTAR, Governo do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Comandante_Ferraz_Antarctic_Station",
        "situacao": "ok",
        "texto": "The Comandante Ferraz Antarctic Station (Portuguese: Estação Antártica Comandante Ferraz) is a permanent Antarctic research station named after the Brazilian Navy Commander Luís Antônio de Carvalho Ferraz (1940–1982), who visited Antarctica many times with the British exploration team and managed to convince his government to create a self-guided Brazilian Antarctic Program.\n[…]\nMaterial damage to the base was calculated at US$12.4 million. At the time of the incident, the Brazilian government estimated it would take two years to rebuild the research station.\n[…]\nOn 15 April 2013, the Brazilian Navy announced it had chosen the winning design for the new Comandante Ferraz base. The winning proposal went to the Curitiba-based Estúdio 41 architecture firm. The new station will extend 3,200 square metres (34,000 ft2) and will accommodate 64 people. The cost of the project was approximately US$100 million. Approximately 200 Chinese workers from CEIEC were at the construction site. The new and modern station opened in January 2020.\n[…]\nWith all 12 months having an average temperature below 10 °C (50 °F), Comandante Ferraz Antarctic Station features a tundra climate (Köppen ET). The average temperature at the station is of about -1.8 °C; however, in the region of the Thiel Mountains, where the new station Criosfera 1 was built, the temperature may drop to -35 °C.\n[…]\nNear the station are located several smaller structures which administratively and logistically depend on the main base:\n[…]\n(in Portuguese) Menezes, Eurípides, A Antártica e os Desafios do Futuro. Rio de Janeiro: Capemi Editora, 1982.\n[…]\n(in Portuguese) Castro, Therezinha, Atlas-Texto de Geopolítica do Brasil. Rio de Janeiro: Capemi Editora, 1982.\n[…]\nOfficial website Projeto de Meteorologia Antártica\n[…]\n(in Portuguese) Official website Programa Antártico Brasileiro\n[…]\nComandante Ferraz Brazilian Station webcam"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Delta do Okavango",
      "descricao": "Grande delta interior formado pelo rio Okavango, que se espalha no deserto do Kalahari sem chegar ao mar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A cheia anual do delta do Okavango chega em plena estação seca, trazendo água de chuvas que caíram meses antes em que país?",
    "resposta": "Angola",
    "distratores": [
      "Zâmbia",
      "Namíbia",
      "Zimbábue"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Okavango_Delta",
      "https://en.wikipedia.org/wiki/Okavango_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Okavango_Delta",
        "situacao": "ok",
        "texto": "The Okavango Delta or Okavango Grassland is a vast inland delta in Botswana formed where the Okavango River reaches a tectonic trough at an elevation of 930–1,000 m (3,050–3,280 ft) in the central part of the endorheic basin of the Kalahari Desert.\n[…]\nThe inflow channels of the Okavango Delta originate primarily from the Okavango River, which is formed by the confluence of the Cubango and Cuito rivers in Angola before flowing through Namibia into Botswana. Upon entering the delta near Mohembo, the river divides into an intricate network of distributary channels, floodplains, lagoons, and permanent swamps that sustain one of the world's largest inland deltas.\n[…]\nThe Wayeyi have inhabited the area around Seronga as well as the southern delta around Maun, and a few Wayeyi live in their putative ancestral home in the Caprivi Strip. Within the past 20 years many people from all over the Okavango have migrated to Maun, the late 1960s and early 1970s over 4,000 Hambukushu refugees from Angola were settled in the area around Etsha in the western Panhandle.\n[…]\nThe Namibian government has presented plans to build a hydropower station in the Zambezi Region, which would regulate the Okavango's flow to some extent. While proponents argue that the effect would be minimal, environmentalists argue that this project could destroy most of the rich animal and plant life in the delta. Other threats include local human encroachment and regional extraction of water in both Angola and Namibia.\n[…]\nOkavango Delta concession areas\n[…]\nOfficial Botswana Government site on Moremi Game Reserve, inside the Okavango Delta\n[…]\nFlood-recession cropping in the molapos of the Okavango Delta\n[…]\nOkavango Research Institute"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Okavango_River",
        "situacao": "ok",
        "texto": "The Okavango River (formerly spelt Okovango or Okovanggo) is a river in southwestern Africa. It is known by this name in Botswana, as Cubango in Angola, and Kavango in Namibia. It is the fourth-longest river system in southern Africa, running southeastward for 1,600 km (1,000 mi). It begins at an elevation of 1,300 metres (4,300 ft) in the sandy highlands of Angola. Farther south, it forms part of\n[…]\nThe Cubango and Cuito Rivers are the principal tributaries of the Okavango Delta, and affect its health. In Angola, seasonal controlled burns of the vegetation clog the upper reaches of the Cuito and reduce water flow downstream as the accumulated water instead flows into the sand.\n[…]\nEvery wet season, Angola receives three times more rainfall than Botswana, discharging a higher than usual flow into the Okavango, turning swathes of outlying desert into a huge wetland.\n[…]\nAlthough the summer rains fall in Angola in January, they take a whole month to travel the first 1,000 km of the Okavango River, and then they take a further four months to filter through the plants and numerous channels of the final 250 km of the delta. As a result, the flood is at its biggest sometime between June and August, during Botswana's dry winter months.\n[…]\nIn very wet years, a part of the river's flow may extend along the Magweggana River (actually a northeastern distributary of the Okavango Delta) and enter the Zambezi River, bypassing the Kalahari.\n[…]\nNamibia, in turn, has argued that it will only divert half of one percent of the river's flow, and that it is entitled to any water that flows through its territory. To deal with such issues, in September 1994, Angola, Namibia, and Botswana signed a multilateral agreement to form the Permanent Okavango River Basin Water Commission, to provide advice to the three countries about the best ways to share the Okavango River's resources."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Delta_do_Cubango",
        "situacao": "ok",
        "texto": "O Delta do Cubango, também chamado de Delta do Okavango, é o maior delta interior do mundo, formado onde o rio Cubango encontra uma placa tectônica, no deserto do Calaári, em território da Botsuana. Toda a água que atinge o delta é evaporada e transpira, e não chega a nenhum mar ou oceano. A cada ano aproximadamente 11 quilômetros cúbicos de água passam nessa região. Parte do rio chega ao lago Nga\n[…]\nO Delta do Cubango é produzido por inundações sazonais. O rio Cubango drena a chuva de verão (janeiro-fevereiro) dos planaltos de Angola. A água se espalha por uma área de 250km x 150km no delta por cerca de quatro meses (março-junho). A alta temperatura do delta causa rápida evaporação e transpiração, resultando um ciclo de aumento e queda do nível de água que não era completamente entendido até o começo do século XX.\n[…]\nO delta também inclui mais de 400 espécies de pássaros como:\n[…]\nOs Wayeyi habitam a área ao redor de Seronga bem como a porção sul do Delta, ao redor de Maun, e alguns poucos Wayeyi vivem como seus ancestrais em Caprivi. Nos últimos 20 anos, muitas pessoas de todo Cubango migraram para Maun, nas décadas de 1960 e 1970 mais de 4 000 Hambukushu refugiados de Angola estabeleceram-se na área próxima a Etsha.\n[…]\nO governo da Namíbia apresentou alguns planos para a construção de uma hidrelétrica no rio Zambezi, que regularia o fluxo do Cubango. Enquanto alguns acreditam que os efeitos seriam mínimos, os ambientalistas alegam que o projeto poderia destruir muito da vida animal e da flora no Delta. Outras ameaças incluem o assentamento humano e a extração de água tanto de Angola quanto da Namíbia.\n[…]\nJ. Bock. 2002. Learning, Life History, and Productivity: Children’s lives in the Okavango Delta of Botswana. Human Nature 13(2). 161-198. online\n[…]\nCecil Keen. 1997. Okavango Delta\n[…]\nWildlife in Okavango Delta\n[…]\nOkavango Research Institute",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Monte Everest",
      "descricao": "Montanha do Himalaia, na fronteira entre Nepal e China, o ponto mais alto da Terra acima do nível do mar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O calcário do cume do Everest guarda fósseis de animais muito antigos. Em que ambiente esses animais viviam?",
    "resposta": "No mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Everest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Everest",
        "situacao": "ok",
        "texto": "Mount Everest (known in Nepali as Sagarmāthā, in Sherpa as Chamolangma, and in Tibetan  as Jomolangma/Čhomolangma) is the highest mountain on Earth above sea level. It lies in the Mahalangur Himal sub-range of the Himalayas and marks part of the China–Nepal border at its summit. Its height was most recently measured in 2020 through a joint survey by Nepalese and Chinese authorities as 8,848.86 m (\n[…]\nMount Everest's Nepali name is सगरमाथा = Sagarmāthā (in IAST transcription), pronounced [sʌɡʌrmatʰa], lit. ''head in the sky'' (loosely translated as \"goddess of the sky\").\n[…]\nThe Tibetan name for Everest is Qomolangma (ཇོ་མོ་གླང་མ, lit. \"holy mother\"). The name was first recorded (in a Chinese transcription) in the 1721 Kangxi Atlas, issued during the reign of Qing Emperor Kangxi; it first appeared in the West in 1733 as Tchoumour Lancma, on a map prepared by the French geographer D'Anville based on the Kangxi Atlas. The Tibetan name is also popularly romanised as Chomolungma and (in Wylie) as Jo-mo-glang-ma.\n[…]\nOn the Nepalese side, Everest is protected as part of Sagarmatha National Park, while on the Chinese side the mountain is protected as part of Qomolangma National Nature Reserve.\n[…]\nThe outline of Mount Everest and its Nepali name, Sagarmatha (सगरमाथा), are also featured on standard Nepalese coins, such as the 1-rupee and 2-rupee coins, as well as on special coins made to mark important events or occasions.\n[…]\nNational Geographic site on Mount Everest\n[…]\nNOVA site on Mount Everest\n[…]\nImaging Everest, a collection of photographs Archived 14 November 2016 at the Wayback Machine\n[…]\nMount Everest on Summitpost\n[…]\nFull list of all ascents of Everest up to and including 2008 (in PDF format)\n[…]\nMount Everest panorama, Mount Everest interactive panorama (QuickTime format), Virtual panoramas\n[…]\nHimalayan Database: Data Visualization of Mount Everest Summit, Attempt, and Death"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Evereste",
        "situacao": "ok",
        "texto": "Monte Everest ou, na sua forma portuguesa, Evereste, também conhecido no Nepal como Sagarmāthā (सगरमाथा), no Tibete como Chomolungma (ཇོ་མོ་གླང་མ) e Zhūmùlǎngmǎ Fēng em chinês (珠穆朗玛峰), é a montanha de maior altitude da Terra. Seu pico está a 8 848,86 metros acima do nível do mar, na subcordilheira Mahalangur Himal dos Himalaias. A fronteira internacional entre o distrito nepalês do Solukhumbu e o \n[…]\nNas regiões mais altas do Monte Everest, os alpinistas que buscam o cume costumam passar um tempo substancial dentro da zona da morte (altitudes superiores a 8 000 metros (26 000 ft)), e enfrentam desafios significativos à sobrevivência. As temperaturas podem cair para níveis muito baixos, resultando em geladuras em qualquer parte do corpo exposta ao ar. Como as temperaturas são tão baixas, a neve fica bem congelada em certas áreas, podendo ocorrer morte ou ferimentos por escorregões e quedas.\n[…]\nChris Chandler e Bob Cormack chegaram ao cume do Everest em outubro de 1976 como parte da Expedição do Bicentenário Americano ao Everest daquele ano, sendo os primeiros americanos a fazer uma ascensão de outono do Monte Everest, de acordo com o Los Angeles Times. No século XXI, o verão e o outono podem ser mais populares para tentativas de esqui e snowboard no Monte Everest. Durante a década de 1980, escalar no outono era na verdade mais popular do que na primavera.\n[…]\nEm maio de 2005, o piloto francês Didier Delsalle aterrou um helicóptero Eurocopter AS350 B3 no cume do Monte Everest. Ele precisava de aterrar por dois minutos para estabelecer o recorde oficial da Federação Aeronáutica Internacional (FAI), mas permaneceu durante cerca de quatro minutos, por duas vezes. Neste tipo de aterragem, os rotores permanecem engatados, o que evita depender da neve para suportar totalmente a aeronave.\n[…]\nMedia relacionados com o Monte Evereste no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Cataratas do Iguaçu",
      "descricao": "Conjunto de quedas d'água do rio Iguaçu, na fronteira entre o Paraná, no Brasil, e a província argentina de Misiones."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Qual é o nome da maior e mais impressionante queda das Cataratas do Iguaçu, um paredão de água em forma de U?",
    "resposta": "Garganta do Diabo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
      "https://en.wikipedia.org/wiki/Iguazu_Falls"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu",
        "situacao": "ok",
        "texto": "Cataratas do Iguaçu (em castelhano: Cataratas del Iguazú) é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subt\n[…]\nHistoricamente, o primeiro europeu a achar as Cataratas do Iguaçu foi o espanhol Álvar Núñez Cabeza de Vaca, no ano de 1541. Atualmente, é o segundo local mais visitado por estrangeiros no Brasil. Em época de chuva, as Cataratas do Iguaçu chegam a ser a 3ª maior do mundo em volume de água. Sua vazão chega a aumentar 10 vezes, chegando a 11,3 mil metros cúbicos por segundo, quando o normal é 1,5 mil.\n[…]\nO sistema consiste de 275 cachoeiras ao longo de 2,7 km do rio Iguaçu. Algumas das quedas individuais têm  até 82 metros de altura, embora a maioria tenha cerca de 64 metros. A Garganta do Diabo é a queda com maior fluxo das Cataratas do Iguaçu, que têm cerca de 275 quedas de água, com uma altura superior a 70 metros ao longo de 2,7 km do Rio Iguaçu. A Garganta do Diabo principia em forma de \"U\" invertido com 150 metros de largura e 80 metros de altura.\n[…]\nO acesso pela Argentina é facilitado pelo Trem Ecológico da Selva, que leva os visitantes diretamente para a entrada da Garganta do Diabo, bem como as trilhas superiores e inferiores.\n[…]\nA lenda de Naipi e Tarobá, de origem kaingang, é uma das narrativas mais simbólicas associadas às Cataratas do Iguaçu e à cultura de Foz do Iguaçu. Segundo a tradição, Mboi, uma divindade em forma de serpente e guardião das águas, exigia o sacrifício anual de uma jovem para manter a harmonia entre a natureza e a comunidade. Quando Naipi foi escolhida para o ritual, seu amado, o guerreiro Tarobá, fugiu com ela pelo Rio Iguaçu.\n[…]\nCataratas do Iguaçu no TikTok"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Iguazu_Falls",
        "situacao": "ok",
        "texto": "The Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world. The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; \n[…]\nThe falls are protected within Iguazú National Park in Argentina and Iguaçu National Park in Brazil, inscribed on the UNESCO World Heritage List in 1984 and 1986 respectively.\n[…]\nAbout half of the river's flow falls into a long and narrow chasm called the Devil's Throat (Garganta del Diablo in Spanish or Garganta do Diabo in Portuguese).\n[…]\nThe falls may be reached from two main towns, with one on either side of the falls: Foz do Iguaçu in Brazil and Puerto Iguazú in Argentina, as well as from Ciudad del Este, Paraguay, on the other side of the Paraná River from Foz do Iguaçu, each of those three cities having commercial airports. The falls are shared by the Iguazú National Park (Argentina) and Iguaçu National Park (Brazil). The two parks were designated UNESCO World Heritage Sites in 1984 and 1986, respectively.\n[…]\nThe Argentine access, across the forest, is by a Rainforest Ecological Train very similar to the one in Disney's Animal Kingdom. The train brings visitors to the entrance of Devil's Throat, as well as the upper and lower trails. The Paseo Garganta del Diablo is a 1 km-long (0.6 mi) trail that brings visitors directly over the falls of Devil's Throat, the highest and deepest of the falls.\n[…]\nCopel Monitoramento Hydrológico (Iguazu River flow rate measurements; leftmost green dot gives flow rate at Hotel Cataratas)\n[…]\nIguazu Falls at UNESCO World Heritage Centre\n[…]\nIguazu Falls facts at BeautifulWorld.com\n[…]\n\"Iguazu Falls\". World Waterfall Database."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Salar de Uyuni",
      "descricao": "Imensa planície de sal no altiplano andino do sudoeste da Bolívia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Salar de Uyuni, na Bolívia, guarda sob a crosta de sal uma das maiores reservas do mundo de que metal usado em baterias?",
    "resposta": "Lítio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Salar_de_Uyuni"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Salar_de_Uyuni",
        "situacao": "ok",
        "texto": "Salar de Uyuni is the largest salt flat in the world, with an area of approximately 10,582 square kilometres (4,086 mi2). It is situated in southwestern Bolivia, within the Daniel Campos Province of the Potosí Department, near the crest of the Andes Mountains, at an elevation of 3,656 m (11,995 ft) above sea level.\n[…]\nAymara legend tells that the mountains Tunupa, Kusku, and Kusina, which surround the Salar, were giants. Tunupa married Kusku, but Kusku ran away from her with Kusina. Grieving Tunupa started to cry while breastfeeding her son. Her tears mixed with milk and formed the Salar. Many locals consider the Tunupa an important deity and say that the place should be called Salar de Tunupa rather than Salar de Uyuni.\n[…]\nThe Salar de Uyuni is part of the Altiplano of Bolivia in South America. The Altiplano is a high plateau, which was formed during the uplift of the Andes mountains. The plateau includes fresh and saltwater lakes as well as salt flats and is endorheic.\n[…]\nLocated in the Lithium Triangle, the Salar contains a large amount of sodium, potassium, lithium and magnesium (all in the chloride forms of NaCl, KCl, LiCl and MgCl2, respectively), as well as borax. As of 2024, with an estimated 23 mln. t, Bolivia holds about 22% of the world's known lithium resources (105 mln. tons); most of those are in the Salar de Uyuni.\n[…]\nSalar de Uyuni is estimated to contain 10 billion tonnes (9.8 billion long tons; 11 billion short tons) of salt, of which less than 25,000 t is extracted annually. All miners working in the Salar belong to Colchani's cooperative. Because of its location, large area, and flatness, the Salar is a major car transport route across the Bolivian Altiplano, except when seasonally covered with water.\n[…]\nSalar de Uyuni travel guide from Wikivoyage\n[…]\nSalar de Uyuni official website"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salar_de_Uyuni",
        "situacao": "ok",
        "texto": "Salar de Uyuni (ou Salar de Tunupa) é o maior e mais alto deserto de sal do mundo, com 10 582 quilômetros quadrados e a 3 656 metros acima do nível médio do mar. Ele está localizado nos departamentos de Potosí e Oruro, no sudoeste da Bolívia, perto da borda da Cordilheira dos Andes. O salar é também o único ponto natural brilhante que pode ser visto do espaço. Ele serviu de guia para os astronauta\n[…]\nO salar foi formado como resultado de transformações entre diversos lagos pré-históricos. Ele é coberto por alguns metros de uma crosta de sal, que tem um nivelamento extraordinário com as variações de altitude média de menos de um metro ao longo de toda a área do Salar. A crosta serve como uma fonte de sal de cobre e de uma piscina de salmoura, que é extremamente rica em lítio. Ele contém de 50 a 70% das reservas mundiais de lítio, recurso que está no processo de ser extraído.\n[…]\nA área grande, o céu claro e o nivelamento excepcional da superfície fazem do Salar um objeto ideal para calibrar os sensores de satélites de observação da Terra.\n[…]\nO deserto de sal é também uma das maiores reservas de lítio do mundo, além de conter importantes quantidades de potássio, boro e magnésio. A origem do sal provavelmente está relacionada com a imensa quantidade de vulcões na envolvente do Salar de Uyuni já que situa-se sobre uma região de altiplano, 3 650 m acima do nível do mar. A concentração do sal é também facilitada pelo fato de ser uma região muito árida.[carece de fontes]?\n[…]\nPor conta dessa lenda, a população local considera Tunupa uma importante divindade e argumentam que a região deveria se chamar Salar de Tunupa, em vez de Salar de Uyuni.[carece de fontes]?\n[…]\n«Site oficial do Salar de Uyuni, Viagem Uyuni direto»\n[…]\n«Roteiro de Viagem ao Salar de Uyuni»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Tubarão-da-groenlândia",
      "descricao": "Tubarão lento de águas frias do Atlântico Norte e do Ártico (Somniosus microcephalus), famoso pela longevidade."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Para estimar que tubarões-da-groenlândia vivem séculos, cientistas dataram com carbono uma parte do corpo que se forma antes do nascimento. Que parte?",
    "resposta": "O cristalino dos olhos",
    "distratores": [
      "As vértebras",
      "Os dentes",
      "As barbatanas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Greenland_shark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Greenland_shark",
        "situacao": "ok",
        "texto": "The Greenland shark (Somniosus microcephalus), also known as the grey shark or gurry shark, is a large shark of the family Somniosidae (\"sleeper sharks\"), closely related to the Pacific and southern sleeper sharks. Inhabiting the North Atlantic and Arctic Oceans, they are notable for their exceptional longevity, although they are poorly studied because of the depth and remoteness of their natural \n[…]\nSouthern sleeper shark\n[…]\nHerbert, N.A.; Skov, P.V.; Tirsgaard, B.; Bushnell, P.G.; Brill, R.W.; Harvey Clark, C.; Steffensen, J.F. (2017). \"Blood O2 affinity of a large polar elasmobranch, the Greenland shark Somniosus microcephalus\". Polar Biology. 40 (11): 2297–2305. Bibcode:2017PoBio..40.2297H. doi:10.1007/s00300-017-2142-z. S2CID 206954171.\n[…]\nShadwick, R.E.; Bernal, D.; Bushnell, P.G.; Steffensen, J.F. (2018). \"Blood pressure in the Greenland shark as estimated from ventral aortic elasticity\". Journal of Experimental Biology. 221 (Pt 19) jeb.186957. doi:10.1242/jeb.186957. hdl:2022/23342. PMID 30104302. S2CID 51976050.\n[…]\nNielsen, J.; Schou Christiansen, J.; Grønkjær, P.; Bushnell, P.G.; Steffensen, J.F.; Overgaard Kiilerich, H.; et al. (2019). \"Greenland shark (Somniosus microcephalus) stomach contents and stable isotope values reveal an ontogenetic dietary shift\". Marine Megafauna. Frontiers in Marine Science. 6 125. Bibcode:2019FrMaS...6..125N. doi:10.3389/fmars.2019.00125. hdl:10037/15917.\n[…]\nNielsen, J.; Hedeholm, R.B.; Lynghammar, A.; McClusky, L.M.; Berland, B.; Steffensen, J.F.; Christiansen, J.S. (2020). \"Assessing the reproductive biology of the Greenland shark (Somniosus microcephalus)\". PLOS ONE. 15 (10) e0238986. Bibcode:2020PLoSO..1538986N. doi:10.1371/journal.pone.0238986. PMC 7540863. PMID 33027263.\n[…]\nThe Greenland shark (Somniosus microcephalus) genome provides insights into extreme longevity - BioArchives Sept 2024 - the first report of the Greenland shark genome"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Somniosus_microcephalus",
        "situacao": "ok",
        "texto": "Somniosus microcephalus (Bloch & Schneider,  1801), conhecido pelo nome comum de tubarão-da-groenlândia, é um dos maiores tubarões do mundo, chegando a medir mais de 6,5 metros de comprimento. Os tubarões da Groenlândia são os vertebrados com maior longevidade conhecida.\n[…]\nUm espécime com 7,3 m é frequentemente mencionado na literatura especializada, e passou a ser aceito como o maior tamanho já notificado de um tubarão da Groenlândia. Em Janeiro de 1985 foi capturado na Ilha de May, Escócia, um indivíduo com 6,4m de comprimento e pesando 1,021 kg.\n[…]\nÉ a espécie de vertebrado com a maior expectativa de vida conhecida com uma média estimada de 400 anos (entre 250 e 500 anos). (as lentes oculares sugerem que uma fêmea morreu com cerca de 392 anos) e está entre as maiores espécies existentes de tubarão. Atingem a maturidade sexual por volta dos 150 anos de idade e seus filhotes nascem vivos após um período de gestação estimado de 8 a 18 anos.\n[…]\nAlimentam-se principalmente de peixes, e algumas vezes até focas. Já foram encontradas partes de cavalos, ursos-polares e alces em estômagos de tubarões da Groenlândia.\n[…]\nSqualus squatina (non Linnaeus, 1758), Squalus carcharis (Gunnerus, 1776), Somniosus brevipinna (Lesueur, 1818), Squalus borealis (Scoresby, 1820), Squalus norvegianus (Blainville, 1825), Scymnus gunneri (Thienemann, 1828), Scymnus glacialis (Faber, 1829), Scymnus micropterus (Valenciennes, 1832), Leiodon echinatum (Wood, 1846), e Somniosus antarcticus (Whitley, 1939)\n[…]\nEste tubarão faz parte da gastronomia da Islândia, sendo o Hákarl a iguaria mais conhecida com ele confeccionada. Consiste em peixe putrefacto e seco.\n[…]\nTanto na Groenlândia como na Islândia, a carne do tubarão-da-groenlândia é também utilizada como comida para cão, depois de seca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
    "pergunta": "Considerando a altitude média, qual é o continente mais alto da Terra?",
    "resposta": "Antártida",
    "distratores": [
      "Ásia",
      "América do Sul",
      "África"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Antarctica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Antarctica",
        "situacao": "ok",
        "texto": "Antarctica ( ) is Earth's southernmost and least-populated continent. Situated almost entirely south of the Antarctic Circle and surrounded by the Southern Ocean (also known as the Antarctic Ocean), it contains the geographic South Pole. Antarctica is the fifth-largest continent, being about 40% larger than Europe, and has an area of 14,200,000 km2 (5,500,000 sq mi). Most of Antarctica is covered \n[…]\nThe name given to the continent originates from the word antarctic, which comes from Middle French antartique or antarctique ('opposite to the Arctic') and the Latin antarcticus ('opposite to the north'). Antarcticus is derived from the Greek ἀντι- ('anti-') and ἀρκτικός (arktikos, 'of the Bear [Ursa Major], northern'). The Greek philosopher Aristotle wrote in Meteorology about an \"Antarctic region\" in c. 350 BC.\n[…]\nThe Greek geographer Marinus of Tyre reportedly used the name in his world map in the second century AD. The Roman authors Gaius Julius Hyginus and Apuleius used for the South Pole the romanised Greek name polus antarcticus, from which derived the Old French pole antartike (modern pôle antarctique) attested in 1270, and from there the Middle English pol antartik, found first in a treatise written by the English author Geoffrey Chaucer.\n[…]\nAntarctica is the coldest, windiest, and driest of Earth's continents.\n[…]\nEarly world maps, like the 1513 Piri Reis map, feature the hypothetical continent Terra Australis. Much larger than and unrelated to Antarctica, Terra Australis was a landmass that classical scholars presumed necessary to balance the known lands in the northern hemisphere.\n[…]\nThe first confirmed landing on the continental mass of Antarctica occurred in 1895 when the Norwegian-Swedish whaling ship Antarctic reached Cape Adare.\n[…]\nKleinschmidt, Georg (2021). The geology of the Antarctic continent. Stuttgart: Bornträger Science Publisher. ISBN 978-3-443-11034-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ant%C3%A1rtida",
        "situacao": "ok",
        "texto": "Antártida ou Antártica (ver questão do nome) é o mais meridional e o segundo menor dos continentes (maior apenas que a Austrália), com uma superfície de 14 milhões de quilômetros quadrados. Rodeia o polo Sul, e por esse motivo está quase completamente coberta por enormes geleiras (glaciares), exceção feita a algumas zonas de elevado aclive nas cadeias montanhosas e à extremidade norte da península\n[…]\nÉ o continente mais frio, mais seco, com a maior média de altitude e de maior índice de ventos fortes do planeta. A temperatura mais baixa da Terra (-89,2 °C) foi registrada na Antártida, sendo a temperatura média na costa, durante o verão, de -10 °C; no interior do continente, é de -40 °C. Muitos autores o consideram um grande deserto polar, pela baixa taxa de precipitação no interior do continente. A altitude média da Antártida é de aproximadamente 2 000 metros.\n[…]\nA Antártida é o continente mais frio e seco da Terra, um grande deserto. A precipitação média anual fica entre 30 e 70 mm. Devido à influência das correntes marítimas, as zonas costeiras apresentam temperaturas mais amenas, com uma média anual de -10 °C (atingindo valores entre 10 °C no verão e -40 °C no inverno). Por outro lado, no interior do continente, a média anual é -30 °C, com temperaturas variando entre -30 °C no verão até abaixo de -80 °C no inverno.\n[…]\nA única área atípica da Antártida Ocidental é a dos montes Ellsworth, a região onde a estratigrafia é mais parecida com a da parte oriental do continente.\n[…]\nDesde 1959, as reivindicações na Antártida estão suspensas e o continente é considerado politicamente neutro. Sua situação é regulada pelo Tratado da Antártida e por outros acordos relacionados, chamados em seu conjunto de Sistema do Tratado da Antártida. Para as finalidades do Sistema de Tratados, a Antártida é definida como toda a terra e plataformas de gelo em torno do paralelo 60° S.\n[…]\nBandeira da Antártida",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Deserto do Atacama",
      "descricao": "Deserto costeiro do norte do Chile, entre o Oceano Pacífico e os Andes, famoso pela secura extrema."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Fora das regiões polares, qual é o deserto mais seco do mundo, com estações meteorológicas que nunca registraram chuva?",
    "resposta": "Deserto do Atacama",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atacama_Desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atacama_Desert",
        "situacao": "ok",
        "texto": "The Atacama Desert (Spanish: Desierto de Atacama [ataˈkama]) is a desert plateau located on the Pacific coast of South America, in the north of Chile. Stretching over a 1,600-kilometre-long (1,000-mile) strip of land west of the Andes Mountains, it covers an area of 105,000 km2 (41,000 mi2), which increases to 128,000 km2 (49,000 mi2) if the barren lower slopes of the Andes are included.\n[…]\nThe Atacama Desert flowering (Spanish: desierto florido) can be seen from September to November in years with sufficient precipitation, as happened in 2015.\n[…]\nThe Atacama Desert is popular with all-terrain sports enthusiasts. Various championships have taken place here, including the Lower Atacama Rally, Lower Chile Rally, Patagonia-Atacama Rally, and the latter Dakar Rally's editions. The rally was organized by the Amaury Sport Organisation and held in 2009, 2010, 2011, and 2012. The dunes of the desert are ideal rally races located in the outskirts of the city of Copiapó.\n[…]\nThe 2013 Dakar 15-Day Rally started on 5 January in Lima, Peru, through Chile, Argentina and back to Chile finishing in Santiago. Visitors also use the Atacama Desert sand dunes for sandboarding (Spanish: duna).\n[…]\nAn event called Volcano Marathon takes place near the Lascar volcano in the Atacama Desert.\n[…]\nMost people who go to tour the sites in the desert stay in the town of San Pedro de Atacama. The Atacama Desert is in the top three tourist locations in Chile. The specially commissioned ESO hotel is reserved for astronomers and scientists.\n[…]\nAtacama Giant\n[…]\n\"Mars-like Soils in the Atacama Desert, Chile, and the Dry Limit of Microbial Life\", NASA press release\n[…]\n\"Roving robot finds desert life\", article in Nature\n[…]\nDetailed article issued by the Geological Society of America on the history of aridity of the Atacama Desert\n[…]\nAtacama Desert Photo Gallery, photos of many different landscapes, flora and fauna of the Atacama Desert"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_de_Atacama",
        "situacao": "ok",
        "texto": "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1 000 km de extensão, é considerado o deserto mais alto do mundo. É o deserto não polar mais seco do mundo, pois chove raramente na região, em consequência de as correntes marítimas do Oceano Pacífico não conseguirem passar para o deserto, por causa de sua altitude.\n[…]\nAs temperaturas no deserto variam entre 0 °C à noite a 40 °C durante o dia. Em função destas condições existem poucas cidades e vilas no deserto; uma delas, muito conhecida, é São Pedro de Atacama, que tem pouco mais de 5 000 habitantes e está a 2 400 metros de altitude.\n[…]\nJá foi registrado como o menor índice pluviométrico do planeta. A Cordilheira dos Andes impede a chegada de ar úmido da Amazônia, pois funciona como uma barreira para a corrente de ar. O Oceano Pacífico seria então o encarregado de umidificar a região do deserto de Atacama mas, por ser uma corrente marítima fria não ocorre evaporação da água sendo que o ar que vai em direção ao deserto é seco.\n[…]\nO deserto de Atacama em geral apresenta um terreno rochoso muito seco e pouco propicio a brotar algumas plantas. Em alguns lugares próximos à região de Antofagasta existem grandes áreas de deserto absoluto, onde o solo é completamente desprovido de vegetação.\n[…]\nO deserto do Atacama é muito visado por turistas, para prática do trekking, montanhismo, montaria, off-road, mountain bike, e arqueólogos, devido ao fato da região possuir interessantes artefatos arqueológicos e históricos, além de salinas, gêiseres, vulcões, lagoas coloridas, vales verdejantes e cânions de água cristalina. Também há múmias com mais de 1 000 anos deixadas pelos Chinchorros (antigos habitantes da área).\n[…]\nJorge Durán filmou Romance Policial no Deserto do Atacama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Feneco",
      "descricao": "Pequena raposa do deserto do Saara, Vulpes zerda, de orelhas enormes."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que raposa do norte da África é a menor espécie de canídeo do mundo?",
    "resposta": "Feneco",
    "distratores": [
      "Raposa-de-rüppell",
      "Raposa-do-ártico",
      "Raposa-orelhuda"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Fennec_fox"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fennec_fox",
        "situacao": "ok",
        "texto": "The fennec fox (Vulpes zerda) is a small fox native to the deserts of North Africa, ranging from Western Sahara and Mauritania to the Sinai Peninsula. Its most distinctive feature is its unusually large ears, which serve to dissipate heat and listen for underground prey. The fennec is the smallest fox species. Its coat, ears, and kidney functions have adapted to the desert environment with high te\n[…]\nThe fennec fox was scientifically described as Canis zerda by Eberhardt Zimmermann in 1780. In 1788, Johann Friedrich Gmelin gave the species the synonym of Canis cerdo with the type locality being the Sahara Desert. A few years later, Friedrich Albrecht Anton Meyer assigned the name Viverra aurita to the species in 1793; the type locality was Algeria.\n[…]\nIn the 1840s, the species received synonyms by Pierre Boitard in 1842 (Vulpes denhamii) and John Edward Gray in 1843 (Vulpes zuarensis). The type localities of these were \"interior of Africa\" and Egypt, respectively. In 1978 Gordon Barclay Corbet renamed the species to Vulpes zerda, its current scientific name. It was originally assigned to the genus Canis, but following molecular analysis it was moved to Vulpes despite having some distinct morphological and behavioral traits.\n[…]\nAccording to DNA evidence, the closest living relative to the fennec fox is the Blanford's fox. They are two of eight \"desert fox\" species, which is a group of Vulpes that share comparable ecologies, the others being the corsac fox, pale fox, kit fox, Tibetan fox, Rüppell's fox and Cape fox. All eight species evolved to survive in desert environments, developing several traits such as sandy colored coats, large ears, pigmented eyes, and specialized kidneys.\n[…]\nCaptive individuals reside in family groups. Fennec foxes exhibit playful behavior, especially among younger individuals."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Feneco",
        "situacao": "ok",
        "texto": "O feneco (Vulpes zerda) ou raposa-do-deserto, é uma pequena raposa crepuscular nativa do deserto do Saara e da Península do Sinai. É o menor de todos os canídeos e apresenta inúmeras adaptações ao clima desértico, como seu corpo pequeno, patas peludas e orelhas excepcionalmente grandes, que são utilizadas para regular o calor. Sua pelagem e suas funções renais também são adaptadas às altas tempera\n[…]\nO feneco é o menor de todos os canídeos, com orelhas excepcionalmente grandes, representando 20% da superfície corporal. Em geral, o comprimento cabeça-corpo mede 24–41 cm e a cauda varia de 18–31 cm, pesando de 0,68 a 1,6 kg. Não apresentam dimorfismo sexual, mas as fêmeas são ligeiramente menores que os machos. As proporções do crânio correspondem às de outras espécies de Vulpes, mas apresenta cavidades timpânicas muito grandes, uma característica típica de habitantes do deserto.\n[…]\nO feneco tem 2n = 32 cromossomos.\n[…]\nOs fenecos são considerados moderadamente sociais, mas esta evidência é baseada principalmente em animais em cativeiro. Essas raposas vivem em pequenas comunidades, cada uma habitada por talvez dez indivíduos. Como outros canídeos, os machos marcam seu território com urina e se tornam competidores agressivos quando a temporada de acasalamento chega a cada ano.\n[…]\nO feneco é listado como de menor preocupação pela IUCN, pois é relativamente difundido em seus habitats, e atualmente não há grandes ameaças conhecidas que possam resultar em um declínio populacional que justificaria a listagem em uma categoria ameaçada. Está listado no Apêndice II do CITES e é legalmente protegido em Marrocos (incluindo Saara Ocidental), Argélia, Tunísia e Egito. No Norte da África, a principal ameaça parece ser as armadilhas para exibição ou venda aos turistas.\n[…]\nO feneco é criado comercialmente como um animal doméstico exótico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Urso-polar",
      "descricao": "Urso das regiões árticas, espécie Ursus maritimus."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Debaixo da pelagem branca, que o camufla no gelo, de que cor é a pele do urso-polar?",
    "resposta": "Preta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Polar_bear"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Polar_bear",
        "situacao": "ok",
        "texto": "The polar bear (Ursus maritimus) is a large bear native to the Arctic and nearby areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore by body mass, with adult males weighing 300–800 kg (660–1,760 lb). The species is sexually dimorphic, as adult females are much smaller. The polar bear is white or\n[…]\nCarl Linnaeus classified the polar bear as a type of brown bear (Ursus arctos), labelling it as Ursus maritimus albus-major, arcticus ('mostly-white sea bear, arctic') in the 1758 edition of his work Systema Naturae. Constantine John Phipps formally described the polar bear as a distinct species, Ursus maritimus in 1774, following his 1773 voyage towards the North Pole.\n[…]\nBecause of its adaptations to a marine environment, some taxonomists, such as Theodore Knottnerus-Meyer, have placed the polar bear in its own genus, Thalarctos. However Ursus is widely considered to be the valid genus for the species on the basis of the fossil record and the fact that it can breed with the brown bear.\n[…]\nDifferent subspecies have been proposed including Ursus maritimus maritimus and U. m. marinus. However, these are not supported, and the polar bear is considered to be monotypic. One possible fossil subspecies, U. m. tyrannus, was posited in 1964 by Björn Kurtén, who reconstructed the subspecies from a single fragment of an ulna which was approximately 20 percent larger than expected for a polar bear.\n[…]\n2011 Svalbard polar bear attack\n[…]\nInternational Polar Bear Day\n[…]\nList of individual bears – includes individual captive polar bears\n[…]\nPolar Bears International – conservation organization\n[…]\nPolar Bear Shores – an exhibit featuring polar bears at Sea World in Australia\n[…]\nPolar Bears International website\n[…]\nARKive—images and movies of the polar bear (Ursus maritimus)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Urso-polar",
        "situacao": "ok",
        "texto": "O Urso-polar (nome científico: Ursus maritimus), também conhecido como urso-branco, é uma espécie de mamífero carnívoro da família Ursidae encontrada no círculo polar Ártico. Ele é o maior carnívoro terrestre conhecido e também o maior urso, juntamente com o urso-de-kodiak, uma subespécie do urso-pardo, que tem aproximadamente o mesmo tamanho.\n[…]\nA espécie foi descrita como Ursus maritimus por Constantine John Phipps, 2º Barão de Mulgrave, em seu livro \"A voyage towards the North Pole\" publicado em 1774. (a) Em 1825, John Edward Gray cunhou o termo genérico Thalarctos(b) para o urso-polar levando em conta as diferenças na coloração, formato do crânio, número de pré-molares e nos hábitos.\n[…]\nEm 2006, um animal híbrido foi morto no extremo sul da ilha Banks, no ártico canadense, e apresentava características mistas como a pelagem branca intercalada com manchas castanhas, garras longas, face côncava e uma corcova. Exames de DNA confirmaram que o híbrido provinha de uma mãe urso-polar e um pai urso-pardo.\n[…]\nEntretanto, a subdivisão do urso-polar em duas subespécies não têm justificativa. Uma subespécie fóssil, Ursus maritimus tyrannus, foi identificada por Björn Kurtén em 1964, baseada em uma única ulna encontrada em Kew Bridge, Londres, datada do Pleistoceno. Entretanto, uma reanálise feita por pesquisadores do Museu de História Natural de Londres concluiu que o espécime de Kew é na verdade um variedade de Ursus arctos.\n[…]\nA pelagem tem geralmente uma aparência branca, mas pode ser amarelada no verão, devido à oxidação provocada pelo sol ou pode até parecer cinzenta ou castanha, dependendo da estação e das condições de iluminação. A pele é preta, assim como o focinho e os lábios, e o pelo é incolor devido a falta de pigmento. A aparência branca é o resultado da luz sendo refletida a partir dos pelos transparentes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Peixe-pescador",
      "descricao": "Peixes da ordem Lophiiformes, muitos de águas profundas, que atraem presas com uma isca na cabeça."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em muitos peixes-pescadores das profundezas, o macho é minúsculo perto da fêmea. O que ele faz quando a encontra?",
    "resposta": "Funde-se ao corpo dela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anglerfish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anglerfish",
        "situacao": "ok",
        "texto": "The anglerfish are ray-finned fish in the order Lophiiformes (). Both the order's common and scientific name come from the characteristic mode of predation, in which a modified dorsal fin ray acts as a lure for prey (akin to a human angler, and this lure is also likened to a crest or \"lophos\").\n[…]\nAnglerfish are of some commercial value, with many species being of interest to aquaria. The lophiid anglerfish (marketed as monkfish, goosefish, or simply angler) are fished commercially as their meat is highly valued, being considered a delicacy throughout the world.\n[…]\nAnglerfish appear in the fossil record as follows:\n[…]\nVarious species of anglerfish are kept in captivity, such as frogfish and batfish, though these are all species that inhabit shallow waters; deep-sea anglerfish have not been kept in captivity due to the challenges of keeping them alive through capture, transport, and a display that can repressurize them.\n[…]\nAntennarius biocellatus is known by the common names brackish-water frogfish or freshwater frogfish; being euryhaline, it can live in freshwater for some time, sometimes claimed to be the sole representative of the anglerfish to live in freshwater. Like many frogfish, it has been displayed in public aquaria, though unlike the other species A. biocellatus are sometimes kept in home aquaria by private aquarists.\n[…]\nAnderson, M. Eric, and Leslie, Robin W. 2001. Review of the deep-sea anglerfishes (Lophiiformes: Ceratioidei) of southern Africa. Ichthyological Bulletin of the J. L. B. Smith Institute of Ichthyology; No. 70. J. L. B. Smith Institute of Ichthyology, Rhodes University\n[…]\nTree of Life web project: Lophiiformes\n[…]\nVideo (02:37) – Anglerfish mating on YouTube\n[…]\nLu, D. Anglerfish immune system lets them fuse with their mate. New Scientist 247, 19 (2020)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lophiiformes",
        "situacao": "ok",
        "texto": "Lophiiformes (Lofiiformes) é uma ordem de peixes ósseos que agrega um conjunto muito diverso de peixes marinhos, com cerca de 322 espécies repartidas por 5 subordens e 16-18 famílias, caracterizados na maioria das espécies pela presença na parte anterior da cabeça de um aparato pra atração de presas (o illicium com a sua esca, formando um isco, daí serem conhecidos por peixes-pescadores) , estrutu\n[…]\nEstes peixes são capazes de distender a mandíbula e o estômago, uma vez que seus ossos são finos e flexíveis, chegando a tamanhos enormes, o que lhe permite engolir presas até duas vezes maiores que o seu corpo inteiro.\n[…]\nAlgumas evidências mostram que alguns Lophiiformes adquiriram os seus simbiontes bioluminescentes do ambiente local. Materiais genéticos das bactérias simbiontes são encontrados perto dos peixes, indicando que o peixe e as suas bactérias associadas provavelmente não evoluíram juntos e as bactérias fazem jornadas difíceis para entrar no hospedeiro.\n[…]\nComo os peixes deste grupo possuem pouca habilidade natatória, passam o maior parte da sua vida aguardando, no caso dos bentónicos enterrados no substrato não consolidado dos fundos ou camuflados sobre o fundo ou entre algas, ou, no caso dos bento-pelágicos, pairando na água, em ambos os casos mexendo a isca para frente e para trás, tentando atrair a potencial presa para a boca, especialmente quando a presa esteja localizada na frente ou acima do seu corpo.\n[…]\nEm algumas famílias, o macho, que é extremamente pequeno, pois no estado adulto atinge apenas  cerca de 6–10 mm, procura ativamente por uma grande fêmea até se fixar sobre o seu corpo, permanente ou temporariamente, passando a alimentar-se do seu sangue. Esse hábito de vida, designado por simbiose sexual (ou parasitismo sexual segundo alguns autores), foi observado nas famílias Caulophrynidae, Neoceratiidae, Oneirodidae, Centrophrynidae e Linophrynidae.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Fonte hidrotermal",
      "descricao": "Fissura no fundo do mar por onde sai água aquecida pela atividade vulcânica, base de ecossistemas sem luz solar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Sem luz do sol, os micróbios das fontes hidrotermais fabricam alimento a partir de compostos químicos, como o gás sulfídrico. Como se chama esse processo?",
    "resposta": "Quimiossíntese",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hydrothermal_vent",
      "https://en.wikipedia.org/wiki/Chemosynthesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hydrothermal_vent",
        "situacao": "ok",
        "texto": "Hydrothermal vents are fissures on the seabed from which geothermally heated water discharges. They are commonly found near volcanically active places, areas where tectonic plates are moving apart at mid-ocean ridges, ocean basins, and hotspots. The dispersal of hydrothermal fluids throughout the global ocean at active vent sites creates hydrothermal plumes. Hydrothermal deposits are rocks and min\n[…]\nA large amount of work is currently being engaged in by both of the above-mentioned companies to ensure that the potential environmental impacts of seafloor mining are well understood and control measures are implemented before exploitation commences. However, this process has been arguably hindered by the disproportionate distribution of research effort among vent ecosystems; the best studied and understood hydrothermal vent ecosystems are not representative of those targeted for mining.\n[…]\nA key talking point surrounding the conservation of hydrothermal vent ecosystems is deep sea mining. There are four main mineral resources that are under consideration for commercial extraction: manganese nodules, cobalt-rich crusts, Seafloor massive sulfide deposits and phosphorite nodules. Seafloor massive sulfide depositions surrounding hydrothermal vents are a central area of discussion.\n[…]\nLost City Hydrothermal Field\n[…]\nMagic Mountain (British Columbia) – Hydrothermal vent field in the northeast Pacific\n[…]\nCsotonyi, J. T.; Stackebrandt, E.; Yurkov, V. (4 July 2006). \"Anaerobic Respiration on Tellurate and Other Metalloids in Bacteria from Hydrothermal Vent Fields in the Eastern Pacific Ocean\". Applied and Environmental Microbiology. 72 (7): 4950–4956. Bibcode:2006ApEnM..72.4950C. doi:10.1128/AEM.00223-06. PMC 1489322. PMID 16820492.\n[…]\nInterRidge Vents Database – global database of the locations of known active submarine hydrothermal vent fields, hosted by InterRidge"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Chemosynthesis",
        "situacao": "ok",
        "texto": "In biochemistry, chemosynthesis is the biological conversion of one or more carbon-containing molecules (usually carbon dioxide or methane) and nutrients into organic matter using the oxidation of inorganic compounds (e.g., hydrogen gas, hydrogen sulfide or ferrous ions) as a source of energy, rather than sunlight, as in photosynthesis. Chemoautotrophs, organisms that obtain carbon from carbon dio\n[…]\nInstead of releasing oxygen gas while fixing carbon dioxide as in photosynthesis, hydrogen sulfide chemosynthesis produces solid globules of sulfur in the process. In bacteria capable of chemoautotrophy (chemosynthesis), such as purple sulfur bacteria, yellow globules of sulfur are present and visible in the cytoplasm.\n[…]\nIn 1890, Sergei Winogradsky proposed a novel type of life process called \"anorgoxydant\". His discovery suggested that some microbes could live solely on inorganic matter and emerged during his physiological research in the 1880s in Strasbourg and Zürich on sulfur, iron, and nitrogen bacteria.\n[…]\nWinogradsky's suggestion was confirmed nearly 90 years later, when hydrothermal ocean vents were discovered in the 1970s. The hot springs and strange creatures were discovered by Alvin, the world's first deep-sea submersible, in 1977 at the Galapagos Rift. At about the same time, then-graduate student Colleen Cavanaugh proposed chemosynthetic bacteria that oxidize sulfides or elemental sulfur as a mechanism by which tube worms could survive near hydrothermal vents.\n[…]\nChemosynthetic communities in different environments are important biological systems in terms of their ecology, evolution and biogeography, as well as their potential as indicators of the availability of permanent hydrocarbon- based energy sources. In the process of chemosynthesis, bacteria produce organic matter where photosynthesis is impossible."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fissura_hidrotermal",
        "situacao": "ok",
        "texto": "Uma fissura hidrotermal (também chamada de respiradouro hidrotermal, fumarola hidrotermal ou fonte hidrotermal), pode ser definida como uma fissura na crosta terrestre a partir da qual emerge um fluido geotermal ou hidrotermal. A água penetra na crosta em altas profundidades e reage com os minerais presentes, sofrendo alterações físico-químicas no caminho. O aquecimento pelo gradiente geotérmico f\n[…]\nOs ecossistemas hidrotermais são uma exceção, os produtores primários nesses ambientes são quimioautotróficos, ou seja, não dependem de luz para síntese de sistemas hidrotermais provém uma diversidade de nichos ecológicos suficiente para suportar microrganismos e seus consumidores.\n[…]\nDevido às condições ambientais extremas, as fontes hidrotermais abrigam comunidades biológicas especializadas que não dependem da fotossíntese, mas da quimiossíntese como base da produção primária. Nesses ambientes, microrganismos quimioautotróficos utilizam compostos químicos reduzidos, como sulfetos, para a obtenção de energia e fixação de carbono.\n[…]\nAs comunidades biológicas das fontes hidrotermais também se caracterizam pela presença de relações simbióticas entre microrganismos quimiossintéticos e organismos multicelulares. Diversos invertebrados marinhos hospedam bactérias simbiontes em tecidos especializados, como órgãos internos ou brânquias. Nessas associações, as bactérias obtêm abrigo e acesso a compostos químicos, enquanto os organismos hospedeiros recebem nutrientes produzidos por meio da quimiossíntese.\n[…]\nMuitos dos pequenos animais em fontes hidrotermais não são simbiontes, e adquirem energia e nutrientes por filtração de matéria orgânica particulada ou consumindo outros organismos. Para suprir suas necessidades de nitrogênio esses organismos provavelmente dependem da fixação quimioautotrófica de N2 por microrganismos ainda não identificados.\n[…]\n«O que são fontes hidrotermais»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Parque Nacional de Yellowstone",
      "descricao": "Parque nacional nos Estados Unidos, sobre um grande sistema vulcânico, famoso por gêiseres e fontes termais."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Parque Nacional de Yellowstone se estende por três estados americanos. Em qual deles fica a maior parte do parque?",
    "resposta": "Wyoming",
    "distratores": [
      "Montana",
      "Idaho",
      "Colorado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yellowstone_National_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yellowstone_National_Park",
        "situacao": "ok",
        "texto": "Yellowstone National Park is a national park of the United States located mainly in the northwest corner of the state of Wyoming, with small portions extending into Montana and Idaho. The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular. While it represents many types of biomes, subalpine forest is the most abundant. It is\n[…]\nThe recovery of populations throughout the states of Wyoming, Montana, and Idaho has been so successful that on February 27, 2008, the U.S. Fish and Wildlife Service removed the Northern Rocky Mountain wolf population from the endangered species list. Wolves in Yellowstone sit at the core of a larger population connected throughout the Greater Yellowstone Ecosystem.\n[…]\nTornadoes in Yellowstone are rare. However, on July 21, 1987, the most powerful tornado recorded in Wyoming touched down in the Teton Wilderness of Bridger-Teton National Forest and hit Yellowstone National Park. Called the Teton–Yellowstone tornado, it was classified as an F4, with wind speeds estimated at between 207 and 260 miles per hour (333 and 418 km/h).\n[…]\nOther protected lands in the region include Caribou-Targhee, Gallatin, Custer, Shoshone and Bridger-Teton National Forests. The National Park Service's John D. Rockefeller, Jr. Memorial Parkway is to the south and leads to Grand Teton National Park. The famed Beartooth Highway provides access from the northeast and has spectacular high-altitude scenery. Nearby communities include West Yellowstone, Montana; Cody, Wyoming; Red Lodge, Montana; Ashton, Idaho; and Gardiner, Montana.\n[…]\nThe closest air transport is available by way of Bozeman, Montana; Billings, Montana; Jackson, Wyoming; Cody, Wyoming, or Idaho Falls, Idaho. Salt Lake City, 320 miles (510 km) to the south, is the closest large metropolitan area.\n[…]\nCongressional Acts Pertaining to Yellowstone"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Yellowstone",
        "situacao": "ok",
        "texto": "O Parque Nacional de Yellowstone é um parque nacional norte-americano localizado nos estados de Wyoming, Montana e Idaho. É o mais antigo parque nacional no mundo, e um marco na história das áreas protegidas. Foi inaugurado a 1 de março de 1872 e cobre uma área de 8 980 km², estando a maior parte dele no condado de Park, no noroeste do Wyoming.\n[…]\nCada erupção é de facto parte de um ciclo eruptivo maior que atinge o seu clímax com o colapso da cobertura de uma câmara magmática. Isto cria uma cratera, denominada caldeira, e liberta grandes quantidade de material vulcânico (normalmente através de fissuras que bordejam a caldeira). O tempo que medeia as três últimas erupções cataclísmicas na região de Yellowstone, variou de 600 000 a 900 000 anos.\n[…]\nAlguns dos gêiseres mais conhecidos do parque Yellowstone:\n[…]\nYellowstone é considerado o habitat selvagem dos Estados Unidos com maior variedade de megafauna. Alguns dos animais que podem ser encontrados são:\n[…]\nEm 1975 existiam apenas 136 ursos cinzentos a viverem em liberdade e em 2016 são mais de 700 devido aos serviços de proteção federal e estatal norte-americanos. Morreram em 2015 no parque de Yellowstone 61 ursos desta espécie — apenas três foram classificadas como mortes naturais.\n[…]\nYellowstone é um dos mais populares parques nacionais dos Estados Unidos. O parque é único no que diz respeito à conjugação de múltiplas características naturais.\n[…]\nO próprio parque está rodeado de outras áreas protegidas, tais como o Grand Teton National Park e a Custer National Forest. Algumas das populações mais próximas são West Yellowstone (Montana), Cody (Wyoming), Red Lodge (Montana), Ashton (Idaho) e Gardiner (Montana). Segundo o censo demográfico efectuado em 2000, existem 600 pessoas a viver em permanência dentro dos limites do parque.\n[…]\n(em inglês) The Yellowstone Park Foundation",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Polo Sul",
      "descricao": "Polo Sul geográfico, ponto mais ao sul da Terra, no planalto antártico."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que explorador norueguês liderou a primeira expedição a alcançar o Polo Sul, em dezembro de 1911?",
    "resposta": "Roald Amundsen",
    "fonte": [
      "https://en.wikipedia.org/wiki/South_Pole",
      "https://en.wikipedia.org/wiki/Roald_Amundsen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/South_Pole",
        "situacao": "ok",
        "texto": "The South Pole, also known as the Geographic South Pole or Terrestrial South Pole, is the point in the Southern Hemisphere where the Earth's axis of rotation meets its surface. It is called the True South Pole to distinguish from the magnetic south pole.\n[…]\nThe Geographic South Pole is marked by a stake in the ice alongside a small sign; these are repositioned each year in a ceremony on New Year's Day to compensate for the movement of the ice. The sign records the respective dates that Roald Amundsen and Robert F. Scott reached the Pole, followed by a short quotation from each man, and gives the elevation as \"9,301 FT.\". A new marker stake is designed and fabricated each year by staff at the site.\n[…]\nThe tent was erected by the Norwegian expedition led by Roald Amundsen on its arrival on 14 December 1911. It is buried beneath the snow and ice in the vicinity of the Pole. It has been designated a Historic Site or Monument (HSM 80), following a proposal by Norway to the Antarctic Treaty Consultative Meeting.\n[…]\nThe first men to reach the Geographic South Pole were the Norwegian Roald Amundsen and his party on 14 December 1911. Amundsen named his camp Polheim and the entire plateau surrounding the Pole King Haakon VII Vidde in honour of King Haakon VII of Norway. Robert Falcon Scott returned to Antarctica with his second expedition, the Terra Nova Expedition, initially unaware of Amundsen's secretive expedition.\n[…]\nScott and four other men reached the South Pole on 17 January 1912, thirty-four days after Amundsen. On the return trip, Scott and his four companions all died of starvation and extreme cold.\n[…]\nListen to Ernest Shackleton describing his 1908 South Pole Expedition, and read more about the recording on [australianscreen online]."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roald_Amundsen",
        "situacao": "ok",
        "texto": "Roald Engelbregt Gravning Amundsen (UK: , US: ; Norwegian: [ˈrùːɑɫ ˈɑ̂mʉnsən] ; 16 July 1872 – c. 18 June 1928) was a Norwegian explorer of polar regions. He was a key figure of the period known as the Heroic Age of Antarctic Exploration.\n[…]\nBorn in Borge, Østfold, Norway, Amundsen began his career as a polar explorer as first mate on Adrien de Gerlache's Belgian Antarctic Expedition of 1897–1899. From 1903 to 1906, he led the first expedition to successfully traverse the Northwest Passage on the sloop Gjøa. In 1909, Amundsen began planning for a South Pole expedition. He left Norway in June 1910 on the ship Fram and reached Antarctica in January 1911.\n[…]\nAmundsen learned of the dissolution of the union between Norway and Sweden, and that he had a new king. The explorer sent the new king, Haakon VII, news that his traversing the Northwest Passage \"was a great achievement for Norway\". He said he hoped to do more and signed it \"Your loyal subject, Roald Amundsen\". The crew returned to Oslo in November 1906, after almost three and a half years abroad. Gjøa was returned to Norway in 1972.\n[…]\nAmundsen, Roald; Nilsen, Thorvald; Prestrud, Kristian; Chater, A.G. (tr.) (1976) [1912]. The South Pole: An Account of the Norwegian expedition in the Fram, 1910–12 (Volumes I and II). London: C. Hurst & Company. ISBN 978-0-903983-47-1. First published in 1912 by John Murray, London.\n[…]\nStephen Bown. The Last Viking: The Life of Roald Amundsen: conqueror of the South Pole. (London, Aurum Press, 2012)\n[…]\nGarth Cameron. From Pole to Pole: Roald Amundsen's Journey in Flight. (New York, Skyhorse Publishing, 2014)\n[…]\nHugo Decleir. Roald Amundsen's Belgica Diary: the first Scientific Expedition to the Antarctic. (Erskine Press, 1999)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polo_Sul",
        "situacao": "ok",
        "texto": "O Polo Sul, também chamado de Polo Sul Geográfico ou Polo Sul Terrestre, é o ponto do Hemisfério Sul onde o eixo de rotação da Terra encontra sua superfície. Também é chamado de Polo Sul Verdadeiro para distingui-lo do polo sul magnético.\n[…]\nO Polo Sul Geográfico é marcado por uma estaca no gelo acompanhada de uma pequena placa. Ambos são reposicionados todos os anos, numa cerimônia realizada no Ano-Novo, para compensar o deslocamento do gelo. A placa registra as datas em que Roald Amundsen e Robert Falcon Scott chegaram ao polo, seguidas de uma breve citação de cada explorador, e informa a altitude do local. Uma nova estaca é projetada e fabricada todos os anos pelo pessoal da estação.\n[…]\nA tenda foi erguida pela expedição norueguesa comandada por Roald Amundsen ao chegar ao polo em 14 de dezembro de 1911. Ela está soterrada sob a neve e o gelo nas proximidades do Polo Sul. O local recebeu a designação de Sítio ou Monumento Histórico HSM 80 por proposta da Noruega no âmbito do Tratado da Antártida. A localização exata da tenda é desconhecida.\n[…]\nOs primeiros homens a chegar ao Polo Sul Geográfico foram o norueguês Roald Amundsen e seu grupo, durante a Expedição de Amundsen ao Polo Sul, em 14 de dezembro de 1911. Amundsen chamou seu acampamento de Polheim e deu ao planalto em torno do polo o nome de King Haakon VII Vidde, em homenagem ao rei Haakon VII da Noruega. Robert Falcon Scott retornou à Antártida com sua segunda expedição, a Expedição Terra Nova, inicialmente sem saber da expedição de Amundsen.\n[…]\nEstação Polo Sul Amundsen-Scott, a estação científica instalada junto ao Polo Sul Geográfico\n[…]\nWebcam do Polo Sul da NOAA\n[…]\nGaleria de fotografias do Polo Sul\n[…]\nGravação de Ernest Shackleton sobre sua expedição de 1908 ao Polo Sul",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Estromatólito",
      "descricao": "Estrutura sedimentar laminada construída por comunidades de micro-organismos, sobretudo cianobactérias."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os estromatólitos fósseis estão entre os sinais de vida mais antigos da Terra. Os mais velhos se formaram há cerca de quanto tempo?",
    "resposta": "Cerca de três bilhões e meio",
    "distratores": [
      "Cerca de 65 milhões",
      "Cerca de 500 milhões",
      "Cerca de dez mil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stromatolite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stromatolite",
        "situacao": "ok",
        "texto": "Stromatolites ( stroh-MAT-ə-lytes, strə-) or stromatoliths (from Ancient Greek  στρῶμα (strôma), GEN στρώματος (strṓmatos) 'layer, stratum' and  λίθος (líthos) 'rock') are layered sedimentary formations (microbialite) that are formed mainly by photosynthetic microorganisms such as cyanobacteria, sulfate-reducing bacteria, and Pseudomonadota (formerly proteobacteria). These microorganisms produce a\n[…]\nGrotzinger, John P.; Andrew H. Knoll (1999). \"Stromatolites in Precambrian Carbonates: Evolutionary Mileposts or Environmental Dipsticks?\". Annual Review of Earth and Planetary Sciences. 27: 313–58. Bibcode:1999AREPS..27..313G. doi:10.1146/annurev.earth.27.1.313. PMID 11543060.\n[…]\nAllwood, Abigail C.; Malcolm R. Walter; Balz S. Kamber; Craig P. Marshall; Ian W. Burch (2006). \"Stromatolite reef from the Early Archaean era of Australia\". Nature. 441 (7094): 714–8. Bibcode:2006Natur.441..714A. doi:10.1038/nature04764. PMID 16760969. S2CID 4417746.\n[…]\nAwramik, S.; Sprinkle, J. (1999). \"Proterozoic stromatolites: the first marine evolutionary biota\". Historical Biology. 13 (4): 241–253. doi:10.1080/08912969909386584.\n[…]\nFarías, María E.; Rascovan, Nicolás; Toneatti, Diego M.; Albarracín, Virginia H.; Flores, María R.; Poiré, Daniel Gustavo; Collavino, Mónica Mariana; Aguilar, O. Mario; Vázquez, Martín; Polerecky, Lubos (2013). \"The discovery of Stromatolites developing at 3570 m above sea level in a high-altitude volcanic lake Socompa, Argentinean Andes\". PLOS ONE. 8 (1): 15. Bibcode:2013PLoSO...853497F. doi:10.1371/journal.pone.0053497. ISSN 1932-6203. PMC 3538587. PMID 23308236. Retrieved 14 April 2014.\n[…]\n\"Stromatolites – Pilbara\". Archived from the original on 24 January 2012. Retrieved 10 December 2011.\n[…]\n\"Research Initiatives in Bahamian Stromatolites\". Archived from the original on 26 April 2012. Retrieved 10 December 2011.\n[…]\nStromatolite photo gallery, a teaching set from Ohio State University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estromat%C3%B3lito",
        "situacao": "ok",
        "texto": "Estromatólito vem do grego antigo ((strôma/strṓmatos) 'camada, estrato', e (líthos) rocha)[carece de fontes]? e é designado a rochas biosedimentares laminadas (microbialito), formadas por atividade microbiana em ambientes aquáticos desde o pré-cambriano. A definição exata de estromatólito ainda é discutida, podendo, por exemplo, excluir estruturas como oncólitos e trombólitos da lista dos estromat\n[…]\nHá mais de 20 anos é conhecida a presença de estromatólitos no chamado sílex de Strelley Pool, uma formação rochosa que fica na Austrália e que data do início do Mesoarqueano, ou seja, há cerca de 3500 milhões de anos.\n[…]\nPor serem fósseis tão antigos, pensa-se que sejam testemunha dos primeiros organismos a realizar a fotossíntese oxigênica, responsáveis pelo gás oxigênio que surgiu no planeta há cerca de 3,5 bilhões de anos.\n[…]\nNo Brasil, os fósseis mais antigos ocorrem no Quadrilátero Ferrífero e têm idade entre 2,1 e 2,4 bilhões de anos, mas o principal registro no país é nos terrenos mesoproterozoicos e neoproterozoicos dos estados DF, GO, MG, PR, BA e SE .\n[…]\nUm exemplo dessa discussão é que não foi possível chegar a um consenso pelo Projeto Internacional de Correlação Geológica 261 intitulado \"Stromatolite\" que reuniu cerca de 200 especialistas do mundo, inclusive do Brasil, para discutir e resolver a questão.\n[…]\nAlguns deles encontrados em rochas de 3,5 bilhões de anos na Austrália e África do Sul são algumas das mais antigas evidências de vida conhecidas. Estromatólitos encontrados na Groenlândia, num depósito de rochas sedimentares abaixo da camada de gelo, foram datados em 3,7 bilhões de anos, constituindo a mais antiga evidência atualmente.\n[…]\nEsta descoberta apoia a busca por existência de vida pretérita em Marte, pois nesta época Marte contava com água líquida em sua superfície e estava em condições similares às da Terra, sob um sol 30% menos brilhante que hoje.",
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
