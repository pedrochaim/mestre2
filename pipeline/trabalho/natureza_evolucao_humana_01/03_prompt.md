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
7. **Distratores** (só em `multipla`): críveis, da mesma categoria da resposta e com no máximo 4 palavras (MANIFESTO §6).
8. **Duplicatas:** se duas perguntas do lote perguntam o mesmo fato, mantenha a melhor e descarte a outra.

Devolva exatamente uma avaliação para cada pergunta, usando o `indice` informado.

# Lote

[
  {
    "indice": 1,
    "ancora": {
      "nome": "Lucy",
      "descricao": "Esqueleto fóssil de Australopithecus afarensis com cerca de 3,2 milhões de anos, achado em Hadar, na Etiópia, em 1974."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido do fóssil Lucy, achado em 1974, veio de uma música que tocava no acampamento dos pesquisadores. De que banda era essa música?",
    "resposta": "The Beatles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)",
        "situacao": "ok",
        "texto": "AL 288-1, commonly known as Lucy or Dinkʼinesh (Amharic: ድንቅ ነሽ, romanized: dənqə näš, lit. 'you are marvellous'), is a collection of several hundred pieces of fossilized bone comprising 40% of the skeleton of a female of the hominin species Australopithecus afarensis. It was discovered in 1974 in Ethiopia, at Hadar, a site in the Awash Valley of the Afar Triangle by Donald Johanson, a paleoanthro\n[…]\nLucy was named by Pamela Alderman as the namesake of the 1967 song \"Lucy in the Sky with Diamonds\" by the Beatles, which was played loudly and repeatedly in the expedition camp all evening after the excavation team's first day of work on the Hadar recovery site. After public announcement of the discovery, Lucy captured much international interest, becoming a household name at the time.\n[…]\nIn the afternoon, all members of the expedition returned to the gully to section off the site and prepare it for careful excavation and collection, which eventually took three weeks. That first evening they celebrated at the camp; and at some stage during the evening they named fossil AL 288-1 \"Lucy\", after the Beatles' song \"Lucy in the Sky with Diamonds\" (1967), which was being played loudly and repeatedly on a tape recorder in the camp.\n[…]\nIn August 2025, Lucy, along with another hominid fossil, Selam (Australopithecus), were transported to the Czech Republic for a two-month exhibition at the Czech National Museum in Prague.\n[…]\n\"Australopithecus afarensis, Lucy's species\", nhm.ac.uk, Natural History Museum, London. (First published 29 November, [1]).\n[…]\nBased on computer simulations of the mechanics of motion in fossil human ancestors such as the famous 'Lucy' skeleton, our research group has long argued that early human ancestors would have walked upright, rather than semi-crouched, as the old 'up from the apes' view has suggested But we have not been able to say where such upright walking originated."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lucy_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Lucy é um fóssil de Australopithecus afarensis de 3,2 milhões de anos, descoberto em 1974 pelo professor Donald Johanson, um norte-americano antropólogo e curador do museu de Cleveland de História Natural e pelo estudante Tom Gray em Hadar, no deserto de Afar, na Etiópia quando uma equipe de arqueólogos fazia escavações. Chama-se Lucy por causa da canção \"Lucy in the Sky with Diamonds\" da banda br\n[…]\nNa parte da tarde, todos os elementos da expedição estavam no local, dividindo-o em quadrículas e preparando-se para uma coleta que estimaram levar três semanas. Naquela primeira noite celebraram no acampamento, acordados a noite toda, e em algum momento durante essa noite, o fóssil \"AL 288-1\" foi apelidado de Lucy, por causa da canção dos Beatles Lucy in the Sky with Diamonds, que fora tocada alto e repetidamente em um gravador no acampamento.\n[…]\nLucy deixou de ser o esqueleto de hominídeo mais antigo após a descoberta de um novo fóssil da espécie \"Ardipithecus ramidus\", que viveu há 4,4 milhões de anos.\n[…]\nA turnê foi aprovada pelo governo etíope e organizado com a colaboração do Museu de Ciência Natural de Houston, onde esteve em exposição de 31 de agosto de 2007 até 1 de setembro de 2008, junto com um filme Digital em um \"dome theater\" (planetário) sobre as origens de \"Lucy\" chamado Lucy’s Cradle, the Birth of Wonder, com música de Shai Fishman Uma das propostas da tournê era a de levantar fundos para a modernização dos museus da Etiópia. O Departamento de Estado dos EUA também aprovou a turnê.\n[…]\n\"Lucy\" estreou na, uma instalação nova em Nova Iorque em 24 de junho de 2009. O \"Australopithecus afarensis\" ficou em exposição de 25 de outubro de 2009. Em Nova York, a exibição incluirá Ida (Plate B), a outra metade o recentemente anunciado fóssil \"Darwinius masilae\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Lucy",
      "descricao": "Esqueleto fóssil de Australopithecus afarensis com cerca de 3,2 milhões de anos, achado em Hadar, na Etiópia, em 1974."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1974, na Etiópia, que paleoantropólogo americano encontrou o esqueleto de Lucy?",
    "resposta": "Donald Johanson",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)",
      "https://en.wikipedia.org/wiki/Donald_Johanson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lucy_(Australopithecus)",
        "situacao": "ok",
        "texto": "AL 288-1, commonly known as Lucy or Dinkʼinesh (Amharic: ድንቅ ነሽ, romanized: dənqə näš, lit. 'you are marvellous'), is a collection of several hundred pieces of fossilized bone comprising 40% of the skeleton of a female of the hominin species Australopithecus afarensis. It was discovered in 1974 in Ethiopia, at Hadar, a site in the Awash Valley of the Afar Triangle by Donald Johanson, a paleoanthro\n[…]\nUnder his directorship, these were: Donald Johanson (co-director)—an American paleoanthropologist and curator at the Cleveland Museum of Natural History, who later founded the Institute of Human Origins, now of Arizona State University; Yves Coppens (1934–2022, co-director)—a French paleoanthropologist and professor at the Collège de France, considered France's most prestigious research establishment; and Mary Leakey, the noted British paleoanthropologist.\n[…]\nIn 2016, researchers at the University of Texas at Austin suggested that Lucy died after falling from a tall tree. However, Donald Johanson and Tim White disagreed with this conclusion.\n[…]\nThere was controversy in advance of the tour over concerns about the fragility of the specimens, with various experts including paleoanthropologist Owen Lovejoy and anthropologist and conservationist Richard Leakey publicly stating their opposition, while discoverer Don Johanson, despite concerns for the possibility of damage, felt the tour would raise awareness of human origins studies.\n[…]\n\"Australopithecus afarensis, Lucy's species\", nhm.ac.uk, Natural History Museum, London. (First published 29 November, [1]).\n[…]\n\"Becoming Human: Paleoanthropology, Evolution, and Human Origins\", a documentary hosted by Donald Johanson\n[…]\n\"Lucy: American Museum of Natural History\". AMNH / Rod Mickens. Retrieved February 19, 2014.\n[…]\nNational Public Radio \"Science Friday\" interview with Dr. Donald Johanson titled \"Lucy's Legacy\" originally aired on March 6, 2009."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Donald_Johanson",
        "situacao": "ok",
        "texto": "Donald Carl Johanson (born June 28, 1943) is an American paleoanthropologist. He is best known for discovering the fossil of a female hominin australopithecine known as \"Lucy\" in the Afar Triangle region of Hadar, Ethiopia.\n[…]\nLucy was discovered in Hadar, Ethiopia on November 24, 1974, when Johanson, coaxed away from his paperwork by graduate student Tom Gray for a spur-of-the-moment survey, caught the glint of a white fossilized bone out of the corner of his eye and recognized it as hominin. Forty percent of the skeleton was eventually recovered and was later described as the first known member of Australopithecus afarensis. Johanson was astonished to find so much of her skeleton all at once.\n[…]\nJohanson, Donald; Maitland Edey (1981). Lucy: The Beginnings of Humankind. New York: Simon and Schuster. ISBN 0-671-25036-1.\n[…]\nJohanson, Donald; James Shreeve (1989). Lucy's Child: The Discovery of a Human Ancestor. London: Viking. ISBN 0-670-83366-5.\n[…]\nJohanson, Donald; Blake Edgar (1996). From Lucy to Language. New York: Simon & Schuster. ISBN 0-684-81023-9.\n[…]\nJohanson, Donald; Giancarlo Ligabue (1999). Ecce Homo: Writings in Honour of Third Millennium Man. Milan: Electa. ISBN 88-435-7170-2.\n[…]\nJohanson, Donald; Kate Wong (2009). Lucy's Legacy: The Quest for Human Origins. New York: Harmony Books. ISBN 978-0-307-39639-6.\n[…]\n\"Donald C. Johanson, Ph.D. Biography and Interview\". www.achievement.org. American Academy of Achievement.\n[…]\n\"Origins of Modern Humans: Multiregional or Out of Africa?\" by Donald Johanson\n[…]\nWorks by or about Donald Johanson at the Internet Archive\n[…]\nStuds Terkel Radio Archive. \"Donald Johanson discusses his book Lucy: The Beginnings of Humankind\" – March 16, 1981, interview with Studs Terkel."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lucy_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Lucy é um fóssil de Australopithecus afarensis de 3,2 milhões de anos, descoberto em 1974 pelo professor Donald Johanson, um norte-americano antropólogo e curador do museu de Cleveland de História Natural e pelo estudante Tom Gray em Hadar, no deserto de Afar, na Etiópia quando uma equipe de arqueólogos fazia escavações. Chama-se Lucy por causa da canção \"Lucy in the Sky with Diamonds\" da banda br\n[…]\nO geólogo francês Maurice Taieb descobriu a Formação Hadar, na Etiópia, em 1972. Para pesquisá-la constituiu a International Research Expedition Afar (IREA), convidando para integrar a equipe o antropólogo americano Donald Johanson (fundador e director do Instituto de Origens Humanas da Universidade Estadual do Arizona), a arqueóloga britânica Mary Leakey, e o paleontólogo francês Yves Coppens (hoje no Collège de France) para codirigir a investigação.\n[…]\nNo ano seguinte, a equipe voltou para a segunda temporada de campo, e encontrou mandíbulas de hominídeos. Na manhã de 24 de novembro de 1974, próximo ao rio Awash, Johanson desistiu de atualizar as suas notas de campo e juntou-se ao aluno de pós-graduação, Tom Gray do Texas, dirigindo-se de Land Rover para o local 162 para buscar por fósseis de ossos.\n[…]\nCom a permissão do governo da Etiópia, Johanson trouxe o esqueleto para Cleveland, onde foi reconstruído por Owen Lovejoy. Ele foi devolvido de acordo com o contrato assinado, cerca de nove anos mais tarde.\n[…]\nO descobridor do fóssil Donald Johanson declarou que apesar de se sentir incomodado com a possibilidade de danos ao fóssil, ele não se oporia à exibição de \"Lucy\" já que isso ajudaria nos estudos da origem humana. O museu providenciou para que as exposições fossem vistas em outros dez museus. A exposição ocorreu no Centro de Ciência do Pacífico em Seattle, Washington de 4 de outubro de 2008 a 8 de março de 2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Vale de Neander",
      "descricao": "Vale do rio Düssel, perto de Düsseldorf, na Alemanha, onde foi achado em 1856 o fóssil que deu nome ao homem de Neandertal."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O vale alemão que deu nome ao homem de Neandertal homenageia um homem do século dezessete. Que tipo de artista ele era?",
    "resposta": "Compositor de hinos religiosos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Joachim_Neander",
      "https://en.wikipedia.org/wiki/Neandertal_(valley)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Joachim_Neander",
        "situacao": "ok",
        "texto": "Joachim Neander (1650 – 31 May 1680) was a German Calvinist teacher, theologian and hymnwriter whose most famous hymn is Praise to the Lord, the Almighty, the King of Creation (German: Lobe den Herren, den mächtigen König der Ehren).\n[…]\nIn 1671 he became a private tutor in Heidelberg, and in 1674 he became a teacher in a Latin school in Düsseldorf, one step before becoming a pastor. Neander was a supporter of the reformer Jean de Labadie, which caused tensions with his employers. While living in Düsseldorf, he liked to go to the nearby valley of the Düssel river, nature being the inspiration for his poems. He also held gatherings and services in the valley, at which he gave sermons.\n[…]\nThis valley was later named  Neandertal after him, which also led to the naming of Neanderthal remains found there.\n[…]\nAndreas L. Hofbauer: Meine Taube / in den Felßlöchern / in dem Verborgene der Steinritzen / laß mich hören deine Stimme. Ad Joachim Neander. In: Dirk Matejovski, Dietmar Kamper, Gerd-C. Weniger (eds.), Mythos Neanderthal, Frankfurt/New York 2001, ISBN 3-593-36751-3.\n[…]\nW. Nelle: Joachim Neander, der Dichter der \"Bundeslieder\" und \"Dankpsalmen\". Hamburg 1904.\n[…]\nJoachim Neander: Bundeslieder und Dankpsalmen von 1680 mit ausgesetztem Generalbaß von Oskar Gottlieb Blarr. (Schriftenreihe des Vereins für Rheinische rJoachim Neander: Bundes-Lieder und Dank-Psalmen. Facsimile reprint of the first edition, Bremen 1680, with studies by Thomas Elsmann and Oskar Gottlieb Blarr. Bremen: Schünemann 2009, 192, 34 pp.\n[…]\nFree scores by Joachim Neander in the Choral Public Domain Library (ChoralWiki)\n[…]\nWorks by or about Joachim Neander at the Internet Archive\n[…]\nWorks by Joachim Neander at Open Library\n[…]\nHymnary entry for Joachim Neander"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neandertal_(valley)",
        "situacao": "ok",
        "texto": "The Neandertal (, also US: , German: [neˈʔandɐtʰaːl] ; sometimes called \"the Neander Valley\" in English) is a small valley of the river Düssel in the German state of North Rhine-Westphalia, located about 12 km (7.5 mi) east of Düsseldorf, the capital city of North Rhine-Westphalia. The valley lies within the limits of the towns of Erkrath and Mettmann. In August 1856, the area became famous for th\n[…]\nDuring the 19th century, the valley was called Neanderhöhle (Neander's Cave) and, after 1850, Neanderthal. It was named after Joachim Neander, a 17th-century German pastor and hymnwriter. Neander is the Graeco-Roman translation of his family name Neumann; both names mean \"new man\". Neander lived in nearby Düsseldorf and loved the valley for giving him the inspiration for his compositions.\n[…]\nIn 1901, an orthographic reform in Germany changed the spelling of Thal (valley) to Tal. Scientific names, such as Homo neanderthalensis and Homo sapiens neanderthalensis for Neanderthal remained unchanged, because the laws of taxonomy retain the original spelling at the time of naming. However, Neanderthal station never changed its name to conform with the new German orthography and the modern Neanderthal Museum retains the original spelling.\n[…]\nLong after the initial discovery of the Neanderthal specimen from the valley, the discarded deposits from the cave were rediscovered and then excavated in 1997 and 2000. These excavations yielded multiple artifacts and human skeletal fragments. Two cranial fragments seem to fit onto the original Neandertal 1 calotte (bones of the cranial vault). Other pieces include bones or teeth from at least two other individuals, and DNA sequencing has confirmed that one of them was also a Neanderthal.\n[…]\nNeanderthal Museum\n[…]\nNeanderthal Man type site rediscovered"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Joachim_Neander",
        "situacao": "ok",
        "texto": "Joachim Neander (Bremen, 1650 – Bremen, 31 de maio de 1680) foi teólogo reformado (calvinista), poeta e compositor de música sacra alemão.\n[…]\nEra originário de uma família de eclesiásticos que transformou seu nome alemão, Neumann, em grego, Neander, seguindo a moda da sua época. Ele estudou teologia  reformada  em Bremen mas nunca foi ordenado pastor. Trabalhou como pedagogo em Heidelberg e Frankfurt am Main, onde conheceu o teólogo Philip Jacob Spener, criador do Collegia pietatis e do movimento pietista.\n[…]\nEm  1674 tornou-se professor de latim e assistente de pastor em Düsseldorf. Enquanto vivia lá, gostava de ir a um local situado no vale do rio Düssel, buscando a inspiração para seus poemas na natureza. Ali também costumava organizar encontros e cultos muito concorridos.\n[…]\nO lugar, que ficou conhecido como  Neanderthal (em alemão contemporâneo, Neandertal, que significa \"Vale de Neander\"), tornar-se-ia famoso a partir de  1856, quando ali foram encontrados os restos do chamado homem de  Neanderthal.\n[…]\nAparentemente, a pregação pietista  de Neander acabaria por lhe causar problemas com os líderes da igreja reformada de Düsseldorf. Acusado de promover o separatismo, em 1679  ele retorna a Bremen, onde morreria pouco depois, aos 30 anos, em consequência de tuberculose, no dia 31 de maio de 1680.\n[…]\nNo último ano de sua vida, Neander compôs o hino Lobe den Herren, den mächtigen König der Ehren (\"Louva ao Senhor, o todo-poderoso rei da criação\"), presente em inúmeros hinários e  base de muitas composições, como as cantatas homônimas de Johann Sebastian Bach.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Homo floresiensis",
      "descricao": "Espécie humana extinta, de baixa estatura, descoberta em 2003 na caverna Liang Bua, na ilha de Flores, Indonésia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que apelido, tirado das histórias de Tolkien, ganhou a espécie humana extinta descoberta em 2003 na ilha indonésia de Flores?",
    "resposta": "Hobbit",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_floresiensis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis ( ), also known as \"Flores Man\" or \"Hobbit\" (after the fictional species), is an extinct species of small archaic humans that inhabited the island of Flores, Indonesia, until the arrival of modern humans about 50,000 years ago.\n[…]\nHomo floresiensis was swiftly nicknamed \"the hobbit\" by the discoverers, after the fictional race popularized in J. R. R. Tolkien's book The Hobbit, and some of the discoverers suggested naming the species H. hobbitus.\n[…]\nIn October 2012, a New Zealand scientist due to give a public lecture on Homo floresiensis was told by the Tolkien Estate that he was not allowed to use the word \"hobbit\" in promoting the lecture.\n[…]\nThe film was blocked from release because of a legal dispute over the use of the word \"hobbit.\" The Asylum argued that the film did not violate the Tolkien copyright because the film was about H. floresiensis, \"uniformly referred to as 'Hobbits' in the scientific community.\" The film was finally released under its new title, Clash of the Empires.\n[…]\nHomo luzonensis – Archaic human from Luzon, Philippines\n[…]\nMorwood, Mike; Oosterzee, Penny van (2007). A New Human: The Startling Discovery and Strange Story of the \"Hobbits\" of Flores, Indonesia. Smithsonian Books. ISBN 978-0-06-089908-0.\n[…]\n\"Another diagnosis for a hobbit\". 3 July 2007. Archived from the original on 18 July 2007.\n[…]\nPurdy, Michael C. (3 March 2005). \"'Hobbit' fossil likely represents new branch on human family tree\" (source.wustl.edu). Washington University in St. Louis. Retrieved 20 June 2024.\n[…]\n\"Hobbits in the Haystack: Homo floresiensis and Human Evolution\". turkanabasin.org (Turkhana Basin Institute presentation at the Seventh Stony Brook Human Evolution Symposium). 21 April 2009. Retrieved 20 June 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis (homem de flores), apelidado de \"Hobbit\", é uma espécie extinta de hominínio do gênero Homo.\n[…]\nO nome do gênero Homo tem origem no latim, derivando a palavra homem em português. O termo para a espécie floresiensis remete ao local em que os ossos foram descobertos e onde os indivíduos viveram, na Ilha de Flores, Indonésia. Portanto, o nome científico Homo floresiensis pode ser traduzido para o português como o homem de flores.\n[…]\nAlém do nome científico, os cientistas que descobriram a espécie também criaram um nome popular, com maior apelo publicitário. Tomando como inspiração o universo fantasioso de J. R. R. Tolkien criado no livro \"O Hobbit\" e as características diminutas da espécie, o homem de flores foi apelidado de \"Hobbit\". Devido ao Tolkien Estate, a ideia inicial de chamar o Homo floresiensis de Homo hobbitus teve de ser abandonada por razões legais.\n[…]\nH. floresiensis seria um descendente de Homo habilis;\n[…]\nEm 2015,a rede de canais Discovery produziu o mocumentário Na Trilha dos Hobbits,segundo o qual,um grupo formado por 2 cientistas americanos e um guia local teria encontrado um grupo sobrevivente de Homo Floresiensis,nos anos 1970. Segundo o filme,as criaturas teriam atacado o grupo pesquisador,matado um dos cientistas e o guia. O governo local,não acreditando na \"versão\" de criaturas da floresta,teria mandado prender o cientista sobrevivente por assassinato.\n[…]\nThe Hobbit Enigma. Documentário, Austrália, 2008, 52 Min, escrito e dirigid:. Annamaria Talas, Simon Nasht. Resumo.\n[…]\n«FOLHA: Análise do pé distancia \"Hobbit\" da espécie humana»\n[…]\nA volta do hobbit no El País Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Homo floresiensis",
      "descricao": "Espécie humana extinta, de baixa estatura, descoberta em 2003 na caverna Liang Bua, na ilha de Flores, Indonésia."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Homo floresiensis, espécie humana extinta achada numa ilha da Indonésia, media aproximadamente quanto de altura?",
    "resposta": "Cerca de um metro",
    "distratores": [
      "Cerca de meio metro",
      "Cerca de um metro e meio",
      "Cerca de um metro e oitenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_floresiensis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis ( ), also known as \"Flores Man\" or \"Hobbit\" (after the fictional species), is an extinct species of small archaic humans that inhabited the island of Flores, Indonesia, until the arrival of modern humans about 50,000 years ago.\n[…]\nIan Tattersall argues that the species is wrongly classified as Homo floresiensis as it is far too archaic to assign to the genus Homo.\n[…]\nHomo floresiensis was swiftly nicknamed \"the hobbit\" by the discoverers, after the fictional race popularized in J. R. R. Tolkien's book The Hobbit, and some of the discoverers suggested naming the species H. hobbitus.\n[…]\nIn October 2012, a New Zealand scientist due to give a public lecture on Homo floresiensis was told by the Tolkien Estate that he was not allowed to use the word \"hobbit\" in promoting the lecture.\n[…]\nMorwood, Mike; Oosterzee, Penny van (2007). A New Human: The Startling Discovery and Strange Story of the \"Hobbits\" of Flores, Indonesia. Smithsonian Books. ISBN 978-0-06-089908-0.\n[…]\n\"Another diagnosis for a hobbit\". 3 July 2007. Archived from the original on 18 July 2007.\n[…]\n\"Homo floresiensis\". humanorigins.si.edu. The Smithsonian Institution's Human Origins Program. July 2022. Retrieved 20 June 2024.\n[…]\nObendorf, Peter; Oxnard, Charles E.; Kefford, Ben J. (5 March 2008). \"Were Homo floresiensis just a population of myxoedematous endemic cretin Homo sapiens?\". Proceedings of the Royal Society B: Biological Sciences (blog commentary on the Obendorf paper). -1 (–1): –1.{{cite journal}}:  CS1 maint: deprecated archival service (link)\n[…]\n\"Hobbits in the Haystack: Homo floresiensis and Human Evolution\". turkanabasin.org (Turkhana Basin Institute presentation at the Seventh Stony Brook Human Evolution Symposium). 21 April 2009. Retrieved 20 June 2024."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_floresiensis",
        "situacao": "ok",
        "texto": "Homo floresiensis (homem de flores), apelidado de \"Hobbit\", é uma espécie extinta de hominínio do gênero Homo.\n[…]\nOs primeiros ossos foram descobertos em 2003 durante uma escavação arqueológica em uma caverna em Liang Bua, Ilha de Flores, na Indonésia. O primeiro fóssil encontrado em Flores foi o esqueleto quase completo de uma mulher, com o crânio por inteiro, referenciado como \"LB1\". Esse registro tem como característica a baixa estatura, chegando a somente 1 metro de altura, e a baixa capacidade craniana e foi datado para o final do Pleistoceno.\n[…]\nNa primeira descrição em 2004, o crânio LB1 foi datado usando o método de radiocarbono e a idade aproximada foi de 18.000 anos, os achados restantes foram datados com cerca de 38.000 anos. Além de LB1, a mandíbula LB6 também foi datada e sua idade é dada em cerca de 15.000 anos. Em 2005, utilizando técnicas de termoluminescência, a idade máxima dos achados fósseis do Homo floresiensis foi estimada entre 95.000 e 74.000 anos, a idade mínima em torno de 12.000 anos.\n[…]\nEbu Gogo é uma criatura folclórica da ilha de Flores que, segundo a lenda, devorava de tudo, inclusive carne humana. São descritas com riqueza de detalhes como criaturas com cerca de um metro de altura, peludas, com orelhas salientes e barrigas redondas, sendo que as fêmeas possuíam longos seios pendentes, além de um andar desajeitado com braços e dedos longos. Além disso, é relatado que essas criaturas murmuravam entre elas e conseguiam repetir palavras que ouviam, como um papagaio.\n[…]\n«FOLHA: Análise do pé distancia \"Hobbit\" da espécie humana»\n[…]\nA volta do hobbit no El País Brasil",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Homo naledi",
      "descricao": "Espécie humana extinta descoberta em 2013 no sistema de cavernas Rising Star, na África do Sul."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua sesoto, o que significa naledi, palavra que batiza uma espécie humana descoberta em 2013 numa caverna sul-africana?",
    "resposta": "Estrela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_naledi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_naledi",
        "situacao": "ok",
        "texto": "Homo naledi is an extinct species of archaic human discovered in 2013 in the Rising Star Cave system, Gauteng province, South Africa, part of the Cradle of Humankind, dating back to the Middle Pleistocene 335,000–236,000 years ago. The excavation comprises 1,550 specimens of bone, representing 737 different skeletal elements, and at least 15 different individuals. Despite this exceptionally high n\n[…]\nThe Lesedi specimen is more within the range of H. habilis and H. e. georgicus. The encephalization quotient of H. naledi was estimated at 3.75, which is the same as the pygmy H. floresiensis, but notably smaller than all other Homo. Contemporary Homo were all above 6, H. e. georgicus at 3.55, and A. africanus at 3.81. It is unclear whether H. naledi inherited small brain size from the last common Homo ancestor, or whether it was evolved secondarily and more recently.\n[…]\nUnlike Homo, the H. naledi thumb metacarpal joint is comparably small, relative to the thumb's length, and the thumb phalangeal joint is flattened. The distal thumb phalanx bone is robust, and proportionally more similar to those of H. habilis and P. robustus.\n[…]\nH. naledi occupied a seemingly unique ecological niche from previous South African hominins, including Australopithecus and Paranthropus. The teeth of all three species indicate that they needed to exert high shearing force to chew through perhaps plant or muscle fibres. The teeth of other Homo cannot produce such high forces perhaps due to the use of some food processing techniques, such as cooking.\n[…]\nBerger, L. R.; Hawks, J. D. (2017). Almost Human: The astonishing tale of Homo naledi and the discovery that changed our human story. Washington, DC: National Geographic Society. ISBN 978-1-4262-1811-8.\n[…]\n\"Three-dimensional scans of Homo naledi fossils\". MorphoSource. Archived from the original on 16 July 2016. Retrieved 8 October 2015."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_naledi",
        "situacao": "ok",
        "texto": "Homo naledi é uma espécie extinta da tribo Hominini, uma nova espécie de hominídeo, anunciada em 2015, que tem características do pré-humano Australopithecus e poderia ser a espécie mais antiga do gênero Homo. A espécie é caracterizada por ter estatura e massa corporal semelhantes a populações humanas de pequena estatura mas com um pequeno volume endocranial semelhante aos australopithecus.\n[…]\nOs fósseis foram descobertos, em 2013 por Lee Berger e colaboradores, dentro do sistema de câmaras Dinaledi no Sistema de Cavernas Estrela Ascendente, sítio considerado Patrimônio Mundial a 50 km de Joanesburgo, na África do Sul. O anúncio se deu em setembro de 2015 pela equipe responsável pela investigação. As cavernas da Estrela Ascendente já haviam sido mapeadas na época da descoberta dos fósseis.\n[…]\nO nome da espécie é uma referência à caverna de Dinaledi, onde foram encontrados, no sistema de caverna Rising Star, na África do Sul. O termo \"naledi\" significa \"estrela\" em Sotho (também chamada de Sesotho), que é uma das línguas faladas na África do Sul.\n[…]\nUm estudo publicado pela Universidade de Washington descobriu os restos de Homo naledi em cavernas na África do Sul. Os restos mortais encontrados têm aproximadamente entre 236 000 e 335 000 anos, indicando que em um determinado período, o Homo naledi pode ter de fato coexistido com Homo sapiens.\n[…]\nEm 2023, Lee Berger e colegas novamente publicaram um artigo reafirmando evidências de sepultamento deliberado dos mortos pelo H. naledi. Através de novas escavações realizadas Sistema de Cavernas Estrela Ascendente, forneceram evidências de pelo menos três características de sepultamento, duas na Câmara Dinaledi e uma terceira na cavidade da Antecâmara da Colina.\n[…]\nReconstruído crânio de Homo naledi, o elo que não se encaixa na evolução humana, por EFE, zap.aeiou.pt, 26 Abril, 2018\n[…]\nReconstruções de H. naledi pelo paleoartista John Gurche",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto humano pré-histórico de mulher, com cerca de 11 mil anos, achado na Lapa Vermelha, em Lagoa Santa, Minas Gerais."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O antropólogo Walter Neves batizou o fóssil brasileiro Luzia em homenagem a que outro fóssil famoso?",
    "resposta": "Lucy",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luzia_Woman"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nThe nickname Luzia was chosen in homage to the Australopithecus fossil Lucy. The fossil was kept at the National Museum of Brazil, where it was shown to the public until it was fragmented during a fire that destroyed the museum on September 2, 2018. On October 19, 2018, it was announced that most of Luzia's remains were identified from the Museu Nacional debris, which allowed them to rebuild part of her skeleton.\n[…]\nLuzia was a young Homo sapiens woman who died in her early twenties. She stood just under 1.5 m tall and was a member of a group of hunter-gatherers.\n[…]\nSome anthropologists have hypothesized that a population from coastal East Asia migrated in boats along the Kuril island chain, the Beringian coast and down the west coast of the Americas during the decline of the Last Glacial Maximum. In 1998, Neves and archaeologist André Prous studied and dated 11,400 years for the skull of Luzia after naming her.\n[…]\nIn November 2018, scientists of the University of São Paulo and Harvard University released a study that contradicts the alleged Australo-Melanesian origin of Luzia. Using DNA sequencing, the results showed that Luzia was genetically entirely Amerindian. It was published in the journal Cell article (November 8, 2018), a paper in the journal Science from an affiliated team also reported new findings on fossil DNA from the first migrants to the Americas.\n[…]\nCollection of fossils in the National Museum of Brazil\n[…]\nPeñon woman\n[…]\nBuhl Woman\n[…]\nMedia related to Luzia (fossil) at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nFormalmente, o esqueleto se chama \"Lapa Vermelha IV Hominídeo 1\". \"Luzia\" é um apelido dado pelo biólogo Walter Alves Neves, do Instituto de Biociências da Universidade de São Paulo. Ele se inspirou em Lucy, o célebre fóssil de Australopithecus afarensis de 3,5 milhões de anos achado na Etiópia no ano de 1974.[carece de fontes]?\n[…]\nNa noite de 2 de setembro de 2018, ocorreu um incêndio no Museu Nacional, destruindo quase a totalidade do acervo histórico e científico construído ao longo de duzentos anos, e que abrangia cerca de vinte milhões de itens catalogados, entre eles o fóssil de Luzia.\n[…]\nO trabalho foi feito em conjunto pela USP, pela Universidade Harvard e pelo Instituto Max Planck, da Alemanha. Os cientistas estudaram nove ossadas humanas da região de Lagoa Santa, em Minas Gerais. Dos mesmos sítios arqueológicos de Luzia, a ossada de uma mulher que teria vivido há mais de 11 mil anos e é considerada a primeira brasileira.\n[…]\nA segunda, criada na  década de 1990, diz que os territórios americanos foram povoados por humanos mais antigos ainda, os primeiros que já tinham saído da África, cruzado a Ásia e que teriam vindo direto para a América, até chegar ao Brasil. A ideia surgiu porque os pesquisadores estudaram as medidas do crânio de Luzia e acharam que ele era mais largo do que os dos indígenas e mais parecido com o dos africanos.\n[…]\nLucy\n[…]\nNeves, Walter Alves e Luís Beethoven Pio TucaTucks, O povo de Luzia: em busca dos primeiros americanos. Editora Globo, 2008 ISBN 9788525044181",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Luzia",
      "descricao": "Esqueleto humano pré-histórico de mulher, com cerca de 11 mil anos, achado na Lapa Vermelha, em Lagoa Santa, Minas Gerais."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 2018, o crânio de Luzia ficou semanas soterrado sob escombros por causa de que tragédia no Rio de Janeiro?",
    "resposta": "Incêndio do Museu Nacional",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luzia_Woman",
      "https://en.wikipedia.org/wiki/National_Museum_of_Brazil_fire"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luzia_Woman",
        "situacao": "ok",
        "texto": "Luzia Woman (Portuguese pronunciation: [luˈzi.ɐ]) is the name for an Upper Paleolithic period Paleo-Indian woman whose skeletal remains were found in a cave in Brazil. The 11,500-year-old skeleton was found in a cave in the Lapa Vermelha archeological site in Pedro Leopoldo, in the Greater Belo Horizonte region of Brazil, in 1974 by archaeologist Annette Laming-Emperaire.\n[…]\nThe nickname Luzia was chosen in homage to the Australopithecus fossil Lucy. The fossil was kept at the National Museum of Brazil, where it was shown to the public until it was fragmented during a fire that destroyed the museum on September 2, 2018. On October 19, 2018, it was announced that most of Luzia's remains were identified from the Museu Nacional debris, which allowed them to rebuild part of her skeleton.\n[…]\nLuzia was a young Homo sapiens woman who died in her early twenties. She stood just under 1.5 m tall and was a member of a group of hunter-gatherers.\n[…]\nIn the years before the fire, staff at the National Institute of Technology (INT), working with master's and doctoral students from the Federal University of Rio de Janeiro, had created detailed digital records of Luzia's skull using photogrammetry. These data were used to produce three-dimensional models and 3D-printed replicas of the fossil for research and public education.\n[…]\nIn November 2018, scientists of the University of São Paulo and Harvard University released a study that contradicts the alleged Australo-Melanesian origin of Luzia. Using DNA sequencing, the results showed that Luzia was genetically entirely Amerindian. It was published in the journal Cell article (November 8, 2018), a paper in the journal Science from an affiliated team also reported new findings on fossil DNA from the first migrants to the Americas.\n[…]\nPeñon woman\n[…]\nBuhl Woman\n[…]\nMedia related to Luzia (fossil) at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/National_Museum_of_Brazil_fire",
        "situacao": "ok",
        "texto": "The National Museum of Brazil was heavily damaged by a large fire which began about 19:30 local time (23:30 UTC) on 2 September 2018. Although some items were saved, it is believed that 92% of its archive of 20 million items was destroyed in the fire. The small number of unscathed items were stored in a separate building which was not damaged.\n[…]\nDuring the salvage, an intact skull that appeared to be that of Luzia Woman was found, and sent to a nearby scientific laboratory for analysis. Other skulls and fragments of bones were discovered in the remains of the building, prompting a need for lab testing on the found items.\n[…]\nOn 19 October 2018, it was announced that the skull was confirmed to be from Luzia; many fragments, 80% of which were identified as being part of the frontal (forehead and nose), side, bones, and the fragment of a femur, were subsequently stored, though the assembly of them was postponed. A part of the box where Luiza's skull was stored was also recovered. The bones became white, because the earth along them were burned.\n[…]\nThe museum is still doing some festivals called Museu Nacional Vive or Museum lives to public in tents mounted in front of current under construction improvements to the burned headquarters, with exposition of fossils, living snakes and taxidermied animals like Pterosaurs and Armadillo among others. The museum would do a permanent exposition outside. By some estimates, it would take R$100 million to rebuild the main dependencies.\n[…]\nCarvalho, Luciana; Cardoso, Gabriel; Reis, Silvia, eds. (2021). 500 dias de Resgate - Memória, coragem e imagem [500 days of Rescue - Memory, courage and image] (PDF). Livros Digital; 22 (in Portuguese and English) (1 ed.). Rio de Janeiro: National Museum of Brazil. p. 139. ISBN 978-65-5729-007-1. Archived (PDF) from the original on 6 April 2021."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzia_%28f%C3%B3ssil%29",
        "situacao": "ok",
        "texto": "Luzia é o fóssil humano mais antigo encontrado na América do Sul, com cerca de 12 500 a 13 000 anos que reacendeu questionamentos acerca das teorias da origem do homem americano. O fóssil pertenceu a uma mulher que morreu entre seus 20 a 24 anos de idade e foi considerado como parte da primeira população humana que entrou no continente americano.\n[…]\nO esqueleto foi descoberto nos anos 1970 em escavações na Lapa Vermelha, uma gruta no município de Pedro Leopoldo, na Região Metropolitana de Belo Horizonte. Em 2018, o fóssil foi queimado e quase destruído no incêndio do Museu Nacional, mas em 19 de outubro do mesmo ano, o museu anunciou que conseguiu recuperar até 80% dos fragmentos e reconstruiu o esqueleto.\n[…]\nNa noite de 2 de setembro de 2018, ocorreu um incêndio no Museu Nacional, destruindo quase a totalidade do acervo histórico e científico construído ao longo de duzentos anos, e que abrangia cerca de vinte milhões de itens catalogados, entre eles o fóssil de Luzia.\n[…]\nEm 19 de outubro de 2018, foi anunciado que o crânio de Luzia havia sido encontrado fragmentado. Foram encontradas parte do frontal (testa e nariz), parte lateral, ossos que são mais resistentes, além de um fragmento de um fêmur que também pertencia ao fóssil e estava guardado, tendo sido encontrados 90% do fóssil. O Museu Nacional informou que iniciaria o trabalho de reconstrução do fóssil dividido no ano seguinte em três etapas: diagnóstico, reconstituição virtual e remontagem física.\n[…]\nEm 1989, Walter Neves, ao lado do colega argentino Héctor Pucciarelli, do Museu de La Plata, formulou a teoria de que o povoamento da América teria sido feito por duas correntes migratórias de caçadores-coletores, ambas vindas da Ásia provavelmente pelo estreito de Bering, através de um istmo que se formou com a queda do nível dos mares durante a última idade do gelo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Garganta de Olduvai",
      "descricao": "Desfiladeiro na Tanzânia, um dos sítios paleoantropológicos mais importantes do mundo, estudado pela família Leakey."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da Garganta de Olduvai, na Tanzânia, vem da palavra massai para qual planta que cresce na região?",
    "resposta": "Sisal selvagem",
    "distratores": [
      "Baobá",
      "Acácia",
      "Papiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Olduvai_Gorge"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Olduvai_Gorge",
        "situacao": "ok",
        "texto": "The Olduvai Gorge or Oldupai Gorge is a paleoanthropological site in northern Tanzania. Many sites exposed by the gorge have proven invaluable in furthering understanding of early human evolution.\n[…]\nThe British/Kenyan paleoanthropologist-archeologist team of Mary and Louis Leakey established excavation and research programs at Olduvai Gorge that achieved great advances in human knowledge. The site is registered as one of the National Historic Sites of Tanzania.\n[…]\nThe gorge takes its name from the Maasai word oldupai which means \"the place of the wild sisal\" as the East African wild sisal (Dracaena hanningtonii) grows abundantly throughout the gorge area. Twenty-five kilometers downstream of Lake Ndutu and Lake Masek, the gorge is the result of up to 90 m (300 ft) erosion cutting into the sediments of a Pleistocene lake bed. A side gorge, originating from Lemagrut Mountain, joins the main gorge 8 km (5.0 mi) from the mouth.\n[…]\nDeocampo, Daniel M (2004). \"Authigenic clays in East Africa: Regional trends and paleolimnology at the Plio-Pleistocene boundary, Olduvai Gorge, Tanzania\". Journal of Paleolimnology. 31 (1): 1–9. Bibcode:2004JPall..31....1D. doi:10.1023/b:jopl.0000013353.86120.9b. S2CID 128956824.\n[…]\nDeocampo, Daniel M.; Blumenschine, R.J.; Ashley, G.M. (2002). \"Freshwater wetland diagenesis and traces of early hominids in the lowermost Bed II (~1.8 myr) playa lake-margin at Olduvai Gorge, Tanzania\". Quaternary Research. 57: 271–281. doi:10.1006/qres.2001.2317. S2CID 129174931.\n[…]\nTactikos, Joanne Christine (2006). A landscape perspective on the Oldowan from Olduvai Gorge, Tanzania. ISBN 0-542-15698-9.\n[…]\nNorthern Tanzania - Oldupai\n[…]\nOldupai Gorge – History & Information"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Garganta_de_Olduvai",
        "situacao": "ok",
        "texto": "A garganta de Olduvai constitui um dos lugares mais importantes no leste  da África em relação a sítios paleontológicos e arqueológicos pré-históricos olduvaienses e acheulenses. Os barrancos deste canhão também são conhecidos oficiosamente com o apelido de \"berço da humanidade\".\n[…]\nAtualmente, o governo tanzaniano prefere denominar o sítio com o seu nome original masai, \"Olduvai\", e assim se encontra escrito nos indicadores das estradas. O nome provém da abundância nesta zona da planta do mesmo nome, cuja principal característica é que retém água no seu interior, pelo qual, quando este líquido escasseia, é mastigada por elefantes e masai.\n[…]\nO conjunto das Camadas III e IV   não supera os 11 m de espessura, e correspondem a sedimentos aluviais, já desaparecido o lago dos episódios precedentes. Seguem-se encontrado ferramentas acheulenses e olduvaienses evoluídas, atribuídas a Homo ergaster. A datação do teto da Camada IV não é bem definido, mas dados paleomagnéticos dos níveis posteriores indicam uma idade anterior a 1 Ma.\n[…]\nO Museu da garganta de Olduvai (Olduvai Gorge Museum em inglês) fica nas proximidades da garganta. O museu apresenta exposições relativas à história da garganta.\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em castelhano cujo título é «garganta de Olduvai».\n[…]\nJoanne Christine TACTIKOS (2006) A landscape perspective on the Oldowan from Olduvai Gorge, Tanzânia. ISBN 0-542-15698-9 (em inglês)\n[…]\nLEAKEY, M.D. (1971) Olduvai Gorge: Escavations in beds I & II 1960 – 1963. Cambridge University Press, Cambridge. (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Paranthropus boisei",
      "descricao": "Espécie de hominídeo robusto da África Oriental, conhecida pela mandíbula maciça e pelos molares enormes."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por causa da mandíbula robusta e dos molares enormes, que apelido ganhou o fóssil de Paranthropus boisei achado na Tanzânia em 1959?",
    "resposta": "Homem Quebra-Nozes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Paranthropus_boisei",
      "https://en.wikipedia.org/wiki/OH_5"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paranthropus_boisei",
        "situacao": "ok",
        "texto": "Paranthropus boisei is a species of australopithecine from the Early Pleistocene of East Africa about 2.5 to 1.15 million years ago. The holotype specimen, OH 5, was discovered by palaeoanthropologist Mary Leakey in 1959 at Olduvai Gorge, Tanzania and described by her husband Louis a month later. It was originally placed into its own genus as \"Zinjanthropus boisei\", but is now relegated to Paranth\n[…]\nIn 1960, American anthropologist John Talbot Robinson pointed out that the supposed differences between \"Zinjanthropus\" and Paranthropus are due to OH 5 being slightly larger, and so recommended the species be reclassified as P. boisei. Louis rejected Robinson's proposal. Following this, it was debated if P. boisei was simply an East African variant of P. robustus until 1967 when South African palaeoanthropologist Phillip V.\n[…]\nThe genus Paranthropus (otherwise known as \"robust australopithecines\") typically includes P. boisei, P. aethiopicus and P. robustus. It is debated if Paranthropus is a valid natural grouping (monophyletic) or an invalid grouping of similar-looking hominins (paraphyletic). Because skeletal elements are so limited in these species, their affinities with each other and to other australopithecines is difficult to gauge with accuracy.\n[…]\nBefore P. boisei was described (and P. robustus was the only member of Paranthropus), Broom and Robinson continued arguing that P. robustus and A. africanus (the then only known australopithecines) were two distinct lineages. However, remains were not firmly dated, and it was debated if there were indeed multiple hominin lineages or if there was only 1 leading to humans. In 1975, the P. boisei skull KNM-ER 406 was demonstrated to have been contemporaneous with the H.\n[…]\nboisei, it would show a limb anatomy quite similar to that of the contemporary H. habilis.\n[…]\nParanthropus boisei - The Smithsonian Institution's Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/OH_5",
        "situacao": "ok",
        "texto": "Paranthropus boisei is a species of australopithecine from the Early Pleistocene of East Africa about 2.5 to 1.15 million years ago. The holotype specimen, OH 5, was discovered by palaeoanthropologist Mary Leakey in 1959 at Olduvai Gorge, Tanzania and described by her husband Louis a month later. It was originally placed into its own genus as \"Zinjanthropus boisei\", but is now relegated to Paranth\n[…]\nIn 1960, American anthropologist John Talbot Robinson pointed out that the supposed differences between \"Zinjanthropus\" and Paranthropus are due to OH 5 being slightly larger, and so recommended the species be reclassified as P. boisei. Louis rejected Robinson's proposal. Following this, it was debated if P. boisei was simply an East African variant of P. robustus until 1967 when South African palaeoanthropologist Phillip V.\n[…]\nThe genus Paranthropus (otherwise known as \"robust australopithecines\") typically includes P. boisei, P. aethiopicus and P. robustus. It is debated if Paranthropus is a valid natural grouping (monophyletic) or an invalid grouping of similar-looking hominins (paraphyletic). Because skeletal elements are so limited in these species, their affinities with each other and to other australopithecines is difficult to gauge with accuracy.\n[…]\nBefore P. boisei was described (and P. robustus was the only member of Paranthropus), Broom and Robinson continued arguing that P. robustus and A. africanus (the then only known australopithecines) were two distinct lineages. However, remains were not firmly dated, and it was debated if there were indeed multiple hominin lineages or if there was only 1 leading to humans. In 1975, the P. boisei skull KNM-ER 406 was demonstrated to have been contemporaneous with the H.\n[…]\nboisei, it would show a limb anatomy quite similar to that of the contemporary H. habilis.\n[…]\nParanthropus boisei - The Smithsonian Institution's Human Origins Program"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paranthropus_boisei",
        "situacao": "ok",
        "texto": "Paranthropus boisei (originalmente chamado Zinjanthropus boisei e então Australopithecus boisei) foi um dos primeiros hominíneos a vviverem no leste de África, há cerca de 1 a 2 milhões de anos, durante o  Pleistoceno. Tinha um crânio altamente especializado à mastigação pesada. P. boisei habitou os pastos secos da savana da África Leste durante um período de há 1,7 a 1,0 milhões de anos.\n[…]\nO primeiro fóssil foi descoberto em um sítio arqueológico rico, FLK Zinj, no Oldupai Gorge, por Mary Leakey em 1959, de onde o nome, \"Zinj man.\" O epíteto da espécie \"boisei\" é uma homenagem a Charles Boise, que contribuiu financeiramente ao trabalho de Louis e Mary Leakey no Olduvai Gorge.\n[…]\nA mesma adaptação ocorreu no sul da África com a evolução do Paranthropus robustus.\n[…]\nEm um sistema patrifocal, fêmeas que estão no grupo não são aparentadas, ao passo que os machos são, já que eles permanecem no bando em que nasceram, e esta associação entre os machos é bastante influente em seu comportamento. Geralmente, grupos assim são pequenos. Isso também descarta a plausibilidade de uma sociedade de harém, que teria resultado em uma sociedade matrilocal devido ao aumento da competição homem-homem.\n[…]\nPesquisas a respeito de ferramentas de mão do Paranthropus robustus, uma espécie que pensava-se ser muito semelhante ao Paranthropus boisei, mostrou que, anatomicamente, eles eram capazes de realizar a tão chamada habilidade de precisão. Então o Paranthropus boisei possuía os requerimentos anatômicos para fabricar ferramentas, mas sua capacidade de abstração para criar projetos é duvidosa por sua anatomia craniana. Veja também em Olduwan.\n[…]\nAustralopithecus boisei page on ArchaeologyInfo.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Paranthropus boisei",
      "descricao": "Espécie de hominídeo robusto da África Oriental, conhecida pela mandíbula maciça e pelos molares enormes."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1959, na Garganta de Olduvai, que pesquisadora britânica encontrou o crânio de Paranthropus boisei apelidado de Zinj?",
    "resposta": "Mary Leakey",
    "fonte": [
      "https://en.wikipedia.org/wiki/OH_5",
      "https://en.wikipedia.org/wiki/Mary_Leakey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/OH_5",
        "situacao": "ok",
        "texto": "Paranthropus boisei is a species of australopithecine from the Early Pleistocene of East Africa about 2.5 to 1.15 million years ago. The holotype specimen, OH 5, was discovered by palaeoanthropologist Mary Leakey in 1959 at Olduvai Gorge, Tanzania and described by her husband Louis a month later. It was originally placed into its own genus as \"Zinjanthropus boisei\", but is now relegated to Paranth\n[…]\nPalaeoanthropologists Mary and Louis Leakey had conducted excavations in Tanzania since the 1930s, though work was postponed with the start of World War II. They returned in 1951, finding mostly ancient tools and fossils of extinct mammals for the next few years. In 1955, they unearthed a hominin baby canine and large molar tooth in Olduvai Gorge, catalogue ID Olduvai Hominin (OH) 3.\n[…]\nOn the morning of July 17, 1959, Louis felt ill and stayed at camp while Mary went out to Bed I's Frida Leakey Gully. Sometime around 11:00 a.m., she noticed what appeared to be a portion of a skull poking out of the ground, OH 5. The dig team created a pile of stones around the exposed portion to protect it from further weathering. Active excavation began the following day; they had chosen to wait for photographer Des Bartlett to document the entire process.\n[…]\nLouis believed the skull had a mix of traits from both genera, briefly listing 20 differences, and so used OH 5 as the basis for the new genus and species \"Zinjanthropus boisei\" on August 15, 1959. The genus name derives from the medieval term for East Africa, \"Zanj\", and the specific name was in honour of Charles Watson Boise, the Leakeys' benefactor. He initially considered the name \"Titanohomo mirabilis\" (\"wonderful Titan-like man\").\n[…]\nboisei cracked open nuts and similar hard foods with its powerful teeth, giving OH 5 the nickname \"Nutcracker Man\".\n[…]\nParanthropus boisei - The Smithsonian Institution's Human Origins Program"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mary_Leakey",
        "situacao": "ok",
        "texto": "Mary Douglas Leakey, FBA (née Nicol, 6 February 1913 – 9 December 1996) was a British paleoanthropologist who discovered the first fossilised Proconsul skull, an extinct ape believed to be ancestral to humans. She also discovered the robust Zinjanthropus skull at Olduvai Gorge in Tanzania, eastern Africa.\n[…]\nFor much of her career she worked with her husband, Louis Leakey, at Olduvai Gorge, where they uncovered fossils of ancient hominines and the earliest hominins, as well as the stone tools produced by the latter group. Mary Leakey developed a system for classifying the stone tools found at Olduvai. She discovered the Laetoli footprints, and at the Laetoli site she discovered hominin fossils that were more than 3.75 million years old.\n[…]\nMary Leakey died on 9 December 1996, in Nairobi, Kenya, at the age of 83. Her family, who announced her death, did not give the cause, saying only that she died peacefully.\n[…]\nAfter her husband died in 1972, Mary Leakey continued their work at Olduvai and Laetoli. It was at the Laetoli site that she discovered hominin fossils that were more than 3.75 million years old.\n[…]\nIn April 2013, Leakey was honoured by Royal Mail in the UK, as one of six people selected as subjects for the \"Great Britons\" commemorative postage stamp issue. Google celebrated the 100th anniversary of Mary Leakey's birth with its Google doodle for 6 February 2013.\n[…]\nThe Mary Leakey Girls' High School, a secondary school for girls near Kikuyu Town, was named after Mary's mother-in-law, Mary Bazett Leakey, mother of her husband, Louis Leakey.\n[…]\n\"Leakey, Mary Douglas Nicol\". Dictionary of Scientific Biography. Vol. 22. New York: Charles Scribner's Sons. 1970–1980. pp. 221–224. ISBN 978-0-684-10114-9.\n[…]\nLeakey Foundation website\n[…]\nWorks by or about Mary Leakey at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paranthropus_boisei",
        "situacao": "ok",
        "texto": "Paranthropus boisei (originalmente chamado Zinjanthropus boisei e então Australopithecus boisei) foi um dos primeiros hominíneos a vviverem no leste de África, há cerca de 1 a 2 milhões de anos, durante o  Pleistoceno. Tinha um crânio altamente especializado à mastigação pesada. P. boisei habitou os pastos secos da savana da África Leste durante um período de há 1,7 a 1,0 milhões de anos.\n[…]\nO primeiro fóssil foi descoberto em um sítio arqueológico rico, FLK Zinj, no Oldupai Gorge, por Mary Leakey em 1959, de onde o nome, \"Zinj man.\" O epíteto da espécie \"boisei\" é uma homenagem a Charles Boise, que contribuiu financeiramente ao trabalho de Louis e Mary Leakey no Olduvai Gorge.\n[…]\nPermanece incerto se essa espécie fabricava ferramentas; quando foi descoberta, ela foi tomada como um de nossos ancestrais fabricantes de ferramentas, já que o sítio também havia mostrado evidências de ferramentas de Sílex. Entretanto, o primeiro fóssil de Homo habilis foi depois encontrado em um sítio próximo.\n[…]\nAs espécies de Paranthropus apresentavam crânios menores do que os do Homo habilis, que foi seu contemporâneo, mas eles tinham cérebros maiores do que os do Australopithecus.Após a descoberta do Homo habilis, ele foi visto como o produtor das ferramentas pelo topo da caixa craniana ser um pouco superior (640 cm³). Por outro lado, é possível que outras espécies produziam ferramentas também.\n[…]\nPesquisas a respeito de ferramentas de mão do Paranthropus robustus, uma espécie que pensava-se ser muito semelhante ao Paranthropus boisei, mostrou que, anatomicamente, eles eram capazes de realizar a tão chamada habilidade de precisão. Então o Paranthropus boisei possuía os requerimentos anatômicos para fabricar ferramentas, mas sua capacidade de abstração para criar projetos é duvidosa por sua anatomia craniana. Veja também em Olduwan.\n[…]\nAustralopithecus boisei page on ArchaeologyInfo.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Thomas Henry Huxley",
      "descricao": "Biólogo inglês do século dezenove, grande defensor público da teoria da evolução de Darwin."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Por defender com unhas e dentes a teoria da evolução no século dezenove, o biólogo inglês Thomas Huxley ganhou que apelido?",
    "resposta": "Buldogue de Darwin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (4 May 1825 – 29 June 1895) was an English biologist and anthropologist who specialised in comparative anatomy. He has become known as \"Darwin's Bulldog\" for his advocacy of Charles Darwin's theory of evolution.\n[…]\nOne effect of the debate was to hugely increase Huxley's visibility amongst educated people, through the accounts in newspapers and periodicals. Another consequence was to alert him to the importance of public debate: a lesson he never forgot. A third effect was to serve notice that Darwinian ideas could not be easily dismissed: on the contrary, they would be vigorously defended against orthodox authority.\n[…]\nHooker, John Lubbock (banker, biologist and neighbour of Darwin), Herbert Spencer (social philosopher and sub-editor of the Economist), William Spottiswoode (mathematician and the Queen's Printer), Thomas Hirst (Professor of Physics at University College London), Edward Frankland (the new Professor of Chemistry at the Royal Institution) and George Busk, zoologist and palaeontologist (formerly surgeon for HMS Dreadnought). All except Spencer were fellows of the Royal Society.\n[…]\nThis largely morphological program of comparative anatomy remained at the core of most biological education for a hundred years until the advent of cell and molecular biology and interest in evolutionary ecology forced a fundamental rethink. It is an interesting fact that the methods of the field naturalists who led the way in developing the theory of evolution (Darwin, Alfred Russel Wallace, Fritz Müller, Henry Bates) were scarcely represented at all in Huxley's program.\n[…]\nThe Huxley Lecture\n[…]\nHuxley review: Darwin on the origin of Species, Westminster Review, 17 (n.s.) April 1860 p. 541–570."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Henry_Huxley",
        "situacao": "ok",
        "texto": "Thomas Henry Huxley (Ealing, Middlesex, 4 de maio de 1825 — Eastbourne, Sussex, 29 de junho de 1895) foi um biólogo e filósofo britânico que ficou conhecido como \"O Buldogue de Darwin\", por ser o principal defensor público da teoria da evolução de Charles Darwin e um dos principais cientistas ingleses do século XIX. É ainda reconhecido por ser o criador do termo \"agnóstico\" para representar um pos\n[…]\nT. H. Huxley foi um dos poucos confidentes a quem Charles Darwin expôs suas ideias evolucionistas antes da publicação de A Origem das Espécies e um dos principais responsáveis pelo sucesso da sua publicação.\n[…]\nLogo após conhecer e concordar com a Teoria da Evolução (apesar de não aceitar várias das ideias de Darwin, como o Gradualismo), iniciou a estratégia eficaz de substituir na cúpula científica inglesa, graças à sua influência, cientistas idosos e com ideias ultrapassadas, por uma nova classe de cientistas jovens e talentosos, abertos a novas ideias e prontos para uma \"revolução\" científica.\n[…]\nEm 1858, quando Darwin foi orientado (em parte por Huxley) a elaborar rapidamente um artigo científico sobre a Teoria da Evolução em conjunto com Alfred Russel Wallace (que havia chegado independentemente a conclusões semelhantes às de Darwin), para apresentar à Linnean Society em Londres, revigorando a comunidade científica que já era muito diferente e permeável à mudança.\n[…]\nComo Darwin nunca foi um grande orador e preferiu morar no interior da Inglaterra, longe dos debates e repercussões da sua teoria, coube a Thomas Huxley o papel de principal defensor da Evolução. Orador perspicaz e feroz, além de possuir um humor cínico, traços que lhe valeram o apelido. Como disse ao estudante Henry Fairfield Osborn, \"Você sabe que eu tenho que tomar conta dele - de fato, eu sempre tenho sido o buldogue de Darwin\".\n[…]\nCharles Darwin\n[…]\nTeoria da Evolução\n[…]\nObras de Thomas Henry Huxley na Open Library",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Julgamento de Scopes",
      "descricao": "Processo judicial de 1925, em Dayton, Tennessee, contra o professor John Scopes por ensinar a evolução humana numa escola pública."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em 1925, no Tennessee, o professor John Scopes foi processado por ensinar evolução numa escola. Que apelido ganhou esse julgamento?",
    "resposta": "Julgamento do Macaco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Scopes_trial"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scopes_trial",
        "situacao": "ok",
        "texto": "The State of Tennessee v. John Thomas Scopes, also known as the Scopes Monkey Trial, was an American legal case from July 10 to July 21, 1925, in which a high school teacher, John T. Scopes, was accused of violating the Butler Act, a Tennessee state law which outlawed the teaching of human evolution in public schools. The trial was deliberately staged in order to attract publicity to the small tow\n[…]\nRonald Kidd's 2006 novel, Monkey Town: The Summer of the Scopes Trial, set in summer 1925, in Dayton, is based on the Scopes Trial.\n[…]\nA series of folk songs were written in reaction to the trial. The most prominent included the comedy song \"Monkey Biz-Ness (Down in Tennessee),\" performed by singer Billy Murray with the International Novelty Orchestra; and country singer Vernon Dalhart's \"The John T. Scopes Trial (The Old Religion's Better After All)\", which was written by Carson Robison.\n[…]\nHaldeman-Julius, Marcet. \"Impressions of the Scopes Trial\". Haldeman-Julius Monthly, vol. 2.4 (Sept. 1925), pp. 323–347 (excerpt—included in Clarence Darrow's Two Great Trials (1927). Haldeman-Julius was an eye-witness and a friend of Darrow's.]\n[…]\nMencken, H.L. A Religious Orgy in Tennessee: A Reporter's Account of the Scopes Monkey Trial. Hoboken: Melville House, 2006.\n[…]\nScopes, John Thomas and William Jennings Bryan. The World's Most Famous Court Trial: Tennessee Evolution Case: A Complete Stenographic Report of the Famous Court Test. Cincinnati: National Book Co., ca. 1925.\n[…]\nBryan, William Jennings (1925). \"Text of the Closing Statement of William Jennings Bryan at the trial of John Scopes\". California State University Dominguez Hills. Dayton, Tennessee. Archived from the original on July 13, 2017. Retrieved July 14, 2006.\n[…]\n\"Unpublished Photographs from 1925 Tennessee vs. John Scopes \"Monkey Trial\"\". Smithsonian Archives.\n[…]\nScopes Trial, digital collection, Tennessee Virtual Archive."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Julgamento_de_Scopes",
        "situacao": "ok",
        "texto": "O Julgamento de Scopes (em inglês, Scopes Trial) ou popularmente Julgamento do Macaco (Monkey Trial; formalmente conhecido como The State of Tennessee v. John Thomas Scopes) foi um famoso julgamento, considerado um marco na história jurídica norte-americana ocorrido em julho de 1925, e que pôs à prova a Lei Butler (Butler Act), uma lei estadual do Tennessee que criminalizava o ensino do evolucioni\n[…]\nJohn T. Scopes, um professor substituto de uma escola do ensino médio, foi acusado em 5 de maio de 1925 por ensinar o evolucionismo usando um capítulo de um livro baseado em ideias inspiradas no livro de Charles Darwin, A Origem das Espécies.\n[…]\nA origem do conflito que levou ao julgamento de Scopes estava na Lei Butler. O deputado estadual John W. Butler, um fazendeiro e líder da Associação Mundial dos Fundamentos Cristãos, seguiu a política de exigir que o legislativo do Tennessee aprovasse leis proibindo o ensino da evolução nas escolas. Sua campanha foi bem-sucedida quando a Lei Butler foi aprovada em 25 de março de 1925.\n[…]\nEm resposta, a União Americana pelas Liberdades Civis financiou um caso que estabelecesse um precedente legal no qual John Scopes, um professor de ciências do Tennessee, concordou em ser processado por violar a lei. Scopes, que havia substituído o professor habitual, foi acusado em 5 de maio de 1925 de ensinar evolução usando um capítulo do livro Civic Biology: Presented in Problems (1914) de George William Hunter, que descrevia a teoria da evolução, raça e eugenia.\n[…]\nHicks e os convenceu de como seria interessante para Dayton montar esse julgamento. O grupo pediu a John Scopes, um professor de ensino médio de 24 anos de idade que admitisse ter ensinado evolucionismo aos seus alunos.\n[…]\nDepois que Scopes foi condenado e multado no julgamento de Dayton, os advogados de Scopes apelaram para a Suprema Corte do Tennessee.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Beríngia",
      "descricao": "Região entre a Sibéria e o Alasca que, nas eras glaciais, formava uma ponte de terra por onde humanos chegaram à América."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Beríngia, faixa de terra que ligava a Sibéria ao Alasca, tem o nome de um navegador a serviço da Rússia. Em que país ele nasceu?",
    "resposta": "Dinamarca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beringia",
      "https://en.wikipedia.org/wiki/Vitus_Bering"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beringia",
        "situacao": "ok",
        "texto": "Beringia is a prehistoric geographical region, defined as the land and maritime area bounded on the west by the Lena River in Russia; on the east by the Mackenzie River in Canada; on the north by 72° north latitude in the Chukchi Sea; and on the south by the tip of the Kamchatka Peninsula. It includes the Chukchi Sea, the Bering Sea, the Bering Strait, the Chukchi and Kamchatka peninsulas in Russi\n[…]\nDuring the ice ages, Beringia, like most of Siberia and all of North and Northeast China, was not glaciated because snowfall was very light.\n[…]\nFossil remains show that spruce, birch and poplar once grew beyond their northernmost range today, indicating that there were periods when the climate was warmer and wetter. The environmental conditions were not homogenous in Beringia. Recent stable isotope studies of woolly mammoth bone collagen demonstrate that western Beringia (Siberia) was colder and drier than eastern Beringia (Alaska and Yukon), which was more ecologically diverse.\n[…]\nThe existence of fauna endemic to the respective Siberian and North American portions of Beringia has led to the 'Beringian Gap' hypothesis, wherein an unconfirmed geographic factor blocked migration across the land bridge when it emerged. Beringia did not block the movement of most dry steppe-adapted large species such as saiga antelope, woolly mammoth, and caballid horses.\n[…]\nAround 3,000 years ago, the progenitors of the Yupik peoples  settled along both sides of the straits. In 2012, the governments of Russia and the United States announced a plan to formally establish \"a transboundary area of shared Beringian heritage.\" Among other things this agreement would establish close ties between the Bering Land Bridge National Preserve and the Cape Krusenstern National Monument in the United States and Beringia National Park in Russia.\n[…]\nYukon Beringia Interpretive Centre\n[…]\nStudy suggests 20000 year hiatus in Beringia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vitus_Bering",
        "situacao": "ok",
        "texto": "Vitus Jonassen Bering  (baptised 5 August 1681 – 19 December 1741), also known as Ivan Ivanovich Bering, was a Danish-born Russian cartographer, explorer, and officer in the Russian Navy. He is known as a leader of two Russian expeditions, the First Kamchatka Expedition and the Great Northern Expedition, exploring the northeastern coast of the Asian continent and from there the western coast of th\n[…]\nAfter five months of joblessness, Bering, keenly aware of his dependents, reapplied to the Admiralty. He was accepted for a renewed period of active service the same day. By 2 October 1724, Bering (retaining the rank of first captain he had secured earlier in the year) was back on the sea, commanding the 90-gun Lesnoe (Russian: Лесное, lit. 'Forest'). But the tsar soon had a new command for him.\n[…]\nAssessing the scale of Bering's achievements is difficult, given that he was neither the first Russian to sight North America (that having been achieved by Mikhail Gvozdev during the 1730s), nor the first Russian to pass through the strait which now bears his name (an honour which goes to the relatively unknown 17th-century expedition of Semyon Dezhnev).\n[…]\nReports from his second voyage were jealously guarded by the Russian administration, preventing Bering's story from being retold in full for at least a century after his death. Nonetheless, Bering's achievements, both as an individual explorer and as a leader of the second expedition, are regarded as substantial.\n[…]\nRussian America\n[…]\nFrost, Orcutt William, ed. (2003), Bering: The Russian Discovery of America, New Haven, Connecticut: Yale University Press, ISBN 0-300-10059-0\n[…]\nLind, Natasha Okhotina; Møller, Peter Ulf, eds. (2002), Under Vitus Bering's Command: New Perspectives on the Russian Kamchatka Expeditions, Beringiana, Aarhus, Denmark: Aarhus University Press, ISBN 87-7288-932-2\n[…]\nWorks about Vitus Bering at Open Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ber%C3%ADngia",
        "situacao": "ok",
        "texto": "A Beríngia, também chamada Ponte Terrestre de Bering, foi uma porção de terra firme com aproximadamente 1 600 quilômetros de norte a sul na sua máxima extensão que juntou o Alasca e a Sibéria durante as glaciações. Se localizava onde, atualmente, se encontra o Estreito de Bering.\n[…]\nA Ponte Terrestre de Bering foi importante porque permitiu a migração de seres humanos da Ásia para as Américas, assim como várias espécies de animais terrestres, incluindo leões e chitas, que evoluíram para espécies endémicas da América do Norte, actualmente extintas, e exportando camelídeos para a Ásia.\n[…]\nÀ medida que o clima se altera, também as condições ambientais mudam, determinando que plantas e animais podem sobreviver – a massa de terra pode funcionar, tanto como uma ponte, como constituíndo uma barreira, uma vez que, em períodos menos frios, a chuva e os glaciares alteram o solo e a orografia.\n[…]\nRegistos fósseis mostram que, na América do Norte, os abetos, bétulas e choupos já povoaram regiões a norte da sua zona de distribuição atual, indicando que essa região já foi mais quente que atualmente. As flutuações do nível do mar expuseram a Ponte Terrestre de Bering em vários períodos durante o período Pleistoceno, tanto na glaciação que ocorreu há 35 mil anos, como durante a mais recente, entre 22 mil e 7 000 anos.\n[…]\nEstreito de Bering\n[…]\nBering Land Bridge National preserve\n[…]\nWhat is Beringia?\n[…]\nPrehistoric Beringia, por D.K. Jordan\n[…]\nPaleoenvironmental atlas of Beringia com animação mostrando o desaparecimento gradual da Ponte Terresrtre de Bering\n[…]\nYukon Beringia Interpretive Centre\n[…]\nPaleoenvironments and Glaciation in Beringia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Beríngia",
      "descricao": "Região entre a Sibéria e o Alasca que, nas eras glaciais, formava uma ponte de terra por onde humanos chegaram à América."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Durante a última era glacial, os humanos puderam ir a pé da Sibéria ao Alasca. O que fez surgir esse caminho por terra?",
    "resposta": "A queda do nível do mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Beringia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beringia",
        "situacao": "ok",
        "texto": "Beringia is a prehistoric geographical region, defined as the land and maritime area bounded on the west by the Lena River in Russia; on the east by the Mackenzie River in Canada; on the north by 72° north latitude in the Chukchi Sea; and on the south by the tip of the Kamchatka Peninsula. It includes the Chukchi Sea, the Bering Sea, the Bering Strait, the Chukchi and Kamchatka peninsulas in Russi\n[…]\nIt is believed that a small human population of at most a few thousand arrived in Beringia from eastern Siberia during the Last Glacial Maximum before expanding into the settlement of the Americas sometime before 23,000 and 21,000 years before present (YBP). This would have occurred as the American glaciers blocking the way southward melted but before the bridge was covered by the sea about 11,000 YBP.\n[…]\nDuring the ice ages, Beringia, like most of Siberia and all of North and Northeast China, was not glaciated because snowfall was very light.\n[…]\nGrey wolves suffered a species-wide population bottleneck (reduction) approximately 25,000 YBP during the Last Glacial Maximum. This was followed by a single population of modern wolves expanding out of their Beringia refuge to repopulate the wolf's former range, replacing the remaining Pleistocene wolf populations across Eurasia and North America. The extinct pine species Pinus matthewsii has been described from Pliocene sediments in the Yukon areas of the refugium.\n[…]\nThe existence of fauna endemic to the respective Siberian and North American portions of Beringia has led to the 'Beringian Gap' hypothesis, wherein an unconfirmed geographic factor blocked migration across the land bridge when it emerged. Beringia did not block the movement of most dry steppe-adapted large species such as saiga antelope, woolly mammoth, and caballid horses.\n[…]\nPaleoenvironments and Glaciation in Beringia\n[…]\nStudy suggests 20000 year hiatus in Beringia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ber%C3%ADngia",
        "situacao": "ok",
        "texto": "A Beríngia, também chamada Ponte Terrestre de Bering, foi uma porção de terra firme com aproximadamente 1 600 quilômetros de norte a sul na sua máxima extensão que juntou o Alasca e a Sibéria durante as glaciações. Se localizava onde, atualmente, se encontra o Estreito de Bering.\n[…]\nTanto o Estreito de Bering como o Mar Chukchi a norte e o Mar de Bering a sul são mares de pequenas profundidades. Durante as glaciações, a água do mar concentra-se nas calotas polares e nas geleiras, fazendo baixar o nível do mar e expondo os fundos marinhos de pequenas profundidades. Outras pontes terrestres se formaram e desapareceram nos períodos interglaciais: há 14 mil anos, a Austrália esteve unida à Nova Guiné e à Tasmânia, e as Ilhas Britânicas estiveram ligadas à Europa.\n[…]\nA Ponte Terrestre de Bering foi importante porque permitiu a migração de seres humanos da Ásia para as Américas, assim como várias espécies de animais terrestres, incluindo leões e chitas, que evoluíram para espécies endémicas da América do Norte, actualmente extintas, e exportando camelídeos para a Ásia.\n[…]\nRegistos fósseis mostram que, na América do Norte, os abetos, bétulas e choupos já povoaram regiões a norte da sua zona de distribuição atual, indicando que essa região já foi mais quente que atualmente. As flutuações do nível do mar expuseram a Ponte Terrestre de Bering em vários períodos durante o período Pleistoceno, tanto na glaciação que ocorreu há 35 mil anos, como durante a mais recente, entre 22 mil e 7 000 anos.\n[…]\nBering Land Bridge National preserve\n[…]\nWhat is Beringia?\n[…]\nPrehistoric Beringia, por D.K. Jordan\n[…]\nPaleoenvironmental atlas of Beringia com animação mostrando o desaparecimento gradual da Ponte Terresrtre de Bering\n[…]\nYukon Beringia Interpretive Centre\n[…]\nPaleoenvironments and Glaciation in Beringia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Homem de Java",
      "descricao": "Fósseis de Homo erectus encontrados na ilha de Java, Indonésia, a partir de 1891."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O Homem de Java foi classificado primeiro no gênero Pithecanthropus. Que dois seres se juntam nesse nome de origem grega?",
    "resposta": "Macaco e homem",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pithecanthropus",
      "https://en.wikipedia.org/wiki/Java_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pithecanthropus",
        "situacao": "ok",
        "texto": "The terms Anthropopithecus (Blainville, 1839) and Pithecanthropus (Haeckel, 1868) are obsolete taxa describing either chimpanzees or archaic humans. Both are derived from Ancient Greek ἄνθρωπος (ánthrōpos), meaning \"man\", and πίθηκος (píthēkos), meaning \"ape, monkey\", translating to \"man-ape\" and \"ape-man\", respectively.\n[…]\nA famous example of a fossil Anthropopithecus is that of the Java Man, discovered in 1891 in Trinil, nearby the Solo River, in East Java, by Dutch physician and anatomist Eugène Dubois, who named the discovery with the scientific name Anthropopithecus erectus. This Dubois paper, written during the last quarter of 1892, was published by the Dutch government in 1893.\n[…]\nIn those early 1890s, the term Anthropopithecus was still being used by zoologists as the genus name of chimpanzees, so Dubois' Anthropopithecus erectus came to mean something like \"the upright chimpanzee\", or \"the chimpanzee standing up\".\n[…]\nHowever, a year later, in 1893, Dubois considered that some anatomical characters proper to humans made necessary the attribution of these remains to a genus different than Anthropopithecus and he renamed the specimen of Java with the name Pithecanthropus erectus (1893 paper, published in 1894). Pithecanthropus is a genus that German biologist Ernst Haeckel (1834-1919) had created in 1868.\n[…]\nYears later, in the 20th century, the German physician and paleoanthropologist Franz Weidenreich (1873-1948) compared in detail the characters of Dubois' Java Man, then named Pithecanthropus erectus, with the characters of the Peking Man, then named Sinanthropus pekinensis. Weidenreich concluded in 1940 that because of their anatomical similarity with modern humans it was necessary to gather all these specimens of Java and China in a single species of the genus Homo, the species Homo erectus."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Java_Man",
        "situacao": "ok",
        "texto": "Java Man (Homo erectus erectus, formerly also Anthropopithecus erectus or Pithecanthropus erectus) is an early human fossil discovered in 1891 and 1892 on the island of Java (Indonesia). Estimated to be between 700,000 and 1,490,000 years old, it was, at the time of its discovery, the oldest hominid fossil ever found, and it remains the type specimen for Homo erectus.\n[…]\nLed by Eugène Dubois, the excavation team uncovered a tooth, a skullcap, and a thighbone at Trinil on the banks of the Solo River in East Java. Arguing that the fossils represented the \"missing link\" between apes and humans, Dubois gave the species the scientific name Anthropopithecus erectus, then later renamed it Pithecanthropus erectus. The fossil aroused much controversy. Within a decade of the discovery almost eighty books or articles had been published on Dubois's finds.\n[…]\nDubois's complete collection of fossils were transferred between 1895 and 1900 to what is now known as Naturalis, in Leiden in the Netherlands. The main fossil of Java Man, the skullcap cataloged as \"Trinil 2\", has been dated biostratigraphically, that is, by correlating it with a group of fossilized animals (a \"faunal assemblage\") found nearby on the same geological horizon, which is itself compared with assemblages from other layers and classified chronologically.\n[…]\nThe control of fire by Homo erectus is generally accepted by archaeologists to have begun some 400,000 years ago, with claims regarding earlier evidence finding increasing scientific support. Burned wood has been found in layers that carried the Java Man fossils in Trinil, dating to around from 500,000 to 830,000 BP. However, because Central Java is a volcanic region, the charring may have resulted from natural fires, and there is no conclusive proof that Homo erectus in Java controlled fire.\n[…]\nMedia related to Java Man at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Homem de Java",
      "descricao": "Fósseis de Homo erectus encontrados na ilha de Java, Indonésia, a partir de 1891."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No fim do século dezenove, que médico holandês foi à Indonésia procurar o elo perdido e encontrou o Homem de Java?",
    "resposta": "Eugène Dubois",
    "fonte": [
      "https://en.wikipedia.org/wiki/Java_Man",
      "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Dubois"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Java_Man",
        "situacao": "ok",
        "texto": "Java Man (Homo erectus erectus, formerly also Anthropopithecus erectus or Pithecanthropus erectus) is an early human fossil discovered in 1891 and 1892 on the island of Java (Indonesia). Estimated to be between 700,000 and 1,490,000 years old, it was, at the time of its discovery, the oldest hominid fossil ever found, and it remains the type specimen for Homo erectus.\n[…]\nLed by Eugène Dubois, the excavation team uncovered a tooth, a skullcap, and a thighbone at Trinil on the banks of the Solo River in East Java. Arguing that the fossils represented the \"missing link\" between apes and humans, Dubois gave the species the scientific name Anthropopithecus erectus, then later renamed it Pithecanthropus erectus. The fossil aroused much controversy. Within a decade of the discovery almost eighty books or articles had been published on Dubois's finds.\n[…]\nOn September 26, 2025 the Dutch government announced that the whole Dubois collection, including Java Man, will be restituted to Indonesia due to the circumstances of its acquisition.\n[…]\nEugène Dubois categorically refused to entertain this possibility, dismissing Peking Man as a kind of Neanderthal, closer to humans than the Pithecanthropus, and insisting that Pithecanthropus belonged to its own superfamily, the Pithecanthropoidea.\n[…]\nDubois's complete collection of fossils were transferred between 1895 and 1900 to what is now known as Naturalis, in Leiden in the Netherlands. The main fossil of Java Man, the skullcap cataloged as \"Trinil 2\", has been dated biostratigraphically, that is, by correlating it with a group of fossilized animals (a \"faunal assemblage\") found nearby on the same geological horizon, which is itself compared with assemblages from other layers and classified chronologically.\n[…]\nTrinil tiger: an extinct mammal found in the same site as Java Man\n[…]\nMedia related to Java Man at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eug%C3%A8ne_Dubois",
        "situacao": "ok",
        "texto": "Marie Eugène François Thomas Dubois (French: [øʒɛn dybwɑ]; 28 January 1858 – 16 December 1940) was a Dutch paleoanthropologist and geologist. He earned worldwide fame for his discovery of Pithecanthropus erectus (later redesignated Homo erectus), or \"Java Man\". Dubois was the first anthropologist to embark upon a purposeful search for hominid fossils.\n[…]\nHe described the fossil: \"From the circumstances of the find and comparative research it is evident that the three skeletal remains of elements [tooth, skull and femur] belong to one and the same individual, probably a very aged female.\" The thigh bone was straight like humans so that Dubois pictured it as an upright-walking chimpanzee, and gave the scientific name Anthropopithecus erectus.\n[…]\nUntil 2025, Dubois' paleontological collection and scientific archive remained at Naturalis in Leiden. The institute dedicated an exhibition to his findings of Homo erectus in their renovated museum, where the holotype Trinil 2 was on display. On 26 September 2025, The government of the Netherlands announced that they would repatriate the 28,000 fossils which made up the Dubois collection back to Indonesia, including the Java Man.\n[…]\nTheunissen, L. T. (2012-12-06). Eugène Dubois and the Ape-Man from Java: The History of the First ‘Missing Link’ and Its Discoverer. Springer Science & Business Media. doi:10.1007/978-94-009-2209-9. ISBN 978-94-009-2209-9.\n[…]\nPat Shipman, The Man who Found the Missing Link. Eugène Dubois and His Lifelong Quest to Prove Darwin Right, Harvard University Press (April 30, 2002), 528 pages, ISBN 0-674-00866-9.\n[…]\nWorks by or about Eugène Dubois at Wikisource\n[…]\n(in Dutch) DUBOIS - The Quest for the Missing Link, www.eugenedubois.eu\n[…]\nBiographies: Eugene Dubois at TalkOrigins Archive\n[…]\nFossil Hominids, Human Evolution: Thomas Huxley & Eugene Dubois at www.understandingevolution.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Java",
        "situacao": "ok",
        "texto": "Homem de Java (Homo erectus erectus, Javanese: Manungsa Jawa, indonésio: Manusia Jawa) foi o primeiro espécime de Homo erectus a ser descoberto. Fósseis desse hominídeo foram descobertos na ilha de Java (Indonésia) entre 1891 e 1892. Dirigida por Eugène Dubois, a equipe de escavação descobriu um dente, uma calota craniana e um fêmur em Trinil, nas margens do Rio Solo, em Java Oriental.\n[…]\nAlegando  que os fósseis representavam o \"elo perdido\" entre macacos e seres humanos, Dubois deu à espécie o nome científico Anthropopithecus erectus, depois renomeado para Pithecanthropus erectus.\n[…]\nOutros fósseis encontrados na primeira metade do século XX em Java, em Sangiran e Mojokerto, todos mais antigos que os encontrados por Dubois, também são considerados parte da espécie Homo erectus. (Estimados entre 700.000 e 1.000.000 anos, no momento da descoberta, os fósseis do Homem de Java eram os fósseis homininos mais antigos já encontrados). Os fósseis do Homem de Java foram alojados no Naturalis na Holanda de 1900 a 2025.\n[…]\nPorque tanto Lyell quanto Wallace acreditavam que os humanos estavam mais intimamente relacionados aos gibões e aos orangotangos, eles identificaram o Sudeste Asiático como o berço da humanidade porque é aí que esses macacos viviam. O anatomista holandês Eugène Dubois preferiu a última teoria e procurou confirmá-la.\n[…]\nEm outubro de 1887, Dubois abandonou sua carreira acadêmica e partiu para as Índias Orientais Holandesas (atual Indonésia) para procurar o antepassado fossilizado do homem moderno. Tendo recebido nenhum financiamento do governo holandês por seu esforço excêntrico - já que ninguém na época já havia encontrado um fóssil humano inicial enquanto o procurava - ele se juntou ao Exército holandês das Índias Orientais como cirurgião militar.\n[…]\nHomem de Pequim\n[…]\nHomo erectus soloensis\n[…]\nEugène Dubois\n[…]\nMedia relacionados com Homem de Java no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Criança de Taung",
      "descricao": "Crânio fóssil de um jovem Australopithecus africanus encontrado em Taung, na África do Sul, em 1924."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1925, que anatomista australiano descreveu a Criança de Taung e criou o nome Australopithecus africanus?",
    "resposta": "Raymond Dart",
    "fonte": [
      "https://en.wikipedia.org/wiki/Taung_Child",
      "https://en.wikipedia.org/wiki/Raymond_Dart"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taung_Child",
        "situacao": "ok",
        "texto": "The Taung Child (or Taung Baby) is the fossilised skull of a young Australopithecus africanus. It was discovered in Taung, South Africa in 1924 and described as a new species and genus by Raymond Dart in 1925. The skull was one of the first early hominin fossils to be found in Africa, and the first evidence that humanity originated from the continent.\n[…]\nWhen Josephine Salmons, a friend of the Izod family, paid a visit to Pat's home, she noticed the primate skull, identified it as from an extinct monkey and realising its possible significance mentioned it to her mentor, Raymond Dart.\n[…]\nOnly forty days after he first saw the fossil, Dart completed a paper that named the species of Australopithecus africanus, the \"southern ape from Africa\", and described it as \"an extinct race of apes intermediate between living anthropoids and man\". The paper appeared in the 7 February 1925 issue of the journal Nature. The fossil was soon nicknamed the Taung Child. It is the holotype of Australopithecus africanus with the accession number Taung 1.\n[…]\nAfter he became a paleontologist in 1933, Broom found adult fossils of Australopithecus africanus and discovered more robust fossils, which were named Paranthropus robustus (also known as Australopithecus robustus). Even after Dart chose to take a break from his work in anthropology, Broom undertook more excavations, and slowly began to find more specimens that caused scientists to conclude that Dart must have been correct in his analysis of the Taung Child; it did have human-like features.\n[…]\nIn 1938, Gregory visited South Africa and saw the Taung Child and the fossils that Broom had recently discovered. More convinced than ever that Dart and Broom were right, he called Australopithecus africanus \"the missing link no longer missing\".\n[…]\nSelam (Australopithecus)\n[…]\nImages of Taung 1 (archive)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raymond_Dart",
        "situacao": "ok",
        "texto": "Raymond Arthur Dart (4 February 1893 – 22 November 1988) was an Australian anatomist and anthropologist, best known for his involvement in the 1924 discovery of the first fossil found of Australopithecus africanus, an extinct hominin closely related to humans, at Taung in the North of South Africa in the Northwest province. He also did extensive work on physical anthropology in the tradition of sc\n[…]\nRaymond Dart was born in Toowong, a suburb of Brisbane, Queensland, Australia, the fifth of nine children and son of a farmer and tradesman. His birth occurred during the 1893 flood, which filled his parents' home and shop in Toowong. The family moved alternately between their country property near Laidley and their shop in Toowong. The young Dart attended Toowong State School, Blenheim State School and earned a scholarship to Ipswich Grammar School from 1906 to 1909.\n[…]\nDart died in Johannesburg in 1988.\n[…]\nThe Institute for the Study of Man in Africa was established in 1956 at Witwatersrand in his honour by Phillip Tobias. In 1964 the Raymond Dart Memorial Lecture was inaugurated at the Institute.\n[…]\nDart R.A. (1925): Australopithecus africanus: The Man-Ape of South Africa. Nature, Vol.115, No.2884 (1925) 195-9 (the original paper communicating the Taung finding, in PDF format).\n[…]\nMurray, Alexander ed. (1996): Skill and Poise: Articles on skill, poise and the F. M. Alexander Technique. Collection of Raymond Dart's papers. Hardcover, 192+xiv pages, b/w illustrations, 234 x 156 mm, index, UK, STAT Books.\n[…]\nTaung Child\n[…]\nEssay by C. K. Brain, \"Raymond Dart and our African origins,\" accompanying the reprint of Raymond Dart's 1925 Nature article in A Century of Nature: Twenty-One Discoveries that Changed Science and the World, Laura Garwin and Tim Lincoln, eds\n[…]\nBiography of Raymond Dart on Minnesota State University, Mankato EMuseum website\n[…]\nBiography of Raymond Dart in the TalkOrigins Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crian%C3%A7a_de_Taung",
        "situacao": "ok",
        "texto": "A Criança de Taung ou Bebê de Taung é o crânio fossilizado de um jovem indivíduo da espécie Australopithecus africanus descoberto em 1924 na cidade de Taung na África do Sul. Raymond Dart o descreveu como uma nova espécie na revista Nature em 1925.\n[…]\nSalmons visitava a casa de um amigo de sua família, Pat Izod, quando avistou um crânio fossilizado de feições primatas em cima de sua lareira. De imediato, pensou que aquele objeto poderia ser interessante para seu professor e mentor, Raymond Dart. De fato, ao ter acesso ao fóssil, Dart rapidamente tomou interesse por ele, especialmente porque era bastante raro encontrar restos de primatas na África Austral naquela época.\n[…]\nQuarenta dias depois, Dart completou o artigo que viria a denominar a espécie Australopithecus africanus, o “macaco do sul da África”. Mais tarde, o fóssil ganharia o apelido de Criança de Taung.\n[…]\nOs cientistas estavam relutantes em aceitar que a Criança de Taung e o novo gênero Australopithecus eram ancestrais dos humanos modernos. Porém, Raymond Dart não estava esperando que a aceitação de sua tese fosse imediata, só não imaginava que seria tão negativa. Após a publicação de seu artigo na Nature*, três importantes antropólogos da época foram críticos a sua conclusão: Arthur Keith, Grafton Elliot Smith e Arthur Smith Woodward.\n[…]\nA segunda razão é que, até 1940, a maioria dos antropólogos acreditava que os humanos tinham surgido na Ásia, não na África.\n[…]\nMesmo depois de Dart ter optado por dar uma pausa no seu trabalho em antropologia, Broom realizou mais escavações e, lentamente, começou a encontrar mais espécimes de Australopithecus africanus que provavam que Dart estava certo na sua análise da Criança de Taung; realmente tinha uma morfologia semelhante à humana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Criança de Taung",
      "descricao": "Crânio fóssil de um jovem Australopithecus africanus encontrado em Taung, na África do Sul, em 1924."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Marcas nas órbitas dos olhos da Criança de Taung indicam que ela foi morta por qual predador?",
    "resposta": "Uma águia",
    "distratores": [
      "Um leopardo",
      "Uma hiena",
      "Um crocodilo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taung_Child"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taung_Child",
        "situacao": "ok",
        "texto": "The Taung Child (or Taung Baby) is the fossilised skull of a young Australopithecus africanus. It was discovered in Taung, South Africa in 1924 and described as a new species and genus by Raymond Dart in 1925. The skull was one of the first early hominin fossils to be found in Africa, and the first evidence that humanity originated from the continent.\n[…]\nOnly forty days after he first saw the fossil, Dart completed a paper that named the species of Australopithecus africanus, the \"southern ape from Africa\", and described it as \"an extinct race of apes intermediate between living anthropoids and man\". The paper appeared in the 7 February 1925 issue of the journal Nature. The fossil was soon nicknamed the Taung Child. It is the holotype of Australopithecus africanus with the accession number Taung 1.\n[…]\nArthur Smith Woodward dismissed the Taung Child as having \"little bearing\" on the issue of \"whether the direct ancestors of man are to be sought in Asia or Africa\".\n[…]\nThere, too, Dart detailed how Taung's endocast was expanded globally in three different regions, contrary to the suggestion that he believed hominin brains evolved back-end-first, in a so-called mosaic fashion. This goes against Holloway's interpretation as he has indicated that the back area of the brain evolved before other regions of the brain, but it stands in agreement with Falk's belief that the brain evolved equally in a coordinated fashion instead.\n[…]\nUsing a biochronological approach examining the ratios of dimensions of lower first molar teeth, the date for the Taung Child can be placed around 2.58 million years, coincidentally at the boundary between the Pliocene and the Pleistocene.\n[…]\nImages of Taung 1 (archive)\n[…]\nNPR Radiolab podcast about the Taung Child (also contains some ancillary material)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Crian%C3%A7a_de_Taung",
        "situacao": "ok",
        "texto": "A Criança de Taung ou Bebê de Taung é o crânio fossilizado de um jovem indivíduo da espécie Australopithecus africanus descoberto em 1924 na cidade de Taung na África do Sul. Raymond Dart o descreveu como uma nova espécie na revista Nature em 1925.\n[…]\nDevido à falta de mais evidências fósseis na época, Dart tirou conclusões que foram inevitavelmente controversas. A ideia de que o crânio pertencia a um novo gênero foi identificada por comparação com crânios de chimpanzés. Seu crânio era maior que o de um chimpanzé adulto. A testa do chimpanzé recuou para formar uma sobrancelha pesada e uma mandíbula saliente; a testa da criança Taung recua, mas não deixa nenhuma sobrancelha.\n[…]\nNeste escrito, Falk descobriu que ela e Dart chegaram a conclusões semelhantes em torno do processo evolutivo do cérebro indicado por Taung. Embora Dart tenha identificado apenas dois sulcos potenciais no endocast de Taung em 1925, ele identificou e ilustrou 14 sulcos adicionais nesta monografia ainda não publicada.\n[…]\nNum primeiro momento achava-se que a Criança de Taung tinha cerca de seis anos de idade devido a existência da dentição de leite, mas agora acredita-se que a idade está entre três e quatro anos com base em estudos nas taxas de deposição do esmalte dentário. A criança media cerca de 105 centímetros de altura e pesava entre nove e dez quilos, com uma capacidade craniana entre 400–500 cm³.\n[…]\nEm 2006 foi anunciado que a Criança de Taung foi morta provavelmente por uma águia ou outra ave predadora. Chegou-se a essa conclusão por notar semelhanças no dano ao crânio e órbitas oculares da criança com danos aos crânios de primatas modernos sabidamente mortos por águias.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Pegadas de Laetoli",
      "descricao": "Trilha de pegadas fossilizadas de hominídeos bípedes no sítio de Laetoli, na Tanzânia, descoberta pela equipe de Mary Leakey em 1978."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As pegadas de hominídeos de Laetoli, na Tanzânia, se conservaram até hoje porque foram marcadas em que material?",
    "resposta": "Cinza vulcânica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Laetoli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laetoli",
        "situacao": "ok",
        "texto": "Laetoli is a pre-historic site located in Enduleni ward of Ngorongoro District in Arusha Region, Tanzania. The site is dated to the Plio-Pleistocene and famous for its Hominina footprints, preserved in volcanic ash. The site of the Laetoli footprints (Site G) is located 45 km south of Olduvai Gorge. The location and tracks were discovered by paleoanthropologist Mary Leakey and her team in 1976, an\n[…]\nIn 1978, Leakey's 1976 discovery of hominin tracks—\"The Laetoli Footprints\"—provided convincing evidence of bipedalism in Pliocene hominins and gained significant recognition by both scientists and laymen.\n[…]\nBased on stratigraphic analysis, the findings also provide insight into the climate at the time of the making of the footprints. Pliocene sediments show that the environment was more moist and productive than now. Climate changes that caused a shift from forest to grassland environments have a strong correlation with upright posture and bipedalism in hominins. This could have initiated the evolution to bipedalism of the hominins found at Laetoli.\n[…]\nIn 1979, after the Laetoli footprints were recorded, they were re-buried as a then-novel way of preservation. The site was re-vegetated by acacia trees, which later gave rise to fears over root growth. In mid-1992, a GCI-Tanzanian team investigated this by opening a three-by-three meter trench, which showed that roots had damaged the footprints. However, the part of the trackway unaffected by root growth showed exceptional preservation.\n[…]\nWhite, T.D. & Suwa, G. (1987). Hominid footprints at Laetoli: Facts and Interpretations. American Journal of Physical Anthropology. 72 (4). pp. 485–514.\n[…]\nLeakey, M. D. and Hay, R. L. - Pliocene footprints in the Laetolil Beds at Laetoli, northern Tanzania - Nature\n[…]\nHominid Footprints and Laetoli: Facts and Interpretations (1987) White, Suwa\n[…]\nThe Laetoli Footprints (1996) Agnew, Demas, Leakey"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laetoli",
        "situacao": "ok",
        "texto": "Laetoli é um sítio paleoantropológico do período Plioceno (com idade estimada entre 3,5 milhões e 3,8 milhões de anos), localizado na Área de Conservação de Ngorongoro, ao norte da Tanzânia. Está situado próximo ao vulcão Sadiman e ao sopé do monte Oldeani. Este sítio é reconhecido principalmente pelas Pegadas de Laetoli, uma trilha de aproximadamente 27 metros (88 pés) contendo cerca de 70 pegada\n[…]\nEssas pegadas estão preservadas em cinzas vulcânicas consolidadas, conhecidas como tufos .\n[…]\nDescoberta das pegadas\n[…]\nIdade e Datação das pegadas\n[…]\nA idade das pegadas de Laetoli foi determinada através de datação radiométrica por argônio-potássio e análises paleomagnéticas, que revelaram a polaridade magnética da Terra no período da deposição das cinzas. Estes métodos indicaram uma idade de aproximadamente 3,66 milhões de anos, colocando as pegadas na mesma época de outros fósseis significativos de hominídeos, como os do Australopithecus afarensis.\n[…]\nAs pegadas revelam uma diversidade locomotora entre os hominíneos do Plioceno, sugerindo a coexistência de múltiplas espécies com morfologias de pés e padrões de marcha distintos em Laetoli. Isso indica que a evolução do bipedalismo não seguiu um caminho linear, mas sim um cenário complexo com várias espécies experimentando diferentes estratégias de locomoção.\n[…]\nConservação e Preservação\n[…]\nO sítio de Laetoli está sob a proteção da Autoridade de Conservação da Área de Ngorongoro (NCAA) e possui status de Patrimônio Mundial da UNESCO. É mantido com rigorosas medidas de preservação para evitar a erosão e a degradação das pegadas. Estas medidas incluem a construção de abrigos para proteger as pegadas das intempéries e restrições de acesso público para prevenir danos .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pegadas de Laetoli",
      "descricao": "Trilha de pegadas fossilizadas de hominídeos bípedes no sítio de Laetoli, na Tanzânia, descoberta pela equipe de Mary Leakey em 1978."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "As pegadas fossilizadas de Laetoli, deixadas por hominídeos que andavam em pé, têm cerca de quantos anos?",
    "resposta": "3,6 milhões de anos",
    "distratores": [
      "300 mil anos",
      "1,2 milhão de anos",
      "7 milhões de anos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Laetoli"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laetoli",
        "situacao": "ok",
        "texto": "Laetoli is a pre-historic site located in Enduleni ward of Ngorongoro District in Arusha Region, Tanzania. The site is dated to the Plio-Pleistocene and famous for its Hominina footprints, preserved in volcanic ash. The site of the Laetoli footprints (Site G) is located 45 km south of Olduvai Gorge. The location and tracks were discovered by paleoanthropologist Mary Leakey and her team in 1976, an\n[…]\nDated to 3.7 million years ago, they were the oldest known evidence of hominin bipedalism at that time. Subsequently, older Ardipithecus ramidus fossils were found with features that suggest bipedalism. With the footprints there were other discoveries excavated at Laetoli including Hominina and animal skeletal remains. Analysis of the footprints and skeletal structure showed clear evidence that bipedalism preceded enlarged brains in Hominina.\n[…]\nThe upper unit of the Laetolil Beds dated back 3.6 to 3.8 million years ago. The beds are dominantly tuffs and have a maximum thickness of 130 meters. No mammalian fauna were found in the lower unit of the Laetolil Beds, and no date could be assigned to this layer.\n[…]\nTuttle, R.H., Webb, D.M., & Baksh, M. (1991). Laetoli Toes and Australopithecus afarensis. Human Evolution. 6 (3) pp. 193–200.\n[…]\nTuttle, R.H. (2008). Footprint Clues in Hominid Evolution and Forensics: Lessons and Limitations. Ichnos. 15 (3-4), pp. 158–165.\n[…]\nMary D. Leakey and J. M. Harris (eds), Laetoli:  a Pliocene site in Northern Tanzania (Oxford, Clarendon Press 1987). ISBN 0-19-854441-3.\n[…]\nLaetoli Footprints - PBS - Evolution\n[…]\nSedimentology, Lithostratigraphy and Depositional History of the Laetoli Area (2011) Ditchfeld & Harrison https://doi.org/10.1007%2F978-90-481-9956-3_3\n[…]\nDescription of Australopithecus Afarensis. http://archaeologyinfo.com/australopithecus-afarensis/-Create 3 new sections: Interpretation, controversy of the footprints, and preservation and conservation problems"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laetoli",
        "situacao": "ok",
        "texto": "Laetoli é um sítio paleoantropológico do período Plioceno (com idade estimada entre 3,5 milhões e 3,8 milhões de anos), localizado na Área de Conservação de Ngorongoro, ao norte da Tanzânia. Está situado próximo ao vulcão Sadiman e ao sopé do monte Oldeani. Este sítio é reconhecido principalmente pelas Pegadas de Laetoli, uma trilha de aproximadamente 27 metros (88 pés) contendo cerca de 70 pegada\n[…]\nEssas pegadas estão preservadas em cinzas vulcânicas consolidadas, conhecidas como tufos .\n[…]\nDescoberta das pegadas\n[…]\nIdade e Datação das pegadas\n[…]\nA idade das pegadas de Laetoli foi determinada através de datação radiométrica por argônio-potássio e análises paleomagnéticas, que revelaram a polaridade magnética da Terra no período da deposição das cinzas. Estes métodos indicaram uma idade de aproximadamente 3,66 milhões de anos, colocando as pegadas na mesma época de outros fósseis significativos de hominídeos, como os do Australopithecus afarensis.\n[…]\nAs pegadas de Laetoli têm uma importância crucial para a compreensão da evolução humana, especialmente no que diz respeito à transição da locomoção quadrúpede para a bípede. Elas corroboram a ideia de que o bipedalismo era uma característica estabelecida milhões de anos antes do desenvolvimento de cérebros maiores e da criação de ferramentas complexas. Os primeiros humanos que deixaram essas pegadas eram bípedes, com os dedões dos pés alinhados com o restante do pé.\n[…]\nAs pegadas revelam uma diversidade locomotora entre os hominíneos do Plioceno, sugerindo a coexistência de múltiplas espécies com morfologias de pés e padrões de marcha distintos em Laetoli. Isso indica que a evolução do bipedalismo não seguiu um caminho linear, mas sim um cenário complexo com várias espécies experimentando diferentes estratégias de locomoção.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Eva mitocondrial",
      "descricao": "Ancestral comum mais recente, pela linhagem materna, de todos os seres humanos vivos, identificada pelo DNA mitocondrial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a busca do ancestral comum da humanidade pelo DNA mitocondrial chega a uma mulher, e não a um homem?",
    "resposta": "Esse DNA é herdado da mãe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mitochondrial_Eve"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mitochondrial_Eve",
        "situacao": "ok",
        "texto": "In human genetics, the Mitochondrial Eve (more technically known as the Mitochondrial-Most Recent Common Ancestor, shortened to mt-Eve or mt-MRCA) is the matrilineal most recent common ancestor (MRCA) of all living humans. In other words, she is defined as the most recent woman from whom all living humans descend in an unbroken line purely through their mothers and through the mothers of those mot\n[…]\nThe mitochondrial clade which Mitochondrial Eve defines is the species Homo sapiens sapiens itself, or at least the current population or \"chronospecies\" as it exists today. In principle, earlier Eves can also be defined going beyond the species, for example one who is ancestral to both modern humanity and Neanderthals, or, further back, an \"Eve\" ancestral to all members of genus Homo and chimpanzees in genus Pan.\n[…]\nIn River Out of Eden (1995), Richard Dawkins discussed human ancestry in the context of a \"river of genes\", including an explanation of the concept of Mitochondrial Eve. The Seven Daughters of Eve (2002) presented the topic of human mitochondrial genetics to a general audience. The Real Eve: Modern Man's Journey Out of Africa by Stephen Oppenheimer (2003) was adapted into a 2002 Discovery Channel documentary.\n[…]\nMitochondrial Eve, the most recent female-line common ancestor of all living people.\n[…]\nIt may seem improbable that, among the many women alive at the time of the most recent common matrilineal ancestor of all living humans (“mitochondrial Eve”), only a single maternal lineage has survived to the present. This intuition may rest on the assumption that human populations were large and persistently growing, conditions under which multiple lineages would be expected to persist.\n[…]\nKrishna Kunchithapadam, \"What, if anything, is a Mitochondrial Eve?\" a simple explanation\n[…]\nThe Real Eve: Modern Man's Journey Out of Africa – by Stephen Oppenheimer – Discovery Channel, 2002"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eva_mitocondrial",
        "situacao": "ok",
        "texto": "A Eva Mitocondrial se baseia no conceito do Ancestral Comum Mais Recente (MRCA, do inglês Most Recent Common Ancestor). Nos humanos, durante a fecundação, a única parte do espermatozóide que entra no ovócito é o núcleo. Portanto, em um zigoto, a contribuição genética paterna é exclusivamente nuclear, enquanto a materna não se restringe somente ao núcleo e também é extranuclear.\n[…]\nPesquisadores da Universidade da Califórnia concluíram que todos os humanos eram descendentes de um grupo relativamente pequeno de mulheres que viveram na África há cerca de 200 mil anos, que denominaram de Eva Mitocondrial. Eles se basearam na análise do DNA retirado das mitocôndrias, que difere do DNA do núcleo da célula e é transmitido apenas pela linhagem feminina. Ele sofre mutações em taxas mais rápidas do que o DNA nuclear.\n[…]\nComparando o DNA mitocondrial de mulheres de vários grupos étnicos, eles puderam estimar quanto tempo se passou para que cada grupo assumisse características distintas a partir de um ancestral comum. De fato, eles  construíram uma árvore genealógica para o gênero humano, na base da qual estavam a Eva Mitocondrial, a grande avó de todos os humanos.\n[…]\nEm “O rio que saia do Éden” publicado em 1995, Richard Dawkins discutiu a ancestralidade humana no contexto de um \"rio de genes\", incluindo uma explicação do conceito de Eva mitocondrial. “As 7 filhas de Eva” de 2002 apresentou o tema da genética mitocondrial humana para uma audiência geral.\n[…]\nPor fim, “A Eva real: Jornada do Homem Moderno para além da África” (The Real Eve: Modern Man's Journey Out of Africa) por Stephen Oppenheimer (2003) foi adaptado em um documentário do Discovery Channel, que está disponível gratuitamente no YouTube em português.\n[…]\n«A Eva mitocondrial - Colunista prova matematicamente que temos uma ancestral comum e somos todos parentes - cienciahoje.uol.com.br»  [ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Cromossomo 2 humano",
      "descricao": "Segundo maior cromossomo humano, resultado da fusão de dois cromossomos que permanecem separados nos outros grandes primatas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Chimpanzés e gorilas têm vinte e quatro pares de cromossomos, e nós temos vinte e três. Que evento na linhagem humana explica essa diferença?",
    "resposta": "A fusão de dois cromossomos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Chromosome_2"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chromosome_2",
        "situacao": "ok",
        "texto": "Chromosome 2 is one of the twenty-three pairs of chromosomes in humans. People normally have two copies of this chromosome. Chromosome 2 is the second-largest human chromosome, spanning more than 242 million base pairs and representing almost eight percent of the total DNA in human cells.\n[…]\nThe correspondence of chromosome 2 to two ape chromosomes. The closest human relative, the chimpanzee, has nearly identical DNA sequences to human chromosome 2, but they are found in two separate chromosomes. The same is true of the more distant gorilla and orangutan.\n[…]\nIn 2026, it was reported that incomplete lineage sorting of segmental duplications defines the human chromosome 2 fusion site early during African great ape speciation.\n[…]\nThe following are some of the gene count estimates of human chromosome 2. Because researchers use different approaches to genome annotation, their predictions of the number of genes on each chromosome vary. Among various projects, the collaborative consensus coding sequence project (CCDS) takes an extremely conservative strategy. So CCDS's gene number prediction represents a lower bound on the total number of human protein-coding genes.\n[…]\nThe following is a partial list of genes on human chromosome 2. For complete list, see the link in the infobox on the right.\n[…]\nPartial list of the genes located on p-arm (short arm) of human chromosome 2:\n[…]\nPartial list of the genes located on q-arm (long arm) of human chromosome 2:\n[…]\nThe following diseases and traits are related to genes located on chromosome 2:\n[…]\nNational Institutes of Health. \"Chromosome 2\". Genetics Home Reference. Archived from the original on 9 March 2016. Retrieved 6 May 2017.\n[…]\n\"Chromosome 2\". Human Genome Project Information Archive 1990–2003. Retrieved 6 May 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cromossoma_2",
        "situacao": "ok",
        "texto": "O cromossoma 2 é um dos 23 pares de cromossomas do cariótipo humano. É o segundo maior cromossoma humano. Tem cerca de 237 milhões de pares de bases e representa quase 8% do total de DNA nas células. Contém entre 1300 e 2000 genes.\n[…]\nO Cromossomo 2 é amplamente aceito como resultado de uma fusão telômero-telômero entre dois cromossomos ancestrais. As evidências disso incluem:\n[…]\nA correspondência do cromossomo 2 com dois cromossomos de símios. O parente mais próximo do homem, o chimpanzé, tem seqüências de DNA quase totalmente idênticas ao cromossomo 2 humano porém em dois cromossomos separados. O mesmo é fato para mais distantes como o gorila e o orangotango.\n[…]\nA presença de um centrômero vestigial. Normalmente um cromossomo possui apenas um centrômero mas no cromossomo 2 encontram-se vestígios de um segundo.\n[…]\nA presença de telômeros vestigiais. Esses são normalmente encontrados apenas nos finais do cromossomo mas no cromossomo 2 encontramos seqüências de telômeros no meio.\n[…]\nO cromossomo 2 é, assim, forte evidência da origem comum de humanos e outros primatas. Segundo o pesquisador J. W. IJdo:\n[…]\n\"Nós concluimos que o locus clonado nos cosmídios c8.1 e c29B é a lembrança de uma antiga fusão telômero-telômero e marca o ponto em que dois cromossomos simiescos ancestrais fundiram-se originando o cromossomo 2 humano.\"\n[…]\nAlguns dos genes localizados no cromossoma 2:\n[…]\nAlgumas das doenças relacionadas com genes localizados no cromossoma 2:\n[…]\nEsclerose lateral amiotrófica, tipo 2",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Persistência da lactase",
      "descricao": "Característica genética que mantém a produção da enzima lactase na vida adulta, permitindo digerir o leite."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A capacidade de digerir leite na idade adulta se espalhou em certas populações humanas graças a que atividade dos seus antepassados?",
    "resposta": "Criação de gado leiteiro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lactase_persistence"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lactase_persistence",
        "situacao": "ok",
        "texto": "Lactase persistence or lactose tolerance is the continued activity of the lactase enzyme in adulthood, allowing the digestion of lactose in milk. In most mammals, the activity of the enzyme is dramatically reduced after weaning. In some human populations though, lactase persistence has recently evolved as an adaptation to the consumption of nonhuman milk and dairy products beyond infancy. Lactase \n[…]\nThe correlation between lactase persistence frequencies and latitude in 33 populations in Europe was found to be positive and significant, while the correlation between lactase persistence and longitude was not, suggesting that high levels of lactose assimilation were indeed useful in areas of low sunlight in northern Europe.\n[…]\nHuman populations differ in the prevalence of genotypic lactase persistence, phenotypic lactose tolerance, and habitual milk consumptions. An individual's capacity to absorb milk is widespread under three conditions.\n[…]\nAccording to the gene-culture coevolution hypothesis, the ability to digest lactose into adulthood (lactase persistence)  became advantageous to humans after the invention of animal husbandry and the domestication of animal species that could provide a consistent source of milk. Hunter-gatherer populations before the Neolithic Revolution were overwhelmingly lactose intolerant, as are modern hunter-gatherers.\n[…]\nSome examples exist of factors that can cause the lactase persistence phenotype in the absence of any genetic variant associated with LP. Individuals may lack the alleles for lactase persistence, but still tolerate dairy products in which lactose is broken down by the fermentation process (e.g. cheese, yoghurt). Also, healthy colonic gut bacteria may aid in the breakdown of lactose, allowing those without the genetics for lactase persistence to gain the benefits from milk consumption.\n[…]\nGlobal lactase persistence phenotype frequencies"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Persist%C3%AAncia_da_lactase",
        "situacao": "ok",
        "texto": "A persistência da lactase é a atividade continuada da enzima lactase na idade adulta, permitindo a digestão da lactose no leite. Na maioria dos mamíferos, a atividade da enzima é drasticamente reduzida após o desmame. Em algumas populações humanas, porém, a persistência da lactase evoluiu recentemente  como uma adaptação ao consumo de leite não humano e produtos lácteos além da infância. A persist\n[…]\nA distribuição do fenótipo de persistência da lactase (PL), ou a capacidade de digerir a lactose na idade adulta, não é homogênea no mundo. As frequências de persistência da lactase são altamente variáveis. Na Europa, a distribuição do fenótipo de persistência da lactase é gradual, com frequências variando de 15 a 54% no sudeste a 89 a 96% no noroeste.\n[…]\nDe acordo com a hipótese da coevolução gene-cultura, a capacidade de digerir a lactose na idade adulta (persistência da lactase) tornou-se vantajosa para os humanos após a invenção da pecuária e a domesticação de espécies animais que poderiam fornecer uma fonte consistente de leite. As populações de caçadores-coletores antes da revolução neolítica eram predominantemente intolerantes à lactose,   assim como os caçadores-coletores modernos.\n[…]\nEstudos genéticos sugerem que as mutações mais antigas associadas à persistência da lactase só atingiram níveis apreciáveis em populações humanas nos últimos 10.000 anos. Isso se correlaciona com o início da domesticação animal, que ocorreu durante a transição neolítica.\n[…]\nPortanto, a persistência da lactase é frequentemente citada como um exemplo de evolução humana recente  e, como a persistência da lactase é uma característica genética, mas a criação de animais é uma característica cultural, a coevolução da cultura genética na simbiose mútua humano-animal iniciada com o advento da agricultura.\n[…]\nLactase",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Cor da pele humana",
      "descricao": "Variação da pigmentação da pele entre populações humanas, ligada principalmente à quantidade de melanina e à exposição ao sol."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a explicação mais aceita, a pele clara se tornou comum longe dos trópicos porque, com pouco sol, facilita a produção de que vitamina?",
    "resposta": "Vitamina D",
    "fonte": [
      "https://en.wikipedia.org/wiki/Human_skin_color"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Human_skin_color",
        "situacao": "ok",
        "texto": "Human skin color, also known as skin tone, ranges from the darkest brown to the lightest hues. Differences in skin color among individuals are caused by variation in pigmentation, which is largely due to genetics (inherited from one's biological parents), and, in adults in particular, to exposure to the sun, disorders, or some combination thereof.\n[…]\nUnder these conditions, there was less photodestruction of folate and so the evolutionary pressure working against the survival of lighter-skinned gene variants was reduced. In addition, lighter skin is able to generate more vitamin D (cholecalciferol) than darker skin, so it would have represented a health benefit in reduced sunlight if there were limited sources of vitamin D. Hence the leading hypothesis for the evolution of human skin color proposes that:\n[…]\nWomen from some darker-skinned populations may have lighter skin than men so their bodies can absorb more vitamin D during pregnancy, which improves calcium absorption. In light skinned populations, namely those of European descent, multiple different studies using up-to-date and robust statistical methods find that women have similar skin color to men. At least one study of Spanish individuals actually found that men tend to have lighter skin pigmentation than women.\n[…]\nHowever, some authors have cast doubt on the theory that vitamin D synthesis is related to the sexual dimorphism of human skin color in these populations.\n[…]\nModern lifestyles and mobility have created mismatch between skin color and environment for many individuals. Vitamin D deficiencies and UVR overexposure are concerns for many. It is important for these people individually to adjust their diet and lifestyle according to their skin color, the environment they live in, and the time of year.\n[…]\n\"The Biology of Skin Color — HHMI BioInteractive Video\"—YouTube"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cor_da_pele_humana",
        "situacao": "ok",
        "texto": "Cor da pele humana se refere à variedade de tons de pele desde a   marrom mais escuro até a pele clara. A pigmentação da pele de um indivíduo é o resultado da genética, sendo o produto da composição genética de ambos os pais biológicos do indivíduo e da exposição ao sol. Na evolução, a pigmentação da pele em seres humanos evoluiu por um processo de seleção natural principalmente para regular a qua\n[…]\nExiste uma correlação direta entre a distribuição geográfica da radiação ultravioleta (UV) e a distribuição da pigmentação da pele indígena em todo o mundo. Áreas que recebem maiores quantidades de UV, geralmente localizadas mais próximas ao equador, tendem a ter populações de pele mais escura. Áreas que estão distantes dos trópicos e mais próximas aos polos têm menor intensidade de UV, o que se reflete em populações de pele mais clara.\n[…]\nOs pesquisadores sugerem que as populações humanas nos últimos 50.000 anos mudaram de pele escura para pele clara e vice-versa à medida que migraram para diferentes zonas UV, e que tais mudanças importantes na pigmentação podem ter acontecido em menos de 100 gerações (± 2.500 anos) através de varredura seletiva. A cor natural da pele também pode escurecer como resultado do bronzeamento devido à exposição à luz solar.\n[…]\nO corpo sintetiza a vitamina D da luz solar, o que ajuda a absorver cálcio, assim as mulheres evoluíram para ter uma pele mais clara, de modo que seus corpos absorvem mais cálcio.\n[…]\nA seleção natural levou ao fato de haver mulheres com pele mais clara do que os homens em todas as populações indígenas, porque as mulheres devem ter o suficiente de vitamina D e cálcio para apoiar o desenvolvimento do feto e para manter a sua própria saúde.\n[…]\nRaças humanas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Traço falciforme",
      "descricao": "Condição de quem herda uma única cópia do gene da anemia falciforme, comum em populações de origem africana."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O gene da anemia falciforme continuou comum na África porque quem tem uma só cópia dele fica mais protegido contra qual doença?",
    "resposta": "Malária",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sickle_cell_trait"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sickle_cell_trait",
        "situacao": "ok",
        "texto": "Sickle cell trait describes a condition in which a person has one abnormal allele of the hemoglobin beta gene (is heterozygous), but does not display the severe symptoms of sickle cell disease that occur in a person who has two copies of that allele (is homozygous). Those who are heterozygous for the sickle cell allele produce both normal and abnormal hemoglobin (the two alleles are codominant wit\n[…]\nThe sickle cell trait provides a survival advantage against malaria fatality over people with normal hemoglobin in regions where malaria is endemic. The trait is known to cause significantly fewer deaths due to malaria, especially when Plasmodium falciparum is the causative organism. This is a prime example of natural selection, evidenced by the fact that the geographical distribution of the gene for hemoglobin S and the distribution of malaria in Africa virtually overlap.\n[…]\nRenal medullary carcinoma, a cancer affecting the kidney, is a very rare complication seen in patients with sickle cell trait.\n[…]\nThe significance of the sickle-cell trait is that it does not show any symptoms, nor does it cause any major difference in blood cell count. There are about 30% of people who carry the sickle cell trait that are naturally protected against malaria. With malaria and sickle cell trait occurrences appearing to have risen in Africa, India and the Middle East. Some findings also show the reduction of the sickle-cell trait in those who retain much more fetal hemoglobin than usual in adulthood.\n[…]\nAlpha-thalassemia, like sickle cell trait, is typically inherited in areas with increased exposure to malaria. It manifests itself as a decreased expression of alpha-globin chains, causing an imbalance and excess of beta-globin chains, and can occasionally result in anemic symptoms. The abnormal hemoglobin can cause the body to destroy red blood cells, essentially causing anemia."
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Cóccix",
      "descricao": "Pequeno osso formado por vértebras fundidas na extremidade inferior da coluna vertebral humana."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O cóccix, pequeno osso na ponta da nossa coluna, é considerado o resquício de que parte do corpo dos nossos ancestrais?",
    "resposta": "Cauda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Coccyx"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coccyx",
        "situacao": "ok",
        "texto": "The coccyx (pl.: coccyges or coccyxes), commonly referred to as the tailbone, is the final segment of the vertebral column in all apes, and analogous structures in certain other mammals such as horses. In tailless primates (e.g. humans and other great apes) since Nacholapithecus (a Miocene hominoid), the coccyx is the remnant of a vestigial tail. In animals with bony tails, it is known as tailhead\n[…]\nThe borders of the coccyx are narrow, and give attachment on either side to the sacrotuberous and sacrospinous ligaments, to the coccygeus and levator ani in front of the ligaments, and to the gluteus maximus behind them.\n[…]\nThe term coccyx is derived from the ancient Greek word κόκκυξ kokkyx \"cuckoo\"; the latter is attested in the writings of the Greek physician Herophilus to denote the end of the vertebral column. This Greek name for the cuckoo was applied as the last three or four bones of the coccyx resemble the beak of this bird, when viewed from the side.\n[…]\nThe 16th/17th century French anatomist Jean Riolan the Younger gives a rather hilarious etymological explanation, as he writes: quia crepitus, qui per sedimentum exeunt, ad is os allisi, cuculi vocis similitudinem effingunt (because the sound of the farts that leave the anus and dash against this bone, shows a likeness to the call of the cuckoo). Riolan's explanation is not considered credible.\n[…]\nBesides os cuculi, os caudae, with caudae, of the tail is attested. This Latin expression might be the source of the English, French language, German and Dutch terms tailbone, l'os de la queue, Schwanzbein and staartbeen. In the current official anatomic Latin nomenclature, Terminologia Anatomica, coccyx and os coccygis is used.\n[…]\nCoccydynia (coccyx pain, tailbone pain) at eMedicine (Peer-reviewed medical chapter, available free online)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3ccix",
        "situacao": "ok",
        "texto": "O cóccix (pronuncia-se \"cók-sis\") é um pequeno osso da parte inferior da coluna vertebral restante do que antes se integrava a cauda. É constituído por quatro vértebras coccígeas, soldadas entre si, sendo as inferiores progressivamente menores. A vértebra superior apresenta uma faceta elíptica que se articula com o sacro. Atrás desta localizam-se duas saliências verticais denominadas pequenos corn\n[…]\nDe cada lado encontram-se dois prolongamentos transversais denominados grandes cornos do cóccix.\n[…]\nO cóccix articula-se com o sacro através dos seguintes ligamentos:\n[…]\nOs ligamentos sacro-coccígeos laterais são constituídos por dois feixes, um medial unindo o sacro aos pequenos cornos do cóccix, e outro lateral unindo o sacro aos grandes cornos do cóccix.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Homem de Neandertal",
      "descricao": "Espécie humana extinta que viveu na Europa e na Ásia Ocidental até cerca de 40 mil anos atrás."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que a maioria das pessoas com ancestrais de fora da África tem em comum com os Neandertais?",
    "resposta": "Uma pequena parte do DNA",
    "fonte": [
      "https://en.wikipedia.org/wiki/Interbreeding_between_archaic_and_modern_humans",
      "https://en.wikipedia.org/wiki/Neanderthal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Interbreeding_between_archaic_and_modern_humans",
        "situacao": "ok",
        "texto": "Interbreeding between archaic humans (such as Neanderthals and Denisovans) and anatomically modern humans (contemporaneous Homo sapiens) took place during the Middle Paleolithic and early Upper Paleolithic. It has been revealed via genomic sequencing that all modern human populations outside of Africa today carry approximately 1–4% Neanderthal DNA, which is a result of genetic admixture that occur\n[…]\nReich states that all present-day non Sub-Saharan Africans have around 2% of Neanderthal ancestry.\n[…]\nAlthough less parsimonious than recent gene flow, the observation may have been due to ancient population sub-structure in Africa, causing incomplete genetic homogenization within modern humans when Neanderthals diverged while early ancestors of Eurasians were still more closely related to Neanderthals than those of Africans were to Neanderthals.\n[…]\nThe earliest (before about 33 ka BP) European modern humans and the subsequent (Middle Upper Paleolithic) Gravettians, falling anatomically largely in line with the earliest (Middle Paleolithic) African modern humans, also show traits that are distinctively Neanderthal, suggesting that a solely Middle Paleolithic modern human ancestry was unlikely for European early modern humans.\n[…]\nAccording to a study published in 2020, there are indications that 2% to 19% (or about ≃6.6 and ≃7.0%) of the DNA of four West African populations may have come from an unknown archaic hominin which split from the ancestor of humans and Neanderthals between 360 kya to 1.02 mya.\n[…]\nRoger et al. (2020) describes an event of admixture that occurred soon after Neandersovans (common ancestor of Neanderthals and Denisovans) started to expand into Eurasia. They met a lineage of superarchaic hominins that had been separated from African homo lineages since at least 2 Ma ago.\n[…]\nNeanderthal extinction"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Neanderthal",
        "situacao": "ok",
        "texto": "Neanderthals ( nee-AN-də(r)-TAHL, nay-, -⁠THAHL; Homo neanderthalensis or sometimes Homo sapiens neanderthalensis) are an extinct group of archaic humans who inhabited Europe and Western and Central Asia during the Middle to Late Pleistocene. Neanderthal extinction occurred roughly 40,000 years ago with the immigration of modern humans (Cro-Magnons), but Neanderthals in Gibraltar may have persiste\n[…]\nBy the mid-twentieth century, it was believed that human evolution progressed from an ape-like ancestor through a \"Neanderthal phase\" to modern humans. This gave way to the \"Out of Africa\" theory in the 1970s. Sequencing of the Neanderthal genome in 2010 revealed that Neanderthals interbred with modern humans.\n[…]\nIn the 1970s, with the formulation of cladistics and the consequent refinement of the anatomical definitions of species, this \"global morphological pattern\" fell apart. The \"Neanderthaloids\" of Africa and East Asia were reclassified as distant relatives to H. neanderthalensis. At around the same time, the \"Out of Asia\" hypothesis was overturned by the \"Out of Africa\" hypothesis, which posited that all modern humans share a fully modern common ancestor (monogenism).\n[…]\nThe first Neanderthal genome sequence was published in 2010, and strongly indicated interbreeding between Neanderthals and early modern humans. Neanderthal-derived genes descend from at least 2 interbreeding episodes outside of Africa: one about 250,000 years ago and another 40,000 to 54,000 years ago. Interbreeding also occurred in other populations which are not ancestral to any living person. An individual whose ancestry lies beyond sub-Saharan Africa may carry about 2% of Neanderthal DNA.\n[…]\nHomo naledi – South African archaic human species\n[…]\n\"Homo neanderthalensis\". The Smithsonian Institution. February 14, 2010.\n[…]\nAlex, Bridget (February 21, 2024). \"What's Behind the Evolution of Neanderthal Portraits\". SAPIENS."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cruzamento_entre_humanos_arcaicos_e_modernos",
        "situacao": "ok",
        "texto": "Há evidências de cruzamentos entre humanos arcaicos e modernos durante o Paleolítico Médio e início do Paleolítico Superior, tendo acontecido por meio de vários eventos independentes que incluíram neandertais e denisovanos, bem como vários hominídeos não identificados.\n[…]\nO DNA neandertal foi encontrado nos genomas da maioria ou possivelmente de todas as populações contemporâneas, variando visivelmente por região. É responsável por 1 a 4% dos genomas modernos de pessoas fora da África e 0,3% dos genomas de africanos. A genética neandertal é mais alta nos asiáticos orientais, intermediária nos europeus e mais baixa nos asiáticos do sudeste. De acordo com algumas pesquisas, também é menor nos melanésios em comparação com os asiáticos e os europeus.\n[…]\nA ancestralidade denisovana está ausente nas populações modernas da África e da Eurásia Ocidental (Europa e Oriente Médio), sendo encontrada em populações da Ásia Oriental, Sudeste Asiático, Sul da Ásia e Oceania. Estima-se que entre entre 0,5 e 1% do genoma dos povos da Ásia Oriental e Sudeste Asiático e dos ameríndios é derivado dos denisovanos, enquanto que essa taxa nos aborígenes australianos e melanésios é de 5 a 6%, alcançando o auge em populações negritas das Filipinas.\n[…]\nNa África, foram encontrados alelos arcaicos consistentes com vários eventos de mistura independentes no subcontinente. Atualmente, não se sabe quem eram esses hominídeos africanos arcaicos.\n[…]\nEm 2019, cientistas descobriram evidências, baseadas em estudos genéticos utilizando inteligência artificial, que sugerem a existência de uma espécie humana ancestral desconhecida, que não os neandertais ou denisovanos, no genoma dos humanos modernos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Homem de Neandertal",
      "descricao": "Espécie humana extinta que viveu na Europa e na Ásia Ocidental até cerca de 40 mil anos atrás."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes hominídeos, qual tinha, em média, o maior cérebro?",
    "resposta": "Neandertal",
    "distratores": [
      "Homo erectus",
      "Homo habilis",
      "Australopithecus afarensis"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Neanderthal",
      "https://en.wikipedia.org/wiki/Homo_erectus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neanderthal",
        "situacao": "ok",
        "texto": "Neanderthals ( nee-AN-də(r)-TAHL, nay-, -⁠THAHL; Homo neanderthalensis or sometimes Homo sapiens neanderthalensis) are an extinct group of archaic humans who inhabited Europe and Western and Central Asia during the Middle to Late Pleistocene. Neanderthal extinction occurred roughly 40,000 years ago with the immigration of modern humans (Cro-Magnons), but Neanderthals in Gibraltar may have persiste\n[…]\nThe binomial name Homo neanderthalensis was first proposed by William King in a paper read to the 33rd British Science Association in 1863, formally recognising it as distinct from modern humans. However, in 1864 he recommended that Neanderthals and modern humans be classified in different genera as he compared the Neanderthal braincase to that of a chimpanzee and argued that they were \"incapable of moral and [theistic] conceptions\".\n[…]\nNeanderthals collected non-functional, uniquely-shaped objects, namely shells, fossils, and gems. It is unclear if these objects were simply picked up for their aesthetic qualities, or if some symbolic significance was applied to them. Some shells may have been painted. Gibraltarian palaeoanthropologists Clive and Geraldine Finlayson suggested that Neanderthals used various bird parts as artistic media, especially black feathers.\n[…]\nNeanderthals have been portrayed in popular culture including appearances in literature, visual media and comedy. The \"caveman\" archetype often mocks Neanderthals and depicts them as primitive, hunchbacked, knuckle-dragging, club-wielding, grunting, nonsocial characters driven solely by animal instinct. \"Neanderthal\" can also be used as an insult.\n[…]\n\"Homo neanderthalensis\". The Smithsonian Institution. February 14, 2010.\n[…]\nAlex, Bridget (February 21, 2024). \"What's Behind the Evolution of Neanderthal Portraits\". SAPIENS.\n[…]\nThe Climate Chronicles, explores the impact of Pleistocene climate change on Neanderthals and other hominins."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Homo_erectus",
        "situacao": "ok",
        "texto": "Homo erectus ( lit. 'upright man') is an extinct species of archaic human from the Pleistocene, spanning nearly 2 million years. It is the first human species to evolve a humanlike body plan and gait, to leave Africa and colonize Asia and Europe, and to wield fire. Some populations of H. erectus were ancestors of later human species, including H. heidelbergensis—the last common ancestor of modern \n[…]\nSurveying a \"bewildering diversity of names\" and many proposals for consolidation, he decided to reclassify human fossils into three species of Homo: \"H. transvaalensis\" (the australopithecines), H. erectus (including \"Sinanthropus\", \"Pithecanthropus\", and various other Asian, African, and European taxa), and H. sapiens (including anything younger than H. erectus, such as modern humans and Neanderthals).\n[…]\nOnce established around the Old World, H. erectus evolved into other later species in the genus Homo, including: H. heidelbergensis, H. antecessor, H. floresiensis, and H. luzonensis. H. heidelbergensis, in turn, is usually placed as the last common ancestor of Neanderthals (H. neanderthalensis), Denisovans, and modern humans. H. erectus is thus a non-natural, paraphyletic grouping of fossils and does not include all the descendants of a last common ancestor.\n[…]\nDespite being designated as a different species, H. erectus may have interbred with some of its descendant species, namely the common ancestor of Neanderthals and Denisovans (\"Neandersovans\").\n[…]\nThese stone tools probably were not hafted onto spears; this innovation is associated with the transition to the Middle Paleolithic and the emergence of Neanderthals and modern humans.\n[…]\nHomo naledi\n[…]\nHomo erectus – The Smithsonian Institution's Human Origins Program\n[…]\nPossible co-existence with Homo Habilis – BBC News\n[…]\nThe Age of Homo erectus – Interactive Map of the Journey of Homo erectus out of Africa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Neandertal",
        "situacao": "ok",
        "texto": "Homem de Neandertal (Homo neanderthalensis) é uma espécie irmã de Homo sapiens, com a qual o homem moderno conviveu. Surgiu durante o Pleistoceno Médio na Europa e no Médio Oriente há cerca de 400 mil anos e extinguiu-se há 28 mil anos, na Península Ibérica. As razões para a extinção dos neandertais ainda são debatidas, com diversas possíveis causas levantadas para este fenômeno.\n[…]\nA capacidade craniana de homens e mulheres neandertais era em média de 1600 cm3 e 1300 cm3 respectivamente, o que é consideravelmente maior do que a média de 1400 e 1200 cm3 de humanos modernos. Além disso, o crânio de neandertais era mais alongado e o cérebro possuía lobos parietais e um cerebelo menor, mas com regiões temporais, occipitais e orbitofrontais maiores.\n[…]\nA estrutura social do homem de Neanderthal era semelhante às sociedades modernas de caçadores-coletores de Homo sapiens. Como em nossa espécie, mostraram-se unidos por laços afetivos e possuíam habilidades como o altruísmo, já que cuidavam de indivíduos fracos ou doentes que, de outra forma, não teriam sobrevivido.\n[…]\nNo entanto, um estudo conjunto de 2014 entre pesquisadores do Centro de Paleoecologia Humana e Origem Evolutiva e do Departamento de Arqueologia da Universidade de York realizou um estudo no qual eles sugerem que os neandertais jovens tiveram uma maior integração dentro do grupo, e por estes receberam maior proteção que a proposta anteriormente. Esses indivíduos mostram maior simbolismo do que entre os adultos, incluindo o maior grau de elaboração de suas sepulturas.\n[…]\nHominids: the Neanderthal parallax, 2002 de Robert J. Sawyer: História de um mundo imaginário onde os papéis do Homo sapiens e do homem neandertal são invertidos.\n[…]\nGenoma de neandertal mostra cruzamento com 'Homo sapiens' – Artigo no Diário de Notícias, 6 de maio de 2010\n[…]\nExposição sobre o Homem de Neandertal no Museu do Homem, Paris",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Denisovanos",
      "descricao": "Grupo humano extinto identificado em 2010 pelo DNA de fósseis da Caverna Denisova, nos montes Altai, na Sibéria."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Uma variante genética herdada dos denisovanos ajuda qual povo asiático a viver bem em grandes altitudes?",
    "resposta": "Tibetanos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denisovan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denisovan",
        "situacao": "ok",
        "texto": "The Denisovans or Denisova hominins ( də-NIS-ə-və(nz)) are an extinct species or subspecies of archaic human that ranged across Asia during the Middle to Late Pleistocene, approximately 200,000–32,000 years ago. Most of what is known about Denisovans comes from DNA evidence. While many recent fossils have been found and tentatively identified as Denisovan, the first Denisovans discovered were know\n[…]\nThe Denisovan genome from Denisova Cave has variants of genes which, in modern humans, are associated with dark skin, brown hair, and brown eyes. The Denisovan genome also contains a variant region around the EPAS1 gene that in Tibetans assists with adaptation to low oxygen levels at high elevation, and in a region containing the WARS2 and TBX15 loci which affect body-fat distribution in the Inuit.\n[…]\nIn 1998, five child hand- and footprint impressions were discovered in a travertine unit near the Quesang hot springs in Tibet; in 2021, they were dated to 226 to 169 thousand years ago using uranium decay dating. This is the oldest evidence of human occupation of the Tibetan Plateau, and since the Xiahe mandible is the oldest human fossil from the region (though younger than the Quesang impressions), these may have been made by Denisovan children.\n[…]\nA haplotype of EPAS1 in modern Tibetans, which allows them to live at high elevations in a low-oxygen environment, likely came from Denisovans. Genes related to phospholipid transporters (which are involved in fat metabolism) and to trace amine-associated receptors (involved in smelling) are more active in people with more Denisovan ancestry. Denisovan genes may have conferred a degree of immunity against the G614 mutation of SARS-CoV-2.\n[…]\nDenisovan introgressions may have influenced the immune system of present-day Papuans and potentially favoured \"variants to immune-related phenotypes\" and \"adaptation to the local environment\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homin%C3%ADdeo_de_Denisova",
        "situacao": "ok",
        "texto": "O hominínio de Denisova é um grupo arcaico de homínideos descoberto em 2008 na caverna de Denisova, localizada no sudeste da Sibéria. Uma única outra evidência de DNA desse grupo foi identificada fora de Denisova, na caverna Baishiya Karst no Tibete.\n[…]\nEm 2014 pesquisadores estudaram os povos Xerpas, conhecidos por suas habilidades na escalada de montanhas, e descobriram uma variante do gene EPAS1 que regula a resposta à hipoxia herdada dos denisovanos, atribuindo às populações xerpas uma maior facilidade na respiração em grandes altitudes\n[…]\nComo a evidência fóssil disponível para esse grupo é pequena, uma maneira de estudar os Denisovanos é pelos seus resquícios no DNA de humanos modernos, uma vez que ocorreram eventos de introgressão genômica. A população atual do Tibete é bastante estudada para esse objetivo, devido ao fato de fósseis denisovanos terem sido encontrados nessa região, indicando que esses hominínios eram adaptados às elevadas altitudes e baixos níveis de oxigênio característicos do planalto tibetano.\n[…]\nO gene EPAS1 (do inglês, Endothelial Pas Domain Protein 1), associado à via de resposta à hipóxia, apresenta fortes assinaturas de introgressão genética de denisovanos em populações atuais do Tibete. Contudo, esse haplótipo do EPAS1 não é encontrado em outras populações, que inclusive apresentam maior grau de introgressão de Denisovanos que os tibetanos.\n[…]\nUm importante fóssil foi identificado no Planalto Tibetano, em Xiahe, seria a evidência de que os Denisovanos migraram pela Ásia, alcançando outros ambientes. Além de artefatos de pedra e ossos de animais marcados, se descobriu uma mandíbula que pertenceu a um hominínio característico morfologicamente aos existentes no Pleistoceno médio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Denisovanos",
      "descricao": "Grupo humano extinto identificado em 2010 pelo DNA de fósseis da Caverna Denisova, nos montes Altai, na Sibéria."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Os denisovanos foram identificados em 2010 pelo DNA extraído de um único osso de uma menina. Que osso era esse?",
    "resposta": "Um osso de dedo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Denisovan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denisovan",
        "situacao": "ok",
        "texto": "The Denisovans or Denisova hominins ( də-NIS-ə-və(nz)) are an extinct species or subspecies of archaic human that ranged across Asia during the Middle to Late Pleistocene, approximately 200,000–32,000 years ago. Most of what is known about Denisovans comes from DNA evidence. While many recent fossils have been found and tentatively identified as Denisovan, the first Denisovans discovered were know\n[…]\nThe first identification of a Denisovan individual occurred in 2010, based on mitochondrial DNA (mtDNA) extracted from a juvenile finger bone excavated from the Siberian Denisova Cave in the Altai Mountains in 2008. Nuclear DNA indicates close affinities with Neanderthals. The cave was also periodically inhabited by Neanderthals.\n[…]\nDenisovans are known to have lived in Siberia, Tibet, Laos, Taiwan and Manchuria. The Xiahe mandible is the earliest recorded human presence on the Tibetan Plateau. Although their remains have been identified in only these five locations, traces of Denisovan DNA in modern humans suggest they ranged across East Asia.\n[…]\nIn 2019, geneticist Guy Jacobs and colleagues identified three distinct Denisovan populations responsible for introgression into modern populations now native to: Siberia and East Asia; New Guinea and nearby islands; and Oceania and, to a lesser extent, across Asia. Using coalescent modeling, the Denisova Cave Denisovans split from the second population about 283,000 years ago, and from the third population about 363,000 years ago.\n[…]\nHowever, Denisovans are only confirmed to have inhabited the cave until 55 ka; the dating of Upper Paleolithic artefacts overlaps with modern human migration into Siberia (though there are no occurrences in the Altai region); and the DNA of the only specimen in the cave dating to the time interval (Denisova 14) is too degraded to confirm species identity, so the attribution of these artefacts is unclear."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homin%C3%ADdeo_de_Denisova",
        "situacao": "ok",
        "texto": "O hominínio de Denisova é um grupo arcaico de homínideos descoberto em 2008 na caverna de Denisova, localizada no sudeste da Sibéria. Uma única outra evidência de DNA desse grupo foi identificada fora de Denisova, na caverna Baishiya Karst no Tibete.\n[…]\nAté o ano de 2019, o registro fóssil dos Denisovanos estava restrito a um fragmento de falange, três dentes e um fragmento de crânio, todos escavados da Caverna de Denisova. A descoberta e análise molecular de um fragmento do osso da mandíbula na Caverna Baishiya Karst, no Tibete, a 2800 km da Sibéria, revelou o único registro encontrado desse hominíneo fora da caverna onde foi encontrado originalmente.\n[…]\nPouco se sabe sobre as características anatômicas precisas dos Denisovanos, uma vez que os únicos restos físicos que compõe o registro fóssil desse grupo são fragmentos de ossos do dedo, três (ou quatro - encontrara mais um) dentes e um osso do pé encontrados no local onde foi coletado material genético na caverna de Denisova. Além de um único um fragmento do osso da mandíbula encontrado no Tibete.\n[…]\nAlguns cientistas defendem a possibilidade de que o crânio do “Homem Dragão”, escavado em junho de 2021 na China e nomeado Homo longi, seja um espécime de Denisovano.\n[…]\nO “Homem Dragão” foi definido como uma nova espécie de hominínio por apresentar características específicas divergentes de outras espécies de Homo já conhecidas. Tais características seriam uma face ampla e baixa, abóbada craniana longa e baixa, órbitas grandes e quadradas, toro supra-orbital (a região da sobrancelha) curvado e desenvolvido, maçãs do rosto achatadas e baixas, fossa canina rasa e palato (céu da boca) raso com osso alveolar espesso e molares grandes.\n[…]\nThe Denisova Consortium's raw sequence data and alignments",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Richard Leakey",
      "descricao": "Paleoantropólogo e conservacionista queniano, líder de expedições no lago Turkana."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que parentesco ligava o paleoantropólogo queniano Richard Leakey aos pesquisadores Louis e Mary Leakey?",
    "resposta": "Era filho deles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Richard_Leakey"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Richard_Leakey",
        "situacao": "ok",
        "texto": "Richard Erskine Frere Leakey (19 December 1944 – 2 January 2022) was a Kenyan paleoanthropologist, conservationist and politician. Leakey held a number of official positions in Kenya, mostly in institutions of archaeology and wildlife conservation. He was director of the National Museum of Kenya, founded the NGO WildlifeDirect, and was the chairman of the Kenya Wildlife Service.\n[…]\nRichard Erskine Frere Leakey was born on 19 December 1944 in Nairobi. As a small boy, Leakey lived in Nairobi with his parents: Louis Leakey, curator of the Coryndon Museum, and Mary Leakey, director of the Leakey excavations at Olduvai, and his two brothers, Jonathan and Philip. The Leakey brothers had a very active childhood. All the boys had ponies and belonged to the Langata Pony Club. Sometimes the whole club were guests at the Leakeys' for holidays and vacations.\n[…]\nIn 1956, aged eleven, Leakey fell from his horse, fracturing his skull and nearly dying as a result. Incidentally, it was this incident that saved his parents' marriage. Louis was seriously considering leaving Mary for his secretary, Rosalie Osborn. As the battle with Mary raged in the household, Leakey begged his father from his sickbed not to leave. That was the deciding factor. Louis broke up with Rosalie and the family lived in happy harmony for a few years more.\n[…]\nRichard Leakey wrote about his experiences at the Kenya Wildlife Service in his book Wildlife Wars: My Fight to Save Africa's Natural Treasures (2001).\n[…]\nLeakey came from a family of renowned archeologists. His mother, Mary Leakey, discovered evidence in 1978 that man walked upright much earlier than had been thought. She and her husband, Louis Leakey, unearthed skulls of ape-like early humans, shedding fresh light on our ancestors.\n[…]\nLeakeyjourneys.org\n[…]\nRichard Leakey's Blog on WildlifeDirect\n[…]\nRichard Leakey discography at Discogs\n[…]\nRichard Leakey at IMDb"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Richard_Leakey",
        "situacao": "ok",
        "texto": "Richard Erskine Frere Leakey (Nairóbi, 19 de dezembro de 1944 – Nairóbi, 2 de janeiro de 2022) foi um paleoantropólogo, conservacionista e político queniano, membro da família Leakey. Leakey exerceu vários cargos no Quénia, sobretudo em instituições de arqueologia e conservação da vida selvagem. Dirigiu o Museu Nacional do Quénia, fundou a ONG WildlifeDirect e dirigiu o Serviço de Vida Selvagem do\n[…]\nOs primeiros trabalhos publicados de Leakey incluem Origins e The People of the Lake (ambos com Roger Lewin como co-autor), The Illustrated Origin of Species e The Making of Mankind (1981).\n[…]\nFamília Leakey",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Louis Leakey",
      "descricao": "Paleoantropólogo queniano de origem britânica, pioneiro das pesquisas sobre a origem humana na África Oriental."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que as primatólogas Jane Goodall, Dian Fossey e Biruté Galdikas têm em comum no começo de suas carreiras?",
    "resposta": "Foram apoiadas por Louis Leakey",
    "fonte": [
      "https://en.wikipedia.org/wiki/Louis_Leakey",
      "https://en.wikipedia.org/wiki/Trimates"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Louis_Leakey",
        "situacao": "ok",
        "texto": "Louis Seymour Bazett Leakey (7 August 1903 – 1 October 1972) was a Kenyan-British palaeoanthropologist and archaeologist whose work was important in demonstrating that humans evolved in Africa, particularly through discoveries made at Olduvai Gorge with his wife, fellow palaeoanthropologist Mary Leakey. Having established a programme of palaeoanthropological inquiry in eastern Africa, he also moti\n[…]\nAnother of Leakey's legacies stems from his role in fostering field research of primates in their natural habitats, which he saw as key to understanding human evolution. He personally focused on three female researchers, Jane Goodall, Dian Fossey, and Birutė Galdikas, calling them \"The Trimates.\" Each went on to become an important scholar in the field of primatology. Leakey also encouraged and supported many other PhD candidates, most notably from the University of Cambridge.\n[…]\nOne of Leakey's legacies stems from his role in fostering field research of primates in their natural habitats, which he understood as key to unravelling the mysteries of human evolution. He personally chose three female researchers, Jane Goodall, Dian Fossey, and Biruté Galdikas, calling them The Trimates. Each went on to become an important scholar in the field of primatology, immersing themselves in the study of chimpanzees, gorillas and orangutans, respectively.\n[…]\nLouis Leakey was married to Mary Leakey, who made the noteworthy discovery of fossil footprints at Laetoli, Tanzania. Found preserved in volcanic ash, they are the earliest record of bipedal gait.\n[…]\nMary Bowman-Kruhm, The Leakeys: a Biography, Greenwood Press, 2005. ISBN 0-313-32985-0\n[…]\n\"Louis Leakey\", TalkOrigins Archive\n[…]\n\"Louis S. B. Leakey\", the leakey.com biography.\n[…]\nBrian M. Fagan, \"Louis Leakey\", in CD Groliers Encyclopedia.\n[…]\nPetri Liukkonen. \"Louis Leakey\". Books and Writers.\n[…]\nWorks by or about Louis Leakey at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Trimates",
        "situacao": "ok",
        "texto": "The Trimates is the collective name that anthropologist Louis Leakey gave to three women he selected to study primates in their natural environments. Jane Goodall studied chimpanzees; Dian Fossey studied gorillas; and Biruté Galdikas studied orangutans. They are sometimes called Leakey’s Angels.\n[…]\nLeakey was considering taking the job himself when Jane Goodall providentially brought herself to his attention.\n[…]\nIt later became the Institute of Primate Research of the National Museums of Kenya, located in Nairobi.\n[…]\nAt the time of Leakey's death in 1972, Goodall and Dian Fossey had progressed significantly in their long-term field research in Africa, while Biruté Galdikas was just getting underway with her field studies in Indonesia. A fourth researcher, Toni Jackman, traveled with Leakey with plans to study bonobos, but funding was not secured before Leakey's death and she studied other primates in Kenya.\n[…]\nJane Goodall began her first field study of chimpanzee culture in the Gombe Stream National Park in Tanzania. Goodall had always been passionate about animals and Africa, which brought her to the farm of a friend in the Kenya highlands in 1957. From there, she obtained work as a secretary, but acting on her friend's advice she telephoned Louis Leakey with no other thought than to make an appointment to discuss animals. The call was far-reaching in its impact.\n[…]\nGoodall and Fossey were well under way in their study programs in Africa when Biruté Galdikas attended a March 1969 lecture by Leakey at UCLA, where she was a student. She had already formed the intention of studying orangutans, and stayed after the lecture to solicit Leakey's help. In between his conversations with other fans, she managed to tentatively convince him to support her orangutan research."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Louis_Leakey",
        "situacao": "ok",
        "texto": "Louis Seymour Bazett Leakey (7 de agosto de 1903 - 1 de outubro de 1972) foi um paleoantropólogo e arqueólogo queniano-britânico cujo trabalho foi importante para demonstrar que os humanos evoluíram na África, particularmente por meio de descobertas feitas em Olduvai Gorge com sua esposa, a colega paleoantropóloga Mary Leakey. Tendo estabelecido um programa de investigação paleoantropológica na Áf\n[…]\nOutro legado de Leakey decorre de seu papel na promoção da pesquisa de campo de primatas nos seus habitats naturais, que ele considerava fundamental para a compreensão da evolução da espécie humana. Ele concentrou-se pessoalmente em três pesquisadoras, Jane Goodall, Dian Fossey e Birutė Galdikas, chamando-as de \"As Trimates\". Cada uma delas tornou-se numa importante estudiosa no campo da primatologia.\n[…]\nCharles Watson Boise doou dinheiro para um barco ser usado no transporte no Lago Vitória, The Miocene Lady. O seu capitão, Hassan Salimu, entregaria mais tarde Jane Goodall a Gombe. Philip Leakey nasceu em 1949. Em 1950, Louis recebeu um doutoramento honorário da Universidade de Oxford.\n[…]\nUm dos legados de Louis decorre do seu papel na promoção da pesquisa de campo de primatas nos seus habitats naturais, que ele entendia como chave para desvendar os mistérios da evolução da espécie humana. Ele escolheu pessoalmente três pesquisadoras, Jane Goodall, Dian Fossey e Birutė Galdikas, chamando-as de The Trimates. Cada um tornou-se num importante estudioso no campo da primatologia, mergulhando no estudo de chimpanzés, gorilas e orangotangos, respectivamente.\n[…]\nLeakey também incentivou e apoiou muitos outros candidatos ao doutoramento, principalmente da Universidade de Cambridge. Louis acreditava que as mulheres eram melhores no estudo dos primatas do que os homens, como mostra o livro Primates.\n[…]\nO primo de Louis, Nigel Gray Leakey, recebeu a Victoria Cross durante a Segunda Guerra Mundial.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Charles Darwin",
      "descricao": "Naturalista inglês do século dezenove, autor da teoria da evolução por seleção natural."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o naturalista Charles Darwin e o presidente americano Abraham Lincoln têm em comum?",
    "resposta": "Nasceram no mesmo dia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Charles_Darwin",
      "https://en.wikipedia.org/wiki/Abraham_Lincoln"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin ( DAR-win; 12 February 1809 – 19 April 1882) was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species of life have descended from a common ancestor is now generally accepted and considered a fundamental scientific concept.\n[…]\nBoth families were largely Unitarian, though the Wedgwoods were adopting Anglicanism. Robert Darwin, a freethinker, had baby Charles baptised in November 1809 in the Anglican St Chad's Church, Shrewsbury, but Charles and his siblings attended the local Unitarian Church with their mother. The eight-year-old Charles already had a taste for natural history and collecting when he joined the day school run by its preacher in 1817. That July, his mother died.\n[…]\nAfter leaving Sedgwick in Wales, Darwin spent a few days with student friends at Barmouth. He returned home on 29 August to find a letter from Henslow proposing him as a suitable (if unfinished) naturalist for a self-funded supernumerary place on HMS Beagle with captain Robert FitzRoy, a position for a gentleman rather than \"a mere collector\". The ship was to leave in four weeks on an expedition to chart the coastline of South America.\n[…]\nThe Smithsonian National Museum of Natural History has a bronze statue of Charles Darwin in its Deep Time Hall, which features Darwin seated on a bench with a notebook containing his \"tree of life\" sketch. The statue was sculpted by David Clendining and was installed as the centrepiece of the hall, which focuses on Darwinian evolution.\n[…]\nWorks by or about Charles Robert Darwin at the Internet Archive\n[…]\nScientific American, 29 April 1882, pp. 256, Obituary of Charles Darwin\n[…]\nFieser, James; Dowden, Bradley (eds.). \"Charles Darwin\". Internet Encyclopedia of Philosophy. ISSN 2161-0002. OCLC 37741658."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abraham_Lincoln",
        "situacao": "ok",
        "texto": "Abraham Lincoln (February 12, 1809 – April 15, 1865) was the 16th president of the United States, serving from 1861 until his assassination in 1865. He led the United States through the American Civil War, defeating the Confederacy and playing a major role in the abolition of slavery.\n[…]\nIn early April 1861, Major Robert Anderson, commander of Fort Sumter in Charleston, South Carolina, advised that he was nearly out of food. After considerable deliberation, Lincoln decided to send provisions; according to Michael Burlingame, he \"could not be sure that his decision would precipitate a war, though he had good reason to believe that it might\". On April 12, 1861, Confederate forces fired on Union troops at Fort Sumter, starting the American Civil War.\n[…]\nMemorials in Springfield, Illinois, include the Abraham Lincoln Presidential Library and Museum, Lincoln's home, and his tomb. A carving of Lincoln appears with those of three other presidents on Mount Rushmore, which receives about 3 million visitors a year. A statue of Lincoln completed by Augustus Saint-Gaudens stands in Lincoln Park, Chicago, with recastings given as diplomatic gifts standing in Parliament Square, London, and Parque Lincoln, Mexico City.\n[…]\nWorks by Abraham Lincoln at Project Gutenberg\n[…]\nAbraham Lincoln Presidential Library and Museum\n[…]\nAbraham Lincoln Association\n[…]\nAbraham Lincoln: A Resource Guide from the Library of Congress\n[…]\nPapers of Abraham Lincoln Digital Library from Abraham Lincoln Presidential Library — A digitization of all documents written by or to Abraham Lincoln during his lifetime\n[…]\nLincoln/Net: Abraham Lincoln Historical Digitization Project – Northern Illinois University Digital Library\n[…]\n\"Writings of Abraham Lincoln\" from C-SPAN's American Writers: A Journey Through History, June 18, 2001"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Charles_Darwin",
        "situacao": "ok",
        "texto": "Charles Robert Darwin FRS FGRS FLS FLZ (pronúncia em inglês: ['dɑːrwɪn]; ocasionalmente aportuguesado em Carlos Darwin. Shrewsbury, 12 de fevereiro de 1809 – Downe, 19 de abril de 1882) foi um naturalista, geólogo e biólogo britânico, célebre por seus avanços sobre evolução nas ciências biológicas.\n[…]\nApesar da atenção necessária com seus relatórios do Beagle no processo de editá-los, Darwin conseguiu fazer grandes avanços na área de transmutação, usando cada oportunidade que tinha para interrogar naturalistas experientes e, de maneira não convencional, indivíduos com experiência prática em seleção artificial tais como fazendeiros e criadores de pombos. Ao longo do tempo, ele obteve informação até mesmo dos seus filhos e família, parentes, vizinhos, colonialistas e ex-colegas do Beagle.\n[…]\nQuando a obra Narrative, de Fitzroy, foi publicada em maio de 1839, os diários de Darwin fizeram tanto sucesso como o terceiro volume que mais tarde nesse mesmo ano foi lançado como obra separada. No início de 1842, Darwin escreveu sobre as suas ideias a Charles Lyell, que notou que o seu aliado \"nega ver um começo para os vários grupos de espécies\".\n[…]\nO livro de Darwin estava apenas parcialmente completo quando, em 18 de junho de 1858, ele recebeu uma carta de Wallace descrevendo a seleção natural. Chocado que sua ideia tenha sido antecipada por outra pessoa, Darwin a enviou para Lyell no mesmo dia, como instruído por Wallace; embora este não tenha recomendado uma publicação, Darwin sugeriu para Wallace que ele poderia escolher qualquer jornal para publicar o material por meio de Darwin.\n[…]\n«Todas as correspondências de Charles Darwin» (em inglês)\n[…]\n«Obras de ou sobre Darwin no Internet Archive» (em inglês)\n[…]\n«Fotos do naturalista Charles Darwin»\n[…]\n«Textos de Charles Darwin» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Alfred Russel Wallace",
      "descricao": "Naturalista britânico do século dezenove que explorou a Amazônia e o arquipélago Malaio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O britânico Alfred Russel Wallace, que explorou a Amazônia e a Malásia, chegou por conta própria a que ideia também proposta por Darwin?",
    "resposta": "Seleção natural",
    "fonte": [
      "https://en.wikipedia.org/wiki/Alfred_Russel_Wallace"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alfred_Russel_Wallace",
        "situacao": "ok",
        "texto": "Alfred Russel Wallace (8 January 1823 – 7 November 1913) was an English naturalist, explorer, geographer, anthropologist and illustrator. He independently conceived the theory of evolution through natural selection; his 1858 paper on the subject was published that year alongside extracts from Charles Darwin's writings on the topic. It spurred Darwin to set aside the \"big species book\" he was draft\n[…]\nHe later wrote that Darwin's Journal and Humboldt's Personal Narrative were \"the two works to whose inspiration I owe my determination to visit the tropics as a collector.\" After reading A Voyage up the River Amazon by William Henry Edwards, Wallace and Bates estimated that by collecting and selling natural history specimens such as birds and insects they could meet their costs, with the prospect of good profits.\n[…]\nWhile exploring the archipelago, Wallace refined his thoughts about evolution, and had his famous insight on natural selection. In 1858 he sent an article outlining his theory to Darwin; it was published, along with a description of Darwin's theory, that same year.\n[…]\nIn 1889, Wallace wrote the book Darwinism, which explained and defended natural selection. In it, he proposed the hypothesis that natural selection could drive the reproductive isolation of two varieties by encouraging the development of barriers against hybridisation. Thus it might contribute to the development of new species.\n[…]\nWhen, in 1879, Darwin first tried to rally support among naturalists to get a civil pension awarded to Wallace, Joseph Hooker responded that \"Wallace has lost caste considerably, not only by his adhesion to Spiritualism, but by the fact of his having deliberately and against the whole voice of the committee of his section of the British Association, brought about a discussion on Spiritualism at one of its sectional meetings ...\n[…]\nWorks by Alfred Russel Wallace at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfred_Russel_Wallace",
        "situacao": "ok",
        "texto": "Alfred Russel Wallace, OM, FRS (Usk, País de Gales, 8 de janeiro de 1823 — Broadstone, Dorset, Inglaterra, 7 de novembro de 1913) foi um naturalista, geógrafo, antropólogo e biólogo britânico.\n[…]\nTambém firmou contato com inúmeros outros naturalistas britânicos – mais significantemente, Darwin.\n[…]\nDurante a década de 1860, Wallace escreveu vários ensaios e deu palestras defendendo a teoria da seleção natural. Também se correspondeu com Darwin sobre vários temas, incluindo a seleção sexual, o aposematismo e os possíveis efeitos da seleção natural sobre a hibridação e a divergência de espécies. Em 1865, Wallace começou a investigar o espiritismo.\n[…]\nO ciberneticista e antropólogo Gregory Bateson observou na década de 1970 que, embora tenha escrito isso apenas como exemplo, Wallace \"provavelmente disse a coisa mais poderosa que foi dita no século XIX\". Bateson revisitou o tópico em seu livro de 1979 Mind and Nature: A Necessary Unity, e outros estudiosos continuaram a explorar a conexão entre a seleção natural e a teoria dos sistemas.\n[…]\nEm 1864, antes que Darwin tivesse abordado publicamente o assunto, apesar de outros o terem, Wallace publicou um artigo, The Origin of Human Races and the Antiquity of Man Deduced from the Theory of 'Natural Selection' (A Origem das Raças Humanas e a Antiguidade do Homem Deduzidos da Teoria de \"Seleção Natural\"), aplicando a teoria à Humanidade. Darwin ainda não havia abordado publicamente o assunto, embora Thomas Huxley tivesse em Evidências quanto ao Lugar do Homem na Natureza.\n[…]\nWallace, Alfred Russel (1889). Darwinism: An Exposition of the Theory of Natural Selection, with Some of Its Applications (Wikisource). [S.l.]: Macmillan",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Bonobo",
      "descricao": "Grande primata africano do gênero Pan, que vive ao sul do rio Congo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O bonobo divide com que outro primata o posto de parente vivo mais próximo do ser humano?",
    "resposta": "Chimpanzé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bonobo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bonobo",
        "situacao": "ok",
        "texto": "The bonobo (; Pan paniscus), also historically called the pygmy chimpanzee (less often the dwarf chimpanzee or gracile chimpanzee), is the smallest species of great ape and one of the two making up the genus Pan (the other being the common chimpanzee, Pan troglodytes). While bonobos are today recognized as a distinct species, they were initially thought to be a subspecies of Pan troglodytes, becau\n[…]\nPrimatologist Frans de Waal states bonobos are capable of altruism, compassion, empathy, kindness, patience, and sensitivity, and described \"bonobo society\" as a \"gynecocracy\" (i.e. a matriarchy). Primatologists who have studied bonobos in the wild have documented a wide range of behaviours, including aggressive behaviour and more cyclic sexual behaviour similar to chimpanzees, even though bonobos show more sexual behaviour in a greater variety of relationships.\n[…]\nSome primatologists have argued that De Waal's data reflect only the behaviour of captive bonobos, suggesting that wild bonobos show levels of aggression closer to what is found among chimpanzees. De Waal has responded that the contrast in temperament between bonobos and chimpanzees observed in captivity is meaningful, because it controls for the influence of environment. The two species behave quite differently even if kept under identical conditions.\n[…]\nBecause of the promiscuous mating behaviour of female bonobos, a male cannot be sure which offspring are his. As a result, the entirety of parental care in bonobos is assumed by the mothers. However, bonobos are not as promiscuous as chimpanzees and slightly polygamous tendencies occur, with high-ranking males enjoying greater reproductive success than low-ranking males.\n[…]\nThe ranges of bonobos and chimpanzees are separated by the Congo River, with bonobos living to its south and chimpanzees to the north.\n[…]\nSan Diego Zoo Library: Bonobo, Pan paniscus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bonobo",
        "situacao": "ok",
        "texto": "O bonobo (nome científico: Pan paniscus), também chamado chimpanzé-pigmeu e, menos frequentemente, chimpanzé-anão ou grácil, é uma das duas espécies incluídas no gênero Pan. A outra espécie do gênero é Pan troglodytes, o chimpanzé-comum. Ambas as espécies são chimpanzés, embora esse termo seja usado principalmente para a maior das duas espécies, P. troglodytes.\n[…]\nAtualmente os humanos, orangotangos, chimpanzés e gorilas são classificados taxonomicamente na superfamília Hominoidea. Sendo que, juntamente com o chimpanzé-comum, o bonobo é o parente vivo mais próximo geneticamente do ser humano.\n[…]\nPorém, devido à proximidade evolutiva entre humanos e outros primatas (chimpanzés, orangotangos e gorilas), o termo hominídeo recebeu um significado mais amplo e agora refere-se a todos os grandes símios e seus ancestrais, compondo a superfamília Hominoidea. Por conta dessa mudança na classificação, a próxima ramificação dessa árvore evolutiva divide os orangotangos em uma subfamília e o restante dos grandes símios em outra subfamília.\n[…]\nDiferente dos chimpanzés, os bonobos apresentam comportamento muito mais amigável e menos agressivo em diversas situações. Nunca foi observado um bonobo matando outro bonobo, por exemplo, ou atacando as fêmeas. Também não é observado conflitos entre os grupos de machos.\n[…]\nAlgumas características que são associadas a autodomesticação que são encontradas em bonobos são o dimorfismo canino, o crânio reduzido e a despigmentação dos lábios. Também é observado que possuem uma janela de desenvolvimento social maior em relação a comportamentos relacionados à tolerância. Apresentam temperamento mais cauteloso do que outros símios e também se mostram mais atentos às novidades, além de serem mais sensíveis ao olhar humano do que os chimpanzés.\n[…]\nChimpanzé-comum\n[…]\nChimpanzé",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Homem de Pequim",
      "descricao": "Fósseis de Homo erectus encontrados em Zhoukoudian, perto de Pequim, na China, nas décadas de 1920 e 1930."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os fósseis originais do Homem de Pequim desapareceram quando eram levados para fora da China. Durante que guerra isso aconteceu?",
    "resposta": "Segunda Guerra Mundial",
    "distratores": [
      "Primeira Guerra Mundial",
      "Guerra da Coreia",
      "Guerra do Vietnã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peking_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peking_Man",
        "situacao": "ok",
        "texto": "Peking Man (Homo erectus pekinensis, originally \"Sinanthropus pekinensis\") is a subspecies of H. erectus which inhabited what is now northern China during the Middle Pleistocene. Its fossils have been found in a cave some 50 km (31 mi) southwest of Beijing (referred to in the West as Peking upon its first discovery), known as the Zhoukoudian Peking Man Site. The first fossil, a tooth, was discover\n[…]\nIn 1940, Weidenreich likewise suggested that, if Peking Man (\"Sinanthropus pekinensis\") and Java Man (\"Pithecanthropus erectus\") are ancestral to different modern human populations (classified into several subspecies of Homo sapiens), then they should be subsumed under Homo as subspecies of the same pre-modern species as H. erectus pekinensis and \"H. e. javanensis\", respectively.\n[…]\nerectus from China and Indonesia are now usually characterised as relict populations which had little interaction with Western H. erectus or later Homo species.\n[…]\nThe anatomy of Chinese H. erectus specimens varies regionally and over time, but this variation is subtle and difficult to assess given how fragmentary H. erectus remains are both in and out of China. Northern Chinese specimens (namely Peking Man and Nanjing Man) are distinct in the narrowness of the skull, but H. erectus skull shape is poorly documented elsewhere in China.\n[…]\nA 2026 dental proteome (tooth enamel protein) analysis identified a single amino acid polymorphism variant (a unique protein structure) in one of the Peking Man teeth preserved from the original dig (PA69). The variant, AMBN(A253G), was present in their H. erectus samples from the Hexian and Sunjiadong sites and has not been identified in any other primate, which suggests that these populations inherited it from a common ancestor.\n[…]\nPeking Man and anatomically similar East Asian contemporaries are sometimes referred to as classic H. erectus.\n[…]\nPeking Man fossils from Zhoukoudian"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Pequim",
        "situacao": "ok",
        "texto": "Homem de Pequim ou de Beijing (Homo erectus pekinensis, Chinês: 北京猿人, pinyin: Běijīng Yuánrén) são fósseis de uma subespécie da espécie extinta Homo erectus. Foi descoberto entre 1923 e 1927 durante as escavações em Zhoukoudian (Chou K'ou-tien) perto de Pequim, na China. Em 2009, esse grupo de espécimes fósseis foram datados em cerca de 750 mil anos atrás, e a nova datação 26Al/10Be sugere que ele\n[…]\nAs escavações no local sob a supervisão dos arqueólogos chineses Yang Zhongjian, Pei Wenzhong e Jia Lanpo descobriram 200 fósseis de hominídeos (incluindo seis calotas cranianas quase completas) de mais de 40 espécimes individuais. Essas escavações chegaram ao fim em 1937 com a invasão japonesa. As escavações em Zhoukoudian retomaram após a guerra. O sítio do Homem de Pequim em Zhoukoudian foi listado pela UNESCO como Patrimônio da Humanidade em 1987.\n[…]\nOs primeiros espécimes de Homo erectus foram encontrados em Java em 1891 por Eugene Dubois, mas foram descartados durante alguns anos por muitos cientistas que interpretavam-no como os restos de um macaco deformado. A descoberta da grande quantidade de achados em Zhoukoudian pausou isso e o Homem de Java (inicialmente chamado de Pithecanthropus erectus) foi transferido para o gênero Homo junto com o Homem de Pequim.\n[…]\nForam utilizados achados contiguos de restos de animais e evidências de uso de fogo e ferramentas, bem como a fabricação de ferramentas, para que o H. erectus seja o primeiro \"trabalhador de ferramentas\". A análise dos restos do Homem de Pequim levou à afirmação de que os fósseis de Zhoukoudian e Java eram exemplos do mesmo amplo estágio da evolução humana. Esta interpretação foi desafiada em 1985 por Lewis Binford, que afirmou que o Homem de Pequim era um ladrador, não um caçador.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Homem de Pequim",
      "descricao": "Fósseis de Homo erectus encontrados em Zhoukoudian, perto de Pequim, na China, nas décadas de 1920 e 1930."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que padre jesuíta e paleontólogo francês participou tanto das escavações do Homem de Pequim quanto das escavações da fraude de Piltdown?",
    "resposta": "Pierre Teilhard de Chardin",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_Teilhard_de_Chardin",
      "https://en.wikipedia.org/wiki/Piltdown_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_Teilhard_de_Chardin",
        "situacao": "ok",
        "texto": "Pierre Teilhard de Chardin, S.J. (French: [pjɛʁ tɛjaʁ də ʃaʁdɛ̃] ; 1 May 1881 – 10 April 1955) was a French Jesuit priest, scientist, paleontologist, philosopher, mystic and teacher. He investigated the theory of evolution from a perspective influenced by Henri Bergson and Christian mysticism, writing multiple scientific and religious works on the subject.\n[…]\nTeilhard's brief time assisting with digging there occurred many months after the discovery of the first fragments of the fraudulent \"Piltdown Man\". Stephen Jay Gould judged that Pierre Teilhard de Chardin conspired with Dawson in the Piltdown forgery. Most Teilhard experts (including all three Teilhard biographers) and many scientists (including the scientists who uncovered the hoax and investigated it) have rejected the suggestion that he participated in the hoax.\n[…]\nSeveral works of Fr. Pierre Teilhard de Chardin, some of which were posthumously published, are being edited and are gaining a good deal of success. Prescinding from a judgement about those points that concern the positive sciences, it is sufficiently clear that the above-mentioned works abound in such ambiguities and indeed even serious errors, as to offend Catholic doctrine.\n[…]\nHardly anyone else has tried to bring together the knowledge of Christ and the idea of evolution as the scientist (paleontologist) and theologian Fr. Pierre Teilhard de Chardin, S.J., has done. ... His fascinating vision ... has represented a great hope, the hope that faith in Christ and a scientific approach to the world can be brought together. ... These brief references to Teilhard cannot do justice to his efforts.\n[…]\nCorrespondence / Pierre Teilhard de Chardin, Maurice Blondel, Herder and Herder (1967) This correspondence also has both the imprimatur and nihil obstat.\n[…]\nWorks by or about Pierre Teilhard de Chardin at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Piltdown_Man",
        "situacao": "ok",
        "texto": "The Piltdown Man was a paleoanthropological fraud in which bone fragments were presented as the fossilised remains of a previously unknown early human. Although doubts about Piltdown Man's authenticity began to be expressed almost immediately after its announcement in 1912, it was still broadly accepted for many years, and the hoax was only definitively exposed in 1953.\n[…]\nThe skull unearthed in 1908 was the only find discovered in situ, with most of the other pieces found in the gravel pit's spoil heaps. French Jesuit paleontologist and geologist Pierre Teilhard de Chardin participated in the uncovering of the Piltdown skull with Woodward.\n[…]\nThe identity of the Piltdown forger remains unknown, but suspects have included Dawson, Pierre Teilhard de Chardin, Arthur Keith, Martin A. C. Hinton, Horace de Vere Cole and Arthur Conan Doyle.\n[…]\nThe consistent method and common source indicated the work of one person on all the specimens, and Dawson was the only one associated with Piltdown II. The authors did not rule out the possibility that someone else provided the false fossils to Dawson but ruled out several other suspects, including Teilhard de Chardin and Doyle, based on the skill and knowledge demonstrated by the forgeries, which closely reflected ideas fashionable in biology at the time.\n[…]\nOn the other hand, Stephen Jay Gould judged that Pierre Teilhard de Chardin conspired with Dawson in the Piltdown forgery. Teilhard de Chardin had travelled to regions of Africa where one of the anomalous finds originated, and resided in the Wealden area from the date of the earliest finds (although others suggest that he was \"without doubt innocent in this matter\").\n[…]\nRoberts, Noel Keith (2000). From Piltdown Man to Point Omega: the evolutionary theory of Teilhard de Chardin. 18 Studies in European Thought. New York: Peter Lang Publishing Inc. ISBN 978-0-8204-4588-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Teilhard_de_Chardin",
        "situacao": "ok",
        "texto": "Pierre Teilhard de Chardin, SJ (Orcines, 1 de maio de 1881 – Nova Iorque, 10 de abril de 1955) foi um padre jesuíta, teólogo, cientista, paleontólogo, filósofo, místico e professor francês.\n[…]\nTeilhard de Chardin investigou a teoria da evolução de uma perspectiva influenciada por Henri Bergson e pelo misticismo cristão, escrevendo vários trabalhos científicos e religiosos sobre o assunto. Suas principais realizações científicas incluem sua pesquisa paleontológica na China, participando da descoberta dos fósseis significativos do Homem de Pequim do complexo de cavernas de Zhoukoudian, perto de Pequim.\n[…]\nPierre Teilhard de Chardin nasceu em 1.º de maio de 1881, na propriedade da família em Sarcenat, próxima a Clermont-Ferrand, na antiga província de Auvérnia, França. Era o quarto de onze filhos de Emmanuel Teilhard de Chardin e Berthe-Adèle de Dompierre d’Hornoy. Sua mãe era bisneta de François-Marie Arouet, conhecido como Voltaire.\n[…]\nComo escritor, sua obra-prima é O Fenômeno Humano, além de centenas de outros escritos sobre a condição humana. Como paleontólogo, participou da descoberta do Homem de Pequim. Embora tenha estado presente após o \"descobrimento\" do Homem de Piltdown, evidências indicam que nunca perdeu prestígio devido à falsificação desse suposto fóssil. Como Teilhard disse em 1920: \"anatômicamente as peças não se juntam\".\n[…]\nJANEIRA, Ana Luísa - Energética no pensamento de Pierre Teilhard de Chardin\n[…]\nMortier, Jeanne-Marie - Pierre Teilhard de Chardin Pensador Universal\n[…]\nTeilhard de Chardin (em inglês) no Find a Grave\n[…]\nMeneses, P. Teilhard de Chardin. O homem dos dois reinos. Universidade Católica de Pernambuco, acessado em 08 de abril de 2009.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Svante Pääbo",
      "descricao": "Geneticista sueco, Nobel de Fisiologia ou Medicina de 2022 pelo sequenciamento do genoma do Neandertal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que o geneticista sueco Svante Pääbo, que decifrou o genoma do Neandertal, tem em comum com o pai, Sune Bergström?",
    "resposta": "Ambos ganharam o Nobel de Medicina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Svante_P%C3%A4%C3%A4bo",
      "https://en.wikipedia.org/wiki/Sune_Bergstr%C3%B6m"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Svante_P%C3%A4%C3%A4bo",
        "situacao": "ok",
        "texto": "Svante Pääbo (Swedish: [ˈsvânːtɛ̂ ˈpʰɛ̌ːbʊ̂]; born 20 April 1955) is a Swedish geneticist and Nobel Laureate who specialises in the field of evolutionary genetics. As one of the founders of paleogenetics, he has worked extensively on the Neanderthal genome. In 1997, he became founding director of the Department of Genetics at the Max Planck Institute for Evolutionary Anthropology in Leipzig, Germa\n[…]\nIn 2022, he was awarded the Nobel Prize in Physiology or Medicine \"for his discoveries concerning the genomes of extinct hominins and human evolution\".\n[…]\nPääbo was born in Stockholm, Sweden, in 1955 and grew up there with his mother, Estonian chemist Karin Pääbo (Estonian: [ˈpæːpo]; 1925–2013), who had escaped from the Soviet invasion in 1944 and arrived in Sweden as a refugee during World War II. He was born through an extramarital affair of his father, Swedish biochemist Sune Bergström (1916–2004), who, like his son, became a recipient of the Nobel Prize in Physiology or Medicine (in 1982).\n[…]\nIn 1992, he received the Gottfried Wilhelm Leibniz Prize of the Deutsche Forschungsgemeinschaft, which is the highest honour awarded in German research. Pääbo was elected a member of the Royal Swedish Academy of Sciences in 2000, and in 2004 was elected an international member of the National Academy of Sciences. He received the Ernst Schering Prize in 2003. In 2005, he received the prestigious Louis-Jeantet Prize for Medicine.\n[…]\nHe was elected a Foreign Member of the Royal Society in 2016, and in 2017, was awarded the Dan David Prize. In 2018, he received the Princess of Asturias Awards in the category of Scientific Research and the Körber European Science Prize, in 2020 the Japan Prize, in 2021 the Massry Prize and in 2022 the Nobel Prize in Physiology or Medicine for sequencing the first Neanderthal genome.\n[…]\nList of Nobel laureates in Physiology or Medicine\n[…]\nList of Swedish Nobel laureates"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sune_Bergstr%C3%B6m",
        "situacao": "ok",
        "texto": "Karl Sune Detlof Bergström (10 January 1916 – 15 August 2004) was a Swedish biochemist. In 1975, he was appointed to the Nobel Foundation Board of Directors in Sweden, and was awarded the Louisa Gross Horwitz Prize from Columbia University, together with Bengt I. Samuelsson.\n[…]\nHe shared the Nobel Prize in Physiology or Medicine with Bengt I. Samuelsson and John R. Vane in 1982, for discoveries concerning prostaglandins and related substances.\n[…]\nBergström was elected a member of the Royal Swedish Academy of Sciences in 1965, and its president in 1983. In 1965, he was also elected a member of the Royal Swedish Academy of Engineering Sciences. He was elected a Foreign Honorary Member of the American Academy of Arts and Sciences in 1966. He was also a member of both the United States National Academy of Sciences and the American Philosophical Society.\n[…]\nBergström was awarded the Cameron Prize for Therapeutics of the University of Edinburgh in 1977. In 1985, he was appointed member of the Pontifical Academy of Sciences. He was awarded the Illis quorum in 1985.\n[…]\nIn 1943, Bergström married Maj Gernandt. He had two sons, the businessman Rurik Reenstierna, with Maj Gernandt; and the evolutionary geneticist Svante Pääbo (winner of the 2022 Nobel Prize in Physiology or Medicine), from an extramarital affair with Karin Pääbo, an Estonian chemist. Both sons were born in 1955, and Rurik learned about the existence of his half-brother Svante only around 2004.\n[…]\nMedia related to Sune Bergström at Wikimedia Commons\n[…]\nSune K. Bergström on Nobelprize.org  including the Nobel Lecture The Prostaglandins: From the Laboratory to the Clinic"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Svante_P%C3%A4%C3%A4bo",
        "situacao": "ok",
        "texto": "Svante Pääbo (Estocolmo, 20 de abril de 1955) é um biólogo sueco especializado em genética evolutiva. É um dos fundadores do campo da paleogenómica, tendo liderado a sequenciação do genoma do Neandertal.\n[…]\nÉ diretor do Departamento de Genética no Instituto Max Planck de Antropologia Evolutiva em Leipzig, Alemanha desde 1997.\n[…]\nEm 2022 foi laureado com o Prémio Nobel de Fisiologia ou Medicina \"pelas suas descobertas sobre os genomas de hominídeos extintos e a evolução humana\".\n[…]\nPääbo nasceu em Estocolmo, e cresceu com a sua mãe, a química estoniana Karin Pääbo.\n[…]\nSeu pai, Sune Bergstrom, de quem Pääbo não foi muito próximo, também foi laureado com o Prêmio Nobel de Fisiologia ou Medicina em 1982.\n[…]\nSvante Pääbo em Nobelprize.org",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Homo sapiens",
      "descricao": "Espécie humana moderna, a única do gênero Homo ainda viva."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1758, que naturalista sueco, criador da classificação dos seres vivos, deu à nossa espécie o nome científico Homo sapiens?",
    "resposta": "Carl Lineu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_sapiens",
      "https://en.wikipedia.org/wiki/Carl_Linnaeus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_sapiens",
        "situacao": "ok",
        "texto": "Humans (Homo sapiens, meaning 'thinking man' or 'wise man') are the most abundant and widespread species of primates, characterized by bipedalism, minimal body hair, and large, complex brains enabling the development of advanced technology, culture, and language. Humans are highly social beings and tend to live in complex social structures composed of many cooperating and competing groups, from fa\n[…]\nAll modern humans are classified into the species Homo sapiens, coined by Carl Linnaeus in his 1735 work Systema Naturae. The generic name Homo is a learned 18th-century derivation from Latin homō, which refers to humans of either sex. The word human can refer to all members of the Homo genus. The name Homo sapiens means 'wise man' or 'knowledgeable man'.\n[…]\nHomo sapiens emerged in Africa at least 300,000 years ago from a species commonly designated as either H. heidelbergensis or H. rhodesiensis, the descendants of H. erectus that remained in Africa. H. sapiens migrated out of the continent, gradually replacing or interbreeding with local populations of archaic humans. Humans began exhibiting behavioral modernity about 160,000–70,000 years ago, and possibly earlier.\n[…]\nThis development was likely selected amidst natural climate change in Middle to Late Pleistocene Africa.\n[…]\nArt is a defining characteristic of humans, and there is evidence for a relationship between creativity and language. The earliest evidence of art was shell engravings made by Homo erectus 300,000 years before modern humans evolved. Art attributed to H. sapiens existed at least 75,000 years ago, with jewelry and drawings found in caves in South Africa. There are various hypotheses as to why humans have adapted to the arts.\n[…]\nAnatomical evidence in the form of second-to-fourth digit ratios, a biomarker for prenatal androgen effects, likewise indicates modern humans were polygynous during the Pleistocene."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Carl_Linnaeus",
        "situacao": "ok",
        "texto": "Carl Linnaeus (23 May 1707 – 10 January 1778), also known after ennoblement in 1761 as Carl von Linné, was a Swedish biologist and physician who formalised binomial nomenclature, the modern system of naming organisms. He is known as the \"father of modern taxonomy\". Many of his writings were in  Latin; his name is rendered in Latin as Carolus Linnæus and, after his 1761 ennoblement, as Carolus a Li\n[…]\nAt the end of his lifetime the Linnean collection in Uppsala was considered one of the finest collections of natural history objects in Sweden. Next to his own collection, he had also built up a museum for the university of Uppsala, which was supplied by material donated by Carl Gyllenborg (in 1744–1745), crown-prince Adolf Fredrik (in 1745), Erik Petreus (in 1746), Claes Grill (in 1746), Magnus Lagerström (in 1748 and 1750) and Jonas Alströmer (in 1749).\n[…]\nIn 1784 the young medical student James Edward Smith purchased the entire specimen collection, library, manuscripts, and correspondence of Carl Linnaeus from his widow and daughter and transferred the collections to London. Not all material in Linné's private collection was transported to England. Thirty-three fish specimens preserved in alcohol were not sent and were later lost.\n[…]\nAfter such criticism, Linnaeus felt he needed to explain himself more clearly. The 10th edition of Systema Naturae introduced new terms, including Mammalia and Primates, the latter replacing Anthropomorpha and giving humans the full binomial Homo sapiens. The new classification received less criticism, but many natural historians still believed he had demoted humans from their former place of ruling over nature.\n[…]\nCategory:Taxa named by Carl Linnaeus\n[…]\nList of lichens named by Carl Linnaeus\n[…]\nWorks by Carl von Linné at Project Gutenberg\n[…]\nWorks by or about Carl Linnaeus at the Internet Archive\n[…]\nWorks by Carl von Linné at the Biodiversity Heritage Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Humano",
        "situacao": "ok",
        "texto": "Humano (taxonomicamente Homo sapiens, termo que deriva do latim \"homem sábio\", também conhecido como pessoa, gente ou homem) é a única espécie do gênero Homo ainda viva e o primata mais abundante e difundido da Terra, caracterizado pelo bipedalismo e por cérebro grande, o que permitiu o desenvolvimento de ferramentas, culturas e linguagens avançadas.\n[…]\nO termo binomial Homo sapiens foi cunhado por Carl Linnaeus em seu trabalho do século XVIII Systema Naturae e também é o lectótipo do espécime. O termo para o gênero Homo é uma derivação do século XVIII do latim homō (\"homem\"), em última instância \"ser terrestre\" (do latim antigo hemō).\n[…]\nO estudo científico da evolução humana engloba o desenvolvimento do gênero Homo, mas geralmente envolve o estudo de outros hominídeos e homininaes, tais como o Australopithecus. O \"humano moderno\" é definido como membro da espécie Homo sapiens, sendo a única subespécie sobrevivente (Homo sapiens sapiens). O Homo sapiens idaltu e o Homo neanderthalensis, além de outras subespécies conhecidas, foram extintos há milhares de anos.\n[…]\nOs parentes vivos mais próximos dos seres humanos são os gorilas e os chimpanzés, mas os humanos não evoluíram a partir desses macacos: em vez disso, os seres humanos modernos compartilham com esses macacos um ancestral comum.\n[…]\nOs seres humanos modernos, posteriormente distribuídos por todos os continentes, substituíram os hominídeos anteriores. Eles habitaram a Eurásia e a Oceania há 40 mil anos AP e as Américas há pelo menos 14 mil anos AP. Eles acabaram com o Homo neanderthalensis e com outras espécies descendentes do Homo erectus (que habitavam a Eurásia há 2 milhões de anos), através do seu maior sucesso na reprodução e na competição por recursos.\n[…]\n«Homo sapiens Linnaeus, 1758». Enciclopédia da Vida (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Homem de Piltdown",
      "descricao": "Fraude paleontológica apresentada em 1912 na Inglaterra como um elo perdido entre macacos e humanos."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na fraude do Homem de Piltdown, um crânio humano foi combinado com a mandíbula de que animal?",
    "resposta": "Orangotango",
    "distratores": [
      "Chimpanzé",
      "Gorila",
      "Babuíno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Piltdown_Man"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piltdown_Man",
        "situacao": "ok",
        "texto": "The Piltdown Man was a paleoanthropological fraud in which bone fragments were presented as the fossilised remains of a previously unknown early human. Although doubts about Piltdown Man's authenticity began to be expressed almost immediately after its announcement in 1912, it was still broadly accepted for many years, and the hoax was only definitively exposed in 1953.\n[…]\nThe identity of the Piltdown forger remains unknown, but suspects have included Dawson, Pierre Teilhard de Chardin, Arthur Keith, Martin A. C. Hinton, Horace de Vere Cole and Arthur Conan Doyle.\n[…]\nHinton left a trunk in storage at the Natural History Museum in London that in 1970 was found to contain animal bones and teeth carved and stained in a manner similar to the carving and staining on the Piltdown finds. Phillip Tobias implicated Arthur Keith in helping Dawson by detailing the history of the investigation of the hoax, dismissing other theories, and listing inconsistencies in Keith's statements and actions.\n[…]\n1908: Dawson claims discovery of first Piltdown fragments.\n[…]\nDawson, Charles; Woodward, Arthur Smith (March 1913). \"On the Discovery of a Palæolithic Human Skull and Mandible in a Flint-bearing Gravel overlying the Wealden (Hastings Beds) at Piltdown, Fletching (Sussex) (Read December 18th, 1912)\". Quarterly Journal of the Geological Society. 69 (1–4): 117–122. doi:10.1144/GSL.JGS.1913.069.01-04.10. S2CID 129320256.\n[…]\nHaddon, A. C. (17 January 1913). \"Eoanthropus (reporting the 1912 publication by Charles Dawson and Arthur Smith Woodward)\". Science. 37 (942): 91–92. doi:10.1126/science.37.942.91. PMID 17745373.\n[…]\nRussell, Miles (2003), Piltdown Man: The Secret Life of Charles Dawson & the World's Greatest Archaeological Hoax, Stroud, Gloucestershire: Tempus Publishing, ISBN 978-0-7524-2572-6.\n[…]\n\"Charles Dawson Piltdown Faker\" BBC News\n[…]\nFossil fools: Return to Piltdown BBC"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Piltdown",
        "situacao": "ok",
        "texto": "O assim chamado Homem de Piltdown foi uma fraude científica formada por fragmentos de um crânio e de uma mandíbula, recuperados nos primeiros anos do século XX de uma mina de cascalho em Piltdown, vila perto de Uckfield, no condado inglês de Sussex. Especialistas da época afirmaram que os fragmentos eram restos fossilizados de uma até ali desconhecida espécie de homem primitivo.\n[…]\nA significância do espécime permaneceu objeto de controvérsia até que, com o avanço da ciência, foi declarada em 1953 como uma fraude. As análises laboratoriais demonstraram que os restos pertenciam a diferentes espécies: a mandíbula e os dentes eram de um orangotango, enquanto o crânio era de um humano moderno.\n[…]\nEm 1923, Franz Weidenreich examinou novamente os restos e concluiu que eles consistiam em um crânio humano moderno e uma mandíbula de orangotango, cujos dentes haviam sido desgastados.\n[…]\nImagens de alta resolução em 3-D mostraram que a mandíbula de orangotango estava rachada longitudinalmente, provavelmente ao ser esticada manualmente a partir de suas duas extremidades. Dawson foi obrigado a alargar os soquetes dos dentes da mandíbula para remover dois dentes molares, que em grandes primatas têm, reveladoramente, raízes curvas. Dawson, em seguida, limou os dentes para que parecessem mais humanóides e os reposicionou em suas órbitas.\n[…]\nOutro fator foi a própria construção da fraude. Os restos não eram simplesmente colocados juntos: a mandíbula de orangotango e os dentes foram modificados para adquirir características que parecessem humanas, enquanto os ossos foram artificialmente manchados para se assemelharem aos materiais antigos encontrados no cascalho de Piltdown. Parte dos fragmentos também foi preenchida com cascalho e outros materiais do local, reforçando a aparência de antiguidade.\n[…]\n«O Homem de Piltdown»\n[…]\n«PBS NOVA: (sobre o caso do Homem de Piltdown)» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Homem de Piltdown",
      "descricao": "Fraude paleontológica apresentada em 1912 na Inglaterra como um elo perdido entre macacos e humanos."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "A fraude do Homem de Piltdown foi desmascarada no mesmo ano em que Watson e Crick descreveram a dupla hélice do DNA. Que ano foi esse?",
    "resposta": "1953",
    "fonte": [
      "https://en.wikipedia.org/wiki/Piltdown_Man",
      "https://en.wikipedia.org/wiki/DNA"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Piltdown_Man",
        "situacao": "ok",
        "texto": "The Piltdown Man was a paleoanthropological fraud in which bone fragments were presented as the fossilised remains of a previously unknown early human. Although doubts about Piltdown Man's authenticity began to be expressed almost immediately after its announcement in 1912, it was still broadly accepted for many years, and the hoax was only definitively exposed in 1953.\n[…]\nThe questionable significance of the assemblage remained the subject of considerable controversy until it was conclusively exposed in 1953 as a forgery. It was found to have consisted of the altered mandible and some teeth of an orangutan deliberately combined with the cranium of a fully developed, though small-brained, modern human.\n[…]\nThese early hominid fossils showed small braincases and human jaws, which was the opposite of what Piltdown Man suggested. Despite this, Piltdown Man was treated as a different lineage for many years instead. In the decades prior to its exposure as a forgery in 1953, scientists increasingly regarded Piltdown as an enigmatic aberration, inconsistent with the path of hominid evolution as demonstrated by fossils found elsewhere.\n[…]\nIn November 1953, Time magazine published evidence, gathered variously by Oakley, Le Gros Clark, and Weiner, proving that Piltdown Man was a forgery and demonstrating that the fossil was a composite of three distinct species. It consisted of a medieval human skull, a 500-year-old orangutan lower jaw, and fossil chimpanzee teeth. Someone had created the appearance of age by staining the bones with an iron solution and chromic acid.\n[…]\n1916 August: Dawson dies.\n[…]\n1953: Weiner, Le Gros Clark, and Oakley expose the hoax.\n[…]\nThe Times, 21 November 1953; 23 November 1953\n[…]\n\"Charles Dawson Piltdown Faker\" BBC News\n[…]\nAn annotated bibliography of the Piltdown Man forgery, 1953–2005 Archived 8 February 2015 at the Wayback Machine by Tom Turrittin."
      },
      {
        "url": "https://en.wikipedia.org/wiki/DNA",
        "situacao": "ok",
        "texto": "Deoxyribonucleic acid (; DNA) is a polymer composed of two polynucleotide chains that coil around each other to form a double helix. The polymer carries genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids.\n[…]\nBefore then, Linus Pauling, and Watson and Crick, had erroneous models with the chains inside and the bases pointing outwards. Franklin's identification of the space group for DNA crystals proved her correct. In February 1953, Linus Pauling and Robert Corey proposed a model for nucleic acids containing three intertwined chains, with the phosphates near the axis, and the bases on the outside.\n[…]\nWatson and Crick completed their model, which is now accepted as the first correct model of the double helix of DNA. On 28 February 1953 Crick interrupted patrons' lunchtime at The Eagle pub in Cambridge, England to announce that he and Watson had \"discovered the secret of life\".\n[…]\nThe 25 April 1953 issue of the journal Nature published a series of five articles giving the Watson and Crick double-helix structure DNA and evidence supporting it.\n[…]\nThen followed a letter by Wilkins and two of his colleagues, which contained an analysis of in vivo B-DNA X-ray patterns, and which supported the presence in vivo of the Watson and Crick structure.\n[…]\nDouble Helix 1953–2003 National Centre for Biotechnology Education\n[…]\n\"Clue to chemistry of heredity found\". The New York Times, June 1953. First American newspaper coverage of the discovery of the DNA structure\n[…]\nSeven-page, handwritten letter that Crick sent to his 12-year-old son Michael in 1953 describing the structure of DNA. See Crick's medal goes under the hammer, Nature, 5 April 2013."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homem_de_Piltdown",
        "situacao": "ok",
        "texto": "O assim chamado Homem de Piltdown foi uma fraude científica formada por fragmentos de um crânio e de uma mandíbula, recuperados nos primeiros anos do século XX de uma mina de cascalho em Piltdown, vila perto de Uckfield, no condado inglês de Sussex. Especialistas da época afirmaram que os fragmentos eram restos fossilizados de uma até ali desconhecida espécie de homem primitivo.\n[…]\nA significância do espécime permaneceu objeto de controvérsia até que, com o avanço da ciência, foi declarada em 1953 como uma fraude. As análises laboratoriais demonstraram que os restos pertenciam a diferentes espécies: a mandíbula e os dentes eram de um orangotango, enquanto o crânio era de um humano moderno.\n[…]\nFoi sugerido que a fraude havia sido obra da pessoa tida como sua descobridora, Charles Dawson (1864-1916). Este ponto de vista tem sido questionado e muitos outros candidatos têm sido propostos como os verdadeiros criadores da contrafação. O homem de Piltdown representava um organismo que não correspondia à realidade.\n[…]\nA fraude do Homem de Piltdown afetou significativamente a pesquisa precoce sobre a evolução humana. Notavelmente, o fóssil colocava os cientistas em um beco sem saída, pois sustentava a crença errônea e rejeitada de que o cérebro humano teria se expandido em tamanho antes do maxilar se adaptar a novos tipos de alimentos.\n[…]\nEm 1953, exames realizados por Kenneth Oakley, Joseph Weiner e Wilfrid Le Gros Clark demonstraram que os fragmentos pertenciam a espécies diferentes. Testes químicos indicaram que os restos eram muito mais recentes do que os sedimentos em que supostamente haviam sido encontrados, enquanto análises microscópicas revelaram que os dentes haviam sido desgastados artificialmente. Também foi identificada a coloração artificial dos ossos.\n[…]\n«O Homem de Piltdown»\n[…]\n«Fraudes Arqueológicas» (em inglês)\n[…]\n«BBC - Desmascarando o Homem de Piltdown» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Neandertal 1",
      "descricao": "Fóssil-tipo do homem de Neandertal, achado em 1856 na gruta de Feldhofer, no vale de Neander, Alemanha."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O fóssil que deu nome ao homem de Neandertal foi achado na Alemanha poucos anos antes de Darwin publicar A Origem das Espécies. Em que década?",
    "resposta": "Década de 1850",
    "fonte": [
      "https://en.wikipedia.org/wiki/Neanderthal_1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Neanderthal_1",
        "situacao": "ok",
        "texto": "Feldhofer 1 or Neanderthal 1 is the scientific name of the 40,000-year-old type specimen fossil of the species Homo neanderthalensis. The fossil was discovered in August 1856 in the Kleine Feldhofer Grotte cave in the Neander Valley (Neandertal), located 13 km (8.1 mi) east of Düsseldorf, Germany.\n[…]\nHowever, this first scientifically described Neanderthal fossil was misunderstood by his contemporaries as \"modern.\" It lacked the criteria to clearly differentiate fossil species of the genus Homo from Homo sapiens. Furthermore, many of Schmerling's colleagues referenced the Bible (Genesis 1), arguing that fossils of such antiquity could not be reliably identified.\n[…]\nEven Thomas Henry Huxley, a supporter of Darwin's theory of evolution, viewed the Engis find as representing a \"man of low degree of civilization.\" Huxley also interpreted the Neandertal find as falling within the range of variation observed in modern humans. Gibraltar 1, a relatively well-preserved skull discovered in 1848 at the Forbes limestone quarry in Gibraltar, was only decades later recognized as tens of thousands of years old and established as a representative of Homo neanderthalensis.\n[…]\nThe fossil of the Neanderthal was discovered in 1856, three years before the publication of Darwin's seminal work, On the Origin of Species. However, the scientific debate over whether species are immutable or mutable had already been ongoing for a considerable time. In an 1853 treatise on the durability and transformation of species, Hermann Schaaffhausen suggested:\n[…]\nExcavations continued in 2000, and a further 40 human teeth and bone fragments were uncovered, including a piece of the temporal bone and the zygomatic bone, which fit precisely into the Neanderthal 1 skull. Another bone fragment was matched to the left femur."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Homo antecessor",
      "descricao": "Espécie humana extinta conhecida por fósseis da Gran Dolina, na serra de Atapuerca, Espanha."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Marcas de corte em ossos de Homo antecessor, achados em Atapuerca, na Espanha, são vistas como sinal de que prática?",
    "resposta": "Canibalismo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Homo_antecessor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Homo_antecessor",
        "situacao": "ok",
        "texto": "Homo antecessor (Latin for 'pioneer man') is an extinct species of archaic human recorded in the Spanish Sierra de Atapuerca, a productive archaeological site, from 1.2 to 0.8 million years ago during the Early Pleistocene. Populations of this species may have been present elsewhere in Western Europe, and were among the first to settle that region of the world, hence the name.\n[…]\nHere, in addition to a wealth of bear fossils, he also recovered archaic human fossils, which prompted a massive exploration of the Sierra de Atapuerca, at first headed by Spanish palaeontologist Emiliano Aguirre but quickly taken over by José María Bermúdez de Castro, Eudald Carbonell, and Juan Luis Arsuaga. They restarted excavation of the Gran Dolina in 1992, and found archaic human remains two years later; in 1997, they formally described these as a new species, Homo antecessor.\n[…]\nThe acromion (that extends over the shoulder joint) is small compared to those of modern humans. The shoulder blade is similar to all Homo with a typical human body plan, indicating H. antecessor was not as skilled a climber as non-human apes or pre-erectus species, but was capable of efficiently launching projectiles such as stones or spears.\n[…]\nH. antecessor probably migrated from the Mediterranean shore into inland Iberia when colder glacial periods were transitioning to warmer interglacials, and warm grasslands dominated, vacating the region at any other time. They may have followed water bodies while migrating, in the case of Sierra de Atapuerca, most likely the Ebro River.\n[…]\nThere is no evidence H. antecessor could wield fire and cook, and similarly the wearing on the molars indicates the more frequent consumption of grittier and more mechanically challenging foods than later European species, such as raw rather than cooked meat and underground storage organs.\n[…]\nUNESCO Archaeological Site of Atapuerca"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_antecessor",
        "situacao": "ok",
        "texto": "O Homo antecessor (derivado do termo latino “homem pioneiro”), também  conhecido como “Homem de Atapuerca”, foi uma espécie extinta do gênero Homo que viveu durante o período do Pleistoceno Inferior na Europa, há cerca de 1,2 milhão a 800 mil anos. É possível que as comunidades desta espécie tenham vivido em outras áreas da Europa Ocidental, estabelecendo-se como os habitantes pioneiros daquela ár\n[…]\nA mandíbula inferior exibe uma  estrutura delicada incomum entre a maioria das outras espécies do gênero Homo antigas. Os ossos nasais têm semelhanças com os encontrados em Homo sapiens contemporâneos. Embora o H. antecessor apresente uma série de características primitivas, ele apresenta uma forma de entalhe mandibular semelhante à dos humanos modernos, com uma parte alveolar  orientada  verticalmente adjacente aos dentes.\n[…]\nOs fósseis do Homo antecessor foram descobertos no sítio \"Gran Dolina\" em \"Sierra de Atapuerca\", Burgos, norte da Espanha. O sítio foi dividido em onze unidades, TD1 a TD11, cada uma com suas características próprias. O sítio de maior interesse é o TD6, devido a registros fósseis valiosos encontrados em expedições anteriores. Os fósseis usados para descrever H. antecessor foram encontrados especificamente no nível TD6 do local durante as temporadas de campo em 1994 e 1996.\n[…]\nDurante esse período foram encontrados 170 espécimes fósseis de H. antecessor. Porém outras atividades em anos subsequentes produziram mais 60 espécimes fósseis.\n[…]\nAlém disso, oitenta espécimes de H. antecessor, incluindo adultos e crianças, foram encontrados no sítio de Gran Dolina com sinais de canibalismo, como marcas de cortes e canibalismo. A utilização dos corpos humanos provavelmente explica a alta prevalência de ossos quebrados ou danificados encontrados na Gran Dolina.\n[…]\nantecessor, defendendo a inclusão de todos os espécimes do Norte da África como \"Homo ergaster mauritanicus\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Samuel Wilberforce",
      "descricao": "Bispo anglicano de Oxford no século dezenove, opositor da teoria da evolução no debate de 1860."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Em 1860, num debate em Oxford, que bispo teria perguntado a Thomas Huxley se ele descendia de macaco pelo lado do avô ou da avó?",
    "resposta": "Samuel Wilberforce",
    "fonte": [
      "https://en.wikipedia.org/wiki/1860_Oxford_evolution_debate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1860_Oxford_evolution_debate",
        "situacao": "ok",
        "texto": "The 1860 Oxford evolution debate took place at the Oxford University Museum in Oxford, England, on 7 July 1860, seven months after the publication of Charles Darwin's On the Origin of Species. Several prominent British scientists and philosophers participated, including Thomas Henry Huxley, Bishop Samuel Wilberforce, Benjamin Brodie, Joseph Dalton Hooker and Robert FitzRoy.\n[…]\nThe debate is best remembered today for a heated exchange in which Wilberforce supposedly asked Huxley whether it was through his grandfather or his grandmother that he claimed his descent from a monkey. Huxley is said to have replied that he would not be ashamed to have a monkey for his ancestor, but he would be ashamed to be connected with a man who used his great gifts to obscure the truth.\n[…]\nThe anonymous publication of Vestiges of the Natural History of Creation, supporting the idea of transmutation of species, in 1844 brought a storm of controversy but attracted wide readership and became a bestseller. At the British Association for the Advancement of Science meeting at Oxford in May 1847, the Bishop of Oxford Samuel Wilberforce used his Sunday sermon at St.\n[…]\nWord spread that Bishop Samuel Wilberforce would speak against Darwin's theory at the meeting on Saturday 30 June 1860. Wilberforce was one of the greatest public speakers of his day but was known as \"Soapy Sam\" (from a comment by Benjamin Disraeli that the Bishop's manner was \"unctuous, oleaginous, saponaceous\"). According to Bryson, \"more than a thousand people crowded into the chamber; hundreds more were turned away.\" Darwin himself was too sick to attend.\n[…]\nNotably, all three major participants felt they had had the best of the debate. Wilberforce wrote that, \"On Saturday Professor Henslow ... called on me by name to address the Section on Darwin's theory. So I could not escape and had quite a long fight with Huxley."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Debate_evolutivo_em_Oxford_de_1860",
        "situacao": "ok",
        "texto": "O Debate sobre a evolução em Oxford em 1860 aconteceu no Museu da Universidade de Oxford em Oxford, Inglaterra, em 7 de julho de 1860, sete meses após a publicação de On the Origin of Species, de Charles Darwin. Vários cientistas e filósofos britânicos proeminentes participaram, incluindo Thomas Henry Huxley, o bispo Samuel Wilberforce, Benjamin Brodie, Joseph Dalton Hooker e Robert FitzRoy.\n[…]\nEmbora Huxley e Wilberforce não tenham sido os únicos a participar da discussão, os relatos indicam que ambos foram as figuras centrais.\n[…]\nHoje em dia, o debate é mais lembrado pela troca de farpas em que, supostamente, Wilberforce perguntou a Huxley se ele reivindicava sua descendência de um macaco por parte do avô ou da avó. Diz-se que Huxley teria respondido que não se envergonharia de ter um macaco como ancestral, mas se envergonharia de estar associado a um homem que usasse seus grandes talentos para obscurecer a verdade.\n[…]\nA publicação anônima de Vestiges of the Natural History of Creation, em 1844, apoiando a ideia de transmutação, gerou forte controvérsia, mas atraiu um grande número de leitores, tornando-se um best-seller. Na reunião da British Association for the Advancement of Science em Oxford, em maio de 1847, o Bispo de Oxford Samuel Wilberforce usou seu sermão de domingo na Igreja de Santa Maria (St.\n[…]\nEspalhou-se a informação de que o bispo Samuel Wilberforce falaria contra a teoria de Darwin na reunião de sábado, 30 de junho de 1860. Wilberforce era um dos maiores oradores públicos de sua época, mas era conhecido como “Soapy Sam” (de um comentário de Benjamin Disraeli de que o estilo do bispo era “untuoso, oleaginoso, saponáceo”). Segundo o escritor Bill Bryson, “mais de mil pessoas se aglomeraram no local; outras centenas foram embora”. O próprio Darwin estava doente demais para comparecer.\n[…]\nThomas Henry Huxley",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Toumaï",
      "descricao": "Crânio fóssil de Sahelanthropus tchadensis, com cerca de 7 milhões de anos, achado no deserto de Djurab em 2001."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O crânio apelidado de Toumaï, com cerca de sete milhões de anos e candidato a ancestral humano, foi encontrado em que país africano?",
    "resposta": "Chade",
    "distratores": [
      "Níger",
      "Sudão",
      "Mali"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sahelanthropus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sahelanthropus",
        "situacao": "ok",
        "texto": "Sahelanthropus is an extinct genus of hominid dated to about 7 million years ago during the Late Miocene. The type species, Sahelanthropus tchadensis, was first announced in 2002, based mainly on a partial cranium, nicknamed Toumaï, discovered in northern Chad.\n[…]\nUpon description, Brunet and colleagues were able to constrain the TM 266 locality to 7 or 6 million years ago (near the end of the Late Miocene) based on the animal assemblage, which made Sahelanthropus the earliest African ape at the time. In 2008, Anne-Elisabeth Lebatard and colleagues (which includes Brunet) attempted to radiometrically date using the 10Be/9Be ratio the sediments Toumaï was found near (dubbed the \"anthracotheriid unit\" after the commonplace Libycosaurus petrochii).\n[…]\nA further possibility is that Toumaï is not ancestral to either humans or chimpanzees at all, but rather an early representative of the Gorillini lineage. Brigitte Senut and Martin Pickford, the discoverers of Orrorin tugenensis, suggested that the features of S. tchadensis are consistent with a female proto-gorilla. Even if this claim is upheld the find would lose none of its significance, because at present very few chimpanzee or gorilla ancestors have been found anywhere in Africa. Thus, if S.\n[…]\nFossil Hominids: Toumai\n[…]\nSahelanthropus tchadensis, Toumaï, Detailed composition of the Franco-Chadian palaeoanthropological Mission, the sahara scientific missions, the discovery's context, controversy about the misplacement of a molar, the minimum number of individuals, the geology of the site, was Toumaï buried ? and research to date the skull,...\n[…]\nSahelanthropus news reporting by John Hawks\n[…]\nS. tchadensis reconstruction\n[…]\nSahelanthropus tchadensis Origins – Exploring the Fossil Record – Bradshaw Foundation"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Jebel Irhoud",
      "descricao": "Sítio arqueológico no norte da África onde foram achados fósseis de Homo sapiens com cerca de 300 mil anos."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os fósseis de Jebel Irhoud, que recuaram a origem do Homo sapiens para cerca de trezentos mil anos atrás, foram achados em que país?",
    "resposta": "Marrocos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jebel_Irhoud"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jebel_Irhoud",
        "situacao": "ok",
        "texto": "Jebel Irhoud (Arabic: جبل إيغود, Moroccan Arabic: žbəl iġud) or Adrar n Ighoud (Standard Moroccan Tamazight: ⴰⴷⵔⴰⵔ ⵏ ⵉⵖⵓⴷ, romanized: Adrar n Iɣud), is an archaeological site in Morocco located just north of the town of Tlet Ighoud in Youssoufia Province, approximately 50 km (30 mi) south-east of the city of Safi.\n[…]\nRecent research disputes these claims, concluding that the Jebel Irhoud hominin remains represent an early form of the H. sapiens clade, present during the Middle Pleistocene.\n[…]\nThey have similar features to the Florisbad Skull, which dates to 260,000 years ago, discovered in Florisbad, South Africa. The Florisbad Skull has now been attributed to Homo sapiens as a result of the Jebel Irhoud finds.\n[…]\nWhen comparing the Jebel Irhoud fossils with those of modern humans, the main difference is the elongated shape of the braincase. According to the researchers, this indicates that brain shape, and possibly brain functions, evolved within the Homo sapiens lineage and relatively recently. Evolutionary changes in brain shape are likely associated with genetic changes in brain organization, interconnection, and development and may reflect adaptive changes in the way the brain functions.\n[…]\nMandibular morphology refers to the size and shape of the mandible or jaw. The most convincing evidence from the study of the Jebel Irhoud specimens' mandibular morphology comes from Irhoud 3. Irhoud 3 has an inverted T-shaped chin, something typically found in Homo sapiens.\n[…]\nFrom this, it was concluded that the Jebel Irhoud specimens represent archaic Homo sapiens while the Aterian and Iberomaurasian specimens represent anatomically modern Homo sapiens.\n[…]\nThe New York Times: Oldest Fossil of Homo sapiens Found in Morocco, Altering History of Our Species"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Djebel_Irhoud",
        "situacao": "ok",
        "texto": "Djebel Irhoud, Jebel Ighoud ou Adrar Ighud (em árabe: جبل إيغود; em berbere: ⴰⴷⵔⴰⵔ ⵉⵖⵓⴷ) é um sítio arqueológico localizado junto à aldeia homônima, cerca de 100 km a oeste de Marraquexe, 80 km a sudeste de Safim e 45 km a noroeste de Chichaoua, no Marrocos. É notável pelos fósseis de hominídeos que foram encontrados lá desde a descoberta do sítio em 1960.\n[…]\nA morfologia dos fósseis humanos encontrados em Djebel Irhoud é bastante semelhante àquela de humanos anatomicamente modernos, especialmente em relação à sua arcada dentária e características faciais, Irhoud 2 e 3, por exemplo, possuem torus supraorbitais pouco proeminentes, se aproximando de características morfológicas recentes.\n[…]\nA arcada dentária aproxima os fósseis de Irhoud de Homo sapiens modernos, em relação a outras espécies de homnínios e neandertais, porém com mosaicismo de características que os aproxima mais ou menos de humanos anatomicamente modernos.\n[…]\nO formato do crânio é uma característica que distancia os fósseis de Irhoud do humano anatomicamente moderno. Diferente do formato globular da caixa craniana de Homo sapiens contemporâneos, o observado nos fósseis é mais alongado, semelhante ao de outros fósseis de humanos mais arcaicos.\n[…]\nEssa descoberta se mostrou como uma quebra de paradigma no conhecimento sobre evolução humana, indicando que talvez os primeiros membros da espécie não tenham vindo do leste africano, mas sim do oeste, ou a partir de uma origem complexa envolvendo todo o continente. Também indica que os primeiros Homo sapiens existiram muito antes do que se esperava em relação à sua saída da África. A espécie primeiramente se espalhou pelo continente, para então deixá-lo.\n[…]\nLista de fósseis de transição\n[…]\nPor que fósseis achados no Marrocos mudam tudo o que sabemos sobre a origem da humanidade (em português). BBC. www.bbc.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Hominídeos de Dmanisi",
      "descricao": "Fósseis de Homo com cerca de 1,8 milhão de anos encontrados no sítio de Dmanisi, no Cáucaso."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os crânios de Dmanisi, com cerca de um milhão e oitocentos mil anos, estão entre os hominídeos mais antigos achados fora da África. Em que país ficam?",
    "resposta": "Geórgia",
    "distratores": [
      "Armênia",
      "Azerbaijão",
      "Turquia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dmanisi_hominins",
      "https://en.wikipedia.org/wiki/Dmanisi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dmanisi_hominins",
        "situacao": "ok",
        "texto": "The Dmanisi hominins, Dmanisi people, or Dmanisi man were a population of Early Pleistocene hominins whose fossils have been recovered at Dmanisi, Georgia. The fossils and stone tools recovered at Dmanisi range in age from 1.85 to 1.77 million years old, making the Dmanisi hominins the earliest well-dated hominin fossils in Eurasia and the best preserved fossils of early Homo from a single site so\n[…]\nIn the Pleistocene, the climate of Georgia was more humid and forested than it is today, comparable to a mediterranean climate. The Dmanisi fossil site was located near an ancient lake shore, surrounded by forests and grasslands and home to a diverse fauna of Pleistocene animals. The favourable climate at Dmanisi might have acted as a refuge for hominins in the Early Pleistocene and it would have been reachable from Africa through the Levantine corridor.\n[…]\nThe classification of the Dmanisi hominins is disputed and a discussion on whether they represent an early form of H. erectus, a distinct species of their own dubbed H. georgicus or something else entirely are ongoing.\n[…]\nerectus in Asia and hominins ancestral to H. sapiens.\n[…]\nThe environment, which would also have experienced cold winters, would have been quite unlike that of the dry and hot steppes of East Africa, where earlier (and contemporary) H. ergaster/H. erectus. Even then, Pleistocene Dmanisi was probably warmer and drier than present day Georgia, perhaps comparable to a mediterranean climate.\n[…]\nThe territory of eastern Georgia hosted critical ecosystems long before hominins arrived at Dmanisi. At Kvabebi, about 100 km to the east and dated to 3.07 Ma, a distinct Pliocene fauna — featuring giant hyraxes (Kvabebihyrax) and spiral-horned antelopes (Protoryx) — was once interpreted as evidence of African migrant fauna, leading to the assumption that early hominins followed pre-existing “African-like” habitats in Eurasia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dmanisi",
        "situacao": "ok",
        "texto": "Dmanisi (Georgian: დმანისი, romanized: dmanisi, pronounced [dmanisi], Azerbaijani: Başkeçid) is a town and archaeological site in the Kvemo Kartli region of Georgia approximately 93 km southwest of the nation's capital Tbilisi in the river valley of Mashavera.\n[…]\nThe area around the town of Dmanisi has been settled since the Early Bronze Age. In the 6th century an Orthodox Christian cathedral named \"Dmanisi Sioni\" was built there. The oldest written record of the town is in the 9th century as a possession of the Arab emirate of Tbilisi. Located on the confluence of trading routes and cultural influences, Dmanisi was particularly important, growing into a major commercial center of medieval Georgia.\n[…]\nThe town was taken by the Seljuk Turks in the 1080s and by the Georgian kings David the Builder and Demetrios I between 1123 and 1125. The Turco-Mongol armies under Timur laid waste to the town in the 14th century. Sacked again by the Turkomans in 1486, Dmanisi never recovered and declined to a scarcely inhabited village by the 18th century. The castle was controlled by the House of Orbeliani.\n[…]\nEarly human (or hominin) fossils, originally named Homo georgicus and now considered Homo erectus georgicus, were found at Dmanisi between 1991 and 2005. At 1.8 million years old, they are now believed to be a subspecies of Homo erectus and not a separate species of Homo. These fossils represent the earliest known human presence in the Caucasus.\n[…]\nPrehistoric Georgia\n[…]\nDmanisi archaeological site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Homo_georgicus",
        "situacao": "ok",
        "texto": "Homo georgicus ou Homo erectus georgicus é uma espécie de primatas hominídeos do mesmo gênero dos humanos, o gênero Homo. Esta espécie foi estabecida em 2002 a partir dos fósseis encontrados um ano antes em Dmanisi, no Cáucaso, República da Geórgia. É considerada intermediária entre o Homo habilis e o Homo erectus e relacionada com o Homo ergaster.\n[…]\nOs fósseis foram datados em 1,8 milhão de anos. O tamanho do cérebro foi calculado entre 600 e 680 cm³. A estatura foi estimada em 1,5 m.\n[…]\nFoi encontrado primeiro grande parte de um esqueleto (Vekua et al. 2002; Gabunia et al. 2002). Posteriormente houve outras três descobertas, incluindo um crânio completo (mas sem dentes, somente com o canino esquerdo) e além disto, foram encontrados, associados a ossos, artefatos de pedra, que permitiam a esta espécie caçar, matar animais e processá-los. A condição de caçador e não de carniceiro nem de simples coletor e consumidor de alimentos vegetais, do Homo georgicus, tem sido estabelecida.\n[…]\nO hominídeo de Dmanisi consumia carne, e este produto, pode haver sido a chave da sobrevivência desta espécie e de outros hominídeos habitantes de altas latitudes, sobre todo no inverno, conforme o projeto de David Lordkipanidze.\n[…]\nGabunia L., de Lumley M.-A., Vekua A., Lordkipanidze D. y de Lumley H. (2002): \"Découvert d'un nouvel hominidé à Dmanissi (Transcaucasie, Georgie)\". C.R. Palevol, 1(4): 243-53\n[…]\nVekua A., Lordkipanidze D., Rightmire G.P., Agusti J., Ferring R., Maisuradze G., Mouskhelishvili A., Nioradze M., Ponce de León M., Tappen M., Tvalchrelidze M. y Zollikofer C. (2002). \"A new skull of early Homo from Dmanisi, Georgia\". Science, 297(5578): 85-9",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "A Descendência do Homem",
      "descricao": "Livro de Charles Darwin publicado em 1871 que aplica a teoria da evolução aos seres humanos e trata da seleção sexual."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No livro A Descendência do Homem, de 1871, Darwin considerou provável que os primeiros ancestrais humanos tivessem vivido em que continente?",
    "resposta": "África",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Descent_of_Man,_and_Selection_in_Relation_to_Sex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Descent_of_Man,_and_Selection_in_Relation_to_Sex",
        "situacao": "ok",
        "texto": "The Descent of Man, and Selection in Relation to Sex is a book by English naturalist Charles Darwin, first published in 1871, which applies evolutionary theory to human evolution, and details his theory of sexual selection, a form of biological adaptation distinct from, yet interconnected with, natural selection. Darwin used the word \"descent\" to mean lineal descendant of ancestors.\n[…]\nNonetheless, Darwin's explanation of sexual selection continues to receive support from both social and biological scientists as \"the best explanation to date\".\n[…]\nDarwin considered sexual selection to be as much of a theoretical contribution of his as was his natural selection, and a substantial amount of Descent is devoted exclusively to this topic.\n[…]\nA single line in this first work hinted at such a conclusion: \"light will be thrown on the origin of man and his history.\"  When writing The Variation of Animals and Plants Under Domestication in 1866, Darwin intended to include a chapter including humans in his theory, but the book became too big and he decided to write a separate \"short essay\" on ape ancestry, sexual selection and human expression, which became The Descent of Man.\n[…]\nApart from Wallace, a number of scholars considered the role of sexual selection in human evolution controversial. Darwin was accused of looking at the evolution of early human ancestors through the moral lens of the 19th century Victorian society. Joan Roughgarden, citing many elements of sexual behaviour in animals and humans that cannot be explained by the sexual selection model, suggested that the function of sex in human evolution was primarily social.\n[…]\nWhile debates on the subject continued, in January 1871 Darwin started on another book, using leftover material on emotional expressions, which became The Expression of the Emotions in Man and Animals.\n[…]\nThe Descent of Man at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A_Descend%C3%AAncia_do_Homem_e_Sele%C3%A7%C3%A3o_em_Rela%C3%A7%C3%A3o_ao_Sexo",
        "situacao": "ok",
        "texto": "“A Descendência do Homem e Seleção em Relação ao Sexo”, é um livro do naturalista inglês Charles Darwin, que teve sua primeira edição publicada por John Murray, em 24 de fevereiro de 1871 no Reino Unido. A obra disserta sobre a teoria evolutiva, aplicando teorias importantes de Darwin como a seleção sexual e seleção natural.\n[…]\nPublicada inicialmente em dois volumes em 1871, a \"Descendência do Homem\" trata de dois tópicos: a descendência ou origem do homem a partir de outras espécies, não sendo ele, portanto, uma criação especial; e o processo de seleção sexual, que ocorre, para Darwin, paralelamente ao processo de seleção natural.\n[…]\nNa primeira parte da obra, a tese central de Darwin é que o homem descende de uma forma de vida menos organizada. Suas evidências provém da embriologia e da anatomia comparadas, por meio das quais observa as semelhanças entre as estruturas presentes no ser humano e em outras espécies de mamíferos. Disto conclui que todos esses seres devem descender do mesmo progenitor. O meio pelo qual se deu a evolução do homem é o mesmo que se aplica às outras espécies, ou seja, a seleção natural.\n[…]\nA obra de Darwin, \"Descendência do Homem\", completou 150 anos de sua publicação em 2021, o que levou a uma retomada da obra a partir do olhar, principalmente, das ciências naturais contemporâneas.\n[…]\nNesse sentido, por exemplo, Freud irá se valer da noção desenvolvida por Darwin de “tempo primitivo”, muito presente em “A Descendência do Homem e Seleção em Relação ao Sexo” e que diz respeito a um processo ancestral no qual o ser humano teria desenvolvido seus comportamentos, bem como do exercício especulativo em relação ao passado humano, praticado por Darwin em seu texto, para construir diversos conceitos psicanalíticos.\n[…]\nA origem do homem e a seleção sexual. PR, Hemus, 2002 Google Livros Jul. 2011",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Peter Wilhelm Lund",
      "descricao": "Naturalista dinamarquês do século dezenove, considerado o pai da paleontologia brasileira, que pesquisou cavernas de Minas Gerais."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O naturalista europeu Peter Lund, que achou ossos humanos junto a animais extintos em cavernas brasileiras, viveu e pesquisou em que cidade mineira?",
    "resposta": "Lagoa Santa",
    "distratores": [
      "Ouro Preto",
      "Diamantina",
      "Sete Lagoas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Peter_Wilhelm_Lund"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Peter_Wilhelm_Lund",
        "situacao": "ok",
        "texto": "Peter Wilhelm Lund (14 June 1801 – 25 May 1880) was a Danish paleontologist, zoologist, and archeologist. He spent most of his life working and living in Brazil. He is considered the father of Brazilian paleontology as well as archaeology.\n[…]\nOnly a year after his ground-breaking finds of human remains, Lund suddenly stopped the work in the caves, citing lack of resources to finance the excavations. He then donated his huge collection to the king and the people of Denmark. Alleging fragile health conditions, he decided to stay in Lagoa Santa, never to return to Europe. Whereas Lund possibly took badly to his own findings, Darwin embraced them with enthusiasm.\n[…]\nWhile living in Lagoa Santa, he hosted several European naturalists, such as the Danish botanist Eugenius Warming. Lund never married and died in Lagoa Santa three weeks before reaching the age of 79.\n[…]\nThe cave where Lund made his discovery of \"Lagoa Santa Man\" is now protected by the 2,004 hectares (4,950 acres) Sumidouro State Park, created in 1980.\n[…]\nThe journal Lundiana is named in his honour  as is a town in Lagoa Santa. Lund is considered the \"Father of Brazilian paleontology and archeology.\" His voluminous correspondence with Brazilian scientists and institutions is still uncollected.\n[…]\nDanish writer Henrik Stangerup's novel The Road to Lagoa Santa is a fictional account of Lund's life, focussing on his early and sudden retirement which is thought to have been motivated by religious doubts caused by his scientific findings.\n[…]\nLuna, Pedro Ernesto de: Peter Wilhelm Lund: o auge das suas investigações científicas e a razão para o término das suas pesquisas[1], (in Portuguese) Ph.D. thesis, Universidade de São Paulo, 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Peter_Wilhelm_Lund",
        "situacao": "ok",
        "texto": "Peter Wilhelm Lund (Copenhague, 14 de junho de 1801 – Lagoa Santa, 25 de maio de 1880) foi um dos naturalistas dinamarqueses mais notáveis do século XIX, e é considerado o pai da paleontologia e arqueologia no Brasil.\n[…]\nO resultado dos estudos botânicos promovidos nesta expedição foram publicados em Observações a respeito da vegetação dos campos no interior do Brasil, especialmente fito-históricas, de 1835. Em Curvelo, Minas Gerais, encontrou outro dinamarquês, Peter Claussen, que o apresentou às grutas da região cárstica do vale do Rio das Velhas. Decidiu estabelecer residência em Lagoa Santa e estudou uma enormidade de fósseis encontrados nas centenas de cavernas entre Sabará e Curvelo.\n[…]\nEm 1845, alegando falta de recursos, Lund terminou repentinamente o trabalho nas cavernas. Ele empacotou e doou a sua vasta coleção, com cerca de 20 mil itens, para o rei Cristiano VIII da Dinamarca. Um único exemplar de crânio humano encontrado por ele permanece no Brasil, no IHGB. Permaneceu em Lagoa Santa pelo resto da vida. No início de 1880, Lund ficou doente e morreu de forma tranquila em 25 de maio.\n[…]\nAs descobertas de fósseis humanos levaram Lund, em 1842, a escrever uma carta ao Instituto Histórico e Geográfico Brasileiro, publicada naquele mesmo ano e intitulada “Sobre a antiguidade do homem de Lagoa Santa”, onde ele discutiu se aquelas ossadas fósseis, uma vez que se encontravam em estratos geológicos que também continham fósseis da fauna extinta.\n[…]\nEm 2012, o príncipe Frederik André Henrik Christian e a princesa Mary Elizabeth da Dinamarca visitaram Belo Horizonte e Lagoa Santa e inauguraram do Museu Peter Lund, próximo à entrada da Gruta da Lapinha, dentro do Parque Estadual do Sumidouro.",
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
