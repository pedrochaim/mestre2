Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Aves, Répteis e Anfíbios** (tema **Natureza**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Dragão-de-komodo",
      "descricao": "Grande lagarto (Varanus komodoensis) de algumas ilhas da Indonésia, o maior lagarto vivo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O dragão-de-komodo, maior lagarto do mundo, vive na natureza só em algumas ilhas de que país?",
    "resposta": "Indonésia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dragão-de-komodo",
      "https://en.wikipedia.org/wiki/Komodo_dragon"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dragão-de-komodo",
        "situacao": "ok",
        "texto": "Dragão-de-komodo (também grafado dragão-de-comodo) (Varanus komodoensis) é uma espécie de lagarto que vive nas ilhas de Komodo, Rinca, Gili Motang e Flores, todas localizadas na Indonésia. Pertence à família de lagartos-monitores Varanidae, e é a maior espécie de lagarto conhecida, chegando a atingir 40 cm de altura e 2–3 m de comprimento e até 166 kg de peso no caso dos maiores indivíduos.\n[…]\nOs dragões-de-komodo foram descobertos por cientistas ocidentais em 1910. O seu grande tamanho e reputação feroz fazem deles uma exibição popular em zoológicos. Na natureza, a sua área de distribuição contraiu devida a actividades humanas e estão listadas como espécie em perigo pela UICN. Estão protegidos pela lei da Indonésia, e um parque nacional, o Parque Nacional de Komodo, foi fundado para ajudar os esforços de protecção.\n[…]\nExistem outras espécies de lagartos gigantes, como o Varanus griseus, que é um animal terrestre, e o Varanus niloticus, que é um réptil com hábitos anfíbios, passando boa parte de sua vida na água. Vivem na África, sul da Ásia, Indonésia e Austrália. Variam muito de tamanho. O menor deles apresenta apenas 20 cm de comprimento.[carece de fontes]?\n[…]\nO desenvolvimento evolutivo do dragão-de-komodo teve início com o género Varanus, que se originou na Ásia há cerca de 40 milhões de anos e migrou para a Austrália. Há cerca de 15 milhões de anos, uma colisão entre a Austrália e o Sudoeste Asiático permitiu que os varanídeos se deslocassem para o que é agora o arquipélago indonésio.\n[…]\nA Kraken for a primeira dragão-de-komodo que eclodiu em cativeiro fora da Indonésia, nascida no National Zoo em 13 de Setembro de 1992.\n[…]\nEm 2008, um grupo de cinco mergulhadores ficaram encalhados na praia da ilha de Rinca, e foram atacados por dragões-de-komodo. Depois de dois dias, os mergulhadores foram resgatados por um bote de resgate indonésio.\n[…]\nDragão"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Komodo_dragon",
        "situacao": "ok",
        "texto": "The Komodo dragon (Varanus komodoensis), also known as the Komodo monitor, is a large reptile of the monitor lizard family Varanidae that is endemic to the Indonesian islands of Komodo, Rinca, Flores, Gili Dasami, and Gili Motang. The largest extant population lives  within the Komodo National Park in Eastern Indonesia. It is the largest extant species of lizard, with the males growing to a maximu\n[…]\nThe Komodo dragon is classified by the IUCN as Endangered and is listed on the IUCN Red List. The species' sensitivity to natural and human-made threats has long been recognized by conservationists, zoological societies, and the Indonesian government. Komodo National Park was founded in 1980 to protect Komodo dragon populations on islands including Komodo, Rinca, and Padar. Later, the Wae Wuul and Wolo Tado Reserves were opened on Flores to aid Komodo dragon conservation.\n[…]\nUnder Appendix I of CITES (the Convention on International Trade in Endangered Species), commercial international trade of Komodo dragon skins or specimens is prohibited. Despite this, there are occasional reports of illegal attempts to trade in live Komodo dragons. The most recent attempt was in March 2019, when Indonesian police in the East Java city of Surabaya reported that a criminal network had been caught trying to smuggle 41 young Komodo dragons out of Indonesia.\n[…]\nStudies were done by Walter Auffenberg, which were documented in his book The Behavioral Ecology of the Komodo Monitor, eventually allowing for more successful management and breeding of the dragons in captivity. Surabaya Zoo in Indonesia has been breeding Komodo dragons since 1990 and had 134 dragons in 2022, the largest collection outside its natural habitat.\n[…]\nKomodo Indonesian Fauna Museum and Reptile Park\n[…]\nConservation in Indonesia\n[…]\nData related to Varanus komodoensis at Wikispecies"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Kakapo",
      "descricao": "Papagaio noturno, pesado e incapaz de voar (Strigops habroptilus), da Nova Zelândia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Gordo, noturno e incapaz de voar, o kakapo é um papagaio raríssimo. Em que país ele vive?",
    "resposta": "Nova Zelândia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kakapo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kakapo",
        "situacao": "ok",
        "texto": "The kākāpō (Māori: [ˈkaːkaːpɔː]; pl.: kākāpō; Strigops habroptilus), sometimes known as the owl-parrot, is a species of large, nocturnal, ground-dwelling parrot of the superfamily Strigopoidea. It is endemic to New Zealand.\n[…]\nThe kākāpō was formally described and illustrated in 1845 by the English ornithologist George Robert Gray. He created a new genus and coined the binomial name Strigops habroptilus. Gray was uncertain about the origin of his specimen and wrote, \"This remarkable bird is found in one of the islands of the South Pacific Ocean.\" The type location has been designated as Dusky Sound on the southwest corner of New Zealand's South Island.\n[…]\nThis view was accepted by ornithologists and in 2024 the  International Ornithological Congress Checklist and the eBird/Clements Checklist changed the spelling of the binomial name back to Strigops habroptilus. The species is monotypic, as no subspecies are recognised.\n[…]\nThe belly, undertail, neck, and face are predominantly yellowish streaked with pale green and weakly mottled with brownish-grey. Because the feathers do not need the strength and stiffness required for flight, they are exceptionally soft, giving rise to the specific epithet habroptila. The kākāpō has a conspicuous facial disc of fine feathers resembling the face of an owl; thus, early European settlers called it the \"owl parrot\".\n[…]\n1999: Kākāpō removed from Hauturu\n[…]\nHiggins, P.J., ed. (1999). \"Strigops habroptilus Kakapo\" (PDF). Handbook of Australian, New Zealand & Antarctic Birds. Vol. 4: Parrots to Dollarbird. Melbourne, Victoria: Oxford University Press. pp. 633–646. ISBN 978-0-19-553071-1. Archived from the original (PDF) on 17 June 2024. Retrieved 10 June 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%A1capo",
        "situacao": "ok",
        "texto": "O cácapo ou kakapo (nome científico: Strigops habroptilus) é uma espécie de papagaio noturno endémica da Nova Zelândia, sendo notável por ser a única espécie da ordem Psittaciformes incapaz de voar. O seu nome comum significa papagaio da noite em maori. O cácapo é uma ave em perigo crítico de extinção. Em 2013, a população contava com apenas 124 aves. Em 2017, houve um ligeiro aumento, para 154 es\n[…]\nOs cácapos são aves herbívoras que se alimentam de várias espécies nativas da Nova Zelândia, consumindo sementes, frutos e pólen. A sua fonte de alimento favorita é o fruto do rimu, uma árvore endémica do seu habitat. Ocasionalmente, os cácapos podem também alimentar-se de insectos e outros pequenos invertebrados.\n[…]\nOs antepassados dos cácapos colonizaram a Nova Zelândia há milhões de anos. Com o passar do tempo geológico, o cácapo ancestral, que deveria ser semelhante aos papagaios modernos, evoluiu de acordo com o seu ambiente, livre de predadores e sem mamíferos nativos à exceção de 3 espécies de morcegos. Em consequência, tornaram-se maiores e mais pesados, perderam a capacidade de voar e ocuparam o nicho ecológico normalmente preenchido por pequenos mamíferos noturnos e herbívoros.\n[…]\nAntes da chegada dos humanos ao arquipélago, o cácapo era uma espécie muito bem sucedida, com uma população de milhões de indivíduos, distribuida por ambas as ilhas principais da Nova Zelândia.\n[…]\nAo longo do século XX, houve várias tentativas de conservação semelhantes, todas frustradas pela presença de espécies invasoras. No início de 2006, os 126 exemplares de cácapo viviam nas ilhas Chalky, Codfish e Stweart, ao largo da costa Sul da Nova Zelândia, todas caracterizadas pela abundância de rimus. Como as ilhas são constantemente vigiadas para impedir a invasão de mustelídeos, ratos e gatos selvagens, a população de cácapos tem-se mantido estável, apesar de inferior a 200 indivíduos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Ararajuba",
      "descricao": "Psitacídeo brasileiro (Guaruba guarouba) de plumagem amarela com pontas das asas verdes."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A ararajuba, toda amarela com as pontas das asas verdes, vive apenas em que bioma brasileiro?",
    "resposta": "Amazônia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Ararajuba",
      "https://en.wikipedia.org/wiki/Golden_parakeet"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Ararajuba",
        "situacao": "ok",
        "texto": "A ararajuba ou guaruba (Guaruba guarouba ou Aratinga guarouba), também chamada de ararajuba, é uma ave psitaciforme endêmica do norte do Brasil, ameaçada de extinção. As aves chegam a medir até 35 centímetros de comprimento, possuindo uma plumagem amarelo-ouro com rêmiges verdes. Seus hábitos e ciclos de vida em estado selvagem ainda são pouco conhecidos, mas já foi obtida com sucesso sua reproduç\n[…]\nO nome ararajuba foi selecionado como nome vernáculo técnico para a espécie Guaruba guarouba pelo Comitê Brasileiro de Registros Ornitológicos (CBRO) em 2021.\n[…]\nA guaruba é uma ave vistosa, caracterizando-se por ter a plumagem inteiramente de um amarelo brilhante, salvo as pontas das asas, coloridas de verde-oliva. Não existe dimorfismo sexual. Tem cerca de 34 cm de comprimento.\n[…]\nEspécie endêmica do Brasil, seu território é pequeno e se confina à área entre o oeste do Maranhão, sudeste do Amazonas e nordeste do Pará. Recentemente foram avistados indivíduos em Rondônia e no centro-norte do Mato Grosso. A região mais importante está no Pará, entre o rio Tocantins e o baixo Xingu.\n[…]\nA guaruba é ameaçada principalmente pela destruição de seu habitat, com suas áreas principais de ocorrência estando em regiões de conflitos pela posse da terra e de exploração madeireira, no chamado \"arco do desmatamento\" da Amazônia, complicando sua preservação. E apesar de protegida pela lei a espécie também sofre com a caça ilegal, tanto para o comércio, como por esporte e como para alimentação.\n[…]\nA Ararajuba não foi extinta no Maranhão podendo ser encontrada na Reserva Biológica do Gurupi, podendo ser vista pela vasto arquivos de fotos do  ICMBio na área.\n[…]\n«Ararajuba»  no Wikiaves\n[…]\n«Ararajuba»  no Xeno-canto\n[…]\n(em inglês) Fundo documental ARKive (fotografias, sons e vídeos)  : Guaruba guarouba\n[…]\nAvibase (em português) — Guaruba guarouba (Ver mapa de distribuição)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Golden_parakeet",
        "situacao": "ok",
        "texto": "The golden parakeet, golden conure, or Queen of Bavaria conure (Guaruba guarouba) is a medium-sized golden-yellow Neotropical parrot native to the Amazon Basin of interior northern Brazil. It is the only species placed in the genus Guaruba.\n[…]\nWhen in 1788 the German naturalist Johann Friedrich Gmelin revised and expanded Carl Linnaeus's Systema Naturae he included the golden parakeet and cited earlier works including Buffon's description of \"Le Guarouba\". He placed it with the other parrots in the genus Psittacus and coined the binomial name Psittacus guarouba.\n[…]\nFormerly classified as Aratinga guarouba the golden parakeet is now the only species placed in the genus Guaruba that was introduced in 1830 by the French naturalist René Lesson. The different spellings of the genus and species names result from the different spellings used by Lesson and Gmelin and the rules of the International Commission on Zoological Nomenclature. Lesson initially used Guarouba but on subsequent pages changed this to Guaruba.\n[…]\nThe species is monotypic: no subspecies are recognised. This species is also known as the golden conure.\n[…]\nMolecular studies show that Guaruba and Diopsittaca (red-shouldered macaw) are sister genera. It is also closely related to Leptosittaca branicki, (golden-plumed parakeet).\n[…]\nIts range is estimated to be limited to about 174,000 km2. between the Tocantins, lower Xingu, and Tapajós Rivers in the Amazon Basin south of the Amazon River in the state of Pará, northern Brazil. Additional records occur from adjacent northern Maranhão. The birds in a 1986 study used two different habitats during the year; during the nonbreeding season, which coincided with the dry season, they occupied the tall forest.\n[…]\nSun parakeet"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pinguim-de-magalhães",
      "descricao": "Pinguim sul-americano (Spheniscus magellanicus) que se reproduz na Patagônia e migra para o norte no inverno."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os pinguins-de-magalhães que chegam às praias brasileiras fazem seus ninhos em colônias de que região do sul do continente?",
    "resposta": "Patagônia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pinguim-de-magalhães",
      "https://en.wikipedia.org/wiki/Magellanic_penguin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-de-magalhães",
        "situacao": "ok",
        "texto": "O pinguim-de-magalhães (Spheniscus magellanicus) é também conhecido como naufragado e pato-marinho. É um pinguim sul-americano característico de águas temperadas e de temperaturas entre 15 Grau Celsius e abaixo de zero grau Celsius. Esses animais são classificados no género Spheniscus juntamente com o pinguim-das-galápagos e o pinguim-de-humboldt. O pinguim foi citado pela primeira vez pelo explor\n[…]\nA partir disso, algumas espécies de pinguins, por migrarem no inverno, sofrem a influencia da Corrente das Malvinas, gerando um grande número desses animais que chegam no litoral dessa região. Devido a isso, é relatada a ocorrência de quatro espécies de pinguins, sendo o mais frequente o pinguim-de-magalhães.\n[…]\nA região onde são formadas as colônias reprodutivas mais próximas é a Patagônia, Argentina, e as Ilhas Malvinas. A população estimada é de 1,3 milhão de casais reprodutores, segundo IUCN. Classificada por esse mesmo órgão, esta espécie encontra-se na lista de espécies quase ameaçadas.\n[…]\nO pinguim-de-magalhães é quem cria seus ninhos em colônias muito populosas como na costa da Argentina, Chile e Ilhas Malvinas. Sua época de reprodução acontece mais ou menos de setembro a fevereiro. Essas aves formam casais monogâmicos que compartilham os trabalhos de cuidados parentais e incubação.Os ninhos são construídos no chão ou em pequenas tocas. A fêmea coloca dois ovos que têm a cor branca e tamanhos similares com o intervalo médio de quatro dias e levam entre 39 e 42 dias a incubar.\n[…]\nAs correntes quentes pobres em nutrientes da Corrente do Brasil chegam nas praias do Rio Grande do Sul, durante o mês de outubro, deslocando mais para o sul as águas frias da Corrente das Malvinas. Isso gera uma diminuição de recursos alimentares disponíveis para os pinguins, debilitando as espécies que estiverem em águas costeiras do sul do Brasil durante essa época.\n[…]\n«Pinguim-de-magalhães»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Magellanic_penguin",
        "situacao": "ok",
        "texto": "The Magellanic penguin (Spheniscus magellanicus) is a South American penguin, breeding in coastal Patagonia, including Argentina, Chile, and the Falkland Islands, with some migrating to Brazil and Uruguay, where they are occasionally seen as far north as Espírito Santo. Vagrants have been found in El Salvador, the Avian Island in Antarctica, Australia, and New Zealand. It is the most numerous of t\n[…]\nMagellanic penguins feed in the water, preying primarily on small pelagic fish (Argentine anchoita, silversides, Argentine hake, Falkland sprat, Southern blue whiting, rockcod), hagfish, cuttlefish, squid (Patagonian longfin squid, Gonatus antarcticus, shortfin squid), krill, and squat lobsters, and ingest sea water with their prey. Their salt-excreting gland rids the salt from their bodies. Adult penguins can regularly dive to depths of 20 to 50 m (66 to 164 ft) deep in order to forage for prey.\n[…]\nMagellanic penguins do not experience a severe shortage of food like the Galapagos penguins, because they have a consistent food supply being located on the Atlantic coast of South America. The presence of the large continental shelf in the Atlantic Ocean lets Magellanic penguins forage far from their breeding colony.\n[…]\nIts major predator, however, is the puma, which can also take adults; penguins constitute the majority of prey items in puma diet in Patagonia's Bosques Petrificados de Jaramillo National Park and Monte León National Park.\n[…]\nThe provincial government of Chubut is committed to the creation of a marine protected area in order to protect the penguins and other marine species near the largest Magellanic breeding colony. The creation of a marine protected area would likely improve the breeding success of the colonies as well as increase prey availability, reduce foraging distance, and increase feeding frequency.\n[…]\nMagellanic Penguins in Chilean Patagonia"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Pinguim-de-magalhães",
      "descricao": "Pinguim sul-americano (Spheniscus magellanicus) que se reproduz na Patagônia e migra para o norte no inverno."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Seguindo os cardumes rumo ao norte, os pinguins-de-magalhães costumam aparecer nas praias brasileiras em que estação do ano?",
    "resposta": "Inverno",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pinguim-de-magalhães",
      "https://en.wikipedia.org/wiki/Magellanic_penguin"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-de-magalhães",
        "situacao": "ok",
        "texto": "O pinguim-de-magalhães (Spheniscus magellanicus) é também conhecido como naufragado e pato-marinho. É um pinguim sul-americano característico de águas temperadas e de temperaturas entre 15 Grau Celsius e abaixo de zero grau Celsius. Esses animais são classificados no género Spheniscus juntamente com o pinguim-das-galápagos e o pinguim-de-humboldt. O pinguim foi citado pela primeira vez pelo explor\n[…]\nO pinguim-de-magalhães é a espécie de pinguim em maior número nas regiões temperadas. A espécie habita as zonas costeiras da Argentina, Chile e Ilhas Malvinas, migrando por vezes até o Brasil, no Oceano Atlântico, ou até ao Peru, no caso das populações do Oceano Pacífico. No inverno essa ave migra para a costa brasileira rumo às regiões sul e sudeste em busca de alimento, entretanto existem relatos de que algumas delas alcançaram o litoral do nordeste.\n[…]\nA partir disso, algumas espécies de pinguins, por migrarem no inverno, sofrem a influencia da Corrente das Malvinas, gerando um grande número desses animais que chegam no litoral dessa região. Devido a isso, é relatada a ocorrência de quatro espécies de pinguins, sendo o mais frequente o pinguim-de-magalhães.\n[…]\nOutra ameaça aos pinguins-de-magalhães é o fator climático, já que um grande número de pinguins vivos e mortos são encontrados em regiões onde antes não eram tão comuns. Já foi constatado que um fenômeno denominado de ENSO desempenha influência sobre a população de pinguins-de-galápagos (Spheniscus mendiculus) no Oceano Pacífico e na população dos pinguins-de-magalhães na Argentina, locais onde se verificou um grande número de mortes dessas espécies por ocasião de grandes tempestades.\n[…]\nNo Brasil, pinguins mortos ou machucados são encontrados após tempestades.\n[…]\n«Pinguim-de-magalhães»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Magellanic_penguin",
        "situacao": "ok",
        "texto": "The Magellanic penguin (Spheniscus magellanicus) is a South American penguin, breeding in coastal Patagonia, including Argentina, Chile, and the Falkland Islands, with some migrating to Brazil and Uruguay, where they are occasionally seen as far north as Espírito Santo. Vagrants have been found in El Salvador, the Avian Island in Antarctica, Australia, and New Zealand. It is the most numerous of t\n[…]\nIncreased frequency of extreme events, such as storms, drought, temperature extremes, and wildfires, associated with climate change, increases the reproductive failure in Magellanic penguins.\n[…]\nThe provincial government of Chubut is committed to the creation of a marine protected area in order to protect the penguins and other marine species near the largest Magellanic breeding colony. The creation of a marine protected area would likely improve the breeding success of the colonies as well as increase prey availability, reduce foraging distance, and increase feeding frequency.\n[…]\nIn 2016, videos of a Magellanic penguin who had befriended a Brazilian fisherman went viral. The fisherman had found the penguin close to death and covered in oil, and had nursed it back to health. In 2024, a movie of the story, My Penguin Friend, was released.\n[…]\nThe Penguin Lessons is a 2024 comedy-drama film that centers on a Magellanic penguin rescued from an oil slick.\n[…]\nMagellanic Penguins in Chilean Patagonia\n[…]\nVideo – Magellanic penguin chicks at the San Francisco Zoo\n[…]\nVideo – March of the Penguin Chicks at the San Francisco Zoo\n[…]\nMagellanic penguins from the International Penguin Conservation website\n[…]\nPenguin World: Magellanic penguin\n[…]\nPenguin Pedia: Magellanic Penguins Archived 2019-07-03 at the Wayback Machine\n[…]\nPinguins.info, information about all species of penguins\n[…]\nA confused Magellanic penguin strays 5000km off course\n[…]\nRoscoe, R. \"Magellanic Penguin\". Photo Volcaniaca. Retrieved 13 April 2008."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Sapo-dourado",
      "descricao": "Sapo alaranjado (Incilius periglenes) das florestas de Monteverde, na Costa Rica, visto pela última vez em 1989 e considerado extinto."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Desaparecido no fim dos anos oitenta, o sapo-dourado, de cor laranja brilhante, vivia só nas florestas nubladas de Monteverde. Em que país?",
    "resposta": "Costa Rica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_toad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_toad",
        "situacao": "ok",
        "texto": "The golden toad (Incilius periglenes) is an extinct species of true toad that was once abundant in a small, high-altitude region of about 4 square kilometres (1.5 mi2) in an area north of the city of Monteverde, Costa Rica. It was endemic to elfin cloud forest. Also called the Monte Verde toad, Alajuela toad and orange toad, it is commonly considered the \"poster child\" for the amphibian decline cr\n[…]\nThe golden toad inhabited northern Costa Rica's Monteverde Cloud Forest Reserve, in a cloud forest area north of the town of Monteverde. It was distributed over an area no more than 8 km2 and possibly as little as 0.5 km2 in extent, at an average elevation of 1,500 to 1,620 m. The species seemed to prefer the lower elevations.\n[…]\nIn the period between its discovery and disappearance, the golden toad was commonly featured on posters promoting the biodiversity of Costa Rica. Another species, Holdridge's toad, was declared extinct in 2008 but has since been rediscovered.\n[…]\nIn 1991, ML Crump, FR Hensley, and KL Clark attempted to understand whether the decline of the golden toad in Costa Rica meant that the species was underground or extinct. They found that each year from the early 1970s–1987 golden toads emerged from retreats to breed during April–June. During the time of the study in 1991, the most recent known breeding episode occurred during April/May 1987.\n[…]\nClimate variability is strongly dominated by dry season influences from the El Niño Southern Oscillation events. In 1986–87, El Niño caused the lowest recorded rainfall and highest temperature in Monteverde, Costa Rica. The shift of climate during El Niño is caused by the increased atmospheric pressure in the Atlantic and decreased in the Pacific. The wind reduced the number of rain on the Pacific-facing slopes, and the temperature during the dry season was dramatically higher than usual.\n[…]\nArkive: Golden Toad – Bufo periglenes"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sapo-dourado",
        "situacao": "ok",
        "texto": "O sapo-dourado ou sapo-de-monteverde (Incilius periglenes), habitou alguns locais nos bosques de Monteverde, na Costa Rica, América Central. A espécie foi classificada pela IUCN como extinta. Desde 1989 não se avistou mais nenhum indivíduo. A espécie, que foi descoberta em 1960, só foi avistada numa pequena região de grande altitude, de bosque, em Monteverde, numa área de aproximadamente 10 km². A\n[…]\n«Arkive: Golden Toad - Bufo periglenes.» (em inglês). Imagens do sapo-dourado\n[…]\n«Sapo-dourado» (em inglês). no Mongabay",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Tartaruga-gigante-de-aldabra",
      "descricao": "Jabuti gigante (Aldabrachelys gigantea) do atol de Aldabra, nas Seicheles."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A tartaruga-gigante-de-aldabra vive num atol do Oceano Índico que pertence a que país?",
    "resposta": "Seicheles",
    "distratores": [
      "Madagascar",
      "Maurício",
      "Maldivas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Aldabra_giant_tortoise",
      "https://en.wikipedia.org/wiki/Aldabra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aldabra_giant_tortoise",
        "situacao": "ok",
        "texto": "The Aldabra giant tortoise (Aldabrachelys gigantea), Aldabra tortoise, or simply giant tortoise, is a species of tortoise in the family Testudinidae and genus Aldabrachelys. The species is endemic to the Seychelles, with the nominate subspecies, A. g. gigantea native to Aldabra atoll. It is one of the largest tortoises in the world.\n[…]\nThe carapace of A. gigantea is a brown or tan in color with a high, domed shape. The species has stocky, heavily scaled legs to support its heavy body. The neck of the Aldabra giant tortoise is very long, even for its great size, which helps the animal to exploit tree branches up to a meter from the ground as a food source. Similar in size to the famous Galápagos giant tortoise, its carapace averages 122 cm (48 in) in length. Males have an average weight of 250 kg (550 lb).\n[…]\nA. g. gigantea (Schweigger, 1812:327), Aldabra giant tortoise from the Seychelles island of Aldabra\n[…]\nGenetic evidence suggests that A. gigantea is most closely related to the extinct giant tortoise Aldabrachelys abrupta from Madagascar, from which it is estimated to have diverged from approximately 4.5 million years ago.\n[…]\nThe main population of the Aldabra giant tortoise resides on the islands of the Aldabra Atoll in the Seychelles. The atoll has been protected from human influence and is home to some 100,000 giant tortoises, the world's largest population of the animal. Smaller populations of A. gigantea in the Seychelles exist on Frégate Island and in the Sainte Anne Marine National Park (e.g. Moyenne Island), where they are a popular tourist attraction.\n[…]\nAldabra Giant Tortoise\n[…]\nAldabra giant tortoise at EMY System and World Turtle Database Archived 2008-09-26 at the Wayback Machine\n[…]\nSeychelles Giant Tortoise Conservation Project\n[…]\nAldabra giant tortoise in the Encyclopedia of Life"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aldabra",
        "situacao": "ok",
        "texto": "Aldabra, the world's second-largest coral atoll (the largest is Kiritimati), is located east of the continent of Africa. It is part of the Aldabra Group of islands in the Indian Ocean that are part of the Outer Islands of the Seychelles, with a distance of 1,120 km (700 mi) southwest of the capital, Victoria on Mahé Island.\n[…]\nIn the middle of the 18th century, the atoll became a dependency of the French colony of Réunion, from where expeditions were made for the capture of the Aldabra giant tortoises.\n[…]\nIn 1966, British Defence Minister Denis Healey had observed: \"As I understand it, the island of Aldabra is inhabited – like Her Majesty's Opposition Front bench – by giant turtles, frigate birds and boobies.\"\n[…]\nThe higher areas of Aldabra are covered in pemphis, a thick coastal shrub, while the lower areas, home to the giant tortoises, are a mixture of trees, shrubs, herbs and grasses. There have been recorded 273 species of flowering plants, shrubs, and ferns on the atoll. There are dense thickets of Pemphis acidula, and a mixture of grasses and herbs called \"tortoise turf\" in many areas.\n[…]\nThe atoll has distinctive fauna including the largest population of giant tortoises (Aldabrachelys gigantea) in the world (100,000 animals). Tortoise size varies substantially across the atoll, but adult tortoises typically have a carapace length of 105 centimetres (41 in) and can weigh up to 350 kilograms (770 lb). They are herbivores and feed on plants, trees and algae that grows in the freshwater pools.\n[…]\nIn the past giant tortoises have been relocated to other islands in Seychelles and also to Victoria Botanical Gardens in Mahé. One of the longest-lived Aldabra giant tortoises was Adwaita, a male who died at the age of about 250 years at Kolkata's Alipore Zoological Gardens on 24 March 2006.\n[…]\nPhotos of Aldabran wildlife"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartaruga-gigante-de-aldabra",
        "situacao": "ok",
        "texto": "Aldabrachelys gigantea, popularmente conhecida como tartaruga-gigante-de-aldabra, é uma espécie de réptil da família Testudinidae. Endêmica das ilhas Seicheles.\n[…]\nQuatro subespécies são atualmente reconhecidas. Uma autoridade trinomial entre parênteses indica que a subespécie foi originalmente descrita em um gênero diferente de Aldabrachelys\n[…]\nA. g. gigantea (Schweigger, 1812:327), tartaruga gigante Aldabra da ilha de Aldabra Seicheles\n[…]\nA. g. arnoldi (Bour, 1982:118), tartaruga gigante de Arnold da ilha de Mahé, nas Seicheles\n[…]\nA. g. daudinii † (A.M.C. Duméril & Bibron, 1835:123),  tartaruga gigante de Daudin, da ilha de Mahé, nas Seicheles (extinta em 1850)\n[…]\nA. g. hololissa (Günther, 1877:39), tartaruga gigante das Seicheles, das ilhas Seicheles de Cerf, Cousine, Frégate, Mahé, Praslin, Round e Silhouette\n[…]\nAldabrachelys gigantea arnoldi\n[…]\nAldabrachelys gigantea hololissa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gavial",
      "descricao": "Crocodiliano de focinho longo e fino (Gavialis gangeticus) dos rios do norte do subcontinente indiano."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O gavial, crocodiliano de focinho longo e fino, vive hoje sobretudo em rios de que país?",
    "resposta": "Índia",
    "distratores": [
      "Indonésia",
      "Tailândia",
      "Vietnã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gharial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gharial",
        "situacao": "ok",
        "texto": "The gharial (Gavialis gangeticus), also known as gavial or fish-eating crocodile, is a crocodilian in the family Gavialidae and among the longest of all living crocodilians. Mature females are 2.6 to 4.5 m (8.5 to 14.8 ft) long, and males 3 to 6 m (9.8 to 19.7 ft). Adult males have a distinct boss at the end of the snout, which resembles an earthenware pot known as a ghara, hence the name \"gharial\n[…]\nThe name 'gharial' is derived from the Hindustani word 'ghara' for an earthen pot, in reference to the nasal protuberance on the adult male's snout. It is also called 'gavial'. The name 'fish-eating crocodile' is a translation of its Bengali name 'mecho kumhir', with 'mecho' being derived from 'māch' meaning fish and 'kumhir' meaning crocodile. The name 'Indian gharial' has occasionally been used for gharial populations in India.\n[…]\nIn India, gharial populations are present in the:\n[…]\nThe gharial is listed on CITES Appendix I. In India, it is protected under the Wildlife Protection Act of 1972. In Nepal, it is fully protected under the National Parks and Wildlife Conservation Act of 1973.\n[…]\nIn 1975, the Indian Crocodile Conservation Project was set up under the auspices of the Government of India, initially in Odisha's Satkosia Gorge Sanctuary. It was implemented with financial aid of the United Nations Development Fund and the Food and Agriculture Organization. The country's first gharial breeding center was built in Nandankanan Zoological Park. A male gharial was flown in from Frankfurt Zoological Garden to become one of the founding animals of the breeding program.\n[…]\nJuvenile gharials have also been released into the Beas River in Punjab, India.\n[…]\nAs of 1999, gharials were also kept in the Madras Crocodile Bank Trust, Mysore Zoo, Jaipur Zoo and Kukrail Gharial Rehabilitation Centre in India.\n[…]\nCrocodiles in India\n[…]\nLenin, J. \"The song of the Ganges gharial\". www.india-seminar.com."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gavial",
        "situacao": "ok",
        "texto": "Gavial (nome científico: Gavialis gangeticus, de gavial, corruptela francesa do termo hindustani para crocodilo, ghaṛyiāl, e gangeticus, relativo ao rio Ganges) é a única espécie extante de crocodilo do gênero Gavialis, família Gavialidae. Pode ser encontrado nos rios da Índia e Nepal, e historicamente também habitava os rios do Paquistão, Butão, Bangladesh e Mianmar.\n[…]\ngangeticus por Steel (1973), entretanto, essa identificação é rejeitada por alguns pesquisadores. Espécies do gênero Gavialis foram descritas dos períodos Mioceno e Plioceno na Índia, principalmente no Grupo Sivalik. A espécie Gavialis gangeticus aparece apenas no Holoceno (Recente).\n[…]\nO gavial originalmente estava distribuído nos rios Indo, Ganges, Bramaputra e Mahanadi no Paquistão, Índia, Nepal, Bangladesh e Butão. Sua presença no rio Irrawaddy, em Mianmar, é confirmada por apenas dois registros científicos. O rio Kaladan na fronteira Índia-Mianmar também possui registro de ocorrência para a espécie. A distribuição do gavial é simpátrica com a do Crocodylus palustris. As populações do Paquistão, Butão e Mianmar, e provavelmente do Bangladesh, foram extintas.\n[…]\nOs primeiros registros do gavial são essencialmente subjetivos e raramente quantitativos. Alguns estudos passados demonstravam certa abundância de gaviais em seu habitat. Eram comuns no rio Indo, no Paquistão, nos anos 1920. Diversos autores mencionavam  ver grandes grupos de gaviais juntos. Em 1885, era comum as pessoas contarem sessenta e quatro gaviais em duas horas, às margens do Rio Jamuna. Outros relatos confirmam que eram encontrados em todos os grandes rios do norte da Índia.\n[…]\nNa Índia, há uma fábula, O Gavial e o Macaco, que conta a história de um macaco que morava em um pé de maçãs e fica amigo de um gavial.\n[…]\n«Royal Chitwan National Park Photos - Gharial crocodile» (em inglês)\n[…]\n«Gavialis gangeticus» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Aves-do-paraíso",
      "descricao": "Família de aves (Paradisaeidae) de plumagens exuberantes e danças de corte, sobretudo da Nova Guiné."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Famosas pelas penas exuberantes e pelas danças dos machos, as aves-do-paraíso vivem principalmente em que grande ilha?",
    "resposta": "Nova Guiné",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bird-of-paradise"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bird-of-paradise",
        "situacao": "ok",
        "texto": "The birds-of-paradise are members of the family Paradisaeidae of the order Passeriformes. They are found mainly in New Guinea, as well as eastern Australia and the Maluku Islands. The family has 44 species in 17 genera. The members of this family are perhaps best known for the plumage of the males of the species, the majority of which are sexually dimorphic. The males of these species tend to have\n[…]\nIn recent years the availability of pictures and videos about birds of paradise on the internet has raised the interest of birdwatchers around the world.\n[…]\nThis activity significantly reduces the number of local villagers who are involved in the hunting of paradise birds.\n[…]\nHunting of birds of paradise has occurred for a long time, possibly since the beginning of human settlement. It is a peculiarity that among the most frequently hunted species, males start mating opportunistically even before they grow their ornamental plumage. This may be an adaptation to maintaining population levels in the face of hunting pressures, which have probably been present for hundreds of years.\n[…]\nThe naturalist, explorer, and author Alfred Russel Wallace spent six years in the region, which he chronicled in The Malay Archipelago (published in 1869). His expedition team shot, collected, and described many specimens of animals and birds, including the great, king, twelve-wired, superb, red, and six-shafted birds of paradise.\n[…]\nBirds portal\n[…]\nLaman, Tim; Scholes, Edwin (2012). Birds of Paradise, Revealing the World's Most Extraordinary Birds (PDF). National Geographic Society. ISBN 978-1-426-20958-1.\n[…]\nBirds-of-Paradise Project website by the Cornell Lab of Ornithology\n[…]\nBird-of-paradise videos and images at the Cornell Lab of Ornithology\n[…]\nBirds-of-paradise infographic produced for National Geographic\n[…]\nBirds-of-paradise from Papua New Guinea, PhotographyAxis\n[…]\n\"Birds-of-Paradise\" . The New Student's Reference Work . 1914."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ave-do-para%C3%ADso",
        "situacao": "ok",
        "texto": "As aves-do-paraíso são membros da família Paradisaeidae da ordem Passeriformes. A maior parte das espécies são encontradas na Papua Nova Guiné e Australia oriental. A família possui 42 espécies em 15 gêneros. A característica mais marcante das aves-do-paraíso é a plumagem exuberante dos machos das espécies sexualmente dismórficas (a maioria), em particular as altamente elongadas e elaboradas esten\n[…]\nDas 42 espécies conhecidas de aves-do-paraíso, 38 são encontradas na Nova Guiné, duas na Austrália e duas em Molucas, no leste da Indonésia. O clima na Nova Guiné é geralmente úmido, embora seja possível distinguir entre uma \"estação seca\" de maio a novembro e uma \"estação chuvosa\" de outubro a abril. As aves-do-paraíso atingem o pico de exibição da plumagem durante a estação seca e o início da estação chuvosa, que marca o auge do período de nidificação.\n[…]\nMesmo as aves-do-paraíso que são primordialmente insetívoras ainda comem grandes quantidades de frutas; e elas são, em geral, um importante dispersor de sementes nas florestas da Nova Guiné, pois não digerem-as. As espécies que se alimentam de frutas vagam amplamente em busca de frutas e, embora possam se juntar a outras espécies que se alimentam de frutas em uma árvore frutífera, não se associarão a elas de outra forma e não permanecerão por muito tempo com outras espécies.\n[…]\nAs sociedades da Nova Guiné costumam usar plumas de ave-do-paraíso em suas vestimentas e rituais. No sudeste da Ásia, as penas continuam a ser muito valorizadas entre os papuas e os molucanos do leste da Indonésia por seu esplendor e por seu valor espiritual.\n[…]\nAs penas da ave-do-paraíso eram usadas como ornamentação pelos espanhóis e, na década de 1540, muitas foram encontradas nos principais centros culturais europeus.\n[…]\nUm macho adulto da ave-do-paraíso está representado na bandeira de Papua Nova Guiné.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Arara-azul-de-lear",
      "descricao": "Arara azul ameaçada (Anodorhynchus leari) do Raso da Catarina, no sertão da Bahia."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A arara-azul-de-lear, uma das aves mais ameaçadas do Brasil, vive nos paredões de arenito do sertão de que estado?",
    "resposta": "Bahia",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arara-azul-de-lear",
      "https://en.wikipedia.org/wiki/Lear%27s_macaw"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arara-azul-de-lear",
        "situacao": "ok",
        "texto": "Arara-azul-de-lear (nome científico: Anodorhynchus leari) é uma espécie de arara da família Psittacidae e gênero Anodorhynchus. É endêmica do Raso da Catarina, nordeste do estado da Bahia, Brasil. Após 150 anos de incertezas, sua área de ocorrência foi descoberta em 1978 pelo ornitólogo Helmut Sick. É uma espécie ameaçada devido ao tráfico de animais e à destruição de seu habitat, além de possuir \n[…]\nA arara-azul-de-lear é uma arara de porte médio, cujos indivíduos medem entre 70 e 75 centímetros. É muito semelhante em tamanho e coloração à arara-azul-pequena (Anodorhynchus glaucus), sendo que as principais diferenças entre as espécies estão na plumagem do dorso, que é azul-cobalto em A. leari e azul mais pálido e esverdeado em A. glaucus, que apresenta também tons de cinza na cabeça e no pescoço.\n[…]\nA arara-azul-de-lear já tinha sido descoberta 1823, e diversos exemplares foram enviados para zoológicos da Europa. No entanto, nada se sabia sobre a procedência e a área de ocorrência da espécie. Na segunda metade do século XX, Olivério Pinto, em uma expedição pelo Nordeste, encontrou um exemplar cativo no município de Juazeiro e indicou o Nordeste brasileiro como a possível área de distribuição desta arara.\n[…]\nA espécie é endêmica do estado da Bahia, onde pode ser encontrada em duas colônias, Toca Velha em Canudos e Serra Branca, ao sul do Raso da Catarina. Sua área de distribuição está restrita ao nordeste do estado ocorrendo nos municípios de Canudos, Euclides da Cunha, Paulo Afonso, Uauá, Jeremoabo, Sento Sé e Campo Formoso.\n[…]\nEm 2001 é criado o \"Programa de Conservação da arara-azul-de-lear\" no município de Jeremoabo.\n[…]\n«Plano de Ação Nacional para a Conservação da Arara-azul-de-lear» , ICMBio\n[…]\n(em inglês) Fundo documental ARKive (fotografias, sons e vídeos)  : Anodorhynchus leari\n[…]\n«A. leari no Wikiaves»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lear%27s_macaw",
        "situacao": "ok",
        "texto": "Lear's macaw (Anodorhynchus leari), also known as the indigo macaw, is a large all-blue Brazilian parrot, a member of a large group of neotropical parrots known as macaws. It was first described by Charles Lucien Bonaparte in 1856. Lear's macaw is 70–75 cm (27+1⁄2–29+1⁄2 in) long and weighs around 950 g (2 lb 2 oz). It is coloured almost completely blue, with a yellow patch of skin at the base of \n[…]\nFor a century and a half after it had been described, the species was only known from sporadic occurrences in the bird trade, and the whereabouts of the wild population was unknown. A wild population was eventually discovered in 1978 by ornithologist Helmut Sick in Bahia in the interior northeast of Brazil. Until this discovery the birds were thought to be simply a variant form of the closely related hyacinth macaw.\n[…]\nLear's macaw roosts on sandstone cliffs, which were formed by streams cutting through outcrops. It is known from two colonies at locations known as Toca Velha and Serra Branca, south of the Raso da Catarina plateau in northeast Bahia. In 1995, a roosting site holding 22 birds was located at Sento Sé/Campo Formoso, 200 km (120 mi) to the west.\n[…]\nIn 1992 the 'Special Working Group for the Preservation of the Lear's Macaw' was created. In 1997 the 'Committee for the Preservation of the Lear's Macaw (Anodorhynchus leari)' was formed. In 1999 this committee was amalgamated with that of A. hyacinthinus and was renamed 'The Committee for the Recovery and Management of the Anodorhynchus leari Lear's Macaw and Anodorhynchus hyacinthinus Hyacinth Macaw'.\n[…]\nOne of the earliest records (and one of very few at all) of a Lear's macaw in a public zoo was a dramatic display of \"the four blues\" including Lear's, glaucous, hyacinth, and Spix's macaws in 1900 at the Berlin Zoo.\n[…]\nThe Mystery of Lear's Macaw\n[…]\nimages and movies of the Lear's macaw (Anodorhynchus leari) at ARKive"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Arara-azul-de-lear",
      "descricao": "Arara azul ameaçada (Anodorhynchus leari) do Raso da Catarina, no sertão da Bahia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A arara-azul-de-lear homenageia um artista inglês do século dezenove que a pintou e ficou famoso por poemas sem sentido. Quem?",
    "resposta": "Edward Lear",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lear%27s_macaw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lear%27s_macaw",
        "situacao": "ok",
        "texto": "Lear's macaw (Anodorhynchus leari), also known as the indigo macaw, is a large all-blue Brazilian parrot, a member of a large group of neotropical parrots known as macaws. It was first described by Charles Lucien Bonaparte in 1856. Lear's macaw is 70–75 cm (27+1⁄2–29+1⁄2 in) long and weighs around 950 g (2 lb 2 oz). It is coloured almost completely blue, with a yellow patch of skin at the base of \n[…]\nLear's macaw was named after the famous poet, Edward Lear, who was also an accomplished artist. In his teens in the early 1830s, Lear published a book of drawings and paintings of live parrots in zoos and collections, Illustrations of the Family of Psittacidae, or Parrots.\n[…]\nAs well as habitat loss, Lear's macaw may have historically suffered from hunting, and more recently, trapping for the aviary trade in the 1990s.\n[…]\nIn 1992 the 'Special Working Group for the Preservation of the Lear's Macaw' was created. In 1997 the 'Committee for the Preservation of the Lear's Macaw (Anodorhynchus leari)' was formed. In 1999 this committee was amalgamated with that of A. hyacinthinus and was renamed 'The Committee for the Recovery and Management of the Anodorhynchus leari Lear's Macaw and Anodorhynchus hyacinthinus Hyacinth Macaw'.\n[…]\nOne of the earliest records (and one of very few at all) of a Lear's macaw in a public zoo was a dramatic display of \"the four blues\" including Lear's, glaucous, hyacinth, and Spix's macaws in 1900 at the Berlin Zoo.\n[…]\nAccording to the World Parrot Trust, the Lear's macaw is currently extremely rare in captivity and may live for 60 years, whereas the Animal Ageing and Longevity Database cites the maximum recorded longevity for a captive Lear's macaw at 38.3 years. It is recommended that this parrot be kept in an enclosure of 15 metres (49 ft) in length.\n[…]\nThe Mystery of Lear's Macaw\n[…]\nimages and movies of the Lear's macaw (Anodorhynchus leari) at ARKive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arara-azul-de-lear",
        "situacao": "ok",
        "texto": "Arara-azul-de-lear (nome científico: Anodorhynchus leari) é uma espécie de arara da família Psittacidae e gênero Anodorhynchus. É endêmica do Raso da Catarina, nordeste do estado da Bahia, Brasil. Após 150 anos de incertezas, sua área de ocorrência foi descoberta em 1978 pelo ornitólogo Helmut Sick. É uma espécie ameaçada devido ao tráfico de animais e à destruição de seu habitat, além de possuir \n[…]\nA arara-azul-de-lear é uma arara de porte médio, cujos indivíduos medem entre 70 e 75 centímetros. É muito semelhante em tamanho e coloração à arara-azul-pequena (Anodorhynchus glaucus), sendo que as principais diferenças entre as espécies estão na plumagem do dorso, que é azul-cobalto em A. leari e azul mais pálido e esverdeado em A. glaucus, que apresenta também tons de cinza na cabeça e no pescoço.\n[…]\nA espécie foi descrita por Charles Lucien Bonaparte em 1856 com o nome de Anodorhynchus leari a partir de um exemplar taxidermizado presente no Museu de Paris e de um indivíduo no Zoológico de Anvers. O epíteto específico foi em homenagem a Edward Lear que pintou um exemplar em uma prancha de seu livro Illustrations of the Family of the Psittacidae, or Parrots em 1828, entretanto, ele designou a espécie como Macrocercus hyacinthinus.\n[…]\nA arara-azul-de-lear é classificada pela União Internacional para a Conservação da Natureza e dos Recursos Naturais (IUCN) como \"em perigo\", até 2008 era considerada como \"em perigo crítico\", mas o aumento da população devido as medidas de conservação fizeram com a classificação fosse revista em 2009.\n[…]\nEm 2001 é criado o \"Programa de Conservação da arara-azul-de-lear\" no município de Jeremoabo.\n[…]\n«Plano de Ação Nacional para a Conservação da Arara-azul-de-lear» , ICMBio\n[…]\n(em inglês) Fundo documental ARKive (fotografias, sons e vídeos)  : Anodorhynchus leari\n[…]\n«A. leari no Wikiaves»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pato-mergulhão",
      "descricao": "Pato brasileiro criticamente ameaçado (Mergus octosetaceus) de rios de águas limpas do Cerrado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O pato-mergulhão, um dos patos mais raros do mundo, tem sua maior população numa serra mineira onde nasce o São Francisco. Qual?",
    "resposta": "Serra da Canastra",
    "distratores": [
      "Serra do Cipó",
      "Serra da Mantiqueira",
      "Serra do Caraça"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pato-mergulhão",
      "https://en.wikipedia.org/wiki/Brazilian_merganser"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pato-mergulhão",
        "situacao": "ok",
        "texto": "O pato-mergulhão (Mergus octosetaceus) é uma ave endêmica do Brasil da família Anatidae e do gênero Mergus. É uma das 10 aves aquáticas mais raras, emblemáticas e ameaçadas de extinção do mundo.\n[…]\nEstima-se que haja em todo mundo apenas de 200 a 250 indivíduos, sendo mais encontrados na Serra da Canastra em Minas Gerais, na Chapada dos Veadeiros em Goiás e no Parque Estadual do Jalapão no Tocantins, áreas que garantem a preservação da biodiversidade da região. Tendo registros recentes de uma restrita população na Serra do Mar em São Paulo. Desta forma, é válido ressaltar a importância das unidades de conservação a fim de garantir a sobrevivência desta espécie.\n[…]\nHá relatos de reprodução em cativeiro, como é o caso do Zooparque Itatiba, zoológico que faz parte do Plano de Ação Nacional para a Conservação do Pato-mergulhão desenvolvido pelo ICMBio, que pela primeira vez no mundo foi palco deste fato peculiar, onde na ocasião nasceram 4 filhotes da espécie\n[…]\nO Instituto Terra Brasilis de Desenvolvimento Socioambiental em 2008 iniciou o programa de monitoramento do pato-mergulhão na Serra da Canastra em Minas Gerais. Onde, por sua vez, tinha na ocasião o intuito primordial de determinar aspectos de sua biologia bem como quantificar área de seu território, padrão de disseminação dos jovens, dominação de novas localidades e estimativas mais fidedignas sobre o tamanho da população da espécie na região.\n[…]\nAté os anos 90 pouco se sabia a respeito dos hábitos do pato-mergulhão, que foi dado como extinto nas décadas de 40 e 50. Na década de 90 foi descoberta uma restrita população no Parque Nacional da Serra da Canastra, que está sendo minuciosamente zelada e monitorada por pesquisadores."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_merganser",
        "situacao": "ok",
        "texto": "The Brazilian merganser (Mergus octosetaceus) is a South American diving duck in the Mergus genus.\n[…]\nThe Brazilian merganser population in the Serra da Canastra region is the most significant and best known, with populations occurring hundreds of kilometers away from each other. There are 47 individuals—28 adults and 19 young—in the Serra de Canastra region as of 2006. Most mergansers are found in the Serra da Canastra National Park. 70 birds have been seen near the park's headquarters in rio São Francisco.\n[…]\nAnother threat to the Brazilian merganser is tourism. The scenic beauty of Serra de Canastra National Park brings people from around the world to see the ecotourism landmark. Tourists are attracted to the abundant supply of clear water with over 150 waterfalls in the area. Sporting activities also create a disturbance for the Brazilian mergansers.\n[…]\nBarbosa, M. O. & Almeida, M. L. (2010). Novas observações e dados reprodutivos do pato-mergulhão Mergus octosetaceus na região do Jalapão, Tocantins, Brasil. Cotinga 32: OL 40–45.\n[…]\n\"Brazilian Merganser\". Wildfowl and Wetlands Trust. November 10, 2008 [3].\n[…]\nFereiro Bruno, Sávio; de Carvalho, Rafael Bessa Alves; Bartmann, Wolf (2006). \"Reproductive Rate and Development of Ducklings of Brazilian Merganser at Serra da Canastra National Park, Minas Gereias, Brazil, 2001-2005\" TWSG News 15: 25–33 [6]\n[…]\nWildlife Extra, \"Critically Endangered Brazilian Merganser to be radio tagged \". Wildfowl and Wetlands Trust. December 1, 2008 [8].\n[…]\nARKive – images and movies of the Brazilian merganser (Mergus octosetaceus)\n[…]\nBrazilian Merganser on postage stamps"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Dodô",
      "descricao": "Ave não voadora extinta (Raphus cucullatus), endêmica da ilha Maurício, no Oceano Índico."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Caçado por marinheiros e atacado por animais trazidos por eles, o dodô da ilha Maurício foi extinto em que século?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dodô",
      "https://en.wikipedia.org/wiki/Dodo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dodô",
        "situacao": "ok",
        "texto": "Dodô (português brasileiro) ou dodó (português europeu) (nome científico: Raphus cucullatus) é uma espécie extinta de ave da família dos pombos que era endêmica de Maurício, uma ilha no Oceano Índico a leste de Madagascar. Era incapaz de voar e não tinha medo de seres humanos, pois evoluiu isolado e sem predadores naturais na ilha que habitava. Foi descoberto em 1598 por navegadores holandeses e t\n[…]\nO dodô, que pode ter sido um filhote, parece ter sido seco ou embalsamado, e provavelmente viveu no jardim zoológico do imperador por um tempo junto com os outros animais. Os dodôs inteiros empalhados que existiam na Europa naquela época indicam que eles tinham sido trazidos vivos e morreram em solo europeu; é improvável que taxidermistas estavam a bordo dos navios que visitaram Maurício, e o formol ainda não era usado para preservar espécimes biológicos.\n[…]\nHá algumas controvérsias envolvendo a data da extinção. O último registro amplamente aceito de um avistamento de dodô é o relato feito em 1662 pelo marinheiro náufrago Volkert Evertsz do navio holandês Arnhem, que descreveu aves capturadas em uma pequena ilhota de Maurício (atualmente acredita-se que seja a ilha Âmbar):\n[…]\nEm qualquer caso, o dodô foi provavelmente extinto em 1700, cerca de um século depois de sua descoberta em 1598. Os holandeses deixaram Maurício em 1710, mas até essa data o dodô e a maioria dos grandes vertebrados terrestres da ilha já haviam se tornado extintos.\n[…]\nEm 1889, Theodor Sauzier foi contratado para explorar as \"lembranças históricas\" da ilha Maurício e encontrar mais restos de dodô no Mare aux Songes. Não só alcançou esses objetivos como também encontrou resquícios de outras espécies extintas.\n[…]\nEm junho de 2007, os aventureiros que exploravam uma caverna na ilha Maurício descobriram o esqueleto de dodô mais completo e mais bem preservado já encontrado. O espécime foi apelidado de \"Fred\", após o achado."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dodo",
        "situacao": "ok",
        "texto": "The dodo (Raphus cucullatus) is an extinct flightless bird that was endemic to Mauritius,  an island east of Madagascar in the Indian Ocean. The dodo's closest relative was the also-extinct and flightless Rodrigues solitaire. The two formed the subtribe Raphina, a clade of extinct flightless birds that are a part of the group that includes pigeons and doves (the family Columbidae). The closest liv\n[…]\nThe Latin name cucullatus (\"hooded\") was first used in 1635 by the Spanish Jesuit Juan Eusebio Nieremberg as Cygnus cucullatus, in reference to Carolus Clusius's 1605 depiction of a dodo. In the tenth edition of his 18th-century classic work Systema Naturae, the Swedish naturalist Carl Linnaeus used cucullatus as the specific name, but combined it with the genus name Struthio (ostrich).\n[…]\nMathurin Jacques Brisson coined the genus name Raphus (referring to the bustards) in 1760, resulting in the current name Raphus cucullatus. In 1766, Linnaeus coined the new binomial Didus ineptus (meaning \"inept dodo\"). This has become a synonym of the earlier name because of nomenclatural priority.\n[…]\nBaron Edmond de Sélys Longchamps coined the name Raphus solitarius for these birds in 1848, as he believed the accounts referred to a species of dodo. When 17th-century paintings of white dodos were discovered by 19th-century naturalists, it was assumed they depicted these birds. Oudemans suggested that the discrepancy between the paintings and the old descriptions was that the paintings showed females, and that the species was therefore sexually dimorphic.\n[…]\nPainting the Dodo: Two-minute video about Julian Hume's modern interpretation of Roelant Savery's Dodo\n[…]\nDodo Bird Unboxing: Seven-minute video showing the Oxford specimen being taken out of storage and discussed\n[…]\nAves3D – Raphus cucullatus Archived September 23, 2023, at the Wayback Machine: Interactive 3D scans of various dodo elements"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Arau-gigante",
      "descricao": "Ave marinha não voadora do Atlântico Norte (Pinguinus impennis), extinta em 1844."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O último casal conhecido do arau-gigante, ave marinha sem voo, foi morto numa ilhota da Islândia. Em que ano?",
    "resposta": "1844",
    "distratores": [
      "1755",
      "1798",
      "1914"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arau-gigante",
      "https://en.wikipedia.org/wiki/Great_auk"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arau-gigante",
        "situacao": "ok",
        "texto": "Arau-gigante ou alca-gigante (nome científico: Pinguinus impennis) é uma espécie extinta de ave da família dos alcídeos que vivia no Atlântico Norte. Seu território original compreendia uma vasta região do Canadá a Noruega, incluindo a Islândia, ilhas Britânicas, França e norte da Espanha. Incapaz de voar, passava a maior parte da vida na água, de onde saía apenas na época do acasalamento.\n[…]\nEm português, a ave é conhecida popularmente como arau-gigante, torda-grande, pega-gigante, e alca-gigante.\n[…]\nNa ilhota Stac an Armin, no arquipélago de Saint Kilda, Escócia, em julho de 1844, o último arau-gigante visto nas ilhas britânicas foi capturado e morto. Três homens da região pegaram um único \"garefowl\" (um dos nomes populares da espécie em língua inglesa), mencionando suas asinhas e a grande mancha branca na cabeça. Eles o amarraram e o mantiveram vivo por três dias, até que veio uma grande tempestade.\n[…]\nA última colônia de araus-gigantes viveu em Geirfuglasker (a \"Grande Rocha do Arau\", em tradução livre) na costa da Islândia. Este ilhéu era uma rochedo vulcânico cercado por falésias, o que o tornava inacessível aos seres humanos, mas em 1830 ele submergiu após uma erupção vulcânica, e as aves se mudaram para a vizinha ilha de Eldey, que era acessível apenas por um dos lados. Quando a colônia foi descoberta em 1835, cerca de cinquenta aves estavam no local.\n[…]\nMuseus, cobiçando as peles do arau para conservação e exposição, rapidamente começaram a coletar exemplares da ave na colônia. O último casal, encontrado incubando um ovo, foi morto lá em 3 de julho de 1844, a pedido de um comerciante que queria espécimes. Jón Brandsson e Sigurður Ísleifsson estrangularam os adultos e Ketill Ketilsson esmagou o ovo com a bota.\n[…]\nO arau-gigante também aparece num selo lançado em Cuba em 1974.\n[…]\n\"The Home of the Great Auk\" em Popular Science Monthly volume 33 - Agosto de 1888 (em inglês)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_auk",
        "situacao": "ok",
        "texto": "The great auk (Pinguinus impennis), also known as the penguin or garefowl, is an extinct species of flightless alcid that first appeared around 400,000 years ago and was driven to extinction by human exploitation in the mid-19th century. It was the only modern species in the genus Pinguinus. It was not closely related to the penguins of the Southern Hemisphere, which were named for their resemblan\n[…]\nIts growing rarity increased interest from European museums and private collectors in obtaining skins and eggs of the bird. On 3 June 1844, the last two confirmed specimens were killed on Eldey, off the coast of Iceland, ending the last known breeding attempt. Later reports of roaming individuals being seen or caught are unconfirmed. A report of one great auk in 1852 is considered by some to be the last sighting of a member of the species.\n[…]\nMuseums, desiring the skins of the great auk for preservation and display, quickly began collecting birds from the colony. The last pair, found incubating an egg, was killed there on 3 June 1844, on request from a merchant who wanted specimens.\n[…]\nNatural mummies also are known from Funk Island, and the eyes and internal organs of the last two birds from 1844 are stored in the Zoological Museum, Copenhagen.\n[…]\nPenguin Island, a 1908 French satirical novel by the Nobel Prize winning author Anatole France, narrates the fictional history of a great auk population that is mistakenly baptized by a nearsighted missionary.\n[…]\nEoghan Walls book Field Notes from an Extinction (2026) tells the story of an ornithologist studying a flock of great auks on Tor Mor, an uninhabited outcrop off the island of Inishtrahul, off the coast of Ireland.\n[…]\nWalton Ford, the American painter, has featured great auks in two paintings: The Witch of St. Kilda and Funk Island. Replica skins and eggs were made and sold in the 1920s for collectors."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Ararinha-azul",
      "descricao": "Pequena arara azul (Cyanopsitta spixii) da caatinga do norte da Bahia."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Antes da reintrodução, o último exemplar conhecido de ararinha-azul vivendo livre na caatinga, um macho, desapareceu em que ano?",
    "resposta": "2000",
    "distratores": [
      "1987",
      "1994",
      "2012"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Spix%27s_macaw",
      "https://pt.wikipedia.org/wiki/Ararinha-azul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Spix%27s_macaw",
        "situacao": "ok",
        "texto": "Spix's macaw (Cyanopsitta spixii), also known as the little blue macaw, or simply blue macaw, is a macaw species that was endemic to Brazil. It is a member of tribe Arini in the subfamily Arinae (Neotropical parrots), part of the family Psittacidae (the true parrots). It was first described in 1638 by German naturalist Georg Marcgrave when he was working in Pernambuco in Dutch Brazil.\n[…]\nIt is listed on CITES Appendix I, which makes international trade prohibited except for legitimate conservation, scientific or educational purposes. The IUCN regard the Spix's macaw as extinct in the wild. Its last known stronghold in the wild was in northeastern Bahia, Brazil, and sightings were very rare. After a 2000 sighting of a male bird, the next and last sighting was in 2016.\n[…]\nTwo of the birds were captured for trade in 1987. A single male, paired with a female blue-winged macaw, was discovered at the site in 1990. A female Spix's macaw released from captivity at the site in 1995 was killed by collision with a power line after seven weeks. The last wild male disappeared from the site in October 2000; his disappearance was thought to have marked the extinction of this species in the wild. However, wild Spix's macaws may have been sighted in 2016.\n[…]\nBetween 2000 and 2003, most of two large collections of Spix at Birds International in the Philippines and the aviaries of Swiss aviculturist Dr. Hämmerli were purchased by Sheikh Saud bin Muhammed bin Ali Al-Thani of Qatar and became Al Wabra Wildlife Preservation. Under the Sheikh were instituted standards of animal keeping, veterinary care, animal husbandry and stud book records for the conservation of the Spix's.\n[…]\nNote: table data based on \"Al Wabra ICMBio data from June 2013\" and Watson, R. (Studbook Keeper) 2011. \"Annual Report and Recommendations for 2011: Spix's Macaw (Cyanopsitta spixii)\".\n[…]\nBBC Nature: Spix's macaw"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ararinha-azul",
        "situacao": "ok",
        "texto": "A ararinha-azul (nome científico: Cyanopsitta spixii, do grego: kuanos \"azul-piscina; ciano\" + do latim: psitta, \"papagaio\"; e spixii, em homenagem a Johann Baptist von Spix) é uma espécie de ave da família Psittacidae endêmica do Brasil. É a única espécie descrita para o gênero Cyanopsitta. Outros vernáculos associados a esta espécie são arara-azul-de-spix e arara-celeste, ou arara-de-spix.\n[…]\nEm decorrência do corte indiscriminado de árvores da caatinga e do tráfico ilegal, a população se reduziu até restar um único indivíduo, que desapareceu em 2000-2001. Está seriamente ameaçada de extinção, existindo somente 240 indivíduos em cativeiro (em janeiro de 2022), tendo sido declarada extinta na natureza pelo governo brasileiro e na Lista Vermelha da União Internacional para a Conservação da Natureza e dos Recursos Naturais (IUCN).\n[…]\nO nome ararinha-azul foi o selecionado como nome vernáculo técnico para a espécie Cyanopsitta spixii em 2021 pelo Comitê Brasileiro de Registros Ornitológicos (CBRO).\n[…]\nO projeto de reintrodução da ararinha-azul no Brasil incluiu a criação de duas unidades de conservação na Bahia: o Refúgio de Vida Silvestre da Ararinha-azul, em Curaçá, e a Área de Proteção Ambiental da Ararinha-azul, em Juazeiro, além de um trabalho de conscientização feito junto à população local e a construção de um centro de reprodução e readaptação. Em 2021, um casal teve três filhotes na região da caatinga baiana.\n[…]\nO vírus é letal para os psitacídeos e não tem cura e até o momento ainda tinha registro de sua ocorrência em animais de vida livre no Brasil. Todas as 11 ararinhas testaram positivo para o vírus, nove delas foram reintroduzidas na Caatinga em 2022 e duas nasceram em liberdade. Em dezembro de 2025, outras 20 ararinhas que viviam no criadouro também estavam infectadas.\n[…]\n«Spix's Macaw (Cyanopsitta spixii), The Internet Bird Collection» (em inglês)"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Sabiá-laranjeira",
      "descricao": "Ave canora (Turdus rufiventris), ave nacional do Brasil, de ventre alaranjado."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano um decreto presidencial oficializou o sabiá-laranjeira como ave-símbolo do Brasil?",
    "resposta": "2002",
    "distratores": [
      "1889",
      "1922",
      "1968"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Sabiá-laranjeira"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Sabiá-laranjeira",
        "situacao": "ok",
        "texto": "O sabiá-laranjeira (nome científico: Turdus rufiventris) é uma ave comum na América do Sul e o mais conhecido de todos os sabiás, identificado pela cor de ferrugem do ventre e por seu canto melodioso durante o período reprodutivo. É especialmente apreciado no Brasil; segundo Decreto de 3 de outubro de 2002, as comemorações nacionais do Dia da Ave devem se concentrar no sabiá-laranjeira, \"símbolo r\n[…]\nO nome nativo da ave era sabîápytanga, que em  tupi antigo significava sabiá alaranjado (pytanga). No Brasil tem uma quantidade de denominações populares, entre elas sabiá-cavalo, sabiá-ponga, piranga, ponga, sabiá-coca, sabiá-de-barriga-vermelha, sabiá-gongá, sabiá-laranja, sabiá-piranga, sabiá-poca, sabiá-amarelo, sabiá-vermelho ou sabiá-de-peito-roxo. Os nomes piranga e sabiá-piranga vem do tupi piranga, vermelho.\n[…]\nEm espanhol é conhecido como tordo de vientre rufo, zorzal colorado, zorzal común. No Brasil, o nome \"sabiá-laranjeira\" foi selecionado como nome vernáculo técnico para a espécie pelo Comitê Brasileiro de Registros Ornitológicos.\n[…]\nÉ uma das aves mais populares do Brasil, sendo uma presença comum em seu folclore e mesmo na cultura erudita, sendo indicado por decreto presidencial de 2002 como centro das comemorações do Dia da Ave.\n[…]\nEm ofício ao presidente Fernando Henrique Cardoso, a comissão de ministros encarregada da escolha justificou-se dizendo que o sabiá-laranjeira tem larga distribuição nacional e porque é, dentre as aves, \"a mais inspiradora e, conseqüentemente, a mais aclamada e decantada pelo sentimento popular e cultural\". Em pesquisa de opinião realizada pelo jornal Folha do Meio Ambiente 91,7% dos entrevistados manifestou seu apoio à decisão.\n[…]\nOnde canta o Sabiá;\n[…]\nUma sabiá\n[…]\nCantar uma sabiá.\n[…]\nOuça o canto do sabiá-laranjeira:\n[…]\nVeja foto do sabiá-laranjeira com leucismo.\n[…]\nSabiá laranjeira no site WikiAves"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Cher Ami",
      "descricao": "Pombo-correio do Exército americano condecorado por salvar o Batalhão Perdido em 1918."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Cher Ami, pombo-correio condecorado por ajudar a salvar cerca de duzentos soldados americanos cercados, serviu em que guerra?",
    "resposta": "Primeira Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cher_Ami"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cher_Ami",
        "situacao": "ok",
        "texto": "Cher Ami (French for \"dear friend\", in the masculine) was a male homing pigeon known for his military service during World War I, especially the Meuse-Argonne offensive in October 1918. According to popular legend, he delivered a message alerting American forces to the location of the Lost Battalion, despite sustaining injuries such as being shot in the breast, losing his right leg and being blind\n[…]\nHe gave the note to Private Omer Richards, who placed it in a capsule and took one of two remaining pigeons from his pigeon basket. A nearby shell surprised the two, and the pigeon escaped. Richards then took the last pigeon, purportedly Cher Ami, tied the message to his right leg, and released it. Cher Ami landed a short distance away on a branch. The Americans attempted to shoo the bird on, but he did not continue on until Richards climbed the tree and shook the branch.\n[…]\nAccording to Frank A. Blazich Jr., the curator of modern military history at the Smithsonian Institution’s National Museum of American History, where Cher Ami's body is located, \"There is nothing conclusive linking the pigeon to the actions of the Lost Battalion. Cher Ami did survive severe wounds transporting a message, but exactly where and when are uncertain. The U.S.\n[…]\nIn 2021, the National Museum of American History, together with the Smithsonian's National Zoo, had DNA samples from Cher Ami analyzed which concluded the bird is a cock bird.\n[…]\nSince 1921, Cher Ami has been on display at the Smithsonian Institution, then the United States National Museum. Today, he is on display in the National Museum of American History exhibit \"The Price of Freedom: Americans at War.\"\n[…]\nThe Lost Battalion, a 2001 war film about the Meuse-Argonne Offensive of 1918, depicting Cher Ami being sent off with the important message.\n[…]\nA reference to Cher Ami is made in the 2024 Netflix series The Gentlemen."
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Águia-careca",
      "descricao": "Ave de rapina norte-americana (Haliaeetus leucocephalus) de cabeça branca, símbolo nacional dos Estados Unidos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A águia-careca foi escolhida para estampar o Grande Selo dos Estados Unidos em que século?",
    "resposta": "Século dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bald_eagle",
      "https://en.wikipedia.org/wiki/Great_Seal_of_the_United_States"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bald_eagle",
        "situacao": "ok",
        "texto": "The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle (Haliaeetus albicilla), which occupies the same niche as the bald eagle in the Palearctic. Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico. It is found near large bodi\n[…]\nThe bald eagle is placed in the genus Haliaeetus (sea eagles), and gets both its common and specific scientific names from the distinctive appearance of the adult's head. Bald in the English name is from an older usage meaning \"having white on the face or head\" rather than \"hairless\", referring to the white head feathers contrasting with the darker body.\n[…]\nThe genus name is Neo-Latin: Haliaeetus (from the Ancient Greek: ἁλιάετος, romanized: haliaetos, lit. 'sea eagle'), and the specific name, leucocephalus, is Latinized (Ancient Greek: λευκός, romanized: leukos, lit. 'white') and (κεφαλή, kephalḗ, 'head').\n[…]\nThe bald eagle was one of the many species originally described by Carl Linnaeus in his 18th-century work Systema Naturae, under the name Falco leucocephalus.\n[…]\nAdditionally, the bald eagle's close cousins, the relatively longer-winged but shorter-tailed white-tailed eagle and the overall larger Steller's sea eagle (Haliaeetus pelagicus), may, rarely, wander to coastal Alaska from Asia.\n[…]\nEagle lady\n[…]\nGrant, Peter J. (1988) \"The Co. Kerry Bald Eagle\" Twitching 1(12): 379–80 – describes plumage differences between bald eagle and white-tailed eagle in juveniles\n[…]\nThe National Eagle Center\n[…]\nAmerican Bald Eagle Foundation\n[…]\nAmerican Bald Eagle Information Archived January 16, 2009, at the Wayback Machine\n[…]\nBald eagle bird sound – Florida Museum of Natural History\n[…]\nExplore Species: Bald Eagle at eBird (Cornell Lab of Ornithology)\n[…]\nBald eagle photo gallery at VIREO (Drexel University)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_Seal_of_the_United_States",
        "situacao": "ok",
        "texto": "The Great Seal of the United States is the seal of the United States of America. The phrase is used both for the impression device itself, which is kept by the United States secretary of state, and more generally for the impression it produces. The obverse of the Great Seal depicts the national coat of arms of the United States while the reverse features a truncated pyramid topped by an Eye of Pro\n[…]\nThe supporter of the shield is a bald eagle with its wings outstretched (or \"displayed\", in heraldic terms). From the eagle's perspective, it holds a bundle of 13 arrows in its left talon, and an olive branch in its right talon. Although not specified by law, the olive branch is usually depicted with 13 leaves and 13 olives. In its beak, the eagle clutches a scroll with the motto E pluribus unum (\"Out of Many, One\"). Over its head there appears a glory with 13 mullets (stars) on a blue field.\n[…]\nThomson used the eagle—this time specifying an American bald eagle—as the sole supporter on the shield. The shield had thirteen stripes, this time in a chevron pattern, and the eagle's claws held an olive branch and a bundle of thirteen arrows. For the crest, he used Hopkinson's constellation of thirteen stars. The motto was E Pluribus Unum, taken from the first committee, and was on a scroll held in the eagle's beak.\n[…]\nFor the reverse, Thomson essentially kept Barton's design, but re-added the triangle around the Eye of Providence and changed the mottos to Annuit Cœptis and Novus Ordo Seclorum. Thomson sent his designs back to Barton, who made some final alterations. The stripes on the shield were changed again, this time to \"palewise\" (vertical), and the eagle's wing position was changed to \"displayed\" (wingtips up) instead of \"rising\". Barton also wrote a more properly heraldic blazon.\n[…]\nEagle (though not a bald eagle)\n[…]\nBald eagle\n[…]\nPosition of eagle's wings"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81guia-de-cabe%C3%A7a-branca",
        "situacao": "ok",
        "texto": "A águia-de-cabeça-branca, águia-careca, águia-calva, águia-americana ou pigargo-americano  (Haliaeetus leucocephalus) é uma águia nativa da América do Norte. Sua distribuição geográfica inclui a maioria do Canadá, todos os Estados Unidos sendo o Alasca a sua maior distribuição, e norte do México. Encontra-se perto de grandes corpos de águas abertas com abundância de alimento e árvores antigas para\n[…]\nÁguias-carecas não são realmente carecas: o nome deriva de um significado mais antigo da expressão \"cabeça branca\". O adulto é principalmente marrom com uma cabeça e uma cauda branca. Os sexos são idênticos na plumagem, mas as fêmeas são cerca de vinte e cinco por cento maiores do que os machos. O bico é grande e enganchado. A plumagem do imaturo é marrom.\n[…]\nA águia-careca é o símbolo nacional dos Estados Unidos da América, sendo tanto o pássaro quanto o animal nacional e aparecendo, inclusive, em seu selo. No final do século XX estava à beira da extinção ao longo dos Estados Unidos. As populações já se recuperaram e a espécie foi removida da lista de espécies ameaçadas de extinção pelo governo dos EUA em 12 de julho de 1995 e transferida para a lista de espécies ameaçadas.\n[…]\nFoi removido da Lista de Animais Selvagens Ameaçados e Ameaçados nos quarenta e oito estados mais baixos em 28 de junho de 2007. Atualmente existem uma população estimada de mais de 300.000 de águias-carecas nos Estados Unidos e a população continua aumentando.\n[…]\nA águia-americana adulta é facilmente reconhecida pela cabeça, pescoço e cauda brancos. As águias mais novas têm a cabeça e a cauda marrons ou castanhos. A plumagem branca só aparece quando a águia tem mais ou menos cinco anos de idade.\n[…]\nComo outras aves de rapina, possui um bico grande, curvo e afiado (geralmente amarelo), que serve para dilacerar sua comida.\n[…]\nH. l. leucocephaluss",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Águia-careca",
      "descricao": "Ave de rapina norte-americana (Haliaeetus leucocephalus) de cabeça branca, símbolo nacional dos Estados Unidos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em meados do século vinte, a águia-careca ficou ameaçada nos Estados Unidos porque um inseticida deixava frágil a casca de seus ovos. Que inseticida?",
    "resposta": "DDT",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bald_eagle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bald_eagle",
        "situacao": "ok",
        "texto": "The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle (Haliaeetus albicilla), which occupies the same niche as the bald eagle in the Palearctic. Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico. It is found near large bodi\n[…]\nThe bald eagle is placed in the genus Haliaeetus (sea eagles), and gets both its common and specific scientific names from the distinctive appearance of the adult's head. Bald in the English name is from an older usage meaning \"having white on the face or head\" rather than \"hairless\", referring to the white head feathers contrasting with the darker body.\n[…]\nThe genus name is Neo-Latin: Haliaeetus (from the Ancient Greek: ἁλιάετος, romanized: haliaetos, lit. 'sea eagle'), and the specific name, leucocephalus, is Latinized (Ancient Greek: λευκός, romanized: leukos, lit. 'white') and (κεφαλή, kephalḗ, 'head').\n[…]\nThe bald eagle was one of the many species originally described by Carl Linnaeus in his 18th-century work Systema Naturae, under the name Falco leucocephalus.\n[…]\nAdditionally, the bald eagle's close cousins, the relatively longer-winged but shorter-tailed white-tailed eagle and the overall larger Steller's sea eagle (Haliaeetus pelagicus), may, rarely, wander to coastal Alaska from Asia.\n[…]\nEagle lady\n[…]\nGrant, Peter J. (1988) \"The Co. Kerry Bald Eagle\" Twitching 1(12): 379–80 – describes plumage differences between bald eagle and white-tailed eagle in juveniles\n[…]\nThe National Eagle Center\n[…]\nAmerican Bald Eagle Foundation\n[…]\nAmerican Bald Eagle Information Archived January 16, 2009, at the Wayback Machine\n[…]\nBald eagle bird sound – Florida Museum of Natural History\n[…]\nExplore Species: Bald Eagle at eBird (Cornell Lab of Ornithology)\n[…]\nBald eagle photo gallery at VIREO (Drexel University)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81guia-de-cabe%C3%A7a-branca",
        "situacao": "ok",
        "texto": "A águia-de-cabeça-branca, águia-careca, águia-calva, águia-americana ou pigargo-americano  (Haliaeetus leucocephalus) é uma águia nativa da América do Norte. Sua distribuição geográfica inclui a maioria do Canadá, todos os Estados Unidos sendo o Alasca a sua maior distribuição, e norte do México. Encontra-se perto de grandes corpos de águas abertas com abundância de alimento e árvores antigas para\n[…]\nNa natureza elas podem viver até vinte anos.\n[…]\nÁguias-carecas não são realmente carecas: o nome deriva de um significado mais antigo da expressão \"cabeça branca\". O adulto é principalmente marrom com uma cabeça e uma cauda branca. Os sexos são idênticos na plumagem, mas as fêmeas são cerca de vinte e cinco por cento maiores do que os machos. O bico é grande e enganchado. A plumagem do imaturo é marrom.\n[…]\nA águia-careca é o símbolo nacional dos Estados Unidos da América, sendo tanto o pássaro quanto o animal nacional e aparecendo, inclusive, em seu selo. No final do século XX estava à beira da extinção ao longo dos Estados Unidos. As populações já se recuperaram e a espécie foi removida da lista de espécies ameaçadas de extinção pelo governo dos EUA em 12 de julho de 1995 e transferida para a lista de espécies ameaçadas.\n[…]\nFoi removido da Lista de Animais Selvagens Ameaçados e Ameaçados nos quarenta e oito estados mais baixos em 28 de junho de 2007. Atualmente existem uma população estimada de mais de 300.000 de águias-carecas nos Estados Unidos e a população continua aumentando.\n[…]\nA águia-americana adulta é facilmente reconhecida pela cabeça, pescoço e cauda brancos. As águias mais novas têm a cabeça e a cauda marrons ou castanhos. A plumagem branca só aparece quando a águia tem mais ou menos cinco anos de idade.\n[…]\nH. l. leucocephaluss",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Solitário George",
      "descricao": "Jabuti gigante macho, último representante conhecido da espécie da ilha Pinta, em Galápagos, morto em 2012."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Solitário George, último jabuti gigante conhecido da ilha Pinta, em Galápagos, morreu em que ano?",
    "resposta": "2012",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lonesome_George"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lonesome_George",
        "situacao": "ok",
        "texto": "Lonesome George (Spanish: Solitario George or Jorge, c. 1910 – June 24, 2012) was a male Pinta Island tortoise (Chelonoidis niger abingdonii) and the last known individual of the subspecies. In his last years, he was known as the rarest creature in the world. George serves as an important symbol for conservation efforts in the Galápagos Islands and throughout the world.\n[…]\nOn June 24, 2012, at 8:00 A.M. local time, Galápagos National Park director Edwin Naula announced that Lonesome George had been found dead by Fausto Llerena, who had looked after him for forty years. Naula suspected that the cause of death was cardiac arrest. A necropsy confirmed that George died from natural causes. The body of Lonesome George was frozen and shipped to the American Museum of Natural History in New York City to be preserved by taxidermists.\n[…]\nThe Ecuadorean government wanted the taxidermy to be shown in the capital, Quito, but the Galápagos local mayor said Lonesome George was a symbol of the islands and should return home.\n[…]\nOn February 17, 2017, Lonesome George's taxidermy was flown back to the Galápagos Islands, where it is on display in the Fausto Llerena Breeding Center.\n[…]\nIn November 2012, in the journal Biological Conservation, researchers reported identifying 17 tortoises that are partially descended from the same species as Lonesome George, leading them to speculate that closely related purebred individuals of that species may still be alive.\n[…]\nIn February 2020, the Galápagos National Park, along with the Galápagos Conservancy, reported that a female tortoise was directly related to the species that Lonesome George was a part of. This female was among thirty tortoises that were found to be related to two species that are considered extinct.\n[…]\nMr Turpen, Galapagos tortoise\n[…]\nMedia related to Lonesome George (category) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/George_Solit%C3%A1rio",
        "situacao": "ok",
        "texto": "George Solitário (em castelhano:  Solitario George ou Jorge; em inglês:  Lonesome George; c. 1910 — Galápagos, 24 de junho de 2012) foi uma tartaruga-das-galápagos-de-pinta (Chelonoidis niger abingdonii)  macho e o último indivíduo conhecido da subespécie. Em seus últimos anos, ele era conhecido como a criatura mais rara do mundo. George serve como um símbolo importante para os esforços de conserv\n[…]\nGeorge foi visto pela primeira vez na ilha Pinta em 1 de novembro de 1971 pelo malacologista húngaro József Vágvölgyi. A vegetação da ilha foi devastada por cabras selvagens introduzidas, e a população indígena Chelonoidis niger abingdonii foi reduzida a um único indivíduo. Acredita-se que ele recebeu o seu nome em homenagem a um personagem interpretado pelo ator estadunidense George Gobel.\n[…]\nEm 24 de junho de 2012, às 8h, horário local, o diretor do Parque Nacional Galápagos, Edwin Naula, anunciou que Fausto Llerana, seu cuidador por 40 anos, encontrou George Solitário morto. Naula suspeitou que a causa da morte tinha sido uma parada cardíaca. Uma necropsia confirmou que George morreu de causas naturais. O corpo de George Solitário foi congelado e enviado para o Museu Americano de História Natural em Nova Iorque para ser preservado por taxidermistas.\n[…]\nEm novembro de 2012, na revista Biological Conservation, pesquisadores relataram a identificação de 17 tartarugas que são parcialmente descendentes da mesma espécie que George Solitário, levando-os a especular que indivíduos de raça pura dessa espécie ainda podem estar vivos.\n[…]\nEm dezembro de 2015, foi relatado que a descoberta de outra subespécie (Chelonoidis niger donfaustoi) por pesquisadores de Yale tinha 90% de correspondência de DNA com a tartaruga da Ilha Pinta e que os cientistas acreditam que isso poderia ser usado para ressuscitar a espécie. Isso pode significar que ele não é o último de sua espécie.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Soro antiofídico",
      "descricao": "Soro produzido com anticorpos contra veneno de serpentes, usado para tratar picadas de cobra."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Por volta de 1900, que médico brasileiro descobriu que cada tipo de veneno de cobra pede um soro específico, e não um soro único?",
    "resposta": "Vital Brazil",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Vital_Brazil",
      "https://en.wikipedia.org/wiki/Vital_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (Campanha, 28 de abril de 1865 – Rio de Janeiro, 8 de maio de 1950) foi um médico cientista, filantropo, imunologista e pesquisador biomédico brasileiro de renome internacional.\n[…]\nAlém do seu trabalho como médico, Vital Brazil também criou uma das primeiras escolas do Brasil que alfabetizavam crianças de dia e adultos à noite. Desenvolveu materiais de informação, especialmente voltados para a população do campo, sobre como se proteger das cobras e outros animais peçonhentos.\n[…]\nVital Brazil tornar-se-ia mundialmente conhecido pela descoberta da especificidade do soro antiofídico, do soro contra picadas de aranha, do soro antitetânico e antidiftérico e do tratamento para picada de escorpião.\n[…]\nA descoberta de Vital Brazil sobre a especificidade dos soros antipeçonhentos estabeleceu um novo conceito na imunologia, e seu trabalho sobre a dosagem dos soros antiofídicos gerou tecnologia inédita. A criação dos soros antipeçonhentos específicos e o antiofídico polivalente ofereceu à Medicina, pela primeira vez, um produto realmente eficaz no tratamento do acidente ofídico que, sem substituto, permanece salvando centenas de vidas nos últimos cem anos.\n[…]\nA Casa da Moeda do Brasil expediu uma cédula no valor de Cr$ 10 000,00 (dez mil cruzeiros) cujo anverso era a efígie do cientista Vital Brazil, tendo a esquerda, gravura que representa cena clássica de extração do veneno, tarefa básica para a produção de soros, e o reverso um painel calcográfico mostrando um antigo serpentário, com destaque para a cena de cobra muçurana devorando uma jararaca;\n[…]\nBrazil, Lael Vital \"Vital Brazil Mineiro da Campanha – uma genealogia brasileira\".\n[…]\nVital Brazil\n[…]\nMuseu Vital Brazil, Campanha MG"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vital_Brazil",
        "situacao": "ok",
        "texto": "Vital Brazil Mineiro da Campanha (April 28, 1865 – May 8, 1950), was a Brazilian physician, biomedical scientist and immunologist, known for the discovery of the polyvalent anti-ophidic serum used to treat bites of venomous snakes of the Crotalus,  Bothrops and Elaps genera. He went on to be also the first to develop anti-scorpion and anti-spider serums.\n[…]\nApplying the same techniques (which involved gradual immunization of horses and sheep by administering small doses of venoms, and then extracting, purifying and freeze-drying the antibody portion from the blood of injected animals), Vital Brazil and his coworkers were able to discover the first sera against two species of scorpions' (1908) and spiders' (1925) venoms.\n[…]\nIn the USA, Vital Brazil's name made the headlines when he used his serum to save the life of a worker in the Bronx Zoo in New York City who was bitten by a rattlesnake.\n[…]\nAccording to Bernardo Houssay, who wrote a well-cited biography of Vital Brazil in 1966, his contributions went further than herpetology:\"Vital Brazil and his collaborators have studied several actions of the venoms, (such as) coagulant, anticoagulant, hemolytic, agglutinant, cytotoxic, proteolytic, etc.\n[…]\n(...) The (animal) poisons contain numerous enzymes which have been isolated and studied with interest in all parts since they explain many of the symptoms and constitute interesting biochemical reagents, Vital Brazil studied also the ophiophagous serpents, such as the mussurana, the ophiophagous mammals, such as the skunk-like Conepatus chilensis and others, the ophiophagous birds and certain spiders.\n[…]\nVital Brazil is commemorated in the scientific names of four species of South American snakes:\n[…]\nChironius brazili Hamdan & Fernandes, 2015\n[…]\nScience and Technology in Brazil\n[…]\nInstituto Vital Brazil Website.\n[…]\nBiblioteca Virtual Vital Brazil (In Portuguese)."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Estampagem",
      "descricao": "Forma de aprendizado em que filhotes, logo após nascer, se ligam ao primeiro ser que veem e passam a segui-lo."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que cientista austríaco, Nobel de Medicina em 1973, tornou famosa a estampagem ao ser seguido por gansinhos que o tomaram por mãe?",
    "resposta": "Konrad Lorenz",
    "fonte": [
      "https://en.wikipedia.org/wiki/Konrad_Lorenz",
      "https://en.wikipedia.org/wiki/Imprinting_(psychology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Konrad_Lorenz",
        "situacao": "ok",
        "texto": "Konrad Zacharias Lorenz (Austrian German: [ˈkɔnraːd tsaxaˈriːas ˈloːrɛnts] ; 7 November 1903 –  27 February 1989) was an Austrian zoologist, ethologist, and ornithologist. He shared the 1973 Nobel Prize in Physiology or Medicine with Nikolaas Tinbergen and Karl von Frisch. He is often regarded as one of the founders of modern ethology, the study of animal behavior. He developed an approach that be\n[…]\nIn 1958, Lorenz transferred to the Max Planck Institute for Behavioral Physiology in Seewiesen. He shared the 1973 Nobel Prize in Physiology or Medicine \"for discoveries in individual and social behavior patterns\" with two other important early ethologists –  Nikolaas Tinbergen and Karl von Frisch. In 1969, he became the first recipient of the Prix mondial Cino Del Duca.\n[…]\nDuring the final years of his life, Lorenz supported the fledgling Austrian Green Party and in 1984 became the figurehead of the Konrad Lorenz Volksbegehren, a grass-roots movement that was formed to prevent the building of a power plant at the Danube near Hainburg an der Donau and thus the destruction of the surrounding woodland.\n[…]\nThere are three research institutions named after Lorenz in Austria: the Konrad Lorenz Institute for Evolution and Cognition Research (KLI) was housed in Lorenz' family mansion at Altenberg before moving to Klosterneuburg in 2013; the Konrad Lorenz Forschungsstelle (KLF) at his former field station in Grünau; and the Konrad Lorenz Institute of Ethology, an external research facility of the University of Veterinary Medicine Vienna.\n[…]\nNobel Prize in Physiology or Medicine in 1973\n[…]\nList of Austrian writers\n[…]\nKonrad & Adolf Lorenz Museum KALM https://www.kalm.at\n[…]\nKonrad Lorenz on Nobelprize.org\n[…]\nKonrad Lorenz Institutes:\n[…]\nKonrad Lorenz Institute for Evolution and Cognition Research in Altenberg\n[…]\nKonrad Lorenz Research Station, Grünau im Almtal\n[…]\nKonrad Lorenz Institute for Ethology\n[…]\nKonrad Lorenz at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Imprinting_(psychology)",
        "situacao": "ok",
        "texto": "In psychology and ethology, imprinting is a relatively rapid learning process that occurs during a particular developmental phase of life and leads to corresponding behavioural adaptations. The term originally was used to describe situations in which an animal internalises (learns) the characteristics of a perceived object, for example of a dangerous predator or a sweet fruit.\n[…]\nIt was rediscovered 350 years later by the 19th-century amateur biologist Douglas Spalding, and again in the 20th century by the early ethologist Oskar Heinroth; it was studied extensively and popularized by his disciple Konrad Lorenz working with greylag geese.\n[…]\nLorenz demonstrated how incubator-hatched geese would imprint on the first suitable moving stimulus they saw within what he called a \"critical period\" between 13 and 16 hours shortly after hatching. For example, the goslings would imprint on Lorenz himself (to be more specific, on his wading boots), and he is often depicted being followed by a gaggle of geese who had imprinted on him. Lorenz also found that the geese could imprint on inanimate objects.\n[…]\nBecause birds hatched in captivity have no mentor birds to teach them traditional migratory routes, D'Arrigo hatched chicks under the wing of his glider and they imprinted on him. Then, he taught the fledglings to fly and to hunt. The young birds followed him not only on the ground (as with Lorenz) but also in the air as he took the path of various migratory routes.\n[…]\nSexual imprinting on inanimate objects is a popular theory concerning the development of sexual fetishism. For example, according to this theory, imprinting on shoes or boots (as with Konrad Lorenz's geese) would be the cause of shoe fetishism.\n[…]\nImprinting (organizational theory)\n[…]\nNancy T. Burley[link removed], a researcher into imprinting in zebra finches"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Konrad_Lorenz",
        "situacao": "ok",
        "texto": "Konrad Zacharias Lorenz (Viena, 7 de novembro de 1903 — Viena, 27 de fevereiro de 1989) foi um zoólogo, etólogo e ornitólogo austríaco.\n[…]\nFoi agraciado com o Nobel de Fisiologia ou Medicina de 1973, por seus estudos sobre o comportamento animal, a etologia.\n[…]\nKonrad Lorenz era filho de um cirurgião, e apresentou grande interesse sobre os animais, estudando o seu comportamento desde o nascimento. Em 1922 começou o seu curso de medicina em Nova Iorque mas voltou depois para Viena. Fez o seu doutorado em zoologia pela universidade local.\n[…]\nEm 1935, descreveu o processo de aprendizagem nos gansos e criou o conceito de \"imprinting\" ou cunhagem, este é um fenômeno exibido por vários animais filhotes, principalmente, pássaros tais quais pintinhos e patinhos. Após saírem dos ovos seguirão o primeiro objeto em movimento que eles encontrarem no ambiente, o qual pode ser a mãe, mas não necessariamente.\n[…]\nMotivation of Human and Animal Behavior: An Ethological View. With Paul Leyhausen (1973). New York: D. Van Nostrand Co.\n[…]\nBehind the Mirror: A Search for a Natural History of Human Knowledge (1973) (Die Rückseite des Spiegels. Versuch einer Naturgeschichte menschlichen Erkennens, 1973)\n[…]\nCivilized Man's Eight Deadly Sins (1974) (Die acht Todsünden der zivilisierten Menschheit, 1973)\n[…]\nOs Oito Pecados Mortais da Civilização (1973)\n[…]\n«Perfil no sítio oficial do Nobel de Fisiologia ou Medicina 1973» (em inglês)\n[…]\n«THE KONRAD LORENZ INSTITUTE FOR EVOLUTION AND COGNITION RESEARCH» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Origem das aves",
      "descricao": "Questão científica sobre a ancestralidade evolutiva das aves, hoje explicada pela descendência de dinossauros terópodes."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezenove, que biólogo inglês, apelidado de buldogue de Darwin, foi pioneiro em defender que as aves descendem de dinossauros?",
    "resposta": "Thomas Henry Huxley",
    "fonte": [
      "https://en.wikipedia.org/wiki/Origin_of_birds",
      "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Origin_of_birds",
        "situacao": "ok",
        "texto": "The scientific question of which larger group of animals birds evolved within has traditionally been called the \"origin of birds\". The present scientific consensus is that birds are a group of maniraptoran theropod dinosaurs that originated during the Mesozoic era.\n[…]\nBiologist Thomas Henry Huxley, known as \"Darwin's Bulldog\" for his tenacious support of the new theory of evolution by means of natural selection, almost immediately seized upon Archaeopteryx as a transitional fossil between birds and reptiles.\n[…]\nAlthough Huxley was opposed by the very influential Owen, his conclusions were accepted by many biologists, including Baron Franz Nopcsa, while others, notably Harry Seeley, argued that the similarities were due to convergent evolution.\n[…]\nHis work, originally written in Danish as Vor Nuvaerende Viden om Fuglenes Afstamning, was compiled, translated into English, and published in 1926 as The Origin of Birds.\n[…]\nLike Huxley, Heilmann compared Archaeopteryx and other birds to an exhaustive list of prehistoric reptiles, and also came to the conclusion that theropod dinosaurs like Compsognathus were the most similar. However, Heilmann noted that birds had clavicles (collar bones) fused to form a bone called the furcula (\"wishbone\"), and while clavicles were known in more primitive reptiles, they had not yet been recognized in dinosaurs.\n[…]\nIn 1972, British paleontologist Alick Walker hypothesized that birds arose not from 'thecodonts' but from crocodile ancestors like Sphenosuchus. Ostrom's work with both theropods and early birds led him to respond with a series of publications in the mid-1970s in which he laid out the many similarities between birds and theropod dinosaurs, resurrecting the ideas first put forth by Huxley over a century before."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (4 May 1825 – 29 June 1895) was an English biologist and anthropologist who specialised in comparative anatomy. He has become known as \"Darwin's Bulldog\" for his advocacy of Charles Darwin's theory of evolution.\n[…]\nHenry Huxley (1865–1946), became a fashionable general practitioner in London.\n[…]\nHuxley's descendants include the children of Leonard Huxley:\n[…]\nAshforth, Albert. Thomas Henry Huxley. Twayne, New York 1969.\n[…]\nBibby, Cyril. Scientist Extraordinary: The Life and Work of Thomas Henry Huxley 1825–1895. Pergamon, Oxford 1972.\n[…]\nClodd, Edward. Thomas Henry Huxley. Blackwood, Edinburgh 1902.\n[…]\nHuxley, Leonard. Thomas Henry Huxley: A Character Sketch. Watts, London 1920.\n[…]\nIrvine, William. Thomas Henry Huxley. Longmans, London 1960.\n[…]\nJensen, J. Vernon. Thomas Henry Huxley: Communicating for Science. University of Delaware, Newark 1991.\n[…]\nLyons, Sherrie L. Thomas Henry Huxley: The Evolution of a Scientist. New York 1999.\n[…]\nMitchell, P. Chalmers. Thomas Henry Huxley: A Sketch of his Life and Work London 1901. Available at Project Gutenberg.\n[…]\nVoorhees, Irving Wilson. The Teachings of Thomas Henry Huxley. Broadway, New York 1907.\n[…]\nHuxley, Thomas Henry. Autobiography and Selected Essays. The Riverside Press Houghton Mifflin Company, Cambridge 1909.\n[…]\nThomas H. Huxley on the Embryo Project Encyclopedia\n[…]\nStephen, Leslie (1898). \"Thomas Henry Huxley\" . Studies of a Biographer. Vol. 3. London: Duckworth & Co. pp. 188–219.\n[…]\nHuxley, Thomas Henry (1825–1895) National Library of Australia, Trove, People and Organisation record for Thomas Huxley\n[…]\nWorks by Thomas Henry Huxley at Project Gutenberg\n[…]\nWorks by or about Thomas Henry Huxley at the Internet Archive\n[…]\nWorks by Thomas Henry Huxley at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Origem_das_aves",
        "situacao": "ok",
        "texto": "A origem das aves foi um tópico controverso dentro da biologia evolutiva por muitos anos, porém mais recentemente surgiu um consenso científico de que as aves são um grupo de dinossauros terópodes que evoluíram na era mesozoica.\n[…]\nNo sentido filogênico, as aves são dinossauros.\n[…]\nO biólogo Thomas Henry Huxley, conhecido como  \"O Buldogue de Darwin\" por seu feroz apoio à nova teoria da evolução, quase imediatamente definiu o Archaeopteryx como um fóssil de transição entre aves e répteis. Começando em 1868, Huxley fez comparações detalhadas do Archaeopteryx com vários répteis pré-históricos e julgou que ele era muito similar a dinossauros como o hipsilofodonte e o compsognato.\n[…]\nSeu trabalho, originalmente escrito em dinamarquês sob o título Vor Nuvaerende Viden om Fuglenes Afstamning, foi compilado, traduzido para o inglês e publicado em 1926 sob o título The Origin of Birds (A Origem das Aves).\n[…]\nEm 1972, o paleontólogo britânico Alick Walker formou a hipótese de que as aves apareceram não de ancestrais \"tecodontes\", mas de ancestrais crocodilianos como o Sphenosuchus. Os trabalhos de Ostrom com terópodes e aves primitivas levou-o a responder com uma série de publicações na metade da década de 1970 onde ele mostrava as muitas similaridades entre aves e dinossauros terópodes, ressuscitando as ideias inicialmente produzidas por Huxley um século antes.\n[…]\nTodavia, devido à evidência convincente fornecida pela anatomia comparativa e pela filogenética, assim como os surpreendentes fósseis de dinossauros emplumados da China, a ideia de que as aves são derivadas dos dinossauros, primeiramente defendida por Huxley e depois por Nopcsa e Ostrom, desfruta de um apoio quase unânime entre os paleontólogos atuais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Dodô (personagem de Alice)",
      "descricao": "Personagem em forma de dodô do livro Alice no País das Maravilhas, de 1865."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que escritor inglês incluiu um dodô entre os personagens de seu livro mais famoso, talvez como uma caricatura de si mesmo?",
    "resposta": "Lewis Carroll",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dodo_(Alice%27s_Adventures_in_Wonderland)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dodo_(Alice%27s_Adventures_in_Wonderland)",
        "situacao": "ok",
        "texto": "The Dodo is a fictional character appearing in Chapters 2 and 3 of the 1865 book Alice's Adventures in Wonderland by Lewis Carroll (Charles Lutwidge Dodgson). The Dodo is a caricature of the author. A popular but unsubstantiated belief is that Dodgson chose the particular animal to represent himself because of his stammer, and thus would accidentally introduce himself as \"Do-do-dodgson\".\n[…]\nIn this passage Lewis Carroll incorporated references to the original boating expedition of 4 July 1862 during which Alice's Adventures were first told, with Alice as herself, and the others represented by birds: the Lory was Lorina Liddell, the Eaglet was Edith Liddell, the Dodo was Dodgson, and the Duck was Rev. Robinson Duckworth.\n[…]\nThe Caucus Race, as depicted by Carroll, is a satire on the political caucus system, mocking its lack of clarity and decisiveness.\n[…]\nIn the 1933 film Alice in Wonderland, the Dodo is portrayed by Polly Moran.\n[…]\nIn the 1983 Broadway stage performance for television Alice in Wonderland, the Dodo is portrayed by Frantz Hall.\n[…]\nIn the 1983 anime television series Fushigi no Kuni no Alice, the Dodo is shown as and elderly and eccentric character who has shown to have dabbled in magic.\n[…]\nIn the 1999 television film Alice in Wonderland, Peter Bayliss portrays Mr Dodo. Like the rest of the participants in the caucus race, in this adaptation he has the appearance of a human with animal features.\n[…]\nIn the 2009 miniseries Alice, the character is a human nicknamed \"Dodo\", portrayed by Tim Curry. Hatter takes Alice to ask him to help save Jack, but Dodo refuses. After it, the Hatter reveals the ring Alice wears, which Dodo recognizes as the Stone of Wonderland, able to open the Looking Glass back to the human world, so he tries to kill her, causing Alice to flee.\n[…]\nIn the 2025 Russian musical film  Alice in Wonderland, the Dodo is portrayed by Oleg Savostyuk."
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "O Corvo",
      "descricao": "Poema narrativo de Edgar Allan Poe, publicado em 1845, em que um corvo repete a palavra nunca mais."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1845, que escritor americano publicou O Corvo, poema em que a ave responde a tudo com a frase nunca mais?",
    "resposta": "Edgar Allan Poe",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Raven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Raven",
        "situacao": "ok",
        "texto": "\"The Raven\" is a narrative poem by American writer Edgar Allan Poe. First published in January 1845, the poem is often noted for its musicality, stylized language and supernatural atmosphere. It tells of a distraught lover who is paid a visit by a mysterious raven that repeatedly speaks a single word: \"nevermore\". The lover, often identified as a student, is lamenting the loss of his love, Lenore.\n[…]\nPoe first brought \"The Raven\" to his friend and former employer George Rex Graham of Graham's Magazine in Philadelphia. Graham declined the poem, which may not have been in its final version, though he gave Poe $15 (equivalent to $518 in 2025) as charity. Poe then sold the poem to The American Review, which paid him $9 (equivalent to $311 in 2025) for it, and printed \"The Raven\" in its February 1845 issue under the pseudonym \"Quarles\", a reference to the English poet Francis Quarles.\n[…]\nLater publications of \"The Raven\" included artwork by well-known illustrators. Notably, in 1858 \"The Raven\" appeared in a British Poe anthology with illustrations by John Tenniel, the Alice in Wonderland illustrator (The Poetical Works of Edgar Allan Poe: With Original Memoir, London: Sampson Low). \"The Raven\" was published independently with lavish woodcuts by Gustave Doré in 1884 (New York: Harper & Brothers). Doré died before its publication.\n[…]\nIn part due to its dual printing, \"The Raven\" made Edgar Allan Poe a household name almost immediately, and turned Poe into a national celebrity. Readers began to identify poem with poet, earning Poe the nickname \"The Raven\". The poem was soon widely reprinted, imitated, and parodied. Though it made Poe popular in his day, it did not bring him significant financial success. As he later lamented, \"I have made no money.\n[…]\n\"The Raven\" – Full text of the first printing, from the American Review, 1845\n[…]\nThe Raven public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/O_Corvo",
        "situacao": "ok",
        "texto": "\"O Corvo\" é um poema narrativo do escritor norte-americano Edgar Allan Poe. Publicado pela primeira vez em janeiro de 1845, é conhecido principalmente por sua musicalidade, linguagem estilizada e atmosfera sobrenatural. O poema trata da visita misteriosa de um corvo falante a um homem, frequentemente identificado como estudante, que lamenta a perda de sua amada, Lenore, e progressivamente enlouque\n[…]\n\"O Corvo\" foi publicado pela primeira vez, com atribuição a Poe, na edição de 29 de janeiro de 1845 do New York Evening Mirror. Sua publicação tornou seu autor popular ainda em vida, mas não lhe trouxe grande sucesso financeiro. Em pouco tempo, o poema foi republicado, parodiado e ilustrado. Há divergências na opinião crítica em relação ao caráter literário do poema, mas ele continua sendo um dos mais famosos poemas anglófonos já escritos.\n[…]\nEm parte devido a sua publicação dupla, \"O Corvo\" fez de Edgar Allan Poe um nome familiar quase que imediatamente e transformou Poe em uma celebridade nacional. Os leitores começaram a identificar poema com poeta, atribuindo a ele o apelido de \"O Corvo\". O poema foi logo republicado, imitado e parodiado. Embora tenha tornado Poe popular em sua época, não lhe trouxe um sucesso financeiro significativo. Como Poe mais tarde lamentou: \"Não ganhei dinheiro.\n[…]\nO escritor mostrou dezoito semelhanças entre os poemas e foi feito em resposta às acusações de Poe de plágio contra Henry Wadsworth Longfellow. Foi sugerido que Outis era realmente Cornelius Conway Felton, se não o próprio Poe. Após a morte de Poe, seu amigo Thomas Holley Chivers disse que \"O Corvo\" foi plagiado de um de seus poemas. Em particular, ele alegou ter sido a inspiração para a métrica do poema, bem como para o refrão \"nunca mais\".\n[…]\n\"The Raven\" — Texto completo da primeira publicação, da American Review, 1845\n[…]\nLeitura de 'O Corvo' e texto de Classic Poetry Aloud (MP3)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Os Pássaros",
      "descricao": "Filme de suspense de 1963 em que bandos de aves atacam os moradores de Bodega Bay, na Califórnia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1963, que cineasta lançou Os Pássaros, filme em que bandos de aves atacam os moradores de uma cidade costeira da Califórnia?",
    "resposta": "Alfred Hitchcock",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Birds_(film)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Birds_(film)",
        "situacao": "ok",
        "texto": "The Birds is a 1963 American natural horror film produced and directed by Alfred Hitchcock, released by Universal Pictures and starring Rod Taylor, Jessica Tandy, Suzanne Pleshette, and introducing Tippi Hedren in her film debut. Loosely based on the 1952 short story of the same name by Daphne du Maurier, it focuses on a series of sudden and unexplained violent bird attacks on the people of Bodega\n[…]\nAlfred Hitchcock makes his signature cameo as a man walking dogs out of the pet shop at the beginning of the film. They were two of his own Sealyham Terriers, named Geoffrey and Stanley.\n[…]\nThe Birds is also partly inspired by the true events of a mass bird attack on the seaside town of Capitola in California on August 18, 1961, when \"Capitola residents awoke to a scene that seemed straight out of a horror movie. Hordes of seabirds were dive-bombing their homes, crashing into cars and spewing half-digested anchovies onto lawns\". Alfred Hitchcock heard of this event and used it as research material for this film which was then in progress.\n[…]\nMore than fifty years after the film was released, it emerged in a series of interviews that Alfred Hitchcock may have behaved inappropriately towards Tippi Hedren during the filming of The Birds. Hedren said there were several incidents where she was subjected to sexual harassment from the famed director. Cast and crew described his behaviour on occasion as \"obsessive\" and Hedren stated that \"he suddenly grabbed me and put his hands on me. It was sexual\".\n[…]\nThe film ranked second on Cahiers du Cinéma's Top 10 Films of the Year List in 1963. Andrew Sarris of The Village Voice praised the film, writing: \"Drawing from the relatively invisible literary talents of Daphne du Maurier and Evan Hunter, Alfred Hitchcock has fashioned a major work of cinematic art\".\n[…]\nThe Day of the Claw: A Synoptic Account of Alfred Hitchcock’s The Birds at Senses of Cinema"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Os_P%C3%A1ssaros",
        "situacao": "ok",
        "texto": "Os Pássaros (em inglês:  The Birds) é um filme norte-americano de 1963, do gênero de suspense, dirigido por Alfred Hitchcock. O filme se concentra em uma série de ataques de pássaros violentas repentinas e inexplicáveis sobre o povo de Bodega Bay, Califórnia, ao longo de alguns dias.\n[…]\nAlfred Hitchcock faz sua participação especial como um homem saindo com dois cachorros para fora de uma loja de animais no início do filme. Os animais são na verdade do próprio diretor, dois white terriers, Geoffrey e Stanley.\n[…]\nO filme Birds foi parcialmente inspirado pelos verdadeiros eventos de um ataque de pássaros em massa na cidade litorânea de Capitola, na Califórnia, em 18 de agosto de 1961, quando \"os residentes de Capitola acordaram com uma cena que parecia saída de um filme de terror. Hordas de aves marinhas foram bombardeando suas casas, colidindo com carros e vomitando anchovas meio digeridas nos gramados\".\n[…]\nAlfred Hitchcock ouviu falar desse evento e o utilizou como material de pesquisa para esse filme que estava em andamento. A verdadeira causa do comportamento das aves eram as algas tóxicas, mas isso não era conhecido na década de 1960.\n[…]\nHitchcock afirmou em uma entrevista que os pássaros do filme se levantam contra os humanos para puni-los por tomar a natureza humana como certa.\n[…]\nInicialmente o filme recebeu críticas mistas, mas hoje é considerado um clássico cult. No Rotten Tomatoes tem um índice de aprovação de 96% com base em críticas de 52 críticos, com uma classificação média de 8,2 / 10, e o consenso do site afirma: \"Provando mais uma vez que o acúmulo é a chave do suspense, Hitchcock conseguiu pássaros em alguns dos vilões mais aterrorizantes da história do horror \".\n[…]\nIndicado na categoria de melhor filme.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Bradicinina",
      "descricao": "Substância do organismo que dilata os vasos sanguíneos, descoberta em 1949 em experimentos com veneno de jararaca."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1949, que farmacologista brasileiro liderou a equipe que descobriu a bradicinina, em experimentos com veneno de jararaca?",
    "resposta": "Maurício Rocha e Silva",
    "distratores": [
      "Vital Brazil",
      "Oswaldo Cruz",
      "Carlos Chagas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bradykinin",
      "https://pt.wikipedia.org/wiki/Maurício_Rocha_e_Silva"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bradykinin",
        "situacao": "ok",
        "texto": "Bradykinin (BK) (from Greek brady- 'slow' + -kinin, kīn(eîn) 'to move') is a peptide that promotes inflammation. It causes arterioles to dilate (enlarge) via the release of prostacyclin, nitric oxide, and endothelium-derived hyperpolarizing factor, and induces smooth muscle constraction via prostaglandin F2. Bradykinin consists of nine amino acids, and is a physiologically and pharmacologically ac\n[…]\nThe B2 receptor is constitutively expressed and participates in bradykinin's vasodilatory role.\n[…]\nBradykinin was discovered in 1948 by three Brazilian physiologists and pharmacologists working at the Biological Institute, in São Paulo, Brazil, led by Dr. Maurício Rocha e Silva. Together with colleagues Wilson Teixeira Beraldo and Gastão Rosenfeld, they discovered the powerful hypotensive effects of bradykinin in animal preparations.\n[…]\nBradykinin was detected in the blood plasma of animals after the addition of venom extracted from the Bothrops jararaca (Brazilian lancehead snake), brought by Rosenfeld from the Butantan Institute. The discovery was part of a continuing study on circulatory shock and proteolytic enzymes related to the toxicology of snake bites, started by Rocha e Silva as early as 1939.\n[…]\nBradykinin was to prove a new autopharmacological principle, i.e., a substance that is released in the body by a metabolic modification from precursors, which are pharmacologically active. According to B.J. Hagwood, Rocha e Silva's biographer:The discovery of bradykinin has led to a new understanding of many physiological and pathological phenomena including circulatory shock induced by venoms and toxins.\n[…]\nBradykinin is cleaved by snake venom proteases. Based on this property, it can be used to screen herbal medicines for anti-venomous effects.\n[…]\nThe first comprehensive computational model of bradykinin was developed in the USSR in the mid-1970s by a team led by Stanislav Galaktionov."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maurício_Rocha_e_Silva",
        "situacao": "ok",
        "texto": "Maurício Oscar da Rocha e Silva (Rio de Janeiro, 19 de setembro de 1910 — São Paulo, 19 de dezembro de 1983) foi um médico, pesquisador e professor universitário brasileiro, formado pela Faculdade de Medicina do Rio de Janeiro.\n[…]\nMauricio nasceu na capital fluminense, em 1910 e era filho de um psiquiatra, João Olavo da Rocha e Silva. Estudou na Faculdade de Medicina da Universidade do Brasil (mais tarde Universidade Federal do Rio de Janeiro), lecionando em escolas secundárias enquanto era estudante para se sustentar. Logo após a formatura, mudou-se em 1937 para São Paulo, sendo contratado pelo Instituto Biológico, instituição estadual de pesquisa.\n[…]\nMauricio também foi membro fundador da Sociedade Brasileira de Fisiologia, em 1957; e da Sociedade Brasileira de Farmacologia e Terapêutica Experimental, em 1966 (da qual foi presidente de 1966 a 1981). Em 1967 ganhou o Prêmio Moinho Santista (a mais alta condecoração científica da época no Brasil) e o Prêmio Nacional de Ciência e Tecnologia do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq). Ele também foi vice-presidente da União Internacional de Farmacologia.\n[…]\nJunto com os colegas Wilson Teixeira Beraldo e Gastão Rosenfeld, Mauricio descobriram em 1948 os poderosos efeitos hipotensores da bradicinina em preparações animais. A bradicinina foi detectada no plasma de animais após a adição do veneno de Bothropos jararaca, trazido por Rosenfeld do Instituto Butantan, em São Paulo, Brasil.\n[…]\nHagwood, biógrafo de Mauricio, \"A descoberta da bradicinina levou a uma nova compreensão de muitos fenômenos fisiológicos e patológicos, incluindo o choque circulatório induzido por venenos e toxinas\".\n[…]\n«Perfil na página da Academia Brasileira de Ciências»"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Camaleão",
      "descricao": "Lagarto da família Chamaeleonidae, de olhos independentes, língua projétil e capacidade de mudar de cor."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome camaleão vem do grego e significa, ao pé da letra, leão de onde?",
    "resposta": "Do chão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chameleon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chameleon",
        "situacao": "ok",
        "texto": "Chameleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015. The members of this family are best known for their distinct range of colours, being capable of colour-shifting camouflage. The large number of species in the family exhibit considerable variability in their capacity to change colour.\n[…]\nThe oviparous species lay eggs three to six weeks after copulation. The female will dig a hole—from 10–30 cm (4–12 in), deep depending on the species—and deposit her eggs. Clutch sizes vary greatly with species. Small Brookesia species may only lay two to four eggs, while large veiled chameleons (Chamaeleo calyptratus) have been known to lay clutches of 20–200 (veiled chameleons) and 10–40 (panther chameleons) eggs. Clutch sizes can also vary greatly among the same species.\n[…]\nThe veiled chameleon, Chamaeleo calyptratus from Arabia, is insectivorous, but eats leaves when other sources of water are not available. It can be maintained on a diet of crickets. They can eat as many as 15–50 large crickets a day.\n[…]\nThe common chameleon of Europe, North Africa, and the Near East, Chamaeleo chamaeleon, mainly eats wasps and mantises; such arthropods form over three-quarters of its diet. Some experts advise that the common chameleon should not be fed exclusively on crickets; these should make up no more than half the diet, with the rest a mixture of waxworms, earthworms, grasshoppers, flies, and plant materials such as green leaves, oats, and fruit.\n[…]\nChameleons are popular reptile pets, mostly imported from African countries like Madagascar, Tanzania, and Togo. The most common in the trade are the Senegal chameleon (Chamaeleo senegalensis), the Yemen or veiled chameleon (Chamaeleo calyptratus), the panther chameleon (Furcifer pardalis), and Jackson's chameleon (Trioceros jacksonii)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camale%C3%A3o",
        "situacao": "ok",
        "texto": "Camaleão (ou cameleão) refere-se a todos os répteis pertencentes à família Chamaeleonidae. É uma das mais conhecidas famílias de lagartos, distribuídos na África, sul da Europa e da Ásia. Há cerca de 80 espécies de camaleões, a maior parte delas na África, ao sul do Saara, estando também presentes em Portugal e na Espanha.[carece de fontes]?\n[…]\nO nome camaleão é derivado das palavras gregas significante a \"leão da terra\" Chamai (na terra, no chão) e leon (leão).\n[…]\nChamaeleo jacksonii\n[…]\nOs camaleões habitam, em sua maior parte, árvores. Mas também são achados em alguns arbustos, e algumas espécies vivem no chão, por baixo de folhas. Podem passar de uma árvore a outra graças à sua cauda preênsil e aos pés em forma de pinças.\n[…]\nTambém há casos menos frequentes de camaleões da família Chamaeleonidae na Amazônia, de origem indiana, e que foram introduzidos pelos portugueses. Esses animais se adaptaram com sucesso ao habitat amazônico. [carece de fontes]?\n[…]\nEm todo o Ocidente, o termo \"Camaleão\" é bastante utilizado para adjetivar bons atores. Também é usado na linguagem figurada como sinônimo de uma pessoa volúvel e maleável, que adapta seu comportamento e características conforme o ambiente. Nem sempre o termo tem conotação negativa (de falsidade), podendo significar também \"flexibilidade\".\n[…]\nO Camaleão também dá nome a uma pequena constelação.\n[…]\nNos jogos da série Mortal Kombat, Chameleon é o nome dado ao ninja que pode utilizar as habilidades dos outros e isso gera a mudança da cor da sua roupa para a do ninja correspondente.\n[…]\nNo cinema, Rango, personagem protagonista de um filme de animação do ano de 2011 dirigido por Gore Verbinski, é um camaleão.\n[…]\nPapa-vento (\"camaleão falso\")\n[…]\nIguana (chamada erroneamente de \"camaleão\" no Nordeste brasileiro)\n[…]\nDE CICCO, Lúcia Helena Salvetti. Saúde Animal: Camaleão. Acessado em 26 de Dezembro de 2004.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Camaleão",
      "descricao": "Lagarto da família Chamaeleonidae, de olhos independentes, língua projétil e capacidade de mudar de cor."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os camaleões mudam de cor reorganizando cristais minúsculos dentro de células da pele. Esses cristais são feitos de que substância?",
    "resposta": "Guanina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chameleon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chameleon",
        "situacao": "ok",
        "texto": "Chameleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 200 species described as of June 2015. The members of this family are best known for their distinct range of colours, being capable of colour-shifting camouflage. The large number of species in the family exhibit considerable variability in their capacity to change colour.\n[…]\nSome chameleon species are able to change their skin colouration. Chameleon skin contains a layered arrangement of specialised cells known as the dermal chromatophores. Starting from the surface, it  comprises \"xanthophores\" and \"erythrophores\" (yellow and red), as well as an intermediate layer of iridophores whose transparent lattice-shaped guanine nanocrystals generate structural colour through optical interference, and basal \"melanophores\" containing dark melanin.\n[…]\nThe colour change in chameleons is controlled by two superimposed layers of iridophores. The superficial layer (S-iridophores) contains small guanine crystals in a triangular photonic crystal lattice, and the deeper layer (D-iridophores) contains larger crystals that broadly reflect light, especially in the near-infrared range.\n[…]\nThe veiled chameleon, Chamaeleo calyptratus from Arabia, is insectivorous, but eats leaves when other sources of water are not available. It can be maintained on a diet of crickets. They can eat as many as 15–50 large crickets a day.\n[…]\nChameleons are popular reptile pets, mostly imported from African countries like Madagascar, Tanzania, and Togo. The most common in the trade are the Senegal chameleon (Chamaeleo senegalensis), the Yemen or veiled chameleon (Chamaeleo calyptratus), the panther chameleon (Furcifer pardalis), and Jackson's chameleon (Trioceros jacksonii).\n[…]\nMedia related to Chamaeleonidae at Wikimedia Commons\n[…]\nData related to Chamaeleonidae at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Camale%C3%A3o",
        "situacao": "ok",
        "texto": "Camaleão (ou cameleão) refere-se a todos os répteis pertencentes à família Chamaeleonidae. É uma das mais conhecidas famílias de lagartos, distribuídos na África, sul da Europa e da Ásia. Há cerca de 80 espécies de camaleões, a maior parte delas na África, ao sul do Saara, estando também presentes em Portugal e na Espanha.[carece de fontes]?\n[…]\nTambém há casos menos frequentes de camaleões da família Chamaeleonidae na Amazônia, de origem indiana, e que foram introduzidos pelos portugueses. Esses animais se adaptaram com sucesso ao habitat amazônico. [carece de fontes]?\n[…]\nAlgumas espécies de camaleão são capazes de alterar suas coloração de pele. Diferentes espécies de camaleão são capazes de variar a sua coloração e padrão por meio de combinações de rosa, azul, vermelho, laranja, verde, preto, marrom, azul claro, amarelo, turquesa e púrpura.\n[…]\nDurante muito tempo pensou-se que os camaleões mudavam de cor por dispersão de pigmento contendo organelas dentro de sua pele. No entanto, pesquisas recentes sobre camaleões-pantera mostrou que não é isso que acontece.\n[…]\nOs camaleões têm duas camadas sobrepostas, dentro de sua pele, que controlam a sua cor e a termorregulação. A camada superior contém uma estrutura de nanocristais de guanina, e o espaçamento entre esses nanocristais pode ser manipulada mediante excitação da rede cristalina, o que, por sua vez, afeta os comprimentos de onda de luz que são refletidos e os que são absorvidos.\n[…]\nExcitar a rede cristalina causa um aumento na distância entre os nanocristais, e a pele passa a refletir comprimentos de onda de luz mais longos. Assim, quando em estado relaxado, os cristais refletem azul e verde, mas em um estado excitado, os comprimentos de onda mais longos, como amarelo, laranja e vermelho passam a ser refletidos.\n[…]\nIguana (chamada erroneamente de \"camaleão\" no Nordeste brasileiro)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Anfíbios",
      "descricao": "Classe de vertebrados (Amphibia) que inclui sapos, rãs, salamandras e cecílias, em geral com fase larval aquática."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Sapos e salamandras pertencem aos anfíbios, palavra de origem grega. O que ela significa?",
    "resposta": "Vida dupla",
    "fonte": [
      "https://en.wikipedia.org/wiki/Amphibian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amphibian",
        "situacao": "ok",
        "texto": "Amphibians are ectothermic, anamniotic, four-limbed vertebrate animals that constitute the class Amphibia. In its broadest sense, it is a paraphyletic group encompassing all tetrapods, but excluding the amniotes (tetrapods with an amniotic membrane, such as modern reptiles, birds and mammals). All extant (living) amphibians belong to the monophyletic subclass Lissamphibia, with three living orders\n[…]\nMost amphibians go through metamorphosis, a process of significant morphological change after birth. In typical amphibian development, eggs are laid in water and larvae are adapted to an aquatic lifestyle. Frogs, toads and salamanders all hatch from the egg as larvae with external gills. Metamorphosis in amphibians is regulated by thyroxine concentration in the blood, which stimulates metamorphosis, and prolactin, which counteracts thyroxine's effect.\n[…]\nCave-dwelling amphibians normally hunt by smell. Some salamanders seem to have learned to recognize immobile prey when it has no smell, even in complete darkness.\n[…]\nMany amphibians are nocturnal and hide during the day, thereby avoiding diurnal predators that hunt by sight. Other amphibians use camouflage to avoid being detected. They have various colourings such as mottled browns, greys and olives to blend into the background. Some salamanders adopt defensive poses when faced by a potential predator such as the North American northern short-tailed shrew (Blarina brevicauda).\n[…]\nTheir bodies writhe and they raise and lash their tails which makes it difficult for the predator to avoid contact with their poison-producing granular glands. A few salamanders will autotomise their tails when attacked, sacrificing this part of their anatomy to enable them to escape. The tail may have a constriction at its base to allow it to be easily detached. The tail is regenerated later, but the energy cost to the animal of replacing it is significant."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anf%C3%ADbios",
        "situacao": "ok",
        "texto": "Os anfíbios são animais vertebrados, ectotérmicos, anamnióticos e tetrápodes que constituem a classe Amphibia. Em sua acepção mais ampla, a classe é um grupo parafilético que abrange todos os tetrápodes, exceto os amniotas, animais com membrana amniótica, como os répteis, as aves e os mamíferos.\n[…]\nA palavra anfíbio vem do grego antigo ἀμφίβιος, amphíbios, que significa \"duas formas de vida\", com ἀμφί, \"de ambos os tipos\", e βίος, \"vida\". O termo foi usado inicialmente como adjetivo geral para animais capazes de viver em terra ou na água, como focas e lontras. Tradicionalmente, a classe Amphibia abrange todos os vertebrados tetrápodes que não são amniotas. Em sua acepção mais ampla, Sensu lato, Amphibia era dividida em três subclasses, duas delas extintas.\n[…]\nSubclasse Lissamphibia, todos os anfíbios modernos, como sapos, rãs, pererecas, salamandras, tritões e cecílias.\n[…]\nOs anfíbios geralmente põem ovos na água, dos quais eclodem larvas de vida livre que completam seu desenvolvimento no meio aquático e depois se tornam adultos aquáticos ou terrestres. Em muitas espécies de anuros e na maioria das salamandras sem pulmões, da família Plethodontidae, o desenvolvimento é direto. As larvas crescem dentro dos ovos e saem como miniaturas dos adultos.\n[…]\nO declínio das populações de anfíbios e répteis chamou a atenção para os efeitos dos pesticidas nesses animais. Por muito tempo, faltou apoio experimental à ideia de que anfíbios e répteis fossem mais suscetíveis à contaminação química que outros vertebrados terrestres ou aquáticos. Seus ciclos de vida têm etapas distintas, e eles ocupam diferentes zonas climáticas e ecológicas, com vulnerabilidade à exposição química.\n[…]\nAnfíbios no AnimalSpot.net\n[…]\nArca dos Anfíbios\n[…]\nAmphibiaWeb\n[…]\nLista de anfíbios brasileiros, arquivada em 4 de junho de 2012",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Pítons",
      "descricao": "Família de grandes serpentes constritoras e não venenosas (Pythonidae) da África, Ásia e Oceania."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "As pítons têm o nome de uma serpente monstruosa da mitologia grega, morta em Delfos por qual deus?",
    "resposta": "Apolo",
    "distratores": [
      "Zeus",
      "Hermes",
      "Poseidon"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Python_(mythology)",
      "https://en.wikipedia.org/wiki/Pythonidae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Python_(mythology)",
        "situacao": "ok",
        "texto": "In Greek mythology, Python (Ancient Greek: Πύθων; gen. Πύθωνος) was the serpent, sometimes represented as a medieval-style dragon, living at the center of the Earth, believed by the ancient Greeks to be at Delphi. He was killed by the god Apollo.\n[…]\nThere are various versions of Python's birth and death at the hands of Apollo. In the Homeric Hymn to Apollo, now thought to have been composed in 522 BC when the archaic period in Greek history was giving way to the Classical period,  a small detail is provided regarding Apollo's combat with the serpent, in some sections identified as the deadly drakaina, or her parent. The god searching for a place to establish his shrine, reached Delphi and saw the Python, who was a bane to the people.\n[…]\nThus, when Apollo was born and was four days old he pursued Python, making his way straight for Mount Parnassus where the serpent dwelled and chased it to the oracle of Gaia at Delphi; there he dared to penetrate the sacred precinct and kill it with his arrows beside the rock cleft where the priestess sat on her tripod. Robert Graves, who habitually read into primitive myths a retelling of archaic political and social turmoil, saw in this the capture by Hellenes of a pre-Hellenic shrine.\n[…]\nKarl Kerenyi notes that in some early accounts Python is conflated with Typhon, the serpentine monster against whom Zeus fought. Other sources confuse him with the female dragon Delphyne; in these accounts, the dragon is said to be dissolved by the sun after its death.\n[…]\nOgden, Daniel (2013). Drakon: Dragon Myth and Serpent Cult in the Greek and Roman Worlds. Oxford University Press. ISBN 978-0-19-955732-5.\n[…]\nSmith, William; Dictionary of Greek and Roman Biography and Mythology, London (1873). \"Python\""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pythonidae",
        "situacao": "ok",
        "texto": "The Pythonidae, commonly known as pythons, are a family of non-venomous snakes found in Africa, Asia, and Australia. Among its members are some of the largest snakes in the world. Ten genera and 39 species are currently recognized. Being naturally non-venomous, pythons must constrict their prey to induce cardiac arrest prior to consumption.\n[…]\nPython skin has traditionally been used as the attire of choice for medicine men and healers. Typically, Zulu traditional healers in South Africa will use python skin in ceremonial regalia. Pythons are viewed by the Zulu tradition to be a sign of power. Healers are seen as all-powerful since they have a wealth of knowledge, as well as accessibility to the ancestors.\n[…]\nThe Sukuma people of Tanzania have been known to use python feces in order to treat back pain. The feces are frequently mixed with a little water, placed on the back, and left for two to three days.\n[…]\nIn Nigeria, the gallbladder and liver of a python are used to treat poison or bites from other snakes. The python head has been used to \"appease witches\". Many traditional African cultures believe that they can be cursed by witches. In order to reverse spells and bad luck, traditional doctors will prescribe python heads.\n[…]\nIn northwestern Ghana, people see pythons as a savior and have taboos to prevent the snake from being harmed or eaten. Their folklore states that this is because a python once helped them flee from their enemies by transforming into a log to allow them to cross a river.\n[…]\nIn Benin, Vodun practitioners believe that pythons symbolize strength and the spirit of Dagbe [\"to do good\" in Yoruba]. Annually, people sacrifice animals and proclaim their sins to pythons that are kept inside temples.\n[…]\nList of pythonid species and subspecies\n[…]\nPython\n[…]\nPythonidae at the Reptarium.cz Reptile Database. Accessed 3 November 2008."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%ADton_%28mitologia%29",
        "situacao": "ok",
        "texto": "Píton, na mitologia grega, é uma serpente gigantesca, que nasceu do lodo na Terra após o grande dilúvio. Foi mandada por Hera para perseguir Leto. A serpente foi morta a flechadas por Apolo e seu corpo foi dividido.\n[…]\nO nome Pythia deriva de Pytho, o qual na mitologia foi o nome original de Delfos. O nome foi derivado do verbo pythein (πύθειν), originário da decomposição do corpo da serpente monstro Píton depois que ela foi morta por Apolo e teve seu corpo dividido.\n[…]\nNa juventude, Apolo matou a serpente Píton, que vivia em Delfos e tomava conta do oráculo de Têmis, e tomou o oráculo para si. Segundo outros autores, a terrível serpente Píton vivia perto da Fonte Castalian, e Apolo a matou porque Píton tinha tentado violar Leto quando se encontrava grávida de Apolo e Ártemis. Esta era a fonte que emitia os vapores que permitiam ao oráculo de Delfos realizar as profecias. Apolo matou Píton, mas teve que ser punido por isso, dado que Píton era filha de Gaia.\n[…]\nO altar dedicado a Apolo provavelmente foi dedicado originalmente a Gaia e depois a Posídon. O oráculo nesse tempo predizia o futuro baseado na água ondulante e no sussurro das folhas das árvores.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Aligátor",
      "descricao": "Gênero de crocodilianos (Alligator) que inclui o aligátor-americano e o aligátor-chinês."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome aligátor, dado aos grandes jacarés dos Estados Unidos, vem de uma expressão espanhola. O que ela significa?",
    "resposta": "O lagarto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alligator"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alligator",
        "situacao": "ok",
        "texto": "An alligator, or colloquially gator, is a large reptile in the genus Alligator of the family Alligatoridae in the order Crocodilia. The two extant species are the American alligator (A. mississippiensis) and the Chinese alligator (A. sinensis). Additionally, several extinct species of alligator are known from fossil remains. Alligators first appeared during the late Eocene epoch about 37 million y\n[…]\nThe term \"alligator\" is likely an anglicized form of el lagarto, Spanish for \"the lizard\", which early Spanish explorers and settlers in Florida called the alligator. Early English spellings of the name included allagarta and alagarto.\n[…]\nAlligator thomsoni\n[…]\nNests constructed on leaves are hotter than those constructed on wet marsh, so the former tend to produce males and the latter, females. The baby alligator's egg tooth helps it get out of its egg during hatching time. The natural sex ratio at hatching is five females to one male. Females hatched from eggs incubated at 30 °C (86 °F) weigh significantly more than males hatched from eggs incubated at 34 °C (93 °F). The mother defends the nest from predators and assists the hatchlings to water.\n[…]\nThe two kinds of white alligators are albino and leucistic. These alligators are practically impossible to find in the wild. They could survive only in captivity and are few in number. The Aquarium of the Americas in New Orleans has leucistic alligators found in a Louisiana swamp in 1987.\n[…]\nThe American crocodile is considered to fall in the middle of crocodilians temperamentally, with only a few cases of American crocodiles fatally attacking humans having been reported. American alligator attacks and fatalities are rare compared to crocodile attacks, with many reported alligator fatalities involving children or the elderly.\n[…]\nAlligator farm\n[…]\nInterview with a Seminole alligator wrestler; made available for public use by the State Archives of Florida"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alligator_%28g%C3%A9nero%29",
        "situacao": "ok",
        "texto": "Alligator da família Alligatoridae da ordem Crocodilia. As duas espécies existentes são o jacaré-americano (A. mississippiensis) e o jacaré-da-china (A. sinensis). Além disso, várias espécies extintas de jacaré são conhecidas a partir de restos fósseis. Os jacarés apareceram pela primeira vez durante o final da época do Eoceno, há cerca de 37 milhões de anos.\n[…]\nO gênero Alligator pertence à subfamília Alligatorinae, que é o táxon irmão de Caimaninae (os jacarés). Juntas, essas duas subfamílias formam a família Alligatoridae. O cladograma abaixo mostra a filogenia dos jacarés\n[…]\nAlligator hailensis\n[…]\nAlligator mcgrewi\n[…]\nAlligator mefferdi\n[…]\nAlligator munensis\n[…]\nAlligator olseni\n[…]\nAlligator prenasalis\n[…]\nAlligator thomsoni\n[…]\nPhoto exhibit on alligators in Florida; disponibilizado pelo Arquivo do Estado da Flórida\n[…]\nInterview with a Seminole alligator wrestler; disponibilizado para uso público pelo Arquivo Estadual da Flórida",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Lagartixa",
      "descricao": "Pequeno lagarto da família dos gecos, capaz de andar em paredes e tetos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "As lagartixas são chamadas de gecos, palavra que veio do malaio. Esse nome imita o quê?",
    "resposta": "O som que o animal emite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gecko"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gecko",
        "situacao": "ok",
        "texto": "Geckos ( GHEHK-oh) are small, mostly carnivorous lizards that have a wide distribution, found on every continent except Antarctica. Belonging to the suborder Gekkota, geckos are found in warm climates. They range from 1.6 to 67 centimetres (0.6 to 26.4 inches) in length. They are the most species-rich group of lizards, with nearly 2,000 different species of geckos existing.\n[…]\nGeckos are unique among lizards for their vocalisations, which differ from species to species. Most geckos in the family Gekkonidae use chirping or clicking sounds in their social interactions. Tokay geckos (Gekko gecko) are known for their loud mating calls, and some other species are capable of making hissing noises when alarmed or threatened.\n[…]\nFamily Gekkonidae\n[…]\nSphaerodactylus ariasae, the dwarf gecko, is native to the Caribbean Islands; it is the world's smallest lizard.\n[…]\nEggshell structure also varies across gecko lineages. Most squamate reptiles lay parchment-shelled eggs that absorb water from the environment during incubation. However, a single lineage of gekkotans (including the families Gekkonidae, Phyllodactylidae, and Sphaerodactylidae) lays rigid-shelled eggs. These hard eggs contain all necessary water at the time of laying and lose water slowly through vapor diffusion.\n[…]\nForbes, Peter (4th Estate, London 2005) The Gecko's Foot—Bio Inspiration: Engineered from Nature ISBN 0-00-717990-1 in H/B\n[…]\nZug, George R. (2010). \"Speciation and dispersal in a low diversity taxon: the Slender Geckos Hemiphyllodactylus (Reptilia, Gekkonidae)\". Smithsonian Contributions to Zoology (631): 1–70. doi:10.5479/si.00810282.631.\n[…]\nGecko gallery and information\n[…]\nComprehensive gecko care information\n[…]\nGlobal gecko association site with pictures, caresheets, species list\n[…]\nGecko anatomy picture\n[…]\nThe Gecko's Foot\n[…]\nGecko Time Online Gecko Magazine"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Galinha-d'angola",
      "descricao": "Ave galiforme africana domesticada (Numida meleagris), de plumagem cinza pintalgada de branco."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, a galinha-d'angola ganhou um apelido que imita seu canto e parece uma queixa de cansaço. Qual?",
    "resposta": "Tô-fraco",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Galinha-d'angola"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Galinha-d'angola",
        "situacao": "ok",
        "texto": "Galinha-d'angola,  pintada-da-guiné, pintada-comum ou capote (nome científico: Numida meleagris) é uma ave da ordem dos galináceos, originária da África e introduzida no Brasil pelos colonizadores portugueses, que a trouxeram da África Ocidental.\n[…]\nDá ainda pelos seguintes nomes comuns: galinha-da-índia, galinha-da-numídia, galinha-da-guiné, estou-fraca, galinha-do-mato, capote, pintada e fraca.\n[…]\nSendo que no Brasil dá, também, pelos seguintes nomes: angola, angolinha, angolista, galinhola (não confundir com a Scolopax rusticola, ave epónima, que com ela partilha este nome), guiné, capota, cocar, cocá, coquém, faraona, picota, sacuê e cacuê (em algumas regiões da Bahia).\n[…]\nA ave é conhecida no Brasil por vários nomes, dependendo da região, sendo chamada de capote, cocá, tô fraco (em decorrência do som característico, emitido pelas fêmeas das espécie) ou angolista, ou ainda de galinhola. Em hunsriqueano rio-grandense, língua de origem germânica falada no Rio Grande do Sul, ela é chamada de perlhinkel (galinha de pérolas).\n[…]\nNumida meleagris somaliensis Neumann, 1899\n[…]\nNumida meleagris reichenowi Ogilvie Grant, 1894\n[…]\nNumida meleagris mitrata Pallas, 1767\n[…]\nNumida meleagris marungensis Schalow, 1884\n[…]\nNumida meleagris damarensis Roberts, 1917\n[…]\nNumida meleagris coronata Gurney, 1868\n[…]\nBirdLife International  (2004). Numida meleagris (em inglês). IUCN   2006. Lista Vermelha de Espécies Ameaçadas da IUCN. 2006. Página visitada em 03.11.2007.\n[…]\nRIBEIRO, Maria das Graças; TELES, Maria Eloiza de Oliveira  e  MARUCH, Sandra Maria das Graças. Histologia e histoquímica do magno, um dos segmentos do oviduto de Numida meleagris (Linné) (Numididae, Galliformes). Rev. Bras. Zool. 1997, vol.14, n.1, pp. 213–219. ISSN 0101-8175 (Acesso em 9 de abril de 2013)]"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Moa",
      "descricao": "Aves gigantes extintas e totalmente sem asas (ordem Dinornithiformes), endêmicas da Nova Zelândia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os moas, aves gigantes e sem asas da Nova Zelândia, foram extintos pela caça, pouco depois da chegada de que povo?",
    "resposta": "Maoris",
    "fonte": [
      "https://en.wikipedia.org/wiki/Moa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Moa",
        "situacao": "ok",
        "texto": "Moa (order Dinornithiformes) are an extinct group of flightless birds formerly endemic to New Zealand. During the Late Pleistocene-Holocene, there were nine species, in six genera. The two largest species, Dinornis robustus and Dinornis novaezelandiae, reached about 3.6 metres (12 ft) in height with neck outstretched, and weighed about 230 kilograms (510 lb); the smallest, the bush moa (Anomalopte\n[…]\nGenus Dinornis\n[…]\nSouth Island giant moa, Dinornis robustus (South Island, New Zealand)\n[…]\nThe largest moa eggs including those produced by the species of the genus Dinornis were larger than ostrich eggs, the largest eggs produced by a living bird species, though they were considerably smaller and thinner than the eggs produced by the extinct elephant birds of the genus Aepyornis. The outer surface of moa eggshell is characterised by small, slit-shaped pores. The eggs of most moa species were white, although those of the upland moa (Megalapteryx didinus) were blue-green.\n[…]\nA 2010 study by Huynen et al. found that the eggs of certain species were fragile, only around a millimetre in shell thickness: \"Unexpectedly, several thin-shelled eggs were also shown to belong to the heaviest moa of the genera Dinornis, Euryapteryx, and Emeus, making these, to our knowledge, the most fragile of all avian eggs measured to date.\n[…]\nMoreover, sex-specific DNA recovered from the outer surfaces of eggshells belonging to species of Dinornis and Euryapteryx suggest that these very thin eggs were likely to have been incubated by the lighter males.\n[…]\nOwen puzzled over the fragment for almost four years. He established it was part of the femur of a big animal, but it was uncharacteristically light and honeycombed. Owen announced to a skeptical scientific community and the world that it was from a giant extinct bird like an ostrich, and named it Dinornis.\n[…]\nIsland gigantism"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moa",
        "situacao": "ok",
        "texto": "As moas são um grupo extinto de nove espécies (em seis gêneros) de aves não voadoras endêmicas da Nova Zelândia. As duas maiores espécies, Dinornis robustus e Dinornis novaezelandiae, atingiam 3,6 metros de altura com o pescoço estendido e pesavam cerca de 230 kg. Quando os polinésios se estabeleceram na Nova Zelândia, por volta do ano 1280, a população de moas era de cerca de 58 000 indivíduos.\n[…]\nAs moas pertencem à ordem Dinornithiformes, tradicionalmente colocadas no grupo ratita. Entretanto, seu parentesco mais próximo, encontrado através de estudos genéticos, é com as aves Tinamiformes da América do Sul. Estas são aves capazes de voar e antes eram consideradas um grupo irmão dos ratitas. As nove espécies de moa não tinham asas e nem vestígios de asas, sendo esta última uma característica comum a todos os outros ratitas.\n[…]\nElas eram os herbívoros dominantes nas florestas da Nova Zelândia por milhares de anos e, até a chegada dos maoris, eram caçadas apenas pela Águia-de-Haast. A extinção das moas ocorreu por volta de 1300–1440 EC, sendo a causa principal sua caça excessiva pelos maoris.\n[…]\nA moa gigante Dinornis novaezealandiae poderia atingir cerca de três metros de altura e 250 kg de peso, sendo assim a ave mais alta que já existiu no planeta. A moa Dinornis novaezealandiae botava de 1 a 2 ovos grandes com aproximadamente 24 cm de comprimento e 17 cm de largura.\n[…]\nGênero Dinornis Owen, 1843\n[…]\nDinornis robustus Owen, 1846\n[…]\nAs moas extinguiram-se no início do século XVI. As razões do seu desaparecimento estão relacionadas com o povo Maori que habitava a Nova Zelândia e consumia sua carne, porém apenas partes selecionadas. O povo acreditava que as coxas da ave davam força aos guerreiros, havendo, então um consumo insustentável que causou a extinção. Acredita-se que doenças trazidas por aves migratórias ou ainda pelo efeito local da erupção vulcânica tenham também contribuído.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Determinação do sexo pela temperatura",
      "descricao": "Mecanismo em que o sexo do embrião é definido pela temperatura de incubação dos ovos, comum em tartarugas e crocodilianos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Nas tartarugas marinhas, não são os cromossomos que decidem se o filhote será macho ou fêmea. O que decide?",
    "resposta": "A temperatura da areia do ninho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Temperature-dependent_sex_determination"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Temperature-dependent_sex_determination",
        "situacao": "ok",
        "texto": "Temperature-dependent sex determination (TSD) is a type of environmental sex determination in which the temperatures experienced during embryonic/larval development determine the sex of the offspring. It is observed in reptiles and teleost fish, with some reports of it occurring in species of shrimp. TSD differs from the chromosomal sex-determination systems common among vertebrates. It is the mos\n[…]\nThe thermosensitive, or temperature-sensitive, period is the period during development when sex is irreversibly determined. It is used in reference to species with temperature-dependent sex determination, such as crocodilians and turtles. The TSP typically spans the middle third of incubation with the endpoints defined by embryonic stage when under constant temperatures.\n[…]\nTemperature-dependent sex determination was first described in Agama agama in 1966 by Madeleine Charnier.\n[…]\nWhile sex hormones have been observed to be influenced by temperature, thus potentially altering sexual phenotypes, specific genes in the gonadal differentiation pathway display temperature influenced expression. In some species, such important sex-determining genes as DMRT1 and those involved in the Wnt signalling pathway could potentially be implicated as genes which provide a mechanism (opening the door for selective forces) for the evolutionary development of TSD.\n[…]\nClimate change presents a unique threat in species influenced by temperature-dependent sex determination by skewing sex ratios and population decline. The warming of the habitats of species exhibiting TSD are beginning to affect their behavior and may soon start affecting their physiology. Many species (with Pattern IA and II) have begun to nest earlier and earlier in the year to preserve the sex ratio.\n[…]\nSex-determination system"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Moela",
      "descricao": "Parte musculosa do estômago das aves que tritura o alimento, muitas vezes com a ajuda de pedrinhas engolidas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Galinhas e muitas outras aves engolem pedrinhas de propósito. Para que servem essas pedras dentro da moela?",
    "resposta": "Para triturar os alimentos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gizzard",
      "https://pt.wikipedia.org/wiki/Moela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gizzard",
        "situacao": "ok",
        "texto": "The gizzard, also referred to as the ventriculus, gastric mill, and gigerium, is an organ found in the digestive tract of some animals, including archosaurs (birds and other dinosaurs, crocodiles, alligators, pterosaurs), earthworms, some gastropods, some fish, and some crustaceans. This specialized stomach constructed of thick muscular walls is used for grinding up food, often aided by particles \n[…]\nBirds swallow food and store it in their crop if necessary. Then the food passes into their glandular stomach, also called the proventriculus, which is also sometimes referred to as the true stomach. This is the secretory part of the stomach. Then the food passes into the gizzard (also known as the muscular stomach or ventriculus). The gizzard can grind the food with previously swallowed grit and pass it back to the true stomach, and vice versa.\n[…]\nEarthworms also have gizzards.\n[…]\nIn Kenya, Uganda, Cameroon and Nigeria, the gizzard of a cooked chicken is traditionally set aside for the oldest or most respected male at the table.\n[…]\nIn Uganda, gizzard and other giblets are now commonly sold separately in the frozen section of supermarkets.\n[…]\nPickled turkey gizzards are a traditional food in some parts of the Midwestern United States. In Chicago, gizzard is battered, deep fried and served with french fries and sauce. The Chamber of Commerce in Potterville, Michigan has held a Gizzard Fest each June since 2000; a gizzard-eating contest is among the weekend's events.\n[…]\nIn the Southern United States, the gizzard is typically served fried, sometimes eaten with hot sauce or honey mustard, or added to crawfish boil along with crawfish sauce, and it is also used in traditional New Orleans gumbo.\n[…]\nIn Trinidad and Tobago, gizzards are curried and served with rice or roti bread; it can also be stewed.\n[…]\nThe term \"gizzards\" can also, by extension, refer to the general guts, innards or entrails of animals."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Moela",
        "situacao": "ok",
        "texto": "A moela, também referido como o ventrículo, moinho gástrico e gigerium, faz parte do sistema digestivo de vários animais, como vertebrados, incluindo aves (principalmente das aves carnívoras) e peixes, e invertebrados como minhocas. Essa estrutura é um compartimento muito muscularizado do tubo digestivo, onde, com a ajuda de pequenas pedras e areia, ou dentículos da própria região, dependendo do a\n[…]\nSeu funcionamento básico consiste em contrações musculares, que esfregam as suas superfícies cuticulares uma contra a outra, atritando o alimento com pequenas pedras previamente ingeridas e contra a cutícula da moela. Assim, o alimento é digerido mecanicamente, para depois passar para a digestão química.\n[…]\nAlguns animais que não possuem dentes engolem pedras ou outras estruturas rígidas para ajudar a digestão. Todas as aves possuem moelas, mas nem todos engolem essas partículas. As aves que o fazem, empregam o método de 'mastigação':\n[…]\nNa boca das aves não há dentes, mas um bico que é adaptado ao tipo de alimentação mais comum de cada espécie. À boca, segue-se a faringe e no esôfago é encontrada uma bolsa, chamada papo. Neste, o alimento vai sendo amolecido, para depois avançar até o estômago químico, que solta enzimas digestivas, iniciando o processo de digestão, que será concluído na moela.\n[…]\nA moela é um compartimento muito muscularizado do tubo digestivo, onde, com a ajuda de pequenas pedras e areia, os alimentos são triturados. O tubo digestivo termina na cloaca, que é o local de desemboque dos sistemas excretor, reprodutor e digestivo.\n[…]\nTodas as aves têm moelas. As moelas dos emus, perus, galinhas e patos são muito utilizadas em culinária.\n[…]\nA maioria dos invertebrados também têm moelas. A moela é utilizada para moer o alimento, e faz parte do sistema digestivo.\n[…]\nDinossauros que se crêem ter moelas, baseado na descoberta de pedras de moela recuperadas próximas de fósseis, incluem:"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Pelicano",
      "descricao": "Grande ave aquática da família Pelecanidae, com bolsa de pele sob o bico."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na arte cristã medieval, o pelicano virou símbolo do sacrifício de Cristo por causa de uma lenda. Com o que ele alimentaria os filhotes?",
    "resposta": "Com o próprio sangue",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pelican"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pelican",
        "situacao": "ok",
        "texto": "Pelicans (genus Pelecanus) are a genus of large water birds that make up the family Pelecanidae. They are characterized by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing. They have predominantly pale plumage, except for the brown and Peruvian pelicans. The bills, pouches, and bare facial skin of all pelicans become brig\n[…]\nThe self-sacrificial characterization of the pelican was reinforced by widely read medieval bestiaries. The device of \"a pelican in her piety\" or \"a pelican vulning (from Latin vulnerō, \"I wound, I injure, I hurt\") herself\" was used in religious iconography and heraldry.\n[…]\nPelicans have featured extensively in heraldry, generally using the Christian symbolism of the pelican as a caring and self-sacrificing parent. Heraldic images featuring a \"pelican vulning\" refers to a pelican injuring herself, while a \"pelican in her piety\" refers to a female pelican feeding her young with her own blood.\n[…]\nThe medical faculties of Charles University in Prague also have a pelican as their emblem, invoking the bird's long-standing association with self-sacrifice in Christian symbolism.\n[…]\nThe image became also linked to the medieval religious feast of Corpus Christi. The universities of Oxford and Cambridge each have colleges named for the religious festival nearest the dates of their establishment, and both Corpus Christi College, Cambridge, and Corpus Christi College, Oxford, feature pelicans on their coats of arms.\n[…]\nElliott, Andrew (1992). \"Family Pelecanidae (Pelicans)\". In del Hoyo, Josep; Elliott, Andrew; Sargatal, Jordi (eds.). Handbook of the Birds of the World, Volume 1: Ostrich to Ducks. Barcelona: Lynx Edicions. pp. 290–311. ISBN 978-84-87334-10-8.\n[…]\nNewton, Alfred (1885). \"Pelican\" . Encyclopædia Britannica. Vol. XVIII (9th ed.). pp. 474–475.\n[…]\nPelican videos on the Internet Bird Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pelicano",
        "situacao": "ok",
        "texto": "Pelicanos são um gênero de grandes aves aquáticas que compõem a família Pelecanidae, a qual é monotípica para autores que desprezam os gêneros Protopelicanus, Miopelecanus e Liptornis, que englobam somente espécies extintas. São caracterizados por um longo bico e uma grande bolsa na garganta, utilizada para capturar presas e drenar a água do conteúdo recolhido antes de engolir. A maioria tem pluma\n[…]\nO pelicano-pardo e o pelicano-peruano, outrora considerados coespecíficos, são inclusos, por alguns autores, em um subgênero próprio, o Leptopelicanus, de modo a serem classificados como Pelecanus (Leptopelicanus) occidentalis e  Pelecanus (Leptopelicanus) thagus, respectivamente.\n[…]\nPelecanus halieus, Wetmore, 1933 (Plioceno tardio, Idaho, EUA)\n[…]\nOs pais de espécies que aninham no chão às vezes arrastam jovens mais velhos pela cabeça antes de alimentá-los. Com cerca de 25 dias de idade, os jovens dessas espécies se reúnem em \"creches\" de até 100 aves, nas quais os pais reconhecem e alimentam apenas seus próprios filhos. Por 6 a 8 semanas, eles vagam, ocasionalmente nadam e podem praticar a alimentação comunitária. Entre 10 e 12 semanas após o nascimento, os filhotes permanecem juntos a seus pais, porém raramente são alimentados.\n[…]\nNa Europa medieval, considerava-se o pelicano um animal especialmente zeloso com seu filhote, ao ponto de, não havendo com que o alimentar, dar-lhe de seu próprio sangue. Seguiu-se, então, que o pelicano tornou-se um símbolo da Paixão de Cristo e da Eucaristia. Ele compunha os bestiários como símbolo de auto-imolação além de ter sido utilizado na Heráldica (um pelicano em piedade).\n[…]\nEsta lenda, talvez, surgiu porque o pelicano costumava sofrer de uma doença que deixava uma marca vermelha em seu peito. Em outra versão, explica-se que o pelicano costumava matar seus filhotes e, depois, ressuscitá-los com seu sangue, o que seria análogo ao sacrifício de Jesus.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Quitridiomicose",
      "descricao": "Doença infecciosa de anfíbios causada por fungos quitrídios, responsável pelo declínio de muitas espécies no mundo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A quitridiomicose, doença de pele que dizimou populações de sapos e rãs no mundo todo, é causada por que tipo de organismo?",
    "resposta": "Um fungo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chytridiomycosis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chytridiomycosis",
        "situacao": "ok",
        "texto": "Chytridiomycosis ( ky-TRID-ee-ə-my-KOH-sis) is an infectious disease in amphibians, caused by the chytrid fungi Batrachochytrium dendrobatidis and Batrachochytrium salamandrivorans. Chytridiomycosis has been linked to dramatic population declines or extinctions of amphibian species in western North America, Central America, South America, eastern Australia, east Africa (Tanzania), and Dominica and\n[…]\nOscillating factors such as climate, habitat suitability, and population density may be factors which cause the fungus to infect amphibians of a given area. Therefore, when considering the geographic range of chytridiomycosis, the range of B. dendrobatidis occurrence must be considered.\n[…]\nA second species of Batrachochytrium, B. salamandrivorans, was discovered in 2013 and is known to cause chytridiomycosis in salamanders.\n[…]\nThe use of antifungals and heat-induced therapy has been suggested as a treatment of B. dendrobatidis. However, some of these antifungals may cause adverse skin effects on certain species of frogs, and although they are used to treat species that are infected by chytridiomycosis, the infection is never fully eradicated. A study done by Rollins-Smith and colleagues suggests that itraconazole is the antifungal of choice when it comes to treatment of Bd.\n[…]\nExperiments, where the temperature is increased beyond the upper bound of the B. dendrobatidis optimal range of 25 to 30 °C, show its presence will dissipate within a few weeks and infected individuals return to normal. Formalin/malachite green has also been used to successfully treat individuals infected with chytridiomycosis. An Archey's frog was successfully cured of chytridiomycosis by applying chloramphenicol topically.\n[…]\n\"Chytridiomycosis\". Amphibian Diseases. Australia: James Cook University. Archived from the original on 16 February 2007. Retrieved 16 April 2022."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quitridiomicose",
        "situacao": "ok",
        "texto": "A quitridiomicose é uma doença infecciosa fatal que afecta os anfíbios; esta é causada por um fungo da divisão Chytridiomycota, Batrachochytrium dendrobatidis, especificamente. A quitridiomicose tem causado um declínio dramático e até mesmo extinções no oeste da América do Norte, América Central, América do Sul e leste da Austrália. Não existe uma medida efectiva para o controlo desta doença nas p\n[…]\nA distribuição da quitridiomicose é dificil de se derterminar. Quando ocorre apenas é presente nas áreas onde o fungo B. dendrobatidisocorre, porém a doença não é sempre presente onde o fungo ocorre. AInda não é completamente entendido por que certas áreas são afetadas pelo fungo enquanto outras não. Fatores como clima, habitat e densidade da população podem ser as causas do fungo causar quitridiomicose em certa área.\n[…]\nA distribuição geográfica do fungo foi recentemente mapeada, e espalha-se por todo o globo. É importante lembrar, contudo, que a doença nem sempre ocorre onde o fungo foi detectado. B. dendrobatidisfoi encontrado em 56 de 82 países e em 516 de 1240 espécies(42%) usando dados de mais de 36,000 indivíduos. Asia, for example, has only 2.35% B. dendrobatidis prevalence.\n[…]\nB. dendrobatis é um agente que dispersa zoósporos através da água. Esse zoósporos usam flagelo para locomoção até encontrar um novo hospedeiro, penetrando através da pele. Uma vez infectado com o fungo o hospedeiro pode desenvolver quitridiomicose, embora isso não ocorra em todos os casos.\n[…]\nDevido ao impacto do fungo nas populações de anfíbios existe um grande investimento em pesquisa em busca de tratamento da doença. Entre os tratamentos mais promissores foi descoberto que populações que sobrevivem a passagem do fundo carregam uma maior carga da bactéria Janthinobacterium lividum, que produz compostos fungicidas.\n[…]\n«Quitridiomicose» (em inglês)\n[…]\n«Origin of the amphibian chytrid fungus» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Chupim",
      "descricao": "Ave preta de brilho violáceo (Molothrus bonariensis) que bota os ovos em ninhos de outras aves."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Chupim virou gíria para quem vive às custas dos outros, porque essa ave bota ovos em ninho alheio, sobretudo no de que passarinho?",
    "resposta": "Tico-tico",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Chupim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Chupim",
        "situacao": "ok",
        "texto": "Chupim ou chupim-vira-bosta (Molothrus bonariensis) é uma ave passeriforme da família Icteridae. Os machos de tais animais possuem uma coloração aparentemente preta, mas quando expostos ao sol, brilham em um tom azul-violeta, enquanto as fêmeas são mais pardacentas e menos reluzentes.[carece de fontes]?\n[…]\nO chupim é conhecido por colocar seus ovos nos ninhos de outras espécies aves, para que elas possam chocá-los, criá-los e alimentá-los como se fossem seus próprios filhotes, um processo conhecido como parasitismo de ninhos. Por isso acabou virando sinônimo de aproveitador. São diversas as espécies parasitadas por essa ave, mas a mais comum de se ver alimentando um filhote de chupim é o tico-tico, pois seus ovos são muito semelhantes.\n[…]\nSão aves de comportamento curioso, se apropriam do ninho de outras aves.\n[…]\nTambém são conhecidos pelos nomes de arumará, azulão, azulego, boiadeiro, brió, carixo, catre, chopim-gaudério, corixo, curixo, corrixo, corvo, engana-tico, engana-tico-tico, gaudério, godério, godero, gorrixo, grumará, iraúna, maria-preta, negrinho, papa-arroz, parasita, parasito, pássaro-preto, uiraúna, vaqueiro, vira, vira-bosta e vira-vira.[carece de fontes]?\n[…]\n\"Iraúna\" e \"uiraúna\" vêm do tupi antigo gûyraúna, que significa \"ave escura\", sendo um nome comum a vários pássaros de cor escura, em geral os da família dos icterídeos.\n[…]\nO nome chupim foi selecionado como nome vernáculo técnico para a espécie Molothrus bonariensis pelo Comitê Brasileiro de Registros Ornitológicos (CBRO) em 2021.\n[…]\nhttp://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2015/05/chupim-e-ave-admirada-pelo-voo-e-tem-comportamento-curioso.html\n[…]\nhttps://www.cruzeirodovale.com.br/colunas/vida-e-ciencia/chupim-a-ave-oportunista-/"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ave-elefante",
      "descricao": "Ave gigante não voadora extinta de Madagascar, da família Aepyornithidae."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Estudos de DNA mostraram que a ave-elefante, gigante extinta de Madagascar, era parente próxima de uma pequena ave noturna de outra ilha. Qual?",
    "resposta": "Kiwi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elephant_bird"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elephant_bird",
        "situacao": "ok",
        "texto": "Elephant birds are extinct flightless birds belonging to the order Aepyornithiformes that were native to the island of Madagascar. They are thought to have gone extinct around 1000 AD, likely as a result of human activity. There are three currently recognised species, one in the genus Mullerornis, and two in Aepyornis. Aepyornis maximus is possibly the largest bird to have ever lived, with their e\n[…]\nElephant birds were herbivores and major components of Madagascar's pre-human ecosystems. Elephant birds are palaeognaths (whose flightless representatives are often known as ratites), and their closest living relatives are kiwi (found only in New Zealand), suggesting that ratites did not diversify by vicariance during the breakup of Gondwana but instead convergently evolved flightlessness from ancestors that dispersed more recently by flying.\n[…]\nLike the ostrich, rhea, cassowary, emu, kiwi and extinct moa, elephant birds are ratites and members of infraclass Palaeognathae; they could not fly, and their breast bones had no keel.\n[…]\nA major systematic review by Hansford and Turvey (2018) based on morphological analysis recognised only four valid elephant bird species, Aepyornis maximus, Aepyornis hildebrandti, Mullerornis modestus, and the new species and genus Vorombe titan to accommodate the largest elephant bird remains.\n[…]\nThis reduction of forested area may have had cascade effects, like making elephant birds more likely to be encountered by hunters, though there is little evidence of human hunting of elephant birds. Humans may have utilized elephant bird eggs. Introduced diseases (hyperdisease) have been proposed as a cause of extinction, but the plausibility for this is weakened due to the evidence of centuries of overlap between humans and elephant birds on Madagascar.\n[…]\nDigimorph.org 3D model of Aepyornis embryo\n[…]\nUniversity of Sheffield excavations of elephant bird eggshells"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aepyornithidae",
        "situacao": "ok",
        "texto": "Os epiornitídeos (Aepyornithidae) são uma família de aves extintas com apenas três gêneros descritos, endêmica de Madagáscar. Inclui a maior ave que já existiu no planeta.\n[…]\nConhecidas por pássaros-elefante, aves-elefante ou vorompatras, viveram em Madagáscar até aproximadamente ao século XVI, e foram extintas pelos nativos. Apesar da proximidade geográfica e semelhança às avestruzes, os parentes mais próximos modernos são os kiwis, indicando que os seus antepassados dispersaram-se pelo voo, em vez de terem-se originado com a separação de Gondwana.\n[…]\nAepyornis maximus foi extinto pelo menos desde o século XVII — era a maior ave do mundo, que se acredita que media mais de 3 m (10 ft) de altura e pesando quase meia tonelada (400 kg). Restos de Aepyornis adultos e ovos foram encontrados, em alguns casos, os ovos têm diâmetro de até 34 cm (13 in). O volume dos ovos é de cerca de 160 vezes maior do que um ovo de galinha.\n[…]\nFamília Aepyornithidae Bonaparte, 1853\n[…]\nGênero Aepyornis Isidore Geoffroy Saint-Hilaire, 1851\n[…]\nAepyornis gracilis Monnier, 1913\n[…]\nAepyornis hildebrandti Burckhardt, 1893 (sinônimo: A. mulleri Milne-Edwards e Grandidier, 1894)\n[…]\nAepyornis medius Milne-Edwards e Grandidier, 1894 (sinônimos: A. grandidieri Rowley, 1867; A. cursor Milne-Edwards e Grandidier, 1894; e A. lentus Milne-Edwards e Grandidier, 1894)\n[…]\nVorombe titan Andrews, 1894 (sinônimos: Aepyornis titan Andrews, 1894; Aepyornis ingens Milne-Edwards e Grandidier, 1894)\n[…]\nLista de aves extintas\n[…]\nBRANDS, Sheila (14 de agosto de 2008). «Systema Naturae 2000 / Classification, Genus Aepyornis». Project: The Taxonomicon. Consultado em 4 de fevereiro 2009",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Flamingo",
      "descricao": "Ave pernalta rosada da família Phoenicopteridae, que se alimenta filtrando a água com o bico curvo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Pelo DNA, os parentes mais próximos do flamingo são aves aquáticas que mergulham para caçar e fazem ninhos flutuantes. Que aves são essas?",
    "resposta": "Mergulhões",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mirandornithes"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mirandornithes",
        "situacao": "ok",
        "texto": "Mirandornithes () is a clade that consists of flamingos and grebes. Many scholars use the term Phoenicopterimorphae for the superorder containing flamingoes and grebes.\n[…]\nDetermining the relationships between the two groups has been problematic. Flamingos had been placed with numerous branches within Neognathae, such as ducks and storks. The grebes had been placed with the loons. However, more recent genomic studies have confirmed these two branches as sister groups.\n[…]\nBoth primitive phoenicopteriformes and their closest relatives, the grebes, were highly aquatic. This indicates that the entire mirandornithe group evolved from aquatic, probably swimming ancestors.\n[…]\nPhalanx proximalis digiti majoris is very elongate and narrow craniocaudally.\n[…]\nSome authors have used alternative names for Mirandornithes, such as Phoenicopterimorphae or include Podicipedidae as a family within Phoenicopteriformes. Other authors do not widely use either option, and Mirandornithes is preferred. The following phylogenetic tree depicts Mirandornithes as recovered by Torres and colleagues in 2015.\n[…]\nWhile various phylogenetic studies support the evidence for the sister grouping of flamingos and grebes, the placement of Mirandornithes has been less precise. Mayr (2004) conducted a morphological-based analysis on extant families. In his paper, Mayr found the then unnamed Mirandornithes to be part of a clade that included also loons and penguins, the former family being the sister lineage."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mirandornithes",
        "situacao": "ok",
        "texto": "Columbimorphae é um clado que contém aves das ordens Podicipediformes (mergulhões) e Phoenicopteriformes (flamingos). Muitos ornitólogos usam o termo Phoenicopterimorphae para a superordem contendo flamingos e mergulhões.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Falcões",
      "descricao": "Família de aves de rapina (Falconidae) que inclui falcões e caracarás."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Estudos de DNA mostraram que os falcões são mais aparentados a certas aves coloridas e falantes do que a gaviões e águias. Que aves?",
    "resposta": "Papagaios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Australaves",
      "https://en.wikipedia.org/wiki/Falconidae"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Australaves",
        "situacao": "ok",
        "texto": "Australaves is a clade of birds defined in 2012, consisting of the Eufalconimorphae (passerines, parrots and falcons) as well as the Cariamiformes (including seriemas and the extinct \"terror birds\"). They appear to be the sister group of Afroaves. This clade was defined in the PhyloCode by George Sangster and colleagues in 2022 as \"the least inclusive crown clade containing Cariama cristata and Pa\n[…]\nThe clade's name, meaning 'southern birds', reflects the group's evolutionary origins in the Southern Hemisphere: passerines and parrots in Australia, and falcons and seriemas in South America.\n[…]\nAs in the case of Afroaves, the most basal clades have predatory extant members, suggesting this was the ancestral lifestyle; however, some researchers like Darren Naish are skeptical of this assessment, since some extinct representatives such as the herbivorous Strigogyps led other lifestyles. Basal parrots and falcons are at any rate vaguely crow-like and probably omnivorous."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Falconidae",
        "situacao": "ok",
        "texto": "The falcons and caracaras are around 65 species of diurnal birds of prey that make up the family Falconidae (representing all extant species in the order Falconiformes).\n[…]\nOne common approach uses two subfamilies Polyborinae and Falconinae. The first contains the caracaras, forest falcons, and laughing falcon. All species in this group are native to the Americas.\n[…]\nOn the other hand, the Check-list of South American Birds classifies all caracaras as true falcons and puts the laughing falcon and forest falcons into the subfamily Herpetotherinae.\n[…]\nFalconinae, in its traditional classification, contains the falcons, falconets, and pygmy falcons. Depending on the authority, Falconinae may also include the caracaras and/or the laughing falcon.\n[…]\nThe following cladogram is based on a comprehensive molecular phylogenetic study of the Falconidae by Jérôme Fuchs and collaborators that was published in 2015. The number of species is taken from the taxonomy published by AviList. Fuchs and collaborators recommended that the genus Daptrius should be expanded to include the genera Phalcoboenus and Milvago due to the shallow genetic divergence. This change has been adopted by the Clements Checklist and by AviList.\n[…]\nBelow is list of the subfamilies and genera of the Falconidae.\n[…]\nFalconidae gen. et sp. indet. (Early Miocene of Chubut, Argentina)\n[…]\nFalconidae gen. et sp. indet. (Pinturas Early/Middle Miocene of Argentina)\n[…]\nFalconidae gen. et sp. indet. (Cerro Bandera Late Miocene of Neuquén, Argentina)\n[…]\nFalconidae videos, photos and sounds on the Internet Bird Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Australaves",
        "situacao": "ok",
        "texto": "Australaves é um clado de aves recém proposto, constituído pelos Eufalconimorphae (pássaros, papagaios e falcões), bem como os Cariamiformes. Eles parecem ser o clado irmão das Afroaves. Como no caso das Afroaves, os clados mais basais são predadores, sugerindo que este era o estilo de vida ancestral.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Tucanos",
      "descricao": "Família de aves neotropicais (Ramphastidae) de bico grande e colorido, da ordem Piciformes."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O tucano, de bico enorme e colorido, pertence à mesma ordem de que ave famosa por bicar troncos de árvores?",
    "resposta": "Pica-pau",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Piciformes",
      "https://en.wikipedia.org/wiki/Piciformes"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Piciformes",
        "situacao": "ok",
        "texto": "Piciformes é uma ordem de aves que inclui animais de médias dimensões que habitam o meio arbóreo. O grupo tem cerca de sete famílias, 67 gêneros e 339 espécies, incluindo os tucanos e os pica-paus. Cerca de metade das espécies são constituídas pelos Picidae (pica-paus e descendentes).\n[…]\nA maior parte dos membros da ordem são zigodáctilos, isto é, possuem dois dedos para a frente e dois para trás, uma característica vantajosa para as aves que passam a maior parte do tempo em árvores, exceto algumas espécies de pica-pau, que não têm essa vantagem.\n[…]\nAs famílias Galbulidae e Bucconidae, antes incluídas entre a ordem Piciformes, são frequentemente incluídas em uma ordem distinta, os Galbuliformes. Historicamente, os Galbuliformes e os Piciformes foram agrupados em uma mesma ordem, pois ambos são zigodáctilos e apresentam semelhanças na estrutura do tendão. Em 2006, a análise do DNA genômico confirmou que Galbulidae e Bucconidae são grupos irmãos dentro da ordem Piciformes, formando uma subordem chamada Galbuli.\n[…]\nA reconstrução da história evolutiva dos Piciformes tem sido dificultada pela falta de compreensão da evolução do pé zigodátilo. Uma série de famílias e gêneros pré-históricos, como Neanis e Hassiavis do Eoceno Inferior, às vezes são atribuídos provisoriamente a esta ordem. Existem alguns Piciformes ancestrais extintos conhecidos de fósseis, mas pelo menos em parte provavelmente pertencem aos Pici.\n[…]\nInfraordem Ramphastides\n[…]\nFamília Semnornithidae (capitães-tucanos) – cerca de 2 espécies\n[…]\nFamília Ramphastidae (tucanos e araçaris) – cerca de 40 espécies\n[…]\nFamília Picidae (pica-paus) – mais de 200 espécies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Piciformes",
        "situacao": "ok",
        "texto": "Nine families of largely arboreal birds make up the order Piciformes (), the best-known of them being the Picidae, which includes the woodpeckers and close relatives. The Piciformes contain about 71 living genera with a little over 450 species, of which the Picidae make up about half.\n[…]\nInfraorder Ramphastides\n[…]\nFamily Ramphastidae – toucans (about 43 species)"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Crocodilo",
      "descricao": "Grande réptil aquático da ordem dos crocodilianos, que inclui crocodilos, jacarés e gaviais."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Ao contrário da maioria dos répteis, os crocodilianos têm um coração como o das aves e dos mamíferos. Quantas cavidades ele tem?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crocodilia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crocodilia",
        "situacao": "ok",
        "texto": "Crocodylia or Crocodilia () is an order of semiaquatic, predatory reptiles that are known as crocodilians. They appeared 83.5 million years ago in the Late Cretaceous period (Campanian stage) and are the closest living relatives of birds, as the two groups are the only known survivors of the Archosauria. Members of the crocodilian total group, the clade Pseudosuchia, appeared about 250 million yea\n[…]\nBy contrast, the lower teeth of alligators and caimans normally fit into holes along the inside lining of the upper jaw, so they are hidden when the jaws are closed. Crocodilians are homodonts, meaning each of their teeth are of the same type; they do not have different tooth types, such as canines and molars. Crocodilians are polyphyodonts; they are able to replace each of their approximately 80 teeth up to 50 times in their 35-to-75-year lifespan.\n[…]\nThe eyes, ears and nostrils of crocodilians are at the top of the head; this placement allows them to stalk their prey with most of their bodies underwater. When in bright light, the pupils of a crocodilian contract into narrow slits, whereas in darkness they become large circles, as is typical for animals that hunt at night. Crocodilians' eyes have a tapetum lucidum that enhances vision in low light. When the animal completely submerges, the nictitating membranes cover its eyes.\n[…]\nKelly, Lynne (2007). Crocodile: Evolution's greatest survivor. Orion. ISBN 978-1-74114-498-7.\n[…]\nRoss, Charles A., ed. (1992). Crocodiles and Alligators. Blitz. ISBN 978-1-85391-092-0.\n[…]\nSues, Hans-Dieter. \"The Place of Crocodilians in the Living World\". pp. 14–25.\n[…]\nRoss, Charles A.; Magnusson, William Ernest. \"Living Crocodilians\". pp. 58–73.\n[…]\nWylie, Dan (2013). Crocodile. Reaktion Books. ISBN 978-1-78023-087-0.\n[…]\nFlorida's Museum of Natural History: Crocodilians; Archived 8 July 2011 at the Wayback Machine\n[…]\nCrocodylians (photos with information), Flickr"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crocodilianos",
        "situacao": "ok",
        "texto": "Os crocodilianos são os répteis da ordem Crocodilia (ou Crocodylia), na qual existem 24 espécies vivas e numerosos fósseis. São répteis maioritariamente grandes, predadores e semiaquáticos. Pertencem a esta ordem os crocodilos (família Crocodylidae), os aligátores e caimões (ambos da família Alligatoridae) e os gaviais (da família Gavialidae).\n[…]\nOs dentes são cónicos e possuem uma mordida muito poderosa. O coração dos crocodilianos apresenta quatro câmaras; tal como as aves, possuem um sistema unidirecional de ventilação ao redor dos pulmões e, conforme outros répteis não avianos, são ectotérmicos.\n[…]\nNão conseguem mexer livremente a língua, que se mantém fortemente fixa por uma membrana rogada. Apesar de o cérebro do crocodilo ser bastante pequeno, possuem capacidade de aprendizagem maior do que a maioria dos répteis. Embora não possuam cordas vocais como as dos mamíferos nem de siringe como a das aves, os crocodilianos podem produzir vocalizações fazendo vibrar três abas que têm na laringe.\n[…]\nOs crocodilianos talvez tenham o sistema circulatório mais complexo de todos os articulados. Possuem um coração de quatro câmaras e, ao contrário doutros répteis existentes, têm dois ventrículos e uma aorta esquerda e outra direita, que estão conectadas por um orifício chamado forame de Panizza. Tal como nas aves e mamíferos, os crocodilianos têm válvulas cardíacas que conduzem o fluxo sanguíneo numa só direcção pelas câmaras cardíacas.\n[…]\nForam registados 242 ataques a humanos não provocados por aligátores-do-mississippi entre 1948 e meados de 2004, causando dezasseis mortes. Dez destas vítimas estavam na água e duas em terra; as circunstâncias dos outros quatro não são conhecidas. A maioria dos ataques ocorre nos meses quentes do ano, embora na Flórida, com o seu clima mais quente, os ataques possam surgir em qualquer época do ano.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Serpentes",
      "descricao": "Subordem de répteis escamados sem patas (Serpentes), que inclui todas as cobras."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Para caber no corpo longo e fino, a maioria das cobras tem quantos pulmões funcionando?",
    "resposta": "Um",
    "fonte": [
      "https://en.wikipedia.org/wiki/Snake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Snake",
        "situacao": "ok",
        "texto": "Snakes are limbless reptiles of the squamate suborder Serpentes. Closely related to lizards and the tuatara, snakes are ectothermic, amniote, air-breathing vertebrates with an elongated rope-like body covered by overlapping scales, and they move around using undulatory, rectilinear, concertina, sidewinding or slide-pushing locomotion, with some arboreal species even capable of short-ranged gliding\n[…]\nIndia is often called the land of snakes and is steeped in tradition regarding snakes. Snakes are worshipped as gods even today with many women pouring milk on snake pits (despite snakes' aversion for milk). The cobra is seen on the neck of Shiva and Vishnu is depicted often as sleeping on a seven-headed snake or within the coils of a serpent. There are also several temples in India solely for cobras sometimes called Nagraj (King of Snakes) and it is believed that snakes are symbols of fertility.\n[…]\nIn Christianity and Judaism, a snake appears before Adam and Eve and tempts them with the forbidden fruit from the Tree of Knowledge. The snake returns in the Book of Exodus when Moses turns his staff into a snake as a sign of God's power, and later when he makes the Nehushtan, a bronze snake on a pole that when looked at cured the people of bites from the snakes that plagued them in the desert. The serpent makes its final appearance symbolizing Satan in the Book of Revelation.\n[…]\nSnake handlers use snakes as an integral part of church worship, to demonstrate their faith in divine protection. However, more commonly in Christianity, the serpent has been depicted as a representative of evil and sly plotting, as seen in the description in Genesis. Saint Patrick is purported to have expelled all snakes from Ireland while converting the country to Christianity in the 5th century, thus explaining the absence of snakes there.\n[…]\nBasics of snake taxonomy at Life is Short but Snakes are Long"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Serpente",
        "situacao": "ok",
        "texto": "As serpentes são sauropsídeos escamados carnívoros alongados e sem membros,  pertencentes à subordem Serpentes. Também são conhecidas como cobras, bóias, víboras ou malacatifas.\n[…]\nO esqueleto da maioria das serpentes consiste apenas do crânio, maxilares, coluna vertebral e costelas.\n[…]\nA pele das cobras é coberta por escamas. As escamas do corpo podem ser lisas ou granulares. As suas pálpebras são escamas transparentes que estão sempre fechadas. Elas mudam a sua pele periodicamente (em um processo conhecido como ecdise ou muda). Pensa-se que a finalidade primordial desta é remover os parasitas externos. Esta renovação periódica tornou a serpente num símbolo de saúde, como por exemplo no símbolo da medicina (o bastão de Esculápio).\n[…]\nO pulmão esquerdo é muito pequeno ou mesmo ausente, uma vez que o corpo em forma tubular requer que todos os órgãos sejam compridos e estreitos. Para que caibam no corpo, só um pulmão funciona. Além disso muitos dos órgãos que são pares, como os rins ou órgãos reprodutivos estão distribuídos ao longo do corpo de modo que um esteja à frente do outro, sendo um exemplo de excepção da simetria bilateral .\n[…]\nNem todas as serpentes são capazes de usar todos os métodos. A velocidade máxima conseguida pela maioria das cobras é de 13 km/h, mais lento que um ser humano adulto a correr, excepto a mamba-negra, que pode atingir até 20 km/h.\n[…]\nAs cobras venenosas são classificadas em quatro famílias taxonómicas:\n[…]\nPesquisa em Doenças Autoimunes: Algumas toxinas de serpentes têm propriedades imunossupressoras. Isso pode ser relevante para o desenvolvimento de medicamentos que tratam doenças autoimunes, onde o sistema imunológico ataca o próprio corpo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Pinguim-imperador",
      "descricao": "Maior e mais pesado dos pinguins (Aptenodytes forsteri), endêmico da Antártida, com manchas amarelas nos lados da cabeça."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No inverno antártico, o macho do pinguim-imperador choca o ovo apoiado sobre os pés. Por quanto tempo, aproximadamente?",
    "resposta": "Cerca de dois meses",
    "distratores": [
      "Cerca de duas semanas",
      "Cerca de seis meses",
      "Cerca de uma semana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emperor_penguin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emperor_penguin",
        "situacao": "ok",
        "texto": "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.\n[…]\nEmperor penguins were described in 1844 by English zoologist George Robert Gray, who created the generic name from Ancient Greek word elements, ἀ-πτηνο-δύτης [a-ptēno-dytēs], \"without-wings-diver\". Its specific name is in honour of the German naturalist Johann Reinhold Forster, who accompanied Captain James Cook on his second voyage and officially named five other penguin species.\n[…]\nForster may have been the first person to see emperor penguins in 1773–74, when he recorded a sighting of what he believed was the similar king penguin (A. patagonicus) but, given the location, may very well have been the emperor penguin (A. forsteri).\n[…]\nTogether with the king penguin, the emperor penguin is one of two extant species in the genus Aptenodytes. Fossil evidence of a third species—Ridgen's penguin (A. ridgeni)—has been found from the late Pliocene, about three million years ago, in New Zealand. Studies of penguin behaviour and genetics have proposed that the genus Aptenodytes is basal; in other words, that it split off from a branch which led to all other living penguin species.\n[…]\nDC Comics' crime boss character Oswald Chesterfield Cobblepot, aka \"The Penguin\", styles himself after an emperor penguin, a fact which is often referenced in stories, e.g., in his occasional alias \"Forster Aptenodytes\".\n[…]\nPhotographs of Emperor penguins\n[…]\nRoscoe, R. \"Emperor Penguin\". Photo Volcaniaca. Retrieved 13 April 2008.\n[…]\nEmperor penguin videos, photos & sounds on the Internet Bird Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim-imperador",
        "situacao": "ok",
        "texto": "Pinguim-imperador (Aptenodytes forsteri) é a maior ave da família Spheniscidae (pinguins). Os adultos podem medir até 1,22 metros de altura e pesar até 37 kg. Os machos desta espécie são um dos poucos animais que passam o inverno na Antártida.\n[…]\nO padrão reprodutivo é bastante característico. As fêmeas põem um único ovo em maio/junho, no final do outono, que abandonam imediatamente para passar o inverno no mar. O ovo é incubado pelo macho durante cerca de 65 dias, que correspondem ao inverno antártico. Para superar temperaturas de -40 °C e ventos de 200 km/h, os machos amontoam-se e passam a maior parte do tempo dormindo para poupar energia.\n[…]\nQuando vocaliza, o pinguim-imperador utiliza dois intervalos de frequência simultaneamente. As crias utilizam uma vocalização modulada em frequência para pedir comida e para contactar os progenitores.\n[…]\nApós a postura do ovo, as reservas nutricionais da progenitora estão exauridas. Depois, a fêmea transfere muito cuidadosamente o ovo para o macho, antes de regressar imediatamente ao mar para dois meses em alimentação. A transferência do ovo pode ser uma tarefa difícil e muitos casais deixam cair o ovo no processo. Quando isto acontece, a cria no interior do ovo é imediata e irremediavelmente afectada, já que o ovo não consegue suportar as baixas temperaturas do terreno gelado.\n[…]\nPara sobreviver ao frio e aos ventos de até 200 km/h, os machos formam agregados, andando às voltas dentro deles. Também foram observados expondo as costas em direcção ao vento, com vista a conservarem o calor corporal. Durante os quatro meses de incubação, o macho pode perder até cerca de 20 kg, dos 38 kg iniciais até aos 18 kg finais.\n[…]\n«Vídeos do pinguim-imperador». no Internet Bird Collection",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Ninho comestível de andorinhão",
      "descricao": "Ninho feito de saliva endurecida por andorinhões do Sudeste Asiático, usado na sopa de ninho de andorinha da culinária chinesa."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A sopa de ninho de andorinha, iguaria cara da culinária chinesa, usa ninhos que certas aves asiáticas constroem com que material?",
    "resposta": "A própria saliva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edible_bird%27s_nest"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edible_bird%27s_nest",
        "situacao": "ok",
        "texto": "Edible bird's nests, also known as swallow nests (Chinese: 燕窝; pinyin: yànwō), are bird nests created from solidified saliva by edible-nest swiftlets of various genera Aerodramus, Hydrochous, Schoutedenapus and Collocalia, which are harvested for human consumption.\n[…]\nThe Chinese name for edible bird's nest, 燕窩 (yànwō), translates literally as 'swallow's (or swiftlet's) nest.'\n[…]\nThe best-known use of edible bird's nest is bird's nest soup, a delicacy in Chinese cuisine. When dissolved in water, the bird's nests have a flavored gelatinous texture utilized in soup or sweet soup (tong sui). It is mostly referred to as 燕窩 (yànwō) unless references are made to the savory or sweet soup in Chinese cuisine.\n[…]\nThey take the shape of a shallow cup stuck to the cave wall. The nests are composed of interwoven strands of salivary cement. The nests of both white-nest and black-nest swiftlets have high levels of calcium, iron, potassium, and magnesium.\n[…]\nBird's nest pudding\n[…]\nChai, Kok Chin; Jong, Chian Haur; Tay, Kai Meng; Lim, Chee Peng (August 2016). \"A Perceptual Computing-based Method to Prioritize Failure Modes in Failure Mode and Effect Analysis and Its Application to Edible Bird Nest Farming\" (PDF). Applied Soft Computing. 49: 734–747. doi:10.1016/j.asoc.2016.08.043.\n[…]\nLee, Ting Hun; Wani, Waseem A.; Koay, Yin Shin; Kavita, Supparmaniam; Tan, Eddie Ti Tjih; Shreaz, Sheikh (2017). \"Recent advances in the identification and authentication methods of edible bird's nest\". Food Research International. 100 (Pt 1): 14–27. doi:10.1016/j.foodres.2017.07.036. PMID 28873672.\n[…]\nTing Hun, Lee., Wassem, A. Wani., & Eddie, Tan Ti Tjih (2015). Edible bird's nest: An Incredible salivary bioproduct from swiflets. LAP LAMBERT Academic Publishing. ISBN 978-3659792557."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Jabuti",
      "descricao": "Quelônio estritamente terrestre do gênero Chelonoidis, comum no Brasil, de casco alto e patas em forma de coluna."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes quelônios brasileiros, qual é o que vive só em terra firme, sem nadar em rios nem no mar?",
    "resposta": "Jabuti",
    "distratores": [
      "Cágado",
      "Tracajá",
      "Tartaruga-da-amazônia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jabuti",
      "https://pt.wikipedia.org/wiki/Testudines"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jabuti",
        "situacao": "ok",
        "texto": "Jabuti, jaboti ou jabutim é a designação vulgar, utilizada no Brasil, para duas espécies de répteis providos de carapaça, exclusivamente terrestres, nativos da América do Sul, do gênero Chelonoidis, da ordem dos quelônios, da família dos testudinídeos. As duas espécies de jabuti distribuídas no Brasil são a Chelonoidis carbonaria (jabuti-piranga, o mais comum) e a Chelonoidis denticulata (jabuti-t\n[…]\nSeus parentes mais próximos (inclusive pertencentes ao mesmo gênero Chelonoidis) são a Tartaruga do Chaco (Chelonoidis chilensis, as vezes é referida como jabuti-argentino pelos brasileiros) e a tartaruga-das-galápagos (Chelonoidis nigra)\n[…]\nJabuti-piranga (Chelonoidis carbonaria; do tupi \"jabuti vermelho\"), distribuída em estados do Norte, Nordeste, Centro-oeste, Sudeste e Sul do Brasil. Esta espécie prefere áreas abertas e bordas de matas, mas pode ser encontrada no interior da Mata Amazônica, Mata Atlântica, na Caatinga e no Cerrado.\n[…]\nJabuti-tinga (Chelonoidis denticulata; em tupi, jabuti branco ou claro), menos comum, distribuída em estados do Norte, Nordeste e Centro-oeste. Esta espécie prefere florestas tropicais densas, como a Mata Amazônica, porém raramente pode ser encontrada em áreas mais abertas.\n[…]\nNa cultura indígena brasileira, o jabuti é o herói invencível em diversas narrativas.\n[…]\nO Prêmio Jabuti é considerado o mais importante prêmio literário do Brasil.\n[…]\nNo Brasil, há alguns provérbios populares acerca da figura do jabuti. Entre eles:\n[…]\n\"Jabuti não pega ema\".\n[…]\nNa agricultura, na Região Nordeste do Brasil, jabuti é um dispositivo tosco usado para descaroçar algodão.\n[…]\nNo processo legislativo brasileiro, jabuti designa a inserção de norma alheia ao tema principal em um projeto de lei ou medida provisória enviada ao Legislativo pelo Executivo. Este termo surgiu por analogia ao ditado popular “jabuti não sobe em árvore” usado para expressar fatos que não acontecem de forma natural."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Testudines",
        "situacao": "ok",
        "texto": "Os Testudines, quelónios ou tartarugas são uma ordem de répteis pertencentes ao clado Testudinata. Correspondem a 14 famílias que possuem em torno de 356 espécies, que ocorrem em regiões tropicais e temperadas, algumas delas ameaçadas de extinção. Os nomes populares cágado (tartarugas de água doce), jabuti (tartarugas terrestres) e tartarugas (tartarugas marinhas) não fazem parte da classificação \n[…]\nEm terra firme, com suas nadadeiras anteriores, realiza-se a formação da cama, um buraco, e a cova, com as nadadeiras posteriores, assim fazendo a desova. Depois do processo, as tartarugas fêmeas retornam ao mar. O tempo que as tartarugas levam para sair de seus ovos se dá dependendo da temperatura da areia.\n[…]\nJabuti\n[…]\nHoje, as tartarugas estão sendo usadas para restaurar ecossistemas que sofreram com a diminuição de populações de jabutis (Opuntia megasperma var. megasperma; Gibbs et al. 2008). Como em Galápagos, em que se percebe o efeito positivo em uma espécie rara de cactos semelhantes a árvores (Hunter and Gibbs 2014). As densidades de tartaruga não precisam ser particularmente altas para reverter a invasão de plantas lenhosas e restaurar as comunidades de plantas a condições mais naturais.\n[…]\nAlém disso, há espécies de jabutis que são cavadeiras, os montes escavados na frente das tocas contribuem para a heterogeneidade ambiental e o aumento da diversidade de espécies de plantas (Kaczor and Hartnett 1990) e suas tocas fornecem abrigo para mais de 350 vertebrados e invertebrados (Johnson et al. 2017), muitos dos quais não conseguem cavar tocas por conta própria.\n[…]\nOs ameríndios faziam grande uso das tartarugas, tracajás, jabutis e cágados como alimento.\n[…]\nÍndios de algumas tribos adoravam o jabuti com farofa. Removiam os intestinos do animal através de um buraco na parte ventral, através dele introduziam farinha e colocavam o jabuti inteiro para assar na brasa."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Cecília",
      "descricao": "Anfíbio sem patas e de vida subterrânea da ordem Gymnophiona, parecido com uma minhoca grande."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A cecília, bicho sem patas que vive enterrado e lembra uma minhoca gigante, pertence a que classe de vertebrados?",
    "resposta": "Anfíbios",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gymnophiona",
      "https://en.wikipedia.org/wiki/Caecilian"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gymnophiona",
        "situacao": "ok",
        "texto": "Gymnophiona ou Apoda é uma ordem de anfíbios que inclui cerca de 175 espécies, distribuídas em 5 ou 6 famílias, variando por classificação. São encontrados na América do Sul e na América Central, na África, e no Sudeste Asiático. Os gimnofionos caracterizam-se pela ausência de patas.\n[…]\nOs gimnofionos são onívoros, espécies criadas em cativeiro podem geralmente ser alimentadas com uma dieta à base de minhocas. A dieta desses anfíbios na natureza, porém, é ainda pouco entendida.\n[…]\nEntre os vertebrados, os anfíbios são caracterizados por uma grande diversidade de modos reprodutivos e tipos de cuidados parentais. Na ordem Gymnophiona, há oviparidade com desenvolvimento direto ou indireto, bem como viviparidade. Embora este grupo apresente diversos habitats ecológicos, com variações morfológicas, fisiológicas e comportamentais associadas, sua diversidade reprodutiva ainda é pouco investigada.\n[…]\nA quantidade de vitelo do ovo varia de acordo com o padrão de desenvolvimento embrionário e a quantidade de nutrientes que o embrião precisa. Os ovos dos anfíbios são em sua maioria telolécitos, ou seja, grandes e com bastante vitelo. Nesse grupo, o vitelo é constituído principalmente de fosvitina e lipovitelina, além de várias proteínas, carboidratos e lipídios. Porém, pouco se sabe sobre a composição do vitelo em cecílias.\n[…]\nA reprodução em anfíbios está geralmente associada à estação chuvosa. Em Gymnophiona, entretanto, pouco se sabe sobre a influência da sazonalidade na reprodução. Estudos sugerem que as atividades reprodutivas e a eclosão das larvas estão altamente correlacionadas com as monções: os ovos no estágio inicial de desenvolvimento são encontrados no início da estação chuvosa, enquanto os embriões desenvolvidos no pico da monção."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Caecilian",
        "situacao": "ok",
        "texto": "Caecilians (New Latin for 'blind ones', from caecus, blind) are a group of limbless, worm-shaped or snake-shaped amphibians, with either small eyes or no eyes, comprising the order Gymnophiona. They mostly live hidden in soil or in streambeds, making them some of the least familiar amphibians. Modern caecilians live in the tropics of South and Central America, Africa, and southern Asia. Caecilians\n[…]\nearthworms, termites, lizards, moth larvae, and shrimp. Some species of caecilians will opportunistically consume newborn rodents, salmon eggs, and veal in laboratory conditions, as well as vertebrates such as scolecophidian snakes, lizards, small fish, and frogs.\n[…]\nAs caecilians are a reclusive group, they are featured in only a few human myths and are considered repulsive by many cultures.\n[…]\nIn the folklore of certain regions of India, caecilians are feared and reviled, based on the incorrect belief that they are fatally venomous. While some species of caecilians appear to bear venom glands, none pose a danger to humans. Caecilians in the Eastern Himalayas are colloquially known as \"back ache snakes\", while in the Western Ghats, Ichthyophis tricolor is considered to be more toxic than a king cobra.\n[…]\nDespite deep cultural respect for the cobra and other dangerous animals, the caecilian is killed on sight by salt and kerosene. These myths have complicated conservation initiatives for Indian caecilians.\n[…]\nSouth American caecilians have a variable relationship to local cultures. The minhocão, a legendary worm-like beast in Brazilian folklore, may be inspired by caecilians. Colombian folklore states that the aquatic caecilian, Typhlonectes natans, can be manifested from a lock of hair sealed in a sunken bottle.\n[…]\nCaecilians of the Western Ghats\n[…]\nMedia related to Gymnophiona at Wikimedia Commons\n[…]\nData related to Gymnophiona at Wikispecies"
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
