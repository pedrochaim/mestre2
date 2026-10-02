Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Dinossauros e Fósseis** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Dinossauro",
      "descricao": "Grupo de répteis arcossauros que dominou os ambientes terrestres na Era Mesozoica e do qual descendem as aves."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1842, o anatomista inglês Richard Owen criou a palavra dinossauro juntando o termo grego para lagarto com que adjetivo?",
    "resposta": "Terrível",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dinosaur",
      "https://pt.wikipedia.org/wiki/Dinossauro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dinosaur",
        "situacao": "ok",
        "texto": "Dinosaurs are a diverse group of warmblooded reptiles of the clade Dinosauria. They existed through most of the Mesozoic era, first appearing early in the Triassic period. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya and their dominance continued throughout the Jurassic and Cretaceous periods.\n[…]\nThe first dinosaur fossils were recognized in the early 19th century, with the name \"dinosaur\" (meaning \"terrible lizard\") being coined by Sir Richard Owen in 1842 to refer to these \"great fossil lizards\". Since then, mounted fossil dinosaur skeletons have been major attractions at museums worldwide, and dinosaurs have become an enduring part of popular culture.\n[…]\nin 1842 the English paleontologist Sir Richard Owen coined the term \"dinosaur\", using it to refer to the \"distinct tribe or sub-order of Saurian Reptiles\" that were then being recognized in England and around the world. The term is derived from Ancient Greek  δεινός (deinos) 'terrible, potent or fearfully great' and  σαῦρος (sauros) 'lizard or reptile'.\n[…]\nAs clarified by British geologist and historian Hugh Torrens, Owen had given a presentation about fossil reptiles to the British Association for the Advancement of Science in 1841, but reports of the time show that Owen did not mention the word \"dinosaur\", nor recognize dinosaurs as a distinct group of reptiles in his address. He introduced the Dinosauria only in the revised text version of his talk published in April 1842.\n[…]\nOf particular note have been the fossils of the Jehol Biota, where a variety of theropods and early birds have been found, often with feathers of some type. Birds share over a hundred distinct anatomical features with other theropod dinosaurs. They are most closely allied with maniraptoran coelurosaurs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinossauro",
        "situacao": "ok",
        "texto": "Dinossauros ou dinossáurios (em grego clássico: δεινός σαῦρος, deinos sauros, que significa \"lagarto terrível\") constituem um grupo de répteis, membros do clado Dinosauria.\n[…]\nEmbora a palavra dinossauro signifique \"lagarto terrível\", esses animais não eram lagartos ou mesmo répteis no sentido tradicional, mas, sim, ornitodiros, diferenciando-se dos répteis principalmente por suas patas eretas, pela postura, comportamento normalmente ativo e metabolismo aviários, incluindo a manutenção de uma temperatura constante.\n[…]\nO termo \"Dinosauria\" foi proposto em 1842 por Richard Owen para classificar os grandes esqueletos de animais extintos, que haviam sido recém-descobertos no Reino Unido. A palavra, em latim, deriva do grego δεινός σαῦρος, que significa \"lagarto terrível\", apesar de esses animais serem ornitodiros, e, portanto, taxonomicamente distantes dos lagartos.\n[…]\nO clado Dinosauria é tradicionalmente subdividido em duas ordens de acordo com a estrutura da pélvis e algumas outras características anatômicas. A classificação a seguir é baseada nas relações evolutivas dos grupos de dinossauros, e organizada a partir da lista de espécies mesozoicas de dinossauros de Holtz (2007). A cruz (†) simboliza táxons extintos.\n[…]\nDinosauria\n[…]\nO estudo desses \"grandes fósseis de lagartos\" logo se tornou de grande interesse para cientistas europeus e estadunidenses e, em 1842, o paleontólogo inglês Richard Owen cunhou o termo \"dinossauro\". Ele reconheceu que os restos que haviam sido encontrados até aquela época, Iguanodon, Megalosaurus e Hylaeosaurus, compartilhavam uma série de características distintas e, por isto, decidiram apresentá-los como um grupo taxonômico distinto."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Dinossauro",
      "descricao": "Grupo de répteis arcossauros que dominou os ambientes terrestres na Era Mesozoica e do qual descendem as aves."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que período geológico surgiram os primeiros dinossauros, há mais de duzentos milhões de anos?",
    "resposta": "Triássico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dinosaur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dinosaur",
        "situacao": "ok",
        "texto": "Dinosaurs are a diverse group of warmblooded reptiles of the clade Dinosauria. They existed through most of the Mesozoic era, first appearing early in the Triassic period. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 mya and their dominance continued throughout the Jurassic and Cretaceous periods.\n[…]\nThe oldest dinosaur fossils known from substantial remains date to the Carnian epoch of the Triassic period and have been found primarily in the Ischigualasto and Santa Maria Formations of Argentina and Brazil, and the Pebbly Arkose Formation of Zimbabwe.\n[…]\nDinosaurs may have appeared as early as the Anisian epoch of the Triassic, approximately 243 million years ago, which is the age of Nyasasaurus from the Manda Formation of Tanzania. However, its known fossils are too fragmentary to identify it as a dinosaur or only a close relative. The referral of the Manda Formation to the Anisian is also uncertain.\n[…]\nDinosaur evolution after the Triassic followed changes in vegetation and the location of continents. In the Late Triassic and Early Jurassic, the continents were connected as the single landmass Pangaea, and there was a worldwide dinosaur fauna mostly composed of coelophysoid carnivores and early sauropodomorph herbivores. Gymnosperm plants (particularly conifers), a potential food source, radiated in the Late Triassic.\n[…]\nCurrent evidence suggests that dinosaur average size varied through the Triassic, Early Jurassic, Late Jurassic and Cretaceous. Predatory theropod dinosaurs, which occupied most terrestrial carnivore niches during the Mesozoic, most often fall into the 100-to-1,000 kg (220-to-2,200 lb) category when sorted by estimated weight into categories based on order of magnitude, whereas recent predatory carnivoran mammals peak in the 10-to-100 kg (22-to-220 lb) category."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dinossauros",
        "situacao": "ok",
        "texto": "Dinossauros ou dinossáurios (em grego clássico: δεινός σαῦρος, deinos sauros, que significa \"lagarto terrível\") constituem um grupo de répteis, membros do clado Dinosauria.\n[…]\nAcredita-se que os dinossauros apareceram há, pelo menos, 233 milhões de anos, e que, por mais de 167 milhões de anos, foram o grupo animal dominante na Terra, num período geológico de tempo que vai desde o período Triássico até o final do período Cretáceo, há cerca de 66 milhões de anos, quando um evento catastrófico ocasionou a extinção em massa de quase todos os dinossauros, com exceção de algumas espécies emplumadas, as aves.\n[…]\nO registro fóssil indica que os dinossauros emplumados surgiram durante o período Jurássico, embora exista a possibilidade de que os primeiros dinossauros já possuíssem protopenas no período Triássico. Após o evento da extinção em massa, os únicos dinossauros que sobreviveram foram as aves.\n[…]\nOs dinossauros divergiram de seus ancestrais arcossauros entre o meio e o final do período Triássico, cerca de 20 milhões de anos após o evento de extinção do Permiano-Triássico ter eliminado estimados 95% de toda a vida na Terra. A datação radiométrica da formação rochosa que continha fósseis do antigo gênero Eoraptor, com 231,4 milhões de anos, estabelece sua presença no registro fóssil nesta época.\n[…]\nPrimeiro, há cerca de 215 milhões de anos, uma variedade de arcossauromorfos basais, incluindo os protorossauros, foi extinta. Isto foi seguido pelo evento de extinção do Triássico-Jurássico (há cerca de 200 milhões de anos), que viu pôr fim à maioria dos outros grupos de primeiros arcossauros, como aetossauros, ornithosuchidos, phytossauros e rauisuchianos.\n[…]\nDinosauria",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Iguanodonte",
      "descricao": "Gênero de dinossauro herbívoro ornitópode do Cretáceo Inferior, descrito por Gideon Mantell em 1825."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1825, o médico inglês Gideon Mantell batizou um dinossauro por achar seus dentes parecidos com os de que réptil atual?",
    "resposta": "Iguana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iguanodon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iguanodon",
        "situacao": "ok",
        "texto": "Iguanodon ( i-GWAH-nə-don; meaning 'iguana-tooth'), named in 1825, is a genus of iguanodontian dinosaur.\n[…]\nIn recognition of the resemblance of the teeth to those of the iguana, Mantell decided to name his new animal Iguanodon or 'iguana-tooth', from iguana and the Greek word ὀδών (odon, odontos or 'tooth'). Based on isometric scaling, he estimated that the creature might have been up to 18 metres (59 feet) long, more than the 12-metre (39 ft) length of Megalosaurus.\n[…]\nHis initial idea for a name was Iguana-saurus ('Iguana lizard'), but his friend William Daniel Conybeare suggested that that name was more applicable to the iguana itself, so a better name would be Iguanoides ('Iguana-like') or Iguanodon. He neglected to add a specific name to form a proper binomial, but one was supplied in 1829 by Friedrich Holl: I. anglicum, which was later emended to I. anglicus.\n[…]\nMantell sent a letter detailing his discovery to the local Portsmouth Philosophical Society in December 1824, several weeks after settling on a name for the fossil creature. The letter was read to members of the Society at a meeting on 17 December, and a report was published in the Hampshire Telegraph the following Monday, 20 December, which announced the name, misspelled as \"Iguanadon\".\n[…]\nThese animals had large, tall but narrow skulls, with toothless beaks probably covered with keratin, and teeth like those of iguanas, as the name suggests, but much larger and more closely packed. Unlike hadrosaurids, which had columns of replacement teeth, Iguanodon only had one replacement tooth at a time for each position."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iguanodon",
        "situacao": "ok",
        "texto": "Iguanodon, do grego \"dente de iguana\", também conhecido como iguanodonte, é um gênero de dinossauro herbívoro e bípede que viveu no início do período Cretáceo Inferior. Media em torno de 9 metros de comprimento, pesava cerca de 4, 5 toneladas. Conhecem-se vestígios de Iguanodon do Reino Unido, França, Bélgica, Portugal, Estados Unidos, Brasil, República Checa e Macedônia do Norte.\n[…]\nO gênero foi nomeado em 1825 pelo geólogo inglês Gideon Mantell, com base em amostras fósseis que agora são atribuídas ao Mantellisaurus. O Iguanodon foi o segundo tipo de dinossauro formalmente nomeado com base em amostras fósseis, após o Megalosaurus. Juntamente com este e o Hylaeosaurus, foi um dos três gêneros originalmente usados para definir Dinosauria. O gênero Iguanodon pertence ao grupo maior Iguanodontia, juntamente com os hadrossauros bicos de pato.\n[…]\nMantell tentou corroborar ainda mais sua teoria, encontrando um paralelo moderno entre os répteis existentes. Em setembro de 1824, ele visitou a Faculdade Real de Cirurgiões da Inglaterra, mas a princípio não conseguiu encontrar dentes comparáveis. No entanto, o curador assistente Samuel Stutchbury reconheceu que eles se pareciam com os de uma iguana que ele havia preparado recentemente, embora vinte vezes mais longos.\n[…]\nEm reconhecimento à semelhança dos dentes com os da iguana, Mantell decidiu nomear seu novo animal como Iguanodon ou 'dente de iguana', combinando iguana com a palavra grega ὀδών (odon, odontos que significa \"dente\"). Com base na escala isométrica, ele estimou que a criatura poderia ter até 18 metros de comprimento, mais do que os 12 metros de comprimento do Megalosaurus.\n[…]\nMantell publicou formalmente suas descobertas em 10 de fevereiro de 1825, quando apresentou um artigo sobre os restos mortais à Royal Society de Londres.\n[…]\nOutros dinossauros\n[…]\nTaxonomia dos dinossauros",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Iguanodonte",
      "descricao": "Gênero de dinossauro herbívoro ornitópode do Cretáceo Inferior, descrito por Gideon Mantell em 1825."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As primeiras reconstruções do iguanodonte mostravam um chifre pontudo no focinho. Na verdade, aquele osso ficava em que parte do corpo?",
    "resposta": "No polegar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Iguanodon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Iguanodon",
        "situacao": "ok",
        "texto": "Iguanodon ( i-GWAH-nə-don; meaning 'iguana-tooth'), named in 1825, is a genus of iguanodontian dinosaur.\n[…]\nDollo's specimens allowed him to show that Owen's prehistoric pachyderms were not correct for Iguanodon. He instead modelled the skeletal mounts after the cassowary and wallaby, and put the spike that had been on the nose firmly on the thumb. His reconstruction would prevail for a long period of time, but would later be discounted.\n[…]\nOne major revision to Iguanodon brought by the Renaissance would be another re-thinking of how to reconstruct the animal. A major flaw with Dollo's reconstruction was the bend he introduced into the tail. This organ was more or less straight, as shown by the skeletons he was excavating, and the presence of ossified tendons. In fact, to get the bend in the tail for a more wallaby or kangaroo-like posture, the tail would have had to be broken.\n[…]\nSince its description in 1825, Iguanodon has been a feature of worldwide popular culture. Two lifesize reconstructions of Mantellodon (considered Iguanodon at the time) built at the Crystal Palace in London in 1852 greatly contributed to the popularity of the genus. Their thumb spikes were mistaken for horns, and they were depicted as elephant-like quadrupeds, yet this was the first time an attempt was made at constructing full-size dinosaur models.\n[…]\nA main belt asteroid, 1989 CB3, has been named 9941 Iguanodon in honour of the genus.\n[…]\nThe Bernissart Iguanodons (Iguanodon herd found in Belgium).\n[…]\nMantell's Iguanodon tooth in the collection of the Museum of New Zealand Te Papa Tongarewa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iguanodon",
        "situacao": "ok",
        "texto": "Iguanodon, do grego \"dente de iguana\", também conhecido como iguanodonte, é um gênero de dinossauro herbívoro e bípede que viveu no início do período Cretáceo Inferior. Media em torno de 9 metros de comprimento, pesava cerca de 4, 5 toneladas. Conhecem-se vestígios de Iguanodon do Reino Unido, França, Bélgica, Portugal, Estados Unidos, Brasil, República Checa e Macedônia do Norte.\n[…]\nA laje de Maidstone foi utilizada nas primeiras reconstruções esqueléticas e representações artísticas do Iguanodon, mas devido à sua incompletude, Mantell cometeu alguns erros, o mais famoso dos quais foi a colocação do que ele pensava ser um chifre no nariz. A descoberta de espécimes muito melhores em anos posteriores revelou que o chifre era na verdade um polegar modificado. Ainda envolto em rocha, o esqueleto de Maidstone está atualmente exposto no Museu de História Natural de Londres.\n[…]\nOs espécimes de Dollo permitiram-lhe mostrar que os paquidermes pré-históricos de Owen não eram corretos para o Iguanodon. Em vez disso, ele modelou as montagens esqueléticas com base no casuar e no canguru, e colocou a ponta que estava no nariz firmemente no polegar. Sua reconstrução prevaleceria por um longo período de tempo, mas mais tarde seria desconsiderada.\n[…]\natherfieldensis, na época considerado ser outra espécie de Iguanodon).\n[…]\nOs braços de I. bernissartensis eram longos (até 75% do comprimento das pernas) e robustos, com mãos bastante inflexíveis construídas para que os três dedos centrais pudessem suportar peso. Os polegares eram garras cônicas que se projetavam dos três dígitos principais. Nas primeiras restaurações, a garra era colocada no nariz do animal, confundido com um chifre. Fósseis posteriores revelaram a verdadeira natureza como garras do polegar,, embora sua função exata ainda seja debatida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Mosassauro",
      "descricao": "Gênero de grande réptil marinho do fim do Cretáceo, cujo primeiro fóssil foi achado perto de Maastricht, na Holanda."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Um réptil marinho gigante, achado no século dezoito perto de Maastricht, na Holanda, recebeu o nome do rio que passa pela cidade. Que rio?",
    "resposta": "Rio Mosa",
    "distratores": [
      "Rio Reno",
      "Rio Sena",
      "Rio Danúbio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mosasaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mosasaurus",
        "situacao": "ok",
        "texto": "Mosasaurus (; \"lizard of the Meuse River\") is the type genus (defining example) of the Mosasauridae, an extinct group of aquatic squamate reptiles. It lived from about 82 to 66 million years ago during the Campanian and Maastrichtian stages of the Late Cretaceous.\n[…]\nThe genus was one of the first Mesozoic marine reptiles known to science—the first fossils of Mosasaurus were found as skulls in a chalk quarry near the Dutch city of Maastricht in the late 18th century, and were initially thought to be crocodiles or whales. One skull discovered in 1778 was famously nicknamed the \"great animal of Maastricht\".\n[…]\nPaleontologists believe its diet would have included virtually any animal; it likely preyed on bony fish, sharks, cephalopods, birds, and other marine reptiles including sea turtles and other mosasaurs. It likely preferred to hunt in open water near the surface.\n[…]\nIn a 1822 book by James Parkinson, William Daniel Conybeare coined the genus Mosasaurus from the Latin Mosa \"Meuse\" and the Ancient Greek σαῦρος (saûros, \"lizard\"), in reference to the river near which the fossils were discovered. In 1829, Gideon Mantell added the specific epithet hoffmanni, in honor to Hoffmann. Later, the second skull is designated as the new species' holotype (defining example).\n[…]\nMosasaurus lived alongside other large predatory mosasaurs also considered apex predators, most prominent among them being the tylosaurines and Prognathodon. Tylosaurus bernardi, the only surviving species of the genus during the Maastrichtian, measured up to 12.2 meters (40 ft) in length while the largest coexisting species of Prognathodon like P. saturator exceeded 12 meters (39 ft). These three mosasaurs preyed on similar animals such as marine reptiles."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mosasaurus",
        "situacao": "ok",
        "texto": "Mosasaurus (Mosassauro) é um género de lagartos marinhos mosassaurídeos que viveram em torno de 90 milhões de anos atrás no oceano Atlântico. O nome é devido a seus primeiros fósseis, encontrados em 1770 por Georges Cuvier, terem sido encontrados no vale do rio Mosa, na Holanda. As afinidades exatas do Mosassauro como escamado permanecem controversas e os cientistas continuam a debater se seus par\n[…]\nO mosassauro era um predador com excelente visão para compensar seu mau olfato e uma alta taxa metabólica sugerindo que era endotérmico (\"sangue quente\"), uma adaptação encontrada apenas em mosassauros entre os escamados.\n[…]\nO mosassauro era um grande predador comum nestes oceanos e estava posicionado no topo da cadeia alimentar. Paleontólogos acreditam que sua dieta incluiria praticamente qualquer animal; provavelmente predava peixes ósseos, tubarões, cefalópodes, pássaros e outros répteis marinhos, incluindo tartarugas marinhas e outros mosassauros. Acredita-se que provavelmente preferiam caçar em águas abertas perto da superfície.\n[…]\nDo ponto de vista ecológico, o mosassauro provavelmente teve um impacto profundo na estruturação dos ecossistemas marinhos; sua chegada em alguns locais como o Mar Interior Ocidental na América do Norte coincide com uma mudança completa da assembleia faunística e diversidade.\n[…]\nmosassauro enfrentou competição com outros grandes mosassauros predadores, como o Prognathodon e o Tilossauro — que eram conhecidos por se alimentarem de presas semelhantes, embora fossem capazes de coexistir nos mesmos ecossistemas por meio de particionamento de nicho. Ainda havia conflitos entre eles, já que foi documentado um caso de Tilossauro atacando um mosassauro. Vários fósseis documentam ataques deliberados a indivíduos de mosassauro por membros da mesma espécie.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Irritator",
      "descricao": "Gênero de dinossauro espinossaurídeo do Cretáceo Inferior encontrado na Chapada do Araripe, no Ceará."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por que paleontólogos batizaram de Irritator um dinossauro de focinho comprido encontrado no Ceará?",
    "resposta": "Crânio adulterado com gesso",
    "fonte": [
      "https://en.wikipedia.org/wiki/Irritator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Irritator",
        "situacao": "ok",
        "texto": "Irritator is a genus of spinosaurid dinosaur that lived in what is now Brazil during the Albian stage of the Early Cretaceous Period, about 113 to 110 million years ago. It is known from a nearly complete skull found in the Romualdo Formation of the Araripe Basin. Fossil dealers had acquired this skull and sold it to the State Museum of Natural History Stuttgart.\n[…]\nIrritator challengeri was the first dinosaur described from the Romualdo Formation, and its holotype specimen represents the most completely preserved spinosaurid skull known.\n[…]\nThey also noted that a sagittal crest on Angaturama's premaxillae may correspond with that of Irritator's nasal bones. Some objection has been raised to these assertions. Kellner and Campos in 2000 and Brazilian paleontologist Elaine B. Machado and Kellner in 2005 expressed the opinion that the fossils come from two different genera, and that the holotype of Angaturama limai was clearly more laterally flattened than that of Irritator challengeri.\n[…]\nA review of both fossils by the Brazilian paleontologists Marcos A. F. Sales and Cesar L. Schultz in 2017 noted that the specimens also differ in other aspects of their preservation: the Irritator specimen is brighter in color and is affected by a vertical crack, while the Angaturama specimen bears many cavities; the damage to the teeth of the Irritator challengeri holotype is also much less severe.\n[…]\nIn 1998, Sereno and colleagues defined two subfamilies within the Spinosauridae based on craniodental (skull and tooth) characteristics. They were Spinosaurinae, where they placed Spinosaurus and Irritator; and Baryonychinae, to which they assigned Baryonyx, Suchomimus, and Cristatusaurus. Spinosaurines were distinguished by their unserrated, straighter, and more widely spaced teeth, as well as smaller first teeth of the premaxilla.\n[…]\nIrritator at The Theropod Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irritator",
        "situacao": "ok",
        "texto": "Irritator é um gênero de Dinossauro espinossaurídeo que viveu no Cretáceo inferior, há 110 milhões de anos na Chapada do Araripe, Ceará. Era um predador que alimentava-se de peixes, vivendo próximo à ambientes aquáticos. O Irritator é um símbolo da luta contra o colonialismo científico na paleontologia, liderado pelo Brasil.\n[…]\nO nome \"Irritator\" vem do fato de que os cientistas envolvidos com a descobertas se sentiram irritados ao saber que o focinho havia sido elongado artificialmente, enquanto o nome específico challengeri vem da personagem Professor Challenger, do livro O Mundo Perdido, de Arthur Conan Doyle.\n[…]\nComo um dinossauro da família dos espinossaurídeos, possuía as características comuns a esses dinossauros: Cabeça longa, muito parecida com a de um crocodilo e braços grandes e fortes - algo incomum entre os terópodes. Não se sabe se ele possuía ou não uma vela nas costas, como a de seu parente espinossauro, já que apenas foram descobertos ossos do crânio do animal. Possuía uma crista na  ponta do crânio, e suas narinas ficavam exatamente à frente dos olhos, como nas aves.\n[…]\nUm animal próximo do Irritator, o Baryonyx, já foi encontrado com restos de um iguanodonte dentro, levando o paleontólogo Darren Naish a acreditar que espinossaurídeos como o Irritator também se alimentassem de vertebrados terrestres.\n[…]\nQuando o Angaturama foi descrito em 1996, um outro dinossauro já havia sido encontrado, o Irritator, do qual, se tem fósseis do crânio que se \"complementariam\" com os do primeiro. Isso pode levar a crer que ambos possam ser a mesma espécie, apesar que estudos mostrem que o espécime de Angaturama seria maior que o espécime de Irritator e de que no trabalho original, apenas A. limai tenha sido descrito como sendo espinossaurinideo, pois I. challengeri foi descrito como possível maniraptora.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Ubirajara jubatus",
      "descricao": "Pequeno dinossauro terópode com estruturas semelhantes a penas, do Cretáceo do Ceará, cujo fóssil foi levado à Alemanha e devolvido ao Brasil."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do pequeno dinossauro cearense Ubirajara vem do tupi. Ele significa senhor de quê?",
    "resposta": "Da lança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ubirajara_jubatus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ubirajara_jubatus",
        "situacao": "ok",
        "texto": "\"Ubirajara\" (\"lord of the spear\") is an informal genus of compsognathid theropod dinosaur that lived during the early Cretaceous period in what is now Brazil. The manuscript describing it was available online pre-publication but was never formally published and, as a consequence, both genus and species name are considered invalid and unavailable. It is known by a single species, \"Ubirajara jubatus\n[…]\nThe description caused controversy due to the fossil having been apparently illegally smuggled from Brazil. In June 2023, Germany returned the fossil to Brazil after a legitimate export permit could not be found. The name \"Ubirajara jubatus\" was removed from ZooBank in November 2022, which means it no longer has any nomenclatural significance. The case has been labeled as an instance of scientific colonialism.\n[…]\nAs a result, Brazilian scientists campaigned for the repatriation of the fossil. This campaign relied heavily on social media and mobilised a large number of supporters under the hashtag #UbirajaraBelongstoBR.\n[…]\nThe genus name \"Ubirajara\" was erected by Robert S. H. Smyth, David Michael Martill, Eberhard Frey, Hector Eduardo Rivera-Silva and Norbert Lenz in December 2020. The generic name means \"Lord of the Spear\" in the local Tupi language, in reference to the elongate shoulder filaments. The informal specific name, \"jubatus\", means \"maned\" in Latin, referring to the preserved integument on its back.\n[…]\nThe \"temporary removal\" and ultimately the retraction of the publication describing the new genus and species, however, raise questions as to the nomenclatural validity of the new taxon. On 18 November 2022, the records of the names \"Ubirajara jubatus\", as well as their publication records, were removed from ZooBank, and a 2023 review noted that \"Ubirajara jubatus\" is an unavailable name with no nomenclatural significance, but not specifically a nomen nudum."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ubirajara_jubatus",
        "situacao": "ok",
        "texto": "Ubirajara (\"senhor da lança\" em tupi antigo) é um gênero informal de dinossauro de terópode compsognatídeo que viveu durante o começo do período Cretáceo onde hoje é o Brasil.O manuscrito que o descrevia foi disponibilizado online como uma versão preliminar, mas nunca foi formalmente publicado e, consequentemente, tanto o nome genérico quanto o nome específico são inválidos e indisponíveis. É conh\n[…]\nEm Julho de 2022, a Alemanha concordou em repatriar o fóssil para o Brasil após uma permissão legítima de exportação não ter sido encontrado. O nome \"Ubirajara jubatus\" foi removido do Zoobank em Novembro de 2022, o que implica que ele não possui qualquer signficância nomenclatural.\n[…]\nEntretanto, como o manuscrito descrevendo o fóssil e o nomeando nunca foi publicado, em 18 de Novembro de 2022, os registros do nome \"Ubirajara jubatus\", assim como o registro de sua \"publicação\", foram removidos do Zoobank, e uma revisão publicada em 2023 constatou que o nome \"Ubirajara jubatus\" é um nome indisponível e sem relevância nomenclatural, mas não especificamente um nomen nudum.\n[…]\nEm 2022, finalmente saiu a público a notícia de que as autoridades da Alemanha avaliaram os pedidos de repatriação e constataram de fato haver irregularidades e inconsistência de informações em torno da obtenção do fóssil. A fim de buscar preservar a reputação do Staatliches Museum für Naturkunde Stuttgart e do estado Alemão, a ministra da Ciência alemã, Theresia Bauer, recomendou que a repatriação do fóssil do  Ubirajara jubatus seja de fato realizada, devolvendo o exemplar ao país de origem.\n[…]\n«O dinossauro brasileiro que a Alemanha não quer devolver para o país». Podcast Café da Manhã na Folha de S.Paulo. Consultado em 16 de setembro de 2021",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ubirajara jubatus",
      "descricao": "Pequeno dinossauro terópode com estruturas semelhantes a penas, do Cretáceo do Ceará, cujo fóssil foi levado à Alemanha e devolvido ao Brasil."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que foi retirado de publicação o artigo científico que descrevia o dinossauro cearense Ubirajara jubatus?",
    "resposta": "Fóssil saiu ilegalmente do Brasil",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ubirajara_jubatus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ubirajara_jubatus",
        "situacao": "ok",
        "texto": "\"Ubirajara\" (\"lord of the spear\") is an informal genus of compsognathid theropod dinosaur that lived during the early Cretaceous period in what is now Brazil. The manuscript describing it was available online pre-publication but was never formally published and, as a consequence, both genus and species name are considered invalid and unavailable. It is known by a single species, \"Ubirajara jubatus\n[…]\nThe description caused controversy due to the fossil having been apparently illegally smuggled from Brazil. In June 2023, Germany returned the fossil to Brazil after a legitimate export permit could not be found. The name \"Ubirajara jubatus\" was removed from ZooBank in November 2022, which means it no longer has any nomenclatural significance. The case has been labeled as an instance of scientific colonialism.\n[…]\nAs a result, Brazilian scientists campaigned for the repatriation of the fossil. This campaign relied heavily on social media and mobilised a large number of supporters under the hashtag #UbirajaraBelongstoBR.\n[…]\nDue to the ethical issues involving the potentially illegal transfer of the fossil from Brazil to Germany, the paper describing the specimen was \"temporarily removed\" only a few days after being made available online \"in press\" prior to formal publication. The article was later withdrawn in September 2021.\n[…]\nAccordingly, State Minister for Science, Research and Culture Theresia Bauer made an announcement in July 2022 that the fossil of \"Ubirajara jubatus\" would be returned to Brazil. During a ceremony on 12 June 2023, the specimen was officially repatriated by a German delegation headed by German Foreign Minister Annalena Baerbock. It is now on display at the Plácido Cidade Nuvens Paleontology Museum which is associated with the Regional University of Cariri (Urca).\n[…]\nIn life, the fossil individual would have been approximately 1 metre (3.3 ft) long."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ubirajara_jubatus",
        "situacao": "ok",
        "texto": "Ubirajara (\"senhor da lança\" em tupi antigo) é um gênero informal de dinossauro de terópode compsognatídeo que viveu durante o começo do período Cretáceo onde hoje é o Brasil.O manuscrito que o descrevia foi disponibilizado online como uma versão preliminar, mas nunca foi formalmente publicado e, consequentemente, tanto o nome genérico quanto o nome específico são inválidos e indisponíveis. É conh\n[…]\nEm Julho de 2022, a Alemanha concordou em repatriar o fóssil para o Brasil após uma permissão legítima de exportação não ter sido encontrado. O nome \"Ubirajara jubatus\" foi removido do Zoobank em Novembro de 2022, o que implica que ele não possui qualquer signficância nomenclatural.\n[…]\nEntretanto, como o manuscrito descrevendo o fóssil e o nomeando nunca foi publicado, em 18 de Novembro de 2022, os registros do nome \"Ubirajara jubatus\", assim como o registro de sua \"publicação\", foram removidos do Zoobank, e uma revisão publicada em 2023 constatou que o nome \"Ubirajara jubatus\" é um nome indisponível e sem relevância nomenclatural, mas não especificamente um nomen nudum.\n[…]\nA Sociedade Brasileira de Paleontologia (SBP) investigou e declarou que a exportação do fóssil ocorreu de forma irregular, de modo que buscou obter a devolução do Ubirajara ao Brasil.\n[…]\nEm 2022, finalmente saiu a público a notícia de que as autoridades da Alemanha avaliaram os pedidos de repatriação e constataram de fato haver irregularidades e inconsistência de informações em torno da obtenção do fóssil. A fim de buscar preservar a reputação do Staatliches Museum für Naturkunde Stuttgart e do estado Alemão, a ministra da Ciência alemã, Theresia Bauer, recomendou que a repatriação do fóssil do  Ubirajara jubatus seja de fato realizada, devolvendo o exemplar ao país de origem.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Saturnalia tupiniquim",
      "descricao": "Dinossauro primitivo do Triássico encontrado no Rio Grande do Sul e descrito em 1999."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O dinossauro gaúcho Saturnalia tem nome de uma festa romana porque seus fósseis foram encontrados durante que festa brasileira?",
    "resposta": "Carnaval",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saturnalia_(dinosaur)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saturnalia_(dinosaur)",
        "situacao": "ok",
        "texto": "Saturnalia is an extinct genus of basal sauropodomorph dinosaur known from the Late Triassic Santa Maria Formation of Rio Grande do Sul, southern Brazil. It contains one species, Saturnalia tupiniquim. It is one of the earliest known dinosaurs.\n[…]\nIn 1999, Max Cardoso Langer, Fernando Abdala, Martha Richter, and Michael J. Benton described the new genus and species Saturnalia tupiniquim based on the three skeletons. The genus name is derived from the Roman festival of Saturnalia, in reference to the specimens' discovery during the festival of Carnival, and the species name, tupiniquim, is a word of Guarani origin colloquially used in Portuguese to refer to things of Brazilian origin.\n[…]\nSaturnalia tupiniquim is known from three well-preserved partial skeletons and disarticulated remains from at least three other individuals. The holotype, MCP 3844-PV is a partial skeleton including most of the presacral vertebrae and sacrum, the pectoral and pelvic girdles, the right humerus and part of the right ulna, the left femur, and most of the right hind limb.\n[…]\nAnother specimen, LPRP/USP 0651, consisting of a few vertebrae, ilium, and most of the right hind limb, was originally described as representing a distinct species, Nhandumirim waldsangae, but may be a juvenile individual of Saturnalia tupiniquim.\n[…]\nSaturnalia may have been prey to the contemporary herrerasaurid Staurikosaurus. Buriolestes, a carnivorous sauropodomorph similar to Saturnalia, was contemporaneous with it, although the two have yet to be discovered at the exact same locality. Buriolestes was longer-snouted than Saturnalia and the two may demonstrate niche partitioning.\n[…]\nMedia related to Saturnalia at Wikimedia Commons\n[…]\nData related to Saturnalia at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saturnalia_tupiniquim",
        "situacao": "ok",
        "texto": "Saturnalia tupiniquim é uma espécie de dinossauro basal descoberto na cidade de Santa Maria, Rio Grande do Sul, Brasil, que viveu no Carniano, no final do período Triássico (há 233 milhões de anos), tornando-se um dos mais antigos dinossauros já encontrados.\n[…]\nFaz parte dos sauropodomorfos, grupo que inclui os saurópodes gigantes e formas menores que viveram durante o Triássico. Tinha cerca de 1,5 metros de comprimento.\n[…]\nO holótipo juntamente dos parátipos foram descobertos no Sítio Paleontológico Sanga da Alemoa (também chamado de Waldsanga ou Cerro da Alemoa), em Santa Maria, Rio Grande do Sul, Brasil. A escavação foi realizada durante o Carnaval, que se acredita ter suas origens na festa do solstício do inverno romano, Saturno; o que deu origem ao nome em 1999, juntamente com a palavra tupiniquim do português e guarani, que significa algo \"tipicamente brasileiro\".\n[…]\nNa descrição do táxon, o paleontólogo Max Cardoso Langer e colegas (1999) o classificaram como membro de Sauropodomorpha. José Fernando Bonaparte e colegas, em um estudo de 2007, concluíram que Saturnalia tupiniquim é muito semelhante a outro dinossauro descoberto no Brasil, o Guaibasaurus candelariensis. Bonaparte posicionou ambos na mesma família, Guaibasauridae.\n[…]\nOutros dinossauros\n[…]\nTaxonomia dos dinossauros\n[…]\nLista de dinossauros do Brasil\n[…]\n«O Rio Grande do Sul no tempo dos dinossauros»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Brontossauro",
      "descricao": "Gênero de dinossauro saurópode de pescoço longo do Jurássico Superior da América do Norte, batizado em 1879."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Batizado em 1879, o brontossauro, gigante de pescoço longo, tem um nome grego que significa lagarto de quê?",
    "resposta": "Trovão",
    "distratores": [
      "Montanha",
      "Pântano",
      "Rochedo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brontosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brontosaurus",
        "situacao": "ok",
        "texto": "Brontosaurus ( BRON-tə-SOR-əs; literally 'thunder lizard', from the Greek words βροντή brontḗ, 'thunder', and σαῦρος saûros, 'lizard') is a genus of herbivorous sauropod dinosaur that lived in present-day United States during the Late Jurassic period. It was described by American paleontologist Othniel Charles Marsh in 1879, the type species being dubbed B. excelsus, based on a partial skeleton la\n[…]\nOriginally named by its discoverer Othniel Charles Marsh in 1879, Brontosaurus had long been considered a junior synonym of Apatosaurus; its type species, Brontosaurus excelsus, was reclassified as A. excelsus in 1903. However, an extensive study published in 2015 by a joint British-Portuguese research team concluded that Brontosaurus was a valid genus of sauropod distinct from Apatosaurus. Nevertheless, not all paleontologists agree with this division.\n[…]\nBrontosaurus excelsus, the type species of Brontosaurus, was first named by Marsh in 1879. Many specimens have been assigned to the species, such as FMNH P25112, the skeleton mounted at the Field Museum of Natural History, which has since been found to represent an unknown species of apatosaurine. Brontosaurus amplus, is a junior synonym of B. excelsus. B. excelsus therefore only includes its type specimen and the type specimen of B. amplus.\n[…]\nWhen Brontosaurus was described in 1879, the widespread notion in the scientific community was that sauropods were semi-aquatic, lethargic reptiles that were inactive. In Othniel Marsh's publication The Dinosaurs of North America, he described the dinosaur as \"more or less amphibious, and its food was probably aquatic plants or other succulent vegetation\". This is unsupported by fossil evidence. Instead, sauropods were active and had adaptations for dwelling on land.\n[…]\nWikijunior Dinosaurs/Brontosaurus at Wikibooks\n[…]\nIs Brontosaurus Back? (Youtube video, 11 minutes, 2015)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Brontosaurus",
        "situacao": "ok",
        "texto": "Brontosaurus (do grego \"Lagarto Trovão\"), o brontossauro, foi um gênero de dinossauro da família Diplodocidae que ocorreu no Jurássico Superior da América do Norte, sendo reconhecidas três espécies. O Brontosaurus, táxon primo do Apatosaurus, era um saurópode robusto e com uma caixa torácica profunda e membros fortes. O pescoço não era muito flexível na posição vertical e a cabeça estaria mais ori\n[…]\nO gênero Brontosaurus foi descrito por Othniel Charles Marsh em 1879. Em 1903 Elmer Samuel Riggs considerou o gênero como sinônimo de Apatosaurus. Em 2015 uma revisão extensiva da família Diplodocidae restaurou Brontosaurus como um gênero válido.\n[…]\n«Nature: Beloved Brontosaurus makes a comeback» (em inglês)\n[…]\n«ScienceMag: 'Brontosaurus' name resurrected by new dino family tree» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Fóssil",
      "descricao": "Resto ou vestígio preservado de um ser vivo de épocas geológicas passadas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra fóssil vem do latim fossilis. O que esse termo latino significava?",
    "resposta": "Obtido cavando",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fossil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fossil",
        "situacao": "ok",
        "texto": "A fossil (from Classical Latin fossilis, lit. 'obtained by digging') is any preserved remains, impression, or trace of any once-living thing from a past geological age. Examples include bones, shells, exoskeletons, stone imprints of animals or microbes, objects preserved in amber, hair, petrified wood and DNA remnants. The totality of fossils is known as the fossil record.\n[…]\nA derived, reworked or remanié fossil is a fossil found in rock that accumulated significantly later than when the fossilized animal or plant died. Reworked fossils are created by erosion exhuming (freeing) fossils from the rock formation in which they were originally deposited and redepositing them in a younger sedimentary deposit.\n[…]\nFossil trading is the practice of buying and selling fossils. This is sometimes done illegally with material stolen from research sites, costing many important scientific specimens each year. Sometimes, fossils of significant scientific importance are found and traded legally at prices that research organizations cannot afford. Such fossils may be damaged in private ownership before they are ever available to researchers. The problem is common in China where many specimens have been stolen.\n[…]\nFossil collecting (sometimes, in a non-scientific sense, fossil hunting) is the collection of fossils for scientific study, leisure, or profit. Amateur fossil collecting is the predecessor of modern paleontology and remains a practiced hobby to date. Professionals and amateurs alike collect fossils for their scientific value. Some amateur fossil collectors will donate scientifically significant specimens to research organizations.\n[…]\nThe Fossil Record, a complete listing of the families, orders, class and phyla found in the fossil record (archived 3 May 2012)\n[…]\nErnest Ingersoll (1920). \"Fossils\" . Encyclopedia Americana.\n[…]\n\"Fossil\" . New International Encyclopedia. 1905."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/F%C3%B3ssil",
        "situacao": "ok",
        "texto": "O termo fóssil é proveniente do latim fossilis, que significa “tirado da terra”. Os fósseis são restos de seres vivos ou de evidências de suas atividades biológicas preservados em diversos materiais. Essa preservação ocorre principalmente em rochas, mas pode ocorrer também em materiais como sedimento, gelo, piche, resina, solo e caverna , e os exemplos mais citados são ossos e caules fossilizados,\n[…]\nLeonardo da Vinci concordou com a visão de Aristóteles de que os fósseis eram os restos da vida antiga.\n[…]\nO registro fóssil e a sucessão faunística são a base da ciência da bioestratigrafia ou determinam a idade das rochas com base em fósseis embutidos. Nos primeiros 150 anos de geologia, biostratigrafia e sobreposição foram o único meio para determinar a idade relativa das rochas. A escala de tempo geológico foi desenvolvida com base nas idades relativas dos estratos de rocha, conforme determinado pelos primeiros paleontologistas e estratigrafos.\n[…]\nO estudo de Niles Eldredge sobre o gênero Trilobita apoiou a hipótese de que as modificações no arranjo das lentes dos olhos do trilobite prosseguem e se encaixam durante milhões de anos durante o Devoniano. A interpretação de Eldredge do registro de fósseis de Phacops foi que as consequências das mudanças de lente, mas não o processo evolutivo de ocorrência rápida, foram fossilizadas.\n[…]\nA análise tomográfica de raios X do síncrotron dos microfósseis embrionários bilaterais precoce do Cambriano produziu novos conhecimentos sobre a evolução dos metazoários nas primeiras etapas. A técnica de tomografia fornece resolução tridimensional previamente inalcançável nos limites da fossilização. Os fósseis de dois biláteros enigmáticos, o Markuelia sem fim e um protostomo primitivo, os Pseudo-orides, fornecem uma olhada no desenvolvimento embrionário da camada germinativa.\n[…]\nFóssil de idade\n[…]\nFóssil de transição\n[…]\nImages of Plant Fossils\n[…]\nO que é um fóssil?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Período Cretáceo",
      "descricao": "Último período da Era Mesozoica, de cerca de 145 a 66 milhões de anos atrás, encerrado pela extinção dos dinossauros não avianos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Cretáceo, último período da era dos dinossauros, tem nome derivado da palavra latina para que rocha branca?",
    "resposta": "Giz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cretaceous"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cretaceous",
        "situacao": "ok",
        "texto": "The Cretaceous (IPA:  krih-TAY-shəss) is a geological period that lasted from about 143.1 to 66 Ma (million years ago). It is the third and final period of the Mesozoic Era, as well as the longest. At around 77.1 million years, it is the ninth and longest geological period of the entire Phanerozoic. The name is derived from the Latin creta, 'chalk', which is abundant in deposits from the latter ha\n[…]\nFrom youngest to oldest, the subdivisions of the Cretaceous Period are:\n[…]\nFlowering plants underwent a rapid radiation beginning during the middle Cretaceous, becoming the dominant group of land plants by the end of the period, coincident with the decline of previously dominant groups such as conifers. The oldest known fossils of grasses are from the Albian, with the family having diversified into modern groups by the end of the Cretaceous. The oldest large angiosperm trees are known from the Turonian (c.\n[…]\nPterosaurs were common in the early and middle Cretaceous, but as the Cretaceous proceeded they declined for poorly understood reasons (once thought to be due to competition with early birds, but now it is understood avian adaptive radiation is not consistent with pterosaur decline). By the end of the period only three highly specialized families remained; Pteranodontidae, Nyctosauridae, and Azhdarchidae.\n[…]\nIn the seas, rays, modern sharks and teleosts became common. Marine reptiles included ichthyosaurs in the early and mid-Cretaceous (becoming extinct during the late Cretaceous Cenomanian-Turonian anoxic event), plesiosaurs throughout the entire period, and mosasaurs appearing in the Late Cretaceous. Sea turtles in the form of Cheloniidae and Panchelonioidea lived during the period and survived the extinction event.\n[…]\nUCMP Berkeley Cretaceous page\n[…]\nCretaceous (chronostratigraphy scale)\n[…]\n\"Cretaceous System\" . Encyclopædia Britannica. Vol. 7 (11th ed.). 1911. pp. 414–418."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cret%C3%A1ceo",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Cretáceo ou Cretácico é o período da era Mesozoica do éon Fanerozoico que está compreendido entre há 143,1 milhões e 66 milhões de anos, aproximadamente. O Período Cretáceo sucede o Período Jurássico de sua era e precede o Período Paleogeno da Era Cenozoica de seu éon. Divide-se nas épocas Cretáceo Inferior e Cretáceo Superior, da mais antiga para a mais recente.\n[…]\nO Cretáceo como um período separado foi definido pela primeira vez pelo geólogo belga Jean d'Omalius d'Halloy em 1822 como o Terrain Crétacé, usando estratos na Bacia de Paris e nomeado pelos extensos leitos de giz (carbonato de cálcio depositado pelas conchas de invertebrados marinhos, principalmente cocolitos), encontrados no Cretáceo Superior da Europa Ocidental. O nome 'Cretáceo' deriva do latim creta, que significa 'giz'.\n[…]\nDo mais recente para o mais antigo, as subdivisões do Período Cretáceo são:\n[…]\nA AACS está associada a um período árido na Península Ibérica.\n[…]\nO Lagerstätte de Liaoning (Formação Yixian), na China, é um sítio importante, repleto de restos preservados de inúmeros tipos de pequenos dinossauros, aves e mamíferos, que oferece um vislumbre da vida no Cretáceo Inferior. Os dinossauros celurossauros ali encontrados representam tipos do grupo Maniraptora, que inclui as aves modernas e seus parentes não aviários mais próximos, como dromeossauros, ovirraptossauros, terizinossauros, troodontídeos, além de outros avialanos.\n[…]\nNos mares, raias (Batoidea), tubarões modernos e teleósteos tornaram-se comuns. Os répteis marinhos incluíam ictiossauros no início e meados do Cretáceo (extinguindo-se durante o Evento anóxico cenomaniano-turoniano), plessiossauros ao longo de todo o período e mossassauros surgindo no Cretáceo Superior. Tartarugas marinhas das famílias Cheloniidae e Panchelonioidea viveram durante o período e sobreviveram ao evento de extinção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Período Cretáceo",
      "descricao": "Último período da Era Mesozoica, de cerca de 145 a 66 milhões de anos atrás, encerrado pela extinção dos dinossauros não avianos."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual destes períodos geológicos durou mais tempo?",
    "resposta": "Cretáceo",
    "distratores": [
      "Jurássico",
      "Triássico",
      "Permiano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cretaceous",
      "https://en.wikipedia.org/wiki/Jurassic",
      "https://en.wikipedia.org/wiki/Triassic",
      "https://en.wikipedia.org/wiki/Permian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cretaceous",
        "situacao": "ok",
        "texto": "The Cretaceous (IPA:  krih-TAY-shəss) is a geological period that lasted from about 143.1 to 66 Ma (million years ago). It is the third and final period of the Mesozoic Era, as well as the longest. At around 77.1 million years, it is the ninth and longest geological period of the entire Phanerozoic. The name is derived from the Latin creta, 'chalk', which is abundant in deposits from the latter ha\n[…]\nThe Cretaceous as a separate period was first defined by Belgian geologist Jean d'Omalius d'Halloy in 1822 as the Terrain Crétacé, using strata in the Paris Basin and named for the extensive beds of chalk (calcium carbonate deposited by the shells of marine invertebrates, principally coccoliths), found in the upper Cretaceous of Western Europe. The name 'Cretaceous' was derived from the Latin creta, meaning 'chalk'.\n[…]\nFrom youngest to oldest, the subdivisions of the Cretaceous Period are:\n[…]\nPterosaurs were common in the early and middle Cretaceous, but as the Cretaceous proceeded they declined for poorly understood reasons (once thought to be due to competition with early birds, but now it is understood avian adaptive radiation is not consistent with pterosaur decline). By the end of the period only three highly specialized families remained; Pteranodontidae, Nyctosauridae, and Azhdarchidae.\n[…]\nIn the seas, rays, modern sharks and teleosts became common. Marine reptiles included ichthyosaurs in the early and mid-Cretaceous (becoming extinct during the late Cretaceous Cenomanian-Turonian anoxic event), plesiosaurs throughout the entire period, and mosasaurs appearing in the Late Cretaceous. Sea turtles in the form of Cheloniidae and Panchelonioidea lived during the period and survived the extinction event.\n[…]\nCretaceous Microfossils: 180+ images of Foraminifera\n[…]\nCretaceous (chronostratigraphy scale)\n[…]\n\"Cretaceous System\" . Encyclopædia Britannica. Vol. 7 (11th ed.). 1911. pp. 414–418."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jurassic",
        "situacao": "ok",
        "texto": "The Jurassic ( juurr-ASS-ik) is a geologic period and stratigraphic system that lasted about 58.3 million years, spanning from the end of the Triassic Period 201.4 Ma (million years ago) to the beginning of the Cretaceous Period, 143.1 Ma. The Jurassic constitutes the second and middle period of the Mesozoic Era as well as the eighth period of the Phanerozoic Eon and is named after the Jura Mounta\n[…]\nThe end of the Jurassic, however, has no clear, definitive boundary with the Cretaceous and is the only boundary between geological periods to remain formally undefined.\n[…]\nThe Tithonian was introduced in scientific literature by Albert Oppel in 1865. The name Tithonian is unusual in geological stage names because it is derived from Greek mythology rather than a place name. Tithonus was the son of Laomedon of Troy and fell in love with Eos, the Greek goddess of dawn. His name was chosen by Albert Oppel for this stratigraphical stage because the Tithonian finds itself hand in hand with the dawn of the Cretaceous. The base of the Tithonian currently lacks a GSSP.\n[…]\nCycads reached their apex of diversity during the Jurassic and Cretaceous Periods. Despite the Mesozoic sometimes being called the \"Age of Cycads\", cycads are thought to have been a relatively minor component of mid-Mesozoic floras, with the Bennettitales and Nilssoniales, which have cycad-like foliage, being dominant. The Nilssoniales have often been considered cycads or cycad relatives, but have been found to be distinct on chemical grounds, and perhaps more closely allied with Bennettitales.\n[…]\nRudists, the dominant reef-building organisms of the Cretaceous, first appeared in the Late Jurassic (mid-Oxfordian) in the northern margin of the western Tethys, expanding to the eastern Tethys by the end of the Jurassic."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Triassic",
        "situacao": "ok",
        "texto": "The Triassic ( try-A-sik) is a geologic period and a stratigraphic system that spans 50.5 million years from the end of the Permian Period 251.902 Ma (million years ago) to the beginning of the Jurassic Period 201.4 Ma. The Triassic Period is the first and shortest geologic period of the Mesozoic Era, and the seventh period of the Phanerozoic Eon. The start and the end of the Triassic Period featu\n[…]\nEustatic sea level in the Triassic was consistently low compared to the other geological periods. The beginning of the Triassic was around present sea level, rising to about 10–20 metres (33–66 ft) above present-day sea level during the Early and Middle Triassic. Sea level rise accelerated in the Ladinian, culminating with a sea level up to 50 metres (164 ft) above present-day levels during the Carnian.\n[…]\nTemnospondyl amphibians were among those groups that survived the Permian–Triassic extinction. Once abundant in both terrestrial and aquatic environments, the terrestrial species had mostly died out during the extinction event. The Triassic survivors were aquatic or semi-aquatic, and were represented by Tupilakosaurus, Thabanchuia, Branchiosauridae and Micropholis, all of which died out in Early Triassic, and the successful Stereospondyli, with survivors into the Cretaceous Period.\n[…]\nThese extinctions within the Triassic and at its end allowed the dinosaurs to expand into many niches that had become unoccupied. Dinosaurs became increasingly dominant, abundant and diverse, and remained that way for the next 150 million years. The true \"Age of Dinosaurs\" is during the following Jurassic and Cretaceous periods, rather than the Triassic.\n[…]\nTriassic land vertebrate faunachrons – Subdivisions of geological time\n[…]\nEmiliani, Cesare. (1992). Planet Earth: Cosmology, Geology, & the Evolution of Life & the Environment. Cambridge University Press. (Paperback Edition ISBN 0-521-40949-7)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cret%C3%A1ceo",
        "situacao": "ok",
        "texto": "Na escala de tempo geológico, o Cretáceo ou Cretácico é o período da era Mesozoica do éon Fanerozoico que está compreendido entre há 143,1 milhões e 66 milhões de anos, aproximadamente. O Período Cretáceo sucede o Período Jurássico de sua era e precede o Período Paleogeno da Era Cenozoica de seu éon. Divide-se nas épocas Cretáceo Inferior e Cretáceo Superior, da mais antiga para a mais recente.\n[…]\nDo mais recente para o mais antigo, as subdivisões do Período Cretáceo são:\n[…]\nNo auge da transgressão cretácea, um terço da atual área terrestre da Terra estava submersa.\n[…]\nAs temperaturas aumentaram drasticamente após o fim da AACS, que terminou há cerca de 111 Ma com o Máximo Térmico de Paquier/Urbino, dando lugar ao Mundo Estufa do Cretáceo Médio (MKH), que durou do início do Albiano até o início do Campaniano. Acredita-se que taxas mais rápidas de expansão do fundo oceânico e a entrada de dióxido de carbono na atmosfera tenham iniciado esse período de calor extremo, juntamente com a alta atividade de basaltos de inundação.\n[…]\nAltas temperaturas, alimentando tempestades massivas, furacões e incêndios florestais, causaram danos às árvores. Isso, juntamente com os danos causados por artrópodes, fez com que as árvores durante esse período produzissem grandes quantidades de resina, levando ao Intervalo Resinoso do Cretáceo, que durou de 125 a 75 milhões de anos atrás.\n[…]\nAs plantas com flor passaram por uma radiação rápida começando durante o Cretáceo médio, tornando-se o grupo dominante de plantas terrestres até o final do período, coincidindo com o declínio de grupos anteriormente dominantes, como as coníferas. Os fósseis mais antigos conhecidos de gramíneas (capins) são do Albiano, com a família tendo se diversificado em grupos modernos até o final do Cretáceo. As árvores angiospermas de grande porte mais antigas são conhecidas do Turoniano (c.\n[…]\nGeologia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Amonite",
      "descricao": "Grupo extinto de moluscos cefalópodes marinhos de concha em espiral, muito comuns como fósseis."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Famosos fósseis de moluscos marinhos em espiral têm nome inspirado nos chifres de carneiro de que deus egípcio?",
    "resposta": "Amon",
    "distratores": [
      "Rá",
      "Hórus",
      "Anúbis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ammonoidea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ammonoidea",
        "situacao": "ok",
        "texto": "Ammonoids are extinct, typically coiled-shelled cephalopods composing the subclass Ammonoidea. They are more closely related to living octopuses, squid, and cuttlefish (which compose the clade Coleoidea) than they are to nautiluses (family Nautilidae), which their shells resemble.\n[…]\nAmmonites (subclass Ammonoidea) can be distinguished by their septa, the dividing walls that separate the chambers in the phragmocone, by the nature of their sutures where the septa join the outer shell wall, and in general by their siphuncles.\n[…]\nCeratitic – lobes have subdivided tips, giving them a saw-toothed appearance. The saddles are rounded and undivided. This suture pattern is characteristic of Triassic ammonoids in the order Ceratitida. This pattern convergently re-evolved in the Cretaceous engonoceratid ammonites, commonly referred to as \"pseudoceratites\".\n[…]\nAmmonitic – lobes and saddles are much subdivided (fluted); subdivisions are usually rounded instead of saw-toothed. Ammonoids of this type are the most important species from a biostratigraphical point of view. This suture type is characteristic of Jurassic and Cretaceous ammonoids, but extends back all the way to the Permian.\n[…]\nMany of them (such as Oxynoticeras) are thought to have been good swimmers, with flattened, discus-shaped, streamlined shells, although some ammonoids were less effective swimmers and were likely to have been slow-swimming bottom-dwellers. Synchrotron analysis of an aptychophoran ammonite revealed remains of isopod and mollusc larvae in its buccal cavity, indicating at least this kind of ammonite fed on plankton.\n[…]\nThe ammonites of Peacehaven - photos of giant cretaceous ammonites in Southern England\n[…]\nWilliam R. Wahl * Mosasaur Bite Marks on an Ammonite. Preservation of an Aborted Attack?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ammonoidea",
        "situacao": "ok",
        "texto": "Os amonoides (do latim científico Ammonoidea), também chamados de amonites ou amonitas, constituem um grupo extinto de moluscos cefalópodes surgido no período Devónico e que desapareceu na extinção K-T, no final do Cretáceo que também vitimou os dinossauros.\n[…]\nA concha das amonites apresenta geralmente a forma de uma espiral enrolada num plano (embora algumas espécies, denominadas heteromórficas , apresentem um enrolamento mais complexo e tridimensional) e é precisamente esta característica que determinou o seu nome. A aparência desses animais, na verdade, lembra vagamente a de um chifre enrolado, como o de um carneiro (o deus egípcio Amon , nos tempos helenístico e romano, era comumente representado como um homem com chifres de carneiro).\n[…]\nO famoso estudioso romano Plínio, o Velho (autor do tratado Naturalis Historia) definiu os fósseis destes animais como Ammonis cornua, \"chifres de Amon\". Muitas vezes o nome das espécies de amonitas termina em ceras, uma palavra grega (κέρας) cujo significado é, na verdade, \"chifre\" (por exemplo, Pleuroceras que etimologicamente significa chifre com costelas). As amonites são consideradas os fósseis por excelência, tanto que são frequentemente utilizadas como símbolo gráfico da paleontologia.\n[…]\nAs amonites eram animais marinhos, que ocupavam o nicho ecológico das atuais lulas. Tinham dimensões muito variáveis, desde alguns centímetros a um metro de diâmetro. O animal vivia dentro de uma concha espiralada de natureza carbonatada, semelhante à dos nautiloides atuais.\n[…]\nAs conchas de amonite são um tipo comum de fóssil em formações marinhas do Mesozoico. Em estratigrafia, as amonites são consideradas excelentes fósseis de idade.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Estegossauro",
      "descricao": "Gênero de dinossauro herbívoro do Jurássico Superior com placas nas costas e espinhos na cauda."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os espinhos da cauda do estegossauro ganharam em inglês o apelido de thagomizer, criado numa tirinha de que cartunista americano?",
    "resposta": "Gary Larson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thagomizer",
      "https://en.wikipedia.org/wiki/Stegosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thagomizer",
        "situacao": "ok",
        "texto": "A thagomizer () is the distinctive arrangement of spike-shaped osteoderms on the tails of some stegosaurian dinosaurs. These spikes are believed to have been a defensive measure against predators.\n[…]\nThe arrangement of spikes originally had no distinct name. Cartoonist Gary Larson invented the name \"thagomizer\" in 1982 as a joke in his comic strip The Far Side, and it was gradually adopted as an informal term sometimes used within scientific circles, research, and education.\n[…]\nThe term thagomizer was coined by Gary Larson in jest. In a 1982 The Far Side comic, a group of cavemen are taught by a caveman lecturer that the spikes on a stegosaur's tail were named \"after the late Thag Simmons\".\n[…]\nHe also observed that Stegosaurus could have maneuvered its rear easily by keeping its large hindlimbs stationary and pushing off with its very powerfully muscled but short forelimbs, allowing it to swivel deftly to deal with attack. In 2010, analysis of a digitized model of Kentrosaurus aethiopicus showed that the tail could bring the thagomizer around to the sides of the dinosaur, possibly striking an attacker beside it.\n[…]\nIn 2001, a study of thagomizers by McWhinney et al. showed a high incidence of trauma-related damage. This too supports the theory that the principal function of the thagomizer was defense in combat. There is also evidence for a defense function in the form of an Allosaurus tail vertebra with a partially healed puncture wound that fits a Stegosaurus tail spike.\n[…]\nIn a 2017 paper, the term thagomizer graph (and also the associated \"thagomizer matroid\") was introduced for the complete tripartite graph K1,1,n.\n[…]\nTimeline of stegosaur research"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Stegosaurus",
        "situacao": "ok",
        "texto": "Stegosaurus (; lit. 'roof-lizard') is a genus of extinct herbivorous four-legged armored dinosaurs from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails. Fossils of the genus have been found in the western United States and in Portugal, where they are found in Kimmeridgian- to Tithonian-aged strata, dating to between 155 and\n[…]\nHubbell, a collector for Cope, also found a partial Stegosaurus skeleton while digging at Como Bluff in 1877 or '78 that are now part of the Stegosaurus mount (AMNH 5752) at the American Museum of Natural History.\n[…]\nmjosi) and would range from the Late Jurassic of North America and Europe to the Early Cretaceous of Asia. However, this classification scheme has not been followed by other researchers, and a 2017 cladistic analysis co-authored by Maidment with Thomas Raven rejects the synonymy of Hesperosaurus with Stegosaurus. In 2015, Maidment et al. revised their suggestion due to the recognition by Galton of S. armatus as a nomen dubium and its replacement by S. stenops as type species.\n[…]\nStegosaurus marshi, which was described by Lucas in 1901, was renamed Hoplitosaurus in 1902.\n[…]\nThe earliest popular image of Stegosaurus was an engraving produced by the French science illustrator Auguste-Michel Jobin, which appeared in the November 1884 issue of Scientific American and elsewhere, and which depicted the dinosaur amid a speculative Morrison age Jurassic landscape. Jobin restored the Stegosaurus as bipedal and long-necked, with the plates arranged along the tail and the back covered in spikes.\n[…]\nTimeline of stegosaur research\n[…]\nThe full text of Marsh, O. C. (1877). \"A new order of extinct Reptilia (Stegosauria) from the Jurassic of the Rocky Mountains\". American Journal of Science. 3 (14): 513–514 at Wikisource. The original article in which the discovery of Stegosaurus was first published."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thagomizer",
        "situacao": "ok",
        "texto": "Um thagomizer (do inglês \"thag-\", de Thag Simmons e \"—omizer\" de atomizer, literalmente \"vaporizador de Thag\") é o arranjo distintivo de quatro a dez espigões nas caudas dos dinossauros estegossaurídeos. Acredita-se que esses espinhos tenham sido utilizados como uma medida defensiva contra predadores.\n[…]\nO arranjo de espigões originalmente não tinha nome distinto. O cartunista Gary Larson inventou o nome \"thagomizer\" em 1982 como uma piada em sua história em quadrinhos Far Side , e foi gradualmente adotado como um termo informal às vezes usado nos círculos científicos, pesquisa e educação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Estegossauro",
      "descricao": "Gênero de dinossauro herbívoro do Jurássico Superior com placas nas costas e espinhos na cauda."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O tiranossauro viveu mais perto da nossa época do que da época de qual destes dinossauros?",
    "resposta": "Estegossauro",
    "distratores": [
      "Tricerátopo",
      "Velociraptor",
      "Anquilossauro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Stegosaurus",
      "https://en.wikipedia.org/wiki/Tyrannosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stegosaurus",
        "situacao": "ok",
        "texto": "Stegosaurus (; lit. 'roof-lizard') is a genus of extinct herbivorous four-legged armored dinosaurs from the Late Jurassic, characterized by the distinctive kite-shaped upright plates along their backs and spikes on their tails. Fossils of the genus have been found in the western United States and in Portugal, where they are found in Kimmeridgian- to Tithonian-aged strata, dating to between 155 and\n[…]\nThis \"brain\" was proposed to have given a Stegosaurus a temporary boost when it was under threat from predators.\n[…]\nLike Marsh's reconstruction, Knight's first restoration had a single row of large plates, though he next used a double row for his more well-known 1901 painting, produced under the direction of Frederic Lucas. Again under Lucas, Knight revised his version of Stegosaurus again two years later, producing a model with a staggered double row of plates.\n[…]\nKnight would go on to paint a stegosaur with a staggered double plate row in 1927 for the Field Museum of Natural History, and was followed by Rudolph F. Zallinger, who painted Stegosaurus this way in his \"Age of Reptiles\" mural at the Peabody Museum in 1947.\n[…]\nStegosaurus made its major public debut as a paper mache model commissioned by the U.S. National Museum of Natural History for the 1904 Louisiana Purchase Exposition. The model was based on Knight's latest miniature with the double row of staggered plates, and was exhibited in the United States Government Building at the exposition in St. Louis before being relocated to Portland, Oregon, for the Lewis and Clark Centennial Exposition in 1905.\n[…]\nTimeline of stegosaur research\n[…]\nThe full text of Marsh, O. C. (1877). \"A new order of extinct Reptilia (Stegosauria) from the Jurassic of the Rocky Mountains\". American Journal of Science. 3 (14): 513–514 at Wikisource. The original article in which the discovery of Stegosaurus was first published."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tyrannosaurus",
        "situacao": "ok",
        "texto": "Tyrannosaurus () is a genus of large theropod dinosaur. The type species Tyrannosaurus rex (rex meaning 'king' in Latin), often shortened to T. rex or colloquially T-Rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Stegosaurus",
        "situacao": "ok",
        "texto": "Stegosaurus — aportuguesado como estegossauro (pronúncia em português: [iʃtɛɡɔˈsawru]) ou estegossáurio — é um gênero de dinossauros herbívoros tireóforos. Os fósseis deste gênero datam do período Jurássico Superior, do período Kimmeridgiano aos primeiros estratos envelhecidos do Tithoniano, entre 155 e 148 milhões de anos atrás, no oeste dos Estados Unidos e em Portugal.\n[…]\nOs estegossauros eram um clado de animais semelhantes em aparência, postura e forma e que diferiam principalmente em sua variedade de pontas e placas. Entre os parentes mais próximos de Stegosaurus estão Wuerhosaurus da China e Kentrosaurus da África Oriental.\n[…]\nO primeiro estegossaurídeo (do gênero Lexovisaurus) foi descoberto na Formação Oxford Clay da Inglaterra e da França, mostrando que sua existência se deu do início ao meio do Calloviano. O gênero Huayangosaurus mais antigo e basal do Jurássico Médio da China (cerca de 165 milhões de anos atrás - Mya) antecedeu o Stegosaurus em 20 milhões de anos e é o único gênero da família Huayangosauridae.\n[…]\nUm gênero mais antigo ainda é o Scelidosaurus, do Jurássico Inferior da Inglaterra, que viveu há aproximadamente 190 Mya. Ele possuía características de ambos os estegossauros e anquilossauros. Emausaurus da Alemanha foi um outro pequeno quadrúpede, enquanto Scutellosaurus do estado do Arizona, Estados Unidos, foi um gênero ainda mais antigo e era facultativamente bípede.\n[…]\nSeus dentes \"não estavam bem posicionados em um osso para uma mastigação eficiente\", e não há evidências nos registros fósseis de estegossauros que mostrem que eles usavam gastrólitos — pedras ingeridas por alguns dinossauros (e algumas espécies atuais de aves) — para ajudar no processo de moagem, de modo que a forma exata como Stegosaurus obtinha e processava a quantidade de material vegetal necessário para manter seu tamanho, ainda é \"mal entendida\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Espinossauro",
      "descricao": "Gênero de grande dinossauro terópode semiaquático do Cretáceo do norte da África, com uma vela nas costas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os fósseis originais do espinossauro, guardados num museu de Munique, foram perdidos em 1944. O que os destruiu?",
    "resposta": "Bombardeio aliado na Segunda Guerra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Spinosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spinosaurus",
        "situacao": "ok",
        "texto": "Spinosaurus (; lit. 'spine lizard') is a genus of large spinosaurid theropod dinosaurs that lived in what is now North Africa during the Cenomanian age of the Late Cretaceous period, about 100 to 94 million years ago. The genus was known first from Egyptian remains discovered in 1912 and described by German palaeontologist Ernst Stromer in 1915. The original remains were destroyed in World War II,\n[…]\nUnfortunately, during the night of April 24/25, 1944, the building of the Paläontologisches Museum München (Bavarian State Collection of Paleontology) of the Bavarian Academy of Sciences was severely damaged during the British Bombing of Munich. Due to personal and political tensions between Stromer and the museum's director Karl Beurlen, who was a fervent Nazi, the Spinosaurus fossils held there were not rehoused and subsequently destroyed as a result of the bombing.\n[…]\nStromer's finds, including Spinosaurus, received little academic or public attention. In 1995, Stromer's son donated his father's archives to the Paläontologische Staatssammlung München, leading to a 2006 study by American researcher Joshua Smith and colleagues of the photographs, two of which were of Spinosaurus' holotype. Based on these photographs of the mandible and the entire specimen as mounted, Smith concluded that Stromer's original 1915 drawings were slightly inaccurate.\n[…]\nA Tribute to Ernst Stromer: Hundred Years of the Discovery of Spinosaurus aegyptiacus: Saubhik Ghosh\n[…]\nhttps://blog.paultonspark.co.uk/10-roar-some-facts-about-the-spinosaurus/\n[…]\n\"A Strange Dinosaur May Have Swum the Rivers of Africa\". Spinosaurus profile by Kenneth Chang at NY Times, April 29, 2020\n[…]\nHartman, Scott. Spinosaur Comparison. SkeletalDrawing.com, 2006.\n[…]\nMortimer, Mickey. Spinosaurus Stromer, 1915. (List of specimens from The Theropod Database.)\n[…]\nNatural History Museum. Dino Directory: Spinosaurus."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espinossauro",
        "situacao": "ok",
        "texto": "Espinossauro (nome científico: Spinosaurus; cujo nome significa Lagarto Espinho) foi um gênero de dinossauro espinossaurídeo que viveu durante o Cenomaniano do período Cretáceo, entre 100 e 94 milhões de anos atrás, principalmente na região que é hoje o Norte da África. Este gênero foi conhecido a partir de vestígios egípcios descobertos em 1912 e descritos em 1915 pelo paleontólogo Ernst Stromer.\n[…]\nEsses primeiros vestígios foram destruídos na Segunda Guerra Mundial, mas material adicional foi encontrado no início do século XXI. O S. aegyptiacus é a espécie-tipo do gênero, embora haja o S.mirabilis,uma espécie descrita formalmente em fevereiro de 2026 do Níger e S. maroccanus como uma espécie em potencial. Sobre seus sinônimos, o gênero Sigilmassasaurus já foi sinonimizado por alguns autores como um S.\n[…]\nOs primeiros restos de Espinossauros foram descobertos na Formação Bahariya por Richard Markgraf em 1912 e descritos pelo paleontólogo alemão Ernst Stromer em 1915, que publicou um artigo atribuindo o exemplar à espécie Spinosaurus aegyptiacus. Embora tenham sido destruídos durante Segunda Guerra Mundial, restos fragmentários adicionais foram achados em Bahariya.\n[…]\nUma segunda espécie foi originalmente descrita por Dale Russell em 1996 como Spinosaurus maroccanus, com base no comprimento de suas vértebras cervicais, ele afirmou que a razão entre o comprimento central (corpo da vértebra) e a altura da faceta articular posterior foi de 1,1 em S. aegyptiacus e 1,5 em S. maroccanus; no entanto, autores futuros duvidaram neste tópico.\n[…]\nOs Espinosaurideos são membros da familia Spinosauridae, mesma familia do Spinosaurus. Nesse grupo temos a subfamília Spinosaurinae, nomeada por Sereno em 1998 e definida por Holtz e colegas em 2004 e a subfamília Baryonychinae, nomeada por Charig e Milner em 1986.\n[…]\nSpinosaurus marocannus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Megalodonte",
      "descricao": "Espécie extinta de tubarão gigante que viveu entre o Mioceno e o Plioceno."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que quase todos os fósseis do megalodonte são dentes, e não esqueletos?",
    "resposta": "Esqueleto de cartilagem não fossiliza",
    "fonte": [
      "https://en.wikipedia.org/wiki/Megalodon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Megalodon",
        "situacao": "ok",
        "texto": "Otodus megalodon ( MEG-əl-ə-don; meaning \"big tooth\"), commonly known as megalodon, is an extinct species of giant mackerel shark that lived approximately 23 to 3.58 million years ago (Mya), from the Early Miocene to the Early Pliocene epochs.\n[…]\nThe discovery of fossils assigned to the genus Megalolamna in 2016 led to a re-evaluation of Otodus, which concluded that it is paraphyletic, that is, it consists of a last common ancestor but it does not include all of its descendants. The inclusion of the Carcharocles sharks in Otodus would make it monophyletic, with the sister clade being Megalolamna.\n[…]\nMegalodon is represented in the fossil record by teeth, vertebral centra, and coprolites. As with all sharks, the skeleton of megalodon was formed of cartilage rather than bone; consequently most fossil specimens are poorly preserved. To support its large dentition, the jaws of megalodon would have been more massive, stouter, and more strongly developed than those of the great white, which possesses a comparatively gracile dentition.\n[…]\nThese claims have been discredited, and are probably teeth that were well-preserved by a thick mineral-crust precipitate of manganese dioxide, and so had a lower decomposition rate and retained a white color during fossilization. Fossil megalodon teeth can vary in color from off-white to dark browns, greys, and blues, and some fossil teeth may have been redeposited into a younger stratum.\n[…]\nMegalodon is the official state shark of Maryland. Megalodon teeth are the state fossil of North Carolina.\n[…]\nList of prehistoric cartilaginous fish\n[…]\nMegalodon fossil teeth show evidence of 10-million-year-old shark nursery on YouTube\n[…]\nExpert view: information about megalodon on YouTube (featuring expert Dana Ehret)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Megalodonte",
        "situacao": "ok",
        "texto": "Megalodonte (pronúncia em português: [mɛɡɐlɔˈdõt(ə)]) (nome científico: Otodus megalodon), que significa \"dente grande\", é uma espécie extinta de tubarão que viveu há aproximadamente 23 a 3,6 milhões de anos, durante o Mioceno Inferior ao Plioceno. Antigamente se pensava ser um membro da família Lamnidae e um parente próximo do tubarão-branco (Carcharodon carcharias).\n[…]\nO naturalista suíço Louis Agassiz deu a este tubarão seu nome científico inicial, Carcharodon megalodon, em sua obra Recherches sur les poissons fossiles [Pesquisa de fósseis de peixes], de 1843, com base em restos de dentes. O paleontólogo inglês Edward Charlesworth, em seu artigo de 1837, usou o nome Carcharias megalodon, citando Agassiz como autor e indicando que Agassiz descreveu a espécie antes de 1843.\n[…]\nA fórmula dental do megalodonte é:\n[…]\nO megalodonte é representado em seu registro fóssil por dentes, centros vertebrais e coprólitos. Como em todos os tubarões, o esqueleto do megalodonte era formado por cartilagem e não por ossos; consequentemente, a maioria dos espécimes fósseis é mal preservada. Para sustentar sua grande dentição, as mandíbulas do megalodonte teriam sido mais maciças, robustas e mais fortemente desenvolvidas que as do tubarão-branco, que possui uma dentição comparativamente graciosa.\n[…]\nKent, Bretton W. (1994). Fossil Sharks of the Chesapeake Bay Region. Columbia, Maryland: Egan Rees & Boyer. ISBN 978-1-881620-01-3. OCLC 918266672.\n[…]\nDykens, Margaret; Gillette, Lynett. \"San Diego Natural History Museum Fossil Mysteries Field Guide: Carcharodon megalodon\" [Guia de Campo de Mistérios de Fósseis do Museu de História Natural de San Diego: Carcharodon megalodon].\n[…]\n\"Megalodon fossil teeth show evidence of 10-million-year-old shark nursery\" [Dentes fósseis de megalodonte mostram evidências de berçário de tubarões de 10 milhões de anos].",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Mesossauro",
      "descricao": "Gênero de pequeno réptil aquático do Permiano, com fósseis no Brasil e no sul da África."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Fósseis do mesossauro, um pequeno réptil de água doce, aparecem no Brasil e no sul da África. Isso ajudou a sustentar que teoria?",
    "resposta": "Deriva continental",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mesosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mesosaurus",
        "situacao": "ok",
        "texto": "Mesosaurus (meaning \"middle lizard\") is an extinct genus of aquatic reptile from the late Early Permian (Kungurian, ~275 million years ago) of southern Africa and South America. It is the only member of the family Mesosauridae and order Mesosauria. Two other genera of mesosaurs, Brazilosaurus and Stereosternum, were formerly recognised, but are now considered synonyms of Mesosaurus. Mesosaurus con\n[…]\nIn 1889, the species Ditchrosaurus capensis was named by Georg Gürich based on remains found in South Africa, though this is now regarded as a synonym of M. tenuidens. Since then, Mesosaurus remains have also been identified from South America and were first identified in 1908 as belonging to a second species, M. brasiliensis, by J. H. MacGregor. Later studies have shown that M. brasiliensis is another synonym of M. tenuidens.\n[…]\nMesosaurus was significant in providing evidence for the theory of continental drift, because its remains were found in southern Africa, Whitehill Formation, and eastern South America (Mangrullo Formation, Uruguay and Irati Formation, Brazil), two widely separated regions.\n[…]\nUnder this phylogeny, the only group that prevents Sauropsida from being equivalent to Reptilia is mesosaurs.\n[…]\nUsing Laurin and Reisz's node-based definition of Sauropsida as \"The last common ancestor of mesosaurs, testudines and diapsids, and all its descendants\", Sauropsida and Reptilia are equivalent groupings; mesosaurs and testudines are more closely related to each other than either group is to diapsids,[a] meaning that the clade containing testudines and diapsids (which would be crown-group Reptilia) must also contain mesosaurs.\n[…]\nLeGrand, Homer Eugene (1988). Drifting Continents and Shifting Theories: The Modern Revolution in Geology and Scientific Change (illustrated ed.). Cambridge University Press. pp. 313. ISBN 978-0-521-31105-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mesosaurus",
        "situacao": "ok",
        "texto": "Mesosaurus é um gênero extinto de pararrépteis marinhos, que viveram na Era Paleozóica. Os mesossaurídeos surgiram no início do Período Permiano. Quando adultos mediam cerca de um metro de comprimento. Estudos recentes indicam a possibilidade de os indivíduos adultos terem um estilo de vida semiaquático.\n[…]\nAs ocorrências de fósseis destes animais nos continentes americano e africano são consideradas fortes evidências da deriva continental.\n[…]\nOs mesossaurídeos foram um dos primeiros grupos de amniotas a adaptarem-se a um ambiente aquático. Tinham corpo hidrodinâmico, mãos e pés com membranas interdigitais e cauda longa. O crânio de Mesosaurus tenuidens era alongado e a cavidade oral continha dentes muito longos, finos e numerosos. Mesosaurus se alimentava de pequenos crustáceos.\n[…]\nO primeiro fóssil deste animal foi localizado em 1865 ao sul do continente africano pelo pesquisador Paul Gervais, num sítio denominado Griquas.\n[…]\nO Mesosaurus brasiliensis foi descrito e batizado por Mac Gregor em 1908, estudando fósseis encontrados nos folhelhos da Formação Irati, do Permiano inferior, coletados pelo geólogo Israel Charles White próximos à estação de Irati, no estado do Paraná. Era um réptil pequeno, com corpo esguio e longa cauda, medindo cerca de um metro quando adulto.\n[…]\nA ocorrência de um mesmo gênero de pequeno réptil nos dois lados do Atlântico foi vista por diversos geólogos e paleontólogos, a exemplo do próprio Alfred Wegener, como um dos mais fortes argumentos para a teoria da deriva continental.\n[…]\nNa cidade de Montividiu, Goiás ocorrem afloramentos de rochas da Formação Irati que se destacam pelo registro fossilífero de mesossauros permianos, sendo assinalada a presença de Brazilosaurus sanpauloensis, um vertebrado fóssil importante na história da Deriva Continental;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Oviraptor",
      "descricao": "Gênero de pequeno dinossauro terópode do Cretáceo da Mongólia, encontrado sobre um ninho de ovos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O oviraptor ganhou nome de ladrão de ovos por ter sido achado sobre um ninho. Por que esse nome se mostrou injusto?",
    "resposta": "Os ovos eram dele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oviraptor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oviraptor",
        "situacao": "ok",
        "texto": "Oviraptor (; lit. 'egg thief') is a genus of oviraptorid dinosaur that lived in Asia during the Late Cretaceous period. The first remains were collected from the Djadokhta Formation of Mongolia in 1923 during a paleontological expedition led by Roy Chapman Andrews, and in the following year the genus and type species Oviraptor philoceratops were named by Henry Fairfield Osborn.\n[…]\nGiven the close proximity of both specimens, Osborn interpreted Oviraptor as a dinosaur with egg-eating habits, and explained that the generic name, Oviraptor, is Latin for \"egg seizer\" or \"egg thief\", due to the association of the fossils. The specific name, philoceratops, is intended as \"fondness for ceratopsian eggs\" which is also given as a result of the initial thought of the nest pertaining to Protoceratops or another ceratopsian.\n[…]\nHowever, Osborn suggested that the name Oviraptor could reflect an incorrect perception of this dinosaur. Furthermore, Osborn found Oviraptor to be similar to the unrelated—at the time, however, considered related—fast-running ornithomimids based on the toothless jaws, and assigned Oviraptor to the Ornithomimidae. Osborn had previously reported the taxon as \"Fenestrosaurus philoceratops\", but this was later discredited.\n[…]\nIn 1981, Barsbold referred the specimen MPC-D 100/42 to Oviraptor, a very well-preserved and rather complete individual from the Djadokhta Formation. Since the known elements of Oviraptor were so fragmentary compared to other members, MPC-D 100/42 became the prime reference/depiction of this taxon being prominently labelled as Oviraptor philoceratops in scientific literature.\n[…]\nTimeline of oviraptorosaur research\n[…]\nMedia related to Oviraptor at Wikimedia Commons\n[…]\nData related to Oviraptor at Wikispecies\n[…]\nOviraptor nest AMNH 6508 photographs at AMNH\n[…]\nOviraptor holotype skull photograph at AMNH"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oviraptor",
        "situacao": "ok",
        "texto": "Oviraptor (do latim \"ladrão de ovos\") é um gênero de dinossauro oviraptorídeo que viveu na Ásia durante o período Cretáceo Superior. Os primeiros restos mortais foram coletados da Formação Djadokhta da Mongólia em 1923 durante uma expedição paleontológica liderada por Roy Chapman Andrews, e no ano seguinte o gênero e a espécie-tipo Oviraptor philoceratops foram nomeados por Henry Fairfield Osborn.\n[…]\nDada a proximidade de ambos os espécimes, Osborn interpretou Oviraptor como um dinossauro com hábitos de comer ovos, e explicou que o nome genérico, Oviraptor, é latim para \"apanhador de ovos\" ou \"ladrão de ovos\", devido à associação dos fósseis. O nome específico, philoceratops, é pretendido como \"gosto por ovos de ceratopsianos\", que também é dado como resultado do pensamento inicial do ninho pertencente a Protoceratops ou outro ceratopsiano.\n[…]\nEssas descobertas mostraram que os oviraptorídeos chocavam e protegiam seus ninhos agachando-se sobre eles. Essa nova linha de evidências mostrou que o ninho associado ao holótipo de Oviraptor pertencia a ele e o espécime estava realmente chocando os ovos no momento da morte, não os caçando.\n[…]\nDesde a descrição do espécime embrionário de Citipati em 1994, os oviraptorídeos se tornaram mais compreendidos: em vez de serem animais comedores de ovos, eles na verdade chocavam e cuidavam dos ninhos. Este espécime mostrou que o holótipo de Oviraptor era provavelmente um indivíduo sexualmente maduro que pereceu incubando o ninho associado com ovos.\n[…]\nUm ninho médio de oviraptorídeos foi construído como um monte suavemente inclinado com uma arquitetura altamente organizada: os ovos eram provavelmente pigmentados e dispostos em pares, com cada par disposto em três a quatro anéis elípticos. Como o progenitor provavelmente estava operando a partir do centro do ninho, esta região estava desprovida de ovos.\n[…]\nO Wikispecies possui informações sobre: Oviraptor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Datação por radiocarbono",
      "descricao": "Método de datação de material orgânico baseado no decaimento do isótopo carbono-14."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o método do carbono quatorze não serve para datar ossos de dinossauro?",
    "resposta": "São antigos demais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Radiocarbon_dating"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Radiocarbon_dating",
        "situacao": "ok",
        "texto": "Radiocarbon dating (also referred to as carbon dating or carbon-14 dating) is a method for determining the age of an object containing organic material by using the properties of radiocarbon, a radioactive isotope of carbon.\n[…]\nIn nature, carbon exists as three isotopes. Carbon-12 (12C), and carbon-13 (13C) are stable and not radioactive; carbon-14 (14C), also known as \"radiocarbon\", is radioactive.\n[…]\nMost AMS machines also measure the sample's δ13C, for use in calculating the sample's radiocarbon age. The use of AMS, as opposed to simpler forms of mass spectrometry, is necessary because of the need to distinguish the carbon isotopes from other atoms or molecules that are very close in mass, such as 14N and 13CH. As with beta counting, both blank samples and standard samples are used.\n[…]\n14\n[…]\n14\n[…]\nAs a tree grows, only the outermost tree ring exchanges carbon with its environment, so the age measured for a wood sample depends on where the sample is taken from. This means that radiocarbon dates on wood samples can be older than the date at which the tree was felled. In addition, if a piece of wood is used for multiple purposes, there may be a significant delay between the felling of the tree and the final use in the context in which it is found.\n[…]\nRadiocarbon is also used to date carbon released from ecosystems, particularly to monitor the release of old carbon that was previously stored in soils as a result of human disturbance or climate change. Recent advances in field collection techniques also allow the radiocarbon dating of methane and carbon dioxide, which are important greenhouse gases.\n[…]\n774–775 carbon-14 spike\n[…]\np3k14c, global radiocarbon database\n[…]\nXRONOS, global radiocarbon database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Data%C3%A7%C3%A3o_por_radiocarbono",
        "situacao": "ok",
        "texto": "Datação por radiocarbono é um método de datação radiométrica que usa o radioisótopo de ocorrência natural carbono-14 (14C) para determinar a idade de materiais carbonáceos até cerca de 60 000 anos. Idades por radiocarbono bruto, ou seja, não-calibrado, são geralmente reportadas em anos de radiocarbono \"Antes do Presente\" (AP), \"Presente\" sendo definido como 1950 AD. Tais idades brutas podem ser ca\n[…]\nA técnica de datação por radiocarbono foi desenvolvida por Willard Libby e seus colegas na Universidade de Chicago em 1949.\n[…]\nAs datas de radiocarbono em, anos anos Antes do Presente - AP, são calibradas para dar datas do calendário. Existem curvas de calibração padrão disponíveis com base na comparação de datas de radiocarbono de amostras que podem ser datados de forma independente por outros métodos, como a análise do número de anéis de crescimento de árvores (dendrocronologia), sedimentos oceânicos profundos, lago varves sedimentos, amostras de corais e espeleotemas (depósitos da caverna).\n[…]\nOs resultados da pesquisa sobre varves no lago de Suigetsu, no Japão, que foi anunciado em 2012, percebeu este objectivo. \"Na maioria dos casos, os níveis de radiocarbono deduzida a partir dos registros marinhos e outros não foram muito mal. No entanto, ter um registro verdadeiramente terrestre nos dá uma melhor resolução e confiança na datação por radiocarbono\", disse Bronk Ramsey.\n[…]\nEm 2012, foi argumentado que há um erro na maneira que os programas de calibração mais - comumente usados calcular as idades de radiocarbono calibradas. Até agora, nenhuma correção para esse erro foi implementado. A imprecisão nas idades calibrados normalmente é pequeno, mas às vezes pode ser grande (principalmente em análises bayesianas) .\n[…]\nRadiocarbono - A principal revista internacional de registro de artigos de pesquisa e listas de datas relevantes à 14C",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Poços de piche de La Brea",
      "descricao": "Conjunto de poças naturais de asfalto em Los Angeles, rico em fósseis de animais da era do gelo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os poços de La Brea, em Los Angeles, guardam milhares de fósseis de animais da era do gelo?",
    "resposta": "Os animais ficavam presos no asfalto",
    "fonte": [
      "https://en.wikipedia.org/wiki/La_Brea_Tar_Pits"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/La_Brea_Tar_Pits",
        "situacao": "ok",
        "texto": "The La Brea Tar Pits constitute an active paleontological research site located in urban Los Angeles, California, United States. Hancock Park was established around a cluster of tar pits formed by natural asphalt (also referred to as asphaltum, bitumen, pitch or brea in Spanish) that has continuously seeped upward from the ground for tens of thousands of years. Over centuries, these asphalt deposi\n[…]\nThe La Brea Tar Pits and Hancock Park were formerly part of the Mexican land grant of Rancho La Brea. For some years, tar-covered bones were found on the property but were not initially recognized as fossils because the ranch had lost various animals—including horses, cattle, dogs, and even camels—whose bones closely resemble several of the fossil species. Initially, they mistook the bones in the pits for the remains of pronghorn or cattle that had become mired.\n[…]\nThe original Rancho La Brea land grant stipulated that the tar pits be open to the public for the use of the local Pueblo.\n[…]\nIn 1913, George Allan Hancock, the owner of Rancho La Brea, granted the Natural History Museum of Los Angeles County exclusive excavation rights at the Tar Pits for two years. In those two years, the museum was able to extract 750,000 specimens at 96 sites, guaranteeing that a large collection of fossils would remain consolidated and available to the community.\n[…]\nThe George C. Page Museum of La Brea Discoveries, part of the Natural History Museum of Los Angeles County, was built next to the tar pits in Hancock Park on Wilshire Boulevard. It was named for the donor of the site. Construction began in 1975, and the museum opened to the public in 1977. The area is part of urban Los Angeles in the Miracle Mile District.\n[…]\nPage Museum – La Brea Tar Pits\n[…]\nGocalifornia.com: La Brea Tar Pits Archived April 9, 2017, at the Wayback Machine – visitor guide.\n[…]\nPalaeo.uk: \"Setting the La Brea site in context.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/La_Brea",
        "situacao": "ok",
        "texto": "La Brea (do espanhol \"o breu\", \"o piche\") ou Rancho do Poço de Piche de La Brea (no inglês La Brea Tar Pits ou Rancho La Brea Tar Pits) é um famoso sítio de piche (breu, asfalto ou betume) localizado em Hancock Park, em pleno centro da cidade de Los Angeles, Califórnia, Estados Unidos da América.\n[…]\nO betume asfáltico, popularmente também chamado de piche ou breu, aflorou no solo desta área há dezenas de milhares de anos, formando centenas de piscinas pegajosas, que durante este tempo prendeu em seu interior animais e plantas que ali caíram que, com isso, foram fossilizados. O resultado foi uma incrivelmente rica coleção de fósseis datados da Última Era do Gelo.\n[…]\nEste fenômeno vem ocorrendo há dezenas de milhares de anos. De tempos em tempos, o asfalto forma uma lagoa bastante funda a ponto de prender os animais, e a superfície era coberta por camadas de água, poeira e folhas.\n[…]\nComo os ossos dos animais afundam no asfalto, eles se fossilizam, tornando-se marrom-escuro ou pretos. Porções voláteis do asfalto evaporam, deixando uma substância mais sólida, que se prende aos ossos. Além dos fósseis de grandes mamíferos, o betume também preservou vários pequenos \"microfósseis\", madeira e restos vegetais, e muitos grãos de pólen.\n[…]\nUm estudo de 2023 dos restos de animais presos há muito tempo nos poços de alcatrão de La Brea sugere que ambos os fatores trabalharam em conjunto para provocar o desaparecimento da megafauna da região. Um clima quente e seco, além da caça e queimadas pelos humanos, levou a grandes incêndios que precipitaram as mortes no final do Pleistoceno há cerca de 13.000 anos e mudaram para sempre o ecossistema, relataram pesquisadores.\n[…]\nLa Brea Tar Pits Visitor Guide\n[…]\nMy Bunny Lies Over The Sea, a Bugs Bunny cartoon that mentions the La Brea Tar Pits",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Moa",
      "descricao": "Grupo extinto de grandes aves sem asas que viviam na Nova Zelândia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As moas, aves gigantes sem asas da Nova Zelândia, desapareceram por volta do século quinze. Quem as levou à extinção?",
    "resposta": "Caçadores maoris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moa",
        "situacao": "ok",
        "texto": "Moa (order Dinornithiformes) are an extinct group of flightless birds formerly endemic to New Zealand. During the Late Pleistocene-Holocene, there were nine species, in six genera. The two largest species, Dinornis robustus and Dinornis novaezelandiae, reached about 3.6 metres (12 ft) in height with neck outstretched, and weighed about 230 kilograms (510 lb); the smallest, the bush moa (Anomalopte\n[…]\nGenus Dinornis\n[…]\nSouth Island giant moa, Dinornis robustus (South Island, New Zealand)\n[…]\nThe largest moa eggs including those produced by the species of the genus Dinornis were larger than ostrich eggs, the largest eggs produced by a living bird species, though they were considerably smaller and thinner than the eggs produced by the extinct elephant birds of the genus Aepyornis. The outer surface of moa eggshell is characterised by small, slit-shaped pores. The eggs of most moa species were white, although those of the upland moa (Megalapteryx didinus) were blue-green.\n[…]\nOwen puzzled over the fragment for almost four years. He established it was part of the femur of a big animal, but it was uncharacteristically light and honeycombed. Owen announced to a skeptical scientific community and the world that it was from a giant extinct bird like an ostrich, and named it Dinornis.\n[…]\nThe creature has frequently been mentioned as a potential candidate for revival by cloning. Its iconic status, coupled with the facts that it only became extinct a few hundred years ago and that substantial quantities of moa remains exist, mean that it is often listed alongside such creatures as the dodo as leading candidates for de-extinction. Preliminary work involving the extraction of DNA has been undertaken by Japanese geneticist Ankoh Yasuyuki Shirota.\n[…]\nList of New Zealand species extinct in the Holocene\n[…]\nIsland gigantism\n[…]\nTerraNature list of New Zealand's extinct birds"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moa",
        "situacao": "ok",
        "texto": "As moas são um grupo extinto de nove espécies (em seis gêneros) de aves não voadoras endêmicas da Nova Zelândia. As duas maiores espécies, Dinornis robustus e Dinornis novaezelandiae, atingiam 3,6 metros de altura com o pescoço estendido e pesavam cerca de 230 kg. Quando os polinésios se estabeleceram na Nova Zelândia, por volta do ano 1280, a população de moas era de cerca de 58 000 indivíduos.\n[…]\nAs moas pertencem à ordem Dinornithiformes, tradicionalmente colocadas no grupo ratita. Entretanto, seu parentesco mais próximo, encontrado através de estudos genéticos, é com as aves Tinamiformes da América do Sul. Estas são aves capazes de voar e antes eram consideradas um grupo irmão dos ratitas. As nove espécies de moa não tinham asas e nem vestígios de asas, sendo esta última uma característica comum a todos os outros ratitas.\n[…]\nElas eram os herbívoros dominantes nas florestas da Nova Zelândia por milhares de anos e, até a chegada dos maoris, eram caçadas apenas pela Águia-de-Haast. A extinção das moas ocorreu por volta de 1300–1440 EC, sendo a causa principal sua caça excessiva pelos maoris.\n[…]\nFamília Dinornithidae Bonaparte, 1853\n[…]\nGênero Dinornis Owen, 1843\n[…]\nDinornis novaezealandiae Owen, 1843\n[…]\nDinornis robustus Owen, 1846\n[…]\nAs moas extinguiram-se no início do século XVI. As razões do seu desaparecimento estão relacionadas com o povo Maori que habitava a Nova Zelândia e consumia sua carne, porém apenas partes selecionadas. O povo acreditava que as coxas da ave davam força aos guerreiros, havendo, então um consumo insustentável que causou a extinção. Acredita-se que doenças trazidas por aves migratórias ou ainda pelo efeito local da erupção vulcânica tenham também contribuído.\n[…]\nO principal predador das moas era a águia-de-haast, que se extinguiu também na mesma altura, como consequência da extinção das moas e de grande parte das suas outras presas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Megatério",
      "descricao": "Gênero extinto de preguiça-terrestre gigante que viveu na América do Sul até o fim do Pleistoceno."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O megatério, mamífero sul-americano do tamanho de um elefante, é parente extinto de que animal atual que vive pendurado nas árvores?",
    "resposta": "Bicho-preguiça",
    "fonte": [
      "https://en.wikipedia.org/wiki/Megatherium"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Megatherium",
        "situacao": "ok",
        "texto": "Megatherium ( meg-ə-THEER-ee-əm; from Greek méga (μέγα) 'great' + theríon (θηρίον) 'beast') is an extinct genus of large ground sloths endemic to South America that lived from the Pliocene through the end of the Late Pleistocene.\n[…]\nThe first (holotype) specimen of Megatherium americanum was discovered in 1787 on the bank of the Luján River in what is now northern Argentina. The specimen was shipped to Spain the following year, where it caught the attention of the French paleontologist Georges Cuvier. He named the animal in 1796, making it one of the first prehistoric animals to be scientifically named. Using comparative anatomy, he determined that Megatherium was a giant sloth.\n[…]\n†M. americanum Cuvier 1796\n[…]\nMegatherium americanum first appears in the fossil record during the second half of the Middle Pleistocene, from around 400,000 years ago.\n[…]\nDuring the Late Pleistocene, six species of Megatherium were present in South America, including M. americanum in the Pampas and adjacent regions, and the 5 species of Pseudomegatherium in the vicinity of the Andes.\n[…]\nThere is evidence for the butchery of Megatherium by humans. Two M. americanum bones, an ulna and an atlas vertebra, from separate collections, bear cut marks suggestive of butchery, with the latter suggested to represent an attempt to exploit the contents of the head. A kill site dating to around 12,600 years Before Present (BP), is known from Campo Laborde in the Pampas in Argentina, where a single individual of M.\n[…]\nThe Megatherium Club, named for the extinct animal and founded by William Stimpson, was a group of Washington, D.C.–based scientists who were attracted to that city by the Smithsonian Institution's rapidly growing collection, from 1857 to 1866."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Megat%C3%A9rio",
        "situacao": "ok",
        "texto": "Megatherium (ou em português, megatério), cujo nome significa \"besta gigante\", é um gênero extinto de preguiça-gigante que viveu do inicio do Plioceno, há 5 milhões de anos, até o Pleistoceno Superior, há aproximadamente 12 mil anos, nas Américas do Sul e do Norte. Era do tamanho de um elefante indiano de porte médio e comia folhas como tal, em enormes quantidades. Megatherium faz parte da família\n[…]\nO gênero Megatherium possui várias espécies descritas, entre as quais M. americanum, que habitava a América do Sul, é a maior e mais conhecida.\n[…]\nO primeiro espécime e holótipo de Megatherium foi descoberto em 1787 na margem do Rio Luján ao norte da Argentina. O espécime então foi enviado para a Espanha, onde o paleontólogo francês Georges Cuvier foi o primeiro a determinar através do uso de anatomia comparada que o megatério era uma preguiça gigante. Outas descobertas importantes foram realizadas por Charles Darwin em sua viagem histórica com o Beagle pela América do sul.\n[…]\nO megatério foi um herbívoro que se alimentava das folhagens usando um lábio superior preênsil. Apesar de seu tamanho, o megatério era capaz de adotar uma postura bípede apoiado por sua cauda, o que lhe permitia alcançar as folhas mais altas, também utilizando de seus braços robustos para puxar galhos, bem como de suas garras para a defesa.\n[…]\nO megatério era uma preguiça gigante terrestre e se movimentava de forma lenta e peculiar. Ele caminhava sobre quatro patas, mas apoiando a parte externa dos pés, com as solas voltadas para dentro — o mesmo valia para as mãos, que também se curvavam para dentro. Essa postura incomum o tornava mais lento, embora estudos[carece de fontes]? indiquem que ele era mais ágil do que as preguiças modernas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Gliptodonte",
      "descricao": "Gênero extinto de grande mamífero encouraçado da América do Sul, que viveu até o fim da última era do gelo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na classificação dos animais, o gigantesco gliptodonte da era do gelo, com sua carapaça do tamanho de um carro pequeno, é um tipo de quê?",
    "resposta": "Tatu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Glyptodon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Glyptodon",
        "situacao": "ok",
        "texto": "Glyptodon (lit. 'grooved or carved tooth'; from Ancient Greek  γλυπτός (gluptós) 'sculptured' and  ὀδοντ-, ὀδούς (odont-, odoús) 'tooth') is a genus of glyptodont, an extinct group of large, herbivorous armadillos that lived from the Pliocene, around 3.2 million years ago, to the early Holocene, around 11,000 years ago, in South America. It is one of, if not the, best-known genera of glyptodont.\n[…]\nGlyptodonts are defined by their large, bony carapaces, fused lumbar vertebrae, and the presence of eight upper and lower molariforms.\n[…]\nAlthough originally theorized by George Brandes to be possible in 1900, Smilodon canines could not pierce the thick carapace osteoderms of glyptodontines. Brandes imagined that the evolution of thick glyptodontine armor and long machairodont canines was an example of coevolution, but Birger Bohlin argued in 1940 that the teeth were far too fragile to do damage against glyptodontine armor.\n[…]\nDuring this period, a wide array of Xenarthrans inhabited the Pampas were hunted by humans, with evidence demonstrating that the small (300–450 kg, 660–990 lb) glyptodontine Neosclerocalyptus, the armadillo Eutatus, and the gigantic (2 ton) glyptodontine Doedicurus, the largest glyptodontine known, were hunted.\n[…]\nThe only other records of human predation from outside the Pampas area a partial carapace, which was eviscerated by humans, and several skulls preserving signs that they were dispatched by human tools. All were found in Venezuela. The discoveries there showed the first signs of human hunting on the skulls of glyptodontines. Hunters may have used the shells of dead animals as shelters in inclement weather.\n[…]\nGlyptodon was also a victim of parasitism, as evidenced by findings of Karethraichnus kulindros on an articulated carapace of G. clavipes, which are believed to represent traces made by tungid fleas that were related to Tunga perforans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Glyptodon",
        "situacao": "ok",
        "texto": "Glyptodon é um gênero de gliptodonte, mamíferos pré-históricos da família Glyptodontidae que habitaram a América do Sul, sendo parentes distantes dos tatus. Seu surgimento data de 3,2 milhões de anos atrás durante o Plioceno e sua extinção ocorreu por volta de 12 mil anos no fim do Pleistoceno ou início do Holoceno.\n[…]\nO nome do gênero Glyptodon deu origem ao nome da família dos gliptodontídeos (Glyptodontidae), significando \"dente esculpido\" (glyptos=esculpido e odontes=dentes), devido ao formato típico dos dentes destes animais.\n[…]\nGlyptodon foi extinto no fim do Pleistoceno, cerca de 12 mil anos atrás, no contexto da extinção da megafauna, junto a outros grandes mamíferos contemporâneos que habitavam o continente americano, provavelmente devido a mudanças climáticas, à caça predatória por humanos e à baixa taxa reprodutiva destes grandes mamíferos.\n[…]\nAtualmente existem em torno de 7 espécies descritas de Glyptodon, sendo que no Brasil existem apenas registros de duas espécies do gênero, sendo elas:\n[…]\nGlyptodon reticulatus (com registros no sul do país)\n[…]\nGlyptodon clavipes (com registros no sudeste, nordeste e norte do país)\n[…]\nNo entanto, outras espécies de gliptodontes habitaram o Brasil, mas pertencentes a outros gêneros, como Panochthus e Glyptotherium.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Deinonico",
      "descricao": "Gênero de dinossauro terópode dromeossaurídeo do Cretáceo Inferior da América do Norte, descrito por John Ostrom em 1969."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os velocirraptores de Jurassic Park foram feitos com o tamanho de outro dinossauro parente, bem maior. Qual?",
    "resposta": "Deinonico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Deinonychus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deinonychus",
        "situacao": "ok",
        "texto": "Deinonychus ( dy-NON-ih-kəs; from Ancient Greek  δεινός (deinós) 'terrible' and  ὄνυξ (ónux), genitive ὄνυχος (ónukhos) 'claw') is a genus of dromaeosaurid theropod dinosaur with one described species, Deinonychus antirrhopus. This species, which could grow up to 3.4 meters (11 ft) long, lived during the Early and Late Cretaceous Period, about 115–98 million years ago (from the mid-Aptian to Cenom\n[…]\nVelociraptor is geologically younger than Deinonychus, but even more closely related. A specimen of Velociraptor has been found with quill knobs on the ulna. Quill knobs are where the follicular ligaments attached, and are a direct indicator of feathers of modern aspect.\n[…]\nDeinonychus were featured prominently in Harry Adam Knight's novel Carnosaur and its film adaption, and Michael Crichton's novels Jurassic Park and The Lost World, as well as the franchise adapted from the novels. Crichton ultimately chose to use the name Velociraptor for these dinosaurs, rather than Deinonychus. Crichton had met with John Ostrom several times during the writing process to discuss details of the possible range of behaviors and life appearance of Deinonychus.\n[…]\nCrichton at one point apologetically told Ostrom that he had decided to use the name Velociraptor in place of Deinonychus for his book, because he felt the former name was \"more dramatic\". Despite this, according to Ostrom, Crichton stated that the Velociraptor of the novel was based on Deinonychus in almost every detail, and that only the name had been changed.\n[…]\nThe Jurassic Park filmmakers followed suit, designing the film's models based almost entirely on Deinonychus instead of the actual Velociraptor, and they reportedly requested all of Ostrom's published papers on Deinonychus during production. As a result, they portrayed the film's dinosaurs with the proportions and snout shape of a large Deinonychus."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Deinonychus",
        "situacao": "ok",
        "texto": "Deinonychus (em grego:  δεινός, que significa 'terrível' e ὄνυξ, genitivo ὄνυχος, que significa 'garra') é um género de dinossauros carnívoros coelurossáurios dromeossaurídeos, com uma espécie descrita, Deinonychus antirrhopus. Podia crescer até aos 3,4 metros de comprimento e viveu durante o Cretáceo Inferior, há cerca de 115–108 milhões de anos (dos meados do Aptiano ao Albiano).\n[…]\nO cladograma abaixo mostra a posição filogenética do Deinonychus no interior do Eudromaeosauria seguindo a análise de Evans e seus colaboradores em 2013:\n[…]\nEles descobriram que a força de mordida do Deinonychus está entre 4 100 e 8 200 newtons, maior do que mamíferos carnívoros vivos incluindo a hiena, e equivalente a um jacaré de tamanho similar.\n[…]\nNum estudo posterior, Ostrom notou que a razão do fêmur para a tíbia (osso da parte inferior da perna) não é tão importante na determinação da velocidade quanto o comprimento relativo do pé e da parte inferior da perna. Em aves velozes modernas, como o avestruz, a razão pé-tíbia é 0,95. Em dinossauros que correm excepcionalmente rápido, como Struthiomimus, a razão é de 0,68, mas no Deinonychus a razão é de 0,48.\n[…]\nEm seu estudo sobre pegadas de dinossauros canadenses em 1981, Richard Kool produziu estimativas da velocidade de caminhada rude (ou irregular) com base em várias pegadas feitas por diferentes espécies na Formação Gething da Columbia Britânica, Canadá. Kool estimou que uma dessas pegadas, representando a icnoespécie Irenichnites gracilis (que pode ter sido feita pelo Deinonychus), tem uma velocidade de caminhada de 10,1 quilômetros por hora (6 milhas por hora).\n[…]\nAlém disso, a espessura das cascas de ovos de Citipati e Deinonychus são quase idênticas, e uma vez que a espessura da casca se correlaciona com o volume dos ovos, isto apoia ainda mais a ideia de que os ovos destes dois animais eram aproximadamente do mesmo tamanho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Plesiossauro",
      "descricao": "Gênero de réptil marinho do Jurássico, de pescoço longo e quatro nadadeiras, descoberto na costa inglesa."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que criatura lendária de um lago da Escócia costuma ser imaginada com o corpo de um plesiossauro?",
    "resposta": "Monstro do Lago Ness",
    "fonte": [
      "https://en.wikipedia.org/wiki/Loch_Ness_Monster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Loch_Ness_Monster",
        "situacao": "ok",
        "texto": "The Loch Ness Monster (Scottish Gaelic: Uilebheist Loch Nis), known affectionately as Nessie, is a mythical creature in Scottish folklore that is said to inhabit Loch Ness in the Scottish Highlands. It is often described as large, long-necked, and with one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in \n[…]\nAnother sonar contact was made, this time with two objects estimated to be about 9 metres (30 ft). The strobe camera photographed two large objects surrounded by a flurry of bubbles. Some interpreted the objects as two plesiosaur-like animals, suggesting several large animals living in Loch Ness. This photograph has rarely been published.\n[…]\nIn August 1933, Italian journalist Francesco Gasparini submitted what he said was the first news article on the Loch Ness Monster. In 1959, he reported sighting a \"strange fish\" and fabricated eyewitness accounts: \"I had the inspiration to get hold of the item about the strange fish. The idea of the monster had never dawned on me, but then I noted that the strange fish would not yield a long article, and I decided to promote the imaginary being to the rank of monster without further ado.\"\n[…]\nIn an October 2006 New Scientist article, \"Why the Loch Ness Monster is no plesiosaur\", Leslie Noè of the Sedgwick Museum in Cambridge said: \"The osteology of the neck makes it absolutely certain that the plesiosaur could not lift its head up swan-like out of the water\".\n[…]\nIf creatures similar to plesiosaurs lived in Loch Ness they would be seen frequently, since they would have to surface several times a day to breathe.\n[…]\nDue to the lack of plankton, there is not enough food in Loch Ness to sustain a family of Plesiosaurs.\n[…]\nWhile this supports the idea that a Plesiosaur could handle the environment of Loch Ness, it doesn't support the idea that Nessie is one."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monstro_do_lago_Ness",
        "situacao": "ok",
        "texto": "O monstro do lago Ness, monstro de Loch Ness, também conhecido simplesmente por Nessie, é um criptídeo aquático que alegadamente foi visto no Loch Ness (Lago Ness), nas Terras Altas da Escócia, no Reino Unido. A sua existência (ou não) continua a suscitar debate entre os cépticos e os crentes, e é um dos mistérios da criptozoologia. O monstro de Loch Ness é descrito como uma espécie de monstro ou \n[…]\nDiz-se que o vídeo está \"entre as mais brilhantes aparições do monstro já feitas\". A BBC da Escócia transmitiu o vídeo em 29 de maio de 2007.\n[…]\nCientistas dizem que um Plesiossauro nunca levantaria o pescoço acima d'água, como o monstro supostamente faz. Além disso, o plesiossauro era adaptado ao calor, e não às temperaturas absurdamente baixas do Lago Ness.\n[…]\nNessie também foi parodiada no desenho Phineas e Ferb como o \"Monstro do lago Naso\". No desenho Kid vs. Kat Nessie é parodiada como o \"Monstro do lago Coruja\". Carl Barks retratou Nessie na história O Mistério do Lago, Obras Completas de Carl Barks 33. Nesta história, o protagonista Donald decide fotografar o monstro no interior do lago Less (paródia para o lago Ness), mas é engolido pelo bicho.\n[…]\nEm Arquivo X no Episódio O Monstro do Lago um monstro marinho apareceu sendo responsável por várias mortes. Mesmo não sendo o Monstro do Lago Ness, durante o episódio várias referências são feitas ao Monstro do Lago Ness.\n[…]\nEm EarthBound na fase Winters e sem esquecer o filme Meu Monstro de Estimação, em Mega Man Star Force 2, há uma cidade chamada Loch Mess, onde segundo a lenda, vive uma criatura chamada Dossy (Messy), que na verdade é a forma de vida eletromagnética Brachio Wave (Plesio Surf). Em Top Gear de Super Nintendo, na pista \"Loch Ness\", um suposto Nessie aparece ao fundo do cenário num lago. Também é possível ver placas na beira da pista com a frase \"Beware the Monster!\" (Cuidado com o Monstro!).\n[…]\nMonstro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Plesiossauro",
      "descricao": "Gênero de réptil marinho do Jurássico, de pescoço longo e quatro nadadeiras, descoberto na costa inglesa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na década de 1820, que caçadora de fósseis inglesa encontrou o primeiro esqueleto completo de plesiossauro?",
    "resposta": "Mary Anning",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mary_Anning",
      "https://en.wikipedia.org/wiki/Plesiosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mary_Anning",
        "situacao": "ok",
        "texto": "Mary Anning (21 May  1799 –   9 March  1847) was an English fossil collector, dealer, and palaeontologist. She became known internationally for her discoveries in Jurassic marine fossil beds in the cliffs along the English Channel at Lyme Regis in the county of Dorset, South West England. Anning's findings contributed to changes in scientific thinking about prehistoric life and the history of the \n[…]\nIn 2021, the Royal Mint issued sets of commemorative fifty pence coins called The Mary Anning Collection, designed by the palaeoartist Bob Nicholls and minted in acknowledgement of her lack of recognition as \"one of Britain's greatest fossil hunters\". The coins have images of Temnodontosaurus, Plesiosaurus and Dimorphodon, which she discovered, and her discoveries were \"often overlooked at a time when the scientific world was dominated by men\", and as \"a working-class woman\".\n[…]\nIn August 2018, a campaign called \"Mary Anning Rocks\" was formed by an 11-year-old schoolgirl from Dorset, Evie Swire, supported by her mother Anya Pearson. The campaign was set up to remember Anning in her hometown of Lyme Regis by erecting a statue and creating a learning legacy in her name. A crowdfunding campaign began but was put on hold due to the COVID-19 pandemic in the United Kingdom; it resumed in November 2020.\n[…]\nMary Anning appears in the web manga Learn Even More with Manga!, derived from the 2015 video game Fate/Grand Order. Her depiction in that manga brings several features from Anning's life into play, such as fossil-collecting gear, fossils, and live versions of ichthyosaurs and plesiosaurs. In 2022, Anning was added to the video game Fate/Grand Order as a gacha character for a limited time.\n[…]\nMedia related to Mary Anning at Wikimedia Commons\n[…]\nChisholm, Hugh, ed. (1911). \"Anning, Mary\" . Encyclopædia Britannica (11th ed.). Cambridge University Press."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Plesiosaurus",
        "situacao": "ok",
        "texto": "Plesiosaurus (Greek: πλησίος (plesios), near to + σαῦρος (sauros), lizard) is a genus of extinct, large marine sauropterygian reptile that lived during the Early Jurassic. It is known by nearly complete skeletons from the Lias of England. Measuring around 3.5 m (11 ft) long, it is distinguishable by its small head, long and slender neck, broad turtle-like body, a short tail, and two pairs of large\n[…]\nThe first complete skeleton of Plesiosaurus was discovered by early paleontologist and fossil hunter Mary Anning in Sinemurian (Early Jurassic)-age rocks of the lower Lias Group in December 1823 near Lyme Regis in Dorset, England.\n[…]\nAdditional fossils of Plesiosaurus were found in rocks of the Lias Group of Dorset for many years, \"until the cessation of quarrying activities in the Lias Group, early in this [20th] century.\" although less complete remains were used by Henry De la Beche and William Conybeare to name the species two years earlier in 1821, and despite being discovered first, Conybeare's remains were not the holotype; Anning's were.\n[…]\nConybeare and De la Beche coined the name for scattered finds from the Bristol region, Dorset, and Lyme Regis in 1821. The type species of Plesiosaurus, P. dolichodeirus, was named and described by Conybeare in 1824 on the basis of Anning's original finds.\n[…]\nList of plesiosaur genera\n[…]\nTaylor, M. A. and Cruickshank, A. R. I. 1993. Cranial anatomy and functional morphology of Pliosaurus brachyspondylus (Reptilia: Plesiosauria) from the Upper Jurassuc of Westbury, Wiltshire. Philosophical Transactions of the Royal Society of London, Series B, 341, 399–418.\n[…]\nTorrens, Hugh 1995. \"Mary Anning (1799–1847) of Lyme; 'The Greatest Fossilist the World Ever Knew'\". The British Journal for the History of Science, 25 (3): 257–284\n[…]\nGenus Plesiosaurus – The Plesiosaur Directory\n[…]\nPlesiosauroidea – Palaeos\n[…]\nPlesiosauria  – Mikko's Phylogeny Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mary_Anning",
        "situacao": "ok",
        "texto": "Mary Anning (Lyme Regis, 21 de maio de 1799 — 9 de março de 1847) foi uma paleontóloga, negociadora e coletora de fósseis inglesa.\n[…]\nMary nasceu em Lyme Regis, Dorset, em 1799. Seu pai, Richard Anning, era carpinteiro, que aumenta a renda mensal escavando fósseis nos recifes e vendendo-os aos turistas. Casou com Mary Moore, conhecida como Molly, em 8 de agosto de 1793, em Blandford Forum. O casal se mudou para Lyme em uma casa construída numa ponte, no centro e frequentavam a capela que atendia dissidentes ingleses na rua Coombe, onde os frequentadores se chamavam de independentes e, posteriormente de congregacionalistas.\n[…]\nApesar de suas contribuições, Mary Anning enfrentou preconceito de gênero e classe social, sendo muitas vezes subestimada ou não creditada formalmente por suas descobertas. Cientistas homens frequentemente publicavam artigos sobre fósseis encontrados por ela sem mencioná-la como autora. Ainda assim, Anning tornou-se respeitada entre paleontólogos e colecionadores de sua época, e seus fósseis foram incorporados a importantes museus, incluindo o Museu de História Natural de Londres.\n[…]\nHoje, Mary Anning é reconhecida como uma pioneira da paleontologia, cuja experiência prática e observações detalhadas foram fundamentais para o desenvolvimento da ciência dos fósseis. Sua vida inspira estudos sobre a inclusão de mulheres na ciência e programas educacionais que destacam contribuições femininas históricas em áreas científicas dominadas por homens.\n[…]\n«Collections and research: Mary Anning». Lyme Regis Museum\n[…]\n«Mary Anning (1799–1847)». thedorsetpage.com\n[…]\n«Episode 10: Mary Anning» (podcast). Babes of Science",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Ictiossauro",
      "descricao": "Grupo extinto de répteis marinhos da Era Mesozoica, com corpo hidrodinâmico semelhante ao de golfinhos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os ictiossauros eram répteis, mas, por evolução convergente, tinham o corpo parecido com o de que mamífero marinho atual?",
    "resposta": "Golfinho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ichthyosauria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ichthyosauria",
        "situacao": "ok",
        "texto": "Ichthyosauria is an order of large extinct marine reptiles sometimes referred to as \"ichthyosaurs\", although the term is also used for wider clades in which the order resides.\n[…]\nThe similarities were explained as a case of convergent evolution. Furthermore, the descent of the Hupehsuchia is no less obscure, meaning a possible close relationship would hardly clarify the general evolutionary position of the ichthyosaurs.\n[…]\nEvolutionary biologist Stephen Jay Gould said that the ichthyosaur was his favourite example of convergent evolution, where similarities of structure are analogous, not homologous, thus not caused by a common descent, but by a similar adaptation to an identical environment:This sea-going reptile with terrestrial ancestors converged so strongly on fishes that it actually evolved a dorsal fin and tail in just the right place and with just the right hydrological design.\n[…]\nIn 1994, Judy Massare concluded that ichthyosaurs had been the fastest marine reptiles. Their length/depth ratio was between three and five, the optimal number to minimise water resistance or drag. Their smooth skin and streamlined bodies prevented excessive turbulence. Their hydrodynamic efficiency, the degree to which energy is converted into a forward movement, would approach that of dolphins and measure about 0.8.\n[…]\nThe following is a list of geological formations in which ichthyosaur fossils have been found:\n[…]\nList of ichthyosaurs\n[…]\nTimeline of ichthyosaur research\n[…]\nUSMP Berkeley's ichthyosaur introduction\n[…]\nRyosuke Motani's detailed Ichthyosaur homepage, with vivid graphics\n[…]\nEureptilia: Ichthyosauria – Palaeos\n[…]\nCurrent research on origins of Ichthyosauria, March 21, 2023, Atlas Obscura"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ictiossauro",
        "situacao": "ok",
        "texto": "Os Ichthyosauria (do latim científico Ichthyosauria) constituem uma ordem de répteis marinhos extintos que teriam surgido no início do Triássico Inferior (paleotriássico), extinguindo-se um pouco antes da extinção dos dinossauros, no início do Cretácico superior (neocretássico). Os Ichthyosauria teriam hipoteticamente atingindo o pico de desenvolvimento durante o Jurássico e após o seu desaparecim\n[…]\nOs Ichthyosauria mediam entre 2 e 3 metros de comprimento (embora alguns chegassem a atingir 15 m), tinham um focinho longo e afilado, além de barbatanas caudais e dorsais, semelhantes às de peixes e golfinhos. Apesar disto, estes animais eram répteis, e as semelhanças resultam de evolução convergente de estruturas análogas. Os Ichthyosauria eram animais carnívoros e alimentavam-se preferencialmente de cefalópodes mesozóicos como as belemnites e amonites.\n[…]\nO estudo da anatomia do olho destes animais sugere que alguns géneros de Ichthyosauria, nomeadamente o Ophthalmosaurus, possam ter sido mergulhadores de profundidade, como o cachalote hoje em dia. São bastante parecidos com os golfinhos, mas não possuem ligações com estes, que são mamíferos. Provavelmente foram répteis que voltaram à água. Eram ovovivíparos e tal como os golfinhos os seus filhos nasciam de cauda. Tinham um corpo extremamente aquadinâmico\n[…]\nOs primeiros Ichthyosauria surgiram no início do período Triássico e lembravam mais lagartos com nadadeiras do que golfinhos ou peixes. Estes proto-Ichthyosauria muito primitivos, agora classificados como ictiopterigios ao invés de Ichthyosauria deram origem aos verdadeiros Ichthyosauria algum momento no final do Triássico inferior ou início Triássico Médio.\n[…]\nTodos estes animais foram hidrodinâmicos, com formas de golfinhos, mas os animais mais primitivos eram longos, talvez mais do que avançados e compactos Stenopterygius e Ichthyosaurus.\n[…]\n«Répteis marinhos do passado»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Megalossauro",
      "descricao": "Gênero de dinossauro terópode do Jurássico Médio da Inglaterra, descrito por William Buckland em 1824."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que romance de Charles Dickens começa imaginando um megalossauro caminhando pelas ruas lamacentas de Londres?",
    "resposta": "A Casa Soturna",
    "distratores": [
      "Oliver Twist",
      "Grandes Esperanças",
      "Tempos Difíceis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Megalosaurus",
      "https://en.wikipedia.org/wiki/Bleak_House"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Megalosaurus",
        "situacao": "ok",
        "texto": "Megalosaurus (meaning \"great lizard\", from Greek μέγας, megas, meaning 'big', 'tall' or 'great' and σαῦρος, sauros, meaning 'lizard') is an extinct genus of large carnivorous theropod dinosaurs that lived during the Middle Jurassic (Bathonian age, ~166 million years ago) in what is now southern England. Although fossils from other areas have been assigned to the genus, the only certain remains of \n[…]\nIn 1824, Buckland assigned Megalosaurus to the Sauria, assuming within the Sauria a close affinity with modern lizards, more than with crocodiles. In 1842, Owen made Megalosaurus one of the first three genera placed in the Dinosauria. In 1850, Prince Charles Lucien Bonaparte coined a separate family Megalosauridae with Megalosaurus as the type genus. For a long time, the precise relationships of Megalosaurus remained vague.\n[…]\nMegalosaurus may have hunted stegosaurs and sauropods.Benson in 2010 concluded from its size and common distribution that Megalosaurus was the apex predator of its habitat.\n[…]\nThis had been largely motivated by a desire to annoy his rival Othniel Charles Marsh and the name has found no acceptance. In 1896, Charles Jean Julien Depéret named Megalosaurus crenatissimus, \"the much crenelated\", based on remains from the Late Cretaceous found in Madagascar. In 1955 this was made a separate genus Majungasaurus. The generic name Laelaps, used by Cope to denote a theropod, had been preoccupied by a mite.\n[…]\nIn 1990, Ralph Molnar renamed \"Zanclodon\" cambrensis Newton 1899, based on a left lower jaw, specimen BGS 6532 found at Bridgend, Wales, United Kingdom, into ?Megalosaurus cambrensis, which was later followed by Peter Galton in 1998. It is a senior synonym of Gressylosaurus cambrensis Olshevsky 1991. The specific name refers to Cambria, the Latin name of Wales. It was suggested to probably represents a member of the Coelophysoidea, or some other predatory archosaur."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bleak_House",
        "situacao": "ok",
        "texto": "Bleak House is a novel by the English author Charles Dickens, first published as a 20-episode serial between 12 March 1852 and 12 September 1853. The novel has many characters and several subplots, and is told partly by the novel's heroine, Esther Summerson, and partly by an omniscient narrator. At the centre of Bleak House is a long-running legal case in the Court of Chancery, Jarndyce and Jarndy\n[…]\nCharley is Neckett's daughter, hired by John Jarndyce to be a maid to Esther. Called \"Little Coavinses\" by Skimpole.\n[…]\nA 1901 short film, The Death of Poor Joe, is the oldest known surviving film featuring a Charles Dickens character (Jo in Bleak House).\n[…]\nThe BBC has produced three television adaptations of Bleak House. The first serial, Bleak House, was broadcast in 1959 in eleven half-hour episodes. The serial survives. The second Bleak House, starring Diana Rigg and Denholm Elliott, aired in 1985 as an eight-part series. In 2005, the third Bleak House was broadcast in fifteen episodes starring Anna Maxwell Martin, Gillian Anderson, Denis Lawson, Charles Dance, and Carey Mulligan.\n[…]\nCharles Jefferys wrote the words for and Charles William Glover wrote the music for songs called \"Ada Clare\" and \"Farewell to the Old House\", which are inspired by the novel.\n[…]\nLike most Dickens novels, Bleak House was published in 20 monthly instalments, each containing 32 pages of text and two illustrations by Phiz (the last two being published together as a double issue). Each cost one shilling, except for the final double issue, which cost two shillings.\n[…]\nCharles Dickens, Bleak House, ed. Nicola Bradbury (Harmondsworth: Penguin, 1996)\n[…]\nCharles Dickens, Bleak House, ed. George Ford and Sylvere Monod (W.W. Norton, 1966)\n[…]\nHoldsworth, William S. (1928). Charles Dickens as a Legal Historian. Yale University Press. Contains detailed information on the workings of the Court of Chancery pages 79 to 115."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Megalosaurus",
        "situacao": "ok",
        "texto": "Megalosaurus (em português Megalossauro que significa \"grande lagarto\", do grego μέγας, megas, que significa 'grande', 'alto' ou 'ótimo' e σαῦρος, sauros, que significa 'lagarto') é um gênero extinto de grandes dinossauros terópodes carnívoros do período do Jurássico Médio. (estágio Batoniano, há 166 milhões de anos) do sul da Inglaterra. Embora fósseis de outras áreas tenham sido atribuídos ao gê\n[…]\nDesde então, OU 1328 foi perdido e não foi atribuído com segurança a Megalosaurus até que o dente foi redescrito por Delair & Sarjeant (2002).\n[…]\nBuckland, incentivado por um impaciente Cuvier, continuou a trabalhar no assunto durante 1823, permitindo que sua futura esposa, Mary Morland, fornecesse desenhos dos ossos, que serviriam de base para ilustrar litografias. Finalmente, em 20 de fevereiro de 1824, durante a mesma reunião da Sociedade Geológica de Londres em que Conybeare descreveu um espécime muito completo de Plesiosaurus, Buckland anunciou formalmente Megalosaurus.\n[…]\nEm 1824, Buckland atribuiu Megalosaurus à Sauria, assumindo dentro da Sauria uma estreita afinidade com os lagartos modernos, mais do que com os crocodilos. Em 1842, Owen fez do Megalosaurus um dos três primeiros gêneros colocados no Dinosauria. Em 1850, o príncipe Charles Lucien Bonaparte cunhou uma família separada Megalosauridae com Megalosaurus como gênero-tipo. Por muito tempo, as relações precisas do Megalosaurus permaneceram vagas.\n[…]\nMegalosaurus é famoso por inspirar o personagem principal da série Família Dinossauros, Dino da Silva Sauro. Apesar de apresentado de forma humanóide como a maioria dos personagens da série, Dino da Silva Sauro possui claras características de Megalosaurus, como o pescoço curto. Em alguns episódios, Dino da Silva Sauro se refere como O Poderoso Megalossauro.\n[…]\nO Wikispecies possui informações sobre: Megalosaurus\n[…]\nMedia relacionados com Megalosaurus no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Archaeopteryx",
      "descricao": "Gênero de dinossauro com penas do Jurássico Superior, encontrado no calcário de Solnhofen, na Alemanha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O primeiro esqueleto de Archaeopteryx, com penas e dentes, apareceu em 1861, apenas dois anos depois de que livro famoso de Darwin?",
    "resposta": "A Origem das Espécies",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archaeopteryx"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archaeopteryx",
        "situacao": "ok",
        "texto": "Archaeopteryx ( ; lit. 'ancient wing'), sometimes referred to by its German name, \"Urvogel \" (lit. 'Primeval Bird') is an extinct genus of bird-like dinosaurs. The genus name derives from the Ancient Greek ἀρχαῖος (archaîos), meaning 'ancient', and πτέρυξ (ptérux), meaning 'feather, wing'. Between the late 19th century and the early 21st century, Archaeopteryx was generally accepted by palaeontolo\n[…]\nThe first skeleton, known as the London Specimen (BMNH 37001), was unearthed in 1861 near Langenaltheim, Germany, and perhaps given to local physician Karl Häberlein in return for medical services. He then sold it for £700 (roughly £83,000 in 2020) to the Natural History Museum in London, where it remains. Missing most of its head and neck, it was described in 1863 by Richard Owen as Archaeopteryx macrura, allowing for the possibility it did not belong to the same species as the feather.\n[…]\nIn 2011, graduate student Ryan Carney and colleagues performed the first colour study on an Archaeopteryx specimen. Using scanning electron microscopy technology and energy-dispersive X-ray analysis, the team was able to detect the structure of melanosomes in the isolated feather specimen described in 1861. The resultant measurements were then compared to those of 87 modern bird species, and the original colour was calculated with a 95% likelihood to be black.\n[…]\nArchaeopteryx lithographica Meyer, 1861 [conserved name]\n[…]\nArchaeopterix lithographica Anon., 1861 [lapsus]\n[…]\nH. von Meyer (1861). Archaeopterix lithographica (Vogel-Feder) und Pterodactylus von Solenhofen. Neues Jahrbuch für Mineralogie, Geognosie, Geologie und Petrefakten-Kunde. 1861: 678–679, plate V. [Article in German]. Full text, Google Books.\n[…]\nAll About Archaeopteryx, from Talk.Origins.\n[…]\nThis Dinosaur Had Feathers and Probably Flew Like a Chicken. Jingmai O'Connor's analysis of the Chicago Archaeopteryx, 14 May 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archaeopteryx",
        "situacao": "ok",
        "texto": "Archaeopteryx (do grego: ἀρχαῖος (archaios), \"antigo\", + πτέρυξ (pteryx), \"pena\" ou \"asa\") é um gênero fóssil de dinossauro terópode emplumado. A espécie-tipo é denominada Archaeopteryx lithographica (; e λίθος (lithos), \"pedra\" + γράφειν (graphein), \"escrito em\"). O gênero pode ser aportuguesado como arqueopterix ou arqueoptérix. Algumas vezes é referido pela palavra alemã Urvogel, que significa \n[…]\nO primeiro espécime completo de Archaeopteryx foi anunciado em 1861, apenas dois anos após Charles Darwin publicar \"A Origem das Espécies\", e se tornou uma peça chave de evidência no debate sobre a evolução. Ao longo dos anos, outros nove espécimes de Archaeopteryx foram descobertos. Apesar da variação entre estes fósseis, a maioria dos especialistas considera todos os restos fósseis que foram descobertos como pertencentes a uma única espécie, embora isso ainda seja debatido.\n[…]\nA sinonímia da espécie inclui:\n[…]\nArchaeopterix lithographica Anon., 1861 [lapsus]\n[…]\nOs últimos quatro táxons podem ser considerados como gêneros e/ou espécies válidos.\n[…]\nO primeiro esqueleto, conhecido como o espécime de Londres (BMNH 37.001), foi descoberto em 1861 próximo a Langenaltheim, e pertencia inicialmente ao médico do distrito de Pappenheim, Karl Friedrich Häberlein. O exemplar foi então vendido por 700 libras para o Museu de História Natural de Londres, onde permanece. O esqueleto apresenta impressões nítidas de penas nas asas e cauda, entretanto, o crânio está ausente.\n[…]\nDiversos insetos representando doze ordens e mais de cinquenta gêneros são registrados. Os pterossauros constituem o mais importante aspecto faunístico de Solnhofen, sendo representados por sete gêneros. Outras espécies terrestres como lagartos, tartarugas e dinossauros são raros nessa formação. Além do Archaeopteryx, apenas dois outros dinossauros foram encontrados em Solnhofen, o Compsognathus longipes e o Juravenator starcki.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Archaeopteryx",
      "descricao": "Gênero de dinossauro com penas do Jurássico Superior, encontrado no calcário de Solnhofen, na Alemanha."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os fósseis do Archaeopteryx foram encontrados em pedreiras de calcário da região de Solnhofen, em que país?",
    "resposta": "Alemanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Archaeopteryx"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Archaeopteryx",
        "situacao": "ok",
        "texto": "Archaeopteryx ( ; lit. 'ancient wing'), sometimes referred to by its German name, \"Urvogel \" (lit. 'Primeval Bird') is an extinct genus of bird-like dinosaurs. The genus name derives from the Ancient Greek ἀρχαῖος (archaîos), meaning 'ancient', and πτέρυξ (ptérux), meaning 'feather, wing'. Between the late 19th century and the early 21st century, Archaeopteryx was generally accepted by palaeontolo\n[…]\nThe Berlin specimen has been designated as Archaeornis siemensii, the Eichstätt specimen as Jurapteryx recurva, the Munich specimen as Archaeopteryx bavarica, and the Solnhofen specimen as Wellnhoferia grandis.\n[…]\nThe richness and diversity of the Solnhofen limestones in which all specimens of Archaeopteryx have been found have shed light on an ancient Jurassic Bavaria strikingly different from the present day. The latitude was similar to Florida, though the climate was likely to have been drier, as evidenced by fossils of plants with adaptations for arid conditions and a lack of terrestrial sediments characteristic of rivers.\n[…]\nThe excellent preservation of Archaeopteryx fossils and other terrestrial fossils found at Solnhofen indicates that they did not travel far before becoming preserved. The Archaeopteryx specimens found were therefore likely to have lived on the low islands surrounding the Solnhofen lagoon rather than to have been corpses that drifted in from farther away.\n[…]\nArchaeopteryx skeletons are considerably less numerous in the deposits of Solnhofen than those of pterosaurs, of which seven genera have been found. The pterosaurs included species such as Rhamphorhynchus belonging to the Rhamphorhynchidae, the group which dominated the ecological niche currently occupied by seabirds, and which became extinct at the end of the Jurassic.\n[…]\nP. Wellnhofer (2008). Archaeopteryx – Der Urvogel von Solnhofen (in German). Verlag Friedrich Pfeil, Munich. ISBN 978-3-89937-076-8."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Archaeopteryx",
        "situacao": "ok",
        "texto": "Archaeopteryx (do grego: ἀρχαῖος (archaios), \"antigo\", + πτέρυξ (pteryx), \"pena\" ou \"asa\") é um gênero fóssil de dinossauro terópode emplumado. A espécie-tipo é denominada Archaeopteryx lithographica (; e λίθος (lithos), \"pedra\" + γράφειν (graphein), \"escrito em\"). O gênero pode ser aportuguesado como arqueopterix ou arqueoptérix. Algumas vezes é referido pela palavra alemã Urvogel, que significa \n[…]\nArchaeopteryx recurva Howgate, 1984\n[…]\nArchaeopteryx bavarica Wellnhofer, 1993\n[…]\nDez espécimes com variados graus de preservação e uma pena geralmente atribuída a mesma espécie são conhecidos. Todos os restos fósseis foram encontrados em depósitos calcários do Jurássico Superior próximos as cidades de Solnhofen, Eichstätt e Langenaltheim, na Baviera.\n[…]\nA descoberta inicial, uma única pena, foi encontrada em 1860 ou 1861 nas pedreiras calcárias de Solnhofen e foi descrita por Christian Erich Hermann von Meyer em 1861. Uma das partes da impressão calcária se encontra no Museu Humboldt für Naturkunde em Berlim, e a outra metade no Museu Paleontológico de Munique. A pena, geralmente atribuída ao Archaeopteryx, foi o holótipo inicialmente proposto para a espécie.\n[…]\nA longa extração de calcário na formação Solnhofen gerou uma coleção de fósseis bem conservados da flora e da fauna marinha e continental rica em diversidade.\n[…]\nA preservação excelente dos fósseis de Archaeopteryx e de outros organismos terrestres encontrados em Solnhofen indica que eles não viajaram muito antes de se preservarem. Os espécimes de Archaeopteryx encontrados provavelmente viveram nas ilhas baixas ao redor da lagoa Solnhofen ao invés de serem corpos que foram trazidos de longe. Os esqueletos de Archaeopteryx são consideravelmente menos numerosos nos depósitos de Solnhofen do que os de pterossauros, dos quais sete gêneros foram encontrados.\n[…]\n«Mikko's Haaramo Phylogeny: Archaeopteryx Synonyms»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Tiranossauro",
      "descricao": "Gênero de grande dinossauro terópode carnívoro do fim do Cretáceo da América do Norte."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1902, que caçador de fósseis americano, batizado em homenagem a um famoso dono de circo, achou o primeiro tiranossauro descrito pela ciência?",
    "resposta": "Barnum Brown",
    "fonte": [
      "https://en.wikipedia.org/wiki/Barnum_Brown",
      "https://en.wikipedia.org/wiki/Tyrannosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Barnum_Brown",
        "situacao": "ok",
        "texto": "Barnum Brown (February 12, 1873 – February 5, 1963), commonly referred to as Mr. Bones, was an American paleontologist. He discovered the first documented remains of Tyrannosaurus during a career that made him one of the most famous fossil hunters working from the late Victorian era into the early 20th century.\n[…]\nBarnum Brown was born in Carbondale, Kansas on February 12, 1873 to William and Clara Silver Brown. Brown's parents moved to Kansas in 1859, traveling by covered wagon with their daughter, Melissa. Their second daughter, Alice Elizabeth, was born in 1860 in Osage County, Kansas, where the family would build a one-room cabin on top of a coal seam.\n[…]\nBrown worked a handful of years in Como Bluff, Wyoming for AMNH in the late 1890s, discovering a prominent Diplodocus specimen and introducing new jacketing and collecting procedures. He also led an expedition to the Hell Creek Formation of southeastern Montana, where, in 1902, he discovered and excavated the first documented remains of Tyrannosaurus rex. In 1910, Brown was promoted to Associate Curator in the Vertebrate Paleontology Department at the AMNH.\n[…]\nBarnum Brown: Dinosaur Hunter, Walker Books for Young Readers (2006) ISBN 0-8027-9602-8\n[…]\nBones for Barnum Brown: Adventures of a Dinosaur Hunter (1985) ISBN 0-87565-011-2\n[…]\nTyrannosaurus Rex & Barnum Brown (Dinosaurs & Their Discoverers Series) by Brooke Hartzog (1999) ISBN 0-8239-5328-9\n[…]\nA Triceratops Hunt In Pioneer Wyoming: The Journals of Barnum Brown & J.P. Sams: The University of Kansas Expedition of 1895 (2004) ISBN 0-931271-77-0\n[…]\nBarnum Brown: The Man Who Discovered Tyrannosaurus Rex by Lowell Dingus and Mark A. Norell (2010) ISBN 0-520-25264-0\n[…]\nWorks by Barnum Brown at Project Gutenberg\n[…]\nWorks by or about Barnum Brown at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tyrannosaurus",
        "situacao": "ok",
        "texto": "Tyrannosaurus () is a genus of large theropod dinosaur. The type species Tyrannosaurus rex (rex meaning 'king' in Latin), often shortened to T. rex or colloquially T-Rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids.\n[…]\nBarnum Brown, assistant curator of the American Museum of Natural History, found the first partial skeleton of T. rex in eastern Wyoming in 1900. Brown found another partial skeleton in the Hell Creek Formation in Montana in 1902, comprising approximately 34 fossilized bones. Writing at the time Brown said \"Quarry No. 1 contains the femur, pubes, humerus, three vertebrae and two undetermined bones of a large Carnivorous Dinosaur not described by Marsh. ...\n[…]\nFrom the 1910s through the end of the 1950s, Barnum's discoveries remained the only specimens of Tyrannosaurus, as the Great Depression and wars kept many paleontologists out of the field.\n[…]\nIn the first detailed scientific description of Tyrannosaurus forelimbs, paleontologists Kenneth Carpenter and Matt Smith dismissed notions that the forelimbs were useless or that Tyrannosaurus was an obligate scavenger.\n[…]\nPhilip J. Currie suggested that Tyrannosaurus may have been pack hunters, comparing T. rex to related species Tarbosaurus bataar and Albertosaurus sarcophagus, citing fossil evidence that may indicate gregarious (describing animals that travel in herds or packs) behavior. A find in South Dakota where three T. rex skeletons were in close proximity may suggest the formation of a pack.\n[…]\nIt is possible that tyrannosaurs were originally Asian species, migrating to North America before the end of the Cretaceous period.\n[…]\nAmerican Museum of Natural History"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barnum_Brown",
        "situacao": "ok",
        "texto": "Barnum Brown (Carbondale, 12 de fevereiro de 1873 — Nova Iorque, 5 de fevereiro de 1963) foi um paleontólogo estadunidense.\n[…]\nEntre 1902 e 1910, escavou em Hell Creek, Montana, onde localizou restos de dinossauros gigantescos, como o Tyrannosaurus rex (um dos maiores terápodes carnívoros do Cretácio), descrito por Henry Fairfield Osborn em 1905, e o Ankylosaurus (1908), outro gigantesco dinossauro do período. A partir de 1910, passou a escavar em Reed Deer River, em Alberta, no Canadá, procurando restos de fósseis do período Cretácio superior.\n[…]\nNo início de 1923, Brown viajou com sua então esposa Lilian para Yangon, a capital da então Birmânia. Brown concentrou sua prospecção de fósseis ao longo de áreas de Arenito de Pondaung. Uma mandíbula com três dentes foi registrada e catalogada em uma exposição de arenito fora da cidade de Mogaung. Ele não reconheceu o significado de sua descoberta até 14 anos depois, quando Edwin H.\n[…]\nColbert, da AMNH, identificou o fóssil como uma nova espécie de primata e o mais antigo antropoide conhecido no mundo. Ele nomeou o holótipo Amphipithecus mogaungensis, ou a criatura semelhante a um macaco de Mogaung, mas um debate considerável permanece sobre seu status como primata e a falta de fósseis agrava essa questão.\n[…]\nObras de Barnum Brown (em inglês) no Projeto Gutenberg\n[…]\nObras de ou sobre Barnum Brown no Internet Archive",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Tiranossauro",
      "descricao": "Gênero de grande dinossauro terópode carnívoro do fim do Cretáceo da América do Norte."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Os bracinhos curtos do tiranossauro terminavam em quantos dedos funcionais em cada mão?",
    "resposta": "Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tyrannosaurus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tyrannosaurus",
        "situacao": "ok",
        "texto": "Tyrannosaurus () is a genus of large theropod dinosaur. The type species Tyrannosaurus rex (rex meaning 'king' in Latin), often shortened to T. rex or colloquially T-Rex, is one of the best represented theropods. It lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids.\n[…]\nIt is possible that tyrannosaurs were originally Asian species, migrating to North America before the end of the Cretaceous period.\n[…]\nSimultaneously, studies of living carnivores suggest that some predator populations are higher in density than others of similar weight (such as jaguars and hyenas, which have vastly differing population densities). Lastly, the study suggests that in most cases, only one in 80 million Tyrannosaurus would become fossilized, while the chances were likely as high as one in every 16,000 of an individual becoming fossilized in areas that had more dense populations.\n[…]\nTyrannosaurus is the most widely known dinosaur in popular culture. Science writer Riley Black states, \"In all of prehistory, there is no animal that commands our attention quite like Tyrannosaurus rex...\n[…]\nSince the time this dinosaur was officially named in 1905, the enormous carnivore has stood as the ultimate dinosaur.\" Paleontologist David Hone notes the popularity of Tyrannosaurus models and skeletal displays in museums and writes that films like  Jurassic Park and King Kong \"would not have been the same without it.\" T. rex is the only dinosaur that is commonly known to the general public by its full scientific name (binomial name) and the scientific abbreviation T.\n[…]\nThe University of Edinburgh Lecture Dr Stephen Brusatte – Tyrannosaur Discoveries Feb 20, 2015\n[…]\n28 species in the tyrannosaur family tree, when and where they lived Stephen Brusatte Thomas Carr 2016"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tiranossauro",
        "situacao": "ok",
        "texto": "Tyrannosaurus (em português Tiranossauro) é um gênero de grandes dinossauros terópodes. A espécie-tipo do gênero é Tyrannosaurus rex, que ganhou o epíteto específico de rex, por ser o maior dinossauro carnívoro conhecido quando foi descoberto. Viveu na região onde hoje é a América do Norte, no antigo continente insular de Laramidia.\n[…]\nAs pernas do animal eram longas e musculosas e terminavam em uma pata com três dedos de garras grossas e pontiagudas, mas os braços eram extremamente curtos e finos, terminando em patas com dois dedos, de garras também pontiagudas, mas muito pequenas. As pernas do Tyrannosaurus estavam entre as mais longas em proporção ao tamanho do corpo de qualquer terópode. No pé, o metatarso era \"arctometatarsal\", o que significa que a parte do terceiro metatarso próxima ao tornozelo foi pinçada.\n[…]\nO cladograma abaixo mostra as relações evolutivas de Tyrannosaurus na análise filogenética do tiranossaurídeo Thanatotheristes degrootorum. No estudo, eles refizeram Tyrannosaurinae com base na análise de 2016 da superfamília Tyrannosauroidea de Brusatte & Carr, para abarcar dois clados especializados respectivamente em gêneros asiáticos (Alioramini) e norte-americanos (Daspletosaurini).\n[…]\nrex teria só dois dedos, e não três, quando o espécime MOR 555, apelidado de \"Wankel Rex\", foi remontado, e posteriormente o fóssil de Sue também foi achado com braços completos.\n[…]\nrex já encontrado foi apelidado de \"Jordan\" e pesava só trinta quilos, enquanto que Sue, com mais de cinco toneladas; os estudos mostraram que Jordan tinha dois anos quando morreu e Sue tinha cerca de vinte e oito, uma idade considerada avançada para a espécie.\n[…]\nTyrannosauroidea\n[…]\nMedia relacionados com Tiranossauro no Wikimedia Commons\n[…]\nO Wikispecies possui informações sobre: Tyrannosaurus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Hipótese de Alvarez",
      "descricao": "Proposta de 1980 segundo a qual o impacto de um asteroide causou a extinção em massa do fim do Cretáceo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1980, que dupla americana de pai e filho propôs que o impacto de um asteroide extinguiu os dinossauros?",
    "resposta": "Luis e Walter Alvarez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alvarez_hypothesis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alvarez_hypothesis",
        "situacao": "ok",
        "texto": "The Alvarez hypothesis posits that the mass extinction of the non-avian dinosaurs and many other living things during the Cretaceous–Paleogene extinction event was caused by the impact of a large asteroid on the Earth. Prior to 2013, it was commonly cited as having happened about 65 million years ago, but Renne and colleagues (2013) gave an updated value of 66 million years. Evidence indicates tha\n[…]\nThe hypothesis is named after the father-and-son team of scientists Luis and Walter Alvarez, who first suggested it in 1980. Shortly afterwards, and independently, the same was suggested by Dutch paleontologist Jan Smit.\n[…]\nIn 1980, a team of researchers led by Nobel prize-winning physicist Luis Alvarez, his son geologist Walter Alvarez, and chemists Frank Asaro and Helen Vaughn Michel, discovered that sedimentary layers found all over the world at the Cretaceous–Paleogene boundary (K–Pg boundary, formerly called Cretaceous–Tertiary or K–T boundary) contain a concentration of iridium hundreds of times greater than normal.\n[…]\nThe authors – who include Walter Alvarez – postulate that shock of the impact, equivalent to an earthquake of magnitude 10 or 11, may have led to seiches, oscillating movements of water in lakes, bays, or gulfs, that would have reached the site in North Dakota within minutes or hours of the impact. This would have led to the rapid burial of organisms under a thick layer of sediment.\n[…]\nVerbal accusations have been thrown both by and toward many prominent researchers including Gerta Keller and Luis Alvarez, discouraging civil debate and in some cases threatening careers. Walter Alvarez is an active member of the UC Berkeley team researching the connection between Deccan volcanism and the Chicxulub impact."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Smilodon",
      "descricao": "Gênero extinto de felino dentes-de-sabre das Américas, que viveu até o fim da última era do gelo."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O gênero Smilodon, o famoso tigre-dentes-de-sabre, foi batizado no século dezenove por um naturalista europeu que estudava cavernas de Minas Gerais. Quem?",
    "resposta": "Peter Lund",
    "distratores": [
      "Fritz Müller",
      "Emílio Goeldi",
      "Hermann von Ihering"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Smilodon",
      "https://en.wikipedia.org/wiki/Peter_Wilhelm_Lund"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Smilodon",
        "situacao": "ok",
        "texto": "Smilodon is a genus of extinct felids. It is one of the best-known saber-toothed predators and prehistoric mammals. Although commonly known as the saber-toothed tiger, it was not closely related to the tiger or other modern cats, belonging to the extinct subfamily Machairodontinae, with an estimated date of divergence from the ancestor of living cats around 20 million years ago. Smilodon was one o\n[…]\nDuring the 1830s, Danish naturalist Peter Wilhelm Lund and his assistants collected fossils in the calcareous caves near the small town of Lagoa Santa, Minas Gerais, Brazil. Among the thousands of fossils found, he recognized a few isolated cheek teeth as belonging to a hyena, which he named Hyaena neogaea in 1839. After more material was found (including incisor teeth and foot bones), Lund concluded the fossils instead belonged to a distinct genus of felids, though transitional to the hyenas.\n[…]\nHe stated it would have matched the largest modern predators in size, and was more robust than any modern cat. Lund originally wanted to call the new genus Hyaenodon, but realizing this name had recently been applied to another prehistoric predator, he instead named it Smilodon populator in 1842. He explained the Ancient Greek meaning of Smilodon as σμίλη (smilē), 'scalpel' or 'two-edged knife', and οδόντος (odóntos), 'tooth'.\n[…]\nThough some later authors used Lund's original species name neogaea instead of populator, it is now considered an invalid nomen nudum, as it was not accompanied with a proper description and no type specimens were designated. Some South American specimens have been referred to other genera, subgenera, species, and subspecies, such as Smilodontidion riggii, Smilodon (Prosmilodon) ensenadensis, and S. bonaeriensis, but these are now thought to be junior synonyms of S. populator.\n[…]\nThe heel bone of Smilodon was fairly long, which suggests it was a good jumper."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Peter_Wilhelm_Lund",
        "situacao": "ok",
        "texto": "Peter Wilhelm Lund (14 June 1801 – 25 May 1880) was a Danish paleontologist, zoologist, and archeologist. He spent most of his life working and living in Brazil. He is considered the father of Brazilian paleontology as well as archaeology.\n[…]\nPeter Wilhelm Lund was born into a wealthy family in Copenhagen. He showed an early interest in natural sciences and was working towards a career in medicine, but following the death of his father, his passion for natural history prompted him instead to opt for that study at the University of Copenhagen. As a student, he wrote two prize-winning dissertations. One of them, published in German, won him international recognition.\n[…]\nWhile living in Lagoa Santa, he hosted several European naturalists, such as the Danish botanist Eugenius Warming. Lund never married and died in Lagoa Santa three weeks before reaching the age of 79.\n[…]\nJensen, A. (1932) Peter Wilhelm Lund, pp. 110–114 in: Meisen, V. Prominent Danish Scientists through the Ages. University Library of Copenhagen 450th Anniversary. Levin & Munksgaard, Copenhagen.\n[…]\nLuna, Pedro Ernesto de: Peter Wilhelm Lund: o auge das suas investigações científicas e a razão para o término das suas pesquisas[1], (in Portuguese) Ph.D. thesis, Universidade de São Paulo, 2007.\n[…]\nFaria, F.Felipe de A. (2008). \"Peter Lund and the questioning of Catastrophism (Peter Lund (1801–1880) e o questionamento do Catastrofismo) (in) Filosofia e História da Biologia Volume 3, 2008 – Seleção de Trabalhos do VI Encontro de Filosofia e História da Biologia, pp:139-156 (disponível em https://www.abfhib.org/FHB/FHB-03/FHB-v03-08-Frederico-Felipe-Faria.pdf)\". Philosophy & History of Biology = Filosofia e História da Biologia. ABFHIB. ISSN 1983-053X."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Smilodon",
        "situacao": "ok",
        "texto": "Smilodon (esmilodonte, em português, também conhecido como tigre-dente-de-sabre) é um gênero extinto de felídeo da subfamília Machairodontinae. É o mais conhecido dos felinos com dentes-de-sabre e viveu durante o Pleistoceno (há entre 2,5 milhões e 10 mil anos). Mais especificamente, esmilodontes percorriam a América do Sul e do Norte entre cerca de 700 000 anos e 11 000 anos. Vários fósseis foram\n[…]\nTrês espécies do gênero são conhecidas, e os portes delas variam e todas são consideradas tigres da época com 95% de similaridade.\n[…]\nFoi um dos maiores felinos que já existiu. Smilodon gracilis era semelhante em tamanho a uma onça-pintada (55 - 130 quilos). Smilodon fatalis era semelhante a um leão (180 - 280 quilos), e Smilodon populator foi o felino mais pesado que já existiu, e possivelmente o maior, podendo variar de 250 até 300 quilos, com uma massa máxima de 436 quilos e 2,50 m de comprimento.[carece de fontes]?\n[…]\nO esmilodonte provavelmente viveu em habitats florestados que permitia formar emboscadas. Sua preferência em caçar grandes mamíferos pode ter sido causa de sua extinção. Existe discussão se as espécies do gênero eram animais sociais. Comparações entre respostas de predadores vocalizações de perigo e a prevalência de feridas cicatrizadas sugerem que era um animal social, enquanto seu pequeno cérebro sugeria que era um animal solitário.[carece de fontes]?\n[…]\nSmilodon fatalis (1,6 Ma - 900 000 anos) - Américas do Norte e Central;\n[…]\nSmilodon fatalis californicus;\n[…]\nSmilodon fatalis floridus;\n[…]\nSmilodon gracilis (2,5 Ma - 500 000 anos) - América do Norte;\n[…]\nSmilodon populator (1 Ma - 10 000 anos — o maior membro do gênero) - América do Sul;\n[…]\nSmilodon neogaeus.\n[…]\nO seguinte cladograma, baseado em fósseis e na análise de ADN, mostra o posicionamento filogenético de Smilodon entre felinos extintos e vivos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Guerra dos Ossos",
      "descricao": "Rivalidade entre os paleontólogos americanos Edward Drinker Cope e Othniel Charles Marsh no fim do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Na chamada Guerra dos Ossos, no século dezenove, que dois paleontólogos americanos rivais disputaram descobertas de dinossauros?",
    "resposta": "Edward Cope e Othniel Marsh",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bone_Wars"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bone_Wars",
        "situacao": "ok",
        "texto": "The Bone Wars, also known as the Great Dinosaur Rush, was a period of intense and ruthlessly competitive fossil hunting and discovery during the Gilded Age of American history, marked by a heated rivalry between Edward Drinker Cope (of the Academy of Natural Sciences of Philadelphia) and Othniel Charles Marsh (of the Peabody Museum of Natural History at Yale).\n[…]\nAt first, the relationship between Edward Drinker Cope and Othniel Charles Marsh was amicable. They met in Berlin in 1864 and spent several days together. They even named species after each other. Over time their relations soured, due in part to their strong personalities. Cope was known to be pugnacious and possessed a quick temper; Marsh was slower, more methodical, and introverted. Both were quarrelsome and distrustful.\n[…]\nTheir differences also extended into the scientific realm, as Cope was a firm supporter of Neo-Lamarckism while Marsh supported Charles Darwin's theory of evolution by natural selection. Even at the best of times, both men were inclined to look down on each other subtly. As one observer put it, \"The patrician Edward may have considered Marsh not quite a gentleman. The academic Othniel probably regarded Cope as not quite a professional.\"\n[…]\nBesides being the focus of historical and paleontological books, the Bone Wars is the subject of Jim Ottaviani's graphic novel Bone Sharps, Cowboys, and Thunder Lizards: A Tale of Edward Drinker Cope, Othniel Charles Marsh, and the Gilded Age of Paleontology (2005); Bone Sharps is a work of historical fiction, as Ottaviani introduces the character of Charles R. Knight to Cope for plot purposes, and other events have been restructured.\n[…]\nThe Bone Wars and the lives of Cope and Marsh are dramatized in Bone Wars, a 2026 off-Broadway folk-comedy musical which opened in June 2026 at The Players Theatre in New York City."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_dos_Ossos",
        "situacao": "ok",
        "texto": "Guerra dos Ossos refere-se a um período de intensa especulação e descoberta de fósseis durante a chamada Gilded Age na história dos Estados Unidos, marcada por uma acalorada rivalidade entre Edward Drinker Cope, da Academy of Natural Sciences da Filadélfia, e Othniel Charles Marsh, do Museu Peabody de História Natural na Universidade de Yale. Os dois paleontólogos recorreram a métodos desonestos p\n[…]\nSuas diferenças também atingiram o nível científico: Cope era um forte defensor do neolamarquismo, enquanto que Marsh apoiava a teoria de Charles Darwin da evolução por seleção natural. Mesmo quando eles eram amigos, eles tinham uma tendência a desprezar-se sutilmente. Como um observador explicou: \"O nobre Edward poderia ter considerado que Marsh não era exatamente um cavalheiro. O acadêmico Othniel provavelmente considerou que Cope como não era muito profissional\".\n[…]\nCope também tinha um interesse paleontológico mais amplo, enquanto Marsh quase que exclusivamente perseguiu répteis e mamíferos fossilizados.\n[…]\nApesar dos seus benefícios, a guerra também teve um impacto negativo não só sobre os dois cientistas, mas também em seus companheiros de equipe e do campo da paleontologia. A animosidade pública entre Cope e Marsh danificou a reputação da paleontologia norte-americana na Europa por décadas. Além disso, a alegada utilização de dinamite e sabotagem por parte dos trabalhadores de ambos os cientistas podem ter destruído ou enterrado centenas de fósseis.\n[…]\nJoseph Leidy abandonou suas escavações mais metódicas no oeste, vendo que não poderia manter-se com o ritmo imprudente de Cope e Marsh na busca por ossos. Leidy também se viu cansado de constantes disputas entre os dois outros cientistas, que causou sua retirada do campo, marginalizando seu próprio legado; após a sua morte, Osborn não encontrou uma única menção a Leidy nas obras dos dois rivais.\n[…]\nIllustrated article on the Bone Wars.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "O Mundo Perdido",
      "descricao": "Romance de 1912 de Arthur Conan Doyle sobre uma expedição que encontra dinossauros num planalto da América do Sul."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1912, que escritor britânico publicou O Mundo Perdido, romance sobre dinossauros que sobrevivem num planalto da América do Sul?",
    "resposta": "Arthur Conan Doyle",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Lost_World_(Conan_Doyle_novel)",
        "situacao": "ok",
        "texto": "The Lost World is an adventure and science fiction novel by British writer Sir Arthur Conan Doyle recounting an expedition to a remote plateau in the Amazon basin of South America where dinosaurs and other prehistoric animals still survive, along with a tribe of vicious ape-like creatures that are in conflict with a group of indigenous Indians.\n[…]\nThe work introduces the character of Professor Challenger, who leads the expedition (and who would appear in later Conan Doyle stories), and is narrated in the first person by the journalist member (Edward Malone) of the exploration party. The Lost World appeared in serial form in the Strand Magazine, illustrated by New-Zealand-born artist Harry Rountree, during the months of April to November 1912 and also was serialized in magazines in the United States from March to November 1912.\n[…]\nThe Lost World is widely considered one of Conan Doyle’s best novels for its exciting narrative, imaginative setting, and vivid characters, setting a standard for similar later adventure stories. It has never been out of print.\n[…]\nGreg Bear's 1998 novel Dinosaur Summer is a sequel to The Lost World, set in an alternate history 1947. In the context of Bear's novel, The Lost World was a nonfiction work published by Doyle as recounted to him by Professor Challenger.\n[…]\nSir Arthur Conan Doyle's The Lost World (1999–2002; TV series)\n[…]\nAdventures in Sir Arthur Conan Doyle's The Lost World (2002) (Canadian-French-Luxembourger animated series)\n[…]\nDinosaurs! (1966, an audio dramatic version of The Lost World adapted and directed by Ronald Liss and recorded by permission of the Estate of Sir Arthur Conan Doyle; MGM/Leo the Lion Records C/CH-1016)\n[…]\nThe Lost World (1925) available for free download from Internet Archive.\n[…]\nThe Lost World public domain audiobook at LibriVox\n[…]\nThe Lost World (1912) available at Internet Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Lost_World_%28romance_de_Arthur_Conan_Doyle%29",
        "situacao": "ok",
        "texto": "The Lost World (no Brasil, O Mundo Perdido) é um romance de aventura britânico, escrito por Sir Arthur Conan Doyle e lançado em 1912. A obra refere a si com o título de Mundo Perdido: Relato das maravilhosas aventuras recentes do professor George E. Challenger, lorde John Roxton, professor Summerlee e do sr. E. D. Mallone da Daily Gazette.\n[…]\nOs animais pré-históricos citados na obra foram descritos com base no livro Extinct Animals, do autor Edwin Ray Lankester, publicado em 1905. Edwin Lankester foi um zoólogo inglês conhecido por seu temperamento enérgico, sendo apontado como influência para o Professor Challenger, embora Conan Doyle tenha mencionado William Rutherford, seu antigo professor, como inspiração oficial para o personagem.\n[…]\nO romance de Conan Doyle também se tornaria um dos mais influentes na literatura mundial, expandindo temas científicos da época, como o conceito de evolução, além de destacar que o conhecimento existente até aquele momento era fruto do árduo trabalho de diferentes pesquisadores ao longo do anos.\n[…]\nO Mundo Perdido (1998).\n[…]\nEm 1915, o cientista russo Vladimir Obruchev produziu sua própria versão de um \"mundo perdido\" em seu romance Plutonia, que coloca dinossauros e outras espécies do período Jurássico em uma área subterrânea fictícia na Sibéria.\n[…]\nEm 1916, Edgar Rice Burroughs publicou The Land That Time Forgot, sua versão de The Lost World, onde submarinistas perdidos de um U-Boat alemão descobrem um mundo perdido de dinossauros e homens-macacos na Antártida. Este foi o primeiro de dois outros livros de uma série.\n[…]\nO título do livro de Doyle foi reutilizado por Michael Crichton em seu romance The Lost World, uma sequência de Jurassic Park.\n[…]\nOs Mundos Perdidos de Arthur Conan Doyle (em inglês) no Cinefantastique\n[…]\nThe Lost World (romance de Arthur Conan Doyle) no Projeto Gutenberg",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Cratera de Chicxulub",
      "descricao": "Cratera de impacto soterrada no México, associada à extinção em massa do fim do Cretáceo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A cratera deixada pelo asteroide que extinguiu os dinossauros está enterrada sob que península do México?",
    "resposta": "Península de Iucatã",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicxulub_crater"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicxulub_crater",
        "situacao": "ok",
        "texto": "The Chicxulub crater is an impact crater buried underneath the Yucatán Peninsula in Mexico. The crater is named after the onshore inland community of Chicxulub Pueblo. It was formed slightly over 66 million years ago when an asteroid, about ten kilometers (six miles) in diameter, struck Earth. The crater is estimated to be two hundred kilometers (120 mi) in diameter and is buried to a depth of abo\n[…]\nIn 1978, geophysicists Glen Penfield and Antonio Camargo were working for the Mexican state-owned oil company Petróleos Mexicanos (Pemex) as part of an airborne magnetic survey of the Gulf of Mexico north of the Yucatán Peninsula. Penfield's job was to use geophysical data to scout possible locations for oil drilling. In the offshore magnetic data, Penfield noted anomalies whose depth he estimated and mapped. He then obtained onshore gravity data from the 1940s.\n[…]\nIntermittent core samples from hydrocarbon exploration boreholes drilled by Pemex on the Yucatán peninsula have provided some useful data. UNAM drilled a series of eight fully-cored boreholes in 1995, three of which penetrated deep enough to reach the ejecta deposits outside the main crater rim (UNAM-5, 6, and 7).\n[…]\nOn the Yucatán peninsula, the inner rim of the crater is marked by clusters of cenotes, which are the surface expression of a zone of preferential groundwater flow, moving water from a recharge zone in the south to the coast through a karstic aquifer system. From the cenote locations, the karstic aquifer is clearly related to the underlying crater rim, possibly through higher levels of fracturing,\n[…]\nKornel, Katherine (September 10, 2019). \"A New Timeline of the Day the Dinosaurs Began to Die Out – By drilling into the Chicxulub crater, scientists assembled a record of what happened just after the asteroid impact\". The New York Times. Archived from the original on September 25, 2019. Retrieved September 25, 2019."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cratera_de_Chicxulub",
        "situacao": "ok",
        "texto": "Cratera Chicxulub (pronuncia-se AFI: /tʃikʃuˈlub/) é uma antiga cratera de impacto soterrada embaixo da península de Iucatã, no México. O seu centro está localizado próximo à localidade de Chicxulub, que deu origem ao nome da cratera. A cratera tem mais de 180 km de diâmetro, tornando-a uma das maiores estruturas de impacto conhecidas no mundo; o bólide que formou a cratera tinha pelo menos 10 km \n[…]\nEm 1978 os geofísicos Glen Penfield e Antonio Camargo trabalhavam para a companhia petrolífera estatal mexicana Pemex, como parte de um levantamento aeromagnético do golfo do México, a norte da península do Iucatã. O seu trabalho era utilizar dados geofísicos para estudar possíveis localizações para extrair petróleo. Entre os dados, Penfiel encontrou um enorme arco subaquático com uma \"simetria extraordinária\" na forma de um anel que media em redor de 70 km de diâmetro.\n[…]\nEntão teve acesso a um mapa gravitacional do Iucatã feito na década de 1960. Uma década antes, o mesmo mapa sugerira uma estrutura de impacto ao contratista Robert Baltosser, mas a política corporativa de Pemex daquela época proibia-o de tornar pública a sua conclusão. Penfield descobriu outro arco na península propriamente dita, cujas extremidades apontavam para norte.\n[…]\nComparando os dois mapas, descobriu que os dois arcos separados formavam um círculo de 180 km de diâmetro, centrado perto da povoação de Chicxulub, no Iucatã; era dez vezes maior do que qualquer vulcão conhecido, com uma elevação no seu centro, como as conhecidas em crateras de impacto. Penfield e Camargo concluíram que não podia tratar-se de um vulcão, tratando-se mais provavelmente de uma cratera de impacto.\n[…]\nCratera da Terra de Wilkes\n[…]\nCratera de Vredefort\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em castelhano cujo título é «Cráter de Chicxulub».",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Mamute-lanoso",
      "descricao": "Espécie extinta de mamute coberto de pelos que viveu nas regiões frias da Eurásia e da América do Norte."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os últimos mamutes-lanosos sobreviveram até cerca de quatro mil anos atrás numa ilha isolada do Oceano Ártico. Que ilha era essa?",
    "resposta": "Ilha de Wrangel",
    "fonte": [
      "https://en.wikipedia.org/wiki/Woolly_mammoth",
      "https://en.wikipedia.org/wiki/Wrangel_Island"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Woolly_mammoth",
        "situacao": "ok",
        "texto": "The woolly mammoth (Mammuthus primigenius) is an extinct species of mammoth that lived from the Middle Pleistocene until its extinction in the Holocene epoch. It was one of the last in a line of mammoth species, beginning with the African Mammuthus subplanifrons in the early Pliocene. The woolly mammoth began to diverge from the steppe mammoth about 800,000 years ago in Siberia. Its closest extant\n[…]\nThe woolly mammoth coexisted with early humans, who hunted the species for food, and used its bones and tusks for making art, tools, and dwellings. The population of woolly mammoths declined at the end of the Late Pleistocene, with the last populations on mainland Siberia persisting until around 10,000 years ago, although isolated populations survived on St. Paul Island until 5,600 years ago and on Wrangel Island until 4,000 years ago.\n[…]\nAn adult male from the Holocene Wrangel Island population was estimated to have a height of 2.8 m (9 ft 2 in) and a weight of 4.5 t (9,900 lb). The last woolly mammoth populations are claimed to have decreased in size and increased their sexual dimorphism, but this was dismissed in a 2012 study.\n[…]\nIt has been proposed that these changes are consistent with the concept of genomic meltdown, however, this has been contested by later analysis of the genomes of some of the last mammoths on Wrangel Island, which suggests that highly deleterious mutations had been significantly purged to levels lower than that in mainland populations, though the level of moderately deleterious mutations was elevated.\n[…]\nThe disappearance is relatively close in time with the first evidence of humans on the island, though other authors have suggested that woolly mammoths were almost certainly extinct for several centuries prior to the presence of humans on Wrangel Island (which dates to around 3,600 years ago).\n[…]\nData related to Mammuthus primigenius at Wikispecies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Wrangel_Island",
        "situacao": "ok",
        "texto": "Wrangel Island (Russian: О́стров Вра́нгеля, romanized: Ostrov Vrangelya, IPA: [ˈostrəf ˈvrangʲɪlʲə]; Chukot: Умӄиԓир, romanized: Umqiḷir, IPA: [umqiɬir], lit. 'island of polar bears') is an island of the Chukotka Autonomous Okrug, Russia. It is the 92nd-largest island in the world and roughly the size of Crete. Located in the Arctic Ocean between the Chukchi Sea and East Siberian Sea, the island l\n[…]\nIn 1999, the Chukotka Regional government extended the protected marine area to 24 nmi (44 km) offshore. As of 2003, there were four rangers who reside on the island year-round, while a core group of about 12 scientists conduct research during the summer months. Wrangel Island was home to the last generally accepted surviving population of woolly mammoths, with radiocarbon dating suggesting they persisted on the island until around 4,000 years ago.\n[…]\nWrangel Island is generally accepted to be the final place on Earth to support an isolated population of woolly mammoths until their extinction about 2000 BC, based on directly radiocarbon dated woolly mammoth bones found on the island.\n[…]\nInitially, it was assumed that this was a specific insular dwarf variant of the species originating from Siberia. However, after further evaluation, while their body size is relatively small, it falls within the size range known for woolly mammoths in mainland Siberia, and thus these Wrangel Island mammoths are no longer considered to have been true dwarves (though true dwarf mammoths and other dwarf elephants are known from other islands, some considerably smaller than Wrangel Island mammoths).\n[…]\nIn Jules Verne's novel César Cascabel, the protagonists float past Wrangel Island on an iceberg.\n[…]\nThe title poem of Craig Finlay's 2021  collection The Very Small Mammoths of Wrangel Island describes the last few wooly mammoths living there.\n[…]\nMedia related to Wrangel Island at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamute-lanoso",
        "situacao": "ok",
        "texto": "O mamute-lanoso ou mamute-lanudo (Mammuthus primigenius) foi a última espécie de mamute que se adaptou às regiões mais a norte do planeta. Em relação a outras espécies do gênero Mammuthus eles são animais de tamanho modesto com um porte aproximado ao elefante-africano atual. Os hábitos e aparência desta espécie estão entre os mais detalhados entre as espécies pré-históricas, por conta das descober\n[…]\nO mamute-lanoso conviveu com os humanos, que os caçaram para conseguir comida, além de usarem seus ossos e presas para fazerem ferramentas, habitações e artes (pingentes). Os mamutes-lanosos começaram a desaparecer por volta do ano 10.000 a.C, uma população isolada sobreviveu até o ano 5.600 a.C na ilha de São Paulo e na ilha de Wrangel eles morreram por volta de 2000 a.C.\n[…]\nUm estudo, publicado em outubro na revista Nature, sugeriu que alguns mamutes sobreviveram em ilhas isoladas, longe do contato humano, até 4.000 anos atrás. Outro estudo é o primeiro a determinar que pequenas populações de mamutes coexistiram com humanos no continente da América do Norte até o Holoceno, há apenas 5.000 anos. Os mamutes podem ter persistido no que hoje é o Yukon, no Canadá, até cerca de 5.000 anos atrás.\n[…]\nA análise do genoma do mamute lanoso, em 2015, revelou grandes mudanças genéticas que permitiram que os mamutes se adaptarem à vida no ártico. Os genes de mamute que diferem dos seus homólogos em elefantes desempenharam papéis no desenvolvimento da pele e pelo, metabolismo da gordura, sinalização da insulina e muitas outras características. Genes ligados a traços físicos, como forma do crânio, pequenas orelhas e caudas curtas também foram identificados.\n[…]\nEm 2013, uma expedição às Ilhas Lyakhovsky, na costa da Sibéria, encontrou uma carcaça de mamute-lanoso, contendo sangue em estado líquido. Amostras do sangue foram coletadas, alimentando esperanças de clonar o animal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Vale dos Dinossauros",
      "descricao": "Sítio paleontológico em Sousa, na Paraíba, com pegadas fósseis de dinossauros às margens do rio do Peixe."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O Vale dos Dinossauros, no município de Sousa, com centenas de pegadas fósseis às margens do rio do Peixe, fica em que estado?",
    "resposta": "Paraíba",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vale_dos_Dinossauros",
      "https://pt.wikipedia.org/wiki/Sousa_(Para%C3%ADba)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vale_dos_Dinossauros",
        "situacao": "desambiguacao",
        "texto": "Vale dos Dinossauros pode referir-se a:\n\nVale dos Dinossauros (Serra de Aire) - monumento natural com pegadas de dinossauros, em Portugal.\nVale dos Dinossauros (Sousa) - unidade de conservação no estado da Paraíba, no Brasil.\nO Vale dos Dinossauros - desenho da Hanna-Barbera"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sousa_(Para%C3%ADba)",
        "situacao": "ok",
        "texto": "Sousa é um município brasileiro no estado da Paraíba, distante 432 quilômetros a oeste de João Pessoa, capital estadual.\n[…]\nEm 1872, ano em que foi realizado o primeiro censo demográfico do então Império do Brasil, Sousa possuía uma população de 29 726 habitantes, sendo o município mais populoso da província da Paraíba. Seu território, na época, abrangia uma extensa área do oeste da província, fazendo divisas com o Rio Grande do Norte e o Ceará. Em 1897, o agricultor Anísio Fausto da Silva descobre as primeiras pegadas de dinossauro do Brasil, na atual localidade de Passagem das Pedras.\n[…]\nEsses solos, por serem pouco profundos, são cobertos por uma vegetação xerófila de pequeno porte, a caatinga, que perde suas folhas na estação seca. Sousa abriga o Monumento Natural Vale dos Dinossauros, sítio paleontológico e unidade de conservação estadual criada pelo decreto 23 832 de 27 de setembro de 2002, que abriga a maior incidência de pegadas de dinossauros no mundo e fósseis de mais de oitenta espécies, com idade estimada em cerca de cem milhões de anos.\n[…]\nO trânsito local é municipalizado e gerido pela Superintendência de Transportes e Trânsito de Sousa (STTRANS). Sousa é atravessado pela rodovia federal BR-230, que começa em Cabedelo e atravessa a Paraíba de leste a oeste até a divisa com o estado do Ceará. Dentre as rodovias estaduais estão a PB-383, que liga Sousa à cidade de Lastro, e a PB-391, que faz a ligação com a cidade de Uiraúna, além da PB-348, que conecta São Gonçalo à zona urbana de São José da Lagoa Tapada.\n[…]\nAeroporto de Sousa\n[…]\nParaibanos naturais de Sousa\n[…]\nSousa no WikiMapia\n[…]\nSousa no IBGE Cidades"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Titanoboa",
      "descricao": "Gênero extinto de serpente gigante do Paleoceno, encontrado na mina de carvão de Cerrejón."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A titanoboa, cobra gigante que viveu alguns milhões de anos depois da extinção dos dinossauros, foi descoberta numa mina de carvão de que país?",
    "resposta": "Colômbia",
    "distratores": [
      "Venezuela",
      "Peru",
      "Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Titanoboa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Titanoboa",
        "situacao": "ok",
        "texto": "Titanoboa (; lit. 'titanic boa') is a genus of extinct giant boid snake (being the biological family of all boas and anacondas) that lived during the middle and late Paleocene epoch. Titanoboa was first discovered in the early 2000s by members of the Smithsonian Tropical Research Institute, which – along with students from the University of Florida – recovered 186 fossils of Titanoboa from the Cer\n[…]\nTitanoboa is estimated to grow up to 12.8 m (42 ft) or perhaps even up to 14.3 m (47 ft) long, and weigh around 730 to 1,135 kg (1,610 to 2,500 lb). The discovery of Titanoboa cerrejonensis supplanted the previous record holder, Gigantophis garstini, which is known from the Eocene of Egypt. Titanoboa evolved following the extinction of all nonavian dinosaurs, being one of the largest reptiles that lived after the Cretaceous–Paleogene extinction event.\n[…]\n(2009) to complete the initial size estimates of T. cerrejonensis.\n[…]\nInitially, Titanoboa was thought to have acted much like a modern anaconda based on its size and the environment where it lived, with researchers suggesting that it may have fed on the dyrosaurid Cerrejonisuchus (in which the giant snake may have killed the crocodyliform by constriction).\n[…]\nSuch a lifestyle would be supported by the extensive river systems of Paleocene Colombia, as well as the fish (being fossil lungfish and osteoglossomorphs) recovered from the formation. Though, given its large size, its still possible for it to prey on other animals, such as turtles and the aforementioned crocodyliforms.\n[…]\nThe genera that coexisted alongside Titanoboa included the large, slender-snouted Acherontisuchus, the medium-sized but broad-headed Anthracosuchus, and the relatively small Cerrejonisuchus. Turtles also thrived in the tropical wetlands of Paleocene Colombia, giving rise to several species of considerable size such as Cerrejonemys and Carbonemys."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Titanoboa",
        "situacao": "ok",
        "texto": "Titanoboa ([ˌtaɪtənəˈbəʊə]; lit. \"titanic boa\") é um gênero extinto de serpente gigante da família Boidae (que inclui todas as jiboias e sucuris), que viveu durante Paleoceno Médio (Selandiano) e Superior (Tanetiano). Titanoboa foi descoberta no início dos anos 2000 pelo Smithsonian Tropical Research Institute, que, junto com estudantes da Universidade da Flórida, recuperou 186 fósseis de Titanobo\n[…]\nTitanoboa podia atingir até 12,8 m de comprimento, talvez até 14,3 m, e pesar entre 730 e 1.135 kg. A descoberta de Titanoboa cerrejonensis superou o recordista anterior, Gigantophis garstini, conhecido do Eoceno do Egito. Titanoboa evoluiu após a extinção de todos os dinossauros não avianos, sendo um dos maiores répteis a evoluir após o evento de extinção do Cretáceo-Paleogeno.\n[…]\nTitanoboa é também o único gênero da subfamília Boinae extinto conhecido; todos os outros gêneros de Boinae ainda estão vivos.\n[…]\nOs gêneros que coexistiram com Titanoboa incluíam o grande e de focinho esguio Acherontisuchus [en], o de tamanho médio, mas de cabeça larga, Anthracosuchus [en], e o relativamente pequeno Cerrejonisuchus. Tartarugas também prosperaram nos pântanos tropicais do Paleoceno na Colômbia, dando origem a várias espécies de tamanho considerável, como Cerrejonemys [en] e Carbonemys.\n[…]\nForam encontrados fósseis de 28 indivíduos desta espécie nas minas de carvão de Cerrejón, Colômbia no início de 2009. Antes desta descoberta, eram poucos os fósseis de vertebrados deste período descobertos nos antigos ambientes tropicais da América do Sul. Acredita-se que a temperatura do habitat da Titanoboa cerrejonensis tivesse uma temperatura entre 30 e 34 ºC, estimativa consistente com a hipótese de que havia uma grande concentração de gás carbônico atmosférico nos trópicos do Paleoceno.\n[…]\nMedia relacionados com Titanoboa no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Folhelho de Burgess",
      "descricao": "Formação rochosa nas Montanhas Rochosas do Canadá, famosa por fósseis de animais de corpo mole."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Os fósseis do folhelho de Burgess, no Canadá, registram a vida marinha de que período, famoso por uma explosão de novas formas animais?",
    "resposta": "Cambriano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Burgess_Shale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Burgess_Shale",
        "situacao": "ok",
        "texto": "The Burgess Shale is a fossil-bearing deposit exposed in the Canadian Rockies of British Columbia, Canada. It is famous for the exceptional preservation of the soft parts of its fossils. At c.505 million years old (middle Cambrian), it is one of the earliest fossil beds containing soft-part imprints.\n[…]\nThe Burgess Shale has attracted the interest of paleoclimatologists who want to study and predict long-term future changes in Earth's climate. According to Peter Ward and Donald Brownlee in the 2003 book The Life and Death of Planet Earth, climatologists study the fossil records in the Burgess Shale to understand the climate of the Cambrian explosion.\n[…]\nIn respect of the site being \"characterized by exceptional soft-tissue preservation, [and containing] the most complete fossil record of Cambrian (Wuliuan) marine ecosystems\", the International Union of Geological Sciences (IUGS) included the \"Burgess Shale Cambrian Paleontological Record\" in its assemblage of 100 \"geological heritage sites\" around the world in a listing published in October 2022.\n[…]\nThe biota of the Burgess Shale appears to be typical of middle Cambrian deposits. Although the hard-part bearing organisms make up as little as 14% of the community, these same organisms are found in similar proportions in other Cambrian localities. This means that there is no reason to assume that the organisms without hard parts are exceptional in any way; many appear in other lagerstätten of different age and locations.\n[…]\nPaleobiota of the Burgess Shale\n[…]\nWheeler Shale, also compared to Burgess Shale\n[…]\nList of arthropods of the Cambrian Period\n[…]\n\"Burgess Shale\". Virtual Museum of Canada. 2011.\n[…]\nMelvyn Bragg (host) (17 February 2005). \"The Cambrian Explosion\". In Our Time. BBC Radio 4 broadcast. (includes links to resource pages)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Folhelho_Burgess",
        "situacao": "ok",
        "texto": "O Folhelho Burgess ou Xistos de Burgess é um sítio fossilífero das Rochosas localizado em Colúmbia Britânica, Canadá, e é considerado uma das principais jazidas de fósseis do mundo. Contém grande número de fósseis do período Cambriano médio extraordinariamente preservados, incluindo vários tipos de invertebrados e também os animais dos quais evoluíram os cordados, como o Pikaia, advindo daí a sua \n[…]\nFolhelho Burgess foi o termo informal que Charles Walcott usou para se referir a unidade fossilífera, que mais tarde passou a ser aplicada mais amplamente para descrever o tipo de agrupamento de fósseis que é encontrado na pedreira de Walcott. O sítio fossilífero pertence a formação Stephen, que possui uma parte \"fina\" e outra \"grossa\", alguns pesquisadores consideram que a parte \"fina\" deva ser separada como formação Folhelho Burgess.\n[…]\nAté 1994, 125 gêneros haviam sido descritos dos folhelhos Burgess.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Trilobita",
      "descricao": "Classe extinta de artrópodes marinhos que viveu do Cambriano ao Permiano."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de quase trezentos milhões de anos nos mares, os trilobitas sumiram de vez na grande extinção do fim de que período?",
    "resposta": "Permiano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trilobite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trilobite",
        "situacao": "ok",
        "texto": "Trilobites (; meaning \"three-lobed entities\") are extinct marine arthropods that form the class Trilobita. One of the earliest groups of arthropods to appear in the fossil record, trilobites were among the most successful of all early animals, existing in oceans for almost 270 million years, with over 22,000 species having been described.\n[…]\nTheir diversity moderately recovered during the Early Carboniferous, before dropping to persistently low levels during the late Carboniferous and Permian periods, though they remained widespread until the end of their existence. The last trilobites disappeared in the end-Permian mass extinction event about 251.9 million years ago, by which time only a handful of species remained.\n[…]\nGenerally, trilobites maintained high diversity levels throughout the Cambrian and Ordovician periods before entering a drawn-out decline in the Devonian, culminating in the final extinction of the last few survivors at the end of the Permian period.\n[…]\nSome of the genera of trilobites during the Carboniferous and Permian periods include:\n[…]\nEndops (Middle Permian)\n[…]\nPseudophillipsia (Late Carboniferous to Late Permian)\n[…]\nAt the end of the Permian (Changhsingian), only two genera of trilobites remained extant, Acropyge and Pseudophillipsia. Late Permian trilobites primarily occurred in shallow marine carbonate platform environments, but were also found in deep water, and were widespread, ranging towards the poles.\n[…]\nDecreasing diversity of genera limited to shallow-water shelf habitats coupled with a drastic lowering of sea level (regression) meant that the final decline of trilobites happened shortly before the end Permian mass extinction event. With so many marine species involved in the Permian extinction, the end of nearly 300 million successful years for the trilobites would not have been unexpected at the time."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trilobita",
        "situacao": "ok",
        "texto": "As trilobitas (português brasileiro) ou as trilobites (português europeu) são artrópodes característicos do Paleozoico, conhecidos apenas através do registro fóssil.\n[…]\nO grupo, classificado na classe Trilobita da sub-classe Trilobitomorpha, foi um dos grupos de maior sucesso evolutivo, com aproximadamente 22.000 espécies já descritas, existindo por cerca de 270 milhões de anos: aproximadamente do princípio do Cambriano até próximo do fim do Permiano, ocupando amplamente os oceanos, e com hipóteses sugerindo sua presença também na terra, durante a colonização em massa do ambiente terrestre.\n[…]\nDesta forma, um único organismo pode ter dado origem a vários somatofósseis. Em média, os trilobitas atingiam entre 3 a 10cm de comprimento, mas em alguns casos poderiam chegar a cerca de 80cm de comprimento.\n[…]\nJá alguns trilobitas possuíam olhos esquizocroidais, que tinham lentes amplas e arredondadas, estes sim produziam imagens muito bem definidas de coisas e objetos.\n[…]\nNa primeira exposição de Trilobitas de Canelas, em Arouca, nasceu uma publicação da autoria do  Professor Doutor Armando Marques Guedes. Foi também ele, o responsável pela classificação dos fósseis aí expostos.\n[…]\nÉ de acrescentar, que a inclusão da imagem de um trilobita local no centro do brasão oficial da Freguesia de Canelas (Arouca), da autoria de Lígia Figueiredo, resultou de uma sugestão do  Professor Doutor Armando Marques Guedes, um dos maiores especialistas destes artrópodes em Portugal.\n[…]\n\"Visita Guiada - Trilobites de Canelas, Arouca\", episódio 11, 4 de junho de 2018, temporada 8, programa de Paula Moura Pinheiro, na RTP",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Trilobita",
      "descricao": "Classe extinta de artrópodes marinhos que viveu do Cambriano ao Permiano."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Os olhos dos trilobitas tinham lentes feitas de um mineral transparente. Que mineral era esse?",
    "resposta": "Calcita",
    "distratores": [
      "Quartzo",
      "Mica",
      "Opala"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Trilobite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trilobite",
        "situacao": "ok",
        "texto": "Trilobites (; meaning \"three-lobed entities\") are extinct marine arthropods that form the class Trilobita. One of the earliest groups of arthropods to appear in the fossil record, trilobites were among the most successful of all early animals, existing in oceans for almost 270 million years, with over 22,000 species having been described.\n[…]\nBecause trilobites had wide diversity and an easily fossilized mineralised exoskeleton made of calcite, they left an extensive fossil record. The study of their fossils has facilitated important contributions to biostratigraphy, paleontology, evolutionary biology, and plate tectonics. Trilobites are placed within the clade Artiopoda, which includes many organisms that are morphologically similar to trilobites, but are largely unmineralised.\n[…]\nOnly the upper (dorsal) part of their exoskeleton is mineralized, composed of calcite and calcium phosphate minerals in a lattice of chitin, and is curled round the lower edge to produce a small fringe called the \"doublure\". Their appendages and soft underbelly were non-mineralized.\n[…]\nLenses of trilobites' eyes were made of calcite (calcium carbonate, CaCO3). Pure forms of calcite are transparent, and some trilobites used crystallographically oriented, clear calcite crystals to form each lens of each eye.\n[…]\nRigid calcite lenses would have been unable to accommodate to a change of focus like the soft lens in a human eye would; in some trilobites, the calcite formed an internal doublet structure, giving superb depth of field and minimal spherical aberration, according to optical principles discovered by French scientist René Descartes and Dutch physicist Christiaan Huygens in the 17th century. A living species with similar lenses is the brittle star Ophiocoma wendtii.\n[…]\nList of trilobite genera\n[…]\nTrilobites in Houston Museum of Natural Sciences"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trilobita",
        "situacao": "ok",
        "texto": "As trilobitas (português brasileiro) ou as trilobites (português europeu) são artrópodes característicos do Paleozoico, conhecidos apenas através do registro fóssil.\n[…]\nDesta forma, um único organismo pode ter dado origem a vários somatofósseis. Em média, os trilobitas atingiam entre 3 a 10cm de comprimento, mas em alguns casos poderiam chegar a cerca de 80cm de comprimento.\n[…]\nO seu sentido da visão era extremamente apurado e foram os primeiros animais a desenvolver olhos complexos. Havia dois tipos principais de olhos de Trilobitas, cada um composto por lentes frágeis que eram formadas por cristais de calcita; muitos tinham olhos holocroidais, similares aos compostos dos insetos de hoje; estes olhos formavam imagens difusas de qualquer coisa em movimento.\n[…]\nJá alguns trilobitas possuíam olhos esquizocroidais, que tinham lentes amplas e arredondadas, estes sim produziam imagens muito bem definidas de coisas e objetos.\n[…]\nNa primeira exposição de Trilobitas de Canelas, em Arouca, nasceu uma publicação da autoria do  Professor Doutor Armando Marques Guedes. Foi também ele, o responsável pela classificação dos fósseis aí expostos.\n[…]\nÉ de acrescentar, que a inclusão da imagem de um trilobita local no centro do brasão oficial da Freguesia de Canelas (Arouca), da autoria de Lígia Figueiredo, resultou de uma sugestão do  Professor Doutor Armando Marques Guedes, um dos maiores especialistas destes artrópodes em Portugal.\n[…]\n\"Visita Guiada - Trilobites de Canelas, Arouca\", episódio 11, 4 de junho de 2018, temporada 8, programa de Paula Moura Pinheiro, na RTP",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Extinção do Cretáceo-Paleogeno",
      "descricao": "Extinção em massa ocorrida no fim do Cretáceo, que eliminou os dinossauros não avianos."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Há cerca de quantos milhões de anos o impacto de um asteroide encerrou a era dos dinossauros não avianos?",
    "resposta": "Sessenta e seis milhões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event",
        "situacao": "ok",
        "texto": "The Cretaceous–Paleogene (K–Pg) extinction event, formerly known as the Cretaceous–Tertiary (K–T) extinction event, was a major mass extinction of three-quarters (75%) of the plant and animal species on Earth which occurred around    66 million years ago. The event caused the extinction of all the non-avian dinosaurs and most other tetrapods weighing more than 25 kg (55 lb), excepting some ectothe\n[…]\nThe end-Cretaceous event is the only mass extinction definitively known to be associated with an impact, and other large extraterrestrial impacts, such as the Manicouagan Reservoir impact, do not coincide with any noticeable extinction events.\n[…]\nOther crater-like topographic features have also been proposed as impact craters formed in connection with Cretaceous–Paleogene extinction. This suggests the possibility of near-simultaneous multiple impacts, perhaps from a fragmented asteroidal object similar to the Shoemaker–Levy 9 impact with Jupiter.\n[…]\nEvidence from Tunisia indicates that marine life was deleteriously affected by a major period of increased warmth and humidity linked to a pulse of intense Deccan Traps activity, and that marine extinctions there began before the impact event. Charophyte declines in the Songliao Basin, China before the asteroid impact have been concluded to be connected to climate changes caused by Deccan Traps activity.\n[…]\nBased on studies at Seymour Island in Antarctica, Sierra Petersen and colleagues argue that there were two separate extinction events near the Cretaceous–Paleogene boundary, with one correlating to Deccan Trap volcanism and one correlated with the Chicxulub impact. The team analyzed combined extinction patterns using a new clumped isotope temperature record from a hiatus-free, expanded K–Pg boundary section.\n[…]\nList of possible impact structures on Earth\n[…]\nTimeline of Cretaceous–Paleogene extinction event research – Research timeline"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Extin%C3%A7%C3%A3o_do_Cret%C3%A1ceo-Paleogeno",
        "situacao": "ok",
        "texto": "A extinção do Cretáceo-Paleógeno (K-Pg), anteriormente chamada de extinção do Cretáceo-Terciário (K-T), foi uma extinção em massa, ocorrida há mais ou menos 65,5 milhões de anos, que marca o fim do período Cretáceo (K, abreviação tradicional) e o início do Paleógeno (Pg). Este evento teve um enorme impacto na biodiversidade da Terra e vitimou boa parte dos seres vivos da época, incluindo os dinoss\n[…]\nObservação: os ictiossauros, pliossauros e estegossauros já haviam sido extintos milhões de anos antes desta extinção em massa.\n[…]\nEmbora bastante consistente, a teoria do impacto de um asteroide com a Terra há 65,5 milhões de anos pode não estar correta. Pesquisas recentes concluíram que o impacto de asteroide em Chicxulub ocorreu 300 mil anos antes do grande extermínio.\n[…]\nUm grande reforço a esta hipótese surgiu em 1987 com a descoberta de uma cratera submarina na Nova Escócia, Canadá, conhecida atualmente como cratera de Montagnais. A cratera de Montagnais possui uma idade aproximada de 65,5 milhões de anos e um diâmetro de cerca de 45 quilômetros, em virtude do que muitos estudiosos afirmam que a mesma pode ter tido relação direta com a extinção K-Pg.\n[…]\nEntretanto essa teoria não se encaixa com o fato de que 1/3 da vida na Terra sobreviveu à extinção e que gêneros inteiros de animais saíram incólumes de tal catástrofe, e seria tecnicamente impossível tantas espécies sobreviverem a tal fenômeno. Além disso, em décadas de pesquisas espaciais não foram encontrados vestígios de nenhuma estrela próxima que tenha explodido nas últimas centenas de milhões de anos.\n[…]\nHá ainda alguns filmes de fantasia que fazem referência ao fim dos dinossauros. Um bom exemplo disso é o filme Reino do Fogo, que conta a história de uma espécie de dragão pré-histórico que teria se multiplicado aos milhões no fim do Cretáceo, queimando florestas e continentes inteiros em busca de alimento.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Âmbar",
      "descricao": "Material fóssil translúcido que às vezes preserva insetos e outros pequenos organismos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O âmbar, que às vezes aprisiona insetos por milhões de anos, é a forma fossilizada de que substância?",
    "resposta": "Resina de árvore",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amber"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amber",
        "situacao": "ok",
        "texto": "Amber is fossilized tree resin. It has been appreciated for its color (orange, brown and, sometimes, red) and natural beauty since Neolithic times, and worked as a gemstone since classical antiquity. Amber is used in jewelry and as a healing agent in folk medicine.\n[…]\nThe English word amber derives from Arabic ʿanbar عنبر from Middle Persian 𐭠𐭭𐭡𐭫 (ʾnbl /ambar⁠/, \"ambergris\") via Middle Latin ambar and Middle French ambre. The word referred to what is now known as ambergris (ambre gris or \"gray amber\"), a solid waxy substance derived from the sperm whale. The word, in its sense of \"ambergris\", was adopted in Middle English in the 14th century.\n[…]\nIn ancient China, it was customary to burn amber during large festivities. If amber is heated under the right conditions, oil of amber is produced, and in past times this was combined carefully with nitric acid to create \"artificial musk\" – a resin with a peculiar musky odor. Although when burned, amber does give off a characteristic \"pinewood\" fragrance, modern products, such as perfume, do not normally use actual amber because fossilized amber produces very little scent.\n[…]\nIn perfumery, scents referred to as \"amber\" are often created and patented to emulate the opulent golden warmth of the fossil.\n[…]\nThe copals (subfossil resins). The African and American (Colombia) copals from Leguminosae trees family (genus Hymenaea). Amber of the Dominican or Mexican type (Class I of fossil resins). Copals from Manilia (Indonesia) and from New Zealand from trees of the genus Agathis (family Araucariaceae)\n[…]\nList of types of amber\n[…]\nWebmineral on Amber Physical properties and mineralogical information\n[…]\nMindat Amber Image and locality information on amber\n[…]\nNY Times 40 million year old extinct bee in Dominican amber"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%82mbar",
        "situacao": "ok",
        "texto": "Âmbar é resina de árvore fossilizada. É um material orgânico amorfo, usado como gema. É apreciado por sua cor, geralmente amarela, laranja ou marrom e, às vezes, vermelha, e por sua beleza natural desde a pré-história, e foi trabalhado como gema na Antiguidade Clássica. O âmbar é usado em joalheria e aparece há séculos em remédios da medicina popular.\n[…]\nUma classificação química divide as resinas fósseis em cinco classes. Como se origina de uma resina macia e pegajosa, o âmbar por vezes contém material animal e vegetal na forma de inclusões. A resina fóssil encontrada em camadas de carvão também é chamada de resinita, enquanto o termo ambrite é aplicado ao material encontrado em camadas de carvão da Nova Zelândia.\n[…]\nO âmbar é produzido por uma medula expelida por árvores do gênero dos pinheiros, como a goma da cerejeira e a resina do pinheiro comum. É inicialmente um líquido, que escorre em quantidade considerável, e aos poucos endurece [...] Nossos antepassados também julgavam que era o suco de uma árvore e, por isso, deram-lhe o nome de \"succinum\".\n[…]\nPara que isso aconteça, a resina precisa escapar da destruição. Muitas árvores produzem resina, mas na maioria dos casos o depósito é desfeito por processos físicos e biológicos. Luz solar, chuva, microrganismos e temperaturas extremas tendem a desintegrá-lo. A formação de âmbar exige uma resina suficientemente resistente ou condições que a protejam desses agentes.\n[…]\nA produção anormalmente abundante de resina em árvores vivas recebeu o nome de succinosis.\n[…]\nÀs vezes o âmbar conserva a forma de gotas e estalactites, tal como saiu dos dutos e receptáculos de árvores feridas. Além de escorrer pela superfície, a resina pode penetrar em cavidades ou fissuras no interior das árvores, formando massas irregulares.\n[…]\nResina kauri de árvores Agathis australis, da Nova Zelândia.\n[…]\nOutras resinas epóxi.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Pterossauro",
      "descricao": "Grupo extinto de répteis voadores da Era Mesozoica, parentes próximos mas distintos dos dinossauros."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A asa dos pterossauros era uma membrana de pele esticada por um único dedo muito alongado. Qual dedo?",
    "resposta": "O quarto dedo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pterosaur"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pterosaur",
        "situacao": "ok",
        "texto": "Pterosaurs are an extinct clade of warm-blooded flying reptiles in the order Pterosauria. They existed during most of the Mesozoic: from the Late Triassic to the end of the Cretaceous (228 million to 66 million years ago). Pterosaurs are the earliest vertebrates known to have evolved powered flight. Their wings were formed by a membrane of skin, muscle, and other tissues stretching from the ankles\n[…]\nWing membranes preserved in pterosaur embryos are well developed, suggesting that pterosaurs were ready to fly soon after birth. However, tomography scans of fossilised Hamipterus eggs suggests that the young pterosaurs had well-developed thigh bones for walking, but weak chests for flight. It is unknown if this holds true for other pterosaurs.\n[…]\nPterosaurs were used in fiction in Sir Arthur Conan Doyle's 1912 novel The Lost World and its 1925 film adaptation. They appeared in a number of films and television programs since, including the 1933 film King Kong, and 1966's One Million Years B.C. In the latter, animator Ray Harryhausen had to add inaccurate bat-like wing fingers to his stop motion models in order to keep the membranes from falling apart, though this particular error was common in art even before the film was made.\n[…]\nAfter the 1960s, pterosaurs remained mostly absent from notable American film appearances until 2001's Jurassic Park III. Paleontologist Dave Hone noted that the pterosaurs in this film had not been significantly updated to reflect modern research. Errors persisting were teeth while toothless Pteranodon was intended to be depicted, nesting behavior that was known to be inaccurate by 2001, and leathery wings, rather than the taut membranes of muscle fiber required for pterosaur flight.\n[…]\nPhylogeny of pterosaurs\n[…]\nPterosaur Beach\n[…]\nPterosaur size\n[…]\nTimeline of pterosaur research\n[…]\nThe Pterosaur Database Archived 2012-07-16 at the Wayback Machine, by Paul Pursglove"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pterossauro",
        "situacao": "ok",
        "texto": "Os pterossauros constituem uma ordem extinta da classe Reptilia (ou Sauropsida), que corresponde aos Reptilia do período Mesozóico. Embora sejam seus contemporâneos, estes animais não eram dinossauros. O grupo surgiu no Triássico Superior e desapareceu na Extinção do Cretáceo-Paleogeno, há aproximadamente 66 milhões de anos.\n[…]\nO primeiro fóssil de pterossauro foi descrito em 1784 pelo naturalista italiano Cosimo Collini, que os interpretou como sendo de um animal aquático. Somente em 1809 Georges Cuvier faria a correção ao trabalho de Collini, afirmando tratar-se de um réptil voador, cuja asa era uma membrana corporal em conexão com os dedos da pata anterior, característica esta, que fez Cuvier denomina-lo pterodáctilo (do grego ptero = asas e dáctilo = dedos).\n[…]\nAs asas dos pterossauros eram constituídas por membranas dérmicas, fortalecidas por fibras, ligadas a partir do quarto dedo, que era desproporcionalmente longo. O pulso contém um osso extra, o pteróide, que ajuda a suportar esta membrana. As asas dos pterossauros terminavam nos membros posteriores, ao contrário dos morcegos atuais, onde as asas são braços modificados.\n[…]\nPicnofibras refere-se a cabelos, plumagens e tegumentos que costumavam ser chamados de tufos fossilizados. Picnofibras eram estruturas curtas e simples. O único marco interno nesses filamentos era um canal que subia pelo meio e, ao contrário dos pêlos de mamíferos, as picnofibras não eram enraizadas na pele.\n[…]\nAs relações internas dos Pterosauria estão em constante mudança, e a classificação a seguir é a união das filogenias mais recentes e bem embasadas.\n[…]\nOrdem Pterosauria (extinta)\n[…]\nFolha: Pterossauro voava bem em brisas tropicais e mal com vento forte",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Velociraptor",
      "descricao": "Gênero de pequeno dinossauro terópode dromeossaurídeo do Cretáceo Superior da Mongólia."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Bem diferente do que se vê no cinema, o velociraptor real tinha mais ou menos o tamanho de que ave?",
    "resposta": "Peru",
    "distratores": [
      "Pombo",
      "Ema",
      "Avestruz"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Velociraptor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Velociraptor",
        "situacao": "ok",
        "texto": "Velociraptor (; lit. 'swift thief') is a genus of small dromaeosaurid dinosaurs that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago (Mya). Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis, named and described in 1924. Fossils of this species have been discovered in the Djadochta Forma\n[…]\nAs of 2008, the only currently recognized species of Velociraptor are V. mongoliensis and V. osmolskae. However, several studies have found \"V.\" osmolskae to be distantly related to V. mongoliensis.\n[…]\nAlthough many isolated fossils of Velociraptor have been found in Mongolia, none were closely associated with other individuals. Therefore, while Velociraptor is commonly depicted as a pack hunter, as in Jurassic Park, there is only limited fossil evidence to support this theory for dromaeosaurids in general and none specific to Velociraptor itself.\n[…]\nNorell with colleagues in 1995 reported one V. mongoliensis skull bearing two parallel rows of small punctures on its frontal bones that, upon closer examination, match the spacing and size of Velociraptor teeth. They suggested that the wound was likely inflicted by another Velociraptor during a fight within the species. Because its bone structure shows no sign of healing near the bite wounds and the overall specimen was not scavenged, this individual was likely killed by this fatal wound.\n[…]\nKnown specimens of Velociraptor mongoliensis have been recovered from the Djadochta Formation (also spelled Djadokhta), in the Mongolian province of Ömnögovi. This geological formation is estimated to date back to the Campanian stage (between 75 million and 71 million years ago) of the Late Cretaceous epoch.\n[…]\n3D skull model of Velociraptor mongoliensis at Sketchfab\n[…]\nSkeletal reconstruction of Velociraptor mongoliensis at Dr. Scott Hartman's Skeletal Drawing"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Velociraptor",
        "situacao": "ok",
        "texto": "Velociraptor (em português, Velociraptor ou Velocirraptor), é um gênero de dinossauros terópodes que viveram aproximadamente há 84 e 85 milhões de anos, durante a última parte do período Cretáceo. Duas espécies são reconhecidas atualmente, embora outras tenham sido atribuídas no passado. A espécie-tipo é V. Mongoliensis; fósseis desta espécie foram descobertos na Mongólia. A segunda espécie, V. Os\n[…]\nNo entanto, pelo menos um espécime preservado com a cauda intacta tinha as vértebras encurvadas em uma forma de S, o que sugere que houve muito mais flexibilidade horizontal do que se pensava.\n[…]\nUm crânio de Velociratoptor mongoliensis tem duas fileiras paralelas de pequenas perfurações que correspondem ao espaçamento e tamanho dos dentes do Velociraptor. Os cientistas acreditam que é um ferimento que foi, provavelmente, causado por outro Velociraptor durante uma luta. Além disso, porque o fóssil não mostra nenhum sinal de cura perto das mordidas, a lesão provavelmente o matou.\n[…]\nVelociraptor são bem conhecidos por seu papel como assassinos cruéis e astutos, graças à sua interpretação no livro Jurassic Park de 1990 escrito por Michael Crichton e sua adaptação para o cinema de 1993, dirigido por Steven Spielberg. Os \"raptores\" retratados em Jurassic Park foram modeladas após um coelurosaurídeo, Deinonychus, que tinha sido nomeado na época pelo Gregory S. Paul como Velociraptor antirrhopus.\n[…]\nOs cineastas aumentaram consideravelmente o tamanho do Velociraptor e mudaram a forma do focinho para proporções mais características do Deinonychus. O Velociraptor da vida real, como muitos outros terópodes maniraptores, eram cobertos de penas. Como Jurassic Park e The Lost World: Jurassic Park, foram lançados antes dessa descoberta, então as criaturas, em ambos os filmes são retratados como sem penas com escalas na forma de répteis modernos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Coprólito",
      "descricao": "Fezes fossilizadas de animais, usadas para estudar a dieta de espécies extintas."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Como os paleontólogos chamam as fezes de animais que se fossilizaram?",
    "resposta": "Coprólito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coprolite"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coprolite",
        "situacao": "ok",
        "texto": "A coprolite (also known as a coprolith) is fossilized feces. Coprolites are classified as trace fossils as opposed to body fossils, as they give evidence for the animal's behaviour (in this case, diet) rather than morphology. The name derives from Ancient Greek κόπρος (kópros), meaning \"dung\", and λίθος (líthos), meaning \"stone\". They were first described by William Buckland in 1829. Before this, \n[…]\nBy examining coprolites, paleontologists are able to find information about the diet of the animal (if bones or other food remains are present), such as whether it was a herbivore or a carnivore, and the taphonomy of the coprolites, although the producer is rarely identified unambiguously, especially with more ancient examples.\n[…]\nFurther, coprolites can be analyzed for certain minerals that are known to exist in trace amounts in certain species of plant that can still be detected millions of years later. In rare cases, coprolites have even been found to contain well-preserved insect remains. There is also a documented case of a coprolite containing an ichnofossil in the form of footprints of a crocodilian, created when a crocodilian stepped on the faecal matter before it became fossilised.\n[…]\nThe recognition of coprolites is aided by their structural patterns, such as spiral or annular markings, content, undigested food fragments, and associated fossil remains. The smallest coprolites are often difficult to distinguish from inorganic pellets or from eggs. Most coprolites are composed chiefly of calcium phosphate, along with minor quantities of organic matter. By analyzing coprolites, it is possible to infer the diet of the animal which produced them.\n[…]\nCoprolites have been recorded in deposits ranging in age from the Cambrian period to recent times and are found worldwide. Some of them are useful as index fossils, such as Favreina from the Jurassic period of Haute-Savoie in France."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Copr%C3%B3lito",
        "situacao": "ok",
        "texto": "Os coprólitos (do grego antigo kopros [excremento] e líthos [pedra]) são fezes conservadas naturalmente pela dessecação ou mineralização (um tipo de processo de fossilização), geralmente provenientes de seres vivos pré-históricos, já extintos. Os coprólitos podem manter vestígios físicos ou mesmo moleculares do que compunha a dieta (e estava presente nos intestinos) dos seres vivos que os originar\n[…]\nOs coprólitos que servem de dieta. Por exemplo, restos vegetais, que trarão informações da vegetação do local naquele período geológico; restos de outros animais, no caso das formas carnívoras etc.\n[…]\nA diferenciação entre os coprólitos pode ser realizada de forma comparativa de formato ou conteúdo. Os coprólitos de forma ovóide caracterizados pela maior variação do tamanho, gretas e estruturas vegetais confirmam aspectos de afinidade com excrementos de animais herbívoros. As formas cilíndricas de peso e tamanho mais uniformes são caracterizadas pelo alto grau de compactação interna, relacionando estes excrementos como provenientes de seres carnívoros ou onívoros.\n[…]\nOs coprólitos também auxiliam na pesquisa de helmintos, protozoários, bactérias e até mesmo vírus que ocorreram no passado, pois através de sua análise direta (Microscopia) e técnicas de biologia molecular podemos detectar esses agentes e correlacioná-los com possíveis doenças da época.",
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
