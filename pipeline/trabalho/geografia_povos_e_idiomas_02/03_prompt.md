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
      "nome": "Língua guarani",
      "descricao": "Língua indígena da família tupi-guarani, oficial no Paraguai ao lado do espanhol."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que país sul-americano a língua indígena guarani é falada pela maioria da população e é oficial ao lado do espanhol?",
    "resposta": "Paraguai",
    "fonte": [
      "https://en.wikipedia.org/wiki/Guarani_language",
      "https://pt.wikipedia.org/wiki/Língua_guarani"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Guarani_language",
        "situacao": "ok",
        "texto": "Guarani (avañe'ẽ) is a Tupian language belonging to the Tupi–Guarani branch of South America. It is one of the two official languages of Paraguay (along with Spanish), where it is spoken by the majority of the population, and where half of the rural population are monolingual speakers of the language.\n[…]\nIn South America, the indigenous language that is most widely spoken amongst non-indigenous communities is Guaraní. South America is home to more than 280,000 Guaraní people, 51,000 of whom reside in Brazil. The Guaraní people inhabit regions in Brazil, Paraguay, Bolivia, as well as Argentina. There are more than four million speakers of Guaraní across these regions.\n[…]\nThe extensive research conducted as well as the expansive reach of the Guaraní language across Latin America has granted it an important position in the urban landscape. In other words, Guaraní's official status in Paraguay combined with research studies that have followed has allowed for recent projects of standardization.\n[…]\nWhile Guarani, in its Classical form, was the only language spoken in the expansive missionary territories, Paraguayan Guarani has its roots outside of the Jesuit Reductions.\n[…]\nJopara, a mixture of Spanish and Guarani, is spoken by an estimated 90% of the population of Paraguay. Code-switching between the two languages takes place on a spectrum in which more Spanish is used for official and business-related matters, and more Guarani is used in art and in everyday life.\n[…]\nGuarani Wikipedia\n[…]\nA Grammar of Paraguayan Guarani – by Bruno Estigarribia, UCL Press (open access, Creative Commons license)\n[…]\nGuaraní (Intercontinental Dictionary Series)\n[…]\n1990: Natalia Krivoshein de Canese, Feliciano Acosta Alcatraz, Ñe'ẽryru. diccionario guaraní-español (Paraguayan Guaraní: Ñe'eryru: avañe'e-karaiñe'e, karaiñe'e-avañe'e)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_guarani",
        "situacao": "ok",
        "texto": "O guarani (em guarani: avañe'ẽ ou guaraniñe'ẽ) é um idioma originalmente indígena do sul da América do Sul pertence à família tupi-guarani das línguas tupi. Possui 6,54 milhões de falantes, sendo estes majoritariamente de povos da etnia tupi-guarani na Argentina, na Bolívia, no Brasil e no Paraguai, onde é a segunda língua oficial (juntamente com o espanhol). No Paraguai, é falado pela maioria de \n[…]\nO guarani é uma das línguas americanas mais faladas e continua sendo comumente usada pelo povo paraguaio e por comunidades vizinhas. Isso é único entre as línguas americanas; a mudança de idioma para as línguas coloniais europeias (neste caso, a outra língua oficial, espanhol) tem sido um fenômeno quase universal no continente, mas os paraguaios mantiveram sua língua tradicional, adotando, simultaneamente, o espanhol.\n[…]\nAvañeʼẽ significa, literalmente, \"a língua do povo\", ou seja, a língua que o povo guarani fala.\n[…]\nO ensino do guarani é geralmente realizado no ambiente familiar, já que a maioria da população paraguaia fala guarani como primeiro idioma. Além disso, após a Constituição de 1992, o ensino do guarani passou a ser obrigatório nas escolas, devido ao caráter oficial adquirido pela língua.\n[…]\nA variante mais regional do sul e oeste, denominada \"guarani paraguaio\", mantém-se viva e é falada por mais de sete milhões de pessoas, notadamente no Paraguai. O guarani, dessa forma, tornou-se uma das únicas línguas indígenas americanas a obter um reconhecimento nacional e literário e a ser falada por um número significativo de não indígenas.\n[…]\nNo Paraguai, a língua guarani foi mantida principalmente porque os padres jesuítas a usaram como instrumento de conversão religiosa numa empreitada colonizadora desvinculada das potências católicas ibéricas. Efemeramente, os jesuítas mantiveram um estado indígena cristão: as chamadas missões (ou reduções) jesuíticas.\n[…]\n«Sobre a língua guarani»"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Língua catalã",
      "descricao": "Língua românica falada na Catalunha, em Valência, nas Ilhas Baleares e em Andorra."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Na Espanha, o catalão divide espaço com o castelhano. Em que pequeno principado dos Pireneus ele é a única língua oficial?",
    "resposta": "Andorra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Catalan_language",
      "https://en.wikipedia.org/wiki/Andorra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Catalan_language",
        "situacao": "ok",
        "texto": "Catalan (català) is a Western Romance language that is native to the eastern Iberian Peninsula. It shares official status with Spanish in three autonomous communities in eastern Spain – Catalonia; the Balearic Islands; and the Valencian Community, where it is called Valencian (valencià) – and is the sole official language of Andorra.\n[…]\nWith the Treaty of the Pyrenees (1659), Spain ceded the northern part of the Principality of Catalonia to France, and soon thereafter the local Catalan varieties came under the influence of French, which in 1700 became the sole official language of the region.\n[…]\nIn Andorra, Catalan has always been the sole official language. Since the promulgation of the 1993 constitution, several policies favoring Catalan have been enforced, such as Catalan medium education.\n[…]\nAn important social characteristic of the Catalan language is that all the areas where it is spoken are bilingual in practice: together with French in Roussillon, with Italian in Alghero, with Spanish and French in Andorra, and with Spanish in the rest of the territories.\n[…]\nDialects of Catalan\n[…]\nIn 1932, Valencian writers and intellectuals gathered in Castelló de la Plana to make a formal adoption of the so-called Normes de Castelló, a set of guidelines following Pompeu Fabra's Catalan language norms.\n[…]\nCatalan verbs are traditionally divided into three conjugations, with vowel themes -a-, -e-, -i-, the last two being split into two subtypes. However, this division is mostly theoretical. Only the first conjugation is nowadays productive (with about 3500 common verbs), whereas the third (the subtype of servir, with about 700 common verbs) is semiproductive. The verbs of the second conjugation are fewer than 100, and it is not possible to create new ones, except by compounding.\n[…]\nCatalan-language online encyclopedia\n[…]\nEnciclopèdia Catalana"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Andorra",
        "situacao": "ok",
        "texto": "Andorra, officially the Principality of Andorra, is a landlocked country on the Iberian Peninsula, in the eastern Pyrenees in southwestern Europe, bordered by France to the north and Spain to the south. Believed to have been created by Charlemagne, Andorra was ruled by the count of Urgell until 988, when it was transferred to the Diocese of Urgell. Andorra was formed as a polity by a charter in 12\n[…]\nAfter the French Revolution, Napoleon I reestablished the Co-Principate in 1809 and removed the French medieval title. In 1812–1813, the First French Empire attempted to annex Catalonia during the Peninsular War (Guerra Peninsular) and divided the region into four departements, with Andorra as a part of the district of Puigcerdà. After the French defeat in the Peninsular War in 1814, an imperial decree reestablished the independence and economy of Andorra.\n[…]\nAs one of the Catalan Countries, Andorra is home to a team of castellers, or Catalan human tower builders. The Castellers d'Andorra, based in the town of Santa Coloma d'Andorra, are recognised by the Coordinadora de Colles Castelleres de Catalunya, the governing body of castells.\n[…]\nArmengol Aleix, E. (2009). Andorra: un profund i llarg viatge (in Catalan). Andorra: Government of Andorra. ISBN 978-99920-0-549-1.\n[…]\nGuillamet Anton, J. (2009). Andorra: nova aproximació a la història d'Andorra (in Catalan). Andorra: Revista Altaïr. ISBN 978-84-936220-4-6.\n[…]\nPeruga Guerrero, J. (1998). La crisi de la societat tradicional (S. XIX) (in Catalan). Andorra: Segona Ensenyança. ISBN 978-99920-0-186-8.\n[…]\nButler, Graham (2025). \"The Legal Relations of the European Union with the Principality of Andorra\". European Foreign Affairs Review. 30 (4): 527–552. doi:10.54648/EERR2025035.\n[…]\nGovernment of Andorra – official website (in Catalan)\n[…]\nAndorraUE – official Andorra–EU website (in Catalan)\n[…]\nVisit Andorra – official tourism website\n[…]\nWikimedia Atlas of Andorra"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_catal%C3%A3",
        "situacao": "ok",
        "texto": "O catalão é uma língua românica derivada do latim vulgar falado pelos romanos na Idade Antiga. Distribuído por uma superfície de 68 730 km², os seus 10 milhões de falantes distribuem-se por toda a vertente oriental da Península Ibérica, Ilhas Baleares e na cidade de Algueiro (na Sardenha).\n[…]\nDurante o século XVI, a maior parte da elite valenciana mudou de língua para o castelhano, como pode ser visto pela quantidade de livros impressos na cidade de Valência: no início do século, o latim e o catalão (ou valenciano) eram as principais línguas da imprensa, mas no final do século a língua de Castela era o principal idioma da imprensa. As regiões rurais e a classe trabalhadora urbana, no entanto, ainda continuaram a falar sua língua vernacular.\n[…]\nRasgos específicos e exclusivos à língua catalã:\n[…]\nQuanto à influência catalã noutras línguas, temos o subdialeto dos dialetos meridionais do espanhol Ibérico, o Murciano. Este dialeto é falado na comunidade autónoma de Múrcia, que partilha alguns traços fonéticos com o catalão, salientando a conservação esporádica de surdas intervocálicas (acachar, pescatero)  e a manutenção do grupo -ns- (ansa e panso (cast.: asa e paso)).\n[…]\n«Secção filológica do Instituto de Estudos Catalães, instituição académica da língua catalã»  (em catalão, espanhol e inglês)\n[…]\nLlengua i societat als territoris de parla catalana a l'inici del segle XXI. L'Alguer, Andorra, Catalunya, Catalunya Nord, la Franja, Illes Balears, i Comunitat Valenciana. Análise conjunta das sondagens sociolinguísticas feitas em todos os territórios de fala catalã no mesmo perídodo (2003-2004), com um questionário e metodologia semelhantes. PDF de 227 páginas.\n[…]\n«Consorci per a la Normalització Lingüística»  (em catalão, espanhol, francês e inglês)\n[…]\nDiccionari de l'Enciclopèdia Catalana",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Língua italiana",
      "descricao": "Língua românica oficial da Itália, de San Marino e de parte da Suíça."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O italiano padrão nasceu do falar usado por Dante, Petrarca e Boccaccio. De qual região da Itália vem esse falar?",
    "resposta": "Toscana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Italian_language",
      "https://pt.wikipedia.org/wiki/Língua_italiana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Italian_language",
        "situacao": "ok",
        "texto": "Italian (italiano, pronounced [itaˈljaːno] , or lingua italiana, [ˈliŋɡwa itaˈljaːna] ) is a Romance language of the Indo-European language family. It is a standardised form of literary Florentine Tuscan and, together with Sardinian, is the least differentiated language from Latin. Current estimates indicate that between 68 and 85 million people speak Italian, including approximately 64 million na\n[…]\nItalian is the main working language of the Holy See, serving as the lingua franca in the Roman Catholic hierarchy and the official language of the Sovereign Military Order of Malta. Italian influence led to the development of derivated languages and dialects worldwide.\n[…]\nThe language that came to be thought of as Italian developed in central Tuscany and was first formalized in the early 14th century through the works of Tuscan writer Dante Alighieri, written in his native Florentine. Dante's epic poems, known collectively as the Commedia, to which another Tuscan poet Giovanni Boccaccio later affixed the title Divina, were read throughout the Italian peninsula.\n[…]\nThe rediscovery of Dante's De vulgari eloquentia, and a renewed interest in linguistics in the 16th century, sparked a debate that raged throughout Italy concerning the criteria that should govern the establishment of a modern Italian literary and spoken language. This discussion, known as questione della lingua (i.e., the problem of the language), ran through the Italian culture until the end of the 19th century, often linked to the political debate on achieving a united Italian state.\n[…]\nOf special interest to the linguistic study of Regional Italian is the gorgia toscana, or \"Tuscan throat\", the weakening or lenition of intervocalic /p/, /t/, and /k/ in the Tuscan language.\n[…]\nSalvatore Battaglia (1961–2002). \"Grande dizionario della lingua italiana. Prototipo edizione digitale\". UTET.\n[…]\n\"Learn Italian\", BBC\n[…]\nXeno Italia"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_italiana",
        "situacao": "ok",
        "texto": "O italiano (italiano) é uma língua românica, descendente direta do latim, sendo a mais próxima do latim entre as línguas nacionais e a segunda, atrás do sardo, quando as línguas regionais também são levados em conta. É a língua oficial de quatro países - Itália, Suíça, San Marino e Vaticano -, e usada como língua co-oficial em partes da Albânia, Eslovênia, Croácia e Mônaco.\n[…]\nA língua que veio a ser pensada como italiana se desenvolveu na Toscana  central e foi formalizada pela primeira vez no início do século XIV através das obras do escritor toscano Dante Alighieri, escritas em seu dialeto florentino natal.\n[…]\nOs poemas épicos de Dante, conhecidos coletivamente como Commedia, aos quais outro poeta toscano Giovanni Boccaccio mais tarde afixou o título Divina, foram lidos em toda a península e seu dialeto escrito tornou-se o \"padrão canônico\" que todos os italianos educados podiam entender. Dante ainda é creditado com a padronização da língua italiana.\n[…]\nO italiano padronizado, usado hoje na Itália, é descendente dos dialetos da Toscânia, especialmente aquele falado em Florença, um dos mais importantes centros culturais da Itália. Este dialeto ganhou prestígio sobretudo após ser usado por Dante Alighieri, o maior escritor italiano. Desta forma, o atual italiano padrão só era falado na região da Toscânia. Com a unificação italiana, o dialeto de Florença foi escolhido como língua oficial da Itália.[carece de fontes]?\n[…]\nA maior parte da variedade de línguas românicas da Itália é anterior ao italiano e evoluiu localmente do latim vulgar, independentemente do que se tornaria a língua nacional padrão, muito antes da propagação relativamente recente do italiano padrão em toda a Itália. De fato, o próprio italiano padrão pode ser pensado como uma continuação ou um dialeto fortemente baseado no dialeto florentino do toscano.\n[…]\nLínguas românicas"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Curdos",
      "descricao": "Povo iraniano do Oriente Médio, cujo território tradicional, o Curdistão, se divide entre vários países."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O território tradicional dos curdos, sem Estado próprio, se divide entre Turquia, Iraque, Irã e qual outro país?",
    "resposta": "Síria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kurds",
      "https://en.wikipedia.org/wiki/Kurdistan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kurds",
        "situacao": "ok",
        "texto": "Kurds (Kurdish: کورد, romanized: Kurd), or the Kurdish people, are an Iranic ethnic group from West Asia. They are indigenous to Kurdistan, which is a geographic region spanning southeastern Turkey, northwestern Iran, northern Iraq, and northeastern Syria.\n[…]\nFrom 1922 to 1924 in Iraq a Kingdom of Kurdistan existed. When Ba'athist administrators thwarted Kurdish nationalist ambitions in Iraq, war broke out in the 1960s. In 1970, the Kurds rejected limited territorial self-rule within Iraq, demanding larger areas, including the oil-rich Kirkuk region.\n[…]\nToday, the Kurds inhabit mostly northwestern territories known as Iranian Kurdistan but also the northeastern region of Khorasan, and constitute approximately 7–10% of Iran's overall population (6.5–7.9 million), compared to 10.6% (2 million) in 1956 and 8% (800,000) in 1850.\n[…]\nGovernment forces and non-Kurds were not the only ones to suffer in the attacks, the Kurdish population was also robbed and assaulted. Rebels do not appear to have felt any sense of unity or solidarity with fellow Kurds. Kurdish insurgency and seasonal migrations in the late 1920s, along with long-running tensions between Tehran and Ankara, resulted in border clashes and even military penetrations in both Iranian and Turkish territory.\n[…]\nAs a response to growing Pan-Turkism and Pan-Arabism in region which were seen as potential threats to the territorial integrity of Iran, Pan-Iranist ideology has been developed in the early 1920s. Some of such groups and journals openly advocated Iranian support to the Kurdish rebellion against Turkey. The secular Pahlavi dynasty endorsed Iranian ethnic nationalism which saw the Kurds as an integral part of the Iranian nation.\n[…]\nThe Kurds in the Ottoman Hungary by Zurab Aloian"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kurdistan",
        "situacao": "ok",
        "texto": "Kurdistan (Kurdish: کوردستان, lit. 'land of the Kurds'; [ˌkʊɾdɪˈstɑːn] ), or Greater Kurdistan, is a roughly defined geo-cultural region and stateless nation in West Asia wherein the Kurds form a prominent majority population and the Kurdish culture, languages, and national identity have historically been based. Geographically, Kurdistan roughly encompasses the northwestern Zagros and the eastern \n[…]\nAt the San Francisco Peace Conference of 1945, the Kurdish delegation proposed consideration of territory claimed by the Kurds, which encompassed an area extending from the Mediterranean shores near Adana to the shores of the Persian Gulf near Bushehr, and included the Lur inhabited areas of southern Zagros.\n[…]\nA month later, Iraq declared full victory over ISIS and re-established control over all previously occupied territory. Following the Kurds' failed attempt to achieve independence, the government of Iraq has exacted severe punishment against KRI in a number of punitive measures. In 2017, the Israeli government openly voiced support for the establishment of an independent Kurdish state in Iraq following the unilateral independence referendum.\n[…]\nAccording to 2016 estimate Kurdish Institute of Paris, total population of Kurdistan is around 34.5 million, and Kurds making 86% of population of Northern Kurdistan. There are Arab, Turkic, Assyrian (Syriac), Armenian and Azerbaijani minorities in Northern Kurdistan. In Southern Kurdistan, there are Christian (Assyrian and Armenian) and Turkish (Turkmen) minorities as well.\n[…]\nA Modern History of the Kurds by David McDowall\n[…]\nReed, Fred A. Anatolia Junction: a Journey into Hidden Turkey. Burnaby, B.C.: Talonbooks [sic], 1999. 320 p., ill. with b&w photos. N.B.: Includes a significant coverage of the Turkish sector of historic Kurdistan, the Kurds, and their resistance movement. ISBN 0-88922-426-9"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Curdos",
        "situacao": "ok",
        "texto": "Os curdos (em curdo: Kurd; em turco: Kürtler), ou povo curdo (em curdo: Gelê Kurd), são um grupo étnico do Médio Oriente com cerca de trinta milhões de indivíduos no mundo; a maioria, cerca de 14 milhões (as estimativas variam), vive no leste da Turquia, numa região frequentemente referida como Curdistão turco. Os demais, cerca de 16 milhões, vivem no Iraque e em partes da Síria e do Irã.\n[…]\nDe acordo com o CIA Factbook, os curdos compreendem 20% da população da Turquia, de 15 a 20% no Iraque, possivelmente 8% na Síria, 7% no Irã e 1,3% na Armênia. Em todos estes países, com exceção do Irã, os curdos são o segundo maior grupo étnico.\n[…]\nAproximadamente 55% dos curdos no mundo vivem na Turquia, 20% no Irã, 20% no Iraque e um pouco menos de 5% na Síria. Estas estimativas estabelecem o número total de curdos entre 27 e 36 milhões.\n[…]\nEram descritos como sendo o mesmo povo apenas diferindo no nome tribal.\n[…]\nApós a Primeira Guerra Mundial, com o desmembramento do Império Otomano, o Tratado de Sèvres delimitou as fronteiras para um Curdistão autônomo, mas foi rejeitado pelos turcos. Em 1923, com o Tratado de Lausanne, parte do Curdistão foi integrada ao Iraque e à Síria, enquanto outras permaneceram para a Turquia e o Irã. Assim, a partir de 1925, a terra dos curdos, conhecida desde o século XII como Curdistão, vê-se dividida entre quatro países.\n[…]\nOs curdos são cerca de 15% da população da Síria, o que corresponde a cerca de 1,9 milhão de pessoas. Isto faz deles a maior minoria étnica no país. Eles estão majoritariamente concentrados no nordeste e no norte, mas há também populações curdas significativas em Alepo e Damasco. Eles falam com frequência curdo em público, a menos que todos os presentes não o façam. Os ativistas de direitos humanos curdos são maltratados e perseguidos.\n[…]\nNenhum partido político é permitido a qualquer grupo, curdo ou não.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Sámis",
      "descricao": "Povo indígena do norte da Escandinávia e da península de Kola, tradicionalmente criador de renas."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A terra dos sámis, povo criador de renas, se estende pela Noruega, pela Suécia, pela Finlândia e por qual outro país?",
    "resposta": "Rússia",
    "distratores": [
      "Dinamarca",
      "Islândia",
      "Estônia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sámi_people",
      "https://en.wikipedia.org/wiki/Sápmi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sámi_people",
        "situacao": "ok",
        "texto": "The Sámi (US:  SAH-mee, UK: also  SAM-ee; also spelled Sami or Saami) are the traditionally Sámi-speaking indigenous people inhabiting the region of Sápmi. Formerly known as Lapland, Sápmi encompasses large northern parts of Norway, Sweden, and Finland, and of the Kola Peninsula in Russia. Historically, the Sámi have been known in English as Lapps or Laplanders; however, these terms are exonyms, r\n[…]\nMany Sámi people continued to practice their ancestral religion up until the 18th century. Today, most Sámi belong to the state-run Lutheran churches of Norway, Sweden and Finland. Some Sámi in Russia belong to the Russian Orthodox Church. Similarly, some Skolt Sámi whose ancestors resettled in Finland, as well as an additional small population in Norway., are part of Eastern Orthodox congregations.\n[…]\nSápmi is located in Northern Europe, includes the northern parts of Fennoscandia, and spans four countries: Norway, Sweden, Finland, and Russia. Non-Sámi and many regional maps have often called this same region Lapland, since there is considerable regional overlap between Sápmi and the provinces of Lappland in Sweden and Lapland in Finland. However, much of Sápmi falls outside of those provinces.\n[…]\nThe following municipalities have significant Sámi populations or host Sámi institutions (Norwegian, Swedish, Finnish, or Russian name in parentheses):\n[…]\nRoughly half of all Sámi live in Norway, but many live in Sweden, with smaller groups living in the far north of Finland and in the Kola Peninsula of Russia. The Sámi in Russia were forced by Soviet authorities to relocate to a collective called Lovozero/Lujávri in the central part of the Kola Peninsula.\n[…]\nEastern Sápmi (Inari, Skolt, Akkala, Kildin, and Teri Sámi in the Kola Peninsula, Russia) and Inari (Finland, formerly also in eastern Norway)\n[…]\nAccording to the 2010 All-Russia Census, the Sámi population of Russia was 1,771.\n[…]\nReindeer in Russia"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sápmi",
        "situacao": "ok",
        "texto": "Sápmi  is the cultural region traditionally inhabited by the Sámi people. Sápmi includes the northern parts of Fennoscandia, stretching over four countries: Norway, Sweden, Finland, and Russia. Most of Sápmi lies north of the Arctic Circle, bounded by the Barents Sea, Norwegian Sea, and White Sea. In the south, Sápmi extends to the counties of Trøndelag in Norway and Jämtland in Sweden.\n[…]\nInari Sami: Säämi\n[…]\nThe Sami are a small minority in the Russian part of Sápmi.\n[…]\nThe Conference decided to demand the formation of a Russian Sámi Parliament, to be elected by the local Sámi. A suggestion to have the Russian Federation pick representatives for the Parliament was voted down with a clear majority. The Congress also chose a Council of Representatives that was to work for the establishment of a parliament and otherwise represent the Russian Sámi. It is headed by Valentina Sovkina.\n[…]\nOn 2 March 2000, the Sámi parliaments of Norway and Finland founded the Sámi Parliamentary Council, and the Sámi Parliament of Sweden joined two years later. Each parliament sends seven representatives, and observers are sent from the Sámi organisations of Russia and the Sámi Council. The Sámi Parliamentary Council discuss cross-border cooperation, hands out the annual Gollegiella language development award, and represents the Sámi people abroad.\n[…]\nMurmansk Oblast covers the Kola Peninsula and is home to Murmansk, the largest city north of the Arctic Circle and in the Sápmi. It is subdivided into several districts, of which the geographically largest is Lovozersky District. This is also part of Russia where the Sami population is most numerous and visible.\n[…]\nThe following towns and villages have a significant Sami population or host Sami institutions. Norwegian, Swedish, Finnish, or Russian toponyms are in parentheses.\n[…]\nLujávri (Lovozero) is the largest settlement of Sami on the Russian side."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lap%C3%B5es",
        "situacao": "ok",
        "texto": "O povo lapão, conhecido atualmente como povo Sámi (em sámi do Norte: sápmelaš,  PRONÚNCIA; em finlandês: saamelainen; em sueco e norueguês: same; em russo: саамы) - constitui o grupo étnico nativo da Lapónia, ou Lapônia, (Sápmi; literalmente: \"Terra dos Sámi\"), um território abrangendo partes das regiões setentrionais da Noruega, Suécia, Finlândia e da península de Kola, na Rússia.\n[…]\nOs sâmis são um dos maiores povos indígenas da Europa, totalizando cerca de 70,000 pessoas, das quais 17,000 vivem na Suécia, 35,000 na Noruega, 5,700 na Finlândia e 2,000 na Rússia.\n[…]\nOs vestígios mais antigos da presença humana na \"Terra dos Lapões\" (Sápmi) datam de 9 000 a.C.\n[…]\nSabemos hoje, que homens portadores do cromossoma Y do grupo N1c, com a mutação N1c-L026, parecem ter chegado à Finlândia, vindos do Sul dos Montes Urais, na Rússia, há cerca de 4 000 anos. Aproximadamente mil anos mais tarde, começaram a migrar para o norte da Escandinávia. Então encontraram e misturaram-se com homens noruegueses, suecos e finlandeses portadores do cromossoma Y dos grupos I1, R1a e R1b.\n[…]\nIsto é, os pais ancestrais dos atuais lapões chegaram à Lapónia, vindos de várias regiões – do Sul da Finlândia, do centro da Suécia e do Leste da Noruega. Num estudo de 2004, sobre o cromossoma Y de 127 homens lapões, 47% pertenciam ao grupo N1c, 26% ao grupo I1, 11% ao grupo R1a e 4% ao grupo R1b. Por outras palavras, os lapões não são, do ponto de vista genético, fundamentalmente diferentes dos outros escandinavos.\n[…]\nHoje em dia, os Lapões são considerados juridicamente um povo indígena da Suécia, Noruega e Finlândia. A Convenção sobre os Povos Indígenas e Tribais de 1989 foi assinada  pela Noruega, mas não pela Finlândia nem pela Suécia.\n[…]\nSami, o povo indígena da Noruega: língua oficial, Parlamento e muito mais\n[…]\nA recent genetic link between Sami and the Volga-Ural region of Russia, Ingman 2006",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Masais",
      "descricao": "Povo nilótico de pastores seminômades da África Oriental, conhecido pelas vestes vermelhas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Os masais, pastores conhecidos pelas vestes vermelhas, vivem no Quênia e em qual outro país africano?",
    "resposta": "Tanzânia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Maasai_people",
      "https://www.britannica.com/topic/Maasai"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maasai_people",
        "situacao": "ok",
        "texto": "The Maasai () are an Eastern Nilotic ethnic group native to northern, central and southern regions of Kenya including northern Tanzania, near the African Great Lakes region. Their native language is Maa, a Nilotic language related to Dinka, Kalenjin and Nuer, a branch within the broader Nilo-Saharan language family. Except for some elders living in rural areas, most Maasai people speak the officia\n[…]\nMaasai are pastoralists and have resisted the urging of the Tanzanian and Kenyan governments to adopt a more sedentary lifestyle. They have demanded grazing rights to many of the national parks in both countries.\n[…]\nA 2019 archaeogenetic study sampled ancient remains from Neolithic inhabitants of Tanzania and Kenya, and found them to have strongest affinities with modern Horn of Africa groups. They modelled the Maasai community as having ancestry that is ~47% Pastoral Neolithic Cushitic-related and ~53% Sudanese Dinka-related.\n[…]\nThe Maasai community was reportedly being targeted with live ammunition and tear gas in June 2022 in Tanzania, in a government plan to seize a piece of Maasai land for elite private luxury development.\n[…]\nAs of 18 June 2022, approximately 30 Maasai people had been injured and at least one killed, at the hands of the Tanzanian government Field Force Unit (FFU) while protesting the government's plans of what it claims are delimiting a 1500 sq km of land as a game reserve, an act which violates a 2018 East African Court of Justice (EACJ) injunction on the land dispute, per local activists.\n[…]\nJosephine Lemoyan – social scientist, Tanzanian member of the 2017-2022 East African Legislative Assembly\n[…]\nNice Nailantei Lengete – First woman to address the Maasai elders council at Mount Kilimanjaro, and persuaded the council to ban female genital mutilation among the Maasai across Kenya and Tanzania\n[…]\nAfrican People Ethnography | Maasai\n[…]\nMaasai Trust\n[…]\nMaasai Mara Tribe Facts"
      },
      {
        "url": "https://www.britannica.com/topic/Maasai",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Massais",
        "situacao": "ok",
        "texto": "Os massais são um grupo étnico africano de seminômades que vive no Quênia e no norte da Tanzânia com uma população total de 841 622 (dados de 2009). É geralmente aceito que seus ancestrais migraram do sul da área de fronteira entre Etiópia e Quênia ao longo do Vale do Rift, gradualmente se espalhando para as planícies circundantes no centro e sul do Quênia moderno e norte e centro da Tanzânia.\n[…]\nNo início do domínio colonial britânico no Quênia, os Maasai que viviam no norte e centro do Vale do Rift foram realocados para o sul do país, moldando as atuais áreas de habitação Maasai. Durante a colonização e o período pós-colonial, os Maasai perderam terras para colonos europeus, parques de vida selvagem e a colonização agrícola africana. Eles foram confinados em \"reservas nativas\" e seu movimento foi severamente restringido.\n[…]\nDevido aos seus costumes distintos e residência próxima aos parques de caça da África oriental, eles se situam entre os grupos étnicos africanos mais bem conhecidos internacionalmente. Os massai preservam muitas de suas tradições culturais enquanto se engajam nas forças econômicas, sociais e políticas contemporâneas regionais e globais. Seu idioma é o maa.\n[…]\nEm 1994, a população massai no Quênia estava estimada em 453 000 e em 1993, a população massai da Tanzânia estava estimada em 430 000, perfazendo uma estimativa de população massai total de 883 000. As estimativas das populações Massai em ambos os países é complicada devido sua natureza nômade e a eles serem o único grupo étnico autorizado a viajar livremente pelas fronteiras entre o Quênia e a Tanzânia.\n[…]\nO estilo de vida tradicional massai se concentra em seu gado, que constitui sua principal fonte de alimento. Os governos da Tanzânia e do Quênia instituíram programas para encorajar os massai a abandonarem seu estilo de vida nômade tradicional e adotar um estilo de vida agrário.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Língua iorubá",
      "descricao": "Língua nígero-congolesa da África Ocidental, presente nos cultos afro-brasileiros como o candomblé."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "A língua iorubá, presente nos cantos do candomblé, é falada principalmente em qual país da África Ocidental?",
    "resposta": "Nigéria",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yoruba_language",
      "https://pt.wikipedia.org/wiki/Língua_iorubá"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yoruba_language",
        "situacao": "ok",
        "texto": "Yoruba (;  Yor. Èdè Yorùbá [èdè jōɾùbá]) is an Atlantic–Congo language that is spoken in West Africa, primarily in South West Nigeria, Benin, and parts of Togo. It is spoken by the Yoruba people. Yoruba speakers number roughly 50 million, including around 2 million second-language or L2 speakers. As a pluricentric language, it is primarily spoken in a dialectal area spanning Nigeria, Benin, and To\n[…]\nAs the principal Yoruboid language, Yoruba is most closely related to Itsekiri (spoken in the Niger Delta) and Igala (spoken in central Nigeria).\n[…]\nThe linguistic unity of the Niger–Congo family dates to deep pre-history, with estimates ranging around 11,000 years ago (the end of the Upper Paleolithic). In present-day Nigeria, it is estimated that there are around 50 million Yoruba primary and secondary language speakers, as well as several other millions of speakers outside Nigeria, making it the most widely spoken African language outside of the continent.\n[…]\nLike many other languages of the region, Yoruba has the voiceless and voiced labial–velar stops /k͡p/ and /ɡ͡b/: pápá [k͡pák͡pá] 'field', gbogbo [ɡ͡bōɡ͡bō] 'all'. Notably, in Nigeria it lacks a voiceless bilabial stop /p/, apart from phonaesthesia, such as [pĩpĩ] for vehicle horn sounds, and marginal segments found in recent loanwords, such as <pẹ́ńsù> [k͡pɛ́ńsù~pɛ́ńsù] for \"pencil\".\n[…]\nSakara, a Yoruba song originating from Abeokuta, Ogun, Nigeria. One of the first performers of this type of music was in Lagos in the 1930s.\n[…]\nApala, (or Akpala) is a percussion-based music genre originally developed by the Yoruba people of Nigeria during the country's history as a colony of the British Empire. It originated in the late 1970s.\n[…]\nJùjú is a style of Nigerian popular music derived from traditional Yoruba percussion.\n[…]\nPan-African Localization page for Yoruba\n[…]\nJournal of West African Languages: Yoruba\n[…]\nA Vocabulary of the Yoruba Language"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_iorubá",
        "situacao": "ok",
        "texto": "Iorubá ou ioruba (èdè Yorùbá), por vezes referida como yorubá ou yoruba é um idioma da família linguística nígero-congolesa falado secularmente pelos iorubás em diversos países ao sul do Saara, principalmente na Nigéria e por minorias em Benim, Togo e Serra Leoa, dentro de um contínuo cultural-linguístico composto por 50 milhões de falantes. No continente americano, o iorubá é usado em ritos relig\n[…]\nA partir da localização dos falantes do iorubá existentes na Nigéria, é natural supor que a língua se originou da população iorubá local. Porém, existem várias versões da origem do iorubá.\n[…]\nApesar de não ser língua oficial de nenhum país, é uma das principais línguas da Nigéria (principalmente em seu sudoeste) e é falada em alguns países da costa da África Ocidental: Benim, Togo e Serra Leoa. Com uma participação de cerca de 21% da população, é bem comum na Nigéria. É estimado que 44,4 milhões de pessoas em todo o mundo falam iorubá como língua materna ou secundária.\n[…]\nO idioma oficial da Nigéria é o inglês. No entanto, muitas pessoas também falam outros idiomas, os principais deles sendo o ibo e o hauçá. O inglês funciona mais como língua franca no país, e possui características próprias bem distintas. Portanto, falantes de iorubá da Nigéria muitas vezes utilizam curtas expressões em inglês, intercaladamente, em suas conversações no idioma materno.\n[…]\nO iorubá apresenta dois alfabetos latinos usados ​​para escrever a língua, um da Nigéria e outro de Benin. O alfabeto iorubá nigeriano é composto de 25 letras, sem /c/, /q/, /v/,  /x/, /z/, mas com as adições de /ẹ/, ⟨ọ/, /ṣ/ e /gb/. A letra /p/ geralmente representa o som [k͜p], mas também pode representar [p] em situações restritas como onomatopeias. O alfabeto beninês tem os fones [Ɛ] e [Ɔ], e anteriormente tinha a letra /c/ — em sinalizações mais antigas, /c/ podia ser visto no lugar do sh.\n[…]\nNações do (Candomblé)\n[…]\nCandomblé Banto"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Ianomâmis",
      "descricao": "Povo indígena da floresta amazônica que vive no norte do Brasil e no sul da Venezuela."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "O território dos ianomâmis, na floresta amazônica, fica dividido entre o Brasil e qual país vizinho?",
    "resposta": "Venezuela",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yanomami",
      "https://www.britannica.com/topic/Yanomamo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yanomami",
        "situacao": "ok",
        "texto": "The Yanomami, also spelled Yąnomamö or Yanomama, are a group of approximately 35,000 Indigenous people who live in some 200–250 villages in the Amazon rainforest on the border between Venezuela and Brazil.\n[…]\nHowever, while the constitution of Venezuela recognizes indigenous peoples’ rights to their ancestral domains, few have received official title to their territories and the government has announced it will open up large parts of the Amazon rainforest to legal mining.\n[…]\nThe Haximu massacre, also known as the Yanomami massacre, was an armed conflict in 1993, just outside Haximu, Brazil, close to the border with Venezuela. A group of garimpeiros killed approximately 16 Yanomami. In turn, Yanomami warriors killed at least two garimpeiros and wounded two more.\n[…]\nIn July 2012, the government of Venezuela investigated another alleged massacre. According to Yanomami organizations, a village of 80 people was attacked by a helicopter and the only known survivors of the village were three men who happened to be out hunting while the attack occurred.\n[…]\nThe German-based non-governmental organization Yanomami-Hilfe e.V. is building medical stations and schools for the Yanomami in Venezuela and Brazil. Founder Rüdiger Nehberg crossed the Atlantic Ocean in 1987 in a Pedalo and, together with Christina Haverkamp, in 1992 on a self-made bamboo raft in order to draw attention to the continuing oppression of the Yanomami people.\n[…]\nCCPY launched an international campaign to publicize the destructive effects of the garimpeiro invasion and promoted a political movement to designate an area along the Brazil-Venezuela border as the Yanomami Indigenous Area. This campaign was ultimately successful."
      },
      {
        "url": "https://www.britannica.com/topic/Yanomamo",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ianom%C3%A2mis",
        "situacao": "ok",
        "texto": "Ianomâmis, yanomami, yanomam ou yanoama, entre outras denominações, são um grupo de aproximadamente 35 mil indígenas que vivem em cerca de 200 a 250 aldeias na Floresta Amazônica, na fronteira entre Venezuela e Brasil. Compõe-se de quatro subgrupos: Yanomae, Yanõmami, Sanima e Ninam. Cada subgrupo fala uma língua própria. Juntas, essas línguas compõem a família linguística ianomâmi.\n[…]\nA Reserva da Biosfera Alto Orinoco-Casiquiare foi criada em 1993 com o objetivo de preservar o território tradicional e o estilo de vida dos povos ianomâmi e iecuano. No entanto, embora a constituição da Venezuela reconheça os direitos dos povos indígenas aos seus domínios ancestrais, poucos receberam o título oficial de seus territórios e o governo anunciou que abrirá grandes partes da floresta amazônica para mineração legal.\n[…]\nO massacre de Haximu, também conhecido como massacre ianomâmi, foi um conflito armado em 1993, nos arredores de Haximu, no norte de Roraima, no Brasil, perto da fronteira com a Venezuela. Um grupo de garimpeiros matou aproximadamente 16 Yanomami. Por sua vez, os guerreiros Yanomami mataram pelo menos dois garimpeiros e feriram outros dois.\n[…]\nA organização não-governamental Yanomami-Hilfe e.V., com sede na Alemanha, está construindo postos médicos e escolas para os ianomâmis na Venezuela e no Brasil. O fundador Rüdiger Nehberg atravessou o Oceano Atlântico em 1987 em um pedalinho e em 1992, junto com Christina Haverkamp, em uma jangada de bambu feita por ele mesmo, a fim de chamar a atenção para a contínua opressão do povo ianomâmi.\n[…]\nOs ianomâmis baseados no Brasil formaram sua própria organização indígena Hutukara Associação Yanomami e o site que a acompanha.\n[…]\nE os índios da Venezuela e do Amazonas que, incluídos na reserva recém-criada, passaram a ser \"ianomâmis \", são dos grupos caribe e  aruaque, respectivamente.\n[…]\nPovos Indígenas no Brasil: Ianomâmis",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Alfabeto cirílico",
      "descricao": "Sistema de escrita usado no russo, búlgaro, sérvio e outras línguas, criado no Primeiro Império Búlgaro no século nove."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Hoje associado ao russo, o alfabeto cirílico foi criado no século nove no território de qual atual país europeu?",
    "resposta": "Bulgária",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cyrillic_script",
      "https://pt.wikipedia.org/wiki/Alfabeto_cirílico"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cyrillic_script",
        "situacao": "ok",
        "texto": "The Cyrillic script (  sih-RIL-ik) is a writing system used for various languages across Eurasia. It is the designated national script in various Slavic, Turkic, Mongolic, Uralic, Caucasian and Iranic-speaking countries in Southeastern Europe, Eastern Europe, the Caucasus, Central Asia, North Asia, and East Asia, and used by many other minority languages.\n[…]\nAs of 2019, around 250 million people in Eurasia use Cyrillic as the official script for their national languages, with Russia accounting for about half of them. With the accession of Bulgaria to the European Union in 2007, Cyrillic became the third official script of the European Union, following the Latin and Greek alphabets.\n[…]\nThe literature produced in Old Church Slavonic soon spread north from Bulgaria and became the lingua franca of the Balkans and Eastern Europe.\n[…]\nNotes: Depending on fonts available, the Bulgarian row may appear identical to the Russian row. Unicode approximations are used in the faux row to ensure it can be rendered properly across all systems; in some cases, such as ж with k-like ascender, no such approximation exists.\n[…]\nBulgarian\n[…]\nSee also Romanization of Belarusian, Bulgarian, Kyrgyz, Russian, Macedonian and Ukrainian.\n[…]\ntwo most frequent combinations orthographically required to distinguish homonyms in Bulgarian and Macedonian: Ѐ, Ѝ;\n[…]\nMIK – 8-bit native Bulgarian character encoding for use in MS-DOS.\n[…]\nWindows-1251 – 8-bit Cyrillic character encoding established by Microsoft for use in Windows. The simplest 8-bit Cyrillic encoding – 32 capital chars in native order at 0xc0–0xdf, 32 usual chars at 0xe0–0xff, with rarely used \"YO\" characters somewhere else. No pseudographics. Former standard encoding in some Linux distributions for Belarusian and Bulgarian, but currently displaced by UTF-8.\n[…]\nBulgarian Braille"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_cirílico",
        "situacao": "ok",
        "texto": "O alfabeto cirílico, também conhecido como azbuka, é um alfabeto cujas variantes são utilizadas para a grafia de seis línguas nacionais eslavas (bielorrusso, búlgaro, macedônio, russo, sérvio e  ucraniano), além do ruteno e outras línguas extintas. Para além disso, é usado por várias línguas não eslavas faladas na antiga União Soviética, como o mongol, o cazaque, o usbeque, o quirguiz e o tajique,\n[…]\nDesde 2019, cerca de 250 milhões de pessoas na Eurásia usam o cirílico como a escrita oficial de suas línguas nacionais, com a Rússia representando cerca de metade delas. Com a entrada da Bulgária na União Europeia (UE), em 1 de janeiro de 2007, o cirílico tornou-se, ao lado do latino e do grego, o terceiro alfabeto oficial da UE.\n[…]\nPouco após a sua criação, o alfabeto cirílico popularizou-se rapidamente como escrita eclesiástica. As escolas literárias de época produziram extensa literatura em \"búlgaro antigo\", que veio a ser conhecida como antigo eslavo eclesiástico. O antigo eslavo, escrito em cirílico, tornou-se língua franca em todo o Leste Europeu.\n[…]\nCom a entrada da Bulgária na União Europeia (UE), em 1.º de janeiro de 2007, o cirílico tornou-se, ao lado do latino e do grego, o terceiro alfabeto oficial da UE.\n[…]\nO alfabeto cirílico é o sistema de escrita oficial de seis línguas nacionais eslavas: bielorrusso, búlgaro, macedônio, russo, sérvio e ucraniano. Cinco dessas línguas pertencem a países relativamente homogêneos linguisticamente, mas o russo é falado como segunda língua por boa parte da população russa, e já o foi por uma parcela ainda maior da população da antiga União Soviética.\n[…]\nO alfabeto búlgaro é igual ao russo, exceto pela ausência das letras Ё, Ы e Э. O alfabeto bielorrusso troca И por І, não possui Ъ mas tem Ў e o apóstrofo (’). O alfabeto ucraniano não possui Ъ, Ы, ё, Э mas preservou І, Ї, Є e a forma com diacrítico Ґ.\n[…]\nCirílico Estendido B U+A640–U+A69F"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Alfabeto fenício",
      "descricao": "Sistema de escrita dos fenícios, ancestral dos alfabetos grego e latino."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "As cidades de Biblos, Tiro e Sídon, onde se usava o alfabeto fenício, ficam no litoral de qual país atual?",
    "resposta": "Líbano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phoenician_alphabet",
      "https://en.wikipedia.org/wiki/Phoenicia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        "situacao": "ok",
        "texto": "The Phoenician alphabet is an abjad (consonantal alphabet)  that was used across the Mediterranean civilization of Phoenicia for most of the 1st millennium BC. It was one of the first alphabets, attested in Canaanite and Aramaic inscriptions found across the Mediterranean basin. In the history of writing systems, the Phoenician script was also the first to have a fixed writing direction—while prev"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Phoenicia",
        "situacao": "ok",
        "texto": "The Phoenicians were an ancient Semitic-speaking people who inhabited city-states in Canaan along the Levantine coast of the eastern Mediterranean, primarily in present-day Lebanon. Their maritime civilization expanded and contracted over time, with its cultural core stretching from Arwad to Mount Carmel. Through trade and colonization, the Phoenicians extended their influence across the Mediterra\n[…]\nThe Phoenicians were not a nation in the political sense. However, they were organized into independent city-states that shared a common language and culture. The leading city-states were Tyre, Sidon, and Byblos. Rivalries were expected, but armed conflict was rare.\n[…]\nAlthough they rarely had political power, women took part in community affairs, including in the popular assemblies that emerged in some city-states. At least one woman, Amoashtart, or Ummiashtart, is recorded to have ruled Sidon in the sixth century BC. The two most famous Phoenician women are political figures: Jezebel, portrayed in the Bible as the wicked princess of Sidon, and Dido, the semi-legendary founder and first queen of Carthage.\n[…]\nThe Phoenicians made votive offerings to their gods, namely in the form of figurines and pottery vessels. Figurines and votive fragments have been found in ceremonial favissae, underground storage spaces for sacred objects, in the temples grounds of the Temple of the Obelisks in Byblos, the Phoenician sanctuary of Kharayeb in the hinterland of Tyre, and the Temple of Eshmun north of Sidon, among others.\n[…]\nda Silva, Diógenes Henrique Carvalho Veras (14 October 2016). La literatura sobre fenicios en el territorio brasileño: orígenes y razones [Literature on Phoenicians in Brazilian territory: origins and reasons] (Ph.D. thesis) (in Spanish). Universidad Complutense de Madrid. hdl:20.500.14352/21232."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio",
        "situacao": "ok",
        "texto": "O alfabeto fenício (na verdade um consonantário, por ter apenas as consoantes e não as vogais), foi o sistema de escrita usado na Fenícia (atuais Síria, Líbano e norte de Israel) que viria a dar origem a grande parte dos sistemas atuais. Foi adaptado do anterior alfabeto semítico e seu registro mais antigo data de 1200 a.C. O sistema deriva da escrita protosinaítica, por sua vez derivada dos hieró\n[…]\nA inovação do alfabeto fenício está em sua natureza puramente fonética, na qual cada símbolo representa um som, que exige a memorização de apenas alguns caracteres, diferentemente dos sistemas logográficos hieroglíficos e cuneiformes (apesar de não totalmente logográficos), com o primeiro se valendo de caracteres fonéticos e do segundo se valendo de um sistema silábico[A partir de quando?\n[…]\nAntes ou depois do surgimento do sistema fenício?], em que cada caractere representava uma palavra, fazendo necessária a existência de milhares de caracteres (de forma similar aos caracteres chineses), que por sua vez exigiam alta especialização para serem aprendidos.\n[…]\nDentre os sistemas derivados do fenício, estão o alfabeto grego, a escrita itálica antiga e o aramaico (que por sua vez originaria os abjads hebraico e árabe). Não são exemplos de descendência aqueles sistemas do sul da Arábia e o etíope.\n[…]\nO alfabeto fenício é melhor descrito como um abjad porque só contém caracteres para representar consoantes, as vogais devendo ser inferidas, enquanto que um verdadeiro alfabeto representa tanto consoantes quanto vogais.\n[…]\nEscrita ugarítica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Língua Brasileira de Sinais",
      "descricao": "Língua de sinais usada pela comunidade surda brasileira, reconhecida por lei federal."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano uma lei federal reconheceu a Língua Brasileira de Sinais como meio legal de comunicação no país?",
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
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Dia Mundial da Língua Portuguesa",
      "descricao": "Data comemorativa da língua portuguesa, proclamada pela UNESCO em 2019 e celebrada em 5 de maio."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que data se comemora o Dia Mundial da Língua Portuguesa, proclamado pela Unesco em 2019?",
    "resposta": "5 de maio",
    "distratores": [
      "10 de junho",
      "23 de abril",
      "22 de abril"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_Mundial_da_Língua_Portuguesa",
      "https://en.wikipedia.org/wiki/World_Portuguese_Language_Day"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Mundial_da_Língua_Portuguesa",
        "situacao": "ok",
        "texto": "O Dia Mundial da Língua Portuguesa (ou \"Dia da Lusofonia\") é celebrado no dia 5 de maio. A data foi criada como Dia da Língua Portuguesa e da Cultura pela Comunidade dos Países de Língua Portuguesa a 20 de julho de 2009, por resolução da XIV Reunião Ordinária do Conselho de Ministros da CPLP, decorrida na cidade da Praia, Cabo Verde.\n[…]\nO dia 5 de maio foi a data da Primeira Reunião dos Ministros da Cultura da Comunidade dos Países de Língua Portuguesa. Posteriormente, em 25 de novembro de 2019, a data foi instituída pela UNESCO como Dia Mundial, tornando o idioma português o primeiro no mundo a ter uma data oficial reconhecida pelo órgão da ONU.\n[…]\nA UNESCO propôs, em seu documento de promulgação da data, a realização de \"concertos, leitura de obras literárias, palestras, competições, exposições culturais, apresentações culturais e populares, peças teatrais e eventos dando a conhecer a riqueza cultural e social da Língua Portuguesa e da diversidade cultural dos países e comunidades que falam este idioma, dando a conhecer mais sobre nossa língua e sua contribuição para a civilização humana\".\n[…]\nPensando nisto, um grupo de intelectuais, escritores, editores, bibliotecários e educadores, constituiu uma Frente Cultural em apoio ao Dia Mundial da Língua Portuguesa, criando iniciativas como, por exemplo, um painel de vídeos em celebração à data, com depoimentos de várias pessoas sobre a língua portuguesa, incluindo nomes como Kardo Bestilo, João Fernando André (Angola), António Sampaio da Nóvoa, Ana Filomena Amaral e Alexandre de Sousa (Portugal), Olinda Beja (São Tomé e Príncipe), Marina Colasanti, Luiz Ruffato, Marco Haurélio, Paulo Markun, Danilo Santos de Miranda, entre outros.\n[…]\nPágina da Frente Cultural da Língua Portuguesa\n[…]\nPágina oficial da Comunidade dos Países de Língua Portuguesa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/World_Portuguese_Language_Day",
        "situacao": "ok",
        "texto": "World Portuguese Language Day (Portuguese: Dia Mundial da Língua Portuguesa) is observed annually on May 5. The day is marked through a range of musical performances, literature readings, competitions, cultural shows, art exhibitions, lectures, plays, and other cultural events worldwide in order to highlight the use and spread of the Portuguese language around the world.\n[…]\nThe observance was established on July 20, 2009 by the Community of Portuguese Language Countries (CPLP) as Portuguese Language and Culture Day. The date of May 5 was chosen to coincide with the first meeting of the Ministers of Culture of the CPLP which occurred in 2005 and was subsequently declared Dia da Cultura da CPLP.\n[…]\nIn November 2019, the 40th session of UNESCO's General Conference decided to proclaim May 5 of each year as \"World Portuguese Language Day\".\n[…]\nInternational Mother Language Day\n[…]\nInternational observance\n[…]\nOfficial languages of the United Nations"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Kasato Maru",
      "descricao": "Navio que trouxe ao porto de Santos o primeiro grupo oficial de imigrantes japoneses para o Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano o navio Kasato Maru chegou ao porto de Santos trazendo o primeiro grupo oficial de imigrantes japoneses?",
    "resposta": "1908",
    "distratores": [
      "1888",
      "1924",
      "1934"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Kasato_Maru",
      "https://en.wikipedia.org/wiki/Kasato_Maru"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru (Kasato Maru (笠戸丸)) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.\n[…]\nO Kasato Maru foi originalmente um navio russo chamado Kazan que foi utilizado como navio-hospital durante a Guerra Russo-Japonesa. No final da guerra, passou para os japoneses como indenização de guerra ou capturado. Foi adaptado para ser navio de passageiros e transportou os soldados que tinham combatido na Manchúria de volta para o Japão.\n[…]\nEm seguida, passou a ser utilizado para transporte de imigrantes japoneses para o Havaí, em 1906, e para o Peru e o México, em 1907.\n[…]\nEm 1908, trouxe o primeiro grupo oficial de imigrantes japoneses para o Brasil. A viagem começou no porto de Kobe e terminou, 52 dias depois, no Porto de Santos em 18 de Junho de 1908. Vieram 165 famílias (781 pessoas) que foram trabalhar nos cafezais do oeste paulista.\n[…]\nAlguns imigrantes japoneses chegaram ao Brasil antes do Kasato Maru, e até chegaram a fundar uma colônia agrícola na fazenda Santo Antônio, no atual município de Conceição de Macabu (então distrito de Macaé), no estado do Rio de Janeiro. Entretanto, foi a chegada deste primeiro grupo trazido pelo Kasato Maru que iniciou um fluxo contínuo de imigração de japoneses para o Brasil.\n[…]\nDepois de algum tempo, Kasato Maru foi transformado em navio cargueiro e ainda voltou ao Brasil uma segunda e última vez, em 1917, transportando cargas a serviço da Osaka Shosen Kaisha (OSK) Line.\n[…]\nAfrica Maru\n[…]\nBuenos Aires Maru\n[…]\nRio de Janeiro Maru\n[…]\nMedia relacionados com Kasato Maru no Wikimedia Commons\n[…]\n«História do navio Kasato Maru»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru or Kasado Maru (Japanese: 笠戸丸) was a Japanese cargo/passenger ship built by the British shipyard Wigham Richardson in 1900. Originally christened as SS Potosí, the ship was bought by the Russian Dobroflot, and  renamed Kazan, being used as a hospital ship. She was sunk by the Japanese Navy during the Russo-Japanese War, salvaged and passed to the Japanese control as compensation for wa\n[…]\nShe was adapted to be a passenger ship and renamed as Kasato Maru and transported the soldiers who had fought in Manchuria back to Japan.\n[…]\nShe was then used to transport Japanese immigrants to Hawaii in 1906 and to Peru and Mexico in 1907. In 1908, she brought the first official group of Japanese immigrants to Brazil. The trip began at the port of Kobe and ended, 52 days later, at the Port of Santos on June 18, 1908. There came 165 families (781 people) who went to work in the coffee plantations of the west of São Paulo.\n[…]\nSome Japanese immigrants arrived at Brazil before Kasato Maru, founding an agricultural colony in the  current municipality of Conceição de Macabu (then district of Macaé), in the state of Rio de Janeiro. However, it was the arrival of this first group brought by Kasato Maru that initiated a continuous flow of immigration from Japan to Brazil. Some of the Kasato Maru's passengers continued to Argentina (see es:Café El Japonés).\n[…]\nAfter some time, Kasato Maru was transformed into a freighter ship and still returned to Brazil a second and last time, in 1917, transporting loads in the service of Osaka Sosen Kaisha (OSK) Line.\n[…]\nOn 9 August 1945, Kasato Maru was bombed by three Soviet aircraft from 11:15. to 14:30. Kasato Maru then sank into the Bering Sea in the Soviet waters near the Kamchatka Peninsula. It is currently submerged to a depth of 18 meters and in good state of conservation."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Recenseamento do Brasil de 1872",
      "descricao": "Primeiro censo demográfico geral do Brasil, realizado durante o Império."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Ainda no tempo do Império, em que ano foi feito o primeiro recenseamento geral da população do Brasil?",
    "resposta": "1872",
    "distratores": [
      "1822",
      "1850",
      "1890"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Recenseamento_do_Brasil_de_1872",
      "https://pt.wikipedia.org/wiki/Instituto_Brasileiro_de_Geografia_e_Estatística"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Recenseamento_do_Brasil_de_1872",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Instituto_Brasileiro_de_Geografia_e_Estatística",
        "situacao": "ok",
        "texto": "Instituto Brasileiro de Geografia e Estatística (IBGE) é um instituto público da administração federal brasileira criado em 1934 e instalado em 1936 com o nome de Instituto Nacional de Estatística; seu fundador e grande incentivador foi o estatístico Mário Augusto Teixeira de Freitas. O nome atual data de 1938. A sede do IBGE está localizada na cidade do Rio de Janeiro.\n[…]\nAnteriormente ao IBGE, foi instituída em 1871 a Diretoria Geral de Estatística (DGE), subordinada ao Ministério de Negócios do Império Brasileiro, e que realizou o primeiro censo no ano seguinte. A DGE passou também a catalogar registros de nascimento, matrimônio e óbito quando da implantação da República, realizando mais três recenseamentos, em 1890, 1900 e 1920. Um ano após a Revolução de 1930, o DGE foi dissolvido, e suas competências divididas entre os Ministérios.\n[…]\nO IBGE mantém, ainda, a Reserva Ecológica do Roncador, situada a 35 km ao sul de Brasília.\n[…]\nO IBGE realiza vários tipos de censos, embora o mais conhecido seja o censo demográfico, que é o conjunto de dados estatísticos sobre a população de um país. No Brasil, os censos demográficos são realizados a cada dez anos.\n[…]\nO último censo agropecuário realizado pelo IBGE no Brasil havia sido em 1996. Em 2006, foi realizado um novo censo agropecuário, referente às atividades desenvolvidas no ano anterior e em 1 de outubro de 2017, deu-se início ao Censo Agropecuário do respectivo ano.\n[…]\nEm 4 de novembro de 2025, atualizado com dados do Censo Demográfico 2022. A plataforma, que disponibiliza o maior banco de nomes e sobrenomes próprios da população brasileira, visa aproximar-se da instituição do público geral.\n[…]\nInstituto Histórico e Geográfico Brasileiro\n[…]\nInstituto Brasileiro de Geografia e Estatística no Instagram\n[…]\nInstituto Brasileiro de Geografia e Estatística no TikTok\n[…]\nInstituto Brasileiro de Geografia e Estatística no YouTube"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Imigração alemã no Brasil",
      "descricao": "Movimento migratório de alemães para o Brasil, iniciado no século dezenove, com forte presença no Sul."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano chegaram a São Leopoldo os imigrantes que iniciaram a colonização alemã no Rio Grande do Sul?",
    "resposta": "1824",
    "distratores": [
      "1808",
      "1850",
      "1875"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Imigração_alemã_no_Brasil",
      "https://pt.wikipedia.org/wiki/São_Leopoldo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Imigração_alemã_no_Brasil",
        "situacao": "ok",
        "texto": "Imigração alemã no Brasil foi o movimento migratório ocorrido nos séculos XIX e XX de alemães para várias regiões do Brasil. As causas desse processo podem ser encontradas nos frequentes problemas sociais que ocorriam na Europa e a fartura de terras no Brasil. Em 1986, Born e Dickgiesser estimaram em 3 milhões e 600 mil o número de descendentes de alemães no Brasil.\n[…]\nEntre 1824 e 1972, cerca de 260 000 alemães entraram no Brasil; a quinta nacionalidade que mais imigrou para o país, após os portugueses, italianos, espanhóis e japoneses.\n[…]\nApesar desses precedentes, a historiografia consagrou a fundação de São Leopoldo, no Rio Grande do Sul, como o marco inicial da imigração alemã organizada. Em 25 de julho de 1824, os primeiros 39 imigrantes foram assentados à margem sul do Rio dos Sinos, na antiga Real Feitoria do Linho Cânhamo. O recrutamento foi liderado pelo Georg Anton von Schäffer, major do Exército e enviado especial do Império à Europa.\n[…]\nAté o fim do Império, foram criadas 80 colônias alemãs, a maioria na bacia do rio Jacuí, chegando até a borda da Serra Gaúcha. Com o advento da República, várias outras colônias importantes, como Ijuí, foram criadas pelo governo. A maioria, contudo, surgiu da iniciativa de empresas particulares. Entre 1824 e 1922, 142 colônias alemãs foram criadas no Rio Grande do Sul e entre 1824 e 1914, estima-se que 48 mil alemães imigraram para esse estado.\n[…]\nA imigração alemã exigiu vultosos investimentos do Estado em transporte, manutenção, demarcação de terras e infraestrutura básica. No Parlamento, as despesas geravam debates acalorados, com deputados rotulando os imigrantes alemães de \"hóspedes caros\", devido ao peso inicial no Tesouro Nacional. Somente entre 1824 e 1830, o gasto em São Leopoldo superou 1.000 contos de réis; em Blumenau, as aplicações nas décadas de 1860 e de 1870 ultrapassaram 800 contos."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/São_Leopoldo",
        "situacao": "ok",
        "texto": "São Leopoldo é um município brasileiro do estado do Rio Grande do Sul, na Região Metropolitana de Porto Alegre. Foi a primeira cidade fundada por imigrantes alemães no Brasil.\n[…]\nFoi habitada por índios carijós e por imigrantes açorianos. Era um vilarejo conhecido como Feitoria do Linho-cânhamo quando chegaram os primeiros 39 imigrantes alemães à região, em 25 de julho de 1824, enviados pelo imperador brasileiro Dom Pedro I para povoá-la. A desativada Real Feitoria do Linho Cânhamo fora um estabelecimento agrícola do governo onde eram produzidas cordas, mas que não dera muitos resultados, tendo falido, entre outros motivos, devido à corrupção dos administradores.\n[…]\nEssa feitoria localizava-se junto da margem esquerda do Rio dos Sinos. A data de 25 de julho de 1824 passou a ser considerada a data de fundação de São Leopoldo. Instalados na feitoria até que recebessem seus lotes coloniais, este núcleo foi batizado \"Colônia Alemã de São Leopoldo\" em homenagem à Imperatriz Leopoldina, a esposa austríaca de Dom Pedro I. Nesta época, era então governador do estado o Visconde de São Leopoldo.\n[…]\nO atual prefeito de São Leopoldo é Heliomar Franco, do PL.\n[…]\nO Museu Histórico Visconde de São Leopoldo dedica-se a preservar e divulgar o legado da colonização alemã, mantendo uma vasta coleção de documentos, objetos e imagens.\n[…]\nImigração alemã no Rio Grande do Sul\n[…]\nLista de municípios do Rio Grande do Sul\n[…]\nLista de municípios do Rio Grande do Sul por população\n[…]\nLista de municípios do Rio Grande do Sul por data de criação\n[…]\nLista de municípios do Brasil acima de cem mil habitantes"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Pinyin",
      "descricao": "Sistema oficial de transcrição do chinês mandarim para o alfabeto latino, adotado pela República Popular da China."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década a China adotou oficialmente o pinyin, sistema que escreve o mandarim com letras latinas?",
    "resposta": "Década de 1950",
    "fonte": [
      "https://en.wikipedia.org/wiki/Pinyin",
      "https://pt.wikipedia.org/wiki/Pinyin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pinyin",
        "situacao": "ok",
        "texto": "The Chinese Phonetic Alphabet, commonly called Hanyu Pinyin or simply pinyin (pīnyīn), is the most common romanization system for Standard Chinese. Hanyu literally means 'Han language' — that is, the Chinese language — while pinyin literally means 'spelled sounds'. Pinyin is the official romanization system used in China, Singapore and the United Nations. Its use has become the standard method for\n[…]\nThe Wade–Giles system was produced by Thomas Wade in 1859, and further improved by Herbert Giles, presented in Chinese–English Dictionary (1892). It was popular, and was used in English-language publications outside China until 1979. In 1943, the US military tapped Yale University to develop another romanization system for Mandarin Chinese intended for pilots flying over China—much more than previous systems, the result appears very similar to modern Hanyu Pinyin.\n[…]\nThe spelling of Chinese geographical or personal names in pinyin has become the most common way to transcribe them in English. Pinyin has also become the dominant Chinese input method in mainland China, in contrast to Taiwan, where bopomofo is most commonly used.\n[…]\nPersonal names on Taiwanese passports honor the choices of Taiwanese citizens, who can choose Wade–Giles, Hakka, Hoklo, Tongyong, aboriginal, or pinyin. Official use of pinyin is controversial, as when pinyin use for a metro line in 2017 provoked protests, despite government responses that \"The romanization used on road signs and at transportation stations is intended for foreigners ... Every foreigner learning Mandarin learns Hanyu pinyin, because it is the international standard ...\n[…]\nSingapore implemented Hanyu Pinyin as the official romanization system for Mandarin in the public sector starting in the 1980s, in conjunction with the Speak Mandarin Campaign. Hanyu Pinyin is also used as the romanization system to teach Mandarin Chinese at schools.\n[…]\nPinyin table"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pinyin",
        "situacao": "ok",
        "texto": "O pinyin (em chinês: 拼音, pīnyīn) ou, mais formalmente, hanyu pinyin (汉语拼音 / 漢語拼音) é o método de transliteração (romanização) mais utilizado atualmente para o mandarim padrão (标准普通话 / 標準普通話). A palavra hànyǔ (汉语 / 漢語) significa \"língua han\" (isto é, 'chinês' ou 'mandarim'), e pīnyīn (拼音) significa \"fonética\" (literalmente \"som soletrado\"). O sistema é utilizado apenas para o mandarim padrão, e não \n[…]\nO pinyin é uma romanização e não uma anglicização, ou seja, ele utiliza letras latinas para representar sons no mandarim padrão; a maneira de efetuar tal representação no pinyin difere, em alguns casos, do estilo de simbolização escrita de sons em outras línguas que usam o alfabeto latino. Por exemplo, os sons indicados nesse dialeto pela letra b e g correspondem mais precisamente aos sons representados, respectivamente, pela letra p e k no emprego ocidental do alfabeto latino.\n[…]\nPor exemplo, 功夫 é romanizado como \"kungfu\" 匡扶 em Wade-Giles, mas \"gongfu\" 魔攻 em Pinyin, embora sua pronúncia, em ambos os sistemas seja \"kungfu\". Além disso, 北京 (Pequim, a capital da China) foi no passado romanizada como \"Peking\", mas é \"Beijing\" em Pinyin, que se pronuncia algo como \"Peikchin\". É um equívoco comum pensar que a cidade mudou de nome: o som nunca mudou, apenas como anglófonos soletram o som com as letras em sistemas diferentes.\n[…]\nO sistema pinyin também usa diacríticos para marcar os quatro tons do mandarim. O diacrítico é colocado sobre a letra que representa o núcleo silábico, a não ser que a letra não tenha (ver abaixo). Muitos livros impressos na China usam fontes mistas, com vogais e tons marcados de formas diferentes, deixando os textos em pinyin com aparência desorganizada.\n[…]\nTabela Pinyin\n[…]\nYin Binyong 尹斌庸 and Mary Felley (1990). Chinese Romanization. Pronunciation and Orthography (Hanyu pinyin he zhengcifa 汉语拼音和正词法). Beijing: Sinolingua. ISBN 7-80052-148-6 / ISBN 0-8351-1930-0."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Arte de Gramática da Língua mais usada na Costa do Brasil",
      "descricao": "Gramática do tupi antigo escrita pelo jesuíta José de Anchieta e publicada em Coimbra em 1595."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que padre jesuíta, um dos fundadores de São Paulo, escreveu a gramática da língua tupi publicada em 1595?",
    "resposta": "José de Anchieta",
    "fonte": [
      "https://pt.wikipedia.org/wiki/José_de_Anchieta",
      "https://en.wikipedia.org/wiki/José_de_Anchieta"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/José_de_Anchieta",
        "situacao": "ok",
        "texto": "José de Anchieta SJ (San Cristóbal de La Laguna, 19 de março de 1534 – Reritiba, 9 de junho de 1597) foi um padre jesuíta espanhol que ingressou na Companhia de Jesus no Reino de Portugal, ficando ao seu serviço, e um dos fundadores das cidades brasileiras de São Paulo e do Rio de Janeiro.\n[…]\nAnchieta ficou menos de três meses em Salvador, partindo para a Capitania de São Vicente no princípio de outubro, com o padre jesuíta Leonardo Nunes, onde conheceria Manuel da Nóbrega e permaneceria por doze anos. Anchieta abriu os caminhos do sertão, aprendendo a língua tupi, catequizando e ensinando latim aos índios. Escreveu a primeira gramática sobre uma língua do tronco tupi: a \"Arte da Gramática da Língua Mais Falada na Costa do Brasil\", que foi publicada em Coimbra em 1595.\n[…]\n\"Arte de Gramática da Língua mais Usada na Costa do Brasil\", impressa em Coimbra em 1595 por Antonio de Mariz. É a primeira gramática contendo os fundamentos da língua tupi. Apresenta folha de rosto com o emblema da Companhia de Jesus. Desta edição, conhecem-se apenas sete exemplares, dois dos quais encontram-se na Biblioteca Nacional do Brasil: o primeiro pertenceu ao imperador dom Pedro II (1840-1889) e o outro é oriundo da coleção de José Carlos Rodrigues.\n[…]\nA Basílica de São José de Anchieta e o Museu Anchieta, no Pátio do Colégio, é um dos mais importantes espaços do centro histórico da cidade de São Paulo. Os atuais edifícios foram reconstruídos entre 1954 e 1979 (após o IV centenário da cidade) depois de anos sendo Palácio do Governo, louvando a história de um dos fundadores da capital paulista e maior cidade do Brasil.\n[…]\nMonumento ao Padre José de Anchieta em Tenerife\n[…]\nLista de santos brasileiros\n[…]\nA Arte de Anchieta transcrita por Emerson José Silveira da Costa, na Biblioteca Digital Curt Nimuendajú"
      },
      {
        "url": "https://en.wikipedia.org/wiki/José_de_Anchieta",
        "situacao": "ok",
        "texto": "José de Anchieta y Díaz de Clavijo, SJ (Joseph of Anchieta; 19 March 1534 – 9 June 1597) was a Spanish missionary to the Portuguese colony of Brazil in the second half of the 16th century. A highly influential figure in Brazil's history in the first century after its European discovery, Anchieta was one of the founders of São Paulo in 1554 and of Rio de Janeiro in 1565.\n[…]\nWith his book Arte de gramática da língua mais usada na costa do Brasil (1595), Anchieta became the first person to provide an orthography to Old Tupi, the language most commonly spoken along the coast of Brazil.\n[…]\nAnchieta was a pioneer in transcribing the Old Tupi language and authored the first published work on that language, a \"pathbreaking\" grammar, Arte de gramática da língua mais usada na costa do Brasil, written in 1555 and published in 1589. According to one assessment, \"His grammar and dictionary still rank among the best ever produced of a Brazilian language, nearly 500 years later....\n[…]\nNey Latorraca starred in the Brazilian biographical film, Anchieta, José do Brasil, which was released in 1977.\n[…]\nIn the Basilica of Our Lady of Candelaria (patron saint of the Canary Islands), there is a painting of José de Anchieta founding the city of São Paulo. In 1997, a biographical comic book was published.\n[…]\nThe main shrines dedicated to Saint José de Anchieta in Brazil and the Canary Islands are those that are directly related to his life:\n[…]\nJesuit Reductions\n[…]\nDominian, Helen G. (1958). Apostle of Brazil: The Biography of Padre José de Anchieta, S.J. (1534–1597). Exposition Press.\n[…]\nBiography of San José de Anchieta, Diocese of Tenerife (in Spanish)\n[…]\nJosé de Anchieta, Santo (in Spanish)\n[…]\nSan José de Anchieta (in Spanish)\n[…]\nWorks by José de Anchieta at Project Gutenberg\n[…]\nWorks by or about Joseph of Anchieta at the Internet Archive\n[…]\nWorks by Joseph of Anchieta at LibriVox (public domain audiobooks)"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Bíblia de Lutero",
      "descricao": "Tradução da Bíblia para o alemão feita por Martinho Lutero no século dezesseis."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "No século dezesseis, a tradução da Bíblia feita por qual reformador religioso ajudou a fixar o alemão padrão?",
    "resposta": "Martinho Lutero",
    "fonte": [
      "https://en.wikipedia.org/wiki/Luther_Bible",
      "https://pt.wikipedia.org/wiki/Martinho_Lutero"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Luther_Bible",
        "situacao": "ok",
        "texto": "The Luther Bible (German: Lutherbibel) is a German language Bible translation by the Protestant reformer Martin Luther. A New Testament translation by Luther was first published in September 1522; the completed Bible contained 75 books, including the Old Testament, Apocrypha and New Testament, which was printed in 1534. Luther continued to make improvements to the text until 1545.\n[…]\nIt is a common misconception that Martin Luther removed certain books from the Bible; rather, \"Luther collected the apocryphal books and placed them at the end of the Old Testament, rather than have them interspersed among the other books.\" The Luther Bible influenced the production of Bibles used by the Evangelical-Lutheran Churches worldwide.\n[…]\nEven though the translation and revision work on the Luther Bible ended with Martin Luther's death in 1546, this does not mean that the text of the Luther Bible was no longer changed. It was reprinted and distributed in various places. New adaptations were made time and again. Text changes were part of the everyday business for printers and typesetters. Depending on the region, dialectal idiosyncrasies were incorporated and unfamiliar expressions replaced.\n[…]\nAtkinson, James (1968). Martin Luther and the birth of Protestantism. Harmondsworth: Penguin Books. OCLC 463873.\n[…]\nBluhm, Heinz (1965). Martin Luther, Creative Translator. St. Louis: Concordia Publishing House.\n[…]\nBrecht, Martin. Martin Luther. 3 Volumes. James L. Schaaf, trans. Philadelphia: Fortress Press, 1985–1993. ISBN 0-8006-2813-6, ISBN 0-8006-2814-4, ISBN 0-8006-2815-2.\n[…]\nDickens, Arthur Geoffrey (1974). The German Nation and Martin Luther. London: Edward Arnold. ISBN 978-0-7131-5700-0. OCLC 29174654..\n[…]\nFurcha, Edward J. (1983). The Legacy of Martin Luther/L'héritage de Martin Luther. Ottawa: National Library of Canada, McGill University Press. ISBN 978-0-662-52588-2. OCLC 10849801."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Martinho_Lutero",
        "situacao": "ok",
        "texto": "Martinho Lutero (Eisleben, 10 de novembro de 1483 – 18 de fevereiro de 1546) foi um frade agostiniano e professor de teologia alemão cuja crítica às indulgências ajudou a desencadear a Reforma Protestante. Em 1517, suas 95 Teses abriram uma controvérsia sobre o perdão dos pecados e a autoridade da Igreja. O debate se espalhou entre governantes e fiéis e contribuiu para romper a unidade do cristian\n[…]\nEm 1523, Ulrico Zuínglio ainda afirmava concordar com a doutrina eucarística de Lutero. Depois conheceu a interpretação simbólica das palavras da Ceia proposta por Cornelis Henricxzoen Hoen, que ajudou a orientar sua compreensão e a de Ecolampádio. Passou a ver a Ceia como celebração de agradecimento e confissão de fé da comunidade. Os reformadores de Estrasburgo Martin Bucer e Wolfgang Capito se interessaram por essa concepção e pediram a opinião de Lutero em dezembro de 1524.\n[…]\nVer também: Martinho Lutero e os turcos.\n[…]\nVer também: Recepção de Martinho Lutero.\n[…]\nCom a colaboração de Melâncton e de outros teólogos e sob a revisão final de Lutero, a tradução da Bíblia feita em Wittenberg alcançou um grande público e ficou conhecida como Bíblia de Lutero. Antes dela, haviam sido impressas catorze edições de Bíblias alemãs em alto-alemão e quatro em baixo-alemão. Na Carta sobre a tradução, de 1530, Lutero explicou seus princípios e os defendeu da acusação católica de adulterar o texto.\n[…]\nVer também: Recepção de Martinho Lutero, Casa de Lutero em Eisenach, Lutherhaus, Lista de homenagens a Martinho Lutero.\n[…]\nEm 5 de dezembro de 1914, estreou no Teatro dos Artistas Alemães, em Berlim, a peça Luther. Deutsche Historie mit einem Vorspiel und 13 Bildern, de August Strindberg. Entre os atores estavam Kurt Vespermann, como Lutero jovem no prólogo, Friedrich Kayßler, como doutor Martinho Lutero, Emil Jannings e Rudolf Schildkraut.\n[…]\nBíblia de Lutero, tradução alemã da Bíblia realizada pelo reformador."
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Academia Francesa",
      "descricao": "Instituição fundada em 1635 para zelar pela língua francesa, composta por quarenta membros."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1635, que cardeal e ministro do rei Luís treze fundou a Academia Francesa, guardiã da língua?",
    "resposta": "Cardeal Richelieu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Académie_Française",
      "https://pt.wikipedia.org/wiki/Academia_Francesa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Académie_Française",
        "situacao": "ok",
        "texto": "The Académie Française (French pronunciation: [akademi fʁɑ̃sɛːz]), also known as the French Academy, is the principal French council for matters pertaining to the French language. The Académie was officially established in 1635 by Cardinal Richelieu, the chief minister to King Louis XIII. Abolished in 1793 during the French Revolution, it was restored as a division of the Institut de France in 180\n[…]\nThe Académie had its origins in an informal literary group deriving from the salons held at the Hôtel de Rambouillet during the late 1620s and early 1630s. The group began meeting at Valentin Conrart's house, seeking informality. There were then nine members. Cardinal Richelieu, the chief minister of France, made himself protector of the group, and in anticipation of the formal creation of the academy, new members were appointed in 1634.\n[…]\nOn 22 February 1635, at Richelieu's urging, King Louis XIII granted letters patent formally establishing the council; according to the letters patent registered at the Parlement de Paris on 10 July 1637, the Académie Française was \"to labor with all the care and diligence possible, to give exact rules to our language, to render it capable of treating the arts and sciences\". The Académie Française has remained responsible for the regulation of French grammar, spelling, and literature.\n[…]\nThe President of France is the \"protector\" or patron of the Académie. Cardinal Richelieu originally adopted this role; upon his death in 1642, Pierre Séguier, the Chancellor of France, succeeded him. Louis XIV adopted the function when Séguier died in 1672; since then, the French head of state has always served as the Académie's protector.\n[…]\nMembers are known as \"les immortels\" (\"the Immortals\") in reference to the Académie's motto, À l'immortalité (\"To Immortality\"), which is inscribed on the official seal of the charter granted by Cardinal Richelieu.\n[…]\nSwedish Academy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Francesa",
        "situacao": "ok",
        "texto": "A Academia Francesa (em francês: Académie française) foi fundada por Richelieu em 1635, sob o reinado de Luís XIII de França. É uma das mais antigas instituições francesas. É composta por quarenta membros, chamados de \"Quarenta\" ou somente de \"Imortais\". A Academia Brasileira de Letras foi baseada nela.\n[…]\nNo sistema educacional francês, a Academia é uma unidade administrativa.\n[…]\nA Academia Francesa (Académie française) é uma associação composta pelas mais proeminentes pessoas instruídas nos assuntos relativos ao idioma francês. Foi criada em 1635 por Richelieu, o principal ministro e o homem-forte do reinado de Luís XIII. Fechada em 1793, durante a Revolução Francesa, foi novamente instituída por Napoleão Bonaparte, em 1803. É a mais antiga das 5 academias que compõem o Instituto da França.\n[…]\nEm suas origens, a Académie era composta por um grupo informal que se reunia para debates literários entre as décadas de 1620 e 1630 em Paris (um, dentre muitos dos grupos que então se formaram). O cardeal Richelieu, na prática o governante da França na época, adotou este grupo como seu protegido. Como preparação para a sua constituição oficial, foram convidados vários associados no ano de 1634.\n[…]\nO presidente francês é o protetor ou patrono da Académie - um papel que coubera precipuamente a Richelieu. Com a sua morte, em 1642, Pierre Séguier, chanceler de França, o sucedeu. Quando este, a seu turno, faleceu em 1672, Luís XIV de França assumiu esta função. Desde então, o chefe de estado sempre foi o patrono da Académie. De 1672 a 1805, a reuniões oficiais do silogeu deram-se no Louvre e, a partir desse ano, ocorrem no Collège des Quatre Nations (hoje conhecido como Palais de l'Institut).\n[…]\nAs demais academias do Instituto também ali têm sua sede.\n[…]\nMembros actuais da Academia Francesa:"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Parque Indígena do Xingu",
      "descricao": "Terra indígena no norte de Mato Grosso, criada em 1961, onde vivem vários povos indígenas."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que irmãos sertanistas lideraram a luta pela criação do Parque Indígena do Xingu, em 1961?",
    "resposta": "Irmãos Villas-Bôas",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parque_Indígena_do_Xingu",
      "https://pt.wikipedia.org/wiki/Irmãos_Villas-Bôas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parque_Indígena_do_Xingu",
        "situacao": "ok",
        "texto": "O Parque Indígena do Xingu, anteriormente Parque Nacional Indígena do Xingu, é uma terra indígena brasileira, considerada a maior e uma das mais famosas reservas do gênero no mundo.\n[…]\nO parque foi criado em 1961 pelo então presidente brasileiro Jânio Quadros, tendo sido a primeira terra indígena homologada pelo governo federal. Seus principais idealizadores foram os irmãos Villas Bôas, mas quem redigiu o projeto foi o antropólogo e então funcionário do Serviço de Proteção ao Índio, Darcy Ribeiro.\n[…]\nO Parque Indígena do Xingu é considerado a maior e uma das mais famosas reservas do gênero no mundo. Criado em 1961, durante o governo de Jânio Quadros, foi resultado de vários anos de trabalho e luta política, envolvendo os irmãos Villas-Bôas, ao lado de personalidades como o Marechal Rondon, Darcy Ribeiro, Noel Nutels, Café Filho e muitos outros.\n[…]\nCriado o Parque Nacional do Xingu, posteriormente denominado Parque Indígena do Xingu, em 1961, Orlando Villas-Bôas foi nomeado seu administrador-geral. No exercício dessa função, pôde melhorar a assistência aos índios, garantir a preservação da fauna e da flora da região e reaparelhar os postos de assistência.\n[…]\nA épica empreitada dos irmãos Villas-Bôas é um dos mais importantes e polêmicos episódios da antropologia brasileira e da história indígena. A concepção do Parque Indígena do Xingu, os custos para sua implementação e suas drásticas consequências, o constante ataque de madeireiros e latifundiários e as políticas indigenistas do estado brasileiro são temas importantes para a reflexão sobre o significado de toda esta experiência.\n[…]\nEntrevista com Orlando Villas Boas sobre a história do Parque Indígena do Xingu"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Irmãos_Villas-Bôas",
        "situacao": "ok",
        "texto": "Os Irmãos Villas-Bôas, Orlando (1914-2002), Cláudio (1916-1998) e Leonardo Villas-Bôas (1918-1961), foram importantes sertanistas brasileiros.\n[…]\nComo decorrência dos esforços envidados pelos irmãos Villas-Bôas e pelo auxílio das personalidades citadas, foi criado, em 1961, o Parque Nacional do Xingu, a mais importante reserva indígena das Américas.\n[…]\nAo contrário, a partir dos contatos e das relações privilegiadas que tiveram com as populações indígenas do Xingu, os irmãos Villas-Bôas puderam apreender toda a riqueza cultural das mesmas, o que os levou a defender não apenas a sua integridade física, mas também sua integridade cultural.\n[…]\nNo aspecto dos índios, os irmãos Villas-Bôas implantaram uma nova política indigenista, que, basicamente, consiste na defesa dos valores culturais dos índios, como único meio de evitar a marginalização e o desaparecimento dos grupos tribais. A partir da máxima segundo a qual “O índio só sobrevive na sua própria cultura”, os irmãos Villas-Bôas conseguiram implantar uma nova forma de relacionamento entre nossa sociedade e as comunidades indígenas brasileiras.\n[…]\nApós encerrarem suas atividades no Parque Indígena do Xingu, os dois Villas-Bôas (Orlando e Cláudio), aposentados, continuaram atuando como assessores da presidência da Fundação Nacional do Índio (Funai).\n[…]\n1961\t  Criação do Parque Indígena do Xingu e morte de Leonardo Villas-Bôas, de miocardite reumática\n[…]\nEm abril de 2012 foi lançado o longa-metragem Xingu, sobre a vida dos três irmãos. Os irmãos Villas-Bôas foram interpretados por Felipe Camargo, João Miguel e Caio Blat. Cao Hamburger dirigiu o longa.\n[…]\nPágina sobre Orlando Villas-boas"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Ensaio sobre o Princípio da População",
      "descricao": "Livro publicado em 1798 que afirma que a população tende a crescer mais rápido que a produção de alimentos."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1798, que economista inglês publicou a tese de que a população cresce mais rápido que a produção de alimentos?",
    "resposta": "Thomas Malthus",
    "fonte": [
      "https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population",
      "https://pt.wikipedia.org/wiki/Thomas_Malthus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population",
        "situacao": "ok",
        "texto": "The book An Essay on the Principle of Population was first published anonymously in 1798, but the author was soon identified as Thomas Robert Malthus. The book warned of future difficulties, on an interpretation of the population increasing in geometric progression (so as to double every 25 years) while food production increased in an arithmetic progression, which would leave a difference resultin\n[…]\nMalthus himself claimed:\n[…]\nMalthus died in 1834 leaving this as his final word on the Principle of Population.\n[…]\nWilliam Godwin criticized Malthus's criticisms of his own arguments in his book Of Population (1820). Other theoretical and political critiques of Malthus and Malthusian thinking emerged soon after the publication of the first Essay on Population, most notably in the work of Robert Owen, of the essayist William Hazlitt (1807) and of the economist Nassau William Senior, and moralist William Cobbett. True Law of Population (1845) was by politician Thomas Doubleday, an adherent of Cobbett's views.\n[…]\nMalthus, An Essay On The Principle Of Population (1798 1st edition, plus excerpts 1803 2nd edition), Introduction by Philip Appleman, and assorted commentary on Malthus edited by Appleman. Norton Critical Editions. ISBN 0-393-09202-X.\n[…]\nMalthus, Thomas Robert (1798). An Essay on the Principle of Population as it affects the future improvement of society. With remarks on the speculations of Mr. Godwin, M. Condorcet and other writers.\n[…]\nMalthus, Thomas Robert (1803). An Essay on the Principle of Population or, a View of its Past and Present Effects on Human Happiness; with an enquiry into our Prospects respecting the Future Removal or Mitigation of the Evils which it occasions (second ed.).\n[…]\nDarwin Online, Malthus, Thomas. 1826. An essay on the principle of population 6th edition. London: John Murray. Volume 1, Volume 2, free online access, full searchable text plus pdf views of each page."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Thomas_Malthus",
        "situacao": "ok",
        "texto": "Thomas Robert Malthus (Rookery, perto de Guildford, condado de Surrey, 13 ou 14 de fevereiro de 1766 — Bath, 23 de dezembro de 1834) foi um clérigo anglicano, economista e matemático, iluminista britânico, considerado o pai da demografia, por sua teoria de controle do aumento populacional, conhecida como malthusianismo.\n[…]\nNo primeiro, denominado “An essay on population”, de 1798, o qual necessitou também de uma outra edição ampliada e revisada em 1802 e subsequentemente em 1806, 1807, 1817, 1826, ele especificou:''Foi um economista britânico, e é considerado o pai da demografia, por suas teorias'' \"Um ensaio sobre o princípio da população na medida em que afeta o melhoramento futuro da sociedade, com notas sobre as especulações de Mr. Godwin, M.\n[…]\nEle foi um dos primeiros pesquisadores a tentar analisar dados demográficos e econômicos para justificar sua previsão de incompatibilidade entre o crescimento demográfico e à disponibilidade de recursos. Apesar de ter assumido popularmente que as suas teses deram à Economia a alcunha da \"ciência da desesperança\" (dismal science), a frase foi na verdade cunhada pelo historiador Thomas Carlyle em referência a um ensaio contra a escravatura escrito por John Stuart Mill.\n[…]\nThomas Malthus representa o paradigma de uma visão que ignora ou rebaixa os benefícios da industrialização ou do progresso tecnológico. Ernest Gellner afirma em Pós-modernismo, razão e religião:\n[…]\nEm 1820 Malthus publicou Princípios de Economia Política. (Uma segunda edição foi publicada postumamente em 1836.) Malthus pretendia que este trabalho rivalizasse com os Princípios de Ricardo (1817).\n[…]\n1821. Godwin on Malthus. Edinburgh Review 35, Julho, 362–377.\n[…]\n1824. Political economy. Quarterly Review 30 (60), Janeiro, 297–334.\n[…]\nTeoria populacional neomalthusiana"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Escrita cuneiforme",
      "descricao": "Sistema de escrita da antiga Mesopotâmia, feito com marcas em forma de cunha em tábuas de argila."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que povo do sul da Mesopotâmia criou a escrita cuneiforme, feita com marcas em forma de cunha em tábuas de argila?",
    "resposta": "Sumérios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cuneiform",
      "https://pt.wikipedia.org/wiki/Escrita_cuneiforme"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cuneiform",
        "situacao": "ok",
        "texto": "Cuneiform is a logo-syllabic writing system that was used to write several languages of the ancient Near East. The script was in active use from the early Bronze Age until the 1st century BC. Cuneiform scripts are marked by and named for the characteristic wedge-shaped impressions (Latin: cuneus) which form their signs. Cuneiform is the earliest known writing system and was originally developed to\n[…]\nThere are many instances of Egypt-Mesopotamia relations at the time of the invention of writing, and standard reconstructions of the development of writing generally place the development of the Sumerian proto-cuneiform script before the development of Egyptian hieroglyphs, with the suggestion the former influenced the latter. Given the lack of direct evidence for the transfer of writing, \"no definitive determination has been made as to the origin of hieroglyphics in ancient Egypt\".\n[…]\nMost later adaptations of Sumerian cuneiform preserved at least some aspects of the Sumerian script. Written Akkadian included phonetic symbols from the Sumerian syllabary, together with logograms that were read as whole words. Many signs in the script were polyvalent, having both a syllabic and logographic meaning.\n[…]\nThe Sumerian cuneiform script had on the order of 1,000 distinct signs, or about 1,500 if variants are included. This number was reduced to about 600 by the 24th century BC and the beginning of Akkadian records. Not all Sumerian signs are used in Akkadian texts, and not all Akkadian signs are used in Hittite.\n[…]\nRegarding Akkadian forms, the standard handbook for many years was Borger (1981, Assyrisch-Babylonische Zeichenliste or \"ABZ\") with 598 signs used in Assyrian and Babylonian writing, recently superseded by Borger (2004, Mesopotamisches Zeichenlexikon or \"MesZL\") with an expansion to 907 signs, an extension of their Sumerian readings and a new numbering scheme."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_cuneiforme",
        "situacao": "ok",
        "texto": "Escrita cuneiforme é a designação geral dada a certos tipos de escrita feitas com auxílio de objetos em formato de cunha. É, juntamente com os hieróglifos egípcios, o mais antigo tipo conhecido de escrita, tendo sido criado pelos sumérios cerca de 3 200 a.C. Inicialmente, a escrita representava formas do mundo (pictogramas). Com o passar do tempo, por praticidade, as formas foram se tornando mais \n[…]\nA escrita cuneiforme foi adotada subsequentemente pelos acadianos, babilônicos, elamitas, hititas e assírios e adaptada para escrever em seus próprios idiomas; foi extensamente usada na Mesopotâmia durante aproximadamente 3 mil anos, apesar da natureza silábica do manuscrito (como foi estabelecido pelos sumérios) não ser intuitiva aos falantes de idiomas semíticos.\n[…]\nHá muitas instâncias de relações entre Egito e Mesopotâmia na época da invenção da escrita, e as reconstruções padrão do desenvolvimento da escrita geralmente colocam o desenvolvimento da escrita proto-cuneiforme suméria antes do desenvolvimento dos hieróglifos egípcios, com a sugestão de que a primeira influenciou a segunda. Dada a falta de evidências diretas para a transferência da escrita, \"nenhuma determinação definitiva foi feita quanto à origem dos hieróglifos no antigo Egito\".\n[…]\nO cuneiforme babilônico foi simplificado de forma semelhante durante esse período, embora em menor grau e de forma ligeiramente diferente. A partir do século VI a.C., a língua acádica foi marginalizada pelo aramaico, escrito no alfabeto aramaico, mas o cuneiforme acádico permaneceu em uso na tradição literária até os tempos do Império Parta na Assíria e Babilônia (250 a.C. – 226 d.C.). As tabuinhas Graeco-Babyloniaca mostram que tanto o sumério quanto o acádico eram compreendidos no século I a.C.\n[…]\n«Online Translator». - Translates English words, sentences, and phrases into ancient Assyrian, Babylonian, Sumerian cuneiform"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Línguas indo-europeias",
      "descricao": "Família de línguas que inclui as românicas, germânicas, eslavas, o grego, o persa e as línguas do norte da Índia."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1786, em Calcutá, que juiz britânico apontou o parentesco do sânscrito com o grego e o latim?",
    "resposta": "William Jones",
    "fonte": [
      "https://en.wikipedia.org/wiki/William_Jones_(philologist)",
      "https://en.wikipedia.org/wiki/Indo-European_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/William_Jones_(philologist)",
        "situacao": "ok",
        "texto": "Sir William Jones (28 September 1746 – 27 April 1794) was a British philologist, scholar and judge. Born in Westminster to the Welsh mathematician William Jones, he moved to the Bengal Presidency where Jones served as a puisne judge on the Supreme Court of Judicature at Fort William and also became a scholar of ancient Indian history. He is known for being one of the earliest scholars after father\n[…]\nIn Europe, a discussion as to the authenticity of the first translation of the Avesta scriptures arose. It was the first evidence of an Indo-European language as old as Sanskrit to be translated into a modern European language. It was suggested that the so-called Zend-Avesta was not the genuine work of the prophet Zoroaster but was a recent forgery. Foremost among the detractors, it is to be regretted, was the distinguished (though young) orientalist William Jones.\n[…]\n[William Jones (ed.)], Lailí Majnún / a Persian poem of Hátifí (Calcutta: M. Cantopher, 1788)\n[…]\n[William Jones (trans.), Sacontalá: or, The fatal ring: an Indian drama / by Cálidás; translated from the original Sanscrit and Prácrit (London: Edwards, 1790) [repr. Edinburgh: J. Mundell & Co., 1796]\n[…]\nWilliam Jones, Institutes of Hindu law: or, the ordinances of Menu, according to the gloss of Cullúca. Comprising the Indian system of duties, religious and civil / verbally translated from the original Sanscrit. With a preface, by Sir William Jones (Calcutta: by order of the government, 1796) [repr. London: J. Sewell and J. Debrett, 1796] [trans. by Johann Christian Hüttner, Hindu Gesetzbuch: oder, Menu's Verordnungen nach Cullucas Erläuterung.\n[…]\nChisholm, Hugh, ed. (1911). \"Jones, Sir William\" . Encyclopædia Britannica. Vol. 15 (11th ed.). Cambridge University Press. p. 501.\n[…]\n\"Sir William Jones (1746–1794): As a Philologist, a Persian Scholar and Founder of Asiatic Society\" by R M Chopra, INDO-IRANICA, Vol.66, (1 to 4), 2013."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Indo-European_languages",
        "situacao": "ok",
        "texto": "The Indo-European languages are a language family native to the north of the Indian subcontinent, most of Europe, and Greater Iran, with additional native branches found in regions such as Armenia, parts of the southern Indian subcontinent (Sri Lanka and the Maldives), and even stretching as far as to mainland Southeast Asia (Rohingya language in Myanmar). Historically, Indo-European languages wer\n[…]\nThe current academic consensus in the field of linguistics does not accept any genetic relationships of the Indo-European language family with other language families, although several disputed hypotheses propose such relations.\n[…]\nThe hypothesis reappeared in 1786 when Sir William Jones first lectured on the striking similarities among three of the oldest languages known in his time: Latin, Greek, and Sanskrit, to which he tentatively added Gothic, Celtic, and Persian, though his classification contained some inaccuracies and omissions.\n[…]\nIn one of the most famous quotations in linguistics, Jones made the following prescient statement in a lecture to the Asiatic Society of Bengal in 1786, conjecturing the existence of an earlier ancestor language, which he called \"a common source\" but did not name:\n[…]\nAdditionally, hundreds of millions of persons worldwide study Indo-European languages as secondary or tertiary languages, including in cultures which have completely different language families and historical backgrounds—there are around 600 million learners of English, for example.\n[…]\nThe overwhelming majority of languages used on the Internet are Indo-European, with English continuing to lead the group; English in general has in many respects become the lingua franca of global communication.\n[…]\nGimbutas, Marija (1997). Robbins Dexter, Miriam; Jones-Bley, Karlene (eds.). The Kurgan Culture and The Indo-Europeanization of Europe. JIES Monograph. Vol. 18. ISBN 0-941694-56-9."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/William_Jones_%28fil%C3%B3logo%29",
        "situacao": "ok",
        "texto": "William Jones (Londres, 28 de setembro de 1746 – Calcutá, 27 de abril de 1794) foi um filólogo anglo-galês, um juiz severo na Suprema Corte em Fort William em Bengala e um estudioso da Índia Antiga, particularmente conhecido por sua proposição de a existência de uma relação entre as línguas europeias e indo-arianas, que ele cunhou como indo-europeias.\n[…]\nJones também é creditado por estabelecer a Sociedade Asiática de Bengala no ano de 1784.\n[…]\nEm 1786 Jones postulou uma protolinguagem unindo sânscrito, iraniano, grego, latim, germânico e celta, mas em muitos aspectos seu trabalho era menos preciso do que o de seus predecessores, já que incluía erroneamente egípcio , japonês e chinês nas línguas indo-europeias, omitindo o hindustani e o eslavo. Jones também sugeriu erroneamente que o sânscrito 'foi introduzido [no norte da Índia] por conquistadores de outros reinos em uma era muito remota' deslocando 'o hindi puro' do norte da Índia.\n[…]\nNa Europa, surgiu uma discussão sobre a autenticidade da primeira tradução das escrituras do Avestá. Foi a primeira evidência de uma língua indo-europeia tão antiga quanto o sânscrito a ser traduzida para uma língua europeia moderna. Foi sugerido que o chamado Zendavestá não era uma obra genuína do profeta Zoroastro, mas era uma falsificação recente. O mais importante entre os detratores, é de lamentar, foi o ilustre (embora jovem) orientalista William Jones.\n[…]\nWilliam Jones, Institutes of Hindu law: or, the ordinances of Menu, according to the gloss of Cullúca. Comprising the Indian system of duties, religious and civil / verbally translated from the original Sanscrit. With a preface, by Sir William Jones (Calcutta: by order of the government, 1796) [repr. Londres: J. Sewell e J. Debrett, 1796] [trans. by Johann Christian Hüttner, Hindu Gesetzbuch: oder, Menu's Verordnungen nach Cullucas Erläuterung.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Serviço de Proteção aos Índios",
      "descricao": "Órgão do governo brasileiro criado em 1910 para a política indigenista, antecessor da Funai."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que militar, famoso pelas linhas telegráficas no sertão, foi o primeiro diretor do Serviço de Proteção aos Índios, criado em 1910?",
    "resposta": "Cândido Rondon",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Serviço_de_Proteção_aos_Índios",
      "https://pt.wikipedia.org/wiki/Cândido_Rondon"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Serviço_de_Proteção_aos_Índios",
        "situacao": "ok",
        "texto": "O Serviço de Proteção aos Índios e Localização de Trabalhadores Nacionais (SPILTN), parte constituinte do Ministério da Agricultura, Indústria e Comércio (MAIC), foi um órgão público criado durante o Governo Nilo Peçanha, em 1910, com o objetivo de prestar assistência à população indígena do Brasil. O serviço foi organizado pelo Marechal Rondon, seu primeiro diretor. O órgão foi extinto e substitu\n[…]\nO SPILTN foi criado pelo decreto n. 8 072, de 20 de junho de 1910, com a finalidade de prestar assistência aos indígenas do Brasil e estabelecer centros agrícolas, bem como integrá-los à sociedade nacional. Com a sua fundação, a política indigenista passou a ser de responsabilidade do Estado brasileiro e não de instituições religiosas, como era realizado desde o período colonial.\n[…]\nPautado no pensamento positivista, o órgão tutelar tinha como finalidade identificar trabalhadores Nacionais e gerir a tutela dos indígenas no território nacional através da implantação de postos indígenas. Em 1918, a Localização de Trabalhadores Nacionais passou a constituir um órgão próprio. O SPI, por sua vez, continuou como órgão tutelar dos indígenas, operando a proposta de transformação dos indígenas em trabalhadores rurais e cidadãos da República.\n[…]\nO órgão organizou várias expedições de reconhecimento no território nacional, recolhendo grande quantidade de informações e objetos dos índios brasileiros. Nessas expedições, vários nomes se destacaram, como o Marechal Rondon, Curt Nimuendajú e os irmãos Villas-Bôas.\n[…]\nEm dezembro de 1967, tanto o SPI quanto o Conselho Nacional de Proteção aos Índios (o órgão encarregado de formular a política indigenista brasileira) foram extintos e substituídos pela Fundação Nacional do Índio (hoje a Fundação Nacional dos Povos Indígenas)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cândido_Rondon",
        "situacao": "ok",
        "texto": "Cândido Mariano da Silva Rondon (nascido Cândido Mariano da Silva; Santo Antônio de Leverger, 5 de maio de 1865 – Rio de Janeiro, 19 de janeiro de 1958), também conhecido como Marechal Rondon, foi um engenheiro militar e sertanista brasileiro, famoso por sua exploração de Mato Grosso e da Bacia Amazônica Ocidental e por seu apoio vitalício às populações indígenas brasileiras. Foi o primeiro direto\n[…]\nCândido Mariano da Silva (o sobrenome Rondon foi acrescentado posteriormente) nasceu em 5 de maio de 1865 no atual Mimoso, distrito localizado no município de Santo Antônio de Leverger, no estado de Mato Grosso. Seu pai, Cândido Mariano da Silva, descendia de portugueses e espanhóis miscigenados com indígenas guanás, enquanto sua mãe, Claudina Freitas Evangelista, era descendente de índios terenas e bororos.\n[…]\nDurante a expedição descobriram um grande rio entre o rio Juruena e o rio Ji-Paraná, que Rondon chamou de rio da Dúvida. Para chegar ao destino, construíram canoas e, com sucesso, a equipe conseguiu chegar ao rio Madeira, no Natal de 1909. Ao regressar ao Rio de Janeiro, Rondon foi saudado como herói, porque se acreditava que ele e a expedição haviam morrido na selva. Após a expedição, tornou-se o primeiro diretor do Serviço de Proteção ao Índio, criado pelo Governo Nilo Peçanha.\n[…]\nO marechal Cândido Rondon é considerado um dos principais heróis e patriotas brasileiros e, portanto, tem sido homenageado pela população e pelo governo de várias maneiras. Ele é o \"Pai das Telecomunicações Brasileiras\" e o dia 5 de maio, data de seu aniversário, é também o Dia Nacional das Telecomunicações, estabelecido em sua homenagem. Teve a glória de ter seu nome escrito em letras de ouro no maciço Livro da Sociedade Geográfica de Nova Iorque.\n[…]\nO município de Marechal Cândido Rondon foi criado em 1960;\n[…]\n«Biografia de Marechal Cândido Rondon»\n[…]\n«Documentário Rondon e os Índios Brasileiros»"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Língua franca",
      "descricao": "Língua usada para a comunicação entre falantes de idiomas diferentes; o termo vem de um falar de comércio do Mediterrâneo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A expressão língua franca vem de um falar de comércio do Mediterrâneo. Quem os árabes e os bizantinos chamavam de francos?",
    "resposta": "Os europeus ocidentais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Lingua_franca",
      "https://en.wikipedia.org/wiki/Mediterranean_Lingua_Franca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lingua_franca",
        "situacao": "ok",
        "texto": "A lingua franca (; lit. 'Frankish tongue or language'), also known as a bridge language, common language, trade language, auxiliary language, link language, or language of wider communication (LWC), is a language systematically used to make communication possible between groups of people who do not share a native language or dialect, particularly when it is a third language that is distinct from b\n[…]\nThe use of lingua francas has existed since antiquity.\n[…]\nThe Mediterranean Lingua Franca was largely based on Northern Italy's languages and secondarily on Occitano-Romance languages. This language was spoken from the 11th to 19th centuries around the Mediterranean basin, particularly in the European commercial empires of Italian cities (Genoa, Venice, Florence, Milan, Pisa, Siena) and in trading ports located throughout the eastern Mediterranean rim.\n[…]\nMany Hindi-speaking North Indian states have adopted the three-language formula in which students are taught: \"(a) Hindi (with Sanskrit as part of the composite course); (b) Any other modern Indian language including Urdu and (c) English or any other modern European language.\" The order in non-Hindi speaking states is: \"(a) the major language of the state or region; (b) Hindi; (c) Any other modern Indian language including Urdu but excluding (a) and (b) above; and (d) English or any other modern European language.\" Hindi has also emerged as a lingua franca in Arunachal Pradesh, a linguistically diverse state in Northeast India.\n[…]\nSwahili developed as a lingua franca between several Bantu-speaking tribal groups on the east coast of Africa with heavy influence from Arabic. The earliest examples of writing in Swahili are from 1711. In the early 19th century the use of Swahili as a lingua franca moved inland with the Arabic ivory and slave traders. It was eventually adopted by Europeans as well during periods of colonization in the area."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mediterranean_Lingua_Franca",
        "situacao": "ok",
        "texto": "The Mediterranean Lingua Franca, or Sabir, was a contact language, or languages, that were used as a lingua franca in the Mediterranean basin from the 11th to the 19th centuries. April McMahon describes Sabir as a \"fifteenth century proto-pidgin\" and \"a relic of the original Lingua Franca, a medieval language used by Mediterranean traders and by the Crusaders.\" Operstein and McMahon categorize Sab\n[…]\nLingua franca meant literally \"Frankish language\" in Late Latin, and it originally referred specifically to the language that was used around the Eastern Mediterranean Sea as the main language of commerce. However, the term \"Franks\" was actually applied to all Western Europeans during the late Byzantine Period. Later, the meaning of lingua franca expanded to mean any bridge language.\n[…]\nThis mixed language was used widely for commerce and diplomacy and was also current among slaves of the bagnio, Barbary pirates and European renegades in precolonial Algiers. Historically, the first to use it were the Genoese and Venetian trading colonies in the eastern Mediterranean after the year 1000.\n[…]\nBecause it was a pidgin, Mediterranean Lingua Franca had a very small vocabulary. This and the fact the language is not well attested means only a few hundred words in the language have been recorded to the present-day.\n[…]\nLingua Franca Nova\n[…]\nBrown, Joshua. 2022. \"On the Existence of a Mediterranean Lingua Franca and the Persistence of Language Myths\". Language Dynamics in the Early Modern Period (edited by Karen Bennett and Angelo Cattaneo). London: Routledge, pp. 169–189. ISBN 9780367552145.\n[…]\nDakhlia, Jocelyne, Lingua Franca – Histoire d'une langue métisse en Méditerranée, Actes Sud, 2008, ISBN 2-7427-8077-7.\n[…]\nA Glossary of Lingua Franca, fifth edition, 2005, Alan D. Corré. It includes articles about the language from various authors and sample texts.\n[…]\nLingua franca in the Mediterranean (Google book)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_franca",
        "situacao": "ok",
        "texto": "Língua franca ou língua de contato é a língua que um grupo multilíngue de seres humanos intencionalmente adota ou desenvolve para que todos consigam sistematicamente comunicar-se uns com os outros. Essa língua é geralmente diferente de todas as línguas naturais faladas pelos membros do grupo.\n[…]\nLínguas francas têm surgido ao longo da história humana, às vezes por razões comerciais, às vezes por razões de conveniência diplomática ou administrativa e recurso que possibilite o intercâmbio de informações entre cientistas e outros estudiosos de diferentes nacionalidades. A palavra língua aqui não deve, contudo, ser interpretada como necessariamente uma língua natural (conceito estrito), mas sim como qualquer linguagem (enquanto sistema de comunicação baseado em signos).\n[…]\nNa Idade Antiga, a primeira língua franca a se desenvolver foi a língua acadiana que foi o elo de comunicação comercial no Crescente Fértil, principalmente entre a Mesopotâmia e o Egito. Depois, após a queda da Babilônia, o Império Medo-Persa adotou a língua aramaica e esta durou até o período de influência dos reinos gregos instalados no Oriente a partir do século III a.C. Durante o Império Romano, a língua grega foi a língua franca do oriente e o latim foi a língua franca do ocidente.\n[…]\nPosteriormente, uma língua franca usada na região do mar Mediterrâneo do século XIV (ou mesmo antes) até a atualidade era conhecida pelos marinheiros mediterrâneos, inclusive portugueses.\n[…]\nDo final do século XVII ao século XIX, a língua geral foi a língua franca falada no Brasil.\n[…]\nO inglês é a língua franca contemporânea, sendo bastante usada pelo Ocidente no mundo dos negócios internacionais e para a atividade diplomática.\n[…]\nEm outras regiões do mundo, outras línguas exercem papel de línguas francas:\n[…]\nLíngua administrativa",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Latim",
      "descricao": "Língua indo-europeia da Roma antiga, ancestral das línguas românicas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A língua dos antigos romanos recebeu o nome de latim por causa de qual região da Itália central, onde fica Roma?",
    "resposta": "Lácio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Latin",
      "https://pt.wikipedia.org/wiki/Latim"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Latin",
        "situacao": "ok",
        "texto": "Latin (lingua Latina or Latinum) is a classical language belonging to the Italic branch of the Indo-European languages. Latin was originally spoken by the Latins in Latium (now known as Lazio), the lower Tiber area around Rome, Italy. Through the expansion of the Roman Republic, it became the dominant language in the Italian Peninsula and subsequently throughout the Roman Empire.\n[…]\nThis difference in quality is posited by W. Sidney Allen in his book Vox Latina. However, Andrea Calabrese has disputed this assertion, based in part upon the observation that in Sardinian and some Lucanian dialects, each long and short vowel pair merged, as opposed to in Italo-Western languages in which short /i/ and /u/ merged with long /eː/ and /o:/ (cf. Latin siccus, Italian secco, and Sardinian siccu).\n[…]\nGallia est omnis dívísa in partés trés, quárum únam incolunt Belgae, aliam Aquítání, tertiam quí ipsórum linguá Celtae, nostrá Gallí appellantur. Hí omnés linguá, ínstitútís, légibus inter sé differunt. Gallós ab Aquítánís Garumna flúmen, á Belgís Mátrona et Séquana dívidit.\n[…]\nHórum omnium fortissimí sunt Belgae, proptereá quod á cultú atque húmánitáte próvinciae longissimé absunt, miniméque ad eós mercátórés saepe commeant atque ea quae ad efféminandós animós pertinent important, proximíque sunt Germánís, quí tráns Rhénum incolunt, quibuscum continenter bellum gerunt. Quá dé causá Helvétií quoque reliquós Gallós virtúte praecédunt, quod feré cotídiánís proeliís cum Germánís contendunt, cum aut suís fínibus eós prohibent aut ipsí in eórum fínibus bellum gerunt.\n[…]\nØrberg, Hans (1991). LINGVA LATINA PER SE ILLVSTRATA – Pars I FAMILIA ROMANA. Museum Tusculanum Press. ISBN 87-997016-5-0.\n[…]\nØrberg, Hans (2007). LINGVA LATINA PER SE ILLVSTRATA – Pars II ROMA AETERNA. Hackett Publishing Company, Incorporated. ISBN 978-1-58510-067-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Latim",
        "situacao": "ok",
        "texto": "Língua latina ou latim é uma antiga língua indo-europeia do ramo itálico, originalmente falada no Lácio, a região em volta da cidade de Roma. Foi amplamente difundida, especialmente na Europa Ocidental, como a língua oficial da República Romana, do Império Romano e, após a conversão deste último ao cristianismo, da Igreja Católica Romana. Através da Igreja Católica, tornou-se a língua dos acadêmic\n[…]\nO latim inclui-se entre as línguas itálicas, e seu alfabeto baseia-se no alfabeto itálico antigo, derivado do alfabeto grego. No século IX ou VIII a.C., o latim foi trazido para a península Itálica pelos migrantes latinos, que se fixaram numa região que recebeu o nome de Lácio, situada ao longo do rio Tibre, onde a civilização romana viria a desenvolver-se.\n[…]\nDentre as línguas românicas, o italiano é a que mais conserva o latim em seu léxico, enquanto que o sardo é o que mais preserva a fonologia latina.\n[…]\nEmbora não seja uma língua românica, o inglês sofreu forte influência do latim. Sessenta por cento do seu vocabulário são de origem latina, em geral por intermédio do francês. O mesmo ocorreu com o maltês, uma língua semítica falada na República de Malta, na costa sul da Itália, que fora influenciado por 50% de palavras italianas e sicilianas e, em menor grau, pelo francês em seu léxico, e que mais recentemente fora influenciado pelo inglês em 20% de seu léxico.\n[…]\nComo o contato com o latim escrito se manteve ao longo dos tempos, mesmo muito depois de o latim deixar de ter falantes nativos, muitas palavras latinas foram sendo introduzidas em muitas línguas. Este fenómeno acentuou-se desde o Renascimento, altura em que a cultura clássica foi revalorizada. Sobretudo o inglês e as línguas românicas receberam (e continuam a receber) muitas palavras de origem latina, mas bastantes outras línguas também o fizeram.\n[…]\nLista de expressões jurídicas em latim\n[…]\nEphemeris, notícias em Latim"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Língua suaíli",
      "descricao": "Língua banta da África Oriental, muito usada como língua de contato no Quênia, na Tanzânia e em países vizinhos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome da língua suaíli, falada na África Oriental, vem de uma palavra árabe. O que essa palavra significa?",
    "resposta": "Costas ou litoral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language",
      "https://www.britannica.com/topic/Swahili-language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nAbout 40% of Swahili vocabulary consists of Arabic loanwords, including the name of the language itself (سَوَاحِلي sawāḥilī, a plural adjectival form of an Arabic word meaning 'of the coasts'). Swahili also has a significant number of loanwords from Portuguese, English and German. The Arabic loanwords date from the era of contact between Arab slave traders and the Bantu inhabitants of the east coast of Africa, which was also the time period when Swahili emerged as a lingua franca in the region.\n[…]\nIn 2024, Somalia joined the East African Community and its inclusion may facilitate the spread of the Swahili language in Somalia. Nevertheless, in Somalia, Swahili, as a foreign language, will have to compete with English, the primary global lingua franca, and Arabic, the official second language of Somalia and a liturgical language for Muslims, as popular secondary or tertiary languages.\n[…]\nWith the arrival of Europeans in East Africa, Christianity was introduced to the region, profoundly shaping the development of Swahili. While Arab influence remained concentrated along the coastal areas, European missionaries ventured further inland, establishing missions and promoting Christian teachings. Early outposts were located along the coast, where they encountered Swahili as a widely spoken lingua franca.\n[…]\nKiKAR – Swahili pidgin spoken in British colonial East Africa\n[…]\nLanguages of Africa\n[…]\nWhiteley, Wilfred (1969). Swahili: the rise of a national language. Studies in African History. London: Methuen."
      },
      {
        "url": "https://www.britannica.com/topic/Swahili-language",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nEssa língua africana pertence ao subgrupo sabaki das línguas bantu. É falada por cinquenta milhões de pessoas no mundo, incluindo, além dos países que a têm como língua oficial, Uganda e a República Democrática do Congo, onde é usada como língua franca. É também falado com alguma frequência nas áreas urbanas do Burundi e de Ruanda, no sul da Somália até ao norte de Moçambique (ao longo do litoral de África oriental), na Zâmbia e no sul da Etiópia.\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nA palavra Kiswahili vem do árabe سواحل, transliterado como sawāhil; é o plural da palavra ساحل, sāhel, \"fronteira\" ou \"litoral\", usada como adjetivo de \"negociantes do litoral\" A adição do prefixo ki o define como um idioma. Waswahili se refere aos povos da \"costa suaíli\" e Uswahili indica a cultura dos suaíli.\" Sahel\" também é o nome que se dá à região austral do deserto do Saara.\n[…]\nNichelle Nichols, na série Star Trek, é a Tenente Uhura, nome que vem do suaíli Uhuru, \"liberdade\". Além disso, a palavra Imzadi, usada em Star Trek: The Next Generation, vem do suaíli e significa \"amado\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Aotearoa",
      "descricao": "Nome em língua maori da Nova Zelândia."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Aotearoa, nome que os maoris dão à Nova Zelândia, costuma ser traduzido como terra de quê?",
    "resposta": "Da longa nuvem branca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aotearoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aotearoa",
        "situacao": "ok",
        "texto": "Aotearoa is the Māori-language name for New Zealand. The name was originally used by Māori in reference only to the North Island, with the whole country sometimes referred to as Aotearoa me Te Waipounamu, especially in the South Island. In the pre-European era, Māori did not have a collective name for the two islands.\n[…]\nAotearoa is an overture composed in 1940 by Douglas Lilburn.\n[…]\nThe Land of the Long White Cloud, subtitled Aotearoa, is a piece composed in 1979 by Philip Sparke for brass band or wind band.\n[…]\n\"Aotearoa\" is the Māori version of \"God Defend New Zealand\", a national anthem of New Zealand.\n[…]\nSplit Enz refers to Aotearoa in its 1982 song \"Six Months in a Leaky Boat\".\n[…]\nA 2019 petition initiated by Danny Tahau Jobe for a referendum on whether the official name of New Zealand should change to include Aotearoa received 6,310 signatures.\n[…]\nIn September 2021, Te Pāti Māori started a petition to change the name of New Zealand to Aotearoa. The petition received 50,000 signatures in two days, and over 70,000 by early June 2022. On 2 June, the petition was submitted to Parliament's Petitions Committee. Party co-leader Rawiri Waititi argued that the proposed name change would recognise New Zealand's indigenous heritage and strengthen its identity as a Pacific country.\n[…]\nA 1News–Colmar Brunton poll in September 2021 found that 58% of respondents wanted to keep the name New Zealand, 9% wanted to change the name to Aotearoa, and 31% wanted the joint name of Aotearoa New Zealand. A January 2023 Newshub-Reid Research poll showed a slight increase in support for the name Aotearoa, with 36.2% wanting Aotearoa New Zealand, 9.6% Aotearoa only, and 52% wanting to keep New Zealand only.\n[…]\nThe dictionary definition of Aotearoa at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aotearoa",
        "situacao": "ok",
        "texto": "Nova Zelândia (em inglês:  New Zealand, pronunciado: [ˈnjuː ˈziː.l(ə)nd]; em maori: Aotearoa, pronunciado: [aɔˈtɛaɾɔa]) é um país insular, oficialmente pertencente à Oceania, no sudoeste do Oceano Pacífico, formado por duas massas de terra principais (comumente chamadas de Ilha Norte e Ilha Sul) e por numerosas ilhas menores, sendo as mais notáveis as ilhas Stewart e Chatham.\n[…]\nO nome indígena na língua maori para a Nova Zelândia é Aotearoa, normalmente traduzido como \"A Terra da Grande Nuvem Branca\". É o principal constituinte do Reino da Nova Zelândia, com os demais constituintes sendo territórios ultramarinos, que incluiriam as Ilhas Cook e Niue (que se autogovernam, mas em associação livre); Toquelau; e a Dependência de Ross (reivindicação territorial da Nova Zelândia na Antártida).\n[…]\nAotearoa (muitas vezes traduzido como \"terra da longa nuvem branca\") é o nome māori atual para a Nova Zelândia e também é usado no inglês neozelandês. Não se sabe se os māori tinham um nome para todo o país antes da chegada dos europeus, sendo que Aotearoa originalmente referia-se apenas à Ilha do Norte. Abel Tasman avistou a Nova Zelândia em 1642 e chamou-a de Staten Landt, supondo que o país fosse conectado a um lugar do mesmo nome no extremo sul da América do Sul.\n[…]\nA Nova Zelândia foi um das últimas grandes massas de terra colonizadas por seres humanos. A datação por radiocarbono, evidências de desmatamento e a variabilidade do DNA mitocondrial em populações māori sugerem que a Nova Zelândia foi ocupada pelos polinésios do leste entre 1250 e 1300, concluindo uma longa série de viagens pelas ilhas do Pacífico sul. Ao longo dos séculos que se seguiram, esses colonos desenvolveram uma cultura distinta agora conhecida como māori.\n[…]\nMissões diplomáticas da Nova Zelândia\n[…]\n«Nova Zelândia»  no WikiMapia\n[…]\n«Página do Turismo da Nova Zelândia»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Esperanto",
      "descricao": "Língua planejada para a comunicação internacional, publicada em 1887."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome esperanto vem do pseudônimo que o criador da língua usou no primeiro livro. O que essa palavra significa?",
    "resposta": "Aquele que tem esperança",
    "fonte": [
      "https://en.wikipedia.org/wiki/Esperanto",
      "https://pt.wikipedia.org/wiki/Esperanto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Esperanto",
        "situacao": "ok",
        "texto": "Esperanto (; Esperanto: [espeˈranto]) is the world's most widely spoken constructed auxiliary language. Created by L. L. Zamenhof in 1887 as 'the International Language' (la Lingvo Internacia), it is intended to be a universal second language for international communication. Esperanto culture is grounded in the idea that people can interact on an equal footing across language barriers, without lin\n[…]\nCountering a common criticism against Esperanto, the statistician Svend Nielsen has found no significant correlation between the number of Esperanto speakers and the similarity of a given national native language to Esperanto. He concludes that Esperanto tends to be more popular in rich countries with widespread Internet access and a tendency to contribute more to science and culture.\n[…]\nEsperanto has been placed in many proposed political situations. The most popular of these is the Europe–Democracy–Esperanto, which aims to establish Esperanto as the official language of the European Union. In 2005, Swiss economist François Grin published a report at the request of the Haut conseil de l'éducation that found that the use of English as the lingua franca within the European Union costs billions annually and significantly benefits English-speaking countries financially.\n[…]\nThe report considered a scenario where Esperanto would be the lingua franca, and found that it would have many advantages, particularly economically speaking, as well as ideologically.\n[…]\nAyatollah Khomeini of Iran called on Muslims to learn Esperanto and praised its use as a medium for better understanding among peoples of different religious backgrounds. After he suggested that Esperanto replace English as an international lingua franca, it began to be used in the seminaries of Qom. An Esperanto translation of the Qur'an was published by the state shortly thereafter.\n[…]\nEsperanto Bookshelf at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esperanto",
        "situacao": "ok",
        "texto": "O esperanto é a língua planejada mais falada no mundo (Esperantujo, 120 países). Ao contrário da maioria das outras línguas planejadas, o esperanto já saiu dos níveis de projeto (publicação de instruções) e semilíngua (uso em algumas poucas esferas da vida social).\n[…]\nEfeito propedêutico: existem evidências de que estudar esperanto antes de estudar qualquer outra língua acelera e melhora a aprendizagem, pois aprender outras línguas estrangeiras a seguir é mais fácil que aprender a primeira, enquanto que o esperanto reduz os obstáculos associados com a \"primeira língua estrangeira\", esse fenômeno é conhecido como efeito propedêutico, sendo muito acentuado no esperanto.\n[…]\nÉmile Boirac, escritor francês e primeiro presidente do comitê de língua esperantista (mais tarde a Academia de Esperanto).\n[…]\nChuck Smith, esperantista americano e criador da Wikipédia em esperanto, um dos mais populares sites de esperanto. Primeiro líder de equipe do curso de esperanto do Duolingo.\n[…]\nFrantišek Lorenz (aportuguesado para Francisco Valdomiro Lorenz), tradutor e filósofo nascido no Império Austro-Húngaro. Um dos primeiros esperantistas do mundo e o segundo no Brasil. Falava mais de cem línguas.\n[…]\nDaniel Bovet, farmacologista italiano e ganhador do Prêmio Nobel de 1957 em Fisiologia ou Medicina, aprendeu esperanto como primeira língua.\n[…]\nA capital foi construída na Rússia, no local da atual Bielorrússia, que hoje faz parte da Polônia. Foi abandonada durante os anos de 1870 a 1880. Explicou os empréstimos nessa língua e registrou os próprios empréstimos nessa língua. Em julho de 1887, foram publicadas em Varsóvia as primeiras obras com a gramática do esperanto. O fundador foi mencionado nas primeiras obras como doutor Esperanto.\n[…]\nLíngua franca\n[…]\n«Oomoto (おほもと)» (em esperanto)"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Mandarim padrão",
      "descricao": "Forma padronizada do chinês, baseada no falar de Pequim, língua oficial da China."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na China continental, o mandarim padrão é chamado de putonghua. O que significa esse nome?",
    "resposta": "Fala comum",
    "fonte": [
      "https://en.wikipedia.org/wiki/Standard_Chinese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Standard_Chinese",
        "situacao": "ok",
        "texto": "Standard Chinese (simplified Chinese: 现代标准汉语; traditional Chinese: 現代標準漢語; pinyin: Xiàndài biāozhǔn hànyǔ), often colloquially called Mandarin Chinese, is the modern standardized form of Mandarin Chinese, largely based on the Beijing dialect. It is the official lingua franca of the People's Republic of China, one of the six official languages of the United Nations, one of the national languages of\n[…]\nIn Mainland China, Standard Chinese is most commonly called Putonghua, while in Taiwan it is most commonly called Guoyu. Among linguists, the language is referred to as Modern Standard Chinese (simplified Chinese: 现代标准汉语; traditional Chinese: 現代標準漢語; pinyin: Xiàndài biāozhǔn hànyǔ) or Modern Standard Mandarin (simplified Chinese: 现代标准官话; traditional Chinese: 現代標準官話; pinyin: Xiàndài biāozhǔn guānhuà). For both terms, the word Modern (现代; 現代; Xiàndài) is sometimes omitted.\n[…]\nThe term Putonghua (普通话; 普通話; 'common tongue') dates back to 1906 in writings by Zhu Wenxiong to differentiate the standard vernacular Mandarin from Literary Chinese and other varieties of Chinese.\n[…]\nFollowing the end of the Chinese Civil War, the People's Republic of China (PRC) continued standardisation efforts on the mainland, and in 1955 officially began using Putonghua (普通话; 普通話; 'common speech') instead of Guoyu, which remains the name used in Taiwan. The forms of Standard Chinese used in China and Taiwan have diverged somewhat since the end of the Civil War, especially in newer vocabulary, and a little in pronunciation.\n[…]\nWith an increase in internal migration in China, the official Putonghua Proficiency Test (PSC) has become popular. Employers often require a level of Standard Chinese proficiency from applicants depending on the position, and many university graduates on the mainland take the PSC before looking for a job.\n[…]\nChinese (Mandarin) at Wikibooks\n[…]\nStandard Chinese travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mandarim_padr%C3%A3o",
        "situacao": "ok",
        "texto": "O mandarim padrão, mais especificamente a língua chinesa moderna padrão, (chinês simplificado: 现代标准汉语; chinês tradicional: 現代標準漢語; pinyin: Xiàndài biāozhǔn hànyǔ) é uma língua oficial da China continental (República Popular da China), das regiões administrativas especiais de Macau e Hong Kong, da ilha de Taiwan (administrada pela República da China) e de Singapura.\n[…]\nCom mais de um bilhão de falantes, o mandarim é o idioma materno mais comum do mundo e, consequentemente, o mais falado da família sinítica. Esses são fatores que, para além da influência da China, caracterizam a língua chinesa como de altíssima relevância social e geopolítica, sendo um dos idiomas oficiais da Organização das Nações Unidas, da Organização para Cooperação de Xangai e do BRICS.\n[…]\nAlém disso, o nome huáyǔ (华语; 華語) é utilizado nas comunidades chinesas do Sudeste Asiático e pode se referir tanto às línguas da China em geral ou, mais especificamente, ao mandarim padrão (principalmente em Singapura e na Malásia).\n[…]\nO nome guóyǔ (国语; 國語), significando língua nacional, é a nomenclatura histórica para o mandarim padrão do final da dinastia Qing e da República da China (1912–1949), sendo utilizado atualmente em Taiwan. Esse termo emergiu no contexto das Reformas Tardias, quando a dinastia Qing tentou, em sua última década, conter os revolucionários e superar o século de humilhação.\n[…]\nEntretanto, o nome adotado para o mandarim padrão na China continental é pǔtōnghuà (普通话; 普通話), significando língua comum. Essa diferença é diretamente derivada do processo histórico da Revolução Chinesa e das reformas conduzidas pelo governo comunista.\n[…]\nWen-Chao Li, Chris (2004). «Conflicting notions of language purity: the interplay of archaising, ethnographic, reformist, elitist and xenophobic purism in the perception of Standard Chinese». Language & Communication (em inglês). 24 (2): 97-133",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Diáspora",
      "descricao": "Conceito que designa a dispersão de um povo para longe de sua terra de origem."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A palavra diáspora, usada para comunidades que vivem longe da terra de origem, vem do grego. O que ela significa?",
    "resposta": "Dispersão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diaspora",
      "https://pt.wikipedia.org/wiki/Diáspora"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diaspora",
        "situacao": "ok",
        "texto": "A diaspora (  dy-ASP-ər-ə) is a population dispersed across multiple regions outside its geographic place of origin, typically comprising people who continue to identify—culturally, politically, religiously, or emotionally—with a particular homeland while residing elsewhere. The term originates from the ancient Greek διασπορά (diaspora, lit. 'dispersion') and was first used this way in reference t\n[…]\nHe suggests that one element of this expansion in use \"involves the application of the term diaspora to an ever-broadening set of cases: essentially to any and every nameable population category that is to some extent dispersed in space\". Brubaker used the WorldCat database to show that 17 out of the 18 books on diaspora published between 1900 and 1910 were on the Jewish diaspora.\n[…]\nDiaspora Internet services have also become important places for maintaining cultural identity and social connections across borders. Through websites, messaging applications, social media sites, and communication forums, the diaspora can remain in contact with family and friends, exchange information, and interact with one another in their countries of origin, which enables them to retain traditions, customs, languages, and collective memories despite their dispersion.\n[…]\nThe term diaspora language, coined in the 1980s, is a sociolinguistic idea referring to a variety of languages spoken by peoples with common roots who have dispersed, under various pressures and often globally. The emergence and evolution of a diaspora language is usually part of a larger attempt to retain cultural identity. Examples are Yiddish, African American Vernacular English, Yoruba, Molise Slavic, Istro-Romanian, Griko, Gallo-Italic of Sicily, Talian, Cocoliche, Lunfardo and Arbëresh.\n[…]\nLivius.org: Diaspora Archived 3 March 2016 at the Wayback Machine\n[…]\nOpen access book on Diasporas"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diáspora",
        "situacao": "ok",
        "texto": "O termo diáspora (em grego clássico: διασπορά, \"dispersão\") define o deslocamento, normalmente forçado ou incentivado, de massas populacionais originárias de uma zona determinada para várias áreas de acolhimento distintas.\n[…]\nEm termos gerais, diáspora pode significar dispersão de qualquer nação ou etnia pelo mundo. Todavia o termo foi originalmente cunhado para designar a migração e colonização, por parte dos gregos, de diversos locais ao longo da Ásia Menor e Mediterrâneo, de 800 a 600 a.C.\n[…]\nÉ usado com muita frequência para fazer referência à dispersão do povo hebreu no mundo antigo, a partir do exílio na Babilônia no século VI a.C. e, especialmente, depois da destruição de Jerusalém em 70 d.C.. E na tradução da Septuaginta (em grego) da Bíblia, surge como uma maldição: \"Serás disperso por todos os reinos da terra.\"\n[…]\nModernamente, o termo diáspora significa não só a dispersão como o seu resultado, isto é, o conjunto dos membros de uma comunidade dispersos por vários países.\n[…]\nPorém as configurações sincretizadas da identidade cultural requerem a noção derridiana de différance, uma diferença que não funciona através dos binarismos, fronteiras veladas que separam finalmente, mas são também places de passage (lugares de passagem) e significados que são posicionais e relacionais, sempre em deslize ao longo de um espectro sem começo nem fim.\""
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Língua árabe",
      "descricao": "Língua semítica falada no Oriente Médio e no norte da África, que deixou muitas palavras no português."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O al que aparece no começo de palavras como alface, almofada e alfaiate é a herança de um artigo de qual língua?",
    "resposta": "Árabe",
    "fonte": [
      "https://en.wikipedia.org/wiki/Influence_of_Arabic_on_other_languages",
      "https://pt.wikipedia.org/wiki/Língua_árabe"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Influence_of_Arabic_on_other_languages",
        "situacao": "ok",
        "texto": "Arabic has had a great influence on other languages, especially in vocabulary. The influence of Arabic has been most profound in those countries visited by Islam or Islamic power.\n[…]\nThese are often recognizable by the initial Arabic article a(l)-, and include common words such as aldeia \"village\" from الضيعة aḍ-ḍīcah, alface \"lettuce\" from الخس al-khass, armazém \"warehouse\" from المخزن al-makhzan, and azeite \"olive oil\" from الزيت az-zayt. From Arabic came also the grammatically peculiar word oxalá \"God willing\", which is an archaism. The frequency of Arabic toponyms is more evident in the south of the country.\n[…]\nHistorically it has been considered that around 15% - 20% of Swahili vocabulary consists of Arabic loanwords, including the name of the language (سَوَاحِلي sawāḥilī, a plural adjectival form of an Arabic word meaning 'of the coasts'). The loanwords date from the era of contact between Arab traders and the Bantu inhabitants of the east coast of Africa, which was also the time period when Swahili emerged as a lingua franca in the region."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_árabe",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nA língua árabe é oficial e/ou uma das mais faladas num continuum geográfico de 22 países situados numa faixa no entorno do Paralelo 30 N e entre os meridianos 15 oeste e 60 leste.\n[…]\nUm importante fator de diferenciação dos dialetos é a influência dos substratos linguísticos (ou seja, das línguas faladas previamente nos locais onde se passou a falar árabe), originando um número significativo de novas palavras, influenciando também, muitas vezes, a pronúncia e a ordem das palavras.\n[…]\nNa gramática tradicional árabe a categoria denominada فعل (fi`l) corresponde a verbos em português. Assim como as demais línguas semíticas, a morfologia verbal está baseada num sistema de raízes triconsonânticas, que possuem um sentido genérico. Por exemplo, as consoantes k t b constituem uma raiz com o sentido básico de 'escrever', q r ʔ expressam a ideia geral de 'ler', ʔ k l 'comer', e assim por diante. A posição dos movimentos e infixos é que precisa o sentido de uma palavra em particular.\n[…]\nAlém dessas regras, há diversas outras regras gramaticais e literárias que ditam tais coisas como que posição na frase é mais apropriada para determinada palavra, regras gramaticais avançadas, morfologia da palavra etc. Essas regras são conhecidas coletivamente em árabe como al-naħu (árabe: النحو), que significa \"a orientação\", e é vista como a ciência que define a orientação adequada da língua árabe.\n[…]\n«Dialectos do árabe» (em inglês)\n[…]\n«Arabic Keyboard» (em inglês). : Teclado virtual em árabe para digitação de textos."
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Língua galega",
      "descricao": "Língua românica falada na Galiza, no noroeste da Espanha."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O galego, falado no noroeste da Espanha, formou na Idade Média uma única língua com qual outro idioma?",
    "resposta": "Português",
    "fonte": [
      "https://en.wikipedia.org/wiki/Galician_language",
      "https://en.wikipedia.org/wiki/Galician-Portuguese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Galician_language",
        "situacao": "ok",
        "texto": "Galician ( gə-LISH-(ee-)ən, UK also  gə-LISS-ee-ən), also known as Galego (endonym: galego), is a Western Ibero-Romance language. Around 2.4 million people have at least some degree of competence in the language, mainly in Galicia, an autonomous community located in northwestern Spain, where it has official status along with Spanish.\n[…]\nPrivate cultural associations, not endorsed by Galician or Portuguese governments, such as the Galician Language Association (Associaçom Galega da Língua) and Galician Academy of the Portuguese Language (Academia Galega da Língua Portuguesa), advocates of the minority Reintegrationist movement, support the idea that differences between Galician and Portuguese speech are not enough to justify regarding them as separate languages: Galician would be simply one variety of Galician-Portuguese, along with European Portuguese; Brazilian Portuguese; African Portuguese; the Fala language spoken in the northwestern corner of Extremadura (Spain); and other dialects.\n[…]\nThe current official Galician orthography is guided by the \"Normas ortográficas e morfolóxicas do Idioma Galego\" (NOMIGa), first introduced in 1982, by the Royal Galician Academy (RAG), based on a report by the Instituto da Lingua Galega (ILG).\n[…]\nIn July 2003, the Royal Galician Academy modified the language normative to admit and promote some archaic Galician-Portuguese forms conserved in modern Portuguese, merging the NOMIG and the main proposals of the moderate sectors of reintegrationism; the resulting orthography is used by the vast majority of media, cultural production and virtually all official matters including education.\n[…]\nAmostra comparativa – Comparison between Galician, Portuguese and Brazilian-Portuguese pronunciation (with sound files) (reintegrationist Galician)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Galician-Portuguese",
        "situacao": "ok",
        "texto": "Galician–Portuguese (Galician: galego-portugués or galaico-portugués; Portuguese: galego-português or galaico-português), also known as Old Galician–Portuguese, Galaic-Portuguese, or (in contexts focused on one of the modern languages) Old Galician, Old Portuguese, Medieval Galician or Medieval Portuguese, was a West Iberian Romance language spoken in the Middle Ages, in the northwest area of the \n[…]\nNunes, José Joaquim. (1932). Cantigas d'amor dos trovadores galego-portugueses. Edição crítica acompanhada de introdução, comentário, variantes, e glossário por –. Coimbra: Imprensa da Universidade (Biblioteca de escritores portugueses) (republished by Lisboa: Centro do Livro Brasileiro, 1972).\n[…]\n———  (1993). \"A caminho de Galiza. Sobre as primeiras composições em galego-português\", in O Cantar dos Trobadores. Santiago de Compostela: Xunta de Galicia, pp. 249–260 (republished in Oliveira 2001b: 65–78).\n[…]\n———  (1997b). \"História de uma despossessão. A nobreza e os primeiros textos em galego-português\", in Revista de História das Ideias 19: 105–136.\n[…]\n———  (2001b). O Trovador galego-português e o seu mundo. Lisboa: Notícias Editorial (Colecção Poliedro da História).\n[…]\nCintra, Luís F. Lindley. (1951–1990). Crónica Geral de Espanha de 1344. Edição crítica do texto português pelo –. Lisboa: Imprensa Nacional-Casa de Moeda (vol. I 1951 [1952; reprint 1983]; vol II 1954 [republished 1984]; vol. III 1961 [republished 1984], vol. IV 1990) (Academia Portuguesa da História. Fontes Narrativas da História Portuguesa).\n[…]\nOn the early documents cited from the late 12th century, please see Ivo Castro, Introdução à História do Português. Geografia da Língua. Português Antigo. (Lisbon: Colibri, 2004), pp. 121–125 (with references).\n[…]\nLatin –  Portuguese document, a.D. 1008\n[…]\nGalician-Portuguese Intangible Heritage\n[…]\nGalician-Portuguese Intangible Heritage -Videos Archived 12 November 2013 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_galega",
        "situacao": "ok",
        "texto": "A língua galega ou galego (pronúncia galega: [ɡaˈleɣo̝]) é a língua ibero-românica ocidental de caráter oficial na Comunidade Autónoma da Galiza, falada também nas Astúrias, Castela e Leão e pela diáspora galega, localizada principalmente na Argentina, Brasil, Cuba e Uruguai.\n[…]\nNo seu momento teve certo uso como língua culta dos reinos da Galiza, Leão e de Portugal. Escrevendo em galego, por exemplo, o rei leonês Afonso X o Sábio, as suas \"Cantigas de Santa Maria\". A sua importância foi tal que se considera a segunda literatura durante a Idade Média só depois do occitano.\n[…]\nDe um ponto de vista político e oficial, o galego é uma língua diferente do português. Assim o determinam as instituições com autoridade do estado espanhol com competências na elaboração na norma oficial de uso na Galiza.\n[…]\nNa escrita, se o galego se grafar seguindo o Acordo Ortográfico de 1990, adotado formalmente pela Academia Galega da Língua Portuguesa, as diferenças são mínimas, existindo apenas algumas variações léxicas e sintáticas. A ortografia reintegrada também seria compreensível para um lusófono, mas na ortografia oficial promovida pela Real Academia Galega, mais próxima à do espanhol e empregue pelas administrações na Galiza, a compreensão fica dificultada.\n[…]\nO artigo feminino uma e os seus derivados, que no galego-português medieval era grafado com ũa, nos dialectos galegos ocidentais é pronunciado com n velar, e nos orientais ficou simplesmente desnasalado (\"ua\", \"algua\"). Na ortografia reintegracionista da Associaçom Galega da Língua, é representado quer com umha, quer com ũa, mas na oficial, unha. (Vale notar que essa pronúncia também é encontrada em vários dialetos do Nordeste brasileiro.)\n[…]\n«Academia Galega da Língua Portuguesa»\n[…]\n«Associação de Amizade Galiza-Portugal»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Língua indonésia",
      "descricao": "Língua oficial da Indonésia, forma padronizada do malaio."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A língua oficial da Indonésia é uma forma padronizada de qual outro idioma, também oficial em Brunei e em Singapura?",
    "resposta": "Malaio",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indonesian_language",
      "https://en.wikipedia.org/wiki/Malay_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indonesian_language",
        "situacao": "ok",
        "texto": "Indonesian (bahasa Indonesia) is the official and national language of Indonesia. It is a standardized variety of Malay, an Austronesian pluricentric macrolanguage that has been used as a lingua franca in the multilingual Indonesian archipelago for centuries. With over 280 million inhabitants, Indonesia ranks as the fourth-most populous nation globally.\n[…]\nThree years later, the Indonesians themselves formally abolished the language and established bahasa Indonesia as the national language of the new nation.\n[…]\nFurther encroachment of English words in Indonesian raises a form of code mixing between Indonesian and English known as bahasa Jaksel (Jaksel means Jakarta Selatan, South Jakarta), which is also known as Indoglish.\n[…]\nConsequently, Indonesians feel little need to harmonise their language with Malaysia and Brunei, whereas Malaysians are keener to coordinate the evolution of the language with Indonesians, although the 1972 Indonesian alphabet reform was seen mainly as a concession of Dutch-based Indonesian to the English-based spelling of Malaysian.\n[…]\nList of loan words of Indonesian language published by the Badan Pengembangan Bahasa dan Perbukuan (The Language Center) under the Ministry of Education and Culture:\n[…]\nAs early as 1988, teachers of the language have expressed the importance of a standardized Bahasa Indonesia bagi Penutur Asing (also called BIPA, literally Indonesian Language for Foreign Speaker) materials (mostly books), and this need became more evident during the 4th International Congress on the Teaching of Indonesian to Speakers of Other Languages held in 2001.\n[…]\nHow many people speak Indonesian?\n[…]\nKBBI Daring (Kamus Besar Bahasa Indonesia dalam jaringan) Archived 16 August 2023 at the Wayback Machine (online version of the Kamus Besar Bahasa Indonesia, by the Language and Book Development Agency, in Indonesian only)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Malay_language",
        "situacao": "ok",
        "texto": "Malay (UK:  mə-LAY; endonym: Bahasa Melayu, Jawi script: بهاس ملايو) is an Austronesian pluricentric macrolanguage native to several islands of Maritime Southeast Asia and the Malay Peninsula on mainland Asia. The language is an official language of Brunei, Malaysia, and Singapore, where the standardised forms are known as Standard Malay.\n[…]\nSeveral varieties of it are standardised as the national language (bahasa kebangsaan or bahasa nasional) of several nation states with various official names: in Malaysia, it is designated as either Bahasa Melayu (\"Malay language\") or in some instances, Bahasa Malaysia (\"Malaysian language\"); in Singapore and Brunei, it is called Bahasa Melayu (\"Malay language\") where it in the latter country refers to a formal standard variety set apart from its own vernacular dialect; in Indonesia, an autonomous normative variety called bahasa Indonesia (\"Indonesian language\") is designated the bahasa persatuan/pemersatu (\"unifying language\" or lingua franca) whereas the term \"Malay\" (bahasa Melayu) refers to vernacular varieties of Malay indigenous to areas of Central to Southern Sumatra and West Kalimantan as the ethnic languages of Malay in Indonesia.\n[…]\nMalay is spoken in Brunei, Indonesia, Malaysia, Timor-Leste, Singapore, southeastern Philippines and southern Thailand. Indonesian is the national language in Indonesia by Article 36 of the 1945 Constitution of the Republic of Indonesia, while \"Malay\" (bahasa Melayu) has been recognised as the ethnic languages of Malay in Indonesia alongside Malay-based trade and creole languages and other ethnic languages. Malaysia and Singapore use a common standard Malay.\n[…]\nIndonesian language\n[…]\nLanguages of Indonesia\n[…]\nKamus Besar Bahasa Indonesia dalam jaringan (Online Great Dictionary of the Indonesian Language published by Pusat Bahasa, in Indonesian only)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_indon%C3%A9sia",
        "situacao": "ok",
        "texto": "O indonésio (em indonésio: bahasa Indonesia) (cujo nome provém das palavras gregas \" Ἰνδός\" e \"νῆσος\", significando \"ilhas indianas\") é o idioma oficial da República da Indonésia, o quarto país mais populoso do mundo. É uma língua da família Austronésia pertencente ao subgrupo das línguas malaio-polinésias, tendo sido adaptada e padronizada com base nos modelos do malaio e do neerlandês. A língua \n[…]\nA educação formal e os meios de comunicação da Indonésia usam a língua indonésia. Apesar de ser a língua oficial do país, muitos indonésios são fluentes em outros idiomas regionais, como o javanês e o sundanês. Em Timor-Leste, que foi ocupado pela Indonésia de 1975 a 1999, o indonésio e o inglês são reconhecidos como línguas de trabalho, sendo o português e o tétum as línguas oficiais.\n[…]\nO indonésio (bahasa Indonesia) e o malaio (bahasa Melayu), o idioma oficial da Malásia, são as duas variantes padronizadas de uma língua chamada, também, de malaio. Além dessas duas variantes, há outras línguas malaio-polinésias que ocupam lugar de idioma materno para a maioria dos indonésios, de modo que apenas alguns restritos grupos familiares consideram o indonésio sua língua dominante.\n[…]\nEm razão da proximidade entre as línguas malaio-polinésias, é comum que haja entendimento, ao menos em parte, entre falantes dessas línguas. O indonésio e o malaio, por exemplo, são línguas mutuamente inteligíveis, ou seja, os falantes de uma língua compreendem razoavelmente os da outra.\n[…]\nEm razão da proximidade dos idiomas falados na Indonésia (originalmente da família Austronésia), como o indonésio, o malaio, as línguas batak, o minangkabau, o javanês, o sundanês e muitas outras, há variadas proximidades entre seus vocábulos, como nos numerais desses idiomas:\n[…]\n\"Minggu\" é um falso amigo que não deve ser confundido entre o indonésio e o malaio: neste, quer dizer \"semana\", mas, naquele, significa \"domingo\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Náuatle",
      "descricao": "Língua uto-asteca falada pelos astecas e ainda hoje por comunidades indígenas do México."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os astecas deixaram ao português palavras como chocolate, tomate e abacate. Que língua eles falavam?",
    "resposta": "Náuatle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nahuatl",
      "https://pt.wikipedia.org/wiki/Língua_náuatle"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nahuatl",
        "situacao": "ok",
        "texto": "Nahuatl (English:  NAH-wah-təl; hispanicized from Nawatl pronounced [ˈnaːwat͡ɬ] ), Aztec, or Mexicano is a language or, by some definitions, a group of languages of the Uto-Aztecan language family. Varieties of Nahuatl are spoken by about 1.7 million Nahuas, most of whom live mainly in Central Mexico and have smaller populations in the United States. Nahuatl has been spoken in central Mexico since\n[…]\nThe Mexica were among the latest groups to arrive in the Valley of Mexico; they settled on an island in the Lake Texcoco, subjugated the surrounding tribes, and ultimately an empire named Tenochtitlan. Mexica political and linguistic influence ultimately extended into Central America, and Nahuatl became a lingua franca among merchants and elites in Mesoamerica, such as with the Maya Kʼicheʼ people.\n[…]\nMany Nahuatl words have been borrowed into the Spanish language, most of which are terms designating things Indigenous to the Americas. Some of these loans are restricted to Mexican or Central American Spanish, but others have entered all the varieties of Spanish in the world. A number of them, such as chocolate, tomato and avocado have made their way into many other languages via Spanish.\n[…]\nFor instance, in English, two of the most prominent are undoubtedly chocolate and tomato (from Nahuatl tōmatl). Other common words are coyote (from Nahuatl coyōtl), avocado (from Nahuatl āhuacatl) and chile or chili (from Nahuatl chilli). The word chicle is also derived from Nahuatl tzictli 'sticky stuff, chicle'. Some other English words from Nahuatl are: Aztec (from aztēcatl); cacao (from Nahuatl cacahuatl 'shell, rind'); ocelot (from ocēlotl).\n[…]\nA Catalogue of Pre-1840 Nahuatl Works Held by The Lilly Library from The Indiana University Bookman No. 11. November 1973: 69–88.\n[…]\nOnline Nahuatl Dictionary – Wired Humanities Projects, University of Oregon"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_náuatle",
        "situacao": "ok",
        "texto": "O náuatle (português brasileiro) ou nauatle (português europeu) (Nawatl, Nawatlahtolli), também chamado de asteca ou mexicano, (pronúncia nativa: [ˈnaːwatɬ] () é uma língua pertencente à família uto-asteca, usada pelo povo náuatle e falada no território atualmente correspondente à região central do México desde pelo menos o século VII. No final do século XX, era falada por pouco menos de um milhão\n[…]\nMuitas palavras do náuatle foram apropriadas pelos idioma espanhol e passaram para centenas de outras línguas; em sua grande maioria, são palavras que designam conceitos nativos ao México central, que os espanhóis ouviram ser mencionados pela primeira vez em seus nomes náuatles, como, por exemplo, \"tomate\", \"abacate\", e \"chocolate\".\n[…]\nOs espanhóis concederam ampla autonomia às administrações locais das cidades indígenas durante este período, e em diversas cidades onde se falava o náuatle o idioma foi a língua administrativa de facto, tanto na forma escrita como falada.\n[…]\nA terminologia utilizada para se descrever as diversas variedades do náuatle falado é aplicada inconsistentemente. Muitos termos são utilizados por diferentes significados, ou então os mesmos grupos recebem nomes diferentes. Por vezes termos mais antigos são substituídos por novos termos, ou pelos termos utilizados no próprio idioma, para designar determinada variedade específica. A própria palavra nahuatl é uma palavra náuatle, derivada de nāwatlahtolli (\"língua clara\").\n[…]\nJá os falantes do náuatle no istmo de Tehuantepec chamam seu idioma de mela'tajtol (\"a língua direita\"). Algumas comunidades de falantes também usam o termo nahuatl como o nome de seu idioma, embora esta pareça ser uma inovação recente. Alguns linguistas identificam comumente os dialetos mais específicos do náuatle adicionando palavras que qualifiquem o nome da vila ou área onde aquela variedade é falada (por exemplo, \"náuatle de Acaxochitlán\")."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Línguas indo-europeias",
      "descricao": "Família de línguas que inclui as românicas, germânicas, eslavas, o grego, o persa e as línguas do norte da Índia."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Apesar da distância entre os países onde são faladas, o que o português, o hindi e o persa têm em comum?",
    "resposta": "São línguas indo-europeias",
    "fonte": [
      "https://en.wikipedia.org/wiki/Indo-European_languages",
      "https://pt.wikipedia.org/wiki/Línguas_indo-europeias"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Indo-European_languages",
        "situacao": "ok",
        "texto": "The Indo-European languages are a language family native to the north of the Indian subcontinent, most of Europe, and Greater Iran, with additional native branches found in regions such as Armenia, parts of the southern Indian subcontinent (Sri Lanka and the Maldives), and even stretching as far as to mainland Southeast Asia (Rohingya language in Myanmar). Historically, Indo-European languages wer\n[…]\nToday the individual Indo-European languages with the most native speakers are Spanish, Hindustani (Hindi and Urdu), English, Portuguese, Bengali, Punjabi, Russian, Marathi, German, French, and Persian; many others spoken by smaller groups are in danger of extinction. Over 3.4 billion people (42% of the global population) speak an Indo-European language as a first language—by far the most of any language family.\n[…]\nThe current academic consensus in the field of linguistics does not accept any genetic relationships of the Indo-European language family with other language families, although several disputed hypotheses propose such relations.\n[…]\nIn the current century, Indo-European languages are spoken by billions of native speakers across all inhabited continents, the largest number by far for any recognized language family. Of the less than a dozen languages with over 100 million native speakers, seven are Indo-European: Spanish, Hindustani, English, Portuguese, Bengali, Punjabi, and Russian.\n[…]\nAdditionally, hundreds of millions of persons worldwide study Indo-European languages as secondary or tertiary languages, including in cultures which have completely different language families and historical backgrounds—there are around 600 million learners of English, for example.\n[…]\nThe overwhelming majority of languages used on the Internet are Indo-European, with English continuing to lead the group; English in general has in many respects become the lingua franca of global communication."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Línguas_indo-europeias",
        "situacao": "ok",
        "texto": "Línguas indo-europeias são uma família linguística nativa do norte do subcontinente indiano, da maior parte da Europa e do planalto iraniano, com ramos nativos adicionais encontrados em regiões como partes da Ásia Central (por exemplo, Tadjiquistão e Afeganistão), sul do subcontinente indiano (Sri Lanka e Maldivas) e Armênia. Historicamente, as também eram faladas na Anatólia e no noroeste da Chin\n[…]\nÉ dividida em vários ramos ou subfamílias, como albanês, armênio, balto-eslavo, celta, germânico, helênico, indo-iraniano e itálico, todos os quais contêm línguas vivas atuais, bem como dois grandes ramos extintos, o anatólico e o tocário. Atualmente, as línguas indo-europeias com o maior número de falantes nativos são inglês, espanhol, português, russo, hindustâni (urdu e hindi), bengali, punjabi, francês, alemão e persa; muitas outras, faladas por grupos menores, correm o risco de extinção.\n[…]\nNa época em que surgiram os primeiros registros escritos, o indo-europeu já havia evoluído para inúmeras línguas, faladas em grande parte da Europa, Ásia Central, Ocidental. Algumas línguas europeias dessa família — inglês, francês, português, russo, espanhol e holandês — expandiram-se por meio do colonialismo no período moderno e agora são faladas na América, Oceania e Ásia do Norte.\n[…]\nVenético: compartilha várias semelhanças com o latim e as línguas itálicas, mas também tem algumas afinidades com outras línguas indo-europeias, especialmente germânicas e celtas.\n[…]\nAtualmente, as línguas indo-europeias são faladas por 3,2 bilhões de falantes nativos em todos os continentes habitados, o maior número entre qualquer família de línguas reconhecida. Das 20 línguas com o maior número de falantes nativos, de acordo com o Ethnologue, 10 são indo-europeias: espanhol, inglês, hindustâni, português, bengali, russo, punjabi, alemão, francês e marati, representando mais de 1,7 bilhão de falantes nativos."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Língua Brasileira de Sinais",
      "descricao": "Língua de sinais usada pela comunidade surda brasileira, reconhecida por lei federal."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Libras, língua de sinais da comunidade surda brasileira, é aparentada com a língua de sinais de qual país europeu?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
      "https://pt.wikipedia.org/wiki/Língua_brasileira_de_sinais"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nHistorical efforts were commonly transcribed using Portuguese words, written in upper case, to stand for each equivalent Libras morpheme.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nIn September 2017, new Libras accessibility requirements took effect in Brazil mandating availability of Brazilian Sign Language for films shown in Brazilian movie theaters. Sign language is displayed to moviegoers on a second screen device. Sign language is stored as a Sign Language Video track in the Digital Cinema Package (DCP), synchronized with the rest of the film.\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nAtravés de diversos movimentos e muita pesquisa na área, foi legitimada como língua a comunicação gestual entre surdos. Foi apenas no fim do século XX  que os movimentos se intensificaram querendo a oficialização da Língua Brasileira de Sinais, em 1993 o projeto de lei entrou na longa batalha para a regulamentação da Libras no país.\n[…]\nEm 2005, através do decreto 5.626 a língua brasileira de sinais foi regulamentada como disciplina curricular. Já em 2007, a estrutura de língua foi aplicada a Libras, já que ela é uma língua natural e possui complexidades próprias e comunicação eficaz. Em 2010 foi regulamentada a profissão de Tradutor/ Intérprete de Libras através da Lei 12.319 de 1° de Setembro de 2010, simbolizando mais uma grande conquista.\n[…]\nA Libras foi reconhecida como a língua oriunda das comunidades surdas do país, através da lei nº10.436/2002, garantido o seu direito de reconhecimento como língua de manifestação e expressão das pessoas surdas no acesso à educação, à saúde, à cultura e ao trabalho.\n[…]\n24 de abril foi oficializado como o Dia Nacional da Língua Brasileira de Sinais.\n[…]\nLíngua de sinais kaapor brasileira"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Língua inglesa",
      "descricao": "Língua germânica nascida na Inglaterra, com grande parte do vocabulário de origem francesa e latina."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "As palavras inglesas beef e pork, para carne de boi e de porco, vêm do francês. Que acontecimento de 1066 explica essa herança?",
    "resposta": "A conquista normanda da Inglaterra",
    "fonte": [
      "https://en.wikipedia.org/wiki/Norman_conquest",
      "https://en.wikipedia.org/wiki/Anglo-Norman_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Norman_conquest",
        "situacao": "ok",
        "texto": "The Norman Conquest of England (or the Conquest) was an 11th-century invasion by an army made up of thousands of Norman, French, Flemish, and Breton troops, all led by the Duke of Normandy, later styled William the Conqueror.\n[…]\nOnce England had been conquered, the Normans faced many challenges in maintaining control. They were few in number compared to the native English population; including those from other parts of France, historians estimate the number of Norman landholders at around 8000.\n[…]\nA measure of William's success in taking control is that, from 1072 until the Capetian conquest of Normandy in 1204, William and his successors were largely absentee rulers. For example, after 1072, William spent more than 75 per cent of his time in France rather than England. While he needed to be personally present in Normandy to defend the realm from foreign invasion and put down internal revolts, he set up royal administrative structures that enabled him to rule England from a distance.\n[…]\nOne of the most obvious effects of the conquest was the introduction of Anglo-Norman, a northern dialect of Old French with limited Nordic influences, as the language of the ruling classes in England, displacing Old English. Norman French words entered the English language, and a further sign of the shift was the usage of names common in France instead of Anglo-Saxon names. Male names such as William, Robert, and Richard soon became common; female names changed more slowly.\n[…]\nAnglo-Norman invasion of Ireland\n[…]\nNorman invasion of Wales\n[…]\nNorman conquest of southern Italy\n[…]\nEssential Norman Conquest from Osprey Publishing\n[…]\nNormans – a background to the Conquest from the BBC"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anglo-Norman_language",
        "situacao": "ok",
        "texto": "Anglo-Norman (Norman: Anglo-Normaund; French: Anglo-normand), also known as Anglo-Norman French, Insular French, and part of the French of England (which includes Anglo-French) was a dialect of Old Norman that was used in England and, to a lesser extent, other places in Great Britain and Ireland during the Anglo-Norman period.\n[…]\nMiddle English was heavily influenced by Anglo-Norman and, later, Anglo-French. W. Rothwell has called Anglo-French 'the missing link' because many etymological dictionaries seem to ignore the contribution of that language in English and because Anglo-Norman and Anglo-French can explain the transmission of words from French into English and fill the void left by the absence of documentary records of English (in the main) between 1066 and c. 1380.\n[…]\nBritish Library, Cotton MS Vitellius A XIII/1 [1] \"Les roys de Engeltere\" (Five rectangles of red linen, formerly used as curtains for the miniatures.ff. 3–6: Eight miniatures of the kings of England from Edward the Confessor (r. 1042–1066) to Edward I (r. 1272–1307); each one except the last is accompanied by a short account of their reign in Anglo-Norman prose.\" \"Roy Phylippe de Fraunce\" \"en englerere: le Roy Jon regna.\"), (1272–1307).\n[…]\nRothwell, William (1993b), 'The 'Faus franceis d'Angleterre': later Anglo-Norman', In Short, Ian (ed.) Anglo-Norman Anniversary Essays, London, 309–326.\n[…]\nTrotter, David (2008), L'Anglo-normand en France: les traces documentaires, Académie des Inscriptions & Belles-Lettres: Comptes rendus des séances de l'année 2008, avril-juin, II, 893–904.\n[…]\nTrotter, David (à paraître a) 'Trové l'avum mis en tiste: comment réduire notre ignorance du lexique de l'anglo-normand', in Oreste Floquet/Gabriele Giannini (eds.), Anglo-Français: linguistique et philologie/Anglo-francese: filologia e linguistica (Paris: Garnier)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conquista_normanda_da_Inglaterra",
        "situacao": "ok",
        "texto": "Conquista normanda da Inglaterra foi a invasão e ocupação da Inglaterra anglo-saxã no século XI por um exército normando, bretão e francês liderado pelo duque Guilherme II da Normandia, mais tarde Guilherme, o Conquistador.\n[…]\nUma vez conquistada a Inglaterra, os normandos enfrentaram muitos desafios para manter o controle. Eles estavam em número reduzido em comparação com a população nativa inglesa; incluindo os de outras partes da França, os historiadores estimam que o número de colonos normandos era de cerca de 8 000.\n[…]\nEnquanto precisava estar pessoalmente presente na Normandia para defender o reino de uma invasão estrangeira e sufocar as revoltas internas, ele montou estruturas administrativas reais que lhe permitiram governar a Inglaterra à distância.\n[…]\nUm dos efeitos mais evidentes da conquista foi a introdução do anglo-normando, um dialeto setentrional do francês antigo, como a língua das classes dominantes na Inglaterra, deslocando o inglês antigo. Palavras em francês entraram no idioma inglês, e mais um sinal da mudança foi o uso de nomes próprios comuns na França em vez de nomes anglo-saxões. Nomes masculinos, como William (Guilherme), Robert (Roberto) e Richard (Ricardo), logo se tornaram comuns; nomes femininos mudaram mais lentamente.\n[…]\nEstima-se que 8 000 normandos e outros continentais se estabeleceram na Inglaterra, como resultado da conquista, ainda que não seja possível estabelecer números exatos. Alguns desses novos moradores casaram-se com ingleses nativos, mas a extensão desta prática nos anos imediatamente após Hastings não é clara. Vários casamentos são atestados entre homens normandos e mulheres inglesas durante os anos anteriores a 1100, mas tais casamentos eram incomuns.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Língua romena",
      "descricao": "Língua românica oficial da Romênia e da Moldávia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Cercado de línguas eslavas e do húngaro, o romeno descende do latim por causa da conquista romana de qual antiga região?",
    "resposta": "Dácia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romanian_language",
      "https://en.wikipedia.org/wiki/Roman_Dacia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romanian_language",
        "situacao": "ok",
        "texto": "Romanian (obsolete spelling: Roumanian; endonym: limba română [ˈlimba roˈmɨnə] , or românește [romɨˈneʃte], lit. 'in Romanian') is the official and main language of Romania and Moldova. Romanian is part of the Eastern Romance sub-branch of Romance languages, a linguistic group that evolved from several dialects of Vulgar Latin which separated from the Western Romance languages in the course of the\n[…]\nThe history of the Romanian language started in the Roman provinces north of the Jireček Line in Classical antiquity but there are three main hypotheses about its exact territory: the autochthony thesis (it developed in left-Danube Dacia only), the discontinuation thesis (it developed in right-Danube provinces only), and the \"as-well-as\" thesis that supports the language development on both sides of the Danube.\n[…]\nRomanian descended from the Latin spoken in the Roman provinces of Southeastern Europe north of the Jireček Line (a hypothetical boundary between the dominance of Latin and Greek influences). The exact geographic origin and continuity (especially after Roman withdrawal from Dacia in the 3rd century) is still debated among historians.\n[…]\nIt quickly reached a high point with the printing of Dacia Literară, a journal founded by Mihail Kogălniceanu and representing a literary society, which together with other publications like Propășirea and Gazeta de Transilvania spread the ideas of Romantic nationalism and later contributed to the formation of other societies that took part in the Revolutions of 1848.\n[…]\nThere, the Romanian dialect spoken north of the Danube is called lingua Daco-Romana to emphasize its origin and its area of use, which includes the former Roman province of Dacia, although it is spoken also south of the Danube, in Dobruja, the Timok Valley and northern Bulgaria.\n[…]\n1.43% – loans from Hungarian;\n[…]\nLat. lingua → Rom. lìmbă (tongue, language)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Roman_Dacia",
        "situacao": "ok",
        "texto": "Roman Dacia ( DAY-shə; also known as Dacia Traiana (Latin for 'Trajan’s Dacia'); or Dacia Felix, lit. 'Fortunate Dacia') was a province of the Roman Empire from 106 to 271–275 AD. Its territory consisted of what are now the regions of Oltenia, Transylvania and Banat (today all in Romania). During Roman rule, it was organized as an imperial province on the borders of the empire. It is estimated tha\n[…]\nWith the Roman army ensuring the maintenance of the Pax Romana, Roman Dacia prospered until the Crisis of the Third Century. Dacia evolved from a simple rural society and economy to one of material advancement comparable to other Roman provinces. There were more coins in circulation in Roman Dacia than in the adjacent provinces.\n[…]\nThose who survived on the borders of the empire were apparently called Carpodacae (\"Carps from Dacia\").\n[…]\nBased on the written accounts of ancient authors such as Eutropius, it had been assumed by some Enlightenment historians such as Edward Gibbon that the population of Dacia Traiana was moved south when Aurelian abandoned the province. However, the fate of the Romanized Dacians, and the subsequent origin of the Romanians, became mired in controversy, stemming from political considerations originating during the 18th and 19th centuries between Romanian nationalists and the Austro-Hungarian Empire.\n[…]\nToponymic analysis of place names in the former Roman Dacia north of the Danube suggests that, on top of names which have a Thracian, Scytho-Iranian, Celtic, Roman and Slavonic origin, there are some un-Romanized Dacian place names which were adopted by the Slavs (possibly via the Hungarians) and transmitted to the Romanians, in the same way that some Latin place names were transmitted to the Romanians via the Slavs (such as \"Olt\").\n[…]\nDacia Mediterranea\n[…]\nDacia Ripensis\n[…]\nList of ancient cities in Thrace and Dacia\n[…]\nList of Roman governors of Dacia Traiana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_romena",
        "situacao": "ok",
        "texto": "A língua romena (limba română), ou simplesmente o romeno, é uma língua românica. Pertence ao ramo das línguas românicas orientais, sendo o idioma mais falado deste grupo com bastante margem. Como todas as línguas românicas (incluindo o português), o romeno descende do latim vulgar.\n[…]\nDepois da conquista romana, a Dácia se transformou numa província romana e o latim vulgar se converteu na língua usada pela administração e pelo comércio. Há que se destacar que só uma pequena parte da Dácia (o que hoje é a Romênia) foi romanizada. A maior parte do território estava povoada por Dácios livres os quais nunca estiveram sob o controle romano.\n[…]\nAcredita-se que todos os dialetos romenos estiveram unificados até, aproximadamente, algum momento entre os séculos VII e X, antes que as línguas eslavas se aproximassem dos povos de fala dácia. E ainda as variações do dialeto daco-romeno (o qual se fala por toda a Romênia) são insignificantes, o que chama atenção porque até a era moderna quase não havia contato entre os romenos de regiões distintas.\n[…]\nO dácio era uma língua indo-europeia falada pelos geto-dácios. Pressupõe-se que teria sido a primeira língua que influenciara o latim falado na Dácia, embora se saiba pouquíssimo sobre essa língua. Foram encontradas, aproximadamente, 300 palavras puramente romenas (em todos os dialetos) ou correspondentes em albanês, sobre as quais se acredita que poderiam ter sido herdadas do idioma dácio, muitas delas ligadas à vida pastoril (por exemplo: balaur, brânză, mal; a se vedea).\n[…]\nA influência continuou na Idade Média, especialmente através do uso do eslavo eclesiástico no quadro dos serviços religiosos, até o século XVIII. As outras línguas vizinhas (todas de origem eslava, exceto o húngaro) influenciaram o romeno.\n[…]\nEis o alfabeto romeno:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Baby boom",
      "descricao": "Grande aumento da natalidade registrado em vários países no período posterior à Segunda Guerra Mundial."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O forte aumento de nascimentos conhecido como baby boom aconteceu em vários países logo depois de qual acontecimento?",
    "resposta": "Segunda Guerra Mundial",
    "fonte": [
      "https://en.wikipedia.org/wiki/Baby_boomers",
      "https://pt.wikipedia.org/wiki/Baby_boom"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Baby_boomers",
        "situacao": "ok",
        "texto": "Baby boomers, often shortened to boomers, are the demographic cohort preceded by the Silent Generation and followed by Generation X. The generation is often defined as people born from 1946 to 1964. These years span the mid-20th-century baby boom that followed the end of World War II. The dates, the demographic context, and the cultural identifiers may vary by country. Most boomers are the parents\n[…]\nFrench politician Michèle Delaunay in her book Le Fabuleux Destin des Baby-Boomers (2019), places the baby-boom generation in France between 1946 and 1973, and in Spain between 1958 and 1975. Another French academic, Jean-François Sirinelli, in an earlier study, Les Baby-Boomers: Une génération 1945-1969 (2007) denotes the generation span between 1945 and 1969.\n[…]\nAt the same time, the postwar baby boom and subsequently falling fertility rate seemed to jeopardize America's Social Security system as the baby boomers retire in the early 21st century.\n[…]\nThe enormous baby boom enabled a vast consumer market and popular culture centered about the preferences and desires of the young. Prosperity was taken for granted. Indeed, for older boomers who came of age in the 1960s, the interwar experience of mass unemployment and stable or falling prices was confined to the history books, and full employment and inflation were the norm. Those with higher standards of living and educational levels were often the most demanding of betterment.\n[…]\nThanks to the Baby Boomers, materialism became the norm in American culture by the time Generation X came of age.\n[…]\nOK boomer\n[…]\nA group where we all pretend to be boomers\n[…]\nGibney, Bruce Cannon (2017). A Generation of Sociopaths: How the Baby Boomers Betrayed America. Hachette Books. ISBN 978-0-316-39578-6.\n[…]\nBooming: Living Through the Middle Ages - The New York Times series about baby boomers\n[…]\nBaby boomers of New Zealand and Australia\n[…]\nBoomer Revolution, CBC documentary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Baby_boom",
        "situacao": "ok",
        "texto": "Baby Boom (em tradução literal  \"explosão de bebês\") é uma definição genérica para  uma explosão demográfica decorrente do aumento súbito do crescimento vegetativo de uma população, ou seja, pelo grande número de nascimentos.\n[…]\nEm geral, a expressão baby boomers refere-se às pessoas nascidas nos primeiros anos posteriores à Segunda Guerra Mundial, entre 1946 e 1964, período em que se registrou uma explosão populacional, nos Estados Unidos, em decorrência de um aumento importante da taxa de natalidade. Indivíduos nascidos nesse período foram jovens durante as décadas de 60 e 70 e viveram as importantes transformações culturais e sociais dessas duas décadas.\n[…]\nHoje nos Estados Unidos existe a expectativa de ocorrência de novo Baby Boom, devido ao fato de casais com muitas crianças estarem ficando associados com luxo e ostentação, visto que se constatou a tendência da elite americana, devido a maior capacidade financeira, ter até 50% mais filhos que os pobres americanos. Alguns exemplos de ricos americanos com muitos filhos são Donald Trump, Angelina Jolie, Will Smith, Tom Cruise e Madonna.\n[…]\nBaby boomers\n[…]\nExplosão demográfica"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Braille",
      "descricao": "Sistema de escrita e leitura tátil para pessoas cegas, formado por pontos em relevo."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "No braile, cada letra é formada numa pequena célula de pontos em relevo. Quantos pontos tem essa célula?",
    "resposta": "Seis",
    "fonte": [
      "https://en.wikipedia.org/wiki/Braille",
      "https://pt.wikipedia.org/wiki/Braille"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braille ( BRAYL; French: [bʁaj] ) is a tactile writing system used by blind or visually impaired people. It can be read either on embossed paper or by using refreshable braille displays that connect to computers and smartphone devices. Braille can be written using a slate and stylus, a braille writer, an electronic braille notetaker or with the use of a computer connected to a braille embosser. Fo\n[…]\nHowever, some codes have quite different tactile versus visual interpretations and most are not even defined in Braille ASCII.)\n[…]\nThe Unicode standard encodes 6-dot and 8-dot braille glyphs according to their binary appearance, rather than following their assigned numeric order. Dot 1 corresponds to the least significant bit of the low byte of the Unicode scalar value, and dot 8 to the high bit of that byte.\n[…]\nThe Unicode block for braille is U+2800 ... U+28FF. The mapping of patterns to characters etc. is language dependent: even for English for example, see American Braille and English Braille.\n[…]\nEvery year on 4 January, World Braille Day is observed internationally to commemorate the birth of Louis Braille and to recognize his efforts. Although the event is not considered a public holiday, it has been recognized by the United Nations as an official day of celebration since 2019.\n[…]\nThe 200th anniversary of the launch of braille was celebrated in 2024. In the UK, the Royal National Institute of Blind People has held celebrations from September 2024 until August 2025.\n[…]\nThere is a variety of contemporary electronic devices that serve the needs of blind people that operate in Braille, such as refreshable braille displays and braille e-books that use different technologies for transmitting graphic information of different types (pictures, maps, graphs, texts, etc.).\n[…]\nBraille Part 1 Text To Speech For The Visually Impaired YouTube\n[…]\nBraille information and advice – Sense UK\n[…]\nBraille at Omniglot"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braile ou braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. É tradicionalmente escrito em papel relevo. Os usuários do sistema Braille podem ler em telas de computadores e em outros suportes eletrônicos graças a um mostrador em braile atualizáveis. Eles podem escrever em braile com reglete e punção, máquina de escrever em braille, notetaker em braille ou computa\n[…]\nEm inglês, o Braille tinha três níveis de codificação:\n[…]\nUma célula Braille completa inclui seis pontos dispostos em duas linhas verticais, cada uma com três pontos. As posições dos pontos são identificadas por números de um a seis. São 63 combinações possíveis para usar um ou mais pontos e 64 combinações possíveis considerando o espaço em branco. Uma única célula pode ser usada para representar uma letra do alfabeto, um número, um sinal de pontuação ou mesmo uma palavra inteira.\n[…]\nA solução de Braille foi usar células de 6 pontos e atribuir um padrão específico para cada letra do alfabeto. Inicialmente, o Braille era uma transliteração um–para–um da ortografia francesa, mas logo várias abreviaturas, contrações e até mesmo logogramas foram desenvolvidos. Isto criou um sistema muito mais parecido com a taquigrafia. O sistema inglês expandido chamado de Braille de grau 2 estava completo em 1905.\n[…]\nOs textos acadêmicos são às vezes escritos em um script de oito em vez de seis pontos por célula, permitindo-lhes codificar um maior número de símbolos. O Braille luxemburguês adotou células de oito pontos para uso geral. Por exemplo, adiciona um ponto abaixo de cada letra para derivar sua variante com letra maiúscula.\n[…]\nCada célula braille possui 6 pontos de preenchimento, permitindo 63 combinações. Alguns consideram a célula vazia como um símbolo também, totalizando 64 combinações. Assim, podem-se designar combinações de pontos para todas as letras e para a pontuação da maioria dos alfabetos."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Línguas da Bolívia",
      "descricao": "Conjunto de idiomas reconhecidos como oficiais pela Constituição boliviana de 2009, o espanhol e dezenas de línguas indígenas."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Além do espanhol, quantas línguas indígenas a Constituição da Bolívia de 2009 reconhece como oficiais?",
    "resposta": "36",
    "distratores": [
      "12",
      "24",
      "50"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Bolivia",
      "https://en.wikipedia.org/wiki/Constitution_of_Bolivia"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Bolivia",
        "situacao": "ok",
        "texto": "The languages of Bolivia include Spanish and several dozen indigenous languages, most prominently Aymara, Quechua, Chiquitano, Guaraní and the Bolivian Sign Language (closely related to the American Sign Language). Indigenous languages and Spanish are official languages of the state according to the 2009 Constitution. The constitution says that all indigenous languages are official, listing 36 spe\n[…]\nThe following languages are listed as official languages in the Constitution of Bolivia.\n[…]\nIn 2019, the Bolivian government and the Plurinational Institute for the Study of Languages and Cultures (Ipelec) announced plans to extend constitutional recognition to three additional indigenous languages.\n[…]\nThese requirements appear in Article 234 of the 2009 Constitution and the General Law of Linguistic Rights and Policies (Law 269 of August 2, 2012); the law provided a three-year deadline to government functionaries, although there was no immediate punishment for officials who failed to comply. Departmental and municipal autonomous governments are required to use the languages of their territory, always including Spanish.\n[…]\nBolivia's national anthem has been translated into six indigenous languages: Aymara, Bésiro-Chiquitano, Guaraní, Guarayu, Quechua, and Mojeño-Trinitario.\n[…]\nSo of the 37 languages declared official by the constitution of 2009, 23 are spoken by fewer than 1,000 people and 2 are extinct (puquina and machajuyai-kallawaya).\n[…]\nStandard German is spoken by 160,000 of whom about 70,000 are Mennonites in Santa Cruz Department. These Mennonites speak Plautdietsch, a dialect of the Low German language, as everyday language but use Standard German for reading and writing and as formal language e.g. in church. Portuguese is also spoken near Bolivia's border with Brazil and around 0.2% of Bolivia speaks it as their mother tongue.\n[…]\nIndigenous peoples in Bolivia\n[…]\nAymara language\n[…]\nGuarani language"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Constitution_of_Bolivia",
        "situacao": "ok",
        "texto": "The Constitution of Bolivia, officially known as the Political Constitution of the State (Spanish: Constitución Política del Estado) is the supreme law of Bolivia. It was adopted on 7 February 2009 and superseded the Constitution of 1967. It is the seventeenth constitution in the country's history; previous constitutions were enacted in 1826, 1831, 1834, 1839, 1843, 1851, 1861, 1868, 1871, 1878, 1\n[…]\nThe 2009 Constitution defines Bolivia as a unitary plurinational, and secular (rather than a Catholic, as before) state, formally known as the Plurinational State of Bolivia. It calls for a mixed economy of state, private, and communal ownership; restricts private land ownership to a maximum of 5,000 hectares (12,400 acres); and recognizes a variety of autonomies at the local and departmental level.\n[…]\nThe Constitution is established as the supreme law of the Bolivian state, and 36 indigenous languages as well as Spanish are declared official languages. All departmental governments must use, as official languages, one indigenous language in addition to Spanish.\n[…]\nThe 2009 Constitution of Bolivia states that the country has an unrenounceable right over the territory that gives it access to the Pacific Ocean and its maritime space. This is understood as Chilean territory that Bolivia ceded in Treaty of Peace and Friendship of 1904 between Chile and Bolivia after the War of the Pacific which left Bolivia a landlocked country. The text also pledges to achieve resolution to the issue \"through peaceful means.\"\n[…]\nBolivian constitutional referendum, 2009\n[…]\nBolivian constitutional referendum, 2016\n[…]\nConstitutionalism\n[…]\nText of the 2009 Constitution (PDF) (in Spanish)\n[…]\nEnglish translation of 2009 Constitution (PDF)\n[…]\nMiradas. Nuevo Texto Constitucional (A Closer Look: Bolivia's New Constitution) IDEA, Vice Presidency of Bolivia, Universidad Mayor de San Andrés, 2010. ISBN 978-91-85724-84-0 (in Spanish)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Idiomas_da_Bol%C3%ADvia",
        "situacao": "ok",
        "texto": "Na Bolívia, são falados o espanhol, quechua, aimara, guaraní e uma variedade de línguas indígenas de menor uso. Durante o Censo de 2001, 47% da população declarou falar alguma língua indígena, enquanto 36% a tinha como língua materna. Mais de trinta e três por cento (33,2%) da população era bilíngue, em contraste com os 11,6% de monolingues indígenas e os 49,8% de hispanofalantes monolingües.\n[…]\nNo altiplano e nas regiões subandinas, os idiomas falados são o aimara e o quechua sureño, além do chipaya. Na região oriental dos Llanos, há uma maior diversidade de línguas indígenas (cerca de 33) , embora faladas em menor proporção dentro das localidades étnicas e algumas em via de extinção. Entre estas línguas se encontram o chiriguano (o boliviano oriental) e o sambá (o boliviano ocidental). Assim, a Bolívia é o país com o maior número de línguas oficiais no mundo.\n[…]\nConforme a Constituição Política do Estado, vigente desde 7 de fevereiro de 2009, data em que foi publicada pela Gaceta Oficial (órgão oficial do Estado destinado a registrar as leis e normas do Poder Executivo), o país reconhece como idiomas oficiais do Estado, além do castelhano, todos os idiomas das nações e povos indígenas, como reza o seu Artigo quinto:\n[…]\nSão, portanto, idiomas oficiais do Estado Boliviano:\n[…]\nOs números sem parênteses são os falantes da língua indígena e os números com parênteses referem-se à população total do grupo étnico.\n[…]\nComparação lexical de várias línguas indígenas faladas na área linguística Mamoré-Guaporé da Bolívia:\n[…]\nMétraux, Alfred. 1948. The tribes of Eastern Bolivia and the Madeira headwaters. In: J. Steward (ed.), Handbook of South American Indians, vol. 3:349-360, 381-506. Washington, Bureau of American Ethnology.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Mandarim padrão",
      "descricao": "Forma padronizada do chinês, baseada no falar de Pequim, língua oficial da China."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No mandarim padrão, a mesma sílaba muda de sentido conforme o tom. Sem contar o tom neutro, quantos tons ele tem?",
    "resposta": "Quatro",
    "distratores": [
      "Dois",
      "Seis",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Standard_Chinese_phonology",
      "https://en.wikipedia.org/wiki/Standard_Chinese"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Standard_Chinese_phonology",
        "situacao": "ok",
        "texto": "The phonology of Standard Chinese has historically derived from the Beijing dialect of Mandarin. However, pronunciation varies widely among speakers, who may introduce elements of their local varieties. Television and radio announcers are chosen for their ability to affect a standard accent. The sound system has not only segments—i.e. vowels and consonants—but also tones, and each syllable has one\n[…]\nOn the other hand, in Standard Chinese, the average word has almost exactly two syllables, eliminating most homophony issues, even when tone is disregarded, especially when context is taken into account. (Still, due to the limited phonetic inventory, homophonic puns in Mandarin Chinese are very common and important in Chinese culture.)\n[…]\nStatistically, tones are as important as vowels in Standard Chinese.\n[…]\nIn Standard Chinese, about 15–20% of the syllables in written texts are considered unstressed, including certain suffixes, clitics, and particles. Second syllables of some disyllabic words are also unstressed in Northern Mandarin accents, but many Mandarin speakers in Southern China tend to preserve their inherent tone.\n[…]\nHowever, the \"spreading\" theory incompletely characterizes the neutral tone, especially in sequences where more than one neutral-tone syllable is found adjacent. In Modern Standard Mandarin as applied in A Dictionary of Current Chinese, the second syllable of words with a 'toneless final syllable variant' (重·次輕詞語) can be read with either a neutral tone or with the normal tone.\n[…]\nAnother function of voice pitch is to carry intonation. Chinese makes frequent use of particles to express certain meanings such as doubt, query, command, etc., reducing the need to use intonation. However, intonation is still present in Chinese (expressing meanings rather similarly as in standard English), although there are varying analyses of how it interacts with the lexical tones."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Standard_Chinese",
        "situacao": "ok",
        "texto": "Standard Chinese (simplified Chinese: 现代标准汉语; traditional Chinese: 現代標準漢語; pinyin: Xiàndài biāozhǔn hànyǔ), often colloquially called Mandarin Chinese, is the modern standardized form of Mandarin Chinese, largely based on the Beijing dialect. It is the official lingua franca of the People's Republic of China, one of the six official languages of the United Nations, one of the national languages of\n[…]\nIn Mainland China, Standard Chinese is most commonly called Putonghua, while in Taiwan it is most commonly called Guoyu. Among linguists, the language is referred to as Modern Standard Chinese (simplified Chinese: 现代标准汉语; traditional Chinese: 現代標準漢語; pinyin: Xiàndài biāozhǔn hànyǔ) or Modern Standard Mandarin (simplified Chinese: 现代标准官话; traditional Chinese: 現代標準官話; pinyin: Xiàndài biāozhǔn guānhuà). For both terms, the word Modern (现代; 現代; Xiàndài) is sometimes omitted.\n[…]\nThe term Putonghua (普通话; 普通話; 'common tongue') dates back to 1906 in writings by Zhu Wenxiong to differentiate the standard vernacular Mandarin from Literary Chinese and other varieties of Chinese.\n[…]\nIn Malaysia, Mandarin has been adopted by local Chinese-language schools as the medium of instruction with the standard shared with Singaporean Chinese. Together influenced by the Singaporean Speak Mandarin Campaign and Chinese culture revival movement in the 1980s, Malaysian Chinese started their own promotion of Mandarin too, and similar to Singapore, but to a lesser extent, experienced language shift from other Chinese variants to Mandarin.\n[…]\nWith an increase in internal migration in China, the official Putonghua Proficiency Test (PSC) has become popular. Employers often require a level of Standard Chinese proficiency from applicants depending on the position, and many university graduates on the mainland take the PSC before looking for a job.\n[…]\nYayan (Old Chinese)\n[…]\nStandard Chinese travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Fonologia_do_chin%C3%AAs_mandarim",
        "situacao": "ok",
        "texto": "Este artigo resume a fonologia do chinês mandarim, em seu dialeto padrão.\n[…]\nO mandarim padrão é a variação do mandarim tal como é falado nas regiões urbanas de Pequim. Os elementos do sistema linguístico não envolvem apenas os segmentos vocálicos e consonantais, também inclui-se os tons que são aplicados em cada sílaba. O mandarim possui distinção fonêmica de 4 tons, além do tom neutro usado em sílabas lassas.\n[…]\nMuitas sílabas do chinês contêm ditongos, e são analisados como sequências de dois fonemas. Por exemplo, a sílaba bai, pronunciada [paɪ̯], é representado fonemicamente como /pai/.\n[…]\nO mandarim, assim como todas as outras línguas chinesas, é uma língua tonal. Ou seja, em adição às consoantes e às vogais, a entoação de cada sílaba é usada para distinguir uma palavra da outra. Falantes não nativos do chinês podem apresentar dificuldades no domínio da entoação, no entanto a pronúncia do tom correto é essencial para que haja inteligibilidade devido ao vasto número de palavras do idioma que só se difere pelo tom.\n[…]\nA tabela abaixo mostra os quatro principais tipos de entoação do mandarim. Os diacríticos utilizados no Pinyin também existem no Alfabeto Fonético Internacional, porém representam entoações diferentes do que as entoações representadas em Pinyin e podem ser confundidos.\n[…]\nDuanmu, San (2000), The Phonology of Standard Chinese (PDF), Oxford: Oxford University Press\n[…]\nLee, Wai-Sum; Zee, Eric (2003), «Standard Chinese (Beijing)» (PDF), Journal of the International Phonetic Association, 33 (1): 109–112, doi:10.1017/S0025100303001208",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Bélgica",
      "descricao": "País da Europa Ocidental, com capital em Bruxelas, dividido entre comunidades de línguas diferentes."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "As línguas oficiais da Bélgica são o holandês, o francês e qual outra, falada por uma pequena comunidade no leste do país?",
    "resposta": "Alemão",
    "distratores": [
      "Luxemburguês",
      "Inglês",
      "Valão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Belgium",
      "https://pt.wikipedia.org/wiki/Bélgica"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Belgium",
        "situacao": "ok",
        "texto": "As a result of being in between Latin and Germanic Europe, and historically being split between different principalities, the Kingdom of Belgium has three official languages: Dutch,  French, and German. A number of non-official, minority languages and dialects are spoken as well.\n[…]\nMuch like English, Flemish dialects have adopted more French and other Romance vocabulary through mutual cultural exchange throughout history when compared with other Dutch dialects. As such, they are not always readily intelligible for Dutch speakers outside Flanders. Nevertheless, linguists regard these as varieties of Dutch. Words which are unique to Belgian Dutch are called belgicisms (as are words used primarily in Belgian French).\n[…]\nThe second-most spoken primary (Belgian) language, used natively by approximately one third of the population, is French. It is the official language of the French Community (which, like the Flemish Community, is a political entity), the dominant language in Wallonia (having also a small German-speaking Community), as well as the Brussels-Capital Region. Almost all of the inhabitants of the Capital region speak French as either their primary language (50%) or as a lingua franca (45%).\n[…]\nMany Flemish people also speak French as a second language. Belgian French is in most respects identical to the French of France, but differs in some points of vocabulary, pronunciation, and semantics.\n[…]\nAnother language related to French, and also a historic language of the region, Picard was recognized in 1990 by the government of the French Community. Picard has been historically based in France, with speakers also in the western part of Wallonia.\n[…]\nChampenois was also legally recognized in 1990. It is mainly spoken in Champagne, France, and a small part of Wallonia."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bélgica",
        "situacao": "ok",
        "texto": "Bélgica (em neerlandês: België [ˈbɛl.ɣi.jə] (); em francês: Belgique [bɛlʒik] (); em alemão: Belgien [ˈbɛlɡiən] ()), oficialmente Reino da Bélgica (em neerlandês: Koninkrijk België; em francês: Royaume de Belgique; em alemão: Königreich Belgien), é um país situado na Europa ocidental. É um dos membros fundadores da União Europeia (UE), inclusive hospedando a sede, bem como as de outras grandes org\n[…]\nA Região de Bruxelas, oficialmente bilíngue, é um enclave de maioria francófona na região flamenga e tem 10% da população. Uma pequena comunidade de língua alemã existe no leste da Valónia. A diversidade linguística da Bélgica e conflitos políticos e culturais são refletidos na história política e no complexo sistema de governo do país.\n[…]\nA Bélgica tem três idiomas oficiais, que estão na ordem da população falante nativa na Bélgica: o neerlandês, francês e alemão. Um certo número de línguas minoritárias não oficiais são faladas também.\n[…]\nComo não existe censo, não existem dados estatísticos oficiais sobre a distribuição ou o uso das três línguas oficiais da Bélgica ou de seus dialetos. No entanto, vários critérios, incluindo a língua(s) dos pais, da educação, ou do estatuto de segunda língua de origem estrangeira, podem fornecer valores sugeridos. Uma estimativa de 59%  da população belga fala holandês (muitas vezes coloquialmente referido como \"flamengo\") e o francês é falado por 40% da população.\n[…]\nO total de falantes do holandês é de 6,23 milhões, concentrados na região da Flandres no norte, enquanto os falantes de francês compreendem 3,32 milhões na Valônia. A Comunidade de língua alemã é composta de 73 mil pessoas no leste da Região da Valônia, cerca de 10 mil alemães e 60 mil cidadãos belgas são falantes do alemão. Cerca de 23 mil falantes do alemão vivem em municípios próximos a comunidade oficial germanófona.\n[…]\nAlemão (numa pequena região no leste do país)."
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Alfabeto português",
      "descricao": "Conjunto de letras usado para escrever a língua portuguesa, fixado em 26 letras pelo Acordo Ortográfico de 1990."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Com o Acordo Ortográfico de 1990, o alfabeto português passou a ter oficialmente vinte e seis letras. Quais três letras foram incluídas?",
    "resposta": "K, W e Y",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
      "https://pt.wikipedia.org/wiki/Alfabeto_português"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
        "situacao": "ok",
        "texto": "Acordo Ortográfico da Língua Portuguesa de 1990 (abreviado AO90), também denominado Ortografia Unificada da Língua Portuguesa, é um tratado internacional firmado em 1990 com o objetivo de criar uma ortografia unificada para o português, a ser usada por todos os países de língua oficial portuguesa (lusófonos); foi assinado por representantes oficiais de Angola, Brasil, Cabo Verde, Guiné-Bissau, Moç\n[…]\nO Acordo Ortográfico de 1990 chegou à década de 2020 sem adoção completa pelos países de língua oficial portuguesa e sem atingir seus objetivos de unificação da ortografia e compilação de um vocabulário comum à lusofonia.\n[…]\nAnexo I — Acordo Ortográfico da Língua Portuguesa (1990): é uma lista de vinte e uma bases ortográficas, em que se discrimina o novo alfabeto da língua portuguesa e as caraterísticas da nova ortografia, com exemplos.\n[…]\nInserção do alfabeto: uma inovação do texto do Acordo Ortográfico de 1990 em relação a documentos idênticos anteriores é a inclusão do alfabeto português que passa a integrar também as letras k, w e y.\n[…]\nIsto deve-se, principalmente, ao facto de os dicionários da língua já registarem estas letras, pois existe um razoável número de palavras do léxico português iniciado por elas; e também porque já existem muitas palavras que se escrevem com aquelas letras nos países africanos de língua oficial portuguesa. Apesar da inclusão no alfabeto destas três letras, mantiveram-se as regras anteriores que restringem o seu uso, pois existem outros grafemas com o mesmo valor fónico daquelas.\n[…]\nNo entanto, em 18 de março de 2009, o presidente da Academia Brasileira de Letras, Cícero Sandroni, entregou a três ministros do governo brasileiro a nova edição revista e atualizada do Vocabulário Ortográfico da Língua Portuguesa, com a grafia de 381.128 entradas obedecendo às regras do Acordo Ortográfico e dirimindo várias dúvidas e omissões presentes no texto do Acordo."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_português",
        "situacao": "ok",
        "texto": "O alfabeto português varia conforme o Acordo Ortográfico de 1945 ou de 1990.\n[…]\nCom o Acordo Ortográfico de 1945 (válido em Portugal, nos PALOP e demais ex-possessões ultramarinas portuguesas) e o Formulário Ortográfico de 1943 (válido somente no Brasil), os dígrafos ç, ch, lh e nh foram removidos pelo fato de não serem letras, senão variações ou combinações de outras letras, o alfabeto também segue permanecendo sem k, w e y.\n[…]\nO Acordo Ortográfico de 1990 em sua Base I, 1.º, restaura o k e o y e introduz o w, fazendo o alfabeto português possuir 26 letras:\n[…]\nPor fim, é importante observar que o Acordo Ortográfico de 1990, que entre 1.º de janeiro de 2009 e 31 de dezembro de 2012 que viveu um período de transição e está já em vigor em todos os países lusófonos excetuando Angola, segundo o qual a regra ortográfica anterior (com o alfabeto de 23 letras) e a nova (com o alfabeto de 26 letras) coexistirão validamente.\n[…]\nFindo esse período, somente o Acordo Ortográfico de 1990 será válido e em Portugal, Moçambique, Cabo Verde, São Tomé e Príncipe, Timor-Leste, Guiné-Bissau e no Brasil o alfabeto da língua portuguesa terá 26 letras.\n[…]\nEsta é a lista alfabética, conforme o Acordo Ortográfico de 1990, com os nomes de todas as letras, inclusive as versões alternativas e suas representações fonéticas pelo Alfabeto Fonético Internacional. É bom notar que nem todas as realizações fonéticas de algumas letras ou todas as versões de seus nomes estão representados aqui, assim como certas realizações fonéticas apresentadas consistem em variações regionais ou alófonas."
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Língua xhosa",
      "descricao": "Língua banta da África do Sul, conhecida pelos sons de estalo, língua materna de Nelson Mandela."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua sul-africana, conhecida pelos sons de estalo, era a língua materna de Nelson Mandela?",
    "resposta": "Xhosa",
    "fonte": [
      "https://en.wikipedia.org/wiki/Xhosa_language",
      "https://en.wikipedia.org/wiki/Nelson_Mandela"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Xhosa_language",
        "situacao": "ok",
        "texto": "Xhosa ( KOH-sə, Xhosa: [ᵏǁʰôːsa] ), formerly spelled Xosa and also known by its endonym isiXhosa, is a Bantu language, indigenous to Southern Africa and one of the official languages of South Africa and Zimbabwe.\n[…]\nXhosa-speaking people have inhabited coastal regions of southeastern Africa since before the 16th century. They refer to themselves as the amaXhosa and their language as isiXhosa. Ancestors of the Xhosa migrated to the east coast of Africa and came across Khoisan-speaking people; \"as a result of this contact, the Xhosa people borrowed some Khoisan words along with their pronunciation, for instance, the click sounds of the Khoisan languages\".\n[…]\nNelson Mandela's Xhosa initiation ceremony is featured in the 2013 film Mandela: Long Walk to Freedom.\n[…]\nIn the Marvel Cinematic Universe films Captain America: Civil War, Black Panther, Avengers: Infinity War, Avengers: Endgame, Black Panther: Wakanda Forever, and the TV show The Falcon and the Winter Soldier, the language spoken in the fictional African nation of Wakanda is Xhosa.\n[…]\nThis came about because South African actor John Kani, a native of the Eastern Cape province who plays Wakandan King T'Chaka, speaks Xhosa and suggested that the directors of the fictional Civil War incorporate a dialogue in the language. For Black Panther, director Ryan Coogler \"wanted to make it a priority to use Xhosa as much as possible\" in the script, and provided dialect coaches for the film's actors.\n[…]\nEinhorn, E.; Siyengo, L. (1990). Xhosa: a concise manual. Cape Town : Johannesburg: Faircape Books ; Thorold's Africana Books [distributor]. ISBN 9780798507509.\n[…]\nParadisec has a collections of Arthur Capell's materials (AC1), which include Xhosa language materials"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nelson_Mandela",
        "situacao": "ok",
        "texto": "Nelson Rolihlahla Mandela (18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, politician, and philanthropist, who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election. His government focused on dismantling the legacy of apartheid by tackling institutio\n[…]\nA devotee of the god Qamata, Gadla was a polygamist with four wives, four sons and nine daughters, who lived in different villages. Nelson's mother was Gadla's third wife, Nosekeni Fanny, daughter of Nkedama of the Right Hand House and a member of the amaMpemvu clan of the Xhosa.\n[…]\nMandela later stated that his early life was dominated by traditional Xhosa custom and taboo. He grew up with two sisters in his mother's kraal in the village of Qunu, where he tended herds and spent much time outside with other boys. Both his parents were illiterate, but his mother, a devout Christian, sent him to a local Methodist school when he was about seven. Baptised a Methodist, Mandela was given the English forename \"Nelson\" by his teacher.\n[…]\nThe headmaster emphasised the superiority of European culture and government, but Mandela became increasingly interested in native African culture, making his first non-Xhosa friend, a speaker of Sotho, and coming under the influence of one of his favourite teachers, a Xhosa who broke taboo by marrying a Sotho. Mandela spent much of his spare time at Healdtown as a long-distance runner and boxer, and in his second year he became a prefect.\n[…]\nMandela nevertheless also expressed admiration for what he deemed to be indigenous forms of democracy, describing Xhosa traditional society's mode of governance as \"democracy in its purest form\".\n[…]\nNelson Mandela Day (archived)\n[…]\nNelson Mandela's family tree\n[…]\nNelson Mandela at IMDb\n[…]\nNelson Mandela on Nobelprize.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_xossa",
        "situacao": "ok",
        "texto": "Xossa, xhosa ou cosa (em xhosa: isiXhosa, isikǁʰɔ́ːsa) é uma língua banta angune e um dos  idiomas oficiais da África do Sul. Também é um dos idiomas oficiais do Zimbábue, embora não seja muito falado naquele país. É falado como língua materna por 8,2 milhões de pessoas e por 11 milhões como segunda língua, na África do Sul, principalmente na Província do Cabo Oriental; no total, incluindo-se outr\n[…]\nOs xossas, grupo étnico da Africa do Sudoeste, ali vivem desde o século XVI e chamam seu idioma de isixhosa, sendo “isi” um prefixos que marcas as linguagens. 15% do vocabulário tem origem na língua dos Cóis, o que explica a presença de cliques, típicos das línguas coissãs. Mais recentemente, palavras de origem inglesa e africânder foram integradas.\n[…]\nO xossa tem muitas consoantes raras e únicas. Tem sons pulmônicos egressivos, ejetivos , implosivos e apresenta 15 diferentes cliques (outras línguas com cliques: Ju'hoan falada por 10 mil pessoas em  Botswana e Namíbia tem 48 cliques; Xóõ falada por 4 mil pessoas em Botswana tem a maior quantidade de cliques dentre as línguas conhecidas – 83). Zulu também é assim, mas utiliza os cliques com menos frequência.\n[…]\nNdithetha isiXhosa kancinci nje – Só falo um pouquinho de xossa\n[…]\nA artista mais conhecida de canções xossas fora da África do Sul foi Miriam Makeba, cujas  canções Click Song # 1 (xossa Qongqothwane) e \"Click Song # 2\" (Baxabene Ooxam) são conhecidas por seu grande número de sons de clique.\n[…]\nSenhor, abençoe a África;\n[…]\nNos filmes do Universo Cinematográfico Marvel, Capitão América: Guerra Civil e Pantera Negra, a língua falada na fictícia nação africana de Wakanda é o xossa. Isso aconteceu porque o ator sul-africano John Kani, natural da província do Cabo Oriental que interpreta o rei Wakandano T'Chaka, é xossa e sugeriu que os diretores de Guerra Civil que incorporassem um diálogo na língua.\n[…]\nXhosa - Omniglot (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Língua aramaica",
      "descricao": "Língua semítica antiga, falada no Oriente Médio e no dia a dia da Galileia no tempo de Jesus."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua semítica era a mais falada no dia a dia da Galileia na época de Jesus?",
    "resposta": "Aramaico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aramaic",
      "https://en.wikipedia.org/wiki/Language_of_Jesus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aramaic",
        "situacao": "ok",
        "texto": "Aramaic is a Northwest Semitic language that originated in the ancient region of Syria and quickly spread to Mesopotamia, the southern Levant, Sinai, southeastern Anatolia, the Caucasus, and Eastern Arabia, where it has been continually written and spoken in different varieties for over 3,000 years.\n[…]\nBiblical Aramaic was used in several sections of the Hebrew Bible, including parts of the books of Daniel and Ezra. Aramaic translation of the Bible is known as the Targum. It was the language of Jesus, who spoke the Galilean dialect during his public ministry, and of the Jerusalem Talmud, Babylonian Talmud, and Zohar. According to the Babylonian Talmud (Sanhedrin 38b), the language spoken by Adam – the first human in the Bible – was Aramaic.\n[…]\nNeo-Aramaic, from c. 1200 AD, up to the modern times\n[…]\nSamaritan Aramaic was distinct; it ultimately merged [ʔ], [h], [ħ], and [ʕ] as a glottal stop, only maintaining [ʕ] in the initial position before the vowel [a]. Galilean Aramaic, the dialect of Jesus' home region, is only known from a few place names, the influences on Galilean Targumic, some rabbinic literature, and a few private letters. It seems to have distinctive features including the collapse of gutturals and the maintenance of diphthongs.\n[…]\nAs with most Semitic languages, Aramaic can be thought of as having three basic sets of vowels:\n[…]\nLike other Semitic languages, Aramaic employs a number of derived verb stems, to extend the lexical coverage of verbs. The basic form of the verb is called the ground stem, or G-stem. Following the tradition of mediaeval Arabic grammarians, it is more often called the Pə‘al פעל (also written Pe‘al), using the form of the Semitic root פע״ל P-‘-L, meaning \"to do\". This stem carries the basic lexical meaning of the verb.\n[…]\nDictionary of Judeo-Aramaic"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Language_of_Jesus",
        "situacao": "ok",
        "texto": "The scholarly consensus holds that Jesus often spoke and taught in Aramaic, while likely knowing Hebrew and at least some Greek. Aramaic was a common language of Roman Judaea, and was thus also spoken by at least some of Jesus' disciples. The villages of Nazareth and Capernaum in Galilee, where the Gospels record him as having been raised, were populated by Aramaic-speaking communities. Jesus prob\n[…]\nThe most likely rendition of the phrase in its original Aramaic, as said by Jesus, would have been \"אלי, אלי, למה שבקתני\", transliterated as Eli, Eli, ləmā šəḇaqtanī.\n[…]\nThe place where Jesus takes his disciples to pray before his arrest is given the Greek transliteration Γεθσημανῆ (Gethsēmanē). It represents the Aramaic Gath-Šmānē, meaning 'the oil press' or 'oil vat' (referring to olive oil).\n[…]\nThe word in Aramaic for \"oil\" is more properly mišḥa (משחא), as also attested in Jewish writings in Aramaic from the Galilee (see Caspar Levias, A Grammar of Galilean Aramaic, Jewish Theological Seminary of America, 1986).\n[…]\nGagūltā Aramaic, means 'skull'. The name appears in all of the gospels except Luke, which calls the place simply Kranion (Κρανίον)  'the Skull' in Greek, with no Semitic counterpart. The name 'Calvary' is taken from the Latin Vulgate translation, Calvaria.\n[…]\nBethesda was originally the name of a pool in Jerusalem, on the path of the Beth Zeta Valley, and is also known as the Sheep Pool. Its name in Aramaic means \"House of Grace\". It is associated with healing. In John 5, Jesus was reported healing a man at the pool.\n[…]\nJoshua Schachterle writing for the Bart Ehrman Blog, posits Jesus spoke almost exclusively in the Galilean dialect of Aramaic. Regarding Hebrew, Schachterle argues that while Jesus lacked formal training as the scholars and scribes, participation in ritual worship would have provided him enough to understand and even potentially cite scripture when he preached."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aramaico",
        "situacao": "ok",
        "texto": "O aramaico é uma língua semítica pertencente à família linguística afro-asiática. O nome da língua é baseado na palavra Aram, designação de antiga região do centro da Síria. Dentro dessa família, o aramaico pertence ao subgrupo semítico, e mais especificamente, faz parte das línguas semíticas do noroeste, que também inclui as línguas canaanitas, assim como o hebraico e o fenício.\n[…]\nO aramaico de Jesus.\n[…]\nAramaico moderno (1200 – presente)\n[…]\nO aramaico galileu, a língua da região natal de Jesus só é conhecida de alguns poucos lugares, das influências no Targúmico Galileu, de alguma literatura dos rabinos e algumas poucas cartas privadas. Ela parece ter um número de características distintas, como: ditongos nunca são simplificados a \"monotongos\". A leste do Jordão, os vários dialetos de jordaniano oriental eram falados.\n[…]\nA língua dos cristãos que falavam o aramaico do ocidente é evidenciada como sendo do século VI, mas provavelmente existia desde dois séculos mais cedo. A língua por si vem do palestino antigo cristão, mas suas convenções de escrita foram baseadas no antigo siríaco médio e foi fortemente influenciada pelo grego. O nome Jesus, apesar de Yešû` em aramaico, é escrito Yesûs no palestino cristão.\n[…]\nO aramaico moderno oriental existe em uma ampla variedade de dialetos e línguas. Há uma diferença significante entre o aramaico falado por judeus, cristãos e mandeístas.\n[…]\nAs línguas judeu-aramaicas modernas são faladas principalmente em Israel hoje em dia, e a maioria delas estão entrando em extinção (os falantes mais antigos não estão passando a língua às gerações mais jovens). Os dialetos judeus que vieram de comunidades que viviam entre o lago Úrmia e Mossul não são todos inteligíveis entre si. Em alguns lugares, como Úrmia, cristãos e judeus falam dialetos incompreensíveis entre si do aramaico moderno oriental, embora habitem os mesmos lugares.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Caiapós",
      "descricao": "Povo indígena de língua jê que vive no Pará e em Mato Grosso, ao longo do rio Xingu."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "O cacique Raoni, famoso pelo disco no lábio inferior e pela defesa da Amazônia, pertence a qual povo indígena?",
    "resposta": "Caiapó",
    "distratores": [
      "Xavante",
      "Ianomâmi",
      "Guarani"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Raoni_Metuktire",
      "https://en.wikipedia.org/wiki/Raoni_Metuktire"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Raoni_Metuktire",
        "situacao": "ok",
        "texto": "Raoni Metuktire ONM OMC (Kapot, c. 1932) é um líder indígena brasileiro da etnia caiapó. É conhecido internacionalmente por sua luta pela preservação da Amazônia e dos povos indígenas.\n[…]\nA data de nascimento de Raoni Metuktire não é precisa. Provavelmente foi no início da década de 1930, talvez em 1932, ou no início da década de 1940, talvez em 1942. O local de nascimento foi no estado brasileiro de Mato Grosso, em uma vila chamada Krajmopyjakare (que hoje se chama Kapôt). Ele é o filho do líder Umoro, do ramo dos caiapós conhecido como metuquitire. Sua infância foi marcada por muitas mudanças de endereço (o povo caiapó é nômade) e por numerosas guerras tribais.\n[…]\nGuiado por seu irmão Motibau, Raoni começou com a idade de quinze anos a instalar seu famoso botoque (disco de madeira leve pintado de forma cerimonial e portado sobre o lábio inferior).\n[…]\nFoi em 1954 que Raoni e os caiapós encontraram, pela primeira vez, os homens brancos. Aprendeu a língua portuguesa com os Irmãos Villas-Bôas, famosos indigenistas brasileiros. Encontrou-se com o rei Leopoldo III da Bélgica em 1964 quando ele estava em expedição dentro das reservas indígenas protegidas do Mato Grosso. Em 1978, foi tema de um documentário intitulado Raoni. O ator Marlon Brando, que estava no auge de sua fama, aceitou ser filmado na sequência de abertura.\n[…]\nDurante suas intervenções midiáticas, Raoni aparece, quase sempre, com um cocar de penas amarelas e com brincos e colares caiapós. É imediatamente reconhecível pelo seu botoque tradicional, que estica o seu lábio inferior e o qual ele porta com grande orgulho.\n[…]\nRaoni (filme)\n[…]\nKayapó\n[…]\nAmazônia e Selva Amazônica\n[…]\nFilme Cacique Raoni, no História do Cinema Brasileiro"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Raoni_Metuktire",
        "situacao": "ok",
        "texto": "Raoni Metuktire (born 1932), also known as Chief Raoni or Ropni, is an Indigenous Brazilian leader and environmentalist. He is a chief of the Kayapo people, a Brazilian Indigenous group from the plain lands of the Mato Grosso and Pará in Brazil, south of the Amazon River and along Xingu River and its tributaries. He is internationally famous as a living symbol of the fight for the preservation of \n[…]\nCacique (a Native American word for chieftain) Raoni Metuktire was born in the state of Mato Grosso in 1932, in the heart of the Brazilian part of the Amazon rainforest, in a village called Krajmopyjakare (today called Kapôt in the Brazilian municipality of Peixoto de Azevedo). Born in the Metuktire family of Kayapo people, he is one of Cacique Umoro's sons. As the Kayapo tribe is nomadic, his childhood was marked by continuous travel, during which he witnessed many tribal wars.\n[…]\nDuring the tour, he visited France, where he promoted his memoirs Raoni, mémoires d'un chef indien He was welcomed by former French president Jacques Chirac and endorsed Fondation Chirac, whose purpose was to preserve the cultures of indigenous people and the rainforest's biodiversity, including the creation of an institute in the middle of the Brazilian Amazon rainforest.\n[…]\nAccording to Amazon Watch, his crying had nothing to do with the dam or any news related to it; it is a custom among the Kayapo to cry when they greet an old acquaintance or relative that they have not seen for a long time, as was happening when this photo was taken.\n[…]\nRaoni (also known as Raoni: The Fight for the Amazon) is a 1978 Belgian documentary film directed by Jean-Pierre Dutilleux and Luiz Carlos Saldanha. The film portrays issues surrounding the survival of the indigenous Indian tribes of north central Brazil. It was nominated for an Academy Award for Best Documentary Feature.\n[…]\nAmazon Watch"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Língua hindi",
      "descricao": "Língua indo-ariana oficial da Índia, falada sobretudo no norte do país."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Que sistema de escrita, também usado para o sânscrito, é empregado para escrever o hindi?",
    "resposta": "Devanágari",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindi",
      "https://en.wikipedia.org/wiki/Devanagari"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindi",
        "situacao": "ok",
        "texto": "Modern Standard Hindi (Hindi: आधुनिक मानक हिन्दी, romanised: Ādhunik Mānak Hindī), commonly referred to as Hindi, is an Indo-Aryan language written in the Devanagari script. It is an official language of India and, alongside English, serves as a lingua franca across much of northern, central, eastern, western, and northeastern India, with South India being the main exception.\n[…]\n(1) The official language of the Union shall be Hindi in Devanagari script. The form of numerals to be used for the official purposes of the Union shall be the international form of Indian numerals.\n[…]\nLinguistically, Hindi and Urdu are two registers of the same language and are mutually intelligible. Both Hindi and Urdu share a core vocabulary of native Prakrit and Sanskrit-derived words. However, Hindi is written in the Devanagari script and contains more direct tatsama Sanskrit-derived words than Urdu, whereas Urdu is written in the Perso-Arabic script and uses more Arabic and Persian loanwords compared to Hindi.\n[…]\nHindi is written in the Devanagari script, an abugida. Devanagari consists of 11 vowels and 33 consonants and is written from left to right. Unlike Sanskrit, Devanagari is not entirely phonetic for Hindi, especially failing to mark schwa deletion in spoken Standard Hindi.\n[…]\nRomanised Hindi, also called Hinglish, is the dominant form of Hindi online. In an analysis of YouTube comments, Palakodety et al., identified that 52% of comments were in Romanised Hindi, 46% in English, and 1% in Devanagari Hindi.\n[…]\nbas \"enough\", khud \"self\") have remained entrenched even in Modern Standard Hindi, and an even larger amount of the said words are still used in Urdu poetry written in the Devanagari script. Many words borrowed from Persian in turn were loanwords from Arabic (e.g. muśkil \"difficult\", havā \"air\", x(a)yāl \"thought\", kitāb \"book\").\n[…]\nHindi in Devanagari Script\n[…]\nHindi Belt"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Devanagari",
        "situacao": "ok",
        "texto": "Devanagari ( DAY-və-NAH-gə-ree; in script: देवनागरी, IAST: Devanāgarī, Sanskrit pronunciation: [deːʋɐnaːɡɐriː]) is an Indic script used in the Indian subcontinent. Also simply called Nāgarī (Sanskrit: नागरी, Nāgarī), it is a left-to-right abugida (a type of segmental writing system), based on the ancient Brāhmī script. It is one of the official scripts of India and Nepal. It was developed and in r\n[…]\nThe Devanāgarī script, composed of 48 primary characters, including 14 vowels and 34 consonants, is the fourth most widely adopted writing system in the world, being used for over 120 languages, the most popular of which is Hindi.\n[…]\nDevanāgarī has been widely adopted across India and Nepal to write Sanskrit, Marathi, Hindi, Central Indo-Aryan languages, Konkani, Boro, and various Nepalese languages.\n[…]\nThe table below shows the consonant letters (in combination with inherent vowel a) and their arrangement. To the right of the Devanāgarī letter it shows the Latin script transliteration using International Alphabet of Sanskrit Transliteration, and the phonetic value (IPA) in Hindi.\n[…]\nAs mentioned, successive consonants lacking a vowel in between them may physically join as a conjunct consonant or ligature. When Devanāgarī is used for writing languages other than Sanskrit, conjuncts are used mostly with Sanskrit words and loan words. Native words typically use the basic consonant, and native speakers know to suppress the vowel when it is conventional to do so. For example, the native Hindi word karnā is written करना (ka-ra-nā).\n[…]\nLambert, Hester Marjorie (1953), Introduction to the Devanagari Script: For Students of Sanskrit, Hindi, Marathi, Gujarati and Bengali, London: Geoffrey Cumberlege (Oxford University Press).\n[…]\nMaurer, Walter H. (1976). \"On the Name Devanāgarī\". Journal of the American Oriental Society. 96 (1): 101–104. doi:10.2307/599893. JSTOR 599893."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_hindi",
        "situacao": "ok",
        "texto": "A língua hindi ou híndi (em hindi: हिंदी ou hindī; AFI: [ˈɦɪndiː]) pertence a família indo-iraniana, um subgrupo da família indo-europeia e é listada como língua oficial do governo da Índia, de Fiji, e de vários estados indianos, principalmente do norte, centro e oeste, como Bihar, Deli, Haryana, Jarcanda, Madia Pradexe, Rajastão, Utaracanda, Himachal Pradexe e Utar Pradexe.\n[…]\nA língua caracteriza-se pelos verbos nos final das frases e por utilizar o sistema de escrita Devanágari, que foi originado do alfabeto Brahmi, do qual todos os sistemas de escrita indianos modernos são derivados. Também é evidente a influência do inglês, devido à grande troca cultural que ocorreu entre Índia e Inglaterra durante o período da colonização britânica no século XVIII.\n[…]\nO hindi: escrito em devanágari, da esquerda para a direita, e que adotou convenções literárias e vocabulários em sua maioria do sânscrito;\n[…]\nA escrita do hindi surgiu junto com a própria língua, porque esta utilizou-se da escrita do sânscrito. Sendo assim, textos administrativos ou criativos eram escritos desde o surgimento da língua. Todavia, foi no século XVIII que se deu o início da documentação de uma gramática do hindi.\n[…]\nHindi é escrito no alfabeto devanágari (em hindi, देवनागरी लिपि), utilizado também pelo sânscrito e por outras línguas indo-arianas. Esse alfabeto utiliza caracteres desenhados sob uma linha imaginária de apoio e representam os sons da língua de forma unívoca. Cada sílaba compõe um único bloco gráfico que tende a confinar todas as consoantes no menor espaço possível, de maneira que elas se apresentam com larguras relativamente constantes.\n[…]\nA seguir, as vogais da língua hindi:\n[…]\nExiste uma outra versão dos ordinais que é emprestada do sânscrito, ela é usada em alguns registros e também é usada no calendário hindi (lunar) para a contagem de dias da lua.\n[…]\nSânscrito",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Língua espanhola",
      "descricao": "Língua românica originária de Castela, oficial na Espanha e na maior parte da América Latina."
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Entre as línguas que descendem do latim, qual tem o maior número de falantes nativos?",
    "resposta": "Espanhol",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romance_languages",
      "https://en.wikipedia.org/wiki/Spanish_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romance_languages",
        "situacao": "ok",
        "texto": "The Romance languages, less commonly known as the Latin languages, are the languages that directly descended from Vulgar Latin. They are the only extant (living) subgroup of the Italic branch of the Indo-European language family. The most prominent Romance languages include Spanish, French, Portuguese, Italian, Romanian and Catalan.\n[…]\nThe Romance languages spread throughout the world owing to the period of European colonialism beginning in the 15th century. There are more than 900 million native speakers of Romance languages found worldwide, mainly in the Americas, Europe, and parts of Africa. French, Spanish, and Portuguese also have many non-native speakers; they are widely used as lingua francas. There are also numerous regional Romance languages and dialects.\n[…]\nMauritian (lingua franca of Mauritius)\n[…]\nOld French also had numerous falling diphthongs resulting from diphthongization before palatal consonants or from a fronted /j/ originally following palatal consonants in Proto-Romance or later: e.g. pācem /patsʲe/ \"peace\" > PWR */padzʲe/ (lenition) > OF paiz /pajts/; *punctum \"point\" > Gallo-Romance */ponʲto/ > */pojɲto/ (fronting) > OF point /põjnt/. During the Old French period, preconsonantal /l/ [ɫ] vocalized to /w/, producing many new falling diphthongs: e.g.\n[…]\ndōnat \"he gives\" > OF dune /dunə/ > donne /dɔn/, fēminam > femme /fam/. Other vowels remained nasalized, and were dramatically lowered: fīnem \"end\" > fin /fɛ̃/ (often pronounced [fæ̃]); linguam \"tongue\" > langue /lɑ̃ɡ/; ūnum \"one\" > un /œ̃/, /ɛ̃/.\n[…]\nCI: used in Italian, Romance languages in Italy, Corsican and Romanian to represent /tʃ/ before A, O, or U. In Sicilian, it is used for [ç] in contexts where it descended from Latin FL, as in ciamma.\n[…]\nDevoto, Giacomo (1999). Il Linguaggio d'Italia. Milano: RCS Libri (Biblioteca Universale Rizzoli)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spanish_language",
        "situacao": "ok",
        "texto": "Spanish (español) or Castilian (castellano) is a Romance language of the Indo-European language family that evolved from the Vulgar Latin spoken on the Iberian Peninsula of Europe. It originated in the Kingdom of Castile, a kingdom in north-central Iberia. Today, it is a global language with 519 million native speakers, mainly in the Americas and Spain, and about 636 million speakers total, includ\n[…]\nDespite a public education system set up by the colonial government, by the end of Spanish rule in 1898, only about 10% of the population had knowledge of Spanish, mostly those of Spanish descent or elite standing.\n[…]\nIn addition to the many exceptions to these tendencies, there are numerous minimal pairs that contrast solely on stress such as sábana ('sheet') and sabana ('savannah'); límite ('boundary'), limite ('he/she limits') and limité ('I limited'); líquido ('liquid'), liquido ('I sell off') and liquidó ('he/she sold off').\n[…]\nJudaeo-Spanish, also known as Ladino, is a variety of Spanish which preserves many features of medieval Spanish and some old Portuguese and is spoken by descendants of the Sephardi Jews who were expelled from Spain in the 15th century. While in Portugal the conversion of Jews occurred earlier and the assimilation of New Christians was overwhelming, in Spain the Jews kept their language and identity.\n[…]\nSpanish is one of the official languages of the United Nations, the European Union, the World Trade Organization, the Organization of American States, the Organization of Ibero-American States, the African Union, the Union of South American Nations, the Antarctic Treaty Secretariat, the Latin Union, the Caricom, the North American Free Trade Agreement, the Inter-American Development Bank, and numerous other international organizations."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_rom%C3%A2nicas",
        "situacao": "ok",
        "texto": "As línguas românicas, também conhecidas como línguas neolatinas, latinas, ou colectivamente como romance ou romanço, são idiomas que integram o vasto conjunto das línguas indo-europeias que se originaram da evolução do latim, principalmente do latim vulgar, falado pelas classes mais populares do velho Império Romano.\n[…]\nAtualmente, essas línguas são representadas pelos seguintes idiomas mais conhecidos e mais falados no mundo: o português, o castelhano (também conhecido como espanhol), o italiano, o francês e o romeno. Há, também, uma grande quantidade de idiomas usados por grupos minoritários de falantes, como:\n[…]\nnas diferentes regiões da Espanha, onde são falados o catalão (que tem o valenciano como dialeto), o aragonês, o galego, o asturiano e o leonês;\n[…]\nOs impérios ultramarinos estabelecidos por Portugal, Espanha, França, Bélgica e Itália do século XV em diante espalharam as suas respectivas línguas por outros continentes, de tal forma que cerca de 70% de todos os falantes de línguas românicas vivem hoje fora da Europa.\n[…]\nHá 1,2 bilhões de pessoas que falam alguma língua românica no mundo, o que faz esse ramo ter o maior número de falantes da família indo-europeia, à frente do ramo germânico, que possui mais de 730 milhões de falantes.\n[…]\nUm estudo de 1949 do linguista Mario Pei, analisando o grau em que sete línguas românicas divergiam do latim clássico em relação à vocalização do sotaque, produziu as seguintes medidas de divergência (com porcentagens mais altas indicando maior divergência das vogais tônicas do latim clássico):\n[…]\nCastelhano: 20%\n[…]\nLínguas ibero-românicas: Castelhano, português, galego, asturo-leonês e aragonês.\n[…]\nJudeu-espanhol:Kada benadam i benadam nase forro i igual en dinyidad i en derechos. Todos son baale razón i konsiensia i deven komportarsen los unos verso los otros kon fraternidad",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
