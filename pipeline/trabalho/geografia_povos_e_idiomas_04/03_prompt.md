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
      "nome": "Alfabeto grego",
      "descricao": "Sistema de escrita da língua grega, usado desde o século oito antes de Cristo."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Do alfa ao ômega, quantas letras tem o alfabeto grego?",
    "resposta": "24",
    "distratores": [
      "22",
      "26",
      "28"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Greek_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Greek_alphabet",
        "situacao": "ok",
        "texto": "The Greek alphabet has been used to write the Greek language since the late 9th or early 8th century BC. It was derived from the earlier Phoenician alphabet, and is the earliest known alphabetic script to systematically write vowels as well as consonants.\n[…]\nIn Archaic and early Classical times, the Greek alphabet existed in many local variants, but, by the end of the 4th century BC, the Ionic-based Euclidean alphabet, with 24 letters, ordered from alpha to omega, had become standard throughout the Greek-speaking world and is the version that is still used for Greek writing today.\n[…]\nThe uppercase and lowercase forms of the 24 letters are:\n[…]\nFor this purpose, in addition to the 24 letters which by that time made up the standard alphabet, three otherwise obsolete letters were retained or revived: digamma ⟨Ϝ⟩ for 6, koppa ⟨Ϙ⟩ for 90, and a rare Ionian letter for [ss], today called sampi ⟨Ͳ⟩, for 900. This system has remained in use in Greek up to the present day, although today it is only employed for limited purposes such as enumerating chapters in a book, similar to the way Roman numerals are used in English.\n[…]\nDifferent chapters within the same fraternity are almost always (with a handful of exceptions) designated using Greek letters as serial numbers. The founding chapter of each organization is its A chapter. As an organization expands, it establishes a B chapter, a Γ chapter, and so on and so forth. In an organization that expands to more than 24 chapters, the chapter after Ω chapter is AA chapter, followed by AB chapter, etc.\n[…]\nThe open omega is always used in symbolic settings and is encoded in Letterlike Symbols (U+2126) as a separate code point for backward compatibility."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_grego",
        "situacao": "ok",
        "texto": "O alfabeto grego (em grego: ελληνικό αλφάβητο) é empregado ainda hoje para escrever em língua grega e também em notações científicas de áreas como: Filosofia, Matemática, Física, Astronomia, dentre outras áreas do conhecimento. Destaque-se ainda ser ele a base de outros alfabetos, como o latino, o gótico, o cirílico, o armênio, o copta e o glagolítico. Ele é também conhecido como alfabeto grego cl\n[…]\nO fator inovador introduzido com o alfabeto grego são as vogais. As primeiras vogais foram Alfa, Épsilon, Iota, Ómicron e Upsilon.\n[…]\nDessa forma, os dois motivos: \"economia de signos\" e \"eliminação da ambiguidade\" explicariam o sucesso do alfabeto grego. Provavelmente por isso os gregos transformaram os signos das guturais semíticas, inúteis para eles, em letras necessárias à notação das vogais. O 'alef foi transformado na vogal alfa (a); o hê se transformou em épsilon (e); o waw, inicialmente digama, em seguida veio a se tornar o ypsilon (y); o yod foi transformado em iota (i) e o ʕain em ômicron (o).\n[…]\nÉ o mesmo sistema de 24 letras hoje vigente, e que foi a variante regional das cidades jônicas da Anatólia, e que foi também adotado no restante do mundo grego por volta do século IV a.C.[carece de fontes]?\n[…]\nNa Bíblia, no livro Apocalipse, Deus declara ser “Alfa e Ômega, o princípio e o fim”. As letras gregas Chi (χ) e Rô (ρ) são usadas em símbolos para Jesus Cristo, pois são as duas primeiras letras usadas para soletrar Cristo em grego.\n[…]\nAs letras gregas são usadas em expressões de gíria para se referir a diferentes tipos de pessoas. Por exemplo, o termo \"alfa\" se refere a uma pessoa dominante ou corajosa, enquanto \"beta\" se refere a uma pessoa passiva ou sensível. Outros termos como \"sigma\" e \"ômega\" também são usados para se referir a diferentes tipos de pessoas.\n[…]\nHistória do alfabeto grego\n[…]\nFiloglossia. Guia de pronúncia das letras gregas (em inglês).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Hangul",
      "descricao": "Alfabeto da língua coreana, criado no século quinze durante a dinastia Joseon."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Somando as consoantes e as vogais básicas, com quantas letras se escreve o coreano moderno?",
    "resposta": "24",
    "distratores": [
      "20",
      "32",
      "40"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hangul"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "The Korean alphabet is the modern writing system for the Korean language. It has gone by a variety of names, such as Chosŏn'gŭl in North Korea, Hangul internationally, and Hangeul in South Korea. The script's original name was Hunminjeongeum.\n[…]\nHangul orthography has changed over time and differs between North and South Korea. Modern Korean language orthographies use 24 basic letters, which are called jamo. The 14 consonants can be combined amongst themselves to represent additional and composite sounds; the same principle applies for the 10 vowels. Such combinations yield 27 additional letters, resulting in a total of 51.\n[…]\nThe current mainstream Hangul orthographies for Korean use 24 basic jamo: 14 basic consonants (자음; 子音; jaeum; 'child sound') and 10 basic vowels (모음; 母音; moeum; 'mother sound'). The basic letters can be modified and combined to yield 51 jamo in total. Duplications result in 5 additional consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ), and modifications and combinations result in 11 additional vowels (ㅐ, ㅒ, ㅔ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ) and 11 additional heterogeneous consonant digraphs (ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅄ).\n[…]\nSouth Korea considers Hangul to have 24 letters (only counting basic letters) and North Korea 40 (not counting 11 heterogeneous consonant digraphs).\n[…]\nLinguist John DeFrancis wrote that \"scholars are in general agreement on the excellence of the Korean alphabetic script\". Hangul has been described by various linguists and historians as the best or among the best actively used writing systems, as well as a landmark intellectual achievement in Korean and human history. Hangul is a significant aid for modern scholars interested in the historical linguistics of the Korean language."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hangul",
        "situacao": "ok",
        "texto": "O alfabeto coreano, conhecido como hangul ou hangeul (em coreano: 한글, em hanja: 韓㐎) na Coreia do Sul e Chosŏn'gŭl na Coreia do Norte (em coreano: 조선글), é um sistema de escrita da língua coreana criado pelo Rei Sejong, o Grande, em 1443.\n[…]\nCada bloco silábico do hangul consiste em no mínimo duas e no máximo cinco entre 24 letras, das quais 14 são consoantes e 10 são vogais. Os caracteres do hangul são compostos em blocos e formam sílabas, chamadas jamos. Cada unidade representa um som diferente; alguns caracteres representam dois sons, e esses sons são diferenciados dependendo da posição - em cima de uma vogal, do lado esquerdo ou no fim (em baixo) de cada bloco.\n[…]\nAs letras que compõem o hangul são chamadas de jamo (자모). Esse nome provém de ja-eum (\"consoante\"; 자음) e mo-eum (\"vogal\"; 모음). Devido ao confucionismo (céu, terra e humanidade) é formado por três partes: inicial, vogal e final opcional. As tabelas seguintes apresentam as letras, junto com a pronúncia:‎\n[…]\nO coreano é uma língua aglutinante. As propriedades deste (existência de radicais, desinências e aglutinações) estão refletidas na escrita. Até o século XX, o hangul não tinha regras ortográficas oficiais. Na maioria das vezes, esse alfabeto foi usado para transcrever foneticamente a língua coreana, apesar da preferência do rei Sejong pela transcrição morfofonológica.\n[…]\nAlém do coreano, o hangul é usado para a língua jeju. Os especialistas coreanos estão atualmente tentando difundir o uso deste alfabeto para línguas não coreânicas. A primeira iniciativa ocorreu em 2009, na Indonésia, na ilha de Buton, onde a etnia Buton, estabelecida em torno de Bau-Bau, escolheu o hangul como escrita para transcrever sua língua oral, o cia-cia, e salvar essa língua.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Alfabeto georgiano",
      "descricao": "Sistema de escrita do idioma georgiano, com as três versões Asomtavruli, Nuskhuri e Mkhedruli."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Na Geórgia, o alfabeto de letras arredondadas usado hoje para escrever a língua do país tem quantas letras?",
    "resposta": "33",
    "distratores": [
      "24",
      "29",
      "41"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Georgian_scripts"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Georgian_scripts",
        "situacao": "ok",
        "texto": "The Georgian scripts are the three writing systems used to write the Georgian language: Asomtavruli, Nuskhuri and Mkhedruli. Although the systems differ in appearance, their letters share the same names and alphabetical order and are written horizontally from left to right.\n[…]\nGeorgian scripts are unique in their appearance and their exact origin has never been established; however, in strictly structural terms, their alphabetical order largely corresponds to the Greek alphabet, with the exception of letters denoting uniquely Georgian sounds, which are grouped at the end. Originally consisting of 38 letters, Georgian is presently written in a 33-letter alphabet, as five letters are obsolete. The number of Georgian letters used in other Kartvelian languages varies.\n[…]\nMingrelian uses 36: thirty-three that are current Georgian letters, one obsolete Georgian letter, and two additional letters specific to Mingrelian and Svan. Laz uses the same 33 current Georgian letters as Mingrelian plus that same obsolete letter and a letter borrowed from Greek for a total of 35.\n[…]\nThe modern Georgian alphabet consists of 33 letters:\n[…]\nMkhedruli has been adapted to languages besides Georgian. Some of these alphabets retained letters obsolete in Georgian, while others acquired additional letters:\n[…]\nGeorgian Mkhedruli script received an official status for being Georgia's internationalized domain name script for (.გე).\n[…]\nMac OS Georgian is a character encoding created by Michael Everson for Georgian on classic Mac OS. It is an extended ASCII encoding, using the 128 code points from 0x80 through 0xFF to represent the characters of the Asomtavruli and Mkhedruli scripts plus a number of widely used symbols not included in 7-bit ASCII.\n[…]\n\"Transliteration of Georgian\" (PDF). (105 KB)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_georgiano",
        "situacao": "ok",
        "texto": "O alfabeto georgiano é o único alfabeto atualmente usado para escrever a língua georgiana e outras línguas do Cáucaso. É um alfabeto que se pronuncia exatamente da mesma forma que é escrito. A escrita georgiana mequedrúli já foi descrita como uma das línguas escritas mais bonitas do mundo.\n[…]\nAtualmente existem três tipos de escrita para a língua georgiana; assontávruli (apenas em letras maiúsculas), nuscúri (nuskhuri; letras minúsculas) e mequedrúli (mkhedruli; letras cursivas), este último que é o atual sistema de escrita usado na língua georgiana moderna.\n[…]\nO alfabeto georgiano não distingue entre letras maiúsculas e minúsculas. Contudo, versões modernas de \"maiúsculas\" das letras (análogas às letras de imprensa) foram inventadas e são usadas em certas ocasiões, tais como em títulos de jornais. Estas letras \"maiúsculas\", ao contrário do convencional, alinham-se todas ao mesmo nível e têm a mesma altura.\n[…]\nO alfabeto moderno mequedrúli (mkhedruli) usado na escrita do idioma georgiano tem 33 letras. Originalmente eram mais, mas algumas letras (sombreadas a roxo na tabela abaixo) caíram em desuso. Na tabela, abaixo de cada letra, em itálico, estão as romanizações de cada uma, de acordo com o sistema nacional de romanização de 2002, e aprovado por decreto do presidente da Geórgia em 2011.\n[…]\nA tabela a seguir mostra a ordem dos traços e a direção de cada letra do alfabeto georgiano moderno (Mkhedruli):\n[…]\nO antigo alfabeto assontávruli já não é usado na escrita moderna, mas ainda se pode encontrar em várias inscrições em monumentos antigos e textos litúrgicos.\n[…]\nNota: dependendo do tipo de letra presente no seu sistema, esta tabela poderá estar a apresentar a versão \"maiúscula\" do alfabeto e não o alfabeto assontávruli.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Língua italiana",
      "descricao": "Língua românica oficial da Itália, de San Marino e de parte da Suíça."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O alfabeto tradicional do italiano dispensa letras como o K, o W e o Y. Com quantas letras ele fica?",
    "resposta": "21",
    "distratores": [
      "19",
      "23",
      "24"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Italian_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Italian_alphabet",
        "situacao": "ok",
        "texto": "Italian orthography (the conventions used in writing Italian) uses the Latin alphabet to write the Italian language. This article focuses on the writing of Standard Italian, based historically on the Florentine variety of Tuscan.\n[…]\nThe base alphabet consists of 21 letters: five vowels (A, E, I, O, U) and 16 consonants. The letters J, K, W, X and Y are not native to Italian, but appear in words of ancient Greek origin (e.g. Xilofono), loanwords (e.g. \"weekend\"), foreign names (e.g. John), scientific terms (e.g. km) and in a handful of native words—such as the names Kalsa, Jesolo, Bettino Craxi, and Cybo, which all derive from regional languages.\n[…]\nThe grave accent (`) is found on ⟨à⟩, ⟨è⟩, ⟨ì⟩, ⟨ò⟩, ⟨ù⟩. It may be used on ⟨è⟩ and ⟨ò⟩ when they represent open-mid vowels. The accents may also be used to differentiate minimal pairs within Italian (for example pèsca, \"peach\", vs. pésca, \"fishing\"), but in practice this is limited to didactic texts. In the case of final ⟨ì⟩ and ⟨ù⟩, both diacritics are encountered.\n[…]\nBy far the most common option is the grave accent, ⟨ì⟩ and ⟨ù⟩, although this may be due to the rarity of the acute accent to represent stress; the alternative of employing the acute, ⟨í⟩ and ⟨ú⟩, is in practice limited to erudite texts, but can be justified as both vowels are high (as in Catalan). However, since there are no corresponding low (or lax) vowels to contrast with in Italian, both choices are equally acceptable.\n[…]\nMaiden, Martin; Robustelli, Cecilia (2014). A Reference Grammar of Modern Italian (2nd ed.). Routledge. ISBN 9781444116786. Retrieved 19 June 2021.\n[…]\nDanesi, Marcel (1996). Italian the Easy way."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Esperanto",
      "descricao": "Língua planejada para a comunicação internacional, publicada em 1887."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O esperanto abre mão do Q, do W, do X e do Y, mas cria letras com acentos próprios. Quantas letras tem seu alfabeto?",
    "resposta": "28",
    "distratores": [
      "24",
      "26",
      "32"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Esperanto_orthography"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Esperanto_orthography",
        "situacao": "ok",
        "texto": "Esperanto is written in a Latin-script alphabet of twenty-eight letters, with upper and lower case. This is supplemented by punctuation marks and by various logograms, such as the digits 0–9, currency signs such as $ € ¥ £ ₷, and mathematical symbols. The creator of Esperanto, L. L. Zamenhof, declared a principle of \"one letter, one sound\", though this is a general rather than strict guideline.\n[…]\nThe vowels necessarily differ from English. Esperanto a e i o u take the letters for English /æ ɛ ɪ ə ɒ/, with more regard to graphic symmetry than phonetic faithfulness in the cases of o and u. C takes the letter for /θ/, the Castilian value of c before e and i, and ĥ that for /ŋ/, the inverse of the letter for /h/. The most divergent letters are those for m and n, which are /ʊ uː/ in English, but which are graphically better suited to be distinct letters than English Shavian /m n/.\n[…]\nThere is a proposed manual alphabet as part of the Signuno  project. Signuno, as a signed variant of Esperanto, is itself a manual logographic Esperanto orthography. The majority of letters of the manual alphabet resemble those of the American manual alphabet, but also of the French manual alphabet and others. The diacritic letters Ĉ, Ĝ, Ĥ, Ĵ, Ŝ, Ŭ have their own signs, and J and Z are distinct from other alphabets, as none of the Signuno letters involve motion.\n[…]\nThe Esperanto versions of braille and Morse code both include the six diacritic letters.\n[…]\nAn Esperanto braille magazine, Aŭroro, has been published since 1920.\n[…]\nThe US television series Resident Alien uses an invented script that does not distinguish u and v, and ignores diacritics, to transcribe Esperanto as the alien language. It is written right to left.\n[…]\nThe 2017 Japanese-language visual novel The Expression Amrilato and its 2021 sequel Distant Memoraĵo feature a language named Juliamo that is actually Esperanto in a modified Latin alphabet."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ortografia_do_esperanto",
        "situacao": "ok",
        "texto": "A ortografia do esperanto se caracteriza por cada letra corresponder a um fonema, e cada som ser representado por uma letra.\n[…]\nO alfabeto do esperanto é composto de 28 letras baseado no alfabeto latino, vinte e duas das quais são idênticas às do português; apenas q, w, x e y foram omitidas. Existem também seis letras com diacríticos: ĉ, ĝ, ĥ, ĵ, ŝ, e ŭ (que são c, g, h, j, e s circunflexo, e u breve).\n[…]\nO esperanto tem as seguintes letras:\n[…]\nLetras especiais do esperanto:\n[…]\nO sistema h funciona do mesmo modo, e nas mesmas circunstâncias que o sistema x, mas usando o h. Esse sistema foi proposto pelo próprio Zamenhof (incluído no Unua Libro), e era o mais popular no começo da história e difusão do esperanto. Mais tarde observou-se o maior uso do sistema x. Exemplos:\n[…]\nO sistema Unicode resolveu, os problemas com o uso da tipografia do esperanto. Em unicode, cada símbolo recebe um número que o representa, esse número não varia quanto à plataforma, software ou formato, mantendo assim a padronização desejada. O Unicode engloba uma grande quantidade de línguas, permitindo, por exemplo, escrever num mesmo texto letras do esperanto, do grego, do japonês e do português. Tal funcionalidade não era possível com a solução anterior, o Latin-3.\n[…]\nA tabela dos códigos que representam os caracteres especiais do esperanto é:\n[…]\nSe o sistema Linux é recente, ou está atualizado, então é provável que o sistema já esteja preparado para trabalhar com telado em Esperanto. Para o X11 e KDE, é só necessário mudar para um layout que tenha dead keys latinas (o ABNT já as possui por padrão).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Alfabeto fenício",
      "descricao": "Sistema de escrita dos fenícios, ancestral dos alfabetos grego e latino."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O alfabeto dos fenícios, ancestral do grego, só tinha sinais para consoantes. Quantos eram esses sinais?",
    "resposta": "22",
    "distratores": [
      "18",
      "26",
      "30"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Phoenician_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Phoenician_alphabet",
        "situacao": "ok",
        "texto": "The Phoenician Script is an abjad (consonantal alphabet)  that was used across the Mediterranean civilization of Phoenicia for most of the 1st millennium BC. It was one of the first alphabets, attested in Canaanite and Aramaic inscriptions found across the Mediterranean basin. In the history of writing systems, the Phoenician script was also the first to have a fixed writing direction—while previo\n[…]\nThe Phoenician script proper uses 22 consonant letters—as an abjad used to write a Semitic language, it leaves vowel sounds implicit—though late varieties sometimes used matres lectionis to denote some vowels. As its letters were originally incised using a stylus, their forms are mostly angular and straight, though cursive forms increased in use over time, culminating in the Neo-Punic alphabet used in Roman North Africa.\n[…]\nThe Kharosthi script is an Aramaic-derived alphasyllabary used in the Indo-Greek Kingdom in the 3rd century BC. The Syriac alphabet is the derived form of Aramaic used in the early Christian period. The Sogdian alphabet is derived from Syriac. It is in turn an ancestor of the Old Uyghur. The Manichaean alphabet is a further derivation from Sogdian.\n[…]\nIt has been proposed, notably by Georg Bühler (1898), that the Brahmi script of India (and by extension the derived Indic alphabets) was ultimately derived from the Aramaic script, which would make Phoenician the ancestor of virtually every alphabetic writing system in use today, with the notable exception of hangul."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_fen%C3%ADcio",
        "situacao": "ok",
        "texto": "O alfabeto fenício (na verdade um consonantário, por ter apenas as consoantes e não as vogais), foi o sistema de escrita usado na Fenícia (atuais Síria, Líbano e norte de Israel) que viria a dar origem a grande parte dos sistemas atuais. Foi adaptado do anterior alfabeto semítico e seu registro mais antigo data de 1200 a.C. O sistema deriva da escrita protosinaítica, por sua vez derivada dos hieró\n[…]\nA inovação do alfabeto fenício está em sua natureza puramente fonética, na qual cada símbolo representa um som, que exige a memorização de apenas alguns caracteres, diferentemente dos sistemas logográficos hieroglíficos e cuneiformes (apesar de não totalmente logográficos), com o primeiro se valendo de caracteres fonéticos e do segundo se valendo de um sistema silábico[A partir de quando?\n[…]\nAntes ou depois do surgimento do sistema fenício?], em que cada caractere representava uma palavra, fazendo necessária a existência de milhares de caracteres (de forma similar aos caracteres chineses), que por sua vez exigiam alta especialização para serem aprendidos.\n[…]\nDentre os sistemas derivados do fenício, estão o alfabeto grego, a escrita itálica antiga e o aramaico (que por sua vez originaria os abjads hebraico e árabe). Não são exemplos de descendência aqueles sistemas do sul da Arábia e o etíope.\n[…]\nO alfabeto fenício é melhor descrito como um abjad porque só contém caracteres para representar consoantes, as vogais devendo ser inferidas, enquanto que um verdadeiro alfabeto representa tanto consoantes quanto vogais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Escrita japonesa",
      "descricao": "Conjunto de sistemas usados para escrever o japonês: kanji, hiragana e katakana."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No japonês, o silabário hiragana, aprendido primeiro pelas crianças, tem quantos caracteres básicos?",
    "resposta": "46",
    "distratores": [
      "26",
      "38",
      "60"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hiragana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hiragana",
        "situacao": "ok",
        "texto": "Hiragana (平仮名, ひらがな; IPA: [çì.ɾä́.ɡä́.nä̀, -nä́, -ŋä́-]) is a Japanese syllabary, part of the Japanese writing system, along with katakana as well as kanji (Chinese characters).\n[…]\nThe following table shows the method for writing each hiragana character. The table is arranged in a traditional manner, beginning top right and reading columns down. The numbers and arrows indicate the stroke order and direction respectively.\n[…]\nHiragana was added to the Unicode Standard in October, 1991 with the release of version 1.0.\n[…]\nThe Unicode block for Hiragana is U+3040–U+309F:\n[…]\nThe Unicode hiragana block contains precomposed characters for all hiragana in the modern set, including small vowels and yōon kana for compound syllables as well as the rare ゐ wi and ゑ we; the archaic 𛀁 ye is included in plane 1 at U+1B001 (see below).\n[…]\nAll combinations of hiragana with dakuten and handakuten used in modern Japanese are available as precomposed characters (including the rare ゔ vu), and can also be produced by using a base hiragana followed by the combining dakuten and handakuten characters (U+3099 and U+309A, respectively). This method is used to add the diacritics to kana that are not normally used with them, for example applying the dakuten to a pure vowel or the handakuten to a kana not in the h-group.\n[…]\nThe Unicode block for Kana Supplement is U+1B000–U+1B0FF, and is immediately followed by the Kana Extended-A block (U+1B100–U+1B12F). These blocks include mainly hentaigana (historic or variant hiragana):\n[…]\nIteration mark explains the iteration marks used with hiragana.\n[…]\nHiragana unicode chart\n[…]\nHiragana table with strokes animations Archived 2023-06-03 at the Wayback Machine\n[…]\nPractice Hiragana"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hiragana",
        "situacao": "ok",
        "texto": "Hiragana (平仮名, ひらがな) é um dos silabários da língua japonesa.\n[…]\nExistem algumas exceções. Se as primeiras duas sílabas de uma palavra consistem numa sílaba sem um dakuten (    ゛), o mesmo hiragana é usado para escrever os sons. Por exemplo  chijimeru (\"ferver\" ou \"encolher\") é escrito como ちぢめる. Para palavras compostas onde os dakuten refletem vocalização rendaku, o hiragana original é usado. Por exemplo, 血 (chi, \"sangue\") é soletrado ち em hiragana simples.\n[…]\nEntretanto, isto não se aplica quando o kanji é usado para fazer palavras que não se relacionam diretamente com seu significado elemental. A palavra japonesa para \"raio\", por exemplo, é inazuma (稲妻). O componente 稲 (\"planta do arroz\") é escrito いな em hiragana e é pronunciado ina. O componente 妻 (\"esposa\") é pronunciado tsuma (つま) quando escrito isolado, ou frequentemente como zuma (ずま) quando está depois de alguma sílaba.\n[…]\nA difusão e assimilação desta nova escrita se deve ao fato que, as principais criadoras do atual hiragana eram princesas da família real japonesa, as quais escreviam seus diários de viagem  (旅行日記 ryokounikki) e do seu dia a dia (日常日記 nichijounikki), que mais tarde seriam transformados em livros, os quais podemos citar como exemplos o 更級日記 (sarashinanikki) e o 紫式部日記 (murasakishikibunikki).\n[…]\nLíngua Japonesa\n[…]\n«ひらがな Exercícios». , exercicios para aprender hiragana.\n[…]\n«Aprenda Hiragana do Zero: Tabela, Leitura e Dicas (Parte 1)». , Aulas de Japonês - Japonês News Br.\n[…]\n«Hiragana Parte 2: Youon, Sokuon e Vogais Longas em Japonês». , Aulas de Japonês - Japonês News Br.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Alfabeto vietnamita",
      "descricao": "Sistema de escrita do vietnamita, baseado no alfabeto latino e desenvolvido por missionários europeus no século dezessete."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No vietnamita escrito, sinais sobre e sob as vogais marcam os tons. Quantos tons tem a pronúncia padrão de Hanói?",
    "resposta": "Seis",
    "distratores": [
      "Três",
      "Quatro",
      "Nove"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vietnamese_alphabet",
      "https://en.wikipedia.org/wiki/Vietnamese_phonology"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vietnamese_alphabet",
        "situacao": "ok",
        "texto": "The Vietnamese alphabet (Vietnamese: chữ Quốc ngữ, lit. 'script of the national language' [t͡ɕɨ˦ˀ˥ kuək̚˧˦ ŋɨ˦ˀ˥] ) is a Latin-based modern writing script for the Vietnamese language. It has spelling conventions derived from the orthography of Romance languages such as Portuguese, Italian, and French. It was originally developed by the Portuguese missionary Francisco de Pina and other Jesuits in t\n[…]\nThe table below shows the vowels of Hanoi Vietnamese (written in the IPA) and the corresponding orthographic symbols.\n[…]\nSince the 1920s, the Vietnamese mostly use chữ Quốc ngữ, and new Vietnamese terms for new items or words are often calqued from Hán Nôm. Some French had originally planned to replace Vietnamese with French, but this never was a serious project, given the small number of French settlers compared with the native population.\n[…]\nThe French had to reluctantly accept the use of chữ Quốc ngữ to write Vietnamese since this writing system, created by Portuguese missionaries, is based on Portuguese orthography, not French.\n[…]\nThe French colonial system then set up another educational system, teaching Vietnamese as a first language using chữ Quốc ngữ in primary school and then the French language (taught in chữ Quốc ngữ). Hundreds of thousands of textbooks for primary education began to be published in chữ Quốc ngữ, with the unintentional result of turning the script into the popular medium for the expression for Vietnamese culture.\n[…]\nVietnamese phonology\n[…]\nVietnamese punctuation\n[…]\nNguyen, Đang Liêm. (1970). Vietnamese pronunciation. PALI language texts: Southeast Asia. Honolulu: University of Hawaii Press. ISBN 0-87022-462-X.\n[…]\nNguyễn, Đình-Hoà. (1955). Quốc-ngữ: The modern writing system in Vietnam. Washington, D. C.: Author.\n[…]\nShih, Virginia Jing-yi. Quoc Ngu Revolution: A Weapon of Nationalism in Vietnam. 1991.\n[…]\nMedia related to Chữ Quốc ngữ at Wikimedia Commons\n[…]\nVietnamese Unicode FAQs"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Vietnamese_phonology",
        "situacao": "ok",
        "texto": "The phonology of Vietnamese features 19 consonant phonemes, with 5 additional consonant phonemes used in Vietnamese's Southern dialect, and 4 exclusive to the Northern dialect. Vietnamese also has 14 vowel nuclei, and 6 tones that are integral to the interpretation of the language. Older interpretations of Vietnamese tones differentiated between \"sharp\" and \"heavy\" entering and departing tones.\n[…]\nThe pronunciation of syllable-final ch and nh in Hanoi Vietnamese has had different analyses. One analysis, that of Thompson (1965), has them as being phonemes /c, ɲ/, where /c/ contrasts with both syllable-final t /t/ and c /k/, and /ɲ/ contrasts with syllable-final n /n/ and ng /ŋ/. Final /c, ɲ/ is, then, identified with syllable-initial /c, ɲ/.\n[…]\nThere is much variation among speakers concerning how tone is realized phonetically. There are differences between varieties of Vietnamese spoken in the major geographic areas (northern, central, southern) and smaller differences within the major areas (e.g. Hanoi vs. other northern varieties). In addition, there seems to be variation among individuals. More research is needed to determine the remaining details of tone realization and the variation among speakers.\n[…]\nThe ngã tone is mid rising (35). Many speakers begin the vowel with modal voice, followed by strong creaky voice starting toward the middle of the vowel, which is then lessening as the end of the syllable is approached. Some speakers with more dramatic glottalization have a glottal stop closure in the middle of the vowel (i.e. as [VʔV]). In Hanoi Vietnamese, the tone starts at a higher pitch (45) than other northern speakers.\n[…]\nThe ngã and hỏi tone are merged into a mid falling-rising (214) [˨˩˦], which is somewhat similar to the hỏi tone of the non-Hanoi Northern accent mentioned above. This merged hỏi–ngã tone is characteristic of Southern Vietnamese accents."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Alfabeto turco",
      "descricao": "Alfabeto latino adotado pela Turquia em 1928, nas reformas de Atatürk, no lugar da escrita árabe."
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Sem Q, W nem X, mas com letras como o cê cedilha, o alfabeto turco moderno tem quantas letras?",
    "resposta": "29",
    "distratores": [
      "23",
      "26",
      "32"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Turkish_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Turkish_alphabet",
        "situacao": "ok",
        "texto": "The Turkish alphabet (Turkish: Türk alfabesi or Türk abecesi) is a Latin-script alphabet used for writing the Turkish language, consisting of 29 letters, seven of which (Ç, Ğ, I, İ, Ö, Ş and Ü) have been modified from their Latin originals for the phonetic requirements of the language. This alphabet represents modern Turkish pronunciation with a high degree of accuracy and specificity.\n[…]\nOf the 29 letters, eight are vowels (A, E, I, İ, O, Ö, U, Ü); the other 21 are consonants.\n[…]\nThe current 29-letter Turkish alphabet was established as a personal initiative of the founder of the Turkish Republic, Mustafa Kemal Atatürk. It was a key step in the cultural part of Atatürk's Reforms, introduced following his consolidation of power. Having established a one-party state ruled by his Republican People's Party, Atatürk was able to sweep aside the previous opposition to implementing radical reform of the alphabet.\n[…]\nIt is also imperative to add that he hoped to relate Turkish nationalism to the modern civilisation of Western Europe, which embraced the Latin alphabet.\" The explicitly nationalistic and ideological character of the alphabet reform showed in the booklets issued by the government to teach the population the new script."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_turco",
        "situacao": "ok",
        "texto": "O alfabeto turco é o alfabeto utilizado para a escrita do idioma turco. É uma variante do alfabeto latino e consiste em 29 letras (21 consoantes e 8 vogais), das quais algumas (Ç, Ğ, I, İ, Ö, Ş, e Ü) foram adaptadas ou modificadas para as exigências fonéticas da língua. O alfabeto representa a pronúncia moderna da língua turca com um alto grau de precisão e especificidade. É o alfabeto oficial e o\n[…]\nAs letras que formam o alfabeto turco são:\n[…]\nDas 29 letras, 8 são vogais (A, E, I, İ, O, Ö, U, Ü) e as outras 21 são consoantes.\n[…]\nAs letras Q, W, e X do alfabeto latino não existem no alfabeto turco.\n[…]\nA ortografia do turco é altamente fonética, e a pronúncia de cada palavra sempre pode ser identificada completamente através da maneira com que é grafada. A tabela a seguir apresenta as letras turcas, os sons que correspondem a elas no alfabeto fonético internacional, e como estes sons podem ser reproduzidos aproximadamente por um falante do português.\n[…]\nO atual alfabeto turco de 29 letras, utilizado para o idioma turco, foi estabelecido através da Lei sobre a Adoção e Implementação do Alfabeto Turco, de número 1353, promulgada em 1 de novembro de 1928 como um passo vital na etapa cultural das Reformas de Atatürk. A escrita, que substituiu a antiga escrita turca otomana, foi criada como uma versão ampliada do alfabeto latino, sob iniciativa de Kemal Atatürk, que anunciou a mudança oficial de alfabeto em julho de 1928.\n[…]\nA tarefa de preparar o novo alfabeto com base nas letras latinas, incorporando as modificações necessárias para os sons específicos do idioma turco, foi empreendida pela Comissão da Língua (Dil Encümeni), que consistia dos seguintes membros:\n[…]\nAlfabeto turcomano uniforme\n[…]\n«Alfabeto turco e guia de pronúncia» (em inglês)\n[…]\n«O alfabeto turco» (em inglês)\n[…]\n«Turco online» (em inglês)\n[…]\nAlfabeto turco (em português) -  Centro Cultural Brasil-Turquia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Língua suaíli",
      "descricao": "Língua banta falada na costa e no interior da África Oriental, com forte influência do árabe."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da língua suaíli vem do plural de uma palavra árabe. O que essa palavra significa?",
    "resposta": "Costa, litoral",
    "distratores": [
      "Comércio",
      "Ilha",
      "Viajante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swahili_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swahili_language",
        "situacao": "ok",
        "texto": "Swahili, also known as Kiswahili, is a Bantu language of the Atlantic–Congo language family, originally spoken by the Swahili people, who are found primarily in Tanzania, Kenya, and Mozambique (along the East African coast and adjacent littoral islands). Estimates of the number of Swahili speakers, including both native and second-language speakers,  generally range from 40 million to 200 million.\n[…]\nAbout 40% of Swahili vocabulary consists of Arabic loanwords, including the name of the language itself (سَوَاحِلي sawāḥilī, a plural adjectival form of an Arabic word meaning 'of the coasts'). Swahili also has a significant number of loanwords from Portuguese, English and German. The Arabic loanwords date from the era of contact between Arab slave traders and the Bantu inhabitants of the east coast of Africa, which was also the time period when Swahili emerged as a lingua franca in the region.\n[…]\nConsequently, there is significant uncertainty regarding the adoption of the Swahili language in Somalia compared to the situation in most other EAC member states.\n[…]\nIn Standard Swahili (Kiswahili sanifu), based on the dialect spoken in Zanzibar, the system is rather complex; however, it is drastically simplified in many local variants where Swahili is not a native language, such as in Nairobi. In non-native Swahili, concord reflects only animacy: human subjects and objects trigger a-, wa- and m-, wa- in verbal concord, while non-human subjects and objects of whatever class trigger i-, zi-. Infinitives vary between standard ku- and reduced i-.\n[…]\nSettler Swahili\n[…]\nMarshad, Hassan A. (1993). Kiswahili au Kiingereza? (Nchini Kenya) (in Swahili). Nairobi: Jomo Kenyatta Foundation. ISBN 9966-22-098-4.\n[…]\nPrins, A. H. J. (1970). A Swahili Nautical Dictionary. Preliminary studies in Swahili lexicon. Vol. 1. Dar es Salaam: Chuo cha Uchunguzi wa Lugha ya Kiswahili. LCCN 79981848.\n[…]\nList of Swahili Dictionaries"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_sua%C3%ADli",
        "situacao": "ok",
        "texto": "O suaíli ou suaíle (Kiswahili), também chamado de suahíli e conhecido pelas formas vernáculas Swahili ou Kiswahili, é a língua banta com o maior número de falantes. É uma das línguas oficiais do Quénia, de Ruanda, da Tanzânia e de Uganda, embora os seus falantes nativos, os povos suaílis, sejam originários apenas das regiões costeiras do oceano Índico. É uma das línguas de trabalho da União Africa\n[…]\nO suaíli é a língua nativa de diversos grupos que habitaram e habitam uma faixa de 2500 km da costa leste da África. Em função do contato dos povos dessa área com comerciantes e navegadores de Língua árabe durante alguns séculos, o suaíli tem cerca de um quarto de suas palavras originadas do árabe. Outras influências foram a língua persa, alemão, português, inglês e idiomas da Índia. É oficial e segundo idioma na Tanzânia, no Congo e no Quênia.\n[…]\nA palavra Kiswahili vem do árabe سواحل, transliterado como sawāhil; é o plural da palavra ساحل, sāhel, \"fronteira\" ou \"litoral\", usada como adjetivo de \"negociantes do litoral\" A adição do prefixo ki o define como um idioma. Waswahili se refere aos povos da \"costa suaíli\" e Uswahili indica a cultura dos suaíli.\" Sahel\" também é o nome que se dá à região austral do deserto do Saara.\n[…]\nKimwani: falado nas ilhas Querimba e costa norte de Moçambique.\n[…]\nNichelle Nichols, na série Star Trek, é a Tenente Uhura, nome que vem do suaíli Uhuru, \"liberdade\". Além disso, a palavra Imzadi, usada em Star Trek: The Next Generation, vem do suaíli e significa \"amado\".\n[…]\nSingulares começando com ki- têm plural com vi- e muitas vezes se referem a ferramentas e utensílios; essa alternância ki-/vi- se usa até para palavras de origem exterior que já tinham o ki- incluído. Ex. do Árabe vitabu \"livros\" vem de kitabu \"livro\" (do árabe kitāb). Essa classe tem também idiomas (ex. Kiswahili), e diminutivos, que já foram uma classe separada.\n[…]\nOmniglot Escrita Suaíli - inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Urdu",
      "descricao": "Língua indo-ariana nacional do Paquistão, também falada por muçulmanos do norte da Índia."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome urdu, língua nacional do Paquistão, vem de uma palavra túrquica que também deu origem a horda. O que ela significa?",
    "resposta": "Acampamento militar",
    "distratores": [
      "Corte real",
      "Mercado",
      "Montanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Urdu"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Urdu",
        "situacao": "ok",
        "texto": "Urdu (اُرْدُو, urdū, [ˈʊɾduː] ) is an Indo-Aryan language spoken primarily in South Asia. It is the national language and lingua franca of Pakistan. It is also an official Eighth Schedule language in India.\n[…]\nUrdu has played a central role in shaping Pakistan’s national identity, holding symbolic significance as a cultural identity in the country’s formation and as a common lingua franca. Because of its use in a variety of contexts such as literature, government and religion, Urdu is often considered to be closely tied to the cultural heritage of Pakistan.\n[…]\nMany bilingual or multi-lingual Urdu speakers, being familiar with both Urdu and English, display code-switching (referred to as \"Urdish\") in certain localities and between certain social groups. On 14 August 2015, the Government of Pakistan launched the Ilm Pakistan movement, with a uniform curriculum in Urdish.\n[…]\nUrdu in its less formalised register is known as rekhta (ریختہ, rek̤h̤tah, 'rough mixture', Urdu pronunciation: [reːxtaː]); the more formal register is sometimes referred to as زبانِ اُردُوئے معلّٰى, zabān-i Urdū-yi muʿallá, 'language of the exalted camp' (Urdu pronunciation: [zəbaːn eː ʊrdu eː moəllaː]) or لشکری زبان, lashkari zabān, 'military language' (Urdu pronunciation: [ləʃkəɾi: zəbɑ:n]), referring to the Imperial army or simply Lashkari.\n[…]\nA highly Persianised and technical form of Urdu was the lingua franca of the law courts of the British administration in Bengal and the North-West Provinces & Oudh. Until the late 19th century, all proceedings and court transactions in this register of Urdu were written officially in the Persian script.\n[…]\nHaruf-e-Tana, a constructed script for Urdu\n[…]\nUrdu Language History and Development"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_urdu",
        "situacao": "ok",
        "texto": "O urdu (اردو) (também conhecida como lashkari لشکری) é uma língua indo-europeia da família indo-ariana que se formou sob influência persa, turca e árabe no sul da Ásia durante a época do sultanato de Déli e do Império Mogol (1200-1800).\n[…]\nDo século XIII até finais do século XVIII, a língua agora conhecida como urdu era também chamada de hindi, hindustani, dehlavi, dihlawi, lahori, e lashkari. Ordu significa exército nas línguas turcas.\n[…]\nNo final do século 18, o urdu era conhecido como Zaban-e-Urdu-e-Mualla, que significa linguagem do acampamento exaltado.\n[…]\nO termo urdu é derivado da palavra turca ordu (exército), que deu origem a palavra portuguesa horda. Desde a conquista do Sultanato de Déli e do Império Mogol até o período da Índia britânica, o urdu era utilizado tanto por hindus quanto por muçulmanos. Este caráter uno da língua perdurou até ser substituído pelo persa quando foi considerado ao lado do inglês uma da línguas oficiais.\n[…]\nComo exércitos persas conquistaram a parte do norte do subcontinente indiano, aos poucos desenvolveu-se um idioma que seria o urdu, uma mistura de hindi e persa, que seria mais utilizado como uma linguagem de negócios, política e questões militares. O urdu foi a linguagem oficial do governo de grande parte do subcontinente indiano durante cerca de 600 anos e acabou auxiliando na formação de uma identidade particular para os muçulmanos do subcontinete indiano.\n[…]\nUrdu é o idioma nacional do Paquistão. Divide o status de idioma oficial com o inglês. Apesar de o inglês ser mais utilizado normalmente pela elite e de o panjabi possuir uma grande quantidade de falantes nativos, o urdu é a língua franca do país. Também é uma das línguas oficiais da Índia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Quíchua",
      "descricao": "Família de línguas indígenas dos Andes, falada no antigo Império Inca."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nos Andes, os próprios falantes chamam o quíchua de runa simi. Como se traduz esse nome?",
    "resposta": "Fala do povo",
    "distratores": [
      "Língua do sol",
      "Voz dos Andes",
      "Palavra do inca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Quechuan_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Quechuan_languages",
        "situacao": "ok",
        "texto": "Quechua (; Spanish: [ˈketʃwa]), also called Runa simi in Southern Quechua (pronounced [ˈɾʊna ˈsɪmɪ], 'people's language'), is an indigenous language family that originated in central Peru and thereafter spread to other countries of the Andes.\n[…]\nAt first, Spaniards referred to the language of the Inca empire as the lengua general, the general tongue. The name quichua was first used in 1560 by Domingo de Santo Tomás in his Grammatica o arte de la lengua general de los indios de los reynos del Perú. It is not known what name the native speakers gave to their language before colonial times and whether it was Spaniards who called it quechua.\n[…]\nThere are two possible etymologies of Quechua as the name of the language. There is a possibility that the name Quechua was derived from *qiĉwa, the native word which originally meant the \"temperate valley\" altitude ecological zone in the Andes (suitable for maize cultivation) and to its inhabitants.\n[…]\nThe Hispanicised spellings Quechua and Quichua have been used in Peru and Bolivia since the 17th century, especially after the Third Council of Lima. Today, the various local pronunciations of \"Quechua\" include [ˈqʰeʃwa ~ ˈqʰeswa], [ˈχɪt͡ʃwa], [ˈkit͡ʃwa], and [ˈʔiʈ͡ʂwa].\n[…]\nAnother name that native speakers give to their own language is runa simi, \"language of man/people\"; it also seems to have emerged during the colonial period.\n[…]\nWanka Quechua\n[…]\nWanka Quechua\n[…]\nWanka Quechua\n[…]\nQuechua lessons at www.andes.org (in Spanish and English)\n[…]\nQuechua dramatic and lyrical works (Dramatische und lyrische Dichtungen der Keshua-Sprache) by Ernst Middendorf (bilingual Quechua – German edition, 1891)\n[…]\nOllantay (Ollanta: ein drama der Keshuasprache), ed. by Ernst Middendorf (bilingual Quechua – German edition, 1890)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_qu%C3%ADchua",
        "situacao": "ok",
        "texto": "O quíchua (em quíchua: qhichwa simi ou runa simi; também chamado de quechua ou quéchua), é uma importante família de línguas indígenas da América do Sul, ainda falada hoje por cerca de dez milhões de pessoas de diversos grupos étnicos da Argentina, Bolívia, Chile, Colômbia, Equador, Peru e ao longo dos Andes. Possui vários dialetos inteligíveis entre si. É uma das línguas oficiais da Bolívia, do P\n[…]\nMuitos consideram o quíchua como uma língua do grupo quechumaran, junto com a língua aimará, principalmente pelo fato de ambas línguas terem muitas palavras em comum. Essa proposta apresenta controvérsias, visto que, se os cognatos são bem próximos (mais próximos até que cognatos \"intraquéchuas\"), o sistema de afixos é bem diferente. As similaridades podem se dever mais ao contato entre os falantes das duas línguas do que a origem comum.\n[…]\nO quíchua possui apenas três vogais: /a/ /i/ /u/, tal como o aimará. Falantes monolíngues pronunciam-nas como [æ] [ɪ] e [ʊ], embora possam ser usadas as vogais /a/ /i/ e /u/ do espanhol. Quando junto a vogais uvulares como /q/, /qʼ/ e /qʰ/, as três vogais ficam mais como [ɑ], [ɛ] e [ɔ] respectivamente.\n[…]\nSão sete os pronomes pessoais em quíchua, com dois tipos de \"nós\": o inclusivo, inclui a pessoa com quem se fala, e o exclusivo, que não inclui a pessoa com quem se fala (nós e você, e nós sem você). O sufixo kuna indica o plural para segunda e terceira pessoas.\n[…]\nO ex-presidente do Equador, Rafael Correa, é falante fluente de quíchua.\n[…]\nHarrison, Regina. Signs, Songs, and Memory in the Andes: Translating Quíchua Language and Culture. Austin: University of Texas Press, 1989. ISBN 0-292-77627-6\n[…]\nKing, Kendall A. Language Revitalization Processes and Prospects: Quichua in the Ecuadorian Andes. Bilingual education and bilingualism, 24. Clevedon, UK: Multilingual Matters LTD, 2001. ISBN 1-85359-495-4\n[…]\nQuíchua lessons (www.andes.org) em Espanhol e Inglês",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Nheengatu",
      "descricao": "Língua geral de base tupi, ainda falada na Amazônia brasileira"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nheengatu, nome da língua de base tupi ainda falada às margens do rio Negro, significa o quê?",
    "resposta": "Língua boa",
    "distratores": [
      "Fala do rio",
      "Gente da mata",
      "Língua antiga"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nheengatu_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nheengatu_language",
        "situacao": "ok",
        "texto": "Nheengatu, also known as Modern Tupi, Língua Geral Amazônica (Amazonian General Language), and Amazonic Tupi, is a Tupi–Guarani language. It is spoken throughout the Rio Negro region among the Baniwa, Baré, and Warekena people in the municipality of São Gabriel da Cachoeira, and the state of Amazonas, Brazil.\n[…]\nThe name of the language derives from the words nhẽẽga (meaning \"language\" or \"word\") and katu (meaning \"good\"). Nheengatu is referred to by a wide variety of names in literature, including Nhengatu, Tupi Costeiro, Geral, Yeral (in Venezuela), Tupi Moderno, Nyengato, Nyengatú, Waengatu, Neegatú, Is'engatu, Língua Brasílica, Tupi Amazônico, Ñe'engatú, Nhangatu, Inhangatu, Nenhengatu, Yẽgatú, Nyenngatú, Tupi, and Lingua Geral.\n[…]\nIt is also commonly referred to as the Língua geral amazônica (LGA) in Brazil.\n[…]\nBy the early 17th century, the Portuguese had conquered the Amazon and established the colonial state of Grão-Pará and Maranhão, whose capital, Belém, was known as Cidade dos Tupinambás or Tupinambá Marií. In pursuit of catechism, Franciscan and Jesuit priests codified the grammar and orthography of the local lingua franca, which over time developed into the Northern General Language, also known as the Amazonian General Language.\n[…]\nThe first documents that were produced were by Jesuit missionaries in the 16th and 17th centuries, such as Arte da Grammatica da Lingoa mais usada na costa do Brasil by Father José de Anchieta (1595) and Arte da Língua Brasilíca by Luis Figueira (1621). These were detailed grammars that served their religious purposes. Multiple dictionaries have also been written over the years (Mello 1967, Grenand and Epaminondas 1989, Barbosa 1951).\n[…]\nRoger Manuel López Yusuino (Venezuelan Nheengatu) (2013)\n[…]\nLíngua Geral"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_nheengatu",
        "situacao": "ok",
        "texto": "O nheengatu (nheengatu: [ɲe.ʔẽ.ɡa.ˈtu], português: [ɲe.ẽ.ɡa.ˈtu]), também conhecido como tupi moderno, é uma língua indígena pertencente à família tupi-guarani, mais especificamente do tronco tupi. Esse idioma, surgido no século XIX, tem origem na língua geral amazônica, que, por sua vez, proveio do tupi antigo.\n[…]\nNo final do século XIX, a conquista da língua portuguesa se consolidou, mas o nheengatu não desapareceu. Ficou enraizado no linguajar do amazônida, no sotaque dos ribeirinhos e nos povos indígenas do rio negro, baixo amazonas ainda que em risco de desaparecer.\n[…]\nÉ possível a existência de cerca de 19 000 falantes de nheengatu em todo o mundo, de acordo com The Ethnologue (2005), embora alguns jornalistas tenham relatado até 30 000. A linguagem recuperou recentemente algum reconhecimento e destaque depois de ter sido suprimida por muitos anos. É falado na região do Alto Rio Negro, no estado do Amazonas, na Amazônia brasileira e em partes vizinhas da Colômbia e Venezuela.\n[…]\nindé re-kuntai amú nheenga (Você fala outra língua)\n[…]\nNAVARRO, Eduardo de Almeida (2011). «Curso de língua geral (nheengatu ou tupi moderno) – A língua das origens da civilização amazônica». São Paulo: Edição do autor. ISBN 978-85-912620-0-7  .\n[…]\nSYMPSON, Pedro Luís. Gramática da língua brasileira: brasílica, tupi ou nheengatu. [S.l.: s.n.] .\n[…]\nCASASNOVAS, Padre A (2006). Noções de língua geral ou nheengatu 2ª ed. Manaus: UFAM; Faculdade Salesiana Dom Bosco .\n[…]\nNAVARRO, Eduardo de Almeida (2016). «Curso de língua geral (nheengatu ou tupi moderno) – A língua das origens da civilização amazônica 2ª edição corrigida e aperfeiçoada» (PDF). São Paulo: Edição do autor. ISBN 978-85-912620-2-1\n[…]\nCurso de língua geral (nheengatu ou tupi moderno): a língua das origens da civilização amazônica, disponibilizado por seu próprio autor",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Língua hindi",
      "descricao": "Língua indo-ariana oficial da Índia, falada sobretudo no norte do país."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome da língua hindi chegou à Índia pelo persa e se refere originalmente à terra de qual grande rio?",
    "resposta": "Indo",
    "distratores": [
      "Ganges",
      "Bramaputra",
      "Eufrates"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hindi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hindi",
        "situacao": "ok",
        "texto": "Modern Standard Hindi (Hindi: आधुनिक मानक हिन्दी, romanised: Ādhunik Mānak Hindī), commonly referred to as Hindi, is an Indo-Aryan language of the Indo-European language family, written in the Devanagari script. It is an official language of India and, alongside English, serves as a lingua franca across much of North, Central, East, Western, and Northeast India, with South India being the main exc\n[…]\nThe term Hindī was originally used to refer to inhabitants of the Indo-Gangetic Plain. It was borrowed from Classical Persian هندی Hindī (Iranian Persian pronunciation: Hendi), meaning 'of or belonging to Hind (India)' (hence, 'Indian').\n[…]\nLike other Indo-Aryan languages, Hindi is a direct descendant of an early form of Vedic Sanskrit (not to be confused with the later variety of Classical Sanskrit). This early variety transitioned in medieval India into Shauraseni Prakrit and Śauraseni Apabhraṃśa (from Sanskrit apabhraṃśa \"corrupt\"), which emerged in the 7th century CE.\n[…]\nThe sound changes that characterised the transition from Middle Indo-Aryan to Hindi are:\n[…]\nIn Northeast India a pidgin known as Haflong Hindi has developed as a lingua franca for the people living in Haflong, Assam who speak other languages natively. In Arunachal Pradesh, Hindi emerged as a lingua franca among locals who speak over 50 dialects natively.\n[…]\nHindi is also spoken by a large population of Madheshis (people having roots in north-India but having migrated to Nepal over hundreds of years) of Nepal. Apart from this, Hindi is spoken by the large Indian diaspora which hails from, or has its origin from the \"Hindi Belt\" of India.\n[…]\nDēshaj (देशज transl. \"of the country\") words: These are words that were not borrowings from non-indigenous languages but do not derive from attested Indo-Aryan words either. Belonging to this category are onomatopoetic words or ones borrowed from local non-Indo-Aryan languages.\n[…]\nHindi Belt"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_hindi",
        "situacao": "ok",
        "texto": "A língua hindi ou híndi (em hindi: हिंदी ou hindī; AFI: [ˈɦɪndiː]) pertence a família indo-iraniana, um subgrupo da família indo-europeia e é listada como língua oficial do governo da Índia, de Fiji, e de vários estados indianos, principalmente do norte, centro e oeste, como Bihar, Deli, Haryana, Jarcanda, Madia Pradexe, Rajastão, Utaracanda, Himachal Pradexe e Utar Pradexe.\n[…]\nHistoricamente, o hindi é originada do sânscrito védico, usado em textos litúrgicos do hinduísmo. Historiadores acreditam que o sânscrito foi trazido para a Índia vindo de onde hoje é o Irã pelos invasores que deslocaram a população que vivia no Vale do Indo por volta de 1500 a 1000 a.c. Nos séculos seguintes os falantes de sânscrito teriam desenvolvido a língua e dialetos teriam surgido, os chamados prácritos, os quais eram usados em conversas do dia a dia e originaram o hindi posteriormente.\n[…]\nO nome do idioma deriva do persa \"hind\" que significa \"terra do rio Indo\", o sufixo \"-i\" indica a língua ou povo da região. Logo, hindi seria a \"língua do Indo\" ou \"povo do Indo\".\n[…]\nO hindi surgiu do sânscrito, uma das principais línguas da Índia antiga. Ele surgiu primeiramente como língua falada, trazida pelos invasores iranianos até o Vale do Indo, por volta de 1500 a.c. e com o passar do tempo e desenvolvimento constante, foi utilizado para a produção de tradições religiosas e literárias da região. O sânscrito védico é a forma mais antiga da língua, o qual era utilizado nos textos sagrados do hinduísmo, os Vedas.\n[…]\nTodavia, após a partição e a emigração de vários muçulmanos, os líderes hindus viram uma menor necessidade de escolher uma língua que fosse familiar ao persa, como o urdu ou o hindustani. Dessa forma, o hindi se tornou a primeira escolha para essa decisão. Ainda assim, essa não era uma tarefa fácil, já que nem todos iriam aceitar a primeira vista uma língua específica.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Basco",
      "descricao": "Língua isolada falada no País Basco, na Espanha e na França."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Nos Pireneus, a palavra euskaldun, usada para designar uma pessoa basca, significa literalmente o quê?",
    "resposta": "Quem possui a língua",
    "distratores": [
      "Filho da montanha",
      "Homem do mar",
      "Povo antigo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Basques"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Basques",
        "situacao": "ok",
        "texto": "Basques are a Southwestern European ethnic group, characterised by the Basque language, a common culture, shared genetic ancestry to the ancient Vascones and Aquitanians, and are considered among the last remaining direct descendants of Neolithic European populations in Europe.\n[…]\nIn Basque, people call themselves the euskaldunak, singular euskaldun, formed from euskal- (i.e. \"Basque (language)\") and -dun (i.e. \"one who has\"); euskaldun literally means a Basque-speaker. Not all Basques are Basque-speakers. Therefore, the neologism euskotar, plural euskotarrak, was coined in the 19th century to mean a Basque person, whether Basque-speaking or not.\n[…]\nAlfonso Irigoyen posits that the word euskara is derived from an ancient Basque verb enautsi \"to say\" (compare modern Basque esan) and the suffix -(k)ara (\"way (of doing something)\"). Thus, euskara would mean literally \"way of saying\" or \"way of speaking\". One item of evidence in favour of that hypothesis is found in the Spanish book Compendio Historial, written in 1571 by the Basque writer Esteban de Garibay. He records the name of the Basque language as enusquera.\n[…]\nThe identifying language of the Basques is called Basque or Euskara, spoken today by 25-30% of the region's population. An idea of the central place the language has in cultural terms is given by the fact that Basques identify themselves by the term euskaldun and their country as Euskal Herria, literally \"Basque speaker\" and \"Country of the Basque Language\" respectively.\n[…]\nDuchy of Vasconia\n[…]\nVascones\n[…]\nEuskal Herria en la Prehistoria, Xabier Peñalver Iribarren, 1996, ISBN 84-89077-58-4."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bascos",
        "situacao": "ok",
        "texto": "Os bascos são um grupo étnico que habita partes do nordeste da Espanha e do sudoeste da França. Os bascos, sendo nativos de Navarra,[carece de fontes]? são predominantemente encontrados na região conhecida como País Basco, consistindo de quatro províncias na Espanha e três na França, localizadas em volta da borda ocidental dos Pirenéus na região costeira do golfo de Biscaia.\n[…]\nEm basco moderno, os bascos modernos chamam a si mesmos euskaldunak, singular euskaldun, de euskal- (língua basca) e -dun (aquele que tem). Então euskaldun literalmente significa um falante de basco. Deveria-se notar que nem todos os bascos são falantes do idioma basco (euskaldunak), e nem todos os falantes de bascos são etnicamente bascos (estrangeiros que aprenderam basco também são euskaldunak).\n[…]\nEstas palavras bascas todas se originam do nome que os bascos usam para denominar sua língua: euskara. Pesquisadores modernos tem reconstruído a pronúncia e o vocabulário dos antigos bascos, e Alfonso Irigoyen propõe que a palavra euskara proceda do verbo \"dizer\" em basco antigo, que era pronunciado enautsi (em basco moderno esan) e do sufixo -(k)ara (\"forma, jeito, caminho (de fazer alguma coisa)). Então euskara poderia significar literalmente \"forma de dizer\", \"forma de falar\".\n[…]\nOutra grande comunidade de bascos vive no Vale Central da Califórnia, principalmente na cidade de Bakersfield, onde há vários restaurantes bascos e um salão basco que anualmente abriga um grande encontro basco. A maioria dos primeiros imigrantes foram para Bakersfield por causa das oportunidades na agricultura e criação de ovelhas. Reno (Nevada), lar do Departamento de Estudos Bascos da Universidade de Nevada, também possui uma significante população de origem basca.\n[…]\nAssim como a língua basca, os bascos são geralmente considerados como sendo um grupo étnico isolado.\n[…]\n«Euskal Herria Info»  (em Basco)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Hieróglifos egípcios",
      "descricao": "Sistema de escrita formal do Egito Antigo, que combinava sinais de sons e de ideias"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra hieróglifo foi criada pelos gregos para a escrita dos templos egípcios. O que ela significa?",
    "resposta": "Entalhe sagrado",
    "distratores": [
      "Imagem do rei",
      "Escrita do rio",
      "Sinal dos mortos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
        "situacao": "ok",
        "texto": "Egyptian hieroglyphs (, HY-roh-glifs) or hieroglyphics was the formal writing system used in Ancient Egypt for writing the Egyptian language. Hieroglyphs combined ideographic, logographic, syllabic, and alphabetic elements, with more than 1,000 distinct characters. Cursive hieroglyphs were used for religious literature on papyrus and wood.\n[…]\nList of Egyptian hieroglyphs\n[…]\nCursive Hieroglyphs\n[…]\nHelp:Multilingual support#Egyptian hieroglyphs\n[…]\nAllen, James P. (1999). Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs. Cambridge University Press. ISBN 978-0-521-77483-3.\n[…]\nCollier, Mark & Bill Manley (1998). How to Read Egyptian Hieroglyphs: a step-by-step guide to teach yourself. British Museum Press. ISBN 978-0-7141-1910-6.\n[…]\nSelden, Daniel L. (2013). Hieroglyphic Egyptian: An Introduction to the Language and Literature of the Middle Kingdom. University of California Press. ISBN 978-0-520-27546-1.\n[…]\nGardiner, Sir Alan H. (1957). Egyptian Grammar: Being an Introduction to the Study of Hieroglyphs, 3rd ed. revised. The Griffith Institute.\n[…]\nKamrin, Janice (2004). Ancient Egyptian Hieroglyphs: A Practical Guide. Harry N. Abrams, Inc. ISBN 978-0-8109-4961-4.\n[…]\nMcDonald, Angela. Write Your Own Egyptian Hieroglyphs. Berkeley: University of California Press, 2007 (paperback, ISBN 0-520-25235-7).\n[…]\nEgyptra - Egyptian Hieroglyphic Guide and Name Translator\n[…]\nAncient Egyptian Hieroglyphics – Aldokkan\n[…]\nGlyphs and Grammars – Resources for those interested in learning hieroglyphs, compiled by Aayko Eyma\n[…]\nHieroglyphics![link removed] – Annotated directory of popular and scholarly resources\n[…]\nUnicode Compliant Hieroglyphic Font – From the University of St Andrews\n[…]\nThe Thot Sign List - an interactive hieroglyphic sign-list database.\n[…]\nThe Polychrome Hieroglyph Research Project - a database of polychrome hieroglyphs."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hier%C3%B3glifos_eg%C3%ADpcios",
        "situacao": "ok",
        "texto": "Hieróglifos egípcios eram o sistema de escrita formal usado no Antigo Egito. Os hieróglifos combinavam elementos logográficos, silábicos e alfabéticos, com um total de cerca de 1 000 caracteres distintos. Acredita-se que tiveram origem por volta de 3000 a.C.\n[…]\nEstudiosos como Geoffrey Sampson argumentaram que os hieróglifos egípcios \"surgiram um pouco depois da escrita suméria e, provavelmente, [foram] inventados sob a influência desta\", e que é \"provável que a ideia geral de expressar palavras de uma língua por escrito tenha sido trazida para o Egito a partir da Mesopotâmia suméria\".\n[…]\nEmbora existam muitos exemplos de relações iniciais entre Egito e Mesopotâmia, a falta de evidências diretas da transferência da escrita significa que \"nenhuma determinação definitiva foi feita quanto à origem dos hieróglifos no antigo Egito\". Desde a década de 1990, as descobertas mencionadas acima de glifos em Abidos, datados entre 3400 e 3200 a.C., lançaram mais dúvidas sobre a noção clássica de que o sistema de símbolos mesopotâmico precede o egípcio. Uma data de 3400 a.C.\n[…]\nTendo aprendido que os hieróglifos eram uma escrita sagrada, os autores greco-romanos imaginaram o sistema complexo, mas racional, como um sistema alegórico, até mágico, que transmitia conhecimento secreto e místico.\n[…]\ndeve ser lido da esquerda para a direita, pois os sinais (como o do machado sagrado, do olho, e dos pássaros) estão voltados para a esquerda.\n[…]\nOutra forma como os hieróglifos funcionam é ilustrada pelas duas palavras egípcias pronunciadas pr (geralmente vocalizadas como per). Uma palavra significa 'casa', e a sua representação hieroglífica é direta:\n[…]\nOutra palavra pr é o verbo 'sair, partir'. Quando esta palavra é escrita, o hieróglifo 'casa' é usado como símbolo fonético:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Língua galesa",
      "descricao": "Língua celta falada no País de Gales, cooficial com o inglês."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra inglesa Welsh, usada para os galeses e sua língua, vem de um termo germânico antigo. O que ele significava?",
    "resposta": "Estrangeiros",
    "distratores": [
      "Montanheses",
      "Guerreiros",
      "Pescadores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wales",
      "https://en.wikipedia.org/wiki/Welsh_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wales",
        "situacao": "ok",
        "texto": "Wales (Welsh: Cymru [ˈkəmrɨ] ) is a country that is part of the United Kingdom. Located on the island of Great Britain, it is bordered by the Irish Sea to the north and west, England to the east, the Bristol Channel to the south, and the Celtic Sea to the south-west. As of 2021, it had a population of 3.1 million. It has a total area of 21,218 square kilometres (8,192 sq mi) and over 2,700 kilomet\n[…]\nMany of these now self-identify as Welsh, and distinctions between 19th and 20th century immigrants are not viewed as significant.\n[…]\nSince Poland joined the European Union, Wales has seen a significant increase in Polish immigrants. This has made Polish the most common main language in Wales after English and Welsh, at 0.7 per cent of the population.\n[…]\nThe University College of Wales opened in Aberystwyth in 1872. Cardiff and Bangor followed, and the three colleges came together in 1893 to form the University of Wales. The Welsh Intermediate Education Act 1889 created 95 secondary schools. The Welsh Department for the Board of Education followed in 1907, which gave Wales its first significant educational devolution.\n[…]\nWhile there has never been an exclusively Welsh-language college, Welsh-medium higher education is delivered through the individual universities and has since 2011 been supported by the Coleg Cymraeg Cenedlaethol (Welsh-language National College) as a delocalised federal institution. In 2021–2022, there were 1,470 maintained schools in Wales. In 2021–22, the country had 471,131 pupils taught by 25,210 full-time equivalent teachers.\n[…]\nThe Prince of Wales's feathers is also used in Wales: it consists of three white feathers emerging from a gold coronet, and the German motto Ich dien (I serve). Several Welsh representative teams, including the Welsh rugby union, and Welsh regiments in the British Army, including the Royal Welsh, use the badge or a stylised version of it."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Welsh_language",
        "situacao": "ok",
        "texto": "Welsh (Cymraeg [kəmˈraːiɡ]  or y Gymraeg [ə ɡəmˈraːiɡ]) is a Celtic language of the Brittonic subgroup that is native to the Welsh people. Welsh is spoken natively in Wales by about 18% of the population, by some in England, and in Y Wladfa (the Welsh colony in Chubut Province, Argentina). Historically, it has also been known in English as Cambrian, Cambric and Cymric.\n[…]\nLiterary Welsh is closer to the form of Welsh standardised by the 1588 translation of the Bible (although the 2004 Beibl Cymraeg Newydd (Welsh for 'New Welsh Bible') is significantly less formal than the traditional 1588 Bible), and is found in official documents and other formal registers, including much literature. As a standardised form, literary Welsh shows little if any of the dialectal variation found in colloquial Welsh. Some differences include:\n[…]\nAn immediate effect of the report was that ordinary Welsh people began to believe that the only way to get on in the world was through the medium of English, and an inferiority complex developed about the Welsh language whose effects have not yet been completely eradicated. The historian Professor Kenneth O. Morgan referred to the significance of the report and its consequences as \"the Glencoe and the Amritsar of Welsh history\".\n[…]\nAt all Welsh universities and the Open University, students have the right to submit assessed work and sit exams in Welsh even if the course was taught in English (usually the only exception is where the course requires demonstrating proficiency in another language). Following a commitment made in the One Wales coalition government between Labour and Plaid Cymru, the Coleg Cymraeg Cenedlaethol (Welsh Language National College) was established.\n[…]\nWelsh Language Commissioner[link removed]\n[…]\nWelsh language at Omniglot\n[…]\nExample knowledge of Welsh (KS25) data (Newport) from the Office for National Statistics"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pa%C3%ADs_de_Gales",
        "situacao": "ok",
        "texto": "País de Gales, ou simplesmente Gales ([ˈweɪlz]; em galês:  Cymru [ˈkəmri] ()), é um país constituinte do Reino Unido. Faz fronteira com a Inglaterra a leste, com o Mar da Irlanda ao norte e a oeste, com o Mar Celta a sudoeste e com o Canal de Bristol ao sul. Em 2021, tinha uma população de 3.107.500 pessoas e uma área de 20.779 km².\n[…]\nAs partes sul e leste da Grã-Bretanha perdidas para a colonização inglesa ficaram conhecidas em galês como Lloegyr (Lloegr, no galês moderno), que pode ter se referido ao reino da Mércia originalmente e que passou a se referir à Inglaterra como um todo. As tribos germânicas que agora dominavam essas terras eram invariavelmente chamadas de Saeson, que significa \"saxões\". Os anglo-saxões chamavam o romano-britânico de *Walha, que significa \"estrangeiro romanizado\" ou \"estrangeiro\".\n[…]\nO Plaid Cymru foi formado em 1925, buscando maior autonomia ou independência do resto do Reino Unido. O termo \"Inglaterra e País de Gales” tornou-se comum para descrever a área à qual a lei inglesa se aplicava, e em 1955 Cardiff foi proclamada como a capital do País de Gales. Cymdeithas yr Iaith Gymraeg (A Sociedade da Língua Galesa) foi formada em 1962, em resposta aos temores de que a língua pudesse desaparecer em breve.\n[…]\nA língua galesa (em galês: Cymraeg) é uma língua indo-europeia da família celta; As línguas mais estreitamente relacionadas são o córnico e o bretão. A maioria dos linguistas acredita que as línguas celtas chegaram à Grã-Bretanha por volta de 600 a.C.. As línguas britônicas deixaram de ser faladas na Inglaterra e foram substituídas pela língua inglesa, que chegou ao País de Gales por volta do final do século VIII devido à derrota do Reino de Powys.\n[…]\nAssembleia Nacional do País de Gales (em galês e inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Maoris",
      "descricao": "Povo polinésio nativo da Nova Zelândia, que chegou às ilhas por volta do século treze."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na própria língua do povo nativo da Nova Zelândia, o que significa a palavra maori?",
    "resposta": "Comum, normal",
    "distratores": [
      "Guerreiro",
      "Navegador",
      "Filho do mar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/M%C4%81ori_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/M%C4%81ori_people",
        "situacao": "ok",
        "texto": "Māori are the indigenous Polynesian people of mainland New Zealand. Māori are descended from East Polynesian settlers who arrived in New Zealand in several waves of canoe voyages between roughly 1320 and 1350. Over several centuries in isolation, these settlers developed a distinct culture, whose language, mythology, crafts, and performing arts evolved independently from those of other eastern Pol\n[…]\nIn the Māori language, the word māori means 'normal', 'natural', or 'ordinary'. In legends and oral traditions, the word distinguished ordinary mortal human beings—tāngata māori—from deities and spirits (wairua). Likewise, wai māori denotes 'fresh water', as opposed to salt water. There are cognate words in most Polynesian languages, all deriving from Proto-Polynesian *ma(a)qoli, which has the reconstructed meaning 'true, real, genuine'.\n[…]\nTensions led to widespread conflict in the 1860s, and the confiscation of millions of acres of Māori land. Significant amounts of land were also purchased by the colonial government and later through the Native Land Court.\n[…]\nMāori protest movements grew significantly in the 1960s and 1970s seeking redress for past grievances, particularly in regard to land rights. Successive governments have responded by enacting affirmative action programmes, funding cultural rejuvenation initiatives and negotiating tribal settlements for past breaches of the Treaty of Waitangi. Further efforts have focused on reducing socioeconomic disparity.\n[…]\nThe contesting of these seats was the first opportunity for many Māori to participate in New Zealand elections, although the elected Māori representatives initially struggled to assert significant influence. Sir Āpirana Ngata has often been described as the foremost Māori politician to have served in Parliament in the mid-20th century.\n[…]\nEntry on the Māori people in Te Ara: The Encyclopedia of New Zealand"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Maoris",
        "situacao": "ok",
        "texto": "Os maoris ou maores são o povo nativo da Nova Zelândia.\n[…]\nNa língua maori, a palavra maori (em maori: Maori; pronunciado [maːɔɾi] ()) representa toda uma cultura. Em lendas e outras tradições orais, a palavra distinguia seres humanos mortais de divindades e espíritos. Maori tem cognatos em outras línguas da Polinésia, como na língua havaiana (em havaiano: Maoli) e na língua taitiana (em taitiano: Maohi), e todos têm significados semelhantes.\n[…]\nOs primeiros exploradores europeus às ilhas da Nova Zelândia se referiam às pessoas que lá encontraram como \"aborígenes\", \"nativos\" ou \"neozelandeses\". Maori permaneceu como o termo usado pelos maoris para descreverem a si mesmos. Em 1947, o Departamento de Relações Nativas foi renomeado para Departamento de Relações Maoris para reafirmar a decisão.\n[…]\nNa Nova Zelândia existe uma tradição forte relacionada à tatuagem. Para muitas culturas, a mão, o rosto e o pescoço ficam fora da pintura corporal, mas para os maoris, quanto mais nobre ele é ou mais elevada sua posição social, mais coberto de tatuagens é seu rosto, refletindo seu status dentro da tribo ou clã.\n[…]\nA colonização europeia da Nova Zelândia é relativamente recente. Os maoris foram a última comunidade a ser influenciada pelos europeus.\n[…]\nNo começo dos anos 1780 os maoris tiveram encontros com marinheiros e baleeiros; alguns até eram tripulantes dos navios estrangeiros. A corrente contínua de presos que escapavam e de outros desertores em navios da Austrália também expôs a população indígena da Nova Zelândia à influências de fora.\n[…]\nReino Māori",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Berberes",
      "descricao": "Povos nativos do norte da África, do Marrocos ao Egito ocidental, que se chamam de amazigues."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No norte da África, os povos chamados de berberes preferem o nome amazigue. Como essa palavra costuma ser traduzida?",
    "resposta": "Homens livres",
    "distratores": [
      "Filhos do deserto",
      "Gente da montanha",
      "Senhores do sal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Berbers"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Berbers",
        "situacao": "ok",
        "texto": "Berbers, also known as Amazighs or Imazighen, are an ethnic group indigenous to North Africa. They are primarily connected by their use of Berber languages, which are part of the Afroasiatic language family.\n[…]\nThe Berbers are indigenous to the Maghreb region of North Africa, where they live in communities across parts of Morocco, Algeria, Libya, and to a lesser extent Tunisia, Mauritania, northern Mali and northern Niger (Azawagh). Smaller Berber communities are also found in Burkina Faso and Egypt's Siwa Oasis. Many in the community view the exonym \"Berber\", equivalent and related to the Arabic word for \"barbarian\" (بربر), as pejorative, and prefer the endonym \"Amazigh\".\n[…]\nThe indigenous populations of the Maghreb region of North Africa are collectively known as Berbers or Amazigh in English. The plural form Imazighen is sometimes also used in English.\n[…]\nStéphane Gsell proposed the translation \"noble/free\" for the term Amazigh based on Leo Africanus's translation of \"awal amazigh\" as \"noble language\" referring to the Berber languages. This definition remains disputed and is seen by some as an undue extrapolation. Related words such as mmuzeɣ ('to be noble', 'generous') exist among the Imazighen of Central Morocco, while tmuzeɣ ('to free oneself', 'revolt') is found among the Kabyles of Ouadhia.\n[…]\nThere is an identity-related debate about the persecution of Berbers by the Arab-dominated regimes of North Africa through both Pan-Arabism and Islamism, their issue of identity is due to the pan-Arabist ideology of former Egyptian president, Gamal Abdel Nasser. Some activists have claimed that \"[i]t is time—long past overdue—to confront the racist arabization of the Amazigh lands.\""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Berberes",
        "situacao": "ok",
        "texto": "Os berberes (que chamam a si próprios Imazighen, que significa \"homens livres\" ou \"homens nobres\"; singular Amazigh) referem-se ao conjunto de povos do Norte de África que falam línguas berberes da família de línguas afro-asiáticas. Estima-se que existam entre 58 e 75 milhões de pessoas que falam estas línguas, principalmente em Marrocos e Argélia, incluindo os tuaregues, predominantemente nômades\n[…]\nOs historiadores árabes, por sua vez, adotaram a palavra \"barbaros\" (em árabe: بَربَر, pronúncia: [bærbær]), e os europeus passaram a se referir à costa do Norte da África como Berbéria (ou Barbaria).\n[…]\nPor volta de 12 mil anos atrás, um grupo populacional do Oriente Próximo se fixa no Norte da África, quando o Deserto do Saara ainda era uma savana verde, sendo seus membros os ancestrais dos berberes e dos egípcios.\n[…]\nLogo quando este processo começou, houve a divisão entre os berberes e os egípcios, pois houve um deslocamento dos povos que habitavam o Norte da África: um grupo migra para o Vale do Nilo, no atual Egito, e funda aldeias agricultoras e, paulatinamente, surge a civilização egípcia; muitos se deslocam para o litoral norte-africano, região de clima mais agradável e com mais recursos, ali desenvolvendo a agricultura, e os que permaneceram no interior do deserto tiveram que adotar um estilo de vida nômade pastoril, fundando assentamentos temporários nas margens de oásis.\n[…]\nA primeira classificação das tribos berberes, válida para a segunda metade do século XIV, foi fornecida pelo historiador árabe ibne Caldune. A leste se situavam os leuatas da Cirenaica, de Tripolitânia, do Jeride e do Aurés, a oeste, os branês e os zenetas. Estes últimos, grandes nômades conquistadores que chegaram na África do Norte no fim do período bizantino, foram os primeiros a serem arabizados. Os branês, aqueles que se designavam amazigues (homens livres), seriam os berberes mais antigos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua Brasileira de Sinais, a língua de sinais usada pela comunidade surda do Brasil."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Libras, do Brasil, e a língua de sinais americana têm raízes na mesma língua de sinais europeia. Qual?",
    "resposta": "Língua de sinais francesa",
    "distratores": [
      "Língua de sinais portuguesa",
      "Língua de sinais britânica",
      "Língua de sinais alemã"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/French_Sign_Language",
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/French_Sign_Language",
        "situacao": "ok",
        "texto": "French Sign Language (French: langue des signes française, LSF) is the sign language of deaf and hard-of-hearing people in France. LSF is the first language used by French citizens, and is used as a second language by a significant number of hearing and deaf French people. Although the exact number of users are uncertain, there are between 80,000 and 120,000 deaf users of LSF, out of a total of ap\n[…]\nAccording to Sachs, Old LSF quickly merged with the American indigenous sign languages used at the time, eventually becoming ASL.\n[…]\nBy the mid-1970s, oralism as an ideology and educational methodology \"reigned supreme in the education of Deaf children and teenagers\" in France. LSF became forbidden in the classroom and was often banned in all places associated with the institutions Deaf students attended. According to linguist Christian Cuxoc, it resulted in the delay of Deaf children's  progress during their first ten years of elementary school, compared with their hearing counterparts.\n[…]\nIn 1975, a small group of participants at the World Federation of the Deaf (WFD) meetings in Washington, D.C., met to develop an alternative to the educational practices in France. In 1977, the Ministry of Health lifted the ban of LSF in educational settings, and the use of LSF was permitted in homes, high schools, and universities starting in 1980. In 1991, the Fabius Law was passed that authorized the choice of a bilingual education in both French and LSF for Deaf students.\n[…]\nIn 1996, there was a national demonstration of Deaf people that called for the official recognition of LSF as a language in France, and a national march was held in eight French cities, also calling for the official recognition of LSF. The French government finally made that recognition in February 2005 by passing Article L312-9-1."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nHistorical efforts were commonly transcribed using Portuguese words, written in upper case, to stand for each equivalent Libras morpheme.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nIn September 2017, new Libras accessibility requirements took effect in Brazil mandating availability of Brazilian Sign Language for films shown in Brazilian movie theaters. Sign language is displayed to moviegoers on a second screen device. Sign language is stored as a Sign Language Video track in the Digital Cinema Package (DCP), synchronized with the rest of the film.\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_de_sinais_francesa",
        "situacao": "ok",
        "texto": "A língua francesa de sinais (em francês langue des signes française ou LSF) é a língua de sinais das pessoas surdas da França. Segundo a revista Ethnologue, ela têm entre 50.000 a 100.000 usuários.\n[…]\nA língua francesa de sinais está relacionada (e é parcialmente mais antiga) à língua de sinais neerlandesa (NGT), a língua de sinais alemã (DGS), língua de sinais flamenga (VGT), língua de sinais belga-francófona (LSFB), língua de sinais irlandesa (ISL), língua de sinais americana (ASL), língua de sinais do Quebec (LSQ) e a Língua de Sinais Brasileira (LIBRAS).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Língua inglesa",
      "descricao": "Língua germânica nascida na Inglaterra, com grande parte do vocabulário de origem francesa e latina."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Falado numa província do norte da Holanda, que idioma é apontado como o parente vivo mais próximo do inglês na Europa continental?",
    "resposta": "Frísio",
    "distratores": [
      "Holandês",
      "Dinamarquês",
      "Alemão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Frisian_languages",
      "https://en.wikipedia.org/wiki/English_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Frisian_languages",
        "situacao": "ok",
        "texto": "The Frisian languages ( FREE-zhən or  FRIZ-ee-ən) are a closely related group of West Germanic languages, spoken by about 400,000 Frisian people, who live on the southern fringes of the North Sea in the Netherlands and Germany. The Frisian languages are the closest living language group to the Anglic languages; the two groups make up the Anglo-Frisian languages group and together with the Low Germ\n[…]\nAfterwards this practice was continued under the Habsburg rulers of the Netherlands (the German Emperor Charles V and his son, the Spanish King Philip II), and even when the Netherlands became independent, in 1585, West Frisian did not regain its former status. The reason for this was the rise of Holland as the dominant part of the Netherlands, and its language, Dutch, as the dominant language in judicial, administrative and religious affairs.\n[…]\nThe compiled literary work of the Halbertsma brothers (Joost, Tjalling, and Eeltje), Rimen en Teltsjes, is regarded as the standard Frisian literary work. This had begun the effort to continuously preserve the West Frisian language, which continues unto this day.\n[…]\nIt was not until 1960 that Dutch began to dominate West Frisian in Friesland; with many non-Frisian immigrants into Friesland, the language gradually began to diminish, and survives now only due to the constant effort of scholars and organisations. In recent years, it has been the province of Friesland, rather than the language itself, that has become a more important part of the West Frisian identity; as such, the language has become less important for cultural preservation purposes.\n[…]\nIt is especially written West Frisian that seems to have trouble surviving, with only 30% of the West Frisian population competent in it; it went out of use in the 16th century and continues to be barely taught today."
      },
      {
        "url": "https://en.wikipedia.org/wiki/English_language",
        "situacao": "ok",
        "texto": "English is a West Germanic language of the Indo-European language family that emerged in early medieval England and has since become a global lingua franca. The language is named after the Angles, one of the Germanic peoples who migrated to Britain after the end of Roman rule. English is the most spoken language in the world, primarily due to the global influence of the British Empire (succeeded b\n[…]\nRegarding its future development, it is considered most likely that English will continue to function as a koiné language, with a standard form that unifies speakers around the world.\n[…]\nThe phrasal verb frequently has a highly idiomatic meaning that is more specialised and restricted than what can be simply extrapolated from the combination of verb and preposition complement (e.g. lay off meaning terminate someone's employment). Some grammarians do not consider this type of construction to form a syntactic constituent and hence refrain from using the term \"phrasal verb\".\n[…]\nDiscourse markers are also used for stance taking in which speakers position themselves in a specific attitude towards what is being said, for example, \"no way is that true!\" (the idiomatic marker \"no way!\" expressing disbelief), or \"boy! I'm hungry\" (the marker boy expressing emphasis). While discourse markers are particularly characteristic of informal and spoken registers of English, they are also used in written and formal registers.\n[…]\nEnglish has had a strong influence on the vocabulary of other languages. The influence of English stems from factors such as opinion leaders in other countries knowing the English language, the role of English as a world lingua franca, and the large number of books and films that are translated from English into other languages."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_fr%C3%ADsia",
        "situacao": "ok",
        "texto": "As línguas frísias, também conhecida como frisãs, são uma família linguística anglo-frísia, sendo os idiomas mais próximos das línguas inglesas por uma séria de metaplasmos comuns. São faladas nos Países Baixos e em partes da Alemanha.\n[…]\nOs registros mais antigos em Frisão (ou Frísio, Frisco e Frison) procedem do século XIII, ainda que os documentos oficiais neles contidos devam ter sido provavelmente escritos no século XI, na variante denominada antigo frisão, que até 1550 se desenvolve até o médio frisão e a partir de 1800 passa ao moderno frisão até os dias atuais.\n[…]\nO frisão é a língua mais próxima do inglês, pertencendo ao grupo anglo-frisão, dentro do ramo ocidental das línguas germânicas. Possui palavras parecidas com as inglesas,  como \"doze\" (tolve em frísio ocidental, twelve em inglês) ou o pronome da 3ª pessoa do singular \"ele\" (hy em frísio ocidental, he em inglês).\n[…]\nA princípio lentamente, os objetivos deste movimento foram dando certo, especialmente na província da Frísia (ofícial e no frísio ocidental: Fryslân; em neerlandês: Friesland), nos Países Baixos, onde em 1937 a língua foi aceita como opcional nas escolas primárias. Foi fundada uma Academia Frisã em 1938, publicando-se em 1943 a primeira tradução da Bíblia. Em 1955 a língua foi aprovada como língua de ensino primordial na educação primária e em 1956 foi aprovado o uso do frisão nos tribunais.\n[…]\nOcidental – Maior idioma. Diversos dialetos falados na província da Frísia por 70% dos habitantes e na municipalidade de De Marne, na Groninga, nos Países Baixos, como forte língua provincial, apesar do bilingualismo com o neerlandês.\n[…]\nOriental – Falado em partes da Baixa Saxônia, sem dialetos atestados. Em transição para o alemão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Alfabeto latino",
      "descricao": "Sistema de escrita derivado do usado pelos antigos romanos, base da escrita do português e de centenas de outras línguas."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Antes de chegar aos romanos, o alfabeto grego foi adaptado por qual povo vizinho na Itália antiga?",
    "resposta": "Etruscos",
    "distratores": [
      "Fenícios",
      "Celtas",
      "Samnitas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Latin_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Latin_alphabet",
        "situacao": "ok",
        "texto": "The Latin alphabet is the set of letters used by the ancient Romans to write Classical Latin, later augmented with lower-case letters to write Medieval Latin. Its expansion into the core 26-letter modern inventory (standardised today as the ISO basic Latin alphabet, which is utilized by Modern Latin), was motivated by vernacular languages.\n[…]\nThe Latin alphabet evolved from the visually similar Etruscan alphabet, which evolved from the Cumaean Greek version of the Greek alphabet, which was itself descended from the Phoenician alphabet, which in turn derived from Egyptian hieroglyphs. The Etruscans ruled early Rome; their alphabet evolved in Rome over successive centuries to produce the Latin alphabet.\n[…]\nIt is generally believed that the Latin alphabet used by the Romans was derived from the Old Italic alphabet used by the Etruscans. That alphabet was derived from the Euboean alphabet used in Cumae, which in turn was derived from the Phoenician alphabet.\n[…]\nLatin included 21 different characters. The letter ⟨C⟩ was the western form of the Greek gamma, but it was used for the sounds /ɡ/ and /k/ alike, possibly under the influence of Etruscan, which may have lacked any voiced plosives. Later, probably during the 3rd century BC, the letter ⟨Z⟩ – not needed to write Latin properly – was replaced with the new letter ⟨G⟩, a ⟨C⟩ modified with a small vertical stroke, which took its place in the alphabet.\n[…]\nRix, Helmut (1993). \"La scrittura e la lingua\". In Cristofani, Mauro (hrsg.) (ed.). Gli etruschi – Una nuova immagine. Firenze: Giunti. pp. S.199–227."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_latino",
        "situacao": "ok",
        "texto": "O alfabeto latino, também conhecido como alfabeto romano, é o conjunto de letras originalmente usado pelos antigos romanos para escrever a língua latina. Em grande parte inalterado, exceto por algumas letras divididas — ou seja, ⟨J⟩ de ⟨I⟩ e ⟨U⟩ de ⟨V⟩ — adições como ⟨W⟩ e extensões como letras com diacríticos, ele forma a escrita latina que é usada para escrever a maioria das línguas da Europa, Á\n[…]\nSeu inventário moderno básico é padronizado como o alfabeto latino básico ISO.\n[…]\nO alfabeto latino evoluiu do alfabeto etrusco visualmente semelhante, que evoluiu da versão grega cumana do alfabeto grego, que por sua vez descendia do alfabeto fenício, que por sua vez derivou dos hieróglifos egípcios. Os etruscos governaram a Roma antiga; seu alfabeto evoluiu em Roma ao longo dos séculos sucessivos para produzir o alfabeto latino.\n[…]\nAcredita-se geralmente que o alfabeto latino usado pelos romanos foi derivado do alfabeto itálico antigo usado pelos etruscos. Esse alfabeto foi derivado do alfabeto eubeu usado pelos cumas, que por sua vez foi derivado do alfabeto fenício.\n[…]\nO latim incluía 21 caracteres diferentes. A letra ⟨C⟩ era a forma ocidental do grego gama, mas era usada para os sons /ɡ/ e /k/ igualmente, possivelmente sob a influência do etrusco, que pode não ter nenhuma oclusiva sonora. Mais tarde, provavelmente durante o século III a.C., a letra ⟨Z⟩ – desnecessária para escrever latim corretamente – foi substituída pela nova letra ⟨G⟩, um ⟨C⟩ modificado com um pequeno traço vertical, que tomou seu lugar no alfabeto.\n[…]\nAlfabeto Eubeu\n[…]\nAlfabeto latino básico ISO\n[…]\nLegado do Império Romano\n[…]\nAlfabeto fenício\n[…]\nRix, Helmut (2002) [1984]. «La scrittura e la lingua». In:  Cristofani, Mauro. Gli etruschi – Una nuova immagine (em italiano). Firenze: Giunti. 240 páginas. ISBN 978-8809017924. OCLC 878576705\n[…]\nAlfabeto latino",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Língua copta",
      "descricao": "Última fase da língua egípcia antiga, escrita com um alfabeto derivado do grego e usada na liturgia da Igreja Copta."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Ainda usada na liturgia dos cristãos do Egito, a língua copta é a fase final de qual idioma antigo?",
    "resposta": "Egípcio dos faraós",
    "distratores": [
      "Grego antigo",
      "Aramaico",
      "Árabe clássico"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coptic_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coptic_language",
        "situacao": "ok",
        "texto": "Coptic (Bohairic Coptic: ϯⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ, romanized: Timetremənkʰēmi) is a dormant Afroasiatic language. It is a group of closely related Egyptian dialects, representing the most recent developments of the Ancient Egyptian language, and historically spoken by the Egyptians, starting from the third century AD in Roman Egypt. Coptic was supplanted by Arabic as the primary spoken language of Egypt foll\n[…]\nBohairic, the dialect of Lower Egypt, gained prominence in the 9th century and is the dialect used by the Coptic Church liturgically.\n[…]\nBohairic is the dialect used as the liturgical language of the modern Coptic Orthodox Church, replacing Sahidic some time in the eleventh century. In contemporary liturgical use, there are two traditions of pronunciation, arising from successive reforms in the 19th and 20th centuries (see Coptic pronunciation reform). Modern revitalisation efforts are based on this dialect.\n[…]\nThere is no length distinction in final stressed position, but only those vowels that occur long appear there: ⟨(ⲉ)ⲓ, ⲉ, ⲁ, ⲟ~ⲱ, ⲟⲩ⟩.\n[…]\nWhat invariably attracts the attention of the reader of a Coptic text, especially if it is written in the Sa'idic dialect, is the very liberal use which is made of Greek loan words, of which so few, indeed, are to be found in the Ancient Egyptian language. There Greek loan words occur everywhere in Coptic literature, be it Biblical, liturgical, theological, or non-literary, i.e. legal documents and personal letters.\n[…]\nPolotsky, Hans Jakob. 1971. \"Coptic\". In Afroasiatic: A Survey, edited by Carleton Taylor Hodge. (Jana Linguarum: Series Practica; 163). 's Gravenhage and Paris: Mouton. 67–79.\n[…]\nLayton, Bentley. 2000. A Coptic Grammar (Sahidic Dialect): With a Chrestomathy and Glossary. (Porta linguarum orientalium; N.S., 20). Wiesbaden: Harrassowitz."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_copta",
        "situacao": "ok",
        "texto": "Esta página contém alguns caracteres especiais e é possível que a impressão não corresponda ao artigo original.\n[…]\nPara os árabes, que conquistaram o Egito no século VII, as palavras \"wikt:egípcio\" e \"wikt:cristão\" eram sinônimas, daí surgiu o termo Qibti que, por sua vez, é a corruptela da palavra grega Aigyptioi, que significa Egito. Quando foi finalmente suplantada, no século XII, pelo árabe, o copta foi preservado como língua litúrgica, na Igreja Monofisista Copta, que havia se separado do rito bizantino no século V.\n[…]\nO copta antigo apresentava-se principalmente em textos não cristãos tais como nas preces pagãs, nos Papiros de Magia e Astrologia. Muitos desses textos foram usados como \"maquiagens\" de escritas  originais hieráticas ou demóticas e eram usados para não falantes do idioma egípcio.\n[…]\nAssim, a transição entre as antigas tradições egípcias e a nova crença, o Cristianismo, contribuiu muito para a adoção de palavras gregas ao léxico religioso copta. Também se pode afirmar que o linguajar quotidiano da população nativa manteve algo dos caracteres antigos do Egito, o que se verifica em textos, como contratos e cartas, não relacionadas à religião cristã.\n[…]\nAssim, a transição entre as antigas tradições egípcias e a nova crença, o Cristianismo, contribuiu muito para a adoção de palavras gregas ao léxico religioso copta. Também se pode afirmar que o linguajar quotidiano da população nativa manteve algo dos caracteres antigos do Egito, o que se verifica em textos, como contratos e cartas, não relacionadas à religião cristã.\n[…]\nArte copta\n[…]\nIgreja Ortodoxa Copta",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Tupi antigo",
      "descricao": "Língua indígena falada no litoral do Brasil no século dezesseis, base das línguas gerais coloniais."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Jabuticaba, capivara e pipoca chegaram ao português por meio de qual língua indígena falada no litoral do Brasil colonial?",
    "resposta": "Tupi antigo",
    "distratores": [
      "Quíchua",
      "Quimbundo",
      "Aimará"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tupi_language",
      "https://en.wikipedia.org/wiki/Capybara"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tupi_language",
        "situacao": "ok",
        "texto": "Old Tupi, Ancient Tupi or Classical Tupi (Portuguese pronunciation: [tuˈpi]) is a classical Tupian language which was spoken by the Indigenous Tupi people of Brazil, who inhabited coastal regions in South and Southeast Brazil. In the words of Brazilian tupinologist Eduardo Navarro, \"it is the classical indigenous language of Brazil, and the one which had the utmost importance to the cultural and s\n[…]\nThe names Old Tupi or Classical Tupi are used for the language in English and by modern scholars (it is referred to as tupi antigo in Portuguese). It has previously been known, in Portuguese, as língua brasílica \"Brazilian language\".\n[…]\nIn the first two or three centuries of Brazilian history, nearly all colonists coming to Brazil would learn the tupinambá variant of Tupi, as a means of communication with both the Indigenous people and with other early colonists who had adopted the language.\n[…]\nThis is the Lord's Prayer in Tupi, according to Anchieta in his Catecismo na língua brasílica.\n[…]\nAs the basis for the língua geral, spoken throughout the country by white settlers and Indigenous people alike until the early 18th century, and still heard in isolated pockets until the early 20th century, Tupi left a strong mark on the Portuguese language of Brazil.\n[…]\nOld Tupi literature was composed mainly of religious and grammatical texts developed by Jesuit missionaries working among the colonial Brazilian people. The greatest poet to express in written Tupi language, and its first grammarian was José de Anchieta, who wrote over eighty poems and plays, compiled at his Lírica Portuguesa e Tupi. Later Brazilian authors, writing in Portuguese, employed Tupi in the speech of some of their characters.\n[…]\nLíngua Geral\n[…]\nLemos Barbosa, A. Curso de Tupi antigo. Rio de Janeiro: Livraria São José, 1956.\n[…]\nAn elementary course of Old Tupi (in Portuguese)\n[…]\nAnother course of Old Tupi (in Portuguese)\n[…]\nAncient Tupi Home Page"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Capybara",
        "situacao": "ok",
        "texto": "The capybara (  kap-ih-BAR-uh) or greater capybara (Hydrochoerus hydrochaeris) is the largest living rodent, native to all countries in South America except Chile. It is a semiaquatic herbivore that inhabits savannas and dense forests, living near and in bodies of freshwater and feeding mainly on grasses and aquatic plants.\n[…]\nIts common name is derived from Tupi ka'apiûara, a complex agglutination of kaá (leaf) + píi (slender) + ú (eat) + ara (a suffix for agent nouns), meaning \"one who eats slender leaves\", or \"grass-eater\". The genus name, hydrochoerus, comes from Greek ὕδωρ (hýdor \"water\") and χοῖρος (choíros \"pig, hog\") and the species name, hydrochaeris, comes from Greek ὕδωρ (hýdor \"water\") and χαίρω (chairo \"feel happy, enjoy\")."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_tupi",
        "situacao": "ok",
        "texto": "Língua tupi, ou tupi antigo, foi a língua falada pelos povos tupis e por grande parte dos colonizadores que povoavam o litoral do Brasil nos séculos XVI e XVII. Considera-se a língua indígena \"clássica\" do Brasil e a que teve mais importância na \"construção espiritual e cultural\" do país.\n[…]\nHoje uma língua morta, o tupi foi por vezes mais falado que o português, sendo por isso considerada também como \"a língua do Brasil dos primeiros séculos\". Seu registro foi feito sobretudo por padres jesuítas, como José de Anchieta, mas também por viajantes, como Hans Staden e Jean de Léry. Graças a esse registro, preservou-se o conhecimento da língua. Hoje o tupi antigo é a língua indígena brasileira mais bem conhecida, mesmo levando-se em conta as línguas vivas.\n[…]\nNos séculos XVI e XVII, era chamado pelos portugueses de língua brasílica por ser o idioma mais usado no Brasil (a expressão \"língua tupi\" somente se generalizou a partir do século XIX). Dentre os grupos reconhecidos pelos historiadores, antropólogos e linguistas que tinham o tupi antigo como língua materna estão os tupinambás, tupiniquins, caetés, tamoios, potiguaras, temiminós e tabajaras.\n[…]\nEm poucos países da América uma língua indígena teve a difusão que o tupi antigo conheceu, contribuindo para a unidade política de nosso país. Forneceu milhares de termos para a língua portuguesa do Brasil, milhares de topônimos, esteve presente na literatura colonial, no Romantismo no Modernismo.\n[…]\nO texto a seguir é a primeira estrofe do segundo ato do Auto de São Lourenço, obra de José de Anchieta. Ambas as versões, em tupi antigo e em português, foram escritas de modo artístico, o que implica o respeito, nas duas línguas, da rima e da métrica, elementos comumente empregados em poemas.\n[…]\nMétodo Moderno de Tupi Antigo\n[…]\nTronco tupi",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Língua hebraica",
      "descricao": "Língua semítica do povo judeu, revivida como língua falada a partir do fim do século dezenove e oficial em Israel."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Persa, turco, armênio e árabe são falados perto de Israel. Qual deles é da mesma família de línguas do hebraico?",
    "resposta": "Árabe",
    "distratores": [
      "Persa",
      "Turco",
      "Armênio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Semitic_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Semitic_languages",
        "situacao": "ok",
        "texto": "The Semitic languages are a branch of the Afroasiatic language family. They include Arabic, Amharic, Tigrinya, Tigre, Aramaic, Hebrew, Maltese, the Modern South Arabian languages and numerous other ancient and modern languages. They are spoken by more than 460 million people across much of West Asia, North Africa, the Horn of Africa, Malta, and in large immigrant and expatriate communities in Nort\n[…]\nBiblical Hebrew, long extinct as a colloquial language and in use only as a Jewish literary, intellectual, and liturgical language, was revived in spoken form at the end of the 19th century. Modern Hebrew is the main language of Israel, with easily understandable Biblical Hebrew remaining as the language of the Bible, Jewish liturgy and religious scholarship of Jews worldwide.\n[…]\nModern Hebrew is the only example of an ancient tongue revived in modern times to become a vibrant, modern language used by Israel's 10 million citizens and many more in other countries.\n[…]\nThe pronunciations /ʕ/ and /ħ/ for ʿAyin and Ḥet, respectively, still occur among some older Mizrahi speakers, but for most modern Israelis, ʿAyin and Ḥet are realized as /ʔ, -/ and /χ ~ x/, respectively.\n[…]\nThe prefix conjugation is noted for a particular pattern of ʔ- t- y- n- prefixes where (1) a t- prefix is used in the singular to mark the second person and third-person feminine, while a y- prefix marks the third-person masculine; and (2) identical words are used for second-person masculine and third-person feminine singular. The prefix conjugation is extremely old, with clear analogues in nearly all the families of Afroasiatic languages (i.e. at least 10,000 years old)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_sem%C3%ADticas",
        "situacao": "ok",
        "texto": "As línguas semíticas são a família mais ao nordeste das línguas afro-asiáticas As línguas semíticas mais comuns faladas hoje são o árabe, o maltês, o hebraico, o amárico, o aramaico e o tigrínia.\n[…]\nAcerca do seu nível de preservação com o avanço dos milênios, o orientalista e professor de árabe da Universidade Cambridge de origem judaica William Wright (1830–1889) acreditava que, apesar de em alguns pontos as línguas semíticas do norte, particularmente o hebraico, trazerem uma forte lembrança da língua-mãe, os dialetos semíticos do sul, o etíope e o árabe principalmente, preservaram um maior grau de semelhança com a língua semítica original.\n[…]\nÁrabe\n[…]\nLínguas cananitas (veja também línguas hebraicas)\n[…]\nLíngua hebraica bíblica – tem línguas descendentes vivas\n[…]\nÁrabe do sul antigo – Fonética semelhante ao árabe\n[…]\nLíngua bathari\n[…]\nLíngua hobyot\n[…]\nTodas essas línguas exibem o padrão de palavras formadas com raízes de três consoantes, com mudanças vocálicas, prefixos e sufixos usados para flexioná-las. Por exemplo, em hebraico:\n[…]\nMuitas raízes são compartilhadas por mais de uma língua semítica. Por exemplo, a raiz ktb, uma raiz significando escrita, existe em hebraico e árabe (\"ele escreveu\" e katav em hebraico e kataba em árabe clássico).\n[…]\nAlgumas vezes determinadas raízes diferem em significado de uma para outra língua semítica. Por exemplo, a raiz b-y-ḍ em árabe tem o significado de \"branco\" e de \"ovo\", enquanto que\n[…]\nem hebraico significa apenas \"ovo\". A raiz l-b-n significa \"leite\" em árabe, mas a cor \"branca\" em hebraico.\n[…]\nÉ claro, algumas vezes não há nenhuma relação entre as raízes. Por exemplo, \"conhecimento\" é representado em hebraico pela raiz y-d-ʿ mas em árabe pelas raízes ʿ-r-f e ʿ-l-m.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Linear B",
      "descricao": "Escrita silábica da Idade do Bronze usada em Creta e na Grécia micênica."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Decifrada na década de 1950, a escrita Linear B, de Creta e de Micenas, registrava uma forma antiga de qual língua?",
    "resposta": "Grego",
    "distratores": [
      "Minoico",
      "Fenício",
      "Hitita"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Linear_B"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "Linear B is a syllabic script that was used for writing in Mycenaean Greek, the earliest attested form of the Greek language. The script predates the Greek alphabet by several centuries, the earliest known examples dating to around 1450 BC. It is adapted from the earlier Linear A, an undeciphered script, perhaps used for writing the Minoan language, as is the later Cypriot syllabary, which also re\n[…]\nLinear B also uses a large number of ideograms. They express:\n[…]\nThe convention for numbering the symbols still in use today was first devised by Emmett L. Bennett Jr. Working alongside fellow academic Alice Kober, by 1950 Bennett had deciphered the metrical system, based on his intensive study of Linear B tablets unearthed at Pylos. He concluded that those tablets contained exactly the same script as the Linear B found at Knossos, and he classified and assigned identification numbers to the Linear B signs as he prepared a publication on the Pylos tablets.\n[…]\nThe Linear B Syllabary block is U+10000–U+1007F.\n[…]\nThe Linear B Ideograms block is U+10080–U+100FF.\n[…]\nA variety of fonts encode Linear B.\n[…]\nMinoan Language Linear A Linked to Linear B in Groundbreaking Research – Greek Reporter – 20 April 2022\n[…]\nAger, Simon (1998–2009). \"Linear B\". Omniglot. Retrieved 6 January 2009.\n[…]\n\"Google Noto Fonts: Beautiful and free fonts for all languages: Linear B\".\n[…]\nLinear B online transliterator\n[…]\nLinear B Explorer\n[…]\nMcCreedy, David; Weiss, Mimi. \"Gallery of Unicode Fonts: Linear B Syllabary\". WAZU, Japan. Retrieved 11 January 2009.\n[…]\nPalaeolexicon – \"Word study tool of Ancient languages, including Linear B\". Palaeolexicon.com.\n[…]\nRaymoure, K.A. (2012). \"Linear B Transliterations\". Minoan Linear A & Mycenaean Linear B. Deaditerranean. Archived from the original on 18 March 2016.\n[…]\nDel Freo, Maurizio; Di Filippo, Francesco. \"LiBER – Linear B Electronic Resources Portal\". Consiglio Nazionale delle Ricerche, CNR."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "A escrita Linear B é um silabário que foi utilizado pelos povos micênicos entre os séculos XV a.C. e XII a.C. Ela era usada para se escrever em Grego micênico, a forma mais antiga do grego que se conhece, e é derivada provavelmente da escrita denominada Linear A, que ainda não foi decifrada. A Linear B foi encontrada talhada em algumas tabuinhas de argila e vasos nos palácios de Pilos, Micenas, Ti\n[…]\nA partir de 5 de abril, foi localizada uma grande quantidade destas tabuinhas, feito que se repetiu em escavações posteriores durante a década de 1900. Entretanto, a linguagem que elas continham só foi decifrada na década de 1950 pelos arqueólogos de origem inglesa Michael Ventris e John Chadwick.\n[…]\nProvavelmente Sir Arthur teria sido capaz de decifrar essa escrita, mas ele acreditava ser uma escrita que não possuía nenhuma relação com o grego arcaico, diferentemente de Ventris e Chadwick, que conseguiram decifrar a escrita Linear B correlacionando-a com o grego antigo.\n[…]\nEm julho de 1952, o arquiteto inglês Michael Ventris anunciou pela rádio BBC, em Londres, a decifração da Linear B, sustentando que se tratava duma forma de grego arcaico, com uma grafia silábica.\n[…]\na casualidade de a língua escrita em Linear B ser uma antepassada do grego, uma língua sumamente atestada e conhecida pelos filólogos.\n[…]\nA decifração de Ventris foi completada com a ajuda de John Chadwick, professor de Cambridge e filólogo especialista em grego arcaico, e com as contribuições de outros estudiosos (Alice Kober, Emmet L. Bennet Jr. etc.).\n[…]\nEstas dificuldades da escrita adiaram um pouco a decifração completa da Linear B, e embora não sejam um impedimento para uma leitura satisfatória, ainda ficam signos por decifrar e palavras com várias formas possíveis de transcrição e cujo sentido é duvidoso ou desconhecido.\n[…]\nMicenas: MY (73 tabuinhas)\n[…]\n«Ancient Scripts — Linear B» (em inglês)\n[…]\n«Græcia Antiqua — A escrita Linear B»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Escrita mongol tradicional",
      "descricao": "Sistema de escrita do mongol derivado do alfabeto uigur antigo, ainda usado na Mongólia Interior, na China."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A escrita tradicional mongol, da época de Gengis Khan, foi adaptada do alfabeto de qual povo de língua túrquica?",
    "resposta": "Uigures",
    "distratores": [
      "Cazaques",
      "Tártaros",
      "Turcomenos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mongolian_script"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mongolian_script",
        "situacao": "ok",
        "texto": "The traditional Mongolian script, also known as the Hudum Mongol bichig, was the first writing system created specifically for the Mongolian language, and was the most widespread until the introduction of Cyrillic in 1946. The script is a co-official script in Mongolia since 2025, alongside the Cyrillic script for the language. It is also the official written form being taught in schools for Mongo\n[…]\nThe Mongolian vertical script developed as an adaptation of the Old Uyghur alphabet for the Mongolian language. Tata-tonga, a 13th-century Uyghur scribe captured by Genghis Khan, was responsible for bringing the Old Uyghur alphabet to the Mongolian Plateau and adapting it to the form of the Mongolian script.\n[…]\nAs in kü, köke, ǰüg and separated a/e, two teeth can also make up the top-left part of a kaph (k/g) or aleph (a/e) in pre-classical texts. In back-vocalic words of Uyghur Mongolian, qi was used in place of ki, and can therefore be used to identify this stage of the written language. An example of this appears in the suffix  ‑taqi/‑daqi.\n[…]\nA pre-modern variant form for final s appears in the shape of a short final n ⟨‍ᠰ᠋⟩, derived from Old Uyghur zayin (𐽴). It tended to be replaced by the mouth-shaped form and is no longer used. An early example of it is found in the name of Gengis Khan on the Stele of Yisüngge: ᠴᠢᠩᠭᠢᠰ᠋ Činggis. A zayin-shaped final can also appear as part of final m and ɣ.\n[…]\nFollowing the late classical Mongolian orthography of the 17th and 18th centuries, a smooth and angular tsade (‍ᠵ‍ and ᠴ) has come to represent ǰ and č respectively. The tsade before this was used for both these phonemes, regardless of graphical variants, as no ǰ had existed in Old Uyghur:\n[…]\nLingua Mongolia: Uighur-script Mongolian Resources Archived 2022-03-19 at the Wayback Machine\n[…]\nOnline tool for Mongolian script transliteration\n[…]\nOffice of the President of Mongolia website in Mongolian script"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrita_mongol_tradicional",
        "situacao": "ok",
        "texto": "A escrita mongol tradicional (em escrita mongol: ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ,  transl. Qudum Mongγol bičig; em cirílico: khalkha: Худам Монгол бичиг, transl. Khudam Mongol bichig, buriata: Худам Монгол бэшэг, transl. Khudam Mongol besheg, calmuca: Хуудм Моңһл бичг, trans. Huudm Moñḥl bichg) foi o primeiro sistema de escrita criado especificamente para o idioma mongol, e foi o mais difundido até a introdução do c\n[…]\nÉ tradicionalmente escrito em linhas verticais. Derivado do alfabeto uigur antigo, o mongol é um verdadeiro alfabeto, com letras separadas para consoantes e vogais. A escrita mongol foi adaptada para escrever idiomas como Oirata e Manchu. Alfabetos baseados neste script vertical clássico são usados na Mongólia interior e outras partes da China até hoje para escrever mongol, Xibe e experimentalmente, Evenki.\n[…]\nOs sistemas operacionais de computador demoraram a adotar o suporte para a escrita mongol e quase todos têm suporte incompleto ou outras dificuldades de renderização de texto.\n[…]\nLingua Mongolia: Uighur-script Mongolian Resources\n[…]\nOnline tool for Mongolian script transliteration\n[…]\nAutomatic converter for Traditional Mongolian and Cyrillic Mongolian by the Computer College of Inner Mongolia University\n[…]\nMongolian Manuscripts from Olon Süme – Yokohama Museum of EurAsian Cultures\n[…]\nDigitised Mongolian manuscripts – The Royal Library, National Library of Dinamarca\n[…]\nMongolian texts – Digitales Turfan-Archiv, the Berlin-Brandenburg Academy of Sciences and Humanities\n[…]\nPreservation of unique and historic newspapers printed in traditional Mongolian script between 1936-1945 – Endangered Archives Programme, British Library\n[…]\nOfficial Mongolian script version of the People's Daily Online\n[…]\nOffice of the President of Mongolia website in Mongolian script\n[…]\nDidi Tang (21 de março de 2020). «Mongolia abandons Soviet past by restoring alphabet». The Times. Consultado em 21 de março de 2020",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Línguas bantas",
      "descricao": "Grande grupo de centenas de línguas da África Central, Oriental e Austral, que inclui o suaíli, o zulu e o quimbundo."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O quimbundo de Angola, o suaíli da Tanzânia e o zulu da África do Sul pertencem a qual grande grupo de línguas africanas?",
    "resposta": "Línguas bantas",
    "distratores": [
      "Línguas nilóticas",
      "Línguas berberes",
      "Línguas cuxíticas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bantu_languages"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bantu_languages",
        "situacao": "ok",
        "texto": "The Bantu languages (UK: , US:   Proto-Bantu: *bantʊ̀) are a language family, or a branch of the proposed Niger-Congo language family, containing about 600 languages that are spoken by the Bantu peoples of Central, Southern, Eastern and Southeast Africa. They form the largest branch of the Southern Bantoid languages.\n[…]\nThe most widely spoken Bantu language by number of speakers is Swahili, with 16 million native speakers and 80 million L2 speakers (2015). Most native speakers of Swahili live in Tanzania, where it is a national language, while as a second language, it is taught as a mandatory subject in many schools in East Africa, and is a lingua franca of the East African Community.\n[…]\nOther major Bantu languages include Lingala with more than 20 million speakers (Congo, DRC), followed by Zulu with 13.56 million speakers (South Africa), Xhosa, with 8.2 million speakers (South Africa and Zimbabwe), and Shona with less than 10 million speakers (if Manyika and Ndau are included), while Sotho-Tswana languages (Sotho, Tswana and Pedi) have more than 15 million speakers (across Botswana, Lesotho, South Africa, and Zambia). Zimbabwe has Kalanga, Matebele, Nambya, and Xhosa speakers.\n[…]\nMaho, Jouni F. (2001). \"The Bantu area: (towards clearing up) a mess\" (PDF). Africa & Asia (1): 40–49. Archived from the original (PDF) on 2009-03-25.\n[…]\nDe Blois, K.F. (1970). \"The augment in the Bantu languages\". Africana Linguistica. 4: 85–165. doi:10.3406/aflin.1970.879.\n[…]\nArte da lingua de Angola: oeferecida [sic] a virgem Senhora N. do Rosario, mãy, Senhora dos mesmos pretos The art of the language of Angola, by Father Pedro Dias, 1697, Lisbon, artedalinguadean\n[…]\nIntroduction to the languages of South Africa salanguages.com\n[…]\nNarrow Bantu Journal of West African Languages\n[…]\nUganda Bantu Languages ugandatravelguide.com"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_bantas",
        "situacao": "ok",
        "texto": "As línguas bantas são um ramo da família linguística nígero-congolesa, falados pelos povos bantos na África subsariana.\n[…]\nO número total destas línguas varia de 440 a 680, dependendo da definição de língua versus dialeto.\n[…]\nA língua banta com o número maior de falantes é o suaíli. Outras línguas bantas importantes são o zulu, o ruanda-rundi e o ndau-shona.\n[…]\nA característica gramatical mais proeminente das línguas bantas é o uso extensivo de prefixos. Cada substantivo pertence a uma classe e cada língua pode ter aproximadamente dez classes, um pouco como gêneros em algumas línguas europeias. A classe é indicada por um prefixo no substantivo, como também em adjetivos e verbos que concordam com aquele. O plural é indicado por uma mudança de prefixo.\n[…]\nA língua banta com o número maior de falantes é o suaíli; analisando a história desta língua, alguns linguistas acreditam que as línguas bantas formam um contínuo desde línguas tonais até línguas sem nenhum tom.\n[…]\nOutras línguas bantas importantes incluem o lingala, o luganda, o congo, o quimbundo,o umbundo, o chócue, e o nianja na África Central e Oriental, e o xona, o andebele setentrional, o tsuana, o sesoto, o zulu, o xossa, o ovambo, o sepedi, e o suázi na África Meridional.\n[…]\nAlgumas línguas bantas são vulgarmente conhecidas pelos não africanos pelo nome sem o prefixo que funciona como um artigo definido (Swahili para Kiswahili, Zulu para isiZulu, etc.), mas a forma nua não acontece tipicamente na língua: no Botswana as pessoas são batswana, uma pessoa é um motswana, e a língua é sempre setswana.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Língua portuguesa",
      "descricao": "Língua românica nascida no noroeste da Península Ibérica, oficial em Portugal, no Brasil e em países da África e da Ásia."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em que região administrativa especial da China o português é língua oficial ao lado do chinês?",
    "resposta": "Macau",
    "distratores": [
      "Hong Kong",
      "Xangai",
      "Cantão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Macau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Macau",
        "situacao": "ok",
        "texto": "Macau or Macao is a special administrative region of China. It consists of the Macau Peninsula, the islands of Taipa and Coloane, the Cotai reclamation zone between Taipa and Coloane, and several smaller islets. It borders Zhuhai to the north and west, and it lies west of Hong Kong, separated by the Pearl River estuary. With a population of about 720,000 people and a land area of 32.9 square kilom\n[…]\nFormerly a Portuguese colony, the territory of Portuguese Macau was first leased to Portugal by the Ming dynasty as a trading post in 1557. Portugal paid an annual rent and administered the territory under Chinese sovereignty until 1887, when Portugal gained perpetual colonial rights with the signing of the Sino-Portuguese Treaty of Peking. The colony remained under Portuguese rule until the 1999 handover to China.\n[…]\nMacau is a special administrative region of China, which maintains separate governing and economic systems from those of mainland China under the principle of \"one country, two systems\". The unique blend of Portuguese, French, English, Italian, and Chinese architecture in the city's downtown area has resulted in its designation as a UNESCO World Heritage Site in 2005.\n[…]\nFollowing the 1974 Carnation Revolution, Portugal formally relinquished Macau as an overseas province and acknowledged it as a \"Chinese territory under Portuguese administration\". After China first concluded arrangements on Hong Kong's future with the United Kingdom, it entered negotiations with Portugal over Macau in 1986.\n[…]\nIn 2006, during the II Ministerial meeting between China and Portuguese-speaking countries, the CPLP Executive Secretary and Deputy Ambassador Tadeu Soares invited the Chief Executive of the Government of the Macau Special Administrative Region, Edmund Ho, to request the Associate Observer status for Macau. The Government of Macau has yet to make this request.\n[…]\nWikimedia Atlas of Macau"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Macau",
        "situacao": "ok",
        "texto": "Macau (em chinês tradicional: 澳門; em chinês simplificado: 澳门; pinyin: Àomén, pronunciado: [ɑ̂ʊ̯mə̌n]; em cantonês jyutping: Ou3mun4 ou Ou3mun2 em cantonês Yale: Oumùhn, pronunciado: [ʔōu mǔːn], em hacá: Au4mun2) é uma das regiões administrativas especiais (RAEM) da China desde 20 de dezembro de 1999, sendo a outra Hong Kong.\n[…]\nDesde 20 de dezembro de 1999, o nome oficial de Macau é \"Região Administrativa Especial de Macau da República Popular da China\" (RAEM).\n[…]\nApós a transferência, o novo Governo da Região Administrativa Especial de Macau, encabeçado e dirigido por Edmund Ho Hau-wah, combateu ferozmente e com êxito contra o crime organizado pelas tríades, com o precioso apoio do Governo Central da República Popular da China. Macau foi remilitarizada, através da colocação de uma guarnição de tropas chinesas. Estas tropas, além de servir para afirmar a soberania chinesa, foram encaradas como uma mais-valia, um apoio ao combate à criminalidade.\n[…]\nPor esta razão, toda a legislação existente antes de 1999 foi mantida, excepto uma pequena parte que contrariava a Lei Básica. Do ponto de vista constitucional, o sistema jurídico de Macau caracteriza-se pela existência de um texto com força constitucional na ordem jurídica interna da RAEM, a Lei Básica da Região Administrativa Especial de Macau, promulgada pelo Assembleia Popular Nacional da República Popular da China no ano de 1993.\n[…]\nOs macaenses, uma das maiores heranças deixadas pela multissecular administração portuguesa de Macau, têm a sua própria cultura, distinta quer da dos portugueses quer da dos chineses, bem como o seu próprio crioulo, o patuá macaense, baseado no português e fortemente influenciado pelo cantonês, pelo malaio e por muitas outras línguas..\n[…]\nSegue-se uma lista dos feriados da Região Administrativa Especial de Macau:",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Bélgica",
      "descricao": "Reino da Europa Ocidental, vizinho da Holanda, Alemanha, Luxemburgo e França."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Na Bélgica, o holandês é a língua de qual região do norte do país?",
    "resposta": "Flandres",
    "distratores": [
      "Valônia",
      "Ardenas",
      "Luxemburgo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Flanders"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Flanders",
        "situacao": "ok",
        "texto": "Flanders ( FLAHN-dərz or  FLAN-dərz; Dutch: Vlaanderen [ˈvlaːndərə(n)] ) is the Dutch-speaking northern part of Belgium. However, there are several overlapping definitions, including ones related to culture, language, politics, and history, and sometimes involving neighbouring countries.\n[…]\nThe name originally applied to the ancien régime territory called the County of Flanders, that existed from the 8th century (Latin Flandria) until its absorption by the French First Republic. Until the 1600s, this county also extended over parts of what are now France and the Netherlands.\n[…]\nIn France, one of the historically Flemish regions is now in the Nord department. This is referred to as French Flanders, and can be divided into three smaller regions: Walloon Flanders, Maritime Flanders, and Artesian Flanders. The first region was predominantly French-speaking already in the 1600s, the latter became so in the 20th century. The city of Lille identifies itself as \"Flemish\", and this is reflected, for instance, in the name of its local railway station Lille Flandres.\n[…]\nAs Roman influence waned, Frankish populations settled in the Tungiran area east of the Silva Carbonaria, and eventually pushed through it under Chlodio. They had kings in each Roman district (civitas). In the meantime, the Franks contributed to the Roman military. The first Merovingian king Childeric I was king of the Franks within the military of Gaul. He became leader of the administration of Belgica Secunda, which included the civitas of the Menapii (the future county of Flanders)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Flandres_%28B%C3%A9lgica%29",
        "situacao": "ok",
        "texto": "A Flandres (em neerlandês: Vlaanderen; em francês: Flandre; em alemão: Flandern) é a região norte da Bélgica, ao passo que a região sul do país é designada por Valónia. Na Flandres fala-se o neerlandês, embora o dialeto local desta língua seja conhecido popularmente como flamengo (Vlaams), bem como os habitantes da região, designados como \"flamengos\" (Vlamingen). Considera-se que o flamengo e o ne\n[…]\nA Região da Flandres está dividida em 5 províncias:\n[…]\nFlandres Oriental (Oost-Vlaanderen);\n[…]\nFlandres Ocidental (West-Vlaanderen).\n[…]\nEsta questão tem a sua génese no passado da Bélgica, quando a Valónia era a região mais rica e o seu povo menosprezava a Flandres e tudo o que dela vinha pelo facto de se considerar que os flamengos eram de condição mais modesta. Nesse período, os flamengos foram oprimidos por falarem uma língua diferente do francês, considerada como inferior, e possuíam poucos ou nenhuns direitos civis se comparados com os seus compatriotas da Valónia.\n[…]\nNos últimos anos o inglês tem ocupado o primeiro lugar na aprendizagem de línguas e o francês apresenta um decréscimo. Além disso, existe ainda um forte sentimento de inimizade entre flamengos e valões, já que aqueles não perdoam o que estes lhes fizeram e os valões não aceitam que a Flandres seja a região economicamente mais importante do seu país.\n[…]\nEsta complexa situação está na origem da profunda crise política vivida pela Bélgica desde 2009, cujo aspeto mais visível é a dificuldade em constituir governo (como aconteceu em 2010-2011, quando o país ficou 541 dias sem governo). Entre os flamengos verifica-se uma significativa tendência para se defender a separação da Bélgica, ou seja, para obter a independência total da Flandres. A maioria parece, no entanto, rejeitar esta solução, sendo favorável a uma maior autonomia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Inuítes",
      "descricao": "Povos indígenas das regiões árticas do Canadá, da Groenlândia e do Alasca, antes chamados de esquimós."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Criado em 1999 no norte do Canadá, que território de maioria inuíte tem a língua desse povo entre suas línguas oficiais?",
    "resposta": "Nunavut",
    "distratores": [
      "Yukon",
      "Manitoba",
      "Alberta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nunavut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nunavut",
        "situacao": "ok",
        "texto": "Nunavut is the largest and northernmost territory of Canada. It was separated from the Northwest Territories in 1999, via the Nunavut Act and the Nunavut Land Claims Agreement Act, which provided this territory to the Inuit for self-government. The boundaries were drawn in 1993. The creation of Nunavut resulted in the first major change to Canada's political map in half a century since the provinc\n[…]\nIn November 2011, the Government of Nunavut and the NFB jointly announced the launch of a DVD and online collection entitled Unikkausivut (Inuktitut: Sharing Our Stories), which will make over 100 NFB films by and about Inuit available in Inuktitut, Inuinnaqtun and other Inuit languages, as well as English and French. The Government of Nunavut is distributing Unikkausivut to every school in the territory.\n[…]\nThe commissioner of Nunavut is appointed by the Governor-in-Council, consisting of the governor general of Canada and the federal Cabinet. As in the other territories, the commissioner's role is symbolic and is analogous to that of a lieutenant-governor. While the commissioner is not a representative of the Canadian monarch, a role roughly analogous to representing the Crown has accrued to the position.\n[…]\nNunavut was licensed by the NWT to use the same licence plate design in 1999 when it became a separate territory, but adopted its own plate design in March 2012 for launch in August 2012—a rectangle that prominently features the northern lights, a polar bear and an inuksuk.\n[…]\nDue to prohibition laws influenced by local and traditional beliefs, Nunavut has a highly regulated alcohol market. The territory is the last outpost of prohibition in Canada, and it is often easier to obtain firearms than alcohol. Alcohol remains prohibited in six communities across the territory: Arivat, Coral Harbour, Gjoa Haven, Kugaaruk, Pangnirtung and Sanikiluaq.\n[…]\nNunavut News from News/North"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nunavut",
        "situacao": "ok",
        "texto": "Nunavut (em Inuktitut: ᓄᓇᕗᑦ) é o mais novo, maior em extensão territorial, mais setentrional, e o segundo menos populoso de todas as divisões administrativas do Canadá. Foi oficialmente separado dos Territórios do Noroeste em 1 de abril de 1999, através da Lei de Nunavut e do acordo de reivindicações de terras de Nunavut, embora as fronteiras tenham sido oficialmente feitas em 1993.\n[…]\nO ensino superior em Nunavut permite que os residentes deste território do Ártico canadense tenham acesso a treinamento especializado oferecido em instituições de ensino superior. Existem alguns desafios únicos enfrentados pelos estudantes que desejam seguir um treinamento avançado em Nunavut, um vasto território que se estende pelo Ártico do Canadá, desde a Baía de Hudsons até o Polo Norte.\n[…]\nO território de Nunavut e o Norte do Canadá começaram a pensar e abordar as questões de linguagem e qualidade da educação em K até 12 através da criativa e exigente Lei da Educação (Nunavut, 2008), que apoia fortemente as línguas e a cultura inuíte no sistema escolar.\n[…]\nNunavut foi licenciado pelos Territórios do Noroeste para usar o mesmo modelo de placa de licença em 1999, quando se tornou um território separado, mas adotou seu próprio projeto de placa em março de 2012 para lançamento em agosto de 2012 — um retângulo que destaca as luzes do norte, com um urso polar e um inuksuk.\n[…]\nEm novembro de 2011, o governo de Nunavut e o NFB anunciaram em conjunto o lançamento de um DVD e uma coletânea online intitulada Unikkausivut (do inuktitut: Compartilhando Nossas Histórias), que disponibilizará mais de 100 filmes do NFB sobre os inuítes disponíveis nas línguas inuktitut, inuinnaqtun e outros idiomas inuítes, bem como em inglês e francês. O governo de Nunavut está distribuindo o filme Unikkausivut para todas as escolas do território.\n[…]\n«Portal oficial de turismo de Nunavut» (em inglês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Língua espanhola",
      "descricao": "Língua românica nascida em Castela, oficial na Espanha e em grande parte da América Latina."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Que país da África Central, antiga colônia da Espanha, tem o espanhol como língua oficial?",
    "resposta": "Guiné Equatorial",
    "distratores": [
      "Gabão",
      "Camarões",
      "Angola"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Equatorial_Guinea",
      "https://en.wikipedia.org/wiki/Spanish_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Equatorial_Guinea",
        "situacao": "ok",
        "texto": "Equatorial Guinea, officially the Republic of Equatorial Guinea, is a country on the west coast of Central Africa and the only Spanish-speaking country in Africa. It has an area of 28,000 square kilometres (11,000 sq mi). Formerly the colony of Spanish Guinea, its post-independence name refers to its location both near the Equator and in the African region of Guinea.\n[…]\nBefore the nation's independence from Spain, Equatorial Guinea exported cocoa, coffee and timber, mostly to its colonial ruler, Spain, but also to Germany and the UK. On 1 January 1985, the country became the first non-Francophone African member of the franc zone, adopting the CFA franc as its currency. The national currency, the ekwele, had previously been linked to the Spanish peseta.\n[…]\nEquatorial Guinea is a member of the Organization for the Harmonization of Business Law in Africa (OHADA). Equatorial Guinea is also a member of the Central African Monetary and Economic Union (CEMAC), a subregion that comprises more than 50 million people. Equatorial Guinea tried to be validated as an Extractive Industries Transparency Initiative (EITI)-compliant country.\n[…]\nAmong Sub-Saharan African countries, Equatorial Guinea has one of the highest literacy rates. According to the Central Intelligence Agency's World Factbook, as of 2015, 95.3% of the population age 15 and over were able to read and write in the country. Under Francisco Macias, few children received any type of education. Under President Obiang, the illiteracy rate dropped from 73% to 13%, and the number of primary school students rose from 65,000 in 1986 to more than 100,000 in 1994.\n[…]\nIn June 1984, the First Hispanic-African Cultural Congress was convened to explore the cultural identity of Equatorial Guinea.\n[…]\nEquatorial Guinea Archived 9 January 2021 at the Wayback Machine. The World Factbook. Central Intelligence Agency."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spanish_language",
        "situacao": "ok",
        "texto": "Spanish (español), also known as Castilian (castellano), is a Romance language of the Indo-European language family. It evolved from the Vulgar Latin spoken on Europe's Iberian Peninsula, originating in the Kingdom of Castile in what is now north-central Spain. Today, it is a global language with 519 million native speakers, mainly in the Americas and Spain, and about 636 million speakers total, i\n[…]\nEquatorial Guinea is the only Spanish-speaking country located entirely in Africa, with the language introduced during the Spanish colonial period. Enshrined in the constitution as an official language (alongside French and Portuguese), Spanish features prominently in the Equatoguinean education system and is the primary language used in government and business. Spanish is spoken as a native language by a small minority in Equatorial Guinea, primarily in larger cities.\n[…]\nThe Instituto Cervantes estimates that 87.7% of the population is fluent in Spanish. The proportion of proficient Spanish speakers in Equatorial Guinea exceeds the proportion of proficient speakers in other West and Central African nations of their respective colonial languages.\n[…]\nSpanish is the official, or national language in 18 countries and one US territory in the Americas, Spain, Equatorial Guinea, and secondarily official in the non-self-governing territory with limited recognition of Western Sahara (RASD). With a population of over 410 million, Hispanophone America accounts for the vast majority of Spanish speakers, of which Mexico is the most populous Spanish-speaking country.\n[…]\nIn Central American voseo, the tú and vos forms differ in the present subjunctive as well:\n[…]\nParaguay (1927), Dominican Republic (1927), Bolivia (1927), Nicaragua (1928), Argentina (1931), Uruguay (1943), Honduras (1949), Puerto Rico (1955), United States (1973) and Equatorial Guinea (2016)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guin%C3%A9_Equatorial",
        "situacao": "ok",
        "texto": "A Guiné Equatorial, oficialmente República da Guiné Equatorial, é um país da África Central dividido em vários territórios descontínuos no golfo da Guiné: um continental, Mbini (antiga colónia espanhola de Rio Muni), e outros insulares. As ilhas são Bioco (antiga Fernando Pó), no norte do Golfo do Biafra, Ano-Bom, a sul de São Tomé e Príncipe, e Corisco, Elobey Grande e Elobey Pequeno (e ilhotas a\n[…]\nA República da Guiné Equatorial situa-se no oeste da África central. A ilha de Bioco dista cerca de 40 quilómetros dos Camarões. A ilha de Ano-Bom fica cerca de 595 quilómetros a sudoeste de Bioco. A região continental de Rio Muni, de maior área, fica entre o Gabão e os Camarões e inclui as ilhas de Corisco, Elobey Grande, Elobey Pequeno e ilhotas adjacentes.\n[…]\nA Guiné Equatorial é o único país da África de língua oficial castelhana. Os idiomas mais falados na Guiné Equatorial, o fang e o inglês pidgin, não são línguas oficiais. Apesar de a Guiné Equatorial ter decretado a língua francesa e, mais recentemente, a língua portuguesa como línguas oficiais, elas não são faladas no território.\n[…]\nO presidente da Guiné Equatorial, Teodoro Obiang Nguema Mbasogo, decretou que o português seria uma das línguas oficiais, ao lado do espanhol e do francês.\n[…]\nA Guiné Equatorial está dividida administrativamente em sete províncias (capitais entre parênteses):\n[…]\nAntes da independência, a Guiné Equatorial exportava cacau, café e madeira, principalmente, para seu governante colonial, a Espanha, mas também para a Alemanha e Reino Unido. A descoberta de grandes reservas de petróleo, em 1996, e sua posterior exploração, têm contribuído para um aumento muito grande na receita do governo. A partir de 2004, a Guiné Equatorial se tornou o terceiro maior produtor de petróleo da África Subsaariana.\n[…]\nÁfrica\n[…]\nMissões diplomáticas de Guiné Equatorial",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Imigração japonesa no Brasil",
      "descricao": "Movimento migratório de japoneses para o Brasil iniciado em 1908, que formou a maior comunidade de origem japonesa fora do Japão."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O navio Kasato Maru trouxe ao Brasil o primeiro grupo oficial de imigrantes japoneses. Em que porto eles desembarcaram?",
    "resposta": "Santos",
    "distratores": [
      "Rio de Janeiro",
      "Paranaguá",
      "Salvador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kasato_Maru",
      "https://en.wikipedia.org/wiki/Japanese_Brazilians"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru or Kasado Maru (Japanese: 笠戸丸) was a Japanese cargo/passenger ship built by the British shipyard Wigham Richardson in 1900. Originally christened as SS Potosí, the ship was bought by the Russian Dobroflot, and  renamed Kazan, being used as a hospital ship. She was sunk by the Japanese Navy during the Russo-Japanese War, salvaged and passed to the Japanese control as compensation for wa\n[…]\nShe was adapted to be a passenger ship and renamed as Kasato Maru and transported the soldiers who had fought in Manchuria back to Japan.\n[…]\nShe was then used to transport Japanese immigrants to Hawaii in 1906 and to Peru and Mexico in 1907. In 1908, she brought the first official group of Japanese immigrants to Brazil. The trip began at the port of Kobe and ended, 52 days later, at the Port of Santos on June 18, 1908. There came 165 families (781 people) who went to work in the coffee plantations of the west of São Paulo.\n[…]\nSome Japanese immigrants arrived at Brazil before Kasato Maru, founding an agricultural colony in the  current municipality of Conceição de Macabu (then district of Macaé), in the state of Rio de Janeiro. However, it was the arrival of this first group brought by Kasato Maru that initiated a continuous flow of immigration from Japan to Brazil. Some of the Kasato Maru's passengers continued to Argentina (see es:Café El Japonés).\n[…]\nAfter some time, Kasato Maru was transformed into a freighter ship and still returned to Brazil a second and last time, in 1917, transporting loads in the service of Osaka Sosen Kaisha (OSK) Line.\n[…]\nOn 9 August 1945, Kasato Maru was bombed by three Soviet aircraft from 11:15. to 14:30. Kasato Maru then sank into the Bering Sea in the Soviet waters near the Kamchatka Peninsula. It is currently submerged to a depth of 18 meters and in good state of conservation."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Japanese_Brazilians",
        "situacao": "ok",
        "texto": "Japanese Brazilians are Brazilian citizens who are nationals or naturals of Japanese ancestry or Japanese immigrants living in Brazil. Japanese immigration to Brazil peaked between 1908 and 1960, with the highest concentration between 1926 and 1935. In 2022, Japan's Ministry of Foreign Affairs stated that there were 2 million Japanese descendants in Brazil, making it the country with the largest p\n[…]\nJapanese immigration to Brazil officially began on June 18, 1908, when the ship Kasato Maru docked at Porto de Santos, bringing 781 Japanese workers to the coffee plantations in the São Paulo state countryside. For this reason, June 18 was established as the national day of Japanese immigration. Immigration to Brazil ceased by 1973, with the arrival of the last immigrant ship, the Nippon Maru.\n[…]\nThere were many anonymous denunciations of \"activities against national security\" arising from disagreements between neighbors, recovery of debts and even fights between children. Japanese Brazilians were arrested for \"suspicious activity\" when they were in artistic meetings or picnics. On July 10, 1943, approximately 10,000 Japanese and German and Italian immigrants who lived in Santos had 24 hours to close their homes and businesses and move away from the Brazilian coast.\n[…]\nLesser, Jeffrey (2001). Negociando a Identidade Nacional: Imigrantes, Minorias e a Luta pela Etnicidade no Brasil. UNESP.\n[…]\nSociedade Brasileira de Cultura Japonesa Archived March 7, 2011, at the Wayback Machine\n[…]\nCentenário da Imigração Japonesa no Brasil (1908–2008) Archived May 11, 2008, at the Wayback Machine\n[…]\nSite da Imigração Japonesa no Brasil\n[…]\nLeia sobre os navios de imigrantes que aportaram no Porto de Santos\n[…]\nSite comemorativo do Centenário da Imigração Japonesa que coleta histórias de vida de imigrantes e descendentes\n[…]\nCenter for Japanese-Brazilian Studies (Centro de Estudos Nipo-Brasileiros)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru (Kasato Maru (笠戸丸)) foi o navio que, em 1908, transportou o primeiro grupo de imigrantes japoneses vinculados ao acordo estabelecido entre o Brasil e o Japão.\n[…]\nO Kasato Maru foi originalmente um navio russo chamado Kazan que foi utilizado como navio-hospital durante a Guerra Russo-Japonesa. No final da guerra, passou para os japoneses como indenização de guerra ou capturado. Foi adaptado para ser navio de passageiros e transportou os soldados que tinham combatido na Manchúria de volta para o Japão.\n[…]\nEm 1908, trouxe o primeiro grupo oficial de imigrantes japoneses para o Brasil. A viagem começou no porto de Kobe e terminou, 52 dias depois, no Porto de Santos em 18 de Junho de 1908. Vieram 165 famílias (781 pessoas) que foram trabalhar nos cafezais do oeste paulista.\n[…]\nAlguns imigrantes japoneses chegaram ao Brasil antes do Kasato Maru, e até chegaram a fundar uma colônia agrícola na fazenda Santo Antônio, no atual município de Conceição de Macabu (então distrito de Macaé), no estado do Rio de Janeiro. Entretanto, foi a chegada deste primeiro grupo trazido pelo Kasato Maru que iniciou um fluxo contínuo de imigração de japoneses para o Brasil.\n[…]\nDepois de algum tempo, Kasato Maru foi transformado em navio cargueiro e ainda voltou ao Brasil uma segunda e última vez, em 1917, transportando cargas a serviço da Osaka Shosen Kaisha (OSK) Line.\n[…]\nApós serem expostas em Moscou e outras cidades russas, eles iriam para o Brasil em 2017. O destino final delas não é certo, mas provavelmente a maior parte ficará nos estados de São Paulo e Paraná, por terem recebido o maior número de imigrantes.\n[…]\nAfrica Maru\n[…]\nRio de Janeiro Maru\n[…]\n«História do navio Kasato Maru»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Libéria",
      "descricao": "País da África Ocidental, com capital em Monróvia, fundado no século dezenove por afro-americanos libertos."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Por que o inglês é a língua oficial da Libéria, país da África Ocidental que nunca foi colônia britânica?",
    "resposta": "Fundada por afro-americanos libertos",
    "distratores": [
      "Comércio com ingleses",
      "Missões britânicas",
      "Ocupação militar americana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Liberia",
      "https://en.wikipedia.org/wiki/Americo-Liberian_people"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Liberia",
        "situacao": "ok",
        "texto": "Liberia, officially the Republic of Liberia, is a country on the West African coast. It is bordered by Sierra Leone to its northwest, Guinea to its north, Ivory Coast to its east, and the Atlantic Ocean to its south and southwest. It has a population of around 5.5 million and covers an area of 43,000 square miles (111,369 km2). The official language is English, though over 20 indigenous languages \n[…]\nLiberia began in the early 19th century as a project of the American Colonization Society (ACS), which fomented the emigration of Black Americans from the United States to Africa. Between 1822 and the outbreak of the American Civil War in 1861, more than 15,000 freed and free-born African Americans, along with 3,198 Afro-Caribbeans, relocated to Liberia.\n[…]\nThe United States did not recognize Liberia until 1862, after the Southern states, which had strong political power in the American government, declared their secession and the formation of the Confederacy.\n[…]\nThe Kpelle comprise more than 20% of the population and are the largest ethnic group in Liberia, residing mostly in Bong County and adjacent areas in central Liberia. Americo-Liberians, who are descendants of African American and West Indian, mostly Barbadian (Bajan) settlers, make up 2.5%. Congo people, descendants of repatriated Congo and Afro-Caribbean slaves who arrived in 1825, make up an estimated 2.5%.\n[…]\nMost of these Christian denominations were brought by African-American settlers moving from the United States into Liberia via the American Colonization Society, while some are indigenous—especially Pentecostal and evangelical Protestant ones. Protestantism was originally associated with Black American settlers and their Americo-Liberian descendants, while native peoples initially held to their own animist forms of African traditional religion before largely adopting Christianity.\n[…]\nLiberia Business Facts from Bizpages"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Americo-Liberian_people",
        "situacao": "ok",
        "texto": "Americo-Liberian people (also known as Congo people or Congau people) are a Liberian ethnic group of African American, Afro-Caribbean, and liberated African origin. Americo-Liberians trace their ancestry to free people of color and emancipated African Americans and West Indians who emigrated in the 19th century to become the founders of the state of Liberia. They identified themselves as Americo-L\n[…]\nAmerico-Liberians were descended from African American and Afro-Caribbean settlers, many of whom were freed slaves and their descendants who emigrated to Liberia with assistance from the American Colonization Society (ACS). The first black American settlers arrived in Liberia in 1822. The ACS's plan of encouraging black American migration to Africa was met with mixed responses at the time.\n[…]\nAmerico-Liberian weddings follow the traditional African-American or Afro-Caribbean style weddings in which the bridegroom appears in a lounge suit and the bride in a white wedding dress.\n[…]\nAmerico-Liberian cuisine includes a variety of dishes and is a blend of African-American, Afro-Caribbean, and local indigenous Liberian rice and foofoo dishes. Americo-Liberians introduced traditional African-American baking techniques into the modern-day nation of Liberia. Liberia remains unique for its baking traditions that are derived from the African-American immigrants to Liberia.\n[…]\nAmerico-Liberians speak Liberian English and its varieties such as Merico and Liberian Settler English, all of which have been influenced by African-American Vernacular English, Gullah, and Barbadian Creole. The Americo-Liberians introduced a form of African-American Vernacular English that influenced the existing pidgin English or patois that existed in the region of Liberia from the pre-colonial era.\n[…]\nSolomon Carter Fuller, Liberian pioneer and African-American psychiatrist and physician\n[…]\nAfrican Americans in Africa"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lib%C3%A9ria",
        "situacao": "ok",
        "texto": "Libéria (em inglês: Liberia), oficialmente República da Libéria (em inglês: Republic of Liberia), é uma república presidencialista localizada na África Ocidental. Faz fronteira ao norte com a Serra Leoa e Guiné, a leste com a Costa do Marfim e a sul e oeste com o Oceano Atlântico. Segundo o censo de 2008, a população do país é de 3 955 000 habitantes, divididos em uma área de 111 369 km2. A cidade\n[…]\nA história da Libéria é única entre as demais nações africanas. É um dos dois únicos países da África Subsaariana, juntamente com a Etiópia, sem raízes na colonização europeia. Foi fundada e colonizada por escravos americanos libertos com a ajuda de uma organização privada chamada American Colonization Society, entre 1821 e 1822, na premissa de que os ex-escravos americanos teriam maior liberdade e igualdade nesta nova nação.\n[…]\nO nascimento da Libéria ocorreu no século XIX em resultado da ação da Sociedade Americana de Colonização, organização criada por Robert Finley nos Estados Unidos em 1816, cujo objetivo era levar para a África negros livres ou negros que tinham sido libertos da escravatura. De acordo com uma opinião prevalecente em alguns setores da população dos Estados Unidos da época, os negros não seriam nunca capazes de se integrar na sociedade do país.\n[…]\nApesar de o inglês ser a língua oficial, esta não é a língua habitual da maior parte da população.\n[…]\nA maioria dessas denominações cristãs foi trazida por colonos afro-americanos que se mudaram dos Estados Unidos para a Libéria através da Sociedade Americana de Colonização (American Colonization Society), enquanto alguns são indígenas — especialmente pentecostais e evangélicos protestantes.\n[…]\nA Libéria é membro fundador da Organização das Nações Unidas (ONU), sendo membro da União Africana (UA), da Comunidade Económica dos Estados da África Ocidental (ECOWAS), do Banco Africano de Desenvolvimento e do Movimento Não Alinhado.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Suriname",
      "descricao": "País do norte da América do Sul, antiga colônia holandesa, com capital em Paramaribo."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O Suriname fala holandês porque, no Tratado de Breda, de 1667, a Holanda ficou com ele e cedeu aos ingleses qual colônia?",
    "resposta": "Nova Amsterdã, atual Nova York",
    "distratores": [
      "Nova França",
      "Virgínia",
      "Flórida"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)",
      "https://en.wikipedia.org/wiki/Suriname"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Treaty_of_Breda_(1667)",
        "situacao": "ok",
        "texto": "The Peace of Breda, or Treaty of Breda was signed in the Dutch city of Breda, on 31 July 1667. It consisted of three separate treaties between England and each of its opponents in the Second Anglo-Dutch War: the Dutch Republic, France, and Denmark–Norway. It also included a separate Anglo-Dutch commercial agreement.\n[…]\nAmong the terms was confirmation of colonial territories taken in the War, including Suriname to the Dutch and New Netherland (New York) to the English.\n[…]\nBy late 1666, Charles was short of money, largely due to his refusal to recall Parliament, while English trade had been badly affected by the war and domestic disasters. In contrast, the Dutch economy had largely recovered from its post-1665 contraction, while public debt was lower in 1667 than 1652; however, naval warfare was enormously expensive and financing it a challenge even for the Amsterdam markets.\n[…]\nThe Dutch kept Surinam, now part of modern Suriname, Fort Cormantin and Run while the English kept New Netherland, which was subsequently divided into the colonies of New York, New Jersey, Pennsylvania, Massachusetts, Connecticut and Delaware.\n[…]\nA separate treaty amended the Navigation Acts; goods transported along the Rhine or Scheldt to Amsterdam could be carried by Dutch ships to England without being subject to tariffs. England also accepted the principle of \"free ships make free goods\", which prevented the Royal Navy from intercepting Dutch ships during wars in which the Dutch were neutral. These terms were preliminary, with a definitive text signed on 17 February 1668.\n[…]\nLesaffer, Randall (2016). De Vrede van Breda en de Europese traditie van vredesverdragen in Ginder 't Vreêverbont bezegelt : Essays over de betekenis van de Vrede van Breda 1667. Van Kemenade."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Suriname",
        "situacao": "ok",
        "texto": "Suriname,  officially the Republic of Suriname, is a country on the northern coast of South America, also considered part of the Caribbean region. Situated slightly north of the equator, over 95% of its territory is covered by rainforest, the second-highest proportion of forest cover in the world. Suriname is bordered by the Atlantic Ocean to the north, French Guiana to the east, Brazil to the sou\n[…]\nDisputes arose between the Dutch and the English for control of this territory. In 1667, during negotiations leading to the Treaty of Breda after the Second Anglo-Dutch War, the Dutch decided to keep the nascent plantation colony of Surinam they had gained from the English. In return the English kept New Amsterdam, the main city of the former colony of New Netherland in North America on the mid-Atlantic coast.\n[…]\nIn 1683, the Society of Suriname was founded by the city of Amsterdam, the Van Aerssen van Sommelsdijck family, and the Dutch West India Company. The society was chartered to manage and defend the colony. The planters of the colony relied heavily on African slaves to cultivate, harvest and process the commodity crops of coffee, cocoa, sugar cane and cotton plantations along the rivers.\n[…]\nSurinam Airways (SLM) (Aruba), Brazil (Belém), (Curaçao), Guyana (Georgetown), Netherlands (Amsterdam), Trinidad and Tobago (Port of Spain), and the United States (Miami).\n[…]\nABC (Ch. 4–1, 2), RBN (Ch. 5–1, 2), Rasonic TV (Ch. 7), STVS (Ch. 8–1, 2, 3, 4, 5, 6), Apintie (Ch. 10–1), ATV (Ch. 12–1, 2, 3, 4), Radika (Ch. 14), SCCN (Ch. 17–1, 2, 3), Pipel TV (Ch. 18–1, 2), Trishul (Ch. 20–1, 2, 3, 4), Garuda (Ch. 23–1, 2, 3), Sangeetmala (Ch. 26), Ch. 30, Ch. 31, Ch.32, Ch.38, SCTV (Ch. 45). Also listened to is mArt, a broadcaster from Amsterdam founded by people from Suriname. Kondreman is one of the popular cartoons in Suriname.\n[…]\n(in Dutch) Website of the Government of the Republic of Suriname"
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
    "indice": 36,
    "ancora": {
      "nome": "Pidgin",
      "descricao": "Língua de contato simplificada que surge entre grupos sem idioma comum, geralmente para o comércio."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Quando um pidgin passa a ser a língua materna das crianças de uma comunidade, ele se torna o quê?",
    "resposta": "Língua crioula",
    "distratores": [
      "Dialeto",
      "Jargão",
      "Língua franca"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pidgin",
      "https://en.wikipedia.org/wiki/Creole_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pidgin",
        "situacao": "ok",
        "texto": "A pidgin , or pidgin language, is a grammatically simplified form of contact language that develops between two or more groups of people that do not have a language in common: typically, its vocabulary and grammar are limited and often drawn from several languages. It is most commonly employed in situations such as trade, or where both groups speak languages different from the language of the coun\n[…]\nKeith Whinnom (in Hymes (1971)) suggests that pidgins need three languages to form, with one (the superstrate) being clearly dominant over the others.\n[…]\nLinguists sometimes posit that pidgins can become creole languages when a generation of children learn a pidgin as their first language,\n[…]\na process that regularizes speaker-dependent variation in grammar. Creoles can then replace the existing mix of languages to become the native language of a community (such as the Chavacano language in the Philippines, Krio in Sierra Leone, and Tok Pisin in Papua New Guinea). However, not all pidgins become creole languages; a pidgin may die out before this phase would occur (e.g. the Mediterranean Lingua Franca).\n[…]\nMany of these languages are commonly referred to by their speakers as \"Pidgin\".\n[…]\nCreole language – Stable natural languages that have developed from a pidgin\n[…]\nLingua franca – Concept in linguistics\n[…]\nBakker, Peter (1994), \"Pidgins\", in Arends, Jacques; Muijsken, Pieter; Smith, Norval (eds.), Pidgins and Creoles: An Introduction, John Benjamins, pp. 26–39\n[…]\nHymes, Dell (1971), Pidginization and Creolization of Languages, Cambridge University Press, ISBN 0-521-07833-4\n[…]\nSebba, Mark (1997), Contact Languages: Pidgins and Creoles, MacMillan, ISBN 0-333-63024-6\n[…]\nTodd, Loreto (1990), Pidgins and Creoles, Routledge, ISBN 0-415-05311-0\n[…]\nHolm, John (2000), An Introduction to Pidgins and Creoles, Cambridge University Press\n[…]\nAtlas of Pidgin and Creole Language Structures (APiCS)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Creole_language",
        "situacao": "ok",
        "texto": "A creole language, or simply creole, is a stable form of contact language that develops from the process of different languages simplifying and mixing into a new form (often a pidgin), and then that form expanding and elaborating into a full-fledged language with native speakers, all within a fairly brief period.\n[…]\nHowever, in Brazil the term was also used to distinguish between negros crioulos (black people born in Brazil from enslaved African ancestors) and negros africanos (born in Africa). Over time, the term and its derivatives (Creole, Kréol, Kreyol, Kreyòl, Kriol, Krio, etc.) lost the generic meaning and became the proper name of many distinct ethnic groups that developed locally from immigrant communities.\n[…]\nThe monogenetic theory of pidgins and creoles hypothesizes that all Atlantic creoles derived from a single Mediterranean Lingua Franca, via a West African Pidgin Portuguese of the seventeenth century, relexified in the so-called \"slave factories\" of Western Africa that were the source of the Atlantic slave trade. This theory was originally formulated by Hugo Schuchardt in the late nineteenth century and popularized in the late 1950s and early 1960s by Taylor, Whinnom, Thompson, and Stewart.\n[…]\nLingua franca\n[…]\nGood, Jeff (2004), \"Tone and accent in Saramaccan: Charting a deep split in the phonology of a language\", Lingua, 114 (5): 575–619, doi:10.1016/S0024-3841(03)00062-7, S2CID 18601673\n[…]\nSingler, John Victor (1988), \"The homogeneity of the substrate as a factor in pidgin/creole genesis\", Language, 64 (1): 27–51, doi:10.2307/414784, JSTOR 414784\n[…]\nSociety for Pidgin & Creole Linguistics Archived 2020-10-11 at the Wayback Machine\n[…]\nAtlas of Pidgin and Creole Language Structures (APiCS)\n[…]\nAssociação Brasileira de Estudos Crioulos e Similares"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pidgin",
        "situacao": "ok",
        "texto": "Pidgin (pron. 'pɪdʒəŋ)  ou língua de contacto  é uma palavra de origem inglesa que designa qualquer língua criada, normalmente de forma espontânea, a partir da mistura de duas ou mais línguas e que serve de meio de comunicação entre os falantes dessas línguas.\n[…]\nO conceito é originário da Europa, onde, a partir da Idade Média, os comerciantes do Mediterrâneo usavam a lingua franca ou sabir.\n[…]\nOs pidgins têm normalmente gramáticas rudimentares e um vocabulário restrito. Podem, no entanto,  desenvolver-se, transformando-se em línguas crioulas. Um pidgin diferencia-se de uma língua crioula, que tem vocabulário e gramática plenamente desenvolvidos, tornando-se a primeira língua de uma comunidade de fala.\n[…]\nA maioria dos linguistas acredita que uma língua crioula se desenvolva através de um processo de nativização de um pidgin, ou seja, quando crianças falantes do pidgin passam a utilizá-lo como primeira língua, adquirindo complexidade e estabilidade típicas de uma língua. Então,  a língua crioula substitui o pidgin como forma de comunicação, à semelhança do que acontece as línguas crioulas de Cabo Verde ou da Guiné-Bissau.\n[…]\nUm outro exemplo bem conhecido é o bichlamar,  língua crioula melanésia que se baseia no inglês, com incorporação de palavras malaias, chinesas, francesas e portuguesas.\n[…]\nMas nem sempre os pidgins se transformam em crioulos: podem morrer ou tornar-se obsoletos, tal como ocorreu com aqueles falados  nos séculos XVII e XVIII,  em Angola, resultantes da mistura entre o português europeu e as línguas nativas. Esses pidgins acabaram por dar origem a variedades linguísticas ou línguas crioulas, popularmente denominadas  \"pequeno português\".\n[…]\nA ausência de uma língua franca espalhada e/ou acessível.\n[…]\nLínguas crioulas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Iídiche",
      "descricao": "Língua germânica escrita com letras hebraicas, falada historicamente pelos judeus asquenazes da Europa Central e Oriental."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Falado por milhões de judeus da Europa Oriental, o iídiche perdeu de uma vez boa parte de seus falantes por causa de qual acontecimento?",
    "resposta": "Holocausto",
    "distratores": [
      "Revolução Russa",
      "Gripe espanhola",
      "Primeira Guerra Mundial"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yiddish"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yiddish",
        "situacao": "ok",
        "texto": "Yiddish, historically referred to as Judeo-German or Jewish German, is a West Germanic language and Jewish ethnolect historically spoken by Ashkenazi Jews. It originated in the Holy Roman Empire during the Middle Ages, and provided the nascent Ashkenazi community with a vernacular based on High German, fused with many elements taken from Hebrew (notably Mishnaic Hebrew) and to some extent Aramaic.\n[…]\nYiddish was an official language of the Ukrainian People's Republic (1917–1921). But due to the holocaust, assimilation, and migration of Ukrainian Jews abroad today only 3,100 of the remaining Jews speak Yiddish as their first language. The Southeast dialect of Yiddish has many Ukrainian loanwords due to the long contact between Yiddish speakers and Ukrainian speakers.\n[…]\nThere has been a resurgence in Yiddish learning in recent times among many from around the world with Jewish ancestry. The language which had lost many of its native speakers during the Holocaust has been making something of a comeback. In Poland, which traditionally had Yiddish speaking communities, a museum has begun to revive Yiddish education and culture. Located in Kraków, the Galicia Jewish Museum offers classes in Yiddish Language Instruction and workshops on Yiddish songs.\n[…]\nThere are various universities worldwide which now offer Yiddish programs based on the YIVO Yiddish standard. Many of these programs are held during the summer and are attended by Yiddish enthusiasts from around the world. One such school located within Vilnius University (Vilnius Yiddish Institute) was the first Yiddish center of higher learning to be established in post-Holocaust Eastern Europe. Vilnius Yiddish Institute is an integral part of the four-century-old Vilnius University.\n[…]\nYiddish Book Center\n[…]\nThe Israeli National Authority of Yiddish Culture\n[…]\nIn Geveb: A Journal of Yiddish Studies\n[…]\nKol Israel International (Reka) in Yiddish"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_i%C3%ADdiche",
        "situacao": "ok",
        "texto": "O iídiche, ídiche ou judeu-alemão (em iídiche: ייִדיש ou em iídiche: אידיש; romaniz.: ídish; lit. \"judeu\", \"judaico\") é uma língua da família indo-europeia, pertencente ao subgrupo germânico, tendo sido adotada por judeus, particularmente na Europa Central e na Leste Europeu, no segundo milênio, que a escrevem utilizando os caracteres hebraicos.\n[…]\nO iídiche se desenvolveu dentro da cultura asquenazita, a partir do século X na Europa central e oriental, e se espalhou para outras regiões do planeta com a emigração de seus praticantes. O nome \"iídiche\" passou a ser usado para designar o idioma somente a partir do século XVIII; antes disso, já era a principal língua falada pelos judeus asquenazes.\n[…]\nA origem do iídiche remonta à época medieval germânica. Por vários séculos, houve uma migração de judeus para várias regiões da Europa. Os judeus miscigenados com a população da Europa Central e do Leste Europeu, de origem nórdica e eslava, formaram um grupo que passou a ser conhecido como asquenazitas.\n[…]\nO termo \"asquenaze\" (ashkenazi) tem sua origem em um vocábulo hebraico que designava o povo que vivia na região onde hoje fica a Alemanha, e foi apropriado pelos judeus que se estabeleceram nesta área. Durante muito tempo, este grupo foi a minoria da população judaica mundial, estando concentrada nas regiões centrais e orientais da Europa; porém, em um período mais recente, a população asquenazita cresceu e se espalhou pelo mundo, tornando assim o idioma iídiche mais difundido.\n[…]\nIídiche moderno (a partir de 1700).\n[…]\nDo século XVII em diante a língua diferia suficientemente da dos judeus habitantes das regiões falantes de línguas germânicas, o que justificou a divisão entre iídiche oriental e ocidental. Essa última variante começou a declinar no final do século XVIII e desapareceu quase completamente durante o século XIX.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Levante de Soweto",
      "descricao": "Série de protestos de estudantes negros em Soweto, na África do Sul, iniciada em 16 de junho de 1976, durante o apartheid."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1976, estudantes negros de Soweto, na África do Sul, saíram às ruas contra o ensino obrigatório em qual língua?",
    "resposta": "Africâner",
    "distratores": [
      "Inglês",
      "Zulu",
      "Xhosa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Soweto_uprising"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Soweto_uprising",
        "situacao": "ok",
        "texto": "The Soweto uprising, also known as the Soweto riots or the Soweto rebellion, was a series of demonstrations and protests led by black school children in South Africa during apartheid that began on the morning of 16 June 1976.\n[…]\nMost of the bloodshed had abated by the end of 1976. According to The Times, by that time more than 700 people had been killed throughout the country in the violence that had begun with the student uprising in Soweto. The Cillie Commission set up to investigate the uprising and its aftermath estimated 575 deaths from violence up to 28 February 1977, including 390 in Transvaal province and 137 in Western Cape province. The breakdown was 496 black Africans, 75 coloured, 2 white and 2 Indians.\n[…]\nA week after the uprising began, US Secretary of State Henry Kissinger met South African State President Vorster in West Germany to discuss the situation in Rhodesia, but the Soweto uprising did not feature in the discussions. Kissinger and Vorster met again in Pretoria in September 1976, with students in Soweto and elsewhere protesting his visit and being fired on by police.\n[…]\nSampson linked extracts from the BBC Sound Archive that charted the long struggle against apartheid from the Sharpeville massacre of 1960 to the riots of 1976 and the murder of Steve Biko until Mandela's release from prison in 1990 and the future president's speech in which he acknowledged the debt owed by all black South Africans to the students who had given their lives in Soweto on 16 June 1976.\n[…]\nInternational Day of the African Child\n[…]\n\"S. Africa marking Soweto uprising\" – BBC\n[…]\nThe June 16 Soweto Youth Uprising, South African History Online\n[…]\nThe June 16 Soweto students' uprising – as it happened, South Africa Gateway"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Levante_de_Soweto",
        "situacao": "ok",
        "texto": "O Levante de Soweto foi um dos mais sangrentos episódios de rebelião negra desde o início da década de 1960, desencadeado pela repressão policial à passeata, em 16 de junho de 1976, de protesto contra a inferioridade das \"escolas negras\" na África do Sul. Estima-se que havia entre 15 000 a 20 000 estudantes no protesto.\n[…]\nA manifestação pacífica — os estudantes, cantando, marchavam por Soweto (subúrbio negro em Johanesburgo) em direção a um estádio aberto, onde fariam um comício — foi alvo de uma bomba de gás lacrimogêneo por um policial, para, em seguida, ser atingida por disparos das tropas de choque munidas de armas automáticas. O número de pessoas mortas oficialmente é de 95, mas normalmente é dito que foram 176, mas há estatísticas que foram 700.\n[…]\nUm dos mortos foi o estudante Hector Pieterson, aos 13 anos de idade, que se tornou símbolo do massacre.\n[…]\nEm memória desta data, a então OUA instituiu em 1991 o Dia da Criança Africana.\n[…]\nO sistema segregacionista sul-africano, instituído no final dos anos 1940, forçava os negros a pagar para frequentar escolas com classes superlotadas e professores sem qualificação adequada, ou mesmo inferior, enquanto a educação para os brancos era gratuita.\n[…]\nEm 1975, o governo decretou a obrigatoriedade do ensino no idioma africâner, antes em inglês, para as matérias acadêmicas nas escolas secundárias negras. Para os estudantes negros a medida era uma ponte para o fracasso: para ter sucesso precisava ser fluente nos idiomas oficiais do país — inglês e africâner.\n[…]\nA organização dos Estudantes Sul-Africanos (South African yy Organization) (1968) foi o primeiro grupo anti-apartheid de jovens negros e fazia parte do abrangente Movimento de Conscientização Negra que lutava para superar a opressiva sensação de inferioridade dos negros.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Libras",
      "descricao": "Língua Brasileira de Sinais, a língua de sinais usada pela comunidade surda do Brasil."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano uma lei federal reconheceu a Libras como meio legal de comunicação das pessoas surdas no Brasil?",
    "resposta": "2002",
    "distratores": [
      "1988",
      "1996",
      "2010"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
      "https://en.wikipedia.org/wiki/Brazilian_Sign_Language"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
        "situacao": "ok",
        "texto": "A Língua Brasileira de Sinais (Libras) é a língua de sinais usada por surdos dos centros urbanos brasileiros e legalmente reconhecida como meio de comunicação e expressão, sendo o principal veiculo da cultura surda. É derivada tanto de uma língua de sinais autóctone, que é natural da região ou do território em que é empregada, quanto da antiga língua de sinais francesa; por isso, é semelhante a ou\n[…]\nA Libras não é a \"segunda língua oficial do Brasil\". Ela é reconhecida como meio de comunicação e expressão dos surdos sinalizados brasileiros, e, de acordo com a Lei de Libras, ela não substitui a modalidade escrita da língua portuguesa (língua oficial do país). No Brasil, também existem outras línguas de sinais, como a Cena e as Línguas Indígenas de Sinais (LIS).\n[…]\nAssim, a Libras se apresenta como um sistema linguístico de transmissão de ideias e fatos, oriundos de comunidades de pessoas surdas do Brasil. Como em qualquer língua, também na Libras, existem diferenças regionais. Estas diferenças são chamadas de regionalismo. É quando há mais de uma maneira de representar uma mesma palavra.\n[…]\nApenas no ano de 2002 a língua brasileira de sinais foi reconhecida como meio legal de comunicação e expressão, através da Lei 10.436, de 24 de abril de 2002, apesar de não poder substituir a modalidade escrita da língua portuguesa. Em 2003 foi aprovada a Portaria nº 3.284, que dispõe sobre a acessibilidade dos surdos dentro das universidades brasileiras. No ano seguinte, em 2004, foi ratificado o Decreto nº 5.296, o qual estabeleceu mais prerrogativas legais de acessibilidade.\n[…]\nA Libras foi reconhecida como a língua oriunda das comunidades surdas do país, através da lei nº10.436/2002, garantido o seu direito de reconhecimento como língua de manifestação e expressão das pessoas surdas no acesso à educação, à saúde, à cultura e ao trabalho.\n[…]\nLíngua de sinais\n[…]\nLíngua de sinais kaapor brasileira"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Sign_Language",
        "situacao": "ok",
        "texto": "Brazilian Sign Language (Portuguese: Língua Brasileira de Sinais [ˈlĩɡwɐ bɾaziˈlejɾɐ dʒi siˈnajs]) is the sign language used by deaf communities of Brazil. It is also known in short as Libras (pronounced [ˈlibɾɐs]) and variously abbreviated as LSB, LGB or LSCB (Língua de Sinais das Cidades Brasileiras; \"Brazilian Cities Sign Language\").\n[…]\nA strong sign language law was passed by the National Congress of Brazil on April 24, 2002, and (in 2005) is in the process of being implemented. The law mandates the use of Brazilian Sign Language in education and government services.\n[…]\nIn addition to being recognized nationally since 2002, Libras has also been made official at the municipal level in Belo Horizonte, Curitiba, Ouro Preto and Salvador. In Rio de Janeiro, the teaching of Libras was made official in the curriculum of the municipal school system.\n[…]\nThe Federal University of Santa Catarina has accepted a dissertation written in Brazilian Sign Language using Sutton SignWriting for a master's degree in linguistics. The dissertation \"A escrita de expressões não manuais gramaticais em sentenças da Libras pelo Sistema signwriting\" by João Paulo Ampessan states that \"the data indicate the need for [non-manual expressions] usage in writing sign language\".\n[…]\nCapovilla, F. C., and W. D. Raphael, eds. 2001. Dicionário enciclopédico ilustrado trilíngüe da Língua de Sinais Brasileira: Vols. 1 (Sinais de A a L) & 2 (Sinais de M a Z). [Trilingual illustrated encyclopedic dictionary of Brazilian Sign Language, Vols. 1 and 2] São Paulo: Edusp, FAPESP, Fundação Vitae, Feneis, Brasil Telecom. Volume One: ISBN 85-314-0600-5 Volume Two: ISBN 85-314-0603-X\n[…]\nXavier, André Nogueira and Sherman Wilcox. 2014. Necessity and possibility modals in Brazilian Sign Language (Libras). Linguistic Typology 18(3): 449 – 488."
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Imigração japonesa no Brasil",
      "descricao": "Movimento migratório de japoneses para o Brasil iniciado em 1908, que formou a maior comunidade de origem japonesa fora do Japão."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que ano chegaram ao Brasil, a bordo do Kasato Maru, os primeiros imigrantes japoneses trazidos oficialmente?",
    "resposta": "1908",
    "distratores": [
      "1888",
      "1898",
      "1924"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kasato_Maru",
      "https://pt.wikipedia.org/wiki/Imigra%C3%A7%C3%A3o_japonesa_no_Brasil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kasato_Maru",
        "situacao": "ok",
        "texto": "Kasato Maru or Kasado Maru (Japanese: 笠戸丸) was a Japanese cargo/passenger ship built by the British shipyard Wigham Richardson in 1900. Originally christened as SS Potosí, the ship was bought by the Russian Dobroflot, and  renamed Kazan, being used as a hospital ship. She was sunk by the Japanese Navy during the Russo-Japanese War, salvaged and passed to the Japanese control as compensation for wa\n[…]\nShe was adapted to be a passenger ship and renamed as Kasato Maru and transported the soldiers who had fought in Manchuria back to Japan.\n[…]\nShe was then used to transport Japanese immigrants to Hawaii in 1906 and to Peru and Mexico in 1907. In 1908, she brought the first official group of Japanese immigrants to Brazil. The trip began at the port of Kobe and ended, 52 days later, at the Port of Santos on June 18, 1908. There came 165 families (781 people) who went to work in the coffee plantations of the west of São Paulo.\n[…]\nSome Japanese immigrants arrived at Brazil before Kasato Maru, founding an agricultural colony in the  current municipality of Conceição de Macabu (then district of Macaé), in the state of Rio de Janeiro. However, it was the arrival of this first group brought by Kasato Maru that initiated a continuous flow of immigration from Japan to Brazil. Some of the Kasato Maru's passengers continued to Argentina (see es:Café El Japonés).\n[…]\nAfter some time, Kasato Maru was transformed into a freighter ship and still returned to Brazil a second and last time, in 1917, transporting loads in the service of Osaka Sosen Kaisha (OSK) Line.\n[…]\nOn 9 August 1945, Kasato Maru was bombed by three Soviet aircraft from 11:15. to 14:30. Kasato Maru then sank into the Bering Sea in the Soviet waters near the Kamchatka Peninsula. It is currently submerged to a depth of 18 meters and in good state of conservation."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Imigra%C3%A7%C3%A3o_japonesa_no_Brasil",
        "situacao": "ok",
        "texto": "Imigração japonesa no Brasil teve como ápice o período entre 1908 e 1960, com a maior concentração entre 1926 e 1935. Em 2022, o Ministério das Relações Exteriores do Japão afirmou haver dois milhões de descendentes de japoneses no país, fazendo com que o Brasil tenha a maior população de origem japonesa fora do Japão. Porém, em número de cidadãos japoneses, o Brasil ocupava o sétimo lugar em 2023\n[…]\nA imigração japonesa no Brasil teve início oficialmente em 18 de junho de 1908, quando o navio Kasato Maru aportou no porto de Santos, trazendo 781 japoneses para trabalharem nas fazendas de café do interior paulista. Por conta disso, o dia 18 de junho foi estabelecido como o dia nacional da imigração japonesa. O fluxo cessou quase que totalmente em 1973, com a vinda do último navio de imigração, o Nippon Maru.\n[…]\nO Kasato Maru é considerado pela historiografia oficial como o primeiro navio a aportar no Brasil com imigrantes japoneses. A viagem de 52 dias começou no porto de Kobe e terminou no Porto de Santos em 18 de Junho de 1908. Vieram 781 pessoas, sendo 186 mulheres que compunham 165 famílias. Havia poucas mulheres, pois, em sua grande maioria, os grupos tinham como núcleo marido e mulher e o restante era formado por parentes ou até mesmo conhecidos que não eram membros da família.\n[…]\nO recebimento não foi especialmente caloroso. Apenas um jornalista elogiou os imigrantes dizendo que eles eram \"limpos\", coisa não muito comum entre os europeus naquela época. A revista carioca \"O Malho\" em sua edição de 5 de dezembro de 1908 publicou uma charge de imigrantes japoneses com a seguinte legenda: \"O governo de São Paulo é teimoso. Após o insucesso da primeira imigração japonesa, contratou 3 000 amarelos. Teima pois em dotar o Brasil com uma raça diametralmente oposta à nossa\".\n[…]\nKasato Maru\n[…]\n«Centenário da Imigração Japonesa no Brasil (1908-2008)»\n[…]\n«100 Anos de Imigração Japonesa no Brasil»"
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Alfabeto armênio",
      "descricao": "Alfabeto criado por volta do ano 405 por Mesrop Mashtots para escrever o armênio."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que século o monge Mesrop Mashtots criou o alfabeto usado até hoje para escrever o armênio?",
    "resposta": "Século cinco",
    "distratores": [
      "Século dois",
      "Século oito",
      "Século onze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Armenian_alphabet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Armenian_alphabet",
        "situacao": "ok",
        "texto": "The Armenian alphabet (Armenian: Հայոց գրեր, romanized: Hayocʼ grer or Հայոց այբուբեն, Hayocʼ aybuben) or, more broadly, the Armenian script, is an alphabetic writing system developed for Armenian and occasionally used to write other languages. It was developed around 405 AD by Mesrop Mashtots, an Armenian linguist and ecclesiastical leader. The script originally had 36 letters. Eventually, two mo\n[…]\nOne account of the existence of an Armenian alphabet before Mesrop Mashtots comes from the third century Roman theologian, Hippolytus of Rome (170–235), in his Chronicle, while writing about his contemporary, Emperor Severus Alexander (r. 222–235), mentions that the Armenians are amongst those nations who have their own distinct alphabet.\n[…]\nAnother important evidence for the existence of a pre-Mashtotsian alphabet is the fact that the pantheon of the ancient Armenians included Tir, who was the patron god of writing and science.\n[…]\nThe Armenian alphabet was introduced by Mesrop Mashtots and Isaac of Armenia (Sahak Partev) in CE 405. Medieval Armenian sources also claim that Mashtots invented the Georgian and Caucasian Albanian alphabets around the same time. However, most scholars link the creation of the Georgian script to the process of Christianization of Iberia, a core Georgian kingdom of Kartli.\n[…]\nThe alphabet was therefore most probably created between the conversion of Iberia under Mirian III (326 or 337) and the Bir el Qutt inscriptions of 430, contemporaneously with the Armenian alphabet. Traditionally, the following phrase translated from Solomon's Book of Proverbs is said to be the first sentence to be written down in Armenian by Mashtots:\n[…]\nArmenian numerals\n[…]\nEnglish / French script to Armenian Transliteration Hayadar.com – Online, Latin to Armenian transliteration engine.\n[…]\nTransliteration schemes for the Armenian alphabet (transliteration.eki.ee)\n[…]\nArmenian Orthography converters"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alfabeto_arm%C3%AAnio",
        "situacao": "ok",
        "texto": "O alfabeto armênio (português brasileiro) ou arménio (português europeu) é o alfabeto utilizado por falantes armênio e foi idealizado no ano 405 por Mesrobes Mastósio. O primeiro texto a ser escrito nesse alfabeto foi a Bíblia, transcrição essa feita pelo próprio Mesrobes. A forma mais antiga de se escrever o armênio, forma utilizada até o século XI, é conhecida por erkat'agir (letras de ferro), e\n[…]\nOutra letra com o mesmo comportamento é o hiun (ւ), que tem som de 'h' no início de uma palavra, mas também é combinada com outras letras para formar dígrafos, tendo como exemplo, a união desta letra com a letra vo (ո), formando o dígrafo ու, que tem o som de  'u', exemplo: o nome do país Peru no alfabeto armênio se escreve desta maneira \"Պերու\" (\"Beru\").\n[…]\n[ ֊ ] O yent'amna é usado como o hífen armênio comum.\n[…]\n[ ՟ ] O pativ foi usado como uma marca de abreviação armênia e foi colocado no topo de uma palavra abreviada para indicar que foi abreviada. Agora está obsoleto.\n[…]\n[ ՚ ] O apat'arts é usado como um apóstrofo de espaçamento (que se parece com um bastão vertical ou cunha apontando para baixo, ou como uma vírgula elevada em forma de 9, ou como um pequeno parêntese de fechamento da esquerda para a direita sobrescrito ou meio anel), apenas em armênio ocidental, para indicar a elisão de uma vogal, geralmente /ə/.\n[…]\nA ISO 9985 (1996) translitera o alfabeto armênio para o armênio moderno da seguinte forma:\n[…]\nOs teclados armênios orientais e ocidentais padrão são baseados no layout da fonte Arasan. Esses layouts de teclado são principalmente uma transliteração fonética do layout QWERTY latino e permitem acesso direto a todos os caracteres do alfabeto. Como há mais caracteres no alfabeto armênio (39) do que no latim (26), alguns caracteres armênios aparecem em teclas não alfabéticas em um teclado QWERTY convencional (por exemplo, շ mapeia para ,).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Língua portuguesa",
      "descricao": "Língua românica nascida no noroeste da Península Ibérica, oficial em Portugal, no Brasil e em países da África e da Ásia."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Qual língua tem o maior número de falantes nativos no hemisfério sul?",
    "resposta": "Português",
    "distratores": [
      "Espanhol",
      "Inglês",
      "Javanês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Portuguese_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_language",
        "situacao": "ok",
        "texto": "Portuguese (endonym: português) is a Western Romance language of the Indo-European language family. With approximately 267 million native speakers, it is the fifth-most spoken native language in the world, and the most widely spoken language in the Southern Hemisphere. It is the official language of eight countries — Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Prí\n[…]\nSpanish is relatively intelligible for lusophones, owing to their geographic proximity and history as West Iberian (Ibero-Romance languages), historical contact between speakers and mutual influence, shared areal features as well as modern lexical, structural, and grammatical similarity (over 85%) between them. Many young Portuguese speakers however, will often choose English as the lingua-franca of choice, with Spanish, French, Italian, other Europeans, and speakers of other languages.\n[…]\nIn the kingdom of Portugal, Ladinho (or Lingoagem Ladinha) was the name given to the pure Portuguese romance language, without any mixture of Aravia or Gerigonça Judenga. While the term língua vulgar was used to name the language before D. Dinis decided to call it \"Portuguese language\", the erudite version used and known as Galician–Portuguese (the language of the Portuguese court) and all other Portuguese dialects were spoken at the same time.\n[…]\nIt left a strong influence on the língua brasílica, a Tupi–Guarani language, which was the most widely spoken in Brazil until the 18th century, and on the language spoken around Sikka in Flores Island, Indonesia. In nearby Larantuka, Portuguese is used for prayers in Holy Week rituals.\n[…]\nIndo-Portuguese\n[…]\nList of Portuguese-language poets\n[…]\nMozambican Portuguese\n[…]\nPortuguese Africans\n[…]\nPortuguese language in Asia\n[…]\nPortuguese Language Orthographic Agreement of 1990\n[…]\nPortuguese literature\n[…]\nPortuguese poetry\n[…]\nAutomatic Transcription of Phonemic and Phonetic Portuguese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa",
        "situacao": "ok",
        "texto": "Língua portuguesa, também designada português, é uma língua indo-europeia românica flexiva ocidental originada no galego-português falado no Reino da Galiza e no norte de Portugal. Com a criação do Reino de Portugal em 1139 e a expansão para o sul na sequência da Reconquista, deu-se a difusão da língua pelas terras conquistadas e, mais tarde, com as descobertas portuguesas, para o Brasil, África e\n[…]\nÉ uma das línguas oficiais da União Europeia, do Mercosul, da União de Nações Sul-Americanas, da Organização dos Estados Americanos, da União Africana, da ASEAN e da CPLP. Com aproximadamente 300 milhões de falantes, o português é a 5.ª língua mais falada no mundo, a 3.ª mais falada no hemisfério ocidental e a mais falada no hemisfério sul do planeta.\n[…]\nEm março de 2006, o Museu da Língua Portuguesa, um museu interativo sobre o idioma, foi fundado em São Paulo, Brasil, a cidade com o maior número de falantes do português em todo o mundo.\n[…]\nO português é a língua da maioria da população de Portugal, Brasil, São Tomé e Príncipe (98,4%) e, de acordo com o censo de 2014, é a língua habitual de 71,15% da população de Angola. Entretanto, cerca de 85% dos angolanos são capazes de falar português, segundo o Instituto Nacional de Estatística. Apesar de apenas 10,7% da população de Moçambique ser de falantes nativos do português, o idioma é falado por cerca de 50,4% dos moçambicanos, de acordo com o censo de 2007.\n[…]\nEnquanto os falantes de português têm um nível notável de compreensão do castelhano, os falantes castelhanos têm, em geral, maior dificuldade de entendimento. Isto acontece porque o português, apesar de ter sons em comum com o castelhano, também tem sons particulares. No português, por exemplo, há vogais e ditongos nasais (provavelmente herança das línguas célticas).\n[…]\n«Museu Virtual sobre a Língua Portuguesa»\n[…]\n«As periodizações: Histórias da língua portuguesa»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Língua espanhola",
      "descricao": "Língua românica nascida em Castela, oficial na Espanha e em grande parte da América Latina."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre as línguas que descendem do latim, qual tem mais falantes nativos?",
    "resposta": "Espanhol",
    "distratores": [
      "Português",
      "Francês",
      "Italiano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Romance_languages",
      "https://en.wikipedia.org/wiki/Spanish_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Romance_languages",
        "situacao": "ok",
        "texto": "The Romance languages, less commonly known as the Latin languages, are the languages that directly descended from Vulgar Latin. They are the only extant (living) subgroup of the Italic branch of the Indo-European language family.\n[…]\nMauritian (lingua franca of Mauritius)\n[…]\nCape Verdean (Cape Verde's national language and lingua franca; includes several distinct varieties)\n[…]\nGuinea-Bissau Creole (Guinea-Bissau's national language and lingua franca)\n[…]\nPapiamento (Dutch Antilles official language, majority native language, and lingua franca)\n[…]\nOther languages developed include Idiom Neutral (1902), Interlingue-Occidental (1922), Interlingua (1951) and Lingua Franca Nova (1998). The most famous and successful of these is Interlingua. Each of these languages has attempted to varying degrees to achieve a pseudo-Latin vocabulary as common as possible to living Romance languages. Some languages have been constructed specifically for communication among speakers of Romance languages, the Pan-Romance languages.\n[…]\ndōnat \"he gives\" > OF dune /dunə/ > donne /dɔn/, fēminam > femme /fam/. Other vowels remained nasalized, and were dramatically lowered: fīnem \"end\" > fin /fɛ̃/ (often pronounced [fæ̃]); linguam \"tongue\" > langue /lɑ̃ɡ/; ūnum \"one\" > un /œ̃/, /ɛ̃/.\n[…]\nCI: used in Italian, Romance languages in Italy, Corsican and Romanian to represent /tʃ/ before A, O, or U. In Sicilian, it is used for [ç] in contexts where it descended from Latin FL, as in ciamma.\n[…]\nDevoto, Giacomo (1999). Il Linguaggio d'Italia. Milano: RCS Libri (Biblioteca Universale Rizzoli)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Spanish_language",
        "situacao": "ok",
        "texto": "Spanish (español), also known as Castilian (castellano), is a Romance language of the Indo-European language family. It evolved from the Vulgar Latin spoken on Europe's Iberian Peninsula, originating in the Kingdom of Castile in what is now north-central Spain. Today, it is a global language with 519 million native speakers, mainly in the Americas and Spain, and about 636 million speakers total, i\n[…]\nIn the Middle Ages, the language spoken in Castile was generically referred to as Romance and later also as Lengua vulgar. Later in the period, it gained geographical specification as Romance castellano (romanz castellano, romanz de Castiella), lenguaje de Castiella, and ultimately simply as castellano (noun).\n[…]\nThe Gramática de la lengua castellana, written in Salamanca in 1492 by Elio Antonio de Nebrija, was the first grammar written for a modern European language. According to a popular anecdote, when Nebrija presented it to Queen Isabella I, she asked him what was the use of such a work, and he answered that language is the instrument of empire. In his introduction to the grammar, dated 18 August 1492, Nebrija wrote that \"... language was always the companion of empire.\"\n[…]\nDespite a public education system set up by the colonial government, by the end of Spanish rule in 1898, only about 10% of the population had knowledge of Spanish, mostly those of Spanish descent or elite standing.\n[…]\nJudaeo-Spanish, also known as Ladino, is a variety of Spanish which preserves many features of medieval Spanish and some old Portuguese and is spoken by descendants of the Sephardi Jews who were expelled from Spain in the 15th century. While in Portugal the conversion of Jews occurred earlier and the assimilation of New Christians was overwhelming, in Spain the Jews kept their language and identity."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADnguas_rom%C3%A2nicas",
        "situacao": "ok",
        "texto": "As línguas românicas, também conhecidas como línguas neolatinas, latinas, ou colectivamente como romance ou romanço, são idiomas que integram o vasto conjunto das línguas indo-europeias que se originaram da evolução do latim, principalmente do latim vulgar, falado pelas classes mais populares do velho Império Romano.\n[…]\nAtualmente, essas línguas são representadas pelos seguintes idiomas mais conhecidos e mais falados no mundo: o português, o castelhano (também conhecido como espanhol), o italiano, o francês e o romeno. Há, também, uma grande quantidade de idiomas usados por grupos minoritários de falantes, como:\n[…]\nOs impérios ultramarinos estabelecidos por Portugal, Espanha, França, Bélgica e Itália do século XV em diante espalharam as suas respectivas línguas por outros continentes, de tal forma que cerca de 70% de todos os falantes de línguas românicas vivem hoje fora da Europa.\n[…]\nUm estudo de 1949 do linguista Mario Pei, analisando o grau em que sete línguas românicas divergiam do latim clássico em relação à vocalização do sotaque, produziu as seguintes medidas de divergência (com porcentagens mais altas indicando maior divergência das vogais tônicas do latim clássico):\n[…]\nCastelhano: 20%\n[…]\nO português e o francês possuem a fonética mais distante do latim. Uma das supostas razões pode ser um substrato céltico nestas línguas. O galego, do qual surgiu o português, teria sofrido influência do idioma lusitano, enquanto o francês teria sido influenciado pelo gaulês (além do forte substrato germânico).[carece de fontes]?\n[…]\nLínguas ibero-românicas: Castelhano, português, galego, asturo-leonês e aragonês.\n[…]\nJudeu-espanhol:Kada benadam i benadam nase forro i igual en dinyidad i en derechos. Todos son baale razón i konsiensia i deven komportarsen los unos verso los otros kon fraternidad",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Língua árabe",
      "descricao": "Língua semítica falada no Oriente Médio e no norte da África, que deixou muitas palavras no português."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre os países que têm o árabe como língua oficial, qual é o mais populoso?",
    "resposta": "Egito",
    "distratores": [
      "Argélia",
      "Arábia Saudita",
      "Iraque"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Egypt",
      "https://en.wikipedia.org/wiki/Arab_world"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Egypt",
        "situacao": "ok",
        "texto": "Egypt, officially the Arab Republic of Egypt, is a country spanning the northeast corner of Africa and southwest corner of Asia via the Sinai Peninsula. It is bordered by the Mediterranean Sea to the north, Palestine and Israel to the northeast, the Red Sea to the east, Sudan and the Sahara to the south, and Libya to the west. The Gulf of Aqaba in the northeast separates Egypt from Jordan and Saud\n[…]\nCairo is the capital, largest city, and leading cultural centre, while Alexandria is the second-largest city and an important hub of industry and tourism. With over 107 million inhabitants, Egypt is the most populous country in the Arab world, third-most populous country in Africa, and 15th-most populated in the world.\n[…]\nEgypt is the most populated country in the Arab world and the third most populous on the African continent, with about 120 million inhabitants as of 2026. Its population grew rapidly from 1970 to 2010 due to medical advances and increases in agricultural productivity enabled by the Green Revolution. Egypt's population was estimated at 3 million when Napoleon invaded the country in 1798."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arab_world",
        "situacao": "ok",
        "texto": "The Arab world comprises a large group of countries, mainly located in West Asia and North Africa. While the majority of people in the Arab world are ethnically Arab, there are also significant populations of other ethnic groups such as Berbers, Kurds, Somalis and Nubians, among other groups. Arabic is used as the lingua franca throughout the Arab world.\n[…]\nThe term \"Arab\" often connotes the Arabian Peninsula, but the larger (and more populous) part of the Arab World is North Africa. Its eight million square kilometers include two of the largest countries of the African continent, Algeria (2.4 million km2) in the center of the region and Sudan (1.9 million km2) in the southeast. Algeria is about three-quarters the size of India, or about one-and-a-half times the size of Alaska, the largest state in the United States.\n[…]\nIn the Arab world, Modern Standard Arabic, derived from Classical Arabic (symptomatic of Arabic diglossia), serves as an official language in the Arab League states, and Arabic dialects are used as lingua franca. Various indigenous languages are also spoken, which predate the spread of the Arabic language."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Egito",
        "situacao": "ok",
        "texto": "Egito (AO 1945: Egipto) (em egípcio: Kṃt; em copta: Ⲭⲏⲙⲓ; romaniz.: [Kīmi] ; em árabe: مصر, pronunciado: [mi̠sˤr], pronunciado em árabe egípcio: [mesˤɾ]; em árabe egípcio: مَصر; romaniz.: Maṣr, pronunciado: [mɑsˤɾ]), oficialmente República Árabe do Egito (em árabe: جمهورية مصر العربية; em árabe egípcio: Gomhoreyyet Maṣr el-ʿArabeyya), é um país localizado entre o nordeste da África e o sudoeste da\n[…]\nO islão é a religião oficial do Egito e o árabe é sua língua oficial. Com mais de 95 milhões de habitantes, o Egito é o país mais populoso do Norte da África, do Oriente Médio e do mundo árabe, o terceiro mais populoso da África (depois da Nigéria e da Etiópia) e o 14.º mais populoso do mundo. A grande maioria do seu povo vive perto das margens do rio Nilo, uma área de cerca de 40 000 km2, onde a única terra arável disponível é encontrada.\n[…]\nO Egito é reconhecido por ser um criador de tendências culturais no mundo da língua e da cultura árabe contemporânea, influenciados fortemente pela literatura, música, cinema e televisão egípcia. O país ganhou um papel de liderança regional durante os anos de 1950 e 1960, o que deu um novo impulso duradouro para o estatuto da cultura egípcia no mundo árabe.\n[…]\nO cinema egípcio tornou-se uma força regional com a chegada do som. Em 1936, o Studio Misr, financiado pelo industrial Talaat Harb, emergiu como o principal estúdio egípcio, um papel que a empresa manteve por três décadas. Por mais de 100 anos, mais de 4 000 filmes foram produzidos no Egito, três quartos da produção árabe total. O Egito é considerado o país líder no campo do cinema no Oriente Médio. Atores de todo o mundo árabe procuram aparecer no cinema egípcio por causa da fama.\n[…]\nEntre todos os países africanos, o time de basquete nacional do Egito detém o recorde de melhor desempenho na Copa do Mundo de Basquete e nos Jogos Olímpicos de Verão.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Pedra de Roseta",
      "descricao": "Estela de granodiorito com um decreto de 196 antes de Cristo em três escritas, chave para a decifração dos hieróglifos"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A Pedra de Roseta traz o mesmo decreto em hieróglifos, em grego antigo e em qual terceira escrita usada no Egito?",
    "resposta": "Demótico",
    "distratores": [
      "Hierático",
      "Copta",
      "Cuneiforme"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rosetta_Stone"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rosetta_Stone",
        "situacao": "ok",
        "texto": "The Rosetta Stone is a stele of granodiorite inscribed with three versions of a decree issued in 196 BC during the Ptolemaic dynasty of Egypt, on behalf of King Ptolemy V Epiphanes. The top and middle texts are in Ancient Egyptian using hieroglyphic and Demotic scripts, respectively, while the bottom is in Ancient Greek. The decree has only minor differences across the three versions, making the R\n[…]\nThe Rosetta Stone is 112.3 cm (3 ft 8 in) high at its highest point, 75.7 cm (2 ft 5.8 in) wide, and 28.4 cm (11 in) thick. It weighs approximately 760 kilograms (1,680 lb). It bears three inscriptions: the top register in Ancient Egyptian hieroglyphs, the second in the Egyptian Demotic script, and the third in Ancient Greek.\n[…]\nThe hieroglyphic text is Middle Egyptian, a form of the Egyptian language that had been obsolete for centuries at the time the stone was inscribed, and specifically \"neo-Middle Egyptian\", a deliberately archaic imitation of the original Middle Egyptian language that was used in formal religious texts. The Demotic text more closely represents the stage of Egyptian that was spoken in Ptolemaic times.\n[…]\nHe also noticed that these characters resembled the equivalent ones in the demotic script, and went on to note as many as 80 similarities between the hieroglyphic and demotic texts on the stone, an important discovery because the two scripts were previously thought to be entirely different from one another. This led him to deduce correctly that the demotic script was only partly phonetic, also consisting of ideographic characters derived from hieroglyphs.\n[…]\nDuring the early 1850s, German Egyptologists Heinrich Brugsch and Max Uhlemann produced revised Latin translations based on the demotic and hieroglyphic texts. The first English translation followed in 1858, the work of three members of the Philomathean Society at the University of Pennsylvania."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pedra_de_Roseta",
        "situacao": "ok",
        "texto": "A Pedra de Roseta é um fragmento de uma estela de granodiorito erigida no Egito Ptolemaico, cujo texto foi crucial para a compreensão moderna dos hieróglifos egípcios e deu início a um novo ramo do conhecimento, a egiptologia. Frequentemente descrita como \"a pedra mais famosa do mundo\", sua inscrição guarda um decreto de um conselho de sacerdotes estabelecendo o culto ao faraó Ptolemeu V, no prime\n[…]\nA Pedra de Roseta tem atualmente 112,3 centímetros de altura em seu ponto mais alto, 75,7 centímetros de largura e 28,4 centímetros de espessura, e pesa aproximadamente 760 quilogramas. Sua superfície frontal é polida e traz três inscrições sucessivas: no topo um registro em hieróglifos egípcios, no centro um outro em egípcio demótico e, embaixo, um último registro em grego antigo.\n[…]\nUma segunda data é mencionada nos textos em grego e egípcio hieroglífico, que corresponde a 27 de novembro de 197 AEC, dia da coroação de Ptolemeu. A inscrição em egípcio demótico conflita com as datas em grego antigo e egípcio hieroglífico, enumerando dias consecutivos em março para o decreto e o aniversário. Embora os motivos para estas discrepâncias permaneçam incertos, há consenso de que o decreto data de 196 AEC e tinha como intenção restabelecer o domínio dos reis ptolemaicos sobre o Egito.\n[…]\nNa época da redescoberta da Pedra o diplomata e estudioso sueco Johan David Åkerblad trabalhava em uma escrita pouco conhecida, da qual alguns exemplos haviam sido encontrados recentemente no Egito, que passou a ser conhecida como demótico. Ele a chamou de \"copta cursivo\" porque estava convencido de que era usada para gravar alguma forma da língua copta, que já se sabia ser descendente direta do antigo egípcio, embora apresentasse poucas semelhanças com a escrita copta posterior.\n[…]\nSilvestre de Sacy acabou desistindo do trabalho no texto em demótico sobre a Pedra, mas ainda faria outra contribuição.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Esperanto",
      "descricao": "Língua planejada para a comunicação internacional, publicada em 1887."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Criado para ser fácil a muitos povos, o esperanto tirou a maior parte do seu vocabulário de qual grupo de línguas europeias?",
    "resposta": "Línguas românicas",
    "distratores": [
      "Línguas germânicas",
      "Línguas eslavas",
      "Línguas célticas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Esperanto"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Esperanto",
        "situacao": "ok",
        "texto": "Esperanto (; Esperanto: [espeˈranto]) is the world's most widely spoken constructed auxiliary language. Created by L. L. Zamenhof in 1887 as 'the International Language' (la Lingvo Internacia), it is intended to be a universal second language for international communication. Esperanto culture is grounded in the idea that people can interact on an equal footing across language barriers, without lin\n[…]\nEsperanto has been described as \"a language lexically predominantly Romanic, morphologically intensively agglutinative, and to a certain degree isolating in character\". Approximately 80% of Esperanto's vocabulary is derived from Romance languages, and the remainder primarily from Germanic, Greek and Slavic languages. New words are formed through extensive use of affixes and compounds.\n[…]\nEsperanto has been placed in many proposed political situations. The most popular of these is the Europe–Democracy–Esperanto, which aims to establish Esperanto as the official language of the European Union. In 2005, Swiss economist François Grin published a report at the request of the Haut conseil de l'éducation that found that the use of English as the lingua franca within the European Union costs billions annually and significantly benefits English-speaking countries financially.\n[…]\nThe report considered a scenario where Esperanto would be the lingua franca, and found that it would have many advantages, particularly economically speaking, as well as ideologically.\n[…]\nThough Esperanto itself has changed little since the publication of Fundamento de Esperanto (Foundation of Esperanto), a number of reform projects have been proposed over the years, starting with Zamenhof's proposals in 1894 and Ido in 1907. Several later constructed languages, such as Universal, Saussure, Romániço, Internasia, Esperanto sen Fleksio, and Mundolingvo, were all based on Esperanto.\n[…]\nEsperanto Bookshelf at Project Gutenberg"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Esperanto",
        "situacao": "ok",
        "texto": "O esperanto é a língua planejada mais falada no mundo (Esperantujo, 120 países). Ao contrário da maioria das outras línguas planejadas, o esperanto já saiu dos níveis de projeto (publicação de instruções) e semilíngua (uso em algumas poucas esferas da vida social).\n[…]\nComo uma língua construída, o esperanto não é relacionado genealogicamente a nenhuma língua étnica; pode ser descrito como uma língua de léxico predominantemente românico e de morfologia aglutinante. A fonologia, a gramática, o vocabulário e a semântica são baseados em línguas indo-europeias ocidentais.\n[…]\nOs fonemas são essencialmente eslavos, assim como muito da semântica, enquanto o vocabulário é derivado primordialmente de línguas românicas, com uma menor contribuição de línguas germânicas e algumas palavras de várias outras línguas (o dicionário etimológico de esperanto \"Konciza Etimologia Vortaro\", de André Cherpillod, faz referência a 110 línguas).\n[…]\nÉ provável que outras línguas planificadas também apresentem esse efeito no mesmo grau que o esperanto, mas devido ao maior número de falantes e melhor disponibilidade de material didático, a língua esperantista parece ser a mais recomendável para obter o efeito propedêutico.\n[…]\nA capital foi construída na Rússia, no local da atual Bielorrússia, que hoje faz parte da Polônia. Foi abandonada durante os anos de 1870 a 1880. Explicou os empréstimos nessa língua e registrou os próprios empréstimos nessa língua. Em julho de 1887, foram publicadas em Varsóvia as primeiras obras com a gramática do esperanto. O fundador foi mencionado nas primeiras obras como doutor Esperanto.\n[…]\n«LaEtaPrinco.org». - O pequeno príncipe, em esperanto e outras línguas.\n[…]\nEsperanto, a Língua da Fraternidade Programa semanal da Rádio Rio de Janeiro sobre o Esperanto.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Tok pisin",
      "descricao": "Língua crioula usada como língua franca em Papua-Nova Guiné, onde é uma das línguas oficiais."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O tok pisin, língua franca de Papua-Nova Guiné, tem o vocabulário formado principalmente a partir de qual idioma europeu?",
    "resposta": "Inglês",
    "distratores": [
      "Alemão",
      "Holandês",
      "Português"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tok_Pisin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tok_Pisin",
        "situacao": "ok",
        "texto": "Tok Pisin (English:  TOK PIH-sin,  tawk, -⁠zin; Tok Pisin: [tok pisin]) is an English creole language spoken throughout Papua New Guinea. It is one of the official languages of Papua New Guinea and the most widely used language in the country. In parts of the southern provinces of Western, Gulf, Central, Oro, and Milne Bay, the use of Tok Pisin has a shorter history and is less universal, especial\n[…]\nTok Pisin is slowly \"crowding out\" other languages of Papua New Guinea.\n[…]\nIn spite of its name, Tok Pisin is not a pidgin in the latter sense, because it has become a first language for many people (rather than simply a lingua franca to facilitate communication with speakers of other languages). As such, it is considered a creole in linguistic terminology.\n[…]\nThis English-based pidgin evolved into Tok Pisin in German New Guinea (where the German-based creole Unserdeutsch was also spoken), which became a widely used lingua franca between colonial authorities and the indigenous population. Tok Pisin and the closely related Bislama in Vanuatu and Pijin in the Solomon Islands, which developed in parallel, have traditionally been treated as varieties of a single Melanesian Pidgin English or \"Neo-Melanesian\" language.\n[…]\nThe flourishing of the mainly English-based Tok Pisin in German New Guinea (despite the language of the metropolitan power being German) contrasts with Hiri Motu, the lingua franca of Papua, which derived not from English but from Motu, the language of the indigenous people of the Port Moresby area.\n[…]\npikinini = \"child\", ultimately from Portuguese-influenced Lingua franca; cf. English pickaninny\n[…]\nsave = \"know\", \"to do habitually\" (ultimately from Portuguese-influenced Lingua franca, cf. English savvy)\n[…]\nTok Pisin Translation, Resources, and Discussion Offers Tok Pisin translator, vocabulary, and discussion groups.\n[…]\nTok Pisin background, vocabulary, sounds, and grammar, by Jeff Siegel"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_tok_pisin",
        "situacao": "ok",
        "texto": "O Tok Pisin é uma língua crioula com vocabulário baseado na língua inglesa. É falada por cerca de quatro milhões de pessoas na Papua-Nova Guiné, sendo quinhentas mil como nativa. A palavra “tok pisin” vem de tok, que significa “conversação” (do inglês talk), e pisin, que significa pidgin (da forma chinesa do inglês business).\n[…]\nApesar do nome sugestivo, o Tok Pisin não é um crioulo em si, mas uma das línguas oficiais de Papua-Nova Guiné, juntamente com o inglês e o Hiri Motu, além de ser a mais falada no país. É usada nos meios de comunicação e no governo, embora menos que o inglês. Certas escolas básicas ensinam através de tal idioma.\n[…]\nNa maioria dos verbos a transitividade é marcada pelo sufixo im. Os tempos são indicados por palavras separadas: bai (futuro), bin (passado, vem do inglês been), stap (ação presente, vem de stop), i (ação continuada), pinis (ação completa, vem de finish). Já os substantivos não variam em número, enquanto que os adjetivos têm o sufixo pela e podem ser usados como advérbios.\n[…]\nPela também indica o plural em pronomes, que variam em pessoa e número, podendo apresentar, dependendo da região, as formas: dupla, tripla e plural. Por isso, a reduplicação é muito usada no Tok Pisin como derivação ou simplesmente em palavras que assim existem.\n[…]\nAssim como na língua Bislama são muito usadas duas preposições: bilong para “de” (posse) ou “para” (objetivo) e long para todos demais significados.\n[…]\nPai Nosso em tok pisin\n[…]\nNOVAGA, Celeste Garcia Ribeiro. Relexificação fonológica no Tok Pisin. 2013. 126 p., il. Tese (Doutorado em Linguística)— Universidade de Brasília, Brasília, 2013.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Linear B",
      "descricao": "Escrita silábica da Idade do Bronze usada em Creta e na Grécia micênica."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1952, que arquiteto inglês, apaixonado por línguas antigas, decifrou a escrita Linear B?",
    "resposta": "Michael Ventris",
    "distratores": [
      "Arthur Evans",
      "John Chadwick",
      "Carl Blegen"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Michael_Ventris",
      "https://en.wikipedia.org/wiki/Linear_B"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Michael_Ventris",
        "situacao": "ok",
        "texto": "Michael George Francis Ventris (; 12 July 1922 – 6 September 1956) was an English architect, classicist and philologist who deciphered Linear B, the ancient Mycenaean Greek script. A student of languages, Ventris had pursued decipherment as a personal vocation since his adolescence. After creating a new field of study, Ventris died in a car crash a few weeks before the publication of Documents in \n[…]\nVentris continued with his efforts on Linear B, discovering in 1952 that it was an archaic form of Greek.\n[…]\nVentris, Michael G. F. (October–December 1940). \"Introducing the Minoan Language\". American Journal of Archaeology. XLIV/4.{{cite journal}}:  CS1 maint: year (link)\n[…]\nVentris, Michael (1950). The languages of the Minoan and Mycenaean civilizations: mid-century report. London: Michael Ventris.\n[…]\nVentris, Michael The Journal of Hellenic Studies Volume LXXVI 1956 p. 146 Review of two Russian language works by V. I. Georgiev.\n[…]\nPalaima, Thomas G. (2000). Unlocking the Secrets of Ancient Writing: The Parallel Lives of Michael Ventris and Linda Schele and the Decipherment of Mycenaean and Mayan Writing: Catalogue of an Exhibition in Conjunction with the Eleventh International Mycenological Colloquium (PDF). Austin: University of Texas at Austin. ISBN 0-9649410-4-X.\n[…]\nRobinson, Andrew (2002). The Man Who Deciphered Linear B: The Story of Michael Ventris. New York: Thames & Hudson Ltd. ISBN 0-500-51077-6.\n[…]\nBBC (2005). Michael Ventris Videos. OVGuide. Archived from the original on 17 October 2013. Retrieved 12 April 2012.\n[…]\n\"Michael Ventris Papers\" (PDF). Program in Aegean Scripts and Prehistory (PASP), Classics Department, University of Texas at Austin. Archived from the original (PDF) on 20 October 2012. Retrieved 13 April 2012.\n[…]\nEngels, Tom. \"Michael Ventris: Decipherer of Linear B\". 66South.com. Archived from the original on 28 June 2013. Retrieved 13 April 2012."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Linear_B",
        "situacao": "ok",
        "texto": "Linear B is a syllabic script that was used for writing in Mycenaean Greek, the earliest attested form of the Greek language. The script predates the Greek alphabet by several centuries, the earliest known examples dating to around 1450 BC. It is adapted from the earlier Linear A, an undeciphered script, perhaps used for writing the Minoan language, as is the later Cypriot syllabary, which also re\n[…]\nLinear B was deciphered in 1952 by English architect and self-taught linguist Michael Ventris based on the research of the American classicist Alice Kober. It is the only Bronze Age Aegean script to have been deciphered, with Linear A, Cypro-Minoan, and Cretan hieroglyphic remaining unreadable.\n[…]\nWith the decipherment of Linear B by Michael Ventris in 1952, serious questions about Evans's date began to be considered. Most notably, Blegen said that the inscribed stirrup jars, which are oil flasks with stirrup-shaped handles imported from Crete around 1200, were of the same type as those dated by Evans to the destruction of 1400.\n[…]\nBennett, Jr. added more transcriptions. The second volume came out in 1952 with Evans cited as author and Myres as editor, just before the discovery that Linear B writes an early form of Greek. An impatient Ventris and Chadwick declared: \"Two generations of scholars had been cheated of the opportunity to work constructively on the problem.\"\n[…]\nLike Kober, Bennett was also an early proponent of the idea that Linear A and B represented different languages. His book The Pylos Tablets became a crucial resource for Michael Ventris, who later described it as \"a wonderful piece of work\".\n[…]\nLinear B Explorer\n[…]\nPalaima, Thomas G.; Pope, Elizabeth I.; Reilly III, F. Kent (2000). The Parallel Lives of Michael Ventris and Linda Schele and the Decipherment of Mycenaean and Mayan Writing (PDF). Austin: University of Texas. ISBN 978-0-9649410-4-5. Retrieved 13 January 2009."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Michael_Ventris",
        "situacao": "ok",
        "texto": "Michael George Francis Ventris ([ˈvɛntrɪs]; 12 de julho de 1922 – 6 de setembro de 1956) foi um arquiteto, classicista e filólogo inglês que decifrou o Linear B, a antiga escrita do grego micênico. Estudioso de línguas, Ventris dedicou-se à decifração como uma vocação pessoal desde a adolescência. Após criar um novo campo de estudo, Ventris morreu em um acidente automobilístico algumas semanas ant\n[…]\nAo comparar as tabuletas em Linear B descobertas no continente grego e notar que certos grupos de símbolos apareciam apenas nos textos cretenses, Ventris teve a intuição inspirada de que se tratava de nomes de lugares na ilha. Isso provou estar correto. Armado com os símbolos que pôde decifrar a partir disso, Ventris logo desvendou grande parte do texto e determinou que a língua subjacente do Linear B, uma escrita silábica, era de fato o grego.\n[…]\nVentris recebeu a OBE em 1955 por \"serviços à paleografia micênica\".\n[…]\nVentris, Michael The Journal of Hellenic Studies Volume LXXVI 1956 p. 146 Review of two Russian language works by V. I. Georgiev.\n[…]\nPalaima, Thomas G. (2000). Unlocking the Secrets of Ancient Writing: The Parallel Lives of Michael Ventris and Linda Schele and the Decipherment of Mycenaean and Mayan Writing: Catalogue of an Exhibition in Conjunction with the Eleventh International Mycenological Colloquium (PDF). Austin: University of Texas at Austin. ISBN 0-9649410-4-X\n[…]\nRobinson, Andrew (2002). The Man Who Deciphered Linear B: The Story of Michael Ventris. New York: Thames & Hudson Ltd. ISBN 0-500-51077-6\n[…]\nBBC (2005). Michael Ventris Videos. OVGuide. Cópia arquivada em 17 de outubro de 2013\n[…]\n«Michael Ventris Papers» (PDF). Program in Aegean Scripts and Prehistory (PASP), Classics Department, University of Texas at Austin. Cópia arquivada (PDF) em 20 de outubro de 2012\n[…]\nEngels, Tom. «Michael Ventris: Decipherer of Linear B». 66South.com. Cópia arquivada em 28 de junho de 2013",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Língua sérvia",
      "descricao": "Língua eslava do sul, oficial na Sérvia, escrita tanto em cirílico quanto em alfabeto latino."
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Na Sérvia, a mesma língua é escrita com dois alfabetos diferentes, e ambos aparecem no dia a dia. Quais são eles?",
    "resposta": "Cirílico e latino",
    "distratores": [
      "Grego e cirílico",
      "Latino e glagolítico",
      "Cirílico e árabe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Serbian_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Serbian_language",
        "situacao": "ok",
        "texto": "Serbian is the standard variety of the Serbo-Croatian language mainly used by Serbs. It is the national official language and literary standard of Serbia, one of the official languages in Bosnia-Herzegovina and Kosovo, and a recognized minority language in numerous countries.\n[…]\nSerbian language uses both Cyrillic (ћирилица, ćirilica) and Latin script (латиница, latinica). Serbian is a rare language with active digraphia, a situation where all literate members of a society have two interchangeable writing systems available to them.\n[…]\nThe sort order of the ćirilica (ћирилица) alphabet:"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%ADngua_s%C3%A9rvia",
        "situacao": "ok",
        "texto": "A língua sérvia (српски језик, transl. srpski jezik) é a variedade padronizada do servo-croata usada principalmente pelos sérvios. É a língua oficial da Sérvia, do Kosovo e uma das três línguas oficiais da Bósnia e Herzegovina. Além disso, é uma língua minoritária reconhecida em Montenegro, onde é falada por uma parte considerável da população, bem como na Croácia, Macedônia do Norte, Romênia, Hun\n[…]\nSérvia: 6,540,699 (língua oficial)\n[…]\nRomênia: 22,518 (língua minoritária reconhecida)\n[…]\nO sérvio é o idioma oficial da Sérvia, oficial entre as 3 línguas na Bósnia e Herzegovina, e do Kosovo.\n[…]\nOs principais dialetos do sérvio são o oriental stokavsk, e o ocidental torlak. A forma literária baseia-se no dialeto oriental stokavsk.\n[…]\nO idioma sérvio tem dois alfabetos, o cirílico e o latino. Ambos têm 30 letras e uma letra de um alfabeto tem um correspondente no outro (apesar de a ordem das letras serem diferentes de um alfabeto para o outro).\n[…]\nA letra R serve de vogal em várias palavras, como em: srpski (sérvio), Srbija (Sérvia), prst (dedo) e prljav (sujo). Há até um trava-línguas onde várias palavras que contêm o R vocálico são encontradas: Na vrh brda vrba mrda (\"no topo do morro o salgueiro está se movendo\").\n[…]\nNo sérvio existem sete casos gramaticais: nominativo, genitivo, dativo, acusativo, vocativo, instrumental e locativo.Existem três gêneros gramaticais: masculino, feminino e neutro. Há dois números gramaticais: singular e plural.\n[…]\nSérvio: српски, srpski\n[…]\nO meu amigo sérvio: мој српски друг, moj srpski drug\n[…]\nA minha amiga sérvia: моја српска другарица, moja srpska drugaritsa\n[…]\nLíngua pluricêntrica\n[…]\nInformação sobre a Sérvia\n[…]\nPortal do Governo Sérvio\n[…]\nDicionário inglês-sérvio\n[…]\nAssociação cultural sérvia em Espanha Entidade dedicada a promover e fomentar o intercâmbio cultural entre os Balcãs e a Península Ibérica\n[…]\nDicionário Português Sérvio\n[…]\nTransliteração do sérvio",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Língua navajo",
      "descricao": "Língua indígena atabascana do povo navajo, do sudoeste dos Estados Unidos, usada como código militar na Segunda Guerra Mundial."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "Na Segunda Guerra, fuzileiros americanos usaram como código contra os japoneses uma língua indígena do sudoeste dos Estados Unidos. Qual?",
    "resposta": "Navajo",
    "distratores": [
      "Quíchua",
      "Maia",
      "Guarani"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Code_talker",
      "https://en.wikipedia.org/wiki/Navajo_language"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Code_talker",
        "situacao": "ok",
        "texto": "A code talker was a person employed by the military during wartime to use a little-known language as a means of secret communication. The term is most often used for United States service members during the World Wars who used their knowledge of Native American languages as a basis to transmit coded messages.\n[…]\nThe Code Talkers Recognition Act of 2008 (Public Law 110–420) was signed into law by President George W. Bush on November 15, 2008. The Act recognized every Native American code talker who served in the United States military during WWI or WWII (except the already-awarded Navajo) with a Congressional Gold Medal. Approximately 50 tribes were recognized. The act was designed to be distinct for each tribe, with silver duplicates awarded to the individual code talkers or their next-of-kin.\n[…]\nThey were there to \"pay tribute to the contributions of the young Native Americans recruited by the United States military to create top-secret coded messages used to communicate during World War II battles.\" The executive director of the National Congress of American Indians, Jacqueline Pata, noted that Native Americans have \"a very high level of participation in the military and veterans' service.\" A statement by a Navajo Nation Council Delegate and comments by Pata and Begaye, among others, objected to Trump's remarks during the event, including his use \"once again ...\n[…]\nNative Americans and World War II\n[…]\nWindtalkers, a 2002 American war film on Navajo radio operators in World War II\n[…]\nAaseng, Nathan. Navajo Code Talkers: America's Secret Weapon in World War II. New York: Walker & Company, 1992. ISBN 0802776272 OCLC 672012184\n[…]\nDurrett, Deanne. Unsung Heroes of World War II: The Story of the Navajo Code Talkers. Library of American Indian History, Facts on File, Inc., 1998. ISBN 0816036039 OCLC 38067688"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Navajo_language",
        "situacao": "ok",
        "texto": "Navajo or Navaho ( NAV-ə-hoh, NAH-və-; Diné bizaad [tìnépìz̥ɑ̀ːt]  or Naabeehó bizaad [nɑ̀ːpèːhópìz̥ɑ̀ːt]) is a Southern Athabaskan language of the Na-Dené family, through which it is related to languages spoken across the western areas of North America. Navajo is spoken primarily in the Southwestern United States, especially in the Navajo Nation.\n[…]\nBy the 1960s, Indigenous languages of the United States had been declining in use for some time. Native American language use began to decline more quickly in this decade as paved roads were built and English-language radio was broadcast to tribal areas. Navajo was no exception, although its large speaker pool—larger than that of any other Native language in the United States—gave it more staying power than most.\n[…]\nGoossen, Irvy W. (1995). Diné bizaad: Speak, read, write Navajo. Flagstaff, AZ: Salina Bookshelf. ISBN 0-9644189-1-6.\n[…]\nGoossen, Irvy W. (1997). Diné bizaad: Sprechen, Lesen und Schreiben Sie Navajo. Translated by Loder, P. B. Flagstaff, AZ: Salina Bookshelf.\n[…]\nPlatero, Paul R. (1986). Diné bizaad bee naadzo: A conversational Navajo text for secondary schools, colleges and adults. Farmington, NM: Navajo Preparatory School.\n[…]\nPlatero, Paul R.; Legah, Lorene; Platero, Linda S. (1985). Diné bizaad bee naʼadzo: A Navajo language literacy and grammar text. Farmington, NM: Navajo Language Institute.\n[…]\nWitherspoon, Gary (1985). Diné Bizaad Bóhooʼaah for secondary schools, colleges, and adults. Farmington, NM: Navajo Language Institute.\n[…]\nWitherspoon, Gary (1986). Diné Bizaad Bóhooʼaah I: A conversational Navajo text for secondary schools, colleges and adults. Farmington, NM: Navajo Language Institute.\n[…]\nYazzie, Evangeline Parsons; Speas, Margaret (2008). Diné Bizaad Bínáhoo'aah: Rediscovering the Navajo Language. Flagstaff, AZ: Salina Bookshelf. ISBN 978-1-893354-73-9."
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.94 — 2026-11-02**
>
> Este documento define **o que é uma boa pergunta** no Mestre2 e **como o banco de perguntas é organizado e produzido**. Vale para qualquer pessoa ou modelo que crie, revise ou processe perguntas.
>
> Ele tem duas partes:
> - **Parte I — Regras de conteúdo (§1 a §9):** o que uma pergunta deve ser. É a parte que o gerador e o crítico automáticos recebem.
> - **Parte II — Organização e processo (§10 a §18):** esquemas, fluxo de produção, decisões, pendências, o jogo, o app e a programação até 10 000 e até 20 000 perguntas. É a referência de quem mantém o projeto.
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
- no máximo **3 perguntas por âncora** em cada lote (2 até 2026-10-27), nunca com o mesmo ângulo;
- no máximo **2 perguntas com o mesmo ângulo** para uma mesma âncora, no banco inteiro;
- no máximo **8 perguntas por âncora** no banco inteiro (3 até 2026-10-23, 5 até 2026-10-27), somando texto e figura, e no máximo **3 com figura** (2 até 2026-10-27). As exclusivas de uma coleção têm conta à parte (§6, "Coleções");
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas. Essas perguntas têm um teto no jogo original (§9).
- **Metade aberta, metade múltipla escolha** (desde 2026-10-27). O jogo original busca as duas formas na mesma proporção, em cada tema, para que um modo só de múltipla escolha tenha perguntas de todos os temas. Vale para texto e figura. Cada lote recebe a quantidade de `multipla` que aproxima o seu tema dessa meta (§17), e a pergunta segue a quantidade pedida, salvo quando a outra forma for claramente melhor.

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
- no máximo **três perguntas com figura por âncora**, de famílias diferentes e com imagens diferentes (a obra inteira e um detalhe, a fachada e uma vista aérea).

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
- **Exclusiva** (campo `exclusiva`): a pergunta sai **só no modo da coleção**, nunca no jogo original (Master e Linear).
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
- **Saturação:** o áudio conta no limite de 8 perguntas por âncora, e cada âncora tem no máximo 1 pergunta com áudio.
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
- **Respostas que são um ano específico** ("1969", "800 a.C."), somando abertas e múltiplas: no máximo **9%** das perguntas do lote, e no máximo **uma** num lote de figuras, que tem 12 itens (desde 2026-10-30, só no jogo original). Para pedir a época, prefira o século, a década ou a ordem entre dois fatos. O registro descarta o que passar do teto; as perguntas que já estavam no banco ficam.
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
