Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Clima e Biomas** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Antártida",
      "descricao": "Continente coberto de gelo ao redor do Polo Sul"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Se contarmos também os desertos gelados, qual é o maior deserto do mundo?",
    "resposta": "Antártida",
    "distratores": [
      "Saara",
      "Deserto da Arábia",
      "Gobi"
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
    "indice": 2,
    "ancora": {
      "nome": "Cerrado",
      "descricao": "Bioma de savana do Brasil central"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Atrás apenas da Amazônia, qual é o segundo maior bioma do Brasil em área?",
    "resposta": "Cerrado",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cerrado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cerrado",
        "situacao": "ok",
        "texto": "Cerrado é bioma brasileiro de savanas, sendo o segundo maior em extensão territorial depois da Amazônia, ocupando uma área de mais de dois milhões de quilômetros quadrados. O termo \"cerrado\" pode ser utilizado em três sentidos O primeiro, a \"fisionomia do cerrado sensu stricto\" é uma das fisionomias do bioma savana e parte da província florística cerrado sensu lato.\n[…]\nSegundo maior bioma do Brasil, ocupando cerca de 204 milhões de hectares e 24% do território nacional, o Cerrado é o local de origem de grandes bacias hidrográficas brasileiras e da América do Sul.\n[…]\nO Cerrado é o segundo maior bioma da América do Sul e a savana com maior biodiversidade do mundo. Abrange o Aquífero Guarani e abriga os maiores reservatórios subterrâneos de água doce do continente. O Cerrado também desempenha um papel hidrológico crucial, fornecendo água para um terço do rio Amazonas e sustentando diversas das principais bacias hidrográficas da América do Sul.\n[…]\nApesar de sua importância ecológica, as políticas agrícolas e o planejamento de uso da terra no Brasil historicamente consideraram o Cerrado como de baixo valor de conservação. Como resultado, apenas 1,5% do bioma está protegido por reservas federais. Em 1994, aproximadamente 695.000 km² (69.500.000 ha), representando 35% de sua área total, já haviam sido convertidos em paisagens antropogênicas.\n[…]\nDe acordo com o Cadastro Nacional de Unidades de Conservação do Brasil, existiam, em novembro de 2024, 560 áreas protegidas no bioma Cerrado. No Brasil, as áreas protegidas são conhecidas como unidades de conservação, e as do Cerrado representam 19% de todas as unidades do país. Embora uma avaliação em março de 2026 tenha constatado que existiam 645 unidades de conservação no bioma, totalizando 186.416 km² (18641,6 ha), isto representava apenas cerca de 9,81% da área total do Cerrado protegida.\n[…]\n«EMBRAPA: Bioma Cerrado»"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Taiga",
      "descricao": "Floresta boreal de coníferas que cobre o norte da Eurásia e da América do Norte"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o maior bioma terrestre do planeta, que cobre boa parte da Sibéria e do Canadá?",
    "resposta": "Taiga",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taiga"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taiga",
        "situacao": "ok",
        "texto": "Taiga or tayga (, TY-gə; Russian: тайга́, IPA: [tɐjˈɡa]), also known as boreal forest or snow forest, is a biome characterized by coniferous forests consisting mostly of pines, spruces, and larches.\n[…]\nThe taiga, or boreal forest, is the world's largest land biome. In North America, it covers most of inland Canada, Alaska, and parts of the northern contiguous United States. In Eurasia, it covers most of Sweden, Finland, much of Russia from Karelia in the west to the Pacific Ocean (including much of Siberia), much of Norway, some lowland/coastal areas of Iceland,areas of northern Kazakhstan, northern Mongolia, and northern Japan (on the island of Hokkaido).\n[…]\nThe Dahurian larch tolerates the coldest winters of the Northern Hemisphere, in eastern Siberia. The very southernmost parts of the taiga may have trees such as oak, maple, elm and lime scattered among the conifers, and there is usually a gradual transition into a temperate, mixed forest, such as the eastern forest-boreal transition of eastern Canada. In the interior of the continents, with the driest climates, the boreal forests might grade into temperate grassland.\n[…]\nWhile the majority of studies on boreal forest transitions have been done in Canada, similar trends have been detected in the other countries. Summer warming has been shown to increase water stress and reduce tree growth in dry areas of the southern boreal forest in central Alaska and portions of far eastern Russia. In Siberia, the taiga is converting from predominantly needle-shedding larch trees to evergreen conifers in response to a warming climate.\n[…]\nIndex of Boreal Forests/Taiga ecoregions at bioimages.Vanderbilt.edu\n[…]\nSlater museum of natural history: Taiga"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taiga",
        "situacao": "ok",
        "texto": "A taiga (do russo тайга́), também conhecida por floresta de coníferas, ou ainda floresta boreal, é um bioma predominante das regiões localizadas em elevadas latitudes cujo clima típico é o continental frio e polar, comumente encontrado no norte do Alasca, Canadá, sul da Groenlândia, parte da Noruega, Suécia, Finlândia, Sibéria e Japão.\n[…]\nNo Canadá, usa-se o termo floresta boreal para designar a parte meridional desse bioma, e o termo taiga é usado para designar as áreas menos arborizadas ao sul da linha de vegetação arbórea do Ártico.\n[…]\nNa taiga, diferente da tundra, o solo descongela por completo no verão permitindo a formação de florestas aciculifoliadas e há migração de animais de grande e médio portes. É uma região biogeográfica subártica setentrional e seca, na qual as formas de vida vegetal principais são larícios, abetos, pinheiros e espruces, que estão adaptadas ao clima frio. Também ocorrem algumas árvores de folha larga, nomeadamente vidoeiros, faias, salgueiros e sorveiras.\n[…]\nOs pauis e as plantas a eles associadas também são comuns nesta zona, que ocupa a maior parte do interior do Canadá e do norte da Rússia.\n[…]\nEmbora haja precipitação, o solo gela durante os meses de Inverno e as raízes das plantas não conseguem água. A adaptação das folhas à forma de agulhas limita, então, a perda de água, por transpiração. Também a forma cónica das árvores da taiga contribui para evitar a acumulação da neve e a subsequente destruição de ramos e folhas.\n[…]\nOs animais da taiga são carcajus, alces, renas, veados, ursos, lobos, raposas, linces, martas, esquilos, lebres, castores e aves diversas.\n[…]\nLocalização da taiga: zona temperada do norte e zona Antártida, com altas latitudes (60 a 80 graus);\n[…]\nOcorrência da floresta: Alasca, Canadá, sul da Groenlândia, parte da Noruega, Suécia, Finlândia, Sibéria e Japão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pampa",
      "descricao": "Bioma de campos e planícies do sul do Brasil, do Uruguai e do nordeste da Argentina"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Dentro do território brasileiro, qual bioma fica inteiramente num único estado?",
    "resposta": "Pampa",
    "distratores": [
      "Pantanal",
      "Caatinga",
      "Mata Atlântica"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pampa"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pampa",
        "situacao": "ok",
        "texto": "O Pampa é uma região natural e pastoril de planícies com coxilhas cobertas por campos localizada no sul da América do Sul. Geograficamente abrange a metade meridional do estado brasileiro do Rio Grande do Sul (ocupando cerca de 69% do território do estado), o Uruguai e as províncias argentinas de Buenos Aires, La Pampa, Santa Fé, Córdoba, Entre Ríos e Corrientes.\n[…]\nNa classificação dos \"biomas\" (mais propriamente, domínios) brasileiros pelo IBGE (2004), tal região está subdividida entre os biomas Mata Atlântica (planalto meridional, ou  planalto das araucárias, do Paraná ao Rio Grande do Sul) e Pampa (sul do Rio Grande do Sul).\n[…]\nNo Pampa há também a presença da agricultura. Existe principalmente cultivo de: arroz, trigo, uva, milho e soja. Contudo, esta atividade econômica tem contribuído diretamente para o desmatamento na região sul. O plantio de arroz e de soja, especificamente, são os protagonistas nessa questão, lembrando que mais da metade do bioma original foi desmatado em função da agricultura.\n[…]\nE a soja, por ser cultivada em várias partes do país, influenciou a agricultura sulina, ela acabou substituindo em grande parte cultivo do milho. As monoculturas como um todo, são a principal causa de desmatamento, não apenas no Pampa, mas no país inteiro.\n[…]\nA respeito dos obstáculos, há primeiramente o desmatamento, em que as monoculturas de soja e arroz tem um importante papel nisso. O Pampa é o segundo bioma com maior índice de desmatamento no país, tendo percentual entre 43,7% e 54%. Em que aqui ao lado pode-se observar um gráfico do Instituto Nacional de Pesquisas Espaciais, mostrando na coloração amarela a área de desmatamento do bioma no Brasil.\n[…]\nCampos do bioma Mata Atlântica (“campos do Brasil Central”, situados no norte do Estado e que tem continuidade em Santa Catarina e Paraná)\n[…]\nCampos do bioma Pampa (“campos do Uruguai e sul do Brasil”)"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Floresta do Congo",
      "descricao": "Floresta tropical úmida da bacia do Rio Congo, na África Central"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Depois da Amazônia, qual é a maior floresta tropical do mundo?",
    "resposta": "Floresta do Congo",
    "distratores": [
      "Floresta de Bornéu",
      "Floresta de Sumatra",
      "Floresta da Nova Guiné"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Congo_Basin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Congo_Basin",
        "situacao": "ok",
        "texto": "The Congo Basin is the sedimentary basin of the Congo River. The Congo Basin is located in Central Africa, in a region known as west equatorial Africa. The region is sometimes known simply as the Congo. It contains some of the largest tropical rainforests in the world and is an important source of water used in agriculture and energy generation.\n[…]\nThe basin ends where the Congo River empties into the Gulf of Guinea. The basin is a total of 3.7 million square kilometres and is home to some of the largest undisturbed stands of tropical rainforest on the planet, in addition to large wetlands.\n[…]\nCountries wholly or partially in the Congo region:\n[…]\nThe Congo Basin is a globally important climatic region with annual rainfall of between 1,500 to 2,000 millimetres (59 to 79 in). It is one of three hotspots of deep convection (thunderstorms) in the tropics, the other two being over the Maritime continent and the Amazon. These three regions together drive the climate circulation of the tropics and beyond. The Congo Basin has the highest lightning strike frequency of anywhere on the planet.\n[…]\nOwing to the global climatic importance of the Congo Basin, it has been suggested that along with the Amazon, severe changes in the rainfall or climate of the Congo Rainforest could act as a 'tipping point', with widespread impacts on the Earth climate system.\n[…]\nAt a global level, Congo's forests act as the planet's second lung, counterpart to the rapidly dwindling Amazon. They are a huge \"carbon sink\", trapping carbon that could otherwise remain carbon dioxide. The Congo Basin holds roughly 8% of the world's forest-based carbon. Despite this importance, it gets far less scientific attention than the Amazon or the tropical forests of South East Asia. If these woodlands are deforested, the carbon they trap will be released into the atmosphere."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bacia_do_Congo",
        "situacao": "ok",
        "texto": "A bacia do Congo, também chamada de bacia do Zaire, é a bacia hidrográfica do rio Congo, na África. Abrange aproximadamente 4 milhões de km² onde vivem 93,2 milhões de habitantes, com densidades muito variáveis ​​de acordo com as zonas por onde atravessa.\n[…]\nA bacia soma um total de 3,7 milhões de quilômetros quadrados e abriga algumas das maiores extensões de florestas tropicais intocadas do planeta, além de grandes áreas úmidas. A bacia termina na foz do rio Congo no Golfo da Guiné, no Oceano Atlântico. O clima é tropical equatorial, com duas estações chuvosas, incluindo chuvas muito fortes e altas temperaturas durante todo o ano. A bacia abriga o gorila-ocidental-das-terras-baixas, espécie ameaçada de extinção.\n[…]\nO conceito da Bacia do Congo significa a bacia hidrográfica do rio Congo, que abrange dez países da África Central e Austral (Angola, Burundi, Camarões, Gabão, República Centro-Africana, República do Congo, República Democrática do Congo, Ruanda, Tanzânia e Zâmbia).\n[…]\nA bacia do Congo é a segunda maior bacia hidrográfica do mundo, depois da bacia do rio Amazonas. Como a Bacia Amazônica, é o lar das florestas tropicais mais ricas em biodiversidade do mundo e, como esta bacia, está sendo desmatada e degradada. A floresta é uma das principais fontes de divisas para os países da bacia.\n[…]\nEm 2010, restavam cerca de 160 milhões de hectares intactos, sendo que a África Central abriga cerca 10% da biodiversidade mundial: acredita-se que as florestas de terras baixas e aluviais tenham mais de 10.000 espécies de plantas (incluindo 3.000 endêmicas).\n[…]\nUma divisória continental separa as águas da bacia do Congo da bacia do Nilo, a Divisória Congo-Nilo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cumulonimbo",
      "descricao": "Nuvem de tempestade de grande desenvolvimento vertical, que produz raios, trovoadas e granizo"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que tipo de nuvem, a mais alta de todas, pode passar de dez quilômetros de altura e traz raios e trovoadas?",
    "resposta": "Cumulonimbo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cumulonimbus_cloud"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cumulonimbus_cloud",
        "situacao": "ok",
        "texto": "Cumulonimbus (from Latin  cumulus 'heap' and  nimbus 'rain cloud') is a dense, towering, vertical cloud types, typically forming from water vapor condensing in the lower troposphere that builds upward carried by powerful buoyant air currents. Above the lower portions of the cumulonimbus the water vapor becomes ice crystals, such as snow and graupel, the interaction of which can lead to hail and to\n[…]\nIncus (species capillatus only): cumulonimbus with flat anvil-like cirriform top caused by wind shear where the rising air currents hit the inversion layer at the tropopause.\n[…]\nFlanking line is a line of small cumulonimbus or cumulus generally associated with severe thunderstorms.\n[…]\nCumulonimbus are a notable hazard to aviation mostly due to potent wind currents but also reduced visibility and lightning, as well as atmospheric icing and hail if flying inside the cloud. Within and in the vicinity of thunderstorms there is significant turbulence and clear-air turbulence (particularly downwind), respectively.\n[…]\nWind shear within and under a cumulonimbus is often intense with downbursts being responsible for many accidents in earlier decades before training and technological detection and nowcasting measures were implemented. A small form of downburst, the microburst, is the most often implicated in crashes because of their rapid onset and swift changes in wind and aerodynamic conditions over short distances.\n[…]\nIn general, cumulonimbus require moisture, an unstable air mass, and a lifting force in order to form. Cumulonimbus typically go through three stages: the developing stage, the mature stage (where the main cloud may reach supercell status in favorable conditions), and the dissipation stage. The average thunderstorm has a 24 km (15 mi) diameter and a height of approximately 12.2 km (40,000 ft).\n[…]\nMetOffice.gov.uk Learn about thunderstorms and how cumulonimbus clouds form"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cumulonimbus",
        "situacao": "ok",
        "texto": "Um cúmulo-nimbo ou, em latim, cumulonimbus, é um tipo de nuvem caracterizada por um grande desenvolvimento vertical, está diretamente associada com a ocorrência de tempestades com raios, trovões, chuva forte, ventos fortes, granizo e as vezes, tornados.\n[…]\nUma nuvem cúmulo-nimbo em seu ápice de desenvolvimento apresenta uma forma primariamente vertical, cuja altura se estende por mais de vinte quilômetros, especialmente nas regiões tropicais, embora possa ocorrer em praticamente todo o mundo. Logo abaixo de sua base, devido a sua grande espessura, manifesta-se grande escuridão pelo bloqueio da luz solar.\n[…]\nSão necessários cerca de vinte minutos para a maturação de um cumulus congestus até o início da formação da estrutura de bigorna. Contudo, assim que ocorre a transição para cúmulo-nimbo e inicia-se a precipitação, verifica-se um aumento na velocidade de expansão da nuvem. Ao atingir a alta atmosfera, ventos transversais são responsáveis por alongar o topo da nuvem e criam, assim, o formato de bigorna que pode estender-se por dezenas de quilômetros na direção do vento predominante.\n[…]\nOs cúmulo-nimbos são a fonte primária da ocorrência de raios na atmosfera. Entretanto, nem todas as nuvens deste tipo produzem descargas elétricas. A atividade elétrica da nuvem deve-se ao processo convectivo que a formou em que, de acordo com o modelo mais aceito, as partículas de gelo com diferentes propriedades intrínsecas chocam-se e, consequentemente, surgem cargas elétricas que distribuem-se por toda sua extensão, criando um campo elétrico e permitindo a ocorrência das descargas.\n[…]\nQuando a atividade elétrica é intensa, a nuvem passa a ser conhecida também como trovoada.\n[…]\nMedia relacionados com Cumulonimbus no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Pantanal",
      "descricao": "Bioma de planície alagável no Mato Grosso, no Mato Grosso do Sul, na Bolívia e no Paraguai"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "O Pantanal brasileiro se divide entre Mato Grosso e Mato Grosso do Sul. Qual dos dois estados abriga a maior parte dele?",
    "resposta": "Mato Grosso do Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pantanal"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pantanal",
        "situacao": "ok",
        "texto": "Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 000 quilômetros quadrados de extensão e uma altitude média de 100 m. Devido às dificuldades de mensurar o tamanho do Pantanal, é possível encontrar referências de sua área em 210 000 km².\n[…]\nEstá situado no sul do estado do Mato Grosso, e no noroeste de Mato Grosso do Sul, além de partes do norte do Paraguai e do leste da Bolívia (onde é chamado de chaco boliviano). O Pantanal é considerado a maior planície alagada contínua do mundo, com 140 000 km² em território brasileiro. De acordo com o Instituto SOS Pantanal, do total de 195 000 km² considerados do Pantanal, 151 000 km² se encontram no Brasil e os restantes 44 000 km² estão divididos entre Bolívia e Paraguai.\n[…]\nO Pantanal é uma das maiores extensões alagadas contínuas do planeta e está localizado no centro da América do Sul, na bacia hidrográfica do Alto Paraguai. Sua área é de 210 000 km², com 65% de seu território no estado de Mato Grosso do Sul e 35% no Mato Grosso. A região se encontra dividida entre duas subdivisões: Microrregião do Alto Pantanal (em Mato Grosso) e Microrregião do Baixo Pantanal e Microrregião de Aquidauana (em Mato Grosso do Sul).\n[…]\nMuitos animais ameaçados de extinção em outras partes do Brasil ainda possuem populações vigorosas na região pantaneira, como o cervo-do-pantanal, a capivara, o tuiuiú e o jacaré.\n[…]\nDo ponto de vista da vegetação, o termo \"complexo do Pantanal\" vem do fato de a região ter mais de um tipo de vegetação dentro de si. No entanto, a terminologia usada varia entre os autores. Segundo Hoehne (1923), num estudo sobre o estado do Mato Grosso (incluindo o Mato Grosso do Sul, na época), ocorriam as seguintes categorias de vegetação nesta região, na grafia original:\n[…]\nPântano"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Cabaceiras",
      "descricao": "Município do Cariri paraibano, conhecido pela baixíssima chuva e pelas filmagens de cinema"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que cidade da Paraíba, cenário do filme O Auto da Compadecida, costuma ser apontada como a que menos chove no Brasil?",
    "resposta": "Cabaceiras",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cabaceiras"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cabaceiras",
        "situacao": "ok",
        "texto": "Cabaceiras é um município brasileiro do estado da Paraíba, localizado no Sertão do Cariri (Oriental) Paraibano e na Região Geográfica Imediata de Campina Grande. Está a 300 metros de altitude. Sua sede fica a 180 km de João Pessoa, capital do estado.\n[…]\nEm torno dela começou o povoado, que seria transformado, em 1834, em Vila Federal de Cabaceiras. No ano seguinte, em 1835, foi criada a paróquia de N. S. da Conceição, de Cabaceiras. Em 1885, foi alterado o nome da sede municipal para Vila de Cabaceiras e, pelo Decreto-lei n. 1.164, de 15 de novembro de 1938, foi-lhe dado o título de cidade.\n[…]\nCom média de apenas 350 mm durante o ano todo, as precipitações ocorrem em poucos meses, dando vazão a estiagens que duram até dez ou onze meses nos períodos mais secos, conferindo a Cabaceiras o título de município onde menos chove no país.\n[…]\nAs fortes chuvas em alguns anos, como em janeiro de 2004, provocaram um aumento de mais de 500% no índice pluviométrico de alguns municípios na região do sertão paraibano, que ultrapassaram os 500mm. Em Cabaceiras, choveu nesse mês mais da metade da média anual do município, que é de 316 mm.\n[…]\nA cidade de Cabaceiras se autodenomina a \"Roliúde Nordestina\", em uma referência aos mais de 25 filmes que foram rodados na região. É o caso do longa-metragem O Auto da Compadecida, que foi gravado na centro e em arredores da cidade. Cinema, Aspirinas e Urubus, de Marcelo Gomes, e Romance, de Guel Arraes (mesmo diretor de Auto da Compadecida) são outros filmes que têm Cabaceiras como cenário.\n[…]\nNo turismo, Cabaceiras possui um memorial cinematográfico e abriga o Lajedo de Pai Mateus, uma formação rochosa que fica a cerca de 30 quilômetros do centro da cidade.\n[…]\nFederação dos Municípios da Paraíba"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Escala de Beaufort",
      "descricao": "Escala que classifica a força do vento a partir de seus efeitos observados no mar e em terra"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na escala de Beaufort, que mede a força do vento, que nome recebe o grau máximo, o doze?",
    "resposta": "Furacão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beaufort_scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beaufort_scale",
        "situacao": "ok",
        "texto": "The Beaufort scale ( BOH-fərt) is an empirical measure that relates wind speed to observed conditions at sea or on land. Its full name is the Beaufort wind force scale. It was devised in 1805 by Francis Beaufort, a hydrographer in the British Royal Navy. It was officially adopted by the Royal Navy and later spread internationally.\n[…]\nWind speed on the modern Beaufort scale is based on the empirical relationship:\n[…]\nInternationally, the World Meteorological Organization Manual on Marine Meteorological Services (2012 edition) defined the Beaufort Scale only up to force 12 and there was no recommendation on the use of the extended scale.\n[…]\nThis scale is widely used in the Netherlands, Germany, Greece, China, Taiwan, Hong Kong, Malta, Macau, and the Philippines, although with some differences between them. Taiwan uses the Beaufort scale with the extension to 17 noted above. China also switched to this extended version without prior notice on the morning of 15 May 2006, and the extended scale was immediately put to use for Typhoon Chanchu. Hong Kong and Macau retain force 12 as the maximum.\n[…]\nBeaufort's name was also attached to the Beaufort scale for weather reporting:\n[…]\nDouglas sea scale\n[…]\nHuler, Scott (2004). Defining the Wind: The Beaufort Scale, and How a 19th-Century Admiral Turned Science into Poetry. Crown. ISBN 1-4000-4884-2.\n[…]\nNational Meteorological Library and Archive Archived 13 November 2017 at the Wayback Machine fact sheet on the history of the Beaufort Scale, including various scales and photographic depictions of the sea state.\n[…]\nFilm of Wind Scale\n[…]\nHistorical Wind Speed Equivalents Of The Beaufort Scale\n[…]\nBeaufort scale, cites the original definition formula\n[…]\nThe Beaufort Scale and Weather Diaries of Rear Admiral Sir Francis Beaufort—The history of the Beaufort Scale Met Office\n[…]\nBeaufort wind force scale. Met Office"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_de_Beaufort",
        "situacao": "ok",
        "texto": "A Escala de Beaufort é uma escala empírica que classifica a intensidade dos ventos, tendo em conta a sua velocidade e os efeitos resultantes das ventanias no mar e em terra. A escala está diretamente relacionada com a dificuldade de realização de manobras nas embarcações em alto-mar, quanto menor o grau mais fácil é, quanto maior o grau mais complicado fica. Foi concebida pelo meteorologista anglo\n[…]\nNa década de 1830, a escala de Beaufort já era amplamente utilizada pela Marinha Real Britânica.\n[…]\nA escala das forças do vento é descrita para fins práticos pela designação do vento, da faixa de velocidade do vento (em uma ou mais unidades), aspecto do mar, e classificação da força (ou grau) que varia de grau 0 a grau 12, podendo ir além, como por exemplo, até o grau 17.\n[…]\nA escala Beaufort foi ampliada em 1946, quando as forças 13 a 17 foram adicionadas. No entanto, as forças 13 a 17 destinavam-se a ser aplicadas apenas em casos especiais, como ciclones tropicais. Hoje em dia, a escala estendida só é utilizada em Taiwan e na China continental, que são frequentemente afetadas por tufões.\n[…]\nInternacionalmente, o Manual de Serviços Meteorológicos Marinhos da Organização Meteorológica Mundial (OMM) (edição de 2012) definiu a Escala Beaufort apenas até a força 12 e não houve recomendação sobre o uso da escala estendida.\n[…]\nA escala Beaufort está para os ventos, assim como a escala de Mercalli está para as atividades sísmicas, estabelecendo características aos ventos de acordo com a velocidade e o poder de destruição.\n[…]\nEscala de furacões de Saffir-Simpson\n[…]\nEscala Fujita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Classificação climática de Köppen",
      "descricao": "Sistema de classificação dos climas do mundo baseado em temperatura, chuva e vegetação"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na classificação climática de Köppen, cada grande grupo de clima tem uma letra. Que tipo de clima a letra B indica?",
    "resposta": "Seco",
    "distratores": [
      "Tropical",
      "Temperado",
      "Polar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification",
        "situacao": "ok",
        "texto": "The Köppen climate classification divides Earth's climates into five main climate groups, with each group being divided based on patterns of seasonal precipitation and temperature. The five main groups are A (tropical), B (arid), C (temperate), D (continental), and E (polar). Each group and subgroup is represented by a letter. All climates are assigned a main group (the first letter). All climates\n[…]\nThe Köppen climate classification is the most widely used climate classification scheme. It was first published by German-Russian climatologist Wladimir Köppen (1846–1940) in 1884, with several later modifications by Köppen, notably in 1918 and 1936. Later, German climatologist Rudolf Geiger (1894–1981) introduced some changes to the classification system in 1954 and 1961, which is thus sometimes called the Köppen–Geiger climate classification.\n[…]\nThe Köppen climate classification scheme divides climates into five main climate groups: A (tropical), B (arid), C (temperate), D (continental), and E (polar). The second letter indicates the seasonal precipitation type, while the third letter indicates the level of heat. Summers are defined as the six-month period that is warmer either from April to September or October to March, while winter is the six-month period that is cooler.\n[…]\nAccording to the modified Köppen classification system used by modern climatologists, total precipitation in the warmest six months of the year is taken as a reference instead of the total precipitation in the high-sun half of the year.\n[…]\nA 2018 study provides detailed maps for present and future Köppen-Geiger climate classification maps at 1-km resolution.\n[…]\nTrewartha climate classification\n[…]\nList of cities by Köppen climate classification\n[…]\nWorld maps and graphs plus a video about the Köppen climate classification\n[…]\nWorld Map of the Köppen–Geiger climate classification for the period 1951–2000 (archived 6 September 2010)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Classifica%C3%A7%C3%A3o_clim%C3%A1tica_de_K%C3%B6ppen-Geiger",
        "situacao": "ok",
        "texto": "A classificação climática de Köppen-Geiger, mais conhecida por classificação climática de Köppen, é o sistema de classificação global dos tipos climáticos mais utilizado em geografia, climatologia e ecologia. A classificação foi proposta em 1900 pelo climatologista teuto-russo Wladimir Köppen, tendo sido por ele aperfeiçoada em 1918, 1927 e 1936 com a publicação de novas versões, preparadas em col\n[…]\nA classificação é baseada no pressuposto, com origem na fitossociologia e na ecologia, de que a vegetação natural de cada grande região da Terra é essencialmente uma expressão do clima nela prevalecente. Assim, as fronteiras entre regiões climáticas foram selecionadas para corresponder, tanto quanto possível, às áreas de predominância de cada tipo de vegetação, razão pela qual a distribuição global dos tipos climáticos e a distribuição dos biomas apresenta elevada correlação.\n[…]\nNa determinação dos tipos climáticos de Köppen-Geiger são considerados a sazonalidade e os valores médios anuais e mensais da temperatura do ar e da precipitação. Cada grande tipo climático é denotado por um código, constituído por letras maiúsculas e minúsculas, cuja combinação denota os tipos e subtipos considerados.\n[…]\nNo esquema da classificação climática de Köppen, a primeira letra divide os climas em cinco grupos climáticos principais: A (tropical), B (seco), C (temperado), D (continental) e E (polar). A segunda letra indica o tipo de precipitação sazonal, enquanto a terceira letra indica o nível de calor.\n[…]\nDsd = Clima subártico extremamente frio com estação seca, o mês mais frio tem média abaixo de −38 °C, e cerca de 1 a 3 meses apresenta média acima de 10 °C. Ocorre ao menos três vezes mais precipitação no mês mais chuvoso do inverno do que no mês mais seco do verão, e o mês de verão mais seco recebe menos de 30 mm.\n[…]\nWorld Map of the Köppen–Geiger climate classification for the period 1951–2000",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Mata Atlântica",
      "descricao": "Bioma de florestas tropicais que acompanha o litoral leste e sul do Brasil"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que árvore nativa da Mata Atlântica, de madeira avermelhada usada para tingir tecidos, acabou dando nome ao nosso país?",
    "resposta": "Pau-brasil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nAfirmam alguns historiadores que o corte do pau-brasil para a obtenção de sua madeira e sua resina (extraída para uso como tintura em manufaturas de tecidos de alto luxo) foi a primeira atividade econômica dos colonos portugueses na recém-descoberta Terra de Santa Cruz, no século XVI e que a abundância desta árvore no meio a imensidão das florestas inexploráveis teria conferido à colônia o nome de Brasil.\n[…]\nA resina vermelha era utilizada pela indústria têxtil europeia como uma alternativa aos corantes de origem terrosa e conferia aos tecidos uma cor de qualidade superior. Isto, aliado ao aproveitamento da madeira vermelha na marcenaria, criou uma demanda enorme no mercado , o que forçou uma rápida e devastadora \"caça\" ao pau-brasil nas matas brasileiras.\n[…]\nMas, sob o comando do Imperador Dom Pedro II, vastas áreas de Mata Atlântica, principalmente no estado do Rio de Janeiro, foram recuperadas, e iniciou-se uma certa conscientização preservacionista que freou o desmatamento. Entretanto, já se considerava o pau-brasil como uma árvore praticamente extinta.\n[…]\nNo século XX, a sociedade brasileira descobriu o pau-brasil como um símbolo do país em perigo de extinção, e algumas iniciativas foram feitas no sentido de reproduzir a planta a partir de sementes e utilizá-la em projetos de recuperação florestal, com algum sucesso. Atualmente, o pau-brasil tornou-se uma árvore popularmente usada como ornamental.\n[…]\nCiclo do pau-brasil\n[…]\nSímbolos do Brasil\n[…]\nPaubrasilia equinata na Flora do Brasil"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Araucária",
      "descricao": "Pinheiro-do-paraná, árvore conífera nativa do planalto do Sul do Brasil"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que semente da araucária, cozida ou assada, é um petisco típico do inverno no Sul do Brasil?",
    "resposta": "Pinhão",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Araucaria_angustifolia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Araucaria_angustifolia",
        "situacao": "ok",
        "texto": "Araucária (nome científico: Araucaria angustifolia) é a espécie arbórea dominante da floresta ombrófila mista, ocorrendo majoritariamente na região Sul e Sudeste do Brasil, principalmente no sul do estado de São Paulo até as serras do Rio Grande do Sul e na Serra da Mantiqueira, mas é presente também ao longo do restante do Planalto Atlântico Paulista, até o sul do estado de Minas Gerais, na Serra\n[…]\n\"A cutia (Dasyprocta azarae), como grande apreciadora que é do pinhão e pelo costume que tem de enterrar as sementes, para comê-las depois, talvez seja, graças a este comportamento, uma das disseminadoras mais importantes do pinheiro... É tradição no Sul do Brasil, principalmente no Paraná, considerar a gralha-azul (Cyanocorax caeruleus) como o principal dispersor da pinheiro-do-paraná. Porém, ela raramente desce ao solo, vivendo o tempo todo no alto das árvores, na floresta.\n[…]\nO homem, que também utiliza o pinhão na sua alimentação, pode, em certos casos, funcionar como agente dispersor.\"\n[…]\nA árvore foi eleita como símbolo do estado do Paraná, sendo sua representação extremamente comum no artesanato estadual; deu nome à cidade de Curitiba através de seu apelativo indígena curi (curii-tyba, em tupi-guarani, significa \"muito pinhão\", ou \"muito pinheiro\"); é símbolo também da Serra da Mantiqueira, está nos brasões das cidades de Araucária, São Carlos, Campos do Jordão, Taboão da Serra e Itapecerica da Serra.\n[…]\nA Portaria Normativa DC n° 20 de 27 de setembro de 1976 do Instituto Brasileiro de Desenvolvimento Florestal, definiu várias medidas para a proteção das sementes, disciplinando a colheita e comercialização do pinhão e o proibindo o abate de árvores com pinhas na época da queda de sementes. Mas até meados da década de 1980 ainda não existiam restrições importantes à exploração indiscriminada das florestas de araucária.\n[…]\nMata de Araucária"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Caatinga",
      "descricao": "Bioma semiárido do sertão nordestino brasileiro"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que cacto da Caatinga, de grandes flores brancas, tem a florada vista pelo sertanejo como sinal de que a chuva vai chegar?",
    "resposta": "Mandacaru",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mandacaru"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mandacaru",
        "situacao": "ok",
        "texto": "O mandacaru (Cereus jamacaru), também conhecido como cardeiro e jamacaru, Planta da família das Cactaceae, gênero cactus. Arbustiva, xerófita, nativa do Brasil, disseminada no Semiárido do Nordeste. Mandacaru e jamacaru vêm do tupi antigo îamakaru, também chamado nhamandakaru.\n[…]\nNasce e cresce no campo sem qualquer trato cultural. A semente espalhada pelas aves ou pelo vento, não escolhe lugar para nascer. Até sobre telhados de casas rurais pode-se ver pé de mandacaru. O crescimento fica na dependência dos nutrientes do solo em que germina. A espécie típica do bioma caatinga pode atingir cinco até seis metros de altura.\n[…]\nDenominada cientificamente de Cereus hildmannianus K. Schum, essa variedade foi proveniente de uma mutação genética do Mandacaru (Cereus jamacaru), onde alguns genótipos não desenvolveram os espinhos, ocorrendo naturalmente em alguns estados do Nordeste, principalmente no Rio Grande do Norte e no litoral do Estado do Ceará onde foi encontrado vegetando.\n[…]\nA utilização da planta se deu primeiramente pelos povos indígenas da Caatinga, sendo usado na alimentação ou em tradições. Atualmente, o povo Fulni-Ô, de Pernambuco, ainda usa o mandacaru na sua dieta e na sua medicina tradicional, mantendo um conhecimento milenar.\n[…]\nOs tratos culturais requeridos são os mesmos da palma, ou seja, simplesmente a capina. Se o agricultor tiver esterco de curral, pode usar como adubo, já que o mandacaru responde bem à adubação orgânica. As técnicas simples para o plantio e manejo favorecem a implantação dos cultivos. Todos estes procedimentos são de baixo custo. Testes realizados em campos experimentais da caatinga, e em propriedades de agricultores revelam o bom desempenho produtivo da espécie nativa.\n[…]\nMedia relacionados com Mandacaru no Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Oásis",
      "descricao": "Área fértil e com água no meio de um deserto, alimentada por fontes ou lençóis subterrâneos"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que palmeira, cujos frutos doces alimentavam as caravanas, é a árvore mais típica dos oásis do Saara?",
    "resposta": "Tamareira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oasis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oasis",
        "situacao": "ok",
        "texto": "In ecology, an oasis (; pl.: oases ) is a fertile area of a desert or semi-desert environment that sustains plant life and provides habitat for animals. Surface water may be present, or water may only be accessible from wells or underground channels created by humans. In geography, an oasis may be a current or past rest stop on a transportation route, or less-than-verdant location that nonetheless\n[…]\nThe location of oases has been of critical importance for trade and transportation routes in desert areas; caravans must travel via oases so that supplies of water and food can be replenished. Thus, political or military control of an oasis has in many cases meant control of trade on a particular route. For example, the oases of Awjila, Ghadames and Kufra, situated in modern-day Libya, have at various times been vital to both north–south and east–west trade in the Sahara Desert.\n[…]\nThe location of oases also informed the Darb El Arba'īn trade route from Sudan to Egypt, as well as the caravan route from the Niger River to Tangier, Morocco. The Silk Road \"traced its course from water hole to water hole, relying on oasis communities such as Turpan in China and Samarkand in Uzbekistan\".\n[…]\nThe plantings—through a virtuous cycle of wind reduction, increased shade and evapotranspiration—create a microclimate favorable to crops; \"measurements taken in different oases have showed that the potential evapotranspiration of the areas was reduced by 30 to 50 percent within the oasis.\"\n[…]\nMorocco has lost two-thirds of its oasis habitat over the last 100 years due to heat, drought, and water scarcity. The Ferkla Oases in Morocco once drew on water from the Ferkla, Sat and Tangarfa Rivers but they are now dry but for a few days a year.\n[…]\nOasis Spring Ecological Reserve, Salton Sea, California\n[…]\nFog oasis (South America)\n[…]\nThe dictionary definition of oasis at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O%C3%A1sis",
        "situacao": "ok",
        "texto": "Um oásis é uma área isolada de vegetação em um deserto, tipicamente vizinho a uma nascente de água doce.\n[…]\nO local de um oásis tem sido de importância crítica para rotas de comércio e caravanas nas áreas desérticas. Caravanas devem mudar de oásis de acordo com a necessidade de água ou comida. O controle político ou militar de um oásis significa em muitos casos controle do comércio ou de uma rota em particular. Por exemplo, os oásis de Aujila, Gadamés e Cufra, situados na Líbia, têm sido vitais para ambas as rotas Norte-Sul e Leste-Oeste e comércio no deserto do Saara.\n[…]\nA palavra oásis vem do latim oasis, que por sua vez tem origem no termo da língua grega antiga óasis, ὄασις, que é um empréstimo direto do egípcio demótico. A palavra para oásis na língua copta (descendente do egípcio demótico) é wahe ou ouahe, que significa \"morada\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Cumulonimbo",
      "descricao": "Nuvem de tempestade de grande desenvolvimento vertical, que produz raios, trovoadas e granizo"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O topo achatado de um cumulonimbo, a nuvem das tempestades, tem a forma e o nome de que ferramenta de ferreiro?",
    "resposta": "Bigorna",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cumulonimbus_incus",
      "https://en.wikipedia.org/wiki/Cumulonimbus_cloud"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cumulonimbus_incus",
        "situacao": "ok",
        "texto": "A cumulonimbus incus cloud (from Latin  incus 'anvil'), also called a thunderhead or anvil cloud, is a cumulonimbus cloud that has reached the level of stratospheric stability and has formed the characteristic flat, anvil-shaped top. It signifies a thunderstorm in its mature stage, succeeding the cumulonimbus calvus stage. Cumulonimbus incus is a subtype of cumulonimbus capillatus.\n[…]\nA cumulonimbus incus is a mature thunderstorm cloud generating many dangerous elements.\n[…]\nTornadoes: in severe cases (most commonly with super cells), it can produce tornadoes. They are not directly produced by cumulonimbus incus but rather produced by supercells which come from cumulonimbus incus.\n[…]\nCumulonimbus clouds can be powerful. If the correct atmospheric conditions are met, they can grow into a supercell storm. This cloud may be a single-cell thunderstorm or one cell in a multicellular thunderstorm. They are capable of producing severe storm conditions for a short amount of time."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cumulonimbus_cloud",
        "situacao": "ok",
        "texto": "Cumulonimbus (from Latin  cumulus 'heap' and  nimbus 'rain cloud') is a dense, towering, vertical cloud types, typically forming from water vapor condensing in the lower troposphere that builds upward carried by powerful buoyant air currents. Above the lower portions of the cumulonimbus the water vapor becomes ice crystals, such as snow and graupel, the interaction of which can lead to hail and to\n[…]\nIncus (species capillatus only): cumulonimbus with flat anvil-like cirriform top caused by wind shear where the rising air currents hit the inversion layer at the tropopause.\n[…]\nFlanking line is a line of small cumulonimbus or cumulus generally associated with severe thunderstorms.\n[…]\nCumulonimbus are a notable hazard to aviation mostly due to potent wind currents but also reduced visibility and lightning, as well as atmospheric icing and hail if flying inside the cloud. Within and in the vicinity of thunderstorms there is significant turbulence and clear-air turbulence (particularly downwind), respectively.\n[…]\nWind shear within and under a cumulonimbus is often intense with downbursts being responsible for many accidents in earlier decades before training and technological detection and nowcasting measures were implemented. A small form of downburst, the microburst, is the most often implicated in crashes because of their rapid onset and swift changes in wind and aerodynamic conditions over short distances.\n[…]\nIn general, cumulonimbus require moisture, an unstable air mass, and a lifting force in order to form. Cumulonimbus typically go through three stages: the developing stage, the mature stage (where the main cloud may reach supercell status in favorable conditions), and the dissipation stage. The average thunderstorm has a 24 km (15 mi) diameter and a height of approximately 12.2 km (40,000 ft).\n[…]\nMetOffice.gov.uk Learn about thunderstorms and how cumulonimbus clouds form"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cumulonimbus_incus",
        "situacao": "ok",
        "texto": "Cumulonimbus incus (em latim: incus, \"bigorna\"), também conhecido como uma nuvem-bigorna é uma cumulonimbus, que alcançou o nível da estratosfera e forma sua característica forma de bigorna em seu topo. Isso significa tempestade em desenvolvimento, procedendo o o estágio da cumulonimbus calvus. A cumulonimbus incus é uma sub-formação de cumulonimbus capillatus.\n[…]\nUma cumulonimbus incus é uma nuvem de tempestade madura, gerando elementos perigosos.\n[…]\nRelâmpago; esta nuvem de tempestade é capaz de produzir relâmpagos nuvem-terra.\n[…]\nGranizo; granizos pode cair a partir dessa nuvem com um ambiente altamente instável (o que favorece uma mais vigorosa tempestade de corrente ascendente).\n[…]\nChuva pesada; esta nuvem pode ocasionar muitos centímetros de chuva em pouco tempo. Isto pode causar enchentes\n[…]\nRajadas de vento fortes; ventos fortes a partir de um downburst pode ocorrer sob esta nuvem.\n[…]\nAs nuvens cumulonimbus podem ser poderosas. Se as condições atmosféricas for favoráveis, elas podem se transformar em uma tempestade supercelular. Essa nuvem pode ser uma única célula de tempestade ou de uma célula em uma tempestade multicelular. Eles são capazes de produzir graves condições de tempestade para um curto período de tempo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Ciclone tropical",
      "descricao": "Tempestade giratória que se forma sobre oceanos quentes, chamada de furacão ou tufão conforme a região"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Como se chama a região central de um furacão, onde o vento é fraco e o céu costuma ficar limpo?",
    "resposta": "Olho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eye_(cyclone)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eye_(cyclone)",
        "situacao": "ok",
        "texto": "The eye is a region of mostly calm weather at the center of a tropical cyclone. The eye of a storm is a roughly circular area, typically 30–65 kilometers (19–40 miles; 16–35 nautical miles) in diameter. It is surrounded by the eyewall, a ring of towering thunderstorms where the most severe weather and highest winds of the cyclone occur. The cyclone's lowest barometric pressure occurs in the eye an\n[…]\nIn strong tropical cyclones, the eye is characterized by light winds and clear skies, surrounded on all sides by a towering, symmetric eyewall. In weaker tropical cyclones, the eye is less well defined and can be covered by the central dense overcast, an area of high, thick clouds that show up brightly on satellite imagery. Weaker or disorganized storms may also feature an eyewall that does not completely encircle the eye, have an eye that features heavy rain, or lack an eye altogether.\n[…]\nA typical tropical cyclone has an eye approximately 30–65 km (20–40 mi) across at the geometric center of the storm. The eye may be clear or have spotty low clouds (a clear eye), it may be filled with low- and mid-level clouds (a filled eye), or it may be obscured by the central dense overcast. There is, however, very little wind and rain, especially near the center. This is in stark contrast to conditions in the eyewall, which contains the storm's strongest winds.\n[…]\nSince stronger thunderstorms and heavier rain mark areas of stronger updrafts, the barometric pressure at the surface begins to drop, and air begins to build up in the upper levels of the cyclone. This results in the formation of an upper level anticyclone, or an area of high atmospheric pressure above the central dense overcast. Consequently, most of this built up air flows outward anticyclonically above the tropical cyclone.\n[…]\nOutline of tropical cyclones"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Olho_%28ciclone%29",
        "situacao": "ok",
        "texto": "O olho é uma região localizada no centro de ciclones tropicais fortes onde as condições climáticas são amenas. O olho de uma tempestade é uma região grosseiramente circular e geralmente com 30 a 60 km (20 a 30 milhas) de diâmetro. Está circundado pela \"parede do olho\", um anel de violentas trovoadas em que ocorrem os fenômenos climáticos mais severos de um ciclone.\n[…]\nEm ciclones tropicais fortes, o olho é caracterizado por ventos moderados e céus limpos, e é rodeado em todos os lados por uma parede de olho muito alta e simétrica. Em ciclones tropicais mais fracos, o olho não é tão bem definido, e pode ser envolto pela cobertura de nuvens central densa, que é uma região de nuvens altas e densas que aparecem claramente em imagens de satélite.\n[…]\nUm ciclone tropical típico terá um olho de aproximadamente 30 a 65 km (20 a 40 milhas) de um lado a outro, geralmente situado no centro geométrico da tempestade. O olho pode ser limpo, claro, ou ter manchas de nuvens baixas (um olho limpo), pode ser preenchido com nuvens baixas e médias (um olho preenchido) ou pode ser preenchido por nebulosidade densa. Há, entretanto, muito pouco vento e chuva, especialmente próximo do centro.\n[…]\nIsso pode desencadear outro ciclo de reposição da parede do olho.\n[…]\nEmbora o olho seja, de longe, a porção mais calma da tempestade, sem vento no centro e céu normalmente limpo, é possivelmente a região mais perigosa sobre o oceano. Na parede do olho, ondas impulsionadas pelo vento deslocam-se todas na mesma direção. No centro do olho, entretanto, convergem ondas de todas as direções, criando cristas irregulares que podem formar-se umas sobre as outras, originando os vagalhões.\n[…]\nAinda que apenas ciclones tropicais possuam estruturas que são oficialmente chamadas \"olhos\", existem outras tempestades que podem exibir estruturas semelhantes a um olho:\n[…]\nCiclone tropical\n[…]\nCiclone extratropical",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Mata dos Cocais",
      "descricao": "Formação vegetal de transição entre Amazônia, Cerrado e Caatinga, dominada por palmeiras como o babaçu e a carnaúba"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que palmeira da Mata dos Cocais fornece uma cera usada em polidores de carro e no brilho de balas e chocolates?",
    "resposta": "Carnaúba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carna%C3%BAba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carna%C3%BAba",
        "situacao": "ok",
        "texto": "A carnaúba (Copernicia prunifera), também chamada carnaubeira e carnaíba, é uma palmeira, da família Arecaceae, endêmica do semiárido da Região Nordeste do Brasil. É a árvore-símbolo do Estado do Ceará e do Estado do Piauí, conhecida como \"árvore da vida\", pois oferece uma infinidade de usos ao homem.\n[…]\n\"Carnaúba\" e \"carnaíba\" provêm do tupi karana'yba (literalmente \"pé de caraná\").\n[…]\nEla também não é facilmente solúvel. A água não pode romper uma camada de cera de carnaúba, apenas outros solventes o podem fazer, geralmente em combinação com calor. Isso significa que o material possui alta durabilidade, tornando inclusive uma superfície um tanto ou quanto resistente à água. Muitos surfistas, por exemplo, usam cera para suas pranchas que contém carnaúba. Também é usada como cobertura de pratos de papel, fio dental e uma alternativa para gelatina vegetariana.\n[…]\nNa indústria farmacêutica, aparece como cobertura de tabletes e em um grande número de embalagens de alimentos. Ao contrário de muitas outras ceras, o acabamento com cera de carnaúba não se desfaz com o tempo, apenas fica opaco. Apesar de a cera de carnaúba ter sido substituída em grande parte por sintéticos, ainda é um produto muito usado em muitas partes do mundo. Também é muito usada em cera de carros.\n[…]\nBagana é a palha resultante da extração da cera da folha da carnaúba. A cera tem diversas aplicações industriais, e é também exportada. A palha pode ser aproveitada para fins agrícolas em compostagem ou como cobertura morta, para ajudar a conservar a umidade do solo. Além disso, pode ser usada como componente de ração para ovinos.\n[…]\nA palha da carnaúba também é usada na alimentação dos animais. Estes, em tempo de escassez, comem as folhas (palhas) das carnaubeirinhas pequenas, chamadas pindoba."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Serengeti",
      "descricao": "Região de savanas no norte da Tanzânia e no sudoeste do Quênia, famosa pela migração de grandes manadas"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que animal, em manadas de mais de um milhão de cabeças, protagoniza a grande migração anual pelas savanas do Serengeti?",
    "resposta": "Gnu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Serengeti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Serengeti",
        "situacao": "ok",
        "texto": "The Serengeti ( SERR-ən-GHET-ee) is a geographical region in Africa, spanning the Mara and Arusha Regions of Tanzania and extending to southwestern Kenya. The protected area within the region includes approximately 30,000 km2 (12,000 sq mi) of land, including the Serengeti National Park and several game reserves. The Serengeti hosts one of the world's largest land animal migration (in terms of tot\n[…]\nAltitudes in the Serengeti range from 920 to 1,850 metres (3,020 to 6,070 ft) with mean temperatures varying from 15 to 25 °C (59 to 77 °F). Although the climate is usually warm and dry, rainfall occurs in two rainy seasons: March to May, and a shorter season in October and November. Rainfall amounts vary from a low of 508 millimetres (20 in) in the lee of the Ngorongoro highlands to a high of 1,200 millimetres (47 in) on the shores of Lake Victoria.\n[…]\nIn 1993, soft rock artist Dan Fogelberg recorded a song titled \"Serengeti Moon\" for his studio album River of Souls. It is an African-themed love song about a couple making love underneath the Serengeti moon.\n[…]\nCanadian guitarist Sonny Greenwich recorded a song titled \"Serengeti\" on his 1994 album Hymn to the Earth with vocals by Ernie Nelson.\n[…]\nSerengeti, a six-episode BBC series, chronicles the life of some of the animals in the Serengeti.\n[…]\nThe 1982 song \"Africa\" by the American rock band Toto, originally released on their album Toto IV, includes a reference to the Serengeti. The song inaccurately describes Mount Kilimanjaro as \"ris(ing) like Olympus above the Serengeti\"; Kilimanjaro is actually located hundreds of miles to the east of the Serengeti.\n[…]\nThe American rock band the Grateful Dead included the track \"Serengetti\", an instrumental dual drum solo, on their 1978 album Shakedown Street, interrupting the disco and soft rock-inspired sound with a tribal jam.\n[…]\nSerengeti Eco System"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Serengu%C3%A9ti",
        "situacao": "ok",
        "texto": "Serenguéti (Serengeti) é uma região geográfica na África Oriental, no norte da Tanzânia e sudoeste do Quénia, entre as latitudes 1 S e  3 S e longitudes 34 E e 36 E, cobrindo cerca de 30000 km2.\n[…]\nO Serenguéti abriga a maior migração animal de mamíferos do mundo, uma das maravilhas do mundo natural.\n[…]\nNa região fica o Parque Nacional de Serenguéti e várias reservas de caça. A palavra \"Serenguéti\" provém da língua massai, na qual \"Serengit\" significa \"planícies intermináveis\".\n[…]\nHá cerca de 70 espécies de grandes mamíferos e 500 de aves na região, e esta grande diversidade é função de vários habitats como florestas, pântanos, inselbergues, savanas e bosques.\n[…]\nEstas pradarias são vitais para as migrações de milhares de grandes mamíferos: o gnu-azul (Connochaetes taurinus), a zebra-de-burchell (Equus quagga burchellii), a gazela-de-thomson (Gazella thomsonii), ou o elande-comum (Taurotragus oryx) são algumas delas.\n[…]\nUm grande número de espécies de predadores habita na ecorregião: chita (Acinonyx jubatus), leão (Panthera leo), leopardo (Panthera pardus), hiena-manchada (Crocuta crocuta), hiena-listrada (Hyaena hyaena), chacal-listrado (Canis adustus), chacal-dourado (Canis aureus) chacal-de-gualdrapa (Canis mesomelas), ratel (Mellivora capensis), caracal (Caracal caracal), serval (Leptailurus serval), gato-selvagem ou gato-bravo (Felis silvestris), raposa-orelhuda (Otocyon megalotis) e várias espécies de civetas, ginetas e mangustos (família Viverridae).\n[…]\nParque Nacional de Serengueti",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Ventos alísios",
      "descricao": "Ventos constantes que sopram dos trópicos em direção ao equador"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No hemisfério sul, os ventos alísios sopram rumo ao equador vindos de que direção?",
    "resposta": "Sudeste",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trade_winds"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trade_winds",
        "situacao": "ok",
        "texto": "The trade winds,  or easterlies,  are east-to-west prevailing winds that flow in Earth's equatorial region. The trade winds blow mainly from the northeast in the Northern Hemisphere and from the southeast in the Southern Hemisphere, strengthening during the winter and when the Arctic oscillation is in its warm phase. Trade winds have been used by captains of sailing ships to cross the world's ocea\n[…]\nThe weaker the trade winds become, the more rainfall can be expected in the neighboring landmasses.\n[…]\nWhen it occurs within a trade wind regime, it is known as a trade wind inversion.\n[…]\nClouds which form above regions within trade wind regimes are typically composed of cumulus which extend no more than 4 kilometres (13,000 ft) in height, and are capped from being taller by the trade wind inversion. Trade winds originate more from the direction of the poles (northeast in the Northern Hemisphere, southeast in the Southern Hemisphere) during the cold season, and are stronger in the winter than the summer.\n[…]\nAs an example, the windy season in the Guianas, which lie at low latitudes in South America, occurs between January and April. When the phase of the Arctic oscillation (AO) is warm, trade winds are stronger within the tropics. The cold phase of the AO leads to weaker trade winds. When the trade winds are weaker, more extensive areas of rain fall upon landmasses within the tropics, such as Central America.\n[…]\nDuring mid-summer in the Northern Hemisphere (July), the westward-moving trade winds south of the northward-moving subtropical ridge expand northwestward from the Caribbean Sea into southeastern North America (Florida and Gulf Coast). When dust from the Sahara moving around the southern periphery of the ridge travels over land, rainfall is suppressed and the sky changes from a blue to a white appearance which leads to an increase in red sunsets.\n[…]\nWinds in the Age of Sail"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Al%C3%ADsios",
        "situacao": "ok",
        "texto": "Os alísios, também chamados alíseos, aliseus ou  alisados,  são ventos regulares quanto à direção e constantes em intensidade e que sopram todo o ano, de leste para oeste, das altas pressões subtropicais para as baixas pressões equatoriais da Terra. Fazem parte da célula de Hadley, que é uma das três células de macrocirculação atmosférica e que está situada na faixa intertropical.\n[…]\nOs ventos alísios sopram principalmente de nordeste no Hemisfério Norte e de sudeste, no Hemisfério Sul, fortalecendo-se durante o inverno no respectivo hemisfério, quando a oscilação Ártica está na sua fase quente. Desde a era dos descobrimentos, os ventos alísios têm sido usados pelos navios à vela para cruzar os oceanos, e o seu uso permitiu a expansão colonial europeia nas Américas e as rotas comerciais que se estabeleceram através do Oceano Atlântico e do Oceano Pacífico.\n[…]\nPor essa razão, os alísios são chamados, em inglês, trade winds.\n[…]\nEm meteorologia, os ventos alísios atuam como os fluxo de direção na determinação do percurso das tempestades tropicais que se formam sobre os oceanos Atlântico, Pacífico e sul do Índico e atingem terra na América do Norte, Sudeste Asiático e Madagáscar e África Oriental.\n[…]\nOs ventos alísios também transportam poeira do Sahara, rica em nitratos e fosfatos, para as América Central, nordeste da América do Sul, o Mar das Caraíbas e para partes do sudeste e sudoeste da América do Norte.\n[…]\nOs ventos regulares que durante o ano sopram regularmente de NE no hemisfério Norte e do SE no do Sul. A partir dos 30º vão diminuindo de intensidade em direção ao Equador até se extinguirem formando ali a zona de calmarias equatoriais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Brisa marítima",
      "descricao": "Vento local que alterna entre o mar e a terra ao longo do dia por causa da diferença de aquecimento entre eles"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Numa praia, durante o dia, a brisa sopra do mar para a terra. E à noite, para que lado ela costuma soprar?",
    "resposta": "Da terra para o mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sea_breeze"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sea_breeze",
        "situacao": "ok",
        "texto": "A sea breeze or onshore breeze is a wind that blows in the afternoon from a large body of water toward or onto a landmass. By contrast, a land breeze or offshore breeze is a wind that blows in the night from a landmass toward or onto a large body of water. Sea breezes and land breezes are both important factors in coastal regions' prevailing winds.\n[…]\nAt night, the sea breeze usually changes to a land breeze, due to a reversal of the same mechanisms.\n[…]\nDue to its large size, Lake Okeechobee may also contribute to this activity by creating its own lake breeze which collides with the east and west coast sea breezes.\n[…]\nIn Cuba, similar sea breeze collisions with the northern and southern coasts sometimes lead to storms.\n[…]\nThis is mainly because the strength of the land breeze is weaker than the sea breeze. The land breeze will die once the land warms up again the next morning.\n[…]\nWind farms can be situated near a coast to take advantage of the normal daily fluctuations of wind speed resulting from sea or land breezes. While many onshore and offshore wind farms do not rely on these winds, a nearshore wind farm is a type of offshore wind farm located on shallow coastal waters to take advantage of both sea and land breezes. For practical reasons, other offshore wind farms are situated further out to sea and rely on prevailing winds rather than sea breezes.\n[…]\nFremantle Doctor, the local name for the sea breeze in and around Perth, Western Australia\n[…]\nSoutherly buster, a sea breeze, though usually a storm, which is experienced in the southeast coast of New South Wales, southern coast of Victoria and New Zealand\n[…]\nMountain breeze and valley breeze – Localized winds which occur in a daily cycle\n[…]\nWeather Elements: Sea and Land Breezes at the Wayback Machine (archived January 2, 2018)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brisa",
        "situacao": "ok",
        "texto": "Chama-se brisa uma circulação de ar (vento) de fraca a moderada intensidade próxima à superfície. Tal circulação afeta uma camada rasa da atmosfera (até por volta de 200 metros de altitude) e os ventos locais associados são extremamente influenciados (na direção) por obstáculos naturais e (na intensidade) pela rugosidade da superfície.\n[…]\nComo as massas de terra são aquecidas pelo sol mais rapidamente do que o oceano, o ar em cima delas ascende e cria uma baixa de pressão no solo que atrai o ar mais fresco do mar: o que se chama uma brisa marítima. Ao cair da noite, há muitas vezes um período de calma durante o qual a temperatura em terra e no mar são iguais. De noite, como o oceano arrefece mais lentamente, a brisa sopra de terra, na direção oposta, mas é geralmente mais fraca porque a diferença de temperaturas é menor.\n[…]\nAs monções no sudeste asiático são brisas marítimas de grande escala. Variam a sua direção entre as estações porque as massas de terra são aquecidas ou arrefecidas mais rapidamente que o mar. Monções de Verão - do mar para a terra (aquecida). Monções de Inverno - da terra (mais fria) para o mar.\n[…]\nBrisa Marítima: É o deslocamento do ar frio que vem dos oceanos em direção ao ambiente terrestre.\n[…]\nBrisa Terrestre: É o deslocamento do ar frio que vem da terra em direção ao mar.\n[…]\nExistem também as circulações de brisa de vale/montanha. No começo do dia, o aquecimento do ar do fundo do vale - que estava mais denso e pesado - faz com que ele comece a fluir ao longo das encostas sob a forma de ventos de vales. À noite, o processo inverte-se e o ar frio e denso começa a se acumular no fundo dos vales - é a brisa da montanha.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Deserto",
      "descricao": "Tipo de região, quente ou fria, onde a precipitação é muito baixa"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Há desertos escaldantes e desertos gelados. Afinal, que característica define um deserto?",
    "resposta": "Pouca chuva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Deserto"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto",
        "situacao": "ok",
        "texto": "Em geografia, Deserto é uma região que recebe pouca precipitação pluviométrica.[carece de fontes]? Em outras palavras, é uma região onde os níveis de chuva e umidade ficam abaixo da média. Muitos desertos têm um índice pluviométrico anual abaixo de 400 mm. Como consequência são áridos, tendo a reputação de serem capazes de sustentar pouca vida.\n[…]\nAs montanhas de areia chamadas Sand Hills são um campo de dunas inativo de 57 000 km² no centro de Nebraska. O maior mar de areia no hemisfério ocidental está hoje estabilizado por vegetação, e recebe cerca de 500 mm de chuva por ano. As dunas de Sand Hills chegam aos 120 m de altura. O deserto do Calaári também é um paleodeserto.\n[…]\nA chuva às vezes cai nos desertos, e tempestades no deserto frequentemente são violentas. Um recorde de 44 mm em 3 horas de chuva já foi registrado no Saara. Grandes tempestades no Saara podem despejar quase um milímetro de chuva por minuto. Canais normalmente secos, chamados de arroios ou wadis, podem encher após chuvas pesadas, e chuvas rápidas os tornam perigosos.\n[…]\nApesar de poucas chuvas caírem nos desertos, estes recebem água corrente de fontes efêmeras, alimentadas pela chuva e neve de montanhas adjacentes. Estas correntes enchem os canais com uma camada de lama e frequentemente transportam consideráveis quantidades de sedimento por um ou dois dias.\n[…]\nLagos se formam onde a chuva ou água de degelo no interior das bacias de drenagem é suficiente. Os lagos dos desertos são geralmente rasos, temporários e salgados. Por serem rasos e terem um gradiente de profundidade reduzido, a força do vento pode fazer as águas do lago se espalharem por vários quilômetros quadrados. Quando os pequenos lagos secam, deixam uma crosta de sal no fundo. A área plana formada com argila, lama ou areia incrustrada com sal é conhecida como salar, ou, no México, \"playa\"."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Várzea",
      "descricao": "Floresta amazônica inundada periodicamente pelas cheias de rios de água barrenta, como o Solimões"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O igapó margeia rios de água preta. Já a várzea amazônica é inundada por rios de água de que tipo, como o Solimões?",
    "resposta": "Água branca, barrenta",
    "fonte": [
      "https://en.wikipedia.org/wiki/V%C3%A1rzea_forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/V%C3%A1rzea_forest",
        "situacao": "ok",
        "texto": "A várzea forest is a seasonal floodplain forest inundated by whitewater rivers that occurs in the Amazon biome. Until the late 1970s, the definition was less clear and várzea was often used for all periodically flooded Amazonian forests.\n[…]\nFurther down are the Purus várzea in the middle Amazon, the Monte Alegre várzea and Gurupa várzea on the lower Amazon and the Marajó várzea at the mouth of the Amazon. The Marajó várzea is affected by both freshwater and tidal flows.\n[…]\nAmazonian várzea forests are flooded by nutrient rich, high sediment whitewater rivers such as the Solimões-Amazon, the Purus, and Madeira rivers. This makes the várzea areas distinct from igapós, floodplains from nutrient poor blackwater. The water level fluctuations that the várzea experiences result in distinct aquatic and terrestrial phases within the year.\n[…]\nIn addition, due to the fertile alluvial soils within várzea forests, trees typically grow more rapidly in the várzea than within terre firme forests and transport of logs is made easy by the use of the river. Most likely a result of the above reasoning, within Amazonia, logging has traditionally been centered in the várzea, and only in recent years has expanded into terra firme areas.\n[…]\nAn additional major impact from humans seen in the várzea is the extraction or mass production of the açaí palm (Euterpe oleracea) for the palm or for the well known açaí berry. The juice obtained from açaí is a major part of the diet for some regional populations within the Amazon and in some regions is the most important monetary crop. In açaí agroforests, other species surrounding clumps of the palm are commonly heavily pruned to remove competition."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Floresta_de_v%C3%A1rzea",
        "situacao": "ok",
        "texto": "Calcula-se que cerca de 30% da Amazônia é composta por áreas úmidas (AUs). Divididas em diversas categorias (características, tempo de inundação, rios associados), as AUs que ocorrem ao longo dos grandes rios amazônicos são chamadas de áreas alagáveis. Estas áreas são sazonalmente ou periodicamente inundadas (sofre influência do pulso de inundação) quando o nível do rio sobe, decorrente do acúmulo\n[…]\nAs Floresta de várzea são banhadas por rios de água branca (barrenta), como por exemplo o rio Amazonas, Madeira e Purus. Possuem essa coloração devido à grande quantidade de material presente em suspensão. São rios com formação geológica recente (erosão dos Andes), e com solos ricos em nutrientes.\n[…]\nPáleo-várzeas\n[…]\n·         Apresentam fertilidade do solo e da água moderada.\n[…]\nAs florestas de várzea desempenham um papel crucial tanto na manutenção da biodiversidade, quanto na economia regional da Amazônia. Em termos ecológicos, essas florestas são conhecidas por sua elevada diversidade florística – podem abrigar até 140 espécies de árvores por hectare, superando as florestas de igapó, que normalmente apresentam menos de 100 espécies por hectare. Essa alta diversidade está relacionada à riqueza em nutrientes trazidos pelos rios de água branca que inundam essas áreas.\n[…]\nAs espécies de peixes que interagem com florestas de várzea podem sincronizar a sua reprodução com os períodos de enchentes dos rios, momento em que há maior disponibilidade de alimentos e abrigo em meio as florestas inundadas.\n[…]\nAlém disso, os sedimentos férteis e a água relativamente rica em sais minerais resultam em uma grande capacidade produtiva das várzeas, sendo estas utilizadas há mais de 12 mil anos pela população humana, no começo da colonização da Amazônia Central. As atividades econômicas realizadas por moradores de áreas de floresta de várzea são oriundas do extrativismo de recursos naturais.\n[…]\nAmazônia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Monção",
      "descricao": "Regime sazonal de ventos que inverte de direção e traz chuvas fortes ao sul da Ásia"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na Índia, a monção de verão, que traz as grandes chuvas, sopra de onde para onde?",
    "resposta": "Do oceano para o continente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monsoon_of_South_Asia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monsoon_of_South_Asia",
        "situacao": "ok",
        "texto": "The Monsoon of South Asia is among several geographically distributed global monsoons. It affects the Indian subcontinent, where it is one of the oldest and most anticipated weather phenomena, and an economically important pattern every year from June through September, but it is only partly understood and notoriously difficult to predict.\n[…]\nThe Intergovernmental Panel on Climate Change (IPCC) describes a monsoon as a tropical and subtropical seasonal reversal in both surface winds and associated precipitation, caused by differential heating between a continental-scale land mass and the adjacent ocean.\n[…]\nBecause of differences in the specific heat capacity of land and water, continents heat up faster than seas. Consequently, the air above coastal lands heats up faster than the air above seas. These create areas of low air pressure above coastal lands compared with pressure over the seas, causing winds to flow from the seas onto the neighboring lands. This is known as sea breeze.\n[…]\nAs the Tibetan Plateau heats up, the low pressure created over it pulls the westerly jet north. Because of the lofty Himalayas, the westerly jet's movement is inhibited. But with continuous dropping pressure, sufficient force is created for the movement of the westerly jet across the Himalayas after a significant period. As such, the shift of the jet is sudden and abrupt, causing the bursting of southwest monsoon rains onto the Indian plains. The reverse shift happens for the northeast monsoon.\n[…]\nAll of these factors have positive ripple effects throughout the economy of India.\n[…]\nMonsoon (photographs) of India, 1960\n[…]\nClimate of India (section Monsoon)\n[…]\nIndia Meteorological Department\n[…]\nDrought in India\n[…]\nMonsoon On-Line, an Indian Institute of Tropical Meteorology, Pune, India initiative"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Período Úmido Africano",
      "descricao": "Época pré-histórica em que o Saara foi coberto por savanas, rios e lagos, terminada há cerca de cinco mil anos"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Pinturas rupestres no Saara mostram girafas, hipopótamos e pescadores. Como era aquela paisagem há cerca de oito mil anos?",
    "resposta": "Verde, com lagos e savanas",
    "fonte": [
      "https://en.wikipedia.org/wiki/African_humid_period"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/African_humid_period",
        "situacao": "ok",
        "texto": "The African humid period (AHP; also known by other names) was a climate period in Africa during the late Pleistocene and Holocene geologic epochs, when North Africa was wetter than it is today. The covering of much of the Sahara by grasses, trees, and lakes was caused by changes in the Earth's axial tilt, changes in vegetation and dust in the Sahara which strengthened the African monsoon, and incr\n[…]\nThe humid period began about 15,000–14,500 BP. The onset of the humid period took place almost simultaneously over all of northern and central Africa, with impacts as far as Santo Antão on Cape Verde. Wet conditions apparently took about one to two millennia to advance northward in the Sahara and Arabia, respectively. The terrestrial system (e.g groundwater bodies) took time to respond to changed conditions.\n[…]\nThe cultural traditions at Lake Abhe appear to be unusual by AHP/African standards.\n[…]\nOn São Nicolau and Brava in the Cape Verde Islands, precipitation and erosion increased. In the Canary Islands, there is evidence of a moister climate on Fuerteventura, La Gomera and Tenerife, the laurel forests changed perhaps as a consequence of the AHP. Recharge of groundwater levels have been inferred from Gran Canaria also in the Canary Islands, followed by a decrease after the end of the AHP. Choughs may have reached the Canary Islands from North Africa when the latter was wetter.\n[…]\nFraedrich, Klaus F. (2013). Analysis of Multistability and Abrupt Transitions – Method Studies with a Global Atmosphere-Vegetation Model Simulating the End of the African Humid Period (PhD thesis). Hamburg University Hamburg. doi:10.17617/2.1602269.\n[…]\nReick, Christian (27 September 2017). Effects of Plant Diversity on Simulated Climate-Vegetation Interaction Towards the End of the African Humid Period (PhD thesis). Universität Hamburg Hamburg. doi:10.17617/2.2479574."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Per%C3%ADodo_%C3%BAmido_africano",
        "situacao": "ok",
        "texto": "O período úmido africano (PUA) foi um período climático na África durante os períodos geológicos do final do Pleistoceno e do Holoceno, quando o norte da África era mais úmido do que hoje. A cobertura de grande parte do deserto do Saara por gramíneas, árvores e lagos foi causada por mudanças na inclinação axial da Terra, alterações na vegetação e na poeira do Saara, que fortaleceram a monção afric\n[…]\nMais tarde, no século XX, evidências conclusivas de um Saara mais verde no passado, a existência de lagos e níveis de fluxo mais altos do Nilo foram cada vez mais relatados e reconheceu-se que o Holoceno apresentou um período úmido no Saara.\n[…]\nOutros lagos na África, como o lago Chade e o lago Tanganica, também encolheram durante esse período, e os rios Níger e Senegal estavam reduzidos.\n[…]\nO período úmido começou há cerca de 15.000–14.500 anos atrás. O início do período úmido ocorreu quase simultaneamente em todo o norte e na África tropical, com impactos até Santo Antão em Cabo Verde. As condições úmidas levaram cerca de um a dois milênios para avançar para o norte no Saara e na Arábia, respectivamente. O sistema terrestre (por exemplo, corpos de água subterrânea) levou tempo para responder às condições alteradas.\n[…]\nDurante o período úmido africano, lagos, rios, áreas úmidas e vegetação, incluindo gramíneas e árvores, cobriram o Saara e o Sahel, criando um \"Saara Verde\" com uma cobertura terrestre sem análogos modernos.\n[…]\nOs lagos secaram, a vegetação mésica desapareceu, e as populações humanas sedentárias foram substituídas por culturas mais móveis. A transição do \"Saara verde\" para o Saara árido atual é considerada a maior mudança ambiental do Holoceno no norte da África; hoje, praticamente não há precipitação na região. O fim do Período Úmido Africano, assim como seu início, pode ser considerado uma \"crise climática\" devido ao impacto forte e prolongado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Floresta temperada decídua",
      "descricao": "Floresta de clima temperado cujas árvores, como carvalhos e bordos, perdem as folhas no outono"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O que fazem todo outono as árvores das florestas temperadas da Europa e da América do Norte, como carvalhos e bordos?",
    "resposta": "Perdem as folhas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Temperate_deciduous_forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temperate_deciduous_forest",
        "situacao": "ok",
        "texto": "Temperate deciduous or temperate broadleaf forests are a variety of temperate forest mostly composed of deciduous trees that lose their leaves each winter. They represent one of Earth's major biomes, making up 9.69% of global land area. These forests are found in areas with distinct seasonal variation that cycle through warm, moist summers, cold winters, and moderate fall and spring seasons.\n[…]\n°S). Canada, the United States, China, and several European countries have the largest land area covered by temperate deciduous forests, with smaller portions present throughout South America, specifically Chile and Argentina.\n[…]\nSouthern beech (Nothofagus) trees are prevalent in the temperate deciduous forests of South America. Elm trees (Ulmus) and willows (Salix) can also be found dispersed throughout the temperate deciduous forests of the world. While a wide variety of tree species can be found throughout the temperate deciduous forest biome, tree species richness is typically moderate in each individual ecosystem, with only 3 to 4 tree species per square kilometer.\n[…]\nOther abiotic sources of disturbances to temperate deciduous forests include droughts, waterlogging, and fires. Natural surface fire patterns are especially important in pine reproduction. Biotic factors affecting forests take the form of fungal outbreaks in addition to mountain pine beetle and bark beetle infestations. These beetles are particularly prevalent in North America and kill trees by clogging their vascular tissue.\n[…]\nHumans rely on wood from temperate deciduous forests for use in the timber industry as well as paper and charcoal production. Logging practices emit high levels of carbon while also causing erosion because fewer tree roots are present to provide soil support. During the European colonization of North America, potash made from tree ashes was exported back to Europe as fertilizer."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Clima mediterrâneo",
      "descricao": "Clima de verões quentes e secos e invernos amenos e chuvosos, típico das margens do Mar Mediterrâneo"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Ao contrário do que acontece em boa parte do Brasil, em que estação do ano se concentram as chuvas no clima mediterrâneo?",
    "resposta": "Inverno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mediterranean_climate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mediterranean_climate",
        "situacao": "ok",
        "texto": "A Mediterranean climate ( MED-ih-tə-RAY-nee-ən), also called a dry summer climate, described by Köppen and Trewartha as Cs, is a temperate climate type that occurs in the lower mid-latitudes (normally 30 to 45 north and south latitude). Such climates typically have dry summers and wet winters, with summer conditions being hot and winter conditions typically being mild.\n[…]\nSome Spanish authors opt to use the term 'continental Mediterranean climate' (Clima Mediterráneo Continentalizado) for some regions with lower temperatures in winter than the coastal areas, but Köppen's Cs zones show no distinction as long as winter temperature means stay above freezing.\n[…]\nCool ocean currents, upwelling and higher latitudes are often the reason for this cooler type of Mediterranean climate.\n[…]\nThe cold-summer subtype of the Mediterranean climate (Csc) is rare and predominantly found at scattered high-elevation locations along the west coasts of North and South America having a similar climate. This type is characterized by cool, dry summers, with less than four months with a mean temperature at or above 10 °C (50 °F), as well as with cool, wet winters, with no winter month having a mean temperature below 0 °C (32 °F) (or −3 °C [27 °F], depending on the isotherm used).\n[…]\nIn North America, areas with Csc climate can be found in the Olympic, Cascade, Klamath, and Sierra Nevada ranges in Washington, Oregon and California. These locations are found at high elevation nearby lower elevation regions characterized by a warm-summer Mediterranean climate (Csb) or hot-summer Mediterranean climate (Csa). A rare instance of this climate occurs in the tropics, on Haleakalā Summit in Hawaii.\n[…]\nSmall areas with a Csc climate can be found at high elevations in Corsica.\n[…]\nMedia related to Mediterranean climate at Wikimedia Commons\n[…]\nExplanation of Mediterranean Climate (University of Wisconsin)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clima_mediterr%C3%A2nico",
        "situacao": "ok",
        "texto": "O clima mediterrânico ou clima de verão seco é um tipo de clima caracterizado por invernos chuvosos e verões secos. O nome desse tipo climático é oriundo da Bacia do Mediterrâneo.\n[…]\nNo inverno, as zonas climáticas mediterrânicas não são mais influenciadas pelas correntes oceânicas, portanto, a água mais quente se estabelece perto da terra e faz com que nuvens se formem e a chuva se torne muito mais provável. Como resultado, as áreas com este clima recebem quase toda a sua precipitação durante as estações de inverno e primavera, e podem ir de 3 a 6 meses durante o verão sem ter nenhuma precipitação significativa.\n[…]\nComo dito anteriormente, regiões com este subtipo de clima mediterrânico experimentam verões mornos (mas não quentes) e secos, sem temperaturas médias mensais acima de 22 °C durante seu mês mais quente e uma média no mês mais frio entre 18 e −3 °C ou, em algumas aplicações, entre 18 e 0 °C. Além disso, pelo menos quatro meses devem ter uma média de temperatura superior a 10 °C. Os invernos são chuvosos e podem ser de amenos a frios. Em alguns casos, a neve pode cair nessas áreas.\n[…]\nO subtipo clima mediterrânico de verão frio (Csc) é raro e predominantemente encontrado em locais dispersos de alta altitude ao longo das costas ocidentais da América do Norte e da América do Sul. Este tipo é caracterizado por verões frescos, com menos de quatro meses com uma temperatura média igual ou superior a 10 °C, assim como com invernos suaves, sem um mês de inverno com temperatura média inferior a 0 °C ou −3 °C (dependendo da isoterma utilizada).\n[…]\nExplanation of Mediterranean Climate (University of Wisconsin)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Floresta nublada",
      "descricao": "Floresta de montanhas tropicais envolta quase sempre por nuvens e neblina"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nas florestas nubladas das montanhas tropicais, as árvores captam boa parte da água que recebem diretamente de onde?",
    "resposta": "Da neblina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cloud_forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cloud_forest",
        "situacao": "ok",
        "texto": "A cloud forest, also called a water forest, primas forest, or tropical montane cloud forest, is a generally tropical or subtropical, evergreen, montane, moist forest characterized by a persistent, frequent or seasonal low-level cloud cover, usually at the canopy level, formally described in the International Cloud Atlas (2017) as silvagenitus. Cloud forests often exhibit an abundance of mosses cov\n[…]\nTropical montane cloud forests are not as species-rich as tropical lowland forests in terms of overall woody plant diversity, but they provide habitat for many species found nowhere else on Earth; for example, Cerro de la Neblina, a permanently cloud-covered massif in southern Venezuela, supports numerous shrubs, orchids, and insectivorous plants entirely restricted to that single mountain.\n[…]\nFoster, Pru (2001). \"The potential negative impacts of global climate change on tropical montane cloud forests\". Earth-Science Reviews. 55 (1–2): 73–106. Bibcode:2001ESRv...55...73F. doi:10.1016/S0012-8252(01)00056-3.\n[…]\nHamilton, Lawrence S; Juvik, James O; Scatena, F. N (1995). \"The Puerto Rico Tropical Cloud Forest Symposium: Introduction and Workshop Synthesis\". In Hamilton, Lawrence S.; Juvik, James O.; Scatena, F. N. (eds.). Tropical Montane Cloud Forests. Ecological Studies. Vol. 110. pp. 1–18. doi:10.1007/978-1-4612-2500-3_1. ISBN 978-1-4612-7564-0.\n[…]\nLai, Guan-Yu; Liu, Hung-Chi; Kuo, Ariel J.; Huang, Cho-Ying (2020). \"Epiphytic bryophyte biomass estimation on tree trunks and upscaling in tropical montane cloud forests\". PeerJ. 8 e9351. Bibcode:2020PeerJ...8e9351L. doi:10.7717/peerj.9351. PMC 7295022. PMID 32566412.\n[…]\nTropical Montane Cloud Forest Initiative Archived 5 April 2008 at the Wayback Machine\n[…]\nCloud Forests United\n[…]\nHydrology of tropical cloud forests project\n[…]\nTropical Montane Cloud Forests – Science for Conservation and Management (L.A. Bruijnzeel, F.N. Scatena and L.S. Hamilton, 2011)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Floresta_nublada",
        "situacao": "ok",
        "texto": "Uma floresta nublada, floresta nuvígena, floresta nebulosa, floresta das nuvens, floresta do nevoeiro, floresta de altitude ou floresta ombrófila densa altomontana é, de forma geral, um tipo de floresta úmida perene de altitude, tropical a subtropical, caracterizada pela ocorrência de uma muito frequente cobertura nublada baixa, ao nível da copa das árvores.\n[…]\nMuita da precipitação que alimenta uma floresta nublada provém do nevoeiro, quando as pequenas gotículas que o compõem são capturadas pela vegetação e posteriormente pingam no solo da floresta (fenómeno conhecido por precipitação oculta).\n[…]\nA definição de floresta nublada é ambígua, e em muitos locais o termo não é utilizado, sendo substituído por outros como Afromontana ou floresta das chuvas de montanha, ou ainda, por termos locais como as yungas do Peru ou a laurissilva das ilhas atlânticas da Macaronésia. Florestas em climas temperados em que estas condições meteorológicas ocorram também podem ser consideradas como florestas nubladas.\n[…]\nFlorestas nubladas tropicais e subtropicais ocorrem nos seguintes países:\n[…]\nApesar de não serem universalmente aceites como verdadeiras florestas nubladas, várias florestas de regiões temperadas possuem fortes semelhanças com as suas homólogas tropicais. O termo torna-se ainda mais confuso devido à ocasional referência às florestas nubladas de países tropicais como \"temperadas\", devido ao clima mais fresco associado a esta vegetação.\n[…]\nFlorestas nubladas na página do Programa Ambiental das Nações Unidas\n[…]\nFloresta nublada de Monteverde, Costa Rica\n[…]\nIniciativa da Floresta nublada tropical\n[…]\nNational Geographic (2001), \"Cloud Forests Fading in the Mist, Their Treasures Little Known\"\n[…]\nAn Ecological Reserve in the Cloud Forest of Mindo Ecuador\n[…]\nProjecto de hidrologia tropical e florestas nubladas\n[…]\nProjecto de Hidrologias das florestas nubladas tropicais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "El Niño",
      "descricao": "Fenômeno de aquecimento anormal das águas do Oceano Pacífico equatorial"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Enquanto costuma trazer seca ao Norte e ao Nordeste, o El Niño provoca excesso de chuva em que região do Brasil?",
    "resposta": "Sul",
    "fonte": [
      "https://pt.wikipedia.org/wiki/El_Ni%C3%B1o"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/El_Ni%C3%B1o",
        "situacao": "ok",
        "texto": "O El Niño é uma das duas fases do El Niño-Oscilação do Sul (ENOS), sendo o seu \"oposto\" o La Niña. É um fenômeno climático global que surge de variações nos ventos e nas temperaturas da superfície do mar sobre o Oceano Pacífico tropical. Essas variações têm um padrão irregular, com alguma semelhança com ciclos, mas não sendo previsíveis a longo prazo.\n[…]\nDurante o El Niño, à medida que as temperaturas da superfície do mar mudam, a Circulação de Walker também muda. O aquecimento no Pacífico tropical oriental enfraquece ou reverte o ramo descendente, enquanto as condições mais frias no oeste levam a menos chuva e ar descendente, de modo que a Circulação de Walker enfraquece primeiro e pode reverter.\n[…]\nA topografia da superfície do mar muda para cima ou para baixo em vários centímetros na região equatorial do Pacífico: El Niño causa uma anomalia positiva (elevação do nível do mar) devido à expansão térmica, enquanto La Niña causa uma anomalia negativa (redução do nível do mar) por meio da contração.\n[…]\nEste aquecimento provoca uma alteração na circulação atmosférica, levando a uma maior pressão atmosférica no Pacífico ocidental e a uma menor pressão atmosférica no Pacífico oriental, com a precipitação a diminuir na Indonésia, Índia e norte da Austrália, enquanto a precipitação e a formação de ciclones tropicais aumentam no Oceano Pacífico tropical.\n[…]\nNa bacia do Pacífico Oriental: os eventos El Niño contribuem para a diminuição do cisalhamento vertical do vento de leste e favorecem a atividade de furacões acima do normal. No entanto, os impactos do estado ENOS nesta região podem variar e são fortemente influenciados pelos padrões climáticos de fundo.\n[…]\nEm florestas tropicais sazonalmente secas, que são mais tolerantes à falta de chuvas, os pesquisadores descobriram que a seca induzida pelo El Niño aumentou a mortalidade de mudas.\n[…]\nNOAA El Niño"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ilha de calor",
      "descricao": "Fenômeno em que áreas urbanas ficam mais quentes que o campo ao redor"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que materiais, que absorvem e guardam o calor do sol, ajudam a deixar o centro das grandes cidades mais quente que o campo ao redor?",
    "resposta": "Asfalto e concreto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Urban_heat_island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Urban_heat_island",
        "situacao": "ok",
        "texto": "The urban heat island (UHI) effect is a meteorological and climatological phenomenon in which urban areas experience significantly warmer temperatures than surrounding rural areas. The temperature difference is usually larger at night than during the day, and is most apparent when winds are weak, under block conditions, noticeably during the summer and winter.\n[…]\nFor example, dark surfaces absorb significantly more solar radiation, which causes urban concentrations of roads and buildings to heat more than suburban and rural areas during the day; materials commonly used in urban areas for pavement and roofs, such as concrete and asphalt, have significantly different thermal bulk properties (including heat capacity and thermal conductivity) and surface radiative properties (albedo and emissivity) than the surrounding rural areas.\n[…]\nSeveral cities in India experience significant urban heat island effects due to rapid urbanization, loss of green cover, and extensive concretization. A report by The Hindu highlights that metropolitan areas like Delhi, Bengaluru, Chennai, Jaipur, Ahmedabad, Mumbai, and Kolkata have seen temperature differences ranging from 1 °C to 6 °C compared to their rural surroundings.\n[…]\nMumbai, India's financial hub and one of the most densely populated cities globally, is significantly affected by the urban heat island effect. Rapid urbanization, extensive concretization, and loss of green spaces have led to higher temperatures in the city compared to its surroundings. According to a report, Mumbai is projected to spend twice as much as New York City to manage urban heat generated due to concretization.\n[…]\nThis increased expenditure highlights the severity of the urban heat island effect in Mumbai and its impact on the city's infrastructure and residents.\n[…]\nUrban Heat Islands – introductory video by Science Museum of Virginia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_de_calor",
        "situacao": "ok",
        "texto": "Áreas urbanas geralmente sofrem o efeito da ilha de calor (IC), ou seja, são significativamente mais quentes do que as áreas rurais vizinhas. A diferença de temperatura é geralmente maior à noite do que durante o dia, e é mais aparente quando os ventos são fracos, em condições de bloqueio, notavelmente durante o verão e o inverno. A principal causa do efeito IC é a modificação das superfícies terr\n[…]\nPor exemplo, as superfícies escuras absorvem significativamente mais radiação solar, o que faz com que as concentrações urbanas de estradas e edifícios aqueçam mais do que as áreas suburbanas e rurais durante o dia; os materiais comumente usados em áreas urbanas para pavimentação e telhados, como concreto e asfalto, têm propriedades térmicas em massa (incluindo capacidade de calor e condutividade térmica) e propriedades radiativas de superfície (albedo e emissividade) significativamente diferentes das áreas rurais circundantes.\n[…]\nAlgumas cidades apresentam um aumento total de precipitação de 51%.\n[…]\nEm relação à solução de outras causas do problema, a substituição de telhados escuros exige o menor investimento para o retorno mais imediato. Um telhado frio feito de um material refletivo, como vinil, reflete pelo menos 75% dos raios solares e emite pelo menos 70% da radiação solar absorvida pelo envoltório do edifício. Em comparação, os telhados construídos com asfalto (BUR) refletem entre 6% e 26% da radiação solar.\n[…]\nO uso de concreto de cor clara demonstrou ser eficaz na reflexão de até 50% mais luz do que o asfalto e na redução da temperatura ambiente. Um baixo valor de albedo, característico do asfalto preto, absorve uma grande porcentagem do calor solar, criando temperaturas mais altas perto da superfície. A pavimentação com concreto de cor clara, além da substituição do asfalto por concreto de cor clara, pode permitir que as comunidades reduzam as temperaturas médias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Grande Seca de 1877",
      "descricao": "Seca de 1877 a 1879 que devastou o sertão nordestino, sobretudo o Ceará"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Fugindo da Grande Seca de 1877, milhares de cearenses migraram para que região do Brasil, atraídos pela extração da borracha?",
    "resposta": "Amazônia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ciclo_da_borracha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ciclo_da_borracha",
        "situacao": "ok",
        "texto": "O ciclo da borracha foi um período de expansão econômica e reconfiguração territorial ocorrido principalmente na Amazônia brasileira entre 1879 e 1912, com uma retomada conjuntural entre 1942 e 1945 durante a Segunda Guerra Mundial.\n[…]\nBaseado na extração do látex da seringueira e inserido na dinâmica do capitalismo industrial internacional, o ciclo integrou a região amazônica ao mercado mundial como principal fornecedora de borracha natural, insumo estratégico para as indústrias europeias e norte-americanas.\n[…]\nDurante a Segunda Guerra Mundial, a ocupação japonesa da Malásia interrompeu o fornecimento asiático, levando o Brasil a firmar os Acordos de Washington com os Estados Unidos e promover a chamada Batalha da Borracha, mobilizando milhares de trabalhadores para a Amazônia. Embora tenha representado nova expansão produtiva, essa fase não alterou estruturalmente a vulnerabilidade econômica regional.\n[…]\nA expansão produtiva coincidiu com grandes secas no Nordeste brasileiro, especialmente nas décadas de 1870 e 1880, provocando fluxos migratórios em direção à Amazônia. Estima-se que dezenas de milhares de trabalhadores nordestinos tenham sido incorporados à economia extrativista nesse período.\n[…]\nA mobilização ficou conhecida como Batalha da Borracha. O governo brasileiro, sob Getúlio Vargas, criou órgãos como o Serviço Especial de Mobilização de Trabalhadores para a Amazônia (SEMTA) para recrutar trabalhadores, sobretudo no Nordeste, região atingida por secas recorrentes. Estima-se que mais de 50 mil migrantes tenham sido enviados à Amazônia durante o período.\n[…]\nDaou, Ana Maria (2000). A Belle Époque amazônica. Rio de Janeiro: Jorge Zahar\n[…]\nAmazônia: do ciclo da borracha à cultura do empreendedorismo\n[…]\nBatalha da borracha"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Lençóis Maranhenses",
      "descricao": "Parque nacional do litoral do Maranhão formado por dunas de areia branca entremeadas de lagoas"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "De onde vem a água das lagoas azuis e verdes que se formam entre as dunas dos Lençóis Maranhenses?",
    "resposta": "Da chuva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Len%C3%A7%C3%B3is_Maranhenses_National_Park",
        "situacao": "ok",
        "texto": "Lençóis Maranhenses National Park (, Parque Nacional dos Lençóis Maranhenses) is a national park in Maranhão state in northeastern Brazil, just east of the Baía de São José. Protected on June 2, 1981, the 155,000 ha (380,000-acre) park includes 70 km (43 mi) of coastline, and an interior composed of rolling sand dunes. During the rainy season, the valleys among the dunes fill with freshwater lagoo\n[…]\nThe park is located on the northeastern coast of Brazil in the state of Maranhão along the eastern coast, bordered by 70 kilometres (43 mi) of beaches along the Atlantic Ocean. Inland, it is bordered by the Parnaíba River, the São José Basin, and the rivers of Itapecuru, Munim, and Periá. The park encompasses an area of 155,000 hectares (380,000 acres), composed mainly of expansive coastal dune fields (composed of barchanoid dunes), which formed during the late Quaternary period.\n[…]\nLençóis Maranhenses National Park receives as many as 60,000 visitors a year. Common activities within the park include surfing, canoeing and horse riding.\n[…]\nFormer Lençóis Maranhenses National Park's Official site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses",
        "situacao": "ok",
        "texto": "O Parque Nacional dos Lençóis Maranhenses é uma unidade de conservação brasileira de proteção integral à natureza localizada na região nordeste do estado do Maranhão. O território do parque, com uma área de 156 584 ha, está distribuído pelos municípios de Barreirinhas, Primeira Cruz e Santo Amaro do Maranhão. O parque foi criado com a finalidade precípua de \"proteger a flora, a fauna e as belezas \n[…]\nO parque localiza-se na Microrregião dos Lençóis Maranhenses, ao norte do Brasil, no litoral nordeste do estado do Maranhão. Com um perímetro de 270 km e 156 584 ha de área, o parque está inserido no bioma costeiro marinho, com ecossistemas de mangue, restinga e dunas. Lençóis Maranhenses abriga em seu interior aproximadamente 90 000 ha de dunas livres e lagoas interdunares de água doce, além de grandes áreas de restinga e de costa oceânica.\n[…]\nAs lagoas do parque estão muitas vezes interligadas umas às outras, assim como os rios que correm pela área. Eles abrigam uma série de espécies de peixes e insetos, incluindo o traíra, que se esconde em camadas molhadas de lama e permanece adormecido durante a estação seca. Além das dunas que formam a peça central do parque, o ecossistema também inclui área de cerrado, restinga e manguezal.\n[…]\nNa área do Parque Nacional e na APA dos Pequenos Lençóis Maranhenses abriga espécie endêmica a tartaruga-pininga (Trachemys adiutrix).\n[…]\nO Parque Nacional dos Lençóis Maranhenses recebe mais de cem mil visitantes por ano, tendo alcançado o número de 280 878 visitas em 2021, e cerac de 408 mil turistas em 2023, segundo o Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Atividades comuns dentro do parque incluem surfe, canoagem e passeios a cavalo.\n[…]\nParques nacionais do Brasil\n[…]\nParque dos Lençóis, Secretaria de Turismo do Maranhão.\n[…]\nParque Nacional dos Lençóis Maranhenses na UNESCO"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Estações do ano",
      "descricao": "Divisões do ano em primavera, verão, outono e inverno, marcadas por mudanças no clima"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Muita gente pensa que é a distância até o Sol, mas o que realmente causa as estações do ano?",
    "resposta": "A inclinação do eixo da Terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Season"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Season",
        "situacao": "ok",
        "texto": "A season is a division of the year based on changes in weather, ecology, and the number of daylight hours in a given region. On Earth, seasons are the result of the axial parallelism of Earth's tilted orbit around the Sun. In temperate and polar regions, the seasons are marked by changes in the intensity of sunlight that reaches the Earth's surface, variations of which may cause animals to undergo\n[…]\nCompared to axial parallelism and axial tilt, other factors contribute little to seasonal temperature changes. The seasons are not the result of the variation in Earth's distance to the Sun because of its elliptical orbit.\n[…]\nIn the temperate and polar regions, seasons are marked by changes in the amount of sunlight, which in turn often causes cycles of dormancy in plants and hibernation in animals. These effects vary with latitude and with proximity to bodies of water. For example, the South Pole is in the middle of the continent of Antarctica and therefore a considerable distance from the moderating influence of the southern oceans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esta%C3%A7%C3%A3o_do_ano",
        "situacao": "ok",
        "texto": "As estações, ou sazões, são divisões do ano baseadas em padrões do clima. No mundo ocidental, elas são tradicionalmente quatro: primavera, verão, outono e inverno.\n[…]\nPosteriormente, para ajustar as estações à posição exata dos equinócios e solstícios, correlacionados com a influência da translação associada à mudança no eixo de inclinação da Terra, convencionou-se, no Ocidente, dividir o ano em somente quatro estações. Vale a pena lembrar que certas culturas ainda dividem o ano em cinco estações, como a China. Países como a Índia dividem o ano em apenas três estações: uma estação quente, uma estação fria e uma estação chuvosa.\n[…]\nO eixo de rotação da Terra é a linha imaginaria que une o pólo Norte ao pólo Sul e sua inclinação faz com que, em certas épocas do ano, um hemisfério receba a luz do Sol mais diretamente que o outro hemisfério. Isto é a principal causa das estações do ano: primavera, verão, outono e inverno.\n[…]\nAs estações resultam do eixo de rotação da Terra ser inclinado em relação ao plano orbital (aproximadamente 23,5 graus). Assim, em qualquer momento, uma parte do planeta estará mais diretamente exposta aos raios do Sol do que outra. Esta exposição alterna conforme a Terra gira em sua órbita, portanto, a qualquer momento, independentemente da época, os hemisférios norte e sul experimentam estações opostas.\n[…]\n- A inclinação do eixo da Terra.\n[…]\nAs estações do ano acontecem por causa da inclinação do eixo de rotação da Terra em relação ao Sol. O movimento do planeta Terra em torno do Sol dura um ano, e recebe o nome de translação; sua principal consequência é a mudança de estações do ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Minuano",
      "descricao": "Vento frio e seco de sudoeste que sopra no Rio Grande do Sul no inverno"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O minuano, vento frio e seco que sopra no Rio Grande do Sul no inverno, tem o nome de quê?",
    "resposta": "De um povo indígena",
    "distratores": [
      "De um santo",
      "De um rio",
      "De uma serra"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Minuano_(vento)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Minuano_(vento)",
        "situacao": "ok",
        "texto": "O Vento Minuano ou simplesmente Minuano é um vento frio e seco, por vezes forte, típico no Rio Grande do Sul durante o inverno. Sopra de sul e atinge também áreas do Uruguai, Paraguai e Argentina, podendo chegar à Santa Catarina, Paraná e sul do Mato Grosso do Sul.\n[…]\nO nome vem dos povos indígenas Minuanos, que habitavam a região da Campanha gaúcha. \"Em tupi-guarani [Minuano] significa \"vento do Sul\", segundo o portal g1.\n[…]\nOrigem: é um vento frio de origem polar (massa de ar polar atlântica), também classificado como \"cortante\". Ocorre após a passagem das frentes frias de outono e inverno, geralmente depois das chuvas, trazendo dias ensolarados, secos, porém muito frios.\n[…]\nDireção: sopra do quadrante sul, geralmente de sudeste [há relatos de que sopre de sudoeste].\n[…]\nEfeitos: é um dos principais responsáveis pelas ondas de frio na Região Sul do Brasil no inverno e, às vezes, no outono e primavera.\n[…]\nTemperatura: é um vento frio que pode derrubar a sensação térmica em mais de 10°C em poucas horas.\n[…]\nUmidade: é um vento seco, que reduz bastante a umidade relativa do ar.\n[…]\nNa agricultura: o vento seco favorece a colheita de grãos por reduzir a umidade, mas pode prejudicar lavouras sensíveis à geada, comum durante sua atuação.\n[…]\nÉ muito citado em músicas, poemas e na literatura regionalista. A expressão \"chegou o Minuano\" é usada para anunciar a chegada do frio intenso.\n[…]\nO Minuano é diferente do Pampero, que vem do sudoeste e é mais úmido por passar pelo Rio da Prata - em algumas regiões do Uruguai e Argentina o vento é chamado de \"Viento Pampero\", mas no Brasil o termo Minuano ficou consagrado para o vento frio e seco de origem polar.\n[…]\nTambém se distingue do Vento Norte, que é quente e úmido e antecede a chegada de frentes frias ao Cone Sul."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Clima",
      "descricao": "Conjunto das condições atmosféricas típicas de uma região ao longo de muitos anos"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra clima vem de um termo grego antigo. O que esse termo significava?",
    "resposta": "Inclinação",
    "distratores": [
      "Temperatura",
      "Estação",
      "Céu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Climate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Climate",
        "situacao": "ok",
        "texto": "Climate is the long-term weather pattern in a region, typically averaged over 30 years. More rigorously, it is the mean and variability of meteorological variables over a time spanning from months to millions of years. Some of the meteorological variables that are commonly measured are temperature, humidity, atmospheric pressure, wind, and precipitation.\n[…]\nClimate (from Ancient Greek  κλίμα 'inclination') is commonly defined as the weather averaged over a long period. The standard averaging period is 30 years, but other periods may be used depending on the purpose. Climate also includes statistics other than the average, such as the magnitudes of day-to-day or year-to-year variations. The Intergovernmental Panel on Climate Change (IPCC) 2001 glossary definition is as follows:\n[…]\nIn some cases, current, historical and paleoclimatological natural oscillations may be masked by significant volcanic eruptions, impact events, irregularities in climate proxy data, positive feedback processes or anthropogenic emissions of substances such as greenhouse gases.\n[…]\nClimate models are available on different resolutions ranging from >100 km to 1 km. High resolutions in global climate models require significant computational resources, and so only a few global datasets exist. Global climate models can be dynamically or statistically downscaled to regional climate models to analyze impacts of climate change on a local scale. Examples are ICON or mechanistically downscaled data such as CHELSA (Climatologies at high resolution for the earth's land surface areas).\n[…]\nClimate: Data and charts for world and US locations\n[…]\nGlobalclimatemonitor – Contains climatic information from 1901.\n[…]\nClimateCharts – Webapplication to generate climate charts for recent and historical data.\n[…]\nParis Climate Conference\n[…]\nClimate of countries, alphabetically, Geographic.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Clima",
        "situacao": "ok",
        "texto": "O clima (do grego para \"inclinação\", referindo ao ângulo formado pelo eixo de Rotação da Terra e seu plano de translação) compreende um padrão da atmosfera da Terra.\n[…]\nUm dos primeiros estudos sobre o clima, proposto por Wladimir Köppen em 1900, fundamentava-se no sentido de clima como fator da dimensão geográfica. Nessa classificação considerava-se a vegetação predominante como uma manifestação das características do solo e do clima da região, permitindo reunir várias regiões do mundo através de semelhanças de sua vegetação, sendo conhecida como \"classificação climática de Köppen-Geiger\".\n[…]\nEm 1931 Charles Warren Thornthwaite introduziu uma nova classificação e em 1948 amplia os estudos através do balanço de água como um fator do clima, que futuramente daria origem à \"classificação do clima de Thornthwaite\". Emmanuel de Martonne destacou-se no estudo da geomorfologia climática. Seu estudo sobre problemas morfológicos do Brasil tropical-atlântico foi um dos primeiros trabalhos de geomorfologia climática, sendo conhecida a \"classificação do clima de Martonne\".\n[…]\nDesta forma, a ciência climática, é um campo interdisciplinar que estuda o clima e suas mudanças ao longo do tempo, abrangendo desde processos atmosféricos até interações com sistemas terrestres e humanos.\n[…]\nEla evoluiu significativamente no século XX, passando de uma abordagem geográfica e descritiva, focada em escalas locais e humanas (como a climatologia clássica de Humboldt, Hann e Köppen), para uma ciência física e global, baseada em modelos matemáticos, simulações computacionais e observações de larga escala.\n[…]\nClima urbano\n[…]\nSistema climático\n[…]\n«Climate1 - Global Climate Data Atlas» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Tornado",
      "descricao": "Coluna de ar em rotação violenta que se estende de uma nuvem de tempestade até o solo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra tornado vem do espanhol tronada, influenciada pelo verbo tornar. O que significa tronada?",
    "resposta": "Trovoada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tornado"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tornado",
        "situacao": "ok",
        "texto": "A tornado, also known as a twister, is a rapidly rotating column of air that extends vertically from the surface of the Earth to the base of a cumulonimbus or cumulus cloud. Tornadoes are often (but not always) visible in the form of a condensation funnel originating from the cloud base, with a cloud of rotating debris and dust close to the ground.\n[…]\nThe word tornado comes from the Spanish tronada (meaning 'thunderstorm', past participle of tronar 'to thunder', itself in turn from the Latin tonāre 'to thunder'). The metathesis of the r and o in the English spelling was influenced by the Spanish tornado (past participle of tornar 'to twist, turn', from Latin tornō 'to turn').\n[…]\nA few significant tornadoes occur annually in Europe, Asia, southern Africa, and southeastern South America.\n[…]\nFirst, a funnel cloud dips which in nearly all cases develops a surface swirl by the time it reaches halfway down to the ground, signifying that a tornado is on the ground before condensation connects the surface circulation to the storm. Tornadoes may also develop without wall clouds, under flanking lines and on the leading edge. Spotters watch all areas of a storm, and the cloud base and surface.\n[…]\nFolklore often identifies a green sky with tornadoes, and though the phenomenon may be associated with severe weather, there is no evidence linking it specifically with tornadoes. It is often thought that opening windows will lessen the damage caused by the tornado. While there is a large drop in atmospheric pressure inside a strong tornado, the pressure difference is unlikely to cause significant damage. Opening windows may instead increase the severity of the tornado's damage.\n[…]\nGrazulis, Thomas P. (January 1997). Significant Tornadoes Update, 1992–1995. St. Johnsbury, VT: Environmental Films. ISBN 1-879362-04-X.\n[…]\nNOAA Tornado Preparedness Guide"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tornado",
        "situacao": "ok",
        "texto": "Um tornado, também chamado de twister em inglês, é uma coluna de ar em rápida rotação que se estende verticalmente da superfície da Terra até a base de uma nuvem cumulonimbus ou cumulus. Os tornados costumam ser visíveis como um funil de condensação que parte da base da nuvem, acompanhado por uma nuvem de detritos e poeira em rotação junto ao solo, embora nem sempre tenham essa aparência.\n[…]\nA palavra inglesa tornado vem do espanhol tronada, que significa \"trovoada\" e deriva de tronar, \"trovejar\", por sua vez originado no latim tonāre, com o mesmo sentido. A metátese de \"r\" e \"o\" na grafia inglesa ocorreu por interferência do espanhol tornado, particípio de tornar, \"torcer, girar\", do latim tornō, \"girar\".\n[…]\nOs tornados normalmente giram em sentido ciclônico, anti-horário no Hemisfério Norte e horário no Hemisfério Sul, quando vistos de cima. As tempestades de grande escala sempre giram em sentido ciclônico por causa da força de Coriolis, mas as trovoadas e os tornados são pequenos demais para que seu efeito direto seja relevante, como mostram seus altos números de Rossby. Nas simulações numéricas, supercélulas e tornados giram em sentido ciclônico mesmo quando o efeito de Coriolis é desprezado.\n[…]\nUm tornado frequentemente surge nesse momento ou pouco depois. Primeiro, uma nuvem funil desce. Em quase todos os casos, já há um redemoinho na superfície quando ela chega à metade da distância até o solo, o que significa que o tornado já está em contato com o chão antes que a condensação una a circulação da superfície à tempestade. Tornados também podem se desenvolver sem nuvens parede, sob linhas de nuvens no flanco e na borda dianteira da tempestade.\n[…]\nGrazulis, Thomas P. (janeiro de 1997). Significant Tornadoes Update, 1992–1995 (em inglês). St. Johnsbury, Vermont: Environmental Films. ISBN 1-879362-04-X\n[…]\nTornado History Project, mapas e estatísticas desde 1950",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Simum",
      "descricao": "Vento quente, seco e carregado de areia que sopra no Saara e na Península Arábica"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O simum, vento quente e seco que varre o Saara e a Arábia, tem um nome árabe que significa o quê?",
    "resposta": "Veneno",
    "distratores": [
      "Fogo",
      "Sede",
      "Areia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Simoom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Simoom",
        "situacao": "ok",
        "texto": "Simoom or Saimum (Arabic: سموم samūm; from the root س م م s-m-m, سم \"to poison\") is a strong, hot, dry, dust-laden wind. The word is generally used to describe a local wind that blows in the Sahara, Jordan, Iraq, Syria, and the deserts of Arabian Peninsula. Its temperature may exceed 54 °C (129 °F) and the relative humidity may fall below 10%.\n[…]\nA 19th-century account of simoom in Egypt reads:\n[…]\nIn Bram Stoker's novel Dracula (1897), Lucy, describing the appearance of Dracula in her room, writes in her journal entry on September 17 that \"a whole myriad of little specks seemed to come blowing in through the broken window, and wheeling and circling round like the pillar of dust that travellers describe when there is a simoom in the desert.\"\n[…]\nIn James Joyce's novel A Portrait of the Artist as a Young Man (1914), there is a reference to \"Stephen's heart [withering] up like a flower of the desert that feels the simoom coming from afar.\"\n[…]\nIn Sinclair Lewis' novel Main Street (1920), there is a reference to \"Aunt Bessie's simoom of questioning.\"\n[…]\nIn Patrick O'Brian's novel Post Captain (1972), Diana Villiers' mentally troubled cousin, Edward Lowndes, upon learning that Doctor Maturin is a naval surgeon, remarks, \"Very good – you are upon the sea but not in it: you are not an advocate for cold baths. The sea, the sea! Where should we be without it? Frizzled to a mere toast, sir; parched, desiccated by the simoom, the dread simoom.\"\n[…]\nA song titled \"Simoon\" features on the Yellow Magic Orchestra's eponymously titled album that was released in 1978. The Creatures have a song called \"Simoom\" on their 1989 album Boomerang, with lyrics such as \"Simoom, simoom... you breathe in suffocation / Relentless simoom, blow and whistle this tune\".\n[…]\nDunning, Brian (July 22, 2014). \"Skeptoid #424: The Santa Barbara Simoom of 1859\". Skeptoid."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Simum",
        "situacao": "ok",
        "texto": "Simum ou samiel é um vento quente (com temperaturas que podem exceder os 54 graus Celsius), com níveis de humidade tendencialmente abaixo dos 10%, forte e perigoso, que sopra no centro de África, na Península Arábica e nos desertos do Médio Oriente, geralmente com orientação de Sul para Norte.\n[…]\nNa tradição oral da Arábia, este vento só faz sentir a sua devastação acima de 4 pés do chão, pelo que a forma de se escamotear aos seus efeitos lesivos passa por deitar-se junto ao chão.\n[…]\nNo deserto do Saara, por exemplo, o simum é capaz de provocar grandes tempestades de areia.\n[…]\nO substantivo «simum» entra no português por via do pelo francês simountermo que, por seu turno, advém do árabe sámúm (\"vento abrasador; pestilência\").\n[…]\nQuanto ao substantivo «samiel», chega ao português por via do substantivo turco samyeli, que por seu turno resulta da junção do étimo árabe sāmm ( سامّ ), que significa «venenoso; letal», aglutinado ao sufixo turco -yel, que significa «vento».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Floresta Negra",
      "descricao": "Região montanhosa e florestada do sudoeste da Alemanha"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Floresta Negra, no sudoeste da Alemanha, deve seu nome a quê?",
    "resposta": "À mata fechada e escura de coníferas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Forest",
        "situacao": "ok",
        "texto": "The Black Forest (German: Schwarzwald [ˈʃvaʁtsvalt] ) is a large forested mountain range in the state of Baden-Württemberg in southwest Germany, bounded by the Rhine Valley to the west and south and close to the borders with France and Switzerland. It is the source of the Danube and Neckar rivers.\n[…]\nGeologically the clearest division is also between east and west. Large areas of the eastern Black Forest, the lowest layer of the South German Scarplands composed of Bunter Sandstone, are covered by seemingly endless coniferous forest with their island clearings. The exposed basement in the west, predominantly made up of metamorphic rocks and granites, was, despite its rugged topography, easier to settle and appears much more open and inviting today with its varied meadow valleys.\n[…]\nIn addition, regular courses and local tournaments are held and it is a permanent feature of Alemannic Week, held annually in the Black Forest at the end of September.\n[…]\nSince January 2006, the Black Forest Tourist organisation, Schwarzwald Tourismus, whose head office is in Freiburg, has been responsible for the administration of tourism in the 320 municipalities of the region. Hitherto there had been four separate tourist associations.\n[…]\nSince the 20th century, the Black Forest has seen the large-scale generation of electrical power using run-of-the-river power plants and pumped storage power stations. From 1914 to 1926, the Rudolf Fettweis Company was established in the Murg valley in the Northern Black Forest with the construction of the Schwarzenbach Dam. In 1932, the Schluchsee reservoir, with its new dam, became the upper basin of a pumped-storage power plant.\n[…]\nSchwarzwaldverein (Black Forest Association)\n[…]\nBlack Forest ham\n[…]\n\"Black Forest\" . Encyclopædia Britannica. Vol. 4 (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Floresta_Negra",
        "situacao": "ok",
        "texto": "A Floresta Negra (em alemão:  der Schwarzwald) é uma cordilheira do sudoeste da Alemanha, no estado (Land) de Baden-Württemberg, coberta por uma floresta boreal. Ela é separada pelo vale do Reno do maciço dos Vosges, de que retoma a forma triangular e o tipo de relevo, mais elevado ao sul. O ponto culminante é o Feldberg, que atinge 1493 metros.\n[…]\nRegião bastante irrigada, a Floresta Negra é atravessada pela linha divisória de águas entre o oceano Atlântico e o Mar Negro. O rio Reno contorna o maciço pelo sul e depois pelo oeste, recebendo como afluentes o Kinzig, o Murg e, somente em Mannheim, o rio Neckar, que atravessa o  maciço em direção do norte com seus afluentes, o Enz e o Nagold. O rio Danúbio resulta da confluência do Breg e do Brigach e se dirige ao leste.\n[…]\nA  Floresta Negra se classifica como uma Floresta Boreal.\n[…]\nA economia se concentra principalmente nos vales. A vida agrícola  a associa à criação de gado e à cultura de cereais. A indústria trabalha principalmente com a madeira dos inúmeros pinheiros. A indústria têxtil e a relojoaria cedem lugar ao turismo. As fontes termais já eram conhecidas pelos romanos. As principais cidades da Floresta Negra são Friburgo em Brisgóvia, Lörrach, Baden-Baden, Villingen-Schwenningen, Titisee-Neustadt e Furtwangen.\n[…]\nSchwarzwald Tourismus GmbH (de)\n[…]\nRetratos do Floresta Negra (de)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Deserto de Sonora",
      "descricao": "Deserto da América do Norte no sudoeste dos Estados Unidos e no noroeste do México, famoso pelos cactos saguaro"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Terra do gigantesco cacto saguaro, o Deserto de Sonora se divide entre os Estados Unidos e que país vizinho?",
    "resposta": "México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sonoran_Desert"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sonoran_Desert",
        "situacao": "ok",
        "texto": "The Sonoran Desert (Spanish: Desierto de Sonora) is a hot desert and ecoregion in North America that covers parts of the northwestern Mexican states of Sonora, Baja California, and Baja California Sur, as well as part of the Southwestern United States (in Arizona and California). It has an area of 260,000 square kilometers (100,000 sq mi).\n[…]\nIn phytogeography, the Sonoran Desert is within the Sonoran floristic province of the Madrean region of southwestern North America, part of the Holarctic realm of the northern Western Hemisphere. The desert contains a variety of unique endemic plants and animals, notably, the saguaro (Carnegiea gigantea) and organ pipe cactus (Stenocereus thurberi).\n[…]\nWithin the southern Sonoran Desert in Mexico is found the Gran Desierto de Altar, with the El Pinacate y Gran Desierto de Altar Biosphere Reserve, encompassing 2,000 square kilometres (770 sq mi) of desert and mountainous regions. The biosphere reserve includes the only active erg dune region in North America. The nearest city to the biosphere reserve is Puerto Peñasco ('Rocky Point') in the state of Sonora.\n[…]\nThe Sonoran is the only place in the world where the famous saguaro cactus  (Carnegiea gigantea) grows in the wild. Cholla (Cylindropuntia spp.), beavertail (Opuntia basilaris), hedgehog (Echinocereus spp.), fishhook (Ferocactus wislizeni), prickly pear (Opuntia spp.), nightblooming cereus (Peniocereus spp.), and organ pipe (Stenocereus thurberi) are other taxa of cacti found here.\n[…]\nThe Sonoran Desert is home to the cultures of over 17 contemporary Native American tribes, with settlements at American Indian reservations in California and Arizona, as well as populations in Mexico.\n[…]\nStraddling the Mexico–United States border, the Sonoran desert is an important migration corridor for humans and animals.\n[…]\nSounds of the Sonoran Desert)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_de_Sonora",
        "situacao": "ok",
        "texto": "O deserto de Sonora é um deserto da América do Norte que cobre grande parte do sudoeste dos Estados Unidos, no Arizona e na Califórnia, e do noroeste do México, em Sonora, Baixa Califórnia e Baixa Califórnia do Sul. Ele é o deserto mais quente no México. Possui uma área de 260.000 quilômetros quadrados. A parte ocidental da fronteira Estados Unidos-México atravessa o deserto de Sonora. A região co\n[…]\nSub-regiões do deserto incluem o deserto do Colorado no sudeste da Califórnia e o deserto de Yuma a leste do rio Colorado, no sudoeste do Arizona. Na publicação de 1957 intitulada Vegetation of the Sonoran Desert, Forrest Shreve dividiu o deserto de Sonora em sete regiões de acordo com características da vegetação: Baixo Vale do Colorado, Terras Altas do Arizona, Planícies de Sonora, Colinas de Sonora, Centro da Costa do Golfo Central, Região Vizcaino e Região Magdalena.\n[…]\nDentro sul do deserto de Sonora, no México, está o Gran Desierto de Altar, com a Reserva da Biosfera El Pinacate e Grande Deserto de Altar (Parque Nacional Pinacate no México), estendendo-se 2.000 quilômetros quadrados de deserto e regiões montanhosas.\n[…]\nO deserto de Sonora abriga 60 espécies de mamíferos, 350 espécies de aves, 20 espécies de anfíbios, mais de 100 espécies de répteis, 30 espécies de peixes nativos, mais de 1000 espécies de abelhas nativas e mais de 2.000 espécies de plantas nativas. A área do deserto, a sudeste de Tucson e perto da fronteira mexicana, é um habitat vital para a única população de onças que vivem nos Estados Unidos.\n[…]\nDeserto de Mojave\n[…]\nDeserto de Chihuahua\n[…]\nGeografia dos Estados Unidos\n[…]\nGeografia do México\n[…]\nMuseu do Deserto do Arizona–Sonora (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "São Joaquim",
      "descricao": "Município da serra catarinense conhecido pelo frio, pelas geadas e pela neve ocasional"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "São Joaquim e Urupema, cidades serranas onde a neve aparece em alguns invernos, ficam em que estado brasileiro?",
    "resposta": "Santa Catarina",
    "fonte": [
      "https://pt.wikipedia.org/wiki/S%C3%A3o_Joaquim_(Santa_Catarina)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Joaquim_(Santa_Catarina)",
        "situacao": "ok",
        "texto": "São Joaquim é um município brasileiro do estado de Santa Catarina. Localiza-se a uma latitude 28° 17' 38\" Sul e a uma longitude 49° 55' 54\" Oeste, estando a uma altitude de 1.354 metros. Sua população estimada em 2019 era de 26.952 habitantes. Situada no Planalto Serrano, está localizada a 119 km de Criciúma, 133 km de Tubarão, 85 km de Lages e 232 km de Florianópolis.\n[…]\nJuntamente com Urupema e Bom Jardim da Serra, no mesmo estado, e São José dos Ausentes, no Rio Grande do Sul, São Joaquim é considerada a cidade mais fria do Brasil. É a cidade brasileira que registra a maior quantidade anual de precipitação no formato de neve. Durante os meses de inverno, é muito comum a ocorrência de geadas - todos os meses estão sujeitos ao fenômeno, sendo mais comum de março a novembro, com uma média de 86 dias por ano.\n[…]\nNos dias de frio mais intenso, ocorrem precipitações sob a forma de neve. No entanto, esta não aparece muitas vezes ao ano, com média de 5 a 7 dias na região em invernos normais, sendo poucas vezes intensa, pois a latitude da cidade é relativamente baixa para propiciar precipitações nivais mais abundantes e com maior frequência. Nos invernos de 1990 e 2013 foram registrados 12 dias com neve na região, com grande acúmulo em alguns dias.\n[…]\nEntre 1980 e 2010, a cidade registrou 103 casos de neve. Alguns dos poucos anos em que não ocorreram registros de neve foram 1971, 1986 e 2005.\n[…]\nFlorada das Cerejeiras: ocorre ao final do inverno e inicio da primavera, conferindo uma beleza ímpar a cidade; existem várias cerejeiras pelo município, porém o maior conjunto delas encontra-se na EPAGRI.\n[…]\nMuseu Histórico Municipal: espaço de Assis Chateaubriand, com retrospectiva de São Joaquim e acervo histórico.\n[…]\nLista de municípios de Santa Catarina por data de criação\n[…]\nLista de municípios de Santa Catarina por população\n[…]\nNeve no Brasil"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Dallol",
      "descricao": "Povoado da Depressão de Danakil, no nordeste africano, com uma das maiores temperaturas médias anuais já registradas"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O povoado de Dallol, na Depressão de Danakil, tem uma das temperaturas médias anuais mais altas já medidas. Em que país africano ele fica?",
    "resposta": "Etiópia",
    "distratores": [
      "Eritreia",
      "Sudão",
      "Somália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dallol,_Ethiopia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dallol,_Ethiopia",
        "situacao": "ok",
        "texto": "Dallol (Amharic: ዳሎል) is a locality in the Dallol woreda of northern Ethiopia. Located in Kilbet Rasu, Afar Region, in the Afar Depression, it has a latitude and longitude of 14°14′19″N 40°17′38″E with an elevation of about 130 metres (430 ft) below sea level. The Central Statistical Agency has not published an estimate for the 2005 population of the village, which has been described as a ghost to\n[…]\nDallol currently holds the official record for record high average temperature for an inhabited location on Earth, and an average annual temperature of 35 °C (95 °F) was recorded between 1960 and 1966. Dallol is also one of the most remote places on Earth, but paved roads in the area were built in 2015. Still, the most important mode of transport besides off-road vehicles are the camel caravans that travel to the area to collect salt.\n[…]\nDallol features an extreme version of a hot desert climate (Köppen climate classification BWh) typical of the Danakil Desert. Dallol is the hottest place year-round on the planet and currently holds the record high average temperature for an inhabited location on Earth, where an average annual temperature of 34.6 °C (94.3 °F) was recorded between the years 1960 and 1966. The annual average high temperature is 41.2 °C (106.1 °F) and the hottest month has an average high of 46.7 °C (116.1 °F).\n[…]\nThe highest temperature ever recorded is 49 °C (120 °F). In addition to being extremely hot year-round, the climate of the lowlands of the Danakil Depression is also extremely dry and hyperarid in terms of annual average rainy days as only a few days record measurable precipitation.\n[…]\nThe hot desert climate of Dallol is particularly hot due to the extremely low elevation, it being inside the tropics and near the hot Red Sea during winters, the very low seasonality impact, the constants of the extreme heat and the lack of nighttime cooling.\n[…]\nPhoto gallery of Dallol"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dallol",
        "situacao": "ok",
        "texto": "Dallol (amárico: ዳሎል) é uma localidade na woreda de Dallol, no norte da Etiópia, localizada na zona administrativa 2.\n[…]\nDallol detém atualmente o recorde de mais alta temperatura média para uma posição habitada na Terra, com temperatura anual média de 34°C (94°F), registrada entre os anos 1960 a 1966.\n[…]\nEstá próxima ao vulcão Dallol, cuja última erupção foi em 1926.\n[…]\nDallol é um local extremo de clima desértico, típico do Deserto de Danakil. Tem temperatura média anual de 41 °C e o mês mais quente tem média de 46,4 °C. Apesar disso, tem níveis altos de umidade relativa, cerca de 60%, o que resulta em sensação térmica insuportável ao ser humano.\n[…]\nDallol tornou-se mais conhecido no Ocidente em 2004, quando foi apresentado no documentário Channel 4/National Geographic Going to Extremes. A partir de 2004, alguns edifícios ainda estão em Dallol, todos construídos com blocos de sal.\n[…]\nDallol apresenta uma versão extrema de um clima desértico quente (classificação climática de Köppen-Geiger: BWh), típico do Deserto de Danakil. Dallol é o lugar mais quente durante todo o ano no planeta e atualmente detém a temperatura média recorde de um local habitado na Terra, onde uma temperatura média anual de 34,6 °C foi registrada entre os anos de 1960 e 1966. A temperatura média anual das temperaturas máximas é de 41 °C e o mês mais quente tem uma temperatura máxima média de 46,7 °C.\n[…]\nAlém de ser extremamente quente o ano todo, o clima das terras baixas da Depressão de Danakil também é extremamente seco e hiperárido em termos de dias chuvosos médios anuais, já que apenas alguns dias registram precipitações mensuráveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Geada negra de 1975",
      "descricao": "Geada severa de julho de 1975 que destruiu os cafezais do Sul do Brasil"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em julho de 1975, uma geada negra arrasou os cafezais de que estado, então o maior produtor de café do Brasil?",
    "resposta": "Paraná",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Geada_negra"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Geada_negra",
        "situacao": "ok",
        "texto": "Geada é a formação de uma camada de cristais de gelo sobre plantas ou sobre outras superfícies, devido à queda de temperatura. A principal causa da formação de geada é a advecção de massa de ar polar.\n[…]\nTambém ocorre geada quando a água existente no ar sublima (passa do estado gasoso direto para o estado sólido, sem passar pelo líquido).[carece de fontes]?\n[…]\nVento: a ausência de ventos favorece a formação da geada, pois permite que o ar frio se acumule e fique estagnado próximo ao solo.\n[…]\nA Geada Negra de 1975 foi um fenômeno climático que ocorreu no Norte Pioneiro do estado brasileiro do Paraná na madrugada de 18 de julho daquele ano. As consequências para a economia do estado foram devastadoras, pois dizimou a principal riqueza da região: a produção cafeeira.\n[…]\nO fenômeno meteorológico da baixa temperatura cobriu quase todo o território paranaense, inclusive a capital, Curitiba, fato conhecido como a nevada de 1975.\n[…]\nTambém é comum a ocorrência de geadas no estado de São Paulo, região serrana do Rio de Janeiro e no Sul de Minas Gerais (geralmente em áreas acima dos 800 metros de altitude). No estado do Mato Grosso do Sul sobretudo entre os meses de maio e julho; e raramente nas regiões elevadas do extremo sul dos estados do Espirito Santo, Mato Grosso e Goiás.\n[…]\nÉ famosa a grande geada de Julho de 1975. A geada negra, isto é, sem formação de cristais de gelo, foi devastadora para a agricultura no estado de São Paulo, do Norte do Paraná e do sul de Mato Grosso, atual Mato Grosso do Sul. Devastou todos os cafezais principalmente da região de Maringá e Londrina provocando grande recessão econômica no norte do estado, atingindo também os cafezais do Estado de São Paulo."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Ghibli",
      "descricao": "Nome dado na Líbia ao vento quente e seco do Saara, equivalente ao siroco"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que estúdio japonês de animação, de A Viagem de Chihiro, tem o nome de um vento quente que sopra no deserto da Líbia?",
    "resposta": "Studio Ghibli",
    "fonte": [
      "https://en.wikipedia.org/wiki/Studio_Ghibli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki, after acquiring Topcraft's assets. It has a strong presence in the animation industry and has expanded its portfolio to include various media such as sh\n[…]\nThe name \"Ghibli\" was chosen by Miyazaki from the Italian noun ghibli (also used in English), the nickname of Italy's Saharan scouting plane Caproni Ca.309, in turn derived from the Italianization of the Libyan Arabic name for a hot desert wind (قبلي qibliyy). The name was chosen by Miyazaki out of his passion for aircraft and for the idea that the studio would \"blow a new wind through the anime industry\".\n[…]\nStudio Ghibli films are mostly hand-drawn using rich watercolor and acrylic paints. The films use traditional methods of making animation where every frame is drawn and colored by hand. Computer animation techniques are used sparingly. All the Studio Ghibli films use bright colors, and have a \"whimsical and joyful aesthetic\". Studio Ghibli's art style tends to be more of a cozy European style that put a lot of undertones on the background and nature in the scene.\n[…]\nMuch of Studio Ghibli's music is composed by Joe Hisaishi, who has worked with Miyazaki on creating the music for his films for over 30 years. He uses storyboard images, provided by Miyazaki, to create an image album, which is then used to build out the final soundtrack for the movie. The music has elements from Baroque counterpoint, jazz, and modal music to create the unique sound that many associate with both Hisaishi and Studio Ghibli.\n[…]\nGhibli Park in Nagakute, Aichi\n[…]\nStudio Kajino, a subsidiary of Studio Ghibli\n[…]\nStudio Ponoc, founded by former members of Studio Ghibli\n[…]\nStudio Ghibli  at Anime News Network's encyclopedia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Studio_Ghibli",
        "situacao": "ok",
        "texto": "Studio Ghibli, Inc. (株式会社スタジオジブリ, Kabushiki gaisha Sutajio Jiburi) é um estúdio de animação japonês sediado em Koganei, Tóquio. Tem forte presença na indústria de animação e ampliou seu portfólio para incluir diversos formatos de mídia, como curtas-metragens, comerciais de televisão e dois filmes para televisão. Seu trabalho foi bem recebido pelo público e reconhecido com inúmeros prêmios.\n[…]\nFundado em 15 de junho de 1985 após a compra do estúdio Topcraft, o Studio Ghibli era dirigido pelos diretores Hayao Miyazaki e Isao Takahata e pelo produtor Toshio Suzuki . Miyazaki e Takahata já tinham longas carreiras no cinema japonês e na animação televisiva e trabalharam juntos em Taiyō no Ōji Horusu no Daibōken em 1968 e os filmes Panda Kopanda em 1972 e 1973. Suzuki foi editor da revista de mangá Animage, de Tokuma Shoten.\n[…]\nAo longo dos anos, tem havido uma estreita relação entre o Studio Ghibli e a revista Animage, que publica regularmente artigos exclusivos sobre o estúdio e os seus membros numa secção intitulada \"Notas Ghibli\". Obras de filmes de Ghibli e outras obras são frequentemente apresentadas na capa da revista. O romance Umi ga Kikoeru de Saeko Himuro foi serializado na revista e posteriormente adaptado para Umi ga Kikoeru, o primeiro longa-metragem de animação do Studio Ghibli criado para a televisão.\n[…]\nPara o autor do cartaz japonês, há menos espíritos, uma vez que a religião xintoísta japonesa normaliza a existência de espíritos, pelo que é necessária menos ênfase para transmitir a importância dos espíritos não-humanos. Além disso, a Disney ampliou os rótulos “Studio Ghibli” e “Hayao Miyazaki” no pôster, ajudando a trazer maior conhecimento ao estúdio através do sucesso de Spirited Away.\n[…]\nStudio Kajino, uma subsidiária do Estúdio Ghibli\n[…]\nStudio Ponoc, fundado por ex-membros do Studio Ghibli\n[…]\nStudio Ghibli  na enciclopédia do Anime News Network (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Asa-branca",
      "descricao": "Pomba sul-americana que abandona o sertão nordestino nas secas"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que cantor pernambucano eternizou a canção sobre a pomba asa-branca, que bate asas do sertão quando chega a seca?",
    "resposta": "Luiz Gonzaga",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Asa_Branca_(can%C3%A7%C3%A3o)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Asa_Branca_(can%C3%A7%C3%A3o)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Tempestade Perfeita de 1991",
      "descricao": "Tempestade que atingiu o Atlântico Norte e a costa leste dos Estados Unidos em outubro e novembro de 1991"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em que filme de 2000, com George Clooney, um barco pesqueiro é apanhado pela chamada tempestade perfeita de 1991?",
    "resposta": "Mar em Fúria (The Perfect Storm)",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Perfect_Storm_(film)",
      "https://en.wikipedia.org/wiki/1991_Perfect_Storm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Perfect_Storm_(film)",
        "situacao": "ok",
        "texto": "The Perfect Storm is a 2000 American disaster drama film directed by Wolfgang Petersen and based on the 1997 creative non-fiction book of the same name by Sebastian Junger. The film was adapted by William D. Wittliff, with an uncredited rewrite by Bo Goldman, and tells the story of Andrea Gail, a commercial fishing vessel that was lost at sea with all hands after being caught in the Perfect Storm \n[…]\nThe Perfect Storm was released on June 30, 2000, by Warner Bros. Pictures. The film received mixed reviews. It grossed $328 million worldwide, becoming the eighth-highest-grossing film of 2000.\n[…]\nBob Gunton as Alexander McAnally III, owner of Mistral, a yacht caught in the storm.\n[…]\nThe Perfect Storm marked the second collaboration between Mark Wahlberg and George Clooney, after Three Kings. In June 1999, it was officially announced that Diane Lane would be cast in the film as Bobby's girlfriend. The Perfect Storm was partially filmed in Gloucester, Massachusetts. A ship similar to Andrea Gail, Lady Grace, was used during the filming of the movie.\n[…]\nThe Perfect Storm was released on DVD and VHS on November 14, 2000.\n[…]\nClooney conveys a darkly heroic gravity, but his lack of even a trace of New England accent makes him seem socially out of place in a cast whose other members get the regional dialect more or less right.\" Jay Carr of The Boston Globe wrote, \"The Perfect Storm is much more than a seagoing Twister.\" Jeffrey Westhoff of Northwest Herald gave the film a rating of two out of four, saying, \"Once the digital effects commence, The Perfect Storm has all the impact of watching a friend play Nintendo.\" Peter Bradshaw in The Guardian gave a mixed review, praising the cast but criticizing the effects and pacing.\n[…]\nMedia related to The Perfect Storm (film) at Wikimedia Commons\n[…]\nQuotations related to The Perfect Storm (film) at Wikiquote\n[…]\nThe Perfect Storm at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/1991_Perfect_Storm",
        "situacao": "ok",
        "texto": "The 1991 Perfect Storm, also known as The No-Name Storm (especially in the years immediately after it took place) and the Halloween Gale/Storm, was a damaging and deadly nor'easter that lasted from October 28 to November 2, 1991. While initially an extratropical cyclone, it absorbed Hurricane Grace to its south, later evolving into a small, unnamed Category 1 hurricane.\n[…]\nThe system was the twelfth and final tropical cyclone, the eighth tropical storm, and fourth hurricane in the 1991 Atlantic hurricane season.\n[…]\nThe Perfect Storm originated from a cold front that exited the East coast of the United States. On October 28, the front spawned an extratropical low to the east of Nova Scotia. At the same time, a ridge extended from the Appalachian Mountains northeastward to Greenland, anchored by a strong high-pressure center over eastern Canada.\n[…]\nIn its tropical cyclone report on the hurricane, the National Hurricane Center only referred to the system as \"Unnamed Hurricane\". The Natural Disaster Survey Report called the storm \"The Halloween Nor'easter of 1991\". The \"perfect storm\" moniker was coined by author and journalist Sebastian Junger after a conversation with NWS Boston Deputy Meteorologist Robert Case in which Case described the convergence of weather conditions as being \"perfect\" for the formation of such a storm.\n[…]\nThe storm and the boat's sinking became the center-piece for Sebastian Junger's best-selling non-fiction book The Perfect Storm (1997), which was adapted to a major Hollywood film in 2000 as The Perfect Storm starring George Clooney.\n[…]\nThe storm was the basis of the book and movie The Perfect Storm. It was also the subject of an episode from the Discovery Channel program I Shouldn't Be Alive.\n[…]\nOctober 2021 nor'easter – A similar nor'easter that developed into Tropical Storm Wanda several days after striking the Northeastern U.S."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Perfect_Storm_%28filme%29",
        "situacao": "ok",
        "texto": "The Perfect Storm (bra: Mar em Fúria; prt: Tempestade ou Tempestade Perfeita) é um filme norte-americano de 2000, dos gêneros drama, ação e aventura, dirigido por Wolfgang Petersen. O filme é baseado no afundamento do barco de pesca Andrea Gail\n[…]\nGeorge Clooney (Capitão Billy Tyne)\n[…]\nNo site agregador de críticas Rotten Tomatoes, 46% das 138 avaliações dos críticos são positivas, com uma classificação média de 5,6/10. O consenso do site afirma: \"Embora os efeitos especiais são bem feitos e bastante impressionantes, o filme sofre de qualquer drama ou caracterização real.\n[…]\nO resultado final é um filme que oferece um colírio bacana para os olhos e nada mais.\" O Metacritic, que usa uma média ponderada, atribuiu ao filme uma pontuação de 59 em 100, baseado em 36 críticos, indicando críticas \"mistas ou médias\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Floco de neve",
      "descricao": "Cristal de gelo que se forma nas nuvens e cai como neve"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Por causa da forma como as moléculas de água se arrumam no gelo, quantas pontas costuma ter um floco de neve?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Snowflake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snowflake",
        "situacao": "ok",
        "texto": "A snowflake is a single ice crystal that is large enough to fall through the Earth's atmosphere as snow. Snow appears white in color despite being made of clear ice. This is because the many small crystal facets of the snowflakes scatter the sunlight between them.\n[…]\nIt is unlikely that any two snowflakes are alike due to the estimated 1019 (10 quintillion) water molecules which make up a typical snowflake, which grow at different rates and in different patterns depending on the changing temperature and humidity within the atmosphere that the snowflake falls through on its way to the ground. Snowflakes that look identical, but may vary at the molecular level, have been grown under controlled conditions.\n[…]\nThe microenvironment in which the snowflake grows changes dynamically as the snowflake falls through the cloud and tiny changes in temperature and humidity affect the way in which water molecules attach to the snowflake. Since the micro-environment (and its changes) are very nearly identical around the snowflake, each arm tends to grow in nearly the same way.\n[…]\nComprehensive photographic studies of fresh snowflakes show the simple symmetry represented in Bentley's photographs to be rare.\n[…]\nKoch snowflake – Mathematical curve resembling a snowflake\n[…]\nSekka Zusetsu – Guide to snowflake forms written in Japan in the 19th century\n[…]\nSelburose — An eight-pointed floral design that may be mistaken for a snowflake\n[…]\nTimeline of snowflake research\n[…]\nLibbrecht, Kenneth G. (2006). Ken Libbrecht's Field Guide to Snowflakes. Voyageur Press. ISBN 978-0-7603-2645-9.\n[…]\nCalifornia Institute of Technology professor, Kenneth G. Libbrecht, information on the parameters of snowflake formation:\n[…]\nOnline guide to snowflakes and ice crystals"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Floco_de_neve",
        "situacao": "ok",
        "texto": "Um floco de neve é um cristal de gelo de formato único, grande o suficiente para precipitar através da atmosfera terrestre na forma de neve. A neve aparece branca, apesar de ser feita de gelo transparente. Isso ocorre devido à reflexão difusa da luz solar pelas numerosas facetas cristalinas dos flocos de neve.\n[…]\nÉ improvável que dois flocos de neve sejam idênticos devido às cerca de 1019 (10 quintilhões) moléculas de água que compõem um floco típico, que crescem em taxas e padrões diferentes dependendo das mudanças de temperatura e umidade na atmosfera por onde o floco passa. Flocos idênticos, mas com variações no nível molecular, foram criados em condições controladas.\n[…]\nEmbora os flocos de neve nunca sejam perfeitamente simétricos, o crescimento de um floco não agregado frequentemente se aproxima da simetria radial de seis lados, derivada da estrutura cristalina hexagonal do gelo. Nesse estágio, o floco tem a forma de um hexágono minúsculo. Os seis \"braços\" do floco, ou dendritos, crescem independentemente a partir de cada canto do hexágono, enquanto cada lado de cada braço cresce de forma independente.\n[…]\nNo entanto, estar no mesmo microambiente não garante que cada braço cresça igualmente, pois o mecanismo de crescimento cristalino subjacente também afeta a velocidade de crescimento de cada região da superfície do cristal. Estudos empíricos sugerem que menos de 0,1% dos flocos de neve exibem a forma simétrica ideal de seis lados. Ocasionalmente, flocos com doze ramos são observados, mantendo a simetria de seis lados.\n[…]\nUm floco de neve hexagonal estilizado de seis pontas usado para a Ordem do Canadá (um sistema nacional de honrarias) passou a simbolizar a herança setentrional e a diversidade dos canadenses.\n[…]\nGuia online para flocos de neve e cristais de gelo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Escala Fujita",
      "descricao": "Escala que classifica a intensidade dos tornados pelos danos que causam"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A escala Fujita aprimorada, usada nos Estados Unidos para classificar tornados, tem quantos níveis, contando o zero?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Cinco",
      "Sete"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Enhanced_Fujita_scale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Enhanced_Fujita_scale",
        "situacao": "ok",
        "texto": "The Enhanced Fujita scale (abbreviated EF-Scale) is a scale that rates tornado intensity based on the severity of the damage a tornado causes. It is used in the United States, Brazil and France, among other countries. The EF scale is also unofficially used in other countries, including China. The rating of a tornado is determined by conducting a tornado damage survey.\n[…]\nThe scale has the same basic design as the original Fujita scale—six intensity categories from zero to five, representing increasing degrees of damage. It was revised to reflect better examinations of tornado damage surveys, in order to align wind speeds more closely with associated storm damage.\n[…]\nUnlike the original Fujita scale and International Fujita scale, ratings on the Enhanced Fujita scale are based solely off the effects of 3-second gusts on any given damage indicator.\n[…]\nOn the original Fujita scale, a tornado would generally earn an F5 rating by completely destroying and sweeping away frame homes built to typical American construction standards. On the Enhanced Fujita scale that level of damage would generally be rated as high-end EF4, requiring a house of above-standard construction to be rated EF5.\n[…]\nFor purposes such as tornado climatology studies, Enhanced Fujita scale ratings may be grouped into classes. The National Weather Service classifies EF0 and EF1 as weak, EF2 and EF3 as strong, as EF4 and EF5 as violent. The National Weather Service also uses the EF scale to classify tornadoes with a rating of EF2 and greater as significant.\n[…]\nThe Enhanced Fujita Scale (EF Scale) at Storm Prediction Center\n[…]\nThe Enhanced Fujita Tornado Scale at National Climatic Data Center\n[…]\nFujita Scale Enhancement Project (Wind Science and Engineering Research Center at Texas Tech University)\n[…]\nMitigation Assessment Team Report: Midwest Tornadoes of May 3, 1999 (Federal Emergency Management Agency)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escala_Fujita_melhorada",
        "situacao": "ok",
        "texto": "A Escala Fujita melhorada (abreviado para EF-scale) é uma escala que classifica a intensidade dos tornados baseado na gravidade dos danos que um tornado causa. É usado oficialmente nos Estados Unidos, Canadá, e não oficialmente usado (ou de forma independente) em países como Brasil, China, entre outros. A classificação de um tornado é determinada através de uma avaliação dos danos de um tornado.\n[…]\nA escala possui o mesmo design básico da escala Fujita tradicional com seis categorias de intensidade indo de zero até cinco, representando os graus crescentes de dano. Ela foi revisada para refletir melhor em análises de danos, para alinhar mais os ventos com os danos associados.\n[…]\nCom uma melhor padronização e elucidação, onde anteriormente era subjetivo e ambíguo, ela também adiciona mais tipos de estrutura e vegetação, expande os graus de dano, e contabiliza melhor as variedades como as diferenças na qualidade de construção. A categoria \"EF-Unknown\" (EFU) foi adicionada depois para tornados que não puderam ser classificados por falta de evidência de danos.\n[…]\nAssim como a escala Fujita, a escala Fujita melhorada é uma escala de dano e é apenas uma estimativa real para a velocidade dos ventos.\n[…]\nAo contrário da escala Fujita tradicional e da escala Fujita internacional, classificações na escala Fujita melhorada são baseadas somente nos efeitos de rajadas de 3 segundos em qualquer indicador de dano.\n[…]\nAs sete categorias da escala EF estão listadas abaixo, na ordem de intensidade crescente. Embora as estimativas dos ventos e exemplos fotográficos dos danos foram derivados das usadas na escala Fujita. Na prática operacional, indicadores de dano e graus de dano são usados predominante para determinar a intensidade dos tornados.\n[…]\nEscala Fujita\n[…]\nEscala de furacões de Saffir-Simpson\n[…]\nEscala de Beaufort",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Inversão térmica",
      "descricao": "Fenômeno em que uma camada de ar quente fica sobre o ar frio junto ao solo, prendendo a poluição"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que estação do ano a inversão térmica, que prende a poluição sobre cidades como São Paulo, é mais frequente?",
    "resposta": "Inverno",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Invers%C3%A3o_t%C3%A9rmica"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Invers%C3%A3o_t%C3%A9rmica",
        "situacao": "ok",
        "texto": "Inversão térmica é um fenômeno atmosférico de milhares de metros de espessura que ocorre no topo da camada limite planetária (CLP), a uma altitude da ordem de 1 km sobre áreas continentais, e onde o gradiente térmico (gradiente vertical da temperatura do ar) decresce com a altura, numa razão inferior a 10 graus por km (gradiente adiabático).\n[…]\nO fenômeno da inversão térmica, capaz de confinar grandes quantidades de poluentes numa estreita camada da atmosfera, é um fenômeno em que a convecção natural é dificultada pela inversão do gradiente de temperatura em função da altitude necessária para a livre dispersão dos solutos do ar que formam a poluição, confinando-os a uma estreita camada fluida, rica em poluentes.\n[…]\nEm 1º de setembro de 2007 a cidade de São Paulo enfrentou uma inversão térmica que se estabilizou a 58 metros de altura provocando uma das piores condições para a dispersão dos poluentes na cidade. Nenhuma estação medidora da CETESB apresentou boa qualidade do ar naquele dia.\n[…]\nApesar da inversão térmica ser mais conhecida no outono e inverno em vários grandes centros urbanos como São Paulo, Los Angeles, Cidade do México, Santiago, Bombaim e Tehran devido ao aumento da poluição nessas condições climáticas, a inversão térmica pode ocorrer em qualquer dia do ano e em qualquer região da Terra.\n[…]\nCidades menores como Oslo, Salt Lake City e Boise, que são cercadas por montanhas, também apresentam altos índices de poluição em inversões térmicas que bloqueiam a dispersão dos poluentes como se houvesse uma tampa sobre a cidade. Dentro da climatologia é possível estudar quais as regiões onde o fenômeno natural da inversão térmica é mais frequente.[carece de fontes]?\n[…]\nJá que noites no inverno são muito mais longas que as do verão, a inversão térmica é mais forte e comum nos meses de inverno."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Monção",
      "descricao": "Regime sazonal de ventos que inverte de direção e traz chuvas fortes ao sul da Ásia"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que mês as chuvas da monção costumam chegar ao estado de Kerala, no sul da Índia, abrindo a estação chuvosa?",
    "resposta": "Junho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Monsoon_of_South_Asia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Monsoon_of_South_Asia",
        "situacao": "ok",
        "texto": "The Monsoon of South Asia is among several geographically distributed global monsoons. It affects the Indian subcontinent, where it is one of the oldest and most anticipated weather phenomena, and an economically important pattern every year from June through September, but it is only partly understood and notoriously difficult to predict.\n[…]\nD. Subbarao, former governor of the Reserve Bank of India, emphasized during a quarterly review of India's monetary policy that the lives of Indians depend on the performance of the monsoon. His own career prospects, his emotional well-being, and the performance of his monetary policy are all \"a hostage\" to the monsoon, he said, as is the case for most Indians. Additionally, farmers rendered jobless by failed monsoon rains tend to migrate to cities.\n[…]\nIn the past, Indians usually refrained from traveling during monsoons for practical as well as religious reasons. But with the advent of globalization, such travel is gaining popularity. Places like Kerala and the Western Ghats get a large number of tourists, both local and foreigners, during the monsoon season. Kerala is one of the top destinations for tourists interested in Ayurvedic treatments and massage therapy.\n[…]\nThe monsoon is the primary bearer of fresh water to the area. The peninsular/Deccan rivers of India are mostly rain-fed and non-perennial in nature, depending primarily on the monsoon for water supply.\n[…]\nMost of the coastal rivers of Western India are also rain-fed and monsoon-dependent. As such, the flora, fauna, and entire ecosystems of these areas rely heavily on the monsoon.\n[…]\nMonsoon (photographs) of India, 1960\n[…]\nClimate of India (section Monsoon)\n[…]\nIndia Meteorological Department\n[…]\nDrought in India\n[…]\nMonsoon On-Line, an Indian Institute of Tropical Meteorology, Pune, India initiative"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Ipê-amarelo",
      "descricao": "Árvore brasileira de flores amarelas, comum no Cerrado e símbolo da estação seca"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que estação do ano o ipê-amarelo perde as folhas e se cobre de flores, colorindo o Cerrado?",
    "resposta": "No inverno, na estação seca",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ip%C3%AA"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ip%C3%AA",
        "situacao": "desambiguacao",
        "texto": "Há várias árvores que recebem o nome popular de ipê. \n\nDo gênero Handroanthus\nIpê-amarelo\nIpê-rosa\nIpê-roxo\nDo gênero Tabebuia:\nIpê-branco\nIpê-paratudo: Tabebuia aurea\nDe outros gêneros:\nIpê-felpudo: Zeyheria tuberculosa\nIpê-mirim: Tecoma stans\nIpê-verde: Cybistax antisyphilitica\nOutros significados para ipê:\n\nIpê (Rio Grande do Sul) - município do estado do Rio Grande do Sul\nLoteamento Ipê - bair"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Domínios morfoclimáticos brasileiros",
      "descricao": "Divisão do território brasileiro em grandes paisagens definidas pelo relevo, pelo clima e pela vegetação"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que geógrafo paulista dividiu o Brasil em domínios morfoclimáticos, como o dos mares de morros e o das caatingas?",
    "resposta": "Aziz Ab'Sáber",
    "distratores": [
      "Milton Santos",
      "Josué de Castro",
      "Caio Prado Júnior"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Aziz_Ab%27S%C3%A1ber"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Aziz_Ab%27S%C3%A1ber",
        "situacao": "ok",
        "texto": "Aziz Nacib Ab'Saber (São Luiz do Paraitinga, 24 de outubro de 1924 – Granja Viana, Cotia, 16 de março de 2012) foi um geógrafo e professor universitário brasileiro.\n[…]\nO valor literário de sua obra também foi reconhecido. Aziz Ab'Saber recebeu três vezes o Prêmio Jabuti: duas vezes na categoria de ciências humanas e uma vez para ciências exatas.\n[…]\nÉ de autoria de Ab'Saber o mapa de domínios morfoclimáticos, que procura destacar a modelagem do relevo e dos seus constituintes, as rochas e os solos, além das variações climáticas e ecológicas, que assim geram o bioma. Ab'Saber divide o Brasil em seis grandes regiões, catalogadas como amazônico, caatingas, cerrados, mares de morros, araucárias e pradarias.\n[…]\nA Obra de Aziz Nacib Ab'Saber (2010), São Paulo, BECA (588 pp. e CD)\n[…]\nA Terra Paulista\n[…]\nEntrevista com Aziz Ab'Saber. Professor emérito da USP acredita que a educação deve se basear no conhecimento regional e na descoberta de talentos, por Paola Gentile (originalmente publicada em NNova Escolaova Escola), ed. 139, janeiro de 2001.\n[…]\nInstituto Brasileiro de Informação em Ciência e Tecnologia (Ibict). Canal Ciência. Notáveis. Aziz Nacib Ab'Sáber. Biografia, fotos, entrevista e depoimentos (áudio).\n[…]\nCiência Hoje on-line, 7 de maio de 2003. Resenha do livro Os domínios de natureza no Brasil - potencialidades paisagísticas, de Aziz Ab'Sáber. Por Bernardo Esteves.\n[…]\nJornal Da Ciência, 17 de março de 2004. Aziz Ab’Saber vira “fazedor” de bibliotecas (originalmente publicado em O Estado de São Paulo, 17 de março de 2004.\n[…]\nRevista Geografia, ed. n°. 29, 2009. Uma unanimidade na universidade e na Geografia. Entrevista com Aziz Ab'Saber, por Maria Rehder."
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
