Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Povos e Idiomas** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Língua espanhola",
      "descricao": "Língua românica nascida em Castela, oficial na Espanha e na maior parte da América Latina."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as línguas que descendem do latim, como o português, o francês e o italiano, qual tem mais falantes nativos?",
    "resposta": "Espanhol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romance_languages",
      "https://pt.wikipedia.org/wiki/Língua_espanhola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romance_languages",
        "situacao": "ok",
        "texto": "The Romance languages, less commonly known as the Latin languages, are the languages that directly descended from Vulgar Latin. They are the only extant (living) subgroup of the Italic branch of the Indo-European language family. The most prominent Romance languages include Spanish, French, Portuguese, Italian, Romanian and Catalan.\n[…]\nThe Romance language most widely spoken natively today is Spanish, followed by Portuguese, French, Italian and Romanian, which together cover a vast territory in Europe and beyond, and work as official and national languages in dozens of countries. In Europe, at least one Romance language is official in France, Portugal, Spain, Italy, Switzerland, Belgium, Luxembourg, Romania, Moldova, Monaco, Andorra, San Marino and Vatican City.\n[…]\nSome of the divergence comes from semantic change: where the same root words have developed different meanings. For example, the Portuguese word fresta is descended from Latin fenestra \"window\" (and is thus cognate to French fenêtre, Italian finestra, Romanian fereastră and so on), but now means \"skylight\" and \"slit\". Cognates may exist but have become rare, such as hiniestra in Spanish, or dropped out of use entirely.\n[…]\nLH: used in Portuguese and Occitan for /ʎ/.\n[…]\nSS: used in French, Portuguese, Piedmontese, Romansh, Occitan, and Catalan for /s/ between vowels, in Italian, Romance languages of Italy, and Corsican for long /ss/.\n[…]\nUnlike English, the names of months, days of the weeks, and derivatives of proper nouns are usually not capitalized: thus, in Italian one capitalizes Francia (\"France\") and Francesco (\"Francis\"), but not francese (\"French\") or francescano (\"Franciscan\"). However, each language has some exceptions to this general rule.\n[…]\nPortuguese\n[…]\nItalian\n[…]\nDevoto, Giacomo (1999). Il Linguaggio d'Italia. Milano: RCS Libri (Biblioteca Universale Rizzoli)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_espanhola",
        "situacao": "ok",
        "texto": "Língua espanhola (lengua española) ou castelhana (lengua castellana) é uma idioma românico da família das línguas indo-europeias que evoluiu do latim vulgar falado na Península Ibérica da Europa. Atualmente, é uma língua global com cerca de 500 milhões de falantes nativos, principalmente nas Américas e na Espanha, e cerca de 600 milhões quando se incluem falantes de segunda língua. É a língua ofic\n[…]\nComo língua românica, o espanhol é descendente do latim. Cerca de 75% do vocabulário espanhol moderno é de origem latina, incluindo empréstimos latinos do grego antigo. Juntamente com o inglês e o francês, é também uma das línguas estrangeiras mais ensinadas em todo o mundo e está bem representado nas ciências humanas e sociais.\n[…]\nO espanhol, além disso, é a língua mais ensinada no país, depois do inglês.\n[…]\nO espanhol é a língua oficial da Espanha. É também falado em Gibraltar e em Andorra (onde é a língua materna maioritária devido à imigração, mas não é a língua oficial como o catalão) É também utilizado em pequenas comunidades noutros países europeus, principalmente na Alemanha, Bélgica, França, Itália, Portugal, Reino Unido e Suíça (onde é a língua materna de 7% da população, representando a língua minoritária mais falada neste país por trás de três dos quatro idiomas oficiais).\n[…]\nDevido às prolongadas conquistas às quais Espanha foi submetida ou que submeteu a outras nações, a língua espanhola foi invadida por uma enorme quantidade de vozes \"adquiridas\" de línguas de diversos grupos. É possível encontrar, no espanhol, palavras celtas, iberas, ostrogodas, visigodas, latinas, gregas, árabes, francesas, italianas, germânicas, caribes, astecas, quéchuas, guaranis e outras. A influência relativa de cada um destas \"aquisições\" varia de acordo com o país falante.\n[…]\nDiferenças entre o espanhol e o português\n[…]\nPronomes da língua espanhola\n[…]\n«Língua espanhola» (em inglês). na BBC Online"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Língua russa",
      "descricao": "Língua eslava oriental, oficial na Rússia e em Belarus."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as línguas eslavas, como o tcheco, o búlgaro e o sérvio, qual tem o maior número de falantes?",
    "resposta": "Russo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Slavic_languages",
      "https://en.wikipedia.org/wiki/Russian_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slavic_languages",
        "situacao": "ok",
        "texto": "The Slavic languages, also known as the Slavonic languages, are Indo-European languages spoken primarily by the Slavic peoples and their descendants. They are thought to descend from a proto-language called Proto-Slavic, spoken during the Early Middle Ages, which in turn is thought to have descended from the earlier Proto-Balto-Slavic language, linking the Slavic languages to the Baltic languages \n[…]\nOther phonemic vowels are found in certain languages (e.g. the schwa /ə/ in Bulgarian and Slovenian, distinct high-mid and low-mid vowels in Slovenian, and the lax front vowel /ɪ/ in Ukrainian).\n[…]\nRussian and Bulgarian have eliminated distinctive vowel length and tone and converted the accent into a stress accent (as in English) but preserved its position. As a result, the complexity of the mobile accent and the multiple accent patterns still exists (particularly in Russian because it has preserved the Common Slavic noun inflections, while Bulgarian has lost them).\n[…]\nRussian dialects have numerous borrowings from Finno-Ugric languages, particularly for forest terms and geographical names. This is related to the expansion in 7th to the 11th centuries AD of Slavic people into the areas of Central Russia (near Moscow) previously populated by Finno-Ugric peoples, and the resulting genetic, cultural and linguistic exchange.\n[…]\nBulgarian: ISO 639-1 code: bg; ISO 639-3 code: bul\n[…]\nChurch Slavonic language, variations of Old Church Slavonic with significant replacement of the original vocabulary by forms from the Old East Slavic and other regional forms. The Bulgarian Orthodox Church, Russian Orthodox Church, Polish Orthodox Church, Macedonian Orthodox Church, Serbian Orthodox Church, and even some Roman Catholic Churches in Croatia continue to use Church Slavonic as a liturgical language."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Russian_language",
        "situacao": "ok",
        "texto": "Russian is an East Slavic language belonging to the Balto-Slavic branch of the Indo-European language family. It is one of the four extant East Slavic languages, and is the native language of the Russian people. Russian was the de facto (and de jure in its final years) official language of the former Soviet Union.\n[…]\nRussian also has notable lexical similarities with Bulgarian due to a common Church Slavonic influence on both languages, but because of later developments in the 19th and 20th centuries, modern Bulgarian grammar differs markedly from Russian. The use of Church Slavonic as a literary language in the medieval period gave Russian a large number of borrowings and calques ultimately derived from Greek.\n[…]\nAfter the fall of Constantinople in 1453, Russian Orthodoxy became more self-contained, and over time, the Russian recension of Church Slavonic came to influence the Bulgarian and Serbian recensions of Church Slavonic. The influence of Church Slavonic on Russian can still be seen in certain aspects of phonology, grammar, and particularly lexis.\n[…]\nIn Azerbaijan, Russian has no official status, but is a lingua franca of the country. 26% of the population was fluent in Russian in 2006, and 5% used it as the main language with family, friends, or at work.\n[…]\nIn Turkmenistan, Russian lost its status as the official lingua franca in 1996. Only about 12% of the population, predominantly those who grew up during the Soviet era, speak Russian; among younger generations, proficiency has sharply declined. Primary and secondary education in Russian is almost non-existent.\n[…]\nAnother Northern dialectal morphological feature is a post-posed definite article -to, -ta, -te similar to that existing in Bulgarian and Macedonian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_eslavas",
        "situacao": "ok",
        "texto": "Línguas eslavas (ou eslávicas) são um grupo de línguas indo-europeias com cerca de 430 milhões de falantes, principalmente no Leste Europeu.\n[…]\nAs línguas eslavas são convencionalmente dividas em três subgrupos: oriental, ocidental e meridional, que juntos constituem mais de 20 línguas. 10 desses idiomas possuem status oficial de língua nacional nos países onde são predominantemente falados: russo, ucraniano e bielorrusso (do grupo oriental), polonês, tcheco e eslovaco (do grupo ocidental) e servo-croata, esloveno, búlgaro e macedônio (do grupo meridional).\n[…]\nEslavo eclesiástico, búlgaro, macedônio\n[…]\nMontenegrino, sérvio, bósnio, croata, esloveno.\n[…]\nRusso, ucraniano, bielorrusso, rusino\n[…]\nA expansão meridional, cruzando o Danúbio até o Império Bizantino, é a base para búlgaros, macedônios, sérvios, croatas e eslovenos. No oeste, emergem os poloneses, tchecos e eslovacos.\n[…]\nEssa grande diversificação da língua comum eslava ocorre no mesmo período em que o latim se desintegra nas línguas romances, mas sob circunstâncias diferentes. A evidência linguística demonstra que antes do colapso do protoeslavo, os eslavos estavam submetidos a fortes influências linguísticas sobretudo no que se refere a palavras provenientes do germânico (gótico) e do iraniano (sármata).\n[…]\nAs línguas eslavas estão estreitamente relacionadas com o grupo báltico (lituano, letão e o extinto antigo prussiano), mas também compartilham certas inovações linguísticas com outros grupos de línguas indo-europeias, como o iraniano e o armênio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Quíchua",
      "descricao": "Família de línguas indígenas dos Andes, falada no antigo Império Inca."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Herdeira do idioma do Império Inca, qual é a língua indígena com mais falantes nas Américas?",
    "resposta": "Quíchua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quechuan_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quechuan_languages",
        "situacao": "ok",
        "texto": "Quechua (; Spanish: [ˈketʃwa]), also called Runa simi in Southern Quechua (pronounced [ˈɾʊna ˈsɪmɪ], 'people's language'), is an indigenous language family that originated in central Peru and thereafter spread to other countries of the Andes.\n[…]\nAt first, Spaniards referred to the language of the Inca empire as the lengua general, the general tongue. The name quichua was first used in 1560 by Domingo de Santo Tomás in his Grammatica o arte de la lengua general de los indios de los reynos del Perú. It is not known what name the native speakers gave to their language before colonial times and whether it was Spaniards who called it quechua.\n[…]\nAlternatively, Pedro Cieza de León and Inca Garcilaso de la Vega, the early Spanish chroniclers, mention the existence of a people called Quichua in the present Apurímac Region, and it could be inferred that their name was given to the entire language.\n[…]\nThe Hispanicised spellings Quechua and Quichua have been used in Peru and Bolivia since the 17th century, especially after the Third Council of Lima. Today, the various local pronunciations of \"Quechua\" include [ˈqʰeʃwa ~ ˈqʰeswa], [ˈχɪt͡ʃwa], [ˈkit͡ʃwa], and [ˈʔiʈ͡ʂwa].\n[…]\nWanka Quechua\n[…]\nWanka Quechua\n[…]\nStark, L. R.; Muysken, P. C. (1977). Diccionario español-quichua, quichua español. (Publicaciones de los Museos del Banco Central del Ecuador, 1). Quito: Guayaquil.\n[…]\nQuechua Collection Archived 2020-11-25 at the Wayback Machine of Patricia Dreidemie at the Archive of the Indigenous Languages of Latin America.\n[…]\nHuancavelica Quechua Fieldnotes of Willem de Ruese, copies of handwritten notes on Quechua pedagogical and descriptive materials, from the Archive of the Indigenous Languages of Latin America.\n[…]\ninformation about Quechua in a variety of languages"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_qu%C3%ADchua",
        "situacao": "ok",
        "texto": "O quíchua (em quíchua: qhichwa simi ou runa simi; também chamado de quechua ou quéchua), é uma importante família de línguas indígenas da América do Sul, ainda falada hoje por cerca de dez milhões de pessoas de diversos grupos étnicos da Argentina, Bolívia, Chile, Colômbia, Equador, Peru e ao longo dos Andes. Possui vários dialetos inteligíveis entre si. É uma das línguas oficiais da Bolívia, do P\n[…]\nO quíchua era falado na região central dos Andes antes da formação do Império Inca, o qual adotou-a como oficial da administração. Ainda é falado hoje, na forma de vários dialetos, sendo o idioma nativo mais falado na América do Sul. Sua influência distribui-se no Peru, centro e sudoeste da Bolívia, sul da Colômbia e do Equador, norte da Argentina e norte do Chile.\n[…]\nO quíchua foi espalhado para mais além das fronteiras do Império Inca pela Igreja Católica, que a escolheu para sua pregação entre os índios. Onde os povos quíchua e aimará convivem, os falantes do espanhol dão preferência aos termos quíchuas. No sul rural da Bolívia, há inclusive palavras quíchuas que são usadas inclusive pelos que falam só aimará, como wawa (em quíchua: wawa; lit. \"criança\"), michi (em quíchua: michi; lit. \"gato\"), wasca (em quíchua: wasca; lit.\n[…]\nHoje, o quíchua é uma língua oficial no Peru e na Bolívia, junto com o espanhol e o aimará. A maior dificuldade para o uso mais corrente e ensino do quíchua é a falta de material escrito na língua, tais como jornais, livros, revistas, softwares etc. As tecnologias de informação e comunicação vêm dificultando ainda mais o uso do idioma. Tanto o quíchua como o aimará e as demais línguas indígenas da América sobrevivem apenas na linguagem oral.\n[…]\nQuíchua I ou waywash (em quíchua: Waywash), falado nas terras mais altas do Peru central. É o mais diferente dos dialetos, sendo considerado por alguns estudiosos como sendo uma língua separada.\n[…]\nEm quíchua\n[…]\nQuíchuas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Suaíli",
      "descricao": "Língua banta da África Oriental, oficial no Quênia e na Tanzânia e usada como língua franca na região."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Oficial no Quênia e na Tanzânia, qual é a língua banta com mais falantes, somando os que a aprendem como segunda língua?",
    "resposta": "Suaíli",
    "distratores": [
      "Zulu",
      "Xhosa",
      "Quimbundo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language",
      "https://en.wikipedia.org/wiki/Bantu_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nDue to concerted efforts by the governments of Tanzania and Kenya, Swahili is one of three official languages (alongside English and French) of the East African Community (EAC) countries, which are Kenya, Tanzania, Burundi, the Democratic Republic of the Congo, Rwanda, Somalia, South Sudan, and Uganda. It is the lingua franca of other areas in the African Great Lakes region and East and Southern Africa.\n[…]\nAfter Tanganyika and Zanzibar unification in 1964, Taasisi ya Uchunguzi wa Kiswahili (TUKI, Institute of Swahili Research) was created from the Interterritorial Language Committee. In 1970 TUKI was merged with the University of Dar es Salaam, while Baraza la Kiswahili la Taifa (BAKITA) was formed. BAKITA is an organisation dedicated to the development and advocacy of Swahili as a means of national integration in Tanzania.\n[…]\nBAKITA's vision is: \"1.To efficiently manage and coordinate the development and use of Kiswahili in Tanzania 2.To participate fully and effectively in promoting Swahili in East Africa, Africa and the entire world over\". Although other bodies and agencies can propose new vocabularies, BAKITA is the only organisation that can approve its usage in the Swahili language. Tanzanians are highly credited for shaping the language to appear the way it is now.\n[…]\nPemba Swahili\n[…]\nPrins, A. H. J. (1970). A Swahili Nautical Dictionary. Preliminary studies in Swahili lexicon. Vol. 1. Dar es Salaam: Chuo cha Uchunguzi wa Lugha ya Kiswahili. LCCN 79981848.\n[…]\nList of Swahili Dictionaries"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Bantu_languages",
        "situacao": "ok",
        "texto": "The Bantu languages (UK: , US:   Proto-Bantu: *bantʊ̀) are a language family, or a branch of the proposed Niger-Congo language family, containing about 600 languages that are spoken by the Bantu peoples of Central, Southern, Eastern and Southeast Africa. They form the largest branch of the Southern Bantoid languages.\n[…]\nThe most widely spoken Bantu language by number of speakers is Swahili, with 16 million native speakers and 80 million L2 speakers (2015). Most native speakers of Swahili live in Tanzania, where it is a national language, while as a second language, it is taught as a mandatory subject in many schools in East Africa, and is a lingua franca of the East African Community.\n[…]\nThe prefix ba- specifically refers to people. Endonymically, the term for cultural objects, including language, is formed with the ki- noun class (Nguni ísi-), as in KiSwahili (Swahili language and culture), IsiZulu (Zulu language and culture) and KiGanda (Ganda religion and culture).\n[…]\nMost languages are referred to in English without the class prefix (Swahili, Tswana, Ndebele), but are sometimes seen with the (language-specific) prefix (Kiswahili, Setswana, Sindebele). In a few cases prefixes are used to distinguish languages with the same root in their name, such as Tshilubà and Kiluba (both Luba), Umbundu and Kimbundu (both Mbundu). The prefixless form typically does not occur in the language itself, but is the basis for other words based on the ethnicity.\n[…]\nSwahili (Kiswahili) (350,000; tens of millions as L2)\n[…]\nArte da lingua de Angola: oeferecida [sic] a virgem Senhora N. do Rosario, mãy, Senhora dos mesmos pretos The art of the language of Angola, by Father Pedro Dias, 1697, Lisbon, artedalinguadean\n[…]\nContini-Morava, Ellen. Noun Classification in Swahili Archived 2020-10-26 at the Wayback Machine. 1994, Virginia.edu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nA Alemanha estabeleceu colônia em Tanganica, hoje Tanzânia, em 1886 e, tendo percebido o quanto a língua Suaíli era disseminada (embora em baixa densidade) na região,  fez dessa a língua oficial da colônia. Os colonizadores ingleses não fizeram o mesmo no vizinho Quênia, embora tenham feito tentativas nesse sentido.\n[…]\nNos demais países o suaíli é mais usado nas cidades comerciais por refugiados ou perto das fronteiras com a Tanzânia e o Quênia. Mesmo assim o idioma é, possivelmente, mais falado que o hauçá da África do Oeste como a língua nativa mais falada na região subsaariana. Conforme o Banco Mundial, o suaíli é falado por 10 a 15% dos habitantes da África ao sul do deserto do Saara.\n[…]\nSuaíli difere das demais línguas subsaarianas por não apresentar “tons”. Outra exceção é o grupo de dialetos Mijikenda, que inclui o dialeto Mvita, de Mombaça, segunda cidade e porto de Quênia.\n[…]\nHá uma confusão para muitos falantes, em especial para aqueles de língua-mãe diferente do suaíli, entre os sons de wahili l e r, sendo ambos pronunciados como /ɺ/",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Língua galesa",
      "descricao": "Língua celta falada no País de Gales, cooficial com o inglês."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as línguas celtas ainda faladas, qual tem mais falantes que a aprenderam como língua materna?",
    "resposta": "Galês",
    "distratores": [
      "Irlandês",
      "Bretão",
      "Gaélico escocês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Welsh_language",
      "https://en.wikipedia.org/wiki/Celtic_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Welsh_language",
        "situacao": "ok",
        "texto": "Welsh (Cymraeg [kəmˈraːiɡ]  or y Gymraeg [ə ɡəmˈraːiɡ]) is a Celtic language of the Brittonic subgroup that is native to the Welsh people. Welsh is spoken natively in Wales by about 18% of the population, by some in England, and in Y Wladfa (the Welsh colony in Chubut Province, Argentina). Historically, it has also been known in English as Cambrian, Cambric and Cymric.\n[…]\nIn the 1970s, there was an attempt to standardise the Welsh language by teaching Cymraeg Byw ('Living Welsh') – a colloquially based generic form of Welsh, but the attempt largely failed because it did not encompass the regional differences used by Welsh speakers.\n[…]\nModern Welsh can be considered to fall broadly into two main registers—Colloquial Welsh (Cymraeg llafar) and Literary Welsh (Cymraeg llenyddol). Colloquial Welsh is used in most speech and informal writing.\n[…]\nLiterary Welsh is closer to the form of Welsh standardised by the 1588 translation of the Bible (although the 2004 Beibl Cymraeg Newydd (Welsh for 'New Welsh Bible') is significantly less formal than the traditional 1588 Bible), and is found in official documents and other formal registers, including much literature. As a standardised form, literary Welsh shows little if any of the dialectal variation found in colloquial Welsh. Some differences include:\n[…]\nAt all Welsh universities and the Open University, students have the right to submit assessed work and sit exams in Welsh even if the course was taught in English (usually the only exception is where the course requires demonstrating proficiency in another language). Following a commitment made in the One Wales coalition government between Labour and Plaid Cymru, the Coleg Cymraeg Cenedlaethol (Welsh Language National College) was established."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Celtic_languages",
        "situacao": "ok",
        "texto": "The Celtic languages (  KEL-tik) are a branch of the Indo-European language family, descended from the hypothetical Proto-Celtic language. The term Celtic was first used to describe this language group by Edward Lhuyd in 1707, following Paul-Yves Pezron, who made the explicit link between the Celts described by classical writers and the Welsh and Breton languages."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_galesa",
        "situacao": "ok",
        "texto": "O galês (Cymraeg ou y Gymraeg) é um idioma indo-europeu do ramo céltico, falado nativamente na parte ocidental da Grã-Bretanha, mais especificamente no País de Gales (Cymru), e em Y Wladfa, uma colônia de imigrantes galeses na Província de Chubut, na Patagônia argentina. O galês é falado na ilha da Grã-Bretanha há mais tempo que o próprio inglês. Existem também alguns falantes do idioma galês na I\n[…]\nDe acordo com a classificação de vitalidade linguística da Unesco publicada em 2010, o galês é considerado um idioma vulnerável, o que indica que a língua “é falada pela maioria das crianças, mas seu uso é restrito a certos domínios comunicativos (ex. o lar)”. Apesar da condição minoritária, a língua galesa pode ser vista e ouvida em vários registros por todos os lados no País de Gales.\n[…]\nO  Galês (Cymraeg) provém da antiga língua dos celtas britônicos, que chegaram à ilha vindos da Gália, no século V a.C., e que permaneceu sendo usado no interior da Grã-Bretanha, mesmo após as invasões germânicas, em regiões onde anglos, saxões e jutos tinham menor influência. Após a invasão normanda, os falantes do galês recuaram mais para o oeste, onde a língua sobreviveu, ao passo que no sul da Escócia, a língua dos celtas foi suplantada pelo inglês arcaico.\n[…]\nO galês medieval (Cymraeg Canol ) é como se descreve a língua galesa no período do século XII ao XIV. Desta etapa da língua restam mais registros que do galês arcaico Esta forma de galês desenvolveu-se a partir de mudanças linguísticas ocorridas no galês antigo. O galês medieval é a língua de quase todos os manuscritos da coletânea de escritos em prosa do Mabinogion, ainda que a origem dos contos em si seja muito mais antiga.\n[…]\nO Mabinogion é também a língua da maior parte dos manuscritos da Lei Galesa. O galês medieval é razoavelmente inteligível, com algum trabalho, para um falante letrado do galês moderno.\n[…]\nTraduzir galês com Babylon.com",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Han",
      "descricao": "Grupo étnico majoritário da China, também presente em Taiwan e em comunidades pelo mundo."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Qual grupo étnico, majoritário na China, é o mais numeroso do mundo?",
    "resposta": "Han",
    "fonte": [
      "https://en.wikipedia.org/wiki/Han_Chinese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Han_Chinese",
        "situacao": "ok",
        "texto": "The Han Chinese, alternatively Han people or Chinese people, are an East Asian ethnic group native to Greater China. With a global population of over 1.4 billion, the Han Chinese are the world's largest ethnic group, making up about 17% of the world population. The Han Chinese represent 91.11% of the population in China and 97% of the population in Taiwan.\n[…]\nBecause of increasing Russian territorial encroachment and annexation of neighboring territory, the Qing later reversed its policy and allowed the consolidation of a demographic Han majority in Northeast China. The Taiping Rebellion erupted in 1850 from the anti-Manchu sentiment of the Han Chinese, which killed at least twenty million people and made it one of the bloodiest conflicts in history.\n[…]\nRestoring Chinese rule to the Han majority was one of the motivations for supporters of the 1911 Revolution to overthrow the Manchu-led Qing dynasty in 1912, which led to the establishment of the Han-dominated Republic of China. After the establishment of the republic, Sun went to offer sacrifices in Hongwu Emperor's Xiao Mausoleum:\n[…]\nChairman Mao Zedong and his People's Republic of China founded in 1949 was critical of Han chauvinism. In the latter half of the 20th century, official policy of communist China marked Han chauvinism as anti-Marxist. Today, the tension between the dominant Han Chinese majority and ethnic minorities remains contentious, as the deterioration in ethnic relations has compounded by China's contemporary ethnic policies in favor of ethnic minorities since its founding.\n[…]\nJoniak-Luthi, Agnieszka (2015). The Han: China's Diverse Majority. University of Washington Press. ISBN 978-0-295-80597-9. JSTOR j.ctvbtzmcr. OCLC 1298712256. Project MUSE book 40511.\n[…]\nMedia related to Han Chinese people at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Han_%28etnia%29",
        "situacao": "ok",
        "texto": "Han (em chinês simplificado: 汉; chinês: 漢; pinyin: hàn) é o maior grupo étnico da China (e de todo o mundo), representando quase 92% da população chinesa, ou seja, mais de 1,24 bilhão de pessoas (cerca de 18% da população mundial, equivalente à população da Índia).\n[…]\nO termo \"han\" foi usado pela primeira vez no século XIX para distinguir a maioria dos chineses da minoria manchu que governava a China. O nome vem da dinastia Han, que governou as partes da China de onde os chineses han têm origem. Mesmo hoje, são referidos como \"pessoas han\" (chinês: 汉人; pinyin: Hàn rén).\n[…]\nSua etnogênese envolve migrações do norte para o sul da China realizadas por um longo período. Sua origem está nas comunidades Huaxia, localizadas no norte da China.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Alfabeto latino",
      "descricao": "Sistema de escrita derivado do usado pelos antigos romanos, base da escrita do português e de centenas de outras línguas."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Usado no português, no inglês, no turco e no vietnamita, qual é o sistema de escrita mais usado do mundo?",
    "resposta": "Alfabeto latino",
    "fonte": [
      "https://en.wikipedia.org/wiki/Latin_alphabet",
      "https://pt.wikipedia.org/wiki/Alfabeto_latino"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Latin_alphabet",
        "situacao": "ok",
        "texto": "The Latin alphabet is the set of letters used by the ancient Romans to write Classical Latin, later augmented with lower-case letters to write Medieval Latin. Its expansion into the core 26-letter modern inventory (standardised today as the ISO basic Latin alphabet, which is utilized by Modern Latin), was motivated by vernacular languages.\n[…]\nThe phrase Latin alphabet may refer to either the alphabet used to write Latin (as described in this article) or to other alphabets based on the Latin script, such as the English alphabet, which uses the basic set of letters of the extended Latin alphabet. These Latin-script alphabets may discard letters, like the Italian alphabet, or add new letters, like the Vietnamese or Hungarian alphabets."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_latino",
        "situacao": "ok",
        "texto": "O alfabeto latino, também conhecido como alfabeto romano, é o conjunto de letras originalmente usado pelos antigos romanos para escrever a língua latina. Em grande parte inalterado, exceto por algumas letras divididas — ou seja, ⟨J⟩ de ⟨I⟩ e ⟨U⟩ de ⟨V⟩ — adições como ⟨W⟩ e extensões como letras com diacríticos, ele forma a escrita latina que é usada para escrever a maioria das línguas da Europa, Á\n[…]\nO termo alfabeto latino pode se referir ao alfabeto usado para escrever latim (conforme descrito neste artigo) ou a outros alfabetos baseados na escrita latina, que é o conjunto básico de letras comum aos vários alfabetos descendentes do alfabeto latino clássico, como o alfabeto inglês. Esses alfabetos latinos podem descartar letras, como o alfabeto rotokas, ou adicionar novas letras, como os alfabetos dinamarquês e norueguês.\n[…]\nMais recentemente, os linguistas também tendem a preferir o alfabeto latino ou o Alfabeto Fonético Internacional (ele próprio amplamente baseado no alfabeto latino) ao transcrever ou criar padrões escritos para línguas não-europeias, como o alfabeto africano de referência.\n[…]\nAcredita-se geralmente que o alfabeto latino usado pelos romanos foi derivado do alfabeto itálico antigo usado pelos etruscos. Esse alfabeto foi derivado do alfabeto eubeu usado pelos cumas, que por sua vez foi derivado do alfabeto fenício.\n[…]\nA escrita cursiva romana antiga, também chamada de cursiva maiúscula e cursiva maiúscula, era a forma cotidiana de caligrafia usada para escrever cartas, por comerciantes que escreviam contas comerciais, por crianças em idade escolar que aprendiam o alfabeto latino e até mesmo por imperadores que davam ordens. Um estilo de escrita mais formal era baseado nas letras maiúsculas quadradas romanas, mas a letra cursiva era usada para uma escrita mais rápida e informal.\n[…]\nAlfabeto Eubeu\n[…]\nAlfabeto latino básico ISO\n[…]\nAlfabeto fenício\n[…]\nAlfabeto latino"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "República Democrática do Congo",
      "descricao": "País da África Central, ex-colônia belga, com capital em Kinshasa."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual é o país mais populoso do mundo que tem o francês como língua oficial?",
    "resposta": "República Democrática do Congo",
    "distratores": [
      "França",
      "Canadá",
      "Camarões"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
      "https://en.wikipedia.org/wiki/French_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
        "situacao": "ok",
        "texto": "The Democratic Republic of the Congo (DRC), also known as the DR Congo, Congo-Kinshasa, or simply the Congo, and formerly named Zaire, is a country in Central Africa. By land area, it is the second-largest country in Africa and the eleventh-largest in the world. With a population of about 124 million people, the Democratic Republic of the Congo is the fourth-most populous country in Africa and the\n[…]\nThe Democratic Republic of the Congo has been known in the past as, in chronological order, the Congo Free State, Belgian Congo, the Republic of the Congo-Léopoldville, the Democratic Republic of the Congo and the Republic of Zaire, before returning to its current name, the Democratic Republic of the Congo.\n[…]\nA coalition of Rwandan and Ugandan armies invaded Zaire to overthrow the government of Mobutu, launching the First Congo War. The coalition allied with some opposition figures, led by Laurent-Désiré Kabila, becoming the Alliance of Democratic Forces for the Liberation of the Congo. In 1997 Mobutu fled the country and Kabila marched into Kinshasa, naming himself president and reverting the name of the country to the Democratic Republic of the Congo.\n[…]\nFrench is the official language of the Democratic Republic of the Congo. It is culturally accepted as the lingua franca, facilitating communication among the many different ethnic groups of the Congo. In 2018, 49 million Congolese people (51% of the population) could read and write French. A 2021 survey found that 74% of the population could speak French, making it the most widely spoken language in the country.\n[…]\nIn of 2024, the DRC spent 3.1% of its GDP on healthcare, and 75% of Congolese rely on out-of-pocket payments for medical treatment. Hospitals in the Democratic Republic of the Congo include the General Hospital of Kinshasa.\n[…]\nThe Democratic Republic of Congo from Global Issues Archived 15 November 2017 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/French_language",
        "situacao": "ok",
        "texto": "French (français [fʁɑ̃sɛ]  or langue française [lɑ̃ɡ fʁɑ̃sɛːz] ) is a Romance language of the Indo-European family. Like all other Romance languages, French and its closest relatives—the langues d'oïl, historically spoken in northern France and southern Belgium—descended from the Vulgar Latin of the Roman Empire. It was influenced by native Celtic languages of Northern Roman Gaul and by the German\n[…]\nIn sociopolitical terms, French remains deeply entangled in debates over language, identity, and historical legacy. In the Republic of the Congo, the Democratic Republic of the Congo, Côte d'Ivoire, and Cameroon, (among others) French remains the undisputed language of government, formal education, and major media.\n[…]\nPrimary education remains the main point of growth for French, particularly in countries such as Niger, Benin, Burkina Faso, Côte d'Ivoire, Mali, and the Democratic Republic of the Congo, where school enrollment rates have risen quickly since 2010. In Côte d'Ivoire the number of Francophones is growing rapidly, at a pace higher than demographic growth.\n[…]\nFrench language use increased from 7.4 million in 2010 to 17.1 million in 2025 (+131%) while the country's population grew from 22 to 33 million (52%) during the same period. In the Democratic Republic of the Congo the number of French speakers grew from rom 31 million in 2010 to 68 million in 2025.\n[…]\nBelgian, Swiss, and Aostan French as well as that used in the Democratic Republic of the Congo, Rwanda and Burundi, use different names for 70 and 90, namely septante and nonante. In Switzerland, depending on the local dialect, 80 can be quatre-vingts (Geneva, Neuchâtel, Jura) or huitante (Vaud, Valais, Fribourg). The Aosta Valley similarly uses huitante for 80. Conversely, Belgium and in its former African colonies use quatre-vingts for 80."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rep%C3%BAblica_Democr%C3%A1tica_do_Congo",
        "situacao": "ok",
        "texto": "República Democrática do Congo (RDC, denominada, entre 1971 e 1997, República do Zaire), também designada como RD Congo, Congo Democrático, Congo, Zaire ou, por vezes, Congo-Quinxassa ou Congo-Kinshasa para diferenciá-la da vizinha República do Congo (também chamada Congo-Brazzavile ou Congo-Brazaville) é um país da África Central.\n[…]\nCom estimativas populacional de cerca de 109 milhões de habitantes em 2024, a República Democrática do Congo é o quarto país mais populoso do continente africano, atrás apenas da Nigéria, da Etiópia e do Egito, e o décimo sexto do mundo. É também a mais populosa nação francófona do globo (que possuí a língua francesa como língua oficial), à frente da França.\n[…]\nNo entanto, a República Democrática do Congo, de clima tipicamente equatorial e tropical, é considerado um dos países mais ricos do mundo em recursos naturais, sendo por vezes apontado como o segundo mais biodiversificado do mundo, atrás apenas do Brasil.\n[…]\nMais de 250 grupos étnicos povoam a República Democrática do Congo, dos quais a maioria são povos bantos. Juntos, os povos mongos, lubas, congos, mangbetus e azandes constituem cerca de 45% da população. Os povos congos são o maior grupo étnico do país. Cerca de 600 000 pigmeus vivem na República Democrática do Congo.\n[…]\nApesar de se chamar \"República Democrática do Congo\", o país tem um dos menores índices de democracia do mundo, estando em 155.° lugar em uma lista de 167 países.\n[…]\nBaixo Congo\n[…]\nA cultura da República Democrática do Congo reflete a diversidade das suas centenas de grupos étnicos, contados como 250, e suas diferentes formas de vida em todo o país, da foz do rio Congo na costa, através do rio, acima selva e savana, no seu centro, para as montanhas mais densamente povoadas no extremo leste.\n[…]\nDireitos humanos na República Democrática do Congo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Línguas eslavas",
      "descricao": "Ramo das línguas indo-europeias que inclui russo, polonês, tcheco, ucraniano, sérvio, croata e búlgaro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Croata, eslovaco e ucraniano são línguas eslavas. Qual destas também pertence a esse grupo?",
    "resposta": "Polonês",
    "distratores": [
      "Húngaro",
      "Lituano",
      "Romeno"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Slavic_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Slavic_languages",
        "situacao": "ok",
        "texto": "The Slavic languages, also known as the Slavonic languages, are Indo-European languages spoken primarily by the Slavic peoples and their descendants. They are thought to descend from a proto-language called Proto-Slavic, spoken during the Early Middle Ages, which in turn is thought to have descended from the earlier Proto-Balto-Slavic language, linking the Slavic languages to the Baltic languages \n[…]\nIn the earliest stage of Proto-Slavic, no dialectal differences could be reconstructed via the comparative method. It has been suggested that the rapid expansion the early history of Slavic is at a rate much greater than natural population growth can account for, which leads some to believe that Slavic was used as a lingua franca in the Avars region. This theory also coincides with the apparent homogeneity of the Proto-Slavic language."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_eslavas",
        "situacao": "ok",
        "texto": "Línguas eslavas (ou eslávicas) são um grupo de línguas indo-europeias com cerca de 430 milhões de falantes, principalmente no Leste Europeu.\n[…]\nAs línguas eslavas são convencionalmente dividas em três subgrupos: oriental, ocidental e meridional, que juntos constituem mais de 20 línguas. 10 desses idiomas possuem status oficial de língua nacional nos países onde são predominantemente falados: russo, ucraniano e bielorrusso (do grupo oriental), polonês, tcheco e eslovaco (do grupo ocidental) e servo-croata, esloveno, búlgaro e macedônio (do grupo meridional).\n[…]\nCheco, eslovaco\n[…]\nTanto os linguistas quanto os arqueólogos concordam em afirmar que o período entre os séculos V e X d.C. é o da expansão dos eslavos e também o da existência de um protoeslavo comum para todos, produzindo-se como conseqüência dessa expansão geográfica o colapso do protoeslavo e a diversificação nas línguas eslavas atuais. A expansão setentrional e oriental (500-1000 d.C.) dará origem aos russos, bielorrussos e ucranianos.\n[…]\nA expansão meridional, cruzando o Danúbio até o Império Bizantino, é a base para búlgaros, macedônios, sérvios, croatas e eslovenos. No oeste, emergem os poloneses, tchecos e eslovacos.\n[…]\nDos sármatas (ou citas) os eslavos derivam para o protoeslavo palavras para “deus”, “santo” e “paraíso”; inclusive os nomes dos grandes rios da estepe europeia (Don, Dnieper e Dniester), são de origem iraniana.\n[…]\nAs línguas eslavas estão estreitamente relacionadas com o grupo báltico (lituano, letão e o extinto antigo prussiano), mas também compartilham certas inovações linguísticas com outros grupos de línguas indo-europeias, como o iraniano e o armênio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Línguas oficiais das Nações Unidas",
      "descricao": "Os seis idiomas usados oficialmente nos documentos e reuniões da ONU."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Inglês, francês, espanhol, russo e chinês são línguas oficiais da ONU. Qual é a sexta?",
    "resposta": "Árabe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Official_languages_of_the_United_Nations"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Official_languages_of_the_United_Nations",
        "situacao": "ok",
        "texto": "There are six official languages used in United Nations (UN) meetings and in which the UN writes and publishes all its official documents. In 1946, five languages were chosen as official languages of the UN: English, French, Russian, Spanish, and Chinese. In 1971, the United Nations' use of Traditional Chinese characters was replaced with Simplified Chinese characters. In 1973, Arabic was voted to\n[…]\nChinese (Standard Mandarin – 中文, zhōngwén / 普通话, pǔtōnghuà) in Simplified Chinese characters;\n[…]\nOn 17 January 1974, the Security Council added Chinese as a working language.\n[…]\nAlthough very similar verbally, they do have different written scripts; Hindi is written in the Devanagari script and Urdu is written in the Nastaʿlīq script. Hindi has more than 550 million speakers in India alone, of whom 422 million are native, 98.2 million are second language speakers, and 31.2 million are third language speakers. Hindi is the lingua franca of the northern part of India, along with Pakistan (as Urdu), with its importance as a global language increasing day by day.\n[…]\nIndonesian, known as Bahasa Indonesia is the official and national language of Indonesia. It is a standardized variety of the Sumatran dialect of Malay and is considered mutually intelligible with Bahasa Melayu, an Austronesian language that has been used as a lingua franca in the multilingual Indonesian archipelago for centuries.\n[…]\nSwahili is a lingua franca throughout eastern Africa and is especially prevalent in the African Great Lakes region. Swahili, known as Kiswahili by its speakers, is an official language of Tanzania, Kenya, Rwanda, the Democratic Republic of the Congo, is an official language of the African Union and is officially recognized as a lingua franca of the East African Community.\n[…]\nUN Chinese Language Day: first celebrated 12 November; now set on 20 April (\"to pay tribute to Cang Jie\")"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_oficiais_da_Organiza%C3%A7%C3%A3o_das_Na%C3%A7%C3%B5es_Unidas",
        "situacao": "ok",
        "texto": "As línguas oficiais das Nações Unidas são seis línguas utilizadas em reuniões da ONU e no qual a ONU escreve todos seus documentos oficiais.\n[…]\nFrancês (Francês Metropolitano em alfabeto latino – français métropolitain / langues d'oïl) – língua veicular da diplomacia e língua oficial da República Francesa e outras 27 nações soberanas.\n[…]\nÁrabe (Árabe Padrão Moderno em alfabeto árabe) – língua oficial ou de fato língua nacional de vários países no Médio Oriente e África do Norte e usado no Mundo Árabe.\n[…]\nAs seis línguas oficiais também são utilizadas para a disseminação de documentos oficiais. Geralmente, os textos em cada um dos seis idiomas são igualmente confidenciais. Majoritariamente os conselhos da ONU usa todos os seis idiomas como idiomas oficiais e de trabalho; no entanto, a partir de 2023, o Secretariado das Nações Unidas usa apenas dois idiomas de trabalho : Inglês e Francês.\n[…]\nAs seis línguas oficiais faladas na ONU são a primeira ou a segunda língua de 2,8 bilhões de pessoas no planeta, menos da metade da população mundial. As seis línguas são línguas oficiais em quase dois terços dos estados membros das Nações Unidas (mais de 120 estados).\n[…]\nA partir de Junho de 2018, o ramo de mídia das Nações Unidas, UN News (https://news.un.org), inclui traduções de website para Hindi, Português e Suaíli na adição a 6 línguas. Outros documentos da ONU e websites são também traduzido para Bengali (refere-se como Bangla), Criolo Francês, Indonésio/Malaio, Turco, e Urdu, mas não em uma base consistente ou oficial.\n[…]\nDia da Língua Chinesa nas Nações Unidas\n[…]\nDia da Língua Francesa nas Nações Unidas\n[…]\nDia da Língua Inglesa nas Nações Unidas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Alfabeto grego",
      "descricao": "Sistema de escrita da língua grega, usado desde o século oito antes de Cristo."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No alfabeto grego, que começa com alfa, qual é a última letra?",
    "resposta": "Ômega",
    "fonte": [
      "https://en.wikipedia.org/wiki/Greek_alphabet",
      "https://pt.wikipedia.org/wiki/Alfabeto_grego"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Greek_alphabet",
        "situacao": "ok",
        "texto": "The Greek alphabet has been used to write the Greek language since the late 9th or early 8th century BC. It was derived from the earlier Phoenician alphabet, and is the earliest known alphabetic script to systematically write vowels as well as consonants.\n[…]\nIn Archaic and early Classical times, the Greek alphabet existed in many local variants, but, by the end of the 4th century BC, the Ionic-based Euclidean alphabet, with 24 letters, ordered from alpha to omega, had become standard throughout the Greek-speaking world and is the version that is still used for Greek writing today.\n[…]\nIn addition, the Phoenician letter for the emphatic glottal /ħ/ (het) was borrowed in two different functions by different dialects of Greek: as a letter for /h/ (Η, heta) by those dialects that had such a sound, and as an additional vowel letter for the long /ɛː/ (Η, eta) by those dialects that lacked the consonant. Eventually, a seventh vowel letter for the long /ɔː/ (Ω, omega) was introduced.\n[…]\nThe letter omega has at least three stylistic variants of its capital form. The standard is the \"open omega\" (Ω), resembling an open partial circle with the opening downward and the ends curled outward.\n[…]\nThe open omega is always used in symbolic settings and is encoded in Letterlike Symbols (U+2126) as a separate code point for backward compatibility."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_grego",
        "situacao": "ok",
        "texto": "O alfabeto grego (em grego: ελληνικό αλφάβητο) é empregado ainda hoje para escrever em língua grega e também em notações científicas de áreas como: Filosofia, Matemática, Física, Astronomia, dentre outras áreas do conhecimento. Destaque-se ainda ser ele a base de outros alfabetos, como o latino, o gótico, o cirílico, o armênio, o copta e o glagolítico. Ele é também conhecido como alfabeto grego cl\n[…]\nO fator inovador introduzido com o alfabeto grego são as vogais. As primeiras vogais foram Alfa, Épsilon, Iota, Ómicron e Upsilon.\n[…]\nNo leste da Grécia, onde faltava totalmente ambição, a letra Η (eta), da consoante glotal semita /ħ/ (het) também foi utilizada para a vogal longa /ɛː/ e, eventualmente, a letra Ω (ômega) foi introduzida por um longo /ɔː/. A razão para a introdução de letras que facilitavam os abertos longos e e o encontra-se na morfologia verbal da língua. O grego clássico tinha uma distinção entre indicativo e subjuntivo feita por alternância /e/ com /ɛː/ e /o/ com /ɔː/, que foi explicitada por esta inovação.\n[…]\nA Astronomia também utiliza o alfabeto grego para nomear cientificamente as estrelas de uma constelação. Por exemplo: Alfa do Escorpião, é a estrela de maior magnitude daquela constelação; Beta do Cruzeiro, é a estrela de segunda maior magnitude daquela constelação.\n[…]\nNa Bíblia, no livro Apocalipse, Deus declara ser “Alfa e Ômega, o princípio e o fim”. As letras gregas Chi (χ) e Rô (ρ) são usadas em símbolos para Jesus Cristo, pois são as duas primeiras letras usadas para soletrar Cristo em grego.\n[…]\nAs letras gregas são usadas em expressões de gíria para se referir a diferentes tipos de pessoas. Por exemplo, o termo \"alfa\" se refere a uma pessoa dominante ou corajosa, enquanto \"beta\" se refere a uma pessoa passiva ou sensível. Outros termos como \"sigma\" e \"ômega\" também são usados para se referir a diferentes tipos de pessoas.\n[…]\nHistória do alfabeto grego"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Bósnia e Herzegovina",
      "descricao": "País dos Bálcãs, com capital em Sarajevo, surgido da antiga Iugoslávia."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Bósnia e Herzegovina reconhece três povos constituintes: os bósnios, os croatas e qual outro?",
    "resposta": "Sérvios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
        "situacao": "ok",
        "texto": "Bosnia and Herzegovina, often referred to as Bosnia-Herzegovina or simply Bosnia, is a country in Southeastern Europe. Situated on the Balkan Peninsula, it borders Serbia to the east, Montenegro to the southeast, and Croatia to the north and southwest, with a 20-kilometre-long (12-mile) coast on the Adriatic Sea in the south. Bosnia has a moderate continental climate with hot summers and cold, sno\n[…]\nThe Constitutional Court of Bosnia and Herzegovina is the supreme, final arbiter of legal matters. It is composed of nine members: four members are selected by the Federal House of Representatives, two by the National Assembly of Republika Srpska and three by the President of the European Court of Human Rights after consultation with the Presidency, who cannot be Bosnian citizens.\n[…]\nBosnia and Herzegovina is home to three ethnic \"constituent peoples\", namely Bosniaks, Serbs and Croats, plus a number of smaller groups including Jews and Roma. According to data from the 2013 census published by the Agency for Statistics of Bosnia and Herzegovina, Bosniaks constitute 50.1% of the population, Serbs 30.8%, Croats 15.5% and others 2.7%, with the remaining respondents not declaring their ethnicity or not answering.\n[…]\nBosnia and Herzegovina is a religiously diverse country. According to the 2013 census, Muslims constituted 50.7% of the population, while Orthodox Christians made up 30.7%, Catholic Christians 15.2%, 1.2% other and 1.1% atheist or agnostic, with the remainder not declaring or not answering the question. A 2012 survey found 54% of Bosnia's Muslims were non-denominational, while 38% followed Sunnism.\n[…]\nSome television, magazines, and newspapers in Bosnia and Herzegovina are state-owned, and some are for-profit corporations funded by advertising, subscription, and other sales-related revenues. The Constitution of Bosnia and Herzegovina guarantees freedom of speech."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%B3snia_e_Herzegovina",
        "situacao": "ok",
        "texto": "A Bósnia e Herzegovina ou Bósnia-Herzegovina (ou, de forma abreviada, Bósnia; em bósnio, croata e sérvio: Bosna i Hercegovina, pronunciado AFI: [bôsna i xěrt͡seɡoʋina]; em alfabeto cirílico: Босна и Херцеговина) é um país do sudeste da Europa. Situado na Península Balcânica, faz fronteira com a Sérvia a leste, Montenegro a sudeste e Croácia a norte e sudoeste, com uma costa de 20 quilômetros (12 m\n[…]\nEstima-se que 209 mil sérvios, ou 16,9% da população da Bósnia, foram mortos no território da Bósnia e Herzegovina durante a guerra.\n[…]\nA Bósnia e Herzegovina é o lar de três \"povos constituintes\" étnicos, nomeadamente bósnios, sérvios e croatas, além de vários grupos menores, incluindo judeus e ciganos. De acordo com dados do censo de 2013 publicados pela Agência de Estatística da Bósnia e Herzegovina, os bósnios constituem 50,1% da população, os sérvios 30,8%, os croatas 15,5% e outros 2,7%, com os restantes inquiridos a não declararem a sua etnia ou a não responderem.\n[…]\nA Constituição da Bósnia não especifica nenhuma língua oficial. No entanto, os acadêmicos Hilary Footitt e Michael Kelly observam que o Acordo de Dayton afirma que ele foi \"redigido em bósnio, croata, inglês e sérvio\", e descrevem isso como o \"reconhecimento de fato de três idiomas oficiais\" em nível estadual. A igualdade de status entre o bósnio, o sérvio e o croata foi verificada pelo Tribunal Constitucional em 2000.\n[…]\nAcredita-se que tenha sido trazida da tribo Persia-Kalesi, que se estabeleceu na área dos atuais vales Sprečanski e, portanto, provavelmente o nome Kalesija. Nesta parte da Bósnia, é a mais comum. Este tipo de música era apreciado por todos os três povos da Bósnia, bósnios, sérvios e croatas, e contribuiu muito para reconciliar as pessoas, socializando, entretenimento e outras organizações através de festivais. Em Kalesija, ela é mantida todos os anos com a música do Festival Original da Bósnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Ruanda",
      "descricao": "País sem litoral da África Central, conhecido como terra das mil colinas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Ruanda tem três grupos étnicos tradicionais: os twa, os hutus e qual outro, principal vítima do genocídio de 1994?",
    "resposta": "Tutsis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tutsi",
      "https://en.wikipedia.org/wiki/Rwandan_genocide"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tutsi",
        "situacao": "ok",
        "texto": "The Tutsi ( TUUT-see), also called Watusi, Watutsi or Abatutsi (Kinyarwanda pronunciation: [ɑ.βɑ.tuː.t͡si]), are an ethnic group established primarily in Rwanda and Burundi. They are a Bantu-speaking people and the second-largest of three main ethnic groups in Rwanda and Burundi, the other two being the Hutu and Twa.\n[…]\nBelgian policies wavered considerably during the period leading up to the independence of Rwanda and Burundi.\n[…]\nThe agreement broke down after the assassination of the Rwandan and Burundian presidents, triggering a resumption of hostilities and the start of the Rwandan Genocide of 1994, in which the Hutu killed an estimated 500,000–600,000 people, mostly Tutsi. Victorious in the aftermath of the genocide, the Tutsi-led RPF came to power in July 1994.\n[…]\nEnglish, French and Swahili serve as additional official languages for different historic reasons, and are widely spoken by both Burundians and Rwandans as a second language.\n[…]\nScholars have long recognised that the Tutsi presence in the modern Democratic Republic of the Congo (DRC) is best understood by distinguishing between two principal groups, whose histories have been significantly shaped—and often distorted—by colonial policies and later political struggles.\n[…]\nA second Tutsi presence is found among the broader Banyarwanda community in parts of North Kivu. This community, which includes both Tutsi and Hutu, is largely the result of multiple migratory waves from neighbouring Rwanda, occurring over the pre-colonial, colonial, and post-genocide periods. In particular, the mass exodus during and after the Rwandan Genocide of 1994 is well documented and has significantly reshaped the ethnic landscape in eastern Congo.\n[…]\nThe International Criminal Tribunal for Rwanda (the status and judgments of all cases before the ICTR are available here)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rwandan_genocide",
        "situacao": "ok",
        "texto": "The Rwandan genocide, also known as the genocide against Tutsi, occurred from 7 April to 19 July 1994 during the Rwandan Civil War. Over a span of approximately 100 days, members of the Tutsi ethnic group, as well as some moderate Hutu and Twa, were systematically killed by Hutu militias. While the Rwandan Constitution states that over 1 million people were killed, most scholarly estimates suggest\n[…]\nAlong with the Hutu moderates, Hutu women who were married to or who hid Tutsis were also targeted. In his 1996 report on Rwanda, the UN Special Rapporteur Rene Degni-Segui stated, \"Rape was the rule and its absence was the exception.\" He also noted, \"Rape was systematic and was used as a weapon.\" With this thought and using methods of force and threat, the genocidaires forced others to stand by during rapes.\n[…]\nIntelligence reports indicate that United States president Bill Clinton and his cabinet were aware before the height of the massacre that a deliberate and systematic genocide to eliminate all Tutsis was planned. Fear of a repeat of the events in Somalia shaped US policy at the time, with many commentators identifying the graphic consequences of the 1993 Battle of Mogadishu as the key reason behind the US's failure to intervene in later conflicts such as the Rwandan genocide.\n[…]\nThe Catholic Church affirms that genocide took place but states that those who took part in it did so without the permission of the Church. Though religious factors were not prominent, in its 1999 report Human Rights Watch faulted a number of religious authorities in Rwanda, including Catholics, Anglicans and other Protestant denominations, for failing to condemn the genocide, though that accusation was belied over time. Many other clergymen gave their lives to prevent Tutsis from being killed.\n[…]\nOutline of genocide studies\n[…]\nUnited Nations International Criminal Tribunal for Rwanda"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/T%C3%BAtsis",
        "situacao": "ok",
        "texto": "Os tútsis ou tutsis (em quiniaruanda e rundi: batutsi) são um grupo étnico existindo principalmente em Ruanda e no Burundi, mas também nas regiões vizinhas do Congo-Quinxassa, do Uganda e da Tanzânia. São um povo banto e, tanto do ponto de vista linguístico, como cultural, não se distinguem dos hútus, o grupo étnico majoritário em Ruanda e no Burundi.\n[…]\nOs tutsis são a segunda maior divisão populacional entre os três maiores grupos em Ruanda e Burundi; os outros dois são os hútus (maior porcentagem) e os tuás (menor porcentagem). Um pequeno número de pessoas Hema, Kiga e Furiiru também vivem perto dos tútsis em Ruanda.\n[…]\nOs tútsis viveram nas áreas onde estão por 400-500 anos, levando a um considerável casamento com os hútus, um povo banto na área. Nota-se que os nomes hútu e banto não são os mesmos. Devido à história de intercalada entre os hútus e os tútsis, os etnógrafos e historiadores chegaram recentemente a concordar que eles não podem ser propriamente chamados de grupos étnicos distintos.\n[…]\nEsses mesmos autores dizem que, antes da colonização, os hútus eram agricultores, os tútsis eram pecuaristas e os tuás coletores. Essa tradição relacionada ao trabalho, acrescentam, foi transmitida de geração em geração pelo fato de as mulheres mudarem seu status étnico no momento do casamento. Assim, uma menina nascida hútu se tornava tútsi ou tuá porque seu marido era tútsi ou tuá e vice-versa.\n[…]\nNo entanto, pouca diferença pode ser verificada entre as culturas atuais dos tútsis e hútus; ambos os grupos falam a mesma língua bantu. A taxa de casamentos entre os dois grupos era tradicionalmente muito alta e as relações eram amigáveis até o século XX. Muitos estudiosos concluíram que a determinação de tutsis era e é principalmente uma expressão de classe ou casta, e não de etnia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Línguas indígenas do Brasil",
      "descricao": "Conjunto dos idiomas falados pelos povos indígenas brasileiros, agrupados em troncos e famílias linguísticas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "As línguas indígenas brasileiras costumam ser agrupadas em dois grandes troncos. Um é o tupi. Qual é o outro?",
    "resposta": "Macro-jê",
    "fonte": [
      "https://en.wikipedia.org/wiki/Macro-Jê_languages",
      "https://en.wikipedia.org/wiki/Tupian_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Macro-Jê_languages",
        "situacao": "ok",
        "texto": "Macro-Jê (also spelled Macro-Gê) is a medium-sized language family in South America, mostly in Brazil but also in the Chiquitanía region in Santa Cruz, Bolivia. It is centered on the Jê language family, with most other branches currently being single languages due to extinctions.\n[…]\nJolkesky (2016) proposes the following internal classification of Macro-Jê:\n[…]\nProto-Macro-Jê is notable for having relatively few consonants and a large vocalic inventory. There are also complex onsets with rhotics, as well as contrastive nasalization for vowels.\n[…]\nPhonological inventory of Proto-Macro-Jê as reconstructed by Nikulin (2020):\n[…]\nFor a list of Proto-Macro-Jê reconstructions by Nikulin (2020), see the corresponding Portuguese article.\n[…]\nMany Macro-Jê languages have been in contact with various languages of the Tupí-Guaraní family, which resulted in lexical borrowings.\n[…]\nSome Macro-Jê languages from different branches have secondarily contacted with each other, also resulting in lexical loans. Ribeiro (2012), for instance, identifies several Karajá loans in Mẽbêngôkre, especially in the dialect spoken by the Xikrin group. These loans are thought to have entered Mẽbêngôkre from the variety spoken by the Xambioá group of the Karajá people.\n[…]\nLoanwords from Brazilian Portuguese are found in many, if not all, Macro-Jê languages spoken in Brazil. Examples from Maxakalí include kapex 'coffee', komenok 'blanket', kapitõg 'captain', pẽyõg 'beans', mug 'bank', tenemiyam 'TV' (borrowed from Portuguese café, cobertor, capitão, feijão, banco, televisão); in Karajá, Ribeiro (2012) documents the Portuguese loans nieru 'money' and maritò 'suit, jacket' (from dinheiro, paletó), among others.\n[…]\nBibliografia Macro-Jê Online\n[…]\nThe Jê-cyclopedia: Macro-Jê languages and cultures, from past to present"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tupian_languages",
        "situacao": "ok",
        "texto": "The Tupi or Tupian language family comprises some 70 languages spoken in South America, of which the best known are Tupi proper and Guarani.\n[…]\nTupian languages have extensively influenced many language families in South America. Jolkesky (2016) notes that there are lexical similarities with the Arawa, Bora-Muinane, Guato, Irantxe, Jivaro, Karib, Kayuvava, Mura-Matanawi, Taruma, Trumai, Yanomami, Harakmbet, Katukina-Katawixi, Arawak, Bororo, Karaja, Macro-Mataguayo-Guaykuru, Takana, Nadahup, and Puinave-Kak language families due to contact.\n[…]\nRodrigues, Aryon Dall'Igna (2007). \"As consoantes do Proto-Tupí\". In Ana Suelly Arruda Câmara Cabral, Aryon Dall'Igna Rodrigues (eds). Linguas e culturas Tupi, p. 167–203. Campinas: Curt Nimuendaju; Brasília: LALI.\n[…]\nCorrêa Da Ssila, B. C. (2010). Mawé/Awetí/Tupí-Guaraní: Relações Linguísticas e Implicações Históricas. Brasília: Universidade de Brasília. (Doctoral dissertation).\n[…]\nMello, A. A. S. (2000). Estudo histórico da família lingüística Tupí-Guaraní: aspectos fonológicos e lexicais. Florianópolis: Universidade Federal de Santa Catarina. (Doctoral dissertation).\n[…]\nMonserrat, R. F. (2005). Notícia sobre a língua Puruborá. In: A. D. Rodrigues & A. S. A. C. Cabral (eds.), Novos estudos sobre línguas indígenas, 9–22. Brasília: Brasilia: Editor UnB.\n[…]\nRodrigues, A. D. (2007). As consoantes do Proto-Tupí. In: A. S. A. C. Cabral & A. D. Rodrigues (eds.), Línguas e culturas tupí, 167–203. Campinas: Curt Nimuendaju.\n[…]\nSwadesh lists of Tupi–Guarani basic vocabulary words (from Wiktionary's Swadesh-list appendix)\n[…]\n\"A Arte da Língua Brasílica\", grammar of Tupi, by Father Luiz Figueira, in Portuguese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Macroj%C3%AA",
        "situacao": "ok",
        "texto": "Macrojê, também referido pelo etnônimo brasílico Macro-Jê, é um tronco linguístico cuja constituição ainda é consideravelmente hipotética. Em tese, está distribuído pelas regiões não litorâneas e mais centrais do Brasil, incluindo partes de todos os seus estados, exceto Amazonas, Amapá, Roraima e Acre, no Norte - bem como pequenos grupos dispersos em partes do Paraguai e da Bolívia. O macrojê é um\n[…]\nA partir da incursão no território do Brasil pelos portugueses, em 1500, os europeus passaram a ter um grande contato com as tribos tupi-guaranis que estavam dispersas por praticamente toda a costa brasileira. Os tupis-guaranis chamavam os indígenas falantes de outras línguas de tapuia – que, em sua língua, significava inimigo. Este vocábulo foi incorporado pelos europeus, que passaram a considerar que, no país, havia apenas duas grandes nações indígenas: a tupi-guarani e a tapuia.\n[…]\nMacro-Jê\n[…]\nO nome Macro-Jê foi proposto pela primeira vez por J. A. Mason para se referir a um amplo grupo de línguas do Brasil relacionadas às línguas Jê. W. Schmidt empregou inicialmente o nome Ges-Tapuya, e C. Loukotka o nome Tapuya-žé, com o mesmo sentido. Os subgrupos nomeados a seguir, de acordo com o estudo comparativo de Andrey Nikulin, formam uma macrofamília, mas detalhes de cada uma das hipóteses de classificação podem diferir de um autor para o outro, ver:\n[…]\nDavis (1966) sob uma boa base comparativa demostrou que o Kaingnáng é de fato um membro da família Jê. Em outro artigo (1968) trouxe evidências de correspondências regulares entre as línguas Jê e o Maxakalí, bem como entre o Jê e o Karajá, mencionando possíveis conexões do Macro-Jê com o Bororo, e do Tupi com o Fulnió (Yatê).\n[…]\nD'Angelis, Wilmar da R., Carla Maria Cunha & Aryon D. Rodrigues (orgs.). 2002. Bibliografia das línguas Macro-Jê. Campinas: IEL/Unicamp. (PDF)\n[…]\n5º Encontro de línguas e culturas macro-jês\n[…]\nMacro-Jê: estado da arte (2020)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Alfabeto latino",
      "descricao": "Sistema de escrita derivado do usado pelos antigos romanos, base da escrita do português e de centenas de outras línguas."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "No alfabeto dos antigos romanos não havia J, U nem W. Que letra fazia o papel do U?",
    "resposta": "V",
    "fonte": [
      "https://en.wikipedia.org/wiki/Latin_alphabet",
      "https://en.wikipedia.org/wiki/U"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Latin_alphabet",
        "situacao": "ok",
        "texto": "The Latin alphabet is the set of letters used by the ancient Romans to write Classical Latin, later augmented with lower-case letters to write Medieval Latin. Its expansion into the core 26-letter modern inventory (standardised today as the ISO basic Latin alphabet, which is utilized by Modern Latin), was motivated by vernacular languages."
      },
      {
        "url": "https://en.wikipedia.org/wiki/U",
        "situacao": "ok",
        "texto": "U (minuscule: u) is the twenty-first letter and the fifth vowel letter of the Latin alphabet, used in the modern English alphabet and the alphabets of other western European languages and others worldwide. Its name in English is u (pronounced  ), plural ues."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_latino",
        "situacao": "ok",
        "texto": "O alfabeto latino, também conhecido como alfabeto romano, é o conjunto de letras originalmente usado pelos antigos romanos para escrever a língua latina. Em grande parte inalterado, exceto por algumas letras divididas — ou seja, ⟨J⟩ de ⟨I⟩ e ⟨U⟩ de ⟨V⟩ — adições como ⟨W⟩ e extensões como letras com diacríticos, ele forma a escrita latina que é usada para escrever a maioria das línguas da Europa, Á\n[…]\nSeu inventário moderno básico é padronizado como o alfabeto latino básico ISO.\n[…]\nAcredita-se geralmente que o alfabeto latino usado pelos romanos foi derivado do alfabeto itálico antigo usado pelos etruscos. Esse alfabeto foi derivado do alfabeto eubeu usado pelos cumas, que por sua vez foi derivado do alfabeto fenício.\n[…]\nA escrita cursiva romana antiga, também chamada de cursiva maiúscula e cursiva maiúscula, era a forma cotidiana de caligrafia usada para escrever cartas, por comerciantes que escreviam contas comerciais, por crianças em idade escolar que aprendiam o alfabeto latino e até mesmo por imperadores que davam ordens. Um estilo de escrita mais formal era baseado nas letras maiúsculas quadradas romanas, mas a letra cursiva era usada para uma escrita mais rápida e informal.\n[…]\nFoi somente na Idade Média que a letra ⟨W⟩ (originalmente uma ligadura de dois ⟨V⟩) foi adicionada ao alfabeto latino, para representar sons das línguas germânicas que não existiam no latim medieval, e somente após o Renascimento a convenção de tratar ⟨I⟩ e ⟨U⟩ como vogais, e ⟨J⟩ e ⟨V⟩ como consoantes, foi estabelecida. Antes disso, os primeiros eram meramente alógrafos dos últimos.\n[…]\nOs idiomas que usam o alfabeto latino geralmente usam letras maiúsculas para iniciar parágrafos, frases e nomes próprios.As regras de uso de maiúsculas mudaram ao longo do tempo, e diferentes idiomas apresentaram variações em suas regras de uso de maiúsculas.\n[…]\nAlfabeto latino básico ISO\n[…]\nAlfabeto fenício\n[…]\nAlfabeto latino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Papiamento",
      "descricao": "Língua crioula falada em Aruba, Curaçao e Bonaire, no Caribe."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O papiamento, falado em Aruba e em Curaçao, tem o vocabulário vindo sobretudo de quais duas línguas ibéricas?",
    "resposta": "Português e espanhol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Papiamento"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Papiamento",
        "situacao": "ok",
        "texto": "Papiamento (English:  ), or Papiamentu (English: ; Dutch: Papiaments [ˌpaːpijaːˈmɛnts]), is a Portuguese-based creole language spoken in the Dutch Caribbean. It is the most widely spoken language on Aruba, Bonaire, and Curaçao (the ABC islands).\n[…]\nThe language, spelled Papiamento in Aruba and Papiamentu in Bonaire and Curaçao, is largely based on Portuguese as spoken in the 15th and 16th centuries, and has been influenced considerably by Dutch and Spanish. Lexical similarities between Portuguese and Spanish make it difficult to pinpoint the exact origin of some words.\n[…]\nderived Portuguese-based creoles and (Early Modern) Spanish. Most of the remaining vocabulary derives from Dutch. The real origin is usually difficult to tell because the two Iberian languages are very similar, and adaptations were made in Papiamento. A list of 200 basic Papiamento words can be found in the standard Swadesh list, with etymological reference to the language of origin.\n[…]\nThere is a remarkable similarity between words in Papiamento, Cape Verdean Creole, and Guinea-Bissau Creole, which all belong to the same language family of the Upper Guinea Creoles. Most of the words can be connected with their Portuguese origin.\n[…]\nBon (Good) – Portuguese: Bom\n[…]\nThe Lord's Prayer in a register of Papiamento used liturgically by the Roman Catholic Church, compared with Spanish, Portuguese, and King James English:\n[…]\nThis section provides a comparison of the vocabularies of Papiamento, Portuguese, and the Portuguese creoles of Guinea-Bissau and Cape Verde. Spanish is shown for the contrast.\n[…]\nJoubert, Sidney; Perl, Matthias (2007). \"The Portuguese Language on Curaçao and Its Role in the Formation of Papiamentu\". Journal of Caribbean Literatures. 5 (1): 43–60. JSTOR 40986317."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Papiamento",
        "situacao": "ok",
        "texto": "O papiamento, ou papiamentu, é uma língua crioula de base portuguesa falada no Caribe Neerlandês. É a língua mais falada em Aruba, Bonaire e Curaçau (as ilhas ABC). Tem estatuto de língua oficial em Aruba, Bonaire e Curaçau. Papiamento também é uma língua reconhecida nos órgãos públicos neerlandeses de Santo Eustáquio e Saba.\n[…]\nA língua, grafada como papiamento em Aruba e Papiamentu em Bonaire e Curaçau, é amplamente baseada no português falado nos séculos XV e XVI, e foi consideravelmente influenciada pelo neerlandês e pelo espanhol. Devido às semelhanças lexicais entre o português e o espanhol, é difícil precisar a origem exata de algumas palavras.\n[…]\nA linguagem judaico-portuguesa iria se misturar ao guene dos escravos africanos, dando origem à primeira forma do papiamento no século XVIII. Com a administração do império colonial neerlandês nas ilhas, a influência neerlandesa legou muitas palavras de seu idioma ao papiamento. No final do século XIX, a influência do espanhol ocorreu com o contato com os países vizinhos, especialmente a Venezuela.\n[…]\nA variação de Curaçao e Bonaire adora o acento grave (`) para denotar diferenças de pronúncia entre duas vogais e o acento agudo (´) para indicar a tonicidade de uma palavra. Quanto à tonicidade, as palavras em papiamentu podem ser oxítonas, paroxítonas, proparoxítonas ou \"sobresdrúhulo\". Essa última classificação ocorre no espanhol e caracteriza a sílaba tônica como a sílaba anterior à antepenúltima sílaba de uma palavra. Também há uso do trema nessa variação.[carece de fontes]?\n[…]\nAssim como na língua espanhola, o fenômeno da apócope acontece no papiamento, principalmente em verbos no infinitivo (marcar — marká) ou em algumas profissões (pescador — piskadó).[carece de fontes]?\n[…]\nDicionário Papiamento-Português-Papiamento\n[…]\nStilistica di Papiamento",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Alfabeto árabe",
      "descricao": "Sistema de escrita da língua árabe, também usado no persa e no urdu, escrito da direita para a esquerda."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na escrita árabe do dia a dia, que tipo de som normalmente fica sem letra própria, apenas subentendido pelo leitor?",
    "resposta": "As vogais curtas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Arabic_alphabet",
      "https://en.wikipedia.org/wiki/Abjad"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arabic_alphabet",
        "situacao": "ok",
        "texto": "The Arabic alphabet, or the Arabic abjad, is the Arabic script as specifically codified for writing the Arabic language. It is a unicameral script written from right-to-left in a cursive style, and includes 28 letters, of which most have contextual forms. The Arabic alphabet is an abjad, meaning that the letters only record consonants; due to its optional use of diacritics to notate vowels, it is \n[…]\nA normal text is composed only of a series of consonants plus vowel-lengthening letters; thus, the word qalb, \"heart\", is written qlb, and the word qalaba \"he turned around\", is also written qlb. To write qalaba without this ambiguity, we could indicate that the l is followed by a short a by writing a fatḥah above it.\n[…]\nٰThe alif khanjariyyah (أَلِف خَنْجَرِيَّة, 'dagger ’alif')  is written as short vertical stroke on top of a letter. It indicates a long /aː/ sound for which alif is normally not written. For example: ⟨هٰذَا⟩ (hādhā) or ⟨رَحْمٰن⟩ (raḥmān)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abjad",
        "situacao": "ok",
        "texto": "An abjad ( ; or abgad, lit. 'alphabet') is a writing system in which only consonants are represented by letter signs, leaving the vowels to be inferred by the reader (unless represented otherwise, such as by diacritics). This contrasts with alphabets that provide graphemes for both consonants and vowels. The term was introduced in 1990 by Peter T. Daniels."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_%C3%A1rabe",
        "situacao": "ok",
        "texto": "O alfabeto árabe (em árabe: أبجدية عربية) é o principal abjad (ou consonantário) usado para representar a língua árabe, além de diversos outros idiomas, como o persa, algumas línguas berberes, o turco tomano, o urdu e o uigur. É o segundo alfabeto mais utilizado no mundo, atrás somente do alfabeto latino, e possui 28 letras. O alfabeto árabe é escrito em um estilo cursivo e não faz a distinção ent\n[…]\nAté 1923, era usado também para escrever o turco, quando foi substituído pelo alfabeto latino. A sua grande difusão deve-se principalmente ao facto de o Corão, o livro sagrado do Islão, estar escrito em alfabeto árabe. Esse alfabeto é escrito da direita para a esquerda, assim como o alfabeto hebraico.\n[…]\nApesar de ser denominado \"alfabeto\", o termo mais correto para designar a escrita árabe é \"abjad\" (nome derivado das cinco primeiras letras que compunham a antiga organização do alfabeto árabe: a - b - j - d), ou seja, cada símbolo representa uma consoante. A representação das vogais é feita através de diacríticos colocados sobre ou sob as letras.\n[…]\nPor exemplo, a palavra para \"peixe\" em árabe é lida samak e escrita no alfabeto árabe somente com as letras que correspondem, no alfabeto latino, a SMK (سمك), o que torna difícil saber suas vogais sem conhecer a palavra, a não ser que estejam presentes na escrita os símbolos indicadores de vogais, denominados ḥarakāt (سَمَك; no caso, cada linha diagonal (◌َ), chamada fatḥa, representa a vogal /a/).\n[…]\nNo alfabeto árabe, há dois tipos de vogais: vogais longas e vogais breves. As vogais longas são as três vogais do alfabeto, identificados na transliteração com um traço sobreposto nas letras. As vogais são: ﺍ ('ālif)  = ā, ﻮ (ūāū) = ū e ﻱ (īā') = ī. As vogais breves são sinais colocados sobre ou sob as letras. Os sinais são: َ (fatHa) = a ُ (damma) = u e ِ (kasra) = i. Os sinais só aparecem no árabe clássico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Escrita mongol tradicional",
      "descricao": "Sistema de escrita do mongol derivado do alfabeto uigur antigo, ainda usado na Mongólia Interior, na China."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A escrita tradicional mongol, ainda usada na Mongólia Interior chinesa, é escrita em que direção?",
    "resposta": "De cima para baixo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mongolian_script"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mongolian_script",
        "situacao": "ok",
        "texto": "The traditional Mongolian script, also known as the Hudum Mongol bichig, was the first writing system created specifically for the Mongolian language, and was the most widespread until the introduction of Cyrillic in 1946. The script is a co-official script in Mongolia since 2025, alongside the Cyrillic script for the language. It is also the official written form being taught in schools for Mongo\n[…]\nWords are written vertically from top to bottom, flowing in lines from left to right. The Old Uyghur script and its descendants, of which traditional Mongolian is one among Oirat Clear, Manchu, and Buryat are the only known vertical scripts written from left to right. This developed because the Uyghurs rotated their Sogdian-derived script, originally written right to left, 90 degrees counterclockwise to emulate Chinese writing, but without changing the relative orientation of the letters.\n[…]\nIn 1917, the politician and linguist Bayantömöriin Khaisan published the rime dictionary Mongolian-Han Bilingual Original Sounds of the Five Regions, a bilingual edition of the earlier Original Sounds of the Five Regions, to aid Mongolian speakers in learning Mandarin Chinese. To that end, he included transliterations of Mandarin using the Mongolian script, and repurposed three Galik letters to represent the Mandarin retroflex consonants.\n[…]\nThese letters remain in use in Inner Mongolia for the purpose of transcribing Chinese.\n[…]\nHowever, the \"phonetic model\" embodied within was badly defined, leading to a profusion of alternative implementations, such as the Chinese \"improved phonetic model\" and the Mongolian \"refined phonetic model\". A competing \"graphetic model\" that concerns itself solely with visual outcomes instead of the phonetic identity of letters has also emerged. This has resulted in widespread inconsistency and incompatibility.\n[…]\nMongolian transliteration of Chinese characters\n[…]\nMongolian name"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_mongol_tradicional",
        "situacao": "ok",
        "texto": "A escrita mongol tradicional (em escrita mongol: ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ,  transl. Qudum Mongγol bičig; em cirílico: khalkha: Худам Монгол бичиг, transl. Khudam Mongol bichig, buriata: Худам Монгол бэшэг, transl. Khudam Mongol besheg, calmuca: Хуудм Моңһл бичг, trans. Huudm Moñḥl bichg) foi o primeiro sistema de escrita criado especificamente para o idioma mongol, e foi o mais difundido até a introdução do c\n[…]\nÉ tradicionalmente escrito em linhas verticais. Derivado do alfabeto uigur antigo, o mongol é um verdadeiro alfabeto, com letras separadas para consoantes e vogais. A escrita mongol foi adaptada para escrever idiomas como Oirata e Manchu. Alfabetos baseados neste script vertical clássico são usados na Mongólia interior e outras partes da China até hoje para escrever mongol, Xibe e experimentalmente, Evenki.\n[…]\nOs sistemas operacionais de computador demoraram a adotar o suporte para a escrita mongol e quase todos têm suporte incompleto ou outras dificuldades de renderização de texto.\n[…]\nUniversity of Virginia: Transliteration Schemes For Mongolian Vertical Script\n[…]\nOnline tool for Mongolian script transliteration\n[…]\nAutomatic converter for Traditional Mongolian and Cyrillic Mongolian by the Computer College of Inner Mongolia University\n[…]\nMongolian Manuscripts from Olon Süme – Yokohama Museum of EurAsian Cultures\n[…]\nDigitised Mongolian manuscripts – The Royal Library, National Library of Dinamarca\n[…]\nMongolian texts – Digitales Turfan-Archiv, the Berlin-Brandenburg Academy of Sciences and Humanities\n[…]\nPreservation of unique and historic newspapers printed in traditional Mongolian script between 1936-1945 – Endangered Archives Programme, British Library\n[…]\nOfficial Mongolian script version of the People's Daily Online\n[…]\nOffice of the President of Mongolia website in Mongolian script\n[…]\nDidi Tang (21 de março de 2020). «Mongolia abandons Soviet past by restoring alphabet». The Times. Consultado em 21 de março de 2020",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Urdu",
      "descricao": "Língua indo-ariana nacional do Paquistão, também falada por muçulmanos do norte da Índia."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Muito parecido com o hindi na fala, o urdu do Paquistão usa uma escrita bem diferente. Qual?",
    "resposta": "Alfabeto persa-árabe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Urdu",
      "https://en.wikipedia.org/wiki/Urdu_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Urdu",
        "situacao": "ok",
        "texto": "Urdu (اُرْدُو, urdū, [ˈʊɾduː] ) is an Indo-Aryan language spoken primarily in South Asia. It is the national language and lingua franca of Pakistan. It is also an official Eighth Schedule language in India, the status and cultural heritage of which are recognised by the Constitution of India — alongside having official status in several Indian states (Uttar Pradesh, Bihar, Jharkhand, West Bengal, \n[…]\nA movement towards the hyper-Persianisation of an Urdu emerged in Pakistan since its independence in 1947 which is \"as artificial as\" the hyper-Sanskritised Hindi that has emerged in India; hyper-Persianisation of Urdu was prompted in part by the increasing Sanskritisation of Hindi. However, the style of Urdu spoken on a day-to-day basis in Pakistan is akin to neutral Hindustani that serves as the lingua franca of the northern Indian subcontinent.\n[…]\nIn 1880, Sir Ashley Eden, the Lieutenant-Governor of Bengal in colonial India abolished the use of the Persian alphabet in the law courts of Bengal and ordered the exclusive use of Kaithi, a popular script used for both Urdu and Hindi; in the Bihar Province, the court language was Urdu written in the Kaithi script.\n[…]\nKaithi's association with Urdu and Hindi was ultimately eliminated by the political contest between these languages and their scripts, in which the Persian script was definitively linked to Urdu.\n[…]\nMore recently in India, Urdu speakers have adopted Devanagari for publishing Urdu periodicals and have innovated new strategies to mark Urdu in Devanagari as distinct from Hindi in Devanagari. Such publishers have introduced new orthographic features into Devanagari for the purpose of representing the Perso-Arabic etymology of Urdu words. One example is the use of अ (Devanagari a) with vowel signs to mimic contexts of ع (‘ain), in violation of Hindi orthographic rules.\n[…]\nThe Urdu Latin alphabet\n[…]\nUrdu Language History and Development"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Urdu_alphabet",
        "situacao": "ok",
        "texto": "The Urdu alphabet (Urdu: اُردُو حُرُوفِ تَہَجِّی‌, romanized: urdū ḥurūf-i tahajjī) is the right-to-left alphabet used for writing Urdu. It is a modification of the Persian alphabet, which itself is derived from the Arabic script. It has official and national status in Pakistan, and is official in certain regions in India.\n[…]\nAmong standardized romanization schemes, the most accurate is ALA-LC romanization, which is also supported by National Language Authority. Other romanization schemes are often rejected because either they are unable to represent sounds in Urdu properly, or they often do not take regard of Urdu orthography, and favor pronunciation over orthography.\n[…]\nThus Roman Urdu was a common way of writing among Pakistani and Indian Christians in these areas up to the 1960s. The Bible Society of India publishes Roman Urdū Bibles that enjoyed sale late into the 1960s (though they are still published today). Church songbooks are also common in Roman Urdu. However, the usage of Roman Urdu is declining with the wider use of Hindi and English in these states.\n[…]\nRomanization of Urdu\n[…]\nUrdu Braille\n[…]\nUrdu Informatics\n[…]\nUrdu keyboard\n[…]\nUrdu Wikipedia\n[…]\nDelacy, Richard (2003). Beginner's Urdu Script. McGraw-Hill.\n[…]\nDelacy, Richard (2010). Read and write Urdu script. McGraw-Hill. ISBN 978-0-07-174746-2.\n[…]\n\"Urdu romanization\" (PDF). The Library of Congress.\n[…]\nIshida, Richard. \"Urdu script notes\".\n[…]\nUrdu alphabet\n[…]\nUrdu alphabet with Devanagari equivalents. Archived 11 September 2019 at the Wayback Machine.\n[…]\nHugo's Urdu Alphabet Page. Archived 16 July 2020 at the Wayback Machine.\n[…]\ncalligraphyislamic.com, a resource for Urdu calligraphy and script\n[…]\nUrdu Script Introduction from Columbia University\n[…]\nNational Council for Promotion of Urdu Language. Archived 6 March 2018 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_urdu",
        "situacao": "ok",
        "texto": "O urdu (اردو) (também conhecida como lashkari لشکری) é uma língua indo-europeia da família indo-ariana que se formou sob influência persa, turca e árabe no sul da Ásia durante a época do sultanato de Déli e do Império Mogol (1200-1800).\n[…]\nEntretanto, o urdu, muito similar ao hindi, muitas vezes é considerado — juntamente com o hindi — como sendo parte do continuum linguístico denominado hindustâni, neste caso sendo o segundo idioma mais falado do mundo. O urdu é escrito em um alfabeto árabe modificado.\n[…]\nApós a partição do subcontinente e surgimento do Paquistão, os governos da Índia e Paquistão fizeram diversas tentativas de tornar os idiomas hindi e urdu mais diferentes entre si, mas o êxito enorme da indústria cinematográfica de \"Bollywood\" — que baseia seus filmes no denominador baixo-comum dos dois idiomas, que embora escritos em dois alfabetos diferentes, são extremamente semelhantes, com as únicas diferenças principalmente em palavras e estruturas gramaticais de textos religiosos e literatura erudita — tenha dificultado as tentativas de diferenciar mais os dois idiomas.\n[…]\nO panjabi, por exemplo, é muito semelhante ao urdu: o panjabi escrito em caracteres Shahmukhi pode ser entendido por falantes do urdu com pouca dificuldade, mas o panjabi falado possui uma fonética (sistema de pronúncia) muito diferente e não pode ser compreendido muito facilmente por falantes de urdu. Entretanto, o idioma mais proximamente ligado ao urdu é o hindi.\n[…]\nO sistema de escrita da língua é derivado do alfabeto persa, que por sua vez o é do árabe. Lido da direita para a esquerda, é escrito em Nastaʿlīq, enquanto o árabe é comumente escrito em Naskh, e possui até 39 ou 40 letras distintas.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Esperanto",
      "descricao": "Língua planejada para a comunicação internacional, publicada em 1887."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "No esperanto, todos os substantivos terminam com a mesma vogal. Qual é ela?",
    "resposta": "O",
    "fonte": [
      "https://en.wikipedia.org/wiki/Esperanto_grammar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Esperanto_grammar",
        "situacao": "ok",
        "texto": "Esperanto is the most widely used constructed language intended for international communication; it was designed with highly regular grammatical rules, and is therefore considered easy to learn.\n[…]\nesperas (hopes, is hoping)\n[…]\nIn written English, a comma disambiguates the two readings, but both take a comma in Esperanto.\n[…]\nPerhaps the best candidate for a \"non-European\" feature is the blurred distinction between root and affix. Esperanto derivational affixes may be used as independent roots and inflect for part of speech like other roots. This occurs only sporadically in other languages of the world. For example, ismo has an English equivalent in \"an ism\", but English has no adjectival form equivalent to Esperanto isma. For most such affixes, natural languages familiar to Europeans must use a separate lexical root.\n[…]\nThe Pater noster, from the first Esperanto publication in 1887, illustrates many of the grammatical points presented above:\n[…]\nThe morphologically complex words (see Esperanto word formation) are:\n[…]\nReference grammars include the Plena Analiza Gramatiko  (English: Complete Analytical Grammar) by Kálmán Kalocsay and Gaston Waringhien, and the Plena Manlibro de Esperanta Gramatiko (English: Complete Handbook of Esperanto Grammar) by Bertilo Wennergren.\n[…]\n\"Esperanto Grammar\" (by Don Harlow).\n[…]\n\"Esperanto Grammar\" (by Jirka Hana).\n[…]\nAn Elementary Esperanto Primer (by Daniel M. Albro). Archived 8 May 2021 at the Wayback Machine.\n[…]\nPlena Manlibro de Esperanta Gramatiko (A Complete Handbook of Esperanto Grammar, by Bertilo Wennergren).\n[…]\n\"Esperanto Grammar\", in Lingolia.\n[…]\n\"Features for Esperanto\" in the Conlang Atlas of Language Structures. Archived 23 October 2021 at the Wayback Machine."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Gram%C3%A1tica_do_esperanto",
        "situacao": "ok",
        "texto": "As regras gramaticais do esperanto são altamente regulares. Isso torna o idioma muito fácil de aprender em relação às demais línguas do mundo.\n[…]\nOs pronomes pessoais são: mi (eu), vi (tu), li (ele), ŝi (ela), ĝi (ele/ela, pronome sem gênero), ni (nós), vi (vós), ili (eles), oni (sujeito indeterminado). Usa-se o vi como tratamento formal, equivalente ao você, como na língua alemã. Para formar os possessivos se faz o acréscimo da terminação adjetiva a, a declinação é a mesma que a dos substantivos.\n[…]\nOs substantivos em esperanto não têm gênero gramatical - (masculino, feminino ou neutro). Mas eles se flexionam em número - (singular e plural). A terminação \"o\" marca o singular, ex:\n[…]\nOs adjetivos em esperanto são terminados em “a”. Eles não variam quanto a gênero- (masculino, feminino ou neutro). Para variar de singular para plural se usa a terminação “j”. Eles concordam em caso e número com os substantivos. No Esperanto é o mais comum usar a ordem \"adjetivo + substantivo\", assim como é no idioma inglês por exemplo, porém é comum ver também a ordem \"substantivo + adjetivo\" para se dar ênfase ao citado.\n[…]\nDos advérbios também pode-se fazer verbos, substantivos etc. Isso será mais bem estudado na construção de palavras em esperanto.\n[…]\nOs verbos transitivos necessitam de um complemento para que seu sentido fique suficientemente claro, esse complemento é chamado de objeto direto, ou complemento direto. Em esperanto, o objeto direto da oração é assinalado com a terminação n, característica do caso acusativo.\n[…]\nVer Preposições do esperanto\n[…]\nEm Esperanto, é permitido adicionar a terminação e às preposições, gerando assim advérbios:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Língua pirahã",
      "descricao": "Língua isolada do povo pirahã, que vive às margens do rio Maici, no Amazonas."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "A língua do povo pirahã, no Amazonas, ficou famosa entre os linguistas por não ter palavras para quê?",
    "resposta": "Números exatos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pirahã_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pirahã_language",
        "situacao": "ok",
        "texto": "Pirahã (also spelled Pirahá, Pirahán), or Múra-Pirahã, is the indigenous language of the Pirahã people of Amazonas, Brazil. The Pirahã live along the Maici River, a tributary of the Amazon River. Pirahã is estimated to have between 250 and 380 speakers. It is not in immediate danger of extinction, as its use is vigorous and the Pirahã community is mostly monolingual.\n[…]\nEverett, Daniel (1988). \"On Metrical Constituent Structure in Piraha Phonology\". Natural Language & Linguistic Theory. 6 (2): 207–246. doi:10.1007/BF00134230. S2CID 170956019.\n[…]\nEverett, Daniel L. (1992). A Língua Pirahã e a Teoria da Sintaxe: Descrição, Perspectivas e Teoria [The Pirahã Language and Syntactic Theory: Description, Perspectives and Theory] (Ph.D. thesis) (in Portuguese). Editora Unicamp. p. 354. ISBN 85-268-0082-5.\n[…]\nEverett, Keren (1998). \"Acoustic Correlates of Stress in Pirahã\". The Journal of Amazonian Languages: 104–162. (Published version of University of Pittsburgh M.A. thesis.)\n[…]\nSheldon, Steven N. (1974). \"Some Morphophonemic and Tone Perturbation Rules in Mura-Pirahã\". International Journal of American Linguistics. 40 (4, Part 1): 279–282. doi:10.1086/465324. S2CID 143707016.\n[…]\nSheldon, Steven N. (1977). Mura-Pirahã Verb Suffixes. Brazil.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\nSheldon, Steven N. (1988). \"Os sufixos verbais Mura-Pirahã\" [Mura-Pirahã verbal suffixes] (PDF). Série Lingüística. 9 (2). SIL International: 147–175. Archived from the original (PDF) on 2013-10-12.\n[…]\nPirahã Dictionary/ Dicionário Mura-Pirahã (Archived February 2, 2011, at the Wayback Machine)\n[…]\nMura-Pirahã Dictionary\n[…]\nBBC Radio 4, The Material World: The Language of the Piraha — Prof. Daniel Everett discusses the linguistic significance of the language with Prof. Ian Roberts.\n[…]\nAudio recordings of words lists in Pirahã, spoken by native speakers (UCLA Phonetics Lab Archive)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_pirarr%C3%A3",
        "situacao": "ok",
        "texto": "Pirarrã ou pirahã é uma língua da família linguística mura, falada por cento e cinquenta (alguns citam trezentos e cinquenta) indígenas pirarrãs, um povo monolíngue e seminômade que habita as margens do rio Maici, afluente do rio Marmelos ou Maici, que por sua vez é um afluente do rio Madeira, sendo este afluente do rio Amazonas, no Brasil.\n[…]\nPirarrã é a única língua do grupo mura não extinta, sendo que todas as demais desapareceram nos últimos séculos. Havia cerca de trezentos e cinquenta falantes em 2004, distribuídos em oito aldeias ao longo do rio Maici. Não é considerada em risco de extinção, pois seu uso é bem forte, sendo que os pirarrãs falam somente esse idioma.\n[…]\nNão tem numerais, apenas a noção do unitário (significando também “pequeno”) e de muitos. Sua cultura e seu modo de vida, como caçadores e coletores, não exige conhecimento de numerais (um trabalho recente de Everett indica que no pirarrã não existem nem mesmo \"um\" e \"dois\"; não usam números, mas quantidades relativas).\n[…]\nÉ alegado que o povo Pirahã não possui uma terminologia única de cores, sendo uma das poucas culturas (principalmente na bacia amazônica e na Nova Guiné) que só tem palavras específicas para \"claro\" e \"escuro\", se essa alegação for verdadeira. Embora o glossário Pirahã na tese de doutorado de Daniel Everett inclua uma lista de palavras de cor, Everett agora diz que os itens listados nesse glossário não são de fato palavras, mas frases descritivas (por exemplo, \"(como) sangue\" para \"vermelho\").\n[…]\nLínguas muras\n[…]\nLíngua matanawí\n[…]\nLínguas catuquinas#Comparações lexicais\n[…]\nPovo pirahã\n[…]\nTribo da Amazônia contradiz noção de que contar é capacidade inata\n[…]\nApós trabalho com índios no Amazonas, missionário evangélico vira cientista ateu\n[…]\nDicionário pirahã por Daniel Everett",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Silbo gomero",
      "descricao": "Linguagem assobiada que transmite o espanhol, usada na ilha de La Gomera, nas Canárias."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na ilha de La Gomera, nas Canárias, os moradores aprenderam a transmitir o espanhol a quilômetros de distância usando o quê?",
    "resposta": "Assobios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Silbo_Gomero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silbo_Gomero",
        "situacao": "ok",
        "texto": "Silbo Gomero (Spanish: silbo gomero [ˈsilβo ɣoˈmeɾo], \"Gomeran whistle\"), also known as el silbo (\"the whistle\"), is a whistled register of Spanish that is used by inhabitants of La Gomera, in the Canary Islands. It was historically used to communicate across the deep ravines and narrow valleys that radiate through the island and enabled messages to be exchanged over a distance of up to five kilom\n[…]\nAccording to different studies, Silbo Gomero has between two and five vowels and between four and ten consonants. It is a whistled form of a dialect of Canarian Spanish. Silbo replaces each vowel or consonant with a whistling sound. Whistles are distinguished according to pitch and continuity.\n[…]\nAlso in 2026, Jonay Acosta-Armas from the National University of Distance Education suggested that the shift in the description of Silbo Gomero vowels, from 2 vowels to 4 vowels, does not represent a change in the understanding of Silbo Gomero, but rather a change in Silbo Gomero itself, as it moved from a traditional form used to communicate over long distances, to a recreational form used in classrooms and during contests.\n[…]\nThe documentation on the official Silbo Gomero page on the UNESCO website is in line with Trujillo's 1978 study. He suggested that consonants are either rises or dips in the \"melody line\" that can be broken or continuous. Further study by Meyer and Rialland suggests that vowels are stripped to their inherent class of sound, which is communicated in the whistle in these ways: voice (/k/ vs /ɡ/) is transmitted by the whistled feature [-continuity].\n[…]\nThe filmmaker and photographer Francesca Phillips wrote and directed a 26-minute documentary on the usage of Silbo Gomero in La Gomera, Written in the Wind (2009). The movie won Best Short Documentary in Anthropology at the World Mountain Documentary Festival held in Qinghai, China, in 2010."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Silbo_Gomero",
        "situacao": "ok",
        "texto": "Silbo gomero (ˈsilβo ɣoˈmeɾo, 'assobio gomero'), também chamado el silbo ('o assobio'), é uma linguagem assobiada falada pelos habitantes de La Gomera nas Ilhas Canárias para comunicação ao longo das íngremes ravinas e dos estreitos vales (voçorocas existentes por toda a ilha. Um falante de silbo gomero é por vezes chamado pelos espanhóis de silbador ('assobiador'). Esse modo de expressão foi decl\n[…]\nTal como acontece com outras formas assobiados de línguas não tonais, o silbo funciona retendo aproximadamente a articulação da fala comum, de modo que \"as variações de timbre da fala aparecem sob a forma de variações de afinação \" (Busnel and Classe: v). A linguagem é uma forma assobiada de um dialeto do espanhol.\n[…]\nA colaboração de Trujillo de  2005 com o assobiador Gomeranoa Isidro Ortiz e outros  revisou suas assertivas mais antigas para estabelecer que são quatro as vogais perceptíveis ( pg 63 ref. cit.), e descreve em detalhes as áreas de divergência entre os dados empíricos e hipóteses fonéticas. Apesar de em seu trabalho de 2005 Trujillo reconhecer a existência de quatro vogais, sua obra bilíngue 2006 (\"El Silbo Gomero.\n[…]\nTrujillo (1978) sugeriu que as consoantes são ou elevações ou depressões na \"linha melódica\" dos assobios que podem ser quebrados ou continuados. Outras investigações por Meyer, e por Rialland sugerem que as vogais são como que retiradas da sua  classe inerente classe de sons ao serem comunicadas por assobios dos seguintes modos: som (/k/ vs /ɡ/) é transmitido prelo recurso de continuidade.; idade.\n[…]\nUma pausa silenciosa no assobio comunica som ( / ɡ /), enquanto uma consoante contínua dá uma qualidade vocal (/k/). Presença de consoante (dental, palatal, fricativa) é transmitida em assobio pela locação (“locus”)  das transições das formações entre vogais. Classes de consoantes são simplificadas em quatro classes.\n[…]\n«Silbo-Gomero.com»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Hangul",
      "descricao": "Alfabeto da língua coreana, criado no século quinze durante a dinastia Joseon."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Na escrita coreana, as letras não ficam soltas em fila, mas agrupadas em pequenos blocos. Cada bloco corresponde a quê?",
    "resposta": "Uma sílaba",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hangul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "The Korean alphabet is the modern writing system for the Korean language. It has gone by a variety of names, such as Chosŏn'gŭl in North Korea, Hangul internationally, and Hangeul in South Korea. The script's original name was Hunminjeongeum.\n[…]\nThe rise of the Korean Wave around the beginning of the 21st century has corresponded with a rise in Korean language education for Japanese people. The Korean Wave has also impacted interest in Korean and Hangul in the United States, with numerous universities and language learning tools like Duolingo teaching the subjects.\n[…]\nHangul orthography has changed over time. Since 1948, North and South Korea have used different orthographies. However, because their current orthographies are based on the 1933 Unified Hangul Orthography, they are still relatively similar. North Korea now uses the Compendium of Korean Language Norms and South Korea the Hangeul Orthography.\n[…]\nThe depth of current Hangul orthographies is a subject of some disagreement. Many scholars argue current orthographies have a relatively shallow or transparent orthography, in that pronunciation generally closely corresponds to what is written. Their complexities are often the product of sound changes in the Korean language over time as well as morphophonemic orthographic practices (changing some spellings to reflect the function or meaning of some words).\n[…]\nIt saw renewed activity and support in the early 2020s. Hangul has since continued to be taught and used in the area.\n[…]\nA copy of the Hunminjeongeum Haerye, the document that formally introduced Hangul, was designated a National Treasure of South Korea on December 20, 1962 and a UNESCO Memory of the World in 1997.\n[…]\nMedia related to Hangul at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "O alfabeto coreano, conhecido como hangul ou hangeul (em coreano: 한글, em hanja: 韓㐎) na Coreia do Sul e Chosŏn'gŭl na Coreia do Norte (em coreano: 조선글), é um sistema de escrita da língua coreana criado pelo Rei Sejong, o Grande, em 1443.\n[…]\nCada bloco silábico do hangul consiste em no mínimo duas e no máximo cinco entre 24 letras, das quais 14 são consoantes e 10 são vogais. Os caracteres do hangul são compostos em blocos e formam sílabas, chamadas jamos. Cada unidade representa um som diferente; alguns caracteres representam dois sons, e esses sons são diferenciados dependendo da posição - em cima de uma vogal, do lado esquerdo ou no fim (em baixo) de cada bloco.\n[…]\nComo regra geral, não se inicia uma palavra com vogal. Para contornar o problema das sílabas cujo primeiro som é uma vogal, usa-se o leung (ㅇ), que tem som mudo quando colocado no início de um bloco, e se colocado no final, faz um som de \"ng\", como em Samsung (삼성). Os caracteres, às vezes, sofrem mínimas alterações para se acomodarem à escrita.\n[…]\nA estrutura do hangul é composta por blocos silábicos, que por sua vez são divididos em uma consoante inicial (vermelho), uma vogal (azul) e, geralmente, uma consoante final (verde), permitindo a formação de sílabas mais complexas:\n[…]\nEliminação: consoante ㅎ (ou ㄶ,ㅀ)  na próxima sílaba\n[…]\nAlém do coreano, o hangul é usado para a língua jeju. Os especialistas coreanos estão atualmente tentando difundir o uso deste alfabeto para línguas não coreânicas. A primeira iniciativa ocorreu em 2009, na Indonésia, na ilha de Buton, onde a etnia Buton, estabelecida em torno de Bau-Bau, escolheu o hangul como escrita para transcrever sua língua oral, o cia-cia, e salvar essa língua.\n[…]\nDia de Hangul\n[…]\nLista de sílabas do Hangul moderno",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Hieróglifos egípcios",
      "descricao": "Sistema de escrita formal do Egito Antigo, que combinava sinais de sons e de ideias."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Os hieróglifos egípcios podiam ser escritos em várias direções. O que mostrava ao leitor de que lado começar?",
    "resposta": "O lado para onde as figuras olham",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
        "situacao": "ok",
        "texto": "Ancient Egyptian hieroglyphs (, HY-roh-glifs) or hieroglyphics were the formal writing system used in Ancient Egypt for writing the Egyptian language. Hieroglyphs combined ideographic, logographic, syllabic, and alphabetic elements, with more than 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood.\n[…]\nIt is a complex system, writing figurative, symbolic, and phonetic all at once, in the same text, the same phrase, I would almost say in the same word.\n[…]\nVisually, hieroglyphs are all more or less figurative: they represent real or abstract elements, sometimes stylized and simplified, but all generally perfectly recognizable in form. However, the same sign can, according to context, be interpreted in diverse ways: as a phonogram (phonetic reading), as a logogram, or as an ideogram (semagram; \"determinative\") (semantic reading).\n[…]\nList of Egyptian hieroglyphs\n[…]\nCursive Hieroglyphs\n[…]\nGardiner, Sir Alan H. (1957). Egyptian Grammar: Being an Introduction to the Study of Hieroglyphs, 3rd ed. revised. The Griffith Institute.\n[…]\nKamrin, Janice (2004). Ancient Egyptian Hieroglyphs: A Practical Guide. Harry N. Abrams, Inc. ISBN 978-0-8109-4961-4.\n[…]\nMcDonald, Angela. Write Your Own Egyptian Hieroglyphs. Berkeley: University of California Press, 2007 (paperback, ISBN 0-520-25235-7).\n[…]\nEgyptra - Egyptian Hieroglyphic Guide and Name Translator\n[…]\nAncient Egyptian Hieroglyphics – Aldokkan\n[…]\nGlyphs and Grammars – Resources for those interested in learning hieroglyphs, compiled by Aayko Eyma\n[…]\nHieroglyphics![link removed] – Annotated directory of popular and scholarly resources\n[…]\nUnicode Compliant Hieroglyphic Font – From the University of St Andrews\n[…]\nThe Thot Sign List - an interactive hieroglyphic sign-list database.\n[…]\nThe Polychrome Hieroglyph Research Project - a database of polychrome hieroglyphs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hier%C3%B3glifos_eg%C3%ADpcios",
        "situacao": "ok",
        "texto": "Hieróglifos egípcios eram o sistema de escrita formal usado no Antigo Egito. Os hieróglifos combinavam elementos logográficos, silábicos e alfabéticos, com um total de cerca de 1 000 caracteres distintos. Acredita-se que tiveram origem por volta de 3000 a.C.\n[…]\nEstudiosos como Geoffrey Sampson argumentaram que os hieróglifos egípcios \"surgiram um pouco depois da escrita suméria e, provavelmente, [foram] inventados sob a influência desta\", e que é \"provável que a ideia geral de expressar palavras de uma língua por escrito tenha sido trazida para o Egito a partir da Mesopotâmia suméria\".\n[…]\nÀ medida que a escrita se desenvolveu e se tornou mais difundida entre o povo egípcio, formas de glifos simplificadas desenvolveram-se, resultando nas escritas hierática (sacerdotal) e demótica (popular). Estas variantes também eram mais adequadas do que os hieróglifos para uso em papiro. A escrita hieroglífica não foi, no entanto, eclipsada, mas existiu juntamente com as outras formas, especialmente na escrita monumental e noutra escrita formal.\n[…]\nAlguns acreditavam que os hieróglifos podiam ter funcionado como uma forma de distinguir os 'verdadeiros Egípcios' de alguns dos conquistadores estrangeiros. Outra razão pode ser a recusa em abordar uma cultura estrangeira nos seus próprios termos, o que caracterizou as abordagens greco-romanas à cultura egípcia em geral.[carece de fontes]?\n[…]\nA decifração do sistema de escrita dos hieróglifos egípcios é geralmente atribuída a Jean François Champollion, o chamado \"Pai da Egiptologia\". Nascido na França em 1790, desde muito jovem Champollion mostrou um grande interesse pelo estudo das línguas orientais, e aos 16 anos já conhecia hebraico, árabe, persa, chinês e várias outras línguas asiáticas.\n[…]\nNumerais egípcios",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Hieróglifos egípcios",
      "descricao": "Sistema de escrita formal do Egito Antigo, que combinava sinais de sons e de ideias."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra hieróglifo, usada para a escrita do Egito Antigo, vem do grego. O que ela significa?",
    "resposta": "Gravação sagrada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
      "https://pt.wikipedia.org/wiki/Hieróglifos_egípcios"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
        "situacao": "ok",
        "texto": "Ancient Egyptian hieroglyphs (, HY-roh-glifs) or hieroglyphics were the formal writing system used in Ancient Egypt for writing the Egyptian language. Hieroglyphs combined ideographic, logographic, syllabic, and alphabetic elements, with more than 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood.\n[…]\nKnowledge of the hieroglyphs had been lost completely in the medieval period.\n[…]\nList of Egyptian hieroglyphs\n[…]\nCursive Hieroglyphs\n[…]\nAllen, James P. (1999). Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs. Cambridge University Press. ISBN 978-0-521-77483-3.\n[…]\nCollier, Mark & Bill Manley (1998). How to Read Egyptian Hieroglyphs: a step-by-step guide to teach yourself. British Museum Press. ISBN 978-0-7141-1910-6.\n[…]\nSelden, Daniel L. (2013). Hieroglyphic Egyptian: An Introduction to the Language and Literature of the Middle Kingdom. University of California Press. ISBN 978-0-520-27546-1.\n[…]\nGardiner, Sir Alan H. (1957). Egyptian Grammar: Being an Introduction to the Study of Hieroglyphs, 3rd ed. revised. The Griffith Institute.\n[…]\nKamrin, Janice (2004). Ancient Egyptian Hieroglyphs: A Practical Guide. Harry N. Abrams, Inc. ISBN 978-0-8109-4961-4.\n[…]\nMcDonald, Angela. Write Your Own Egyptian Hieroglyphs. Berkeley: University of California Press, 2007 (paperback, ISBN 0-520-25235-7).\n[…]\nEgyptra - Egyptian Hieroglyphic Guide and Name Translator\n[…]\nAncient Egyptian Hieroglyphics – Aldokkan\n[…]\nGlyphs and Grammars – Resources for those interested in learning hieroglyphs, compiled by Aayko Eyma\n[…]\nHieroglyphics![link removed] – Annotated directory of popular and scholarly resources\n[…]\nUnicode Compliant Hieroglyphic Font – From the University of St Andrews\n[…]\nThe Thot Sign List - an interactive hieroglyphic sign-list database.\n[…]\nThe Polychrome Hieroglyph Research Project - a database of polychrome hieroglyphs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hieróglifos_egípcios",
        "situacao": "ok",
        "texto": "Hieróglifos egípcios eram o sistema de escrita formal usado no Antigo Egito. Os hieróglifos combinavam elementos logográficos, silábicos e alfabéticos, com um total de cerca de 1 000 caracteres distintos. Acredita-se que tiveram origem por volta de 3000 a.C.\n[…]\nEstudiosos como Geoffrey Sampson argumentaram que os hieróglifos egípcios \"surgiram um pouco depois da escrita suméria e, provavelmente, [foram] inventados sob a influência desta\", e que é \"provável que a ideia geral de expressar palavras de uma língua por escrito tenha sido trazida para o Egito a partir da Mesopotâmia suméria\".\n[…]\nEmbora existam muitos exemplos de relações iniciais entre Egito e Mesopotâmia, a falta de evidências diretas da transferência da escrita significa que \"nenhuma determinação definitiva foi feita quanto à origem dos hieróglifos no antigo Egito\". Desde a década de 1990, as descobertas mencionadas acima de glifos em Abidos, datados entre 3400 e 3200 a.C., lançaram mais dúvidas sobre a noção clássica de que o sistema de símbolos mesopotâmico precede o egípcio. Uma data de 3400 a.C.\n[…]\nTendo aprendido que os hieróglifos eram uma escrita sagrada, os autores greco-romanos imaginaram o sistema complexo, mas racional, como um sistema alegórico, até mágico, que transmitia conhecimento secreto e místico.\n[…]\ndeve ser lido da esquerda para a direita, pois os sinais (como o do machado sagrado, do olho, e dos pássaros) estão voltados para a esquerda.\n[…]\nOutra forma como os hieróglifos funcionam é ilustrada pelas duas palavras egípcias pronunciadas pr (geralmente vocalizadas como per). Uma palavra significa 'casa', e a sua representação hieroglífica é direta:\n[…]\nOutra palavra pr é o verbo 'sair, partir'. Quando esta palavra é escrita, o hieróglifo 'casa' é usado como símbolo fonético:"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Língua mirandesa",
      "descricao": "Língua asturo-leonesa falada na região de Miranda do Douro, no nordeste de Portugal."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua, falada no nordeste de Portugal, foi reconhecida oficialmente em 1999 ao lado do português?",
    "resposta": "Mirandês",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_mirandesa",
      "https://en.wikipedia.org/wiki/Mirandese_language"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_mirandesa",
        "situacao": "ok",
        "texto": "A língua mirandesa (lhéngua/léngua mirandesa, mirandés) é a variedade asturo-leonesa falada no nordeste de Portugal, sobretudo na Terra de Miranda (concelho de Miranda do Douro e freguesias de Angueira e Vilar Seco, em Vimioso). Foi oficialmente reconhecida em 1999 pela Assembleia da República; o ensino foi regulamentado no mesmo ano.\n[…]\nDesde 2025, RTP Ensina publica animações em mirandês para fornecer de materiais audiovisuais nesta língua a professores e escolas de todo Portugal, juntamente com um vocabulário e vídeos sobre cultura e memória.\n[…]\nO mirandês é, desde 1999, a segunda língua oficial do país. A preservação da língua mirandesa deve-se à geografia e ao isolamento das designadas Terras de Miranda. Os rios ou cordilheiras são fatores cruciais para a criação de uma \"fronteira linguística\". No caso das Terras de Miranda, o rio Sabor teve influência, isolando a área da influência da língua portuguesa.\n[…]\nSegundo os entrevistados, não falam o mirandês quando estão em situações formais, como por exemplo, na relação professor-aluno (como é o caso do entrevistado) é, de uma forma geral, a língua portuguesa que prevalece. Há também alguns complexos com a língua, reservando-a a contextos mais familiares, do quotidiano ou mesmo contextos de extrema intimidade. Todos esses fatores levam a língua a uma situação de diglossia.\n[…]\nCaracterísticas comuns ao português, ao galego e ao asturo-leonês ocidental (origem linguística da língua mirandesa):\n[…]\npalatização da consoante inicial l: língua = lhéngua / léngua (sendinês);\n[…]\nSegue-se um texto amostra em língua mirandesa publicado no jornal Público por Amadeu Ferreira, a 24 de julho de 2007. Para comparação, apresentam-se as traduções do texto para leonês, asturiano, português, galego e castelhano.\n[…]\nTerra de Miranda\n[…]\no artigo Lhéngua mirandesa na Biquipédia mirandesa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mirandese_language",
        "situacao": "ok",
        "texto": "Mirandese (mirandés [miɾãˈdes̺, -ɾãŋ-] ) is an Asturleonese language or variety that is sparsely spoken in a small area of northeastern Portugal in eastern Tierra de Miranda, an ethnocultural region comprising the area around the municipalities of Miranda de l Douro, Mogadouro and Bumioso. It is extinct in Mogadouro and present in Bumioso only in some eastern villages, like Angueira.\n[…]\nThe Assembly of the Republic granted Mirandese official recognition alongside Portuguese for local matters with Law 7/99 of 29 January 1999. In 2001, Mirandese was officially recognised by the European Bureau for Lesser-Used Languages, which aimed to promote the survival of the least-spoken European languages.\n[…]\nMirandese is written using the Latin alphabet, and its orthography is based on that of Portuguese:\n[…]\nIn the end, a mostly Portuguese-based orthography was chosen, but with some alterations to it to still cater to Mirandese’s phonetic inventory.\n[…]\nAs in Portuguese, Mirandese still uses the following synthetic tenses:\n[…]\nMirandese was formerly spoken in the general area of the district of Bragança (Bergáncia in Mirandese), that speaks the Transmontano dialect of Portuguese. Although Mirandese has been lost in this region, it left some words and phonetic influences behind.\n[…]\nMirandese people\n[…]\nFerreira, Manuela Barros; Raposo, Domingos, eds. (1999). Convenção Ortográfica da Língua Mirandesa [Orthographic Convention for Mirandese Language] (PDF) (in Portuguese). Miranda do Douro and Lisboa: Câmara Municipal de Miranda do Douro and Centro de Linguística da Universidade de Lisboa. Archived from the original (PDF) on 29 June 2003.\n[…]\nExcerpt of The Lusiads in Mirandese\n[…]\n(in Portuguese) Lei n. 7/99 dre.pt – Legislation which officially recognizes Mirandese as a language of Portugal\n[…]\nSeth Kugel, \"In Portugal, Mirandese spoken here—and only here\", The New York Times, 17 January 2012"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Língua islandesa",
      "descricao": "Língua germânica do ramo nórdico, oficial na Islândia."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua nórdica mudou tão pouco desde a Idade Média que seus falantes leem as sagas antigas com relativa facilidade?",
    "resposta": "Islandês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Icelandic_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Icelandic_language",
        "situacao": "ok",
        "texto": "Icelandic (  ice-LAN-dick; endonym: íslenska, pronounced [ˈi(ː)stlɛnska] , íslensk tunga [ˈi(ː)stlɛnsk ˈtʰuŋka]) is a North Germanic language from the Indo-European language family spoken by about 390,000 people, the vast majority of whom live in Iceland, where it is the national language. Since it is a West Scandinavian language, it is most closely related to Faroese, western Norwegian dialects, \n[…]\nAround 900 CE, the language spoken in the Faroes was Old Norse, which Norse settlers had brought with them during the time of the settlement of Faroe Islands (landnám) that began in 825. However, many of the settlers were not from Scandinavia, but descendants of Norse settlers in the Irish Sea region. In addition, women from Norse Ireland, Orkney, or Shetland often married native Scandinavian men before settling in the Faroe Islands and Iceland.\n[…]\nThe Nordic countries have committed to providing services in various languages to each other's citizens, but this does not amount to any absolute rights being granted, except as regards criminal and court matters.\n[…]\nIcelandic personal names are patronymic (and sometimes matronymic) in that they reflect the immediate father or mother of the child and not the historic family lineage. This system, which was formerly used throughout the Nordic area and beyond, differs from most Western systems of family name. In most Icelandic families, the ancient tradition of patronymics is still in use; i.e.\n[…]\nThe Icelandic speech community is perceived to have a protectionist language culture, however, this is deep-rooted ideologically primarily in relation to the forms of the language, while Icelanders in general seem to be more pragmatic as to domains of language use."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_islandesa",
        "situacao": "ok",
        "texto": "A língua islandesa, ou simplesmente islandês (em islandês: íslenska) é uma língua nórdica falada por cerca de 300 mil pessoas na Islândia, onde é a única língua oficial.\n[…]\nO início da história da língua islandesa data da chegada de Ingólfur Arnarson, tido como o primeiro habitante fixo da Islândia, e seu irmão Hjörleifr, em 874. Após eles, outros noruegueses chegaram à ilha fugindo do reino de Haroldo I. O nórdico antigo ocidental era a língua que os colonizadores falavam à época, na qual foram escritas a Edda e as sagas islandesas, e é de onde a língua islandesa se originou. A história da Islândia foi bem registrada de forma escrita no Landnámabók.\n[…]\nO islandês é considerado a mais conservadora das línguas escandinavas, sendo uma continuação direta da língua falada pelos primeiros colonizadores. O isolamento geográfico, somado a altas taxas de alfabetização desde o século XIII contribuíram para a estabilidade do idioma. O islandês reteve o sistema de casos do nórdico antigo, herdado do indo-europeu, e um vocabulário relativamente inalterado.\n[…]\nDessa forma, falantes do islandês moderno não têm grandes dificuldades em ler textos clássicos escritos em nórdico antigo.\n[…]\nO Landnámabók, ou \"Livro dos Assentamentos\", é uma obra clássica islandesa que registra desde a descoberta da ilha por exploradores escandinavos até sua colonização e a criação do Alþingi, o parlamento em atividade mais antigo da Europa. Tendo sido escrito e compilado por diversos autores, com os principais créditos por estrutura e base sendo de Ari, o Sábio. Mesmo tendo sido escrito em islandês antigo, falantes do islandês moderno podem conseguir compreender o texto do livro.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Náuatle",
      "descricao": "Língua uto-asteca falada pelos astecas e ainda hoje por comunidades indígenas do México."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Chocolate, tomate e abacate são palavras que vieram de qual língua dos astecas, ainda falada no México?",
    "resposta": "Náuatle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nahuatl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nahuatl",
        "situacao": "ok",
        "texto": "Nahuatl (English:  NAH-wah-təl; hispanicized from Nawatl pronounced [ˈnaːwat͡ɬ] ), Aztec, or Mexicano is a language or, by some definitions, a group of languages of the Uto-Aztecan language family. Varieties of Nahuatl are spoken by about 1.7 million Nahuas, most of whom live mainly in Central Mexico and have smaller populations in the United States. Nahuatl has been spoken in central Mexico since\n[…]\nMany words from Nahuatl were absorbed into Spanish and, from there, were diffused into hundreds of other languages in the region. Most of these loanwords denote objects indigenous to central Mexico, which the Spanish heard mentioned for the first time by their Nahuatl names. English has also absorbed words of Nahuatl origin, including avocado, chayote, chili, chipotle, chocolate, atlatl, coyote, peyote, axolotl and tomato.\n[…]\nThe Mexica were among the latest groups to arrive in the Valley of Mexico; they settled on an island in the Lake Texcoco, subjugated the surrounding tribes, and ultimately an empire named Tenochtitlan. Mexica political and linguistic influence ultimately extended into Central America, and Nahuatl became a lingua franca among merchants and elites in Mesoamerica, such as with the Maya Kʼicheʼ people.\n[…]\nLauney, Michel. Introducción a la lengua y a la literatura Náhuatl. México D.F.: UNAM. 1992 (Spanish); An Introduction to Classical Nahuatl [English translation/adaptation by Christopher Mackay], 2011, Cambridge University Press.\n[…]\nEstudios de Cultura Náhuatl: special interest-yearbook of the Instituto de Investigaciones Históricas (IIH) of the Universidad Autónoma de México (UNAM), Ed.: Miguel León Portilla\n[…]\nCollection of Nahuatl of the Sierra Nororiental de Puebla, Mexico of Jonathan Amith, containing recordings in Nahuatl by native speakers and transcriptions, from the Archive of Indigenous Languages of Latin America."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_n%C3%A1uatle",
        "situacao": "ok",
        "texto": "O náuatle (português brasileiro) ou nauatle (português europeu) (Nawatl, Nawatlahtolli), também chamado de asteca ou mexicano, (pronúncia nativa: [ˈnaːwatɬ] () é uma língua pertencente à família uto-asteca, usada pelo povo náuatle e falada no território atualmente correspondente à região central do México desde pelo menos o século VII. No final do século XX, era falada por pouco menos de um milhão\n[…]\nMuitas palavras do náuatle foram apropriadas pelos idioma espanhol e passaram para centenas de outras línguas; em sua grande maioria, são palavras que designam conceitos nativos ao México central, que os espanhóis ouviram ser mencionados pela primeira vez em seus nomes náuatles, como, por exemplo, \"tomate\", \"abacate\", e \"chocolate\".\n[…]\nOs espanhóis concederam ampla autonomia às administrações locais das cidades indígenas durante este período, e em diversas cidades onde se falava o náuatle o idioma foi a língua administrativa de facto, tanto na forma escrita como falada.\n[…]\nA terminologia utilizada para se descrever as diversas variedades do náuatle falado é aplicada inconsistentemente. Muitos termos são utilizados por diferentes significados, ou então os mesmos grupos recebem nomes diferentes. Por vezes termos mais antigos são substituídos por novos termos, ou pelos termos utilizados no próprio idioma, para designar determinada variedade específica. A própria palavra nahuatl é uma palavra náuatle, derivada de nāwatlahtolli (\"língua clara\").\n[…]\nJá os falantes do náuatle no istmo de Tehuantepec chamam seu idioma de mela'tajtol (\"a língua direita\"). Algumas comunidades de falantes também usam o termo nahuatl como o nome de seu idioma, embora esta pareça ser uma inovação recente. Alguns linguistas identificam comumente os dialetos mais específicos do náuatle adicionando palavras que qualifiquem o nome da vila ou área onde aquela variedade é falada (por exemplo, \"náuatle de Acaxochitlán\").",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Pashtuns",
      "descricao": "Povo iraniano oriental que vive no Afeganistão e no noroeste do Paquistão e fala o pashto."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que povo, o maior grupo étnico do Afeganistão, era historicamente o chamado de afegão, nome que depois passou ao país inteiro?",
    "resposta": "Pashtuns",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pashtuns",
      "https://en.wikipedia.org/wiki/Afghan_(ethnonym)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pashtuns",
        "situacao": "ok",
        "texto": "Pashtuns, also known as Pakhtuns and Pathans, are an ethnic group primarily residing in southern and eastern Afghanistan and northwestern Pakistan. They were historically also referred to as Afghans, although the 1923 constitution of Afghanistan began the use of 'Afghans' as a demonym for all citizens of the Kingdom, regardless of their ethnic group, to create an Afghan national identity.\n[…]\nThis theory of Pashtuns Jewish origin has been largely denied and is said that Its biblical claims are anecdotal, its historical documentation is inconsistent, its geographic claims are incoherent, and its linguistic assertions are implausible.\n[…]\nSome Afghan historians have maintained that Pashtuns are linked to the ancient Israelites. Mohan Lal quoted Mountstuart Elphinstone who wrote:\n[…]\nThe politics of writing Pashto language textbooks in a nationalist environment promoting integration through Islam and Urdu had unique effects. There was no lesson on any twentieth century Pakhtun, especially Abdul Ghaffar Khan, the anti-British, pro-Pakhtun nationalist. There was no lesson on the Pashtun state-builders in nineteenth and twentieth century Afghanistan. There was little or no sampling of original Pashto language religious or historical material.\n[…]\nMany Pashtuns want to reclaim their identity from being lumped in with the Taliban and international terrorism, which is not directly linked with Pashtun culture and history.\n[…]\nIn 1942, Madhubala (Mumtaz Jehan), the Marilyn Monroe of India, entered the Bollywood film industry. Bollywood blockbusters of the 1970s and 1980s starred Parveen Babi, who hailed from the lineage of Gujarat's historical Pathan community: the royal Babi Dynasty. Other Indian actresses and models, such as Zarine Khan, continue to work in the industry. During the 1980s many Pashtun women served in the ranks of the Afghan communist regime's Military."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Afghan_(ethnonym)",
        "situacao": "ok",
        "texto": "Afghan (Pashto: افغان) is an ethnonym historically used to refer to Pashtuns. Since the second half of the twentieth century, the term has evolved into a demonym for all residents of Afghanistan, including those outside the Pashtun ethnicity.\n[…]\nIn the 11th century, Afghans are mentioned in al-Biruni's Tarikh-ul Hind (\"History of the Indus\"), which describes groups of rebellious Afghans in the tribal lands west of the Indus River in what is now known as Pakistan.\n[…]\nA 16th-century Muslim historian, writing about the history of Muslim rule in the subcontinent, states:\n[…]\nThe name \"Afghanistan\" is also mentioned in the writings of the 16th-century historian Ferishta:\"The men of Kábul and Khilj also went home; and whenever they were questioned about the Musulmáns of the Kohistán (the mountains), and how matters stood there, they said, \"Don't call it Kohistán, but Afghánistán; for there is nothing there but Afgháns and disturbances.\" Thus it is clear that for this reason the people of the country call their home in their own language Afghánistán, and themselves Afgháns.\n[…]\nThere are a number of other hypotheses historically suggested for the name, all of them now considered obsolete.\n[…]\nA deputation led by Qais proceeded to Medina to meet Muhammad and embraced Islam. Muhammad bestowed blessings on them and gave the name Abdur Rashid to Qais, who returned to Ghor to propagate Islam. Qais had three sons, Sarban, Bettan, and Ghourghusht, who are considered progenitors of various Pashtun tribes.\n[…]\nPashtuns"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Past%C3%B3s",
        "situacao": "ok",
        "texto": "Os pastós, também chamados de pachtuns ou pachtos (em pastó: پښتون,; romaniz.: pashtūn ou pakhtūn; em urdu: پٹھان,; em hindi: पठान), são um grupo etnolinguístico localizado principalmente no leste e no sul do Afeganistão e, no Paquistão, nas províncias de Caiber Paquetuncuá e do Baluchistão e nas áreas tribais administradas pelo governo federal. Os pastós caracterizam-se pela sua língua própria (o\n[…]\nEmbora raramente unidos, os pastós sobreviveram a uma história turbulenta, que começou há séculos. Sua história recente teve início com o Império Durrani, a partir de 1747. A proeza marcial pastó já era famosa no tempo de Alexandre, o Grande, e foram um dos poucos povos que lograram conter o imperialismo britânico no século XIX, derrotando por duas vezes as forças expedicionárias enviadas da Índia, a primeira vez em 1839-1842 e a segunda em 1878-1880.\n[…]\nA participação dos pastós foi essencial para combater a invasão do Afeganistão pela União Soviética, entre 1979 e 1989, com o mais famoso dos líderes guerrilheiros desta etnia a ser Gulbuddin Hekmatyar. Mais recentemente, formavam o principal grupo étnico dos talibãs, havendo atuado na ascensão e queda daquele movimento liderado pelo mulá Mohamad Omar.\n[…]\nDerrubado o regime talibã em finais de 2001, os pastós modernos têm se envolvido na reconstrução do Afeganistão e o presidente Hamid Karzai é um dos seus. Mas no Sul do Afeganistão, os talibãs têm reconquistado influência junto das tribos pastós. Este grupo étnico forma também uma importante comunidade no Paquistão, onde constituem a segunda maior comunidade.\n[…]\nEstima-se a população total de pastós em mais de 40 milhões de pessoas, embora seja difícil contá-la por não ter havido censos populacionais no Afeganistão desde 1979. No Paquistão, sua natureza migratória e o hábito de isolar as mulheres complicam a tarefa de contagem.\n[…]\nAfegãos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Suaíli",
      "descricao": "Língua banta da África Oriental, oficial no Quênia e na Tanzânia e usada como língua franca na região."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da língua suaíli, da África Oriental, vem de uma palavra árabe. O que ela significa?",
    "resposta": "Costas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nAbout 40% of Swahili vocabulary consists of Arabic loanwords, including the name of the language itself (سَوَاحِلي sawāḥilī, a plural adjectival form of an Arabic word meaning 'of the coasts'). Swahili also has a significant number of loanwords from Portuguese, English and German. The Arabic loanwords date from the era of contact between Arab slave traders and the Bantu inhabitants of the east coast of Africa, which was also the time period when Swahili emerged as a lingua franca in the region.\n[…]\nIn 2024, Somalia joined the East African Community and its inclusion may facilitate the spread of the Swahili language in Somalia. Nevertheless, in Somalia, Swahili, as a foreign language, will have to compete with English, the primary global lingua franca, and Arabic, the official second language of Somalia and a liturgical language for Muslims, as popular secondary or tertiary languages.\n[…]\nWith the arrival of Europeans in East Africa, Christianity was introduced to the region, profoundly shaping the development of Swahili. While Arab influence remained concentrated along the coastal areas, European missionaries ventured further inland, establishing missions and promoting Christian teachings. Early outposts were located along the coast, where they encountered Swahili as a widely spoken lingua franca.\n[…]\nKiKAR – Swahili pidgin spoken in British colonial East Africa\n[…]\nLanguages of Africa\n[…]\nWhiteley, Wilfred (1969). Swahili: the rise of a national language. Studies in African History. London: Methuen."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nCom ajuda de ativos missionários cristãos, os administradores locais britânicos se decidiram a fazer do suaíli a língua oficial comum tanto nas escolas primárias como nas administrações locais menores por toda África oriental, nas colônias Uganda, Tanganica, Zanzibar e Quênia. O idioma suaíli deveria se subordinar ao Inglês, sendo que seria o idioma das Universidades, o prioritário nas escolas secundárias e na administração de alto nível.\n[…]\nHoje, cerca de 90% da população da Tanzânia fala o suaíli, e um percentual um pouco menor no Quênia. 66 milhões de congoleses falam o idioma nas seis províncias orientais do país, fazendo com que essa língua já rivalize com o lingala como língua principal do Congo. Em Uganda, os baganda não falam o suaíli, mas cerca de 25 milhões de pessoas no resto do país têm essa língua como principal, visando a preparação para a Comunidade da África Oriental.\n[…]\nWhiteley, Wilfred. 1969. Swahili: the rise of a national language. London: Methuen. Series: Studies in African History.\n[…]\nOmniglot Escrita Suaíli - inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita da antiga Mesopotâmia, marcado com estilete em tábuas de argila."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A escrita cuneiforme da antiga Mesopotâmia recebeu esse nome por causa do formato de suas marcas. Que formato é esse?",
    "resposta": "Cunha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuneiform",
      "https://pt.wikipedia.org/wiki/Escrita_cuneiforme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuneiform",
        "situacao": "ok",
        "texto": "Cuneiform is a logo-syllabic writing system that was used to write several languages of the ancient Near East. The script was in active use from the early Bronze Age until the 1st century BC. Cuneiform scripts are marked by and named for the characteristic wedge-shaped impressions (Latin: cuneus) which form their signs. Cuneiform is the earliest known writing system and was originally developed to\n[…]\nThere are many instances of Egypt-Mesopotamia relations at the time of the invention of writing, and standard reconstructions of the development of writing generally place the development of the Sumerian proto-cuneiform script before the development of Egyptian hieroglyphs, with the suggestion the former influenced the latter. Given the lack of direct evidence for the transfer of writing, \"no definitive determination has been made as to the origin of hieroglyphics in ancient Egypt\".\n[…]\nBeginning in the later half of the 1st millennium BC cuneiform rapidly fell into dis-use. In part this was due to the slow replacement of the Akkadian language by the Aramaic, written in the Aramaic alphabet, in Mesopotamia and the growing influence of the Persian\n[…]\nCuneiform has a specific format for transliteration. Because of the script's polyvalence, transliteration requires certain choices of the transliterating scholar, who must decide in the case of each sign which of its several possible meanings is intended in the original document.\n[…]\nCuneiform script was used in many ways in ancient Mesopotamia. Besides the well-known clay tablets and stone inscriptions, cuneiform was also written on wax boards. One example from the 8th century BC was found at Nimrud. The wax contained toxic amounts of arsenic. It was used to record laws, like the Code of Hammurabi. It was also used for recording maps, compiling medical manuals, and documenting religious stories and beliefs, among other uses."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_cuneiforme",
        "situacao": "ok",
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nO último documento registrado em escrita cuneiforme da sociedade da Mesopotâmia é um almanaque astronômico datado de 75 d.C., onde estão anotados os movimentos dos astros mês a mês.\n[…]\nEm meados do 3º milênio a.C., foi introduzido um novo estilete com ponta em cunha, que era pressionado na argila, produzindo uma escrita cuneiforme em forma de cunha. Esse desenvolvimento tornou a escrita mais rápida e fácil, especialmente ao escrever em argila macia. Ao ajustar a posição relativa do estilete em relação à tabuinha, o escriba podia usar uma única ferramenta para fazer uma variedade de impressões.\n[…]\nPara números, um estilete de ponta redonda era inicialmente usado, até que o estilete de ponta em cunha foi generalizado. A direção da escrita era de cima para baixo e da direita para a esquerda. As tabuinhas de argila cuneiformes podiam ser queimadas em fornos para endurecê-las e, assim, fornecer um registro permanente, ou podiam ser deixadas úmidas e recicladas se a permanência não fosse necessária.\n[…]\nFormava um silabário semi-alfabético, usando muito menos traços de cunha do que o assírio, juntamente com um punhado de logogramas para palavras de ocorrência frequente como \"deus\" (𐏎), \"rei\" (𐏋) ou \"país\" (𐏌). Esta forma quase puramente alfabética da escrita cuneiforme (36 caracteres fonéticos e 8 logogramas), foi especialmente projetada e usada pelos primeiros governantes aquemênidas do século VI a.C. até o século IV a.C.\n[…]\nThe Emacs editor has an input method for Neo-Akkadian Cuneiform"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Mandarim",
      "descricao": "Grupo de dialetos chineses do norte e do sudoeste da China, base do chinês padrão."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome mandarim, dado pelos europeus à principal língua chinesa, vem da palavra que os portugueses usavam para quem?",
    "resposta": "Os funcionários do império chinês",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mandarin_(bureaucrat)",
      "https://en.wikipedia.org/wiki/Mandarin_Chinese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mandarin_(bureaucrat)",
        "situacao": "ok",
        "texto": "A mandarin (Chinese: 官; pinyin: guān) was a scholar-bureaucrat in the historical governments of China, Korea, and Vietnam.\n[…]\nIn the 16th century, before the term mandarin became widespread in European languages, the word Loutea (with various spelling variations) was often used in Europeans' travel reports to refer to Chinese scholar-officials. It is frequently used, for example, in Galeote Pereira's account of his experiences in China in 1548–1553, which was published in Europe in 1565, or (as Louthia) in Gaspar da Cruz' Treatise of China (1569). C. R.\n[…]\nThe speech standard of the Ming and Qing empires was called \"the Mandarin language\" by European missionaries, translating the Mandarin Chinese: 官話; pinyin: Guānhuà; lit. 'language of the officials', which was current already in the Ming dynasty. The term \"Mandarin\" is also used to refer to modern Standard Mandarin Chinese, which evolved out of the earlier standard, and to the broader group of Mandarin dialects spoken across northern and southwestern China.\n[…]\nFrom 605 to 1905 in China, mandarins were selected by merit through the extremely rigorous imperial examination. China had civil servants since at least the Zhou dynasty, but most high positions were filled by relatives of the sovereign and the nobility. It was not until the Tang dynasty that imperial examinations were used for placement in the nine-rank system, and the final form of the Mandarin emerged. Mandarins were the founders and core of the Chinese gentry.\n[…]\nKapitan Cina – The Chinese officership or mandarinate of colonial Indonesia\n[…]\nScholar-official – Learned men in imperial China"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mandarin_Chinese",
        "situacao": "ok",
        "texto": "Mandarin (  MAN-dər-in) is the largest branch of the Sinitic languages. Mandarin varieties are natively spoken by 70 percent of all Chinese speakers, spread over a large geographical area that stretches from Yunnan in the southwest to Xinjiang in the northwest and Heilongjiang in the northeast.\n[…]\nIn northern Myanmar, a Southwestern Mandarin variant close to the Yunnanese dialect is spoken by local Chinese and other ethnic groups. In some rebel group-controlled regions, Mandarin also serves as the lingua franca.\n[…]\nIn 1936, Wang Li produced the first classification based on phonetic criteria, principally the evolution of Middle Chinese voiced initials. His Mandarin group included dialects of northern and southwestern China, as well as those of Hunan and northern Jiangxi.\n[…]\nthe disappearance of final stop consonants and /-m/ (although in many Jianghuai Mandarin and Jin Chinese dialects, an echo of the final stops is preserved as a glottal stop);\n[…]\nIn Mandarin dialects the voicing is generally lost, yielding voiceless aspirates in syllables with a Middle Chinese level tone and non-aspirates in other syllables.\n[…]\nWhile the first and second person singular pronouns are cognate with forms in other varieties of Chinese, the rest of the pronominal system is a Mandarin innovation (e.g., Shanghainese has non 侬儂 'you' and yi 伊 'he, she').\n[…]\nBecause of contact with Mongolian and Manchurian peoples, Mandarin (especially the Northeastern varieties) has some loanwords from these languages not present in other varieties of Chinese, such as hútòng (胡同) 'alley'. Southern Chinese varieties have borrowed from Tai, Austroasiatic, and Austronesian languages.\n[…]\nFrom Article 1 of the Universal Declaration of Human Rights in Beijing Mandarin, the basis of Standard Chinese (in Traditional Chinese):"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandarim_%28burocrata%29",
        "situacao": "ok",
        "texto": "Mandarim (chinês: 官; pinyin: guān) nos antigos impérios da China, do Aname e da Coreia, designava um funcionário pertencente à classe dos letrados e recrutado por concurso.\n[…]\nAssim, esse sistema de crenças e doutrinas converte-se em uma espécie de \"religião dos letrados\", de modo que os concursos de saber e de memória funcionam como rituais constitutivos da casta dos mandarins.\n[…]\nNo século XVI, antes que o termo mandarim se tornasse difundido nas línguas europeias, a palavra Loutea (com várias variações de grafia) era frequentemente usada em relatos de viagens europeus para se referir a oficiais acadêmicos chineses. É frequentemente usado, por exemplo, no relato de Galeote Pereira sobre suas experiências na China em 1548-1553 e que foi publicado na Europa em 1565, ou (como Louthia ) no Tratado da China de Gaspar da Cruz (1569).\n[…]\nO padrão de fala dos impérios Ming e Qing foi chamado de \"língua mandarim\" pelos missionários europeus. O termo \"mandarim\" também é usado para se referir à língua chinesa moderna padrão, que se desenvolveu a partir do padrão linguístico anterior, e ao grupo mais amplo de dialetos mandarim falados no norte e sudoeste da China.\n[…]\nDe 605 a 1905, na China, os mandarins eram selecionados por mérito, por meio de um exame imperial extremamente rigoroso. A China teve funcionários públicos pelo menos desde a dinastia Zhou, mas a maioria dos altos cargos era ocupada por parentes do soberano e da nobreza. Foi somente na dinastia Tang que os exames imperiais foram usados para classificação no sistema de nove níveis e a forma final do mandarim surgiu. Os mandarins foram os fundadores e o núcleo da pequena nobreza chinesa.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Mapuches",
      "descricao": "Povo indígena do centro-sul do Chile e do sudoeste da Argentina."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua do povo indígena mapuche, do Chile e da Argentina, o que significa o nome mapuche?",
    "resposta": "Gente da terra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mapuche"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mapuche",
        "situacao": "ok",
        "texto": "The Mapuche ( mə-POO-chee, Mapuche and Spanish: [maˈputʃe]), also known as Araucanians, are a group of Indigenous inhabitants of south-central Chile and southwestern Argentina, including parts of Patagonia. The collective term refers to a wide-ranging ethnicity composed of various groups who share a common social, religious, and economic structure, as well as a common linguistic heritage as Mapudu\n[…]\nTheir homelands once extended from Choapa Valley to the Chiloé Archipelago and later spread eastward to Puelmapu, a land comprising part of the Argentine pampa and Patagonia. Today, the Mapuche represent 77.16% of Chile’s indigenous peoples and about 8.8% of the total national population. The Mapuche are concentrated in the Araucanía region. Many have migrated from rural areas to the cities of Santiago and Buenos Aires to pursue economic opportunities. Around 92% of the Mapuches are from Chile.\n[…]\nMapuche in the Spanish-ruled areas, especially the Picunche, mingled with the Spanish during the colonial period, forming a mestizo population that lost its Indigenous identity. But Mapuche society in Araucanía and Patagonia remained independent until the late nineteenth century, when Chile occupied Araucanía and Argentina conquered Puelmapu. Since then the Mapuche have become subjects, and later nationals and citizens, of those states.\n[…]\nAs a result of the Occupation of Araucanía (1861–1883) and the War of the Pacific, Chile had incorporated territories with new Indigenous populations. Mapuches obtained relatively favourable views as \"primordial\" Chileans contrasting with other Indigenous peoples like the Aymara who were perceived as \"foreign elements\".\n[…]\nLanguage of the Land : The Mapuche in Argentina and Chile: IWGIA – International Work Group for Indigenous Affairs, 2007, ISBN 978-87-91563-37-9\n[…]\nMapuche-nation.org\n[…]\nMapuche Health\n[…]\nWebsite of the Kingdom of Araucania and Patagonia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mapuches",
        "situacao": "ok",
        "texto": "Os mapuches  são um povo indígena da região centro-sul do Chile e do sudoeste da Argentina.\n[…]\nA denominação Mapuche se origina da fusão de duas palavras, “mapu” que significa terra, e “che”, que significa gente. Em algumas regiões, ambos os termos são utilizados com pequenas diferenças de significado. Especula-se que o nome araucano proceda da  palavra quechua \"awqa\", inimigo, selvagem ou rebelde, ou de \"palqu\", silvestre, tendo sido lhes dada pelos incas ou pelos espanhóis, fato que explica o repúdio desta designação por parte dos próprios Mapuche.\n[…]\nOs mapuches falam língua Mapudungun (em português, som da terra).\n[…]\nA terra caracteriza e dá sentido existencial aos mapuche, fazendo parte desde seu etnônimo (gente da terra) até a espécie de seus sobrenomes, geralmente toponímias do lugar em que historicamente vivem (ou viviam) as diferentes linhagens de parentesco.\n[…]\nA situação política teve alguma mudança na década de 1960 e inícios dos anos 1970. Os governos de Jorge Alessandri, Eduardo Frei Montalva e de Salvador Allende abriram o debate da Reforma Agrária no Chile e por meio de mobilizações dos setores indígenas, estas tenderam a abrir a discussão da questão agrária, buscando incorporar não só os “camponeses sem terra”, como também os “indíos usurpados”.\n[…]\nApós a abertura à democracia, em 1990, diversas organizações Mapuche no Chile se mobilizaram, no sentido de reivindicarem o acesso e a perpetuidade à terra, principal bandeira de luta até então.\n[…]\nJuan Carlos Reinao - Médico, líder mapuche e presidente de la Asociación de Municipalidades con Alcaldes Mapuches, no Chile.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Pidgin",
      "descricao": "Língua de contato simplificada que surge entre grupos sem idioma comum, geralmente para o comércio."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra pidgin, usada para línguas de contato simplificadas, viria da pronúncia chinesa de qual palavra inglesa?",
    "resposta": "Business",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pidgin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pidgin",
        "situacao": "ok",
        "texto": "A pidgin , or pidgin language, is a grammatically simplified form of contact language that develops between two or more groups of people that do not have a language in common: typically, its vocabulary and grammar are limited and often drawn from several languages. It is most commonly employed in situations such as trade, or where both groups speak languages different from the language of the coun\n[…]\nPidgin derives from a Chinese pronunciation of the English word business, and all attestations from the first half of the nineteenth century given in the third edition of the Oxford English Dictionary mean \"business; an action, occupation, or affair\" (the earliest being from 1807). The term pidgin English ('business English'), first attested in 1855, shows the term in transition to referring to language, and by the 1860s the term pidgin alone could refer to Pidgin English.\n[…]\nThe word pidgin, formerly also spelled pigion, was first applied to Chinese Pidgin English, but was later generalized to refer to any pidgin. Pidgin may also be used as the specific name for local pidgins or creoles, in places where they are spoken. For example, the name of the creole language Tok Pisin derives from the English words talk pidgin. Its speakers usually refer to it simply as \"pidgin\" when speaking English.\n[…]\na process that regularizes speaker-dependent variation in grammar. Creoles can then replace the existing mix of languages to become the native language of a community (such as the Chavacano language in the Philippines, Krio in Sierra Leone, and Tok Pisin in Papua New Guinea). However, not all pidgins become creole languages; a pidgin may die out before this phase would occur (e.g. the Mediterranean Lingua Franca).\n[…]\nLingua franca – Concept in linguistics\n[…]\nHolm, John (2000), An Introduction to Pidgins and Creoles, Cambridge University Press\n[…]\nAtlas of Pidgin and Creole Language Structures (APiCS)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pidgin",
        "situacao": "ok",
        "texto": "Pidgin (pron. 'pɪdʒəŋ)  ou língua de contacto  é uma palavra de origem inglesa que designa qualquer língua criada, normalmente de forma espontânea, a partir da mistura de duas ou mais línguas e que serve de meio de comunicação entre os falantes dessas línguas.\n[…]\nA maioria dos linguistas acredita que uma língua crioula se desenvolva através de um processo de nativização de um pidgin, ou seja, quando crianças falantes do pidgin passam a utilizá-lo como primeira língua, adquirindo complexidade e estabilidade típicas de uma língua. Então,  a língua crioula substitui o pidgin como forma de comunicação, à semelhança do que acontece as línguas crioulas de Cabo Verde ou da Guiné-Bissau.\n[…]\nUm outro exemplo bem conhecido é o bichlamar,  língua crioula melanésia que se baseia no inglês, com incorporação de palavras malaias, chinesas, francesas e portuguesas.\n[…]\nMas nem sempre os pidgins se transformam em crioulos: podem morrer ou tornar-se obsoletos, tal como ocorreu com aqueles falados  nos séculos XVII e XVIII,  em Angola, resultantes da mistura entre o português europeu e as línguas nativas. Esses pidgins acabaram por dar origem a variedades linguísticas ou línguas crioulas, popularmente denominadas  \"pequeno português\".\n[…]\nA ausência de uma língua franca espalhada e/ou acessível.\n[…]\nA palavra é possivelmente derivada da pronúncia chinesa para a palavra inglesa business (negócio). Pidgin English, ou \"inglês pidgin\", era o nome dado ao pidgin feito da mistura entre o chinês, o inglês e o português utilizada para o comércio em Cantão durante os séculos XVIII e XIX. Alguns académicos questionam esta derivação da palavra pidgin, e sugerem etimologias alternativas; porém nenhuma obteve até agora apoio entre outros académicos.\n[…]\nLínguas crioulas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Inglaterra",
      "descricao": "Nação que ocupa a maior parte do sul da ilha da Grã-Bretanha, parte do Reino Unido."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome Inglaterra significa terra de qual povo germânico que se fixou na Grã-Bretanha depois dos romanos?",
    "resposta": "Anglos",
    "fonte": [
      "https://en.wikipedia.org/wiki/England",
      "https://en.wikipedia.org/wiki/Angles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/England",
        "situacao": "ok",
        "texto": "England is a country that is part of the United Kingdom. It is located on the island of Great Britain, of which it covers about 62%, and more than 100 smaller adjacent islands. England shares a land border with Scotland to the north and another land border with Wales to the west, and is surrounded by the North Sea to the east, the English Channel to the south, the Celtic Sea to the south-west, and\n[…]\nEngland is highly industrialised, but since the 1970s there has been a decline in traditional heavy and manufacturing industries, and an increasing emphasis on a more service industry-oriented economy. Tourism has become a significant industry, attracting millions of visitors to England each year.\n[…]\nState schools teach students a second language or third language from the ages of seven, most commonly French, Spanish or German. It was reported in 2007 that around 800,000 school students spoke a foreign language at home, the most common being Punjabi and Urdu. However, following the 2011 census data released by the Office for National Statistics, figures now show that Polish is the main language spoken in England after English.\n[…]\nThe Church of England forms part of the Anglican Communion, with the Archbishop of Canterbury acting as its symbolic worldwide head. Many cathedrals and parish churches are historic buildings of significant architectural importance, such as Westminster Abbey, York Minster, Durham Cathedral, and Salisbury Cathedral.\n[…]\nLondon dominates the media sector in England: national newspapers and television and radio are largely based there, although Manchester is also a significant national media centre. The UK publishing sector, including books, directories and databases, journals, magazines and business media, newspapers and news agencies, has a combined turnover of around £20 billion and employs around 167,000 people.\n[…]\nGeographic data related to England at OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Angles",
        "situacao": "desambiguacao",
        "texto": "Angles most commonly refers to:\n\nAngles (tribe), a Germanic-speaking people that took their name from the Angeln cultural region in Germany\nAngle, a geometric figure formed by two rays meeting at a common point\nAngles may also refer to:\n\n\n== Places ==\nLes Angles (disambiguation), France\nAngles, Alpes-de-Haute-Provence, France\nAngles, Vendée, France\nAnglès, Tarn, France\nAnglès, Girona, Spain\n\n\n== M"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inglaterra",
        "situacao": "ok",
        "texto": "Inglaterra (em inglês:  England) é uma das nações constituintes do Reino Unido. O país faz fronteira com a Escócia ao norte e com o País de Gales a oeste; o Mar da Irlanda está a noroeste, o Mar Celta está a sudoeste, enquanto o Mar do Norte está a leste e o Canal da Mancha, ao sul, a separa da Europa continental. A maior parte da Inglaterra compreende a parte central e sul da ilha da Grã-Bretanha\n[…]\nA área agora chamada de Inglaterra foi habitada por seres humanos pela primeira vez durante o período Paleolítico Superior, mas o seu nome vem dos anglos, uma das tribos germânicas que se estabeleceram durante os séculos V e VI na região. A Inglaterra tornou-se um Estado unificado em 927 d.C., e desde a Era dos Descobrimentos, que começou durante o século XV, a nação passou a ter um impacto cultural e jurídico significativo sobre o resto do mundo.\n[…]\nO nome Inglaterra é derivado do inglês antigo \"Englaland\" (England), que significa \"terra dos anglos\". Os anglos foram uma das tribos germânicas que se estabeleceram na Inglaterra durante a Alta Idade Média. Segundo o Dicionário Oxford, o primeiro uso conhecido de \"Inglaterra\" para se referir à parte sul da ilha da Grã-Bretanha ocorreu em 897, e sua ortografia moderna foi usada pela primeira vez em 1538.\n[…]\nTalvez o exemplo mais conhecido seja a Muralha de Adriano, que se estende pelo norte da Inglaterra. Outro exemplo bem preservado são os banhos romanos em Bath, Somerset.\n[…]\nDesde o início do período moderno, a comida da Inglaterra tem sido historicamente caracterizada por sua simplicidade de abordagem e confiança na alta qualidade dos produtos naturais. Durante a Idade Média e durante o período do Renascimento, a culinária inglesa desfrutou de excelente reputação, embora um declínio tenha começado durante a Revolução Industrial com o afastamento da terra e o aumento da urbanização da população.\n[…]\nEconomia da Inglaterra\n[…]\nHistória da Inglaterra",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Berberes",
      "descricao": "Povos nativos do norte da África, do Marrocos ao Egito ocidental, que se chamam de amazigues."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O nome dos berberes, povo do norte da África, tem a mesma origem de qual palavra que os gregos usavam para os estrangeiros?",
    "resposta": "Bárbaro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Berbers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Berbers",
        "situacao": "ok",
        "texto": "Berbers, also known as Amazighs or Imazighen, are an ethnic group indigenous to North Africa. They are primarily connected by their use of Berber languages, which are part of the Afroasiatic language family.\n[…]\nThe Berbers are indigenous to the Maghreb region of North Africa, where they live in communities across parts of Morocco, Algeria, Libya, and to a lesser extent Tunisia, Mauritania, northern Mali and northern Niger (Azawagh). Smaller Berber communities are also found in Burkina Faso and Egypt's Siwa Oasis. Many in the community view the exonym \"Berber\", equivalent and related to the Arabic word for \"barbarian\" (بربر), as pejorative, and prefer the endonym \"Amazigh\".\n[…]\nThe historian Ramzi Rouighi argues that before that Berbers were not considered to be a single group, and that the term's modern usage carries problematic historical baggage. Today, many consider the term \"Berber\" pejorative and prefer \"Amazigh\" instead, due to its problematic history as an exonym and its equivalence with the Arabic word for \"barbarian\".\n[…]\nThe medieval Arab historian Ibn Khaldun says the Berbers were descendants of Barbar, the son of Tamalla, son of Mazigh, son of Canaan, son of Ham, son of Noah.\n[…]\nBesides the Arabian influence, North Africa also saw an influx, via the Barbary slave trade, of Europeans, with some estimates placing the number of European slaves brought to North Africa during the Ottoman period to be as high as 1.25 million. Interactions with neighboring Sudanic empires, traders, and nomads from other parts of Africa also left impressions upon the Berber people.\n[…]\nPortail des Amazighs (Berbères)\n[…]\nAmazigh/Berber Culture\n[…]\nCulture Amazighe (Berbère) Archived 25 February 2021 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Berberes",
        "situacao": "ok",
        "texto": "Os berberes (que chamam a si próprios Imazighen, que significa \"homens livres\" ou \"homens nobres\"; singular Amazigh) referem-se ao conjunto de povos do Norte de África que falam línguas berberes da família de línguas afro-asiáticas. Estima-se que existam entre 58 e 75 milhões de pessoas que falam estas línguas, principalmente em Marrocos e Argélia, incluindo os tuaregues, predominantemente nômades\n[…]\nA palavra berbere, incorporada ao português por empréstimo do árabe berber (derivado de ber 'homem' com interferência do latim barbărus), perdeu muito cedo o seu sentido primeiro de \"estrangeiro à civilização greco-romana\". Ela designa hoje um grupo linguístico norte-africano, e os falantes do berbere são indivíduos pertencentes a um conjunto de tribos que falavam ou falam ainda dialetos com base comum, a língua berbere.\n[…]\nNa origem, o termo \"bárbaro\" — do latim barbarus, derivado do grego antigo βάρβαρος, bárbaros (\"estrangeiro\") — era uma palavra utilizada pelos gregos para designar os outros povos, aqueles cuja língua lhes era incompreensível, ou seja, os não gregos.\n[…]\nA palavra bárbaros não tinha, originalmente, nuance pejorativa, significando simplesmente \"não grego\", aplicando-se a toda pessoa cuja língua não era compreendida pelos gregos ou a alguém que se exprimisse por onomatopeias (\"bar-bar\"), segundo a percepção dos gregos.\n[…]\nOs historiadores árabes, por sua vez, adotaram a palavra \"barbaros\" (em árabe: بَربَر, pronúncia: [bærbær]), e os europeus passaram a se referir à costa do Norte da África como Berbéria (ou Barbaria).\n[…]\nPor volta de 12 mil anos atrás, um grupo populacional do Oriente Próximo se fixa no Norte da África, quando o Deserto do Saara ainda era uma savana verde, sendo seus membros os ancestrais dos berberes e dos egípcios.\n[…]\nEm 17 de outubro de 2001 o rei Mohammed VI de Marrocos cria o Instituto Real da Cultura Amazigh (IRCAM) para promover a cultura berbere.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua brasileira de sinais, usada pela comunidade surda do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Libras, língua de sinais do Brasil, e a língua de sinais americana descendem da língua de sinais de qual país europeu?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
      "https://en.wikipedia.org/wiki/French_Sign_Language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nHistorical efforts were commonly transcribed using Portuguese words, written in upper case, to stand for each equivalent Libras morpheme.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nIn September 2017, new Libras accessibility requirements took effect in Brazil mandating availability of Brazilian Sign Language for films shown in Brazilian movie theaters. Sign language is displayed to moviegoers on a second screen device. Sign language is stored as a Sign Language Video track in the Digital Cinema Package (DCP), synchronized with the rest of the film.\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      },
      {
        "url": "https://en.wikipedia.org/wiki/French_Sign_Language",
        "situacao": "ok",
        "texto": "French Sign Language (French: langue des signes française, LSF) is the sign language of deaf and hard-of-hearing people in France and in French-speaking parts of Switzerland. There are an estimated 100,000 to 200,000 LSF users in France.\n[…]\nFrench Sign Language is related and partially ancestral to Dutch Sign Language (NGT), Flemish Sign Language (VGT), Belgian-French Sign Language (LSFB), Irish Sign Language (ISL), American Sign Language (ASL), Quebec (also known as French Canadian) Sign Language (LSQ), Brazilian Sign Language (LSB or Libras) and Russian Sign Language (RSL). LSF is a \"vibrant mode of communication, embodying a unique amalgamation of history, culture, and identity\".\n[…]\nAmerican Sign Language"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é uma gestualização da língua portuguesa, e sim uma língua à parte. Cada país possui sua própria língua de sinais, tendo cada uma um nome próprio, como em Portugal, onde adota-se a Língua Gestual Portuguesa (LGP).\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nAtravés de diversos movimentos e muita pesquisa na área, foi legitimada como língua a comunicação gestual entre surdos. Foi apenas no fim do século XX  que os movimentos se intensificaram querendo a oficialização da Língua Brasileira de Sinais, em 1993 o projeto de lei entrou na longa batalha para a regulamentação da Libras no país.\n[…]\nEm 2005, através do decreto 5.626 a língua brasileira de sinais foi regulamentada como disciplina curricular. Já em 2007, a estrutura de língua foi aplicada a Libras, já que ela é uma língua natural e possui complexidades próprias e comunicação eficaz. Em 2010 foi regulamentada a profissão de Tradutor/ Intérprete de Libras através da Lei 12.319 de 1° de Setembro de 2010, simbolizando mais uma grande conquista.\n[…]\n24 de abril foi oficializado como o Dia Nacional da Língua Brasileira de Sinais.\n[…]\nLíngua de sinais\n[…]\nLíngua de sinais kaapor brasileira\n[…]\nLista de línguas gestuais",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Urdu",
      "descricao": "Língua indo-ariana nacional do Paquistão, também falada por muçulmanos do norte da Índia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O hindi e o urdu são, na fala do dia a dia, praticamente a mesma língua. Que nome recebe essa língua comum?",
    "resposta": "Hindustâni",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindustani_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindustani_language",
        "situacao": "ok",
        "texto": "Hindustani is an Indo-Aryan language spoken across India's Hindi Belt and Pakistan as the lingua franca of the region. It is also spoken by the Deccani-speaking community in South India. Hindustani is a pluricentric language with two standard registers, known as Hindi (Prakritised and Sanskritised register written in the Brahmic script) and Urdu (Persianised and Arabised register written in the Pe\n[…]\nThe standardised registers Hindi and Urdu are collectively known as Hindi–Urdu. Hindustani is the lingua franca of the north and west of the Indian subcontinent, though it is understood fairly well in other regions also, especially in the urban areas. This has led it to be characterised as a continuum that ranges between Hindi and Urdu.\n[…]\nFiji Hindi was derived from the Hindustani linguistic group and is spoken widely by Fijians of Indian origin.\n[…]\nBecause of anglicisation in South Asia and the international use of the Latin script, Hindustani is occasionally written in the Latin script. This adaptation is called Roman Urdu or Romanised Hindi, depending upon the register used. Since Urdu and Hindi are mutually intelligible when spoken, Romanised Hindi and Roman Urdu (unlike Devanagari Hindi and Urdu in the Urdu alphabet) are mostly mutually intelligible as well.\n[…]\nThe following is a sample text, Article 1 of the Universal Declaration of Human Rights, in the two official registers of Hindustani, Hindi and Urdu. Because this is a formal legal text, differences in vocabulary are most pronounced.\n[…]\nThe predominant Indian film industry Bollywood, located in Mumbai, Maharashtra, uses Standard Hindi, colloquial Hindustani, Bombay Hindi, Urdu, Awadhi, Rajasthani, Bhojpuri, and Braj Bhasha, along with Punjabi and with the liberal use of English or Hinglish in scripts and soundtrack lyrics.\n[…]\nHindustani as an anxiety between Hindi–Urdu Commitment\n[…]\nHindi? Urdu? Hindustani? Hindi-Urdu?\n[…]\nHindustani Poetry"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_hindust%C3%A2ni",
        "situacao": "ok",
        "texto": "O hindustâni ou hindustano (हिन्दुस्तानी ہندوستانی Hindustānī, AFI: [hɪn̪d̪ʊst̪aːniː], literalmente \"do Hindustão\") é uma língua do norte da Índia, a partir da qual os idiomas-padrão hindi e urdu se desenvolveram. Era entendido em boa parte do norte e do centro do subcontinente indiano e, hoje, constitui uma língua franca de uso oral e informal no norte da Índia e no Paquistão.\n[…]\nO termo urdu surgiu por volta de 1780. Em 1796, John Borthwick Gilchrist publicou uma gramática da língua, que denominou \"hindoostanee\". Durante o raj britânico, o termo \"hindustani\" era usado pelos oficiais britânicos, a partir de \"hindustão\", o antigo nome da região.\n[…]\nApós a independência, o uso do termo foi reduzido, sendo largamente substituído por \"hindi\", \"urdu\" ou \"hindi-urdu\". Finalmente, com a partição da Índia, em 1947, as duas línguas, escritas com alfabetos distintos (o hindi, com o devanágari; o urdu, com uma variante do alfabeto árabe), passaram a ser consideradas como diferentes.\n[…]\nMais recentemente, o termo tem sido usado para a linguagem coloquial dos filmes de Bollywood, que são populares na Índia e no Paquistão e que não pode ser identificado especificamente como hindi ou urdu.\n[…]\nAo contrário do hindi e do urdu, o hindustâni não segue regras fixas nacionalmente obrigatórias, não sendo, portanto, uma língua padrão. Em outras palavras, o hindi e o urdu são registros padronizados do hindustâni que possuem uma gramática praticamente idêntica entre si e compartilham um vocabulário básico.\n[…]\nEm 2006, havia 490 milhões de falantes de hindustâni, fazendo desta a segunda ou terceira língua mais falada no mundo, depois do mandarim e, possivelmente, do inglês.\n[…]\nSiddiqi, Mohammad Tahsin (1994). Hindustani-English code-mixing in modern literary texts (em inglês). [S.l.]: University of Wisconsin. Consultado em 11 de janeiro de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Língua japonesa",
      "descricao": "Língua do Japão, escrita com kanji, hiragana e katakana."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A palavra japonesa pan, que significa pão, foi levada ao Japão no século dezesseis por falantes de qual língua?",
    "resposta": "Português",
    "distratores": [
      "Holandês",
      "Inglês",
      "Francês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Japanese_words_of_Portuguese_origin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_words_of_Portuguese_origin",
        "situacao": "ok",
        "texto": "Many Japanese words of Portuguese origin entered the Japanese language when Portuguese Jesuit priests and traders introduced Christian ideas, Western science, medicine, technology and new products to the Japanese during the Muromachi period (15th and 16th centuries).\n[…]\nThe Portuguese were the first Europeans to reach Japan and the first to establish direct trade between Japan and Europe, in 1543. During the 16th and 17th century, Portuguese Jesuits had undertaken a great work of Catechism, that ended only with religious persecution in the early Edo period (Tokugawa Shogunate).\n[…]\nMany of the words which were introduced and entered the Japanese language from Portuguese and Dutch are written in kanji or hiragana, rather than katakana, which is the more common way to write loanwords in Japanese in modern times. Kanji versions of the words are ateji, characters that are \"fitted\" or \"applied\" to the words by the Japanese, based on either the pronunciation or the meaning of the word.\n[…]\nIt is often suggested that the Japanese word arigatō derives from the Portuguese obrigado, both of which mean \"Thank you\", but evidence indicates arigatō has a purely Japanese origin, so these two words are false cognates.\n[…]\nArigatō is an \"u\"-sound change of arigataku. In turn, arigataku is the adverbial form of an adjective arigatai, from older arigatashi, itself a compound of ari + katashi. Written records of arigatashi exist dating back to the Man'yōshū compiled in the 8th century AD, well before Japanese contact with the Portuguese in the 16th century.\n[…]\nsci.lang.japan FAQ Japanese words of Portuguese origin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palavras_japonesas_de_origem_portuguesa",
        "situacao": "ok",
        "texto": "A existência de numerosas palavras japonesas de origem portuguesa resulta da chegada ao Japão dos portugueses em 1542-1543, sendo os primeiros europeus a aportar e a estabelecer um fluxo contínuo e direto de comércio entre o Japão e a Europa.\n[…]\nForam os portugueses os primeiros a traduzir o japonês para uma língua ocidental, no dicionário Nippo Jisho (日葡辞書, Nippojisho) ou \"Vocabvlário da Lingoa de Iapam\", compilado por missionários jesuítas como João Rodrigues e publicado em Nagasaki em 1603. Este dicionário de japonês-português explicava 32 000 palavras em japonês traduzidas para português.\n[…]\nPortanto, foi inevitável que algumas palavras da língua japonesa tenham se originado do Português. A maior parte destas palavras referem-se a produtos e costumes que chegaram pela primeira vez ao Japão através dos comerciantes portugueses.\n[…]\nO número de palavras portuguesas no japonês é, segundo Fernando Venâncio Peixoto da Fonseca, mais de quatrocentas; em Tai Whan Kim, na sua obra The portuguese element in Japanese: a critical çurvey with glossary, as palavras japonesas de origem portuguesa que encontramos são centenas. A língua portuguesa era aprendida nos templos budistas japoneses, segundo João Barros, no século XVI e XVII. No auge da influência portuguesa no Japão, eram utilizadas cerca de 4000 palavras de origem portuguesa.\n[…]\nNão há registro de palavras da língua portuguesa que tenham chegado ao Japonês devido à imigração japonesa no Brasil, entretanto o Japonês falado no Brasil incorpora, como esperado, várias palavras do Português falado no Brasil.\n[…]\nO nome dos empanados fritos de legumes  é certamente de origem portuguesa, mas não se origina, provavelmente, da palavra \"tempero\" como se conta popularmente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Alfabeto cirílico",
      "descricao": "Sistema de escrita usado no russo, búlgaro, sérvio e outras línguas, criado no Primeiro Império Búlgaro no século nove."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O alfabeto cirílico, usado no russo e no búlgaro, foi baseado sobretudo nas letras de qual outro alfabeto?",
    "resposta": "Grego",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cyrillic_script"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cyrillic_script",
        "situacao": "ok",
        "texto": "The Cyrillic script (  sih-RIL-ik) is a writing system used for various languages across Eurasia. It is the designated national script in various Slavic, Turkic, Mongolic, Uralic, Caucasian and Iranic-speaking countries in Southeastern Europe, Eastern Europe, the Caucasus, Central Asia, North Asia, and East Asia, and used by many other minority languages.\n[…]\nComputer fonts typically default to the Central/Eastern, Russian letterforms, and require the use of OpenType Layout (OTL) features to display the Western, Bulgarian or Southern, Serbian/Macedonian forms. Depending on the choices made by the (computer) font designer, they may either be automatically activated by the local variant locl feature for text tagged with an appropriate language code, or the author needs to opt-in by activating a stylistic set ss## or character variant cv## feature.\n[…]\nBulgarian\n[…]\nSee also Romanization of Belarusian, Bulgarian, Kyrgyz, Russian, Macedonian and Ukrainian.\n[…]\ntwo most frequent combinations orthographically required to distinguish homonyms in Bulgarian and Macedonian: Ѐ, Ѝ;\n[…]\nMIK – 8-bit native Bulgarian character encoding for use in MS-DOS.\n[…]\nWindows-1251 – 8-bit Cyrillic character encoding established by Microsoft for use in Windows. The simplest 8-bit Cyrillic encoding – 32 capital chars in native order at 0xc0–0xdf, 32 usual chars at 0xe0–0xff, with rarely used \"YO\" characters somewhere else. No pseudographics. Former standard encoding in some Linux distributions for Belarusian and Bulgarian, but currently displaced by UTF-8.\n[…]\nBulgarian Braille\n[…]\nŠmid, Katja (2002). \"Los problemas del estudio de la lengua sefardí\" [The problems of studying the Sephardic language] (PDF). Archived from the original (PDF) on 7 April 2008. in Verba Hispanica. Vol. X. Liubliana: Facultad de Filosofía y Letras de la Universidad de Liubliana. ISSN 0353-9660.."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_cir%C3%ADlico",
        "situacao": "ok",
        "texto": "O alfabeto cirílico, também conhecido como azbuka, é um alfabeto cujas variantes são utilizadas para a grafia de seis línguas nacionais eslavas (bielorrusso, búlgaro, macedônio, russo, sérvio e  ucraniano), além do ruteno e outras línguas extintas. Para além disso, é usado por várias línguas não eslavas faladas na antiga União Soviética, como o mongol, o cazaque, o usbeque, o quirguiz e o tajique,\n[…]\nDesde 2019, cerca de 250 milhões de pessoas na Eurásia usam o cirílico como a escrita oficial de suas línguas nacionais, com a Rússia representando cerca de metade delas. Com a entrada da Bulgária na União Europeia (UE), em 1 de janeiro de 2007, o cirílico tornou-se, ao lado do latino e do grego, o terceiro alfabeto oficial da UE.\n[…]\nPaul Cubberly sugere que Cirilo pode ter codificado e expandido o alfabeto glagolítico, mas teriam sido seus estudantes da Escola Literária de Preslava, notadamente Constantino de Preslava, que adaptaram o cirílico a partir do grego uncial, como um sistema de escrita mais adequado para os textos eclesiásticos. Atribui-se ainda a criação e/ou difusão a membros da Escola Literária de Ocrida, em especial a Clemente de Ocrida.\n[…]\nO que parece certo é que o alfabeto cirílico, nomeado em homenagem a Cirilo, o Filósofo, foi desenvolvido e difundido durante o Primeiro Império Búlgaro, razão pela qual alguns defendem que o cirílico seja chamado de alfabeto búlgaro. A maior parte de suas letras teria derivado do alfabeto grego na escrita uncial, complementado para os sons não encontrados no grego com letras do alfabeto glagolítico, que teriam derivado, por sua vez, da escrita hebraica.\n[…]\nCom a entrada da Bulgária na União Europeia (UE), em 1.º de janeiro de 2007, o cirílico tornou-se, ao lado do latino e do grego, o terceiro alfabeto oficial da UE.\n[…]\ncombinações que são consideradas letras separadas nos seus respectivos alfabetos, como Й, Ў, Ё, Ї, Ѓ, Ќ;",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Aimarás",
      "descricao": "Povo indígena do altiplano andino, na Bolívia, no Peru e no Chile."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os aimarás, povo indígena do altiplano andino, vivem em torno de qual lago, na fronteira entre Bolívia e Peru?",
    "resposta": "Lago Titicaca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aymara_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aymara_people",
        "situacao": "ok",
        "texto": "The Aymara or Aimara (Aymara: aymara, ) people are an Indigenous people in the Andes and Altiplano regions of South America. Approximately 2.3 million Aymara live in northwest Argentina, Bolivia, Chile, and Peru.\n[…]\nThe early history of the Aymara people is uncertain. Various hypotheses have been voiced. Archeological data of the Titicaca basin in the Altiplano (high plain) comes from the site of the ancient city of Tiwanaku. A radiocarbon dating study suggests the ancient city was founded in about 110 AD. Origin legends of the Aymara people in terms of time frame seem inconsistent to archeologists.\n[…]\nThe Aymara people of the Altiplano, the Titicaca basin, and the ancient city of Tiwanaku to the south of Lake Titicaca, also encountered the Inca civilisation prior to the rise of the Inca Empire. One of the Inca origin stories tells of Manco Capac and Mama Occlo being brought up from the waters of Lake Titicaca by the Sun God to create an Inca dynasty.\n[…]\nThe border between Peru and Bolivia transects Lake Titicaca. Chile denied Bolivia of its only seaport at Arica.\n[…]\nThe Aymara people's language is Aymara. It is spoken from the north of Lake Titicaca to the south of Lake Poopó. Aymara is a third official language in Peru after Spanish and Quechua. It is spoken by 1.6% of the Peruvian population. Aymara has no distant language relative but there are some nearby similar languages. Quechua has some overlap with Aymara brought by contact. There are two closely related languages called Jaqaru and Kawki.\n[…]\nForbes, David; \"On the Aymara Indians of Bolivia and Peru\", The Journal of the Ethnological Society of London, Vol 2 (1870), 193–305.\n[…]\nHarry Tschopik Jr., The Aymara of Chucuito, Peru, 1951."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aimar%C3%A1s",
        "situacao": "ok",
        "texto": "Os aimaras ou aimará (em aimara: aimara ), também conhecidos como quollas ou kollas. ( em quíchua: Qulla, do sul)  é um povo estabelecido desde a era pré-colombiana na Bolívia, no sul do Peru e no norte da Argentina e do Chile.\n[…]\nHistoriadoras das tradições Aimarás como Thérèse Bouysse-Cassagne e Teresa Gisbert, além do linguista Alfredo Torero, postulam uma ligação com a política pré-inca Tiwanaku. Os Aimarás vivem em sua região há séculos. Sillustani é um cemitério pré-histórico Qulla no Peru, com elaboradas chullpas de pedra.\n[…]\nNa Bolívia existem cerca de 1.200.000 falantes do idioma aimara, sendo a forma falada na capital La Paz considerada a forma mais pura e estruturada da língua, havendo concentrações nos departamentos de Oruro e Chuquisaca.\n[…]\nNo Peru os falantes da língua aimara somam mais de 300.000 pessoas, o que leva a supor que o grupo étnico é bem maior. Aí estão mais concentrados no departamento de Puno (perto do Lago Titicaca), nas regiões Moquegua, Arequipa e Tacna.\n[…]\nNa atualidade, os aimara falantes não têm chance de espalhar mais sua língua pelas regiões perto do Lago Titicaca porque não se usa como língua comercial ou de trabalho. O futuro do povo aimara é incerto, já que eles sofrem discriminação e o governo do Peru, por exemplo, não lhes dá força para se desenvolver melhor.\n[…]\nA situação é diferente na Bolívia onde o povo aimara está começando a ressurgir, com líderes como Evo Morales, que faz campanhas sociais para melhorar o desenvolvimento dos povos e do principal cultivo: a coca.\n[…]\nOs aymarás acreditavam que, antes havia somente trevas, até que um Deus denominado como \"Pusica’ka\", criou a luz, a lua, o sol, o céu, a terra, os homens e as demais coisas visíveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Uigures",
      "descricao": "Povo de língua túrquica e maioria muçulmana da Ásia Central."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os uigures, povo de língua túrquica e maioria muçulmana, vivem principalmente em qual região do oeste da China?",
    "resposta": "Xinjiang",
    "distratores": [
      "Tibete",
      "Mongólia Interior",
      "Manchúria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Uyghurs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Uyghurs",
        "situacao": "ok",
        "texto": "The Uyghurs, alternatively spelled Uighurs, Uygurs, or Uigurs, are a Turkic ethnic group originating from and culturally affiliated with the general region of Central Asia and East Asia. They speak Uyghur, a Karluk language that shares the same origin with Uzbek. The Uyghurs are recognized as the titular nationality of the Xinjiang Uyghur Autonomous Region in Northwest China. They are one of China\n[…]\nIn the early 20th century, some Uyghurs had studied in Twelver Shia seminaries in Najaf and Qom and later returned to Xinjiang as Twelver Shia Muslims. During the Republican and Maoist eras in China, Shia Muslims were marginalized both nationally by the Han Chinese authorities, and regionally by Sunni Uyghur religious elites. Twelver Shia Islam was historically associated with Persians or Tajiks, limiting its adoption among Uyghurs. Nevertheless, many Uyghurs historically converted to Shia Islam.\n[…]\nIn the early 21st century, a new trend of Islam, Salafism, emerged in Xinjiang, mostly among the Turkic population including Uyghurs, although there are Hui Salafis. These Salafis tended to demonstrate pan-Islamism and abandoned nationalism in favor of a caliphate to rule Xinjiang in the event of independence from China. Many Uyghur Salafis have allied themselves with the Turkistan Islamic Party in response to growing repression of Uyghurs by China.\n[…]\nIn the 1990s, many Uyghurs in parts of Xinjiang could not speak Mandarin Chinese.\n[…]\nMuqam is the classical musical style. The 12 Muqams are the national oral epic of the Uyghurs. The muqam system was developed among the Uyghur in northwestern China and Central Asia over approximately the last 1500 years from the Arabic maqamat modal system that has led to many musical genres among peoples of Eurasia and North Africa. Uyghurs have local muqam systems named after the oasis towns of Xinjiang, such as Dolan, Ili, Kumul and Turpan."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Uigures",
        "situacao": "ok",
        "texto": "Os uigures (singular: uigur ou uigure) são um povo de origem turcomena que habita principalmente a Ásia Central. Os uigures são uma das 56 etnias oficialmente reconhecidas pela República Popular da China, consistindo em, aproximadamente, 8 680 000 pessoas, de acordo com o recenseamento chinês de 2004. Sua língua é o uigur.\n[…]\nNa atualidade, os uigures vivem principalmente na região autônoma chinesa de Sinquião, no extremo oeste do país. Há, também, grandes comunidades uigures no Paquistão, Cazaquistão, Quirguistão, Mongólia, Uzbequistão e Turquia, além de pequenas comunidades em bairros de grandes metrópoles como Pequim e Xangai, na República Popular da China e mesmo Toronto e Vancouver, no Canadá.\n[…]\nDesde 2017, o Partido Comunista Chinês e o governo chinês colocaram até 1,5 milhão de minorias étnicas, especialmente uigures, em campos de internamento em Xinjiang. Alguns reconheceram essas ações como o genocídio uigur.\n[…]\nDesde 2014, os Uigures em Xinjiang foram afetados por extensos controles e restrições impostos pelo governo chinês em suas vidas religiosas, culturais, econômicas e sociais. O governo chinês ampliou a vigilância policial para monitorar sinais de \"extremismo religioso\", que incluem possuir livros banidos, cultivar barba, ter um tapete de oração ou parar de fumar ou beber. O governo também instalou câmeras nas casas de cidadãos privados.\n[…]\nEm agosto de 2022, a Organização das Nações Unidas (ONU) divulgou um relatório alegando que a repressão da China em Xinjiang pode se configurar crimes contra a humanidade contra os Uigures, o que inclui tortura física e psicológica, trabalho forçado, deslocamento em massa forçado, esterilização forçada e separação de crianças de seus pais. O relatório foi criticado por alguns ativistas por não classificar os crimes como genocídio.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Guarani-kaiowá",
      "descricao": "Povo indígena guarani do sul de Mato Grosso do Sul e do Paraguai, conhecido pela luta pela demarcação de terras."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os guarani-kaiowá, povo indígena conhecido pela luta por terras, vivem principalmente em qual estado brasileiro?",
    "resposta": "Mato Grosso do Sul",
    "fonte": [
      "https://pib.socioambiental.org/pt/Povo:Guarani_Kaiowá"
    ],
    "trechos": [
      {
        "url": "https://pib.socioambiental.org/pt/Povo:Guarani_Kaiowá",
        "situacao": "inacessivel",
        "texto": ""
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Nheengatu",
      "descricao": "Língua de base tupi, também chamada língua geral amazônica, ainda falada na região do rio Negro."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O nheengatu, língua de base tupi espalhada na Amazônia colonial, ainda é falado às margens do rio Negro, em qual estado brasileiro?",
    "resposta": "Amazonas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nheengatu_language",
      "https://pt.wikipedia.org/wiki/Língua_nheengatu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nheengatu_language",
        "situacao": "ok",
        "texto": "Nheengatu, also known as Modern Tupi, Língua Geral Amazônica (Amazonian General Language), and Amazonic Tupi, is a Tupi–Guarani language. It is spoken throughout the Rio Negro region among the Baniwa, Baré, and Warekena people in the municipality of São Gabriel da Cachoeira, and the state of Amazonas, Brazil.\n[…]\nThe name of the language derives from the words nhẽẽga (meaning \"language\" or \"word\") and katu (meaning \"good\"). Nheengatu is referred to by a wide variety of names in literature, including Nhengatu, Tupi Costeiro, Geral, Yeral (in Venezuela), Tupi Moderno, Nyengato, Nyengatú, Waengatu, Neegatú, Is'engatu, Língua Brasílica, Tupi Amazônico, Ñe'engatú, Nhangatu, Inhangatu, Nenhengatu, Yẽgatú, Nyenngatú, Tupi, and Lingua Geral.\n[…]\nIt is also commonly referred to as the Língua geral amazônica (LGA) in Brazil.\n[…]\nSpeakers of other languages vastly outnumbered the Portuguese settlers in the Amazon, to the point that the Portuguese themselves adapted to the native language. A Portuguese colonist stated: \"To speak or converse in the colony of Grão Pará, I had to use Nheengatu; if not, I would be talking to myself, since no one used Portuguese, except in the government palace in Belém and among the Portuguese themselves.\"\n[…]\nNheengatu is spoken in the Alto Rio Negro region, in the state of Amazonas, in the Brazilian Amazon and in neighboring parts of Colombia and Venezuela. There are potentially as many as 19,000 Nheengatu speakers worldwide, although some journalists have reported as many as 30,000.\n[…]\n1910 ramé, mairamé aé uriku 23 akaiú, aé uiupiru ana uuatá-uatá Amazônia rupi, upitá mími musapíri akaiú pukusaua. Aé ukunheséri ana siía mira upurungitá uaá nheengatu, asuí aé umunhã nheengarisaua-itá marandua-itá irũmu Barbosa Rodrigues umupinima ana uaá Poranduba Amazonense resé.\n[…]\nLíngua Geral"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_nheengatu",
        "situacao": "ok",
        "texto": "O nheengatu (nheengatu: [ɲe.ʔẽ.ɡa.ˈtu], português: [ɲe.ẽ.ɡa.ˈtu]), também conhecido como tupi moderno, é uma língua indígena pertencente à família tupi-guarani, mais especificamente do tronco tupi. Esse idioma, surgido no século XIX, tem origem na língua geral amazônica, que, por sua vez, proveio do tupi antigo.\n[…]\nÉ possível a existência de cerca de 19 000 falantes de nheengatu em todo o mundo, de acordo com The Ethnologue (2005), embora alguns jornalistas tenham relatado até 30 000. A linguagem recuperou recentemente algum reconhecimento e destaque depois de ter sido suprimida por muitos anos. É falado na região do Alto Rio Negro, no estado do Amazonas, na Amazônia brasileira e em partes vizinhas da Colômbia e Venezuela.\n[…]\nSabe-se que o nheengatu teve origem no tupinambá amazônico, variante tupi localizada mais precisamente no Maranhão, que durante a colonização portuguesa, fez parte do estado do Grão Pará e Maranhão. Desde então, se entende o nheengatu também como cultura maranhense. O que poucos citam é a presença do nheengatu no nordeste brasileiro propriamente falando. Principalmente Ceará, Piauí e Rio Grande do Norte.\n[…]\nNAVARRO, Eduardo de Almeida (2011). «Curso de língua geral (nheengatu ou tupi moderno) – A língua das origens da civilização amazônica». São Paulo: Edição do autor. ISBN 978-85-912620-0-7  .\n[…]\nSYMPSON, Pedro Luís. Gramática da língua brasileira: brasílica, tupi ou nheengatu. [S.l.: s.n.] .\n[…]\nNAVARRO, Eduardo de Almeida (2016). «Curso de língua geral (nheengatu ou tupi moderno) – A língua das origens da civilização amazônica 2ª edição corrigida e aperfeiçoada» (PDF). São Paulo: Edição do autor. ISBN 978-85-912620-2-1\n[…]\nCurso de língua geral (nheengatu ou tupi moderno): a língua das origens da civilização amazônica, disponibilizado por seu próprio autor"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Belize",
      "descricao": "País da América Central, no litoral do Caribe, vizinho do México e da Guatemala."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Cercado de vizinhos que falam espanhol, Belize é o país da América Central com o inglês como língua oficial. Por quê?",
    "resposta": "Foi colônia britânica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Belize"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Belize",
        "situacao": "ok",
        "texto": "Belize is a country on the north-eastern coast of Central America. It is bordered by Mexico to the north, the Caribbean Sea to the east, and Guatemala to the west and south. It also shares a maritime boundary with Honduras to the southeast. Part of the Caribbean region, Belize is a member of the Caribbean Community (CARICOM) and the Commonwealth Caribbean, the historical British West Indies.\n[…]\nThe importation of Chinese workers to British Honduras was a response to economic shifts in the mid-19th century. As logwood and mahogany production declined, sugarcane plantations became of increasing importance. Recruitment of workers from China was facilitated by the colonial governor John Gardiner Austin, who had previously served as a labour broker in Xiamen, Fujian on China's southeast coast. 474 Chinese workers thus arrived in British Honduras in 1865.\n[…]\nBecause of conflicts in neighbouring Central American nations, refugees from El Salvador, Guatemala, and Honduras have fled to Belize in significant numbers from the 1980s onward, and have significantly added to Belize's Hispanic population. This has significantly changed the country's ethnic makeup. In the 2020 US Census Data, Belizeans made the top 5, ranking at number 4, of largest \"Some Other Race Alone\" or \"Some Other Race Alone or in Any Combination\" group.\n[…]\nEmigration from Belize has tended to be concentrated on the United States, and sometimes Canada or other English-speaking countries. The majority of immigrants to Belize are from other Central American countries like Nicaragua, El Salvador, and Honduras, as Belize has a fairly welcoming immigration policy to help these newcomers assimilate. Belizeans have historically moved to the US and Canada mostly in search of better educational opportunities, family reunions, and economic prospects.\n[…]\nOutline of Belize\n[…]\nBelize. The World Factbook. Central Intelligence Agency."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Belize",
        "situacao": "ok",
        "texto": "Belize (pronunciado em português europeu: [bɨˈlizɨ]; pronunciado em português brasileiro: [bɛˈlizi, beˈlizi]; pronunciado em inglês: [bəˈliːz] () é um país situado na costa nordeste da América Central. Faz fronteira com o México a norte, com o Mar das Caraíbas a leste e com a Guatemala a oeste e sul. Também partilha uma fronteira marítima com as Honduras a sudeste. Belize é membro da Comunidade da\n[…]\nTornou-se uma colónia britânica em 1840 e uma colónia da Coroa em 1862. Belize alcançou a independência do Reino Unido em 21 de setembro de 1981. É o único país da América Central continental que é um reino da Commonwealth, tendo o Rei Carlos III como monarca e chefe de Estado, representado por um governador-geral.\n[…]\nEntre 1763 e 1783, a Espanha fez um tratado que deu aos britânicos o direito de explorar a produção de madeira, mas a área permaneceu sob domínio espanhol. Em 1798, a Espanha tentou remover os britânicos de Belize à força. Durante a Guerra de Casta de Iucatã (1847–1853), milhares de imigrantes de língua espanhola fugiram para o país. A área tornou-se oficialmente uma colônia britânica em 1862 com o nome de Honduras Britânicas.\n[…]\nBelize\n[…]\nQuando Belize era uma colônia britânica o espanhol era proibido nas escolas, mas desde então tornou-se amplamente falado, principalmente no oeste e no norte do país. Aproximadamente 52,9% dos belizenhos se autodeclaram mestizos, latinos ou hispânicos. O espanhol é falado como língua materna por cerca de 56,6% da população e é ensinado nas escolas para crianças que não o têm como primeira língua. O espanhol também é falado como segunda língua por outros 36%.\n[…]\nOs vários grupos maia ainda falam três línguas maias. Algumas comunidades do sul do Belize falam principalmente garífuna.\n[…]\nNo Belize falam-se as línguas inglesa e espanhola. O país já foi uma colônia britânica, por isso fala-se inglês com sotaque britânico.\n[…]\nAmérica Central",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Espanhol rioplatense",
      "descricao": "Variedade do espanhol falada em torno do rio da Prata, em Buenos Aires e em Montevidéu."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O espanhol falado em Buenos Aires tem uma entonação que lembra a do italiano. A que isso se atribui?",
    "resposta": "À imigração italiana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rioplatense_Spanish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rioplatense_Spanish",
        "situacao": "ok",
        "texto": "Rioplatense Spanish ( REE-oh-plə-TEN-say; Spanish: [ˌrioplaˈtense]), also known as Rioplatense Castilian or River Plate Spanish, is a variety of Spanish originating in and around the Río de la Plata Basin, and now spoken throughout most of Argentina and Uruguay. This dialect is widely recognized throughout the Hispanosphere due to its strong influence from Italian languages, a result of significan\n[…]\nRioplatense is the predominant Spanish variety spoken in both Argentina and Uruguay. In the former, it is primarily centered in major urban areas such as Buenos Aires, Rosario, Santa Fe, La Plata, Mar del Plata and Bahía Blanca—along with their surrounding suburbs and the regions connecting them, whereas in the latter, it is spoken nationwide, where it takes the form of Uruguayan Spanish.\n[…]\nSeveral languages, especially Italian, influenced the historical criollo Spanish of the region because of the diversity of the settlers and immigrants to Argentina and Uruguay:\n[…]\n1870–1890: mainly Northern Italian, Spanish, Basque, and Galician speakers, with some others from France, Germany, and more European countries.\n[…]\nRioplatense Spanish, especially the speech of all of Uruguay and the Buenos Aires area in Argentina, has intonation patterns that resemble those of Italian dialects. This correlates well with immigration patterns, since both Argentina and Uruguay have received large numbers of Italian settlers since the 19th century.\n[…]\nAccording to a study conducted by National Scientific and Technical Research Council of Argentina, Buenos Aires and Rosario residents speak with an intonation most closely resembling Neapolitan. The researchers note this as a relatively recent phenomenon, starting in the beginning of the 20th century with the main wave of Southern Italian immigration.\n[…]\nCocoliche, a pidgin of Italian and Spanish formerly spoken by Italians in Greater Buenos Aires."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Espanhol_rioplatense",
        "situacao": "ok",
        "texto": "O espanhol rio-pratense é uma variedade do espanhol falada principalmente nos arredores do rio da Prata, particularmente na região da província de Buenos Aires, na província da Santa Fé, na província da Entre Ríos e no Uruguai. É grande a influência do lunfardo na composição do léxico e sobretudo nas gírias usadas pelos falantes dessa variedade. Com localismos, é também o espanhol falado no resto \n[…]\nDiferencia-se do castelhano do resto da América Latina principalmente porque no lugar do \"tú\" (\"tuteo\") utiliza-se o \"vos\" (\"voseo\"). As letras \"ll\" e \"y\" caracterizam-se por serem pronunciadas como o som do \"ch\" ou \"j\" da língua portuguesa.\n[…]\nO espanhol rio-pratense também tem como característica a influência dos imigrantes italianos que se fixaram na região. Muitas palavras italianas (ou derivadas do italiano) são utilizadas, além da fala ter uma marcada cadência italiana. O uso da interjeição \"che\" também é característico da região.\n[…]\nCastelhano (Espanha)\n[…]\nCastelhano (Espanha)\n[…]\nImigração italiana na Argentina\n[…]\nImigração italiana no Uruguai\n[…]\nDicionário de variantes do espanhol\n[…]\nConheça os diferentes dialetos do idioma espanhol",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Alfabeto havaiano",
      "descricao": "Alfabeto latino adaptado por missionários no século dezenove para escrever a língua havaiana."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Com só cinco vogais e poucas consoantes, o alfabeto havaiano é um dos menores do mundo. Quantas letras ele tem?",
    "resposta": "13",
    "distratores": [
      "9",
      "18",
      "21"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hawaiian_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hawaiian_alphabet",
        "situacao": "ok",
        "texto": "The Hawaiian alphabet (in Hawaiian: ka pīʻāpā Hawaiʻi) is an alphabet used to write Hawaiian. It was adapted from the English alphabet in the early 19th century by American missionaries to print a bible in the Hawaiian language.\n[…]\nThe current official Hawaiian alphabet consists of 13 letters: five vowels (A a, E e, I i, O o, and U u) and eight consonants (H h, K k, L l, M m, N n, P p, W w, and ʻ). Alphabetic order differs from the normal Latin order in that the vowels come first, then the consonants. The five vowels with macrons (kahakō)– Ā ā, Ē ē, Ī ī, Ō ō, Ū ū – are not treated as separate letters, but are alphabetized immediately after unaccented vowels."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_havaiano",
        "situacao": "ok",
        "texto": "O alfabeto havaiano, chamado ka pī‘āpā Hawai‘i no idioma local, é uma variedade do alfabeto latino criada no século XIX e utilizada para escrever na língua havaiana.\n[…]\nEle consiste de 12 letras e um símbolo, o que o torna um dos menores alfabetos do mundo (o alfabeto Rotokas tem uma letra a menos; a língua Pirahã, duas). Seu inventário consiste de consoantes /p/, /k/, /‘/ or /'/ (glottal stop) ou ‘okina), /m/, /n/, /w/ (às vezes representada como /v/), /l/, /h/, e as  vogais /a/, /e/, /i/, /o/, /u/. O símbolo, chamado kahakō em Havaiano, é usado com vogais e marca o  comprimento de uma vogal.\n[…]\nAo contrário de crendices populares, ele não indica tonicidade, apesar de, sob as regras do Havaiano das ruas, uma sílaba com uma vogal longa sempre será tônica. Se curtas ou longas, a pronúncia das vogais não se altera.\n[…]\nPara exemplos do uso de ‘okina considere a palavra \"Hawaii\", em sua própria forma aparecendo como Hawai‘i, ou \"Oahu\", que é O‘ahu. As palavras são pronunciadas na realidade (usando o alfabeto internacional de fonética): /ha.ˈvai.ʔi/ e /o.ˈʔa.hu/, com uma  parada glotal onde o ‘okina é escrito.\n[…]\nHá somente 162 possíveis sílabas em Havaiano. A maioria das línguas tem um repertório muito maior.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Alfabeto árabe",
      "descricao": "Sistema de escrita da língua árabe, também usado no persa e no urdu, escrito da direita para a esquerda."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas letras básicas tem o alfabeto árabe?",
    "resposta": "28",
    "distratores": [
      "22",
      "26",
      "33"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Arabic_alphabet",
      "https://pt.wikipedia.org/wiki/Alfabeto_árabe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Arabic_alphabet",
        "situacao": "ok",
        "texto": "The Arabic alphabet, or the Arabic abjad, is the Arabic script as specifically codified for writing the Arabic language. It is a unicameral script written from right-to-left in a cursive style, and includes 28 letters, of which most have contextual forms. The Arabic alphabet is an abjad, meaning that the letters only record consonants; due to its optional use of diacritics to notate vowels, it is \n[…]\nThe basic Arabic alphabet contains 28 letters, each of which behaves either as a full-fledged letter or as a diacritic. Forms using the Arabic script to write other languages added and removed letters: for example ⟨پ⟩ is often used to represent /p/ in adaptations of the Arabic script."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_árabe",
        "situacao": "ok",
        "texto": "O alfabeto árabe (em árabe: أبجدية عربية) é o principal abjad (ou consonantário) usado para representar a língua árabe, além de diversos outros idiomas, como o persa, algumas línguas berberes, o turco tomano, o urdu e o uigur. É o segundo alfabeto mais utilizado no mundo, atrás somente do alfabeto latino, e possui 28 letras. O alfabeto árabe é escrito em um estilo cursivo e não faz a distinção ent\n[…]\nAté 1923, era usado também para escrever o turco, quando foi substituído pelo alfabeto latino. A sua grande difusão deve-se principalmente ao facto de o Corão, o livro sagrado do Islão, estar escrito em alfabeto árabe. Esse alfabeto é escrito da direita para a esquerda, assim como o alfabeto hebraico.\n[…]\nApesar de ser denominado \"alfabeto\", o termo mais correto para designar a escrita árabe é \"abjad\" (nome derivado das cinco primeiras letras que compunham a antiga organização do alfabeto árabe: a - b - j - d), ou seja, cada símbolo representa uma consoante. A representação das vogais é feita através de diacríticos colocados sobre ou sob as letras.\n[…]\nPor exemplo, a palavra para \"peixe\" em árabe é lida samak e escrita no alfabeto árabe somente com as letras que correspondem, no alfabeto latino, a SMK (سمك), o que torna difícil saber suas vogais sem conhecer a palavra, a não ser que estejam presentes na escrita os símbolos indicadores de vogais, denominados ḥarakāt (سَمَك; no caso, cada linha diagonal (◌َ), chamada fatḥa, representa a vogal /a/).\n[…]\nNo alfabeto árabe, há dois tipos de vogais: vogais longas e vogais breves. As vogais longas são as três vogais do alfabeto, identificados na transliteração com um traço sobreposto nas letras. As vogais são: ﺍ ('ālif)  = ā, ﻮ (ūāū) = ū e ﻱ (īā') = ī. As vogais breves são sinais colocados sobre ou sob as letras. Os sinais são: َ (fatHa) = a ُ (damma) = u e ِ (kasra) = i. Os sinais só aparecem no árabe clássico."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Kasato Maru",
      "descricao": "Navio que trouxe ao porto de Santos a primeira leva oficial de imigrantes japoneses ao Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano o navio Kasato Maru chegou a Santos com os primeiros imigrantes japoneses do Brasil?",
    "resposta": "1908",
    "distratores": [
      "1898",
      "1914",
      "1925"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Kasato_Maru",
      "https://pt.wikipedia.org/wiki/Imigração_japonesa_no_Brasil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru (Kasato Maru (笠戸丸)) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.\n[…]\nO Kasato Maru foi originalmente um navio russo chamado Kazan que foi utilizado como navio-hospital durante a Guerra Russo-Japonesa. No final da guerra, passou para os japoneses como indenização de guerra ou capturado. Foi adaptado para ser navio de passageiros e transportou os soldados que tinham combatido na Manchúria de volta para o Japão.\n[…]\nEm seguida, passou a ser utilizado para transporte de imigrantes japoneses para o Havaí, em 1906, e para o Peru e o México, em 1907.\n[…]\nEm 1908, trouxe o primeiro grupo oficial de imigrantes japoneses para o Brasil. A viagem começou no porto de Kobe e terminou, 52 dias depois, no Porto de Santos em 18 de Junho de 1908. Vieram 165 famílias (781 pessoas) que foram trabalhar nos cafezais do oeste paulista.\n[…]\nAlguns imigrantes japoneses chegaram ao Brasil antes do Kasato Maru, e até chegaram a fundar uma colônia agrícola na fazenda Santo Antônio, no atual município de Conceição de Macabu (então distrito de Macaé), no estado do Rio de Janeiro. Entretanto, foi a chegada deste primeiro grupo trazido pelo Kasato Maru que iniciou um fluxo contínuo de imigração de japoneses para o Brasil.\n[…]\nDepois de algum tempo, Kasato Maru foi transformado em navio cargueiro e ainda voltou ao Brasil uma segunda e última vez, em 1917, transportando cargas a serviço da Osaka Shosen Kaisha (OSK) Line.\n[…]\nAfrica Maru\n[…]\nBuenos Aires Maru\n[…]\nRio de Janeiro Maru\n[…]\nMedia relacionados com Kasato Maru no Wikimedia Commons\n[…]\n«História do navio Kasato Maru»"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imigração_japonesa_no_Brasil",
        "situacao": "ok",
        "texto": "Imigração japonesa no Brasil teve como ápice o período entre 1908 e 1960, com a maior concentração entre 1926 e 1935. Em 2022, o Ministério das Relações Exteriores do Japão afirmou haver dois milhões de descendentes de japoneses no país, fazendo com que o Brasil tenha a maior população de origem japonesa fora do Japão. Porém, em número de cidadãos japoneses, o Brasil ocupava o sétimo lugar em 2023\n[…]\nA imigração japonesa no Brasil teve início oficialmente em 18 de junho de 1908, quando o navio Kasato Maru aportou no porto de Santos, trazendo 781 japoneses para trabalharem nas fazendas de café do interior paulista. Por conta disso, o dia 18 de junho foi estabelecido como o dia nacional da imigração japonesa. O fluxo cessou quase que totalmente em 1973, com a vinda do último navio de imigração, o Nippon Maru.\n[…]\nO Kasato Maru é considerado pela historiografia oficial como o primeiro navio a aportar no Brasil com imigrantes japoneses. A viagem de 52 dias começou no porto de Kobe e terminou no Porto de Santos em 18 de Junho de 1908. Vieram 781 pessoas, sendo 186 mulheres que compunham 165 famílias. Havia poucas mulheres, pois, em sua grande maioria, os grupos tinham como núcleo marido e mulher e o restante era formado por parentes ou até mesmo conhecidos que não eram membros da família.\n[…]\nO recebimento não foi especialmente caloroso. Apenas um jornalista elogiou os imigrantes dizendo que eles eram \"limpos\", coisa não muito comum entre os europeus naquela época. A revista carioca \"O Malho\" em sua edição de 5 de dezembro de 1908 publicou uma charge de imigrantes japoneses com a seguinte legenda: \"O governo de São Paulo é teimoso. Após o insucesso da primeira imigração japonesa, contratou 3 000 amarelos. Teima pois em dotar o Brasil com uma raça diametralmente oposta à nossa\".\n[…]\nKasato Maru\n[…]\n«Centenário da Imigração Japonesa no Brasil (1908-2008)»\n[…]\n«100 Anos de Imigração Japonesa no Brasil»"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua brasileira de sinais, usada pela comunidade surda do Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano uma lei federal reconheceu a Libras como meio legal de comunicação e expressão dos surdos no Brasil?",
    "resposta": "2002",
    "distratores": [
      "1988",
      "1996",
      "2010"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_brasileira_de_sinais",
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nAtravés de diversos movimentos e muita pesquisa na área, foi legitimada como língua a comunicação gestual entre surdos. Foi apenas no fim do século XX  que os movimentos se intensificaram querendo a oficialização da Língua Brasileira de Sinais, em 1993 o projeto de lei entrou na longa batalha para a regulamentação da Libras no país.\n[…]\nApenas no ano de 2002 a língua brasileira de sinais foi reconhecida como meio legal de comunicação e expressão, através da Lei 10.436, de 24 de abril de 2002, apesar de não poder substituir a modalidade escrita da língua portuguesa. Em 2003 foi aprovada a Portaria nº 3.284, que dispõe sobre a acessibilidade dos surdos dentro das universidades brasileiras. No ano seguinte, em 2004, foi ratificado o Decreto nº 5.296, o qual estabeleceu mais prerrogativas legais de acessibilidade.\n[…]\nA Libras foi reconhecida como a língua oriunda das comunidades surdas do país, através da lei nº10.436/2002, garantido o seu direito de reconhecimento como língua de manifestação e expressão das pessoas surdas no acesso à educação, à saúde, à cultura e ao trabalho.\n[…]\nLíngua de sinais\n[…]\nLíngua de sinais kaapor brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nA strong sign language law was passed by the National Congress of Brazil on April 24, 2002, and (in 2005) is in the process of being implemented. The law mandates the use of Brazilian Sign Language in education and government services.\n[…]\nIn addition to being recognized nationally since 2002, Libras has also been made official at the municipal level in Belo Horizonte, Curitiba, Ouro Preto and Salvador. In Rio de Janeiro, the teaching of Libras was made official in the curriculum of the municipal school system.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.73 — 2026-10-19**
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
- no máximo **3 perguntas por âncora** no banco inteiro, somando texto e figura, e no máximo **2 com figura**. As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
