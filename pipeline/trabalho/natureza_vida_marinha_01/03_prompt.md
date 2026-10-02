Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Vida Marinha** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Baleia-jubarte",
      "descricao": "Grande baleia migratória da espécie Megaptera novaeangliae."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome científico da baleia-jubarte, Megaptera, faz referência às suas enormes nadadeiras peitorais. O que ele significa?",
    "resposta": "Asas grandes",
    "distratores": [
      "Cauda larga",
      "Boca enorme",
      "Gigante cantor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Humpback_whale"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Humpback_whale",
        "situacao": "ok",
        "texto": "The humpback whale (Megaptera novaeangliae) is a species of baleen whale. It is a rorqual (a member of the family Balaenopteridae) and is the only species in the genus Megaptera. Adults range in length from 14–17 m (46–56 ft) and weigh up to 40 metric tons (44 short tons). The humpback has a distinctive body shape, with long pectoral fins and tubercles on its head. It is known for breaching and ot\n[…]\nIn 1846, John Edward Gray created the genus Megaptera, classifying the humpback as Megaptera longipinna, but in 1932, Remington Kellogg reverted the species name to use Borowski's novaeangliae. The common name is derived from the curving of the whales' backs when diving. The genus name, Megaptera, from the Ancient Greek mega- μεγα (\"giant\") and ptera πτερα (\"wing\"), refer to their large front flippers.\n[…]\nHumpback whales are rorquals, members of the family Balaenopteridae, which includes the blue, fin, Bryde's, sei, and minke whales. A 2018 genomic analysis estimated that rorquals diverged from other baleen whales in the late Miocene, between 10.5 and 7.5 million years ago. The humpback and fin whales were found to be sister taxa (see the phylogenetic tree below). There is reference to a humpback–blue whale hybrid in the South Pacific, attributed to marine biologist Michael Poole.\n[…]\nModern humpback whale populations originated in the southern hemisphere around 880,000 years ago and colonized the northern hemisphere 200,000 to 50,000 years ago. A 2014 genetic study suggested that the separate populations in the North Atlantic, North Pacific, and Southern Oceans have had limited gene flow and are distinct enough to be subspecies, with the scientific names of M. n. novaeangliae, M. n. kuzira, and M. n. australis, respectively.\n[…]\nARKive – images and movies of the humpback whale (Megaptera novaeangliae).\n[…]\nHumpback whale songs\n[…]\nHumpback Whale Mother Fights Off Males to Protect Calf | BBC Earth"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baleia-jubarte",
        "situacao": "ok",
        "texto": "A jubarte ou baleia-jubarte (nome científico: Megaptera novaeangliae), também conhecida como baleia-corcunda, baleia-cantora, baleia-corcova, baleia-de-corcova, baleia-de-bossas, baleia-preta ou baleia-xibarte é um mamífero marinho presente na maioria dos oceanos. Ela é da ordem dos cetartiodáctilos (Cetartiodactyla), subordem dos cetáceos e infraordem dos misticetos (Mysticeti). É uma das maiores\n[…]\nQuando salta, elevando seu corpo quase completamente para fora d’água, suas longas nadadeiras peitorais, que chegam a medir até 1/3 de seu comprimento total, poderiam ser comparadas às asas de um pássaro. Esta é a origem do nome Megaptera, que em grego antigo significa \"grandes asas\", enquanto novaeangliae fala do primeiro local onde foi registrada a espécie, Nova Inglaterra.\n[…]\nO nome do gênero Megaptera significa asas grandes, do grego mega-/μεγα- (grande) e pteron/πτερα (asa), referência às suas nadadeiras peitorais que se assemelham a asas. Já seu nome específico novaeangliae vem do latim novus (nova) e angliae (Inglaterra) e é uma referência geográfica de onde o espécime tipo foi descrito pela primeira vez pelo naturalista alemão Georg Heinrich Borowski em 1781. Então, seu nome científico significa \"grandes asas da Nova Inglaterra\".\n[…]\nQuando a jubarte mergulha costuma arquear a região da nadadeira dorsal, deixando corcova do dorso mais saliente. Desta característica deriva seu nome em inglês, humpback whale, ou baleia corcunda.\n[…]\nLogo após a nadadeira dorsal, inicia-se o pedúnculo caudal, uma grande e poderosa região muscular que, juntamente com a nadadeira caudal, é responsável por permitir a natação e outros comportamentos. É a batida da nadadeira caudal que permite às baleias se deslocarem. Numa baleia jubarte adulta a nadadeira caudal pode medir mais de 5 m de largura, correspondendo até um terço do tamanho total do corpo.\n[…]\nJubartes podem captar sons de até 20 000 hertz.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Baleia-jubarte",
      "descricao": "Grande baleia migratória da espécie Megaptera novaeangliae."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Todo inverno, baleias-jubarte chegam ao litoral sul da Bahia para se reproduzir. Que arquipélago da região é o seu principal berçário no Brasil?",
    "resposta": "Abrolhos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
      "https://pt.wikipedia.org/wiki/Parque_Nacional_Marinho_dos_Abrolhos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abrolhos_Archipelago",
        "situacao": "ok",
        "texto": "The Abrolhos Archipelago (Portuguese: Arquipélago de Abrolhos) are a group of 5 small islands with coral reefs off the southern coast of Bahia state in the northeast of Brazil, between 17º25’—18º09’ S and 38º33’—39º05’ W. Caravelas is the nearest town. Their name comes from the Portuguese: abrolho (\"Abre Olhos\" meaning: Open your eyes), a rock awash or submerged sandbank that is a danger to ships.\n[…]\nThese islets were surveyed by  Baron Roussin. As part of the instructions for the second survey voyage of HMS Beagle, the Admiralty noted \"the great importance of knowing the true position of the Abrolhos Banks, and the certainty that they extend much further out than the limits assigned to them by Baron Roussin\", and asked Captain Robert FitzRoy to take soundings and establish the position of the reefs.\n[…]\nKnown to the Royal Navy in the First World War as the Abrolhos Rocks, the area was used as a refuelling point (coal) during Doveton Sturdee's operations against the German cruisers of Admiral Von Spee in late 1914. This operation ended with the Battle of the Falklands and the subsequent sinking of the only survivor, SMS Dresden.\n[…]\nParcel dos Abrolhos, a large submerged reef extending from north to south east of the archipelago. Located 5 kilometres (3.1 miles) to the east of Santa Barbara Island, its limits are not well defined.\n[…]\nParcel das Paredes, located to the northwest of the archipelago and the largest feature of the wider Abrolhos.\n[…]\nThe Abrolhos Marine National Park (Portuguese: Parque Nacional Marinho dos Abrolhos) is a Marine Park located in the Abrolhos Archipelago since 1983. It is strictly forbidden to disembark on Ilha Guarita and Ilha Suest.\n[…]\nAbrolhos Isle Portal\n[…]\nAbrolhos - The South Atlantic Largest Coral Reef Complex\n[…]\nABROLHOS (en espanhol)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Nacional_Marinho_dos_Abrolhos",
        "situacao": "ok",
        "texto": "O Parque Nacional Marinho de Abrolhos é um parque nacional do Brasil que está localizado no sul do litoral do estado da Bahia, no arquipélago de Abrolhos, entre as coordenadas geográficas 17º25’ a 18º09’ S e 38º33’ a 39º05’ W. Foi o primeiro parque do Brasil a receber o título de \"Parque Nacional Marinho\", através do decreto n° 88.218, de 6 de abril de 1983. É administrado pelo Instituto Chico Men\n[…]\nO parque é de importância vital no ecossistema brasileiro, já que abriga a maior biodiversidade marinha de todo o Oceano Atlântico Sul.\n[…]\nNessa região, acontece a famosa temporada das baleias jubarte, que escolhem as águas quentes do mar baiano para reprodução e amamentação dos filhotes, e propiciam a prática do whale watching ou turismo de observação de baleias, sendo um importante destino turístico do tipo no mundo. É considerado o maior berçário reprodutivo da espécie em todo o Atlântico Sul Ocidental. Um pequeno número de baleia-franca-austral também começaram a voltar para Abrolhos depois de muitos anos de perigo.\n[…]\nRegião dos Abrolhos\n[…]\nArquipélago de Abrolhos\n[…]\nParque Nacional Marinho dos Abrolhos\n[…]\nPortal Ilhas de Abrolhos"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Cachalote",
      "descricao": "Maior baleia de dentes (Physeter macrocephalus), de cabeça grande e quadrada."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, o cachalote se chama sperm whale porque os baleeiros confundiram a substância oleosa da sua cabeça com o quê?",
    "resposta": "Esperma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sperm_whale",
      "https://en.wikipedia.org/wiki/Spermaceti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sperm_whale",
        "situacao": "ok",
        "texto": "The sperm whale or cachalot (Physeter macrocephalus) is the largest of the toothed whales and the largest toothed predator. It is the only living member of the genus Physeter and one of three extant species in the sperm whale superfamily Physeteroidea, along with the pygmy sperm whale and dwarf sperm whale of the genus Kogia.\n[…]\nThe name \"sperm whale\" is a clipping of \"spermaceti whale\". Spermaceti, originally mistakenly identified as the whales' semen, is the semi-liquid, waxy substance found within the whale's head.\n[…]\nThe sperm whale is one of the species originally described by Carl Linnaeus in his landmark 1758 10th edition of Systema Naturae. He recognised four species in the genus Physeter. Experts soon realised that just one such species exists, although there has been debate about whether this should be named P. catodon or P. macrocephalus, two of the names used by Linnaeus.\n[…]\nAlthough the fossil record is poor, several extinct genera have been assigned to the clade Physeteroidea, which includes the last common ancestor of the modern sperm whale, pygmy sperm whales, dwarf sperm whales, and extinct physeteroids. These fossils include Ferecetotherium, Idiorophus, Diaphorocetus, Aulophyseter, Orycterocetus, Scaldicetus, Placoziphius, Zygophyseter and Acrophyseter.\n[…]\nThe traditional view has been that Mysticeti (baleen whales) and Odontoceti (toothed whales) arose from more primitive whales early in the Oligocene period, and that the super-family Physeteroidea, which contains the sperm whale, dwarf sperm whale, and pygmy sperm whale, diverged from other toothed whales soon after that, over 23 million years ago.\n[…]\nThough a widely practised art in the 19th century, scrimshaw using genuine sperm whale ivory declined substantially after the retirement of the whaling fleets in the 1880s."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spermaceti",
        "situacao": "ok",
        "texto": "Spermaceti , one of the fractions of sperm oil, is a waxy substance found in the head cavities of the sperm whale (and, in smaller quantities, in the oils of other whales). Spermaceti is created in the spermaceti organ inside the whale's head. This organ may contain as much as 1,900 litres (500 US gal) of spermaceti. It has been extracted by whalers since the 17th century for human use in cosmetic\n[…]\nThe substance was also used in making candles of a standard photometric value, in the dressing of fabrics, and as a pharmaceutical excipient, especially in cerates and ointments.\n[…]\nSpermaceti is derived from Medieval Latin sperma ceti, meaning \"whale sperm\" (from Latin sperma meaning \"semen\" or \"seed\", and ceti, the genitive form of \"whale\"). The substance was initially believed to be whale semen, due to its appearance when fresh. The substance is also the origin of the name of the sperm whale.\n[…]\nCurrently, disagreement exists on what biological purpose or purposes spermaceti serves. The proportion of wax esters retained by an average (living) whale head appears to reflect buoyancy influenced by heat. Changes in density likely enhance echolocation. It might be used as a means of adjusting the whale's buoyancy, since the density of the spermaceti changes with its phase. Another hypothesis has been that it is used as a cushion to protect the sperm whale's delicate snout while diving.\n[…]\nAfter killing a sperm whale, the whalers would pull the carcass alongside the ship, cut off the head and pull it on deck. Then, they would cut a hole in it and bail out the matter inside with a bucket. The harvested matter, raw spermaceti, was stored in casks to be processed back on land. A large whale could yield as much as 500 US gallons (1,900 L; 420 imp gal). The spermaceti was boiled and strained of impurities to prevent it from going rancid.\n[…]\nWhale oil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cachalote",
        "situacao": "ok",
        "texto": "Cachalote ou cacharréu (nome científico: Physeter macrocephalus) é o maior cetáceo dentado (odontocetos) e o maior predador com dentes. É o único membro vivo do gênero Physeter e uma das três espécies existentes na superfamília Physeteroidea, juntamente com o cachalote-pigmeu e o cachalote-anão do Kogia. É um mamífero pelágico com distribuição mundial e migra sazonalmente para alimentação e reprod\n[…]\nO espermacete (óleo de esperma), do qual deriva seu nome, era um dos principais alvos da indústria baleeira e era procurado para uso em lamparinas, lubrificantes e velas. Âmbar cinza, um resíduo ceroso sólido às vezes presente em seu sistema digestivo, ainda é muito valorizado como fixador em perfumes, entre outros usos. Garimpeiros procuram âmbar cinza como destroços. A caça de cachalotes era uma grande indústria no século XIX, retratada no romance Moby-Dick.\n[…]\nOs anglófonos geralmente a chamam de sperm whale, apócope de spermaceti whale (\"baleia de espermacete), sendo o espermacete uma substância semilíquida e cerosa encontrada no órgão homônimo que ocupa um grande volume na cabeça do animal e serve como lastro durante os mergulhos. Spermaceti significa \"esperma de baleia\" em latim, a substância esbranquiçada tendo sido inicialmente confundida com fluido seminal.\n[…]\nA velocidade do som no espermacete é de 2 684 m/s (a 40 kHz, 36 °C), tornando-o quase duas vezes mais rápido que no óleo do melão de um golfinho.\n[…]\nO espermacete, obtido principalmente do órgão do espermacete, e o óleo de esperma, obtido principalmente da gordura do corpo, eram muito procurados pelos baleeiros dos séculos XVIII, XIX e XX. Essas substâncias encontraram uma variedade de aplicações comerciais, como velas, sabonetes, cosméticos, óleo de máquina, outros lubrificantes especializados, óleo de lâmpada, lápis, giz de cera, impermeabilização de couro, materiais à prova de ferrugem e muitos compostos farmacêuticos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Cachalote",
      "descricao": "Maior baleia de dentes (Physeter macrocephalus), de cabeça grande e quadrada."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1820, um cachalote afundou o navio baleeiro Essex no Oceano Pacífico. Que romance americano foi inspirado nesse naufrágio?",
    "resposta": "Moby Dick",
    "fonte": [
      "https://en.wikipedia.org/wiki/Essex_(whaleship)",
      "https://en.wikipedia.org/wiki/Moby-Dick"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Essex_(whaleship)",
        "situacao": "ok",
        "texto": "Essex was an American whaling ship from Nantucket, Massachusetts, which was launched in 1799. On November 20, 1820, while at sea in the southern Pacific Ocean under the command of Captain George Pollard Jr., the ship was attacked and sunk by a sperm whale. About 2,000 nautical miles (3,700 km) from the coast of South America, the 20-man crew was forced to make for land in three whaleboats with wha\n[…]\nFirst mate Owen Chase and cabin boy Thomas Nickerson later wrote accounts of the ordeal. The tragedy attracted international attention, and inspired Herman Melville to write his 1851 novel, Moby-Dick.\n[…]\nAt the Cape Verde Islands the crew were able to purchase a whaleboat. Later, as Essex sailed down the east coast of South America, three months into the voyage, the first whale was killed.\n[…]\nAt eight in the morning of November 20, 1820, the lookout sighted spouts, and the three remaining whaleboats set out to pursue a pod of sperm whales. On the leeward side of Essex, Chase's whaleboat harpooned a whale, but its tail struck the boat and opened up a seam, forcing the crew to cut the harpoon line and return to Essex for repairs. Two miles away off the windward side, Pollard's and Joy's boats each harpooned a whale and were dragged away from Essex.\n[…]\nChase returned to Nantucket on June 11, 1821, to find he had a 14-month-old daughter he had never met. Four months later he had completed an account of the disaster, the Narrative of the Most Extraordinary and Distressing Shipwreck of the Whale-Ship Essex; Herman Melville used it as one of the inspirations for his 1851 novel Moby-Dick. Chase then sailed as first mate on the whaleship Florida, returning to Nantucket in 1823.\n[…]\nAs well as inspiring much of American author Herman Melville's classic 1851 novel Moby-Dick, the story of the Essex tragedy has been dramatized in film, television, music, and poetry:\n[…]\nWorks about the Essex at Open Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Moby-Dick",
        "situacao": "ok",
        "texto": "Moby-Dick; or, The Whale is an 1851 epic novel by American writer Herman Melville. The book centers on the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.\n[…]\nMelville began writing Moby-Dick in February 1850 and finished 18 months later, a year after he had anticipated. Melville drew on his experience as a common sailor from 1841 to 1844, including on whalers, and on wide reading in whaling literature. The white whale is modeled on a notoriously hard-to-catch albino whale Mocha Dick, and the book's ending is based on the sinking of the whaleship Essex in 1820.\n[…]\nThe earliest American review, in the Boston Post for November 20, quoted the London Athenaeum's scornful review, not realizing that some of the criticism of The Whale did not pertain to Moby-Dick. This last point, and the authority and influence of British criticism in American reviewing, is clear from the review's opening: \"We have read nearly one half of this book, and are satisfied that the London Athenaeum is right in calling it 'an ill-compounded mixture of romance and matter-of-fact'\".\n[…]\nBritish explorer Tim Severin wrote in his 1999 book In Search of Moby Dick: Quest for the White Whale about traveling throughout the Pacific, inquiring among indigenous fishermen and watermen about white whales, in personal experience or local folklore. American songwriter Bob Dylan's Nobel Prize Acceptance Speech of 2017 cited Moby-Dick as one of the three books that influenced him most.\n[…]\nMoby-Dick at Project Gutenberg\n[…]\nPower Moby Dick\n[…]\nAmerican Icons: Moby-Dick, a Peabody Award–winning episode of Studio 360 that examines the influence of Moby-Dick on contemporary American culture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Essex_%28baleeiro%29",
        "situacao": "ok",
        "texto": "Essex era um baleeiro americano de Nantucket , Massachusetts , lançado em 1799. Em 1820, enquanto no mar, sob o comando do capitão George Pollard Jr. , um cachalote atacou e afundou-a no sul do Oceano Pacífico. Encalhada a milhares de quilômetros da costa da América do Sul, com pouca comida e água, a tripulação de 20 homens foi forçada a navegar até a costa nas baleeiras sobreviventes do navio.\n[…]\nA história deste naufrágio foi contada por Nathaniel Philbrick no livro No Coração do Mar na única visão e versão do ser humano e também serviu de inspiração para que Herman Melville escrevesse a famosa obra Moby Dick.\n[…]\nMoby Dick\n[…]\nChase, Owen (1965). Iola Haverstick; Betty Shepard, eds. The Wreck of the Whaleship Essex. New York: Harcourt, Brace & World, Inc. p. 124.\n[…]\nPhilbrick, Nathaniel (2001). In the Heart of the Sea: The Tragedy of the Whaleship Essex. New York: Penguin Books. ISBN 0-14-100182-8. OCLC 46949818.\n[…]\nChase, Owen (1821). Narrative of the Most Extraordinary and Distressing Shipwreck of the Whale-Ship Essex. New York: WB Gilley. OCLC 12217894.\n[…]\nKarp, Walter (April 1983). \"The Essex Disaster\". American Heritage. 34: 3.\n[…]\nNickerson, Thomas (1984) [1876]. The Loss of the Ship Essex Sunk by a Whale and the Ordeal of the Crew in Open Boats. Nantucket: Nantucket Historical Society. OCLC 11613950.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Água-viva",
      "descricao": "Forma nadadora, em geral gelatinosa e em forma de sino, de diversos cnidários marinhos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A fase nadadora das águas-vivas leva o nome de uma górgona da mitologia grega, que tinha serpentes no lugar dos cabelos. Que nome é esse?",
    "resposta": "Medusa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jellyfish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jellyfish",
        "situacao": "ok",
        "texto": "Jellyfish, also known as sea jellies or simply jellies, are the medusa-phase of certain gelatinous members of the subphylum Medusozoa, which is a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals, although a few are anchored to the seabed by stalks rather than being motile. They are made of an umbrella-shaped main body made of mesoglea, known as the bell, and a c\n[…]\nBox jellyfish possess \"proper eyes\" (similar to vertebrates) that allow them to inhabit environments that lesser derived medusae cannot. In fact, they are considered the only class in the clade Medusozoa that have behaviors necessitating spatial resolution and genuine vision. However, the lens in their eyes are more functionally similar to cup-eyes exhibited in low-resolution organisms, and have very little to no focusing capability.\n[…]\nJellyfish have a complex life cycle which includes both sexual and asexual phases, with the medusa being the sexual stage in most instances. Sperm fertilize eggs, which develop into larval planulae, become polyps, bud into ephyrae and then transform into adult medusae. In some species certain stages may be skipped.\n[…]\nIn a process known as strobilation, the polyp's tentacles are reabsorbed and the body starts to narrow, forming transverse constrictions, in several places near the upper extremity of the polyp. These deepen as the constriction sites migrate down the body, and separate segments known as ephyra detach. These are free-swimming precursors of the adult medusa stage, which is the life stage that is typically identified as a jellyfish.\n[…]\nLittle is known of the life histories of many jellyfish as the places on the seabed where the benthic forms of those species live have not been found. However, an asexually reproducing strobila form can sometimes live for several years, producing new medusae (ephyra larvae) each year.\n[…]\nJellyfish dermatitis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81gua-viva_%28animal%29",
        "situacao": "ok",
        "texto": "As águas-vivas, também conhecidas como medusas ou mães d'água, são a fase de medusa de certos membros gelatinosos do subfilo Medusozoa, que é uma parte importante do filo Cnidaria. As águas-vivas são principalmente animais marinhos de natação livre, embora algumas sejam ancoradas ao fundo do mar por pedúnculos, em vez de serem móveis.\n[…]\nO termo água-viva corresponde amplamente às medusas, ou seja, uma fase do ciclo de vida do grupo Medusozoa. A bióloga evolucionista americana Paulyn Cartwright oferece a seguinte definição geral:\n[…]\nAs águas-vivas possuem um ciclo de vida complexo que inclui fases sexuadas e assexuadas, sendo a medusa a fase sexual na maioria dos casos. Os espermatozoides fertilizam os ovos, que se desenvolvem em larvas plânulares, tornam-se pólipos, brotam em efiras e, em seguida, transformam-se em medusas adultas. Em algumas espécies, certos estágios podem ser pulados.\n[…]\nEm um processo conhecido como estrobilização, os tentáculos do pólipo são reabsorvidos e o corpo começa a se estreitar, formando constrições transversais em vários lugares próximos à extremidade superior do pólipo. Essas constrições se aprofundam à medida que os locais de constrição migram pelo corpo, e segmentos separados conhecidos como efiras se soltam. Estes são precursores nadadores livres do estágio de medusa adulta, que é a fase de vida tipicamente identificada como uma água-viva.\n[…]\nUsando a medusa-da-lua (A. aurita) como exemplo, as águas-vivas demonstraram ser os nadadores mais eficientes em termos energéticos entre todos os animais. Elas se movem pela água expandindo e contraindo radialmente seus corpos em forma de sino para empurrar a água para trás. Elas pausam entre as fases de contração e expansão para criar dois anéis de vórtice.\n[…]\nExposição de Águas-vivas no Aquário Nacional, Baltimore, Maryland (EUA) – Galeria de Fotos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Polvo",
      "descricao": "Molusco cefalópode marinho de oito braços e corpo mole, do gênero Octopus e afins."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Octopus, o nome do gênero do polvo, vem do grego e descreve o animal pela sua anatomia. O que essa palavra quer dizer?",
    "resposta": "Oito pés",
    "fonte": [
      "https://en.wikipedia.org/wiki/Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Octopus",
        "situacao": "ok",
        "texto": "An octopus (pl.: octopuses or octopodes) is a soft-bodied, eight-limbed mollusc of the order Octopoda (, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beaked mouth at the centre point of the eight limbs. An octopus can radically\n[…]\nMany novel genes in both cephalopods generally and octopus specifically manifest in the animals' skin, suckers, and nervous system.\n[…]\nAnimal welfare groups have objected to the live consumption of octopuses on the basis that they can experience pain.\n[…]\nIn classical Greece, Aristotle (384–322 BC) commented on their colour-changing abilities, both for camouflage and for signalling, in his Historia animalium: \"The octopus ... seeks its prey by so changing its colour as to render it like the colour of the stones adjacent to it; it does so also when alarmed.\" Aristotle noted that the octopus had a hectocotyl arm and suggested it might be used in reproduction. This claim was widely ignored until the 19th century.\n[…]\nDue to their intelligence, many argue that octopuses should be given protections when used for experiments. In the UK from 1993 to 2012, the common octopus (Octopus vulgaris) was the only invertebrate protected under the Animals (Scientific Procedures) Act 1986. In 2012, this legislation was extended to include all cephalopods in accordance with a general EU directive.\n[…]\nSome robotics research is exploring biomimicry of octopus features. Octopus arms can move and sense largely autonomously without intervention from the animal's central nervous system. In 2015 a team in Italy built soft-bodied robots able to crawl and swim, requiring only minimal computation. In 2017, a German company made an arm with a soft pneumatically controlled silicone gripper fitted with two rows of suckers."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polvo",
        "situacao": "ok",
        "texto": "Os polvos são moluscos marinhos da classe Cephalopoda, da ordem Octopoda (oito pés), possuindo oito braços fortes e com ventosas dispostos à volta da boca. Como o resto dos cefalópodes, o polvo tem um corpo mole, sem esqueleto interno (ao contrário das lulas) nem externo, como o argonauta. Como meios de defesa, o polvo possui a capacidade de largar tinta, de mudar a sua cor (camuflagem, através do\n[…]\nOs polvos possuem oito braços, ao contrário das lulas e sépias, que, além dos oito braços, possuem dois tentáculos. O hectocótilo que atua na hora da reprodução é um braço modificado. Dado que os seus membros são usados na locomoção, também se pode referir aos polvos como octópodes.\n[…]\n\"Polvo\" se originou do termo grego pól'ypous (\"de muitos pés\"), através do termo latino polypu.\n[…]\nAcontece que um curioso polvo de duas pintas tinha desmontado a válvula de reciclagem de água e o cano, dirigido para fora do tanque, fez a água escoar durante 10 horas. Uma outra característica única dos moluscos é que, neles, duas áreas do cérebro se especializaram no armazenamento de memórias. Não é só o fato de terem cérebro maior e condensado, mas eles se destacam também por ter áreas no cérebro dedicadas à aprendizagem.\n[…]\nEm 2021 foi realizado um estudo que indicava que os polvos podem sentir dor psicológica de forma semelhante aos mamíferos, sendo a primeira prova desse comportamento em um animal invertebrado.\n[…]\nO polvo é em quantidade a quarta espécie mais pescada e desembarcada em Portugal. No triénio 2007 a 2009, as estimativas apontam para 9 950 toneladas por ano, em média, de desembarques. Se fizermos a análise por valor total pescado, é, ao lado da sardinha, uma das duas espécies com maior valor econômico, sendo mesmo a maior em 2008.\n[…]\nPaul, o polvo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Polvo",
      "descricao": "Molusco cefalópode marinho de oito braços e corpo mole, do gênero Octopus e afins."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "O polvo tem um sistema circulatório bem diferente do nosso. Quantos corações ele tem?",
    "resposta": "Três",
    "fonte": [
      "https://en.wikipedia.org/wiki/Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Octopus",
        "situacao": "ok",
        "texto": "An octopus (pl.: octopuses or octopodes) is a soft-bodied, eight-limbed mollusc of the order Octopoda (, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beaked mouth at the centre point of the eight limbs. An octopus can radically\n[…]\nThe interior surfaces of the arms are covered with circular, adhesive suckers. The suckers allow the octopus to secure itself in place or to handle objects. Each sucker is typically circular and bowl-like and has two distinct parts: an outer disc-shaped infundibulum and an inner cup-like acetabulum, both of which are thick muscles covered in connective tissue. A chitinous cuticle lines the outer surface.\n[…]\nOctopuses have a closed circulatory system, in which the blood remains inside blood vessels. They have three hearts; a systemic or main heart that circulates blood around the body and two branchial or gill hearts that pump it through the two gills. The systemic heart becomes inactive when the animal is swimming. Thus, the octopus loses energy quickly and mostly crawls. Octopus blood contains the copper-rich protein haemocyanin to transport oxygen.\n[…]\nSome robotics research is exploring biomimicry of octopus features. Octopus arms can move and sense largely autonomously without intervention from the animal's central nervous system. In 2015 a team in Italy built soft-bodied robots able to crawl and swim, requiring only minimal computation. In 2017, a German company made an arm with a soft pneumatically controlled silicone gripper fitted with two rows of suckers.\n[…]\nMy Octopus Teacher – 2020 documentary film by Pippa Ehrlich and James Reed\n[…]\nOctopuses – Overview at the Encyclopedia of Life\n[…]\n\"Can We Really Be Friends with an Octopus?\" at Hakai Magazine, 11 January 2022"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Polvo",
        "situacao": "ok",
        "texto": "Os polvos são moluscos marinhos da classe Cephalopoda, da ordem Octopoda (oito pés), possuindo oito braços fortes e com ventosas dispostos à volta da boca. Como o resto dos cefalópodes, o polvo tem um corpo mole, sem esqueleto interno (ao contrário das lulas) nem externo, como o argonauta. Como meios de defesa, o polvo possui a capacidade de largar tinta, de mudar a sua cor (camuflagem, através do\n[…]\nPrincipalmente conhecidos pela capacidade de liberar uma tinta quando em fuga, os polvos possuem três mecanismos típicos de defesa: glândulas de tinta, camuflagem e autotomia dos braços.\n[…]\nA camuflagem dos polvos é obtida através de algumas células especializadas de sua pele, podendo alterar a cor aparente e a opacidade de sua epiderme. Cromatóforos contêm pigmentos de cores como amarelo, laranja, vermelho, marrom e preto; a maioria das espécies possui três desses pigmentos embora algumas espécies tenham dois ou quatro. Outra característica de mudança de cor é obtida através de alteração da refletividade de células iridoforas e leucoforas (branca).\n[…]\nQuando aceite pela fêmea, os espermatozoides do polvo alojados no hectocótilo vão em direção ao útero da fêmea. Dependendo da espécie, a fêmea deposita os ovos fecundados num \"ninho\" em fileiras ou isoladamente  que podem atingir até 200 000 ovos. Durante a maturação dos ovos, a fêmea cuida deles, evitando que algas e outros organismos os ataquem. Ela também facilita a circulação de correntes de água a fim de que os óvulos recebam oxigenação suficiente.\n[…]\nO polvo é em quantidade a quarta espécie mais pescada e desembarcada em Portugal. No triénio 2007 a 2009, as estimativas apontam para 9 950 toneladas por ano, em média, de desembarques. Se fizermos a análise por valor total pescado, é, ao lado da sardinha, uma das duas espécies com maior valor econômico, sendo mesmo a maior em 2008.\n[…]\nPaul, o polvo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Hemocianina",
      "descricao": "Proteína que transporta oxigênio no sangue de moluscos e artrópodes, dando-lhe cor azulada."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O sangue do polvo é azulado porque a proteína que transporta oxigênio nele usa que metal no lugar do ferro?",
    "resposta": "Cobre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hemocyanin",
      "https://en.wikipedia.org/wiki/Octopus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hemocyanin",
        "situacao": "ok",
        "texto": "Hemocyanins (also spelled haemocyanins and abbreviated Hc) are  proteins that transport oxygen throughout the bodies of some invertebrate animals. These metalloproteins contain two copper atoms that reversibly bind a single oxygen molecule (O2). They are second only to hemoglobin in frequency of use as an oxygen transport molecule. Unlike the hemoglobin in red blood cells found in vertebrates, hem\n[…]\nMost hemocyanins bind with oxygen non-cooperatively and are roughly one-fourth as efficient as hemoglobin at transporting oxygen per amount of blood. Hemoglobin binds oxygen cooperatively due to steric conformation changes in the protein complex, which increases hemoglobin's affinity for oxygen when partially oxygenated. In some hemocyanins of horseshoe crabs and some other species of arthropods, cooperative binding is observed, with Hill coefficients of 1.6–3.0.\n[…]\nHemocyanin is homologous to the phenol oxidases (e.g. tyrosinase) since both proteins have histidine residues, called \"type 3\" copper-binding coordination centers, as do the enzymes tyrosinase and catechol oxidase. In both cases inactive precursors to the enzymes (also called zymogens or proenzymes) must be activated first. This is done by removing the amino acid that blocks the entrance channel to the active site when the proenzyme is not active.\n[…]\nA 2003 study of the effect of culture conditions of blood metabolites and hemocyanin of the white shrimp Litopenaeus vannamei found that the levels of hemocyanin, oxyhemocyanin in particular, are affected by the diet. The study compared oxyhemocyanin levels in the blood of white shrimp housed in an indoor pond with a commercial diet with that of white shrimp housed in an outdoor pond with a more readily available protein source (natural live food) as well.\n[…]\nOverview of all the structural information available in the PDB for UniProt: P04253 (Hemocyanin II) at the PDBe-KB."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Octopus",
        "situacao": "ok",
        "texto": "An octopus (pl.: octopuses or octopodes) is a soft-bodied, eight-limbed mollusc of the order Octopoda (, ok-TOP-ə-də). The order consists of some 300 species and is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, an octopus is bilaterally symmetric with two eyes and a beaked mouth at the centre point of the eight limbs. An octopus can radically\n[…]\nOctopuses have a closed circulatory system, in which the blood remains inside blood vessels. They have three hearts; a systemic or main heart that circulates blood around the body and two branchial or gill hearts that pump it through the two gills. The systemic heart becomes inactive when the animal is swimming. Thus, the octopus loses energy quickly and mostly crawls. Octopus blood contains the copper-rich protein haemocyanin to transport oxygen.\n[…]\nThis makes the blood viscous and it requires great pressure to pump it around the body; blood pressures can surpass 75 mmHg (10 kPa). In cold conditions with low oxygen levels, haemocyanin transports oxygen more efficiently than haemoglobin. The haemocyanin is dissolved in the blood plasma instead of carried within blood cells and gives the blood a bluish colour.\n[…]\nAn alternative hypothesis is that cephalopod eyes in species that only have a single photoreceptor protein may use chromatic aberration to turn monochromatic vision into colour vision, though this lowers image quality. This would explain pupils shaped like the letter \"U\", the letter \"W\", or a dumbbell, as well as the need for colourful mating displays.\n[…]\nIt was able to grasp objects such as a metal tube, a magazine, or a ball, and to fill a glass by pouring water from a bottle."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hemocianina",
        "situacao": "ok",
        "texto": "Em zoologia, chama-se hemocianina as proteínas do sangue de muitos artrópodes (aracnídeos), (crustáceos), e Moluscos que servem para as trocas gasosas na respiração. O sangue com este pigmento é normalmente denominado hemolinfa. Uma das diferenças da hemoglobina dos vertebrados para a hemocianina é o fato de esta ser um pigmento azulado, pois em vez de ferro, possui cobre em seu princípio ativo, e\n[…]\nA presença de cobre em moluscos foi descoberta em 1833 por Bartolomeu Bizio, um químico de Veneza, que ficou surpreso ao encontrar cobre no lugar de ferro no sangue de gastrópodes marinhos da família Muricidae enquanto estudava um pigmento roxo Púrpura tíria que havia isolado desses animais, apesar de muitos terem ficado céticos dessa afirmação, já que o cobre era conhecido por ser tóxico à vários seres vivos.\n[…]\nQuando em 1847 Emil Harless testou e verificou a presença de cobre e nenhum ferro nos sangues e figados de diversos moluscos.\n[…]\nEm 1867 Paul Bert, percebeu que o sangue do choco (Cefalópode) ficava azul quando oxigenado e incolor quando não, posteriormente em 1878 Léon Fredericq ao isolar o pigmento azulado do sangue do polvo-comum identificou que se tratava de uma proteína que leva o oxygênio para os tecidos.\n[…]\nApesar da semelhança de sua função com a hemoglobina, existem várias distinções a entre a hemocianina e a hemoglobina e ainda entre a hemocianina de artópodes e a hemocianina de [molusco]]s, enquanto as hemoglobinas carregam átomos de ferro nos seus anéis proteicos (hemo) a hemocianina carrega átomos de cobre em cofatores coordenados por residuos de histidina.\n[…]\nHá muito tempo se sabe que a hemocianina produzida por artrópodes é estruturalmente muito distinta daquela produzida por moluscos, sugerindo se tratar de um caso de evolução convergente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Narval",
      "descricao": "Cetáceo do Ártico (Monodon monoceros) cujo macho tem uma longa presa em espiral."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome narval vem do nórdico antigo e alude à pele acinzentada e manchada do animal. Com o que esse nome o compara?",
    "resposta": "Cadáver",
    "distratores": [
      "Fantasma",
      "Pedra",
      "Unicórnio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Narwhal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Narwhal",
        "situacao": "ok",
        "texto": "The narwhal (Monodon monoceros) is a species of toothed whale native to the Arctic. It is the only member of the genus Monodon and one of two living representatives of the family Monodontidae. The narwhal is a stocky cetacean with a relatively blunt snout, a large melon, and a shallow ridge in place of a dorsal fin.\n[…]\nThe narwhal's geographic range overlaps with that of the similarly built and closely related beluga whale, and the animals are known to interbreed.\n[…]\nThe narwhal was scientifically described by Carl Linnaeus in his 1758 publication Systema Naturae. The word \"narwhal\" comes from the Old Norse nárhval, meaning 'corpse-whale', which possibly refers to the animal's grey, mottled skin and its habit of remaining motionless when at the water's surface, a behaviour known as \"logging\" that usually happens in the summer. The scientific name, Monodon monoceros, is derived from Ancient Greek, meaning 'single-tooth single-horn'.\n[…]\nIn Europe, narwhal tusks were highly sought after for centuries. This stems from a medieval belief that narwhal tusks were the horns of the legendary unicorn. Considered to have magical properties, narwhal tusks were used to counter poisoning, and all sorts of diseases such as measles and rubella. The rise of modern science towards the end of the 17th century led to a decreased belief in magic and alchemy.\n[…]\nAfter the unicorn notion was scientifically refuted, narwhal tusks were rarely employed for magical purposes.\n[…]\nVikings and Greenland Norse likely began the trade of narwhal tusks, which, via European channels, would later reach markets in the Middle East and East Asia. It is unclear if they hunted the narwhals themselves or mainly recovered the tusks from the corpses of animals killed by orcas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Narval",
        "situacao": "ok",
        "texto": "O narval ou unicórnio-do-mar é um cetáceo odontoceto de tamanho médio e o animal com os maiores caninos. Vive durante todo o ano no Ártico. É uma das duas espécies vivas de baleias da família Monodontidae, juntamente com a beluga e o Golfinho-do-irauádi. Os narvais machos são distinguidos por uma presa helicoidal longa e reta que, na verdade, é um canino superior esquerdo alongado. Vale ressaltar \n[…]\nO narval foi uma das muitas espécies originalmente descritas por Linnaeus na obra Systema Naturae. O nome deriva da palavra nórdica antiga nár, que significa \"cadáver\", em referência à  pigmentação acinzentada do animal, em alusão à cor de um marinheiro afogado, e ao seu hábito em época de verão de postura inerte ou perto da superfície do mar (chamada \"corte\").\n[…]\nO nome científico do narval, Monodon monoceros deriva grego: \"um-dente / um-chifre\" ou \"unicórnio dentado\".\n[…]\nAs fêmeas podem produzir uma segunda presa, mas só há um único caso registrado de uma fêmea com presas duplas. A presa está conectada ao resto do corpo por meio do sangue, então cada nova camada de crescimento registra aspectos da fisiologia animal durante o ano em que foi formada. Assim, é possível determinar a idade de um narval baseado na espessura de sua presa.\n[…]\nQuase todas as partes do narval, incluindo a carne, pele, gordura e órgãos são consumidos. O mattak, nome dado à pele crua e gordurosa, é considerado uma iguaria e os ossos do narval são usados ​​para fabricar ferramentas e peças de arte. A pele é uma importante fonte de vitamina C, que é difícil de se obter nos climas gelados do ártico. Nalguns locais da Groenlândia, como em Qaanaaq, são utilizados métodos tradicionais de caça e as baleias são copejadas a partir de  caiaques artesanais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Narval",
      "descricao": "Cetáceo do Ártico (Monodon monoceros) cujo macho tem uma longa presa em espiral."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A longa presa em espiral que sai da cabeça do narval macho é, na verdade, que parte do corpo?",
    "resposta": "Um dente",
    "fonte": [
      "https://en.wikipedia.org/wiki/Narwhal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Narwhal",
        "situacao": "ok",
        "texto": "The narwhal (Monodon monoceros) is a species of toothed whale native to the Arctic. It is the only member of the genus Monodon and one of two living representatives of the family Monodontidae. The narwhal is a stocky cetacean with a relatively blunt snout, a large melon, and a shallow ridge in place of a dorsal fin.\n[…]\nThe narwhal was scientifically described by Carl Linnaeus in his 1758 publication Systema Naturae. The word \"narwhal\" comes from the Old Norse nárhval, meaning 'corpse-whale', which possibly refers to the animal's grey, mottled skin and its habit of remaining motionless when at the water's surface, a behaviour known as \"logging\" that usually happens in the summer. The scientific name, Monodon monoceros, is derived from Ancient Greek, meaning 'single-tooth single-horn'.\n[…]\nThe following phylogenetic tree is based on a 2019 study of the family Monodontidae.\n[…]\nNarwhals have coexisted alongside circumpolar peoples for millennia. Their long, distinctive tusks were often held with fascination throughout human history. These tusks were prized for their supposed healing powers, and were worn on staffs and thrones. Depictions of narwhal tusks in works of art such as The Lady and the Unicorn have found a prevalent place in human arts.\n[…]\nIn Europe, narwhal tusks were highly sought after for centuries. This stems from a medieval belief that narwhal tusks were the horns of the legendary unicorn. Considered to have magical properties, narwhal tusks were used to counter poisoning, and all sorts of diseases such as measles and rubella. The rise of modern science towards the end of the 17th century led to a decreased belief in magic and alchemy.\n[…]\nAfter the unicorn notion was scientifically refuted, narwhal tusks were rarely employed for magical purposes."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Narval",
        "situacao": "ok",
        "texto": "O narval ou unicórnio-do-mar é um cetáceo odontoceto de tamanho médio e o animal com os maiores caninos. Vive durante todo o ano no Ártico. É uma das duas espécies vivas de baleias da família Monodontidae, juntamente com a beluga e o Golfinho-do-irauádi. Os narvais machos são distinguidos por uma presa helicoidal longa e reta que, na verdade, é um canino superior esquerdo alongado. Vale ressaltar \n[…]\nO nome científico do narval, Monodon monoceros deriva grego: \"um-dente / um-chifre\" ou \"unicórnio dentado\".\n[…]\nA característica mais notável do narval macho é sua única presa extremamente longa, um dente canino que se projeta a partir do lado esquerdo da mandíbula superior, por meio do lábio e forma uma hélice com a pata esquerda. A presa cresce ao longo da vida atingindo comprimentos de 1,5 a 3,1 m. Apesar de sua aparência formidável, a presa é oca e pesa apenas cerca de 10 kg.\n[…]\nAs fêmeas podem produzir uma segunda presa, mas só há um único caso registrado de uma fêmea com presas duplas. A presa está conectada ao resto do corpo por meio do sangue, então cada nova camada de crescimento registra aspectos da fisiologia animal durante o ano em que foi formada. Assim, é possível determinar a idade de um narval baseado na espessura de sua presa.\n[…]\nAlguns têm um segundo pequeno dente, na boca, mas são essencialmente desdentados. A presa é um órgão sensorial altamente inervado, o que foi asseverado por cientistas nos princípios do século XXI, depois de muitos séculos de mito e ficção, em que se lhe eram atribuídos os mais variados papéis, que alternavam de varinha mágica a armamento.\n[…]\nExiste pelo menos um exemplo conhecido do uso da presa contra outra espécie: a ponta quebrada da presa de um narval foi encontrada enterrada no melão de uma beluga, indicando que houve um encontro agressivo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Peixe-boi-marinho",
      "descricao": "Grande mamífero aquático herbívoro (Trichechus manatus) das costas quentes das Américas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A ordem que reúne peixes-bois e dugongos tem o nome de que seres mitológicos, ligados a esses animais por relatos de antigos marinheiros?",
    "resposta": "Sereias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sirenia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sirenia",
        "situacao": "ok",
        "texto": "The Sirenia ( sy-REE-nee-ə), commonly referred to as sea cows or sirenians, are an order of fully aquatic, herbivorous mammals that inhabit swamps, rivers, estuaries, marine wetlands, and coastal marine waters. The extant Sirenia comprise two distinct families:\n[…]\nThe last of the sirenian families to appear, Trichechidae, apparently arose from early dugongids in the late Eocene or early Oligocene. In 1994, the family was expanded to include not only the subfamily Trichechinae (Potamosiren, Ribodon, and Trichechus), but also Miosireninae (Anomotherium and Miosiren). The African manatee and the West Indian manatee are more closely related to each other than to the Amazonian manatee.\n[…]\nThe manatee uses its large upper perioral bristles to carry out a grasping motion: it performs a flare that tightens the muscular hydrostat while the large upper bristles get pushed out and the lower jaw drops and sweeps the vegetation in by closing. The primary bristles used for vegetation ingestion are the U2 and L1 fields. Dugongs and trichechids differ in how they use the U1 and U2 bristle fields during feeding.\n[…]\nDugongs use a medial-to-lateral motion for U2 bristles, while trichechids use a prehensile, lateral-to-medial grasping motion. These divergent feeding behaviors allow dugongs to exploit benthic foraging, including rhizome consumption, more effectively than trichechids.\n[…]\nThe three extant manatee species (family Trichechidae) and the dugong (family Dugongidae) are rated as Vulnerable on the IUCN Red List of Threatened Species. All four are vulnerable to extinction from habitat loss and other negative impacts related to human population growth and coastal development. Steller's sea cow, extinct since 1768, was hunted to extinction by humans."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sirenia",
        "situacao": "ok",
        "texto": "Em zoologia, os sirénios, sirênios, ou sirenídeos (latim científico Sirenia) pertencem a uma ordem de mamíferos marinhos herbívoros, de que fazem parte o dungongo e os manatins, por vezes apelidados de peixe-boi ou vaca-marinha.\n[…]\nQuando os europeus, na época das Grandes Navegações, vindos das regiões do Novo Mundo, trouxeram relatos das lendárias sereias, informaram que estas estariam próximas aos navios \"pastando\".\n[…]\nNão eram obviamente sereias, mas sim peixes-boi próximos as embarcações, e que foram confundidos com sereias: pela parte dos sirênios, é comum que algas cresçam em suas costas, aspecto que, a meia luz, assemelham-se a cabelos compridos, constituindo a teoria de uma possível comparação feita pelos navegadores dentre os peixe-boi aos humanos. Em conclusão, os mesmos apareceram descritos como tais nos livros de zoologia dos séculos XVI e XVII. O nome sirênios é relativo a sereias.\n[…]\nAo lado, um retrato de John William Waterhouse de uma sereia, de 1900, inspirado pelos relatos dos navegadores sobre as lendas de uma mulher metade-homem, metade-peixe.\n[…]\n†Hydrodamalis gigas (Zimmermann, 1780) - Dugongo-de-steller\n[…]\nSubfamília Dugonginae Simpson, 1932\n[…]\nGênero Dugong Lacépède, 1799\n[…]\nDugong dugon (Illiger, 1811) - Dugongo\n[…]\nFamília Trichechidae Gill, 1872\n[…]\nSubfamília Trichechinae (Gill, 1872)\n[…]\nGênero Trichechus Linnaeus, 1758 - peixe-boi\n[…]\nTrichechus inunguis (Natterer, 1883) - peixe-boi-da-Amazônia\n[…]\nTrichechus manatus Linnaeus, 1758 - peixe-boi-marinho\n[…]\nTrichechus senegalensis Link, 1795 - peixe-boi-africano\n[…]\n†Trichechus giganteus (DeKay, 1842)\n[…]\n†Trichechus dugung Erxleben, 1777\n[…]\nhttp://faunanews.com.br/2020/06/05/nem-peixe-nem-boi-uma-sereia/\n[…]\nhttps://ilhadoconhecimento.com.br/de-sereias-a-elefantes-aquaticos-quem-sao-os-sirenios/}}",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Peixe-boi-marinho",
      "descricao": "Grande mamífero aquático herbívoro (Trichechus manatus) das costas quentes das Américas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar do nome, o peixe-boi não é parente do boi. Que grandes mamíferos terrestres estão entre os seus parentes vivos mais próximos?",
    "resposta": "Elefantes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sirenia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sirenia",
        "situacao": "ok",
        "texto": "The Sirenia ( sy-REE-nee-ə), commonly referred to as sea cows or sirenians, are an order of fully aquatic, herbivorous mammals that inhabit swamps, rivers, estuaries, marine wetlands, and coastal marine waters. The extant Sirenia comprise two distinct families:\n[…]\nThe Protosirenidae (Eocene sirenians) and Prorastomidae (terrestrial sirenians) families are extinct. Sirenians are classified in the clade Paenungulata, alongside the elephants and the hyraxes, and evolved in the Eocene 50 million years ago (mya). The Dugongidae diverged from the Trichechidae in the late Eocene or early Oligocene (30–35 mya).\n[…]\nFamily Trichechidae:\n[…]\nDugongs use a medial-to-lateral motion for U2 bristles, while trichechids use a prehensile, lateral-to-medial grasping motion. These divergent feeding behaviors allow dugongs to exploit benthic foraging, including rhizome consumption, more effectively than trichechids.\n[…]\nThe three extant manatee species (family Trichechidae) and the dugong (family Dugongidae) are rated as Vulnerable on the IUCN Red List of Threatened Species. All four are vulnerable to extinction from habitat loss and other negative impacts related to human population growth and coastal development. Steller's sea cow, extinct since 1768, was hunted to extinction by humans.\n[…]\nInfectious diseases may also play an important role in morbidity and mortality. Although viruses have been identified only from Florida manatees, parasites and bacteria have been observed in at least three of the four sirenian species. The viruses that have been detected in Florida manatees include trichechid herpesvirus 1 (TrHV-1) and manatee papillomaviruses (TmPV) 1 through 4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sirenia",
        "situacao": "ok",
        "texto": "Em zoologia, os sirénios, sirênios, ou sirenídeos (latim científico Sirenia) pertencem a uma ordem de mamíferos marinhos herbívoros, de que fazem parte o dungongo e os manatins, por vezes apelidados de peixe-boi ou vaca-marinha.\n[…]\nAlgumas espécies atingem grande tamanho, pesando mais de uma tonelada. Os lábios são grandes e móveis, cobertos de cerdas rigidas. As narinas estão localizadas na parte superior do focinho e fecham-se com válvulas. Os ouvidos não têm \"pinae\". Os olhos não têm pálpebras, mas podem fechar-se por um mecanismo que funciona como um esfíncter. Os ossos são mais densos que o da maioria dos mamíferos (um fenómeno chamado paquiosteose), tornando-os mais pesados, o que facilita a sua posição na água.\n[…]\nQuando os europeus, na época das Grandes Navegações, vindos das regiões do Novo Mundo, trouxeram relatos das lendárias sereias, informaram que estas estariam próximas aos navios \"pastando\".\n[…]\nOs sirénios são membros de um grupo denominado subungulados e parecem ter um antepassado em comum com os elefantes, sendo ambas ordens parte da irradiação dos Afrotheria. Conhecem-se fósseis deste grupo desde o Eoceno (há 20-30 milhões de anos), como o do gênero Prorastomus, mas nessa altura já as famílias actuais estavam estabelecidas; pensa-se, por isso, que a sua origem tenha sido anterior a essa época.\n[…]\nGênero Trichechus Linnaeus, 1758 - peixe-boi\n[…]\nTrichechus inunguis (Natterer, 1883) - peixe-boi-da-Amazônia\n[…]\nTrichechus manatus Linnaeus, 1758 - peixe-boi-marinho\n[…]\nTrichechus senegalensis Link, 1795 - peixe-boi-africano\n[…]\n†Trichechus dugung Erxleben, 1777\n[…]\nhttp://faunanews.com.br/2020/06/05/nem-peixe-nem-boi-uma-sereia/\n[…]\nhttps://ilhadoconhecimento.com.br/de-sereias-a-elefantes-aquaticos-quem-sao-os-sirenios/}}",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Peixe-lua",
      "descricao": "Grande peixe oceânico de corpo achatado e arredondado (Mola mola), um dos peixes ósseos mais pesados."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Redondo, achatado e cinzento, o peixe-lua recebeu o nome científico Mola, palavra latina para que objeto?",
    "resposta": "Pedra de moinho",
    "distratores": [
      "Escudo",
      "Roda de carroça",
      "Prato de barro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ocean_sunfish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ocean_sunfish",
        "situacao": "ok",
        "texto": "The ocean sunfish (Mola mola), also known as the common mola, is one of the largest ray-finned fish in the world. It is the type species of the genus Mola, and one of five extant species in the family Molidae. It was formerly misidentified as the heaviest bony fish, which is actually a different and closely related species of sunfish, Mola alexandrini. Adults typically weigh between 247 and 1,000 \n[…]\nFrench polymath Guillaume Rondelet wrote about the ocean sunfish in his 1554 work de Piscibus, using the term Orthagoriscus, \"sucking pig\" for the likeness of its body and mouth. It was originally classified in the pufferfish family as Tetraodon mola, its epithet mola is Latin for \"millstone\", which the fish resembles because of its gray color, rough texture, and rounded body.\n[…]\nThe common name \"sunfish\" without qualifier is used to describe the marine family Molidae and the freshwater sunfish in the family Centrarchidae, which is unrelated to Molidae. On the other hand, the name \"ocean sunfish\" and \"mola\" refer only to the family Molidae.\n[…]\nOcean sunfish are native to the temperate and tropical waters of every ocean in the world. Mola genotypes appear to vary widely between the Atlantic and Pacific, but genetic differences between individuals in the Northern and Southern hemispheres are minimal.\n[…]\nBecause sunfish had not been kept in captivity on a large scale before, the staff at Monterey Bay was forced to innovate and create their own methods for capture, feeding, and parasite control. By 1998, these issues were overcome, and the aquarium was able to hold a specimen for more than a year, later releasing it after its weight increased by more than 14 times. Mola mola has since become a permanent feature of the Open Sea exhibit.\n[…]\nVideo lecture (16:53): Swim with giant sunfish in the open ocean - Tierney Thys\n[…]\nPhotos of Ocean sunfish in the Sealife Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peixe-lua",
        "situacao": "ok",
        "texto": "O peixe-lua (Mola mola) é uma espécie de peixe ósseo da família Molidae, pertencente à ordem Tetraodontiformes. Encontra-se nas águas tropicais e temperadas dos oceanos e distingue-se pelo corpo alto, fortemente comprimido lateralmente e aparentemente truncado na região posterior. É um dos maiores e mais pesados peixes ósseos existentes, podendo ultrapassar uma tonelada de massa.\n[…]\nO nome do género, Mola, deriva do latim mola, «mó» ou «pedra de moinho», numa referência à forma arredondada e achatada do animal. O nome comum «peixe-lua» alude igualmente à forma aproximadamente circular do corpo.\n[…]\nEm dezembro de 2021, um peixe-lua encontrado morto junto à ilha do Faial, nos Açores, tinha uma massa de 2 744 kg. A análise morfológica e genética identificou-o como Mola alexandrini, e não como M. mola. O exemplar foi reconhecido como o peixe ósseo mais pesado alguma vez medido.\n[…]\nPope, Edward C.; Hays, Graeme C.; Thys, Tierney M.; Doyle, Thomas K.; Sims, David W.; Queiroz, Nuno; Hobson, Victoria J.; Kubicek, Libor; Houghton, Jonathan D. R. (2010). «The biology and ecology of the ocean sunfish Mola mola: a review of current knowledge and future research perspectives». Reviews in Fish Biology and Fisheries (em inglês). 20 (4): 471–487. doi:10.1007/s11160-009-9155-9\n[…]\nDavenport, John; Phillips, Natasha D.; Cotter, Elizabeth; Eagling, Lawrence E.; Houghton, Jonathan D. R. (2018). «The locomotor system of the ocean sunfish Mola mola (L.): role of gelatinous exoskeleton, horizontal septum, muscles and tendons». Journal of Anatomy (em inglês). 233 (3): 347–357. PMC 6081505. PMID 29926911. doi:10.1111/joa.12842\n[…]\nFlaum, Benjamin; Blumer, Michael J.; Dean, Mason N.; Ekstrom, Laura J. (2026). «Functional morphology of the pharyngeal teeth of the ocean sunfish, Mola mola». The Anatomical Record (em inglês). 309 (9): 2286–2297. PMC 13431824. PMID 39155777. doi:10.1002/ar.25531",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Ouriço-do-mar",
      "descricao": "Equinodermo marinho de corpo globoso coberto de espinhos, da classe Echinoidea."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O aparelho de mastigação do ouriço-do-mar, formado por cinco dentes, leva o nome de que filósofo grego, que o descreveu?",
    "resposta": "Aristóteles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aristotle%27s_lantern"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aristotle%27s_lantern",
        "situacao": "ok",
        "texto": "Sea urchins or urchins () are the class Echinoidea within the echinoderms. Approximately 950 species live on the seabed, inhabiting all oceans and depths from the intertidal zone to the deep sea. They typically have a globular body covered by spiny protective tests (hard shells), typically from 3 to 10 cm (1 to 4 in) across. Sea urchins move slowly, crawling with their tube feet, and sometimes pus\n[…]\nThe mouth of most sea urchins is made up of five calcium carbonate teeth or plates, with a fleshy, tongue-like structure within. The entire chewing organ is known as Aristotle's lantern from Aristotle's description in his History of Animals (translated by D'Arcy Thompson):\n[…]\nHowever, this has recently been proven to be a mistranslation. Aristotle's lantern is actually referring to the whole shape of sea urchins, which look like the ancient lamps of Aristotle's time.\n[…]\nJapan consumes 50,000 tons annually, amounting to over 80% of global production. Japanese demand for sea urchins has raised concerns about overfishing.\n[…]\nSome species of sea urchins, such as the slate pencil urchin (Eucidaris tribuloides), are commonly sold in aquarium stores. Some species are effective at controlling filamentous algae, and they make good additions to an invertebrate tank.\n[…]\nA folk tradition in Denmark and southern England imagined sea urchin fossils to be thunderbolts, able to ward off harm by lightning or by witchcraft, as an apotropaic symbol. Another version supposed they were petrified eggs of snakes, able to protect against heart and liver disease, poisons, and injury in battle, and accordingly they were carried as amulets. These were, according to the legend, created by magic from foam made by the snakes at midsummer.\n[…]\nThe sea urchin genome project[link removed]\n[…]\nSea Urchin Harvesters Association – California Also, (604) 524-0322.\n[…]\nVirtual Urchin at Stanford\n[…]\nCalifornia Sea Urchin commission"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Echinoidea",
        "situacao": "ok",
        "texto": "Echinoidea Leske, 1778 (do grego: ἐχῖνος echinos = ouriço) é uma classe de organismos pertencentes ao filo Echinodermata que agrupa invertebrados marinhos dioicos de corpo globoso ou disciforme, geralmente espinhosos, com 3-10 cm de diâmetro, revestidos por um tegumento coriáceo. A coloração mais comum é o negro, mas são frequentes tons relativamente discretos de verde, castanho, púrpura, azul e v\n[…]\nA classe Echinoidea inclui os ouriços-do-mar, as bolachas-da-praia e os ouriços cordiformes. Os membros deste agrupamento taxonómico caracterizam-se por corpo globoso ou em forma de disco (disciforme), apresentando endosqueleto calcificado rígido e espinhos (radíolos) móveis. Algumas espécies apresentam aparelho mastigador interno (a lanterna de Aristóteles), que auxilia na alimentação.\n[…]\nOs ouriços-do-mar possuem cinco gónadas com os respectivos gonóporos estão localizados nas cinco placas genitais interambulacrárias. Os ouriços cordiformes e as bolachas-da-praia possuem apenas quatro gónadas (às vezes menos), uma tendo sido perdida com a migração do ânus. A gametogénese nesses animais é regulada por fotoperíodo, garantindo uma desova sincronizada entre os membros da população.\n[…]\nQuanto à limentação, a maioria dos ouriços-do-mar depende de um órgão fundamental: a lanterna de Aristóteles. Esse órgão é um aparato mastigador complexo, localizado dentro da boca e que possui cinco dentes calcários protrácteis. Interacções entre placas duras e músculos controlam os movimentos de protracção, retracção e apreensão.\n[…]\nThe sea urchin genome project\n[…]\nlantern.jpg A labeled diagram of the sea urchin's Aristotle's lantern.\n[…]\naristotle.htm Who is this person Aristotle and what about this lantern?\n[…]\nwww.emilydamstra.com Illustration of the musculature of an Aristotle's lantern.\n[…]\nFurther research on sea urchins\n[…]\nPhotographic Database of Cambodian Sea Urchins\n[…]\nCalifornia Sea Urchin commission",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Projeto Tamar",
      "descricao": "Programa brasileiro de conservação das tartarugas-marinhas, criado em 1980."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do Projeto Tamar, de conservação no litoral brasileiro, foi formado pelas sílabas iniciais de quais duas palavras?",
    "resposta": "Tartaruga marinha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Projeto_Tamar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Projeto_Tamar",
        "situacao": "ok",
        "texto": "A Fundação Projeto Tamar é um projeto conservacionista brasileiro que atua na preservação das tartarugas-marinhas ameaçadas de extinção. É uma entidade de direito privado, sem fins lucrativos e fica sediado na Praia do Forte, no município de Mata de São João, no interior do estado da Bahia.\n[…]\nO nome TAMAR é uma contração das palavras tartaruga e marinha, necessária, no início da década de 1980, para a confecção das pequenas placas de metal utilizadas para a identificação dos espécimes pelo projeto, para estudos de biometria, monitoramento das rotas migratórias e outros.\n[…]\nA ideia da Fundação Projeto Tamar surgiu na década de 1970 por meio de um grupo de estudantes de oceanografia que viajavam para praias desertas para realizar pesquisas. Naquela época, no Atol das Rocas, os pesquisadores documentaram pescadores matando tartarugas-marinhas. Fotos e alguns relatórios foram enviados às autoridades, que estavam querendo iniciar um programa de conservação marinha dando início ao programa que se desdobrou no Projeto Tamar, fundado no ano de 1980.\n[…]\nO Tamar surgiu com um objetivo de proteger tartarugas-marinhas que estão ameaçadas de extinção no litoral brasileiro. Com o tempo, porém, percebeu-se que os trabalhos não poderiam ficar restritos às tartarugas, pois uma das chaves para o sucesso desta missão seria o apoio ao desenvolvimento das comunidades costeiras, de forma a oferecer alternativas econômicas que amenizassem a questão social, diminuindo assim a caça das tartarugas-marinhas para a sua sobrevivência.\n[…]\nO Tamar também protege tubarões e outras espécies de vida marinha.\n[…]\nApós 35 anos de trabalho, o TAMAR devolveu ao mar mais de 25 milhões de filhotes de tartarugas marinhas.\n[…]\nAtualmente, há 22 bases do projeto pelo litoral do nordeste, sudeste, e sul."
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Projeto Tamar",
      "descricao": "Programa brasileiro de conservação das tartarugas-marinhas, criado em 1980."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que década foi criado o Projeto Tamar, que protege as tartarugas-marinhas no Brasil?",
    "resposta": "Anos 1980",
    "distratores": [
      "Anos 1960",
      "Anos 1970",
      "Anos 1990"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Projeto_Tamar"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Projeto_Tamar",
        "situacao": "ok",
        "texto": "A Fundação Projeto Tamar é um projeto conservacionista brasileiro que atua na preservação das tartarugas-marinhas ameaçadas de extinção. É uma entidade de direito privado, sem fins lucrativos e fica sediado na Praia do Forte, no município de Mata de São João, no interior do estado da Bahia.\n[…]\nO nome TAMAR é uma contração das palavras tartaruga e marinha, necessária, no início da década de 1980, para a confecção das pequenas placas de metal utilizadas para a identificação dos espécimes pelo projeto, para estudos de biometria, monitoramento das rotas migratórias e outros.\n[…]\nA ideia da Fundação Projeto Tamar surgiu na década de 1970 por meio de um grupo de estudantes de oceanografia que viajavam para praias desertas para realizar pesquisas. Naquela época, no Atol das Rocas, os pesquisadores documentaram pescadores matando tartarugas-marinhas. Fotos e alguns relatórios foram enviados às autoridades, que estavam querendo iniciar um programa de conservação marinha dando início ao programa que se desdobrou no Projeto Tamar, fundado no ano de 1980.\n[…]\nO Tamar surgiu com um objetivo de proteger tartarugas-marinhas que estão ameaçadas de extinção no litoral brasileiro. Com o tempo, porém, percebeu-se que os trabalhos não poderiam ficar restritos às tartarugas, pois uma das chaves para o sucesso desta missão seria o apoio ao desenvolvimento das comunidades costeiras, de forma a oferecer alternativas econômicas que amenizassem a questão social, diminuindo assim a caça das tartarugas-marinhas para a sua sobrevivência.\n[…]\nO número de ninhos para todas as espécies de tartarugas marinhas no país continua aumentando. Na 35ª temporada reprodutiva monitorada pelo TAMAR (2015-16), foram protegidos 26 mil ninhos, gerando 2,5 milhões de filhotes que chegaram ao mar em segurança."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Tartaruga-verde",
      "descricao": "Grande tartaruga-marinha herbívora (Chelonia mydas) de carapaça oliva a marrom."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A tartaruga-verde tem a carapaça oliva ou marrom. De onde vem, então, o verde do seu nome?",
    "resposta": "Da cor da sua gordura",
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_sea_turtle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_sea_turtle",
        "situacao": "ok",
        "texto": "The green sea turtle (Chelonia mydas), also known as the green turtle, black sea turtle, and Pacific green turtle, is a species of large sea turtle of the family Cheloniidae. It is the only species in the genus Chelonia. Its range extends throughout tropical and subtropical seas around the world, with two distinct populations in the Atlantic and Pacific Oceans, but it is also found in the Indian O\n[…]\nIts carapace is composed of five central scutes flanked by four pairs of lateral scutes. Underneath, the green turtle has four pairs of inframarginal scutes covering the area between the turtle's plastron and its shell. Mature C. mydas front appendages have only a single claw (as opposed to the hawksbill two), although a second claw is sometimes prominent in young specimens.\n[…]\nThe carapace of the turtle has various color patterns that change over time. Hatchlings of Chelonia mydas, like those of other marine turtles, have mostly black carapaces and light-colored plastrons. Carapaces of juveniles turn dark brown to olive, while those of mature adults are either entirely brown, spotted or marbled with variegated rays. Underneath, the turtle's plastron is hued yellow. C.\n[…]\nGreen sea turtles, Chelonia mydas, are classified as an aquatic species and are distributed around the globe in warm tropical to subtropical waters. The environmental parameter that limits the distribution of the turtles is ocean temperatures below 7 to 10 degrees Celsius. Within their geographical range, the green sea turtles generally stay near continental and island coastlines. Near the coastlines, the green sea turtles live within shallow bays and protected shores.\n[…]\nThe genome of Chelonia mydas was sequenced in 2013 to examine the development and evolution of the turtle body plan.\n[…]\nBaby green sea turtles – Open Water 859 (video on YouTube)\n[…]\nPhotos of Green sea turtle in the Sealife Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartaruga-verde",
        "situacao": "ok",
        "texto": "A tartaruga-verde, tartaruga-aruanã ou só aruanã (nome científico: Chelonia mydas) é uma tartaruga marinha da família dos queloniídeos (Cheloniidae). É o único membro do género Chelonia. A espécie está distribuída por todos os oceanos, nas zonas de águas tropicais e subtropicais e de qualquer altitude do mundo, sendo habitualmente encontradas em águas costeiras, ilhas ou baías, e raramente encontr\n[…]\nPesquisas posteriores determinaram que a \"tartaruga-do-mar-megro-negra\" de Bocourt não era geneticamente distinta da tartaruga-verde e, taxonomicamente não configurada uma espécie separada. Essas duas \"espécies\" foram então unidas como Chelonia mydas e as populações receberam o estatuto de subespécie: C. mydas mydas se referia à população originalmente descrita, enquanto C. mydas agassizi se referia apenas à população do Pacífico, conhecida como tartaruga-verde-de-galápagos.\n[…]\nO nome comum da espécie não deriva de nenhuma coloração externa verde específica. Seu nome vem da cor esverdeada da gordura encontrada em uma camada entre seus órgãos internos e sua carapaça. Como é uma espécie encontrada em todo o mundo, a tartaruga-verde tem muitos nomes locais. Na língua havaiana é chamada de honu, e é conhecido localmente como símbolo de boa sorte e longevidade. No Brasil, seu outro nome vernacular, aruanã, originou-se no tupi *arua'na, que designa um tipo de peixe.\n[…]\nA carapaça da tartaruga tem vários padrões de cores que mudam com o tempo. Filhotes, como os de outras tartarugas marinhas, têm principalmente carapaças pretas e plastrões de cor clara. As carapaças dos juvenis se tornam marrom-escuras a verde-oliva, enquanto as dos adultos maduros são inteiramente marrons com raios variegados. Por baixo, o plastrão é amarelo. As patas são de cor escura com linhas amarelas, e geralmente são marcadas com uma grande mancha marrom escura no centro de cada apêndice.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Branqueamento de corais",
      "descricao": "Fenômeno em que os corais expulsam as algas simbiontes de seus tecidos e ficam brancos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Quando ficam brancos, os corais expulsaram as algas que viviam em seus tecidos. Qual é a principal causa desse branqueamento?",
    "resposta": "Aquecimento da água do mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coral_bleaching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coral_bleaching",
        "situacao": "ok",
        "texto": "Coral bleaching is the process where corals become white due to loss of symbiotic algae and photosynthetic pigments. This loss of pigment can be caused by various stressors, such as changes in water temperature, light, salinity, or nutrients. A bleached coral is under stress, more vulnerable to starvation and disease, and at risk of death. The leading cause of coral bleaching is rising ocean tempe\n[…]\nCoral in the south Red Sea does not bleach despite summer water temperatures up to 34 °C (93 °F).\n[…]\nLowered numbers of grazing species after coral bleaching in the Caribbean has been likened to sea-urchin-dominated systems which do not undergo regime shifts to fleshy macroalgae dominated conditions.\n[…]\nIn 2021, researchers demonstrated that probiotics can help coral reefs mitigate heat stress, indicating that such could make them more resilient to climate change and mitigate coral bleaching. There are concerns about the consequences of producing and introducing genetically modified corals. They remain, however, one of the main options for helping rebuild the coral reefs.\n[…]\nMarine Protected Areas (MPAs) are sectioned-off areas of the ocean designated for protection from human activities such as fishing and un-managed tourism. According to NOAA, MPAs currently occupy 26% of U.S. waters. MPAs have been documented to improve and prevent the effects of coral bleaching in the United States.\n[…]\nHigher populations of young coral increase the longevity of a reef, as well as its ability to recover from extreme bleaching events.\n[…]\nThere are a number of stressors locally impacting coral bleaching, including sedimentation, continual support of urban development, land change, increased tourism, untreated sewage, and pollution. To illustrate, increased tourism is good for a country, however, it also comes with costs.\n[…]\nGlobal information system on coral reefs.\n[…]\nCurrent global map of bleaching alert areas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Branqueamento_do_coral",
        "situacao": "ok",
        "texto": "O branqueamento do coral é um fenômeno que ocorre quando os pólipos do coral expelem as zooxantelas, dinoflagelados fotossintetizantes que vivem dentro de seus tecidos. Normalmente, os pólipos dos corais vivem em íntima associação com as zooxantelas, em um processo conhecido como simbiose. Nessa relação simbiótica os corais oferecem às zooxantelas abrigo, nutrientes e dióxido de carbono e, em troc\n[…]\nAumento na temperatura da água (ondas de calor marinhas, mais comuns devido ao aquecimento global) ou diminuição na temperatura da água;\n[…]\nAs temperaturas elevadas da água são a principal causa dos eventos de branqueamento em massa. Sessenta grandes eventos de branqueamento dos corais ocorreram entre 1979 e 1990, com a associada mortalidade dos corais afetando os recifes em todas as partes do mundo. Em 2016, foi registrado o mais longo evento de branqueamento dos corais. Esse evento, o mais longo e destrutivo, foi causado pelo El Niño ocorrido entre 2014 e 2017.\n[…]\nA saúde dos corais e das zooxantelas, junto com fatores genéticos, também influenciam o branqueamento.\n[…]\nAtualmente, 190 recifes ao redor do mundo são monitorados pelo NOAA, que envia alertas para os pesquisadores e gestores dos recifes por meio do site NOAA Coral Reef Watch (CRW). Por monitorar o aquecimento dos oceanos, os primeiros avisos de branqueamento dos corais alertam os gestores a se prepararem e ficarem atentos a futuros eventos de branqueamento.\n[…]\nA ocupação por macroalgas inibe o crescimento dos corais porque as algas produzem compostos que evitam a incrustação de outros organismos e competem com os corais por espaço e luz. Como resultado, as macroalgas formam comunidades estáveis que tornam difícil o crescimento e recuperação dos corais. Os recifes serão mais susceptíveis a outros problemas, como o declínio na qualidade da água e a remoção de peixes herbívoros, porque o crescimento dos corais está prejudicado (6).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Peixe-palhaço",
      "descricao": "Pequeno peixe de recife alaranjado, da subfamília Amphiprioninae, que vive associado a anêmonas-do-mar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o peixe-palhaço consegue viver entre os tentáculos urticantes da anêmona sem ser queimado?",
    "resposta": "Tem uma camada de muco protetor",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amphiprioninae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amphiprioninae",
        "situacao": "ok",
        "texto": "Clownfish or anemonefishes (genus Amphiprion) are saltwater fish found in the warm and tropical waters of the Indo-Pacific. They mainly inhabit coral reefs and have a distinctive colouration typically consisting of white vertical bars on a red, orange, yellow, brown or black background. Clownfish developed a symbiotic and mutually beneficial relationship with sea anemones, on which they rely for s\n[…]\nSome species cohabitate on the same anemone host.\n[…]\nA total of ten sea anemone species are used by clownfish as hosts: the malu anemone, sebae anemone, magnificent sea anemone, corkscrew tentacle sea anemone, Mertens' carpet sea anemone, Haddon's sea anemone, giant carpet anemone, adhesive anemone, bubble-tip anemone, and beaded sea anemone. Some clownfishes are generalist in their choice of hosts, while others are more specialised.\n[…]\nClark's anemonefish is the most generalised species and utilises all ten anemone species, while nine clownfish species — the tomato clownfish, Chagos anemonefish, Pacific anemonefish, Seychelles anemonefish, Madagascar anemonefish, McCulloch's anemonefish, Maldive anemonefish, sebae clownfish, and maroon clownfish — use just one anemone species respectively. Desirable traits in a host include long tentacles to hide among.\n[…]\nIn addition, certain anemones like the beaded and bubble-tip sea anemone have tentacles with knob-like structures, which provide more surface area for the fish to conceal itself. The magnificent sea anemone can provide extra protection as clownfish can hide inside its soft body when it engulfs its tentacles. The potency of venom is also important; highly toxic anemone species tend to have smaller tentacles and so provide less shelter but more protection.\n[…]\nA 2002 study found that dominant Clark's anemonefish acted more aggressively toward juvenile pink skunk clownfish than those of their own species, particularly those of a larger size."
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Peixe-palhaço",
      "descricao": "Pequeno peixe de recife alaranjado, da subfamília Amphiprioninae, que vive associado a anêmonas-do-mar."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os peixes-palhaço nascem machos. Quando a fêmea dominante de um grupo morre, o que acontece com o maior macho?",
    "resposta": "Vira fêmea",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amphiprioninae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amphiprioninae",
        "situacao": "ok",
        "texto": "Clownfish or anemonefishes (genus Amphiprion) are saltwater fish found in the warm and tropical waters of the Indo-Pacific. They mainly inhabit coral reefs and have a distinctive colouration typically consisting of white vertical bars on a red, orange, yellow, brown or black background. Clownfish developed a symbiotic and mutually beneficial relationship with sea anemones, on which they rely for s\n[…]\nOne study of captive ocellaris clownfish found that the dominant pair are the most territorial while non-breeders are much less so. Both the male and female direct their aggression against intruders of the same sex, though resident males are more likely to display than to attack. Similarly, non-breeding intruders are more likely to be simply intimidated.\n[…]\nA 2002 study found that dominant Clark's anemonefish acted more aggressively toward juvenile pink skunk clownfish than those of their own species, particularly those of a larger size.\n[…]\nClownfish breed year-round in tropical waters while in more temperate waters, like those around Japan, breeding occurs mostly in spring and summer. Only the dominant female and male reproduce, which mostly occurs during a full moon. In the days leading up to spawning, the pair perform courtship rituals that involve the male chasing and nibbling the female as well as erecting his dorsal, pelvic and anal fins while staying motionless in front or alongside her.\n[…]\nAs they enter the juvenile stage, clownfish begin settling to the ocean floor and find an anemone host, while transitioning to a more diurnal (daytime) lifestyle. Juveniles continue to grow and develop their adult colouration, but cannot produce sex cells until they ascend to dominance within a group. Juveniles possess both ovarian and testicular tissue on the gonads, the latter expands and pushes aside the former when the juvenile becomes a breeding male."
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Tubarão",
      "descricao": "Peixe cartilaginoso predador da superordem Selachimorpha."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que muitos tubarões afundam quando param de nadar, ao contrário da maioria dos peixes ósseos?",
    "resposta": "Não têm bexiga natatória",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shark",
      "https://en.wikipedia.org/wiki/Swim_bladder"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shark",
        "situacao": "ok",
        "texto": "Sharks are a group of elasmobranch cartilaginous fishes characterized by a ribless endoskeleton, dermal denticles, five to seven gill slits on each side, and pectoral fins that are not fused to the head. Modern sharks are classified within the division Selachii and are the sister group to the Batomorphi (rays and skates). Some sources extend the term \"shark\" as an informal category including extin\n[…]\nShark-like chondrichthyans such as Cladoselache and Doliodus first appeared in the Devonian Period (419–359 million years), though some fossilized chondrichthyan-like scales are as old as the Late Ordovician (458–444 million years ago). The earliest confirmed modern sharks (Selachii) are known from the Early Jurassic around 200 million years ago, with the oldest known member being Agaleus, though records of true sharks may extend back as far as the Permian.\n[…]\nMany sharks can contract and dilate their pupils, like humans, something no teleost fish can do. Sharks have eyelids, but they do not blink because the surrounding water cleans their eyes. To protect their eyes some species have nictitating membranes. This membrane covers the eyes while hunting and when the shark is being attacked.\n[…]\nSeveral regions now have shark sanctuaries or have banned shark fishing—these regions include American Samoa, the Bahamas, the Cook Islands, French Polynesia, Guam, the Maldives, the Marshall Islands, Micronesia, the Northern Mariana Islands, and Palau.\n[…]\nIn July 2020 scientists reported results of a survey of 371 reefs in 58 nations estimating the conservation status of reef sharks globally. No sharks have been observed on almost 20% of the surveyed reefs and shark depletion was strongly associated with both socio-economic conditions and conservation measures. Sharks are considered to be a vital part of the ocean ecosystem.\n[…]\nData related to Selachimorpha at Wikispecies\n[…]\nSelachimorpha at Wikibooks"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Swim_bladder",
        "situacao": "ok",
        "texto": "The swim bladder, gas bladder, fish maw, air bladder or sound is an internal gas-filled organ in bony fish that functions to modulate buoyancy, and thus allowing the fish to stay at desired water depth without having to maintain lift via swimming, which expends more energy. The ventral position of the swim bladder means that the center of mass is above the center of buoyancy, reducing stability bu\n[…]\nThe swim bladder normally consists of two gas-filled sacs located in the dorsal portion of the fish, although in a few primitive species, there is only a single sac. It has flexible walls that contract or expand according to the ambient pressure. The walls of the bladder contain very few blood vessels and are lined with guanine crystals, which make them impermeable to gases.\n[…]\nIn red-bellied piranha, the swim bladder may play an important role in sound production as a resonator. The sounds created by piranhas are generated through rapid contractions of the sonic muscles and is associated with the swim bladder."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tubar%C3%A3o",
        "situacao": "ok",
        "texto": "Tubarão ou cação é um tipo de peixe de esqueleto cartilaginoso e um corpo hidrodinâmico (com exceção dos Squatiniformes, Hexanchiformes e Orectolobiformes) pertencente à superordem Selachimorpha. Os primeiros tubarões conhecidos viveram há aproximadamente 400 milhões de anos.\n[…]\nAo contrário dos peixes ósseos, os tubarões não têm bexigas cheias de gás para a flutuabilidade (bexigas natatórias). Em vez disso, os tubarões dependem de um fígado grande, cheio de óleo, que contém esqualeno, e de a sua cartilagem possuir cerca de metade da densidade do osso. O fígado constitui até 30% da sua massa corporal. A eficácia do fígado é limitada, por isso os tubarões utilizam a sustentação dinâmica para manter a profundidade, e afundam quando param de nadar.\n[…]\nTubarões-tigre da areia armazenam ar em seus estômagos, utilizando-o como uma forma de bexiga natatória. A maioria dos tubarões precisa nadar constantemente para respirar e não pode dormir por muito tempo sem afundar. No entanto, algumas espécies de tubarão, como o tubarão-lixa, são capazes de bombear água através de suas guelras, o que lhes permite descansar no fundo do oceano.\n[…]\nDiferentemente da maioria dos peixes ósseos, os tubarões são reprodutores da seleção K, o que significa que eles produzem um pequeno número de jovens bem desenvolvidos, ao invés de um grande número de jovens pouco desenvolvidos. A fecundidade em tubarões varia de 2 a mais de 100 jovens por ciclo reprodutivo. Tubarões se tornam maduros lentamente em relação a muitos outros peixes. Por exemplo, os tubarões-limão atingem a maturidade sexual por volta dos anos 13 ou 15 anos.\n[…]\nOs dentes dos tubarões eram usados como pontas de flecha. Índios de Pernambuco utilizavam, no início do século XVII, dentes de tubarão como pontas de suas flechas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Tubarão",
      "descricao": "Peixe cartilaginoso predador da superordem Selachimorpha."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A pele dos tubarões é áspera como uma lixa porque é coberta de minúsculas escamas com estrutura parecida com a de quê?",
    "resposta": "Dentes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Fish_scale",
      "https://en.wikipedia.org/wiki/Shark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Fish_scale",
        "situacao": "ok",
        "texto": "A fish scale is a small rigid plate that grows out of the skin of a fish. The skin of most jawed fishes is covered with these protective scales, which can also provide effective camouflage through the use of reflection and colouration, as well as possible hydrodynamic advantages. The term scale derives from the Old French escale, meaning a shell pod or husk.\n[…]\nThe rough, sandpaper-like texture of shark and ray skin, coupled with its toughness, has led it to be valued as a source of rawhide leather, called shagreen. One of the many historical applications of shark shagreen was in making hand-grips for swords. The rough texture of the skin is also used in Japanese cuisine to make graters called oroshiki, by attaching pieces of shark skin to wooden boards. The small size of the scales grates the food very finely.\n[…]\nA lot of the new methods for replicating shark skin involve the use of polydimethylsiloxane (PDMS) for creating a mold. Usually, the process involves taking a flat piece of shark skin, covering it with the PDMS to form a mold and pouring PDMS into that mold again to get a shark skin replica. This method has been used to create a biomimetic surface which has superhydrophobic properties, exhibiting the lotus effect.\n[…]\nParametric modeling has been done on shark denticles with a wide range of design variations, such as low and high-profile vortex generators. Through this method, the most thorough characterization has been completed for symmetrical two-dimensional riblets with sawtooth, scalloped and blade cross sections. These biomimetic models were designed and analyzed to see the effects of applying the denticle-like structures to the wings of various airplanes.\n[…]\nHydrodynamic aspects of shark scales [1]"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Shark",
        "situacao": "ok",
        "texto": "Sharks are a group of elasmobranch cartilaginous fishes characterized by a ribless endoskeleton, dermal denticles, five to seven gill slits on each side, and pectoral fins that are not fused to the head. Modern sharks are classified within the division Selachii and are the sister group to the Batomorphi (rays and skates). Some sources extend the term \"shark\" as an informal category including extin\n[…]\nShark-like chondrichthyans such as Cladoselache and Doliodus first appeared in the Devonian Period (419–359 million years), though some fossilized chondrichthyan-like scales are as old as the Late Ordovician (458–444 million years ago). The earliest confirmed modern sharks (Selachii) are known from the Early Jurassic around 200 million years ago, with the oldest known member being Agaleus, though records of true sharks may extend back as far as the Permian.\n[…]\nKamohoali'i is the best known and revered of the shark gods, he was the older and favored brother of Pele, and helped and journeyed with her to Hawaii. He was able to assume all human and fish forms. A summit cliff on the crater of Kilauea is one of his most sacred spots. At one point he had a heiau (temple or shrine) dedicated to him on every piece of land that jutted into the ocean on the island of Molokai.\n[…]\nSeeking to close the loophole, the Shark Conservation Act was passed by Congress in December 2010, and it was signed into law in January 2011.\n[…]\nIn July 2020 scientists reported results of a survey of 371 reefs in 58 nations estimating the conservation status of reef sharks globally. No sharks have been observed on almost 20% of the surveyed reefs and shark depletion was strongly associated with both socio-economic conditions and conservation measures. Sharks are considered to be a vital part of the ocean ecosystem.\n[…]\nData related to Selachimorpha at Wikispecies\n[…]\nSelachimorpha at Wikibooks"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Salmão",
      "descricao": "Peixe migratório da família Salmonidae que vive no mar e sobe os rios para desovar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A carne do salmão selvagem é alaranjada por causa de pigmentos que ele obtém comendo que tipo de animal?",
    "resposta": "Crustáceos, como o krill",
    "fonte": [
      "https://en.wikipedia.org/wiki/Astaxanthin",
      "https://en.wikipedia.org/wiki/Salmon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Astaxanthin",
        "situacao": "ok",
        "texto": "Astaxanthin  is a keto-carotenoid within a group of chemical compounds known as carotenoids, a subclass of the broad group of phytochemicals known as terpenes. Astaxanthin is a metabolite of zeaxanthin and canthaxanthin, containing both hydroxyl and ketone functional groups.\n[…]\nAnimals who feed on the algae, such as salmon, red trout, red sea bream, flamingos, and crustaceans (shrimp, krill, crab, lobster, and crayfish), subsequently reflect the red-orange astaxanthin pigmentation.\n[…]\nEuphausia pacifica (Pacific krill)\n[…]\nEuphausia superba (Antarctic krill)\n[…]\nIn shellfish, astaxanthin is almost exclusively concentrated in the shells, with only low amounts in the flesh itself, and most of it only becomes visible during cooking as the pigment separates from the denatured proteins that otherwise bind it. Astaxanthin is extracted from Euphausia superba (Antarctic krill) and from shrimp processing waste.\n[…]\nThe primary use of synthetic astaxanthin today is as an animal feed additive to impart coloration, including farm-raised salmon and chicken egg yolks. Synthetic carotenoid pigments colored yellow, red or orange represent about 15–25% of the cost of production of commercial salmon feed. In the 21st century, most commercial astaxanthin for aquaculture is produced synthetically.\n[…]\nAstaxanthin is a pigment that moves from algae to consumers, giving pink and red colors to animals like salmon, shrimp, and flamingos. Lobsters, shrimp, and some crabs turn red when cooked because the astaxanthin, which was bound to the protein in the shell, becomes free as the protein denatures and unwinds. The freed pigment is thus available to absorb light and produce the red color."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Salmon",
        "situacao": "ok",
        "texto": "Salmon (; pl.: salmon) are any of several commercially important species of euryhaline ray-finned fish from the genera Salmo and Oncorhynchus of the family Salmonidae, native to tributaries of the North Atlantic (Salmo) and North Pacific (Oncorhynchus) basins. Salmon is a colloquial or common name used for fish in this group, but is not a scientific name.\n[…]\nSalmon are mid-level carnivores whose diet change according to their life stage. Salmon fry predominantly feed upon zooplankton until they reach fingerling sizes, when they start to consume more aquatic invertebrates such as insect larvae, microcrustaceans and worms. As juveniles (parrs), they become more predatory and actively prey upon aquatic insects, small crustaceans, tadpoles and small bait fishes.\n[…]\nAs adults, salmon behave like other mid-sized pelagic fish, eating a variety of sea creatures including smaller forage fish such as lanternfish, herrings, sand lances, mackerels and barracudina. They also eat krill, squid and polychaete worms.\n[…]\nLarge numbers of highly populated, open-net salmon farms\n[…]\nFarm-raised salmon are fed the carotenoids astaxanthin and canthaxanthin to match their flesh colour to wild salmon to improve their marketability. Wild salmon get these carotenoids, primarily astaxanthin, from eating shellfish and krill.\n[…]\nSalmon flesh is generally orange to red, although white-fleshed wild salmon with white-black skin colour occurs. The natural colour of salmon results from carotenoid pigments, largely astaxanthin, but also canthaxanthin, in the flesh. Wild salmon get these carotenoids from eating krill and other tiny shellfish.\n[…]\nArctic Salmon – Pacific salmon distribution and abundance seems to be increasing in the Arctic. Links to a Canadian research project documenting changes in Pacific salmon and studying Pacific salmon ecology in the Arctic."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Astaxantina",
        "situacao": "ok",
        "texto": "A Astaxantina é um ceto-carotenóide, dentro de um grupo de compostos químicos conhecidos como carotenonas ou terpenos.\n[…]\nSendo um componente nutricional natural, a astaxantina pode também ser encontrado em suplementos alimentares. Como complemento, poderá ser usado para consumo humano e animal, sendo utilizado na aquacultura. A produção de astaxantina para suplementos alimentares poderá ser tanto de fonte natural, como sintética.\n[…]\nEuphausia pacifica (krill)\n[…]\nEuphausia superba (krill)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Baiacu",
      "descricao": "Peixe da família Tetraodontidae, de corpo roliço, quatro dentes fundidos e capaz de se inflar."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O baiacu não fabrica sozinho o veneno que torna perigoso o prato japonês fugu. Que seres produzem essa toxina?",
    "resposta": "Bactérias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tetrodotoxin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tetrodotoxin",
        "situacao": "ok",
        "texto": "Tetrodotoxin (TTX) is a potent neurotoxin. Its name derives from Tetraodontiformes, an order that includes pufferfish, porcupinefish, ocean sunfish, and triggerfish; several of these species carry the toxin. Although tetrodotoxin was discovered in these fish, it is found in several other animals (e.g., in blue-ringed octopuses, rough-skinned newts, and moon snails).\n[…]\nApart from their bacterial species of most likely ultimate biosynthetic origin (see below), tetrodotoxin has been isolated from widely differing animal species, including:\n[…]\nHence, as bacterial species that produce TTX are broadly present in aquatic sediments, a strong case is made for ingestion of TTX and/or TTX-producing bacteria, with accumulation and possible subsequent colonization and production.\n[…]\nNevertheless, without clear biosynthetic pathways (not yet found in animals, but shown for bacteria), it remains uncertain whether it is simply via bacteria that each animal accumulates TTX; the question remains as to whether the quantities can be sufficiently explained by ingestion, ingestion plus colonization, or some other mechanism.\n[…]\nThe biosynthetic route to TTX is only partially understood. It is long known that the molecule is related to saxitoxin, and as of 2011 it is believed that there are separate routes for aquatic (bacterial) and terrestrial (newt) TTX. In 2020, new intermediates found in newts suggest that the synthesis starts with geranyl guanidine in the amphibian; these intermediates were not found in aquatic TTX-containing animals, supporting the separate-route theory.\n[…]\nIn 2021, the first genome of a TTX-producing bacterium was produced. This \"Bacillus sp. 1839\" was identified as Cytobacillus gottheilii using its rRNA sequence. The researcher responsible for this study has not yet identified a coherent pathway but hopes to do so in the future."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tetrodotoxina",
        "situacao": "ok",
        "texto": "A tetrodotoxina (TTX) é uma toxina hidrofílica, não proteica, produzida por certas bactérias, como Vibrio spp., no qual várias espécies de peixes, gastrópodes marinhos, bivalves, bactérias, anfíbios, artrópodes e platelmintas são incapazes de produzir a toxina endogenamente, logo adquirem-na através da cadeia alimentar. Apresenta uma toxicidade cerca de 1000 vezes superior ao cianeto. É termoestáv\n[…]\nO envenenamento é causado pela ingestão de toxina produzida nas gónadas e outros tecidos viscerais de alguns peixes da classe Tetraodontiformes, à qual pertencem o peixe fugu japonês ou baiacu. Esta toxina e a saxitoxina são dois venenos dos mais potentes conhecidos, sendo a dose letal mínima de cada uma delas, no camundongo, de aproximadamente 8 μg/kg. São fatais para o homem.\n[…]\nFugu no Japão é um problema de saúde pública pois faz parte da culinária tradicional. É considerado uma guloseima preparada e vendida em restaurantes especiais com indivíduos treinados e licenciados capazes de remover cuidadosamente as vísceras para reduzir o perigo de envenenamento.\n[…]\nA despeito dos cuidados na preparação, produtos à base de fugu no Japão ainda são responsáveis por casos fatais contabilizando-se cerca de 50 mortes anuais. A importação desse peixe é proibida em alguns países, como os EEUU, com especial exceção para os restaurantes japoneses. Entretanto, um potencial perigo permanece em relação a possíveis erros em seu preparo.\n[…]\nO diagnóstico presuntivo é feito com base no quadro clínico e história de ingestão recente do baiacu/fugu ou similar. É importante estabelecer o diagnóstico diferencial com outras síndromes causadas por toxinas naturais, em especial, as produzidas por frutos do mar (Tabela 1), e com outros quadro neurológicos, dentre eles, o botulismo.\n[…]\n2) Medidas preventivas – orientações sobre o risco de ingestão do peixe baiacu e outras espécies que produzem a tetrodotoxina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Turritopsis dohrnii",
      "descricao": "Pequeno hidrozoário marinho conhecido como água-viva imortal por conseguir rejuvenescer."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a pequena água-viva Turritopsis dohrnii pode, em tese, escapar da morte por velhice?",
    "resposta": "Consegue voltar à fase de pólipo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Turritopsis_dohrnii"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turritopsis_dohrnii",
        "situacao": "ok",
        "texto": "Turritopsis dohrnii, commonly known as the immortal jellyfish, is a species of small, biologically immortal Medusozoa (jellyfish) found worldwide in temperate to tropic waters. It is one of the few known cases of an animal capable of completely reverting to a sexually immature, sedentary polyps colonial stage after having reached sexual maturity as a solitary individual.\n[…]\nTheoretically, this process can go on indefinitely, effectively rendering the jellyfish biologically immortal, although in practice individuals can still die. In nature, most Turritopsis dohrnii are likely to succumb to predation or disease in the medusa stage without reverting to the polyp form.\n[…]\nThis ability to reverse the biotic cycle (in response to adverse conditions) is unique in the animal kingdom. It allows the jellyfish to bypass death, rendering Turritopsis dohrnii potentially biologically immortal. The process has not been observed in their natural habitat, in part because the process is quite rapid and because field observations at the right moment are unlikely.\n[…]\ndohrnii, like other jellyfish, may use its bell to catch its prey. T. dohrnii's bell will expand, sucking in water, as it propels itself to swim. This expansion of the bell brings potential prey in closer reach of the tentacles.\n[…]\nTurritopsis dohrnii, like other jellyfish, are preyed on most commonly by other jellyfish. Other predators of T. dohrnii include sea anemones, tuna, sharks, swordfish, sea turtles, and penguins. Many species prey on T. dohrnii and other jellyfish due to their simple composition. They are only approximately 5% non-aqueous matter, and the remaining part is composed of water.\n[…]\nTurritopsis Dohrnii Teo En Ming, a perennial candidate in Singaporean elections, legally changed his name after the jellyfish.\n[…]\nCheating Death: The Immortal Life Cycle of Turritopsis"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Turritopsis_dohrnii",
        "situacao": "ok",
        "texto": "Turritopsis dohrnii, anteriormente classificada como T. nutricula, também conhecida como medusa imortal, pertence à classe dos hidrozoários e é uma das espécies considerada biologicamente imortal, isto é, pode em determinadas fases do seu ciclo de vida voltar ao seu primeiro estado de vida e formar um novo pólipo. Isto acontece em resultado de stress ambiental ou traumas físicos. O pólipo, mais ta\n[…]\nNa fase de medusa, a Turritopsis dohrnii apresenta forma de sino, com um diâmetro máximo de cerca de 4,5 mm e tem aproximadamente o mesmo tamanho de largura e altura.\n[…]\nAs medusas de T. dohrnii são capazes de sobreviver entre 14 ° C e 25 ° C.\n[…]\nTurritopsis dohrnii também tem uma fase de pólipo betónica designada por hidroides. Estes são ramificados e possuem estolões que percorrem o substrato e galhos verticais com pólipos de alimentação que podem produzir brotos de medusa. Nesta fase o organismo vive fixado ao substrato.\n[…]\n1. Numa primeira fase, como a maioria dos outros hidrozoários, T. dohrnii começa a sua vida como larva nomeada de planula.\n[…]\nA medusa de Turritopsis dohrnii é a única forma conhecida por ter desenvolvido a capacidade de retornar a um estado de pólipo, por um processo de transformação específico que requer a presença de certos tipos de células presentes no tecido da superfície do sino da medusa e do sistema do canal circulatório.\n[…]\nAs medusas mais imaturas transformaram-se em cistos e só depois em estolões e pólipos. No entanto, cerca de 40% das medusas maduras entraram no estado de estolão e pólipo sem passar pela fase de cisto.\n[…]\nTeoricamente, este processo pode continuar indefinidamente, tornando a espécie imortal, o que poderia causar um grande crescimento populacional da espécie, o que não é o caso uma vez que, na prática os indivíduos podem morrer por predação ou doença durante o estado de medusa que impossibilita o organismo voltar à forma de pólipo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Golfinho",
      "descricao": "Cetáceo de dentes da família Delphinidae, como o golfinho-nariz-de-garrafa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Golfinhos precisam subir à tona para respirar. Como eles conseguem dormir sem se afogar?",
    "resposta": "Descansam metade do cérebro por vez",
    "fonte": [
      "https://en.wikipedia.org/wiki/Unihemispheric_slow-wave_sleep"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Unihemispheric_slow-wave_sleep",
        "situacao": "ok",
        "texto": "Unihemispheric slow-wave sleep (USWS) is sleep where one half of the brain rests while the other half remains alert. This is in contrast to normal sleep where both eyes are shut and both halves of the brain show unconsciousness. In USWS, also known as asymmetric slow-wave sleep, one half of the brain is in deep sleep, a form of non-rapid eye movement sleep and the eye corresponding to this half is\n[…]\nUSWS requires hemispheric separation to isolate the cerebral hemispheres enough to ensure that the one can engage in SWS while the other is awake. The corpus callosum is the anatomical structure in the mammalian brain which allows for interhemispheric communication. Cetaceans have been observed to have a smaller corpus callosum when compared to other mammals. Similarly, birds lack a corpus callosum altogether and have only few means of interhemispheric connections.\n[…]\nSince USWS allows for the one eye to be open, the cerebral hemisphere that undergoes slow-wave sleep varies depending on the position of the bird relative to the rest of the flock. If the bird's left side is facing outward, the left hemisphere will be in slow-wave sleep; if the bird's right side is facing outward, the right hemisphere will be in slow-wave sleep. This is because the eyes are contralateral to the left and right hemispheres of the cerebral cortex.\n[…]\nUnihemispheric slow-wave sleep seems to allow the simultaneous sleeping and surfacing to breathe of aquatic mammals including both dolphins and seals. Bottlenose dolphins are one specific species of cetaceans that have been proven experimentally to use USWS in order to maintain both swimming patterns and the surfacing for air while sleeping.\n[…]\nAmazon river dolphin (Inia geoffrensis)\n[…]\nBeluga whale (Delphinapterus leucus)\n[…]\nBottlenose dolphin (Tursiops truncatus)\n[…]\nPacific white-sided dolphin (Sagmatias obliquidens)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sono_de_ondas_lentas_uni-hemisf%C3%A9rico",
        "situacao": "ok",
        "texto": "Sono de ondas lentas unihemisférico (SOLU), também denominado de sono de ondas lentas assimétrico, é caracterizado por uma actividade de ondas lentas num dos hemisférios do cérebro, enquanto que um electroencefalograma com reduzida voltagem, característico de um estado de vigília, é registado no outro hemisfério. Este fenómeno tem sido observado num número de espécies terrestres, aquáticas e voado",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Lontra-marinha",
      "descricao": "Mamífero marinho do Pacífico Norte (Enhydra lutris) que se alimenta de ouriços e outros invertebrados."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No Pacífico Norte, a caça quase acabou com as lontras-marinhas, e os ouriços se multiplicaram. Que ambiente submarino foi devastado em consequência?",
    "resposta": "Florestas de kelp",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sea_otter",
      "https://en.wikipedia.org/wiki/Kelp_forest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sea_otter",
        "situacao": "ok",
        "texto": "The sea otter (Enhydra lutris) is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. Adult sea otters typically weigh between 14 and 45 kg (30–100 lb), making them the heaviest members of the weasel family, but among the smallest marine mammals. Unlike most marine mammals, the sea otter's primary form of insulation is an exceptionally thick coat of fur, the dense\n[…]\nNorth Pacific areas that do not have sea otters often turn into urchin barrens, with abundant sea urchins and no kelp forest. Kelp forests are extremely productive ecosystems. Kelp forests sequester (absorb and capture) CO2 from the atmosphere through photosynthesis. Sea otters may help mitigate effects of climate change by their cascading trophic influence.\n[…]\nReintroduction of sea otters to British Columbia has led to a dramatic improvement in the health of coastal ecosystems, and similar changes have been observed as sea otter populations recovered in the Aleutian and Commander Islands and the Big Sur coast of California. However, some kelp forest ecosystems in California have also thrived without sea otters, with sea urchin populations apparently controlled by other factors.\n[…]\nMany facets of the interaction between sea otters and the human economy are not as immediately felt. Sea otters have been credited with contributing to the kelp harvesting industry via their well-known role in controlling sea urchin populations; kelp is used in the production of diverse food and pharmaceutical products.\n[…]\nAlthough human divers harvest red sea urchins both for food and to protect the kelp, sea otters hunt more sea urchin species and are more consistently effective in controlling these populations. E. lutris is a controlling predator of the red king crab (Paralithodes camtschaticus) in the Bering Sea, which would otherwise be out of control as it is in its invasive range, the Barents Sea."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kelp_forest",
        "situacao": "ok",
        "texto": "Kelp forests are underwater areas with a high density of kelp, which covers a large part of the world's coastlines. Smaller areas of anchored kelp are called kelp beds. They are recognized as one of the most productive and dynamic ecosystems on Earth. Although algal kelp forest combined with coral reefs only cover 0.1% of Earth's total surface, they account for 0.9% of global primary productivity.\n[…]\nIn the absence of predation, these lower-level species flourish because resources that support their energetic requirements are not limiting. In a well-studied example from Alaskan kelp forests, sea otters (Enhydra lutris) control populations of herbivorous sea urchins through predation. When sea otters are removed from the ecosystem (for example, by human exploitation), urchin populations are released from predatory control and grow dramatically.\n[…]\nKelp forests have been important to human existence for thousands of years. Indeed, many now theorise that the first colonisation of the Americas was due to fishing communities following the Pacific kelp forests during the last ice age.\n[…]\nOne theory contends that the kelp forests that would have stretched from northeast Asia to the American Pacific coast would have provided many benefits to ancient boaters  The kelp forests would have provided many sustenance opportunities, as well as acting as a type of buffer from rough water. Besides these benefits, researchers believe that the kelp forests might have helped early boaters navigate, acting as a type of \"kelp highway\".\n[…]\n\"Kelp Forest & Rocky Subtidal Habitats\". noaa.gov. Archived from the original on 2007-03-22.\n[…]\n\"2 Hours of Vancouver Island Kelp Forests\". ScubaBC. ScubaBC.ca. 2025-11-12. Retrieved 2025-11-13. Two hours of immersive ambient footage filmed over 80 dives in the Browning Passage area of northern Vancouver Island, featuring bull kelp, giant kelp, and marine life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lontra-marinha",
        "situacao": "ok",
        "texto": "A lontra-marinha (nome científico: Enhydra lutris) é um mamífero carnívoro marinho da família Mustelidae, nativo das regiões costeiras do norte e do leste do Oceano Pacífico. As lontras-marinhas adultas pesam tipicamente entre 14 e 45 kg, tornando-os nos mais pesados dos membros da família, e entre os pequenos mamíferos marinhos. De modo distinto da maioria dos mamíferos marinhos, a forma primária\n[…]\nEmbora possa andar sobre a terra, esta lontra vive principalmente no oceano, este \"casaco\", retém minusculas bolhas de ar, que lhe permitem flutuar com tanta eficácia.\n[…]\nA lontra-marinha habita ambientes que têm grande profundidade marinha. Alimenta-se principalmente sobre invertebrados marinhos como ouriços, moluscos e crustáceos diversos, e algumas espécies de peixes. Seus hábitos alimentares são notáveis em vários aspetos. Primeiro, o uso de rochas para abrir conchas torna uma das poucas espécies de mamíferos que usam essas ferramentas.\n[…]\nA primeira descrição científica da lontra-marinha está contida nas notas de campo de Georg Steller em 1751, e a espécie foi descrita por Linnaeus em seu Systema Naturae de 1758. Originalmente chamado Lutra marina, passou por inúmeras mudanças de nome antes de ser aceito como Enhydra lutris em 1922. O nome genérico Enhydra, deriva do grego antigo en / εν que significa \"na\" e Hydra / ύδρα que significa \"água\", e os lutris palavra em latim, significando \"lontra\".\n[…]\nA evidência fóssil indica que a linhagem Enhydra ficou isolada no Pacífico norte há cerca de dois milhões de anos, dando origem à agora extinta Enhydra macrodonta e à lontra-marinha moderna, Enhydra lutris. A lontra-marinha surgiu inicialmente no norte de Hokkaido e regiões próximas do extremo oriente da Rússia, e depois houve a propagação para o leste das Ilhas Aleutas e Alasca, e daí ao longo da costa ocidental norte-americana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Tartaruga-cabeçuda",
      "descricao": "Tartaruga-marinha (Caretta caretta) de cabeça grande, comum no litoral brasileiro."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nas tartarugas-cabeçudas, como em outras tartarugas-marinhas, o que define se o filhote será macho ou fêmea?",
    "resposta": "A temperatura da areia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Loggerhead_sea_turtle",
      "https://en.wikipedia.org/wiki/Temperature-dependent_sex_determination"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Loggerhead_sea_turtle",
        "situacao": "ok",
        "texto": "The loggerhead sea turtle (Caretta caretta), loggerhead turtle or loggerhead, is a species of sea turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm (35 in) in carapace length when fully grown. The adult loggerhead sea turtle weighs approximately 135 kg (298 lb), with the largest specimens weighing abou\n[…]\nThe next region of the esophagus is not papillated, with numerous mucosal folds. The digestion rate in loggerheads is temperature-dependent; it increases as temperature increases.\n[…]\nThe increase of temperature and food availability will increase reproduction output of loggerhead turtles. Many researchers agree that temperature increases due to climate change has a complicated impact on turtles. At breeding sites when a loggerhead turtle lays multiple clutches in a season, a higher temperature will cause the duration of time between laying two different nests to become shorter.\n[…]\nA team including sea turtle biologists and oceanographers determined the presence of El Niño conditions based on the El Niño watch issued by the Climate Prediction Center (CPC), anomalies found in sea surface temperature (SST) charts published by NOAA's Coast Watch Program, the presence of loggerhead sea turtles in the Pacific loggerhead conservation area, and reports of loggerhead strandings.\n[…]\nYntema, C.; Mrosovsky, N. (1982). \"Critical periods and pivotal temperatures for sexual differentiation in loggerhead sea turtles\" (PDF). Canadian Journal of Zoology. 60 (5): 1012–1016. Bibcode:1982CaJZ...60.1012Y. doi:10.1139/z82-141. ISSN 1480-3283. Archived from the original (PDF) on 30 May 2010. Retrieved 25 May 2010.\n[…]\nBolten, Alan B.; Witherington, Blair E. (2003). Loggerhead Sea Turtles. Washington, District of Columbia: Smithsonian Books. ISBN 1-58834-136-4.\n[…]\nPhotos of Loggerhead sea turtle in the Sealife Collection"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Temperature-dependent_sex_determination",
        "situacao": "ok",
        "texto": "Temperature-dependent sex determination (TSD) is a type of environmental sex determination in which the temperatures experienced during embryonic/larval development determine the sex of the offspring. It is observed in reptiles and teleost fish, with some reports of it occurring in species of shrimp. TSD differs from the chromosomal sex-determination systems common among vertebrates. It is the mos\n[…]\nThe thermosensitive, or temperature-sensitive, period is the period during development when sex is irreversibly determined. It is used in reference to species with temperature-dependent sex determination, such as crocodilians and turtles. The TSP typically spans the middle third of incubation with the endpoints defined by embryonic stage when under constant temperatures.\n[…]\nTemperature-dependent sex determination was first described in Agama agama in 1966 by Madeleine Charnier.\n[…]\nThe three traits of pivotal temperature (the temperature at which the sex ratio is 50%), maternal nest-site choice, and nesting phenology have been identified as the key traits of TSD that can change, and of these, only the pivotal temperature is significantly heritable, this would have to increase by 27 standard deviations to compensate for a 4 °C temperature increase. It is likely that climate change will outpace the ability of many TSD animals to adapt, and many will likely go extinct.\n[…]\nHowever, there is evidence that during climatic extremes, changes in the sex determining mechanism itself (to GSD) are selected for, particularly in the highly-mutable turtles. It has also been proposed that sea turtles may be able to use TSD to their advantage in a warming climate. When the offspring viability is decreased due to increased temperatures, they are able to use the coadaptation between sex ratio and survivability to increase the production of female offspring."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartaruga-comum",
        "situacao": "ok",
        "texto": "Tartaruga-comum (nome científico: Caretta caretta), também chamada tartaruga-marinha-comum, tartaruga-cabeçuda, tartaruga-mestiça, carebadura, careba-amarela, tartaruga-amarela, tartaruga-avó, avó-de-aruanã ou apeia, é uma espécie de tartaruga marinha pertencente à família dos queloniídeos (Cheloniidae). Habita os oceanos Atlântico, Pacífico e Índico, e o mar Mediterrâneo. É a única espécie do gén\n[…]\nAs crias dos ovos do centro do ninho tendem a ser mais grandes, crescem mais rapidamente, e são as mais activas durante os primeiros dias de vida marinha.\n[…]\nA incubação dura por volta de oitenta dias, período após o qual as criações escavam através da areia para alcançar a superfície. Geralmente isto ocorre durante a noite, uma vez que a escuridão aumenta a probabilidade de escaparem aos predadores e evitar as temperaturas extremas na superfície da areia durante o dia. As crias dirigem-se para o oceano, caminhando para o horizonte mais brilhante criado pelo reflexo das estrelas e da lua sobre a superfície da água.\n[…]\nTodas as tartarugas marinhas são parecidas no seu comportamento básico de nidificação. Durante a temporada de desova, a fêmea volta à praia onde nasceu para pôr ovos em intervalos de 12 a 17 dias. Estas saem da água, sobem à praia, e remove a areia superficial para formar uma depressão com o tamanho do seu corpo. Com as suas patas traseiras, escavam um buraco onde depositam os ovos. Após depositarem os ovos na câmara tapam o buraco com areia, e finalmente regressam ao mar.\n[…]\nIsto é motivo de preocupação pela relação entre as rápidas mudanças da temperatura global e o risco de extinção da população de tartarugas-marinhas-comuns. Um dos efeitos a nível local é o provocado pela construção de edifícios altos perto das praias, que reduzem a exposição ao sol e diminuem a temperatura da areia, o que leva a uma mudança nas proporções dos sexos, aumentando a percentagem de machos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Cavalo-marinho",
      "descricao": "Pequeno peixe marinho do gênero Hippocampus, de cabeça parecida com a de um cavalo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma estrutura do cérebro humano, essencial para a memória, tem o mesmo nome científico do cavalo-marinho, por causa do formato. Qual é ela?",
    "resposta": "Hipocampo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hippocampus",
      "https://en.wikipedia.org/wiki/Seahorse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hippocampus",
        "situacao": "ok",
        "texto": "The hippocampus (pl.: hippocampi), also hippocampus proper,  is a major component of the brain of humans and many other vertebrates. In the human brain the hippocampus, the dentate gyrus, and the subiculum are components of the hippocampal formation located in the limbic system.\n[…]\nDue to bilateral symmetry the brain has a hippocampus in each cerebral hemisphere. If damage to the hippocampus occurs in only one hemisphere, leaving the structure intact in the other hemisphere, the brain can retain near-normal memory functioning. Severe damage to the hippocampi in both hemispheres results in profound difficulties in forming new memories (anterograde amnesia) and often also affects memories formed before the damage occurred (retrograde amnesia).\n[…]\nExperiments using intrahippocampal transplantation of hippocampal cells in primates with neurotoxic lesions of the hippocampus have shown that the hippocampus is required for the formation and recall, but not the storage, of memories. It has been shown that a decrease in the volume of various parts of the hippocampus leads to specific memory impairments. In particular, efficiency of verbal memory retention is related to the anterior parts of the right and left hippocampus.\n[…]\nNon-mammalian vertebrates lack a brain structure that looks like the mammalian hippocampus, but they have one that is considered homologous to it. The hippocampus is in essence part of the allocortex. Only mammals have a fully developed cortex, but the structure it evolved from, called the pallium, is present in all vertebrates, even the most primitive ones such as the lamprey or hagfish. The pallium is usually divided into three zones: medial, lateral and dorsal.\n[…]\nTemporal-lobe.com An interactive diagram of the rat parahippocampal-hippocampal region"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seahorse",
        "situacao": "ok",
        "texto": "A seahorse (also written sea-horse and sea horse) is any of 47 species of small marine bony fish in the genus Hippocampus. Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail. Along with the pipefishes and seadragons (Phycodurus and Phyllopteryx) they form the family Syngnathidae. They can be found in seas, bra\n[…]\nAnatomical evidence, supported by molecular, physical, and genetic evidence, demonstrates that seahorses are highly modified pipefish. The fossil record of seahorses, however, is very sparse. The best known and best studied fossils are specimens of Hippocampus guttulatus (though literature more commonly refers to them under the synonym of H. ramulosus), from the Marecchia River formation of Rimini Province, Italy, dating back to the Lower Pliocene, about 3 million years ago.\n[…]\nHippocampus sindonis Jordan & Snyder, 1901 (Sindo's seahorse)\n[…]\nHippocampus spinosissimus Weber, 1913 (hedgehog seahorse)\n[…]\nHippocampus subelongatus Castelnau, 1873 (West Australian seahorse)\n[…]\nHippocampus trimaculatus Leach, 1814 (longnose seahorse)\n[…]\nHippocampus tristis Castelnau, 1872 (Lazarus Seahorse)\n[…]\nHippocampus tyro Randall & Lourie, 2009 (Tyro seahorse)\n[…]\nHippocampus waleananus Gomon & Kuiter, 2009 (Walea soft coral pygmy seahorse)\n[…]\nHippocampus whitei Bleeker, 1855 (White's seahorse)\n[…]\nHippocampus zebra Whitley, 1964 (zebra seahorse)\n[…]\nHippocampus zosterae Jordan & Gilbert, 1882 (dwarf seahorse)\n[…]\nOther species that are believed to be unclassified have also been reported in books, dive magazines and on the Internet. They can be distinguished from other species of seahorse by their 12 trunk rings, low number of tail rings (26–29), the location in which young are brooded in the trunk region of males and their extremely small size. Molecular analysis (of ribosomal RNA) of 32 Hippocampus species found that H."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hipocampo",
        "situacao": "ok",
        "texto": "Hipocampo é uma estrutura localizada nos lobos temporais do cérebro humano, considerada a principal sede da memória e importante componente do sistema límbico. Além disso é relacionado com a navegação espacial.\n[…]\nSeu nome deriva de seu formato curvado apresentado em secções coronais do cérebro, se assemelhando a um cavalo-marinho (Grego: hippos = cavalo, kampos = monstro marinho).\n[…]\nEsta estrutura parece ser muito importante para converter a memória a curto prazo em memória a longo prazo. O hipocampo atua em interação com a amígdala e está mais envolvida no registro e decifração dos padrões perceptuais do que nas reações emocionais.\n[…]\nLesões no hipocampo impedem a pessoa de construir novas memórias e a pessoa tem a sensação de viver num lugar estranho onde tudo o que experimenta simplesmente se dissipa, mesmo que as memórias mais antigas anteriores à lesão permaneçam intactas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Cavalo-marinho",
      "descricao": "Pequeno peixe marinho do gênero Hippocampus, de cabeça parecida com a de um cavalo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Nos cavalos-marinhos, quem carrega os ovos numa bolsa até os filhotes nascerem?",
    "resposta": "O macho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Seahorse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Seahorse",
        "situacao": "ok",
        "texto": "A seahorse (also written sea-horse and sea horse) is any of 47 species of small marine bony fish in the genus Hippocampus. Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail. Along with the pipefishes and seadragons (Phycodurus and Phyllopteryx) they form the family Syngnathidae. They can be found in seas, bra\n[…]\nHippocampus kuda Bleeker, 1852 (spotted seahorse)\n[…]\nHippocampus mohnikei Bleeker, 1854 (Japanese seahorse)\n[…]\nHippocampus patagonicus Piacentino & Luzzatto, 2004 (Patagonian seahorse)\n[…]\nHippocampus planifrons Peters, 1877 (flatface seahorse, false-eye seahorse)\n[…]\nHippocampus pontohi Lourie & Kuiter, 2008 (Pontoh's pygmy seahorse)\n[…]\nHippocampus pusillus Fricke, 2004 (pygmy thorny seahorse)\n[…]\nHippocampus reidi Ginsburg, 1933 (longsnout seahorse)\n[…]\nHippocampus satomiae Lourie & Kuiter, 2008 (Satomi's pygmy seahorse)\n[…]\nHippocampus sindonis Jordan & Snyder, 1901 (Sindo's seahorse)\n[…]\nHippocampus spinosissimus Weber, 1913 (hedgehog seahorse)\n[…]\nHippocampus subelongatus Castelnau, 1873 (West Australian seahorse)\n[…]\nHippocampus trimaculatus Leach, 1814 (longnose seahorse)\n[…]\nHippocampus tristis Castelnau, 1872 (Lazarus Seahorse)\n[…]\nHippocampus tyro Randall & Lourie, 2009 (Tyro seahorse)\n[…]\nHippocampus waleananus Gomon & Kuiter, 2009 (Walea soft coral pygmy seahorse)\n[…]\nHippocampus whitei Bleeker, 1855 (White's seahorse)\n[…]\nHippocampus zebra Whitley, 1964 (zebra seahorse)\n[…]\nHippocampus zosterae Jordan & Gilbert, 1882 (dwarf seahorse)\n[…]\nOther species that are believed to be unclassified have also been reported in books, dive magazines and on the Internet. They can be distinguished from other species of seahorse by their 12 trunk rings, low number of tail rings (26–29), the location in which young are brooded in the trunk region of males and their extremely small size. Molecular analysis (of ribosomal RNA) of 32 Hippocampus species found that H."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cavalo-marinho",
        "situacao": "ok",
        "texto": "Hippocampus é um gênero de peixes ósseos, pertencente à família Syngnathidae, de águas marinhas temperadas e tropicais que engloba as espécies conhecidas pelo nome comum de cavalo-marinho.\n[…]\nA reprodução dos cavalos-marinhos geralmente ocorre na primavera.[carece de fontes]? Para se reproduzirem, as fêmeas dos cavalos-marinhos dão preferência ao macho de maior tamanho corporal e que tenha mais ornamentos em seu corpo. Para que os machos consigam uma fêmea para se reproduzirem, eles também precisam atraí-la fazendo uma dança do acasalamento.\n[…]\nA reprodução inicia quando os Óvulos da espécie são transferidos da bolsa incubadora da fêmea para a do macho, no momento do acasalamento. Os Óvulos, já na bolsa incubadora do macho, que se localiza na base de sua cauda, são fertilizados por esperma que o próprio macho libera lá dentro. Dois meses mais tarde, os Óvulos eclodem e o macho realiza violentas contorções para expelir os filhotes, que estão dentro da sua bolsa incubadora.[carece de fontes]?\n[…]\nOs filhotes, quando nascem, são transparentes e medem menos de um centímetro, mas com variações, dependendo da espécie. Eles sobem logo à superfície para encherem suas bexigas natatórias de ar, para poderem se equilibrar na água ao nadarem. Após nascerem, já são totalmente independentes de seus pais, mesmo sendo frágeis. Um cavalo-marinho macho geralmente gera 100 a 500 filhotes por gestação, dependendo da espécie.\n[…]\nGeralmente, quase 97% dos filhotes de cavalos-marinhos são mortos por predadores naturais, que são, geralmente, peixes maiores.[carece de fontes]?\n[…]\nArkive (Em Ingles),imagens e filmes do cavalo-marinho-pigmeu (bargibanti Hippocampus) (Em Ingles)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Lula-gigante",
      "descricao": "Grande cefalópode de águas profundas do gênero Architeuthis."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que monstro marinho das lendas escandinavas, capaz de afundar navios, pode ter sido inspirado em avistamentos da lula-gigante?",
    "resposta": "Kraken",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kraken",
      "https://en.wikipedia.org/wiki/Giant_squid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kraken",
        "situacao": "ok",
        "texto": "The kraken (; from Norwegian: kraken, ) is a legendary cryptid of enormous size, per its etymology something akin to a cephalopod, said to appear in the Norwegian Sea off the coast of Norway. It is believed that the legend of the Kraken may have originated from sightings of giant squid, which may grow to 10.5 metres (34 ft) in length.\n[…]\nThe piece of squid recovered by the French ship Alecton in 1861, discussed by Henry Lee in his chapter on the \"Kraken\", would later be identified as a giant squid, Architeuthis by A. E. Verrill.\n[…]\nAfter a specimen of the giant squid, Architeuthis, was discovered by Rev. Moses Harvey and published in science by Professor A. E. Verrill, commentators have remarked on this cephalopod as possibly explaining the legendary kraken.\n[…]\nThe French novelist Victor Hugo's Les Travailleurs de la mer (1866, \"Toilers of the Sea\") discusses the man-eating octopus, the kraken of legend, called pieuvre by the locals of the Channel Islands (in the Guernsey dialect, etc.). Hugo's octopus later influenced Jules Verne's depiction of the kraken in Twenty Thousand Leagues Under the Seas, though Verne also drew on the real-life encounter the French ship Alecton had with what was probably a giant squid.\n[…]\nThe character of Cthulhu, created by H.P. Lovecraft in 1928, also serves as a modern depiction of the kraken, as this giant, squid-like humanoid creature embodies the horror originating with the idea of the mythological serpent, often denoting apocalypse, death, or sin, as well as the more contemporary concept of bodily horror.\n[…]\nThe Kraken Regiment (Ukrainian: Спецпідрозділ \"Kraken\", romanized: Spetspidrozdil \"Kraken\") is a Ukrainian military volunteer unit, formed by veterans of the Azov Regiment who adopted the mythical sea creature as their name. Their insignia uses image of a giant squid."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Giant_squid",
        "situacao": "ok",
        "texto": "The giant squid (Architeuthis dux) is a species of deep-ocean dwelling squid in the family Architeuthidae. It can grow to a tremendous size, offering an example of abyssal gigantism; recent estimates put the maximum body size at around 5 m (16 ft) for females, with males slightly shorter, from the posterior fins to the tip of its long arms.\n[…]\nArchiteuthis dux, Atlantic giant squid\n[…]\nArchiteuthis (Megateuthis) martensii, North Pacific giant squid\n[…]\nArchiteuthis sanctipauli, southern giant squid\n[…]\nTales of giant squid have been common among mariners since ancient times, and may have led to the Norse legend of the kraken, a tentacled sea monster as large as an island capable of engulfing and sinking any ship. Japetus Steenstrup, the describer of Architeuthis, suggested a giant squid was the species described as a sea monk to the Danish king Christian III circa 1550. The Lusca of the Caribbean and Scylla in Greek mythology may also derive from giant squid sightings.\n[…]\nOn 19 June 2019, in an expedition run by the National Oceanic & Atmospheric Association (NOAA), known as the Journey into Midnight, biologists Nathan J. Robinson and Edith Widder captured a video of a juvenile giant squid at a depth of 759 m (2,490 ft) in the Gulf of Mexico. Michael Vecchione, a NOAA Fisheries zoologist, confirmed that the captured footage was that of the genus Architeuthis, and that the individual filmed measured at somewhere between 3.0 and 3.7 m (10 and 12 ft).\n[…]\nRepresentations of the giant squid have been known from early legends of the kraken through books such as Moby-Dick and Jules Verne's 1870 novel Twenty Thousand Leagues Under the Seas on to other novels such as Ian Fleming's Dr. No, Peter Benchley's Beast (adapted as a film called The Beast), and Michael Crichton's Sphere (adapted as a film).\n[…]\nGiant squid – Smithsonian Ocean Portal"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kraken",
        "situacao": "ok",
        "texto": "O Kraken é uma espécie de lula, que ameaçava os navios na mitologia  nórdica. Este cefalópode mitológico tem o tamanho de uma ilha e cem tentáculos, acreditava-se que habitava as águas profundas do Mar da Noruega, que separa a Islândia das terras Escandinavas, mas poderia migrar por todo o Atlântico Norte. O Kraken tinha fama de destruir navios.\n[…]\nExistem também, lendas de outras culturas que relacionam o Kraken à Lula Gigante, a qual teria sido o grande erro do deus Poseidon, mais tarde, havia sido rejeitada e negada para sua nomeação a \"representante\" do mar, sendo despejada pelo próprio criador nas extremas profundezas do oceano. Desde então...\n[…]\nO Kraken é uma criatura mitológica de origem escandinava. Na mitologia nórdica, o Kraken é geralmente descrito como uma gigantesca criatura marinha, parecida com uma lula ou polvo, que reside nas profundezas do mar. A lenda do Kraken começou a ser registrada em fontes do século XIX, mas seu conceito se baseia em relatos orais que datam de muito antes.\n[…]\nCaracterísticas do Kraken: O Kraken é descrito como uma criatura com tentáculos enormes, capaz de destruir embarcações e arrastar marinheiros para o fundo do oceano. Algumas histórias afirmam que a criatura é tão grande que pode criar redemoinhos, afundando navios inteiros.\n[…]\nO Kraken provavelmente tem raízes na observação de criaturas reais, como o Calamar Gigante (Architeuthis dux), uma das maiores espécies de lula, que pode crescer até 12 metros de comprimento. Esses animais são encontrados nas profundezas do oceano e têm sido confundidos com monstros marinhos ao longo da história. O Kraken, portanto, pode ter sido inspirado em avistamentos de calamares gigantes ou até baleias em alto-mar.\n[…]\nInspirou o nome do time de Hóquei no Gelo, Seattle Kraken, da NHL e da empresa norte-americana de Criptomoedas Kraken.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Raia-elétrica",
      "descricao": "Raia da ordem Torpediniformes capaz de produzir descargas elétricas para atordoar presas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A arma naval chamada torpedo herdou o nome de um animal marinho que paralisa as presas com descargas. Que animal é esse?",
    "resposta": "Raia-elétrica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Torpedo",
      "https://en.wikipedia.org/wiki/Electric_ray"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Torpedo",
        "situacao": "ok",
        "texto": "A torpedo is an underwater ranged weapon launched above or below the water surface, self-propelled towards a target, with an explosive warhead designed to detonate either on contact with or in proximity to the target. Historically, such a device was called an automotive, automobile, locomotive, or fish torpedo; colloquially, a fish.\n[…]\nModern electric torpedoes such as the Mark 24 Tigerfish, the Black Shark or DM2 series commonly use silver oxide batteries that need no maintenance, so torpedoes can be stored for years without losing performance.\n[…]\nThe first truly modern electronically wire-guided torpedo was the USN Mark 39, introduced in 1946. It possessed three-dimensional acoustic homing and used a control wire for mid-course guidance. In 1956, the Mark 39 would be superseded by the Mark 37, which served as a mainstay ASW weapon during the 1960s.\n[…]\nTorpedoes may be launched from submarines, surface ships, helicopters, and fixed-wing aircraft, unmanned naval mines, and naval fortresses. They are also used in conjunction with other weapons; for example, the Mark 46 torpedo used by the United States is the warhead section of the ASROC, a kind of anti-submarine missile; the CAPTOR mine (CAPsulated TORpedo) is a submerged sensor platform which releases a torpedo when a hostile contact is detected.\n[…]\nNuclear torpedo\n[…]\nTorpedo defence\n[…]\nGray, Edwyn (2004). Nineteenth-Century Torpedoes and Their Inventors. US Naval Institute Press. ISBN 978-1-59114-341-3.\n[…]\nMilford, Frederick J. (April 1996). \"U.S. Navy Torpedoes: Part One—Torpedoes through the Thirties\". The Submarine Review. Annandale, VA: Naval Submarine League. OCLC 938396939.\n[…]\nTorpedo Display, US Naval Undersea Museum\n[…]\nTorpedo Collection, US Naval Undersea Museum\n[…]\n1890-07-26: THE SIMS – EDISON ELECTRIC TORPEDO – THE TORPEDO AT FULL SPEED – SECTIONAL VIEW OF THE TORPEDO"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Electric_ray",
        "situacao": "ok",
        "texto": "The electric rays are a group of rays, flattened cartilaginous fish with enlarged pectoral fins, composing the order Torpediniformes . They are known for being capable of producing an electric discharge, ranging from 8 to 220 volts, depending on species, used to stun prey and for defense. There are 69 species in four families.\n[…]\nIn the 1770s the electric organs of the torpedo ray were the subject of Royal Society papers by John Walsh, and John Hunter. These appear to have influenced the thinking of Luigi Galvani and Alessandro Volta – the founders of electrophysiology and electrochemistry.\n[…]\nThe torpedo fish, or electric ray, appears continuously in premodern natural histories as a magical creature, and its ability to numb fishermen without seeming to touch them was a significant source of evidence for the belief in occult qualities in nature during the ages before the discovery of electricity as an explanatory mode.\n[…]\nWith such a battery, an electric ray may electrocute larger prey with a voltage of between 8 volts in some narcinids to 220 volts in Torpedo nobiliana, the Atlantic torpedo.\n[…]\nThe 60 or so species of electric rays are grouped into 12 genera and two families. The Narkinae are sometimes elevated to a family, the Narkidae. The torpedinids feed on large prey, which are stunned using their electric organs and swallowed whole, while the narcinids specialize on small prey on or in the bottom substrate. Both groups use electricity for defense, but it is unclear whether the narcinids use electricity in feeding.\n[…]\nThe Platyrhinidae, the thornback rays, are classified within the Torpediniformes by some authorities, but do not possess electric organs.\n[…]\nFamily Narcinidae Gill, 1862 (electric rays)\n[…]\nFamily Torpedinidae Henle, 1834 (torpedo electric rays or torpedo rays)\n[…]\nElectric fish"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Torpedo",
        "situacao": "ok",
        "texto": "Torpedo é um projéctil explosivo auto-propulsionado que (após ser lançado acima ou abaixo da superfície da água) opera debaixo de água e é projectado para detonar ao entrar em contacto ou ao aproximar-se de um determinado alvo. Torpedos são armas que podem ser lançadas de submarinos, navios, helicópteros e aviões. Até à 1.ª Guerra Mundial as minas navais eram também conhecidas por torpedos, neste \n[…]\nUm dos primeiros exemplos práticos de torpedo com guiagem elétrica por fio foi o torpedo Lay, desenvolvido por John Louis Lay entre 1867 e 1872. O projeto evoluiu para o torpedo Patrick por volta de 1890, capaz de atingir velocidades de até 23 nós (43 km/h). Construído após 1888, o torpedo Patrick era uma arma de proporções colossais, medindo mais de 42 pés (13 m) de comprimento e com diâmetro de 24 polegadas (61 cm) no corpo central.\n[…]\nA versão de 1885 alcançava 11 nós (20 km/h), e a de 1891 elevou essa marca para 21 nós (39 km/h). Seu alcance máximo atingia 3 500 jardas (3 200 m), condicionado unicamente pelo comprimento do cabo umbilical desenrolado, dispondo de autonomia energética ilimitada. A arma contava com espoleta de detonação elétrica operada pelo operador, oferecendo maior margem de segurança contra choques acidentais em comparação com as espoletas de inércia mecânica dos modelos Whitehead e Howell.\n[…]\nO primeiro modelo expressivo de torpedo filoguiado empregado contra alvos reais em combate foi o alemão G7ef Spinne, introduzido em 1944. Tratava-se de uma variante do torpedo G7e equipada com fio elétrico de controle e direcionada por alinhamento acústico pelo operador a partir da estação lançadora. Originalmente destinado à defesa costeira de estreitos a partir de posições terrestres, versões posteriores foram instaladas em submarinos.\n[…]\nTorpedo Fotônico - Jornada nas Estrelas\n[…]\n«Ficheiro sobre torpedos» (em inglês). , Marinha dos EUA\n[…]\n«História do Torpedo» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Choco",
      "descricao": "Molusco cefalópode do gênero Sepia, de concha interna e bolsa de tinta escura."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A cor sépia, típica de fotografias antigas, tem o nome do gênero de um molusco cuja tinta servia de pigmento. Que molusco é esse?",
    "resposta": "Choco",
    "distratores": [
      "Lula",
      "Polvo",
      "Náutilo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sepia_(color)",
      "https://en.wikipedia.org/wiki/Cuttlefish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sepia_(color)",
        "situacao": "ok",
        "texto": "Sepia is a reddish-brown color, named after the rich brown pigment derived from the ink sac of the common cuttlefish Sepia. The word sepia is the Latinized form of the Ancient Greek word σηπία (sēpía), meaning cuttlefish.\n[…]\nSepia ink was commonly used for writing in Greco-Roman civilization. It remained in common use as an artist's drawing material until the 19th century. In the last quarter of the 18th century, Professor Jakob Seydelmann of Dresden developed a process to extract and produce a concentrated form of sepia for use in watercolors and oil paints.\n[…]\nSepia toning is a chemical process used in photography which changes the appearance of black-and-white prints to brown. The color is now often associated with antique photographs. Most photo graphics software programs and many digital cameras include a sepia tone filter to mimic the appearance of sepia-toned prints.\n[…]\nIn the 1940s in the United States, music intended for African American audiences was generally called race music or sepia music until the development of the expression rhythm and blues (R&B). There was a magazine for African-Americans called Sepia, which existed from 1947 to 1983 (although the name Sepia was only applied after a change of ownership in 1953).\n[…]\nAcclaimed Russian director Andrei Tarkovsky used a sepia tone in his 1979 science-fiction film Stalker to visually distinguish scenes set in the ordinary world from the world of the forbidden Zone, which is portrayed in color.\n[…]\nMedia related to Sepia (color) at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cuttlefish",
        "situacao": "ok",
        "texto": "Cuttlefish, or cuttles, are marine molluscs of the family Sepiidae. They belong to the class Cephalopoda which also includes squid, octopuses, and nautiluses. Cuttlefish have a unique internal shell, the cuttlebone, which is used for control of buoyancy. They have large, W-shaped pupils, eight arms, and two tentacles furnished with denticulated suckers, with which they secure their prey.\n[…]\nThe Greco-Roman world valued the cuttlefish as a source of the unique brown pigment the creature releases from its siphon when it is alarmed. The word for the cuttlefish in both Greek and Latin, sepia, now refers to the reddish-brown color sepia in English.\n[…]\nSepia prashadi, hooded cuttlefish\n[…]\nSepia officinalis, common cuttlefish (type)\n[…]\nBreaded and deep-fried cuttlefish is a popular dish in Andalusia. In Portugal, cuttlefish is present in many popular dishes. Chocos com tinta (cuttlefish in black ink), for example, is grilled cuttlefish in a sauce of its own ink. Cuttlefish is also popular in the region of Setúbal, where it is served as deep-fried strips or in a variant of feijoada, with white beans. Black pasta is often made using cuttlefish ink.\n[…]\nCuttlefish ink was formerly an important dye, called sepia. To extract the sepia pigment from a cuttlefish (or squid), the ink sac is removed and dried then dissolved in a dilute alkali. The resulting solution is filtered to isolate the pigment, which is then precipitated with dilute hydrochloric acid. The isolated precipitate is the sepia pigment. It is relatively chemically inert, which contributes to its longevity. Today, artificial dyes have mostly replaced natural sepia.\n[…]\nThough cuttlefish are rarely kept as pets, due in part to their fairly short life expectancy, the most commonly kept are Sepia officinalis and Sepia bandensis. Cuttlefish may fight or even eat each other if there is inadequate tank space for multiple individuals."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Peixe-voador",
      "descricao": "Peixe marinho da família Exocoetidae, que plana sobre a água com nadadeiras peitorais alongadas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O míssil francês Exocet, que ficou famoso na Guerra das Malvinas, tem o nome de que animal marinho?",
    "resposta": "Peixe-voador",
    "fonte": [
      "https://en.wikipedia.org/wiki/Exocet",
      "https://en.wikipedia.org/wiki/Flying_fish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Exocet",
        "situacao": "ok",
        "texto": "The Exocet (French pronunciation: [ɛɡzɔsɛt]) is a French-built anti-ship cruise missile whose various versions can be launched from surface vessels, submarines, helicopters and fixed-wing aircraft.\n[…]\nThe missile's name was given by Jean Guillot, then the technical director at Nord Aviation. It is the French word for flying fish, from the Latin exocoetus used for a \"fish that sleeps on the shore\" and itself from the Greek exṓkoitos (ἐξώκοιτος) in Hesychius of Alexandria, meaning \"out-bed\" or more loosely \"out-sleeping\".\n[…]\nIn 2017 the UK and France began work on the Stratus (missile family) as a replacement for the Exocet.\n[…]\nIn total, Argentina used six Exocet missiles against the Royal Navy.\n[…]\nThe incoming Exocet missile was spotted on Glamorgan and a turn was ordered to present the stern to the missile.\n[…]\nExocet missiles were used by Iraq mainly as part of the Tanker War; the Aérospatiale SA 321 Super Frelon, Dassault-Breguet Super Étendard and Dassault Mirage F1 were aircraft used by Iraq to launch the missiles.\n[…]\nDuring the Iran–Iraq War, on 17 May 1987, an Iraqi aircraft (identified as a Mirage F1, but was in fact a modified Dassault Falcon 50) fired two Exocet missiles at the U.S. frigate USS Stark. Both missiles struck the port side of the ship near the bridge. No weapons were fired in defence; the Phalanx CIWS remained in standby mode and the Mark 36 SRBOC countermeasures were not armed. Thirty-seven United States Navy sailors were killed and twenty-one were wounded.\n[…]\nFrance\n[…]\nGallery of photographs of various variants of the Exocet missile (in French)\n[…]\nPhotos of Exocet damage to USS Stark (in English)\n[…]\nTesting of Exocet MM-40 Block 3 (in English)\n[…]\nCSIS Missile Threat | Exocet (in English)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Flying_fish",
        "situacao": "ok",
        "texto": "The Exocoetidae are a family of saltwater ray-finned fish in the order Beloniformes, known colloquially as flying fish or flying cod, with about 64 species in seven genera. While they do not \"fly\" in the same way a bird does, flying fish can make powerful leaps out of the water where their long, wing-like paired fins act as aerofoils to generate lift and enable prolonged gliding for considerable d\n[…]\nBarbados is known as \"the land of the flying fish\" and the fish is one of the national symbols of the country. The French Exocet anti-ship missile is also named after them, as the missile can be launched from underwater, and take a low, sea-skimming trajectory before striking the targets.\n[…]\nThe term Exocoetidae is both the scientific name and the general name in Latin for a flying fish. The suffix -idae, common for indicating a family, follows the root of the Latin word exocoetus, a transliteration of the Ancient Greek name ἐξώκοιτος.\n[…]\nSpecies of genus Exocoetus have one pair of fins and  streamlined bodies to optimize for speed, while Cypselurus spp. have flattened bodies and two pairs of fins, which maximize their time in the air. From 1900 to the 1930s, flying fish were studied as possible models used to develop airplanes.\n[…]\nIn the Solomon Islands, the fish are caught while they are flying, using nets held from outrigger canoes. They are attracted to the light of torches. Fishing is done only when no moonlight is available.\n[…]\nDespite the change, flying fish remain a coveted delicacy.\n[…]\nThe oldest known fossil of a flying or gliding fish are those of the extinct family Thoracopteridae, dating back to the Middle Triassic, 235–242 million years ago. However, they are thought to be basal neopterygians and are not related to modern flying fish, with the wing-like pectoral fins being convergently evolved in both lineages.\n[…]\nFlying and gliding animals\n[…]\nFlying Fish, National Geographic Society"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/MBDA_Exocet",
        "situacao": "ok",
        "texto": "O Exocet (/ɛɡzɔsɛ/, do francês Exocoetidae, peixe-voador) é um míssil antinavio de construção francesa, fabricado pela empresa MBDA, que possui várias versões que podem ser lançadas a partir de navios, submarinos, helicópteros e aviões. Centenas desses mísseis foram lançados em combate durante os anos 1980.\n[…]\nUsado a partir de aeronaves Dassault-Breguet Super Étendard, o AM39 ganhou notoriedade durante a Guerra das Malvinas por ter causado o afundamento do destroyer Type 42 HMS Sheffield (D80) e do navio Atlantic Conveyor. O MM38, disparado a partir da terra por um lançador retirado de um navio, causou danos ao HMS Glamorgan.\n[…]\nO Exocet, em sua versão lançada do ar (AM.39), também foi intensamente utilizado durante a Guerra Irã-Iraque pela Força Aérea do Iraque. Acredita-se que entre 350 e 400 mísseis tenham sido adquiridos entre 1979 e 1988. No início do conflito os mísseis eram lançados de helicópteros Super Frelon. Posteriormente o Iraque arrendou 5 Super Étendard e a partir de 1984 passou a utilizar definitivamente o Mirage F.1 como plataforma de lançamento.\n[…]\nOs principais alvos dos mísseis eram petroleiros e plataformas petrolíferas iranianas, além de outros navios mercantes que faziam comércio com o Irã. Mas a vítima mais conhecida foi a fragata USS Stark, da Marinha dos EUA. O ataque ocorreu no dia 17 de maio de 1987 e não se conhece a verdadeira razão.\n[…]\n«Conflito das Malvinas segundo a Força Aérea Argentina»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Coral",
      "descricao": "Animal marinho colonial da classe Anthozoa, cujos esqueletos formam os recifes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Corais, anêmonas-do-mar e águas-vivas pertencem ao mesmo grande grupo de animais com células urticantes. Que filo é esse?",
    "resposta": "Cnidários",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cnidaria",
      "https://en.wikipedia.org/wiki/Coral"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cnidaria",
        "situacao": "ok",
        "texto": "Cnidaria ( nih-DAIR-ee-ə, ny-) is a phylum of animals containing over 11,000 species of aquatic invertebrates found both in freshwater and marine environments (predominantly the latter), including jellyfish, hydroids, sea anemones, corals and some of the smallest marine parasites.\n[…]\nCoral reefs form some of the world's most productive ecosystems. Common coral reef cnidarians include both anthozoans (hard corals, octocorals, anemones) and hydrozoans (fire corals, lace corals). The endosymbiotic algae of many cnidarian species are very effective primary producers, in other words converters of inorganic chemicals into organic ones that other organisms can use, and their coral hosts use these organic chemicals very efficiently.\n[…]\nIndeed, some continental Paleozoic cnidarians are thought to have inhabited salt lakes. A study even argued that fossil medusoids (some of which have been interpreted as freshwater by other studies) are \"restricted lagoonal facies where anoxia and hypersalinity fostered preservation\", and another one reinterpreted fossils of Essexella that had initially been interpreted as freshwater medusae from Mazon Creek as euryhaline semi-infaunal anemone.\n[…]\nIn molecular phylogenetics analyses from 2005 onwards, important groups of developmental genes show the same variety in cnidarians as in chordates. In fact cnidarians, and especially anthozoans (sea anemones and corals), retain some genes that are present in bacteria, protists, plants and fungi but not in bilaterians.\n[…]\nCnidaria - Guide to the Marine Zooplankton of south eastern Australia, Tasmanian Aquaculture & Fisheries Institute\n[…]\nCnidaria page at Tree of Life\n[…]\nFossil Gallery: Cnidarians Archived 2007-10-24 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Coral",
        "situacao": "ok",
        "texto": "Corals are colonial marine invertebrates within the subphylum Anthozoa of the phylum Cnidaria. They typically form compact colonies of many identical individual polyps. Coral species include the important reef builders that inhabit tropical oceans and secrete calcium carbonate to form a hard skeleton.\n[…]\nPresently, corals are classified as species of animals within the sub-classes Hexacorallia and Octocorallia of the class Anthozoa in the phylum Cnidaria. Hexacorallia includes the stony corals and these groups have polyps that generally have a 6-fold symmetry. Octocorallia includes blue coral and soft corals. Species of Octocorallia have polyps with an eightfold symmetry, with each polyp having eight tentacles and eight mesenteries.\n[…]\nMany corals, as well as other cnidarian groups such as sea anemones form a symbiotic relationship with a class of dinoflagellate algae, zooxanthellae of the genus Symbiodinium, which can form as much as 30% of the tissue of a polyp. Typically, each polyp harbors one species of alga, and coral species show a preference for Symbiodinium. Young corals are not born with zooxanthellae, but acquire the algae from the surrounding environment, including the water column and local sediment.\n[…]\nOver time, corals fragment and die, sand and rubble accumulates between the corals, and the shells of clams and other molluscs decay to form a gradually evolving calcium carbonate structure. Coral reefs are extremely diverse marine ecosystems hosting over 4,000 species of fish, massive numbers of cnidarians, molluscs, crustaceans, and many other animals.\n[…]\nRingstead Coral Bed\n[…]\nNOAA CoRIS – Coral Reef Biology\n[…]\nNOAA Office for Coastal Management – Fast Facts – Coral Reefs\n[…]\n\"What is a coral?\". Stanford microdocs project. Archived from the original on 2014-01-06. Retrieved 2017-02-04."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cnidaria",
        "situacao": "ok",
        "texto": "Cnidaria (grego: κνίδη knidē 'urtiga' + latim: aria, sufixo plural) é um filo de animais exclusivamente aquáticos, agrupando os organismos conhecidos pelo nome comum de cnidários, entre os quais estão as medusas e as alforrecas (ou águas-vivas), as caravelas, as anémonas-do-mar, os corais-moles e as hidras de água doce.[carece de fontes]?\n[…]\nOs espermatozoides de cnidária, diferentemente da maioria dos outros animais, não contém acrossomos. A oogênese ocorre de forma relativamente parecida. Uma célula de origem endodérmica se diferencia em oócito e passa a acumular vitelo, migrando para o interior da gônada. Dependendo da espécie e grupo, o oócito pode estar acompanhado de células produtoras de vitelo ou estar solitário imerso em matriz da mesogleia.\n[…]\nA reprodução assexuada ocorre na vasta maioria dos antozoários, embora existam espécies na qual não ocorre (por exemplo, Pseudocorynactis sp.). Esse tipo de reprodução é a responsável pela formação de grandes colônias e aglomerados de corais, coralimorfários, anêmonas, zoantídeos, gorgônias entre outros. Existe uma vasta quantidade de formas diferentes pelas qual a reprodução assexuada pode ocorrer e isto se deve em parte à grande capacidade de regeneração dos cnidários.\n[…]\nOs Cnidários, de uma forma geral, tem grande capacidade de regenerar tecidos e partes do corpo, ou mesmo um novo corpo. Isto é particularmente evidente diversas de suas formas de reprodução assexuada, como a laceração, laceração do pé e fragmentação, bem como na contínua predação que sofrem, por exemplo, os recifes de corais em seu ambiente natural. Dentre as formas de vida do filo, a forma polipoide apresenta maior potencial de regeneração.\n[…]\nO filo Cnidaria está dividido em sete classes de organismos atuais e mais uma de fósseis:\n[…]\n«Página Cnidaria» (em inglês). University of California, Irvine",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Cetáceos",
      "descricao": "Infraordem de mamíferos marinhos que reúne baleias, golfinhos e botos."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Estudos de DNA mostraram que baleias e golfinhos têm como parente vivo mais próximo que mamífero terrestre?",
    "resposta": "Hipopótamo",
    "distratores": [
      "Elefante",
      "Anta",
      "Porco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Whippomorpha",
      "https://en.wikipedia.org/wiki/Cetacea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Whippomorpha",
        "situacao": "ok",
        "texto": "Whippomorpha is a clade of Artiodactyla that contains all living cetaceans (whales) and Hippopotamidae. This makes it a crown group. Whippomorpha is a suborder within the order Artiodactyla (even-toed ungulates). The placement of Whippomorpha within Artiodactyla is a matter of some contention, as hippopotamuses were previously considered to be more closely related to Suidae (pigs) and Tayassuidae \n[…]\nEvidence for this includes the fact that the tooth enamel of Indohyus was considerably less worn than would be expected for an animal with an exclusively terrestrial diet. One of the most crucial facets of the discovery of Indohyus was the presence of a thickened auditory bulla, also known as an involucrum. This discovery was significant as the involucrum was a morphology thought previously to be exclusive to cetaceans, a synapomorphy. This feature irrefutably linked whales to raoellids.\n[…]\nThere is strong resemblance between the dentition of primitive cetaceans and primitive ungulates, which seemingly cements the position of Cetacea within Artiodactyla. Also, both cetaceans and artiodactyls have two distinct components in their ear, the involucrum and sigmoid process. Similar features are considered responsible for the ability of cetaceans to hear underwater.\n[…]\nCetaceans are revered for their immense size, intelligent and playful dispositions, displays of speed in water, and contributions to scientific research.\n[…]\nWhales have been kept in captivity by humans for research and entertainment for centuries. Particularly popular are killer whales. Conservation and animal rights organizations have been vehemently opposed to the captivity of these cetaceans. It is common for captive killer whales to display aggression toward other whales and their trainers. Bottlenose dolphins are also popular, due to their friendly behavior. They also fare better in captivity than other cetaceans."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cetacea",
        "situacao": "ok",
        "texto": "Cetaceans are marine mammals belonging to the infraorder Cetacea (), a secondarily aquatic clade under the order Artiodactyla that include whales, dolphins, porpoises and extinct groups such as Basilosaurus. Most cetaceans live in marine environments, particularly the pelagic zone, but some reside solely in brackish or fresh water. Having a cosmopolitan distribution, they can be found in some rive\n[…]\nThe cetacean skeleton is largely made up of dense cortical bone, which stabilizes the animal in the water. For this reason, the usual terrestrial compact bones, which are finely woven cancellous bone, are replaced with lighter and more elastic material. In many places, bone elements are replaced by cartilage and even fat, thereby improving their hydrostatic qualities. The ear and parts of the snout contain a high-density bone structure that is exclusive to cetaceans and resembles porcelain.\n[…]\nIn cetaceans, evolution in the water has caused changes to the head that have modified brain shape such that the brain folds around the insula and expands more laterally than in terrestrial mammals. As a result, the cetacean prefrontal cortex (compared to that in humans) rather than frontal is laterally positioned. The neocortex of many cetaceans is home to elongated spindle neurons that, prior to 2019, were known only in hominids.\n[…]\nCetaceans have lungs, which means that they breathe air. An individual can last without a breath from a few minutes to over two hours depending on the species. Whales are deliberate breathers: they must be awake to inhale and exhale. When stale air, warmed from the lungs, is exhaled, it condenses as it meets colder external air. As with a terrestrial mammal breathing out on a cold day, a small cloud of 'steam' appears.\n[…]\n\"Cetaceans\". Encyclopedia of Earth.\n[…]\nScottish Cetacean Research & Rescue – see page on Taxonomy\n[…]\nEIA Cetacean campaign: Reports and latest info."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Whippomorpha",
        "situacao": "ok",
        "texto": "Whippomorpha é um clado que contém os cetáceos (baleias, golfinhos, etc.) e os seus parentes (em termos filogenéticos) mais próximos, os hipopótamos. O clado foi proposto por Waddell et al. (1999). É definido como um grupo coroa, incluindo todas as espécies descendentes do mais recente antepassado comum do hipopótamo-comum e do golfinho-roaz. Seria, portanto, uma subdivisão dos Cetartiodactyla (qu\n[…]\nNão é ainda claro como é que as atuais baleias e hipopótamos partilham um antepassado comum tão próximo, mas há forte evidência genética de que os cetáceos tenham evoluído a partir dos Artiodactyla, fazendo destes um agrupamento parafilético.\n[…]\nWhippomorpha é uma palavra formada por fragmentos vocabulares do inglês, nomeadamente das palavras baleia e hipopótamo (wh[ale] + hippo[potamus]) e do grego (μορφή, morphos = forma). Têm sido feitas tentativas no sentido de renomear o clado de Cetancodonta mas a forma Whippomorpha tem precedência.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Náutilo",
      "descricao": "Cefalópode de concha externa espiralada e dividida em câmaras (Nautilus pompilius)."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O submarino do Capitão Nemo, em Vinte Mil Léguas Submarinas, de Júlio Verne, tem o mesmo nome de que molusco de concha espiralada?",
    "resposta": "Náutilo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Seas",
      "https://en.wikipedia.org/wiki/Nautilus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Seas",
        "situacao": "ok",
        "texto": "Twenty Thousand Leagues Under the Seas (French: Vingt Mille Lieues sous les mers) is a science fiction adventure novel by the French writer Jules Verne. It was originally serialised from March 1869 to June 1870 in Pierre-Jules Hetzel's French fortnightly periodical, the Magasin d'éducation et de récréation. A deluxe octavo edition, published by Hetzel in November 1871, included 111 illustrations b\n[…]\nThe book was widely acclaimed on its release, and remains so; it is regarded as one of the premier adventure novels and one of Verne's greatest works, along with Around the World in Eighty Days, Journey to the Center of the Earth and Michael Strogoff. Its depiction of Captain Nemo's submarine, Nautilus, is regarded as ahead of its time, as it accurately describes many features of modern submarines, which in the 1860s were comparatively primitive vessels.\n[…]\nCaptain Nemo, the designer and captain of Nautilus\n[…]\nBefore their departure, the professor eavesdrops on Nemo and overhears him calling out in anguish, \"O almighty God! Enough! Enough!\" Aronnax immediately joins his companions as they carry out their escape plans, but as they board the submarine's skiff they realise Nautilus has seemingly blundered into the ocean's deadliest whirlpool, the Moskstraumen (more commonly known as the Maelstrom). They escape and find refuge on an island off the coast of Norway.\n[…]\nVerne took the name \"Nautilus\" from one of the earliest successful submarines, built in 1800 by Robert Fulton, who also invented the first commercially successful steamboat. Fulton named his submarine after a marine mollusk, the chambered nautilus. As noted above, Verne also studied a model of the newly developed French Navy submarine Plongeur at the 1867 Exposition Universelle, which guided him in his development of the novel's Nautilus."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nautilus",
        "situacao": "ok",
        "texto": "A nautilus (from Latin  nautilus 'sails like a vessel'; from Ancient Greek  ναυτίλος (nautílos) 'seaman, sailor') is any of the various species within the cephalopod family Nautilidae. This is the sole extant family of the superfamily Nautilaceae, suborder Nautilina, order Nautilida, and subclass Nautiloidea.\n[…]\nIt comprises nine living species in two genera, the type of which is the genus Nautilus. Though it more specifically refers to the species Nautilus pompilius, the name chambered nautilus is also used for any of the Nautilidae. All are protected under CITES Appendix II. Depending on species, adult shell diameter is between 10 and 25 cm (4 and 10 inches).\n[…]\nIn a study in 2008, a group of nautiluses (N. pompilius) were given food as a bright blue light flashed until they began to associate the light with food, extending their tentacles every time the blue light was flashed. The blue light was again flashed without the food 3 minutes, 30 minutes, 1 hour, 6 hours, 12 hours, and 24 hours later. The nautiluses continued to respond excitedly to the blue light for up to 30 minutes after the experiment.\n[…]\nNautiluses usually inhabit depths of several hundred metres. It has long been believed that nautiluses rise at night to feed, mate, and lay eggs, but it appears that, in at least some populations, the vertical movement patterns of these animals are far more complex. The greatest depth at which a nautilus has been sighted is 703 m (2,306 ft) (N. pompilius). Implosion depth for nautilus shells is thought to be around 800 m (2,600 ft).\n[…]\nGenus Nautilus\n[…]\nNautilus Pompilius, a Russian rock band\n[…]\nNautilus (fictional submarine) from Jules Verne's classic 1870 science-fiction novel Twenty Thousand Leagues Under the Seas, describing the voyage of Captain Nemo's Nautilus submarine.\n[…]\nCephBase: Nautilidae"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinte_Mil_L%C3%A9guas_Submarinas",
        "situacao": "ok",
        "texto": "Vinte Mil Léguas Submarinas (no original, em francês: Vingt mille lieues sous les mers) é uma das obras literárias mais famosas do escritor Júlio Verne. Originalmente publicada em forma de uma série no periódico Magasin d'Éducation et de Récréation, de março de 1869 a junho de 1870, teve uma edição ilustrada publicada em novembro de 1871, com 111 ilustrações por Alphonse de Neuville e Édouard Riou\n[…]\nEm Vinte Mil Léguas Submarinas, Verne concebe um submarino, o Náutilus, completamente autônomo do meio terrestre e movido somente à electricidade. O engenheiro e dono de tal feito é o capitão Nemo que, com sua tripulação, cortou qualquer relação com as nações e com a humanidade. Vivem somente do que o mar lhes dá. A alimentação completa, a matéria prima que necessitam para a produção de electricidade e das vestimentas e até os escafandros vêm do mar.\n[…]\nMas a humanidade, não conhecendo a existência desta obra prima de engenharia que o capitão Nemo criou em segredo, assume, por meio do pensamento das melhores mentes da época — como a do professor Aronnax — quando esse começa a provocar desastres em navios e embarcações em todos os oceanos, que ele se trata de um narval, um cetáceo gigante. Em face aos prejuízos causados pela criatura, é decretada sua caça.\n[…]\nDurante vários meses, o Náutilus percorreu dezenas de milhares de quilômetros sob as águas, passando por variadíssimos lugares e peripécias. O título do livro se refere a essa distância, usando a unidade arcaica légua.\n[…]\nO Abismo Negro (1979) — filme de Gary Nelson, dos Estúdios Disney, com uma versão futurística do Capitão Nemo (Dr. Hains Reinhardt).\n[…]\n«Vinte mil léguas submarinas, versão de áudio» (em francês).\n[…]\nVinte Mil Léguas Submarinas (em PDF) no site Biblioteca Mundial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Golfinho-rotador",
      "descricao": "Pequeno golfinho tropical (Stenella longirostris), famoso pelos saltos em que gira no ar."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A Baía dos Golfinhos, onde grupos de golfinhos-rotadores descansam quase todas as manhãs, fica em que arquipélago brasileiro?",
    "resposta": "Fernando de Noronha",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Fernando_de_Noronha",
      "https://en.wikipedia.org/wiki/Spinner_dolphin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Fernando_de_Noronha",
        "situacao": "ok",
        "texto": "Fernando de Noronha é um arquipélago brasileiro do estado de Pernambuco. Formado por 21 ilhas, ilhotas e rochedos de origem vulcânica, ocupa uma área total de 26 km² — dos quais 17 km² são da ilha principal — e se situa no Oceano Atlântico a nordeste do Brasil continental, distando 350 km do Rio Grande do Norte e 545 km da capital pernambucana, Recife. O centro comercial da ilha é o núcleo urbano \n[…]\nA ilha de Fernando de Noronha era o ponto de coleta central desta rede. O pau-brasil, continuamente colhido pelos índios costeiros e entregues aos vários armazéns litorâneos, era enviado para o armazém central no arquipélago, que era visitado por um navio de transporte maior que levava as cargas coletadas de volta para a Europa.\n[…]\nEm 1990, nasceu o Projeto Golfinho Rotador pela necessidade de preservar os golfinhos-rotadores que frequentam a Baía dos Golfinhos em Fernando de Noronha, sendo coordenado pelo Centro Golfinho Rotador e patrocinado oficialmente pela Petrobras por meio do Programa Petrobras Socioambiental.\n[…]\nEntre as suas praias mais famosas, estão a Baía de Santo Antônio, a Praia da Conceição, a Praia do Boldró, a Praia da Cacimba do Padre, a Baía dos Porcos, a Baía do Sancho, a Baía dos Golfinhos, a Ponta da Sapata, entre outras. A Baía do Sancho, em Fernando de Noronha, foi eleita a melhor praia do mundo pelos usuários do TripAdvisor.\n[…]\nAté 2025, a produção de energia no arquipélago de Fernando de Noronha é realizada na usina de Tubarão, que utiliza biodiesel. Em novembro de 2025, é inaugurada a primeira usina solar flutuante do arquipélago, construída pela Neoenergia (subsidiária da Iberdrola no Brasil) e pela Companhia Pernambucana de Saneamento (Compesa). Essa usina está localizada na superfície do reservatório de Xaréu. Possui uma potência de 622 kWp e uma geração anual estimada de 1.083 MWh.\n[…]\nFernando de Noronha no TripAdvisor\n[…]\nFernando de Noronha no IBGE"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spinner_dolphin",
        "situacao": "ok",
        "texto": "The spinner dolphin (Stenella longirostris) is a small dolphin found in off-shore tropical waters around the world. It is famous for its acrobatic displays in which it rotates around its longitudinal axis as it leaps through the air. It is a member of the family Delphinidae of toothed whales.\n[…]\nGray's or Hawaiian spinner dolphin (S. l. longirostris), from the central Pacific Ocean around Hawaii but represents a mixture of broadly similar subtypes found worldwide.\n[…]\nSome populations of spinner dolphin found in the eastern Pacific have backwards-facing dorsal fins, and males can have dorsal humps and upturned caudal flukes.\n[…]\nIn addition, the spinner dolphin is covered by Memorandum of Understanding for the Conservation of Cetaceans and Their Habitats in the Pacific Islands Region (Pacific Cetaceans MoU) and the Memorandum of Understanding Concerning the Conservation of the Manatee and Small Cetaceans of Western Africa and Macaronesia (Western African Aquatic Mammals MoU). Spinner dolphins are susceptible to disease and two of the recorded diseases within them are toxoplasmosis and cetacean morbillivirus.\n[…]\nSpinner dolphins in Hawaii receive multiple daily visits to their near-shore resting grounds, with boats taking people out daily to snorkel and interact with the local dolphin population. Such activities are increasingly coming under criticism on the grounds of possible harm to the dolphins, and efforts are being made both to educate the public in order to minimise human impact on the dolphins, and to bring in regulations to govern these activities.\n[…]\nHawaiian Spinner Dolphins\n[…]\nSpinner Dolphins in the Seychelles\n[…]\nRed Sea Spinner Dolphins\n[…]\nBlueVoice.org - The World of Spinner Dolphins\n[…]\nVoices in the Sea - Sounds of the Spinner Dolphin Archived 9 July 2014 at the Wayback Machine"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Âmbar-gris",
      "descricao": "Substância cerosa e rara, usada na perfumaria, formada no sistema digestivo do cachalote."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O âmbar-gris, substância rara e valiosa na perfumaria, se forma no sistema digestivo de que animal marinho?",
    "resposta": "Cachalote",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ambergris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ambergris",
        "situacao": "ok",
        "texto": "Ambergris ( or ; Latin: ambra grisea; Old French: ambre gris), ambergrease, or grey amber is a solid, waxy, flammable substance of a dull grey or blackish colour produced in the digestive system of sperm whales. Freshly produced ambergris has a marine, faecal odour. It acquires a sweet, earthy scent as it ages, commonly likened to the fragrance of isopropyl alcohol without the vaporous chemical as\n[…]\nAmbergris has been highly valued by perfume makers as a fixative that allows the scent to last much longer, although it has been mostly replaced by synthetic ambroxide. It is sometimes used in cooking.\n[…]\nThe archaic alternate spelling \"ambergrease\" arose as an eggcorn from the phonetic pronunciation of \"ambergris\", encouraged by the substance's waxy texture.\n[…]\nAmbergris has been mostly known for its use in creating perfume and fragrance much like musk. Perfumes based on ambergris still exist. The aroma is described as (characteristically) ambergris, animal, marine, seashore.\n[…]\nAncient Egyptians burned ambergris as incense, while in modern Egypt ambergris is used for scenting cigarettes. Use as an incense can be seen in the John Singer Sargent painting Fumée d'Ambre Gris, painted in Tangiers and Paris in 1880.\n[…]\nThe ancient Chinese called the substance \"dragon's spittle fragrance\". During the Black Death in Europe, people believed that carrying a ball of ambergris could help prevent them from contracting plague. This was because the fragrance covered the smell of the air which was believed to be a cause of plague.\n[…]\nBorschberg, Peter (April 2004). Pinto, Carla Alferes (ed.). \"O comércio de âmbar asiático no início da época moderna (séculos XV–XVIII)\" [The Asiatic Ambergris trade in the early modern period (15th to 18th century)]. Oriente (in Portuguese). 8. Lisbon: Fundação Oriente: 3–25. montalvoeascinciasdonossotempo.blogspot, accessed 21 August 2015\n[…]\nOn the chemistry and ethics of Ambergris"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%82mbar_cinza",
        "situacao": "ok",
        "texto": "Âmbar cinza,  âmbar-cinzento, âmbar-gris, âmbar-branco ou âmbar de baleia, é uma substância sólida, gordurosa e inflamável, em geral de cor cinza fosco ou enegrecido, podendo contudo ter cor castanho escuro ou ser variegada com aspecto marmóreo. Em fresco tem cheiro fecal, mas com a exposição ao ar e à luz ganha um odor peculiar doce e terroso, com algumas semelhanças ao do álcool isopropílico.\n[…]\nO âmbar cinza forma-se no intestino do cachalote (Physeter macrocephalus Linnaeus, 1758), a única espécie que se conhece que produz este material em quantidade apreciável, embora pequenas quantidades de uma matéria semelhante tenham sido encontradas nos intestinos da baleia-nariz-de-garrafa-do-norte (Hyperoodon ampullatus Forster, 1770 - também conhecido como botinhoso), uma espécie de zifiídeo aparentada do cachalote.\n[…]\nQuando o desenvolvimento da baleação provou que ele aparecia no intestino dos cachalotes, tal presença foi inicialmente explicada como sendo pedaços não digeridos de âmbar engolido pelo animal, que o procuraria no mar pelas suas propriedades curativas.\n[…]\nPara além dos restos das peças bucais e outras impurezas de origem alimentar (já foram encontrados pelos de foca o que parece indiciar que a alimentação dos cachalotes não se restringe aos cefalópodes), o âmbar gris contém em geral um elevado teor de cloreto de sódio e pequenas quantidades de ácido succínico e de ácido benzóico. Estão também presentes traços de numerosas outras substâncias orgânicas odorantes, incluindo ácidos gordos complexos, ésteres e múltiplos compostos aromáticos.\n[…]\nCom o desaparecimento da caça comercial ao cachalote, e com as questões jurídicas resultantes da protecção daquele animal no âmbito da Convenção CITES, a indústria perfumeira deixou quase por completo de utilizar o âmbar pardo para recorrer a sucedâneos escolhidos de entre produtos de síntese com características similares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Celacanto",
      "descricao": "Peixe de nadadeiras lobadas do gênero Latimeria, conhecido antes só por fósseis."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em 1938, um celacanto, peixe que se julgava extinto havia milhões de anos, foi pescado na costa de que país?",
    "resposta": "África do Sul",
    "distratores": [
      "Austrália",
      "Japão",
      "Brasil"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coelacanth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coelacanth",
        "situacao": "ok",
        "texto": "Coelacanths (  SEE-lə-kanth) are an ancient group of lobe-finned fish (Sarcopterygii) in the class Actinistia. As sarcopterygians, they are more closely related to lungfish and tetrapods (the terrestrial vertebrates including living amphibians, reptiles, birds and mammals) than to ray-finned fish. There is only a single living genus, Latimeria, with two described species.\n[…]\nThe first living species, Latimeria chalumnae, the West Indian Ocean coelacanth, was described from specimens fished off the coast of South Africa from 1938 onward; they are now also known to inhabit the seas around the Comoro Islands off the east coast of Africa. The second species, Latimeria menadoensis, the Indonesian coelacanth, was discovered in the late 1990s, which inhabits the seas of Eastern Indonesia, from Manado to Papua.\n[…]\nHowever, studies of fossil coelacanths have shown that coelacanth body shapes (and their niches) were much more diverse than what was previously thought, and often differed significantly from Latimeria.\n[…]\nOn 22 December 1938, the first Latimeria specimen was found off the east coast of South Africa, off the Chalumna River (now Tyolomnqa). Museum curator Marjorie Courtenay-Latimer discovered the fish among the catch of a local fisherman. Courtenay-Latimer contacted a Rhodes University ichthyologist, J. L. B.\n[…]\nSince 1938, West Indian Ocean coelacanth have been found in the Comoros, Kenya, Tanzania, Mozambique, Madagascar, in iSimangaliso Wetland Park, and off the South Coast of KwaZulu-Natal in South Africa.\n[…]\nDuring the Paleozoic and Mesozoic, coelacanths had a global distribution, with remains having been found on every continent except Antarctica. The two extant Latimeria species, the West Indian Ocean coelacanth and the Indonesian coelacanth, are restricted to the southern and eastern coasts of Africa and northern Indonesia, respectively."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Actinistia",
        "situacao": "ok",
        "texto": "Os Actinistia são uma classe antiga de peixes de nadadeiras lobadas (Sarcopterygii) tambem conhecido como Celacantos. Como osSarcopterygii, eles são mais intimamente relacionados aos peixes pulmonados e tetrápodes (os vertebrados terrestres, incluindo anfíbios, répteis, aves e mamíferos vivos) do que aos peixes de nadadeiras raiadas. Existe apenas um único gênero vivo, Latimeria, com duas espécies\n[…]\nA primeira espécie viva, Latimeria chalumnae, o celacanto do Oceano Índico Ocidental, foi descrita a partir de espécimes pescados na costa da África do Sul a partir de 1938; sabe-se agora que também habitam os mares em torno do Arquipélago das Comores, ao largo da costa leste da África. A segunda espécie, Latimeria menadoensis, o celacanto indonésio, foi descoberta no final da década de 1990, habitando os mares do leste da Indonésia, de Manado a Papua.\n[…]\nEm 22 de dezembro de 1938, o primeiro espécime de Latimeria foi encontrado na costa leste da África do Sul, no rio Chalumna (atual Tyolomnqa). A curadora do museu, Marjorie Courtenay-Latimer, descobriu o peixe entre a pesca de um pescador local.\n[…]\nCourtenay-Latimer contatou um ictiólogo da Universidade de Rhodes, James Leonard Brierley Smith, enviando-lhe desenhos do peixe, e ele confirmou a importância do peixe com um famoso telegrama: \"Esqueleto e brânquias mais importantes preservados = Peixe descrito.\" Sua descoberta mais de 60 milhões de anos após sua suposta extinção faz do celacanto o exemplo mais conhecido de um táxon Lázaro, um táxon ou linha evolutiva que parece ter desaparecido do registro fóssil apenas para reaparecer muito tempo depois.\n[…]\nDesde 1938, celacantos do Oceano Índico Ocidental foram encontrados nas Comores, Quênia, Tanzânia, Moçambique, Madagascar, no Parque da zona húmida de iSimangaliso e ao largo da Costa Sul de Cuazulo-Natal na África do Sul.\n[…]\nAnatomy of the coelacanth by PBS (Adobe Flash required)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Celacanto",
      "descricao": "Peixe de nadadeiras lobadas do gênero Latimeria, conhecido antes só por fósseis."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Antes de ser encontrado vivo, o celacanto era conhecido só por fósseis. Os cientistas achavam que ele tinha sumido na mesma época que quais animais famosos?",
    "resposta": "Dinossauros",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coelacanth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coelacanth",
        "situacao": "ok",
        "texto": "Coelacanths (  SEE-lə-kanth) are an ancient group of lobe-finned fish (Sarcopterygii) in the class Actinistia. As sarcopterygians, they are more closely related to lungfish and tetrapods (the terrestrial vertebrates including living amphibians, reptiles, birds and mammals) than to ray-finned fish. There is only a single living genus, Latimeria, with two described species.\n[…]\nHowever, studies of fossil coelacanths have shown that coelacanth body shapes (and their niches) were much more diverse than what was previously thought, and often differed significantly from Latimeria.\n[…]\nLiving Latimeria coelacanths are ovoviviparous, meaning that the female retains the fertilized eggs within her body while the embryos develop during a gestation period of five years. Typically, females are larger than the males; their scales and the skin folds around the cloaca differ. The male coelacanth has no distinct copulatory organs, just a cloaca, which has a urogenital papilla surrounded by erectile caruncles. It is hypothesized that the cloaca everts to serve as a copulatory organ.\n[…]\nFemale Latimeria coelacanths give birth to live young, called \"pups\", in groups of between five and 25 fry at a time; the pups are capable of surviving on their own immediately after birth. Their reproductive behaviors are not well known, but it is believed that they are not sexually mature until after 20 years of age.\n[…]\nLiving Latimeria coelacanths are considered a poor source of food for humans and likely most other fish-eating animals, as coelacanth flesh has large amounts of oil, urea, wax esters, and other compounds that give the flesh a distinctly unpleasant flavor, make it difficult to digest, and can cause diarrhea. Their scales themselves secrete mucus, which combined with the excessive oil their bodies produce, make coelacanths a slimy food."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Actinistia",
        "situacao": "ok",
        "texto": "Os Actinistia são uma classe antiga de peixes de nadadeiras lobadas (Sarcopterygii) tambem conhecido como Celacantos. Como osSarcopterygii, eles são mais intimamente relacionados aos peixes pulmonados e tetrápodes (os vertebrados terrestres, incluindo anfíbios, répteis, aves e mamíferos vivos) do que aos peixes de nadadeiras raiadas. Existe apenas um único gênero vivo, Latimeria, com duas espécies\n[…]\nO celacanto (mais precisamente, o gênero atual Latimeria) é frequentemente considerado um exemplo de \"fóssil vivo\" na ciência popular porque era considerado o único membro remanescente de um táxon conhecido apenas por fósseis (um relicto biológico), evoluindo um plano corporal semelhante à sua forma atual há aproximadamente 400 milhões de anos.\n[…]\nA palavra celacanto é uma adaptação do latim moderno Cœlacanthus ('espinho oco'), do grego antigo κοῖλ-ος (koilos, 'oco') e ἄκανθ-α (akantha, 'espinho'), referindo-se aos raios ocos da barbatana caudal do primeiro espécime fóssil descrito e nomeado por Louis Agassiz em 1839, pertencente ao gênero Coelacanthus. O nome do gênero Latimeria homenageia Marjorie Courtenay-Latimer, que descobriu o primeiro espécime.\n[…]\nCourtenay-Latimer contatou um ictiólogo da Universidade de Rhodes, James Leonard Brierley Smith, enviando-lhe desenhos do peixe, e ele confirmou a importância do peixe com um famoso telegrama: \"Esqueleto e brânquias mais importantes preservados = Peixe descrito.\" Sua descoberta mais de 60 milhões de anos após sua suposta extinção faz do celacanto o exemplo mais conhecido de um táxon Lázaro, um táxon ou linha evolutiva que parece ter desaparecido do registro fóssil apenas para reaparecer muito tempo depois.\n[…]\nO tecido mole dos celacantos é conhecido principalmente a partir de Latimeria, o gênero relicto ainda existente.\n[…]\n'Living fossil' coelacanth genome sequenced BBC News Science & Environment; 17 April 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Enguia-europeia",
      "descricao": "Peixe serpentiforme (Anguilla anguilla) que vive em rios europeus e migra ao oceano para desovar."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A enguia-europeia passa a vida em rios da Europa, mas atravessa o Atlântico para se reproduzir em que mar?",
    "resposta": "Mar dos Sargaços",
    "distratores": [
      "Mar do Caribe",
      "Mar do Norte",
      "Mar Mediterrâneo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/European_eel",
      "https://en.wikipedia.org/wiki/Sargasso_Sea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/European_eel",
        "situacao": "ok",
        "texto": "The European eel (Anguilla anguilla) is a species of eel. Their life history was a mystery for thousands of years, and mating in the wild has not yet been observed. The five stages of their development were originally thought to be different species. They are critically endangered due to hydroelectric dams, overfishing by fisheries on coasts for human consumption, and parasites.\n[…]\nThe European eel is a critically endangered species. Numbers of eels reaching Europe is thought to have declined by around 90% (possibly even 98%) since the 1970s. Contributing factors include overfishing, parasites such as Anguillicola crassus, barriers to migration such as hydroelectric dams, and natural changes in the North Atlantic oscillation, Gulf Stream, and North Atlantic drift. Recent work suggests that polychlorinated biphenyl (PCB) pollution may be a factor in the decline.\n[…]\nParasites such as from the genus Dactylogyrus have also been observed in necropsies, and some symptoms of parasitic infections in European eels are white spots, mucus increase, fin fraying, rubbing infected spots against the enclosure, respiratory distress, and lethargy. These parasites are best treated with salt solutions or formaldehyde solutions.\n[…]\nThe exportation of European Eels has been restricted since 2010, yet on average 44% of eel sales in the United States consists of these eels. Eel aquaculture is most prominent in Japan, yet China, Scandinavia, Europe, Australia, Morocco, and Taiwan also participate in this practice.\n[…]\nEel breeding programs initiated by humans have been unsuccessful thus far and therefore the entire industry is dependent on the number of eels spawning in the wild, leaving it unsustainable and vulnerable to the factors causing European Eels to be critically endangered.\n[…]\nMedia related to Anguilla anguilla at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sargasso_Sea",
        "situacao": "ok",
        "texto": "The Sargasso Sea () is a region of the Atlantic Ocean bounded by four currents forming an ocean gyre. It is the only named sea without land boundaries. It is distinguished from other parts of the Atlantic Ocean by its characteristic brown Sargassum seaweed and  calm blue waters.\n[…]\nPortuguese navigators had reached the Sargasso Sea (western North Atlantic region), naming it after the Sargassum seaweed growing there (sargaço or sargasso in Portuguese). Later in 1492, Christopher Columbus wrote about seaweed that he feared would trap his ship and potentially hide shallow waters that could run them aground, as well as a lack of wind that he feared would trap them.\n[…]\nThe 1920–1922 Dana expeditions, led by Johannes Schmidt, determined that the European eel's breeding sites were in the Sargasso Sea.\n[…]\nIt is also believed that after hatching, young loggerhead sea turtles use currents, such as the Gulf Stream, to travel to the Sargasso Sea, where they use the sargassum as cover from predators until they are mature. The sargassum fish is a species of frogfish specially adapted to blend in among the sargassum seaweed. Millions of European eel babies are born there and then make a three-year journey back to UK waters; many seabird species also fly and feed across it on their way to Britain.\n[…]\nThe Sargasso Sea, like many unique ocean ecosystems, is under various threats, such as industrial-scale fishing, plastic waste pollution, oil drilling, and deep-sea mining. Owing to surface currents, the Sargasso accumulates a high concentration of non-biodegradable plastic waste. The area contains the huge North Atlantic garbage patch. Several nations and nongovernmental organizations have united to protect the Sargasso Sea."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anguilla_anguilla",
        "situacao": "ok",
        "texto": "Anguilla anguilla (Linnaeus, 1758) é uma espécie de enguia europeia que se reproduz no Mar dos Sargaços. É uma espécie de peixe eurialino (suporta variações acentuadas do nível de sal na água) e catadrómico (cresce no rio e desova no mar). Os adultos migram para o Mar dos Sargaços morrendo após a reprodução. As larvas regressam às zonas costeiras onde se metamorfoseiam em enguias de vidro que migr\n[…]\nDois grupos de enguias derivam da espécie ancestral, a Anguilla ancestralis: as dezassete espécies modernas da bacia Indo-Pacífica e duas do Atlântico. Todas a enguias mantiveram o mesmo ciclo de vida: nascem em águas quentes marinhas, vivem e morrem em água doce. A Anguilla atlantidis surgiu no Mar dos Sargaços, no Oceano Atlântico primordial, que era menor do que agora.\n[…]\nEstas enguias atingiam à deriva as costas Norte-Americana e Europeia, do que resultaram a enguia norte-americana (Anguilla rostrata) e a enguia europeia (Anguilla anguilla), que diferem apenas quanto ao número de vértebras (as europeias possuem cento e quinze vértebras e as norte-americanas cento e sete). A expansão do Oceano Atlântico aumentou a distância entre a costa Europeia e o Mar dos Sargaços, tendo a enguia europeia que regressar ao Mar dos Sargaços para  procriar.\n[…]\nMigradora catádroma, a enguia tem dois períodos de vida distintos: um no mar e outro nas águas doces ou interiores. Em Portugal, a entrada nos estuários parece verificar-se ao longo de todo o ano. Habita preferencialmente em locais de águas bem oxigenadas e pouco frias, com fundos de areia, lodosos ou com densa vegetação submersa. A enguia passa quase toda a sua fase adulta nos rios e estuários europeus, fixando-se os machos nos estuários e as fêmeas mais acima, migrando para montante.\n[…]\nAnguilliformes\n[…]\nColombo, G., Grandi, G., and Rossi, R. (1984) Gonad differentiation and body growth in Anguilla anguilla L, Journal of Fish Biology 24, 215-228.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Pérola",
      "descricao": "Gema orgânica formada dentro de ostras e outros moluscos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Quando um corpo estranho entra numa ostra, ela o envolve em camadas de que substância brilhante, formando uma pérola?",
    "resposta": "Nácar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pearl",
      "https://en.wikipedia.org/wiki/Nacre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pearl",
        "situacao": "ok",
        "texto": "A pearl is a hard, shiny object produced within the soft tissue (specifically the mantle) of a living shelled mollusk. Like the shell of a mollusk, a pearl is composed of calcium carbonate (mainly aragonite or a mixture of aragonite and calcite) in a crystalline form, which is deposited in concentric layers. More commercially valuable pearls are perfectly round and smooth, but many other shapes, k\n[…]\nA farm in the Gulf of California, Mexico, is culturing pearls from the black lipped Pinctada mazatlanica oysters and the rainbow-lipped Pteria sterna oysters. Also called Concha Nácar, the pearls from these rainbow-lipped oysters fluoresce red under ultraviolet light.\n[…]\nPearls were one of the attractions that drew Julius Caesar to Britain. They are, for the most part, freshwater pearls from mussels. Pearling was banned in the U.K. in 1998 due to the endangered status of river mussels. Discovery and publicity about the sale for a substantial sum of the Abernethy pearl in the River Tay had resulted in the heavy exploitation of mussel colonies during the 1970s and 80s by weekend warriors.\n[…]\nIf no nucleus is present, but irregular and small dark inner spots indicating a cavity are visible, combined with concentric rings of organic substance, the pearl is likely a cultured freshwater. Cultured freshwater pearls can often be confused with natural pearls, which present as homogeneous pictures that continuously darken toward the surface of the pearl. Natural pearls will often show larger cavities where organic matter has dried out and decomposed.\n[…]\nGiga Pearl, largest certified pearl\n[…]\nLa Pelegrina pearl\n[…]\nPearl of Lao Tzu\n[…]\nPearl of Kuwait\n[…]\nPearl of Puerto, largest pearl in the world\n[…]\nPearl powder, used in Traditional Chinese Medicine\n[…]\nThe Pearl (novella), a novella by John Steinbeck\n[…]\nDoes Harvesting a Pearl Kill the Oyster? Also, how to identify a fake pearl (Sam Westreich, PhD, Medium.com, August 19, 2021)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nacre",
        "situacao": "ok",
        "texto": "Nacre ( NAY-kər, also  NAK-rə), also known as mother-of-pearl, is an organic–inorganic composite material produced by some molluscs as an inner shell layer. It is also the material of which pearls are composed. It is strong, resilient, and iridescent.\n[…]\nBows of stringed instruments such as the violin and cello often have mother-of-pearl inlay at the frog. It is traditionally used on saxophone keytouches, as well as the valve buttons of trumpets and other brass instruments. The Middle Eastern goblet drum (darbuka) is commonly decorated by mother-of-pearl.\n[…]\nAs the best example of \"Charu and Karu art of Bengal,\" the former Chief Minister of West Bengal, Dr. Bidhan Chandra Roy, sent Manu's artwork, \"Gandhiji's Noakhali Abhiyan\", to the United States. Numerous figures, such as Satyajit Ray, Bidhan Chandra Roy, Barrister Subodh Chandra Roy, Subho Tagore, Humayun Kabir, Jehangir Kabir, as well as his elder brother Annada Munshi, were among the patrons of his works of art. \"Indira Gandhi\" was one of his famous mother of pearl works of art.\n[…]\nHe is credited with portraying Tagore in various creative stances that were skillfully carved into metallic plates. His cousin Pratip Munshi was also a mother-of-pearl artist.\n[…]\nMother-of-pearl buttons are used in clothing either for functional or decorative purposes. The Pearly Kings and Queens are an elaborate example of this.\n[…]\nMother-of-pearl is sometimes used to make spoon-like utensils for caviar (i.e. caviar servers) so as to not spoil the taste with metallic spoons.\n[…]\nMother-of-pearl carving in Bethlehem\n[…]\nObjects with mother-of-pearl in the Staten Island Historical Society Online Collections Database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A9rola",
        "situacao": "ok",
        "texto": "Uma pérola ou perla (também designada por margarita) é um material orgânico duro e geralmente esférico produzido por alguns moluscos, as ostras e mexilhões, em reação a corpos estranhos que invadem os seus organismos, como vermes ou grãos de areia. É valorizada como gema e trabalhada em joalharia. A pérola é envolvida naturalmente em nácar e bicarbonato de cálcio produzidos pela ostra.\n[…]\nAs pérolas também podem ser obtidas de forma artificial, através de cultivo, para isso, insere-se no interior da ostra perlífera, entre o manto e a concha, um objeto minúsculo, causando uma pequena inflamação. É o envolver desse objeto com sucessivas camadas de madrepérola que forma a pérola.\n[…]\nAs pérolas têm que ser guardadas separadamente das outras peças, envolvidas em tecido. Limpe-as com um pano úmido e evite produtos químicos da casa, como por exemplo, produtos para os cabelos, cosméticos e perfumes, pois tiram o brilho das pérolas\n[…]\nGrupo: Pérola;\n[…]\nAs pérolas dos Mares do Sul (Pacífico) são as maiores e mais raras de todas.\n[…]\nAs pérolas negras ou Pérolas do Taiti podem ter um tom cinza claro ou um arco-íris (típico da madrepérola).\n[…]\nA pérola sempre foi muito apreciada ao longo da história da humanidade, um exemplo disso foi o facto de no apogeu do Império Romano, quando a febre das pérolas estava no auge, Júlio César, conhecido pelas suas conquistas amorosas, ofereceu a Servília Cepião, uma pérola no valor de seis milhões de sestércios. Também o general romano Vitélio, estando cheio de dívidas, roubou um brinco de pérola à sua mãe, para poder financiar o seu regresso ao exército .\n[…]\nA maior pérola do mundo tem 27,65 quilos e está avaliada em 80 milhões de euros. Foi comprada em 1959 a um pescador em Camiguin, Filipinas.\n[…]\nHistòria da Pérola do Tahitì",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Lula",
      "descricao": "Molusco cefalópode marinho de corpo alongado, com oito braços e dois tentáculos."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além dos oito braços, a lula tem tentáculos mais longos, que usa para agarrar as presas. Quantos são esses tentáculos?",
    "resposta": "Dois",
    "distratores": [
      "Um",
      "Quatro",
      "Seis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Squid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Squid",
        "situacao": "ok",
        "texto": "A squid (pl. squid) is a mollusc with an elongated soft body, large eyes, eight arms, and two tentacles in the orders Myopsida, Oegopsida, and Bathyteuthida (though many other molluscs within the broader Neocoleoidea are also called squid despite not strictly fitting these criteria). Like all other cephalopods, squid have a distinct head, bilateral symmetry, and a mantle.\n[…]\nGiant squid have featured as monsters of the deep since classical times. Giant squid were described by Aristotle (4th century BC) in his History of Animals and Pliny the Elder (1st century AD) in his Natural History. The Gorgon of Greek mythology may have been inspired by squid or octopus, the animal itself representing the severed head of Medusa, the beak as the protruding tongue and fangs, and its tentacles as the snakes.\n[…]\nSquid form a major food resource and are used in cuisines around the world, notably in Japan where it is eaten as ika sōmen, sliced into vermicelli-like strips; as sashimi; and as tempura. Three species of Loligo are used in large quantities: L. vulgaris in the Mediterranean (known as Calamar in Spanish, Calamaro in Italian); L. forbesii in the Northeast Atlantic; and L. pealei on the American East Coast.\n[…]\nIn English-speaking countries, squid as food is often called calamari, adopted from Italian into English in the 17th century. Squid are found abundantly in certain areas, and provide large catches for fisheries. The body can be stuffed whole, cut into flat pieces, or sliced into rings. The arms, tentacles, and ink are also edible; the only parts not eaten are the beak and gladius (pen). Squid is a good food source for zinc and manganese, and high in copper, selenium, vitamin B12, and riboflavin.\n[…]\nColossal Squid at the Museum of New Zealand Te Papa Tongarewa\n[…]\nMarket squid mating, laying eggs (video)\n[…]\nScientific American – Giant Squid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teuthida",
        "situacao": "ok",
        "texto": "Teuthida é uma ordem zoológica da classe dos cefalópodes, subclasse Coleoidea. É constituída por moluscos marinhos, nomeadamente pelas lulas e chocos, cujo comprimento raramente atinge mais do que 60 cm,[carece de fontes]? mas já foram identificadas lulas-colossais (Mesonychoteuthis hamiltoni) com mais 18 metros.\n[…]\nFamília Loliginidae: calamari, lula-mansa\n[…]\nComo todos os cefalópodes, caracterizam-se por possuírem cabeça distinta, simetria bilateral e tentáculos com ventosas. Assim como o choco, a lula tem oito braços, para a captura de alimento, e dois tentáculos, com função na reprodução. As lulas têm cromatóforos na sua pele, ou seja, células que permitem mudança de cor dependendo do ambiente em que se encontram, o que caracteriza sua capacidade mimetizante.\n[…]\nNa boca, as lulas apresentam a rádula quitinosa que lhes permite triturar alimentos e que é a característica comum a todos os moluscos, exceto Bivalvia e Aplacophora. As lulas respiram por duas guelras e têm um sistema circulatório bombeado por um coração principal e dois subsidiários.\n[…]\nDiferentemente da fêmea do polvo, a lula fêmea não precisa cuidar dos ovos, pois estes apresentam substâncias fungicidas (fungos podem matar o embrião ao introduzir as hifas no ovo) e bactericidas.\n[…]\nEmbora ainda não tenham sido realizados testes em todas as espécies, o único cefalópode conhecido que possui visão a cores é a lula Watasenia scintillans.\n[…]\nA análise revelou tratar-se não apenas de uma espécie inédita para a ciência, batizada de Mobydickia poseidonii (a \"Lula-de-Poseidon\", em referência aos ganchos em formato de tridente nos seus tentáculos), mas também de uma linhagem evolutiva inteiramente nova, resultando na criação da família Mobydickiidae. O achado representou a primeira descrição de uma nova família de lulas em 27 anos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Ampolas de Lorenzini",
      "descricao": "Órgãos sensoriais de tubarões e raias que detectam campos elétricos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que anatomista italiano do século dezessete fez a descrição detalhada dos órgãos com que os tubarões sentem campos elétricos, que hoje levam seu sobrenome?",
    "resposta": "Stefano Lorenzini",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ampullae_of_Lorenzini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ampullae_of_Lorenzini",
        "situacao": "ok",
        "texto": "Ampullae of Lorenzini (sing.: ampulla) are electroreceptors, sense organs able to detect electric fields. They form a network of mucus-filled pores in the skin of cartilaginous fish (sharks, rays, and chimaeras) and of basal bony fishes such as reedfish, sturgeon, and lungfish. They are associated with and evolved from the mechanosensory lateral line organs of early vertebrates. Most bony fishes a\n[…]\nAmpullae were initially described by Marcello Malpighi and later given an exact description by the Italian physician and ichthyologist Stefano Lorenzini in 1679, though their function was unknown. Electrophysiological experiments in the 20th century suggested a sensibility to temperature, mechanical pressure, and possibly salinity. In 1960 the ampullae were identified as specialized receptor organs for sensing electric fields.\n[…]\nOne of the first descriptions of calcium-activated potassium channels was based on studies of the ampulla of Lorenzini in the skate.\n[…]\nThe inclination angle, intensity (or strength) of the field, and the intensities of both the horizontal and vertical fields are all components utilized by some organisms, like those with the ampullae of Lorenzini, to have their own built-in GPS system. This system is very important for creatures who make large-scale migrations like sharks, and without it, sharks would not be able to benefit their natural ecosystems nearly as well.\n[…]\nThe mucus-like substance inside the tubes was thought in 2003 perhaps to function as a thermoelectric semiconductor, transducing temperature changes into an electrical signal that the animal could use to detect temperature gradients. A 2007 study appeared to disprove this. The question remained open, and in 2023 it was predicted that the ampullae of Lorenzini in sharks would be able to detect a temperature difference of 0.001 Kelvin (a thousandth of a degree)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ampola_de_Lorenzini",
        "situacao": "ok",
        "texto": "As ampolas de Lorenzini são órgãos sensoriais especiais, compostas por uma rede de poros dentro da epiderme, cada um levando a um canal preenchido com um gel de mucopolissacarídeo. O canal ampular termina em um bulbo, as ampolas propriamente ditas, que normalmente consistem em várias câmaras sensoriais alinhadas com células receptoras e de suporte.\n[…]\nNos peixes cartilaginosos, como tubarões, as ampolas de Lorenzini são importantes órgãos capazes de detectar variações na temperatura, salinidade e correntes elétricas.\n[…]\nOs estudos desse órgão sensorial foram iniciados por Marcello Malpighi e posteriormente detalhado pelo ictiólogo Stefano Lorenzini em 1679, com o título \"Osservazioni intorno alle torpedini fatte da Stefano Lorenzini fiorentino, e dedicate al serenissimo Ferdinando 3. principe di Toscana\", ainda que a sua função fosse desconhecida.\n[…]\nDentre os diferentes elasmobrânquios, podemos encontrar, em sua maioria, indivíduos que habitam locais de água salgada, no entanto, algumas espécies apresentam adaptações que permitem a vida em locais de água doce. As adaptações são expressas em seus órgãos, tal como para a ampola de Lorenzini, que precisa de alterações específicas para manter a sua funcionalidade em um ambiente de menor condutividade.\n[…]\nEstudos demonstraram a presença de ampolas reduzidas, classificadas como mini ampolas, presentes em canais curtos e estreitos.\n[…]\nAs ampolas de Lorenzini são ricas em uma espécie de gel e por isso o efeito de Soret se aplica a essa região. Estudos apontam que, em decorrência desse efeito e da distribuição desses órgãos em centenas ao longo da cabeça dos condrictes, as ampolas de Lorenzini possuem uma grande capacidade de detecção de temperatura, podendo detectar variações mínimas de 0,001 Kelvin.[20]\n[…]\nÓrgão elétrico (biologia)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Atol",
      "descricao": "Recife de coral em forma de anel que cerca uma lagoa."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que naturalista inglês propôs, no século dezenove, que os atóis se formam de recifes de coral que crescem ao redor de vulcões que afundam?",
    "resposta": "Charles Darwin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atoll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atoll",
        "situacao": "ok",
        "texto": "An atoll () is a ring-shaped island, including a coral rim that encircles a lagoon. There may be coral islands or cays on the rim. Atolls are located in warm tropical or subtropical parts of the oceans and seas where corals can develop. Most of the approximately 440 atolls in the world are in the Pacific Ocean.\n[…]\nThe word atoll comes from the Dhivehi word atholhu (in Thaana: އަތޮޅު, pronounced [ˈat̪oɭu]). Dhivehi is an Indo-Aryan language spoken in the Maldives. The word was first transmitted to François Pyrard de Laval's French as atollon in 1625, this informed Charles Darwin to coin and define in his monograph, The Structure and Distribution of Coral Reefs as a \"circular group of coral islets\", synonymously with \"lagoon-island\".\n[…]\nIn 1842, Charles Darwin explained the creation of coral atolls in the southern Pacific Ocean based upon observations made during a five-year voyage aboard HMS Beagle from 1831 to 1836. Darwin's explanation suggests that several tropical island types: from high volcanic island, through barrier reef island, to atoll, represented a sequence of gradual subsidence of what started as an oceanic volcano.\n[…]\nIn 1896, 1897 and 1898, the Royal Society of London carried out drilling on Funafuti atoll in Tuvalu for the purpose of investigating the formation of coral reefs. They wanted to determine whether traces of shallow water organisms could be found at depth in the coral of Pacific atolls. This investigation followed the work on the structure and distribution of coral reefs conducted by Charles Darwin in the Pacific.\n[…]\nCoral island\n[…]\nDobbs, David (2005). Reef Madness: Charles Darwin, Alexander Agassiz, and the Meaning of Coral. Pantheon. ISBN 0-375-42161-0.\n[…]\nDarwin's Volcano – A short video discussing Darwin and Agassiz' coral reef formation debate"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Atol",
        "situacao": "ok",
        "texto": "Um atol (do maldivense atolu) é uma ilha oceânica em forma de anel com estrutura coralínea e de outros invertebra­dos, constituindo em seu in­terior uma lagoa, sem nenhuma aparente conexão com as rochas da Crosta.\n[…]\nUm atol começa pela formação de um recife costeiro de corais ao redor de uma ilha vulcânica. À medida que esta ilha vai afundando o recife vai se acumulando e crescendo para fora em busca de águas mais ricas em nutrientes e transformando-se num recife de barreira. A parte central, com menor circulação de água fica preservada como uma laguna interior.\n[…]\nAtóis são ilhas oceânicas com formato de lagunas circulares que se formam a partir de vulcões soerguidos no assoalho oceânico.\n[…]\nOs atóis são comuns em mares tropicais dos oceanos Pacífico e Índico. Os atóis mais notáveis de grandes arquipélagos são:\n[…]\nIlhas do mar de Coral, com os atóis mais meridionais no mar da Tasmânia.\n[…]\nTuamotu, o maior arquipélago de atóis.\n[…]\nAtol das Rocas no Estado do Rio Grande do Norte no Brasil.\n[…]\noito atóis localizados na Colômbia.\n[…]\nEstas são algumas imagens de recifes na Oceania. (Os atóis Cosmoledo e Astove formam parte do grupo Aldabra das ilhas Seicheles).\n[…]\nAtol das Rocas\n[…]\nRecife de coral",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Deepsea Challenger",
      "descricao": "Submersível que levou um único tripulante ao fundo da Fossa das Marianas em 2012."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 2012, que cineasta, diretor de Titanic e Avatar, desceu sozinho ao fundo da Fossa das Marianas num submersível?",
    "resposta": "James Cameron",
    "fonte": [
      "https://en.wikipedia.org/wiki/Deepsea_Challenger"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Deepsea_Challenger",
        "situacao": "ok",
        "texto": "Deepsea Challenger (DCV 1) is a 7.3-metre (24 ft) deep-diving submersible designed to reach the bottom of the Challenger Deep, the deepest-known point on Earth. On 26 March 2012, Canadian film director James Cameron piloted the craft to accomplish this goal in the second crewed dive reaching the Challenger Deep.\n[…]\nAllum gained much of his experience developing the electronic communication used in Cameron's Titanic dives in filming Ghosts of the Abyss, Bismarck and others.\n[…]\nIn late January 2012, to test systems, Cameron spent three hours in the submersible while submerged just below the surface in Australia's Sydney Naval Yard. On 21 February 2012, a test dive intended to reach a depth of over 1,000 m (3,300 ft) was aborted after only an hour because of problems with cameras and life support systems.\n[…]\nOn 23 February 2012, just off New Britain Island, Cameron successfully took the submersible to the ocean floor at 991 m (3,251 ft), where it made a rendezvous with a yellow remote operated vehicle operated from a ship above. On 28 February 2012, during a seven-hour dive, Cameron spent six hours in the submersible at a depth of 3,700 m (12,100 ft). Power system fluctuations and unforeseen currents presented unexpected challenges.\n[…]\nOn 26 March 2012, Cameron reached the bottom of the Challenger Deep, the deepest part of the Mariana Trench. The maximum depth recorded during this record-setting dive was 10,908 metres (35,787 ft). Measured by Cameron, at the moment of touchdown, the depth was 10,898 m (35,756 ft). It was the fourth-ever dive to the Challenger Deep and the second crewed dive (with a maximum recorded depth slightly less than that of Trieste's 1960 dive).\n[…]\nNGS video: Cameron's return from Challenger Deep\n[…]\nDeepsea Challenge 3D at IMDb , a 2014 National Geographic Channel documentary."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Tubarão-baleia",
      "descricao": "Grande tubarão filtrador (Rhincodon typus) de pele pintada, que se alimenta de plâncton."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual é o maior peixe vivo do mundo, um gigante manso que se alimenta de plâncton?",
    "resposta": "Tubarão-baleia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Whale_shark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Whale_shark",
        "situacao": "ok",
        "texto": "The whale shark (Rhincodon typus) is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. An individual with a length of 18.8 m (61.7 ft) has been considered the largest reliably recorded. The whale shark holds many records for size in the animal kingdom, most notably being by far the largest living non-cetacean animal.\n[…]\nOutside Asia, the first and so far only place to keep whale sharks is Georgia Aquarium in Atlanta, United States. This is unusual because of the comparatively long transport time and complex logistics required to bring the sharks to the aquarium, ranging between 28 and 36 hours. As of August 2025, Georgia keeps one whale shark, a male named Yushan, who arrived in 2007. Two earlier males at Georgia Aquarium, Ralph and Norton, both died in 2007. Trixie died in 2020. Alice died in 2021.\n[…]\nIn Madagascar, whale sharks are called marokintana in Malagasy, meaning \"many stars\", after the appearance of the markings on the shark's back.\n[…]\nIn the Philippines, it is called butanding and balilan. The whale shark is featured on the reverse of the Philippine 100-peso bill. By law snorkelers must maintain a distance of 4 ft (1.2 m) from the sharks and there is a fine and possible prison sentence for anyone who touches the animals.\n[…]\nThe whale shark is featured on the latest 2015–2017 edition of the Maldivian 1000 rufiyaa banknote, along with the green turtle.\n[…]\nWhale Shark Photograph-identification Library Archived 2 January 2018 at the Wayback Machine\n[…]\nWhale Shark And Oceanic Research Center\n[…]\nMaldives Whale Shark Research Program\n[…]\nWhale shark, Rhincodon typus at marinebio.org\n[…]\nWhale Shark Fact Sheet, Fisheries Western Australia Archived 8 August 2014 at the Wayback Machine\n[…]\nAlbino whale shark photographed in Galapagos\n[…]\nA whale shark recorded defecating\n[…]\nPhotos of Whale shark in the Sealife Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tubar%C3%A3o-baleia",
        "situacao": "ok",
        "texto": "O tubarão-baleia (nome científico: Rhincodon typus) é uma espécie de tubarão filtrador da ordem dos orectolobiformes e a maior espécie de peixe existente conhecida. O maior indivíduo confirmado tinha um comprimento de 20 metros (61,7 pés). O tubarão-baleia detém muitos recordes de tamanho no reino animal, sendo de longe o maior vertebrado não mamífero vivo.\n[…]\nO tubarão-baleia é um animal filtrador – uma das três únicas espécies conhecidas de tubarões que se alimentam de filtros (junto com o tubarão-peregrino e o tubarão-boca-grande). Alimenta-se de plâncton, incluindo copépodes, krill, ovas de peixe, larvas de caranguejo vermelho (Gecarcoidea natalis) da ilha Christmas e pequena vida nectônica, como pequenas lulas ou peixes. Também se alimenta de nuvens de ovos durante a desova em massa de peixes e corais.\n[…]\nO programa Planet Earth da BBC filmou um tubarão-baleia se alimentando de um cardume de pequenos peixes. O mesmo documentário mostrou imagens de um tubarão-baleia cronometrando sua chegada para coincidir com a desova em massa de cardumes de peixes e se alimentando das nuvens resultantes de ovos e esperma. Os tubarões-baleia são conhecidos por atacar uma variedade de organismos planctônicos e pequenos nectônicos que são espaço-temporalmente irregulares.\n[…]\nEstes incluem krill, larvas de caranguejo, águas-vivas, sardinhas, anchovas, cavalas, pequenos atuns e lulas. Na alimentação de filtragem passiva, o peixe nada para frente em velocidade constante com a boca totalmente aberta, puxando as partículas de presas da água por propulsão para frente. Devido ao seu modo de alimentação, os tubarões-baleia são suscetíveis à ingestão de microplásticos. Como tal, a presença de microplásticos em fezes de tubarão-baleia foi recentemente confirmada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Tartaruga-de-couro",
      "descricao": "Tartaruga-marinha (Dermochelys coriacea) de carapaça coberta por pele grossa, sem placas duras."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é a maior de todas as tartarugas-marinhas, que pode passar de meia tonelada?",
    "resposta": "Tartaruga-de-couro",
    "distratores": [
      "Tartaruga-verde",
      "Tartaruga-cabeçuda",
      "Tartaruga-de-pente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Leatherback_sea_turtle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leatherback_sea_turtle",
        "situacao": "ok",
        "texto": "The leatherback sea turtle (Dermochelys coriacea), sometimes called the lute turtle, leathery turtle or simply the luth, is a large species of sea turtle. The largest of all living turtles and the heaviest non-crocodilian reptile, it reaches lengths of up to 2.7 metres (8 ft 10 in) and weights of 500 kilograms (1,100 lb). It is the only living species in the genus Dermochelys and family Dermochely\n[…]\nDomenico Agostino Vandelli named the species first in 1761 as Testudo coriacea after an animal captured at Ostia and donated to the University of Padua by Pope Clement XIII. In 1816, French zoologist Henri Blainville coined the term Dermochelys. The leatherback was then reclassified as Dermochelys coriacea. In 1843, the zoologist Leopold Fitzinger put the genus in its own family, Dermochelyidae. In 1884, the American naturalist Samuel Garman described the species as Sphargis coriacea schlegelii.\n[…]\nBoth the turtle's common and scientific names come from the leathery texture and appearance of its carapace (Dermochelys coriacea literally translates to \"Leathery Skin-turtle\"). Older names include \"leathery turtle\" and \"trunk turtle\".\n[…]\nMany turtles die from malabsorption and intestinal blockage following the ingestion of balloons and plastic bags which resemble their jellyfish prey. Chemical pollution also has an adverse effect on Dermochelys. A high level of phthalates has been measured in their eggs' yolks. Leatherback sea turtles ranging from 1885 to 2007 were autopsied for the existence of plastic in the gastrointestinal tract. It was discovered that 34% of the cases had plastic blockage.\n[…]\nWood, Roger Conant; Johnson-Gove, Jonnie; Gaffney, Eugene S.; Maley, Kevin F. (1996). \"Evolution and phylogeny of the leatherback turtles (Dermochelyidae), with descriptions of new fossil taxa\". Chelonian Conservation and Biology. 2: 266–286."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartaruga-de-couro",
        "situacao": "ok",
        "texto": "A tartaruga-de-couro (nome científico: Dermochelys coriacea), tartaruga-gigante, tartaruga-de-cerro, tartaruga-de-quilha, tartaruga-de-leste, tartaruga-preta, tartaruga-sete-quilhas, careba-mole ou careba-gigante, é a maior das espécies de tartarugas e é muito diferente das outras tanto em aparência quanto em fisiologia. É a única espécie extante do gênero Dermochelys e da família dos dermoquelíde\n[…]\nAs nadadeiras frontais da tartaruga-de-couro são as maiores em relação ao corpo dentre as tartarugas marinhas existentes, podendo atingir até 2,7 metros em espécimes adultos. A tartaruga-de-couro tem várias características que a distinguem de outras tartarugas marinhas. Sua característica mais notável é a falta de uma carapaça óssea. Em vez de escudos, tem uma pele grossa e coriácea com osteodermos minúsculos embutidos.\n[…]\nPor outro lado, um artigo científico afirmou que a espécie pode pesar até mil quilos (2 200 libras) sem fornecer detalhes mais verificáveis. A tartaruga-de-couro é pouco maior do que qualquer outra tartaruga marinha após a eclosão, pois mede em média 61,3 milímetros (2,41 polegadas) no comprimento da carapaça e pesa cerca de 46 gramas (1,6 onça) quando recém eclodida.\n[…]\nO Leatherback Trust foi fundado especificamente para conservar as tartarugas marinhas, especificamente seu homônimo em inglês, leatherback turtle (a tartaruga-de-couro). A fundação estabeleceu um santuário na Costa Rica, o Parque Marino Las Baulas.\n[…]\nFinanciado pelo Fundo Europeu de Desenvolvimento Regional (FEDER), o Irish Sea Leatherback Turtle Project concentra-se em pesquisas como marcação e rastreamento por satélite de indivíduos. O Earthwatch Institute, uma ONG, lançou um programa chamado \"Tartarugas Marinhas de Couro de Trindade\". A cada ano, mais de duas mil fêmeas de tartaruga-de-couro chegam à praia Matura, em Trindade, para desovar.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Peixe-pescador abissal",
      "descricao": "Peixe das profundezas da subordem Ceratioidei, cuja fêmea tem uma isca luminosa na cabeça."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Em certas espécies de peixes-pescadores das profundezas, o que o macho minúsculo faz quando encontra uma fêmea?",
    "resposta": "Funde-se ao corpo dela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Anglerfish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anglerfish",
        "situacao": "ok",
        "texto": "The anglerfish are ray-finned fish in the order Lophiiformes (). Both the order's common and scientific name comes from the characteristic mode of predation, in which a modified dorsal fin ray acts as a lure for prey (akin to a human angler, and likened to a crest or \"lophos\").\n[…]\nAnglerfish lengths can vary from 2–18 cm (1–7 in), with a few species larger than 100 cm (39 in). The largest members are the European monkfish Lophius piscatorius (200 cm (6.6 ft) SL, 57.7 kilograms (127 lb)), the deep-sea warty anglerfish Ceratias holboelli (120 cm (3.9 ft) TL), the giant frogfish Antennarius commerson (45 cm (1.48 ft) TL), and the giant triangular batfish Malthopsis gigas (13.6 cm (0.45 ft)).\n[…]\nThe illicial apparatus is most notable in the deep-sea anglerfish (Ceratioidei) as their esca contain bioluminescent bacteria, making them glow in the dark waters of the deeper pelagic zones. In other species the esca possesses different luring mechanisms, such as emitting odoriferous chemicals that attract olfactory-driven prey (batfish, Ogcocephaloidei; possibly sea toads, Chaunacioidei), or by resembling prey attractive to small fish such as shrimp or worms (frogfish, Antennarioidei).\n[…]\nVarious species of anglerfish are kept in captivity, such as frogfish and batfish, though these are all species that inhabit shallow waters; deep-sea anglerfish have not been kept in captivity due to the challenges of keeping them alive through capture, transport, and a display that can repressurize them.\n[…]\nAnderson, M. Eric, and Leslie, Robin W. 2001. Review of the deep-sea anglerfishes (Lophiiformes: Ceratioidei) of southern Africa. Ichthyological Bulletin of the J. L. B. Smith Institute of Ichthyology; No. 70. J. L. B. Smith Institute of Ichthyology, Rhodes University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lophiiformes",
        "situacao": "ok",
        "texto": "Lophiiformes (Lofiiformes) é uma ordem de peixes ósseos que agrega um conjunto muito diverso de peixes marinhos, com cerca de 322 espécies repartidas por 5 subordens e 16-18 famílias, caracterizados na maioria das espécies pela presença na parte anterior da cabeça de um aparato pra atração de presas (o illicium com a sua esca, formando um isco, daí serem conhecidos por peixes-pescadores) , estrutu\n[…]\nAlguns Lophiiformes são também notáveis por apresentarem dimorfismo sexual muito acentuado, ou mesmo extremo, que, nalguns casos atinge a simbiose sexual, com o macho muito mais pequeno do que a fêmea. Esta característica é mais marcada na subordem Ceratiidae, um grupo de peixes da região abissal, na qual algumas espécies têm machos que são várias ordens de magnitude menores do que as correspondentes fêmeas.\n[…]\nAs espécies que integram esta subordem são peixes marinhos que habitam os oceanos Atlântico, Pacífico e Índico a profundidades que variam de 90 m a mais de 2000 m.\n[…]\nComo os peixes deste grupo possuem pouca habilidade natatória, passam o maior parte da sua vida aguardando, no caso dos bentónicos enterrados no substrato não consolidado dos fundos ou camuflados sobre o fundo ou entre algas, ou, no caso dos bento-pelágicos, pairando na água, em ambos os casos mexendo a isca para frente e para trás, tentando atrair a potencial presa para a boca, especialmente quando a presa esteja localizada na frente ou acima do seu corpo.\n[…]\nEm algumas famílias, o macho, que é extremamente pequeno, pois no estado adulto atinge apenas  cerca de 6–10 mm, procura ativamente por uma grande fêmea até se fixar sobre o seu corpo, permanente ou temporariamente, passando a alimentar-se do seu sangue. Esse hábito de vida, designado por simbiose sexual (ou parasitismo sexual segundo alguns autores), foi observado nas famílias Caulophrynidae, Neoceratiidae, Oneirodidae, Centrophrynidae e Linophrynidae.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.43 — 2026-10-02**
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
