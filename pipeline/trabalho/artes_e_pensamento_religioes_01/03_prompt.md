Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Religiões** (tema **Artes e Pensamento**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Islã",
      "descricao": "Religião monoteísta fundada por Maomé na Arábia no século sete"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em árabe, a palavra islã, que dá nome à religião de Maomé, quer dizer o quê?",
    "resposta": "Submissão a Deus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Islam",
      "https://www.britannica.com/topic/Islam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Islam",
        "situacao": "ok",
        "texto": "Islam is an Abrahamic religion based on the Quran and the teachings of Muhammad. The monotheistic religion has an estimated 2 billion worldwide adherents, called Muslims. Islam is the world's second-largest religious population after Christianity.\n[…]\nIn Arabic, Islam (Arabic: إسلام, lit. 'submission [to God]') is the verbal noun of Form IV originating from the verb سلم (salama), from the triliteral root س-ل-م (S-L-M), which forms a large class of words mostly relating to concepts of submission, safeness, and peace. In a religious context, it refers to the total surrender to the will of God.\n[…]\nProphets (Arabic: أنبياء, anbiyāʾ) are believed to have been chosen by God to preach a divine message. Some of these prophets additionally deliver a new book and are called \"messengers\" (رسول‎, rasūl). Muslims believe prophets are human and not divine. All of the prophets are said to have preached the same basic message of Islam – submission to the will of God – to various nations in the past, and this is said to account for many similarities among religions.\n[…]\nIslamism is a range of religious and political ideological movements that believe that Islam should influence political systems; among the most prominent are the Khilafat Movement, Islamic revival, Islamic democracy, the Deobandi movement, the Salafi movement, among others. Its proponents believe Islam is innately political, and that Islam as a political system is superior to communism, liberal democracy, capitalism, and other alternatives in achieving a just, successful society.\n[…]\nList of Islamic years\n[…]\nMajor religious groups\n[…]\nReligion in pre-Islamic Arabia\n[…]\nAbrahamic religions\n[…]\n\"Islam\". Encyclopædia Britannica\n[…]\nReligion & Ethics – Islam A number of introductory articles on Islam from the BBC"
      },
      {
        "url": "https://www.britannica.com/topic/Islam",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Islamismo",
        "situacao": "ok",
        "texto": "Islamismo é uma religião abraâmica monoteísta centrada no Alcorão e nos ensinamentos do profeta Maomé. Seus crentes são chamados muçulmanos e totalizam aproximadamente 1,9 bilhão* de pessoas em todo o mundo, o que faz deles a segunda maior população religiosa do mundo depois dos cristãos.\n[…]\nOs muçulmanos consideram o Alcorão a palavra literal de Deus e a revelação final inalterada. Juntamente com o Alcorão, os muçulmanos também acreditam nas revelações anteriores, como o Tawrat (Torá), o Zabur (Salmos) e o Injil (Evangelho). Eles também consideram Maomé como o principal e último profeta islâmico, por meio de quem a religião foi completada.\n[…]\n\"Islã\" provém do árabe Islām, que por sua vez deriva da quarta forma verbal da raiz slm, aslama, e significa \"submissão (a Deus)\". Segundo o arabista e filólogo José Pedro Machado, a palavra \"Islã\" não teria surgido na língua portuguesa antes de 1843, ano em que aparece no capítulo IX da obra Eurico, o Presbítero, de Alexandre Herculano.\n[…]\nO ismaelismo, cujos ensinamentos estão enraizados no gnosticismo e no neoplatonismo bem como nas escolas iluminacionistas e isfahan de filosofia islâmica, desenvolveu interpretações místicas do Islã. Haçane de Baçorá, o primeiro asceta sufista frequentemente retratado como um dos primeiros sufistas, enfatizou o medo de falhar nas expectativas de obediência de Deus.\n[…]\nO islamismo não tem clero no sentido sacerdotal, como sacerdotes que fazem a mediação entre Deus e o povo. Imame (em árabe: إمام) é o título religioso usado para se referir a uma posição de liderança islâmica, muitas vezes no contexto da realização de um culto islâmico. A interpretação religiosa é presidida pelo ulemá (علماء, ulama), um termo usado para descrever o corpo de estudiosos que receberam treinamento em estudos islâmicos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Siddhartha Gautama",
      "descricao": "Mestre espiritual indiano do século cinco ou seis antes de Cristo, fundador do budismo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Siddhartha Gautama ganhou o título de Buda. Qual é o significado dessa palavra sânscrita?",
    "resposta": "O Desperto, ou Iluminado",
    "fonte": [
      "https://en.wikipedia.org/wiki/The_Buddha"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/The_Buddha",
        "situacao": "ok",
        "texto": "Siddhartha Gautama, most commonly referred to as the Buddha (lit. 'the awakened one'), was a wandering religious teacher who lived in the eastern Indo-Gangetic Plains during the 6th or 5th century BCE and founded Buddhism. According to Buddhist legends, he was born in Lumbini, in what is now Nepal, to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic.\n[…]\nThe sources which present a complete picture of the life of Siddhārtha Gautama are a variety of different, and sometimes conflicting, traditional biographies from a later date. These include the Buddhacarita, Lalitavistara Sūtra, Mahāvastu, and the Nidānakathā. Of these, the Buddhacarita is the earliest full biography, an epic poem written by the poet Aśvaghoṣa in the first century CE.\n[…]\nThe ancient Indians were generally unconcerned with chronologies, being more focused on philosophy. Buddhist texts reflect this tendency, providing a clearer picture of what Gautama may have taught than of the dates of the events in his life. These texts contain descriptions of the culture and daily life of ancient India which can be corroborated from the Jain scriptures, and make the Buddha's time the earliest period in Indian history for which significant accounts exist.\n[…]\nBritish author Karen Armstrong writes that although there is very little information that can be considered historically sound, we can be reasonably confident that Siddhārtha Gautama did exist as a historical figure. Michael Carrithers goes further, stating that the most general outline of \"birth, maturity, renunciation, search, awakening and liberation, teaching, death\" must be true.\n[…]\nSri Siddhartha Gautama, a 2013 Sinhalese epic biographical film based on the life of Lord Buddha.\n[…]\nFamily of Gautama Buddha\n[…]\nList of places where Gautama Buddha stayed\n[…]\nWorks by or about Siddhārtha Gautama at the Internet Archive"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sidarta_Gautama",
        "situacao": "ok",
        "texto": "Sidarta Gautama, também chamado Buda (\"o desperto\"), foi um mestre religioso itinerante, ou śramaṇa, que viveu nas planícies indo-gangéticas orientais no século VI ou V a.C. e fundou o budismo. Segundo as narrativas budistas, nasceu em Lumbini, no atual Nepal, em uma família do clã Shakya, e deixou a vida doméstica para viver como asceta itinerante. Depois de mendigar, praticar o ascetismo e medit\n[…]\nNos nicaias, Buda costuma referir-se a si mesmo como Tathāgata. O título \"Buda\", que pode ser traduzido como \"desperto\" ou \"iluminado\", está documentado desde o século III a.C. A comunidade budista reuniu regras de disciplina monástica no Vinaya Piṭaka e discursos atribuídos a ele no Sutta Piṭaka. Esses textos foram transmitidos oralmente em línguas indo-arianas médias.\n[…]\nBuda significa \"desperto\" ou \"iluminado\". O termo vem da raiz sânscrita budh (बुध्), que pode significar acordar, perceber, aprender ou tomar consciência. A raiz também permite a imagem de \"abrir-se\", como uma flor. Assim, Buda é um título, e não um nome pessoal: designa alguém que alcançou bodhi, o despertar. Buddhi, a faculdade de formar conceitos, raciocinar, discernir e compreender, permite distinguir o verdadeiro (satya) do falso.\n[…]\nSammāsambuddho — \"perfeitamente desperto por si mesmo\".\n[…]\nO Dhammacakkappavattana Sutta (SN 56) atribui ao Tathāgata a descoberta do Caminho do Meio, distante tanto da entrega aos prazeres quanto da mortificação do corpo. Esse caminho é apresentado como o Nobre Caminho Óctuplo. Em textos posteriores, Gautama aparece cada vez mais sob o título de Buda, \"o desperto\".\n[…]\nNo século XX, Muhammad Hamidullah sugeriu que a figueira mencionada na sura 95 do Alcorão aludiria ao local do despertar de Buda e permitiria interpretá-lo como profeta. Essa leitura é uma hipótese particular, não uma identificação expressa no texto corânico.\n[…]\nTemplo de Mahabodhi, complexo no local tradicional do despertar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Alcorão",
      "descricao": "Livro sagrado do islã, considerado pelos muçulmanos a palavra de Deus revelada a Maomé"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Que ato está na origem do nome Alcorão, a palavra árabe que designa o livro sagrado dos muçulmanos?",
    "resposta": "Recitação",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quran"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quran",
        "situacao": "ok",
        "texto": "The Quran (Arabic: الْقُرْآن, lit. 'the recitation'  or 'the lecture'), also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation directly from God (Allāh). It is organized in 114 chapters (sūrah, pl. suwar) which consist of individual verses (āyah). Besides its religious significance, it is widely regarded as the finest work in Arabic literatur\n[…]\nThe recitations of a few Egyptian reciters, like El Minshawy, Al-Hussary, Abdul Basit, Mustafa Ismail, were highly influential in the development of current styles of recitation. Southeast Asia is well known for world-class recitation, evidenced in the popularity of the woman reciters such as Maria Ulfah of Jakarta. Today, crowds fill auditoriums for public Quran recitation competitions.\n[…]\nThere are generally two types of recitation (based on pace of recitation):\n[…]\nMurattal is a recitation at moderate pace, used for study and practice.\n[…]\nThe first Quranic manuscripts lacked marks, enabling multiple possible recitations to be conveyed by the same written text. The 10th-century Muslim scholar from Baghdad, Ibn Mujāhid, is famous for establishing seven acceptable textual readings of the Quran. He studied various readings and their trustworthiness and chose seven 8th-century readers from the cities of Mecca, Medina, Kufa, Basra and Damascus.\n[…]\nThe influential standard Quran of Cairo uses an elaborate system of modified vowel-signs and a set of additional symbols for minute details and is based on ʻAsim's recitation, the 8th-century recitation of Kufa. This edition has become the standard for modern printings of the Quran. Occasionally, an early Quran shows compatibility with a particular reading. A Syrian manuscript from the 8th century is shown to have been written according to the reading of Ibn Amir ad-Dimashqi.\n[…]\nMultilingual Quran (Arabic, English, French, German, Dutch, Spanish, Italian)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alcor%C3%A3o",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nAlém disso, os hádices, valorizados na maioria das escolas de pensamento islâmicas por seu papel no estabelecimento de leis islâmicas e regulamentos, são tradições orais posteriormente registradas por escrito e que se acredita refletirem as palavras e ações de Maomé, servindo como orientação adicional ao lado do Alcorão para a maioria dos muçulmanos. Durante as orações, o Alcorão é recitado apenas em árabe. Uma pessoa que memorizou todo o Alcorão é chamada de hafiz (no feminino, hafiza).\n[…]\nDe todo modo, ela já havia se tornado um termo árabe durante a vida de Maomé. Um significado importante da palavra é o 'ato de recitar', como refletido em uma antiga passagem corânica: \"Cabe a Nós reuni-lo e recitá-lo (qur'ānahu).\"\n[…]\nA maioria das suras estava em uso entre os primeiros muçulmanos, pois é mencionada em numerosos relatos de fontes sunitas e xiitas, relativos ao uso que Maomé fazia do Alcorão no chamado ao islamismo, na realização da oração e na forma de recitação. Contudo, o Alcorão não existia em forma de livro quando Maomé morreu, em 632, aos 61–62 anos. Há concordância entre os estudiosos de que o próprio Maomé não escreveu a revelação, devido à descrição corânica de Maomé como \"ummi\".\n[…]\nExemplares desgastados e antigos do Alcorão são embrulhados em um pano e guardados indefinidamente em local seguro, enterrados em uma mesquita ou cemitério muçulmano, ou queimados, sendo as cinzas enterradas ou espalhadas sobre a água. Durante a oração, o Alcorão é recitado apenas em árabe.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Pessach",
      "descricao": "Festa judaica que celebra a saída dos hebreus do Egito"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A Páscoa cristã herdou o nome da festa judaica de Pessach. Que ideia esse nome hebraico expressa?",
    "resposta": "Passagem",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pessach",
      "https://en.wikipedia.org/wiki/Passover"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pessach",
        "situacao": "ok",
        "texto": "Pessach (do hebraico פסח, que significa passar por cima ou passar sobre), também conhecida como \"Festa da Libertação\", celebra a história bíblica da libertação dos hebreus da escravidão no Egito.\n[…]\nÉ importante notar que a palavra Pessach significa \"passagem\", porém a passagem do anjo de morte, e não a passagem dos hebreus pelo Mar Vermelho ou outra passagem qualquer, apesar do nome evocar vários simbolismos.\n[…]\nPessach é hoje uma festa central do Judaísmo e serve como uma conexão entre o povo judeu e sua história. Antes do início da festa, os judeus removem todos os alimentos fermentados (chamados chametz) de seus lares e os queimam. Não é permitido permanecer com chametz durante a Pessach. Os objetos de chametz são escondidos, e outros, passíveis de um processo de casherização, são mantidos; os utilizados para cozinhar passam pelo fogo, e os de comidas frias passam pela água.\n[…]\nA festa de Pessach é antes de tudo uma festa familiar, onde nas primeiras duas noites (mas somente na primeira noite em Israel) é realizado um jantar especial chamado de Sêder de Pessach. Neste sêder a história do Êxodo do Egito é narrada, e se faz as leituras das bençãos, das histórias da Hagadá, de parábolas e canções judaicas. Durante a refeição, come-se matzá (pão ázimo) e ervas amargas.\n[…]\nChag Matzot (festa dos pães ázimos) é o nome dado ao sete dias de comemoração após Pessach. De acordo com a Torá é proibido ingerir chametz durante este período.\n[…]\nO primeiro dia será uma festa, e o sétimo dia será uma festa; nenhuma forma de trabalho será feita, exceto o trabalho que gera alimentação.\n[…]\nSete dias você comerá pão sem levedura, e no sétimo dia será uma festa de homenagem a Deus.\n[…]\nSeder de Pessach"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Passover",
        "situacao": "ok",
        "texto": "Passover, also called Pasch () or Pesach (; Biblical Hebrew: חַג הַפֶּסַח, romanized: Ḥag Ha‑Pesaḥ, lit. 'Pilgrimage of the Passing Over'), or Peysekh in Yiddish, is a major Jewish holiday and one of the Three Pilgrimage Festivals. It celebrates the Exodus of the Israelites from slavery in Egypt.\n[…]\nToday, in the absence of the Temple, when no sacrifices are offered or eaten, the mitzvah of the sacrifice is memorialized in the Seder Korban Pesach, a set of scriptural and Rabbinic passages dealing with the Passover sacrifice, customarily recited after the Mincha (afternoon prayer) service on the 14th of Nisan, and in the form of the zeroa, a symbolic food placed on the Passover Seder Plate (but not eaten), which is usually a roasted shankbone (or a chicken wing or neck).\n[…]\nThis holiday commemorates the day the Children of Israel reached the Red Sea and witnessed both the miraculous \"Splitting of the Sea\" (Passage of the Red Sea), the drowning of all the Egyptian chariots, horses and soldiers that pursued them. According to the Midrash, only the Pharaoh was spared to give testimony to the miracle that occurred.\n[…]\nSaint Thomas Syrian Christians observe Maundy Thursday as Pesaha, a Malayalam word derived from the Aramaic or Hebrew word for Passover (Pasha, Pesach or Pesah) The tradition of consuming Pesaha Appam after the church service is observed by the entire community under the leadership of the head of the family.\n[…]\nChristianity celebrates Easter (not to be confused with the pre-Christian Saxon festival from which it derives its English name). The coincidence of Jesus' crucifixion with the Jewish Passover led some early Christians to make a false etymological association between Hebrew Pesach and Greek pascho (\"suffer\").\n[…]\nAll about Pesach\n[…]\nSecular dates for passover"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Sikhismo",
      "descricao": "Religião monoteísta fundada por Guru Nanak no Punjab, no século quinze"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os seguidores do sikhismo se chamam sikhs, palavra de origem sânscrita que designa que tipo de pessoa?",
    "resposta": "Discípulo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sikhs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sikhs",
        "situacao": "ok",
        "texto": "Sikhs (Gurmukhi: ਸਿੱਖ, romanized: Sikkh, Punjabi pronunciation: [sɪkkʰ]) are followers of Sikhism, a religion that originated in the late 15th century in the Punjab region of the Indian subcontinent, based on the teachings of Guru Nanak. The term Sikh has its origin in the Sanskrit word śiṣya, meaning 'seeker', 'disciple' or 'student'.\n[…]\nThe five Ks (panj kakaar) are five articles of faith which all initiated (Amritdhari) Sikhs are obliged to wear. The symbols represent the ideals of Sikhism: honesty, equality, fidelity, meditating on Waheguru and never bowing to tyranny.\n[…]\nThe Sikhs have a number of musical instruments, including the rebab, dilruba, taus, jori and sarinda. Playing the sarangi was encouraged by Guru Hargobind. The rebab was played by Bhai Mardana as he accompanied Guru Nanak on his journeys. The jori and sarinda were introduced to Sikh devotional music by Guru Arjan. The taus (Persian for \"peacock\") was designed by Guru Hargobind, who supposedly heard a peacock singing and wanted to create an instrument mimicking its sounds.\n[…]\nSikhism is the fastest-growing religion in Canada, Australia and New Zealand. The growth is mainly contributed by the immigration of Indian Sikhs there over the decades. Sikhism is fourth-largest religion in Canada, fifth-largest religion in Australia and New Zealand. The decadal growth of Sikhs is more in those countries as compared to the decadal growth of Sikh population in India, thus making them the fastest-growing religion there.\n[…]\nCanada has the highest proportion of Sikhs in the globe, which stands at 2.1% as of 2021, as compared to India which stands at 1.7% as of 2011 respectively.\n[…]\nSikhism in Jammu and Kashmir\n[…]\nList of British Sikhs\n[…]\nSects of Sikhism\n[…]\nSikhism by country\n[…]\nSikhism in India\n[…]\nSikhism at the BBC\n[…]\n\"Sikhs\". Merriam-Webster.com Dictionary. Merriam-Webster. OCLC 1032680871."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Siques",
        "situacao": "ok",
        "texto": "Os siques, ou sikhs, (punjabi: ਸਿੱਖ; devanágari: सिख) são um grupo etnorreligioso que adere ao Siquismo, uma religião dármica que se originou no final do século XV na região do Punjab, no subcontinente indiano, com base na revelação do Guru Nanak. O termo sikh tem sua origem na palavra sânscrita śiṣya (शिष्य), que significa \"discípulo\" ou \"estudante\".\n[…]\nO dilruba foi criado pelo Guru Gobind Singh a pedido de seus seguidores, que queriam um instrumento menor do que o taus. Depois do Japji Sahib, todos os shabad do Guru Granth Sahib foram compostos como ragas. Esse tipo de canto é conhecido como Gurmat Sangeet.\n[…]\nAlém disso, a Colúmbia Britânica, Manitoba e Yukon têm a distinção de serem três das quatro únicas divisões administrativas do mundo com o siquismo como a segunda religião mais seguida pela população.\n[…]\nComo o Siquismo nunca buscou ativamente conversões, os siques permaneceram como um grupo étnico relativamente homogêneo. A casta ainda pode ser praticada por alguns siques, apesar dos apelos do Guru Nanak para que todos sejam tratados igualmente no Sri Granth Sahib.\n[…]\nA arte e a cultura siques são quase sinônimos da cultura punjabi, e os siques são facilmente reconhecidos por seu turbante característico (dastār). Punjab tem sido chamado de caldeirão da Índia, devido à confluência de culturas invasoras dos rios que deram origem ao nome da região. A cultura sique é, portanto, uma síntese de culturas. O Siquismo forjou uma arquitetura única, que S. S.\n[…]\nA escola sique adaptou a pintura de Kangra às necessidades e aos ideais siques. Seus principais temas são os dez gurus siques e as histórias dos Janamsakhis do Guru Nanak. O décimo Guru, Gobind Singh, deixou uma profunda impressão nos seguidores da nova fé por causa de sua coragem e sacrifícios. Cenas de caça e retratos também são comuns na pintura sique.\n[…]\nSiquismo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Xintoísmo",
      "descricao": "Religião tradicional do Japão, centrada no culto aos kami"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Qual é a tradução do nome xintoísmo, a religião tradicional do Japão?",
    "resposta": "Caminho dos deuses",
    "distratores": [
      "Caminho do guerreiro",
      "Terra do sol nascente",
      "Caminho do chá"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Shinto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shinto",
        "situacao": "ok",
        "texto": "Shinto (Japanese: 神道, Hepburn: Shintō; Japanese pronunciation: [ɕiꜜn.toː]), also called Shintoism, is a religion from Japan. Classified as an East Asian religion by scholars of religion, it is often regarded by its practitioners as Japan's indigenous religion and as a nature religion. Scholars sometimes call its practitioners Shintoists, although adherents rarely use that term themselves.\n[…]\nAspects of Shinto have been incorporated into various Japanese new religious movements.\n[…]\nMost Japanese participate in several religions, with Breen and Teeuwen noting that, \"with few exceptions\", it is not possible to differentiate between Shintoists and Buddhists in Japan. The main exceptions are members of minority religious groups, including Christianity, which promote exclusive worldviews. Determining the proportions of the country's population who engage in Shinto activity is hindered by the fact that Japanese people will often say \"I have no religion\".\n[…]\nOfficial statistics show Shinto to be Japan's largest religion, with over 80 percent of its population engaging in Shinto activities. Conversely, in questionnaires only a small minority of Japanese describe themselves as \"Shintoists\". This indicates that a far larger number of people engage in Shinto activities than cite Shinto as their religious identity. There are no formal rituals to become a practitioner of \"folk Shinto\".\n[…]\nThus, \"Shinto membership\" is often estimated counting only those who do join organized Shinto sects. Shinto has about 81,000 shrines and about 85,000 priests in the country. According to surveys carried out in 2006 and 2008, less than 40% of the population of Japan identifies with an organised religion: around 35% are Buddhists, 30% to 40% are members of Shinto sects and derived religions.\n[…]\nShinto at Encyclopedia Britannica\n[…]\nJinja Honcho – English – The Official Japanese Organization of 80,000 Shinto Shrines"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xinto%C3%ADsmo",
        "situacao": "ok",
        "texto": "Xintoísmo (em japonês: 神道, transl. Shintō) é a espiritualidade tradicional do Japão e dos japoneses, considerado também uma religião pelos estudiosos ocidentais. A palavra Shinto (\"Caminho dos deuses\") foi adotada do chinês escrito (神道), através da combinação de dois kanji: \"shin\" (神), que significa \"deuses\" ou \"espíritos\" (originalmente da palavra chinesa shen); e \"tō\" (道), ou \"do\", que significa\n[…]\nNo princípio, esta religião étnica não tinha nome, mas quando se introduziu o budismo no Japão durante o século VI, um dos nomes que este recebeu foi Butsudo, que significa \"o caminho do Buda\". Assim, a fim de diferenciar do budismo, a religião nativa passou a ser chamada \"xinto\" (shinto), palavra de origem chinesa, que combina dois caracteres chineses (kanji): \"shin\" (神), significando deuses ou espíritos (quando lido sozinho é pronunciado kami) e  \"tō\" (道), que significa caminho filosófico.\n[…]\nAssim, xintoísmo significa \"o caminho dos deuses\". O nome chinês foi escolhido porque na época apenas o chinês era escrito no Japão, já que não haviam desenvolvido ainda a escrita japonesa.\n[…]\nEstes livros apresentam as narrativas míticas da tradição xintoísta. Os mitos descritos referem-se a um caos primordial em que os elementos se mesclam em massa amorfa e indistinta, \"como num ovo\". Os deuses surgiram desse caos.\n[…]\nA tradição religiosa do xintoísmo é anterior ao budismo, que posteriormente foi introduzido no Japão no século VI. O contato entre as duas religiões modificou ambas. Os budistas adotaram divindades xintoístas, e estes, que consideravam seus deuses espíritos invisíveis e sem formas precisas, aprenderam com o budismo a erigir imagens e templos votivos. Proclamou-se inclusive que as duas religiões eram manifestações diferentes da mesma verdade, o que originou uma tendência sincretista.\n[…]\n«Religion & Ethics - Shinto» (em inglês)\n[…]\n«Shinto - a Philosophical Introduction» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Jesus",
      "descricao": "Pregador judeu do século um, figura central do cristianismo"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O título Cristo, dado a Jesus, traduz para o grego o termo hebraico messias. O que ele quer dizer?",
    "resposta": "Ungido",
    "fonte": [
      "https://en.wikipedia.org/wiki/Christ_(title)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christ_(title)",
        "situacao": "ok",
        "texto": "Christ, used by Christians as both a name and a title, unambiguously refers to Jesus. As a title it is used both in the reciprocal form \"Christ Jesus\", meaning \"the Messiah Jesus\" (or \"Jesus the Khristós\"; lit. \"Jesus the Anointed\"), and independently as \"the Christ\". The earliest texts of the New Testament, the Pauline epistles, often refer to Jesus as \"Christ Jesus\", or simply \"Christ\".\n[…]\nAlthough the original followers of Jesus believed Jesus to be the Jewish messiah, e.g. in the Confession of Peter, he was usually called \"Jesus of Nazareth\" or \"Jesus, son of Joseph\". He came to be known by the name \"Jesus Christ\" among Christians, who believe that his crucifixion and resurrection fulfill the messianic prophecies of the Old Testament, especially the prophecies outlined in Isaiah 53 and Psalm 22.\n[…]\nThe so-called Confession of Peter, recorded in the Synoptic Gospels as Jesus's foremost apostle Peter saying that Jesus was the Messiah, has become a famous proclamation of faith among Christians since the first century.\n[…]\nDuring the Sanhedrin trial of Jesus, it might appear from the narrative of Matthew that Jesus at first refused a direct reply to the high priest Caiaphas's question: \"Are you the Messiah, the Son of God?\", where his answer is given merely as Σὺ εἶπας (Su eipas, \"You [singular] have said it\").\n[…]\nSimilarly but differently in Luke, all those present are said to ask Jesus: 'Are you then the Son of God?', to which Jesus reportedly answered: Ὑμεῖς λέγετε ὅτι ἐγώ εἰμι (Hymeis legete hoti ego eimi, \"You [plural] say that I am\". In the Gospel of Mark, however, when asked by Caiaphas 'Are you the Messiah, the Son of the Blessed One?', Jesus tells the Sanhedrin: Ἐγώ εἰμι (ego eimi, \"I am\").\n[…]\nO'Collins, Gerald (2009). Christology: A Biblical, Historical, and Systematic Study of Jesus. Oxford: Oxford University Press. ISBN 978-0-19-955787-5."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cristo",
        "situacao": "ok",
        "texto": "Cristo é o termo usado em português para traduzir a palavra grega Χριστός (Christós) que significa \"Ungido\". O termo grego, por sua vez, é uma tradução do termo hebraico מָשִׁיחַ (Māšîaḥ), palavra que em português foi incorporada como Messias.\n[…]\nA palavra geralmente é interpretada como a alcunha de Jesus por causa das várias menções a \"Jesus Cristo\" na Bíblia. A palavra é, na verdade, um título, daí o seu uso tanto em ordem direta \"Jesus Cristo\" como em ordem inversa \"Cristo Jesus\", significando neste último O Ungido, Jesus. Os seguidores de Jesus são chamados de cristãos porque acreditam na doutrina de Jesus, o Cristo, ou Messias, sobre quem falam as profecias da Tanakh (que os cristãos conhecem como Antigo Testamento).\n[…]\nA expressão \"Jesus Cristo\" surge várias vezes nos escritos gregos da Bíblia, no Novo Testamento, e veio a tornar-se a forma respeitosa como os cristãos se referem a Jesus, Homem Judeu que, segundo os evangelhos, nasceu em Belém da Judeia e passou a maior parte da sua vida em Nazaré, na Galileia, sendo por isso chamado, às vezes, de Jesus de Nazaré ou Nazareno. O título Cristo, portanto, confere uma perspectiva religiosa à figura histórica de Jesus.\n[…]\nEnsinamentos sobre Jesus e testemunhos sobre o que fez durante os três anos do seu ministério são encontrados na leitura do Novo Testamento. Ensinamentos bíblicos sobre a pessoa de Jesus Cristo poderão ser resumidos em Jesus Cristo ser totalmente Deus (divino) e totalmente humano ao mesmo tempo, numa única pessoa isenta de pecados.\n[…]\nEntre os que entendem ser Jesus o Messias, seria relatado que nele foram cumpridas as profecias do Antigo Testamento. Tais como:\n[…]\nJesus\n[…]\nProfessias messiânicas cumpridas por Jesus About-Jesus.org\n[…]\nCristo no Islã Visão islãmica do Messias",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Dalai-lama",
      "descricao": "Título do principal líder espiritual da escola Gelug do budismo tibetano"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No título Dalai-lama, a palavra mongol dalai corresponde a que elemento da natureza?",
    "resposta": "Oceano",
    "distratores": [
      "Montanha",
      "Céu",
      "Sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dalai_Lama"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dalai_Lama",
        "situacao": "ok",
        "texto": "The Dalai Lama (UK: , US: ; Tibetan: ཏཱ་ལའི་བླ་མ་, Wylie: Tā la'i bla ma [táːlɛː láma]) is the spiritual head of Tibetan Buddhism. The term is part of the full title \"Holiness Knowing Everything Vajradhara Dalai Lama\" given by Altan Khan. He offered it in appreciation to the Gelug school's then-leader, Sonam Gyatso, who received the title in 1578 at Yanghua Monastery.\n[…]\n\"Dalai Lama\" is part of the full title \"圣 识一切 瓦齐尔达喇 达赖 喇嘛\" (\"Holiness Knowing Everything Vajradhara Dalai Lama\") given by Altan Khan. \"Dalai Lama\" combines the Mongolic word dalai ('ocean') and the Tibetan word བླ་མ་ (bla-ma) ('master, guru'). The word dalai corresponds to the Tibetan word gyatso or rgya-mtsho, and, according to Schwieger, was chosen by analogy with the Mongolian title Dalaiyin qan or Dalaiin khan.\n[…]\nUntil 1674, the Fifth Dalai Lama had mediated in Dzungar Mongol affairs whenever they required him to do so, and the Kangxi Emperor, who had succeeded the Shunzhi Emperor in 1661, would accept and confirm his decisions automatically.\n[…]\nIn 2019, the Dalai Lama spoke out about his successor, saying that after his death he is likely to be reincarnated in India. He also warned that any Chinese interference in succession should be considered invalid. The Dalai Lama's succession also involves Mongolia, given its strong Tibetan Buddhist ties.\n[…]\nThe Jebtsundamba Khutuktu, the latest one chosen from Mongolia, is the third most important figure in the Tibetan Buddhist hierarchy, and plays a significant role in the recognition of the next Dalai Lama.\n[…]\nIn 2020, the Dalai Lama said he did not support Tibetan independence and hoped to visit China as a Nobel Prize winner. He said \"I prefer the concept of a 'republic' in the People's Republic of China. In the concept of a republic, ethnic minorities are like Tibetans, Mongols, Manchus, and Xinjiang Uyghurs. We can live in harmony\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dalai-lama",
        "situacao": "ok",
        "texto": "O Dalai-lama (em tibetano: ཏཱ་ལའི་བླ་མ་; Wylie: Tā la'i bla ma) é o líder espiritual do budismo tibetano. O termo faz parte do título completo \"Santidade que Tudo Conhece, Vajradhara, Dalai-lama\", concedido por Altan Khan. Ele o ofereceu em reconhecimento ao então líder da escola Gelug, Sonam Gyatso, que recebeu o título em 1578, no Mosteiro de Yanghua.\n[…]\n\"Dalai-lama\" faz parte do título completo \"圣 识一切 瓦齐尔达喇 达赖 喇嘛\" (\"Santidade que Tudo Conhece, Vajradhara, Dalai-lama\"), concedido por Altan Khan. \"Dalai-lama\" combina a palavra das línguas mongólicas dalai (\"oceano\") com a palavra tibetana བླ་མ་ (bla-ma) (\"mestre, guru\"). A palavra dalai corresponde à palavra tibetana gyatso ou rgya-mtsho, e, segundo Schwieger, foi escolhida por analogia com o título mongol Dalaiyin qan ou Dalaiin khan.\n[…]\nGendun Drup (1391–1474), discípulo de Je Tsongkapa, acabaria conhecido como o 1.º Dalai-lama, mas só receberia esse título 104 anos depois de sua morte.\n[…]\nPor proposta de Sonam Gyatso, Altan Khan patrocinou a construção do Mosteiro de Thegchen Chonkhor no local onde Sonam Gyatso ministrara ensinamentos ao ar livre para toda a população mongol. Também chamou Sonam Gyatso de \"Dalai\", equivalente mongol de \"Gyatso\" (oceano).\n[…]\nDepois de corrigido, o texto dizia: \"Aquele que reside no paraíso ocidental pacífico e virtuoso é o imutável Vajradhara, Lama Oceano, unificador das doutrinas do Buda para todos os seres sob o céu\". O diploma declarava: \"Proclamação, para que todos os povos do hemisfério ocidental saibam\". O historiador tibetano Nyima Gyaincain afirma que, com base nesses textos, o Dalai-lama era apenas um subordinado do imperador.\n[…]\nO Jebtsundamba Khutuktu, cuja encarnação mais recente foi escolhida na Mongólia, é a terceira figura mais importante da hierarquia do budismo tibetano e desempenha papel relevante no reconhecimento do próximo Dalai-lama.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Quakers",
      "descricao": "Movimento cristão protestante surgido na Inglaterra no século dezessete, oficialmente Sociedade Religiosa dos Amigos"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O apelido do grupo cristão quaker, surgido na Inglaterra no século dezessete, vem de um verbo inglês. Que ação esse verbo descreve?",
    "resposta": "Tremer",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quakers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quakers",
        "situacao": "ok",
        "texto": "Quakers are people who belong to the Religious Society of Friends, originally known as simply the Society of Friends, a historically Protestant Christian set of denominations. Members refer to each other as Friends after John 15:14 in the Bible. Originally, others referred to them as Quakers because the founder of the movement, George Fox, told a judge to \"quake before the authority of God\" along \n[…]\nLike many religious movements, the Religious Society of Friends has evolved, changed, and split into sub-groups.\n[…]\nIn the United Kingdom, the predominantly liberal and unprogrammed Yearly Meeting of the Religious Society of Friends (Quakers) in Britain, has 478 local meetings, and 14,260 adult members, with an additional 8,560 non-member adults who attend worship and 2,251 children. The number has declined steadily since the mid-20th century. Programmed meetings occur, including in Wem and London.\n[…]\nIn 2002 a committee consisting of members of the Religious Society of Friends in the US and the Clerk of the Ramallah Meeting began to raise funds for the renovations of the buildings and grounds of the Meetinghouse. By November 2004 the renovations were complete, and on 6 March 2005, exactly 95 years to the day after the dedication, the Meetinghouse and Annex were rededicated as a Quaker and community resource. Friends meet every Sunday for unprogrammed Meeting for Worship.\n[…]\nPrior to the 20th century Quakers considered the Religious Society of Friends to be a Christian movement, but many did not feel that their religious faith fit within the categories of Catholic, Orthodox, or Protestant. Many Conservative Friends, while fully seeing themselves as orthodox Christians, choose to remain separate from other Christian groups.\n[…]\nRichmond Declaration of Faith of the Religious Society of Friends (1887)\n[…]\nSociety of Friends Church history collection, Rare Books and Manuscripts, Indiana State Library"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quaker",
        "situacao": "ok",
        "texto": "Quakers (também denominado quacre ou quáquer em português) são pessoas que pertencem à Sociedade Religiosa dos Amigos, um conjunto de denominações cristãs historicamente protestantes. Os membros destes movimentos (\"os Amigos\") estão geralmente unidos pela crença na capacidade de cada ser humano de experimentar a luz interior ou de \"responder à luz de Deus em cada um\". Alguns professam um sacerdóci\n[…]\nIsaac Crewdson foi um Ministro Registrado em Manchester. Seu livro de 1835, A Beacon to the Society of Friends, insistia que a luz interior estava em desacordo com uma crença religiosa na salvação pela expiação de Cristo. Esta controvérsia cristã levou à renúncia de Crewdson da Sociedade Religiosa dos Amigos, junto com 48 membros do Encontro de Manchester e cerca de 250 outros quakers britânicos em 1836–1837. Alguns deles juntaram-se aos Irmãos de Plymouth.\n[…]\nOs Amigos Ortodoxos tornaram-se mais evangélicos durante o século XIX  e foram influenciados pelo Segundo Grande Despertar. Este movimento foi liderado pelo quaker britânico Joseph John Gurney. Amigos Cristãos realizaram encontros de reavivamento na América e envolveram-se no Movimento de Santidade das igrejas. Quakers como Hannah Whitall Smith e Robert Pearsall Smith tornaram-se oradores no movimento religioso e introduziram nele frases e práticas quakers.\n[…]\nA teoria da evolução, conforme descrita em On the Origin of Species (1859), de Charles Darwin, foi contestada por muitos quakers no século XIX, particularmente por quakers evangélicos mais antigos que dominavam a Sociedade Religiosa dos Amigos na Grã-Bretanha. Esses quakers mais velhos suspeitavam da teoria de Darwin e acreditavam que a seleção natural não poderia explicar a vida por si só.\n[…]\nAção Social – organizações como o Greenpeace e a Amnistia Internacional foram fundadas pelos quakers e são influenciadas pela ideologia da Sociedade dos Amigos;\n[…]\nQuakers em Curlie",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Diwali",
      "descricao": "Festa hindu das luzes, celebrada entre outubro e novembro"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A festa hindu do Diwali tem um nome sânscrito que descreve o que se vê nas casas durante a celebração. O que ele quer dizer?",
    "resposta": "Fileira de luzes",
    "fonte": [
      "https://en.wikipedia.org/wiki/Diwali"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "Dipavali (IAST: Dīpāvalī), commonly known as Diwali (), is the Hindu festival of lights, with variations celebrated in other Indian religions such as Jainism and Sikhism. It symbolises the spiritual victory of Dharma over Adharma, light over darkness, good over evil, and knowledge over ignorance. Diwali is celebrated during the Hindu lunisolar months of Ashvin (according to the amanta tradition) a\n[…]\nOriginally a Hindu festival, Diwali has transcended religious lines. Diwali is celebrated by Hindus, Jains, Sikhs, and Newar Buddhists, although for each faith it marks different historical events and stories, but nonetheless the festival represents the same symbolic victory of light over darkness, knowledge over ignorance, and good over evil.\n[…]\nDiwali is not a festival for most Buddhists, with the exception of the Newar people of Nepal who revere various deities in Vajrayana Buddhism and celebrate Diwali by offering prayers to Lakshmi. Newar Buddhists in Nepalese valleys also celebrate the Diwali festival over five days, in much the same way, and on the same days, as the Nepalese Hindu Diwali-Tihar festival.\n[…]\nThis day is commonly celebrated as Diwali in Tamil Nadu, Goa, and Karnataka. Traditionally, Marathi Hindus and South Indian Hindus receive an oil massage from the elders in the family on the day and then take a ritual bath, all before sunrise. Many visit their favourite Hindu temple.\n[…]\nNational and civic leaders such as the former Prince Charles have attended Diwali celebrations at prominent Hindu temples in the UK, such as the Swaminarayan Temple in Neasden, using the occasion to highlight contributions of the Hindu community to British society. Additionally, cities across the UK show support of the celebrations through Diwali lights, decorations, and cultural festivities such as dance performances, food stalls and workshops.\n[…]\nWinter air pollution around Diwali and Asthma"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diwali",
        "situacao": "ok",
        "texto": "O Diwali (também Deepavali ou Deepawali) é uma festa religiosa hindu, conhecida também como o festival das luzes. Durante o Diwali, celebrado uma vez ao ano, as pessoas estreiam roupas novas, dividem doces e lançam fogos de artifício. Este festival celebra, entre outras histórias, a destruição de Narakasura por Sri Krishna, o que converte o Diwali num evento religioso que simboliza a destruição da\n[…]\nO Diwali é um grande feriado indiano, e um importante festival para o hinduísmo, o sikhismo, o budismo e o jainismo. Muitas histórias são associados a Diwali. O feriado é atualmente comemorado pelos hindus, sikhs e jainas em todo o mundo como o festival das luzes, onde as luzes ou lâmpadas significam a vitória do bem sobre o mal dentro de cada ser humano.\n[…]\nEm muitas partes da Índia, é o Baile do Rei Ramachandra em Ayodhya, após 14 anos de exílio na floresta. Sri Rama, um dos avatares de Vishnu, derrotou o mal encarnado em Ravana, que havia raptado sua esposa Sitadevi. O povo de Ayodhya (a capital do seu reino) congratulou-se com Rama por iluminação em fileiras (avali) das lâmpadas (Deepa), dando assim o seu nome: Deepavali. Esta palavra, em devido tempo, se tornou Diwali em hindi.\n[…]\nApós a sua libertação ele foi para o Darbar Sahib (Templo Dourado) na cidade santa de Amritsar, onde foi saudado pelo povo com tamanha felicidade que acenderam velas e diyas para cumprimentar o Guru. Devido a isto, sikhs referem frequentemente que Diwali também como BANDI Chhorh Divas - \"o dia da libertação dos detidos\".\n[…]\nNa Índia, o Diwali é hoje considerado um festival nacional quanto ao aspecto estético, entretanto, é usufruído pelos hindus, independentemente da fé.\n[…]\nO Divali envolve muitas histórias do Hinduísmo, principalmente relacionadas a Vishnu e Lakshmi, sua esposa.\n[…]\n«Diwali - Veja as fotos do festival das luzes na Índia». Folha de S.Paulo\n[…]\n«Fotos: Diwali, o festival das luzes». Resumo Fotográfico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Rastafarianismo",
      "descricao": "Movimento religioso surgido na Jamaica nos anos 1930"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O movimento rastafári, nascido na Jamaica, tirou seu nome do título e do nome de que imperador etíope antes da coroação?",
    "resposta": "Haile Selassie",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rastafari",
      "https://en.wikipedia.org/wiki/Haile_Selassie"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rastafari",
        "situacao": "ok",
        "texto": "Rastafari is an Abrahamic religion that developed in Jamaica during the 1930s. It is classified as both a new religious movement and a social movement by scholars of religion. There is no central authority in control of the movement and much diversity exists among practitioners, who are known as Rastafari, Rastafarians, or Rastas.\n[…]\nSometimes this dreadlocked hair is then shaped and styled, often inspired by a lion's mane symbolising Haile Selassie, who is regarded as \"the Conquering Lion of Judah\".\n[…]\nThe late 1960s also saw the formation of the Rastafarian Movement Association's Rasta Voice, the first official Rastafari newspaper. At the invitation of its government, Haile Selassie visited Jamaica in April 1966, with thousands of Rastas amassing to see his arrival at the airport.\n[…]\nEnthusiasm for Rastafari was dampened by Haile Selassie's death in 1975 and then Marley's in 1981. During the 1980s, the number of Rastas in Jamaica declined, with Pentecostal and other Charismatic Christian groups proving more successful at attracting young recruits. Several prominent Rastas converted to Christianity, and two of those who did so—Judy Mowatt and Tommy Cowan—maintained that Marley had converted to Christianity, in the form of the Ethiopian Orthodox Church, during his final days.\n[…]\nRastafari is a non-missionary religion. However, elders from Jamaica often go \"trodding\" to instruct new converts in the fundamentals of the religion. On researching English Rastas during the 1970s, Cashmore noted that they had not converted instantly, but rather had undergone \"a process of drift\" through which they gradually adopted Rasta beliefs and practices, resulting in their ultimate acceptance of Haile Selassie's central importance. Based on his research in West Africa, Neil J.\n[…]\nList of Rastafarians"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Haile_Selassie",
        "situacao": "ok",
        "texto": "Haile Selassie I (born Tafari Makonnen or Lij Tafari; 23 July 1892 – 27 August 1975) was Emperor of Ethiopia from 1930 to 1974. He rose to power as the Regent Plenipotentiary of Ethiopia (Enderase) under Empress Zewditu between 1916 and 1930.\n[…]\nSelassie appointed his cousin Ras Imru Haile Selassie as Prince Regent in his absence, departing with his family for French Somaliland on 2 May 1936.\n[…]\nPrior to Fairfield House, he briefly stayed at Warne's Hotel in Worthing and in Parkside, Wimbledon. A bust of Haile Selassie by Hilda Seligman stood in nearby Cannizaro Park to commemorate his stay, and was a popular place of pilgrimage for London's Rastafari community, until it was destroyed by protestors on 30 June 2020.\n[…]\nMultiple memorials were built for Selassie, mainly in Ethiopia. One of these memorials was unveiled in 2019 at the African Union's Headquarters in Addis Ababa. This memorial was made to honor his long efforts of Pan-Africanism and anti-colonialism during his rule. A wax statue of Haile Selassie can be found in Addis Ababa's Unity Park. A high school in Kingston, Jamaica is named after Haile Selassie.\n[…]\n2 November 1930 – 12 September 1974: By the Conquering Lion of the Tribe of Judah, His Imperial Majesty Haile Selassie I, King of Kings, Lord of Lords, Elect of God.\n[…]\nSelassie held the following ranks:\n[…]\nEthiopian Treasures – Emperor Haile Selassie I\n[…]\nRare and Unseen: Haile Selassie Archived 13 December 2011 at the Wayback Machine – slideshow by Life magazine\n[…]\nHaile Selassie I Speaks – Text & Audio\n[…]\nCollection by Martin Rikli in 1935–1936, including photos of Haile Selassie, open access through the University of Florida Digital Collections\n[…]\nNewspaper clippings about Haile Selassie in the 20th Century Press Archives of the ZBW"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Movimento_rastaf%C3%A1ri",
        "situacao": "ok",
        "texto": "Rastafári (também grafado Ras Tafari) ou Rastafarianismo (termo considerado ofensivo) é uma religião judaico-cristã afrocêntrica surgida na Jamaica, na década de 1930, entre negros descendentes de africanos escravizados. Conceituado também como um movimento político-religioso, o Rastafári foi um dos movimentos negros de resistência ao racismo e ao colonialismo mais influentes do século XX.\n[…]\nO termo \"Rastafari\" deriva do título de Haile Selassie antes de sua coroação; Na monarquia etíope, o termo \"Ras\" significa um duque ou príncipe, enquanto \"Tafari Makonnen\" era seu nome. Não se sabe por que os primeiros Rastas adotaram esta forma do nome de Haile Selaisse como a base do nome de sua religião.\n[…]\nHaile Selassie I é o deus vivo\n[…]\nMuitos rastafáris aprendem a língua amárica, que eles consideram ser sua língua original, uma vez que esta é a língua de Hailê Selassiê, e para identificá-los como etíopes; porém na prática eles continuam a falar sua língua nativa, geralmente a versão do inglês conhecida como patois jamaicano.\n[…]\nUma opinião que une os rastafáris é que Ras (título amárico de nobreza que pode ser traduzido como \"príncipe\" ou \"cabeça\") Tafari (\"da paz\")  Makonnen que foi coroado como Hailê Selassiê I, Imperador da Etiópia em 2 de Novembro de 1930, é a encarnação do chamado Jah (Deus) na Terra, e o Messias Negro que irá liderar os povos de origem africana a uma terra prometida de emancipação e justiça divina. Porém grande parte dos rastafáris não acreditam nisso literalmente.\n[…]\nHailê Selassiê era, de acordo com algumas tradições, o ducentésimo vigésimo quinto na linha de imperadores etíopes descendentes do bíblico Rei Salomão e a Rainha de Sabá. O Salmo 87:4-6 é também interpretado como a previsão da sua coroação.\n[…]\nLinks para artigos relacionados com o Movimento Rastafari no site RastaItes.com (em inglês) acessado a 11 de agosto de 2009\n[…]\n«Ganja in Jamaica» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Rosh Hashaná",
      "descricao": "Festa que marca o início do ano no calendário judaico"
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Como se traduz literalmente Rosh Hashaná, o nome hebraico da festa que abre o calendário judaico?",
    "resposta": "Cabeça do ano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosh_Hashanah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosh_Hashanah",
        "situacao": "ok",
        "texto": "Rosh Hashanah (pronounced [ˌʁoʃ haʃaˈna]; Hebrew: רֹאשׁ הַשָּׁנָה, romanized: rôš haššānāh, lit. 'head of the year') is the New Year in Judaism. The biblical name for the holiday is Yom Teruah (IPA: [joːm təruːˈʕaː]; Biblical Hebrew: יוֹם תְּרוּעָה, romanized: yôm terûʿāh, lit. 'day of blasting'). It is the first of the High Holy Days (יָמִים נוֹרָאִים, yāmīm nōrāʾīm, 'days of awe'), as specified \n[…]\nThe holiday's role as one of the Jewish New Years first appears in rabbinic literature, and is thoroughly discussed in the Mishna and Talmud in Rosh Hashanna tractate. Rosh Hashanah is the new year for calculating ordinary calendar years, Sabbatical years, Jubilee years, and dates inscribed on legal deeds and contracts. It also commemorates the creation of humankind, which allowed God to form a relationship with his creation and take his position as king over them.\n[…]\nSimilarly, it is said that the world was created on Rosh Hashanah.\n[…]\nOriginally, the date of Rosh Hashanah was determined based on observation of the new moon (\"molad\"), and thus could fall on any day of the week. However, around the third century CE, the Hebrew calendar was fixed such that the first day of Rosh Hashanah never fell on Wednesday or Friday, and by the ninth century it had been fixed so that it also could not fall out on Sunday (lo AD'U rosh).\n[…]\nRegarding the Gregorian calendar, the earliest date on which Rosh Hashanah can fall is 5 September, as happened in 1842, 1861, 1899, and 2013. The latest Gregorian date that Rosh Hashanah can occur is 5 October, as happened in 1815, 1929, and 1967, and will happen again in 2043. After 2089, the differences between the Hebrew and Gregorian calendars will result in Rosh Hashanah falling no earlier than 6 September. Starting in 2214, the latest date will be 6 October.\n[…]\nRosh Hashanah Prayers by Chazzanim – an audio, video and printed guide to the Rosh Hashanah prayers"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rosh_Hashan%C3%A1",
        "situacao": "ok",
        "texto": "Rosh Hashaná (em hebraico; ראש השנה, lit. cabeça do ano), o \"Ano-Novo Judaico\", é uma festa que ocorre no primeiro dia do primeiro mês (Tishri) do calendário judaico. A Torá refere-se a este dia como Yom ha-Zikkaron (o dia da lembrança) ou Yom Teruah. O início de um período de introspecção e meditação de dez dias (Yamim Noraim) que acaba no primeiro dia de Yom Kipur.\n[…]\nA antiga Mishná começa dizendo: \"Mishnah, Mo'ed, Rosh Hashaná.\" 1:1 – Quatro dias servem de ano-novo:\n[…]\nShana Tová (em hebraico: שנה טובה) – Saudação tradicional do Rosh Hashaná e significa \"bom ano\".\n[…]\nSelichot – Em hebraico significa ‘perdão’, a coleção de salmos e rezas de arrependimento e pedidos de piedade e perdão a Hashem que as comunidades judaicas se acostumaram a recitá-los desde os dias que antecedem Rosh Hashaná até a véspera de Yom Kipur e em dias de jejum.\n[…]\nA oração de mussaf – Ela é feita somente em dias especiais do calendário judaico: aos sábados; no início dos meses judaicos; nas festividades que têm origem na Torá. Normalmente a oração de mussaf é composta pelas bênçãos comuns a todas as rezas. Porém, somente em Rosh Hashaná são acrescentadas três bênçãos no meio, em vez de uma só. Ao final de cada uma destas três bênção, costuma-se tocar o shofar:\n[…]\nComidas especiais – No jantar da véspera de Rosh Hashaná , costuma-se trazer à mesa comidas típicas como sinal para um novo ano bom e doce. Segundo a mística judaica da cabala, esses símbolos têm o poder de mudar o destino, mas, de acordo com linhas mais racionalistas, eles são símbolos que fazem nosso ponto de vista mudar com relação a fatos passados e futuros – a perspectiva que temos de um fato pode mudar o significado do que ele é para nós.\n[…]\nCabeça de carneiro (ou de peixe)\n[…]\nCalendário judaico\n[…]\nM. Rawiez, Rosh Hashana (transl.), Frankfort-on-the-Main, 1886;\n[…]\nRosh Hashanah no Judaism 101\n[…]\nRosh Hashaná e outras festas judaicas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Noventa e Cinco Teses",
      "descricao": "Documento de Martinho Lutero de 1517 que deu início à Reforma Protestante"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 1517, as noventa e cinco teses de Martinho Lutero atacavam sobretudo que prática da Igreja Católica?",
    "resposta": "Venda de indulgências",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ninety-five_Theses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ninety-five_Theses",
        "situacao": "ok",
        "texto": "The  Ninety-five Theses or  Disputation on the Power and Efficacy of Indulgences is a list of propositions for an academic disputation written in 1517 by Martin Luther, then a professor of moral theology at the University of Wittenberg, Germany. The Theses are retrospectively considered to have launched the Protestant Reformation and the birth of Protestantism, despite various quasi- or proto-Prot\n[…]\nMartin Luther, professor of moral theology at the University of Wittenberg and town preacher, wrote the Ninety-five Theses against the contemporary practice of the church with respect to indulgences. In the Roman Catholic Church, which was practically the only Christian church in Western Europe at the time, indulgences were part of the economy of salvation.\n[…]\nHe taught that receiving an indulgence presupposed that the penitent had confessed and repented; otherwise, it was worthless. A truly repentant sinner would also not seek an indulgence because they loved God's righteousness and desired the inward punishment of their sin. These sermons seem to have ceased from April to October 1517, presumably while Luther was writing the Ninety-five Theses. He composed a Treatise on Indulgences, apparently in early autumn 1517.\n[…]\nIn theses 53–55, Luther critiques the restrictions on preaching while the indulgence was being offered.\n[…]\n31 October 1517, the day Luther sent the Theses to Albert, was commemorated as the beginning of the Reformation as early as 1527, when Luther and his friends raised a glass of beer to commemorate the \"trampling out of indulgences\". The posting of the Theses was established in the historiography of the Reformation as the beginning of the movement by Philip Melanchthon in his 1548 Historia de vita et actis Lutheri.\n[…]\nNinety-five Theses at Project Gutenberg\n[…]\nNinety-five Theses public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/95_Teses",
        "situacao": "ok",
        "texto": "As 95 Teses ou Disputação do Doutor Martinho Lutero sobre o Poder e Eficácia das Indulgências (em latim: Disputatio pro declaratione virtutis indulgentiarum) são uma lista de proposições para uma disputa acadêmica escrita em 1517 por Martinho Lutero, professor de teologia moral da Universidade de Vitemberga, Alemanha, as quais iniciaram a Reforma Protestante, um cisma da Igreja Católica que mudou \n[…]\nTais teses discorrem sobre as posições de Lutero contra o que ele viu como práticas abusivas por pregadores que realizavam a venda de indulgências, que tinham por finalidade reduzir a punição temporal de pecados cometidos pelos próprios compradores ou por algum de seus entes queridos no purgatório. Nas Teses, Lutero afirmou que o arrependimento requerido por Cristo para que os pecados sejam perdoados envolve o arrependimento espiritual interior e não meramente uma confissão sacramental externa.\n[…]\nMartinho Lutero, professor de teologia moral da Universidade de Vitemberga e pregador na cidade, escreveu as 95 Teses contra a prática contemporânea da igreja com respeito às indulgências. Na Igreja Católica, praticamente a única igreja cristã na Europa na época, as indulgências faziam parte do que era chamado de economia da salvação.\n[…]\nEstes sermões cessaram de ser pregados entre abril e outubro de 1517, presumivelmente enquanto Lutero estava escrevendo as 95 Teses. Ele redigiu um Tratado Sobre a Indulgência e a Graça no início do outono de 1517, sendo este um exame cauteloso e uma pesquisa sobre o assunto.\n[…]\nAs Teses também tornaram evidente que Lutero acreditava que a igreja não estava pregando corretamente e que isto colocava os leigos em grave perigo. Além disso, as teses contradiziam o decreto do Papa Clemente VI, que afirmava que as indulgências são o tesouro da igreja. Este desprezo pela autoridade papal pressagiou conflitos posteriores.\n[…]\n«95 Teses». no Portal Luteranos",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Igreja Anglicana",
      "descricao": "Igreja da Inglaterra, separada de Roma no reinado de Henrique VIII"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século dezesseis, o rei inglês Henrique oitavo rompeu com o papa porque Roma se recusou a fazer o quê?",
    "resposta": "Anular seu casamento",
    "fonte": [
      "https://en.wikipedia.org/wiki/English_Reformation",
      "https://en.wikipedia.org/wiki/Church_of_England"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/English_Reformation",
        "situacao": "ok",
        "texto": "The English Reformation began in 16th-century England when the Church of England  broke away first from the authority of the pope and bishops over the King and then from some doctrines and practices of the Catholic Church. These events were part of the wider European Reformation: various religious and political movements that affected both the practice of Christianity in Western and Central Europe\n[…]\nThe Act of Supremacy to install Henry as the supreme head of the English church.\n[…]\nAfter the Restoration, Anglicanism took shape as a recognisable tradition. From Richard Hooker, Anglicanism inherited a belief in the \"positive spiritual value in ceremonies and rituals, and for an unbroken line of succession from the medieval Church to the latter day Church of England\". From the Arminians, it gained a theology of episcopacy and an appreciation for liturgy. From the Puritans and Calvinists, it \"inherited a contradictory impulse to assert the supremacy of scripture and preaching\".\n[…]\nHistory of the Church of England\n[…]\nHistory of England\n[…]\nReligion in England\n[…]\nThe History of the Reformation of the Church of England by Gilbert Burnet (Oxford University Press, 1829): Volume I, Volume I, Part II, Volume II, Volume II, Part II, Volume III Volume III, Part II\n[…]\nEcclesiastical Memorials, Relating Chiefly to Religion, and the Reformation of It, and the Emergencies of the Church of England, Under King Henry VIII, King Edward VI, and Queen Mary I by John Strype (Clarendon Press, 1822): Vol. I, Pt. I, Vol. I, Pt. II, Vol. II, Pt. I, Vol. II, Pt. II, Vol. III, Pt. I, Vol. III, Pt. II\n[…]\nAnnals of the Reformation and Establishment of Religion, and Other Various Occurrences in the Church of England, During Queen Elizabeth's Happy Reign by John Strype (1824 ed.): Vol. I, Pt. I, Vol. I, Pt. II, Vol. II, Pt. I, Vol. II., Pt. II, Vol. III, Pt. I, Vol. III, Pt. II, Vol. IV"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_England",
        "situacao": "ok",
        "texto": "The Church of England (C of E) is the established Christian church in England and the Crown Dependencies. It was the initial church of the Anglican tradition. The church traces its history to the Christian hierarchy recorded as existing in the Roman province of Britain by the 3rd century and to the 6th-century Gregorian mission to Kent led by Augustine of Canterbury. Its members are called Anglica\n[…]\nThe most senior bishop of the Church of England is the archbishop of Canterbury, who is the metropolitan of the southern province of England, the Province of Canterbury. She has the status of Primate of All England, and is the focus of unity for the worldwide Anglican Communion of independent national or regional churches. Dame Sarah Mullally currently serves as Archbishop, succeeding Justin Welby, who resigned effective 6 January 2025. Mullally is the first woman to hold this office.\n[…]\nList of bishops in the Church of England\n[…]\nRitualism in the Church of England\n[…]\nMarshall, Peter (2017b). \"Settlement Patterns: The Church of England, 1553–1603\". In Milton, Anthony (ed.). The Oxford History of Anglicanism. Vol. 1: Reformation and Identity, c. 1520–1662. Oxford University Press. doi:10.1093/acprof:oso/9780199639731.001.0001. ISBN 9780199639731.\n[…]\nShagan, Ethan H. (2017). \"The Emergence of the Church of England, c. 1520–1553\". In Milton, Anthony (ed.). The Oxford History of Anglicanism. Vol. 1: Reformation and Identity, c. 1520–1662. Oxford University Press. doi:10.1093/acprof:oso/9780199639731.001.0001. ISBN 9780199639731.\n[…]\nHardwick, Joseph. An Anglican British world: The Church of England and the expansion of the settler empire, c. 1790–1860 (Manchester UP, 2014).\n[…]\nHistorical resources on the Church of England at anglicanhistory.org\n[…]\nWorks by Church of England at LibriVox (public domain audiobooks)\n[…]\nThe Anglican Church Investigation Report Independent Inquiry into Child Sexual Abuse, October 2020"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Reforma_Inglesa",
        "situacao": "ok",
        "texto": "A Reforma Inglesa (ou Reforma anglicana) foi uma série de eventos ocorridos no século XVI através dos quais a Igreja da Inglaterra rompeu com a autoridade do Papa e a Igreja Romana. Está associada com o processo mais amplo da Reforma Protestante, um movimento político-religioso que afetou as práticas da fé cristã em todo o continente europeu.\n[…]\nTendo como base o desejo do rei Henrique VIII em anular seu casamento com Catarina de Aragão (negado pelo Papa Clemente VII em 1527), a Reforma Inglesa começou mais como uma disputa política do que teológica. As diferenças políticas entre Roma e a Inglaterra permitiram que os atritos teológicos já existentes se tornassem ainda maiores. Até o rompimento com Roma era o Papa e os concílios gerais da Igreja que decidiam a doutrina.\n[…]\nO rei acreditava que a falta de um herdeiro era porque seu casamento estava \"degradado aos olhos de Deus\". Catarina havia sido esposa de seu irmão e, segundo a Bíblia, ele não poderia ter se casado com ela. Uma exceção especial concedida pelo  Papa Júlio II foi necessária para que o casamento ocorresse. Henrique argumentou que aquilo fora errado e que seu casamento não era válido. Em 1527, o rei pediu ao Papa Clemente VII que anulasse seu casamento com Catarina, mas o papa recusou.\n[…]\nAssim, o rei Henrique VIII, embora teologicamente devoto católico romano (proclamado \"Defensor Fé\" por seus ataques contra o luteranismo), decidiu tornar-se Chefe Supremo da Igreja de Inglaterra, para obter a anulação de seu casamento. Em seguida, o Parlamento inglês decretou que os impostos religiosos não fossem mais pagos ao papa, mas ao rei, e que a Igreja Anglicana podia deliberar sobre as próprias questões internas, sem recorrer a Roma. Como resposta, o papa excomungou Henrique.\n[…]\nJudith Maltby, Prayer book and People in Elizabethan and Early Stuart England (Cambridge 1998)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Édito de Milão",
      "descricao": "Acordo de 313 entre os imperadores Constantino e Licínio sobre a religião no Império Romano"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Em 313, o que o Édito de Milão, dos imperadores Constantino e Licínio, garantiu aos cristãos do Império Romano?",
    "resposta": "Liberdade de culto",
    "fonte": [
      "https://en.wikipedia.org/wiki/Edict_of_Milan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Edict_of_Milan",
        "situacao": "ok",
        "texto": "The Edict of Milan (Latin: Edictum Mediolanense; Greek: Διάταγμα τῶν Μεδιολάνων, Diatagma tōn Mediolanōn) was the 13 February 313 AD agreement to treat Christians benevolently within the Roman Empire. Western Roman Emperor Constantine I and Emperor Licinius, who controlled the Balkans, met in Mediolanum (modern-day Milan) and, among other things, agreed to change policies towards Christians follow\n[…]\nIn his description of the events in Milan in his Life of Constantine, Eusebius eliminated the role of Licinius, whom he portrayed as the evil foil to his hero Constantine.\n[…]\nThe Edict of Milan was in effect directed against Maximinus Daza, the Caesar in the East who styled himself as Augustus. Having received Emperor Galerius's instruction to repeal the persecution in 311, Maximinus had instructed his subordinates to desist, but he had not released Christians from prisons or virtual death sentences in the mines, as Constantine and Licinius had both done in the West.\n[…]\nAlthough the Edict of Milan is commonly presented as Constantine's first great act as a Christian emperor, it is disputed whether the Edict of Milan was an act of genuine faith. The document could be seen as Constantine's first step in creating an alliance with the Christian God, whom he considered the strongest deity.\n[…]\nAt that time, he was concerned about social stability and the protection of the empire from the wrath of the Christian God: in this view, the edict could be a pragmatic political decision rather than a religious shift. However, the majority of historians believe that Constantine's adoption of Christianity was genuine, and that the Edict of Milan was merely the first official act of Constantine as a dedicated Christian.\n[…]\nConstantine the Great and Christianity\n[…]\nConstantinian shift\n[…]\nGalerius and Constantine's Edicts of Toleration 311 and 313, from the Medieval Sourcebook (Lactantius's version of the Edict)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%89dito_de_Mil%C3%A3o",
        "situacao": "ok",
        "texto": "O Édito de Milão ou Mediolano (em latim: Edictum mediolanense) promulgado em 13 de junho de 313 foi um documento proclamatório no qual se determina que o Império Romano seria neutro em relação ao credo religioso, acabando oficialmente com toda perseguição sancionada oficialmente, especialmente aos cristãos. Tal documento, publicado em forma de carta, transcreveu o acordo entre os tetrarcas Constan\n[…]\nAlém da liberdade religiosa, a aplicação do Édito fez devolver os lugares de culto e as propriedades que tinham sido confiscadas aos cristãos e vendidas em hasta pública: \"o mesmo será devolvido aos cristãos sem pagamento de qualquer indenização e sem qualquer fraude ou decepção\".\n[…]\nDiocleciano se aposentou em 305 deixando vago o cargo de imperador. Entre os postulantes ao cargo, estava Constantino, à época com 25 anos.\n[…]\nEm janeiro de 313, Constantino saiu de Roma com destino a Milão para presenciar o casamento de sua irmã com Licínio. Em março do mesmo ano, o Édito de Milão foi redigido e postado, em forma de carta endereçada ao governador da Bitínia, por Licínio em sua ida a Nicomédia, em 13 de junho de 313. A expressão Édito de Milão, pelo qual ficou conhecido tal documento, teria surgido apenas no século XVII.\n[…]\nAnos depois, na tentativa de consolidar a totalidade do Império Romano sob o seu domínio, Licínio em breve marchou contra Constantino. Como parte do seu esforço de ganhar a lealdade do seu exército, Licínio dispensou o exército e o serviço civil da política de tolerância do Édito de Milão, permitindo-lhes a expulsão dos cristãos. Os cristãos perderam consequentemente propriedades e muitos a vida.\n[…]\nPor volta de 324, Constantino ganhou o domínio de todo o Império, após derrotar Licínio em Adrianópolis e Crisópolis (atual Turquia) e ordenar sua execução por traição.\n[…]\nÉdito de Milão, março de 313.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Concílio de Trento",
      "descricao": "Concílio ecumênico da Igreja Católica realizado entre 1545 e 1563"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O Concílio de Trento, aberto pela Igreja Católica em 1545, foi uma reação a que movimento religioso?",
    "resposta": "Reforma Protestante",
    "fonte": [
      "https://en.wikipedia.org/wiki/Council_of_Trent"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Council_of_Trent",
        "situacao": "ok",
        "texto": "The Council of Trent (Latin: Concilium Tridentinum), held between 1545 and 1563 in Trent (or Trento), in Northern Italy, was the 19th ecumenical council of the Catholic Church.\n[…]\nPope Paul III (1534–1549), seeing that the Protestant Reformation was no longer confined to a few preachers, but had won over various princes, especially in Germany, to its ideas, desired a council. Yet when he proposed the idea to his cardinals, it was almost unanimously opposed. Nonetheless, he sent nuncios throughout Europe to propose the idea. Paul III issued a decree for a general council to be held in Mantua, Italy, to begin on 23 May 1537.\n[…]\nPope Paul III then initiated several internal Church reforms while Emperor Charles V convened with Protestants and Cardinal Gasparo Contarini at the Diet of Regensburg, to reconcile differences. Mediating and conciliatory formulations were developed on certain topics. In particular, a two-part doctrine of justification was formulated that would later be rejected at Trent. Unity failed between Catholic and Protestant representatives \"because of different concepts of Church and Justification\".\n[…]\nOut of 87 books written between 1546 and 1564 attacking the Council of Trent, 41 were written by Pier Paolo Vergerio, a former papal nuncio turned Protestant Reformer. The 1565–73 Examen decretorum Concilii Tridentini (Examination of the Council of Trent) by Martin Chemnitz was the main Lutheran response to the Council of Trent.\n[…]\nPaolo Sarpi, Historia del Concilio Tridentino, London: John Bill,1619 (History of the Council of Trent, English translation by Nathaniel Brent, London 1620, 1629 and 1676)\n[…]\nDocuments of the Council in Latin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conc%C3%ADlio_de_Trento",
        "situacao": "ok",
        "texto": "O Concílio de Trento, realizado de 13 de dezembro de 1545 a 4 de dezembro de 1563, foi o 19.º concílio ecumênico da Igreja Católica. Foi convocado pelo Papa Paulo III para assegurar a unidade da fé e a disciplina eclesiástica, no contexto da Reforma da Igreja Católica e da reação à divisão então vivida na Europa devido à Reforma Protestante, razão pela qual é denominado também de Concílio da Contr\n[…]\nO Concílio de Trento foi o concílio ecumênico mais longo da História da Igreja Católica. Foi também o concílio que \"emitiu o maior número de decretos dogmáticos e reformas, e produziu os resultados mais benéficos\", duradouros e profundos \"sobre a fé e a disciplina da Igreja\".\n[…]\nPara opor-se ao protestantismo, o concílio emitiu numerosos decretos disciplinares e especificou claramente as doutrinas católico‐romanas quanto à salvação, os sete sacramentos (como por exemplo, confirmou a presença de Cristo na Eucaristia), o Cânone de Trento (reafirmou como autêntica a Vulgata) e a Tradição, a doutrina da graça e do pecado original, a justificação, a liturgia e o valor e importância da Missa (unificou o ritual da missa de rito romano, abolindo as variações locais, instituindo a chamada \"Missa Tridentina\"), o celibato clerical, a hierarquia católica, o culto dos santos, das relíquias e das imagens, as indulgências e a natureza da Igreja.\n[…]\n2.º Período (1551-1552) — Celebraram-se 6 sessões, continuando a promulgar-se, simultaneamente, decretos de reforma e doutrinais ainda sobre sacramentos, particularmente sobre a Eucaristia (nomeadamente sobre a questão da transubstanciação), a penitência, e a extrema-unção. A guerra entre Carlos V e os príncipes protestantes constituiu um perigo para os padres conciliares de Trento;\n[…]\n«Cânones e decretos do Concílio de Trento», Biblioteca (em latim), BR: Unesp  [ligação inativa]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Hégira",
      "descricao": "Migração de Maomé e seus seguidores de Meca para Medina, em 622"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A Hégira, a mudança de Maomé de Meca para Medina em 622, marca o início de quê?",
    "resposta": "Calendário islâmico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hijrah",
      "https://en.wikipedia.org/wiki/Islamic_calendar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hijrah",
        "situacao": "ok",
        "texto": "The Hijrah, (Arabic: الهجرة, romanized: al-Hijrah, lit. 'migration') also Hegira (from Medieval Latin), was the journey the Islamic prophet Muhammad and his followers took from Mecca to Medina. The year in which the Hijrah took place is also identified as the epoch of the Lunar Hijri and Solar Hijri calendars; its date equates to 16 July 622 in the Julian calendar.\n[…]\nIn May 622, after having convened twice with members of the Medinan tribes of Aws and Khazraj at al-'Aqabah near Mina, Muhammad secretly left his home in Mecca to emigrate to their city, along with his friend, father-in-law and companion Abu Bakr.\n[…]\nIslamic tradition relates that, in light of the unfolding events, one of the Quraysh chiefs, Abu Jahl, Muhammad's childhood friend-turned-enemy, proposed a joint assassination of Muhammad by representatives of each Quraysh clan. Having been informed of this by the angel Gabriel, Muhammad asked his cousin Ali to lie on his bed covered with his green hadrami cloak, assuring him that it would keep him safe.\n[…]\nThe second Rashidun Caliph, Umar ibn Al-Khattab, designated the Muslim year during which the Hegira occurred the first year of the Islamic calendar in 638 or the 17th year of the Hegira. This was later Latinized to Anno Hegirae, the abbreviation of which is still used to denote Hijri dates today. Burnaby states that: \"Historians in general assert that Muhammad fled from Mecca at the commencement of the third month of the Arabian year, Rabi 'u-l-awwal. They do not agree as to the precise day.\n[…]\nSeveral Islamic historians and scholars, including Al Biruni, Ibn Sa'd, and Ibn Hisham, have discussed these dates in depth.\n[…]\nEarly Muslim conquests – Expansion of the Islamic state (622–750)\n[…]\nHajj – Islamic pilgrimage to Mecca\n[…]\nIslamiCity.com article on the Hijrah"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Islamic_calendar",
        "situacao": "ok",
        "texto": "The (lunar) Hijri calendar (Arabic: ٱلتَّقْوِيم ٱلْهِجْرِيّ, romanized: al-taqwīm al-hijrī), also known in English as the Islamic calendar or Muslim calendar, is a lunar calendar consisting of 12 lunar months in a year of 354 or 355 days. It is used to determine the dates of Islamic holidays and rituals, such as the annual fasting and the annual season for the great pilgrimage.\n[…]\nThis calendar enumerates the Hijri era, whose epoch was established at the Islamic New Year in 622 CE. During that year, Muhammad and his followers migrated from Mecca to Medina and established the first Muslim community (ummah), an event commemorated as the Hijrah.\n[…]\nThe years of the Islamic calendar thus began with the month of Muharram in the year of Muhammad's arrival at the city of Medina, even though the actual emigration took place in Safar and Rabi' I of the intercalated calendar, two months before the commencement of Muharram in the new fixed calendar. Because of the Hijra, the calendar was named the Hijri calendar.\n[…]\nF A Shamsi (1984) postulated that the Arabic calendar was never intercalated. According to him, the first day of the first month of the new fixed Islamic calendar (1 Muharram AH 1) was no different from what was observed at the time. The day the Prophet moved from Quba' to Medina was originally 26 Rabi' I on the pre-Islamic calendar. 1 Muharram of the new fixed calendar corresponded to Friday, 16 July 622 CE, the equivalent civil tabular date (same daylight period) in the Julian calendar.\n[…]\nIslamic New Year – Includes a table of recent and imminent equivalent dates in the Gregorian calendar\n[…]\nList of observances set by the Islamic calendar\n[…]\nPre-Islamic Arabian calendar\n[…]\nHelmer Aslaksen The Islamic Calendar (archived)\n[…]\nLiving a Devotional Sufi Life with Islamic Calendar\n[…]\nKhalid Chraibi, The reform of the Islamic calendar: the terms of the debate. Tabsir.net. September 2012."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/H%C3%A9gira",
        "situacao": "ok",
        "texto": "Hégira (em árabe: هجرة; romaniz.: Hijraʰ; lit: \"exílio\", \"separação\") foi a fuga de Maomé de Meca para Medina, que marca o ano inicial do calendário islâmico.\n[…]\nMaomé, natural de Meca, tinha mais de cinquenta anos de idade quando se tornou famoso por seus ensinamentos. Como mensageiro de Alá, ele pregava reformas tanto na religião judaica quanto no cristianismo, além de atacar o paganismo de seu país. Os cidadãos de Meca tornaram-se tão hostis que, em 622, Maomé foi obrigado a se refugiar em Medina.\n[…]\nDurante a fuga, a 5 km de Medina, Maomé e seus seguidores ergueram um templo, a Mesquita de Quba, considerada a primeira mesquita.\n[…]\nA data da Hégira costuma ser incorretamente datada na sexta-feira, dia 16 de julho de 622 (pelo calendário juliano), ou, como o dia começa no pôr do sol, no dia anterior, 15 de julho.. Essa data é a época do calendário islâmico.\n[…]\nA data da Hégira costuma ser calculada de formas diferentes por diversos autores.\n[…]\nA chegada de Maomé a Iatrebe (Medina) ocorreu no dia 12 do antigo mês Rabia, que corresponde a 24 de setembro de 622 pelo calendário juliano, e sua fuga de Meca no dia 1 do mês Rabia. John Bruno Hare calcula da data da fuga de Meca em 20 de setembro de 622.\n[…]\nBURLOT, Joseph. A Civilização Islâmica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Ramadã",
      "descricao": "Nono mês do calendário islâmico, dedicado ao jejum"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Segundo a tradição islâmica, o Ramadã é um mês sagrado porque nele Maomé começou a receber o quê?",
    "resposta": "A revelação do Alcorão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Ramadan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ramadan",
        "situacao": "ok",
        "texto": "Ramadan is the ninth month of the Islamic calendar. It is observed by Muslims worldwide as a month of fasting (sawm), communal prayer (salah), reflection, study of the Quran, charity, and strengthening community ties. It is also the month in which the Quran is believed to have been revealed to the Islamic prophet Muhammad, known as Laylat al-Qadr.\n[…]\nMuslims hold that all scriptures were revealed during Ramadan, the scrolls of Abraham, Torah, Psalms, Gospel, and Quran having been handed down during that month. Muhammad is said to have received his first quranic revelation on Laylat al-Qadr, one of five odd-numbered nights during the last ten days of Ramadan.\n[…]\nThe Laylat al-Qadr (Arabic: لیلة القدر) or \"Night of Power\" is the night that Muslims believe the Quran was first sent down to the world and Muhammad received his first quranic revelation. It is considered the holiest night of the year. It is generally believed to have occurred on an odd-numbered night during the last ten days of Ramadan; the Dawoodi Bohra believe that Laylat al-Qadr was the 23rd night of Ramadan.\n[…]\nThere are various health effects of fasting. Ramadan fasting is considered safe for healthy people; it may pose risks for those with certain preexisting conditions. Most Islamic scholars hold that fasting is not required for those who are ill. The elderly, pre-pubertal children, and pregnant or lactating women are exempt. Pregnant women who fast face health risks, including the potential of induced labour and gestational diabetes.\n[…]\nA study on 55 professional Algerian soccer players showed that performance during Ramadan declined significantly for speed, agility, dribbling speed and endurance, and most stayed low two weeks after the conclusion of Ramadan.\n[…]\nRamadan in the United Arab Emirates\n[…]\nArticles on Ramadan (archived 15 May 2015)\n[…]\nRamadan news and articles"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ramad%C3%A3o",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nO jejum é obrigatório a todos os muçulmanos que chegam à puberdade. A primeira vez em que um jovem é autorizado a jejuar pelos pais constitui um momento importante na sua vida e uma marca simbólica de entrada na vida adulta, tendo em vista o que diz no Alcorão:\n[…]\n\"… e aquele dentre vós que presenciou a Lua Nova deste mês [Ramadã], deverá jejuar, e aquele que se encontrar enfermo ou em viagem, jejuará depois o mesmo número de dias…\". [Alcorão 2:185]\n[…]\nBem antes da alvorada, durante a madrugada, há uma pequena refeição (\"su-hoor\") que substitui o café da manhã habitual, feita com alimentos e bebidas, com a intenção de realizar o jejum que estará por vir, porque o Su-Hoor é uma bênção enviada por Alá, segundo o Alcorão.\n[…]\nLaylat al Kadr (\"noite do decreto\") é a noite mais sagrada para os fiéis no Ramadã. Os muçulmanos acreditam que o Alcorão foi enviado pela primeira vez ao mundo e Maomé recebeu sua primeira revelação corânica nessa noite. Acredita-se que tenha ocorrido em uma noite ímpar durante os últimos dez dias do Ramadã.\n[…]\n185. O mês do Ramadão foi o mês em que foi revelado o Alcorão, orientação para a humanidade e vidência de orientação e discernimento. Por conseguinte, quem de vós presenciar o novilúnio deste mês deverá jejuar; porém, quem se achar enfermo ou em viagem jejuará, depois, o mesmo número de dias. Deus vos deseja a comodidade e não a dificuldade, mas cumpri o número (de dias), e glorificai a Deus por ter-vos orientado, a fim de que (Lhe) agradeçais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Hanucá",
      "descricao": "Festa judaica de oito dias que lembra a rededicação do Templo de Jerusalém"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Na tradição judaica, o Hanucá dura oito dias por causa de um milagre no Templo envolvendo que substância?",
    "resposta": "Azeite",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hanukkah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hanukkah",
        "situacao": "ok",
        "texto": "Hanukkah (IPA: ; Hebrew: חֲנֻכָּה, romanized: Ḥănukkā, lit. 'dedication', ) is a Jewish holiday that commemorates the Maccabean Revolt against the Seleucid Empire in the 2nd century BCE, when the Maccabees successfully recovered Jerusalem and the Second Temple.\n[…]\nRomanian Jews eat pasta latkes as a traditional Hanukkah dish.\n[…]\nWith the advent of Zionism and the state of Israel, the themes of militarism were reconsidered. In modern Israel, the national and military aspects of Hanukkah became, once again, more dominant.\n[…]\nThough it was traditional for Ashkenazi Jews to give \"gelt\" or money to children during Hanukkah, in many families, this tradition has been supplemented with the giving of other gifts so that Jewish children can enjoy receiving gifts just like their Christmas-celebrating peers do.\n[…]\nChildren play a big role in Hanukkah, and Jewish families with children are more likely to celebrate it than childless Jewish families, and sociologists hypothesize that this is because Jewish parents do not want their children to be alienated from their non-Jewish peers who celebrate Christmas. Recent celebrations have also seen the presence of the Hanukkah bush, which is considered a Jewish counterpart to the Christmas tree.\n[…]\nToday, the presence of Hanukkah bushes is generally discouraged by most rabbis.\n[…]\nZion, N.; Spectre, B. (2000). A Different Light: A Pluralist Anthology : the Big Book of Hanukkah. Devora Pub. ISBN 978-1-930143-37-1. Retrieved 17 September 2023.\n[…]\nHanukkah Archived 12 February 2017 at the Wayback Machine at About.com\n[…]\nHanukkah at the History channel\n[…]\nHanukkah at the Jewish Encyclopedia\n[…]\nHanukkah Archived 27 September 2015 at the Wayback Machine at the Jewish Agency for Israel\n[…]\nHanukkah at Chabad.org\n[…]\nHanukkah at Aish HaTorah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Chanuc%C3%A1",
        "situacao": "ok",
        "texto": "Chanucá ou Hanucá (em hebraico: חנוכה; romaniz.: ḥănūkkāh; lit. \"educar\" ou \"inauguração\") é uma festa judaica, também conhecido como o Festival das luzes. A primeira noite de Chanucá começa após o pôr do sol do 24.º dia do mês judaico de Kislev e a festa é comemorada por oito dias. Uma vez que na tradição judaica o dia do calendário começa no pôr do sol, o Chanucá começa no 25.º dia.\n[…]\nAté aqui, viu-se a vitória do pequenino exército judeu, esse foi o grande milagre. O segundo milagre segundo a tradição dos fariseus é mais sobrenatural, e deu origem à festa de Chanuká como conhecemos. Após a purificação da Cidade Santa e da Casa de YHWH, foi constatado que só havia um jarrinho de azeite puro no Templo com o selo intacto do Cohen Gadol (Sumo Sacerdote) para que as luzes da Menorá fossem acesas.\n[…]\nOito braços são para lembrar o milagre dos oito dias em que a Menorá ficou acesa com azeite que era para ter durado apenas um dia. O outro braço, que é chamado de \"shamash\" — servente — é um braço auxiliar para o acendimento das outras velas. Segundo a tradição, somente ele (o shamash) pode ser usado para, se for o caso, iluminar a casa ou para outro fim, sendo que as outras velas só podem servir para o cumprimento do mandamento.\n[…]\nO milagre de Chanucá é descrito no Talmude, mas não nos livros dos Macabeus. Esse feriado marca a derrota das forças selêucidas que tentaram proibir Israel de praticar o judaísmo. Judas Macabeu e seus irmãos destruíram forças surpreendentes, e rededicaram o Templo. O festival de oito dias é marcado pelo acendimento de luzes com uma menorá especial, tradicionalmente conhecida entre a maioria dos Sefaradim como chanucá, e entre muitos Sefaradim dos Balcãs e no hebraico moderno como uma chanukiá.\n[…]\nEste ritual comemora o milagre do azeite  que queimou por oito dias no candelabro do Templo de Jerusalém.\n[…]\n«História de Chanucá»\n[…]\n«Hanukkah Songs» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Catedral de Santiago de Compostela",
      "descricao": "Catedral da Galícia, na Espanha, destino final do Caminho de Santiago"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Os peregrinos que caminham até a catedral de Compostela, na Galícia, vão em busca do túmulo atribuído a qual apóstolo?",
    "resposta": "São Tiago Maior",
    "fonte": [
      "https://en.wikipedia.org/wiki/Santiago_de_Compostela_Cathedral",
      "https://en.wikipedia.org/wiki/Camino_de_Santiago"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Santiago_de_Compostela_Cathedral",
        "situacao": "ok",
        "texto": "The Santiago de Compostela Archcathedral Basilica (Spanish and Galician: Catedral Basílica de Santiago de Compostela) is part of the Metropolitan Archdiocese of Santiago de Compostela and is an integral component of the Santiago de Compostela World Heritage Site in Galicia, Spain. The cathedral is the reputed burial place of Saint James the Great, one of the apostles of Jesus Christ.\n[…]\nThe façade of the Silverware (Pratarías in Galician) is the southern façade of the transept of the cathedral of Santiago de Compostela; it is the only Romanesque façade that is preserved in the cathedral. It was built between 1103 and 1117 and elements from other parts of the cathedral have been added in subsequent years. The square is bound by the cathedral and cloister on two sides. Next to the cathedral is the Casa do Cabido.\n[…]\nThe Portico of Glory (\"Pórtico da Gloria\" in Galician) of the Cathedral of Santiago de Compostela is a Romanesque portico by Master Mateo and his workshop commissioned by King Ferdinand II of León. To commemorate its completion in 1188, the date was carved on a stone and set in the cathedral, and the lintels were placed on the portico. Finalising the complete three-piece set took until 1211, when the temple was consecrated in the presence of King Alfonso IX of León.\n[…]\nCarro Otero, Xosé (1997). Santiago de Compostela. publisher Everest. ISBN 84-241-3625-X.\n[…]\nGarcía Iglesias, José Manuel (1993). A catedral de Santiago: A Idade Moderna (in Galician). Xuntanxa. ISBN 8486614694.\n[…]\nPhotographs of the Cathedral of Santiago de Compostela, Galicia, Spain\n[…]\nPictures of Cathedral of Santiago de Compostela Archived 2014-10-16 at the Wayback Machine\n[…]\nThe Art of medieval Spain, A.D. 500–1200, an exhibition catalog from The Metropolitan Museum of Art Libraries (fully available online as PDF), which contains material on Santiago de Compostela Cathedral (pp. 175–183)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Camino_de_Santiago",
        "situacao": "ok",
        "texto": "The Camino de Santiago (Latin: Peregrinatio Compostellana, lit. 'Pilgrimage of Compostela'; Galician: O Camiño de Santiago; Spanish: El Camino de Santiago; Portuguese: O Caminho de Santiago), or the Way of St. James in English, is a network of pilgrims' ways or pilgrimages leading to the shrine of the apostle James in the cathedral of Santiago de Compostela in Galicia in northwestern Spain, where \n[…]\nThe earliest records of visits paid to the shrine at Santiago de Compostela date from the 9th century, in the time of the Kingdom of Asturias and Galicia. The pilgrimage to the shrine became the most renowned medieval pilgrimage, and it became customary for those who returned from Compostela to carry back with them a Galician scallop shell as proof of their completion of the journey. This practice gradually led to the scallop shell becoming the badge of a pilgrim.\n[…]\nLa S.A.M.I. Catedral de Santiago de Compostela le expresa su bienvenida cordial a la Tumba Apostólica de Santiago el Mayor; y desea que el Santo Apóstol le conceda, con abundancia, las gracias de la Peregrinación.\n[…]\nThe Holy Apostolic Metropolitan Cathedral of Santiago de Compostela expresses its warm welcome to the Tomb of the Apostle St. James the Greater; and wishes that the holy Apostle may grant you, in abundance, the graces of the Pilgrimage.\n[…]\nA Pilgrim's Mass is held in the Cathedral of Santiago de Compostela each day at 12:00 and 19:30. Pilgrims who received the compostela the day before have their countries of origin and the starting point of their pilgrimage announced at the Mass. The Botafumeiro, one of the largest censers in the world, is operated during certain Solemnities and on every Friday, except Good Friday, at 19:30. Priests administer the Sacrament of Penance, or confession, in many languages.\n[…]\nWalking the Camino: Six Ways to Santiago\n[…]\nWorld Heritage Sites of the Routes of Santiago de Compostela in France"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral_de_Santiago_de_Compostela",
        "situacao": "ok",
        "texto": "A Catedral de Santiago de Compostela é um templo católico situada na cidade de Santiago de Compostela, capital da Galiza, Espanha. É a sé da arquidiocese homónima e foi construída entre 1075 e 1128, em estilo românico, na época das cruzadas e durante a Reconquista Cristã, tendo sofrido depois várias reformas que lhe adicionaram elementos góticos, renascentistas e barrocos.\n[…]\nSegundo a tradição, acolhe o túmulo do apóstolo Santiago Maior, padroeiro e santo protetor de Espanha, o que a converteu no principal destino de peregrinação cristã na Europa a seguir a Roma durante a Idade Média, através do chamado Caminho de Santiago, uma rota iniciática na qual se seguia a Via Láctea que se estendia por toda a Península Ibérica e Europa Ocidental.\n[…]\nA compostela é emitida pela Oficina do Peregrino, um organismo da catedral, e para a obter, o peregrino tem que comprovar que fez pelo menos os últimos 100 km do Caminho a pé ou a cavalo ou os últimos 200 km em bicicleta.\n[…]\nHá numerosas rotas de peregrinação compostelana, que foram criadas ao longo dos séculos. A rota (ou, com maior rigor, o conjunto de rotas, pois há algumas variantes) mais concorrida é o Caminho Francês, cujos pontos de entrada mais usados em Espanha são os portos de montanha de Somport (via toledana), nos Pirenéus aragoneses e de Roncesvales, nos Pirenéus navarros e percorre o norte da Península, passando por Pamplona, Logronho, Burgos, Leão, Astorga e Ponferrada.\n[…]\nA Fachada da Acibechería é a fachada do lado norte do cruzeiro e abre-se para a Praça da Imaculada. Em frente dela situa-se o Mosteiro de São Martinho Pinário onde desde o século XIX funciona o seminário maior. É nela que desemboca o últmo trecho dos caminhos francês, primitivo, do norte e inglês, cujos peregrinos entravam na catedral pela antiga Porta Francígena ou do Paraíso, existente antes da construção da atual fachada.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Manuscritos do Mar Morto",
      "descricao": "Manuscritos judaicos antigos descobertos a partir de 1947 em cavernas de Qumran"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo o relato mais conhecido, um pastor beduíno encontrou os Manuscritos do Mar Morto enquanto procurava que animal perdido?",
    "resposta": "Uma cabra",
    "distratores": [
      "Um camelo",
      "Um burro",
      "Um cavalo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Dead_Sea_Scrolls"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Dead_Sea_Scrolls",
        "situacao": "ok",
        "texto": "The Dead Sea Scrolls (DSS), which mostly consist of the Qumran Caves Scrolls, are a set of ancient Jewish biblical manuscripts from the Second Temple period. They were discovered over a period of ten years, between 1946 and 1956, at the Qumran Caves near Ein Feshkha in the West Bank, on the northern shore of the Dead Sea and some nearby places.\n[…]\nWadi Qumran Cave 2 was discovered in February 1952 in which the Bedouins discovered 30 fragments. The cave eventually yielded 300 fragments from 33 manuscripts of Dead Sea Scrolls, including fragments of Jubilees and the Wisdom of Sirach written in Hebrew.\n[…]\nThe Dead Sea Scrolls were written on parchment made of processed animal hide known as vellum (approximately 85.5–90.5% of the scrolls), papyrus (estimated at 8–13% of the scrolls), and sheets of bronze composed of about 99% copper and 1% tin (approximately 1.5% of the scrolls).\n[…]\nBeginning in 1993, the United States National Aeronautics and Space Administration (NASA) used digital infrared imaging technology to produce photographs of Dead Sea Scrolls fragments. In partnership with the Ancient Biblical Manuscript Center and West Semitic Research, NASA's Jet Propulsion Laboratory successfully worked to expand on the use of infrared photography previously used to evaluate ancient manuscripts by expanding the range of spectra at which images are photographed.\n[…]\nBefore the discovery of the Dead Sea Scrolls, the oldest Hebrew-language manuscripts of the Bible were Masoretic texts dating to the 10th century CE, such as the Aleppo Codex. Today, the oldest known extant manuscripts of the Masoretic Text date from approximately the 9th century. The Hebrew biblical manuscripts found among the Dead Sea Scrolls push that date back more than a millennium, to the 2nd century BCE.\n[…]\nDead Sea Discoveries\n[…]\nMy Jewish Learning: Dead Sea Scrolls"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Manuscritos_do_Mar_Morto",
        "situacao": "ok",
        "texto": "Os Manuscritos do Mar Morto (ou Rolos do Mar Morto) são uma coleção de centenas de textos e fragmentos de texto encontrados em cavernas de Qumran, no Mar Morto, no fim da década de 1940 e durante a década de 1950. Foram compilados por uma doutrina de judeus conhecida como essênios, que viveram em Qumran do século II a.C., até aproximadamente 70. Porções de toda a Bíblia Hebraica foram encontradas,\n[…]\nOs manuscritos do Mar Morto foram casualmente descobertos por um grupo de pastores de cabras (beduínos), que em busca de um de seus animais localizou, em 1947, a primeira das cavernas com jarros cerâmicos contendo os rolos de papiro. Inicialmente os pastores tentaram sem sucesso vender o material em Belém. Mais tarde, foram finalmente vendidos para Athanasius Samuel, bispo do mosteiro ortodoxo sírio São Marcos em Jerusalém e para Eleazar Sukenik, da Universidade Hebraica, em dois lotes distintos.\n[…]\nFora os pergaminhos com história atestada de descoberta no Deserto da Judeia, uma profusão de manuscritos circula no mercado paralelo cuja autenticidade é duvidosa. Por exemplo, o Museu da Bíblia em Washington afirmou em março de 2020 que todos os 16 fragmentos dos manuscritos do Mar Morto que possui são falsificados. Relatório diz que maioria dos fragmentos são feitos de couro e não pergaminho.\n[…]\nAntes da descoberta dos Rolos do Mar Morto, os manuscritos mais antigos das Escrituras Hebraicas datavam da época do nono e do décimo século da era cristã. Atualmente, os manuscritos são considerados a mais antiga versão do antigo testamento, datando do século segundo antes da era comum. A análise dos textos encontrados mostra que os textos hebraicos eram bastante fluidos antes de sua canonização.\n[…]\n«The Digital Dead Sea Scrolls» (em inglês)\n[…]\nManuscritos do Mar Morto com tradução, transliteração e narração",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Igreja Ortodoxa",
      "descricao": "Comunhão de igrejas cristãs orientais separadas de Roma desde o Cisma de 1054"
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que a Páscoa das igrejas ortodoxas costuma cair numa data diferente da Páscoa católica?",
    "resposta": "Usam o calendário juliano",
    "fonte": [
      "https://en.wikipedia.org/wiki/Easter",
      "https://en.wikipedia.org/wiki/Computus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Easter",
        "situacao": "ok",
        "texto": "Easter, also called Pasch () or Pascha or Resurrection Sunday, is a Christian celebration and cultural holiday commemorating the resurrection of Jesus from the dead, described in the Bible's New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Calvary c. 30 AD. It is the culmination of the Passion of Jesus, preceded by Lent (or Great Lent), a 4\n[…]\nFurthermore, because the lunar tables of the Julian calendar are five days behind astronomical reality, the full moon, as defined by the Eastern Orthodox Church, is five days later, on a day which actually is a waning gibbous moon. Therefore, if a Sunday falls on any of the four days after the astronomical full moon, this is regarded as occurring before the ecclesiastical full moon and Easter Sunday will be a week later.\n[…]\nAmong the Oriental Orthodox, some churches have changed from the Julian to the Gregorian calendar and the date for Easter, as for other fixed and moveable feasts, is the same as in the Western church.\n[…]\nAn Orthodox congress of Eastern Orthodox bishops, which included representatives mostly from the Patriarch of Constantinople and the Serbian Patriarch, met in Constantinople in 1923, where the bishops agreed to the Revised Julian calendar.\n[…]\nThe original form of this calendar would have determined Easter using precise astronomical calculations based on the meridian of Jerusalem. However, all the Eastern Orthodox countries that subsequently adopted the Revised Julian calendar adopted only that part of the revised calendar that applied to festivals falling on fixed dates in the Julian calendar. The revised Easter computation that had been part of the original 1923 agreement was never permanently implemented in any Orthodox diocese.\n[…]\nLiturgical Resources for Easter\n[…]\nOrthodox Paschal Calculator Julian Easter and associated festivals in Gregorian calendar 1583–4099"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Computus",
        "situacao": "ok",
        "texto": "As a moveable feast, the date of Easter is determined in each year through a calculation known as computus paschalis (Latin for 'Easter computation') – often simply Computus – or as paschalion particularly in the Eastern Orthodox Church. Easter is celebrated on the first Sunday after the Paschal full moon (a mathematical approximation of the first astronomical full moon, on or after 21 March –  it\n[…]\nThe calculations produce different results depending on whether the Julian calendar or the Gregorian calendar is used. For this reason, the Catholic Church and Protestant churches (which follow the Gregorian calendar) celebrate Easter on a different date from that of the Eastern and Oriental Orthodoxy (which follow the Julian calendar). It was the drift of 21 March from the observed equinox that led to the Gregorian reform of the calendar, to bring them back into line.\n[…]\nThe method for computing the date of the ecclesiastical full moon that was standard for the western Church before the Gregorian calendar reform, and is still used today by most eastern Christians, made use of an uncorrected repetition of the 19-year Metonic cycle in combination with the Julian calendar. In terms of the method of the epacts discussed above, it effectively used a single epact table starting with an epact of 0, which was never corrected.\n[…]\n(The eastern Easter is occasionally four or five weeks later because the Julian calendar is 13 days behind the Gregorian in 1900–2099, and so the Gregorian paschal full moon is sometimes before Julian 21 March.)\n[…]\nJean Meeus, in his book Astronomical Algorithms (1991, p. 69), presents the following algorithm for calculating the Julian Easter on the Julian Calendar. To obtain the date of Eastern Orthodox Easter according to the Gregorian Calendar (used as the civil calendar throughout most of the contemporary world), 13 days must be added to the Julian dates shown."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/P%C3%A1scoa",
        "situacao": "ok",
        "texto": "Páscoa (em aramaico: פַּסְחָא; romaniz.: pasḥā; em grego: πάσχα; romaniz.: páskha) ou Domingo da Ressurreição, é um festival cristão e feriado cultural que comemora a ressurreição de Jesus dentre os mortos, descrita no Novo Testamento como tendo ocorrido no terceiro dia de seu sepultamento após sua crucificação pelos romanos no Calvário por volta do ano 30. É o ponto culminante da Paixão de Jesus,\n[…]\nAs igrejas da Europa continental ocidental usaram um método romano tardio até o final do século VIII, durante o reinado de Carlos Magno, quando finalmente adotaram o método alexandrino. Desde 1582, quando a Igreja Católica Romana adotou o calendário gregoriano, enquanto a maior parte da Europa usava o calendário juliano, a data em que a Páscoa é celebrada voltou a ser diferente.\n[…]\nOs cristãos ortodoxos orientais usam a mesma regra, mas baseiam seu dia 21 de março no calendário juliano. Devido à diferença de treze dias entre os calendários de 1900 a 2099, 21 de março no calendário juliano corresponde a 3 de abril no calendário gregoriano (durante os séculos XX e XXI). Consequentemente, a data da Páscoa ortodoxa varia entre 4 de abril e 8 de maio no calendário gregoriano.\n[…]\nAlém disso, como as tabelas lunares do calendário juliano estão cinco dias atrasadas em relação à realidade astronômica, a lua cheia, conforme definida pela Igreja Ortodoxa Oriental, ocorre cinco dias depois, em um dia que na verdade é uma lua minguante gibosa. Portanto, se um domingo cair em qualquer um dos quatro dias após a lua cheia astronômica, considera-se que ocorreu antes da lua cheia eclesiástica, e o Domingo de Páscoa será uma semana depois.\n[…]\nEntre os ortodoxos orientais, algumas igrejas mudaram do calendário juliano para o calendário gregoriano e a data da Páscoa, assim como de outras festas fixas e móveis, é a mesma que na igreja ocidental.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Abraão",
      "descricao": "Patriarca bíblico considerado ancestral espiritual do judaísmo, do cristianismo e do islã"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que patriarca bíblico é reverenciado como pai da fé por judeus, cristãos e muçulmanos?",
    "resposta": "Abraão",
    "fonte": [
      "https://en.wikipedia.org/wiki/Abraham",
      "https://en.wikipedia.org/wiki/Abrahamic_religions"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Abraham",
        "situacao": "ok",
        "texto": "Abraham (originally Abram) is widely revered as a foundational legendary figure among adherents of the eponymous Abrahamic religions. In Judaism, he is the ethnic ancestor and first Hebrew patriarch who began the covenantal relationship between the Jewish people and God; in Christianity, he is regarded as the forebear of Jesus and the spiritual ancestor of all Christians; and in Islam, he is a lin\n[…]\nAbraham then received God's instructions concerning circumcision.\n[…]\nAfter this event, Abraham went to Beersheba.\n[…]\nThompson's The Historicity of the Patriarchal Narratives (1974), and John Van Seters' Abraham in History and Tradition (1975). Thompson, a literary scholar, based his argument on archaeology and ancient texts. His thesis centered on the lack of compelling evidence that the patriarchs lived in the 2nd millennium BCE, and noted how certain biblical texts reflected first millennium conditions and concerns.\n[…]\nAccording to Nissim Amzallag, the Book of Genesis portrays Abraham as having an Amorite origin, arguing that the patriarch's provenance from the region of Harran as described in Genesis 11:31 associates him with the territory of the Amorite homeland. He also notes parallels between the biblical narrative and the Amorite migration into the Southern Levant in the 2nd millennium BCE. Likewise, some scholars like Daniel E.\n[…]\nIslam regards ʾIbrāhīm (Abraham) as a link in the chain of prophets that begins with Adam and culminates in Muhammad via ʾIsmāʿīl (Ishmael). Abraham is mentioned in 35 chapters of the Quran, more often than any other biblical personage apart from Moses. He is called both a hanif (monotheist) and muslim (one who submits), and Muslims regard him as a prophet and patriarch, the archetype of the perfect Muslim, and the revered reformer of the Kaaba in Mecca.\n[…]\nAbraham smashes the idols\n[…]\n\"Journey and Life of the Patriarch Abraham\", a map dating back to 1590"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Abrahamic_religions",
        "situacao": "ok",
        "texto": "The Abrahamic religions are a set of monotheistic religions that respect or admire the religious figure Abraham as a patriarch and/or as a prophet, namely Judaism, Christianity and Islam, as well as smaller religions such as the Baháʼí Faith, the Druze faith, Rastafari, and Samaritanism.\n[…]\nThe Catholic scholar of Islam Louis Massignon argued that the phrase \"Abrahamic religion\" means that the religions come from one spiritual source. The modern term comes from the plural form of a Quranic reference to dīn Ibrāhīm (\"religion of Abraham\").\n[…]\nHughes, meanwhile, describes the term as \"imprecise\" and \"largely a theological neologism.\" Hughes observes that before the 20th century, the adjective \"Abrahamic\" appeared exclusively in the context of Christian supersessionism, and that the equivalent Muslim term millat Ibrahim was used as part of an Islamic historiography rather than to join different religions together.\n[…]\nChristians could hardly dismiss the Hebrew scriptures as Jesus himself refers to them according to Christian reports, and parallels between Jesus and the Biblical stories of creation and redemption starting with Abraham in the Book of Genesis. The distant God asserted by Jesus according to the Christians, created a form of dualism between Creator and creation and the doctrine of Creatio ex nihilo, which later heavily influenced Jewish and Islamic theology.\n[…]\nYarsanism is a Kurdish religion which combines elements of Shi'a Islam with pre-Islamic Kurdish beliefs; it has been classified as Abrahamic by some due to its monotheism, incorporation of Islamic doctrines, and reverence for Islamic figures, especially Ali ibn Abi Talib, the fourth caliph and first imam of Shia Islam.\n[…]\nAbrahamites\n[…]\nMilah Abraham\n[…]\nQuotations related to Abrahamic religions at Wikiquote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abra%C3%A3o",
        "situacao": "ok",
        "texto": "Abraão é amplamente reverenciado como uma figura lendária fundacional pelos adeptos das religiões abraâmicas que levam seu nome. No judaísmo, é o ancestral étnico e o primeiro patriarca hebreu, que iniciou a relação de aliança entre o povo judeu e Deus; no cristianismo, é considerado antepassado de Jesus e ancestral espiritual de todos os cristãos; e, no islã, constitui um elo na cadeia dos profet\n[…]\nAbraão recebeu então as instruções de Deus a respeito da circuncisão.\n[…]\nA segunda é o \"Domingo dos Antepassados\" — dois domingos antes do Natal —, quando é comemorado com outros ancestrais de Jesus. Abraão também é mencionado na Divina Liturgia de Basílio de Cesareia, pouco antes da anáfora, e Abraão e Sara são invocados nas orações pronunciadas pelo sacerdote sobre os recém-casados. Um hino popular, cantado por crianças em muitas escolas dominicais de língua inglesa, é conhecido como \"Father Abraham\" e destaca o patriarca como progenitor espiritual dos cristãos.\n[…]\nO islã considera ʾIbrāhīm — Abraão — um elo na cadeia dos profetas que começa com Adão e culmina em Maomé por meio de ʾIsmāʿīl — Ismael. Abraão é mencionado em 35 capítulos do Alcorão, mais vezes do que qualquer outra figura bíblica, com exceção de Moisés. É chamado tanto de hanif — monoteísta — quanto de muslim — aquele que se submete —, e os muçulmanos o consideram profeta e patriarca, arquétipo do muçulmano perfeito e venerado restaurador da Caaba, em Meca.\n[…]\nAs pinturas sobre a vida de Abraão tendem a concentrar-se em apenas alguns episódios: o sacrifício de Isaac, o encontro com Melquisedeque, a recepção dos três anjos, Agar no deserto e poucos outros. Além disso, Martin O'Kane, professor de estudos bíblicos, escreve que a parábola do Lázaro que repousa no \"Seio de Abraão\", descrita no Evangelho segundo Lucas, tornou-se uma imagem icônica nas obras cristãs.\n[…]\n«Abraão, pai de todos os crentes»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Carma",
      "descricao": "Conceito do hinduísmo e do budismo segundo o qual as ações geram consequências futuras"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que palavra sânscrita, que significa ação, designa no hinduísmo e no budismo a lei segundo a qual nossos atos trazem consequências futuras?",
    "resposta": "Carma",
    "fonte": [
      "https://en.wikipedia.org/wiki/Karma"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Karma",
        "situacao": "ok",
        "texto": "Karma (, from Sanskrit: कर्म, IPA: [ˈkɐɾmɐ] ; Pali: kamma) is an ancient Indian concept that refers to an action, work, or deed, and its effect or consequences.\n[…]\nThe third common theme of karma theories is the concept of reincarnation or the cycle of rebirths (saṃsāra). Rebirth is a fundamental concept of Hinduism, Buddhism, Jainism, and Sikhism. Rebirth, or saṃsāra, is the concept that all life forms go through a cycle of reincarnation, that is, a series of births and rebirths. The rebirths and consequent life may be in different realm, condition, or form.\n[…]\nLife forms not only receive and reap the consequence of their past karma, together they are the means to initiate, evaluate, judge, give and deliver consequence of karma to others.\n[…]\nSome theistic Indian religions, such as Sikhism, suggest evil and suffering are a human phenomenon and arises from the karma of individuals. In other theistic schools such as those in Hinduism, particularly its Nyaya school, karma is combined with dharma and evil is explained as arising from human actions and intent that is in conflict with dharma.\n[…]\nIn nontheistic religions such as Buddhism, Jainism and the Mimamsa school of Hinduism, karma theory is used to explain the cause of evil as well as to offer distinct ways to avoid or be unaffected by evil in the world.\n[…]\nThose schools of Hinduism, Buddhism, and Jainism that rely on karma-rebirth theory have been critiqued for their theological explanation of suffering in children by birth, as the result of their sins in a past life. Others disagree, and consider the critique as flawed and a misunderstanding of the karma theory.\n[…]\nKarma – Encyclopedia Britannica"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carma",
        "situacao": "ok",
        "texto": "Karma ou carma (do sânscrito कर्म, transl karma; em páli:  kamma) significa em sânscrito uma ação, obra ou feito, e seu efeito ou consequências, em português significaria algo como \"Lei da ação e consequência\"  .\n[…]\nWilhelm Halbfass (2000) explica carma (karman) contrastando-o com a palavra sânscrita kriya: enquanto kriya é a atividade junto com os passos e o esforço em ação, karma é (1) a ação executada como consequência dessa atividade, bem como (2) a intenção do ator por trás de uma ação executada ou de uma ação planejada (descrita por alguns estudiosos como resíduo metafísico deixado no ator). Uma boa ação cria um bom carma, assim como uma boa intenção.\n[…]\nO segundo tema comum às teorias do carma é a eticização. Isso começa com a premissa de que toda ação tem uma consequência, que se concretizará nesta vida ou em uma vida futura; assim, atos moralmente bons terão consequências positivas, enquanto atos ruins produzirão resultados negativos. A situação atual de um indivíduo é assim explicada por referência a ações em sua vida presente ou em vidas anteriores. O carma não é em si 'recompensa e punição', mas a lei que produz consequências.\n[…]\nA palavra sânscrita védica kárman- (nominativo kárma) significa 'obra' ou 'ação', frequentemente usada no contexto dos rituais srautas. No Rigveda, a palavra ocorre cerca de 40 vezes. Em Satapatha Brahmana 1.7.1.5, o sacrifício é declarado como a \"maior\" das obras; Satapatha Brahmana 10.1.4.1 associa o potencial de se tornar imortal (amara) com o carma do sacrifício agnicayana.\n[…]\nA escola de Ioga considera o carma de vidas passadas como secundário, o comportamento e a psicologia de uma pessoa na vida atual é o que tem consequências e leva a emaranhados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Chakra de Ashoka",
      "descricao": "Roda azul de vinte e quatro raios no centro da bandeira da Índia, tirada dos pilares do imperador Ashoka"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A roda azul da bandeira da Índia reproduz um símbolo dos pilares do imperador Ashoka. A que religião esse imperador se converteu?",
    "resposta": "Budismo",
    "distratores": [
      "Hinduísmo",
      "Jainismo",
      "Zoroastrismo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ashoka_Chakra",
      "https://en.wikipedia.org/wiki/Ashoka"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ashoka_Chakra",
        "situacao": "ok",
        "texto": "The Ashoka Chakra (Transl: Ashoka's wheel) is an Indian symbol which is a depiction of the Dharmachakra. It is called so because it appears on a number of edicts of Ashoka, most prominent among which is the Lion Capital of Ashoka.\n[…]\nThe most visible use of the Ashoka Chakra today is at the centre of the Flag of India (adopted on 22 July 1947), where it is rendered in a navy blue colour on a white background, replacing the symbol of charkha (spinning wheel) of the pre-independence versions of the flag. It is also shown in the Ashoka Chakra medal, which is the highest award for gallantry in peacetime.\n[…]\nThese spokes are interpreted as symbolizing the fourteen ratnas (jewels) possessed by a Chakravarti, as well as the fourteen Gunasthana in Jain philosophy. In statue Ashoka hand points towards 5th-6th to indicate his own progression levels attributed to a Chakravarti.\n[…]\nThe Ashoka Chakra depicts the 24 principles that should be present in a human.\n[…]\nAshoka Chakra was included in the middle of the national flag of India. The chakra intends to show that there is life in movement and death in stagnation. Originally, the Indian flag was based on the Swaraj flag, a flag of the Indian National Congress adopted by Mahatma Gandhi after making significant modifications to the design proposed by Pingali Venkayya. This flag included charkha which was replaced with Ashoka Chakra in 1947 by Surayya Tyabji and Badruddin Tyabji\n[…]\nChakra (disambiguation)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ashoka",
        "situacao": "ok",
        "texto": "Ashoka, also known as Asoka or Aśoka ( ə-SHOH-kə; Sanskrit: [ɐˈɕoːkɐ], IAST: Aśoka; c. 304 – 232 BCE), most commonly known as Ashoka the Great, was Emperor of Magadha from c. 268 BCE until his death, and the third ruler from the Mauryan dynasty. His empire covered a large part of the Indian subcontinent, stretching from present-day Afghanistan in the west to present-day Bangladesh in the east, wit\n[…]\nSome historians argue that Buddhism became a major religion because of Ashoka's royal patronage. However, epigraphic evidence suggests that the spread of Buddhism in north-western India and Deccan region was less because of Ashoka's missions, and more because of merchants, traders, landowners and the artisan guilds who supported Buddhist establishments.\n[…]\nAshokan capitals were highly realistic and used a characteristic polished finish, Mauryan polish, giving a shiny appearance to the stone surface. Lion Capital of Ashoka, the capital of one of the pillars erected by Ashoka features a carving of a spoked wheel, known as the Ashoka Chakra. This wheel represents the wheel of Dhamma set in motion by the Gautama Buddha, and appears on the flag of modern India. This capital also features sculptures of lions, which appear on the seal of India.\n[…]\nThe use of Buddhist sources in reconstructing the life of Ashoka has had a strong influence on perceptions of Ashoka, as well as the interpretations of his edicts. Building on traditional accounts, early scholars regarded Ashoka as a primarily Buddhist monarch who underwent a conversion from the Vedic religion to Buddhism and was actively engaged in sponsoring and supporting the Buddhist monastic institution. Some scholars have tended to question this assessment.\n[…]\nCivilization features Ashoka as a playable leader for India, being replaced by Gandhi in later iterations of the series.\n[…]\nBBC Radio 4: Sunil Khilnani, Incarnations: Ashoka."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/A%C3%A7oca_Chacra",
        "situacao": "ok",
        "texto": "Açoca ou Asoca Chacra (Ashoka Chakra) é uma representação da roda do darma. A roda tem 24 raios. O Açoca Chacra tem sido amplamente inscrito em muitas relíquias do imperador máuria Açoca (r. 273–232), mais proeminente entre os quais estão o Capitel do Leão de Sarnath e Pilar de Açoca.\n[…]\nO mais visível uso do Açoca Chacra hoje está no centro da bandeira nacional da República da Índia (adotada in 22 de Julho de 1947), onde é representado com a cor azul-marinha num fundo branco, substituindo o símbolo do Chacra (roca de fiar) das versões pré-independentes da bandeira. Açoca Chacra pode também ser vista na base Capitel de Leão de Asoca, no qual foi adotado como Emblema Nacional da Índia.\n[…]\nO Açoca Chacra foi construído pelo imperador máuria Açoca em seu reinado. Chacra é uma palavra em sânscrito no qual também significa círculo ou processo que se repete. O processo significa que é o círculo do tempo, como o mundo muda com o tempo. O cavalo significa precisão e velocidade, enquanto o touro significa trabalho duro.\n[…]\nOs vinte e quatro raios na roda do Chacra representam vinte e quatro virtudes:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Torá",
      "descricao": "Conjunto dos cinco primeiros livros da Bíblia hebraica, base da lei judaica"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os cinco primeiros livros do Antigo Testamento cristão, de Gênesis a Deuteronômio, formam que texto judaico lido em rolos nas sinagogas?",
    "resposta": "Torá",
    "fonte": [
      "https://en.wikipedia.org/wiki/Torah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Torah",
        "situacao": "ok",
        "texto": "The Torah (; Biblical Hebrew: תּוֹרָה, romanized: tōrā, lit. \"instruction\", \"teaching\", or \"law\") is the compilation of the first five books of the Hebrew Bible, namely the books of Genesis, Exodus, Leviticus, Numbers and Deuteronomy. The Torah is also known as the Pentateuch () or the Five Books of Moses. In Rabbinic Judaism tradition it is also known as the Written Torah (תּוֹרָה שֶׁבִּכְתָב, Tō\n[…]\nThe Book of Deuteronomy is the fifth book of the Torah. Chapters 1–30 of the book consist of three sermons or speeches delivered to the Israelites by Moses on the plains of Moab, shortly before they enter the Promised Land.\n[…]\nRolf Rendtorff, building on this insight, argued that the basis of the Pentateuch lay in short, independent narratives, gradually formed into larger units and brought together in two editorial phases, the first Deuteronomic, the second Priestly. By contrast, John Van Seters advocates a supplementary hypothesis, which posits that the Torah was derived from a series of direct additions to an existing corpus of work.\n[…]\nThe Samaritan Torah (‮ࠕࠫ‎‬ࠅࠓࠡࠄ‎‎, Tōrāʾ), also called the Samaritan Pentateuch, is the scripture of Samaritanism, which is slightly different from the Torah of Judaism. The Samaritan Pentateuch was written in the Samaritan script, a direct descendant of the Paleo-Hebrew alphabet that emerged around 600 BCE.\n[…]\nAlthough different Christian denominations have slightly different versions of the Old Testament in their Bibles, the Torah as the \"Five Books of Moses\" (or \"the Mosaic Law\") is common among them all.\n[…]\nIn the Jerusalem Bible (1966), its editors recommend reading the narratives in the Torah or Pentateuch in their traditional order, but also suggests that Leviticus can be aligned with the concluding chapters of the Book of Ezekiel, or with Ezra and Nehemiah, and that Deuteronomy \"may be profitably read\" with the Book of Jeremiah."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tor%C3%A1",
        "situacao": "ok",
        "texto": "Torá (em hebraico: תּוֹרָה; romaniz.: tōrāh (sefaradita)/ tōruh (asquenaze); lit. instrução, lei, apontamento) é o livro sagrado do judaísmo.\n[…]\nJá para os israelitas samaritanos, caraítas e cristãos, a Torá, Lei ou Pentateuco é composto por cinco livros, conforme a divisão a seguir.\n[…]\nAs cinco partes que constituem a Torá são nomeadas de acordo com a primeira palavra de seu texto, e são assim chamadas:\n[…]\nA Torá, para os israelitas, ou Pentateuco, para os Cristãos Protestantes e Católicos, constitui-se em apenas cinco livros. Contudo, a divisão em versículo de São Jerônimo não costumava ser utilizada pelos judeus até meados do século XVII. Atualmente, as edições impressas (mesmo em hebraico) comumente utilizam a divisão em versículos para uma maior comodidade entre estudiosos e especialistas.\n[…]\nA divisão quíntupla do Pentateuco deveu-se a causas puramente externas e não a uma diversidade de conteúdo; pois em volume a Torá forma mais de um quarto de todos os livros da Bíblia e contém, em números redondos. A divisão da Torá em cinco livros remonta da edição grega, a Septuaginta.\n[…]\nO cristianismo baseado na tradução grega Septuaginta também conhece a Torá como Pentateuco, que constitui os cinco primeiros livros da Bíblia cristã.\n[…]\nPor volta do ano 500 d.C., iniciou-se uma padronização que resultou no texto chamado de massorético. Foi vocalizado o texto com dois sistemas criados (um da Palestina e outro da Babilônia) e padronizado diversas variantes e leituras possíveis. O texto massorético teve influência da Septuaginta em adotar algumas divisões de livros (inclusive a divisão da Torá em cinco livros) e algumas leituras e vocalizações.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Ahimsa",
      "descricao": "Princípio de não violência presente no hinduísmo, no budismo e no jainismo"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que princípio de não violência, comum ao hinduísmo, ao budismo e ao jainismo, inspirou a luta de Gandhi?",
    "resposta": "Ahimsa",
    "distratores": [
      "Nirvana",
      "Dharma",
      "Mantra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ahimsa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ahimsa",
        "situacao": "ok",
        "texto": "Ahimsa (Sanskrit: अहिंसा, IAST: ahiṃsā; IPA: [ɐ́.ɦĩ.sɑː]; lit. 'nonviolence') is the ancient Indian principle of nonviolence that applies to actions toward all living beings. It is a key virtue in Jainism, Buddhism, and Hinduism.\n[…]\nAhimsa (also spelled Ahinsa) is one of the cardinal virtues of Jainism, where it is the first of the Pancha Mahavrata. It is also one of the central precepts of Hinduism and the first of the five precepts of Buddhism. Ahimsa is inspired by the premise that all living beings have the spark of the divine spiritual energy; therefore, to hurt another being is to hurt oneself. Ahimsa is also related to the notion that all acts of violence have karmic consequences.\n[…]\nMahatma Gandhi stated, \"No religion in the World has explained the principle of Ahiṃsā so deeply and systematically as is discussed with its applicability in every human life in Jainism. As and when the benevolent principle of Ahiṃsā or non-violence will be ascribed for practice by the people of the world to achieve their end of life in this world and beyond, Jainism is sure to have the uppermost status and Mahāvīra is sure to be respected as the greatest authority on Ahiṃsā\".\n[…]\nGandhi took the religious principle of ahimsa, and turned it into a non-violent tool for mass action. He used it to fight not only colonial rule, but social evils such as racial discrimination and untouchability as well.\n[…]\nThese moral precepts have been voluntarily self-enforced in lay Buddhist culture through the associated belief in karma and rebirth. Buddhist texts not only recommend ahimsa, but suggest avoiding trading goods that contribute to or are a result of violence:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ainsa",
        "situacao": "ok",
        "texto": "Ainsa (do sânscrito अहिंसा, ahimsâ, \"não injúria\") é um princípio ético-religioso adotado principalmente pelo jainismo e presente no hinduísmo e no budismo, e que consiste em não cometer violência contra outros seres. O ainsa é inspirado pela premissa de que todos os seres vivos têm uma centelha da energia espiritual divina; consequentemente, ferir alguém é ferir a si próprio. O ainsa também se re\n[…]\nO termo aparece no texto Taitiria Xaca do Iajurveda (TS 5.2.8.7), se referindo à não injúria ao próprio sacrificante. Aparece várias vezes no Satapatha Brahmana com o sentido de \"não injúria\". A mais antiga referência à ideia de não violência a animais (pashu-ahimsa) está no Kapisthala Katha Samhita do Iajurveda (KapS 31.11), que foi escrito por volta do século VIII a.C. Bowker diz que o termo aparece porém com pouca frequência nos principais Upanixades.\n[…]\nGandhi disse que \"o ainsa está no hinduísmo, está no cristianismo e também está no islamismo\". E acrescentouː \"a não violência é comum as religiões, mas encontrou sua mais alta expressão e aplicação no hinduísmo (não considero o jainismo e o budismo separados do hinduísmo). Quando questionado se a violência e a não violência são ambas ensinadas no Alcorão, disseː \"ouvi muitos amigos muçulmanos dizerem que o Alcorão ensina o uso da não violência.\n[…]\nSua concepção, no entanto, se tratava de uma distorção do antigo princípio iogue de ainsa.\n[…]\nNa prática do ainsa, os requerimentos são menos estritos para leigos (śrāvaka) que assumiram os votos menores (anuvrata) do que para os monges jainistas que assumiram os grandes votos (mahavrata). A afirmação ahimsā paramo dharmaḥ está inscrita nas paredes de todos os templos jainistas. Como no hinduísmo, o objetivo é se prevenir da acumulação de carma ruim. Quando Mahavira reviveu e reorganizou a fé jainista no século VI ou V a.C., o ainsa já era uma regra estabelecida e observada estritamente.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Krishna",
      "descricao": "Divindade hindu, herói do Bhagavad Gita"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Krishna, o deus venerado pelo movimento Hare Krishna, é considerado avatar de que divindade hindu?",
    "resposta": "Vixnu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Krishna"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Krishna",
        "situacao": "ok",
        "texto": "Krishna (; Sanskrit: कृष्ण, IAST: Kṛṣṇa Sanskrit: [ˈkr̩ʂɳɐ] )  also known as Govinda, Madhava, Gopala, and other names and titles is a major deity in Hinduism. He is worshipped as the eighth avatar of Vishnu and as the Supreme God in his own right. He is widely revered for his divine qualities of love, compassion, protection, and tenderness.\n[…]\nIn Krishna-related Hindu traditions, he is most commonly seen with Radha. All of his wives and his lover Radha are considered in the Hindu tradition to be the avatars of the goddess Lakshmi, the consort of Vishnu. Gopis are considered as manifestations of Lakshmi or Radha.\n[…]\nA wide range of theological and philosophical ideas are presented through Krishna in Hindu texts. The teachings of the Bhagavad Gita can be considered as the first Krishnaite system of theology, according to Friedhelm Hardy.\n[…]\nTheir theologies are generally centered either on Vishnu or an avatar such as Krishna as supreme. The terms Krishnaism and Vishnuism have sometimes been used to distinguish the two, the former implying that Krishna is the transcendent supreme being. Some scholars, such as Friedhelm Hardy, do not define Krishnaism as a sub-order or offshoot of Vaishnavism, considering it a parallel and no less ancient current of Hinduism.\n[…]\nWhile the Buddhist Jataka texts co-opt Krishna-Vasudeva and make him a student of the Buddha in his previous life, the Hindu texts co-opt the Buddha and make him an avatar of Vishnu. In Chinese Buddhism, Taoism, and Chinese folk religion, the figure of Krishna has been amalgamated with that of Nalakuvara to influence the formation of the god Nezha, who has taken on iconographic characteristics of Krishna, such as being presented as a divine god-child and slaying a nāga in his youth.\n[…]\nKrishnaism – Group of Hindu traditions that reveres Krishna as the Supreme Being"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Krishna",
        "situacao": "ok",
        "texto": "Krishna (em sânscrito: कृष्ण; romaniz.: Kṛṣṇa; pronunciado [ˈkr̩ʂɳə]) ou Críxena é o aspecto de Deus mais cultuado em toda a Índia, por ser compreendido como o Ser Supremo, o Guru de Arjuna no Bagavadeguitá que é parte da Escritura Maabárata, e por causa das comunidades Hare Krishna de seus devotos, espalhados pelo planeta todo.\n[…]\nA palavra em sânscrito kṛṣṇa é essencialmente um adjetivo que significa \"negro\", \"azul\" ou \"azul-escuro\". Como um substantivo feminino, kṛṣṇa é usado no sentido de \"noite\", \"escuridão\" no Rigueveda. Críxena é um nome de Deus que significa \"o Todo Atraente\", a Verdade Absoluta.\n[…]\nE foi então que o oitavo filho de Devaki nasceu - Bagavã Seri Críxena. O local do nascimento é conhecido atualmente como Krishnajanmabomi, onde um templo foi erguido em honra. Como sua vida corria risco na prisão, foi tirado da prisão e entregue aos pais adotivos Iaxoda e Nanda em Gocula.\n[…]\nFundado em Nova Iorque pelo guru indiano Bhaktivedanta Swami Prabhupada em 1966, o Movimento Hare Krishna é o principal responsável pela disseminação contemporânea da figura de Críxena no Ocidente.\n[…]\nA figura de Krishna ocupa um lugar central nas tradições religiosas do hinduísmo, especialmente no vaiṣṇavismo, sendo amplamente reverenciado como a oitava encarnação (Avatāra) de Viṣṇu e como a Suprema Personalidade de Deus. No entanto, sua existência como personagem histórico tem sido objeto de debate entre estudiosos modernos da religião, história antiga e arqueologia do sul da Ásia.\n[…]\nA maioria dos estudiosos considera Krishna uma figura mitológica e literária complexa, cujas origens podem remontar a cultos tribais e pastoris dos povos Yādavas. Com o passar dos séculos, essa figura teria sido integrada e divinizada no contexto do hinduísmo bramânico, especialmente a partir do período pós-védico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Lavagem do Bonfim",
      "descricao": "Festa religiosa de Salvador em que baianas lavam as escadarias da Igreja do Senhor do Bonfim"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Na Lavagem do Bonfim, em Salvador, o Senhor do Bonfim é associado a que orixá do candomblé?",
    "resposta": "Oxalá",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Oxalá",
      "https://en.wikipedia.org/wiki/Obatala",
      "https://en.wikipedia.org/wiki/Church_of_Nosso_Senhor_do_Bonfim"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Oxalá",
        "situacao": "ok",
        "texto": "Oxalá, do iorubá \"Òriṣànlá\", é nome de um orixá também conhecido como Obatalá. \"Oxalufã\", \"Oxaguiã\" e \"Obatalá\" são termos procedentes da língua iorubá.\n[…]\nOxalá, Orixalá, Orixaguinã, Gunocô ou Obatalá é o orixá associado à criação do mundo e da espécie humana. Apresenta-se de várias maneiras (qualidades) sendo as duas principais qualidades: a forma jovem, em que Oxalá é chamado de Oxaguiã e seus símbolos são uma idá (espada), um pilão de metal branco e um escudo. Na sua forma idosa, Oxalá é chamado Oxalufã e seu símbolo é um cajado de metal chamado opaxorô.\n[…]\nObatalá, Oxalá, Oxalufã, Oxaguiã e Oxá-Popô, todos eles denominados orixá funfum (Òrìsà funfun; branco), devido à cor que os simboliza, a branca. Obatalá e Odudua são associados de diversas maneiras nos mitos da criação.\n[…]\nOrixá-Lá\n[…]\nOxalá, Obatalá, Orixalá, Orixa-Nlá. Oxalá é um nome genérico de vários Òrìxá funfun (branco), como são chamados diversos Orixás africanos no Brasil relacionados à cor branca e à criação do mundo. Os filhos de Oxalá têm algumas restrições (euó):\n[…]\nTambém em função das lendas, o dia de Oxalá é a sexta-feira.\n[…]\nNo candomblé, tanto no Brasil quanto em outros países, todos os iniciados e frequentadores costumam vestir-se de branco em homenagem a Oxalá. Os filhos de Oxalá não comem comida de sal e muitos adotaram não comer carne na sexta-feira (somente peixe).\n[…]\nContudo, também se acredita que esse costume tenha relação com a Igreja Católica e o sincretismo de Oxalá com o Senhor do Bonfim na Bahia, costume também adotado pelos restaurantes em que nas sextas-feiras servem a pescada branca com molho de camarão.\n[…]\nÁguas de Oxalá\n[…]\nFesta do Bonfim"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Obatala",
        "situacao": "ok",
        "texto": "Obatala (; lit. 'King of White Cloth') also known as Oriṣanla (lit. 'The Great Orisha') is the king of all oriṣa in the Yoruba religion, believed to have created the Earth (Ile Ayé) and humans. In some versions of the story, he failed the task by being drunk on palm wine after being tempted by the trickster deity Eshu and was outperformed by his little brother Oduduwa. He was instead given the job\n[…]\nHowever, an assessment of Yoruba traditional religion shows that each of the 201 deities are understood by their descendants and adherents to have carried out the creation of the earth. This suggests the beginning of the world is an aspect of Yoruba cosmogenesis associated with numerous deities in Yoruba pantheons beyond Obatala or Oduduwa.\n[…]\nIn Candomblé, Oxalá (Obatalá) has been syncretized with Our Lord of Bonfim; in that role, he is the patron saint of Bahia. The extensive use of white clothing, which is associated with the worship of Oxalá, has become a symbol of Candomblé in general. Friday is the day dedicated to the worship of Oxalá.\n[…]\nA large syncretic religious celebration of the Festa do Bonfim in January in Salvador celebrates both Oxalá and Our Lord of Bonfim; it includes the washing of the church steps with a special water, made with flowers.\n[…]\nTraditionally speaking, for sacrificial offerings to Obatala, considered an orixá-funfun (literally \"white orisha\"), the animals or their parts should be completely white, such as the white blood of the mollusk called Igbin (Achatina fulica)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Church_of_Nosso_Senhor_do_Bonfim",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Zoroastrismo",
      "descricao": "Religião antiga da Pérsia baseada nos ensinamentos do profeta Zoroastro"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Freddie Mercury, vocalista do Queen, nasceu numa família parse que seguia que antiga religião da Pérsia?",
    "resposta": "Zoroastrismo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Freddie_Mercury",
      "https://en.wikipedia.org/wiki/Zoroastrianism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991) was a British singer and songwriter who achieved global fame as the lead vocalist and pianist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he is known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his the\n[…]\nThe family had moved to Zanzibar so that Bomi could continue his job as a cashier at the British Colonial Office. As Parsis, the Bulsaras practised Zoroastrianism. As Zanzibar was a British protectorate until 1963, Mercury was born a British subject, and on 2 June 1969 was registered a citizen of the United Kingdom and Colonies after the family had emigrated to England.\n[…]\nMercury's funeral service was conducted on 27 November 1991 by a Zoroastrian priest at West London Crematorium, where he is commemorated by a plinth under his birth name. In attendance at Mercury's service were his family and 35 of his close friends, including Elton John and the members of Queen. His coffin was carried into the chapel to the sounds of \"Take My Hand, Precious Lord\"/\"You've Got a Friend\" by Aretha Franklin.\n[…]\nAs the first major rock star to die of AIDS-related complications, Mercury's death represented an important event in the history of the disease. In April 1992, the remaining members of Queen founded The Mercury Phoenix Trust and organised The Freddie Mercury Tribute Concert for AIDS Awareness, to celebrate the life and legacy of Mercury and raise money for AIDS research, which took place on 20 April 1992. The Mercury Phoenix Trust has since raised millions of pounds for various AIDS charities.\n[…]\nJones, Lesley-Ann (2011), Freddie Mercury: The Definitive Biography, London: Hachette UK, ISBN 9781444733709\n[…]\nFreddie Mercury discography at Discogs\n[…]\nFreddie Mercury at AllMusic\n[…]\nFreddie Mercury at IMDb"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Zoroastrianism",
        "situacao": "ok",
        "texto": "Zoroastrianism, also called Mazdayasna and Behdin, is an Iranian religion centred on the Avesta and the teachings of Zarathushtra Spitama, who is more commonly referred to by the Greek translation, Zoroaster (Ancient Greek: Ζωροάστρις, romanized: Zōroastris). Among the world's oldest organized faiths, its adherents exalt an uncreated, benevolent, and all-wise deity known as Ahura Mazda (Avestan: 𐬀\n[…]\nThe core teachings of Zoroastrianism include:\n[…]\nThe scriptural status and authority of Middle Persian religious texts are disputed among Zoroastrians, as John Hinnells points out that “most Iranians stress the authority of revealed scripture, the Gāthās, rather than the later Pahlavi texts which ‘orthodox’ Parsis value.”\n[…]\nAlexander's conquests largely displaced Zoroastrianism with Hellenistic beliefs, though the religion continued to be practiced many centuries following the demise of the Achaemenids in mainland Persia and the core regions of the former Achaemenid Empire, most notably Anatolia, Mesopotamia, and the Caucasus.\n[…]\nIn the Cappadocian kingdom, whose territory was formerly an Achaemenid possession, Persian colonists, cut off from their co-religionists in Iran proper, continued to practice the faith [Zoroastrianism] of their forefathers; and there Strabo, observing in the first century BCE, records (XV.3.15) that these \"fire kindlers\" possessed many \"holy places of the Persian Gods\", as well as fire temples.\n[…]\nCommunities exist in Tehran, as well as in Yazd, Kerman and Kermanshah, where many still speak an Iranian language distinct from the usual Persian. They call their language Dari, not to be confused with the Dari spoken in Afghanistan. Their language is also called Gavri or Behdini, literally \"of the Good Religion\". Sometimes their language is named for the cities in which it is spoken, such as Yazdi or Kermani. Iranian Zoroastrians were historically called Gabrs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Freddie_Mercury",
        "situacao": "ok",
        "texto": "Farrokh Bulsara (Cidade de Pedra, 5 de setembro de 1946 – Londres, 24 de novembro de 1991), mais conhecido pelo nome artístico Freddie Mercury, foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. É considerado como um dos maiores cantores de todos os tempos.\n[…]\nFreddie Mercury, com seu verdadeiro nome Farrokh Bulsara, nasceu na colônia britânica Cidade de Pedra, em Zanzibar (hoje parte da Tanzânia), primeiro filho de Bomi e Jer Bulsara, parsis zoroastrianos de Guzerate, na Índia. A família Bulsara se mudou da Índia para Zanzibar para que Bomi pudesse manter seu emprego no Banco Colonial Inglês, e lá o casal também teve sua segunda filha, Kashmira.\n[…]\nFreddie Mercury e a família eram seguidores da religião zoroastriana e, de acordo com as suas crenças, a maior parte dos seus bens foram queimados após a sua morte, exceto a sua coleção de selos que está atualmente no Museu Postal em Londres. Uma das razões pelas quais pensamos que a coleção não foi destruída foi porque os selos tinham vindo originalmente do seu pai. Os selos não foram recolhidos na forma típica: o cantor encomendava os selos com base nas suas cores e padrões.\n[…]\nIntegrantes de muitas grandes bandas que surgiram antes ou depois do Queen apontam Mercury como grande influência em seu trabalho. Axl Rose, vocalista do Guns N' Roses, baseou muito de sua postura no palco em Mercury, com relação a seus movimentos, o uso do piano e o modo de cantar, por exemplo, e declarou que se não tivesse ouvido as letras de Freddie quando criança, não sabe o que teria sido dele.\n[…]\nCom o Queen, Mercury lançou quinze álbuns, incluindo um disco póstumo, e também lançou dois álbuns solo. Os discos estão listados a seguir:\n[…]\nQueen (1973)\n[…]\nQueen II (1974)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Papai Noel",
      "descricao": "Personagem lendário que traz presentes no Natal"
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Que bispo cristão do século quatro, da cidade de Mira, na atual Turquia, inspirou a figura do Papai Noel?",
    "resposta": "São Nicolau",
    "fonte": [
      "https://en.wikipedia.org/wiki/Saint_Nicholas",
      "https://en.wikipedia.org/wiki/Santa_Claus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Nicholas",
        "situacao": "ok",
        "texto": "Saint Nicholas of Myra (traditionally 15 March 270 – 6 December 343), also known as Nicholas of Bari, was an early Christian bishop of Greek descent from the maritime city of Patara in Anatolia (in modern-day Antalya Province, Turkey) during the time of the Roman Empire. Because of the many miracles attributed to his intercession, he is also known as Nicholas the Wonderworker.\n[…]\nIn 1966, a vault in the crypt underneath the Basilica di San Nicola was dedicated as an Orthodox chapel with an iconostasis in commemoration of the recent lifting of the anathemas the Roman Catholic and Eastern Orthodox Churches had issued against each other during the Great Schism in 1054.\n[…]\nPort became an important center of devotion in the following of Nicholas and, in the fifteenth century, a church known as the Basilique Saint-Nicolas was built there and dedicated to him. The town itself is now known as \"Saint Nicolas de Port\" in honor of Nicholas.\n[…]\nThe clergy at Bari strategically distributed samples of Nicholas's bones to promote the cult and enhance its prestige. Many of these bones were initially kept in Constantinople, but, after the Sack of Constantinople in 1204 during the Fourth Crusade, these fragments were scattered across western Europe. A hand claimed to be that of Saint Nicholas was kept at San Nicola in Carcere in Rome. This church, whose name means \"Saint Nicholas in Chains\", was built on the site of a former municipal prison.\n[…]\nIn 1948, Benjamin Britten completed a cantata, Saint Nicolas on a text by Eric Crozier which covers the saint's legendary life in a dramatic sequence of events. A tenor soloist appears as Saint Nicolas, with a mixed choir, boys singers, strings, piano duet, organ and percussion.\n[…]\nThe History of Santa Claus and Father Christmas"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Claus",
        "situacao": "ok",
        "texto": "Santa Claus is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on Christmas Eve. Christmas elves are said to make the gifts in Santa's workshop, while flying reindeer pull his sleigh through the air.\n[…]\nIn the Netherlands and Belgium, the character of Santa Claus competes with that of Sinterklaas, based on Saint Nicolas. Santa Claus is known as de Kerstman in Dutch (\"the Christmas man\") and Père Noël (\"Father Christmas\") in French. For children in the Netherlands, Sinterklaas remains the predominant gift-giver in December; 36% of the Dutch only give presents on Sinterklaas evening or the day itself, 6 December, while Christmas, 25 December, is used by another 21% to give presents.\n[…]\nIn France, Santa is believed to reside in 1 Chemin des Nuages, Pôle Nord (1 Alley of Clouds, North Pole). The French national postal service has operated a service that allows children to send letters to Père Noël since 1962. In the period before Christmas, any physical letter in the country that is addressed to Santa Claus is sent to a specific location, where responses for the children's letters are written and sent back to the children.\n[…]\nAccording to a 2007 survey of national postal operations by the Universal Postal Union (UPU), La Poste (France) received the most letters for Santa Claus (or Père Noël) in 2006, with 1,220,000 letters received from 126 countries. In 2007 it recruited someone specially to answer the enormous volume of mail for Santa that was being sent from Russia. Canada Post replied to letters in 26 languages, Deutsche Post in 16 languages.\n[…]\n\"The Knickerbockers Rescue Santa Claus: 'Claas Schlaschenschlinger' from James Kirke Paulding's The Book of Saint Nicholas\" (1836)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicolau_de_Mira",
        "situacao": "ok",
        "texto": "São Nicolau de Mira, também conhecido como São Nicolau de Bari (Patara, c. 270 – Mira, 6 de dezembro de 343), foi um bispo cristão grego da Ásia Menor, venerado como santo pela Igreja Católica e pela Igreja Ortodoxa. É um dos santos mais populares da cristandade e tornou-se, ao longo dos séculos, símbolo de caridade, especialmente para com os pobres e as crianças.\n[…]\nSão Nicolau era de ascendência grega e nasceu em Patara, na região da Lícia, então parte do Império Romano (atual Turquia), na segunda metade do século III. Viveu num período marcado pelas perseguições aos cristãos e pelas grandes disputas doutrinais que moldaram os primeiros séculos da Igreja.\n[…]\nNicolau tornou-se bispo de Mira, destacando-se pelo zelo pastoral, pela defesa da fé cristã e pela caridade concreta. Durante a perseguição promovida pelo imperador Diocleciano, foi preso por se recusar a renegar a sua fé em Jesus Cristo.\n[…]\nNa cidade de Bari, na Itália, onde se acredita estarem sepultados os seus restos mortais, São Nicolau é padroeiro dos coroinhas e objeto de profunda devoção popular.\n[…]\nSéculos após a sua morte, a figura de São Nicolau inspirou o personagem natalino conhecido como Papai Noel (português brasileiro) ou Pai Natal (português europeu), Santa Claus (nos países anglófonos) e Sinterklaas (na Holanda). É representado por um velhinho corado de barba branca, que traz um saco de presentes e percorre o mundo sendo levado em um trenó por renas voadoras.\n[…]\nEm 1691 foi fundada a Irmandade de São Nicolau, composta por estudantes, e até hoje realizam-se as Festas Nicolinas, uma das mais antigas celebrações académicas do mundo. As festividades decorrem entre 29 de novembro e 6 de dezembro, tendo como ponto alto as Maçãzinhas, tradição inspirada no auxílio prestado por São Nicolau às jovens pobres.\n[…]\nFesta de São Nicolau\n[…]\nPapai Noel\n[…]\nSão Nicolau, verdadeiro Papai Noel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Lumbini",
      "descricao": "Local de peregrinação budista apontado pela tradição como lugar de nascimento de Buda"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que país atual fica Lumbini, onde a tradição budista situa o nascimento de Siddhartha Gautama?",
    "resposta": "Nepal",
    "distratores": [
      "Índia",
      "Butão",
      "Sri Lanka"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lumbini"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lumbini",
        "situacao": "ok",
        "texto": "Lumbini (pronounced [/lʊmˈbiːni/] , \"the lovely\" or \"beautiful garden\") is a Buddhist pilgrimage site in the Rupandehi District of Lumbini Province in Nepal. According to sacred texts and Buddhist commentaries, Queen Maya gave birth to Siddhartha Gautama, the Buddha, in Lumbini, c. 563 BCE. Lumbini is one of four most sacred pilgrimage sites pivotal in the life of the Buddha.\n[…]\nIn 2021, The Government of Bangladesh signed an agreement to construct a Buddhist monastery in Lumbini under the chairmanship of former premier of Bangladesh Sheikh Hasina with an intention of keeping a \"symbol of Bangladesh at the birthplace of Lord Gautam Buddha\". Similarly, in 2023, Russian Ambassador to Nepal Aleksei Novikov laid the foundation for the Russian Buddhist monastery in Lumbini to represent Russian Federation as well.\n[…]\nIn 2013, Nepal's central bank introduced a 100-rupee Nepali note featuring Lumbini. The Nepal Rastra Bank said the new note would be accessible only during the Dashain, Nepal's major festival in September or October. It displays a portrait of Mayadevi in metallic silver on the front. The note also has a black dot on it to help visually impaired people recognise it.\n[…]\nIn 2022 on Buddha's Birthday, Indian Prime Minister Narendra Modi and Nepalese Prime Minister Sher Bahadur Deuba, jointly laid the foundation stone for the Indian monastery in Lumbini. Nepal-India cultural events are held annually in Lumbini highlighting the close spiritual and cultural connection between the two countries.\n[…]\nLumbini is a 10-hour drive from Kathmandu and a 30-minute drive from Bhairahawa. The closest airport is Gautam Buddha Airport at Bhairahawa, with flights to and from Kathmandu.\n[…]\nList of stupas in Nepal\n[…]\nList of Buddhist monasteries in Nepal\n[…]\nLumbini - The birthplace of Lord Buddha in Nepal. Completing the Kenzo Tange master Plan. UNESCO.\n[…]\nLumbini at the Open Directory Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lumbini",
        "situacao": "ok",
        "texto": "Lumbini ou Lumpíni é uma localidade do Distrito de Rupandehi, na Zona de Lumbini, na Região Oeste do Nepal. É famoso por ter sido o local onde teria nascido Sidarta Gautama, o fundador do budismo, cerca de 563 a.C.\n[…]\nAté agora, uma das primeiras evidências arqueológicas das estruturas do Budismo em Lumbini datava do século III a.C., do tempo do Imperador Asoka, que promoveu a expansão do Budismo do atual Afeganistão a Bangladesh.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Nossa Senhora Aparecida",
      "descricao": "Imagem de Nossa Senhora da Conceição encontrada em 1717, padroeira do Brasil"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em 1717, pescadores encontraram a imagem de Nossa Senhora Aparecida nas águas de que rio?",
    "resposta": "Paraíba do Sul",
    "fonte": [
      "https://en.wikipedia.org/wiki/Our_Lady_of_Aparecida",
      "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Conceição_Aparecida"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Our_Lady_of_Aparecida",
        "situacao": "ok",
        "texto": "Our Lady of Aparecida Portuguese: Nossa Senhora Aparecida or Nossa Senhora da Conceição Aparecida) is a title of the Blessed Virgin Mary associated with the Immaculate Conception.\n[…]\nColonial documents and papal bulls have referred to the image as Nossa Senhora da Conceição Aparecida. The feast day of Our Lady Aparecida in the Roman Rite is on October 12, which  is also a public holiday in Brazil since 1980. The building in which the image is venerated was granted the title of a minor basilica by Pope John Paul II in 1980, and is the largest Marian shrine in the world, being able to hold up to 45,000 worshippers.\n[…]\nAs the people of Guaratinguetá decided to hold a feast in his honour, three fishermen, Domingos Garcia, João Alves, and Filipe Pedroso went down to the Paraíba waters to fish. The fishermen prayed to Our Lady of the Immaculate Conception that God would grant a good catch. The fishermen, having a run of bad luck, cast their nets in the River Paraiba and dragged up a headless statue of the Virgin Mary. They also salvaged the head and, according to the legend, then netted plenty of fish.\n[…]\nThe fishermen named the statue Nossa Senhora da Conceição Aparecida (English: Our Lady of the Conception, the Appeared). Neighbors began to venerate the statue, which came to be known as Our Lady Aparecida (the Appeared), and devotion grew. The first chapel was built in 1745.\n[…]\nIn 1967, Our Lady of Aparecida was granted the title of generalissima of the Brazilian Army.\n[…]\nSince the 19th century, the Feast Day of Our Lady Aparecida is celebrated on 12 October, the day of the finding of the statue.\n[…]\nOfficial website of the National Shrine of Our Lady Aparecida (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nossa_Senhora_da_Conceição_Aparecida",
        "situacao": "ok",
        "texto": "Nossa Senhora da Conceição Aparecida, popularmente chamada Nossa Senhora Aparecida, é uma das mais famosas invocações da Virgem Maria, mãe de Jesus Cristo. É reconhecida oficialmente como a Padroeira do Brasil, título que simboliza a maternal proteção de Maria sobre o povo brasileiro, e celebrada em 12 de outubro.\n[…]\nA imagem de Nossa Senhora Aparecida é uma pequena escultura de terracota, de cor negra, representando a Virgem da Imaculada Conceição. Foi encontrada por três pescadores nas águas do Rio Paraíba do Sul, por volta de outubro de 1717, um acontecimento interpretado como um sinal da presença e da intercessão de Maria junto de seus filhos mais simples e necessitados.\n[…]\nNa ocasião das comemorações do tricentenário (1717-2017) do encontro da venerável imagem de Nossa Senhora da Conceição Aparecida, a Virgem Maria foi homenageada com diversos títulos eclesiásticos e civis concedidos em reconhecimento.\n[…]\nMuito se especula sobre a história da imagem de Nossa Senhora Aparecida antes de ser encontrada pelos pescadores, em especial os motivos pelos quais ela foi parar no leito do rio Paraíba do Sul.\n[…]\nA imagem retirada das águas do rio Paraíba do Sul em 1717 mede trinta e seis centímetros de altura e é de terracota, ou seja, argila que após modelada é cozida num forno apropriado. Representa a Imaculada Conceição. Em estilo seiscentista, como atestado por diversos especialistas que a analisaram, acredita-se que originalmente apresentaria uma policromia, como era costume à época, embora não haja documentação que comprove tal suspeita.\n[…]\nA devoção nasceu em 1964, quando a professora e cafeicultora Ana Maria Negrini, de Espírito Santo do Pinhal, escreveu o artigo \"Minha Nossa Senhora de Café\", relacionando a cor da imagem de Nossa Senhora da Conceição Aparecida ao tom do café.\n[…]\nNossa Senhora das Lágrimas"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Círio de Nazaré",
      "descricao": "Procissão católica em homenagem a Nossa Senhora de Nazaré, realizada em outubro"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que capital brasileira acontece todo mês de outubro a procissão do Círio de Nazaré?",
    "resposta": "Belém",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
      "https://en.wikipedia.org/wiki/Círio_de_Nazaré"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "O Círio de Nazaré é uma manifestação religiosa católica, herdada dos colonizadores portugueses, marcada por procissões (romarias) em devoção a Nossa Senhora de Nazaré, que ocorre na cidade brasileira de Belém (estado do Pará). É celebrado anualmente desde 1793, no segundo domingo de outubro, reunindo atualmente cerca de dois milhões de pessoas.\n[…]\n1793 - É realizado o primeiro Círio de Nazaré em Belém.\n[…]\n1855 - O palanquim e o portador que conduziam a imagem de Nossa Senhora de Nazaré, são substituídos por uma carruagem, que servia como uma espécie de Berlinda, inicialmente puxada por cavalos. A corda é usada pela primeira vez na romaria, para puxar a berlinda, devido a água que transbordava da Baía do Guajará, ás margens do Ver-o-peso, pelo fato da berlinda ter atolado por lá. Ocorre uma epidemia de cólera em Belém, mas não impedindo a realização do Círio.\n[…]\n1974 - É criada a Guarda de Nazaré de Belém. É realizado o primeiro Círio de Brasília.\n[…]\nProcissões semelhantes à que ocorre em Belém acontecem em várias outras cidades do Pará e do Brasil. As mais famosas são o Círio de Soure, o Círio de Vigia, além das procissões realizadas em Abaetetuba, Castanhal, Bragança, Breves e Marabá. A cidade do Rio de Janeiro realiza a procissão no mês de setembro, em Copacabana. Brasília, Rio Branco, Manaus, Macapá e Recife também realizam suas procissões, sendo o Círio de Nazaré introduzido nessas capitais por paraenses que lá residem.\n[…]\nSão Luís também realiza o Círio nos mesmos moldes de Belém, entretanto, a procissão acontece na parte da tarde. Já é considerada a segunda maior procissão do Maranhão, atrás apenas da procissão de São José de Ribamar, que é o padroeiro do Maranhão. Essas são algumas capitais onde o Círio de Nazaré foi introduzido por paraenses que moram em outros estados.\n[…]\n«Santuário de Nossa Senhora de Nazaré (Portugal)»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Círio_de_Nazaré",
        "situacao": "ok",
        "texto": "The Círio de Nazaré is a Catholic religious celebration, originating from Portuguese colonizers, involving processions (pilgrimages) in devotion to Our Lady of Nazareth, held in the Brazilian city of Belém (state of Pará). It has been observed annually since 1793, on the second Sunday of October, and currently attracts approximately two million participants.\n[…]\n1793 - The first Círio is held in Belém.\n[…]\n1974 - The Nazaré Guard of Belém is established. The first Círio is held in Brasília.\n[…]\nSimilar processions to the one in Belém are held in several other cities in Pará and Brazil, including the Círio of Soure, Vigia, Santarém, Abaetetuba, Castanhal, Bragança, Breves, and Marabá. The city of Rio de Janeiro holds a procession in September in Copacabana. Processions also take place in Brasília, Rio Branco, Manaus, Macapá, and Recife, introduced by residents from Pará.\n[…]\nThe first televised images of the Círio appeared in the 1950s via black-and-white films. In the 1960s, TV Marajoara and TV Guajará (now Boas Novas Belém) began broadcasting select moments of the pilgrimage. TV Marajoara used strategic locations, such as the Stevedores' Square, the Cathedral front, and Nazaré Square, with audio from Rádio Marajoara.\n[…]\nIn 1976, TV Liberal Belém introduced real-time coverage, focusing on the passage in front of its headquarters on Nazaré Avenue and the Stevedores' tributes at the former O Liberal building. In 1983, TV Liberal broadcast the first aerial images using a helicopter. In 1997, the Círio was broadcast online globally using TV Liberal’s signal.\n[…]\nAll pilgrimages of the Nazarene Fortnight are currently broadcast by Rede Cultura do Pará, SBT Pará (except in 2016 and 2017), TV Liberal, RecordTV Belém, RBA TV, TV Nazaré, and TV Círio.\n[…]\nOur Lady of Grace Cathedral, Belém\n[…]\nBasilica Nossa Senhora de Nazaré\n[…]\nCírio Broadcast - Fundação Nazaré"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Templo Dourado",
      "descricao": "Principal santuário do sikhismo, o Harmandir Sahib"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que cidade indiana fica o Templo Dourado, principal santuário do sikhismo?",
    "resposta": "Amritsar",
    "distratores": [
      "Nova Délhi",
      "Varanasi",
      "Jaipur"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Golden_Temple"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Golden_Temple",
        "situacao": "ok",
        "texto": "The Golden Temple is a gurdwara located in Amritsar, Punjab, India. It is the pre-eminent spiritual site of Sikhism and its holiest site. The gurdwara complex is a collection of buildings around the sanctum sanctorum and the sarovar (holy pool), known as the Amrit Sarovar. One of these is Akal Takht, part of the Panj Takht (five seats of authority in Sikhism) and the chief centre of religious auth\n[…]\nIn 1757, the Afghan ruler Ahmad Shah Durrani, also known as Ahmad Shah Abdali, attacked Amritsar and desecrated the Golden Temple. He had waste poured into the pool along with entrails of slaughtered cows, before departing for Afghanistan. The Sikhs restored it again.\n[…]\nThe destruction of the temple complex occurred during the Operation Blue Star. It was the codename of an Indian military action carried out between 1 and 8 June 1984 to remove militant Sikh Jarnail Singh Bhindranwale and his followers from the buildings of the Harmandir Sahib (Golden Temple) complex in Amritsar, Punjab. The decision to launch the attack rested with Prime Minister Indira Gandhi.\n[…]\nThe Bhindranwale-led group under the military leadership of General Shabeg Singh had begun to build bunkers and observations posts in and around the Golden Temple. They organised the armed militants present at the Harmandir Sahib in Amritsar in June 1984. The Golden Temple became a place for weapons training for the militants.\n[…]\nIn June 1984, Prime Minister Indira Gandhi ordered the Indian Army to begin Operation Blue Star against the militants. The operation caused severe damage and destroyed the Akal Takht. Numerous soldiers, militants and civilians died in the crossfire, with official estimates of death of 492 civilians and 83 Indian army men. Within days of the Operation Bluestar, some 2,000 Sikh soldiers in India mutinied and attempted to reach Amritsar to liberate the Golden Temple.\n[…]\nDelhi Amritsar Katra Expressway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Harmandir_Sahib",
        "situacao": "ok",
        "texto": "Harmandir Sahib (em panjabi:  ਹਰਿਮੰਦਰ ਸਾਹਿਬ) ou Darbar Sahib (em panjabi:  ਦਰਬਾਰ ਸਾਹਿਬ), informalmente chamado de O Templo Dourado ou Templo de Deus, é culturalmente o mais importante lugar de culto dos siques e uma das mais antigas gurudwaras siques. Está localizado na cidade de Amritsar, que foi criada pelo Guru Ram Das Ji, o quarto guru dos siques, e é, também devido ao santuário, conhecida com\n[…]\nSeu nome significa literalmente Casa de Deus. O quarto Guru do siquismo, o Guru Ram Das, escavou um tanque em 1577, que posteriormente ficou conhecido como Amritsar (significando: Piscina do Néctar da Imortalidade), dando o seu nome para a cidade que cresceu em torno dele. No devido tempo, um esplêndido edifício sique, Harmandir Sahib (Templo de Deus), foi construído na parte central desse tanque, que tornou-se o centro supremo de siquismo.\n[…]\nA maioria dos siques visita Amritsar e o Harmandir Sahib, pelo menos uma vez durante a sua vida, principalmente durante ocasiões especiais, como aniversários, casamentos, nascimentos de filhos, etc.\n[…]\nPode-se chegar ao Sri Harmandir Sahib por qualquer meio de transporte. Por via aérea, por rodovia e por ferrovia. Amritsar tem um importante entroncamento ferroviário operado pela Indian Railways e um terminal internacional de ônibus operado pelo Departamento de Transportes, Punjab, que é equipado com o mais moderno conforto. O meio mais rápida para um turista internacional alcançar Harmandir Sahib seria viajar de avião.\n[…]\nA capital da Índia, Nova Deli fica a cerca de 483 quilômetros de Amritsar, há voos vinte e quatro horas, conexões de trens e de transporte rodoviário de Amritsar para Nova Deli. Existe uma rede de hotéis internacionais na cidade sagrada que aceita reservas para pernoites. O Lonely Planet Bluelist 2008 considerou o Sri Harmandir Sahib como uma das melhores localidades espirituais do mundo.\n[…]\n«Amritsar Paath» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Conclave",
      "descricao": "Reunião dos cardeais da Igreja Católica para eleger um novo papa"
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que capela do Vaticano os cardeais se reúnem em conclave para eleger um novo papa?",
    "resposta": "Capela Sistina",
    "fonte": [
      "https://en.wikipedia.org/wiki/Papal_conclave"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Papal_conclave",
        "situacao": "ok",
        "texto": "A conclave is a gathering of the College of Cardinals convened to appoint the pope of the Catholic Church. Catholics consider the pope to be the apostolic successor of Saint Peter and the earthly head of the Catholic Church.\n[…]\nThe 2025 papal conclave was the first time that more than 120 cardinal-electors participated, at 133.\n[…]\nBefore the conclave that elected Pope Francis, the Sistine Chapel was \"swept\" to detect any hidden \"bugs\" or surveillance devices. There were no reports that any were found, but in previous conclaves press reporters who had disguised themselves as conclave servants were discovered. Universi Dominici gregis specifically prohibits media such as newspapers, the radio, and television. Wi-Fi access is blocked in Vatican City.\n[…]\nPrior to 1621, the only oath taken was that of obedience to the rules of the conclave in force at that time, when the cardinals entered the conclave and the doors were locked, and each morning and afternoon as they entered the Sistine Chapel to vote. Gregory XV added the additional oath, taken when each cardinal casts his ballot, to prevent cardinals wasting time in casting \"courtesy votes\" and instead narrowing the number of realistic candidates for the papal throne to perhaps only two or three.\n[…]\nA papal conclave is the subject of the 2024 film Conclave, itself adapted from a 2016 novel. While the cardinals and plot are fictional and dramatised, the rituals are correctly shown, according to experts. Some of the rituals include the sequestering in the Sistine Chapel, the burning of ballots, the use of smoke signals, and the destruction of a deceased pope's ring.\n[…]\nList of papal conclaves\n[…]\nPolitics of Vatican City\n[…]\n\"Conclave\". Encyclopædia Britannica (11th ed.). 1911."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conclave",
        "situacao": "ok",
        "texto": "Um conclave é uma reunião do Colégio de Cardeais convocada para eleger o bispo de Roma, também conhecido como Papa. Os católicos consideram o papa o sucessor apostólico de São Pedro e o chefe terreno da Igreja Católica. É o método histórico mais antigo de eleger um chefe de Estado específico, no caso, para a Cidade do Vaticano, que permanece em uso até os dias atuais.\n[…]\nPreocupações com a interferência política levaram a reformas após o interregno de 1268–1271 e o decreto do Papa Gregório X durante o Segundo Concílio de Lyon, em 1274, que determinou que os cardeais eleitores deveriam ser trancados em seclusão cum clave (latim para \"com chave\") e não poderiam sair até que um novo papa fosse eleito. Os conclaves agora são realizados na Capela Sistina do Palácio Apostólico na Cidade do Vaticano.\n[…]\nO número total de Cardeais eleitores não pode ser superior a 120. O Conclave realiza-se obrigatoriamente dentro do Estado do Vaticano (Capela Sistina), decorrendo as suas sessões no meio do maior secretismo e isolamento.\n[…]\nPosto isto, os Cardeais eleitores dirigem-se entoando o hino Veni Creator Spiritus às suas cadeiras, marcadas com os seus nomes. Estando todos nos seus lugares, o Mestre das Celebrações Litúrgicas Pontifícias, encarregue de dirigir todo o cerimonial e protocolo do Conclave, profere a frase latina Extra omnes. É a ordem para que todos os estranhos abandonem rapidamente a Capela Sistina.\n[…]\nA caixa que contém os votos, os apontamentos dos Cardeais e as tiras do sorteio dos escrutinadores é levada a queimar dentro do fogão da Capela Sistina, sem palha molhada. Sai fumo branco, sinal de que foi eleito um novo Papa. Pouco depois, o Cardeal Protodiácono dirige-se à varanda da Basílica de São Pedro anunciar o resultado:\n[…]\nPágina oficial do Vaticano com o texto, em português, dos procedimentos para a eleição do novo Papa (Universi Dominici Gregis)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Primeira Cruzada",
      "descricao": "Expedição militar cristã de 1096 a 1099 que tomou Jerusalém"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1095, no Concílio de Clermont, que papa convocou a Primeira Cruzada?",
    "resposta": "Urbano Segundo",
    "distratores": [
      "Gregório Sétimo",
      "Inocêncio Terceiro",
      "Leão Nono"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/First_Crusade",
      "https://en.wikipedia.org/wiki/Pope_Urban_II"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/First_Crusade",
        "situacao": "ok",
        "texto": "The First Crusade (1096–1099) was the first of a series of religious wars, or Crusades, which were initiated, supported and at times directed by the Latin Church in the Middle Ages. Their aim was to return the Holy Land to Christian rule after its conquest by the Rashidun Caliphate in the 7th century.\n[…]\nThe major ecclesiastical impetuses behind the First Crusade were the Council of Piacenza and subsequent Council of Clermont, both held in 1095 by Pope Urban II, and resulted in the mobilisation of Western Europe to go to the Holy Land. Emperor Alexios, who worried about the advances of the Seljuks into his territory, sent envoys to the Council of Piacenza in March 1095 to ask Urban for aid against the invading Turks.\n[…]\nThese include multiple first-hand accounts of the Council of Clermont and the crusade itself. American historian August Krey has created a narrative The First Crusade: The Accounts of Eyewitnesses and Participants, verbatim from the various chronologies and letters which offers considerable insight into the endeavour.\n[…]\nAccording to the Routledge Companion, the three works that rank as being monumental by 20th-century standards are: René Grousset's Histoire des croisades et du royaume franc de Jérusalem; Steven Runciman's 3-volume set of A History of the Crusades, and the Wisconsin Collaborative History of the Crusades (Wisconsin History). Grousset's volume on the First Crusade was L'anarchie musulmane, 1095–1130, a standard reference in the mid-twentieth century.\n[…]\nHis work includes The First Crusade and the Idea of Crusading (1993) and The First Crusaders, 1095–1131 (1998). His doctoral students are among the most renowned in the world and he led the team that created the Database of Crusaders to the Holy Land, 1096–1149.\n[…]\nPilgrim's Road, followed by the Crusaders"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pope_Urban_II",
        "situacao": "ok",
        "texto": "Pope Urban II (Latin: Urbanus II; c. 1035 – 29 July 1099), otherwise known as Odo of Châtillon or Otho de Lagery, was the head of the Catholic Church and ruler of the Papal States from 12 March 1088 to his death. He is best known for convening the Council of Clermont, which ignited the series of Catholic military expeditions known as the Crusades.\n[…]\nPope Urban was a native of France and a descendant of a noble family from the French commune of Châtillon-sur-Marne. Before his papacy, Urban was the grand prior of Cluny and bishop of Ostia. As pope, he dealt with Antipope Clement III, the infighting of various Christian nations, and the Turkish invasions into Anatolia. In 1095, he started preaching for the start of the First Crusade (1096–1099).\n[…]\nUrban II's movement took its first public shape at the Council of Piacenza, where, in March 1095, Urban II received an ambassador from the Byzantine Emperor Alexios I Komnenos asking for help against the Turkish tribes who had taken over most of formerly Byzantine Anatolia. The Council of Clermont met, attended by numerous Italian, Burgundian, and French bishops.\n[…]\nNo exact transcription exists of the speech that Urban delivered at the Council of Clermont. The five extant versions of the speech were written down sometime later and differ widely. All versions of the speech except that by Fulcher of Chartres were probably influenced by the chronicle account of the First Crusade called the Gesta Francorum (written c. 1101), which includes a version of it.\n[…]\nSomerville, Robert (1974). \"The Council of Clermont (1095), and Latin Christian Society\". Archivum Historiae Pontificiae. 12: 55–90. JSTOR 23563638.\n[…]\nFive versions of his speech for the First Crusade from Medieval Sourcebook\n[…]\nUrban's call for the 1095 crusade"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Primeira_Cruzada",
        "situacao": "ok",
        "texto": "A Primeira Cruzada (1096–1099) foi a primeira de uma série de guerras religiosas, ou Cruzadas, iniciadas, apoiadas e às vezes dirigidas pela Igreja Católica no período medieval. O objetivo era recuperar a Terra Santa do domínio islâmico. Embora Jerusalém tenha estado sob domínio muçulmano por centenas de anos, no século XI, a conquista da região pelos seljúcidas ameaçou as populações cristãs locai\n[…]\nA primeira iniciativa da Primeira Cruzada começou em 1095, quando o imperador bizantino Aleixo I Comneno solicitou apoio militar do Concílio de Placência no conflito do império com os turcos liderados pelos seljúcidas. Isso foi seguido no final do ano pelo Concílio de Clermont, durante o qual o papa Urbano II apoiou o pedido bizantino de ajuda militar e também exortou os cristãos fiéis a empreender uma peregrinação armada a Jerusalém.\n[…]\nOs principais impulsos eclesiásticos por trás da Primeira Cruzada foram o Concílio de Placência e o subsequente Concílio de Clermont, ambos celebrados em 1095 pelo papa Urbano II, e resultaram na mobilização da Europa Ocidental para ir à Terra Santa.\n[…]\nQualquer que seja a cifra, é fato que o discurso de Urbano foi bem planejado. Havia discutido a cruzada com Ademar de Monteil e o conde Raimundo IV de Tolosa, e imediatamente a expedição teve o apoio de dois dos líderes mais importantes do sul da França. O próprio Ademar esteve presente no concílio e foi o primeiro a \"levar a cruz\".\n[…]\nDurante o resto de 1095 e em 1096, Urbano espalhou a mensagem por toda a França e exortou seus bispos e legados a pregar em suas próprias dioceses em outras partes da França, Sacro Império e Itália. No entanto, é claro que a resposta ao discurso foi muito maior do que até mesmo o papa, quanto mais Aleixo, esperava. Em sua viagem pela França, tentou proibir certas pessoas (incluindo mulheres, monges e doentes) de se juntar à cruzada, mas achou isso quase impossível.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Companhia de Jesus",
      "descricao": "Ordem religiosa católica dos jesuítas, aprovada pelo papa em 1540"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem fundou a Companhia de Jesus, a ordem dos jesuítas aprovada pelo papa em 1540?",
    "resposta": "Inácio de Loyola",
    "fonte": [
      "https://en.wikipedia.org/wiki/Society_of_Jesus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Society_of_Jesus",
        "situacao": "ok",
        "texto": "The Society of Jesus (Latin: Societas Iesu; abbreviation: S.J. or SJ), also known as the Jesuit Order or the Jesuits ( JEZH-oo-its, JEZ-ew-; Latin: Iesuitae), is a religious order of clerics regular of pontifical right for men in the Catholic Church. Headquartered in Rome, it was founded in 1540 by Ignatius of Loyola and six companions, with the approval of Pope Paul III.\n[…]\nThe term Jesuit (of 15th-century origin, meaning \"one who used too frequently or appropriated the name of Jesus\") was first applied to the society in reproach (1544–1552). The term was never used by Ignatius of Loyola, but over time, members and friends of the society adopted the name with a positive meaning.\n[…]\nInspired by two Roman Jesuit churches – the Chiesa del Gesù (1580) and the Chiesa di Sant'Ignazio di Loyola (1650) – la Compañía is one of the most significant works of Spanish Baroque architecture in South America and Quito's most ornate church.\n[…]\nIn this way it was sought to do away with the Society of Jesus – which can well glory in being one of the soundest auxiliaries of the Chair of Saint Peter – with the hope, perhaps, of then being able with less difficulty to overthrow in the near future, the Christian faith and morale in the heart of the Spanish nation, which gave to the Church of God the grand and glorious figure of Ignatius Loyola.\"\n[…]\nOn 22 April 2006, during the Feast of Our Lady, Mother of the Society of Jesus, Pope Benedict XVI greeted thousands of Jesuits on pilgrimage to Rome, and took the opportunity to thank God \"for having granted to your Company the gift of men of extraordinary sanctity and of exceptional apostolic zeal such as St Ignatius of Loyola, St Francis Xavier, and Blessed Peter Faber\".\n[…]\nHöpfl, Harro. Jesuit Political Thought: The Society of Jesus & the State, c. 1540–1640 (2004).\n[…]\n\"Society of Jesus\" section of Wikisource's Catholicism portal."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Companhia_de_Jesus",
        "situacao": "ok",
        "texto": "Companhia de Jesus (latim: Societas Iesu, S. J.), cujos membros são conhecidos como jesuítas, é uma ordem religiosa fundada em 1534 por um grupo de estudantes da Universidade de Paris, liderados pelo basco Íñigo López de Loyola, conhecido posteriormente como Santo Inácio de Loyola. A Ordem foi reconhecida por bula papal em 1540. É hoje conhecida principalmente por seu trabalho missionário e educac\n[…]\nInácio de Loyola escreveu as constituições jesuítas, adotadas em 1554, que deram origem a uma organização rigidamente disciplinada e guerreira, como se de uma primitiva ordem de cavalaria se tratasse, enfatizando a absoluta abnegação e a obediência ao Papa e aos superiores hierárquicos (perinde ac cadaver, \"disciplinado como um cadáver\", nas palavras de Inácio). O seu grande princípio tornou-se o lema dos jesuítas: Ad maiorem Dei gloriam (\"Para a maior glória de Deus\").\n[…]\nAcompanhado por Fabro e Laynez, Inácio viajou até Roma, em outubro de 1538, para pedir ao papa a aprovação da ordem. O plano das Constituições da Companhia de Jesus foi examinado por Tomás Badia, mestre do Sacro Palácio, e mereceu sua aprovação. A congregação de cardeais, depois de algumas resistências, deu parecer positivo à constituição apresentada.\n[…]\nO papa Paulo III autorizou que fossem ordenados padres, o que sucedeu em Veneza, pelo bispo de Rab, em 24 de junho. Devotaram-se inicialmente a pregar e em obras de caridade em Itália. A guerra reatada entre o imperador, Veneza, o papa e os turcos seljúcidas tornava qualquer viagem até Jerusalém pouco aconselhável. Inácio de Loyola foi escolhido para servir como primeiro superior-geral.\n[…]\nA Companhia de Jesus foi fundada no contexto da Reforma Católica (também chamada de Contrarreforma). Os jesuítas fazem votos de obediência total à doutrina da Igreja Católica, tendo Inácio de Loyola declarado:\n[…]\n«Centro Loyola de Fé e Cultura»\n[…]\n«The Jesuit Curia in Rome» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Tao Te Ching",
      "descricao": "Texto clássico chinês, fundamento do taoísmo"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "A quem a tradição chinesa atribui o Tao Te Ching, texto fundamental do taoísmo?",
    "resposta": "Lao-Tsé",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tao_Te_Ching"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "The Tao Te Ching or Dào Dé Jīng, (traditional Chinese: 道德經; simplified Chinese: 道德经; lit. 'Classic of the Way and its Virtue') also known simply as the Laozi, is an ancient Chinese classic text traditionally credited to the sage Laozi, regarded as the foundational Taoist text. Central to both philosophical and religious Taoism, it has been \"profoundly influential\" more broadly in Chinese culture, \n[…]\nOther notable English translations of the Tao Te Ching are those produced by Chinese scholars and teachers: a 1948 translation by linguist Lin Yutang, a 1961 translation by author John Ching Hsiung Wu, a 1963 translation by sinologist Din Cheuk Lau, another 1963 translation by professor Wing-tsit Chan, and a 1972 translation by Taoist teacher Gia-Fu Feng together with his wife Jane English.\n[…]\nOther Taoism scholars, such as Michael LaFargue and Jonathan Herman, argue that, while these versions do not pretend to scholarship, they meet a real spiritual need in the West; they aim to make the wisdom of the Tao Te Ching more accessible to modern English-speaking readers by, typically, employing more familiar cultural and temporal references.\n[…]\nThe Tao Te Ching is written in Classical Chinese, which poses a number of challenges for interpreters and translators. As Holmes Welch notes, the written language \"has no active or passive, no singular or plural, no case, no person, no tense, no mood\". Moreover, the received text lacks many grammatical particles which are preserved in the older Mawangdui and Beida texts, and which permit the meaning to be more precise. Lastly, many passages of the Tao Te Ching appear to be deliberately ambiguous.\n[…]\nDaodejing (in Literary Chinese and English), translated by Legge, James (Wang Bi ed.) – via Chinese Text Project\n[…]\nLaozi (in Literary Chinese) (Mawangdui ed.) – via Chinese Text Project\n[…]\nTao Te Ching public domain audiobook at LibriVox"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tao_Te_Ching",
        "situacao": "ok",
        "texto": "Tao Te Ching, Dao de Jing ou Tao-te king (em chinês: , Dàodé jīng), comumente traduzido como O Livro do Caminho e da Virtude, é uma das mais conhecidas e importantes obras da literatura da China. Foi escrito entre 350 e 250 a.C.\n[…]\nA sua autoria é tradicionalmente atribuída a Lao Tzi (literalmente, \"Velho Mestre\"),  porém a maioria dos estudiosos atuais acredita que Lao Tzi nunca existiu e que a obra é, na verdade, uma reunião de provérbios pertencentes a uma tradição oral coletiva, versando sobre o tao (a \"realidade última\" do universo). A obra inspirou o surgimento de diversas religiões e filosofias, em especial o taoismo e o budismo chan (e sua versão japonesa, o zen).\n[…]\nComo o Tao Te Ching foi escrito usando a escrita de estilo antigo, o texto é extremamente conciso e não é de interpretação fácil, mesmo para um chinês. O significado de cada monossílabo, no meio de uma série contínua de caracteres sem pontuação, não surge espontaneamente; as frases têm uma estrutura mais difícil de detectar. As palavras que rimam sugerem as frases que estão presentes; mas nem sempre elas estão lá e nem sempre a estrutura fica perfeitamente clara.\n[…]\nChinese Text Project: Daodejing\n[…]\nRainald Simon: Daodejing. Das Buch vom Weg und seiner Wirkung. Neuübersetzung. Reclam, Stuttgart 2009, ISBN 978-3-15-010718-8Rijckenborgh, Jan van (2006). Gnosis Chinesa - Comentários sobre o Tao te King. [S.l.]: Rosacruz (atual Pentagrama Publicações). 978-85-62923-00-5  - Download completo gratuito\n[…]\nLao Tse, Tao-te King, texto e comentário de Richard Wilhelm. Editora Pensamento.\n[…]\nLau, D. C. (1989), Tao Te Ching, ISBN 9789622014671, Hong Kong: Chinese University Press\n[…]\nO Tao Te Ching de Sthephen Mitchel\n[…]\n老子 Lǎozĭ 道德經 Dàodéjīng Chinese + English + German",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "O Livro dos Espíritos",
      "descricao": "Obra publicada em Paris em 1857, base da doutrina espírita"
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Quem publicou em Paris, em 1857, O Livro dos Espíritos, obra que fundou a doutrina espírita?",
    "resposta": "Allan Kardec",
    "fonte": [
      "https://pt.wikipedia.org/wiki/O_Livro_dos_Espíritos",
      "https://en.wikipedia.org/wiki/Allan_Kardec"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/O_Livro_dos_Espíritos",
        "situacao": "ok",
        "texto": "O Livro dos Espíritos (na língua francesa, Le Livre des Esprits) é o primeiro livro da Codificação Espírita publicado por Hippolyte Léon Denizard Rivail sob o pseudônimo de Allan Kardec.\n[…]\nEsta obra contém os princípios do Espiritismo sobre a imortalidade da alma, a natureza dos Espíritos e suas relações com os homens, as Leis Morais, a vida presente, a vida futura e o porvir da humanidade (segundo os ensinamentos dos Espíritos Superiores, através de diversos médiuns, recebidos e ordenados por Allan Kardec). É uma das oito obras fundamentais para o estudo da Doutrina Espírita juntamente com: O Que É o Espiritismo?\n[…]\nApós o primeiro esboço, o método das perguntas e respostas foi submetido à comparação com as comunicações obtidas por outros médiuns franceses, num total de \"mais de dez\", nas palavras de Kardec, cujos textos psicografados contribuíram para a estruturação do texto.\n[…]\nO Livro dos Espíritos é a obra fundadora do Espiritismo. Ele trata dos aspectos científico, filosófico e religioso da doutrina, lançando as bases que seriam posteriormente aprofundadas, por Allan Kardec, nas demais obras da Codificação Espírita. A sua edição definitiva é composta de quatro partes: Livro Primeiro - Causas primeiras; Livro Segundo - Mundo espiritual ou dos Espíritos; Livro Terceiro - Leis morais; Livro Quarto - Esperanças e consolações.\n[…]\nINTRODUÇÃO AO ESTUDO DA DOUTRINA ESPÍRITA\n[…]\nLIVRO SEGUNDO - MUNDO ESPÍRITA OU DOS ESPÍRITOS\n[…]\nV - Livre-Arbítrio\n[…]\nKARDEC, Allan. O Livro dos Espíritos. [Tradução de Evandro Noleto Bezerra]. 4ª Edição. Brasília: FEB, 2016.\n[…]\nKARDEC, Allan. O Livro dos Espíritos. [Tradução de Salvador Gentile com revisão de Elias Barbosa]. 182ª Edição. Araras, SP: IDE, 2009."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Allan_Kardec",
        "situacao": "ok",
        "texto": "Hippolyte Léon Denizard Rivail (French: [ʁivaj]; 3 October 1804 – 31 March 1869), known by the pen name of Allan Kardec ([kaʁdɛk]), was a French educator, translator, and writer. He is the author of the five books known as the Spiritist Codification, and the founder of Spiritism.\n[…]\nRivail wrote under the name \"Allan Kardec\", allegedly following the suggestion of a spirit identified as \"Truth\". On 18 April 1857, as Allan Kardec, Rivail published his first book on Spiritism, The Spirits Book, comprising a series of answered questions (502 in the first edition and 1,019 in later editions) exploring matters concerning the nature of spirits, the spirit world, and the relationship between the spirit world and the material world.\n[…]\nThis was followed by a series of other books, including The Medium's Book, The Gospel According to Spiritism, Heaven and Hell and The Genesis According to Spiritism, and by a periodical, the Revue Spirite, which Kardec published until his death. Collectively, the books became known as the Spiritist Codification.\n[…]\nLe Livre des Esprits (The Spirits Book), 1857\n[…]\nLe Livre des Médiums (The Book on Mediums), 1861\n[…]\nThe Spirits' Book by Allan Kardec (PDF)\n[…]\nThe Book on Mediums by Allan Kardec (PDF)\n[…]\nThe Gospel According to Spiritism by Allan Kardec (PDF)\n[…]\nHeaven and Hell by Allan Kardec (PDF)\n[…]\nGenesis by Allan Kardec (PDF)\n[…]\nAllan Kardec Educational Society\n[…]\nALLAN KARDEC: Free PDF spiritist books in several languages\n[…]\nKardec a 2019 film.\n[…]\nU.S. Spiritist Council\n[…]\nAllan Kardec Biographic Information\n[…]\nThe Spirits' Book Archived 2005-09-06 at the Wayback Machine by Allan Kardec\n[…]\nDivulgacion de Espiritismo en Argentina de Allan Kardec\n[…]\nLibros de Espiritismo de Allan Kardec\n[…]\nWorks by Allan Kardec at Domínio Público\n[…]\nWorks by Allan Kardec at LibriVox (public domain audiobooks)"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Festa de Iemanjá",
      "descricao": "Celebração em homenagem ao orixá Iemanjá no bairro do Rio Vermelho, em Salvador"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que dia do ano acontece a tradicional festa de Iemanjá no bairro do Rio Vermelho, em Salvador?",
    "resposta": "2 de fevereiro",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Iemanjá",
      "https://en.wikipedia.org/wiki/Yemoja"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Iemanjá",
        "situacao": "ok",
        "texto": "Iemanjá (Yemọjá na Nigéria, Yemayá em Cuba ou ainda Dona Janaína no Brasil; ver seção Nome e Epítetos) é o orixá dos ebás, a deusa da fertilidade originalmente associada aos rios e desembocaduras. Seu culto principal estabeleceu-se em Abeocutá após migrações forçadas, tomando como suporte o rio Ogum de onde manifesta-se em qualquer outro corpo de água. Também é reverenciada em partes da América do\n[…]\nNo Brasil, a orixá goza de grande popularidade entre os seguidores de religiões afro-brasileiras e até por membros de religiões distintas. Em Salvador, ocorre anualmente, no dia 2 de fevereiro, a maior festa do país em homenagem à \"Rainha do Mar\". A celebração envolve milhares de pessoas que, trajadas de branco, saem em procissão até o templo mor, localizado no bairro Rio Vermelho, onde depositam variedades de oferendas, tais como espelhos, bijuterias, comidas, perfumes e toda sorte de agrados.\n[…]\nTodavia, na cidade de São Gonçalo, os festejos acontecem no dia 10 de fevereiro.\n[…]\nNo ano de 2008, dia 2 de fevereiro, a Festa de Iemanjá do Rio Vermelho, na Bahia, coincidiu com o carnaval. Os desfiles de trios elétricos foram desviados da região até o fim da tarde, para que as duas festas acontecessem ao mesmo tempo.\n[…]\nPela primeira vez, em 2 de fevereiro de 2010, uma escultura de uma sereia negra, criada pelo artista plástico Washington Santana, foi escolhida para representação de Iemanjá no grande e tradicional presente da festa do Rio Vermelho, em Salvador, na Bahia, no Brasil, em homenagem à África e à religião afrodescendente.\n[…]\nA tradicional Festa de Iemanjá na cidade de Salvador, capital da Bahia, tem lugar na praia do Rio Vermelho todo dia 2 de Fevereiro. Na mesma data, Iemanjá também é cultuada em diversas outras praias brasileiras, onde lhe são ofertadas velas e flores, lançadas ao mar em pequenos barcos artesanais.\n[…]\nFesta de Iemanjá (vídeo)\n[…]\nMais sobre origem e festa de Iemanjá (vídeos)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Yemoja",
        "situacao": "ok",
        "texto": "Yemọja (also: Yemaja, Yemanjá, Yemoyá, Yemayá; there are many different transliterations in other languages) is a major water deity in the Yoruba religion. She is an oriṣa, and the patron spirit of rivers, particularly the Ogun River in Nigeria, and of oceans in Cuban and Brazilian Orisha religions.\n[…]\nIn Salvador, Bahia, Iemanjá is celebrated by Candomblé on the same day consecrated by the Catholic Church to Our Lady of Seafaring (Nossa Senhora dos Navegantes). Every February 2, thousands of people line up at dawn to leave their offerings at her shrine in Rio Vermelho. Gifts for Iemanjá include flowers and objects of female vanity (perfume, jewelry, combs, lipsticks, mirrors). These are gathered in large baskets and taken out to the sea by local fishermen.\n[…]\nIn Pelotas, Rio Grande do Sul State, on February 2, the image of Nossa Senhora dos Navegantes is carried to the port of Pelotas. Before the closing of the Catholic feast, the boats stop and host the Umbanda followers that carry the image of Iemanjá, in a syncretic meeting that is watched by thousand of people on the shore.\n[…]\nIemanjá is also celebrated every December 8 in Salvador, Bahia. The Festa da Conceição da Praia (Feast to Our Lady of Conception of the church at the beach) is a city holiday dedicated to the Catholic saint and also to Iemanjá. Another feast occurs on this day in the Pedra Furada, Monte Serrat in Salvador, Bahia, called the Gift to Iemanjá, when fishermen celebrate their devotion to the Queen of the Ocean.\n[…]\nIn Montevideo, worshippers gather on Ramírez Beach in the Parque Rodó neighborhood every February 2 to celebrate Iemanjá Day. Hundreds of thousands sit waiting for the sunset before they launch small boats with offerings into the ocean.\n[…]\nMedia related to Iemanjá at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Shabat",
      "descricao": "Dia semanal de descanso do judaísmo"
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "O Shabat, o descanso semanal judaico, começa ao pôr do sol de que dia da semana?",
    "resposta": "Sexta-feira",
    "fonte": [
      "https://en.wikipedia.org/wiki/Shabbat"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Shabbat",
        "situacao": "ok",
        "texto": "Shabbat (UK: , US: , or ; Hebrew: שַׁבָּת, [ʃa'bat], lit. 'rest' or 'cessation') or the Sabbath (), also called Shabbos (UK: , US: ) by Ashkenazim, is Judaism's day of rest on the seventh day of the week—i.e., Saturday. On this day, religious Jews remember the biblical stories describing the creation of the heaven and earth in six days and the redemption from slavery and the Exodus from Egypt.\n[…]\nThe Talmud, especially in tractate Shabbat, defines rituals and activities to both \"remember\" and \"keep\" the Sabbath holy and to sanctify it at home and in the synagogue.\n[…]\nIn addition to refraining from creative work, the sanctification of the day through blessings over wine, the preparation of special Sabbath meals, and engaging in prayer and Torah study were required as an active part of Shabbat observance to promote intellectual activity and spiritual regeneration on the day of rest from physical creation. According to many scribes, half of the day should be devoted to Torah study and prayer.\n[…]\nThe Talmud states that the best food should be prepared for the Sabbath, for \"one who delights in the Sabbath is granted their heart's desires\" (BT, Shabbat 118a-b).\n[…]\nKaraite observe Shabbat on Saturday, but interpret Sabbath law differently from Rabbinic Judaism. For example, traditional Karaite practice has often been stricter about fire and electricity than mainstream Rabbinic practice.\n[…]\nSome hold the biblical sabbath was not connected to a seven-day week like the Gregorian calendar. Instead the New Moon marks the starting point for counting and the shabbat falls consistently on the 8th, 15th, 22nd, 29th of each month. Biblical text to support using the moon, a light in the heavens, to determine days include Genesis 1:14, Psalm 104:19, and Sirach 43:6–8  See references:\n[…]\nList of Shabbat topics\n[…]\nJewish prayer § Prayer on Shabbat\n[…]\nChabad.org What is Shabbat?"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Shabat",
        "situacao": "ok",
        "texto": "Shabat (do hebraico שבת, shabāt; shabos ou shabes na pronúncia asquenazita, \"descanso/inatividade\"), também grafado como sabat ou sabá, é o dia de descanso semanal no judaísmo, simbolizando o sétimo dia no Gênesis, após os seis dias da Criação. É observado a partir do pôr-do-sol da sexta-feira até ao pôr-do-sol do sábado. O exato momento de início e final do shabat varia de semana para semana e de\n[…]\nO shabat atualmente é observado tanto por mandamentos positivos, como as três refeições festivas (jantar de sexta-feira, almoço de sábado e refeição de final de tarde no sábado), e restrições. As atividades proibidas no Shabat derivam de 39 ações básicas (melachot, livremente traduzido como \"trabalhos\") que são descritas pelo Talmud a partir de fontes bíblicas.\n[…]\nO Tanakh e o Sidur (livro judaico de orações) descrevem o Shabat como tendo três propósitos:\n[…]\nA tradição judaica acredita que um dia inicia com o pôr-do-sol e termina com o pôr-do-sol seguinte, pelo que o shabat se inicia com o pôr-do-sol da sexta-feira comum e termina com o pôr-do-sol do sábado comum.\n[…]\nEm algumas ocasiões a palavra Shabat refere-se à lei de Shemitá, a feriados judaicos ou a uma semana de dias, dependendo do contexto mas sempre associado a um período de cessação de trabalho.\n[…]\nOs Shabatot especiais são associados com festas judaicas importantes que eles precedem. Por exemplo, Shabat HaGadol, que é o Shabat antes de Pessach, Shabat Zachor que é o Shabat antes de Purim, e Shabat Teshuvá que é o Shabat antes de Yom Kipur.\n[…]\nUm não-judeu que “descansar” no Shabat é passível de pena capital, a não ser que seja peregrino entre os filhos de Israel       (Talmude Babilônico - Sanhedrin 58 b - 59 a). Isso destinava-se a não impedir que os gentios, que servissem os judeus, pudessem executar as tarefas que estavam vedadas aos seus patrões nesse dia feriado.\n[…]\nShabat\n[…]\nFAQ about Shabbatshamash.org\n[…]\nSabbath - Catholic Encyclopedia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Concílio Vaticano II",
      "descricao": "Concílio ecumênico da Igreja Católica realizado no Vaticano entre 1962 e 1965"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Concílio Vaticano Segundo, que permitiu missas na língua local em vez do latim, aconteceu em que década?",
    "resposta": "Anos 1960",
    "distratores": [
      "Anos 1920",
      "Anos 1940",
      "Anos 1980"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Second_Vatican_Council"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Second_Vatican_Council",
        "situacao": "ok",
        "texto": "The Second Ecumenical Council of the Vatican, commonly called the Second Vatican Council or Vatican II, was the twenty-first and most recent ecumenical council of the Catholic Church. It met in four annual sessions in St. Peter's Basilica in Vatican City between 11 October 1962 and 8 December 1965, spanning the pontificates of Pope John XXIII, who convoked it, and Pope Paul VI, who presided over i\n[…]\nFormal preparation took nearly three years. An antepreparatory commission, appointed in May 1959, surveyed bishops, universities, and Curial departments for topics the council might address; in June 1960 this gave way to ten preparatory commissions, most of them attached to a department of the Roman Curia and chaired by its head, which drafted the texts, or schemas, that would form the basis of debate.\n[…]\nThe changes ordinary Catholics actually experienced in the pews were only loosely dictated by the council's own text. Sacrosanctum Concilium permitted, but did not require, the vernacular, and said nothing at all about the priest facing the congregation, about standing rather than kneeling to receive Communion, or about removing altar rails; each of these became widespread only through implementing decisions taken in the two years after the constitution was approved.\n[…]\nThe council's effects have been grouped into three broad categories:\n[…]\nThe phrase \"spirit of Vatican II\" describes readings of the council that emphasise its broader aims over the literal wording of its texts. The phrase has been invoked to support positions well beyond anything the council's documents actually state, which has made it a target for critics who argue that appeals to the council's \"spirit\" have sometimes served to license changes the bishops never approved.\n[…]\nPreconciliar rites after the Second Vatican Council\n[…]\nHermeneutics of the Second Vatican Council\n[…]\nDocuments of the Second Vatican Council at Vatican.va"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Conc%C3%ADlio_Vaticano_II",
        "situacao": "ok",
        "texto": "O Segundo Concílio Ecumênico do Vaticano, comumente conhecido como Concílio Vaticano II ou Vaticano II, foi o 21º e mais recente concílio ecumênico da Igreja Católica. O concílio se reuniu a cada outono de 1962 a 1965 na Basílica de São Pedro, na Cidade do Vaticano, para sessões de 8 e 12 semanas.\n[…]\nEsta sua intenção foi anunciada por ele no dia 25 de janeiro de 1959, causando uma grande surpresa dentro da Cúria Romana e até dentro da Igreja Católica. Em junho de 1960, através do motu proprio Superno Dei nutu, teve oficialmente início a preparação do Concílio. Passado apenas um ano, no Natal de 1961, João XXIII convocou oficialmente o Concílio para o ano seguinte (1962), através da bula papal \"Humanae salutis\".\n[…]\nSegundo o Papa Bento XVI, depois das Sagradas Escrituras, o Papa Pio XII é o autor ou fonte autorizada mais citada nos documentos do Concílio Vaticano II. Bento XVI considera que não é possível entender o Concílio Vaticano II sem levar em conta o magistério de Pio XII. (…) A herança do magistério de Pio XII foi recolhida pelo Concílio Vaticano II e proposta às gerações cristãs posteriores.\n[…]\nNão existe nenhuma diferenciação oficial dos pensamentos dos católicos em relação ao Segundo Concílio do Vaticano, mas a dividiremos em 3 grupos:\n[…]\nConcílio Vaticano I\n[…]\nConcílio de Trento\n[…]\nO Concílio Vaticano II, Câmara Clara, por Inês Fonseca Santos, RTP, 2012\n[…]\nA história do Concílio Vaticano II, Os Dias da História, por Paulo Sousa Pinto, Antena 2, 2017\n[…]\nLigações favoráveis ao Concílio Vaticano II\n[…]\n«João XXIII e o Concílio Vaticano II - A12»\n[…]\n«O verdadeiro espírito do Concílio Vaticano II (padrepauloricardo.org)»\n[…]\nLigações contra o Concílio Vaticano II\n[…]\n«El quiebre doctrinal del Concilio Vaticano II»  - Ciclo de áudio-conferências por padres da Fraternidade São Pio X, áudio em espanhol.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Pilares do Islã",
      "descricao": "Conjunto dos deveres básicos de todo muçulmano, como a oração, o jejum e a peregrinação"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantos são os pilares do islã, os deveres básicos de todo muçulmano, como a oração e o jejum?",
    "resposta": "Cinco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Five_Pillars_of_Islam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Five_Pillars_of_Islam",
        "situacao": "ok",
        "texto": "The Five Pillars of Islam (arkān al-Islām أركان الإسلام; also arkān ad-dīn أركان الدين \"pillars of the religion\") are fundamental practices in Islam, considered to be obligatory acts of worship for all Muslims. They form the foundation of Islamic religious practice and consist of the shahada (profession of faith), salah (prayer), zakat (almsgiving), sawm (fasting during Ramadan), and hajj (pilgrim\n[…]\nAlthough the Five Pillars are particularly emphasized in Sunni Islam, Shia Muslims also recognize these practices as fundamental to Islam, while their classification and detailed formulation may differ.\n[…]\nThe Second Pillar of Sunni Islam is Salah, or prayer. Before a prayer is observed, ablutions are performed including washing one's hands, face and feet. A caller (Muezzin in Arabic) chants aloud from a raised place in the mosque. Verses from the Quran are recited either loudly or silently. These prayers are a very specific type of prayer and a very physical type of prayer called prostrations. These prayers are done five times a day, at set strict times, with the individual facing Mecca.\n[…]\nTwelver Shia Islam has five Usul al-Din and ten Furu al-Din, i.e., the Shia Islamic beliefs and practices. The Twelver Shia Islam Usul al-Din, equivalent to a Shia Five Pillars, are all beliefs considered foundational to Islam, and thus classified a bit differently from those listed above. They are:\n[…]\nHowever, the difference in practice of these traditions are accepted in Islam of the Five Pillars, but this does not mean they have all existed since the life of Muhammad. The evidence of differences shows pillars have not always been consistent to what they are today, so it has taken many years for the Pillars to get to their current and classic form.\n[…]\nSixth Pillar of Islam\n[…]\nTenets of Islam\n[…]\nPillars of Islam in Oxford Islamic Studies Online\n[…]\nPillars of Islam. A brief description of the Five Pillars of Islam."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cinco_pilares_do_islamismo",
        "situacao": "ok",
        "texto": "Os cinco pilares do Islamismo (em árabe: أركان الإسلام) são os cinco principais atos exigidos  do Islamismo, sendo que este termo não é usado no islamismo xiita.\n[…]\nOs cinco pilares são:\n[…]\nOração — orar cinco vezes ao longo do dia, com o fiel voltado  em direção a Meca (Salá, Salat ou Salah);\n[…]\nJejum — observar as obrigações do Ramadã/Ramadão (em árabe: رَمَضَان), o nono mês do calendário islâmico, no qual a maioria dos muçulmanos pratica o seu jejum ritual (saum, صَوْم), o segundo dos cinco pilares do Islão (arkan al-Islam)) que para os muçulmanos é o Jejum (privação de comidas, bebidas, relações sexuais e outras privações).\n[…]\nOs muçulmanos devem realizar cinco orações diárias:\n[…]\nOs muçulmanos podem realizar estas orações em qualquer local, desde que este seja um local limpo. É obrigatório virar-se no sentido da cidade de Meca para realizar as orações.\n[…]\nAntes da oração, os muçulmanos preparam-se através de abluções, realizadas com água (ou com areia caso não exista água).\n[…]\nDurante o mês do Ramadã, os muçulmanos abstêm-se de comida, de bebida, de fumar, de relações sexuais ou de pensamentos negativos durante o período que decorre entre o amanhecer até ao pôr-do-sol. As pessoas idosas, os doentes e as mulheres grávidas estão dispensadas deste jejum, mas devem realizá-lo em outra altura ou então alimentar pobres durante um período de dias correspondente aos dias que faltaram ao jejum. As crianças também não realizam o jejum.\n[…]\nA primeira vez que um muçulmano realiza o jejum funciona como uma espécie de ritual de entrada na vida adulta comparável ao B'nai Mitzvá no judaísmo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Japamala",
      "descricao": "Cordão de contas usado para contar orações e mantras no hinduísmo e no budismo"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas contas tem tradicionalmente o japamala, o cordão de orações do hinduísmo e do budismo?",
    "resposta": "108",
    "distratores": [
      "99",
      "72",
      "150"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Japamala"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japamala",
        "situacao": "ok",
        "texto": "A japamala, jaap maala, or simply mala (Sanskrit: माला; mālā, meaning 'garland') is a loop of prayer beads commonly used in Indian religions such as Hinduism, Buddhism, Jainism and Sikhism. It is used for counting recitations (japa) of mantras, prayers or other sacred phrases. It is also worn to ward off evil, to count repetitions within some other form of sadhana (spiritual practice) such as pros\n[…]\nThe main body of a mala usually consists of 108 beads of roughly the same size and material as each other, although smaller versions, often factors of 108 such as 54 or 27, exist. A distinctive 109th \"guru bead\" or mother bead, which is not counted, is very common.\n[…]\nThe Japanese Zen schools use long 108 bead nenjus without counter / recorder bead strands.\n[…]\nSmaller malas are also known, most commonly with a factor of 108 beads or another number significant to a sect's beliefs and practices, such as 54, 42, 27, 21, 18 and 14. A smaller mala may be worn on the wrist or used to more conveniently keep count of prostrations. The 54, whether in a 54 bead mala or the first 54 beads in a full 108 bead mala, is often interpreted as signifying the first 54 stages of the bodhisattva path (as understood in East Asian Buddhism).\n[…]\nTo aid this, some Buddhist malas can be made with additional functional beads over and above the 108 main beads. These beads take two main forms serving two different purposes: three marker beads inline with the 108 beads; two short cords of ten beads each hanging from the main loop which are used as counters.\n[…]\nAfter a single round of chanting, the user will slide up one bead on the cord with the dorje which represents 108 (or 111) recitations. After ten rounds all ten dorje beads have been moved up, one bead on the bell cord is raised representing 1080 (or 1110) recitations and the dorje beads are all reset to their low position."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Japamala",
        "situacao": "ok",
        "texto": "Japamala (japamālā, जपमाला) é um cordão sagrado feito de contas, usado para ajudar o praticante de meditação a entrar no estado meditativo, muito usada como um objeto consagrado pelas religiões orientais, principalmente pelo budismo e pelo hinduísmo. O termo Japamala tem origem no sânscrito e é uma palavra composta, formada por duas outras. Uma delas é o “japa” que nada mais é que o ato murmurar m\n[…]\nNo yoga e no hinduísmo, possui em geral 108 contas ou divisores (54 ou 27). Em algumas linhas do budismo, possui ainda 3 marcadores, totalizando 111 contas. O nome japamala é masculino (\"o\" japamala), tem origem no sânscrito e é uma palavra composta: japa é o ato de sussurrar ou murmurar repetidamente mantras ou nomes de divindades e mālā significa guirlanda, grinalda ou coroa.\n[…]\nUm japamala é geralmente composto por 108 contas e o “meru”, conta central que marca o início e o fim do mala. Também é possível encontrar japamalas menores, variando de 27 ou 54 contas, todas subdivisões de 108. Segundo a filosofia yogui, ao se completar o circuito de 108 repetições da oração, mentalização ou mantra, alcança-se um estágio superior na consciência chamado de transcendental (o estágio que ultrapassa as fixações da mente, mantendo a consciência concentrada em si mesma).\n[…]\nO meru não deve ser contado como as demais 108 contas, porque é a representação de Brahman, do absoluto, de nosso aspecto eterno e imutável e por isso está fora da roda do samsara, entretanto é o meru que marca o início e o final do ciclo do japamala. Terminando a passagem pelas 108 contas, caso o praticante queira continuar e fazer mais uma volta, não deve passar por cima do meru; em vez disso, deve virar o cordão e continuar a fazer o japa na direção inversa.\n[…]\nSe você já tiver algum mantra que goste, repita-o enquanto estiver energizando o seu Japamala.\n[…]\n12Japmala,108 contas,27 contas,33 contas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Bar mitzvá",
      "descricao": "Rito judaico de maioridade religiosa dos meninos"
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Pela tradição judaica, com que idade o menino celebra o bar mitzvá e passa a responder pelos mandamentos?",
    "resposta": "Treze anos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bar_and_bat_mitzvah",
        "situacao": "ok",
        "texto": "A bar mitzvah (masculine) or bat mitzvah (feminine) is a coming of age ritual in Judaism. According to Jewish law, before children reach a certain age, the parents are responsible for their child's actions. Once Jewish children reach that age, they are said to \"become\" b'nai mitzvah, at which point they begin to be held accountable for their own actions. Traditionally, the father of a bar or bat m\n[…]\nIn 1979, the Responsa Committee of the Central Conference of American Rabbis addressed the Reform attitude toward bat/bar mitzvah: \"Every effort should be exerted to maintain the family festivities in the religious mood at the bar/bat mitzvah. Some of the efforts of early Reform in favor of confirmation [and] against bar mitzvah were prompted by the extravagant celebration of bar mitzvah, which had removed its primary religious significance.\n[…]\nBar or bat mitzvah celebrations have become an occasion to give the celebrant a commemorative gift. Traditionally, common gifts include books with religious or educational value, religious items, writing implements, savings bonds (to be used for the child's college education), gift certificates, or money. Gifts of cash have become commonplace in recent times.\n[…]\nJewelry is a common gift for girls at a bat mitzvah celebration. Among jewelry gifts, a Star of David (Magen David) necklace is a classic choice, combining a lasting keepsake with one of the most widely recognized symbols of Jewish identity and Judaism. Another gift for the bat mitzvah girl is Shabbat candlesticks because it is the duty and honor of the woman to light the candles.\n[…]\nKaplan, Zvi, and Norma Baumel Joseph. \"Bar Mitzvah, Bat Mitzvah\". Encyclopaedia Judaica. Ed. Michael Berenbaum and Fred Skolnik. 2nd ed. Vol. 3. Detroit: Macmillan Reference, 2007. pp. 164–167. Gale Virtual Reference Library.\n[…]\nChabad's Becoming a Bat Mitzvah\n[…]\nMy Jewish Learning – History of Bat Mitzvah"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bar_Mitzv%C3%A1",
        "situacao": "ok",
        "texto": "Bar Mitzvá (“filho do mandamento” ou “filho da lei”) é a cerimônia que insere o jovem judeu como um membro maduro na comunidade judaica. Iniciado como uma cerimônia folclórica, agora é parte universal do judaísmo oficial, tendo acabado como parte da lei escrita.\n[…]\nQuando um judeu atinge a sua maturidade (aos 12 anos de idade para as meninas, 13 anos de idade para os meninos), passa a se tornar responsável pelos seus atos, de acordo com a lei judaica. Nessa altura, diz-se que o menino passa a ser Bar Mitzvah ( בר מצוה , \"filho do mandamento\"); e a menina passa a ser Bat Mitzvá (בת מצוה, \"filha do mandamento\") que comemora a cerimônia ao completar 12 anos e 2 dias.\n[…]\nAntes desta idade, são os pais os responsáveis pelos atos dos filhos. Depois desta idade, os rapazes e moças podem finalmente participar em todas as áreas da vida da comunidade e assumir a sua responsabilidade na lei ritual judaica, tradição e ética. Segundo o Talmud (Avot 5:1; BT Yoma 82a; BT Baba Metziah 96a), aos 13 anos e 1 dia de idade um judeu se torna obrigado a obedecer mandamentos.\n[…]\nA ocasião mais importante na vida de um judeu chega quando ele atinge a idade para entrar na aliança com Deus e no compromisso de manter, estudar e praticar todos os mandamentos da Torá, aos treze anos de idade.\n[…]\nA prática mais comum é que no primeiro Sábado ao fazer treze anos, o menino é chamado para ler a porção semanal da Lei (cinco livros de Moisés), bem como a Haftará (seleção do livro dos Profetas). Se por algum motivo, ele não for capaz de ler, pelo menos realizar as bênçãos ditas antes e depois de cada leitura. É muito comum realizar o serviço durante um dia da semana antes do Sábado para que o menino coloque o Tefilin pela primeira vez.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Trimúrti",
      "descricao": "Tríade de deuses principais do hinduísmo, ligados à criação, à preservação e à destruição"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Trimúrti do hinduísmo reúne Brahma, o criador, Vixnu, o preservador, e que deus destruidor?",
    "resposta": "Shiva",
    "fonte": [
      "https://en.wikipedia.org/wiki/Trimurti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Trimurti",
        "situacao": "ok",
        "texto": "The Trimurti is the triple deity of supreme divinity in Hinduism, in which the cosmic functions of creation, preservation, and destruction are personified as a triad of deities. Typically, the designations are that of Brahma the creator, Vishnu the preserver, and Shiva the destroyer.\n[…]\nThe following is a well-known section from the Vishnu Purana (1:2:66) that mentions Brahma, Vishnu, and Shiva together in a single verse, highlighting their roles within the cosmic functions of creation, preservation, and destruction:\n[…]\nTranslation: In this way, the one supreme entity divides itself into three forms—Brahma, Vishnu, and Mahesh (Shiva)—taking on different aspects. It creates, preserves, and destroys the universe in various ages.\n[…]\nThe word ‘trimurti’ means ‘three forms’. In the trimurti, Brahma is the creator, Vishnu is the preserver and Shiva is the destroyer.\n[…]\nThus, Brahma, Vishnu and Rudra are not deities different from Shiva, but rather are forms of Shiva. As Brahma/Sadyojata, Shiva creates. As Vishnu/Vamadeva, Shiva preserves. As Rudra/Aghora, he dissolves. This stands in contrast to the idea that Shiva is the \"God of destruction.\" Shiva is the supreme God and performs all actions, of which destruction is only but one. Ergo, the Trimurti is a form of Shiva Himself for Shaivas.\n[…]\nThe female-centric Shaktidharma denomination assigns the eminent roles of the three forms (Trimurti) of Supreme Divinity not to masculine gods but instead to feminine goddesses: Mahasarasvati (Creatrix), Mahalaxmi (Preservatrix), and Mahakali (Destructrix). This feminine version of the Trimurti is called Tridevi (\"three goddesses\"). The masculine gods (Brahma, Vishnu, Shiva) are then relegated as auxiliary agents of the supreme feminine Tridevi.\n[…]\nMedia related to Trimurti at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Trim%C3%BArti",
        "situacao": "ok",
        "texto": "A Trimurti é a divindade tripla da divindade suprema no Hinduísmo, na qual as funções cósmicas de criação, preservação e destruição são personificadas como uma tríade de divindades. Tipicamente, as designações são de Brama o criador, Vixnu o preservador, e Xiva o destruidor.\n[…]\nO símbolo Om do Hinduísmo é considerado como tendo uma alusão à Trimurti, onde os fonemas A, U e M da palavra são considerados para indicar criação, preservação e destruição, somando-se para representar Brâman. A Tridevi é a trindade das consortes deusas da Trimurti.\n[…]\ntrayaṁ brahma-mahā-viṣṇu-māheśvara-iti smṛtam ||Tradução: \"Desta forma, a única entidade suprema divide-se em três formas—Brama, Vixnu e Mahesh (Xiva)—assumindo diferentes aspectos. Ela cria, preserva e destrói o universo em várias eras.\"\n[…]\nA palavra 'trimurti' significa 'três formas'. Na trimurti, Brama é o criador, Vixnu é o preservador e Xiva é o destruidor.\n[…]\nAssim, Brama, Vixnu e Rudra não são divindades diferentes de Xiva, mas sim formas de Xiva. Como Brama/Sadyojata, Xiva cria. Como Vixnu/Vamadeva, Xiva preserva. Como Rudra/Aghora, ele dissolve. Isto contrasta com a ideia de que Xiva é o \"Deus da destruição\". Xiva é o Deus supremo e realiza todas as ações, das quais a destruição é apenas uma. Portanto, a Trimurti é uma forma do próprio Xiva para os Xivaítas.\n[…]\nA denominação Shaktidharma centrada no feminino atribui os papéis eminentes das três formas (Trimurti) da Divindade Suprema não aos deuses masculinos, mas sim às deusas femininas: Mahasarasvati (Criadora), Mahalaxmi (Preservadora) e Mahakali (Destruidora). Esta versão feminina da Trimurti é chamada Tridevi (\"três deusas\"). Os deuses masculinos (Brama, Vixnu, Xiva) são então relegados como agentes auxiliares da suprema Tridevi feminina.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Tanach",
      "descricao": "Conjunto das escrituras sagradas do judaísmo, a Bíblia hebraica"
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Bíblia hebraica, chamada Tanach, se divide em Torá, Profetas e que terceira parte?",
    "resposta": "Escritos",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hebrew_Bible"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hebrew_Bible",
        "situacao": "ok",
        "texto": "The Hebrew Bible, Jewish Bible, or Tanakh (US: , UK:  or ; Hebrew: תַּנַ״ךְ, romanized: tanaḵ; תָּנָ״ךְ, tānāḵ; or תְּנַ״ךְ, tənaḵ), also known in Hebrew as Miqra (; מִקְרָא, miqrāʾ), is the canonical collection of Hebrew scriptures, comprising the Torah (lit. 'Teaching'  or 'Instruction'; the five books of Moses), the Nevi'im (lit. 'Prophets'), and the Ketuvim (lit. 'Writings').\n[…]\nTanach: The Stone Edition, Hebrew with English translation, Mesorah Publications, 1996, ISBN 0-89906-269-5, named after benefactor Irving I. Stone.\n[…]\nTanakh Ram, an ongoing translation to Modern Hebrew (2010–) by Avraham Ahuvya (RAM Publishing House Ltd. and Miskal Ltd.)\n[…]\nThe Koren Jerusalem Bible is a Hebrew/English Tanakh by Koren Publishers Jerusalem and was the first Bible published in modern Israel in 1962\n[…]\nacademic world, e.g. the Da'at Miqra series. Non-Orthodox Jews, including those affiliated with Conservative Judaism and Reform Judaism, accept both traditional and secular approaches to Bible studies. \"Jewish commentaries on the Bible\", discusses Jewish Tanakh commentaries from the Targums to classical rabbinic literature, the midrash literature, the classical medieval commentators, and modern-day commentaries.\n[…]\n929: Tanakh B'yachad\n[…]\nNew Jewish Publication Society of America Tanakh\n[…]\nJudaica Press Translation of Tanakh with Rashi's commentary Free online translation of Tanakh and Rashi's entire commentary\n[…]\nTanakh Hebrew Bible Project—An online project that aims to present critical text of the Hebrew Bible with important ancient versions (Samaritan Pentateuch, Masoretic Text, Targum Onkelos, Samaritan Targum, Septuagint, Peshitta, Aquila of Sinope, Symmachus, Theodotion, Vetus Latina, and Vulgate) in parallel with new English translation for each version, plus a comprehensive critical apparatus and a textual commentary for every verse."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/B%C3%ADblia_hebraica",
        "situacao": "ok",
        "texto": "O Tanakh (em hebraico:  תַּנַ\"ךְ; ([tɑːˈnɑːx], pronunciado [taˈnaχ] ou [təˈnax];), também conhecido como Bíblia Hebraica, é uma antologia de textos considerados sagrados para os judeus. É composto por 24 livros, divididos em três seções - Torá, Nevi'im e Ketuvim - e constitui a base do Antigo Testamento.\n[…]\nA Torá é composta pelos livros de Gênesis, Êxodo, Levítico, Números e Deuteronômio, que segundo a tradição foram escritos por Moisés, narram as origens da humanidade e do povo hebreu e apresentam a lei mosaica. O Nevi'im é composto pelos livros de Josué, Juízes, Samuel, Reis, Isaías, Jeremias, Ezequiel e os profetas menores, que contam a história dos reinos de Israel e Judá.\n[…]\nTn\"k é o acrônimo formado a partir das três primeiras letras das divisões tradicionais do texto massorético: Torá, Nevi'im e Ketuvim (Instrução, Profetas e Escritos) — que resulta em TaNaK. O Tanakh é passado de geração em geração na forma escrita, conforme a tradição rabínica de transmitir a totalidade apenas de boca a boca e face a face, essa tradição ficou conhecida como a Torá oral, que foi compilada nos Targumim, no Talmude, em diversos midrashim e em outros escritos rabínicos.\n[…]\nO Talmude diverge sobre quem compilou o Tanakh. Em alguns trechos diz que a maior parte do Tanakh foi compilado pelos homens da Grande assembleia  — suposta linhagem de sábios entre Esdras e o período rabínico  —  e que a tarefa foi concluída em 450 a.C. e desde então permanece inalterada. Outras partes do Talmude dizem que Esdras reescreveu o Tanakh por completo, trocando a escrita fenícia ou paleo-hebraica para a assíria.\n[…]\nVárias edições impressas da Tanakh foram compostas ao longo dos anos, porém algumas se destacam pela sua importância nos estudos das Escrituras judaicas, geralmente referidas como Biblia Hebraica (em latim):",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Monte Athos",
      "descricao": "Península do norte da Grécia ocupada por uma comunidade de mosteiros ortodoxos"
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "O Monte Athos, na Grécia, reúne mosteiros ortodoxos e há séculos proíbe a entrada de quem?",
    "resposta": "Mulheres",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mount_Athos"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mount_Athos",
        "situacao": "ok",
        "texto": "Mount Athos is a mountain on the Athos peninsula in northeastern Greece directly on the Aegean Sea. It is an important center of Eastern Orthodox monasticism.\n[…]\nSome languages of Orthodox tradition use names that translate to 'Holy Mountain', including Bulgarian, Macedonian and Serbian (Света Гора, Sveta Gora), and Georgian (მთაწმინდა, mtats'minda). However, not all languages spoken in the Eastern Orthodox world use this name: in the East Slavic languages (Russian, Ukrainian, and Belarusian) it is simply called Афон (Afon, meaning 'Athos'), while in Romanian it is called 'Mount Athos' (Muntele Athos or Muntele Atos).\n[…]\nMount Athos is also home to 350 species of mushrooms.\n[…]\nThe biography of Saint Athanasius the Athonite describes the foundation of the first monastic community on Mount Athos.\n[…]\nDuring the 19th century the monastic population increased and the peninsula experienced a revival, supported by donations from Orthodox countries such as Russia, Serbia, and Romania. In the 20th century Mount Athos was incorporated into the modern Greek state while maintaining its special autonomous status as a monastic community within Greece.\n[…]\nToday Mount Athos remains an important center of Eastern Orthodox monasticism and is recognized as a UNESCO World Heritage Site.\n[…]\nAccess to Mount Athos is restricted and requires a special permit known as a diamonitirion. Entry is limited to male visitors and regulated by the monastic authorities in cooperation with the Greek state. Visitors typically arrive by boat from Ouranoupoli, which serves as the main gateway to the monastic community.\n[…]\n\"Athos\" . Encyclopædia Britannica. Vol. III (9th ed.). 1878. p. 14."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Monte_Atos",
        "situacao": "ok",
        "texto": "O Monte Atos (em grego  Όρος Άθως) é uma montanha e península na Grécia. É patrimônio mundial da UNESCO, constituindo-se também como entidade política autônoma da República Helênica, governada por um Conselho Teocrático da Igreja Ortodoxa Grega. Na atualidade, os gregos usam a expressão \"Montanha Sagrada\" (em grego Άγιον Όρος) para se referir ao Monte Atos.\n[…]\nO Monte Atos abriga vinte mosteiros greco-ortodoxos sob direta jurisdição do patriarca de Constantinopla.\n[…]\nO nome oficial da entidade política é Estado Monástico Autónomo da Montanha Sagrada (em grego Αυτόνομη Μοναστική Πολιτεία Αγίου Όρους). Esta Região, Província ou Território Dependente da Grécia possui 1118 habitantes, aproximadamente.\n[…]\nO monte está situado na península da Calcídica, a 100 km a sudeste da cidade de Tessalónica e é habitado por cerca de 1500 monges ortodoxos distribuídos em vinte mosteiros principais. Cada um destes mosteiros elege seu próprio superior e os representantes para a Santa Assembleia, que exerce o poder legislativo em todo Monte Atos.\n[…]\nO decreto declarou que a Comunidade Sagrada reconhecia os reis da Grécia como soberanos legais e \"sucessores no monte\" dos  \"Imperadores que construíram\" os mosteiros e declarou seu território como pertencente ao então Reino da Grécia.\n[…]\nA instabilidade política na Grécia, em meados do século XX que afetou o Monte Atos incluiu a  ocupação nazista da época da Páscoa de 1941 até o final de 1944, seguida imediatamente pela Guerra Civil Grega em uma luta onde os esforços comunistas falharam. A Batalha da Grécia foi relatada na revista  Time : \"Os Stukas voaram pelos céus do Egeu como pássaros escuros e terríveis, mas não lançaram bombas sobre os monges do Monte Atos\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Maria, mãe de Jesus",
      "descricao": "Mãe de Jesus, venerada no cristianismo e no islã"
    },
    "angulo": "comparacao",
    "tipo": "aberta",
    "pergunta": "Que personagem bíblica é a única mulher chamada pelo nome em todo o Alcorão?",
    "resposta": "Maria, mãe de Jesus",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mary_in_Islam"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mary_in_Islam",
        "situacao": "ok",
        "texto": "Maryam bint Imran (Arabic: مريم بنت عمران, lit. 'Mary, daughter of Imran') holds a singularly exalted place in Islam. The Quran refers to her seventy times and explicitly identifies her as the greatest woman to have ever lived. Moreover, she is the only woman referenced by name in the Quran. In the Quran, her story is related in three Meccan surahs (19, 21, 23) and four Medinan surahs (3, 4, 5, 66\n[…]\nDawood, in a note to Quran 19:28, where Mary is referred to as the \"Sister of Aaron\", and Aaron was the brother of Miriam, states: \"It appears that Miriam, Aaron's sister, and Maryam (Mary), mother of Jesus, were according to the Koran, one and the same person.\" In the 21st century this view remains common in Islamic studies, for example in Gabriel Said Reynolds' work.\n[…]\nThe words \"sister\" and \"daughter\", like their male counterparts, in Arabic usage can indicate extended kinship, descendance or spiritual affinity. Muslim tradition is clear that there are eighteen centuries between the Biblical Amram and the father of Maryam. Similarly, Stowasser concludes that \"to confuse Mary the mother of Jesus with Mary the sister of Moses and Aaron in the Torah is completely wrong and in contradiction to the sound Hadith and the Quranic text as we have established\".\n[…]\nThe Quran narrates the virgin birth of Jesus numerous times. In Surah Maryam, verses (ayat) 17–21, the annunciation is given, followed by the virgin birth in due course. In Islam, Jesus is called the \"spirit of God\" because he was through the action of the spirit, but that belief does not include the doctrine of his pre-existence, as it does in Christianity. Quran 3:47 also supports the virginity of Mary, revealing that \"no man has touched [her]\".\n[…]\n66:12 states that Jesus was born when the spirit of God breathed upon Mary, whose body was chaste.\n[…]\nMaryam (surah)\n[…]\nBiblical narratives and the Qur'an\n[…]\nJesus in Islam"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mari%C3%A3",
        "situacao": "ok",
        "texto": "Mariã (em árabe: مريم; romaniz.: Mariam‬) é a mãe de Issa - Jesus no Alcorão e na tradição muçulmana. Mariam corresponde à forma aramaica do nome \"Maria\", enquanto \"Miriam\" é a forma em hebraico.\n[…]\nO Alcorão descreve-a como virgem, da mesma forma que o Novo Testamento, pelo que é igualmente honrada no contexto do Islão. Tanto o islamismo como o cristianismo professam a concepção virginal de Jesus/Isa no seu ventre. Miriam é a única mulher que o Alcorão menciona pelo próprio nome, dando também o nome à 19.ª sura do Alcorão. Ainda que a sua importância seja maior para o cristianismo, o Alcorão cita mais vezes o seu nome do que o Novo Testamento.\n[…]\nO Alcorão refere que Mariã é filha de Anrão (Joaquim), ao longo da terceira sura (\"a família de Anrão\"). Anrão é considerado pelos muçulmanos um dos homens virtuosos presentes em Jerusalém na época. A mulher de Anrão, mãe de Mariã, é conhecida pelo nome de Hana, o equivalente árabe de Ana, filha de Fancude.",
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
