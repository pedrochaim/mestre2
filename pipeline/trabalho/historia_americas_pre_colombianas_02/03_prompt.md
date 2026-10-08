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
      "nome": "Pedra do Sol",
      "descricao": "Grande disco de basalto esculpido pelos mexicas, conhecido como calendário asteca, exposto no Museu Nacional de Antropologia, na Cidade do México."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Enterrada depois da conquista espanhola, a Pedra do Sol asteca foi reencontrada na praça central da Cidade do México em que século?",
    "resposta": "Século dezoito (em 1790)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aztec_calendar_stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aztec_calendar_stone",
        "situacao": "ok",
        "texto": "The Aztec sun stone (Spanish: Piedra del Sol) is a late post-classic Mexica sculpture housed in the National Anthropology Museum in Mexico City, and is perhaps the most famous work of Mexica sculpture. It measures 3.6 metres (12 ft) in diameter and 98 centimetres (39 in) thick, and weighs  24,590 kg (54,210 lb). Shortly after the Spanish conquest, the monolithic sculpture was buried in the Zócalo,\n[…]\nIt was rediscovered on 17 December 1790 during repairs on the Mexico City Cathedral. Following its rediscovery, the sun stone was mounted on an exterior wall of the cathedral, where it remained until 1885. Early scholars initially thought that the stone was carved in the 1470s, though modern research suggests that it was carved some time between 1502 and 1521.\n[…]\n... On the occasion of the new paving, the floor of the Plaza being lowered, on December 17 of the same year, 1790, it was discovered only half a yard deep, and at a distance of 80 to the West from the same second door of the Royal Palace, and 37 north of the Portal of Flowers, the second Stone, by the back surface of it.\n[…]\nThe words and actions of the Spanish, such as the destruction, removal, or burial of Aztec objects like the Sun Stone supported this message of inferiority, which still has an impact today. The Aztec capital of Tenochtitlan was covered by the construction of Mexico City, and the monument was lost for centuries until it was unearthed in 1790.\n[…]\nLeón y Gama, Antonio de. Descripción histórica y cronológica de las dos piedras: que con ocasión del empedrado que se está formando en la plaza Principal de México, se hallaron en ella el año de 1790. Impr. de F. de Zúñiga y Ontiveros, 1792. An expanded edition, with descriptions of additional sculptures (like the Stone of Tizoc), edited by Carlos Maria Bustamante, published in 1832. There have been a couple of facsimile editions, published in the 1980s and 1990s."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_do_Sol",
        "situacao": "ok",
        "texto": "Pedra do Sol (em castelhano:  Piedra del Sol) é uma escultura asteca pós-clássica tardia abrigada no Museu Nacional de Antropologia e é talvez a obra mais famosa da escultura asteca. A pedra tem 358 centímetros de diâmetro e 98 centímetros de espessura e pesa cerca de 21,8 toneladas. Logo após a conquista espanhola, a escultura monolítica foi enterrada no Zócalo, a principal praça da Cidade do Méx\n[…]\nApós sua redescoberta, a pedra foi montada em uma parede externa da Catedral, onde permaneceu até 1885. Os primeiros estudiosos inicialmente pensaram que a pedra foi esculpida na década de 1470, embora a pesquisa moderna sugira que ela tenha sido esculpida em algum momento entre 1502 e 1521.\n[…]\nCalendário asteca\n[…]\nMysteries of the Fifth Sun: The Aztec Calendar\n[…]\nIntroduction to the Aztec Calendar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Templo Mayor",
      "descricao": "Principal templo dos mexicas em Tenochtitlan, cujas ruínas ficam no centro da Cidade do México."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "As ruínas do Templo Mayor, o grande templo asteca, voltaram à luz quando operários de eletricidade acharam por acaso um enorme disco de pedra. Em que década?",
    "resposta": "Anos 1970 (em 1978)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Templo_Mayor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "The Templo Mayor (from Spanish: 'Main Temple') was the main temple of the Mexica people in their capital city of Tenōchtitlan, which is now Mexico City. Its architectural style belongs to the late Postclassic period of Mesoamerica. The temple was called Huēyi Teōcalli [we:ˈi teoːˈkalːi] in the Nahuatl language, meaning 'great church' or 'great house of god'.\n[…]\nFrom 1978 to 1982, specialists directed by archeologist Eduardo Matos Moctezuma worked on the project to excavate the Temple. Initial excavations found that many of the artifacts were in good enough condition to study. Efforts coalesced into the Templo Mayor Project, which was authorized by presidential decree.\n[…]\nHe states that the \"principal center, or navel, where the horizontal and vertical planes intersect, that is, the point from which the heavenly or upper plane and the plane of the Underworld begin and the four directions of the universe originate, is the Templo Mayor of Tenochtitlan.\" Matos Moctezuma supports his supposition by claiming that the temple acts as an embodiment of a living myth where \"all sacred power is concentrated and where all the levels intersect.\" Said myth is the birth and struggle between Huitzilopochtli and Coyolxauhqui.\n[…]\nThe ball field, called the tlachtli or teutlachtli, was similar to many sacred ball fields in Mesoamerica. Games were played barefoot, and players used their hips to move a heavy ball to stone rings. The field was located west of the Templo Mayor, near the twin staircases and oriented east–west. Next to this ball field was the \"huey tzompanti\" where the skulls of sacrifice victims were kept after being covered in stucco and decorated.\n[…]\nOfficial Museo del Templo Mayor website\n[…]\nMuseo del Templo Mayor-ASU site\n[…]\nTemplo Mayor entry on The Visual History Project\n[…]\nTourist visit to Templo Mayor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "O Templo Mayor era um dos principais templos dos astecas na sua capital Tenochtitlan, atual Cidade do México. O seu estilo arquitetónico pertence ao período pós-clássico mesoamericano. O templo era chamado huey teocalli na língua nauatle e estava dedicado a dois deuses em simultâneo, Huitzilopochtli, deus da guerra e Tlaloc, deus da chuva e da agricultura, cada um deles com um santuário no topo da\n[…]\nPorém, o impulso que levaria à escavação completa do sítio surgiu apenas no último quartel do século XX. Em 25 de fevereiro de 1978, os trabalhadores de uma companhia de eletricidade encontravam-se a abrir um buraco num local da cidade conhecido como a \"ilha dos cães.\" Tal nome tinha origem no facto de ser um local ligeiramente elevado relativamente ao resto da vizinhança e quando havia inundações, os cães de rua congregavam-se ali.\n[…]\nA dois metros de profundidade encontraram um monolito pré-hispânico que depois se viu ser um disco enorme com mais de 3,25 m de diâmetro, 30 cm de espessura e pesando 8,5 toneladas. O relevo na pedra foi mais tarde identificado como sendo Coyolxauhqui, a deusa da lua, datado do final do século XV.\n[…]\nEntre 1978 e 1982, especialistas sob a direção do arqueólogo Eduardo Matos Moctezuma trabalharam no projeto de escavação do templo. As escavações iniciais permitiram verificar que muitos dos artefatos se encontravam em condição suficientemente boa para serem estudados. Os vários esforços coalesceram no Projeto do Templo Maior, o qual foi autorizado por decreto presidencial.\n[…]\nEste museu é o resultado do trabalho efetuado desde o início da década de 1980 para resgatar, conservar e estudar o Templo Maior, o seu Recinto Sagrado e todos os objetos com ele associados e existe para tornar todas as descobertas acessíveis ao público.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Templo Mayor",
      "descricao": "Principal templo dos mexicas em Tenochtitlan, cujas ruínas ficam no centro da Cidade do México."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No alto do Templo Mayor havia dois santuários: um para Huitzilopochtli, deus da guerra, e outro para que deus da chuva?",
    "resposta": "Tláloc",
    "fonte": [
      "https://en.wikipedia.org/wiki/Templo_Mayor",
      "https://pt.wikipedia.org/wiki/Templo_Mayor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "The Templo Mayor (from Spanish: 'Main Temple') was the main temple of the Mexica people in their capital city of Tenōchtitlan, which is now Mexico City. Its architectural style belongs to the late Postclassic period of Mesoamerica. The temple was called Huēyi Teōcalli [we:ˈi teoːˈkalːi] in the Nahuatl language, meaning 'great church' or 'great house of god'.\n[…]\nDuring excavations, more than 7,000 objects were found, mostly offerings including effigies; clay pots in the image of Tlaloc; skeletons of turtles, frogs, crocodiles, and fish; snail shells; coral; gold; alabaster; Mixtec figurines; ceramic urns from Veracruz; masks from what is now Guerrero state; copper rattles; and decorated skulls and knives of obsidian and flint. These artifacts are now housed in the Templo Mayor Museum.\n[…]\nAs the southern half of the Great Temple represented Coatepec (on the side dedicated to Huitzilopochtli), the great stone disk with Coyolxauhqui's dismembered body was found at the foot of this side of the temple. The northern half represented Tonacatepetl, the mountain home of Tlaloc.\n[…]\nThe Calmecac was a residence hall for priests and a school for future priests, administrators and politicians, where they studied theology, literature, history and astronomy. Its exact location is on one side of what is now Donceles Street. The Temple of Quetzalcoatl was located to the west of the Templo Mayor. It is said that during the equinox, the sun rose between the shrines dedicated to Huitzilopochtli and Tlaloc and shone directly on this temple.\n[…]\nImages of the gods Huehueteotl-Xiuhtecuhtli, together with Tlaloc, presided over most of the offerings found in the Templo Mayor. Representing fire and water respectively, this pair of deities probably symbolized the concept of \"burning water,\" a metaphor for warfare.\n[…]\nMuseo del Templo Mayor-ASU site\n[…]\nTourist visit to Templo Mayor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Templo_Mayor",
        "situacao": "ok",
        "texto": "O Templo Mayor era um dos principais templos dos astecas na sua capital Tenochtitlan, atual Cidade do México. O seu estilo arquitetónico pertence ao período pós-clássico mesoamericano. O templo era chamado huey teocalli na língua nauatle e estava dedicado a dois deuses em simultâneo, Huitzilopochtli, deus da guerra e Tlaloc, deus da chuva e da agricultura, cada um deles com um santuário no topo da\n[…]\nApós a destruição de Tenochtitlan, o Templo Maior, tal como a maior parte da cidade, foi desmantelado e depois coberto pela nova cidade colonial espanhola. A localização exata do templo foi esquecida, embora no século XX os académicos tivessem já uma boa ideia sobre onde o procurar. Tal conhecimento baseava-se no trabalho de arqueologia efetuado no final do século XIX e na primeira metade do século XX.\n[…]\nLeopoldo Batres fez algum trabalho de escavação sob a Catedral Metropolitana da Cidade do México no final do século XIX, pois nesta altura pensava-se que fosse essa a localização do templo. Nas primeiras décadas do século XX, Manuel Gamio encontrou parte do canto sudoeste do templo e as suas descobertas foram exibidas publicamente. Contudo, tal não gerou grande interesse público na ampliação das escavações, pois a zona era uma área residencial da classe alta.\n[…]\nDurante as escavações foram encontrados mais de 7 000 objetos, sobretudo oferendas, incluindo efígies, vasos de barro à imagem de Tlaloc, esqueletos de tartarugas, sapos, crocodilos, e peixes, conchas de caracóis, coral, algum ouro, alabastro, figuras mixtecas, urnas de cerâmica de Veracruz, máscaras do atual estado de Guerrero, chocalhos de cobre, crânios decorados e facas de obsidiana e sílex. Estes objetos estão atualmente guardados no Museu do Templo Maior."
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Tenochtitlan",
      "descricao": "Capital dos astecas mexicas, erguida numa ilha do lago Texcoco, onde hoje fica a Cidade do México."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo a data tradicional, em que século os mexicas fundaram Tenochtitlan, menos de duzentos anos antes da chegada dos espanhóis?",
    "resposta": "Século quatorze (em 1325)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tenochtitlan",
      "https://pt.wikipedia.org/wiki/Tenochtitlan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlan, also known as Mexico-Tenochtitlan, was a large Mexican altepetl in what is now the historic center of Mexico City. The exact date of the founding of the city is unclear, but the date 13 March 1325 was chosen in 1925 to celebrate the 600th anniversary of the city. The city was built on an island in what was then Lake Texcoco in the Valley of Mexico.\n[…]\nTenochtitlan was one of two Mexica āltepētl (city-states or polities) on the island, the other being Tlatelolco.\n[…]\nTenochtitlan was the capital of the Mexican civilization of the Mexica people, founded in 1325. The state religion of the Mexica civilization awaited the fulfillment of an ancient prophecy: the wandering tribes would find the destined site for a great city whose location would be signaled by an eagle with a snake in its beak perched atop a cactus (Opuntia), which had grown from the heart of Copil.\n[…]\nA thriving culture developed, and the Mexica civilization came to dominate other tribes around Mexico. The small natural island was perpetually enlarged as Tenochtitlan grew to become the largest and most powerful city in Mesoamerica. Commercial routes were developed that brought goods from places as far as the Gulf of Mexico, the Pacific Ocean and perhaps even the Inca Empire.\n[…]\nConcern about the health of the indigenous population in early post-conquest Mexico–Tenochtitlan led to the founding of a royal hospital for indigenous residents.\n[…]\nMexico City's Zócalo, the Plaza de la Constitución, is located at the site of Tenochtitlan's original central plaza and market, and many of the original calzadas still correspond to modern city streets. The Aztec calendar stone was located in the ruins. This stone is 4 meters (13 ft 1 in) in diameter and weighs over 18.1 metric tons (20 short tons; 17.9 long tons). It was once located half-way up the great pyramid.\n[…]\nPortrait of Tenochtitlan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tenochtitlan",
        "situacao": "ok",
        "texto": "Tenochtitlán foi uma grande cidade-estado (āltepētl) mexica situada no que é hoje o centro histórico da capital mexicana. A data exata da fundação da cidade não é clara, mas o dia 13 de março de 1325 foi escolhido em 1925 para celebrar o 600º aniversário da Cidade do México.\n[…]\nTradicionalmente, o nome Tenochtitlan acreditava-se que viesse do náuatle tetl (\"pedra\") e nōchtli (\"figo-da-índia\") e é frequentemente interpretado como \"Entre os figos-da-índia que crescem entre rochas\". No entanto, uma menção em um manuscrito do final do século XVI, conhecido como \"os diálogos de Bancroft\", sugere que a segunda vogal era curta, de modo que a verdadeira etimologia permanece incerta. Entretanto, também se acredita que a cidade recebeu o nome do líder mexica Tenoch.\n[…]\nTenochtitlán foi a capital do povo mexica, fundada em 1325. A religião oficial da civilização mexica aguardava o cumprimento de uma antiga profecia: as tribos nômades encontrariam o local destinado a uma grande cidade, cuja localização seria sinalizada por uma águia com uma serpente no bico, empoleirada no topo de um cacto (Opuntia).\n[…]\nExistem vários manuscritos pictóricos da era colonial que tratam de Tenochtitlán-Tlatelolco e que lançam luz sobre os litígios entre espanhóis e indígenas por causa da propriedade. Um relato com informações sobre a guerra de Tenochtitlán contra seu vizinho Tlatelolco em 1473 e a conquista espanhola em 1521 é o Anales de Mexico y Tlatelolco, 1473, 1521–22.\n[…]\nO principal complexo de templos de Tenochtitlán, o Templo Mayor, foi desmantelado e o distrito central da cidade colonial espanhola foi construído sobre ele. O grande templo foi destruído pelos espanhóis durante a construção da Catedral da Cidade do México.\n[…]\nTenochtitlán, a capital asteca - Guia do Estudante"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Império Inca",
      "descricao": "Estado pré-colombiano andino, centrado em Cusco, que dominou boa parte da costa oeste da América do Sul nos séculos quinze e dezesseis."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Das conquistas de Pachacútec, a partir de 1438, até a chegada de Pizarro, por quanto tempo durou o Império Inca?",
    "resposta": "Cerca de cem anos",
    "distratores": [
      "Cerca de trezentos anos",
      "Cerca de quinhentos anos",
      "Cerca de mil anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_Empire",
      "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Inca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Empire",
        "situacao": "ok",
        "texto": "The Inca Empire, officially known as the Realm of the Four Parts (Quechua: Tawantinsuyu pronounced [taˈwantiŋ ˈsuju], lit. 'land of four parts'), was the largest empire in pre-Columbian America. The administrative, political, and military center of the empire was in the city of Cusco. The Inca civilisation rose from the Peruvian highlands sometime in the early 13th century. The Portuguese explorer\n[…]\nSpanish conquistadors led by Francisco Pizarro and his brothers explored south from what is today Panama, reaching Inca territory by 1526. It was clear that they had reached a wealthy land with prospects of great treasure, and after another expedition in 1529 Pizarro traveled to Spain and received royal approval to conquer the region and be its viceroy.\n[…]\nThe forces led by Pizarro consisted of 168 men, along with one cannon and 27 horses. The conquistadors were armed with lances, arquebuses, steel armor, and long swords. In contrast, the Inca used weapons made out of wood, stone, copper and bronze, while using an Alpaca fiber based armor, putting them at significant technological disadvantage – none of their weapons could pierce the Spanish steel armor.\n[…]\nThe first engagement between the Inca and the Spanish was the Battle of Puná, near present-day Guayaquil, Ecuador, on the Pacific Coast; Pizarro then founded the city of Piura in July 1532.\n[…]\nFollowing Pachacuti, the Sapa Inca claimed descent from Inti, who placed a high value on imperial blood; by the end of the empire, it was common to incestuously wed brother and sister. He was \"son of the sun\", and his people the Intip churin, or \"children of the sun\", and both his right to rule and mission to conquer derived from his holy ancestor.\n[…]\nAlmost all of the gold and silver work of the Inca Empire was melted down by the conquistadors and shipped back to Spain.\n[…]\n\"The Sacred Hymns of Pachacutec\", poetry of an Inca emperor.\n[…]\nInca Religion"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imp%C3%A9rio_Inca",
        "situacao": "ok",
        "texto": "Império Inca (em quíchua:  Tawantinsuyu, lit. \"quatro partes juntas\") foi o maior império da América pré-colombiana. O centro administrativo, político e militar do império ficava na cidade de Cusco. A civilização inca surgiu nas terras altas do Peru em algum momento do início do século XIII. Seu último reduto foi conquistado pelos espanhóis em 1572.\n[…]\nO termo Inka significa \"governante\" ou \"senhor\" em quíchua e era usado para se referir à classe dominante ou à família governante. Os incas em si compunham uma porcentagem muito pequena da população total do império, provavelmente numerando apenas 15 mil a 40 mil indivíduos, mas governando uma população de cerca de 10 milhões de pessoas. Os espanhóis adotaram o termo (transliterado como Inca em espanhol) para se referir a todos os súditos do império, ao invés de simplesmente à classe dominante.\n[…]\nO Império Inca foi precedido por dois impérios de grande escala nos Andes: o Tiwanaku (c. 300–1100), baseado em volta do Lago Titicaca e Tiauanaco-Huari (c. 600–1100) centrado perto da cidade de Ayacucho. Os huari ocuparam a área de Cuzco por cerca de 400 anos. Assim, muitas das características do Império Inca derivaram de culturas andinas multiétnicas e expansivas de eras anteriores.\n[…]\nNo Império Inca, a idade do casamento era diferente para homens e mulheres: os homens geralmente se casavam aos 20 anos, enquanto as mulheres geralmente se casavam cerca de quatro anos antes aos 16 anos. Os homens de alta posição social podiam ter várias esposas, mas os que ocupavam posições inferiores só podiam ter uma. Os casamentos eram tipicamente dentro das classes e se assemelhavam mais a um acordo comercial.\n[…]\nQuase todos os trabalhos feitos em ouro e prata pelo Império Inca foi derretido pelos conquistadores e enviado de volta para a Espanha.\n[…]\n«Tupac Amaru». , a vida, a época e a execução do último Inca."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Tríplice Aliança asteca",
      "descricao": "Aliança entre as cidades de Tenochtitlan, Texcoco e Tlacopan que formou a base do Império Asteca."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A Tríplice Aliança entre Tenochtitlan, Texcoco e Tlacopan, base do Império Asteca, foi formada em que século?",
    "resposta": "Século quinze",
    "distratores": [
      "Século onze",
      "Século doze",
      "Século treze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aztec_Triple_Alliance"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aztec_Triple_Alliance",
        "situacao": "ok",
        "texto": "The Aztec Empire, also known as the Triple Alliance (Classical Nahuatl: Ēxcān Tlahtōlōyān, [ˈjéːʃkaːn̥ t͡ɬaʔtoːˈlóːjaːn̥]) or historiographically as the Tenochca Empire but most accurately known as the Mexica, was an alliance of three Nahua city-states: Mexico-Tenochtitlan, Tetzcoco, and Tlacopan.\n[…]\nAfter the war, Huexotzinco withdrew, and, in 1430, the three remaining cities formed a treaty now known as the Triple Alliance. The Tepanec lands were carved up among the three cities, whose leaders agreed to cooperate in future wars of conquest. Land acquired from these conquests was to be held by the three cities together. A tribute was divided so that two kings of the alliance would go to Tenochtitlan and Texcoco and one would go to Tlacopan.\n[…]\nIn the following one hundred years, the Triple Alliance of Tenochtitlan, Texcoco, and Tlacopan dominated the Valley of Mexico and extended its power to the shores of the Gulf of Mexico and the Pacific Ocean. Tenochtitlan gradually became the dominant power in the alliance. Two of the primary architects of this alliance were the half-brothers and nephews of Itzcoatl Tlacaelel and Moctezuma. Moctezuma eventually succeeded Itzcoatl as the Mexica huetlatoani in 1440.\n[…]\nOriginally, the Aztec Empire was a loose alliance between three cities: Tenochtitlan, Texcoco, and the most junior partner, Tlacopan. As such, they were known as the 'Triple Alliance.' This political form was very common in Mesoamerica, where alliances of city-states were ever fluctuating.\n[…]\nSmith, M. E. (2001). \"The Archaeological Study of Empires and Imperialism in Pre-Hispanic Central Mexico\". Journal of Anthropological Archaeology. 20 (3): 245–284. doi:10.1006/jaar.2000.0372."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Cahokia",
      "descricao": "Grande cidade da cultura do Mississippi, com enormes montes de terra, no atual estado de Illinois."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Cahokia, cidade indígena de enormes montes de terra no atual Illinois, viveu seu auge por volta de que ano?",
    "resposta": "Ano 1100",
    "distratores": [
      "Ano 500 antes de Cristo",
      "Ano 300",
      "Ano 1450"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cahokia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cahokia",
        "situacao": "ok",
        "texto": "The Cahokia Mounds (also simply known as Cahokia)  (11 MS 2) is the site of a Native American city (which existed c. 1050–1350 AD) directly across the Mississippi River from present-day St. Louis. The state archaeology park lies in south-western Illinois between East St. Louis and Collinsville. The park covers 2,200 acres (890 ha), or about 3.5 square miles (9 km2), and contains about 80 manmade m\n[…]\nIt was during the Stirling phase (1100–1200 CE) that Cahokia was at its height of political centralization. Current academic discourse has emphasized religion as a major component in consolidating and maintaining the political power essential to Cahokia's urbanity. The Emerald Acropolis mound site in the uplands, was a site where the moon, water, femininity, and fertility were venerated; the mounds were aligned to lunar events in its 18.6 year cycle.\n[…]\nOne of the major problems that large centers like Cahokia faced was keeping a steady supply of food, perhaps exacerbated by droughts from CE 1100–1250. A related problem was waste disposal for the dense population, and Cahokia is believed to have become unhealthy from polluted waterways.\n[…]\nTogether with these factors, researchers found evidence in 2015 of major floods at Cahokia, so severe as to flood dwelling places. Analysis of sediment from beneath Horseshoe Lake has revealed that two major floods occurred in the period of settlement at Cahokia, in roughly 1100–1260 and 1340–1460.\n[…]\nThe Cahokia Woodhenge was a series of large timber circles located roughly 850 m (2,790 ft) to the west of Monks Mound. They are thought to have been constructed between 900 and 1100 CE, with each one being larger and having 12 more posts than its predecessor. The site was discovered during salvage archaeology undertaken by Dr. Warren Wittry in the early 1960s interstate highway construction boom.\n[…]\n\"Cahokia Mounds\", Illinois Historic Preservation Agency"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADtio_Hist%C3%B3rico_Estadual_dos_Cahokia_Mounds",
        "situacao": "ok",
        "texto": "Cahokia é a área de uma antiga cidade indígena (c. 600 - 1400 dC) localizada na planície de baixio norte-americana, entre Saint Louis Leste e Collinsville no Sudoeste de Illinois, através do Rio Mississippi, de St. Louis, Missouri. O local com cerca de 8,9 km2 incluiu 120 montes de terra estendendo-se através de  uma área de 15,5 quilómetros quadrados, dos quais 80 montes ainda existem.\n[…]\nEsta cultura surgiu no vale do Mississippi por volta de 700 d.C. Em seu auge nos anos 1100, Cahokia era o centro da cultura do Mississipi e lar de dezenas de milhares de nativos americanos que cultivavam, pescavam, comercializavam e construíam montes rituais gigantes. Nos anos 1400, Cahokia havia sido abandonada devido as mudanças climáticas na forma de inundações e secas consecutivas, elas desempenharam um papel fundamental no êxodo dos habitantes do Mississipi de Cahokia.\n[…]\nA região de Cahokia era uma cidade fantasma na época do contato europeu, com base no registro arqueológico. Uma nova onda de nativos americanos repovoou a região nos anos 1500 e manteve uma presença constante por volta dos anos 1700, quando migrações, guerras, doenças e mudanças ambientais levaram a uma redução na população local.\n[…]\nEvidências da reconstrução pós-Mississipianos mostram um retrato das comunidades construídas em torno da agricultura de milho, caça de bisontes e possivelmente até queimadas controladas nas pastagens, o que é consistente com as práticas de uma rede de tribos conhecida como Confederação de Illinois.\n[…]\nAo contrário dos Mississipianos, que estavam firmemente enraizados na metrópole de Cahokia, os membros da tribo da Confederação de Illinois vagavam mais longe, cuidando de pequenas fazendas e jardins, caçando caça e dividindo-se em grupos menores quando os recursos se tornavam escassos.==Referências==\n[…]\n«Tour Virtual por Cahokia Mounds» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Moctezuma II",
      "descricao": "Imperador mexica que governava Tenochtitlan quando Hernán Cortés chegou, em 1519."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano o imperador asteca Moctezuma segundo recebeu Hernán Cortés e seus soldados na entrada de Tenochtitlan?",
    "resposta": "1519",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moctezuma_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moctezuma_II",
        "situacao": "ok",
        "texto": "Moctezuma Xocoyotzin (c. 1466 – 29 June 1520), retroactively referred to in European sources as Moctezuma II, and often called Montezuma, was the ninth emperor of the Aztec Empire (also known as the Mexica Empire), reigning from 1502 or 1503 to 1520. Through his marriage with Queen Tlapalizquixochtzin of Ecatepec, one of his two wives, he was also the king consort of the altepetl.\n[…]\nThis crisis would later become relevant again after the Spanish arrived at Tenochtitlan, when Cacamatzin, who initially welcomed the Spaniards when they first entered in November 1519, attempted to raise an army against them for imprisoning Moctezuma (see below) by calling for the people of Coyoacan, Tlacopan, Iztapalapa and the Matlatzinca people to enter the city, kill the Spaniards and free Moctezuma in early 1520.\n[…]\nThe war between Mexico and Tlaxcala would eventually have devastating consequences, as the Tlaxcalans decided an alliance with Spain against Mexico on 23 September 1519 after a few battles proved that an alliance with this nation could help them destroy Moctezuma's reign.\n[…]\nWhen Cortés arrived in 1519, Moctezuma was immediately informed and he sent emissaries to meet the newcomers; one of them was an Aztec noble named Tentlil in the Nahuatl language but referred to in the writings of Cortés and Bernal Díaz del Castillo as \"Tendile\". As the Spaniards approached Tenochtitlán they allied with the Tlaxcalteca, who were enemies of the Aztec Triple Alliance, and they helped instigate revolt in many towns under Aztec dominion.\n[…]\nOn 8 November 1519, Moctezuma met Cortés on the causeway leading into Tenochtitlán and the two leaders exchanged gifts. Moctezuma gave Cortés the gift of an Aztec calendar, one disc of crafted gold, and another of silver. Cortés later melted these down for their monetary value.\n[…]\n\"Montezuma I.\" . Appletons' Cyclopædia of American Biography. 1900."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moctezuma_II",
        "situacao": "ok",
        "texto": "Montezuma II (c. 1466 – 29 de junho de 1520) retroativamente referido em fontes europeias como Moctezuma II, e muitas vezes simplesmente chamado de Montezuma, foi o nono imperador do Império Asteca (também conhecido como Império Mexica), que reinou de 1502 ou 1503 até 1520. Através de seu casamento com a rainha Tlapalizquixochtzin de Ecatepec, uma de suas duas esposas, ele também foi o rei consort\n[…]\nOs seus esforços de reforma foram interrompidos pela conquista espanhola em 1519. O seu reinado ficou marcado por duas rebeliões de tribos conquistadas, mas preocupou-se pouco em apaziguá-las e entregou-se largamente ao aspecto religioso do seu estado. Muito versado nas lendas tradicionais, ao receber a notícia do desembarque de Hernán Cortés, convenceu-se de que o deus Quetzalcoátl tinha regressado, conforme este profetizara nas lendas Toltecas, para destruir os povos mexicanos.\n[…]\nNa Primavera de 1519, ele recebeu as primeiras notícias de estranhos chegando à costa de seu império. Montezuma enviou um embaixador com duas roupas, uma do Deus Tlaloc, e outra do Deus Quetzalcoatl. Cada um destes deuses astecas tinha seus atributos: Tlaloc tinha uma máscara que fazia parecer que usasse óculos; já Quezalcoatl tinha uma máscara com uma barba. O embaixador asteca, ao ver o espanhol Hernán Cortés, achou que o conquistador tinha os atributos de Quezalcoatl, e vestiu-o como o deus.\n[…]\nA 8 de Novembro de 1519, Montezuma encontrou Hernán Cortés, a quem acreditava ser o deus Quetzalcoatl. Quando Cortés chegou em Tenochtitlán, Montezuma presenteou-o com flores de seu próprio jardim, que era a mais alta honraria que poderia oferecer. Cortés ordenou-lhe que suspendesse todos os sacrifícios humanos: Montezuma concordou, o sangue do templo foi lavado, e as imagens dos deuses astecas foram substituídas por ícones do cristianismo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Moctezuma II",
      "descricao": "Imperador mexica que governava Tenochtitlan quando Hernán Cortés chegou, em 1519."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A diarreia que ataca muitos turistas no México ganhou o apelido de vingança de que imperador asteca?",
    "resposta": "Montezuma (Moctezuma II)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Traveler%27s_diarrhea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Traveler%27s_diarrhea",
        "situacao": "ok",
        "texto": "Travelers' diarrhea (TD) is a stomach and intestinal infection experienced during travel to a new location as a result of lack of immunity to local food-borne pathogens. TD is defined as the passage of unformed stool (one or more by some definitions, three or more by others) while traveling. It may be accompanied by abdominal cramps, nausea, fever, headache, and bloating. Occasionally dysentery ma\n[…]\nIt has colloquially been known by a number of names, including \"Montezuma's revenge\", \"Turkey trots\", \"Bali belly\" and \"Delhi belly\".\n[…]\nConversely, immunity acquired by American students while living in Mexico disappeared, in one study, as quickly as eight weeks after cessation of exposure.\n[…]\nMoctezuma's revenge is a colloquial term for travelers' diarrhea contracted in Mexico. The name refers to Moctezuma II (1466–1520), the Tlatoani (ruler) of the Aztec civilization who was overthrown by the Spanish conquistador Hernán Cortés in the early 16th century, thereby bringing large portions of what is now Mexico and Central America under the rule of the Spanish crown. The relevance being that Cortés and his soldiers carried the smallpox virus, to which Mexicans had never been exposed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diarreia_do_viajante",
        "situacao": "ok",
        "texto": "Diarreia do viajante é uma infeção do estômago e dos intestinos caracterizada pela passagem de fezes líquidas ao viajar. Pode ser acompanhada de cólicas abdominais, náuseas, febre e distensão abdominal. Em alguns casos pode ocorrer diarreia com sangue. A maioria dos viajantes recupera ao fim de quatro dias, mesmo sem tratamento ou com tratamento mínimo. Em cerca de 10% dos casos os sintomas prolon\n[…]\nEntre as medidas de prevenção estão comer somente alimentos devidamente lavados ou cozinhados, beber água engarrafada e lavar frequentemente as mãos. A vacina contra a cólera, embora eficaz na prevenção de cólera, é de eficácia questionável contra a diarreia do viajante. Geralmente não é recomendada a administração de antibióticos como forma de prevenção.\n[…]\nO tratamento imediato consiste na ingestão de líquidos em quantidade e na reposição de sais minerais, entretanto perdidos (terapia de reidratação oral). Em casos com sintomas persistentes ou significativos podem ser administrados antibióticos, os quais podem ser tomados com loperamida para diminuir a diarreia. Menos de 3% dos casos requerem tratamento hospitalar.\n[…]\nEstima-se que a doença afete entre 20% e 50% dos viajantes para países em vias de desenvolvimento. A diarreia do viajante é particularmente comum entre viajantes para a Ásia (exceto Japão e Singapura), Médio Oriente, África, México e América Central e do Sul. O risco é moderado na Europa meridional, Rússia e China. A diarreia do viajante é associada à síndrome do cólon irritável e síndrome de Guillain-Barré.\n[…]\nDiarreia do viajante no Manual Merck",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Pakal",
      "descricao": "Rei maia de Palenque no século sete, sepultado no Templo das Inscrições."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década o arqueólogo Alberto Ruz abriu a tumba do rei maia Pakal, escondida no fundo de uma pirâmide de Palenque?",
    "resposta": "Anos 1950 (em 1952)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Temple_of_the_Inscriptions",
      "https://en.wikipedia.org/wiki/Pakal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temple_of_the_Inscriptions",
        "situacao": "ok",
        "texto": "The Temple of the Inscriptions (Classic Maya: Bʼolon Yej Teʼ Naah (Mayan pronunciation: [ɓolon jex teʔ naːh]) \"House of the Nine Sharpened Spears\") is the largest Mesoamerican stepped pyramid structure at the pre-Columbian Maya civilization site of Palenque, located in the modern-day state of Chiapas, Mexico. The structure was specifically built as the funerary monument for Kʼinich Janaabʼ Pakal, \n[…]\nConstruction of this monument commenced in the last decade of his life, and was completed by his son and successor Kʼinich Kan Bahlam II. Within Palenque, the Temple of the Inscriptions is located in an area known as the Temple of the Inscriptions’ Court and stands at a right angle to the southeast of the palace.\n[…]\nThe Temple of the Inscriptions was finished a short time after 683. The construction was initiated by Pakal himself, although his son, Kʼinich Kan Bahlam II completed the structure and its final decoration.\n[…]\nDespite the fact that Palenque, and the Temple of Inscriptions itself, had been visited and studied for more than two hundred years, the tomb of Pakal was not discovered until 1952. Alberto Ruz Lhuillier, a Mexican archaeologist, removed a stone slab from the floor of the temple, revealing a stairway filled with rubble. Two years later, when the stairway was cleared, it was discovered that it led into Pakal’s tomb.\n[…]\nThe tomb of Pakal yielded several important archaeological finds and works of art.\n[…]\nPakal’s death mask is another extraordinary artifact found in the tomb. The face of the mask is made entirely of jade, while the eyes consist of shells, mother of pearl, and obsidian.\n[…]\nThere were several smaller jade heads packed into Pakal’s sarcophagus and a stucco portrait of the king was found under the base of it.\n[…]\nFive skeletons, both male and female, were found at the entrance of the crypt. These sacrificial victims were intended to follow Pakal into Xibalba."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pakal",
        "situacao": "ok",
        "texto": "Kʼinich Janaab Pakal I (Mayan pronunciation: [kʼihniʧ χanaːɓ pakal]), also known as Pacal or Pacal the Great (24 March 603 – 29 August 683), was ajaw of the Maya city-state of Palenque in the Late Classic period of pre-Columbian Mesoamerican chronology. He acceded to the throne in July 615 and ruled until his death.\n[…]\nHowever, although his grandfather was a personage of ajaw ranking, he does not himself appear to have been a king. When instead the name Pakal I is used, this serves to distinguish him from two later known successors to the American rulership, Kʼinich Janaab Pakal II (ruled c. 742) and Janaab Pakal III, the last-known Palenque ruler (ruled c. 799).\n[…]\nKʼinich Janaab Pakal was a Palenque native, born on 9.8.9.13.0 (March 603) to Lady Sak Kʼukʼ of the ruling Palenque dynasty and her husband Kʼan Moʼ Hix.\n[…]\nPakal died on 9.12.11.5.18 (August 683), at the age of 80, having ruled Palenque for 68 years and 33 days.\n[…]\nAfter his death, Pakal was deified as one of the patron gods of Palenque. He was survived at least by his two sons Kan Bahlam and Kʼan Joy Chitam—each of whom subsequently also became Palenque's kʼuhul ajaw in his own right—and two grandsons, Ahkal Moʼ Nahb (successor of Kʼinich Kʼan Joy Chitam II as kʼuhul ajaw of Palenque) and Janaab Ajaw, a royal official inaugurated under the reign of Kʼinich Kʼan Joy Chitam II.\n[…]\nThough Palenque had been examined by archaeologists before, the secret to opening his tomb—closed off by a stone slab with stone plugs in the holes, which had until then escaped the attention of archaeologists—was discovered by Mexican archaeologist Alberto Ruz Lhuillier in 1948. It took four years to clear the rubble from the stairway leading down to Pakal's tomb, but it was finally uncovered in 1952."
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pakal",
      "descricao": "Rei maia de Palenque no século sete, sepultado no Templo das Inscrições."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A tampa esculpida do sarcófago do rei maia Pakal ficou famosa quando que escritor suíço afirmou ver nela um astronauta pilotando uma nave?",
    "resposta": "Erich von Däniken",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pakal",
      "https://en.wikipedia.org/wiki/Erich_von_D%C3%A4niken"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pakal",
        "situacao": "ok",
        "texto": "Kʼinich Janaab Pakal I (Mayan pronunciation: [kʼihniʧ χanaːɓ pakal]), also known as Pacal or Pacal the Great (24 March 603 – 29 August 683), was ajaw of the Maya city-state of Palenque in the Late Classic period of pre-Columbian Mesoamerican chronology. He acceded to the throne in July 615 and ruled until his death.\n[…]\nEpigraphers, on the other hand, insisted that allowing for such possibilities would go against everything else that is known about the Maya calendar and Maya written history, and asserted that the texts clearly state that it is indeed Kʼinich Janaabʼ Pakal entombed within, and that he did in fact die at the advanced age of 80, after reigning for 68 years.\n[…]\nPakal's tomb has been the subject of ancient astronaut speculations since its appearance in Erich von Däniken's 1968 best-seller Chariots of the Gods?. Von Däniken reproduced a drawing of the sarcophagus lid (though incorrectly labelling it as being from Copán) and compared Pakal's pose to that of Project Mercury astronauts in the 1960s; he interpreted drawings underneath Pakal as rockets, and offered the sarcophagus lid as possible evidence of an extraterrestrial influence on the ancient Maya.\n[…]\nSuch an interpretation is almost universally denounced by archaeologists, epigraphers, and art historians of the Maya, who point out that von Däniken's claim relies solely upon visual inspection, paying heed neither to the broader archaeological context nor to a wealth of additional research on Classic Maya artistic conventions, symbolism, cosmology, and written history.\n[…]\nFinley, Michael. \"Von Daniken's Maya Astronaut\". Shaw Webspace. Archived from the original on April 12, 2008. Retrieved 18 October 2015.\n[…]\nDäniken, Erich von (1969). Chariots of the Gods?: Unsolved Mysteries of the Past. Bantam Books. ISBN 0285502565."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Erich_von_D%C3%A4niken",
        "situacao": "ok",
        "texto": "Erich Anton Paul von Däniken (; German: [ˈeːrɪç fɔn ˈdɛːnɪkən]; 14 April 1935 – 10 January 2026) was a Swiss author of several pseudoscientific books which made claims about extraterrestrial influences on early human culture, including the best-selling Chariots of the Gods?, published in 1968. Däniken was one of the main figures responsible for popularizing the \"paleo-contact\" and ancient astronau\n[…]\nDäniken was the co-founder of the Archaeology, Astronautics and SETI Research Association (AAS RA). He designed Mystery Park, a theme park located in Interlaken, Switzerland, that opened in May 2003.\n[…]\nErich von Däniken acknowledged his popularity by referring to the phrase \"Dänikenitis\", which he mentions in his book Chariots of the Gods?\n[…]\nErich von Däniken (1973) [1972]. The Gold of the Gods. Translated by Michael Heron (1st ed.). London: Souvenir Press. Published simultaneously in Canada by J. M. Dent & Sons, Ontario (Canada).\n[…]\nErich von Däniken (1972). Aussaat und Kosmos. Spuren und Pläne außerirdischer Intelligenzen (in German) (1st ed.). Düsseldorf: Econ-Verlag.\n[…]\nErich von Däniken: Mysteries of the Gods / Message of the Gods (1976), directed by Harald Reinl and Charles Romine (English version), music by Peter Thomas . In the English version, William Shatner was the narrator.\n[…]\nFerry Radax: Mit Erich von Däniken in Peru (With Erich von Däniken in Peru, 1982). A documentary.\n[…]\nStory, Ronald (1980), The Space-gods revealed: A close look at the theories of Erich von Däniken (2 ed.), Barnes & Nobles, ISBN 006464040X\n[…]\nPeter Krassa, Disciple of the Gods: A Biography of Erich von Däniken (W. H. Allen & Unwin, 1976). ISBN 0352302623.\n[…]\nErich von Däniken's official homepage\n[…]\nErich von Däniken discography at Discogs\n[…]\nPublications by and about Erich von Däniken in the catalogue Helveticat of the Swiss National Library\n[…]\nErich von Däniken at IMDb\n[…]\nErich von Däniken at the Internet Speculative Fiction Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pacal%2C_o_Grande",
        "situacao": "ok",
        "texto": "K'inich J'anaab Pakal, também conhecido como Pacal II ou Pacal, o Grande (Palenque, 23 de março de 603 d.C. – Palenque, 28 de agosto de 683 d.C.) foi o governante do estado maia de B'aakal cuja sede era a cidade de Palenque. Pacal II é o mais conhecido dos senhores de Palenque em razão do desenvolvimento e sofisticação que B'aakal atingiu durante o seu governo, bem como pela sua tumba, considerada\n[…]\nA grande tampa do sarcófago de pedra esculpida no Templo das Inscrições é uma peça única da arte maia clássica. Iconograficamente, está intimamente relacionado com os grandes painéis de parede dos templos da Cruz e da Cruz Foliada centrados nas árvores do mundo. Ao redor das bordas da tampa há uma faixa com sinais cosmológicos, incluindo os do sol, da lua e da estrela, bem como as cabeças de seis nobres nomeados de vários níveis. A imagem central é a de uma árvore do mundo cruciforme.\n[…]\nA tumba de Pakal tem sido objeto de especulações de antigos astronautas desde sua aparição no best-seller de 1968 de Erich von Däniken, Chariots of the Gods?\n[…]\nVon Däniken reproduziu um desenho da tampa do sarcófago (embora rotulando-o incorretamente como sendo de Copán) e comparou a pose de Pakal à dos astronautas do Projeto Mercury na década de 1960; ele interpretou os desenhos embaixo de Pakal como foguetes e ofereceu a tampa do sarcófago como possível evidência de uma influência extraterrestre nos antigos maias.\n[…]\nTal interpretação é consensualmente negada por arqueólogos, epígrafos e historiadores da arte dos maias, que apontam que a afirmação de von Däniken se baseia exclusivamente na inspeção visual, não prestando atenção ao contexto arqueológico mais amplo nem a uma riqueza de pesquisas adicionais sobre o maia clássico. convenções artísticas, simbolismo, cosmologia e história escrita.\n[…]\nMedia relacionados com Pacal, o Grande no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Penacho de Moctezuma",
      "descricao": "Cocar asteca de plumas de quetzal e ouro, tradicionalmente atribuído a Moctezuma II, guardado num museu europeu."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O penacho de plumas de quetzal tradicionalmente atribuído ao imperador asteca Moctezuma está num museu de que cidade europeia?",
    "resposta": "Viena",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moctezuma%27s_headdress"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moctezuma%27s_headdress",
        "situacao": "ok",
        "texto": "Moctezuma's headdress is a historical artifact that has been long disputed in terms of origin, patron, and function. The object's function was perhaps featherwork headdress or military symbol. In the Nahuatl languages, it is known as a quetzalāpanecayōtl (ketsalaːpaneˈkajoːtɬ). There is a tradition that it belonged to Moctezuma II, the Aztec emperor at the time of the Spanish conquest. The provena\n[…]\nIn Mexica folklore, Moctezuma II is often remembered not only as a ruler but as a figure whose reign marked the coinciding of divine prophecy and political power. His association with Quetzalcoatl, the feathered serpent deity, imbues the headdress with a layer of religious and cultural symbolism. The headdress, crafted with the feathers of sacred birds is a powerful emblem of this connection.\n[…]\nThe Danza de los Quetzales was an ancient dance that originated from the legend of the quetzal, a mythological bird of Mesoamerica that was then considered by the Mexicas to be sacred and symbolic of the essence of beauty and elegance. Moctezuma's headdress is told to have been formed from twenty four feathers captured at great peril from the long tails of the quetzals.\n[…]\nMoctezuma's headdress measures 130 by 178 centimeters. It includes the green uppertail coverts of the quetzal bird, the turquoise feathers of the cotinga, brown feathers from the squirrel cuckoo, pink feathers from the roseate spoonbill, and small ornaments of gold.\n[…]\nEfforts to identify the origins and cultural significance of the headdress have continued over the years. Scholars and researchers have debated its provenance, questioning whether it was truly owned by \"Moctezuma II\" or served a broader ceremonial purpose in Aztec society. The headdress, made of vibrant \"Resplendent quetzal\" feathers and adorned with gold, is considered a masterpiece of Mesoamerican craftsmanship.\n[…]\nPropuesta de trueque histórico por el Penacho"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Cultura marajoara",
      "descricao": "Sociedade indígena que viveu na ilha de Marajó, no Pará, entre cerca de 400 e 1400, famosa por sua cerâmica pintada."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Urnas funerárias pintadas e estatuetas de cerâmica, feitas séculos antes de Cabral, revelam uma sociedade complexa que viveu em que grande ilha da foz do Amazonas?",
    "resposta": "Ilha de Marajó",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marajoara_culture",
      "https://pt.wikipedia.org/wiki/Cer%C3%A2mica_marajoara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marajoara_culture",
        "situacao": "ok",
        "texto": "The Marajoara or Marajó culture was an ancient pre-Cabraline era culture that flourished on Marajó island at the mouth of the Amazon River in northern Brazil. In a survey, Charles C. Mann suggests the culture appeared to flourish between 800 AD and 1400 AD, based on archeological studies. Researchers have documented that there was human activity at these sites as early as 1000 BC. The culture seem\n[…]\nThe pre-Cabraline culture of Marajó may have developed social stratification and supported a population as large as 100,000 people. The Native Americans of the Amazon rain forest may have used their method of developing and working in terra preta to make the land suitable for the large-scale agriculture needed to support large populations and complex social formations such as chiefdoms.\n[…]\nThe most common motif found in Marajoara iconography involves female imagery such as females as mythical ancestors, creators, cultural heroes, or females portrayed in shamanistic roles and with shamanistic power. These female motifs are typically found on ceramic artifacts, either pottery vessels or statues.\n[…]\nHowever, among the most significant ceramic collections in the region, the Marajó Museum, created in 1972, brings together pieces of everyday use and customs, relating to the civic-religious aspect of civilization. The museum was created to promote and make known to the public the culture and art of an ancient civilization.\n[…]\nThe general pattern of change found throughout artifacts on Marajo, especially in ceramics, is one that moves toward more complex, elaborate, and specialized wares through the Marajoara Phase, thought specialization and complexity later declined.\n[…]\nIndigenous Ceramics\n[…]\nMuseum of Indian Arts and Culture\n[…]\nMarajó Bay\n[…]\nMarajó Archipelago\n[…]\nMarajoara culture artwork Archived 2015-04-02 at the Wayback Machine, National Museum of the American Indian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cer%C3%A2mica_marajoara",
        "situacao": "ok",
        "texto": "A arte marajoara é uma cerâmica fruto do trabalho dos povos indígenas do período de ocupação \"marajoara\" na ilha brasileira de Marajó situada na foz do rio Amazonas (estado do Pará), durante o período pré-colonial brasileiro de 400 a 1400 d.C., sendo assim chamada de cerâmica marajoara, pois existem sucessivas fases de ocupações na região, cada uma com uma cerâmica característica.\n[…]\nA fase marajoara é a quarta fase de ocupação da ilha; sucessivamente as fases de ocupação são: Ananatuba (a mais antiga), Mangueiras, Formigas, Marajoara e, a Aruã. Destas cinco fases, a Fase Marajoara, período de uma elaborada civilização amazônida pré-cabralina, é a que apresenta a cerâmica mais elaborada, sendo reconhecida por sua sofisticação.\n[…]\nEm 1871, a cerâmica marajoara foi descoberta quando dois pesquisadores visitavam a Ilha de Marajó, o geólogo canadense-americano Charles Frederick Hartt (1840-1878) e naturalista Domingos Soares Ferreira Penna (fundador do Museu Paraense Emílio Goeldi em 1866). Hartt impressionou-se tanto com o que viu que publicou um artigo em uma revista científica, revelando ao mundo a então desconhecida cultura marajoara.\n[…]\nOs índígenas do Marajó confeccionavam objetos utilitários, mas também decorativos. Entre os vários objetos encontrados pelos pesquisadores encontram-se vasilhas, potes, urnas funerárias, brinquedos, estatuetas, vasos, pratos e tangas. A igaçaba, por exemplo, era uma espécie de pote de barro ou uma talha grande para a água, que servia para conservar alimentos e outros. Hoje existem várias cópias das igaçabas de Marajó.\n[…]\nÉ dificultado o resgate de peças de cerâmica marajoara pelas inundações periódicas e até pelos numerosos roubos e saques do material, frequentemente contrabandeado para território exterior ao brasileiro.\n[…]\nMarajoara Denise Schaan: a linguagem Iconográfica da cerâmica marajoara\n[…]\nA sociedade marajoara, Revista IstoÉ"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto feminino de mais de onze mil anos achado em Lagoa Santa, Minas Gerais, um dos mais antigos das Américas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O crânio de Luzia, de mais de onze mil anos, foi achado nos anos 1970 numa gruta de que estado brasileiro?",
    "resposta": "Minas Gerais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luzia_Woman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nLuzia was a young Homo sapiens woman who died in her early twenties. She stood just under 1.5 m tall and was a member of a group of hunter-gatherers.\n[…]\nLuzia's remains were discovered in 1974 during excavations at Lapa Vermelha IV, a rock shelter near Pedro Leopoldo, Minas Gerais, Brazil. The excavation was led by French archaeologist Annette Laming-Emperaire as part of a joint French–Brazilian research expedition. The remains were recovered from a sedimentary deposit approximately 12 metres (40 ft) below the surface of the shelter.\n[…]\nCharcoal was recovered from the same deposit as the skeleton, and flint tools were found nearby. Unlike later formal burials from Lagoa Santa, Luzia's body appears to have been laid in an extended position within a protected niche in the rock shelter rather than placed in a prepared grave.\n[…]\nA comparison in 2005 of Lagoa Santa specimens with modern Aimoré people of the same region also showed strong affinities, leading Neves to classify the Aimoré as Paleo-Indian.\n[…]\nLagoa Santa remains from a site nearby to the Luzia remains carry DNA regarded as Native American. Two of the Lagoa Santa individuals carry the same mtDNA haplogroup (D4h3a) also carried by older 12,000+ remains Anzick-1 found in Montana, mtDNA haplogroup A2, B2, C1d1 and three of the Lagoa Santa individuals harbor the same Y chromosome haplogroup Q1b1a1a1-M848 as found in the Spirit Cave genome of Nevada. The bust of Luzia displaying Australo-Melanesian features was created in 1999.\n[…]\nBuhl Woman"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nA gruta era famosa pelos trabalhos do cientista Peter Lund (1801–1880), que lá descobrira, entre 1835 e 1845, milhares de fósseis de animais extintos da época do Pleistoceno e 31 crânios humanos em estado fóssil do que passou a ser conhecido como o Homem de Lagoa Santa. Seus hábitos alimentares incluíam folhas, frutas, raízes e algumas vezes, carne.\n[…]\nInicialmente, Emperaire, acreditava que havia na verdade dois esqueletos diferentes no local do sítio arqueológico: um mais recente, datado em 11 mil anos, e outro localizado um metro abaixo, datado em 12 mil anos, o qual seria da cultura Clóvis e ao qual pertenceria o crânio de Luzia.\n[…]\nO trabalho foi feito em conjunto pela USP, pela Universidade Harvard e pelo Instituto Max Planck, da Alemanha. Os cientistas estudaram nove ossadas humanas da região de Lagoa Santa, em Minas Gerais. Dos mesmos sítios arqueológicos de Luzia, a ossada de uma mulher que teria vivido há mais de 11 mil anos e é considerada a primeira brasileira.\n[…]\nEntretanto, o resultado do estudo mostrou que Luzia vai precisar de um rosto novo. O atual, com nariz e lábios mais grossos, foi feito com base na ideia de que ela descendia de negritos do Oceano Índico, aborígenes australianos ou melanésios. Contudo, a análise do DNA mostrou que o código genético do povo de Lagoa Santa é semelhante ao de todos os povos indígenas da América e, neste caso, as feições seriam mongoloides.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto feminino de mais de onze mil anos achado em Lagoa Santa, Minas Gerais, um dos mais antigos das Américas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Luzia, um dos esqueletos humanos mais antigos das Américas, achado em Minas Gerais, recebeu esse nome em homenagem a que famoso fóssil africano?",
    "resposta": "Lucy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luzia_Woman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nThe nickname Luzia was chosen in homage to the Australopithecus fossil Lucy. The fossil was kept at the National Museum of Brazil, where it was shown to the public until it was fragmented during a fire that destroyed the museum on September 2, 2018. On October 19, 2018, it was announced that most of Luzia's remains were identified from the Museu Nacional debris, which allowed them to rebuild part of her skeleton.\n[…]\nThis interpretation led to the proposal that Luzia's ancestors represented an earlier migration into the Americas than the ancestors of later Indigenous American populations.\n[…]\nAncient DNA studies published in 2018 told a different story. Genetic analysis showed that Luzia was genetically Amerindian and found no evidence of a close genetic relationship between the people of Lagoa Santa and populations from Africa or Australia. These findings did not support the earlier hypothesis of a separate Australo-Melanesian migration into the Americas.\n[…]\nLagoa Santa remains from a site nearby to the Luzia remains carry DNA regarded as Native American. Two of the Lagoa Santa individuals carry the same mtDNA haplogroup (D4h3a) also carried by older 12,000+ remains Anzick-1 found in Montana, mtDNA haplogroup A2, B2, C1d1 and three of the Lagoa Santa individuals harbor the same Y chromosome haplogroup Q1b1a1a1-M848 as found in the Spirit Cave genome of Nevada. The bust of Luzia displaying Australo-Melanesian features was created in 1999.\n[…]\nMedia related to Luzia (fossil) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nFormalmente, o esqueleto se chama \"Lapa Vermelha IV Hominídeo 1\". \"Luzia\" é um apelido dado pelo biólogo Walter Alves Neves, do Instituto de Biociências da Universidade de São Paulo. Ele se inspirou em Lucy, o célebre fóssil de Australopithecus afarensis de 3,5 milhões de anos achado na Etiópia no ano de 1974.[carece de fontes]?\n[…]\nDo mesmo modo, na América do Norte, foram encontrados povos, tais como o de Kennewick que possuem feições intermediárias entre mongoloides e caucasoides, tão ou mais antigos que Luzia. O que indica que a maré mongoloide mais recente deve ter extinto estes povos anteriores de feições caucasoides e mongopigmoides em algum momento do paleolítico superior final.[carece de fontes]?\n[…]\nO trabalho foi feito em conjunto pela USP, pela Universidade Harvard e pelo Instituto Max Planck, da Alemanha. Os cientistas estudaram nove ossadas humanas da região de Lagoa Santa, em Minas Gerais. Dos mesmos sítios arqueológicos de Luzia, a ossada de uma mulher que teria vivido há mais de 11 mil anos e é considerada a primeira brasileira.\n[…]\nA segunda, criada na  década de 1990, diz que os territórios americanos foram povoados por humanos mais antigos ainda, os primeiros que já tinham saído da África, cruzado a Ásia e que teriam vindo direto para a América, até chegar ao Brasil. A ideia surgiu porque os pesquisadores estudaram as medidas do crânio de Luzia e acharam que ele era mais largo do que os dos indígenas e mais parecido com o dos africanos.\n[…]\nPovoamento das Américas\n[…]\nLucy",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Milho",
      "descricao": "Cereal domesticado por povos indígenas da Mesoamérica a partir do teosinto, base da alimentação de maias e astecas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A partir de uma gramínea selvagem chamada teosinto, povos indígenas domesticaram o milho há cerca de nove mil anos em que país atual?",
    "resposta": "México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maize",
      "https://pt.wikipedia.org/wiki/Milho"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maize",
        "situacao": "ok",
        "texto": "Maize (; Zea mays), also known as corn, is a tall stout grass that produces cereal grain. The leafy stalk of the plant gives rise to male inflorescences or tassels which produce pollen, and female inflorescences called ears. The ears yield grain, known as kernels or seeds. In modern commercial varieties, these are usually yellow or white; other varieties can be of many colors. Maize was domesticat\n[…]\nMaize is the domesticated variant of the four species of teosintes, which are its crop wild relatives. Teosinte was likely used by hunter-gatherers because it added security to their food supply, being that it was adaptable to changes in climate and environment.\n[…]\nIn 2004, John Doebley identified Balsas teosinte, Zea mays subsp. parviglumis, native to the Balsas River valley in Mexico's southwestern highlands, as the crop wild relative genetically most similar to modern maize. The middle part of the short Balsas River valley is the likely location of early domestication. Stone milling tools with maize residue have been found in an 8,700 year old layer of deposits in a cave not far from Iguala, Guerrero.\n[…]\nMaize requires human intervention for its propagation. The kernels of its naturally-propagating teosinte ancestor fall off the cob on their own, while those of domesticated maize do not. All maize arose from a single domestication in southern Mexico about 9,000 years ago. The oldest surviving maize types are those of the Mexican highlands. Maize spread from this region to the lowlands and over the Americas along two major paths.\n[…]\nThe centre of domestication was most likely the Balsas River valley of south-central Mexico. Maize reached highland Ecuador at least 8000 years ago. It reached lower Central America by 7,600 years ago, and the valleys of the Colombian Andes between 7,000 and 6,000 years ago."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Milho",
        "situacao": "ok",
        "texto": "O milho (Zea mays), também conhecido como milho-maís, maís, ou abati, é um cereal cultivado em grande parte do mundo e extensivamente utilizado como alimento humano ou para ração animal devido às suas qualidades nutricionais. Todas as evidências científicas levam a crer que seja uma planta de origem mexicana, já que a sua domesticação começou de 7 500 a 12 000 anos atrás na área central do México.\n[…]\nSegundo Mary Poll, em trabalho publicado na revista Proceedings of the National Academy of Sciences, os primeiros registros do cultivo do milho datam de há 7 300 anos, tendo sido encontrados em pequenas ilhas próximas ao litoral do México, no Golfo do México. Vestígios arqueológicos de milho encontrados na caverna Guila Naquitz no Vale de Oaxaca datam de há cerca de 6 250 anos e os mais antigos restos em cavernas de Tehuacán são de há cerca de 5 450 anos.\n[…]\nNos Estados Unidos, o uso do milho na alimentação humana direta é relativamente pequeno - embora haja grande produção de cereais matinais, como corn flakes, e xarope de milho, utilizado como adoçante. No México o seu uso é muito importante, sendo a base da alimentação da população (é o ingrediente principal das tortilhas, e outros pratos da culinária mexicana).\n[…]\nDe acordo com um estudo genético, verificou-se que o cultivo do milho foi introduzido na América do Sul a partir do México, em duas grandes ondas: a primeira, há 5 000 anos, difundida através dos Andes; a segunda, há 2 000 anos, através das terras baixas da América do Sul.\n[…]\nNo México, o milho transgênico também enfrenta séria oposição governamental: em 1998, foi proibida a experimentação, o cultivo e a importação de milho transgênico.\n[…]\n«EMBRAPA Milho e Sorgo (página oficial)»\n[…]\n«Página do Greenpeace sobre denúncia de plantio de milho transgênico no México»\n[…]\n«Página sobre milho da Singenta Portugal, sobre cultivo de milho no país»\n[…]\n«Página sobre aspectos agronômicos do Milho»"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Chinampa",
      "descricao": "Canteiro agrícola artificial construído pelos astecas sobre as águas rasas dos lagos do vale do México."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As chinampas, canteiros que os astecas criavam sobre as águas rasas dos lagos, ainda podem ser vistas em que região famosa da Cidade do México?",
    "resposta": "Xochimilco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chinampa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chinampa",
        "situacao": "ok",
        "texto": "Chinampa (Nahuatl languages: chināmitl [tʃiˈnaːmitɬ]) is a technique used in Mesoamerican agriculture which relies on small, rectangular areas of fertile arable land to grow crops on the shallow lake beds in the Valley of Mexico. The word chinampa has Nahuatl origins, chinampa meaning “in the fence of reeds.” They are built up on wetlands of a lake or freshwater swamp for agricultural purposes, an\n[…]\nThis method was also used and occupied most of Lake Xochimilco. The United Nations designated it a Globally Important Agricultural Heritage System in 2018.\n[…]\nThese raised, well-watered beds had very high crop yields with up to 7 harvests a year. Chinampas were commonly used in pre-colonial Mexico and Central America. There is evidence that the Nahua settlement of Culhuacan, on the south side of the Ixtapalapa peninsula that divided Lake Texcoco from Lake Xochimilco, constructed the first chinampas in C.E. 1100.\n[…]\nThere are still remnants of the chinampa system in Xochimilco, the southern portion of greater Mexico City. Chinampas have been promoted as a model for modern sustainable agriculture, although some sources have disputed the applicability of this model. One anthropologist, for instance, reports that attempts by Mexico to develop chinampas among the Chontal Maya people in the 1970s failed until the technicians modified their goals to suit the Chontales' interests.\n[…]\nAs of 1998, chinampas are still present in San Gregorio, a small town east of Xochimilco, in addition to San Luis, Tlahuac, and Mixquic. Although many of these gardens were constructed and thoroughly tended to from the Postclassic Period through the Spanish conquest, many of these plots of land still exist and are in active use.\n[…]\nChinampas Gardens. Brianna. Midwest Permaculture. December 6, 2012.\n[…]\nSoy Xochimilco (in Spanish and English) - CONABIO via YouTube\n[…]\nChinampas of Mexico - Andrew Millison on YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chinampa",
        "situacao": "ok",
        "texto": "Chinampa é um tipo de canteiro retangular estreito construído sobre áreas lacustres ou pantanosas, utilizado por civilizações mesoamericanas para o cultivo de plantas no Vale do México. Os Astecas não inventaram as chinampas, mas foram os primeiros a desenvolver cultivo de larga escala com esta técnica.\n[…]\nÀs vezes incorretamente chamadas de jardins 'flutuantes', chinampas são ilhas artificiais construídas através da fixação de estacas no fundo de um lago, sendo então trançadas com vimes e enchidas com rochas e solo do próprio lago e vegetação decomposta. Árvores como āhuexōtl (Salix bonplandiana, um chorão) e āhuēhuētl (Taxodium mucronatum, um cipreste) eram comumente plantadas ao redor de chinampas para estabilizar sua estrutura com raízes.\n[…]\nIlustração de chinampas astecas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Copán",
      "descricao": "Antiga cidade maia do período clássico, famosa por sua escadaria hieroglífica, perto da fronteira com a Guatemala."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As ruínas maias de Copán, famosas por uma escadaria coberta de hieróglifos, ficam em que país?",
    "resposta": "Honduras",
    "distratores": [
      "Guatemala",
      "México",
      "Belize"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cop%C3%A1n"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cop%C3%A1n",
        "situacao": "ok",
        "texto": "Copán is an archaeological site of the Maya civilization in the Copán Department of western Honduras, not far from the border with Guatemala. It is one of the most important sites of the Maya civilization, which was not excavated until the 19th century. The ruined citadel and imposing public squares reveal the three main stages of development before the city was abandoned in the early 10th century\n[…]\nCopán is in western Honduras close to the border with Guatemala. It lies within the municipality of Copán Ruinas in the department of Copán. It is in a fertile valley among foothills at 700 metres (2,300 ft) above mean sea level. The ruins of the site core of the city are 1.6 kilometers (1 mi) from the modern village of Copán Ruinas, which is built on the site of a major complex dating to the Classic period.\n[…]\nCopán had a major influence on regional centres across western and central Honduras, stimulating the introduction of Mesoamerican characteristics to local elites.\n[…]\nSeveral expeditions sponsored by the Peabody Museum of Harvard University worked at Copán during the late 19th and early 20th centuries, including the 1892–1893 excavation of the Hieroglyphic Stairway by John G. Owens and George Byron Gordon. The Carnegie Institution also sponsored work at the site in conjunction with the government of Honduras.\n[…]\nThe building has a high-quality sculpted exterior and a carved hieroglyphic bench inside. A portion of the group was a subdistrict occupied by non-Maya inhabitants from Central Honduras who were involved in the trade network that brought in goods from that region.\n[…]\nRecent archaeological investigations at Copán have expanded scholarly understanding of the city’s sociopolitical complexity and religious practices. Between 2010 and 2024, teams led by Honduran and international researchers uncovered new architectural features, burial sites, and epigraphic texts."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cop%C3%A1n",
        "situacao": "ok",
        "texto": "Copán é uma antiga cidade pré-colombiana situada no extremo oeste de Honduras, no departamento homônimo, próximo à fronteira com a Guatemala. Este lugar é  o maior sítio arqueológico do período clássico da civilização maia.\n[…]\nUm reino parece ter sido estabelecido em Copán em 159 d.C. e progrediu até se tornar um dos locais mais importantes da civilização maia antes do século V. Foram erguidos monumentos, com registros hieroglíficos datados de 435 até 822.\n[…]\nNa época em que a Espanha conquistou as Honduras, o sítio foi invadido pela floresta tropical. Embora arruinada, a cidade sempre foi conhecida dos locais desde os tempos coloniais até quando foi visitada por uma série de exploradores no início do século XIX.\n[…]\nJuan Galindo escreveu uma descrição das ruínas em 1834, e publicado no ano seguinte, motivou e interessou o explorador e escritor estadunidense John Lloyd Stephens e o arquiteto e desenhista  inglês Frederick Catherwood, que ilustrou o livro descrevendo Copán e outros lugares e que vieram a excitar muito o interesse geral e acadêmico pelas antiguidades meso-americanas. Sua publicação é considerada o início dos estudos da civilização maia que prosseguem atualmente.\n[…]\nO sítio de Copán foi objeto de umas das primeiras escavações arqueológicas conduzidas pelo Peabody Museum e Universidade de Harvard de 1891 até 1894. Algumas escavações e restaurações foram iniciadas pela Carnegie Institution em 1930 e novamente pelo PeabodyMuseum em 1970, seguindo-se do Projeto Copán do Governo de Honduras que segue-se até os dias de hoje.\n[…]\n\"Lost King of the Maya\" site on pbs.org companion site to \"Nova\" television doccumentary on Copan\n[…]\nHieroglyphs and History at Copan by David Stuart on peabody.harvard.edu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mesa Verde",
      "descricao": "Conjunto de moradias de pedra construídas sob penhascos pelos antigos povos pueblo, hoje parque nacional nos Estados Unidos."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "As famosas casas de pedra construídas sob penhascos em Mesa Verde, pelos antepassados dos povos pueblo, ficam em que estado americano?",
    "resposta": "Colorado",
    "distratores": [
      "Arizona",
      "Novo México",
      "Utah"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mesa_Verde_National_Park"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mesa_Verde_National_Park",
        "situacao": "ok",
        "texto": "Mesa Verde National Park is a national park of the United States and UNESCO World Heritage Site located in Montezuma County, Colorado, and the only World Heritage Site in Colorado. The park protects some of the best-preserved Ancestral Puebloan ancestral sites in the United States.\n[…]\nThe entrance to Mesa Verde National Park is on U.S. Route 160, approximately 9 miles (14 km) east of the community of Cortez and 7 miles (11 km) west of Mancos, Colorado. The park covers 52,485 acres (21,240 ha) It contains 4,372 documented sites, including more than 600 cliff dwellings. It is the largest archaeological preserve in the US. It protects some of the most important and best-preserved archaeological sites in the country.\n[…]\nAlso uncovered during the fires were extensive water containment features, including 1,189 check dams, 344 terraces, and five reservoirs that date to the Pueblo II and III periods. In February 2008, the Colorado Historical Society decided to invest a part of its $7 million (equivalent to $9,984,000 in 2024) budget into a culturally modified trees project in the national park.\n[…]\nThe Ute Mountain Tribal Park, adjoining Mesa Verde National Park to the east of the mountains, is approximately 125,000 acres (51,000 ha) along the Mancos River. Hundreds of surface sites, cliff dwellings, petroglyphs, and wall paintings of Ancestral Puebloan and Ute cultures are preserved in the park. Native American Ute tour guides provide background information about the people, culture, and history of the park lands.\n[…]\nList of prehistoric sites in Colorado\n[…]\nInteractive map of Mesa Verde National Park\n[…]\nMesa Verde National Park (UNESCO World Heritage Centre)\n[…]\nHAER No. CO-79, \"Mesa Verde National Park Main Entrance Road\", 73 photos, 102 data pages, 4 photo caption pages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_de_Mesa_Verde",
        "situacao": "ok",
        "texto": "O Parque Nacional de Mesa Verde (em inglês:  Mesa Verde National Park) é um parque nacional dos Estados Unidos, considerado Patrimônio Mundial pela UNESCO, localizado condado de Montezuma, Colorado. O parque ocupa uma área total de 211 quilômetros quadrados onde podem ser encontrados diversas ruínas e vilarejos da antiga cultura Pueblo.\n[…]\nÉ muito conhecido por várias habitações construídas nas paredes de penhascos — estruturas construídas em cavidades ou sob saliências das paredes dos cânions — incluindo o Palácio do Penhasco, reconhecida como a maior habitação deste tipo em toda a América do Norte.\n[…]\nO relevo do parque é significativo, indo de 1860 até 2560 metros. O terreno é dominado por cadeias de morros e vales, que cortam o parque de norte a sul. Em relação às aparições na cultura popular, o lugar está presente em um cenário do jogo eletrônico Ben 10: Protector of Earth.\n[…]\nUnesco - Parque Nacional Mesa Verde",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Cidade Perdida de Z",
      "descricao": "Cidade lendária que o explorador britânico Percy Fawcett acreditava existir na selva brasileira e procurou até desaparecer, em 1925."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1925, o explorador inglês Percy Fawcett sumiu na selva procurando uma cidade perdida que chamava de Z. Em que estado brasileiro?",
    "resposta": "Mato Grosso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Percy_Fawcett",
      "https://en.wikipedia.org/wiki/Lost_City_of_Z"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Percy_Fawcett",
        "situacao": "ok",
        "texto": "Percy Harrison Fawcett  (18 August 1867 – disappeared 29 May 1925) was a British geographer, artillery officer, cartographer/surveyor, archaeologist and explorer of South America. He disappeared in 1925 (along with his eldest son, Jack, and one of Jack's friends, Raleigh Rimmel) during an expedition to find an ancient lost city which he and others believed existed in the Amazon rainforest.\n[…]\nBy 1914, based on documentary research, Fawcett had formulated ideas about a \"lost city\" he named \"Z\" (Zed) somewhere in the Mato Grosso. He theorized that a complex civilization once existed in the region and that isolated ruins might have survived. Fawcett also found a document known as Manuscript 512, written after explorations made in the sertão of the state of Bahia, and housed at the National Library in Rio de Janeiro.\n[…]\nIn 1927, a nameplate of Fawcett's was found with an indigenous tribe. In June 1933, a theodolite compass belonging to Fawcett was found near the Baciary Indians of Mato Grosso by Colonel Aniceto Botelho. However, the nameplate was from Fawcett's expedition five years earlier and had most likely been given as a gift to the chief of that tribe. The compass was proven to have been left behind before he entered the jungle on his final journey.\n[…]\nDanish explorer Arne Falk-Rønne journeyed to Mato Grosso during the 1960s. In a 1991 book, he wrote that he learned of Fawcett's fate from Villas-Bôas, who had heard it from one of Fawcett's murderers. Allegedly, Fawcett and his companions had a mishap on the river and lost most of the gifts they had brought along for the Indian tribes.\n[…]\nFawcett, Percy and Brian Fawcett (1953), Lost Trails, Lost Cities, Funk & Wagnalls ASIN B0007DNCV4\n[…]\nVirtual Exploration Society – Colonel Percy Fawcett Archived 12 June 2022 at the Wayback Machine\n[…]\nLost in the Amazon: The Enigma of Col. Percy Fawcett PBS Secrets of the Dead documentary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lost_City_of_Z",
        "situacao": "ok",
        "texto": "The Lost City of Z is the name given by Lt. Colonel Percy Harrison Fawcett, a British surveyor of the early 20th century, to an indigenous city that he believed had existed in the jungle of the Mato Grosso state of Brazil. Based on early histories of South America and his own explorations of the Amazon River region, Fawcett theorized that a complex civilization had once existed there, and that iso\n[…]\nIn 1920, after the war ended, Fawcett undertook a personal expedition to Mato Grosso (interestingly, not on the same region as Bahia) to find the city, but withdrew after suffering from fever and having to shoot his pack animal. On a second expedition in 1925, Fawcett, his son Jack, and Jack's friend Raleigh Rimmel disappeared while exploring the jungles of Mato Grosso.\n[…]\nIn 2005, the American journalist David Grann published an article in The New Yorker on Fawcett's expeditions and findings, titled \"The Lost City of Z\". In 2009 he developed it into a book of the same title, and in 2016 it was adapted by writer-director James Gray into a film of the same name starring Charlie Hunnam, Robert Pattinson, Tom Holland, and Sienna Miller.\n[…]\nIn 2019 \"The Lost City of Z\" was mentioned in the episode 133 of the podcast The Magnus Archives, in the form of a fictional retelling of the expedition of Colonel Percy Harrison Fawcett.\n[…]\nLost city\n[…]\nPaititi – Legendary Inca lost city\n[…]\nFawcett, Percy Harrison (1953). Fawcett, Brian (ed.). Lost Trails, Lost Cities. New York: Funk & Wagnalls. LCCN 53006980. OL 6134053M.\n[…]\n\"Books: Fawcett of the Mato Grosso\". Time. Vol. XLI, no. 21. 25 May 1953.\n[…]\nLanger, Johnni (2002). \"A Cidade Perdida da Bahia: mito e arqueologia no Brasil Império\". Revista Brasileira de História (in Portuguese). 22 (43): 126–152. doi:10.1590/S0102-01882002000100008. ISSN 1806-9347.\n[…]\nSecrets of the Dead - Lost in the Amazon. PBS video special on Fawcett's quest for the City of Z."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Percy_Fawcett",
        "situacao": "ok",
        "texto": "O Coronel Percy Harrison Fawcett (Torquay, 15 de agosto de 1867 – provavelmente no Mato Grosso em 1925) foi um arqueólogo e explorador britânico que desapareceu ao organizar uma expedição para procurar por uma civilização perdida na Serra do Roncador, Xingu, no estado do Mato Grosso, Brasil.\n[…]\nEm 1925 convidou seu filho mais velho, Jack Fawcett, para acompanhá-lo em uma missão em busca de uma cidade perdida, a qual ele tinha chamado de \"Z\". Após tomar conhecimentos de lendas antigas e estudar registros históricos, Fawcett estava convencido que essa cidade realmente existia e se situava em algum lugar do estado do Mato Grosso, mais precisamente na Serra do Roncador.\n[…]\nOuviram também algumas versões mais fantásticas dentre as quais destacam-se a história de que Fawcett teria perdido sua memória e estaria vivendo como chefe de uma tribo de canibais ou de que eles realmente encontraram a cidade perdida no sul do estado do Pará, mas foram impedidos de retornar para manter o segredo da existência de tal local.\n[…]\nAo todo, cerca de 100 exploradores morreram[carece de fontes]? tentando procurar pelos membros da expedição de Fawcett. Três expedições de resgate também desapareceram na mesma região, que continua praticamente inexplorada até os dias atuais.\n[…]\nInclusive esse livro serviu de base para o filme lançado nos cinemas em junho de 2017 denominado Z: A Cidade Perdida com a participação de Robert Pattinson, no papel coadjuvante de um explorador amigo do coronel Fawcett.\n[…]\nVirtual Exploration Society - Colonel Percy Fawcett (em inglês)\n[…]\nFawcett, Percy Harrison. Lost Trails, Lost Cities. [S.l.: s.n.] LCCN 53006980. OL 6134053M\n[…]\n«A Cidade Perdida da Bahia: mito e arqueologia no Brasil Império». Revista Brasileira de História. 22. ISSN 1806-9347. doi:10.1590/S0102-01882002000100008",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Balsa Muísca",
      "descricao": "Peça de ouro dos muíscas que representa uma jangada com um chefe e acompanhantes, ligada ao ritual que originou a lenda do Eldorado."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Balsa Muísca, pequena jangada de ouro que retrata o ritual que originou a lenda do Eldorado, está no Museu do Ouro de que capital?",
    "resposta": "Bogotá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Muisca_raft"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muisca_raft",
        "situacao": "ok",
        "texto": "The Muisca raft (Balsa Muisca in Spanish), sometimes referred to as the Golden Raft of El Dorado or the Pasca raft, is a pre-Columbian votive piece created by the Muisca, an Andean people of Colombia in the Eastern Ranges of the Colombian Andes that established multiple chiefdoms in the region. The raft was a propitiatory offering made within the historical context of the emerging muisca chiefdom \n[…]\nSince its discovery in 1969, the Muisca raft has become a national emblem for Colombia and has been depicted on postage stamps. The piece is exhibited at the Gold Museum in Bogotá.\n[…]\nDuring the time of the raft's confection, between approximately 1200 and 1400 AD, the Pasca chiefdom was emerging, due to its participation in trade networks and its proximity to non-muisca groups and powerful musical chiefdoms. The offering \"could have been made by a Pasca chief at a particular juncture, such as his appointment, […] a period of untest\" or by \"important caciques such as those of Bogotá, Guasca, or Guatavita\" to \"exercise their power and dominance […] or reinforce alliances\".\n[…]\nThe Muisca had one god for each necessity. Chibchacum, of the Bogotá province, was the god of merchants, goldsmiths, peasants, and wealthy people; Nencatacoa, of drunkenness, weavers, and blanket painters. Cuchaviva, the rainbow, to whom one should offer figurines of \"low karat gold\", was the god of childbirth. Among the many gods, Bochica, the main deity, was lord of chiefs and captains, and, like Chibchacum, received only gold offerings.\n[…]\nToday, protections are in place to preserve the Muisca heritage, including tunjos like the Muisca raft. As part of Colombia's historical and cultural heritage plan, the government placed Lake Guatavita under legal protection in 1965. The Muisca raft, together with a large collection of other tunjos, are held at the Gold Museum in Bogotá.\n[…]\nMuisca\n[…]\nEl Dorado\n[…]\nMuisca goldworking"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Popol Vuh",
      "descricao": "Livro que reúne os mitos de criação e a história dos maias quichés, da Guatemala."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O manuscrito mais antigo que se conhece do Popol Vuh, copiado por um frade no começo do século dezoito, está numa biblioteca de que cidade americana?",
    "resposta": "Chicago",
    "distratores": [
      "Nova York",
      "Washington",
      "Boston"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Popol_Vuh"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "Popol Vuh (also  Popul Vuh or Pop Vuj) is a text recounting the mythology and history of the Kʼicheʼ people of Guatemala, one of the Maya peoples who also inhabit the Mexican states of Chiapas, Campeche, Yucatan and Quintana Roo, as well as areas of Belize, Honduras and El Salvador.\n[…]\nIn 1897, Ayer decided to donate his 17,000 pieces to The Newberry Library in Chicago, a project that was not completed until 1911. Father Ximénez's transcription-translation of Popol Vuh was among Ayer's donated items.\n[…]\nThe Popol Vuh continues to be an important part in the belief system of many Kʼicheʼ. Although Catholicism is generally seen as the dominant religion, some believe that many natives practice a syncretic blend of Christian and indigenous beliefs. Some stories from the Popol Vuh continued to be told by modern Maya as folk legends; some stories recorded by anthropologists in the 20th century may preserve portions of the ancient tales in greater detail than the Ximénez manuscript.\n[…]\nIn 1934, the early avant-garde Franco-American composer Edgard Varèse wrote his Ecuatorial, a setting of words from the Popol Vuh for bass soloist and various instruments.\n[…]\n2018. The Popol Vuh: A New Verse Translation. Bazzett, Michael (trans.). Seedbank Books. 2018. ISBN 978-1-5713-1468-0.{{cite book}}:  CS1 maint: others (link)\n[…]\nPopol Wuj Archives, sponsored by the Department of Spanish and Portuguese at The Ohio State University, Columbus, Ohio, and the Center for Latin American Studies at OSU.\n[…]\nA facsimile of the earliest preserved manuscript, in Quiché and Spanish, hosted at The Ohio State University Libraries. Learn more about this project by reading \"Decolonial Information Practices: Repatriating and Stewarding the Popol Vuh Online.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Popol_Vuh",
        "situacao": "ok",
        "texto": "O termo Popol Vuh, comumente traduzido do idioma quiché como \"livro da comunidade\", é um registro documental da cultura maia, produzido no século XVI, e que tem como tema a concepção de criação do mundo deste povo. Popol é interpretado como \"comunidade\" ou \"conselho\", e dá a ideia de algo que é de propriedade comum; e vuh ou wuj, em quiché moderno, significa \"livro\".\n[…]\nAcredita-se que o manuscrito original do Popol Vuh tenha sido escrito por volta de 1554-1558, em alfabeto latino, no idioma quiché. No entanto, esse manuscrito permanece perdido até os dias atuais. O documento foi traduzido para o castelhano pelo frei Francisco Ximénez, em 1701, e encontra-se hoje em Chicago, na Biblioteca Newberry. Em 1861, Charles Étienne Brasseur de Bourboung baseou-se em uma tradução de Carl Scherzer e publicou o texto, em francês, sob o nome de Popol vuh.\n[…]\nSegundo historiadores e demais estudiosos do período colonial, o Popol Vuh e outras fontes contendo narrativas religiosas dos nativos americanos apresentam o mesmo problema quando analisadas: a posição dos deuses e divindades mesoamericanos foi moldada a partir de visões cristãs de importância e hierarquia, o que teria provocado uma distorção sobre a real importância que os maias concediam a cada deus, ou mesmo como este povo concebia a noção de divino.\n[…]\nO Popol Vuh, depois das traduções de Scherzer e Brausser, encontra-se hoje traduzido em diversas línguas e permanece como uma das principais fontes de informação - não só acerca das bases da cultura maia como também do período de colonização da América, por sua dualidade de interpretações. As narrativas nele presentes ainda são preservados por tribos maias como um importante elemento constitutivo de sua identidade.\n[…]\nO Popol Vuh. Tradução do espanhol ao português feita pelo Google. Acessado em 09 de junho de 2012.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cacau",
      "descricao": "Semente da árvore do cacau, domesticada na América e base do chocolate."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 2018, cientistas acharam vestígios de cacau com cerca de cinco mil e trezentos anos num sítio arqueológico amazônico de que país?",
    "resposta": "Equador",
    "fonte": [
      "https://en.wikipedia.org/wiki/History_of_chocolate",
      "https://en.wikipedia.org/wiki/Theobroma_cacao"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/History_of_chocolate",
        "situacao": "ok",
        "texto": "The history of chocolate dates back more than 5,000 years, when the cacao tree was first domesticated in present-day Ecuador. Soon after domestication, the tree was introduced to Mesoamerica, where cacao drinks gained significance as an elite beverage among cultures including the Maya and the Aztecs. Cacao was considered a gift from the gods and was used as currency, medicine, and in ceremonies.\n[…]\nThe cacao tree is native to the Amazon rainforest. Evidence of cacao domestication exists as early as circa 3300 BC in present-day southeast Ecuador by the Mayo-Chinchipe culture, before it was introduced to Mesoamerica. This emerged from research into residue in ceramics, which revealed starch grains specific to the cacao tree, residue of theobromine (a compound found in high levels in cacao), and fragments of ancient DNA with sequences unique to the cacao tree.\n[…]\nIn 2005, a non-binding, voluntary industry agreement called the Harkin–Engel Protocol created by US Congress members was created to address child and forced labor. The media's reporting on this issue is often sensationalistic, and as of 2018, the topic had not been systematically studied. Issues with child labor are not restricted to Africa. Awareness of labor conditions of cacao growers spurred demand for fair trade chocolate.\n[…]\nAs of 2019, the cacao industry was under threat by the emergence of diseases; by 2017 up to 38% of cacao harvested annually was lost to disease. As of 2023, the industry's sustainability was threatened by the need for deforesting for more land, poor soil management, persistent poverty and forced labor among cacao farmers, and climate change. As of 2018, there was \"little evidence\" that initiatives to reduce child labor had been effective."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Theobroma_cacao",
        "situacao": "ok",
        "texto": "Theobroma cacao (cacao tree or cocoa tree) is a small (6–12 m (20–39 ft) tall) evergreen tree in the Malvaceae family. Its seeds—cocoa beans when dried and fermented—are used to make chocolate liquor, cocoa powder, cocoa butter and chocolate. Although the tree is native to the tropics of the Americas, the largest producer of cocoa beans in 2022 was Côte d'Ivoire.\n[…]\nCacao swollen shoot virus\n[…]\nThe cacao tree, native of the Amazon rainforest, was first domesticated at least 5,300 years ago, in equatorial South America from the Santa Ana-La Florida (SALF) site in what is present-day southeast Ecuador (Zamora-Chinchipe Province) by the Mayo-Chinchipe culture before being introduced in Mesoamerica.\n[…]\nThe initial domestication was probably related to the making of a fermented alcoholic beverage. In 2018, researchers who analysed the genome of cultivated cacao trees concluded that the domesticated cacao trees all originated from a single domestication event that occurred about 3,600 years ago somewhere in Central America.\n[…]\nAs cacao is the only known commodity from Mesoamerica containing both of these alkaloid compounds, it seems likely these vessels were used as containers for cacao drinks. In addition, cacao is named in a hieroglyphic text on one of the Rio Azul vessels. Cacao is also believed to have been ground by the Aztecs and mixed with tobacco for smoking purposes. Cocoa was being domesticated by the Mayo Chinchipe of the upper Amazon around 3,000 BC.\n[…]\nThe Nahuatl-derived Spanish word cacao entered scientific nomenclature in 1753 after the Swedish naturalist Linnaeus published his taxonomic binomial system and coined the genus and species Theobroma cacao. Traditional pre-Hispanic beverages made with cacao are still consumed in Mesoamerica. These include the Oaxacan beverage known as tejate.\n[…]\nTheobroma grandiflorum, the white cacao"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_chocolate",
        "situacao": "ok",
        "texto": "A história do chocolate remonta a mais de 5.000 anos, quando o cacaueiro foi domesticado pela primeira vez no atual Equador. Logo após a domesticação, a árvore foi introduzida na Mesoamérica, onde as bebidas à base de cacau ganharam importância como uma bebida da elite entre culturas como a civilização maia e a asteca. O cacau era considerado uma dádiva dos deuses e utilizado como moeda, medicamen\n[…]\nO cacaueiro é nativo da floresta Amazônica. Há evidências da domesticação do cacau já por volta de 3300 a.C., no atual sudeste do Equador, pela cultura Mayo-Chinchipe, antes de sua introdução na Mesoamérica.\n[…]\nEm resposta, passou-se a produzir mais cacau no litoral de Guayaquil, no Equador, bem como na Venezuela, embora de qualidade inferior e utilizando escravizados africanos. Argumentava-se que esse cacau era inferior por não pertencer à mesma variedade do tipo Criollo cultivado na Mesoamérica: tratava-se do Forastero, nativo da América do Sul, que embora produzisse mais frutos e fosse mais resistente a doenças, apresentava sabor seco e amargo.\n[…]\nEm 2023, as processadoras de cacau Olam, Cargill e Barry Callebaut controlavam 40% do comércio internacional. Em 2018, as fabricantes de chocolate Mars, Mondelez (proprietária da Cadbury), Ferrero, Nestlé e Hershey, conhecidas como as «cinco grandes», respondiam por quase dois terços do mercado mundial de chocolate. O comércio internacional de chocolate movimentou US$ 108 bilhões em 2018, e o maior mercado e consumo per capita continuavam concentrados no Ocidente.\n[…]\nEntre 1678 e 1681, a Coroa portuguesa promoveu medidas para estimular o cultivo do cacaueiro na região amazônica, embora o extrativismo tenha permanecido predominante durante boa parte do período colonial. O cacau tornou-se uma das principais mercadorias de exportação da Amazônia portuguesa e alcançou grande importância no comércio colonial durante os séculos XVII e XVIII.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Chan Chan",
      "descricao": "Grande cidade de adobe no litoral norte do Peru, perto de Trujillo, antiga capital do reino Chimu."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Chan Chan, a enorme cidade de barro perto de Trujillo, no litoral norte do Peru, foi erguida como capital por que povo, antes do domínio inca?",
    "resposta": "Chimus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chan_Chan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chan_Chan",
        "situacao": "ok",
        "texto": "Chan Chan (Spanish pronunciation: [tʃaɲ ˈtʃaŋ]), sometimes called Chimor, was the capital city of the Chimor kingdom, a pre-Columbian era culture in South America. The city is now an archeological site in the department of La Libertad five kilometers (3.1 mi) west of Trujillo, Peru.\n[…]\nChan Chan is located in the mouth of the Moche Valley and was the capital of the historical empire of the Chimor from 900 to 1470, when they were defeated and incorporated into the Inca Empire. Chimor, a conquest state, developed from the Chimú culture that established itself along the Peruvian coast around 900 CE.\n[…]\nAfter the Inca conquered the Chimú around 1470 AD, Chan Chan fell into decline. The Incas used a system called the \"Mitma system of ethnic dispersion\" which separated the Chimú civilians into places already recently conquered by the Inca. A little over 60 years later in 1535 AD, Francisco Pizarro founded the Spanish city of Trujillo which pushed Chan Chan further into the shadows.\n[…]\nPeru\n[…]\nHathaway, Bruce (2010). \"10 Must-See Endangered Cultural Treasures: Chan Chan, Peru, End of an Empire\". Smithsonian. 39 (12): 35.\n[…]\nHolstein, Otto (1927). \"Chan-Chan: Capital of the Great Chimu\". Geographical Review. 17 (1): 36–61. doi:10.2307/208132. JSTOR 208132.\n[…]\nMinelli, Laura Laurencich. 2000. The Inca World: The Development of Pre-Columbian Peru, A.D. 1000–1534, Parts 1000–1534. University of Oklahoma Press.\n[…]\nTopic, John R.; Moseley, Michael E. (1983). \"Chan Chan: A Case Study of Urban Change in Peru\". Ñawpa Pacha. 21 (21): 153–182. doi:10.1179/naw.1983.21.1.004. JSTOR 27977764. (subscription required)\n[…]\nWest, Michael (1970). \"Community Settlement Patterns at Chan Chan, Peru\". American Antiquity. 35 (1): 74–86. doi:10.2307/278179. JSTOR 278179. S2CID 163958191. (subscription required)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chan_Chan",
        "situacao": "ok",
        "texto": "Um reino poderoso, com estrutura hierárquica definida e uma cidade perfeitamente planejada, abrigando 50 mil habitantes. Assim era Chan Chan há 600 anos, hoje um dos mais preciosos sítios arqueológicos do mundo. Somente mãos habilidosas poderiam erguer uma cidade de barro como a de Chan Chan, costa norte do Peru. Próximo a Trujillo, Chan Chan foi a capital do Reino de Chimu, um dos mais poderosos \n[…]\nEm 1986 a Unesco declarou esta relíquia arqueológica um patrimônio cultural da humanidade. E não é para menos: pelos cerca de 15 km² nos quais se estende Chan Chan, há ruínas das edificações construídas em adobe, um material preparado com barro, palha e pedregulho, ideal para a região em que se localiza a cidade, quase sem chuvas. Mas a erosão, provocada pela ação do tempo, colocou o sítio arqueológico em outra lista, a dos patrimônios em perigo.\n[…]\nO auge do Reino Chimu aconteceu no século XIV. A cidade de Chan Chan dividia-se em dez partes muradas - chamadas cidadelas -, algumas com paredes de proteção de mais de 9 metros de altura. Em cada cidadela havia templos religiosos piramidais, jardins, cemitérios, reservatórios e palácios para os reis e nobres. Uma das histórias daquela época faz referência a jardins com plantas de ouro. Fora do muro ficavam as casas mais modestas, para o povo.\n[…]\nO centro da cidade era o Templo de Tschudi, onde até hoje pode-se apreciar a Câmara do Conselho - local reservado a reuniões - e experimentar seu efeito acústico fantástico: basta sussurrar para se fazer ouvir. No século XV os Chimus foram dominados pelos Incas, deixando para a posterioridade ruínas de sua civilização.\n[…]\nLocalização: Vale do Chimu, costa norte do Peru.\n[…]\nPerigo: Em 1998, em razão do El  Niño, uma chuva atípica castigou Chan Chan e medidas de emergência tiveram que ser tomadas.\n[…]\n«O ArQueólogo: Sítio de Chan Chan»\n[…]\n(em inglês) UNESCO World Heritage Center: Chan Chan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Atlantes de Tula",
      "descricao": "Colunas de pedra em forma de guerreiros no alto de uma pirâmide de Tula, antiga capital tolteca no estado mexicano de Hidalgo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Os Atlantes de Tula, colunas de pedra em forma de guerreiros com mais de quatro metros, foram esculpidos por que povo do México central?",
    "resposta": "Toltecas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tula_(Mesoamerican_site)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tula_(Mesoamerican_site)",
        "situacao": "ok",
        "texto": "Tula (Nahuatl: Tollan Xicocotitlan Otomi: Mämeni) is a Mesoamerican archaeological site, which was an important regional center that reached its height as the capital of the Toltec Empire between the fall of Teotihuacan and the rise of Tenochtitlan. It has not been well studied in comparison to these other two sites, and disputes remain as to its political system, area of influence and its relatio\n[…]\nThe site is located in the city of Tula de Allende in the Tula Valley, in what is now the southwest of the Mexican state of Hidalgo, northwest of Mexico City. The archeological site consists of a museum, remains of an earlier settlement called Tula Chico as well as the main ceremonial site called Tula Grande. The main attraction is the Pyramid of Quetzalcoatl, which is topped by four 4-metre-high (13 ft) basalt columns carved in the shape of Toltec warriors.\n[…]\nThe inhabitants of Tula were called Toltecs, but that term was later broadened to mean an urban person, artisan or skilled worker. This was due to the high respect in which the indigenous peoples in the Valley of Mexico held the ancient civilization before the Spanish conquest of the Aztec Empire.\n[…]\nThe history of the city remained important up through the Aztec Empire and is reported in the codices written after the Spanish conquest. However, most of these stories are heavy in myth. These tend to start with the Toltecs and the city of Tula, followed by the migration of the Mexica to the Valley of Mexico. The stories either portray Tula as a kind of paradise in which the inhabitants master the sciences and arts or a city filled with strife headed for a downfall.\n[…]\nMuch of Toltec history was lost when Itzcoatl burned the history books after founding the Aztec Empire. The planning of Tula was adopted by some Aztec city-state rulers for their urban centers.\n[…]\nToltec"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tula_Xicocotitlan",
        "situacao": "ok",
        "texto": "Tula (do Nahuatl \"Tollan\", lugar dos tules (uma árvore do género Scirpus) também conhecida como Tollan-Xicocotitla) é uma cidade com 10000 habitantes, parte da qual se encontra sobre a Tula pré-hispânica, situada no municipio de Tula de Allende no estado de Hidalgo, México, a 70 km da capital do país.\n[…]\nGeralmente considerada como tendo sido a capital dos Toltecas, cerca do ano 980, tendo sido destruída no ano 1168 ou 1179. Foi a maior cidade do México nos séculos IX e X, cobrindo uma área de 12 km2, com uma população de cerca de 30000 habitantes, possivelmente bastante mais.\n[…]\nOs primeiros habitantes (provavelmente Chichimecas) chegaram a Tula no século VIII. Mais tarde chegaram os Nonoalcas, um povo de língua Nahuatl, que adorava o deus Quetzalcóatl.\n[…]\nPor fim os seguidores do \"deus nocturno\" expulsaram os toltecas que professavam a sua crença na serpente emplumada, tendo estes sido obrigados a migrar para o sul em direcção ao Golfo do México até chegarem ao Iucatão. Ali chegados, fundaram cidades como Chichén Itzá, nome alusivo à fusão dos Itzaes com os Chichimecas, sendo estes últimos a origem do povo Tolteca.\n[…]\nTollan foi construída de forma diferente daquela de Teotihuacan, não sendo uma grande cidade situada sobre uma vasta planície sem qualquer defesa, mas construída sobre uma colina, muito mais fácil de defender. Uma vez que estava situada na fronteira com os territórios das tribos chichimecas, pode-se supor que os ataques por parte destas seriam recorrentes, levando a que se instalasse em Tollan um estado militar que controlava os povos limítrofes, cobrando-lhes tributos.\n[…]\nTula de Allende",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Auto de fé de Maní",
      "descricao": "Queima de livros e objetos sagrados maias ordenada pelos espanhóis em Maní, no Iucatã, em 1562."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1562, em Maní, no Iucatã, que frade espanhol mandou queimar livros maias por considerá-los obra do demônio?",
    "resposta": "Diego de Landa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diego_de_Landa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diego_de_Landa",
        "situacao": "ok",
        "texto": "Diego de Landa Calderón, O.F.M. (12 November 1524 – 29 April 1579) was a Spanish Franciscan bishop of the Roman Catholic Archdiocese of Yucatán. He led a campaign against idolatry and human sacrifice. In doing so, he burned Maya manuscripts (codices) which contained knowledge of Maya religion and civilization, and the history of the American continent.\n[…]\nThe extant version was produced around 1660, lost to scholarship for over two centuries and not rediscovered until the 19th century. In 1862, French cleric Charles Etienne Brasseur de Bourbourg published the manuscript in a bilingual French-Spanish edition, Relation des choses de Yucatán de Diego de Landa.\n[…]\nAfter hearing of Roman Catholic Maya who continued to practice idol worship, Landa ordered an Inquisition in Mani, ending with a ceremony called auto de fé. During the ceremony on July 12, 1562, a disputed number of Maya codices (according to Landa, 27 books) and approximately 5,000 alleged Maya cult images were burned.\n[…]\nLanda claimed that he had discovered evidence of human sacrifice and other idolatrous practices while rooting out native idolatry. Although one of the alleged victims of said sacrifices, Mani Encomendero Dasbatés, was later found to be alive, and Landa's enemies contested his right to run an inquisition, Landa insisted a papal bull, Exponi nobis, justified his actions.\n[…]\nIn references to the books, Landa said:\n[…]\nDurbin, Marshall E. (1969). An interpretation of Bishop Diego de Landa's Maya alphabet. New Orleans: Middle American Research Institute, Tulane University. OCLC 1136497.\n[…]\nDiego de Landa; William Gates (1978). Yucatan Before and After the Conquest (PDF). Dover Publications. ISBN 978-0-486-23622-3. Archived from the original (PDF) on 2019-04-12. Retrieved 2019-03-09.\n[…]\nSkynet.be: A biography of Diego de Landa Archived 2007-11-29 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diego_de_Landa",
        "situacao": "ok",
        "texto": "Diego de Landa Calderón (Cifuentes, 12 de novembro de 1524 – Mérida, 29 de abril de 1579) foi um bispo católico do século XVI. Os seus textos contêm muita informação valiosa sobre a civilização maia, não obstante o fato de Diego ter sido um dos principais responsáveis pela destruição de muito da história, literatura e tradição dessa civilização.\n[…]\nNascido em Cifuentes, em Guadalajara, Diego de Landa tornou-se um monge franciscano em 1541 e, passado pouco tempo, seria um dos primeiros franciscanos a ser enviado para o Iucatã. Foi encarregado de levar a fé católica aos povos maias após a conquista do Iucatã, presidindo um monopólio espiritual concedido à ordem franciscana pela coroa espanhola e trabalhando diligentemente com vista à afirmação do poder da ordem, enquanto convertia os indígenas maias.\n[…]\nApós ter tomado conhecimento de maias católicos que continuavam a praticar o \"culto de ídolos\", ordenou uma inquisição em Maní que terminaria com um auto de fé. Durante a cerimónia efectuada no dia 12 de julho de 1562, um número indeterminado de códices maias (ou livros; Landa admite 27, outras fontes falam de \"99 vezes esse número\") e aproximadamente 5 000 imagens de cultos maias foram queimados. Descrevendo as suas próprias acções, Landa escreveria, mais tarde:\n[…]\nO bispo Toral faleceu no México, em 1571, permitindo, ao rei Filipe II de Espanha, nomear Landa como quarto bispo do Iucatã.\n[…]\nMarshall E. Durbin, 1969. An Interpretation of Bishop Diego De Landa's Maya Alphabet Philological and Documentary Studies, 2/4\n[…]\nDiego de Landa. Tradução de William Gates. (1937) 1978. Yucatan Before and After the Conquest (uma tradução para a língua inglesa da Relación de Landa.\n[…]\n«Biografia de Diego de Landa (1524 - 1579)» (em inglês). Por Antoon Leon VOLLEMAERE.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cusco",
      "descricao": "Cidade dos Andes peruanos que foi a capital do Império Inca."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo a lenda inca, que filho do Sol saiu das águas do lago Titicaca com a irmã Mama Ocllo e fundou Cusco?",
    "resposta": "Manco Cápac",
    "fonte": [
      "https://en.wikipedia.org/wiki/Manco_C%C3%A1pac"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Manco_C%C3%A1pac",
        "situacao": "ok",
        "texto": "Manco Cápac (Quechua: Manqu Qhapaq, Cusco Quechua: [ˈmaɴqɔ ˈqʰapaχ]; born before c. 1200 – c. 1230) , also known as Manco Inca and Ayar Manco, was, according to some historians, the first governor and founder of the Inca civilisation in Cusco, possibly in the early 13th century. He is also a main figure of Inca mythology, being the protagonist of the two best known legends about the origin of the \n[…]\nManco Cápac is the protagonist of the two main legends that explain the origin of the Inca Empire. Both legends state that he was the founder of the city of Cusco and that his wife was Mama Uqllu.\n[…]\nIn this legend, Manco Cápac (Ayar Manco) was the son of Viracocha of Paqariq Tampu (six leagues or 25 km south of Cusco). He and his brothers (Ayar Auca, Ayar Cachi and Ayar Uchu) and sisters (Mama Ocllo, Mama Huaco, Mama Raua and Mama Ipacura) lived near Cusco at Paqariq Tampu, and they united their people with other tribes encountered in their travels. They sought to conquer the tribes of the Cusco Valley.\n[…]\nThis legend also incorporates the golden staff, thought to have been given to Manco Cápac by his father. Accounts vary, but according to some versions of the legend, the Manco got rid of his three brothers, trapping them or turning them into stone, thus becoming the leader of Cusco. He married his older sister, Mama Ocllo, and they begot a son named Sinchi Roca.\n[…]\nAfter two years, Manco Capac was smuggled out from it and recognized as Sapa Inca. Mama Waqu afterwards married her son and the two ruled jointly.\n[…]\nKuzco, the main character from The Emperor's New Groove, in the first version of the movie Kingdom of the Sun was supposed to be named Manco Cápac.\n[…]\nThe car float Manco Capac operates across Lake Titicaca between PeruRail's railhead at Puno and the port of Guaqui in Bolivia.\n[…]\nKingdom of Cusco\n[…]\nInca Empire\n[…]\nPugh, Helen; Intrepid Dudettes of the Inca Empire; (2020) ISBN 9781005592318"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manco_Capac",
        "situacao": "ok",
        "texto": "Manco Capac (Quíchua: Manqu Qhapaq, O fundador real, também conhecido como Manco Inca e Ayar Manco) segundo vários cronistas foi o primeiro governante de Cusco e fundador do Império Inca, nasceu no século XIII, havendo várias lendas que recontam sua história:\n[…]\nManco Capac reinou em Cusco por aproximadamente trinta anos estabelecendo um código de leis no qual proibiu o sacrifício humano, o homicídio, o adultério e o furto. Instituiu que os nobres se casassem com membros da própria família, mas as esposas não deveriam ter menos de 20 anos, ele próprio desposou sua irmã Mama Ocllo com a qual teve um filho chamado Sinchi Roca que se tornou o próximo Supa Inca.\n[…]\nManco Capac morreu em 1230 de causas naturais. Seu corpo foi mumificado e permaneceu na cidade até o reinado de Pachacuti, que ordenou a sua mudança para a Tiwanaku (Tiauanaco), o templo no Lago Titicaca. Em Cusco só permaneceu uma estátua erguida em sua homenagem. Manco Capac reinou antes de ser criado o título Supa Inca, tanto que seu nome incorpora o título Capac que até então se usava e que grosseiramente pode ser traduzido como senhor da guerra.\n[…]\nNeste mito, Manco Capac é tido como filho de Inti, o deus do sol e irmão de Pacha Kamaq. Ele  foi enviado pelo deus sol e emergiu neste mundo no Lago Titicaca trazendo um cajado dourado chamado de Tapac-yauri. Ele teria sido instruído a construir um templo para o deus Sol no lugar onde emergiu da terra mas o lugar não era apropriado e então ele viajou por túneis subterrâneos até Cusco onde erigiu um templo em homenagem a Inti.\n[…]\nSegundo a lenda durante a viagem para Cuzco, um de seus irmãos (Ayar Anca) e também uma de suas irmãs se transformaram em Huacas (locais sagrados).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Cusco",
      "descricao": "Cidade dos Andes peruanos que foi a capital do Império Inca."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo uma interpretação tradicional, o que quer dizer em quíchua o nome Cusco, a antiga capital dos incas?",
    "resposta": "Umbigo do mundo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cusco",
      "https://en.wikipedia.org/wiki/Cusco"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cusco",
        "situacao": "ok",
        "texto": "Cusco (em espanhol Cuzco ou Cusco, em quíchua Qosqo ou Qusqu) é uma cidade no Peru situada no sudeste do Vale de Huatanay ou Vale Sagrado dos Incas, na região dos Andes, com população de 428 450 habitantes. É a capital da região de Cusco e da província de Cusco.\n[…]\nPorém, considerando unicamente seu estabelecimento como capital do Império Inca (meados do século XIII), Cusco aparece como a cidade habitada mais antiga de toda América.\n[…]\nFoi a capital e sede de governo do Reino dos incas e seguiu sendo ao iniciar-se a época imperial, tornando-se a cidade mais importante dos Andes. Esta posição lhe deu proeminência e a converteu no principal foco cultural e eixo do culto religioso.\n[…]\nO Peru declarou sua independência em 1821 e a cidade de Cusco manteve sua importância dentro da organização político-administrativa do país. De fato, criou-se o departamento de Cusco, que abrangia inclusive os territórios amazônicos até o limite com o Brasil. A cidade foi a capital deste departamento e a cidade mais importante do sudeste andino.\n[…]\nEm 1933, o Congresso de Americanistas realizado na cidade de La Plata, Argentina, declarou a cidade como \"Capital Arqueológica da América\". Posteriormente, em 1978, a 7a. Convenção de Prefeitos das Grandes Cidades Mundiais, realizada na cidade italiana de Milão, declarou Cusco como a \"Herança Cultural do Mundo\". Finalmente, a UNESCO, em Paris, declarou a cidade e especialmente seu centro histórico como \"Patrimônio Cultural da Humanidade\" em 9 de dezembro de 1983.\n[…]\nO governo do Peru, em concordância, declarou Cusco em 22 de dezembro de 1983, mediante a Lei Nº 23 765, como a \"Capital Turística de Peru\" e \"Patrimônio Cultural da Nação\". Atualmente, a Constituição Política de 1993 declara Cusco como a Capital Histórica do país.\n[…]\nCusco"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cusco",
        "situacao": "ok",
        "texto": "Cusco or Cuzco (; Latin American Spanish: [ˈkusko]; Quechua: Qusqu/Qosqo [ˈqosqɔ]) is a city in southeastern Peru, near the Sacred Valley of the Andes mountain range, and the Huatanay and Urubamba rivers. It is the capital and largest city of the eponymous Cusco Province and Cusco Department. It has historically been one of the largest cultural, economic and political centers of Peru.\n[…]\nThe first three Spaniards arrived in the city in May 1533, after the Battle of Cajamarca, collecting for Atahualpa's Ransom Room. On 15 November 1533 Francisco Pizarro officially arrived in Cusco. \"The capital of the Incas ...\n[…]\nCurrently, the majority of the population belongs to the Catholic Church, with Cuzco being the archbishopric. The largest and oldest cathedral is the Cusco Cathedral. It is home to the Roman Catholic Archdiocese of Cusco.\n[…]\nCentro Qosqo de Arte Nativo A folkloric institution established in 1924. It is considered the most important folkloric institution in the city and was recognized by the Peruvian government as the first folkloric institution in the country and by the regional government as a Living Cultural Heritage of the Cusco region.\n[…]\nLess-visited ruins include: Incahuasi, the highest of all Inca sites at 3,980 m (13,060 ft); Vilcabamba, the capital of the Inca after the Spanish capture of Cusco; the sculpture garden at Ñusta Hisp'ana (aka Chuqip'allta, Yuraq Rumi); Tipón, with working water channels in wide terraces; as well as Willkaraqay, Patallaqta, Chuqik'iraw, Moray, Vitcos and many others.\n[…]\nThe city developed a distinctive style of painting known as the \"Cuzco School\" and the cathedral houses a major collection of local artists of the time. The cathedral is known for a Cusco School painting of the Last Supper depicting Jesus and the twelve apostles feasting on guinea pig, a traditional Andean delicacy.\n[…]\nCusco is twinned with:\n[…]\nCusco official website"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Vinlândia",
      "descricao": "Terra na costa da América do Norte alcançada pelos nórdicos por volta do ano mil, segundo as sagas islandesas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Segundo as sagas islandesas, que explorador, filho de Érico, o Vermelho, chegou por volta do ano mil à terra que chamou de Vinlândia?",
    "resposta": "Leif Erikson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinland",
      "https://en.wikipedia.org/wiki/Leif_Erikson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vinland",
        "situacao": "ok",
        "texto": "Vinland, Vineland, or Winland (Old Norse: Vínland hit góða, lit. 'Vinland the Good') was an area of coastal North America explored by Vikings. Leif Erikson landed there around AD 1000, nearly five centuries before the voyages of Christopher Columbus and John Cabot. The name appears in the Vinland sagas and describes a land beyond Greenland, Helluland, and Markland. Much of the geographical content\n[…]\nThis saga references the place-name Vinland in four ways. First, it is identified as the land found by Leif Erikson. Karlsefni and his men subsequently find \"vín-ber\" near the Wonderstrands. Later, the tale locates Vinland to the south of Markland, with the headland of Kjalarnes at its northern extreme. However, it also mentions that while at Straumfjord, some of the explorers wished to go in search for Vinland west of Kjalarnes.\n[…]\nHe eventually explained that he found grapes/currants. In the spring, Leif returned to Greenland with a shipload of timber, towing a boatload of grapes/currants. On the way home, he spotted another ship aground on the rocks, rescued the crew and later salvaged the cargo.\n[…]\nIn the other version of the story, Eiríks saga rauða or the Saga of Erik the Red, Leif Erikson accidentally discovered the new land when traveling from Norway back to Greenland after a visit to his overlord, King Olaf Tryggvason, who commissioned him to spread Christianity in the colony. Returning to Greenland with samples of grapes/currants, wheat and timber, he rescued the survivors from a wrecked ship and gained a reputation for good luck; his religious mission was a swift success.\n[…]\nCharting the overlap of the limits of wild vine and wild salmon habitats, as well as nautical clues from the sagas, Wahlgren indicates a location in Maine or New Brunswick. He hazards a guess that Leif Erikson camped at Passamaquoddy Bay and Thorvald Erikson was killed in the Bay of Fundy.\n[…]\nVinland the Good"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Leif_Erikson",
        "situacao": "ok",
        "texto": "Leif Erikson, also known as Leif the Lucky (c. 970s – c. 1018 to 1025), was a Norse explorer who is thought to have been the first European to set foot on continental America, approximately half a millennium before Christopher Columbus. According to the sagas of Icelanders, he established a Norse settlement at Vinland, which is usually interpreted as being coastal North America.\n[…]\nStories of Leif's journey to North America had a profound effect on the identity and self-perception of later Nordic Americans and Nordic immigrants to the United States. The first statue of Erikson (by Anne Whitney) was erected in Boston in 1887 at the instigation of Eben Norton Horsford, who was among those who believed that Vinland could have been located on the Charles River or Cape Cod; not long after, another casting of Whitney's statue was erected in Milwaukee.\n[…]\nThe Leif Erikson Awards, established 2015, are awarded annually by the Exploration Museum in Húsavík, Iceland. They are awarded for achievements in exploration and in the study of the history of exploration.\n[…]\nErikson is recalled as Leif the Lucky in the Robert Frost poem Wild Grapes.\n[…]\nThe Sagas do not give the exact date of Leif's landfall in America, but state only that it was in the fall of the year. At the suggestion of Christian A. Hoen of Edgerton, Wisconsin, 9 October was settled upon for Leif Erikson Day, as that already was a historic date for Norwegians in America, the ship Restaurationen having arrived in New York Harbor on 9 October 1825 from Stavanger with the first organized party of Norwegian immigrants.\n[…]\nLeif is one of the main characters in Makoto Yukimura's manga Vinland Saga.\n[…]\nThe Leif Erikson is the name of Hagbard Celine's golden submarine in The Illuminatus! Trilogy.\n[…]\nLeif Erikson Awards\n[…]\nLeif Ericson Millennium commemorative coins\n[…]\nWorks about Leif Erikson at Open Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Vinlândia (em nórdico antigo: Vínland ou Vinland,  PRONÚNCIA; em latim: Vinlandia ou Winland) foi o nome dado pelos nórdicos a uma região indeterminada da costa do Nordeste do Canadá, durante a Era Viking e a Idade Média  — abrangendo a ilha da Terra Nova,  o Golfo de São Lourenço, e os territórios de Nova Brunsvique e da Nova Escócia.\n[…]\nNa Saga dos Groenlandeses, do século XIII, está que Leif Eriksson deu o nome “Vínland” a esta terra: “… ok gaf Leifr nafn landinu eftir landkostum ok kallaði Vínland…“.\n[…]\nHistoriadores e linguistas divergem sobre os termos Vínland-Viinland-Vinland, apontando possíveis significados diferentes. A interpretação Vínland, Terra das Vinhas ou Terra do Vinho, parece todavia ser a mais frequente.\n[…]\nPor volta do ano  1 000, uma expedição liderada por Leif Eriksson achou a Helulândia (\"Terra das Rochas lisas\"), seguindo depois para sul e encontrando a Marclândia (\"Terra das Florestas\"), e finalmente continuando ainda mais para sul e chegando à Vinlândia (talvez \"Terra das Vinhas\" ou \"Terra dos Prados\").\n[…]\nVinlândia serve de base para a construção do enredo da série de mangás Vinland Saga (mangá), assim como as tentativas de colonização, realizadas por Þorfinnr Karlsefni e sua esposa Guðríðr Þorbjarnardóttir e Leif Eriksson no ínicio do século XI\n[…]\nSaga de Érico, o Vermelho - Narra no século XII a descoberta e colonização da Groenlândia e a descoberta e tentativa de colonização da América do Norte pelos escandinavos nos século X e XI.\n[…]\nAnais da Islândia (Annales Islandorum regii) - Contêm duas referências à Vinlândia, em 1121 e 1347.\n[…]\nLeif Eriksson\n[…]\nOliveira, Leandro Vilar (2024). «Skraelings – O encontro de nórdicos e indígenas em Vinland». Museu EXEA. Atlanticus: Revista do Museu EXEA. 3: 29-54. ISSN 2764-7358. Consultado em 10 de outubro de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Vinlândia",
      "descricao": "Terra na costa da América do Norte alcançada pelos nórdicos por volta do ano mil, segundo as sagas islandesas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Segundo as sagas, os vikings batizaram de Vinlândia a terra que acharam na América do Norte por causa de que plantas encontradas lá?",
    "resposta": "Videiras (uvas silvestres)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vinland",
        "situacao": "ok",
        "texto": "Vinland, Vineland, or Winland (Old Norse: Vínland hit góða, lit. 'Vinland the Good') was an area of coastal North America explored by Vikings. Leif Erikson landed there around AD 1000, nearly five centuries before the voyages of Christopher Columbus and John Cabot. The name appears in the Vinland sagas and describes a land beyond Greenland, Helluland, and Markland. Much of the geographical content\n[…]\nErik Wahlgren examines the question in his book The Vikings and America, and points out clearly that L'Anse aux Meadows cannot be the location of Vínland, as the location described in the sagas has both salmon in the rivers and the 'vínber' (meaning specifically 'grape', that according to Wahlgren the explorers were familiar with and would have thus recognized), growing freely.\n[…]\nHe also suggests that attempts at \"harmonizing the evidence of the sagas with the modern belief that journeys were directed towards North America\" has led to gaps in the scholarship surrounding the sagas. He notes references to Vinland in Icelandic manuscripts from around 1300 indicated Vinland as being in Africa. He treats this as being the influence of the medieval Catholic epistemology which only supported the existence of three continents.\n[…]\nThe main resources that the people of Vinland relied on were wheat, berries, wine and fish. However, the wheat in the Vinlandic context is sandwort and not traditional wheat, and the grapes mentioned are native North American grapes, because the European grape (Vitis vinifera) and wheat (Triticum sp.) existing in the New World before the Viking arrival in the tenth century is highly unlikely. Both the sagas reference a river and a lake that had an abundance of fish.\n[…]\nVinland Saga, a Japanese manga series\n[…]\nHermann, Pernille (2021). \"The Horror of Vínland: Topographies and Otherness in the Vínland sagas\". Scandinavian Studies. 93: 1–22. doi:10.3368/sca.93.1.0001."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinl%C3%A2ndia",
        "situacao": "ok",
        "texto": "Vinlândia (em nórdico antigo: Vínland ou Vinland,  PRONÚNCIA; em latim: Vinlandia ou Winland) foi o nome dado pelos nórdicos a uma região indeterminada da costa do Nordeste do Canadá, durante a Era Viking e a Idade Média  — abrangendo a ilha da Terra Nova,  o Golfo de São Lourenço, e os territórios de Nova Brunsvique e da Nova Escócia.\n[…]\nPor volta do ano  1 000, uma expedição liderada por Leif Eriksson achou a Helulândia (\"Terra das Rochas lisas\"), seguindo depois para sul e encontrando a Marclândia (\"Terra das Florestas\"), e finalmente continuando ainda mais para sul e chegando à Vinlândia (talvez \"Terra das Vinhas\" ou \"Terra dos Prados\").\n[…]\nNesta região, os viquingues estabeleceram uma base de inverno chamada Leifsbudir, localizada na costa norte da ilha da Terra Nova, e presumivelmente situada no local da atual L'Anse aux Meadows. A ocupação de Leifsbudir foi precária e durou apenas um curto espaço de tempo, mas representou o primeiro contacto colonizador conhecido da Europa com a América, cerca de 500 anos antes das viagens de Cristóvão Colombo e Pedro Álvares Cabral.\n[…]\nAdão de Brema - Cita no livro Descriptio insularum Aquilonis do século XI umas ilhas a norte e oeste da Noruega, entre as quais a Groenlândia e a Vinlândia.\n[…]\nSaga dos Groenlandeses - Narra no século XII a descoberta e colonização da Groenlândia e da América do Norte pelos escandinavos nos séculos X e XI.\n[…]\nSaga de Érico, o Vermelho - Narra no século XII a descoberta e colonização da Groenlândia e a descoberta e tentativa de colonização da América do Norte pelos escandinavos nos século X e XI.\n[…]\nColonização viquingue da América\n[…]\nOliveira, Leandro Vilar (2024). «Skraelings – O encontro de nórdicos e indígenas em Vinland». Museu EXEA. Atlanticus: Revista do Museu EXEA. 3: 29-54. ISSN 2764-7358. Consultado em 10 de outubro de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Kuélap",
      "descricao": "Fortaleza de pedra com muralhas altas no alto de uma montanha da região amazônica do norte do Peru."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A fortaleza de Kuélap, com altas muralhas no topo de uma montanha do norte do Peru, foi construída por que povo?",
    "resposta": "Chachapoyas",
    "distratores": [
      "Incas",
      "Chimus",
      "Moches"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ku%C3%A9lap"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ku%C3%A9lap",
        "situacao": "ok",
        "texto": "Kuélap or Cuélap is a walled settlement located in the mountains near the towns of María and Tingo, in the southern part of the region of Amazonas, Peru. It was built by the Chachapoyas culture in the 6th century AD on a ridge overlooking the Utcubamba Valley.\n[…]\nMany stones at Kuélap bear anthropomorphic, zoomorphic, and geometric designs in relief. Numerous burials have been found both in the walls and inside the circular structures.\n[…]\nKuélap was accidentally rediscovered in 1843, by Juan Crisóstomo Nieto, a judge from the city of Chachapoyas. Then, in 1870, Antonio Raimondi made a survey of the site.\n[…]\nSince the 1980s many Peruvian and foreign archaeologists continued with excavations and studies at Kuélap.\n[…]\nAccess to Kuelap is gained via El Tingo, a town at approximately 1800m above sea level, near the bank of the Utcubamba. A horse trail also winds along the left bank of Tingo river and leads eventually up to Marcapampa, a small level upland near the site.\n[…]\nIn 2026, archaeologists excavating Kuélap uncovered a stone funerary structure containing the remains of five individuals, including four adults and one infant, together with a range of ceremonial offerings. The recovered materials included a Regional Inca-style phytomorphic paccha, carved bone artifacts, metal objects, stone mortars, and fragments of Spondylus shell. Researchers dated the context to the Late Horizon period (c.\n[…]\n1470–1532 CE) and interpreted the findings as evidence of funerary and ritual practices associated with the Chachapoyas region during the final centuries before the Spanish conquest.\n[…]\nList of archaeological sites in Peru\n[…]\nTourism in Peru\n[…]\nkuelap all the information how to go\n[…]\nKuélap. Virtual tour\n[…]\nKuélap. Ministry of Tourism - Perú (in Spanish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kuelap",
        "situacao": "ok",
        "texto": "Kuélap  ou Cuélap  é um importante sítio arqueológico pré-Inca localizado nos Andes nordeste do Peru , na província de Luya , foi construída pela cultura Chachapoya. É formado por um conjunto arquitetônico de pedra de grandes dimensões caracterizando sua condição monumental e uma grande plataforma artificial, orientada do sul ao norte, que se assenta na crista de rocha calcária do cume do Cerro Ba\n[…]\nA plataforma se estende por cerca de 600 metros e tem como perímetro uma muralha que em alguns pontos atinge 19 metros de altura. Estima-se que a sua construção iniciou no século XI, coincidindo com o período de florescimento da Cultura Chachapoya e sua ocupação terminou em meados do século XVI.\n[…]\nNaquele ano, ao realizar uma diligência na área, Juan Crisóstomo Nieto, juiz de Chachapoyas, pode admirá-la guiado por habitantes locais que conheciam o sítio. Posteriormente, Kuélap mereceu a atenção de alguns estudiosos e curiosos sobre antiguidades.\n[…]\nKuelap é um monumento que foi construído numa época anterior ao Império inca. Considerando-se o seu carácter monumental, desempenhou um papel preponderante na Cultura Chachapoya. A arquitetura de Kuelap é, em geral, a mesma que vemos espalhada na região onde se ergueu a Cultura Chachapoya. O que não se pôde levantar até agora é em que ponto do longo processo de desenvolvimento dos Chachapoyas, cujos primórdios remontam o século VIII , foi erguido Kuelap.\n[…]\nAs muralhas elevadas que flanqueiam a plataforma e o estreito acesso para a fortaleza na sua secção final sugere que o Complexo de Kuelap foi construído com o fim de servir como um reduto defensivo, ou, pelo menos, de um local protegido dos invasores. Mas essa possibilidade não necessariamente anula outras interpretações, talvez mais significativas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Códice Florentino",
      "descricao": "Obra em doze livros sobre a cultura e a história dos astecas, escrita em náuatle e espanhol no século dezesseis."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que frade franciscano organizou o Códice Florentino, enciclopédia da vida asteca escrita em náuatle e espanhol com a ajuda de sábios indígenas?",
    "resposta": "Bernardino de Sahagún",
    "fonte": [
      "https://en.wikipedia.org/wiki/Florentine_Codex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Florentine_Codex",
        "situacao": "ok",
        "texto": "The Florentine Codex is a 16th-century ethnographic research study in Mesoamerica by the Spanish Franciscan friar Bernardino de Sahagún. Sahagún originally titled it La Historia General de las Cosas de Nueva España (in English: The General History of the Things of New Spain). The best-preserved manuscript is commonly referred to as the Florentine Codex, as the codex is held in the Laurentian Libra\n[…]\nPhillip II concluded that was not beneficial for the Spanish colonies in America and, hence, it never took place. That is the reason why the missionaries, including Fray Bernardino de Sahagún continued their missionary work and Fray Bernardino de Sahagun was able to make two more copies of his Historia general. The three bound volumes of the Florentine Codex are found in the Biblioteca Medicea-Laurenziana, Palat.\n[…]\nNatural history and general history\n[…]\n\"The scope of the Historia's coverage of contact-period Central Mexico indigenous culture is remarkable, unmatched by any other sixteenth-century works that attempted to describe the native way of life.\" Foremost in his own mind, Sahagún was a Franciscan missionary, but he may also rightfully be given the title as Father of American Ethnography.\n[…]\nBernardino de Sahagún, translated from Nahuatl to English by Arthur J. O. Anderson and Charles E. Dibble; The Florentine Codex : General History of the Things of New Spain, 12 volumes; University of Utah Press (January 7, 2002), hardcover, ISBN 087480082X ISBN 978-0874800821\n[…]\nSahagún, Bernardino de; Kupriienko, Sergii (2013) [2013]. General history of the affairs of New Spain. Books X-XI: Aztec's Knowledge in medicine and botany. Kyiv: Видавець Купрієнко С.А. ISBN 978-617-7085-07-1. Retrieved 4 September 2013.\n[…]\nBernardino de Sahagún\n[…]\nGeneral History of the Things of New Spain by Fray Bernardino de Sahagún: The Florentine Codex, at the World Digital Library online. Contains scans of a manuscript."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Historia_general_de_las_cosas_de_la_Nueva_Espa%C3%B1a",
        "situacao": "ok",
        "texto": "Historia general de las cosas de la Nueva España (\"História geral das coisas da Nova Espanha\") é o título de uma obra escrita, em náuatle e espanhol, pelo religioso franciscano espanhol Bernardino de Sahagún, a princípios do século XVI, pouco depois da Conquista do México por parte dos espanhóis. Para realizar o livro, Sahagún recorreu à indagação direta entre os nativos mexicanos, concentrando-se\n[…]\nPortanto, alguns antropólogos —especialmente os mexicanos— reclamam para o freire franciscano o ser um dos antecessores da moderna etnografia.\n[…]\nPara a sua Historia general..., Bernardino de Sahagún baseou-se nos informes dos estudantes indígenas do Colégio de Santa Cruz de Tlatelolco —situado na atual cidade do México—. Todos os informantes de Sahagún pertenceram à elite asteca. A indagação do monge franciscano começou no mesmo período em que esteve a cargo da instituição que ele próprio fundara em 1536. Entre 1539 e 1558, Sahagún serviu como missionário no que atualmente são os estados de Puebla e Hidalgo.\n[…]\nEm Tepeapulco (atualmente no estado de Hidalgo), sítio ao que chegou em 1558, Sahagún coletou outras informações com as que enriqueceu o texto que viera redigindo de 1547 e que tornar-se-ia na História geral das coisas da Nova Espanha.\n[…]\nA História geral... consta de doze livros nos quais Sahagún enumera e conta vários aspectos da vida e história dos nativos. Os seis primeiros livros tocam de alguma maneira os aspectos religiosos dos indígenas do altiplano central. O livro sétimo versa sobre astronomia. Os livros oitavo, noveno, décimo e undécimo tratam sobre a vida social dos nativos: em eles descreve-se o sistema de governo, crenças e os sistemas de troca de mercadorias.\n[…]\nA outra olhada é a do missionário que se limita a descrever de maneira objetiva o que os seus informantes puderam assinalar a respeito da sociedade destruída pela conquista espanhola.\n[…]\nBernardino de Sahagún",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Comentários Reais dos Incas",
      "descricao": "Livro de 1609 sobre a história e a cultura do Império Inca, escrito por um autor mestiço nascido em Cusco."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor nascido em Cusco, filho de um conquistador espanhol e de uma princesa inca, publicou em 1609 os Comentários Reais dos Incas?",
    "resposta": "Garcilaso de la Vega",
    "fonte": [
      "https://en.wikipedia.org/wiki/Comentarios_Reales_de_los_Incas",
      "https://en.wikipedia.org/wiki/Inca_Garcilaso_de_la_Vega"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Comentarios_Reales_de_los_Incas",
        "situacao": "ok",
        "texto": "The Comentarios Reales de los Incas is a book written by Inca Garcilaso de la Vega, the first published mestizo writer of colonial Andean South America. The Comentarios Reales de los Incas  is considered by most to be the unquestioned masterpiece of Inca Garcilaso de la Vega, born of the first generation after the Spanish conquest.\n[…]\nGarcilaso de la Vega, el Inca, was a direct descendant of the royal Inca rulers of pre-Hispanic Peru and had a Spanish father. He wrote the chronicles as a firsthand account of the Inca traditions and customs. He was born a few years after the initial Spanish conquest and grew up while warfare was still underway.\n[…]\nThe natural son of Captain Sebastián Garcilaso de la Vega y Vargas and the Inca ñusta (princess) Isabel Suárez Chimpu Ocllo (or Palla Chimpu Ocllo), he lived with his mother and her people until he was ten and was close to them until leaving Peru. He grew up in the worlds of both his parents, also living with his Spanish father as a youth. After traveling to Spain at the age of 21, he was informally educated there, where he lived the rest of his life.\n[…]\nMost experts agree the Comentarios Reales are a chronicle of the culture, economics, and politics of the Inca Empire, based on oral tradition as handed down to Garcilaso by relatives and other amauta (masters, wise ones) during his childhood and adolescence, as well as written sources, including the chronicle of Blas Valera.\n[…]\nMazzotti, José Antonio. Coros mestizos del Inca Garcilaso: resonancias andinas (Lima: Fondo de Cultura Económica, 1996).\n[…]\nMargarita Zamora, Language, Authority, and Indigenous History in the Comentarios reales de los Incas, (Cambridge:  Cambridge University Press, 1988).\n[…]\nFully digitized copy of the Comentarios Reales de los Inca (1609) from the John Carter Brown Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Inca_Garcilaso_de_la_Vega",
        "situacao": "ok",
        "texto": "Inca Garcilaso de la Vega (12 April 1539 – 23 April 1616), born Gómez Suárez de Figueroa and known as El Inca, was a chronicler and writer born in the Viceroyalty of Peru. Sailing to Spain at 21, he was educated informally there, where he lived and worked the rest of his life. The natural son of a Spanish conquistador and an Inca noblewoman born in the early years of the conquest, he is known prim\n[…]\nGómez Suárez de Figueroa was born on April 12, 1539 in Cuzco, Peru, during the early years of the Spanish conquest. He was the natural son of the Spanish captain and conquistador Sebastián Garcilaso de la Vega y Vargas and the Inca ñusta (princess), Palla Chimpu Ocllo, the granddaughter of Huayna Capac who was baptized after the fall of Cuzco as Isabel Suárez Chimpu Ocllo.\n[…]\nWhile in Spain, Garcilaso wrote his best-known work, Comentarios Reales de los Incas, published in Lisbon in 1609. It was based mostly on stories and oral histories told him by his Inca relatives when he was a child in Cusco, but also on the remnants of the history by Blas Valera which was mostly destroyed in the sacking of Cádiz in 1596. The Comentarios have two sections and volumes. The first was primarily about Inca life. The second, about the conquest of Peru, was published in 1617.\n[…]\nIn 1965, Inca Garcilaso de la Vega University, in Lima, Peru, was named in his honor.\n[…]\nGarcilaso de la Vega El Inca, Royal Commentaries of the Incas and General History of Peru, trans. Harold V. Livermore. 1965. ISBN 978-0-292-77038-6\n[…]\nSchreffler, Michael J. and Jessica Welton. \"Garcilaso de la Vega and the 'New Peruvian Man': José Sabogal's frescoes at the Hotel Cusco,\" Art History 33, (January/February 2010): 124–149.\n[…]\nGarcilaso Inca de la Vega Biography (Archived 4 September 2011 at the Wayback Machine), Dept. of Special Collections, University of Notre Dame\n[…]\nWorks by Inca Garcilaso de la Vega at LibriVox (public domain audiobooks)"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Taínos",
      "descricao": "Povo indígena das Grandes Antilhas, como Cuba, Hispaniola e Porto Rico, encontrado por Colombo em 1492."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Nas Grandes Antilhas, Colombo e seus homens aprenderam palavras como canoa e huracán, origem de furacão. Que povo indígena as falava?",
    "resposta": "Taínos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ta%C3%ADno_language",
      "https://en.wikipedia.org/wiki/Ta%C3%ADno"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ta%C3%ADno_language",
        "situacao": "ok",
        "texto": "Taíno is an extinct Arawakan language spoken by the Taíno people of the Caribbean. At the time of Spanish contact it was the most common language spoken throughout the Caribbean. Classic Taíno, or Taíno proper, was the Indigenous language of the peoples living in most of the Leeward Islands of the Lesser Antilles, Puerto Rico (known as Boriquen), most of Hispaniola (known as Ayiti), and easternmos\n[…]\nBy the late 15th century, Taíno had displaced earlier languages of the Greater Antilles, except in westernmost Cuba and in pockets in Hispaniola. (See Indigenous languages of the Caribbean § Unclassified languages.) As the Taíno culture declined during Spanish colonization, the language was replaced by Spanish, English and French. Although the language declined drastically due to colonization, some Taíno words were absorbed into those languages.\n[…]\nDue to limited historical documentation, Taino language revival projects may differ from Indigenous languages historically spoken in the Greater Antilles.\n[…]\nEnglish words derived from Taíno include: barbecue, caiman, canoe, cassava, cay, guava, hammock, hurricane, hutia, iguana, macana, maize, manatee, mangrove, maroon, potato, savanna, and tobacco.\n[…]\nTaíno loanwords in Spanish include: agutí, ají, auyama, batata, cacique, caoba, guanabana, guaraguao, jaiba, loro, maní, maguey (also rendered magüey), múcaro, nigua, querequequé, tiburón and tuna, as well as the previous English words in their Spanish form: barbacoa, caimán, canoa, casabe, cayo, guayaba, hamaca, huracán, iguana, jutía, macana, maíz, manatí, manglar, cimarrón, patata, sabana, and tabaco.\n[…]\nSix sentences of spoken Taíno were preserved. They are presented first in the original orthography in which they were recorded, then in a regularized orthography based on the reconstructed language, and lastly in their English translation:"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ta%C3%ADno",
        "situacao": "ok",
        "texto": "The Taíno were the Indigenous peoples in most of the West Indies, in the Caribbean region of the Americas. Their culture has been continued today by their descendants and by Taíno revivalist communities. They were the first New World peoples encountered by non-Norse Europeans. Part of the Arawak group of Indigenous peoples in the Americas, the Taíno are also referred to as Island Arawaks or Antill\n[…]\nWomen lived in village groups containing their children, and men lived separately. As a result, Taíno women had extensive control over their lives and their fellow villagers. The Taínos told Columbus that another Indigenous tribe, Caribs, were fierce warriors who made frequent raids on the Taínos, often capturing the women.\n[…]\nTaínos believed that Jupias, the souls of the dead, would go to Coaybay, the underworld, and there they rest by day. At night they would assume the form of bats and eat the guava fruit.\n[…]\nDisease played a significant role in the destruction of the Indigenous population, but forced labour was also one of the chief reasons behind the depopulation of the Taíno. The first man to introduce this forced labour among the Taínos was the leader of the European colonisation of Puerto Rico, Ponce de León. Such forced labour eventually led to the Taíno rebellions, to which the Spaniards responded with violent military expeditions known as cabalgadas.\n[…]\nPresent-day peoples with Caribbean Indigenous heritage may identify as Taíno, Taíno descendants, or other localised terms, and often come from rural communities such as the jíbaro of Puerto Rico or Jamaica's Yamaye. Although Taíno was originally an exonym, contemporary descendants of the Taínos have begun to reclaim the name and publicly assert a shared Taíno Caribbean-Indigenous identity. They typically describe traditions that have been passed on in secret to evade enslavement or persecution."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_ta%C3%ADno",
        "situacao": "ok",
        "texto": "Língua taíno, também grafada taino, é uma língua extinta e escassamente atestada da família arawak, falada pelos taínos das Antilhas. Na época do primeiro contato com os espanhóis, era a língua mais difundida do Caribe.\n[…]\nO nome \"taíno\" tem sua origem no termo nativo nitayno, que se referia a classe social de elite dos \"homens de bem\", mas não era um endônimo étnico nem linguístico. Cristóvão Colombo e os demais conquistadores espanhóis se referiram aos taínos somente como \"índios\", sem menção alguma ao nome nativo utilizado por eles.\n[…]\nEssa unidade linguística dos taíno é notada pelo próprio Cristóvão Colombo e por Bartolomeu de las Casas. Na carta de Colombo sobre a primeira viagem, ele registra que se falava uma língua comum nas \"islas de India\" e que os habitantes de diferentes ilhas se visitavam de canoa e se entendiam entre si.\n[…]\nO taíno convivia nas Grandes Antilhas com línguas de filiação não arawak, sobre as quais exercia posição dominante. Em Hispaniola falavam-se o macorís, em duas variedades da costa norte, e o ciguaio, na Península de Samaná. Os únicos vocábulos atestados dessas línguas foram registrados por contraste com o taíno.\n[…]\nPor volta de 1200, os taínos chegaram às Ilhas Turcas e Caicos, movimento atestado pela presença de cerâmica chicoide na região; por volta de 1450, falantes do taíno clássico atravessaram o Canal de Barlavento do noroeste do atual Haiti para o extremo leste de Cuba, onda de migração que a chegada dos espanhóis vai acelerar.\n[…]\nGranberry e Vescelius identificam 39 topônimos insulares de origem indígena no arquipélago lucaiano, entre os quais:\n[…]\nLista comparativa de itens lexicais taínos, segundo Ramirez:\n[…]\nTaínos\n[…]\nHiguayagua Taino, site da comunidade Higuayagua",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Cuauhtémoc",
      "descricao": "Último imperador mexica, que comandou a defesa de Tenochtitlan contra os espanhóis em 1521."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em náuatle, o nome de Cuauhtémoc, último imperador asteca, quer dizer águia que faz o quê?",
    "resposta": "Que desce",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuauht%C3%A9moc"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuauht%C3%A9moc",
        "situacao": "ok",
        "texto": "Cuauhtémoc (Nahuatl pronunciation: [kʷaːʍˈtemoːk] , Spanish pronunciation: [kwawˈtemok] ), also known as Cuauhtemotzín, Guatimozín, or Guatémoc, was the Aztec ruler (tlatoani) of Tenochtitlan from 1520 to 1521, and the last Aztec Emperor. The name Cuauhtemōc means \"one who has descended like an eagle\", commonly rendered in English as \"Descending Eagle\", evoking a raptor diving toward its prey.\n[…]\nTlacotzin, Cuauhtémoc's cihuacoatl, was appointed his successor as tlatoani. He died the next year before he could return to Tenochtitlan.\n[…]\nCuauhtémoc is also one of the few non-Spanish given names for Mexican boys that is perennially popular. Individuals with this name include the politician Cuauhtémoc Cárdenas and footballer Cuauhtémoc Blanco.\n[…]\nCuauhtémoc, in the name Guatemoc, is portrayed sympathetically in the adventure novel Montezuma's Daughter (1893), by H. Rider Haggard. First appearing in Chapter XIV, he becomes friends with the protagonist after they save each other's lives. His coronation, torture, and death are described in the novel.\n[…]\nGillingham, Paul. Cuauhtémoc's Bones: Forging National Identity in Modern Mexico. Albuquerque: University of New Mexico Press. ISBN 978-0-8263-5037-4\n[…]\nJohnson, Lyman L. \"Digging Up Cuauhtémoc\" in Death, Dismemberment, and Memory: Body Politics in Latin America, Lyman L. Johnson, ed. Albuquerque: University of New Mexico Press 2004, ISBN 978-0-8263-3201-1 pp. 207–244.\n[…]\nLeón-Portilla, Miguel ed. The Broken Spears: Aztec Account of the Conquest of Mexico. Boston, 1992. Presents Nahuatl texts about Cuauhtémoc's deeds during the siege of Tenochtitlan. ISBN 978-0-8070-5500-7\n[…]\nScholes, France V., and Ralph Roys. The Maya Chontal Indians of Acalan-Tixchel. Washington, D.C., 1948. Includes a unique text in Chontal that tells about the death of Cuauhtémoc.\n[…]\n\"Cuauhtemotzín\" . Appletons' Cyclopædia of American Biography. 1900."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cuauht%C3%A9moc",
        "situacao": "ok",
        "texto": "Cuauhtémoc (1495 — 28 de fevereiro de 1525), também chamado Cuauhtemotzin ou Guatimozin, foi o último Tlatoani (governante) de Tenochtitlán e o último Huey Tlatoani do Império Asteca que não foi empossado e endossado pelos espanhóis. Seu nome pode significar tanto \"ataque da águia\" na língua Nahuatl (cuauhtli significa águia; temoc, declinante), como pode também ser interpretado como \"sol se pondo\n[…]\nData do nascimento de Cuauhtémoc não consta em nenhum documento histórico, sua vida era praticamente desconhecida até que se tornou Tlatoani. Era o filho legítimo mais velho de  Ahuitzotl e pode muito bem ter assistido a última cerimônia de Fogo Novo que marca o início de uma nova ciclo de 52 anos no calendário asteca. Cuauhtémoc era sobrinho do imperador Moctezuma II, e sua jovem esposa, Isabel (1509–1551), era uma das filhas de Montezuma.\n[…]\nPara Cortés não era interessante nesse momento a morte de Cuauhtémoc. Preferia usar a autoridade de um tlatoani, para submeter os nativos aos desígnios do imperador Carlos V e aos seus próprios. E fez isso com sucesso, garantindo que com Cuauhtémoc teria a cooperação dos astecas na limpeza e restauração da cidade. Nos quatro anos de administração espanhola que se seguiram, a ganancia de Cortés por ouro o levou a torturar e matar o último tlatoani asteca.\n[…]\nEm 1525 Cortés levou-o em sua viagem a Honduras, talvez porque temesse que Cuauhtémoc liderasse uma insurreição. Algumas crônicas indígenas registram que Cuauhtémoc tentara informar outras cidades sobre as intenções dos conquistadores, durante a viagem, embora não fosse acreditado já que estes também temiam os Astecas. O conquistador espanhol Bernal Diaz de Castilho descreveu uma versão mais elaborada da conspiração. Finalmente, Cortéz ordenou a morte de Cuauhtémoc em 26 de fevereiro de 1525.\n[…]\nAsteca\n[…]\n«Mexico.udg.mx Arte \"Monumento a Cuauhtémoc: o tormento\"»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Mexicas",
      "descricao": "Povo de língua náuatle que fundou Tenochtitlan e liderou o Império Asteca."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os povos que costumamos chamar de astecas se chamavam de mexicas. Que país atual tem nome derivado dessa palavra?",
    "resposta": "México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Name_of_Mexico",
      "https://en.wikipedia.org/wiki/Mexica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Name_of_Mexico",
        "situacao": "ok",
        "texto": "Several hypotheses seek to explain the etymology of the name \"Mexico\" (México in modern Spanish) which dates, at least, back to 14th century Mesoamerica. Among these are expressions in the Nahuatl language such as (in translation), Mexitli (\"place in the middle of the century plant\") and Mēxihco (\"place in the navel of the moon\"), along with the currently used shortened form in Spanish, \"el omblig\n[…]\nThe name Mexico has been commonly described to be a derivative from Mexica, the autonym of the Aztec people, but said affirmation is controversial as there are many competing etymologies for both terms and given the fact that in many old sources, 'Mexica' simply appears as the way to call the inhabitants of the island of Mexico (where Tenochtitlan and Tlatelolco were located) in their native Nahuatl; implying that instead of Mexica being the source of the name 'Mexico', the opposite would be true.\n[…]\nThe Real Academia Española itself recommends the spelling \"México\".\n[…]\nMéxico is the predominant Spanish spelling variant used throughout Latin America, and universally used in Mexican Spanish, whereas Méjico is used infrequently in Spain and Argentina. In the 1990s, the Spanish Royal Academy (RAE) recommended that México be the normative spelling of the word and all its derivatives, even though this spelling does not match the pronunciation of the word, but that both forms with ⟨x⟩ or ⟨j⟩ are still orthographically correct.\n[…]\nThe spelling with ⟨j⟩ was introduced by the RAE in a spelling reform around 1815, concurrent with the Mexican war of independence from Spain, and the ⟨j⟩ spelling was suggested by RAE until the early 21st century. However, in Mexico itself the spelling with ⟨x⟩ has been used universally since its independence, with Mexicans \"resist[ing] the change of the spelling of their country's name.\"\n[…]\nMexican state name etymologies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mexica",
        "situacao": "ok",
        "texto": "The Mexica (Nahuatl: Mēxihcah [meːˈʃiʔkaḁ] ; singular Mēxihcātl) are a Nahuatl-speaking people of the Valley of Mexico who were the rulers of the Triple Alliance, more commonly referred to as the Aztec Empire. The Mexica established Tenochtitlan, a settlement on an island in Lake Texcoco, in 1325. A dissident group in Tenochtitlan separated and founded the settlement of Tlatelolco with its own dyn\n[…]\nToday, descendants of the Mexica and other Aztec peoples are among the Nahua people of Mexico.\n[…]\nMany Mexica women were kidnapped and raped by the invaders, with the higher-ranking soldiers taking the more attractive women for themselves. Forbidden from resettling in their destroyed home, which was rebuilt as Mexico City, the Mexica were forced to submit to the King of Spain, receive baptism and convert to Christianity. Mexica rituals and worship were banned and harshly suppressed, and the images of their gods were cast down and destroyed by Spanish monks.\n[…]\nHowever, the sincerity of the Mexica conversion to Christianity was questioned by some of the Spanish missionaries, such as the monk Bernardino de Sagagún, who wrote during an epidemic in 1576 that he was doubtful of a permanent Christian presence in Mexico.[A]s regards the Catholic Faith, [Mexico] is a sterile land and very laborious to cultivate, where the Catholic Faith has very shallow roots, and with much labor little fruit is produced, and from little cause that which is planted and cultivated withers.\n[…]\nIn the 21st century, the Mexican government does not recognize ethnicity by ancestry but by language spoken, making the number of Mexica or Mexica descendants in Mexico difficult to estimate. In 2020, there were estimated to be over 1.6 million Nahuatl speakers living in Mexico, as well as several thousand Nahuatl-speaking immigrants from Mexico living in the United States.\n[…]\nIndigenismo in Mexico\n[…]\nMexica Movement\n[…]\nMexicayotl"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nome_do_M%C3%A9xico",
        "situacao": "ok",
        "texto": "A origem do nome \"México\" possui várias hipóteses que envolvem sua origem, sua história e seu uso, que remonta ao século XIV na Mesoamérica. A palavra náuatle México significa lugar dos mexicas, mas o etnônimo Mexicatl em si é de etimologia desconhecida. Uma possibilidade alternativa é que o nome venha da palavra mexixin, um agrião que cresceu nos pântanos do Lago Texcoco.\n[…]\nO país México não nomeou sua capital depois de si, como na Cidade do México - o nome aceito internacionalmente -, mas o contrário realmente se aplica. Antes da época espanhola, a capital era formalmente chamada Tenochtitlan, mas era a sede do Império Mexica, que é conhecido como o Império Asteca .\n[…]\nEm 22 de novembro de 2012, o presidente em exercício, Felipe Calderón, enviou ao Congresso mexicano uma legislação para mudar oficialmente o nome do país para o México. Para entrar em vigor, o projeto teria de ser aprovado por ambas as câmaras do Congresso , bem como pela maioria das 31 legislaturas estaduais do México.\n[…]\nNo entanto, houve ambivalência na aplicação desta regra nos topônimos mexicanos: México foi usado juntamente com Méjico, Texas e Tejas , Oaxaca e Oajaca , Xalixco e Jalisco , etc., bem como em nomes próprios e sobrenomes: Xavier e Javier , Ximénez e Jiménez , Roxas e Rojas são variantes de ortografia ainda usadas hoje. Em qualquer caso, a ortografia Méjico para o nome do país é pouco usada no México ou no resto do mundo de língua espanhola hoje.\n[…]\nO México é a variante ortográfica espanhola predominante usada em toda a América Latina e universalmente usada no espanhol mexicano , enquanto o Méjico é pouco usado na Espanha e na Argentina . Durante a década de 1990, a Real Academia Española recomendou que o México fosse a ortografia normativa da palavra e todos os seus derivados, mesmo que essa grafia não coincida com a pronúncia da palavra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Noite Triste",
      "descricao": "Fuga desastrosa dos espanhóis de Hernán Cortés e seus aliados de Tenochtitlan, em 1520."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A fuga desastrosa dos espanhóis de Tenochtitlan, em 1520, ganhou o nome de Noite Triste porque, segundo a tradição, Cortés fez o quê sob uma árvore?",
    "resposta": "Chorou",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Noche_Triste"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Noche_Triste",
        "situacao": "ok",
        "texto": "La Noche Triste (\"The Night of Sorrows\", literally \"The Sad Night\"), officially called in Mexico Victorious Night, was an important event during the Spanish conquest of the Aztec Empire, where Hernán Cortés and his army of Spanish conquistadors, including their native allies were driven out of the Mexica capital, Tenochtitlan.\n[…]\nIn May 1520, news from the Gulf coast reached Cortés that a much larger party of Spaniards had been sent by Governor Velázquez of Cuba to arrest Cortés for insubordination. Leaving Tenochtitlan in the care of his trusted lieutenant, Pedro de Alvarado, Cortés marched to the coast, where he defeated the Cuban expedition led by Pánfilo de Narváez sent to capture him. When Cortés told the defeated soldiers about the riches of Tenochtitlan, they agreed to join him.\n[…]\nThe event was named La Noche Triste (\"The Night of Sorrows\") on account of the sorrow that Cortés and his surviving followers felt and expressed at the loss of life and treasure incurred in the escape from Tenochtitlan.\n[…]\nHistoria verdadera de la conquista de la Nueva España (\"True History of the Conquest of New Spain\") by Bernal Díaz del Castillo. Bernal Díaz del Castillo served as a rodelero, or soldier armed with sword and buckler, in Cortés' expedition, and personally participated in the nocturnal battle known as \"La noche triste.\"  His Chapter CXXVIII (\"How we agreed to flee from Mexico, and what we did about it\") is an account of the event.\n[…]\nLa Historia general de las Indias (\"General History of the Indies\") by Gonzalo Fernández de Oviedo y Valdés. See Parsons (below), Volume III, pp. 296–292. Oviedo, not himself a witness to La Noche Triste, claimed to have interviewed Thoan Cano, a member of Pánfilo Narváez' expedition who joined Cortés in his return to Mexico and who survived the escape from the city."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Noite_Triste",
        "situacao": "ok",
        "texto": "A Noite Triste (em espanhol, La Noche Triste), oficialmente renomeado no México como \"A Noite Vitoriosa\" foi uma batalha que ocorreu em 1520 em Tenochtitlán, no México, entre forças astecas e espanholas, dentro do contexto da conquista do México pelos espanhóis. Segundo a lenda, após a  batalha, o líder espanhol Hernán Cortés teria sentado embaixo de uma árvore e chorado a morte de grande parte de\n[…]\nEm Junho, Cortés recebeu a notícia da costa do Golfo de que um grupo bastante maior de espanhóis havia sido enviado pelo governador Velázquez, de Cuba, para prendê-lo por insubordinação. Deixando Tenochtitlán ao cuidado do seu lugar-tenente de confiança, Pedro de Alvarado, Cortés marchou para a costa e derrotou a expedição oriunda de Cuba liderada por Pánfilo de Narváez. Quando Cortés falou aos soldados derrotados sobre a cidade de ouro, Tenochtitlán, eles concordaram em juntar-se-lhe.\n[…]\nOs espanhóis e os seus aliados lutaram à chuva para conseguir avançar pelo caminho, por vezes usando a ponte portátil para ultrapassar os espaços vazios deixados após a retirada das pontes, ainda que, com o desenrolar da batalha, alguns deles tinham ficado tão cheios de destroços e cadáveres que os fugitivos puderam atravessar a pé. Segundo Cortés, pereceram 150 espanhóis e 2 000 aliados nativos.\n[…]\nOutras batalhas esperavam os espanhóis e seus aliados no caminho que percorreriam em redor da margem norte do lago Zumpango. Duas semanas mais tarde, na batalha de Otumba, próximo de Teotihuacan, fizeram frente aos astecas que os perseguiam, derrotando-os de forma decisiva - segundo Cortés, porque ele matara o comandante asteca - dando, assim, aos espanhóis, algum alívio, o que lhes permitiu chegar a Tlaxcala. Ali, Cortés preparou o cerco de Tenochtitlán.\n[…]\nCortés and the Downfall of the Aztec Empire de Jon Manchip White (1971) ISBN 0-7867-0271-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Atahualpa",
      "descricao": "Último imperador inca independente, capturado e executado pelos espanhóis de Francisco Pizarro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Condenado pelos espanhóis a morrer na fogueira, em 1533, Atahualpa teve a pena trocada por estrangulamento depois de aceitar o quê?",
    "resposta": "O batismo cristão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atahualpa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atawallpa ( ), also Atahualpa or Ataw Wallpa (Classical Quechua: Ataw Wallpa, pronounced [ˈataw ˈwaʎpa]) (c. 1502 – 29 August 1533), whose regnal name was Caccha Pachacuti Inca Yupanqui Inca (from the caccha idol and to honour the emperor Pachacuti), was the last effective Inca emperor, reigning from April 1532 until his capture and execution in July-August of the following year, as part of the Sp\n[…]\nHuáscar managed to take Atawallpa prisoner. Atahualpa escaped and rallied his forces, winning several battles against Huáscar's forces before capturing Huáscar.\n[…]\nFrom Cuzco the Huascarites, led by the armies of general Atoc, defeated Atawallpa in the battle of Chillopampa. The Atahualapite generals responded quickly; they gathered together their scattered troops, counter-attacked and forcefully defeated Atoc in Mulliambato. They captured Atoc and later tortured and killed him.\n[…]\nThe Atahualapite forces continued to be victorious, as a result of the strategic abilities of Quizquiz and Chalcuchímac. Atawallpa began a slow advance on Cuzco. While based in Marcahuamachuco, he sent an emissary to consult the oracle of the Huaca (god) Catequil, who prophesied that Atawallpa's advance would end poorly. Furious at the prophecy, Atawallpa went to the sanctuary, killed the priest and ordered the temple to be destroyed.\n[…]\nIn accordance with his request, he was executed by strangling with a garrote on 26 July 1533. His clothes and some of his skin were burned and his remains were given a Christian burial. Atawallpa was succeeded by his brother Túpac Huallpa and, later, by another brother, Manco Inca.\n[…]\nIn Quito, the most important football stadium is named Estadio Atahualpa after Atawallpa.\n[…]\n[1] Atahualpa – World History Encyclopedia\n[…]\n\"Atahualpa\" . Appletons' Cyclopædia of American Biography. 1900. pp. 113–114."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atahualpa ou Atahuallpa (quéchua Ataw Wallpa, 30 de março de 1502 – Cajamarca, 26 de julho de 1533) foi o décimo terceiro e último Sapa Inca (imperador inca) de Tahuantinsuyu, como era chamado o Império Inca. Foi o governante de Quito por cinco anos antes de conquistar o Império Inca de seu irmão Huáscar. Depois de derrotar seu irmão, Atahualpa tornou-se muito brevemente o último Sapa Inca (impera\n[…]\nDe acordo com lei espanhola, a esperada recusa de Atahualpa a tal \"exigência\" permitiria que os espanhóis oficialmente declarassem guerra aos incas. Pelo relato dos conquistadores, já havia sido dada um breviário (livro de orações) a Atahualpa que, tendo ouvido a insolente exigência, atirou-a ao chão, constituindo este gesto uma grave ofensa. Atahualpa acabou aprisionado no Templo do Sol.\n[…]\nEm troca da liberdade, Atahualpa concordou em encher de peças de ouro o grande aposento que ocupava, e a dar ao espanhol o dobro daquela quantia, em prata.\n[…]\nEmbora aturdido com o resgate, Pizarro jamais teve intenção de libertar Atahualpa, que pretendia mantê-lo como refém para evitar uma escalada da violência, já que o general inca Rumiñawi ainda estava no comando de grande contingente de guerreiros incas.\n[…]\nAtahualpa foi acusado de ter cometido vários crimes: heresia, poligamia, e também por ter mandado matar seu irmão Huascar e ordenado mais uma dezena de outros crimes. Atahualpa foi julgado culpado de todas as doze acusações e condenado a ser queimado vivo na fogueira. No momento da execução, Atahualpa aceitou a proposta do padre Valverde de diminuição da pena e aceitou ser batizado para em seguida ser morto por enforcamento no dia 26 de julho de 1533.\n[…]\nApós a morte de Atahualpa, Pizarro colocou um irmão de Atahualpa, Túpac Hualpa como governador de Cusco que foi envenenado e logo em seguida outro irmão Manco Yupanqui.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Resgate de Atahualpa",
      "descricao": "Grande quantidade de ouro e prata reunida pelos incas em Cajamarca, em 1532 e 1533, para libertar Atahualpa, preso por Pizarro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quase nada do ouro e da prata reunidos pelos incas para o resgate de Atahualpa chegou aos museus. O que os espanhóis fizeram com essas peças?",
    "resposta": "Derreteram",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atahualpa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atawallpa ( ), also Atahualpa or Ataw Wallpa (Classical Quechua: Ataw Wallpa, pronounced [ˈataw ˈwaʎpa]) (c. 1502 – 29 August 1533), whose regnal name was Caccha Pachacuti Inca Yupanqui Inca (from the caccha idol and to honour the emperor Pachacuti), was the last effective Inca emperor, reigning from April 1532 until his capture and execution in July-August of the following year, as part of the Sp\n[…]\nCieza de León denied that Atawallpa was born in Quito or Caranqui and that his mother was the lady of Quito, as some at the time claimed, since Quito was a province of Tahuantinsuyo when Atawallpa was born. Therefore their kings and lords were the Incas.\n[…]\nThe Atahualapite forces continued to be victorious, as a result of the strategic abilities of Quizquiz and Chalcuchímac. Atawallpa began a slow advance on Cuzco. While based in Marcahuamachuco, he sent an emissary to consult the oracle of the Huaca (god) Catequil, who prophesied that Atawallpa's advance would end poorly. Furious at the prophecy, Atawallpa went to the sanctuary, killed the priest and ordered the temple to be destroyed.\n[…]\nOn the morning of his death, Atawallpa was interrogated by his Spanish captors about his birthplace. Atawallpa declared that his birthplace was in what the Incas called the Kingdom of Quito, in a place called Caranqui (today located 2 km southeast of Ibarra, Ecuador). Most chroniclers agree, though other stories suggest various other birthplaces.\n[…]\nIn Quito, the most important football stadium is named Estadio Atahualpa after Atawallpa.\n[…]\nThe closing track of Tyrannosaurus Rex's debut album, My People Were Fair and Had Sky in Their Hair... But Now They're Content to Wear Stars on Their Brows, was entitled \"Frowning Atahuallpa (My Inca Love)\".\n[…]\n[1] Atahualpa – World History Encyclopedia\n[…]\n\"Atahualpa\" . Appletons' Cyclopædia of American Biography. 1900. pp. 113–114."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atahualpa",
        "situacao": "ok",
        "texto": "Atahualpa ou Atahuallpa (quéchua Ataw Wallpa, 30 de março de 1502 – Cajamarca, 26 de julho de 1533) foi o décimo terceiro e último Sapa Inca (imperador inca) de Tahuantinsuyu, como era chamado o Império Inca. Foi o governante de Quito por cinco anos antes de conquistar o Império Inca de seu irmão Huáscar. Depois de derrotar seu irmão, Atahualpa tornou-se muito brevemente o último Sapa Inca (impera\n[…]\nO episódio ocorreu quando o soberano inca, depois de aceitar um convite de Pizarro para jantar e conversar, veio à praça principal de Cajamarca trazendo apenas um pequeno contingente de guardas de honra. Quando Atahualpa chegou, a praça aparentava estar vazia, pois os homens de Pizarro aguardavam ocultos.\n[…]\nAtahualpa foi recebido apenas pelo padre Vicente Valverde que, através de um tradutor, imediatamente interpelou Atahualpa exigindo que ele e seu séquito se convertessem ao cristianismo e se submetessem à soberania do rei espanhol, ameaçando-o, pela recusa, de ser considerado um inimigo da Igreja Católica e do Reino da Espanha.\n[…]\nDe acordo com lei espanhola, a esperada recusa de Atahualpa a tal \"exigência\" permitiria que os espanhóis oficialmente declarassem guerra aos incas. Pelo relato dos conquistadores, já havia sido dada um breviário (livro de orações) a Atahualpa que, tendo ouvido a insolente exigência, atirou-a ao chão, constituindo este gesto uma grave ofensa. Atahualpa acabou aprisionado no Templo do Sol.\n[…]\nEm troca da liberdade, Atahualpa concordou em encher de peças de ouro o grande aposento que ocupava, e a dar ao espanhol o dobro daquela quantia, em prata.\n[…]\nEmbora aturdido com o resgate, Pizarro jamais teve intenção de libertar Atahualpa, que pretendia mantê-lo como refém para evitar uma escalada da violência, já que o general inca Rumiñawi ainda estava no comando de grande contingente de guerreiros incas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Colapso maia clássico",
      "descricao": "Declínio e abandono de muitas cidades maias das terras baixas do sul entre os séculos oito e dez."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Que fenômeno climático é apontado como uma das principais causas do abandono de muitas cidades maias do sul, por volta do século nove?",
    "resposta": "Secas prolongadas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Classic_Maya_collapse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Classic_Maya_collapse",
        "situacao": "ok",
        "texto": "In archaeology, the classic Maya collapse is a model to describe the destabilization of Classic Maya civilization and the violent collapse and abandonment of many southern lowlands city-states between the 7th and 9th centuries CE. Modern scholars increasingly describe this period as a \"rupture\" or transformation rather than a true collapse, because a number of Maya cities survived even if they fac\n[…]\nAnother piece of evidence used by historians to date the Classic Mayan decline is the absence of new buildings in the central Maya area after 830.\n[…]\nSuch ideas as this could explain the role of disease as at least a possible partial reason for the Classic Maya Collapse.\n[…]\nThe drought theory holds that rapid climate change in the form of severe drought (a megadrought) brought about the Classic Maya collapse. Paleoclimatologists have discovered abundant evidence that prolonged droughts occurred in the Yucatán Peninsula and Petén Basin areas during the Terminal Classic.\n[…]\nIn The Great Maya Droughts, Richardson Gill gathered and analyzed an array of climatic, historical, hydrologic, tree ring, volcanic, geologic, and archeological research, and suggested that a prolonged series of droughts likely caused the Classic Maya collapse.\n[…]\nThe drought theory provides a comprehensive explanation, because non-environmental and cultural factors (excessive warfare, foreign invasion, peasant revolt, less trade, etc.) can all be explained by the effects of prolonged drought on Classic Maya civilization.\n[…]\nThe role of drought in the collapse of Classic Maya civilization has remained controversial, however, largely because the majority of paleoclimate records only provide qualitative data, for example whether conditions were simply \"wetter\" or \"drier\". The lack of quantitative data makes it difficult to predict how climatic changes would have affected human populations and the environment in which they lived."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Colapso_maia",
        "situacao": "ok",
        "texto": "A expressão colapso maia (ou colapso maia do clássico) faz referência ao declínio e abandono das cidades maias das terras baixas da região maia no período clássico, entre os séculos VIII e IX. Trata-se de um dos maiores mistérios em arqueologia, devido ao alto desenvolvimento da cultura maia clássica antes do colapso e à rapidez com que o mesmo ocorreu.\n[…]\nForam identificadas cerca de oitenta diferentes teorias ou variações de teorias que tentam explicar o colapso maia do clássico. Não existe uma teoria universalmente aceita, apontando-se o possível enfraquecimento devido a lutas internas, guerras e rebeliões, bem como abusos dos recursos naturais que teriam debilitado o ecossistema e provocado longas secas e escassez de alimentos.\n[…]\nGill, Richardson B. (2000). The Great Maya Droughts: Water, Life, and Death. Albuquerque: University of New Mexico Press. ISBN 0-826-32194-1. OCLC 43567384",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Mama Quilla",
      "descricao": "Deusa inca da Lua, esposa e irmã do deus Sol, Inti."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Para os incas, o ouro era o suor do Sol. E a prata, ligada à deusa lua Mama Quilla, era vista como o quê dela?",
    "resposta": "Lágrimas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mama_Killa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mama_Killa",
        "situacao": "ok",
        "texto": "Mama Quilla (Quechua: Mama Killa, pronounced [ˈmama ˈkiʎa], lit. 'Mother Moon'), in Inca mythology and religion, was the third power and goddess of the moon. She was the older sister and wife of Inti, daughter of Viracocha and mother of Manco Cápac and Mama Uqllu (Mama Ocllo), mythical founders of the Inca empire and culture. She was the goddess of marriage and the menstrual cycle, and considered \n[…]\nMyths surrounding Mama Quilla include that she cried tears of silver and that lunar eclipses were caused when she was being attacked by an animal. She was envisaged in the form of a beautiful woman and her temples were served by dedicated priestesses.\n[…]\nOne myth surrounding the Moon was to account for the \"dark spots\"; it was believed that a fox fell in love with Mama Quilla because of her beauty, but when he rose into the sky, she squeezed him against her, producing the patches. The Incas would fear lunar eclipses as they believed that during the eclipse, an animal (possibly a mountain lion or serpent) was attacking Mama Killa.\n[…]\nMama Quilla was also believed to cry tears of silver.\n[…]\nMama Quilla was generally the third deity in the Inca pantheon, after Inti (god of the sun) and Illapu (god of thunder), but was viewed as more important than Inti by some coastal communities, including by the Chimú. Relatives of Mama Quilla include her younger brother and husband Inti, god of the sun, and her children Manco Cápac, first ruler of the Incas, and Mama Ocllo, Manco Cápac's older sister and wife.\n[…]\nAfter the Ichma, nominally of the Chimú Empire, joined the Inca empire, she also became the mother of their deity Pacha Kamaq. Mama Quilla's father was said to be Viracocha.\n[…]\nMama Quilla had her own temple in Cusco, served by priestesses dedicated to her. She was imagined as a human female, and images of her included a silver disc covering an entire wall."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mama_Killa",
        "situacao": "ok",
        "texto": "Na mitologia Inca, Mama Killa, a mãe lua, era a irmã e esposa do deus Inti. Esta deusa representada pela lua acompanhava Inti em igualdade na corte celestial. A Tríplice Deusa Inca, a grande deusa da mitologia inca, desdobra-se em três: Mama Killa, Mama Ocllo e Mama Cocha.\n[…]\nNaturalmente a deusa Mama Killa estava ligada ao fervor religioso das mulheres, eram elas que formavam o núcleo de suas fiéis seguidoras, já que a deusa Mama Killa podia compreender seus desejos e temores e dar-lhes o amparo buscado.\n[…]\n\"Segundo a lenda, a Ka-Ata-Killa, ou Mama killa, foi criada pelo Deus Viracocha Pachacayaki, criador de todas as coisas. Ela nasceu no lago Titicaca, precisamente, e muitos templos foram dedicados à deusa.\n[…]\nEla mesma escolheu morar perto do lago onde nasceu, e então um dia, Ka-Ata-Killa se apaixonou por um mortal, um pescador cujo barco ela frequentemente via da janela de sua casa. Sua paixão por ele era tão intensa que ela não aguentou e se revelou a ele um dia, em todo o seu esplendor de deusa, e o homem ficou assustado.\n[…]\nKa-Ata-Killa, furiosa com essa rejeição, construiu um templo nas profundezas da selva e trancou o mortal que ousou resistir a ela. Depois de sequestrar o mortal que estava apaixonada, a deusa criou um espelho, ela forçou o homem olhar para ele e responder a uma pergunta, sempre a mesma: Você me ama? A deusa acreditou que o homem acabaria se apaixonando por ela.\n[…]\nAté que um dia o mortal disse que a amava, mas a deusa sabia que ele estava mentindo quando se olhou no espelho.\n[…]\nQuando AK-Ata-Killa descobriu seu cadáver ela entrou em desespero. Em sua dor, ela libertou sua raiva causando um cataclismo, que exterminou quase toda a humanidade, e foi descansar no alto do céu, tonando-se um satélite - a lua.\"",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Viracocha",
      "descricao": "Grande deus criador da religião inca e de outros povos andinos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1947, Thor Heyerdahl cruzou o Pacífico numa jangada de madeira chamada Kon-Tiki, um nome antigo de que deus andino?",
    "resposta": "Viracocha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kon-Tiki_expedition",
      "https://en.wikipedia.org/wiki/Viracocha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kon-Tiki_expedition",
        "situacao": "ok",
        "texto": "The Kon-Tiki expedition was a 1947 journey by raft across the Pacific Ocean from South America to the Polynesian islands, led by Norwegian explorer and ethnographer Thor Heyerdahl. The raft was named Kon-Tiki after the Inca god Viracocha, for whom \"Kon-Tiki\" was said to be an old name. Heyerdahl's book on the expedition was entitled The Kon-Tiki Expedition: By Raft Across the South Seas. A 1950 do\n[…]\nThor Heyerdahl's book about his experience became a bestseller. It was published in Norwegian in 1948 as The Kon-Tiki Expedition: By Raft Across the South Seas, later reprinted as Kon-Tiki: Across the Pacific in a Raft. It appeared with great success in English in 1950, also in many other languages. A documentary motion picture about the expedition, also called Kon-Tiki, was produced from a write-up and expansion of the crew's filmstrip notes and won an Academy Award in 1951.\n[…]\nHe further said that these people were originally from the Middle East, and had crossed the Atlantic earlier to found the great Mesoamerican civilizations. By 500 CE, a branch of these people were supposedly forced out into Tiahuanaco where they became the ruling class of the Inca Empire and set out to voyage into the Pacific Ocean under the leadership of \"Con Ticci Viracocha\".\n[…]\nKon-Tiki is a 2012 Norwegian historical dramatized feature film about the 1947 Kon-Tiki expedition. It starred Pål Sverre Valheim Hagen as Thor Heyerdahl and was directed by Joachim Rønning and Espen Sandberg. It was the highest-grossing film of 2012 in Norway and the country's most expensive production to date.\n[…]\nHeyerdahl, Thor; Lyon, F.H. (translator) (1950). Kon-Tiki: Across the Pacific by Raft. Rand McNally & Company, Chicago, Ill.\n[…]\nKon-Tiki Museum\n[…]\nTesting Heyerdahl's Theories about Kon-Tiki 60 Years Later: Tangaroa Pacific Voyage (Summer 2006) Azerbaijan International, Vol 14:4 (Winter 2006)\n[…]\nKon-Tiki 1947 Documentary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Viracocha",
        "situacao": "ok",
        "texto": "Viracocha (also Wiraqocha, Huiracocha; Quechua Wiraqucha) is the creator and supreme deity in the pre-Inca and Inca mythology in the Andes region of South America. According to the myth Viracocha had human appearance and was generally considered as bearded. According to the myth he ordered the construction of Tiwanaku. It is also said that he was accompanied by men also referred to as Viracochas.\n[…]\nIt is often referred to with several epithets. Such compound names include Ticsi Viracocha (T'iqsi Wiraqocha), Contiti Viracocha, and, occasionally, Kon-Tiki Viracocha (the source of the name of Thor Heyerdahl's raft). Other designations are \"the creator\", Viracochan Pachayachicachan, Viracocha Pachayachachi or Pachayachachic (\"teacher of the world\").\n[…]\nEventually, Viracocha, Tocapo and Imahmana arrived at Cusco (in modern-day Peru) and the Pacific seacoast, where they walked away across the water until they disappeared. The word \"Viracocha\" literally means \"Sea Foam.\"\n[…]\nTiqsi Huiracocha (Spanish:Ticsi Viracocha) may have several meanings. In the Quechuan languages, tiqsi means \"origin\" or \"beginning\", wira means fat, and qucha means lake, sea, or reservoir.\n[…]\nA rock formation in the small village of Ollantaytambo in southern Peru is said by local legend to be a naturally formed or carved representation of the messenger of Viracocha named Wiracochan or Tunupa. Ollantaytambo, located in the Cusco Region, makes up a chain of small villages along the Urubamba Valley. Known as the Sacred Valley, it was an important stronghold of the Inca Empire.\n[…]\nGuamán Poma, an indigenous chronicler, considers the term \"viracocha\" to be equivalent to \"creator\"\n[…]\nSpanish interpreters generally attributed the identity of supreme creator to Viracocha during the initial years of colonization.\n[…]\nThe Colombian myth of Bochica who has a similar role as creator and civilizer as Viracocha"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Expedi%C3%A7%C3%A3o_Kon-Tiki",
        "situacao": "ok",
        "texto": "Kon-Tiki foi o barco utilizado pelo explorador norueguês Thor Heyerdahl (1914-2002), em sua expedição pelo Oceano Pacífico, partindo da América do Sul para a Polinésia, em 1947, com o intuito de demonstrar a possibilidade de que a colonização da Polinésia tinha sido realizada por via marítima por indígenas (ou nativos) da América do Sul. O nome do barco foi homenagem ao deus do sol inca, Viracocha\n[…]\nA palavra \"tiki\" significa um deus, portanto, o deus Kon. Kon-Tiki é também o nome do livro que Heyerdahl escreveu sobre sua expedição.\n[…]\nHeyerdahl defendia a tese de que os povos da América do Sul poderiam ter alcançado a Polinésia em tempos pré-colombianos. Seu objetivo foi demonstrar a possibilidade de que a colonização da Polinésia tinha sido realizada por via marítima da América do Sul, em jangadas idênticas ao barco utilizado durante a expedição, e conduzido apenas pelas marés, correntes e força do vento, que é quase constante, na direção leste-oeste ao longo do Equador.\n[…]\nA expedição Kon-Tiki foi financiada através de empréstimos, e contou com doações de militares do exército dos Estados Unidos. Heyerdahl viajou para o Peru, algum tempo antes, junto com um pequeno grupo de pessoas e dentro do espaço previsto pelas autoridades nacionais, se dedicava à construção da jangada. Para isso, foram utilizas toras de madeira balsa e outros materiais nativos, e manteve o estilo de construção indígena como visto nas imagens deixadas pelos conquistadores espanhóis.\n[…]\nPágina do Museu Kon-tiki (em norueguês e em inglês).\n[…]\nHistória da teoria de Thor Heyerdhal\n[…]\nTesting Heyerdahl's Theories about Kon-Tiki 60 Years Later: Tangaroa Pacific Voyage (verano 2006) Azerbaijan International, Vol 14:4 (inverno 2006)\n[…]\nKon-Tiki in Reverse: The Tahiti-Nui Expedition\n[…]\nHsu-Fu 1993 – barco de bambu através do Pacífico (do oeste a este) personal.psu.edu\n[…]\nDocumentário Kon-Tiki 1947",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Azul maia",
      "descricao": "Pigmento azul muito resistente usado pelos maias e outros povos mesoamericanos em murais, cerâmicas e esculturas."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O azul maia, pigmento que resiste há mais de mil anos em murais, era feito misturando índigo com que outro ingrediente?",
    "resposta": "Argila",
    "distratores": [
      "Cinza vulcânica",
      "Conchas moídas",
      "Sangue animal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_blue"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_blue",
        "situacao": "ok",
        "texto": "Maya blue (Spanish: azul maya) is a unique bright turquoise or azure blue pigment manufactured by cultures of pre-Columbian Mesoamerica, such as the Mayas and Aztecs, during a period extending from approximately the 8th century to around 1860 CE. It is found in mural paintings on architectural buildings, ceramic pieces, sculptures, codices, and even in post-conquest Indochristian artworks and mura\n[…]\nThe Maya blue pigment is a composite of organic and inorganic constituents, primarily indigo dyes derived from the leaves of anil (Indigofera suffruticosa, called ch'oj in Mayan) plants combined with palygorskite, a natural clay and type of fuller's earth. Palygorskite is most common in the Southern United States, but is not known to exist in abundant deposits in Mesoamerica. Smaller trace amounts of other mineral additives have also been identified.\n[…]\nDespite time and the harsh weathering conditions, paintings coloured by Maya blue have not faded over time. The color has resisted chemical solvents and acids such as nitric acid. Its resistance against chemical aggression (acids, alkalis, solvents, etc.) and biodegradation was tested, and it was shown that Maya blue is an extremely resistant pigment, but it can be destroyed using very intense acid treatment under reflux.\n[…]\nThe chemical composition of the compound was determined by powder diffraction in the 1950s and was found to be a composite of palygorskite and indigo, most likely derived from the leaves of the añil. An actual recipe to reproduce Maya blue pigment was published in 1993 by a Mexican historian and chemist, Constantino Reyes-Valerio. The combination of different clays (palygorskite and montmorillonite), together with the use of the leaves of the añil and the actual process is described in his paper.\n[…]\nAzul Maya, descriptive site by Reyes-Valerio (in Spanish and English)"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pontes de corda incas",
      "descricao": "Pontes suspensas de fibras vegetais trançadas usadas na rede de estradas incas, como a de Q'eswachaka, ainda refeita todo ano no Peru."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A ponte suspensa de Queswachaca, no Peru, é refeita todo ano pelas comunidades andinas como no tempo dos incas. Ela é trançada com o quê?",
    "resposta": "Capim (ichu)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inca_rope_bridge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inca_rope_bridge",
        "situacao": "ok",
        "texto": "Inca rope bridges are simple suspension bridges over  canyons, gorges and rivers (pongos) constructed by the Inca Empire. The bridges were an integral part of the Inca road system and exemplify Inca innovation in engineering. Bridges of this type were useful since the Inca people did not use wheeled transport – traffic was limited to pedestrians and livestock – and they were frequently used by cha\n[…]\nThe bridges were constructed using ichu grass woven into large bundles which were very strong.\n[…]\nIn 1615, in Quechua author Huamán Poma's manuscript The First New Chronicle, Poma illustrates the Guambo rope bridge in use. He describes the masonry bridges as a positive result of the Spanish colonization of Peru, as the new bridges prevented deaths from the dangerous repair work.\n[…]\nMade of grass, the last remaining Inca rope bridge, reconstructed every June, is the Q'iswa Chaka (Quechua for \"rope bridge\"), spanning the Apurimac River near Huinchiri, in Canas Province, Quehue District, Peru. Even though there is a modern bridge nearby, the residents of the region keep the ancient tradition and skills alive by renewing the bridge annually in June.\n[…]\nCarrick-a-Rede Rope Bridge, a rope suspension bridge in Northern Ireland\n[…]\nInca Bridge, rope bridge, secret entrance to Machu Picchu\n[…]\nSimple suspension bridge. see the image of the Inca rope bridge built with modern materials and structural refinements\n[…]\nSuspension bridge, modern suspended-deck type\n[…]\n\"Secrets of Lost Empires: Inca\". Nova. PBS. 1995.\n[…]\n\"Inca Bridge to the past\". Boston University. March 21, 2003.\n[…]\n\"Inca Bridges, a Library of Congress lecture\". Library of Congress.\n[…]\n\"Inca Roads and Chasquis]\". Discover-Peru.org.\n[…]\nKlosterman, Doug (7 June 2008). \"Photo Gallery of the Construction of the Keshwa Chaca Inca rope bridge near Huinchiri, Peru\". flickr.com.\n[…]\n\"The Last Inca Suspension Bridge: A Photo Album\". Rutahsa Adventures adventure travel."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Qhapaq Ñan",
      "descricao": "Rede de estradas do Império Inca que ligava Cusco a todo o território andino."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Nas estradas do Império Inca, mensagens e quipus viajavam com corredores que se revezavam em postos ao longo do caminho. Como eles se chamavam?",
    "resposta": "Chasquis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chasqui",
      "https://en.wikipedia.org/wiki/Inca_road_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chasqui",
        "situacao": "ok",
        "texto": "A chasqui (also spelled chaski) was a messenger of the Inca Empire. Agile, highly trained and physically fit, they were in charge of carrying messages in the form of quipus, oral information, or small packets. Along the Inca road system there were relay stations called chaskiwasi (house of chasqui), placed at about 2.5 kilometres (1.6 mi) from each other, where the chasqui switched, exchanging the\n[…]\nAnd this is how the land was managed by this runners. They and their wives and sons, father, mother, brothers and sisters were free form anything that there was [taxes and services for the Inca]. He never stopped day and night. In each chasqui (house) there were four diligent Indians in this kingdom.\n[…]\nIn his Los Comentarios Reales de los Incas, published in 1609 (chapter VII), Garcilaso describes the chasquis and their operations. Most of the description of operation are taken from this book.\n[…]\nFirst of all the chasquis needed to be searched \"among the Indians for those who were quickest and fastest, and who had the most courage to run, and so he (the Inca) tested them, making them run across a plain and, later, go down a hill with the same lightness, and then climb a rough slope, without stopping, and to those who stood out in this and did it well, he assigned the courier task and they had to train every day in the race.\n[…]\nMurúa regrets the progressive disappearance of the chasquis system, which was an extremely effective communication system for the Andean zone, stating that the service \" is not performed nowadays with the punctuality and care of the past, in the times of the Inca, because then the distance of [the run of] these couriers was small, and thus the notices ran very quickly, without stopping for a single moment anywhere, not even for the chasqui to take a break and breathe.\n[…]\nTambo (Inca structure)\n[…]\nInca road system\n[…]\nChasqui I"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Inca_road_system",
        "situacao": "ok",
        "texto": "The Inca road system (also spelled Inka road system and in Quechua: Qhapaq Ñan meaning \"royal road\") was the most extensive and advanced transportation system in pre-Columbian South America. It was about 40,000 kilometres (25,000 mi) long in total. The construction of the roads required a large expenditure of time and effort.\n[…]\nTransportation was done on foot as in pre-Columbian America; the use of wheels for transportation was not known. The Inca had two main uses of transportation on the roads: the chasqui (runners) for relaying information (through the quipus) and lightweight valuables throughout the empire, and llamas caravans for transporting goods.\n[…]\nThe Qhapaq Ñan thus became a permanent symbol of the ideological presence of the Inca dominion in the newly conquered place. The road system facilitated the movement of imperial troops and preparations for new conquests as well as the quelling of uprisings and rebellions. However it was also allowed for sharing with the newly incorporated populations the surplus goods that the Inca produced and stored annually for the purpose of redistribution.\n[…]\nGarcilaso de la Vega underlines the presence of infrastructure on the Inca road system where all across the Empire lodging posts for state officials and chasqui messengers were ubiquitous, well-spaced and well provisioned. Food, clothes, and weapons were also stored and kept ready for the Inca army marching through the territory.\n[…]\nAt the roadside the chasquiwasis, or relay stations for the Inca messenger chasqui, were frequent. In these places the chasquis waited for the messages they had to take to other locations. The fast flow of information was important for an Empire that was in constant expansion. The chasquiwasis were normally quite small and there is little archaeological evidence and research on them."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chasqui",
        "situacao": "ok",
        "texto": "No Império Inca, os chasquis eram ágeis e habilidosos corredores que se revezavam, de um posto ao outro, na missão de entregar as mensagens oficiais de governo ou objetos. Com o crescimento de seu território, os Incas haviam construído estradas visando a uma maior integração entre as regiões do Império, e os chasquis formavam um eficiente sistema de correio na época.\n[…]\nO sistema de chasquis era parte fundamental da estrutura administrativa e logística do Tahuantinsuyu. Além de mensageiros, atuavam como agentes de integração territorial, permitindo o controle centralizado do Sapa Inca sobre regiões distantes. Segundo Terence D'Altroy, a rede de chasquis e tambos era essencial para a redistribuição de bens, a movilitação de tropas e a coleta de informações, funcionando como \"o sistema nervoso do império\".\n[…]\nAs principais descrições dos chasquis vêm de cronistas espanhóis como Pedro Cieza de León e Inca Garcilaso de la Vega. Cieza de León, em sua Crónica del Perú (1553), relata que os mensageiros podiam percorrer \"duzentas léguas em cinco dias\" e eram mantidos pelo Estado. Garcilaso, por sua vez, enfatiza a eficiência e disciplina dos chasquis nos Comentarios Reales de los Incas (1609).\n[…]\nA figura do chasqui tem sido revisitada em movimentos de valorização cultural andina. Héctor Bruit observa que muitas práticas indígenas foram \"invisibilizadas\" pela historiografia colonial, mas persistiram na memória coletiva. No Peru e na Bolívia, corridas de revezamento inspiradas nos chasquis são realizadas como forma de reafirmação identitária, e o turismo comunitário nos caminhos do Qhapaq Ñan frequentemente incorpora narrativas sobre os mensageiros incas.\n[…]\nBoudin, Louis. La Vida Cotidiana En El Tiempo de Los Incas. Buenos Aires, Ed. Hachette, 1955.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Tzolkin",
      "descricao": "Calendário sagrado maia, usado em rituais e adivinhação, que combinava vinte nomes de dias com treze números."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O tzolkin, calendário sagrado dos maias usado em rituais e adivinhação, tinha quantos dias?",
    "resposta": "260",
    "distratores": [
      "360",
      "365",
      "400"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_calendar",
        "situacao": "ok",
        "texto": "The Maya calendar is a system of calendars used in pre-Columbian Mesoamerica and in many modern communities in the Guatemalan highlands, Veracruz, Oaxaca and Chiapas, Mexico.\n[…]\nThe Maya calendar consists of several  cycles or counts of different lengths. The 260-day count is known to scholars as the Tzolkin, or Tzolkʼin. The Tzolkin was combined with a 365-day vague solar year known as the Haabʼ to form a synchronized cycle lasting for 52 Haabʼ called the Calendar Round. The Calendar Round is still in use by many groups in the Guatemalan highlands.\n[…]\nThe tzolkʼin (in modern Maya orthography; also commonly written tzolkin) is the name commonly employed by Mayanist researchers for the Maya Sacred Round or 260-day calendar. The word tzolkʼin is a neologism coined in Yucatec Maya, to mean \"count of days\" (Coe 1992). The various names of this calendar as used by precolumbian Maya people are still debated by scholars. The Aztec calendar equivalent was called Tōnalpōhualli, in the Nahuatl language.\n[…]\nThe tzolkʼin calendar combines twenty day names with the thirteen day numbers to produce 260 unique days. It is used to determine the time of religious and ceremonial events and for divination. Each successive day is numbered from 1 up to 13 and then starting again at 1. Separately from this, every day is given a name in sequence from a list of 20 day names:\n[…]\nArithmetically, the duration of the Calendar Round is the least common multiple of 260 and 365; 18,980 is 73 × 260 Tzolkʼin days and 52 × 365 Haabʼ days.\n[…]\nAztec calendar\n[…]\ndate converter at FAMSI This converter uses the Julian/Gregorian calendar and includes the 819 day cycle and lunar age.\n[…]\nInteractive Maya Calendars"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_maia",
        "situacao": "ok",
        "texto": "O calendário maia é um sistema de calendários e almanaques distintos, usados pela civilização maia da Mesoamérica pré-colombiana, e por algumas comunidades maias modernas dos planaltos da Guatemala.\n[…]\nO mais importante destes calendários é aquele com período de 260 dias. Este calendário de 260 dias era prevalente em todas as sociedades mesoamericanas, e é de grande antiguidade (quase certamente o mais velho dos calendários). Ainda está em uso em algumas regiões de Oaxaca, e pelas comunidades maias dos planaltos da Guatemala. A versão maia é conhecida pelos estudiosos como Tzolkʼin na ortografia revisada da Academia de Lenguas Mayas de Guatemala.\n[…]\nO tzolkʼin é o nome comumente empregado pelos estudiosos da civilização maia para o Ciclo Sagrado Maia ou calendário de 260 dias. A palavra tzolkʼin é um neologismo cunhado na língua maia iucateque, para significar \"contagem de dias\". Os vários nomes deste calendário usados pelos povos maias pré-colombianos ainda são debatidos pelos estudiosos. O calendário asteca equivalente foi chamado tonalpohualli, na língua náuatle.\n[…]\nA origem exata do tzolkʼin não é conhecida, mas existem várias teorias. Uma teoria é que o calendário vem de operações matemáticas baseadas nos números 13 e 20, que eram números importantes para os maias. Os dois números multiplicados um pelo outro dão 260. Outra teoria é que o período de 260 dias vem da duração da gestação humana.\n[…]\nUma quarta teoria é a de que o calendário é baseado nas colheitas. Do plantio à colheita há aproximadamente 260 dias.\n[…]\nAstrologia maia\n[…]\n«Calendário Maia - textos e conversores de datas para leigos e estudiosos» (em português e inglês)\n[…]\n«2012 - Mais um fim - Calendário Maia e o apocalipse (áudio)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Haab",
      "descricao": "Calendário solar maia de 365 dias, com dezoito meses de vinte dias e um período final de dias considerados de azar."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O ano solar dos maias tinha dezoito meses de vinte dias. Quantos dias, tidos como de azar, eram somados no fim para completar o ano?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maya_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maya_calendar",
        "situacao": "ok",
        "texto": "The Maya calendar is a system of calendars used in pre-Columbian Mesoamerica and in many modern communities in the Guatemalan highlands, Veracruz, Oaxaca and Chiapas, Mexico.\n[…]\nThe Maya calendar consists of several  cycles or counts of different lengths. The 260-day count is known to scholars as the Tzolkin, or Tzolkʼin. The Tzolkin was combined with a 365-day vague solar year known as the Haabʼ to form a synchronized cycle lasting for 52 Haabʼ called the Calendar Round. The Calendar Round is still in use by many groups in the Guatemalan highlands.\n[…]\nA Calendar Round date is a date that gives both the Tzolkʼin and Haabʼ. This date will repeat after 52 Haabʼ years or 18,980 days, a Calendar Round. For example, the current creation started on 4 Ahau 8 Kumkʼu. When this date recurs it is known as a Calendar Round completion.\n[…]\nSince Calendar Round dates repeat every 18,980 days, approximately 52 solar years, the cycle repeats roughly once each lifetime, so a more refined method of dating was needed if history was to be recorded accurately. To specify dates over periods longer than 52 years, Mesoamericans used the Long Count calendar.\n[…]\nMisinterpretation of the Mesoamerican Long Count calendar was the basis for a popular belief that a cataclysm would take place on December 21, 2012. December 21, 2012 was simply the day that the calendar went to the next bʼakʼtun, at Long Count 13.0.0.0.0. The date of the start of the next b'ak'tun (Long Count 14.0.0.0.0) is March 26, 2407. The date of the start of the next piktun (a complete series of 20 bʼakʼtuns), at Long Count 1.0.0.0.0.0, is October 13, 4772.\n[…]\nAztec calendar\n[…]\nInteractive Maya Calendars"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calend%C3%A1rio_maia",
        "situacao": "ok",
        "texto": "O calendário maia é um sistema de calendários e almanaques distintos, usados pela civilização maia da Mesoamérica pré-colombiana, e por algumas comunidades maias modernas dos planaltos da Guatemala.\n[…]\nO Haabʼ  era o calendário solar maia composto de dezoito meses de vinte dias cada mais um período de cinco dias (\"dias sem nome\") no fim do ano conhecidos como Wayeb' (ou Uayeb na ortografia do século XVI). Bricker (1982) estimou que o Haabʼ foi usado pela primeira vez cerca de 550 a.C. com o ponto de início no solstício de inverno.\n[…]\nOs cinco dias sem nome no fim do calendário, chamados Wayeb', eram dias que se acreditavam perigosos. Foster (2002) escreve que \"durante o Wayeb, os portais entre o reino mortal e o submundo se dissolviam. Nenhum limite impedia que as deidades mal-intencionadas causassem desastres\". Para afastar os maus espíritos, os maias tinham costumes e rituais que eram praticadas durante o Wayeb. Por exemplo, as pessoas evitavam sair de casas e lavar ou pentear o cabelo.\n[…]\nEstes dois calendários eram baseados em 260 e 365 dias respectivamente, o ciclo completo se repete exatamente a cada 52 anos Haabʼ. Este período era conhecido como um Ciclo de Calendário. O fim do Ciclo de Calendário era um período de tensão e má sorte entre os maias, eles esperavam para ver se os deuses concederiam outro ciclo de 52 anos.\n[…]\nComo as datas da contagem longa não são ambíguas, esta estava particularmente bem adaptada para o uso em monumentos. As inscrições monumentais não só incluíam os cinco dígitos da contagem longa, mas também incluíam os dois caracteres tzolkʼin seguidos pelos dois caracteres Haabʼ.\n[…]\nAstrologia maia\n[…]\n«2012 - Mais um fim - Calendário Maia e o apocalipse (áudio)»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Grande Pirâmide de Cholula",
      "descricao": "Enorme pirâmide pré-colombiana no estado mexicano de Puebla, hoje coberta de terra e com uma igreja no topo."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Segundo o Guinness, qual é a maior pirâmide do mundo em volume, embora hoje pareça um morro coberto de mato?",
    "resposta": "Grande Pirâmide de Cholula",
    "distratores": [
      "Grande Pirâmide de Gizé",
      "Pirâmide do Sol",
      "Pirâmide de Kukulcán"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Cholula"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Cholula",
        "situacao": "ok",
        "texto": "The Great Pyramid of Cholula, also known as Tlachihualtepetl (Nahuatl for \"constructed mountain\"), is a complex located in Cholula, Puebla, Mexico. It is the largest archaeological site of a pyramid (temple) in the world, as well as the largest pyramid by volume known to exist in the world today.\n[…]\nThese pushed the former dominant ethnicity of the Olmeca-Xicallanca, to the south of the city. These people kept the pyramid as their primary religious center, but the newly dominant Toltec-Chichimecas founded a new temple to Quetzalcoatl where the San Gabriel monastery is now. The Toltec-Chichimec people who settled in the area around the twelfth century AD named Cholula as Tlachihualtepetl, meaning \"artificial hill\".\n[…]\nThe name Cholula has its origin in the ancient Nahuatl word Cholollan, which means \"place of refuge\".\n[…]\nAccording to the Guinness Book of Records, it is, in fact, the largest pyramid as well as the largest monument ever constructed anywhere in the world, with a total volume estimated at over 4.45 million cubic metres, larger than that of the taller Great Pyramid of Giza in Egypt, which is about 2.5 million cubic metres. The ceramics of Cholula were closely linked to those of Teotihuacan, and both sites appeared to decline simultaneously.\n[…]\nThe pyramid is the main tourist attraction in Cholula, receiving 496,518 visitors in 2017. Images of this church on top of the pyramid with Popocatepetl in the background is frequently used in Mexico's promotion of tourism. It is one of the better known destinations in central Mexico for foreign travelers. The attraction consists of three parts: the tunnels inside the pyramid, the complex on the south side and the site museum.\n[…]\nCholula Mesoamerican site\n[…]\nMedia related to Gran Pirámide de Cholula at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Tepanapa",
        "situacao": "ok",
        "texto": "A Pirâmide de Tepanapa, também conhecida como a Grande Pirâmide de Cholula ou Tlachihualtepetl (náuatle para \"montanha feita à mão\"), é um enorme complexo localizado em Cholula, Puebla, México. É o maior sítio arqueológico de uma pirâmide (templo) no Novo Mundo, bem como a maior estrutura piramidal já registrada.\n[…]\nA pirâmide fica 55 metros acima da planície circundante e, em sua forma final, mede 450 por 450 metros. A pirâmide é um templo que tradicionalmente é visto como dedicado ao deus Quetzalcoatl. O estilo arquitetônico do edifício estava intimamente ligado ao de Teotihuacan, no vale do México, embora a influência da Costa do Golfo também seja evidente, especialmente de El Tajín.\n[…]\nA pirâmide está localizada no município de San Andrés Cholula. A cidade é dividida em dois municípios, chamados San Andrés e San Pedro. Esta divisão se origina na conquista da cidade por toltecas e chichimecas no século XII. Eles expulsaram a etnia dominante anterior dos olmecas. Esses povos mantinham a pirâmide como seu principal centro religioso, mas os recém-dominantes toltecas fundaram um novo templo para Quetzalcoatl, onde fica o mosteiro de San Gabriel.<\n[…]\nO nome cholula tem sua origem na antiga palavra náuatle cholollan, que significa \"local de refúgio\". A Grande Pirâmide era um importante centro religioso e mítico nos tempos pré-hispânicos. Durante um período de mil anos antes da conquista espanhola, fases consecutivas de construção gradualmente ergueram a maior parte da pirâmide até se tornar a maior da Mesoamérica em volume.\n[…]\nPirâmide do Sol\n[…]\nMedia relacionados com Pirâmide de Tepanapa no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Grande Pirâmide de Cholula",
      "descricao": "Enorme pirâmide pré-colombiana no estado mexicano de Puebla, hoje coberta de terra e com uma igreja no topo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No alto da Grande Pirâmide de Cholula, no México, os espanhóis construíram algo que ainda hoje domina a paisagem. O quê?",
    "resposta": "Uma igreja",
    "fonte": [
      "https://en.wikipedia.org/wiki/Great_Pyramid_of_Cholula"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Cholula",
        "situacao": "ok",
        "texto": "The Great Pyramid of Cholula, also known as Tlachihualtepetl (Nahuatl for \"constructed mountain\"), is a complex located in Cholula, Puebla, Mexico. It is the largest archaeological site of a pyramid (temple) in the world, as well as the largest pyramid by volume known to exist in the world today.\n[…]\nThese pushed the former dominant ethnicity of the Olmeca-Xicallanca, to the south of the city. These people kept the pyramid as their primary religious center, but the newly dominant Toltec-Chichimecas founded a new temple to Quetzalcoatl where the San Gabriel monastery is now. The Toltec-Chichimec people who settled in the area around the twelfth century AD named Cholula as Tlachihualtepetl, meaning \"artificial hill\".\n[…]\nFour altars were excavated from the final construction phase of the Courtyard of Altars. Three of them were decorated with low relief sculpture, which has allowed for the recovery of some of the fragments of Cholula's history. The centre section of each altar was left blank but may originally have been painted with religious designs.\n[…]\nThe pyramid is the main tourist attraction in Cholula, receiving 496,518 visitors in 2017. Images of this church on top of the pyramid with Popocatepetl in the background is frequently used in Mexico's promotion of tourism. It is one of the better known destinations in central Mexico for foreign travelers. The attraction consists of three parts: the tunnels inside the pyramid, the complex on the south side and the site museum.\n[…]\nSome of the land around the pyramid has been bought by authorities and made into soccer fields, and sown with flowers to create a buffer between the construction of homes and the pyramid.\n[…]\nCholula Mesoamerican site\n[…]\nMedia related to Gran Pirámide de Cholula at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pir%C3%A2mide_de_Tepanapa",
        "situacao": "ok",
        "texto": "A Pirâmide de Tepanapa, também conhecida como a Grande Pirâmide de Cholula ou Tlachihualtepetl (náuatle para \"montanha feita à mão\"), é um enorme complexo localizado em Cholula, Puebla, México. É o maior sítio arqueológico de uma pirâmide (templo) no Novo Mundo, bem como a maior estrutura piramidal já registrada.\n[…]\nA pirâmide fica 55 metros acima da planície circundante e, em sua forma final, mede 450 por 450 metros. A pirâmide é um templo que tradicionalmente é visto como dedicado ao deus Quetzalcoatl. O estilo arquitetônico do edifício estava intimamente ligado ao de Teotihuacan, no vale do México, embora a influência da Costa do Golfo também seja evidente, especialmente de El Tajín.\n[…]\nA pirâmide está localizada no município de San Andrés Cholula. A cidade é dividida em dois municípios, chamados San Andrés e San Pedro. Esta divisão se origina na conquista da cidade por toltecas e chichimecas no século XII. Eles expulsaram a etnia dominante anterior dos olmecas. Esses povos mantinham a pirâmide como seu principal centro religioso, mas os recém-dominantes toltecas fundaram um novo templo para Quetzalcoatl, onde fica o mosteiro de San Gabriel.<\n[…]\nO nome cholula tem sua origem na antiga palavra náuatle cholollan, que significa \"local de refúgio\". A Grande Pirâmide era um importante centro religioso e mítico nos tempos pré-hispânicos. Durante um período de mil anos antes da conquista espanhola, fases consecutivas de construção gradualmente ergueram a maior parte da pirâmide até se tornar a maior da Mesoamérica em volume.\n[…]\nPirâmide do Sol\n[…]\nMedia relacionados com Pirâmide de Tepanapa no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Jogo de bola mesoamericano",
      "descricao": "Esporte ritual praticado por maias, astecas e outros povos da Mesoamérica, com uma pesada bola de borracha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No jogo de bola de maias e astecas, a pesada bola de borracha era rebatida principalmente com que parte do corpo?",
    "resposta": "Quadril",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mesoamerican_ballgame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mesoamerican_ballgame",
        "situacao": "ok",
        "texto": "The Mesoamerican ballgame (Classical Nahuatl: ōllamalīztli, Nahuatl pronunciation: [oːlːamaˈlist͡ɬi], Epigraphic Mayan: pitz; Spanish: Juego de pelota mesoamericano), also called pok-ta-pok, was a sport with ritual associations played since at least 1650 BCE (the middle Mesoamerican Preclassic period of the pre-Columbian era) by the people of Ancient Mesoamerica.\n[…]\nIn Classical Nahuatl, the language of the Aztec Empire, it was called ōllamalīztli ([oːlːamaˈlist͡ɬi]) or ōllama, as well as tlachtli ([ˈtɬat͡ʃt͡ɬi]). In Classical Maya, it was known as pitz. In modern Spanish, it is called juego de pelota maya ('Maya ballgame'), juego de pelota mesoamericano ('Mesoamerican ballgame'), or simply pelota maya ('Maya ball').\n[…]\nThe Aztec version of the ballgame is called ōllamalīztli (sometimes spelled ullamaliztli) which is derived from the word ōlli \"rubber\" and the verb ōllama \"to play ball\". The ball itself was called ōllamaloni and the ballcourt was called a tlachtli.\n[…]\nQuirarte, Jacinto (1977). \"The Ballcourt in Mesoamerica: Its Architectural Development\". In Alan Cordy-Collins; Jean Stern (eds.). Pre-Columbian Art History. Palo Alto, California: Peek Publications. pp. 191–212. ISBN 978-0-917962-41-7.\n[…]\nUriarte, María Teresa, ed. (1992). El juego de pelota en Mesoamérica: raíces y supervivencia (in Spanish). México D.F.: SigloXXI Editores and Casa de Cultura, Gobierno del Estado de Sinaloa. ISBN 978-968-23-1837-5.\n[…]\nWilkerson, S. Jeffrey K. (1991). \"Then They Were Sacrificed: The Ritual Ballgame of Northeastern Mesoamerica Through Time and Space\". In Vernon Scarborough; David R. Wilcox (eds.). The Mesoamerican Ballgame. Tucson: University of Arizona Press. ISBN 978-0-8165-1180-8. OCLC 22765562.\n[…]\nMedia related to Mesoamerican ballgame at Wikimedia Commons\n[…]\nThe First Basketball: The Mesoamerican ballgame NBA Hoops Online"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_de_bola_mesoamericano",
        "situacao": "ok",
        "texto": "O jogo de bola mesoamericano era um desporto com associações rituais jogado ao longo de mais de 3000 anos pelos povos da Mesoamérica em tempos pré-colombianos. Uma versão moderna do jogo chamada ulama continua a ser jogada em alguns locais pelos habitantes ameríndios. Os campos de jogo de bola pré-colombianos têm sido encontrados desde o Arizona até à Nicarágua e também em várias ilhas do Caribe c\n[…]\nSinaloa - ollama\n[…]\nNão existem testemunhas do jogo de bola praticado pelos maias do período clássico, mas talvez o jogo praticado pelos astecas e testemunhado pelos espanhóis no século XVI possa ser comparável.\n[…]\nOs campos de jogo tornaram-se para sempre ritualmente ligados com a morte. O campo de jogo tornou-se um local de transição, um estádio entre a vida e a morte. Ao longo da linha central do campo, eram colocadas gravuras de cenas míticas do jogo de bola, usualmente limitadas por um quadrifólio, que marcava uma entrada de um portal de acesso a outro mundo.\n[…]\nA versão asteca do jogo de bola é chamada ullamaliztli. As cidades astecas, como outras cidades mesoamericanas, tinham normalmente vários campos de jogo de bola chamados tlachtli. Na capital asteca, Tenochtitlan, o principal campo de jogo de bola era chamado teotlachco (\"no campo de jogo de bola sagrado\") - aqui eram efetuados importantes rituais nos festivais do mês Panquetzaliztli, incluindo sacrifícios humanos de quatro cativos em honra de Huitzilopochtli e do seu arauto Paynal.\n[…]\nA palavra nauatle para o jogo era ōllamaliztli (frequentemente ullamaliztl), derivada da palavra ōlli (borracha) e do verbo ōllama (jogar à bola) e a bola propriamente dita era chamada ōllamaloni. Uma vez que a árvore da borracha não existia nas terras altas do império asteca, os astecas obtinham bolas e borracha como parte dos tributos das regiões das terras baixas onde era cultivada - por exemplo em Veracruz.\n[…]\nBatey (jogo)",
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
