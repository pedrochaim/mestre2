Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Evolução Humana** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Gigantopithecus",
      "descricao": "Gênero extinto de grande símio asiático, aparentado aos orangotangos, que viveu no sul da China até algumas centenas de milhares de anos atrás."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes primatas, vivos ou extintos, qual foi o maior que se conhece?",
    "resposta": "Gigantopithecus",
    "distratores": [
      "Gorila-oriental",
      "Orangotango",
      "Paranthropus boisei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gigantopithecus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gigantopithecus",
        "situacao": "ok",
        "texto": "Gigantopithecus ( jy-gan-toh-pih-THEE-kəs, -⁠PITH-ih-kəs, jih-) is an extinct genus of great ape that lived in central to southern China from two million to approximately 215,000–295,000 years ago during the Early to Middle Pleistocene, represented by one species, Gigantopithecus blacki. The first remains of Gigantopithecus, two third-molar teeth, were identified in a drugstore by anthropologist R\n[…]\nIn 1969, an 8.6 million year old mandible from the Sivalik Hills in northern India was classified as \"G. bilaspurensis\" by palaeontologists Elwyn L. Simons and Shiv Raj Kumar Chopra, who believed it was the ancestor of G. blacki. This bore resemblance to a molar discovered in 1915 in the Pakistani Pothohar Plateau then classified as \"Dryopithecus giganteus\". Von Koenigswald reclassified \"D. giganteus\" in 1950 into its own genus, Indopithecus, but this was changed again in 1979 to \"G.\n[…]\ngiganteus\" by American anthropologists Frederick Szalay and Eric Delson until Indopithecus was resurrected in 2003 by Australian anthropologist David W. Cameron. \"G. bilaspurensis\" is now considered a synonym of Indopithecus giganteus, leaving Gigantopithecus monotypic (with only one species), G. blacki.\n[…]\nTotal size estimates are highly speculative because only tooth and jaw elements are known. Molar size and total body weight do not always correlate, such as in the case of postcanine megadontia hominins (small-bodied primates exhibiting massive molars and thick enamel). Still, Gigantopithecus is normally reconstructed as the biggest primate ever recorded.\n[…]\nIn 1946, Weidenreich hypothesised that Gigantopithecus was twice the size of male gorillas.\n[…]\nAmong the binomial names he came up with for bigfoot included \"Gigantopithecus canadensis\". Scientists and amateur monster hunters both dismissed Krantz's arguments, saying he readily accepted clearly false evidence."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gigantopithecus",
        "situacao": "ok",
        "texto": "Gigantopithecus (do grego gigas = gigante \"γίγας\", e pithecus = macaco \"πίθηκος\") é um gênero extinto de primata, que viveu no Pleistoceno – aproximadamente entre 5 milhões e 100 mil anos atrás – na China, na Índia e no Vietnã, habitando região e época similares às dos primeiros hominídeos, como, por exemplo, o Homo erectus. Os fósseis encontrados sugerem que o Gigantopithecus foi a maior espécie \n[…]\nA razão pela qual o Gigantopithecus foi extinto ainda é controversa. Alguns pesquisadores acreditam que sua extinção se deve às mudanças climáticas ocorridas em seu habitat; outros apontam, entre outras razões, a competição de espécies mais adaptadas ao mesmo ambiente ocupado pelo Gigantopithecus – florestas. À medida em que a Idade do Gelo avançava, as florestas que o primata habitava encolhiam, prejudicando sua alimentação. Já no Pleistoceno, não havia alimentos suficientes para ele.\n[…]\nPesquisas paleoantropológicas realizadas nos diversos dentes encontrados em um sítio na caverna de Liuzhou, na China, e em alguns encontrados em sítios no Vietnã, sugerem que o Gigantopithecus habitou quase toda região leste da Ásia. Uma espécie diferente, o Gigantopithecus giganteus, também foi encontrada ao norte da índia.\n[…]\nCom base nos dentes fósseis – inicialmente molares de aproximadamente 2,5 centímetros (recuperados em lojas de medicina chinesa tradicional), sabe-se que o Gigantopithecus tinha mais ou menos 3 metros de altura e pesava algo entre 300 e 500 kg – de duas a três vezes mais que os atuais gorilas.\n[…]\nOs primeiros vestígios dos Gigantopithecus, descritos por um antropólogo foram encontrados em 1935 por Ralph von Koenigswald em uma botica. Dentes e ossos fossilizados são frequentemente triturados até virar pó e utilizados em alguns ramos da medicina tradicional chinesa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gigantopithecus",
      "descricao": "Gênero extinto de grande símio asiático, aparentado aos orangotangos, que viveu no sul da China até algumas centenas de milhares de anos atrás."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os primeiros fósseis do Gigantopithecus apareceram em farmácias chinesas, vendidos como dentes de dragão. Ainda hoje, ele é conhecido só por dentes e por que outros ossos?",
    "resposta": "Mandíbulas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gigantopithecus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gigantopithecus",
        "situacao": "ok",
        "texto": "Gigantopithecus ( jy-gan-toh-pih-THEE-kəs, -⁠PITH-ih-kəs, jih-) is an extinct genus of great ape that lived in central to southern China from two million to approximately 215,000–295,000 years ago during the Early to Middle Pleistocene, represented by one species, Gigantopithecus blacki. The first remains of Gigantopithecus, two third-molar teeth, were identified in a drugstore by anthropologist R\n[…]\nIn 2016, two Gigantopithecus mandibular fragments each preserving the last two molars were reported from Semono in Central Java, Indonesia. They were collected by a local named Dakri in 2014 who found them at the surface within 4 km2 (1.5 sq mi) of the Semono site; they may have been imported from China and left there since Chinese \"dragon bones\" were commonly sold in Javanese drugstores.\n[…]\nIn 1969, an 8.6 million year old mandible from the Sivalik Hills in northern India was classified as \"G. bilaspurensis\" by palaeontologists Elwyn L. Simons and Shiv Raj Kumar Chopra, who believed it was the ancestor of G. blacki. This bore resemblance to a molar discovered in 1915 in the Pakistani Pothohar Plateau then classified as \"Dryopithecus giganteus\". Von Koenigswald reclassified \"D. giganteus\" in 1950 into its own genus, Indopithecus, but this was changed again in 1979 to \"G.\n[…]\nGigantopithecus is considered to have been a herbivore. Carbon isotope analysis suggests consumption of C3 plants, such as fruits, leaves, and other forest plants. The robust mandible of Gigantopithecus indicates it was capable of resisting high strains while chewing through tough or hard foods. However, the same mandibular anatomy is typically seen in modern apes which primarily eat soft leaves (folivores) or seeds (granivores).\n[…]\nAdditionally, the extremely high δ44/42Ca values of G. blacki are indicative of the species likely making frequent use of mineral licks derived from rocks and soils."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gigantopithecus",
        "situacao": "ok",
        "texto": "Gigantopithecus (do grego gigas = gigante \"γίγας\", e pithecus = macaco \"πίθηκος\") é um gênero extinto de primata, que viveu no Pleistoceno – aproximadamente entre 5 milhões e 100 mil anos atrás – na China, na Índia e no Vietnã, habitando região e época similares às dos primeiros hominídeos, como, por exemplo, o Homo erectus. Os fósseis encontrados sugerem que o Gigantopithecus foi a maior espécie \n[…]\nA razão pela qual o Gigantopithecus foi extinto ainda é controversa. Alguns pesquisadores acreditam que sua extinção se deve às mudanças climáticas ocorridas em seu habitat; outros apontam, entre outras razões, a competição de espécies mais adaptadas ao mesmo ambiente ocupado pelo Gigantopithecus – florestas. À medida em que a Idade do Gelo avançava, as florestas que o primata habitava encolhiam, prejudicando sua alimentação. Já no Pleistoceno, não havia alimentos suficientes para ele.\n[…]\nPesquisas paleoantropológicas realizadas nos diversos dentes encontrados em um sítio na caverna de Liuzhou, na China, e em alguns encontrados em sítios no Vietnã, sugerem que o Gigantopithecus habitou quase toda região leste da Ásia. Uma espécie diferente, o Gigantopithecus giganteus, também foi encontrada ao norte da índia.\n[…]\nCom base nos dentes fósseis – inicialmente molares de aproximadamente 2,5 centímetros (recuperados em lojas de medicina chinesa tradicional), sabe-se que o Gigantopithecus tinha mais ou menos 3 metros de altura e pesava algo entre 300 e 500 kg – de duas a três vezes mais que os atuais gorilas.\n[…]\nOs primeiros vestígios dos Gigantopithecus, descritos por um antropólogo foram encontrados em 1935 por Ralph von Koenigswald em uma botica. Dentes e ossos fossilizados são frequentemente triturados até virar pó e utilizados em alguns ramos da medicina tradicional chinesa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Australopithecus afarensis",
      "descricao": "Espécie de hominídeo extinto da África Oriental, que viveu há cerca de 3,9 a 2,9 milhões de anos, à qual pertence o fóssil Lucy."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "O cérebro do Australopithecus afarensis, a espécie de Lucy, tinha tamanho parecido com o de qual destes?",
    "resposta": "Chimpanzé",
    "distratores": [
      "Homo erectus",
      "Neandertal",
      "Ser humano moderno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Australopithecus_afarensis",
      "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australopithecus_afarensis",
        "situacao": "ok",
        "texto": "Australopithecus afarensis is an extinct species of australopithecine which lived from about 3.9–2.9 million years ago (mya) in the Pliocene of East Africa. The first fossils were discovered in the 1930s, but major fossil finds would not take place until the 1970s.\n[…]\nThe brain volume of Lucy was estimated to have been 365–417 cc, specimen AL 822-1 about 374–392 cc, AL 333-45 about 486–492 cc, and AL 444-2 about 519–526 cc. This would make for an average of about 445 cc. The brain volumes of the infant (about 2.5 years of age) specimens DIK-1-1 and AL 333-105 are 273–277 and 310–315 cc, respectively. Using these measurements, the brain growth rate of A. afarensis was closer to the growth rate of modern humans than to the faster rate in chimpanzees.\n[…]\nafarensis had much lower levels of dimorphism, and so had a multi-male kin-based society like chimpanzees. Low dimorphism could also be interpreted as having had a monogamous society with strong male–male competition. Contrarily, the canine teeth are much smaller in A. afarensis than in non-human primates, which should indicate lower aggression because canine size is generally positively correlated with male–male aggression.\n[…]\nafarensis, while it was an unlikely prey item for the species Crocuta venustula.\n[…]\nAustralopithecines and early Homo likely preferred cooler conditions than later Homo, as there are no australopithecine sites that were below 1,000 m (3,300 ft) in elevation at the time of deposition. This would mean that, like chimpanzees, they often inhabited areas with an average diurnal temperature of 25 °C (77 °F), dropping to 10 or 5 °C (50 or 41 °F) at night. At Hadar, the average temperature from 3.4 to 2.95 million years ago was about 20.2 °C (68.4 °F)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)",
        "situacao": "ok",
        "texto": "AL 288-1, commonly known as Lucy or Dinkʼinesh (Amharic: ድንቅ ነሽ, romanized: dənqə näš, lit. 'you are marvellous'), is a collection of several hundred pieces of fossilized bone comprising 40% of the skeleton of a female of the hominin species Australopithecus afarensis. It was discovered in 1974 in Ethiopia, at Hadar, a site in the Awash Valley of the Afar Triangle by Donald Johanson, a paleoanthro\n[…]\nLucy was 1.1 m (3 ft 7 in) tall, weighed 29 kg (64 lb), and (after reconstruction) looked somewhat like a chimpanzee. She had a small brain like a chimpanzee, but the pelvis and leg bones were almost identical in function to those of modern humans, showing with certainty that Lucy's species were hominins that had stood upright and erect in their walking gait.\n[…]\nThe length ratio of her humerus (arm) to femur (thigh) is 84.6%, which compares to 71.8% for modern humans, and 97.8% for common chimpanzees, indicating that either the arms of A. afarensis were beginning to shorten, the legs were beginning to lengthen, or both were occurring simultaneously. Lucy also had a lordose curve, or lumbar curve, another indicator of habitual bipedalism.\n[…]\nAustralopithecus afarensis seems to have had the same conical rib-cage found in today's non-human great apes (like the chimpanzee and gorilla), which allows room for a large stomach and the longer intestine needed for digesting voluminous plant matter. Fully 60% of the blood supply of non-human apes is used in the digestion process, greatly impeding the development of brain function (which is limited thereby to using about 10% of the circulation).\n[…]\nMeet Lucy: The Famous Early Human, Google Arts & Culture story, (undated).\n[…]\n\"Australopithecus afarensis, Lucy's species\", nhm.ac.uk, Natural History Museum, London. (First published 29 November, [1]).\n[…]\nAustralopithecus afarensis – Science.\n[…]\nIsraeli researchers: 'Lucy' is not direct ancestor of humans"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Australopithecus_afarensis",
        "situacao": "ok",
        "texto": "Australopithecus afarensis é uma espécie de hominídeo extinto proposta em 1978 por Tim D. White e Donald Johanson, com base no \"joelho de Johanson\" encontrado por aquele antropólogo em Hadar, na Etiópia, em 1974. Os vestígios fósseis foram datados em 3,4 milhões de anos. O nome provém da região onde foi encontrado: a Depressão de Afar.\n[…]\nUma das características marcantes de Lucy é o tamanho de seu cérebro: 450 cm cúbicos. Um pouco maior que o cérebro de um chimpanzé moderno. O nome do fóssil encontrado é uma homenagem à música \"Lucy in the Sky with Diamonds\", da banda britânica Beatles, que, segundo relatos, estaria tocando no momento das escavações e nas comemorações após a descoberta.\n[…]\nA capacidade craniana do A. afarensis varia de 380 a 530 centímetros cúbicos, cerca de 1/3 do tamanho do cérebro de um humano moderno, indicando que a espécie possuía um cérebro de tamanho similar a de um chimpanzé.\n[…]\nÉ também observada a perda total do complexo de afiação entre o canino e o pré-molar (esse mecanismo é uma característica presente em chimpanzés e em outros símios, onde os grandes caninos superiores são afiados contra os terceiros pré-molares inferiores). Sua ausência, juntamente com a presença de bipedalismo, é considerada uma característica das espécies na linhagem hominínea.\n[…]\nAlgumas das mudanças anatômicas em comparação com a espécie anterior, o A. anamensis, sugerem que houve uma mudança na dieta ao longo do tempo, em direção a alimentos mais duros ou resistentes, já que o A. afarensis possui adaptações para uma mastigação intensa.\n[…]\nAté hoje as pegadas de Laetoli são atribuídas aos A. afarensis, pois apenas essa espécie já foi encontrada nessa região com datações parecidas.\n[…]\n«Michigan State University Steven Heslip's Hominid pages Australopithecus afarensis» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Engis 2",
      "descricao": "Crânio parcial de uma criança neandertal achado em 1829 na caverna de Engis, na Bélgica, só reconhecido como neandertal no século vinte."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Considerando a data da descoberta, que fóssil de Neandertal foi encontrado antes de todos estes outros?",
    "resposta": "Criança de Engis",
    "distratores": [
      "Crânio de Gibraltar",
      "Fóssil de Feldhofer",
      "Velho de La Chapelle"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Engis_2",
      "https://en.wikipedia.org/wiki/Gibraltar_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Engis_2",
        "situacao": "ok",
        "texto": "Engis 2 refers to part of an assemblage, discovered in 1829 by Dutch/Belgian physician and naturalist Philippe-Charles Schmerling in the lower of the Schmerling Caves. The pieces that make up Engis 2 are a partially preserved calvaria (cranium) and associated fragments of an upper and a lower jaw, a maxillary bone and an upper incisor tooth of a two to three year old Neanderthal child. The Schmerl\n[…]\nThe vast majority of the anthropologists of the 19th and early 20th century considered all hominid fossils as belonging to representatives of early \"races\" of modern man. Hence it was incorrectly believed that the modern man's skull Engis 1 must be related to the child's skull Engis 2.\n[…]\nTwo radiocarbon dates are available for Engis 2. However, the earlier result of 26,820 ± 340 radiocarbon years before present (BP) was considered to be too young by the authors and likely to be a result of contamination, so has been discarded. The more accurate date is 30,460 ± 210 radiocarbon years BP, which corresponds to 34,590–36,110 years BP after calibration.\n[…]\nThe assignment of Engis 2 to Homo neanderthalensis and Engis 1 to Homo sapiens was primarily based on anatomical and chronological comparisons as Engis 2 was recovered in the context of Neanderthal Mousterian artefacts.\n[…]\nIn 1986, cut marks were found on the top of the skull of Engis 2, which were later identified as to be preparation damage \" formed during restoration of the vault, moulding striae formed when mold part lines were incised into the fossil and profiling striae formed when craniograms were made with sharp steel instrument tips.\" The findings are preserved at the Collections de Paléontologie Animale et Humaine of the University of Liège. The bone fragments called Engis 3 have gone missing.\n[…]\nNeanderthals of Gibraltar\n[…]\nMedia related to Engis 2 at Wikimedia Commons\n[…]\nEngis 2 – The Smithsonian Institution – Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Gibraltar_1",
        "situacao": "ok",
        "texto": "Gibraltar 1 is the name given to a Neanderthal skull, also known as the Gibraltar Skull, which was discovered at Forbes' Quarry in Gibraltar. The skull was presented to the Gibraltar Scientific Society by its secretary, Lieutenant Edmund Henry Réné Flint, on 3 March 1848. This discovery predates the finding of the Neanderthal type specimen.\n[…]\nThe original find was done in a time when the palaeontological dating was still in its infancy, and no stratigraphic information was supplied with the skull, making dating at best guesswork. Another specimen from a different locale on Gibraltar (Gibraltar 2) has however been dated to between 30 thousand to 50 thousand years old. The skull is that of an adult woman, also with typical Neanderthal features.\n[…]\nWhile the skull was one of the first to be found, it was also possibly from one of the last surviving Neanderthal populations.\n[…]\nUntil the late twentieth century, it was believed that the last Neanderthals disappeared about 35,000 years ago. However, studies have suggested that Neanderthals survived in southern Iberia and Gibraltar to less than 30,000 years before the present. Radiocarbon dating performed on charcoal in Gorham's Cave in Gibraltar in 2006 suggests that Neanderthals lived there 24,000 to 28,000 years ago, well after the arrival of Homo sapiens in Europe 40,000 years ago.\n[…]\nVanguard Cave and Gorham's Cave are still the sites of active archaeological excavation in 2012. These caves may have represented the refugium of Gibraltar's Neanderthals.\n[…]\nEngis 2\n[…]\nGibraltar 2\n[…]\nNeanderthal\n[…]\nNeanderthal 1\n[…]\nList of fossil sites (with link directory)\n[…]\nList of human evolution fossils (with images)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Engis_2",
        "situacao": "ok",
        "texto": "Engis 2 refere-se a parte de um conjunto, descoberto em 1829 pelo médico e naturalista holandês Philippe-Charles Schmerling na parte inferior das Cavernas de Schmerling. As peças que compõem o Engis 2 são uma calvária parcialmente preservada (crânio) e fragmentos associados de uma mandíbula superior e inferior, um osso maxilar e um dente incisivo superior de uma criança Neandertal de dois a três a\n[…]\nEm 1833, Schmerling descreveu e divulgou a descoberta, que incluía ossos de animais e ferramentas de pedra. Reconhecendo sua velhice, ele os associou ao \"tipo etíope\" do período diluvial. Embora não tenha sido reconhecida como tal até 1936, a publicação representa a primeira descrição científica de um fóssil de Neandertal.\n[…]\nDuas datas de radiocarbono estão disponíveis para Engis 2. No entanto, o resultado anterior de 26.820 ± 340 anos de radiocarbono antes do presente (BP) foi considerado muito jovem pelos autores e provavelmente um resultado de contaminação, então foi descartado. A data mais precisa é 30.460 ± 210 anos de radiocarbono AP, o que corresponde a 34.590–36.110 anos AP após a calibração.\n[…]\nA atribuição de Engis 2 ao Homo neanderthalensis e de Engis 1 ao Homo sapiens foi baseada principalmente em comparações anatômicas e cronológicas, já que Engis 2 foi recuperado no contexto de artefatos Mousterianos de Neandertal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Homo habilis",
      "descricao": "Espécie humana extinta da África Oriental, descrita em 1964 a partir de fósseis da Garganta de Olduvai."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Pela idade dos fósseis, qual destas espécies do gênero Homo é a mais antiga?",
    "resposta": "Homo habilis",
    "distratores": [
      "Homo erectus",
      "Homo heidelbergensis",
      "Homo sapiens"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_habilis",
      "https://en.wikipedia.org/wiki/Homo_erectus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_habilis",
        "situacao": "ok",
        "texto": "Homo habilis (lit. 'handy man') is an extinct species of archaic human from the Early Pleistocene of East and South Africa about 2.4 million years ago to 1.65 million years ago (mya). It is among the oldest species of archaic humans. Suggestions for pushing back the age to 2.8 Mya were made in 2015 based on the discovery of a jawbone. Upon species description in 1964, H.\n[…]\nThe tooth rows of H. habilis were V-shaped as opposed to U-shaped in later Homo, and the mouth jutted outwards (was prognathic), though the face was flat from the nose up.\n[…]\nIt is typically thought that the diets of H. habilis and other early Homo had a greater proportion of meat than Australopithecus, and that this led to brain growth.\n[…]\nhabilis could indicate early Homo were still arboreal to a degree. Also, organised hunting and gathering is thought to have emerged in H. ergaster. Nonetheless, the proposed food-gathering models to explain large brain growth necessitate increased daily travel distance. It has also been argued that H. habilis instead had long, modern humanlike legs and was fully capable of effective long distance travel, while still remaining at least partially arboreal.\n[…]\nLarge incisor size in H. habilis compared to Australopithecus predecessors implies this species relied on incisors more. The bodies of the mandibles of H. habilis and other early Homo are thicker than those of modern humans and all living apes, more comparable to Australopithecus. The mandibular body resists torsion from the bite force or chewing, meaning their jaws could produce unusually powerful stresses while eating. The greater molar cusp relief in H.\n[…]\nReconstructions of H. habilis by John Gurche\n[…]\nHomo habilis – The Smithsonian Institution's Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus ( lit. 'upright man') is an extinct species of archaic human from the Pleistocene, spanning nearly 2 million years. It is the first human species to evolve a humanlike body plan and gait, to leave Africa and colonize Asia and Europe, and to wield fire. Some populations of H. erectus were ancestors of later human species, including H. heidelbergensis—the last common ancestor of modern \n[…]\nThe faster development rate might also indicate a shorter expected lifespan compared to later Homo.\n[…]\nIt is unclear what function intense bone thickening could have served. Before more complete skeletons were discovered, Weidenreich suggested H. erectus was a gigantic species. Other explanations include a far more violent and impact-prone lifestyle than other Homo, or pathological nutrient deficiencies. The supraorbital torus thickens with age, and may be a response to bending stresses from habitual loading of the front teeth.\n[…]\nHomo naledi\n[…]\nBoaz, N. T.; Ciochon, R. (2004). Dragon Bone Hill: An Ice-Age Saga of Homo erectus. Oxford University Press. ISBN 978-0-19-803488-9.\n[…]\nAntón, S. C. (2003). \"Natural history of Homo erectus†\". American Journal of Biological Anthropology. 122 (S37): 126–170. Bibcode:2003AJPA..122S.126A. doi:10.1002/ajpa.10399. PMID 14666536.\n[…]\nAncient Homo erectus teeth from China yield protein variants seen in Denisovans-and us, Science News, 13 May 2026\n[…]\nHomo erectus Origins – Exploring the Fossil Record – Bradshaw Foundation\n[…]\nHomo erectus – The Smithsonian Institution's Human Origins Program\n[…]\nPossible co-existence with Homo Habilis – BBC News\n[…]\nThe Age of Homo erectus – Interactive Map of the Journey of Homo erectus out of Africa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_habilis",
        "situacao": "ok",
        "texto": "Homo habilis é uma espécie de hominídeo que viveu no princípio do Pleistoceno inferior (há 2,2 milhões a 780 mil anos). Os primeiros fósseis de H. habilis foram descobertos em 1964 por Louis Leakey e seus colegas, no desfiladeiro de Olduvai, Tanzânia, que faz parte do Grande Vale do Rift, na África oriental.\n[…]\nEsta espécie é, das pertencentes ao género Homo, a que menos se parece com o H. sapiens, com braços proporcionalmente muito mais longos, cavidade craniana menor e morfologia geral similar aos Australopithecus. O H. habilis recebe este nome pois acreditava-se ser o primeiro a utilizar ferramentas de pedra lascada, o que lhe valeu o nome específico: habilis, o habilidoso.\n[…]\nAtualmente a maioria dos cientistas considera que o H. habilis é um dos ancestrais directos do homem moderno, mas esta opinião não é consensual. A própria classificação desta espécie, bem como do H. rudolfensis no género Homo tem sido muito discutida até os dias atuais.\n[…]\nAlguns anos mais tarde, em 1986, um fragmento de esqueleto denominado OH 62 foi descoberto pelo antropólogo americano Tim D. White, juntamente com fragmentos de crânio de H. habilis, estabelecendo então aspectos da anatomia do esqueleto do H. habilis pela primeira vez. Porém, uma vez que estes fragmentos mostraram características mais parecidas com Australopiteco do que com os fósseis do gênero Homo, em 1999 foi sugerido que a espécie H. habilis fosse realocada para o gênero Australopithecus.\n[…]\nHá ainda outra controvérsia acerca da classificação do H. habilis, mais especificamente se ele seria ou não um ancestral do H. ergaster / H. erectus. De toda forma, tanto o H. habilis quanto o H. rudolfensis costumam ser reconhecidos pela maioria dos especialistas como membros do gênero Homo, localizados na base da árvore filogenética.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Bonobo",
      "descricao": "Grande primata africano do gênero Pan, que vive ao sul do rio Congo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Nos grupos de chimpanzés, quem domina são os machos. Já entre os bonobos, seus parentes próximos, quem costuma ter mais poder no grupo?",
    "resposta": "As fêmeas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bonobo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bonobo",
        "situacao": "ok",
        "texto": "The bonobo (; Pan paniscus), also historically called the pygmy chimpanzee, is the smallest species of great ape and one of the two making up the genus Pan (the other being the chimpanzee, Pan troglodytes). While bonobos are today recognized as a distinct species, they were initially thought to be a subspecies of Pan troglodytes, because of the physical similarities between the two species.\n[…]\nFemale bonobos have also been observed fostering infants from outside their established community. Bonobos are not known to kill each other, and are generally less violent than chimpanzees, yet aggression still manifests itself in this species. Although female bonobos dominate males and selectively mate with males who do not exhibit aggression toward them, competition between the males themselves is intense and high-ranking males secure more matings than low-ranking ones.\n[…]\nBecause of the promiscuous mating behaviour of female bonobos, a male cannot be sure which offspring are his. As a result, the entirety of parental care in bonobos is assumed by the mothers. However, bonobos are not as promiscuous as chimpanzees and slightly polygamous tendencies occur, with high-ranking males enjoying greater reproductive success than low-ranking males.\n[…]\nThe highly sexual nature of bonobo society and the fact that there is little competition over mates means that many males and females are mating with each other, in contrast to the one dominant male chimpanzee that fathers most of the offspring in a group. The strategy of bonobo females mating with many males may be a counterstrategy to infanticide because it confuses paternity.\n[…]\nThe ranges of bonobos and chimpanzees are separated by the Congo River, with bonobos living to its south and chimpanzees to the north.\n[…]\nWWF (World Wide Fund for Nature / World Wildlife Fund) – Bonobo species profile\n[…]\nSan Diego Zoo Library: Bonobo, Pan paniscus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bonobo",
        "situacao": "ok",
        "texto": "O bonobo (nome científico: Pan paniscus), também chamado chimpanzé-pigmeu e, menos frequentemente, chimpanzé-anão ou grácil, é uma das duas espécies incluídas no gênero Pan. A outra espécie do gênero é Pan troglodytes, o chimpanzé-comum. Ambas as espécies são chimpanzés, embora esse termo seja usado principalmente para a maior das duas espécies, P. troglodytes.\n[…]\nEnquanto machos em grupos de chimpanzés são extraordinariamente hostis a machos fora do grupo, esse comportamento não é verificado em bonobos machos ou fêmeas, que têm limites territoriais mais frouxos e quando encontram outros grupos tendem a estabelecer relações amistosas.\n[…]\nEm relação a estrutura social, comunidades de bonobos apresentam hierarquia social mista, com fêmeas (geralmente mais velhas) ocupando posições altas e de elevado poder social. A dominância de fêmeas sobre machos é flexível e não linear e pode mudar conforme o contexto. Fêmeas bonobos apresentam maior dominância, por exemplo, durante atividades relacionadas a alimentação e quando apresentam máximo inchaço de seus órgãos sexuais.\n[…]\nAs bonobos fêmeas são altamente gregárias e estabelecem fortes laços entre si. Durante a maior parte do ano, grupos de fêmeas forrageiam, compartilham alimento e apoiam umas às outras na defesa alimentar. Já os machos de bonobos tendem a permanecer fortemente próximos de suas mães mesmo na idade adulta, tanto física quanto socialmente, de modo que as posições alfa, de maior poder, são geralmente ocupadas por uma fêmea e seu filho adulto.\n[…]\nDiferente dos chimpanzés, os bonobos apresentam comportamento muito mais amigável e menos agressivo em diversas situações. Nunca foi observado um bonobo matando outro bonobo, por exemplo, ou atacando as fêmeas. Também não é observado conflitos entre os grupos de machos.\n[…]\nAlgo parecido é praticamente impossível em grupos maiores que 150 chimpanzés.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Povoamento da América",
      "descricao": "Chegada dos primeiros seres humanos ao continente americano, vindos da Ásia, no fim da última era glacial."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Fora a Antártida, que continente foi o último a ser ocupado pelo Homo sapiens?",
    "resposta": "América",
    "distratores": [
      "Austrália",
      "Europa",
      "Ásia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Settlement_of_the_Americas",
      "https://en.wikipedia.org/wiki/Early_human_migrations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Settlement_of_the_Americas",
        "situacao": "ok",
        "texto": "It is believed that the peopling of the Americas began when Paleolithic hunter-gatherers (Paleo-Indians) entered North America from the North Asian Mammoth steppe via the Beringia land bridge, which had formed between northeastern Siberia and western Alaska due to the lowering of sea level during the Last Glacial Maximum (26,000 to 19,000 years ago).\n[…]\nTheir genome, however, contains evidence of a bottleneck – something that can be used to test hypotheses on migrations between the two continents. Early human groups were largely nomadic, relying on following food sources for survival. Mobility was part of what made humans successful. As nomadic groups, early humans likely followed food sources from Eurasia to the Americas – part of why tracing megafaunal DNA is so helpful for gaining insight into these migratory patterns.\n[…]\nThe grey wolf originated in the Americas and migrated into Eurasia before the Last Glacial Maximum, during which it is believed that remaining populations in North America faced extinction and were isolated from the rest of the population. This, however, may not be the case. Radiocarbon dating of ancient grey wolf remains found in permafrost deposits in Alaska shows a continuous exchange of populations from 12,500 radiocarbon years BP to beyond the limits of radiocarbon dating.\n[…]\nHistorically, theories about migration into the Americas have centered on movement from Beringia across the interior of North America. The discovery of artifacts associated with Pleistocene faunal remains near Clovis, New Mexico in the early 1930s required extending the timeframe for the settlement of North America to a period when glaciers were still extensive. That led to the hypothesis of a migration route between the Laurentide and Cordilleran ice sheets to explain the early settlement.\n[…]\nList of first human settlements"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Early_human_migrations",
        "situacao": "ok",
        "texto": "The earliest migrations and expansions of archaic and modern humans across continents are believed to have begun approximately 2 million years ago with the early expansions out of Africa by Homo erectus. This initial migration was followed by other archaic humans including H. heidelbergensis, which lived around 500,000 years ago and was the likely ancestor of Denisovans and Neanderthals as well as\n[…]\nAlong the way H. sapiens interbred with Neanderthals and Denisovans, with Denisovan DNA making 0.2% of mainland Asian and Native American DNA.\n[…]\nThis is supported by a date of 50,000–60,000 years ago for the oldest evidence of settlement in Australia, around 40,000 years ago for the oldest human remains, the earliest humans artifacts which are at least 65,000 years old and the extinction of the Australian megafauna by humans between 46,000 and 15,000 years ago argued by Tim Flannery, which is similar to what happened in the Americas. The continued use of Stone Age tools in Australia has been much debated.\n[…]\nPaleo-Indians originated from Central Asia, crossing the Beringia land bridge between eastern Siberia and present-day Alaska. Humans lived throughout the Americas by the end of the last glacial period, or more specifically what is known as the late glacial maximum. Details of Paleo-Indian migration to and throughout the American continent, including the dates and the routes traveled, are subject to ongoing research and discussion.\n[…]\nThe Caribbean was one of the last places in the Americas that were settled by humans. The oldest remains are known from the Greater Antilles (Cuba and Hispaniola) dating between 4000 and 3500 BCE, and comparisons between tool-technologies suggest that these peoples moved across the Yucatán Channel from Central America. All evidence suggests that later migrants from 2000 BCE and onwards originated from South America, via the Orinoco region."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Povoamento_das_Am%C3%A9ricas",
        "situacao": "ok",
        "texto": "O povoamento das Américas diz sobre a forma como o homem chegou a esse continente, há milhares de anos. É uma questão arduamente discutida no meio científico, e várias teorias foram elaboradas para explicar a chegada do homem ao continente.\n[…]\nA teoria de que o povo Clovis foi o primeiro a alcançar o continente americano não é mais aceita, pois foram encontrados vestígios arqueológicos mais antigos que estes na década de 1970, como Monte Verde, no sul do Chile, datado de 15 mil anos.\n[…]\nPor volta de 25 mil anos atrás, os paleoíndios (grupo ancestral dos povos indígenas da América) migraram do leste da Sibéria para a região da Beríngia, uma língua de terra no atual Estreito de Bering, ali permanecendo por milênios, até o avanço do nível do mar cobrir a região. Há duas hipóteses de como os paleoíndios migraram para a América do Norte e, consequentemente, para o resto do continente. A primeira argumenta que chegaram por meio de um corredor descongelado no atual Canadá.\n[…]\nPor volta de 15 mil anos atrás, o homem cruzou o Istmo do Panamá e iniciou o povoamento da América do Sul, que se prolongaria pelos milênios seguintes.\n[…]\nAs ilhas do Caribe foram povoadas posteriormente pelos ameríndios, por volta de seis mil anos atrás, por migrações vindas da América do Sul e Central. Por volta de dois mil anos atrás, as Antilhas foram ocupadas por povos aruaques e caraíbas, vindos da América do Sul, substituindo os habitantes anteriores.\n[…]\nArqueologia da América\n[…]\n«Qual o debate sobre a origem dos humanos que chegaram à América». , texto do Nexo Jornal\n[…]\nADN de esqueleto com dez mil anos muda a história antiga do continente americano, ZAP, 1 de Agosto de 2023",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Orangotango",
      "descricao": "Grande primata de pelagem avermelhada, do gênero Pongo, nativo das florestas de Bornéu e Sumatra."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os grandes primatas vivos, qual tem o parentesco mais distante com o ser humano?",
    "resposta": "Orangotango",
    "distratores": [
      "Chimpanzé",
      "Bonobo",
      "Gorila"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Orangutan",
      "https://en.wikipedia.org/wiki/Hominidae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orangutan",
        "situacao": "ok",
        "texto": "Orangutans are great apes native to the rainforests of Indonesia and Malaysia. They are now found only in parts of Borneo and Sumatra, but during the Pleistocene they ranged throughout Southeast Asia and South China. Classified in the genus Pongo, orangutans were originally considered to be one species. In 1996, they were divided into two species: the Bornean orangutan (P. pygmaeus, with three sub\n[…]\nBattel's \"Pongo\", in turn, is from the Kongo word mpongi or other cognates from the region: Lumbu pungu, Vili mpungu, or Yombi yimpungu.\n[…]\nPrimatologist Carel P. van Schaik and biological anthropologist Cheryl D. Knott further investigated tool use in different wild orangutan populations. They compared geographic variations in tool use related to the processing of Neesia fruit. The orangutans of Suaq Balimbing were found to be avid users of insect and seed-extraction tools when compared to other wild orangutans. The scientists suggested these differences are cultural as they do not correlate with habitat.\n[…]\nThe evidence suggested the differences were cultural: first, the extent of the differences increased with distance, suggesting cultural diffusion was occurring, and second, the size of the orangutans' cultural repertoire increased according to the amount of social contact present within the group. Social contact facilitates cultural transmission.\n[…]\nDuring a field observation in 2022, a male Sumatran orangutan, known to researchers as Rakus, chewed Fibraurea tinctoria vine leaves and applied the mashed plant material to an open wound on his face. According to primatologists who had been observing Rakus at a nature preserve, \"Five days later the facial wound was closed, while within a few weeks it had healed, leaving only a small scar\".\n[…]\nInternational Primate Day"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hominidae",
        "situacao": "ok",
        "texto": "The Hominidae (; hominids ), whose members are known as the great apes, are a taxonomic family of primates that includes eight extant species in four genera: Pongo (the Bornean, Sumatran and Tapanuli orangutan); Gorilla (the eastern and western gorilla); Pan (the chimpanzee and the bonobo); and Homo, of which only modern humans (Homo sapiens) remain.\n[…]\nMost taxonomists today encourage monophyletic groups—this would require, in this case, the use of Pongidae to be restricted to just one closely related grouping. Thus, many biologists now assign Pongo (as the subfamily Ponginae) to the family Hominidae. The taxonomy shown here follows the monophyletic groupings according to the modern understanding of human and great ape relationships.\n[…]\nThe great apes are tailless primates, with the smallest living species being the bonobo at 30 to 40 kilograms (66 to 88 lb) in weight, and the largest being the eastern gorillas, with males weighing 140 to 180 kilograms (310 to 400 lb). In all great apes, the males are, on average, larger and stronger than the females, although the degree of sexual dimorphism varies greatly among species.\n[…]\nGenus Pongo\n[…]\nBornean orangutan, Pongo pygmaeus\n[…]\nNorthwest Bornean orangutan, Pongo pygmaeus pygmaeus\n[…]\nNortheast Bornean orangutan, Pongo pygmaeus morio\n[…]\nCentral Bornean orangutan, Pongo pygmaeus wurmbii\n[…]\nSumatran orangutan, Pongo abelii\n[…]\nTapanuli orangutan, Pongo tapanuliensis\n[…]\nPongo (orangutans)\n[…]\nPongo hooijeri†"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Orangotango",
        "situacao": "ok",
        "texto": "O orangotango (cujo nome vem de duas palavras da língua malaia que juntas significam \"pessoa da floresta\") é um género de exclusivamente três espécies asiáticas de hominídeos. Nativos da Indonésia e da Malásia, os orangotangos são encontrados somente nas florestas tropicais de Bornéu e da Sumatra. Classificado no género Pongo, orangotangos foram considerados uma espécie única. No entanto, desde 19\n[…]\nOs orangotangos são animais territoriais; para demarcar território o macho dá um grito estrondoso que avisa aos outros orangotangos para não entrarem em seu território. São as espécies mais solitárias dos grandes primatas, com laços sociáveis que ocorrem principalmente entre as mães e seus filhos dependentes.\n[…]\nOs filhotes ficam em média 8 anos com a mãe, até se tornarem independentes, o que faz as mães orangotangos serem as primatas que cuidam por mais tempo dos seus filhos (sem contar com o ser humano).\n[…]\nAcredita-se que o Khoratpithecus, que viveu na Tailândia há 7 a 5 milhões de anos, terá sido o parente mais próximo do orangotango. O maior primata conhecido, o Gigantopithecus, foi também membro desta subfamília e viveu no subcontinente indiano e sudeste asiático, desde há 5 milhões até há 100.000 anos.\n[…]\nOs orangotangos estão entre os primatas mais inteligentes. Alguns experimentos sugerem que eles podem passar no teste da permanência de objeto. Além disso, o Zoológico de Atlanta tem um computador touch screen, onde os seus dois orangotangos-de-sumatra jogam. O uso de ferramentas foi observado pela primatóloga Birutė Galdikas, tal como os outros Grandes primatas.\n[…]\nPor não terem sido encontradas quaisquer indicações de fluxo de genes entre as duas linhagens de orangotangos mais recentes do que há dez mil anos, considera-se que o Pongo tapanuliensis está geneticamente isolado desde então. A descoberta eleva a três o número de espécies conhecidas de orangotangos.\n[…]\nOrangotango-de-bornéu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Kebara 2",
      "descricao": "Esqueleto parcial de um Neandertal adulto, com cerca de 60 mil anos, achado em 1983 na caverna de Kebara, no monte Carmelo, em Israel."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No esqueleto de Neandertal achado na caverna de Kebara, em Israel, apareceu um pequeno osso do pescoço quase igual ao nosso, ligado à fala. Que osso é esse?",
    "resposta": "Osso hioide",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kebara_Cave",
      "https://en.wikipedia.org/wiki/Hyoid_bone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kebara_Cave",
        "situacao": "ok",
        "texto": "Kebara Cave (Hebrew: מערת כבארה, romanized: Me'arat Kebbara, Arabic: مغارة الكبارة, romanized: Mugharat al-Kabara) is a limestone cave locality in Wadi Kebara, Israel, situated at 60 to 65 m (197 to 213 ft) above sea level on the western escarpment of the Carmel Range, in the Ramat HaNadiv preserve of Zichron Yaakov.\n[…]\nThe most significant discovery made at Kebara Cave was Kebara 2 in 1982, the most complete postcranial Neanderthal skeleton found to date. Nicknamed \"Moshe\" and dating to circa 60,000 BP, the skeleton preserved a large part of one individual's torso (vertebral column, ribs and pelvis). The cranium and most of the lower limbs were missing.\n[…]\nThe Kebaran culture is named after the site.\n[…]\nArchaeology in Israel\n[…]\nSchick, T. & Stekelis, M. \"Mousterian Assemblages in Kebara Cave, Mount Carmel\", Eretz-Israel 13 (1977), pp. 97–150.\n[…]\nGoldberg, P. & Bar-Yosef, O., \"Site formation processes in Kebara and Hayonim Caves and their significance in Levantine Prehistoric caves\", in T. Akazawa, K. Aoki and O. Bar-Yosef (eds), Neandertals and Modern Humans in Western Asia, New York & London: Plenum Press, 1998, pp.?\n[…]\nAlbert, Rosa M., Steve Weiner, Ofer Bar-Yosef, and Liliane Meignen, \"Phytoliths of the Middle Palaeolithic Deposits of Kebara Cave, Mt. Carmel, Israel: Study of the Plant Materials Used for Fuel and Other Purposes\", Journal of Archaeological Science 27 (2000), pp. 931–947.\n[…]\nLev, Efraim, Kislev, Mordechai E. & Bar-Yosef, Ofer, \"Mousterian Vegetal Food in Kebara Cave, Mt Carmel\", Journal of Archaeological Science 32 (2005), pp. 475–484.\n[…]\nRamat Hanadiv Archived 2011-07-16 at the Wayback Machine - the Rothschild Memorial public gardens at Ramat HaNadiv preserve the Kebara Cave within their boundaries for visitors\n[…]\nKebara Cave Archived 2005-09-22 at the Wayback Machine at About.com"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Hyoid_bone",
        "situacao": "ok",
        "texto": "The hyoid bone ( HY-oyd), also known as the lingual bone or the tongue-bone, is a horseshoe-shaped bone situated in the anterior midline of the neck between the chin and the thyroid cartilage. At rest, it lies between the base of the mandible and the third cervical vertebra.\n[…]\nMoreover, the larynx position of Neanderthals was not a handicap to producing speech sounds.\n[…]\nThe discovery of a modern-looking hyoid bone of a Neanderthal man in the Kebara Cave in Israel led its discoverers to argue that the Neanderthals had a descended larynx, and thus human-like speech capabilities. However, other researchers have claimed that the morphology of the hyoid is not indicative of the larynx's position. Recent research has indicated that the hyoid bone may have significant involvement in the ability to swallow."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_de_Kebara",
        "situacao": "ok",
        "texto": "A caverna de Kebara é uma localidade de caverna de calcário em Wadi Kebara, situada a 60 a 65 m acima do nível do mar na escarpa ocidental da Cordilheira do Carmelo, na reserva Ramat HaNadiv de Zichron Yaakov. Contém abundantes lareiras visíveis. Minerais derivados de cinzas são um componente importante dos sedimentos Mousterianos e estão presentes em vários estados de preservação. Além disso, inf\n[…]\nA caverna Kebara é, portanto, um local ideal para estudar o potencial dos fitólitos para fornecer informações sobre o modo de uso do fogo na caverna, avaliar a entrada de outros materiais vegetais, bem como determinar os efeitos da diagênese na preservação dos fitólitos.\n[…]\nA caverna foi habitada entre 60.000 e 48.000 AP e é famosa por seus achados escavados de restos de hominídeos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Homo sapiens",
      "descricao": "Espécie humana moderna, a única do gênero Homo ainda viva."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que parte do rosto, ausente nos Neandertais e em outros humanos extintos, é uma marca exclusiva do Homo sapiens?",
    "resposta": "Queixo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chin",
        "situacao": "ok",
        "texto": "The chin is the forward pointed part of the anterior mandible (mental region) below the lower lip. A fully developed human skull has a chin of between 0.7 cm (0.28 in) and 1.1 cm (0.43 in).\n[…]\nThe presence of a well-developed chin is considered to be one of the morphological characteristics of Homo sapiens that differentiates them from other human ancestors such as the closely related Neanderthals. Early human ancestors have varied symphysial morphology, but none of them have a well-developed chin.\n[…]\nThey conclude that \"each of the proposals we have discussed falter either empirically or theoretically; some fail, to a degree, on both accounts… This should serve as motivation, not discouragement, for researchers to continue investigating this modern human peculiarity… perhaps understanding the chin will reveal some unexpected insight into what it means to be human.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Queixo",
        "situacao": "ok",
        "texto": "O queixo, ou mento, é a parte inferior e média da face, abaixo do lábio inferior. Nos vertebrados, região que corresponde à porção inferior e mediana da mandíbula.\n[…]\nA fissura no queixo é uma característica hereditária em humanos e pode ser influenciada por muitos fatores. O queixo fendido também é um exemplo clássico de penetrância variável com fatores ambientais ou um gene modificador possivelmente afetando a expressão fenotípica do genótipo real. As fissuras no queixo podem ser apresentadas em uma criança quando nenhum dos pais apresenta fissura no queixo.\n[…]\nNa literatura persa, a covinha do queixo é considerada um fator de beleza e é metaforicamente referida como \"o poço do queixo\" ou \"o poço do queixo\": um poço no qual o pobre amante cai e fica preso.\n[…]\nEm pessoas com sobrepeso, geralmente a camada de gordura subcutânea ao redor do pescoço cai e cria uma ruga, criando a aparência de um segundo queixo. Esta almofada de gordura é ocasionalmente removida cirurgicamente e os músculos correspondentes sob a mandíbula encurtados (elevação do hióide).\n[…]\nUm queixo duplo é uma perda de definição do maxilar ou tecido mole sob o queixo. Existem duas causas possíveis para o queixo duplo, que devem ser diferenciadas.\n[…]\nOutra causa pode ser uma deficiência óssea, comumente observada em pessoas com peso normal. Quando os ossos da mandíbula (e, por extensão, a maxila) não se projetam para a frente o suficiente, o queixo, por sua vez, não se projeta para a frente o suficiente para dar a impressão de mandíbula e queixo definidos. Apesar da baixa quantidade de gordura na área, pode parecer que o queixo está derretendo no pescoço.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Homo sapiens",
      "descricao": "Espécie humana moderna, a única do gênero Homo ainda viva."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No nome científico da nossa espécie, Homo sapiens, o que significa a palavra latina sapiens?",
    "resposta": "Sábio",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Homo_sapiens",
      "https://en.wikipedia.org/wiki/Human"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_sapiens",
        "situacao": "ok",
        "texto": "Humano (taxonomicamente Homo sapiens, termo que deriva do latim \"homem sábio\", também conhecido como pessoa, gente ou homem) é a única espécie do gênero Homo ainda viva e o primata mais abundante e difundido da Terra, caracterizado pelo bipedalismo e por cérebro grande, o que permitiu o desenvolvimento de ferramentas, culturas e linguagens avançadas.\n[…]\nO estudo científico da evolução humana engloba o desenvolvimento do gênero Homo, mas geralmente envolve o estudo de outros hominídeos e homininaes, tais como o Australopithecus. O \"humano moderno\" é definido como membro da espécie Homo sapiens, sendo a única subespécie sobrevivente (Homo sapiens sapiens). O Homo sapiens idaltu e o Homo neanderthalensis, além de outras subespécies conhecidas, foram extintos há milhares de anos.\n[…]\nOs seres humanos modernos, posteriormente distribuídos por todos os continentes, substituíram os hominídeos anteriores. Eles habitaram a Eurásia e a Oceania há 40 mil anos AP e as Américas há pelo menos 14 mil anos AP. Eles acabaram com o Homo neanderthalensis e com outras espécies descendentes do Homo erectus (que habitavam a Eurásia há 2 milhões de anos), através do seu maior sucesso na reprodução e na competição por recursos.\n[…]\nA arte é uma característica definidora do ser humano e há evidências de uma relação entre criatividade e linguagem. A evidência mais antiga de arte foram as gravuras de conchas feitas pelo Homo erectus 300 mil anos antes da evolução dos humanos modernos. A arte atribuída ao H. sapiens existia há pelo menos 75 mil anos, com joias e desenhos encontrados em cavernas na África do Sul. Existem várias hipóteses de por que os humanos se adaptaram às artes.\n[…]\nHomo sapiens - Programa da Origem Humana do Instituto Smithsoniano\n[…]\n«Homo sapiens Linnaeus, 1758». Enciclopédia da Vida (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Human",
        "situacao": "ok",
        "texto": "Humans (Homo sapiens, meaning 'thinking man' or 'wise man') are the most abundant and widespread species of primates, characterized by bipedalism, minimal body hair, and large, complex brains enabling the development of advanced technology, culture, and language. Humans are highly social beings and tend to live in complex social structures composed of many cooperating and competing groups, from fa\n[…]\nAll modern humans are classified into the species Homo sapiens, coined by Carl Linnaeus in his 1735 work Systema Naturae. The generic name Homo is a learned 18th-century derivation from Latin homō, which refers to humans of either sex. The word human can refer to all members of the Homo genus. The name Homo sapiens means 'wise man' or 'knowledgeable man'.\n[…]\nHomo sapiens emerged in Africa at least 300,000 years ago from a species commonly designated as either H. heidelbergensis or H. rhodesiensis, the descendants of H. erectus that remained in Africa. H. sapiens migrated out of the continent, gradually replacing or interbreeding with local populations of archaic humans. Humans began exhibiting behavioral modernity about 160,000–70,000 years ago, and possibly earlier.\n[…]\nArt is a defining characteristic of humans, and there is evidence for a relationship between creativity and language. The earliest evidence of art was shell engravings made by Homo erectus 300,000 years before modern humans evolved. Art attributed to H. sapiens existed at least 75,000 years ago, with jewelry and drawings found in caves in South Africa. There are various hypotheses as to why humans have adapted to the arts.\n[…]\nAnatomical evidence in the form of second-to-fourth digit ratios, a biomarker for prenatal androgen effects, likewise indicates modern humans were polygynous during the Pleistocene."
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "A Origem das Espécies",
      "descricao": "Livro de Charles Darwin, publicado em 1859, que apresenta a teoria da evolução por seleção natural."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Origem das Espécies, de Darwin, tem uma única ilustração em todo o livro. O que ela mostra?",
    "resposta": "Uma árvore de espécies ramificando",
    "fonte": [
      "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",
      "https://en.wikipedia.org/wiki/Tree_of_life_(biology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/On_the_Origin_of_Species",
        "situacao": "ok",
        "texto": "On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life is a work of scientific literature by the English naturalist Charles Darwin that is considered to be the foundation of evolutionary biology. It was published on 24 November 1859.\n[…]\nUsing a tree diagram and calculations, he indicates the \"divergence of character\" from original species into new species and genera. He describes branches falling off as extinction occurred, while new branches formed in \"the great Tree of life ... with its ever branching and beautiful ramifications\".\n[…]\nChapter VIII addresses the idea that species had special characteristics that prevented hybrids from being fertile in order to preserve separately created species. Darwin said that, far from being constant, the difficulty in producing hybrids of related species, and the viability and fertility of the hybrids, varied greatly, especially among plants.\n[…]\nTransmutation of species\n[…]\nCarpenter, William Benjamin (1859), \"Darwin on the Origin of Species\", National Review, vol. 10, no. December 1859, pp. 188–214. Published anonymously.\n[…]\nHuxley, Thomas Henry (1859), \"Time and Life: Mr Darwin's Origin of Species\", Macmillan's Magazine, 1: 142–148.\n[…]\nHuxley, Thomas Henry (1859), \"Darwin on the Origin of Species\", The Times (26 December 1859): 8–9. Published anonymously.\n[…]\nMurray, Andrew (1860), \"On Mr Darwin's Theory of the Origin of Species\", Proceedings of the Royal Society of Edinburgh, 4: 274–291, doi:10.1017/S0370164600034246.\n[…]\nOwen, Richard (1860), \"Review of Darwin's Origin of Species\", Edinburgh Review, 3 (April 1860): 487–532. Published anonymously.\n[…]\nOn the Origin of Species, full text with embedded audio\n[…]\nDarwin's notes on the creation of On the Origin of Species digitised in Cambridge Digital Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tree_of_life_(biology)",
        "situacao": "ok",
        "texto": "The tree of life or universal tree of life is a metaphor, conceptual model, and research tool used to explore the evolution of life and describe the relationships between organisms, both living and extinct, as described in a famous passage in Charles Darwin's On the Origin of Species (1859).\n[…]\nCharles Darwin (1809–1882) used the metaphor of a \"tree of life\" to conceptualise his theory of evolution. In On the Origin of Species (1859) he presented an abstract diagram of a portion of a larger timetree for species of an unnamed large genus (see figure).\n[…]\nBecause it shows relationships (phylogeny) and time (generations), it is a timetree. In contrast, Ernst Haeckel illustrated a phylogenetic tree (branching only) in 1866, not scaled to time, and of real species and higher taxa. In his summary to the section, Darwin put his concept in terms of the metaphor of the tree of life:\n[…]\nAs buds give rise by growth to fresh buds, and these, if vigorous, branch out and overtop on all sides many a feebler branch, so by generation I believe it has been with the great Tree of Life, which fills with its dead and broken branches the crust of the earth, and covers the surface with its ever branching and beautiful ramifications.\n[…]\nDarwin, Charles (1859). On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life (1st ed.). London: John Murray. ISBN 978-1-4353-9386-8. {{cite book}}: ISBN / Date incompatibility (help)\n[…]\nDarwin, Charles (1872). The Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life (6th ed.). London: John Murray. ISBN 978-1-4353-9386-8. {{cite book}}: ISBN / Date incompatibility (help)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Origem_das_Esp%C3%A9cies",
        "situacao": "ok",
        "texto": "A Origem das Espécies (ou, mais completamente, A Origem das Espécies por Meio da Seleção Natural, ou Preservação das Raças Favorecidas na Luta pela Vida) é uma obra de literatura científica escrita por Charles Darwin, que é considerada a base da biologia evolutiva. Publicado em 24 de novembro de 1859, ele introduziu a teoria científica de que as formas de vida evoluem ao longo das gerações por mei\n[…]\nDarwin começou a especular, em uma série de cadernos, sobre a possibilidade de \"uma espécie se transformar em outra\" para explicar essas descobertas e, por volta de julho, esboçou uma ramificação genealógica de uma única árvore evolucionária, descartando as linhagens independentes de Lamarck que progrediam para formas superiores. De forma não convencional, Darwin fez perguntas a criadores de animais, bem como a cientistas estabelecidos.\n[…]\nUsando um diagrama de árvore e cálculos, ele indica a \"divergência de caráter\" das espécies originais em novas espécies e gêneros. Ele descreve os ramos caindo quando a extinção ocorreu, enquanto novos ramos se formaram na \"grande árvore da vida ... com suas ramificações sempre ramificadas e lindas\".\n[…]\nOs capítulos posteriores fornecem evidências de que a evolução ocorreu, apoiando a ideia de uma evolução adaptativa e ramificada, sem provar diretamente que a seleção é o mecanismo pelo qual ela ocorre. Darwin apresenta fatos de apoio extraídos de muitas disciplinas, mostrando que sua teoria poderia explicar uma miríade de observações de muitos campos da história natural que eram inexplicáveis sob o conceito alternativo de que as espécies foram criadas individualmente.\n[…]\nOrigem das espécies - versão em português traduzida por Joaquim Dá Mesquita Paul.\n[…]\nTransmutação de espécies\n[…]\nOn the Origin of Species\n[…]\nA Origem das Espécies, texto completo com áudio incorporado\n[…]\nLivro eletrônico sobre a origem das espécies fornecido pelo Project Gutenberg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "A Descendência do Homem",
      "descricao": "Livro de Charles Darwin publicado em 1871 que aplica a teoria da evolução aos seres humanos e trata da seleção sexual."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além da origem humana, boa parte do livro A Descendência do Homem, de Darwin, é dedicada a que outro mecanismo da evolução?",
    "resposta": "Seleção sexual",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Descent_of_Man,_and_Selection_in_Relation_to_Sex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Descent_of_Man,_and_Selection_in_Relation_to_Sex",
        "situacao": "ok",
        "texto": "The Descent of Man, and Selection in Relation to Sex is a book by English naturalist Charles Darwin, first published in 1871, which applies evolutionary theory to human evolution, and details his theory of sexual selection, a form of biological adaptation distinct from, yet interconnected with, natural selection. Darwin used the word \"descent\" to mean lineal descendant of ancestors.\n[…]\nNonetheless, Darwin's explanation of sexual selection continues to receive support from both social and biological scientists as \"the best explanation to date\".\n[…]\nDarwin considered sexual selection to be as much of a theoretical contribution of his as was his natural selection, and a substantial amount of Descent is devoted exclusively to this topic.\n[…]\nA single line in this first work hinted at such a conclusion: \"light will be thrown on the origin of man and his history.\"  When writing The Variation of Animals and Plants Under Domestication in 1866, Darwin intended to include a chapter including humans in his theory, but the book became too big and he decided to write a separate \"short essay\" on ape ancestry, sexual selection and human expression, which became The Descent of Man.\n[…]\nDarwin's views on sexual selection were opposed strongly by his co-discoverer of natural selection, Alfred Russel Wallace, though much of his \"debate\" with Darwin took place after Darwin's death.\n[…]\nJoseph Jordania suggested that in explaining such human morphological and behavioural characteristics as singing, dancing, body painting, wearing of clothes, Darwin (and proponents of sexual selection) neglected another important evolutionary force, intimidation of predators and competitors with the ritualised forms of warning display. Warning display uses virtually the same arsenal of visual, audio, olfactory and behavioural features as sexual selection.\n[…]\nThe Descent of Man public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Descend%C3%AAncia_do_Homem_e_Sele%C3%A7%C3%A3o_em_Rela%C3%A7%C3%A3o_ao_Sexo",
        "situacao": "ok",
        "texto": "“A Descendência do Homem e Seleção em Relação ao Sexo”, é um livro do naturalista inglês Charles Darwin, que teve sua primeira edição publicada por John Murray, em 24 de fevereiro de 1871 no Reino Unido. A obra disserta sobre a teoria evolutiva, aplicando teorias importantes de Darwin como a seleção sexual e seleção natural.\n[…]\nPublicada inicialmente em dois volumes em 1871, a \"Descendência do Homem\" trata de dois tópicos: a descendência ou origem do homem a partir de outras espécies, não sendo ele, portanto, uma criação especial; e o processo de seleção sexual, que ocorre, para Darwin, paralelamente ao processo de seleção natural.\n[…]\nPara além disso, pesquisas que comprovaram que quase tudo pode ser um mecanismo para a escolha do parceiro de acasalamento, inclusive faculdade mental, contradizem a teoria de que a seleção sexual se daria de forma majoritariamente morfológica. E, vale ressaltar que outro avanço importante foi identificar que muitos dos parâmetros para escolha de parceiros não evoluíram devido a seleção sexual mas sim por necessidade em outros contextos.\n[…]\nAtravés destes estudos, percebe-se que a seleção sexual se dá de maneira muito mais complexa do que apenas através da procura e gosto pela beleza estética, mostrando que 150 anos após a publicação de “A Descendência do Homem e Seleção em relação ao sexo” ainda são necessários grandes estudos em relação a como se dá este mecanismo de seleção.\n[…]\nAlém disso, ainda que Darwin não desenvolva desta forma, sua ideia de seleção sexual na obra trabalhada pode ser analisada sobre um viés de verificação de sucessos de reprodução sexual por parte dos machos para que haja o desenvolvimento de características atrativas, com isso a análise de contingências também encontra-se presente.\n[…]\n«Obras de ou sobre Darwin no Internet Archive» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Denny",
      "descricao": "Fragmento de osso de uma jovem de cerca de 90 mil anos, achado na caverna Denisova, na Sibéria, cujo DNA revelou ser filha de dois grupos humanos extintos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Em 2018, o DNA de um osso de uma caverna na Sibéria revelou uma jovem filha de pais de dois grupos humanos extintos diferentes. Quais?",
    "resposta": "Mãe neandertal e pai denisovano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denny_(hybrid_hominin)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denny_(hybrid_hominin)",
        "situacao": "ok",
        "texto": "Denny (Denisova 11) is an ~90,000 year old fossil specimen belonging to a ~13-year-old Neanderthal-Denisovan hybrid girl. To date, she is the only first-generation hybrid hominin ever discovered. Denny's remains consist of a single fossilized fragment of a long bone discovered among over 2,000 visually unidentifiable fragments excavated at the Denisova Cave in the Altai Mountains, Russia in 2012.\n[…]\nDating analyses in 2016 determined that Denny (Denisova 11) died about 90,000 years ago, and the bone's cortical thickness indicates an age at death of at least 13 years. An analysis of the whole genome sequence (total mitochondrial and nuclear DNA) indicates she was female, with a Neanderthal mother and a Denisovan father.\n[…]\nPrevious analyses from other fossils found in this Siberian cave have shown that modern humans, Neanderthals, and Denisovans inhabited this site at various times, and that all three human species interbred with each other. The genes of both archaic human species are present in many people today, which suggests that when these groups met, gene flow occurred. It is not evident if the mating was consensual or if Denny was fertile.\n[…]\nThe estimated heterozygosity of Denisova 11, found to be comparable to present day Africans suggests that the girl was a first-generation Neanderthal-Denisovan hybrid.\n[…]\nIn February 2019, scientists discovered evidence, based on genetics studies using artificial intelligence (AI), that suggest the existence of an unknown human ancestor species, not Neanderthal, Denisovan or human hybrid (like Denny), in the genome of modern humans.\n[…]\nSlon, Viviane; Fabrizio Mafessoni; Benjamin Vernot; et al. (2018). \"The genome of the offspring of a Neanderthal mother and a Denisovan father\". Nature. 561 (7721): 1. doi:10.1038/s41586-018-0455-x. PMC 6130845. PMID 30135579. Wikidata Q56234568."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Caverna de Blombos",
      "descricao": "Caverna no litoral sul da África do Sul com vestígios de Homo sapiens de mais de setenta mil anos, como pedaços de pigmento gravados."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Na caverna de Blombos, na África do Sul, humanos de mais de setenta mil anos atrás gravaram riscos em pedaços de que pigmento mineral?",
    "resposta": "Ocre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Blombos_Cave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Blombos_Cave",
        "situacao": "ok",
        "texto": "Blombos Cave is an archaeological site located in Blombos Private Nature Reserve, about 300 km east of Cape Town on the Southern Cape coastline, South Africa. The cave contains Middle Stone Age (MSA) deposits currently dated at between c. 100,000 and 70,000 years Before Present (BP), and a Late Stone Age sequence dated at between 2000 and 300 years BP. The cave site was first excavated in 1991 and\n[…]\nOchre – an iron-rich mineral – is regularly found at Stone Age sites throughout southern Africa, and has also been recovered from the Middle Stone Age levels in Blombos Cave. More than 8,000 pieces of ochre-like material, of which more than 1500 are 10 mm or more in length, have been recovered from the Middle Stone Age levels of Blombos Cave. Many of them show use-wear traces from intentional use and processing.\n[…]\nIn 2008 an ochre processing workshop consisting of two toolkits was uncovered in the 100,000-year-old levels at Blombos Cave, South Africa. Analysis shows that a liquefied pigment-rich mixture was produced and stored in the shells of two Haliotis midae (abalone), and that ochre, bone, charcoal, grindstones, and hammer-stones also formed a composite part of the toolkits.\n[…]\nFish are seldom reported from other southern African MSA sites, and by implication, it was thought that Middle Stone Age people were incapable of exploiting coastal resources efficiently. The evidence for fishing at Blombos Cave and Klasies River contradicts this theory.\n[…]\nBlombos Cave was declared a provincial heritage site by Heritage Western Cape on 29 May 2015 in terms of Section 27 of the National Heritage Resources Act. This gives the site Grade II status and provides it with protection under South African heritage law.\n[…]\nTRACSYMBOLS: ERC funded research project on the Blombos Cave.\n[…]\nBlombos Cave, South Africa via Internet Archive\n[…]\nBlombos Cave and Private Nature Reserve, Stillbaai - Cape Town"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_Blombos",
        "situacao": "ok",
        "texto": "Caverna Blombos (BBC) é um sítio arqueológico localizado na Reserva Natural Blombosfontein, cerca de 300 km a leste da Cidade do Cabo, na costa sul de Cabo, África do Sul. Foi escavado pela primeira vez em 1991, estando inicialmente bloqueada por dunas de areia. Blombos contém depósitos da metade da Idade da Pedra, atualmente datados entre 100.000 e 70.000 anos, e o final da Idade da Pedra, datado\n[…]\nNo local, foram encontrados dois pedaços de ocre gravados com desenhos abstratos, datados de 75.000 anos atrás e muitas vezes considerados a primeira arte da história humana, além de conchas perfuradas para uso como joia e um complexo agregado de instrumentos, tais como ossos primorosamente produzidos.\n[…]\nEm inúmeras ocupações do MSA na África há evidências do uso de ocre, que pode ter sido tanto para funções utilitárias (por exemplo, proteção da pele, uso medicinal ou como agente colante), mas também há seu uso simbólico como pigmento (neste caso, há a predominância do uso do ocre em tons de vermelhos), onde podiam ser produzidos giz de cera com pontas afinadas. Na Caverna Blombos foram encontradas mais de 8 mil peças com ocre nas camadas do MSA, muitas com sinais de utilização.\n[…]\nAlém disso, em 2009, foram reportadas mais treze peças adicionais de ocre gravadas escavadas da Caverna Blombos, sendo quatro encontradas em M1 (além das duas comentadas acima), duas em M2 e sete em M3, que possuem diferentes padrões de hachuras e são datados entre 75 e 100 mil anos.\n[…]\nAlém dos objetos de ocre gravados, também foram encontradas na Caverna Blombos um conjunto de ferramentas (toolkit) associados à produção e armazenamento de compostos ricos em ocre: são recipientes de conchas de Haliotis midae e foram encontrados na fase M3 (camada CP), sendo um dos kits compostos, possuindo partes de osso, carvão, martelos de pedra e pedras de amolar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Homem-Leão",
      "descricao": "Estatueta pré-histórica de figura com corpo humano e cabeça de leão, com cerca de quarenta mil anos, achada na caverna Hohlenstein-Stadel, na Alemanha."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O Homem-Leão, estatueta de cerca de quarenta mil anos achada numa caverna da Alemanha, foi esculpido em quê?",
    "resposta": "Marfim de mamute",
    "distratores": [
      "Osso de urso",
      "Chifre de rena",
      "Pedra calcária"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lion-man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lion-man",
        "situacao": "desambiguacao",
        "texto": "Lion man, lion-man, or similar may refer to:\n\nthe Lion-man of Hohlenstein-Stadel, a prehistoric sculpture discovered in a German cave in 1939\nStephan Bibrowski (born 1890), a famous sideshow performer, known as Lionel the Lion-faced Man\nCraig Busch (born 1964), New Zealand big-cat expert\nThe Lion Man, a New Zealand television documentary series featuring Busch\nThe Lion Man (1936 film), an American"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Paranthropus boisei",
      "descricao": "Espécie de hominídeo robusto da África Oriental, conhecida pela mandíbula maciça e pelos molares enormes."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Que estrutura óssea no alto do crânio do Paranthropus boisei, também vista em gorilas machos, prendia seus enormes músculos de mastigação?",
    "resposta": "Crista sagital",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paranthropus_boisei",
      "https://en.wikipedia.org/wiki/Sagittal_crest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paranthropus_boisei",
        "situacao": "ok",
        "texto": "Paranthropus boisei is a species of australopithecine from the Early Pleistocene of East Africa about 2.5 to 1.15 million years ago. The holotype specimen, OH 5, was discovered by palaeoanthropologist Mary Leakey in 1959 at Olduvai Gorge, Tanzania and described by her husband Louis a month later. It was originally placed into its own genus as \"Zinjanthropus boisei\", but is now relegated to Paranth\n[…]\nIn 1960, American anthropologist John Talbot Robinson pointed out that the supposed differences between \"Zinjanthropus\" and Paranthropus are due to OH 5 being slightly larger, and so recommended the species be reclassified as P. boisei. Louis rejected Robinson's proposal. Following this, it was debated if P. boisei was simply an East African variant of P. robustus until 1967 when South African palaeoanthropologist Phillip V.\n[…]\nTobias gave a far more detailed description of OH 5 in a monograph (edited by Louis). Tobias and Louis still retained \"Zinjanthropus\", but recommended demoting it to subgenus level as Australopithecus (\"Zinjanthropus\") boisei, considering Paranthropus to be synonymous with Australopithecus. Synonymising Paranthropus with Australopithecus was first suggested by anthropologists Sherwood Washburn and Bruce D.\n[…]\nboisei, it would show a limb anatomy quite similar to that of the contemporary H. habilis.\n[…]\nThey extended their interpretation of the crest to the males of Paranthropus species, with the crest and resultantly larger head (at least in P. boisei) being used for some kind of display. This contrasts with other primates which flash the typically engorged canines in agonistic display (the canines of Paranthropus are comparatively small). However, it is also possible that male gorillas and orangutans require larger temporalis muscles to achieve a wider gape to better display the canines.\n[…]\nParanthropus boisei - The Smithsonian Institution's Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sagittal_crest",
        "situacao": "ok",
        "texto": "A sagittal crest is a ridge of bone running lengthwise along the midline of the top of the skull (at the sagittal suture) of many mammalian and reptilian skulls, among others. The presence of this ridge of bone indicates that there are exceptionally strong jaw muscles. The sagittal crest serves primarily for attachment of the temporalis muscle, which is one of the main chewing muscles. Development\n[…]\nSagittal crests are found in robust great apes, and some early hominins (Paranthropus). Prominent sagittal crests are found among male gorillas and orangutans, but only rarely occur in male chimpanzees such as Bili apes.\n[…]\nThe largest sagittal crest ever discovered in the human lineage belongs to the \"Black Skull\", Paranthropus aethiopicus field number KNM WT 17000, the earliest known robust hominid ancestor and the oldest robust australopithecine discovered to date. The prominence of the crest appears to have been an adaptation for the P. aethiopicus' heavy chewing, and the Black Skull's cheek teeth are correspondingly large.\n[…]\nSmaller sagittal crests are also present on the skulls of other Paranthropines, including Paranthropus boisei and Paranthropus robustus.\n[…]\nParanthropus aethiopicus (The Black Skull)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paranthropus_boisei",
        "situacao": "ok",
        "texto": "Paranthropus boisei (originalmente chamado Zinjanthropus boisei e então Australopithecus boisei) foi um dos primeiros hominíneos a vviverem no leste de África, há cerca de 1 a 2 milhões de anos, durante o  Pleistoceno. Tinha um crânio altamente especializado à mastigação pesada. P. boisei habitou os pastos secos da savana da África Leste durante um período de há 1,7 a 1,0 milhões de anos.\n[…]\nA mesma adaptação ocorreu no sul da África com a evolução do Paranthropus robustus.\n[…]\nNuma sociedade de harém, um macho tem direitos de reprodução exclusivos para um grupo de fêmeas, já que a disparidade de tamanho entre machos e fêmeas das espécies do gênero Paranthropus era comparável a dos gorilas (com base nas dimensões faciais). Os machos mais jovens também eram menos robustos do que os machos mais velhos (maturidade tardia também é exibida em gorilas).\n[…]\nPorém, como os Paranthopus preferiam um habitat de savana, uma sociedade com vários machos teria sido mais produtiva para defender melhor o bando de predadores no ambiente mais exposto, como o fazem os babuínos da savana.Além disso, entre os primatas, a maturidade atrasada também é exibida no macaco rhesus, que tem uma sociedade com vários machos, e pode não ser um indicador preciso da estrutura social.\n[…]\nPesquisas a respeito de ferramentas de mão do Paranthropus robustus, uma espécie que pensava-se ser muito semelhante ao Paranthropus boisei, mostrou que, anatomicamente, eles eram capazes de realizar a tão chamada habilidade de precisão. Então o Paranthropus boisei possuía os requerimentos anatômicos para fabricar ferramentas, mas sua capacidade de abstração para criar projetos é duvidosa por sua anatomia craniana. Veja também em Olduwan.\n[…]\nAustralopithecus boisei page on ArchaeologyInfo.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Crânio de Kabwe",
      "descricao": "Crânio fóssil de hominídeo com cerca de trezentos mil anos, achado em 1921 numa mina em Kabwe, antiga Broken Hill, na Zâmbia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O crânio de Kabwe, achado em 1921 numa mina da Zâmbia, tem mais de duzentos mil anos e um problema nos dentes muito comum hoje. Qual?",
    "resposta": "Cáries",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kabwe_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kabwe_1",
        "situacao": "ok",
        "texto": "Kabwe 1, also known as Broken Hill Man or Rhodesian Man, is a nearly complete archaic human skull discovered in 1921 at the Kabwe mine, Zambia (at the time, Broken Hill mine, Northern Rhodesia). It dates to around 300,000 years ago, possibly contemporaneous with modern humans and Homo naledi. It was the first archaic human fossil discovered in Africa.\n[…]\nWhen Zambia became independent in 1964, the name of the mine and nearby mining town changed from Broken Hill to Kabwe, a contraction of Kabwe-Ka Mukuba meaning \"place of smelting\" in the Lenje language, in reference to pre-colonial iron metallurgy in the area.\n[…]\nThe British Museum responded on June 6 that it was donated by the Rhodesia Broken Hill Development Company, \"who had been in the habit of presenting to the Museum with interesting paleontological specimens for a number of years.\" The NMC replied with a formal request of the return of Kabwe 1 because its removal without a permit violated the Bushman-Relics Protection Act, 1911.\n[…]\nIn 2018, the case of the Broken Hill skull resurfaced on the agenda of the ICPRCP, with many states speaking in support of a repatriation to Zambia. The UK reaffirmed its position that the acquisition had been legal and that British Museum Act 1963 prevented a repatriation but that the British government would be open to further negotiations. The following session of the ICPRCP in 2022, however, revealed that little to no progress had been made towards repatriation.\n[…]\nIn 2024, Lazarous Kapambwe declared on behalf of Zambia that he could not report \"any positive outcome\" from the negotiations conducted with the UK between the sessions, and that Zambia had a right to seek the repatriation of the Broken Hill skull as an ancestor."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Charles Darwin",
      "descricao": "Naturalista inglês autor da teoria da evolução por seleção natural."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Depois de abandonar o curso de medicina em Edimburgo, o jovem Charles Darwin foi estudar em Cambridge para seguir que carreira?",
    "resposta": "Pastor anglicano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species  have descended from a common ancestor is now  accepted and considered a fundamental scientific concept.\n[…]\nBoth families were largely Unitarian, though the Wedgwoods were adopting Anglicanism. Robert Darwin, a freethinker, had baby Charles baptised in November 1809 in the Anglican St Chad's Church, Shrewsbury, but Charles and his siblings attended the local Unitarian Church with their mother. The eight-year-old Charles already had a taste for natural history and collecting when he joined the day school run by its preacher in 1817. That July, his mother died.\n[…]\nOn 29 January, Darwin and Emma Wedgwood were married at Maer in an Anglican ceremony arranged to suit the Unitarians, then immediately caught the train to London and their new home.\n[…]\nThe Church of England's response was mixed. Darwin's old Cambridge tutors Sedgwick and Henslow dismissed the ideas, but liberal clergymen interpreted natural selection as an instrument of God's design, with the cleric Charles Kingsley seeing it as \"just as noble a conception of Deity\". In 1860, the publication of Essays and Reviews by seven liberal Anglican theologians diverted clerical attention from Darwin. Its ideas, including higher criticism, were attacked by church authorities as heresy.\n[…]\nDarwin's family tradition was nonconformist Unitarianism, while his father and grandfather were freethinkers, and his baptism and boarding school were Church of England. When going to Cambridge to become an Anglican clergyman, he did not \"in the least doubt the strict and literal truth of every word in the Bible\".\n[…]\nWorks by Charles Darwin at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin FRS FGRS FLS FLZ (pronúncia em inglês: ['dɑːrwɪn]; ocasionalmente aportuguesado em Carlos Darwin. Shrewsbury, 12 de fevereiro de 1809 – Downe, 19 de abril de 1882) foi um naturalista, geólogo e biólogo britânico, célebre por seus avanços sobre evolução nas ciências biológicas.\n[…]\nAmbas as famílias eram unitaristas, embora os Wedgwoods também compartilhassem a crença anglicana. O próprio Robert Darwin, que se declarava um livre pensador, batizou Charles em novembro de 1809 na Anglican St Chad's Church, Shrewsbury. Enquanto pequeno, Darwin e seus irmãos iam à Igreja Unitarista juntamente com sua mãe. Com oito anos, demonstrava interesse precoce pela história natural durante suas participações escolares. Em julho daquele ano, sua mãe faleceu.\n[…]\nO negligenciamento de Darwin em terminar seus estudos em medicina irritou seu pai, que por sua vez o mandou para Christ's College, Cambridge, para estudar em um bacharelado de artes, em um primeiro passo rumo à carreira clériga anglicana, pois era comum intelectuais da igreja seguirem o ramo das ciências naturais com o objetivo 'de apreciar as belezas divinas'. Darwin acabou não indo bem nos testes, conquistando apenas um acesso inferior em 1828. Ele preferia montar em cavalos e atirar.\n[…]\nEm 24 de janeiro de 1839, Darwin foi eleito membro da Royal Society (FRS). Em 29 de janeiro, Darwin e Emma Wedgwood se casaram em uma cerimônia anglicana feita para se adequar aos costumes unitaristas e logo depois pegaram o trem para sua nova casa.\n[…]\nA tradição da família de Darwin era não-conformista unitarista, enquanto seu pai e avô eram livre-pensadores, seu batismo e escola de infância eram anglicanos. Quando estava ingressando em Cambridge para se tornar um clérigo anglicano, Darwin não duvidava a interpretação literal da Bíblia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "A Expressão das Emoções no Homem e nos Animais",
      "descricao": "Livro de Charles Darwin publicado em 1872 sobre a origem evolutiva das expressões faciais e emocionais."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Lançado por Darwin em 1872, o livro A Expressão das Emoções no Homem e nos Animais foi um dos primeiros livros científicos ilustrados com quê?",
    "resposta": "Fotografias",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Expression_of_the_Emotions_in_Man_and_Animals"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Expression_of_the_Emotions_in_Man_and_Animals",
        "situacao": "ok",
        "texto": "The Expression of the Emotions in Man and Animals is Charles Darwin's third major work of evolutionary theory, following On the Origin of Species (1859) and The Descent of Man, and Selection in Relation to Sex (1871). Initially intended as a chapter in Descent of Man, Expression grew in length and was published separately in 1872.\n[…]\nTwo days later, he began work on The Expression of the Emotions in Man and Animals and completed most of the text within four months; progress then slowed because of work required on the sixth (and final) edition of The Origin of Species and a hostile review  from St George Jackson Mivart. Darwin finished his work on the proofs on 22 August 1872.\n[…]\nIn 2003, the New York Academy of Sciences published Emotions Inside Out: 130 Years after Darwin's The Expression of the Emotions in Man and Animals, a collection of 37 papers (edited by Paul Ekman) with recent research on the subject.\n[…]\nAll these sensations and innervations belong to the field of The Expression of the Emotions, which, as Darwin (1872) has taught us, consists of actions which originally had a meaning and served a purpose. These may now for the most part have become so much weakened that the expression of them in words seems to us to be only a figurative picture of them, whereas in all probability the description was once meant literally; and hysteria is right in restoring the original meaning of the words....\n[…]\nDarwin, Charles (1872), The Expression of the Emotions in Man and Animals, London: John Murray.\n[…]\nEkman, Paul, ed. (2003), Emotions Inside Out: 130 Years after Darwin's The Expression of the Emotions in Man and Animals (1st ed.), New York: New York Academy of Sciences, archived from the original on 1 March 2012, retrieved 29 August 2010.\n[…]\nThe Expression of the Emotions in Man and Animals public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Expression_of_the_Emotions_in_Man_and_Animals",
        "situacao": "ok",
        "texto": "The Expression of the Emotions in Man and Animals (A Expressão das Emoções no Homem e nos Animais) é um livro feito pelo naturalista britânico Charles Darwin, acerca de como o ser humano e os animais expressam as suas emoções. Foi, a par do seu livro de 1871 The Descent of Man and Selection in Relation to Sex, parte da tentativa de Darwin para responder a questões sobre a origem humana e psicologi\n[…]\nDarwin notou a natureza universal das expressões faciais no livro: \"…the young and the old of widely different races, both with man and animals, express the same state of mind by the same movements.\"(\"... os jovens e os velhos de raças muito diferentes, tanto com o homem e os animais, expressam o mesmo estado de espírito com os mesmos movimentos.\")\n[…]\nEle desviou-se a fazer extensas revisões em A Origem das Espécies, então na primavera de 1872 Darwin dedicou-se a The Expression of Emotions in Man and Animals, apontando para uma origem partilhada, em contraste com o Anatomy and Physiology of Expression, de Charles Bell, que clamava músculos criados divinalmente para a expressão dos sentimentos em humanos.\n[…]\nDarwin recorreu a respostas a questionários, centenas de fotografias de atores, bebés e pessoas em asilos, assim como observações próprias, com particular referências a pesar após morte familiar.\n[…]\nThe Expression of Emotions in Man and Animals foi ilustrado com fotografias, desenhos feitos sobre fotografias e sobre observações diretas de artista e pesquisadores de sua época: Guillaume Duchenne (fotografia); C. Bell e Henle (ilustrações anatômicas); Oscar Gustave Rejlander, Riviere, A. May, Wood (desenho de animais). Provou ser muito popular, vendendo mais de 5.000 cópias.\n[…]\nDarwin, Charles (1872), The expression of the emotions in man and animals, London: John Murray\n[…]\n«Published 1872 by John Murray, London»\n[…]\nLinguagem animal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Apêndice vermiforme",
      "descricao": "Pequena bolsa em forma de dedo ligada ao início do intestino grosso humano."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Darwin via o apêndice humano como sobra de um órgão maior que, nos nossos ancestrais, ajudava a digerir que tipo de alimento?",
    "resposta": "Vegetação fibrosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Appendix_(anatomy)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Appendix_(anatomy)",
        "situacao": "ok",
        "texto": "In the human body, the appendix (pl.: appendices or appendixes; also vermiform appendix;  cecal (or caecal, cæcal) appendix; vermix; or vermiform process) is a finger-like, blind-ended tube connected to the cecum.\n[…]\nA 2016 study reported a positive correlation between the presence of the appendix and the concentration of cecal lymphoid tissue, supporting the suggestion that the appendix provides major immune benefits.\n[…]\nCharles Darwin suggested that earlier hominids used the appendix mainly to digest fibrous vegetation, before evolving. The large cecum of some herbivorous animals, such as the horse, rodents, or the koala, appears to support this hypothesis. The koala's cecum enables it to host bacteria that specifically help to break down cellulose. Human ancestors may have also relied on it to digest a diet rich in foliage.\n[…]\nMesoappendix, the portion of the mesentery that connects the ileum to the vermiform appendix\n[…]\n\"Anatomy photo:37:12-0102\". SUNY Downstate Medical Center. Archived from the original on March 5, 2016.–\"Abdominal Cavity: The Cecum and the Vermiform Appendix\"\n[…]\n\"The vestigiality of the human vermiform appendix: A Modern Reappraisal\"–evolutionary biology argument that the appendix is vestigial\n[…]\nSmith HF, Fisher RE, Everett ML, Thomas AD, Bollinger RR, Parker W (October 2009). \"Comparative anatomy and phylogenetic distribution of the mammalian cecal appendix\". Journal of Evolutionary Biology. 22 (10): 1984–99. doi:10.1111/j.1420-9101.2009.01809.x. PMID 19678866. S2CID 6112969.\n[…]\nCho, Jinny (August 27, 2009). \"Scientists refute Darwin's theory on appendix\". The Chronicle (Duke University). (News article on the above journal article.)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ap%C3%AAndice_vermiforme",
        "situacao": "ok",
        "texto": "O apêndice vermiforme (anteriormente denominado apêndice cecal, apêndice ileocecal ou apêndice vermicular) é uma pequena extensão tubular terminada em fundo cego, localizado no ceco, a primeira porção do intestino grosso, e existe em muitos mamíferos. Após alguns centímetros (comumente cinco centímetros, variando de um a vinte centímetros) termina em fundo cego. Este órgão está anatomicamente loca\n[…]\nO apêndice cecal é um vestígio de um órgão redundante (estrutura vestigial) que nas espécies ancestrais tinha funções digestivas, da mesma forma que nas espécies existentes — onde a flora intestinal hidrolisa a celulose e materiais vegetais indigestos semelhantes.\n[…]\nEm consonância com a possibilidade de estruturas vestigiais desenvolverem novas funções, algumas pesquisas sugerem que o apêndice pode se proteger contra a perda de bactérias simbióticas que auxiliam na digestão, embora seja improvável que seja uma função nova, dada a presença de apêndices vermiformes em muitos herbívoros. As populações bacterianas intestinais entrincheiradas no apêndice podem apoiar o rápido restabelecimento da flora do intestino grosso após uma doença ou envenenamento.\n[…]\nEm 2007, um estudo publicado na revista Journal of Theoretical Biology sugeriu que a função moderna do apêndice ainda está de facto relacionada com a população de bactérias que habita e ajuda o sistema digestivo.\n[…]\nOutras pesquisas sobre o apêndice vermiforme defendem que ele aumenta a extensão da superfície do muco intestinal para secreção e absorção” e que faz parte do sistema imunológico, produzindo glóbulos brancos no período da infância, tendo um funcionamento semelhante ao timo. Embora possa desempenhar tais tarefas, essa estrutura pode infeccionar, causando a apendicite, o que leva à sua remoção cirúrgica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Restos do lago Mungo",
      "descricao": "Esqueletos humanos de cerca de 40 mil anos, como o Homem de Mungo, achados no lago seco de Mungo, na Austrália."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A Mulher de Mungo, sepultada na Austrália há cerca de quarenta mil anos, é um dos casos mais antigos conhecidos de que prática funerária?",
    "resposta": "Cremação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mungo_Lady"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mungo_Lady",
        "situacao": "ok",
        "texto": "The Lake Mungo remains are three prominent sets of human remains that are Aboriginal Australian: Lake Mungo 1 (also called Mungo Woman, LM1, and ANU-618), Lake Mungo 2 (LM2), and Lake Mungo 3 (also called Mungo Man, Lake Mungo III, and LM3). Lake Mungo is in New South Wales, Australia, specifically the World Heritage listed Willandra Lakes Region.\n[…]\nThe remains designated Mungo man (LM3) were discovered in 1974, and are dated to around 40,000 years old, the Pleistocene epoch, and are the oldest Homo sapiens (human) remains found on the Australian continent.\n[…]\nIn 2003, Professor Bowler led a project bringing together a multi-disciplinary team of Australian expert groups (comprising four Australian universities, the NSW National Parks & Wildlife Service and the CSIRO, as well as including descendants of the Mungo people) to collaborate on a final determination of the skeleton's age. They reached a consensus that LM3 is about 40,000 years old. This age largely corresponds with stratigraphic evidence using four different dating methods.\n[…]\nComparison of the mitochondrial DNA with that of ancient and modern Aboriginal peoples led to the conclusion that Mungo Man fell outside the range of genetic variation seen in Australian Aboriginal people, and was used to support the multiregional origin of modern humans hypothesis. These results proved politically controversial, and several scientific concerns were raised over the validity of the results and analysis.\n[…]\n\"Mungo Mania\". The Lab – Australian Broadcasting Corporation. January 2001. Retrieved 11 September 2005.\n[…]\nThorne A, Grün R, Mortimer G, et al. (June 1999). \"Australia's oldest human remains: age of the Lake Mungo 3 skeleton\". Journal of Human Evolution. 36 (6): 591–612. Bibcode:1999JHumE..36..591T. doi:10.1006/jhev.1999.0305. PMID 10330330."
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Ardi",
      "descricao": "Esqueleto fóssil parcial de Ardipithecus ramidus, com cerca de 4,4 milhões de anos, achado na Etiópia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O pé de Ardi, hominídeo etíope de mais de quatro milhões de anos, tinha um traço que o pé humano perdeu. Qual?",
    "resposta": "Dedão afastado, capaz de agarrar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ardi",
      "https://en.wikipedia.org/wiki/Ardipithecus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ardi",
        "situacao": "ok",
        "texto": "Ardi (ARA-VP-6/500) is the designation of the fossilized skeletal remains of an Ardipithecus ramidus, thought to be an early human-like female anthropoid around 4.4 million years old. Before Little Foot was fully excavated, it was considered the most complete early hominin specimen with 125 pieces, including most of the skull, teeth, pelvis, hands, and feet.\n[…]\nArdi was not the first fossil of Ardipithecus ramidus to come to light. The first ones were found in Ethiopia in 1992, but it took 17 years to assess their significance.\n[…]\nAlthough Ardipithecus had more ancestral hands, feet, and limbs,  Ardi's pelvis gives a different perspective. The parts of Ardi's pelvis that were recovered include her left hip, her right ilium, and a fragment of her distal sacrum. A shorter ilium and a curve in the lower spine were the characteristics gathered from these partial remains that indicate Ardi, and the Ardipithecus ramidus species, had the ability to walk upright.\n[…]\nArdi's foot is a special area of interest when examining the evolution of bipedalism in early Hominids, and the bipedality of Ardipithecus ramidus, because all five toes do not line up. The remains of the foot from Ardi and other Ardipithecus ramidus specimens that can be studied includes \"a talus, medial and intermediate cuneiforms, cuboid, first, second, third, and fifth metatarsals, and several phalanges.\" The foot of Ardi contains an opposable hallux (big toe) that is similar to chimpanzees.\n[…]\nThe combination of features found in Ardi's and other Ardipithecus ramidus foot bones captures a moment in time where these primitive primates were beginning to leave the trees and spending longer periods of time on the ground.\n[…]\nArdipithecus ramidus – Science Journal Article\n[…]\nDiscovering Ardi – Discovery Channel"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ardipithecus",
        "situacao": "ok",
        "texto": "Ardipithecus is a genus of extinct hominine that lived during the Late Miocene and Early Pliocene epochs in the Afar Depression, Ethiopia. Originally described as one of the earliest ancestors of humans after they diverged from the last common ancestor shared with chimpanzees, the relation of this genus to human ancestors and whether it is a hominin is now a matter of debate. Two fossil species ar\n[…]\nA. ramidus was named in September 1994. The first fossil found was dated to 4.4 million years ago on the basis of its stratigraphic position between two volcanic strata: the basal Gaala Tuff Complex (G.A.T.C.) and the Daam Aatu Basaltic Tuff (D.A.B.T.). The name Ardipithecus ramidus stems mostly from the Afar language, in which Ardi means \"ground/floor\" and ramid means \"root\". The pithecus portion of the name is from the Greek word for \"ape\".\n[…]\nSome researchers infer from the form of her pelvis and limbs and the presence of her abductable hallux, that \"Ardi\" was a facultative biped: bipedal when moving on the ground, but quadrupedal when moving about in tree branches. A. ramidus had a more primitive walking ability than later hominids, and could not walk or run for long distances. The teeth suggest omnivory, and are more generalised than those of modern apes.\n[…]\nPlio-Plestiocene hominins before the divergence of Homo erectus and reaching back to Ardipithecus ramidus averaged 30-52 kg in mass and thus, making them comparably susceptible to giant snake predation.\n[…]\nScience Magazine: Ardipithecus special (requires free registration)\n[…]\nArdipithecus kadabba\n[…]\nArdipithecus ramidus\n[…]\nArdipithecus ramidus Archived 2012-03-08 at the Wayback Machine at Archaeology info\n[…]\nExplore Ardipithecus at NationalGeographic.com\n[…]\nArdipithecus ramidus - Science Journal Article\n[…]\nDiscovering Ardi - Discovery Channel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ardi",
        "situacao": "ok",
        "texto": "Ardi é o nome ou alcunha, em forma de diminutivo, de um fóssil fêmea de Ardipithecus ramidus, encontrado na Etiópia em 1992. Foi anunciada a confirmação de sua autenticidade histórica em uma edição de 11 artigos da revista Nature, no dia 1 de outubro de 2009.\n[…]\nO fóssil foi analisado principalmente por uma equipe do Centro de Evolução Humana da Universidade da Califórnia, durante mais de uma década. A sua datação, estimada em 4,4 milhões de anos de idade, coloca-o como o mais antigo hominídeo, superando a fêmea Australopithecus Lucy.\n[…]\nA origem de seu nome deriva de duas palavras da língua afar, sendo Ardi o equivalente para \"Chão de terra\", e Ramidus de Ramid, \"Raiz\" ou \"Origem\". A palavra pithecus é grega, traduzindo-se \"macaco\". Assim, Ardipithecus ramidus significa \"Raiz dos macacos terrestres\".\n[…]\nArdi caminhava por volta de 4,4 milhões de anos atrás\n[…]\nEle poderá representar um ramo mais próximo do ancestral comum entre seres humanos e chimpanzés, que se separaram há 7 milhões de anos. Apesar desta proximidade com o ancestral comum, Tim White afirma que o fóssil não é tão parecido aos chimpanzés como era esperado. O fato de aparentemente Ardi se deslocar de pé, e não apoiada nos nós dos dedos, fazem-na mais similar aos humanos, enquanto a presença de um polegar opositor nos pés, por exemplo, mostra as suas semelhanças com gorilas e chimpanzés.\n[…]\nArdipithecus\n[…]\nHominídeo\n[…]\n«Descobrindo Ardi, Discovery Channel» (em inglês)\n[…]\n«Descobrindo Ardi, Discovery Channel»\n[…]\n«Escavando Ardi, New York Times. Galeria de fotos das escavações.» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Jebel Irhoud",
      "descricao": "Sítio arqueológico no norte da África onde foram achados fósseis de Homo sapiens com cerca de 300 mil anos."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os fósseis de Jebel Irhoud, de cerca de trezentos mil anos, têm o rosto parecido com o nosso. Mas que forma tinha a caixa craniana, diferente da nossa?",
    "resposta": "Alongada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jebel_Irhoud"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jebel_Irhoud",
        "situacao": "ok",
        "texto": "Jebel Irhoud (Arabic: جبل إيغود, Moroccan Arabic: žbəl iġud) or Adrar n Ighoud (Standard Moroccan Tamazight: ⴰⴷⵔⴰⵔ ⵏ ⵉⵖⵓⴷ, romanized: Adrar n Iɣud), is an archaeological site in Morocco located just north of the town of Tlet Ighoud in Youssoufia Province, approximately 50 km (30 mi) south-east of the city of Safi.\n[…]\nThe most important anatomical considerations when classifying the Jebel Irhoud remains are these specimens' facial/cranial, dental, and mandibular morphologies. Recent studies based on these morphological attributes have identified the Jebel Irhoud individuals as being closer aligned with modern human morphology than archaic hominin morphology, placing them within the early stages of the Homo sapiens clade.\n[…]\nFrom this, it was concluded that the Jebel Irhoud specimens represent archaic Homo sapiens while the Aterian and Iberomaurasian specimens represent anatomically modern Homo sapiens.\n[…]\nThe rodent assemblage was likely accumulated by a carnivore (such as an owl), indicating a Late Middle Pleistocene date for the site. The rodent assemblage, such as the inclusion of G. grandis and Ellobius, also indicates that grasslands probably dominated the surrounding landscape and that during the Middle Pleistocene, the Jebel Irhoud environment was less arid than during the Upper Pleistocene.\n[…]\nIn recent years, Jebel Irhoud has been identified as an important place for tourism and cultural heritage, both for its anthropological and geological importance.\n[…]\nRecently, the Jebel Irhoud geosite was approved to become a part of the larger Youssoufia geopark project.\n[…]\nCurrently, tourist resources are only available after a while near Jebel Irhoud but are present in nearby towns."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Djebel_Irhoud",
        "situacao": "ok",
        "texto": "Djebel Irhoud, Jebel Ighoud ou Adrar Ighud (em árabe: جبل إيغود; em berbere: ⴰⴷⵔⴰⵔ ⵉⵖⵓⴷ) é um sítio arqueológico localizado junto à aldeia homônima, cerca de 100 km a oeste de Marraquexe, 80 km a sudeste de Safim e 45 km a noroeste de Chichaoua, no Marrocos. É notável pelos fósseis de hominídeos que foram encontrados lá desde a descoberta do sítio em 1960.\n[…]\nApós diferentes datações, a mais recente realizada por meio de termoluminescência indicou que ferramentas encontradas no local datavam de 315±34 ka, e o molar Irhoud 3 datava de 286±32 ka. Uma tentativa de extração de DNA antigo dos fósseis foi realizada, mas a equipe de Hublin não teve sucesso na utilização dessa técnica, que teria corroborado com a datação precisa e na indicação de pertencimento do espécime dentro da linhagem humana.\n[…]\nA morfologia dos fósseis humanos encontrados em Djebel Irhoud é bastante semelhante àquela de humanos anatomicamente modernos, especialmente em relação à sua arcada dentária e características faciais, Irhoud 2 e 3, por exemplo, possuem torus supraorbitais pouco proeminentes, se aproximando de características morfológicas recentes.\n[…]\nO formato do crânio é uma característica que distancia os fósseis de Irhoud do humano anatomicamente moderno. Diferente do formato globular da caixa craniana de Homo sapiens contemporâneos, o observado nos fósseis é mais alongado, semelhante ao de outros fósseis de humanos mais arcaicos.\n[…]\nA interpretação dos hominínios de Irhoud foi há muito tempo complicada devido à incertezas acerca da sua idade geológica. Inicialmente, foi-se considerado que os fragmentos eram de uma forma africana de neandertais, com cerca de 40.000 anos, no entanto, evidências de fauna e microfauna presentes no sítio posteriormente corroboraram com a ideia de uma datação no período Pleistoceno Médio (entre 770.000 e 129.000 anos atrás).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "A Marcha do Progresso",
      "descricao": "Ilustração de 1965 de Rudolph Zallinger que mostra uma fila de primatas e hominídeos se endireitando até chegar ao ser humano moderno."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A famosa ilustração A Marcha do Progresso, com macacos que vão se endireitando até virar um homem, é criticada por passar que ideia errada sobre a evolução?",
    "resposta": "Que a evolução é linear",
    "fonte": [
      "https://en.wikipedia.org/wiki/March_of_Progress"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/March_of_Progress",
        "situacao": "ok",
        "texto": "The March of Progress, originally titled The Road to Homo Sapiens, is an illustration that presents 25 million years of human evolution. It was created for the Early Man volume of the Life Nature Library, published in 1965, and drawn by the artist Rudolph Zallinger. It has been widely parodied and imitated to create images of progress of other kinds.\n[…]\nContrary to appearances and some complaints, the original 1965 text of \"The Road to Homo Sapiens\" reveals an understanding of the fact that a linear presentation of a sequence of primate species, all in the direct line of human ancestors, would not be a correct interpretation. For example, the fourth of Zallinger's figures (Oreopithecus) is said to be \"a likely side branch on man's family tree\".\n[…]\nIt has also been criticized as  \"unintentionally and wrongly\" implying that \"evolution is progressive\". The image has been described as having a \"visual logic\" of linear progression. The Lancet called it \"proverbial, much quoted or adapted, familiar to multitudes who have never seen its original version or heard of its maker\". The image has become better-known than the science behind it.\n[…]\nThe artist didn't intend to reduce the evolution of man to a linear sequence, but it was read that way by viewers. ... The graphic overwhelmed the text. It was so powerful and emotional.\n[…]\nThe march of progress is the canonical representation of evolution – the one picture immediately grasped and viscerally understood by all. ... The straitjacket of linear advance goes beyond iconography to the definition of evolution: the word itself becomes a synonym for progress. ... [But] life is a copiously branching bush, continually pruned by the grim reaper of extinction, not a ladder of predictable progress.\n[…]\nMedia related to March of Progress at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Homo naledi",
      "descricao": "Espécie humana extinta descoberta em 2013 no sistema de cavernas Rising Star, na África do Sul."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para escavar os fósseis de Homo naledi na África do Sul, a equipe recrutou cientistas bem magras e pequenas. Por quê?",
    "resposta": "A passagem até os fósseis era estreitíssima",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rising_Star_Cave",
      "https://en.wikipedia.org/wiki/Homo_naledi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rising_Star_Cave",
        "situacao": "ok",
        "texto": "The Rising Star cave system (also known as Westminster or Empire cave) is located in the\n[…]\nMalmani dolomites, in Bloubank River valley, about 800 meters (0.50 miles; 2,600 feet) southwest of Swartkrans, part of the Cradle of Humankind World Heritage Site in South Africa. Recreational caving has occurred there since the 1960s. In 2015, fossils found there two years prior were determined to be a previously unknown extinct species of hominin named Homo naledi.\n[…]\nIn June 2026, researchers extracted and analyzed ancient proteins from the tooth enamel of at least 20 individuals of Homo naledi. Proteomic analysis detected only AMELX enamel proteins and no male-specific AMELY proteins, indicating that all analyzed individuals were likely female.\n[…]\nK. Lindsay (née Eaves) Hunter is a biological anthropologist and currently serves as the Community Engagement and Advancement Director for CARTA, the UC San Diego/Salk Center for Academic Research & Training in Anthropogeny, in La Jolla, CA. Following the 2013 expedition, Lindsay married Rick Hunter, one of the co-discoverers of Homo naledi.\n[…]\nThe Rising Star cave system lies in the Bloubank River valley, 2.2 km west of Sterkfontein Cave. It comprises an area of 250 × 150 m of mapped passageways situated in the core of a gently west-dipping (17°) open fold, and it is stratigraphically bound to a 15–20-metre-thick, stromatolitic dolomite horizon in the lower parts of the Monte Christo Formation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Homo_naledi",
        "situacao": "ok",
        "texto": "Homo naledi is an extinct species of archaic human discovered in 2013 in the Rising Star Cave system, Gauteng province, South Africa, part of the Cradle of Humankind, dating back to the Middle Pleistocene 335,000–236,000 years ago. The excavation comprises 1,550 specimens of bone, representing 737 different skeletal elements, and at least 15 different individuals. Despite this exceptionally high n\n[…]\nSome researchers suggest that H. naledi also may have carved crosshatched rock signs in a passage to what could be a burial chamber, but many paleontologists question this hypothesis.\n[…]\nThe chamber had been entered at least once before, by cavers in the early 1990s. They rearranged some bones and may have caused further damage, although much of the floor in the chamber had not been walked on prior to 2013. The site lies about 80 m (260 ft) from the main entrance, at the bottom of a 12 m (39 ft) vertical drop, and the 10 m (33 ft) long main passage is only 25–50 cm (10 in – 1 ft 8 in) at its narrowest.\n[…]\nThe Lesedi specimen is more within the range of H. habilis and H. e. georgicus. The encephalization quotient of H. naledi was estimated at 3.75, which is the same as the pygmy H. floresiensis, but notably smaller than all other Homo. Contemporary Homo were all above 6, H. e. georgicus at 3.55, and A. africanus at 3.81. It is unclear whether H. naledi inherited small brain size from the last common Homo ancestor, or whether it was evolved secondarily and more recently.\n[…]\nH. naledi occupied a seemingly unique ecological niche from previous South African hominins, including Australopithecus and Paranthropus. The teeth of all three species indicate that they needed to exert high shearing force to chew through perhaps plant or muscle fibres. The teeth of other Homo cannot produce such high forces perhaps due to the use of some food processing techniques, such as cooking."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sistema_de_Cavernas_Estrela_Ascendente",
        "situacao": "ok",
        "texto": "O Sistema de Cavernas Estrela Ascendente (também conhecido como caverna Westminster ou Império)   está localizado nas dolomitas de Malmani, no vale do rio Bloubank, a cerca de 800 metros (0,50 milhas; 2 600 pés) a sudoeste de Swartkrans, parte do chamado Berço da Humanidade, Patrimônio Mundial da África do Sul. A espeleologia recreativa ocorre lá desde a década de 1960.\n[…]\nOs fósseis encontrados na caverna a partir de 2013 foram, em 2015, propostos para representar uma espécie extinta de hominídeo anteriormente desconhecida chamada Homo naledi.\n[…]\nOs geólogos acreditam que a caverna em que os fósseis foram descobertos não tem mais de três milhões de anos.\n[…]\nA caverna foi explorada na década de 1980 pelo Clube de Exploração Espeleológica (SEC), um ramo local da Associação Sul-Africana de Espeleologia (SASA).\n[…]\nEm 13 de setembro de 2013, enquanto exploravam o sistema de cavernas, os espeleólogos amadores Rick Hunter e Steven Tucker, do SEC, encontraram uma \"chaminé\" estreita orientada verticalmente medindo 12 m de comprimento com uma largura média de 20 cm. Então Hunter descobriu uma sala subterrânea de 30 m (a Câmara Dinaledi), cuja superfície estava repleta de ossos fósseis.\n[…]\nLee Berger, da Universidade de Witwatersrand, organizou uma expedição para escavar os fósseis, que começou em 7 de novembro de 2013. A expedição foi financiada pela Fundação Nacional de Pesquisa da África do Sul e pela National Geographic Society.\n[…]\nMais de 1 200 elementos fósseis foram recuperados e catalogados em novembro de 2013, representando pelo menos uma dúzia de indivíduos. A distribuição em camadas dos ossos, em sedimentos ricos em argila, sugere que eles foram depositados por um longo período de tempo, talvez séculos. Apenas um metro quadrado da câmara da caverna foi escavado; outros restos mortais ainda podem estar lá.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Homo floresiensis",
      "descricao": "Espécie humana extinta, de baixa estatura, descoberta em 2003 na caverna Liang Bua, na ilha de Flores, Indonésia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Uma explicação para a baixa estatura do Homo floresiensis é um fenômeno comum em animais isolados por muito tempo em ilhas. Qual?",
    "resposta": "Nanismo insular",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_floresiensis",
      "https://en.wikipedia.org/wiki/Insular_dwarfism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis ( ), also known as \"Flores Man\" or \"Hobbit\" (after the fictional species), is an extinct species of small archaic humans that inhabited the island of Flores, Indonesia, until the arrival of modern humans about 50,000 years ago.\n[…]\nOther authors have argued that H. floresiensis instead likely represents the descendants of a population of Javanese Homo erectus that became isolated on Flores, with the small body size being the result of insular dwarfism, a well known evolutionary trend found among various island animals. These authors alternatively suggest that H. floresiensis has several cranial and dental similarities to H. erectus, particularly to early Javanese Homo erectus.\n[…]\nThe insular dwarfism hypothesis is the current consensus as of 2025.\n[…]\nfloresiensis, concluding that \"multiple independent instances of hominin insular dwarfism occurred on Flores\".\n[…]\nSuch a reduction is likely due to insular dwarfism, and a 2009 study found that the reduction in brain size of extinct pygmy hippopotamuses in Madagascar compared with their living relatives is proportionally greater than the reduction in body size, and similar to the reduction in brain size of H. floresiensis compared with H. erectus.\n[…]\nA 2025 study has suggested that climatic deterioration may have been a contributing factor in the disappearance of Homo floresiensis from the area of Flores surrounding Liang Bua and abandonment of the cave. Geochemical evidence from Liang Bua indicates a prolonged drying trend intensifying around 61,000 years ago, coinciding with declines in local freshwater availability and in Stegodon florensis insularis, a potential prey species.\n[…]\n\"Another diagnosis for a hobbit\". 3 July 2007. Archived from the original on 18 July 2007."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Insular_dwarfism",
        "situacao": "ok",
        "texto": "Insular dwarfism, a form of phyletic dwarfism, is the process and condition of large animals evolving or having a reduced body size when their population's range is limited to a small environment, primarily islands. This natural process is distinct from the intentional creation of dwarf breeds, called dwarfing.\n[…]\nThe process of insular dwarfing can occur relatively rapidly by evolutionary standards. This is in contrast to increases in maximum body size, which are much more gradual. When normalized to generation length, the maximum rate of body mass decrease during insular dwarfing was found to be over 30 times greater than the maximum rate of body mass increase for a ten-fold change in mammals.\n[…]\nRecognition that insular dwarfism could apply to dinosaurs arose through the work of Ferenc Nopcsa, a Hungarian-born aristocrat, adventurer, scholar, and paleontologist. Nopcsa studied Transylvanian dinosaurs intensively, noticing that they were smaller than their cousins elsewhere in the world. For example, he unearthed six-meter-long sauropods, a group of dinosaurs which elsewhere commonly grew to 30 meters or more.\n[…]\nIn addition, the genus Balaur was initially described as a Velociraptor-sized dromaeosaurid (and in consequence a dubious example of insular dwarfism), but has been since reclassified as a secondarily flightless stem bird, closer to modern birds than Jeholornis (thus actually an example of insular gigantism)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis (homem de flores), apelidado de \"Hobbit\", é uma espécie extinta de hominínio do gênero Homo.\n[…]\nQuatro hipóteses foram criadas para explicar as relações filogenéticas do Homo floresiensis:\n[…]\nUma possível explicação para essa ocorrência pode estar associada ao fenômeno de nanismo insular, que já foi documentado para diversos outros mamíferos considerados grandes, como mamutes e veados. Há, também, populações humanas que estão se tornando cada vez mais anãs, inclusive em ilhas do sudeste asiático. Constantemente, relaciona-se o nanismo insular à falta de recursos no ambiente onde tal fenômeno é observado.\n[…]\nExistem, entretanto, críticas à associação entre o fenômeno de nanismo insular e a existência dessa característica em H. floresiensis, embasadas sobretudo na proporção entre o tamanho do cérebro e do corpo como um todo. Estima-se que o volume endocranial de H. floresiensis é consideravelmente menor que o de humanos modernos. Ao se assumir, assim, que H. floresiensis se assemelha a humanos modernos e H.\n[…]\nerectus, tal proporção poderia não fazer sentido, visto que, geralmente, o cérebro diminui menos que o restante do corpo nos processos ligados ao nanismo. Por outro lado, talvez tenha ocorrido uma redução mais acentuada do cérebro em relação ao restante do corpo através de nanismos insulares em pelo menos dois grupos: Myotragus e Hippopotamus lemerlei.\n[…]\nA fauna de Flores apresentava como característica um alto endemismo, com baixa riqueza de espécies. Essas espécies apresentavam ambos gigantismo e nanismo, ocupando os nichos ecológicos disponíveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Crânio Negro",
      "descricao": "Crânio fóssil de Paranthropus aethiopicus com cerca de 2,5 milhões de anos, achado em 1985 a oeste do lago Turkana, no Quênia."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Crânio Negro, fóssil de hominídeo achado no Quênia em 1985, ganhou essa cor escura por absorver que elemento do solo?",
    "resposta": "Manganês",
    "distratores": [
      "Ferro",
      "Enxofre",
      "Chumbo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_Skull"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_Skull",
        "situacao": "ok",
        "texto": "KNM-WT 17000 (also known as \"The Black Skull\") is a fossilized adult skull of the species Paranthropus aethiopicus. It was discovered in West Turkana, Kenya by Alan Walker in 1985. Estimated to be 2.5 million years old, the fossil is an adult with an estimated cranial capacity of 410 cc.\n[…]\nThe fossil's characteristics include a robust build with a prominent sagittal crest. Its distinct coloration is due to the high manganese content of the material it was embedded in. This fossilized cranium's face projects far outward from the forehead, has wide flared zygomatic arches, and has a large sagittal crest. The molar and premolar roots in the jaw are indicative of this early human having massive cheek teeth; an adaptation for heavy chewing.\n[…]\nIt is the only known adult skull of the species.\n[…]\nWhile its relationship to other fossil hominin taxa was not immediately clear at the time of its discovery, further studies have suggested it is a possible ancestor of two species: Paranthropus boisei, of east Africa, and Paranthropus robustus, of South Africa.\n[…]\nList of fossil sites (with link directory)\n[…]\nList of hominina (hominin) fossils (with images)\n[…]\nMedia related to KNM-WT 17000 at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Velho de La Chapelle",
      "descricao": "Esqueleto de Neandertal idoso achado em 1908 em La Chapelle-aux-Saints, na França, que serviu de base para a imagem do Neandertal curvado."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Velho de La Chapelle inspirou a imagem do Neandertal curvado e desajeitado. Mais tarde se viu que a postura do esqueleto se devia a quê?",
    "resposta": "Artrite",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Chapelle-aux-Saints_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Chapelle-aux-Saints_1",
        "situacao": "ok",
        "texto": "La Chapelle-aux-Saints 1 (\"The Old Man\") is an almost-complete male Neanderthal skeleton discovered in La Chapelle-aux-Saints, France by A. and J. Bouyssonie, and L. Bardon in 1908.\n[…]\nThe remains were first studied by Marcellin Boule, whose reconstruction of Neanderthal anatomy based on la Chapelle-aux-Saints material shaped popular perceptions of the Neanderthals for over thirty years. The La Chapelle-aux-Saints specimen is typical of \"classic\" Western European Neanderthal anatomy. It is estimated to be about 60,000 years old.\n[…]\nBoule's reconstruction of La Chapelle-aux-Saints 1, published during 1911–1913, depicted Neanderthals with a thrust-forward skull, a spine without curvature, bent hips and knees and a divergent big toe.\n[…]\nThis depiction fitted in well with contemporary evolutionary scenarios in which Neanderthals were not considered to be direct ancestors of modern humans.\n[…]\nIn 1957, the remains were re-examined by Straus and Cave. These researchers depicted Neanderthal anatomy as being much more modern; in particular, their posture and gait was more or less identical to that of modern humans. Straus and Cave attributed Boule's errors to the severe osteoarthritis in the La Chapelle-aux-Saints Neanderthal, although physical anthropologist Erik Trinkaus has suggested that Boule's errors were primarily related to the fragmentary nature of the remains.\n[…]\nLater studies have shown that La Chapelle-aux-Saints 1 did have a number of incisors, canines and premolars in place and therefore would have been able to chew his own food, although perhaps with some difficulty.\n[…]\nList of Neanderthal fossils\n[…]\nMedia related to La Chapelle-aux-Saints 1 at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Dente do siso",
      "descricao": "Terceiro molar humano, o último dente a nascer, em geral no fim da adolescência ou no começo da vida adulta."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os dentes do siso muitas vezes nascem tortos ou ficam presos. Segundo a explicação evolutiva, o que aconteceu com a mandíbula humana para causar isso?",
    "resposta": "Ficou menor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wisdom_tooth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wisdom_tooth",
        "situacao": "ok",
        "texto": "The third molar, commonly called wisdom tooth, is the most posterior of the three molars in each quadrant of the human dentition. The age at which wisdom teeth come through (erupt) is variable, but this generally occurs between late teens and early twenties. Most adults have four wisdom teeth, one in each of the four quadrants, but it is possible to have none, fewer, or more, in which case the ext\n[…]\nMandibular (lower) third molars are the smallest molar teeth in the permanent dentition. The crown usually takes on a rounded rectangular shape that features four or five cusps with an irregular fissure pattern. Roots are greatly reduced in size and can be fused together.\n[…]\nPlatelet-rich fibrin (PRF) is a postoperative method used to heal the alveolar socket following the removal of the mandibular third molar. PRF is a second-generation result of the isolation of platelets, white blood cells, stem cells, and growth factors from blood samples. Studies have shown that when used there are improvements in pain sensations, swelling and a decreased risk of developing dry socket. This method was shown only to reduce symptoms and is not completely preventive.\n[…]\nTo date, there is no clear correlation between the use of PRF after a mandibular third molar removal surgery and the recovery of jaw spasms, bone restoration, and soft tissue healing. Further studies with larger study samples are needed to validate current theories.\n[…]\nTemporary and permanent inferior alveolar nerve (IAN) damage is a known complication of the surgical removal of impacted lower third molars, happening in 1 in 85 patients and 1 in 300 extractions, respectively. Studies have shown that certain risk factors may increase the likelihood of IAN damage. Proximity of the impacted third molar root to the mandibular canal, which can be seen in radiographs, has been shown to be a high-risk factor for IAN damage.\n[…]\nHuman evolution"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dente_do_siso",
        "situacao": "ok",
        "texto": "Os terceiros molares (conhecidos popularmente como dentes do siso ou dentes do juízo) são os últimos dentes a se desenvolver no ser humano. Em sua maior parte cada pessoa tem quatro sisos, um em cada canto da boca. Normalmente desenvolvem-se entre os 17 e os 20 anos. Em alguns lugares do Brasil, especialmente na Região Nordeste, é comum chamá-lo dente queiro. Por fim, também pode ser denominados d\n[…]\nOs dentes do siso são terceiros molares vestigiais que ajudaram os ancestrais humanos a moer tecidos vegetais. Pensa-se que os crânios de ancestrais humanos tenham mandíbulas maiores com mais dentes, o que possivelmente ajudou a mastigar folhagem para compensar a falta de capacidade de digerir eficientemente a celulose que compõe a parede celular da planta.\n[…]\nApós o advento da agricultura, há mais de 10 mil anos, dietas humanas macias e pastosas se tornaram a norma, incluindo carboidratos e alimentos de alta energia. Tais dietas geralmente resultam em mandíbulas com crescimento menos avantajado em relação as mandíbulas dos ancestrais humanos paleolíticos e não há espaço suficiente para os dentes do siso.\n[…]\nA função do dente do siso era ajudar na mastigação de raízes, nozes e carnes cruas. Porém devido ao menor desenvolvimento dos maxilares devido a uma dieta contemporânea cada vez mais pastosa, os terceiros molares acabam não encontrando espaço na arcada dentária para crescerem normalmente, ocasionando um apinhamento dos demais dentes, sendo então, muitas vezes, recomendada a sua extração.\n[…]\nEm 1926, Winter classificou os terceiros molares incluso, baseando-se na angulação do longo eixo do dente incluso em relação ao longo eixo do segundo molar, desta forma, temos:\n[…]\nPosição B - a superfície oclusal do dente incluso está entre o plano oclusal e a linha cervical do segundo molar.\n[…]\nPosição C - a superfície oclusal da dente incluso está abaixo da linha cervical do segundo molar.\n[…]\nJuízo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Arrepio",
      "descricao": "Reflexo que contrai pequenos músculos da pele e levanta os pelos, deixando a pele arrepiada no frio ou em emoções fortes."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O arrepio na pele é visto como herança de ancestrais peludos. Para eles, de que servia esse reflexo quando fazia frio?",
    "resposta": "Eriçar os pelos para reter calor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Goose_bumps"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goose_bumps",
        "situacao": "ok",
        "texto": "Goose bumps (in American English), goose pimples (in British English), goosebumps, or gooseflesh are the bumps on a person's skin at the base of body hairs which may involuntarily develop when a person is tickled, cold or experiencing strong emotions such as fear, euphoria or sexual arousal.\n[…]\nThe formation of goose bumps in humans under stress is considered by some to be a vestigial reflex, though visible piloerection is associated with changes in skin temperature in humans. The reflex of producing goose bumps is known as piloerection or the pilomotor reflex, or, more traditionally, horripilation. It occurs in many mammals; a prominent example is porcupines, which raise their quills when threatened, or sea otters when they encounter sharks or other predators.\n[…]\nMedications and herbal supplements that affect body temperature and blood flow may cause piloerection. For example, one of the common reported side effects of the intake of yohimbine is piloerection.\n[…]\nPiloerection is one of the signs of opioid withdrawal. The term \"cold turkey\" meaning abrupt withdrawal from a drug, may derive from the goose bumps that occur during abrupt withdrawal from opioids; this resembles the skin of a refrigerated plucked turkey.\n[…]\nAn unknown proportion of people may consciously initiate the sensation and physiological signs of piloerection. The phenomenon is discovered spontaneously, appearing to be innate, and is not known to be possible to learn or acquire. Those with the ability frequently are unaware that it is not possible for everyone. The ability appears to correlate with personality traits associated with openness to experience."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arrepio_%28anatomia%29",
        "situacao": "ok",
        "texto": "A pele de galinha ou arrepio é uma manifestação da pele humana como reação ao frio, às emoções ou irritação da pele, fundamentalmente devida ao complexo pilomotor. A contração do músculo eretor do pelo deixa o folículo ereto, elevando a região na base do pelo de modo que a pele ao redor parece mais baixa.\n[…]\nEsta camada realiza as funções de alimentação, desassimilação e intercâmbio calórico. É a \"zona metabólica\" onde se encontram as glândulas sudoríparas, o tecido adiposo, os folículos pilosos (sede de uma intensa proliferação) e uma musculatura fina, que quando se contrai produz a chamada \"pele de galinha\" e que habitualmente provoca a ereção dos pelos do corpo.\n[…]\nEste fenómeno é produzido por um diminuto grupo muscular chamado musculus erector pili ou músculo horripilador, situado junto ao folículo piloso. A pele de galinha produz-se por estímulos como o frio ou uma emoção. Daí, o músculo arrector contrai-se e o pêlo eriça-se, fenómeno que se chama o reflexo pilomotor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Homo erectus",
      "descricao": "Espécie humana extinta que surgiu na África há cerca de dois milhões de anos e se espalhou pela Ásia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o Homem de Java, o Homem de Pequim e o Menino de Turkana têm em comum?",
    "resposta": "São da espécie Homo erectus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_erectus",
      "https://en.wikipedia.org/wiki/Turkana_Boy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus ( lit. 'upright man') is an extinct species of archaic human from the Pleistocene, spanning nearly 2 million years. It is the first human species to evolve a humanlike body plan and gait, to leave Africa and colonize Asia and Europe, and to wield fire. Some populations of H. erectus were ancestors of later human species, including H. heidelbergensis—the last common ancestor of modern \n[…]\nMost H. erectus sensu lato specimens date to 1 to 1.8 million years ago in the Early Pleistocene before giving way to descendant species. The classification of Middle Pleistocene Homo has been a controversial topic, termed \"the muddle in the middle\". H. erectus sensu stricto persisted much longer than sensu lato, with the youngest population (H. e. soloensis) dating to 108,000 to 117,000 years ago in Late Pleistocene Java.\n[…]\nThe rest of the body is primarily understood by three partial skeletons from the Kenyan Lake Turkana site, notably Turkana Boy. Other postcranial fossils (all bones aside from the skull) attributed to H. erectus are not associated with a skull, making attribution unverifiable. Though the body plan of earlier Homo is poorly understood, H. erectus is usually characterized as the first Homo species with a human body plan, distinct from non-human apes.\n[…]\nHomo naledi\n[…]\nAntón, S. C. (2003). \"Natural history of Homo erectus†\". American Journal of Biological Anthropology. 122 (S37): 126–170. Bibcode:2003AJPA..122S.126A. doi:10.1002/ajpa.10399. PMID 14666536.\n[…]\nAncient Homo erectus teeth from China yield protein variants seen in Denisovans-and us, Science News, 13 May 2026\n[…]\nHomo erectus Origins – Exploring the Fossil Record – Bradshaw Foundation\n[…]\nHomo erectus – The Smithsonian Institution's Human Origins Program\n[…]\nPossible co-existence with Homo Habilis – BBC News\n[…]\nThe Age of Homo erectus – Interactive Map of the Journey of Homo erectus out of Africa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Turkana_Boy",
        "situacao": "ok",
        "texto": "Turkana Boy, also called Nariokotome Boy, is the name given to fossil KNM-WT 15000, a nearly complete skeleton of a Homo erectus youth who lived 1.5 to 1.6 million years ago. This specimen is the most complete Homo erectus skeleton ever found. Some authorities designate it as Homo ergaster.\n[…]\nAlthough the specimen is largely considered male due to the shape of the pelvis, the sex is ultimately undetermined due to its prepubescent age. Estimates of the age at death depend on whether the maturity stage of the teeth or skeleton is used, and whether that maturity is compared to that of Homo sapiens or to chimpanzees. A key factor is that modern humans have a marked adolescent growth spurt, whereas chimpanzees do not.\n[…]\nThe specimen comprises 108 bones, making it the most complete early human skeleton discovered. A 2018 study estimates that he was 154 cm (5 ft 1 in) tall and weighed 51–54 kg (112–119 lb) when he died. In adulthood, Turkana Boy might have reached 160–178 cm (5 ft 3 in – 5 ft 10 in) tall and massed 60–83 kg (132–183 lb). The pelvis is narrower than in Homo sapiens, which is most likely for more efficient upright walking.\n[…]\nThe fossil skeleton and other fossil evidence, such as Acheulean stone tools, prompt the majority of scientists to conclude that Homo erectus – unlike their more primitive ancestors – became efficient hunters. The social structure would probably have become more complex with a larger brain volume; the Broca's area of the brain allows speech and is noted by a slight slant on the cranium. Turkana Boy's thoracic vertebrae are narrower than in Homo sapiens.\n[…]\nAlan Walker; Richard Leakey, eds. (1993). Nariokotome Homo erectus Skeleton. ISBN 0-674-60075-4. – Technical papers\n[…]\nCelebrating the Turkana Human - Google Doodles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus é uma espécie extinta de hominínio que evoluiu na África e viveu há entre 1,8 milhões de anos e 100-200 mil anos (Pleistoceno inferior e médio). seus espécimes estão entre os primeiros membros reconhecíveis do gênero Homo. H. erectus foi o primeiro ancestral humano a se espalhar pela Eurásia, com uma distribuição continental que se estende da Península Ibérica até a ilha de Java, na I\n[…]\nO \"Homem de Wushan\" foi proposto como Homo erectus wushanensis, mas agora acredita-se que seja baseado em fragmentos fossilizados de um macaco não hominídeo extinto. Desde sua descoberta em 1893 (homem de Java), tem havido uma tendência na paleoantropologia de reduzir o número de espécies propostas de Homo, a ponto de H. erectus incluir todas as formas iniciais (Paleolítico inferior) de Homo suficientemente derivadas de H. habilis e distinto do H.\n[…]\nHomo floresiensis\n[…]\nMeganthropus, baseado em fósseis encontrados em Java, datado entre 1,4 e 0,9 Ma, foram provisoriamente agrupados como H. erectus em contraste com as interpretações anteriores dele como uma espécie gigante de humanos primitivos embora a literatura mais antiga tenha colocado os fósseis totalmente fora do gênero Homo. No entanto, Zanolli et al. (2019) julgou que Meganthropus é um gênero distinto de macacos extintos.\n[…]\nAlém disso, um estudo da Universidade Nacional Australiana, publicado na revista científica PLoS One em 2018, defende que \"preguiça\" do Homo erectus aliada à incapacidade de se adaptar às alterações climáticas desempenhou um papel determinante na extinção desta espécie, com base em achados obtidos em escavações que datam de 2014 em Saffaqah, na Arábia Saudita.\n[…]\nNovas evidências apontam que os ossos da caixa craniana do Homo erectus não são particularmente espessos, como se pensava anteriormente. Testes revelaram que nem o Homo erectus asiático nem o africano possuem esses ossos cranianos especialmente grandes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Homo erectus",
      "descricao": "Espécie humana extinta que surgiu na África há cerca de dois milhões de anos e se espalhou pela Ásia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Considerando todos os seus fósseis, a espécie Homo erectus existiu por aproximadamente quanto tempo?",
    "resposta": "Quase 2 milhões de anos",
    "distratores": [
      "Cerca de 100 mil anos",
      "Cerca de 500 mil anos",
      "Cerca de 5 milhões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_erectus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus ( lit. 'upright man') is an extinct species of archaic human from the Pleistocene, spanning nearly 2 million years. It is the first human species to evolve a humanlike body plan and gait, to leave Africa and colonize Asia and Europe, and to wield fire. Some populations of H. erectus were ancestors of later human species, including H. heidelbergensis—the last common ancestor of modern \n[…]\nH. erectus evolved in Africa from a population of H. habilis and they coexisted for about half a million years. During this time interval, H. erectus populations could display a mix of more \"classically erectus\" or \"classically habilis\" cranial anatomy and a wide range of brain volumes. The oldest identified H. erectus specimen is a 2.04 million year old skull, DNH 134, from Drimolen, South Africa, coexisting with the australopithecine Paranthropus robustus. H.\n[…]\nerectus is usually considered the first hominin to leave Africa, stone tools that may date to as far back as 2.48 and 2.1 million years ago (from Zarqa Valley, Jordan, and Shangchen, China, respectively) could indicate that an earlier hominin species left Africa. Since H. erectus was first defined in East Asia, those populations are sometimes distinguished as H. erectus sensu stricto (\"in the strict sense\"), and African and West Eurasian populations as H.\n[…]\nThe dimensions of a 1.8 million years old adult female H. e. ergaster pelvis from Gona, Ethiopia, suggests that she would have been capable of birthing children with a maximum prenatal brain size of 315 cc (19.2 cu in), about 30–50% of adult brain size, falling between chimpanzees (~40%) and modern humans (28%).\n[…]\nOn the other hand, despite the cochlear (ear) anatomy of Sangiran 2 and 4 retaining several traits reminiscent of australopithecines, the hearing range may have included the higher frequencies used to discern speech.\n[…]\nHomo naledi"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus é uma espécie extinta de hominínio que evoluiu na África e viveu há entre 1,8 milhões de anos e 100-200 mil anos (Pleistoceno inferior e médio). seus espécimes estão entre os primeiros membros reconhecíveis do gênero Homo. H. erectus foi o primeiro ancestral humano a se espalhar pela Eurásia, com uma distribuição continental que se estende da Península Ibérica até a ilha de Java, na I\n[…]\nFranz Weidenreich forneceu grande parte da descrição detalhada deste material em várias monografias publicadas na revista Palaeontologica Sinica (Série D). Quase todos os espécimes originais foram perdidos durante a Segunda Guerra Mundial durante uma tentativa de contrabando para fora da China. No entanto, os moldes foram feitos por Weidenreich e residem no Museu Americano de História Natural na cidade de Nova York e no Instituto de Paleontologia e Paleoantropologia de Vertebrados em Pequim.\n[…]\nHomo erectus yuanmouensis (Homem de Yuanmou)\n[…]\nA espécie Homo erectus foi a espécie do gênero Homo que por mais tempo existiu, tendo sobrevivido por quase 2 milhões de anos. Em contraste, os Homo sapiens surgiram por volta de 300 mil anos atrás, um terço do tempo que os Homo erectus habitaram a Terra.\n[…]\nAnálises genéticas sugerem que alta atividade do receptor de melanocortina 1, que produziria pele escura, data de aproximadamente 1,2 Ma. Isso poderia indicar a data da evolução da falta de pêlos, já que a falta de pêlos do corpo poderia deixar a pele exposta à radiação ultravioleta.\n[…]\nEstudos sugerem que o dimorfismo sexual alcançou níveis próximos aos dos humanos modernos em torno do tempo do Homo erectus (há 2 a 0,5 milhões de anos). Sugere-se que os primeiros Homininae eram dimórficos e que isso diminuiu ao longo da evolução do gênero Homo, correlacionando com os seres humanos se tornando mais monogâmicos, enquanto os gorilas, que vivem em haréns, mostram um grande grau de dimorfismo sexual.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Teoria da origem africana recente",
      "descricao": "Modelo científico segundo o qual o Homo sapiens surgiu na África e depois se espalhou pelos outros continentes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A teoria de que o Homo sapiens surgiu na África e depois se espalhou pelo mundo tem, em inglês, o mesmo nome de que filme de 1985 com Meryl Streep?",
    "resposta": "Entre Dois Amores",
    "fonte": [
      "https://en.wikipedia.org/wiki/Recent_African_origin_of_modern_humans",
      "https://en.wikipedia.org/wiki/Out_of_Africa_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Recent_African_origin_of_modern_humans",
        "situacao": "ok",
        "texto": "The recent African origin of modern humans or the \"Out of Africa\" theory (OOA) holds that present-day humans outside Africa descend mainly from a single expansion of anatomically modern humans (Homo sapiens) from Africa about 70,000–50,000 years ago. It is the most widely accepted paleo-anthropological model of the geographic origin and early migration of the human species.\n[…]\nThis expansion follows the earlier expansions of hominins out of Africa, accomplished by Homo erectus and then Homo neanderthalensis.\n[…]\n\"Recent African origin\", or Out of Africa II, refers to the migration of anatomically modern humans (Homo sapiens) out of Africa after their emergence at c. 300,000 to 200,000 years ago, in contrast to \"Out of Africa I\", which refers to the migration of archaic humans from Africa to Eurasia from before 1.8 and up to 0.5 million years ago. Omo-Kibish I (Omo I) from southern Ethiopia is the oldest anatomically modern Homo sapiens skeleton currently known\n[…]\nThe \"recent African origin\" of modern humans means \"single origin\" (monogenism) and has been used in various contexts as an antonym to polygenism. The debate in anthropology had swung in favour of monogenism by the mid-20th century. Isolated proponents of polygenism held forth in the mid-20th century, such as Carleton Coon, who thought as late as 1962 that H. sapiens arose five times from H. erectus in five places.\n[…]\nThe historical alternative to the recent origin model is the multiregional origin of modern humans, initially proposed by Milford Wolpoff in the 1980s. This view proposes that the derivation of anatomically modern human populations from H. erectus at the beginning of the Pleistocene 1.8 million years BP, has taken place within a continuous world population. The hypothesis necessarily rejects the assumption of an infertility barrier between ancient Eurasian and African populations of Homo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Out_of_Africa_(film)",
        "situacao": "ok",
        "texto": "Out of Africa is a 1985 American epic romantic drama film directed and produced by Sydney Pollack, and starring Meryl Streep and Robert Redford. The film is based loosely on the 1937 autobiographical book Out of Africa written by Isak Dinesen (the pseudonym of Danish author Karen Blixen), with additional material from Dinesen's 1960 book Shadows on the Grass and other sources.\n[…]\nAudrey Hepburn was Pollack's first choice but Meryl Streep landed the part by showing up for her meeting with the director wearing a low-cut blouse and a push-up bra, as Pollack had originally thought the actress did not have enough sex appeal for the role.\n[…]\nOn review aggregator Rotten Tomatoes, the film holds an approval rating of 62% based on 90 reviews, with an average rating of 6.90/10. The website's critical consensus reads: \"Though lensed with stunning cinematography and featuring a pair of winning performances from Meryl Streep and Robert Redford, Out of Africa suffers from excessive length and glacial pacing.\" Metacritic reports a score of 69 out of 100 based on 18 critics, indicating \"generally favorable reviews\".\n[…]\nSheila Benson of the Los Angeles Times wrote that the film \"seems to be just the thing for famished culture mavens at Christmastime. Unfortunately, and through no fault of Meryl Streep, there doesn't seem to be enough electricity generated out there in Africa to power a love story 2½ hours long\".\n[…]\nReviewing the film in 2009, James Berardinelli wrote: \"Watching Out of Africa a quarter of a century after its release, it's almost impossible to guess how it won the Oscar for Best Picture ... Sydney Pollack's direction is quietly competent and the acting by Meryl Streep and Robert Redford is top notch. But the lazy story is little more than an ordinary melodrama that simmers without ever reaching a boil.\n[…]\nOut of Africa at Box Office Mojo\n[…]\nOut of Africa at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hip%C3%B3tese_da_origem_%C3%BAnica",
        "situacao": "ok",
        "texto": "Hipótese da origem única (no inglês recent single-origin hypothesis, ou RSOH), também chamada de Modelo \"Fora da África\" (no Inglês \"Out of Africa\", ou OOA), Hipótese da Substituição ou Origem Recente Africana (no inglês Recent African Origin, ou RAO) é o modelo da Paleoantropologia mais amplamente aceito para a origem humana, corroborado por evidências fósseis, genéticas e linguísticas, que indic\n[…]\nA Origem Recente Africana, ou RAO, do inglês Recent African Origin, e, posteriormente, a dispersão global dos humanos modernos tem três pilares de evidências: a) dados fósseis de humanos modernos e  não-modernos, b) análise genética, estudo do genoma de pessoas viventes atualmente, bem como dos fósseis previamente mencionados, e c) dados arqueológicos - artefatos, por exemplo, coletados em diferentes épocas e partes do mundo.\n[…]\nAs espécies H. neanderthalensis e H. denisova divergiram de H. sapiens a partir de um ancestral comum (provavelmente representado por H. heidelbergensis ou H. rhodesiensis) que migrou da África a aproximadamente 500 mil anos atrás, dando origem aos Neandertais na Europa e Denisovanos na Ásia. Quando os Homo sapiens modernos se expandiram pelo mundo após 75 mil anos atrás encontraram esses outros hominínios, o que resultou em eventos de hibridação entre essas espécies.\n[…]\nsapiens e outras espécies do gênero Homo, quanto isso teria influenciado o caminho evolutivo de nossa espécie e de que forma isso se adequa aos diferentes modelos para a origem humana, sendo uma posição bem balanceada face às novas evidências se apontar para um modelo que mantém a Origem Africana Recente como principal contribuidora das características humanas modernas e se adiciona o que pode ser chamado de \"Modelo da Origem Africana Recente + Hibridação\" ou \"Modelo da Substituição com vazamento\".\n[…]\nModern Men Trace Ancestry to African Migrants, Science, 11 de maio de 2001",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Julgamento de Scopes",
      "descricao": "Processo judicial de 1925, em Dayton, Tennessee, contra o professor John Scopes por ensinar a evolução humana numa escola pública."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que filme de 1960, estrelado por Spencer Tracy, levou ao cinema uma versão do Julgamento do Macaco, de 1925?",
    "resposta": "O Vento Será Tua Herança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inherit_the_Wind_(1960_film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inherit_the_Wind_(1960_film)",
        "situacao": "ok",
        "texto": "Inherit the Wind is a 1960 American drama film directed by Stanley Kramer and based on the 1955 play of the same name written by Jerome Lawrence and Robert Edwin Lee. It stars Spencer Tracy as lawyer Henry Drummond and Fredric March as his friend and rival Matthew Harrison Brady. It also features Gene Kelly, Dick York, Harry Morgan, Donna Anderson, Claude Akins, Noah Beery Jr., Florence Eldridge, \n[…]\nInherit the Wind is a parable that fictionalizes the 1925 Scopes \"Monkey\" Trial as a means to discuss McCarthyism. Written in response to the chilling effect of the McCarthy era investigations on intellectual discourse, the film (like the play) is critical of creationism.\n[…]\nKramer offered the role of Henry Drummond to Spencer Tracy, who initially turned it down. Kramer then sought March, Kelly, and Eldridge as co-stars, and Tracy eventually agreed to make the film. However, none of the other co-stars had been signed at the time; Tracy was the first. Once Tracy signed on, the others signed too.\n[…]\nInherit the Wind is a fictionalized account of the 1925 Scopes \"Monkey\" Trial, which took place between July 10 and July 21, 1925, and resulted in John T. Scopes's conviction for teaching Darwinism, Charles Darwin's theory of evolution, to a high school science class, contrary to a Tennessee state law. The characters of Matthew Harrison Brady, Henry Drummond, Bertram Cates and E. K. Hornbeck correspond to the historical figures of William Jennings Bryan, Clarence Darrow, Scopes, and H. L.\n[…]\nThomas M. Pryor of Variety described it as \"a rousing and fascinating motion picture ... roles of Tracy and March equal Clarence Darrow and William Jennings Bryan who collided on evolution ... a good measure of the film's surface bite is contributed by Gene Kelly as a cynical Baltimore reporter (patterned after Henry L. Mencken) whose paper comes to the aid of the younger teacher played by Dick York."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inherit_the_Wind_%281960%29",
        "situacao": "ok",
        "texto": "Inherit the Wind (bra O Vento Será Tua Herança) é um filme americano de 1960, do gênero drama histórico-biográfico, dirigido por Stanley Kramer, com roteiro de Nedrick Young e Harold Jacob Smith baseado na peça teatral homônima de Jerome Lawrence e Robert Edwin Lee.\n[…]\nA peça Inherit the Wind é uma parábola sobre uma história real ocorrida em 1925, o Scopes \"Monkey\" Trial (\"O Julgamento do Macaco\"), como forma de discutir o então vigente macartismo. J. Lawrence e Robert E. Lee escreveram a história em 1951. Foi refilmado em 1965, 1988 e 1999.\n[…]\nOcorre um julgamento em 1925, no estado norte-americano do Tennessee, em que um professor, Bertram T. Cates, é acusado de desrespeitar uma lei estadual que proíbe o ensino do Darwinismo em escolas públicas. \"Monkey Trial\" (O Julgamento do Macaco), como ficou conhecido, teve repercussão mundial, mediante uma batalha travada entre os advogados de acusação e a defesa, que foi impedida pelo juiz de apresentar cientistas como testemunhas em favor da teoria da evolução.\n[…]\nO julgamento durou 11 dias e foi o primeiro a ser transmitido pelo rádio.\n[…]\nSpencer Tracy   .... Henry Drummond",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Erasmus Darwin",
      "descricao": "Médico, poeta e naturalista inglês do século dezoito que escreveu sobre a transformação dos seres vivos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Ainda no século dezoito, o médico e poeta inglês Erasmus Darwin já escrevia sobre a evolução dos seres vivos. Quem ele era na família de Charles Darwin?",
    "resposta": "Avô paterno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Erasmus_Darwin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Erasmus_Darwin",
        "situacao": "ok",
        "texto": "Erasmus Robert Darwin (12 December 1731 – 18 April 1802) was an English polymath active as a physician, physiologist, botanist, biologist, physicist, metaphysician, inventor and poet who is commonly associated with the Midlands Enlightenment in addition to British abolitionism.\n[…]\nDarwin's most important scientific work, Zoonomia (1794–1796), contains a system of pathology and a chapter on 'Generation'. In the latter, he anticipated some of the views of Jean-Baptiste Lamarck, which foreshadowed the modern theory of evolution. Erasmus Darwin's works were read and commented on by his grandson Charles Darwin the naturalist. Erasmus Darwin based his theories on David Hartley's psychological theory of associationism.\n[…]\nErasmus Darwin was familiar with the earlier proto-evolutionary thinking of James Burnett, Lord Monboddo, and cited him in his 1803 work Temple of Nature.\n[…]\nErasmus Darwin, A Botanical Society at Lichfield. The Families of Plants with their natural characters...Translated from the last edition of Linnaeus' Genera Plantarum. 1787, Lichfield, J. Jackson, for J. Johnson, London.\n[…]\nDarwin, Erasmus (1797). A plan for the conduct of female education, in boarding schools, private families, and public seminaries. By Erasmus Darwin, M.D. F.R.S. author of Zoonomia, and of The botanic garden; To which are added, Rudiments of taste, in a series of letters from a mother to her daughters (4to, 128 pages). Derby: J. Johnson. Retrieved 5 March 2015. (last two leaves contain a book list, an apology for the work, and an advert for \"Miss Parkers School\")\n[…]\n\"Preface and 'a preliminary notice'\" by Charles Darwin in Ernst Krause, Erasmus Darwin (1879)\n[…]\nLetter from Erasmus Darwin to Dr. William Withering at Mount Holyoke College Archived 2 June 2015 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Erasmus_Darwin",
        "situacao": "ok",
        "texto": "Erasmus Darwin (Elston, 12 de dezembro de 1731 – Breadsall, 18 de abril de 1802) foi um médico inglês que escreveu, para além de poesia, uma extensa obra de carácter científico sobre temas de medicina e botânica. Viveu em Lichfield e em Derby, Inglaterra. Foi um dos fundadores da Sociedade Lunar (Lunar Society). Era membro da família Darwin — Wedgwood, sendo o avô paterno de Charles Darwin e avô m\n[…]\nSua obra de destaque, Zoonomia, de 1792, abordava aspectos acerca da evolução - a transmutação das espécies - tendo antecipado os mecanismos de seleção, sendo grandemente admirada mais tarde por seus netos, Charles Darwin e Francis Galton. Ele teve muitos filhos e um deles Robert Darwin, teve com sua esposa Mary Howard, e Robert é pai de Charles Darwin.\n[…]\nErasmus Darwin, A Botanical Society at Lichfield. The Families of Plants with their natural characters...Translated from the last edition of Linnaeus' Genera Plantarum. 1787, Lichfield, J. Jackson, for J. Johnson, Londres.\n[…]\nDarwin, Erasmus (1797). A plan for the conduct of female education, in boarding schools, private families, and public seminaries. By Erasmus Darwin, M.D. F.R.S. author of Zoonomia, and of The botanic garden. ; To which are added, Rudiments of taste, in a series of letters from a mother to her daughters. ; Embellished with an elegant frontispiece. (4to, 128 pages). Derby: J. Johnson.\n[…]\nErasmus Darwin, The Temple of Nature; or, The Origin of Society. 1803, Londres, J. Johnson.\n[…]\nDESMOND, A. & MOORE, J., 1994. Darwin - The life of a tormented evolucionist. W.W. Norton & Company, New York.\n[…]\nA Sociedade Lunar, os construtores do futuro e Erasmus Darwin.\n[…]\nGeraldo Salgado Neto (2009). «Erasmus Darwin e a árvore da vida» (PDF). Revista Brasileira de História da Ciência. 2 (1): 96-103. Consultado em 30 de agosto de 2011. Arquivado do original (pdf) em 12 de novembro de 2010",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "A Guerra do Fogo",
      "descricao": "Filme franco-canadense de 1981, dirigido por Jean-Jacques Annaud, sobre tribos de humanos pré-históricos em busca do fogo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o filme A Guerra do Fogo, de 1981, sobre humanos pré-históricos, deve ao zoólogo Desmond Morris, autor de O Macaco Nu?",
    "resposta": "Ele criou os gestos dos personagens",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quest_for_Fire_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quest_for_Fire_(film)",
        "situacao": "ok",
        "texto": "Quest for Fire (French: La Guerre du feu) is a 1981 science fantasy adventure film set in the Paleolithic era, directed by Jean-Jacques Annaud, written by Gérard Brach and starring Everett McGill, Ron Perlman, Nameer El-Kadi and Rae Dawn Chong. The Canadian-French co-production is a film adaptation of the 1911 Belgian novel The Quest for Fire by J.-H. Rosny.\n[…]\nС. J. Henderson reviewed Quest for Fire for Pegasus magazine and stated that \"Quest for Fire is, possibly, the best science-fact film ever made. Although it may draw considerable flack from blind and fearful organizations such as the Moral Majority or the Catholic Church, it should be able to weather any attack. Simplistic and yet brilliant, it is the most optimistic film released so far in the '80s. Considering the way things are, it wasn't a bad decade during which to release it.\"\n[…]\nThe film was nominated for six César Awards in 1981, including Best Screenplay, Dialogue or Adaptation for Gérard Brach, Best Music Written for a Movie for Philippe Sarde, Best Cinematography for Claude Agostini, and Best Sets for Brian Morris, winning those for Best Film and Best Director. In 1983 it won the Academy Award for Best Makeup. Also in 1983, it won in five categories in the Genie Awards.\n[…]\nAfter the surprise box office hit of Quest for Fire, several film productions followed to mimic its documentary style approach to prehistory. These included some Italian B-movies that tried to capitalize on the barbarian/prehistoric trend like Lucio Fulci's Conquest (1983) and Umberto Lenzi's Ironmaster (1983), though these films had a strong fantasy orientation. Iceman (1984) focused on scientific realism though set in the modern era.\n[…]\nList of historical period drama films and series\n[…]\nQuest for Fire at IMDb\n[…]\nQuest for Fire at Box Office Mojo\n[…]\nQuest for Fire at Rotten Tomatoes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Guerra_do_Fogo",
        "situacao": "ok",
        "texto": "La Guerre du feu (bra/prt: A Guerra do Fogo) é um filme franco-canado-estadunidense de 1981, dos gêneros drama, ação e aventura, dirigido por Jean-Jacques Annaud, com roteiro de Gérard Brach baseado no romance La Guerre du feu, de J.-H. Rosny aîné.\n[…]\nCom locações na Escócia, Islândia, Quênia e Canadá, o filme é ambientado na Europa paleolítica e aborda a luta pelo controle do fogo pelos humanos primitivos.\n[…]\nAnthony Burgess e Desmond Morris foram responsáveis pela linguagem criada especialmente para o filme.\n[…]\nNa pré-história, a tribo de Ulam acredita que o fogo é sobrenatural. Quando um ataque apaga sua única fonte de calor, três guerreiros saem em busca de outra chama. Nessa jornada, eles conhecem os Ivakas, que são mais avançados e dominam o fogo. Mas a aquisição desse bem místico não será fácil.\n[…]\nA trilha sonora do filme foi composta pelo músico francês Philippe Sarde.\n[…]\n\"La Guerre Du Fue\" - Theme d'Amour)\" - 05:04\n[…]\nEm um ensaio para a revista American Anthropologist, o professor de linguística da Universidade Brown, Philip Lieberman, descreveu como \"absurda\" a mistura de diferentes níveis de avanço entre diferentes tribos que vivem próximas. Lieberman apontou que \"seria muito improvável 80.000 anos atrás\" que os humanos ainda exibissem características semelhantes a macacos, ao mesmo tempo em que a tribo Ivaka era retratada como tendo \"uma cultura de aldeia que provavelmente seria 10.000 anos atrás\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Proconsul",
      "descricao": "Gênero extinto de primata africano de cerca de vinte milhões de anos, próximo da origem dos grandes símios."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Proconsul, primata africano de cerca de vinte milhões de anos, tem nome inspirado em Consul, famoso em Londres no começo do século vinte. Quem era Consul?",
    "resposta": "Um chimpanzé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Proconsul_(primate)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Proconsul_(primate)",
        "situacao": "ok",
        "texto": "Proconsul is an extinct genus of primates that existed from 21 to 17 million years ago during the Miocene epoch. Fossil remains are present in Eastern Africa, including Kenya and Uganda. Four species have been classified to date: P. africanus, P. gitongai, P. major and P. meswae. The four species differ mainly in body size. Environmental reconstructions for the Early Miocene Proconsul sites are st\n[…]\nThe gibbon and great apes, including humans, are held in evolutionary biology to share a common ancestral lineage, which may have included Proconsul. Its name, meaning \"before Consul\" (Consul being a certain chimpanzee that, at the time of the genus's discovery, was on display in London), implies that it is ancestral to the chimpanzee. It might also be ancestral to the rest of the apes.\n[…]\nThe first specimen, a partial jaw discovered in 1909 by a gold prospector at Koru, near Kisumu in western Kenya, was also the oldest fossil hominoid known until recently, and the first fossil mammal ever found in sub-Saharan Africa. The name, Proconsul, was devised by Arthur Hopwood in 1933 and means \"before Consul\" – the name of a famous captive chimpanzee in London. At the time Consul was being used as a circus name for performing chimpanzees.\n[…]\nHopwood in 1931 had discovered the fossils of three individuals while expeditioning with Louis Leakey in the vicinity of Lake Victoria. The Consul that he selected to use in the name was neither of the ones mentioned above, but another located in the London Zoo. Consul is being used Linnaean-style to symbolize the chimpanzee. Proconsul is therefore \"ancestral to the Chimpanzee\" in Hopwood's words. He also added africanus as the specific name.\n[…]\nThe family of Proconsulidae was first proposed by Louis Leakey in 1963, a decade after he and Wilfrid Le Gros Clark had defined africanus, nyanzae and major. It was not immediately accepted but ultimately prevailed."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Proconsul",
        "situacao": "ok",
        "texto": "Proconsul é um gênero de primatas fósseis que viveram no Mioceno africano, até 18 a 14 milhões de anos. Foram classificadas quatro espécies de procônsules. O principal depósito do Proconsul é o de Rusinga, Quênia. Com os numerosos fragmentos encontrados na África Oriental tem-se podido reconstituir-se esqueletos quase inteiros. Estima-se que seu peso corporal fosse de 10 a 40 kg. Seu habitat seria\n[…]\nProconsul africanus\n[…]\nProconsul major\n[…]\nProconsul meswae\n[…]\nO primeiro espécime, uma mandíbula parcial descoberta em 1909 por um propector de ouro em Koru, no oeste do Quênia, era também o mais antigo fóssil nominóide conhecido até recentemente, e o primeiro fóssil de mamífero encontrado na África sub-Sahariana. O nome, Proconsul, foi atribuído por Arthur Hopwood em 1933 e significa \"antes de Consul.\" Naquela época, o termo Consul era usado como um nome em circo para os chimpanzés.\n[…]\nO Folies Bergère de 1903 em Paris tinha um chimpanzé chamado Consul, posteriormente doado ao Belle Vue Zoo de Manchester, Inglaterra, em 1894. Com sua morte neste ano Ben Brierley escreveu um poema comemorativo homenageando o \"elo perdido\" entre chimpánzés e homens.\n[…]\nHopwood em 1931 tinha descoberto os fósseis de três indivíduos enquanto expedicionando com Louis Leakey nas proximidades do Lago Victoria. O Consul que ele selecionou usar como nome não foi qualquer um dos mencionados acima, mas outro localizado no London Zoo. Consul é usado ao estilo de Linnaeus simbolizando os chimpanzés. Proconsul é consequentemente \"ancestral do chimpanzé\" nas palavras de Hopwood. Ele também acrescentou africanus como nome da espécie. E foi o único conhecido neste período.\n[…]\nA família dos Proconsulidae foi primeiramente proposta por Louis Leakey em 1962, onze anos após ele e Wilfrid Le Gros Clark terem definido africanus, nyanzae e major. Não foi imediatamente aceita mas ultimamente prevaleceu.\n[…]\nProconsul - www.geocities.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Orrorin tugenensis",
      "descricao": "Espécie de hominídeo de cerca de seis milhões de anos, descoberta em 2000 nas colinas Tugen, no Quênia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por ter sido descoberto no ano 2000, no Quênia, o hominídeo Orrorin tugenensis ganhou que apelido?",
    "resposta": "Homem do Milênio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Orrorin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Orrorin",
        "situacao": "ok",
        "texto": "Orrorin is an extinct genus of great ape within the tribe of Hominini from the Miocene Lukeino Formation and Pliocene Mabaget Formation, both of Kenya.\n[…]\nThe name of genus Orrorin (plural Orroriek) means \"original man\" in Tugen, and the epithet of O. tugenensis derives from Tugen Hills in Kenya, where the first fossil was found in 2000.\n[…]\nO. tugenensis shares an early hominin feature in which their iliac blade is flared to help counter the torque of their body weight; this shows that they adapted bipedalism around 6 MYA. These features are shared with many species of Australopithecus. It has been suggested by Pickford that the many features Orrorin shares with modern humans show that it is more closely related to Homo sapiens than to Australopithecus.\n[…]\nThis would mean that Australopithecus would represent a side branch in the homin evolution that does not directly lead to Homo. However, the femora morphology of O. tugenensis shares many similarities with australopithicine femora morphology, which weakens this claim. Another study conducted by Almecija suggested that Orrorin is more closely related to early hominins than to Homo.\n[…]\nAn analysis of the BAR 10020' 00 femur showed that Orrorin is an intermediate between Pan and Australopithecus afarensis. The current prevailing theory is that Orrorin tugenensis is a basal hominin and that bipedalism developed early in the hominin clade and successfully evolved down the human evolutionary tree. While the phylogeny of Orrorin is uncertain, the evidence of the evolution of bipedalism is an invaluable discovery from this early fossil hominin."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Orrorin",
        "situacao": "ok",
        "texto": "O Orrorin era um gênero de hominídeo, assim como boa parte dos gêneros de hominídeo encontra-se extinto. O nome foi dado pelos descobridores que encontraram os fósseis do animal na região de Tugen Hills no Quênia.\n[…]\nO grupo que encontrou esses fósseis em 2000 teve entre seus integrantes Martin Pickford (da Expedição de Paleontologia do Quênia - KPE -da sigla em inglês) e Brigitte Senut do Museu de História Natural de Paris, que afirmaram ser o Orrorin claramente um hominídeo; baseado nisso, sugeriram que a separação entre hominídeos e outros grandes macacos africanos ocorrera há aproximadamente 7 a 9 milhões de anos.\n[…]\nOs fósseis de Orrorin tugenensis não compartilham características derivadas de parentes dos grandes macacos hominóides.\n[…]\nIsso significaria que o Australopithecus representaria um ramo lateral na evolução dos hominídeos que não leva diretamente ao Homo. No entanto, a morfologia do fêmur de O. tugenensis compartilha muitas semelhanças com a morfologia do fêmur da Australopithicina, o que enfraquece essa afirmação. Outro estudo conduzido por Almecija sugeriu que Orrorin está mais intimamente relacionado aos primeiros hominídeos do que ao Homo.\n[…]\nUma análise do fêmur BAR 10020' 00 mostrou que o Orrorin é um intermediário entre Pan e Australopithecus afarensis. A teoria prevalecente atual é que Orrorin tugenensis é um hominídeo basal e que o bipedismo se desenvolveu no início do clado de hominídeo e evoluiu com sucesso na árvore evolutiva humana. É claro que a filogenia de Orrorin é incerta, no entanto, a evidência da evolução do bipedismo é uma descoberta inestimável desse hominídeo fóssil primitivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Mrs. Ples",
      "descricao": "Crânio fóssil de Australopithecus africanus achado em 1947 nas cavernas de Sterkfontein, na África do Sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido Mrs. Ples vem de Plesianthropus, primeiro nome científico dado a esse crânio sul-africano. O que significa esse nome de origem grega?",
    "resposta": "Quase homem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mrs._Ples"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mrs._Ples",
        "situacao": "ok",
        "texto": "Mrs. Ples is the popular nickname for the most complete skull of an Australopithecus africanus ever found in South Africa. Many Australopithecus fossils have been found near Sterkfontein, about 40 kilometres (25 mi) northwest of Johannesburg, in a region of Gauteng (part of the old Transvaal) now designated as the Cradle of Humankind World Heritage Site. Mrs. Ples was discovered by Robert Broom an\n[…]\nThe nickname \"Mrs. Ples\" was coined by Broom's young co-workers. It derives from the scientific name Plesianthropus transvaalensis (near-man from the Transvaal), that Broom initially gave the skull, later subsumed (synonymized) into the species Australopithecus africanus. In scientific publications, the specimen is referred to by its catalogue number, STS 5.\n[…]\nPles, whose cranial capacity is only about 485 cubic centimetres (29.6 cubic inches), was one of the first fossils to reveal that upright walking had evolved well before any significant growth in brain size.\n[…]\nThe paleoanthropologist Prof. Frederick E. Grine has studied the dental morphology of Mrs./Mr. Ples with a view to finally establishing Mrs./Ms. Ples's sex. Using the Computed Tomography (CT) scans of STS 5 from the experiments of Weber et al., (2012) they compared them to CT scans of more recently discovered A. africanus skulls from Sterkfontein. These scans allowed Grine to reconstruct the roots of the teeth, in order to see how the molar and canine teeth developed.\n[…]\nSome experts have suggested that a partial skeleton, known only by its catalogue number of STS 14, which was discovered in the same year, in the same geological deposit and in proximity to Mrs. Ples, may belong to this skull. If correct, this would make Mrs. Ples the South African counterpart to the famous Lucy fossil.\n[…]\nIn 2004, Mrs. Ples was voted 95th in the SABC 3's and e.tv's Great South Africans Top 100 list.\n[…]\nMetadata of STS 5 on NESPOS"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mrs._Ples",
        "situacao": "ok",
        "texto": "Mrs. Ples é o nome popular do mais completo e mais antigo esqueleto da espécie Australopithecus africanus encontrado na África do Sul. Muitos fósseis dessa espécie, que é considerada o parente mais distante do homo sapiens foram localizados no sítio arqueológico de Sterkfontein, por isso é considerado como berço da humanidade e patrimônio mundial. Ples foi descoberta pelo Dr. Robert Broom e John T\n[…]\nO número catalogada para defnição é STS 5. Este esqueleto possuía uma idade estimada entre 2,6 e 2,8 milhões de anos, mas um novo estudo com um novo metodo de datação efetuado em 2022, dá uma estimativa de 3.4 à 3.7 milhões de anos, tornando-se assim mais antigo que lucy.\n[…]\nO apelido Mrs. Ples foi derivado da expressão científica Plesianthropus transvaalensis, inicialmente batizado pelo Dr. Broom.\n[…]\nO sexo do esqueleto, não esta 100% definido, então Mrs. Ples (Senhora Ples) pode de fato ser Mr. Ples (Senhor Ples). Após análises de raio-x das raízes dos dentes de Mrs. Ples sugeriu que trata-se de um adolescente, deixando portanto sombras para que seja denominada como Miss Ples ou Master Ples.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "O Terceiro Chimpanzé",
      "descricao": "Livro de 1991 do americano Jared Diamond sobre a evolução e o futuro da espécie humana."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No livro O Terceiro Chimpanzé, Jared Diamond junta ao chimpanzé comum e ao bonobo uma terceira espécie. Qual?",
    "resposta": "O ser humano",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Third_Chimpanzee"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Third_Chimpanzee",
        "situacao": "ok",
        "texto": "The Third Chimpanzee: The Evolution and Future of the Human Animal is a 1991 book by academic and popular science author Jared Diamond, in which the author explores concepts relating to the animal origins of human behavior. The book follows a series of articles published by Diamond, a physiologist, examining the evidence and its interpretation in earlier treatments of the related species, includin\n[…]\nThe book was released in the United Kingdom in 1991 by Radius under the title The Rise and Fall of the Third Chimpanzee: How Our Animal Heritage Affects the Way We Live and in the United States in 1992 by HarperCollins under the title The Third Chimpanzee: The Evolution and Future of the Human Animal. In 2014, Diamond published an adapted version for young people with Seven Stories Press titled, The Third Chimpanzee for Young People.\n[…]\nDiamond explores the question of how Homo sapiens came to dominate its closest relatives, such as chimpanzees, and why one group of humans (Eurasians) came to dominate others (indigenous peoples of the Americas, for example).\n[…]\nThus the chimp's closest relatives are not the other apes with which it is classed, but the human (see Homininae). In fact, the chimpanzee-human difference is smaller than some within-species distances: e.g. even closely related birds such as the red-eyed and white-eyed vireos differ by 2.9%. Going by genetic differences, humans should be treated as a third species of the genus, Pan (after the common or robust chimpanzee and the bonobo or gracile chimpanzee).\n[…]\nOr possibly the chimpanzee's scientific name should be Homo troglodytes instead of Pan troglodytes. Diamond observes in his book that this would provide food for thought to people passing this side of the bars of a cage with the label Homo.\n[…]\nThe Third Chimpanzee was the recipient of the Royal Society Prize for Science Books and the Los Angeles Times Book Prize in 1992."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Caverna de Shanidar",
      "descricao": "Caverna nos montes Zagros onde foram achados esqueletos de Neandertais, alguns com sinais de sepultamento."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A caverna de Shanidar, famosa por esqueletos de Neandertais e pela polêmica de um enterro com flores, fica em que país?",
    "resposta": "Iraque",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shanidar_Cave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shanidar_Cave",
        "situacao": "ok",
        "texto": "Shanidar Cave (Kurdish: ئەشکەوتی شانەدەر, romanized: Eşkewtî Şaneder, Arabic: كَهَف شانِدَر) is an archaeological site on Bradost Mountain, within the Zagros Mountains in the Erbil Governorate of Kurdistan Region in northern Iraq.\n[…]\nFor many years, Shanidar 4 was thought to provide strong evidence for a Neanderthal burial ritual. Routine soil samples from around the body, gathered for pollen analysis in an attempt to reconstruct the palaeoclimate and vegetational history of the site, were analysed eight years after its discovery.\n[…]\nHowever, there are other lineages from Africa that share this diet and was culturally motivated which may indicate that the Neanderthals in the Shanidar cave may have possibly changed their diet for cultural reasons. In Layer B, dating back to approximately 12,000 years ago, Ralph S. Solecki found numerous snail shells which may indicate the Shanidar maintained this diet for some time.\n[…]\nPomeroy, Emma; Bennett, Paul; Hunt, Chris O.; Reynolds, Tim; Farr, Lucy; Frouin, Marine; Holman, James; Lane, Ross; French, Charles; Barker, Graeme (February 2020). \"New Neanderthal remains associated with the 'flower burial' at Shanidar Cave\". Antiquity. 94 (373): 11–26. doi:10.15184/aqy.2019.207. S2CID 212762342.\n[…]\nStewart, T. D. (1977). \"The Neanderthal Skeletal Remains from Shanidar Cave, Iraq: A Summary of Findings to Date\". Proceedings of the American Philosophical Society. 121 (2): 121–165. JSTOR 986524.\n[…]\nErik Trinkaus, The Shanidar Neanderthals, Academic Press, 1983, ISBN 0-12-700550-1\n[…]\nTrinkaus, Erik; Zimmerman, M. R. (January 1982). \"Trauma among the Shanidar Neandertals\". American Journal of Physical Anthropology. 57 (1): 61–76. doi:10.1002/ajpa.1330570108. PMID 6753598.\n[…]\nShanidar Cave video"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caverna_de_Xanidar",
        "situacao": "ok",
        "texto": "A caverna de Xanidar (em árabe: كَهَف شانِدَر; romaniz.: kahf Xanidar; em curdo: Şaneder ou Zewî Çemî Şaneder) é um sítio arqueológico localizado na montanha Bradoste, no Curdistão iraquiano, no nordeste do Iraque. Ali foram encontrados os  restos de dez neandertais, datados de 35 mil a 65 mil anos atrás.\n[…]\nA caverna também contém dois cemitérios protoneolíticos mais tardios,  um datado de há aproximadamente 10 600 anos, com 35 indivíduos.\n[…]\nO mais conhecido dos neandertais é o Xanidar 1, que sobreviveu a diversos ferimentos durante sua vida, possivelmente devido a cuidados recebidos de outros membros de seu bando, e Xanidar 4, cujo corpo encontrava-se ao lado de uma flor, o que pode ser explicado tanto como ritual de enterro quanto contaminação animal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Abrigo de Cro-Magnon",
      "descricao": "Abrigo rochoso em Les Eyzies, onde foram achados em 1868 esqueletos de Homo sapiens que deram nome aos primeiros humanos modernos da Europa."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os primeiros humanos modernos da Europa ficaram conhecidos como Cro-Magnon, nome do abrigo de pedra onde seus esqueletos foram achados em 1868. Em que país?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abri_de_Cro-Magnon",
      "https://en.wikipedia.org/wiki/European_early_modern_humans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abri_de_Cro-Magnon",
        "situacao": "ok",
        "texto": "Cro-Magnon (  kroh-MAN-yon or  kroh-MAG-nən; French: abri de Cro-Magnon [abʁi d(ə) kʁomaɲɔ̃]; Occitan: abric de Cròsmanhon) is an Aurignacian (Upper Paleolithic) site, located in a rock shelter in the commune of Les Eyzies, Dordogne, southwestern France.\n[…]\nMost notably, it is the site of the discovery of anatomically modern human remains, apparently buried at the site, dated to about 28,000 years ago. The find is also called Cro-Magnon after the name of the rock shelter. Because of its archeological importance, Abri de Cro-Magnon was inscribed on the UNESCO World Heritage List as part of the Prehistoric Sites and Decorated Caves of the Vézère Valley site.\n[…]\nThese \"Cro-Magnon men\" were identified as the prehistoric human species of Europe, as distinct from Neanderthal Man, described a few years earlier by William King based on the Neanderthal 1 fossil discovered in Germany in 1856. Lartet proposed the subspecies name Homo sapiens fossilis  in 1869. The term \"Cro-Magnon Man\" soon came to be used in a general sense to describe the oldest modern people in Europe.\n[…]\nCro-Magnon 1 consists of a skull and partial skeletal remains belonging to a male individual, approximately 40 years old. It is dated to 27,680 ± 270 Before Present (BP). The cranial cavity measures 1,600 cubic centimetres (98 cu in). The capacity of a modern adult anatomically modern human's cranial cavity is 1,200 to 1,700 cubic centimetres (73 to 104 cu in).\n[…]\nCompared to Neanderthals, the skeletons showed the same high forehead, upright posture and slender (gracile) skeleton as modern humans. The other specimens from the site are a female, Cro-Magnon 2, and male remains, Cro-Magnon 3.\n[…]\nCro-Magnon 1: Smithsonian Institution – The Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/European_early_modern_humans",
        "situacao": "ok",
        "texto": "Cro-Magnons or European early modern humans (EEMH) were the first surviving expansion of early modern humans (Homo sapiens) found in Europe and Siberia, continuously occupying the continent possibly from as early as 56,800 years ago. They interacted and interbred with the indigenous Neanderthals (H. neanderthalensis) of Europe and Western Asia, who went extinct 35,000 to 40,000 years ago.\n[…]\nFor 28 modern human specimens from 25,000 to 190,000 years ago, average brain volume was estimated to have been about 1,478 cc (90.2 cu in), and for 13 Cro-Magnons about 1,514 cc (92.4 cu in). In comparison, present-day humans average 1,350 cc (82 cu in), which is notably smaller. This is because the Cro-Magnon brain, though within the variation for present-day humans, exhibits longer average frontal lobe length and taller occipital lobe height.\n[…]\nThe parietal lobes, however, are shorter in Cro-Magnons. It is unclear if this could equate to any functional differences between present-day and early modern humans.\n[…]\nIn 2015, the 40,000-year-old modern human Oase 1 was found to have had 6–9% (point estimate 7.3%) Neanderthal DNA, indicating a Neanderthal ancestor up to four to six generations earlier, but this hybrid Romanian population does not appear to have made a substantial contribution to the genomes of later Europeans. Therefore, it is possible that interbreeding was common between Neanderthals and Cro-Magnons which did not contribute to the present-day genome.\n[…]\nCro-Magnons also made purely symbolic engravings. There are several plaques of bone or antler (referred to as polishers, spatulas, palettes, or knives) which feature series of equidistantly placed notches, most notably the well-preserved 32,000-year-old Blanchard plaque from L'Abri Blanchard, France, which features 24 markings in a seemingly serpentine pattern.\n[…]\nMedia related to Cro-Magnon fossils at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Jemmy Button",
      "descricao": "Nativo yaghan levado à Inglaterra pelo capitão Robert FitzRoy e trazido de volta à sua terra na viagem do Beagle com Darwin."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na viagem do Beagle com Darwin, voltaram para casa três nativos que o capitão FitzRoy tinha levado à Inglaterra. De que região da América do Sul eles eram?",
    "resposta": "Terra do Fogo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jemmy_Button"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jemmy_Button",
        "situacao": "ok",
        "texto": "Orundellico, known as \"Jeremy Button\" or \"Jemmy Button\" or \"Jimmy Button\" (c. 1815–1864), was a member of the Yahgan (or Yámana) people from islands around Tierra del Fuego in modern Chile and Argentina. He was taken to England by Captain FitzRoy in HMS Beagle and became a celebrity there for a period.\n[…]\nIn 1830, Captain Robert FitzRoy, at the command of the first expedition of HMS Beagle, took a group of hostages from the Fuegian people after one of his ship's whaleboats was stolen. Jemmy Button was paid for with a mother of pearl button, hence his name. It is not clear whether his family willingly accepted the sale or he was simply abducted.\n[…]\nOne year later, Captain Fitzroy returned the three surviving Fuegians home. He took with him a young naturalist, Charles Darwin, on what was the second voyage of HMS Beagle.\n[…]\nAfter initial difficulty recalling his language and customs, Orundellico / Jemmy soon shed his European clothes and habits. A few months after his arrival, he was seen emaciated, naked save for a loincloth, and long-haired. Nevertheless, he declined the offer to return to England, which Darwin conjectured was due to the presence of his \"young and nice looking wife\". It appears that he and the others had taught their families some English.\n[…]\nAccording to Julia Voss, the German children's book, Jim Knopf und Lukas der Lokomotivführer by Michael Ende, translated into English as Jim Button and Luke the Engine Driver, was based on Jemmy Button. Ende, who grew up in Nazi Germany, wanted to write a story that provided a contrast to Adolf Hitler's racist ideology and misuse of Darwin's theories of evolution.\n[…]\nA song entitled Jemmy Button is featured on the 2009 Darwin Song Project.\n[…]\nIs mentioned as an analogy in Case 63, Episode 7 \"Jemmy Button\" 2022, Gimlet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jemmy_Button",
        "situacao": "ok",
        "texto": "Orundellico, conhecido como Jeremy Button ou Jemmy Button (1815–1864), foi um nativo fueguino yagane da ilhas da Terra do Fogo, na atual Argentina e Chile. Ele foi levado para a Inglaterra pelo capitão do HMS Beagle Robert FitzRoy e se tornou uma celebridade por certo período.\n[…]\nEm 1830, o capitão Robert Fitzroy no comando da primeira expedição do famoso Beagle, levou um grupo de passageiros indígenas fueguinos depois que um dos barcos foi roubado. Jemmy Button recebeu um pagamento de um botão de madrepérola, e então nomeado com o nome ocidental. Não é claro se sua família aceitou de bom grado a venda de Jemmy ou se simplesmente desistiram de mantê-lo.\n[…]\nOs nomes dos fueguinos dados pela população eram: York Mister, Jemmy Button, Fuegia Basket (uma garota) e Boat Memory. O nome nativo de cada um deles era respectivamente:  el'leparu, o'run-del'lico e yok'cushly. Boat Memory morreu de varíola pouco após sua chegada na Inglaterra, e seu nome yagane se perdeu.\n[…]\nO Beagle chegou em Plymouth após sua primeira expedição em meados de outubro de 1830. Os jornais não tardaram de publicar detalhes dos visitantes yaganes e eles se tornaram celebridades. Em Londres, eles encontraram o Rei Guilherme IV. Fuegia Basket, a jovem garota, recebeu uma touca da própria Rainha Adelaide.\n[…]\nUm ano depois, Fitzroy retornou para a região nativa dos três fueguinos que sobreviveram, custeando o caro percurso. Essa, que seria a segunda expedição do HMS Beagle, trouxe o jovem naturalista Charles Darwin.\n[…]\nEm 1863, o missionário Waite Stirling visitou a Terra do Fogo e restabeleceu contatao com Jemmy; a partir dai as relações como os yaganes melhoraram. Em 1866, após a morte de Jemmy, Stirling pegou um de seus filhos, conhecido por Threeboy, e o levou até a Inglaterra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Tubérculo de Darwin",
      "descricao": "Pequena saliência presente em algumas pessoas, que Charles Darwin interpretou como vestígio herdado de ancestrais."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que parte do corpo humano fica o tubérculo de Darwin, pequena saliência que o naturalista via como herança dos nossos ancestrais?",
    "resposta": "Orelha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Darwin%27s_tubercle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Darwin%27s_tubercle",
        "situacao": "ok",
        "texto": "Darwin's tubercle (or auricular tubercle) is a congenital ear condition which often presents as a thickening on the helix at the junction of the upper and middle thirds.\n[…]\nThis atavistic feature is so called because its description was first published by Charles Darwin in the opening pages of The Descent of Man, and Selection in Relation to Sex, as evidence of a vestigial feature indicating common ancestry among primates which have pointy ears. However, Darwin himself named it the Woolnerian tip, after Thomas Woolner, a British sculptor who had depicted it in one of his sculptures and had first theorised that it was an atavistic feature.\n[…]\nThe gene for Darwin's tubercle was once thought to be inherited in an autosomal dominant pattern with incomplete penetrance, meaning that those who possess the allele (version of a gene) will not necessarily present with the phenotype. However, genetic and family studies have demonstrated that the presence of Darwin's tubercle may be more likely to be influenced by one's environment or developmental accidents than it is by genetics alone.\n[…]\nThere is no clear argument for whether the trait has significance in sexual dimorphism studies or age related studies. In some studies, there is clear data that Darwin's tubercle is not associated with sex. In contrast, others indicate that there is a correlation with sexual dimorphism between men and women, where men tend to have the tubercle more than women in some populations. Two studies indicate that older men tend to have greater expression of Darwin's tubercle than do older women."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tub%C3%A9rculo_de_Darwin",
        "situacao": "ok",
        "texto": "O tubérculo de Darwin (ou tubérculo auricular) é uma condição congênita do ouvido que geralmente se apresenta como um espessamento da hélice na junção dos terços superior e médio.\n[…]\nEssa característica atávica é assim denominada porque sua descrição foi publicada pela primeira vez por Charles Darwin nas páginas de abertura de A Descendência do Homem e Seleção em Relação ao Sexo, como evidência de uma característica vestigial indicando ancestralidade comum entre primatas que têm orelhas pontudas.\n[…]\nA estrutura está presente em aproximadamente 10,4% da população adulta espanhola, 40% dos adultos indianos e 58% das crianças em idade escolar suecas. Este nódulo acuminado representa a ponta da orelha do mamífero. A característica pode ser potencialmente bilateral, ou seja, presente nas duas orelhas ou unilateral, onde está presente em apenas uma orelha. Existem evidências mistas sobre se a expressão bilateral ou unilateral está relacionada à população ou a outros fatores.\n[…]\nAinda não esclarece se a característica tem relação com o dimorfismo sexual. Em alguns estudos, existem dados claros de que o tubérculo de Darwin não está associado ao sexo. Em contraste, outros indicam que existe uma correlação com o dimorfismo sexual entre homens e mulheres, onde os homens tendem a ter mais o tubérculo do que as mulheres em algumas populações. Dois outros estudos indicam que homens mais velhos tendem a ter maior expressão do tubérculo de Darwin do que mulheres mais velhas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Parque Nacional da Serra da Capivara",
      "descricao": "Parque nacional no sudeste do Piauí com centenas de sítios arqueológicos e pinturas rupestres pré-históricas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que arqueóloga franco-brasileira, defensora de uma chegada muito antiga dos humanos às Américas, comandou por décadas as pesquisas na Serra da Capivara, no Piauí?",
    "resposta": "Niède Guidon",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ni%C3%A8de_Guidon",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ni%C3%A8de_Guidon",
        "situacao": "ok",
        "texto": "Niède Guidon (Jaú, 12 de março de 1933 — São Raimundo Nonato, 4 de junho de 2025) foi uma arqueóloga, pesquisadora e professora universitária brasileira.\n[…]\nVoltando ao Brasil, integrando a Missão Arqueológica Franco-Brasileira, uma iniciativa do Museu de História Natural de Paris para desenvolvimento de projetos de arqueologia. Até sua aposentadoria como docente, Niède Guidon seria a líder da missão, composta por pesquisadores brasileiros, franceses e de outros países, assim como assistentes de campo locais. Depois disso, a seu convite, Eric Boëda, pesquisador do CNRS e professor da Universidade de Paris, sucedeu-a na liderança.\n[…]\nOs achados arqueológicos de Guidon levam a crer que o povoamento do continente americano tenha-se dado muito antes do que se supõe. Enquanto a hipótese mais aceita, acerca do povoamento das Américas, postula que os primeiros humanos chegaram no continente há 15 000 anos, alguns dos sítios arqueológicos estudados por Niède contêm artefatos que datam de até 58 000 anos AP.\n[…]\nPor quase cinco décadas, Niède Guidon protagonizou as pesquisas arqueológicas na área de São Raimundo Nonato e lutou pela conservação do Parque, até que, em 2020, aos 87 anos, as sequelas da chikungunya lhe causaram problemas nas articulações, obrigando-a a usar uma bengala para andar, e impossibilitando-a a fazer suas longas caminhadas pelo parque - ela decidiu que estava na hora de parar.\n[…]\n«O casamento de Niède». no Museu da Pessoa\n[…]\nNiède Guidon e as Origens do Homem Americano -Globo Ciência (1990)\n[…]\n«Prêmio Tejucupapo». www.arqueologiapiaui.com.br\n[…]\n«Algumas premiações da arqueóloga Niède Guidon». www.portalaz.com.br"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_da_Serra_da_Capivara",
        "situacao": "ok",
        "texto": "O Parque Nacional Serra da Capivara é uma unidade de conservação brasileira de proteção integral à natureza que ocupa parte dos municípios de São Raimundo Nonato, João Costa, Brejo do Piauí e Coronel José Dias, todos localizados no estado do Piauí. Esta área tem a maior e mais antiga concentração de sítios pré-históricos da América. Estudos científicos confirmam que a cadeia montanhosa de Capivara\n[…]\nÉ um local com vários atrativos, monumental museu a céu aberto, entre belíssimas formações rochosas, onde encontram sítios arqueológicos e paleontológicos espetaculares, que testemunham a presença de humanos e animais pré-históricos. O parque nacional foi criado graças, em grande parte, ao trabalho da arqueóloga Niède Guidon, que, até seu falecimento em junho de 2025, atuava como Presidente Emérita da Fundação Museu do Homem Americano, instituição responsável pelo manejo do parque.\n[…]\nO Parque Nacional Serra da Capivara se localiza no Estado do Piauí, ao Sudeste do Estado. Existem atualmente cerca de 400 sítios arqueológicos catalogados onde foram encontrados artefatos líticos, esqueletos humanos e  pinturas rupestres. No sítio Toca do Boqueirão da Pedra Furada, 63 datações por carbono-14 (C-14) permitiram o estabelecimento de uma coluna cronoestratigráfica que vai de 59 000 até 5 000 anos AP. Numerosas pinturas rupestres se encontram na área.\n[…]\nEm 18 de dezembro de 2018 foi inaugurado, dentro do parque, o Museu da Natureza, uma moderna estrutura com apoio do Banco Nacional de Desenvolvimento Econômico e Social e do Ministério da Cultura, sob idealização de Niède Guidon em 2002, que doou uma premiação pessoal para ajudar no custeio das obras.\n[…]\nSerra da Capivara (Território do Piauí)\n[…]\nParque Nacional Serra da Capivara - Fundação Museu do Homem Americano\n[…]\nParque Nacional Serra da Capivara - PI - Portal Brasil\n[…]\nParque Nacional da Serra da Capivara - Fotorreportagem Olhar sobre o Mundo"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pegando Fogo",
      "descricao": "Livro de 2009 que defende que o hábito de cozinhar os alimentos foi decisivo na evolução humana."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que primatólogo britânico defende, no livro Pegando Fogo, que cozinhar os alimentos foi decisivo para o crescimento do cérebro humano?",
    "resposta": "Richard Wrangham",
    "fonte": [
      "https://en.wikipedia.org/wiki/Catching_Fire:_How_Cooking_Made_Us_Human",
      "https://en.wikipedia.org/wiki/Richard_Wrangham"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Catching_Fire:_How_Cooking_Made_Us_Human",
        "situacao": "ok",
        "texto": "Catching Fire: How Cooking Made Us Human,  is a 2009 book by British primatologist Richard Wrangham, published by Profile Books in England, and Basic Books in the US. It argues the hypothesis that cooking food was an essential element in the physiological evolution of human beings. It was shortlisted for the 2015 Samuel Johnson Prize.\n[…]\nHumans (species in the genus Homo) are the only animals that cook their food, and Wrangham argues Homo erectus emerged about two million years ago as a result of this unique trait. Cooking had profound evolutionary effects because it increased food efficiency, which allowed human ancestors to spend less time foraging, chewing, and digesting. H. erectus developed a smaller, more efficient digestive tract, which freed up energy to enable larger brain growth.\n[…]\nWrangham also argues that cooking and control of fire generally affected species development by providing warmth and helping to fend off predators, which helped human ancestors adapt to a ground-based lifestyle. Wrangham points out that humans are highly evolved for eating cooked food and cannot maintain reproductive fitness with raw food.\n[…]\nCritics of the cooking hypothesis question whether archaeological evidence supports the view that cooking fires began long enough ago to confirm Wrangham's findings. The traditional explanation is that human ancestors scavenged carcasses for high-quality food that preceded the evolutionary shift to smaller guts and larger brains.\n[…]\nControl of fire by early humans\n[…]\nCatching Fire: How Cooking Made Us Human by Richard Wrangham: review by Simon Ings in the Telegraph (4 October 2009)\n[…]\nHow cooking makes you a man. Interview by Sarah Karnasiewicz on salon.com (29 July 2009)\n[…]\nFrances D. Burton (2009) Fire: The Spark That Ignited Human Evolution, University of New Mexico Press, ISBN 978-0-8263-4646-9"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Richard_Wrangham",
        "situacao": "ok",
        "texto": "Richard Walter Wrangham (born 1948) is an English anthropologist and primatologist; he is Professor of Biological Anthropology at Harvard University. His research and writing have involved ape behavior, human evolution, violence, and cooking.\n[…]\nWrangham was born in Leeds, Yorkshire.\n[…]\nHe is also known for his research into the role of cooking in human evolution (summarized in his book, Catching Fire: How Cooking Made Us Human) and self-domestication.\n[…]\nIn Catching Fire: How Cooking Made Us Human, Wrangham argued that cooking food is obligatory for humans as a result of biological adaptations and that cooking, in particular the consumption of cooked tubers, might explain the increase in hominid brain sizes, smaller teeth and jaws, and decrease in sexual dimorphism that occurred roughly 1.8 million years ago. Some anthropologists disagree with Wrangham's ideas, arguing that no solid evidence supports Wrangham's claims.\n[…]\nHowever, Wrangham and colleagues have demonstrated in the laboratory the effects of cooking on energetic availability: cooking denatures proteins, gelatinizes starches, and helps kill pathogens. The mainstream explanation is that human ancestors, prior to the advent of cooking, turned to eating meats, which then caused the evolutionary shift to smaller guts and larger brains.\n[…]\nCatching Fire: How Cooking Made Us Human. Basic Books, 2009. ISBN 0-465-01362-7\n[…]\nWrangham, R.; Jones, J. H.; Laden, G.; Pilbeam, D.; Conklin-Brittain, N. L. (1999). \"The raw and the stolen: Cooking and the ecology of human origins\". Current Anthropology. 40 (5): 567–594. doi:10.1086/300083. PMID 10539941. S2CID 82271116.\n[…]\nEds. Muller, M. & Wrangham, R. (2009). 'Sexual Coercion in Primates and Humans'. Harvard University Press, Cambridge, MA."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Little Foot",
      "descricao": "Esqueleto quase completo de Australopithecus com mais de três milhões de anos, achado nas cavernas de Sterkfontein, na África do Sul."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O esqueleto Little Foot, um australopiteco sul-africano, estava tão preso na rocha que a retirada e a limpeza levaram cerca de quanto tempo?",
    "resposta": "Cerca de 20 anos",
    "distratores": [
      "Cerca de 6 meses",
      "Cerca de 2 anos",
      "Cerca de 50 anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Little_Foot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Little_Foot",
        "situacao": "ok",
        "texto": "\"Little Foot\" (Stw 573) is the nickname given to a nearly complete Australopithecus fossil skeleton found in 1994 in the cave system of Sterkfontein, South Africa.\n[…]\nStW 573 (Little Foot) is a nearly complete case of an Australopithecus female specimen, including the skull, that provides plenty of information on this once obscure species that helps advance perspective on them. In the discovery of the cast, there was evidence of dental use where it shows to be prominent. Resemblances can be drawn to other cases found in South Africa, such as that of Australopithecus afarensis.\n[…]\nFirst, the discovery (archive No. STW 573) was not assigned to any particular species in the genus Australopithecus. In the first description in July 1995 it was said, \"The bones are probably an early member of Australopithecus africanus or another early species of hominids\".\n[…]\nClarke now suggests that Little Foot does not belong to the species Australopithecus afarensis or Australopithecus africanus, but to a unique Australopithecus species previously found at Makapansgat and Sterkfontein Member Four, Australopithecus prometheus. However, Martin et al. (2025) suggested that Little Foot does not belong to Australopithecus prometheus, and that A. prometheus represents a junior synonym of Australopithecus africanus.\n[…]\nDue to the features of the fossil, he also believed it likely that Australopithecus spent parts of their days searching for food in the trees.\n[…]\nTalkOrigins Archive on Little Foot\n[…]\nBBC, 2017.12.06:Little Foot skeleton unveiled in South Africa\n[…]\nWits University OFFICIAL – Little Foot takes a bow\n[…]\nObjects by Little Foot, at SAHRA"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A9_Pequeno_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Pé Pequeno, também conhecido como StW 573, é o fóssil mais antigo e bem preservado encontrado de um Australopithecus sul-africano, possuindo 3.67 milhões de anos. Foi descoberto na Gruta de Silberberg das cavernas de Sterkfontein, na África do Sul, com 90̥% de sua ossada intacta.\n[…]\nEm 1998, foi encontrado o crânio, que estava encravado em um bloco de brecha calcária endurecida, mas somente em 2010 os pesquisadores conseguiram remover e levar para o laboratório de campo de Sterkfontein e em outubro de 2017, levaram para o cofre de hominídeos no Instituto de Estudos Evolutivos da Universidade de Witwatersrand.\n[…]\nO esqueleto de Pé Pequeno é de uma mulher adulta, de características simiescas e humanas, com 1.30 metros de altura. O quadril tem formato humano. As pernas tem um comprimento total de 61,5 centímetros e os braços tem 53,4 centímetros de comprimento, mostrando que os membros inferiores são mais longos que os membros superiores, indicando que Pé Pequeno andava ereta.\n[…]\nOs dentes da frente até os primeiros molares estão desgastados, indicando que sua alimentação era de tubérculos fibrosos, folhas e frutas com casca dura. O volume do cérebro era de 408 centímetros cúbicos, cerca de um terço do volume de uma mulher adulta atual.\n[…]\nAté o momento, pesquisadores não chegaram a um acordo com relação a classificação de Pé Pequeno. Alguns defendem a classificação como Australopithecus Africanus, outros pesquisadores a classificam como Australopithecus Prometheus devido as análises referente a seus dentes e quadril. E há pesquisadores que dizem que Pé Pequeno merece uma nova classificação por ser uma espécie recém-descoberta.==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lomekwi 3",
      "descricao": "Sítio arqueológico perto do lago Turkana, no Quênia, com ferramentas de pedra de cerca de 3,3 milhões de anos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "As ferramentas de pedra de Lomekwi, no Quênia, com cerca de três milhões e trezentos mil anos, são mais antigas que qualquer fóssil conhecido de que gênero?",
    "resposta": "Homo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lomekwi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lomekwi",
        "situacao": "ok",
        "texto": "Lomekwi is an archaeological site located on the west bank of Lake Turkana in Kenya. It is an important milestone in the history of human archaeology. An archaeological team from Stony Brook University in the United States discovered traces of Lomekwi by chance in July 2011, and made substantial progress with four years of in-depth excavations.\n[…]\nIn July 2011, a team of archeologists led by Sonia Harmand and Jason Lewis of Stony Brook University, United States, were heading to a site near Lake Turkana, Kenya near where Kenyanthropus platyops fossils had previously been found. The group made a wrong turn on the way and ended up in a previously unexplored region and decided to do some surveying. They quickly found some stone artifacts on the site, which they named Lomekwi 3. A year later, they returned to the site for a full excavation.\n[…]\nThe date predates the genus Homo by 500,000 years, suggesting this tool making was undertaken by Australopithecus or Kenyanthropus (which was found near Lomekwi 3). Previously, evidence of stone tool use by Australopithecus has been suggested on the basis of cut-marks on animal bones, but those findings have been debated, with no scientific consensus forming on either side of the debate.\n[…]\nHarmand said the Lomekwi 3 artifacts do not fit into the Oldowan tool making tradition and should be considered part of a distinct tradition, which she termed Lomekwian. It has been hypothesized that tool making may have aided in the evolution of Homo into a distinct genus. However, it is unclear whether the Lomekwian tools are related to those made by Homo species – it is possible the technology was forgotten and later rediscovered."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lomekwi",
        "situacao": "ok",
        "texto": "Lomekwi 3 é um sítio arqueológico no Quênia, onde foram descobertas ferramentas de pedra antigas datadas de 3,3 milhões de anos atrás, o que as torna as mais antigas já encontradas.\n[…]\nCerca de 20 artefatos bem preservados foram desenterrados em Lomekwi 3, incluindo bigornas, núcleos e lascas. Foram encontrados 130 artefatos adicionais na superfície. Em um exemplo, a equipe de Harmand foi capaz de combinar uma lasca com o núcleo, sugerindo que um hominino havia fabricado e descartado a ferramenta no local. As ferramentas eram geralmente bastante grandes - maiores que as ferramentas de pedra mais antigas conhecidas, recuperadas na área de Gona na região Afar da Etiópia, em 1992.\n[…]\nCom base na posição estratigráfica dos artefatos enterrados (em sedimentos não perturbados) em relação a duas camadas de cinzas vulcânicas e inversões magnéticas conhecidas, Harmand e sua equipe dataram as ferramentas há 3,3 milhões de anos atrás. As descobertas em Lomekwi, portanto, representam as ferramentas de pedra mais antigas já descobertas, anteriores às ferramentas de Gona por 700.000 anos.\n[…]\nA data antecede o gênero Homo em 500.000 anos, sugerindo que essa ferramenta foi realizada pelo Australopithecus ou Kenyanthropus (encontrado perto de Lomekwi 3). Anteriormente, evidências de uso de ferramentas de pedra pelo Australopithecus haviam sido sugeridas com base em marcas nos ossos de animais, mas esses achados foram debatidos calorosamente, sem nenhum consenso científico se formando nos dois lados do debate.\n[…]\nO paleoantropólogo Zeresenay Alemseged, responsável pela pesquisa anterior sugerindo que o Australopithecus havia feito ferramentas, também apoiou as conclusões de Harmand.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Bipedalismo humano",
      "descricao": "Capacidade de andar habitualmente ereto sobre as duas pernas, característica marcante da linhagem humana."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Segundo os fósseis, que grande mudança no corpo surgiu primeiro na linhagem humana, milhões de anos antes de o cérebro crescer?",
    "resposta": "Andar sobre duas pernas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bipedalism",
      "https://en.wikipedia.org/wiki/Human_evolution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bipedalism",
        "situacao": "ok",
        "texto": "Bipedalism is a form of terrestrial locomotion where an animal moves by means of its two rear (or lower) limbs or legs. An animal or machine that usually moves in a bipedal manner is known as a biped , meaning 'two feet' (from Latin bis 'double' and pes 'foot'). Types of bipedal movement include walking or running (a bipedal gait) and hopping. Human bipedalism has been a subject of special study.\n[…]\nInjured chimpanzees and bonobos have been capable of sustained bipedalism.\n[…]\nThis is because breath control means that the muscles associated with breathing can be manipulated into creating sounds. This means that the onset of bipedality, leading to more efficient breathing, may be related to the origin of verbal language.\n[…]\nFor nearly the whole of the 20th century, bipedal robots were very difficult to construct and robot locomotion involved only wheels, treads, or multiple legs. Recent cheap and compact computing power has made two-legged robots more feasible. Some notable biped robots are ASIMO, HUBO, MABEL and QRIO.\n[…]\nRecently, spurred by the success of creating a fully passive, un-powered bipedal walking robot, those working on such machines have begun using principles gleaned from the study of human and animal locomotion, which often relies on passive mechanisms to minimize power consumption.\n[…]\nHewes, G. W., \"Food Transport and the Origin of Hominid Bipedalism\" American Anthropologist, 63, 687–710, (1961).\n[…]\nHunt, K. D., \"The Evolution of Human Bipedality\" Journal of Human Evolution, 26, 183–202, (1994).\n[…]\nJablonski, N.G.; Chaplin, G. (1993). \"Origin of Habitual Terrestrial Bipedalism in the Ancestor of the Hominidae\". Journal of Human Evolution. 24 (4): 259–280. Bibcode:1993JHumE..24..259J. doi:10.1006/jhev.1993.1021.\n[…]\nWheeler, P. E. (1984) \"The Evolution of Bipedality and Loss of Functional Body Hair in Hominoids.\" Journal of Human Evolution, 13, 91–98,\n[…]\nThe Origin of Bipedalism"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Human_evolution",
        "situacao": "ok",
        "texto": "Homo sapiens is a distinct species of the hominid family of primates, which includes all the great apes. Over their evolutionary history, humans gradually developed traits such as bipedalism, dexterity, and complex language. Modern humans interbred with archaic humans, indicating that their evolution was not linear but weblike.\n[…]\nThe early bipeds eventually evolved into the australopithecines and still later into the genus Homo. There are several theories of the adaptation value of bipedalism.\n[…]\nIn 2000, Martin Pickford and Brigitte Senut discovered, in the Tugen Hills of Kenya, a 6-million-year-old bipedal hominin which they named Orrorin tugenensis. And in 2001, a team led by Michel Brunet discovered the skull of Sahelanthropus tchadensis which was dated as 7.2 million years ago, and which Brunet argued was a bipedal, and therefore a hominid—that is, a hominin (cf Hominidae; terms \"hominids\" and hominins).\n[…]\nThere is little fossil evidence for the divergence of the gorilla, chimpanzee and hominin lineages. The earliest fossils that have been proposed as members of the hominin lineage are Sahelanthropus tchadensis dating from 7 million years ago, Orrorin tugenensis dating from 5.7 million years ago, and Ardipithecus kadabba dating to 5.6 million years ago. Each of these have been argued to be a bipedal ancestor of later hominins but, in each case, the claims have been contested.\n[…]\nhabilis fossils, to be a separate species, while others consider them to be part of H. habilis—simply representing intraspecies variation, or perhaps even sexual dimorphism. The brains of these early hominins were about the same size as that of a chimpanzee, and their main adaptation was bipedalism as an adaptation to terrestrial living."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bipedismo",
        "situacao": "ok",
        "texto": "Bipedismo ou bipedalismo é uma forma de locomoção terrestre, onde um organismo se move por meio de seus dois membros posteriores ou pernas. Um animal ou máquina que normalmente se move desta forma é conhecido como bípede, que significa \"dois pés\" (do latim bi para \"dois\" e ped para \"pé\"). Entre os tipos de movimentos bípedes estão caminhar, correr ou pular.\n[…]\nA grande maioria dos vertebrados terrestres vivos são quadrúpedes, com o bipedismo exibido apenas por um punhado de grupos vivos. Seres humanos, gibões e grandes pássaros caminham levantando um pé de cada vez. Por outro lado, a maioria dos macrópodes, pássaros menores, lêmures e roedores bípedes se movimenta pulando nas duas pernas simultaneamente.\n[…]\nO primeiro bípede conhecido é o Bolosauridae Eudibamus cujos fósseis datam de há 290 milhões de anos. Seus longos membros posteriores, pernas dianteiras curtas e articulações distintas sugerem o bipedismo. A espécie foi extinta no início do Permiano.\n[…]\nBraços e pernas\n[…]\nOs ancestrais basais possuíam uma pélvis longa e plana, ao passo que a pélvis humana tem um ângulo e formato diferente, suportando o peso dos órgãos e gerando um centro de gravidade mais baixo que em chimpanzés, por exemplo, mantendo um melhor equilíbrio em duas pernas. Além disso, essa estrutura pélvica possibilitou o desenvolvimento de músculos que permitem aos humanos a locomoção em duas pernas durante longos períodos sem gastar tanta energia.\n[…]\nOs primeiros ancestrais tinham um joelho mais móvel, com mais rotação. Nos joelhos humanos, durante a caminhada, há estabilidade com redução da rotação. As articulações dos joelhos humanos são aumentadas para suportar a quantidade aumentada de peso corporal. Com o aumento do peso distribuído apenas em duas pernas em comparação com os quadrúpedes, o joelho requer mais suporte para se aumentar.\n[…]\nModelo de bipedalismo precoce",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.67 — 2026-10-13**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.

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

### Coleções

Uma **coleção** é um conjunto de perguntas sobre um mesmo universo, com um modo de jogo próprio (decidido em 2026-10-13). Cada coleção tem um documento próprio com as diretrizes dela; a única até agora é a de **pokémon**, do modo Pokémon, em [`modo_pokemon.md`](modo_pokemon.md).

- A pergunta da coleção tem o campo `colecao`. O modo da coleção sorteia só as perguntas dela, de qualquer tema.
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master, Trilha da Vida, Linear).
- **Subtema da coleção** (campo `subtema_colecao`): uma coleção pode ter subtemas próprios, definidos no documento dela, que dividem as perguntas dentro do modo. Eles não substituem tema e subtema, e a lista canônica (§3) não muda. A folga para sobreposição entre eles também é definida no documento da coleção.
- As perguntas da coleção seguem todas as regras desta Parte I: tema e subtema, âncora, saturação e fontes. Podem ser com ou sem figura.
- As exclusivas não contam nas metas do jogo original (§17), e o autopiloto não as produz: os lotes delas são rodados à mão.

### Perguntas com áudio

Uma pergunta de qualquer tipo pode ter um **trecho de áudio** (campo `audio`), decidido em 2026-10-12. O questionador lê o enunciado e manda o trecho tocar **na tela grande** (modo mesa), para todos ouvirem; o celular de quem lê não toca o som. **Até segunda ordem, as perguntas com áudio ficam fora do jogo:** o app não as sorteia em nenhum modo (§16), enquanto os trechos são revistos.

- **De reconhecimento**, como as figuras: a pergunta pede para reconhecer o que se ouve ("De que país é este hino nacional?", "Que música é esta?", "Que animal faz este som?", "Que instrumento é este?", "De que compositor é esta peça?"). O enunciado nunca diz o que toca; pode trazer uma pista que ajude sem entregar ("Que ave do Cerrado…").
- **Categorias:** hinos nacionais (Geografia › Bandeiras e Símbolos); música clássica e ópera (Artes e Pensamento › Música Clássica, Teatro e Ópera); música brasileira antiga (Entretenimento › Música Brasileira); sons de animais (Natureza, no subtema do bicho); instrumentos (Música Clássica, Música Brasileira ou Música Internacional, conforme o instrumento).
- **Só áudio livre**, porque o repositório e o site são públicos: domínio público, CC0, CC BY ou CC BY-SA, sem NC nem ND. Gravações comerciais de música popular **não entram**: a composição fica protegida até 70 anos depois da morte do autor, e a gravação, até 70 anos depois de publicada. Na música brasileira antiga, a composição e a gravação precisam estar em domínio público no Brasil: autores mortos há mais de 70 anos (Chiquinha Gonzaga, Ernesto Nazareth, Zequinha de Abreu, Catulo da Paixão Cearense, Carlos Gomes) e gravação publicada há mais de 70 anos. *Pelo Telefone*, de Donga (morto em 1974), por exemplo, fica de fora. Boas fontes: os hinos da Banda da Marinha dos EUA e os sons do Serviço de Pesca e Vida Selvagem dos EUA (obras do governo americano, em domínio público), o Musopen e as gravações antigas da Casa Edison, todos no Wikimedia Commons.
- **O LLM não ouve áudio.** A pergunta sai dos metadados do arquivo (título, descrição, categorias, origem) e das fontes, e **uma pessoa ouve o trecho** antes de ele entrar no banco, na página que o pipeline gera (§17).
- **O trecho:** de 6 a 30 segundos, escolhido para ser reconhecível (o tema famoso de uma peça, o começo de um hino, o canto típico de uma ave), com entrada e saída suaves e volume igualado. Nas gravações antigas, o trecho pula o anúncio do locutor, que muitas vezes diz o nome da música.
- **Saturação:** o áudio conta no limite de 3 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- No máximo **2 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras novas.** O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para não repetir.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
