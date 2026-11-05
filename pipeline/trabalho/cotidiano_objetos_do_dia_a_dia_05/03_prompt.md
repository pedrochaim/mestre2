Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Objetos do Dia a Dia** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Gillette",
      "descricao": "Marca americana de lâminas e aparelhos de barbear fundada por King Camp Gillette em 1901."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A marca que deu origem à palavra gilete leva o sobrenome do fundador, cujo primeiro nome parecia um título de nobreza. Qual era esse nome?",
    "resposta": "King",
    "distratores": [
      "Duke",
      "Prince",
      "Lord"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/King_C._Gillette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/King_C._Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (January 5, 1855 – July 9, 1932) was an American businessman who invented a bestselling safety razor and was the founder of the Gillette razor company. Gillette's innovation was the thin, inexpensive, disposable blade of stamped steel. Gillette is often erroneously credited with inventing the so-called razor-and-blades business model, in which razors are sold cheaply to increase\n[…]\nGillette married Alanta \"Lantie\" Ella Gaines (1868–1951) in 1890. They had one child, King Gaines Gillette (1891–1955).\n[…]\nKing Gillette purchased property for a large ranch in the Santa Monica Mountains near Calabasas in Southern California in 1926. The master plan and new buildings on the ranch were designed and built for Gillette in the late 1920s by renowned architect Wallace Neff. The architectural style was Spanish Colonial Revival. After his death, his wife sold the home to Clarence Brown, an MGM film director who held A-List Hollywood parties at the ranch.\n[…]\nAfter the university moved to a purpose-built campus, the King Gillette ranch was collaboratively purchased for $35 million by the Mountains Recreation and Conservation Authority, National Park Service, Santa Monica Mountains Conservancy and California State Parks, who then made it available for public use. Those agencies are also funding an $8.4 million visitor center on the property.\n[…]\nOn June 30, 2007, the 588-acre (2.38 km2) King Gillette Ranch opened to the public as a park. The ranch is situated adjacent to Malibu Creek State Park in the Santa Monica Mountains, at 26800 West Mulholland Highway in Calabasas, California.\n[…]\nAdams, Russell B. Jr. (1978). King C. Gillette: The Man and His Wonderful Shaving Device. Little, Brown & Co. ISBN 0-316-00937-7.\n[…]\nDowling, Tim (2001). Inventor of the Disposable Culture: King Camp Gillette 1855–1932. Short Books. ISBN 0-571-20810-X.\n[…]\nKing Gillette Ranch Park\n[…]\nKing C. Gillette at Find a Grave"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/King_Camp_Gillette",
        "situacao": "ok",
        "texto": "King Camp Gillette (Fond du Lac, 5 de janeiro 1855 — Los Angeles, 9 de julho de 1932) foi um inventor estadunidense, conhecido pela lâmina de barbear que leva o seu nome. Ele inventou uma versão mais vendida do aparelho de barbear. Vários modelos já existiam antes do projeto da Gillette. A inovação da Gillette foi a lâmina fina, barata e descartável de aço estampado.\n[…]\nKing Camp Gillette nasceu em 5 de janeiro de 1855, em Fond du Lac, Wisconsin, e foi criado em Chicago, Illinois. Sua família sobreviveu ao Grande Incêndio de Chicago de 1871.\n[…]\nPara vender o produto, Gillette fundou a American Safety Razor Company em 28 de setembro de 1901 (mudando o nome da empresa para Gillette Safety Razor Company em julho de 1902). Gillette obteve um registro de marca (0 056 921) para seu retrato e assinatura na embalagem. A produção começou em 1903, quando ele vendeu um total de 51 máquinas de barbear e 168 lâminas.\n[…]\nAs vendas de navalhas atingiram 450 000 unidades e as vendas de lâminas ultrapassaram 70 milhões de unidades em 1915. Em 1917, quando os Estados Unidos entraram na Primeira Guerra Mundial, a empresa forneceu a todos os soldados americanos um jogo de navalha de campo, pago pelo governo. A Gillette vetou um plano para vender os direitos de patente na Europa, acreditando corretamente que a Europa acabaria por fornecer um mercado muito grande.\n[…]\nGillette e John Joyce, um colega diretor, lutaram pelo controle da empresa. Gillette acabou se vendendo para Joyce, mas seu nome permaneceu na marca. Na década de 1920, quando a patente expirou, a Gillette Safety Razor Company enfatizou a pesquisa para projetar modelos cada vez mais aprimorados, percebendo que mesmo uma ligeira melhoria induziria os homens a adotá-la.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Guarda-chuva",
      "descricao": "Cobertura dobrável sustentada por varetas e um cabo, usada para proteger da chuva ou do sol."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em inglês, o guarda-chuva se chama umbrella, palavra de origem latina. A que ideia essa raiz latina se refere?",
    "resposta": "Sombra",
    "distratores": [
      "Chuva",
      "Cobertura",
      "Pequena casa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Umbrella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Umbrella",
        "situacao": "ok",
        "texto": "An umbrella (parasol or rarely parapluie) is a folding canopy supported by wooden or metal ribs that is mounted on a wooden, metal, or plastic pole. It is usually designed to protect a person against sun or rain. Initially, (in the early 1200s) they were used in warmer countries for shade from the sun, but later evolved to also be used for protection from rain. Etymologically, the term umbrella is\n[…]\nFrom Greece it is probable that the use of the umbrella passed to Rome, where it seems to have been usually used by women, while it was the custom even for effeminate men to defend themselves from the heat by means of the Umbraculum, formed of skin or leather, and capable of being lowered at will. There are frequent references to the umbrella in the Roman Classics, and it appears that it was, not unlikely, a post of honour among maid-servants to bear it over their mistresses.\n[…]\nAllusions to it are tolerably frequent in the poets. (Ovid Fast. lib. ii., 1. 31 I.; Martial, lib. xi., Ch. 73.; lib. xiv, Ch. 28, 130; Ovid Ars. Am., ii., 209). From such mentions the umbrella seems to have been employed as a defense from sun, but references to its use as a protection against rain, while rare, also exist (Juvenal, ix., 50.).\n[…]\nIn Thomas Coryat's Crudities, published in 1611, about a century and a half prior to the general introduction of the umbrella into England, is a reference to a custom of riders in Italy using umbrellas:\n[…]\nThe song \"Umbrella\" by Rihanna references umbrellas extensively, with limited references to rain.\n[…]\nThe largest convertible umbrellas built until now were designed by Mahmoud Bodo Rasch and his team at SL-Rasch to provide shelter from sun and rain for the great mosques in Saudi Arabia.\n[…]\nCocktail umbrella\n[…]\nOil-paper umbrella\n[…]\nRoyal Nine-Tiered Umbrella\n[…]\nThe Umbrella Man (song)\n[…]\nUmbrella hat\n[…]\nUmbrella marketing\n[…]\nUmbrella stand\n[…]\nUmbrella (song)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guarda-chuva",
        "situacao": "ok",
        "texto": "Guarda-chuva, ou também chapéu de chuva, expressão alternativa usada em Portugal, ou  ainda de sombrinha, é um objeto usado para proteção contra sol e chuvas que consiste em um aramado suportado por uma haste, que sustenta uma tela feita geralmente de material plástico.\n[…]\nNa Mesopotâmia, região do atual Iraque, há 3400 anos já existiam artefatos destinados a proteger a cabeça dos reis — contra o sol, não contra a chuva, uma raridade naquele lugar. Assim como os abanos, eram feitos de folhas de palmeiras, plumas e papiro. No Egito, adquiriram significado religioso e na Grécia e em Roma eram tidos como artigo exclusivamente feminino.\n[…]\nSó no século XVIII a obstinação do comerciante inglês Jonas Hanway, um apaixonado por guarda-chuvas (versão inglesa do guarda-sol tropical), conseguiria torná-los dignos também de cavalheiros. Embora ridicularizado em vida, após a sua morte, em 1786, os ingleses aceitaram sair à rua munidos do acessório nos sempre frequentes dias de chuvas do país.\n[…]\nOs guarda-chuvas, ao contrário dos guarda-sóis, tendem a ser fabricados com materiais leves a fim de que possam ser facilmente transportados, mesmo quando abertos. O tecido protetor é atualmente feito de diversos materiais impermeáveis.\n[…]\nGuarda-sol\n[…]\nTermo guarda-chuva\n[…]\nGuarda-chuvinha\n[…]\nMedia relacionados com Guarda-chuva no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Guarda-chuva",
      "descricao": "Cobertura dobrável sustentada por varetas e um cabo, usada para proteger da chuva ou do sol."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Na Europa, antes das varetas de aço de meados do século dezenove, as varetas dos melhores guarda-chuvas eram feitas de quê?",
    "resposta": "Barbatana de baleia",
    "distratores": [
      "Chifre de boi",
      "Ferro fundido",
      "Junco trançado"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Umbrella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Umbrella",
        "situacao": "ok",
        "texto": "An umbrella (parasol or rarely parapluie) is a folding canopy supported by wooden or metal ribs that is mounted on a wooden, metal, or plastic pole. It is usually designed to protect a person against sun or rain. Initially, (in the early 1200s) they were used in warmer countries for shade from the sun, but later evolved to also be used for protection from rain. Etymologically, the term umbrella is"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Guarda-chuva",
        "situacao": "ok",
        "texto": "Guarda-chuva, ou também chapéu de chuva, expressão alternativa usada em Portugal, ou  ainda de sombrinha, é um objeto usado para proteção contra sol e chuvas que consiste em um aramado suportado por uma haste, que sustenta uma tela feita geralmente de material plástico.\n[…]\nNa Mesopotâmia, região do atual Iraque, há 3400 anos já existiam artefatos destinados a proteger a cabeça dos reis — contra o sol, não contra a chuva, uma raridade naquele lugar. Assim como os abanos, eram feitos de folhas de palmeiras, plumas e papiro. No Egito, adquiriram significado religioso e na Grécia e em Roma eram tidos como artigo exclusivamente feminino.\n[…]\nSó no século XVIII a obstinação do comerciante inglês Jonas Hanway, um apaixonado por guarda-chuvas (versão inglesa do guarda-sol tropical), conseguiria torná-los dignos também de cavalheiros. Embora ridicularizado em vida, após a sua morte, em 1786, os ingleses aceitaram sair à rua munidos do acessório nos sempre frequentes dias de chuvas do país.\n[…]\nOs guarda-chuvas, ao contrário dos guarda-sóis, tendem a ser fabricados com materiais leves a fim de que possam ser facilmente transportados, mesmo quando abertos. O tecido protetor é atualmente feito de diversos materiais impermeáveis.\n[…]\nGuarda-sol\n[…]\nTermo guarda-chuva\n[…]\nGuarda-chuvinha\n[…]\nMedia relacionados com Guarda-chuva no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Teclado QWERTY",
      "descricao": "Disposição de letras dos teclados criada para as máquinas de escrever de Christopher Sholes, no século dezenove."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O teclado usado em computadores do mundo todo é chamado de QWERTY. De onde vem esse nome?",
    "resposta": "Primeiras letras da fileira superior",
    "distratores": [
      "Sigla do inventor",
      "Nome da fábrica",
      "Código do modelo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/QWERTY"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/QWERTY",
        "situacao": "ok",
        "texto": "QWERTY ( KWUR-tee) is a keyboard layout for Latin-script alphabets; the name comes from the order of the first six keys on the top letter row of the keyboard: QWERTY. The design evolved for the quick typing of English on typewriters.\n[…]\nThe QWERTY design is based on a layout included on the Sholes and Glidden typewriter sold by E. Remington and Sons from 1874. The layout became popular with the success of the Remington No. 2 of 1878 and remains in widespread use as a de facto standard on computers, as of 2026. Two prominent alternatives, Dvorak and Colemak, have been developed. In Europe, two types of modified layouts, QWERTZ and AZERTY, are used predominantly for German and French, respectively.\n[…]\nThe first computer terminals such as the Teletype were typewriters that could produce and be controlled by computer codes. These used the QWERTY layouts but added keys such as escape Esc, added ASCII punctuation like less-than and greater-than signs, and often moved the shift combinations for punctuation to simplify the electronics. Later keyboards copied punctuation arrangements from the IBM Selectric and other typewriters.\n[…]\nA half QWERTY keyboard is a combination of an alpha-numeric keypad and a QWERTY keypad, designed for mobile phones. In a half QWERTY keyboard, two characters share the same key, which reduces the number of keys and increases the surface area of each key, useful for mobile phones that have little space for keys. It means that 'Q' and 'W' share the same key and the user must press the key once to type 'Q' and twice to type 'W'.\n[…]\nArticle on QWERTY and Path Dependence from EH.NET's Encyclopedia\n[…]\nQWERTY Keyboard History\n[…]\nQWERTY Keyboard in Mobiles\n[…]\nAndroid phones with QWERTY keyboards"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/QWERTY",
        "situacao": "ok",
        "texto": "Em tecnologia, QWERTY é um layout de teclado para o alfabeto latino utilizado em máquinas de escrever, computadores e smartphones. O nome vem da sequência de seis letras presente na primeira linha do teclado (QWERTY).\n[…]\nNesse layout, a ordem das letras no teclado é apenas uma cópia do padrão da máquina de escrever, criada e patenteada pelo editor de jornais americano Christopher Sholes.\n[…]\nO formato adotado tinha o objetivo de organizar as teclas separando os pares de letras mais usados na língua inglesa para diminuir a quantidade de possíveis travamentos das teclas da máquina de escrever mecânica. Scholes aperfeiçoou a ideia de James Densmore, seu parceiro comercial, e criou o teclado QWERTY, nome dado devido à disposição das primeiras seis teclas.\n[…]\nO primeiro modelo construído por Sholes usava um teclado semelhante a um piano com duas fileiras de caracteres organizados em ordem alfabética, conforme mostrado abaixo:- 3 5 7 9 N O P Q R S T U V W X Y Z\n[…]\nEm novembro de 1868, ele mudou a disposição da segunda metade do alfabeto, de N a Z, da direita para a esquerda Em abril de 1870, ele chegou a um teclado de quatro fileiras de letras maiúsculas que se aproximava do padrão QWERTY moderno, movendo seis letras vogais, A, E, I, O, U e Y, para a fileira superior da seguinte forma:2 3 4 5 6 7 8 9 -\n[…]\nO layout QWERTY se tornou popular com o sucesso da Remington No. 2 de 1878, a primeira máquina de escrever a incluir letras maiúsculas e minúsculas, usando a tecla Shift.\n[…]\nO teclado \"Ideal\" da antiga Blickensderfer também não era QWERTY, mas tinha a sequência \"DHIATENSOR\" na linha inicial, sendo que essas 10 letras eram capazes de compor 70% das palavras do idioma inglês.\n[…]\nThe Sholes (QWERTY) Keyboard",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Dias da semana em português",
      "descricao": "Nomes dos dias da semana na língua portuguesa, numerados como feiras, de segunda a sexta, em vez de homenagear astros ou deuses."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em segunda-feira e terça-feira, a palavra feira vem do latim feria. O que ela significava?",
    "resposta": "Dia de festa",
    "distratores": [
      "Mercado",
      "Dia de trabalho",
      "Semana"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
      "https://pt.wikipedia.org/wiki/Semana"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
        "situacao": "ok",
        "texto": "In a vast number of languages, the names given to the seven days of the week are derived from the names of the seven classical planets which were in turn named after contemporary Hellenistic deities. This system was introduced by the Sumerians and later adopted by the Babylonians from whom the Roman Empire adopted the system during late antiquity.\n[…]\nExcept for in Portuguese and Mirandese, the Romance languages preserved the Latin names, except for the names of Sunday, which was replaced by [dies] Dominicus (Dominica), that is, \"the Lord's Day\", and of Saturday, which was named for the Jewish Sabbath. Mirandese and Portuguese use numbered weekdays, but retain sábado and demingo/domingo for weekends. Meanwhile, Galician occasionally uses them alongside the traditional Latin-derived names, albeit to a lesser extent (see below).\n[…]\nSaturday: named after the Roman god Saturn associated with the Titan Cronus, father of Zeus and many Olympians. Its original Anglo-Saxon rendering was Sæturnesdæg (pronounced [ˈsæturnezdæj]). In Latin, it was diēs Sāturnī, \"Day of Saturn\". The Nordic laugardagur, leygardagur, laurdag, etc. deviate significantly as they have no reference to either the Norse or the Roman pantheon; they derive from Old Nordic laugardagr, literally \"washing-day\".\n[…]\nSaint Martin of Dumio (c. 520–580), archbishop of Braga, decided not to call days by pagan gods and to use ecclesiastic terminology to designate them. While the custom of numbering the days of the week was mostly prevalent in the Eastern Church, Portuguese and Mirandese, due to Martin's influence, are the only Romance languages in which the names of the days come from numbers rather than planetary names.\n[…]\nFeria"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Semana",
        "situacao": "ok",
        "texto": "A semana é um período correspondente a um grupo de sete dias que é o tempo de duração aproximado de uma fase lunar (¼ de ciclo lunar). Porém, a origem da expressão é mais recente e vem do latim septimana, que significava sete manhãs. Uma semana tem assim uma duração de 168 horas.\n[…]\nAs expressões segunda-feira, terça-feira, quarta-feira, quinta-feira e sexta-feira derivam de secunda feria, tertia feria, quarta feria, quinta feria e sexta feria do latim litúrgico, que representavam o segundo, terceiro, quarto, quinto e sexto dia seguintes ao Sabbatum (Dia de Descanso), no qual os Judeus e Cristãos faziam suas orações de fé e descanso no sábado, e a partir do ano 325 no Primeiro Concílio de Niceia, o domingo seria confirmado como dia de descanso cristão, e a guarda do sábado abolida no Concílio de Laodiceia, para distinguir-se dos judeus.\n[…]\nA Igreja católica combateu os nomes pagãos, mas a campanha só vingou no continente europeu em Portugal e na Galiza. Latinas feriae são \"dias de repouso\", \"dias de festa\", \"férias\" ou \"feriados\" e, segundo uns, incluem “dias de mercado” (nundinae). A Igreja santificou os dias da semana. Depois disto o primeiro dia de fé e de mercado receberia o nome de “dia do Senhor” (Dominicus dies ou Dominica dies). Por influência judaica, o sétimo se denominou “dia do sabá” (sabbatum).\n[…]\nFim de semana\n[…]\nDias da semana\n[…]\nUm período de oito dias, iniciando e terminando num Domingo ou começando em qualquer dia de festa e terminando no mesmo dia da semana seguinte (semana de 7 dias), é chamado de uma oitava. Por séculos essa foi uma característica muito importante do calendário litúrgico, em especial para a Igreja Católica, o qual ainda é observado, embora a quantidade dessas oitavas já tenha se reduzido muito.\n[…]\nasteazkena (\"semana-final\", 4ª feira)"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Dias da semana em português",
      "descricao": "Nomes dos dias da semana na língua portuguesa, numerados como feiras, de segunda a sexta, em vez de homenagear astros ou deuses."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "O costume português de numerar os dias da semana, evitando nomes de deuses pagãos, é atribuído a qual bispo do século seis?",
    "resposta": "Martinho de Dume (São Martinho de Braga)",
    "distratores": [
      "Santo Agostinho",
      "Isidoro de Sevilha",
      "São Bento"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Martinho_de_Dume",
      "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Martinho_de_Dume",
        "situacao": "ok",
        "texto": "Martinho de Braga ou Martinho de Dume (Panónia, c. 510/5 – Braga, 579/80), foi um bispo de Braga e de Dume considerado santo pela Igreja Católica e pela Igreja Ortodoxa. É conhecido como o \"Apóstolo dos Suevos\", por ser considerado o maior responsável pela sua conversão do arianismo ao catolicismo. Também é conhecido por nominar os dias da semana em língua galego-portuguesa.\n[…]\nEstabeleceu um mosteiro em Dume, uma aldeia das proximidades de Bracara Augusta, a partir do qual começou a irradiar a sua pregação. Estabeleceu a Diocese de Dume (caso único na história cristã — confinada ao referido Mosteiro de Dume a que presidia), da qual foi primeiro bispo, em 556. Depois, por vacatura da diocese bracarense, em 569, foi feito metropolita dessa região de Braga, então capital do Reino Suevo.\n[…]\nMartinho de Dume é também uma figura de capital importância para a história da cultura e língua portuguesas; de facto, considerando indigno de bons cristãos que se continuasse a chamar os dias da semana pelos nomes latinos pagãos de Lunae dies, Martis dies, Mercurii dies, Jovis dies, Veneris dies, Saturni dies e Solis dies, foi o primeiro a usar a terminologia eclesiástica para os designar (Feria secunda, Feria tertia, Feria quarta, Feria quinta, Feria sexta, Sabbatum, Dominica Dies), de onde derivam os modernos dias em língua portuguesa e que perdura ainda em regiões galego-falantes (segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado e domingo).\n[…]\nCOSTA, Avelino de Jesus - S. Martinho de Dume, (XIV Centenário da sua chegada à Península). Braga, Ed. Cenáculo, 1950.\n[…]\nSILVA, Lúcio Craveiro da - Estudos de cultura portuguesa, Braga, Centro de Estudos Humanísticos da Universidade do Minho, 2002 (biografias São Martinho de Dume, D. Diogo de Sousa, Francisco Sanches, Cassiano Abranches, Bacelar e Oliveira e Júlio Fragata)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
        "situacao": "ok",
        "texto": "In a vast number of languages, the names given to the seven days of the week are derived from the names of the seven classical planets which were in turn named after contemporary Hellenistic deities. This system was introduced by the Sumerians and later adopted by the Babylonians from whom the Roman Empire adopted the system during late antiquity.\n[…]\nExcept for in Portuguese and Mirandese, the Romance languages preserved the Latin names, except for the names of Sunday, which was replaced by [dies] Dominicus (Dominica), that is, \"the Lord's Day\", and of Saturday, which was named for the Jewish Sabbath. Mirandese and Portuguese use numbered weekdays, but retain sábado and demingo/domingo for weekends. Meanwhile, Galician occasionally uses them alongside the traditional Latin-derived names, albeit to a lesser extent (see below).\n[…]\nIn Slavic languages, some of the names correspond to numerals after Sunday: compare Russian vtornik (вторник) \"Tuesday\" and vtoroj (второй) \"the second\", chetverg (четверг) \"Thursday\" and chetvjortyj (четвёртый) \"the fourth\", pyatnitsa (пятница) \"Friday\" and pyatyj (пятый) \"the fifth\"; see also the notes regarding irregularities.\n[…]\nSaint Martin of Dumio (c. 520–580), archbishop of Braga, decided not to call days by pagan gods and to use ecclesiastic terminology to designate them. While the custom of numbering the days of the week was mostly prevalent in the Eastern Church, Portuguese and Mirandese, due to Martin's influence, are the only Romance languages in which the names of the days come from numbers rather than planetary names."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Abajur",
      "descricao": "Luminária de mesa ou de chão com cúpula que suaviza e direciona a luz."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra abajur vem de uma expressão francesa. Ao pé da letra, o que ela quer dizer?",
    "resposta": "Abaixa a luz",
    "distratores": [
      "Luz da noite",
      "Guarda a chama",
      "Pequena lâmpada"
    ],
    "fonte": [
      "https://fr.wikipedia.org/wiki/Abat-jour",
      "https://en.wikipedia.org/wiki/Lampshade"
    ],
    "trechos": [
      {
        "url": "https://fr.wikipedia.org/wiki/Abat-jour",
        "situacao": "ok",
        "texto": "Un abat-jour est, couramment, un cadre ou un réflecteur en papier ou en tissu fixé sur les douilles de laiton des ampoules électriques, pourvu souvent d'une armature en métal, que l'on place sur les lampes, pour en rabattre ou en adoucir la lumière puis, l'intensité de la source lumineuse augmentant par les progrès techniques, pour mieux la diffuser et la tamiser. Un abat-jour s'adapte aussi bien \n[…]\nEn architecture, un abat-jour  est une ouverture oblique dans un mur, qui permet de donner de la lumière à un lieu qui ne peut en recevoir que d'en haut, par exemple un soupirail pour une cave ou un sous-sol.\n[…]\nPar extension, un abat-jour est un volet ou une persienne placé devant l'ouverture d'une habitation pour protéger du soleil.\n[…]\nLes ancêtres de l'abat-jour domestique sont l'« écran de lumière » recensé au XIVe siècle (lame de porcelaine, papier, métal, carton ou verre dépoli placée contre un appareil d'éclairage, panneau de tissu ou de papier, monté sur une armature d'un bougeoir ou d'un flambeau et coulissant sur une tige à mesure que la bougie se consume) et le « garde-vue » dont le principe remonte au XVIIe siècle : soutenu par une armature métallique, le réflecteur généralement en verre, papier ou porcelaine, est destiné originellement à atténuer la lumière des chandeliers de bronze."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Lampshade",
        "situacao": "ok",
        "texto": "A lampshade is a fixture that envelops the light bulb to redirect the light it emits. The shade is often affixed onto a light fixture to reduce the intensity of the light, shield the bulb from a harsh environment, or for décor by altering the color."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Abajur",
        "situacao": "ok",
        "texto": "Abajur (do francês abat-jour, que significa “abaixar a luz” ou \"quebra-luz\")  é o objeto que resguarda a luz e que lhe atenua a intensidade. As formas mais comuns são cônicas e cilíndricas, feitas de uma grande variedade de materiais.\n[…]\nAbajur Tiffany",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Edredom",
      "descricao": "Coberta acolchoada e grossa, recheada de penas ou fibras, usada sobre a cama."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra edredom vem do nome das penas macias de qual pato marinho do norte, usadas para encher cobertas?",
    "resposta": "Êider",
    "distratores": [
      "Ganso-bravo",
      "Marreco",
      "Cisne"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Eiderdown",
      "https://en.wikipedia.org/wiki/Duvet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Eiderdown",
        "situacao": "desambiguacao",
        "texto": "Eiderdown can refer to:\n\nThe down feathers of the eider duck\nEiderdown (bedding), a duvet or comforter (a kind of quilt), traditionally containing eider duck down"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Duvet",
        "situacao": "ok",
        "texto": "A duvet (UK:  DOO-vay, US:  doo-VAY; from French  duvet [dyvɛ]  'down'), usually called a comforter or (down-filled) quilt in American English, and a doona in Australian English, is a type of bedding consisting of a soft flat bag filled with down, feathers, wool, cotton, silk, or a synthetic alternative, and is typically protected with a removable cover, similar to a pillow and pillow case.\n[…]\nDuvets originated in rural Europe and were filled with the down feathers of ducks or geese. The best quality feathers are taken from the eider duck, whose feathers are known for their effectiveness as a thermal insulator.\n[…]\nDuring the early middle ages,  duvets of eider (duck) down were used by people on the northern coast of Norway. The down from eider has been used for duvets, at least for a thousand years. The Oseberg viking ship  AD 820 contained, amongst the deposits, down duvets. In the 15th century, featherbeds (mattresses) were used by rich monarchs in continental Europe and in England, though not by their courtiers.\n[…]\nDuvets tend to come in a fixed tog (warmth) rating, so a winter-grade duvet may be too warm for summer use, and vice versa\n[…]\nThe term \"duvet day\" is used in some countries to describe an allowance of one or more days a year when employees can simply phone in and say that they are not coming in to work, even though they have no leave booked and are not ill. The provision of this benefit became fashionable in the late 1990s with many larger employers in the UK.\n[…]\nIn the 1999 American film Fight Club, Tyler Durden gives a speech in which he describes duvets as pretentious blankets:Do you know what a duvet is? [...] It’s a blanket. It’s just a blanket. Then why do guys like you and I know what a duvet is? Is this essential to our survival in the hunter-gatherer sense of the word?\n[…]\nMina (5 February 2002). \"How to fit a Duvet Cover: The One-minute Guide\". BBC."
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Mouse",
      "descricao": "Dispositivo apontador manual usado para controlar o cursor na tela de um computador."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O mouse do computador ganhou esse nome, que quer dizer camundongo em inglês, porque o fio lembrava qual parte do bicho?",
    "resposta": "O rabo",
    "distratores": [
      "Os bigodes",
      "As orelhas",
      "O focinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Computer_mouse"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Computer_mouse",
        "situacao": "ok",
        "texto": "A computer mouse (plural mice; rarely mouses) is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of the pointer (called a cursor) on a display, which allows a smooth control of the graphical user interface of a computer.\n[…]\nThe driver software in the system converts the signals into motion of the mouse cursor along X and Y axes on the computer screen.\n[…]\nThe device often functions as an interface for PC-based computer games and sometimes for video game consoles. The Classic Mac OS Desk Accessory Puzzle in 1984 was the first game designed specifically for a mouse.\n[…]\nDue to their similarity to the WIMP desktop metaphor interface for which mice were originally designed, and to their own tabletop game origins, computer strategy games are most commonly played with mice. In particular, real-time strategy and MOBA games usually require the use of a mouse.\n[…]\nRoch, Axel [at Wikidata]. \"Fire-Control and Human-Computer Interaction: Towards a History of the Computer Mouse (1940–1965)\" (PDF). Mindell, David. Massachusetts Institute of Technology, Program in Science, Technology, and Society. Archived (PDF) from the original on 2021-06-28. Retrieved 2021-08-24. (11 pages) (NB. This is based on an earlier German article published in 1996 in Lab.\n[…]\nPang, Alex Soojung-Kim (March–April 2002). Candland, Kevin (ed.). \"Mighty Mouse – In 1980, Apple Computer asked a group of guys fresh from Stanford's product design program to take a $400 device and make it mass-producible, reliable and cheap. Their work transformed personal computing\". Stanford Magazine. Stanford, California, US: Stanford Alumni Association, Stanford University. Archived from the original on 2021-08-24. Retrieved 2021-08-23.\n[…]\nThe first computer mouse at darpa.mil"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rato_%28inform%C3%A1tica%29",
        "situacao": "ok",
        "texto": "Na tecnologia, o mouse(pt-BR) ou rato(pt-PT?) é um periférico de entrada que junto ao teclado auxilia no processo de entrada de dados em programas com interface gráfica (um dispositivo para Interação homem-computador e entrada de dados) criado pela empresa Xerox (mas somente se tornou um produto comercializado com a Apple).\n[…]\nO rato ou mouse (estrangeirismo: empréstimo do inglês \"mouse\", que significa em português \"camundongo\") tem como função movimentar o cursor (ou apontador) pelo ecrã ou tela do computador que possui, normalmente, quatro tipos de operações: movimento, clique, duplo clique e arrastar e largar.\n[…]\nO mouse ou rato, por padrão, possui, pelo menos, dois botões: o esquerdo é usado para selecionar e clicar (acionar) ícones e o direito realiza funções secundárias como, por exemplo, exibir as propriedades do objeto apontado. Há, ainda, na maioria dos ratos (ou mouses), um botão scroll em sua parte central, que tem, como função principal, movimentar a barra de rolagem das janelas.\n[…]\nO Windows da Microsoft foi criado à volta dele e navegar na internet seria impossível sem um rato (mouse). Pode-se dizer que, a partir do lançamento do Windows 3.1, em abril de 1992, o lugar do mouse estava assegurado.\n[…]\nSem fio: a opção de não se ter mais um fio entre o rato e o microcomputador. O rato sem fio envia as informações para a base e esta se encarrega de passar, para o computador, as informações.\n[…]\nCom o advento dos jogos em 3D, o jogo Doom foi o primeiro jogo a utilizar o mouse para controlar a câmera no eixo horizontal e o Marathon de 1994 foi o primeiro a utilizar o mouse para controlar os eixos horizontal e vertical. Em grande parte dos jogos em primeira e terceira pessoa, o mouse é utilizado para controlar a câmera, enquanto o teclado é utilizado para controlar os movimentos do personagens.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Wi-Fi",
      "descricao": "Família de padrões de rede local sem fio usada para conectar aparelhos à internet."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Wi-Fi não abrevia nenhum termo técnico. Uma agência o criou como trocadilho com qual expressão do mundo dos aparelhos de som?",
    "resposta": "Hi-Fi (alta-fidelidade)",
    "distratores": [
      "Estéreo",
      "Dolby",
      "Walkie-talkie"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wi-Fi"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wi-Fi",
        "situacao": "ok",
        "texto": "Wi-Fi () is a family of wireless network protocols based on the IEEE 802.11 family of standards, which are commonly used for local area networking of devices and Internet access, allowing nearby digital devices to exchange data by radio waves.\n[…]\nThe yin-yang Wi-Fi logo indicates the certification of a product for interoperability. The name is often written as WiFi, Wifi, or wifi, but these are not approved by the Wi-Fi Alliance.\n[…]\nIt is disputed whether the name Wi-Fi is short-form for 'Wireless Fidelity', although the Wi-Fi Alliance did use the advertising slogan \"The Standard for Wireless Fidelity\" for a short time after the brand name was created, referenced \"the Wi-Fi (Wireless Fidelity) logo\" in a white paper and the Wi-Fi Alliance was also called the \"Wireless Fidelity Alliance Inc.\" in some publications.\n[…]\nIEEE, a separate but related organization, has stated \"WiFi is a short name for Wireless Fidelity\" on their website. The name Wi-Fi was partly chosen because it sounds similar to Hi-Fi, which consumers take to mean high fidelity or high quality. Interbrand hoped consumers would find the name catchy, and that they would assume this wireless protocol has high fidelity because of its name.\n[…]\nWireless adapters allow devices to connect to a wireless network. These adapters connect to devices using various external or internal interconnects such as mini PCIe, USB, ExpressCard and earlier, PCI, Cardbus, and PC Card. Computers now routinely come equipped with built-in wireless adapters.\n[…]\nCommon format: WIFI:S:<SSID>;T:<WEP|WPA|blank>;P:<PASSWORD>;H:<true|false|blank>;\n[…]\nSample WIFI:S:MySSID;T:WPA;P:MyPassW0rd;;"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Wi-Fi",
        "situacao": "ok",
        "texto": "Wi-Fi (pronúncia em inglês [ˈwaɪfaɪ]) é uma marca registrada da Wi-Fi ALLIANCE. É utilizada por produtos certificados que pertencem à classe de dispositivos de rede local sem fios (WLAN) baseados no padrão IEEE 802.11. Por causa do relacionamento íntimo com seu padrão de mesmo nome, o termo Wi-Fi é usado frequentemente como sinônimo para a tecnologia IEEE 802.11. O nome se deriva de uma abreviação\n[…]\nAlguns comparam ao termo Hi-Fi, designado para qualificar aparelhos de som com áudio mais confiável, que é usado desde a década de 1950.\n[…]\nFrente o problema com segurança no WEP, a Wi-Fi Alliance criou o formato Wired Protected Access (WPA), que é mais seguro que o WEP por se basear em um protocolo chamado Temporal Key Integrity Protocol (TKIP), que ficou conhecido como WEP2. Sendo assim, ao contrário do WEP, nesse sistema a chave é trocada periodicamente, sendo a sequência definida na configuração da rede (o passphrase),  por essa razão, recomenda-se a utilização do WPA ao invés do WEP.\n[…]\nEsse mecanismo oferece um alto grau de segurança, entretanto, tem como deficiência a alta exigência de processamento, o que pode prejudicar o desempenho do equipamento  em que opera, por essa razão, não é recomendável para usuários domésticos, além de não ser compatível com equipamentos antigos, o que testes para a sua implementação definitiva.\n[…]\nPiggybacking (algo como \"carregar nas costas\") é um termo da língua inglesa que tem sido usado de forma mais ampla como referência a uma conexão de internet sem fio obtida quando alguém leva seu computador (geralmente, um laptop) para dentro da área de acesso de outrem, e usa a internet sem fio de graça, sem o conhecimento ou autorização explícita do assinante do serviço. É uma prática controvertida, tanto legalmente quanto eticamente, com leis que variam de país para país ao redor do mundo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Zíper",
      "descricao": "Fecho de dentes metálicos ou plásticos que se encaixam com um cursor, usado em roupas, bolsas e malas."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em Portugal, o zíper se chama fecho éclair, nome tirado de uma marca francesa. O que significa a palavra éclair?",
    "resposta": "Relâmpago",
    "distratores": [
      "Rápido",
      "Corrente",
      "Dente"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Zipper",
      "https://fr.wikipedia.org/wiki/Fermeture_%C3%A9clair"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Zipper",
        "situacao": "ok",
        "texto": "A zipper (N. America), zip, zip fastener (UK), formerly known as a clasp locker, is a commonly used device for binding together two edges of fabric or other flexible material. Used in clothing (e.g., jackets and jeans), luggage and other bags, camping gear (e.g., tents and sleeping bags), and many other items, zippers come in a wide range of sizes, shapes, and colors. In 1892, Whitcomb L. Judson, \n[…]\nZippers may:\n[…]\nThe components of a zipper are:\n[…]\nForbes reported in 2003 that although the zipper market in the 1960s was dominated by Talon Zipper (US) and Optilon (Germany), Japanese manufacturer YKK grew to become the industry giant by the 1980s. YKK held 45 percent of world market share, followed by Optilon (8 percent) and Talon Zipper (7 percent). YKK enters zipper historical records only following the significant contributions from Howe, Judson, Sundback and the B.F. Goodrich Company.\n[…]\nThe slider is typically made as a magnesium diecast which breaks easily. It is necessary to reduce the force on the pliers before it can be felt that the slider actually gives in. If it is not yet possible to successfully close the zipper, the pressure applied to the slider should only gradually be increased. Another way to reduce the gap of the open end of the slider is by preparing a small block of wood by sawing a slot into one end so that it fits over the upper arm of the slider.\n[…]\nTalon Zipper the first manufacturer of hookless fasteners a/k/a zippers\n[…]\nFunicular—A \"zipper train\" is a type of funicular train, sometimes called \"cremallera\" in Spanish\n[…]\nZipper storage bag\n[…]\nFriedel, Robert (1996). Zipper: An Exploration in Novelty. New York: W. W. Norton and Company. ISBN 0-393-31365-4.\n[…]\nHow Zippers Work by S. M. Blinder, the Wolfram Demonstrations Project\n[…]\nThe History of the Zipper Archived 28 April 2020 at the Wayback Machine\n[…]\nType of Zippers\n[…]\nPutting in a Zipper, ca. 1962, Archives of Ontario YouTube Channel"
      },
      {
        "url": "https://fr.wikipedia.org/wiki/Fermeture_%C3%A9clair",
        "situacao": "ok",
        "texto": "La fermeture éclair, ou « fermeture à glissière », « fermeture à crémaillère », « tirette », « zip » ou encore en anglais « zipper », est un dispositif mécanique permettant l'ouverture et la fermeture rapide d'un vêtement, d'un sac, de chaussures ou le raccordement et la séparation rapide de pièces de tissus (porte de tente par exemple).\n[…]\nLa marque commerciale « Fermeture Éclair » est la propriété de la société française Éclair Prym France, basée à Menneval dans l'Eure. Dans les années 1930, la mode s'empare de la fermeture éclair, et Elsa Schiaparelli l'intègre à ses créations de haute-couture.\n[…]\nEn France et en Suisse romande, on utilise le terme de « fermeture éclair ». « Fermeture Éclair » (avec une majuscule) est une marque déposée. On utilise parfois le terme onomatopéique anglophone « zip ». Au Canada francophone, le mot « zipper » est utilisé par beaucoup de gens, surtout à l'oral, bien que le terme « fermeture éclair » soit également utilisé, notamment à l'écrit ou pour communiquer avec des francophones d'autres origines.\n[…]\nPar métaphore, le « principe de fermeture éclair », ou « principe de la tirette » en Belgique, sert à désigner une alternance, en particulier pour ce qui concerne la circulation automobile et aussi dans le domaine du débat contradictoire.\n[…]\nDans les débats, on désigne par « principe de fermeture éclair » l’alternance de prise de parole pour ou contre, ou une femme - un homme.\n[…]\nLors de débats, les femmes osent souvent moins prendre la parole que les hommes. A contrario, les hommes peuvent parfois avoir tendance à prendre la parole pour redire la même chose ou pour parler hors sujet. Le principe de fermeture éclair permet l'équilibre des échanges.\n[…]\nles prises de parole sont closes. Elles peuvent l'être après la dernière prise de parole masculine ou féminine (« Fermeture éclair + »)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Z%C3%ADper",
        "situacao": "ok",
        "texto": "Um zíper, fecho éclair, fecho ecler, zíper ou fecho de correr [PT]   é um fecho utilizado em roupas e em artefatos de couro feito de dois cadarços com dentes plásticos ou metálicos, que se encaixam por ação de um cursor.\n[…]\nA história do zíper, fecho éclair ou simplesmente \"fecho\" começou em 1893 na Exposição Mundial de Chicago, nos EUA, onde este objeto deslizante para fechar e abrir roupas foi apresentado pela primeira vez. Tratava-se de uma versão primitiva do dispositivo, com minúsculos ganchos e argolas, desenvolvida pelo engenheiro americano Whitcomb L. Judson. Cansado de abrir e fechar todos os dias os cordões dos seus sapatos, ele teve a ideia de criar um artefato rudimentar, composto de ganchos e furos.\n[…]\nO zíper se difundiu por todo o mundo quando os aviadores americanos na Primeira Guerra Mundial usaram-no para fechar seus uniformes, bem como quando foi introduzido na alta costura da moda mundial pela modista parisiense Elsa Schiaparelli, que começou a usá-lo nas suas criações nos salões franceses.\n[…]\nO nome \"zíper\" vem da palavra zipper, em inglês. Este nome popularizou-se somente em 1923, vindo de um funcionário da empresa americana B. F. Goodrich, em que o termo foi usado para denominar o fecho da nova linha de galochas de borracha da fábrica, chamada Zipper Boots.\n[…]\nEm Portugal e no Brasil adotou-se a expressão «fecho éclair», vinda do francês fermeture Éclair, que se refere ao nome da sociedade detentora do registro da marca — a Éclair Prestil SN. Essa expressão foi utilizada durante muitos anos, por fecho éclair ser uma marca mundialmente conhecida desde a sua fundação em 1946.\n[…]\nLista de casos de degenerescência de marca",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Réveillon",
      "descricao": "Nome dado no Brasil à festa da passagem de ano, na noite de trinta e um de dezembro."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra réveillon, usada para a festa da virada do ano, vem de um verbo francês. O que esse verbo significa?",
    "resposta": "Acordar (despertar)",
    "distratores": [
      "Celebrar",
      "Renovar",
      "Brindar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/R%C3%A9veillon",
      "https://pt.wikipedia.org/wiki/R%C3%A9veillon"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R%C3%A9veillon",
        "situacao": "ok",
        "texto": "A réveillon (French: [ʁevɛjɔ̃] ) is a long dinner held on Christmas Eve or New Year's Eve. Its name descends from the word réveil (meaning \"waking\"), because participation involves staying awake until morning, as the meal finishes.\n[…]\nIn the United States, the réveillon tradition is still  observed in New Orleans due to the city's strong French-Creole heritage, with a number of the city's restaurants offering special réveillon menus on Christmas Eve. It is also observed by many Franco-American families throughout New England.\n[…]\nThe term is first documented in 18th-century France, and was used by the French as a name for the night-long party dinners held by the nobility. Eventually the word began to be used by other courts (amongst them the Portuguese courts) and after the French Revolution it was adopted as a definition of the New Year's Eve.\n[…]\nThe food consumed at réveillons is generally exceptional or luxurious. For example, appetizers may include lobster, oysters, escargots or foie gras, etc. One traditional dish is turkey with chestnuts. Réveillons in Quebec will often include some variety of tourtière.\n[…]\nThere are certain traditional differences of character between the Christmas and New Year's Day réveillons.\n[…]\nThe New Year's Eve, or Saint-Sylvestre, réveillon, on the other hand, is commonly a party with friends, etc. People may also go out to a cabaret show, or watch live relays of such shows on television.\n[…]\nIn Portugal and Brazil, it is called Ceia de Natal for Christmas, and Ceia de Ano Novo for New Year. Additionally, the word réveillon (alternatively called \"virada do ano\" in Brazil) refers nationally to the New Year's Eve."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R%C3%A9veillon",
        "situacao": "ok",
        "texto": "Um réveillon é um longo jantar realizado na véspera de Natal ou na véspera de ano-novo. Seu nome deriva da palavra réveil (que significa \"acordar\"), porque a participação envolve ficar acordado até de manhã, quando a refeição termina.\n[…]\nA prática é observada na Bélgica; França; Brasil; Romênia; nas províncias canadenses de Quebec, Manitoba, Ontário, Alberta e Novo Brunswick; na cidade americana de Nova Orleães; e em alguns outros lugares francófonos. Nos países de língua portuguesa, também é uma designação para a festa que antecede o dia de ano-novo.\n[…]\nNos Estados Unidos, a tradição do réveillon ainda é observada em Nova Orleães devido à forte herança franco-crioula da cidade, com vários restaurantes da cidade oferecendo menus especiais de réveillon na véspera de Natal. Também é observada por muitas famílias franco-americanas em toda a Nova Inglaterra.\n[…]\nO termo é documentado pela primeira vez na França do século XVIII, e era usado pelos franceses como nome para os jantares festivos que duravam a noite toda, realizados pela nobreza. Eventualmente, a palavra começou a ser usada por outras cortes (entre elas as cortes portuguesas) e, após a Revolução Francesa, foi adotada como uma definição da Véspera de Ano Novo."
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Olho-de-boi (selo)",
      "descricao": "Primeira série de selos postais do Brasil, lançada em 1843, com valores numéricos dentro de um desenho oval."
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em 1843, o Brasil lançou seus primeiros selos postais. Por causa do desenho em volta dos números, que apelido eles ganharam?",
    "resposta": "Olho-de-boi",
    "distratores": [
      "Olho-de-gato",
      "Rabo-de-galo",
      "Pé-de-moleque"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Olho-de-boi_(selo)",
      "https://en.wikipedia.org/wiki/Postage_stamps_and_postal_history_of_Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Olho-de-boi_(selo)",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Postage_stamps_and_postal_history_of_Brazil",
        "situacao": "ok",
        "texto": "Brazil is the fifth largest country in the world. It was a colony of Portugal from 1500 until 1815.\n[…]\nThe first stamps of Brazil were issued on 1 August 1843 and are known as \"Bull's Eyes\" due to their distinctive appearance. On 1 July 1844 a new series was issued which is known as the slanted numeral series. Subsequent stamps were in a similar format until the first pictorial stamps were issued in 1866 depicting Emperor Dom Pedro II\n[…]\nFor many years stamps from Brazil had Brasil Correio displayed on them. However, starting from 1973 stamps show the country name and year, e.g. Brasil 2000.\n[…]\nFerreira, Henrique Bunselmeyer. Catalogo Ilustrado Dos Carimbos Sobre os Olhos-de-boi. 2011.\n[…]\nStudart, Marcelo Gladio da Costa. Catálogo Histórico dos Selos do Império do Brasil (1843-1889). 1991.\n[…]\nStudart, Marcelo Gladio da Costa. Falsificações e Fraudações na Filatelia Brasileira. 1991. Awarded the Alvaro Bonilla Lara Medal in 1995 by the FIAF.\n[…]\nTaveira, Walter Gonçalves. Brasil 1844–1846: \"Inclinados\": selos do império do Brasol (segunda estampa). Editora O Lutador. Belo Horizonte, MG. Brasil: Fundação Belgo-Mineira, 2001."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "BIC Cristal",
      "descricao": "Caneta esferográfica descartável de corpo transparente lançada pela empresa francesa BIC em 1950."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Além do furo na tampa, a caneta BIC Cristal tem um furinho na lateral do corpo. Para que ele serve?",
    "resposta": "Igualar a pressão do ar",
    "distratores": [
      "Evitar sufocamento",
      "Prender a carga",
      "Esfriar a tinta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bic_Cristal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "The Bic Cristal (stylised as BiC Cristal and also known as the Bic Biro) is an inexpensive, disposable ballpoint pen mass-produced and sold by Société Bic of Clichy, Hauts-de-Seine, France. It was introduced in 1950 and is the best-selling pen in the world, with the 100 billionth sold in September 2006. It has become the archetypal ballpoint pen and is considered ubiquitous, to the extent that the\n[…]\nThe Cristal's design has been widely copied around the world, especially in the Far East.\n[…]\nOne Kenyan manufacturer of the Cristal reportedly lost 100 M KES (approx. 1.3 M USD at 2009 exchange rate) to cheap copies from China, forcing them to negotiate more affordable licensing from Bic.\n[…]\nIn 2025, the Bic Cristal and the Décolletage Plastique design team were included in Pirouette: Turning Points in Design, an exhibition at MoMA featuring \"widely recognized design icons [...] highlighting pivotal moments in design history.\"\n[…]\nIn 2012, Bic marketed a spin-off product named the \"Bic Cristal for Her\". The pen, similar to the original, was supposedly designed specifically for women, and was sold in pink and purple colors. The product provoked outrage and ridicule, with television show host Ellen DeGeneres saying \"Can you believe this? We've been using man pens all these years,\" and comedian Bridget Christie titling her 2013 Edinburgh festival show A Bic For Her. The product also received many sarcastic Amazon reviews.\n[…]\nIn 2014 Bic released a new writing instrument based on the Cristal, a modified pen with a rubber tip opposite the ballpoint. This model, called the \"Cristal Stylus\", is for use on touchscreens. Bic funded a website to promote the stylus that crowdsourced a new typeface, named the Universal Typeface Experiment.\n[…]\nOfficial website  of the Bic Cristal at Société BIC\n[…]\nBic Cristal at the Museum of Modern Art"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bic_Cristal",
        "situacao": "ok",
        "texto": "A BIC Cristal (estilizada como BiC Cristal e também conhecida como Bic Biro) é uma caneta esferográfica de baixo custo, produzida em larga escala e vendida pela Société Bic, com sede em Clichy, Hauts-de-Seine, na França. Lançada em 1950, é a caneta mais vendida do mundo, tendo atingido a marca de cem bilhões de unidades vendidas em setembro de 2006.\n[…]\nFoi projetada pela equipe do Décolletage Plastique e é feita de poliestireno (corpo), de polipropileno (tampa), de carboneto de tungstênio (esfera) e de bronze/prata niquelada (ponta). Originalmente tinha quatro cores padrão: azul, preto, vermelho e verde e posteriormente foi expandido para 14 cores. O tamanho do ponto de uma caneta de ponta média é um milímetro, enquanto que a duração de sua tinta dura 2 quilômetros.\n[…]\nAo passar dos anos, a caneta ganhou várias variações como uma versão em miniatura, 7 variações de pontas que vão da ultrafina, cuja ponta tem 0,7 milímetros até a Cristal Bold, cuja ponta chega a 1,6 milímetros, além de uma variação com tinta com várias essências e também edições temáticas e limitadas. Desde 1991 há um pequeno orifício na ponta da tampa da caneta para que no caso de uma ingestão acidental, a tampa não sufoque a vítima, permitindo a passagem de ar.\n[…]\nPara muitos no mundo ocidental é o padrão da caneta esferográfica. As pessoas chamavam de simplesmente uma caneta de Biro. Marcel Bich fixou os direitos de autor à caneta esferográfica, inventada por László Biró em 1950. Ele escolhera Bic como nome como uma variação mais curta de seu próprio nome porque temeu que os norte-americanos pudessem desmoralizar com o palavrão Bitch (vadia, em inglês).\n[…]\nA caneta Bic Cristal faz parte da coleção permanente do MoMa, museu da arte moderna de Nova Iorque.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Lápis",
      "descricao": "Instrumento de escrita e desenho com miolo sólido de grafite em um revestimento, aqui um lápis preto HB."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Muitos lápis têm o corpo de seis lados, em vez de redondo. Que problema esse formato ajuda a evitar?",
    "resposta": "Rolar da mesa",
    "distratores": [
      "Quebrar o grafite",
      "Empenar a madeira",
      "Desbotar a tinta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pencil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pencil",
        "situacao": "ok",
        "texto": "A pencil ( ) is a writing or drawing implement with a solid pigment core in a protective casing that reduces the risk of core breakage and keeps it from marking the user's hand."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A1pis",
        "situacao": "ok",
        "texto": "Um lápis é um instrumento de escrever, pintar, desenhar e das mais variadas coisas, concebido para marcar, sublinhar e riscar. A acepção mais comum do termo atrela-se a um instrumento utilizado para escrever,[carece de fontes]? ou mesmo riscar sobre um papel; usualmente construído através de um estilete de grafite revestido de madeira, o tradicional lápis de escrever preto ou grafite (cor mais cin\n[…]\nO verdadeiro antepassado do lápis talvez seja o seu equivalente romano, o stylus; que consistia num pedaço de metal fino, normalmente chumbo revestido com alguma proteção (usualmente madeira) para evitar que os dedos se sujassem. O stylus era utilizados para escreverem-se os papiros.\n[…]\nAtando-se a grafite a varas de madeira, rapidamente surgiram os lápis rústicos, já livres de chumbo e parecidos aos que conhecemos hoje.\n[…]\nA mina de grafite de Borrowdale permaneceu por muito tempo como a fornecedora da melhor matéria prima para se confeccionarem os lápis, e apenas em 1795, à época de Napoleão Bonaparte, o francês Nicolas-Jacques Conté encontrou uma forma viável de produzir grafite aplicável à escrita a partir de material de qualidade incompatível. Contudo, em 1832 a importância da mina era ainda notória, e uma fábrica de lápis instalava-se nas redondezas da mesma.\n[…]\nMesmo com a ascensão dos lápis de grafite, os lápis de chumbo ainda guardaram significância até o século XIX, e vieram a extinguir-se definitivamente apenas no século XX, com a descoberta da toxicidade do chumbo.\n[…]\nDuas instituições registram o que consideram o menor lápis do mundo:\n[…]\nA \"Assist World Records Research Foundation\", da Índia, possui em seus registros o lápis confeccionado pelo micro-escultor Prakash Chandra Upadhyay com a dimensão de 0,5 cm de comprimento;\n[…]\nO \"Guinness World Records\" tem, em seus arquivos, a comprovação da fabricação de um lápis de 1,75 cm de comprimento pela empresa Faber-Castell em Stein.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Lápis",
      "descricao": "Instrumento de escrita e desenho com miolo sólido de grafite em um revestimento, aqui um lápis preto HB."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No fim do século dezoito, o francês Nicolas-Jacques Conté criou o miolo do lápis moderno misturando o grafite com o quê?",
    "resposta": "Argila",
    "distratores": [
      "Cera de abelha",
      "Carvão vegetal",
      "Chumbo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Nicolas-Jacques_Cont%C3%A9",
      "https://en.wikipedia.org/wiki/Pencil"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Nicolas-Jacques_Cont%C3%A9",
        "situacao": "ok",
        "texto": "Nicolas-Jacques Conté (French pronunciation: [nikɔla ʒak kɔ̃te]; 4 August 1755 – 6 December 1805) was a French inventor of the modern pencil.\n[…]\nHowever, from that time he gave free rein to his passion for the mechanical arts and scientific studies. He attended the lectures of Jacques Charles, Louis Nicolas Vauquelin and J. B. Leroy, and exhibited before the French Academy of Sciences an hydraulic machine of his own invention of which the model was the subject of a flattering report, and was placed in Charles's collection.\n[…]\nConté invented the modern pencil lead at the request of Lazare Nicolas Marguerite Carnot. The French Republic was at that time under economic blockade and unable to import graphite from Great Britain, the main source of the material. Carnot asked Conté to create a pencil that did not rely on foreign imports. After several days of research, Conté had the idea of mixing powdered graphite with clay and pressing the material between two half-cylinders of wood. Thus was formed the modern pencil.\n[…]\nAt the 1798 Exposition des produits de l'industrie française Conté won an honorable distinction, the highest award, for his \"crayons of various colours\".\n[…]\nOn his return to France in 1802 he was commissioned by the minister of the interior, Jean-Antoine Chaptal, to superintend the publication of the great work of the commission on Egypt, and an engraving machine of his construction materially shortened this task, which, however, he did not live to see finished. He died at Paris on the 6th of December 1805. Napoleon had included him in his first promotions to the Legion of Honour."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pencil",
        "situacao": "ok",
        "texto": "A pencil ( ) is a writing or drawing implement with a solid pigment core in a protective casing that reduces the risk of core breakage and keeps it from marking the user's hand.\n[…]\nPencil, from Old French pincel, from late Latin penicillus a \"little tail\" (see penis; pincellus) originally referred to an artist's fine brush of camel hair, also used for writing before modern lead or chalk pencils.\n[…]\nEnglish and German pencils were not available to the French during the Napoleonic Wars; France, under a naval blockade imposed by Great Britain, was unable to import the pure graphite sticks from the British Grey Knotts mines – the only known source in the world. France was also unable to import the inferior German graphite pencil substitute. It took the efforts of an officer in Napoleon's army to change this.\n[…]\nIn 1795, Nicolas-Jacques Conté discovered a method of mixing powdered graphite with clay and forming the mixture into rods that were then fired in a kiln. By varying the ratio of graphite to clay, the hardness of the graphite rod could also be varied. This method of manufacture, which was discovered earlier by the Austrian Joseph Hardtmuth, the founder of Vienna's Koh-I-Noor company in 1790, remains in use.\n[…]\nNumbers as designations were first used by Conté and later by John Thoreau in the 19th century.\n[…]\nAlthough Conté/Thoreau's equivalence table is widely accepted, not all manufacturers follow it; for example, Faber-Castell uses a different equivalence table in its Grip 2001 pencils: 1 = 2B, 2 = B, 2½ = HB, 3 = H, 4 = 2H."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicolas-Jacques_Cont%C3%A9",
        "situacao": "ok",
        "texto": "Nicolas-Jacques Conté (4 de agosto de 1755 - 6 de dezembro de 1805) foi um pintor, balonista e oficial do exército francês, e o inventor do lápis moderno.\n[…]\nNasceu em Saint-Céneri-près-Sées (hoje Aunou-sur-Orne), na Normandia, e destacou-se por seu gênio mecânico, que foi de grande utilidade para o exército francês no Egito. Napoleão chamou-o de \"um homem universal com bom gosto, compreensão e gênio capaz de criar as artes da França no meio do deserto da Arábia\".\n[…]\nNo Egito, Conté foi chamado a usar seus conhecimentos sobre balões e foi convidado a preparar um voo para a celebração do ano novo francês em 22 de setembro de 1798, de acordo com o calendário revolucionário.\n[…]\nConté inventou o lápis moderno, a pedido de Lazare Nicolas Marguerite Carnot. A República Francesa estava naquele momento sob bloqueio econômico, e incapaz de importar grafite da Grã-Bretanha, a principal fonte do material. Carnot pediu que Conté criasse um lápis que não dependesse de importações estrangeiras. Após vários dias de pesquisa, Conté teve a ideia de misturar grafite em pó com argila, e pressionar o material entre dois semicilindros de madeira. Assim foi formado o lápis moderno.\n[…]\nConté recebeu uma patente para a invenção em 1795, e formou a Société Conté para fazê-las. Ele também inventou o \"crayon conté\" nomeado em sua homenagem, um bastão de pastel duro usado por artistas.\n[…]\nNa Exposition des produits de l'industrie française, de 1798, Conté ganhou uma distinção honrosa, o prêmio mais alto, por seus \"lápis multicolores\". ==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Forno de micro-ondas",
      "descricao": "Eletrodoméstico que aquece alimentos com radiação de micro-ondas, desenvolvido a partir da tecnologia de radar."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A porta de vidro do micro-ondas tem uma tela metálica cheia de furinhos. O que essa tela impede?",
    "resposta": "Que as micro-ondas escapem",
    "distratores": [
      "Que o vidro estoure",
      "Que o vapor saia",
      "Que a comida respingue"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Microwave_oven"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Microwave_oven",
        "situacao": "ok",
        "texto": "A microwave oven, or simply microwave, is an electric oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range. This induces polar molecules in the food to rotate and produce thermal energy (heat) in a process known as dielectric heating. Microwave ovens heat food quickly and efficiently; the heating effect is fairly uniform in the outer 25–38 mm \n[…]\nTo verify his finding, Spencer created a high-density electromagnetic field by feeding microwave power from a magnetron into a metal box from which it had no way to escape. When food was placed in the box with the microwave energy, the temperature of the food rose rapidly."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Forno_de_micro-ondas",
        "situacao": "ok",
        "texto": "O forno de micro-ondas (também conhecido como forno micro-ondas ou simplesmente micro-ondas) é um eletrodoméstico utilizado principalmente na cozinha e que permite a preparação ou aquecimento rápido de alimentos.\n[…]\nSob certas condições, o vidro pode apresentar fuga térmica em um forno de micro-ondas até o ponto de fusão.\n[…]\nColocar no micro-ondas um objeto individual de metal liso sem pontas pontiagudas, por exemplo, uma colher ou uma panela rasa de metal, geralmente não produz faíscas. Grades de metal espessas podem fazer parte do design interior de fornos de micro-ondas. De forma semelhante, as placas da parede interior com furos que permitem a entrada de luz e ar no forno, e permitem a visualização do interior através da porta do forno, são todas feitas de metal condutor formado de forma segura.\n[…]\nA exposição direta às micro-ondas é incomum, pois as micro-ondas emitidas pela fonte em um forno de micro-ondas são confinadas pelo material com o qual o este é construído. Além disso, os fornos estão equipados com fechaduras de segurança, que removem a energia do magnetron se a porta for aberta. Este mecanismo de segurança é exigido pelas regulamentações federais dos Estados Unidos.\n[…]\nEstudos de longo prazo em roedores para avaliar o risco de câncer até agora não conseguiram identificar qualquer carcinogenicidade da radiação de micro-ondas de 2,45 GHz, mesmo com níveis de exposição crônica (ou seja, grande fração da vida útil) muito maiores do que os humanos provavelmente encontrariam em qualquer vazamento de fornos. Porém, com a porta do forno aberta, a radiação pode causar danos por aquecimento.\n[…]\nO forno micro-ondas pode causar câncer?\n[…]\nForno de Bier\n[…]\nForno cadinho\n[…]\nForno crematório\n[…]\nForno solar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Dia dos Namorados no Brasil",
      "descricao": "Data comemorativa brasileira celebrada em doze de junho, criada em 1949 por iniciativa comercial."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No Brasil, o Dia dos Namorados cai em doze de junho por ser a véspera do dia de qual santo casamenteiro?",
    "resposta": "Santo Antônio",
    "distratores": [
      "São João",
      "São Pedro",
      "São Valentim"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_dos_Namorados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_dos_Namorados",
        "situacao": "ok",
        "texto": "O Dia dos Namorados, também conhecido em diversos países como Dia de São Valentim, é uma celebração anual comemorada a 14 de fevereiro que assinala a união amorosa, o romance e o afeto entre casais.\n[…]\nNo Brasil, a celebração ocorre a 12 de junho, tendo sido instituída por motivos comerciais na véspera do Dia de Santo António, conhecido popularmente como o santo casamenteiro, em detrimento do tradicional São Valentim.\n[…]\nO Dia dos Namorados foi criado pelo publicitário João Doria, que buscava uma data comemorativa para fomentar o comércio no mês de junho — considerado um mês com poucas vendas a época —, sendo comemorada no dia 12 de junho por ser véspera do 13 de junho, Dia de Santo Antônio, santo português com tradição de casamenteiro.\n[…]\nDoria trouxe a ideia do exterior e apresentou-a aos comerciantes paulistas, iniciando em junho de 1949 uma campanha com o lema \"não é só com beijos que se prova o amor\". A ideia se expandiu pelo Brasil, amparada pela correlação com o Dia de São Valentim — que nos países do hemisfério norte, ocorre em 14 de fevereiro e é utilizada para incentivar a troca de presentes entre o casal apaixonado.\n[…]\nJohn Donne utilizou a lenda do casamento das aves como ponto de partida para o seu epitalâmio, celebrando o casamento de Isabel, filha de Jaime I de Inglaterra, com Frederico V, Eleitor Palatino, no Dia de São Valentim:\n[…]\nCasamento\n[…]\nSanto António\n[…]\n«Dia de São Valentim celebra santo que nunca existiu». , na Folha Online\n[…]\nO Doodle da Google para o Dia dos Namorados de 2025"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Dia dos Namorados no Brasil",
      "descricao": "Data comemorativa brasileira celebrada em doze de junho, criada em 1949 por iniciativa comercial."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1949, para animar as vendas de junho de uma loja de São Paulo, que publicitário criou o Dia dos Namorados no Brasil?",
    "resposta": "João Doria (pai do ex-governador)",
    "distratores": [
      "Assis Chateaubriand",
      "Roberto Marinho",
      "Washington Olivetto"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_dos_Namorados"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_dos_Namorados",
        "situacao": "ok",
        "texto": "O Dia dos Namorados, também conhecido em diversos países como Dia de São Valentim, é uma celebração anual comemorada a 14 de fevereiro que assinala a união amorosa, o romance e o afeto entre casais.\n[…]\nNo Brasil, a celebração ocorre a 12 de junho, tendo sido instituída por motivos comerciais na véspera do Dia de Santo António, conhecido popularmente como o santo casamenteiro, em detrimento do tradicional São Valentim.\n[…]\nO Dia dos Namorados foi criado pelo publicitário João Doria, que buscava uma data comemorativa para fomentar o comércio no mês de junho — considerado um mês com poucas vendas a época —, sendo comemorada no dia 12 de junho por ser véspera do 13 de junho, Dia de Santo Antônio, santo português com tradição de casamenteiro.\n[…]\nDoria trouxe a ideia do exterior e apresentou-a aos comerciantes paulistas, iniciando em junho de 1949 uma campanha com o lema \"não é só com beijos que se prova o amor\". A ideia se expandiu pelo Brasil, amparada pela correlação com o Dia de São Valentim — que nos países do hemisfério norte, ocorre em 14 de fevereiro e é utilizada para incentivar a troca de presentes entre o casal apaixonado.\n[…]\nOs registos mais antigos que restam de poemas de namorados em língua inglesa parecem ser os que constam nas Paston Letters, escritos em 1477 por Margery Brews para o seu futuro marido, John Paston, tratando-o por \"meu muito bem-amado Valentim\" (*\"my right well-beloved Valentine\"*).\n[…]\nO cliché moderno dos poemas para o Dia de São Valentim pode ser encontrado em Gammer Gurton's Garland (1784), uma coleção de cantigas infantis inglesas publicada em Londres por Joseph Johnson:\n[…]\nO Doodle da Google para o Dia dos Namorados de 2025"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Teflon",
      "descricao": "Nome comercial do politetrafluoretileno, plástico antiaderente descoberto por Roy Plunkett na DuPont em 1938."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em 1938, na DuPont, Roy Plunkett descobriu o teflon por acaso. Ele pesquisava gases para qual tipo de aparelho?",
    "resposta": "Geladeiras",
    "distratores": [
      "Aviões",
      "Lâmpadas",
      "Extintores"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Roy_J._Plunkett",
      "https://en.wikipedia.org/wiki/Polytetrafluoroethylene"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Roy_J._Plunkett",
        "situacao": "ok",
        "texto": "Roy Joseph Plunkett (June 26, 1910 – May 12, 1994) was an American chemist. He discovered polytetrafluoroethylene (PTFE), better known as Teflon, in 1938.\n[…]\nIn 1938, while attempting to make a new chlorofluorocarbon refrigerant, Plunkett's laboratory team discovered polytetrafluoroethylene (PTFE), better known as Teflon. In New York City in April 1986, Plunkett shared the story of his accidental discovery at the spring meeting of the American Chemical Society national meeting in the History of Chemistry section. His story was published in the Symposium Proceedings:\n[…]\nLater in his career, Plunkett was the chief chemist involved in the production of tetraethyllead, an antiknock agent that made gasoline \"leaded,\" later discontinued over concerns about the toxic effects of lead. After that, he directed the production of Freon, DuPont's brand name for chlorofluorocarbon refrigerant. He retired in 1975.\n[…]\nIn 1951, Plunkett received the John Scott Medal from the city of Philadelphia for an invention promoting the \"comfort, welfare, and happiness of humankind\". Attendees were given a Teflon-coated muffin tin to take home. Other awards and honors followed. Plunkett was inducted into the Plastics Hall of Fame in 1973 and the National Inventors Hall of Fame in 1985.\n[…]\nCenter for Oral History. \"Roy J. Plunkett\". Science History Institute. Retrieved 21 February 2018.\n[…]\nBohning, James J. (27 May 1986). Roy J. Plunkett, Transcripts of Interviews Conducted by James J. Bohning in New York City and Philadelphia on 14 April and 27 May 1986 (PDF). Philadelphia, PA: Beckman Center for the History of Chemistry."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Polytetrafluoroethylene",
        "situacao": "ok",
        "texto": "Polytetrafluoroethylene (PTFE) is a synthetic fluoropolymer of tetrafluoroethylene, and has numerous applications because it is heat resistant and chemically inert. The commonly known brand name of PTFE-based composition is Teflon by Chemours, a spin-off from DuPont, which originally invented the compound in 1938.\n[…]\nPolytetrafluoroethylene (PTFE) was accidentally discovered in 1938 by Roy J. Plunkett while he was working in Chemours Chambers Works plant in New Jersey for DuPont. On 6 April 1938, while attempting to make a new chlorofluorocarbon refrigerant, Plunkett and his assistant Jack Reebok found that a cylinder of tetrafluoroethylene (TFE) gas contained a white powder: polytetrafluoroethylene.\n[…]\nWhile PTFE is stable at lower temperatures, it begins to deteriorate at temperatures of about 260 °C (500 °F), it decomposes above 350 °C (662 °F), and pyrolysis occurs at temperatures above 400 °C (752 °F). The main decomposition products are fluorocarbon gases and a sublimate, including tetrafluoroethylene (TFE) and difluorocarbene radicals (RCF2).\n[…]\nA 1973 study by DuPont's Haskell Laboratory found that a 4-hour exposure to the fumes emitted by PTFE cookware heated to 280 °C (536 °F) was lethal for parakeets, although that was a higher temperature than the 260 °C (500 °F) required for fumes from pyrolyzed butter to be lethal to the birds.\n[…]\nAs a result of the lawsuits concerning the PFOA class-action lawsuit, DuPont began to use GenX, a similarly fluorinated compound, as a replacement for perfluorooctanoic acid in the manufacture of fluoropolymers, such as Teflon-brand PTFE. However, the EPA has classified GenX as more toxic than PFOA and it has proven to be a \"regrettable substitute\"; its effects may be equally harmful or even more detrimental than those of the chemical it was meant to replace."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Roy_Plunkett",
        "situacao": "ok",
        "texto": "Roy J. Plunkett (New Carlisle, Ohio, 26 de junho de 1910 — Corpus Christi, Texas, 12 de maio de 1994) foi um químico estadunidense, que acidentalmente inventou o Teflon em 1938.\n[…]\nEm 6 de abril de 1938 Plunkett foi coletar em um recipiente tetrafluoretileno congelado, que seria usado na produção de um gás refrigerante. Quando ele abriu o recipiente para remover uma certa quantidade do material, nada conseguiu retirar. Foi verificar o porquê, e descobriu que havia sido formado um pó branco que não aderiu ao recipiente.\n[…]\nO tetrafluoroetileno do recipiente tinha se polimerizado a politetrafluoroetileno (teflon), um sólido ceroso com surpreendentes propriedades como resistência à corrosão, superfície de baixa fricção e alta resistência ao calor.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Pyrex",
      "descricao": "Marca de vidro resistente ao calor para utensílios de cozinha, lançada pela americana Corning em 1915."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A ideia do Pyrex surgiu quando a esposa de um cientista da Corning assou um bolo num recipiente de vidro serrado pelo marido. Que recipiente era?",
    "resposta": "Pote de bateria",
    "distratores": [
      "Garrafa de leite",
      "Tubo de ensaio",
      "Vidro de lampião"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pyrex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pyrex",
        "situacao": "ok",
        "texto": "Pyrex (trademarked as PYREX and pyrex) is a type of borosilicate glass developed by Corning Incorporated in 1908. Pyrex was first introduced to the public in 1915, as a brand of clear, low-thermal-expansion glassware products, whose resistance to chemicals, electricity, and heat made it ideal for laboratory glassware and kitchenware. In the 1930s, Corning expanded the brand to include kitchen prod\n[…]\nCorning Incorporated continues to manufacture PYREX (all uppercase) laboratory glassware for international markets. The pyrex (all lowercase, introduced in 1975) trademark is now used for kitchenware sold in the United States, South America, Asia, and Australia.\n[…]\nFrom 1998, World Kitchen (Later Corelle Brands, then Anchor Hocking) used the Corning soda–lime formulation at their plant in Charleroi, Pennsylvania. The plant was shut down in April 2025, after 132 years of operation. Production was then shifted to Lancaster, Ohio by new owners Anchor Hocking. Ultimately, production of all U.S. Pyrex since 1998 has been made of soda–lime glass with the lowercase logo.\n[…]\nIn 1921, James A Jobling acquired the licence to produce Pyrex in the UK. The original kiln was replaced with a borosilicate furnace to create the Pyrex. Production started in 1922 at his Sunderland factory in England, and continued for over 50 years. In 1973, the licence expired, and Corning took control of the factory and the Jobling company. Pyrex produced before Corning took over was stamped with a \"JAJ\" symbol.\n[…]\nRogove, Susan Tobier; Steinhauer, Marcia B. (1993). Pyrex by Corning: A Collector's Guide. Marietta, Ohio: Antique Publications. ISBN 0-915410-94-X. OCLC 28440879.\n[…]\nRogove, Susan Tobier (2016). More Pyrex by Corning: A Collector's Guide. Photography: Jay Kogut Photography. Pennsauken, NJ: BookBaby. ISBN 978-1-4835-8646-5. OCLC 963732418.\n[…]\nPyrex Love, a vintage Pyrex reference site"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pyrex",
        "situacao": "ok",
        "texto": "Pyrex (estilizado como PYREX e pyrex) é a marca comercial usada desde 1915 pela Corning Inc. para a sua linha de recipientes em vidro borossilicato destinada ao mercado doméstico. A popularidade desta marca e a sua dominância do mercado ao longo do século XX fez dela uma marca genérica, sinónimo deste tipo de vidro. Por essa razão, quando referindo genericamente um vidro refratário, em escritos lu\n[…]\nA ideia de utilizar vidro borossilicato resistente ao calor e quimicamente inerte para produzir recipientes para cozinha terá surgido em 1913, quando Jesse Littleton, da fábrica de vidro Corning, testou em sua casa o uso de uma travessa de levar ao forno feita a partir do fundo de uma jarra de vidro borossilicato, Depois da esposa ter com sucesso cozinhado um bolo nela, decidiu propor o lançamento de uma linha de utensílios de cozinha em vidro.\n[…]\nNa realidade, o vidro não-corrosivo e resistente a altas temperaturas, que fora desenvolvido por Otto Schott na Alemanha em finais do século XIX, já tinha vários usos industriais e laboratoriais, mas nunca tinha sido proposto para o mercado doméstico. Percebendo o potencial mercado existente nos lares americanos, a Corning registou a marca em 1915 e lançou a primeira linha de utensílios Pyrex no ano seguinte.\n[…]\nA marca registrada pyrex (todas as letras minúsculas) é usada para utensílios de cozinha vendidos nos Estados Unidos, na América do Sul e na Ásia. Na Europa, África e Oriente Médio, uma variação da marca registrada PYREX (todas as letras maiúsculas) é licenciada pela International Cookware para utensílios de cozinha feitos de diversos materiais, incluindo vidro de borosilicato e de cal sodada, grês, metal e utensílios de cozinha de vitrocerâmica.[carece de fontes]?\n[…]\nPatente do Pyrex (1915)\n[…]\nHistorial da Corning com um capítulo sobre o historial do Pyrex\n[…]\nUm ferro de engomar de Pyrex",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Saquinho de chá",
      "descricao": "Pequeno saco poroso com folhas de chá, mergulhado em água quente para preparar a bebida."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a história, por volta de 1908 um comerciante de Nova York mandava amostras de chá em saquinhos de seda. O que os clientes passaram a fazer?",
    "resposta": "Mergulhar o saquinho na água",
    "distratores": [
      "Comer o chá seco",
      "Reaproveitar a seda",
      "Usar como perfume"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tea_bag"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tea_bag",
        "situacao": "ok",
        "texto": "A tea bag (also spelled teabag) is a small, porous, sealed bag or packet typically containing tea leaves (Camellia sinensis) or the leaves of other herbs, which is immersed in water to steep and make an infusion. Originally used only for making tea, they are now made for other tisanes (herbal \"teas\") as well.\n[…]\nTea bag patents date from 1903, when Roberta Lawson and Mary McLaren, of Milwaukee, Wisconsin, were granted US patent 723287 for a Tea Leaf Holder, which they had filed in 1901. The first modern tea bags were hand-sewn fabric bags. Appearing commercially around 1904, tea bags were successfully marketed in about 1908 by Thomas Sullivan, a tea and coffee importer from New York, who shipped his silk tea bags around the world."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Saquinho_de_ch%C3%A1",
        "situacao": "ok",
        "texto": "Os saquinhos de chá ou sachês de chá são pequenas bolsas feitas de materiais porosos, como papel filtro, algodão, nylon ou polímeros diversos, usadas para conter folhas de chá ou ervas para infusão em água quente. Esses sachês permitem a preparação prática de chá sem a necessidade de infusores ou utensílios adicionais, facilitando o consumo em casa, no trabalho ou em viagens.\n[…]\nOs saquinhos  são fabricados com materiais que permitem a passagem da água, extraindo o sabor e os compostos das folhas durante a infusão, sem deixar resíduos na bebida. A maioria dos saquinhos é selada com adesivos seguros para alimentos, grampos ou costuras, e muitos incluem um fio para facilitar sua remoção da xícara após a infusão.\n[…]\nNos últimos anos, saquinhos piramidais, feitos de materiais como nylon ou PET, ganharam popularidade por permitirem maior espaço para a expansão das folhas, resultando em melhor sabor.\n[…]\nDentre os materiais mais usados para a elaboração dos saquinhos estão:\n[…]\nTecido de algodão: Usado em saquinhos reutilizáveis ou descartáveis de alta qualidade, não altera o sabor.\n[…]\nNylon ou polipropileno: Comuns em saquinhos piramidais transparentes, permitem visualização das folhas, mas liberam microplásticos na infusão.\n[…]\nA popularidade do chá de saquinho fez com que surgissem amplas opções de produtos além do tradicional chá. Atualmente há uma grande variedade de chás e outras  infusões com ervas, frutos e aromatizantes diversificados podem ser preparados pelos usuários, incluindo:\n[…]\nChá (Camellia sinensis): Inclui chá preto, verde, branco, oolong ou puerh, com folhas inteiras, quebradas ou trituradas. Saquinhos de baixa qualidade também podem conter pó de chá, reduzindo sabor e nutrientes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Tupperware",
      "descricao": "Marca americana de potes plásticos com tampa hermética, lançada em 1946."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Os potes Tupperware encalhavam nas lojas até que a vendedora Brownie Wise apostou num novo jeito de vendê-los. Qual?",
    "resposta": "Reuniões de venda em casa",
    "distratores": [
      "Venda por catálogo",
      "Comerciais de televisão",
      "Brindes em supermercados"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brownie_Wise",
      "https://en.wikipedia.org/wiki/Tupperware_Brands"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brownie_Wise",
        "situacao": "ok",
        "texto": "Brownie Wise (née Humphrey; May 25, 1913 – September 24, 1992) was a pioneering American saleswoman largely responsible for the success of the home products company Tupperware, through her development of the \"party plan\" system of marketing. She initially worked as a salesperson for Stanley Home Products to supplement her income, before switching to selling Tupperware. Wise was vice president of T\n[…]\nIn 1957, Wise published her autobiography Best Wishes, Brownie Wise. This, along with Wise receiving credit for Tupperware's success in the media, estranged her from Tupper. Wise was accused of \"undermining the company's image\" when she reportedly used a Tupperware container as a dog dish, and she was forced out of the company by Tupper in January 1958. She filed a lawsuit against the company for $1.6 million for breach of contract, eventually settling for $30,000.\n[…]\nIn 2016, the Tupperware company donated $200,000 to Florida's Osceola County to establish a conservation area and a \"Brownie Wise Park\" on an island in Lake Tohopekaliga.\n[…]\nBax, Christina E. (Summer 2010). \"Entrepreneur Brownie Wise: Selling Tupperware to America's Women in the 1950s\". Journal of Women's History. 22 (2): 171–180. doi:10.1353/jowh.0.0159. S2CID 154411167.\n[…]\nKealing, Bob (2008). Tupperware, unsealed: Brownie Wise, Earl Tupper, and the home party pioneers. Gainesville: University Press of Florida. ISBN 9780813032276.\n[…]\nKealing, Bob (2016). Life of the party: the remarkable story of how Brownie Wise built, and lost, a Tupperware party empire. New York. ISBN 9781101903650. OCLC 929048536.{{cite book}}:  CS1 maint: location missing publisher (link)\n[…]\nMason, Fergus (2014). Brownie Wise, Tupperware Queen: A Biography. CreateSpace Independent Publishing Platform. ISBN 9781629174099.\n[…]\nBrownie Wise at Find a Grave\n[…]\nGuide to the Brownie Wise Papers at the Smithsonian Institution"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tupperware_Brands",
        "situacao": "ok",
        "texto": "Tupperware Brands Corporation, formerly Tupperware Corporation, is an American multinational company that produces home product lines that include kitchen gadgets, preparation, storage containers, and serving products for the kitchen and home. Its main focus is kitchen and household products, and it is particularly known for its line of plastic containers for food storage and preparation.\n[…]\nOn September 16, 2024, Tupperware Brands Corp. announced that they were preparing to file for Chapter 11 bankruptcy protection later in the week after a failed comeback after beneficial sales during the COVID-19 pandemic. The company's stock fell nearly 60% after the announcement. On September 17, the company was delisted from the New York Stock Exchange, and commenced trading over-the-counter.\n[…]\nOn September 18, Tupperware Brands filed for Chapter 11 bankruptcy protection, with plans to continue operating during the proceedings. In October, Tupperware avoided its liquidation via a deal with its creditors. In November 2024, the Tupperware brand name was acquired by Party Products LLC, who will allow for Tupperware's operations to continue.\n[…]\nA decade after starting business in the United States, Tupperware expanded into Europe. By 1965, the company had a presence in six European countries, and then launched in Singapore, Japan, and Australia. Tupperware also had sales offices in Africa and Latin America before 1970.\n[…]\nAfter that, Tupperware Brands expanded to almost 100 countries around the world under seven brands connected to it: the brands Tupperware, Avroy Shlain, BeautiControl, Fuller Cosmetics (including Armand Dupree), NaturCare, Nutrimetics, and Nuvo.\n[…]\nIn 2008, due to its success in developing the brand's name in China, India, and Indonesia, Tupperware received awards for \"Most Favored Brand by Women\" and \"Company with the Best Corporate Face.\"\n[…]\nBrownie Wise"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A cola fraca do Post-it foi criada em 1968 por Spencer Silver, químico da 3M, por acaso. O que ele tentava fazer?",
    "resposta": "Uma cola superforte",
    "distratores": [
      "Uma tinta lavável",
      "Um papel impermeável",
      "Uma fita isolante"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nIn 1968, Spencer Silver, a scientist at 3M in the United States, attempted to develop a super-strong adhesive. Instead, he accidentally created a \"low-tack\", reusable, pressure-sensitive adhesive for the aerospace industry. For five years, Silver promoted his \"solution without a problem\" within 3M both informally and through seminars, but failed to gain adherents.\n[…]\nIn 2019, the Post-it app was awarded 'Best of' App of 2019 by Google Play.\n[…]\nThe New York Historical Society preserved several thousand of the Post-it notes.\n[…]\nPost-it notes have also been used in museums to allow for more public interactivity and participation. In 2016, at the Minnesota History Center in St. Paul, Minnesota, the public wrote their reflections on the life of Prince on Post-it notes and posted them near the exhibit. Some Post-it notes were archived by the museum to preserve the public sentiment expressed at the time.\n[…]\nVirtual Post-it notes have been created for computers in the form of desktop notes. These include 3M's own Post-it Brand Software Notes, Stickies in macOS, and Sticky Notes in Windows.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nBeato, Greg (2005-03-24). \"Twenty-Five Years of Post-it Notes\". The Rake. Archived from the original on 2008-04-15.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nEm 1968, Spencer Silver, um cientista da 3M nos Estados Unidos, tentou desenvolver um adesivo super forte. Em vez disso, ele acidentalmente criou um adesivo sensível à pressão \"low-tack\", reutilizável. Por cinco anos, Silver promoveu sua \"solução sem problemas\" dentro da 3M tanto informalmente quanto por meio de seminários, mas não conseguiu ganhar adeptos.\n[…]\nEm 1974, um colega que havia participado de um de seus seminários, Art Fry, teve a ideia de usar o adesivo para ancorar seu marcador em seu hinário. Fry então utilizou a política de \"bootlegging permitido\" da 3M para desenvolver a ideia. A cor amarelo-pálido das notas originais foi escolhida por acaso, a partir da cor do papel de rascunho usado pelo laboratório ao lado da equipe do Post-It.\n[…]\nEm 2003, a empresa lançou o \"Post-it Brand Super Sticky Notes\", com uma cola mais forte que adere melhor a superfícies verticais e não lisas.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nPost-it homepage\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Post-it",
      "descricao": "Bloco de papéis autoadesivos removíveis lançado pela empresa americana 3M."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Em que década o bloco de recados autoadesivo Post-it foi lançado no mercado americano com esse nome?",
    "resposta": "Anos oitenta",
    "distratores": [
      "Anos cinquenta",
      "Anos sessenta",
      "Anos noventa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Post-it_note"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Post-it_note",
        "situacao": "ok",
        "texto": "A Post-it note (or sticky note) is a small piece of paper with a re-adherable strip of glue on its back, made for temporarily attaching notes to documents and other surfaces. A low-tack pressure-sensitive adhesive allows the notes to be easily attached, removed, and even re-posted elsewhere without leaving residue. The Post-it's signature adhesive was discovered accidentally by a scientist at 3M.\n[…]\nPost-it notes come in both lined and non-lined varieties, with the non-lined variant being the more common of the two.\n[…]\nThe New York Historical Society preserved several thousand of the Post-it notes.\n[…]\nSidewalks Labs, a Google-owned company that focuses on urban innovation, opened a public workspace in Quayside, Toronto, that supports public engagement in the city-planning process. Plans are presented here and the public can freely share their ideas, opinions, and feedback on potential projects, often in the form of Post-it note annotations.\n[…]\nPost-it notes have also been used in museums to allow for more public interactivity and participation. In 2016, at the Minnesota History Center in St. Paul, Minnesota, the public wrote their reflections on the life of Prince on Post-it notes and posted them near the exhibit. Some Post-it notes were archived by the museum to preserve the public sentiment expressed at the time.\n[…]\nVirtual Post-it notes have been created for computers in the form of desktop notes. These include 3M's own Post-it Brand Software Notes, Stickies in macOS, and Sticky Notes in Windows.\n[…]\nPost-it homepage\n[…]\n\"Sticking around – the Post-it note is 20\". BBC News. 2000-04-06.\n[…]\nBeato, Greg (2005-03-24). \"Twenty-Five Years of Post-it Notes\". The Rake. Archived from the original on 2008-04-15.\n[…]\nPost-it Note History by 3M\n[…]\nStavroula Karapapa, (2019). Post-it note. In Claudy Op den Kamp and Dan Hunter (eds.), A History of Intellectual Property in 50 Objects, Cambridge University Press."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Post-it",
        "situacao": "ok",
        "texto": "Um post-it (ou nota adesiva) é um pequeno pedaço de papel com uma tira de cola re-adesiva no verso, feito para anexar notas temporariamente a documentos e outras superfícies. Um adesivo sensível à pressão de baixa aderência permite que as notas sejam facilmente anexadas, removidas e até recolocadas em outro lugar sem deixar resíduos. Originalmente pequenos quadrados amarelos, os post-its e produto\n[…]\nAté 2019, existem pelo menos 26 cores documentadas de post-its.\n[…]\nA 3M fez um lançamento teste do produto como \"Press 'n Peel\" em lojas em quatro cidades em 1977, mas os resultados foram decepcionantes. Um ano depois, a 3M deu amostras grátis para consumidores em Boise, Idaho, com 94% dos que experimentaram indicando que comprariam o produto. O produto foi vendido como \"Post-Its\" em sua introdução em 1979, e foi lançado nos Estados Unidos em 6 de abril de 1980. No ano seguinte, eles foram lançados no Canadá e Europa.\n[…]\nAté a patente da 3M expirar na década de 1990, as notas tipo Post-it eram produzidas apenas na fábrica da empresa em Cynthiana, Kentucky.\n[…]\nEm 2018, a 3M lançou o \"Post-It Extreme Notes\", que são mais duráveis ​​e resistentes à água e que aderem à madeira e outros materiais em ambientes industriais.\n[…]\nAlan Amron afirmou ter sido o inventor real em 1973 que divulgou a tecnologia Post-it para a 3M em 1974. Seu processo de 1997 contra a 3M foi resolvido com um pagamento da 3M para Amron. Como parte do acordo, a Amron concordou em não fazer reclamações futuras contra a empresa, a menos que o acordo fosse violado. No entanto, em 2016, ele abriu um novo processo contra a 3M, afirmando que a 3M estava alegando erroneamente ser a inventora e pedindo quatrocentos milhões de dólares em danos.\n[…]\nPost-it homepage\n[…]\nBBC news article on 20th anniversary of Post-it Notes\n[…]\nThe Rake magazine article on 25th anniversary of Post-it notes\n[…]\nPost-it Note History by 3M",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Victorinox",
      "descricao": "Empresa suíça fabricante do canivete suíço, fundada por Karl Elsener em 1884."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No fim do século dezenove, Karl Elsener começou a fabricar na Suíça os canivetes que ficariam famosos. Para quem eram os primeiros?",
    "resposta": "Soldados do Exército suíço",
    "distratores": [
      "Guias de montanha",
      "Relojoeiros suíços",
      "Cozinheiros de hotel"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Swiss_Army_knife",
      "https://en.wikipedia.org/wiki/Victorinox"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Swiss_Army_knife",
        "situacao": "ok",
        "texto": "The Swiss Army knife (German: Schweizer Taschenmesser, Sackmesser, Hegel, etc.) is a multi-tooled pocketknife made for the Swiss Army since 1890, with consumer versions made, particularly since 1945. The term \"Swiss Army knife\" was used by American soldiers after World War II rather than the German word \"Offiziersmesser\", meaning \"Officer's knife\". They are commonly made by Victorinox and its subs\n[…]\nIn 1891, Karl Elsener, owner of a business in Ibach, Switzerland that made surgical equipment (which later became Victorinox) set out to manufacture the knives in Switzerland. In late 1891, Elsener began production of the Modell 1890 knives, in competition with the German manufacturer. He incurred financial losses doing so, as Wester & Co was able to produce the knives at a lower cost.\n[…]\nIn 1909, Elsener used a variation on the Swiss coat of arms to identify his knives. With slight modifications, this is still the company logo. In 1909, following the death of his mother, Elsener used her name Victoria as a brand name. In 1921 following the invention of stainless steel (acier inoxydable in French), Karl Elsener's son renamed the company to be Victorinox combining Victoria and inoxydable.\n[…]\nWith 'VICTORINOX SWISS MADE' tang stamp on Victorinox blades since 2005\n[…]\nIn 1978, NASA sent a letter of confirmation to Victorinox regarding a purchase of 50 knives known as the Master Craftsman model.\n[…]\nIn 1985, Edward M. Payton, brother of astronaut Gary E. Payton, sent a letter to Victorinox, asking about getting a Master Craftsman knife after seeing the one his brother used in space.\n[…]\nThe term \"Swiss Army\" currently is a registered trademark owned by Victorinox AG and its subsidiary, Wenger SA.\n[…]\nA Collector's Guide to Victorinox 58 mm Pocket Knives. 1990. Daniel J. Jacquart.\n[…]\nA friend in need, printed by Victorinox. 2003.\n[…]\nVictorinox manufacturer's website"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Victorinox",
        "situacao": "ok",
        "texto": "Victorinox () is a knife manufacturer and watchmaker based in the town of Ibach, in the Canton of Schwyz, Switzerland. It is known for its Swiss Army knives. Since its acquisition of rival Wenger in 2005, it has become the sole supplier of multi-purpose knives to the Swiss army. It is the world's biggest manufacturer of pocket knives; additionally, the company licenses its logo for watches, appare\n[…]\nThe company was founded in 1884 as Messerfabrik Carl Elsener, the workshop of Karl Elsener in Ibach. In 1891, Elsener co-founded Schweizerischer Messerschmiedverband an association of Swiss knife manufacturers.\n[…]\nUpon the death of his mother in 1909, Elsener named the brand \"Victoria\" in her honor. The same year, the Swiss coat of arms was introduced as the company logo.\n[…]\nIn 2014, Victorinox acquired the TRG Group from Centric Group.\n[…]\nIn 1972, the Forschner Butcher Scale Company of New Britain, Connecticut became the exclusive Victorinox distributor for the United States.\n[…]\nIn 1981, the company went public, and Charles Elsener, president of Victorinox, acquired a significant percentage of its shares. In 1983, it was renamed the Forschner Group, Inc. In the 1980s, Forschner registered the Swiss Army name as a trademark in the United States.\n[…]\nIn 2018, Victorinox marketed a perfume under the name \"Swiss Army\", and registered \"Swiss Army\" and \"Swiss Military\" as  trademarks under US law. In October 2018, the Swiss Federal Office for Defence Procurement (Armasuisse) sued Victorinox, demanding the removal of these trademarks from the marketplace.\n[…]\nThe context of the lawsuit included a 2012 parliamentary motion by state councillor Thomas Minder requesting the active protection of trademarks such as \"Swiss Army\", \"Swiss Military\" or \"Swiss Air Force\" on the part of the federal authorities. Victorinox argued that it does own the (English-language) trademarks \"Swiss Army\" and \"Swiss Military\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Canivete_su%C3%AD%C3%A7o",
        "situacao": "ok",
        "texto": "O canivete suíço (em alemão: Schweizer Taschenmesser, Sackmesser, Hegel, etc.) é um canivete, geralmente multiferramentas, agora fabricado pela Victorinox. O termo veio de \"Swiss Army knife\", que foi cunhado por soldados americanos após a Segunda Guerra Mundial porque eles tinham problemas para pronunciar a palavra alemã\".\n[…]\nO canivete suíço geralmente possui uma lâmina principal com ponta rebaixada, além de outros tipos de lâminas e ferramentas, como uma chave de fenda, um abridor de latas, uma lâmina de serra, uma tesoura e muitas outras. Estas são dobradas no cabo do canivete por meio de um mecanismo de ponto de articulação. O cabo é tradicionalmente vermelho, com o logotipo da Victorinox ou da Wenger em forma de \"cruz\" ou, no caso de canivetes militares suíços, o brasão da Suíça.\n[…]\nOriginário de Ibach, Suíça, o canivete suíço foi produzido pela primeira vez em 1891, quando a empresa Karl Elsener, que mais tarde se tornou Victorinox, ganhou o contrato para produzir o canivete Modell 1890 do Exército Suíço do fabricante alemão anterior.\n[…]\nEm 1893, a empresa suíça de cutelaria Paul Boéchat & Cie, que mais tarde se tornou Wenger S.A., recebeu seu primeiro contrato do exército suíço para produzir facas modelo 1890; as duas empresas dividiram o contrato inicial para o fornecimento das facas e operaram como empresas separadas a partir de 1908. Em 2005, a Victorinox adquiriu a Wenger. Como um ícone da cultura da Suíça, tanto o design quanto a versatilidade da faca têm reconhecimento mundial.\n[…]\nO termo \"canivete suíço\" adquiriu o uso como uma figura de linguagem que indica um conjunto de habilidades multifacetadas.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Sacola plástica",
      "descricao": "Saco leve de plástico com alças usado para carregar compras, criado pelo engenheiro sueco Sten Gustaf Thulin."
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo a família, o sueco Sten Thulin criou a sacola plástica para ser reutilizada no lugar da de papel. O que ele queria poupar?",
    "resposta": "Árvores",
    "distratores": [
      "Petróleo",
      "Água",
      "Dinheiro dos lojistas"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sten_Gustaf_Thulin",
      "https://en.wikipedia.org/wiki/Plastic_bag"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sten_Gustaf_Thulin",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Plastic_bag",
        "situacao": "ok",
        "texto": "A plastic bag, poly bag,  or pouch is a type of container made of thin, flexible, plastic film, nonwoven fabric, or plastic textile. Plastic bags are used for containing and transporting goods such as foods, produce, powders, ice, magazines, chemicals, and waste. It is a common form of packaging.\n[…]\nAmerican and European patent applications relating to the production of plastic shopping bags can be found dating back to the early 1950s, but these refer to composite constructions with handles fixed to the bag in a secondary manufacturing process. The modern lightweight shopping bag is the invention of Swedish engineer Sten Gustaf Thulin.\n[…]\nIn the early 1960s, Thulin developed a method of forming a simple one-piece bag by folding, welding and die-cutting a flat tube of plastic for the packaging company Celloplast of Norrköping, Sweden. Thulin's design produced a simple, strong bag with a high load-carrying capacity, and was patented worldwide by Celloplast in 1965.\n[…]\nIn India, the government has banned the use of plastic bags of a thickness below 50 microns. In 2018, Montreal, Canada, also banned plastic bags with Ottawa expected to also put the ban into effect.\n[…]\nThin, conformable plastic bags, especially dry cleaning bags, have the potential to cause suffocation. Because of this, about 25 children in the United States suffocate each year due to plastic bags, almost nine-tenths of whom are under the age of one. This has led to voluntary warning labels on some bags posing a hazard to small children.\n[…]\nPlastic bags are used for diverse applications:\n[…]\nJohansson, Nils. \"The Plastic Bag: From a Mundane Swedish Innovation to the World's Oceans\" Environment and History (August 2025), Vol. 31, No. 3: 293-299. online\n[…]\nMedia related to Plastic bags at Wikimedia Commons"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Pipa",
      "descricao": "Brinquedo de papel ou tecido sobre varetas, empinado ao vento preso a uma linha, também chamado de papagaio ou pandorga."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1752, segundo relatos da época, que americano empinou uma pipa numa tempestade para mostrar que o raio é eletricidade?",
    "resposta": "Benjamin Franklin",
    "distratores": [
      "Thomas Edison",
      "Thomas Jefferson",
      "Samuel Morse"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kite_experiment"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kite_experiment",
        "situacao": "ok",
        "texto": "The kite experiment is a scientific experiment in which a kite with a pointed conductive wire attached to its apex is flown near thunder clouds to collect static electricity from the air and conduct it down the wet kite string to the ground. The experiment was first proposed in 1752 by Benjamin Franklin, who reportedly conducted the experiment with the assistance of his son William. The experiment\n[…]\nFranklin conceived the idea of using a kite to raise the lightning rod to a great height. He described the kite experiment in a letter to the Pennsylvania Gazette published on October 19, 1752. In that letter, Franklin did not specify the circumstances in which he had carried out the experiment himself. Franklin's letter was read before the Royal Society on December 21 and later printed in the Philosophical Transactions.\n[…]\nThe fullest account of Franklin's actual experiment was given by Joseph Priestley in his 1767 treatise on The History and Present State of Electricity. Priestley presumably learned the details from Franklin himself, who was in London at the time that Priestley was composing that book. According to Priestley, Franklin's experiment took place in June 1752, when he flew a kite during a thunderstorm with the assistance of his son William Franklin.\n[…]\nThe kite was attached to a hemp string, at the other end of which Franklin tied a metallic house key that he had borrowed from Benjamin Loxley. That key was also tied to a silk cord, which acted as an insulator and allowed the Franklins to control the kite without touching the key or the conducting string of wet hemp. In order to keep the silk and the key dry, they sheltered from the rain in an open shed.\n[…]\nPhilosophical Transactions: \"A Letter of Benjamin Franklin, Esq; to Mr. Peter Collinson, F. R. S. concerning an Electrical Kite\" (PDF). Phil. Trans. 1751–1752 47, 565–567."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Experi%C3%AAncia_da_pipa",
        "situacao": "ok",
        "texto": "Experiência da pipa foi uma experiência científica na qual uma pipa com um fio condutor elétrico foi elevada e conduzida até perto de nuvens carregadas. Tencionava coletar eletricidade estática do ar e conduzi-la através do fio úmido até o chão. A experiência foi proposta pela primeira vez em 1752 por Benjamin Franklin, que a teria realizado com a assistência de seu filho William. Seu objetivo era\n[…]\nA experiência de Franklin foi realizada na Filadélfia em junho de 1752, de acordo com o relato de Joseph Priestley. Franklin descreveu o experimento no The Pennsylvania Gazette em 19 de outubro de 1752 sem mencionar que a tinha realizado. O relato foi lido para a Royal Society em 21 de dezembro e impresso como tal no Philosophical Transactions.\n[…]\nUma chave foi presa ao fio de cânhamo e conectada a uma garrafa de Leiden; um fio de seda foi amarrada a este. \"Esta chave carregou a garrafa, e do fogo elétrico assim obtido, ele acendeu espíritos, e realizou todos as outras experiências elétricas que são geralmente exibidas pela fricção de um globo animado tubo.\" Ao contrário da crença popular, a pipa não foi atingida por um raio visível; caso contrário, Franklin quase certamente teria sido morto pelo choque elétrico.\n[…]\nNo entanto, Franklin notou que fios soltos da corda de pipa estavam se repelindo e deduziu que a a garrafa de Leiden estava sendo carregada. Ele aproximou a mão da chave e observou uma faísca elétrica que provou a natureza elétrica do relâmpago.\n[…]\nPhilosophical Transactions: A Letter of Benjamin Franklin, Esq; to Mr. Peter Collinson, F. R. S. concerning an Electrical Kite. Phil. Trans. 1751–1752 47, 565–567; (em inglês) (PDF) Acessado em 12 de outubro de 2024.\n[…]\n«Benjamin Franklin. A film by Ken Burns» (em inglês). PBS. Consultado em 12 de outubro de 2024",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Barbie",
      "descricao": "Boneca lançada pela empresa americana Mattel em 1959, criada por Ruth Handler."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Lançado pela Mattel em 1961, o boneco Ken, namorado da Barbie, leva o nome de quem?",
    "resposta": "Filho da criadora, Ruth Handler",
    "distratores": [
      "Marido da criadora",
      "Fundador da Mattel",
      "Um ator famoso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ken_(doll)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ken_(doll)",
        "situacao": "ok",
        "texto": "Ken Carson is a fashion doll introduced by American toy company Mattel in 1961 as the counterpart of Barbie, who had been introduced two years earlier.\n[…]\nKen was introduced as the male counterpart to Barbie by the American toy company Mattel in 1961. He was named after Kenneth Handler, son of Barbie creator/inventor Ruth Handler, just as Barbie was named after her daughter. Ken Handler died in 1994 of a brain tumor.\n[…]\nSuperstar Ken featured a dimpled smile, a head that could swivel, bent arms, a more muscular physique, jewelry, and underwear permanently molded to his body. Allegedly Ruth Handler built Ken's appearance in resemblance to her husband.\n[…]\nIn 2011, Mattel introduced Japan Ken, the first Ken doll to be included in the \"Dolls of the World\" collection, which was formerly a Barbie-only line. The Japan Ken doll features a new face sculpt.\n[…]\nIn 2021, Mattel announced 15 new looks for Ken. This included looks with different skin tones, body shapes and hair styles. Barbie underwent a similar makeover in 2020. Outside of this change, Ken has not changed much since he was introduced 65 years ago.\n[…]\nKen has starred in various roles not disclosed by Mattel in the Barbie media franchise, including the Barbie films, Barbie: Life in the Dreamhouse, Barbie: Vlogger, Barbie Dreamhouse Adventures, Barbie's Dreamworld, Barbie: It Takes Two and Barbie: A Touch of Magic.\n[…]\nKen is named after Ruth Handler’s son Kenneth. In the 1960s Random House books, the character's surname is given as Carson. Barbie and Ken's surnames were taken from the name of Mattel's ad agency Carson/Roberts. Ken's middle name is Sean.\n[…]\nHistory from Mattel Inc. 2001"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ken_%28boneco%29",
        "situacao": "ok",
        "texto": "Kenneth Sean Carson também conhecido como Ken é um boneco fabricado pela empresa Mattel, e introduzido em 11 de março do ano 1961 como o namorado da boneca Barbie. Semelhante a sua \"contraparte feminina\", Ken também possui uma vasta linha de roupas e acessórios. O personagem não só apenas faz parte da linha de brinquedos, como também é visto aparecendo em quase todas as mídias da Barbie geralmente\n[…]\nNo Brasil, o boneco foi originalmente vendido pela Estrela em 1984 sob o nome de Bob, a princípio para evitar problemas com a pronúncia do nome Ken em português, porém ele passou a ser chamado de Ken alguns anos depois.\n[…]\nEle também fez uma aparição no filme Toy Story 3 e é um dos protagonistas do desenho animado Barbie: Life in the Dreamhouse.\n[…]\nEm 2023, o ator Ryan Gosling foi escalado para viver o boneco em uma adaptação live-action no filme Barbie, junto com Margot Robbie.\n[…]\nEm 1993, a Mattel lançou um boneco do Ken intitulado \"Earring Magic Ken\". Esse boneco causou bastante controvérsia por sua semelhança de visual que segue a cultura gay. Através de várias críticas, a Mattel descontinuou o boneco por alguns anos, embora suas vendas tenham sido bem favoráveis.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Barbie",
      "descricao": "Boneca lançada pela empresa americana Mattel em 1959, criada por Ruth Handler."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Barbie foi inspirada em Bild Lilli, uma boneca baseada numa personagem de tirinhas de jornal. De que país era essa boneca?",
    "resposta": "Alemanha",
    "distratores": [
      "França",
      "Suíça",
      "Itália"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bild_Lilli_doll"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bild_Lilli_doll",
        "situacao": "ok",
        "texto": "The Bild Lilli doll was a West German line of fashion doll launched by Greiner & Hausser GmbH on August 12, 1955 and produced until 1964. Its design was based on the comic-strip character Lilli, created by Reinhard Beuthien for the tabloid newspaper Bild. The doll was made of polystyrene, came in two sizes, and had an available wardrobe of 1950s fashion. The Lilli doll was copied, and altered to s\n[…]\nMattel acquired the rights to Bild Lilli in 1964, and production of the German doll ceased in favor of Mattel's new vinyl doll, which they called Barbie.\n[…]\nEach Lilli doll carried a miniature copy of Bild and was sold in a clear plastic tube, with the doll's feet fitted into the base of a stand labelled \"Bild-Lilli\" that formed the bottom of the tube; the packaging was designed by E. Martha Maar, the mother-in-law of the Hausser company owner.\n[…]\nMattel's Barbie doll, which appeared in March 1959, was based on Bild Lilli dolls that co-founder Ruth Handler had acquired in Hamburg. The first Barbie doll was made of vinyl instead of hard plastic, had rooted hair with curly bangs rather than a wig-cap, and included separate shoes and earrings which were not molded on as Lilli's were. However, apart from these differences, the earliest Barbie dolls were in many ways quite similar to Lilli in overall shape and appearance.\n[…]\nLouis Marx and Company acquired the rights to the Bild Lilli doll from Hausser and sold Miss Seventeen and smaller Miss Marlene dolls. Mattel had bought all patents and copyrights to the Bild Lilli doll so that using that name as a book title or product name would infringe copyright laws. Marx unsuccessfully attempted to sue Mattel for patent infringement.\n[…]\nLilli has been a collector's piece. In the Coburg Doll Museum, over 1,000 historic dolls are displayed, including the Lilli doll, the \"grandmother\" of the world-famous Barbie."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bild_Lilli",
        "situacao": "ok",
        "texto": "Bild Lilli foi uma boneca alemã produzida de 1955 a 1964, precursora da boneca mais famosa do mundo, a Barbie.\n[…]\nEm 1952 o jornal Bild publicou tiras de quadrinhos com uma personagem feminina de nome Lilli, criada pelo ilustrador Reinhard Beuthien para preencher as lacunas sem notícias do jornal. Estampada nas histórias de maneira pornográfica, ela costumava perseguir homens ricos em busca de dinheiro e sucesso.\n[…]\nEm 1955 a personagem foi transformada na boneca Bild Lilli pela O&M Hausser, que fabricou 130 mil exemplares. Vendida em bares e\n[…]\ntabacarias, Bild Lilli não era direcionada para as crianças. Era uma boneca erótica, que ficava sentada com as pernas abertas e servia tanto para ser colocada no painel do carro como um presente para as namoradas no lugar das flores.\n[…]\nEm 1956 o casal passava as férias com a família na Suíça quando Ruth, fazendo compras com sua filha adolescente, viu uma boneca que não conhecia, chamada Bild Lilli, que tinha aparência e proporções de mulher adulta.\n[…]\nA Barbie foi lançada em 9 de março de 1959 em Nova Iorque, vendendo mais de 350 mil unidades. Em 1964 a Mattel comprou os direitos de fabricação da boneca Bild Lilli.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Código de barras",
      "descricao": "Representação de dados em barras paralelas lidas por scanners, criada por Norman Joseph Woodland e Bernard Silver."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1974, num supermercado de Ohio, o primeiro produto registrado no caixa pela leitura do código de barras foi um pacote de quê?",
    "resposta": "Chiclete",
    "distratores": [
      "Sabonete",
      "Biscoito",
      "Café"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Universal_Product_Code"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Universal_Product_Code",
        "situacao": "ok",
        "texto": "The Universal Product Code (UPC or UPC code) is a barcode symbology that is used worldwide for tracking trade items in stores.\n[…]\nThe first UPC-marked item ever to be scanned at a retail checkout was a 10-pack (50 sticks) of Wrigley's Juicy Fruit chewing gum, purchased at the Marsh supermarket in Troy, Ohio, at 8:01 a.m. on 26 June 1974. The NCR cash register rang up 67 cents.\n[…]\nAround late 1969, IBM at Research Triangle Park (RTP) in North Carolina assigned George Laurer to determine how to make a supermarket scanner and label. In late 1970, Heard Baumeister provided equations to calculate characters-per-inch achievable by two IBM bar codes, Delta A and Delta B. In February 1971, Baumeister joined Laurer.\n[…]\nUS 3832686, Bilgutay, Ilhan M., \"Bar Code Font\", published 11 May 1972, issued 27 August 1974"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/C%C3%B3digo_Universal_de_Produtos",
        "situacao": "ok",
        "texto": "O Código Universal de Produto (UPC ou código UPC) é uma simbologia de código de barras amplamente utilizada mundialmente para rastreamento de itens comerciais em lojas.\n[…]\nO primeiro item com a marca UPC a ser escaneado em um caixa de varejo foi um pacote de 50 chicletes Wrigley's Juicy Fruit, comprado no supermercado Marsh em Troy, Ohio, às 8h01 em 26 de junho de 1974. A caixa registradora NCR registrou 67 centavos. O carrinho de compras também continha outros itens com código de barras, mas o chiclete foi o primeiro retirado no caixa. Um fac-símile do pacote de chicletes foi exibido no museu de história americana do Smithsonian Institution em Washington, DC.\n[…]\nPor volta do final de 1969, a IBM, do Research Triangle Park (RTP), na Carolina do Norte, designou George Laurer para determinar como fazer um scanner e uma etiqueta de supermercado. No final de 1970, Heard Baumeister forneceu equações para calcular caracteres por polegada alcançáveis por dois códigos de barras IBM, Delta A e Delta B. Em fevereiro de 1971, Baumeister juntou-se à Laurer.\n[…]\nEm meados de 1971, William \"Bill\" Crouse inventou um novo código de barras chamado Delta C Ele alcançou quatro vezes mais caracteres por polegada do Delta B.\n[…]\nA área escaneável de cada código de barras UPC-A segue o padrão S L LLLLLMRRRRR R E, onde os padrões de guarda S (início), M (meio) e E (final) são representados da mesma maneira em cada código de barras UPC-A e no L As seções (esquerda) e R (direita) representam coletivamente os 12 dígitos numéricos que tornam cada UPC-A único. O primeiro dígito L indica um sistema numérico específico a ser usado pelos dígitos seguintes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Árvore de Natal",
      "descricao": "Pinheiro, natural ou artificial, enfeitado com luzes e ornamentos durante as festas de fim de ano."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Em 1882, um sócio de qual inventor americano enfeitou a árvore de Natal de casa com lâmpadas elétricas, no lugar das velas?",
    "resposta": "Thomas Edison",
    "distratores": [
      "Nikola Tesla",
      "Graham Bell",
      "George Westinghouse"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Christmas_lights"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Christmas_lights",
        "situacao": "ok",
        "texto": "Christmas lights (also known as fairy lights, festive lights or string lights) are lights often used for decoration in celebration of Christmas, often on display throughout the Christmas season including Advent and Christmastide. The custom goes back to when Christmas trees were decorated with candles, which symbolized Christ being the light of the world. The Christmas trees were brought by Christ\n[…]\nThe first known electrically illuminated Christmas tree was the creation of Edward H. Johnson, an associate of inventor Thomas Edison. While he was vice president of the Edison Electric Light Company, he had Christmas tree light bulbs especially made for him. He proudly displayed his Christmas tree, which was hand-wired with 80 red, white and blue electric incandescent light bulbs the size of walnuts, in December 1882 at his home near Fifth Avenue in New York City.\n[…]\nIn 1973, during an oil shortage triggered by an embargo by the Organization of Arab Petroleum Exporting Countries (later OPEC), President Nixon asked Americans not to put up Christmas lights  to conserve energy use. Many Americans complied, and there were fewer displays that year.\n[…]\nIn some areas Christmas lighting becomes a fierce competition, with town councils offering awards for the best decorated house, in other areas it is seen as a co-operative effort, with residents priding themselves on their street or their neighbourhood. Today it is estimated that more than 150 million light sets are sold in America each year, with more than 80 million homes decorated with holiday lights."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Luzes_de_Natal",
        "situacao": "ok",
        "texto": "Pisca-pisca (português brasileiro) ou luzes de Natal (português europeu) é um acessório geralmente colocado numa árvore de Natal ou em decoração de casas, de lojas ou empresas, para iluminá-las. Trata-se de um fio com diversas lâmpadas ou LEDs, que piscam repetidamente em sequência ou não.\n[…]\nAs lâmpadas das luzes de Natal mais baratas, são geralmente ligadas em série. Outras piscam de forma desordenadas, e algumas nem piscam. A lâmpada liga, esquenta um pequeno interruptor metálico, que dilata, tirando o contato da lâmpada e fazendo com que ela se apague. Depois que ela se apaga, esfria o interruptor metálico, que se contrai e volta a ligar a lâmpada, fazendo-a piscar.\n[…]\nEm 1882, Edward Hibberd Johnson, amigo e parceiro de negócios de Thomas Edison, teve uma ideia para ajudar a divulgar as recém-lançadas lâmpadas elétricas: colocou um pinheiro de Natal na sala de sua mansão e o decorou com dezenas de lâmpadas coloridas. Para eletrificar a decoração, Johnson posicionou o pinheiro de Natal em cima de um dínamo. O pinheiro foi decorado com fios contendo combinações de lâmpadas de diferentes colorações.\n[…]\nÀ medida que a árvore girava sobre o dínamo, conectores de cobre instalados estrategicamente faziam contato com os diferentes fios, provocando o acendimento sequencial das lâmpadas ali presentes.\n[…]\nPara se decorar uma casa, muitas pessoas procuram variados tipos de pisca-piscas para dar um charme a mais, um toque especial ao ambiente decorado. Com isso, as indústrias fabricantes de pisca-pisca vêm investindo em várias tecnologias para uma decoração que qualquer pessoa que queira decorar sua casa para o Natal consegue fazer e obter um excelente resultado.\n[…]\nÁrvore de Natal\n[…]\nBola de Natal\n[…]\nPai Natal",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Parabéns a Você",
      "descricao": "Canção cantada nos aniversários no Brasil, versão em português da americana Happy Birthday to You."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A melodia do Parabéns a Você vem de uma canção infantil americana de 1893, feita para saudar alunos na escola. Que canção era essa?",
    "resposta": "Good Morning to All",
    "distratores": [
      "Jingle Bells",
      "Brilha, brilha estrelinha",
      "Oh! Susanna"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Happy_Birthday_to_You"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Happy_Birthday_to_You",
        "situacao": "ok",
        "texto": "\"Happy Birthday to You\", or simply \"Happy Birthday\", is an American song traditionally sung to celebrate a person's birthday. According to the 1998 Guinness World Records, it is the most recognized song in the English language, followed by \"For He's a Jolly Good Fellow\". The song's base lyrics have been translated into at least 18 languages.\n[…]\nThe melody of \"Happy Birthday to You\" comes from the song \"Good Morning to All\", which has traditionally been attributed to American sisters Patty and Mildred J. Hill in 1893, although the claim that the sisters composed the tune is disputed.\n[…]\n\"Happy Birthday to You\" dates from the late 19th century, when sisters Patty and Mildred J. Hill introduced the song \"Good Morning to All\" to Patty's kindergarten class in Kentucky. They published the tune in their 1893 songbook Song Stories for the Kindergarten with Chicago publisher Clayton F. Summy.\n[…]\nWarner/Chappell disputed the evidence, arguing that, unless there was \"necessary authorization from the copyright owner\", the \"Happy Birthday\" lyrics and sheet music would still be subject to common law copyright as an unpublished work, and that it was unknown whether the \"special permission\" from the Summy Company covered \"Good Morning to All\", \"Happy Birthday to You\", or both, thus alleging that the publication in The Everyday Song Book was unauthorized.\n[…]\nSong Stories for the Kindergarten by Mildred Hill: containing the song \"Good morning to you\" at the International Music Score Library Project\n[…]\nMars rover Curiosity plays \"Happy Birthday\" to itself on YouTube in 2013\n[…]\n\"The Happy Birthday Song\". University of Pittsburgh. Archived from the original on September 26, 2015. Retrieved May 24, 2024. – shows the \"Good Morning and Birthday Song\" from the 1927 edition of The Everyday Song Book held by the University of Pittsburgh Library System."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Parab%C3%A9ns_a_Voc%C3%AA",
        "situacao": "ok",
        "texto": "\"Parabéns a Você\" (no Brasil, popularmente alterado para \"Parabéns para Você\" ou mais habitualmente \"Parabéns pra Você\") é o título em português para a canção tradicional de origem estadunidense \"Happy Birthday to You\", cantada nas comemorações de aniversários das pessoas, e que em 1942 teve uma letra adaptando-a no Brasil por Bertha Celeste, a qual também é utilizada em Portugal.\n[…]\nA melodia de \"Parabéns a Você\" tem origem na canção \"Good Morning to All\" (\"Bom dia a todos\"), das irmãs e professoras norte-americanas Mildred J. Hill e Patty Hill em 1893, que resolveram compor uma canção para as crianças cantarem na entrada da escola. A melodia era acompanhada pela repetição do título quatro vezes. Isto ocorreu no ano de 1875.\n[…]\nAs duas registraram a composição em 1893, até que em 1924, a composição foi publicada num livro de Robert Coleman, que trazia partituras intitulado \"Celebrations Songs\", tendo conservado a melodia e alterado o verso para Happy Birthday to You\" (\"Feliz Aniversário a Você\").\n[…]\nEm junho de 2016, a versão de “Happy Birthday” foi considerada de domínio público, sem ter que pagar direitos de autor para a execução pública, em um processo que tramitava desde 2013.\n[…]\nSegundo argumentou o advogado de Nelson, Mark C. Rifkin, que ajuizara a ação em 13 de junho de 2013, Happy Birthday era uma simples adaptação pública da canção original: \"É uma música criada pelo público, pertence ao público, e que precisa voltar para o público\".\n[…]\nEm 22 de setembro de 2015, finalmente, o juiz George H. King, de um tribunal federal de Los Angeles, decidiu que a canção já era de domínio público. No dia 8 de fevereiro de 2016 a Warner pagou 14 milhões de dólares num acordo judicial para que não seja processada pela cobrança indevida durante todo o tempo em que se arvorou em detentora dos direitos de \"Happy Birthday\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Parabéns a Você",
      "descricao": "Canção cantada nos aniversários no Brasil, versão em português da americana Happy Birthday to You."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1942, num concurso promovido por uma rádio, quem escreveu a letra em português do Parabéns a Você?",
    "resposta": "Bertha Celeste Homem de Mello",
    "distratores": [
      "Chiquinha Gonzaga",
      "Cecília Meireles",
      "Dolores Duran"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Parab%C3%A9ns_a_Voc%C3%AA"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Parab%C3%A9ns_a_Voc%C3%AA",
        "situacao": "ok",
        "texto": "\"Parabéns a Você\" (no Brasil, popularmente alterado para \"Parabéns para Você\" ou mais habitualmente \"Parabéns pra Você\") é o título em português para a canção tradicional de origem estadunidense \"Happy Birthday to You\", cantada nas comemorações de aniversários das pessoas, e que em 1942 teve uma letra adaptando-a no Brasil por Bertha Celeste, a qual também é utilizada em Portugal.\n[…]\nA música chegou ao Brasil ainda cantada em inglês, no final da década de 1930. O compositor e radialista Almirante, da Rádio Tupi do Rio de Janeiro, organizou em 1942 um concurso para escolher uma letra que casasse com a melodia de \"Happy Birthday To You\"; dentre cerca de 5 mil participantes, a vencedora escolhida pelo júri composto por imortais da Academia Brasileira de Letras foi Bertha Celeste Homem de Mello, paulista de Pindamonhangaba.\n[…]\nAlmirante recebera mais de cinco mil cartas com propostas de letras, sendo que a versão eleita fora escrita por Bertha, então com 40 anos de idade, em apenas cinco minutos: os jurados Olegário Mariano, Cassiano Ricardo e Múcio Leão a escolheram principalmente por trazerem versos diferentes para cada linha, ao invés de repetirem o mesmo como na versão americana, fórmula que fora seguida pela grande maioria dos candidatos.\n[…]\nBertha, até sua morte em 1999, fazia questão de que as pessoas cantassem a letra do jeito que escrevera, tal como no excerto abaixo:\n[…]\nO chamado Parabéns Crioulo ou Parabéns Gaúcho ou Parabéns Gaudério é uma versão regional da canção do Parabéns a Você, criada e utilizada no estado brasileiro do Rio Grande do Sul. A letra foi composta entre as décadas de 1950 e 1960 por Dimas Costa, poeta, radialista e folclorista brasileiro, e a música foi composta por Eleu Salvador, ator, compositor e dublador. \"É um refrão repetido 3x e duas declamações no meio\"."
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Kleenex",
      "descricao": "Marca de lenço de papel lançada nos Estados Unidos pela Kimberly-Clark em 1924."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O Kleenex nasceu do Cellucotton, material de celulose que, na Primeira Guerra Mundial, servia de filtro em quê?",
    "resposta": "Máscaras de gás",
    "distratores": [
      "Cantis de soldado",
      "Motores de avião",
      "Rádios de campanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Kleenex"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Kleenex",
        "situacao": "ok",
        "texto": "Kleenex is a brand name primarily known for its line of facial tissues. Often used informally as a genericized trademark for facial tissue, Kleenex is a registered trademark of Kimberly-Clark applied to products made in 78 countries. The brand also includes other paper products, such as napkins and toilet paper.\n[…]\nIn 1925, the first Kleenex ad appeared in magazines, promoting \"the new secret of keeping a pretty skin as used by famous movie stars\". A few years after the introduction of Kleenex, Cellucotton's head researcher tried to persuade the head of advertising to market the tissue for colds and hay fever. The administrator rejected the idea but then committed a small amount of ad space to mentioning the use of Kleenex tissue as a handkerchief.\n[…]\nThe original Kleenex trademark application at the United States Patent and Trademark Office (USPTO) was filed in the class of Medical, Beauty, & Agricultural Services by Cellucotton Products Company of Neenah, Wisconsin, on July 12, 1924. The description provided to the USPTO was \"absorbent pads or sheets for removing cold cream\".\n[…]\nIn the application, Cellucotton claimed that it had used the drawing and stylized word mark in commerce since June 12, 1924. The USPTO granted trademark registration on November 25, 1924. International Cellucotton Products Company officially assigned trademark interest and goodwill of the business to Kimberly-Clark Corporation on September 30, 1955. Kimberly-Clark Corporation of Neenah, Wisconsin, is the current registered owner of the Kleenex trademark.\n[…]\nMan of Steel, Woman of Kleenex\n[…]\nHenrich, Thomas; Batchelor, Bob (2004). Kotex, Kleenex, Huggies. Ohio State University Press. ISBN 0814209769.\n[…]\nKleenex History Timeline\n[…]\nGallery of vintage graphic design featuring Kleenex tissues"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kleenex",
        "situacao": "ok",
        "texto": "Kleenex é uma marca registrada mundialmente conhecida no ramo de lenços de papel (como lenços, papeis higiênicos, fraldas etc.) que pertence à empresa estadunidense Kimberly-Clark Worldwide, Inc.. Produtos da marca, que foi introduzida em 12 de junho de 1924, são oferecidos em mais de 130 países.\n[…]\nLogo https://logosmarcas.net/wp-content/uploads/2020/09/Kleenex-Logo.png",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Bluetooth",
      "descricao": "Padrão de comunicação sem fio de curto alcance entre aparelhos eletrônicos, criado nos anos noventa."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O símbolo do Bluetooth junta as iniciais do rei Haroldo Dente Azul, escritas em qual sistema de escrita antigo?",
    "resposta": "Runas nórdicas",
    "distratores": [
      "Alfabeto grego",
      "Alfabeto cirílico",
      "Hieróglifos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bluetooth"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth is a short-range wireless technology standard that is used for exchanging data between fixed and mobile devices over short distances and building personal area networks (PANs). In the most widely used mode, transmission power is limited to 2.5 milliwatts, giving it a very short range of up to 10 metres (33 ft). It employs UHF radio waves in the ISM bands, from 2.402 GHz to 2.48 GHz.\n[…]\nIn a single-mode implementation, only the low energy protocol stack is implemented. Dialog Semiconductor, STMicroelectronics, AMICCOM, CSR, Nordic Semiconductor and Texas Instruments have released single mode Bluetooth Low Energy solutions.\n[…]\nBluetooth Channel Sounding\n[…]\nAn overview of Bluetooth vulnerabilities exploits was published in 2007 by Andreas Becker.\n[…]\nBluetooth uses the radio frequency spectrum in the 2.402 GHz to 2.480 GHz range, which is non-ionizing radiation, of similar bandwidth to that used by wireless and mobile phones. No specific harm has been demonstrated, even though wireless transmission has been included by IARC in the possible carcinogen list. Maximum power output from a Bluetooth radio is 100 mW for Class 1, 2.5 mW for Class 2, and 1 mW for Class 3 devices.\n[…]\nThe Bluetooth Innovation World Cup, a marketing initiative of the Bluetooth Special Interest Group (SIG), was an international competition that encouraged the development of innovations for applications leveraging Bluetooth technology in sports, fitness and health care products. The competition aimed to stimulate new markets.\n[…]\nThe Bluetooth Innovation World Cup morphed into the Bluetooth Breakthrough Awards in 2013. Bluetooth SIG subsequently launched the Imagine Blue Award in 2016 at Bluetooth World. The Bluetooth Breakthrough Awards program highlights the most innovative products and applications available today, prototypes coming soon, and student-led projects in the making.\n[…]\nSpecifications at Bluetooth SIG"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Bluetooth",
        "situacao": "ok",
        "texto": "Bluetooth é um padrão de tecnologia sem fio de curto alcance usado para troca de dados entre dispositivos fixos e móveis em distâncias curtas e construção de redes de área pessoal (PANs). No modo mais utilizado, a potência de transmissão é limitada a 2,5 miliwatts, proporcionando um alcance muito curto de até 10 metros (33 pés). Emprega ondas de rádio UHF nas bandas ISM, de 2,402 GHz a 2,48 GHz.\n[…]\nBluetooth é a versão anglicizada do escandinavo Blåtand / Blåtann (ou em nórdico antigo blátǫnn). Era o epíteto do rei Harald Bluetooth, que uniu as diferentes tribos dinamarquesas em um único reino; Kardach escolheu o nome para sugerir que o Bluetooth une protocolos de comunicação de maneira semelhante.\n[…]\nO logotipo Bluetooth  é uma runa vinculada que mescla as runas Younger Futhark  (ᚼ, Hagall) e  (ᛒ, Bjarkan), as iniciais de Harald.\n[…]\nEm uma implementação de modo único, apenas a pilha de protocolos de baixa energia é implementada. Dialog Semiconductor, STMicroelectronics, AMICCOM, CSR, Nordic Semiconductor e Texas Instruments. lançaram soluções de baixa energia Bluetooth de modo único.\n[…]\nO vírus foi descrito pela primeira vez pela Kaspersky Lab e exige que os usuários confirmem a instalação de software desconhecido antes que ele possa se propagar. O vírus foi escrito como uma prova de conceito por um grupo de criadores de vírus conhecido como \"29A\" e enviado para grupos de antivírus. Portanto, deve ser considerado como uma ameaça de segurança potencial (mas não real) à tecnologia Bluetooth ou Symbian OS, pois o vírus nunca se espalhou fora desse sistema.\n[…]\nA Bluetooth Innovation World Cup, uma iniciativa de marketing do Bluetooth Special Interest Group (SIG), foi uma competição internacional que incentivou o desenvolvimento de inovações para aplicações que utilizam a tecnologia Bluetooth em produtos esportivos, fitness e de saúde. A competição visava estimular novos mercados.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Ampulheta",
      "descricao": "Instrumento de medir o tempo com dois bulbos de vidro ligados por um gargalo estreito, por onde escorre areia."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Nos navios antigos, marinheiros jogavam ao mar uma tábua presa a uma corda e cronometravam com uma ampulheta. Que unidade de velocidade nasceu disso?",
    "resposta": "Nó",
    "distratores": [
      "Milha náutica",
      "Légua",
      "Braça"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chip_log",
      "https://en.wikipedia.org/wiki/Knot_(unit)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chip_log",
        "situacao": "ok",
        "texto": "A chip log, also called common log, ship log, or just log, is a navigation tool mariners use to estimate the speed of a vessel through  water. The word knot, to mean nautical mile per hour, derives from this measurement method."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Knot_(unit)",
        "situacao": "ok",
        "texto": "The knot () is a unit of speed equal to one nautical mile per hour, exactly 1.852 km/h (approximately 1.151 mph or 0.514 m/s). The ISO standard symbol for the knot is kn. The same symbol is preferred by the Institute of Electrical and Electronics Engineers (IEEE), while kt is also common, especially in aviation, where it is the form recommended by the International Civil Aviation Organization (ICA\n[…]\nThe speeds of vehicles relative to the fluids in which they travel (boat speeds and air speeds) can be measured in knots. For consistency, the speeds of navigational fluids (ocean currents, tidal streams, river currents, and wind speeds) are also measured in knots. Thus, speed over the ground (SOG; ground speed (GS) in aircraft) and rate of progress towards a distant point (\"velocity made good\", VMG) can also be given in knots."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Barquinha_%28instrumento%29",
        "situacao": "ok",
        "texto": "A barquinha, ou barca, é um dos mais antigos aparelhos que se conhece destinados a medir a velocidade de um barco.\n[…]\nAtribui-se esta invenção ao português Bartolomeu Crescêncio, fins do séc.XV princípios do séc.XVI. Trata-se de um instrumento destinado a medir a velocidade de um barco. Um setor de madeira preso por um cabo que, marcado com nós espaçadamente, deixava-se correr por um determinado período de tempo. Daí o nome de nó atribuído à unidade de velocidade de uma embarcação.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Óculos escuros",
      "descricao": "Óculos com lentes escurecidas que protegem os olhos da luz forte do sol."
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Na China medieval, lentes de quartzo esfumaçado, ancestrais dos óculos escuros, eram usadas para esconder a expressão do rosto. Por quem?",
    "resposta": "Juízes",
    "distratores": [
      "Imperadores",
      "Monges",
      "Generais"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sunglasses"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sunglasses",
        "situacao": "ok",
        "texto": "Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes. They can sometimes also function as a visual aid, as variously termed spectacles or glasses exist, featuring lenses that are colored, polarized or darkened.\n[…]\nThe first sunglasses, made from flat panes of smoky quartz called Ai Tai (靉靆), meaning \"dark clouds,\" which offered no corrective powers but did protect the eyes from glare, were used in China in the 12th century or possibly earlier. Documents describe the use of such crystal sunglasses by judges in ancient Chinese courts to conceal their facial expressions while questioning witnesses.\n[…]\nAs of 2008, Xiamen, China, was the world's largest producer of sunglasses with its port exporting 120 million pairs each year."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%93culos_de_sol",
        "situacao": "ok",
        "texto": "Óculos de sol (ou óculos escuros) são acessórios que tem por finalidade proteger os olhos dos raios solares, tanto no verão quanto no inverno, pois nesta estação também há dias de luminosidade intensa, com raios que podem ser prejudiciais. As lentes dos óculos podem ser coloridas ou escuras, para diminuir a quantidade de luz que penetra nos olhos.\n[…]\nÓculos de sol feitos de vidros planos de quartzo esfumaçado, que não ofereciam poderes corretivos, mas protegiam os olhos do clarão, foram usados na China no século XII ou possivelmente antes. Documentos antigos descrevem o uso desses óculos de sol de cristal por juízes dos antigos tribunais chineses para ocultar suas expressões faciais enquanto interrogavam testemunhas.\n[…]\nJames Ayscough começou a experimentar lentes coloridas em óculos em meados do século XVIII, por volta de 1752. Estes não eram \"óculos de sol\", como esse termo é agora usado; Ayscough acreditava que o vidro azul ou verde poderia corrigir deficiências visuais específicas. A proteção dos raios do sol não era uma preocupação para ele. Uma das primeiras representações sobreviventes de uma pessoa usando óculos escuros é do cientista Antoine Lavoisier em 1772.\n[…]\nO uso de óculos escuros com lentes polarizadas é essencial para alguns profissionais, especialmente os que se expõe ao sol por muito tempo, como patrulheiros, guarda-vidas, construtores e trabalhadores de rodovias, porteiros de empresas em guaritas, policiais, viajantes e outros.\n[…]\n• Para rostos quadrados, as armações curvilíneas, redondas ou ovais são as mais recomendadas, assim como as lentes sem armação inferior, suavizando e definindo o rosto;\n[…]\n• Para rostos triangulares (rosto mais fino em cima do que embaixo), o ideal são óculos com armação superior estreita e lentes redondas ou ovais, como o modelo aviador;\n[…]\nÓculos de grau\n[…]\nÓculos de natação\n[…]\nÓculos de segurança",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Lâmpada incandescente",
      "descricao": "Lâmpada elétrica que produz luz aquecendo um filamento dentro de um bulbo de vidro."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Por volta de 1880, as lâmpadas de Thomas Edison passaram a usar um filamento carbonizado feito de qual planta?",
    "resposta": "Bambu",
    "distratores": [
      "Algodão",
      "Cânhamo",
      "Junco"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Incandescent_light_bulb"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Incandescent_light_bulb",
        "situacao": "ok",
        "texto": "An incandescent light bulb, also known as an incandescent lamp or incandescent light globe, is an electric light that produces illumination by Joule heating a filament until it glows. The filament is enclosed in a glass bulb that is either evacuated or filled with inert gas to protect the filament from oxidation. Electric current is supplied to the filament by terminals or wires embedded in the gl\n[…]\nIn 1845, American John W. Starr patented an incandescent light bulb using carbon filaments. His invention was never produced commercially.\n[…]\nThomas Edison began serious research into developing a practical incandescent lamp in 1878. Edison filed his first patent application for \"Improvement in Electric Lights\" on 14 October 1878. After many experiments, first with carbon in the early 1880s and then with platinum and other metals, in the end Edison returned to a carbon filament. The first successful test was on 22 October 1879, and lasted 13.5 hours.\n[…]\nOn 4 March 1880, just five months after Edison's light bulb, Alessandro Cruto developed a process to create thin carbon filaments by heating thin platinum filaments in the presence of gaseous ethyl alcohol to coat them with pure graphite, and then sublimating the platinum at high temperatures. In 1882 at the Munich Electrical Exhibition in Bavaria, Germany Cruto demonstrated bulbs that were more efficient than Edison's and produced a better, whiter light.\n[…]\nIn 1893, Heinrich Göbel claimed he had designed the first incandescent light bulb in 1854, with a thin carbonized bamboo filament of high resistance, platinum lead-in wires in an all-glass envelope, and a high vacuum. Judges of four courts raised doubts about the alleged Göbel anticipation, but there was never a decision in a final hearing due to the expiration of Edison's patent. Research work published in 2007 concluded that the story of the Göbel lamps in the 1850s is fictitious."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/L%C3%A2mpada_incandescente",
        "situacao": "ok",
        "texto": "A lâmpada incandescente é um dispositivo elétrico que transforma energia elétrica em energia luminosa e energia térmica através do efeito Joule. Dada a sua simplicidade, foi o primeiro dispositivo prático que permitiu utilizar eletricidade para iluminação, sendo durante as primeiras décadas de uso comercial da energia elétrica a principal forma de consumo daquela forma de energia.\n[…]\nOutros vinte e um inventores construíram lâmpadas incandescentes antes de Thomas Edison, que foi o primeiro a construir a primeira lâmpada incandescente comercializável em 1879, utilizando uma haste de carvão (carbono) muito fina que, aquecida acima de aproximadamente 900 K, passa a emitir luz, inicialmente bastante avermelhada e fraca, passando ao alaranjado e alcançando o amarelo, com uma intensidade luminosa bem maior, ao atingir sua temperatura final, próximo do ponto de fusão do carbono, que é de aproximadamente 3 800 K.\n[…]\nA lâmpada de filamento de bambu carbonizado foi a que teve melhor rendimento e durabilidade, sendo em seguida substituída pela de celulose, e finalmente a conhecida até hoje com filamento de tungsténio cuja temperatura de trabalho chega a 3 000 °C.\n[…]\nPor aproximadamente 26 anos, todas as lâmpadas incandescentes possuíam filamentos feitos de celulose carbonizada (papel, algodão ou bambu). As primeiras lâmpadas comerciais de Edison tinham os filamentos feitos de papel carbonizado que era muito frágil, mas em 1880 sua fábrica utilizava o bambu carbonizado, que produzia filamentos duros e fortes.\n[…]\nO Tungstênio leva vantagem sobre o carbono também no que diz respeito a resistência mecânica e ductilidade, o que permite a construção de filamentos mais finos, resistentes e baratos. Praticamente todas as lâmpadas incandescentes atuais utilizam filamentos de tungstênio trefilado e enrolados em forma de espiral, para diminuir as perdas de calor.\n[…]\nLâmpada photoflood",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Chiclete",
      "descricao": "Goma de mascar, cuja produção industrial moderna nos Estados Unidos começou com o chicle trazido do México."
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "O chicle, base dos primeiros chicletes industriais, é a seiva de qual árvore, que também dá uma fruta doce?",
    "resposta": "Sapotizeiro (sapoti)",
    "distratores": [
      "Seringueira",
      "Mangueira",
      "Cacaueiro"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Chicle",
      "https://pt.wikipedia.org/wiki/Sapoti"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Chicle",
        "situacao": "ok",
        "texto": "Chicle () is a latex traditionally used in making chewing gum and other products. It is collected from several species of Mesoamerican trees in the genus Manilkara, including M. zapota, M. chicle, M. staminodella, and M. bidentata.\n[…]\nThe word is used in the Americas and Spain to refer to chewing gum, chicle being a common term for it in Spanish and chiclete being the Portuguese term (both in Brazil and in parts of Portugal; other areas also use the term chicla). The word has also been exported to other languages such as Greek, which refers to chewing gum as τσίχλα (tsichla).\n[…]\nBoth the Aztecs and Maya traditionally chewed chicle. It was chewed as a way to stave off hunger, freshen breath, and keep teeth clean. Chicle was also used by the Maya as a filling for tooth cavities.\n[…]\nThe American Chicle Company, incorporated in June 1899, was the first prominent commercial user of this ingredient in the production of chewing gum. Its brand name, Chiclets, is derived from the word chicle.\n[…]\nIn response to a land reform law passed in Guatemala in 1952 which ended feudal work relations and expropriated unused lands and sold them to the indigenous and peasants, the William Wrigley Company discontinued buying Guatemalan chicle. Since it was the sole buyer of Guatemalan chicle, the government was pushed to create a massive aid program for growers.\n[…]\nBy the 1960s, most chewing gum companies had switched from using chicle to polybutadiene, which was cheaper to manufacture. Only a handful of small gum companies still use chicle, including Gud Gum, Glee Gum, Simply Gum, and Tree Hugger Gum."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Sapoti",
        "situacao": "ok",
        "texto": "O Sapotizeiro (Manilkara achras/Achras zapota) ou sapota (do náuatle tzapotl) é uma árvore da família Sapotaceae que produz um fruto comestível chamado sapoti ou sapota. É originário da América Central, desenvolvendo-se em regiões de clima subtropical da Ásia, América e Oceania. Na Índia, existem cerca de vinte variedades.\n[…]\nO fruto também contém fibras alimentares, glicose, frutose, sacarose, vitaminas, poliaminas, ácidos graxos e diversos fitoquímicos. Além disso, o sapoti é uma boa fonte de minerais, incluindo cálcio, potássio, cobre, zinco e ferro.\n[…]\nO sapoti contém um total de fibra alimentar de cerca de 5,3 g, e a extração de pectina da fruta depende principalmente da sua casca e epicarpo. O teor de proteína desempenha um papel importante na determinação da pureza da pectina extraída. A pectina do sapoti apresentou um baixo nível de proteína em diferentes valores de pH, de 1,71% a 4,04%; isso também influenciou as propriedades de geleificação da pectina.\n[…]\nDa mesma forma, as concentrações de manganês foram encontradas em níveis mais baixos, de aproximadamente 7,0 μg/g nas primeiras etapas do desenvolvimento da fruta, para um nível mínimo de 0,5 μg/g na fruta totalmente madura. No que diz respeito a outros minerais, o sapoti apresenta os maiores níveis de Fe, ou seja, 14,2 μg/g, seguido por Cu (1,7 μg/g), Mn (1,5 μg/g) e Zn (1,0 μg/g).\n[…]\nO sapoti é uma fruta rica em fitoquímicos com propriedades antioxidantes, como o ácido p-hidroxibenzoico, carotenoides como o β-caroteno, e compostos fenólicos como ácido gálico, catequina e quercetina. A casca do sapoti possui teores ainda mais elevados desses fitocompostos. Os extratos etanólicos apresentaram capacidade de inibir os radicais DPPH e ABTS, e também mostraram atividades anticolagenase e antielastase."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Ioiô",
      "descricao": "Brinquedo formado por dois discos unidos por um eixo, com um cordão enrolado que o faz subir e descer."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Nos anos vinte, o ioiô virou febre nos Estados Unidos graças a Pedro Flores, imigrante de qual país asiático?",
    "resposta": "Filipinas",
    "distratores": [
      "Japão",
      "China",
      "Indonésia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Yo-yo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Yo-yo",
        "situacao": "ok",
        "texto": "A yo-yo (also spelled yoyo) is a toy consisting of an axle connected to two disks, and a string is fastened around the axle, similar to a spool. It is an ancient toy documented since 440 BC. It was also called a bandalore in the 18th century.\n[…]\nIn 1928, Pedro Flores, a Filipino immigrant to the United States, opened the Yo-yo Manufacturing Company in Santa Barbara, California. The business started with a dozen handmade toys; by November 1929, Flores was operating two additional factories in Los Angeles and Hollywood, which all together employed 600 workers and produced 300,000 units daily.\n[…]\nThe principal distinction between the Filipino design popularized by Flores and the more traditional yo-yos is in the way the yo-yo is strung. In older (and some remaining inexpensive) yo-yo designs, the string is tied to the axle using a knot. With this technique, the yo-yo just goes back and forth; it returns easily, but it is impossible to make it sleep.\n[…]\nIn Flores's design, one continuous piece of string, double the desired length, is twisted around something to produce a loop at one end which is fitted around the axle. Also termed a looped slip-string, this seemingly minor modification allows for a far greater variety and sophistication of motion, thanks to increased stability and suspension of movement during free spin.\n[…]\nShortly thereafter (c. 1929), entrepreneur Donald F. Duncan recognized the potential of this new fad and purchased the Flores Yo-yo Corporation and all its assets, including the Flores name, which was transferred to the new company in 1932."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ioi%C3%B4",
        "situacao": "ok",
        "texto": "Ioiô (português brasileiro) ou ioió (português europeu) é um dos mais antigos brinquedos existentes. É constituído de dois discos, geralmente de plástico, mas podendo ser também de madeira ou metal, unidos no centro por um eixo no qual prende-se uma corda. Deixando-se cair o ioiô, de certo modo ele sobe com o impulso, e a corda se enrola; deverá outra vez cair e subir, sucessivamente, até que term\n[…]\nNão se sabe ao certo qual é a origem do Ioiô. Uns dizem ter sido na Grécia, outros na China ou até mesmo as Filipinas. O mais antigo ioiô encontrado data do ano 500 a.C. e era feito com discos de pele de terracota. Na Europa o ioiô começou a popularizar-se no final do século XVIII, principalmente em França e Inglaterra.\n[…]\nO ioiô, na sua forma atual, nasceu nas Filipinas, onde é até hoje um brinquedo muito popular. Foi só em 1928, no entanto, que o ioiô começou a se popularizar no resto do mundo, quando um filipino, Pedro Flores, levou o ioiô para os Estados Unidos e começou a comercializá-los. Pouco tempo depois, o empresário Donald F.\n[…]\nDuncan Sr., impressionado com a popularidade desse simples objeto, comprou a empresa de Pedro Flores, e a transformou na Duncan Company, que passaria a ser a responsável pela imensa popularização do ioiô nas décadas seguintes.\n[…]\nNo Brasil, o ioiô se popularizou nas décadas de 80 e 90 com o surgimento de diversas promoções, criadas por empresas de refrigerantes, mas só em 2002 é que se criou a Associação Brasileira de Ioiô, responsável por organizar campeonatos no país.\n[…]\nAs duas maneiras principais de fazer isso são (1), permitir que o ioiô fique na parte inferior da corda para relaxar ou (2) executar o laço ou OVNI para aliviar a tensão. Quando alguém decide encerrar o estado de \"sono\", basta sacudir o pulso e o ioiô \"pega\" a corda e rola de volta para a mão.\n[…]\nLoops são truques de ioiô que consistem no ioiô girando em torno da mão de arremesso.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Emoji",
      "descricao": "Pictogramas usados em mensagens digitais, surgidos nos celulares japoneses no fim dos anos noventa."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os emojis desenhados em 1999 por Shigetaka Kurita, para uma operadora de celular japonesa, entraram para o acervo de qual museu?",
    "resposta": "MoMA, de Nova York",
    "distratores": [
      "Louvre",
      "Museu Britânico",
      "Centro Pompidou"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Emoji"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Emoji",
        "situacao": "ok",
        "texto": "An emoji ( i-MOH-jee or  ee-MOH-jee; plural emoji or emojis; Japanese: 絵文字, pronounced [emoꜜ(d)ʑi]) is a pictogram, logogram, or ideogram embedded in text and used in electronic messages and web pages. The primary function of modern emoji is to fill in emotional cues otherwise missing from typed conversation as well as to replace words as part of a logographic system.\n[…]\nTheories about language replacement can be traced back to the 1960s, when Russian novelist and professor Vladimir Nabokov stated in an interview with The New York Times: \"I often think there should exist a special typographical sign for a smile — some sort of concave mark, a supine round bracket.\" It did not become a mainstream concept until the 1990s, when Japanese, American, and European companies began developing Fahlman's idea.\n[…]\nThe more well-known DoCoMo emoji set was created by Shigetaka Kurita in 1999 for NTT DoCoMo's i-mode, used on its mobile platform. They were intended to help facilitate electronic communication and to serve as a distinguishing feature from other services. According to interviews, he took inspiration from iconographic conventions in Japanese manga, as well as Chinese characters and street sign and weather pictograms.\n[…]\nThe DoCoMo i-Mode set included facial expressions, such as smiley faces, derived from a Japanese visual style commonly found in manga and anime, combined with kaomoji and smiley elements. Kurita's work is displayed in the Museum of Modern Art in New York City.\n[…]\nIn October 2016, the Museum of Modern Art acquired the original collection of emoji distributed by NTT DoCoMo in 1999.\n[…]\nList of emojis\n[…]\nHouston, Keith (2025). Face with Tears of Joy: A Natural History of Emoji (First (trade paperback) ed.). New York: W. W. Norton & Company. ISBN 978-1-324-07514-1. OCLC 1455397262.\n[…]\nEmojipedia – an online encyclopedia of emoji and their branded variations"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Emoji",
        "situacao": "ok",
        "texto": "Emoji (絵文字, lit. pictograma) é uma palavra derivada da junção dos seguintes termos em japonês: e (絵, \"imagem\") + moji (文字, \"letra\"). Com origem no Japão, os emojis são ideogramas e smileys usados em mensagens eletrônicas e páginas web, cujo uso está se popularizando para além do país. Eles existem em diversos gêneros, incluindo: expressões faciais, objetos, lugares, animais e tipos de clima.\n[…]\nO primeiro emoji foi criado em 1998 ou 1999 no Japão por Shigetaka Kurita, que integrava a equipa da NTT DoCoMo responsável pelo desenvolvimento da i-mode, uma plataforma de Internet móvel. O primeiro conjunto de 172 emojis de 12×12 pixels foi criado como parte das funcionalidades de mensagens da i-mode para facilitar a comunicação eletrónica e funcionar como uma característica distintiva de outros serviços.\n[…]\nDurante anos, as operadoras japonesas usaram esquemas de codificação incompatíveis (Shift JIS), causando “mojibake” (texto corrompido) quando ícones eram enviados entre redes diferentes. A transição para um padrão global começou em 2006, quando o Google mapeou emojis japoneses em códigos Unicode privados para expandir o Gmail no Japão. Em 2007, Google e Apple apresentaram uma proposta formal ao Consórcio Unicode para incluir emojis no padrão internacional.\n[…]\nA maturidade dos emojis chegou ao tribunal em 2023, quando um juiz canadense decidiu que um emoji de “polegar para cima” (👍) poderia constituir uma aceitação válida dos termos contratuais, resultando em uma indenização por danos de US$ 82.000 (CAD). Olhando para o futuro, o cenário está mudando em direção à personalização por meio de “Genmojis” e adesivos gerados por IA, confundindo a linha entre personagens padronizados e expressão visual de forma livre.\n[…]\nUma lista com significado dos emoji\n[…]\nConstrutor de emojis\n[…]\nEmojis mais populares\n[…]\nEmojis para Copiar",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Dia do Trabalho",
      "descricao": "Data comemorativa de primeiro de maio que homenageia os trabalhadores, feriado no Brasil."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Dia do Trabalho, em primeiro de maio, lembra greves e uma revolta de operários ocorridas em 1886 em qual cidade americana?",
    "resposta": "Chicago",
    "distratores": [
      "Nova York",
      "Detroit",
      "Filadélfia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Dia_do_Trabalhador",
      "https://en.wikipedia.org/wiki/Haymarket_affair"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Dia_do_Trabalhador",
        "situacao": "ok",
        "texto": "Dia do Trabalhador, Dia Internacional do Trabalhador ou Primeiro de Maio é uma data comemorativa internacional, dedicada aos trabalhadores, celebrada anualmente no dia 1 de maio em diversos países, sendo feriado em alguns deles.\n[…]\nA homenagem remonta ao dia 1 de maio de 1886, quando uma greve foi iniciada na cidade norte-americana de Chicago com o objetivo de conquistar melhores condições de trabalho, melhorias e benefícios aos trabalhadores, principalmente a redução da jornada de trabalho diária, que chegava a 17 horas, para oito horas. Durante a manifestação houve confrontos, o que resultou em prisões e mortes de trabalhadores inocentes.\n[…]\nEm Chicago, a greve atingiu várias empresas. No dia 3 de maio, durante uma manifestação, grevistas da fábrica McCormick sairam em perseguição dos indivíduos contratados pela empresa para furar a greve. São recebidos pelos detetives da agência Pinkerton e policias armados de espingardas. O confronto resultou em três trabalhadores mortos.\n[…]\nNo dia 20 de junho de 1889, a segunda Internacional Socialista, reunida em Paris, decidiu convocar anualmente uma manifestação, com o objetivo de lutar pela jornada de 8 horas de trabalho. A data escolhida foi o primeiro dia de maio, como homenagem às lutas sindicais de Chicago. Em 1 de maio de 1891, uma manifestação no norte de França foi dispersada pela polícia, resultando na morte de dez manifestantes.\n[…]\nCom a chegada de imigrantes europeus no Brasil, as ideias de luta pelos direitos dos trabalhadores vieram junto. Em 1917, houve uma Greve geral. Com o crescimento do operariado, o dia 1 de maio foi declarado feriado pelo presidente Artur Bernardes, em 1925.\n[…]\nNa Austrália o Dia do Trabalho varia de acordo com a região;"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Haymarket_affair",
        "situacao": "ok",
        "texto": "The Haymarket affair was a bombing that took place at a labor demonstration on May 4, 1886, at Haymarket Square in Chicago. The rally began peacefully in support of workers striking for an eight-hour work day; it was held the day after a May 3 rally at a McCormick Harvesting Machine Company plant on the West Side of Chicago, during which police killed two strikers by opening fire at the crowd as i\n[…]\nHistorian Nathan Fine points out that trade-union activities continued to show signs of growth and vitality, culminating later in 1886 with the establishment of the Labor Party of Chicago.\n[…]\nand the foreign born Germans, Bohemians, and Scandinavians, all got together for the first time on the political field in the summer following the Haymarket Affair. ... The Knights of Labor doubled its membership, reaching 40,000 in the fall of 1886. On Labor Day the number of Chicago workers in parade led the country.\n[…]\nIn his book about the Haymarket Affair, historian James Green wrote, \"No other event in American history has exerted such a hold on the imaginations of people in other lands, especially on the minds of working people in Europe and the Latin world, where the 'martyrs of Chicago' were annually recalled in the iconography of May Day.\"\n[…]\nLum, Dyer (2005) [1887]. A Concise History of the Great Trial of the Chicago Anarchists in 1886. Adamant Media Corporation. ISBN 978-1-4021-6287-9.\n[…]\nMcLean, George N. (1890). The Rise and Fall of Anarchy in America. Chicago: R.G. Badoux & Co.\n[…]\nParsons, Lucy (1889). Life of Albert R. Parsons : with brief history of the labor movement in America. Chicago: L. E. Parsons.\n[…]\nThe Dramas of Haymarket, Chicago Historical Society\n[…]\n1886: The Haymarket Martyrs and Mayday, Libcom\n[…]\nHaymarket Martyrs' Monument, Graveyards of Chicago\n[…]\nChicago Anarchists on Trial: Evidence from the Haymarket Affair 1886–1887, American Memory, Library of Congress"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Papai Noel",
      "descricao": "Personagem natalino de barba branca e roupa vermelha que traz presentes, inspirado em São Nicolau."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O Papai Noel se inspira em São Nicolau, bispo do século quatro na cidade de Mira. Em que país essa cidade fica hoje?",
    "resposta": "Turquia",
    "distratores": [
      "Grécia",
      "Itália",
      "Rússia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Nicolau_de_Mira",
      "https://en.wikipedia.org/wiki/Saint_Nicholas"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Nicolau_de_Mira",
        "situacao": "ok",
        "texto": "São Nicolau de Mira, também conhecido como São Nicolau de Bari (Patara, c. 270 – Mira, 6 de dezembro de 343), foi um bispo cristão grego da Ásia Menor, venerado como santo pela Igreja Católica e pela Igreja Ortodoxa. É um dos santos mais populares da cristandade e tornou-se, ao longo dos séculos, símbolo de caridade, especialmente para com os pobres e as crianças.\n[…]\nSão Nicolau era de ascendência grega e nasceu em Patara, na região da Lícia, então parte do Império Romano (atual Turquia), na segunda metade do século III. Viveu num período marcado pelas perseguições aos cristãos e pelas grandes disputas doutrinais que moldaram os primeiros séculos da Igreja.\n[…]\nNicolau tornou-se bispo de Mira, destacando-se pelo zelo pastoral, pela defesa da fé cristã e pela caridade concreta. Durante a perseguição promovida pelo imperador Diocleciano, foi preso por se recusar a renegar a sua fé em Jesus Cristo.\n[…]\nNa cidade de Bari, na Itália, onde se acredita estarem sepultados os seus restos mortais, São Nicolau é padroeiro dos coroinhas e objeto de profunda devoção popular.\n[…]\nSéculos após a sua morte, a figura de São Nicolau inspirou o personagem natalino conhecido como Papai Noel (português brasileiro) ou Pai Natal (português europeu), Santa Claus (nos países anglófonos) e Sinterklaas (na Holanda). É representado por um velhinho corado de barba branca, que traz um saco de presentes e percorre o mundo sendo levado em um trenó por renas voadoras.\n[…]\nEm 1691 foi fundada a Irmandade de São Nicolau, composta por estudantes, e até hoje realizam-se as Festas Nicolinas, uma das mais antigas celebrações académicas do mundo. As festividades decorrem entre 29 de novembro e 6 de dezembro, tendo como ponto alto as Maçãzinhas, tradição inspirada no auxílio prestado por São Nicolau às jovens pobres.\n[…]\nFesta de São Nicolau\n[…]\nPapai Noel\n[…]\nSão Nicolau, verdadeiro Papai Noel"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Saint_Nicholas",
        "situacao": "ok",
        "texto": "Saint Nicholas of Myra (traditionally 15 March 270 – 6 December 343), also known as Nicholas of Bari, was an early Christian bishop of Greek descent from the maritime city of Patara in Anatolia (in modern-day Antalya Province, Turkey) during the time of the Roman Empire. Because of the many miracles attributed to his intercession, he is also known as Nicholas the Wonderworker.\n[…]\nSaint Nicholas is the patron saint of sailors, merchants, archers, repentant thieves, children, brewers, pawnbrokers, toymakers, unmarried people, and students in various cities and countries around Europe. His reputation evolved among the pious, as was common for early Christian saints, and his legendary habit of secret gift-giving gave rise to the folklore of Santa Claus (\"Saint Nick\") through Sinterklaas.\n[…]\nA solemn bronze statue of the saint by Russian sculptor Gregory Pototsky was donated by the Russian government in 2000 and given a prominent place in the square in front of the medieval Church of St Nicholas. In 2005, Mayor Süleyman Topçu had the statue replaced with a red-suited plastic Santa Claus because he wanted an image more recognisable to foreign visitors.\n[…]\nSanta Claus evolved from Dutch traditions regarding Saint Nicholas (Sinterklaas). When the Dutch established the colony of New Amsterdam, they brought the legend and traditions of Sinterklaas with them. Howard G. Hageman, of New Brunswick Theological Seminary, maintains that the tradition of celebrating Sinterklaas in New York existed in the early settlements of the Hudson Valley, although by the early nineteenth century had fallen by the way. St. Nicholas Avenue and St.\n[…]\nThe History of Santa Claus and Father Christmas"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Dia das Mães",
      "descricao": "Data comemorativa em homenagem às mães, celebrada no Brasil no segundo domingo de maio."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Que americana criou o Dia das Mães, em 1908, em memória da própria mãe, e depois lutou contra o comércio em torno da data?",
    "resposta": "Anna Jarvis",
    "distratores": [
      "Eleanor Roosevelt",
      "Clara Barton",
      "Harriet Beecher Stowe"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Anna_Jarvis"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Anna_Jarvis",
        "situacao": "ok",
        "texto": "Anna Maria Jarvis (May 1, 1864 – November 24, 1948) was the founder of Mother's Day in the United States. Her mother had frequently expressed a desire to establish such a holiday, and after her mother's death, Jarvis led the movement for the commemoration. However, as the years passed, Jarvis grew disenchanted with the growing commercialization of the observation and even attempted to have Mother'\n[…]\nIt was during one of her Sunday school lessons in 1876 that her daughter, Anna Jarvis, allegedly found her inspiration for Mother's Day, as Ann closed her lesson with a prayer, stating:I hope and pray that someone, sometime, will found a memorial mothers day commemorating her for the matchless service she renders to humanity in every field of life. She is entitled to it.\n[…]\nIn the ensuing years, Anna Jarvis embarked upon a campaign to make \"Mother's Day\" a recognized holiday. She spent a significant amount of time writing to countless business executives, church groups, and politicians at the state and national level to promote the commemorative day.\n[…]\nJarvis died on November 24, 1948, and was buried next to her mother, sister, and brother at West Laurel Hill Cemetery in Bala Cynwyd, Pennsylvania. Although the Anna M.\n[…]\nAnatolini, Katherine Lane (2009). Memorializing Motherhood: Anna Jarvis and the Struggle for Control of Mother's Day (PhD Diss). West Virginia University. ISBN 978-1-124-17972-8. OCLC 610042090. ProQuest 748312352.\n[…]\nWest Virginia & Regional History Center at West Virginia University, Anna Jarvis, Papers\n[…]\nAnna Jarvis and Mother's Day\n[…]\nAnna Jarvis, the Germanna Descendant who Founded Mother's Day\n[…]\nAnna Jarvis and International Mother's Day Archived November 27, 2019, at the Wayback Machine\n[…]\nAnna Prior Jarvis diary and autobiography, MSS SC 2697, transcription here; L. Tom Perry Special Collections, Harold B. Lee Library, Brigham Young University"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anna_Jarvis",
        "situacao": "ok",
        "texto": "Anna Maria Jarvis (Webster, 1 de maio de 1864 – West Chester, 24 de novembro de 1948) foi uma ativista social norte-americana, conhecida como a idealizadora do Dia das Mães nos Estados Unidos.\n[…]\nSua mãe expressava frequentemente o desejo de estabelecer tal feriado e, após a morte de sua mãe, Jarvis liderou o movimento para a estabelecer a data da comemoração. No entanto, com o passar dos anos, Jarvis ficou desencantada com a crescente comercialização da data e até tentou destituir o Dia das Mães. No início da década de 1940, Anna ficou doente e foi internada em um sanatório por amigos, onde morreu em 24 de novembro de 1948.\n[…]\nAnna Jarvis idealizou a celebração do Dia das Mães em homenagem à sua própria mãe, Ann Reeves Jarvis. Quando menina, ela disse ter sido inspirada por uma oração que certa vez ouviu sua mãe fazer. “Espero e rezo para que alguém, algum dia, encontre um memorial no Dia das Mães em homenagem a seu serviço incomparável prestado à humanidade em todas as áreas da vida”, Anna lembrou-se de sua mãe ter dito.\n[…]\nAnna passava boa parte de seu tempo cuidando da mãe, conforme sua saúde piorava e Ann Reeves morreu em 9 de maio de 1905.\n[…]\nNo entanto, seus esforços para manter o significado original do dia levaram a suas próprias dificuldades econômicas. Enquanto outros lucraram com o dia, Anna Jarvis não, e ela passou os últimos anos de sua vida com sua irmã Lillie. Em 1943, ela começou a organizar uma petição para rescindir o Dia das Mães em todo território nacional.\n[…]\nAnatolini, Katherine Lane (2009). Memorializing Motherhood: Anna Jarvis and the Struggle for Control of Mother's Day. [S.l.]: West Virginia University. ISBN 978-1-124-17972-8",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Panela de pressão",
      "descricao": "Panela vedada que cozinha alimentos sob pressão de vapor acima da atmosférica."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1679, que físico francês apresentou em Londres o digestor a vapor, uma panela vedada considerada a ancestral da panela de pressão?",
    "resposta": "Denis Papin",
    "distratores": [
      "Blaise Pascal",
      "Antoine Lavoisier",
      "Nicolas Appert"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Denis_Papin",
      "https://en.wikipedia.org/wiki/Pressure_cooking"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Denis_Papin",
        "situacao": "ok",
        "texto": "Denis Papin FRS (French pronunciation: [dəni papɛ̃]; 22 August 1647 – 26 August 1713) was a French Huguenot physicist, mathematician and inventor, best known for his pioneering invention of the steam digester, the forerunner of the pressure cooker, the steam engine, the centrifugal pump, and a submersible boat.\n[…]\nDue to increasing repression on the Huguenots in France, he first visited London in 1675, where he worked with Robert Boyle from 1676 to 1679, publishing an account of his work in Continuation of New Experiments (1680). During this period, Papin invented the steam digester, a type of pressure cooker with a safety valve. He first addressed the Royal Society in 1679 on the subject of his digester, and remained mostly in London.\n[…]\nBoulevard Denis Papin in Carcassonne is named after him as well as a street in Saint-Michel, Montreal. There is also a statue of Papin with his invention in Blois, at the top of the Escalier Denis Papin, a stairway.\n[…]\nPorezag, Karsten (August 2020). \"Denis Papin (1647-1713) in Marburg und Kassel - Erfinder des Prinzips der atmosphärischen Kolbendampfmaschine und des Dampfschiff-Antriebes\" [Denis Papin (1647-1713) in Marburg and Kassel - inventor of the principle of the atmospheric piston steam engine and the steamship propulsion]. Hessische Heimat, Zeitschrift für Kunst, Kultur und Denkmalpflege [Hessian homeland] (in German) (1/2 ed.). Gesellschaft für Kultur- und Denkmalpflege. ISSN 0178-3173.\n[…]\nQuotations related to Denis Papin at Wikiquote\n[…]\nMedia related to Denis Papin at Wikimedia Commons\n[…]\nO'Connor, John J.; Robertson, Edmund F., \"Denis Papin\", MacTutor History of Mathematics Archive, University of St Andrews\n[…]\nWorks by or about Denis Papin at Wikisource\n[…]\nWorks by Denis Papin at Project Gutenberg\n[…]\nWorks by Denis Papin at Open Library"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Pressure_cooking",
        "situacao": "ok",
        "texto": "A pressure cooker is a sealed vessel used for cooking food with the use of high pressure steam and water or a water-based liquid, in a process called pressure cooking. The high pressure limits boiling and permits cooking at higher temperatures, allowing food to be cooked faster than at normal pressure.\n[…]\nThe prototype of the modern pressure cooker was the steam digester invented in the seventeenth century by the physicist Denis Papin. It works by expelling air from the vessel and trapping steam produced from the boiling liquid. This is used to raise the internal pressure to one atmosphere above ambient and gives higher cooking temperatures between 100–121 °C (212–250 °F).\n[…]\nIn 1679, French physicist Denis Papin, better known for his studies on steam, invented the steam digester in an attempt to reduce the cooking time of food. His airtight cooker used steam pressure to raise the water's boiling point, thus cooking food quicker. In 1681 Papin presented his invention to the Royal Society of London as a scientific study; he was later elected as a member.\n[…]\nHaving crossed the Peuquenes [Piuquenes], we descended into a mountainous country, intermediate between the two main ranges, and then took up our quarters for the night. We were now in the republic of Mendoza. The elevation was probably not under 11,000 feet (3,400 m) [...]. At the place where we slept water necessarily boiled, from the diminished pressure of the atmosphere, at a lower temperature than it does in a less lofty country; the case being the converse of that of a Papin's digester.\n[…]\nPressure cookers are considerably more expensive than conventional saucepans of the same size."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Denis_Papin",
        "situacao": "ok",
        "texto": "Denis Papin (Blois, 22 de agosto de 1647 — Londres (?) 1712) foi um físico e inventor francês.\n[…]\nDenis Papin foi o inventor da célebre Marmita de Papin (máquina a vapor), apresentada em 1679, que precedeu a invenção do autoclave e da panela de pressão.\n[…]\nMembro da sociedade real de ciências da Inglaterra, preparou um jantar com uma panela diferente, fechada, para impressionar seus futuros colegas. Papin sabia do perigo de aquecer água em um recipiente fechado, pois a força exercida pelo vapor aquecido poderia explodir o recipiente. Por isso, criou uma válvula de segurança, que permitia o escape de parte desse vapor, evitando que a pressão passasse de certo valor limite.\n[…]\nEra um sistema rudimentar, mas serviu de modelo para as panelas de pressão utilizadas atualmente.\n[…]\nNouvelle manière pour lever l'eau par la force du feu ... par m. D. Papin. A Cassel: pour Jacob Estienne libraire de la cour : par Jean Gaspard Voguel imprimeur. 1707",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Papel",
      "descricao": "Material fino feito de fibras vegetais prensadas, usado para escrever, imprimir e embalar, desenvolvido na China antiga."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Por volta do ano cento e cinco, que funcionário da corte chinesa é tradicionalmente creditado por criar o processo de fabricação do papel?",
    "resposta": "Cai Lun",
    "distratores": [
      "Confúcio",
      "Sun Tzu",
      "Lao-Tsé"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cai_Lun",
      "https://en.wikipedia.org/wiki/Cai_Lun"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun foi um alto funcionário da corte imperial, na dinastia Han, que inventou o papel a partir de casca de amoreira e fibra de bambu, no ano 105.\n[…]\nNa China é tradicionalmente considerado o inventor do papel, pois sob sua administração foi aperfeiçoada a técnica de fabricação do material utilizado para a escrita de documentos, que passou a ter propriedades semelhantes às do papel atual, bem diferentes do papiro e do pergaminho usados ​​antigamente.\n[…]\nEmbora as primeiras formas de papel existissem na China a partir do século II a.C., ele foi responsável pela primeira melhoria e padronização significativa da fabricação de papel, adicionando novos materiais essenciais à sua composição. Segundo as crônicas históricas chinesas, a invenção do papel teria ocorrido no ano 105 d.C.\n[…]\nConsidera-se que as melhorias de Cai na fabricação de papel tiveram um enorme impacto na história humana, e daqueles que criaram as Quatro Grandes Invenções da China - a bússola, a pólvora, a fabricação de papel e a impressão - Cai é o único inventor cujo nome é conhecido. Embora na China ele seja reverenciado no culto aos ancestrais, deificado como o deus da fabricação de papel e apareça no folclore chinês, ele é praticamente desconhecido fora do leste da Ásia.\n[…]\nSua cidade natal em Leiyang continua sendo um centro ativo de produção de papel.==Referências=="
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cai_Lun",
        "situacao": "ok",
        "texto": "Cai Lun (Chinese: 蔡伦; courtesy name: Jingzhong (敬仲); c. 50–62 – 121 CE), formerly romanized as Ts'ai Lun, was a Chinese eunuch court official of the Eastern Han dynasty. He occupies a pivotal place in the history of paper due to his addition of pulp via tree bark and hemp ends which resulted in the large-scale manufacture and worldwide spread of paper.\n[…]\nDue to modern archeological investigations, it is now certain that different forms of paper existed in China as early as 3rd-century BCE, though the findings do not necessarily discount the credit given to Cai. The Chinese scholar Tsien Tsuen-hsuin explained that the term used in Cai's ancient biography, zào yì (造意), can be understood as \"to initiate the idea\", meaning that he furthered the ongoing process with the addition of important materials.\n[…]\nCai's improvements to paper and the papermaking process are considered especially impactful to human history, as they resulted in the spread of literature and knowledge around the world, and advancements in communications. However, Cai is only somewhat known outside East Asia and is often excluded from major encyclopedias.\n[…]\nAccording to legend, the Buddhist monk Damjing brought the process to Japan, though this is unconfirmed. Damjing occupies a similar patron saint position in Japan that Cai does in China. By the 600s the process appeared in Turkestan, Korea, and India, while Chinese prisoners from the Battle of Talas spread the knowledge to Arabs in the Abbasid Caliphate.\n[…]\nUnlike many Chinese inventions that were created independently in Western Europe, the modern papermaking process was a wholly Chinese product and gradually spread via the Arabs to Europe, where it also saw widespread manufacturing by the 12th century. On 2 August 2010, the International Astronomical Union honored Cai's legacy by naming a crater on the Moon after him."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Presépio",
      "descricao": "Representação do nascimento de Jesus com figuras da Sagrada Família, pastores e animais, montada no Natal."
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1223, na vila italiana de Greccio, que santo montou uma encenação do nascimento de Jesus que popularizou o presépio?",
    "resposta": "São Francisco de Assis",
    "distratores": [
      "Santo Antônio",
      "São Bento",
      "São Nicolau"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pres%C3%A9pio",
      "https://en.wikipedia.org/wiki/Nativity_scene"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pres%C3%A9pio",
        "situacao": "ok",
        "texto": "Na tradição cristã, um presépio é a exibição especial, particularmente durante a época natalícia, de objetos de arte que representam o nascimento de Jesus. Embora o termo possa ser usado para qualquer representação do tema muito comum da Natividade de Jesus na arte, ele tem um sentido mais especializado referindo-se a exibições sazonais, em particular conjuntos de figuras esculturais individuais e\n[…]\nO primeiro presépio vivo, atribuído a São Francisco de Assis, surgiu em 1223 na cidade italiana de Greccio. Francisco teria se inspirado em sua visita à Terra Santa, onde lhe foi mostrado o local tradicional do nascimento de Jesus.\n[…]\nO primeiro presépio sazonal, que parece ter sido uma representação dramática em vez de escultural, é atribuído a São Francisco de Assis. Sua criação é descrita por São Boaventura em sua Vida de São Francisco de Assis c. 1260.\n[…]\nA popularidade dos presépios inspirou muitas imitações em todos os países cristãos e, no início da era moderna, presépios esculpidos, muitas vezes exportados da Itália, foram instalados em muitas igrejas e casas cristãs. Essas cenas elaboradas atingiram seu apogeu artístico no Estado Papal, na Emília, no Reino de Nápoles e em Gênova.\n[…]\nPara os cristãos morávios, o presépio serve para celebrar \"a história da maravilha do nascimento de Cristo para que o Filho de Deus possa ser acolhido nos corações dos lares no Natal\". No final do século XIX, os presépios tornaram-se muito populares em muitas denominações cristãs, e muitas versões em vários tamanhos e feitas de vários materiais, como terracota, papel, madeira, cera e marfim, foram comercializadas, muitas vezes com um cenário de fundo de um estábulo.\n[…]\nGruta ou Curral: É o local simbolizado pelo presépio. O curral era onde se guardava o gado. Por isso, no presépio, o Menino Jesus fica sobre palhas, numa manjedoura.\n[…]\nPresépio do Pipiripau\n[…]\nMedia relacionados com Presépio no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Nativity_scene",
        "situacao": "ok",
        "texto": "In the Christian tradition, a nativity scene, also known as a manger scene, crib or crèche ( or , from French; in Italian presepio or presepe; in some other languages also called a \"Bethlehem\") is the special exhibition, particularly during Christmastide, of art objects representing the birth of Jesus Christ.\n[…]\nThe first nativity scene featuring live actors was organized by Francis of Assisi in 1223 in the Italian town of Greccio. Francis had been inspired by his visit to the Holy Land, where he had been shown the Grotto of the Nativity.\n[…]\nThe first seasonal nativity scene, which seems to have been a dramatic rather than sculptural rendition, is attributed to Saint Francis of Assisi. Its creation is described by Saint Bonaventure in his Life of Saint Francis of Assisi c. 1260.\n[…]\nSaint Francis' manger scene is said to have been enacted at Christmas 1223 in a cave near the Sanctuary of Greccio in the Central Italy town of Greccio. The very small chapel where it is said to have taken place survives. The painting over its altar, and others before 1400, by Giotto at the Assisi Lower Church, and by Antonio Vite in Pistoia, depict Saint Francis kneeling and placing a small baby into a chest-like manger. Giotto adds a miniature ox and ass.\n[…]\nWithin the realm of legend, there is speculation that it was in San Cristóbal de La Laguna, Tenerife, where a nativity scene was first publicly displayed in a private home in Spain. Likewise, the Tenerifean saint Peter of Betancur, a Franciscan and founder of the Bethlehemite Brothers in the 17th century, is credited with being one of the main precursors of nativity scene design in the American lands discovered by the Spanish.\n[…]\nThis is precisely one of the reasons why this saint is often called the \"Saint Francis of Assisi of the Americas\"."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Lego",
      "descricao": "Marca dinamarquesa de brinquedos de blocos de montar plásticos."
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O tijolinho de Lego com tubos por dentro, que permite encaixar as peças com firmeza, foi patenteado em que ano?",
    "resposta": "1958",
    "distratores": [
      "1949",
      "1963",
      "1972"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lego"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lego",
        "situacao": "ok",
        "texto": "Lego ( , LEG-oh; Danish: [ˈle̝ːko]) is a brand of plastic construction toys manufactured by the Lego Group, a privately held company based in Billund, Denmark. Lego consists of variously coloured interlocking plastic bricks made of acrylonitrile butadiene styrene (ABS) that accompany an array of gears, figurines called minifigures, and various other parts. Its pieces can be assembled and connected\n[…]\nThe Lego Group began in the workshop of Ole Kirk Christiansen (1891–1958), a carpenter from Billund, Denmark, who began making wooden toys in 1932. In 1934, his company came to be called \"Lego\", derived from the Danish phrase leg godt [lɑjˀ ˈkʌt], which means 'play well'. In 1947, Lego expanded to begin producing plastic toys. In 1949, the business began producing an early version of the now familiar interlocking bricks, calling them \"Automatic Binding Bricks\".\n[…]\nIn 1958, the modern brick design was developed; ABS subsequently replaced cellulose acetate as the manufacturing material five years later. A patent application for the modern Lego brick design was filed in Denmark on 28 January 1958 and in various other countries in the subsequent few years.\n[…]\nLego pieces of all varieties constitute a universal system. Despite there being variations in the design and the purposes of individual pieces over the years, each remains compatible in some way with existing pieces. Lego bricks from 1958 still interlock with those made presently, and Lego sets for young children are compatible with those made for teenagers. Six bricks of 2 × 4 studs can be combined in 915,103,765 ways.\n[…]\nWiencek, Henry (1987). The World of LEGO Toys. New York: Harry N. Abrams, Inc., Publishers. ISBN 0-8109-2362-9.\n[…]\nPilegaard, Ulrik; Dooley, Mike (2007). Forbidden LEGO. San Francisco: No Starch Press. ISBN 978-1-59327-137-4.\n[…]\nMedia related to Lego at Wikimedia Commons\n[…]\nLego sets guide and database"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Lego",
        "situacao": "ok",
        "texto": "Lego ([ˈlɛɡu], Dinamarquês: [ˈle̝ːko]; estilizado como LEGO) é uma linha de brinquedos de construção de plástico fabricados pelo The Lego Group, uma empresa privada com sede em Billund, Dinamarca. Lego consiste em blocos de plástico interligados de várias cores, feitos de acrilonitrila butadieno estireno (ABS), que acompanham uma série de engrenagens, bonecos chamados minifiguras e diversas outras\n[…]\nSuas peças podem ser montadas e conectadas de diversas maneiras para construir objetos, incluindo veículos, edifícios e robôs funcionais. Modelos de Lego montados podem ser desmontados e suas peças podem ser reutilizadas para criar novas construções.\n[…]\nO The Lego Group iniciou a fabricação dos blocos de brinquedo com encaixe em 1949. A moldagem é feita na Dinamarca, Hungria, México e China. A decoração e a embalagem dos blocos são feitas em fábricas nos três primeiros países e na República Tcheca. A produção anual média desses blocos é de aproximadamente 36 bilhões, ou cerca de 1.140 peças por segundo. Uma das maiores empresas da Europa, Lego é a maior fabricante de brinquedos do mundo em vendas.\n[…]\nAté julho de 2015, 600 bilhões de peças de Lego haviam sido produzidas.\n[…]\nOs produtos LEGO encontram-se hoje em massa nos grandes institutos de educação nos países desenvolvidos, desde a pré-escola, onde as linhas tradicionais do grupo divertem as crianças e estimulam a sua concentração e criatividade, até à universidade, onde linhas tecnológicas como a LEGO Technic e a LEGO Mindstorms permitem aos estudantes aperfeiçoarem-se em design, robótica e mecatrônica.\n[…]\nFIRST LEGO League Campeonato da LEGO de Robótica\n[…]\nViolência e Lego\n[…]\nHistória do Lego\n[…]\nPatente estadunidense do Lego\n[…]\n(em inglês) LEGO\n[…]\n(em inglês) LEGO BIONICLE\n[…]\n(em inglês) LEGO CLICKITS\n[…]\n(em inglês) LEGO EXO-FORCE\n[…]\n(em inglês) LEGO MINDSTORMS",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Folha A4",
      "descricao": "Formato de papel do padrão internacional ISO 216, obtido dividindo a folha A0 ao meio sucessivamente."
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Entre estes formatos de papel, qual tem exatamente o dobro do tamanho de uma folha A4?",
    "resposta": "A3",
    "distratores": [
      "A5",
      "A2",
      "Ofício"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/ISO_216"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/ISO_216",
        "situacao": "ok",
        "texto": "ISO 216 is an international standard for paper sizes, used around the world except in North America, the Philippines and parts of Latin America. The standard defines the \"A\", \"B\" and \"C\" series of paper sizes, which includes A4, the most commonly available paper size worldwide. Two supplementary standards, ISO 217 and ISO 269, define related paper sizes.\n[…]\nThe C series formats are geometric means between the B series and A series formats with the same number (e.g. C2 is the geometric mean between B2 and A2). The width to height ratio of C series formats is √2 as in the A and B series.\n[…]\nThe C series formats are used mainly for envelopes. An unfolded A4 page will fit into a C4 envelope. Due to same width to height ratio, if an A4 page is folded in half so that it is A5 in size, it will fit into a C5 envelope (which will be the same size as a C4 envelope folded in half).\n[…]\nThe ISO 216 formats are organized around the ratio 1:√2; two sheets next to each other together have the same ratio, sideways.\n[…]\nThe principal countries not generally using the ISO paper sizes are the United States and Canada, which use North American paper sizes. Although many Latin American countries have also officially adopted the ISO 216 paper format, Mexico, Panama, Peru, Colombia, the Philippines, and Chile also use mostly U.S. paper sizes.\n[…]\nDIN 476 provides for formats larger than A0, denoted by a prefix factor. In particular, it lists the formats 2A0 and 4A0, which are twice and four times the size of A0 respectively:\n[…]\nArticles by Wilhelm Ostwald referencing Lichtenberg's letter, and W. Porstmann specifying a metric system of norms for formats for lengths, surfaces (planes), and volumes, laying the ground for the DIN-Series, in German"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/ISO_216",
        "situacao": "ok",
        "texto": "O padrão internacional ISO 216 define os formatos de papel utilizados na maior parte do mundo. A primeira edição da norma foi publicada em 1975, a edição atual data de 2007. Baseado na norma alemã DIN 476, de 1922, o padrão estabelece as séries A e B. A série C é definida pela ISO 269.\n[…]\n. Isso permite ampliar ou reduzir documentos entre diferentes tamanhos sem alterar suas proporções. Por exemplo, uma folha A4 pode ser ampliada para A3 ou reduzida para A5 mantendo exatamente o mesmo conteúdo e disposição visual.\n[…]\nA série A é a mais utilizada para documentos, impressões e material de escritório. O formato A0 possui área de exatamente 1 m², e cada formato subsequente corresponde à metade da área do anterior.\n[…]\nO formato A4 (210 × 297 mm) é o tamanho de papel mais utilizado em residências, escritórios, escolas e órgãos públicos.\n[…]\nO formato A3 (297 × 420 mm) possui o dobro da área de uma folha A4 e é frequentemente utilizado para desenhos, plantas, cartazes, certificados e diplomas.\n[…]\nOs formatos da série B situam-se entre os formatos correspondentes da série A imediatamente superior e inferior.\n[…]\nO uso principal da Série B de formatos de papel é para cartazes, pôsteres e peças de grande escala (como banners e arte em grande tamanho), especialmente quando os formatos da Série A oferecem um salto de tamanho muito grande entre dois tamanhos consecutivos.\n[…]\nDuas folhas A4 possuem a mesma área de uma folha A3.\n[…]\nDuas folhas A5 possuem a mesma área de uma folha A4.\n[…]\nUma folha A0 possui área de 1 m².\n[…]\nDezesseis folhas A4 possuem área total equivalente a uma folha A0.\n[…]\nABNT NBR NM ISO 216:2012 — Papel para escrever e determinados tipos de impressos - Formatos acabados - Séries A e B e indicação da direção de fabricação (ISO 216:2007, IDT)\n[…]\nTamanho de papel",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
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
