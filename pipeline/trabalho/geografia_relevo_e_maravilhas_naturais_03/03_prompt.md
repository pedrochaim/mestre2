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
      "nome": "Salto Ángel",
      "descricao": "Queda d'água que despenca de um tepui no Parque Nacional Canaima, na Venezuela."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Despencando do alto de um tepui na Venezuela, com quase um quilômetro de altura, qual é a cachoeira mais alta do mundo?",
    "resposta": "Salto Ángel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Angel_Falls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Angel_Falls",
        "situacao": "ok",
        "texto": "Angel Falls   (Spanish: Salto Ángel; Pemon: Körepakupai Vená) is a waterfall in Venezuela.\n[…]\nThe common Spanish name Salto Ángel derives from his surname. In 2009, President Hugo Chávez announced his intention to change the name to the purported original indigenous Pemon term (\"Kerepakupai-Merú\", meaning \"waterfall of the deepest place\"), on the grounds that the nation's most famous landmark should bear an indigenous name. Explaining the name change, Chávez reportedly said, \"This is ours, long before Angel ever arrived there...\n[…]\nThe name of the waterfall—\"Salto del Ángel\"—was first published on a Venezuelan government map in December 1939.\n[…]\nAngel Falls is one of Venezuela's top tourist attractions, though a trip to the falls is a complicated affair. The falls are located in an isolated jungle. A flight from Maiquetia Airport, Puerto Ordaz, or Ciudad Bolívar is required to reach Canaima camp, the starting point for river trips to the base of the falls. River trips generally take place from June to December, when the rivers are deep enough for use by the Pemon guides.\n[…]\nThe first person to jump from Angel Falls was Max Botto of Venezuela in November 1983. The first person to complete a base jump from Angel Falls was American Jerry Bird; even though he leaped after Max Botto, he deployed his parachute later and subsequently landed first.\n[…]\nThe American fantasy-romance film What Dreams May Come (1998), starring Robin Williams, Cuba Gooding Jr, and Annabella Sciorra, is set in Venezuela and shows Angel Falls.\n[…]\nVideo Salto Angel filmed by Hakuna Matata. 2023"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_%C3%81ngel",
        "situacao": "ok",
        "texto": "O Salto Ángel ou Cataratas Ángel (nome nativo Parekupa-meru) é o mais alto salto do mundo, com 979 metros de altura (807 metros de queda sem interrupção), gerada pela queda do rio Churún desde o Auyantepui, no Estado de Bolívar, sudeste da Venezuela, próximo da fronteira Brasil-Guiana. Seu nome é alusivo ao aviador estado-unidense James Crawford Angel.\n[…]\nO salto era conhecido pelos indígenas da zona, que o chamavam Kerepakupai-meru (\"queda de água até o lugar mais profundo\"), em idioma pemon, mas seu \"descobrimento\" pelos ocidentais é um assunto controvertido. Alguns historiadores atribuem-no a Ernesto Sánchez, explorador que em 1910 notificou o achado ao Ministério de Minas e Hidrocarburos em Caracas. Outros citam o capitão Félix Cardona Puig, que em 1927, junto a Mundó Freixas, divisou o grande salto no maciço de Auyantepuy.\n[…]\nOs artigos e mapas da Venezuela atraíram a curiosidade e o espírito de aventura do aviador Angel. Em 21 de maio de 1937, Cardona acompanhou Jimmy Angel no sobrevoo ao salto. Em setembro do mesmo ano, Jimmy Angel insiste em aterrissar sobre o Auyantepuy, o que consegue abruptamente, incrustando seu pequeno avião no solo. As notícias do acidente, sem vítimas, motivaram que o grande salto fosse batizado como Salto Ángel.\n[…]\nO Salto Ángel também é conhecido erroneamente como Churún-merú, nome que corresponde a outro salto de uns 400 metros de altura localizado no fim do cañón del Diablo, que ocupa o quarto lugar mundial.\n[…]\no Salto também foi inspirador na produção do filme animado Up - Altas Aventuras, que descreve o local do salto como o \"Paraíso das Cachoeiras\".\n[…]\nLista de cataratas mais altas da Terra\n[…]\nMedia relacionados com Salto Angel no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Monte Elbrus",
      "descricao": "Vulcão adormecido de dois cumes na cordilheira do Cáucaso, no sul da Rússia."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Contando o Cáucaso como parte da Europa, que montanha da Rússia supera o Mont Blanc como a mais alta do continente?",
    "resposta": "Monte Elbrus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Elbrus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Elbrus",
        "situacao": "ok",
        "texto": "Mount Elbrus is the highest mountain in Russia and Europe. It is a dormant stratovolcano rising 5,642 m (18,510 ft) above sea level, and is the highest volcano in Eurasia, as well as the tenth-most prominent peak in the world. It is situated in the southern Russian republic of Kabardino-Balkaria in the western extension of Ciscaucasia, and is the highest peak of the Caucasus Mountains.\n[…]\nElbrus is situated in the northwest of the Caucasus, 100 kilometres from the Black Sea and 370 kilometres from the Caspian Sea, which is visible from Elbrus on exceptionally clear days. It rises 5,642 metres above the sea level. Located eleven kilometres north of the Greater Caucasus Watershed, marking the border with Georgia, it is on the border of the Russian republics of Kabardino-Balkaria and Karachay-Cherkessia. It is the highest peak in both Russia and Europe.\n[…]\nIn October 2021, Kazakh scientist Aida Tabelinova climbed Mount Elbrus as part of an international expedition led by Youth Club of the Russian Geographical Society and Rossotrudnichestvo to promote humanitarian cooperation. In 2020 a charity climb for the Global Relief Trust by British Bangladeshi climber Akke Rahman was completed without using supplemental oxygen.\n[…]\nAfter the collapse of the USSR and until the early 2010s, travel to Mount Elbrus became increasingly dangerous due to economic problems, armed conflicts in various republics of Caucasus, and later due to the North Caucasus insurgency. Currently, Mount Elbrus is steadily becoming an important destination of domestic Russian tourism, with 424,000 visitors to the area in 2020.\n[…]\nNASA Earth Observatory pages on Mount Elbrus: Mt. Elbrus (July 2003), Mt. Elbrus, Caucasus Range (November 2002)\n[…]\n\"Elbrus Region\". Geographic Bureau.\n[…]\nKKCTebouTV (3 November 2012). \"Horses on Elbrus (5642 m) Лошади карачаевской породы на Эльбрусе\". YouTube (in Russian)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Elbrus",
        "situacao": "ok",
        "texto": "Monte Elbrus ou Elbruz (russo Эльбрус) é a montanha mais alta da Europa. É um estratovulcão inativo localizado na parte ocidental da cordilheira do Cáucaso, na Rússia, perto da fronteira com a Geórgia.\n[…]\nO monte Elbrus não deve ser confundido com as montanhas Alborz (também chamadas Elburz), no Irão.\n[…]\nUnicamente por convenção histórica - sem bases geográficas - o Cáucaso e os Urais são considerados a fronteira entre a Europa e a Ásia. O artificialismo da fronteira no contexto geográfico é exemplificado pelo facto de a parte setentrional do Cáucaso frequentemente ser considerada como localizada na Europa, e a parte meridional na Ásia. O monte Elbrus, com 5 642 m acima do nível do mar, é assim situado na Europa, sendo o seu ponto mais elevado.\n[…]\nO Elbrus fica a 20 km ao norte da cordilheira principal do Grande Cáucaso e a 65 km sul-sudoeste da cidade russa de Kislovodsk. Seu pico com neves eternas alimenta 22 geleiras que, por sua vez, dão origem aos rios Baksan, Kuban e Malka. É ainda o 10º monte de maior proeminência topográfica no mundo.\n[…]\nAs montanhas do Cáucaso são o resultado de colisão de duas placas tectônicas, a placa arábica movendo-se para o norte com relação à placa eurasiana. Elas formam uma continuação do Himalaia, que está sendo empurrado para cima por uma colisão similar entre as placas eurasiana e indiana. Toda a região é regularmente sacudida por fortes terremotos oriundos dessa atividade[carece de fontes]?. O Elbrus situa-se numa área de movimentos tectónicos, e tem sido ligado a uma falha.\n[…]\nNa Antiguidade, o monte era conhecido como Strobilus, e a mitologia grega situava lá o local onde Prometeu fora acorrentado.\n[…]\nPáginas sobre o monte Elbrus no NASA Earth Observatory:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Vale da Morte",
      "descricao": "Vale desértico no leste da Califórnia, Estados Unidos, parte do Parque Nacional do Vale da Morte."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Na Califórnia, que vale desértico abriga o ponto mais baixo da América do Norte, a mais de oitenta metros abaixo do nível do mar?",
    "resposta": "Vale da Morte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Death_Valley",
      "https://en.wikipedia.org/wiki/Badwater_Basin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Death_Valley",
        "situacao": "ok",
        "texto": "Death Valley (Panamint: Tümpisa [tɨmbiʃa]) is a desert valley in Eastern California, United States, in the northern Mojave Desert, bordering the Great Basin Desert. The World Meteorological Organization lists Death Valley as the site of the hottest surface temperature recorded on Earth.\n[…]\nLying mostly in Inyo County, California, near the border of California and Nevada, in the Great Basin, east of the Sierra Nevada mountains, Death Valley constitutes much of Death Valley National Park and is the principal feature of the Mojave and Colorado Deserts Biosphere Reserve. It runs from north to south between the Amargosa Range on the east and the Panamint Range on the west. The Grapevine Mountains and the Owlshead Mountains form its northern and southern boundaries, respectively.\n[…]\nThe valley got the name Death Valley in the winter of 1849–1850 when a group of American pioneers were traveling through on their way to the California gold rush. The Death Valley '49ers got lost in the valley and feared that they would all perish there. They did eventually make their way out after suffering the loss of just one of the group.\n[…]\nThe FX horror anthology series American Horror Story has a tenth season titled American Horror Story: Double Feature, which is split into two parts. While the first part, Red Tide, takes place by the sea, the second part of the season, Death Valley, focuses on a group of teens uncovering a conspiracy involving Dwight D. Eisenhower and strange occurrences in a desert partially inspired by Death Valley involving aliens and UFOs.\n[…]\nSurficial Geologic Map of the Death Valley Junction 30′ × 60′ Quadrangle, California and Nevada United States Geological Survey\n[…]\nDeath Valley Weather\n[…]\nDeath Valley Archived February 28, 2014, at the Wayback Machine on National Geographic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Badwater_Basin",
        "situacao": "ok",
        "texto": "Badwater Basin is an endorheic basin in Death Valley National Park, Death Valley, Inyo County, California, noted as the lowest point in North America and the United States, with a depth of 282 ft (86 m) below sea level.\n[…]\nA popular site for tourists is the sign marking \"sea level\" on the cliff above the Badwater Basin. Similar to Owens Lake, it is characterized by a deep bed of unconsolidated valley fill from which the salt crust emerges.\n[…]\nAlthough these local cycles are now somewhat modified by human presence, their legacy persists; despite appearances much to the contrary, Death Valley actually sits atop one of the largest aquifers in the world.\n[…]\nThroughout the Quaternary's wetter spans, streams running from nearby mountains filled Death Valley, creating Lake Manly, which during its greatest extents was approximately 80 mi (130 km) long and up to 600 ft (180 m) deep. Numerous evaporation cycles and a lack of outflow caused an increasing hypersalinity, typical for endorheic bodies of water.\n[…]\nOver time, this hypersalinization, combined with sporadic rainfall and occasional aquifer intrusion, has resulted in periods of \"briny soup\", or salty pools, on the lowest parts of Death Valley's floor. Salts (95% table salt – NaCl) began to crystallize, coating the surface with the thick crust, ranging from 3 to 60 in (8 to 152 cm), now observable at the basin floor.\n[…]\nDeath Valley pupfish\n[…]\nDon J. Easterbrook (Hrsg): Quaternary Geology of the United States. Geological Society of America 2003, ISBN 94-592-0504-6, S.63–64\n[…]\nJohn McKinney: California's Desert Parks: A Day Hiker's Guide. Wilderness Press 2006, ISBN 0-89997-389-2, S. 54–55"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_da_Morte",
        "situacao": "ok",
        "texto": "O Vale da Morte (em inglês:  Death Valley) é um vale desértico localizado no leste da Califórnia, ao norte do deserto de Mojave, na fronteira com o Deserto da Grande Bacia. É um dos lugares mais quentes do mundo no auge do verão, juntamente com os desertos no Oriente Médio.\n[…]\nA Bacia de Badwater do Vale da Morte é o ponto de menor altitude na América do Norte, a 86 m abaixo do nível do mar. Este ponto fica 136,2 km a leste-sudeste de Monte Whitney, o ponto mais alto nos Estados Unidos contíguos, com uma altitude de 4 421 m. Furnace Creek, no Vale da Morte, detém o recorde de temperatura do ar mais alta registrada na Terra a 56,7 °C em 10 de julho de 1913, bem como a maior temperatura natural a nível do solo já registrada na Terra a 93,9 °C em 15 de julho de 1917.\n[…]\nO Vale da Morte tem um clima desértico quente (Classificação climática de Köppen-Geiger: BWh), com longos verões extremamente quentes e invernos curtos e amenos, bem como pouca chuva. Como regra geral, altitudes mais baixas tendem a ter temperaturas mais altas. Quando o sol aquece o solo, esse calor é então irradiado para cima, mas o ar denso abaixo do nível do mar absorve parte dessa radiação e irradia parte dela de volta para o solo.\n[…]\nVários filmes foram filmados no Vale da Morte, como:\n[…]\nDeath Valley Suite, uma suíte sinfônica de Ferde Grofe, inspirada na história e na geografia do Vale da Morte.\n[…]\nDeath Valley (série de TV), uma série de comédia de terror da MTV de 2011.\n[…]\nDeath Valley Days (Série de rádio de 1930 a 1945; série de TV de 1952 a 1970), uma série antológica de rádio e televisão estadunidense que apresenta histórias verdadeiras do velho oeste americano, particularmente da área do Vale da Morte.\n[…]\nO Vale da Morte serve como a cidade fictícia da WWE Legend, The Undertaker.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pico Paraná",
      "descricao": "Montanha da Serra do Mar, no estado do Paraná, ponto culminante da Região Sul do Brasil."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual montanha da Serra do Mar é o ponto mais alto de toda a Região Sul do Brasil?",
    "resposta": "Pico Paraná",
    "distratores": [
      "Morro da Igreja",
      "Pico Marumbi",
      "Morro do Anhangava"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pico_Paraná",
      "https://en.wikipedia.org/wiki/Pico_Paraná"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pico_Paraná",
        "situacao": "ok",
        "texto": "O Pico Paraná é ponto mais alto da Região Sul do Brasil. Trata-se de uma formação rochosa de granito e gnaisse que está posicionada no município de Antonina, na bacia hidrográfica litorânea. É uma montanha que pertence ao conjunto de serra chamado Ibitiraquire, que na língua tupi significa \"serra verde\". Foi inicialmente explorado cientificamente pelo pesquisador alemão Reinhard Maack na década de\n[…]\nO conjunto principal do maciço rochoso que compõe o pico Paraná é formado por cinco cumes: pelo próprio pico Paraná (também chamado abreviadamente de PP), União, Ibitirati, Camelos e Tupipiá. o Ibitirati configura o mais alto paredão de granito do Brasil, com 1050m de altura, com inclinações que variam dos 70° aos 90°.\n[…]\nDevido sua importância ambiental, histórica e social uma vez que deste maciço nascem as águas que abastecem a Região Metropolitana de Curitiba e Antonina, além das comunidades tradicionais de entorno, toda a Serra do Ibitiraquire é protegida por Unidade de Conservação de Proteção Integral denominada Parque Estadual Pico Paraná, criado em 2002 pelo Decreto Estadual 5.769 de 5 de junho de 2002 e possuindo 4.333,8385 hectares de área.\n[…]\nCom base nas informações e medições obtidas, ele confirma suas expectativas iniciais e registra que o cume do pico Paraná (como então decidira batizar a montanha mais alta daquele setor) teria 1922 metros de altitude, sendo reconhecida a partir daí como a montanha mais alta do Paraná e da Região Sul do Brasil.\n[…]\nCom dificuldades de orientação devido ao fato do pico Paraná não ser visível da região onde se encontravam, adotam como rota inicial para a primeira tentativa de conquista a subida pela cumeada das montanhas Camaquã, Camapuã e Tucum.\n[…]\nLista de picos do Paraná\n[…]\nLista de picos do Brasil\n[…]\n«Parque_Estadual_Pico_Paraná»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pico_Paraná",
        "situacao": "ok",
        "texto": "Pico Paraná is the highest mountain in the Brazilian state of Paraná and in all Southern Brazil. It is composed of granite and gneiss. It was discovered by German explorer Reinhard Maack. Although this area has been previously inhabited by indigenous population Tupi Guarani. He also made the first ascent of the mountain, together with Rudolf Stamm and Alfred Mysing. The official height was obtaine\n[…]\nThe Pico Paraná and the surrounding peaks of the Paraná section of the Serra do Mar, is protected by the Pico Paraná State Park."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Deserto do Namibe",
      "descricao": "Deserto costeiro do sudoeste da África, ao longo do litoral atlântico da Namíbia."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Árido há dezenas de milhões de anos, qual deserto do sudoeste da África é considerado o mais antigo do mundo?",
    "resposta": "Deserto do Namibe",
    "distratores": [
      "Deserto do Kalahari",
      "Deserto do Saara",
      "Deserto de Gobi"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Namib"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Namib",
        "situacao": "ok",
        "texto": "The Namib (, NAH-mib; Portuguese: Namibe) is a coastal desert in Southern Africa. According to the broadest definition, the Namib stretches for more than 2,000 kilometres (1,200 mi) along the Atlantic coasts of Angola, Namibia, and northwest South Africa, extending southward from the Carunjamba River in Angola, through Namibia and to the Olifants River in Western Cape, South Africa.\n[…]\nThe Namib Desert is one of the 500 distinct physiographic provinces of the South African Platform physiographic division. It occupies an area of around 80,950 square kilometres (31,250 sq mi), stretching from the Uniab River (north) to the town of Lüderitz (south) and from the Atlantic Ocean (west) to the Namib Escarpment (east). It is about 1,600 km (1,000 mi) long from north to south and its east–west width varies from 50 to 160 kilometres (30 to 100 miles).\n[…]\nTo the north, the desert leads into the Kaokoveld; the dividing line between these two regions is roughly at the latitude of the city of Walvis Bay, and it consists in a narrow strip of land (about 50 km wide) that is the driest place in Southern Africa. To the south, the Namib borders the South African Karoo semi-desert.\n[…]\nThe Namib-Naukluft National Park, which extends over a large part of the Namib Desert, is the largest game reserve in Africa and one of the largest in the world at 49,768 sq km (19,215 sq mi). While most of the park is hardly accessible, several well-known visitor attractions are found in the desert. The prominent attraction is the Sossusvlei area, where high orange sand dunes surround vivid white salt pans, creating a fascinating landscape.\n[…]\nKinahan, John (2022). Namib: The Archaeology of an African Desert. Boydell & Brewer. ISBN 9781847012883.\n[…]\n\"Dune Patterns, Namib Desert, Namibia\". NASA Earth Observatory. Archived from the original on 21 October 2005. Retrieved 5 May 2006.\n[…]\nNamib Desert photo gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deserto_do_Namibe",
        "situacao": "ok",
        "texto": "O deserto do Namibe é um vasto deserto da África Meridional. Estende-se do sul de Angola ao norte da África do Sul, seguindo o traçado da costa marítima em paralelo ao Oceano Atlântico, junto ao deserto de Caoco. A palavra namib vem da língua nama, uma das línguas coissãs, e significa «lugar vasto e desolado».\n[…]\nO Namibe tem mais de 55 milhões de anos, sendo o deserto mais antigo do mundo.\n[…]\nO deserto do Namibe é considerado ideal para praticar desportos radicais.\n[…]\nMuito quente com altas temperaturas, durante o dia chega a uma temperatura de 60 graus celsius, e à noite varia entre 10 a 15 abaixo de zero. Formado por inúmeras dunas, encostas e planícies, permeada de lagos intermitentes e vales, que pela ação do vento está em constante transformação e mudança. Sua área ultrapassa 30 mil km² e integralmente faz parte do Parque Nacional Namib–Naukluft, na Namíbia, e se constitui na maior reserva de caça em África.\n[…]\nEntre as plantas existentes no sítio sobressai a Welwitschia mirabilis, que pode viver mais de cem anos, e cujas folhas absorvem a umidade do ar, bem como o aloé-aljava, que pode chegar a quatrocentos anos. Já entre os animais, destacam-se a víbora-do-deserto, o elefante-africano, o inseparável-de-faces-rosadas, o órix, bem como algumas espécies de lagartos, entre outros animais que conseguem sobreviver no clima inóspito da região.\n[…]\nEm 2013, o Comitê do Património Mundial em sua trigésima sétima sessão homologou a inscrição, declarando e incluindo o «Mar de Areia da Namíbia» na Lista do Património Mundial na Namíbia – região África.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Ben Nevis",
      "descricao": "Montanha das Terras Altas da Escócia, perto de Fort William, o ponto mais alto do Reino Unido."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nenhuma montanha do Reino Unido passa de mil e quatrocentos metros. Qual é a mais alta delas?",
    "resposta": "Ben Nevis",
    "distratores": [
      "Snowdon",
      "Scafell Pike",
      "Ben Macdui"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ben_Nevis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ben_Nevis",
        "situacao": "ok",
        "texto": "Ben Nevis ( NEV-iss; Scottish Gaelic: Beinn Nibheis, Scottish Gaelic pronunciation: [pe(ɲ) ˈɲivɪʃ]) is the highest mountain in Scotland, the United Kingdom, and the British Isles. Ben Nevis stands at the western end of the Grampian Mountains in the Highland region of Lochaber, close to the town of Fort William.\n[…]\n\"Ben Nevis\" 80/‒ organic ale is, by contrast, brewed in Bridge of Allan near Stirling.\n[…]\nBen Nevis was the name of a White Star Line packet ship which in 1854 carried the group of immigrants who were to become the Wends of Texas. At least another eight vessels have carried the name since then.\n[…]\nA mountain in Svalbard is also named Ben Nevis, after the Scottish peak. It is 922 metres (3,025 feet) high and is south of the head of Raudfjorden, Albert I Land, in the northwestern part of the island of Spitsbergen. Hung Fa Chai, a 489-metre (1,604-foot) hill in Northeast New Territories of Hong Kong was given the name Ben Nevis by British surveyors in 1901.\n[…]\nWee Ben Nevis was a character appearing in The Beano comic for a few years from 1974, drawn by Vic Neill, in a feature described by Auberon Waugh as having \"strong undertones of Scottish Nationalism by its untrue suggestion that Scotsmen have superhuman strength despite their diminutive stature\".\n[…]\nAonach Beag (Ben Nevis), 83.3°, 1.9m\n[…]\nBen Nevis Photo Tour – 57 images from the Car Park to the Summit and Back via the Tourist Trail\n[…]\nNevis Partnership Archived 26 June 2019 at the Wayback Machine – Environmental and visitor management in the Nevis area\n[…]\nComputer generated digital panoramas from Ben Nevis: North South Archived 29 September 2009 at the Wayback Machine index\n[…]\nBen Nevis Webcam\n[…]\n360munros.co.uk - Ben Nevis 360° Virtual Tours\n[…]\nBen Nevis. Munros Table. Scottish Mountaineering Club."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ben_Nevis",
        "situacao": "ok",
        "texto": "Ben Nevis (em gaélico escocês: Beinn Nibheis) é o ponto mais elevado do Reino Unido, com 1345 m de altitude. Fica na Escócia.\n[…]\nTal como muitas outras montanhas escocesas, entre os residentes locais é conhecido simplesmente como \"The Ben\". Estima-se que seja visitado por cerca de 100 000 turistas por ano, dos quais cerca de 75% usam a estrada Pony Track (\"Rota Pony\") que começa em Glen Nevis, na vertente sul da montanha.\n[…]\nPara os alpinistas a principal atração são as falésias com 700 metros de altura da vertente norte, que estão entre as mais altas do Reino Unido, e que abrigam algumas das mais clássicas subidas para escalada de todas as dificuldades.\n[…]\nO cume, a 1344 metros de altitude, tem as ruínas de um observatório que funcionou permanentemente entre 1883 e 1904. A informação meteorológica compilada durante esse período é importante para a compreensão do clima nas montanhas escocesas. Charles Wilson inventou a câmara de nuvens após ter passado algum tempo a trabalhar nesse observatório.\n[…]\nO Ben Nevis faz parte da lista oficial de munros (montanhas escocesas com mais de 3000 pés; 914,4 m) do Clube Escocês de Montanhismo (Scottish Mountaineering Club - SMC).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Teide",
      "descricao": "Vulcão da ilha de Tenerife, nas Canárias, o ponto mais alto da Espanha."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Num vulcão das ilhas Canárias fica o ponto mais alto de todo o território da Espanha. Que vulcão é esse?",
    "resposta": "Teide",
    "fonte": [
      "https://en.wikipedia.org/wiki/Teide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Teide",
        "situacao": "ok",
        "texto": "Teide (Spanish: El Teide) or Mount Teide (Pico del Teide, pronounced [ˈpiko ðel ˈtejðe]; 'Peak of Teide') is an active stratovolcano on the Spanish island of Tenerife, part of the Canary Islands. Its summit (at 3,715 m (12,188 ft)) is the highest point in Spain and the highest of any island in the Atlantic Ocean.\n[…]\nThe stratovolcanoes Teide and Pico Viejo (Old Peak, although it is in fact younger than Teide) are the most recent centres of activity on the volcanic island of Tenerife, which is the largest (2,058 km2 or 795 sq mi) and highest (3,715 m or 12,188 ft) island in the Canaries. It has a complex volcanic history. The formation of the island and the development of the current Teide volcano took place in the five stages shown in the diagram on the right.\n[…]\nFrom around 160,000 years ago until the present day, the stratovolcanoes of Teide and Pico Viejo formed within the Las Cañadas caldera.\n[…]\nAn astronomical observatory is located on the slopes of the mountain, taking advantage of the good weather, and the altitude, which puts it above most clouds, and promotes stable Astronomical seeing. The Teide Observatory is operated by the Instituto de Astrofísica de Canarias. It includes solar, radio and microwave telescopes, in addition to traditional optical night-time telescopes.\n[…]\nTeide has been depicted frequently throughout history, from the earliest engravings made by European conquerors to typical Canarian craft objects, on the back of the 1000-peseta banknote, in oil paintings and on postcards.\n[…]\nMons Pico, one of the Montes Teneriffe range of lunar mountains in the inner ring of the Mare Imbrium, was named by Johann Hieronymus Schröter after the Pico von Teneriffe, an 18th-century German name for Teide.\n[…]\nNASA Astronomy Picture of the Day: Geminid Meteors over Teide Volcano (December 17, 2013)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teide",
        "situacao": "ok",
        "texto": "O Teide é um vulcão situado na ilha de Tenerife (Ilhas Canárias-Espanha). Com uma altitude de 3718 metros e aproximadamente 7500 metros de altura sobre o leito oceânico, é o pico mais alto de Espanha, e das ilhas do Atlântico. É também o terceiro maior vulcão do mundo a partir de sua base. O Teide é um estratovulcão do tipo estromboliano.\n[…]\nPara os indígenas das ilhas Canárias (os guanches) este vulcão tinha o nome de Echeyde (que depois de uma castelhanização deu o nome atual) que significava inferno. Os guanches conheciam ao Teide com o nome de \"Echeyde\" cujo significado era \"morada de Guayota, o Maligno\". Segundo a lenda, Guayota sequestrou ao deus do Sol, para os guanches Magec, e encerrou-o no interior do vulcão sumindo à ilha ao todo escuridão.\n[…]\nSabe-se que são antigas as erupções do Teide, e que marcaram o relevo atual de Tenerife. Há milhares de anos, haveria um vulcão mais alto e maior que o Teide, tendo numa erupção formado, por deslizamento de terras e lava, as zonas conhecidas por Cañadas del Teide. Graças a novas erupções elevou-se o vulcão de hoje.\n[…]\nEm 1954 o Teide e toda a zona em seu redor estão englobados no Parque Nacional de Las Cañadas del Teide. Atualmente utiliza-se o nome de Parque Nacional do Teide declarado pela UNESCO como Património da Humanidade em 2007. É o segundo mais visitado parque nacional do mundo. Em 2016, ele foi visitado por 4,079,823 visitantes e turistas atingindo uma alta recorde. Outra característica do Parque Nacional del Teide é o famoso Roque Cinchado.\n[…]\nTambém no Teide se encontra o Refúgio de Montanha de Altavista e um teleférico que ascende de um ponto a cerca de 2350 metros até La Rambleta, a cerca de 3555 metros, em poucos minutos. A subida até ao topo está proibida, embora se possa obter um pedido especial junto do Parque Nacional em Santa Cruz de Tenerife.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Montanha do Pico",
      "descricao": "Estratovulcão da ilha do Pico, no arquipélago dos Açores, o ponto mais alto de Portugal."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que montanha vulcânica, numa ilha do Atlântico, é o ponto mais alto de todo o território português?",
    "resposta": "Montanha do Pico",
    "distratores": [
      "Serra da Estrela",
      "Pico Ruivo",
      "Pico do Arieiro"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Montanha_do_Pico",
      "https://en.wikipedia.org/wiki/Mount_Pico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Montanha_do_Pico",
        "situacao": "ok",
        "texto": "A Montanha do Pico é um estratovulcão que, com 2 351 m de altitude, constitui a mais alta montanha de Portugal. Fica na ilha do Pico, nos Açores. A sua altitude é mais do dobro da de qualquer outra montanha dos Açores. É também o ponto mais alto da dorsal meso-atlântica, embora existam pontos mais altos em ilhas atlânticas, mas fora da dorsal. Tem um isolamento topográfico de 1451 km, distância a \n[…]\nNo cimo da montanha que constitui a parte ocidental da ilha do Pico, localiza-se a cratera do vulcão propriamente dito e dentro dessa cratera, numa erupção recente do ponto de vista geológico surgiu outra elevação de menor dimensão a que foi dado o nome de Pico Pequeno ou Piquinho, com cerca de 70 metros de altura. Na base desta segunda elevação emanam fumarolas vulcânicas com forte teor de enxofre.\n[…]\nA Montanha do Pico foi primeiramente classificada como reserva em março de 1972 para e por diploma datado de 12 de Maio de 1982  lhe ser atribuído o estatuto de Reserva Natural da Montanha do Pico pelo Decreto Regional 15/82/A. que abarca uma área de aproximadamente 1500 hectares integrando a parte superior do vulcão e desenvolvendo-se a partir dos 1200 metros até ao ponto mais alto da ilha.\n[…]\nA Montanha do Pico apresenta-se como um vulcão geologicamente recente, constituído por correntes de lava, onde se encontram abundantes basaltos e matérias de projeção onde se destacam abundantes bagacinas na sua grande maioria de cor preta.\n[…]\nAs vertentes da Montanha do Pico apresentam declives muito acentuados que no cimo da montanha terminam nos bordos desmantelados da caldeira vulcânica, local de onde tem origem o cone do Pico Pequeno ou Piquinho. Sendo que o sopé da montanha termina no planalto central da ilha excluindo o local da Ponta da Faca, no concelho da Madalena, próximo ao Farol da Ponta da Faca, sitio onde se pode afirmar que a montanha encontra o mar.\n[…]\nMontanhas dos Açores"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Pico",
        "situacao": "ok",
        "texto": "Mount Pico (Portuguese: Montanha do Pico) is a currently dormant stratovolcano located on Pico Island, in the mid-Atlantic archipelago of the Azores. It is the highest mountain in Portugal, at 2,351 metres (7,713 ft) above sea level, and is one of the highest Atlantic mountains; it is more than twice the elevation of any other peak in the Azores. It has been a designated nature reserve since 1972.\n[…]\nPico is a stratovolcano (or composite), with a pit crater on its summit. Pico Alto is the round crater about 500 meters (1,600 ft) in diameter and 30 meters deep that tops the volcano, with Piquinho or Pico Pequeno (both names meaning \"small peak\" in Portuguese), a small volcanic cone, rising 70 metres within it to form the true summit.\n[…]\nMons Pico\n[…]\nNunes, J.C. (1999), A actividade vulcânica na ilha do Pico do Plistocénio Superior ao Holocénio: Mecanismo eruptivo e hazard vulcânico. Tese de doutoramento no ramo de Geologia, especialidade de Vulcanologia (in Portuguese), Ponta Delgada (Azores), Portugal: University of the Azores\n[…]\nMadeira, José (1998), Estudos de neotectónica nas ilhas do Faial, Pico e S. Jorge: uma contribuição para o conhecimento geodinâmico da junção tripla dos Açores. Tese de Doutoramento no ramo de Geologia, especialidade em Geodinâmica Interna (in Portuguese), Faculty of Sciences, University of Lisbon, pp. 428pp\n[…]\nMadeira, José; Silveira, António Brum da (October 2003), \"Active Tectonics and First Paleoseismological Results in Faial, Pico and S. Jorge Islands (Azores, Portugal)\", Annals of Geophysics (PDF), vol. 46, Bologna, Italy: INGV, Istituto Nazionale di Geofisica e Vulcanologia, pp. 733–761\n[…]\nPhotographic chronicle of a climb to the top of the Pico volcano.\n[…]\nPico - A Ilha Montanha Atlantica - Flickr Group\n[…]\nRecent pictures of a climb to the top of Pico volcano."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mauna Loa",
      "descricao": "Vulcão em escudo ativo na ilha do Havaí, nos Estados Unidos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual vulcão havaiano é considerado o maior vulcão ativo da Terra em volume?",
    "resposta": "Mauna Loa",
    "distratores": [
      "Mauna Kea",
      "Kilauea",
      "Haleakalā"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mauna_Loa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mauna_Loa",
        "situacao": "ok",
        "texto": "Mauna Loa (, Hawaiian: [ˈmɐwnə ˈlowə]; lit. 'Long Mountain') is one of five volcanoes that form the Island of Hawaii in the U.S. state of Hawaii in the Pacific Ocean. Mauna Loa is Earth's largest active volcano by both mass and volume. It was historically considered to be the largest volcano on Earth until the submarine mountain Tamu Massif was discovered to be larger.\n[…]\nMauna Loa is a shield volcano with relatively gentle slopes, and a volume estimated at 18,000 cubic miles (75,000 km3), although its peak is about 125 feet (38 m) lower than that of its neighbor, Mauna Kea. Lava eruptions from Mauna Loa are silica-poor and very fluid, and tend to be non-explosive.\n[…]\nActivity centered on its summit is usually followed by flank eruptions up to a few months later, and although Mauna Loa is historically less active than that of its neighbor Kilauea, it tends to produce greater volumes of lava over shorter periods of time.\n[…]\nBased on this classification Mauna Loa's continuously active summit caldera and rift zones have been given a level one designation. Much of the area immediately surrounding the rift zones is considered level two, and about 20 percent of the area has been covered in lava in historical times. Much of the remainder of the volcano is hazard level three, about 15 to 20 percent of which has been covered by flows within the last 750 years.\n[…]\nRegardless, Kīlauea's lack of a geographic outline and strong volcanic link to Mauna Loa led to it being considered an offshoot of Mauna Loa by the Ancient Hawaiians, meaning much of the mythos now associated with Kīlauea was originally directed at Mauna Loa proper as well.\n[…]\nOlaa Forest on Mauna Loa, in the Hawaiʻi Volcanoes National Park\n[…]\nMauna Loa – United States Geological Survey\n[…]\nMauna Loa Observatory (MLO) – NOAA\n[…]\nMauna Loa Solar Observatory (MLSO)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mauna_Loa",
        "situacao": "ok",
        "texto": "Mauna Loa  é um vulcão que se situa na Ilha Havaí, uma das ilhas do arquipélago do Havai. É, em volume, o maior vulcão em escudo na Terra, atingindo os 4169 m de altitude (10.000 metros desde a base) e 90 km de largura.\n[…]\nÉ ultrapassado em altitude pelo Mauna Kea, na mesma ilha, que é, todavia, um vulcão inativo ou em fase pós-escudo.\n[…]\nTrata-se de um vulcão pouco inclinado, possuindo no seu interior um lago constituído de lava fundida incandescente.\n[…]\nCrê-se que o vulcão Mauna Loa está ativo há pelo menos 700 000 anos e terá emergido do fundo do mar há 400 000 anos, embora as mais antigas rochas datadas não tenham mais de 200 000 anos. Entrou em erupção no dia 27 de novembro de 2022, 38 anos após sua última erupção, em 1984.\n[…]\nContam-se 33 erupções do Mauna Loa em tempos históricos. Nenhuma erupção recente causou mortes, mas as de 1926 e de 1959 destruíram várias aldeias, e a cidade de Hilo está parcialmente construída sobre as correntes de lava de finais do século XIX. Por causa dos perigos que corre a presença humana na região, o Mauna Loa é parte do programa Vulcões da Década, que motiva o estudo dos mais perigosos a nível mundial.\n[…]\nO Mauna Loa tem sido intensamente observado pelo Observatório Havaiano de Vulcões (HVO) desde 1912. As observações da atmosfera são recolhidas pelo Observatório Mauna Loa, e do sol pelo Observatório Solar Mauna Loa, ambos localizados perto do topo do vulcão. O Parque Nacional dos Vulcões do Havai cobre o cume e a encosta sudeste do vulcão e inclui ainda o Kilauea.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pico do Jaraguá",
      "descricao": "Pico na zona noroeste do município de São Paulo, ponto mais alto da cidade."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Antiga área de mineração de ouro, que pico é o ponto mais alto da cidade de São Paulo?",
    "resposta": "Pico do Jaraguá",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pico_do_Jaraguá"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pico_do_Jaraguá",
        "situacao": "ok",
        "texto": "Pico do Jaraguá é o ponto mais alto do município de São Paulo, no Brasil, elevando-se a uma altitude de 1 135 metros. Situa-se no bairro do Jaraguá, a oeste da serra da Cantareira. Nos seus arredores, foi criado o Parque Estadual do Jaraguá, para conservação da área.\n[…]\nPode-se ascender ao seu cume por uma via asfaltada (Estrada Turística do Jaraguá) ou por meio da Trilha do Pai Zé (1800 metros de extensão). No topo, há duas grandes antenas, sendo uma de televisão (compartilhada por 2 emissoras: TV Globo São Paulo, TV Bandeirantes São Paulo e outra da TV Cultura), além de pequenas instalações comerciais e locais destinados a estacionamento de veículos.\n[…]\nA TV Bandeirantes, canal 13 (VHF) instalou a sua antena (da marca inglesa Marconi) e novos amplificadores no Pico do Jaraguá no ano de 1970, o que permitiu, aos paulistas, uma melhor recepção do sinal para as transmissões dos jogos da Copa do Mundo FIFA de 1970, aumentando sua capacidade para 200 quilômetros. Também, lançou um disco promocional na mesma época para anunciar a novidade aos publicitários.\n[…]\nOs guaranis que vivem desde o início na década de 1960 no tekoá (aldeia) do Jaraguá-Itu no parque estadual em que fica o Pico do Jaraguá têm-no como uma montanha sagrada e chamam-na de Itaju marã e'y, que pode ser traduzido como \"pedra dourada primordial\".\n[…]\nConsiderado um dos últimos remanescentes de Mata Atlântica da Região Metropolitana de São Paulo, com área de 491,98 hectares, o Parque Estadual do Jaraguá é uma área protegida brasileira criada em 1961. Localiza-se em torno do Pico do Jaraguá, na Serra da Cantareira, Zona Noroeste do município de São Paulo, onde passa o Trópico de Capricórnio.\n[…]\n«Parque Estadual do Jaraguá»\n[…]\nPico do Jaraguá no TripAdvisor"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Cataratas do Niágara",
      "descricao": "Grupo de três quedas d'água no Rio Niágara, na fronteira entre Ontário e Nova York."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As Cataratas do Niágara reúnem três quedas: a Americana, a Véu de Noiva e qual outra, a maior, quase toda do lado canadense?",
    "resposta": "Cataratas da Ferradura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Niagara_Falls",
      "https://en.wikipedia.org/wiki/Horseshoe_Falls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Niagara_Falls",
        "situacao": "ok",
        "texto": "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the Canadian province of Ontario and the U.S. state of New York. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries. It is also known as the Canadian Falls. The smaller American Falls and Bridal Veil Falls lie within the United State\n[…]\nJust upstream from the falls' current location, Goat Island splits the course of the Niagara River, resulting in the separation of Horseshoe Falls to the west from the American and Bridal Veil Falls to the east. Engineering has slowed erosion and recession.\n[…]\nThe Finland-Swedish naturalist Pehr Kalm explored the area in the early 18th century and is credited with the first scientific description of the falls. In 1762, Captain Thomas Davies, a British Army officer and artist, surveyed the area and painted the watercolor, An East View of the Great Cataract of Niagara, the first eyewitness painting of the falls.\n[…]\nThe Niagara Falls Power Company, a descendant of Schoellkopf's firm, formed the Cataract Company headed by Edward Dean Adams, with the intent of expanding Niagara Falls' power capacity. In 1890, a five-member International Niagara Commission headed by Sir William Thomson among other distinguished scientists deliberated on the expansion of Niagara hydroelectric capacity based on seventeen proposals but could not select any as the best combined project for hydraulic development and distribution.\n[…]\nNiagara Falls was such an attraction to landscape artists that, writes John Howat, they were \"the most popular, the most often treated, and the tritest single item of subject matter to appear in eighteenth- and nineteenth-century European and American landscape painting\".\n[…]\nHolley, George Washington (1882). The Falls of Niagara and Other Famous Cataracts. Hodder and Stoughton."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Horseshoe_Falls",
        "situacao": "ok",
        "texto": "Horseshoe Falls is the largest of the three waterfalls that collectively form Niagara Falls on the Niagara River along the Canada–United States border. Approximately 90% of the Niagara River, after around half the water (75% at night and in winter) is diverted for hydropower generation, flows over Horseshoe Falls. The remaining 10% flows over American Falls and Bridal Veil Falls.\n[…]\nIt is located between Terrapin Point on Goat Island in the US state of New York, and Table Rock in the Canadian province of Ontario. These falls are also referred to as the Canadian Falls.\n[…]\nWhen the boundary line between the United States and Canada was determined in 1819, based on the Treaty of Ghent, the northeastern end of the Horseshoe Falls was in New York, United States, flowing around the Terrapin Rocks, which were once connected to Goat Island by a series of bridges. In 1955, the area between the rocks and Goat Island was filled in, creating Terrapin Point.\n[…]\nIn the early 1980s the United States Army Corps of Engineers filled in more land and built diversion dams and retaining walls to force the water away from Terrapin Point. Altogether, 400 ft (120 m) of the Horseshoe Falls was eliminated. Due to erosion, the Falls will continue to move in relation to the boundary line in the future, possibly altering territorial boundaries between the two countries.\n[…]\nThe official national maps for both Canada and the United States indicate that a smaller portion of the Horseshoe Falls currently is located within the United States.\n[…]\nNiagara Parks Commission"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_do_Ni%C3%A1gara",
        "situacao": "ok",
        "texto": "As Cataratas do Niágara (em inglês: Niagara Falls) são um agrupamento de grandes cataratas localizadas no rio Niágara, no leste da América do Norte, entre os lagos Erie e Ontário, na fronteira entre o estado norte-americano de Nova Iorque e da província canadense de Ontário. As Cataratas do Niágara são compostas por três grupos distintos de cataratas: as Cataratas Canadenses, as Cataratas American\n[…]\nCompanhias privadas do lado canadense também passaram a tirar proveito da energia das Cataratas, empregando tanto firmas domésticas e americanas para tal. O governo da província canadense de Ontário trouxe as operações de produção e distribuição de eletricidade na região do Niágara sob controle público, em 1906, distribuindo a eletricidade produzida na região do Niágara para várias partes da província - especialmente no sul.\n[…]\nAs cidades gêmeas de Niagara Falls (Ontário), e Niagara Falls (Nova Iorque), são ligadas atualmente por três pontes, incluindo a Ponte Whirpoll e a Ponte Rainbow (Ponte Arco-Íris), logo ao norte das quedas. A Ponte Arco-Íris permite a vista mais próxima das Cataratas do Niágara. Uma terceira ponte, a mais nova delas, chama-se Ponte Lewinston-Queenston, e estão localizadas ao norte das Cataratas.\n[…]\nAs Cataratas do Niágara são visitadas anualmente por 14 milhões de pessoas, a grande maioria deles americanos e canadenses, embora um número expressivo sejam turistas internacionais.\n[…]\nÉ no verão que as Cataratas do Niágara recebem o maior número de turistas anualmente, quando as Cataratas do Niágara são tanto uma atração diurna quanto uma atração noturna. Isto porque, no verão, holofotes instalados do lado canadense iluminam ambos os lados das cataratas por várias horas após o pôr-do-Sol. Em 2008, mais de 20 milhões de turistas visitaram as cataratas, com estimativas de 2009 de 28 milhões de turistas.\n[…]\nCataratas do Iguaçu\n[…]\n«Webcam das Cataratas do Niágara» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Cataratas Vitória",
      "descricao": "Queda d'água do rio Zambeze, na fronteira entre Zâmbia e Zimbábue."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na estação seca, turistas se banham numa piscina natural bem na borda das Cataratas Vitória. Que nome assustador ela tem?",
    "resposta": "Piscina do Diabo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Victoria_Falls",
      "https://en.wikipedia.org/wiki/Livingstone_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Victoria_Falls",
        "situacao": "ok",
        "texto": "Victoria Falls (Lozi: Mosi-oa-Tunya, \"Thundering Smoke/Smoke that Rises\"; Tonga: Shungu Namutitima, \"Boiling Water\") is a waterfall on the Zambezi River, located on the border between Zambia and Zimbabwe. It is one of the world's largest waterfalls, with a width of 1,708 m (5,604 ft). The region around it has a high degree of biodiversity in both plants and animals.\n[…]\nThe nearby national park in Zambia is named Mosi-oa-Tunya, whereas the national park and town on the Zimbabwean shore are both named Victoria Falls.\n[…]\nFirst Gorge: the one the river falls into at Victoria Falls\n[…]\nThe southern Tonga people known as the Batoka/Tokalea called the falls Shungu na mutitima. The Matabele, later arrivals, named them aManz' aThunqayo, and the Batswana and Makololo (whose language is used by the Lozi people) call them Mosi-o-Tunya. All these names mean essentially \"the smoke that thunders\".\n[…]\nThe two national parks at the falls are relatively small– Mosi-oa-Tunya National Park is 66 km2 (25 sq mi) and Victoria Falls National Park is 23 km2 (8.9 sq mi). However, next to the latter on the southern bank is the Zambezi National Park, extending 40 km (25 mi) west along the river. Animals can move between the two Zimbabwean parks and can also reach Matetsi Safari Area, Kazuma Pan National Park and Hwange National Park to the south.\n[…]\nThe national parks contain abundant wildlife including sizeable populations of African bush elephant, Cape buffalo, giraffe, Grant's zebra, and a variety of antelope. Lions, African leopards and South African cheetahs are only occasionally seen. Vervet monkeys and baboons are common. Southern white rhinoceroses inhabit Mosi-oa-Tunya National Park. Black rhinoceroses roam Victoria Falls Private Game Reserve. The river above the falls contains large populations of hippopotamus and Nile crocodile.\n[…]\n\"Victoria Falls\". UNESCO World Heritage."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Livingstone_Island",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cataratas_de_Vit%C3%B3ria",
        "situacao": "ok",
        "texto": "As cataratas de Vitória ou quedas de Vitória (o conjunto de quedas é chamado de Mosi-o-Tunya em tonga, que em português significa a fumaça que troveja) são uma das mais espetaculares quedas d'água do mundo. Situam-se no rio Zambeze, na fronteira entre a Zâmbia e o Zimbábue, e têm cerca de 1,5 km de largura e altura máxima de 128 m. Ao saltar, o Zambeze mergulha na garganta de Kariba e atravessa vá\n[…]\nTanto o Parque Nacional de Mosi-oa-Tunya quanto o Parque Nacional das Cataratas Vitória, no Zimbábue, estão inscritos desde 1989 na lista de Património Cultural da Humanidade mantida pela Unesco. Esta igualmente conservada por estar dentro da Área de Conservação Transfronteiriça Cubango-Zambeze.\n[…]\nOficialmente, no entanto, Livingstone foi o primeiro ocidental a avistá-las em 17 de novembro de 1855, dando-lhes o nome em honra à rainha Vitória — o nome local é  Mosi-oa-tunya, que quer dizer \"fumo que troveja\", em referência ao vapor que sobe da garganta das quedas.\n[…]\nNo livro Seven Natural Wonders of Africa, de 2009, há a seguinte narrativa sobre o explorador:\n[…]\n«Livingstone deu às cataratas um novo nome, ‘Vitória’, em homenagem à rainha Vitória, que na época regia o Reino Unido. Livingstone mais tarde diria que as cataratas foram a coisa mais impressionante que chegou a ver durante seus trinta anos de exploração da África.»\n[…]\nEm 1860, Livingstone voltou à zona das cataratas e fez um estudo detalhado. Formidável explorador, além das quedas de Vitória, atravessou duas vezes o deserto do Calaári, navegou o rio Zambeze de Angola até Moçambique, procurou as fontes do rio Nilo e foi o primeiro europeu a atravessar o Lago Tanganica.\n[…]\nEm 1905 foi inaugurada a ponte ferroviária Cataratas Vitória, que passa perto das quedas de água e que liga a Zâmbia e o Zimbábue.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Estalactite",
      "descricao": "Formação mineral que pende do teto das cavernas, criada pelo gotejamento de água com minerais dissolvidos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As estalactites que pendem do teto das cavernas de calcário são formadas principalmente por qual mineral?",
    "resposta": "Calcita (carbonato de cálcio)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stalactite",
      "https://pt.wikipedia.org/wiki/Estalactite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stalactite",
        "situacao": "ok",
        "texto": "A stalactite (UK: , US: ; from Ancient Greek  σταλακτός (stalaktós) 'dripping', from  σταλάσσειν (stalássein) 'to drip') is a mineral formation that hangs from the ceiling of caves, hot springs, or man-made structures such as bridges and mines. Any material that is soluble and that can be deposited as a colloid, or is in suspension, or is capable of being melted, may form a stalactite.\n[…]\nThe most common stalactites are speleothems, which occur in limestone caves. They form through deposition of calcium carbonate and other minerals, which is precipitated from mineralized water solutions. Limestone is the chief form of calcium carbonate rock which is dissolved by water that contains carbon dioxide, forming a calcium bicarbonate solution in caverns. The chemical formula for this reaction is:\n[…]\nAll limestone stalactites begin with a single mineral-laden drop of water. When the drop falls, it deposits the thinnest ring of calcite. Each subsequent drop that forms and falls deposits another calcite ring. Eventually, these rings form a very narrow (≈4 to 5 mm diameter), hollow tube commonly known as a \"soda straw\" stalactite. Soda straws can grow quite long, but are very fragile.\n[…]\nThe same water drops that fall from the tip of a stalactite deposit more calcite on the floor below, eventually resulting in a rounded or cone-shaped stalagmite. Unlike stalactites, stalagmites never start out as hollow \"soda straws\". Given enough time, these formations can meet and fuse to create a speleothem of calcium carbonate known as a pillar, column, or stalagnate.\n[…]\nOne of the longest stalactites viewable by the general public is in Pol an Ionain (Doolin Cave), County Clare, Ireland, in a karst region known as The Burren; what makes it more impressive is the fact that the stalactite is held on by a section of calcite less than 0.3 m2 (3.2 sq ft).\n[…]\nThe Virtual Cave's page on stalactites"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estalactite",
        "situacao": "ok",
        "texto": "Estalactites são formações rochosas sedimentares, mais explicitamente rochas sedimentares quimiogénicas, que se originam no teto de uma gruta ou caverna, crescendo para baixo, em direção ao chão, pela deposição (precipitação) lenta e contínua de carbonato de cálcio arrastado pela água que goteja do teto ou que sofre evaporação enquanto ainda no estalactite. Apresentam muito frequentemente uma form\n[…]\nEstalagmite"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Dolomitas",
      "descricao": "Cadeia de montanhas dos Alpes no nordeste da Itália, famosa por seus picos rochosos claros."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As Dolomitas, na Itália, são feitas de uma rocha parecida com o calcário, mas que também contém qual elemento químico?",
    "resposta": "Magnésio",
    "distratores": [
      "Ferro",
      "Enxofre",
      "Alumínio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dolomite_(rock)",
      "https://en.wikipedia.org/wiki/Dolomites"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dolomite_(rock)",
        "situacao": "ok",
        "texto": "Dolomite (also known as dolomite rock, dolostone or dolomitic rock) is a sedimentary carbonate rock that contains a high percentage of the mineral dolomite, CaMg(CO3)2. It occurs widely, often in association with limestone and evaporites, though it is less abundant than limestone and rare in Cenozoic rock beds (beds less than about 66 million years in age).\n[…]\nThe dolomitization reaction\n[…]\nOn the other hand, dolomitization can proceed rapidly at the greater temperatures characterizing deeper burial, if a mechanism exists to flush magnesium-bearing fluids through the beds.\n[…]\nDolomite is used for many of the same purposes as limestone, including as construction aggregate; in agriculture to neutralize soil acidity and supply calcium and magnesium; as a source of carbon dioxide; as dimension stone; as a filler in fertilizers and other products; as a flux in metallurgy; and in glass manufacturing. It cannot substitute for limestone in chemical processes that require a high-calcium limestone, such as manufacture of sodium carbonate.\n[…]\nDolomite is used for production of magnesium chemicals, such as Epsom salt, and is used as a magnesium supplement. It is also used in the manufacture of refractory materials.\n[…]\nBoth calcium and magnesium go into solution when dolomite rock is dissolved. The speleothem precipitation sequence is: calcite, Mg-calcite, aragonite, huntite and hydromagnesite. Hence, the most common speleothem (secondary deposit) in caves within dolomite rock karst, is calcium carbonate in the most stable polymorph form of calcite. Speleothem types known to have a dolomite constituent include: coatings, crusts, moonmilk, flowstone, coralloids, powder, spar and rafts.\n[…]\nDeelman, J. C. (1999). \"Low-temperature nucleation of magnesite and dolomite\" Archived 2008-04-09 at the Wayback Machine, Neues Jahrbuch für Mineralogie, Monatshefte, pp. 289–302."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dolomites",
        "situacao": "ok",
        "texto": "The Dolomites (Italian: Dolomiti, pronounced [doloˈmiːti]) or Pale Mountains (Italian: Monti Pallidi) are a mountain range in northeastern Italy. They form part of the Southern Limestone Alps and extend from the river Adige in the west to the Piave Valley (Pieve di Cadore) in the east. The northern and southern borders are defined by the Puster Valley and the Sugana Valley (Italian: Valsugana).\n[…]\nThe Dolomiti Bellunesi National Park and many other regional parks are in the Dolomites. On 26 June 2009, the Dolomites were declared a UNESCO World Heritage Site. The Adamello-Brenta UNESCO Global Geopark is also in the Dolomites. The Geological Museum of the Dolomites (in Italian Museo Geologico delle Dolomiti) is located in Predazzo, Fiemme Valley.\n[…]\nDuring the First World War, the front line between the Italian and Austro-Hungarian Army ran through the Dolomites, where both sides used mines extensively. Open-air war museums are at Cinque Torri (\"Five Towers\"), Monte Piana and Mount Lagazuoi. Many people visit the Dolomites to climb the vie ferrate, protected paths through the rock walls that were created during the war.\n[…]\nDolomiti Bellunesi National Park\n[…]\nItalian front (World War I)\n[…]\nBainbridge, William (2020). Topographic Memory and Victorian Travellers in the Dolomite Mountains. Amsterdam: Amsterdam University Press. ISBN 978-94-6298-761-6.\n[…]\n\"HD Pictures of the main areas of the Dolomites\". Bruno Mandolesi.\n[…]\n\"360 degree panorama Dolomites\". SiMedia Srl. Archived from the original on 26 January 2011. Retrieved 14 April 2010.\n[…]\nRoger. \"Walks and Via Ferrata in the Dolomites\". CommunityWalk.com. Archived from the original on 8 January 2018. Retrieved 14 April 2010.\n[…]\n\"Monte Piana in the Dolomites\". Eclectica. August 21, 2006.\n[…]\nItalian official cartography (Istituto Geografico Militare - IGM); on-line version: www.pcn.minambiente.it\n[…]\nInformation of the Dolomites"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dolomito",
        "situacao": "ok",
        "texto": "O dolomito é uma rocha sedimentar com mais de 50 % de seu peso constituído por dolomita (carbonato duplo de cálcio e magnésio CaMg(CO3)2, muitas vezes em associação com calcário e evaporitos, embora seja menos abundante que o calcário e raro em leitos rochosos cenozóicos (leitos com menos de 66 milhões de anos de idade). O primeiro geólogo a distinguir a rocha dolomítica do calcário foi Belsazar H\n[…]\nA maior parte da dolomita foi formada como uma substituição de magnésio de calcário ou de lama de cal antes da litificação. O processo geológico de conversão de calcita em dolomita é conhecido como dolomitização e qualquer produto intermediário é conhecido como calcário dolomítico. O \"problema da dolomita\" refere-se aos vastos depósitos mundiais de dolomita no registro geológico passado, em contraste com as quantidades limitadas de dolomita formadas nos tempos modernos.\n[…]\nPesquisas recentes revelaram que bactérias redutoras de sulfato que vivem em condições anóxicas precipitam dolomita, o que indica que alguns depósitos anteriores de dolomita podem ser devidos à atividade microbiana.\n[…]\nA dolomita é resistente à erosão e pode conter camadas acamadas ou não acamadas. É menos solúvel que o calcário em águas subterrâneas pouco ácidas, mas ainda pode desenvolver características de solução (karst) ao longo do tempo. A rocha dolomítica pode atuar como um reservatório de petróleo e gás natural.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Matterhorn",
      "descricao": "Montanha piramidal dos Alpes na fronteira entre Suíça e Itália, com 4.478 metros."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Segundo os geólogos, as rochas do alto do Matterhorn vieram de um pedaço de crosta ligado a qual continente, empurrado contra a Europa?",
    "resposta": "África",
    "fonte": [
      "https://en.wikipedia.org/wiki/Matterhorn"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Matterhorn",
        "situacao": "ok",
        "texto": "The Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres (14,692 ft) above sea level, making it one of the highest summits in the Alps and Europe. Sometimes referred to as the \"Mountain of Mountains\" (German: Berg de\n[…]\nThe Matterhorn is mainly composed of gneisses (originally fragments of the African plate before the Alpine orogeny) from the Dent Blanche nappe, lying over ophiolites and sedimentary rocks of the Penninic nappes. The mountain's current shape is the result of cirque erosion due to multiple glaciers diverging from the peak, such as the Matterhorn Glacier at the base of the north face.\n[…]\nApart from the base of the mountain, the Matterhorn is composed of gneiss belonging to the Dent Blanche klippe, an isolated part of the Austroalpine nappes, lying over the Penninic nappes. The Austroalpine nappes are part of the Apulian plate, a small continent that broke up from Africa before the Alpine orogeny. For this reason, the Matterhorn has been popularised as an African mountain. The Austroalpine nappes are mostly common in the Eastern Alps.\n[…]\nThe formation of the Matterhorn (and the whole Alpine range) started with the break-up of the Pangaea continent 200 million years ago into Laurasia (containing Europe) and Gondwana (containing Africa). While the rocks constituting the nearby Monte Rosa remained in Laurasia, the rocks constituting the Matterhorn found themselves in Gondwana, separated by the newly formed Tethys Ocean.\n[…]\nIn 1995, Bruno Brunod climbed Matterhorn from the village Breuil-Cervinia in 2 h 10 min. and from Breuil-Cervinia to Matterhorn and back, in 3:14:44\n[…]\nMatterhorn Webcams from the Breuil-Cervinia Tourism official website\n[…]\nMatterhorn on GeoFinder.ch\n[…]\nMatterhorn Tour guidebook"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Matterhorn",
        "situacao": "ok",
        "texto": "O Matterhorn ou monte Cervino (em francês:  mont Cervin; em italiano:  monte Cervino) é talvez a montanha mais conhecida dos Alpes, a par do Monte Branco. Localizada na fronteira da Suíça com a Itália, a sua graciosa silhueta domina a vila suíça de Zermatt e a localidade italiana de Breuil-Cervinia, no município de Valtournenche.\n[…]\nFoi apenas em 14 de julho de 1865, que depois de muitas tentativas falhadas, que Edward Whymper e o guia Peter Taugwalder tentaram seguir a chamada rota Hörnli, e conseguir subir ao cume do Matterhorn/Cervino, tendo sido surpresos pela facilidade do percurso.\n[…]\nAs pesquisas feitas por um descendente de Robert Hadow junto da Biblioteca Bodleiana de Oxford descobriu um livro escrito pelo presidente do Alpine Club para celebrar o centenário da conquista do Cervino e no qual ele descreve que Whymper tinha cortado a corda quando o cimo estava à vista, e que foi esse pedaço de corda que faltou para ligar as duas cordadas uma vez que havia a corda de muito boa qualidade usada pelo grupo do Alpine Club que amarrava os primeiros da cordada, a corda normal francesa que amarrava o segundo grupo e a corda de reserva que ligava estes dois grupos e que teve de ser usada devido ao que aconteceu no fim da subida.\n[…]\nTodas as arestas e faces do Matterhorn/Cervino já foram escaladas, em todas as estações do ano, e os guias de montanha acompanham centenas de pessoas pela rota Hörnli em cada Verão. Segundo os padrões modernos, a subida é técnica mas fácil, e os passos mais delicados têm colocadas seguranças permanentes para simplificar a subida.\n[…]\nO Monte Cervino é geralmente subido por uma das 4 arestas principais:\n[…]\nEscalada virtual do Matterhorn com panormas de 360º\n[…]\nMatterhorn no site Summitpost\n[…]\nPeakWare — informação sobre o Matterhorn\n[…]\nMatterhorn no site 4000er.de\n[…]\nMatterhorn visto de Zermatt",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "White Sands",
      "descricao": "Parque nacional no Novo México, Estados Unidos, com um enorme campo de dunas brancas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As dunas brancas do White Sands, no Novo México, não são feitas de quartzo como a maioria. São feitas de qual mineral?",
    "resposta": "Gipsita",
    "fonte": [
      "https://en.wikipedia.org/wiki/White_Sands_National_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/White_Sands_National_Park",
        "situacao": "ok",
        "texto": "White Sands National Park is a national park of the United States located in New Mexico and completely surrounded by White Sands Missile Range. The park covers 145,762 acres (227.8 sq mi; 589.9 km2) in the Tularosa Basin, including the southern 41% of a 275 mi2 (710 km2) field of white sand dunes composed of gypsum crystals.\n[…]\nWhite Sands National Park was originally designated White Sands National Monument on January 18, 1933, by President Herbert Hoover. Since 1941, the park has been surrounded by the military installations of White Sands Missile Range and Holloman Air Force Base. It was redesignated as a national park by Congress and signed into law by President Donald Trump on December 20, 2019. It is the most visited National Park Service site in New Mexico, with about 600,000 visitors each year.\n[…]\nIn May 2018, U.S. Senator Martin Heinrich (D-New Mexico) introduced a bill to designate White Sands a national park. Heinrich consulted with monument officials, the National Park Service, White Sands Missile Range, the U.S. Army, and Holloman Air Force Base before the bill was introduced in Congress.\n[…]\nWhite Sands National Park is located in southern New Mexico, on the north side of U.S. Route 70 approximately 15 miles (24 km) southwest of Alamogordo and 52 miles (84 km) northeast of Las Cruces, in western Otero County and northeastern Doña Ana County. The closest commercial airport is in El Paso, Texas, about 85 miles (137 km) away.\n[…]\nWhite Sands National Park is the most visited NPS site in New Mexico, with about 600,000 visitors each year. In year two of the pandemic, White Sands National Park saw more than 780,000 visitors from both locals and visitors. Many visitors arrive during the warmer months from March through August, but sledders and photographers can be seen throughout the dunes year-round."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_de_White_Sands",
        "situacao": "ok",
        "texto": "O Parque Nacional de White Sands é uma área protegida nos Estados Unidos localizada no oeste do  condado de Otero e nordeste do condado de Doña Ana, cerca de 25 km a sudoeste de Alamogordo, no estado do Novo México. Está completamente cercado pelo Campo de Teste de Mísseis de White Sands.\n[…]\nO parque protege 589,9 km² na Bacia do Tularosa, incluindo 41% ao sul de um campo de 710 km² de dunas de areia branca compostas por cristais de gesso. Este campo de dunas de gesso é o maior de seu tipo na Terra, 1 com uma profundidade de aproximadamente 9,1 m, dunas de até 18 m e aproximadamente 4,1 bilhões de toneladas métricas de areia de gesso.\n[…]\nMilhares de espécies de animais habitam o parque, grande parte das quais são invertebrados. Várias espécies animais apresentam uma coloração branca ou esbranquiçada. Pelo menos 45 espécies são endêmicas, vivendo apenas neste parque, sendo 40 delas espécies de mariposas. Só as plantas tolerantes à seca e  ao solo alcalino são capazes de sobreviver.\n[…]\nDurante o período Permiano, mares rasos cobriram a área que hoje forma o Parque Nacional White Sands. Os mares deixaram para trás gesso (sulfato de cálcio) e a atividade tectônica subsequente elevou áreas do fundo do mar rico em gesso para formar parte das montanhas de San Andrés e Sacramento. Com o tempo, a chuva dissolveu o gesso solúvel em água nas montanhas e os rios levaram-no para a Bacia de Tularosa, que não tem saída para o mar.\n[…]\nA maior parte da formação de cristais ocorre quando grandes inundações concentram a água mineralizada a cada dez a quatorze anos. O vento e a água quebram os cristais em partículas progressivamente menores até que se torneam grãos finos de areia de gesso branca.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Sete Cumes",
      "descricao": "Conjunto formado pela montanha mais alta de cada continente, desafio clássico do montanhismo."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os Sete Cumes reúnem a montanha mais alta de cada continente. Qual delas representa a Antártida?",
    "resposta": "Maciço Vinson",
    "distratores": [
      "Monte Erebus",
      "Monte Kirkpatrick",
      "Monte Markham"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Seven_Summits",
      "https://en.wikipedia.org/wiki/Vinson_Massif"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seven_Summits",
        "situacao": "ok",
        "texto": "The Seven Summits are the highest mountains on each of the seven traditional continents. On 30 April 1985, Richard Bass became the first climber to reach the summit of all seven.\n[…]\nEverest, Aconcagua, Denali, Kilimanjaro, Vinson, Elbrus, Mount Wilhelm (Continent)\n[…]\nAntarctic Plate – Vinson\n[…]\nHackett made an attempt to climb Mount Vinson and obtained a permit for Mount Everest in 1960, but due to several circumstances (frostbite, lack of funds, etc.), he never made it to more than five summits.\n[…]\nIn 1990, Rob Hall and Gary Ball became the first to complete the \"Seven Summits\" in seven months. Using the Bass list, they started with Everest on 10 May 1990, and finished with Vinson on 12 December 1990, hours before the seven-month deadline.\n[…]\nTejas began with summiting Vinson on 18 January 2010 and ended with summiting Denali on May 31. This was Tejas' ninth time to complete the Bass Seven Summits.\n[…]\nOn 16 December 2014, Tashi and Nungshi Malik became the world's first twins and siblings to complete the Seven Summits (Messner list). Colin O'Brady broke the record for the Messner and Bass lists in 131 days, summiting Vinson on 17 January 2016 and completing with Denali on 27 May 2016.\n[…]\nOn 6 January 2018, Chris Bombardier reached the summit of Mount Vinson, becoming the first person with hemophilia to complete the Seven Summits (Messner list). On 23 June 2018, Silvia Vasquez-Lavado reached the summit of Denali, becoming the first openly gay woman to complete the Seven Summits (including Carstensz Pyramid). On 4 January 2019, Arunima Sinha reached the summit of Mount Vinson, becoming the first female amputee to complete the Seven Summits (including Carstensz Pyramid)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vinson_Massif",
        "situacao": "ok",
        "texto": "Vinson Massif () is a large mountain massif in Antarctica that is 21 km (13 mi) long and 13 km (8 mi) wide and lies within the Sentinel Range of the Ellsworth Mountains. It overlooks the Ronne Ice Shelf near the base of the Antarctic Peninsula. The massif is located about 1,200 kilometers (750 mi) from the South Pole. Vinson Massif was discovered in January 1958 by U.S. Navy aircraft. In 1961, the\n[…]\nHis unauthorized incursion into Tibet led China to file an official protest with the U.S. State Department. In the end, the purported race did not materialize as Conrad had difficulties with his plane. According to press reports, he and Sayre were still in Buenos Aires on the day the first four members of AAME 1966/67 reached Mount Vinson's summit.\n[…]\nIn December 1966 the Navy transported the expedition and its supplies from Christchurch, New Zealand to the U.S. base at McMurdo Sound, Antarctica, and from there in a ski-equipped C-130 Hercules to the Sentinel Range. All members of the expedition reached the summit of Mount Vinson. The first group of four climbers summited on 18 December 1966, three more on 19 December, and the last three on 20 December.\n[…]\nThe climb of Vinson offers little technical difficulty beyond the usual hazards of travel in Antarctica, and as one of the Seven Summits, it has received much attention from well-funded climbers in recent years. Multiple guide companies offer guided expeditions to Mount Vinson, at a typical cost of around US$45,000 per person, including transportation to Antarctica from Chile.\n[…]\nThe route had never been attempted before and required 13 days of travel across Antarctic terrain to reach the base camp. The ascent from 2,125 m (6,972 ft) to the 4,897 m (16,066 ft) summit was completed over two days, with an intermediate camp at 3,940 m (12,930 ft). This remains one of the longest unsupported approaches to Mount Vinson recorded."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sete_cumes",
        "situacao": "ok",
        "texto": "Os sete cumes são as montanhas mais altas de cada continente, onde a Antártida entra na lista e a América se encontra separada em América do Norte e América do Sul. Atribui-se a Richard Bass o título de primeiro explorador a completar o desafio.\n[…]\nA primeira lista dos Sete Cumes foi criada por Richard Bass, que escolheu a montanha mais alta do continente Austrália, o Monte Kosciuszko  (2.228 m), para representar mais alto do continente Australásia. Reinhold Messner postulou outra lista substituindo o Monte Kosciuszko, pelo Puncak Jaya na Indonésia, ou Pirâmide Carstensz (4.884 m). As listas de Bass e Messner não incluem o Mont Blanc. Do ponto de vista do montanhismo, a lista Messner é a mais desafiadora.\n[…]\nMontanhas com mais de oito mil metros de altitude\n[…]\nLista das montanhas mais altas\n[…]\nLista de ilhas por ponto mais alto\n[…]\nSete segundos cumes\n[…]\nSete cumes vulcânicos\n[…]\n3D Tour of Seven Summits in Virtual Earth",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Deserto de Gobi",
      "descricao": "Grande deserto frio da Ásia Central, entre o sul da Mongólia e o norte da China."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nos anos 1920, uma expedição americana tornou famosos os Penhascos Flamejantes, no deserto de Gobi, com que achado paleontológico?",
    "resposta": "Ovos de dinossauro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Flaming_Cliffs",
      "https://en.wikipedia.org/wiki/Roy_Chapman_Andrews"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flaming_Cliffs",
        "situacao": "ok",
        "texto": "The Flaming Cliffs site (also known as Bayanzag, Bayn Dzak) (Mongolian: Баянзаг rich in saxaul), with the alternative Mongolian name of Mongolian: Улаан Эрэг (red cliffs), is a region of the Gobi Desert in the Ömnögovi Province of Mongolia, in which important fossil finds have been made. It was given this name by American paleontologist Roy Chapman Andrews, who visited in the 1920s. The area is mo\n[…]\nNovacek, Michael J.; Norell, Mark; McKenna, Malcolm C. and Clark, James (2004) \"Fossils of the Flaming Cliffs\" Dinosaurs and other Monsters (special edition of Scientific American 14(2):) Scientific American, New York, OCLC 60524033"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roy_Chapman_Andrews",
        "situacao": "ok",
        "texto": "Roy Chapman Andrews (January 26, 1884 – March 11, 1960) was an American explorer, adventurer, and naturalist who became the director of the American Museum of Natural History. He led a series of expeditions through the politically disturbed Mongolia of the early 20th century into the Gobi Desert and Mongolia. The expeditions made important discoveries and brought the first-known fossil dinosaur eg\n[…]\nIn 1913, he sailed aboard the schooner Adventuress with owner John Borden to the Arctic. They were hoping to obtain a bowhead whale specimen for the American Museum of Natural History. On this expedition, he filmed some of the best footage of seals ever seen, though did not succeed in acquiring a whale specimen.\n[…]\nIn 1920, Andrews began planning for expeditions to Mongolia and drove a fleet of Dodge cars westward from Peking. In 1922, the party discovered a fossil of Paraceratherium (then named \"Baluchitherium\"), a gigantic hornless rhinocerotoid, which was sent back to the museum, arriving on December 19. The fossil species Andrewsarchus was named after him.\n[…]\nHe had an accidental injury to his foot when his collecting pistol went off. Andrews' account of these expeditions can be found in his book The New Conquest of Central Asia.\n[…]\n(Sixty years after Andrews' initial expedition, the American Museum of Natural History sent a new expedition to Mongolia on the invitation of its government to continue exploration.) Later that year, Andrews returned to the United States and divorced his wife, with whom he had two sons. He married his second wife, Wilhelmina Christmas, in 1935.\n[…]\nQuest in the Desert (1950)\n[…]\nCharles Gallenkamp: Dragon Hunter: Roy Chapman Andrews and the Central Asiatic Expeditions. (New York: Viking, 2001).\n[…]\nAlonzo W. Pond: Andrews: Gobi Explorer. (New York: Grosset & Dunlap, 1972).\n[…]\n1929 Popular Mechanics article about Andrews expedition to Mongolia"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Baía de Ha Long",
      "descricao": "Baía do norte do Vietnã com milhares de ilhotas e torres de calcário que saem do mar."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As milhares de ilhotas e torres de pedra que saem do mar na Baía de Ha Long, no Vietnã, são feitas de qual rocha?",
    "resposta": "Calcário",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ha_Long_Bay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ha_Long_Bay",
        "situacao": "ok",
        "texto": "Hạ Long Bay or Halong Bay (Vietnamese: Vịnh Hạ Long, pronounced [vînˀ hâːˀ lawŋm] ) is a bay located in Northeastern Vietnam, administered by the city of Quảng Ninh. The name Hạ Long means \"descending dragon\". It features thousands of limestone karsts and islets in various shapes and sizes, for which it is listed as a UNESCO World Heritage Site and a popular travel destination.\n[…]\nIn 1962, the Vietnam Ministry of Culture, Sport and Tourism designated Hạ Long Bay a 'Renowned National Landscape Monument'.\n[…]\nIn writings about Hạ Long Bay, the following Vietnamese writers wrote:\n[…]\nHa Long, Hai Phong, and Hanoi are significant urban centers driving the economic development in northern Vietnam. The economic growth in these urban areas, coupled with the rapid rise of the southern regions in China, including Hong Kong, have led to increasing human pressures on Ha Long Bay. The coastal areas of Quang Ninh province and Hai Phong City have experienced rapid growth in infrastructure development, particularly in transportation, shipping, coal mining, and tourism-related industries.\n[…]\nOn another aspect, global climate change with rising sea levels will strongly impact the landscape, island systems, caves, and biodiversity of Ha Long Bay. Vietnam currently lacks the necessary human and material resources to adequately respond to these challenges.\n[…]\nSome experts suggest considering the expansion of the conservation area, not only limiting it to the small area of Ha Long Bay but also encompassing the surrounding sea area, including the areas close to the Vietnam–China border. With a length of about 300 km and a width of about 60 km, the entire area can be seen and conserved as a unique marine ecosystem of Vietnam.\n[…]\nEnvironmental capacity Hạ Long Bay – Bai Tu Long. Publisher: Natural Science and Technology. Hanoi. Editor: Nguyen Khoa Son, ISBN 978-604-913-063-2 – in Vietnamese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ba%C3%ADa_de_Ha_Long",
        "situacao": "ok",
        "texto": "A Baía de Ha Long ou Baía de Alongues (em português:\"Onde o Dragão entra no Oceano\"), com cerca de 1.969 ilhotas de calcário que se elevam das águas, é a mais conhecida baía do Vietname. A maior parte das ilhas não está habitada nem afectada pela presença humana. A beleza cénica do sítio é complementada pelo seu interesse biológico. As ilhas tem um número infinito de praias, grutas e cavernas.\n[…]\nDe acordo com a lenda, quando um grande dragão que vivia nas montanhas correu até ao mar, a sua cauda cavou vales que mais tarde foram enchidos com água, deixando apenas pedaços de terra à superfície, ou seja, as inúmeras ilhas que se avistam na baía. A Baía de Ha Long foi declarada Património Mundial da UNESCO em 1993.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Parque Nacional da Chapada dos Guimarães",
      "descricao": "Parque nacional de chapadas, cânions e cachoeiras perto de Cuiabá, em Mato Grosso."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em Mato Grosso, que cachoeira, com nome de parte do traje de casamento, é o cartão-postal da Chapada dos Guimarães?",
    "resposta": "Véu de Noiva",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Chapada_dos_Guimarães"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Chapada_dos_Guimarães",
        "situacao": "ok",
        "texto": "Parque Nacional da Chapada dos Guimarães é uma unidade de conservação brasileira, situada no estado de Mato Grosso, nos municípios de Chapada dos Guimarães e Cuiabá, que recebeu a guarida federal através do Decreto 97.656, de 12 de abril de 1989. Possui uma área total de 33 mil hectares. É administrado pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio).\n[…]\nEm fevereiro de 1986, uma campanha nacional foi lançada por ONGs para pedir ao presidente José Sarney que criasse o parque nacional.\n[…]\nO parque foi finalmente criado em 12 de abril de 1989 pela Lei 97.656, com 32.630 hectares (80.600 acres). Encontra-se nos municípios de Cuiabá e Chapada dos Guimarães. O objetivo é proteger amostras significativas dos ecossistemas locais e garantir a preservação de sítios naturais e arqueológicos, apoiando o uso apropriado para visitas, educação e pesquisa.\n[…]\nO parque fica na Reserva da Biosfera do Pantanal, que também inclui os parques nacionais Pantanal, Emas e Serra da Bodoquena, além dos parques estaduais da Serra de Santa Bárbara, das Nascentes do Rio Taquari e do Pantanal do Rio Negro. O parque fica na bacia do rio Paraguai, protegendo as cabeceiras do rio Cuiabá, um dos principais alimentadores do Pantanal mato-grossense.\n[…]\nO centro geográfico da América do Sul, anteriormente considerado na cidade de Cuiabá (onde está marcado por um obelisco de mármore branco), está de fato localizado no parque perto da cidade de Chapada dos Guimarães, no Mirante de Geodésia.\n[…]\nLista de parques nacionais do Brasil\n[…]\nCachoeira Véu de Noiva (Mato Grosso)\n[…]\nPlano de Manejo do Parque Nacional da Chapada dos Guimarães"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Monte Erebus",
      "descricao": "Vulcão ativo na Ilha de Ross, na Antártida."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Vulcão ativo da Antártida, o Monte Erebus guarda na sua cratera algo raro no planeta. O quê?",
    "resposta": "Um lago de lava",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Erebus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Erebus",
        "situacao": "ok",
        "texto": "Mount Erebus () is the southernmost active volcano on Earth, located on Ross Island in the Ross Dependency in Antarctica. With a summit elevation of 3,792 metres (12,441 ft), it is the second most prominent mountain in Antarctica (after Mount Vinson) and the second-highest volcano in Antarctica (after the dormant Mount Sidley). It is the highest point on Ross Island, which is also home to three in\n[…]\nThe mountain was named by Captain James Clark Ross in 1841 for his ship, HMS Erebus. The volcano has been active for around 1.3 million years and has a long-lived lava lake in its inner summit crater that has been present since at least the early 1970s. On 28 November 1979, Air New Zealand Flight 901 crashed on Mount Erebus, killing all 257 people on board.\n[…]\nMount Erebus is the world's southernmost active volcano. It is the current eruptive centre of the Erebus hotspot. The summit contains a persistent convecting phonolitic lava lake, one of five long-lasting lava lakes on Earth. Characteristic eruptive activity consists of Strombolian eruptions from the lava lake or from one of several subsidiary vents, all within the volcano's inner crater.\n[…]\nResearchers spent more than three months during the 2007–08 field season installing an atypically dense array of seismometers around Mount Erebus to listen to waves of energy generated by small, controlled blasts from explosives they buried along its flanks and perimeter, and to record scattered seismic signals generated by lava lake eruptions and local ice quakes.\n[…]\nInner Crater, which lies within Main Crater, contains an anorthoclase-phonolite lava lake.\n[…]\nInner Crater contains an active anorthoclase-phonolite lava lake.\n[…]\nA prominent outcropping of jumbled rocks,  3,633 metres (11,919 ft) high, formed as a lava flow on the northwest upper slope of the active cone of Mount Erebus.\n[…]\nA picture from space of the lava lake at the summit of Mount Erebus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_%C3%89rebo",
        "situacao": "ok",
        "texto": "O monte Érebo ou monte Erebus é um estratovulcão que se localiza na Antártida, na ilha de Ross. Tem quase 3 800 metros de altitude e continua ativo continuamente desde 1972 (é o vulcão ativo mais meridional da Terra). Liberta vários jatos de vapor. Já foram encontrados vestígios de lava no gelo da ilha de Ross.\n[…]\nO monte Érebo foi descoberto em 1841 pelo explorador polar sir James Clark Ross que lhe deu o nome, bem como ao monte Terror. Érebo e Terror eram os nomes dos navios que Ross levou para os mares austrais. Érebo era um deus grego primordial, filho de Caos.\n[…]\nO monte Érebo é atualmente o mais ativo vulcão da Antártida. O cume contém um lago de lava permanente que regista diariamente erupções estrombolianas. Em 2005, pequenas erupções de cinza e um pequeno fluxo de lava foram observados escorrendo do lago de lava.\n[…]\nNo dia 28 de novembro de 1979 o Voo Air New Zealand 901, fretado para observação aérea na Antártida, saído do Aeroporto de Auckland, na Nova Zelândia, terminou quando o avião colidiu com o monte, matando todas as 257 pessoas a bordo, sendo 237 passageiros e 20 tripulantes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Torre do Diabo",
      "descricao": "Grande rochedo de colunas de rocha ígnea no nordeste do Wyoming, nos Estados Unidos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em 1906, a Torre do Diabo, no Wyoming, tornou-se o primeiro lugar dos Estados Unidos a receber qual título de proteção?",
    "resposta": "Monumento nacional",
    "fonte": [
      "https://en.wikipedia.org/wiki/Devils_Tower"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Devils_Tower",
        "situacao": "ok",
        "texto": "Devils Tower (also known as Matȟó Thípila or Bear Lodge) is a laccolithic butte, composed of igneous rock in the Bear Lodge Ranger District of the Black Hills, near Hulett and Sundance in Crook County, northeastern Wyoming, above the Belle Fourche River. It rises 1,267 feet (386 m) above the Belle Fourche River, standing 867 ft (264 m) from summit to base. The summit is 5,112 ft (1,558 m) above se\n[…]\nDevils Tower National Monument was the first United States national monument, established on September 24, 1906, by President Theodore Roosevelt. The monument's boundary encloses an area of 1,347 acres (545 ha).\n[…]\nforest reserve in 1892, and in 1906, Devils Tower became the nation's first national monument.\n[…]\nAs of 1994, climbing Devils Tower had increased in popularity. About 1.3% of the monument's 400,000 annual visitors climbed Devils Tower, mostly using traditional climbing techniques. The first known ascent of Devils Tower by any method occurred on July 4, 1893, and is credited to William Rogers and Willard Ripley, local ranchers in the area. They completed this first ascent after constructing a ladder of wooden pegs driven into cracks in the rock face.\n[…]\nA few of these wooden pegs are still intact and are visible on the tower when hiked along the 1.3-mile (2.1 km) Tower Trail at Devils Tower National Monument. Over the following 30 years, many climbs were made by this ladder before it fell into disrepair.\n[…]\nA compromise eventually reached enacted a voluntary climbing ban during June, when the tribes conduct ceremonies around the monument and climbers are asked, but not required, to stay off the tower.\n[…]\nDevils Tower National Monument protects many species of wildlife, such as white-tailed deer, prairie dogs, and bald eagles.\n[…]\nFour areas of Devils Tower National Monument are on the National Register of Historic Places:\n[…]\nTower Ladder\n[…]\nDevils Tower National Monument – National Park Service"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_do_Diabo",
        "situacao": "ok",
        "texto": "A Devils Tower (em português Torre do Diabo) é um lacólito colunar, com topo relativamente plano, que possui 275 metros de altura. Localiza-se na região nordeste do estado de Wyoming, nos Estados Unidos e se destaca do relevo ao seu redor. É composicionalmente similar à rocha fonólito.\n[…]\nMuitas tribos ameríndias (Arapahos, Crows, Cheyennes, Kiowas, Lakotas e Shoshones) têm laços culturais com este monólito muito anteriores à chegada dos europeus e dos primeiros imigrantes. Vários nomes foram dados ao monólito pelas várias tribos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Pedra da Gávea",
      "descricao": "Monólito de granito e gnaisse à beira-mar, entre São Conrado e a Barra da Tijuca, no Rio de Janeiro."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Vista de certo ângulo, uma das faces da Pedra da Gávea, no Rio de Janeiro, tem uma forma que lembra o quê?",
    "resposta": "Um rosto humano",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pedra_da_Gávea",
      "https://en.wikipedia.org/wiki/Pedra_da_G%C3%A1vea"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_da_Gávea",
        "situacao": "ok",
        "texto": "Pedra da Gávea é uma montanha monolítica na Floresta da Tijuca, no Rio de Janeiro, Brasil. Composta por granito e gneisse, a sua altitude é de 842 metros, tornando-se uma das montanhas mais altas do mundo junto de margens oceânicas. As trilhas na montanha foram abertas pela população agrícola local em 1830; hoje, o local está sob a administração do Parque Nacional da Tijuca.\n[…]\nA meteorização diferenciada em um dos lados da rocha criou o que é descrito como um rosto humano estilizado. As marcas na outra face foram descritas como uma inscrição. Geólogos e cientistas estão quase de acordo de que a \"inscrição\" na verdade o resultado da erosão e que o \"rosto\" é um produto de pareidolia. Além disso, o consenso de arqueólogos e acadêmicos no Brasil é que a montanha não deve ser vista como um sítio arqueológico.\n[…]\nA zona de contato entre o granito superior e o gneisse inferior é sub-horizontal e semi-gradual. Os xenólitos de gneisse têm uma forma tabular, que sugere que foram pesadamente capturados do assoalho de uma câmara de magma pelo desprendimento térmico. Sugeriu-se que Pedra da Gávea \"corresponde ao fundo de uma câmara granítica de magma e a espessura original do corpo granítico era muito maior do que a exposição presente\".\n[…]\nAtualmente, no entanto, a maioria dos pesquisadores sugere que a inscrição e o \"rosto\" são meramente resultados do processo natural de erosão. Em meados da década de 1950, o Ministério da Educação e Saúde do Brasil negou que o local apresentasse qualquer tipo de escrita, declarando \"que o exame feito por geólogos havia provado ser nada mais do que o efeito da erosão do tempo o que parecia ser uma inscrição\".\n[…]\nA pedra da Gávea foi usada como cenário de vários filmes brasileiros. Em Roberto Carlos e o Diamante Cor-de-Rosa, a pedra era o túmulo de um rei fenício.\n[…]\n«Pedra da Gávea - Visit.Rio»\n[…]\n«Alma Carioca - História - Pedra da Gávea»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pedra_da_G%C3%A1vea",
        "situacao": "ok",
        "texto": "Pedra da Gávea is a monolithic mountain in Tijuca Forest, Rio de Janeiro, Brazil. Composed of granite and gneiss, its elevation is 844 metres (2,769 ft), making it one of the highest mountains in the world that ends directly in the ocean. Trails on the mountain were opened up by the local farming population in the early 19th century; today, the site is under the administration of the Tijuca Nation\n[…]\nThe mountain's name translates as Rock of the Topsail, and was given to it during the expedition of Captain Gaspar de Lemos, begun in 1501, and in which the Rio de Janeiro bay (today Guanabara Bay, but after which the city was named) also received its name. The mountain, one of the first in Brazil to be named in Portuguese, was named by the expedition's sailors, who compared its silhouette to that of the shape of a topsail of a carrack upon sighting it on January 1, 1502.\n[…]\nThat name in turn came to be given to the Gávea area of the city of Rio de Janeiro.\n[…]\nLocated in the Tijuca Range, Pedra da Gávea is 842 m (2,762 ft) tall, and is a granite dome. The flat top of the mountain is capped with a 150 m tall layer of granite, whereas underneath, the mound is made up of gneiss. The former dates to around 450 million years ago, whereas the latter dates to 600 million years.\n[…]\nIt has been suggested that Pedra da Gávea \"correspond[s] to the bottom of a granitic magma chamber and the original thickness of the granitic body was much larger than the present exposure.\" The granitic body of the Pedra da Gávea could also correspond to the eastern extension of the nearby Pedra Branca Granite Massif, according to Akihisa Motoki et al."
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Parque Nacional de Yellowstone",
      "descricao": "Parque nacional nos Estados Unidos, sobre um grande sistema vulcânico, famoso por gêiseres e fontes termais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Debaixo do Parque de Yellowstone há uma enorme caldeira, capaz de erupções gigantescas. Que tipo de vulcão é esse?",
    "resposta": "Supervulcão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yellowstone_Caldera"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yellowstone_Caldera",
        "situacao": "ok",
        "texto": "The Yellowstone Caldera, also known as the Yellowstone Plateau Volcanic Field, is a Quaternary volcanic field, caldera complex, and volcanic plateau spanning parts of Wyoming, Idaho, and Montana. It is driven by the Yellowstone hotspot and lies largely within Yellowstone National Park.\n[…]\nVazquez, J. A.; Reid, M. R. (2002). \"Time scales of magma storage and differentiation of voluminous rhyolites at Yellowstone caldera\". Contributions to Mineralogy and Petrology. 144 (3). Wyoming: 274–285. Bibcode:2002CoMP..144..274V. doi:10.1007/s00410-002-0400-7. S2CID 109927088.\n[…]\nMedia related to Yellowstone Caldera at Wikimedia Commons\n[…]\nThe Snake River Plain and the Yellowstone Hot Spot\n[…]\nUSGS Yellowstone Volcano Observatory\n[…]\nFAQ relating to the supervolcano. Archived April 20, 2012, at the Wayback Machine\n[…]\nSupervolcano documentary from BBC\n[…]\nInteractive: When Yellowstone Explodes. Archived July 5, 2011, at the Wayback Machine from National Geographic\n[…]\nCanales, Manuel; Chung, Daisy; Santamarina, Daniela; Paniagua, Ronald; Preppernau, Charles; Canellas, Hernan; Umentum, Andrew; Conant, Eve; Sickley, Theodore A. (May 2016). \"Inside Yellowstone's Supervolcano\". National Geographic. National Geographic Society. Archived from the original on April 16, 2016. Retrieved April 5, 2018.{{cite web}}:  CS1 maint: bot: original URL status unknown (link)\n[…]\nHuang, Hsin-Hua; Lin, Fan-Chi; Schmandt, Brandon; Farrell, Jamie; Smith, Robert B.; Tsai, Victor C. (2015). \"The Yellowstone magmatic system from the mantle plume to the upper crust\". Science. 348 (6236): 773–776. Bibcode:2015Sci...348..773H. doi:10.1126/science.aaa5648. PMID 25908659. (46,000 km3 magma reservoir below chamber)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caldeira_de_Yellowstone",
        "situacao": "ok",
        "texto": "A Caldeira de Yellowstone é uma caldeira vulcânica situada no Parque Nacional de Yellowstone, no estado do Wyoming, nos Estados Unidos, por vezes designada como Supervulcão de Yellowstone.\n[…]\nYellowstone é considerado um supervulcão, pois uma possível erupção sua poderia durar semanas provocando efeitos globais, que persistiriam por meses ou até por anos. Sua cratera tem 90 quilômetros de extensão, e sua caldeira é 40 vezes maior do que a do Monte Santa Helena, sendo que boa parte de seu magma é eruptivo.\n[…]\nO vulcão e sua caldeira situam-se no Parque Nacional de Yellowstone, que ocupa grande parte da região noroeste no Wyoming, além de pequenas partes dos estados de Idaho e Montana, nos Estados Unidos da América.\n[…]\nO termo vagamente definido \"supervulcão\" foi usado para descrever campos vulcânicos que produzem erupções vulcânicas excepcionalmente grandes. Assim definido, o Supervulcão de Yellowstone é o campo vulcânico que produziu as últimas três supererupções do ponto quente de Yellowstone; também produziu uma erupção menor adicional, criando o West Thumb Lake há 174 mil anos.\n[…]\nErupções não explosivas de lava e erupções explosivas menos violentas ocorreram na caldeira de Yellowstone e perto dela desde a última supererupção. O fluxo de lava mais recente ocorreu há cerca de 70 mil anos, enquanto uma erupção violenta escavou o lado oeste do Lago Yellowstone há cerca de 150 mil anos. Explosões de vapor menores também ocorrem: uma explosão de há 13 800 anos deixou uma cratera de 5 km de diâmetro em Mary Bay, na margem do Lago Yellowstone (localizado no centro da caldeira).\n[…]\nCaldeira\n[…]\nVulcão\n[…]\nYellowstone Volcano Observatory",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Pedra-pomes",
      "descricao": "Rocha vulcânica clara e porosa, formada por lava resfriada cheia de bolhas de gás."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Formada por lava cheia de bolhas de gás, a pedra-pomes tem uma propriedade rara entre as rochas. Qual?",
    "resposta": "Flutua na água",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pumice",
      "https://pt.wikipedia.org/wiki/Pedra-pomes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pumice",
        "situacao": "ok",
        "texto": "Pumice ( ), called pumicite in its powdered or dust form, is a volcanic rock that consists of extremely vesicular rough-textured volcanic glass, which may or may not contain crystals. It is typically light-colored. Scoria is another vesicular volcanic rock that differs from pumice in having larger vesicles, thicker vesicle walls, and being dark-colored and denser.\n[…]\nPumice is created when super-heated, highly pressurized rock is rapidly ejected from a volcano. The unusual foamy configuration of pumice happens because of simultaneous rapid cooling and rapid depressurization. The depressurization creates bubbles by lowering the solubility of gases (including water and CO2) that are dissolved in the lava, causing the gases to rapidly exsolve (like the bubbles of CO2 that appear when a carbonated drink is opened).\n[…]\nFinely ground pumice has been added to some toothpastes as a polish, similar to Roman use, and easily removes dental plaque build-up. Such toothpaste is too abrasive for daily use. Pumice is also added to heavy-duty hand cleaners (such as lava soap) as a mild abrasive. Some brands of chinchilla dust bath are formulated with powdered pumice. Old beauty techniques using pumice are still employed today but newer substitutes are easier to obtain.\n[…]\nPumice rock fragments are inorganic therefore no decomposition and little compaction occur.\n[…]\nUniversity of Oxford image of pumice. Retrieved 27 September 2010.\n[…]\nBathrellos, George; Vasilatos, Charalampos; Skilodimou, Hariklia; Stamatakis, Michael (2009). \"On the occurrence of a pumice-rich layer in Holocene deposits of western Peloponnesus, Ionian Sea, Greece. A geomorphological and geochemical approach\". Open Geosciences. 1 (1): 19. Bibcode:2009CEJG....1...19B. doi:10.2478/v10085-009-0006-7.\n[…]\nHess Pumice Archived 14 March 2020 at the Wayback Machine – White papers and technical info of pumice."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra-pomes",
        "situacao": "ok",
        "texto": "Pedra-pomes (do lat. pūmex, pūmicis m.), ou púmice, é uma rocha vulcânica produzida quando na fase de ejecção os gases contidos na lava formam um coloide com os materiais em fusão. Por arrefecimento, este coloide, uma verdadeira espuma de rocha em fusão, solidifica sob a forma de uma rocha vítrea esponjosa de muito baixa densidade, com superfície áspera e abrasiva e textura profusamente vesicular \n[…]\nA cor das pedras-pomes vai desde o branco ao negro azulado, passando pelo avermelhado e pelo amarelo vivo. Contudo, como regra, quanto mais félsica a lava, isto é, quanto mais rica em sílica, mais clara e leve é a pedra-pomes formada. Erupções traquíticas tendem a produzir pedra-pomes branca ou amarelada de muito baixa densidade (flutua na água, o que torna as formações deste tipo fortemente susceptíveis à erosão).\n[…]\nDada a sua baixa densidade, a pedra-pomes flutua, sendo comum o aparecimento de massas de pedra-pomes flutuante após erupções vulcânicas ou em consequência de movimentos de massa, em geral produzidos pela erosão marinha, que provoquem o desabamento de depósitos piroclásticos constituídos por pomes para o mar ou para os cursos de água.\n[…]\nA pedra-pomes tem uma porosidade média de 90%, pelo que inicialmente flutua na água.\n[…]\nOs materiais pomíticos variam em densidade em função da espessura do material sólido que forma a parede da bolhas, sendo que na maioria dos casos tem densidade inferior à da água.\n[…]\nA escória vulcânica difere da pedra-pomes por ser mais densa. As vesículas muito maiores, geralmente macroscópicas, e as paredes muito mais espessas levam a densidades muito maiores do que as que ocorrem nos materiais pomíticos, o que impede a flutuação em água. Esta diferença resulta da menor viscosidade da lava, a qual permite a libertação de boa parte dos gases e dificulta a formação da estrutura coloidal subjacente à formação das verdadeiras rochas pomíticas."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Obsidiana",
      "descricao": "Rocha vulcânica escura e cortante, formada pelo resfriamento muito rápido da lava."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A obsidiana, rocha vulcânica escura usada pelos astecas para fazer lâminas, é na verdade um tipo natural de quê?",
    "resposta": "Vidro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Obsidian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Obsidian",
        "situacao": "ok",
        "texto": "Obsidian (, əb-SID-ee-ən ob-) is a naturally occurring volcanic glass formed when lava extruded from a volcano cools rapidly with minimal crystal growth. It is an igneous rock. Produced from felsic lava, obsidian is rich in the lighter elements such as silicon, oxygen, aluminium, sodium, and potassium. It is commonly found within the margins of rhyolitic lava flows known as obsidian flows. These f\n[…]\nThe Natural History by the Roman writer Pliny the Elder includes a few sentences about a volcanic glass called obsidian (lapis obsidianus), discovered in Ethiopia by Obsidius, a Roman explorer.\n[…]\nObsidian was valued in Stone Age cultures because, like flint, it could be fractured to produce sharp blades or arrowheads in a process called knapping. Like all glass and some other naturally occurring rocks, obsidian breaks with a characteristic conchoidal fracture. It was also polished to create early mirrors. Modern archaeologists have developed a relative dating system, obsidian hydration dating, to calculate the age of obsidian artifacts.\n[…]\nObsidian tools found in Mission Santa Clara have shown the existence of exchange networks between various tribes in California.\n[…]\nObsidian can be used to make extremely sharp knives, and obsidian blades are a type of glass knife made using naturally occurring obsidian instead of manufactured glass. Obsidian is used by some surgeons for scalpel blades, although this is not approved by the US Food and Drug Administration (FDA) for use on humans.\n[…]\nPlinths for audio turntables have been made of obsidian since the 1970s, such as the grayish-black SH-10B3 plinth by Technics.\n[…]\nMayor Island / Tūhua – New Zealand shield volcano – a source of Māori obsidian tools\n[…]\nYaxchilan Lintel 24 – Ancient Maya limestone relief from Mexico – Ancient carving showing a Maya bloodlet ritual involving a rope with obsidian shards.\n[…]\nUSGS definition of obsidian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Obsidiana",
        "situacao": "ok",
        "texto": "Obsidiana é uma rocha ígnea extrusiva constituída quase integralmente por um tipo de vidro vulcânico com 70% ou mais de sílica (SiO2 - dióxido de silício) na sua composição química. Forma-se quando uma lava de composição félsica e baixo teor em água (menos que 2-3% mássicos) arrefece rapidamente sem permitir a formação de cristais em quantidade substancial.\n[…]\nA natureza vítrea da obsidiana, na essência um sólido amorfo, ou seja um vidro, confere a esta rocha uma elevada dureza (5-6  na escala de Mohs) e fragilidade, pelo que fractura na forma concoide, produzindo lâminas com gume muito afiado.\n[…]\nEste texto de Plínio, o Velho, estabelece a etimologia do nome «obsidiana», assim designada por se assemelhar ao vidro vulcânico encontrado na Etiópia por Obsius, um explorador romano, a que fora dado o nome de obsiānus lapis, em honra do seu descobridor.\n[…]\nA obsidiana é um material semelhante a um mineral, ou seja um mineraloide, mas não um verdadeiro mineral pois, por ser um vidro, isto é um sólido amorfo, não cumpre um dos requisitos essenciais dos minerais que é serem cristalinos. Para além disso, a sua composição química é demasiado complexa para que pudesse constituir um único mineral.\n[…]\nA obsidiana pura tem em geral uma coloração escura, mas a cor varia em consequência da presença de impurezas. Ferro e magnésio tipicamente dão à obsidiana uma coloração negra ou castanho escuro. São conhecidas algumas raras ocorrências de obsidiana quase incolor. Em algumas rochas, a inclusão de pequenos cristais brancos de cristobalite, forma aglomerados radiais no seio do vidro negro que produzem um padrão de manchas, por vezes em forma de floco de neve (obsidiana floco de neve).\n[…]\nEspelhos nas culturas mesoamericanas – o espelho de obsidiana possuía significados rituais principalmente entre os astecas\n[…]\nVidro do deserto da Líbia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Areias monazíticas de Guarapari",
      "descricao": "Areias escuras e radioativas das praias de Guarapari, no litoral do Espírito Santo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Muitos turistas visitam as praias de areia escura de Guarapari, no Espírito Santo, atraídos por uma propriedade incomum dessa areia. Qual?",
    "resposta": "É radioativa",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Guarapari",
      "https://en.wikipedia.org/wiki/Guarapari"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Guarapari",
        "situacao": "ok",
        "texto": "Guarapari é um município brasileiro no litoral do estado do Espírito Santo, Região Sudeste do país. Localiza-se na Região Metropolitana de Vitória, estando situado a cerca de 50 km a sul da capital capixaba. Ocupa uma área de aproximadamente 590 km², sendo que 33 km² estão em área urbana, e sua população foi estimada em 137 659 habitantes em julho de 2026, sendo então o sétimo mais populoso do est\n[…]\nGuarapari é um destino turístico popular, sendo conhecido por suas praias, como a de Meaípe, famosa pelo alto nível de radioatividade natural de sua areia e suas qualidades terapêuticas.\n[…]\nEm meados dos anos 1960 e 1970, Guarapari tornou-se nacionalmente famosa em decorrência das propriedades pretensamente medicinais de suas areias monazíticas. Por este motivo, houve uma onda turística crescente em torno da cidade.\n[…]\nAs praias de Guarapari são famosas por possuírem um nível alto de radioatividade natural, proveniente das chamadas areias monazíticas, ricas nos elementos urânio e tório. Em alguns pontos das praias foram registradas leituras de até  20μSv/h (175 mSv por ano), uma dose equivalente à que seria recebida ao se tirar uma radiografia de tórax a cada cinco horas.\n[…]\nGuarapari é um dos principais destinos turísticos do Espírito Santo, conhecida por seu litoral, suas praias urbanas e áreas naturais. Segundo a Prefeitura Municipal, o município possui mais de 50 praias, incluindo locais como a Praia do Morro, a Praia da Areia Preta, Meaípe, Setiba, Enseada Azul e outras praias distribuídas ao longo da costa.\n[…]\nTrês Praias\n[…]\nCom faixas douradas e escuras, esta é a principal praia de areia monazítica de Guarapari. Além dos idosos que se enterram nas areias em busca de suas propriedades medicinais, muitos jovens frequentam o local. É pequena, com apenas 200 metros de extensão, e tem ondas fortes. Uma trilha sobre as pedras, no lado direito, leva à prainha das Pelotas, aos pés de uma falésia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Guarapari",
        "situacao": "ok",
        "texto": "Guarapari is a coastal town of Espírito Santo, Brazil, a popular tourist destination. Its beach is famous for the high natural radioactivity level of its sand.\n[…]\nAround the year 1000, the Indigenous people who occupied the southern coast of what is now the state of Espírito Santo were driven inland by the invasion of Tupi peoples from the Amazon. In the 16th century, when the first European explorers arrived in the region, it was inhabited by one of these Tupi peoples: the Temiminós.\n[…]\nIn the mid-1960s and 1970s, Guarapari became nationally famous due to the purported medicinal properties of its monazite sands. As a result, there was a growing tourist wave around the city.\n[…]\nThe city is served by Guarapari Airport.\n[…]\nAlong a roughly 500-mile (800 km) portion of Brazil's Atlantic coast that runs from north of Rio de Janeiro up to the region south of Bahia, the sands of old beaches are naturally radioactive. Sea waves pound coastal mountains rich in monazite, a phosphate of rare earth metals containing uranium and thorium. The background radiation level on some spots on the Guarapari beach read 175 mSv per year (20μSv/h); Some other spots can reach dosages of up to 55 μSv/h.\n[…]\nIn the Guarapari city, radiation levels are far lower: a study among 320 inhabitants showed an average received dose of 0.6 μSv/h, corresponding to 5.2 mSv per year.\n[…]\nGuarapari travel guide from Wikivoyage\n[…]\nGuiacapixaba.net: Guarapari\n[…]\nWebcitation.org: Guarapari Info—(in Portuguese)\n[…]\nGuarapari.tiosam.org: Guarapari — history and travel tips—(in Portuguese)\n[…]\nAgrogemeos.com: Google Map images of Guarapari Archived 2008-01-03 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Rub al-Khali",
      "descricao": "Grande deserto de areia no sul da Península Arábica, entre Arábia Saudita, Omã, Emirados e Iêmen."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O Rub al-Khali, imenso deserto de areia da Península Arábica, tem um nome árabe que significa o quê?",
    "resposta": "Quarto Vazio",
    "distratores": [
      "Mar de Areia",
      "Terra da Sede",
      "Lugar do Sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rub%27_al_Khali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rub%27_al_Khali",
        "situacao": "ok",
        "texto": "The Rub' al Khali (; Arabic: ٱلرُّبْع ٱلْخَالِي, lit. 'Empty Quarter', [ar.rʊbʕ‿al.χaːliː]) is a desert encompassing most of the southern third of the Arabian Peninsula. The desert covers some 650,000 km2 (250,000 sq mi), including parts of Saudi Arabia, Oman, the United Arab Emirates, and Yemen. It is part of the larger Arabian Desert.\n[…]\nFauna includes arachnids (e.g. scorpions) and rodents, while plants live throughout the Empty Quarter. The dromedary, or Arabian camel, is an important part of the fauna, with the black camels of Oman being a rare and prized breed. As an ecoregion, the Rub' al Khali falls within the Arabian Desert and East Saharo-Arabian xeric shrublands. The Asiatic cheetah, once widespread in Saudi Arabia, is extirpated.\n[…]\n'Uruq Bani Ma'arid, a protected area located at the western edge of the Empty Quarter, is the desert's most diverse region. It contains several species endemic to the Arabian Peninsula and was designated Saudi Arabia's first-ever Natural World Heritage site in 2023. The flora consists mostly of shrubs and small trees such as Acacias and white saxaul as well as sedges and other grasses. The wildlife includes arachnids, lizards (e.g.\n[…]\nIn 1999 Jamie Clarke became the first Westerner to cross the Empty Quarter of Arabia for 50 years. His team of six, guided by three Bedouins, spent 40 days crossing the desert with a caravan of 13 camels.\n[…]\nIn 2013 British adventurer Alistair Humphreys released his first documentary film, Into the Empty Quarter, documenting his walk through the Empty Quarter desert with Leon McCarron.\n[…]\nDewan Ruler's Representative for Western Region, Emirate of Abu Dhabi, recognized it as the world's first on-foot crossing of the Empty Quarter following the border of Oman and ending in UAE.\n[…]\nEmpty Quarter: Exploring Arabia's Sea of Sand, National Geographic (archived)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rubalcali",
        "situacao": "ok",
        "texto": "O Rubalcali (em árabe: الربع الخالي, lit. 'Rub' al-Khālī', lit.: 'o quarto vazio' ou 'a quarta parte vazia') é um dos maiores desertos do planeta e a maior área contínua de areia (erg) do mundo, ocupando a maior parte do terço sul da Península Arábica e abrangendo áreas da Arábia Saudita, de Omã, dos Emirados Árabes Unidos e do Iêmen. O deserto cobre cerca de 650 mil quilômetros quadrados e se loc\n[…]\nA região tem clima desértico típico do Deserto da Arábia, sendo classificada como de clima hiper-árido, com precipitações anuais médias inferiores a 30 mm. A temperatura máxima média é de 47°C, podendo chegar a 51°C.\n[…]\nA região também possui desertos de sal e sapais de areia movediça em algumas áreas, como o Umm al Samim, na extremidade leste do deserto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Monte Kosciuszko",
      "descricao": "Montanha dos Alpes Australianos, em Nova Gales do Sul, o ponto mais alto da Austrália continental."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A montanha mais alta da Austrália continental homenageia Tadeusz Kościuszko, herói nacional de qual país europeu?",
    "resposta": "Polônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Kosciuszko"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Kosciuszko",
        "situacao": "ok",
        "texto": "Mount Kosciuszko ( KOZ-ee-USK-oh; Polish pronunciation: [kɔɕˈt͡ɕuʂ.kɔ] kosh-CHOOSH-koh; Ngarigo: Kunama Namadgi) is the highest mountain of mainland Australia, at 2,228 metres (7,310 ft) above sea level. It is located on the Main Range of the Snowy Mountains in Kosciuszko National Park, a part of the Australian Alps National Parks and Reserves, in New South Wales, and is located west of Crackenbac\n[…]\nBased on Strzelecki’s records, Australia’s highest summit was mapped. A cartographical mistake made in an edition of Victorian maps transposed Mount Kosciusko to the position of the present Mount Townsend. Later editions of the map continued to show the original location. NSW maps did not make this mistake.\n[…]\nKosciuszko National Park is also the location of the downhill ski slopes closest to Canberra and Sydney, containing the Thredbo, Charlotte Pass, and Perisher ski resorts. Mount Kosciuszko may have been ascended by Indigenous Australians long before the first recorded ascent by Europeans.\n[…]\nHistorically, part of the island of New Guinea was administered by Australia from 1914 until 1975, including Mount Wilhelm (4,509 m or 14,793 ft), now the highest mountain in Papua New Guinea. On the Indonesian side of the border, Puncak Jaya, which stands at 4,884 m or 16,024 ft, is the highest mountain in the Australian continent as well as Oceania. Because of this, and due to the easy ascent of Kosciuszko, Jaya is normally the goal for climbers attempting the Seven Summits challenge.\n[…]\nThe 1863 picture by Eugene von Guerard hanging in the National Gallery of Australia titled Northeast view from the northern top of Mount Kosciusko is actually from Mount Townsend.\n[…]\nList of mountains of Australia\n[…]\nMt Kosciuszko Inc. — page for information about explorer P. E. Strzelecki – and news about Mount Kosciuszko\n[…]\n\"Mount Kosciuszko\". Peakware.com. Archived from the original on 4 March 2016. — photo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Kosciuszko",
        "situacao": "ok",
        "texto": "O Monte Kosciuszko, localizado nas Montanhas Nevadas, no Parque Nacional Kosciuszko, é o ponto mais alto da Austrália enquanto ilha. Note-se que a Austrália administra territórios com pontos de maior altitude, como a ilha Heard (pico Mawson, 2745 m, ou o Território Antárctico Australiano (monte McClintock, 3490 m). O seu nome foi dado em 1840 pelo explorador da Polónia, conde Paul Strzelecki, em h\n[…]\nA foto tirada por Eugene von Guerard que está na Galeria Nacional da Austrália intitulada \"Northeast view from the northern top of Mount Kosciusko\" (\"Vista nordeste do topo norte do monte Kosciuszko\" é, na verdade, do monte Townsend.).\n[…]\nO pico pode ser alcançado de Thredbo por uma maior, mas não tão difícil caminhada com auxílio de um teleférico. No topo do teleférico há uma trilha no meio da vegetação do Parque Nacional. É neste parque também onde está localizado a mais próxima pista de esqui de Sydney, contendo os Resorts de Esqui Thredbo e Perisher. O monte Kosciuszko pode ter sido escalado a primeira vez por aborígenes australianos bem antes dos primeiros europeus.\n[…]\nno Território Antártico da Austrália com o monte McClintock de 3490 m e o monte Menzies de 3355 m.\n[…]\nO norte-americano Dick Bass teria sido, em 30 de abril de 1985, o primeiro a escalar todos os picos mais altos de cada continente. A lista dele, no entanto, inclui o monte Kosciuszko, ponto culminante da Austrália, como se esse país fosse um continente, descartando qualquer outra montanha da Oceania.\n[…]\nNiclevicz teria completado os sete cumes escalando o Carstensz, em 1997. Entre os sul-americanos também o chileno Mauricio Purto teria alcançado a meta, em 1993, também escalando as seis montanhas mais o Carstensz, e não o monte Kosciuzko.\n[…]\nHomenagens a Tadeusz Kościuszko\n[…]\n«Mt Kosciuszko Inc – sítio do governo australiano sobre o monte» (em inglês e polaco)  - página para obter informações sobre os exploradores P.E Strzelecki",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Corcovado",
      "descricao": "Morro de granito no Rio de Janeiro, dentro do Parque Nacional da Tijuca, onde fica a estátua do Cristo Redentor."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do Corcovado, o morro do Cristo Redentor, no Rio de Janeiro, descreve o seu formato. Ele lembra o quê?",
    "resposta": "Uma corcunda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Corcovado",
      "https://en.wikipedia.org/wiki/Corcovado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Corcovado",
        "situacao": "ok",
        "texto": "O Corcovado é um dos morros da cidade do Rio de Janeiro, célebre no Brasil e no mundo pela sua estátua do Cristo Redentor de 38 metros de altura.\n[…]\nEntretanto, no século seguinte, o morro recebeu o nome de Corcovado em virtude ao seu formato curvo do morro, que lembra uma \"corcunda\" ou corcova. Nome este popularizado até os dias atuais. A palavra vem do Latim CONCURVARE, de COM-, “junto”, mais CURVARE, “dobrar, curvar, fazer uma saliência arredondada”; portanto, corcovado é “aquele que tem corcova”.\n[…]\nO Trem do Corcovado é uma linha férrea que começa no bairro do Cosme Velho e segue até o cume do morro do Corcovado, a uma altitude de 710 m. A linha foi inaugurada pelo imperador Dom Pedro II em 9 de outubro de 1884. É, portanto, mais antigo que o monumento do Cristo Redentor, que foi aberto a visitação em 1931. De fato, as peças para a montagem da estátua do Cristo foram transportadas pelo próprio trem ao longo de quatro anos.\n[…]\nPor ser uma rocha dura, difícil de ser desgastada pela chuva, vento etc., o Gnaisse Facoidal destaca-se como a parte mais alta do morro do Corcovado, assim como a maioria dos paredões rochosos da cidade do Rio de Janeiro. Este gnaisse foi, desde o século XVI, o preferido na construção de fortificações, monumentos e residências.\n[…]\nSem dúvida, a atração mais memorável do morro do Corcovado é a estátua do Cristo Redentor que o coroa e que atrai mais de 1 milhão visitantes brasileiros e do exterior ao ano. A estátua foi inaugurada em 12 de outubro de 1931.\n[…]\nCristo Redentor\n[…]\nTurismo no Rio de Janeiro\n[…]\nCorcovado - TripAdvisor\n[…]\n«Cristo Redentor»\n[…]\n«Trem do Corcovado»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Corcovado",
        "situacao": "ok",
        "texto": "Corcovado (Brazilian Portuguese pronunciation: [koʁkoˈvadu]; meaning \"Hunchback\") is a mountain in central Rio de Janeiro, Brazil. It is a 710-metre (2,330-foot) granite peak located in the Tijuca Forest, a national park.\n[…]\nCorcovado hill lies just west of the city center but is wholly within the city limits and visible from great distances. It is known worldwide for the statue of Jesus atop its peak, entitled Christ the Redeemer.\n[…]\nFrom the train terminus and road, the observation deck at the foot of the statue is reached by 223 steps, or by elevators and escalators. Among the most popular year-round tourist attractions in Rio de Janeiro, the Corcovado railway, access roads, and statue platform are commonly crowded.\n[…]\nCorcovado's most popular attraction is the 38-metre (125 ft) statue depicting Jesus at its peak, entitled Christ the Redeemer (Portuguese: Cristo Redentor), and the viewing platform at its peak, drawing over 300,000 visitors per year. The statue was constructed from 1922 to 1931. From the peak's platform the panoramic view includes downtown Rio de Janeiro, Sugarloaf Mountain, the Rodrigo de Freitas lagoon, Copacabana and Ipanema beaches, Maracanã Stadium, and several of Rio de Janeiro's favelas.\n[…]\nThe peak of Corcovado is a big granite dome, which describes a generally vertical rocky formation. It is claimed to be the highest such formation in Brazil, the second highest being Pedra Agulha, situated near the town of Pancas in Espírito Santo.\n[…]\nMedia related to Corcovado at Wikimedia Commons\n[…]\n'back to Rio'. RGSSA blog post contains image of Corcovada taken in 1914\n[…]\nPractical information about Corcovado mountain on WikiRio\n[…]\nVirtual Pictour up the Corcovado Mountain"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Geysir",
      "descricao": "Fonte termal eruptiva no vale de Haukadalur, no sudoeste da Islândia, que deu nome a todos os gêiseres."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra gêiser, usada no mundo todo, vem do nome de uma fonte termal de qual país?",
    "resposta": "Islândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Geysir"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Geysir",
        "situacao": "ok",
        "texto": "Geysir (Icelandic pronunciation: [ˈceiːsɪr̥] ), sometimes known as The Great Geysir, is a geyser in south-western Iceland that geological studies suggest started forming about 1150 CE. The English word geyser (a periodically spouting hot spring) derives from Geysir. The name itself comes from the Icelandic verb geysa (\"to gush\"). Geysir lies in the Haukadalur valley on the slopes of Laugarfjall la\n[…]\nStrokkur's conduit has also been mapped in detail and is pipe shaped to 8 m (26 ft), where it narrows before expanding into a cavity at about 11 m (36 ft) before narrowing again into a fracture configuration at about 13 m (43 ft) where temperatures become close to the boiling point. Strokkur's activity has also been affected by earthquakes, although to a lesser extent than the Great Geysir.\n[…]\nDescriptions of the Great Geysir and Strokkur have been given in many travel guides to Iceland published from the 18th century onwards. Together with Þingvellir and the Gullfoss waterfall, they are part of the Golden Circle, the most famous tourist route in the country.\n[…]\nJones, B.; Renaut, R.W. (2021). \"Multifaceted incremental growth of a geyser discharge apron – Evidence from Geysir, Haukadalur, Iceland\". Sedimentary Geology. 419 105905. doi:10.1016/j.sedgeo.2021.105905. ISSN 0037-0738.\n[…]\nStefánsson, R.; Guðmundsson, G.B.; Halldórsson, P. (2000). The two large earthquakes in the South Iceland seismic zone on June 17 and 21, 2000. Veðurstofa Íslands (PDF) (Report). Archived from the original (PDF) on 25 January 2022. Retrieved 3 February 2024.\n[…]\nThe Great Geysir, Helgi Torfason of the Icelandic National Energy Authority, 1985 (no ISBN, but book available from the Geysir tourist center).\n[…]\nMedia related to Great Geysir at Wikimedia Commons\n[…]\nInformation and photos of Geysir and the geothermal area\n[…]\n\"Geysir\". Global Volcanism Program. Smithsonian Institution. Retrieved 25 June 2021."
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
    "indice": 32,
    "ancora": {
      "nome": "Monte Kilimanjaro",
      "descricao": "Montanha isolada no nordeste da Tanzânia, o ponto mais alto da África."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O cume mais alto do Kilimanjaro chama-se Uhuru, palavra suaíli escolhida para celebrar a independência da Tanganica. O que ela significa?",
    "resposta": "Liberdade",
    "fonte": [
      "https://en.wikipedia.org/wiki/Uhuru_Peak",
      "https://en.wikipedia.org/wiki/Mount_Kilimanjaro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uhuru_Peak",
        "situacao": "ok",
        "texto": "Mount Kilimanjaro () is a large dormant stratovolcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m (19,341 ft) above sea level and 4,900 m (16,100 ft) above its plateau base. It is also the highest volcano in the Eastern Hemisphere and the fourth most prominent peak on Earth.\n[…]\nThe volcanic interior of Kilimanjaro is poorly known because there has not been any significant erosion to expose the igneous strata that comprise the volcano's structure.\n[…]\nKibo's ice cap exists because Kilimanjaro is a little-dissected, massive mountain that rises above the snow line. The cap is divergent and at the edges splits into individual glaciers. The central portion of the ice cap is interrupted by the presence of the Kibo crater. The summit glaciers and ice fields do not display significant horizontal movements because their low thickness precludes major deformation.\n[…]\nTechnical climbing routes are available on the Mawenzi cone of Mount Kilimanjaro. Unlike the traditional routes to Uhuru Peak on Kibo, which are open to the general public, climbing Mawenzi requires a special permit from the Tanzania National Parks Authority. These permits are issued exclusively to experienced climbers with appropriate equipment. Climbing on Mawenzi is limited to a maximum of two climbers at a time and is restricted to daytime hours.\n[…]\nThe oldest person to climb Mount Kilimanjaro is Anne Lorimor, aged 89 years and 37 days, who reached Uhuru Peak at 3:14 p.m. local time on 18 July 2019.\n[…]\n\"Kilimanjaro\". Global Volcanism Program. Smithsonian Institution. Retrieved 24 June 2021.\n[…]\nGlacial Recession on Kilimanjaro (pictures of southern icefields) Archived 15 February 2011 at the Wayback Machine\n[…]\nMount Kilimanjaro live webcam\n[…]\nKilimanjaro flora picture gallery\n[…]\nAerial photographs of Mount Kilimanjaro, 1937–38"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Kilimanjaro",
        "situacao": "ok",
        "texto": "Mount Kilimanjaro () is a large dormant stratovolcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m (19,341 ft) above sea level and 4,900 m (16,100 ft) above its plateau base. It is also the highest volcano in the Eastern Hemisphere and the fourth most prominent peak on Earth.\n[…]\nThe volcanic interior of Kilimanjaro is poorly known because there has not been any significant erosion to expose the igneous strata that comprise the volcano's structure.\n[…]\nKibo's ice cap exists because Kilimanjaro is a little-dissected, massive mountain that rises above the snow line. The cap is divergent and at the edges splits into individual glaciers. The central portion of the ice cap is interrupted by the presence of the Kibo crater. The summit glaciers and ice fields do not display significant horizontal movements because their low thickness precludes major deformation.\n[…]\nTechnical climbing routes are available on the Mawenzi cone of Mount Kilimanjaro. Unlike the traditional routes to Uhuru Peak on Kibo, which are open to the general public, climbing Mawenzi requires a special permit from the Tanzania National Parks Authority. These permits are issued exclusively to experienced climbers with appropriate equipment. Climbing on Mawenzi is limited to a maximum of two climbers at a time and is restricted to daytime hours.\n[…]\nThe oldest person to climb Mount Kilimanjaro is Anne Lorimor, aged 89 years and 37 days, who reached Uhuru Peak at 3:14 p.m. local time on 18 July 2019.\n[…]\n\"Kilimanjaro\". Global Volcanism Program. Smithsonian Institution. Retrieved 24 June 2021.\n[…]\nGlacial Recession on Kilimanjaro (pictures of southern icefields) Archived 15 February 2011 at the Wayback Machine\n[…]\nMount Kilimanjaro live webcam\n[…]\nKilimanjaro flora picture gallery\n[…]\nAerial photographs of Mount Kilimanjaro, 1937–38"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quilimanjaro",
        "situacao": "ok",
        "texto": "O Quilimanjaro ou Kilimanjaro (Oldoinyo Oibor, que significa montanha branca em massai, ou Kilima Njaro, montanha brilhante em suaíli) é um monte localizado no norte da Tanzânia, junto à fronteira com o Quénia. O Quilimanjaro é o ponto mais alto da África, com uma altura de 5 895 m no Pico Uhuru. É a montanha mais alta da África e a montanha independente mais alta do mundo acima do nível do mar (5\n[…]\nO Quilimanjaro é constituído por três cimos ou picos principais: o Shira, o Mawenzi (em chaga, Kimawenze ou Mavenge, que significa «cume dividido», cuja aparência deu origem a uma lenda local) e Kibo (em chaga, Kipoo ou Kiboo, que significa «manchado», por causa duma rocha escura que sobressai por entre as neves perenes, também chamado Kyamwi, «luminoso»). Neste último reside o ponto culminante do conjunto, o pico Uhuru (em suaíli, «liberdade»).\n[…]\nDesde o início do Quaternário, o hemisfério norte sofreu vinte e uma eras glaciares maiores, sentidas até na África Oriental. Os vestígios destes arrefecimentos climáticos na África Oriental são observados no Kilimanjaro, no monte Quénia, na cordilheira do Rwenzori e no monte Elgon. São todas bolsas isoladas de ecossistemas alpinos semelhantes, com uma fauna e uma flora idênticas. Isto significa que este ecossistema deve ter sido mais extenso, a baixa altitude, e cobrir cada uma destas montanhas.\n[…]\nA 9 de dezembro de 1961, a independência do Tanganica é proclamada. No mesmo dia, o bandeira do novo Estado é hasteada com uma tocha no cume e este é rebatizado pico Uhuru, o \"pico da liberdade\". Este símbolo, desejado pelo primeiro-ministro e futuro presidente Julius Nyerere, destina-se a marcar o fim das desigualdades raciais e a reapropriação desta figura da África.\n[…]\nJean Ferrat evoca o Kilimanjaro nestas palavras, num texto com o mesmo título, em 1985:\n[…]\nCitação: Dentro de uma década, não haverá mais neves no Kilimanjaro.\n[…]\nMonte Quénia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Planalto Tibetano",
      "descricao": "Vasto planalto de grande altitude na Ásia Central, ao norte do Himalaia, que ocupa o Tibete e regiões vizinhas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Com altitude média acima de quatro mil metros, o Planalto Tibetano ganhou qual apelido?",
    "resposta": "Teto do Mundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tibetan_Plateau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tibetan_Plateau",
        "situacao": "ok",
        "texto": "The Tibetan Plateau, also known as the Qinghai–Tibet Plateau, Qingzang Plateau, is a vast elevated plateau located at the intersection of Central, South, and East Asia. Geographically, Tibet is located to the north of the Himalayas and the Indian subcontinent, and to the south of the Tarim Basin and the Mongolian Plateau.\n[…]\nThe Tibetan Plateau's mean elevation continued to vary since its initial uplift in the Eocene; isotopic records show the plateau's altitude was around 3,000 metres above sea level around the Oligocene–Miocene boundary and that it fell by 900 metres between 25.5 and 21.6 Mya, attributable to tectonic unroofing from east–west extension or to erosion from weathering. The plateau subsequently rose by 500 to 1,000 metres between 21.6 and 20.4 million years ago.\n[…]\nThe seasonal monsoon wind shift and weather associated with the heating and cooling of the Tibetan Plateau is the strongest such monsoon on Earth.\n[…]\nThe Tibetan Plateau contains the world's third-largest store of ice. Qin Dahe, the former head of the China Meteorological Administration, issued the following assessment in 2009:\n[…]\nOnce they vanish, water supplies in those regions will be in peril.The Tibetan Plateau contains the largest area of low-latitude glaciers and is particularly vulnerable to global warming. Over the past five decades, 80% of the glaciers have retreated, losing 4.5% of their combined areal coverage. The region is also liable to suffer damages from permafrost thaw caused by climate change.\n[…]\nAsian Water Tower, the high-mountain water system centered on the Tibetan Plateau\n[…]\nLeaf morphology and the timing of the rise of the Tibetan Plateau\n[…]\nProtected areas of the Tibetan Plateau region\n[…]\n\"North Tibetan Plateau-Kunlun Mountains alpine desert\". Terrestrial Ecoregions. World Wildlife Fund.\n[…]\nPhotos of Tibetan nomads"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Planalto_Tibetano",
        "situacao": "ok",
        "texto": "O planalto Tibetano é um planalto vasto e elevado situado na Ásia Oriental, ocupando a maior parte da Região Autónoma do Tibete, além de outras províncias chinesas, assim como outros países, como Índia, Nepal, Myanmar, e etc. Este planalto ocupa uma superfície de aproximadamente 2,5 milhões de km2, com uma elevação média de 4 000 metros, porém a região conhecida como Changtang facilmente ultrapass\n[…]\nChamado teto do mundo, é o maior e mais elevado planalto do mundo. A sua formação deve-se à colisão ocorrida entre a placa Indiana e a placa euroasiática durante o período Cenozoico (há cerca de 55 milhões de anos), um processo que todavia prossegue.\n[…]\nComo esses sedimentos eram relativamente leves, eles se enrugaram e se elevaram formando cadeias montanhosas, em vez de afundarem no interior da Terra. Durante esse estágio inicial de formação, no final do Paleógeno, o Tibete consistia em um profundo paleovale cercado por várias cadeias de montanhas, e não no planalto elevado e relativamente uniforme que conhecemos hoje. A altitude média do Planalto Tibetano continuou variando desde seu soerguimento inicial no Eoceno.\n[…]\nPosteriormente, o planalto voltou a se elevar entre 500 e 1 000 metros no período entre 21,6 e 20,4 milhões de anos atrás.\n[…]\nO Planalto Tibetano contém a terceira maior reserva de gelo do mundo. Qin Dahe, ex-chefe da Administração Meteorológica da China, emitiu a seguinte avaliação em 2009:\n[…]\nAs temperaturas estão subindo quatro vezes mais rápido do que em qualquer outro lugar da China, e as geleiras tibetanas estão recuando a uma velocidade maior do que em qualquer outra parte do mundo. A curto prazo, isso fará com que os lagos se expandam e tragam inundações e fluxos de lama. A longo prazo, as geleiras são linhas vitais para os rios asiáticos, incluindo o Indo e o Ganges. Assim que elas desaparecerem, o suprimento de água nessas regiões estará em perigo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Sossusvlei",
      "descricao": "Depressão de argila e sal cercada por altas dunas vermelhas no deserto do Namibe, na Namíbia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As altas dunas de Sossusvlei, no deserto do Namibe, têm um tom vermelho-alaranjado intenso. O que dá essa cor à areia?",
    "resposta": "Óxido de ferro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sossusvlei"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sossusvlei",
        "situacao": "ok",
        "texto": "Sossusvlei (sometimes written Sossus Vlei) is a salt and clay pan surrounded by high red dunes, located in the southern part of the Namib Desert, in the Namib-Naukluft National Park of Namibia. The name \"Sossusvlei\" is often used in an extended meaning to refer to the surrounding area (including other neighbouring vleis such as Deadvlei and other high dunes). These landmarks are some of the major \n[…]\nThe Sossusvlei area forms part of a wider region of the southern Namib Desert with homogeneous features (about 32.000 km²) extending between the Koichab and Kuiseb rivers. This area is characterized by high sand dunes in different shades of orange - the colour an indication of a high concentration of iron, after being exposed to the process of oxidation over many years. The older the dunes, the more intense the reddish colour.\n[…]\nSossusvlei has a hot desert climate. The annual mean average temperature is 24 °C. In winter, the nighttime lows are around 10 °C, while in summer temperatures often reach up to 40 °C. Being situated in the Namib desert, there is a large variation between day and night temperatures. Rain is a rare phenomenon.\n[…]\nDeadvlei is another clay pan, about 2 km from Sossusvlei. A notable feature of Deadvlei is that it used to be an oasis with several camelthorn trees; afterwards, the river that watered the oasis changed its course. The pan is thus punctuated by blackened, dead camelthorn trees, in vivid contrast to the shiny white of the salty floor of the pan and the intense orange of the dunes.\n[…]\nLithified dunes are sand dunes that have solidified to rock and are found in several places in the Sossusvlei area.\n[…]\nThe nonverbal documentary Samsara depends on a number of shots of the desert for subtle spiritual commentary. Other movies with scenes shot in Sossusvlei include The Fall and Steel Dawn.\n[…]\nSossusvlei travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sossusvlei",
        "situacao": "ok",
        "texto": "Sossusvlei é um lago seco de sal e argila rodeado por dunas vermelhas na parte sul do Deserto da Namíbia no Parque Nacional Namib-Naukluft da Namíbia. É uma das principais atrações turísticas do país.\n[…]\n\"Vlei\" deriva do Africâner e significa \"pântano\" enquanto \"sossus\" é uma palavra no idioma Nama que significa \"sem retorno\".[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Ijen",
      "descricao": "Complexo vulcânico no leste de Java, na Indonésia, com um lago ácido na cratera e mineração de enxofre."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "À noite, a cratera do vulcão Ijen, na Indonésia, brilha com chamas azuis. Que substância, ao queimar, produz esse fogo?",
    "resposta": "Enxofre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ijen"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ijen",
        "situacao": "ok",
        "texto": "The Ijen volcano complex is a group of composite volcanoes located on the border between Banyuwangi Regency and Bondowoso Regency of East Java, Indonesia. It is known for its blue fire, acidic crater lake, and labour-intensive sulfur mining.\n[…]\nWest of Gunung Merapi is the Ijen volcano, which has a one-kilometre-wide (0.62 mi) turquoise-coloured acidic crater lake. The lake is the site of a labour-intensive sulfur mining operation, in which sulfur-laden baskets are carried by hand from the crater floor. The work is paid well considering the cost of living in the area, but is very onerous.\n[…]\nMany other post-caldera cones and craters are located within the caldera or along its rim. The largest concentration of post-caldera cones runs east–west across the southern side of the caldera. The active crater at Kawah Ijen has a diameter of 722 metres (2,369 ft) and a surface area of 0.41 square kilometres (0.16 sq mi). It is 200 metres (660 ft) deep and has a volume of 36 cubic hectometres (29,000 acre⋅ft).\n[…]\nSince National Geographic mentioned the electric-blue flame of Ijen, tourist numbers have increased. The phenomenon has long been known, but midnight hiking tours are a more recent offering. A two-hour hike is required to reach the rim of the crater, followed by a 45-minute hike down to the bank of the crater.\n[…]\nIjen Express\n[…]\nIjen Gallery\n[…]\nLarge photogallery from Kawah Ijen Archived 1 August 2020 at the Wayback Machine\n[…]\nSulfur mining in Kawah Ijen (The Big Picture photo gallery at Boston.com)\n[…]\n\"Traditional sulfur mining in Kawah Ijen\". Yahoo! News. 11 October 2013.\n[…]\nMore sulfur mining pictures at Ijen Archived 24 September 2010 at the Wayback Machine\n[…]\nSpectacular Neon Blue Lava Pours From Indonesia's Kawah Ijen Volcano At Night (PHOTOS)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ijen",
        "situacao": "ok",
        "texto": "Ijen é um complexo vulcânico composto por um grupo de estratovulcões situado perto da costa oriental da ilha indonésia de Java, nas regência de Bondowoso e Banyuwangi da província de Java Oriental.\n[…]\nA pouca distância a oeste do Merapi situa-se o vulcão Kawah Ijen, no qual existe um lago de cratera de cor turquesa, com diâmetro de 722 m, 0,41 km² de área, 200 m de profundidade e 36 000 000 m³ de volume, considerado o maior lago fortemente ácido do mundo.\n[…]\nO lago de Kawah Ijen é explorado intensivamente para extração de enxofre, o qual é extraído à mão do fundo da cratera e depois transportado em cestos carregados às costas de trabalhadores ao longo de três quilómetros, até ao vale de Paltuding. O lago é também a nascente do rio Banyupahit, um curso de água muito ácida e carregada de metais que tem efeitos significativamente prejudiciais nos ecossistemas a jusante.\n[…]\nUm orifício ativo à beira do lago é uma fonte de enxofre elementar que suporta uma operação de mineração. Os gases vulcânicos são canalizados através de uma rede de tubos cerâmicos, onde se dá a condensação de enxofre fundido. O enxofre, que é vermelho forte quando fundido, escorre lentamente do fim dos tubos e acumula-se no solo, tornando-se amarelo à medida que arrefece. Os mineiros partem o material arrefecido em grandes blocos e carregam-no em cestos.\n[…]\nUma refinaria de açúcar próxima paga o enxofre aos mineiros ao quilograma; em setembro de 2010, o rendimento típico diário dos mineiros não chegava aos 10 €  e a proteção enquanto trabalhavam no vulcão era muito insuficiente, o que provocava muitos problemas respiratórios.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Grand Prismatic Spring",
      "descricao": "Grande fonte termal colorida da bacia Midway Geyser, no Parque Nacional de Yellowstone."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As faixas coloridas, em tons de laranja, amarelo e verde, da fonte termal Grand Prismatic, em Yellowstone, são produzidas por quê?",
    "resposta": "Micro-organismos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Grand_Prismatic_Spring"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Grand_Prismatic_Spring",
        "situacao": "ok",
        "texto": "The Grand Prismatic Spring is the largest hot spring in the Yellowstone National Park, and the third largest in the world, after Frying Pan Lake in New Zealand and Boiling Lake in Dominica. It is located in the Midway Geyser Basin.\n[…]\nGrand Prismatic Spring was noted by geologists working in the Hayden Geological Survey of 1871, and named by them for its striking coloration. Its colors match most of those seen in the rainbow: red, orange, yellow, green, and blue.\n[…]\nThe first records of the spring are from early European explorers and surveyors. In 1839, a group of four trappers from the American Fur Company crossed the Midway Geyser Basin and made note of a \"boiling lake\", most likely the Grand Prismatic Spring, with a diameter of 300 feet (90 m). In 1870 the Washburn–Langford–Doane Expedition visited the spring, noting a 50-foot (15 m) geyser nearby (later named Excelsior).\n[…]\nThe bright, vivid colors in the spring are the result of microbial mats of thermophilic bacteria and archaea around the edges of the mineral-rich water. The mats produce colors ranging from green to red; the amount of color in the microbial mats depends on the ratio of chlorophyll to carotenoids and on the temperature gradient in the runoff. In the summer, the mats tend to be orange and red, whereas in the winter the mats are usually dark green.\n[…]\nThe deep blue color of the water in the center of the pool results from the intrinsic blue color of water. The effect is strongest in the center of the spring, because of its sterility and depth.\n[…]\nThe spring is approximately 370 feet (110 m) in diameter and is 160 feet (50 m) deep. The spring discharges an estimated 560 US gallons (2,100 L) of 160 °F (70 °C) water per minute."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Grande_Fonte_Prism%C3%A1tica",
        "situacao": "ok",
        "texto": "A Grande Fonte Prismática no Parque Nacional de Yellowstone é a maior fonte termal dos Estados Unidos e a terceira maior do mundo.\n[…]\nA Grande Fonte Prismática foi descoberta por geólogos que trabalharam no Hayden Geological Survey de 1871, e recebeu esse nome devido à sua coloração impressionante. Suas cores equivalem à maioria das vistas na dispersão do arco-íris de luz branca por um prisma óptico: vermelho, laranja, amarelo, verde e azul.\n[…]\nOs primeiros registros da fonte são dos primeiros exploradores e topógrafos europeus. Em 1839, um time de quatro caçadores da American Fur Company atravessou a Midway Geyser Basin e viu um \"lago fervente\", seguramente a Grande Fonte Prismática, com um diâmetro de 300 ft (90 m). Em 1870, a Expedição Washburn-Langford-Doane visitou a fonte, observando um gêiser de 15 metros nas proximidades (depois nomeado Excelsior).\n[…]\nAs cores brilhantes e vívidas na primavera são o resultado de tapetes microbianos ao redor das bordas da água rica em minerais. Os tapetes produzem cores que vão do verde ao vermelho; a quantidade de cor nos tapetes microbianos depende da razão de clorofila para carotenoides e do gradiente de temperatura no escoamento. No verão, os tapetes tendem a ser laranja e vermelho, enquanto no inverno os tapetes são geralmente verde escuro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Salto de Sete Quedas",
      "descricao": "Antigo conjunto de quedas d'água do rio Paraná, em Guaíra, na fronteira com o Paraguai, submerso em 1982."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Salto de Sete Quedas, no rio Paraná, desapareceu em 1982, coberto pelas águas do reservatório de qual usina?",
    "resposta": "Itaipu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
      "https://pt.wikipedia.org/wiki/Salto_de_Sete_Quedas"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gua%C3%ADra_Falls",
        "situacao": "ok",
        "texto": "The Guairá Falls (Spanish: Saltos del Guairá) or Guaíra Falls (Portuguese: Salto das Sete Quedas do Guaíra) were a series of immense waterfalls on the Paraná River along the border between Paraguay and Brazil. The falls ceased to exist in 1982 when they were inundated by the impoundment of the Itaipu Dam reservoir.\n[…]\nThe falls comprised 18 cataracts clustered in seven groups—hence their Portuguese name, Sete Quedas (Seven Falls)—near the Brazilian municipality of Guaíra, Paraná and Salto del Guairá, the easternmost city in Paraguay. The falls were located at a point where the Paraná River was forced through a narrow gorge. At the head of the falls, the river narrowed sharply from a width of about 380 m (1,250 ft) to 60 m (200 ft).\n[…]\nA tourist attraction and a favorite of locals, the falls were completely submerged under the artificial lake created by the Itaipu Dam upon its completion in 1982. The building of the dam, authorized by a 1973 bilateral agreement between the Paraguayan and Brazilian regimes of the time, marked a new era of cooperation between the countries, both of which had claimed ownership of Guaíra Falls.\n[…]\nAs construction of the Itaipu Dam progressed, thousands of visitors flocked to the area to see the falls before they disappeared forever. Disaster struck on January 17, 1982, when a suspended footbridge affording access to a particularly spectacular view of the falls collapsed, killing dozens of tourists.\n[…]\nThe director of the company that built the dam was quoted as saying, \"We're not destroying Seven Falls. We're just going to transfer it to Itaipu Dam, whose spillway will be a substitute for [the falls'] beauty\".\n[…]\nItaipu Lake\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes\n[…]\nSalto de Sete Quedas - Brasil, December 1978 by Mario Cesar Mendonça Gomes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Salto_de_Sete_Quedas",
        "situacao": "ok",
        "texto": "O Salto de Sete Quedas, também chamado Sete Quedas do Rio Paraná (em castelhano:  Saltos del Guairá), foram as maiores cachoeiras do mundo em volume de água com 13,3 mil m³/segundo, sendo o dobro de volume d'água das Cataratas do Niágara, na divisa EUA/Canadá, e treze vezes mais caudalosas que as Victoria Falls na Zâmbia. Seu som poderia ser ouvido a 30 km de distância, seu canal principal possuía\n[…]\nEm 1966 foi decretada a submersão do Salto das Sete Quedas através da Ata do Iguaçu, onde ocorreria o seu desaparecimento com a formação do lago da Usina hidrelétrica de Itaipu. O governo havia decretado que a construção da Usina de Itaipu iria alagar as Setes Quedas, uma área em litígio entre Brasil e Paraguai devido a uma demarcação territorial sob a serra de Maracaju.\n[…]\nQuando da construção da Usina Hidrelétrica de Itaipu (a qual, no início das sondagens sobre o potencial hidrelétrico do Rio Paraná, era referida como Usina de Sete Quedas), ocorreu uma super visitação ao Parque Nacional das Sete Quedas. Milhares de pessoas, de todas as partes do Brasil e do mundo, iam a Guaíra para presenciar os últimos dias das Sete Quedas.\n[…]\nEm 13 de outubro de 1982, o fechamento das comportas do Canal de Desvio de Itaipu começou a sepultar, com as águas barrentas do lago artificial, um dos maiores espetáculos da face da Terra: as Sete Quedas do Rio Paraná ou \"Saltos del Guaíra\". Durante a inundação, os moradores de Guaíra iam até a beira do rio para se despedirem das Sete Quedas.\n[…]\nA inundação das Sete Quedas durou apenas 14 dias, pois ocorreu em uma época de cheia do rio Paraná, e todas as usinas hidrelétricas acima de Itaipu abriram suas comportas, contribuindo com o rápido enchimento do lago. O alagamento das Sete Quedas ocorreu somente nos dois últimos dias do alagamento total, ou seja, no décimo segundo dia de alagamento.\n[…]\n1982 - Em 14 de outubro ocorre o fechamento das comportas de Itaipu."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Poço Encantado",
      "descricao": "Caverna com lago de águas transparentes no município de Itaetê, na Chapada Diamantina, Bahia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Entre abril e setembro, a água do Poço Encantado, caverna da Chapada Diamantina, fica de um azul brilhante. O que causa esse efeito?",
    "resposta": "Raios de sol entrando pela fenda",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Poço_Encantado"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Poço_Encantado",
        "situacao": "ok",
        "texto": "O Poço Encantado é um lago subterrâneo situado no interior de uma caverna localizada na cidade de Itaetê, próxima ao povoado de Rosely Nunes, na Chapada Diamantina, região central do estado brasileiro da Bahia.\n[…]\nEntre os meses de abril a setembro a água transparente do lago é iluminada por um facho de luz solar que, de forma a se tornar num dos principais atrativos da zona turística, recebendo um número superior a doze mil visitantes ao ano.\n[…]\nA gruta do Poço Encantado formou-se num período de 66 milhões de anos pela erosão subterrânea da água infiltrada na rocha de composto de carbono, bastante solúvel, dando à superfície geológica do terreno o nome genérico de carste; ali o lençol freático acumula-se no solo da caverna formando o poço com uma profundidade de 60 metros (ao longo do ano sofre uma variação de 1,5 metro no nível).\n[…]\nA caverna é constituída por quedas sucessivas das rochas do teto, presente no interior do lago, que demonstram o processo de abatimento ocorrido ali ao longo das eras e que fecharam as passagens com o progressivo aprofundamento do lençol freático, dando uma ideia de como poderiam ter sido seus canais originais, constituindo-se em importante sítio geológico testemunho do processo evolutivo da Terra."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Monte Pelée",
      "descricao": "Vulcão ativo no norte da Martinica, cuja erupção de 1902 destruiu a cidade de Saint-Pierre."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1902, a cidade de Saint-Pierre foi arrasada em minutos pelo Monte Pelée, com uma avalanche de gás e cinzas quentes. Que nome se dá a esse fenômeno?",
    "resposta": "Nuvem ardente (fluxo piroclástico)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Pel%C3%A9e",
      "https://en.wikipedia.org/wiki/Pyroclastic_flow"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Pel%C3%A9e",
        "situacao": "ok",
        "texto": "Mount Pelée or Mont Pelée ( pə-LAY; French: la montagne Pelée [la mɔ̃taɲ pəle], lit. 'bald mountain' or 'peeled mountain'; Antillean Creole: Montann Pèlé) is an active stratovolcano at the northern end of Martinique, an island and French overseas department in the Lesser Antilles Volcanic Arc of the Caribbean. Its volcanic cone is composed of stratified layers of hardened ash and solidified lava. \n[…]\nThree thousand years ago, following a large pumice eruption, the Étang Sec (French for Dry Pond) caldera was then formed. The 1902 eruption took place within the Étang Sec crater. This eruption formed many pyroclastic flows and produced a dome that filled the caldera. Mount Pelée continued to erupt until 4 July 1905. Thereafter, the volcano was dormant until 1929.\n[…]\nOn 16 September 1929, Mount Pelée began to erupt again. This time, there was no hesitation on the part of authorities and the danger area was immediately evacuated. The 1929 eruption formed a second dome in the Étang Sec caldera and produced pyroclastic flows emptying into the Blanche River valley. Although there were pyroclastic flows, the activity was not as violent as the 1902 activity.\n[…]\nThe volcano is currently active. A few volcano tectonic earthquakes occur on Martinique every year, and Mount Pelée is under continuous watch by geophysicists and volcanologists (IPGP). Before the 1902 eruption—as early as the summer of 1900—signs of increased fumarole activity were present in the Étang Sec crater. Relatively minor phreatic (steam) eruptions that occurred in 1792 and 1851 were evidence that the volcano was active.\n[…]\nMount Pinatubo\n[…]\nMount Vesuvius\n[…]\nEruption of Mt. Pelée (1902)\n[…]\nLa montagne Pelée\n[…]\nPhotos of Mount Pelée volcanic rocks (with text in French) retrieved 2009-05-17\n[…]\nMt. Pelee volcano, St. Pierre, Martinique 61 digitized photographs of the Mount Pelée volcano eruption, May 1902."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pyroclastic_flow",
        "situacao": "ok",
        "texto": "A pyroclastic flow, more broadly known as a pyroclastic density current, is a fast-moving current of hot gas and volcanic matter (collectively known as tephra) that flows along the ground away from a volcano. Pyroclastic currents travel at extremely high speeds and have extremely high temperatures.\n[…]\nThe word pyroclast is derived from the Greek πῦρ (pýr), meaning 'fire', and κλαστός (klastós), meaning 'broken in pieces'. A name for pyroclastic flows that glow red in the dark is nuée ardente (French for 'burning cloud'); this was notably used to describe the disastrous 1902 eruption of Mount Pelée on Martinique, a French island in the Caribbean.\n[…]\nCold pyroclastic surges can occur when the eruption is from a vent under a shallow lake or the sea. Fronts of some pyroclastic density currents are fully dilute; for example, during the eruption of Mount Pelée in 1902, a fully dilute current overwhelmed the city of Saint-Pierre and killed nearly 30,000 people.\n[…]\nThe 1902 eruption of Mount Pelée destroyed the Martinique town of St. Pierre. Despite signs of impending eruption, the government deemed St. Pierre safe due to hills and valleys between it and the volcano, but the pyroclastic flow charred almost the entirety of the city, killing all but three of its 30,000 residents.\n[…]\nA pyroclastic surge killed volcanologists Harry Glicken and Katia and Maurice Krafft and 40 other people on Mount Unzen, in Japan, on June 3, 1991. The surge started as a pyroclastic flow and the more energised surge climbed a spur on which the Kraffts and the others were standing; it engulfed them, and the corpses were covered with about 5 mm (1⁄4 in) of ash."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Pel%C3%A9e",
        "situacao": "ok",
        "texto": "Monte Pelée (em francês, La Pelée ou montaigne Pelée: \"montanha pelada\") é um vulcão situado no norte da  Martinica, integrado no arco vulcânico das Pequenas Antilhas. É mais conhecido pela erupção de 1902, uma das mais devastadoras de que se tem conhecimento, tendo causado a morte de entre 30 000 a 40 000 pessoas e a destruição total da cidade de Saint-Pierre, situada no sopé da montanha. Pratica\n[…]\nEm 8 de maio de 1902 uma nuvem ardente se desprendeu do alto do vulcão e destruiu inteiramente a cidade de Saint-Pierre, provocando a morte de entre 30 000 a 40 000 pessoas. O fluxo piroclástico, uma cinza vulcânica com cerca de 300 °C, cobriu 20 km ao longo de toda cidade de Saint Pierre, seguida pela lava, de aproximados 1000 °C. O efeito do fluxo piroclástico é tão devastador que em três minutos exterminou aquele povoado, derreteu casas, prédios.\n[…]\nEm verdade, desde janeiro, quatro meses antes da erupção, La Pelée começou a mostrar um aumento abrupto na atividade de fumarolas, mas os habitantes mostraram pouca preocupação. Isso mudou, no entanto, em 23 de abril, quando começaram as explosões menores na cúpula do vulcão. Nos dias subsequentes, Saint-Pierre foi atingida por tremores de terra, coberta por uma chuva de cinzas e envolta em uma nuvem espessa e asfixiante de gás sulfuroso.\n[…]\nEm 5 de maio, a borda da cratera cedeu, e uma torrente de água escaldante desceu em cascata pelo rio Blanche. A água quente, misturada a detritos piroclásticos, gerou uma enorme avalanche (lahar), que descia a uma velocidade de aproximadamente 100 quilômetros por hora. Essa enxurrada de lama vulcânica soterrava tudo em seu caminho. Invadiu uma destilaria de rum, perto da foz do rio, ao norte de Saint-Pierre,  matando 23 trabalhadores.\n[…]\nA rã-do-vulcão-da-martinica, Allobates chalcopis, é endémica do Monte Pelée, e a única espécie da sua família (Aromobatidae) que é endémica de uma ilha oceânica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Son Doong",
      "descricao": "Caverna gigante no Parque Nacional Phong Nha-Ke Bang, no centro do Vietnã, com floresta e nuvens próprias."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Son Doong, uma das maiores cavernas do mundo, com floresta e até nuvens dentro dela, fica em que país?",
    "resposta": "Vietnã",
    "distratores": [
      "Laos",
      "Tailândia",
      "Malásia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng",
        "situacao": "ok",
        "texto": "Sơn Đoòng Cave (Vietnamese: hang Sơn Đoòng, IPA: [haŋ˧ ɕɤn˧ ɗɔŋ˨˩]), in Phong Nha–Kẻ Bàng National Park, Quảng Trị province, Vietnam, is the world's largest natural cave.\n[…]\nLocated near the Laos–Vietnam border, Hang Sơn Đoòng has an internal, fast-flowing subterranean river and the largest cross-section of any cave, worldwide, believed to be twice that of the next-largest passage. It is the largest known cave passage in the world by volume.\n[…]\nIts name, Hang Sơn Đoòng, is translated from Vietnamese as \"cave of the mountain behind Đoòng\". Đoòng is the name of a Vân Kiều village.\n[…]\nThe cave contains some of the tallest known stalagmites in the world, which are up to 80 m (260 ft) tall. Behind the Great Wall of Vietnam were found cave pearls the size of baseballs, an abnormally large size. The cave's interior is so large that it could fit an entire New York block inside, including skyscrapers, or could have a Boeing 747 fly through it without its wings touching either side.\n[…]\n\"Vietnam's Mammoth Cavern\". Archived from the original on December 18, 2010. Retrieved December 21, 2010. National Geographic pictorial of Hang Sơn Đoòng\n[…]\nStrutner, Suzy (September 7, 2013). \"World's Largest Cave, Son Doong, Prepping For First Public Tours\" (includes video). The Huffington Post. Retrieved September 11, 2013.\n[…]\nChùm ảnh khám phá hang động đẹp và lớn nhất thế giới(includes images) Quảng Bình Province (in Vietnamese)\n[…]\n\"In pictures: Inside Hang Son Doong, the world's largest caves in Vietnam\". June 20, 2014. Retrieved June 20, 2014. The Telegraph Online\n[…]\n\"Hang Son Doong\" (video on Vimeo). March 9, 2015. Retrieved March 17, 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C6%A1n_%C4%90o%C3%B2ng",
        "situacao": "ok",
        "texto": "Sơn Đoòng é uma caverna localizada na província de Quảng Bình, no Vietnã, a 500 km ao sul de Hanói, perto da fronteira Laos-Vietname. Atualmente é considerada a maior caverna do planeta e situa-se no Parque Nacional de Phong Nha-Kẻ Bàng, declarado Patrimônio da Humanidade pela UNESCO em 2003.\n[…]\nEm abril de 2009, a existência de uma grande caverna de 6,5 km, com uma largura preliminar de 150 m, foi revelada ao público no Parque Nacional Vietnamita Phong Nha-Ke Bang.\n[…]\nA gruta de Sơn Đoòng foi encontrada em fevereiro de 2009 quando um grupo de cientistas britânicos da Associação Britânica de Investigação de Grutas, dirigida pelo casal Howard e Limbert Deb, organizava uma visita em Phong Nha-Ke Bang marcada para de 10 a 14 de abril de 2009. Um homem local tinha descoberto a caverna em 1991, mas não se recordava da maneira de chegar ao local.\n[…]\nEm 1991, um pastor da zona encontrou-a, mas, receoso do estranho silvo que provinha do interior, manteve em segredo a sua localização. Foi usada como refúgio dos bombardeamentos na Guerra do Vietname. A primeira expedição para descobrir os segredos da gruta foi feita em 2009 por Howard e Deb Limbert que, no entanto, encontraram uma enorme parede de calcite que os impediu de continuar. Segundo os espeleólogos, a gruta é difícil de encontrar por estar completamente coberta de vegetação.\n[…]\nCom estas dimensões enormes, Sơn Đoòng supera a caverna Deer do parque nacional de Gunung Mulu na Malásia, tomando o título de \"maior caverna do mundo\". O rio subterrâneo que flui na caverna desanimou os exploradores de ir mais além, pois puderam apenas considerar o comprimento da caverna utilizando a luz de lanternas. Estão previstas mais explorações num futuro próximo, reservadas a cientistas. A gruta não é visitável a turistas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Cascata do Caracol",
      "descricao": "Queda d'água de cerca de 130 metros no Parque Estadual do Caracol, na serra gaúcha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com mais de cento e trinta metros de queda, a Cascata do Caracol é a grande atração natural de qual cidade da serra gaúcha?",
    "resposta": "Canela",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cascata_do_Caracol"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cascata_do_Caracol",
        "situacao": "ok",
        "texto": "Cachoeira do Caracol é uma cachoeira de 130 metros, localizada a 7 quilômetros do município de Canela, no Parque Estadual do Caracol. É formada pelo rio Caracol e corta de falésias basálticas na Serra Geral, caindo no Vale da Lageana. As quedas estão situadas entre a zona pinheiral (floresta de pinheiros) do Planalto Brasileiro e a Mata Atlântica do litoral sul. A base da cachoeira pode ser alcanç\n[…]\nA cachoeira se formou nas rochas basálticas da formação Serra Geral e possui duas cascatas. A cascata superior está localizada a aproximadamente 100 m antes da segunda cascata, que cai sobre uma borda saliente do penhasco.\n[…]\nAs Cataratas do Caracol há tempos atraem visitantes e são a segunda atração turística natural mais popular do Brasil, atrás apenas das Cataratas do Iguaçu. Em 2009, recebeu mais de 289.000 visitantes. Há uma torre de observação de 30 metros que oferece elevador e vista panorâmica, além de um teleférico que dá aos turistas uma visão aérea da cachoeira. A área também oferece um restaurante e barracas de artesanato.\n[…]\nParque Estadual do Caracol"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Parque Nacional de Sete Cidades",
      "descricao": "Parque nacional no Nordeste do Brasil com formações de arenito que lembram ruínas, castelos e animais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Parque Nacional de Sete Cidades, com rochas que lembram ruínas e castelos, fica em qual estado do Nordeste?",
    "resposta": "Piauí",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Sete_Cidades"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Sete_Cidades",
        "situacao": "ok",
        "texto": "O parque nacional de Sete Cidades é uma unidade de conservação brasileira de proteção integral da natureza, localizada na região norte do estado do Piauí. O território do parque está distribuído pelos municípios de Brasileira e de Piracuruca.\n[…]\nO Parque Nacional das Sete Cidades é dividido entre os municípios da Brasileira (26,21%) e Piracuruca (73,77%) no estado do Piauí. Tem uma área de 7.700 hectares. O parque é cercado pela Área de Proteção Ambiental da Serra da Ibiapaba, de 1.592.550 hectares, criada em 1996.\n[…]\nO Parque Nacional das Sete Cidades foi criado pelo decreto 50.744, de 8 de junho de 1961, por Jânio Quadros, então presidente do Brasil. O plano de manejo foi publicado, mas não oficialmente formalizado, em 31 de dezembro de 1978. O decreto 126 de 14 de dezembro de 2010 criou o conselho consultivo.\n[…]\nO parque contém savanas áridas (florestas de babaçu) e áreas de contato entre savana, savana árida e floresta sazonal, protegendo uma importante formação geológica e conservando os recursos hídricos de uma região predominantemente seca. Os principais atrativos geológicos são a atração principal, além de algumas pinturas rupestres e inscrições pré-históricas.\n[…]\nParque Nacional da Serra da Capivara"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Ilha do Havaí",
      "descricao": "A maior ilha do arquipélago havaiano, conhecida como Big Island, onde ficam Mauna Kea, Mauna Loa e Kilauea."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Kauai, Oahu, Maui e as ilhas vizinhas surgiram uma a uma sobre um mesmo ponto quente no Pacífico. Qual é a mais jovem delas?",
    "resposta": "Ilha do Havaí (Big Island)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hawaii_(island)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hawaii_(island)",
        "situacao": "ok",
        "texto": "Hawaiʻi, sometimes written Hawaii, is the largest island in the United States, located in the state of Hawaii. It is the southeasternmost of the Hawaiian Islands, a chain of volcanic islands in the North Pacific Ocean. With an area of 4,028 square miles (10,430 km2), it has 63% of the Hawaiian archipelago's combined landmass. However, it has only 13% of the archipelago's population. The island of \n[…]\nKamehameha went on to conquer the rest of the Hawaiian islands, consolidating his control in 1810 with the peaceful surrender of Kaumualiʻi, king of Kauai. He gave his new kingdom, and by extension the island chain itself, the name of his native island – the Kingdom of Hawaiʻi.\n[…]\nIn 2019, Hawaii started showing declining in economic wealth when COVID-19 began. This is also where most people started to leave the Islands. With no tourists and the increasing of rent, people were leaving the Islands more. Hawaii's RBP is 8.6 percent more than the U.S, causing Hawaii to be one of the most expensive living conditions to be in.\n[…]\nOther smaller freight only railroads also operated on the island, primarily for the transport of sugarcane and other crops. Some of these include Waiākea Plantation Railroad (in Hilo), Honokaʻa Plantation Railroad, Hawaii Railway (on the north shore), Hawaiian Agricultural Company Railroad (in Pāhala) and West Hawaii Railway (between Kailua-Kona and Captain Cook).\n[…]\nIsland-wide bus service is provided by Hele-On Bus.\n[…]\nThere are several small boatramps throughout the island for public and private use.\n[…]\nʻAkaka Falls, one of the tallest waterfalls on the island.\n[…]\nNational Register of Historic Places listings on the island of Hawaii\n[…]\nHawaii (island) at Encyclopædia Britannica\n[…]\nIsland of Hawaii from the International Space Station – NASA satellite image, taken from the International Space Station on 28 February 2015\n[…]\nMedia related to Hawaii (island) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_Hava%C3%AD",
        "situacao": "ok",
        "texto": "A Ilha Havai, Havaí ou Hawaiʻi é a maior ilha do arquipélago do Havai. Esta ilha é também conhecida pelo seu nome inglês \"Big Island\" (Ilha Grande), evitando-se a confusão entre a ilha e o estado. É a maior ilha dos Estados Unidos em área, e a 75.ª maior ilha do mundo.\n[…]\nA origem do nome Hawaiʻi tem duas explicações: por um lado é atribuído o descobrimento das ilhas ao navegante lendário polinésio Hawaiʻiloa. Outra explicação provém da terra lendária Hawaiki, ou Havaiki, lugar de origem dos polinésios, ou o lugar para onde retornam as almas depois da morte na mitologia polinésia. A relação com Hawaiki também se explica na ilha Savai'i de Samoa, e em outros lugares da Polinésia. Os primeiros exploradores transcreveram o nome como Owhyhee.\n[…]\nA Ilha Havai está administrativamente no Condado de Hawaii, cuja capital é Hilo. Em 2010 a população residente registada no censo foi de 185 079 pessoas. Esta ilha tem as praias negras vulcânicas de areia mais bonitas do mundo.\n[…]\nNesta ilha fica o vulcão mais ativo do mundo chamado Kilauea. Em 1998 o Kilauea foi noticiado como o vulcão de maior atividade no mundo e tido como o vulcão ativo mais visitado do mundo, uma fonte inestimável para os vulcanólogos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Horsetail Fall",
      "descricao": "Cachoeira sazonal que desce pela face leste do El Capitan, no Vale de Yosemite, na Califórnia."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em Yosemite, por alguns dias do ano, o pôr do sol faz a cachoeira Horsetail brilhar como lava. Em que mês isso acontece?",
    "resposta": "Fevereiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Horsetail_Fall_(Yosemite)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Horsetail_Fall_(Yosemite)",
        "situacao": "ok",
        "texto": "Horsetail Fall, located in Yosemite National Park in California, is a seasonal waterfall that flows in the winter and early spring. The fall occurs on the east side of El Capitan. If Horsetail Fall is flowing in February and the weather conditions are just right, the setting sun illuminates the waterfall, making it glow orange and red. This natural phenomenon is often referred to as the \"Firefall\"\n[…]\nThe waterfall is fed by rain or snowmelt. It descends in two streams side by side, the eastern one being the larger but both quite small. The eastern one drops 1,540 ft (470 m), and the western one 1,570 ft (480 m), the second highest fully airborne waterfall in Yosemite that runs at some point every year (the highest being Ribbon Fall.) The waters then gather and descend another 490 ft (150 m) on steep slabs, so the total height of these waterfalls is 2,030 ft (620 m) to 2,070 ft (630 m).\n[…]\nIt can be seen and photographed from a small clearing close to the picnic area on the north road leading out of Yosemite Valley east of El Capitan. The fall is sometimes referred to as an ephemeral fall because of its seasonal nature.\n[…]\nFor a couple of weeks in mid- to late- February, the fall may be lit up by the setting sun, creating the illusion of a blazing waterfall. This evening spectacle, which lasts around 10 minutes in good viewing conditions, is commonly referred to as the \"firefall\". The phenomenon requires enough water to create the fall, a clear sky, and the right angle for the sunlight to illuminate the fall. It is not observable every year.\n[…]\nThe phenomenon was photographed by Ansel Adams in 1940, but made more widely-known by Galen Rowell who photographed it for the National Geographic in 1973. Viewing of the Firefall increased in popularity due to its images being shared on social media, and optimal dates for its viewing are published.\n[…]\n\"Horsetail Fall\". World Waterfall Database."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cachoeira_Horsetail",
        "situacao": "ok",
        "texto": "A cachoeira Horsetail (Horsetail Fall, em inglês) é uma cachoeira que fica no Parque Nacional de Yosemite, no estado da Califórnia, nos Estados Unidos. Assim é conhecida devido à forma de uma cauda de cavalo quando cai sobre a borda leste de El Capitan, uma enorme formação rochosa. Esse fenômeno só pode ser visto por algumas semanas em fevereiro, quando o pôr do sol atinge a cachoeira, criando um ",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cratera do Meteoro",
      "descricao": "Cratera de impacto de cerca de 1,2 km de diâmetro no deserto do norte do Arizona, Estados Unidos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A Cratera do Meteoro, no Arizona, foi aberta pelo impacto de um meteorito. Há cerca de quantos anos isso aconteceu?",
    "resposta": "Cerca de cinquenta mil anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Meteor_Crater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Meteor_Crater",
        "situacao": "ok",
        "texto": "Meteor Crater, or Barringer Crater, is an impact crater about 37 mi (60 km)  east of Flagstaff and 18 mi (29 km) west of Winslow in the desert of northern Arizona,  United States. The site had several earlier names, and fragments of the meteorite are officially called the Canyon Diablo Meteorite, after the adjacent Canyon Diablo.\n[…]\nThe relatively young age of Meteor Crater, paired with the dry Arizona climate, has allowed this crater to remain comparatively unchanged since its formation. The lack of erosion that preserved the crater's shape greatly accelerated its groundbreaking recognition as an impact crater from a natural celestial body.\n[…]\nMining engineer and businessman Daniel M. Barringer suspected that the crater had been produced by the impact of a large iron meteorite. The theory that the crater was of meteoric origin had been met with skepticism. At the time, the craters visible on the Moon were thought to be volcanic, and no one had conclusively proved that impact craters existed.\n[…]\nBarringer had amassed a small fortune as an investor in the successful Commonwealth Mine in Pearce, Cochise County, Arizona. Barringer believed that the bulk of the Meteor Crater impactor could still be found under the crater floor. Impact physics was poorly understood at the time, and Barringer was unaware that most of the meteorite had vaporized on impact.\n[…]\nHe also conducted a wide range of research at the crater, discovering impactite, iron-nickel spherules related to the impact and vaporization of the asteroid, and the presence of many other features, such as half-melted slugs of meteoric iron mixed with melted target rock. Nininger's discoveries were compiled and published in a seminal work, Arizona's Meteorite Crater (1956).\n[…]\nGuidebook to the Geology of Barringer Meteorite Crater, Arizona (a.k.a. Meteor Crater)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cratera_do_Meteoro",
        "situacao": "ok",
        "texto": "A Cratera de Barringer, também conhecida como Cratera do Meteoro, está localizada perto de Winslow, no Arizona, Estados Unidos.\n[…]\nSupõe-se que foi formada há aproximadamente 50 mil anos por um meteorito de aproximadamente 50 metros a 40 mil km/h com a força de uma bomba de hidrogênio, deixando uma cratera de pouco mais de um quilômetro de diâmetro e 200 metros de profundidade.\n[…]\n«Foto da Cratera de Barringer»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Alpes",
      "descricao": "Cadeia de montanhas da Europa Central e Ocidental, de Nice a Viena, com picos como o Mont Blanc."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "De Mônaco à Eslovênia, a cordilheira dos Alpes se estende pelo território de quantos países?",
    "resposta": "Oito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alps",
        "situacao": "ok",
        "texto": "The Alps () are some of the highest and most extensive mountain ranges in Europe, stretching approximately 1,200 km (750 mi) across several Alpine countries (from west to east): Monaco, France, Switzerland, Italy, Liechtenstein, Germany, Austria, and Slovenia.\n[…]\nThe English word Alps comes from the Latin Alpes.\n[…]\nThe Alps are found in the following countries: Austria (28.7% of the range's area), Italy (27.2%), France (21.4%), Switzerland (13.2%), Germany (5.8%), Slovenia (3.6%), Liechtenstein (0.08%) and Monaco (0.001%).\n[…]\nThe oldest known human mummy, the Ötzi, has been found 1991 on the Tisenjoch on the Austrian-Italian border; he has been killed there about 5300 years ago. The Romans built several Roman Roads over several mountain passes in the Alps in order to control Roman territory west, north, north-east of their home base. Usually, they were also used by animal drawn carts.\n[…]\n13 January 2016 Les-Deux-Alpes avalanche\n[…]\nDuring the Gallic Wars in 58 BC Julius Caesar defeated the Helvetii. The Rhaetian continued to resist but their territory was eventually conquered when the Romans crossed the Danube valley and defeated the Brigantes. The Romans built settlements in the Alps. In towns such as Aosta, Martigny, Lausanne, and Partenkirchen remains of villas, arenas, and temples have been discovered.\n[…]\nDuring the Napoleonic Wars in the late 18th century and early 19th century, Napoleon annexed territory formerly controlled by the House of Habsburg, and the House of Savoy. In 1798, the Helvetic Republic was established, two years later an army across the Great St Bernard Pass. In 1799 the Russian imperial military engaged the revolutionary French army in the Alps, this episode has been recorded as significant achievement in mountain warfare."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alpes",
        "situacao": "ok",
        "texto": "Maciço Alpino ou Alpes (latim, ou albus: \"branco\" ou altus: \"alto\" ou uma palavra celta ou lígure) é a cadeia montanhosa mais alta e mais extensa que se encontra inteiramente na Europa, estendendo-se pela Áustria e Eslovênia, Hungria, a leste, através do norte da Itália, Suíça (Alpes suíços), Liechtenstein e sul da Alemanha, até ao sudeste da França e Mônaco.\n[…]\nA superfície dos Alpes é de cerca de 190 959 km2, dividida entre Áustria (28,5%), Itália (27,2%), França (20,7%), Suíça (14%), Alemanha (5,6%), Eslovénia (4%) e os dois microestados de Liechtenstein e Mónaco. Sem contar o Liechtenstein e o Mónaco, os países ordenados pela percentagem do seu território no arco alpino são a Áustria (65,5% do seu território), a Suíça (65%), a Eslovénia (38%), a Itália (17,3%), a França (7,3%) e a Alemanha (3%).\n[…]\nOs Alpes costumavam ser divididos em Alpes Ocidentais, Alpes Centrais e Alpes Orientais, uma classificação que tende a ficar obsoleta de acordo com a proposta SOIUSA. Os Alpes Ocidentais são mais elevados, mas sua cordilheira central é mais curta e curvada; localizam-se na Itália, França, Mónaco e Suíça, indo do mar Mediterrâneo ao maciço do Monte Branco. Os Alpes Centrais estendem-se do Vale de Aosta ao Brennero) e os Alpes Orientais do Brennero à Eslovénia).\n[…]\nAlpes Orientais (do Brennero à Eslovênia)\n[…]\nA população residente no conjunto do arco alpino era de 12 295 000 habitantes em 2001, dos quais 30,1% na Itália, 23,9% na Áustria, 18% em França, 12,8% na Suíça, 10,1% na Alemanha, 4,7% na Eslovénia e 0,2% no Liechtenstein e no Mónaco.\n[…]\nUma grande quantidade de aeroportos ao redor dos Alpes (e alguns no interior), assim como as ligações ferroviárias de longa distância de todos os países vizinhos, dão a um grande número de viajantes fácil acesso à cordilheira. Os Alpes costumam receber mais de 50 milhões de visitantes por ano.\n[…]\nPré-Alpes",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Calçada dos Gigantes",
      "descricao": "Formação de milhares de colunas de basalto no litoral do condado de Antrim, na Irlanda do Norte."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A Calçada dos Gigantes, na Irlanda do Norte, é formada por cerca de quantas colunas de basalto encaixadas?",
    "resposta": "Quarenta mil",
    "distratores": [
      "Quatrocentas",
      "Quatro mil",
      "Quatrocentas mil"
    ],
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
        "texto": "A Calçada do Gigante (em inglês Giant's Causeway) é a designação dada a um conjunto de cerca de 40 000 colunas prismáticas de basalto, encaixadas como se formassem uma enorme calçada de pedras gigantescas, formadas pela disjunção prismática de uma grande massa de lava basáltica resultante de uma erupção vulcânica ocorrida há cerca de 60 milhões de anos.\n[…]\nA formação está localizada na costa da Irlanda do Norte, a cerca de 3 quilômetros a norte da vila de Bushmills, no condado de Antrim, Irlanda do Norte. Foi declarada como Patrimônio da Humanidade pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura - UNESCO em 1986 sob o nome de \"Calçada do Gigante e sua Costa\", e como Reserva Natural em 1987.\n[…]\nMilhares de colunas verticais de pedras de até 6 metros de altura, cada uma de 38 cm a 51 cm de largura, com topos planos e seis lados. Por serem tão uniformes, seus topos parecem se encaixar como favos. Cerca de um quarto das colunas tem cinco lados e também há algumas com quatro, sete, oito e até nove lados.\n[…]\nOs Topos de Chaminé, outra formação rochosa, lembram a relação da Calçada do Gigante com a famosa Armada Espanhola. Isolados do penhasco principal por causa da ação atmosférica e da erosão, são constituídos por colunas que ficam expostas sobre um cabo formado por rochas altas, com vista para a costa da calçada. É fácil imaginar por que marinheiros que os olhavam do alto-mar os confundiam com topos da Chaminé de grandes castelos.\n[…]\nEsta grande caverna foi formada dentro de colunas basálticas e se estende cerca de 80 metros rochedo adentro. A rebentação das ondas na caverna inspirou o compositor alemão Felix Mendelssohn a compor a sua abertura As Hébridas, também conhecida como “Caverna de Fingal”, em 1832.\n[…]\n«Informação sobre o Giant's Causeway no National Trust» (em inglês)\n[…]\n«Formação das colunas de basalto» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "El Capitan",
      "descricao": "Monólito de granito de cerca de 900 metros no Vale de Yosemite, na Califórnia, famoso pela escalada."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2017, quem se tornou a primeira pessoa a escalar o El Capitan sem cordas, façanha mostrada no documentário Free Solo?",
    "resposta": "Alex Honnold",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alex_Honnold",
      "https://en.wikipedia.org/wiki/Free_Solo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alex_Honnold",
        "situacao": "ok",
        "texto": "Alexander J Honnold (born August 17, 1985) is an American rock climber best known for his free solo ascents of big wall climbing routes.\n[…]\nHonnold rose to worldwide fame in June 2017 when he became the first person to free solo a full climbing route on El Capitan in Yosemite National Park via the 880-metre (2,900 ft) big-wall route known as Freerider at the technical grade of 5.13a, which was the first-ever big-wall free-solo ascent at that grade, a climb described in The New York Times as \"one of the great athletic feats of any kind, ever\".\n[…]\nOn June 3, 2017, he made the first-ever free solo ascent of El Capitan by completing Alex Huber's 884 m (2,900 ft) big-wall crack climbing route, Freerider (5.13a VI), in 3 hours and 56 minutes. The climb, described as \"one of the great athletic feats of any kind, ever,\" was documented by climber and photographer Jimmy Chin and documentary filmmaker E. Chai Vasarhelyi, as the subject of the documentary Free Solo.\n[…]\nDierdre Wolownick, Alex Honnold's mother, started climbing at age 60 and is the oldest woman to climb El Capitan (first at the age of 66 and then, breaking her record, again at age 70).\n[…]\nHonnold 3.0 (2012)\n[…]\nDuane, Daniel (March 11, 2015). \"The Heart-Stopping Climbs of Alex Honnold\". The New York Times Magazine. Retrieved October 14, 2018.\n[…]\nLowther, Alex (Summer 2001). \"Less and Less Alone: Alex Honnold\". Alpinist. Retrieved October 14, 2018.\n[…]\nWorrall, Simon (January 3, 2016). \"Alex Honnold Isn't Fearless—He Just Accepts Death\". National Geographic. Archived from the original on May 27, 2018.\n[…]\nAlex Honnold 3.0 on YouTube (video)\n[…]\nAlex Honnold at IMDbAlex Honnold at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Free_Solo",
        "situacao": "ok",
        "texto": "Free Solo is a 2018 American documentary film directed by Elizabeth Chai Vasarhelyi and Jimmy Chin that profiles rock climber Alex Honnold on his quest to perform the first-ever free solo climb of a route on El Capitan, in Yosemite National Park in California, in June 2017.\n[…]\nIn the summer of 2016, Honnold and Tommy Caldwell go climbing in Morocco to prepare for his El Capitan free solo. The film crew also prepares, discussing where to place cameras to best capture Honnold’s climb while minimizing distractions and interference, and also the ethical dilemma of documenting this climb, knowing Honnold may die on camera.\n[…]\nPrior to filming, directors Elizabeth Chai Vasarhelyi and Jimmy Chin struggled with the ethical ramifications and decisions behind creating Free Solo, knowing Honnold could die on camera. Ultimately, they decided to go through with the film and devoted some time to documenting its own production process, with Chin and his camera crew discussing the challenge of not endangering climber Alex Honnold by distracting him or putting any pressure at all on him to attempt the climb.\n[…]\nPeter Debruge of Variety praised the pacing of the film, saying: \"Apart from a slow stretch around the hour mark, the filmmakers keep things lively (with a big assist from Marco Beltrami's pulse-quickening score, the nail-biting opposite of Tim McGraw's soaring end-credits single, \"Gravity\").\" Richard Lawson of Vanity Fair called the film \"bracingly made\" and felt the filmmakers properly conveyed the challenges and dangers faced by Honnold in his endeavors: \"Free Solo's detailed, transfixing portrait of their hero will at least show some sort of barrier to entry, communicating to those eager wannabes that very few people indeed are built quite like Alex Honnold."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Gruta de Fingal",
      "descricao": "Caverna marinha de colunas de basalto na ilha desabitada de Staffa, nas Hébridas Interiores, na Escócia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que compositor alemão visitou a Gruta de Fingal, numa ilha da Escócia, e se inspirou nela para criar a abertura As Hébridas?",
    "resposta": "Felix Mendelssohn",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fingal%27s_Cave",
      "https://en.wikipedia.org/wiki/The_Hebrides_(overture)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fingal%27s_Cave",
        "situacao": "ok",
        "texto": "Fingal's Cave is a sea cave on the uninhabited island of Staffa, in the Inner Hebrides of Scotland, known for its natural acoustics. The National Trust for Scotland owns the cave as part of a national nature reserve. It became known as Fingal's Cave after the eponymous hero of an epic poem by 18th-century Scots poet-historian James Macpherson.\n[…]\nRomantic composer Felix Mendelssohn visited in 1829 and wrote an overture, The Hebrides, Op. 26, (also known as Fingal's Cave Overture), and was said to be inspired by the weird echoes in the cave. Mendelssohn's overture popularized the cave as a tourist destination. Other famous 19th-century visitors included author Jules Verne, who used it in his book Le Rayon Vert (The Green Ray), and mentions it in the novels Journey to the Center of the Earth and The Mysterious Island.\n[…]\nThe playwright August Strindberg also set scenes from his play A Dream Play in a place called \"Fingal's Grotta\". Scots novelist Sir Walter Scott described Fingal's Cave as \"one of the most extraordinary places I ever beheld.\n[…]\nArtist Matthew Barney used the cave along with the Giant's Causeway for the opening and closing scenes of his art film, Cremaster 3. In 2008, the video artist Richard Ashrowan spent several days recording the interior of Fingal's Cave for an exhibition at the Foksal Gallery in Poland.\n[…]\nLloyd House at Caltech has a hallway (\"alley\") named Fingal's Cave.\n[…]\nIt is likely that the township of Fingal, Tasmania was named after Macpherson's poetry rather than the cave itself.\n[…]\nEngraving of Fingal's cave by James Fittler in the digitised copy of Scotia Depicta, or the antiquities, castles, public buildings, noblemen and gentlemen's seats, cities, towns and picturesque scenery of Scotland Archived 13 June 2019 at the Wayback Machine, 1804 at National Library of Scotland"
      },
      {
        "url": "https://en.wikipedia.org/wiki/The_Hebrides_(overture)",
        "situacao": "ok",
        "texto": "The Hebrides (; German: Die Hebriden) is a concert overture that was composed by Felix Mendelssohn in 1830, revised in 1832, and published the next year as Mendelssohn's Op. 26. Some consider it an early tone poem.\n[…]\nIt was inspired by one of Mendelssohn's trips to the British Isles, specifically an 1829 excursion to the Scottish island of Staffa, with its basalt sea cave known as Fingal's Cave. It was reported that the composer immediately jotted down the opening theme for his composition after seeing the island. He at first called the work To the Lonely Island or Zur einsamen Insel, but then settled on the present title.\n[…]\nAs an indication of the esteem in which it is held by musicians, Johannes Brahms once said \"I would gladly give all I have written, to have composed something like the Hebrides Overture\".\n[…]\nThe work was completed on 16 December 1830 and was originally entitled Die einsame Insel (The Lonely Island). However, Mendelssohn later revised the score and renamed the piece Die Hebriden (The Hebrides). Despite this, the title of Fingal's Cave was also used: on the orchestral parts he labelled the music The Hebrides, but on the score Mendelssohn labelled the music Fingal's Cave.\n[…]\nThe music, though labelled as an overture, is intended to stand as a complete work. Although programme music, it does not tell a specific story and is not \"about\" anything; instead, the piece depicts a mood and \"sets a scene\", making it an early example of such musical tone poems. The overture consists of two primary themes; the opening notes of the overture state the theme Mendelssohn wrote while visiting the cave, and is played initially by the violas, cellos, and bassoons.\n[…]\nMendelssohn on Mull Festival"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gruta_de_Fingal",
        "situacao": "ok",
        "texto": "A Gruta de Fingal é uma caverna marinha na ilha desabitada de Staffa, nas Hébridas Interiores, Escócia, que faz parte de um reserva nacional. É formada por basalto hexagonal, similar em estrutura - por causa da mesma origem num fluxo de lava - da Giant's Causeway, a Calçada dos Gigantes, na Irlanda do Norte. O seu tamanho e tecto de arcos naturais, juntamente com os arrepiantes ecos produzidos pel\n[…]\nO nome gaélico da gruta, Uamh-Binn, significa \"Gruta da melodia\".\n[…]\nA caverna foi \"descoberta\" no século XVIII pelo naturalista Sir Joseph Banks, em 1772. O nome Gruta de Fingal ficou conhecido com a composição de Mendelssohn da abertura Die Hebriden (\"As Hébridas\" op. 26), inspirada nos ecos da gruta (Fingal, Fionn mac Cumhail, foi o herói epónimo de um poema escrito pelo poeta e historiador escocês James Macpherson).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Monte Etna",
      "descricao": "Estratovulcão ativo na costa leste da Sicília, na Itália."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na mitologia grega, as forjas de qual deus ferreiro ficavam debaixo do vulcão Etna, na Sicília?",
    "resposta": "Hefesto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Etna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Etna",
        "situacao": "ok",
        "texto": "Mount Etna, or simply Etna, is an active stratovolcano on the east coast of Sicily, Italy, in the Metropolitan City of Catania, between the cities of Messina and Catania. It is located above the convergent plate margin between the African Plate and the Eurasian Plate. It is one of the tallest active volcanoes in Europe, and the tallest peak in Italy south of the Alps with a current height (Septemb\n[…]\nThe volcano is also known as Muncibbeḍḍu in Sicilian and Mongibello in Italian, generally regarded as deriving from the Romance word monte/munti plus the Arabic word jabal (جبل), both meaning 'mountain'. According to another hypothesis, the term comes from the Latin Mulciber (qui ignem mulcet, 'he who placates the fire'), one of the Latin names of the god Vulcan.\n[…]\nCaesarius employs in his account the Latin phrase in monte Gyber ('within Etna') to describe the location of Arthur's kingdom.\n[…]\nIn 396 BCE, an eruption of Etna reportedly thwarted the Carthaginians in their attempt to advance on Syracuse during the Second Sicilian War.\n[…]\nBeginning in February 2021, Mount Etna began a series of explosive eruptions, which have had an impact on nearby villages and cities, with volcanic ash and rock falling as far away as Catania. As of 12 March 2021, the volcano has erupted 11 times in three weeks. The eruptions have consistently sent ash clouds over 10 km (33,000 ft) into the air, closing Sicilian airports. There have been no reports of injuries.\n[…]\nThe borders of ten municipalities (Adrano, Biancavilla, Belpasso, Bronte (from two sides), Castiglione di Sicilia, Maletto, Nicolosi, Randazzo, Sant'Alfio, Zafferana Etnea) meet on the summit of Mount Etna, making this a multipoint of elevenfold complexity.\n[…]\nGenista aetnensis, the Mount Etna broom\n[…]\nMount Etna Regional Park\n[…]\nSmithsonian Institution: Global Volcanism Program: Etna"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Etna",
        "situacao": "ok",
        "texto": "O Etna é um vulcão ativo situado na parte oriental da Sicília (Itália), entre as províncias de Messina e Catânia. É o mais alto vulcão da Europa fora da região do Cáucaso, e um dos mais altos do mundo, atingindo aproximadamente 3.403 metros de altitude, podendo  aumentar, gradualmente devido às frequentes erupções.\n[…]\nO Etna para além de ter um cone principal tem 700 cones secundários. As frequentes e por vezes dramáticas erupções fizeram da montanha um tema recorrente na mitologia clássica, traçando-se paralelos entre o vulcão e vários deuses e gigantes das lendas do mundo romano e grego. Éolo, o rei dos ventos, teria confinado os ventos em cavernas sob o Etna. O gigante Tifão foi preso sob o vulcão, de acordo com o poeta Ésquilo e foi a causa de suas erupções.\n[…]\nDiz-se também que Vulcano (Hefesto no grego), o deus do fogo e da forja, tinha sua fundição sob o Etna e atraiu o deus de fogo Adrano para fora da montanha, enquanto os Ciclopes mantinham uma forja em que fabricavam raios para que Zeus os usasse como armas. Supõe-se que o submundo grego, Tártaro, encontrava-se abaixo do Etna.\n[…]\nA atividade vulcânica do Etna começou há aproximadamente 500 000 anos, com erupções sob a superfície marinha, ao largo da costa da Sicília. O vulcanismo começou a ocorrer há cerca de 300 000 anos a sudoeste do cume que hoje o vulcão apresenta, para o qual se moveu há uns 170 000 anos. As erupções de então começaram a construir o cone vulcânico principal, formando um estratovulcão em erupções efusivas e eruptivas alternadas.\n[…]\nEm 17 de janeiro de 2021, a lava começou a \"escorrer\" da cratera sudeste do vulcão e em direção ao leste.\n[…]\nVulcão Etna - página oficial\n[…]\nEtna Webcam ao vivo\n[…]\nhttps://cnnportugal.iol.pt/monte-etna/vulcao-etna-entra-em-erupcao-e-as-imagens-sao-impressionantes/20440228/620688670cf21a10a41eb2af",
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
