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
      "nome": "Peru",
      "descricao": "Ave galiforme domesticada (Meleagris gallopavo), nativa da América do Norte, tradicional nas ceias de fim de ano."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em inglês, a ave assada no Dia de Ação de Graças tem o nome da Turquia. Em português, ela leva o nome de que país?",
    "resposta": "Peru",
    "fonte": [
      "https://en.wikipedia.org/wiki/Turkey_(bird)",
      "https://pt.wikipedia.org/wiki/Peru_(ave)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turkey_(bird)",
        "situacao": "ok",
        "texto": "Turkeys are large, heavyset galliforms in the genus Meleagris, indigenous to the Americas. They are among the largest birds in their native ranges, as well as being one of the heaviest birds in the order Galliformes. There are two extant turkey species: the wild turkey (Meleagris gallopavo) of Southern, Central and Eastern North America, and the ocellated turkey (Meleagris ocellata) of the Yucatán\n[…]\nThe genus Meleagris was introduced in 1758 by the Swedish naturalist Carl Linnaeus in the tenth edition of his Systema Naturae. The genus name is from the Ancient Greek μελεαγρις, meleagris meaning \"guineafowl\". The type species is the wild turkey (Meleagris gallopavo).\n[…]\nMeleagris sp. (Late Pliocene of Macasphalt Shell Pit, U.S.)\n[…]\nTurkeys have been considered by many authorities to be their own family—the Meleagrididae—but a 2007 genomic analysis of a retrotransposon marker groups turkeys in the family Phasianidae. In 2010, a team of scientists published a draft sequence of the domestic turkey (Meleagris gallopavo) genome.\n[…]\nDomesticated turkeys consume a commercially produced feed formulated to increase the size of the turkeys. To supplement their nutrition, farmers will also feed them grains that wild turkeys eat, such as corn.\n[…]\nThe species Meleagris gallopavo is eaten by humans. They were first domesticated by the indigenous people of Mexico from at least 800 BC onwards. By 200 BC, the indigenous people of what is today the American Southwest had domesticated turkeys; though the theory that they were introduced from Mexico was once influential, modern studies suggest that the turkeys of the Southwest were domesticated independently from those in Mexico.\n[…]\nTurkeys were used both as a food source and for their feathers and bones, which were used in both practical and cultural contexts. Compared to wild turkeys, domestic turkeys are selectively bred to grow larger in size for their meat."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peru_(ave)",
        "situacao": "ok",
        "texto": "Peru é o nome comum dado às aves galiformes do gênero Meleagris. Uma espécie, Meleagris gallopavo, conhecida vulgarmente como peru-selvagem, é nativa das florestas da América do Norte. O peru-doméstico descende desta espécie. A outra espécie viva é Meleagris ocellata ou peru-ocelado, nativo das florestas da Península de Iucatã. Existem várias espécies extintas com idades até aos 23 milhões de anos\n[…]\ncom variantes selvagens e domesticadas, originárias da América do Norte e aparentadas com os faisões.\n[…]\nO nome peru tem a sua origem provavelmente no topônimo Peru, por acreditar-se no século XVI que era dali que se exportava a ave para Portugal; além do mais, no Portugal do século XVI, segundo relata José Pedro Machado, a fama do peru era tal que, metonimicamente, entre os Portugueses, passa a significar a América espanhola.\n[…]\nOriginário da América do Norte, foi levado para a Europa em 1511. O peru selvagem foi domesticado pela primeira vez no México há mais de mil anos, mas, no começo do século XX, havia desaparecido em grande parte dos Estados Unidos. Nos últimos anos o peru começou a ser reintroduzido no seu lugar de origem com aparente sucesso.\n[…]\nAtualmente, a criação de peru-doméstico é uma indústria em grande escala, tanto na América quanto na Europa, sendo um dos pratos preferidos no Natal e no Dia de Ação de Graças nos Estados Unidos.\n[…]\nO peru é, tradicionalmente, o prato principal da Ceia de Natal tanto na Europa como na América. É usado na Europa desde o século XVI para isso e somente depois foi introduzido na América como prato festivo. Ele é especialmente apreciado por ser especialmente tenro e saboroso quando corretamente preparado. Recentemente, na América Latina, tem sido substituído por pernil e frango (Chester).\n[…]\nPeru-do-mato"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Gavião-real",
      "descricao": "Grande águia neotropical (Harpia harpyja), a maior ave de rapina de sua área de distribuição, das florestas tropicais de baixada."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O gavião-real também é conhecido por um nome tirado de monstros alados da mitologia grega, metade mulher e metade ave. Que nome é esse?",
    "resposta": "Harpia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Harpy_eagle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Harpy_eagle",
        "situacao": "ok",
        "texto": "The harpy eagle (Harpia harpyja) is a large neotropical species of eagle. It is also called the American harpy eagle to distinguish it from the Papuan eagle, which is sometimes known as the New Guinea harpy eagle or Papuan harpy eagle. It is the largest bird of prey throughout its range, and among the largest extant species of eagles in the world. It usually inhabits tropical lowland rainforests i\n[…]\nDestruction of its natural habitat has caused it to vanish from many parts of its former range, and it is nearly extirpated from much of Central America. It is the only member of the genus Harpia, which, together with Harpyopsis, Macheiramphus and Morphnus, forms the subfamily Harpiinae.\n[…]\nThe harpy eagle was first described by Carl Linnaeus in his landmark 1758 10th edition of Systema Naturae as Vultur harpyja, after the mythological beast harpy. It is now the only species placed in the genus Harpia that was introduced in 1816 by the French ornithologist Louis Pierre Vieillot.\n[…]\nThe specific name harpyja and the word \"harpy\" in the common name both come from Ancient Greek harpyia (ἅρπυια). They refer to the harpies of Ancient Greek mythology."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gavi%C3%A3o-real",
        "situacao": "ok",
        "texto": "O gavião-real (nome científico: Harpia harpyja), também chamado cutucurim, harpia, uiraçu, uiracuir, uiruuetê, uraçu, águia-imperial-brasileira, águia-imperial ou uiraçu-verdadeiro, é uma ave acipitriforme da família dos acipitrídeos (Accipitridae). É a maior e mais poderosa ave de rapina encontrada em toda a sua extensão e está entre as maiores espécies de águias existentes no mundo. Geralmente h\n[…]\nO o nome do gênero Harpia (sinônimo de Harpyia) deriva do grego harpē (ἅρπη), \"ave de rapina\". O epíteto específico harpyja deriva do latim harpe, \"ave de rapina\", que derivou do grego harpē, com o mesmo significado. Ambos referem-se às harpias da mitologia grega, espíritos do vento que levavam os mortos para o Hades ou Tártaro, e diziam ter um corpo como um abutre e o rosto de uma mulher.\n[…]\nPor causa do tamanho e ferocidade do animal, os primeiros exploradores europeus da América Central nomearam-nas como harpias. \"Gavião-de-penacho\" e \"gavião-real\" são referências ao penacho na cabeça característico da espécie, com um formato semelhante ao de uma coroa. \"Uiruuetê\" é um termo tupi que contém o termo e'tê, \"verdadeiro\", gwï'ra, \"ave\", e talvez 'una no sentido de \"preto\" ou -u'su no sentido de \"grande\".\n[…]\nO gavião-real foi descrito pela primeira vez por Carlos Lineu em seu livro de 1758 10.ª edição do Systema Naturae como Vultur harpyja. É uma espécie monotípica e o único membro do gênero Harpia. As relações filogenéticas do grupo ao qual pertence são incompletamente conhecidas, mas dois estudos recentes baseados em dados de sequência de DNA colocam-no perto da base dessa radiação.\n[…]\nUm gavião-real vivo foi usado para representar a agora extinta águia-de-haast em Monsters We Met da British Broadcasting Corporation (BBC).\n[…]\n«Harpy Eagle Harpia harpyja» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Canário",
      "descricao": "Pequeno passarinho amarelo (Serinus canaria), nativo das Ilhas Canárias, Açores e Madeira, criado como ave de gaiola no mundo todo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O canário tem o nome das Ilhas Canárias. E o nome dessas ilhas vem, em latim, de que animal?",
    "resposta": "Cão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Atlantic_canary",
      "https://en.wikipedia.org/wiki/Canary_Islands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Atlantic_canary",
        "situacao": "ok",
        "texto": "The Atlantic canary (Serinus canaria), known worldwide simply as the wild canary and also called the island canary, common canary, or canary, is a small passerine bird belonging to the genus Serinus in the true finch family, Fringillidae. It is native to the Canary Islands, the Azores, and Madeira. Wild birds are mostly yellow-green, with brownish streaking on the back. The species is common in ca\n[…]\nThe Atlantic canary was formally described in 1758 by the Swedish naturalist Carl Linnaeus in the tenth edition of his Systema Naturae. He placed it with the finches in the genus Fringilla and coined the binomial name Fringilla canaria. In 1555 the Swiss naturalist Conrad Gessner had used the Latin name Canaria for the species in his book Historia animalium.\n[…]\nThe Atlantic canary is now one of eight species placed in the genus Serinus that was introduced in 1816 by the German naturalist Carl Ludwig Koch. The species is considered to be monotypic, with no subspecies being recognised; domesticated canaries are sometimes cited as \"S. c. domestica\", but this is not an accepted scientific name.\n[…]\nThe colour canary yellow is in turn named after the yellow domestic canary, produced by a mutation which suppressed the melanins of the original dull greenish wild Atlantic canary colour.\n[…]\nInbreeding depression occurs in S. canaria and is more severe during early development under the stressful conditions associated with hatching asynchrony. Hatching asynchrony leads to differences in age and thus in size, so that the environment of the first hatched is relatively benign, compared to that of the last hatched.\n[…]\nList of animal and plant symbols of the Canary Islands\n[…]\nDomestic canary"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Canary_Islands",
        "situacao": "ok",
        "texto": "The Canary Islands ( ; Spanish: Canarias [kaˈnaɾjas] ) or Canaries are an archipelago in the Atlantic Ocean and the southernmost autonomous community of Spain, located about 100 kilometres (60 mi) off the northwest coast of Africa. The archipelago has a population of approximately 2.27 million inhabitants, making it the most populous overseas special territory of the European Union.\n[…]\nBefore the arrival of humans, the Canaries were inhabited by prehistoric animals including the giant lizard (Gallotia goliath), the Tenerife and Gran Canaria giant rats, and giant tortoises, Geochelone burchardi and Geochelone vulcanica.\n[…]\nThe official natural symbols associated with Canary Islands are the bird Serinus canaria (canary) and the Phoenix canariensis palm.\n[…]\nHospital Universitario Insular de Gran Canaria – Gran Canaria\n[…]\nThe Canary Islands were previously inhabited by a variety of endemic animals, such as extinct giant lizards (Gallotia goliath), giant tortoises (Centrochelys burchardi and C. vulcanica), Tenerife and Gran Canaria giant rats (Canariomys bravoi and C. tamarani), and the lava mouse Malpaisomys insularis.\n[…]\nCarla Suárez Navarro, born in Las Palmas de Gran Canaria in 1988, professional tennis player\n[…]\nJesé, born in Las Palmas de Gran Canaria in 1993, plays association football for Las Palmas.\n[…]\nMisa Rodríguez, born in Las Palmas de Gran Canaria in 1999, plays association football for Real Madrid Femenino. Member of the 2023 Women's World Cup winning Spain women's national football team.\n[…]\nCanarian cuisine\n[…]\nCanarian Spanish\n[…]\nTortilla canaria\n[…]\nSergio Hanquet, Diving in Canaries, Litografía A. ROMERO, 2001. ISBN 84-932195-0-9\n[…]\nBørgesen, Frederik; Frémy, Pierre (1925). Marine algae from the Canary Islands, especially from Teneriffe and Gran Canaria. Høst in Komm. OCLC 1070942615.\n[…]\nCloud vortices near the Canaries, March 2023. NASA Earth Observatory POTD for 15 April 2023."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Can%C3%A1rio",
        "situacao": "ok",
        "texto": "O canário (Serinus canaria) é um pequeno pássaro canoro, membro da família Fringillidae. Este pássaro é originário dos Açores, da ilha da Madeira e das ilhas Canárias. O seu nome vem destas últimas, sendo que o nome das ilhas vem da palavra em latim canaria, que significa \"dos cães\", já que os romanos encontraram ali muitos cães selvagens.\n[…]\nNo Brasil o canário(Serinus canaria), é também conhecido como canário-belga, canário-do-reino, canário-do-império ou canário-doméstico.\n[…]\nO nome canário-do-reino foi-lhe dado no Brasil, para haver distinção ao canário-da-terra-brasileiro (Sicalis flaveola brasiliense), ave nativa desse território.\n[…]\nNo ano de 1042, nas Ilhas Canárias, foram encontrados os primeiros canários. Após a ocupação da ilha pelos espanhóis, em 1478, foi que ficou conhecida a docilidade da espécie, e que era possível cria-los em cativeiro. Porém, foram os monges que obtiveram sucesso na criação dos pássaros reproduzindo a espécie em cativeiro.\n[…]\nos canários com cor;\n[…]\nA cor vermelha foi introduzida no canário doméstico pelo cruzamento com o Pintassilgo-da-venezuela (Spinus cucullatus ou Carduelis cucullata), também chamado Tarim ou Pintassilgo-vermelho-da-América-do-Sul.\n[…]\nNa América do Sul, principalmente no Brasil existe o canário nativo, chamado de canário-da-terra ou canário-da-terra-brasileiro (Sicalis flaveola brasiliense). Esse canário não é da mesma espécie do canário-belga ou canário-do-reino (Serinus canaria), o canário-da-terra tem esse nome para distinguir do canário que vinha de fora. Assim tem-se o \"canário-da-terra\" (Sicalis flaveola brasiliense) e o \"canário-belga\" ou \"canário-do-reino\" (Serinus canaria).\n[…]\nPor ser uma espécie nativa, a criação em cativeiro do canário-da-terra depende de autorização do IBAMA, e sua captura na natureza constitui crime ambiental.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Mamba-negra",
      "descricao": "Serpente peçonhenta africana (Dendroaspis polylepis), longa e veloz, de pele cinza ou oliva."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A mamba-negra tem a pele acinzentada ou cor de oliva. De onde vem, então, o negro do seu nome?",
    "resposta": "Do interior preto da boca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Black_mamba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Black_mamba",
        "situacao": "ok",
        "texto": "The black mamba (Dendroaspis polylepis) is a species of highly venomous snake belonging to the family Elapidae. It is native to parts of sub-Saharan Africa. First formally described by Albert Günther in 1864, it is the second-longest venomous snake after the king cobra; mature specimens generally exceed 2 m (6 ft 7 in) and commonly grow to 3 m (9.8 ft). Specimens of 4.3 to 4.5 m (14 to 15 ft) have\n[…]\nThe generic name of the species is derived from the Ancient Greek words dendron (δένδρον), \"tree\", and aspis (ἀσπίς) \"asp\", and the specific epithet polylepis is derived from the Ancient Greek poly (πολύ) meaning \"many\" and lepis (λεπίς) meaning \"scale\". The term \"mamba\" is derived from the Zulu word \"imamba\". In Tanzania, a local Ngindo name is ndemalunyayo (\"grass-cutter\") because it supposedly clips grass.\n[…]\nIn 1896, Belgian-British zoologist George Albert Boulenger combined the species Dendroaspis polylepis as a whole with the eastern green mamba (Dendroaspis angusticeps), a lumping diagnosis that remained in force until 1946 when South African herpetologist Vivian FitzSimons again split them into separate species.\n[…]\nA 2016 genetic analysis showed the black and eastern green mambas are each other's closest relatives, and are more distantly related to Jameson's mamba (Dendroaspis jamesoni), as shown in the cladogram below.\n[…]\nIn 2015, the proteome (complete protein profile) of black mamba venom was assessed and published, revealing 41 distinct proteins and one nucleoside. The venom is composed of two main families of toxic agents, dendrotoxins (I and K) and (at a slightly lower proportion) three-finger toxins.\n[…]\nIn January 2023, a 17-year-old student from Zimbabwe died after being bitten by a black mamba. The snake had gone into a high school classroom while the students were outside.\n[…]\nBlack mamba – Clinical Toxinology Resources"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mamba-negra",
        "situacao": "ok",
        "texto": "A mamba-negra (Dendroaspis polylepis) é uma espécie de cobra grande e extremamente venenosa pertencente à família Elapidae. É nativa de partes da África Subsariana. Descrita pela primeira vez formalmente por Albert Günther em 1864, é a segunda cobra venenosa mais longa depois da cobra-real; espécimes adultos geralmente excedem 2 m e normalmente crescem até 3 m, mas já foram encontrados indivíduos \n[…]\nA mamba-negra não tem este nome devido à cor do seu corpo, já que tem uma cor acinzentada (variável), mas ao interior preto da sua boca, que ela exibe em sinal de ameaça. É capaz de atacar a distâncias consideráveis e pode realizar uma série de mordidas em rápida sucessão. Seu veneno é composto principalmente de neurotoxinas, que frequentemente induzem sintomas em dez minutos e é potencialmente fatal, a menos que o soro antiofídico seja administrado. Sem o tratamento é mortal em 100% dos casos.\n[…]\nAs escamas de algumas podem apresentar um brilho arroxeado. Os indivíduos ocasionalmente apresentam manchas escuras na parte posterior, que podem aparecer na forma de faixas cruzadas diagonais. As mambas negras têm ventres branco-acinzentados. O nome comum é derivado da aparência da parte interna da boca, de cinza-azulado escuro a quase preto. Os olhos variam entre o castanho-acinzentado e os tons de preto; a pupila é circundada por uma cor branca prateada ou amarela.\n[…]\nArisca e muitas vezes imprevisível, a mamba-negra é muito ágil e pode se mover rapidamente. É um animal tímido, que prefere ficar longe do contato humano. Quando percebe uma ameaça, geralmente foge e se esconde em um arbusto ou buraco. Quando confrontada, é provável que faça um sinal de ameaça, abrindo a boca para expor sua boca preta e sacudindo a língua. Também como alerta de ataque, ela emite um sinal alto, também chamado de sibilo.\n[…]\nMamba Negra também é o nome de uma supervilã fictícia do Universo Marvel.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Basilisco",
      "descricao": "Lagarto da América Central (Basiliscus basiliscus) capaz de correr sobre a superfície da água."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por conseguir correr sobre a água, o lagarto basilisco ganhou o apelido de lagarto de que figura religiosa?",
    "resposta": "Jesus Cristo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Common_basilisk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Common_basilisk",
        "situacao": "ok",
        "texto": "The common basilisk (Basiliscus basiliscus) is a species of lizard in the family Corytophanidae. The species is endemic to Central America and South America, where it is found near rivers and streams in rainforests. It is also known as the Jesus Christ lizard, Jesus lizard, South American Jesus lizard, or lagarto de Jesus Cristo for its ability to run on the surface of water.\n[…]\nThe common basilisk, along with the other members of its genus, take the nickname the \"Jesus Christ lizard\" or \"Jesus lizard\" because when fleeing from predators, they gather sufficient momentum to run across the water for a brief distance while holding most of their body out of the water (similar to the biblical story of Jesus walking on water). Basilisks have large hind feet with scaly fringes on the sides of the third, fourth, and fifth toes.\n[…]\nBoulenger GA (1885). Catalogue of the Lizards in the British Museum (Natural History). Second Edition. Volume II. Iguanidæ ... London: Trustees of the British Museum (Natural History). (Taylor and Francis, printers). xiii + 497 pp. + Plates I-XXIV. (Basiliscus americanus, p. 108).\n[…]\nLang, Mathias (1989). \"Phylogenetic and Geographic Patterns of Basiliscine Iguanians (Reptilia: Squamata: \"Iguanidæ\")\". Bonner Zoologische Monographien (28): 1-172. (Basiliscus basiliscus, pp. 125–129).\n[…]\nLinnæus C (1758). Systema naturæ per regna tria naturæ, secundum classes, ordines, genera, species, cum characteribus, differentiis, synonymis, locis. Tomus I. Editio Decima, Reformata. Stockholm: L. Salvius. 824 pp. (Lacerta basiliscus, new species, p. 206). (in Latin).\n[…]\nNational Geographic: Video of basilisk lizard running on water\n[…]\nNational Geographic: Green Basilisk Lizard\n[…]\nNational Geographic: How 'Jesus Lizards' Walk on Water"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Basiliscus_basiliscus",
        "situacao": "ok",
        "texto": "O basilisco (Basiliscus basiliscus) é uma espécie de lagarto da família Corytophanidae encontrado próximo a rios e lagos nas selvas das Américas central e do sul. Alimenta-se de insetos, ovos, flores, frutos  e pequenos vertebrados, como aves e peixes. Seu tempo de vida em cativeiro dura entre 7-8 anos, mas na natureza ele raramente vive tanto, pois possui muitos predadores naturais como aves de r\n[…]\nSua característica mais famosa é a habilidade (compartilhada com os outros lagartos do gênero Basiliscus) de correr sobre a água sem afundar, que lhe rendeu o apelido em inglês de Jesus Christ lizard (lagarto Jesus Cristo). Essa habilidade incrível ocorre devido à anatomia das patas traseiras do lagarto, com seus dedos bem alongados e unidos uns aos outros por membranas de pele, para distribuir melhor o peso do animal.\n[…]\nQuanto menor (e mais leve) o indivíduo, maior a distância percorrida sem afundar. Para um ser humano possuir essa mesma habilidade, precisaria correr a 104 km/h.\n[…]\nO basilisco possui bolhas de ar nas patas, as quais auxiliam na movimentação por cima da água, além de sua velocidade alta.\n[…]\nO basilisco é o único lagarto que anda sobre a água.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Araponga",
      "descricao": "Cotinga macho de plumagem branca e garganta nua esverdeada (Procnias nudicollis), da Mata Atlântica, de canto metálico muito forte."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "No Brasil, araponga, o nome de uma ave de canto metálico, virou gíria para que tipo de pessoa?",
    "resposta": "Espião",
    "fonte": [
      "https://pt.wiktionary.org/wiki/araponga",
      "https://pt.wikipedia.org/wiki/Araponga_(telenovela)"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/araponga",
        "situacao": "ok",
        "texto": "</span>boilerplate seealso\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"confundir\",\"href\":\"./Predefinição:confundir\"},\"params\":{\"1\":{\"wt\":\"Araponga\"}},\"i\":0}}]}'>Não confundir com Araponga .\n[…]\n( Zoologia ) ave brasileira ( Procnias nudicollis ), de grito alto e estridente, da família Cotingidae, gênero Procnias\n[…]\n( Gíria ) espião que executa interceptação ilegal de informação privada, tipicamente de conversas telefônicas\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=araponga&oldid=3175979 \""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Araponga_(telenovela)",
        "situacao": "ok",
        "texto": "Araponga é uma telenovela brasileira produzida e exibida pela TV Globo de 15 de outubro de 1990 a 29 de março de 1991, em 115 capítulos. Substituiu Eu Prometo e foi a última novela das dez antes da faixa voltar em 2026 com a exibição de Guerreiros do Sol, sendo a 28ª \"novela das dez\" exibida pela emissora.\n[…]\nContou com as atuações de Tarcísio Meira, Christiane Torloni, Taumaturgo Ferreira, Paulo José, Lúcia Veríssimo, Flávio Galvão, Ary Fontoura, Eloísa Mafalda, Edgard Amorim e Carla Marins nos papéis principais.\n[…]\nAraponga começa a teorizar conspirações e criar elos imaginários entre pessoas e situações. Suas ideias delirantes são reforçadas pelas mentiras do informante Tuca Maia, que vai trabalhar no mesmo jornal que Magali e tenta engabelar todo mundo. Ao manter contato com a jornalista, Araponga se apaixona pela moça, o que põe em risco sua missão investigativa.\n[…]\nO roteiro de Araponga foi desenvolvido em conjunto por Dias Gomes, Lauro César Muniz e Ferreira Gullar, que escreviam os capítulos individualmente e reuniam-se para discutir o rumo geral da história. O título da novela (que a princípio seria Ponto Futuro) foi dado por Gomes em referência ao uso costumeiro de codinomes por espiões do serviço de informações da ditadura militar brasileira — estes usavam nomes de animais. O protagonista, ex-agente do regime, adota o da ave araponga.\n[…]\nA TV Globo ficou sem exibir novelas nesse horário até 2011, quando resolveu experimentar uma nova faixa, às 23 horas. Vinte anos após o término de Araponga, a emissora exibiu o remake de \"O Astro\", obra de Janete Clair, escrita em 64 capítulos por Alcides Nogueira e Geraldo Carneiro. 35 anos depois, em 2026, a faixa original seria reativada com uma edição especial de Guerreiros do Sol (2025).\n[…]\nAraponga no IMDb\n[…]\nAraponga no Memória Globo"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Projeto Tamar",
      "descricao": "Programa brasileiro de conservação das tartarugas marinhas, criado em 1980."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Criado em 1980 no litoral brasileiro, o Projeto Tamar tem um nome que junta o começo de duas palavras. Quais são elas?",
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
    "indice": 8,
    "ancora": {
      "nome": "João-de-barro",
      "descricao": "Ave sul-americana (Furnarius rufus) que constrói ninhos de barro em forma de forno."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em espanhol, o joão-de-barro se chama hornero, porque seu ninho de barro lembra o quê?",
    "resposta": "Um forno",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rufous_hornero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rufous_hornero",
        "situacao": "ok",
        "texto": "The rufous hornero (Furnarius rufus) is a medium-sized ovenbird in the family Furnariidae. It occurs in eastern South America and is the national bird of Argentina. Also known as the red ovenbird, it is common in savannas, second-growth scrub, pastures, and agricultural land and is synanthropic. Its range includes midwestern, southeastern, and southern Brazil, Bolivia, Paraguay, Uruguay, and north\n[…]\nThe first notes taken on the species were made by Philibert Commerson in 1767, from a specimen obtained at Barragán cove during Louis Antoine de Bougainville's expedition. Commerson named the bird Turdus fulvus and his notes were later published by Georges Buffon in his Histoire Naturelle in 1779. However, the rufous hornero was first scientifically described, as Merops rufus, by the German naturalist Johann Friedrich Gmelin in the 13th edition of Systema Naturae published in 1788.\n[…]\nIn 1816, Louis Pierre Vieillot established the genus Furnarius in his Analyse d'une nouvelle ornithologie élémentaire and included the rufous hornero on it, although Vieillot did not directly rename the rufous hornero as Furnarius rufus. Its current scientific name was used for the first time in ornithology by John Gould in his Zoology of the Voyage of H.M.S. Beagle in 1841.\n[…]\nNowadays the rufous hornero integrates the genus Furnarius with the other five species. They are all native to South America and build mud nests that resemble old wood-fired ovens. Its closest relative is the crested hornero, which is considered its sister species due to similar behavior and plumage pattern.\n[…]\nThe derivation of the current genus name, Furnarius, is from the Latin furnus, meaning \"an oven\". The Spanish word \"hornero\" similarly comes from horno, meaning \"oven\". Its specific epithet comes from the Latin rufum, meaning \"red\" or \"reddish\". It is also known as the red ovenbird.\n[…]\nRufous hornero photo gallery VIREO"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jo%C3%A3o-de-barro",
        "situacao": "ok",
        "texto": "O joão-de-barro (Furnarius rufus) é uma ave Passeriforme da família Furnariidae. É conhecido por seu característico ninho de barro em forma de forno (característica compartilhada com muitas espécies dessa família). É a ave símbolo da Argentina, onde é chamado de hornero (forneiro) e tido como \"Ave de la Patria\", desde 1928.\n[…]\nÉ conhecido em português por vários apelidos, como joão-de-barro, amassa-barro, barreiro, forneiro, maria-de-barro, oleiro, pedreiro, e em espanhol pode ser chamado de hornero común, alonsito e hornero. Também é conhecido por forneiro-ruivo, ou forneiro, também chamado uiracuiar e uiracuité (de origem tupi-guarani Gwirá, \"pássaro\" e Ku'ya, \"cuia/abrigo\")[carece de fontes]?\n[…]\nO casal se reveza na construção do ninho, uma estrutura em formato de forno, com 17 a 30 cm de diâmetro e uma altura de cerca de 20 cm, que pode pesar até 12 kg, embora a média seja de 5 kg. Divide-se em uma base ou plataforma, um vestíbulo estreito e uma câmara incubadora mais ampla, arredondada. A entrada tem em geral uma forma elíptica ou em crescente. Seu material é o barro, a palha e o esterco fresco. Todos os anos constroem um ninho novo, mas às vezes podem reformar um antigo.\n[…]\nNinhos vazios são ocupados por uma grande variedade de aves, alguns insetos como abelhas e percevejos, além de cobras e pererecas. A andorinha Phaeoprogne tapera utiliza exclusivamente ninhos vazios de joão-de-barro para sua própria nidificação.\n[…]\nOuça o canto do joão-de-barro\n[…]\nOs indios avá guaraní assim explicam a origem do joão-de-barro: a jovem Kuairúi havia se enamorado de Tiantiá, um valoroso guerreiro. Queriam casar, mas o cacique Tabáire, pai de Kuairúi, não permitiu, porque a despeito de sua bravura Tiantiá não sabia construir uma cabana. Assim foram transformados em pássaros que ajudam um ao outro na construção do ninho.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Galo gaulês",
      "descricao": "O galo como símbolo nacional não oficial da França."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O galo virou símbolo da França por um trocadilho latino: a palavra gallus queria dizer galo e também o habitante de que região?",
    "resposta": "Gália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Gallic_rooster"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gallic_rooster",
        "situacao": "ok",
        "texto": "The Gallic rooster (French: coq gaulois, pronounced [kɔk ɡolwa] ) is a national symbol of the French people as a nation, as opposed to Marianne representing France as a state and its values: the Republic.\n[…]\nDuring the times of Ancient Rome, Suetonius, in The Twelve Caesars, noticed that, in Latin, rooster (gallus) and Galli (Gallus) were homonyms.\n[…]\nIts association with France dates back from the Middle Ages and is due to the play on words in Latin between Gallus, meaning an inhabitant of Gaul, and gallus, meaning rooster, or cockerel.\n[…]\nThe France national rugby league team are known as the Chanteclairs, referring to the cockerel's song.\n[…]\nAnother heraldic animal officially used by the French nation was the French Imperial Eagle, symbol of the First and Second French Empire under Napoleon I and Napoleon III, as well as the bee. There was also the Salamander which was used under Francis I of France.\n[…]\nInspired by the French example, a rooster was adopted as the symbol of Walloon movement in 1913. It represents a \"bold rooster\" (coq hardi), raising its claws, instead of the \"crowing rooster\" that is traditionally depicted in France. This symbol, also known as the Walloon rooster, was officially adopted as the symbol of Wallonia (in 1998) and the French Community of Belgium (in 1991).\n[…]\nIn France, the French onomatopoeia for the rooster crowing sound, \"cocorico\" (cock-a-doodle-doo), is sometimes used as an expression of national pride, sometimes ironically.\n[…]\nEmbassy of France in the United States - additional information Archived 24 September 2009 at the Wayback Machine\n[…]\nFrance plucks its bird from peril, from BBC. A plan to preserve the genetic heritage of the French cockerel."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Galo_Gaul%C3%AAs",
        "situacao": "ok",
        "texto": "O Galo Gaulês é um dos símbolos nacionais da França, ao lado de Marianne, da bandeira tricolor e de La Marseillaise.\n[…]\nA ligação entre o galo e os gauleses foi feita pelos romanos na Antiguidade, sendo utilizado como símbolo nacional francês pela primeira vez durante a Revolução Francesa. Ele se opôs particularmente à águia prussiana ou alemã durante as guerras, embora, durante a Era Napoleônica, tenha sido em grande parte substituído pela Águia Imperial.\n[…]\nNa Valônia, ativistas reunidos em 1912 procuravam um símbolo para a sua região.\n[…]\nAnsiosos por ligar a identidade da Valônia à civilização latina e, particularmente, à civilização francesa, decidiram adotar um galo como símbolo, uma vez que o Galo Gaulês já era um símbolo da França há muito tempo, em particular desde a Revolução de 1789, a Monarquia de Julho e os regimes republicanos subsequentes, aparecendo no emblema nacional do país, na maioria dos memoriais de guerra franceses da Primeira Guerra Mundial, em antigas moedas francesas e nas camisas das seleções esportivas francesas.\n[…]\nO grito do galo (“cocorico\") é uma onomatopeia que, na França, é utilizada para expressar alegria tingida de patriotismo ou chauvinismo, muitas vezes com ironia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Rãs-dardo-venenosas",
      "descricao": "Pequenas rãs de cores vivas da família Dendrobatidae, das florestas tropicais da América Central e do Sul, com pele tóxica."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Indígenas da Colômbia passam o veneno de certas rãs coloridas na ponta de uma arma de caça, que acabou dando nome a essas rãs. Que arma?",
    "resposta": "Dardos de zarabatana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Poison_dart_frog"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Poison_dart_frog",
        "situacao": "ok",
        "texto": "The poison dart frog (also known as the dart-poison frog, the poison frog or formerly known as the poison arrow frog) is the common name of a group of frogs in the family Dendrobatidae which are native to tropical Central and South America. These species are diurnal and often have brightly colored bodies. This bright coloration is correlated with the toxicity of the species, making them aposematic\n[…]\nPoison dart frogs are an example of an aposematic organism. Their bright coloration advertises unpalatability to potential predators. Aposematism is currently thought to have originated at least four times within the poison dart family according to phylogenetic trees, and dendrobatid frogs have since undergone dramatic divergences – both interspecific and intraspecific – in their aposematic coloration. This is surprising given the frequency-dependent nature of this type of defense mechanism.\n[…]\nPoison dart frogs are endemic to humid, tropical environments of Central and South America. These frogs are generally found in tropical rainforests, including in Bolivia, Costa Rica, Brazil, Colombia, Ecuador, Venezuela, Suriname, French Guiana, Peru, Panama, Guyana, Nicaragua, and Hawaii (introduced).\n[…]\nSome poison dart frogs species include a number of conspecific color morphs that emerged as recently as 6,000 years ago. Therefore, species such as Dendrobates tinctorius, Oophaga pumilio, and Oophaga granulifera can include color pattern morphs that can be interbred (colors are under polygenic control, while the actual patterns are probably controlled by a single locus).\n[…]\nPoison dart frogs suffer from chytridiomycosis, which is a deadly disease that is caused by the fungus Batrachochytrium dendrobatidis (Bd). This infection has been found in frogs from Colostethus and Dendrobates.\n[…]\nDendrobates.org – ecology, evolution and conservation of poison frogs\n[…]\n\"Poison dart frog\". The Encyclopedia of Life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dendrobatidae",
        "situacao": "ok",
        "texto": "Dendrobatidae é uma família de anfíbios pertencentes à ordem anura, subordem Neobatrachia.\n[…]\nOs membros deste grupo têm a particularidade de produzirem toxinas potentes que se encontram na sua pele. A espécie com a toxina mais venenosa é a Phyllobates terribilis, que se iguala com o veneno da vespa do mar.\n[…]\nMais de 100 toxinas foram já identificadas nas secreções cutâneas de membros deste grupo, especialmente no género Dendrobates e Phyllobates. Os membros deste último género produzem uma neurotoxina potente denominada batracotoxina. Apenas 40 microgramas desta substância podem ser fatais.\n[…]\nAlgumas tribos indígenas da América do Sul utilizam estas toxinas, colocando na ponta das setas utilizadas em caçadas, daí o nome em inglês poison dart frogs.\n[…]\nSão caracterizados por terem a pele colorida e terem um pequeno tamanho. A cor da pele varia desde o laranja e preto ao azul e amarelo.\n[…]\nEncontram-se originalmente nas América Central e América do Sul, e uma espécie, (Dendrobates auratus) foi introduzida na ilha de Oahu, no Havaí para controlar a população de pernilongos.\n[…]\nEsta família é alvo constante de estudos filogenéticos e sofre mudanças taxonómicas de maneira frequente. A família Dendrobatidae foi revista taxonomicamente em 2006 e contém 12 géneros, com cerca de 170 espécies.\n[…]\nSubfamília Dendrobatinae Cope, 1865\n[…]\nGénero Dendrobates Wagler, 1830",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Pinguim",
      "descricao": "Ave marinha não voadora da família Spheniscidae, do Hemisfério Sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Antes de designar as aves do Hemisfério Sul, a palavra pinguim era usada para que ave do Atlântico Norte, extinta no século dezenove?",
    "resposta": "Arau-gigante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Penguin",
      "https://en.wikipedia.org/wiki/Great_auk"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Penguin",
        "situacao": "ok",
        "texto": "Penguins are a group of flightless semi-aquatic sea birds which live almost exclusively in the Southern Hemisphere. Only one species, the Galapagos penguin, lives at, and slightly north of, the equator. Highly adapted for life in the ocean water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which \n[…]\nDuring the Late Eocene and the Early Oligocene (40–30 mya), some lineages of gigantic penguins existed. Nordenskjoeld's giant penguin was the tallest, growing nearly 1.80 meters (5.9 feet) tall. The New Zealand giant penguin was probably the heaviest, weighing 80 kilograms (180 lb) or more. Both were found on New Zealand, the former also in the Antarctic farther eastwards.\n[…]\nIt is not known whether the palaeeudyptines constitute a monophyletic lineage, or whether gigantism evolved independently in a restricted Palaeeudyptinae and the Anthropornithinae – whether they were considered valid, or whether there was a wide size range present in the Palaeeudyptinae as delimited (i.e., including Anthropornis nordenskjoeldi). The oldest well-described giant penguin, the 5-foot (1.5 m)-tall Icadyptes salasi, existed as far north as northern Peru about 36 mya.\n[…]\nGigantic penguins had disappeared by the end of the Paleogene, around 25 mya. Their decline and disappearance coincided with the spread of the Squalodontidae and other primitive, fish-eating toothed whales, which competed with them for food and were ultimately more successful. A new lineage, the Paraptenodytes, which includes smaller and stout-legged forms, had already arisen in southernmost South America by that time.\n[…]\nWilliams; Tony D. (1995). The Penguins – Spheniscidae. Oxford: Oxford University Press. ISBN 978-0-19-854667-2.\n[…]\nInformation about penguins at pinguins.info"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Great_auk",
        "situacao": "ok",
        "texto": "The great auk (Pinguinus impennis), also known as the penguin or garefowl, is an extinct species of flightless alcid that first appeared around 400,000 years ago and was driven to extinction by human exploitation in the mid-19th century. It was the only modern species in the genus Pinguinus. It was not closely related to the penguins of the Southern Hemisphere, which were named for their resemblan\n[…]\nThe oldest known fossil records of the modern great auk are from the Boxgrove Palaeolithic site of England and Lower Town Hill Formation of Bermuda, both of which are dated to the Middle Pleistocene at least 400,000 years BP. The Pliocene sister species, Pinguinus alfrednewtoni, and molecular evidence show that the three closely related genera diverged soon after their common ancestor, a bird probably similar to a stout Xantus's murrelet, had spread to the coasts of the Atlantic.\n[…]\nPinguinus alfrednewtoni was a larger, and also flightless, member of the genus Pinguinus that lived during the Early Pliocene. Known from bones found in the Yorktown Formation of the Lee Creek Mine in North Carolina, it is believed to have split, along with the great auk, from a common ancestor. Pinguinus alfrednewtoni lived in the Western Atlantic, while the great auk lived in the Eastern Atlantic. After the former died out following the Pliocene, the great auk took over its territory.\n[…]\nThe southernmost records in the eastern Atlantic are two isolated bones from North Africa: one from Madeira and another from the Neolithic site of El Harhoura 2 in Morocco.\n[…]\nBy the mid-16th century, the nesting colonies along the European side of the Atlantic were nearly all eliminated by humans killing this bird for its down, which was used to make pillows. In 1553, the great auk received its first official protection. In 1794, Great Britain banned the killing of this species for its feathers. In St."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinguim",
        "situacao": "ok",
        "texto": "O pinguim (pin-GWIN ) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros.\n[…]\nO substantivo \"pinguim\" entra na língua portuguesa por via do francês do séc. XVI, «pingouin», termo este que, então se reportava originalmente a outra ave, que habitava as regiões do Ártico e que foi extinta pela ação do homem, o arau-gigante (Pinguinus impennis).\n[…]\nPor seu turno, o étimo francês «pingouin» crê-se que possa ter provindo do étimo holandês «pinguin» e este, por sua vez, derivado do galês pen gwyn (\"cabeça branca\"), o qual era o antigo nome popular dos araus-gigantes nas ilhas Britânicas, embora a etimologia ainda seja controversa.\n[…]\nQuando os exploradores europeus descobriram no hemisfério Sul as aves conhecidas hoje como pinguins, repararam que estas tinham uma aparência muito similar à do arau-gigante, de maneira que as batizaram com esse nome (pinguim), que ainda persiste até à atualidade. Apesar de parecidos, os araus e os pinguins não têm nenhum parentesco próximo e nem pertencem à mesma ordem de aves.\n[…]\nOs táxons extintos possuíam grande diversidade, sendo que o Eoceno foi o período onde mais organismos desse grupo viveram simultaneamente no mesmo local, incluindo espécies gigantes e minúsculas.\n[…]\nAs penas modificadas dos grupos atuais são difíceis de inferir em fósseis, mas alguns achados auxiliam nesse processo, como um pinguim gigante datado do final do Eoceno e encontrado no Peru.\n[…]\nPinguim-azul-do-norte (Eudyptula albosignata)\n[…]\nPinguim Watch\n[…]\nPinguim gigante de 1,5 m, que habitava no litoral do Peru.\n[…]\nCientistas encontram vestígios de pinguins gigantes no Peru",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Tucano-toco",
      "descricao": "Maior espécie de tucano (Ramphastos toco), de corpo preto, papo branco e bico laranja com mancha preta na ponta, da América do Sul."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Estudos com câmeras térmicas mostraram que o bico enorme do tucano-toco serve, entre outras coisas, para ajudar a ave em quê?",
    "resposta": "A controlar a temperatura do corpo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Toco_toucan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Toco_toucan",
        "situacao": "ok",
        "texto": "The toco toucan (Ramphastos toco) is a species of bird in the toucan family Ramphastidae. It is the largest species of toucan and has a distinctive appearance, with a black body, a white throat, chest and uppertail-coverts, and red undertail-coverts. Its most conspicuous feature is its huge beak, which is yellow-orange with a black base and a large spot on the tip.\n[…]\nIt is called the tucanuçu in Portuguese, tucán grande or tucán toco in Spanish, and tucano-boi locally in Rio Grande do Sul, Brazil. In Tsimané, an indigenous language spoken in the Bolivian Amazon, it is known as yubibi.\n[…]\nIn 1974, the German ornithologist Jürgen Haffer hypothesized that the Ramphastos toucans could be split into two clades (groups of organisms descending from a common ancestor): the \"smooth-billed yelpers\", comprising the chestnut-mandibled and yellow-throated toucans, and the \"channel-keel-billed croakers\", comprising the toco, red-breasted, keel-billed, Choco, and channel-billed toucans.\n[…]\nHe further postulated that the toco toucan was basal (closest to the root of the phylogenetic tree) within the group of channel-keel-billed croakers. Later studies of mitochondrial DNA have largely confirmed the existence of these two clades, but have found the toco toucan to be basal within the family instead of being a part of the channel-keel-billed croakers. The following cladogram shows phylogenetic relationships within Ramphastos, based on a 2009 study by José Patané and colleagues:\n[…]\nThe practice of toco toucans of placing their bills under their wings may serve to insulate the bill and reduce heat loss during sleep. It has been observed that \"complexities of the vasculature and controlling mechanisms needed to adjust the blood flow to the bill may not be completely developed until adulthood.\"\n[…]\nBirdLife species factsheet for Ramphastos nivosus\n[…]\n\"Ramphastos nivosus\". Avibase."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tucanu%C3%A7u",
        "situacao": "ok",
        "texto": "Ramphastos toco, popularmente conhecido como tucanuçu, tucanaçu, tucano-grande, tucano-boi e tucano-toco é uma espécie de tucano e o maior representante da família Ramphastidae.\n[…]\nEstudos realizados comprovaram que o seu bico também serve com um dispersor natural de calor, devido ao número de vasos sanguíneos nele presentes em contato com o ambiente. Filhotes apresentam bico curto e amarelo, sem a mancha negra. A pele ao redor dos olhos é esbranquiçada e a garganta é amarela. Vivem em média 40 anos.[carece de fontes]?\n[…]\nFósseis de Ramphastos toco do Pleistoceno (20 000 anos atrás) foram encontrados em Lagoa Santa, em Minas Gerais, no Brasil. Essa ave é vista com frequência nas matas, nos cerrados e até mesmo em áreas urbanas, onde procuram comida.[carece de fontes]?\n[…]\nSua reprodução ocorre no final da primavera e a fêmea bota de 4 a 6 ovos em ninhos localizados no alto dos troncos das árvores. O casal se reveza na tarefa de chocar os ovos, os quais eclodem entre 16 e 20 dias. Quando nascem, sua aparência é desproporcional; seu bico é grande e o corpo, pequeno; os olhos só abrem após três semanas e os pais cuidam de seus filhotes até eles saírem dos ninhos, o que ocorre em seis semanas. A coloração do bico só é definida meses após o nascimento.\n[…]\nRamphastos toco toco (Statius Muller, 1776) - ocorre nas Guianas; norte e nordeste do Brasil.\n[…]\nRamphastos toco albogularis (Cabanis,1862) - leste, sudeste e sul do Brasil, bem como Paraguai, Bolívia e norte da Argentina. Bico menor e garganta com menos amarelo que a forma nominal. Também não possui penas vermelhas na borda inferior. Além disso, a cinta vermelha, no peito, é mais fina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Iguana-marinha",
      "descricao": "Lagarto de Galápagos (Amblyrhynchus cristatus) que mergulha no mar para comer algas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A iguana-marinha de Galápagos, que se alimenta de algas no mar, vive espirrando. Para que ela faz isso?",
    "resposta": "Para expelir o excesso de sal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Marine_iguana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Marine_iguana",
        "situacao": "ok",
        "texto": "The marine iguana (Amblyrhynchus cristatus), also known as the sea iguana, saltwater iguana, or Galápagos marine iguana, is a species of iguana found only on the Galápagos Islands (Ecuador). Unique among modern lizards, it is a marine reptile that has the ability to forage in the sea for algae, which make up almost all of its diet. Marine iguanas are the only extant lizard that spends time in a ma\n[…]\nThe marine iguana was first described in 1825 as Amblyrhynchus cristatus by Thomas Bell. He recognized several of its distinctive features, but believed that the specimen he had received was from Mexico, a locality now known to be erroneous.\n[…]\nAlthough there are no apparent benefits to either species, marine iguanas commonly live close together with the much larger Galápagos sea lions. The two species generally ignore each other and an iguana may even crawl over the body of a sea lion.\n[…]\nMarine iguanas show higher stress-induced corticosterone concentrations during famine (El Niño) than feast conditions (La Niña). The levels differ between the islands, and show that survival varies throughout them during an El Niño event. The variable response of corticosterone is one indicator of the general public health of the populations of marine iguanas across the Galápagos Islands, which is a useful factor in the conservation of the species.\n[…]\nAlthough marine iguanas have been kept in captivity, the specialised diet represents a challenge. They have lived for more than a decade in captivity, but have never bred under such conditions. The development of a captive breeding program (as already exists for the Galápagos land iguana) possibly is a necessity if all the island subspecies are to survive.\n[…]\nPlanet Earth II – TV show on which Galapagos racers hunting marine iguana hatchlings became a viral trend.\n[…]\nPlanet Earth II  Video of marine iguana hatchlings being chased by Galápagos racers [1]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Iguana-marinha",
        "situacao": "ok",
        "texto": "A iguana-marinha (Amblyrhynchus cristatus) é o único lagarto do mundo com hábitos marinhos e é uma das muitas extraordinárias espécies que se podem encontrar no arquipélago das Galápagos. Vive em zonas rochosas da beira-mar e alimenta-se de algas que apanha quer na zona de rebentação quer mergulhando junto à costa. Pode passar até uma hora debaixo de água.\n[…]\nAlimentam-se quase exclusivamente de algas marinhas, expulsando o excesso de sal das glândulas nasais, enquanto aproveitam o sol, e o revestimento de sal pode fazer os seus rostos aparecerem branco logo após a saída destes do mar. Nos machos adultos, coloração varia com a estação.\n[…]\nOs indivíduos maiores, no entanto, não perdem tanto calor e isto faz eles serem ativos debaixo da água por mais tempo. Eles caçam algas na água rasa cerca de dois a cinco metros de profundidade, mas podem mergulhar até 25 metros onde há uma abundância de algas, e sem a concorrência de outras iguanas. Enquanto se alimentam debaixo da água, eles também consomem uma grande quantidade de sal que, em excesso, podem ser tóxico.\n[…]\nIguanas-marinhas são herbívoros. Alimentam-se quase exclusivamente de algas marinhas. Nove espécies de algas foram identificadas como fontes de alimento, das seguintes espécies:\n[…]\nAmblyrhynchus c. cristatus, essa é a própria iguana-marinha de Galápagos;\n[…]\nO Iguana-marinha está classificada como Vulnerável (VU) na Lista Vermelha da IUCN e listada no apêndice II da CITES. Subespécies como Amblyrhynchus cristatus mertensi e A. c. nanus são classificadas como Criticamente Ameaçadas (CR)  e A. c. albemarlensis, A. c. cristatus, A. c. hassi, A. c. sielmanni e A. c. venustissimus assim como a iguana-marinha de Galápagos são classificadas como Vulnerável (VU) na Lista Vermelha da IUCN.\n[…]\nRothman, Robert, Marine Iguana Galapagos Pages. Rochester Institute of Technology. Retrieved 19 April 2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Sapo-cururu",
      "descricao": "Grande sapo nativo das Américas (Rhinella marina), com glândulas de veneno atrás dos olhos, invasor na Austrália."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1935, o sapo-cururu, nativo das Américas, foi levado para a Austrália, onde virou praga. Com que objetivo ele foi levado?",
    "resposta": "Controlar besouros da cana",
    "distratores": [
      "Controlar ratos nas lavouras",
      "Combater cobras venenosas",
      "Comer mosquitos transmissores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cane_toads_in_Australia",
      "https://en.wikipedia.org/wiki/Cane_toad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cane_toads_in_Australia",
        "situacao": "ok",
        "texto": "The cane toad in Australia is regarded as an exemplary case of an invasive species. Australia's relative isolation prior to European colonisation and the Industrial Revolution, both of which dramatically increased traffic and import of novel species, allowed development of a complex, interdepending system of ecology, but one which provided no natural predators for many of the species subsequently \n[…]\nNative to South and mainland Middle America, imported cane toads had been used in Puerto Rico to control sugar cane pests since 1920, and an influential 1932 research paper by Raquel Dexter showed that they largely ate beetle larvae that in turn ate sugar cane.\n[…]\nBased on her findings, they were introduced to Hawaii by Cyril Pemberton in the early 1930s, and then introduced to Australia from Hawaii in June 1935 by the Bureau of Sugar Experiment Stations, now Sugar Research Australia, in an attempt to control the native grey-backed cane beetle (Dermolepida albohirtum) and French's beetle (Lepidiota frenchi). Those beetles are native to Australia and they are detrimental to sugarcane crops, which are a major source of income for Australia.\n[…]\nThe success of using the moth Cactoblastis cactorum in controlling prickly pears in Australia led to the hope that the cane toad would perform a similar function.\n[…]\nThe RSPCA has guidelines for the humane culling of cane toads. Inhumane ways are illegal in most states and territories. Due to concerns over potential harm to other Australian wildlife species, the use of Dettol as pest control was banned in Western Australia by the Department of Environment and Conservation in 2011.\n[…]\nA controversial commercial for Tooheys beer company showed people from New South Wales standing at the New South Wales-Queensland border with golf clubs and lights, attracting cane toads just so they could hit them back across the border with the golf clubs."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cane_toad",
        "situacao": "ok",
        "texto": "The cane toad (Rhinella marina), also known as the giant neotropical toad or marine toad, is a large, terrestrial true toad native to South and mainland Central America, but which has been introduced to various islands throughout Oceania and the Caribbean, as well as Northern Australia. It is a member of the genus Rhinella, which includes many true toad species found throughout Central and South A\n[…]\nThough controversial (with many traditional herpetologists still using Bufo marinus) the binomial Rhinella marina is gaining in acceptance with such bodies as the IUCN, Encyclopaedia of Life, Amphibian Species of the World and increasing numbers of scientific publications adopting its usage.\n[…]\nIn 2010, one was found on the far western coast in Broome, Western Australia.\n[…]\nNevertheless, the cane toad was assumed to have controlled the white grub; this view was reinforced by a Nature article titled \"Toads save sugar crop\", and this led to large-scale introductions throughout many parts of the Pacific.\n[…]\nThe cane toad was introduced into New Guinea to control the hawk moth larvae eating sweet potato crops. The first release occurred in 1937 using toads imported from Hawaiʻi, with a second release the same year using specimens from the Australian mainland. Evidence suggests a third release in 1938, consisting of toads being used for human pregnancy tests—many species of toad were found to be effective for this task, and were employed for about 20 years after the discovery was announced in 1948.\n[…]\nOther than the use as a biological control for pests, the cane toad has been employed in a number of commercial and noncommercial applications. Traditionally, within the toad's natural range in South America, the Embera-Wounaan would \"milk\" the toads for their toxin, which was then employed as an arrow poison. The toxins may have been used as an entheogen by the Olmec people."
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Rãs-dardo-venenosas",
      "descricao": "Pequenas rãs de cores vivas da família Dendrobatidae, das florestas tropicais da América Central e do Sul, com pele tóxica."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Rãs-dardo criadas em cativeiro costumam perder o veneno que teriam na natureza. O que explica essa perda?",
    "resposta": "A dieta sem as presas tóxicas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Poison_dart_frog"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Poison_dart_frog",
        "situacao": "ok",
        "texto": "The poison dart frog (also known as the dart-poison frog, the poison frog or formerly known as the poison arrow frog) is the common name of a group of frogs in the family Dendrobatidae which are native to tropical Central and South America. These species are diurnal and often have brightly colored bodies. This bright coloration is correlated with the toxicity of the species, making them aposematic\n[…]\nPoison dart frogs are an example of an aposematic organism. Their bright coloration advertises unpalatability to potential predators. Aposematism is currently thought to have originated at least four times within the poison dart family according to phylogenetic trees, and dendrobatid frogs have since undergone dramatic divergences – both interspecific and intraspecific – in their aposematic coloration. This is surprising given the frequency-dependent nature of this type of defense mechanism.\n[…]\nDart frogs are the focus of major phylogenetic studies, and undergo taxonomic changes frequently. The family Dendrobatidae currently contains 16 genera, with about 200 species.\n[…]\nSome poison dart frogs species include a number of conspecific color morphs that emerged as recently as 6,000 years ago. Therefore, species such as Dendrobates tinctorius, Oophaga pumilio, and Oophaga granulifera can include color pattern morphs that can be interbred (colors are under polygenic control, while the actual patterns are probably controlled by a single locus).\n[…]\nPoison dart frogs suffer from parasites ranging from helminths to protozoans.\n[…]\nPoison dart frogs suffer from chytridiomycosis, which is a deadly disease that is caused by the fungus Batrachochytrium dendrobatidis (Bd). This infection has been found in frogs from Colostethus and Dendrobates.\n[…]\nMantella – Malagasy poison frogs\n[…]\nDendrobates.org – ecology, evolution and conservation of poison frogs\n[…]\n\"Poison dart frog\". The Encyclopedia of Life."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dendrobatidae",
        "situacao": "ok",
        "texto": "Dendrobatidae é uma família de anfíbios pertencentes à ordem anura, subordem Neobatrachia.\n[…]\nOs membros deste grupo têm a particularidade de produzirem toxinas potentes que se encontram na sua pele. A espécie com a toxina mais venenosa é a Phyllobates terribilis, que se iguala com o veneno da vespa do mar.\n[…]\nMais de 100 toxinas foram já identificadas nas secreções cutâneas de membros deste grupo, especialmente no género Dendrobates e Phyllobates. Os membros deste último género produzem uma neurotoxina potente denominada batracotoxina. Apenas 40 microgramas desta substância podem ser fatais.\n[…]\nAlgumas tribos indígenas da América do Sul utilizam estas toxinas, colocando na ponta das setas utilizadas em caçadas, daí o nome em inglês poison dart frogs.\n[…]\nAlgumas das espécies adquirem a capacidade de produção de toxinas em parte devido a factores alimentares, nomeadamente devido à ingestão de formigas. Estas formigas, por sua vez, alimentam-se de espécies de plantas com propriedade tóxicas.\n[…]\nEncontram-se originalmente nas América Central e América do Sul, e uma espécie, (Dendrobates auratus) foi introduzida na ilha de Oahu, no Havaí para controlar a população de pernilongos.\n[…]\nEsta família é alvo constante de estudos filogenéticos e sofre mudanças taxonómicas de maneira frequente. A família Dendrobatidae foi revista taxonomicamente em 2006 e contém 12 géneros, com cerca de 170 espécies.\n[…]\nSubfamília Dendrobatinae Cope, 1865\n[…]\nGénero Dendrobates Wagler, 1830",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Cascavel",
      "descricao": "Serpente peçonhenta das Américas, do gênero Crotalus, com um chocalho na ponta da cauda."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Contar os anéis do chocalho não revela a idade da cascavel, porque um novo anel surge a cada vez que acontece o quê?",
    "resposta": "A troca de pele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rattlesnake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rattlesnake",
        "situacao": "ok",
        "texto": "Rattlesnakes are venomous snakes that form the genera Crotalus and Sistrurus of the subfamily Crotalinae (the pit vipers). Rattlesnakes are predators that live in a wide array of habitats, hunting small animals such as birds and rodents.\n[…]\nThe 36 known species of rattlesnakes have between 65 and 70 subspecies, all native to the Americas, ranging from central Argentina to southern Canada. The largest rattlesnake, the eastern diamondback, can measure up to 2.4 m (7.9 ft) in length.\n[…]\nRattlesnakes are the leading cause of snakebite injuries in North America and a significant cause in Central and South America.\n[…]\nAntivenom, or antivenin, is commonly used to treat the effects of local and systemic pit viper envenomations. The first step in the production of crotaline antivenom is collecting (\"milking\") the venom of a live rattlesnake—usually from the western diamondback (Crotalus atrox), eastern diamondback (Crotalus adamanteus), South American rattlesnake (Crotalus durissis terrificus), or fer-de-lance (Bothrops atrox).\n[…]\nDogs are most commonly bitten on the front legs and head. Horses generally receive bites on the muzzle, and cattle on their tongues and muzzles. If a domesticated animal is bitten, the hair around the bite should be removed so the wound can be clearly seen. The crotaline Fab antivenom has been shown to be effective in the treatment of canine rattlesnake bites. Symptoms include swelling, slight bleeding, sensitivity, shaking, and anxiety.\n[…]\nAztec paintings, Central American temples, and the great burial mounds in the Southern United States are frequently adorned with depictions of rattlesnakes, often within the symbols and emblems of the most powerful deities.\n[…]\nList of crotaline species and subspecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cascavel",
        "situacao": "ok",
        "texto": "Cascavel ou cobra cascavel é o nome genérico dado às cobras peçonhentas dos géneros Crotalus e Sistrurus. Também chamada de boicininga, do tupi mboi, cobra, e sining, retinir (como um chocalho).\n[…]\nAs cascavéis possuem um chocalho característico na cauda, e estão presentes em todo o continente americano. O nome geralmente refere-se mais especificamente à espécie Crotalus durissus, cuja área de distribuição se estende do México à Argentina.\n[…]\nAs cascavéis, por razões ainda não bem entendidas, em vez de trocarem completamente sua pele antiga, mantém parte dela enrolada na cauda em forma de um anel cinzento grosseiro. Com o passar dos anos estes pedaços de epiderme ressecados formam os guizos que, quando o animal vibra a cauda, balançam e causam o ruído característico da espécie.\n[…]\nHá uma crença popular de que o número de anéis do guizo corresponde à idade desta cobra, mas isto não é correto, pois no máximo poderia indicar o número de trocas de pele. A finalidade do som produzido pelo guizo é de advertir a sua presença e espantar os animais de grande porte que lhe poderiam fazer mal. É uma ótima possibilidade de evitar o confronto.\n[…]\nAs cascavéis alimentam-se principalmente de pequenos roedores, mas podem fazer uso de seu veneno para fazerem outras vítimas, como pequenas aves, coelhos, lagartos, e, eventualmente, outras serpentes. Apesar de serem vistas durante o dia, predominam os hábitos crepuscular e noturno.\n[…]\nSeu corpo possui entre 1,5 a 2 metros de comprimento e a fêmea, na fase adulta, gera entre 18 a 30 filhotes em cada gestação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Jararaca",
      "descricao": "Serpente peçonhenta (Bothrops jararaca) do Sudeste e Sul do Brasil e de países vizinhos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Pesquisas com o veneno da jararaca levaram ao desenvolvimento do captopril, remédio usado contra que problema de saúde?",
    "resposta": "Pressão alta",
    "fonte": [
      "https://en.wikipedia.org/wiki/Captopril",
      "https://en.wikipedia.org/wiki/Bothrops_jararaca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Captopril",
        "situacao": "ok",
        "texto": "Captopril, sold under the brand name Capoten among others, is an angiotensin-converting enzyme (ACE) inhibitor used for the treatment of hypertension and some types of congestive heart failure. Captopril was the first oral ACE inhibitor found for the treatment of hypertension. It does not cause fatigue as associated with beta-blockers.\n[…]\nIn the late 1960s, John Vane of the Royal College of Surgeons of England was working on mechanisms by which the body regulates blood pressure. He was joined by Sérgio Henrique Ferreira of Brazil, who had been studying the venom of a Brazilian pit viper, the jararaca (Bothrops jararaca), and brought a sample of the viper's venom.\n[…]\nIn 1970, using bradykinin potentiating factor (BPF) provided by Sergio Ferreira, Ng and Vane found the conversion of angiotensin I to angiotensin II was inhibited during its passage through the pulmonary circulation. BPF was later found to be a peptide in the venom of a lancehead viper (Bothrops jararaca), which was a “collected-product inhibitor” of  the converting enzyme.\n[…]\nUnlike the majority of ACE inhibitors, captopril is not administered as a prodrug (the only other being lisinopril). About 70% of orally administered captopril is absorbed. Bioavailability is reduced by presence of food in stomach. It is partly metabolised and partly excreted unchanged in urine. Captopril also has a relatively poor pharmacokinetic profile. The short half-life necessitates dosing two or three times per day, which may reduce patient compliance.\n[…]\nCaptopril has a short half-life of 2–3 hours and a duration of action of 12–24 hours.\n[…]\nCaptopril challenge test\n[…]\nCaptopril suppression test\n[…]\n\"Captopril\". Drug Information Portal. U.S. National Library of Medicine. Archived from the original on August 5, 2016.\n[…]\nThe story of the discovery of Captopril drugdesign.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bothrops_jararaca",
        "situacao": "ok",
        "texto": "Bothrops jararaca—known as the jararaca or yarara—is a highly venomous pit viper species endemic to South America in southern Brazil, Paraguay, and northern Argentina. The specific name, jararaca, is derived from Old Tupi îararaka. Within its geographic range, it is often abundant and is an important cause of snakebite. No subspecies are currently recognized.\n[…]\nThe English common name is jararaca. In Argentina, it is called yarará and yararaca perezosa. In Brazil, it is referred to as caissaca, jaraca, jaracá, jararaca, jararaca-do-rabo-branco, jararaca-do-campo, jararaca-do-cerrado, jararaca-dormideira, jararaca-dominhoca and malha-de-sapo. In Paraguay and Uruguay, it is also called yarará.\n[…]\nThrombotic microangiopathy has also been reported. A 56-year-old woman was transferred from a primary hospital seven hours after being bitten by a B. jararaca in the distal left leg. She developed extending edema to the proximal thigh, associated with intense, radiating local pain, local paresthesia, and ecchymosis. Laboratory features upon admission revealed coagulopathy, thrombocytopenia, and a slight increase in serum creatinine.\n[…]\nThe patient was treated with bothropic antivenom and fluid replacement. During evolution, her thrombocytopenia and anemia worsened, with blood films showing fragmented red cells, haptoglobin consumption, an increase in lactate dehydrogenase, and a progressive increase in serum creatinine. Despite the severity, the outcome following conservative treatment was good, with complete recovery.\n[…]\nBothropoides jararaca at the Reptarium.cz Reptile Database. Accessed 6 December 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Captopril",
        "situacao": "ok",
        "texto": "Captopril é um fármaco do tipo iECA, inibidor da enzima conversora da angiotensina I (ECA I). Sua principal indicação é para tratamento de hipertensão arterial e alguns casos de insuficiência cardíaca.\n[…]\nSérgio Henrique Ferreira, que, juntamente com seus colaboradores, isolou, na década de 1960, do veneno da Bothrops jararaca, um princípio ativo capaz de intensificar a resposta à bradicinina e que foi denominado FPB (fator potenciador da bradicinina).\n[…]\nA partir do veneno da jararaca, Sérgio Ferreira chegou a uma substância capaz de inibir os agentes naturais do organismo que elevam a pressão arterial, chamados angiotensina 1 e 2, ao mesmo tempo em que prolongam o efeito de uma molécula que mantém a pressão baixa, a bradicinina.\n[…]\nO captopril é um inibidor da ECA - enzima conversora da angiotensina, que impede a angiotensina I de ser convertida em angiotensina II. Com a ausência da angiotensina II não há vasoconstricção periférica, diminuindo a resistência vascular periférica e promovendo uma diminuição da pressão arterial.\n[…]\nEstudos afirmam que o captopril pode perder até 80% da sua eficácia e biodisponibilidade se administrados concomitantemente com outros medicamentos ou alimentos. Ao contrário de alguns fármacos que têm a sua absorção diminuída mas não comprometida pela administração conjunta com outras substâncias, o captopril deve ser ingerido sem nenhuma associação para evitar perda da sua eficácia ou aumento de seus efeitos adversos. Recomenda-se um intervalo 1 a 2 horas para se administrar o captopril.\n[…]\nCom isso, os níveis de bradicinina aumentam e provocam o sintoma da tosse mediada por captopril.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Tartaruga-de-couro",
      "descricao": "Maior tartaruga marinha viva (Dermochelys coriacea), de casco coberto por pele coriácea em vez de placas duras."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Sacolas plásticas boiando no mar são uma ameaça para a tartaruga-de-couro, porque ela as confunde com seu alimento preferido. Qual?",
    "resposta": "Águas-vivas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Leatherback_sea_turtle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Leatherback_sea_turtle",
        "situacao": "ok",
        "texto": "The leatherback sea turtle (Dermochelys coriacea), sometimes called the lute turtle, leathery turtle or simply the luth, is a large species of sea turtle. The largest of all living turtles and the heaviest non-crocodilian reptile, it reaches lengths of up to 2.7 metres (8 ft 10 in) and weights of 500 kilograms (1,100 lb). It is the only living species in the genus Dermochelys and family Dermochely\n[…]\nBoth the turtle's common and scientific names come from the leathery texture and appearance of its carapace (Dermochelys coriacea literally translates to \"Leathery Skin-turtle\"). Older names include \"leathery turtle\" and \"trunk turtle\".\n[…]\nMany human activities indirectly harm Dermochelys populations. As a pelagic species, D. coriacea is occasionally caught as bycatch. Entanglement in lobster pot ropes is another hazard the animals face. As the largest living sea turtles, turtle excluder devices can be ineffective with mature adults. In the eastern Pacific alone, a reported average of 1,500 mature females were accidentally caught annually in the 1990s. Pollution, both chemical and physical, can also be fatal.\n[…]\nMany turtles die from malabsorption and intestinal blockage following the ingestion of balloons and plastic bags which resemble their jellyfish prey. Chemical pollution also has an adverse effect on Dermochelys. A high level of phthalates has been measured in their eggs' yolks. Leatherback sea turtles ranging from 1885 to 2007 were autopsied for the existence of plastic in the gastrointestinal tract. It was discovered that 34% of the cases had plastic blockage.\n[…]\nAustralia's Environment Protection and Biodiversity Conservation Act 1999 lists D. coriacea as vulnerable, while Queensland's Nature Conservation Act 1992 lists it as endangered. This nearly extinct species now faces threats due to plastic pollution and many modern day factors."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tartaruga-de-couro",
        "situacao": "ok",
        "texto": "A tartaruga-de-couro (nome científico: Dermochelys coriacea), tartaruga-gigante, tartaruga-de-cerro, tartaruga-de-quilha, tartaruga-de-leste, tartaruga-preta, tartaruga-sete-quilhas, careba-mole ou careba-gigante, é a maior das espécies de tartarugas e é muito diferente das outras tanto em aparência quanto em fisiologia. É a única espécie extante do gênero Dermochelys e da família dos dermoquelíde\n[…]\nAs estimativas do World Wide Fund for Nature (WWF) sugerem que apenas 2 300 fêmeas adultas da tartaruga-de-couro do Pacífico ainda existam, tornando-a a subpopulação de tartarugas marinhas mais ameaçada.\n[…]\nAs tartarugas-de-couro são encontradas principalmente em mar aberto. Alguns cientistas rastrearam um espécime que nadou da praia de Jen Womom na regência de Tambrau de Papua Ocidental, na Indonésia, para os Estados Unidos em jornada de forrageamento de 647 dias. As tartarugas-de-couro perseguem águas-vivas ao longo do dia, resultando em uma preferência por águas mais profundas de dia e águas mais rasas à noite (quando as águas-vivas sobem a coluna de água).\n[…]\nAs tartarugas adultas de subsistem quase inteiramente de medusas, ajudando a controlar suas populações. Também se alimentam de outros organismos de corpo mole, como tunicados e cefalópodes. As tartarugas-de-couro do Pacífico migram cerca de seis milhas (9 700 quilômetros) em todo o Pacífico de seus locais de nidificação na Indonésia para comer águas-vivas na Califórnia.\n[…]\nUma das causas de seu estado ameaçado são as sacolas plásticas flutuando no oceano, que são confundidas com águas-vivas; estima-se que um terço dos adultos tenha ingerido plástico. O plástico entra nos oceanos ao longo da costa oeste das áreas urbanas, onde as tartarugas-de-couro se alimentam, com os californianos usando mais de 19 bilhões de sacolas plásticas todos os anos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Lagartixa",
      "descricao": "Pequeno lagarto da família dos gecos, capaz de andar em paredes e tetos."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As lagartixas andam no teto graças a milhões de pelos microscópicos nos dedos, que aderem à parede por meio de quê?",
    "resposta": "Forças de van der Waals",
    "distratores": [
      "Ventosas de sucção",
      "Cola natural",
      "Magnetismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gecko_feet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gecko_feet",
        "situacao": "ok",
        "texto": "The feet of geckos have a number of specializations. Their surfaces can adhere to almost any type of material. This phenomenon can be explained with three elements:\n[…]\nThe interactions between the gecko's feet and the climbing surface are stronger than simple surface area effects. On its feet, the gecko has many microscopic hairs, or setae (singular seta), arranged into lamellae that increase the Van der Waals forces - the distance-dependent attraction between atoms or molecules - between its feet and the surface.\n[…]\nThe bottom surface of a gecko's foot will consist of millions of hairy structures called setae. These setae are 5 μm long and are thinner than a human hair. There are thousands of tiny structures called spatula on every seta. Geckos create Van der Waals force by making contact  with the surface of materials using their spatulas. More spatulas implies more surface area.\n[…]\nThe spatulas have sharp edges, which on application of stress in a specific angle, bends and creates more contact with the surface in order to climb on them vertically. Thus, more contact with the surface creates more Van der Waals force to support the whole body of the creature. One seta can produce an average force of 194 µN. If a gecko could simultaneously utilize all of its 6.5 million setae, it would be able to hold up a 130 kg (290 lb) linebacker.\n[…]\nThe following equation can be used to quantitatively characterize the Van der Waals forces, by approximating the interaction as being between two flat surfaces:\n[…]\nThe Van der Waals force per spatula, Fs can then be calculated by differentiating with respect to D and we obtain:"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pavão",
      "descricao": "Pavão-azul, ave originária do subcontinente indiano, cujo macho tem longa cauda com ocelos."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Para Charles Darwin, a cauda exuberante do pavão evoluiu principalmente por causa de um comportamento das fêmeas. Qual?",
    "resposta": "Preferem machos de cauda vistosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sexual_selection",
      "https://en.wikipedia.org/wiki/Indian_peafowl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sexual_selection",
        "situacao": "ok",
        "texto": "Sexual selection is a mechanism of evolution in which members of one sex choose mates of the other sex (intersexual selection) to mate with, and compete with members of the same sex for access to members of the opposite sex (intrasexual selection). These two forms of selection mean that some individuals have greater reproductive success than others within a population, for example because they are\n[…]\nThis is caused by a positive feedback mechanism known as a Fisherian runaway, where the passing-on of the desire for a trait in one sex is as important as having the trait in the other sex in producing the runaway effect. Although the sexy son hypothesis indicates that females would prefer male offspring, Fisher's principle explains why the sex ratio is most often 1:1.\n[…]\nThe main postulate of Darwin's theory of sexual selection, namely the exercise of sexual preference, will thus tend to be satisfied by the effects of previous selection. We may infer that the rudiments of an aesthetic faculty so developed thus pervade entire classes...\n[…]\nThese include the sexy son hypothesis, which might suggest a preference for male offspring, and Fisher's principle, which explains why the sex ratio is usually close to 1:1. The Fisherian runaway describes how sexual selection accelerates the preference for a specific ornament, causing the preferred trait and female preference for it to increase together in a positive feedback runaway cycle. He remarked that:\n[…]\nThe reproductive success of an organism is measured by the number of offspring left behind, and by their quality or probable fitness. Sexual preference creates a tendency towards assortative mating or homogamy.\n[…]\nMany bird species make use of mating calls, the females preferring males with songs that are complex and varied in amplitude, structure, and frequency. Larger males have deeper songs and increased mating success."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Indian_peafowl",
        "situacao": "ok",
        "texto": "The Indian peafowl (Pavo cristatus), also known as the common peafowl, or blue peafowl, is a species of peafowl native to the Indian subcontinent. While it originated in the Indian subcontinent, it has since been introduced to many other parts of the world. Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens, although both sexes are often referred to colloquiall\n[…]\nThe Indian peacock is known for its brighter and elaborate colours, compared to the much duller peahen, which has been a puzzle to scientists. Charles Darwin failed to see an adaptive advantage for the extravagant tail which seemed only to be an encumbrance. He wrote to botanist Asa Gray, \"the sight of a feather in a peacock's tail, whenever I gaze at it, makes me sick!\". He developed the principle of sexual selection to explain the problem, however, though not everyone accepted the theory.\n[…]\nRonald Fisher's runaway model proposed a positive feedback between female preference for elaborate trains and development of the elaborate train itself. However, this model assumes that the male train is a relatively recent evolutionary adaptation and a molecular phylogeny study shows the opposite that the most recently evolved species is actually the least ornamented one.\n[…]\nA seven-year study of free-ranging peafowl came to the conclusion that female peafowl do not select mates solely on the basis of their trains and it is an obsolete signal for which female preference has already been \"lost or weakened\". It found no evidence that peahens expressed any preference for peacocks with more elaborate trains, trains having more ocelli, a more symmetrical arrangement, or greater length.\n[…]\nShrivastava AB, Nair NR, Awadhiya RP, Katiyar AK (1992). \"Traumatic ventriculitis in Peacock (Pavo cristatus)\". Indian Vet. J. 69 (8): 755."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_sexual",
        "situacao": "ok",
        "texto": "Charles Darwin definiu a seleção sexual como a \"luta entre indivíduos de um sexo, geralmente os machos, pela posse do outro sexo\". Em 1858, a teoria da evolução por seleção natural foi publicada pelos manuscritos de Darwin e Wallace. Darwin separava os aspectos \"sobrevivência\" e \"reprodução\" no processo de seleção natural. Chamou de \"Seleção Sexual\" o processo de escolha de características morfoló\n[…]\nÉ importante perceber que, na seleção intrassexual, os adornos dos machos conferem vantagem reprodutiva mesmo sem a intervenção da preferência das fêmeas e de seleção intersexual. Essa vantagem é conferida por armas utilizadas no processo de resolução de disputas, como aquelas pela posse de território. O uso dos ornamentos sexuais ocorre principalmente em disputas ritualizadas, em que, ao contrário do que se esperaria, não há confronto direto com a possibilidade de ferimentos fatais.\n[…]\nOs machos de pavão, com suas penas da cauda coloridas e elaboradas, ausentes nas fêmeas, são talvez o exemplo conhecido de dimorfismo sexual mais extremo.\n[…]\nÉ importante perceber que enquanto um pavão macho apresenta sua plumagem exagerada, a fêmea tem uma preferência ainda mais exagerada por essa característica.\n[…]\nA fêmea do pavão desejará copular com o macho mais atraente. Assim, os machos de sua prole serão atraentes para as fêmeas da próxima geração. Além disso, os machos tentarão copular com aquelas fêmeas que os achem atrativos, assim as fêmeas de sua prole manterão a preferência pelo seu padrão de ornamentação na geração seguinte.\n[…]\nDado que a taxa de mudança na preferência é definida pela maior nível de preferência médio entre as fêmeas, e que os machos desejam ser melhores do que os outros machos, haverá um efeito aditivo no processo cíclico que vai levar a crescimentos exponenciais em ambos os sexos, desde que não seja bloqueado por outra limitação.\n[…]\nAcasalamento preferencial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Salamandra-de-fogo",
      "descricao": "Anfíbio (Salamandra salamandra) preto com manchas ou listras amarelas, comum na Europa."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na Idade Média, acreditava-se que a salamandra nascia do fogo. Que hábito do animal provavelmente deu origem a essa crença?",
    "resposta": "Esconder-se em troncos de lenha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Salamander"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Salamander",
        "situacao": "ok",
        "texto": "Salamanders are a group of amphibians typically characterized by their lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larvae and adults. All ten extant salamander families are grouped together under the order Urodela, the sole surviving order from the group Caudata. Urodela is a scientific Latin term\n[…]\nAlthough many salamanders have cryptic colors so as to be unnoticeable, others signal their toxicity by their vivid coloring. Yellow, orange, and red are the colors generally used, often with black for greater contrast. Sometimes, the animal postures if attacked, revealing a flash of warning hue on its underside. The red eft, the brightly colored terrestrial juvenile form of the eastern newt (Notophthalmus viridescens), is highly poisonous.\n[…]\nResearch is being done on the environmental cues that have to be replicated before captive animals can be persuaded to breed. Common species such as the tiger salamander and the mudpuppy are being given hormones to stimulate the production of sperm and eggs, and the role of arginine vasotocin in courtship behaviour is being investigated. Another line of research is artificial insemination, either in vitro or by inserting spermatophores into the cloacae of females.\n[…]\nThe association of the salamander with fire is first attested by Aristotle (History of Animals 5, 17), and Pliny the Elder wrote in his Natural History  (10, 86) that \"A salamander is so cold that it puts out fire on contact.\n[…]\nSome Persians believed the fiber was the fur of an animal called the samandar (Persian: سمندر), which lived in fire and died when exposed to water; this may be where the belief originated that the salamander could tolerate fire. Charlemagne, the first Holy Roman Emperor (800–814), is also said to have possessed such a tablecloth.\n[…]\nSalamander Gallery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Urodelos",
        "situacao": "ok",
        "texto": "Os urodelos constituem uma ordem de anfíbios caudados, que compreende as salamandras e os tritões, com cerca de 515 espécies. Tais animais têm o corpo alongado, patas curtas e uma cauda relativamente longa. Superficialmente assemelham-se a lagartos, dos quais podem ser distinguidos pela ausência de escamas. Os caudados têm a capacidade de regenerar os membros e a cauda se estes forem decepados.\n[…]\nAcredita-se que as salamandras estão entre os moradores mais antigos do planeta, pois cientistas já encontraram fósseis de 230 milhões de anos no Quirguistão. Atualmente existem cerca de 450 espécies, dos mais diferentes tamanhos. Caçadoras exímias, elas atacam rapidamente e devoram minhocas, insetos e peixes. Mas também são predadas por aves, tartarugas, cobras, peixes e outros anfíbios. Por isso, costumam ficar escondidas embaixo de pedras ou plantas.\n[…]\nUma salamandra adulta geralmente assemelha-se a um pequeno lagarto, possuindo uma forma corporal basal de tetrápode com um tronco cilíndrico, quatro membros e uma cauda longa. Exceto na família Salamandridae, a cabeça, o corpo e a cauda apresentam uma série de depressions verticais na superfície que vão da região midodorsal à área ventral, conhecidas como sulcos costais. A sua função parece ser a de ajudar a manter a pele úmida, canalizando a água pela superfície do corpo.\n[…]\nAlgumas espécies aquáticas, como as sirenes e as anfiumas, têm membros posteriores reduzidos ou ausentes, conferindo-lhes uma aparência de enguia, mas, na maioria das espécies, os membros anteriores e posteriores têm aproximadamente o mesmo comprimento e projetam-se lateralmente, mal elevando o tronco do chão. Os pés são largos com dígitos curtos, geralmente quatro nos pés dianteiros e cinco nos traseiros. As salamandras não têm garras, e o formato do pé varia de acordo com o habitat do animal.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Crocodilo",
      "descricao": "Grande réptil aquático da ordem dos crocodilianos, que inclui crocodilos, jacarés e gaviais."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os crocodilos lembram lagartos, mas seus parentes vivos mais próximos são de outro grupo de vertebrados. Qual?",
    "resposta": "As aves",
    "fonte": [
      "https://en.wikipedia.org/wiki/Crocodilia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Crocodilia",
        "situacao": "ok",
        "texto": "Crocodylia or Crocodilia () is an order of semiaquatic, predatory reptiles that are known as crocodilians. They appeared 83.5 million years ago in the Late Cretaceous period (Campanian stage) and are the closest living relatives of birds, as the two groups are the only known survivors of the Archosauria. Members of the crocodilian total group, the clade Pseudosuchia, appeared about 250 million yea\n[…]\nCrocodilian teeth can only hold onto prey, and food is swallowed unchewed. The stomach consists of a grinding gizzard and a digestive chamber. Indigestible items are regurgitated as pellets. The stomach is more acidic than that of any other vertebrate and contains ridges for gastroliths, which play a role in the crushing of food. Digestion takes place more quickly at higher temperatures.\n[…]\nAll of the hatchlings in a clutch may leave the nest on the same night. Crocodilians are unusual among reptiles in the amount of parental care provided after the young hatch. The mother helps excavate hatchlings from the nest and carries them to water in her mouth. Newly hatched crocodilians gather together and follow their mother. Both male and female adult crocodilians will respond to vocalizations by hatchlings.\n[…]\nJuveniles are highly vocal, both when scattering in the evening and congregating in the morning. Nearby adults, presumably the parents, may warn young of predators or alert them to the presence of food. The range and quantity of vocalisations vary between species. Alligators and caimans are the noisiest while some crocodile species are almost completely silent. In some crocodile species, individuals \"roar\" at others when they get too close.\n[…]\nAlligators are considered to be less aggressive than Nile and saltwater crocodiles, but the increase in density of the human population in the Everglades has brought people and alligators into proximity, increasing the risk of alligator attacks."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crocodilianos",
        "situacao": "ok",
        "texto": "Os crocodilianos são os répteis da ordem Crocodilia (ou Crocodylia), na qual existem 24 espécies vivas e numerosos fósseis. São répteis maioritariamente grandes, predadores e semiaquáticos. Pertencem a esta ordem os crocodilos (família Crocodylidae), os aligátores e caimões (ambos da família Alligatoridae) e os gaviais (da família Gavialidae).\n[…]\nEmbora por vezes a palavra crocodilo seja utilizada vulgarmente para se referir a todos os membros da ordem, propriamente falando só são verdadeiros crocodilos os da família dos crocodilídeos (Crocodylidae). Surgiram há 83,5 milhões de anos no Cretáceo tardio (na época Campaniana) e são os parentes vivos mais próximos das aves, dado que os dois grupos são os únicos sobreviventes do grande grupo Archosauria.\n[…]\nA principal característica distintiva dos tetrápodes diápsidos é a presença de duas aberturas (fenestras temporais) em cada lado do crânio por trás dos olhos. Os diápsidos vivos são os crocodilos, lagartos, serpentes, tuataras e aves. As características que distinguem os arcossauros doutros diápsidos estão na presença de um par extra de aberturas no crânio (Fenestra anterorbital) na frente das cavidades oculares.\n[…]\nArchosauria é o grupo coroa que contém o ancestral comum mais recente dos crocodilos e aves e todos os seus descendentes. Compreende os pseudossúquios (Pseudosuchia, os \"falsos crocodilos\") e os Ornithosuchia, que por sua vez compreendem os dinossauros e os seus parentes, os pterossauros e as aves. Pseudosuchia define-se como o grupo dos crocodilos vivos e todos os arcossauros mais estreitamente relacionados com os crocodilos do que com as aves.\n[…]\nForam seguidos pelos mesossúquios, que se diversificaram muito durante o Jurássico e o Terciário. Outro grupo, os eussúquios, surgiu no Cretáceo tardio, há 80 milhões de anos, e compreende todos os crocodilos hoje vivos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Seriema",
      "descricao": "Ave terrestre sul-americana de pernas longas e topete (família Cariamidae), de campos e cerrados, de canto muito alto."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A seriema, ave de pernas longas do Cerrado, é parente viva de que grupo de aves predadoras gigantes, já extintas?",
    "resposta": "Aves do terror",
    "distratores": [
      "Moas",
      "Aves-elefante",
      "Dodôs"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Phorusrhacidae",
      "https://en.wikipedia.org/wiki/Seriema"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phorusrhacidae",
        "situacao": "ok",
        "texto": "Phorusrhacidae, colloquially known as terror birds, is a family of large carnivorous, mostly flightless birds that includes possibly several subfamilies containing many genera, including the eponymous Phorusrhacos. The exact number of genera is uncertain, as some taxa such as Brontornis may be different forms of bird instead. All phorusrhacids lived during the Cenozoic era in the Americas. However\n[…]\nThis is further supported by footprints from the Late Miocene of the Río Negro Formation, showcasing a trackway made by a mid-to-large sized terror bird with functionally didactyl footprints, the inner toe with the sickle claw raised mostly off the ground akin to their Mesozoic counterparts.\n[…]\nIn the past, these birds were thought to have high beaks, round orbits, and vaulted braincases though there was never enough empirical evidence to support this. However, new fossils have been discovered in Comallo, Argentina. These skulls reveal that the terror bird has a triangular dorsal view, a rostrum that is hooked and more than half the length of the actual skull, and a more compact caudal portion.\n[…]\nDuring the early Cenozoic, after the extinction of the non-bird dinosaurs, mammals underwent an evolutionary diversification, and some bird groups around the world developed a tendency towards gigantism; this included the Gastornithidae, the Dromornithidae, the Palaeognathae, and the Phorusrhacidae. Phorusrhacids are an extinct group within Cariamiformes, the only living members of which are the two species of seriemas in the family Cariamidae.\n[…]\nPhylogenetic analysis of Cariamiformes and their relatives according to Mayr (2016) in his redescription of Bathornis: A 2024 study finds Bathornis as closer to seriemas than phorusrhacids were.\n[…]\nTerror Birds: Bigger and Faster (Science)\n[…]\nDarren Naish: Tetrapod Zoology: \"terror birds\"\n[…]\nxkcd Terror Bird"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Seriema",
        "situacao": "ok",
        "texto": "The seriemas are the sole living members of the small bird family Cariamidae (the entire family is also referred to as \"seriemas\"), which is also the only surviving lineage of the order Cariamiformes. Once believed to be related to cranes, they have been placed near the falcons, parrots, and passerines, as well as the extinct Phorusrhacidae (terror birds). The seriemas are large, long-legged terri\n[…]\nThey live in grasslands, savanna, dry woodland and open forests of Brazil, Bolivia, Argentina, Paraguay and Uruguay. There are two species of seriemas, the red-legged seriema (Cariama cristata) and the black-legged seriema (Chunga burmeisteri). Names for these birds in the Tupian languages are variously spelled as siriema, sariama, and çariama, and mean \"crested\".\n[…]\nThese birds are thought to be the closest living relatives of a group of gigantic (up to 10 ft or 3.0 m tall) carnivorous \"terror birds\", the phorusrhacids, which are known from fossils from South and North America. Several other related groups, such as the idiornithids and bathornithids were part of Palaeogene faunas in North America and Europe and possibly elsewhere too.\n[…]\nSeriemas build a large bulky stick nest, lined with leaves and dung, which is placed in a tree 1–5 m (3.3–16.4 ft) off the ground. The placement of the nest is so that the adults can reach the nest by foot rather than flying, through hops and the occasional flutter. Both sexes are involved in building the nest. They lay two or three white or buff eggs sparsely spotted with brown and purple. The female does most of the incubation, which lasts from 24 to 30 days.\n[…]\nHatchlings are downy but stay in the nest for about two weeks; after which they leave the nest and follow both parents. They reach full maturity at the age of four to five months. It is unknown when fledgling chicks reach sexual maturity.\n[…]\nSeriema videos on the Internet Bird Collection"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Phorusrhacidae",
        "situacao": "ok",
        "texto": "Phorusrhacidae é uma família de aves fósseis da ordem Cariamiformes.\n[…]\nForusracídeos, coloquialmente conhecidos como aves do terror, são uma família extinta de grandes aves carnívoras. Surgiram após a extinção dos dinossauros não avianos, devido à ausência de predadores de grande porte, assumindo de forma fantástica o papel de grandes predadores como o Tyrannosaurus rex. Sua escala temporal cobre de 62 a 1,8 milhões de anos atrás.\n[…]\nEles variavam de 1 a 3 metros de altura. Eram dotados de bicos enormes e curvados, como os das aves de rapina atual, eram bem afiados e desenvolvidos especialmente para rasgar a carne de suas presas, suas pernas eram ágeis e muito musculosas proporcionando muita velocidade durante a corrida. Podiam alcançar até 50 km/h. Suas asas eram pouco desenvolvidas, incapazes de sequer auxiliar em saltos. Acredita-se que seus parentes mais próximos de hoje sejam os seriemas de 80 cm de altura.\n[…]\nOs paleontólogos Luis Chiappe e Sara Bertelli estudaram um crânio, descoberto em 1999 no sul da Argentina, tão grande quanto o de um cavalo e com um bico aquilino, assim como analisaram também ossos de patas incrustados em rochas de 15 milhões de anos na Patagônia, e chegaram a conclusão de que essas aves corriam mais depressa que um corredor olímpico.\n[…]\nAcredita-se também que após a formação da ponte entre as Américas do Norte e do Sul, grandes felinos, ursos e outros carnívoros tenham migrado para o sul e devorado essas \"aves aterrorizantes\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Dodô",
      "descricao": "Ave não voadora extinta (Raphus cucullatus), endêmica da ilha Maurício, no Oceano Índico."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O dodô, ave sem voo extinta da ilha Maurício, era um parente grandalhão de que ave comum nas praças das cidades?",
    "resposta": "Pombo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dodo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dodo",
        "situacao": "ok",
        "texto": "The dodo (Raphus cucullatus) is an extinct flightless bird that was endemic to Mauritius,  an island east of Madagascar in the Indian Ocean. The dodo's closest relative was the also-extinct and flightless Rodrigues solitaire. The two formed the subtribe Raphina, a clade of extinct flightless birds that are a part of the group that includes pigeons and doves (the family Columbidae). The closest liv\n[…]\nMathurin Jacques Brisson coined the genus name Raphus (referring to the bustards) in 1760, resulting in the current name Raphus cucullatus. In 1766, Linnaeus coined the new binomial Didus ineptus (meaning \"inept dodo\"). This has become a synonym of the earlier name because of nomenclatural priority.\n[…]\nBecause of the possible single-egg clutch and the bird's large size, it has been proposed that the dodo was K-selected, meaning that it produced few altricial offspring, which required parental care until they matured. Some evidence, including the large size and the fact that tropical and frugivorous birds have slower growth rates, indicates that the bird may have had a protracted development period.\n[…]\nBaron Edmond de Sélys Longchamps coined the name Raphus solitarius for these birds in 1848, as he believed the accounts referred to a species of dodo. When 17th-century paintings of white dodos were discovered by 19th-century naturalists, it was assumed they depicted these birds. Oudemans suggested that the discrepancy between the paintings and the old descriptions was that the paintings showed females, and that the species was therefore sexually dimorphic.\n[…]\nPainting the Dodo: Two-minute video about Julian Hume's modern interpretation of Roelant Savery's Dodo\n[…]\nDodo Bird Unboxing: Seven-minute video showing the Oxford specimen being taken out of storage and discussed\n[…]\nAves3D – Raphus cucullatus Archived September 23, 2023, at the Wayback Machine: Interactive 3D scans of various dodo elements"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dod%C3%B4",
        "situacao": "ok",
        "texto": "Dodô (português brasileiro) ou dodó (português europeu) (nome científico: Raphus cucullatus) é uma espécie extinta de ave da família dos pombos que era endêmica de Maurício, uma ilha no Oceano Índico a leste de Madagascar. Era incapaz de voar e não tinha medo de seres humanos, pois evoluiu isolado e sem predadores naturais na ilha que habitava. Foi descoberto em 1598 por navegadores holandeses e t\n[…]\nA ave geneticamente mais próxima do dodô foi o também extinto solitário-de-rodrigues; juntos, eles compõem a subfamília Raphinae, dentro da família Columbidae, que engloba todos os pombos. Seu \"primo\" vivo mais próximo é o pombo-de-nicobar. Durante algum tempo, pensou-se erroneamente que existisse um dodô branco na vizinha ilha de Reunião, mas sabe-se hoje que essa ave na verdade é o íbis-terrestre-de-reunião.\n[…]\nA falta de mamíferos herbívoros competindo pelos recursos dessas ilhas permitiu que o solitário e o dodô perdessem a capacidade de voar e aumentassem muito de tamanho, fenômeno chamado de gigantismo insular. Outro pombo grande e incapaz de voar, o Natunaornis gigoura, foi descrito em 2001 a partir de material fóssil coletado em Fiji. Ele era apenas um pouco menor do que o dodô e o solitário-de-rodrigues, e também acredita-se que pode ter parentesco com os pombos coroados do gênero Goura.\n[…]\nUm dos primeiros registros sobre a fauna de Maurício, do diário de van Warwijck de 1598, descreve o dodô da seguinte maneira:\n[…]\nO dodô viveu ao lado de outras aves da ilha Maurício recém-extintas, como a galinhola-vermelha-de-maurício, papagaio-de-bico-largo, papagaio-cinzento-de-maurício, pombo-azul-de-maurício, coruja-de-maurício, Fulica newtonii (uma carqueja), Alopochen mauritiana (um ganso), Anas theodori (um pato), e Nycticorax mauritianus (um socó). Répteis extintos de Maurício incluem as duas espécies de tartarugas-gigantes endêmicas (Cylindraspis inepta e C.\n[…]\nLista de aves extintas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Ararinha-azul",
      "descricao": "Pequena arara azul (Cyanopsitta spixii) da caatinga do norte da Bahia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A ararinha-azul, ave da caatinga baiana, é a espécie do protagonista de que animação de 2011, dirigida pelo brasileiro Carlos Saldanha?",
    "resposta": "Rio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_(2011_film)",
      "https://en.wikipedia.org/wiki/Spix%27s_macaw"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_(2011_film)",
        "situacao": "ok",
        "texto": "Rio is a 2011 American animated musical adventure comedy film directed by Carlos Saldanha and written by Don Rhymer, Joshua Sternin, Jennifer Ventimilia, and Sam Harper. The title refers to the Brazilian city of Rio de Janeiro, where the film is set. Produced by 20th Century Fox Animation and Blue Sky Studios, the film features the voices of Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Leslie \n[…]\nThe film was also dedicated to the memory of Clymene Campos Saldanha, the mother of Carlos Saldanha who died on December 11, 2010, during production.\n[…]\nIt therefore marked the second film that succeeded in topping the overseas box office three times in 2011, joining Tangled, although it is the only one that did it on three consecutive weekends.\n[…]\nRio finished 2011 with a final gross of $36.8 million (R$68.7 million), the second highest income of the year after The Twilight Saga: Breaking Dawn – Part 1.\n[…]\nA sequel, titled Rio 2, was released on April 11, 2014. Carlos Saldanha, the creator and director of the first film, returned as director. All of the main cast—Anne Hathaway, Jesse Eisenberg, Jemaine Clement, Jamie Foxx, will.i.am, Tracy Morgan, George Lopez, Jake T. Austin, Leslie Mann, and Rodrigo Santoro—reprised their roles. New cast includes Andy García, Bruno Mars, Kristin Chenoweth, Rita Moreno, Amandla Stenberg, Rachel Crow, Pierce Gagnon, and Natalie Morales.\n[…]\nDirector Carlos Saldanha had kept the possibility for a third Rio film open. In an April 2014 interview, he stated, \"Of course, I have a lot of stories to tell, so we're [starting to] prepare for it.\" In a press kit released by Disney for the 2022 film The Ice Age Adventures of Buck Wild, it is mentioned that \"the next installment in the Rio franchise\" is in development, with Ray DeLaurentis writing the screenplay.\n[…]\nMedia related to Rio (2011 film) at Wikimedia Commons\n[…]\nQuotations related to Rio (2011 film) at Wikiquote"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spix%27s_macaw",
        "situacao": "ok",
        "texto": "Spix's macaw (Cyanopsitta spixii), also known as the little blue macaw, or simply blue macaw, is a macaw species that was endemic to Brazil. It is a member of tribe Arini in the subfamily Arinae (Neotropical parrots), part of the family Psittacidae (the true parrots). It was first described in 1638 by German naturalist Georg Marcgrave when he was working in Pernambuco in Dutch Brazil.\n[…]\nNaturalists have noted the Spix's similarity to other smaller members of tribe Arini based on general morphology as long ago as Rev. F.G. Dutton, president of the Avicultural Society U.K. in 1900: \"it's more like a conure\" ('conure' is not a defined taxon – in Dutton's time, it referred to the archaic genus Conurus; today those would be among the smaller non-macaw parakeets in Arini). Brazilian ornithologist Helmut Sick stated in 1981: \"Cyanopsitta spixii...is not a real macaw\".\n[…]\n(Sick's remark was in the context of an article on Lear's macaw, a larger blue macaw. He recognized, as Spix had not 150 years before, that C. spixii is notably different from the larger macaws).\n[…]\nIn 1990, the Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA, Brazilian Institute of Environment and Renewable Natural Resources) established the Permanent Committee for the Recovery of Spix's Macaw, called CPRAA, and its Ararinha Azul project (Little Blue Macaw project) in order to conserve the species. At that time, the known captive population of Spix's stood at 15, and one in the wild. Early 1990 was the low point for conservation of the Spix.\n[…]\nNote: table data based on \"Al Wabra ICMBio data from June 2013\" and Watson, R. (Studbook Keeper) 2011. \"Annual Report and Recommendations for 2011: Spix's Macaw (Cyanopsitta spixii)\".\n[…]\nARKive: Cyanopsitta spixii – photos, videos, information.\n[…]\nAnimal diversity web:  Cyanopsitta spixii\n[…]\nBBC Nature: Spix's macaw"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_%282011%29",
        "situacao": "ok",
        "texto": "Rio é um filme americano de animação digital de 2011, dos gêneros musical e comédia, produzido pela 20th Century Fox Animation e pela Blue Sky Studios. Dirigido por Carlos Saldanha, o título refere-se ao município do Rio de Janeiro, localizado no Brasil, onde o filme é ambientado. O longa-metragem conta a história de Blu, uma ararinha-azul macho que é levada à cidade para acasalar com uma fêmea ch\n[…]\nCarlos Saldanha teve a ideia do filme pela primeira vez em 2005, envolvendo um pinguim que seria levado da Antártida pelas águas do Oceano Atlântico até chegar nas praias de Ipanema; no entanto, a utilização de um pinguim foi alterada para uma arara depois que o diretor soube da produção de Happy Feet e Surf's Up, dois outros filmes de animação que também envolviam pinguins. Saldanha apresentou a ideia a Chris Wedge nos estúdios da Blue Sky em 2006.\n[…]\nSaldanha mostrou aos animadores do estúdio mapas e livros do Brasil com marcos geográficos e medidas, a partir dos quais eles construíram uma versão digital da cidade do Rio de Janeiro. Posteriormente, um grupo de artistas da Blue Sky visitou o Rio para conhecer os diversos locais que a história do filme seria ambientada. Os animadores também se reuniram com um especialista em araras do Zoológico do Bronx para obter informações sobre os movimentos e personalidades da ave.\n[…]\nO próprio Saldanha é um brasileiro nascido no Rio de Janeiro; o crescimento de Saldanha no estúdio após ele ter dirigido a segunda e terceira parte da série Ice Age foi um grande incentivo para a Blue Sky produzir Rio.\n[…]\nEm abril de 2011, a empresa Oreo anunciou sua edição especial de bolachas com um creme azul em promoção do filme nos Estados Unidos. A promoção incluiu adesivos dentro de cada pacote dos biscoitos.\n[…]\nUm jogo eletrônico baseado no filme, desenvolvido pela THQ, foi lançado no dia 12 de abril de 2011 para PlayStation 3, Wii, Xbox 360 e Nintendo DS.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Uirapuru",
      "descricao": "Pequena ave amazônica (Cyphorhinus arada) de canto melodioso, cercada de lendas de sorte e encantamento."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que compositor brasileiro escreveu Uirapuru, obra para orquestra inspirada na lenda do pássaro amazônico de canto encantado?",
    "resposta": "Heitor Villa-Lobos",
    "distratores": [
      "Carlos Gomes",
      "Camargo Guarnieri",
      "Francisco Mignone"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uirapuru_(Villa-Lobos)",
      "https://en.wikipedia.org/wiki/Heitor_Villa-Lobos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uirapuru_(Villa-Lobos)",
        "situacao": "ok",
        "texto": "Uirapuru (subtitled O passarinho encantado, “The Enchanted Little Bird”) is a symphonic poem or ballet by the Brazilian composer Heitor Villa-Lobos, begun as a revision of an earlier work in 1917 and completed in 1934. A recording conducted by the composer lasts 20 minutes and 33 seconds.\n[…]\nThe title page of the autograph manuscript reads “Uirapuru / (O passaro encantado)/ Bailado brasileiro\"// \"H. Villa-Lobos/ Rio, 1917\"// \"A Serge Lifar\"// \"(Le petit oiseau enchanté)”, but bears on its last page the inscription \"Fim, Rio 1917, reformado em 1934\".\n[…]\n\"Uirapuru\" is a name, derived from the Tupi language, applied to various members of the bird family Pipridae found in Brazil. The bird whose song Villa-Lobos used as a compositional theme is Cyphorhinus arada, the uirapuru-verdadeiro or musician wren, also known as the organ wren or quadrille wren, a bird with an astonishing variety of song patterns.\n[…]\nSalles, Paulo de Tarso. 2005. \"Tédio de alvorada e Uirapuru: um estudo comparativo de duas partituras de Heitor Villa-Lobos\". Brasiliana, no. 20 (May): 2–9.\n[…]\nSantos, Daniel Zanella dos. 2014. \"A voz do passarinho encantado: considerações sobre o uso de leitmotiv em Uirapurú (1917) de Heitor Villa-Lobos\". Art Music Review, no. 27 (December). ISSN 2317-6059.\n[…]\nSantos, Daniel Zanella dos. 2015. \"Narratividade e tópicas em Uirapuru (1917) de Heitor Villa-Lobos\". M.M. diss. Florianópolis: Universidade do Estado de Santa Catarina.\n[…]\nTarasti, Eero. 1995. Heitor Villa-Lobos: The Life and Works. Jefferson, North Carolina: McFarland & Company.\n[…]\nVilla-Lobos, Heitor. 1972. \"Uirapuru\". In Villa-Lobos, sua obra, second edition, 245. Rio de Janeiro: MEC/DAC/Museu Villa-Lobos.\n[…]\nVilla-Lobos, sua obra. 2009. Version 1.0. MinC / IBRAM, and the Museu Villa-Lobos. Based on the third edition, 1989."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Heitor_Villa-Lobos",
        "situacao": "ok",
        "texto": "Heitor Villa-Lobos (March 5, 1887 – November 17, 1959) was a Brazilian composer, conductor, cellist, and classical guitarist described as \"the single most significant creative figure in 20th-century Brazilian art music\". Villa-Lobos has globally become one of the most recognizable South American composers in music history. A prolific composer, he wrote many orchestral, chamber, instrumental and vo\n[…]\nBéhague, Gerard. 2001. \"Villa-Lobos, Heitor\". The New Grove Dictionary of Music and Musicians, edited by Stanley Sadie and John Tyrrell. London: Macmillan.\n[…]\nHeitor Villa-Lobos website..\n[…]\nLopes, Luiz Fernando (July 25, 2022), \"Villa-Lobos, Heitor\", Oxford Music Online, Oxford University Press, ISBN 978-1-56159-263-0, retrieved May 1, 2025\n[…]\nTarasti, Eero. 1995. Heitor Villa-Lobos: The Life and Works Jefferson, North Carolina: McFarland. ISBN 0-7864-0013-7.\n[…]\nVilla-Lobos, Heitor. [1941?]. A música nacionalista no govêrno Getulio Vargas. Rio de Janeiro: D.I.P.\n[…]\nYang, Shu-Ting. 2007. \"Salute to Bach: Modern Treatments of Bach-Inspired Elements in Luigi Dallapiccola's Quaderno Musicale di Annalibera and Heitor Villa-Lobos' Bachianas Brasileiras No. 4\". DMA diss. Cincinnati: University of Cincinnati. Retrieved November 25, 2017.\n[…]\nHeitor Villa-Lobos at IMDb\n[…]\nvillalobosproject.com Villa-Lobos: Maintained by Minc\n[…]\nPeermusic Classical: Heitor Villa-Lobos Composer's Publisher and Bio\n[…]\nFree scores by Heitor Villa-Lobos at the International Music Score Library Project (IMSLP)\n[…]\nClassical Composers Database. Villa-Lobos: Biography.\n[…]\nHeitor Villa-Lobos e o ambiente artístico parisiense: convertendo-se em um músico brasileiro by Paulo Renato Guérios (in Portuguese)\n[…]\nHeitor Villa-Lobos and the Parisian art scene: how to become a Brazilian musician by Paulo Renato Guérios (in English)\n[…]\nThe Villa-Lobos Magazine: News about Heitor Villa-Lobos on the web and in the Real World."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uirapuru_%28Villa-Lobos%29",
        "situacao": "ok",
        "texto": "Uirapuru (do tupi, “O Passarinho Encantado”) é um poema sinfônico ou ballet do compositor brasileiro Heitor Villa-Lobos, iniciada como revisão de uma obra anterior em 1917 e concluída em 1934. Uma gravação conduzida pelo compositor dura 20 minutos e 33 segundos.\n[…]\nA página de rosto do manuscrito autógrafo diz “Uirapuru / (O passaro encantado)/ Bailado brasileiro\"// \"H. Villa-Lobos/ Rio, 1917\"// \"A Serge Lifar\"// \"(Le petit oiseau enchanté)\", mas traz em sua última página a inscrição \"Fim,  Rio 1917, reformado em 1934\".\n[…]\n\"Uirapuru\" é um nome, derivado do língua Tupi, aplicado a vários membros da família das aves Pipridae encontradas no Brasil. O pássaro cujo canto Villa-Lobos usou como tema de composição é Cyphorhinus arada, o uirapuru-verdadeiro ou carriça músico, também conhecido como carriça de órgão ou carriça  variedade de padrões de música.\n[…]\nSalles, Paulo de Tarso. 2005. \"Tédio de alvorada e Uirapuru: um estudo comparativo de duas partituras de Heitor Villa-Lobos\". Brasiliana, no. 20 (May): 2–9.\n[…]\nSantos, Daniel Zanella dos. 2014. \"A voz do passarinho encantado: considerações sobre o uso de leitmotiv em Uirapurú (1917) de Heitor Villa-Lobos\". Art Music Review, no. 27 (December). Predefinição:Issn.\n[…]\nSantos, Daniel Zanella dos. 2015. \"Narratividade e tópicas em Uirapuru (1917) de Heitor Villa-Lobos\". M.M. diss. Florianópolis: Universidade do Estado de Santa Catarina.\n[…]\nTarasti, Eero. 1995. Heitor Villa-Lobos: The Life and Works. Jefferson, North Carolina: McFarland & Company.\n[…]\nVilla-Lobos, Heitor. 1972. \"Uirapuru\". In Villa-Lobos, sua obra, second edition, 245. Rio de Janeiro: MEC/DAC/Museu Villa-Lobos.\n[…]\nVilla-Lobos, sua obra. 2009. Version 1.0. MinC / IBRAM, and the Museu Villa-Lobos. Based on the third edition, 1989.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Tico-tico",
      "descricao": "Pequeno pardal americano (Zonotrichia capensis) de topete e colar ferrugem, comum no Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que choro de Zequinha de Abreu, tocado no mundo todo, leva o nome de um pequeno pássaro brasileiro?",
    "resposta": "Tico-tico no Fubá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tico-Tico_no_Fub%C3%A1",
        "situacao": "ok",
        "texto": "\"Tico-Tico no fubá\" (Brazilian Portuguese: [ˈtʃiku ˈtʃiku nu fuˈba]; \"rufous-collared sparrow in the cornmeal\") is a Brazilian choro written by Zequinha de Abreu in 1917. Its original title was \"Tico-Tico no farelo\" (\"sparrow in the bran\"), but since Brazilian guitarist Américo Jacomino \"Canhoto\" (1889–1928) had a work with the same title, Abreu's work was given its present name in 1931, and somet\n[…]\nA biographical movie about Zequinha de Abreu with the same title, Tico-Tico no Fubá was produced in 1952 by the Brazilian film studio Companhia Cinematográfica Vera Cruz, starring Anselmo Duarte as Abreu.\n[…]\nIn the M*A*S*H* episode \"Your Hit Parade\", Father Mulcahy mentions that he requested \"Tico Tico\", but got \"May the Good Lord\n[…]\n61 versions of Tico Tico at WFMU's blog"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tico-tico_no_Fub%C3%A1",
        "situacao": "ok",
        "texto": "Tico-Tico no Fubá é um choro composto por Zequinha de Abreu. Ficou internacionalmente conhecida na voz de Carmen Miranda, e com o tempo, tornou-se uma das canções brasileiras mais famosas do mundo.\n[…]\nA popularidade de \"Tico-Tico no Fubá\" atingiu seu ápice nos anos 1940, quando fez parte da trilha sonora de seis filmes de Hollywood, incluindo Bathing Beauty (1944) e It's a Pleasure (1945). A canção tem duas letras: uma escrita no Brasil e outra nos Estados Unidos, por Aloysio de Oliveira, para Carmen Miranda. Esta última a gravou pela Decca Records, em 1945, e a apresentou no filme Copacabana, em 1947, contracenando com Groucho Marx.\n[…]\nParte da história da canção foi contada no filme Tico-tico no Fubá, de 1952, dirigido por Adolfo Celi. Em 2006, o cantor Ney Matogrosso regravou a canção para o álbum Batuque. Em 2009, foi a vez da cantora baiana Daniela Mercury, que a incluiu em seu décimo terceiro álbum de estúdio, Canibália.\n[…]\nA seleção brasileira de nado sincronizado utilizou a canção como tema no XV Mundial de Esportes Aquáticos, realizado em Barcelona, em 2013. \"Tico-Tico no Fubá\" também foi executada na cerimônia de encerramento dos Jogos Olímpicos Rio 2016, interpretada por Roberta Sá, em homenagem a Carmen Miranda.\n[…]\nAo longo dos anos, \"Tico-Tico no Fubá\" foi reinterpretada por inúmeros artistas em diversos estilos musicais. Entre os arranjos e performances mais notáveis estão:\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nTira esse tico de cá, de cima do meu fubá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nO tico-tico tá\n[…]\nO tico-tico tá comendo meu fubá\n[…]\nQue vá comer é mais minhoca e não fubá==Referências==\n[…]\n\"Zonotriko en la Faruno\", versão do Tico-Tico em Esperanto",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Carcará",
      "descricao": "Falconídeo (Caracara plancus) de topete preto, rosto alaranjado e pernas amarelas, comum em campos abertos da América do Sul."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1965, que cantora baiana ficou famosa no show Opinião ao interpretar Carcará, música de João do Vale?",
    "resposta": "Maria Bethânia",
    "distratores": [
      "Gal Costa",
      "Elis Regina",
      "Clara Nunes"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maria_Beth%C3%A2nia",
      "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maria_Beth%C3%A2nia",
        "situacao": "ok",
        "texto": "Maria Bethânia Viana Teles Veloso (Portuguese pronunciation: [maˈɾiɐ beˈtɐ̃niɐ]; born 18 June 1946) is a Brazilian singer and songwriter. Born in Santo Amaro, Bahia, she started her career in Rio de Janeiro in 1964 with the show \"Opinião\" (\"Opinion\"). Due to its popularity, with performances all over the country, and the popularity of her 1965 single \"Carcará\", the artist became a star in Brazil. \n[…]\nThe name Maria Bethânia was chosen by her brother Caetano Veloso after the homonymous hit song written by composer Capiba and famous at the time in the voice of Nélson Gonçalves.\n[…]\nThe show was a success and was presented again twenty months later, with the participation of singer-songwriter Tom Zé. That same year, the group mounted another show called Nova Bossa Velha e Velha Bossa Nova (New Old Bossa and Old New Bossa). Still in that year, directed by Caetano and Gil, Bethânia performed another musical, this time on her own, called Mora na Filosofia (Lives in Philosophy).\n[…]\nAfter releasing \"Carcará\" Bethânia returned from Rio de Janeiro, where she had gone to attend college, to Bahia. This was to only be a brief visit, as around that time she was performing at nightclubs and other venues throughout Brazil. This song also got her an offer from an RCA Records representative to record for the company. However, Bethânia continually changed record labels throughout the 1970s.\n[…]\nIn 1976, she released a live album with Doces Bárbaros, a Música popular brasileira supergroup. It was recorded June 24 of that year at Anhembi Stadium in São Paulo. Its members were Gilberto Gil, Caetano Veloso, Maria Bethânia and Gal Costa, four of the biggest names in the history of the Music of Brazil. The band was the subject of a 1977 documentary directed by Jom Tob Azulay. In 1994, they performed a tribute concert to Mangueira school of samba.\n[…]\nMaria Bethânia: Music Is Perfume\n[…]\nMaria Bethânia at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maria_Beth%C3%A2nia",
        "situacao": "ok",
        "texto": "Maria Bethânia Vianna Telles Velloso (Santo Amaro, 18 de junho de 1946) é uma cantora e compositora brasileira. Natural de Santo Amaro, Bahia, iniciou sua carreira no Rio de Janeiro em 1964 com o espetáculo \"Opinião\", sendo considerada \"A Rainha da Música Brasileira\". Bethânia é irmã do cantor e compositor Caetano Veloso e da escritora e compositora Mabel Velloso, além de ser tia dos cantores Belô\n[…]\nMaria Bethânia participou do especial Mulher 80 (Rede Globo); o programa exibiu uma série de entrevistas e musicais cujo tema era a mulher e a discussão do papel feminino na sociedade de então abordando esta temática no contexto da música nacional e da ampla preponderância das vozes femininas, com Elis Regina, Fafá de Belém, Marina Lima, Simone, Rita Lee, Joanna, Zezé Motta, Gal Costa, Maria Bethânia e as participações especiais das atrizes Regina Duarte e Narjara Turetta, que protagonizaram o seriado Malu Mulher.\n[…]\nEste disco, além de originar um LP promocional para a Coca-Cola com uma entrevista entre parte do repertório (\"Emoções\", \"Costumes\", \"Olha\" e \"Seu Corpo), gerou também um VHS (relançado em DVD em 2009) e um espetáculo calcado na divulgação do disco anterior, dirigido por Gabriel Vilela na casa Canecão (Rio de Janeiro), do qual saiu o trabalho que marca a despedida definitiva da Universal Music: Maria Bethânia ao Vivo, de 1995, o último a ter versão em vinil; porém, já sofria com o problema de pressão de espaço físico, com quatro músicas a menos.\n[…]\nA cantora recebeu da Universidade Federal da Bahia, o título de Doutora Honoris Causa, por sua contribuição a música brasileira. Em 2016, foi homenageada pela Mangueira, que desfilou no carnaval do Rio de Janeiro com o enredo \"Maria Bethânia: A menina dos Olhos de Oyá\". A escola foi a última a desfilar e se sagrou campeã. Em 3 de maio de 2023, foi empossada como imortal na Academia de Letras da Bahia, cadeira 18."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Urubu-de-cabeça-preta",
      "descricao": "Ave necrófaga das Américas (Coragyps atratus), toda preta e de cabeça nua cinza-escura, comum nas cidades brasileiras."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O urubu é o mascote de que clube de futebol carioca, cuja torcida adotou a ave no fim dos anos sessenta?",
    "resposta": "Flamengo",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo",
        "situacao": "ok",
        "texto": "Clube de Regatas do Flamengo (CRF) é uma agremiação poliesportiva brasileira com sede na cidade do Rio de Janeiro, capital do estado homônimo. Fundado no bairro do Flamengo para disputas do esporte remo em 17 de novembro de 1895, tornou-se um dos clubes mais bem-sucedidos e populares do esporte brasileiro especialmente pelo futebol. É considerado um dos maiores e mais tradicionais clubes do Brasil\n[…]\nEm 2000, o mascote do Flamengo ganhou um desenho oficial e um nome: \"Samuca\". No entanto, esse nome não se popularizou entre a torcida, que o continua chamando simplesmente de \"urubu\".\n[…]\nO primeiro confronto entre os rivais cariocas Flamengo e Botafogo ocorreu em 1913. A partida ficou conhecida como Clássico da Rivaldade na década de 1960. O mascote do urubu do Flamengo originou-se durante a partida de 1 de junho de 1969, contra o Botafogo, quando torcedores do Flamengo lançaram um urubu em campo em resposta aos aplausos racistas de urubu do Botafogo e torcedores de outros times. O artilheiro do Flamengo no clássico é Zico e o artilheiro do Botafogo é Heleno de Freitas.\n[…]\nSegundo a pesquisa, 80% da torcida do Flamengo — cerca de 25 milhões de torcedores — não é oriunda do Rio de Janeiro, estado de origem do clube e no qual se localiza sua sede social e o estádio que recebe seus jogos de futebol. No Rio de Janeiro, a torcida responde por 48,2% da população, o que, em números absolutos, corresponde a cerca de 7,9 milhões de torcedores.\n[…]\nZagallo — o tetracampeão do mundo de futebol tem sua história diretamente ligada ao Flamengo. Além de ter sido jogador do clube entre 1951 e 1958 (217 jogos), foi seu treinador nos períodos de 1972–73, 1984–85 e 2000–01, totalizando 283 partidas. Exercendo a função de técnico do clube constam como seus principais títulos os Cariocas de 1972 e 2001 e a Copa dos Campeões de 2001.\n[…]\nClube de Regatas do Flamengo no X\n[…]\nClube de Regatas do Flamengo no YouTube"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Gralha-azul",
      "descricao": "Ave da família dos corvos (Cyanocorax caeruleus), de plumagem azul e cabeça preta, das matas de araucária do Sul do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A gralha-azul, ave-símbolo do Paraná, é famosa por enterrar sementes e ajudar a espalhar que árvore?",
    "resposta": "Araucária",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gralha-azul",
      "https://en.wikipedia.org/wiki/Azure_jay"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gralha-azul",
        "situacao": "ok",
        "texto": "A gralha-azul (Cyanocorax caeruleus) é uma ave passeriforme da família dos corvídeos, com aproximadamente 40 cm de comprimento, de coloração geral azul vivo, com penas pretas na cabeça, parte frontal do pescoço e no superior do peito. Machos e fêmeas tem a mesma plumagem e aparência embora as fêmeas em geral sejam menores.\n[…]\nO nome gralha-azul foi selecionado como nome vernáculo técnico para a espécie Cyanocorax caeruleus pelo Comitê Brasileiro de Registros Ornitológicos (CBRO) em 2021.\n[…]\nNo período reprodutivo que se inicia em outubro e se prolonga até março, todos os indivíduos colaboram na construção de ninhos nas partes mais altas das árvores, preferencialmente na coroa central da araucária, quando lá existente. No ninho feito de gravetos, de cerca de 50 cm de diâmetro, em forma de taça, são postos 4 ovos, em média.\n[…]\nA gralha-azul é o principal animal disseminador da araucária uma vez que, durante outono, quando as araucárias frutificam, bandos de gralhas laboriosamente estocam os pinhões para se alimentar.\n[…]\nComo a floresta das araucárias tenha sido reduzida a cerca de 4% do que fora antes, a perpetuidade desta espécie de aves é vista com preocupação.\n[…]\nNo folclore do estado do Paraná atribui-se a formação e manutenção das florestas de araucária a este pássaro, como uma missão divina, razão porque as espingardas explodiriam ou negariam fogo quando para elas apontadas. Além disso, a ave, que como dito anteriormente está associada à Mata das Araucárias e sendo o estado famoso pelo bioma, é um dos símbolos do Estado do Paraná, segundo a Lei Estadual n. 7957 de 1984 que a consagra como \"ave símbolo\" deste estado.\n[…]\nGralha-azul no site WikiAves"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Azure_jay",
        "situacao": "ok",
        "texto": "The azure jay (Cyanocorax coeruleus) (Brazilian Portuguese: gralha-azul) is a Near Threatened species of passeriform bird in the family Corvidae, the crows and jays. It is found in Argentina, Brazil, and possibly Paraguay and Uruguay.\n[…]\nThe IOC, the Clements taxonomy, and the independent South American Classification Committee (SACC) currently spell it caeruleus. This article uses the former spelling.\n[…]\nThe azure jay is found in Brazil from southern São Paulo south through Paraná, Santa Catarina, and Rio Grande do Sul almost to Uruguay. Its range continues into the northeastern Argentinian provinces of Formosa, Chaco, Corrientes, and Misiones. Most sources include eastern Paraguay in its range. There are historical records there whose identification is disputed and sight records from the late 1900s. The SACC has no records in that country but includes Uruguay in its range.\n[…]\nThe azure jay inhabits humid evergreen forest, especially that dominated by Araucaria angustifolia. In elevation it ranges from sea level to 1,000 m (3,300 ft).\n[…]\nThe azure jay is omnivorous but its diet has not been fully described. However, it appears to feed heavily on Araucaria angustifolia seeds, and plays an important role in its seed dispersal. It also is known to feed on other fruit, arthropods, small mammals, and eggs, and has been observed scavenging from a fresh cow carcass. It forages in small flocks that sometimes include plush-crested jays (C. chryops).\n[…]\nCyanocorax caeruleus - azure jay specimen(s) in the ZMA\n[…]\nA lenda da Gralha Azul The legend of the Blue Jay in Portuguese (Internet Archive copy)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Martim-pescador",
      "descricao": "Martim-pescador-comum (Alcedo atthis), pequena ave de bico longo e pontudo que mergulha para pescar."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos anos noventa, o bico do martim-pescador inspirou engenheiros a redesenhar o nariz de que trem-bala?",
    "resposta": "Shinkansen",
    "distratores": [
      "TGV",
      "Eurostar",
      "Maglev de Xangai"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/500_Series_Shinkansen",
      "https://en.wikipedia.org/wiki/Biomimetics"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/500_Series_Shinkansen",
        "situacao": "ok",
        "texto": "The 500 series (500系, Go-hyaku-kei) is a Shinkansen high-speed train type operated by West Japan Railway Company (JR-West) in Japan on the Tōkaidō Shinkansen line from 1997 until 2010, and the San'yō Shinkansen line since 1997. They were designed to be capable of 320 km/h (199 mph) but operated at 300 km/h (186 mph), until they were retired from the primary Nozomi service in 2010. The trainsets we\n[…]\nOn 7 November 2015, set V2 began operating in a special \"500 Type Eva\" livery as part of the \"Shinkansen:Evangelion Project\" tie-up project to mark the 40th anniversary of the Sanyo Shinkansen and the 20th anniversary of Neon Genesis Evangelion. Initially planned to operate until March 2017, this livery was extended until 13 May 2018. Set V2 was then transformed to the Hello Kitty Shinkansen in June 2018.\n[…]\nIn March 2018, JR West announced the launch of a special \"Hello Kitty\" themed 500 series train on Sanyo Shinkansen Kodama services. The train, set V2 which formerly ran in the \"500 Type Eva\" livery, entered service on 30 June 2018. It is scheduled to operate until the middle of 2026. On 16 January 2026, JR West announced that the last day of the \"Hello Kitty\" Shinkansen will take place on 17 May of that year.\n[…]\nThe 500 Series Shinkansen served as basis for Liner Gao in Japanese mecha anime series The King of Braves GaoGaiGar.\n[…]\nThe Shinkansen Henkei Robo Shinkalion franchise would feature the 500 series as one of its many titular mecha. In addition to the standard livery, the Evangelion and Hello Kitty-wrapped versions also appeared in both the toyline and anime.\n[…]\nThe anime Transformers: Robots in Disguise features the Autobot character Railspike, who transforms into a 500 Series Shinkansen."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Biomimetics",
        "situacao": "ok",
        "texto": "Biomimetics or biomimicry is the replication of the models, systems, and elements of nature for the purpose of solving complex human problems. The terms \"biomimetics\" and \"biomimicry\" are derived from Ancient Greek: βίος (bios), life, and μίμησις (mīmēsis), imitation, from μιμεῖσθαι (mīmeisthai), to imitate, from μῖμος (mimos), actor. To combine the word to mean imitating life. A closely related f\n[…]\nAircraft wing design and flight techniques are being inspired by birds and bats. The aerodynamics of streamlined design of improved Japanese high speed train Shinkansen 500 Series were modelled after the beak of Kingfisher bird.\n[…]\nVacuoles not only isolate threats, contain what's necessary, export waste, maintain pressure—they also help the cell scale and grow. Johl argues these functions are necessary for any security system design. The 500 Series Shinkansen used biomimicry to reduce energy consumption and noise levels while increasing passenger comfort.\n[…]\nThe Bombardier beetle's powerful repellent spray inspired a Swedish company to develop a \"micro mist\" spray technology, which is claimed to have a low carbon impact (compared to aerosol sprays). The beetle mixes chemicals and releases its spray via a steerable nozzle at the end of its abdomen, stinging and confusing the victim.\n[…]\nIn 2025, researchers Yassir Turki and Kilzar Arian proposed the *Multimimicry Regenerative Model (MRM)* as an expanded framework inspired by biomimicry. The model integrates six interrelated domains—Biomimicry, Chemomimicry, Physicomimicry, Geomimicry, Cosmomimicry, and Semiomimicry—to describe how regenerative processes operate across biological, chemical, physical, geological, cosmological, and semiotic systems.\n[…]\nHargroves, K. D. & Smith, M. H. (2006). Innovation inspired by nature Biomimicry. Ecos, (129), 27–28."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A9ries_500_-_Shinkansen",
        "situacao": "ok",
        "texto": "Os comboios Shinkansen da série 500 são os mais rápidos, mais potentes e mais caros comboios a circular na rede de alta velocidade japonesa. São desenhados para serem capazes de viajar a 320 km/h, apesar de actualmente circularem a um máximo de 300 km/h em serviço regular. As rodas motrizes usam uma suspensão activa controlada por computador para uma viagem mais suave e segura.\n[…]\nVisualmente são impactantes, com o nariz longo e pontiagudo, fazendo lembrar mais um avião supersónico do que um convencional comboio de alta velocidade. Em 1990, a Hitachi encomendou à Neumeister Design da Alemanha que criasse um desenho para o novo Shinkansen, que veio a se tornar a base para o desenvolvimento da série 500.\n[…]\nQuando a nova frota da série N700 estiver completa por 2009, espera-se que os comboios da série 500 sejam realocados para outros deveres, ainda não decididos, e restrinjam-se à linha Sanyo Shinkansen. Existe a possibilidade de que venham a ser reformados e encurtados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Albatroz-errante",
      "descricao": "Grande ave marinha (Diomedea exulans) dos oceanos do Hemisfério Sul."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que ave marinha, capaz de planar por horas sobre os oceanos do sul, tem a maior envergadura entre todas as aves vivas?",
    "resposta": "Albatroz-errante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Wandering_albatross"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wandering_albatross",
        "situacao": "ok",
        "texto": "The snowy albatross (Diomedea exulans), also known as the wandering albatross, white-winged albatross, or goonie, is a large seabird from the family Diomedeidae; they have a circumpolar range in the Southern Ocean. It is the largest species of albatross and was long considered to be the same species as the Tristan albatross and the Antipodean albatross. Together with the Amsterdam albatross, it fo\n[…]\nThe snowy albatross is one of the two largest members of the genus Diomedea (the great albatrosses), being similar in size to the southern royal albatross. It has the greatest known wingspan of any living bird and is also one of the most far-ranging birds. Some individual snowy albatrosses are known to circumnavigate the Southern Ocean three times in one year, covering more than 120,000 km (75,000 mi).\n[…]\nSome experts considered there to be four subspecies of D. exulans, which they elevated to species status, and use the term wandering albatross to refer to a species complex that includes the proposed species D. antipodensis, D. dabbenena, D. exulans, and D. a. gibsoni.\n[…]\nImmature birds have been recorded weighing as much as 16.1 kg (35 lb) during their first flights (at which time they may still have fat reserves that will be shed as they continue to fly). On South Georgia, fledglings were found to average 10.9 kg (24 lb). Albatrosses from outside the \"snowy\" wandering albatross group (D. exulans) are smaller but are now generally deemed to belong to different species.\n[…]\nThe IUCN lists the snowy albatross as vulnerable status. Adult mortality is 5% to 7.8% per year as of 2003. It has an occurrence range of 64,700,000 km2 (25,000,000 sq mi), although its breeding range is only 1,900 km2 (730 sq mi).\n[…]\nLindsey, Terence (22 June 2008). Albatrosses. Csiro Publishing. ISBN 978-0-643-09852-7.\n[…]\nDo albatrosses have personalities? – YouTube video, Museum of New Zealand Te Papa Tongarewa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Albatroz-errante",
        "situacao": "ok",
        "texto": "Albatroz-errante, albatroz-gigante  ou albatroz-viageiro (Diomedea exulans) é uma ave da família Diomedeidae que ocorre na maior parte do oceano austral, das margens do gelo que circunda a Antártica (68°S) até o Trópico de Capricórnio (23°S) e, ocasionalmente, até mais ao norte, com alguns registros fora da Califórnia e no Atlântico Norte. Durante o inverno, a maior parte das aves se concentra ao \n[…]\nAs crias de albatroz-errante são quase totalmente marrons ao deixarem o ninho mas com a idade adquirem a plumagem branca e cinzenta, sendo machos mais brancos que as fêmeas. Os machos das ilhas Geórgia do Sul pesam entre 8,2 e 11,9 kg, enquanto as fêmeas, mais leves, pesam entre 6,4 e 8,7 kg. Este animal partilha com o Marabu e o condor-dos-andes a distinção de possuir a maior envergadura de asas das aves terrestres, variando de 2,90 a 3,50 metros.\n[…]\nO albatroz-errante nidifica em colônias dispersas com posturas que ocorrem entre dezembro e fevereiro e que resultam num único ovo. A incubação, partilhada por ambos os pais, dura cerca de 11 semanas e o filhote resultante leva 40 semanas para deixar o ninho (entre novembro e fevereiro). O período reprodutivo é longo (55 semanas) e bi-anual. Os albatrozes-errantes têm uma esperança de vida elevada e é provável que alguns indivíduos ultrapassem os 50 anos de idade.\n[…]\nEsta ave forrageia no talude ou fora da plataforma continental, daí seu nome de errante, onde captura presas principalmente na superfície, dada a limitada capacidade de submergir. Alimentam-se principalmente de lulas (35% da massa consumida pelos filhotes) e peixes (45%) mas também podem consumir carniça (como mamíferos marinhos mortos), tunicados, águas-vivas e crustáceos. A maior parte do alimento é obtida durante o dia, embora ocorra algum forrageamento durante as noites.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Sucuri-verde",
      "descricao": "Grande serpente constritora (Eunectes murinus) de rios e pântanos da América do Sul."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que serpente dos rios e pântanos da América do Sul é considerada a mais pesada do mundo?",
    "resposta": "Sucuri-verde",
    "fonte": [
      "https://en.wikipedia.org/wiki/Green_anaconda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Green_anaconda",
        "situacao": "ok",
        "texto": "The green anaconda (Eunectes murinus), common anaconda, common water boa, akayima, or sucuri, is a boa species found in South America. It is one of the longest and heaviest known extant snake species. Like all boas, it is a non-venomous constrictor. Green anacondas generally have a life expectancy of 10 years in the wild, although some specimens live longer when they are taken care of in captivity\n[…]\nSeveral proposals have been made to split a new species or subspecies from the green anaconda (Eunectes murinus), such as Eunectes gigas (Latreille, 1801), Eunectes barbouri (Dunn and Conant, 1936), and Eunectes akayima (Rivas et al., 2024). These proposed species are now considered synonymous with E. murinus.\n[…]\nEunectes murinus is found in South America east of the Andes, in countries including Colombia, Venezuela, the Guianas, Ecuador, Peru, Bolivia, Brazil, the island of Trinidad, and as far south as northern Paraguay. The type locality given is \"America\".\n[…]\nExamples of prey include broad-snouted caimans, spectacled caimans, yacare caimans, black caimans, smooth-fronted caimans, wattled jacanas, capybaras, red-rumped agoutis, collared peccaries, South American tapirs, boa constrictors, brown-banded water snakes, green iguanas, cryptic golden tegus, scorpion mud turtles, gibba turtles, Arrau turtles, savanna side-necked turtles, red side-necked turtles, and northern pudús. Capybaras are common prey for the green anaconda.\n[…]\nWhen no males are available, facultative parthenogenesis is possible, producing viable homozygous litter. In 2014, a green anaconda in West Midland Safari Park gave birth to three young through parthenogenesis.\n[…]\nRivas, Jesús. \"Life history and conservation of the green anaconda (Eunectes murinus)\". anacondas.org. Archived from the original on 3 March 2016. Retrieved 30 April 2012.\n[…]\nData related to Eunectes murinus at Wikispecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sucuri-verde",
        "situacao": "ok",
        "texto": "Eunectes murinus, vulgarmente conhecida como sucuri, sucuriú, sucuriju, sucuruju, sucurijuba, sucurujuba, boiaçu, boiguaçu, boiuçu, boioçu, boiçu, boiuna, boitiapoia, arigboia, anaconda e viborão, é a maior e mais conhecida das espécies existentes de sucuri. É encontrada na América do Sul, nas regiões alagadas, onde há presas em abundância, como jacarés e capivaras. Pode ultrapassar os cinco metro\n[…]\nÉ uma das maiores serpentes do mundo e a mais pesada existente, chegando aos 5,21 metros de comprimento e a uma massa de 97,5 kg, embora normalmente não passe dos 3 metros. A maior sucuri-verde já mantida em cativeiro supostamente media 6,28 metros quando morreu em 1960 no Zoológico de Pittsburgh, e pesava mais de 90 kg. Uma sucuri de 4,5 m teria aproximadamente o peso de uma píton-reticulada de 7,4 m.\n[…]\nNormalmente possuem uma massa de 30-70 kg, porém não são raros os relatos de sucuris mais pesadas. Acredita-se que uma sucuri de 8 metros pesaria por volta de 200 kg.\n[…]\nApós a detecção de sua presa, a sucuri verde, submerge e tenta encurtar a distância, o máximo possível. Enquanto se aproxima, tenta enroscar a ponta de sua cauda em algum objeto, como por exemplo, rochas ou troncos submersos. Ao chegar a uma distância ideal, emerge rapidamente em um bote, quase sempre, preciso puxando a presa para dentro da água. Enquanto inicia a constrição, a sucuri verde, tenta posicionar e manter a presa alocada de cabeça para baixo dentro da água, levando-a ao afogamento.\n[…]\nApós a morte, a serpente pode ou não emergir para respirar antes de começar a devorar a presa. A ponta de sua cauda permanece presa a algum objeto podendo trocar de objeto rapidamente, caso necessário, enquanto a presa é mantida na mesma posição. Por fim, a sucuri verde, da início a deglutição de sua presa, abocanhando sua cabeça e a engolindo até que seja completamente devorada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Falcão-peregrino",
      "descricao": "Ave de rapina (Falco peregrinus) presente em quase todo o mundo, famosa pelos mergulhos de caça."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Que ave atinge a maior velocidade de todo o reino animal, ao mergulhar do alto sobre as presas?",
    "resposta": "Falcão-peregrino",
    "distratores": [
      "Águia-real",
      "Condor-dos-andes",
      "Andorinhão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peregrine_falcon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peregrine_falcon",
        "situacao": "ok",
        "texto": "The peregrine falcon (Falco peregrinus), also referred to simply as the peregrine, is a bird of prey (raptor) in the family Falconidae known for its speed. A large, crow-sized falcon, it has a blue-grey back, barred white underparts and a black head. As is typical for bird-eating (avivore) raptors, peregrine falcons are sexually dimorphic, with females being considerably larger than males.\n[…]\nFalco peregrinus radama, described by Hartlaub in 1861, is found in Madagascar and the Comoros. It is non-migratory.\n[…]\nFalco peregrinus tundrius, described by C. M. White in 1968, was at one time included in F. p. leucogenys. It is found in the Arctic tundra of North America to Greenland, and migrates to wintering grounds in Central and South America. Most vagrants that reach western Europe belong to this subspecies, which was previously considered synonymous with F. p. anatum. It is the New World equivalent to F. p. calidus. It is smaller and paler than F. p.\n[…]\nA study testing the flight physics of an \"ideal falcon\" found a theoretical speed limit at 400 km/h (250 mph) for low-altitude flight and 625 km/h (388 mph) for high-altitude flight. Some sources state that the peregrine falcon can reach over 320 km/h (200 mph) during its stoop, which would make it the fastest animal on the planet. According to a National Geographic TV program, in 2005 Ken Franklin recorded a falcon stooping at a top speed of 389 km/h (242 mph).\n[…]\nDue to the local extinction of the eastern population of Falco peregrinus anatum, its near-extinction in the Midwest, and the limited gene pool within North American breeding stock, the inclusion of non-native subspecies was justified to optimize the genetic diversity found within the species as a whole.\n[…]\nPerilanner, a hybrid of the peregrine falcon and the lanner falcon (Falco biarmicus)\n[…]\nPerlin, a hybrid of the peregrine falcon and the merlin (Falco columbarius)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Falc%C3%A3o-peregrino",
        "situacao": "ok",
        "texto": "O falcão-peregrino (Falco peregrinus) é uma ave de rapina diurna de médio porte que pode ser encontrada em todos os continentes exceto na Antártida. A espécie prefere habitats em zonas montanhosas ou costeiras, mas pode também ser encontrado em grandes cidades como Nova Iorque. Na América do Sul, ele só surge como espécie migratória, não nidificando aqui. Como ave reprodutora, é substituído na Amé\n[…]\nNa mitologia egípcia, o falcão-peregrino (ou o falcão-lanário) é o animal utilizado para representar os deuses Hórus e Rá.\n[…]\nComo ave que frequenta ambientes urbanos atrás de presas como os pombos, o falcão-peregrino às vezes não pode consumir as aves que abate por conta do tráfego de pessoas e viaturas; em Santos, no litoral paulista, é comum achar pombos mortos abatidos por falcões-peregrinos migratórios (Falco peregrinus tundrius) e abandonados na via pública.\n[…]\nNo Inverno o Falcão-peregrino está associado a zonas abertas com abundância de presas. Dormem de noite em sítios abrigados, em superfícies rochosas, e às vezes recorrem também a árvores.\n[…]\nO falcão-peregrino é muita vezes vítima de outras aves de rapina que roubam as suas presas, à semelhança dos leopardos, que muitas vezes vêem a sua refeição assaltada por hienas. Como predador solitário, o falcão não pode arriscar morrer de inanição por ferimentos obtidos numa luta por uma presa já abatida.\n[…]\nA maior esperança de vida conhecida de um falcão peregrino em cativeiro é de 25 anos.\n[…]\nO falcão-peregrino é muito sensível ao envenenamento com inseticidas organoclorados como o DDT, com os quais entra em contacto através da gordura de suas presas, e que provocam enfraquecimento da casca de seus ovos e esterilidade. O uso do DDT afetou gravemente as populações residentes na Europa ocidental e América do Norte durante as décadas de 1950 e 1960.\n[…]\nFalcao Peregrino\n[…]\nOnde observar o falcão-peregrino\n[…]\nFicha da Falcão peregrino no Naturdata(Portugal)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Rã-golias",
      "descricao": "Rã africana (Conraua goliath) de rios de Camarões e da Guiné Equatorial."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é a maior rã do mundo, encontrada em rios de Camarões e da Guiné Equatorial?",
    "resposta": "Rã-golias",
    "distratores": [
      "Rã-touro",
      "Sapo-cururu",
      "Rã-pimenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Goliath_frog"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Goliath_frog",
        "situacao": "ok",
        "texto": "The goliath frog (Conraua goliath), otherwise known commonly as the giant slippery frog and the goliath bullfrog, is a species of frog in the family Conrauidae. The goliath frog is the largest living frog. Specimens can reach up to about 45 centimetres (18 in) in snout–vent length and 4.5 kilograms (9.9 lb) in weight. This species has a relatively small habitat range in Cameroon and Equatorial Gui\n[…]\nThe goliath frog is mainly found near waterfalls in Equatorial Guinea and Cameroon. Their habitat is divided into two main seasons: the dry season which occurs from November to April and the rainy season which occurs from May to October.\n[…]\nDue to its large size, the goliath frog has an extremely selective distribution. This species is primarily located in a dense equatorial forest fringe which is somewhat parallel to the coast and surrounded by rivers.\n[…]\nAlthough captives may live longer than their wild counterparts, the species has not been bred in captivity. Due to their classification as an endangered species, the Equatorial Guinean government has declared that no more than 300 goliath frogs may be exported per year for the pet trade, but few now seem to be exported from this country.\n[…]\nIn addition to the impacts of climate change, agriculture, and deforestation, goliath frogs are also threatened by the local practice of hunting them for food. While hunting the frogs, locals will use lanterns to get their attention, then immobilize them using mesh nets. In Nkombia, they may also be captured with nets during the day while they are resting on rocks.\n[…]\nData related to Conraua goliath at Wikispecies\n[…]\n\"Goliath frog\". The Encyclopedia of Life.\n[…]\nBBC News story about Goliath frogs\n[…]\nPhotos of goliath frogs with people at Queensland Frog Society\n[…]\nConraua goliath in the CalPhotos photo database, University of California, Berkeley\n[…]\nMedia related to Conraua goliath at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R%C3%A3-golias",
        "situacao": "ok",
        "texto": "A rã-golias (nome científico: Conraua goliath) é uma espécie africana de anfíbio anuro. Pode medir até 40 cm e pesar 3 kg. É o maior anuro existente. Tem uma capacidade de salto notória, podendo saltar cerca de 3 metros de uma só vez, embora se canse rapidamente após dois ou três saltos. A sua área de distribuição é restrita, compreendendo regiões dos Camarões e Guiné Equatorial.\n[…]\nA rã-golias é normalmente encontrada em rios próximos e de fluxo rápido com fundos arenosos nos países da África Central dos Camarões e da Guiné Equatorial. Os sistemas fluviais em que esses sapos vivem são freqüentemente encontrados em áreas densas e extremamente úmidas com temperaturas relativamente altas.\n[…]\nSeu comportamento reprodutivo há muito tempo é um mistério, mas como a maioria dos anfíbios, a água é vital para sua reprodução. Como a rã-golias  não possui um saco vocal, ela não produz chamadas de acasalamento, um comportamento geralmente presente em rãs e sapos.\n[…]\nOs machos escavam as lagoas com um metro de diâmetro, constroem piscinas limpas (áreas de desova),  empurrando as rochas para padrões semicirculares, carregando areia e pedras pesando até dois terços do seu próprio peso corporal, e fazem a reprodução ao longo dos rios acima da linha de água. As massas de ovos consistem em várias centenas até 3000 ovos, aproximadamente 3,5 mm (0,14 pol) cada, ligados à vegetação no fundo dos rios. O desenvolvimento larval leva entre 85 e 95 dias.\n[…]\nAmiet  (2004). Conraua goliath (em inglês). IUCN   2006. Lista Vermelha de Espécies Ameaçadas da IUCN. 2006. Página visitada em 16 de Junho de 2007.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Colibri-abelha",
      "descricao": "Minúsculo beija-flor (Mellisuga helenae), endêmico de Cuba, a menor ave do mundo."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O menor pássaro do mundo, um beija-flor do tamanho de uma abelha, vive apenas em que país do Caribe?",
    "resposta": "Cuba",
    "distratores": [
      "Jamaica",
      "República Dominicana",
      "Porto Rico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bee_hummingbird"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bee_hummingbird",
        "situacao": "ok",
        "texto": "The bee hummingbird, zunzuncito or Helena hummingbird (Mellisuga helenae) is a species of hummingbird, native to the island of Cuba in the Caribbean. It is the smallest known bird. The bee hummingbird feeds on flower nectar and insects.\n[…]\nThe bee hummingbird has been reported to visit ten plant species, nine of them native to Cuba.\n[…]\nThe closest evolutionary relative of the bee hummingbird is the vervain hummingbird (Mellisuga minima), the only other member of its genus. The habitats of the vervain hummingbird are in Cuba's neighboring islands, Hispaniola and Jamaica.\n[…]\nThe bee hummingbird is endemic to the entire Cuban archipelago, including the main island of Cuba and the Isla de la Juventud in the West Indies. In these regions bee hummingbirds generally live in areas of thick growth that contain lianas and epiphytes.\n[…]\nIts population is fragmented; it is found in Cuba's mogote areas in Pinar del Río Province and more commonly in Zapata Swamp (Matanzas Province) and in eastern Cuba, with reference localities in Alexander Humboldt National Park and Baitiquirí Ecological Reserve (Guantánamo Province) and Gibara and Sierra Cristal (Holguín Province)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mellisuga_helenae",
        "situacao": "ok",
        "texto": "O colibri-abelha-cubano, beija-flor-de-helena, colibri-abelha ou beija-flor-abelha (Mellisuga helenae) é uma espécie de beija-flor endêmica de Cuba e da Ilha da Juventude. É a menor ave do mundo medindo cerca de 5,7 centímetros e pesa aproximadamente 1,6 gramas, segundo o Guinness World Records. Também é chamado de beija-flor-zumbidor e zunzuncito.\n[…]\nO macho tem o píleo verde e a garganta vermelha, com plumas laterais alongadas, a parte superior é azulada, e nas partes inferiores restantes são principalmente brancas ou acinzentadas. O macho é menor que a fêmea. A fêmea é verde na parte superior, e branca na parte inferior.\n[…]\nUsando pedaços de teias de aranha, cascas e líquens, a fêmea constrói um ninho em forma de taça que é apenas cerca de 2,5 cm de diâmetro. Ela forra o ninho com fibras de plantas. Neste ninho, ela põe seus ovos, que são do tamanho de ervilhas. Ela só incuba os ovos e põe apenas dois ovos por vez.\n[…]\nO beija-flor abelha se alimenta principalmente de néctar. Com uma língua a forma de um tubo longo, o pássaro suga o néctar e o pólen gruda em seu bico ou na plumagem. Quando voa de flor em flor, ele transfere o pólen. Desta forma, ela desempenha um papel importante na reprodução das plantas. No espaço de um dia, o beija-flor abelha pode visitar até 1.500 flores.\n[…]\nCuriosidades do mundo animal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Guerra dos Emus",
      "descricao": "Operação militar de 1932 em que soldados com metralhadoras tentaram, sem sucesso, reduzir populações de emus que destruíam lavouras."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1932, soldados com metralhadoras foram enviados contra milhares de emus que destruíam plantações, e fracassaram. Em que país?",
    "resposta": "Austrália",
    "fonte": [
      "https://en.wikipedia.org/wiki/Emu_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emu_War",
        "situacao": "ok",
        "texto": "The Emu War (or Great Emu War) was a nuisance wildlife management operation undertaken by the Australian Army in late 1932.\n[…]\nMilitary involvement was due to begin in October 1932. The \"war\" was conducted under the command of Major Gwynydd Purves Wynne-Aubrey Meredith of the Royal Australian Artillery's 7th Heavy Artillery, with Meredith commanding soldiers Sergeant S. McMurray and Gunner J. O'Halloran, armed with two Lewis guns and 10,000 rounds of ammunition. The operation was delayed by a period of rainfall that caused the emus to scatter over a wider area.\n[…]\nOn 8 November, members in the Australian House of Representatives discussed the operation. Following the negative coverage of the events in the local media, which included claims that \"only a few\" emus had died, Pearce withdrew the military personnel and the guns on 8 November.\n[…]\nAfter the withdrawal of the military, the emu attacks on crops continued. Farmers again asked for support, citing the hot weather and drought that brought emus invading farms in the thousands. James Mitchell, the Premier of Western Australia, lent his strong support for the renewal of military assistance. At the same time, a report from the Base Commander was issued that indicated 300 emus had been killed in the initial operation.\n[…]\nBy December 1932, word of the Emu War had spread, reaching the United Kingdom. Some conservationists there protested the cull as \"extermination of the rare emu\". Dominic Serventy and Hubert Whittell, the eminent Australian ornithologists, described the \"war\" as \"an attempt at the mass destruction of the birds\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_aos_Emus",
        "situacao": "ok",
        "texto": "A Guerra aos Emus, também conhecida como Grande Guerra aos Emus, foi uma operação militar para gestão da vida selvagem incômoda empreendida na Austrália no final de 1932, a fim de intervir numa preocupação pública em relação ao número de emus que estaria crescendo descontroladamente no distrito de Campion na Austrália Ocidental.\n[…]\nAs tentativas falhas para reter a população de emus, a maior ave nativa da Austrália, levaram à utilização de soldados armados com metralhadoras Lewis — levando a mídia a adotar o nome \"Emu War\" (Guerra aos Emus, em português) ao se referir ao incidente.\n[…]\nO envolvimento militar deveria começar em outubro de 1932. A \"guerra\" foi conduzida sob o comando do Major G.P.W. Meredith da Sétima Bateria Pesada da Artilharia Real Australiana, com Meredith comandando os soldados Sargento S. McMurray e Gunner J. O'Hallora, armados com duas metralhadoras Lewis e 10.000 cartuchos de munição. A operação foi atrasada, no entanto, por um período de chuvas que faz os emus se espalharem por uma área mais ampla.\n[…]\nApós a retirada do exército, os emus continuaram a atacar as plantações. Os lavradores mais uma vez pediram ajuda, citando o tempo quente e a seca que trouxe milhares de emus para as plantações. James Mitchell, o Premiê da Austrália Ocidental, apoiou o retorno da ajuda militar. Ao mesmo tempo, foi lançado um relatório do comandante da base que indicava que 300 emus haviam sido mortos na operação inicial.\n[…]\nEm dezembro de 1932, a notícia da Guerra dos Emu se espalhou, chegando ao Reino Unido. Alguns conservacionistas protestaram contra o abate como \"extermínio do raro emu\". Dominic Serventy e Hubert Whittell, os eminentes ornitólogos australianos, descreveram a \"guerra\" como \"uma tentativa de destruição em massa das aves\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Axolote",
      "descricao": "Salamandra mexicana (Ambystoma mexicanum) que mantém as brânquias externas na fase adulta."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O axolote, salamandra que mantém as brânquias na fase adulta, vive na natureza nos canais de Xochimilco, em que cidade?",
    "resposta": "Cidade do México",
    "fonte": [
      "https://en.wikipedia.org/wiki/Axolotl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Axolotl",
        "situacao": "ok",
        "texto": "The axolotl ( ; from Classical Nahuatl: āxōlōtl [aːˈʃoːloːtɬ] ; Ambystoma mexicanum) is a species of mole salamander. It is neotenic, reaching sexual maturity without undergoing metamorphosis, and the adults remain fully aquatic with obvious external gills. Axolotls may be difficult to distinguish from the larval stage of other neotenic adult mole salamanders, in particular the tiger salamander, o\n[…]\nThe axolotl is native to the freshwater lakes of Xochimilco and Chalco in the Valley of Mexico (though the species may have also once inhabited the larger Lakes of Texcoco and Zumpango). Lake Chalco is an unstable ecosystem, often being drained as a flood control measure, and Lake Xochimilco is a remnant of its former self, now existing mainly as canals. The water temperature in Xochimilco rarely rises above 20 °C (68 °F), and may fall to 6–7 °C (43–45 °F) or lower in the winter.\n[…]\nAxolotls are native only to the Mexican Central Valley, and the population once extended through most of the lakes and wetlands in this region. The axolotl's natural habitat is now limited to Lake Xochimilco as a result of the expansion of Mexico City and is under pressure from the city's growth. The axolotl is on the IUCN Red List of threatened species.\n[…]\nIn 1863, a shipment of 34 adult axolotls was sent from Mexico City to the Jardin des Plantes in Paris, from which thousands of specimens were captive-bred and distributed around Europe for scientific research. Unaware of their neoteny, French zoologist Auguste Duméril was surprised when, instead of the axolotl, he found in the vivarium a new species, similar to the salamander. This discovery was the starting point of research about neoteny.\n[…]\nUniversity of KY Axolotl Colony\n[…]\nSánchez, Aminetth (31 May 2024). \"Scientists and farmers restore Aztec-era floating farms that house axolotls\". news.mongabay.com. Conservation News. Retrieved 4 June 2025."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ambystoma_mexicanum",
        "situacao": "ok",
        "texto": "O Axolote (do náuatle axolotl) (Ambystoma mexicanum) é um tipo único de salamandra que mantém suas características larvais aquáticas durante toda a vida, como as brânquias externas, em vez de passar por metamorfose como a maioria dos anfíbios. Embora essa característica seja rara, não é exclusiva dos axolotes, pois outras salamandras (ambystomatidae), como o salamandra-tigre e o Necturus, também p\n[…]\nOriginalmente, os axolotes habitavam uma rede de lagos e áreas alagadas no planalto do México, especialmente em Xochimilco e Chalco. No entanto, grande parte de seu habitat natural foi destruída após a colonização espanhola, quando os lagos foram drenados para dar lugar ao que hoje é a Cidade do México.\n[…]\nAo contrário do que ocorre com seus parentes próximos, como sapos e rãs, que passam a viver na terra quando deixam as formas larvais, os axolotes permanecem na água por toda a vida. O seu único habitat natural consiste nos lagos próximos da Cidade do México, em especial o lago Xochimilco e o lago Chignahuapan, este último no estado de Puebla. Atualmente, no lago Chignahuapan, são raramente encontrados. Isto se deve à predação dos seus ovos por espécies não autóctones introduzidas pelo homem.\n[…]\nAlém disso, a capacidade de regeneração do axolote também traz alguns problemas, uma vez que em certas zonas do México é apreciado em caldos e pela medicina naturista (como vitamínico).\n[…]\nUm artigo publicado na revista científica Nature no final de 2017 mostrava que a espécie está cada vez mais próxima da extinção. Em 1998, existiam 6000 axolotes por quilómetro quadrado na região mexicana de Xochimilco; dois anos depois, este número tinha baixado para 1000 espécimes por quilómetro quadrado. Em 2008, dez anos depois, os números eram ainda mais preocupantes: havia apenas 100 axolotes por quilómetro quadrado.\n[…]\nCriaturas Estranhas - Em busca do Axolote (Nick Baker)\n[…]\nAmbystomatidae",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Avestruz",
      "descricao": "Ave não voadora africana do gênero Struthio, a maior ave viva."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "A maioria das aves tem quatro dedos em cada pé. Quantos dedos tem cada pé do avestruz?",
    "resposta": "Dois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Common_ostrich"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Common_ostrich",
        "situacao": "ok",
        "texto": "The common ostrich (Struthio camelus), or simply ostrich, is a species of flightless bird native to certain areas of Africa (and historically, Arabia) and is the largest living species of bird. The common ostrich is one of two extant species of ostriches, the only living members of the genus Struthio in the ratite group of birds.\n[…]\nThe common ostrich was originally described by Carl Linnaeus from Sweden in his 18th-century work, Systema Naturae under its current binomial name. Its genus is derived from the Late Latin struthio meaning \"ostrich\". The specific name is an allusion to \"strouthokamelos\" the Ancient Greek name for the ostrich, meaning camel-sparrow, the \"camel\" term referring to its dry habitat. Στρουθοκάμηλος is still the modern Greek name for the ostrich.\n[…]\nThe population from Río de Oro was once separated as Struthio camelus spatzi because its eggshell pores were shaped like a teardrop and not round. As there is considerable variation of this character and there were no other differences between these birds and adjacent populations of S. c. camelus, the separation is no longer considered valid. However, a study analysing the postcranial skeleton of all living and recently extinct species and subspecies of ostriches appeared to validate S. c.\n[…]\nspatzi based on its unique skeletal proportions. This population disappeared in the latter half of the 20th century. There were 19th-century reports of the existence of small ostriches in North Africa; these are referred to as Levaillant's ostrich (Struthio bidactylus) but remain a hypothetical form not supported by material evidence.\n[…]\nFolch, A. (1992). \"Family Struthionidae (Ostrich)\". In del Hoya, Josep; Sargatal, Jordi (eds.). Handbook of the Birds of the World. Vol. 1, Ostrich to Ducks. Barcelona: Lynx Edicions. pp. 76–83. ISBN 978-84-87334-09-2."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avestruz-comum",
        "situacao": "ok",
        "texto": "O avestruz-comum (Struthio camelus) é uma espécie de ave não voadora, originária da África. É uma das duas únicas espécies vivas da família Struthionidae, do género Struthio e da ordem das Struthioniformes, juntamente com o avestruz-somali (Struthio molybdophanes), reconhecido como uma espécie separada em 2014. O avestruz-comum é considerado a maior espécie viva de ave.\n[…]\nAs penas são macias e servem como isolante térmico e são bastante diferentes das penas rígidas de pássaros voadores. Possui duas garras em dois dos dedos das asas, sendo a única ave que possui apenas 2 dedos em cada pata. As pernas fortes do avestruz não possuem penas. Suas patas têm dois dedos, sendo que apenas um tem unha enquanto o maior lembra um casco.\n[…]\nOs ovos são chocados pelas fêmeas de dia e pelo macho à noite, aproveitando as cores diferentes dos dois sexos para melhor camuflagem. O período de gestação é de 35 a 45 dias. Após a eclosão o macho cria sozinho os filhotes.\n[…]\nA fêmea principal põe em média oito ovos, raramente até doze. Cada subordinada acrescenta dois a cinco. Em ninhos comunitários grandes podem acumular-se até 80 ovos. São brilhantes, brancos, pesam até 1.900 g e medem cerca de 15 cm de diâmetro; o conteúdo equivale a 24 ovos de galinha. A casca tem 2–3 mm de espessura. Em termos absolutos são dos maiores ovos entre as aves, mas, em relação ao tamanho corporal, são os menores. O ovo não fecundado começa como uma única célula.\n[…]\nCom três meses, ocorre a muda da penugem para o plumagem juvenil. Com um ano, atingem o tamanho dos adultos. Fêmeas tornam-se sexualmente maduras aos dois anos. Machos jovens exibem a plumagem típica dos adultos já aos dois anos, mas só se reproduzem aos três ou quatro anos. Avestruzes africanos vivem cerca de 30–40 anos; em zoos podem superar 50 anos.\n[…]\nOs quatro principais produtos para comércio são:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Coruja",
      "descricao": "Ave de rapina, em geral noturna, da ordem Strigiformes, de olhos grandes voltados para a frente."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Com os olhos fixos nas órbitas, a coruja compensa girando a cabeça. Até cerca de quantos graus ela consegue girá-la?",
    "resposta": "270 graus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Owl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Owl",
        "situacao": "ok",
        "texto": "Owls are birds from the order Strigiformes (), which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight. Exceptions include the diurnal northern hawk-owl and the gregarious burrowing owl.\n[…]\nOwls can rotate their heads and necks as much as 270°. Owls have 14 neck vertebrae—humans have only seven—and their vertebral circulatory systems are adapted to allow them to rotate their heads without cutting off blood to the brain.\n[…]\nThis shape is found in other so-called nocturnal eyes, such as the eyes of strepsirrhine primates and bathypelagic fishes. Since the eyes are fixed into these sclerotic tubes, they are unable to move the eyes in any direction. Instead of moving their eyes, owls swivel their heads to view their surroundings. Owls' heads are capable of swiveling through an angle of roughly 270° in either direction, easily enabling them to see behind them without relocating the torso.\n[…]\nThe Messelasturidae, some of which were initially believed to be basal Strigiformes, are now generally accepted to be diurnal birds of prey showing some convergent evolution toward owls. The taxa often united under Strigogyps were formerly placed in part with the owls, specifically the Sophiornithidae; they appear to be Ameghinornithidae instead.\n[…]\nStrigiformes gen. et sp. indet. (Late Paleocene of Zhylga, Kazakhstan)\n[…]\nPalaeoglaux (Middle-Late Eocene of West-Central Europe) own family Palaeoglaucidae or Strigidae?\n[…]\nStrigiformes gen. et spp. indet. (Early Oligocene of Wyoming, U.S.)\n[…]\nStrigidae gen. et sp. indet. UMMP V31030 (Late Pliocene) – Strix/Bubo?\n[…]\nthe Ibizan owl, Strigidae gen. et sp. indet. – prehistoric"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Strigiformes",
        "situacao": "ok",
        "texto": "Estrigiformes são aves da ordem Strigiformes, que inclui aves de rapina, tais como corujas, mochos e murucututu. São caçadoras eficientes, usando sobretudo seus olhos extremamente aguçados e movimentos rápidos. Além disso, são extremamente atentas ao ambiente, têm grande capacidade de girar o pescoço e voar silenciosamente devido a penas especiais muito macias e numerosas que compõem suas asas. Sã\n[…]\nAlém de sua audição, as corujas também possuem modificações em sua visão relacionadas à caça noturna: a coruja-das-torres, caça no que, para nós, é considerado total escuro, além de também atuar em diferentes graus de luminosidade, como fim ou começo do dia, principalmente aquelas que vivem nos trópicos.\n[…]\nJá que nestes animais os olhos se encontram imóveis e posicionados frontalmente no disco facial, para que a coruja seja capaz de enxergar objetos em sua traseira ou laterais, é preciso que ela recorra a movimentação de sua cabeça. Dito isso, as corujas podem girar a cabeça até 270 º e aumentar, assim, seu campo de visão.\n[…]\nAo contrário do que se acredita, essa grande flexibilidade do pescoço não é incomum em aves. É suposto que isso está essencialmente relacionado a sua habilidade de voo e que durante este, aves frequentemente rotacionam seu corpo 270 ° em relação a cabeça, a qual continua estabilizada em nível constante.\n[…]\nAs mais conhecidas são as corujas-das-torres.\n[…]\nPara isso, a coruja fecha os olhos pela metade e comprime a plumagem.\n[…]\nEncontram-se em todo o mundo cerca de 218 espécies de corujas que ocupam todos os continentes, exceto a Antártida. Dessas espécies, foram registradas 24 no Brasil. Entre as espécies brasileiras encontra-se uma ampla variação de tamanhos: podem ser encontrados animais tão pequenos quanto os caburés (cerca de 60 g) e tão grandes quanto os Jucurutus (cerca de 1 kg).\n[…]\nMedia relacionados com Strigiformes no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Pombo-passageiro",
      "descricao": "Pombo norte-americano (Ectopistes migratorius) que formava bandos de bilhões e foi extinto pela caça."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Martha, a última pomba-passageira conhecida, morreu no zoológico de Cincinnati, nos Estados Unidos. Em que ano?",
    "resposta": "1914",
    "distratores": [
      "1889",
      "1939",
      "1962"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Martha_(pigeon)",
      "https://en.wikipedia.org/wiki/Passenger_pigeon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Martha_(pigeon)",
        "situacao": "ok",
        "texto": "Martha (c. 1885 – September 1, 1914) was a passenger pigeon, the last known of her species; she was named \"Martha\" in honor of Martha Washington, the first lady of the United States from 1789 to 1797.\n[…]\nSeveral years before her death Martha suffered an apoplectic stroke, leaving her weakened; the zoo built a lower roost for her as she could no longer reach her old one. Martha died at 1 p.m. on September 1, 1914, of old age. Her body was found lifeless on her cage's floor. Depending on the source, Martha was between 17–29 years old at the time of her death, although 29 is the generally accepted figure. Her death marked the extinction of the species.\n[…]\nAfter her death, Martha was quickly brought to the Cincinnati Ice Company, where she was held by her feet and frozen into a 300-pound (140 kg) block of ice. She was then sent by express train to the Smithsonian, where she arrived on September 4, 1914, and was photographed. She had been molting when she died, and as such she was missing several feathers, including some of her longer tail feathers. William Palmer skinned Martha while Nelson R. Wood mounted her skin.\n[…]\nDuring this time, she left the Smithsonian twice: in 1966 to be displayed at the Zoological Society of San Diego's Golden Jubilee Conservation Conference and in June 1974 to the Cincinnati Zoo for the dedication of the Passenger Pigeon Memorial. When the Smithsonian shut down its Birds of the World exhibit, Martha was removed from display and kept in a special exhibit at the Cincinnati Zoo.\n[…]\nEndling (Martha), an artwork by John Gerrard\n[…]\nPassenger Pigeon Martha 100 Years Later, a 2014 Cincinnati Zoo-produced documentary about Martha"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Passenger_pigeon",
        "situacao": "ok",
        "texto": "The passenger pigeon or wild pigeon (Ectopistes migratorius) is an extinct species of pigeon that was endemic to North America. Its common name is derived from the French word passager, meaning \"passing by\", due to the migratory habits of the species. The scientific name also refers to its migratory characteristics.\n[…]\nThe last captive birds were divided in three groups around the turn of the 20th century, some of which were photographed alive. Martha, thought to be the last passenger pigeon, died on September 1, 1914, at the Cincinnati Zoo. The eradication of the species is a notable example of anthropogenic extinction.\n[…]\nThe internal anatomy of the passenger pigeon has rarely been described. Robert W. Shufeldt found little to differentiate the bird's osteology from that of other pigeons when examining a male skeleton in 1914, but Julian P. Hume noted several distinct features in a more detailed 2015 description. The pigeon's particularly large breast muscles indicated a powerful flight (musculus pectoralis major for downstroke and the smaller musculus supracoracoideus for upstroke).\n[…]\nHe did so on at least two occasions; in 1903 he drew a bird possibly in one of the three aviaries with surviving birds, and some time before 1914, he drew Martha, the last individual, in the Cincinnati Zoo.\n[…]\nDuring her last four years in solitude (her cage was 5.4 by 6 m (18 by 20 ft)), Martha became steadily slower and more immobile; visitors would throw sand at her to make her move, and her cage was roped off in response. Martha died of old age on September 1, 1914, and was found lifeless on the floor of her cage. It was claimed that she died at 1 p.m., but other sources suggest she died some hours later.\n[…]\n360-degree view of Martha, the last passenger pigeon (Smithsonian Institution)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martha_%28pombo-passageiro%29",
        "situacao": "ok",
        "texto": "Martha (Zoológico de Cincinnati, 1885 — 1 de setembro de 1914) foi o último pombo-passageiro conhecido, e foi chamada de \"Martha\" em homenagem a Martha Washington.\n[…]\nEm 1857,  foi feita uma tentativa de colocar os pombos passageiros de Ohio sob proteção legal. O Senado estadual, porém, alegou que o pombo-passageiro não estava ameaçado de extinção. Sendo assim, o pombo-passageiro foi caçado até 1914.\n[…]\nMartha nasceu no Zoológico de Cincinnati, em 1885, e viveu entre outros pássaros. Em 1908, Martha e dois machos (da mesma espécie) foram considerados os últimos animais de sua espécie. Um dos machos morreu em 1909, seguido pelo outro, que morreu em 1910.\n[…]\nMartha morreu em 1 de setembro de 1914, aos 29 anos de idade, quando foi congelada e enviada para o Instituto Smithsoniano, onde foi empalhada e exposta. A partir da década de 1920 até início dos anos 1950, ela foi exibida no Salão Bird. Participou como integrante dos pássaros da Exposição Mundial de 1956 a 1999. Durante esse tempo ela deixou o Smithsonian duas vezes, em 1966 para ser apresentada na Conferência de San Diego, e em 1974 para o quando foi para o Zoológico de Cincinnati.\n[…]\nDesde então, Martha não está mais em exibição pública no Smithsonian.\n[…]\nMartha lembra-nos como uma espécie com milhões pode ser extinta - artigo no jornal público, 22 de novembro de 2017",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Dodô",
      "descricao": "Ave não voadora extinta (Raphus cucullatus), endêmica da ilha Maurício, no Oceano Índico."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Registrado pela primeira vez por marinheiros holandeses em 1598, o dodô foi extinto em que século?",
    "resposta": "Século dezessete",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dodo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dodo",
        "situacao": "ok",
        "texto": "The dodo (Raphus cucullatus) is an extinct flightless bird that was endemic to Mauritius,  an island east of Madagascar in the Indian Ocean. The dodo's closest relative was the also-extinct and flightless Rodrigues solitaire. The two formed the subtribe Raphina, a clade of extinct flightless birds that are a part of the group that includes pigeons and doves (the family Columbidae). The closest liv\n[…]\nMathurin Jacques Brisson coined the genus name Raphus (referring to the bustards) in 1760, resulting in the current name Raphus cucullatus. In 1766, Linnaeus coined the new binomial Didus ineptus (meaning \"inept dodo\"). This has become a synonym of the earlier name because of nomenclatural priority.\n[…]\nIt is unlikely the issue will ever be resolved, unless late reports mentioning the name alongside a physical description are rediscovered. The IUCN Red List accepts Cheke's rationale for choosing the 1662 date, taking all subsequent reports to refer to red rails. In any case, the dodo was probably extinct by 1700, about a century after its discovery in 1598. The Dutch left Mauritius in 1710, but by then the dodo and most of the large terrestrial vertebrates there had become extinct.\n[…]\nBaron Edmond de Sélys Longchamps coined the name Raphus solitarius for these birds in 1848, as he believed the accounts referred to a species of dodo. When 17th-century paintings of white dodos were discovered by 19th-century naturalists, it was assumed they depicted these birds. Oudemans suggested that the discrepancy between the paintings and the old descriptions was that the paintings showed females, and that the species was therefore sexually dimorphic.\n[…]\nDodo Bird Unboxing: Seven-minute video showing the Oxford specimen being taken out of storage and discussed\n[…]\nAves3D – Raphus cucullatus Archived September 23, 2023, at the Wayback Machine: Interactive 3D scans of various dodo elements"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dod%C3%B4",
        "situacao": "ok",
        "texto": "Dodô (português brasileiro) ou dodó (português europeu) (nome científico: Raphus cucullatus) é uma espécie extinta de ave da família dos pombos que era endêmica de Maurício, uma ilha no Oceano Índico a leste de Madagascar. Era incapaz de voar e não tinha medo de seres humanos, pois evoluiu isolado e sem predadores naturais na ilha que habitava. Foi descoberto em 1598 por navegadores holandeses e t\n[…]\nAs primeiras menções conhecidas de dodôs foram feitas por marinheiros holandeses em 1598. Nos anos seguintes, a ave foi predada pelas tripulações famintas e seus animais domésticos, além de sofrer com a competição com espécies invasoras introduzidas. Estima-se que apenas onze dodôs levados de Maurício chegaram vivos aos seus destinos na Europa e no Oriente. A última ocasião aceita em que a ave foi vista data de 1662.\n[…]\nA origem da palavra dodô não está clara. Alguns a atribuem a dodoor, que em holandês quer dizer \"preguiçoso\", porém é mais provável que venha de Dodaars, que pode significar \"traseiro gordo\" ou \"nó no traseiro\", referindo-se ao \"nó\" de penas na parte de trás do animal. O primeiro registro da palavra Dodaars está no diário do capitão Willem Van West-Zanen de 1602.\n[…]\nUm dos primeiros registros sobre a fauna de Maurício, do diário de van Warwijck de 1598, descreve o dodô da seguinte maneira:\n[…]\nHá algumas controvérsias envolvendo a data da extinção. O último registro amplamente aceito de um avistamento de dodô é o relato feito em 1662 pelo marinheiro náufrago Volkert Evertsz do navio holandês Arnhem, que descreveu aves capturadas em uma pequena ilhota de Maurício (atualmente acredita-se que seja a ilha Âmbar):\n[…]\nEm qualquer caso, o dodô foi provavelmente extinto em 1700, cerca de um século depois de sua descoberta em 1598. Os holandeses deixaram Maurício em 1710, mas até essa data o dodô e a maioria dos grandes vertebrados terrestres da ilha já haviam se tornado extintos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Mito do avestruz com a cabeça na areia",
      "descricao": "Crença popular, falsa, de que o avestruz enterra ou esconde a cabeça quando se sente ameaçado."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que naturalista romano do século primeiro escreveu que o avestruz se julga escondido ao enfiar a cabeça num arbusto, mito que dura até hoje?",
    "resposta": "Plínio, o Velho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Common_ostrich"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Common_ostrich",
        "situacao": "ok",
        "texto": "The common ostrich (Struthio camelus), or simply ostrich, is a species of flightless bird native to certain areas of Africa (and historically, Arabia) and is the largest living species of bird. The common ostrich is one of two extant species of ostriches, the only living members of the genus Struthio in the ratite group of birds.\n[…]\nThe common ostrich was originally described by Carl Linnaeus from Sweden in his 18th-century work, Systema Naturae under its current binomial name. Its genus is derived from the Late Latin struthio meaning \"ostrich\". The specific name is an allusion to \"strouthokamelos\" the Ancient Greek name for the ostrich, meaning camel-sparrow, the \"camel\" term referring to its dry habitat. Στρουθοκάμηλος is still the modern Greek name for the ostrich.\n[…]\nCommon ostriches typically avoid humans in the wild, since they correctly assess humans as potential predators. If approached, they often run away, but sometimes ostriches can be very aggressive when threatened, especially if cornered, and may also attack if they feel the need to defend their territories or offspring. Similar behaviour is noted in captive or domesticated common ostriches, which retain the same natural instincts and can occasionally respond aggressively to stress."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Avestruz-comum",
        "situacao": "ok",
        "texto": "O avestruz-comum (Struthio camelus) é uma espécie de ave não voadora, originária da África. É uma das duas únicas espécies vivas da família Struthionidae, do género Struthio e da ordem das Struthioniformes, juntamente com o avestruz-somali (Struthio molybdophanes), reconhecido como uma espécie separada em 2014. O avestruz-comum é considerado a maior espécie viva de ave.\n[…]\nOutra hipótese é a ilusão de ótica causada pelo ar tremulante sobre o solo quente das estepes, que faz a cabeça de um avestruz pastando “sumir” para um observador distante.\n[…]\nNa mitologia popular, o avestruz é famoso por esconder sua cabeça na areia ao primeiro sinal de perigo. O escritor romano Plínio, o Velho é notado por suas descrições do avestruz em sua História Natural, onde ele descreve o suposto hábito dos avestruzes de esconder a cabeça em arbustos. Nunca houve observações registradas deste comportamento e um contra-argumento comum a isto é que uma espécie que exibisse tal comportamento não sobreviveria por muito tempo.\n[…]\nO mito pode ter surgido do fato de que, de uma certa distância, quando avestruzes se alimentam eles parecem estar enterrando sua cabeça na areia pois eles deliberadamente engolem areia/pedras para ajudar a esmagar sua comida. Quando deitados ou se escondendo de predadores, eles são conhecidos por deitar sua cabeça e pescoço rente ao chão. Quando ameaçados, avestruzes fogem, mas podem também ferir seriamente seus inimigos através de coices por meio de suas poderosas pernas.\n[…]\nA criação de avestruzes é chamada de Estrutiocultura.\n[…]\nNa Idade Média cristã europeia, a mesma imagem podia ser interpretada de modo oposto: o avestruz, ao “esquecer” os ovos enterrados, torna-se símbolo do pecador que negligencia seus deveres para com Deus. Também é proverbial a imagem negativa do avestruz que enfia a cabeça na areia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "As Aves da América",
      "descricao": "Livro de gravuras de aves norte-americanas em tamanho natural, publicado entre 1827 e 1838."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que naturalista e pintor publicou, entre 1827 e 1838, As Aves da América, coleção de gravuras de aves em tamanho natural?",
    "resposta": "John James Audubon",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Birds_of_America",
      "https://en.wikipedia.org/wiki/John_James_Audubon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Birds_of_America",
        "situacao": "ok",
        "texto": "The Birds of America is a book by naturalist and painter John James Audubon, containing illustrations of a wide variety of birds of the United States. It was first published as a series in sections between 1827 and 1838, in Edinburgh and London. Not all of the specimens illustrated in the work were collected by Audubon himself; some were sent to him by John Kirk Townsend, who had collected them on\n[…]\nIn 1823, Audubon went to Philadelphia and New York, looking for financial support using subscriptions to enable him to publish his artwork. He sold the copper engraving plates through on a subscription basis in North America and Europe. Those subscribed obtained five plates at a time. Each subscriber received prints of three smaller birds, a larger bird and a mid-sized bird. The prints were produced from 1827 to 1838 that cost each subscriber around $1,000.\n[…]\nThe octavo edition used the text of the Ornithological biography but increased the number of plates to 500, separating some birds which had originally appeared together. Some new drawings were included, mostly by Audubon's youngest son John Woodhouse Audubon, though Audubon and members of Bowen's team also contributed.\n[…]\nThe Stark Museum of Art in Orange, Texas, owns and exhibits John James Audubon's personal copy of Birds of America.\n[…]\nRhodes, Richard (2004). John James Audubon: The Making of an American. New York: Alfred A. Knopf. ISBN 0-375-41412-6\n[…]\nNorman, Ana. \"Extinct Species in Audubon’s Birds of America\" Joel Oppenheimer Gallery, JUNE 15, 2023. https://www.audubonart.com/extinct-species-in-audubons-birds-of-america/\n[…]\nThe short film John James Audubon: The Birds of America (1986) is available for free viewing and download at the Internet Archive.\n[…]\nPopular Science Monthly/Volume 31/September 1887/Sketch of J. J. Audubon\n[…]\nGuide to resources regarding Audubon's Birds of America at Field Museum Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/John_James_Audubon",
        "situacao": "ok",
        "texto": "John James Audubon (born Jean-Jacques Rabin, April 26, 1785 – January 27, 1851) was a French-American artist, entrepreneur, naturalist, explorer, and ornithologist. His combined interests in painting and ornithology turned into a plan to make a complete pictorial record of all the bird species of North America.\n[…]\nJohn Audubon\n[…]\nIn the posthumously published book The Life of John James Audubon The Naturalist, edited by his widow and derived primarily from his notes, Audubon related visiting the northeastern Florida coastal sugar plantation of John Joachim Bulow for Christmas 1831/early January 1832. It was started by his father and at 4,675 acres, was the largest in East Florida. Bulow had a sugar mill built there under direction of a Scottish engineer, who accompanied Audubon on an excursion in the region.\n[…]\nIn 1985, the National Gallery of Art 20C History Project produced a documentary, \"John James Audubon: The Birds of America\", now widely available online.\n[…]\nIn July 2007, PBS's American Masters series aired an episode titled \"John James Audubon: Drawn from Nature\", Supplemental material is available on the PBS website.\n[…]\nJohn James Audubon, Writings & Drawings (Christoph Irmscher, ed.) (The Library of America, 1999) ISBN 978-1-883011-68-0\n[…]\nNational Audubon Society\n[…]\nWorks by John James Audubon at Toronto Public Library\n[…]\nWorks by John James Audubon at LibriVox (public domain audiobooks)\n[…]\nJohn James Audubon at American Art Gallery\n[…]\nJohn James Audubon and Audubon family letters, (ca. 1783–1845) from the Smithsonian Archives of American Art\n[…]\nBlue jay: Corvus cristatus by John James Audubon at the Cleveland Public Library Art Collection\n[…]\nAudubon Art Gallery Archived January 6, 2024, at the Wayback Machine. Online gallery of John James Audubon art prints.\n[…]\nJohn James Audubon at the National Gallery of Art."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/The_Birds_of_America",
        "situacao": "ok",
        "texto": "The Birds of America é um livro de ilustrações de John James Audubon dedicado ao tema das aves da América do Norte. A primeira edição foi feita num esquema de fascículos entregues por subscrição ao longo de doze anos. Apesar do preço exorbitante, a obra foi muito popular na sociedade vitoriana, apaixonada pelo mundo natural. O rei Jorge IV do Reino Unido foi um dos subscritores e um fã incondicion\n[…]\nThe Birds of America era composto de 435 estampas com 99 cm x 66 cm, organizadas em quatro volumes publicados entre 1827 e 1838. Cada estampa foi pintada à mão pelo próprio Audubon e representava uma espécie de ave em dimensões naturais. Esta escolha de usar a escala 1:1 obrigou a que as maiores espécies fossem representadas em posições estranhas, que coubessem na dimensão da página.\n[…]\nA coleção de aquarelas era acompanhada por um volume de texto intitulado Ornithological Biographies, de autoria do ornitólogo William MacGillivray, que continha a descrição das várias espécies. A qualidade do trabalho artístico e de impressão da primeira edição elevaram o preço da colecção a cerca de 1000 dólares americanos, uma fortuna para a época. Foram produzidos apenas 200 exemplares, a maioria dos quais incompletos.\n[…]\nApós o fim da primeira série, em 1838, Audubon procurou formas de tornar o seu livro mais acessível à classe média e recorreu então a uma oficina de litografia de Filadélfia. Esta nova edição saiu em 1844 e era uma cópia da primeira, mas como as ilustrações não eram originais de Audubon, a entrega foi mais rápida e o preço mais convidativo. Foram editados 1199 exemplares.\n[…]\nCatálogo do The Birds of America\n[…]\nThe Birds of America - Imagens em alta resolução dos 435 fólios do livro disponíveis na página da Universidade de Pittsburgh\n[…]\nPortal das aves",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cascavel",
      "descricao": "Serpente peçonhenta das Américas, do gênero Crotalus, com um chocalho na ponta da cauda."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Entre o olho e a narina, a cascavel tem uma pequena cavidade que detecta o calor das presas. Como se chama essa estrutura?",
    "resposta": "Fosseta loreal",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pit_viper",
      "https://en.wikipedia.org/wiki/Rattlesnake"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pit_viper",
        "situacao": "ok",
        "texto": "The Crotalinae, commonly known as pit vipers,  or pit adders, are a subfamily of vipers found in Asia and the Americas, distinguished by the presence of a pair of heat-sensing organs located in a pit between the eye and the nostril on each side of the head. Currently, 23 genera and 155 species are recognized, and like all other vipers, they are venomous. These are also the only viperids found in t\n[…]\nThis viper subfamily is unique in that all member species share a common characteristic – a deep pit, or fossa, in the loreal area between the eye and the nostril on either side of the head. These loreal pits are the external openings to a pair of extremely sensitive infrared-detecting organs, which in effect give the snakes a \"sixth sense\" to help them find and perhaps even judge the size of the small, warm-blooded prey on which they feed upon.\n[…]\nThe subfamily Crotalinae is found from Central Asia eastward and southward to Japan, China, Indonesia, peninsular India, Nepal, Bangladesh and Sri Lanka. In the Americas, they range from southern Canada southward to Central America to southern South America.\n[…]\nAmong the oviparous (egg-laying) pit vipers are Lachesis, Calloselasma, and some Trimeresurus species. All egg-laying crotalines are believed to guard their eggs.\n[…]\nMany young crotalines have brightly coloured tails that contrast dramatically with the rest of their bodies. These tails are known to be used by a number of species in a behavior known as caudal luring; the young snakes make worm-like movements with their tails to lure unsuspecting prey within striking distance.\n[…]\nIn the past, the pit vipers were usually classed as a separate family: the Crotalidae. Today, however, the monophyly of the viperines and the crotalines as a whole is undisputed, which is why they are treated here as a subfamily of the Viperidae.\n[…]\nList of crotaline species and subspecies"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rattlesnake",
        "situacao": "ok",
        "texto": "Rattlesnakes are venomous snakes that form the genera Crotalus and Sistrurus of the subfamily Crotalinae (the pit vipers). Rattlesnakes are predators that live in a wide array of habitats, hunting small animals such as birds and rodents.\n[…]\nThe 36 known species of rattlesnakes have between 65 and 70 subspecies, all native to the Americas, ranging from central Argentina to southern Canada. The largest rattlesnake, the eastern diamondback, can measure up to 2.4 m (7.9 ft) in length.\n[…]\nRattlesnakes are the leading cause of snakebite injuries in North America and a significant cause in Central and South America.\n[…]\nAntivenom, or antivenin, is commonly used to treat the effects of local and systemic pit viper envenomations. The first step in the production of crotaline antivenom is collecting (\"milking\") the venom of a live rattlesnake—usually from the western diamondback (Crotalus atrox), eastern diamondback (Crotalus adamanteus), South American rattlesnake (Crotalus durissis terrificus), or fer-de-lance (Bothrops atrox).\n[…]\nDogs are most commonly bitten on the front legs and head. Horses generally receive bites on the muzzle, and cattle on their tongues and muzzles. If a domesticated animal is bitten, the hair around the bite should be removed so the wound can be clearly seen. The crotaline Fab antivenom has been shown to be effective in the treatment of canine rattlesnake bites. Symptoms include swelling, slight bleeding, sensitivity, shaking, and anxiety.\n[…]\nAztec paintings, Central American temples, and the great burial mounds in the Southern United States are frequently adorned with depictions of rattlesnakes, often within the symbols and emblems of the most powerful deities.\n[…]\nList of crotaline species and subspecies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crotal%C3%ADneos",
        "situacao": "ok",
        "texto": "Os Crotalíneos (Crotalinae) por vezes chamados de crotalídeos e pelo nome vulgar de cobra-covinha ou víboras-de-fosseta  são uma subfamília de serpentes peçonhentas pertencentes á família dos Viperídeos. No passado essas víboras costumavam ser classificadas numa família própria: Crotalidae. Entretanto, atualmente a monofilia dos viperíneos e os crotalíneos é bem estudada, com ambos tratados como s\n[…]\nOs crotalíneos distinguem dos demais viperídeos porque todos os membros desta subfamília partilham uma sinapomorfia em comum – um orifício externo profundo  na região loreal, entre o olho e a narina, em cada lado da cabeça denominado fosseta loreal sendo órgãos detectores térmicos de radiação infravermelha extremamente sensíveis, que as auxilia a localizar e talvez até mesmo avaliar o tamanho de potenciais presas endotérmicas das quais se alimentam.\n[…]\nPelo menos uma espécie, a arborícola Gloydius shedaoensis da China, é documentada por selecionar um local específico de emboscada e retornar a ele todos os anos a tempo da migração de primaveril das aves. Estudos indicam que as serpentes desta espécie aprendem a calibrar a precisão de seus ataques ao longo do tempo. Acredita-se também que as fossetas sensíveis ao calor das cobras auxiliem na localização de áreas mais frescas para descanso.\n[…]\nO tamanho das ninhadas varia de dois filhotes para espécies muito pequenas, até 80 para a jararaca Bothrops atrox, que está entre as serpentes vivíparas mais prolíficas. Jovens crotalíneos têm caudas de cores vivas que contrastam dramaticamente com o resto do corpo. Sabe-se que essas caudas são usadas por várias espécies em um comportamento conhecido como engodo caudal; as cobras jovens fazem movimentos vermiformes com suas caudas para atrair presas desavisadas até o raio de ataque. .\n[…]\nCrotalus Linnaeus, 1758",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Cigana",
      "descricao": "Ave da Amazônia e do Orinoco (Opisthocomus hoazin), de crista eriçada e olho vermelho, que fermenta folhas no sistema digestivo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os filhotes da cigana, ave da Amazônia, têm garras numa parte inesperada do corpo, que usam para escalar os galhos. Em qual?",
    "resposta": "Nas asas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hoatzin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hoatzin",
        "situacao": "ok",
        "texto": "The hoatzin ( WAHT-sin, -⁠seen; also  HO-tsin and  hoh-AT-sin) (Opisthocomus hoazin) is a species of tropical bird found in swamps, riparian forests, and mangroves of the Amazon and Orinoco Basins in South America. It is the only extant species in the genus Opisthocomus which is the only extant genus in the family Opisthocomidae under the order Opisthocomiformes. Despite being the subject of inten\n[…]\nIn addition to being the earliest fossil record of an opisthocomiform, Protoazin was also the earliest find of one (1912), but it was forgotten for more than a century, being described only in 2014.\n[…]\nHoazinavis is an extinct genus of early opisthocomiforms from Late Oligocene and Early Miocene (about 24–22 Mya) deposits of Brazil. It was collected in 2008 from the Tremembé Formation of São Paulo, Brazil. It was first named by Gerald Mayr, Herculano Alvarenga and Cécile Mourer-Chauviré in 2011 and the type species is Hoazinavis lacustris.\n[…]\nNamibiavis is another extinct genus of early opisthocomiforms from early Middle Miocene (around 16 Mya) deposits of Namibia. It was collected from Arrisdrift, southern Namibia. It was first named by Cécile Mourer-Chauviré in 2003, and the type species is Namibiavis senutae.\n[…]\nIn Brazil, indigenous peoples sometimes collect the eggs for food, and the adults are occasionally hunted, but consumption of mature birds is rare, as hoatzin meat is reputed to have a bad taste. Its preferred habitats of forests and inland wetlands are threatened by Amazonian deforestation. The hoatzin is believed to remain fairly common in a large part of its range, but its population is likely decreasing due to habitat loss. The hoatzin is the national bird of Guyana."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jacu-cigano",
        "situacao": "ok",
        "texto": "O jacu-cigano, cigana ou aturiá (nome científico: Opisthocomus hoazin) é uma espécie de ave nativa da zona norte da América do Sul. O seus habitats são as zonas pantanosas e alagadas das bacias hidrográficas do Amazonas e Orinoco. É a única espécie da família Opisthocomidae e do género Opisthocomus. Em inglês, são chamados de \"hoatzin\"\n[…]\nA principal característica dos juvenis da cigana é um par de garras funcionais na ponta das asas, entre o primeiro e segundo dedos, que se perde na passagem à maturidade. Esta estrutura incomum é utilizada como forma de protecção contra predadores. Se ameaçadas por macacos ou cobras, os juvenis usam as garras para trepar pelas árvores e fugir do perigo.\n[…]\nAs ciganas são voadoras pouco eficientes, que preferem circular empoleiradas nos ramos das árvores. A falta de capacidade de voo é aparentemente consequência do tamanho relativamente grande do papo, que perturba a distribuição muscular dos músculos de voo.\n[…]\nDesde a sua descrição, em 1776, que a classificação das ciganas é fonte de polêmica na comunidade ornitológica. A espécie já foi considerada como pertencente aos Galliformes, depois Cuculiformes e actualmente o Congresso Ornitológico Internacional classifica-a numa ordem própria – os Opisthocomiformes (a taxonomia de Sibley-Ahlquist, baseada em estudos de DNA, considera as ciganas como membro basal da ordem Cuculiformes).\n[…]\nA cigana não é uma espécie ameaçada de extinção, mas a caça excessiva e degradação de habitats podem vir a ser problemas no futuro.\n[…]\n«ADW – Opisthocomidae»\n[…]\nCIGANA: UM FÓSSIL VIVO? Ave enigmática da AMAZÔNIA - YouTube",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Tuatara",
      "descricao": "Réptil da Nova Zelândia (Sphenodon punctatus), parecido com um lagarto, último sobrevivente da ordem Rhynchocephalia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O tuatara, réptil da Nova Zelândia, tem no alto da cabeça uma estrutura sensível à luz. Que apelido ela recebe?",
    "resposta": "Terceiro olho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuatara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuatara",
        "situacao": "ok",
        "texto": "The tuatara (, Māori: [ˈtʉ.a.ta.ɾa]; Sphenodon punctatus) is a species of reptile endemic to New Zealand. Despite its close resemblance to lizards, it is the only extant member of a distinct lineage, the previously highly diverse order Rhynchocephalia. The name tuatara is derived from the Māori language   and means \"peaks on the back\".\n[…]\nA 2009 paper re-examined the genetic bases used to distinguish the two supposed species of tuatara, and concluded they represent only geographic variants, and only one species should be recognised. Consequently, the northern tuatara was re-classified as Sphenodon punctatus punctatus and the Brothers Island tuatara as Sphenodon punctatus guntheri.\n[…]\nTuatara are the largest reptiles in New Zealand. Adult S. punctatus males measure 61 cm (24 in) in length and females 45 cm (18 in). Tuatara are sexually dimorphic, males being larger. The San Diego Zoo even cites a length of up to 80 cm (31 in). Males weigh up to 1 kg (2.2 lb), and females up to 0.5 kg (1.1 lb). Brothers Island tuatara are slightly smaller, weighing up to 660 g (1.3 lb).\n[…]\nWhile many of the original palatal teeth present in reptiles have been lost, as in all other known rhynchocephalians, the row of teeth growing from the palatine bones in the tuatara have been enlarged, and as in other members of Sphenodontinae the palatine teeth are orientated parallel to the teeth in the maxilla; during biting the teeth of the lower jaw slot between the two upper tooth rows.\n[…]\nSphenodon punctatus guntheri is present naturally on one small island with a population of approximately 400. In 1995, 50 juvenile and 18 adult Brothers Island tuatara were moved to Titi Island in Cook Strait, and their establishment monitored. Two years later, more than half of the animals had been seen again and of those all but one had gained weight."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tuatara",
        "situacao": "ok",
        "texto": "O tuatara (nome científico: Sphenodon spp.) é um réptil endémico da Nova Zelândia. Embora se assemelhem à maioria dos lagartos, os tuataras fazem parte de uma linhagem de répteis distinta, a ordem Rhynchocephalia (ou Sphenodontida), sendo seu único representante vivo, tendo compartilhado um ancestral comum com outros répteis por volta de 250 milhões de anos atrás. É um réptil endémico da Nova Zelâ\n[…]\nOs tuataras têm características mistas entre lagartos, tartarugas e aves.\n[…]\nO ciclo de vida destes répteis é extremamente longo e os indivíduos podem chegar aos cem anos de vida. As fêmeas levam muitos anos a atingir a maturidade sexual e põem ovos apenas de quatro em quatro anos. O período entre a copulação e a eclosão é de 12 a 15 meses. As tuataras crescem continuamente até aos 35 anos de vida. Como os lagartos, as tuataras têm um olho pineal na testa, coberto por uma escama. A função deste terceiro olho, estando ele coberto, permanece desconhecida.\n[…]\nOs olhos podem focar independentemente, com três tipos de fotorreceptores, todos com finos traços estruturais característicos de células cônicas, e um tapetum lucidum que se reflete na retina para melhorar a visão no escuro. Há também uma terceira pálpebra em cada olho, a membrana nictitante.\n[…]\nO tuatara possui um terceiro olho no topo da cabeça, denominado olho parietal. Ele tem sua própria lente, um tampão parietal que se assemelha a uma córnea, retina com estruturas semelhantes a bastonetes e conexão nervosa degenerada com o cérebro. O olho parietal é visível apenas nos filhotes, que apresentam uma mancha translúcida na parte superior central do crânio. Depois de quatro a seis meses, ele fica coberto por escamas e pigmentos opacos.\n[…]\nA Ilha Irmão do Norte é uma reserva de vida selvagem no Estreito de Cook, Nova Zelândia, e contém a única população natural da subespécie S. punctatus guntheri, com cerca de 400 indivíduos ao total.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Ema",
      "descricao": "Grande ave não voadora sul-americana (Rhea americana), a maior ave do Brasil."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na ema, a maior ave do Brasil, quem choca os ovos e cuida dos filhotes?",
    "resposta": "O macho",
    "fonte": [
      "https://en.wikipedia.org/wiki/Greater_rhea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Greater_rhea",
        "situacao": "ok",
        "texto": "The greater rhea (Rhea americana) is a species of flightless bird native to eastern South America. Other names for the greater rhea include the grey, common, or American rhea; ema (Portuguese); or ñandú (Guaraní and Spanish). One of two species in the genus Rhea, in the family Rheidae, it inhabits a variety of open areas, such as grasslands, savanna or grassy wetlands. Weighing 20–27 kilograms (44\n[…]\nThe greater rhea was formally described in 1758 by the Swedish naturalist Carl Linnaeus in the tenth edition of his Systema Naturae. He placed it with the ostriches in the genus Struthio and coined the binomial name Struthio americanus. Linnaeus based his account on the \"Nhanduguaçú\" that had been described in 1648 by the German naturalist Georg Marcgrave in his book Historia Naturalis Brasiliae.\n[…]\nFarmers sometimes consider the greater rhea pests, because they will eat broad-leaved crop plants, such as cabbage, chard and bok choy. Where they occur as pests, farmers tend to hunt and kill greater rheas. The burning of crops in South America has also contributed to their decline.\n[…]\nThe species is farmed in North America and Europe in a similar fashion to other ratites, such as the emu and ostrich. The main products are meat and eggs, but rhea oil is used for cosmetics and soaps, and rhea leather is also traded in quantity. Male greater rheas are very territorial during the breeding season. The infant chicks have high mortality in typical confinement farming situations, but under optimum free-range conditions chicks will reach adult size by their fifth month.\n[…]\nTinoco, Penha; Young, Robert Young (Jun 2006). \"The fishing rhea: a new food item in the diet of wild greater rheas\" (PDF). Sociedade Brasileira de Ornitologia. Archived from the original (PDF) on 2008-12-19.\n[…]\nExplore Species: Greater Rhea at eBird (Cornell Lab of Ornithology)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ema",
        "situacao": "ok",
        "texto": "A ema (Rhea americana), também conhecida como nandu, nandu-comum, nandu-grande, nhandu, guaripé e xuri, é uma ave da família Rheidae, nativa da América do Sul. É uma ave não voadora; e usa suas grandes asas apenas para se equilibrar enquanto corre. Os machos são os responsáveis pela incubação e o cuidado com os filhotes. A ema é considerada a maior ave brasileira.\n[…]\nRhea americana americana (Linnaeus, 1758): centro e nordeste do Brasil;\n[…]\nRhea americana araneipes (Brodkorb, 1938): oeste do Paraguai, leste da Bolívia e região do Pantanal, no Brasil;\n[…]\nRhea americana intermedia (Rothschild & Chubb, 1914): Uruguai e extremo sul do Brasil;\n[…]\nA ema é a maior e mais pesada ave do continente americano. Um macho adulto pode atingir 1,70 m de comprimento e pesar até 36 kg. A envergadura pode atingir 1,50 m de comprimento.\n[…]\nDurante o período de reprodução, o macho emite um urro forte, ventríloquo e bissilábico, lembrando um bramido de um grande mamífero, como o boi: \"bu-úp\" ou \"nan-dú\". Vocaliza até mesmo durante a noite.\n[…]\nO período reprodutivo se inicia em outubro. O macho reúne um harém de três a seis fêmeas; e estas, por sua vez, também mantêm relações com outros machos, havendo, portanto, poliginia e poliandria na espécie.\n[…]\nO macho constrói o ninho em uma depressão no solo, forrando-o com capim. Cada fêmea é capaz de pôr de 10 até 30 ovos. A incubação começa entre cinco e oito dias após as fêmeas terem iniciado a postura e pode durar de 27 a 41 dias. Os ovos eclodem todos no mesmo dia, são brancos, geralmente elípticos, e pesam, em média, 600 gramas. Os que não eclodem são colocados para fora do ninho ou devorados.\n[…]\nO macho, responsável por chocá-los, altera frequentemente a posição do ovo, girando uma volta completa (360º) a cada 24 horas. Os filhotes ficam a cuidado do pai e atingem a maturidade sexual em dois anos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Sapo-pipa",
      "descricao": "Anfíbio aquático e achatado da Amazônia (Pipa pipa), cujos ovos se desenvolvem embutidos nas costas da fêmea."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No sapo-pipa, anfíbio achatado da Amazônia, os ovos se desenvolvem em que parte do corpo da mãe?",
    "resposta": "Na pele das costas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Common_Surinam_toad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Common_Surinam_toad",
        "situacao": "ok",
        "texto": "The common Surinam toad, the Suriname toad, or star-fingered toad (Pipa pipa), is a fully-aquatic species of frog, in the family Pipidae, with a widespread range across much of tropical South America and the island of Trinidad. The females of this species are well-known for \"incubating\" their eggs on their backs, in honeycomb-like depressions directly within the skin, releasing fully-formed frogle\n[…]\nThe Surinam toad, despite its common name, is actually native to several South American countries; as well as Suriname, it is known from Brazil (primarily the states of Acre, Amazonas, Mato Grosso, Pará and Rondônia), Bolivia, Colombia, Ecuador, French Guiana, Guyana, and Venezuela, in tropical rainforest regions to the east of the Andes. Additionally, a small population may be found in the southwestern corner of the island of Trinidad, just north of Venezuela across the Columbus Channel.\n[…]\nPipa pipa has the largest geographic distribution within its genus. The Surinam toad inhabits warm, acidic, murky and slow-moving to still waterways, including streams, backwaters, ponds and seasonal pools after localized flooding; these rich waters often have a low pH due to a high concentration of organic matter and tannins.\n[…]\nThe Surinam toad is so strongly adapted for an aquatic lifestyle that on land it is helpless and scarcely able to move.\n[…]\nP. pipa employs a unique inertial suction feeding mechanism. The Surinam toad catches prey by entraining large volumes of water for ingestion and by limiting fish escape with its fingers. It uses bidirectional suction, a process the frog initiates by depressing its hyoid and retracting its clavicle.\n[…]\nThe Surinam toad is commonly cited as an example of a trypophobia trigger.\n[…]\nData related to Pipa pipa at Wikispecies\n[…]\nMedia related to Pipa pipa at Wikimedia Commons\n[…]\nPipa pipa, at Animal Diversity Web"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sapo-aru",
        "situacao": "ok",
        "texto": "Pipa pipa (L.), popularmente chamado de pipa, aru, sapo-aru, sapo-do-surinã, cururu-pé-de-pato e sapo-pipa, é uma espécie de rã nativa da América do Sul, estando presente na Bolívia, Brasil, Colômbia, Equador, Guiana Francesa, Guiana, Peru, Suriname, Trinidad e Tobago e Venezuela.\n[…]\nA reprodução ocorre quando a fêmea solta os ovos, o macho os fertiliza e os traz de volta às costas da fêmea. Os ovos se localizam em orifícios no dorso da fêmea. Quando os filhotes nascem, eles são expelidos pelos orifícios da fêmea e nadam imediatamente.\n[…]\nA espécie tem o corpo achatado, cabeça pontuda, mãos com quatro dedos com papilas sensoriais e pés com cinco dedos ligados por membranas inter digitais. Vive na água. Se alimenta de animais aquáticos. Tem a particularidade de os ovos serem incubados no dorso das fêmeas.\n[…]\nApesar de muitos dos nomes populares de Pipa pipa conterem a palavra sapo, esse anfíbio na verdade é uma espécie de rã.\n[…]\n\"Aru\" vem do termo tupi a'ru. \"Sapo-do-surinã\" é uma referência ao fato de a espécie habitar o Suriname. \"Cururu\" vem do termo tupi kuru'ru. \"Pé-de-pato\" é uma referência às patas traseiras da espécie, que têm os dedos unidos por membranas, como as dos patos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Kiwi",
      "descricao": "Ave não voadora e noturna da Nova Zelândia, do gênero Apteryx, de bico longo e fino."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Diferente de outras aves, o kiwi da Nova Zelândia fareja minhocas no chão porque tem as narinas num lugar incomum. Onde?",
    "resposta": "Na ponta do bico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kiwi_(bird)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kiwi_(bird)",
        "situacao": "ok",
        "texto": "Kiwi are flightless birds endemic to New Zealand of the order Apterygiformes. The five extant species fall into the family Apterygidae and genus Apteryx. Approximately the size of a domestic chicken, kiwi are the smallest ratites (which also include ostriches, emus, rheas, cassowaries and the extinct elephant birds and moa).\n[…]\nLice in the genus Apterygon and in the subgenus Rallicola (Aptericola) are exclusively ectoparasites of kiwi species.\n[…]\nHaast Kiwi Sanctuary (Haast tokoeka)\n[…]\nIn 1813, George Shaw named the genus Apteryx in his species description of the southern brown kiwi, which he called \"the southern apteryx\". Captain Andrew Barclay of the ship Providence provided Shaw with the specimen. Shaw's description was accompanied by two plates, engraved by Frederick Polydore Nodder; they were published in volume 24 of The Naturalist's Miscellany.\n[…]\n\"Kiwi (Apteryx spp.) recovery plan 2008–2018. (Threatened Species Recovery Plan 60)\" (PDF). Wellington: Department of Conservation. 2008. Retrieved 13 October 2011.\n[…]\n\"Great Spotted Kiwi\", Species: birds, ARKive, archived from the original on 14 June 2007, retrieved 31 October 2006.\n[…]\n\"Land birds: Kiwi\", Native animals: birds, New Zealand Department of Conservation, archived from the original on 3 October 2009, retrieved 25 July 2009.\n[…]\nKiwi recovery, BNZ Save The Kiwi Trust, archived from the original on 14 June 2012, retrieved 7 December 2004.\n[…]\nKiwi, TerraNature.\n[…]\n\"Kiwi\", Te Ara – the Encyclopedia of New Zealand, New Zealand Government, archived from the original on 8 June 2008.\n[…]\n\"North Island Brown Kiwi feeding in the wild\", YouTube (daylight video), 21 January 2010.\n[…]\nPests & threats, Taranaki Kiwi Trust, archived from the original on 2 April 2012.\n[…]\n\"1080 and kiwi – Case studies on 1080: The facts\", 1080Facts.co.nz, archived from the original on 2 December 2011."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quiu%C3%AD_%28ave%29",
        "situacao": "ok",
        "texto": "Os quiuís ou quivis (do maori; kiwi, pronuncia-se[ˈkiːwiː]) são um grupo de aves não voadoras endêmicas da Nova Zelândia, pertencentes ao gênero Apteryx, o único atual da família Apterygidae e ordem Apterygiformes. Os membros desse grupo são aproximadamente do tamanho de uma galinha doméstica, os quiuís são de longe as menores ratitas vivas (clado que também inclui avestruzes, emas e casuares).\n[…]\nO ovo do quiuí é um dos maiores em proporção ao tamanho do corpo (até 20% do peso da fêmea) de qualquer espécie de ave do mundo. Outras adaptações únicas do quiuí, como suas penas semelhantes a pelos, pernas curtas e robustas, e o uso de suas narinas na extremidade de seu bico longo para detectar presas antes mesmo de vê-las, ajudaram a ave a se tornar internacionalmente conhecida.\n[…]\nA palavra maori kiwi é geralmente aceita como sendo de origem onomatopeica do chamado dessas aves. No entanto, alguns linguistas acreditam que a palavra deriva do proto-polinésio kiwi, que originalmente se referia ao maçarico-do-pacífico (Numenius tahitiensis), uma espécie de ave migratória da família dos maçaricos que passa o inverno nas ilhas tropicais do Pacífico. Com seu bico longo e curvo e corpo marrom, o maçarico lembra levemente o quiuí.\n[…]\nAntes da chegada dos humanos no século XIII, os únicos mamíferos endêmicos da Nova Zelândia eram três espécies de morcegos, e os nichos ecológicos que em outras partes do mundo eram preenchidos por criaturas tão diversas quanto cavalos, lobos e camundongos eram ocupados por aves (e, em menor grau, répteis, insetos e gastrópodes).\n[…]\nUm quiuí já apareceu no verso de três moedas da Nova Zelândia: na moeda de um florim (dois xelins) de 1933 a 1966, na moeda de vinte centavos de 1967 a 1990 e na moeda de um dólar desde 1991. No comércio de moedas o dólar neozelandês é muitas vezes referido como \"o kiwi\".\n[…]\nKiwi recovery, BNZ Save The Kiwi Trust .\n[…]\nKiwi, TerraNature .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
