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
      "nome": "Alfabeto cirílico",
      "descricao": "Sistema de escrita usado no russo, búlgaro, sérvio e outras línguas, criado no Primeiro Império Búlgaro no século nove."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O alfabeto usado no russo e no búlgaro tem o nome de qual missionário bizantino do século nove?",
    "resposta": "São Cirilo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Cyrillic_script"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cyrillic_script",
        "situacao": "ok",
        "texto": "The Cyrillic script (  sih-RIL-ik) is a writing system used for various languages across Eurasia. It is the designated national script in various Slavic, Turkic, Mongolic, Uralic, Caucasian and Iranic-speaking countries in Southeastern Europe, Eastern Europe, the Caucasus, Central Asia, North Asia, and East Asia, and used by many other minority languages.\n[…]\nThe Cyrillic script was created during the First Bulgarian Empire. Modern scholars believe that the Early Cyrillic alphabet was created at the Preslav Literary School, the most important early literary and cultural center of the First Bulgarian Empire and of all Slavs:\n[…]\nA number of prominent Bulgarian writers and scholars worked at the school, including Naum of Preslav until 893; Constantine of Preslav; Joan Ekzarh (also transcr. John the Exarch); and Chernorizets Hrabar, among others. The school was also a center of translation, mostly of Byzantine authors. The Cyrillic script is derived from the Greek uncial script letters, augmented by ligatures and consonants from the older Glagolitic alphabet for sounds not found in Greek.\n[…]\nGlagolitic and Cyrillic were formalized by the Byzantine Saints Cyril and Methodius and their Bulgarian disciples, such as Saints Naum, Clement, Angelar, and Sava. They spread and taught Christianity in the whole of Bulgaria. Paul Cubberley posits that although Cyril may have codified and expanded Glagolitic, it was his students in the First Bulgarian Empire under Tsar Simeon the Great that developed Cyrillic from the Greek letters in the 890s as a more suitable script for church books.\n[…]\nVarious informal romanizations of Cyrillic, which adapt the Cyrillic script to Latin and sometimes Greek glyphs for compatibility with small character sets.\n[…]\nCyrillic script in Unicode\n[…]\nCyrillic and its Long Journey East – NamepediA Blog, article about the Cyrillic script"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_cir%C3%ADlico",
        "situacao": "ok",
        "texto": "O alfabeto cirílico, também conhecido como azbuka, é um alfabeto cujas variantes são utilizadas para a grafia de seis línguas nacionais eslavas (bielorrusso, búlgaro, macedônio, russo, sérvio e  ucraniano), além do ruteno e outras línguas extintas. Para além disso, é usado por várias línguas não eslavas faladas na antiga União Soviética, como o mongol, o cazaque, o usbeque, o quirguiz e o tajique,\n[…]\nA história tradicional conta que o alfabeto cirílico, bem como o alfabeto glagolítico, foi criado ou formalizado por dois missionários cristãos bizantinos, São Cirilo e São Metódio, no século IX, com o objetivo de transcrever a Bíblia para as línguas eslavas. A ideia, entretanto, é objeto de disputa acadêmica.\n[…]\nPaul Cubberly sugere que Cirilo pode ter codificado e expandido o alfabeto glagolítico, mas teriam sido seus estudantes da Escola Literária de Preslava, notadamente Constantino de Preslava, que adaptaram o cirílico a partir do grego uncial, como um sistema de escrita mais adequado para os textos eclesiásticos. Atribui-se ainda a criação e/ou difusão a membros da Escola Literária de Ocrida, em especial a Clemente de Ocrida.\n[…]\nO que parece certo é que o alfabeto cirílico, nomeado em homenagem a Cirilo, o Filósofo, foi desenvolvido e difundido durante o Primeiro Império Búlgaro, razão pela qual alguns defendem que o cirílico seja chamado de alfabeto búlgaro. A maior parte de suas letras teria derivado do alfabeto grego na escrita uncial, complementado para os sons não encontrados no grego com letras do alfabeto glagolítico, que teriam derivado, por sua vez, da escrita hebraica.\n[…]\nO alfabeto búlgaro é igual ao russo, exceto pela ausência das letras Ё, Ы e Э. O alfabeto bielorrusso troca И por І, não possui Ъ mas tem Ў e o apóstrofo (’). O alfabeto ucraniano não possui Ъ, Ы, ё, Э mas preservou І, Ї, Є e a forma com diacrítico Ґ.\n[…]\nCirílico Estendido B U+A640–U+A69F",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Suaíli",
      "descricao": "Língua banta falada na África Oriental, usada como língua franca na Tanzânia, no Quênia e em países vizinhos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do suaíli, língua da África Oriental, deriva de uma palavra árabe. A que parte da terra essa palavra se refere?",
    "resposta": "Às costas, o litoral",
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nIn order to strengthen political ties with other East African Community nations, both Kiswahili and English have been taught in Burundian elementary schools since the academic year 2005/2006. Kiswahili is now used widely in Burundi but is not recognised as an official language; only French, Kirundi, and English have this distinction. Since 2013, Swahili has been included in the all Burundian education system.\n[…]\nIn 2024, Somalia joined the East African Community and its inclusion may facilitate the spread of the Swahili language in Somalia. Nevertheless, in Somalia, Swahili, as a foreign language, will have to compete with English, the primary global lingua franca, and Arabic, the official second language of Somalia and a liturgical language for Muslims, as popular secondary or tertiary languages.\n[…]\nWith the arrival of Europeans in East Africa, Christianity was introduced to the region, profoundly shaping the development of Swahili. While Arab influence remained concentrated along the coastal areas, European missionaries ventured further inland, establishing missions and promoting Christian teachings. Early outposts were located along the coast, where they encountered Swahili as a widely spoken lingua franca.\n[…]\nMarshad, Hassan A. (1993). Kiswahili au Kiingereza? (Nchini Kenya) (in Swahili). Nairobi: Jomo Kenyatta Foundation. ISBN 9966-22-098-4.\n[…]\nWhiteley, Wilfred (1969). Swahili: the rise of a national language. Studies in African History. London: Methuen.\n[…]\nList of Swahili Dictionaries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nEssa língua africana pertence ao subgrupo sabaki das línguas bantu. É falada por cinquenta milhões de pessoas no mundo, incluindo, além dos países que a têm como língua oficial, Uganda e a República Democrática do Congo, onde é usada como língua franca. É também falado com alguma frequência nas áreas urbanas do Burundi e de Ruanda, no sul da Somália até ao norte de Moçambique (ao longo do litoral de África oriental), na Zâmbia e no sul da Etiópia.\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nA palavra Kiswahili vem do árabe سواحل, transliterado como sawāhil; é o plural da palavra ساحل, sāhel, \"fronteira\" ou \"litoral\", usada como adjetivo de \"negociantes do litoral\" A adição do prefixo ki o define como um idioma. Waswahili se refere aos povos da \"costa suaíli\" e Uswahili indica a cultura dos suaíli.\" Sahel\" também é o nome que se dá à região austral do deserto do Saara.\n[…]\nO zoológico de São Paulo Simba Safári, hoje conhecido Zoo Safári, derivava seu nome da palavra suaíli para \"leão\".\n[…]\nKamusi Project Dicionário Swahili - inglês\n[…]\nOmniglot Escrita Suaíli - inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Inuítes",
      "descricao": "Povos indígenas das regiões árticas do Canadá, da Groenlândia e do Alasca, antes chamados de esquimós."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Os povos do Ártico antes chamados de esquimós preferem o nome inuit. O que essa palavra significa na língua deles?",
    "resposta": "As pessoas",
    "fonte": [
      "https://en.wikipedia.org/wiki/Inuit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Inuit",
        "situacao": "ok",
        "texto": "Inuit (singular: Inuk) are a group of culturally and historically similar Indigenous peoples traditionally inhabiting the Arctic and Subarctic regions of North America and Russia, including Greenland, Labrador, Quebec, Nunavut, the Northwest Territories, Yukon (traditionally), and Alaska. The Inuit languages are part of the Eskaleut languages, also known as Inuit-Yupik-Unangan and as Eskimo–Aleut.\n[…]\nCanadian Inuit live throughout much of Northern Canada. The territory of Nunavut is most associated with their culture and history, while significant populations also inhabit Nunavik in the northern third of Quebec, Nunatsiavut in Labrador, and in the Northwest Territories and Yukon, particularly around the Arctic Ocean in the Inuvialuit Settlement Region (ISR). These areas are known, by Inuit Tapiriit Kanatami and the Government of Canada, as Inuit Nunangat.\n[…]\nIncluded in the population of Newfoundland and Labrador outside of Inuit Nunangat is the unrecognized Inuit territory of NunatuKavut where about 6,000 NunatuKavummiut (formerly known as \"Labrador-metis\") reside in southern Labrador. The numbers are not projected to rise in any significant way because of the enrollment requirements, which require proof of Inuit ancestry and demonstrated connection with NunatuKavut society.\n[…]\nInuit tend to have the dry variant of human earwax.\n[…]\nAlthough Inuit life has changed significantly over the past century, many traditions continue. Inuit Qaujimajatuqangit, or traditional knowledge, such as storytelling, mythology, music, and dancing remain important parts of the culture. Family and community are very important. The Inuktitut language is still spoken in many areas of the Arctic and is common on radio and in television programming.\n[…]\nInuit Circumpolar Council\n[…]\nInuit Circumpolar Council Alaska\n[…]\nInuit Circumpolar Council Greenland\n[…]\nInuit Circumpolar Council Chukotka\n[…]\nNational Inuit Organization in Canada"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Inu%C3%ADtes",
        "situacao": "ok",
        "texto": "Os inuítes (também chamados de inuit) são os membros da nação indígena que habitam as regiões árticas do Canadá, do Alasca e da Groenlândia.\n[…]\nAs lendas inuítes falam dos Tuniit como \"gigantes\", pessoas que eram mais altas e mais fortes do que os inuítes. Com menos frequência, as lendas se referem aos Dorset como \"anões\". Os pesquisadores acreditam que a sociedade Inuíte teve vantagens ao se adaptar ao uso de cães como animais de transporte e ao desenvolver armas maiores e outras tecnologias superiores às da cultura Dorset. Por volta do ano 1100 d.C., os migrantes inuítes haviam chegado à Groenlândia Ocidental, onde se estabeleceram.\n[…]\nA cultura e tecnologia da sociedade Inuíte que funcionavam tão bem no Ártico não eram adequadas para regiões subárticas, então eles não deslocaram seus vizinhos do sul.[carece de fontes]?\n[…]\nNo fim do século XVIII, a Companhia da Baía do Hudson estava funcionando com vários postos de comércio no território inuítes.Durante o século XIX, operações madeireiras substituíram o comércio de peles. Esta nova atividade, combinada com movimento de pessoas vindas da vila de Saint-Lawrence, privou os inuítes de muitas de suas áreas de caça.\n[…]\nInuíte significa povo em inuktitut (seu idioma) e é o nome genérico para grupos humanos culturalmente relacionados que habitam o Ártico, com características físicas que ajudam a sobreviver no frio. Os cílios são pesados, para proteger os olhos do brilho do Sol que é refletido no gelo, e seu corpo é geralmente baixo e robusto, conservando mais o calor.\n[…]\nEsquimó\n[…]\nSananguaq. Au coeur de la pensée inuit\n[…]\nFotografias Inuit no Canada",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Iídiche",
      "descricao": "Língua germânica escrita com letras hebraicas, falada historicamente pelos judeus asquenazes da Europa Central e Oriental."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O nome do iídiche, idioma de origem germânica escrito com letras hebraicas, pode ser traduzido por qual adjetivo?",
    "resposta": "Judaico",
    "fonte": [
      "https://en.wikipedia.org/wiki/Yiddish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yiddish",
        "situacao": "ok",
        "texto": "Yiddish, historically referred to as Judeo-German or Jewish German, is a West Germanic language and Jewish ethnolect historically spoken by Ashkenazi Jews. It originated in the Holy Roman Empire during the Middle Ages, and provided the nascent Ashkenazi community with a vernacular based on High German, fused with many elements taken from Hebrew (notably Mishnaic Hebrew) and to some extent Aramaic.\n[…]\nOwing to both assimilation to German and the revival of Hebrew, Western Yiddish survived only as a language of \"intimate family circles or of closely knit trade groups\".\n[…]\nToday's speakers consider Yiddish a separate language, officially recognized as such in the USSR (where it was viewed as \"the Jewish language\"), post-Soviet Russia and Sweden, thus complying to Max Weinreich's notion of official state recognition. Virtually all specialists working in the field of Yiddish view it as a separate language, including researchers and teachers who study and teach Yiddish in German-speaking countries.\n[…]\nFor centuries, Yiddish has been developing in countries separated from the German language space and has its own system of dialects. Contemporary debates on this subject are almost exclusively limited to the nature of medieval and early modern texts written in Western Yiddish dialects that seem much closer to varieties of German than today's Eastern Yiddish.\n[…]\nIn the United States, at first most Jews were of Sephardic origin, and hence did not speak Yiddish. It was not until the mid-to-late 19th century, as first German Jews, then Central and Eastern European Jews, arrived in the nation, that Yiddish became dominant within the immigrant community. This helped to bond Jews from many countries.\n[…]\nThe following is a short example of the Yiddish language written in both the Hebrew and Latin scripts with English and standard German for comparison.\n[…]\nKol Israel International (Reka) in Yiddish"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_i%C3%ADdiche",
        "situacao": "ok",
        "texto": "O iídiche, ídiche ou judeu-alemão (em iídiche: ייִדיש ou em iídiche: אידיש; romaniz.: ídish; lit. \"judeu\", \"judaico\") é uma língua da família indo-europeia, pertencente ao subgrupo germânico, tendo sido adotada por judeus, particularmente na Europa Central e na Leste Europeu, no segundo milênio, que a escrevem utilizando os caracteres hebraicos.\n[…]\nDe forma simplificada, pode-se dizer que o iídiche é o idioma germânico escrito com caracteres do alfabeto hebraico moderno e em sentido oposto ao da escrita ocidental (ou seja, escrita e lida da direita para a esquerda). Na prática, os três componentes contribuíram em maior ou menor grau na fonologia, morfologia, sintaxe e semântica da língua.\n[…]\nO termo \"asquenaze\" (ashkenazi) tem sua origem em um vocábulo hebraico que designava o povo que vivia na região onde hoje fica a Alemanha, e foi apropriado pelos judeus que se estabeleceram nesta área. Durante muito tempo, este grupo foi a minoria da população judaica mundial, estando concentrada nas regiões centrais e orientais da Europa; porém, em um período mais recente, a população asquenazita cresceu e se espalhou pelo mundo, tornando assim o idioma iídiche mais difundido.\n[…]\nAs comunidades judaicas instaladas na Europa adotavam três línguas: hebraico, aramaico e iídiche. Todas as três dispunham de representação escrita, mas somente o iídiche poderia ser considerado um idioma vernacular. Por essa razão, o iídiche foi empregado em princípio para obras laicas e correspondência privada. Para a correspondência comunitária, comentários bíblicos e toda uma série de documentos era utilizado o hebraico.\n[…]\nJá o aramaico era utilizado para os textos mais importantes, incluindo os tratados oficiais (especialmente comentários sobre o Talmud) e a Cabala (misticismo judaico).\n[…]\nNo século 21, Harry Potter foi traduzido para o iídiche.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Sânscrito",
      "descricao": "Língua clássica da Índia antiga, usada nos textos sagrados do hinduísmo, do budismo e do jainismo."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Em oposição às falas populares da Índia antiga, o nome sânscrito qualificava essa língua clássica com que adjetivo?",
    "resposta": "Refinada",
    "fonte": [
      "https://en.wikipedia.org/wiki/Sanskrit"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sanskrit",
        "situacao": "ok",
        "texto": "Sanskrit (; stem form संस्कृत; nominal singular संस्कृतम्, saṃskṛtam,) is a classical language belonging to the Indo-Aryan branch of the Indo-European languages. It arose in South Asia  after its predecessor languages had diffused there from the northwest in the late Bronze Age. Sanskrit is the sacred language of Hinduism, the language of classical Hindu philosophy, and of historical texts of Budd\n[…]\nPrakrit languages do have a grammatical structure, but like Vedic Sanskrit, it is far less rigorous than Classical Sanskrit. While the roots of all Prakrit languages may be in Vedic Sanskrit and ultimately the Proto-Indo-Aryan language, their structural details vary from Classical Sanskrit. It is generally accepted by scholars and widely believed in India that the modern Indo-Aryan languages – such as Bengali, Gujarati, Hindi, and Punjabi – are descendants of the Sanskrit language.\n[…]\nThe Devanagari script, states Banerji, became more popular for Sanskrit in India since about the 18th century. However, Sanskrit does have special historical connection to the Nagari script as attested by the epigraphical evidence.\n[…]\nMore than 3,000 Sanskrit works have been composed since India's independence in 1947. Much of this work has been judged of high quality, in comparison to both classical Sanskrit literature and modern literature in other Indian languages. In 2009, Satya Vrat Shastri became the first Sanskrit author to win the Jnanpith Award, India's highest literary award.\n[…]\nSanskrit is used extensively in the Carnatic and Hindustani branches of classical music. Kirtanas, bhajans, stotras, and shlokas of Sanskrit are popular throughout India. The Samaveda uses musical notations in several of its recessions.\n[…]\nIn India, Indonesia, Nepal, Bangladesh, Sri Lanka, and Southeast Asia, Sanskrit phrases are widely used as mottoes for various national, educational and social organisations:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A2nscrito",
        "situacao": "ok",
        "texto": "O sânscrito ou língua sânscrita (संस्कृत [s̪ɐ̃s̪kr̩t̪ɐm]; transcrito saṃskṛtam em IAST) é uma língua ancestral do Nepal e da Índia. Embora seja uma língua morta, o sânscrito faz parte do conjunto das 23 línguas oficiais da Índia, porque tem importante uso litúrgico no hinduísmo, budismo e jainismo.\n[…]\nQuando o termo surgiu na Índia, \"sânscrito\" não era considerado uma linguagem específica separada das outras, mas uma maneira particularmente refinada ou aperfeiçoada de se falar. O conhecimento de sânscrito era uma marca de classe social e educação, e a linguagem era ensinada principalmente para membros de castas mais altas, através de análise profunda dos gramáticos sânscritos como Pāṇini.\n[…]\nSânscrito, como definido por Pāṇini, evoluiu da forma mais antiga, a \"védica\". Estudiosos geralmente distinguem sânscrito védico e sânscrito clássico ou \"paniniano\" como dialetos separados, ainda que sejam muito similares. Considera-se que o sânscrito clássico tenha descendido do sânscrito védico. O sânscrito védico é a linguagem dos Vedas, uma extensa coleção de hinos, encantamentos e discussões religio-filosóficas que são os textos religiosos mais antigos da Índia e da religião hindu.\n[…]\nA linguagem Sânscrita, seja qual for sua idade, é de uma linda estrutura; mais perfeita que o Grego, mais copiosa que o Latim, e mais precisamente refinada que ambas, ainda compartilha com ambos uma forte afinidade, tanto nas raízes dos verbos quanto nas formas de gramática, que não pode ter sido criada por acidente; é, na verdade, tão forte, que nenhum filólogo poderia examinar as três sem acreditar que tenham nascido de uma fonte comum, que, talvez, nem exista mais.\n[…]\nMinidicionário de Sânscrito\n[…]\nW. D. Whitney, Sanskrit Grammar: Including both the Classical Language and the Older Dialects\n[…]\nAulas de Sânscrito [6]",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Kanji",
      "descricao": "Ideogramas de origem chinesa usados na escrita da língua japonesa."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Japão, os ideogramas vindos da China são chamados kanji. A palavra significa caracteres de qual dinastia chinesa?",
    "resposta": "Han",
    "distratores": [
      "Ming",
      "Tang",
      "Qing"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kanji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kanji",
        "situacao": "ok",
        "texto": "Kanji (; Japanese: 漢字, hiragana: かんじ, Katakana: カンジ, pronounced [kä̀ɲ̟́.ɟ̟͡ʑí, kä́ɲ̟́.-] , 'Han characters') are logographic Chinese characters, historically adapted from Chinese writing scripts, used in the writing of Japanese. They comprised a major part of the Japanese writing system during the time of Old Japanese and are still used today, along with the subsequently derived syllabic (phonogra\n[…]\nThe term kanji  is a direct borrowing and phonetic reading (on'yomi) of the Chinese word hanzi (traditional Chinese: 漢字; simplified Chinese: 汉字; pinyin: hànzì), which is one of the formal terms used when referring to Chinese characters. The significant use of Chinese characters in Japan first began to take hold around the 5th century CE and has since had a profound influence in shaping Japanese culture, language, literature, history, and records.\n[…]\nThere is no definitive count of kanji characters, just as there is none of Chinese characters generally. The Dai Kan-Wa Jiten, which is considered to be comprehensive in Japan, contains about 50,000 characters. The Zhonghua Zihai, published in 1994 in China, contains about 85,000 characters, but the majority of them are not in common use in any country, and many are obscure variants or archaic forms.\n[…]\nThere also exist kanji created by the Japanese and given an on'yomi reading despite not being a Chinese-derived or a Chinese-originating character. Some kanji were introduced from different parts of China at different times, and so have multiple on'yomi, and often multiple meanings.\n[…]\nIn addition to kokuji, there are kanji that have been given meanings in Japanese that are different from their original Chinese meanings. These are not considered kokuji but are instead called kok‌kun (国訓) and include characters such as the following:\n[…]\nKanji of the year\n[…]\nTable of kanji radicals\n[…]\nA practical Shinjitai—Kyūjitai—Simplified Chinese character converter"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kanji",
        "situacao": "ok",
        "texto": "O kanji (em japonês:  漢字, significa “caracteres da dinastia Han”) é um dos sistemas de escrita da língua japonesa formado por ideogramas onde cada um representa uma ideia concreta ou abstrata; são derivados de caracteres chineses da época da Dinastia Han; utilizados para escrever japonês junto com os silabários japoneses katakana (カタカナ) e hiragana (ひらがな), que representam os sons do idioma.\n[…]\nO nome kanji é derivado do chinês, e significa \"caracteres da dinastia Han\", durante o qual a escrita chinesa e o primeiro dicionário de caracteres unificados (o Jiezi Shuowen) foi criado na China.\n[…]\nPor um lado não foram adquiridos todos os caracteres, por outro lado, alguns caracteres, os assim chamados kokuji, foram desenvolvidos no Japão.\n[…]\nDevido à maneira como os caracteres kanji foram adotados no Japão, um único kanji pode ser usado para escrever uma ou mais palavras e significados diferentes (ou, na maioria dos casos, morfemas). Pelo ponto de vista do leitor, é dito que os kanjis apresentam uma ou mais \"leituras\" diferentes. A escolha da leitura depende do contexto, significado pretendido, uso em compostos, e até a localização na frase. Alguns kanjis apresentam dez ou mais leituras possíveis.\n[…]\nOn'yomi (音読み), a leitura sino-japonesa, é uma aproximação da pronúncia chinesa do caractere na época em que ele foi introduzido no Japão. Alguns kanjis foram introduzidos várias vezes em épocas diferentes e a partir de distintas regiões e línguas da China, por isso temos múltiplos on'yomi e às vezes múltiplos significados.\n[…]\nA leitura kun'yomi (訓読み), ou \"leitura nativa\", é baseada na pronúncia de uma palavra originariamente japonesa, ou yamatokotoba (大和言葉), que se aproximava do significado do caractere chinês na época em que este foi introduzido. Assim como o on'yomi, pode haver várias leituras kun'yomi para um mesmo kanji, ou até mesmo nenhuma.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Povo cigano",
      "descricao": "Povo romani, de origem no norte do subcontinente indiano, espalhado pela Europa e pelas Américas."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "As palavras gypsy, em inglês, e gitano, em espanhol, nasceram da crença de que os ciganos vinham de qual país?",
    "resposta": "Egito",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romani_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romani_people",
        "situacao": "ok",
        "texto": "The Romani, also spelled Romany or Rromani ( ROH-mə-nee or  ROM-ə-nee), colloquially known as the Roma (sing.: Rom), are an Indo-Aryan ethnic group who traditionally led a nomadic, itinerant lifestyle. Linguistic and genetic evidence suggests that the Romani originated in northwestern regions of the Indian subcontinent. Their subsequent westward migration, possibly in waves, is now believed by his\n[…]\nCalé, the endonym used by both the Spanish Roma (gitanos) and Portuguese Roma (ciganos). Caló is the language spoken by the Calé\n[…]\nPolska Roma, largest Romani subgroup in Poland\n[…]\nThe word \"Athiganoi\" is the origin of the Turkish name Ciganos as well as the Romanian name țigani, as the Ottoman Empire had linguistic and cultural influence on the neighbouring Romanian principalities of Wallachia and Moldavia. The Ottoman Turks conquered the Byzantine Empire in the 15th century; consequently, they ruled over the Roma (Ciganos).\n[…]\nSome terms for the Romani people point to Egyptians. The English term Gypsy (or Gipsy) originates from the Middle English gypcian, short for Egipcien. The Spanish term Gitano and French Gitan have similar etymologies. They are ultimately derived from the Greek Αιγύπτιοι (Aigyptioi), meaning \"Egyptian\", via Latin. This designation owes its existence to the belief, common in the Middle Ages, that the Roma, or some related group (such as the Indian Dom people), were itinerant Egyptians.\n[…]\nDuring World War II and the Holocaust, the Nazis committed genocide against the Roma. In the Romani language, this genocide is known as the Porajmos. Roma were marked for extermination and sentenced to forced labor and imprisonment in Zigeunerlager (\"Gypsy camps\") and concentration camps. They were often killed on sight, especially by the Einsatzgruppen (paramilitary death squads) on the Eastern Front. The number of victims has been estimated at between 220,000 and 1,500,000."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ciganos",
        "situacao": "ok",
        "texto": "Romani é o endônimo (também conhecidos por: roma, ciganos, boêmios, gitanos, calons, quicos, calés ou calós) que designa um conjunto de populações que têm em comum a origem indiana e a língua romani, originária do noroeste do subcontinente indiano.\n[…]\nO termo \"cigano\" provém de termos do grego bizantino \"atzinganos\" ou \"athígganos\", que representa \"intocável\"; \"gitano\", que provém do castelhano \"gitano\", e este de \"egiptano\", pois acreditava-se terem origem no Egito; \"boêmio\" é uma referência à antiga crença da etnia ser originária da Boêmia, região histórica da Europa Central (atual República Tcheca); Também são conhecidos no Brasil pelos termos \"calon\", \"quico\" (em Minas Gerais e São Paulo), calé ou caló.\n[…]\nJá no século  XIV, devido à conquista territorial e política de estados indianos, muitas caravanas rom partiram para a Europa, Oriente Médio e Norte da África. É a segunda onda migratória que os roma denominam Aresajipe. Um primeiro grupo tomou rumo oeste e atingiu a Europa através da Grécia; o segundo partiu para o sul, adentrando o Império Bizantino e chegando à Síria, Egito e Palestina.\n[…]\nEm comunicação apresentada durante o encontro \"Ciganos no século XXI\", realizado em Lisboa, em setembro de 2010, o espanhol Santiago González Avión, diretor da Fundação Secretariado Cigano, na Galiza, apontou as divisões entre as próprias comunidades romanisx . \"Entre os ciganos de nacionalidade espanhola, a fragmentação é forte. Galegos e castelhanos dividem-se. E há discriminação também entre os ciganos transmontanos, de nacionalidade portuguesa, e os espanhóis\", apontou González.\n[…]\n«RomArchive» (em inglês, alemão, e romani)\n[…]\n«Romani Atlantic»  —",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Aotearoa",
      "descricao": "Nome da Nova Zelândia na língua maori."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "Na língua maori, a Nova Zelândia se chama Aotearoa. Como esse nome costuma ser traduzido?",
    "resposta": "Terra da longa nuvem branca",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aotearoa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aotearoa",
        "situacao": "ok",
        "texto": "Aotearoa is the Māori-language name for New Zealand. The name was originally used by Māori in reference only to the North Island, with the whole country sometimes referred to as Aotearoa me Te Waipounamu, especially in the South Island. In the pre-European era, Māori did not have a collective name for the two islands.\n[…]\nThe expanded meaning of Aotearoa among Pākehā became commonplace in the late 19th century. Aotearoa was used for the name of New Zealand in the 1878 translation of \"God Defend New Zealand\", by Judge Thomas Henry Smith of the Native Land Court—this translation is widely used today when the anthem is sung in Māori. Additionally, William Pember Reeves used Aotearoa to mean New Zealand in his history of the country published in 1898, The Long White Cloud: Ao Tea Roa.\n[…]\nThe New Zealand province of the Anglican Church is divided into three cultural streams or tikanga (Aotearoa, New Zealand and Polynesia), with the Aotearoa tikanga covering Māori-speaking congregations within New Zealand.\n[…]\nIn 2015, to celebrate Te Wiki o te Reo Māori (Māori Language Week), the Black Caps (the New Zealand national cricket team) played under the name Aotearoa for their first match against Zimbabwe.\n[…]\n\"Aotearoa\" is the Māori version of \"God Defend New Zealand\", a national anthem of New Zealand.\n[…]\nIn September 2021, Te Pāti Māori started a petition to change the name of New Zealand to Aotearoa. The petition received 50,000 signatures in two days, and over 70,000 by early June 2022. On 2 June, the petition was submitted to Parliament's Petitions Committee. Party co-leader Rawiri Waititi argued that the proposed name change would recognise New Zealand's indigenous heritage and strengthen its identity as a Pacific country.\n[…]\nThe dictionary definition of Aotearoa at Wiktionary"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Aotearoa",
        "situacao": "ok",
        "texto": "Nova Zelândia (em inglês:  New Zealand, pronunciado: [ˈnjuː ˈziː.l(ə)nd]; em maori: Aotearoa, pronunciado: [aɔˈtɛaɾɔa]) é um país insular, oficialmente pertencente à Oceania, no sudoeste do Oceano Pacífico, formado por duas massas de terra principais (comumente chamadas de Ilha Norte e Ilha Sul) e por numerosas ilhas menores, sendo as mais notáveis as ilhas Stewart e Chatham.\n[…]\nO nome indígena na língua maori para a Nova Zelândia é Aotearoa, normalmente traduzido como \"A Terra da Grande Nuvem Branca\". É o principal constituinte do Reino da Nova Zelândia, com os demais constituintes sendo territórios ultramarinos, que incluiriam as Ilhas Cook e Niue (que se autogovernam, mas em associação livre); Toquelau; e a Dependência de Ross (reivindicação territorial da Nova Zelândia na Antártida).\n[…]\nRecebeu este nome em homenagem a uma província dos Países Baixos chamada Zelândia, que era a terra natal de seus colonizadores.\n[…]\nAotearoa (muitas vezes traduzido como \"terra da longa nuvem branca\") é o nome māori atual para a Nova Zelândia e também é usado no inglês neozelandês. Não se sabe se os māori tinham um nome para todo o país antes da chegada dos europeus, sendo que Aotearoa originalmente referia-se apenas à Ilha do Norte. Abel Tasman avistou a Nova Zelândia em 1642 e chamou-a de Staten Landt, supondo que o país fosse conectado a um lugar do mesmo nome no extremo sul da América do Sul.\n[…]\nA Nova Zelândia foi um das últimas grandes massas de terra colonizadas por seres humanos. A datação por radiocarbono, evidências de desmatamento e a variabilidade do DNA mitocondrial em populações māori sugerem que a Nova Zelândia foi ocupada pelos polinésios do leste entre 1250 e 1300, concluindo uma longa série de viagens pelas ilhas do Pacífico sul. Ao longo dos séculos que se seguiram, esses colonos desenvolveram uma cultura distinta agora conhecida como māori.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Aleph",
      "descricao": "Primeira letra do alfabeto fenício, ancestral do alfa grego e da letra A latina."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "A letra A descende de um sinal fenício chamado aleph. Que animal esse nome designava?",
    "resposta": "Boi",
    "fonte": [
      "https://en.wikipedia.org/wiki/Aleph"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Aleph",
        "situacao": "ok",
        "texto": "Aleph (also spelled alef or alif, transliterated ʾ) is the first letter of the Semitic abjads, including Phoenician ʾālep 𐤀‎, Hebrew ʾālef א, Aramaic ʾālap 𐡀‎, Syriac ʾālap̄ ܐ, Arabic ʾalif ا, and North Arabian 𐪑‎. It also appears as South Arabian 𐩱 and Ge'ez ʾälef አ.\n[…]\nIn Modern Standard Arabic, the word أليف /ʔaliːf/ literally means 'tamed' or 'familiar', derived from the root ʔ-L-F, from which the verb ألِف /ʔalifa/ means 'to be acquainted with; to be on intimate terms with'. In modern Hebrew, the same root ʔ-L-P (alef-lamed-peh) gives me'ulaf, the passive participle of the verb le'alef, meaning 'trained' (when referring to pets) or 'tamed' (when referring to wild animals).\n[…]\nWritten as ا or 𐪑, spelled as ألف or 𐪑𐪁𐪐 and transliterated as alif, it is the first letter in Arabic and North Arabian. Together with Hebrew aleph, Greek alpha and Latin A, it is descended from Phoenician ʾāleph, from a reconstructed Proto-Canaanite ʾalp \"ox\".\n[…]\nIn the Ge'ez alphabet, ʾälef አ appears as the thirteenth letter of its abjad. This letter is also used to render a glottal stop /ʔ/.\n[…]\nThe Mapai political party in Israel used an aleph as its election symbol, and featured it prominently in its campaign posters.\n[…]\nGuru Nanak, regarded as the founder of Sikhism, used the aleph to represent the oneness of God. Aleph is also the current name of a religious cult in Japan.\n[…]\nIn IPA the aleph glotal plosive is depicted by Ɂ (unicode point LATIN CAPITAL LETTER GLOTAL STOP, U+0241) In earlier days of phonology a small arch based on Greek Smooth breathing or a doubled one (now depicted by Ꜣ, unicode point LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF) was used for this purpose.\n[…]\nAleph number\n[…]\n\"The Letter Aleph (א)\". Hebrew Today. Retrieved 2019-05-05."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%81lefe",
        "situacao": "ok",
        "texto": "Álefe ou alefe é a primeira letra de vários abjads semíticos,  incluindo o fenício (𐤀, ʾālep), o hebraico (א, ʾālef), o aramaico (𐡀, ʾālap), o siríaco (ܐ, ʾālap̄) e o árabe — ا, alif. Também aparece no saudi-árabe antigo (𐩱, alef), e no Amárico (አ, ʾälef).\n[…]\nO nome aleph ou álufe em hebraico antigo, é derivado de uma palavra do semítico ocidental, cujo pictograma original significa \"boi\" (como na palavra hebraica bíblica Eleph (אֶלֶף) 'boi'), \"poder\", \"autoridade\" e a forma da letra deriva de um glifo protossinaítico que pode ter sido  baseado em um hieróglifo egípcio, que representa a cabeça de um boi.\n[…]\nO álefe originou-se na letra fenícia (𐤀, ʾālep), cuja variante deu origem à letra grega alfa (Α, alpha), a letra A do alfabeto latino e seu equivalente cirílico, А. O alfa grego não significava a parada glotal, mas sim a vogal /a/. O álefe não possui sonorização e é utilizado apenas para indicar uma vogal sem acompanhamento de uma consoante.\n[…]\nNo alfabeto saudi-árabe antigo, alef (𐩱) aparece como a décima sétima letra do abjad da Arábia do Sul. A letra é usada para renderizar a oclusiva glotal /ʔ/.\n[…]\nNa escrita etíope, o álefe (አ, ʾälef) aparece como a décima terceira letra do abjad etíope. Esta letra também é usada para renderizar a oclusiva glotal /ʔ/.\n[…]\nNa teoria dos conjuntos, o glifo hebraico ℵ (aleph) é usado como símbolo para denotar os números aleph, que representam a cardinalidade de conjuntos infinitos. Esta notação foi introduzida pelo matemático Georg Cantor. Em livros de matemática mais antigos, a letra álefe ou aleph foi muitas vezes impressa de cabeça para baixo por acidente, em parte porque uma matriz Monotype para aleph foi erroneamente construída de forma incorreta.\n[…]\nO Aleph",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Futhark",
      "descricao": "Alfabeto rúnico usado pelos antigos povos germânicos."
    },
    "angulo": "nome",
    "tipo": "aberta",
    "pergunta": "O alfabeto rúnico dos antigos povos germânicos é chamado futhark. De onde vem esse nome?",
    "resposta": "Das suas seis primeiras letras",
    "fonte": [
      "https://en.wikipedia.org/wiki/Elder_Futhark"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Elder_Futhark",
        "situacao": "ok",
        "texto": "The Elder Futhark, or Pan-Germanic Futhark (also spelt Fuþark, , FOO-thark), is the oldest form of the runic alphabets. It was a writing system used by Germanic peoples  in the Migration Period. Inscriptions are found on artifacts including jewellery, amulets, plateware, tools, and weapons, as well as runestones, from the 2nd to the 8th centuries.\n[…]\nReconstructed names in Common Germanic can easily be given for most runes. Exceptions are the þ rune (which is given different names in Anglo-Saxon, Gothic and Scandinavian traditions) and the z rune (whose original name is unknown, and preserved only in corrupted form from Old English tradition). The 24 Elder Futhark runes are:\n[…]\nThere are some 350 known Elder Futhark inscriptions with 81 known inscriptions from the South (Germany, Austria, Switzerland) and 267 from Scandinavia. The precise numbers are debatable because of some suspected forgeries, and some disputed inscriptions (identification as \"runes\" vs. accidental scratches, simple ornaments or Latin letters). 133 Scandinavian inscriptions are on bracteates (compared to 2 from the South), and 65 are on runestones (no Southern example is extant).\n[…]\nEncoded separately are the double-barred h-rune, ᚻ and a graphical variant of the ng-rune, ᛝ. These two have separate codepoints because they become independent characters in the Anglo-Saxon futhorc. The numerous other graphical variants of Elder Futhark runes are considered glyph variants better rendered by the use of different fonts and so not given Unicode codepoints. Similarly, bind runes are considered ligatures and not given Unicode codepoints.\n[…]\nRobinson, Orrin W (2004), Old English and its Closest Relatives: A Survey of the Earliest Germanic Languages, Routledge, ISBN 0-415-08169-6\n[…]\nMees, Bernard. 2024. \"On Recent Elder Futhark finds\". Hyldyr.\n[…]\nOmniglot.com – Elder Futhark"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Futhark_antigo",
        "situacao": "ok",
        "texto": "O futhark antigo (ou futhark germânico) é a forma mais antiga de alfabeto rúnico. É constituído por 24 caracteres, utilizados inicialmente na escrita proto-nórdica. Foi ainda o alfabeto usado pelos povos germânicos do noroeste da Europa durante o período das migrações.\n[…]\nA partir do século VIII, o sistema foi gradualmente substituído pelo futhark recente pelos escandinavos, ao passo que ele continuou a ser utilizado pelos anglo-saxões e frísios. Estes, por sua vez, o substituíram pelo sistema de runas anglo-frísias, ou futhorc. Tanto o futhorc quanto o futhark recente permaneceram em uso ao longo da Idade Média, mas gradativamente perderam espaço até sua completa substituição pelo alfabeto latino.\n[…]\nEscritos em futhark antigo permaneceram enigmáticos até 1865, quando o filólogo norueguês Sophus Bugge criou um sistema capaz de decifrá-los.\n[…]\nO futhark antigo (nomeado pelos fonemas iniciais dos nomes das primeiras seis runas: F, U, Þ, A, R and K) é composto de 24 runas, frequentemente organizadas em três grupos de oito. Cada um desses grupos é chamado de ætt (pl. ættir).\n[…]\nNote que þ corresponde aos fonemas consonantais [θ] ou [ð] do alfabeto fonético da língua inglesa, enquanto ï também pode ser transliterado por æ, o que indica que pode ter sido um ditongo ou um vogal próxima aos fonemas [ɪ] or [æ]. z está associado ao fonema [z] do Proto-Germânico, e se tornou o /r₂/ do Proto-Nórdico, que também é transliterado por ʀ.\n[…]\nA primeira listagem sequencial do alfabeto, apresentada na tabela abaixo, foi encontrada na Pedra Kylver, em Gotlândia, e data de 400 D.C:\n[…]\nRunas\n[…]\nFuthark recente",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua Brasileira de Sinais, usada pelas comunidades surdas do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A Libras e a língua de sinais americana descendem de uma mesma língua de sinais europeia. De que país ela é?",
    "resposta": "França",
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
      "https://en.wikipedia.org/wiki/French_Sign_Language_family"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nIn September 2017, new Libras accessibility requirements took effect in Brazil mandating availability of Brazilian Sign Language for films shown in Brazilian movie theaters. Sign language is displayed to moviegoers on a second screen device. Sign language is stored as a Sign Language Video track in the Digital Cinema Package (DCP), synchronized with the rest of the film.\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nLourenço, Guilherme. \"Verb agreement in Brazilian Sign Language: Morphophonology, syntax & semantics.\" Sign Language & Linguistics 22, no. 2 (2019): 275–281.\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      },
      {
        "url": "https://en.wikipedia.org/wiki/French_Sign_Language_family",
        "situacao": "ok",
        "texto": "The French Sign Language (LSF, from langue des signes française), or Francosign, family is a language family of sign languages which includes French Sign Language and American Sign Language.\n[…]\nThe LSF family descends from Old French Sign Language (VLSF), which developed among the deaf community in Paris. The earliest mention of Old French Sign Language is by the abbé Charles-Michel de l'Épée in the late 18th century, but it could have existed for centuries prior. Several European sign languages, such as Russian Sign Language, derive from it, as does American Sign Language, established when French educator Laurent Clerc taught his language at the American School for the Deaf.\n[…]\nOthers, such as Spanish Sign Language, are thought to be related to French Sign Language even if they are not directly descended from it.\n[…]\nWittnann believed Lyons Sign Language, Spanish Sign Language, Brazilian Sign Language, and Venezuelan Sign Language, which are sometimes counted in the French family, had separate origins, though with some contact through stimulus diffusion, and it was Lyons rather than French Sign Language that gave rise to Belgian Sign Language. Chilean Sign Language (1852) has also been included in the French family but is not listed by Wittmann.\n[…]\nHawaiian Pidgin Sign Language (with possible local admixture) turned out to be an isolate, unrelated to French, American, or any other Sign Language. J. Albert Bickford concluded that there was 'no substantive evidence that the [Lyons Sign Language] ever existed' and retired it from Ethnologue in 2017."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nAtravés de diversos movimentos e muita pesquisa na área, foi legitimada como língua a comunicação gestual entre surdos. Foi apenas no fim do século XX  que os movimentos se intensificaram querendo a oficialização da Língua Brasileira de Sinais, em 1993 o projeto de lei entrou na longa batalha para a regulamentação da Libras no país.\n[…]\nEm 2005, através do decreto 5.626 a língua brasileira de sinais foi regulamentada como disciplina curricular. Já em 2007, a estrutura de língua foi aplicada a Libras, já que ela é uma língua natural e possui complexidades próprias e comunicação eficaz. Em 2010 foi regulamentada a profissão de Tradutor/ Intérprete de Libras através da Lei 12.319 de 1° de Setembro de 2010, simbolizando mais uma grande conquista.\n[…]\nOs estudos das línguas de sinais passaram a ser reconhecidos e estudados com as mesmas classificações utilizadas pelas línguas orais através de William Stokoe. Na década de 1960, o linguista propôs a divisão morfológica e fonológica dos sinais em American Sign Language (ASL) em três parâmetros: configuração de mão (CM), ponto de articulação (PA) ou locação (L) e movimento (M).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Malgaxe",
      "descricao": "Língua austronésia falada em Madagascar."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A língua de Madagascar, ilha na costa leste da África, tem seus parentes mais próximos em qual grande ilha do Sudeste Asiático?",
    "resposta": "Bornéu",
    "fonte": [
      "https://en.wikipedia.org/wiki/Malagasy_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Malagasy_language",
        "situacao": "ok",
        "texto": "Malagasy ( MAL-ə-GASS-ee; Malagasy pronunciation: [malaˈɡasʲ]; Sorabe: مَلَغَسِ) is an Austronesian language and dialect continuum spoken in Madagascar. The standard variety, called Official Malagasy, is one of the official languages of Madagascar, alongside French.\n[…]\nIn his 1658 work Histoire de la grande isle Madagascar, Étienne de Flacourt provided one of the earliest known attempts to classify the Malagasy language into dialectal regions. He divided Malagasy into two main dialect groups: northern and southern. He noted significant lexical differences between them — for instance, the word ampela was used in the south to mean 'woman' or 'girl', while vaiavy was used in the north.\n[…]\nThe first book to be printed in Malagasy using Latin characters was the Bible, which was translated into Malagasy in 1835 by British Protestant missionaries working in the highlands area of Madagascar.\n[…]\nThe first dictionary of the language is Étienne de Flacourt's Dictionnaire de la langue de Madagascar published in 1658 though earlier glossaries written in Arabico-Malagasy script exist. A later Vocabulaire Anglais-Malagasy was published in 1729. An 892-page Malagasy–English dictionary was published by James Richardson of the London Missionary Society in 1885, available as a reprint; however, this dictionary includes archaic terminology and definitions.\n[…]\nEnglish–Malagasy Phrase Book. Antananarivo: Editions Madprint 1973, 199 p. (Les Guides de Poche de Madagasikara.)\n[…]\nHurles, Matthew E.; et al. (2005). \"The Dual Origin of the Malagasy in Island Southeast Asia and East Africa: Evidence from Maternal and Paternal Lineages\". American Journal of Human Genetics. 76 (5): 894–901. Bibcode:2005AmJHG..76..894H. doi:10.1086/430051. PMC 1199379. PMID 15793703."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_malgaxe",
        "situacao": "ok",
        "texto": "A língua malgaxe é uma língua austronésia e a língua nacional de Madagascar. O malgaxe é a língua malaio-polinésia mais ocidental, trazida para Madagascar pelos povos austronésios que se estabeleceram nas Ilhas da Sonda por volta do século V d.C. A língua malgaxe é uma das línguas baritas e tem a maior proximidade com a língua ma'anyan, ainda falada em Bornéu nos dias atuais.\n[…]\nA língua malgaxe é uma língua austronésia, pertencente à família linguística malaio-polinésia. Os primeiros habitantes de Madagascar chegaram à ilha a partir da Indonésia e da Malásia, trazendo consigo línguas austronésias que evoluíram para o malgaxe ao longo do tempo.\n[…]\nO termo \"malgaxe\" deriva de uma palavra do idioma indonésio ou malaio, malgasy, que significa \"montanha\". Isso pode ser uma referência às montanhas de Madagascar, onde os primeiros habitantes da ilha se estabeleceram e onde a língua malgaxe evoluiu ao longo do tempo.\n[…]\nA língua malgaxe tem uma história que reflete a história do povo malgaxe e a evolução da cultura e sociedade de Madagascar. Acredita-se que a língua malgaxe tenha se originado a partir das linguas austronésias trazidas pelos primeiros habitantes da ilha, que chegaram a Madagascar há mais de dois mil anos.\n[…]\nAo longo dos séculos, o malgaxe se desenvolveu em 12 dialetos, influenciados por contatos com outras línguas e culturas, incluindo o árabe, o suaíli, o francês e o inglês. Durante o século XVII, o reino de Merina, localizado nas planícies centrais de Madagascar, estabeleceu uma hegemonia sobre a maior parte da ilha e promoveu a língua malgaxe como língua oficial do reino.\n[…]\nA língua malgaxe é falada em Madagascar, uma ilha localizada no Oceano Índico, a cerca de 400 km da costa da África Oriental.\n[…]\nAntaisaka Malgaxe - falado no sudeste de Madagascar\n[…]\nAntankarana Malgaxe - falado na costa norte de Madagascar\n[…]\nTanosy Malgaxe - falado no sudeste de Madagascar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Húngaro",
      "descricao": "Língua urálica oficial da Hungria."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Apesar de estar no centro da Europa, o húngaro pertence à mesma família linguística de qual idioma nórdico?",
    "resposta": "Finlandês",
    "distratores": [
      "Sueco",
      "Norueguês",
      "Islandês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hungarian_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hungarian_language",
        "situacao": "ok",
        "texto": "Hungarian, or Magyar (Magyar nyelv, pronounced [ˈmɒɟɒr ˈɲɛlv] ), is a Ugric language of the Uralic language family spoken in Hungary and parts of several neighboring countries. It is the official language of Hungary and one of the 24 official languages of the European Union.\n[…]\nIn the 21st century, studies support an origin of the Uralic languages, including early Hungarian, in eastern or central Siberia, somewhere between the Ob and Yenisei rivers or near the Sayan mountains in the Russian–Mongolian border region. A 2019 study based on genetics, archaeology and linguistics, found that early Uralic speakers arrived in Europe from the east, specifically from eastern Siberia.\n[…]\nToday, the consensus among linguists is that Hungarian is a member of the Uralic family of languages. The Uralic language family is among the most firmly established and best-studied language families in the world. Nevertheless, a number of alternative views have been proposed which do not have any currency among present-day linguists.\n[…]\nThe classification of Hungarian as a Uralic/Finno-Ugric rather than a Turkic language continued to be a matter of impassioned political controversy throughout the 18th and into the 19th centuries. During the latter half of the 19th century, a competing hypothesis proposed a Turkic affinity of Hungarian, or, alternatively, that both the Uralic and the Turkic families formed part of a superfamily of Ural–Altaic languages.\n[…]\nThe Linguistic Records of the Early Old Hungarian Period; The Linguistic System of the Age\n[…]\nCollection of Hungarian Technical Dictionaries\n[…]\nHungarian bilingual dictionaries\n[…]\nHungarian-English dictionary\n[…]\nEnglish-Hungarian dictionary Archived 2011-09-26 at the Wayback Machine\n[…]\nHungarian Verb Conjugation Archived 2021-02-25 at the Wayback Machine"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_h%C3%BAngara",
        "situacao": "ok",
        "texto": "O húngaro (), ou magiar, é um idioma pertencente ao grupo fino-úgrico. da família das línguas urálicas, sendo de todas a mais amplamente falada, superando 15 milhões de falantes.\n[…]\nO húngaro está difundido no sul da Europa Central e é falado por mais de 13,5 milhões de pessoas; outras estimativas apontam para um número de falantes de até 15 milhões. É a língua oficial da Hungria e, desde 1.º de maio de 2004, é também uma das línguas oficiais da União Europeia. Ao contrário da maioria das línguas europeias, o húngaro não pertence à família de línguas indo-europeias e não tem uma relação próxima com elas. Os códigos de idioma ISO 639 do húngaro são hu e hun.\n[…]\nEvidências arqueológicas do atual sul de Bascortostão confirmam a existência de assentamentos húngaros entre o rio Volga e os Montes Urais. Os onogures (e os protobúlgaros) tiveram mais tarde uma grande influência na língua, especialmente entre os séculos V e IX. Esta base de empréstimos turcomanos é grande e variada (p.ex. szó \"palavra\", do túrquico; e daru \"guindaste\", das línguas pérmicas relacionadas), e inclui palavras emprestadas do ogúrico; p.ex. borjú \"bezerro\" (cp.\n[…]\nOs períodos da história da língua húngara são os seguintes:\n[…]\nHúngaro antigo — 896 até o século XVI.\n[…]\nHúngaro moderno — finais do século XVIII até a atualidade.\n[…]\nOs principais dialetos húngaros incluem:\n[…]\nA fonologia da língua húngara é implementada com letras latinas. Todas as letras correspondem exatamente a um som.\n[…]\nA língua húngara faz distinção entre vogais que possuem curta duração (vogais breves) e vogais que possuem longa duração (vogais longas).\n[…]\nPerfil da língua húngara (em inglês)\n[…]\nHungarian 101 Learn Hungarian online (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Quíchua",
      "descricao": "Família de línguas indígenas dos Andes, falada no antigo Império Inca."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O que as palavras lhama, puma e condor têm em comum na sua origem?",
    "resposta": "Vêm do quíchua",
    "fonte": [
      "https://en.wikipedia.org/wiki/Quechuan_languages",
      "https://en.wikipedia.org/wiki/List_of_English_words_of_Quechuan_origin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quechuan_languages",
        "situacao": "ok",
        "texto": "Quechua (; Spanish: [ˈketʃwa]), also called Runa simi in Southern Quechua (pronounced [ˈɾʊna ˈsɪmɪ], 'people's language'), is an indigenous language family that originated in central Peru and thereafter spread to other countries of the Andes.\n[…]\nAt first, Spaniards referred to the language of the Inca empire as the lengua general, the general tongue. The name quichua was first used in 1560 by Domingo de Santo Tomás in his Grammatica o arte de la lengua general de los indios de los reynos del Perú. It is not known what name the native speakers gave to their language before colonial times and whether it was Spaniards who called it quechua.\n[…]\nAlternatively, Pedro Cieza de León and Inca Garcilaso de la Vega, the early Spanish chroniclers, mention the existence of a people called Quichua in the present Apurímac Region, and it could be inferred that their name was given to the entire language.\n[…]\nThe Hispanicised spellings Quechua and Quichua have been used in Peru and Bolivia since the 17th century, especially after the Third Council of Lima. Today, the various local pronunciations of \"Quechua\" include [ˈqʰeʃwa ~ ˈqʰeswa], [ˈχɪt͡ʃwa], [ˈkit͡ʃwa], and [ˈʔiʈ͡ʂwa].\n[…]\nUntil the 20th century, Quechua was written with a Spanish-based orthography, for example Inca, Huayna Cápac, Collasuyo, Mama Ocllo, Viracocha, quipu, tambo, condor. This orthography is the most familiar to Spanish speakers, and so it has been used for most borrowings into English, which essentially always happen through Spanish.\n[…]\nWanka Quechua\n[…]\nWanka Quechua\n[…]\nStark, L. R.; Muysken, P. C. (1977). Diccionario español-quichua, quichua español. (Publicaciones de los Museos del Banco Central del Ecuador, 1). Quito: Guayaquil.\n[…]\ninformation about Quechua in a variety of languages"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_English_words_of_Quechuan_origin",
        "situacao": "ok",
        "texto": "This is a list of English language words borrowed from Indigenous languages of the Americas, either directly or through intermediate European languages such as Spanish or French. It does not cover names of ethnic groups or place names derived from Indigenous languages.\n[…]\nA number of words from Quechua have entered English, mostly via Spanish, adopting Hispanicized spellings.\n[…]\npossibly from Quechua. May be from Spanish chinche\n[…]\nCondor (definition)\n[…]\nfrom kuntur, via Spanish cóndor\n[…]\nPuma (definition)\n[…]\nfrom puma, via Spanish"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_qu%C3%ADchua",
        "situacao": "ok",
        "texto": "O quíchua (em quíchua: qhichwa simi ou runa simi; também chamado de quechua ou quéchua), é uma importante família de línguas indígenas da América do Sul, ainda falada hoje por cerca de dez milhões de pessoas de diversos grupos étnicos da Argentina, Bolívia, Chile, Colômbia, Equador, Peru e ao longo dos Andes. Possui vários dialetos inteligíveis entre si. É uma das línguas oficiais da Bolívia, do P\n[…]\nMuitos consideram o quíchua como uma língua do grupo quechumaran, junto com a língua aimará, principalmente pelo fato de ambas línguas terem muitas palavras em comum. Essa proposta apresenta controvérsias, visto que, se os cognatos são bem próximos (mais próximos até que cognatos \"intraquéchuas\"), o sistema de afixos é bem diferente. As similaridades podem se dever mais ao contato entre os falantes das duas línguas do que a origem comum.\n[…]\nAté o século XX, o quíchua era escrito com ortografia baseada no espanhol como em Inca, Huayna Cápac, Collasuyo, Mama Ocllo, Viracocha, quipu, tambo, condor, uma ortografia bem familiar a quem usa a Língua espanhola, mantida em todas as palavras que foram do quíchua para outras línguas.\n[…]\nMuitas palavras originárias do quíchua foram para outros idiomas através do espanhol, como é o caso de coca, condor, guano, jerky (comida), llama, pampa, puma, quinine, quinoa, vicuña e, talvez, gaucho. As influências do quíchua sobre o espanhol são visíveis, como em chuchaqui (\"ressaca de bebida\") no Equador; e nas diversas formas para designar os males causados pela altitude: na Bolívia, sorojchi; na Argentina, Colômbia, Equador e Peru, soroche.\n[…]\nO quíchua também se apropriou de palavras do espanhol como pero (de pero, \"mas\"), bwenu (de bueno, \"bom\") e burru (de burro).\n[…]\nDetailed map of the varieties of Quíchua according to SIL (fedepi.org)\n[…]\nMediaWiki translation tool for Quíchua[ligação inativa] Tradução Online Quíchua\n[…]\nOmniglot – escrita Quíchua (em inglês)\n[…]\nQuíchuas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Náuatle",
      "descricao": "Língua indígena do México, falada pelos astecas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Os astecas deixaram no nosso vocabulário palavras como chocolate, tomate e abacate. Que língua eles falavam?",
    "resposta": "Náuatle",
    "fonte": [
      "https://en.wikipedia.org/wiki/Nahuatl"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nahuatl",
        "situacao": "ok",
        "texto": "Nahuatl (English:  NAH-wah-təl; hispanicized from Nawatl pronounced [ˈnaːwat͡ɬ] ), Aztec, or Mexicano is a language or, by some definitions, a group of languages of the Uto-Aztecan language family. Varieties of Nahuatl are spoken by about 1.7 million Nahuas, most of whom live mainly in Central Mexico and have smaller populations in the United States. Nahuatl has been spoken in central Mexico since\n[…]\nThe Mexica were among the latest groups to arrive in the Valley of Mexico; they settled on an island in the Lake Texcoco, subjugated the surrounding tribes, and ultimately an empire named Tenochtitlan. Mexica political and linguistic influence ultimately extended into Central America, and Nahuatl became a lingua franca among merchants and elites in Mesoamerica, such as with the Maya Kʼicheʼ people.\n[…]\nMany Nahuatl words have been borrowed into the Spanish language, most of which are terms designating things Indigenous to the Americas. Some of these loans are restricted to Mexican or Central American Spanish, but others have entered all the varieties of Spanish in the world. A number of them, such as chocolate, tomato and avocado have made their way into many other languages via Spanish.\n[…]\nFor instance, in English, two of the most prominent are undoubtedly chocolate and tomato (from Nahuatl tōmatl). Other common words are coyote (from Nahuatl coyōtl), avocado (from Nahuatl āhuacatl) and chile or chili (from Nahuatl chilli). The word chicle is also derived from Nahuatl tzictli 'sticky stuff, chicle'. Some other English words from Nahuatl are: Aztec (from aztēcatl); cacao (from Nahuatl cacahuatl 'shell, rind'); ocelot (from ocēlotl).\n[…]\nVocabulario manual de las lenguas castellana y mexicana – a Spanish–Nahuatl dictionary\n[…]\nVocabulario trilingüe – dictionary of Spanish, Latin, and Nahuatl\n[…]\nOnline Nahuatl Dictionary – Wired Humanities Projects, University of Oregon"
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
    "indice": 16,
    "ancora": {
      "nome": "Quimbundo",
      "descricao": "Língua banta falada no norte de Angola, que influenciou o português do Brasil."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "Caçula, moleque e quitanda chegaram ao português do Brasil por meio de qual língua banta de Angola?",
    "resposta": "Quimbundo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Kimbundu",
      "https://pt.wikipedia.org/wiki/L%C3%ADngua_quimbunda"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kimbundu",
        "situacao": "ok",
        "texto": "Kimbundu, a Bantu language which has sometimes been called Mbundu or North Mbundu (to distinguish it from Umbundu, sometimes called South Mbundu), is the second-most-widely-spoken Bantu language in Angola.\n[…]\nThere is a small number of words of Kimbundu  origin and many of those are indirect loans, borrowed via Angolan Portuguese.\n[…]\nThe examples generally understood by most or all speakers of Angolan and European Portuguese include\n[…]\nConjugating the verb to be (kuala; also kukala in Kimbundu) in the present:\n[…]\nConjugating the verb to have (kuala ni; also kukala ni in Kimbundu) in the present :\n[…]\nThe art of the language of Angola, author Father Pedro Dias, published in 1697\n[…]\nEmuseum article on Kimbundu\n[…]\nPanAfrican L10n page on Kimbundu Archived 2007-03-14 at the Wayback Machine\n[…]\nKimbundu people\n[…]\nEthnic groups of Angola"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_quimbunda",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Alfabeto fenício",
      "descricao": "Sistema de escrita dos fenícios, surgido no Levante no segundo milênio antes de Cristo e ancestral de muitos alfabetos."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "O alfabeto grego e o hebraico descendem do sistema de escrita de qual povo navegador do Mediterrâneo antigo?",
    "resposta": "Fenícios",
    "fonte": [
      "https://en.wikipedia.org/wiki/Phoenician_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        "situacao": "ok",
        "texto": "The Phoenician alphabet is an abjad (consonantal alphabet)  that was used across the Mediterranean civilization of Phoenicia for most of the 1st millennium BC. It was one of the first alphabets, attested in Canaanite and Aramaic inscriptions found across the Mediterranean basin. In the history of writing systems, the Phoenician script was also the first to have a fixed writing direction—while prev\n[…]\nFor example, the second letter of the Phoenician alphabet was based on the Egyptian hieroglyph for \"house\" (a sketch of a house); the Semitic word for 'house' was bet; hence the Phoenician letter was called bet and had the sound value b.\n[…]\nPhoenician was prolific. Many of the writing systems in use today can ultimately trace their descent to it, so ultimately to Egyptian hieroglyphs. The Latin, Cyrillic, Armenian and Georgian scripts are derived from the Greek alphabet, which evolved from Phoenician; the Aramaic alphabet, also descended from Phoenician, evolved into the Arabic and Hebrew scripts.\n[…]\nThe Aramaic alphabet, used to write Aramaic, is an early descendant of Phoenician. Aramaic, being the lingua franca of the Middle East, was widely adopted. It later split off into a number of related alphabets, including Hebrew, Syriac, and Nabataean, the latter of which, in its cursive form, became an ancestor of the Arabic alphabet. The Hebrew alphabet emerges in the Second Temple period, from around 300 BC, out of the Aramaic alphabet used in the Persian empire.\n[…]\nBy the 5th century BC, among Jews the Phoenician alphabet had been mostly replaced by the Aramaic alphabet as officially used in the Persian empire (which, like all alphabetical writing systems, was itself ultimately a descendant of the Proto-Canaanite script, though through intermediary non-Israelite stages of evolution).\n[…]\nOmniglot.com (Phoenician alphabet)\n[…]\nGNU FreeFont Unicode font family with Phoenician range in its serif face."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio",
        "situacao": "ok",
        "texto": "O alfabeto fenício (na verdade um consonantário, por ter apenas as consoantes e não as vogais), foi o sistema de escrita usado na Fenícia (atuais Síria, Líbano e norte de Israel) que viria a dar origem a grande parte dos sistemas atuais. Foi adaptado do anterior alfabeto semítico e seu registro mais antigo data de 1200 a.C. O sistema deriva da escrita protosinaítica, por sua vez derivada dos hieró\n[…]\nA inovação do alfabeto fenício está em sua natureza puramente fonética, na qual cada símbolo representa um som, que exige a memorização de apenas alguns caracteres, diferentemente dos sistemas logográficos hieroglíficos e cuneiformes (apesar de não totalmente logográficos), com o primeiro se valendo de caracteres fonéticos e do segundo se valendo de um sistema silábico[A partir de quando?\n[…]\nAntes ou depois do surgimento do sistema fenício?], em que cada caractere representava uma palavra, fazendo necessária a existência de milhares de caracteres (de forma similar aos caracteres chineses), que por sua vez exigiam alta especialização para serem aprendidos.\n[…]\nDentre os sistemas derivados do fenício, estão o alfabeto grego, a escrita itálica antiga e o aramaico (que por sua vez originaria os abjads hebraico e árabe). Não são exemplos de descendência aqueles sistemas do sul da Arábia e o etíope.\n[…]\nO alfabeto fenício é melhor descrito como um abjad porque só contém caracteres para representar consoantes, as vogais devendo ser inferidas, enquanto que um verdadeiro alfabeto representa tanto consoantes quanto vogais.\n[…]\nÉ interessante observar que, tendo origem em sistemas logográficos como o egípcio, o desenho das letras e seus nomes são acrofônicos, com o nome da letra iniciando com o som que ela representa e denunciando sua antiga significação pictográfica.\n[…]\nEscrita ugarítica",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Alfabeto hebraico",
      "descricao": "Sistema de escrita usado no hebraico, no iídiche e em outras línguas judaicas."
    },
    "angulo": "conexao",
    "tipo": "aberta",
    "pergunta": "A escrita hebraica e a árabe seguem a mesma direção ao longo da linha. Qual é ela?",
    "resposta": "Da direita para a esquerda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hebrew_alphabet",
      "https://en.wikipedia.org/wiki/Arabic_script"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hebrew_alphabet",
        "situacao": "ok",
        "texto": "The Hebrew alphabet or aleph-bet (Hebrew: אָלֶף־בֵּית עִבְרִי,[a] Alefbet ivri), known variously by scholars as the Ktav Ashuri, Jewish script, square script and block script, is a unicameral abjad script used in the writing of the Hebrew language. Alphabets based on the Hebrew script are used to write other Jewish languages, most notably Yiddish, Ladino, Judeo-Arabic, and Judeo-Persian. In modern\n[…]\nThe signet ring of God is \"Emess\" (Truth), which contains the first, middle, and last of the Hebrew Alphabet; for God is within everything, surrounds everything, and nothing is outside of Him\n[…]\nThe letters of the Hebrew alphabet have played varied roles in Jewish religious literature over the centuries, primarily in mystical texts.\n[…]\nSome sources in classical rabbinical literature seem to acknowledge the historical provenance of the currently used Hebrew alphabet and deal with them as a mundane subject (the Jerusalem Talmud, for example, records that \"the Israelites took for themselves square calligraphy\", and that the letters \"came with the Israelites from Ashur [Assyria]\"); others attribute mystical significance to the letters, connecting them with the process of creation or the redemption.\n[…]\nThe idea of the letters' creative power finds its greatest vehicle in the Sefer Yezirah, or Book of Creation, a mystical text of uncertain origin which describes a story of creation highly divergent from that in the Book of Genesis, largely through exposition on the powers of the letters of the alphabet: the letters are connected with the planets of universe, the astrology, with all parts of human-body and their \"cause-effect reactions\", the Sefirot and the ways of spiritual and material life; so Bereshit Rabbah, the Midrash of Genesis, teaches that God did the world with his wisdom, that is the Torah with the letters of Hebrew.\n[…]\nGesenius' Hebrew Grammar, §5 ff.\n[…]\nThe Hebrew Alphabet Chabad.org"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arabic_script",
        "situacao": "ok",
        "texto": "The Arabic script is the writing system used for Arabic (Arabic alphabet) and several other languages of Asia and Africa. It is the second-most widely used alphabetic writing system in the world (after the Latin script), the second-most widely used writing system in the world by number of countries using it, and the third-most by number of users (after the Latin and Chinese scripts).\n[…]\nUyghur alphabet\n[…]\nHebrew was written in Arabic letters in a number of places in the past\n[…]\nHarari, by the Harari people of the Harari Region in Ethiopia. Now uses the Geʻez and Latin alphabets\n[…]\nFor the West African languages—Hausa, Fula, Mandinka, Wolof and others—the Latin alphabet has officially replaced Arabic transcriptions for use in literacy and education\n[…]\nSomali (see wadaad's Arabic) has mostly used the Latin alphabet since 1972\n[…]\nSwahili (has used the Latin alphabet since the 19th century)\n[…]\nBelarusian (among ethnic Tatars; see Belarusian Arabic alphabet)\n[…]\nBosnian (only for literary purposes; currently written in the Latin alphabet; Text example: مۉلٖىمۉ سه ته‌بٖى بۉژه = Molimo se tebi, Bože (We pray to you, O God); see Arebica)\n[…]\nAdyghe language also known as West Circassian, is an official languages of the Republic of Adygea in the Russian Federation. It used Arabic alphabet before 1927\n[…]\nAzeri in Azerbaijan (now written in the Latin alphabet and Cyrillic script in Azerbaijan)\n[…]\nArabic Mathematical Alphabetic Symbols (1EE00–1EEFF)\n[…]\nMost languages that use alphabets based on the Arabic alphabet use the same base shapes. Most additional letters in languages that use alphabets based on the Arabic alphabet are built by adding (or removing) diacritics to existing Arabic letters. Some stylistic variants in Arabic have distinct meanings in other languages. For example, variant forms of kāf  ك ک ڪ  are used in some languages and sometimes have specific usages.\n[…]\nHistory of the Arabic alphabet"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_hebraico",
        "situacao": "ok",
        "texto": "O sistema de escrita hebraico, também conhecido como Alef-Beit, é o abjad utilizado para a escrita em hebraico, que é uma língua semítica pertencente à família das línguas afro-asiáticas, falada em Israel, foi criado por volta do século III a.C.. Também é utilizado para escrever o iídiche (ver Ortografia iídiche), língua germânica falada pelos judeus da Europa Oriental e Alemanha; e o ladino, dial\n[…]\nAssim como na escrita árabe, nesse alfabeto, os textos são escritos no sentido anti-horário ou seja, da direita para a esquerda.\n[…]\nNa língua hebraica, por exemplo, que usa a escrita hebraica, as vogais não são representadas geralmente na escrita do dia a dia. Isso quer dizer que um falante de hebraico consegue ler corretamente a palavra se ela for previamente conhecida.\n[…]\nA leitura correta do hebraico é da direita para a esquerda. Sua escrita também se inicia da direita para esquerda. O alfabeto não contem vogais, mas para facilitar foram-se criados os sinais massoréticos (relativos a vogais hebraicas).\n[…]\nNo hebraico antigo escrevia-se somente com consoantes, e as vogais eram somente pronunciadas, isto é, as vogais eram transmitidas através das gerações do povo judeu oralmente (e não de forma escrita), visto que a escrita da língua hebraica possuía apenas as consoantes. Os massoretas foram os responsáveis pela adição de vogais no texto hebraico moderno.\n[…]\nEm hebraico há cinco letras \"sofit\" (finais), ou seja, que são escritas de forma diferente quando aparecem no final da palavra. Somente a escrita é alterada, enquanto o som continua o mesmo: \"Chaf\", \"Mem\", \"Nun\", \"Pe\" e \"Tsade\".\n[…]\nNota: o alfabeto hebraico só utiliza consoantes, sendo que as vogais podem ser representadas por sinais diacríticos, chamados Nekudot (niqqud no singular), sinais massoréticos ou consoantes vocálicas (trocando o som da letra por uma determinada vogal).\n[…]\nAlfabeto Hebraico\n[…]\nLetras do Alfabeto hebraico",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Maltês",
      "descricao": "Língua semítica oficial de Malta, escrita com o alfabeto latino."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O maltês, língua oficial da União Europeia escrita com letras latinas, descende de qual outra língua?",
    "resposta": "Árabe",
    "distratores": [
      "Italiano",
      "Grego",
      "Latim"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Maltese_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Maltese_language",
        "situacao": "ok",
        "texto": "Maltese (Maltese: Malti, also L-Ilsien Malti or Lingwa Maltija) is a Central Semitic language derived from late medieval Sicilian Arabic. It is the only Semitic language officially written in the Latin script. It is spoken by the Maltese people and is a national language of Malta, and is the only official Semitic and Afroasiatic language of the European Union.\n[…]\nWhile many of these changes (chiefly the merger of emphatic consonants with their non-pharyngealised counterparts) are the result of European influence, others (such as the merger of ق /q/ into /ʔ/) are found in other varieties of Arabic, and may be either independent developments or features of the Sicilian Arabic dialect which Maltese descends from.\n[…]\nEnglish loanwords, which are becoming increasingly common, can make up between 6% and 20% of the Maltese vocabulary. This percentage discrepancy is due to the fact that a number of new English loanwords are sometimes not considered part of the official Maltese vocabulary, hence they are not included in certain dictionaries. Also, English loanwords of Latinate origin are very often Italianised, as discussed above.\n[…]\n\"Fridge\" is a common shortening of \"refrigerator\". \"Refrigerator\" is a Latinate word which could be imported into Maltese as rifriġeratur, whereas the Italian word is frigorifero or refrigeratore.\n[…]\nAs Malta is a multilingual country, the use of Maltese in the mass media is shared with other European languages, namely English and Italian. The majority of television stations broadcast from Malta in English or Maltese, although broadcasts from Italy in Italian are also received on the islands. Similarly, there are more Maltese-language radio programs than English ones broadcast from Malta, but again, Italian broadcasts are also picked up.\n[…]\nMaltese people\n[…]\nMaltese travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_maltesa",
        "situacao": "ok",
        "texto": "A língua maltesa (Lingwa Maltija; Malti) é uma das línguas semíticas e única dessa família de línguas que usa o alfabeto latino. É falada na ilhas de Malta, Gozo e Comino. São 387 mil os falantes como língua materna.\n[…]\nO maltês é a língua oficial e nacional de Malta, onde também o inglês goza de status oficial. É também uma das línguas oficiais da União Europeia, a única das línguas semíticas com essa consideração. O maltês tem origem no sículo-árabe, dialeto árabe que se desenvolveu na Sicília, sul da Itália e Malta. Cerca de metade do vocabulário vem do italiano e do siciliano, cerca de 20% vem do inglês. É a única língua semítica escrita na sua forma padrão com o alfabeto latino.\n[…]\nOutros ainda defendem a ideia do maltês ser derivado de dialetos da língua árabe falada na Tunísia.\n[…]\nOs maltese mais cultivadas nas letras tendem a utilizar mais dessas palavras de origem árabe, bem como usar dicção derivada delas.\n[…]\nA língua maltesa assimilou muitas das consoantes originais do árabe, em particular as enfáticas, e outras que são comuns em linguagens européias. Desse modo os sons árabes /d/, /ð/, /dˤ/ fundiram-se na maltês /d/. As vogais, porém, diferentes das três arábicas (/a i u/) para as cinco mais típicas das línguas européias (/a ɛ i o u/). Algumas vogais átonas e curtas foram eliminadas. A conhecida saudação árabe as salāmu 'alaykum se torna um cognato sliem għalikhom em maltês.\n[…]\nComo o vocabulário conhecido do sículo-árabe é limitado, a tabela a seguir compara os cognatos malteses com outras variantes da língua árabe:\n[…]\nA gramática maltesa é derivada do sículo-árabe, embora a pluralização (muitas com \"i\" ou s final) das palavras de origem externa siga a padrão das línguas românicas e do inglês.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Tuaregues",
      "descricao": "Povo berbere nômade do deserto do Saara e do Sahel."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que os tuaregues do Saara ficaram conhecidos como homens azuis?",
    "resposta": "O índigo das roupas tinge a pele",
    "fonte": [
      "https://en.wikipedia.org/wiki/Tuareg_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tuareg_people",
        "situacao": "ok",
        "texto": "The Tuareg people or the Tuaregs are an Amazigh ethnic group. They are traditionally nomadic pastoralists who principally inhabit the Sahara in an area stretching from southwestern Libya to southern Algeria, Niger, Mali, Burkina Faso, and as far as northern Nigeria, with smaller communities in Chad and Sudan known as the Kinnin. Their population is estimated to be 1.2 to 3 million worldwide.\n[…]\nTwo other Tuareg self-designations are Kel Tamasheq, meaning \"speakers of Tamasheq\", and Kel Tagelmust, meaning \"veiled people\" in allusion to the tagelmust garment that is traditionally worn by Tuareg men.\n[…]\nThe English exonym \"Blue People\" is similarly derived from the indigo color of the tagelmust veils and other clothing, which sometimes stains the skin underneath giving it a blueish tint. Another term for the Tuareg is Imuhagh or Imushagh, a cognate to the northern Berber self-name Imazighen.\n[…]\nIn Tuareg society women do not traditionally wear the face veil, whereas men do. The most famous Tuareg symbol is the tagelmust (also called éghéwed and, in Arabic, litham), sometimes referred to as a cheche (pronounced \"shesh\"), a combined turban and veil, often indigo-blue colored. The men's facial covering originates from the belief that such action wards off evil spirits. It may have related instrumentally from the need for protection from the harsh desert sands as well.\n[…]\nThe traditional indigo turban is still preferred for celebrations, and generally Tuareg wear clothing and turbans in a variety of colors.\n[…]\nSince prehistoric times, Tuareg peoples have been organising caravans for trading across the Sahara desert. The caravan in Niger from around Agadez to Fachi and Bilma is called Tarakaft or Taghlamt in Tamashek, and that in Mali from Timbuktu to Taoudenni, Azalay. These caravans used first oxen, horses and later camels as a means of transportation.\n[…]\nTuareg children picture"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tuaregues",
        "situacao": "ok",
        "texto": "Os tuaregues (em árabe: الطوارق) ou imuagues (Imuhagh) são um povo berbere constituído por pastores seminômades, agricultores e comerciantes. No passado, controlavam a rota das caravanas no deserto do Saara. Maioritariamente muçulmanos, são os principais habitantes da região sahariana do norte da África, distribuindo-se pelo sul da Argélia, norte do Mali, Níger, sudoeste da Líbia, Chade e, em meno\n[…]\nOs tuaregues chamam a si próprios de imuagues (Imuhagh; Imazaghan, Imashaghen ou Imazighan, \"os homens livres\"). A palavra para \"homem\" é Amajagh (variações: Amashegh, Amahagh) e, para \"mulher\", Tamajaq (variações: Tamasheq, Tamahaq, Timajaghen). Todas as variantes têm a mesma raiz linguística, expressando a noção de \"homem livre\", a qual exclui as castas de artesãos e escravos. Coletivamente, eles se identificam como Tamust - a nação.\n[…]\nOutra autodesignação, de origem mais recente, é Kel Tamasheq ou Kel Tamajaq (em tifinague, ⴾⴻⵍ ⵜⴰⵎⴰⵌⴰⵆ), que significa \"falantes de tamaxeque\". Também se encontram, na literatura etnográfica do início do século XX, as expressões Kel Tagelmust, \"povo de véu\" e \"homens azuis\".\n[…]\nSão os homens que não dispensam um véu azul-índigo característico, o Tagelmust, que usam mesmo entre os familiares. Dizem que os protege dos maus espíritos. Tem a função prática de proteger contra a inclemência do sol do deserto e das rajadas de areia durante suas viagens em caravana. Usam como um turbante que cobre também todo o rosto, exceto os olhos.\n[…]\nCom o retorno em 2011 de um grande número de tuaregues que antes apoiavam o ditador Gaddafi, até então integrados na “legião islâmica”, agora integrantes do Movimento Nacional de Libertação de Azauade (MNLA), resultou na a última rebelião em 2012. também conhecida como “rebelião tuaregue de 2012” foi uma guerra de independência contra o governo do Mali que ocorreu na região de Azauade ao norte do país.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Alfabeto cirílico mongol",
      "descricao": "Versão do alfabeto cirílico adotada para escrever a língua mongol na Mongólia no século vinte."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "No século vinte, a Mongólia trocou sua escrita tradicional pelo alfabeto cirílico. Sob influência de que país isso aconteceu?",
    "resposta": "União Soviética",
    "fonte": [
      "https://en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet",
        "situacao": "ok",
        "texto": "The Mongolian Cyrillic alphabet (Mongolian: Монгол Кирилл үсэг, Mongol Kirill üseg or Кирилл цагаан толгой, Kirill tsagaan tolgoi) is the primary writing system used for the Mongolian language in modern Mongolia.\n[…]\nThe Cyrillic alphabet is the most recent of the many writing systems that have been used for Mongolian. It uses the same characters as the Russian alphabet except for two additional characters: Өө ⟨ö⟩ and Үү ⟨ü⟩.\n[…]\nThe alphabet was  introduced in 1941, and due to strong Soviet influence, the Mongolian People's Republic formally  adopted the script on January 1, 1946.\n[…]\nIn March 2020, the Mongolian government announced plans to use both Cyrillic and the traditional Mongolian script in official documents by 2025.\n[…]\nIn China, the Cyrillic alphabet is also used by Chinese for learning the modern Mongolian language, as well as by some Mongols in Inner Mongolia to demonstrate their ethnic identity.\n[…]\nThe Cyrillic alphabet used for Mongolian is as follows (with borrowed sounds in parentheses):\n[…]\nЩ is never used in Mongolian and only used in Russian words containing the letter. It is pronounced identically to Ш, and is often omitted when teaching the Cyrillic alphabet. Sometimes, Russian loanwords with Щ will be spelled with Ш instead: борш, Хрушев. The difference between [e~i] might be dialectal, while the difference between ɵ~o is positional.\n[…]\nThis usually affects when transcribing places and foreign names into Mongolian Cyrillic, such as Steve Jobs is spelled as Стив Жобс (rather than Стив Джобс) and Joe Biden is spelled as  Жо Байден (rather than Джо Байден).\n[…]\nThe standard Mongolian Cyrillic keyboard layout for personal computers is as follows:\n[…]\nMongolian Latin alphabet\n[…]\nMongolian Braille\n[…]\nMongolian name"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Alfabeto vietnamita",
      "descricao": "Sistema de escrita do vietnamita, baseado no alfabeto latino e desenvolvido por missionários europeus no século dezessete."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Por que o vietnamita escreve o som de nh com as mesmas letras usadas no português?",
    "resposta": "Influência de missionários portugueses",
    "fonte": [
      "https://en.wikipedia.org/wiki/Vietnamese_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vietnamese_alphabet",
        "situacao": "ok",
        "texto": "The Vietnamese alphabet (Vietnamese: chữ Quốc ngữ, lit. 'script of the national language' [t͡ɕɨ˦ˀ˥ kuək̚˧˦ ŋɨ˦ˀ˥] ) is a Latin-based modern writing script for the Vietnamese language. It has spelling conventions derived from the orthography of Romance languages such as Portuguese, Italian, and French. It was originally developed by the Portuguese missionary Francisco de Pina and other Jesuits in t\n[…]\nThe alphabet is largely derived from Portuguese with some influence from French, although the usage of ⟨gh⟩ and ⟨gi⟩ was borrowed from Italian (compare ghetto, Giuseppe) and that for ⟨c, k, qu⟩ from (Latinised) Greek and Latin (compare canis, kinesis, quō vādis), mirroring the English usage of these letters (compare cat, kite, queen).\n[…]\nAs early as 1620, with the work of Francisco de Pina, Portuguese and Italian Jesuit missionaries in Vietnam began using Latin script to transcribe the Vietnamese language as an assistance for learning the language. The work was continued by the Avignonese Alexandre de Rhodes.\n[…]\nBuilding on previous dictionaries by Gaspar do Amaral and António Barbosa, Rhodes compiled the Dictionarium Annamiticum Lusitanum et Latinum, a Vietnamese–Portuguese–Latin dictionary, which was later printed in Rome in 1651, using their spelling system. These efforts led eventually to the development of the present Vietnamese alphabet. For 200 years, chữ Quốc ngữ was used within the Catholic community.\n[…]\nThe French had to reluctantly accept the use of chữ Quốc ngữ to write Vietnamese since this writing system, created by Portuguese missionaries, is based on Portuguese orthography, not French.\n[…]\nFrench, which left a mark on the Vietnamese language in the form of loanwords and other influences, is no longer as widespread in Vietnam, with English or International English the preferred European language for commerce.\n[…]\nPortuguese orthography\n[…]\nVietnamese punctuation\n[…]\nVietnamese Unicode FAQs"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Braile",
      "descricao": "Sistema de escrita tátil em pontos em relevo criado por Louis Braille para pessoas cegas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O braile foi inspirado numa escrita em relevo criada para que soldados pudessem fazer o quê?",
    "resposta": "Ler mensagens no escuro",
    "fonte": [
      "https://en.wikipedia.org/wiki/Braille",
      "https://en.wikipedia.org/wiki/Night_writing"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braille ( BRAYL; French: [bʁaj] ) is a tactile writing system used by blind or visually impaired people. It can be read either on embossed paper or by using refreshable braille displays that connect to computers and smartphone devices. Braille can be written using a slate and stylus, a braille writer, an electronic braille notetaker or with the use of a computer connected to a braille embosser. Fo\n[…]\nHowever, some codes have quite different tactile versus visual interpretations and most are not even defined in Braille ASCII.)\n[…]\nThe Unicode standard encodes 6-dot and 8-dot braille glyphs according to their binary appearance, rather than following their assigned numeric order. Dot 1 corresponds to the least significant bit of the low byte of the Unicode scalar value, and dot 8 to the high bit of that byte.\n[…]\nThe Unicode block for braille is U+2800 ... U+28FF. The mapping of patterns to characters etc. is language dependent: even for English for example, see American Braille and English Braille.\n[…]\nEvery year on 4 January, World Braille Day is observed internationally to commemorate the birth of Louis Braille and to recognize his efforts. Although the event is not considered a public holiday, it has been recognized by the United Nations as an official day of celebration since 2019.\n[…]\nThe 200th anniversary of the launch of braille was celebrated in 2024. In the UK, the Royal National Institute of Blind People has held celebrations from September 2024 until August 2025.\n[…]\nThere is a variety of contemporary electronic devices that serve the needs of blind people that operate in Braille, such as refreshable braille displays and braille e-books that use different technologies for transmitting graphic information of different types (pictures, maps, graphs, texts, etc.).\n[…]\nBraille Part 1 Text To Speech For The Visually Impaired YouTube\n[…]\nBraille information and advice – Sense UK\n[…]\nBraille at Omniglot"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Night_writing",
        "situacao": "ok",
        "texto": "Night writing is the name given to a form of tactile writing invented by Charles Barbier de la Serre (1767–1841). It is one of a dozen forms of alternative writing presented in a book published in 1815: Essai sur divers procédés d'expéditive française, contenant douze écritures différentes, avec une planche pour chaque procédé (Essay on various processes of French expedition, containing twelve dif\n[…]\nA student at the school, Louis Braille, used the tools and Barbier's idea of communicating with raised dots in a form of code, and developed a more compact and flexible system for communications, Braille.\n[…]\nIn 1829, Louis Braille published Procédé pour écrire les paroles, la musique et le plain-chant au moyen de points, à l’usage des aveugles et disposés pour eux (Process for writing words, music and plainsong by way of dots, for the use of, and arranged for, the blind). This was based on Barbier's invention but greatly improved its legibility, and the publication marked the official birth of the Braille alphabet.\n[…]\nLouis Braille revised the publication in 1837, and this second edition contained the system now known by the name Braille.\n[…]\nThe characters of Night Writing can be partially represented by the existing Braille allocation in Unicode. Additional patterns needed for representing the remaining Night Writing characters can be found in the Under-ConScript Unicode Registry, an unofficial but widely supported Private Use agreement for Unicode Private Use Areas."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Braille",
        "situacao": "ok",
        "texto": "Braile ou braille é um sistema de escrita tátil utilizado por pessoas cegas ou com baixa visão. É tradicionalmente escrito em papel relevo. Os usuários do sistema Braille podem ler em telas de computadores e em outros suportes eletrônicos graças a um mostrador em braile atualizáveis. Eles podem escrever em braile com reglete e punção, máquina de escrever em braille, notetaker em braille ou computa\n[…]\nO Braille recebeu este nome devido ao seu criador Louis Braille, que perdeu a visão em um acidente na infância. Em 1824, Braille desenvolveu aos 15 anos um código para o alfabeto francês em uma melhoria para a escrita noturna. Em 1829, ele publicou o sistema, que incluía a notação musical. Em 1837, ele publicou uma segunda revisão, que foi a primeira forma binária de escrita desenvolvida na era moderna.\n[…]\nOs caracteres Braille são pequenos blocos retangulares chamados de células, que contêm minúsculas protuberâncias palpáveis chamadas de pontos levantados. O número e a disposição destes pontos distinguem os caracteres uns dos outros. Já que os vários alfabetos Braille originados como códigos de transcrição de sistemas de escrita impressa, os mapeamentos (conjuntos de designações de caracteres) variam de língua para língua.\n[…]\nO Braille foi baseado em um código militar tátil conhecido como \"escrita noturna\", desenvolvida por Charles Barbier em resposta ao pedido de Napoleão Bonaparte por um meio para os soldados se comunicarem entre si silenciosamente à noite e sem uma fonte de luz. No sistema de Barbier, conjuntos de 12 pontos em relevo codificavam 36 sons diferentes. Isto provou ser muito difícil para os soldados reconhecerem os códigos pelo toque, e foi rejeitado pelos militares.\n[…]\nPara leitores cegos, o Braille é um sistema de escrita independente, ao invés de um código de ortografia impressa.\n[…]\nCurso Virtual gratuito de Braille - Universidade de São Paulo",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Ladino",
      "descricao": "Língua judeu-espanhola falada pelos judeus sefarditas."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O ladino, língua dos judeus sefarditas, se espalhou pelo Mediterrâneo depois que esse povo foi expulso de qual país em 1492?",
    "resposta": "Espanha",
    "fonte": [
      "https://en.wikipedia.org/wiki/Judaeo-Spanish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judaeo-Spanish",
        "situacao": "ok",
        "texto": "Judaeo-Spanish (alternatively spelled Judeo-Spanish; autonym Djudeo-Espanyol, Hebrew script: גֿודֿיאו־איספאנייול), also known as Ladino, Judezmo, or Spaniolit, is a Romance language derived from Castilian Old Spanish.\n[…]\nHistorically, the Rashi script and its cursive form Solitreo have been the main orthographies for writing Ladino. However, today it is mainly written with the Latin alphabet, though some other alphabets such as Hebrew and Cyrillic are still in use. Judaeo-Spanish has been known also by other names, such as: Español (Espanyol, Spaniol, Spaniolish, Espanioliko), Judió (Judyo, Djudyo) or Jidió (Jidyo, Djidyo), Judesmo (Judezmo, Djudezmo), Sefaradhí (Sefaradi) or Ḥaketía (in North Africa).\n[…]\nFollowing the 1490s expulsion from Spain and Portugal, most of the Iberian Jews resettled in the Ottoman Empire. Jews in the Ottoman Balkans, Western Asia (especially Turkey), and North Africa (especially Morocco) developed their own Romance dialects, with some influence from Hebrew and other languages, which became what is now known as Judaeo-Spanish.\n[…]\nEsther Benbassa and Aron Rodrigue, authors of Sephardi Jewry: A History of the Judeo-Spanish Community, 14th–20th Centuries, wrote that the AIU institutions \"gallicized\" people who attended. As time progressed, Judaeo-Spanish language and culture declined. Although Mary Altabev in 1994 observed limited use of Ladino at home among educated Turkish Jews, Melis Alphan wrote in Hürriyet in 2017 that the Judaeo-Spanish language in Turkey was heading to extinction.\n[…]\nFolklorists have been collecting romances and other folk songs, some dating from before the expulsion. Many religious songs in Judaeo-Spanish\n[…]\nLadino Center\n[…]\nJudeo-Spanish (Ladino) at Orbis Latinus"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Judeu-espanhol",
        "situacao": "ok",
        "texto": "O judeu-espanhol (em hebraico: גֿודיאו-איספאנייול; romaniz.: Djudeo-espanyol) ou ladino (em hebraico: לאדינו; romaniz.: ladino) é uma língua derivada do espanhol medieval que surgiu entre os judeus que migraram para a Península Ibérica, chamados sefarditas, após a dominação romana da Palestina. Estima-se que ainda seja falado por cerca de 40 mil indivíduos de comunidades sefarditas concentradas, p\n[…]\nAntes da expulsão em 1492, os sefarditas usavam o endônimo espanyol, o qual vem de hispaniolus, indicando que sua variação do latim vulgar era falada na Espanha. Depois, no Império Bizantino, era usado o termo franko, o qual significa \"língua do Oeste da Europa\", indicando um certo grau de esquecimento sobre a origem ibérica da língua.\n[…]\nMais tarde, no século XVIII, os sefarditas começaram a usar o endônimo djudezmo, que, originalmente, veio de \"iudaismus\" (judaísmo), mas significava \"língua de judeus\". Porém, no século XX, djudezmo foi forçadamente apagado pelo Holocausto e, sob influência acadêmica do Oeste europeu, substituído pelos falantes por exônimos como djudeo-espanyol (judeu-espanhol) ou apenas espanyol, que apagam as distinções entre o espanhol e o ladino.\n[…]\nEm 1492, os sefarditas foram expulsos pelo Decreto de Alhambra dos Reis Católicos da Espanha e tiveram outra diáspora, a qual marcou a fase do judeu-espanhol médio. Eles se dispersaram pela região mediterrânea, mas uma maior parte migrou para o Império Otomano, onde o judeu-espanhol se separou totalmente do castelhano e evoluiu para um idioma próprio.\n[…]\nDepois da Segunda Guerra Mundial, os judeus na antiga região otomana se espalharam pelo Ocidente, alcançando a França, os Estados Unidos e, principalmente, Israel, onde, em 1997, foi fundada a Autoridade Nacional do Ladino, criada com o propósito de preservar o judeu-espanhol.\n[…]\nOs sons consonantais exemplificados com outras línguas não têm correlatos no português.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Africâner",
      "descricao": "Língua germânica derivada do holandês, falada na África do Sul e na Namíbia."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "O africâner nasceu da fala de colonos que uma companhia de comércio instalou no Cabo, no século dezessete. Que companhia era essa?",
    "resposta": "Companhia Holandesa das Índias Orientais",
    "fonte": [
      "https://en.wikipedia.org/wiki/Afrikaans",
      "https://en.wikipedia.org/wiki/Dutch_Cape_Colony"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Afrikaans",
        "situacao": "ok",
        "texto": "Afrikaans is a West Germanic language spoken in South Africa, Namibia, and to a lesser extent Botswana, Zambia, Zimbabwe, and also Argentina, where a group in Sarmiento speaks a Patagonian dialect. It emerged during the late 19th century as a fusion of Dutch dialects (mainly Hollandic and Zeelandic) spoken by the Dutch settlers in South Africa since the 17th century and the Dutch-based creole lang\n[…]\nAfrikaans speakers experience higher employment rates than other South African language groups, though as of 2012 half a million were unemployed.\n[…]\nSome native speakers of Bantu languages and English also speak Afrikaans as a second language. It is widely taught in South African schools, with about 10.3 million second-language students.\n[…]\nAfrikaans is offered at many universities outside South Africa, including in the Netherlands, Belgium, Germany, Poland, Russia and the United States.\n[…]\nPatagonian Afrikaans is a distinct dialect of Afrikaans that is spoken by the 650-member South African community of Argentina, in the region of Patagonia.\n[…]\nNamibian Afrikaans is a variety of Afrikaans spoken in Namibia. The country was governed by South Africa until 1990, which had favoured Afrikaans. Before that, Dutch had been introduced when the Dutch occupied Walvis Bay and the surrounding area.\n[…]\nMorton in his book: In Search of South Africa (London, 1948). The Huguenots were responsible for a great linguistic contribution to Afrikaans, particularly in terms of military terminology as many of them fought on the battlefields during the wars of the Great Trek.\n[…]\nAfrikaans speaking population in South Africa\n[…]\nList of Afrikaans singers\n[…]\nRoberge, P. T. (2002), \"Afrikaans – considering origins\", Language in South Africa, Cambridge, England: Cambridge University Press, ISBN 0-521-53383-X\n[…]\nAfrikaans Literature and Language Web dossier African Studies Centre, Leiden (2011) Archived 18 May 2013 at the Wayback Machine"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Dutch_Cape_Colony",
        "situacao": "ok",
        "texto": "The Dutch Cape Colony (Dutch: Nederlandse Kaapkolonie), officially known as the Cape of Good Hope Waystation (Dutch: Tussenstation Kaap de Goede Hoop), was a colony of the Dutch East India Company (VOC) and Batavian Republic in Southern Africa. Centered on the Cape of Good Hope, from where it derived its name, it was founded in 1652 by a VOC expedition under Jan van Riebeeck to serve as a re-suppl\n[…]\nTraders of the United East India Company (VOC), under the command of Jan van Riebeeck, were the first people to establish a European colony in South Africa. The Cape settlement was built by them in 1652 as a re-supply point and way-station for United East India Company vessels on their way back and forth between the Netherlands and Batavia (Jakarta) in the Dutch East Indies.\n[…]\nNine of the best applicants were selected to use the land for agricultural purposes. The freemen or free burghers as they were afterwards termed, thus became subjects, and were no longer servants, of the company.\n[…]\nAfter the first settlers spread out around the Company station, nomadic European livestock farmers, or Trekboeren, moved more widely afield, leaving the richer, but limited, farming lands of the coast for the drier interior tableland. There they contested still wider groups of Khoe-speaking cattle herders for the best grazing lands.\n[…]\nThe United East India Company transferred its territories and claims to the Batavian Republic (the Dutch sister republic established by France) in 1798, then ceased to exist in 1799. Improving relations between Britain and Napoleonic France, and its vassal state the Batavian Republic, led the British to hand the Cape Colony over to the Batavian Republic in 1803, under the terms of the Treaty of Amiens.\n[…]\nSimon van der Stel's journal and daily record of his journey to Namaqualand with the Dutch East India Company, 1685, from the Library of Trinity College Dublin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_afric%C3%A2ner",
        "situacao": "ok",
        "texto": "O africâner, africânder, africanse, africanês ou afrikaans é uma língua do ramo germânico do grupo indo-europeu falada na África do Sul e na Namíbia. Desenvolveu-se durante o período de colonização neerlandesa na África, o que levou ao desenvolvimento da língua, que é baseada no neerlandês.\n[…]\nO africâner (afrikaans) surgiu na região do Cabo da Boa Esperança na África do Sul como resultado da interação entre os colonos europeus, na sua maioria de origem neerlandesa — misturados com franceses e alemães —, a população africana local e a força de trabalho asiática (geralmente malaia) trazida para a região pela Companhia Neerlandesa das Índias Orientais.\n[…]\nA Companhia Neerlandesa das Índias Orientais trouxe também para a região muitos trabalhadores malaios, indonésios e malgaxes, que aprenderam esta língua rapidamente, incorporando-lhe uma série de vocábulos dos seus idiomas originais, e contribuindo para uma simplificação estrutural do afrikaans. Essa foi também a língua de contato com as populações africanas locais, pertencentes aos povos coissãs. Uma pesquisa feita por J. A.\n[…]\nInfluências do francês e do cói, assim como de dialetos baixos-francônios da Flandres ocidental e de vilas isoladas no centro da província da Holanda (Garderen) foram sugeridas como possíveis origens da dupla negação africâner, mas nenhuma dessas sugestões até hoje se mostrou plenamente satisfatória.\n[…]\nEm 1996 por exemplo, a South African Broadcasting Corporation (SABC) reduziu o tempo no ar da sua programação televisiva em africâner, enquanto a companhia aérea Suid-Afrikaanse Lugdiens mudou o seu nome para South African Airways. De forma semelhante, as missões diplomáticas sul-africanas no exterior agora exibem o nome do país em inglês e no idioma local, mas não mais em africâner.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Hangul",
      "descricao": "Alfabeto da língua coreana, criado no século quinze durante a dinastia Joseon."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "Com que objetivo foi criado o alfabeto coreano hangul, no século quinze?",
    "resposta": "Facilitar a alfabetização do povo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hangul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "The Korean alphabet is the modern writing system for the Korean language. It has gone by a variety of names, such as Chosŏn'gŭl in North Korea, Hangul internationally, and Hangeul in South Korea. The script's original name was Hunminjeongeum.\n[…]\nThis era saw numerous landmark firsts for Hangul. Scottish missionary John Ross's landmark 1877 work Corean Primer (조선어 첫걸음) saw the introduction of spaces and horizontal writing for Hangul. In 1888, a Morse code specification for Hangul was developed for the first time by Korean scholar Kim Hagu. In 1897, the first Braille encoding for Hangul, called Pyongyang Point (평양점자), was invented by Canadian missionary Rosetta Sherwood Hall. This period also saw the rise of newspapers in Korea.\n[…]\n1945 saw the liberation of Korea from colonial rule, as well as its division. Soon after the liberation, use of Hangul began to diverge between the Koreas. Both Koreas continued orthographic reform efforts. North Korea's current Compendium of Korean Language Norms was published in 1966 and revised a number of times. South Korea's Hangeul Orthography was published in 1989. The South Korean language regulator National Institute of Korean Language was established in 1991.\n[…]\nHangul orthography has changed over time. Since 1948, North and South Korea have used different orthographies. However, because their current orthographies are based on the 1933 Unified Hangul Orthography, they are still relatively similar. North Korea now uses the Compendium of Korean Language Norms and South Korea the Hangeul Orthography.\n[…]\nIt saw renewed activity and support in the early 2020s. Hangul has since continued to be taught and used in the area.\n[…]\nMedia related to Hangul at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "O alfabeto coreano, conhecido como hangul ou hangeul (em coreano: 한글, em hanja: 韓㐎) na Coreia do Sul e Chosŏn'gŭl na Coreia do Norte (em coreano: 조선글), é um sistema de escrita da língua coreana criado pelo Rei Sejong, o Grande, em 1443.\n[…]\nO nome Hangul surgiu de um neologismo criado pelo linguista Chu Si-gyŏng 추시경 (1876-1914), membro do movimento de reforma e promoção da língua e escrita coreanas. Até a década de 1910, o alfabeto também era conhecido como jeongeum 정음 (sons corretos), eonmun 언문 (escrita vulgar) ou gukmun 국문 (escrita nacional), sendo o nome original da escrita coreana Hunmin jeongeum 훈민정음.\n[…]\nO projeto foi completado no fim de dezembro de 1443 ou janeiro de 1444, e descrito em 1446 em um documento intitulado HunminJeongeum (\"Os sons apropriados para a educação do povo\"), que deu nome ao alfabeto em si. A data da publicação do HunminJeongeum, 9 de outubro, tornou-se o Dia de Hangul na República da Coreia. A Coreia do Norte celebra o mesmo evento no dia 15 de janeiro.\n[…]\n(Os exemplos têm como objetivo facilitar a leitura. Porem a ortografia é inalterada.)\n[…]\nNeste exemplo, estão as diferentes formas da frase \"Eu sou coreano\":\n[…]\nAlém do coreano, o hangul é usado para a língua jeju. Os especialistas coreanos estão atualmente tentando difundir o uso deste alfabeto para línguas não coreânicas. A primeira iniciativa ocorreu em 2009, na Indonésia, na ilha de Buton, onde a etnia Buton, estabelecida em torno de Bau-Bau, escolheu o hangul como escrita para transcrever sua língua oral, o cia-cia, e salvar essa língua.\n[…]\nDia de Hangul\n[…]\nRomanização revisada da língua coreana\n[…]\nLista de sílabas do Hangul moderno\n[…]\nPronúncia do alfabeto Hangul com romanização na língua portuguesa (em português)\n[…]\nHistória e Linguística do Hangul",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Dia Internacional da Língua Materna",
      "descricao": "Data comemorada em 21 de fevereiro, proclamada pela UNESCO para promover a diversidade linguística."
    },
    "angulo": "causa",
    "tipo": "aberta",
    "pergunta": "A data de 21 de fevereiro, Dia Internacional da Língua Materna, homenageia estudantes mortos em 1952 defendendo qual idioma?",
    "resposta": "Bengali",
    "fonte": [
      "https://en.wikipedia.org/wiki/International_Mother_Language_Day"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/International_Mother_Language_Day",
        "situacao": "ok",
        "texto": "International Mother Language Day is a worldwide annual observance held on 21 February to promote awareness of linguistic and cultural diversity and to promote multilingualism. First announced by UNESCO on 17 November 1999, it was formally recognized by the United Nations General Assembly with the adoption of UN resolution 56/262 in 2002.\n[…]\nIn Bangladesh, 21 February 1952 is the anniversary of the day when the Bengalis of the then-Pakistani province of East Bengal (which is now the independent state of Bangladesh) fought for recognition of their Bengali language as an official central state language instead of a provincial language. The day is also observed by Indian Bengalis in the states of West Bengal, Assam, Jharkhand, and Tripura, as well as in the union territory of the Andaman and Nicobar Islands and diaspora communities.\n[…]\nIn 1948, the government of Pakistan declared Urdu to be the sole national language of Pakistan, even though Bengali, or Bangla, was spoken by the majority of people combining East Pakistan and West Pakistan. The East Pakistan people protested since the majority of the population was from East Pakistan and their mother language was Bangla. They demanded Bangla to be at least one of the national languages, in addition to Urdu.\n[…]\nInternational Mother Language Day is a national holiday in Bangladesh. The resolution was suggested by Rafiqul Islam and Abdus Salam, Bengalis living in Vancouver, Canada. They wrote a letter to Kofi Annan on 9 January 1998 asking him to take a step to save the world's languages from extinction by declaring an International Mother Language Day. Rafiq proposed the date as 21 February to commemorate the 1952 killings in Dhaka during the Language Movement.\n[…]\n1952: Bengali language movement\n[…]\nEdmonton observed International Mother Language Day on 21 February 2017.\n[…]\nFirst language"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_Internacional_da_L%C3%ADngua_Materna",
        "situacao": "ok",
        "texto": "O Dia Internacional da Língua Materna é uma comemoração mundial anual realizada em 21 de fevereiro para promover a conscientização sobre a diversidade linguística e cultural e para promover o multilinguismo. Anunciado pela primeira vez pela UNESCO em 17 de novembro de 1999, foi formalmente reconhecido pela Assembleia Geral das Nações Unidas com a adoção da resolução 56/262 da ONU em 2002.\n[…]\nO dia 21 de fevereiro foi declarado o Dia Internacional da Língua Materna pela UNESCO em 1999. Tem sido celebrado em todo o mundo desde 21 de fevereiro de 2000. A declaração foi feita em homenagem ao Movimento da Língua feito pelos bangladeshianos (então paquistaneses orientais).\n[…]\nPara demolir o protesto, o governo do Paquistão proibiu reuniões públicas e comícios. Os estudantes da Universidade de Dhaka, com o apoio do público em geral, organizaram grandes comícios e reuniões. Em 21 de fevereiro de 1952, a polícia abriu fogo contra comícios. Salam, Barkat, Rafiq, Jabbar e Shafiur morreram, com centenas de outros feridos. Este é um incidente raro na história, onde as pessoas sacrificaram suas vidas por sua língua materna.\n[…]\nO Dia Internacional da Língua Materna é um feriado nacional em Bangladesh. A resolução foi sugerida por Rafiqul Islam e Abdus Salam, bengalis que vivem em Vancouver, Canadá. Eles escreveram uma carta a Kofi Annan em 9 de janeiro de 1998 pedindo-lhe que tomasse um passo para salvar as línguas do mundo da extinção, declarando um Dia Internacional da Língua Materna. Rafiq propôs a data para 21 de fevereiro para comemorar os assassinatos de 1952 em Dhaka durante o Movimento da Língua.\n[…]\nFinalmente, em 17 de novembro de 1999, a 30ª Assembleia Geral da UNESCO decidiu por unanimidade que \"21 de fevereiro seja proclamado Dia Internacional da Língua Materna em todo o mundo para comemorar os mártires que sacrificaram suas vidas neste mesmo dia em 1952\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Povo cigano",
      "descricao": "Povo romani, de origem no norte do subcontinente indiano, espalhado pela Europa e pelas Américas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Estudos da língua romani indicam que o povo cigano tem origem em qual região do mundo?",
    "resposta": "Norte da Índia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Romani_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romani_people",
        "situacao": "ok",
        "texto": "The Romani, also spelled Romany or Rromani ( ROH-mə-nee or  ROM-ə-nee), colloquially known as the Roma (sing.: Rom), are an Indo-Aryan ethnic group who traditionally led a nomadic, itinerant lifestyle. Linguistic and genetic evidence suggests that the Romani originated in northwestern regions of the Indian subcontinent. Their subsequent westward migration, possibly in waves, is now believed by his\n[…]\nAlso in 2012, another study reported that the \"Roma came from a single group that left northwestern India about 1,500 years ago\". According to the study, they reached the Balkans about 900 years ago and subsequently spread throughout Europe. The team also found that the Roma displayed genetic isolation, as well as \"differential gene flow in time and space with non-Romani Europeans\".\n[…]\nGenetic evidence dates the migration from India to medieval times. The Roma were described as \"a conglomerate of genetically isolated founder populations\", while common Mendelian disorders among Roma indicates \"a common origin and founder effect\". A 2020 whole-genome study reported the northern Indian origins, and substantial Balkan and Middle Eastern ancestry amongst Roma in Central and Eastern Europe.\n[…]\nDamjanovic stated that if India were to accept this proposal, it would mark the first step toward countering negative perceptions surrounding the Roma and that this could provide India with cultural, economic, and political benefits. The conference ended with a recommendation to the Government of India to recognize the Romani community as a part of the Indian diaspora.\n[…]\nAs the Roma fled the Muslim conquests of Mahmud of Ghazni in Northern India during the early 11th century, they arrived in the Eastern Roman Empire by the 12th century.\n[…]\nSaint Sarah is now increasingly considered as \"a Romani Goddess, the Protectress of the Roma\" and an \"indisputable link with Mother India\".\n[…]\nInternational Romani Union"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ciganos",
        "situacao": "ok",
        "texto": "Romani é o endônimo (também conhecidos por: roma, ciganos, boêmios, gitanos, calons, quicos, calés ou calós) que designa um conjunto de populações que têm em comum a origem indiana e a língua romani, originária do noroeste do subcontinente indiano.\n[…]\nOs povos romanis originaram-se de populações do noroeste do subcontinente indiano, das regiões do Panjabe e do Rajastão, obrigadas a emigrar em direção ao ocidente, possivelmente em ondas, entre c. 500 e 1000 d.C. Iniciaram a sua migração para a Europa e Norte da África, pelo planalto iraniano, no século XI, por volta de 1050. A saída da Índia provavelmente ocorreu no contexto das invasões do sultão Mahmud de Gásni (região do atual Afeganistão).\n[…]\nEstudos genéticos confirmam a Índia como sendo o local de origem dos romanis. De acordo com um estudo genético, a análise de linhagens uniparentais revela com consistência o Noroeste da Índia como sendo a região de origem dos romanis. Um estudo genético de 2012 também chegou à mesma conclusão, tendo inferido que a origem dos romanis teria se dado por volta de 1500 anos atrás, sendo que após rápida migração os romanis teriam alcançado a Europa aproximadamente 900 anos atrás.\n[…]\nUm estudo genético de 2011, focado no estudo de linhagens maternas (DNA mitocondrial), também verificou a origem indiana dos romanis, tendo apontado o estado indiano do Panjabe como a fonte de origem deles.\n[…]\nA hipótese teve ampla circulação entre seus colegas acadêmicos. Em 1782, Rüdiger publicou um artigo intitulado \"Sobre o idioma indiano e a origem dos romanis\", no qual compara as estruturas gramaticais do romani com as do hindustani. Trabalhos seguintes deram apoio à hipótese de que a língua romani possuía a mesma origem das línguas indo-arianas do norte da Índia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Nheengatu",
      "descricao": "Língua de base tupi, descendente da língua geral amazônica, falada no Amazonas."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que município do Amazonas o nheengatu, o tucano e o baníua são línguas cooficiais ao lado do português?",
    "resposta": "São Gabriel da Cachoeira",
    "fonte": [
      "https://en.wikipedia.org/wiki/S%C3%A3o_Gabriel_da_Cachoeira",
      "https://en.wikipedia.org/wiki/Nheengatu_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/S%C3%A3o_Gabriel_da_Cachoeira",
        "situacao": "ok",
        "texto": "São Gabriel da Cachoeira is a municipality located on the northern shore of the Rio Negro River, in the region of Cabeça do Cachorro, Amazonas state, Brazil.\n[…]\nThe city was founded in 1668 as an aldea by Franciscan Friar Teodósio da Veiga and Captain Pedro da Costa Favela on the Rio Negro, near the mouth of the Rio Aruím. In 1761, a fort was built on the location, and the settlement became the town of São Gabriel da Cachoeira.\n[…]\nIn 2003, Nheengatu became an official language, with Baníwa, Yepá-masã, and Portuguese in São Gabriel da Cachoeira.\n[…]\nMost of the inhabitants of São Gabriel da Cachoeira are indigenous people. The city's population is somewhere around 13,000, but the entire region has 51,795 people (2022), scattered over 109,185 km2, mostly indigenous peoples in surrounding tribes and villages.\n[…]\nSão Gabriel da Cachoeira is the third largest municipality in Brazil by territorial area, and the second largest in Amazonas. It is also the northernmost city of Amazonas, and part of its territory is within the Pico da Neblina National Park. However, the peak itself is located in Santa Isabel do Rio Negro, and São Gabriel da Cachoeira is in the lowlands. It is not far from the equator, and the climate is correspondingly hot and humid.\n[…]\nThe city is served by São Gabriel da Cachoeira Airport.\n[…]\nThe municipality contains the 36,900-hectare (91,000-acre) Morro dos Seis Lagos Biological Reserve, created in 1990.\n[…]\nThe municipality also contains the 809,000-hectare (2,000,000-acre) Cué-cué/Marabitanas Indigenous Territory, declared in 2013.\n[…]\nRoman Catholic Diocese of São Gabriel da Cachoeira\n[…]\nSão Gabriel da Cachoeira travel guide from Wikivoyage"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nheengatu_language",
        "situacao": "ok",
        "texto": "Nheengatu, also known as Modern Tupi, Língua Geral Amazônica (Amazonian General Language), and Amazonic Tupi, is a Tupi–Guarani language. It is spoken throughout the Rio Negro region among the Baniwa, Baré, and Warekena people in the municipality of São Gabriel da Cachoeira, and the state of Amazonas, Brazil.\n[…]\nIt is also commonly referred to as the Língua geral amazônica (LGA) in Brazil.\n[…]\nIn December 2002, Nheengatu gained official language status alongside Portuguese in the municipality of São Gabriel da Cachoeira in accordance with local law 145/2002. Now Nheengatu is one of the four official languages of the municipality. On 3 May 2021, the municipality of Monsenhor Tabosa in the state of Ceará adopted the \"Tupi-Nheengatu\" language, spoken by the Tabajara, Potiguara, Gavião, and Tubiba-Tapuia peoples, as an official language, the first in the state to do so.\n[…]\nIn 2023, Nheengatu was one of 16 Indigenous languages recognized alongside Portuguese as official languages of the state of Amazonas.\n[…]\nThey worked for at least three hours a day over the course of three months; project curator and then National Library president Marco Lucchesi stated the work was intense with specialists available around the clock to answer any questions. Then STF president Rosa Weber attended the launch event in São Gabriel da Cachoeira and stated Nheengatu was chosen because of its significance to the Amazon region.\n[…]\nIn Santa Isabel do Rio Negro and the more urbanized areas of São Gabriel da Cachoeira, bilingualism is common, with Portuguese serving as the primary language. In this context, these speakers also employ reduplication to indicate the intensity of a property, but the plural ita must be used if the subject is plural.\n[…]\nRoger Manuel López Yusuino (Venezuelan Nheengatu) (2013)\n[…]\nLíngua Geral"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%A3o_Gabriel_da_Cachoeira",
        "situacao": "ok",
        "texto": "São Gabriel da Cachoeira é um município brasileiro no estado do Amazonas, Região Norte do país. Ocupa uma área de pouco mais de 109 181,245 km², sendo o terceiro maior município brasileiro em extensão territorial. Sua população, segundo o Censo do IBGE de 2022, é de 51.795 habitantes, a 12ª maior do estado do Amazonas.\n[…]\nEm um caso inédito na federação brasileira, foram reconhecidas, como línguas cooficiais no município, ao lado do português, três idiomas indígenas, após a aprovação da Lei Municipal 145, de 22 de novembro de 2002: o nheengatu, o  tucano e o baníua, línguas tradicionais faladas pela maioria dos habitantes do município, dos quais 74% são indígenas. O município foi a primeira localidade brasileira a reconhecer outros idiomas como oficiais, além do português.\n[…]\n• O Forte de São Gabriel da Cachoeira localizava-se no morro da Fortaleza, à margem esquerda do alto rio Negro, afluente da margem esquerda do rio Amazonas, e foi construído inicialmente para fins defensivos pela coroa portuguesa.\n[…]\nNo município, estão as seguintes organizações militares das Forças Armadas: 2ª Brigada de Infantaria de Selva; Comando de Fronteira Rio Negro e 5º Batalhão de Infantaria de Selva; 21ª Companhia de Engenharia de Construção; Destacamento do Controle do Espaço Aéreo de São Gabriel da Cachoeira; Destacamento de Aeronáutica de São Gabriel da Cachoeira; Destacamento da Comissão de Aeroportos da Região Amazônica; e Destacamento da Capitania dos Portos da Amazônia Ocidental.\n[…]\nO Município de São Gabriel da Cachoeira no ano do seu centenário de criação. Manaus: Instituto de Cooperação Técnica Intermunicipal (ICOTI), julho de 1991. 53 pp. Edição especial.\n[…]\nDiocese de São Gabriel da Cachoeira\n[…]\nForte de São Gabriel da Cachoeira\n[…]\nFestribal (São Gabriel da Cachoeira)\n[…]\n«Prefeitura de São Gabriel da Cachoeira»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Talian",
      "descricao": "Variedade do vêneto falada por descendentes de imigrantes italianos no Sul do Brasil."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O talian, falado por descendentes de imigrantes na serra gaúcha, vem principalmente do dialeto de qual região italiana?",
    "resposta": "Vêneto",
    "distratores": [
      "Sicília",
      "Toscana",
      "Calábria"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Talian"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Talian",
        "situacao": "desambiguacao",
        "texto": "Talian may refer to:\n\n\n== Places ==\nTalian, Iran, a village in Tehran province, Iran\nDhok Talian, a village in Punjab, Pakistan\n\n\n== People ==\nJozef Talian (born 1985), Slovak footballer\n\n\n== Other uses ==\nTalian dialect, a Venetian dialect spoken in Brazil\n\n\n== See also ==\nTalion (disambiguation)"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Colônia galesa na Patagônia",
      "descricao": "Assentamento de imigrantes do País de Gales na Patagônia argentina, iniciado em 1865."
    },
    "angulo": "lugar",
    "tipo": "aberta",
    "pergunta": "Em que região da Argentina vive uma comunidade que fala galês desde a chegada de colonos do País de Gales, em 1865?",
    "resposta": "Patagônia",
    "fonte": [
      "https://en.wikipedia.org/wiki/Y_Wladfa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Y_Wladfa",
        "situacao": "ok",
        "texto": "Y Wladfa (Welsh pronunciation: [ə ˈwladva], 'The Settlement'), also occasionally Y Wladychfa Gymreig (Welsh pronunciation: [ə wlaˈdəχva ɡəmˈreiɡ], 'The Welsh Settlement'), refers to the establishment of settlements by Welsh colonists and immigrants in the Argentine Patagonia, beginning in 1865, mainly along the coast of the lower Chubut Valley. In 1881, the area became part of the Chubut National \n[…]\nDuring the British Government's repatriation of the 11,313 Argentine POWs taken during the 1982 Falklands War, Welsh-speaking British merchant seamen and British soldiers from the Welsh Guards were shocked to find themselves addressed in Patagonian Welsh by an Argentine POW who was on the way home to Puerto Madryn. Over the years since, close ties between Wales and Y Wladfa have been re-established.\n[…]\nCurrent Eisteddfod competitions are bilingual, in both Patagonian Welsh and Argentine Spanish, and include poetry, prose, literary translations (Welsh, Spanish, English, Italian, and French), musical performances, arts, folk dances, photography, and filmmaking among others. The Eisteddfod de la Juventud is held every September at Gaiman. The main Eisteddfod del Chubut is held every October at Trelew.\n[…]\nPatagonia is a 2011 film about the Welsh settlement in Argentina.\n[…]\nR. Bryn Williams (2000). Gwladfa Patagonia 1865–2000 = La colonia galesa de Patagonia 1865–2000 = The Welsh colony in Patagonia 1865–2000. Gwasg Carreg Gwalch. ISBN 978-0-86381-653-6.\n[…]\nWalter Ariel Brooks, 'Welsh print culture in y Wladfa: The role of ethnic newspapers in Welsh Patagonia, 1868–1933' (Cardiff University PhD thesis, 2012) - https://orca.cf.ac.uk/46450/1/WelshPrintCultureInYWladfaWalterBrooks.pdf\n[…]\nProject-Hiraeth – Documents the stories of the Welsh colony in Patagonia, Argentina through film, text and illustration. Archived 23 October 2018 at the Wayback Machine\n[…]\nY Wladfa — The Welsh in Patagonia on h2g2"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Y_Wladfa",
        "situacao": "ok",
        "texto": "Y Wladfa (pronúncia galesa: [ə ˈwladva], \"A Colónia\") ou Y Wladychfa Gymreig (pronúncia galesa: [ə wlaˈdəχva ɡəmˈreiɡ], \"O Assentamento Galês\") refere-se à área da Patagônia argentina, constituída por uma série de povoações fundadas por colonos galeses no século XIX, que em 1955 se tornaram parte da actual província argentina do Chubut.\n[…]\nEm 1862, o Capitão Love Jones-Parry e Lewis Jones deixaram o País de Gales para a Patagónia para decidir se era uma área adequada para criar uma colónia galesa. No navio Candelaria, foram levados por uma tempestade para uma baía a que deram o nome de Porth Madryn (agora a cidade de Puerto Madryn) em homenagem à propriedade de Jones-Parry no País de Gales.\n[…]\nA religião era uma parte importante da vida dos colonos galeses originais na Patagónia. Muitos dos colonos originais praticavam o protestantismo, o anglicanismo e o presbiterianismo. As capelas foram construídas pelos colonos galeses em todo o Vale do Chubut, e actualmente existem 16 capelas que constituem parte do legado histórico da colonização galesa na região.\n[…]\nY Wladfa tem produzido um rico corpo de literatura. Os principais escritores da colónia incluem Eluned Morgan, autor de vários livros, incluindo Into the Andes (em galês: Dringo'r Andes) em 1904, e R. Bryn Williams, que escreveu Memorias de la Patagonia em 1980. Em 2005, Sian Eirian Rees Davies ganhou o Prémio Memorial Daniel Owen com I Fyd Sy Well, um romance histórico sobre as origens da colónia galesa na Patagónia.\n[…]\nAlém disso, existe ainda uma forte tradição de chá galês, que remonta aos tempos coloniais, quando as famílias se reúnem para beber chá e comer pão caseiro, manteiga, queijo, compotas, bolos e scones. Cada 28 de Julho, o chá galês é servido em capelas e casas de chá através de Y Wladfa para celebrar a chegada dos primeiros colonos galeses.\n[…]\nPaís de Gales",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Ainus",
      "descricao": "Povo indígena do norte do Japão e de áreas vizinhas da Rússia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os ainus, povo indígena do Japão, vivem principalmente em qual ilha do norte do país?",
    "resposta": "Hokkaido",
    "distratores": [
      "Honshu",
      "Kyushu",
      "Okinawa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ainu_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ainu_people",
        "situacao": "ok",
        "texto": "The Ainu (/ˈaɪnuː/) are an indigenous ethnic group who reside in northern Japan and southeastern Russia, including Hokkaido and the Tōhoku region of Honshu, as well as the land surrounding the Sea of Okhotsk, such as Sakhalin, the Kuril Islands, the Kamchatka Peninsula, and the Khabarovsk Krai. They have occupied these areas, known to them as \"Ainu Mosir\" (Ainu: アイヌモシㇼ, lit. 'the land of the Ainu'\n[…]\nThe Ainu were first recognised as an indigenous people in 1997, which began the process of claiming indigenous rights under national and international frameworks. Following the United Nations Declaration on the Rights of Indigenous Peoples in 2007, Hokkaido politicians pressured the government to recognize Ainu rights. Prime Minister Fukuda Yasuo answered a parliamentary question on May 20, 2008, by stating,\n[…]\nIt is a historical fact that the Ainu are the earlier arrivers of the northern Japanese archipelago, in particular Hokkaido. The Japanese government acknowledges the Ainu to be an ethnic minority as it has maintained a unique cultural identity and has a unique language and religion. However, as there is no established international definition of \"indigenous people\", the government is not in a position to conclude whether the Ainu should be referred as \"indigenous people\"...\n[…]\nIn July 2023, it was reported that a group of Ainu from Hokkaido was suing the government to reclaim the right of salmon river fishing. This has been outlawed for a century, except for the exemption of a limited number of salmon for ceremonial purposes. The group claimed the Japanese government did not abide by the 2007 United Nations Declaration on the Rights of Indigenous People, which it had signed.\n[…]\nAinu genre painting\n[…]\nHokkaido University Center for Ainu and Indigenous Studies Archived September 1, 2017, at the Wayback Machine\n[…]\nInstitute for the Study of Languages and Cultures of Ainu in Samani, Hokkaidō"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ainus",
        "situacao": "ok",
        "texto": "Ainus ou ainos (Ainu: アィヌ, Аину, Aynu; Japonês: アイヌ Ainu; Russo: Айны Ajny), em textos históricos japoneses conhecidos como Ezo (蝦夷, Ezo), são um grupo étnico indígena do Japão (Hokkaido e historicamente Tohoku) e da Rússia (ilhas Curilas, Sacalina e Kamchatka).\n[…]\nPesquisas recentes sugerem que a cultura ainu surgiu da mistura das culturas Okhotsk, Satsumon e Pós-Jomon/Zoku-Jomon. Em 1264, os ainus invadiram as terras do povo Nivkh, controlados pela dinastia Yuan da China, resultando em conflitos entre os ainus e os chineses. Contatos ativos entre os japoneses e os ainus de Ezo (atual Hokkaido) iniciaram no século XIII. Os ainus eram caçadores-coletores, subsistindo principalmente da caça e da pesca. Sua religião era baseada em fenômenos naturais.\n[…]\nAinus de Hokkaido: atualmente a comunidade ainu mais numerosa.\n[…]\nAinus de Tóquio: resultado das migrações dos tempos modernos dos Ainu de Hokkaido.\n[…]\nAinus de Sacalina: É possível que haja indivíduos puros em Hokkaido. Tanto da parte norte quanto da parte sul da ilha, um total de 841 indivíduos foram realocados para Hokkaido em 1875 pelo Japão. Apenas alguns indivíduos em áreas remotas do interior permaneceram quando a ilha foi concedida à Rússia. Mesmo quando o Japão foi concedido a Sacalina do Sul em 1905, apenas alguns poucos retornaram.\n[…]\nSacalina do Norte: Apenas cinco indivíduos puros foram contados no censo soviético de 1926 na Sacalina do Norte. A maioria dos ainus de Sacalina (principalmente de áreas costeiras) foram realocados para Hokkaido em 1875 pelo Japão. Os poucos que permaneceram geralmente eram casados com russos, como consta nos trabalhos de Bronisław Piłsudski.\n[…]\nKayano Shigeru - Primeiro deputado japonês de origem ainu.\n[…]\nMuseu Ainu- Principal museu sobre o povo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Rongorongo",
      "descricao": "Sistema de glifos encontrado em tábuas de madeira da Ilha de Páscoa, ainda não decifrado."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que ilha do Pacífico foram encontradas as tábuas com a escrita rongorongo, ainda não decifrada?",
    "resposta": "Ilha de Páscoa",
    "distratores": [
      "Taiti",
      "Havaí",
      "Fiji"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rongorongo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rongorongo",
        "situacao": "ok",
        "texto": "Rongorongo ( or ; Rapa Nui: roŋoroŋo [ˈɾoŋoˈɾoŋo]) is a system of glyphs discovered in the 19th century on Easter Island that has the appearance of writing or proto-writing. Numerous attempts at decipherment have been made, but none have been successful. Although some calendrical and what might prove to be genealogical information has been identified, none of the glyphs can actually be read.\n[…]\nThe prevailing opinion is that rongorongo is not true writing but proto-writing, or even a more limited mnemonic device for genealogy, choreography, navigation, astronomy, or agriculture. For example, the Atlas of Languages states, \"It was probably used as a memory aid or for decorative purposes, not for recording the Rapanui language of the islanders.\" If this is the case, then there is little hope of ever deciphering it.\n[…]\nFor those who believe it to be writing, there is debate as to whether rongorongo is essentially logographic or syllabic, though it appears to be compatible with neither a pure logography nor a pure syllabary.\n[…]\nThe Unicode Consortium had at one time tentatively allocated range 1CA80–1CDBF of the Supplementary Multilingual Plane for encoding the rongorongo script, but this tentative allocation has since been withdrawn. An encoding proposal has been written by Michael Everson.\n[…]\nThe Rongorongo of Easter Island – the most complete and balanced description of rongorongo on the internet at the time, from a researcher with the CEIPP. (Archived as of February 27, 2005)\n[…]\nRongorongo corpus viewer – see, highlight, and compare both the Barthel and Fischer transcriptions.\n[…]\nMichael Everson's draft Unicode proposal for rongorongo\n[…]\nSplendid Isolation: Art of Easter Island, an exhibition catalog from The Metropolitan Museum of Art (fully available online as PDF), which contains material on rongorongo"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rongorongo",
        "situacao": "ok",
        "texto": "Rongorongo em Rapa Nui é um sistema bustrofédico de glifos descoberto no século XIX na Ilha de Páscoa, que parece ser uma escrita ou proto-escrita. Não é inteligível apesar das inúmeras tentativas de decifração. Ainda que algumas informações sobre genealogia tenham sido identificadas, nem mesmo esses glifos puderam ser lidos. Se for provado que o rongorongo é uma escrita, poderia ser uma das por v\n[…]\nAcredita-se que pedaços irregulares ou mesmo manchados de madeira foram usados em sua totalidade em vez de pedaços quadrados devido à escassez de madeira na ilha.\n[…]\nTodos esses métodos datam a madeira, não a inscrição. Contudo, o pau-rosa do Pacífico não é durável, e dificilmente sobreviveria por muito tempo no clima da Ilha de Páscoa. Por outro lado, o glifo 067 provavelmente representa a extinta palma da Ilha de Páscoa, que parece ter desaparecido dos registros de pólen da ilha em cerca de 1650, sugerindo que a escrita é no mínimo dessa época.\n[…]\nEm 1868, o bispo do Taiti, Florentin-Étienne \"Tepano\" Jaussen, recebeu um presente dos católicos recém-convertidos da Ilha de Páscoa. Era um longo fio de cabelo humano, talvez uma linha de pesca, envolto em um pequeno quadro de madeira coberto por escrita hieroglífica. Impressionado pela descoberta, ele escreveu ao Pai Hippolyte Roussel da Ilha de Páscoa para coletar todos os tabletes e encontrar nativos capazes de traduzi-los.\n[…]\nA maioria dos textos permaneceu além do alcance dos decifradores até 1958, quando Thomas Barthel publicou linhas de quase todos os textos conhecidos em seu Grundlagen zur Entzifferung der Osterinselschrift (\"Bases para o Deciframento da Escrita da Ilha de Páscoa\") que continua sendo a referência fundamental para o rongorongo. Ele transcreveu os textos A até X, mais de 99% do corpus; o CEIPP estima uma precisão de 97%.\n[…]\nO Rongorongo da Ilha de Páscoa\n[…]\nProposta de Unicode para o Rongorongo de Michael Everson.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Alfabeto turco",
      "descricao": "Alfabeto latino adotado pela Turquia em 1928, nas reformas de Atatürk, no lugar da escrita árabe."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que década a Turquia de Atatürk trocou o alfabeto árabe pelo latino?",
    "resposta": "Década de 1920",
    "fonte": [
      "https://en.wikipedia.org/wiki/Turkish_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turkish_alphabet",
        "situacao": "ok",
        "texto": "The Turkish alphabet (Turkish: Türk alfabesi or Türk abecesi) is a Latin-script alphabet used for writing the Turkish language, consisting of 29 letters, seven of which (Ç, Ğ, I, İ, Ö, Ş and Ü) have been modified from their Latin originals for the phonetic requirements of the language. This alphabet represents modern Turkish pronunciation with a high degree of accuracy and specificity.\n[…]\nThe literacy rate did indeed increase greatly after the alphabet reform, from around 10% to over 90%,  but many other factors also contributed to this increase, such as the foundation of the Turkish Language Association in 1932, campaigns by the Ministry of Education, the opening of Public Education Centres throughout the country, and Atatürk's personal participation in literacy campaigns.\n[…]\nAtatürk also commented on one occasion that the symbolic meaning of the reform was for the Turkish nation to \"show with its script and mentality that it is on the side of world civilisation\". The second president of Turkey, İsmet İnönü further elaborated the reason behind adopting a Latin alphabet:\n[…]\nThe Turkish writer Şerif Mardin has noted that \"Atatürk imposed the mandatory Latin alphabet in order to promote the national awareness of the Turks against a wider Muslim identity.\n[…]\nTax is a debt we need to pay\"; \"It is the duty of every Turk to defend the homeland against the enemies.\" The alphabet reform was promoted as redeeming the Turkish people from the neglect of the Ottoman rulers: \"Sultans did not think of the public, Ghazi commander [Atatürk] saved the nation from enemies and slavery. And now, he declared a campaign against ignorance [illiteracy]. He armed the nation with the new Turkish alphabet.\"\n[…]\nThe Turkish Alphabet\n[…]\nOnline Turkish\n[…]\nDilek Nur Polat Ünsür (22 Mac 2021). \"How Newspapers Familiarized Readers with the Latin Script During the Turkish Alphabet Reform\", ATypI 2020 presentation"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_turco",
        "situacao": "ok",
        "texto": "O alfabeto turco é o alfabeto utilizado para a escrita do idioma turco. É uma variante do alfabeto latino e consiste em 29 letras (21 consoantes e 8 vogais), das quais algumas (Ç, Ğ, I, İ, Ö, Ş, e Ü) foram adaptadas ou modificadas para as exigências fonéticas da língua. O alfabeto representa a pronúncia moderna da língua turca com um alto grau de precisão e especificidade. É o alfabeto oficial e o\n[…]\nA implementação deste alfabeto e a sua adoção em finais da década de 1920 (entrou em vigor em 1 de janeiro de 1929) foi um dos elementos culturais que contribuiu para a vitória do nacionalismo turco e uma das reformas mais importantes de Mustafa Kemal Atatürk.\n[…]\nO primeiro alfabeto utilizado para a escrita do turco é a escrita Orkhon. No geral, as línguas turcomanas foram escritas em diversos alfabetos diferentes ao longo de suas histórias, incluindo o cirílico, o árabe, o grego, o armênio, o latino, além de diversos outros sistemas de escritas asiáticos.\n[…]\nO turco foi escrito no alfabeto árabe durante todo o período otomano; no entanto, o alfabeto latino já vinha sendo utilizado com o idioma, para propósitos educacionais desde antes mesmo da reforma ocorrida no século XX. Alguns dos exemplos são um dicionário latim-albanês de 1635, escrito por Frang Bardhi, que incorporava diversos ditados em turco num apêndice da obra (como Alma agatsdan irak duschamas – \"Uma maçã não cai longe de sua árvore\".)\n[…]\nO atual alfabeto turco de 29 letras, utilizado para o idioma turco, foi estabelecido através da Lei sobre a Adoção e Implementação do Alfabeto Turco, de número 1353, promulgada em 1 de novembro de 1928 como um passo vital na etapa cultural das Reformas de Atatürk. A escrita, que substituiu a antiga escrita turca otomana, foi criada como uma versão ampliada do alfabeto latino, sob iniciativa de Kemal Atatürk, que anunciou a mudança oficial de alfabeto em julho de 1928.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua Brasileira de Sinais, usada pelas comunidades surdas do Brasil."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano uma lei federal reconheceu a Língua Brasileira de Sinais como meio legal de comunicação e expressão?",
    "resposta": "2002",
    "fonte": [
      "http://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm",
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language"
    ],
    "trechos": [
      {
        "url": "http://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nA strong sign language law was passed by the National Congress of Brazil on April 24, 2002, and (in 2005) is in the process of being implemented. The law mandates the use of Brazilian Sign Language in education and government services.\n[…]\nThere are 44 distinct handshapes used in the language.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nKa'apor Sign Language, an unrelated Indigenous sign language of Brazil.\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nde Souza, Guilherme Lourenco. \"Verb agreement in Brazilian Sign Language: morphophonology, syntax & semantics.\" (2018). Universidade Federal de Minas Gerais: doctoral dissertation.\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nApenas no ano de 2002 a língua brasileira de sinais foi reconhecida como meio legal de comunicação e expressão, através da Lei 10.436, de 24 de abril de 2002, apesar de não poder substituir a modalidade escrita da língua portuguesa. Em 2003 foi aprovada a Portaria nº 3.284, que dispõe sobre a acessibilidade dos surdos dentro das universidades brasileiras. No ano seguinte, em 2004, foi ratificado o Decreto nº 5.296, o qual estabeleceu mais prerrogativas legais de acessibilidade.\n[…]\nA Libras foi reconhecida como a língua oriunda das comunidades surdas do país, através da lei nº10.436/2002, garantido o seu direito de reconhecimento como língua de manifestação e expressão das pessoas surdas no acesso à educação, à saúde, à cultura e ao trabalho.\n[…]\nOs estudos das línguas de sinais passaram a ser reconhecidos e estudados com as mesmas classificações utilizadas pelas línguas orais através de William Stokoe. Na década de 1960, o linguista propôs a divisão morfológica e fonológica dos sinais em American Sign Language (ASL) em três parâmetros: configuração de mão (CM), ponto de articulação (PA) ou locação (L) e movimento (M).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Língua geral",
      "descricao": "Línguas de base tupi usadas como meio de comunicação entre colonos e indígenas no Brasil colonial."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que século o Marquês de Pombal proibiu o uso da língua geral de base tupi na colônia brasileira?",
    "resposta": "Século dezoito",
    "fonte": [
      "https://en.wikipedia.org/wiki/L%C3%ADngua_Geral",
      "https://pt.wikipedia.org/wiki/Diret%C3%B3rio_dos_%C3%8Dndios"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L%C3%ADngua_Geral",
        "situacao": "ok",
        "texto": "The term General Language (Portuguese: língua geral) refers to lingua francas that emerged in South America during the 16th and 17th centuries, the two most prominent being the Paulista General Language, which was spoken in the region of Paulistania but is now extinct, and the Amazonian General Language, whose modern descendant is Nheengatu.\n[…]\nBoth were simplified versions of the Tupi language, the native language of the Tupi people. Portuguese colonizers arrived in Brazil in the 16th century, and faced with an indigenous population that spoke many languages, they sought a means to establish effective communication among the many groups. The two languages were used in the Jesuit Reductions, the Jesuit missions in Brazil and by early colonists; and came to be used by enslaved Africans and other Indian groups."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Diret%C3%B3rio_dos_%C3%8Dndios",
        "situacao": "ok",
        "texto": "Diretório dos Índios foi uma lei elaborada em 1755, e tornada pública em 18 de agosto 1758, no reinado de D. José I, rei de Portugal, através de seu ministro, o Marquês de Pombal que está relacionado a um reformismo ilustrado  que irá dizer  sobre os aldeamentos indígenas, elevando estes à condição de vilas ou aldeias, administradas por um diretor.\n[…]\nA política do Marquês de Pombal buscava assim incorporar os indígenas à sociedade dos brancos, transformá-lo em um trabalhador ativo, a fim de assegurar o povoamento e a defesa do território colonial.\n[…]\nAs frequentes denúncias de violações de competências por parte dos diretores e o decrescimento econômico das vilas e lugares pombalinos - em razão das sucessivas epidemias que acometeram os nativos, da constante retirada de indígenas para o trabalho nos serviços reais e das fugas sistemáticas para os sertões -, levaram à revogação do Diretório, no Vale Amazônico, em 1798, pela rainha D. Maria I (1777-1816).\n[…]\nO verbete “Diretório,” no \"Dicionário da História da Colonização Portuguesa no Brasil\", de organização da professora Maria Beatriz Nizza da Silva (1994, p. 261-262), descreve que os dispositivos previstos na legislação não foram cumpridos em razão dos interesses dos diretores, os quais exploravam os autóctones com o intuito de potencializar a parte que lhes cabia em sua produção. Essa exploração teria ocasionado o fracasso da legislação e provocado a desagregação das populações nativas.\n[…]\nDe um lado, a professora sustenta que esse ínterim foi caracterizado por um “vazio legal”, quando na ausência de uma legislação mais abrangente sobre como governar os nativos, foram concebidos leis e regulamentos regionais para se resolver uma miríade de casos específicos, e, na falta dessa legislação geral, o Diretório ocupou o papel de pedra basilar das decisões locais."
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Kasato Maru",
      "descricao": "Navio que trouxe ao porto de Santos o primeiro grupo oficial de imigrantes japoneses ao Brasil."
    },
    "angulo": "tempo",
    "tipo": "aberta",
    "pergunta": "Em que ano o navio Kasato Maru chegou a Santos trazendo o primeiro grupo oficial de imigrantes japoneses?",
    "resposta": "1908",
    "fonte": [
      "https://pt.wikipedia.org/wiki/Kasato_Maru",
      "https://en.wikipedia.org/wiki/Japanese_Brazilians"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru (Kasato Maru (笠戸丸)) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.\n[…]\nO Kasato Maru foi originalmente um navio russo chamado Kazan que foi utilizado como navio-hospital durante a Guerra Russo-Japonesa. No final da guerra, passou para os japoneses como indenização de guerra ou capturado. Foi adaptado para ser navio de passageiros e transportou os soldados que tinham combatido na Manchúria de volta para o Japão.\n[…]\nEm seguida, passou a ser utilizado para transporte de imigrantes japoneses para o Havaí, em 1906, e para o Peru e o México, em 1907.\n[…]\nEm 1908, trouxe o primeiro grupo oficial de imigrantes japoneses para o Brasil. A viagem começou no porto de Kobe e terminou, 52 dias depois, no Porto de Santos em 18 de Junho de 1908. Vieram 165 famílias (781 pessoas) que foram trabalhar nos cafezais do oeste paulista.\n[…]\nAlguns imigrantes japoneses chegaram ao Brasil antes do Kasato Maru, e até chegaram a fundar uma colônia agrícola na fazenda Santo Antônio, no atual município de Conceição de Macabu (então distrito de Macaé), no estado do Rio de Janeiro. Entretanto, foi a chegada deste primeiro grupo trazido pelo Kasato Maru que iniciou um fluxo contínuo de imigração de japoneses para o Brasil.\n[…]\nDepois de algum tempo, Kasato Maru foi transformado em navio cargueiro e ainda voltou ao Brasil uma segunda e última vez, em 1917, transportando cargas a serviço da Osaka Shosen Kaisha (OSK) Line.\n[…]\nAfrica Maru\n[…]\nBuenos Aires Maru\n[…]\nRio de Janeiro Maru\n[…]\nMedia relacionados com Kasato Maru no Wikimedia Commons\n[…]\n«História do navio Kasato Maru»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_Brazilians",
        "situacao": "ok",
        "texto": "Japanese Brazilians are Brazilian citizens who are nationals or naturals of Japanese ancestry or Japanese immigrants living in Brazil. Japanese immigration to Brazil peaked between 1908 and 1960, with the highest concentration between 1926 and 1935. In 2022, Japan's Ministry of Foreign Affairs stated that there were 2 million Japanese descendants in Brazil, making it the country with the largest p\n[…]\nJapanese immigration to Brazil officially began on June 18, 1908, when the ship Kasato Maru docked at Porto de Santos, bringing 781 Japanese workers to the coffee plantations in the São Paulo state countryside. For this reason, June 18 was established as the national day of Japanese immigration. Immigration to Brazil ceased by 1973, with the arrival of the last immigrant ship, the Nippon Maru.\n[…]\nIn 1907, the Brazilian and the Japanese governments signed a treaty permitting Japanese migration to Brazil. This was due in part to the decrease in the Italian immigration to Brazil and a new labour shortage on the coffee plantations. Also, Japanese immigration to the United States had been barred by the Gentlemen's Agreement of 1907. The first Japanese immigrants (781 people – mostly farmers) came to Brazil in 1908 on the Kasato Maru.\n[…]\nThe Japanese appeared as undesirable immigrants within the \"whitening\" and assimilationist policy of the Brazilian government. Oliveira Viana, a Brazilian jurist, historian and sociologist described the Japanese immigrants as follows: \"They (Japanese) are like sulfur: insoluble\". The Brazilian magazine \"O Malho\" in its edition of December 5, 1908, issued a charge of Japanese immigrants with the following legend: \"The government of São Paulo is stubborn.\n[…]\nCentenário da Imigração Japonesa no Brasil (1908–2008) Archived May 11, 2008, at the Wayback Machine\n[…]\nSite da Imigração Japonesa no Brasil\n[…]\nLeia sobre os navios de imigrantes que aportaram no Porto de Santos"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Hangul",
      "descricao": "Alfabeto da língua coreana, criado no século quinze durante a dinastia Joseon."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que rei da dinastia Joseon promoveu a criação do alfabeto coreano?",
    "resposta": "Sejong, o Grande",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hangul",
      "https://en.wikipedia.org/wiki/Sejong_the_Great"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "The Korean alphabet is the modern writing system for the Korean language. It has gone by a variety of names, such as Chosŏn'gŭl in North Korea, Hangul internationally, and Hangeul in South Korea. The script's original name was Hunminjeongeum.\n[…]\nBefore Hangul's creation, Korea had been using Hanja (Chinese characters) since antiquity. As Hanja was poorly suited for representing the Korean language, and because its difficulty contributed to high illiteracy, Joseon king Sejong the Great (r. 1418–1450) moved to create Hangul. The script was announced around late 1443 to early 1444 and officially published in 1446 via the text Hunminjeongeum and its companion commentary Hunminjeongeum Haerye.\n[…]\nDue to a lack of records, it is unknown when work on Hangul first began, nor what that process looked like. Joseon king Sejong the Great (r. 1418–1450) was responsible for Hangul's creation, and most scholars believe he was significantly personally involved in creating it. Hangul was first introduced, likely in a mostly complete form, to Sejong's court in the 12th month of 1443 of the Korean calendar (around December 30, 1443 to January 28, 1444 in the Gregorian calendar).\n[…]\nHangul orthography experienced significant changes in the script's early history. Around the time of Hangul's promulgation, an apparent dispute between whether to use a phonemic or morphophonemic orthography resulted in an apparent victory for the morphophonemic faction; among that faction was Sejong himself. A number of letters gradually stopped seeing significant use by the late 16th century, including the base letters ㅿ and ㆆ. By the 17th century, the letters ㅇ and ㆁ had merged into one.\n[…]\nMedia related to Hangul at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sejong_the_Great",
        "situacao": "ok",
        "texto": "Sejong (Korean: 세종; Hanja: 世宗; May 15, 1397 – April 8, 1450), commonly known as Sejong the Great (세종대왕; 世宗大王), was the fourth monarch of the Koreanic state Joseon. He ruled from 1418 to his death in 1450. He is widely regarded as the greatest king in Korean history, and is particularly remembered for the creation of Hangul, the native alphabet of the Korean language.\n[…]\nDespite Sejong's efforts, Hangul continued to be looked down upon until the end of the Joseon period, over 400 years later. It was only officially adopted by the government in 1894, during the Kabo Reform.\n[…]\nAfter years of debate and compromise, in 1445, the crown prince began to handle the routine affairs of government. Historian Kim Jongmyung argues that Sejong then devoted himself wholeheartedly to working on Hangul.\n[…]\nA 2024 survey by Gallup Korea of 1,777 South Koreans found that Sejong was named the second most times as their most respected historical figure, after Yi Sun-sin. Sejong's creation of the Korean alphabet is celebrated every 9 October as Hangul Day, a national holiday.\n[…]\nIn North Korea, Sejong is discussed much less than in the South and more negatively than elsewhere. According to South Korean researcher of North Korea Lee Kyu-Duk, one North Korean history book Chosŏn t'ongsa (조선통사) claims that Hangul was invented in order to facilitate feudal exploitation of the peasantry.\n[…]\nWhile the book evaluates Hangul's linguistic features positively, it downplays the contributions of Sejong in developing the script and instead attributes its development to the intellect of the masses. Lee argued the following quote from a North Korean history work was representative of North Korean writings on Sejong:During his 30-year reign, Sejong played a major role in repelling foreign invasions, reclaiming the old territories of Goguryeo and Balhae, and developing feudal culture."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "O alfabeto coreano, conhecido como hangul ou hangeul (em coreano: 한글, em hanja: 韓㐎) na Coreia do Sul e Chosŏn'gŭl na Coreia do Norte (em coreano: 조선글), é um sistema de escrita da língua coreana criado pelo Rei Sejong, o Grande, em 1443.\n[…]\nA escrita hangul (한글) foi introduzida em 1443 pelo rei Sejong, o Grande, o quarto rei da dinastia Joseon, em substituição aos ideogramas chineses (\"Hanja\") (한자, 漢字) usados na Coreia até o século XV. Entretanto, credita-se frequentemente a criação do sistema de escrita à Academia Real (Jib-hyeon-jeon, 집현전).\n[…]\nAo explicar a necessidade de um novo sistema de escrita, o Rei Sejong alegou que a língua coreana era fundamentalmente diferente da chinesa; o uso de caracteres chineses (conhecidos como hanja) para escrever em coreano era tão difícil para a população em geral que apenas uma elite privilegiada (yangban, 양반), normalmente formada por homens, era capaz de ler e escrever fluentemente. A maioria dos coreanos era analfabeta funcional antes da invenção do hangul.\n[…]\nO coreano é uma língua aglutinante. As propriedades deste (existência de radicais, desinências e aglutinações) estão refletidas na escrita. Até o século XX, o hangul não tinha regras ortográficas oficiais. Na maioria das vezes, esse alfabeto foi usado para transcrever foneticamente a língua coreana, apesar da preferência do rei Sejong pela transcrição morfofonológica.\n[…]\nUm instituto Rei Sejong funcionou lá por sete meses, antes de encerrar devido a mal-entendidos e problemas financeiros.\n[…]\nDia de Hangul\n[…]\nRomanização revisada da língua coreana\n[…]\nLista de sílabas do Hangul moderno\n[…]\nPronúncia do alfabeto Hangul com romanização na língua portuguesa (em português)\n[…]\nHistória e Linguística do Hangul",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Silabário cherokee",
      "descricao": "Sistema de escrita da língua cherokee, criado no início do século dezenove."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "No século dezenove, que indígena norte-americano, sem saber ler, criou um sistema de escrita para a língua cherokee?",
    "resposta": "Sequoyah",
    "distratores": [
      "Touro Sentado",
      "Cavalo Louco",
      "Gerônimo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sequoyah",
      "https://en.wikipedia.org/wiki/Cherokee_syllabary"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sequoyah",
        "situacao": "ok",
        "texto": "Sequoyah ( sə-QUOY-yə; Cherokee: ᏍᏏᏉᏯ, Ssiquoya, or ᏏᏉᏯ, Sequoya, pronounced [seɡʷoja]; c. 1770 – August 1843), also known as George Gist or George Guess, was a Native American polymath and neographer of the Cherokee Nation.\n[…]\nIn 1821, Sequoyah completed his Cherokee syllabary, enabling reading and writing in the Cherokee language. One of the first North American Indigenous groups to gain a written language, the Cherokee Nation officially adopted the syllabary in 1825, helping to unify a forcibly divided nation with new ways of communication and a sense of independence. Within a quarter-century, the Cherokee Nation had reached a literacy rate of almost 100%, surpassing that of surrounding European-American settlers.\n[…]\nSequoyah's creation of the Cherokee syllabary is among the few times in recorded history that an individual member of a pre-literate group created an original, effective writing system. It is believed to have inspired the development of 21 scripts or writing systems used in 65 languages in North America, Africa, and Asia.\n[…]\nIt is unclear when Sequoyah moved to Alabama from Tennessee. Many Cherokee began migrating there even before ceding their land around Sequoyah's birthplace in 1819, as they were under continual pressure by European-American settlers. Some sources claim he went with his mother, though there is no confirmed date for her death. Others have stated that it was around 1809 when he started his work on the Cherokee syllabary. Another source claims it was in 1818.\n[…]\nSoon afterward, Sequoyah went to Mexico in search for Cherokees who had migrated there. He was hoping to spread his teachings of the syllabary and convince the migrated Cherokees to move to Indian Territory."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cherokee_syllabary",
        "situacao": "ok",
        "texto": "The Cherokee syllabary (Cherokee: ᏣᎳᎩ ᏗᎪᏪᎶᏙᏗ, romanized: Tsalagi Digohwelodohdi) is a syllabary invented by Sequoyah in the late 1810s and early 1820s to write the Cherokee language. His creation of the syllabary is particularly noteworthy as he was illiterate until its creation. He first experimented with logograms, but his system later developed into the syllabary.\n[…]\nSome of Sequoyah's most learned contemporaries immediately understood that the syllabary was a great invention. For example, when Albert Gallatin, a politician and trained linguist, saw a copy of Sequoyah's syllabary, he believed it was superior to the English alphabet in that literacy could be easily achieved for Cherokee at a time when only one-third of English-speaking people achieved the same goal.\n[…]\nIn the 1960s, evidence emerged suggesting that the Cherokee syllabary of North America provided a model for the design of the Vai syllabary in Liberia. The Vai syllabary emerged about 1832–33. This was at a time when American missionaries were working to use the Cherokee syllabary as a model for writing Liberian languages.\n[…]\nModern Cherokee generally uses Hindu-Arabic numerals. In the late 1820s, several years after the introduction and adoption of his syllabary, Sequoyah proposed a set of number signs for Cherokee; however, these were never adopted and never typeset. In 2012, the Cherokee Language Consortium agreed to begin using Sequoyah's numerals in some instances.\n[…]\nCree syllabics\n[…]\nBender, Margaret. 2002. Signs of Cherokee Culture: Sequoyah's Syllabary in Eastern Cherokee Life. Chapel Hill: University of North Carolina Press.\n[…]\n\"Sequoyah\", Cherokee (online conversion tool), Transliteration.\n[…]\nLearning to Design a Cherokee Syllabary with Mark Jamra – Cooper Union lecture on sociohistorical background behind Sequoyah's invention, and attempts in designing modern Cherokee typefaces"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sequoyah",
        "situacao": "ok",
        "texto": "Sequoyah (escrito ᏍᏏᏆᏱ em idioma cherokee) (ao redor de 1767 — julho ou agosto de 1843), também conhecido como George Guess, Guest ou Gist, foi um cherokee que inventou o silabário cherokee.\n[…]\nSequoyah, nascido no Tennessee cerca de 1767, começou a desenvolver um silabário para o idioma Cherokee, tendo-o completado nos anos 1820. O seu trabalho permitiu que os Cherokees se tornassem o primeiro povo indígena a ter um silabário escrito, o que levou a um aumento significativo nas taxas de literacia e avanço da sua comunicação e cultura.\n[…]\nCherokee\n[…]\nProel: Silabario Cheroqui\n[…]\nInvention of the Cherokee Alphabet publicado en Cherokee Phoenix (inglés)\n[…]\nThe Life and Work of Sequoyah; Chronicles of Oklahoma (inglês)\n[…]\nThe Father of Sequoyah: Nathaniel Gist; Chronicles of Oklahoma (inglés)\n[…]\nSequoyah de Tiro Typeworks (inglés)\n[…]\nSequoyah (aka George Gist), a North Georgia Notable (inglés)\n[…]\nThe Cherokee Nation (inglés)\n[…]\nThe Official Cherokee Font (inglês)\n[…]\nCabana de Sequoyah",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Língua hebraica",
      "descricao": "Língua semítica do povo judeu, revivida como língua falada a partir do fim do século dezenove e oficial em Israel."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Que lexicógrafo nascido no Império Russo liderou, no fim do século dezenove, o renascimento do hebraico como língua falada?",
    "resposta": "Eliezer Ben-Yehuda",
    "fonte": [
      "https://en.wikipedia.org/wiki/Eliezer_Ben-Yehuda",
      "https://en.wikipedia.org/wiki/Revival_of_the_Hebrew_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eliezer_Ben-Yehuda",
        "situacao": "ok",
        "texto": "Eliezer Ben‑Yehuda (born Eliezer Yitzhak Perlman; 7 January 1858 – 16 December 1922) was a Jewish linguist, lexicographer, and journalist who immigrated to Jerusalem in 1881, when the Ottoman Empire ruled it. He is renowned as the lexicographer of the first Hebrew dictionary and also as the editor of Jerusalem-based HaZvi, one of the first Hebrew newspapers published in Mandatory Palestine. Ben-Ye\n[…]\nEliezer Yitzhak Perlman (later Eliezer Ben-Yehuda) was born in Luzhki in the Vilna Governorate of the Russian Empire (now Vitebsk Oblast, Belarus) to Yehuda Leib and Tzipora Perlman, who were Chabad hasidim. His native language was Yiddish. He was one of five siblings. He attended a Jewish elementary school (a cheder) where he studied Hebrew and the Hebrew Bible from the age of three, as was customary among the Jews of Eastern Europe.\n[…]\nHemda Ben-Yehuda became an accomplished journalist and author in her own right, ensuring the completion of the Hebrew dictionary in the decades after Eliezer's death, as well as mobilising fundraising and coordinating committees of scholars in both Israel and abroad.\n[…]\nBeit Ben-Yehuda\n[…]\nFellman, Jack (1973). The Revival of a Classical Tongue: Eliezer Ben Yehuda and the Modern Hebrew Language. The Hague, Netherlands: Mouton. 1973. ISBN 90-279-2495-3\n[…]\nLang, Yosef . The Life of Eliezer Ben Yehuda. Yad Yitzhak Ben Zvi, 2 volumes, (Hebrew).\n[…]\nElyada, Ouzi . Hebrew Popular Journalism : Birth and Development in Ottoman Palestine, London and N.Y, Routledge, 2019 (History of Ben-Yehuda's Press)\n[…]\nThe personal papers of Eliezer Ben-Yehuda are kept at the Central Zionist Archives in Jerusalem. The notation of the record group is A43\n[…]\nAn interview with Dola Ben-Yehuda Wittmann (Eliezer Ben-Yehuda's daughter) at the Dartmouth Jewish Sound Archive\n[…]\nWorks by or about Eliezer Ben-Yehuda at the Internet Archive\n[…]\nWorks by Eliezer Ben-Yehuda at LibriVox (public domain audiobooks)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Revival_of_the_Hebrew_language",
        "situacao": "ok",
        "texto": "The revival of the Hebrew language took place in Europe and the Southern Levant toward the end of the 19th century and into the 20th century, through which the language's usage changed from the purely sacred language of Judaism to a spoken and written language used for daily life among the Jews in Palestine, and later Israel.\n[…]\nEliezer Ben-Yehuda is often regarded as the \"reviver of the Hebrew language\", having been the first to raise the concept of reviving Hebrew and initiating the Ben-Yehuda Dictionary. The revitalization of Hebrew was then ultimately brought about by its usage in Jewish settlement in Ottoman Palestine that arrived in the waves of migration known as the First Aliyah and the Second Aliyah.\n[…]\nEliezer Ben Yehuda, a key figure in the revival, envisioned Hebrew as serving a \"national spirit\" and cultural renaissance in the Land of Israel.\n[…]\nEliezer Ben-Yehuda (1858–1922) (אליעזר בן יהודה) is often regarded as the \"reviver of the Hebrew language\" (\"מחיה השפה העברית\"): he was the first to raise the concept of reviving Hebrew, to publish articles in newspapers on the topic, and he initiated the project known as the Ben-Yehuda Dictionary. However, what finally brought about the revitalization of Hebrew were developments in the settlements of the First Aliyah and the Second Aliyah.\n[…]\nWith the rise of Jewish nationalism in 19th-century Europe, Eliezer Ben-Yehuda was captivated by the innovative ideas of Zionism. At that time, it was believed that one of the criteria needed to define a nation worthy of national rights was its use of a common language spoken by both the society and the individual. On 13 October 1881, while in Paris, Ben-Yehuda began speaking Hebrew with friends in what is believed to be the first modern conversation using the language.\n[…]\nHebrew literature\n[…]\nLearn Hebrew Phrases with Audio"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Eliezer_Ben-Yehuda",
        "situacao": "ok",
        "texto": "Eliezer Ben‑Yehuda (nascido Eliezer Yitzhak Perlman; 7 de janeiro de 1858 – 16 de dezembro de 1922) foi um linguista, lexicógrafo e jornalista judeu russo que imigrou para Jerusalém em 1881, quando esta era governada pelo Império Otomano. É conhecido como o lexicógrafo do primeiro dicionário hebraico e também como editor do jerusalemita HaZvi, um dos primeiros jornais em hebraico publicados na Ter\n[…]\nEliezer Yitzhak Perlman (mais tarde Eliezer Ben-Yehuda) nasceu em Luzhki na Governadoria de Vilna do Império Russo (atual Oblast de Vitebsk, Bielorrússia), filho de Yehuda Leib e Tzipora Perlman, que eram Chabad hassídicos. Sua língua materna era o iídiche. Frequentou uma escola primária judaica (um cheder) onde estudou hebraico e a Bíblia Hebraica a partir dos três anos de idade, como era costume entre os judeus da Europa Oriental.\n[…]\nHemda Ben-Yehuda tornou-se uma jornalista e autora bem-sucedida de forma autodidata, assegurando a conclusão do dicionário hebraico nas décadas após a morte de Eliezer, além de mobilizar arrecadação de fundos e coordenar comitês de estudiosos tanto em Israel quanto no exterior.\n[…]\nFellman, Jack (1973). The Revival of a Classical Tongue: Eliezer Ben Yehuda and the Modern Hebrew Language. The Hague, Netherlands: Mouton. 1973. ISBN 90-279-2495-3\n[…]\nSt. John, Robert (1952). Tongue of the Prophets. The Life Story of Eliezer Ben Yehuda. Garden City, New York: Doubleday & Company Inc. ISBN 0-8371-2631-2\n[…]\nIlan Stavans, Resurrecting Hebrew. (2008).\n[…]\nOs documentos pessoais de Eliezer Ben-Yehuda são mantidos no Arquivo Sionista Central em Jerusalém. A notação do grupo de registros é A43\n[…]\nUma entrevista com Dola Ben-Yehuda Wittmann (filha de Eliezer Ben-Yehuda) no Dartmouth Jewish Sound Archive\n[…]\nObras de ou sobre Eliezer Ben-Yehuda no Internet Archive\n[…]\nObras de Eliezer Ben-Yehuda (em inglês) no LibriVox (livros falados em domínio público)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Esperanto",
      "descricao": "Língua planejada para a comunicação internacional, publicada em 1887."
    },
    "angulo": "autoria",
    "tipo": "aberta",
    "pergunta": "Em 1887, que oftalmologista publicou em Varsóvia o primeiro livro do esperanto?",
    "resposta": "Ludwik Zamenhof",
    "fonte": [
      "https://en.wikipedia.org/wiki/L._L._Zamenhof",
      "https://en.wikipedia.org/wiki/Esperanto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/L._L._Zamenhof",
        "situacao": "ok",
        "texto": "L. L. Zamenhof (15 December 1859 – 14 April 1917) was the creator of Esperanto, the most widely used constructed international auxiliary language.\n[…]\nZamenhof published Esperanto in 1887, although his initial ideas date back as far as 1873. He grew up fascinated by the idea of a world without war and believed that this could happen with the help of a new international auxiliary language (IAL). The language was intended as a tool to gather people together through neutral, fair, equitable communication.\n[…]\nPolish: Ludwik Łazarz Zamenhof – pronounced [ˈludvʲik ˈwazaʐ zaˈmɛnxɔf]\n[…]\nZamenhof\" to avoid confusion with his brother. The two Ls do not seem to have specifically represented either name and the order Ludwik Lejzer is a modern convention.\n[…]\nA wave of pogroms within the Russian Empire in 1882, including Congress Poland, motivated Zamenhof to take part in the Hibbat Zion, and to found a Zionist student society in Warsaw. He left the movement following the publication of Unua Libro in 1887, and in 1901 published a statement in Russian with the title Hillelism, in which he argued that the Zionist project would fail due to Jews not having a common language.\n[…]\nA public square in Gothenburg, Sweden is named Esperantoplatsen, where a café named Zamenhof opened in 2018.\n[…]\nThe house of the Zamenhof family and a monument to Zamenhof are sites on the Jewish Heritage Trail in Białystok, which was opened in June 2008 by volunteers at The University of Białystok Foundation. Białystok is also home to the Ludwik Zamenhof Centre.\n[…]\nWorks by L. L. Zamenhof at LibriVox (public domain audiobooks)\n[…]\nWorks by or about L. L. Zamenhof at the Internet Archive"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Esperanto",
        "situacao": "ok",
        "texto": "Esperanto (; Esperanto: [espeˈranto]) is the world's most widely spoken constructed auxiliary language. Created by L. L. Zamenhof in 1887 as 'the International Language' (la Lingvo Internacia), it is intended to be a universal second language for international communication. Esperanto culture is grounded in the idea that people can interact on an equal footing across language barriers, without lin\n[…]\nEsperanto was created in the late 1870s and early 1880s by L. L. Zamenhof, a Jewish ophthalmologist from Białystok, then part of the Russian Empire, but now part of Poland. After several iterations (Proto-Esperanto), he self-published the first book of Esperanto grammar (Unua Libro) on 26 July 1887. He did so under the pseudonym Doktoro Esperanto (lit. \"one who hopes\") and simply called the language \"the international language\" (la lingvo internacia).\n[…]\nThe Oomoto religion in Japan encourages the use of Esperanto among its followers and includes Zamenhof as one of its deified spirits.\n[…]\nThe first translation of the Bible into Esperanto was a translation of the Hebrew Bible by L. L. Zamenhof. The translation was reviewed and compared with other languages' translations by a group of British clergy and scholars before its publication at the British and Foreign Bible Society in 1910. In 1926 this was published along with a translation of the New Testament, in an edition commonly called the \"Londona Biblio\".\n[…]\nThe first Christadelphian publications in Esperanto were published in 1910.\n[…]\nThough Esperanto itself has changed little since the publication of Fundamento de Esperanto (Foundation of Esperanto), a number of reform projects have been proposed over the years, starting with Zamenhof's proposals in 1894 and Ido in 1907. Several later constructed languages, such as Universal, Saussure, Romániço, Internasia, Esperanto sen Fleksio, and Mundolingvo, were all based on Esperanto."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ludwik_Zamenhof",
        "situacao": "ok",
        "texto": "Ludwik Lejzer Zamenhof (em polonês/polaco:  Ludwik Łazarz Zamenhof; em esperanto, Ludoviko Lazaro Zamenhof; em português, Luís Lázaro Zamenhof) (Białystok, 15 de dezembro de 1859 – Varsóvia, 14 de abril de 1917) foi um oftalmologista polonês-judeu.\n[…]\nZamenhof tinha 17-18 anos e ainda estava no ginásio quando preparava a versão inicial do esperanto. Em 1878, essa primeira versão ficou pronta. Ela se chamava \"Lingwe universala\". No dia 17 de dezembro daquele ano, Zamenhof, dois dias após seu aniversário de 19 anos, apresentou aos seus colegas de classe o seu projeto inicial. Segundo o que o próprio Zamenhof contaria anos depois, ele e seus amigos cantaram em comemoração uma música de uma única estrofe (Malamikete de las nacjes).\n[…]\nFinalmente, no ano 1887, e com a ajuda econômica de sua esposa, Klara, publicou um pequeno manual intitulado Internacia Lingvo (\"Língua Internacional\", em esperanto) com pseudônimo de Doutor Esperanto, palavra que acabou por se converter no nome de sua criação. Zamenhof utilizou tal pseudônimo na publicação do primeiro livro de esperanto em 1887, pois temia retaliações do governo russo contra seu projeto.\n[…]\nSua origem remete à profissão e à esperança de Zamenhof ao lançar a língua para o mundo, visto que \"esperanto\", em esperanto, significa \"aquele que tem esperança\".\n[…]\nApesar de a língua ter nascido apenas como \"Lingvo Internacia\" (língua internacional), ela recebeu o nome de seu autor com o passar do tempo. O longo nome pela qual era conhecida \"Lingvo Internacia de Doktoro Esperanto\" (língua internacional do Dr. Esperanto), foi aos poucos encurtado até chegar ao nome atual esperanto, aceito inclusive pelo próprio Zamenhof.\n[…]\nUnua Libro, 1887 (Primeiro Livro)\n[…]\nDr. Esperanto\n[…]\nEsperanto\n[…]\n1462 Zamenhof",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Pedra de Roseta",
      "descricao": "Estela egípcia de 196 antes de Cristo com o mesmo decreto em três escritas, chave para decifrar os hieróglifos."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "A Pedra de Roseta traz o mesmo decreto em hieróglifos, em escrita demótica e em qual terceira escrita?",
    "resposta": "Grego antigo",
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosetta_Stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosetta_Stone",
        "situacao": "ok",
        "texto": "The Rosetta Stone is a stele of granodiorite inscribed with three versions of a decree issued in 196 BC during the Ptolemaic dynasty of Egypt, on behalf of King Ptolemy V Epiphanes. The top and middle texts are in Ancient Egyptian using hieroglyphic and Demotic scripts, respectively, while the bottom is in Ancient Greek. The decree has only minor differences across the three versions, making the R\n[…]\nThe Rosetta Stone is 112.3 cm (3 ft 8 in) high at its highest point, 75.7 cm (2 ft 5.8 in) wide, and 28.4 cm (11 in) thick. It weighs approximately 760 kilograms (1,680 lb). It bears three inscriptions: the top register in Ancient Egyptian hieroglyphs, the second in the Egyptian Demotic script, and the third in Ancient Greek.\n[…]\nPrior to the discovery of the Rosetta Stone and its eventual decipherment, the ancient Egyptian language and script had not been understood since shortly before the fall of the Roman Empire. The usage of the hieroglyphic script had become increasingly specialised even in the later Pharaonic period; by the 4th century AD, few Egyptians were capable of reading them.\n[…]\nFrom this, Champollion identified the phonetic characters k l e o p a t r a (in today's transliteration q l i҆ w p 3 d r 3.t). On the basis of this and the foreign names on the Rosetta Stone, he quickly constructed an alphabet of phonetic hieroglyphic characters, completing his work on 14 September and announcing it publicly on 27 September in a lecture to the Académie royale des Inscriptions et Belles-Lettres. On the same day he wrote the famous Lettre à M.\n[…]\nFrom this point, the stories of the Rosetta Stone and the decipherment of Egyptian hieroglyphs diverge, as Champollion drew on many other texts to develop an Ancient Egyptian grammar and a hieroglyphic dictionary which were published after his death in 1832.\n[…]\n\"How the Rosetta Stone works\". Howstuffworks.com. 11 December 2007."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_de_Roseta",
        "situacao": "ok",
        "texto": "A Pedra de Roseta é um fragmento de uma estela de granodiorito erigida no Egito Ptolemaico, cujo texto foi crucial para a compreensão moderna dos hieróglifos egípcios e deu início a um novo ramo do conhecimento, a egiptologia. Frequentemente descrita como \"a pedra mais famosa do mundo\", sua inscrição guarda um decreto de um conselho de sacerdotes estabelecendo o culto ao faraó Ptolemeu V, no prime\n[…]\nA Pedra de Roseta tem atualmente 112,3 centímetros de altura em seu ponto mais alto, 75,7 centímetros de largura e 28,4 centímetros de espessura, e pesa aproximadamente 760 quilogramas. Sua superfície frontal é polida e traz três inscrições sucessivas: no topo um registro em hieróglifos egípcios, no centro um outro em egípcio demótico e, embaixo, um último registro em grego antigo.\n[…]\nUma segunda data é mencionada nos textos em grego e egípcio hieroglífico, que corresponde a 27 de novembro de 197 AEC, dia da coroação de Ptolemeu. A inscrição em egípcio demótico conflita com as datas em grego antigo e egípcio hieroglífico, enumerando dias consecutivos em março para o decreto e o aniversário. Embora os motivos para estas discrepâncias permaneçam incertos, há consenso de que o decreto data de 196 AEC e tinha como intenção restabelecer o domínio dos reis ptolemaicos sobre o Egito.\n[…]\nO texto grego na Pedra de Roseta forneceu o ponto de partida para a decifração do conteúdo do seu texto em hieróglifos. O grego antigo era amplamente conhecido por estudiosos, mas eles não estavam familiarizados com os detalhes do seu uso no período helenístico e sobretudo como idioma do governo no Egito Ptolemaico; descobertas em larga escala de papiros gregos só viriam a ocorrer muito mais tarde.\n[…]\nA Inscrição de Beistum também foi comparada à Pedra de Roseta, por apresentar conteúdo em três línguas antigas do Oriente Médio: persa antigo, elamita e assiro-babilônio.\n[…]\nLista de sistemas de escrita\n[…]\nPedra Moabita",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Suíça",
      "descricao": "País da Europa Central, sem saída para o mar, com quatro línguas nacionais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Além do alemão, do francês e do italiano, qual é a quarta língua nacional da Suíça?",
    "resposta": "Romanche",
    "distratores": [
      "Occitano",
      "Flamengo",
      "Luxemburguês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Switzerland"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Switzerland",
        "situacao": "ok",
        "texto": "The four national languages of Switzerland are German, French, Italian, and Romansh. German, French, and Italian maintain equal status as official languages at the national level within the federal administration of the Swiss Confederation, while Romansh is used in dealings with people who speak it. Latin is occasionally used in some formal contexts, particularly to denote the country (Confoederat\n[…]\nBecause German is the dominant language in Switzerland, many Swiss people whose first languages are French, Italian, or Romansh move into the German-speaking regions. Consequently, their children, born in these predominantly German-speaking areas, usually grow up speaking German as their primary language.\n[…]\nThe proportion of Italian-speaking inhabitants had been decreasing since the 1970s, after reaching a high of 12% of the population during the same decade. This was entirely because of the reduced number of immigrants from Italy to Switzerland. However it has increased again during the last decade.\n[…]\nMany Swiss find it easier to use English as a lingua franca with other Swiss people of different linguistic backgrounds. In 2022, Switzerland ranked 23rd in Europe in the English Proficiency Index of EF language school.\n[…]\nBesides the national languages and the many varieties of Swiss German, several regional Romance languages are spoken natively in Switzerland: Franco-Provençal and Lombard.\n[…]\nTo avoid having to translate the name of Switzerland into the four national languages, Latin is used on the coins of the Swiss franc (Helvetia or Confoederatio Helvetica) and on Swiss stamps (Helvetia). The country code top-level domain for Switzerland on the internet is .ch, the abbreviation of the Latin name, Confoederatio Helvetica (Swiss Confederation); similarly, the International vehicle registration code for Swiss automobiles is \"CH\".\n[…]\nDemographics of Switzerland"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_da_Su%C3%AD%C3%A7a",
        "situacao": "ok",
        "texto": "A questão das línguas da Suíça é uma problemática cultural e de política central da Suíça. O alemão, o francês, o italiano e o romanche são as quatro línguas nacionais faladas na Suíça; as três primeiras em uso oficial na Confederação Suíça,  o romanche usado em dois cantões.\n[…]\nAs quatro línguas nacionais são o alemão (não o alemão suíço), maioritária, e três línguas latinas minoritárias: o francês, o italiano e o romanche.\n[…]\nAs línguas oficiais são o alemão, o francês e o italiano. Pelo artigo 70 da Constituição Federal de 1999, o romanche é parcialmente uma língua oficial que é utilizada nos relatórios da Confederação cujos leitores falam o romanche, portanto, é uma língua oficial regional restrita ao cantão de Grisons.\n[…]\nNa Assembleia Federal Suíça, os deputados podem em princípio, se exprimir com a língua nacional de sua escolha. Os germanófonos são a maioria, daí o alemão ser a língua mais utilizada. Os italófonos escolhem o alemão ou o francês e os francófonos utilizam principalmente o francês. O romanche quase não é utilizado. Um sistema de tradução simultânea existe para o alemão, francês e italiano.\n[…]\nEm 2003, o Conselho Federal editou um valor de referência de representação para qualquer uma das línguas nacionais, baseado na proporção das línguas maternas faladas pela população residente de nacionalidade suíça; e baseou estes valores na comparação da porcentagem de empregados da administração federal, os censuístas do programa nacional de senso, sobre a diversidade das línguas e competências linguísticas na Suíça, e foi demonstrado no relatório final, uma sub-representação da Suíça romanche (19,9% dos funcionários contra mais de% de pessoas da comunidade) e sob-representação da Suíça italiana (6,5% contra 4,4% da comunidade).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Escrita japonesa",
      "descricao": "Conjunto de sistemas usados para escrever o japonês: kanji, hiragana e katakana."
    },
    "angulo": "composicao",
    "tipo": "aberta",
    "pergunta": "Além dos kanji e do hiragana, que terceiro sistema de escrita o japonês usa, sobretudo para palavras estrangeiras?",
    "resposta": "Katakana",
    "fonte": [
      "https://en.wikipedia.org/wiki/Japanese_writing_system"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_writing_system",
        "situacao": "ok",
        "texto": "The modern Japanese writing system (日本語の表記体系, Nihongo no hyōki taikei) uses a combination of logographic kanji, which are adopted Chinese characters; and phonographic kana, which evolved from cursives/components of Chinese characters.\n[…]\nKana (仮名) are a set of syllabic scripts used in the Japanese writing system. The term originally means 'provisional' or 'borrowed names'. In modern usage, kana are primarily divided into hiragana and katakana, though historically they also included other forms such as man'yōgana and sōgana. All types of kana ultimately derive from Chinese characters (kanji): they borrow the original phonetic values of kanji and were developed from simplified forms or components of those characters.\n[…]\nThere is also some flexibility for words with common kanji renditions to be instead written in hiragana, depending on the individual author's preference (all Japanese words can be spelled out entirely in hiragana or katakana, even when they are normally written using kanji). Some words are colloquially written in hiragana and writing them in kanji might give them a more formal tone, while hiragana may impart a softer or more emotional feeling.\n[…]\nSentences are commonly written using a combination of all three Japanese scripts: kanji (in red), hiragana (in purple), and katakana (in orange), and in limited instances also include Latin alphabet characters (in green) and Arabic numerals (in black):\n[…]\nAll words in modern Japanese can be written using hiragana, katakana, and rōmaji, while only some have kanji. Words that have no dedicated kanji may still be written with kanji by employing either ateji (as in man'yogana, から = 可良) or jukujikun, as in the title of とある科学の超電磁砲 (超電磁砲 being used to represent レールガン)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_japonesa",
        "situacao": "ok",
        "texto": "A escrita japonesa moderna faz uso de três formas de escrita diferentes: o kanji que são ideogramas de origem chinesa e dois silabários japoneses conhecidos como hiragana e katakana. Também são utilizados os algarismos arábicos e o alfabeto latino porém não tão frequentemente como as formas anteriores.\n[…]\nA forma escrita do japonês pode ser completamente representada utilizando apenas os silabários hiragana e katakana juntamente com o rōmaji e grande parte das palavras também possui representação em kanji. O uso de uma forma ou outra segue sugestões de estilo, convenções e legibilidade. Quando espera-se que o leitor encontre dificuldade no entendimento dos ideogramas kanji utiliza-se um recurso denominado furigana.\n[…]\nHiragana é um dos silabários japoneses utilizados para se representar a forma escrita da língua japonesa. Utilizado principalmente em palavras que não possuem representação em ideogramas kanji ou se estes ideogramas tornarão a leitura demasiadamente difícil. Também é utilizado para representar as flexões em verbos e adjetivos bem como partículas gramaticais. Por exemplo, para escrever uma palavra trissílaba, utilizam-se três caracteres.\n[…]\nKatakana é um dos silabários japoneses utilizados para se representar a forma escrita da língua japonesa. É utilizado principalmente para representar palavras estrangeiras ou de natureza científica. Também é utilizado para animais ou plantas para os quais não existam representações comuns em kanji e normalmente é usado para onomatopéias. Também possui o efeito de ênfase ao texto como na escrita em itálico.\n[…]\nインドアラビア数字 (indoarabia-sūji) - Os numerais indo-arábicos (em oposição aos algarismos tradicionais de kanji) são comumente usados para escrever números em texto horizontal. Veja também os numerais japoneses.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Alfabeto hebraico",
      "descricao": "Sistema de escrita usado no hebraico, no iídiche e em outras línguas judaicas."
    },
    "angulo": "numero",
    "tipo": "aberta",
    "pergunta": "Quantas letras tem o alfabeto hebraico, de álef a tav?",
    "resposta": "22",
    "fonte": [
      "https://en.wikipedia.org/wiki/Hebrew_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hebrew_alphabet",
        "situacao": "ok",
        "texto": "The Hebrew alphabet or aleph-bet (Hebrew: אָלֶף־בֵּית עִבְרִי,[a] Alefbet ivri), known variously by scholars as the Ktav Ashuri, Jewish script, square script and block script, is a unicameral abjad script used in the writing of the Hebrew language. Alphabets based on the Hebrew script are used to write other Jewish languages, most notably Yiddish, Ladino, Judeo-Arabic, and Judeo-Persian. In modern\n[…]\nThe Hebrew alphabet has 22 letters. It does not have case. Five letters have different forms when used at the end of a word. Hebrew is written from right to left. Originally, the alphabet was an abjad consisting only of consonants, but is now considered an impure abjad. As with other abjads, such as the Arabic alphabet, during its centuries-long use scribes devised means of indicating vowel sounds by separate vowel points, known in Hebrew as niqqud.\n[…]\nIn the traditional form, the Hebrew alphabet is an abjad consisting only of consonants, written from right to left. It has 22 letters, five of which use different forms at the end of a word.\n[…]\nThe signet ring of God is \"Emess\" (Truth), which contains the first, middle, and last of the Hebrew Alphabet; for God is within everything, surrounds everything, and nothing is outside of Him\n[…]\nThe letters of the Hebrew alphabet have played varied roles in Jewish religious literature over the centuries, primarily in mystical texts.\n[…]\nHebrew spelling\n[…]\n^\"Alef-bet\" is commonly written in Israeli Hebrew without the maqaf (מקף, \"[Hebrew] hyphen\"), אלפבית עברי, as opposed to with the hyphen, אלף־בית עברי.\n[…]\n^The letters of the Arabic and Mandaic alphabets generally have four forms each, according to their position within the word (initial, medial, final, or isolate). (There are exceptions in both alphabets: in the Arabic, six of the 28 letters have only two forms each; in the Mandaic, three of the 22 have only a single form.)\n[…]\nThe Hebrew Alphabet Chabad.org"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_hebraico",
        "situacao": "ok",
        "texto": "O sistema de escrita hebraico, também conhecido como Alef-Beit, é o abjad utilizado para a escrita em hebraico, que é uma língua semítica pertencente à família das línguas afro-asiáticas, falada em Israel, foi criado por volta do século III a.C.. Também é utilizado para escrever o iídiche (ver Ortografia iídiche), língua germânica falada pelos judeus da Europa Oriental e Alemanha; e o ladino, dial\n[…]\nPor exemplo, a palavra Espanha em hebraico é \"sefarad\", porém é escrita na escrita hebraica somente com as letras que correspondem às letras latinas S, F, R e D sendo portanto escrita dessa maneira \"sfrd\" (ספרד), o que faz com que seja difícil saber suas vogais sem conhecer a palavra, a não ser que sejam acrescentados diacríticos indicadores de vogais (סְפָרַד).\n[…]\nA leitura correta do hebraico é da direita para a esquerda. Sua escrita também se inicia da direita para esquerda. O alfabeto não contem vogais, mas para facilitar foram-se criados os sinais massoréticos (relativos a vogais hebraicas).\n[…]\nOs sinais massoréticos pecam pelo facto de não serem capazes de garantir a fonética precisa das palavras que pela simples existência de consoantes vocálicas era possível, ou seja existem letras que fazem o papel de vogais, sendo assim deve remover-se o sinal massorético do hebraico sempre que se pretenda chegar a fonética dos antigos.\n[…]\nEm hebraico há cinco letras \"sofit\" (finais), ou seja, que são escritas de forma diferente quando aparecem no final da palavra. Somente a escrita é alterada, enquanto o som continua o mesmo: \"Chaf\", \"Mem\", \"Nun\", \"Pe\" e \"Tsade\".\n[…]\nNota: o alfabeto hebraico só utiliza consoantes, sendo que as vogais podem ser representadas por sinais diacríticos, chamados Nekudot (niqqud no singular), sinais massoréticos ou consoantes vocálicas (trocando o som da letra por uma determinada vogal).\n[…]\nAlfabeto Hebraico\n[…]\nLetras do Alfabeto hebraico\n[…]\nJewish Encyclopedia: Alphabet",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Alfabeto russo",
      "descricao": "Variante do alfabeto cirílico usada para escrever a língua russa."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas letras tem o alfabeto russo moderno?",
    "resposta": "33",
    "distratores": [
      "26",
      "30",
      "36"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Russian_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Russian_alphabet",
        "situacao": "ok",
        "texto": "The Russian alphabet is the writing system used to write the Russian language.\n[…]\nThe modern Russian alphabet consists of 33 letters: twenty consonants (⟨б⟩, ⟨в⟩, ⟨г⟩, ⟨д⟩, ⟨ж⟩, ⟨з⟩, ⟨к⟩, ⟨л⟩, ⟨м⟩, ⟨н⟩, ⟨п⟩, ⟨р⟩, ⟨с⟩, ⟨т⟩, ⟨ф⟩, ⟨х⟩, ⟨ц⟩, ⟨ч⟩, ⟨ш⟩, ⟨щ⟩), ten vowels (⟨а⟩, ⟨е⟩, ⟨ё⟩, ⟨и⟩, ⟨о⟩, ⟨у⟩, ⟨ы⟩, ⟨э⟩, ⟨ю⟩, ⟨я⟩), a semivowel / consonant (⟨й⟩), and two modifier letters or \"signs\" (⟨ъ⟩, ⟨ь⟩) that alter pronunciation of a preceding consonant or a following vowel.\n[…]\nThe letters were indeed originally omitted from the sample alphabet, printed in a western-style serif font, presented in Peter's edict, along with the letters ⟨з⟩ (replaced by ⟨ѕ⟩), ⟨и⟩ and ⟨ф⟩ (the diacriticized letter ⟨й⟩ was also removed), but were reinstated except ⟨ѱ⟩ and ⟨ѡ⟩ under pressure from the Russian Orthodox Church in a later variant of the modern typeface (1710).\n[…]\nThe Russian poet Alexander Pushkin wrote: \"The [names of the] letters that make up the Slavonic alphabet don't represent a meaning at all. Аз, буки, веди, глаголь, добро etc. are individual words, chosen just for their initial sound\". However, since the names of the first few letters of the Slavonic alphabet seem to form readable text, attempts have been made to compose meaningful snippets of text from groups of consecutive letters for the rest of the alphabet.\n[…]\nBenson, Morton (1960), \"Review of The Russian Alphabet by Thomas F. Magner\", The Slavic and East European Journal, 4 (3): 271–72, doi:10.2307/304189, JSTOR 304189\n[…]\nDunn, John; Khairov, Shamil (2009), Modern Russian Grammar, Modern Grammars, Routledge"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_russo",
        "situacao": "ok",
        "texto": "O alfabeto russo ou alfabeto cirílico russo moderno é a variante do alfabeto cirílico utilizada com o idioma russo. Foi introduzido na época do domínio da Rússia de Quieve (um estado medieval dos eslavos orientais) simultaneamente à sua conversão ao cristianismo (988), de acordo com restos arqueológicos datados.\n[…]\nO idioma russo é escrito com esta versão moderna do alfabeto cirílico, que utiliza 33 letras: 20 consoantes (б, в, г, д, ж, з, к, л, м, н, п, р, с, т, ф, х, ц, ч, ш, щ), dez vogais (а, е, ё, и, о, у, ы, э, ю, я), uma semivogal/consoante (й), e duas letras modificadoras ou \"sinais\" (ь, ъ) que alteram a pronúncia de uma consoante anterior ou de uma vogal seguinte.\n[…]\nNa tabela abaixo estão todas as letras do alfabeto russo atual:\n[…]\nLetras que não mais fazem parte do alfabeto russo.\n[…]\n1. Até aproximadamente 1900, os nomes mnemônicos herdados da Igreja eslava eram usados para as letras. Pode-se ver aqui na ortografia pré-1918 do alfabeto civil pós-1708.\n[…]\nou Yat tinha originalmente um som distinto, mas na metade do século XVIII ficou com a mesma pronúncia que е na linguagem padrão. Desde a reforma da ortografia russa em 1918, na qual foi decidida sua eliminação do alfabeto russo, ficou apenas como símbolo residual da ortografia antiga.\n[…]\nΥ, υ (o grego úpsilon) era idêntico na sua pronúncia ao и /i/, como no grego bizantino, mas usava-se etimologicamente, até que se tornou cada vez mais esporádico e desapareceu após a reforma do alfabeto russo de 1918.\n[…]\nEm um teclado russo, as letras estão organizadas da seguinte maneira:\n[…]\nAlfabeto cirílico\n[…]\nAlfabeto russo cursivo\n[…]\nBenson, Morton (1960), «Review of The Russian Alphabet by Thomas F. Magner», The Slavic and East European Journal, 4 (3), pp. 271–72, doi:10.2307/304189\n[…]\nDunn, John; Khairov, Shamil (2009), Modern Russian Grammar, Modern Grammars, Routledge",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Paraguai",
      "descricao": "País sul-americano sem saída para o mar, com capital em Assunção."
    },
    "angulo": "atributo",
    "tipo": "aberta",
    "pergunta": "Além do espanhol, que língua indígena é oficial no Paraguai e falada pela maior parte da população?",
    "resposta": "Guarani",
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Paraguay"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Paraguay",
        "situacao": "ok",
        "texto": "The Republic of Paraguay is a mostly bilingual country, as the majority of the population uses Spanish and Guaraní. The Constitution of Paraguay of 1992 declares it as a multicultural and bilingual country, establishing Spanish and Guaraní as official languages. Spanish, an Indo-European language of the Romance branch, is understood by about 90% of the population as a first or second language.\n[…]\nSpanish speakers in Paraguay were always the minority relative to Guarani speakers, who were the majority. The majority of Spanish speakers were Creole or children of immigrants. They were concentrated largely in the capital or in privileged classes toward the middle of the country where they had access to education. Guarani speakers were largely mixed-race or indigenous and came from rural areas. They comprised 90% of the population.\n[…]\nParaguayan Spanish has three main variants depending on the speaker and geographical area: the urban or Rioplatense variant (spoken mainly by the younger generation in Asunción and other large cities), with greater influence of Rioplatense Spanish. The Guaraní or interior variant (spoken mainly by the majority of the bilingual population), with greater influence of Guaraní, and the foreign variant, spoken by Brasiguayos or Mennonites.\n[…]\nGuaraní creole, Modern Guaraní, or Paraguayan Colloquial Guaraní is the most spoken variant by Paraguayans within the Guarani language, which is different from the Guarani spoken by indigenous people. Several authors agree that jehe'a is the typical Paraguayan Guarani, which has slight influences from Spanish, as well as the \"guaranization\" of Spanish words, since only the indigenous people speak the \"guarani-ete\" (pure or closed Guarani).\n[…]\nParaguayan Spanish:\n[…]\nParaguayan Guaraní (jehe'a):\n[…]\nAbout 50,000 Paraguayans speak an indigenous language besides Guaraní:\n[…]\nAva Guarani language\n[…]\nDemographics of Paraguay"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Basco",
      "descricao": "Língua isolada falada no País Basco, na Espanha e na França."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua dos Pireneus, entre Espanha e França, é um isolado linguístico, sem parentes conhecidos entre as línguas vivas?",
    "resposta": "Basco",
    "fonte": [
      "https://en.wikipedia.org/wiki/Basque_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basque_language",
        "situacao": "ok",
        "texto": "Basque ( BASK, BAHSK; endonym euskara [eus̺ˈkaɾa]) is a language spoken by Basques and other residents of the Basque Country, a region that straddles the westernmost Pyrenees in adjacent parts of southwestern France and northern Spain. Basque is Europe's only known language isolate (with no relation to any other known languages) and the only surviving language of Paleo-European origin. The Basques\n[…]\nIn French, the language is normally called basque though euskara has become common in recent times. Spanish has a greater variety of names for the language. Today, it is most commonly referred to as vasco, lengua vasca, or euskera. Both terms, vasco and basque, are inherited from the Latin ethnonym Vascones, which in turn goes back to the Greek term Οὐάσκωνες (ouáskōnes), an ethnonym used by Strabo in his Geographica (23 CE, Book III).\n[…]\nLigurian substrate: this hypothesis, proposed in the 19th century by d'Arbois de Jubainville, J. Pokorny, P. Kretschmer and several other linguists, encompasses the Basco-Iberian hypothesis.\n[…]\nUhlenbeck, C. (1947). \"La langue basque et la linguistique générale\" [The Basque language and general linguistics]. Lingua (in French). 1: 59–76. doi:10.1016/0024-3841(49)90045-5.\n[…]\nTrombetti, Alfredo (1925): Le origini della lingua basca, Bologna, (new edit ISBN 978-88-271-0062-2).\n[…]\nTrombetti, Alfredo (1925): Le origini della lingua basca, Bologna, (new edit ISBN 978-88-271-0062-2).\n[…]\nZelikov, Mixail (2005): \"L'hypothèse basco-caucasienne dans les travaux de N. Marr\" Cahiers de l'ILSL, N° 20, pp. 363–381.\n[…]\nVennemann, Theo (2003): Europa Vasconica – Europa Semitica, Trends in Linguistics. Studies and Monographs 138, De Gruyter, Berlin, ISBN 978-3-11-017054-2.\n[…]\nVennemann, Theo (2007): \"Basken wie wir: Linguistisches und Genetisches zum europäischen Stammbaum\", BiologenHeute 5/6, 6–11.\n[…]\nEuskara Institutua, The University of the Basque Country, UPV/EHU"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_basca",
        "situacao": "ok",
        "texto": "O idioma basco (euskara, AFI: [eus̺kaɾa]) é uma língua isolada ancestral dos bascos, povo nativo do País Basco, região que abrange as áreas da Comunidade Autónoma do País Basco, da Comunidade Foral de Navarra, ambas no norte da Espanha, e o departamento de Pirenéus Atlânticos, no sudoeste da França.\n[…]\nJá para os exônimos, em francês o idioma é chamado comumente de basque ou, mais recentemente, euskara. Já no espanhol existe uma grande variedade de termos espanhóis para designar a língua; atualmente, é chamado mais comumente de vasco, lengua vasca ou euskera. Tanto os termos vasco quanto o \"basco\" do português vêm do etnônimo latino Vascones, que por sua vez remonta ao termo grego antigo ουασκωνους (ouaskōnous), etnônimo criado por Estrabão em seu livro Geografia (23 d.C., livro III).\n[…]\nO idioma se encontra majoritariamente restrito às províncias de Navarra, da Comunidade Autônoma Basca, na Espanha, e no departamento dos Pirenéus Atlânticos, na França. São aproximadamente 1,350 milhões de pessoas que possuem algum grau de conhecimento no idioma, sendo cerca de 950 mil fluentes e cerca de 400 mil falantes passivos no País Basco.\n[…]\nA língua basca possui duas línguas pidgin: pidgin basco-islandês e pidgin-algonquino. Ambas as línguas têm uma história em comum que remonta ao século XVII ou até mesmo antes, quando a caça intensiva de baleias no golfo da Biscaia teve como consequência a extinção da espécie. Os povos bascos eram conhecidos devido às suas técnicas inovadores de caça às baleias, mas tanto os franceses, como ingleses e holandeses também pescavam ao largo do mar Cantábrico e do golfo da Biscaia.\n[…]\nTrask, Robert (1997). The History of Basque [A história do basco] (em inglês). Nova Iorque: Routledge. ISBN 0-415-13116-2\n[…]\n«Basco»  - Ethnologue\n[…]\n«Mapa linguístico do País Basco»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Pomerano",
      "descricao": "Variedade do baixo-alemão da antiga Pomerânia, mantida por descendentes de imigrantes no Espírito Santo e no Sul do Brasil."
    },
    "angulo": "identidade",
    "tipo": "aberta",
    "pergunta": "Que língua germânica, quase desaparecida na Europa, é cooficial em municípios do Espírito Santo, como Santa Maria de Jetibá?",
    "resposta": "Pomerano",
    "fonte": [
      "https://en.wikipedia.org/wiki/East_Pomeranian_dialect",
      "https://en.wikipedia.org/wiki/Santa_Maria_de_Jetib%C3%A1"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/East_Pomeranian_dialect",
        "situacao": "ok",
        "texto": "East Pomeranian (Ostpommersch), Farther Pomeranian (Hinterpommersch) or just Pomeranian (Pomerisch) is an East Low German dialect moribund in Europe, which used to be spoken in the region of Farther Pomerania when it was part of the German Province of Pomerania, until World War II, and today is part of Poland.\n[…]\nNowadays, spoken East Pomeranian in Brazil has mostly been influenced by Portuguese language and Hunsrik, a German dialect derived from the Hunsrückisch native to Brazil. It excludes the dialect spoken in the United States, known as Wisconsin Pomeranian, which was influenced by the English language. East Pomeranian was also reported to have been spoken in Australia.\n[…]\nEast Pomeranian is a Low Saxon language that originated from medieval German settlement in Pomerania. In Farther Pomerania, Low Saxon and Westphalian Germans settled along the coast while the highlands of Farther Pomerania were settled by Brandenburgians. West Frisians and Mennonites later settled in the region as well, speaking related languages. After World War II, virtually all of the East Pomeranian speaking Germans were expelled from Pomerania, making it extinct in its former range.\n[…]\nThe five dialects of East Pomeranian in Europe were:\n[…]\nWhereas Pomeranian has become moribund in Europe and the United States, it is still actively spoken and taught in Brazil. The Pomeranian School Education Program (PROEPO) was set up in 2008 by Ismael Tressmann and promotes the language throughout Espírito Santo and trains teachers on Pomeranian language instruction.\n[…]\nSanta Maria de Jetibá\n[…]\nConjugation patterns of Brazilian Pomeranian\n[…]\nBrazilian German\n[…]\nLaw Co-formalizing East Pomeranian in the Municipality of Pancas\n[…]\nLaw Co-formalizing East Pomeranian in the Municipality of Santa Maria de Jetibá"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Santa_Maria_de_Jetib%C3%A1",
        "situacao": "ok",
        "texto": "Santa Maria de Jetibá is the name of a municipality in central Espírito Santo, Southeastern Brazil. It was founded in 1857 by Pomeranian immigrants who arrived through the state capital Vitória by going up the river Santa Maria.\n[…]\nLocated in the south-central mountain region of Espírito Santo, this municipality has an area of 735.55 square kilometers. The town of Santa Maria de Jetibá is 720 meters above sea level, and the highest point in the state is Garrafão Peak, at 1200 meters (3937 ft) above sea level.\n[…]\nWith a total population of 41,015 (2020), Santa Maria de Jetibá is considered one of the last significant East Pomeranian-speaking communities in the world. Those immigrants (Pomeranians), who came from the historical region Pomerania, now part of Germany and Poland where it is known as Pommern and Pomorze respectively.\n[…]\nIn Brazil, many Pomeranians also established communities in Santa Catarina (see Pomerode) and Rio Grande do Sul (see Arroio do Padre). Santa Maria de Jetibá is a place where the people still speak solely East Pomeranian in their day-to-day life. Due to the isolation of this community, most of the members of the community live in very poor conditions.\n[…]\nMost of the population of this city is descended from Pomeranian and German peoples.\n[…]\nEast Pomeranian, a dialect of Low German, has co-official status in Santa Maria de Jetibá.\n[…]\nSanta Maria de Jetibá is in a high valley and the altitude is about 700m above sea level. The elevation of this municipality influences the climate which features a cool and dry winter, while there are wet and hot days with cool nights in summer. Santa Maria de Jetibá features a humid subtropical climate type Cwa.\n[…]\nSanta Maria de Jetibá travel guide from Wikivoyage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_pomerana",
        "situacao": "ok",
        "texto": "O pomerano (Pommersch, Pommerschplatt, Pommeranisch, ou Pomerisch) ou pomerano oriental (Ostpommersch) é uma variedade do baixo-alemão falada pelos pomeranos e descendentes em várias regiões do Brasil, especialmente nos estados meridionais e no estado do Espírito Santo.\n[…]\nQuase extinta na Pomerânia histórica,  praticamente é falada apenas nos Estados Unidos (no centro de Wisconsin e partes de Iowa) e no Brasil (Espírito Santo, partes da Região Sul e Rondônia). Atualmente a língua pomerana já tem uma escrita, dada pelo linguista Ismael Tressmann, sendo que, nos municípios com maior população de origem pomerana do estado do Espírito Santo, são ministradas aulas de língua pomerana, por meio do Programa de Educação Escolar Pomerana (PROEPO).\n[…]\nPomerânia Oriental. O alemão-padrão, por sua vez, pertence a um outro grupo de línguas, o alto-alemão.\n[…]\nTodavia, em algumas localidades brasileiras, outros falares germânicos predominaram. Nos municípios de Westfália (Rio Grande do Sul) e de Rio Fortuna (Santa Catarina), o dialeto westfaliano é o usado. Nos municípios de Pomerode (Santa Catarina) e Santa Maria de Jetibá (Espírito Santo), predominou o pomerano.\n[…]\nNo Espírito Santo, nas cidades de Afonso Cláudio, Pancas, Itarana, Santa Leopoldina, Santa Maria de Jetibá (onde  é língua  oficial), Vila Pavão, Domingos Martins e Laranja da Terra o pomerano se tornou a língua corrente por ocasião da chegada dos imigrantes. Até hoje é a língua materna de muitos habitantes da região, e em vários dos distritos das cidades acima citadas é a língua mais falada.\n[…]\nSanta Maria de Jetibá também possui estação de rádio em língua pomerana, a Pomerisch Radio.\n[…]\nLei de Cooficialização do pomerano no Município de Pancas\n[…]\nLei de Cooficialização do pomerano no Município de Santa Maria de Jetibá",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Papua-Nova Guiné",
      "descricao": "País da Oceania que ocupa a metade oriental da ilha da Nova Guiné."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Com mais de oitocentas línguas, qual país tem o maior número de idiomas vivos do mundo?",
    "resposta": "Papua-Nova Guiné",
    "distratores": [
      "Indonésia",
      "Nigéria",
      "Índia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Languages_of_Papua_New_Guinea"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Languages_of_Papua_New_Guinea",
        "situacao": "ok",
        "texto": "Papua New Guinea, a sovereign state in Oceania, is the most linguistically diverse country in the world. Ethnologue, among other sources, state that there are 840 living languages spoken in the country, although estimates vary due to the distinction between a language and a dialect.\n[…]\nIn 2006, Papua New Guinea Prime Minister Sir Michael Somare stated that \"Papua New Guinea has 832 living languages (languages, not dialects).\" 25 of those languages are officially recognized, with the country's lingua franca (and vernacular for some) being Tok Pisin, an English-based creole (although standard English is typically used in government, education, and formal writing).\n[…]\nFrom 1884 to 1914, the northern half of the present-day country was a German colony known as German New Guinea, in which German was the official language. Tok Pisin derives some vocabulary from German as a result of this influence. Today however, German is not a generally spoken language in Papua New Guinea.\n[…]\nOutside Papua New Guinea, Papuan languages that are also spoken include the languages of Indonesia, East Timor, and Solomon Islands.\n[…]\nBelow is a full list of Papuan language families spoken in Papua New Guinea, following Palmer, et al. (2018):\n[…]\nAll the Austronesian languages spoken in Papua New Guinea belong to its Oceanic subgroup. More precisely, these languages belong to four branches of Oceanic:\n[…]\nNorth New Guinea\n[…]\nPNGSL is an official language of Papua New Guinea; it is based on Auslan and various home sign forms.\n[…]\nIn 2011, 67.6% of the population of Papua New Guinea over 10 years of age were literate.\n[…]\nPapua New Guinean literature\n[…]\nEducation in Papua New Guinea\n[…]\nLanguage distribution maps for individual PNG provinces (SIL International in Papua New Guinea)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_da_Papua-Nova_Guin%C3%A9",
        "situacao": "ok",
        "texto": "São cerca de 850 as  línguas de Papua-Nova Guiné, um número notável (o maior dentre as nações o mundo) para um país de pouco mais de 6 milhões de habitantes. Em 2006, o Primeiro Ministro de Papua-Nova Guiné, Sir Michael Somare, declarou que o país tem 832 línguas (não dialetos). As línguas oficiais são o Tok Pisin (uma língua crioula com base no inglês), o próprio inglês e o Hiri Motu.\n[…]\nAs principais línguas desse país que ocupa a metade oriental (cerca de 463 mil km²) da ilha da Nova Guiné, país com grande extensão de florestas tropicais com muitas tribos isoladas, são:\n[…]\nTok Pisin – falada por cerca de metade a 2/3 da população, língua franca da região.\n[…]\nInglês – mesmo sendo uma das três línguas oficiais do país, é falada por somente 1 a 2% da população.\n[…]\nHiri Motu – 120 mil falantes, como segunda língua.\n[…]\nLínguas Papuas – as mais antigas da ilha, essas línguas são também faladas em áreas da Indonésia, em Timor-Leste e nas Ilhas Salomão\n[…]\nLínguas austronésias - Grupos de falantes de línguas austronésias chegaram à Nova Guiné supostamente por volta de 1500 a.C. As línguas austronésias estão dispersas desde um extremo oeste em Madagascar (língua malgaxe), ao norte em Taiwan (línguas formosanas), a leste na Ilha da Páscoa (língua rapanui).\n[…]\n57,3% da população de Papua-Nova Guiné acima de 15 anos é alfabetizada.\n[…]\nLíngua da Papua – Nova Guiné – Ethnologue, com extensa lista e também mapas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.72 — 2026-10-17**
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
