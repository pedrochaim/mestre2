Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Países e Capitais** (tema **Geografia**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Jacarta",
      "descricao": "Maior cidade da Indonésia, na costa noroeste da ilha de Java."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Jacarta, a maior cidade da Indonésia, fica em qual das milhares de ilhas do país?",
    "resposta": "Java",
    "fonte": [
      "https://en.wikipedia.org/wiki/Jakarta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jakarta",
        "situacao": "ok",
        "texto": "Jakarta, officially the Special Capital Region of Jakarta, is the capital and largest city of Indonesia, with administrative status equivalent to a province. It lies on the northwestern coast of Java, borders the provinces of West Java and Banten, and faces the Java Sea to the north. Jakarta itself covers about 662 square kilometres (256 square miles), but the wider Jakarta metropolitan area—local\n[…]\nTomé Pires described it as Sunda's most important trading port, drawing ships from Sumatra, Malacca, Java and elsewhere.\n[…]\nWayang orang Bharata stages regular performances at the Bharata Purwa theatre in Senen, while Aula Simfonia Jakarta is a major venue for orchestral and Western classical music and is regularly used by professional ensembles. Taman Ismail Marzuki in Menteng hosts art exhibitions, dance and music performances, cultural programmes, and astronomy activities linked to the Jakarta Planetarium. Jakarta also hosts recurring cultural events, such as Jakarta Fashion Week and the Java Jazz Festival.\n[…]\nPrinted news in Jakarta dates back to colonial Batavia, where Bataviase Nouvelles first appeared in 1744 and seem to have circulated mainly among VOC employees and Europeans. Jakarta is home to the headquarters of most kinds of Indonesian media organisation. The concentration differs by sector, with television ownership focused particularly in the capital and radio and newspaper ownership more concentrated in Java generally.\n[…]\nJakarta is a special autonomous region at the provincial level. Formerly a municipality of the West Java province, Jakarta became a \"first-level region\" (Daerah Tingkat I) in 1957, and later acquired the status of a Special Capital Region (Daerah Khusus Ibukota, DKI) in 1961. Under the city's 2024 special-region law, Jakarta remains the national capital until a presidential decree formalises the transfer to Nusantara.\n[…]\nOutline of Jakarta"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jacarta",
        "situacao": "ok",
        "texto": "Jacarta (pronunciado em português europeu: [ʒɐˈkaɾtɐ]; pronunciado em português brasileiro: [ʒaˈkaʁtɐ, ʒaˈkaɾtɐ]; em língua indonésia: Jakarta, pronunciado: [dʒaˈkarta]) é a capital e maior cidade da Indonésia. Situa-se na ilha de Java e conta com cerca de 35,93 milhões de habitantes na sua área metropolitana, sendo a segunda maior cidade do mundo, atrás de Tóquio. Foi fundada em 1619 pelos neerla\n[…]\nJacarta é uma das cidades mais antigas continuadamente habitadas do Sudeste da Ásia. Estabelecida no século IV como Sunda Kelapa, era um importante porto do Reino de Sonda. Em um certo ponto, era a de facto capital das Índias Orientais Neerlandesas. Jacarta era oficialmente uma cidade dentro de Java Ocidental até 1960, quando foi feita oficialmente como capital do país com status especial provinciano.\n[…]\nJacarta fica na costa noroeste da ilha de Java, junto ao rio Ciliwung na baía de Jacarta, que é uma entrada do mar de Java. A parte norte de Jacarta assenta sobre uma terra plana, aproximadamente a 8m acima do nível do mar, o que contribui para que se formem as habituais inundações. A zona sul da cidade é mais montanhosa. Há aproximadamente 13 rios que correm em Jacarta, sobretudo das partes montanhosas do sul da cidade para o norte e mar de Java.\n[…]\nO rio mais importante é o Ciliwung, que divide a urbe em duas zonas: leste e oeste. Jacarta limita geograficamente com a província de Java Ocidental a leste e com Banten a oeste.\n[…]\nJacarta do Norte (Jakarta Utara) é a única cidade de Jacarta que é banhada pelo mar (Mar de Java). É o local do porto de Tanjung Priok. Indústrias de grande e médio porte estão concentradas nesta cidade. Em Jacarta do Norte se localiza a Antiga Jacarta, conhecida anteriormente como Batavia desde o século XVII, antigo centro da atividade comercial da Companhia Holandesa das Índias Orientais na Índias Orientais Neerlandesas.\n[…]\nJacarta tem as seguintes cidades irmãs:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Díli",
      "descricao": "Capital e maior cidade do Timor-Leste."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A cidade de Díli é a capital de qual país de língua portuguesa?",
    "resposta": "Timor-Leste",
    "distratores": [
      "Cabo Verde",
      "Guiné-Bissau",
      "São Tomé e Príncipe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dili"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dili",
        "situacao": "ok",
        "texto": "Dili (Portuguese: Díli) is the capital and largest city of Timor-Leste. It lies on the northern coast of the island of Timor, in a small area of flat land hemmed in by mountains. The climate is tropical with distinct wet and dry seasons.\n[…]\nThe city has served as the economic hub and chief port of what is now Timor-Leste since its designation as the capital of Portuguese Timor in 1769. It also serves as the capital of the Dili Municipality, which includes some rural subdivisions in addition to the urban ones that make up the city itself. Dili's growing population is relatively youthful, being mostly of working age. The local language is Tetum; however, residents include many internal migrants from other areas of the country.\n[…]\nThe primary local language is Tetum, which was promoted during Portuguese rule and has become an official language of the country. Speakers from the other languages of Timor-Leste are present in the city, where the official language of Portuguese and the working languages of English and Indonesian are also spoken. A dialect of Malay-based creole called Dili Malay is spoken by perhaps 1,000 residents with ancestral links to Alor Island.\n[…]\nThis is the only functioning international airport in Timor-Leste, though there are airstrips in Baucau, Suai and Oecusse used for domestic flights. Until recently, Dili's airport runway has been unable to accommodate aircraft larger than the Boeing 737 or C-130 Hercules, but in January 2008, the Portuguese charter airline EuroAtlantic Airways operated a direct flight from Lisbon using a Boeing 757, carrying 140 members of the Guarda Nacional Republicana.\n[…]\nCoimbra, Portugal (2002)\n[…]\nLisbon, Portugal (2001)\n[…]\nList of people from Dili\n[…]\nDili travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/D%C3%ADli",
        "situacao": "ok",
        "texto": "Díli (em tétum:  Dili) é a capital de Timor-Leste, sede do município homónimo e de um dos três bispados do país: a Diocese de Díli. Situa-se na costa norte da ilha de Timor, a mais oriental das Pequenas Ilhas da Sonda.\n[…]\nA primeira capital do Timor Português foi Lifau, situada a cinco quilómetros a oeste de Pante Macassar, no enclave de Oecusse. Foi aí que se localizou o primeiro estabelecimento português no que é hoje Timor-Leste, criado em meados do século XVII, já que a fortaleza construída na cidade de Cupão (conhecida atualmente como Kupang) em 1646 teve de ser abandonada em 1653 por imposição dos holandeses.\n[…]\nEm 1998, com a queda do ditador Suharto e a tomada de posse de Jusuf Habibie, o governo da Indonésia aceitou a realização de um referendo supervisionado pela Organização das Nações Unidas em Timor-Leste. A maioria da população (78,5%) votou pela independência, o que provocou a ira de milícias orquestradas pela Indonésia, levando à destruição de grande parte da cidade. A 20 de maio de 2002, Díli voltou a ser capital da República Democrática de Timor-Leste.\n[…]\nO Palácio do Governo de Timor-Leste é um dos edifícios construídos em Díli durante o período português, para tornar-se a sede do governo e das repartições provinciais. Atualmente é a sede do gabinete do primeiro-ministro, bem como das secretarias de Estado. Trata-se de uma construção feita pelo Estado Novo. A opção por uma ampla colunata resulta da influência das construções da Praça do Comércio em Lisboa que ali se queria espelhar.\n[…]\nCristo Rei de Díli\n[…]\nPatrimónio Arquitetónico de Origem Portuguesa de Díli. Díli: Direção Nacional do Património Cultural e Secretaria de Estado das Artes e Cultura de Timor-Leste. 2015. ISBN 9789892060200",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Praia",
      "descricao": "Capital de Cabo Verde, situada na ilha de Santiago."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A cidade da Praia, capital de Cabo Verde, fica em qual ilha do arquipélago?",
    "resposta": "Ilha de Santiago",
    "fonte": [
      "https://en.wikipedia.org/wiki/Praia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Praia",
        "situacao": "ok",
        "texto": "Praia (Portuguese pronunciation: [ˈpɾajɐ], Portuguese for \"beach\") is the capital and largest city of Cape Verde. Located on the southern coast of Santiago island within the Sotavento Islands group, the city is the seat of the Praia Municipality. Praia is the political, economic and cultural center of Cape Verde.\n[…]\nThe island of Santiago was discovered by António da Noli in 1460. The first settlement on the island was Ribeira Grande (Cidade Velha). The village Praia de Santa Maria was first mentioned around 1615 and grew near the natural harbour. The ports of Santiago were important ports of call for ships sailing between Portugal and the Portuguese colonies in Africa and South America.\n[…]\nAs a result, 56% of the entire population of Cape Verde resides in Santiago; and 29% in the Municipality of Praia alone. Its estimated population has reached 151,436 (2015). On 28 June 1985, Praia became member of UCCLA, the Union of Luso – Afro-Americo-Asiatic Capital Cities, an international organization.\n[…]\nAmong the places of worship, they are predominantly Christian churches and temples: Roman Catholic Diocese of Santiago de Cabo Verde (Catholic Church), Church of Jesus Christ of Latter-day Saints, Church of the Nazarene, Universal Church of the Kingdom of God, Assemblies of God.\n[…]\nPraia is home to several sports teams with the most popular football (soccer) clubs include Sporting, Boavista, Travadores, Académica, Vitória and Desportivo; others include ADESBA, based in Craveiro Lopes; Celtic, based in Achadinha de Baixo; Tchadense, based out of Achada Santo Antônio; Delta, and Eugênio Lima, based in that neighbourhood. Basketball clubs include ABC Praia, Bairro and Travadores. Volleyball clubs include Desportivo da Praia. All are part of the Santiago League South Zone.\n[…]\nPraia is twinned with:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Praia_%28Cabo_Verde%29",
        "situacao": "ok",
        "texto": "Praia, oficialmente Cidade da Praia, é a capital e maior cidade de Cabo Verde. Está localizada a sul da ilha de Santiago, sendo a sede do município homônimo. A cidade é dotada de um porto comercial, por onde é exportado café, cana de açúcar e frutas tropicais, possuindo também uma indústria pesqueira relevante para a economia local.\n[…]\nA ilha de Santiago foi descoberta por António da Noli em 1460. O primeiro povoado da ilha foi Ribeira Grande (Cidade Velha). A vila de Praia de Santa Maria foi mencionada pela primeira vez por volta de 1615 e cresceu perto do porto natural. Os portos de Santiago eram importantes pontos de escala para navios que navegavam entre Portugal e as colónias portuguesas em África e na América do Sul.\n[…]\nComo resultado, 56% de toda a população de Cabo Verde reside em Santiago; e 29% apenas no município da Praia. A sua população estimada atingiu os 151.436 habitantes (2015). Em 28 de junho de 1985, Praia tornou-se membro da UCCLA, União das Cidades Capitais Luso-Afro-Américo-Asiáticas, uma organização internacional.\n[…]\nA cidade da Praia albergou a primeira escola primária do arquipélago, chamada então Escola Central (actualmente conhecida por Escola Grande). Durante muito tempo foi a única escola primária a existir na cidade da Praia. Só a partir da década de 1960 é que começaram a ser erigidas outras instalações para ensino primário, noutras zonas à volta do Plateau e noutras localidades da ilha. Em 2006, Praia contava com mais de 30 escolas de Ensino Básico.\n[…]\nEm termos culturais, a cidade da Praia contrasta nitidamente com o resto da ilha de Santiago. Enquanto que o resto da ilha, por ter sido a primeira a ser habitada, mantém características conservadoras e tradicionalistas, a Praia, por ser cidade-capital, possui características mais cosmopolitas.\n[…]\n«Universidade Jean Piaget de Cabo Verde»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Baku",
      "descricao": "Capital e maior cidade do Azerbaijão, na península de Absheron."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Baku, a capital do Azerbaijão, fica à beira de qual grande corpo de água?",
    "resposta": "Mar Cáspio",
    "distratores": [
      "Mar Negro",
      "Mar de Aral",
      "Golfo Pérsico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Baku"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baku",
        "situacao": "ok",
        "texto": "Baku (US: , UK: ; Azerbaijani: Bakı [bɑˈcɯ] ) is the capital and largest city of Azerbaijan, as well as the largest city on the Caspian Sea and in the Caucasus region. Baku is 28 metres (92 ft) below sea level, which makes it the lowest lying national capital in the world and the largest city in the world below sea level. Baku lies on the southern shore of the Absheron Peninsula, along the Bay of \n[…]\nThe Azerbaijanis suffered defeat from the united forces of the Baku Soviet and were massacred by Dashnak teams in what was called the March Days. An estimated 3,000–12,000 Azerbaijanis were killed in their own capital. After the massacre, on 28 May 1918, the Azerbaijani faction of the Transcaucasian Sejm proclaimed the independence of the Azerbaijan Democratic Republic (ADR) in Ganja, thereby founding the first Muslim-majority democratic and secular republic.\n[…]\nAfter the Battle of Baku of August–September 1918, the Azerbaijani irregular troops, with the tacit support of the Turkish command, conducted four days of pillaging and killing 10,000–30,000 Armenians of Baku. This pogrom became known as the \"September Days\". Shortly after this, Baku was proclaimed the new capital of the Azerbaijan Democratic Republic.\n[…]\nThe independence of the Azerbaijani republic was short-lived. On 28 April 1920, the 11th Red Army invaded Baku and reinstalled the Bolsheviks, making Baku the capital of the Azerbaijan Soviet Socialist Republic within the Soviet Union.\n[…]\nThe Baku Stock Exchange is Azerbaijan's largest stock exchange, and largest in the Caucasian region by market capitalization. A relatively large number of transnational companies are headquartered in Baku. One of the more prominent institutions headquartered in Baku is the International Bank of Azerbaijan, which employs over 1,000 people. International banks with branches in Baku include HSBC, Société Générale and Credit Suisse."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bacu",
        "situacao": "ok",
        "texto": "Bacu ou Baku (em azeri: Bakı, pronunciado: [bɑˈcɯ]; em persa: بادکوبه, Bâd-kube) é a capital do Azerbaijão, sendo a sua maior cidade, e seu maior porto. Localizada às margens do Mar Cáspio, na margem sul da península de Absheron, Bacu está 28 metros (92 pés) abaixo do nível do mar, o que a torna a capital nacional mais baixa do mundo e também a maior cidade do mundo abaixo do nível do mar. Consist\n[…]\nBacu divide-se em onze distritos administrativos, ou raions: Azizbayov, Binagadi, Garadagh, Narimanov, Nasimi, Nizami, Sabail, Sabunchu, Khatai, Surakhany e Yasamal e 48 municipalidades. Entre estas incluem-se as municipalidades localizadas nas ilhas da Baía de Bacu (arquipélago de Bacu) e a cidade de Neft Daşları, construída sobre estacas no Mar Cáspio, distando 60 km de Bacu.\n[…]\nMilhares de armênios foram massacrados na cidade em vingança ao ocorrido nos Dias de Março. Bacu tornou-se a capital da ADR e, dois anos mais tarde - quando em 28 de abril de 1920 o 11° exército vermelho invadiu Bacu e reinstalou o poder bolchevique - a capital da República Socialista Soviética do Azerbaijão.\n[…]\nO clima de Bacu é temperado e semiárido (Classificação climática de Köppen-Geiger: BSk). Durante a era soviética, Bacu era um destino de férias onde os turistas podiam desfrutar das praias ou relaxar no complexo de spas (atualmente dilapidados) com vista para o Mar Cáspio. O clima é quente e úmido no verão, e frio e úmido no inverno.\n[…]\nOs serviços de transporte marítimo regular de Bacu operam em todo o Mar Cáspio para Turkmenbashi (anteriormente Krasnovodsk) no Turcomenistão e para Bandar Anzali e Bandar Nowshar no Irã.\n[…]\nBacu recebe o Grande Prêmio do Azerbaijão de Fórmula 1 no Circuito de Rua de Bacu. A primeira corrida foi o Grande Prêmio da Europa de 2016, com a pista percorrendo a cidade velha. A pista mede 6,003 km (3,735 milhas) e está no calendário da Fórmula 1 desde sua estreia em 2016.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Tbilisi",
      "descricao": "Capital e maior cidade da Geórgia, país do Cáucaso, às margens do rio Kura."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Tbilisi, cidade às margens do rio Kura, é a capital de qual país?",
    "resposta": "Geórgia",
    "distratores": [
      "Armênia",
      "Azerbaijão",
      "Uzbequistão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tbilisi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tbilisi",
        "situacao": "ok",
        "texto": "Tbilisi (  tə-bil-EE-see, tə-BIL-iss-ee) is the capital and largest city of Georgia, located on the banks of the Kura River. With more than 1.3 million inhabitants, it contains almost one third of the country's population. Tbilisi was founded in the 5th century CE by Vakhtang I of Iberia and has since served as the capital of various Georgian kingdoms and republics.\n[…]\nIn 1801, the Russian Empire annexed the Georgian Kingdom of Kartli-Kakheti, of which Tbilisi was one of the most significant urban centers. Within Tsarist Russia, Tbilisi (known then as Tiflis) was included within the Tiflis Uyezd county in 1801, part of what was initially the Georgia Governorate. Following the establishment of the Tiflis Governorate (Gubernia) in 1846, Tbilisi became its capital.\n[…]\nGeorgia's growing popularity as an international tourist destination has put Tbilisi on the global travel map. With the country hosting more than 9 million international visitors in 2019, the capital saw major investments in the hospitality industry.\n[…]\nWith a nominal GDP of 32 billion Georgian lari (€10 billion) in 2022, Tbilisi is the economic center of the country, generating more than half of Georgia's GDP. Its GDP per capita of 26,769 Georgian lari (€8,700) is exceeding the national average by more than 50 percent. The service sector itself is dominated by the wholesale and retail trade sector, reflecting the role of Tbilisi as transit and logistics hub for the country and the South Caucasus.\n[…]\nThe head of the city's transport department told Euronews Georgia that Tbilisi is working on a 20-year long urban mobility development strategy. According to the plan, the total length of the bike lane network will eventually reach 350 km across the capital.\n[…]\nThe University of Georgia (Tbilisi)\n[…]\nAgricultural University of Georgia\n[…]\nTbilisi is twinned with:\n[…]\nList of cities and towns in Georgia (country)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tibl%C3%ADssi",
        "situacao": "ok",
        "texto": "Tiblíssi ou Tbilísi (em georgiano: თბილისი; romaniz.: T'bilisi, pronunciado: [ˈtʰb̥ilisi] ()), antigamente mais conhecida por seu nome russo, Tíflis, é a capital e a maior cidade da Geórgia. Situada às margens do rio Cura, sua área é de 726 km², e sua população, de 1 152 500 habitantes. Como capital e cidade mais populosa do país, é o principal centro financeiro, corporativo, mercantil e cultural \n[…]\nO nome usado pelos próprios georgianos para a cidade, \"Tbilisi\", pronunciada \"Tbílissi\", passou ainda na antiguidade para o armênio — como Teplis — e daí para o grego, sob a forma de Tiflis — forma que foi por igualmente adotada pelos russos, que dominaram a Geórgia ao longo de quase todo o último milênio, de modo que a versão russa do nome (Тифлис, pronunciada «Tíflis») tornou-se a nomenclatura oficial para a cidade em quase todas as línguas ocidentais, incluído o português.\n[…]\nPresumivelmente, a capital georgiana estava situada nas proximidades.\n[…]\nTiblíssi está na Transcaucásia na latitude 41° 43' Norte e longitude 44° 47' Leste. A cidade está localizada na Geórgia Oriental em ambas as margens do Rio Cura.\n[…]\nO Aeroporto Internacional de Tiblíssi (em georgiano: თბილისის საერთაშორისო აეროპორტი) está localizado a 17 quilômetros a sudeste da cidade, além de ser o mais movimentado do pais é o maior. O acesso da cidade com o aeroporto é feito por meio de ônibus e táxis. Embora haja uma estação de trem (comboio) ao lado do aeroporto, existem apenas dois horários de serviço até 2020. Não há metrô entre o aeroporto e a estação central de Tiblíssi.\n[…]\nTiblíssi abriga o maior estádio da Geórgia, o Estádio Boris Paichadze (com capacidade para 55 000 pessoas), onde joga o Dinamo Tbilisi, e o segundo maior estádio do país, o Estádio Mikheil Meskhi (com capacidade para 27 223 pessoas), onde joga o Lokomotivi Tbilisi.\n[…]\nTbilisi - Capital of Georgia\n[…]\nSobre o meio ambiente em Tbilisi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cabinda",
      "descricao": "Província-enclave de Angola, separada do resto do país por uma faixa da República Democrática do Congo."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Separado do resto do país por uma faixa da República Democrática do Congo, o enclave de Cabinda pertence a qual país?",
    "resposta": "Angola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cabinda_Province"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cabinda_Province",
        "situacao": "ok",
        "texto": "Cabinda (Kongo: Kabinda) is an exclave and province of Angola, a status that has been disputed by several political organisations in the territory. The capital city is also called Cabinda, known locally as Tchiowa, Tsiowa or Kiowa. The province is divided into four municipalities—Belize, Buco-Zau, Cabinda and Cacongo.\n[…]\nCabinda is separated from the rest of Angola by a narrow strip of territory belonging to the Democratic Republic of the Congo (formerly known, up until 1960, as the Belgian Congo), which bounds the province on the south and the east. Cabinda is bounded on the north by the Republic of the Congo (formerly known as French Congo), and on the west by the Atlantic Ocean. Adjacent to the coast are some of the largest offshore oil fields in the world.\n[…]\nIn 1885, the Treaty of Simulambuco established Cabinda as a protectorate of the Portuguese Empire, named the Protectorate of the Portuguese Congo. Cabindan independence movements consider Angola's post-colonial occupation of the territory to be illegal. While the Angolan Civil War largely ended in 2002, an armed struggle persists in the exclave of Cabinda. Some of the factions have proclaimed an independent Republic of Cabinda, with offices in Paris.\n[…]\nIn 1975, the Treaty of Alvor between Portugal and National Liberation Front of Angola (FNLA), People's Movement for the Liberation of Angola (MPLA) and National Union for the Total Independence of Angola (UNITA) reconfirmed Cabinda's status as part of Angola. The treaty was rejected by the Front for the Liberation of the Enclave of Cabinda and other local political groups which advocated for separate independence.\n[…]\nAlthough the Angolan government says FLEC is no longer operative, this is disputed by the Republic of Cabinda and its Premier, Joel Batila.\n[…]\nInformation on this province at Info Angola"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cabinda_%28prov%C3%ADncia%29",
        "situacao": "ok",
        "texto": "Cabinda é uma das 21 províncias de Angola, localizada na região norte do país, sendo a mais setentrional e também único exclave da nação. A capital é a cidade e município de Cabinda.\n[…]\nO território é um exclave angolano, sendo limitado ao norte pela República do Congo, a leste e ao sul pela República Democrática do Congo e a oeste pelo Oceano Atlântico.\n[…]\nDentre as espécies da fauna da província cabindina destacam-se o morcego-frugívoro-menor-angolano, o elefante-da-floresta, o sapo-nariz-de-Perret, a rã-de-garras-de-André, o papagaio-do-congo, o muntual, o gorila-ocidental-das-terras-baixas e o chimpanzé-central.\n[…]\nVencido o FNLA e o Zaire no território cabindino, o MPLA passou a defender a continuação do enclave como parte integrante de Angola, e procurando neutralizar os militantes da FLEC. Por sua vez a FLEC, na altura dividida em várias correntes, tinha declarado a independência separada e a formação da República de Cabinda em 1º de agosto de 1975, criando rapidamente um pequena força militar que operava somente nas zonas de difícil acesso, floresta densa e de montanhas, longe das cidades cabindinas.\n[…]\nNo setor de serviços o destaque está nas atividades relacionadas à logística e transporte, geradoras de grandes divisas e massa salarial[carece de fontes]? Isso se explica observando a geografia da província, que é um exclave, dependendo fortemente de seus portos, no Complexo Portuário de Cabinda, para transporte de cargas pesadas e vitais para o restante de Angola.\n[…]\nLista de governadores provinciais de Cabinda\n[…]\nPortal Oficial do Governo da Republica de Angola",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Oblast de Kaliningrado",
      "descricao": "Exclave da Rússia na costa do Mar Báltico, sem ligação terrestre com o resto do país."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Kaliningrado, território russo sem ligação por terra com o resto da Rússia, fica entre a Lituânia e qual outro país?",
    "resposta": "Polônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kaliningrad_Oblast"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kaliningrad_Oblast",
        "situacao": "ok",
        "texto": "Kaliningrad Oblast (Russian: Калининградская область, romanized: Kaliningradskaya oblastʹ) is the westernmost federal subject of Russia. It is a semi-exclave on the Baltic Sea within the historical Baltic region of Prussia, bordered by Poland to the south, Lithuania to the north and east, and the Baltic Sea to the west. The largest city and administrative centre is Kaliningrad. The port town of Ba\n[…]\nOthers think that the reason was that the region was far too strategic for the USSR to leave it in the hands of another SSR other than the Russian one. In the 1950s, Nikita Khrushchev offered the entire Kaliningrad Oblast to the Lithuanian SSR but Antanas Sniečkus refused to accept the territory because it would add at least a million ethnic Russians to Lithuania proper.\n[…]\nAccording to a 2012 survey, 34% of the population of Kaliningrad Oblast declared themselves to be \"spiritual but not religious\", 30.9% adhered to the Russian Orthodox Church, 22% were atheist, and 11.1% followed other religions or did not answer the question, 1% were unaffiliated generic Christians, and 1% were Roman Catholic.\n[…]\nKaliningrad Oblast has roughly 90% of global amber deposits. Many Russians refer to the region as \"Amber Land\" (Russian: Янтарный Край, romanized: Jantarny Krai). Raw amber was previously exported to other countries for processing, but in 2013 the Russian government banned export in order to boost the amber processing industry in Russia.\n[…]\nKaliningrad Special Region\n[…]\nList of rural localities in Kaliningrad Oblast\n[…]\nOfficial website of Kaliningrad Oblast (in Russian)\n[…]\nLife in Kaliningrad Oblast (in Russian)\n[…]\nSpuren der Vergangenheit / Следы Пρошлого (Traces of the Past) This site by W. A. Milowskij, a Kaliningrad resident, contains hundreds of interesting photos, often with text explanations, of architectural and infrastructural artifacts of the territory's long German past. (in German and Russian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calininegrado_%28oblast%29",
        "situacao": "ok",
        "texto": "O oblast de Calininegrado, Caliningrado ou Kaliningrado (russo:  Калинингра́дская о́бласть, tr. Kaliningrádskaia óblast), também chamado \"Rússia báltica\", é uma divisão federal da Federação da Rússia. Trata-se de um exclave russo, situado nas margens do mar Báltico e contornado pela Lituânia e pela Polônia.\n[…]\nO oblast de Calininegrado é um exclave da Rússia e faz fronteira a norte e a leste com a Lituânia, a sul com a Polónia e a oeste com o mar Báltico. Corresponde a uma porção da antiga região alemã da Prússia Oriental, anexada pela União Soviética depois da Segunda Guerra Mundial, tendo sido subsequentemente russificada.\n[…]\nSeu maior rio é o Prególia (russo:  Прего́ля; em alemão:  Pregel; em lituano:  Prieglius). Em seu território há duas importantes lagunas: a laguna da Curlândia (dividida com a Lituânia) e a laguna do Vístula (dividida com a Polónia).\n[…]\n«O sítio do Governo do Oblast de Calininegrado» (em russo)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Gâmbia",
      "descricao": "País da África Ocidental formado por uma faixa estreita ao longo do rio Gâmbia, com capital em Banjul."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Com exceção do pequeno litoral no Atlântico, a Gâmbia é totalmente cercada por qual país?",
    "resposta": "Senegal",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Gambia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Gambia",
        "situacao": "ok",
        "texto": "The Gambia, officially the Republic of The Gambia, is a country in West Africa. Geographically, the Gambia is the smallest country in continental Africa; it is bounded by Senegal on all sides except for the western part, which is bordered by the Atlantic Ocean.\n[…]\nSenegal surrounds the Gambia on three sides, with 80 km (50 mi) of coastline on the Atlantic Ocean marking its western extremity.\n[…]\nThe cuisine of the Gambia is heavily influenced by the culinary traditions of neighbouring Senegal, reflecting a mix of local ingredients and historical influences, including French colonial cuisine. A popular dish in particular is the Gambian domoda, a savoury peanut stew made with meat, peanut paste, and vegetables, which is the national dish of the Gambia. Another dish is Gambian okra stew (superkanja)  which in addition to okra, has palm oil, meat and smoked fish.\n[…]\nSenegalese yassa is also enjoyed widely; it features marinated fish or chicken seasoned with lemon, onions, and mustard, providing a sharp flavour that contrasts with the earthiness of many other dishes. Gambian cuisine usually includes peanuts, rice, fish, meat, onions, tomatoes, cassava, sweet potatoes, egg plant, cabbage, chili peppers and oysters from the River Gambia.\n[…]\nAs in neighbouring Senegal, the national and most popular sport in the Gambia is wrestling. Association football and basketball are also popular. Football in the Gambia is administered by the Gambia Football Federation, who are affiliated to both FIFA and CAF. The GFA runs league football in the Gambia, including top division GFA League First Division, as well as the Gambia national football team.\n[…]\nOutline of The Gambia\n[…]\nWikimedia Atlas of The Gambia\n[…]\nGeographic data related to The Gambia at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/G%C3%A2mbia",
        "situacao": "ok",
        "texto": "Gâmbia (em inglês: The Gambia) oficialmente República da Gâmbia (em inglês: Republic of The Gambia), é um país da África Ocidental que rodeia o curso inferior do Rio Gâmbia. É rodeado pelo Senegal por todos os lados exceto a oeste, onde faz fronteira marítma com o Oceano Atlântico. A sua capital é Banjul, que tem a área metropolitana mais extensa em todo o país.\n[…]\nÁrabes muçulmanos fizeram comércio com locais da África Ocidental no território da Gâmbia durante os séculos IX e X d.C.. Em 1455, os Portugueses foram os primeiros Europeus a entrar na Gâmbia, embora não tenham estabelecido rotas de comércio significativas lá. Em 1765, a Gâmbia tornou-se uma colónia britânica. Em 1965, a Gâmbia tornou-se independente do Reino Unido. Entre 1982 e 1989, esteve unida ao país vizinho, sob o nome de Senegâmbia.\n[…]\nEis alguns dados sobre a demografia gambiana:\n[…]\nForam essas pessoas convertidas que lançaram os fundamentos da religião na Gâmbia e no Senegal.\n[…]\nA literatura gambiana consiste na tradição literária oral e escrita do povo gambiano. A literatura oral, incluindo os griots tradicionais e diversas formas de poesia ritual, tem sido historicamente a forma predominante de transmissão cultural, em sintonia com a Senegâmbia em geral. Desde a década de 1960, surgiu uma literatura escrita gambiana em inglês, liderada por Lenrie Peters.\n[…]\nNa Gâmbia, como em grande parte da África Ocidental, a tradição literária oral tem sido historicamente a forma predominante de transmissão cultural. É o domínio dos griots, narradores tradicionais da Senegâmbia que frequentemente acompanham suas histórias com música tradicional, tocada em instrumentos como a kora. Essas histórias servem para preservar histórias familiares e valores morais, e historicamente os griots até acompanharam reis à guerra para fornecer encorajamento moral.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Liechtenstein",
      "descricao": "Pequeno principado sem litoral nos Alpes, com capital em Vaduz."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "No coração dos Alpes, o principado de Liechtenstein faz fronteira com a Suíça e com qual outro país?",
    "resposta": "Áustria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Liechtenstein"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liechtenstein",
        "situacao": "ok",
        "texto": "Liechtenstein ( , LIK-tən-stine; German pronunciation: [ˈlɪçtn̩ʃtaɪn] ; Alemannic German: Liachtaschta), officially the Principality of Liechtenstein (German: Fürstentum Liechtenstein [ˈfʏʁstn̩tuːm ˈlɪçtn̩ʃtaɪn] ), is a doubly landlocked country in the Central European Alps. A microstate, it is located between Austria to the east and north-east and Switzerland to the north-west, west and south.\n[…]\n1884: Johann II appointed Carl von In der Maur, an Austrian aristocrat, to serve as the Governor of Liechtenstein.\n[…]\nThe Liechtenstein National Police maintains a trilateral treaty with Austria and Switzerland that enables close cross-border cooperation among the police forces of the three countries.\n[…]\nThe single railway line in Liechtenstein is the Feldkirch–Buchs railway, of which 9.5 km (6 mi) are located within the principality. This line connects Feldkirch in Vorarlberg (Austria) with Buchs in the canton of St. Gallen (Switzerland). There are four railway stations in Liechtenstein, namely Schaan-Vaduz, Forst Hilti, Nendeln and Schaanwald (from west to east).\n[…]\nThe official language is German, spoken by 92% of the population as their main language in 2020. 73% of Liechtenstein's population speak an Alemannic dialect of German at home that is highly divergent from Standard German but closely related to dialects spoken in neighbouring regions such as Switzerland and Vorarlberg, Austria. In Triesenberg, a Walser German dialect promoted by the municipality is spoken. Swiss Standard German is also understood and spoken by most Liechtensteiners.\n[…]\nPrivate University in the Principality of Liechtenstein\n[…]\nAs a result of its small size, Liechtenstein has been strongly affected by external cultural influences, most notably those originating in the southern regions of German-speaking Europe, including Austria, Baden-Württemberg, Bavaria, Switzerland, and specifically Tirol and Vorarlberg."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Liechtenstein",
        "situacao": "ok",
        "texto": "Liechtenstein (pronúncia em alemão: [ˈlɪçtn̩ʃtaɪn]], sendo usual a pronúncia aportuguesada: [liʃtẽnsˈtain]) ou Listenstaine (pronúncia em português europeu: [liʃtẽʃˈtain(ɨ)]), oficialmente Principado de Liechtenstein (português brasileiro) ou do Liechtenstein (português europeu) (em alemão:  Fürstentum Liechtenstein), é um microestado principado localizado no centro da Europa, encravado nos Alpes \n[…]\nDepois da \"anexação da Áustria\" ao Terceiro Reich em março de 1938, o recém-coroado príncipe, Francisco José II, motivado por sua rejeição ao nacional-socialismo, decidiu mudar sua residência do leste da Áustria e sul da Morávia para Liechtenstein, sendo o primeiro dos príncipes do país a fazê-lo.\n[…]\nLiechtenstein se localiza na Europa central, entre a Áustria e a Suíça. Não tem acesso ao mar e faz fronteiras com os dois países mencionados anteriormente, tendo os cantões suíços de São Galo e Grisões a oeste e sul (41 km de fronteira) e o estado federal austríaco de Vorarleberga a norte e leste (37 km de fronteira). Em 2006, o governo do país mediu a fronteira utilizando métodos modernos, e verificou que ela estende-se por 77,9 km, 1,9 km a mais do que previamente acreditado.\n[…]\nO Reno é o maior e mais importante corpo de água de Liechtenstein. Com uma extensão de aproximadamente 27 km, o rio representa a fronteira natural com a Suíça e é de grande importância para o abastecimento de água do principado. Além disso, o Reno é uma importante área de lazer para a população. Com 10 km, o Samina é o segundo maior rio do país. Com águas turbulentas, o rio nasce em Triesenberg e deságua no Ill, na Áustria (perto de Feldkirch).\n[…]\nUma ferrovia de 9,5 km conecta a Áustria e a Suíça através de Liechtenstein. As ferrovias do país são administradas pelas Ferrovias Federais Austríacas (em alemão: Österreichische Bundesbahnen, OBB) como parte da rota entre Feldkirch, na Áustria, e Buchs, na Suíça.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Bratislava",
      "descricao": "Capital e maior cidade da Eslováquia, às margens do Danúbio."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A capital eslovaca, Bratislava, fica colada à fronteira de dois países vizinhos. Quais são eles?",
    "resposta": "Áustria e Hungria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bratislava"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bratislava",
        "situacao": "ok",
        "texto": "Bratislava (Hungarian: Pozsony; German: Pressburg) is the capital and largest city of Slovakia and the fourth largest of all cities on the river Danube. Officially, the population of the city proper is about 479,000, with the wider Bratislava Region exceeding 732,000 inhabitants. The metropolitan area has a population of approximately 1.3 million.\n[…]\nBratislava is in southwestern Slovakia at the foot of the Little Carpathians, occupying both banks of the Danube and the left bank of the River Morava. The city is situated on the border of three countries—Slovakia, Austria, and Hungary—and is the only national capital to have land borders with two other sovereign states.\n[…]\nIts geographic position places it exceptionally close to the Austrian capital, Vienna, making them the closest pair of capital cities in Europe at just 50 kilometres (31 mi) apart.\n[…]\nBratislava is the 19th-richest region of the European Union by GDP (PPP) per capita. GDP at purchasing power parity is about three times higher than in other Slovak regions. The city welcomes over one million tourists every year, primarily arriving from the Czech Republic, Germany, Austria and the United Kingdom. In 2024, tourism in Bratislava rebounded to approximately 1.2 million annual visitors.\n[…]\nBratislava is situated in southwestern Slovakia, within the Bratislava Region. Its location on the borders with Austria and Hungary makes it the only national capital that borders two countries. It is only 18 kilometres (11.2 mi) from the border with Hungary and only 60 kilometres (37.3 mi) from the Austrian capital Vienna.\n[…]\nThe motorway system provides direct access to Brno in the Czech Republic, Vienna in Austria, Budapest in Hungary, Trnava, and other points in Slovakia. The A6 motorway between Bratislava and Vienna was opened in November 2007.\n[…]\nPublic urban transport in Bratislava"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bratislava",
        "situacao": "ok",
        "texto": "Bratislava (pronunciado em português europeu: [bɾɐtiʒˈlavɐ, bɾatiʒˈlavɐ]; pronunciado em português brasileiro: [bɾatisˈlavɐ, bɾatʃisˈlavɐ]; pronunciado em eslovaco: [ˈbratislava] (); antigamente em eslovaco: Prešporok; em alemão:  Pressburg ou Preßburg; em húngaro:  Pozsony; em latim: Posonium) é a capital e principal cidade da Eslováquia, situada no sudoeste do país, junto da fronteira com a Áust\n[…]\nUma gíria comum usada para se referir a Bratislava em outras partes da Eslováquia é Blava.\n[…]\nPressburg floresceu durante o século XVIII. No reinado de Maria Teresa da Áustria, tornou-se o maior e mais importante centro no território das atuais Eslováquia e Hungria. A população triplicou; foram edificados muitos novos palácios, mosteiros, mansões, e as ruas foram construídas, transformando a cidade no centro da vida social e cultural da região.\n[…]\nNo entanto, a cidade começou a perder a sua importância sob o reinado do filho de Maria Teresa José II, especialmente quando a joias da coroa foram movidas para Viena em 1783, em uma tentativa de fortalecer a união entre a Áustria e a Hungria. Muitos organismos centrais posteriormente foram transferido para Buda, seguidos por um grande segmento da nobreza. Os primeiros jornais em húngaro e eslovaco foram publicados aqui, respetivamente o Magyar hírmondó em 1780, e o Presspurske Nowinyem 1783.\n[…]\nBratislava é a capital de Eslováquia, está situada no centro da Europa e no sudoeste da Eslováquia. Sua localização junto às fronteiras da Áustria, no oeste, e Hungria, no sul, faz com que seja a única capital de um país no mundo cujas fronteiras sejam com dois países.\n[…]\nAs cidades e povos mais próximos são: ao norte Stupava, Borinka e Svätý Jur; ao este Ivanka pri Dunaji e Most pri Bratislave; no sudeste Rovinka, Dunajská Lužná e Šamorín; ao sul Rajka (Hungria), e ao oeste Kittsee (Áustria), Hainburg an der Donau (Áustria) e Marchegg (Áustria).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Abuja",
      "descricao": "Cidade planejada no centro da Nigéria, capital do país desde 1991."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Planejada no centro do país, Abuja substituiu Lagos como capital da Nigéria em que década?",
    "resposta": "Anos 1990",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abuja"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abuja",
        "situacao": "ok",
        "texto": "Abuja () is the capital city of Nigeria, strategically situated at the geographic midpoint of the country within the Federal Capital Territory (FCT). As the seat of the Federal Government of Nigeria, it hosts key national institutions, landmarks, and buildings spread across its over 50 districts. It replaced Lagos (the most populous city in Nigeria) as the capital on 12 December 1991.\n[…]\nThe Federal Military Government of Nigeria promulgated Decree No. 6 on 4 February 1976, which initiated the removal of the Federal Capital from Lagos to Abuja. The initial work for Abuja's planning and implementation was carried out by the Military Government of Generals Murtala Mohammed and Olusegun Obasanjo. However, the foundation of Abuja was under the Administration of Shehu Shagari in 1979.\n[…]\nThe move of Nigeria's Capital to Abuja was controversial, and the biggest opposition to it was led by Obafemi Awolowo. Awolowo, as a politician and a representative of the Yoruba people, defended their claims against the move of the Capital from Lagos. During the hotly-contested campaign for the presidency, he vowed to hire the Walt Disney Company to convert the new site (Abuja) into an amusement park if he was elected.\n[…]\nMost countries relocated their embassies to Abuja, and many maintain their former embassies as consulates in Lagos, the commercial capital of Nigeria. Abuja is the headquarters of the Economic Community of West African States (ECOWAS) and the regional headquarters of OPEC. Abuja and the FCT have experienced huge population growth; it has been reported that some areas around Abuja have been growing at 20% to 30% per year.\n[…]\nNnamdi Azikiwe International Airport is the main airport serving Abuja and the surrounding capital region. It was named after Nigeria's first president, Nnamdi Azikiwe. The airport has international and domestic terminals.\n[…]\nGerman School Abuja"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abuja",
        "situacao": "ok",
        "texto": "Abuja é a capital administrativa e política da Nigéria. Localizada no centro do país, no Território da Capital Federal, é uma cidade planejada construída principalmente na década de 1980 a partir de um plano diretor de um consórcio de três escritórios estadunidenses de planejamento e arquitetura. Já o Distrito Central de Negócios de Abuja foi projetado pelo arquiteto japonês Kenzo Tange. Substitui\n[…]\nApós sua construção e a transferência definitiva da sede do poder nigeriano para Abuja, a maioria dos países transferiu suas embaixadas para a cidade. Entretanto, alguns ainda mantiveram e mantém suas embaixadas e consulados em Lagos, antiga capital nigeriana e ainda principal centro financeiro e comercial do país. Abuja é hoje sede da Comunidade Econômica dos Estados da África Ocidental (ECOWAS) e sede regional da Organização dos Países Exportadores de Petróleo (OPEP).\n[…]\nA mineração é muito forte no Território da Capital Federal, com destaque a cidade vizinha a Abuja, Jos. Ainda há grandes reservas de estanho e nióbio na região. O beneficiamento destes minerais a partir da década de 1990 permitiu uma pequena industrialização no entorno de Abuja.\n[…]\nDesde a construção de Abuja o setor imobiliário foi o que mais cresceu. Com a consolidação de Abuja como capital a partir da década de 1980, houve um booom imobiliário na cidade, com o crescimento de grandes áreas urbanas. O preço dos imóveis em Abuja durante a década de 1990 chegou a ser mais caro que os imóveis de Lagos.\n[…]\nEntre 1980 e 1990 Abuja registrou um dos maiores crescimentos populacionais do continente africano. Neste cenário várias pequenas empresas construtoras de Abuja cresceram, e se tornaram ao fim da década de 1990 as maiores da Nigéria. As imobiliárias de Abuja também cresceram substancialmente, conquistando também os grandes mercados de Lagos, Kano e Ibadan.\n[…]\nAdministração do Território da Capital Federal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Dissolução da Tchecoslováquia",
      "descricao": "Separação pacífica da Tchecoslováquia em República Tcheca e Eslováquia, conhecida como Divórcio de Veludo."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Num processo apelidado de Divórcio de Veludo, a Tchecoslováquia se dividiu pacificamente em dois países em que ano?",
    "resposta": "1993",
    "fonte": [
      "https://en.wikipedia.org/wiki/Dissolution_of_Czechoslovakia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dissolution_of_Czechoslovakia",
        "situacao": "ok",
        "texto": "The dissolution of Czechoslovakia, which took effect on 31 December 1992, was the self-determined partition of the Czech and Slovak Federative Republic into the independent countries of the Czech Republic and Slovakia. These mirrored the Czech Socialist Republic and the Slovak Socialist Republic, which had been created in 1969 as the constituent states of the Czechoslovak Socialist Republic until \n[…]\nAt the beginning of 1993, as Slovakia's economy struggled, Slovaks said the dissolution was a \"sandpaper divorce\".\n[…]\nTherefore, Czechoslovakia's membership in the United Nations ceased upon the dissolution of the country, but on 19 January 1993, the Czech Republic and Slovakia were admitted as new, separate states.\n[…]\nWith respect to other international treaties, the Czechs and the Slovaks agreed to honour the treaty obligations of Czechoslovakia. The Slovaks transmitted a letter to the Secretary General of the United Nations on 19 May 1993, to express their intent to remain a party to all treaties signed and ratified by Czechoslovakia and to ratify treaties signed but not ratified before dissolution of Czechoslovakia.\n[…]\nDuring the FIS Nordic World Ski Championships 1993 in Falun, Sweden, the ski jumping team competed as a combined Czech–Slovak team in the team large hill event and won silver. The team had been selected before the dissolution. Jaroslav Sakala won two medals in the individual hill events for the Czech Republic at those games along with his silver in the team event.\n[…]\nA March 1993 study conducted by Martin Bútora and his wife Zora indicated that in case of a referendum about 50% of the population would have voted against the dissolution of the state with only about 30% in favour of the dissolution.\n[…]\nWehrle, Frédéric (1994). Le divorce tchéco-slovaque: vie et mort de la Tchécoslovaquie 1918-1992. Pays de l'Est. Paris: L'Harmattan. ISBN 978-2-7384-2609-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dissolu%C3%A7%C3%A3o_da_Checoslov%C3%A1quia",
        "situacao": "ok",
        "texto": "A dissolução da Checoslováquia (português europeu) ou dissolução da Tchecoslováquia (português brasileiro) foi um processo histórico que pôs fim à Checoslováquia e criou dois novos países, a Chéquia e a Eslováquia, a partir de 1 de janeiro de 1993. Sua divisão ocorreu após uma série de protestos e reivindicações populares, mas sem nenhum conflito armado, diferentemente dos países da antiga Iugoslá\n[…]\nTambém é conhecida como Separação de Veludo ou Divórcio de Veludo, por ter ocorrido de maneira pacífica, a exemplo da Revolução de Veludo de 1989.\n[…]\nO objetivo das negociações passou então a ser concluir uma separação pacífica. Em 25 de novembro, o parlamento federal aprovou a lei constitucional sobre o término da existência da Checoslováquia, que dispunha sobre a extinção da república federal em 31 de dezembro de 1992 e acerca de detalhes técnicos da dissolução. Os fatores que mais contribuíram para separação do país foram as divergências no setor econômico.\n[…]\nO caráter não violento da separação contrastou com a dissolução da Iugoslávia.\n[…]\nInicialmente, a antiga moeda checoslovaca continuou a circular em ambos os países. O temor de perdas econômicas do lado checo fez com que os dois Estados emitissem suas respectivas moedas nacionais já em 8 de fevereiro de 1993. A princípio de mesmo valor que a coroa checa, a moeda eslovaca desvalorizou-se paulatinamente em relação àquela.\n[…]\nA princípio, proibiu-se a dupla nacionalidade entre os dois Estados, o que foi revertido alguns anos mais tarde. Poucas pessoas fizeram uso deste direito que, de qualquer forma, tornou-se supérfluo devido à entrada de ambos os países na União Europeia, em 2004.\n[…]\n(em tcheco/checo) Mudanças constitucionais da revolução de Veludo até a dissolução, visão geral detalhada no Wayback Machine (arquivado em fevereiro 5, 2005)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Panamá",
      "descricao": "País da América Central, no istmo entre as Américas, cuja capital é a Cidade do Panamá."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "No início do século vinte, o Panamá deixou de fazer parte da Colômbia. Em que ano isso aconteceu?",
    "resposta": "1903",
    "fonte": [
      "https://en.wikipedia.org/wiki/Separation_of_Panama_from_Colombia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Separation_of_Panama_from_Colombia",
        "situacao": "ok",
        "texto": "The secession of Panama from Colombia was formalized on 3 November 1903, with the establishment of the Republic of Panama and the abolition of the Colombia–Costa Rica border. From the independence of Panama from Spain in 1821, Panama had simultaneously joined itself to the confederation of Gran Colombia through the Independence Act of Panama.\n[…]\nThe USS Nashville landed on 2 November 1903 at Colón, using as pretext the Mallarino–Bidlack Treaty of 1846, which required the U.S. to preserve the peaceful use of the Panama Railroad. However, word also reached Colón of the Colombian ships on their way. As the news spread of the imminent arrival of Colombian troops, many of the conspirators abandoned the cause. Fearing that if they were caught they would be executed, Amador, Arango, and other conspirators met to discuss the situation.\n[…]\nThe Tiradores Battalion arrived in the Panamanian city of Colón the morning of November 3, 1903. There, Generals Tovar and Amaya encountered Panama Railway authorities aligned with the secessionist movement, who ushered Tovar and his senior staff onto a train bound for Panama City to see Obaldía, but delayed the passage of the tiradores, leaving them leaderless. General Huertas, commander of the Colombia Battalion in Panama, eventually ordered the arrest of Tovar and his aides.\n[…]\nNews of the secession of Panama from Colombia reached Bogotá only on November 6, 1903, due to a problem with the submarine cables.\n[…]\nOn November 13, 1903, the United States formally recognized the Republic of Panama (after recognizing it unofficially on November 6 and 7). On November 18, 1903, the United States Secretary of State John Hay and Philippe-Jean Bunau-Varilla signed the Hay–Bunau-Varilla Treaty to establish the Panama Canal Zone.\n[…]\nColombia–Panama relations\n[…]\n(in Spanish) Luis Angel Arango Library - Separation of Panama"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Separa%C3%A7%C3%A3o_do_Panam%C3%A1_da_Col%C3%B4mbia",
        "situacao": "ok",
        "texto": "A separação do Panamá da Colômbia foi um fato que ocorreu em 3 de novembro de 1903, após a Guerra dos Mil Dias, e que resultou na proclamação da República do Panamá, anteriormente um departamento da República da Colômbia desde 1821, com breves períodos de separação do istmo do Panamá.\n[…]\nO Tratado de Wisconsin, assinado em um navio dos Estados Unidos com esse nome, pôs um fim a esta última guerra. No entanto, o líder dos Liberais Victoriano Lorenzo se recusou a aceitar seus termos e foi fuzilado em 15 de maio de 1903.\n[…]\nCom um forte apoio ao movimento separatista, foi definido novembro de 1903 como o momento para a separação. No entanto, os rumores se espalharam na Colômbia, mas a informação gerida ao governo da Colômbia indicou que a Nicarágua estava planejando invadir uma região do norte do Panamá conhecida como Calovébora.\n[…]\nBrid, presidente do Conselho Municipal do Panamá, tornou-se presidente de facto do Panamá e nomeou, em 4 de novembro de 1903, a Junta de Governo Provisório que governou o país até fevereiro de 1904, quando a Convenção Nacional Constituinte foi estabelecida e elegeu Manuel Amador Guerrero como o primeiro presidente constitucional. A notícia da separação do Panamá da Colômbia chegou a Bogotá em 6 de novembro de 1903 devido a um problema com os cabos submarinos.\n[…]\nEm 13 de novembro de 1903, os Estados Unidos reconheceram formalmente a República do Panamá (após reconhecê-la oficialmente em 6 e 7 de novembro). A França fez o mesmo em 14 de novembro, seguida por outros 15 países. Em 18 de novembro de 1903, o Secretário de Estado dos Estados Unidos John Hay e Philippe-Jean Bunau-Varilla assinaram o Tratado Hay-Bunau-Varilla.\n[…]\n«Historia Patria». en el sitio oficial de la República de Panamá.\n[…]\n«Demetrio H. Brid». Presidente de facto de la República - 1903",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Essuatíni",
      "descricao": "Reino sem litoral do sul da África, antes chamado Suazilândia."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O rei Mswati Terceiro trocou o nome oficial da Suazilândia para Essuatíni em que ano?",
    "resposta": "2018",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eswatini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eswatini",
        "situacao": "ok",
        "texto": "Eswatini, formally the Kingdom of Eswatini (historically called KaNgwane), also known by its former official names Swaziland and the Kingdom of Swaziland, is a landlocked country in Southern Africa. It is bordered by South Africa on all sides except the east, where it shares a border with Mozambique. At no more than 200 km (120 mi) north to south and 130 km (81 mi) east to west, Eswatini is the se\n[…]\nAfter the Second Boer War, the kingdom, under the name of Swaziland, was a British high commission territory from 1903 until it regained its full independence on 6 September 1968. In April 2018, the king changed the official name from Kingdom of Swaziland to Kingdom of Eswatini, the name commonly used in the Swazi language.\n[…]\nMswati III, the son of Ntfombi, was crowned in 1986 as king and ngwenyama of Swaziland.\n[…]\nOn 19 April 2018, Mswati III announced that the Kingdom of Swaziland had been renamed as the Kingdom of Eswatini, reflecting the extant Swazi name for the state eSwatini, to mark the 50th anniversary of Swazi independence. The name Eswatini means \"land of the Swazis\" in the Swazi language and was partially intended to prevent confusion with the similarly named Switzerland.\n[…]\nIn an effort to broaden the spectrum of areas eligible for conservation support (which practice bona-fide conservation management), the United Nations Development Programme (UNDP) established a new category for informal, or non-gazetted, conservation areas in 2018. These are now called OECMs, or Other Effective Conservation Measures. The SNPAS Project adopted this OECM terminology and began certifying informal conservation areas in Eswatini in 2021.\n[…]\nAs of 2018, public services were very poorly developed. The country had only twelve public ambulances, elementary schools generally no longer provided canteens and pharmacies were disappearing.\n[…]\nKey Development Forecasts for Swaziland from International Futures"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Essuat%C3%ADni",
        "situacao": "ok",
        "texto": "O Essuatíni (em suázi: eSwatini; em inglês:  Eswatini), oficialmente Reino de Essuatíni (em suázi: Umbuso weSwatini; em inglês:  Kingdom of Eswatini), tradicionalmente Ngwane (Derivado do Epónimo rei Ngwane III) e anteriormente conhecido como Suazilândia, é um país da África Austral, limitado a leste por Moçambique e em todas as outras direções pela África do Sul. Suas capitais são Mebabane (admin\n[…]\nO país e seu povo recebem seus nomes de Mswati II, um rei do século XIX em cujo reinado o território de Essuatíni foi expandido e unificado.\n[…]\nEm abril de 2018, o país mudou o seu nome de Reino da Suazilândia para Reino de Essuatíni, que significa \"terra dos suázi\" na língua suázi (ao invés de Swaziland, proveniente do inglês), durante os eventos de comemoração dos 50 anos de independência do país.\n[…]\nEm 19 de abril de 2018, Mswati oficialmente mudou o nome da Suazilândia para Essuatíni durante as comemorações do quinquagésimo aniversário da independência do país. O novo nome, Essuatíni, significa \"terra dos suázis\" em suázi.\n[…]\nO Reino do Essuatíni é uma monarquia absoluta. A constituição de 1978 atribui o poder executivo e legislativo supremo ao rei, que é o chefe de Estado. Exerce o poder executivo um gabinete por ele nomeado e chefiado atualmente pelo primeiro-ministro Russell Dlamini, que recebeu o cargo do Rei Mswati III em 3 de novembro de 2023.\n[…]\nEssuatíni é um país profundamente polígamo. Mswati III, o atual rei, coroado com a idade de 18 anos, casou-se nove vezes, além de duas outras noivas. Seu pai, Sobhuza II, que reinou de 1921–1982, tinha 120 esposas. Mswati III declarou que a poligamia \"não era propício para a propagação do HIV entre a população\" em um país onde o número de pessoas HIV positivas é de aproximadamente 40%.\n[…]\nMissões diplomáticas de Essuatíni\n[…]\nThe Kingdom of Eswatini — Site oficial do turismo do país (em inglês)\n[…]\nSite oficial governamental de Essuatíni (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Timor-Leste",
      "descricao": "País do Sudeste Asiático, na metade oriental da ilha de Timor, de língua oficial portuguesa e tétum."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de séculos sob Portugal e anos de ocupação indonésia, o Timor-Leste teve sua independência reconhecida em que ano?",
    "resposta": "2002",
    "fonte": [
      "https://en.wikipedia.org/wiki/East_Timor"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/East_Timor",
        "situacao": "ok",
        "texto": "Timor-Leste, also known as East Timor, officially the Democratic Republic of Timor-Leste, is a country in Southeast Asia. It comprises the eastern half of the island of Timor, the coastal exclave of Oecusse in the island's northwest, and the islands of Atauro and Jaco, for a total land area of 15,007 square kilometres (5,794 sq mi). Timor-Leste shares a land border with Indonesia to the west; Aust\n[…]\nThe subsequent Indonesian occupation was characterised by extreme abuses of human rights, including torture and massacres, a series of events named the East Timor genocide. Resistance continued throughout Indonesian rule and in 1999, a United Nations–sponsored act of self-determination led Indonesia to relinquish control of the territory. On 20 May 2002, Timor-Leste became the first new sovereign state of the 21st century.\n[…]\nOn 30 August 2001, the East Timorese voted in their first election organised by the UN to elect members of the Constituent Assembly. On 22 March 2002, the Constituent Assembly approved the Constitution. By May 2002, more than 205,000 refugees had returned. On 20 May 2002, the Constitution of the Democratic Republic of Timor-Leste came into force and Timor-Leste was recognised as independent by the UN.\n[…]\nThe Constituent Assembly was renamed the National Parliament, and Xanana Gusmão was elected as the country's first president. On 27 September 2002 the country became a UN member state.\n[…]\nPortuguese clergy were replaced with Indonesian priests and Latin and Portuguese Mass was replaced by Indonesian Mass. While just 20% of East Timorese called themselves Catholics at the time of the 1975 invasion, the figure surged to reach 95% by the end of the first decade after the invasion. The Catholic Church divides Timor-Leste into three dioceses: the Archdiocese of Díli, the Diocese of Baucau, and the Diocese of Maliana.\n[…]\nOutline of Timor-Leste\n[…]\nWikimedia Atlas of East Timor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Timor-Leste",
        "situacao": "ok",
        "texto": "Timor-Leste, oficialmente República Democrática de Timor-Leste (em tétum: Timor Lorosa'e, oficialmente Repúblika Demokrátika Timór-Leste), é um dos países mais jovens do mundo, e ocupa a parte oriental da ilha de Timor, no Sudeste Asiático, além do exclave de Oe-Cusse Ambeno, na costa norte da parte ocidental de Timor, da ilha de Ataúro, a norte, e do ilhéu de Jaco, ao largo da ponta leste da ilha\n[…]\nEm 1999, após um ato de autodeterminação patrocinado pelas Nações Unidas, o governo indonésio deixou o controle do território e Timor-Leste tornou-se o primeiro novo Estado soberano do século XXI, em 20 de maio de 2002. Após a independência, o país tornou-se membro das Nações Unidas, da Comunidade dos Países de Língua Portuguesa e, mais recentemente, da Associação de Nações do Sudeste Asiático. É um dos dois únicos países predominantemente cristãos no sudeste da Ásia, sendo o outro as Filipinas.\n[…]\nEm 30 de agosto de 2001, os timorenses votaram em sua primeira eleição organizada pela ONU para eleger os membros da Assembleia Constituinte, que aprovou a Constituição em 22 de março de 2002. Em maio de 2002, mais de 205 mil refugiados haviam retornado. Em 20 de maio de 2002, a Constituição da República Democrática de Timor-Leste entrou em vigor e Timor-Leste foi reconhecido como independente pela ONU.\n[…]\nDe acordo com a Constituição de Timor-Leste, o tétum e o português têm o estatuto de línguas oficiais. De acordo com parágrafo 3 do artigo 3 da Lei 1/2002, em caso de dúvida na interpretação das leis prevalece o português.\n[…]\nUm acordo provisório (o Tratado do Mar de Timor, assinado quando Timor-Leste tornou-se independente em 20 de maio de 2002) definiu uma Área de Desenvolvimento Petrolífero Conjunto (ACDP) e concedeu 90% das receitas de projetos já existentes nessa área para Timor-Leste e 10% para o governo australiano.\n[…]\nIlha de Timor\n[…]\nGoverno de Timor-Leste\n[…]\n«A Literatura em Timor-Leste»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Montenegro",
      "descricao": "País dos Bálcãs, na costa do Mar Adriático, com capital em Podgorica."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Depois de um referendo, o Montenegro se separou da Sérvia e virou um país independente em que ano?",
    "resposta": "2006",
    "fonte": [
      "https://en.wikipedia.org/wiki/Montenegro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Montenegro",
        "situacao": "ok",
        "texto": "Montenegro is a country in Southeastern Europe, on the Balkan Peninsula. Its 25 municipalities have a total population of 633,158 people in an area of 13,883 km2 (5,360 sq mi). It is bordered by Serbia to the northeast, Bosnia and Herzegovina to the northwest, Kosovo to the east, Albania to the southeast, and Croatia to the west, and has a coastline along the Adriatic Sea to the southwest. The cap\n[…]\nFollowing the breakup of Yugoslavia, the republics of Serbia and Montenegro together proclaimed a federation. In June 2006 Montenegro declared its independence following a referendum.\n[…]\nThe status of the union between Montenegro and Serbia was decided by a referendum on Montenegrin independence on 21 May 2006. A total of 419,240 votes were cast, representing 86.5% of the electorate; 230,661 votes (55.5%) were for independence and 185,002 votes (44.5%) were against. This narrowly surpassed the 55% threshold needed to validate the referendum under the rules set by the European Union. According to the electoral commission, the 55% threshold was passed by only 2,300 votes.\n[…]\nOn 3 June 2006, the Montenegrin Parliament declared the independence of Montenegro, formally confirming the result of the referendum.\n[…]\nOn 28 June 2006, Montenegro joined the United Nations as its 192nd member state.\n[…]\nFootball is the second most popular sport. The Montenegro national football team, founded in 2006, played in playoffs for UEFA Euro 2012, its highest play appearance. The Montenegro national basketball team is known for good performances and won many medals as part of the Yugoslavia national basketball team. In 2006, the Basketball Federation of Montenegro along with this team joined the International Basketball Federation (FIBA) on its own, following the Independence.\n[…]\nOfficial website National Parks Montenegro\n[…]\nWikimedia Atlas of Montenegro\n[…]\nGeographic data related to Montenegro at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Montenegro",
        "situacao": "ok",
        "texto": "Montenegro (em montenegrino: Crna Gora / Црна Гора, pronunciado AFI: [t͡sr̩̂ːnaː ɡɔ̌ra] (), literalmente \"montanha negra\") é uma pequena república montanhosa situada nos Balcãs, no sudeste da Europa, que faz fronteira com o mar Adriático a sudoeste, com a Albânia e o Cosovo a sudeste, com a Bósnia e Herzegovina e uma pequena fronteira com a Croácia a noroeste, e com a Sérvia a nordeste. A sua capi\n[…]\nEm 21 de maio de 2006 realizou-se um referendo para determinar a vontade do povo de se tornar independente ou de manter a união com a Sérvia. Os resultados indicaram que 55,5% dos eleitores haviam escolhido a independência, poucos décimos acima dos 55% requeridos pelo referendo. Em 3 de junho de 2006 o parlamento montenegrino declarou oficialmente a independência do novo país, mas só obteve aceitação da ONU no dia 28 de junho do mesmo ano.\n[…]\nEm 2002 a Sérvia e o Montenegro assinaram um novo acordo no tocante à cooperação dentro da federação. No ano seguinte, com o patrocínio da União Europeia, o país Jugoslávia desapareceu formalmente dos mapas e deu lugar a uma nova entidade chamada Sérvia e Montenegro, com o projecto de o Montenegro realizar um referendo sobre a independência até 2006.\n[…]\nO Montenegro realizou um referendo no dia 21 de maio de 2006 para determinar se se tornaria um estado independente ou se continuaria a fazer parte da união com a Sérvia. A independência do Montenegro saiu vencedora por 55,5% dos votos, 0,5% acima do limite mínimo exigido pela União Europeia para reconhecer o novo estado.[carece de fontes]?\n[…]\nO pequeno Estado balcânico do Montenegro tornou-se no dia 28 de junho de 2006 o 192.º país-membro da ONU (Organização das Nações Unidas), menos de um mês depois de ter proclamado sua independência. A independência do Montenegro foi reconhecida pela União Europeia, Estados Unidos, China, Rússia e outros países.\n[…]\nMontenegro é dividido em 21 municípios, que são:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Haiti",
      "descricao": "País caribenho na porção oeste da ilha de Hispaniola, com capital em Porto Príncipe."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Após uma revolução liderada por escravizados, o Haiti proclamou sua independência da França em que ano?",
    "resposta": "1804",
    "fonte": [
      "https://en.wikipedia.org/wiki/Haitian_Revolution"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Haitian_Revolution",
        "situacao": "ok",
        "texto": "The Haitian Revolution, also known as the Haitian War of Independence, was a successful insurrection by enslaved Africans against French colonial rule in Saint-Domingue, now the sovereign state of Haiti. The revolution was one of the only known slave rebellions in human history that led to the founding of a state which was both free from slavery (though not from forced labour) and ruled by former \n[…]\nOn 1 January 1804, Dessalines, the new leader under the dictatorial 1805 constitution, declared Haiti a free republic in the name of the Haitian people, which was followed by the massacre of the remaining whites.\n[…]\nJust as the French were successful in transforming their society, so were the Haitians. On 4 April 1792, the French Legislative Assembly granted freedom to slaves in Saint-Domingue. The revolution culminated in 1804; Haiti was an independent state solely of freed peoples. The activities of the revolutions sparked change across the world. France's transformation was most influential in Europe, and Haiti's influence spanned every location that continued to practice slavery. John E.\n[…]\nOne thing is certain: Haiti became an independent country on 1 January 1804, when the council of generals chose Jean-Jacques Dessalines to assume the office of governor-general. One of the state's first significant documents was Dessaliness' \"Liberty or Death\" speech, which circulated broadly in the foreign press. In it, the new head of state made the case for the new nation's objective: the permanent abolition of slavery in Haiti.\n[…]\nIn 2004, an exhibition of paintings entitled Caribbean Passion: Haiti 1804 by artist Kimathi Donkor, was held in London to celebrate the bicentenary of Haiti's revolution.\n[…]\nHaiti Archives\n[…]\nThe Other Revolution: Haiti, 1789–1804 Archived 18 February 2015 at the Wayback Machine, digital exhibition from Brown University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Revolu%C3%A7%C3%A3o_Haitiana",
        "situacao": "ok",
        "texto": "A Revolução Haitiana (em francês: révolution haïtienne; em crioulo haitiano: revolisyon ayisyen) foi uma insurreição bem-sucedida de escravos auto-libertados contra o domínio colonial francês em São Domingos, agora o estado soberano do Haiti. A revolta começou em 22 de agosto de 1791, e terminou em 1804 com a independência da ex-colônia.\n[…]\nEnvolveu participantes negros, mestiços, franceses, espanhóis, britânicos e poloneses — com o ex-escravo Toussaint Louverture emergindo como o herói mais carismático do Haiti junto de Jean-Jacques Dessalines, Henri Christophe, e outros. Louverture teve um papel de grande importância na Revolução Haitiana, uma vez que foi o responsável por liderar e por mobilizar a grande revolta negra em prol da necessidade de instaurar a liberdade e a igualdade em São Domingos.\n[…]\nSchoelcher reconhece o papel histórico dos ex-escravizados haitianos na construção de uma república independente. Embora sua análise contenha tensões e contradições — sobretudo em relação à elite política haitiana e à noção de civilização —, ela representa uma exceção significativa ao silenciamento dominante.\n[…]\nTomich argumenta que conceitos como liberdade, cidadania e humanidade estavam em disputa no século XIX, e que a Revolução Haitiana não foi apenas esquecida, mas constituiu um campo de embate político e simbólico. A tentativa de Schoelcher de reinscrever o Haiti no horizonte do republicanismo francês revela que, mesmo dentro do pensamento europeu, havia espaços de deslocamento conceitual e abertura à transformação.\n[…]\nA figura do escravizado que conquista sua liberdade por meio da luta direta se assemelha à dinâmica de reconhecimento e negação descrita por Hegel, sugerindo que o Haiti teria servido como modelo empírico e simbólico para uma das passagens mais influentes da filosofia moderna.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Bangladesh",
      "descricao": "País do sul da Ásia, antes chamado Paquistão Oriental, com capital em Daca."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Antes chamado Paquistão Oriental, Bangladesh conquistou a independência numa guerra em que ano?",
    "resposta": "1971",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War",
        "situacao": "ok",
        "texto": "The Bangladesh Liberation War (Bengali: মুক্তিযুদ্ধ, pronounced [mukt̪iɟud̪d̪ʱo]), also known as the Bangladesh War of Independence, was an armed conflict sparked by the rise of the Bengali nationalist and self-determination movement in East Pakistan, which resulted in the independence of Bangladesh with the help of India.\n[…]\n26 March 1971 is considered the official Independence Day of Bangladesh, and the name Bangladesh was in effect henceforth. In July 1971, Indian prime minister Indira Gandhi openly referred to the former East Pakistan as Bangladesh.\n[…]\nFollowing Sheikh Mujibur Rahman's declaration of independence in March 1971, a worldwide campaign was undertaken by the Provisional Government of Bangladesh to drum up political support for the independence of East Pakistan as well as humanitarian support for the Bengali people.\n[…]\nAs the Bangladesh Liberation War approached the defeat of the Pakistan Army, the Himalayan kingdom of Bhutan became the first state in the world to recognize the newly independent country on 6 December 1971. Sheikh Mujibur Rahman, the first president of Bangladesh, visited Bhutan to attend the coronation of Jigme Singye Wangchuck, the fourth King of Bhutan in June 1974.\n[…]\nThe Soviet Union supported Bangladesh and Indian armies, as well as the Mukti Bahini during the war, recognising that the independence of Bangladesh would weaken the position of its rivals—the United States and the People's Republic of China. It gave assurances to India that if a confrontation with the U.S. or China developed, the USSR would take countermeasures. This was enshrined in the Indo-Soviet friendship treaty signed in August 1971.\n[…]\nHandwritten Constitution of Bangladesh\n[…]\n1971 Bangladesh Genocide Archive\n[…]\n1971 Massacre in Bangladesh and the Fallacy in the Hamoodur Rahman Commission Report, Dr. M.A. Hasan"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guerra_de_Independ%C3%AAncia_de_Bangladesh",
        "situacao": "ok",
        "texto": "A Guerra de Independência de Bangladesh ou Guerra da Libertação do Bangladesh (em bengali: মুক্তিযুদ্ধ Muktijuddho) foi uma guerra entre o Paquistão Ocidental (atual Paquistão) e o Paquistão Oriental (atual Bangladesh) (duas metades do mesmo país) e a Índia, que resultou na secessão do Paquistão Oriental que tornou-se uma nação independente: o Bangladesh.\n[…]\nA guerra durou de 26 março até 16 de dezembro de 1971 e começou com uma revolta no então Paquistão Oriental liderada pelos Mukti Bahini.\n[…]\nNuma Frente Unida, o movimento derrotou a Liga Muçulmana, conservadora, nas eleições locais de 1954 (228 lugares para 7), mas isto não abalou o controlo dos sucessivos regimes militares em Islamabad. A Liga Awami ganhou as eleições legislativas de Dezembro de 1970, mas foi-lhe ainda negada a independência. A 7 de Março de 1971, Mujibur Rahman, líder da Liga Awami, apelou a um movimento de desobediência civil e a uma greve geral.\n[…]\nDurante os meses seguintes, a Índia deu desde o apoio diplomático a económico, militar a Mukti Bahini do Paquistão Oriental. O apoio indiano à insurreição terminou em uma guerra entre a Índia e o Paquistão (a Guerra Indo-Paquistanesa de 1971), em 3 de dezembro de 1971, o Paquistão (do Oeste) lançou um ataque à fronteira ocidental da Índia, que marcou o início da guerra indo-paquistanesa.\n[…]\nFinalmente, em 16 de dezembro de 1971, as forças aliadas do exército indiano e as de Mukti Bahini (Exército de Libertação de Bangladesh, comandadas por Khaled Mosharraf) derrotaram decisivamente as forças do Paquistão Ocidental deslocadas para o oeste, resultando na maior rendição, nos termos em números de prisioneiro de guerra, desde a Segunda Guerra Mundial.\n[…]\nA guerra terminou com a independência do Paquistão Oriental que agora se chama Bangladesh.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "São Petersburgo",
      "descricao": "Cidade russa às margens do rio Neva, fundada em 1703 e capital da Rússia entre 1712 e 1918."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1703, qual czar fundou São Petersburgo, cidade que depois seria a capital da Rússia por cerca de dois séculos?",
    "resposta": "Pedro, o Grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Petersburg"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Petersburg",
        "situacao": "ok",
        "texto": "Saint Petersburg, formerly known as Petrograd (Петроград), and later Leningrad (Ленинград), is the second-largest city in Russia, after Moscow, the nation's capital. Situated on the Neva River at the head of the Gulf of Finland on the Baltic Sea, its area of 1,439 square kilometers (556 sq mi) makes it the smallest administrative division of Russia by area. The city had a population of 5,601,911 r\n[…]\nThe city was founded by Tsar Peter the Great on 27 May 1703 on the site of a captured Swedish fortress, and was named after the apostle Saint Peter. In Russia, Saint Petersburg is historically and culturally associated with the birth of the Russian Empire and Russia's entry into modern history as a European great power. It served as a capital of the Tsardom of Russia, and the subsequent Russian Empire, from 1712 to 1918 (being replaced by Moscow for a short period between 1728 and 1730).\n[…]\nThe historic architecture of Saint Petersburg's city centre, mostly Baroque and Neoclassical buildings of the 18th and 19th centuries, has been largely preserved; although a number of buildings were demolished after the Bolsheviks' seizure of power, during the Siege of Leningrad and in recent years. The oldest of the remaining buildings is a wooden house built for Peter I in 1703 on the shore of the Neva near Trinity Square.\n[…]\nSeveral museums provide insight into the Soviet history of Saint Petersburg, including the Museum of the Blockade, which describes the Siege of Leningrad and the Museum of Political History of Russia, which explains many authoritarian features of the USSR.\n[…]\nSister cities of Saint Petersburg (not included on official government list)\n[…]\nAtchinson, Bob (2010). \"Saint Petersburg, 1900: a photographic travelogue of the capital of Imperial Russia\". Retrieved 9 February 2011. 50 photographs of St. Petersburg from \"Travelogues\" of Burton Holmes (Vol. 8, 1914) and other sources"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Petersburgo",
        "situacao": "ok",
        "texto": "São Petersburgo ou Sampetersburgo (russo:  Санкт-Петербу́рг, tr. Sankt-Peterburg) é a segunda maior cidade da Rússia, politicamente incorporada como uma cidade autônoma (ou cidade federal). Ela está localizada ao longo do rio Neva, na entrada do Golfo da Finlândia, no Mar Báltico. Em 1914, o nome da cidade foi mudado para Petrogrado (russo:  Петроград) e, em 1924, para Leningrado (russo:  Ленингра\n[…]\nSão Petersburgo foi fundada pelo czar Pedro, o Grande em 27 de maio de 1703. Entre 1713–1728 e 1732–1918, foi a capital do Império Russo. Em 1918, as instituições da administração central mudaram-se de São Petersburgo (então denominada Petrogrado) para Moscou. Com 5 milhões de habitantes (2012) é a quarta subdivisão federal mais populosa do país. A cidade é um grande centro cultural europeu e também um importante porto russo no Báltico.\n[…]\nO czar Pedro I, o Grande era um grande interessado pela marinha, e aspirava pela construção de um novo porto para o Império Russo, já que a principal cidade portuária do país, Archangelsk, localizava-se no mar Branco, que era bloqueado para navegação durante os meses de inverno rigoroso. Em 12 de maio de 1703, durante a Grande Guerra do Norte, Pedro capturou a cidade de Nyenskans das mãos dos suecos.\n[…]\nEm 27 de maio de 1703, próximo do estuário da ilha de Hare, o czar estabeleceu o Forte de Pedro e Paulo, que daria início à construção da cidade.[carece de fontes]?\n[…]\nO primeiro evento de remo da cidade ocorreu em 1703, por incentivo do czar Pedro, o Grande, após a vitória contra a frota sueca. Os eventos navais eram organizados pela marinha desde a fundação da cidade. O principal grupo marítimo da cidade, o Yacht Club do Neva, é o mais velho do mundo. Mesmo no inverno, quando as superfícies dos rios e lagos se congelam, os praticantes não abandonam as atividades, e navegam sobre o gelo.\n[…]\nArtigo sobre São Petersburgo\n[…]\nLista telefônica de São Petersburgo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Lima",
      "descricao": "Capital e maior cidade do Peru, fundada em 1535."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1535, qual conquistador espanhol fundou Lima, chamada originalmente de Cidade dos Reis?",
    "resposta": "Francisco Pizarro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lima"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lima",
        "situacao": "ok",
        "texto": "Lima is the capital and largest city of Peru, as well as a primate city. It is located in the valleys of the Chillón, Rímac and Lurín Rivers, in the desert zone of the central coastal part of the country, overlooking the Pacific Ocean. The city is considered the political, cultural, financial and commercial center of Peru.\n[…]\nIn 1532, the Spanish and their indigenous allies (from the ethnic groups subdued by the Incas) under the command of Francisco Pizarro took monarch Atahualpa prisoner in the city of Cajamarca. Although a ransom was paid, he was sentenced to death for political and strategic reasons. After some battles, the Spanish conquered their empire. The Spanish Crown named Francisco Pizarro governor of the lands he had conquered.\n[…]\nPizarro, with the collaboration of Nicolás de Ribera, Diego de Agüero and Francisco Quintero personally traced the Plaza Mayor and the rest of the city grid, building the Viceroyalty Palace (today transformed into the Government Palace of Peru, which hence retains the traditional name of Casa de Pizarro) and the Cathedral, whose first stone Pizarro laid with his own hands.\n[…]\nThe executive branch is headquartered in the Government Palace, located in the Plaza Mayor. The Palace, also known as the House of Pizarro, was first constructed in 1535 by Francisco Pizarro. It was renovated in 1937 and serves as the official residence of the president of Peru. All national ministries are located in the city.\n[…]\nThese fine examples of medieval Spanish fortifications were used to defend the city from attacks by pirates and corsairs. For this, part of the Walls corresponding to the rear area of the Basilica of San Francisco, very close to the Government Palace, was recovered, in which a park was built (called Parque de la Muralla) and in which you can see remains of it."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lima",
        "situacao": "ok",
        "texto": "Lima (pronunciado em português: [ˈlimɐ]; pronunciado em castelhano: [ˈlima]) é a capital e a maior cidade do Peru. Localiza-se nos vales dos rios Chillón, Rímac e Lurín, na parte central do litoral peruano, com vista para o Oceano Pacífico.\n[…]\nLima foi fundada pelo conquistador espanhol Francisco Pizarro em 18 de janeiro de 1535, sendo conhecida como Cidade dos Reis (em castelhano: Ciudad de los Reyes), tornando-se a capital e mais importante cidade do Vice-Reino do Peru. Após a Guerra da Independência Peruana, tornou-se a capital da República do Peru.\n[…]\nEm 1532, os espanhóis e seus aliados indígenas, sob comando de Francisco Pizarro, tomaram, prisioneiro, o inca Atahualpa em plena cerimônia religiosa na cidade de Cajamarca e, mesmo com o pagamento de um resgate, este foi assassinado após um julgamento simulado em que foi acusado de heresia e condenado à morte. Este acontecimento é considerado o primeiro assassinato político na nascente sociedade peruana.\n[…]\nLogo após algumas batalhas, os espanhóis conquistaram seu império e, com isto, a coroa espanhola nomeou Francisco Pizarro como governador das terras que conquistou. Assim, decidiu fundar a capital no vale do rio Rímac, logo após a intenção falhada de constituir uma capital em Jauja. Em 18 de janeiro de 1535, a Lima espanhola foi fundada como a \"Cidade dos Reis\" sobre os territórios do cacique Taulichusco. Em agosto de 1536, a cidade foi sitiada pelas tropas de Manco Capac II.\n[…]\nUma viagem pelo distrito central visita igrejas que datam dos séculos XVI e XVII, das quais destacam-se a Catedral e o Mosteiro de São Francisco, que estão conectados por catacumbas subterrâneas. Ambos contêm pinturas, telhas de Sevilha e móveis de madeira esculpida.\n[…]\nMetrô de Lima",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Santiago do Chile",
      "descricao": "Capital e maior cidade do Chile, fundada em 1541."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1541, qual conquistador espanhol fundou Santiago, a capital chilena?",
    "resposta": "Pedro de Valdivia",
    "distratores": [
      "Diego de Almagro",
      "Hernán Cortés",
      "Francisco de Orellana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Santiago",
      "https://en.wikipedia.org/wiki/Pedro_de_Valdivia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santiago",
        "situacao": "ok",
        "texto": "Santiago ( SAN-tee-AH-goh, US also  SAHN-; Spanish: [sanˈtjaɣo]), also known as Santiago de Chile (Spanish: [sanˈtjaɣo ðe ˈtʃile] ), is the capital and largest city of Chile and one of the largest cities in the Americas.\n[…]\nThe basin that Santiago occupies has been inhabited since at least the 10th millennium BC, with early agricultural villages established along the Mapocho River and later incorporated into the Inca sphere of influence. During the Spanish invasion of the Americas, conquistador Pedro de Valdivia founded the colonial city of Santiago del Nuevo Extremo on 12 February 1541, laying out a grid plan around the Plaza Mayor (now Plaza de Armas).\n[…]\nOn 12 February 1541, Valdivia officially founded the city of Santiago del Nuevo Extremo ('Santiago of New Extremadura') in honor of the Apostle James, the patron saint of Spain. The city was established near Huelén, which Valdivia renamed Santa Lucía. He assigned the city's layout to master builder Pedro de Gamboa, who designed a grid plan. At its center, Gamboa placed a Plaza Mayor, which became the town's central hub.\n[…]\nBandera street leads toward the building of the Santiago Stock Exchange (the Bolsa de Comercio), completed in 1917, the Club de la Unión (opened in 1925), the Universidad de Chile (1872), and toward the oldest churchhouse in the city, the San Francisco Church (constructed between 1586 and 1628), with its Marian statue of the Virgen del Socorro (\"Our Lady of Help\"), which was brought to Chile by Pedro de Valdivia.\n[…]\nUniversidad de Santiago de Chile (USACH)\n[…]\nChile portal\n[…]\nMedia related to Santiago de Chile at Wikimedia Commons\n[…]\nSantiago de Chile travel guide from Wikivoyage\n[…]\n\"Santiago de Chile\" . Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pedro_de_Valdivia",
        "situacao": "ok",
        "texto": "Pedro Gutiérrez de Valdivia or Valdiva (Spanish pronunciation: [ˈpeðɾo ðe βalˈdiβja]; April 17, 1497 – December 25, 1553) was a Spanish conquistador and the first Governor of Colonial Chile. After having served with the Spanish army in Italy and Flanders, he was sent to South America in 1535, where he served as a soldier under the Pizarro brothers in Peru, gradually rising in power.\n[…]\nPedro de Valdivia is believed to have been born in Villanueva de la Serena\n[…]\nAfter an apparent peaceful period the Natives began to resist the invaders. Valdivia marched against the tribes and defeated them at Cachapoal. While away, on September 11, 1541, local people led by Michimalonco attacked Santiago. The defense of the city was led by Pedro's mistress Inés de Suárez. The Spaniards, desperate and willing to fight until death, were able to eventually push the Natives back; Valdivia and his troops made it back just in time to relieve the capital.\n[…]\nIn 1544 Valdivia sent a naval expedition consisting of the barks San Pedro and Santiaguillo, under the command of Juan Bautista Pastene, to reconnoiter the southwestern coast of South America, ordering him to reach the Strait of Magellan. The expedition set sail from Valparaíso and although Pastene did not reach this goal, he explored much of the coast.\n[…]\nAnother contemporary chronicler, Pedro Mariño de Lobera, wrote that Valdivia offered to evacuate the lands of the Mapuche but says he was shortly thereafter killed with a large club by a vengeful warrior named Pilmaiquen, who said that Valdivia could not be trusted to keep his word once freed. Lobera says that a common story in Chile at the time was that Valdivia had been killed by being forced to drink molten gold, although this story was most likely apocryphal.\n[…]\nMedia related to Pedro de Valdivia at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Santiago_%28Chile%29",
        "situacao": "ok",
        "texto": "Santiago (pronunciado em português europeu: [sɐ̃ˈtjagu]; pronunciado em português brasileiro: [sɐ̃tʃiˈagu] ou [sɐ̃ˈtjagu]; pronunciado em castelhano: [san̪ˈtja.ɣo]; literalmente \"São Tiago\"), por vezes chamada Santiago do Chile (em castelhano: Santiago de Chile, pronunciado: [san̪ˈtja.ɣo ðe ˈtʃi.le] ()) para a distinguir de cidades homónimas, é a capital e a maior cidade do Chile. Está localizada \n[…]\nSantiago foi fundada pelo conquistador espanhol Pedro de Valdivia, no dia 12 de fevereiro de 1541, com o nome de \"Santiago de Nueva Extremadura\" (em honra ao Apóstolo Santiago, santo patrono da Espanha). A cerimônia de fundação ocorreu no \"Cerro Huelén\" (renomeado por Valdívia como Cerro Santa Lúcia). Assim, Pedro de Valdivia iniciou a conquista do Chile. Foi escolhida essa região por seu clima moderado e por estar ao lado do rio Mapocho.\n[…]\nA cidade foi palco da Guerra da Independência (1810-1818). Com a conquista da independência em 1818, logo foi nomeada capital, nesse mesmo ano.\n[…]\nGraças à gestão do intendente Benjamín Vicuña Mackenna (1872-1875), se criou a estrada do Cerro Santa Lúcia e começou a expansão da cidade. Na década de 1880, as salitreiras do norte do Chile trouxeram prosperidade ao país, promovendo o crescimento de Santiago. No entanto, mesmo no final do século XIX, Santiago não passava de uma pequena capital, com poucos edifícios, entre eles, o Palácio de La Moneda, prédio utilizado pelo governo chileno, algumas igrejas e outros prédios cívicos.\n[…]\nA cidade de Santiago é o principal centro financeiro e comercial do Chile e um dos mais importantes da América Latina. Segundo o Banco Central chileno, o Produto Interno Bruto (PIB) da Região Metropolitana de Santiago em 2005 foi de 46 trilhões de pesos chilenos (aproximadamente 93 bilhões de dólares), o equivalente a 45% do PIB total do Chile naquele ano.\n[…]\nHistória do Chile",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Madri",
      "descricao": "Capital e maior cidade da Espanha, no centro da Península Ibérica."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1561, qual rei transferiu a corte espanhola para Madri, transformando a cidade em capital?",
    "resposta": "Filipe II",
    "fonte": [
      "https://en.wikipedia.org/wiki/Madrid",
      "https://en.wikipedia.org/wiki/Philip_II_of_Spain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Madrid",
        "situacao": "ok",
        "texto": "Madrid is the capital and largest city of Spain. It had a population of over 3.4 million in the city proper in 2025, and a metropolitan area population of approximately 6.8 million. Madrid is the second-largest city in the European Union (EU), after Berlin, and its metropolitan area is the second-largest in the EU, after Paris. The municipality covers an area of 605.77 square kilometres (233.89 sq\n[…]\nThanks to this, Madrid became the political centre of the monarchy, being the capital of Spain except for a short period between 1601 and 1606, in which the Court was relocated to Valladolid, and the Madrid population temporarily plummeted. Being the capital was decisive for the evolution of the city and influenced its fate. During the rest of the reign of Philip II, the population boomed, going up from about 18,000 in 1561 to 80,000 in 1598.\n[…]\nAs the capital city of the Spanish Empire from 1561, Madrid's population grew rapidly. Administration, banking, and small-scale manufacturing centred on the royal court were among the main activities, but the city was more a locus of consumption than production or trade, geographically isolated as it was before the coming of the railways.\n[…]\nPhilip II moved his court to Madrid in 1561 and transformed the town into a capital city. During the Early Habsburg period, the import of European influences took place, underpinned by the monicker of Austrian style. The Austrian style features Austrian, Italian, Dutch and Spanish influences, reflecting on the international preeminence of the Habsburgs.\n[…]\nAlready very popular among the Madrilenian people, as Madrid became the capital of the Hispanic Monarchy in 1561 the town council pulled efforts to promote his canonisation; the process started in 1562. Isidro was beatified in 1619 and the feast day set on 15 May (he was finally canonised in 1622).\n[…]\nList of films set in Madrid\n[…]\nPostal codes in Madrid"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Philip_II_of_Spain",
        "situacao": "ok",
        "texto": "Philip II (21 May 1527 – 13 September 1598), sometimes known in Spain as Philip the Prudent (Spanish: Felipe el Prudente), was King of Spain from 1556, King of Portugal from 1580, and King of Naples and Sicily from 1554 until his death in 1598. He was also jure uxoris King of England and Ireland from his marriage to Queen Mary I in 1554 until her death in 1558. Further, he was Duke of Milan from 1\n[…]\nInstead, with the traditional Royal and Primacy seat of Toledo now essentially obsolete, he moved his Court to the Castilian stronghold of Madrid. Except for a brief period under Philip III of Spain, Madrid has remained the capital of Spain. It was around this time that Philip II converted the Royal Alcázar of Madrid into a royal palace; the works, which lasted from 1561 until 1598, were done by tradesmen who came from the Netherlands, Italy, and France.\n[…]\nPhilip II of Spain assumed the Portuguese throne and was crowned Philip I of Portugal on 17 July 1580 (recognized as king by the Portuguese Cortes of Tomar) and a near sixty-year personal union under the rule of the Philippine Dynasty began. This gave Philip control of the extensive Portuguese Empire. When Philip left for Madrid in 1583, he made his nephew Albert of Austria his viceroy in Lisbon.\n[…]\nIn Madrid he established a Council of Portugal to advise him on Portuguese affairs, giving prominent positions to Portuguese nobles in the Spanish courts, and allowing Portugal to maintain autonomous law, currency, and government. This followed on the well-established pattern of rule by councils.\n[…]\nRoyal Armoury of Madrid"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Madrid",
        "situacao": "ok",
        "texto": "Madrid ou Madri (apenas em português brasileiro) (em castelhano: Madrid AFI: [maˈðɾið], localmente: [maˈðɾiθ, -ˈðɾi]) é a capital e a maior cidade da Espanha. Em 2021 o município tinha 3 305 408 habitantes e a sua área metropolitana tinha cerca de 6,8 milhões de habitantes. É a segunda maior cidade da União Europeia (UE), depois de Berlim, e sua área metropolitana é a segunda maior da UE, depois d\n[…]\nApós um grande incêndio que destruiu parcialmente a cidade, o rei Henrique III de Castela (1379–1406) ordenou sua reconstrução; o monarca ficou instalado num palácio no exterior da cidade, El Pardo. O Reino de Castela, cuja capital era Toledo, e o de Aragão, com a capital em Saragoça, uniram-se formando a Espanha devido ao casamento dos Reis Católicos (Isabel de Castela e Fernando II de Aragão). Em 1561, o rei Filipe II (r.\n[…]\n1527–1598) mudou a corte de Sevilha para Madrid, tornando a cidade na capital de Espanha, apesar de não ter havido uma cerimónia que assinalasse esse facto. Sevilha continuava a controlar todo o comércio das colónias espanholas, mas Madrid controlava Sevilha. Salvo um período, entre 1601–1606, em que o rei Filipe III transferiu a capitalidade para Valhadolide, Madrid foi até hoje a capital de Espanha.[carece de fontes]?\n[…]\nO salário médio em Madrid em 2007 foi de 2 540 EUR, claramente acima da média espanhola de 2 085 EUR. Em termos de receita líquida, a cidade também fica em primeiro lugar na Espanha e 28º no mundo.\n[…]\nA Praça Maior é um dos locais mais emblemáticos de cidade de Madrid. Situada no centro comercial da cidade, é uma praça portificada de planta rectangular completamente rodeada por edifícios. Existem ao todo nove entradas para a praça. Foi construída durante o período Austríaco. Originalmente o seu nome era Plaza del Arrabal e foi projectada por Juan de Herrera, em 1581, a mando do rei Filipe II, com o fim de remodelar a caótica e atarefada zona.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Singapura",
      "descricao": "Cidade-Estado insular do Sudeste Asiático, na ponta sul da Península Malaia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1819, qual britânico fundou o entreposto comercial que deu origem à Singapura moderna?",
    "resposta": "Stamford Raffles",
    "fonte": [
      "https://en.wikipedia.org/wiki/Stamford_Raffles"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Stamford_Raffles",
        "situacao": "ok",
        "texto": "Sir Thomas Stamford Bingley Raffles (5 July 1781 – 5 July 1826) was a British colonial official who served as the governor of the Dutch East Indies between 1811 and 1816 and lieutenant-governor of Bencoolen between 1818 and 1824. Raffles was involved in the capture of the Indonesian island of Java from the Dutch during the Napoleonic Wars. It was returned under the Anglo–Dutch Treaty of 1824. He a\n[…]\nThomas Stamford Bingley Raffles was born on (1781-07-05)5 July 1781 on board the ship Ann, off the coast of Port Morant, Jamaica, to Captain Benjamin Raffles and Anne Raffles (née Lyde). Benjamin served as a ship master for various ships engaged in the direct trade between England and the West Indies. Although some biographers have suggested that Benjamin was involved in the slave trade, modern historians have refuted such claims.\n[…]\nPersonal tragedies also started for Raffles. His eldest son, Leopold Stamford (b. 1819), died during an epidemic on 4 July 1821. The oldest daughter, Charlotte (b. 1818), was also sick with dysentery by the end of the year, but it would be his youngest son, Stamford Marsden (b. 1820), who would perish first with the disease, on 3 January 1822, with Charlotte to follow 10 days later. For the good part of four months, the couple remained devastated.\n[…]\nStamford Road\n[…]\nQuotations related to Stamford Raffles at Wikiquote\n[…]\nMedia related to Stamford Raffles at Wikimedia Commons\n[…]\nWorks by or about Thomas Stamford Raffles at Wikisource\n[…]\nPortraits of Stamford Raffles at the National Portrait Gallery, London\n[…]\nFiraci, Biagio (10 June 2014). \"Sir Thomas Stamford Raffles and the British colonisation of Singapore among Penang, Melaka and Bencoonen\". Singlish.it. Archived from the original on 28 October 2019. Retrieved 5 May 2021.\n[…]\nHamilton, John (1896). \"Raffles, Thomas Stamford\" . Dictionary of National Biography. Vol. 47. pp. 161–165.\n[…]\nThomas Stamford Raffles at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Stamford_Raffles",
        "situacao": "ok",
        "texto": "Thomas Stamford Bingley Raffles (No mar, frente a Port Morant, Jamaica, 5 de julho de 1781 – Baret, Inglaterra, 5 de julho de 1826)  foi um estadista britânico famoso por ter fundado Singapura. Ele serviu como vice-governador de Java (1811-1815) e governador geral de Bencoolen (1817-1822).\n[…]\nRaffles é creditado com a criação do Império Britânico no Extremo Oriente. Fundou o porto de Singapura em 1819 para garantir o acesso britânico aos mares da China; em 1824, o Império Holandês desistiu de suas reivindicações sobre Singapura.\n[…]\nThomas Stamford Raffles nasceu na costa da Jamaica, a bordo de um navio mercante comandado por seu pai, que deixou sua família na pobreza ao morrer, forçando Raffles a deixar a escola, e foi autodidata.\n[…]\nRaffles aumentou a influência britânica no sudeste da Ásia, estabelecendo e fundando a colônia de Singapura em 1819, com a permissão do Sultanato de Johor. Decidiu criar um porto comercial, necessário em virtude da troca de mercadorias entre a China e o Reino Unido. Retornou então a Bengkulu, onde permaneceu por três anos, retornando a Singapura em 1822 para organizar a administração colonial da ilha.\n[…]\nEm 1823, ele fundou a primeira escola secundária em Singapura. Foi chamado de Singapore Institution até depois de sua morte, quando o nome foi alterado para Raffles Institution, em sua homenagem.\n[…]\nTheridion rafflesi\n[…]\nFiraci, Biagio (2014). «Sir Thomas Stamford Raffles and the British colonisation of Singapore among Penang, Melaka and Bencoonen». Singlish.it. Cópia arquivada em 2019\n[…]\nHamilton, John (1896). «Raffles, Thomas Stamford». In:  Lee, Sidney. Dictionary of National Biography. 47. Londres: Smith, Elder & Co. pp. 161–165\n[…]\nThomas Stamford Raffles (em inglês) no Find a Grave\n[…]\n«Raffles and the Golden Opportunity». The Guardian (em inglês). 2012",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Washington, D.C.",
      "descricao": "Capital federal dos Estados Unidos, situada no Distrito de Colúmbia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1791, qual engenheiro de origem francesa traçou o plano urbano de Washington, com suas grandes avenidas diagonais?",
    "resposta": "Pierre Charles L'Enfant",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pierre_Charles_L%27Enfant",
      "https://en.wikipedia.org/wiki/L%27Enfant_Plan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pierre_Charles_L%27Enfant",
        "situacao": "ok",
        "texto": "Pierre \"Peter\" Charles L'Enfant (French: [pjɛʁ ʃɑʁl lɑ̃fɑ̃]; August 2, 1754 – June 14, 1825) was a French-American artist, professor, and military engineer. In 1791, L'Enfant designed the baroque-styled plan for the development of Washington, D.C., after it was designated to become the capital of the United States following its relocation from Philadelphia. His work, known as the L'Enfant Plan, in\n[…]\nThe design and development of Washington, D.C. is the story of six influential men: three presidents and three visionary figures who shaped the city. George Washington, Ulysses S. Grant and Theodore Roosevelt provided crucial presidential leadership, while Pierre Charles L'Enfant, Alexander Robey Shepherd, and Frederick Law Olmsted Jr. made significant contributions to the city's design and development.\n[…]\nStephenson, Richard W. (1993). A Plan Whol[l]y new : Pierre Charles L'Enfant's Plan of the City of Washington. Washington, D.C.: Library of Congress. ISBN 0844406996. LCCN 92028798. OCLC 606533104. Retrieved June 22, 2017 – via Google Books.\n[…]\nDorney Jr., Douglas R., \"Major Peter Charles L’Enfant: Artist and Engineer of the Revolution,\" Journal of American Revolution, January 30, 2024. https://allthingsliberty.com/2024/01/major-peter-charles-lenfant-artist-and-engineer-of-the-revolution/\n[…]\n\"Pierre Charles L'Enfant\". Arlington National Cemetery: Historical Information. arlingtoncemetery.org – an unofficial website. Archived from the original on July 4, 2010. Retrieved March 4, 2017.\n[…]\nGraham, Jed (July 21, 2006). \"Pierre Charles L'Enfant: Major, United States Army: Designer Of Washington, D.C.\" ArlingtonCemetery.net. (Unofficial website). Archived from the original on May 26, 2016. Retrieved March 4, 2017. L'Enfant served under Washington at Valley Forge, Pennsylvania, during the winter of 1777–78 and became known for his pencil portraits of officers, including Washington."
      },
      {
        "url": "https://en.wikipedia.org/wiki/L%27Enfant_Plan",
        "situacao": "ok",
        "texto": "The L'Enfant Plan is an urban plan for Washington, D.C. designed by French artist and engineer Pierre Charles L'Enfant in 1791. It is regarded as a landmark in urban design and has inspired plans for other world capitals such as Brasília, New Delhi, and Canberra. In the United States, plans for Detroit, Indianapolis, and Sacramento took inspiration from the plan.\n[…]\nIn November 1791, L'Enfant secured the lease of quarries at Wigginton Island and southeast along Aquia Creek to supply well-regarded Aquia Creek sandstone for the foundation of the Congress House.\n[…]\nUnder the direction of the commissioners, Andrew Ellicott had in 1791 been conducting the first survey of the boundaries of the federal district (the \"Territory of Columbia\") as well as assisting L'Enfant in the planning and survey of the smaller federal city (the \"City of Washington\"). In February 1792, Ellicott informed the commissioners that L'Enfant had not been able to have the city plan engraved and had refused to provide him with an original version of the plan for the city.\n[…]\nIn 1930, the chief of the Division of Maps at the Library of Congress compared the wording in one of reproduced tracings to the wording in an annex to a plan of the City of Washington  which, according to a January 1792 publication, President Washington had recently sent to Congress and which contained the words \"By Peter Charles L'Enfant\". The librarian concluded that the two maps were not the same.\n[…]\nIn 1980, the Pennsylvania Avenue Development Corporation constructed Western Plaza along Pennsylvania Avenue in Northwest Washington, D.C. Designed by architect Robert Venturi and renamed in 1988 to Freedom Plaza, the plaza contains an inlay that partially depicts the L'Enfant Plan. The last line in an oval inscribed in the Plaza contains the words \"By Peter Charles L'Enfant\" written in a serif typeface."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pierre_Charles_L%27Enfant",
        "situacao": "ok",
        "texto": "Pierre (\"Peter\") Charles L'Enfant (Paris, 2 de agosto de 1754 — Condado de Prince George's, 14 de junho de 1825) foi um arquiteto e engenheiro civil franco-americano. Sua obra mais relevante foi a idealização do projeto da nova capital federal dos Estados Unidos, mais tarde denominada Washington. O arquiteto também era maçom.\n[…]\nDe 1771 a 1776, L'Enfant estudou arte com seu pai na Académie royale de peinture et de sculpture em Paris. Aos 22 anos decidiu ir para o \"Novo Mundo\" com o Marquês Marie-Joseph Lafayette.\n[…]\nDepois de chegar ao que hoje é os Estados Unidos em 1777, ele se apresentou como voluntário pela primeira vez e mais tarde serviu como major durante a Guerra Revolucionária Americana, tornando-se amigo de George Washington naquela época. Então aconteceu que Washington o abordou com o pedido de projetar a nova capital em um local de 10 × 10 milhas. L'Enfant aceitou esta tarefa e projetou a nova capital. Seu primeiro mapa da cidade foi publicado em 1792.\n[…]\nO arquiteto foi celebrado como um herói, mas após divergências com o gerente do local, ele se demitiu do projeto já em 1792. A cidade de Washington, DC foi construída de acordo com seus planos, enquanto o herói abandonado lutou por uma pensão decente em vários tribunais de justiça até o fim de sua vida. Pierre L'Enfant morreu um homem pobre. Foi somente após sua morte que suas ações foram consideradas e um monumento foi construído para ele.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Valeta",
      "descricao": "Capital de Malta, cidade fortificada fundada em 1566."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século dezesseis, qual ordem de cavaleiros fundou Valeta, a capital de Malta?",
    "resposta": "Cavaleiros Hospitalários",
    "distratores": [
      "Cavaleiros Templários",
      "Cavaleiros Teutônicos",
      "Ordem de Santiago"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Valletta"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Valletta",
        "situacao": "ok",
        "texto": "Valletta ( ; Maltese: il-Belt Valletta, lit. 'the city [of] Valletta', pronounced [ɪlˈbɛlt vɐˈlːɛtːɐ]), also known as Città Umilissima (transl. the Humblest City), is the capital city of Malta and one of its 68 council areas. Located between the Grand Harbour to the east and Marsamxett Harbour to the west, its population as of 2021 was 5,157. As Malta's capital city, it is a commercial centre for \n[…]\nValletta's 16th-century buildings were constructed by the Knights Hospitaller. The city was named after the Frenchman Jean Parisot de Valette, who succeeded in defending the island against an Ottoman invasion during the Great Siege of Malta. The city is Baroque in character, with elements of Mannerist, Neo-Classical, and Modern architecture, though the Second World War left major scars on the city, particularly the destruction of the Royal Opera House.\n[…]\nThe City of Valletta, Malta's Capital, was founded in 1566 by Grand Master of the Knights of St. John.\n[…]\nValletta is the capital city of Malta, and is the country's administrative and commercial hub. The Parliament of Malta has been housed at the Parliament House near the city's entrance since 2015: it was previously housed at the Grandmaster's Palace in the city centre. The latter palace still houses the Office of the President of Malta, while the Auberge de Castille houses the Office of the Prime Minister of Malta. The courthouse and many government departments are also located in Valletta.\n[…]\nThe Manoel Theatre (Maltese: Teatru Manoel) was constructed in just ten months in 1731, by order of Grand Master António Manoel de Vilhena, and is one of the oldest working theatres in Europe. The Mediterranean Conference Centre was formerly the Sacra Infermeria. Built in 1574, it was one of Europe's most renowned hospitals during the Renaissance.\n[…]\nValletta Living History\n[…]\nValletta, Malta's capital city and UNESCO World Heritage Site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Valeta",
        "situacao": "ok",
        "texto": "Valeta (em inglês:  Valletta [vəˈlɛtə]; em maltês:  Il-Belt Valletta [ˈil.bɛlt ˈvɐlɛ.tɐ]) é a capital da República de Malta. Tem uma população de cerca de 6 315 habitantes (censo de 2005) e situa-se na costa leste da ilha de Malta. Situa-se na península homónima, dispondo de dois portos naturais: Marsamxett e Grand Harbour.\n[…]\nEm 1530, os Cavaleiros de São João, expulsos de Rodes pelos Turcos Otomanos, receberam Malta para se instalarem. Continuaram em guerra com os Turcos, a quem consideravam infiéis e, portanto, inimigos. Em 1565, o sultão otomano Solimão, o Magnífico ordenou um ataque a Malta numa tentativa de exterminar a Ordem. Uma grande frota turca, com quatro vezes o número de homens ao dispor dos defensores, cercou a ilha em maio.\n[…]\nFoi responsável pela construção da Sacra Infermeria, a Igreja de São João, o Palácio do Grão-Mestre e sete albergues (local onde ficavam hospedados os Cavaleiros da Ordem). Durante o século XVI a cidade cresceu muito, tanto em termos populacionais, pois muitas pessoas de toda a ilha deslocavam-se para lá com o intuito de aí ficarem mais seguras devido à fortaleza que rodeava a cidade, como também em termos de património; Cassar ergue diversos palácios e igrejas em estilo Maneirista.\n[…]\nBaseada numa malha urbana mais ou menos uniforme, à medida que se vai aproximando do extremo da península as ruas são bastante inclinadas; as escadas nessas ruas têm degraus bastante diferentes do habitual, pois eram destinados a facilitar a movimentação dos Cavaleiros da Ordem com as suas armaduras bastante pesadas.\n[…]\nSitio Web de Valeta.\n[…]\nNational Statistics Office - Malta.\n[…]\n«Turismo de Malta.» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Paquistão",
      "descricao": "País do sul da Ásia criado em 1947 na partição da Índia britânica, com capital em Islamabad."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1947, qual líder político é considerado o fundador do Paquistão?",
    "resposta": "Muhammad Ali Jinnah",
    "distratores": [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Zulfikar Ali Bhutto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        "situacao": "ok",
        "texto": "Muhammad Ali Jinnah (born Mahomedali Jinnahbhai; 25 December 1876 – 11 September 1948) was a barrister, statesman, and the founder of Pakistan. He served as the leader of the All-India Muslim League from 1913 until the independence of Pakistan on 14 August 1947, and then as Pakistan's first governor-general until his death a year later in 1948.\n[…]\nAhmed noted a change in Jinnah's words: while he still advocated freedom of religion and protection of the minorities, the model he was now aspiring to was that of the Prophet Muhammad, rather than that of a secular politician. Ahmed further avers that those scholars who have painted the later Jinnah as secular have misread his speeches which, he argues, must be read in the context of Islamic history and culture.\n[…]\nJinnah's vision for Pakistan was heavily inspired by the first Islamic state created by the Islamic prophet Muhammad in Medina. According to Hector Bolitho, Jinnah was also inspired by British liberalism, particularly the nineteenth century reform movements by activists such as J. A. Hobson and R. H. Tawney, alongside the Fabian Society.\n[…]\nOne of the largest streets in the Turkish capital Ankara, Cinnah Caddesi, is named after him, as is the Mohammad Ali Jenah Expressway in Tehran, Iran. In Chicago, a portion of Devon Avenue was named \"Mohammed Ali Jinnah Way\". A section of Coney Island Avenue in Brooklyn, New York was also named 'Muhammad Ali Jinnah Way' in honour of the founder of Pakistan. The Mazar-e-Quaid, Jinnah's mausoleum, is among Karachi's notable landmarks.\n[…]\nThere is a considerable amount of scholarship on Jinnah which stems principally from Pakistan; in his 1969 book Quaid-e-Azam Jinnah : A Selected Bibliography, author Muhammad Anwar listed 1,500 entries, mostly in English, of books, articles and other publications published from 1948 to 1969."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.Muhammad Ali Jinnah (nascido Mahomedali Jinnahbhai, pronúncia: [ɑːˈliː], em urdu:  محمد علی جناح‎, ; 25 de dezembro de 1876 – 11 de setembro de 1948) foi um advogado, político e fundador do Paquistão. Jinnah serviu como líder da Liga Muçulmana da Índia desde 1913 até a independência do Pa\n[…]\nPara ganhar conhecimento da lei, ele seguiu um advogado formado e aprendeu com suas práticas, além de estudar livros de direito. Durante este período, ele abreviou o seu nome para Muhammad Ali Jinnah.\n[…]\nSeu aniversário é observado como um feriado nacional, o dia Quaid-e-Azam, no Paquistão. Jinnah obteve o título Quaid-e-Azam (que significa \"Grande Líder\"). Seu outro título é Baba-i-Qaum (\"Pai da Nação\"). O primeiro título foi dado a ele inicialmente por Mian Ferozuddin Ahmed. Tornou-se um título oficial por efeito de uma resolução aprovada em 11 de agosto de 1947 por Liaquat Ali Khan na Assembleia Constituinte do Paquistão. Existem algumas fontes que defendem que Gandhi lhe deu esse título.\n[…]\nO livro de Hector Bolitho de 1954, Jinnah: Creator of Pakistan, levou Fatima Jinnah a lançar um livro, intitulado My Brother (apenas publicado em 1987), dado que pensava que o livro de Bolitho não conseguia expressar os aspectos políticos de Jinnah. Akhtar Balouch, no jornal Dawn, faz saber que várias páginas do livro de Fatima Jinnah foram eliminadas por Sharif-ul-Mujahid, da Academia Quaid-i-Azam, por serem \"contra a ideologia do Paquistão\".\n[…]\nPolítica do Paquistão\n[…]\nBolitho, Hector - Jinnah Creator of Pakistan  - John Murray. 1954\n[…]\nEste artigo foi inicialmente traduzido, total ou parcialmente, do artigo da Wikipédia em inglês cujo título é «Muhammad Ali Jinnah».\n[…]\nO Wikiquote possui citações de ou sobre: Muhammad Ali Jinnah\n[…]\nMedia relacionados com Muhammad Ali Jinnah no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Sucre",
      "descricao": "Cidade boliviana que é a capital constitucional da Bolívia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A capital constitucional da Bolívia leva o nome de qual general venezuelano, companheiro de Simón Bolívar nas guerras de independência?",
    "resposta": "Antonio José de Sucre",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sucre",
      "https://en.wikipedia.org/wiki/Antonio_Jos%C3%A9_de_Sucre"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sucre",
        "situacao": "ok",
        "texto": "Sucre (Spanish pronunciation: [ˈsukɾe]; Quechua: Chuqichaka; Aymara: Sukri; Guarani: Sucre), officially La Ilustre y Heroica Sucre (\"The Illustrious and Heroic Sucre\") is the de jure capital city of Bolivia, the capital of the Chuquisaca Department and the sixth most populous city in Bolivia. Located in the south-central part of the country, Sucre lies at an elevation of 2,790 m (9,150 ft), making\n[…]\nUntil the 19th century, La Plata was the judicial, religious and cultural centre of the region. It was proclaimed provisional capital of the newly independent Upper Peru (later, Bolivia) in July 1826. On July 12, 1839, President José Miguel de Velasco proclaimed a law naming the city as the capital of Bolivia, and renaming it in honor of the revolutionary leader Antonio José de Sucre.\n[…]\nTogether with La Paz, Sucre is one of two governmental centers of Bolivia: It is the seat of the judiciary, where the Supreme Court of Justice is located. As designated in the Constitution of Bolivia, Sucre is the true capital of the nation, while La Paz is the seat of government. Sucre is also the capital city of the department of Chuquisaca. The government of the City of Sucre is divided into executive and legislative branches.\n[…]\nThe Municipal Council is the legislative branch of the government of the municipality of Sucre, the constitutional capital of Bolivia. The council consists of eleven elected members, and it elects its own President, Vice President and Secretary. The members of the municipal council elected on May 3, 2021 are:\n[…]\nSucre honors the great marshal of the Battle of Ayacucho (December 9, 1824), Antonio José de Sucre.\n[…]\nTourism: Sucre Municipal Autonomous Government\n[…]\nBuilt in 1621, it is perhaps the most important building of the nation. The republic was founded in this building by Simón Bolívar who wrote the Bolivian Constitution.\n[…]\nAntonio José de Sucre\n[…]\nSucre travel guide from Wikivoyage"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Antonio_Jos%C3%A9_de_Sucre",
        "situacao": "ok",
        "texto": "Antonio José de Sucre y Alcalá (Spanish pronunciation: [anˈtonjo xoˈse ðe ˈsukɾej alkaˈla] ; 3 February 1795 – 4 June 1830), known as the \"Gran Mariscal de Ayacucho\" (English: \"Grand Marshal of Ayacucho\"), was a Venezuelan general and politician who served as the president of Bolivia from 1825 to 1828. A close friend and associate of Simón Bolívar, he was one of the primary leaders of South Americ\n[…]\nIn 1814, Antonio José de Sucre joined the fight for South American independence from Spain. The Battle of Pichincha took place on 24 May 1822, on the slopes of the Pichincha volcano, near Quito in what is now Ecuador. The encounter, fought in the context of the Spanish American wars of independence, pitted a Patriot army under Sucre against a Royalist army commanded by Field Marshal Melchor Aymerich.\n[…]\nAfter the Constituent Assembly in Chuquisaca was reconvened by Marshal Sucre on 8 July 1825 and later concluded, it was determined the complete independence of Upper Peru under the republican form. Finally, the Assembly president José Mariano Serrano, together with a commission, wrote down the \"Independence Act of the Upper Peruvian Departments\" which carries the date of 6 August 1825, in honor of the Battle of Junín won by Bolívar.\n[…]\nIn the Battle of Tarqui, fought on 27 February 1829, heavily outnumbered two to one, Sucre defeated a Peruvian invasion force led by third President and General of Peru José de La Mar, whose intentions had been to annex Guayaquil and the rest of Ecuador to Peru.\n[…]\nThe plan was to ambush José Antonio de Sucre on the morning of June 4, 1830, in the cold and bleak forested district of Berruecos, along a narrow path that was perennially covered with fog.\n[…]\nSherwell, Guillermo A. (1924). Antonio José de Sucre (Gran Mariscal de Ayacucho): Hero and Martyr of American Independence. Washington, D.C.: Byron S. Adams. Biography, 236pp., online."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sucre",
        "situacao": "ok",
        "texto": "Sucre, pronunciado em castelhano: [ˈsukɾe]) é a capital constitucional da Bolívia e capital do departamento de Chuquisaca, além de ser também a 5.ª cidade mais populosa do país. Embora Sucre seja a capital boliviana de jure, a sede do governo localiza-se em La Paz, o que a torna capital de facto. Localizada na região do Centro-Sul boliviano, Sucre eleva-se a 2 810 metros (9 200 pés) de altitude, s\n[…]\nAo longo de sua história, foi denominada Charcas, La Plata e Chuquisaca, e recebeu a alcunha de \"Cidade dos Quatro Nomes\".\n[…]\nEm 29 de setembro de 1538, Sucre foi fundada com o nome de Ciudad de la Plata de la Nueva Toledo por Pedro de Anzures, marquês de Campo Redondo. Em 1559, o rei Filipe II da Espanha instituiu a Audiência de Charcas em La Plata, com autoridade sobre uma área que cobre o que é hoje o Paraguai, o sudeste do Peru, o norte do Chile e da Argentina, e boa parte da Bolívia. Em 1609, uma arquidiocese foi fundada na cidade. Em 1624, foi fundada a Universidade São Francisco de Xavier.\n[…]\nAté o século XVIII, La Plata foi o centro judicial, religioso e cultural da região. Em 1839, depois de tornar-se a capital da Bolívia, a cidade teve seu nome alterado em homenagem ao líder revolucionário Antonio José de Sucre. Após o declínio econômico de Potosí, Sucre viu a sede do governo boliviano, em 1898, mudar-se para La Paz. Em 1991, Sucre tornou-se Patrimônio da Humanidade, segundo a UNESCO.\n[…]\nChuquisaca foi o nome concebido à cidade durante a época de sua independência;\n[…]\nSucre homenageia o marechal da Grande Batalha de Ayacucho(9 de dezembro de 1824): Don Antonio Jose de Sucre.\n[…]\nConstruída em 1621, essa talvez seja uma das mais importantes construções nacionais. A república foi fundada nessa casa por Simón Bolívar, que escreveu a Constituição Boliviana.\n[…]\nIgreja das Mercedes de Sucre\n[…]\nGoverno Municipal de Sucre (Em Espanhol)\n[…]\nCorreo del Sur - Jornal de Sucre (Em Espanhol)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Kinshasa",
      "descricao": "Capital e maior cidade da República Democrática do Congo, às margens do rio Congo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Até 1966, a capital congolesa Kinshasa se chamava Léopoldville, em homenagem ao rei de qual país europeu?",
    "resposta": "Bélgica",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kinshasa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kinshasa",
        "situacao": "ok",
        "texto": "Kinshasa (; French: [kinʃasa]; Lingala: Kinsásá), formerly named Léopoldville (Dutch: Leopoldstad) from 1881 to 1966, is the capital and largest city of the Democratic Republic of the Congo. Kinshasa is one of the world's fastest-growing megacities, with an estimated population of 18.5 million in 2026.\n[…]\nThe Kinshasa site has been inhabited by Teke and Humbu people for centuries and was known as Nshasa before transforming into a commercial hub during the 19th and 20th centuries. The city was named Léopoldville by Henry Morton Stanley in honor of Leopold II of Belgium. The name was changed to Kinshasa in 1966 during Mobutu Sese Seko's Zairianisation campaign as a tribute to Nshasa village.\n[…]\nLargely cut off from Europe, the Belgian Congo experienced a period of relative prosperity in which motorboats and trucks increasingly replaced traditional transport such as canoes and human porters, and by the end of the war in 1918 Léopoldville rivaled other Congolese cities and seized the attention of Belgian architects who saw it as a potential model for colonial urban experimentation.\n[…]\nThe establishment of Pool Malebo and the subsequent growth of Kinshasa drew Congolese from various regions, as well as West Africans, Europeans, and Asians, who all sought employment as Kinshasa developed.\n[…]\nFounded on 1 August 1881, as Léopold II's Station, Kinshasa has maintained a distinct administrative status over time, eventually becoming the administrative center for the Stanley Pool District, Haute-N'sele, and Panzi-Kasaï. A Royal Decree promulgated on 11 April 1914 instituted a territorial reform in the Belgian Congo, reaffirming Kinshasa's dual role as the colonial capital and the central administrative seat for the districts of Bas-Congo, Kwango, Kasaï, Sankuru, and Léopoldville.\n[…]\nKinshasa Symphony"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quinxassa",
        "situacao": "ok",
        "texto": "Quinxassa, Quinxasa ou Kinshasa é a capital e maior cidade da República Democrática do Congo (ou Congo-Quinxassa). Quinxassa é o principal centro econômico, político e cultural do país, abrigando diversas indústrias, incluindo manufatura, telecomunicações, bancos e entretenimento.\n[…]\nO local onde hoje é Quinxassa foi habitado pelos povos teque-humbus por séculos e era conhecido como Nhasa antes de se transformar em um centro comercial nos séculos XIX e XX. A cidade foi batizada de Léopoldville por Henry Morton Stanley em homenagem a Leopoldo II da Bélgica. O nome foi alterado para Quinxassa em 1966, durante a campanha de zairização de Mobutu Sese Seko, como uma homenagem à antiga vila de Nshasa.\n[…]\nQuinxassa se tornou o nome oficial da cidade após a independência do Congo em 1966, substituindo nome \"Léopoldville\", que foi dado em 1881 pelo explorador Henry Morton Stanley em homenagem a Leopoldo II da Bélgica, a cujo serviço estava.\n[…]\nA cidade foi tomada pelos colonizadores e estabelecida como um posto de comércio colonial por Henry Morton Stanley, em 1881, ganhando o nome Léopoldville em homenagem ao Rei Leopoldo II da Bélgica. O posto floresceu como o maior porto navegável do rio Congo a montante das Quedas de Inga e Livingstone, uma série de corredeiras que se espraia por cerca de 300 quilômetros.\n[…]\nEm 1945, como capital do Congo Belga, Leopoldville tinha cerca de 100 000 habitantes. Após a independência do país, em 1960, a população aumentou para cerca de 400 000 habitantes, transformando-se na principal cidade da África Central. Quinze anos mais tarde, depois que a cidade foi rebatizada como Quinxassa, em 1966, sua população havia alcançado um total de 2 milhões de habitantes.\n[…]\nBruxelas, Bélgica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Oslo",
      "descricao": "Capital e maior cidade da Noruega."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Até 1925, a capital da Noruega tinha um nome que homenageava um rei dinamarquês. Como ela se chamava?",
    "resposta": "Cristiânia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Oslo",
      "https://en.wikipedia.org/wiki/Christian_IV_of_Denmark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Oslo",
        "situacao": "ok",
        "texto": "Oslo is the capital and most populous city of Norway. It constitutes both a county and a municipality. The municipality of Oslo had a population of 724,290 in 2025, while the city's greater urban area had a population of 1,110,887 in 2025, and the metropolitan area had an estimated population of 1,546,706 in 2021.\n[…]\nFrom 1877, the city's name was spelled Kristiania in government usage, a spelling that was adopted by the municipal authorities in 1897, although 'Christiania' was also used. In 1925, the city, after incorporating the village retaining its former name, was renamed 'Oslo'. In 1948, Oslo merged with Aker, a municipality which surrounded the capital and which was 27 times larger, thus creating the modern, much larger Oslo municipality.\n[…]\nThe city and municipality used the name Kristiania until 1 January 1925 when the original name of Oslo was restored. This was because Norway became fully independent in 1905, and Norwegians argued that a name memorializing a Danish king (Christian IV of Denmark) was inappropriate as the name of the capital of their country.\n[…]\nThe municipality developed new areas such as Ullevål garden city (1918–1926) and Torshov (1917–1925). City Hall was constructed in the former slum area of Vika from 1931 to 1950. In 1948, Oslo merged with Aker, a municipality which surrounded the capital and was 27 times larger, thus creating the modern, vastly enlarged Oslo municipality. At the time, Aker was a mostly affluent, green suburban community, and the merger was unpopular in Aker.\n[…]\nOslo Accords\n[…]\nKolbe, Laura (2008). \"Symbols of civic pride, national history or European tradition? City halls in Scandinavian capital cities\". Urban History. 35 (3): 382–413. doi:10.1017/S0963926808005701. – covers Copenhagen, Stockholm, and Oslo.\n[…]\n\"Christiania\" . The American Cyclopædia. 1879."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Christian_IV_of_Denmark",
        "situacao": "ok",
        "texto": "Christian IV (12 April 1577 – 28 February 1648) was King of Denmark and Norway, and Duke of Holstein and Schleswig from 1588 until his death in 1648. His reign of 59 years and 330 days makes him the longest-reigning monarch in Scandinavian history.\n[…]\nHe rebuilt and renamed the Norwegian capital Oslo as Christiania after himself, a name used until 1925.\n[…]\nChristianopel, now Kristianopel in Sweden. Founded in 1599 in the then Danish territory of Blekinge as a garrison town near the then Danish-Swedish border.\n[…]\nChristianstad, now Kristianstad in Sweden. Founded in 1614 in the then Danish territory of Skåne.\n[…]\nChristiania, now Oslo in Norway. After a devastating fire in 1624 the king ordered the old city of Oslo to be moved closer to the fortification of Akershus slot and also renamed it Christiania. The city name was altered to Kristiania in 1877 and then back to Oslo in 1924. The original town of Christian is now known as Kvadraturen = The Quarters.\n[…]\nChristian(s)sand, now Kristiansand in Norway, founded in 1641 to promote trade at the Agdesiden len in Southern Norway.\n[…]\nFurthermore, Christian is known for erecting many important buildings in his realm, including the observatory Rundetårn, the stock exchange Børsen, the Copenhagen fortress Kastellet, Rosenborg Castle, workers' district Nyboder, the Copenhagen naval Holmen Church (Holmens Kirke), Proviantgården, a brewery, the Tøjhus Museum arsenal, and two Trinity Churches in Copenhagen and modern Kristianstad, now known as respectively Trinitatis Church and Holy Trinity Church.\n[…]\nUlrik Christian Gyldenløve (1630–1658).\n[…]\nChristian IV at the website of the Royal Danish Collection\n[…]\n\"Christian, the name of nine kings of Denmark. II. Christian IV.\" . The American Cyclopædia. 1879."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Oslo",
        "situacao": "ok",
        "texto": "Oslo (pronúncia em português europeu: [ˈɔʒlu]; pronúncia em português brasileiro: [ˈozlu]; pronúncia em norueguês: [ˈuʂˈlu] () ou mais raramente: [ˈusˈlu, ˈuʂlu]) é a capital  da Noruega e a maior cidade do país. Anteriormente, entre 1624 e 1925, chamou-se Christiania, com a grafia alternativa Kristiania, adotada entre 1877 e 1897 (em português, Cristiânia).\n[…]\nFundada em 1048, pelo rei Haroldo III da Noruega, a cidade foi devastada por um incêndio em 1624. O rei dano-norueguês Cristiano IV reconstruiu a cidade com o nome de Cristiânia, denominação mantida até 1925. Em 1952 a cidade foi a sede dos Jogos Olímpicos de Inverno. Também abriga a cerimônia anual de  entrega do Prémio Nobel da Paz.\n[…]\nEm 1624, Oslo foi destruída por um grande incêndio. A mando do rei Cristiano IV da Dinamarca, a cidade foi reconstruída e passou a ser denominada  Christiania, em homenagem ao próprio rei. Com a dissolução da união pessoal dano-norueguesa, em 1814, a cidade voltou a ocupar o posto de capital.\n[…]\nEle exigiu que todos os cidadãos se mudassem de suas antigas residências, lojas e locais de trabalho para a recém-construída cidade de Cristiânia.\n[…]\nNo século XIX, várias instituições do Estado foram estabelecidas e o papel da cidade como uma capital intensificou-se. A \"Cristiânia\" expandiu a sua indústria a partir de 1840, concentrado um razoável parque industrial em torno da região da Akerselva. A expansão levou as autoridades à construção de vários edifícios importantes, a maioria dos quais permanecem como atrações turísticas.\n[…]\nA Orquestra capital da Noruega é a Filarmônica de Oslo, com sede no Salão de Concertos Oslo em atividade desde 1977. Embora tenha sido fundada em 1919, a Orquestra Filarmónica de Oslo pode teve suas raízes ao ser fundada a Musikerforening Christiania (Sociedade dos Músicos de Cristiânia) por Edvard Grieg e Johan Svendsen em 1879.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Ulan Bator",
      "descricao": "Capital e maior cidade da Mongólia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Ulan Bator, capital da Mongólia, significa herói de qual cor?",
    "resposta": "Vermelho",
    "distratores": [
      "Azul",
      "Dourado",
      "Branco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ulaanbaatar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ulaanbaatar",
        "situacao": "ok",
        "texto": "Ulaanbaatar is the capital and largest city of Mongolia. It has a population of 1.79 million, and is the coldest capital city in the world by average yearly temperature. The municipality is located in north central Mongolia at an elevation of about 1,300 metres (4,300 ft) in a valley on the Tuul River. The city was founded in 1639 as a nomadic Buddhist monastic centre, changing location 29 times, \n[…]\nWhen the city became the capital of the new Mongolian People's Republic on 29 October 1924, its name was changed to Ulaanbaatar (lit. 'Red Hero'), possibly in honor of Damdin Sükhbaatar. At the meeting of the 1st Great People's Khural in 1924, the majority of delegates voted in favor of renaming the capital of Mongolia to Bator-khoto (\"City of the Hero,\" implicitly referring to the figure of Genghis Khan).\n[…]\nIn the Western world, Ulaanbaatar continued to be generally known as Urga or Khuree until 1924, and afterward as Ulan Bator (Russian: Улан-Батор, romanized: Ulan-Bator). Although related to the Russian form, Ulan Bator was approved by the Mongolian Post Office.\n[…]\nIn July 1921, the Communist Soviet-Mongolian army became the second conquering force in six months to enter Urga, and Mongolia came under the control of Soviet Russia. On 29 October 1924, the town was renamed Ulaanbaatar. On the session of the 1st Great People's Khuraldaan of Mongolia in 1924, a majority of delegates had expressed their wish to change the capital city's name to Baatar Khot (lit. 'Hero City').\n[…]\nUlaanbaatar is treated as an independent first-level region, separate from the surrounding Töv Aimag. It is governed by the Ulaanbaatar City Council with 45 members, elected every four years. The Prime Minister of Mongolia appoints the Governor of the Capital City and Mayor of Ulaanbaatar with four-year terms upon the city council's nomination.\n[…]\n\"Urga or Da Khuree\" from A. M. Pozdneyev's Mongolia and the Mongols"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ul%C3%A3_Bator",
        "situacao": "ok",
        "texto": "Ulã Bator ou Ulan Bator (em mongol: Улаанбаатар; romaniz.: Ulaanbaatar; pronunciado: [ʊɮɑːɴ.pɑːtʰɑ̆r]) é a capital e a maior cidade da Mongólia. Tem cerca de 1,3 milhão de  habitantes, segundo números oficiais e estima-se que existam mais 150 mil habitantes não recenseados. Foi fundada em 1649 e designou-se Urga até 1924. A partir desse ano, a cidade ganhou o nome atual, que significa \"herói verme\n[…]\nA cidade foi fundada em 1639, inicialmente como um centro monástico budista móvel (nômade). Em 1778, ela estabeleceu-se definitivamente na sua atual localização, na confluência dos rios Tuul e Selbe. Pouco antes disso, Ulã Bator mudou de localização vinte e oito vezes, com cada local sendo escolhido cerimonialmente. No século XX, Ulã Bator cresceu e tornou-se um importante centro de produção, vindo a ser a capital mongol a partir de 1911.\n[…]\nEm 1904, na ocasião da expedição britânica ao Tibete, o Dalai Lama retirou-se da capital tibetana, Lassa, e foi para Ikh Khüree (com este nome naquela época), onde ele permaneceu até 1908. Após a proclamação da independência da Mongólia, com o colapso do Império Manchu, em 1911, a cidade tornou-se a capital da República Popular da Mongólia, em 1924, e adotou seu nome atual, Ulaanbaatar - em mongol tradicional: ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ\n[…]\nA Mongólia veio para o controle da Rússia Soviética. Em 29 de outubro de 1924, a cidade foi renomeada para Ulaanbaatar (em mongol: \"herói vermelho\"), pelo conselho de TR Ryskulov, o representante soviético na Mongólia.\n[…]\nO símbolo oficial de Ulã Bator é a Garuda, uma figura mitológica presente nos mitos do hinduísmo e budismo, com os mongóis chamando-o de Khangar'd (em mongol:  Хангарьд), originalmente Cã Garuda.\n[…]\nA Biblioteca Nacional da Mongólia também está localizada em Ulã Bator e inclui uma extensa coleção histórica, artigos em idiomas que não sejam apenas o mongol, e uma coleção especial para crianças.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Adis Abeba",
      "descricao": "Capital e maior cidade da Etiópia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em amárico, o nome de Adis Abeba, a capital da Etiópia, significa o quê?",
    "resposta": "Flor nova",
    "fonte": [
      "https://en.wikipedia.org/wiki/Addis_Ababa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Addis_Ababa",
        "situacao": "ok",
        "texto": "Addis Ababa (  AD-iss AB-ə-bə; Amharic: አዲስ አበባ [adˈdis ˈaβəβa] , lit. 'new flower'; Oromo: Finfinnee, lit. 'fountain of hot mineral water') is the capital and largest city of Ethiopia. With an estimated population of 6,287,000 inhabitants as of 2025, it is the tenth largest city in Africa. At an elevation of 2,355 metres (7,726 ft), it is the fourth-highest capital city in the world and the highe\n[…]\nAddis Ababa is a federally-chartered city in accordance with the Addis Ababa City Government Charter Proclamation No. 87/1997 in the FDRE Constitution. Called \"the political capital of Africa\" due to its historical, diplomatic, and political significance for the continent, Addis Ababa serves as the headquarters of major international organizations, such as the African Union and the United Nations Economic Commission for Africa.\n[…]\nAs of the 2007 population census conducted by the Ethiopian national statistics authorities, Addis Ababa has a total population of 2,739,551 urban and rural inhabitants. For the capital city 662,728 households were counted living in 628,984 housing units, which results in an average of 5.3 persons to a household.\n[…]\nAlthough all Ethiopian ethnic groups are represented in Addis Ababa because it is the capital of the country, the largest groups include the Amhara (47.05%), Oromo (19.51%), Gurage (16.34%), Tigrayan (6.18%), Silt'e (2.94%), and Gamo (1.68%). Languages spoken as mother tongues include Amharic (70.99%), Afaan Oromo (10.72%), Gurage (8.37%), Tigrinya (3.60%), Silt'e (1.82%) and Gamo (1.03%).\n[…]\nEmperor Menelik II introduced modern secular education to Addis Ababa in the early 20th century, a significant shift from the centuries-old education system dominated by the Ethiopian Orthodox Church. In 1906, he opened the first public school in the city.\n[…]\nAddis Ababa is twinned with:\n[…]\nAddis Ababa City Administration"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Adis_Abeba",
        "situacao": "ok",
        "texto": "Adis Abeba (em amárico: አዲስ አበባ AFI: [adːiːs aβəβa], \"nova flor\"; em oromo: Finfinnee) é a capital e a maior cidade da Etiópia, sede da União Africana. Com uma população estimada de 4.000.000 de habitantes em 2017, é a décima primeira maior cidade da África. Sendo uma cidade multicultural, contem até 80 nacionalidades e línguas diferentes, como também comunidades cristãs, muçulmanas e judias. Situ\n[…]\nA cidade foi fundada em 1886 pelo imperador Menelik, após sua localização ter sido determinada por sua esposa Taitu Bitul, que também a nomeou, numa provável alusão às flores da região, daí seu significado, \"nova flor\". É a capital da Etiópia desde 1889. Adis Abeba é, desde 1994, uma das duas cidades da Etiópia com estatuto especial (astedader akabibi), a outra é a cidade de Dire Dawa.\n[…]\nOutra nobreza e sua equipe e famílias se estabeleceram nas proximidades, e Menelik expandiu a casa de sua esposa para se tornar o Palácio Imperial, que continua sendo a sede do governo em Adis Abeba hoje. O nome mudou para Adis Ababa e tornou-se a capital da Etiópia quando Menelik II se tornou imperador da Etiópia. A cidade cresceu de forma desordenada. Uma das contribuições do Imperador Menelik que ainda são visíveis hoje é o plantio de numerosos eucaliptos ao longo das ruas da cidade.\n[…]\nApós a reconstrução, Haile Selassie ajudou a formar a Organização da Unidade Africana em 1963 e convidou a nova organização a manter sua sede em Adis Abeba. A OUA foi dissolvida em 2002 e substituída pela União Africana (UA), que também está sediada na cidade. A Comissão Econômica das Nações Unidas para a África também tem sua sede em Adis Abeba. Adis Abeba também foi o local do Concílio das Igrejas Ortodoxas Orientais em 1965.\n[…]\nUm distrito financeiro está atualmente em construção em Adis Abeba, que incluirá muitos arranha-céus modernos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Bahrein",
      "descricao": "País insular do Golfo Pérsico, com capital em Manama."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em árabe, o nome do Bahrein, arquipélago do Golfo Pérsico, significa o quê?",
    "resposta": "Dois mares",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bahrain"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bahrain",
        "situacao": "ok",
        "texto": "Bahrain, officially the Kingdom of Bahrain, is an island country in the eastern part of Arabian Peninsula in West Asia. Situated near the western shore of the Persian Gulf, the country comprises a small archipelago of 33 natural islands and an additional 50 artificial islands, centred on Bahrain Island, which makes up around 80 percent of the country's landmass. Bahrain is situated between Qatar a\n[…]\nBahrain is known as one of the first post-oil economies in the Persian Gulf, the result of decades of investing in the banking and tourism sectors. Many of the world's largest financial institutions have a presence in Manama, but oil revenues still constitute a significant part of its government budget. It is recognised by the World Bank as a high-income economy.\n[…]\nUntil the late Middle Ages, \"Bahrain\" referred to the region of Eastern Arabia that included southern Iraq, Kuwait, Al-Hasa, Qatif, and Bahrain. The region stretched from Basra in Iraq to the Strait of Hormuz in Oman. This was Iqlīm al-Bahrayn's \"Bahrayn Province\". When the term \"Bahrain\" began to refer solely to the Awal archipelago is unknown. The entire coastal strip of Eastern Arabia was known as \"Bahrain\" for a millennium. The island and kingdom were also commonly spelled Bahrein.\n[…]\nThe investigation indicates that the aquifer water quality is significantly modified as groundwater flows from the northwestern parts of Bahrain, where the aquifer receives its water by lateral underflow from eastern Saudi Arabia to the southern and southeastern parts.\n[…]\nKey Development Forecasts for Bahrain from International Futures\n[…]\nKingdom of Bahrain, Ministry of Foreign Affairs website Archived 20 May 2012 at the Wayback Machine\n[…]\nBahrain on LittleSis, a website that publishes data on who-knows-who between government, donors and business\n[…]\nAmerican Geographical Society Library. Map of Bahrein / A. Sahab, Geographical & Drafting Institute"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bahrein",
        "situacao": "ok",
        "texto": "Bahrein, Barém, ou Barein (em árabe: ‏البحرين ), oficialmente Reino do Bahrein, é um pequeno país insular do golfo Pérsico, com fronteiras marítimas com o Irão a nordeste, com o Catar a leste e com a Arábia Saudita a sudoeste. A sua capital é Manama, a cidade mais populosa e o principal centro comercial do país. Os desertos, com sua esterilidade, cobrem mais de trinta ilhas componentes desse país \n[…]\nO nome do país vem do árabe Bahrayn, que é a forma dual da palavra bahr (\"mar\") e significa, portanto, \"dois mares\". A que \"dois mares\" o nome do país se refere exatamente é tema que até a presente data gera debate: podem referir-se às baías a leste e a oeste da ilha, aos mares a norte e a sul da mesma (o que a separa do Irão e da Arábia, respetivamente), ou à água salgada e doce presente por cima e por baixo do solo.\n[…]\nOs mares ao redor do Barém são muito rasos, esquentando rapidamente no verão e, assim, produzindo uma umidade muito alta, especialmente à noite.\n[…]\nMais de 330 espécies de aves foram registradas no arquipélago do Barém, das quais 26 se reproduzem no país. Milhões de aves migratórias passam pela região do Golfo Pérsico nos meses de inverno e outono. Uma espécie globalmente ameaçada de extinção, Chlamydotis undulata, migra regularmente no outono. As muitas ilhas e mares rasos do país são globalmente importantes para a reprodução do corvo-marinho-de-socotorá; até 100 mil casais dessas aves foram registrados nas ilhas Hauar.\n[…]\nTodas as instituições comerciais e sinais de trânsito são bilíngues, exibindo inglês e árabe.\n[…]\nA cultura do Barém é predominantemente árabe, além de ser islâmica, sendo muito semelhante à dos seus vizinhos da região do golfo Pérsico. Nos últimos dois séculos, o Barém tornou-se, em grande parte uma nação cosmopolita, hospedando pessoas de uma variedade de lugares como a Índia, Paquistão, Irã, Egito, Malásia, além de países do Ocidente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Singapura",
      "descricao": "Cidade-Estado insular do Sudeste Asiático, na ponta sul da Península Malaia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1965, Singapura virou um país independente ao ser expulsa de qual federação?",
    "resposta": "Malásia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Singapore_in_Malaysia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Singapore_in_Malaysia",
        "situacao": "ok",
        "texto": "Singapore, officially the State of Singapore, was one of the 14 states of Malaysia from 16 September 1963 to 9 August 1965. At the time of merger, Singapore was a British colony (having achieved self-governance in 1959) and had previously been part of the Straits Settlements until 1946. As part of Malaysia, Singapore was the smallest state with a land area of 581.5 km2 (224.5 sq mi) but had the la\n[…]\nProvisions in the 1958 Constitution relating to the office of the British High Commissioner and the Internal Security Council were also removed. The 1963 Constitution came into force on 31 August 1963 and remained in effect until Singapore's independence on 9 August 1965.\n[…]\nThe confederation negotiations eventually fell through in February 1965 due to British intervention, who were defending Malaysia against the Konfrontasi. The potential collapse of the Federation would have lent weight to Indonesian propaganda portraying Malaysia as an artificial and short-lived construct unworthy of firm support, while also destabilising Sabah and Sarawak. For these reasons, the British strongly opposed any constitutional changes affecting Singapore's position within Malaysia.\n[…]\nFor many years following separation, it was taught, especially among Singaporeans, that their nation was unwillingly expelled from Malaysia. This account portrayed Singapore's independence as \"sudden\" and \"unplanned.\" When Singapore's separation was announced in August 1965, The Straits Times ran an article featuring Tunku Abdul Rahman with the subheader \"Tengku: It was my idea...\", which may have led many readers to believe that the separation was initiated solely by the Tunku.\n[…]\nConstitution and Malaysia (Singapore Amendment) Act 1965\n[…]\nIndependence of Singapore Agreement 1965\n[…]\nChan, Heng Chee (1971). Singapore: The Politics of Survival, 1965–1967. Singapore; Kuala Lumpur: Oxford University Press. OCLC 462273878."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Singapura_%28estado_da_Mal%C3%A1sia%29",
        "situacao": "ok",
        "texto": "Singapura foi um dos 14 estados da Malásia de 1963 a 1965. Tornou-se parte da Malásia no dia 16 de setembro de 1963; uma nova entidade política formada a partir da fusão da Federação Malaia com Bornéu do Norte, Sarawak e Singapura. Isto marcou o fim de um período de 144 anos de domínio britânico em Singapura, iniciado com a fundação da moderna Singapura por Sir Stamford Raffles em 1819.\n[…]\nA união, no entanto, foi instável devido à desconfiança e diferenças ideológicas entre os líderes do Estado de Singapura e o governo federal da Malásia. Tais questões resultaram em desentendimentos frequentes relativos à economia, finanças e política.\n[…]\nA Organização Nacional de Malaios Unidos (ONMU), que era o partido político no poder no Governo Federal, via a participação do Partido de Ação Popular baseado em Singapura na eleição geral malaia de 1964 como uma ameaça ao seu  sistema político com base nos malaios. Também ocorreram grandes tumultos raciais naquele ano envolvendo a comunidade majoritariamente chinesa e a comunidade malaia em Singapura.\n[…]\nDurante uma eleição pelos singapurianos em 1965, a ONMU lançou o seu apoio ao candidato da oposição Barisan Sosialis. Em 1965, o primeiro-ministro malaio Tunku Abdul Rahman decidiu pela expulsão de Singapura da Federação, levando à independência de Singapura em 9 de agosto de 1965.\n[…]\nChan, Heng Chee (1971). Singapore: The Politics of Survival, 1965–1967. Singapore; Kuala Lumpur: Oxford University Press. OCLC 462273878\n[…]\nLim, Siew Yea. «Communalism and Communism at Singaporean Independence». Contemporary Postcolonial and Postimperial Literature in English. Cópia arquivada em 21 de agosto de 2012\n[…]\nMohamed Noordin Sopiee (2005). From Malayan Union to Singapore Separation: Political Unification in the Malaysia Region, 1945–65 2nd ed. Kuala Lumpur: University of Malaya Press. ISBN 978-9831001943",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lisboa",
      "descricao": "Capital e maior cidade de Portugal, na foz do rio Tejo."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1755, que desastre natural destruiu boa parte de Lisboa, seguido de um tsunami e de incêndios?",
    "resposta": "Um terremoto",
    "fonte": [
      "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
      "https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/1755_Lisbon_earthquake",
        "situacao": "ok",
        "texto": "The 1755 Lisbon earthquake, also known as the Great Lisbon earthquake, occurred in the Iberian Peninsula and Northwest Africa area on the morning of Saturday, 1 November, 1755 (on the Christian Feast of All Saints); it took place at approximately 09:40 local time. In combination with subsequent fires and a tsunami, the earthquake almost completely destroyed Lisbon and adjoining areas.\n[…]\nLisbon was not the only Portuguese city affected by the catastrophe. Throughout the south of the country, in particular the Algarve, destruction was widespread. The tsunami destroyed some coastal fortresses in the Algarve and, at lower levels, it razed several houses. Almost all the coastal towns and villages of the Algarve were heavily damaged, except Faro, which was protected by the sandy banks of Ria Formosa. In Lagos, the waves reached the top of the city walls.\n[…]\nThe tomb of national hero Nuno Álvares Pereira was also lost. Visitors to Lisbon may still walk the ruins of the Carmo Convent, which were preserved to remind Lisboners of the destruction. Most of the documentation of the 1722 Algarve earthquake sent to Lisbon for archiving became lost after the fire that followed the 1755 earthquake.\n[…]\nList of tsunamis\n[…]\nFonseca, J. D. 1755, O Terramoto de Lisboa, The Lisbon Earthquake. Argumentum, Lisbon, 2004.\n[…]\nMartínez-Loriente, S.; Sallarès, V.; Gràcia, E. (2021). \"The Horseshoe Abyssal plain Thrust could be the source of the 1755 Lisbon earthquake and tsunami\". Commun Earth Environ. 2.\n[…]\nMolesky, Mark. This Gulf of Fire: The Destruction of Lisbon, or Apocalypse in the Age of Science and Reason. New York: Knopf, 2015.\n[…]\nImages and historical depictions of the 1755 Lisbon earthquake from the University of California\n[…]\nTsunami Forecast Model Animation: Lisbon 1755 from the Pacific Tsunami Warning Center's official YouTube channel\n[…]\nThe Lisbon Earthquake (1755) from European History Online"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sismo_de_Lisboa_de_1755",
        "situacao": "ok",
        "texto": "O Sismo de Lisboa de 1755, também conhecido como o Grande Terramoto de Lisboa de 1755 (português europeu) ou Grande Terremoto de Lisboa de 1755 (português brasileiro), atingiu a Península Ibérica e o noroeste de África na manhã de sábado, de 1 de novembro de 1755, Dia de Todos-os-Santos, por volta das 9h40, hora local.\n[…]\nNo 1º de Novembro deste ano fatal, das 9 para as 10 horas da manhã aconteceu a quase total ruína da famosa cidade de Lisboa, procedida de um horroroso terremoto, que demoliu a maior parte de seus edifícios, padecendo os templos mais sumptuosos, e palácios magníficos; e por fim pôs o elemento do fogo a última mão a este grande e tremendo feito, que se tornou por castigo.\n[…]\nAinda que neste lugar e nesta ilha se não sentiu terremoto, foi a causa desta cheia um que no dia e hora houve na corte e cidade de Lisboa, que durando o espaço de 8 minutos pôs em terra com total ruína quase toda a corte, e edifícios sumptuosos dela, e ao mesmo tempo se conjuraram os quatro elementos porque a terra com aquele moto, nos nossos tempos nunca vistos, o ar com notável vento inquieto, a água com a cheia extraordinária e nunca vista, o fogo que incendiando toda a corte, o que sucedeu em muitas partes dela totalmente reduziu tudo a cinzas, em que se perdeu todo o precioso, e quantos corpos que ainda estavam vivos, que presos debaixo das ruínas não puderam fugir, assim de homens como de mulheres, e se abrasaram: que se reputou o número, à primeira consideração, a 30 mil pessoas, que nas ruínas, fogo e cheia morreram, depois com melhor exame, e por falta nos róis da igreja se disse serem mais de 50 mil.\n[…]\nTsunâmi no Brasil em 1755"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Panamá",
      "descricao": "País da América Central, no istmo entre as Américas, cuja capital é a Cidade do Panamá."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A separação entre o Panamá e a Colômbia teve o apoio decisivo de qual país, interessado em construir um canal na região?",
    "resposta": "Estados Unidos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Separation_of_Panama_from_Colombia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Separation_of_Panama_from_Colombia",
        "situacao": "ok",
        "texto": "The secession of Panama from Colombia was formalized on 3 November 1903, with the establishment of the Republic of Panama and the abolition of the Colombia–Costa Rica border. From the independence of Panama from Spain in 1821, Panama had simultaneously joined itself to the confederation of Gran Colombia through the Independence Act of Panama.\n[…]\nDuring the construction of the Panama Canal, the initial attempts by France to construct a sea-level canal across the isthmus were secured through treaty with Colombia; however French cost overruns led to abandonment of the canal for a decade. During the intervening years, local separatists used the political instability of the Thousand Days' War to agitate for political secession from Colombia and establishment of an independent republic.\n[…]\nThe United States was the first country to recognize the independence of the nascent republic, sending the U.S. Navy to prevent Colombia from retaking the territory during the early days of the new Republic. In exchange for its role in defending the Republic, and for constructing the canal, the U.S. was granted a perpetual lease on the land around the canal, known as the Panama Canal Zone, which was returned to Panama in 1979 under the terms of the Torrijos–Carter Treaties.\n[…]\nPanamanian politician José Domingo De Obaldía was selected for the Governor of the Isthmus of Panama, an office that he had previously held, and was supported by secessionist movements. Another Panamanian politician named José Agustín Arango began to plan the revolution and secession. The secessionists wanted to negotiate the construction of the Panama Canal directly with the United States due to the negativity of the Colombian government.\n[…]\nColombia–Panama relations\n[…]\nHistory of the Panama Canal\n[…]\n(in Spanish) Luis Angel Arango Library - Separation of Panama"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Separa%C3%A7%C3%A3o_do_Panam%C3%A1_da_Col%C3%B4mbia",
        "situacao": "ok",
        "texto": "A separação do Panamá da Colômbia foi um fato que ocorreu em 3 de novembro de 1903, após a Guerra dos Mil Dias, e que resultou na proclamação da República do Panamá, anteriormente um departamento da República da Colômbia desde 1821, com breves períodos de separação do istmo do Panamá.\n[…]\nEm 1846, o Tratado Mallarino-Bidlack, um tratado entre o governo colombiano (na época o país denominava-se República de Nova Granada) e os Estados Unidos. permitiu a construção da ferrovia interoceânica, para a qual se garantiu neutralidade e livre trânsito, e também uma intervenção militar americana foi autorizada que permitia auxiliar a Colômbia a restabelecer a ordem caso a área do istmo estivesse conflagrada por alguma desordem qualquer.\n[…]\nOs Estados Unidos, em seguida, moveram-se para apoiar o movimento separatista no Panamá para ganhar controle sobre os resquícios da tentativa francesa de construir um canal.\n[…]\nO político panamenho José Domingo de Obaldía foi selecionado para ser o governador do istmo do Panamá, cargo que havia anteriormente detido, e recebeu o apoio dos movimentos separatistas. Outro político panamenho, José Agustín Arango, começou a planejar a revolução e a separação. Os separatistas desejavam negociar a construção do canal do Panamá diretamente com os Estados Unidos, devido à negatividade do governo colombiano.\n[…]\nA rede separatista foi formada por Arango, Dr. Manuel Amador Guerrero, General Nicanor de Obarrio, Ricardo Arias, Federico Boyd, Carlos Constantino Arosemena, Tomás Arias, Manuel Espinosa Batista  e outros. Manuel Amador Guerrero foi encarregado de viajar para os Estados Unidos para conseguir apoio para o plano separatista, ele também ganhou o apoio de importantes líderes liberais do Panamá e o apoio de outro comandante militar, Esteban Huertas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Etiópia",
      "descricao": "País sem litoral do Chifre da África, com capital em Adis Abeba."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Etiópia já teve litoral no Mar Vermelho. Que acontecimento, nos anos noventa, deixou o país sem saída para o mar?",
    "resposta": "A independência da Eritreia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ethiopia",
      "https://en.wikipedia.org/wiki/Eritrea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ethiopia",
        "situacao": "ok",
        "texto": "Ethiopia, officially the Federal Democratic Republic of Ethiopia (FDRE), is a landlocked country located in the Horn of Africa region of East Africa. It shares borders with Eritrea to the north, Djibouti to the northeast, Somalia to the southeast, Kenya to the south, South Sudan to the west, and Sudan to the northwest. Ethiopia covers a land area of 1,104,300 km2 (426,400 sq mi).\n[…]\nOther scholars regard Dʿmt as the result of a union of Afroasiatic-speaking cultures of the Cushitic and Semitic branches; namely, local Agaw peoples and Sabaeans from Southern Arabia. However, Ge'ez, the ancient Semitic language of Ethiopia, is thought to have developed independently from the Sabaean language. As early as 2000 BC, other Semitic speakers were living in Ethiopia and Eritrea where Ge'ez developed.\n[…]\nOn 24 October 1945, Ethiopia became a founding member of the United Nations. In 1952, Haile Selassie orchestrated a federation with Eritrea. He dissolved it in 1962 and annexed Eritrea, resulting in the Eritrean War of Independence. Haile Selassie also played a leading role in the formation of the Organisation of African Unity (OAU).\n[…]\nIn April 1993, Eritrea gained independence from Ethiopia after a national referendum. In May 1998, a border dispute with Eritrea led to the Eritrean–Ethiopian War, which lasted until June 2000 and cost both countries an estimated $1 million a day. This had a negative effect on Ethiopia's economy, and a border conflict between the two countries would continue until 2018.\n[…]\nHe made a historic visit to Eritrea in 2018, ending the state of conflict between the two countries, and was awarded the Nobel Peace Prize in 2019.\n[…]\nSaint Yared, a 6th-century Aksumite composer, is widely regarded as the father of the traditional music of Eritrea and Ethiopia, creating liturgical music of the Ethiopian and Eritrean Orthodox Tewahedo Churches.\n[…]\nOutline of Ethiopia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Eritrea",
        "situacao": "ok",
        "texto": "Eritrea, officially the State of Eritrea, is a country in the Horn of Africa region of East Africa. Its capital and largest city is Asmara. The country is bordered by Ethiopia to the south, Sudan to the west, and Djibouti to the southeast. The northeastern and eastern parts of Eritrea have an extensive coastline along the Red Sea. The country has a total area of approximately 117,600 km2 (45,406 s\n[…]\nDuring the Eritrean independence struggle and 1998 Eritrean-Ethiopian War, many atrocities were committed by the Ethiopian authorities against unarmed Eritrean civilians.\n[…]\nAll Eritreans between 18 and 40 years of age must complete mandatory national service, which includes military service. This requirement was implemented after Eritrea gained independence from Ethiopia, as a means to protect Eritrea's sovereignty, to instill national pride, and to create a disciplined populace. Eritrea's national service requires long, indefinite conscription (6.5 years on average), which some Eritreans leave the country to avoid.\n[…]\nSources disagree as to the current population of Eritrea, with some proposing numbers as low as 3.5 million and others as high as 6.4 million. Eritrea has never conducted an official government census, and the 1984 Ethiopian census, the last census conducted in Ethiopia before Eritrea's independence in 1993, recorded a population of 2,621,566. In 2020, the proportion of children below the age of 15 was 41.1%, 54.3% were between 15 and 65 years of age, while 4.5% were 65 or older.\n[…]\nMost Italians left after Eritrea became independent from Italy. It is estimated that as many as 100,000 Eritreans are of Italian descent.\n[…]\nAbout Eritrea (in Italian)\n[…]\nHistory of Eritrea: First recordings – Munzinger – exploitation by colonialism and fight against colonialism (Italy, England, Ethiopia, Soviet Union, USA, Israel) – independence Archived 12 October 2007 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eti%C3%B3pia",
        "situacao": "ok",
        "texto": "A Etiópia (em amárico: ኢትዮጵያ; romaniz.: ʾĪtyōṗṗyā), oficialmente República Democrática Federal da Etiópia (ኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ, transl. ye-Ītyōṗṗyā Fēdēralāwī Dīmōkrāsīyāwī Rīpeblīk) e anteriormente conhecida como Abissínia, é um país encravado no Chifre da África, sendo um dos mais antigos do mundo. É a segunda nação mais populosa da África e a décima maior em área.\n[…]\nAbissínia pode estritamente se referir à apenas as províncias do noroeste da Etiópia de Amhara e Tigré, bem como a Eritreia central, enquanto ela historicamente foi utilizada como um outro nome para a Etiópia.\n[…]\nEm 1993, um referendo foi feito e supervisionado pela missão das Nações Unidas chamada UNOVER, com sufrágio universal feito na Eritreia e em comunidades eritreias na diáspora, para saber se os eritreus queriam a independência ou a união com a Etiópia. Quase 99% da população eritreia votou pela independência, que foi declarada em 24 de maio de 1993.\n[…]\nSecas periódicas assolam o país, mas dois terços das terras são férteis e a região tem muitos lagos. Cereais e café são as culturas predominantes. Ainda hoje o país sofre as consequências da longa guerra civil iniciada na década de 1960. Na década de 1980, o país é assolado por uma grande fome, provocada pela seca e pela guerrilha da província separatista da Eritreia (ex-província etíope), que conquista sua independência nos anos 1990, fechando o acesso da Etiópia ao Mar Vermelho.\n[…]\nO país possui um total de 57 aeroportos, conforme dados de 2013, 30 dos quais são usados ​​regularmente, e na maioria dos casos para o serviço doméstico. O transporte marítimo no país é pouco desenvolvido, já que este não possui costa marítima. Até 1993, uma parte de seu território tinha acesso ao mar, mas com a declaração de independência da Eritreia, seu litoral passou a ser administrado pelo país vizinho.\n[…]\nMissões diplomáticas da Etiópia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Cidade do Vaticano",
      "descricao": "Estado soberano encravado em Roma, sede da Santa Sé e da Igreja Católica."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1929, que acordo entre a Itália e a Santa Sé criou o Estado da Cidade do Vaticano?",
    "resposta": "Tratado de Latrão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lateran_Treaty",
      "https://pt.wikipedia.org/wiki/Tratado_de_Latr%C3%A3o"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lateran_Treaty",
        "situacao": "ok",
        "texto": "The Lateran Treaty was one component of the Lateran Pacts of 1929, agreements between Italy under King Victor Emmanuel III and Duce Benito Mussolini and the Holy See under Pope Pius XI to settle the long-standing Roman question.\n[…]\nThe treaty and associated pacts were named after the Lateran Palace, where they were signed on 11 February 1929. The Italian Parliament ratified them on 7 June 1929.\n[…]\nNegotiations for the settlement of the Roman question began in 1926 between the Holy See and the Italian fascist government led by Prime Minister Benito Mussolini, and culminated in the agreements of the Lateran Pacts, signed—the Treaty says—for King Victor Emmanuel III by Mussolini and for Pope Pius XI by Cardinal Secretary of State Pietro Gasparri, on 11 February 1929. It was ratified on 7 June 1929.\n[…]\nIn 2008, it was announced that the Vatican would no longer immediately adopt all Italian laws, citing conflict over right-to-life issues, partially attributed to the November, 2008 Italian court ruling in the trial and ruling of the Eluana Englaro case.\n[…]\nThe Italian racial laws of 1938 prohibited marriages between Jews and non-Jews, including Catholics: the Vatican viewed this as a violation of the Concordat, which gave the church the sole right to regulate marriages involving Catholics. Article 34 of the Concordat specified that marriages performed by the Catholic Church would always be considered valid by civil authorities.\n[…]\nList of sovereigns of the Vatican City State\n[…]\nIndex of Vatican City-related articles\n[…]\nText of the Lateran Pacts, including the financial convention and the concordat (original Italian)\n[…]\nItalian law executing the Lateran Pacts, with the text and annexed maps (original Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Latr%C3%A3o",
        "situacao": "ok",
        "texto": "O Tratado de Latrão, (em italiano:  Patti Lateranensi) \"Tratado de Santa Sé\" ou \"Tratado de Roma-Santa Sé\" foi um componente dos Pactos de Latrão de 1929, acordos entre o Reino da Itália sob o rei Vítor Emanuel III (com seu primeiro-ministro Benito Mussolini) e a Santa Sé sob o Papa Pio XI para resolver a questão romana de longa data.\n[…]\nO tratado e os pactos associados receberam o nome do Palácio de Latrão, onde foram assinados em 11 de fevereiro de 1929, e o parlamento italiano os ratificou em 7 de junho de 1929. O tratado reconheceu a Cidade do Vaticano como um Estado independente sob a soberania da Santa Sé. O governo italiano também concordou em dar à Igreja Católica Romana uma compensação financeira pela perda dos Estados Pontifícios.\n[…]\nSob os termos da Lei de Garantias de 1871, o governo italiano ofereceu ao Papa Pio IX e seus sucessores o uso, mas não a soberania sobre, o Vaticano e os Palácios de Latrão e uma renda anual de 3 250 000 liras. A Santa Sé recusou este acordo, alegando que a jurisdição espiritual do papa exigia uma independência clara de qualquer poder político e, a partir daí, cada papa se considerou um \"prisioneiro no Vaticano\". O Tratado de Latrão pôs fim a esse impasse.\n[…]\nAs negociações para a resolução da Questão Romana começaram em 1926 entre a Santa Sé e o governo fascista da Itália, liderado pelo primeiro-ministro Benito Mussolini, e culminaram nos acordos dos Pactos de Latrão, assinados — diz o Tratado — para o rei Vítor Emanuel III da Itália por Mussolini e para o papa Pio XI pelo cardeal secretário de Estado Pietro Gasparri, Em 11 de fevereiro de 1929. Foi ratificado em 7 de junho de 1929.\n[…]\nA Constituição da República Italiana pós-Segunda Guerra Mundial, adotada em 1948, afirma que as relações entre o Estado e a Igreja Católica \"são reguladas pelos Tratados de Latrão\"."
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Paraguai",
      "descricao": "País sem litoral da América do Sul, com capital em Assunção."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na América do Sul, qual característica geográfica o Paraguai compartilha apenas com a Bolívia?",
    "resposta": "Não ter saída para o mar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Landlocked_country",
      "https://en.wikipedia.org/wiki/Paraguay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Landlocked_country",
        "situacao": "ok",
        "texto": "A landlocked country is a country that is not coastal. As of 2026, there are 44 landlocked countries, two of them doubly landlocked due to being surrounded by other landlocked nations (Liechtenstein and Uzbekistan), and three landlocked de facto states in the world, South Ossetia, Kosovo and Transnistria. Kazakhstan is the world's largest landlocked country by area, Kyrgyzstan is the farthest land\n[…]\nIt is possible that one of the causes of the Paraguayan War was Paraguay's lack of direct ocean access (although this is disputed; see the linked article).\n[…]\nFor instance, Paraguay (and Bolivia to a lesser extent) have access to the ocean through the Paraguay and Paraná rivers.\n[…]\nNorth America and Oceania have no landlocked countries.\n[…]\nSouth American group (2): Bolivia and Paraguay\n[…]\nAccording to the United Nations geoscheme (excluding the de facto states), Africa has the most landlocked countries, at 16, followed by Europe (14), Asia (12), and South America (2). However, if Armenia, Azerbaijan, Kazakhstan, and South Ossetia (de facto state) are counted as parts of Europe, then Europe has the most landlocked countries, at 20 (including all three landlocked de facto states).\n[…]\nIf these transcontinental or culturally European countries are included in Asia, then both Africa and Europe (including Kosovo and Transnistria) have the most, at 16. Depending on the status of Kazakhstan and the South Caucasian countries, Asia has between 9 and 13 (including South Ossetia). South America only has two landlocked countries: Bolivia and Paraguay.\n[…]\nAustralia and North America have no landlocked countries, while Antarctica has no countries at all. Oceania (which is usually not considered a continent but a geographical region by the English-speaking countries) also has no landlocked countries.\n[…]\nAll landlocked countries, except Bolivia and Paraguay, are located on the continental mainland of Afro-Eurasia."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paraguay",
        "situacao": "ok",
        "texto": "Paraguay, officially the Republic of Paraguay, is a landlocked country located in the central region of South America. It borders Bolivia to the northwest and north, Brazil to the northeast and east, and Argentina to the southeast, south, and west. Paraguay has access to the Atlantic Ocean via the Paraná–Paraguay Waterway, a system of navigable channels shared by five countries. The country is gov\n[…]\nThe Stroessner regime's strong anti-communist stance earned it the support of the United States, with which it enjoyed close military and economic ties. Paraguay was a leading participant in Operation Condor, a campaign of state terror and security operations officially implemented in 1975 which were jointly conducted by the military dictatorships of six South American countries (Chile, Argentina, Bolivia, Paraguay, Uruguay and Brazil) with the support of the United States.\n[…]\nFor most of its history, Paraguay has been a recipient of immigrants owing to its low population density, especially after the demographic collapse caused by the Paraguayan War. Immigrants include Italians, Germans, Spanish, English, Russians, Koreans, Chinese, Arab, Japanese, Ukrainians, Poles, Jews, Brazilians, Bolivians, Americans, Colombians, Mexicans, Venezuelans, Chileans, Taiwanese, Peruvians, Asian people, Uruguayans and the largest group of all; Argentines.\n[…]\nThe Paraguay national football team, nicknamed La Albirroja (\"The White and Red\") or La Garra Guaraní (\"The Claw of the Guaraní\"), has qualified for nine FIFA World Cup competitions (1930, 1950, 1958, 1986, 1998, 2002, 2006, 2010, 2026). The team's best performance was at the 2010 World Cup, in which they reached the quarter-finals. The national team regularly competes in the Copa América, and have won on two occasions (1953 and 1979).\n[…]\nOutline of Paraguay\n[…]\nGeographic data related to Paraguay at OpenStreetMap\n[…]\nParaguay travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADs_sem_costa_mar%C3%ADtima",
        "situacao": "ok",
        "texto": "São denominados países sem costa marítima, países interiores ou países encravados aqueles que não têm saída para o mar ou oceano. Note-se que esta definição de mar não inclui os mares que não estão ligados aos oceanos, pelo que o mar Cáspio e o mar de Aral, ao serem lagos endorreicos, permitem que alguns países que neles têm costa sejam considerados países sem costa marítima. Os países banhados pe\n[…]\nA Bolívia é um país que já possuiu, no século XIX, saída para o mar, mas a perdeu na Guerra do Pacífico com o Chile. Ao final do conflito, em 1883, o Chile incorporou uma grande parte do território boliviano, incluindo a porção do território da Bolívia que garantia ao país acesso ao mar. Desde então, a Bolívia e o Chile têm relações tensas em torno dessa questão, pois a Bolívia deseja recuperar sua saída ao mar, enquanto o Chile não pretende ceder o território ganho com a Guerra.\n[…]\nA questão do acesso ao mar é tão importante para a Bolívia que o país celebra todo ano, no dia 23 de março, o Dia do Mar - ocasião na qual é lembrada a necessidade de o país recuperar o acesso a águas oceânicas. A cidade-alvo das demandas bolivianas é Antofagasta, que fez parte da Bolívia até a Guerra do Pacífico e passou a ser internacionalmente reconhecida como parte integrante do Chile apenas com a assinatura do Tratado de Paz e Amizade entre Chile e Bolívia em 1904.\n[…]\nDesde a eleição de Evo Morales em 2006, essa questão voltou a ser central na política boliviana, tendo em vista o interesse de Evo no tema.\n[…]\nEm 2026, há no mundo 44 países nesta situação geográfica:\n[…]\nEntre todos esses países, apenas o Liechtenstein e o Uzbequistão encontram-se rodeados exclusivamente por outros países sem costa marítima.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Boliviano",
      "descricao": "Moeda oficial da Bolívia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os nomes das moedas da Bolívia e da Venezuela remetem a qual personagem histórico?",
    "resposta": "Simón Bolívar",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bolivian_boliviano",
      "https://en.wikipedia.org/wiki/Venezuelan_bol%C3%ADvar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bolivian_boliviano",
        "situacao": "ok",
        "texto": "The boliviano ([boliˈβjano]; sign: Bs ISO 4217 code: BOB) is the currency of Bolivia. It is divided into 100 cents or centavos in Spanish. Boliviano was also the name of the currency of Bolivia between 1864 and 1963. From April 2018, the manager of the Central Bank of Bolivia, Pablo Ramos, announced the introduction of the new family of banknotes of the Plurinational State of Bolivia, started with\n[…]\nThe new family of banknotes of the Plurinational State received several awards such as \"the best banknotes in Latin America\", was highlighted by its security measures, its aesthetics and its inclusion of prominent figures in Bolivian history, being among those who awarded the \"Latin American High Security Printing Press Conference\".\n[…]\nThe first boliviano from 1864 to 1963, worth eight soles and divided into 100 centécimos (later centavos). The name bolivar was used for an amount of ten bolivianos.\n[…]\nThe Bolivianos bills depict prominent historical figures:\n[…]\nThe 10 Bolivianos bill has in the obverse to the painter Cecilio Guzman and reverse an image of city of Cochabamba.\n[…]\nThe 100 Boliviano bill has in the obverse of the great historian Gabriel Rene Moreno and the reverse one image of the Mayor Real and Papal University of Saint Francisco Xavier of Chuquisaca in the capital, the city of Sucre.\n[…]\nMVDOL (ISO 4217 code BOV) is a unit of currency (account). It has a value, inflation-adjusted between the Bolivian boliviano and the U.S. dollar. It is used in financial instruments due to its stable value.\n[…]\nThe name wikt:MVDOL is derived from moneda nacional con mantenimiento de valor al dólar estadounidense ([Bolivian] national currency with value maintained to the U.S. dollar).\n[…]\nEconomy of Bolivia\n[…]\nCentral Bank of Bolivia\n[…]\nCoins of Bolivia, online catalog with images Archived 17 December 2014 at the Wayback Machine\n[…]\nA gallery of the banknotes of Bolivia\n[…]\nBolivian boliviano banknotes at Numista"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Venezuelan_bol%C3%ADvar",
        "situacao": "ok",
        "texto": "The bolívar [boˈliβaɾ] is the official currency of Venezuela. Named after the hero of South American independence Simón Bolívar, it was introduced by President Antonio Guzmán Blanco via the monetary reform of 1879, before which the venezolano was circulating. Due to its decades-long reliance on silver and gold standards, and then on a peg to the United States dollar, it was long considered among t\n[…]\nThe bolívar is named after the hero of South American independence Simón Bolívar. The bolívar was introduced by President Guzman Blanco, who around one hundred years after Simón Bolívar's birth, undertook various projects to honour his contribution to Venezuelan history. The coin appeared in the monetary law of 1879, replacing the short-lived venezolano at a rate of five bolívares to one venezolano.\n[…]\nAll the coins had the same design. On the obverse the left profile of the Libertador Simón Bolívar is depicted, along with the inscription \"Bolívar Libertador\" within a heptagon, symbolizing the seven stars of the flag. On the reverse the coat of arms is depicted, circled by the official name of the country, with the date and the denomination below.\n[…]\nThe following is a list of former Venezuelan bolívar banknotes:\n[…]\nAccording to a United States Department of Defense adviser linked to The Pentagon, the Bs.F 1.5 billion was printed by Venezuela and destined for Bolivia, since unlike the implied exchange rate of thousands of hard bolívares equaling one United States dollar, the exchange rate was approximately 10 hard bolívares per dollar, making the value of the stash 419 times stronger, from US$358,000 to US$150 million.\n[…]\nIn August 2024, banknotes of 200 and 500 bolívares were introduced, distinguished from the lower denominations by having multiple portraits of Simón Bolívar.\n[…]\nHistory of Venezuelan Currency (in Spanish)\n[…]\nCurrency Reconversion Calculator Bolívar Soberano to Bolívar Digital"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Boliviano_%28moeda%29",
        "situacao": "ok",
        "texto": "O boliviano (Bs) é a moeda oficial da Bolívia desde 1986, dividido em 100 centavos e seu código, de acordo com a norma ISO 4217, é BOB.\n[…]\nO Boliviano foi criado no governo de Victor Paz Estensorro, através da Lei nº. 901, de 28 de Novembro de 1986, que substituía o hiperinflacionado Peso Boliviano, na paridade de $b. 1.000.000.- por 1 Bs. A nova moeda entrou em circulação oficialmente em 1º de Janeiro de 1987 e circula até hoje.\n[…]\nAs primeiras cédulas de Boliviano eram nada mais que as notas e cheques de gerência de pesos com carimbo litográfico no verso com o novo valor ajustado, com 6 zeros a menos. As cédulas próprias começaram a sair ainda em 1987. Já as notas antigas passaram pela desmonetização até 31 de Dezembro de 1987, perdendo seu valor legal em 1º de Janeiro de 1988.\n[…]\nEm 2019, um boliviano equivalia a R$ 0,58 . A série atual de cédulas foi lançada entre 2018 e 2019, com o novo nome oficial: Estado Plurinacional da Bolívia.\n[…]\nEconomia da Bolívia\n[…]\nUma Galeria das notas da Bolívia (em alemão)(em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Budapeste",
      "descricao": "Capital e maior cidade da Hungria, às margens do Danúbio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Viena, Bratislava e Belgrado são capitais banhadas pelo mesmo rio. Qual outra capital europeia completa esse grupo?",
    "resposta": "Budapeste",
    "fonte": [
      "https://en.wikipedia.org/wiki/Danube"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Danube",
        "situacao": "ok",
        "texto": "The Danube ( DAN-yoob; see also other names) is a river in Europe, the second-longest after the Volga. It flows through Central and Southeastern Europe, from the Black Forest of Germany south through the Danube Delta in Romania into the Black Sea. A large and historically important river, it was once a frontier of the Roman Empire. In the 21st century, it connects ten European countries, running t\n[…]\nOriginating in Germany, the Danube flows southeast for 2,850 km (1,770 mi), passing through or bordering Austria, Slovakia, Hungary, Croatia, Serbia, Romania, Bulgaria, Moldova, and Ukraine. Among the many cities on the river are four national capitals: Vienna, Bratislava, Budapest, and Belgrade. Its drainage basin amounts to 817,000 km2 (315,000 sq mi) and extends into nine more countries.\n[…]\nClassified as an international waterway, it originates in the town of Donaueschingen, in the Black Forest of Germany, at the confluence of the rivers Brigach and Breg. The Danube then flows southeast for about 2,730 km (1,700 mi), passing through four capital cities (Vienna, Bratislava, Budapest, and Belgrade) before emptying into the Black Sea via the Danube Delta in Romania and Ukraine.\n[…]\nBudapest – capital of Hungary, the largest city and the largest agglomeration on Danube (about 3,300,000 people).\n[…]\nThe Route of Emperors and Kings is an international touristic route leading from Regensburg to Budapest, calling in Passau, Linz and Vienna. The international consortium ARGE Die Donau-Straße der Kaiser und Könige, comprising ten tourism organisations, shipping companies, and cities, strives for the conservation and touristic development of the Danube region.\n[…]\nBefore the Route of Emperors and Kings ends, you pass Bratislava and Budapest, the latter of which was seen as the twin town of Vienna during the times of the Austro-Hungarian Empire.\n[…]\nBridges of Budapest over the river Danube[link removed]"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Dan%C3%BAbio",
        "situacao": "ok",
        "texto": "O rio Danúbio é o segundo rio mais longo da Europa (depois do Volga) com uma extensão estimada entre 2 845 e 2 888 km, atravessando o continente de oeste a leste, desde sua nascente na Floresta Negra (Alemanha) até desaguar no mar Negro, no delta do Danúbio (Romênia).\n[…]\nO rio passa por quatro europeis (Viena, Bratislava, Budapeste e Belgrado) e constitui a fronteira natural de dez nações. Além das capitais nacionais, outras importantes cidades estão às suas margens: Ulm, Ingolstadt, Ratisbona, Linz, Vukovar, Novi Sad, Ruse, Brăila e Galați.\n[…]\nO Danúbio atravessa, em seguida, a Baviera, as cidades de Sigmaringa, Ulm, Ratisbona e Passau, e do norte da Áustria (via Linz e Viena), ao longo do sul da Eslováquia através de Bratislava, em toda a Hungria de norte ao sul através de Budapeste, ao longo da Croácia para o leste, através do norte da Sérvia por Belgrado, marca a fronteira entre a Sérvia e a Roménia e entre a Roménia e a Bulgária, antes desaguar no mar Negro na Romênia, formando um grande delta que faz fronteira com a Ucrânia.\n[…]\nApós isso, o rio passa por cima de quase 36 km no meio de um vale mais do Danúbio, o Wachau (listado como Património Mundial pela UNESCO), que se estende desde Durnstein para Krems. Já perto da fronteira com a Eslováquia, o Danúbio atravessa ainda a capital austríaca, Viena. A cidade tem o título de \"cidade rio Danúbio\", que divide esse estatuto com Belgrado e Budapeste. Para reduzir os efeitos negativos das inundações, o rio foi artificialmente regulado.\n[…]\nQuando entra na Eslováquia, o Danúbio marca a primeira fronteira austríaca a apenas 45 km de Viena, cruzando Bratislava, capital eslovaca. Por fim, ele ainda passa entre a fronteira da Eslováquia com Hungria.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Suriname",
      "descricao": "País do norte da América do Sul, ex-colônia holandesa, com capital em Paramaribo."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Em 1667, pelo Tratado de Breda, os holandeses ficaram com o Suriname e deixaram aos ingleses a colônia que viraria qual cidade?",
    "resposta": "Nova York",
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)",
        "situacao": "ok",
        "texto": "The Peace of Breda, or Treaty of Breda was signed in the Dutch city of Breda, on 31 July 1667. It consisted of three separate treaties between England and each of its opponents in the Second Anglo-Dutch War: the Dutch Republic, France, and Denmark–Norway. It also included a separate Anglo-Dutch commercial agreement.\n[…]\nAmong the terms was confirmation of colonial territories taken in the War, including Suriname to the Dutch and New Netherland (New York) to the English.\n[…]\nIn August 1664, the English occupied New Netherland, later renamed New York; when another attack captured WIC slave trade posts in modern Ghana, the Dutch sent a fleet to recapture them. The result was to bankrupt the RAC, whose investors saw war as the best way to recoup their losses.\n[…]\nThe Dutch kept Surinam, now part of modern Suriname, Fort Cormantin and Run while the English kept New Netherland, which was subsequently divided into the colonies of New York, New Jersey, Pennsylvania, Massachusetts, Connecticut and Delaware.\n[…]\nGooskens, Frans (2016). Sweden and the Treaty of Breda in 1667 – Swedish diplomats help to end naval warfare between the Dutch Republic and England (PDF). De Oranje-boom; Historical and Archeology Circle of the City and Country of Breda.\n[…]\nHaythornthwaite, Shavana. \"The Peace of Breda (1667)\". OPIL. Retrieved 23 October 2019.\n[…]\nLesaffer, Randall (2016). De Vrede van Breda en de Europese traditie van vredesverdragen in Ginder 't Vreêverbont bezegelt : Essays over de betekenis van de Vrede van Breda 1667. Van Kemenade.\n[…]\nPepys, Samuel (8 September 1667). \"The Diary of Samuel Pepys; 8 September 1667\". PepysDiary.com. Retrieved 26 October 2019.\n[…]\nSwart, KW (1969). The miracle of the Dutch Republic as seen in the seventeenth century;: An inaugural lecture delivered at University College London 6 November 1967. HK Lewis."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tratado_de_Breda",
        "situacao": "ok",
        "texto": "O Tratado de Breda, assinado entre a República das Sete Províncias Unidas dos Países Baixos e o Reino da Grã-Bretanha a 31 de julho de 1667, terminou com a Segunda Guerra Anglo-Holandesa.\n[…]\nO tratado leva o nome da cidade de Breda, nos Países Baixos, onde foi assinado.[carece de fontes]?\n[…]\nO Tratado surgiu para dar fim à segunda guerra anglo-holandesa (1665-1667). A ilha Run, situada no arquipélago das ilhas Molucas, atual Indonésia, foi cedida aos Países Baixos, propiciando domínio mundial da noz-moscada, uma especiaria muito valorizada à época. O Tratado proporcionou a ambos uma saída digna do impasse.\n[…]\nOs ingleses poderiam conservar Manhattan (rebatizada depois por Nova York) sem reivindicar seus direitos sobre a ilha Run e os holandeses a conservariam e não mais reivindicariam Manhattan.[carece de fontes]?",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "China",
      "descricao": "País do leste da Ásia, com capital em Pequim."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Apesar de se estender por milhares de quilômetros de leste a oeste, quantos fusos horários oficiais a China adota?",
    "resposta": "Um",
    "fonte": [
      "https://en.wikipedia.org/wiki/Time_in_China"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Time_in_China",
        "situacao": "ok",
        "texto": "The time in China follows a single standard time offset of UTC+08:00, where Beijing is located, even though the country spans five geographical time zones. It is the largest sovereign nation in the world that officially observes only one time zone.\n[…]\nUntil 1913, the official time standard for the whole of China was still the apparent solar time of Beijing, the capital of the country at the time. Starting in 1914, the Republic of China government began adopting the Beijing Local Mean Solar Time as the official time standard.\n[…]\nBy 1918, five standard time zones had been proposed by the Central Observatory of Beiyang government of Republic of China, including the Kunlun (UTC+05:30), Sinkiang-Tibet (UTC+06:00), Kansu-Szechwan (UTC+07:00), Chungyuan (UTC+08:00), and Changpai (UTC+08:30).\n[…]\nThere are two independent sources that claim the CCP, and/or the People's Republic of China, were using apparent solar time for Beijing Time before the period between 27 September 1949 and 6 October 1949, and they adopted the time of UTC+08:00 within that period, but the claim is dubious.\n[…]\nRegardless, Beijing Time users in Xinjiang usually schedule their daily activities two hours later than those who live in eastern China. As such, stores and offices in Xinjiang are commonly open from 10:00 to 19:00 Beijing Time, which equals 08:00 to 17:00 in Ürümqi Time. This is known as the work/rest time in Xinjiang.\n[…]\nThe territory of the People's Republic of China is covered in the IANA time zone database by the following zones. \"Asia/Shanghai\" is used instead of \"Asia/Beijing\" because Shanghai is the most populous city in the zone.\n[…]\nHistorical time zones of China"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Suíça",
      "descricao": "País sem litoral da Europa Central, nos Alpes, com sede de governo em Berna."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Alemão, francês e italiano estão entre as línguas nacionais da Suíça. Quantas línguas nacionais o país tem ao todo?",
    "resposta": "Quatro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Switzerland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Switzerland",
        "situacao": "ok",
        "texto": "The four national languages of Switzerland are German, French, Italian, and Romansh. German, French, and Italian maintain equal status as official languages at the national level within the federal administration of the Swiss Confederation, while Romansh is used in dealings with people who speak it. Latin is occasionally used in some formal contexts, particularly to denote the country (Confoederat\n[…]\nItalian Switzerland (Italian: Svizzera italiana, Romansh: Svizra taliana, French: Suisse italienne, German: italienische Schweiz) is the Italian-speaking part of Switzerland, which includes the canton of Ticino and the southern part of Grisons. Italian is also spoken in the Gondo Valley (leading to the Simplon Pass, on the southern part of the watershed) in Valais. The traditional vernacular of this region is the Lombard language, specifically its Ticinese dialect.\n[…]\nThe proportion of Italian-speaking inhabitants had been decreasing since the 1970s, after reaching a high of 12% of the population during the same decade. This was entirely because of the reduced number of immigrants from Italy to Switzerland. However it has increased again during the last decade.\n[…]\nMany Swiss find it easier to use English as a lingua franca with other Swiss people of different linguistic backgrounds. In 2022, Switzerland ranked 23rd in Europe in the English Proficiency Index of EF language school.\n[…]\nTo avoid having to translate the name of Switzerland into the four national languages, Latin is used on the coins of the Swiss franc (Helvetia or Confoederatio Helvetica) and on Swiss stamps (Helvetia). The country code top-level domain for Switzerland on the internet is .ch, the abbreviation of the Latin name, Confoederatio Helvetica (Swiss Confederation); similarly, the International vehicle registration code for Swiss automobiles is \"CH\".\n[…]\nDemographics of Switzerland"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_da_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "A questão das línguas da Suíça é uma problemática cultural e de política central da Suíça. O alemão, o francês, o italiano e o romanche são as quatro línguas nacionais faladas na Suíça; as três primeiras em uso oficial na Confederação Suíça,  o romanche usado em dois cantões.\n[…]\nDesde os Waldstätte em 1291, a Confederação era completamente germanófona inicialmente, com muitos dialetos germano-suíços, mas logo depois do século XV, ela conhece uma extensão da sua esfera de influência ao sul do Alpes em uma região de língua italiana, depois, para oeste, numa região de língua francesa. O alemão ainda é dominante, mas o francês é avaliado ao abrigo do Antigo Regime pelo prestígio da cultura francesa e as relações entre França e Suíça.\n[…]\nO problema das línguas não era o tema central do novo estado. Segundo o artigo 109 da constituição de 1848, as três principais línguas faladas na Suíça, alemão, francês e italiano eram as línguas nacionais da Confederação. Estas três línguas se tornaram oficial de maneira igualitária.\n[…]\nAs quatro línguas nacionais são o alemão (não o alemão suíço), maioritária, e três línguas latinas minoritárias: o francês, o italiano e o romanche.\n[…]\nOs quatro grandes princípios inscritos na Constituição da Suíça são:\n[…]\nNa Assembleia Federal Suíça, os deputados podem em princípio, se exprimir com a língua nacional de sua escolha. Os germanófonos são a maioria, daí o alemão ser a língua mais utilizada. Os italófonos escolhem o alemão ou o francês e os francófonos utilizam principalmente o francês. O romanche quase não é utilizado. Um sistema de tradução simultânea existe para o alemão, francês e italiano.\n[…]\nLínguas da Suíça (em francês)\n[…]\nPNR56 \"Diversidade das línguas e competências linguísticas da Suíça\" (em francês) (em alemão) (em italiano)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Iugoslávia",
      "descricao": "República Federal Socialista da Iugoslávia, país dos Bálcãs que existiu de 1945 a 1992."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A antiga Iugoslávia socialista era formada por quantas repúblicas?",
    "resposta": "Seis",
    "distratores": [
      "Quatro",
      "Cinco",
      "Oito"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Socialist_Federal_Republic_of_Yugoslavia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Socialist_Federal_Republic_of_Yugoslavia",
        "situacao": "ok",
        "texto": "The Socialist Federal Republic of Yugoslavia, known from 1945 to 1963 as the Federal People's Republic of Yugoslavia, and commonly referred to as Yugoslavia, was a country in Central and Southeast Europe. It was established in 1945, following World War II, and lasted until 1992, dissolving amid the onset of the Yugoslav Wars.\n[…]\nDue to the name's length, abbreviations were often used for the Socialist Federal Republic of Yugoslavia, though it was most commonly known simply as Yugoslavia. The most common abbreviation is SFRY, though \"SFR Yugoslavia\" was also used in an official capacity, particularly by the media.\n[…]\nThe League of Communists of Yugoslavia dissolved in January 1990 along federal lines. Republican communist organisations became the separate socialist parties.\n[…]\nIn September 1992, the Federal Republic of Yugoslavia (consisting of Serbia and Montenegro) failed to achieve de jure recognition as the continuation of the Socialist Federal Republic in the United Nations. It was separately recognised as a successor alongside Slovenia, Croatia, Bosnia and Herzegovina, and Macedonia.\n[…]\nInternally, the Yugoslav federation was divided into six constituent states. Their formation was initiated during the war years, and finalized in 1944–1946. They were initially designated as federated states, but after the adoption of the first federal Constitution, on 31 January 1946, they were officially named people's republics (1946–1963), and later socialist republics (from 1963 forward). They were constitutionally defined as mutually equal in rights and duties within the federation.\n[…]\nIn 2001, former constituent republics reached the partially implemented Agreement on Succession Issues of the Former Socialist Federal Republic of Yugoslavia that became effective on 2 June 2004.\n[…]\nYugoslavia Archive at marxists.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rep%C3%BAblica_Socialista_Federativa_da_Iugosl%C3%A1via",
        "situacao": "ok",
        "texto": "A República Socialista Federativa da Iugoslávia (RSFI) (português brasileiro) ou Jugoslávia (RSFJ) (português europeu), comumente referida como Iugoslávia (português brasileiro) ou Jugoslávia (português europeu), era um país da Europa, situado na área Central e Sudeste. Surgiu em 1945, após a Segunda Guerra Mundial, e durou até 1992, com a dissolução da Iugoslávia ocorrendo como consequência das G\n[…]\nAbrangendo uma área de 255.804 nos Bálcãs, a Iugoslávia fazia fronteira com o Mar Adriático e a Itália a oeste, com a Áustria e a Hungria ao norte, com a Bulgária e a Romênia a leste e com a Albânia e a Grécia ao sul. Era um estado socialista unipartidário e uma federação governada pela Liga dos Comunistas da Iugoslávia, e tinha seis repúblicas constituintes: Bósnia e Herzegovina, Croácia, Macedônia, Montenegro, Sérvia e Eslovênia.\n[…]\nEsloveno: Socialistična federativna republika Jugoslavija\n[…]\nO Partido Comunista da Iugoslávia (KPJ) mudou seu nome nessa época para Liga dos Comunistas da Iugoslávia (SKJ), tornando-se uma federação de seis partidos comunistas republicanos. O resultado foi um regime um pouco mais humano do que outros estados comunistas.\n[…]\nInternamente, a federação iugoslava foi dividida em seis estados constituintes . Sua formação foi iniciada durante os anos de guerra e finalizada em 1944-1946. Eles foram inicialmente designados como estados federados, mas após a adoção da primeira Constituição federal, em 31 de janeiro de 1946, foram oficialmente denominados repúblicas populares (1946-1963) e, posteriormente, repúblicas socialistas (de 1963 em diante).\n[…]\nEm 2001, as ex-repúblicas constituintes chegaram ao Acordo parcialmente implementado sobre questões de sucessão da antiga República Socialista Federativa da Iugoslávia, que entrou em vigor em 2 de junho de 2004.\n[…]\nGuerra Civil Iugoslava\n[…]\nMedia relacionados com República Socialista Federativa da Iugoslávia no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Cazaquistão",
      "descricao": "País da Ásia Central, o maior sem saída para o mar, com capital em Astana."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Em área, qual é o maior país do mundo sem saída para o mar?",
    "resposta": "Cazaquistão",
    "distratores": [
      "Mongólia",
      "Bolívia",
      "Chade"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Landlocked_country",
      "https://en.wikipedia.org/wiki/Kazakhstan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Landlocked_country",
        "situacao": "ok",
        "texto": "A landlocked country is a country that is not coastal. As of 2026, there are 44 landlocked countries, two of them doubly landlocked due to being surrounded by other landlocked nations (Liechtenstein and Uzbekistan), and three landlocked de facto states in the world, South Ossetia, Kosovo and Transnistria. Kazakhstan is the world's largest landlocked country by area, Kyrgyzstan is the farthest land\n[…]\nHowever, Uzbekistan's doubly landlocked status depends on whether the Caspian Sea is considered a lake or a sea. In the latter case, Uzbekistan is not doubly landlocked, since its neighbors Turkmenistan and Kazakhstan have access to the Caspian Sea.\n[…]\nCentral and Southern Asian cluster (6): Afghanistan, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan\n[…]\nThe Central and Southern Asian cluster and the Western Asian group can be considered contiguous, joined by the landlocked Caspian Sea. Mongolia is almost a part of this cluster too, being separated from Kazakhstan by only 30 km (19 mi), across Chinese or Russian territory.\n[…]\nAccording to the United Nations geoscheme (excluding the de facto states), Africa has the most landlocked countries, at 16, followed by Europe (14), Asia (12), and South America (2). However, if Armenia, Azerbaijan, Kazakhstan, and South Ossetia (de facto state) are counted as parts of Europe, then Europe has the most landlocked countries, at 20 (including all three landlocked de facto states).\n[…]\nIf these transcontinental or culturally European countries are included in Asia, then both Africa and Europe (including Kosovo and Transnistria) have the most, at 16. Depending on the status of Kazakhstan and the South Caucasian countries, Asia has between 9 and 13 (including South Ossetia). South America only has two landlocked countries: Bolivia and Paraguay."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kazakhstan",
        "situacao": "ok",
        "texto": "Kazakhstan, officially the Republic of Kazakhstan, is a landlocked country situated primarily in Central Asia, with a portion of its territory extending into Eastern Europe. It borders Russia to the north and west, China to the east, Kyrgyzstan to the southeast, Uzbekistan to the south, and Turkmenistan to the southwest, and it has a coastline along the Caspian Sea.\n[…]\nKazakhstan's terrain extends west to east from the Caspian Sea to the Altai Mountains and the Tian Shan, and north to south from the plains of Western Siberia to the oases and deserts of Central Asia. The Kazakh Steppe (plain), with an area of around 804,500 square kilometres (310,600 sq mi), occupies one-third of the country and is the world's largest dry steppe region. The steppe is characterized by large areas of grasslands and sandy regions.\n[…]\nIn total, there are 160 deposits with over 2.7 billion tonnes (2.7 billion long tons) of petroleum. Oil explorations have shown that the deposits on the Caspian shore are only a small part of a much larger deposit. It is said that 3.5 billion tonnes (3.4 billion long tons) of oil and 2.5 billion cubic metres (88 billion cubic feet) of gas could be found in that area. Overall the estimate of Kazakhstan's oil deposits is 6.1 billion tonnes (6.0 billion long tons).\n[…]\nKazakhstan is the ninth-largest country by area and the largest landlocked country in the world. As of 2014 tourism accounted for 0.3% of Kazakhstan's GDP, but the government had plans to increase it to 3% by 2020. According to the World Economic Forum's Travel and Tourism Competitiveness Report of 2017, travel and tourism industry GDP in Kazakhstan was $3.08 billion or only 1.6% of total GDP. The WEF ranked Kazakhstan 80th in its 2019 report.\n[…]\nWikimedia Atlas of Kazakhstan\n[…]\nWorld Bank Summary Trade Statistics Kazakhstan Archived 23 October 2015 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADs_sem_costa_mar%C3%ADtima",
        "situacao": "ok",
        "texto": "São denominados países sem costa marítima, países interiores ou países encravados aqueles que não têm saída para o mar ou oceano. Note-se que esta definição de mar não inclui os mares que não estão ligados aos oceanos, pelo que o mar Cáspio e o mar de Aral, ao serem lagos endorreicos, permitem que alguns países que neles têm costa sejam considerados países sem costa marítima. Os países banhados pe\n[…]\nA Bolívia é um país que já possuiu, no século XIX, saída para o mar, mas a perdeu na Guerra do Pacífico com o Chile. Ao final do conflito, em 1883, o Chile incorporou uma grande parte do território boliviano, incluindo a porção do território da Bolívia que garantia ao país acesso ao mar. Desde então, a Bolívia e o Chile têm relações tensas em torno dessa questão, pois a Bolívia deseja recuperar sua saída ao mar, enquanto o Chile não pretende ceder o território ganho com a Guerra.\n[…]\nA questão do acesso ao mar é tão importante para a Bolívia que o país celebra todo ano, no dia 23 de março, o Dia do Mar - ocasião na qual é lembrada a necessidade de o país recuperar o acesso a águas oceânicas. A cidade-alvo das demandas bolivianas é Antofagasta, que fez parte da Bolívia até a Guerra do Pacífico e passou a ser internacionalmente reconhecida como parte integrante do Chile apenas com a assinatura do Tratado de Paz e Amizade entre Chile e Bolívia em 1904.\n[…]\nEm 2026, há no mundo 44 países nesta situação geográfica:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Nigéria",
      "descricao": "País da África Ocidental, no golfo da Guiné, com capital em Abuja."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Com mais de duzentos milhões de habitantes, qual é o país mais populoso da África?",
    "resposta": "Nigéria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nigeria"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nigeria",
        "situacao": "ok",
        "texto": "Nigeria, officially the Federal Republic of Nigeria, is a country in West Africa between the Sahel to the north and the Gulf of Guinea in the Atlantic Ocean to the south. It covers an area of 923,769 square kilometres (356,669 mi2). With a population of more than 242 million, it is the most populous country in Africa, and the world's sixth-most populous country. Nigeria borders Niger in the north,\n[…]\nThe birth rate is 35.2 births/1,000 population and the death rate is 9.6 deaths/1,000 population as of 2017, while the total fertility rate is 5.07 children born/woman. Nigeria's population increased by 57 million from 1990 to 2008, a 60% growth rate in less than two decades. Nigeria is the most populous country in Africa and accounts for about 17% of the continent's total population as of 2017; however, exactly how populous is a subject of speculation.\n[…]\nT.B. Joshua's Emmanuel TV, originating from Nigeria, is one of the most viewed television stations across Africa.\n[…]\nNigeria has been home to numerous internationally recognised basketball players in the world's top leagues in America, Europe and Asia. These players include Basketball Hall of Famer Hakeem Olajuwon, and later players in the NBA. The Nigerian Premier League has become one of the biggest and most-watched basketball competitions in Africa. The games have aired on Kwese TV and have averaged a viewership of over a million people.\n[…]\nNigeria made history by qualifying the first bobsled team for the Winter Olympics from Africa when their women's two-person team qualified for the bobsled competition at the XXIII Olympic Winter Games. In the early 1990s, Scrabble was made an official sport in Nigeria; by the end of 2017, there were around 4,000 players in more than 100 clubs in the country.\n[…]\nDibua, Jeremiah I. Modernization and the Crisis of Development in Africa: The Nigerian Experience (Routledge, 2017)\n[…]\nNigeria, Democracy Now!"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nig%C3%A9ria",
        "situacao": "ok",
        "texto": "A Nigéria, oficialmente República Federal da Nigéria (em inglês:  Federal Republic of Nigeria), é uma república constitucional federal que compreende 36 estados e o Território da Capital Federal. O país está localizado na África Ocidental e compartilha fronteiras terrestres com o Benim a oeste; com Chade e Camarões a leste, e com o Níger ao norte. Sua costa encontra-se ao sul, no Golfo da Guiné, n\n[…]\nA Nigéria tem cerca de 243 milhões de habitantes. O país possui uma grande diversidade cultural: lá falam-se 514 línguas diferentes. Existem 371 grupos étnicos oficialmente reconhecidos. Os três maiores grupos étnicos são os ibo, os iorubá e os hauçá. O inglês é a língua oficial e uma língua franca amplamente utilizada.\n[…]\nA Nigéria é o o sexto páis mais populoso do mundo, o mais populoso da África e representa cerca de 17% da população total do continente em 2017; no entanto, o quão populosa a nação é, exatamente, é um assunto de especulação. As Nações Unidas estimam que a população da Nigéria em 2021 era de 213.401.323, distribuídos da seguinte forma: 51,7% vivem na área rural e 48,3% urbana, com uma densidade populacional de 167,5 pessoas por quilômetro quadrado.\n[…]\nA população da Nigéria aumentou em 57  milhões de 1990 a 2008, uma taxa de crescimento de 60% em menos de duas décadas. A maior cidade do país, Lagos, cresceu de cerca de 300.000 habitantes em 1950 para uma população estimada em 13,4 milhões em 2017.\n[…]\nAlém disso, o casamento infantil continua a ser comum na Nigéria. e estima-se de que 700 000 escravos existam no país.\n[…]\nApesar dos filmes nigerianos serem produzidos desde a década de 1960, a melhora das tecnologias de filmagem e de edição digital de vídeo, que se tornaram mais acessíveis, estimulou a indústria cinematográfica do país. O nome Nollywood é derivado do termo Hollywood, da mesma maneira como Bollywood, a grande produção do cinema indiano.\n[…]\nNigeria gov (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Suriname",
      "descricao": "País do norte da América do Sul, ex-colônia holandesa, com capital em Paramaribo."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Vizinho do Brasil, o Suriname tem como língua oficial uma herança da colonização. Qual é essa língua?",
    "resposta": "Neerlandês (holandês)",
    "fonte": [
      "https://en.wikipedia.org/wiki/Suriname"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Suriname",
        "situacao": "ok",
        "texto": "Suriname,  officially the Republic of Suriname, is a country on the northern coast of South America, also considered part of the Caribbean region. Situated slightly north of the equator, over 90% of its territory is covered by rainforest, the second-highest proportion of forest cover in the world. Suriname is bordered by the Atlantic Ocean to the north, French Guiana to the east, Brazil to the sou\n[…]\nDue to Suriname's Dutch colonial history, Suriname had a long-standing special relationship with the Netherlands.\n[…]\nThe Armed Forces of Suriname have three branches: the Army, the Air Force, and the Navy. The president of the Republic is the Supreme Commander-in-Chief of the Armed Forces (Opperbevelhebber van de Strijdkrachten). The president is assisted by the minister of defence. Beneath the president and minister of defence is the commander of the armed forces (Bevelhebber van de Strijdkrachten). The military branches and regional military commands report to the commander.\n[…]\nSuriname, along with neighbouring Guyana, is one of only two countries on the mainland South American continent that drive on the left, although many vehicles are left-hand-drive as well as right-hand-drive. One explanation for this practice is that at the time of its colonisation of Suriname, the Netherlands itself used left-hand traffic, also introducing the practice in the Dutch East Indies, now Indonesia.\n[…]\nAnother is that Suriname was first colonised by the British, and for practical reasons, this was not changed when it came under Dutch administration. Although the Netherlands converted to driving to the right at the end of the 18th century, Suriname did not.\n[…]\n(in Dutch) Website of the President of the Republic of Suriname Archived 27 February 2021 at the Wayback Machine\n[…]\n(in Dutch) Website of the Government of the Republic of Suriname\n[…]\n(in Dutch) Website of the National Assembly of the Republic of Suriname"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Suriname",
        "situacao": "ok",
        "texto": "Suriname (pronúncia em português europeu: [suɾiˈnɐm(ɨ)]; pronúncia em português brasileiro: [suɾi'nɐmi]; pronúncia em neerlandês: [ˌsyːriˈnaːmə]; pronúncia em surinamês:  [sraˈnãŋ]), oficialmente chamado de República do Suriname (em neerlandês: Republiek Suriname), é um país do norte da América do Sul, limitado a norte pelo oceano Atlântico, a leste pela França (Guiana Francesa), a sul pelo Brasil\n[…]\nQuando o território foi tomado pelos holandeses, passou a fazer parte de um grupo de colônias conhecido como Guiana Holandesa. A grafia oficial do nome em inglês do país foi alterada para \"Suriname\" em janeiro de 1978, mas \"Surinam\" ainda pode ser encontrado em inglês.\n[…]\nEmbora mercadores neerlandeses tivessem estabelecido várias colónias na região da Guiana antes, os neerlandeses não tomaram posse do que é hoje o Suriname até ao Tratado de Breda, em 1667, que marcou o fim da Segunda Guerra Anglo-Holandesa. Em 1863 foi abolida a escravatura, e devido a isso começaram a ser trazidos trabalhadores da Índia e de Java.\n[…]\nA língua neerlandesa, ou holandês, é a língua oficial do Suriname, que aderiu em 2004 à União da língua Neerlandesa e é a mais difundida, sendo a primeira língua de mais de 60% dos habitantes. Como a população surinamesa é muito diversificada, os idiomas também assumem recortes étnicos: javaneses falam javanês e indonésio; hindustanis falam sarnami-hindi (hindi do Suriname) e os ameríndios utilizam suas línguas originais (dos troncos linguísticos caribe e aruaque).\n[…]\nA Holanda concedeu a independência do Suriname em 1975. Uma das heranças deixada pelo colonizador foi a estrutura educacional eficiente, sobretudo em relação a alfabetização. Contudo, existe uma deficiência em relação ao ensino superior, o que impede o desenvolvimento científico e tecnológico do país.\n[…]\nAssembleia Nacional do Suriname(em neerlandês)\n[…]\n«Encyclopædia Britannica - Suriname Country Page» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Equador",
      "descricao": "País da América do Sul, na costa do Pacífico, cuja capital é Quito."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Desde o ano dois mil, qual é a moeda oficial do Equador?",
    "resposta": "Dólar americano",
    "distratores": [
      "Sucre",
      "Peso equatoriano",
      "Sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ecuadorian_sucre",
      "https://en.wikipedia.org/wiki/Ecuador"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ecuadorian_sucre",
        "situacao": "ok",
        "texto": "The sucre (Spanish pronunciation: [ˈsukre]) was the currency of Ecuador between 1884 and 2000. Its ISO code was ECS and it was subdivided into 10 decimos and 100 centavos. The sucre was named after Latin American political leader Antonio José de Sucre. The currency was replaced by the United States dollar as a result of the 1998–99 financial crisis.\n[…]\nAll banknotes circulated since 1928 had been printed by the American Bank Note Company, but Waterlow and Sons were now contracted to produce the 5 and 50 sucre notes, which were the first Ecuadorian notes to have a security thread. In the late 1950s, Waterlow was dropped in favor of Thomas de la Rue, which printed 5, 20, 50, and 100 sucre notes, while American Bank Note continued printing 5, 10, 20, and 100 sucre notes.\n[…]\nBoth printers' notes shared the same basic design; however, American Bank Note used collared planchets as a security device, while De La Rue employed a metal thread. These notes went through several modifications, and fluorescent security ink was introduced in about 1970. A small-size 1000-sucre note was finally put into circulation in 1973. The next change came in 1975, when the back of all circulating notes was redesigned to show the new national coat of arms.\n[…]\nS/. 10,000 (Obverse: Ecuador's second (first Ecuadorian born) president Vicente Rocafuerte. Reverse: Independence Monument at Quito's main square (Plaza Grande), worth US$0.40\n[…]\nS/. 20,000 (Obverse: former Conservative president Gabriel García Moreno. Reverse: Ecuador's coat of arms), worth US$0.80\n[…]\nS/. 50,000 (Obverse: former Liberal president Eloy Alfaro Delgado; Reverse: Ecuador's coat of arms), worth US$2.00\n[…]\nEconomy of Ecuador\n[…]\nNumismatics of Ecuador\n[…]\nHistorical banknotes of Ecuador (in English and German)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ecuador",
        "situacao": "ok",
        "texto": "Ecuador, officially the Republic of Ecuador, is a country in northwestern South America, bordered by Colombia on the north, Peru on the east and south, and the Pacific Ocean on the west. It also includes the Galápagos Province which contains the Galápagos Islands in the Pacific, about 1,000 kilometers (540 nmi; 620 mi) west of the mainland. The country's capital is Quito, and the largest city is G\n[…]\nEcuador is bigger than the South America countries Uruguay, Suriname, Guyana and French Guiana.\n[…]\nIn recent years, Ecuador has grown in popularity among North American expatriates.\n[…]\nEarly literature in colonial Ecuador, as in the rest of Spanish America, was influenced by the Spanish Golden Age. One of the earliest examples is Jacinto Collahuazo, an Amerindian chief of a northern village in today's Ibarra, born in the late 1600s. Despite the early repression and discrimination of the native people by the Spanish, Collahuazo learned to read and write in Castilian, but his work was written in Quechua.\n[…]\nThe most popular sport in Ecuador, as in most South American countries, is football. Its best known professional teams include; Emelec from Guayaquil, Liga De Quito from Quito; Barcelona S.C. from Guayaquil, Independiente del Valle from Sangolqui, the most popular team in Ecuador, also the team with most local championships; Deportivo Quito, and El Nacional from Quito; Olmedo from Riobamba; and Deportivo Cuenca from Cuenca.\n[…]\nCurrently the most successful football team in Ecuador is LDU Quito, and it is the only Ecuadorian team that has won the Copa Libertadores; they were also runners-up in the 2008 FIFA Club World Cup. The Estadio Monumental Isidro Romero Carbo is the tenth largest football stadium in South America. The Ecuador national football team has appeared at five FIFA World Cups.\n[…]\nOutline of Ecuador\n[…]\nWikimedia Atlas of Ecuador\n[…]\nGeographic data related to Ecuador at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sucre_%28moeda%29",
        "situacao": "ok",
        "texto": "O Sucre foi a moeda corrente do Equador entre 1884 e 2000. Foi substituída pelo dólar americano para tentar acabar com a inflação no país, que havia chegado em 60,7% no ano anterior. Apesar da queda da inflação, a dolarização deixa os produtos de exportação do país pouco competitivos no mercado internacional. Com isso os índices de crescimento tem sido cada vez menores. Além disso, a perda de capa\n[…]\nNotas históricas do Equador (em alemão) (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Hispaniola",
      "descricao": "Ilha do Caribe dividida entre o Haiti e a República Dominicana."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A ilha caribenha de Hispaniola é dividida entre a República Dominicana e qual outro país?",
    "resposta": "Haiti",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hispaniola"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hispaniola",
        "situacao": "ok",
        "texto": "Hispaniola is an island in the Greater Antilles of the Caribbean, located between Cuba and Puerto Rico. It is the most populous island in the West Indies and the second-largest by land area, after Cuba. Covering an area of 76,192-square-kilometre (29,418 sq mi), it is divided into two separate sovereign countries: the Spanish–speaking Dominican Republic (48,445 km2 (18,705 sq mi)) to the east and \n[…]\nIn 1844, the first Substantive Charter of the new country stated: \"The Spanish part of the island of Santo Domingo and its adjacent islands form the territory of the Dominican Republic.\"  Western Hispaniola remained as the country of Haiti with the official name of Empire of Haiti or Republic of Haiti.\n[…]\nFrance would never regain control of the island, and after some 12 years of Spanish dominion, the leaders in Santo Domingo revolted again, and eastern Hispaniola was declared independent as the Republic of Spanish Haiti in 1821. Fearing the influence of a society of slaves that had successfully revolted against their owners, the United States and European powers refused to recognize Haiti, the second republic in the Western Hemisphere.\n[…]\nThe Hispaniolan pine forests occupy the mountainous 15% of the island, above 850 metres (2,790 ft) elevation. The flooded grasslands and savannas ecoregion in the south central region of the island surrounds a chain of lakes and lagoons, the most notable of which are Etang Saumatre and Trou Caïman in Haiti and the nearby Lake Enriquillo in the Dominican Republic.\n[…]\nAccording to reports in the Dominican Republic and Haiti, the flora in this naturally protected area consists of 621 species of vascular plants, of which 153 are highly endemic to Hispaniola. The most prominent endemic species of flora that abound in the area are ebano verde (green ebony), Magnolia pallescens, a highly endangered hardwood.\n[…]\nDominican Republic–Haiti relations\n[…]\nGeology of Haiti"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ilha_de_S%C3%A3o_Domingos",
        "situacao": "ok",
        "texto": "Ilha de São Domingos, Hispaniola ou Espanhola (Santo Domingo ou La Española, em espanhol) é uma das maiores ilhas das Antilhas, localizada no mar das Caraíbas a sudeste de Cuba e oeste de Porto Rico.\n[…]\nSão Domingos é a segunda maior ilha do Caribe depois de Cuba, com uma superfície de cerca de 76 000 km², comprimento de 650 km e largura máxima de 241 km. Politicamente, divide-se entre dois países: a República Dominicana, a leste, e o Haiti, que ocupa o terço ocidental da ilha. A ilha está separada de Cuba pelo canal de Barlavento e da Jamaica pelo canal da Jamaica.\n[…]\nApós a independência do Haiti, tudo se inverteu, e assim o Haiti se tornou um dos países mais pobres da América e a República Dominicana se tornou a maior economia da América Central e do Caribe\n[…]\nA ilha de São Domingos ou La Española é a segunda maior ilha do Caribe (depois de Cuba), com uma área de 76 480 km² (29 530 mi2). A ilha tem cinco grandes cadeias de montanhas: a Cordilheira Central, que abrange a parte central da ilha, que se estende desde a costa sul da República Dominicana, no noroeste do Haiti, aonde ele é conhecido como o Maciço do Norte. Esta cordilheira tem o pico mais alto das Antilhas, Pico Duarte, que é 3 087 memros (10 128 ft) acima do nível do mar.\n[…]\nA ilha de São Domingos é caracterizada pela dualidade política, cultural e econômica. Politicamente, a ilha está dividida em dois Estados: A República Dominicana, que ocupa a maior parte da ilha e é o herdeiro da província espanhola de São Domingos (Santo Domingo); e a República do Haiti ocupa o terço ocidental da ilha, herdeiro da província francesa de São Domingos (Saint-Domingue).\n[…]\nMapa das Ilhas Hispaniola e Porto Rico a partir de 1639",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Reino Unido",
      "descricao": "País da Europa Ocidental formado por Inglaterra, Escócia, País de Gales e Irlanda do Norte, com capital em Londres."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "O Reino Unido reúne Inglaterra, Escócia, País de Gales e qual outra nação?",
    "resposta": "Irlanda do Norte",
    "fonte": [
      "https://en.wikipedia.org/wiki/Countries_of_the_United_Kingdom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Countries_of_the_United_Kingdom",
        "situacao": "ok",
        "texto": "Since 1922, the United Kingdom has been made up of four countries: England, Scotland, Wales (which collectively make up Great Britain) and Northern Ireland (variously described as a country, province, jurisdiction or region). The UK prime minister's website has used the phrase \"countries within a country\" to describe the United Kingdom.\n[…]\n\"United Kingdom\" means \"Great Britain and Northern Ireland.\" This definition applies from 12 April 1927.\n[…]\nIn the Scotland Act 1998, in section 126, states that Scotland includes \"so much of the internal waters and territorial sea of the United Kingdom as are adjacent to Scotland\".\n[…]\nEach of England, Northern Ireland, Scotland and Wales has separate national governing bodies for sports and competes separately in many international sporting competitions. Each country of the United Kingdom has a national football team and competes as a separate national team in the various disciplines in the Commonwealth Games.\n[…]\nAt the Olympic Games, the United Kingdom is represented by the Great Britain and Northern Ireland team, although athletes from Northern Ireland can choose to join the Republic of Ireland's Olympic team.\n[…]\nThe United Kingdom participates in the Eurovision Song Contest as a single entity, though there have been calls for separate Scottish and Welsh entrants. In 2017, Wales participated alone in the spin-off Eurovision Choir, followed by a separate entry for Scotland in 2019. Wales also participated alone in the Junior Eurovision Song Contest in 2018 and 2019.\n[…]\nHistory of the formation of the United Kingdom\n[…]\nList of current heads of government in the United Kingdom and dependencies\n[…]\nMembership of the countries of the United Kingdom in international organisations\n[…]\nUnited Ireland\n[…]\nGallagher, Michael (2006). The United Kingdom Today. London, England: Franklin Watts. ISBN 978-0-7496-6488-6."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADses_do_Reino_Unido",
        "situacao": "ok",
        "texto": "Países do Reino Unido é o termo usado para descrever Inglaterra, Irlanda do Norte, Escócia e País de Gales, que, juntos, formam o Reino Unido da Grã-Bretanha e Irlanda do Norte, que é um Estado soberano. Os termos alternativos \"nações constituintes\" e \"Home Nations\" também são utilizados, este último principalmente para fins esportivos.\n[…]\nApesar de \"país\" ser o termo descritivo mais comumente usado, devido à ausência de uma constituição britânica formal e a longa e complexa história da formação do Reino Unido, as nações constituintes britânicas não têm uma denominação oficial. Como consequência disto, Inglaterra, Irlanda do Norte, Escócia e País de Gales não são subdivisões formais do Reino Unido e vários termos são usados para descrevê-los.\n[…]\nComo um Estado soberano, o Reino Unido é a entidade que é usada em organizações intergovernamentais, como representante das Nações Unidas, bem como sob a lei internacional, visto que Inglaterra, Irlanda do Norte, Escócia e País de Gales não estão na lista de países da Organização Internacional para Padronização (ISO).\n[…]\nNo entanto, eles têm instituições nacionais separadas em muitos esportes, o que significa que eles podem participar individualmente de competições esportivas internacionais; em contextos esportivos, Inglaterra, Irlanda do Norte (ou toda a Irlanda), Escócia e País de Gales são referidos como Home Nations.\n[…]\nO parlamento e o governo do Reino Unido lidam com todos os temas relacionados à Irlanda do Norte e Escócia e todas as questões não-transferidas para o País de Gales, mas não interfere em temas que têm sido atribuídos à Assembleia da Irlanda do Norte, ao Parlamento escocês e à Assembleia galesa. A Inglaterra continua a ser da inteira responsabilidade do Parlamento do Reino Unido, que é centralizado em Londres.\n[…]\nReino Unido\n[…]\nSubdivisões do Reino Unido",
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
