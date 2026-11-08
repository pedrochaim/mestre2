Você é o crítico de perguntas do Mestre2, um jogo de quiz em que as perguntas são **lidas em voz alta**. As regras de conteúdo do MANIFESTO, no final desta mensagem, definem o que é uma boa pergunta.

Você recebeu um lote de perguntas geradas automaticamente para o subtema **Língua Portuguesa e Expressões** (tema **Cotidiano**). Avalie **cada uma**, independentemente, e decida:

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
      "nome": "Tupinismos",
      "descricao": "Palavras do português herdadas da língua tupi, sobretudo no Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra capivara, nome do maior roedor do mundo, vem do tupi. O que ela significa?",
    "resposta": "Comedor de capim",
    "distratores": [
      "Porco do rio",
      "Rato da água",
      "Bicho gordo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Capivara"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Capivara",
        "situacao": "ok",
        "texto": "Capivara ou carpincho (nome científico: Hydrochoerus hydrochaeris) é uma espécie de mamífero roedor da família Caviidae e subfamília Hydrochoerinae. Alguns autores consideram que deva ser classificada em uma família própria. Está incluída no mesmo grupo de roedores ao qual se classificam as pacas, cutias, os preás e o porquinho-da-índia. Ocorre por toda a América do Sul ao leste dos Andes em habit\n[…]\nA capivara também é chamada de carpincho, capincho, beque, trombudo, caixa, cachapu, porco-capivara, cunum e cubu. O nome capivara procede do termo tupi kapi'wara, que significa \"comedor de capim\". Trata-se de uma composição de kapi'i, capim, com o sufixo -guara, que significa alguém que come, comedor. Tal nome é o mais comum e conhecido por todo o Brasil.\n[…]\nA característica mais chamativa na capivara é seu grande porte: pesa em média, entre 49 e 50 kg, sendo o maior roedor do mundo. As fêmeas tendem a ser maiores que os machos e no estado de São Paulo, foi registrado uma fêmea que pesava até 91 kg. No Uruguai, foi registrado um macho que pesava cerca de 73 kg. As capivaras encontradas no centro-oeste e sudeste do Brasil, e Argentina, tendem a ser maiores que aquelas encontradas na Venezuela.\n[…]\nInteressantemente, ao contrário de outros roedores, as capivaras possuem glândulas sudoríparas distribuídas ao longo do corpo. A pele é ondulada, com pelos emergindo em ângulo agudo com folículos agrupados em três associados à glândulas sebáceas.\n[…]\nAs capivaras se reproduzem durante o ano todo e não existe estação de acasalamento, embora as cópulas concentrem-se no início da estação chuvosa, como mostram dados obtidos na Venezuela (abril e maio) e no Brasil (setembro e outubro). A gestação é a maior entre todos os roedores, tendo em média, 150 dias. Geralmente têm uma ninhada por ano, mas se as condições forem favoráveis, é possível que as fêmeas engravidem duas vezes por ano."
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore nativa da Mata Atlântica, de madeira avermelhada, que deu nome ao Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O Brasil tirou seu nome do pau-brasil, árvore de madeira avermelhada. A que palavra o nome dessa árvore está ligado?",
    "resposta": "Brasa",
    "distratores": [
      "Brasão",
      "Bronze",
      "Braço"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil",
      "https://en.wikipedia.org/wiki/Brazil"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nO nome vernáculo \"pau-brasil\", segundo alguns estudiosos, deriva do francês brésil, que deriva do toscano verzino, nome de pelo menos um tipo de madeira utilizada na tinturaria medieval na Itália, a madeira-de-sapão (Biancaea sappan). Verzino, por sua vez, deriva do árabe wars, que designa uma planta tintória do Iêmen. Outra versão aponta que a palavra se origina do português brasa, devido à tonalidade avermelhada ou abrasada da madeira.\n[…]\n\"Ibirapitanga\", bem como suas diversas variantes (arabutã, ibirapiranga, ibirapitá e orabutã), vêm do tupi antigo ybyrapytanga, composição de ybyrá (\"pau\") e pytanga (\"avermelhado\"). Era o nome que os povos tupis da costa davam à árvore que em português se chama pau-brasil.\n[…]\nQuanto ao nome científico, Paubrasilia é o gênero da árvore. Já echinata significa \"com espinhos\", uma referência ao fato de as vagens do pau-brasil terem acúleos, que são uma especialização da epiderme que se parece com espinhos.\n[…]\nAfirmam alguns historiadores que o corte do pau-brasil para a obtenção de sua madeira e sua resina (extraída para uso como tintura em manufaturas de tecidos de alto luxo) foi a primeira atividade econômica dos colonos portugueses na recém-descoberta Terra de Santa Cruz, no século XVI e que a abundância desta árvore no meio a imensidão das florestas inexploráveis teria conferido à colônia o nome de Brasil.\n[…]\nPela Lei 6.607, de 7 de dezembro de 1978, o pau-brasil foi declarado árvore nacional do Brasil.\n[…]\nPaubrasilia equinata na Flora do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazil",
        "situacao": "ok",
        "texto": "Brazil, officially the Federative Republic of Brazil, is the largest country in South America. It is also the world's fifth-largest country by area and the seventh-largest by population, with over 214 million people. Brazil is a federation composed of 26 states and a Federal District, which hosts the capital, Brasília. Its most populous city is São Paulo, followed by Rio de Janeiro.\n[…]\nThe word Brazil probably comes from the Portuguese word for brazilwood, a tree that once grew plentifully along the Brazilian coast. In Portuguese, brazilwood is called pau-brasil, with the word brasil commonly given the etymology 'red like an ember', formed from brasa ('ember') and the suffix -il (from -iculum or -ilium). It has alternatively been suggested that this is a folk etymology for a word for the plant related to an Arabic or Asian word for a red plant.\n[…]\nBrazilian culture has long enjoyed periodic global influence and interest, often described as the phenomenon of \"Brazilianness\" (brasilidade)—a unique blend of music, dance, cinema, sport and other cultural elements that attract emulation, admiration, and commentary.\n[…]\nThen, in the 20th century, especially in Brasília, Brazil experimented with modernist architecture.\n[…]\nDuring the 1990s, Brazil saw a surge of critical and commercial success with films such as O Quatrilho (Fábio Barreto, 1995), O Que É Isso, Companheiro? (Bruno Barreto, 1997) and Central do Brasil (Walter Salles, 1998), all of which were nominated for the Academy Award for Best Foreign Language Film, the latter receiving a Best Actress nomination for Fernanda Montenegro.\n[…]\nIn May 2010, the Brazilian government launched TV Brasil Internacional, an international television station, initially broadcasting to 49 countries. Commercial television channels broadcast internationally include Globo Internacional, RecordTV Internacional and Band Internacional."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "A sorte está lançada",
      "descricao": "Frase latina alea jacta est, usada para uma decisão sem volta, atribuída a Júlio César"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na frase latina alea jacta est, traduzida como a sorte está lançada, a palavra alea designava qual objeto de jogo?",
    "resposta": "Dado",
    "distratores": [
      "Moeda",
      "Carta",
      "Pedra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alea_iacta_est"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Alea_iacta_est",
        "situacao": "ok",
        "texto": "Alea iacta est is a Latin phrase meaning \"The die is cast\". It is a variation of the words spoken by Julius Caesar at the crossing of the Rubicon on 10 January 49 BC. The phrase, referring to a game of chance played with dice, indicates that events have passed a point of no return and the outcome is uncertain.\n[…]\nThe ancient historian Suetonius reports that Caesar actually said iacta alea est ([ˈjakta ˈaːlɛ.a ˈɛs̺t]), which has the same English translation. Plutarch states that Caesar was speaking in Greek: ἀνερρίφθω κύβος (anerrhī́phthō kýbos), literally \"let a die be cast\", metaphorically \"let the game be played\". Suetonius's Latin version is a statement about the inevitability of what is to come, while the Greek version contains a self-encouragement to venture forward.\n[…]\nThe Latin version is the most commonly cited in modern sources, but with the word order changed to alea iacta est. It is used both untranslated or translated in many languages. The related phrase \"crossing the Rubicon\" has become an idiom with closely related meaning.\n[…]\nCaesar: \"... iacta alea est\", inquit.Caesar said, \"The die is cast\".\n[…]\nThe Latin word alea refers to a game with dice, or more generally to a game of hazard or chance. Dice were common in Roman times and were usually thrown three at a time. There were two common forms: six-sided dice known tesserae and four-sided dice known as tali. In Ancient Greek the word for a single die was κύβος kybos.\n[…]\nReference to Augustus playing Alea"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alea_jacta_est",
        "situacao": "ok",
        "texto": "Alea jacta est (grafia medieval) ou alea iacta est (grafia clássica) significa, em português, \"o dado foi lançado\", mas traduzido comumente como \"a sorte foi lançada\". Frequente e erroneamente traduzido por \"a sorte está lançada\", iacta est é na verdade o perfeito passivo do indicativo de iaceo.\n[…]\nFoi a frase em latim supostamente proferida por Júlio César ao tomar a decisão de cruzar com suas legiões o rio Rubicão, que delimitava a divisa entre a Gália Cisalpina (Gália ao sul dos Alpes, que atualmente corresponde ao território do norte da península Itálica) e o território da Itália.\n[…]\nCésar é dito ter apropriado a frase de Menandro, seu escritor grego de comédias predileto; a frase aparece em Ἀρρηφόρος (transliterada para Arrephoros), como citada em Dipnosofistas (parágrafo oitavo).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Arroba (símbolo)",
      "descricao": "O símbolo @, usado nos endereços de e-mail, chamado de arroba em português e espanhol"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Em italiano, o símbolo arroba dos e-mails ganhou o apelido de chiocciola, por lembrar qual animal?",
    "resposta": "Caracol",
    "distratores": [
      "Macaco",
      "Minhoca",
      "Cobra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/At_sign"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/At_sign",
        "situacao": "ok",
        "texto": "The at sign (@) is a typographical symbol used as an accounting and invoice abbreviation meaning \"at a rate of\" (e.g. 7 widgets @ £2 per widget = £14), and now seen more widely in email addresses and social media platform handles. Most languages have their own name for the symbol.\n[…]\nIn many languages other than English, although most typewriters included the symbol, the use of @ was less common before email became widespread in the mid-1990s. Consequently, it is often perceived in those languages as denoting \"the Internet\", computerization, or modernization in general. Naming the symbol after animals is also common.\n[…]\nIn French, it is now officially the arobase (also spelled arrobase or arrobe), or a commercial (though this is most commonly used in French-speaking Canada, and normally only used when quoting prices). Its origin is the same as that of the Spanish word, which could be derived from the Arabic ar-roub (‏اَلرُّبْع‎). In France, it is also common (especially for younger generations) to say the English word at when spelling out an email address.\n[…]\nIn Italian, it is chiocciola ('snail') or a commerciale, sometimes at (pronounced more often [ˈɛt] and rarely [ˈat]) or ad.\n[…]\nIn Portuguese, it is called arroba (from the Arabic ar-roub, ‏اَلرُّبْع‎). The word arroba is also used for a weight measure in Portuguese. One arroba is equivalent to 32 old Portuguese pounds, approximately 14.7 kg (32 lb), and both the weight and the symbol are called arroba. In Brazil, cattle are still priced by the arroba – now rounded to 15 kg (33 lb). This naming is because the at sign was used to represent this measure.\n[…]\nIn Spanish-speaking countries, it is called arroba (from the Arabic ar-roub, which denotes a pre-metric unit of weight)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Arroba_%28s%C3%ADmbolo%29",
        "situacao": "ok",
        "texto": "O símbolo @, denominado arroba, é hoje amplamente usado na informática (entre outros usos) para indicar a localização de endereços de correio eletrônico.\n[…]\nEm diversas culturas, o símbolo foi nomeado a partir de seu formato, como chiocciola (caracol) em italiano,  snabel (tromba de elefante) em sueco e apestaart (rabo de macaco) em neerlandês.\n[…]\nEm bielorrusso é chamado de \"сьлімак\" (\"hélice\", \"caracol\").\n[…]\nEm esperanto é chamado de ĉe-signo [pronúncia: /tchê/ ] (com um endereço pronunciado zamenhof ĉe esperanto punkto org), ou ainda po-signo ('po' [pronúncia correta: /pô/ ] significa \"cada\", refere-se somente ao uso matemático) ou heliko [pronúncia: /rê-liko/], que significa \"caracol\".\n[…]\nEm indonésio é hábito ler \"et\". Variações existentes - especialmente se a comunicação verbal é muito barulhento - tais como: a bundar / a Bulat (\"Um círculo\" significado), um Keong (\"caracol A\"), e (muito raramente) monyet um (\"macaco A\").\n[…]\nEm italiano é chiocciola (\"caracol\") ou \"a commerciale\", por vezes pronuncia-se [ɛt], raramente [at] ou ad.\n[…]\nEm turco é et (usando a pronúncia em inglês). Também chamado de güzel uma (linda a), um özel (especial a), salyangoz (caracol), Koc (ram), kuyruklu um (a com uma cauda), uma çengelli (a com gancho) e kulak (orelha).\n[…]\nEm ucraniano é comumente chamado de ET (\"at\"), outros nomes sendo ravlyk (равлик) (caracol), slymachok (слимачок) (slug pouco), vukho (вухо) (orelha) e pesyk (песик) (cachorro) .\n[…]\nEm galês às vezes é conhecido como um malwen ou malwoden (um caracol).\n[…]\nA forma de obter o símbolo depende da língua e das definições do sistema operativo.\n[…]\nArroba, unidade de medida de massa e volume",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Dias da semana em português",
      "descricao": "Os nomes dos dias da semana na língua portuguesa, numerados como feiras em vez de dedicados a deuses"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Segunda-feira e terça-feira vêm do latim da Igreja. O que significava originalmente a palavra latina feria?",
    "resposta": "Dia de festa",
    "distratores": [
      "Dia de mercado",
      "Dia de trabalho",
      "Dia de jejum"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week",
        "situacao": "ok",
        "texto": "In a vast number of languages, the names given to the seven days of the week are derived from the names of the seven classical planets which were in turn named after contemporary Hellenistic deities. This system was introduced by the Sumerians and later adopted by the Babylonians from whom the Roman Empire adopted the system during late antiquity.\n[…]\nSaturday: named after the Roman god Saturn associated with the Titan Cronus, father of Zeus and many Olympians. Its original Anglo-Saxon rendering was Sæturnesdæg (pronounced [ˈsæturnezdæj]). In Latin, it was diēs Sāturnī, \"Day of Saturn\". The Nordic laugardagur, leygardagur, laurdag, etc. deviate significantly as they have no reference to either the Norse or the Roman pantheon; they derive from Old Nordic laugardagr, literally \"washing-day\".\n[…]\nSami languages have weekday names influenced from neighboring languages, with a majority of weekday names being from Germanic-Norse origin.\n[…]\nEtymologically speaking, Swahili has two \"fifth\" days. The words for Saturday through Wednesday contain the Bantu-derived Swahili words for \"one\" through \"five\". The word for Thursday, Alhamisi, is of Arabic origin and means \"the fifth\" (day). The word for Friday, Ijumaa, is also Arabic and means (day of) \"gathering\" for the Friday noon prayers in Islam.\n[…]\nThe days of the week in Meitei (officially known as Manipuri) originated from the Sanamahi creation myth of Meitei mythology. The Udmurt days of the week derive from their connection to traditional calendar rites. The days of the week in Yoruba derive from Yoruba religion and superstitions.\n[…]\nFeria\n[…]\n☉9  From an Old Burmese word, not of Indic origin.\n[…]\n☽5  From an Old Burmese word, not of Indic origin."
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "E comercial",
      "descricao": "Símbolo tipográfico que representa a conjunção e, muito usado em nomes de empresas"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome inglês do e comercial, ampersand, vem de uma frase que as crianças recitavam ao terminar de dizer o quê?",
    "resposta": "O alfabeto",
    "distratores": [
      "A tabuada",
      "As orações",
      "A chamada"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ampersand"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ampersand",
        "situacao": "ok",
        "texto": "The ampersand, also known as the and sign, is the logogram &, representing the conjunction \"and\". It originated as a ligature of the word et (Latin for 'and').\n[…]\nU+1F675 🙵 SWASH AMPERSAND ORNAMENT\n[…]\nAmpersand is the name of a reactive programming language, which uses relation algebra to specify information systems.\n[…]\nSome Unix shells use the ampersand as a metacharacter:\n[…]\nSome Unix shells, like the POSIX standard sh shell, use an ampersand to execute a process in the background and to duplicate file descriptors.\n[…]\nIn Bash, the ampersand can separate words, control the command history, duplicate file descriptors, perform logical operations, control jobs, and participate in regular expressions.\n[…]\nThe generic URL (Uniform Resource Locator) syntax allows for a query string to be appended to a file name in a web address so that additional information can be passed to a script; the question mark, or query mark, ?, is used to indicate the start of a query string. A query string is usually made up of a number of different name–value pairs, each separated by the ampersand symbol, &. For example, http://www.example.org/list.php?id=1&order=ascending.\n[…]\nA \"real\" ampersand must be replaced by %26 to avoid interpretation as this syntax.\n[…]\nAmpersand curve – Type of quartic plane curve\n[…]\n\"The History of 'Ampersand'\". Merriam-Webster. Retrieved 27 July 2022.\n[…]\nThe Hot Word at Dictionary.com: How ampersand came from a misunderstanding. Archived 20 October 2013 at the Wayback Machine.\n[…]\n\"Ask the Editor: Ampersand\", video at Merriam-Webster.com (2:01). Retrieved 2013-10-18. Archived 19 October 2013 at the Wayback Machine.\n[…]\nFont of 52 ampersands, designed by Frederic Goudy"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%26",
        "situacao": "ok",
        "texto": "&, denominado ampersand em inglês ou esperluette em francês, também conhecido como e comercial em português, é um logograma que representa a conjunção \"e\". Originou-se como uma ligadura das letras et — latim para \"e\".\n[…]\nTradicionalmente, ao recitar o alfabeto nas escolas de língua inglesa, qualquer letra que também pudesse ser usada como palavra em si (\"A\", \"I\" e  \"O\") era repetida com a expressão latina per se ('por si próprio'), como em \"A per se A\". Também era prática comum adicionar o sinal & no final do alfabeto como se fosse a 27.ª letra, pronunciada como o latim et ou posteriormente em inglês como and. Como resultado, a recitação do alfabeto terminaria em \"X, Y, Z, and per se and\".\n[…]\nEsta última frase foi rotineiramente contraída para \"ampersand\" e o termo entrou no uso comum em inglês em 1837.\n[…]\nO e comercial muitas vezes aparecia como um caractere no final do alfabeto latino, como por exemplo na lista de letras de Birferdo de 1011. Da mesma forma, até o século XIX o logograma \"&\" era considerado como a 27.ª letra do alfabeto inglês, sendo ensinado às crianças em processo de alfabetização nos EUA e em outros países de língua inglesa.\n[…]\nUm exemplo de tal prática pode ser visto no livro de 1863 de MB Moore, The Dixie Primer, for the Little Folks. Em seu romance de 1859, Adam Bede, George Eliot também se refere a este aspecto, quando faz um personagem dizer: \"Ele pensou que [o Z] tinha sido colocado apenas para terminar o alfabeto; embora & também o fizesse, pelo que podia ver.\" A popular canção de ninar Apple Pie ABC termina com as linhas \"X, Y, Z, and ampersand, All wished for a piece in hand\".\n[…]\nFont of 52 ampersands, designed by Frederic Goudy",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Papiamento",
      "descricao": "Língua crioula de base ibérica falada nas Antilhas neerlandesas"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome papiamento, língua crioula de Aruba e Curaçao, vem de um verbo ibérico antigo. O que esse verbo significa?",
    "resposta": "Falar",
    "distratores": [
      "Cantar",
      "Negociar",
      "Navegar"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Papiamento"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Papiamento",
        "situacao": "ok",
        "texto": "Papiamento (English:  ), or Papiamentu (English: ; Dutch: Papiaments [ˌpaːpijaːˈmɛnts]), is a Portuguese-based creole language spoken in the Dutch Caribbean. It is the most widely spoken language on Aruba, Bonaire, and Curaçao (the ABC islands).\n[…]\nThe language, spelled Papiamento in Aruba and Papiamentu in Bonaire and Curaçao, is largely based on Portuguese as spoken in the 15th and 16th centuries, and has been influenced considerably by Dutch and Spanish. Lexical similarities between Portuguese and Spanish make it difficult to pinpoint the exact origin of some words.\n[…]\nPapiamento is spoken in all aspects of society throughout Aruba, Curaçao and Bonaire.\n[…]\nPapiamento is primarily spoken on Aruba, Curaçao and Bonaire. The language is also spoken by the respective diasporas of the ABC islands, most notably in the Netherlands, and to a lesser extent Sint Maarten. An earlier, now-extinct form of Papiamento was formerly spoken on the Paraguana peninsula of Venezuela.\n[…]\nThere are two main dialects of Papiamento, the dialect of Aruba (Papiamento) and the dialect of Curaçao and Bonaire (Papiamentu), with lexical and intonational differences. There are also minor differences between Curaçao and Bonaire.\n[…]\nAruba, Bonaire, and Curaçao's national anthems are in Papiamento, \"Aruba Dushi Tera\", \"Tera di Solo y suave biento\" and \"Lanta nos bos ban kanta\" respectively, as was the anthem of the Netherlands Antilles. The newspapers Diario, Vigilante and Extra are also in the language.\n[…]\nThe 2013 films Abo So (Aruba) and Sensei Redenshon (Curaçao) were the first feature films in Papiamento; the comedy Bon Bini Holland (Curaçao and Netherlands) also contains some Papiamento.\n[…]\nPapiamentu tur dia – A blog for English-speaking students of Papiamento"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Papiamento",
        "situacao": "ok",
        "texto": "O papiamento, ou papiamentu, é uma língua crioula de base portuguesa falada no Caribe Neerlandês. É a língua mais falada em Aruba, Bonaire e Curaçau (as ilhas ABC). Tem estatuto de língua oficial em Aruba, Bonaire e Curaçau. Papiamento também é uma língua reconhecida nos órgãos públicos neerlandeses de Santo Eustáquio e Saba.\n[…]\nA língua, grafada como papiamento em Aruba e Papiamentu em Bonaire e Curaçau, é amplamente baseada no português falado nos séculos XV e XVI, e foi consideravelmente influenciada pelo neerlandês e pelo espanhol. Devido às semelhanças lexicais entre o português e o espanhol, é difícil precisar a origem exata de algumas palavras.\n[…]\nO nome procede da palavra papiá, que significa 'conversar', derivada originalmente da palavra portuguesa \"papear\". Origina-se igualmente deste verbo coloquial o nome do crioulo de base lusófona de Malaca, o papiá kristáng.\n[…]\nElaborando sobre as comparações feitas por Martinus e Quint, Jacobs defende a hipótese de que o papiamento é uma ramificação de uma variedade inicial do crioulo da Alta Guiné, transferido da Senegâmbia para Curaçau na segunda metade do século XVII, um período em que os neerlandeses controlaram o porto de Goreia, logo abaixo da ponta da península de Cabo Verde.\n[…]\nA conjugação dos verbos em papiamento é dada pela adição das partículas \"ta\", \"lo\" e \"a\" antes do verbo, que não varia em o pessoa ou número. É importante destacar que não há precisamente a ideia de passado, presente e futuro como nas línguas indoeuropeias*, mas sim a ideia de aspectos. São eles contínuo/não contínuo, perfectivo/não perfectivo e real/hipotético.\n[…]\nA ordem sintática do papiamento é sujeito-verbo-objeto, sendo o objeto indireto posicionado antes do objeto direto.\n[…]\nOrtografia di Papiamento — INTRODUCCION\n[…]\nRegla di gramatica di Papiamento\n[…]\nStilistica di Papiamento",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Palíndromo",
      "descricao": "Palavra ou frase que se lê igual de trás para frente"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra palíndromo, usada para ovo, radar e arara, vem do grego. O que ela significa?",
    "resposta": "Correr de volta",
    "distratores": [
      "Espelho de letras",
      "Palavra gêmea",
      "Leitura dupla"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Palindrome"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Palindrome",
        "situacao": "ok",
        "texto": "A palindrome () is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date \"22/02/2022\", or the sentence \"A man, a plan, a canal – Panama\". The 19-letter Finnish language word saippuakivikauppias (a soapstone vendor) is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joy\n[…]\nThe most familiar palindromes in English are character-unit palindromes, where the characters read the same backward as forward. Examples are civic, radar, level, rotor, kayak, madam, and refer. The longest common ones are rotator, deified, racecar, and reviver; longer examples such as redivider, kinnikinnik, and tattarrattat are orders of magnitude rarer.\n[…]\nA palstar is a concatenation of palindromic strings, excluding the trivial one-letter palindromes – otherwise all strings would be palstars.\n[…]\nLeigh Mercer (1893–1977) best known for devising the palindrome \"A man, a plan, a canal: Panama!\"\n[…]\nPalindromic number\n[…]\nPalindromic sequence\n[…]\nList of English palindromic phrases\n[…]\nList of palindromic places\n[…]\nPalindroma, a genus of spiders with palindromic species names\n[…]\nPalindromic polynomial\n[…]\nYreka, California, which has the palindromic Yreka Bakery and Yrella Gallery\n[…]\nThe Palindromist. Palindromist Press, 1996–.\n[…]\nHoward W. Bergerson. Palindromes and Anagrams. Dover Publications, 1973. ISBN 978-0486206646.\n[…]\nStephen J. Chism. From A to Zotamorf: The Dictionary of Palindromes. Word Ways Press, 1992. ISBN 978-0963515209.\n[…]\nMichael Donner. I Love Me, Vol. I: S. Wordrow's Palindrome Encyclopedia. Algonquin Books, 1996. ISBN 978-1565121096.\n[…]\nChisholm, Hugh, ed. (1911). \"Palindrome\" . Encyclopædia Britannica. Vol. 20 (11th ed.). Cambridge University Press. p. 633.\n[…]\n\"Palindromes\". Several languages. European Day of Languages (EDL). Archived from the original on 28 July 2017. Retrieved 14 July 2017. Celebrated Sep 26"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Pal%C3%ADndromo",
        "situacao": "ok",
        "texto": "Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante. Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois sentidos.\n[…]\nA palavra \"palíndromo\" vem do grego palin (πάλιν, \"para trás, novamente\") + dromos (δρόμος, \"caminho, rua\") - que corre em sentido inverso. Mas o termo foi cunhado em inglês (palindrome), no século XVII, e os primeiros a utilizá-lo foram os escritores Henry Peacham e Ben Jonson.\n[…]\nUma palavra palíndroma é aquela cuja sequência de letras é simétrica, permitindo uma leitura idêntica da esquerda para a direita ou da direita para a esquerda: ovo, osso, reler, anilina.\n[…]\nEm geral, para identificar a palindromia, desconsideram-se os acentos e sinais gráficos, e por isso palavras como afã, aérea e somávamos também são consideradas palíndromos.\n[…]\nMalba Tahan, provavelmente o primeiro autor a escrever sobre o tema em português, listou 231 palavras palíndromas em língua portuguesa em seu livro \"Matemática recreativa\".\n[…]\nOutra possibilidade é considerar como unidade a palavra, e então teremos palíndromos vocabulares como \"Um por todos e todos por um\".\n[…]\nMas a forma mais conhecida de palíndromo é a frase simétrica, considerando como unidade a letra, e desconsiderando acentos, diacríticos (til, cedilha), sinais de pontuação e espaços entre as palavras. Nesta acepção, o palíndromo se tornou um popular jogo de palavras, um quebra-cabeças e até uma forma de expressão.\n[…]\nAs frases formando um palíndromo também são chamadas de anacíclicas, do grego anakúklein, significando que volta em sentido inverso, que refaz inversamente o ciclo.\n[…]\nEscrever literatura em palíndromos é um exemplo de escrita constrangida.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Hipócrita (palavra)",
      "descricao": "Palavra para quem finge virtudes ou sentimentos que não tem, vinda do grego hypokrites"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Na Grécia antiga, a palavra que deu origem a hipócrita designava qual profissional?",
    "resposta": "Ator",
    "distratores": [
      "Advogado",
      "Mercador",
      "Sacerdote"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Hypocrisy"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Hypocrisy",
        "situacao": "ok",
        "texto": "Hypocrisy is the practice of feigning what one is not or professing what one does not believe. The word \"hypocrisy\" entered the English language c. 1200 with the meaning \"the sin of pretending to virtue or goodness\". Today, \"hypocrisy\" often refers to advocating behaviors that one does not practice. However, the term can also refer to other forms of pretense, such as engaging in pious or moral beh"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hipocrisia",
        "situacao": "ok",
        "texto": "Hipocrisia é o ato de fingir ter crenças, virtudes, ideias e sentimentos que a pessoa na verdade não possui, frequentemente exigindo que os outros se comportem dentro de certos parâmetros de conduta moral que a própria pessoa extrapola ou deixa de adotar. A palavra deriva do latim hypocrisis e do grego hupokrisis — ambos significando a representação de um ator, atuação, fingimento (no sentido artí\n[…]\nEssa palavra passou mais tarde a designar moralmente pessoas que representam, que fingem comportamentos.\n[…]\nO termo “hipocrisia” é também comumente usado (alguns diriam abusado) num sentido que poderia ser designado, de maneira mais específica, como um padrão duplo. Um exemplo disso, é quando alguém acredita honestamente que deveria ser imposto um conjunto de preceitos morais para determinado grupo - mas não para todos os grupos.\n[…]\nÉ daí que o termo hipócrita designa alguém que oculta a realidade atrás de uma máscara de aparência.\n[…]\nA palavra hipocrisia vem do grego antigo ὑπόκρισις (hupókrisis), que significa \"encenar\", \"interpretar\". O adjetivo hipócrita vem do grego ὑποκριτής (hupokritḗs), que significa \"ator\".\n[…]\nA estrutura da palavra grega é formada pelo prefixo hipo- (abaixo) e o verbo krinein (decidir), o que sugere uma deficiência na decisão. Tal indecisão, a respeito dos próprios sentimentos e crenças, informa o significado contemporâneo da palavra.\n[…]\nNas origens do termo, enquanto hupókrisis (hipocrisia) era utilizado para qualquer tipo de performance pública, incluindo a arte da retórica, hupokritḗs (hipócrita) era um termo técnico para um ator de palco e não era considerado um papel adequado para figuras públicas. Em Atenas, durante o século IV a.C., por exemplo, o grande orador Demóstenes ridicularizou o seu rival Ésquines, quem havia sido um bem-sucedido ator (hupokritḗs) antes de ingressar na política.\n[…]\nCitações sobre o tema Hipocrisia",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ônibus (palavra)",
      "descricao": "Palavra para o veículo de transporte coletivo, vinda do latim omnibus"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra ônibus vem de omnibus, nome dado a carruagens coletivas na França do século dezenove. O que omnibus significa em latim?",
    "resposta": "Para todos",
    "distratores": [
      "Muitas rodas",
      "Carro grande",
      "Sem cavalos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bus",
        "situacao": "ok",
        "texto": "A bus (contracted from omnibus, with variants multibus, motorbus, autobus, etc.) is a motor vehicle that carries significantly more passengers than an average car or van, but fewer than the average rail transport. It is most commonly used in public transport, but is also in use for charter purposes, or through private ownership. Although buses typically carry between 30 and 100 passengers, some bu\n[…]\nBefore the development of powered vehicles, urban public transport used horse-drawn omnibuses.\n[…]\nThe first mechanically propelled omnibus appeared on the streets of London on 22 April 1833. Steam carriages were much less likely to overturn, they travelled faster than horse-drawn carriages, they were much cheaper to run, and caused much less damage to the road surface due to their wide tyres.\n[…]\nSir William first proposed the idea in an article to the Journal of the Society of Arts in 1881 as an \"...arrangement by which an ordinary omnibus...would have a suspender thrown at intervals from one side of the street to the other, and two wires hanging from these suspenders; allowing contact rollers to run on these two wires, the current could be conveyed to the tram-car, and back again to the dynamo machine at the station, without the necessity of running upon rails at all.\"\n[…]\nIn Siegerland, Germany, two passenger bus lines ran briefly, but unprofitably, in 1895 using a six-passenger motor carriage developed from the 1893 Benz Viktoria. Another commercial bus line using the same model Benz omnibuses ran for a short time in 1898 in the rural area around Llandudno, Wales.\n[…]\nThe first mass-produced bus model was the B-type double-decker bus, designed by Frank Searle and operated by the London General Omnibus Company—it entered service in 1910, and almost 3,000 had been built by the end of the decade. Hundreds of them saw military service on the Western Front during the First World War."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/%C3%94nibus",
        "situacao": "ok",
        "texto": "Ônibus (português brasileiro) ou autocarro (português europeu), camioneta, machimbombo (no português moçambicano e português angolano), é um veículo motorizado terrestre designado para o transporte de pessoas. Ônibus podem ter a capacidade de carregar até 300 passageiros. O tipo mais comum de ônibus é o ônibus simples ou convencional, usado em grande parte dos centros urbanos para o transporte púb\n[…]\nA designação dos veículos de transporte de passageiros varia de país para país e até mesmo de região para região. Várias das designações têm origem da palavra \"Ónibus / Ômnibus\" (\"para todos\" em latim). Este termo foi usado, desde o século XIX, para designar um tipo de transporte coletivo de passageiros puxado a cavalo, usado nas grandes cidades do mundo, com caraterísticas e funções muito semelhantes aos transportes coletivos atuais.\n[…]\nNo Brasil, os transportes coletivos de passageiros são designados \"ônibus\", termo originado diretamente em \"omnibus\".\n[…]\nO termo ônibus parece vir do local onde os carros faziam o ponto final, diante de uma chapelaria, cujo dono, Omnes, em um jogo de palavras com seu próprio nome, denominou Omnes Omnibus, \"tudo para todos\". O nome pareceu bastante apropriado para o novo transporte coletivo e por associação foi adotado por este. Em outras versões da história, porém, ônibus simplesmente decorre de voiture omnibus (\"carro para todos\").\n[…]\nÉ o tipo mais popular e mais utilizado. Também chamado de ônibus simples, ônibus básico ou ônibus convencional, esse tipo de ônibus possui apenas um andar e uma unidade rígida (ao contrário dos articulados e biarticulados), de dois a quatro eixos. Podem apresentar uma ou mais portas para a entrada de passageiros, e a posição do motor pode variar de frontal, central e traseira. De todos os tipos, é o mais compacto, mais barato de se adquirir e manter.\n[…]\nMicro-ônibus\n[…]\nÔnibus de trânsito rápido\n[…]\nÔnibus articulado\n[…]\nParada de ônibus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Coco (fruto)",
      "descricao": "Fruto do coqueiro, cujo nome foi dado por navegadores portugueses e espanhóis"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Os navegadores ibéricos deram ao coco esse nome porque as três marcas na base da casca lembravam o quê?",
    "resposta": "Um rosto",
    "distratores": [
      "Uma flor",
      "Pegadas",
      "Gotas de chuva"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Coconut"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Coconut",
        "situacao": "ok",
        "texto": "The coconut (Cocos nucifera) is a member of the palm family (Arecaceae) and the only living species of the genus Cocos. The term \"coconut\" (or the archaic \"cocoanut\") can denote the whole coconut palm tree or the large hard fruit. Originally native to the Southeast Asia, New Guinea, and the Southwestern Pacific, they are ubiquitous in coastal tropical regions.\n[…]\nThe generic name Cocos, and the common name, is derived from the 16th-century Portuguese word coco, meaning 'head' or 'skull' after the three indentations on the coconut shell that give an impression of a face. This apparently came from encounters in 1521 by Portuguese and Spanish explorers with Pacific Islanders, when the coconut shell reminded them of ghosts in Portuguese folklore called coco or côca.\n[…]\nCoconut oil is used for frying and cooking.\n[…]\nCoconut water can be drunk fresh or used in cooking. It can be fermented to produce a jelly-like dessert known as nata de coco. Coconut vinegar, made from fermented coconut water or sap, is used extensively in Southeast Asian and  Goan cuisine.\n[…]\nAccording to urban legend, more deaths are caused by falling coconuts than by sharks annually, though the truth is actually the reverse.\n[…]\nIn March 1521, Antonio Pigafetta described the coconut in his journal in Italian with the word \"cocho\", plural \"cochi\". This followed the first European crossing of the Pacific Ocean during the Magellan circumnavigation. He explained how at Guam \"they eat coconuts\" (\"mangiano cochi\") and that the natives there \"anoint the body and the hair with coconut and beniseed oil\" (\"ongieno el corpo et li capili co oleo de cocho et de giongioli\").\n[…]\nCoconut production in Kerala\n[…]\nGrimwood, B. E.; Ashman, F. (1975). Coconut Palm Products: Their Processing in Developing Countries. Food and Agriculture Organization. ISBN 978-92-5-100853-9.\n[…]\nCoconut at the Wikibooks Cookbook subproject"
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Carioca",
      "descricao": "Gentílico de quem nasce na cidade do Rio de Janeiro, de origem tupi"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O gentílico carioca, de quem nasce na cidade do Rio de Janeiro, vem do tupi. Como ele costuma ser traduzido?",
    "resposta": "Casa de branco",
    "distratores": [
      "Rio do mar",
      "Gente da praia",
      "Terra do sol"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Carioca"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Carioca",
        "situacao": "ok",
        "texto": "Carioca (Brazilian Portuguese pronunciation: [kaɾiˈɔkɐ] ) is a demonym used to refer to residents of the city of Rio de Janeiro, in Brazil and their culture.\n[…]\nIn 1975, during the presidency of Ernesto Geisel under Brazil’s military dictatorship, the State of Guanabara was merged with the neighboring State of Rio de Janeiro. Following the merger, the city of Rio de Janeiro replaced Niterói as the capital of the unified state, and Carioca became the official demonym for inhabitants of the city.\n[…]\nNowadays, Carioca is used to exclusively refer to those born in the city of Rio de Janeiro, while everyone born in the state of Rio de Janeiro is referred to as a Fluminense.\n[…]\nFamous Cariocas in film include \"Brazilian bombshell\" Carmen Miranda, a Portuguese-born Brazilian woman who grew up in Rio de Janeiro. The eponymous song \"Carioca\", from the 1933 film Flying Down to Rio, has become a jazz standard.\n[…]\nSamba Carioca is a localized style of Brazilian Samba.\n[…]\nThe Brazilian Portuguese variant spoken in the city of Rio de Janeiro (and metropolitan area) is called Carioca, and it is called Sotaque locally, literally translated as \"accent\". It can be said that Rio de Janeiro presents a sociolect inside the major Fluminense dialect group, as speakers inside the city may be easily recognizable more by their slang than the way the phonology of their speech.\n[…]\nMany Cariocas and many Paulistas (from the coast, capital city or hinterland) shorten você and use cê instead: Cê vai pra casa agora? (\"Are you going home now?\"). That, however, is common only on the spoken language and is rarely written.\n[…]\nMedia related to Dialeto carioca at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Carioca",
        "situacao": "ok",
        "texto": "Carioca é o gentílico oficial do município do Rio de Janeiro, capital do estado do Rio de Janeiro, no Brasil, também podendo referir-se, como adjetivo, a tudo que pertence ao município do Rio de Janeiro, como por exemplo aos seus bairros. É também aceito popularmente como gentílico de todo o estado do Rio de Janeiro e ao que se refere a ele, por exemplo em Campeonato Carioca de Futebol, mesmo send\n[…]\nHistoricamente, a tese mais difundida foi a que a palavra significaria \"casa de homem branco\": kara'iwa (homem branco) + oka (casa), como referência a uma suposta casa de pedra construída próxima à foz do Rio Carioca por Gonçalo Coelho, na segunda expedição portuguesa à Baía de Guanabara, em 1503-1504. Essa tese foi formulada nos anos 1850s pelo historiador Francisco Adolfo de Varnhagen, e segue até hoje bastante citada em livros contemporâneos.\n[…]\nContudo, ainda que a tese siga aparecendo em dicionários gerais e obras de referência, hoje é consenso entre linguistas que essa tese é errada, tanto do ponto de vista historiográfico quanto linguístico. Em vez disso, a tese que se apresenta é que o nome vem de kariîó + oka, \"casa do indígena carijó\" — nome da principal aldeia tupinambá na margem esquerda da Baía, ocupando um território na foz do Rio Carioca, correspondente aos atuais bairros da Glória, Catete e Flamengo.\n[…]\nAo contrário do que afirma Léry, contudo, o nome do Rio Carioca vem muito provavelmente do nome da Aldeia e não o contrário, uma vez que nomes de águas em tupi sempre terminam com o sufixo -y. Além disso, seria muito improvável que os tupinambás usassem uma referência a homens brancos para nomear tanto a sua aldeia quanto um riacho, que ao que tudo indica existem desde muito antes da chegada dos europeus.\n[…]\nLogo que estabelecem contato com um europeu, os cariocas apressam-se em dizer-lhe que essa água tem o poder de enfeitiçá-lo e de fazê-lo fixar residência na cidade\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Calendas gregas",
      "descricao": "Expressão de origem latina, ad kalendas graecas, que significa adiar algo para nunca"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "As calendas marcavam o primeiro dia do mês romano. Por que adiar algo para as calendas gregas significa adiar para nunca?",
    "resposta": "Os gregos não tinham calendas",
    "distratores": [
      "Era feriado proibido",
      "Gregos odiavam prazos",
      "Era o fim do ano"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Calends"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Calends",
        "situacao": "ok",
        "texto": "The calends or kalends (Latin: kalendae) is the first day of every month in the Roman calendar. The English word \"calendar\" is derived from this word.\n[…]\nThe Romans called the first day of every month the calends, signifying the start of a new lunar phase. On this day, the pontiffs would announce the number of days until the next month at the Curia Calabra; in addition, debtors had to pay off their debts on this day. These debts were inscribed in the kalendaria, effectively an accounting book.\n[…]\nTo calculate the day of the calends of the upcoming month, counting the number of days remaining in the current month is necessary, then adding two to that number. For example, April 22 is the 10th day before the calends of May (ante diem decimum Kalendas Maias/Maii), because eight days are left in April and both end dates are included in the total.\n[…]\nThe calends was a feature of the Roman calendar, but it was not included in the Greek calendar. Consequently, to postpone something ad Kalendas Graecas (\"until the Greek calends\") was a colloquial expression for postponing something forever.\n[…]\nThis phrase survived for many centuries in Greek (Ancient Greek: εἰς τὰς ἑλληνικὰς καλένδας) and in the Romance languages (Spanish: hasta las calendas griegas; Italian: alle calende greche; French: aux calendes grecques; Romanian: la calendele grecești; Portuguese: às calendas gregas ; etc.).\n[…]\nThis article incorporates text from a publication now in the public domain: Chambers, Ephraim, ed. (1728). \"Calends\". Cyclopædia, or an Universal Dictionary of Arts and Sciences (1st ed.). James and John Knapton, et al."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Calendas",
        "situacao": "ok",
        "texto": "As calendas, no antigo calendário romano, eram o primeiro dia de cada mês quando ocorria a Lua nova. Havia três dias fixos: as calendas, as nonas (quinto ou sétimo dia, de acordo com o mês) e idos (13.º ou 15.º dia, conforme o mês). Dos idos é que provém a expressão \"nos idos de setembro\" para expressar uma data para a segunda metade do mês.\n[…]\nÉ desta palavra que se originou o termo calendário e a expressão calendas gregas, representando um dia que jamais chegará, pois era inexistente no calendário grego.\n[…]\nAd kalendas græcas",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Pomo da discórdia",
      "descricao": "Expressão para o motivo de uma briga, vinda da maçã de ouro do mito grego"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No mito do pomo da discórdia, Páris deu a maçã de ouro a Afrodite em troca do amor de Helena. Que conflito isso desencadeou?",
    "resposta": "Guerra de Troia",
    "distratores": [
      "Guerra do Peloponeso",
      "Guerras Médicas",
      "Guerra dos Titãs"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Judgement_of_Paris"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Judgement_of_Paris",
        "situacao": "ok",
        "texto": "The Judgement of Paris is a story from Greek mythology, which was one of the events that led up to the Trojan War, and in later versions to the foundation of Rome.\n[…]\nEris, the goddess of discord, was not invited to the wedding of Peleus and Thetis. In revenge, she brought a golden apple, inscribed, \"To the fairest one\", which she threw into the wedding. Three guests, Hera, Athena and Aphrodite, after some disputation, agreed to have Paris of Troy choose the fairest one. Paris chose Aphrodite, she having bribed him with the most beautiful mortal woman in the world, Helen of Sparta, wife of Menelaus.\n[…]\nConsequently, Paris carried Helen off to Troy, and the Greeks invaded Troy for Helen's return. Eris's Apple of Discord (or her not being invited to the wedding in the first place) was thus the instrumental casus belli of the Trojan War.\n[…]\nThe word Kallisti (Modern Greek) written on a golden apple, has become a principal symbol of Discordianism, a post-modernist religion. In non-philological texts (such as Discordian ones) the word is usually spelled as καλλιστι.\n[…]\nMost versions of Principia Discordia actually spell it as καλλιχτι, but this is definitely incorrect; in the afterword of the 1979 Loompanics edition of Principia, Gregory Hill says that was because on the IBM typewriter he used, not all Greek letters coincided with Latin ones, and he didn't know enough of the letters to spot the mistake. Zeus's failure to invite Eris is referred to as The Original Snub in Discordian mythology.\n[…]\nChronological listing of classical literature sources for The Judgement of Paris, including the Apple of Discord:\n[…]\nThe Judgment of Paris at the Theoi Project"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Julgamento_de_P%C3%A1ris",
        "situacao": "ok",
        "texto": "O julgamento de Páris é um evento e conto da mitologia grega onde encontra-se a origem para a Guerra de Troia. Segundo as narrativas gráficas e orais, Éris, deusa da discórdia, teria ficado irritada ao não ser convidada à uma festa no Olimpo. A deusa, então, enviou ao evento uma maçã de ouro, na qual se podia ler a inscrição \"pertencente a mais bela\". As deusas Hera, Atena e Afrodite, responderam,\n[…]\nO mito apareceu no século VII a.C. em Cypselus, Olímpia e foi descrito por Pausânias desta maneira:\n[…]\nTrês deusas reivindicaram a maçã: Hera, Atena e Afrodite. Elas pediram a Zeus para julgar qual delas era mais merecedora, e eventualmente ele, relutante em favorecer qualquer uma, declarou que Páris, um mortal de Troia, julgaria o caso, pois ele havia recentemente mostrado sua lealdade exemplar em um concurso em que Ares em forma touro tinha derrotado o próprio touro premiado, e Páris, o pastor-príncipe, sem hesitação, galardoado com o prêmio para o deus.\n[…]\nEnquanto Páris inspecionados elas, cada uma usa seus poderes para suborná-lo; Hera ofereceu-se (subornou) para fazê-lo rei da Europa e da Ásia, Atena também ofereceu (subornou) a sabedoria e habilidade na guerra, e Afrodite, que teve as graças e as horas para melhorar seus encantos com flores e música (de acordo com um fragmento do Cypria citado por Atenágoras de Atenas), ofereceu (como suborno) a mulher mais bonita do mundo, na época (Eurípides, Andrômaca, l.284, Helena l. 676).\n[…]\nEsta foi Helena de Esparta, esposa do rei grego Menelau. Páris aceitou o presente de Afrodite e condecorado a maçã para ela, recebendo Helena, bem como a inimizade dos gregos e, especialmente, de Hera. As expedição dos gregos para recuperar Helena de Paris em Troia é a base mitológica da Guerra de Troia.\n[…]\nSua raiva por ter perdido a faz unir aos gregos na batalha contra Troia de Páris, um evento chave no ponto de viragem da guerra.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Trabalho de Sísifo",
      "descricao": "Expressão para uma tarefa interminável e inútil, inspirada no castigo de Sísifo na mitologia grega"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Trabalho de Sísifo é uma tarefa sem fim. No mito grego, qual era o castigo eterno de Sísifo?",
    "resposta": "Rolar uma pedra morro acima",
    "distratores": [
      "Encher um tonel furado",
      "Ter o fígado devorado",
      "Sustentar o céu"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Sisyphus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Sisyphus",
        "situacao": "ok",
        "texto": "In Greek mythology, Sisyphus or Sisyphos ( ; Ancient Greek: Σίσυφος, romanized: Sísyphos) is the founder and king of Ephyra (now known as Corinth). He reveals Zeus's abduction of Aegina to the river god Asopus, thereby incurring Zeus's wrath. His subsequent cheating of death earns him eternal punishment in the underworld, once he dies of old age."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/S%C3%ADsifo",
        "situacao": "ok",
        "texto": "Na mitologia grega, Sísifo (em grego:  Σίσυφος, transl.: Sísyphos), filho do rei Éolo, da Tessália, e Enarete, era considerado o mais astuto de todos os mortais.\n[…]\nSegundo Higino, ele odiava seu irmão Salmoneu; perguntando a Apolo como ele poderia matar seu inimigo, o deus respondeu que ele deveria ter filhos com Tiro, filha de Salmoneu, que o vingariam. Dois filhos nasceram, mas Tiro, descobrindo a profecia, os matou. Sísifo se vingou ... e, por causa disso, ele recebeu como castigo na terra dos mortos empurrar uma pedra até o lugar mais alto da montanha, de onde ela rola de volta.\n[…]\nSísifo morreu de velhice e Zeus enviou Hermes para conduzir sua alma a Hades. No tártaro, Sísifo foi considerado um grande rebelde e teve um castigo, juntamente com Prometeu, Tício, Tântalo e Íxion.\n[…]\nSísifo recebeu esta punição: foi condenado a, por toda a eternidade, rolar uma grande pedra de mármore com suas mãos até o cume de uma montanha, sendo que toda vez que ele estava quase alcançando o topo, a pedra rolava novamente montanha abaixo até o ponto de partida por meio de uma força irresistível, invalidando completamente o duro esforço despendido.\n[…]\nSísifo tornou-se conhecido por executar um trabalho rotineiro e cansativo. Tratava-se de um castigo para mostrar-lhe que os mortais não têm a liberdade dos deuses. Os mortais têm a liberdade de escolha, devendo, pois, concentrar-se e comprometer-se nos afazeres da vida cotidiana, vivendo-a em sua plenitude, tornando-se criativos na repetição e na monotonia.\n[…]\nO mito de Sísifo, livro de Albert Camus",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Gerundismo",
      "descricao": "Uso excessivo do gerúndio em locuções como vou estar enviando, comum no português brasileiro"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "O gerundismo, como em vou estar transferindo sua ligação, costuma ser atribuído a traduções literais do inglês em qual tipo de serviço?",
    "resposta": "Telemarketing",
    "distratores": [
      "Dublagem de filmes",
      "Manuais de informática",
      "Bulas de remédio"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Gerundismo"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Gerundismo",
        "situacao": "ok",
        "texto": "Gerundismo é uma locução verbal que consiste no uso sistemático de verbos no gerúndio, cujo emprego é relativamente recente no português, particularmente o brasileiro. A concordância da construção com a sintaxe do português não é ponto pacífico, sendo, por vezes, considerada um vício de linguagem. O gerundismo foi estigmatizado graças ao seu emprego constantemente impreciso semanticamente e ao pre\n[…]\nEm lugar de dizer \"Amanhã vou viajar (ou viajarei) para Recife\", diz-se: \"Amanhã vou estar viajando para Recife\".[carece de fontes]?\n[…]\nO gerundismo pode ter tido sua origem em traduções literais do inglês de expressões empregando o futuro contínuo desta língua, sem atenção para a semântica e sintaxe originais e ao fato de que este tempo verbal inglês é construído com o particípio presente, uma das formas infinitivas do verbo, que muitas vezes deve ser traduzido para o infinitivo português e não para o seu gerúndio:\n[…]\nNo exemplo acima, a tradução correta do gerúndio inglês é dada pelo infinitivo português, o mesmo sendo necessário nas traduções do futuro contínuo.\n[…]\nExemplo: Para o verbo \"amare\" (amar), o gerúndio do futuro seria \"amaturus esse\" (a ponto de estar prestes a amar).\n[…]\nA construção é particular do português brasileiro, uma vez que em Portugal costuma-se substituir o gerúndio pela construção a + infinitivo (\"estou cantando\" por \"estou a cantar\"). De observar contudo que o gerúndio é também frequentemente usado nas regiões meridionais e insulares de Portugal. O emprego excessivo do recurso, especialmente por operadores de telemarketing, estigmatizou seu uso e provocou muita polêmica quanto a sua correção.\n[…]\nRecentemente, operadores de telemarketing passaram a receber orientação para evitar gerundismos em virtude de diversos fatores tais como tornar-se conclusivo evitando ser ambíguo, não usar uma construção que é desagradável ao cliente, buscar clareza de expressão, entre outros."
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Crase",
      "descricao": "Fusão de duas vogais iguais, como a preposição a com o artigo a, marcada pelo acento grave"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em andar a cavalo, o a fica sem o acento grave da crase. Que característica da palavra cavalo explica isso?",
    "resposta": "É masculina",
    "distratores": [
      "É um verbo",
      "Está no plural",
      "É oxítona"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Crase"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Crase",
        "situacao": "ok",
        "texto": "Crase é um dos metaplasmos por supressão de fonemas a que as palavras podem estar sujeitas à medida que uma língua evolui.\n[…]\nO sinal que indica a fusão, que indica ter havido crase de dois aa, é o acento grave.\n[…]\nObs.: As palavras terra e casa são casos especiais de crase. A preposição \"a\" antes da palavra casa (lar) só recebe o acento grave quando vier acompanhada de um modificador, caso contrário não ocorre a crase. Já com a palavra terra (chão firme, oposto a bordo) só ocorre crase quando vier acompanhada de um modificador — da mesma maneira que existe a expressão \"a bordo\", enquanto que com a palavra terra (terra natal ou planeta) sempre ocorre crase.\n[…]\nPara saber se a crase é aplicável, ou seja, se deve ser usada a contração à (com acento grave) em vez da preposição a (sem acento), aplique-se uma das regras de verificação:\n[…]\n2) Troca-se o complemento nominal, após \"a\", de um substantivo feminino para um substantivo masculino; se, com a troca, for necessário o uso da combinação ao, então a crase é aplicável.\n[…]\nObs.: a crase não ocorre antes de palavras masculinas; antes de verbos, de pronomes pessoais, de nomes de cidade que não utilizam o artigo feminino, da palavra casa quando tem significado do próprio lar, da palavra terra quando tem sentido de solo e de expressões com palavras repetidas (dia a dia).\n[…]\nAntes de substantivos masculinos, salvo no já supracitado caso de estar subentendida a expressão \"à moda de\":\n[…]\nAntes de pronomes pessoais, relativos, demonstrativos, indefinidos, interrogativos, possessivos masculinos e de tratamento (com exceção de senhora, senhorita):\n[…]\nFui à Bahia. Vim da Bahia. (Há crase)"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Rio de Janeiro",
      "descricao": "Cidade do Sudeste brasileiro, à beira da baía de Guanabara, capital do estado de mesmo nome"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Rio de Janeiro quer dizer rio de janeiro, mas a cidade fica à beira de uma baía. Por que os portugueses usaram a palavra rio?",
    "resposta": "Tomaram a baía por rio",
    "distratores": [
      "Havia uma cachoeira ali",
      "Chovia muito em janeiro",
      "Homenagearam um navio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, also known simply as Rio, is the capital and largest city of the state of Rio de Janeiro. It is the second-largest city in Brazil after São Paulo, and the largest by number of international tourists. It has a population of 6 million in the city proper, and 13 million in its metropolitan area as of 2025. It is also the sixth-most-populous city in the Americas.\n[…]\nRio de Janeiro is near the west end of a strip (from Cabo Frio to just east of Ilha Grande) of Brazil's Atlantic coast close to the Tropic of Capricorn where the shoreline is oriented east and west; the city thus faces largely south. It was founded at the entrance to an inlet, Guanabara Bay (Baía de Guanabara), which is marked by a point of land called Sugar Loaf (Pão de Açúcar) – a \"calling card\" of the city.\n[…]\nCidade das Artes (City of Arts) is a cultural complex in Barra da Tijuca in the Southwest Zone of Rio de Janeiro, which was originally planned to open in 2004. Formally known as \"Cidade da Música\" (City of Music), it was finally inaugurated at the beginning of 2013.\n[…]\nIt was originally organized in Rio de Janeiro, from where the name comes, and has become a world-level event and, in 2004, had its first edition abroad in Lisbon, Portugal, before Madrid, Spain, and Las Vegas, United States. The festival is considered the eighth best in the world by the specialized site Fling Festival.\n[…]\nAs in the rest of Brazil, association football is the most popular sport. The city's major teams are Flamengo, Vasco da Gama, Fluminense and Botafogo. Madureira, Bangu, Portuguesa, America and Bonsucesso are small clubs. Players born in the city include Zico, Romário and Ronaldo. Rio de Janeiro was one of the host cities of the 1950 and 2014 FIFA World Cups, for which on both occasions Brazil was the host nation.\n[…]\nOutline of Rio de Janeiro\n[…]\nRio de Janeiro City Hall website (in Portuguese)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade se organizou, foi descoberta pelo explorador português Gaspar de Lemos em 1 de janeiro de 1502. Embora se afirme que o nome \"Rio de Janeiro\" tenha sido escolhido em virtude de os portugueses acreditarem tratar-se a baía da foz de um rio, na verdade, à época, não havia qualquer distinção de nomenclatura entre rios, sacos e baías — motivo pelo qual foi o corpo d'água corretamente designado como rio.\n[…]\nO litoral do atual estado do Rio de Janeiro era habitado por índios do tronco linguístico macro-jê há milhares de anos. Por volta do ano 1000, a região foi conquistada por povos de língua tupi procedentes da Amazônia. Um destes povos, os tamoios, também conhecidos como tupinambás, ocupava a região ao redor da Baía de Guanabara no século XVI, quando os portugueses chegaram à região.\n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nO litoral da baía de Guanabara é recortado, baixo, abarca muitas ilhas (como a do Governador com 29 km²) e, em suas margens, situam-se o centro comercial e os subúrbios industriais.\n[…]\nLista de consulados no Rio de Janeiro",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Rio Amazonas",
      "descricao": "Rio da América do Sul que atravessa o norte do Brasil, nomeado por expedicionários espanhóis no século dezesseis"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "No século dezesseis, espanhóis que desceram o grande rio da Amazônia relataram combates contra quem, o que inspirou o nome Amazonas?",
    "resposta": "Mulheres guerreiras",
    "distratores": [
      "Gigantes canibais",
      "Piratas ingleses",
      "Monges guerreiros"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Amazon_River"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Amazon_River",
        "situacao": "ok",
        "texto": "The Amazon River in South America is the largest river in the world by discharge volume of water, and the second-longest or longest river system in the world, a title which is disputed with the Nile.\n[…]\nWater discharge of the Amazon River at the Itacoatiara gauging station.\n[…]\nThe Amazon has over 1,100 tributaries, twelve of which are over 1,500 km (930 mi) long. Some of the more notable ones are:\n[…]\nAmazon natural region, in Colombia\n[…]\nPeruvian Amazonia in Peru\n[…]\nThis article incorporates text from a publication now in the public domain: Church, George Earl (1911). \"Amazon\". In Chisholm, Hugh (ed.). Encyclopædia Britannica. Vol. 1 (11th ed.). Cambridge University Press. pp. 783–90.\n[…]\nGarfield, Seth. In search of the Amazon: Brazil, the United States and the nature of a region (Duke University Press, 2013) online\n[…]\nHecht, Susanna, et al. \"The Amazon in motion: Changing politics, development strategies, peoples, landscapes, and livelihoods.\" Amazon Assessment Report 2021, Part II (2021): ch 14 pp 1–65. online, with long bibliography\n[…]\nNugent, Stephen L. The rise and fall of the Amazon rubber industry: an historical anthropology (Routledge, 2017) online.\n[…]\nWohl, Ellen (2011). The Amazon: Rivers of Blushing Dolphins. A World of Rivers. The University of Chicago Press.\n[…]\nInformation on the Amazon from Extreme Science\n[…]\nA photographic journey up the Amazon River from its mouth to its source\n[…]\nAmazon Alive: Light & Shadow documentary film about the Amazon river\n[…]\nAmazon River Ecosystem\n[…]\nResearch on the influence of the Amazon River on the Atlantic Ocean at the University of Southern California Archived 9 November 2019 at the Wayback Machine\n[…]\nGeographic data related to Amazon River at OpenStreetMap"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Amazonas",
        "situacao": "ok",
        "texto": "Rio Amazonas é o maior rio em vazão de água da Terra e o segundo mais extenso do mundo, após o Rio Nilo. Com 6 992,06 quilômetros, percorre o norte da América do Sul, a floresta amazônica e desagua no Oceano Atlântico. Possui mais de mil afluentes, sendo que alguns deles, como o Madeira, o Negro e o Japurá, estão entre os 10 maiores rios do planeta.\n[…]\nO rio foi inicialmente conhecido pelos europeus como Marañón (Maranhão) e a parte peruana do rio ainda é conhecida com esse nome até hoje. O nome Amazonas, no entanto, foi dado depois de guerreiros nativos terem atacado uma expedição do século XVI de Francisco de Orellana. Os guerreiros eram liderados por mulheres, lembrando Orellana das guerreiras amazônicas, uma tribo de mulheres guerreiras relacionadas aos citas e sármatas iranianos mencionados na mitologia grega.\n[…]\nA palavra Amazon em si pode ser derivada do composto iraniano *ha-maz-an-\"(um) lutando juntos\" ou etnônimo *ha-mazan- \"guerreiros\", uma palavra atestada indiretamente através de uma derivação, um verbo denominal em Hesíquio de Alexandria brilho \"ἁμαζακάραν · πολεμεῖν Πέρσαι.\" (\"hamazakaran: 'para fazer a guerra' em persa\"), onde ele aparece junto com o Indo-iranianas raiz *kar- \"make\" (a partir do qual sânscrito Carma é também derivado).\n[…]\nHá ampla evidência de que as áreas ao redor do Rio Amazonas abrigavam sociedades indígenas complexas e de grande escala, principalmente chefaturas que desenvolveram vilas e cidades. Os arqueólogos estimam que na época em que o conquistador espanhol Francisco de Orellana viajou pela Amazônia em 1541, mais de 3 milhões de indígenas já viviam na região. Estes assentamentos pré-colombianos criaram civilizações altamente desenvolvidas.\n[…]\nBacia do rio Amazonas\n[…]\nAmazônia\n[…]\nMedia relacionados com Rio Amazonas no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Vandalismo",
      "descricao": "Destruição deliberada de bens, palavra derivada do nome do povo germânico dos vândalos"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A palavra vandalismo nasceu da má fama dos vândalos, povo germânico. Que episódio do século cinco explica essa fama?",
    "resposta": "Saque de Roma",
    "distratores": [
      "Queda de Constantinopla",
      "Incêndio de Alexandria",
      "Invasão da Bretanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vandalism"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vandalism",
        "situacao": "ok",
        "texto": "Vandalism is the action involving deliberate destruction of or damage to public or private property.\n[…]\nThe term includes property damage, such as graffiti and defacement directed towards any property without permission of the owner. The term finds its roots in an Enlightenment view that the Germanic Vandals were a uniquely destructive people, as they sacked Rome in 455 AD.\n[…]\nThe Vandals, an ancient Germanic people, are associated with senseless destruction as a result of their sack of Rome under King Genseric in 455. During the Enlightenment, Rome was idealized, while the Goths and Vandals were blamed for its destruction. The Vandals may not have been any more destructive than other invaders of ancient times, but they did inspire English poet John Dryden to write, Till Goths, and Vandals, a rude Northern race, Did all the matchless Monuments deface (1694).\n[…]\nIdeological vandalism (carried out to further an explicit ideological cause or deliver a message).\n[…]\nVandalism on web maps has been called \"cartographic vandalism\".\n[…]\nDefacing could also be one of the techniques that many graphic designers use, by applying their own hand writing on a graphic itself. Sometimes the use of this technique might be mistaken as vandalism to the original work, as exemplified by the work of Stefan Sagmeister, including his Lou Reed CD cover. A unique use of the defacement technique is the CD cover for A.P.C.\n[…]\nLibrary book vandalism\n[…]\nVandalism of art\n[…]\nThe dictionary definition of vandalism at Wiktionary\n[…]\nMedia related to Vandalism at Wikimedia Commons\n[…]\nThe Free Dictionary: Vandalism\n[…]\nMerriam Webster: Vandalism"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vandalismo",
        "situacao": "ok",
        "texto": "Vandalismo é a ação de destruir ou danificar uma propriedade alheia de forma intencional, seja esta pública ou privada, geralmente sem motivo aparente ou com o propósito de causar ruína.\n[…]\nO nome deriva do povo vândalo, um dos povos bárbaros cujas invasões e ataques ao Império Romano contribuíram para a queda deste.\n[…]\nEm seu livro Memoirs, ele escreveu: \"Inventei a palavra para abolir o ato\".\n[…]\nHistoricamente, o vandalismo foi justificado pelo pintor Gustave Courbet como a destruição de monumentos que simbolizam \"guerra e conquista\". Portanto, muitas vezes é feito como uma expressão de desprezo, criatividade ou ambos. A tentativa de Courbet, durante a Comuna de Paris de 1871, de desmantelar a coluna Vendôme, um símbolo do passado Império autoritário de Napoleão III, foi um dos eventos de vandalismo mais celebrados.\n[…]\nEm uma proposta na Conferência Internacional para a Unificação do Direito Penal, realizada em Madrid em 1933, Raphael Lemkin considerou a criação de dois novos crimes internacionais (delicta juris gentium): o crime de barbárie, que consiste no extermínio de coletividades raciais, religiosas ou sociais e o crime de vandalismo, que consiste na destruição de obras artísticas e culturais desses grupos. A proposta não foi aceita.\n[…]\nDesfiguração é um tipo de vandalismo que envolve danificar a aparência ou superfície de algo. O objeto do dano pode ser arquitetura, livros, pinturas, esculturas ou outras formas de arte.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição fundada no Rio de Janeiro em 1897 para cultivar a língua e a literatura nacionais"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "A Academia Brasileira de Letras seguiu o modelo de uma academia estrangeira, cujos membros também são chamados de imortais. De que país?",
    "resposta": "França",
    "distratores": [
      "Portugal",
      "Itália",
      "Espanha"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters",
        "situacao": "ok",
        "texto": "The Brazilian Academy of Letters (Portuguese: Academia Brasileira de Letras, ABL; Portuguese pronunciation: [akadeˈmiɐ bɾaziˈlejɾɐ dʒi ˈletɾɐs] ) is a Brazilian literary non-profit society established at the end of the 19th century. The first president, Machado de Assis, declared its foundation on 15 December 1896, with the by-laws being passed on 28 January 1897. On 20 July 1897, the academy star\n[…]\nThe academy also publishes a literary periodical, the Brazilian Review (Revista Brasileira), with quarterly editions.\n[…]\nBoth the Houaiss and the Aurélio Dictionaries, however, were first compiled by members of the academy Antônio Houaiss and Aurélio Buarque de Holanda Ferreira, respectively. The preparation of an official dictionary of the Portuguese language is a stated goal of the Brazilian Academy of Letters.\n[…]\nAll members go through a solemn session, in which they wear the academy's official garment for the first time. During the ceremony, the new member makes a speech remembering her or his predecessor and all previous members that occupied the chair.\n[…]\nThe ABL, which was a traditionally male institution, elected its first female member on Friday, 4 November 1977 – the novelist Rachel de Queiroz. This groundbreaking election of the novelist opened the path for other female members. The academy currently has six members (15% of its total membership).\n[…]\nThe presidency of the Brazilian Academy of Letters has been held by members of the academy since its first years, beginning with Machado de Assis. The academy's historical list records presidents from 1897 through Merval Pereira, whose presidency began in 2022.\n[…]\nList of members of the Brazilian Academy of Letters\n[…]\nLisbon Academy of Sciences, Class of Letters\n[…]\nGalician Academy of the Portuguese Language\n[…]\nBrazilian Academy of Sciences\n[…]\nBrazilian Academy of Fine Arts\n[…]\nBrazilian Academy of Music\n[…]\nAcadémie Française"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nEm 1923, graças à iniciativa de seu presidente à época, Afrânio Peixoto, e do então embaixador da França, Raymond Conty, o governo francês doou à Academia o prédio do Pavilhão Francês, edificado para a Exposição do Centenário da Independência do Brasil, uma réplica do Petit Trianon de Versalhes, erguido pelo arquiteto Ange-Jacques Gabriel, entre 1762 e 1768. Em 22 de Setembro de 1941, a Academia Brasileira de Letras foi agraciada com a Grã-Cruz da Ordem Militar de Sant'Iago da Espada de Portugal.\n[…]\nA Academia Brasileira de Letras tem quarenta cadeiras, ocupadas por quarenta membros efetivos perpétuos (no mínimo vinte e cinco devem morar na cidade que sedia a instituição, o Rio de Janeiro), sendo cada novo membro eleito pelos acadêmicos para ocupar uma cadeira vaga devido ao falecimento do último titular. Há ainda vinte membros estrangeiros correspondentes. No quadro atual, o membro mais idoso é Geraldo Holanda Cavalcanti aos 96 anos, enquanto o mais jovem é Ana Maria Gonçalves, com 55 anos.\n[…]\nO jornalista Fernando Jorge, em \"A  Academia do Fardão e da Confusão: a Academia Brasileira de Letras e os seus 'Imortais' mortais\", critica a eleição de \"personalidades\" para a ABL, ou seja, pessoas influentes na sociedade, mas cuja principal ocupação não era a literatura e que, muitas vezes, produziam materiais apenas para que pudessem ser eleitos, nunca mais voltando a produzir qualquer obra de valor literário.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição fundada no Rio de Janeiro em 1897 para cultivar a língua e a literatura nacionais"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quantas cadeiras tem a Academia Brasileira de Letras, cada uma ocupada por um membro vitalício?",
    "resposta": "Quarenta",
    "distratores": [
      "Trinta",
      "Cinquenta",
      "Sessenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters",
        "situacao": "ok",
        "texto": "The Brazilian Academy of Letters (Portuguese: Academia Brasileira de Letras, ABL; Portuguese pronunciation: [akadeˈmiɐ bɾaziˈlejɾɐ dʒi ˈletɾɐs] ) is a Brazilian literary non-profit society established at the end of the 19th century. The first president, Machado de Assis, declared its foundation on 15 December 1896, with the by-laws being passed on 28 January 1897. On 20 July 1897, the academy star\n[…]\nThe academy also publishes a literary periodical, the Brazilian Review (Revista Brasileira), with quarterly editions.\n[…]\nBoth the Houaiss and the Aurélio Dictionaries, however, were first compiled by members of the academy Antônio Houaiss and Aurélio Buarque de Holanda Ferreira, respectively. The preparation of an official dictionary of the Portuguese language is a stated goal of the Brazilian Academy of Letters.\n[…]\nAll members go through a solemn session, in which they wear the academy's official garment for the first time. During the ceremony, the new member makes a speech remembering her or his predecessor and all previous members that occupied the chair.\n[…]\nThe ABL, which was a traditionally male institution, elected its first female member on Friday, 4 November 1977 – the novelist Rachel de Queiroz. This groundbreaking election of the novelist opened the path for other female members. The academy currently has six members (15% of its total membership).\n[…]\nThe presidency of the Brazilian Academy of Letters has been held by members of the academy since its first years, beginning with Machado de Assis. The academy's historical list records presidents from 1897 through Merval Pereira, whose presidency began in 2022.\n[…]\nList of members of the Brazilian Academy of Letters\n[…]\nLisbon Academy of Sciences, Class of Letters\n[…]\nGalician Academy of the Portuguese Language\n[…]\nBrazilian Academy of Sciences\n[…]\nBrazilian Academy of Fine Arts\n[…]\nBrazilian Academy of Music\n[…]\nAcadémie Française"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nCom a presença de trinta membros, surgiu a necessidade de completar o número de quarenta, em conformidade com o modelo da Academia Francesa. Os dez membros adicionais foram eleitos: Aluísio Azevedo, Barão de Loreto, Clóvis Beviláqua, Domício da Gama, Eduardo Prado, Luís Guimarães Júnior, Magalhães de Azeredo, Oliveira Lima, Raimundo Correia e Salvador de Mendonça.\n[…]\nO Mausoléu da Academia Brasileira de Letras se encontra no Cemitério São João Batista, Rio de Janeiro - RJ. Ele é uma construção retangular de dois andares, na qual estão sepultados alguns membros da Academia Brasileira de Letras. Foi construído entre 1958 e 1961, durante a gestão de Austregésilo de Athayde (1959-1993).\n[…]\nA Academia Brasileira de Letras tem quarenta cadeiras, ocupadas por quarenta membros efetivos perpétuos (no mínimo vinte e cinco devem morar na cidade que sedia a instituição, o Rio de Janeiro), sendo cada novo membro eleito pelos acadêmicos para ocupar uma cadeira vaga devido ao falecimento do último titular. Há ainda vinte membros estrangeiros correspondentes. No quadro atual, o membro mais idoso é Geraldo Holanda Cavalcanti aos 96 anos, enquanto o mais jovem é Ana Maria Gonçalves, com 55 anos.\n[…]\nA primeira mulher eleita para a Academia Brasileira de Letras foi Rachel de Queiroz, em 1977. O regimento da instituição costumava proibir a eleição de mulheres.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Escrúpulo (palavra)",
      "descricao": "Palavra para hesitação moral, vinda do latim scrupulus, diminutivo de pedra pontuda"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As palavras escrúpulo e cálculo vêm de diminutivos latinos que nomeavam o mesmo tipo de objeto. Qual?",
    "resposta": "Pedrinha",
    "distratores": [
      "Moeda",
      "Semente",
      "Ossinho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Scrupulosity",
      "https://en.wikipedia.org/wiki/Calculus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Scrupulosity",
        "situacao": "ok",
        "texto": "Scrupulosity, also known as religious obsessive–compulsive disorder or scrupulous–compulsive disorder (SCD), is a mental disorder defined by intrusive thoughts about moral or religious ideas, pathological feelings of guilt, and compulsions which attempt to mitigate such thoughts. It is widely understood as a subtype of obsessive–compulsive disorder (OCD)."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Calculus",
        "situacao": "ok",
        "texto": "Calculus is the branch of mathematics that studies continuous change, and is the principal precursor of modern mathematical analysis. Originally called infinitesimal calculus or the calculus of infinitesimals, it has two major branches, differential calculus and integral calculus. Differential calculus studies instantaneous rates of change and slopes of curves; integral calculus studies accumulati\n[…]\nWorking out a rigorous foundation for calculus occupied mathematicians for much of the century following Newton and Leibniz.\n[…]\nIn economics, calculus allows for the determination of maximal profit by providing a way to easily calculate both marginal cost and marginal revenue. The Black–Scholes model, a central concept in option pricing, employs a differential equation.\n[…]\nGlossary of calculus\n[…]\nList of calculus topics\n[…]\nList of derivatives and integrals in alternative calculi\n[…]\nPublications in calculus\n[…]\n\"Calculus\", Encyclopedia of Mathematics, EMS Press, 2001 [1994]\n[…]\nWeisstein, Eric W. \"Calculus\". MathWorld.\n[…]\nTopics on Calculus at PlanetMath.\n[…]\nCalculus Made Easy (1914) by Silvanus P. Thompson Full text in PDF\n[…]\nCalculus on In Our Time at the BBC\n[…]\nCalculus.org: The Calculus page at University of California, Davis – contains resources and links to other sites\n[…]\nEarliest Known Uses of Some of the Words of Mathematics: Calculus & Analysis\n[…]\nThe Role of Calculus in College Mathematics Archived 26 July 2021 at the Wayback Machine from ERICDigests.org\n[…]\nOpenCourseWare Calculus from the Massachusetts Institute of Technology\n[…]\nInfinitesimal Calculus – an article on its historical development, in Encyclopedia of Mathematics, ed. Michiel Hazewinkel.\n[…]\nDaniel Kleitman, MIT. \"Calculus for Beginners and Artists\".\n[…]\nCalculus training materials at imomath.com Archived 9 July 2023 at the Wayback Machine\n[…]\n(in English and Arabic) The Excursion of Calculus, 1772"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escrupulosidade",
        "situacao": "ok",
        "texto": "Escrupulosidade é um distúrbio psicológico caracterizado principalmente por sentimento de culpa patológica ou obsessão relacionada a questões morais ou religiosas.\n[…]\nA Exposição com Prevenção de Resposta (ERP), uma forma de psicoterapia cognitivo-comportamental, é amplamente usada para o TOC em geral e pode ser promissora, em particular, por escrupulosidade  .\n[…]\nNo entanto, o ERP é consideravelmente mais difícil de implementar no caso de escrupulosidade do que outros distúrbios do DOC, uma vez que a escrupulosidade geralmente está ligada a questões espirituais que não são situações e objetos específicos. Por exemplo, o ERP não é viável para um homem obcecado por sentimentos que Deus o rejeitou e o está punindo e, em qualquer caso, não deve  contrastar com a moral do paciente .\n[…]\nEm seu livro A Thousand Frightening Fantasies, o psicólogo William Van Ornum descreve a experiência da escrupulosidade e o sofrimento a ela associado, propondo estratégias comportamentais para enfrentá-la.\n[…]\nPoucas evidências estão disponíveis sobre o uso de drogas no tratamento da escrupulosidade . Embora drogas serotoninérgicas sejam frequentemente usadas para o tratamento de transtorno obsessivo-compulsivo , estudos sobre o tratamento farmacológico da escrupulosidade ainda são escassos  .\n[…]\nInternational OCD Foundation (OCDF) / Fundação Internacional do TOC (OCDF). Organização sem fins lucrativos dedicada a dar suporte a indivíduos com transtorno obsessivo-compulsivo (OCDF), desde 1986 levanta fundos para pesquisa; compila e divulga as informações mais recentes sobre tratamento, incluindo escrupulosidade .",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Cereal (palavra)",
      "descricao": "Palavra para os grãos como trigo, arroz e milho, derivada do nome da deusa romana Ceres"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que a palavra cereal e o planeta anão Ceres têm em comum na origem do nome?",
    "resposta": "Deusa romana das colheitas",
    "distratores": [
      "Deus romano do vinho",
      "Ninfa das fontes",
      "Titã do tempo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cereal",
      "https://en.wikipedia.org/wiki/Ceres_(mythology)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cereal",
        "situacao": "ok",
        "texto": "A cereal is a grass  (family Poaceae) cultivated for its edible grain. Cereals are the world's largest crops, and are therefore staple foods. They include rice, wheat, rye, oats, barley, millet, and maize (US: corn). Edible grains from other plant families, such as amaranth, buckwheat and quinoa, are pseudocereals. Most cereals are annuals, producing one crop from each planting, though rice is som\n[…]\nWinter varieties are hardy enough to be planted in the autumn, becoming dormant in the winter, and harvested in spring or early summer; spring varieties are planted in spring and harvested in late summer. The term cereal is derived from the name of the Roman goddess of grain crops and fertility, Ceres.\n[…]\nIn these agricultural regions, religion was often shaped by the divinity associated with the grain and harvests. In the Mesopotamian creation myth, an era of civilization is inaugurated by the grain goddess Ashnan. The Roman goddess Ceres presided over agriculture, grain crops, fertility, and motherhood; the term cereal is derived from Latin cerealis, \"of grain\", originally meaning \"of [the goddess] Ceres\".\n[…]\nCereals are the world's largest crops by tonnage of grain produced. Three cereals, maize, wheat, and rice, together accounted for 91% of all cereal production worldwide in 2024, and 40% of the global availability of food energy in 2023, while the production of oats and rye has drastically fallen from their 1960s levels.\n[…]\nThe table shows the annual production of cereals in 1961, 1980, 2000, 2010, and 2024.\n[…]\nCereals are traded as futures on world commodity markets, helping to mitigate the risks of changes in price for example, if harvests fail.\n[…]\nRosentrater, Kurt August; Evers, Anthony D. (2018). Kent's Technology of Cereals: An Introduction for Students of Food Science and Agriculture (5th ed.). Duxford, England: Woodhead Publishing. ISBN 978-0-08-100532-3. OCLC 1004672994."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ceres_(mythology)",
        "situacao": "ok",
        "texto": "In ancient Roman religion, Ceres ( SEER-eez, Latin: [ˈkɛreːs]) was a goddess of agriculture, grain crops, fertility, and motherly relationships. She was originally the central deity in Rome's so-called plebeian or Aventine Triad, then was paired with her daughter Proserpina in what Romans described as \"the Greek rites of Ceres\". Her seven-day April festival of Cerealia included the popular Ludi Ce\n[…]\nSeveral of Ceres's ancient Italic precursors are connected to human fertility and motherhood; the Pelignan goddess Angitia Cerealis has been identified with the Roman goddess Angerona (associated with childbirth).\n[…]\nAccording to interpretatio romana, by which Roman deities were identified with their Greek counterparts, she was an equivalent to Demeter, one of the Twelve Olympians of Greek religion and mythology; this made Ceres one of Rome's twelve Di Consentes, daughter of Saturn and Ops, sister of Jupiter, mother of Proserpina by Jupiter and sister of Juno, Vesta, Neptune, and Dis. Ceres's known mythology is indistinguishable from Demeter's:\n[…]\nRoman tradition credited Ceres's eponymous festival, Cerealia, to Rome's second king, the semi-legendary Numa. Ceres's senior, male priesthood was a minor flaminate whose establishment and rites were supposedly also innovations of Numa. Her affinity and joint cult with Tellus, also known as Terra Mater (Mother Earth) may have developed at this time.\n[…]\nThe word cereal derives from Ceres's association with edible grains. Whereas Ceres represents food, her son Liber (later indistinguishable from Bacchus) represents wine and \"good living\". The Roman comedian Terence (c. 195/185 – c. 159 BC) uses the line sine Cerere et Baccho friget Venus which at its simplest translates as \"without food and drink, love freezes\" or \"love needs food and wine to thrive\" - probably proverbial and widespread in his own day."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Cereal",
        "situacao": "ok",
        "texto": "Cereais são as plantas cultivadas por seus frutos (do tipo cariopse) comestíveis, normalmente chamados grãos e são na maior parte gramíneas, compondo uma família com mais de 6 mil espécies. Os cereais são produzidos em todo o mundo, em maiores quantidades do que qualquer outro tipo de produto e são os que mais fornecem calorias ao ser humano. Em alguns países em desenvolvimento, os cereais constit\n[…]\nNos países desenvolvidos, o consumo de cereal é mais moderado mas ainda substancial. A palavra cereal tem sua origem na deusa romana do grão, Ceres. O trigo sarraceno, a quinoa e o amaranto são plantas consideradas pseudocereais, plantas de famílias diferentes a dos cereais mas que apresentam valores proporcionalmente próximos de carboidratos, lipídeos, proteínas e fibras em relação aos cereais.\n[…]\nO centeio é o cereal mais rústico, suportando o inverno no sub-ártico da Sibéria. O trigo, por sua vez, é o mais popular e, apesar de ser de estações frias, pode ser cultivado nos trópicos, em regiões de clima mais ameno, na realidade todos os cereais de clima frio podem ser cultivados em regiões tropicais, desde que suas necessidades climáticas sejam atendidas.\n[…]\nDentre os nutrientes os carboidratos são os que aparecem em maior proporção por grão, com valores em torno de 78 a 83% a depender do cereal, sendo quase em sua totalidade o amido. O glúten é uma substância presente nos cereais, especialmente no trigo, formado por duas proteínas: gliadina e glutenina. As gorduras por sua vez são principalmente trigliceróis. Dentre os sais temos o sódio, o potássio, o cloro, o fósforo, o cálcio, o magnésio, o enxofre e o ferro.\n[…]\nQuando os cereais são moídos, ou refinados, temos a remoção do farelo e do gérmen, permanecendo apenas o endosperma. Desta maneira a maior parte do valor nutricional do cereal é perdida, o que não ocorre com os cereais integrais.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Senado (palavra)",
      "descricao": "Palavra para a assembleia legislativa, vinda do latim senatus, conselho dos anciãos"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que as palavras senado e senil têm em comum na sua origem?",
    "resposta": "Vêm do latim para velho",
    "distratores": [
      "Vêm do grego para sábio",
      "Vêm do latim para seis",
      "Vêm do grego para lei"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Senate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Senate",
        "situacao": "ok",
        "texto": "A senate is a deliberative assembly, often the upper house or chamber of a bicameral legislature. The name comes from the ancient Roman Senate (Latin: Senatus), so-called as an assembly of the senior (Latin: senex meaning \"the elder\" or \"old man\") and therefore considered wiser and more experienced members of the society or ruling class. However the Roman Senate was not the ancestor or predecessor"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Senado",
        "situacao": "ok",
        "texto": "Um senado é uma assembleia deliberativa, em muitos casos a câmara alta de uma legislatura ou parlamento bicamarais. Os membros ou legisladores de um senado são denominados \"senadores\". Os senados modernos têm geralmente a função de avaliar e ponderar a legislação promulgada por uma câmara baixa, cujos membros são geralmente eleitos.\n[…]\nO seu significado deriva de uma forma antiga de organização social em que os poderes legislativos ou consultivos estavam restritos aos homens mais velho, o termo \"senado\" geralmente refere-se a qualquer autoridade plenária geralmente constituída pelos membros mais velhos de determinada comunidade, como o corpo deliberativo de uma universidade ou instituição de ensino superior.\n[…]\nO senado original foi o Senado romano, em funcionamento até ao ano 580. No Império Bizantino, o Senado bizantino manteve-se em atividade até à Quarta Cruzada, por volta de 1202-04. O termo contemporâneo \"senado\" tem origem na palavra latina senātus, que por sua vez tem origem em senex, “sénior”, O termo era usado para o Senado romano, assim denominado por ser a assembleia dos séniores (Latim: senex) e, alegadamente, os mais sábios e experientes membros da sociedade ou entre a classe dominante.\n[…]\nDurante a Guerra de independência da Grécia, foram estabelecidos dois senados com poderes legislativos e executivos. Em alguns países unicamerais, sobretudo federações, alguns dos legisladores são eleitos de forma diferente dos restantes e são denominados senadores, uma vez que representam os territórios, enquanto os outros membros representam a população em geral, como é o caso de São Cristóvão e Nevis, Comores e Micronésia.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Algarismo",
      "descricao": "Palavra para os sinais que representam números, derivada do nome do matemático Al-Khwarizmi"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Que matemático persa do século nove deu origem, com seu nome, tanto à palavra algarismo quanto à palavra algoritmo?",
    "resposta": "Al-Khwarizmi",
    "distratores": [
      "Omar Khayyam",
      "Avicena",
      "Al-Biruni"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi",
      "https://en.wikipedia.org/wiki/Algorithm"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi",
        "situacao": "ok",
        "texto": "Muhammad ibn Musa al-Khwarizmi, or simply al-Khwarizmi (c. 780 – c. 850) was a mathematician active during the Islamic Golden Age, who produced Arabic-language works in mathematics, astronomy, and geography. Around 820, he worked at the House of Wisdom in Baghdad, the contemporary capital city of the Abbasid Caliphate. One of the most prominent scholars of the period, his works were widely influen\n[…]\nAl-Khwarizmi's name was latinized as Algoritmi, making his name the origin of the word \"algorithm\".\n[…]\nAs part of 12th century wave of Arabic science flowing into Europe via translations, these texts proved to be revolutionary in Europe. Al-Khwarizmi's Latinized name, Algorismus, turned into the name of method used for computations, and survives in the term \"algorithm\". It gradually replaced the previous abacus-based methods used in Europe.\n[…]\nDixit Algorizmi ('Thus spake Al-Khwarizmi') is the starting phrase of a manuscript in the University of Cambridge library, which is generally referred to by its 1857 title Algoritmi de Numero Indorum. It is attributed to the Adelard of Bath, who had translated the astronomical tables in 1126. It is perhaps the closest to Al-Khwarizmi's own writings.\n[…]\nAl-Khwarizmi's work on arithmetic was responsible for introducing the Arabic numerals, based on the Hindu–Arabic numeral system developed in Indian mathematics, to the Western world. The term \"algorithm\" is derived from the algorism, the technique of performing arithmetic with Hindu-Arabic numerals developed by al-Khwārizmī. Both \"algorithm\" and \"algorism\" are derived from the Latinized forms of al-Khwārizmī's name, Algoritmi and Algorismi, respectively.\n[…]\nAl-Khwarizmi (crater) — A crater on the far side of the Moon.\n[…]\n11156 Al-Khwarismi — Main-belt Asteroid, Discovered 1997 Dec 31 by P. G. Comba at Prescott.\n[…]\nMedia related to Muhammad ibn Musa al-Khwarizmi at Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Algorithm",
        "situacao": "ok",
        "texto": "In mathematics and computer science, an algorithm ( ) is a finite sequence of mathematically rigorous instructions, typically used to solve a class of specific problems or to perform a computation. Algorithms are used as specifications for performing calculations and data processing.\n[…]\nAround 825 AD, Persian scientist and polymath al-Khwarizmi wrote kitāb al-ḥisāb al-hindī (\"Book of Indian computation\") and kitab al-jam' wa'l-tafriq al-ḥisāb al-hindī (\"Addition and subtraction in Indian arithmetic\").\n[…]\nIn the early 12th century, Latin translations of these texts involving the Hindu–Arabic numeral system and arithmetic appeared, for example Liber Alghoarismi de practica arismetrice, attributed to John of Seville, and Liber Algoritmi de numero Indorum, attributed to Adelard of Bath. Here, alghoarismi or algoritmi is the Latinization of Al-Khwarizmi's name; the text starts with the phrase Dixit Algoritmi, or \"Thus spoke Al-Khwarizmi\".\n[…]\nIn the 9th century, Muḥammad ibn Mūsā al-Khwārizmī revolutionized the field by establishing the algorithm as a systematic, finite sequence of logical steps to solve mathematical problems. In his influential work, The Compendious Book on Calculation by Completion and Balancing, he moved beyond specific numerical solutions to introduce general procedures for algebraic reduction and balancing.\n[…]\nQuantum algorithm\n[…]\nRandomized algorithm\n[…]\n\"Algorithm\". Encyclopedia of Mathematics. EMS Press. 2001 [1994].\n[…]\nWeisstein, Eric W. \"Algorithm\". MathWorld.\n[…]\nDictionary of Algorithms and Data Structures – National Institute of Standards and Technology\n[…]\nAlgorithm repositories\n[…]\nThe Stony Brook Algorithm Repository – State University of New York at Stony Brook\n[…]\nCollected Algorithms of the ACM – Associations for Computing Machinery"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Alcuarismi",
        "situacao": "ok",
        "texto": "Para álgebra, palavra originário do livro de Alcuarismo, e para algoritmo e algarismo, palavras derivadas do seu nome, veja os respectivos artigos.\n[…]\nMaomé ibne Muça Alcuarismi (em árabe: محمد بن موسى الخوارزمي, translit. Muḥammad ibn Mūsā al-Khwārizmī; c. 780 – c. 850), conhecido simplesmente como Alcuarismi, foi um matemático, astrônomo e geógrafo que trabalhou em Bagdá durante o Califado Abássida, no reinado do califa Almamune. Escreveu sobre aritmética, álgebra, astronomia e geografia, reunindo e desenvolvendo conhecimentos matemáticos de origem indiana, grega e do mundo islâmico.\n[…]\nNos textos aritméticos árabes a partir do século IX, ṣifr designava sobretudo o sinal usado para uma posição vazia na escrita dos números, embora alguns autores também efetuassem operações envolvendo esse sinal. O tratado de Alcuarismi usa o sistema indiano de notação decimal posicional, com nove algarismos e um marcador para a posição vazia, e expõe métodos que já faziam parte desse sistema. A obra não constitui um ponto de origem isolado do zero como conceito matemático.\n[…]\nA Universidade Complutense de Madrid instalou em 2020 um busto de Alcuarismi, obra do escultor usbeque Zhasvant Annazarov, na Praça das Ciências do campus. A escultura foi doada pela embaixada do Usbequistão na Espanha e pela Real Liga Naval Espanhola. Em 2025, o governo do Usbequistão criou a Universidade Al-Khwarizmi em Urguenche, dedicada principalmente a áreas como matemática, informática, inteligência artificial e engenharia.\n[…]\nOs números e o ábaco, Instituto de Matemática e Estatística da Universidade de São Paulo, em português.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Tupinismos",
      "descricao": "Palavras do português herdadas da língua tupi, sobretudo no Brasil"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além de nomearem répteis, o que as palavras jacaré, jabuti e jiboia têm em comum?",
    "resposta": "Vêm do tupi",
    "distratores": [
      "Vêm do árabe",
      "Vêm do quimbundo",
      "Vêm do espanhol"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jabuti",
      "https://pt.wikipedia.org/wiki/Jiboia",
      "https://pt.wikipedia.org/wiki/Jacar%C3%A9"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jabuti",
        "situacao": "ok",
        "texto": "Jabuti, jaboti ou jabutim é a designação vulgar, utilizada no Brasil, para duas espécies de répteis providos de carapaça, exclusivamente terrestres, nativos da América do Sul, do gênero Chelonoidis, da ordem dos quelônios, da família dos testudinídeos. As duas espécies de jabuti distribuídas no Brasil são a Chelonoidis carbonaria (jabuti-piranga, o mais comum) e a Chelonoidis denticulata (jabuti-t\n[…]\n\"Jabuti\" vem do tupi antigo îaboti, donde também o nome alternativo do animal, \"jabutim\".\n[…]\nJabuti-piranga (Chelonoidis carbonaria; do tupi \"jabuti vermelho\"), distribuída em estados do Norte, Nordeste, Centro-oeste, Sudeste e Sul do Brasil. Esta espécie prefere áreas abertas e bordas de matas, mas pode ser encontrada no interior da Mata Amazônica, Mata Atlântica, na Caatinga e no Cerrado.\n[…]\nJabuti-tinga (Chelonoidis denticulata; em tupi, jabuti branco ou claro), menos comum, distribuída em estados do Norte, Nordeste e Centro-oeste. Esta espécie prefere florestas tropicais densas, como a Mata Amazônica, porém raramente pode ser encontrada em áreas mais abertas.\n[…]\nOs jabutis podem virar caso tentem cruzar algum obstáculo e é comum os machos virarem durante a cópula. Nesse caso, sem ter como se desvirar, o animal pode morrer. Os jabutis precisam de água fresca para viver, e não apenas a água dos alimentos. Por serem exclusivamente terrestres, e sem capacidade de nadar, a morte por afogamento infelizmente é muito comum.\n[…]\n\"Jabuti quando tem pressa, aprende a voar\".\n[…]\nNa agricultura, na Região Nordeste do Brasil, jabuti é um dispositivo tosco usado para descaroçar algodão.\n[…]\nNo processo legislativo brasileiro, jabuti designa a inserção de norma alheia ao tema principal em um projeto de lei ou medida provisória enviada ao Legislativo pelo Executivo. Este termo surgiu por analogia ao ditado popular “jabuti não sobe em árvore” usado para expressar fatos que não acontecem de forma natural."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jiboia",
        "situacao": "ok",
        "texto": "Boa é um gênero de serpentes da família Boidae. Podem ser encontradas na América do Sul e Central, e em Madagascar e Reunião."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jacar%C3%A9",
        "situacao": "ok",
        "texto": "Jacaré (do tupi iakaré) também chamado aligátor (do inglês \"alagarto\" ou \"alligator\"; do espanhol \"el lagarto\") e caimão (do taíno \"kaiman\"), são crocodilianos da família Alligatoridae, semelhantes aos crocodilos, dos quais se distinguem pela cabeça mais curta e larga, pela presença de membranas interdigitais (semelhante barbatana) nos polegares das patas traseiras e, com relação à dentição onde o\n[…]\nO termo \"jacaré\" se origina do termo tupi iakaré, de significado etimológico incerto. O termo \"aligátor\" se origina do termo inglês \"alligator\", que provavelmente é uma forma anglicanizada do espanhol \"el lagarto\". Algumas variações antigas da grafia em inglês incluem \"allagarta\" e \"alagarto\". Já o termo \"caimão\" se origina do termo taíno \"kaiman\". Caimão é um nome comum a diversos jacarés americanos do gênero Caiman.\n[…]\nJacaré-coroa, Paleosuchus trigonatus\n[…]\nJacaré-do-pantanal, Caiman yacare\n[…]\nJacaretinga, Caiman crocodilus\n[…]\nJacaré-de-papo-amarelo, Caiman latirostris\n[…]\nJacaré-açu, Melanosuchus niger\n[…]\nNa captura de crocodilo e jacaré, nativos venezuelanos utilizavam uma corda comprida de couro de peixe-boi, na qual havia um laço em uma das extremidades. Dois índios, um segurando a corda e o outro o laço, se aproximavam sem serem percebidos do animal que estava tomando sol. Ao mesmo tempo em que a fera se jogava na água o índio laçava sua boca e subia em cima dele.\n[…]\nO animal tentava nadar, mas não conseguia devido ao peso que estava nas suas costas e ia afundando, ao mesmo tempo que o índio dava outras voltas com a corda, amarrando ainda mais a boca. A gordura do jacaré era muito utilizada pelos nativos na feitura de pães.\n[…]\nNa contramão da maioria de outras tribos, os suruís-paíteres, de Mato Grosso e Rondônia, não comiam jacaré, enquanto que mulheres gestantes dos ianomámis, do Amazonas, não comiam jacaré para que a criança que ia nascer não se parecesse com este animal."
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Topônimos de origem tupi",
      "descricao": "Nomes de lugares do Brasil formados com palavras da língua tupi"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Os nomes dos estados do Pará, do Paraná e da Paraíba compartilham uma mesma palavra tupi. O que ela significa?",
    "resposta": "Mar ou rio grande",
    "distratores": [
      "Terra",
      "Pedra",
      "Floresta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Paran%C3%A1_(state)",
      "https://en.wikipedia.org/wiki/Par%C3%A1",
      "https://en.wikipedia.org/wiki/Para%C3%ADba"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Paran%C3%A1_(state)",
        "situacao": "ok",
        "texto": "Paraná ( PAR-ə-NAH, Brazilian Portuguese: [paɾɐˈna] ) is one of the 26 states of Brazil, in the south of the country. It is bordered in the north by São Paulo state, in the east by the Atlantic Ocean, in the south by Santa Catarina and the Argentine province of Misiones, and in the west by Mato Grosso do Sul and Paraguay, with the Paraná River as its western boundary. It is subdivided into 399 mun\n[…]\nIn the 1940s, the northern part of the state was settled as a result of the expansion of the São Paulo coffee industry. The south-eastern part of the state was settled as a result of migration from Rio Grande do Sul.\n[…]\nParaná is the 2nd largest national producer of wheat, with 2.2 million tons in 2019, almost equal to Rio Grande do Sul, the biggest producer. The South Region is also the largest producer of oats in Brazil. In 2019, national production was close to 800 thousand tons, being almost all carried out in the South (Paraná and Rio Grande do Sul).\n[…]\nIn 2019, Brazil produced about 900 thousand tons of yerba mate annually, according to the IBGE. Paraná is the largest producer in volume and Rio Grande do Sul in plantation areas (and where the sector is more industrialized). According to 2017 data, Paraná harvested 301 thousand tons of yerba mate by extractive method, and 237 thousand tons in plantation.\n[…]\nMuch of the production from Mato Grosso do Sul, Mato Grosso, Santa Catarina, Rio Grande do Sul, Minas Gerais, São Paulo and even Paraguay is shipped to the Port of Paranaguá for export by sea. Many railroads serve Paranaguá, among the main ones are the Ferroeste, Malha Sul and the Curitiba-Paranaguá Railroad.\n[…]\nList of municipalities in Paraná\n[…]\nMining in Paraná\n[…]\nMilitary Police of Paraná State\n[…]\nVitiviniculture in Paraná\n[…]\nCulture of Paraná\n[…]\nGarschagen, Donaldson M. (1998). \"Paraná\". Nova Enciclopédia Barsa. Vol. 11. São Paulo: Encyclopædia Britannica do Brasil Publicações Ltda."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Par%C3%A1",
        "situacao": "ok",
        "texto": "Pará (, pah-RAH; Brazilian Portuguese: [paˈɾa] ) is a state of Brazil, located in northern Brazil and traversed by the lower Amazon River. It borders the Brazilian states of Amapá, Maranhão, Tocantins, Mato Grosso, Amazonas and Roraima. To the northwest are the borders of Guyana and Suriname, and to the northeast is the Atlantic Ocean. The capital and largest city is Belém, which is located at in \n[…]\nThe state's name is a toponym of the Tupi word pará – literally \"sea\", but sometimes used to refer to large rivers. The state was named after the river of the same name, the Pará River, one of the tributaries of the Amazon River.\n[…]\nThe region of the Amazon valley, by the Treaty of Tordesillas (1494), was in possession of the Spanish Crown, the Portuguese expeditionaries, with the purpose of consolidating the region as Portuguese territory, founded the Fort of the Nativity (Forte do Presépio) in 1616, in Santa Maria de Belém do Grão-Pará (Saint Mary of Bethlehem of the Great Pará). The building was the first of the model on Amazon and the most significant in the Amazon territory until 1660.\n[…]\nThe Japanese introduced crops such as jute and black pepper in the 1930s; jute was so successful that it drove a boom in the regional economy. In the 1970s, Japanese farmers introduced cultivation of Hawaiian papaya and melon, for which there is international demand. The third largest ethnic Japanese community in Brazil is in Pará, with about 13,000 inhabitants (surpassed only by settlements in the states of São Paulo and Paraná).\n[…]\nUniversidade do Estado do Pará (UEPA) (Pará State University);"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Para%C3%ADba",
        "situacao": "ok",
        "texto": "Paraíba ( PAR-ə-EE-bə, Brazilian Portuguese: [paɾaˈibɐ] ; Tupinambá: pa'ra a'íba) is a state in Brazil. It is located in the Brazilian Northeast, and it is bordered by Rio Grande do Norte to the north, Ceará to the west, Pernambuco to the south and the Atlantic Ocean to the east.\n[…]\nSeven companies of men from the Captaincy of Paraíba, the Captaincy of Pernambuco, the Captaincy of Rio Grande, and from indigenous tribes succeeded in defeating the Dutch on August 1, at least for the time being. Hendricksz was able to escape, fleeing to Puerto Rico. During the battle, however, the Potiguaras suffered heavy losses of 600 to a thousand dead.\n[…]\nOn January 1, 1756, the Captaincy of Paraíba was dissolved and annexed to Pernambuco. This lasted until 1799, when it became the Captaincy of Paraíba again. At this time, some minor adjustments were made to Paraíba's borders, with a portion of its northern territory being given to Rio Grande do Norte.\n[…]\nThough they had the support of the Liberal Alliance (Aliança Liberal), created by Paraíba together with Minas Gerais and Rio Grande do Sul in the last year, they were defeated by Júlio Prestes and Vital Soares.\n[…]\nThe neon Paraíba tourmaline has also been found in the neighboring state of Rio Grande do Norte. In the early 2000s, tourmaline gems containing copper and bearing similar colors were found in Nigeria and Mozambique.\n[…]\nUniversidade Federal de Campina Grande (UFCG) (Federal University of Campina Grande)\n[…]\nLocated in the interior of the state of Paraíba, in the city of Campina Grande, João Suassuna Airport was remodeled in 2003, receiving a new terminal with capacity of 250 thousand passengers a year.\n[…]\nIn football, the main teams in the state are: Botafogo from João Pessoa, Campinense and Treze, both from Campina Grande."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Paran%C3%A1",
        "situacao": "ok",
        "texto": "Paraná é uma das 27 unidades federativas do Brasil. Está localizado ao norte da região Sul, da qual é único a fazer divisa com outras regiões. Possui como limites ao norte e a nordeste, com São Paulo, a leste com o Oceano Atlântico, ao sul com Santa Catarina, a noroeste com Mato Grosso do Sul, a oeste com os departamentos paraguaios de Canindeyú e Alto Paraná e a sudoeste com a província argentina\n[…]\nDe norte a sul, se localizam as linhas da Rumo ALL, ex-América Latina Logística, que corresponde à malha meridional da ex-Rede Ferroviária Federal, que também passou para a iniciativa privada na década de 1990, que liga o Paraná com aos estados de São Paulo, Santa Catarina e Rio Grande do Sul.\n[…]\nAs mais importantes unidades das Forças Armadas no Paraná são: no Exército Brasileiro, o Paraná faz parte do Comando Militar do Sul (junto dos estados do Rio Grande do Sul e Santa Catarina), sediado em Porto Alegre, pertencendo à 5.ª Região Militar e 5.ª Divisão de Exército (com Santa Catarina); merecem destaque no estado o 13.º Batalhão de Infantaria Blindado (Ponta Grossa) e o 20.º Batalhão de Infantaria Blindado (Curitiba); na Marinha do Brasil, o Paraná pertence ao 5.º Distrito Naval, sediado em Rio Grande; e na Força Aérea Brasileira, o Paraná integra o Cindacta II, localizado em Curitiba, responsável pelo radar no sul do Brasil, em todo Mato Grosso do Sul, porção meridional e oeste de São Paulo.\n[…]\nAs maiores bibliotecas encontram-se em Curitiba: a Biblioteca Pública do Paraná, a do Museu Paranaense, as da UFPR e a da PUCPR em Curitiba. Há também bibliotecas especializadas, como a do Instituto Paranaense de Assistência Técnica e Extensão Rural, que possui um grande acervo relacionado com tecnologias agrícolas, e a do Sindicato e Organização das Cooperativas do Estado do Paraná, especializada em assuntos relacionados com o cooperativismo.\n[…]\nListas de municípios do Paraná",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Março",
      "descricao": "Terceiro mês do calendário gregoriano, cujo nome homenageia o deus romano Marte"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O mês de março e o quarto planeta do Sistema Solar devem seu nome à mesma figura da mitologia romana. Qual?",
    "resposta": "Marte, deus da guerra",
    "distratores": [
      "Júpiter",
      "Saturno",
      "Mercúrio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/March"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/March",
        "situacao": "ok",
        "texto": "March is the third month of the year in both the Julian and Gregorian calendars. Its length is 31 days. In the Northern Hemisphere, the meteorological beginning of spring occurs on the first day of March. The March equinox on the 20 or 21 marks the astronomical beginning of spring in the Northern Hemisphere and the beginning of autumn in the Southern Hemisphere, where September is the seasonal equ\n[…]\nList of observances set by the Solar Hijri calendar"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mar%C3%A7o",
        "situacao": "ok",
        "texto": "O mês de março (AO 1945: Março) é o terceiro mês do ano no calendário gregoriano e um dos sete meses com 31 dias.\n[…]\nO nome \"março\" surgiu na Roma Antiga, quando era o primeiro mês do ano e chamava-se Martius, de Marte, o deus romano da guerra. Em Roma, onde o clima é  mediterrânico, março é o primeiro mês da primavera, um evento lógico para se iniciar um novo ano, bem como para que se comece a temporada das campanhas militares.\n[…]\nHistoricamente os nomes para março incluem o termo saxão Lenctmonat, dado ao equinócio. Os saxões também chamavam março de Rhed-monat ou Hreth-monath (devido a seu deus Rhedam/Hreth) e os anglos chamavam-no de Hyld-monath.\n[…]\nDia de São João de Deus (8 de março)\n[…]\nDia de São Domingos Sávio e Santa Francisca Romana (9 de março)\n[…]\n8 de março de 1495 — João de Deus, santo português (m. 1550).\n[…]\n1 de março de 589 — São David, santo galês (n. 500).\n[…]\n21 de março de 547 — Bento de Núrsia, monge italiano e fundador da Ordem dos Beneditinos (n. 480).\n[…]\n21 de março de 1556 — Tomás Cranmer, reformador e religioso inglês (n. 1489).\n[…]\n21 de março de 1617 — Pocahontas, nativa americana (n. c. 1595).\n[…]\n21 de março de 2014 — Canarinho, humorista brasileiro (n. 1927).\n[…]\n25 de março de 1625 — Giambattista Marino, poeta italiano (n. 1569).\n[…]\n25 de março de 1997 — Baltasar, futebolista brasileiro (n. 1926).\n[…]\n26 de março de 1211 — Sancho I de Portugal (n. 1154).\n[…]\n26 de março de 1827 — Ludwig van Beethoven, compositor alemão (n. 1770).\n[…]\n29 de março de 1792 — Gustavo III da Suécia (n. 1746).\n[…]\n29 de março de 1937 — Karol Szymanowski, compositor polonês (n. 1882).\n[…]\n29 de março de 2011 — José Alencar, político brasileiro (n. 1931).",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Inês de Castro",
      "descricao": "Nobre galega amada pelo futuro rei Pedro I de Portugal, assassinada em 1355"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Os túmulos de Inês de Castro e de Pedro I ficam frente a frente, dentro de qual mosteiro português?",
    "resposta": "Mosteiro de Alcobaça",
    "distratores": [
      "Mosteiro da Batalha",
      "Mosteiro dos Jerónimos",
      "Convento de Cristo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/In%C3%AAs_de_Castro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/In%C3%AAs_de_Castro",
        "situacao": "ok",
        "texto": "Inês de Castro (Reino da Galiza, c. 1320/1325 – Coimbra, 7 de janeiro de 1355) foi uma nobre galega, amada pelo futuro rei D. Pedro I de Portugal, de quem teve quatro filhos. Foi executada por ordem do pai deste, o rei D. Afonso IV.\n[…]\nInês.\n[…]\nD. Pedro mandou construir os dois esplêndidos túmulos de D. Pedro I e de D. Inês de Castro no mosteiro de Alcobaça, para onde trasladou o corpo da sua amada Inês, em 1361 ou 1362. Juntar-se-ia a ela em 1367. A posição primeira dos túmulos foi lado a lado, de pés virados a nascente, em frente da primeira capela do transepto sul, então dedicada a São Bento. Na década de 1780 os túmulos foram mudados para o recém-construído panteão real, onde foram colocados frente a frente.\n[…]\nEm 1957 foram mudados para a sua actual posição, D. Pedro no transepto sul e D. Inês no transepto norte, frente a frente. Quando os túmulos, no século XVIII, foram colocados frente a frente apareceu a lenda que assim estavam para que D. Pedro e D. Inês «possam olhar-se nos olhos quando despertarem no dia do juízo final».\n[…]\nDa relação de D. Inês com o infante D. Pedro de Portugal nasceram:[carece de fontes]?\n[…]\nOutros autores, tais como Luís Rosa e João Aguiar, publicaram livros sobre a trágica vida de Inês de Castro (O Amor infinito de Pedro e Inês e Inês de Portugal, respectivamente);\n[…]\nAfonso, Luís Urbano (2012). «Eros et Thanatos: The Tomb of King Pedro in Alcobaça and Its Wheel of Life and Fortune (1358—1363)». Artibus et Historiae. 33 (65): 9–41\n[…]\nMiguélez, Alicia (2025). «Love as an Excuse: The Tombs of Peter and Inês at the Portuguese Monastery of Alcobaça». In:  Sabaté, Flocel. Defining and Perceiving Feelings in the Late Middle Ages. [S.l.]: Brill. pp. 201–234\n[…]\n«INÊS DE CASTRO A paixão fatal d'el-Rei D. Pedro»"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Carta de Pero Vaz de Caminha",
      "descricao": "Carta enviada ao rei Dom Manuel I em 1500, relatando a chegada da frota de Cabral ao Brasil."
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "O manuscrito original da carta de Pero Vaz de Caminha está guardado em qual arquivo nacional de Lisboa?",
    "resposta": "Torre do Tombo",
    "distratores": [
      "Biblioteca da Ajuda",
      "Arquivo Histórico Ultramarino",
      "Biblioteca Nacional de Portugal"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha",
        "situacao": "ok",
        "texto": "A Carta de Pero Vaz de Caminha é o documento no qual Pero Vaz de Caminha registrou as suas impressões sobre a terra que posteriormente viria a ser chamada de Brasil. É o primeiro documento escrito da história do Brasil. Costuma ser considerada marco inicial da obra literária brasileira, apesar de, formalmente, ser documento de mero registro, já que traz em suas linhas a escrita da época, o estilo;\n[…]\nA carta conservou-se inédita por mais de dois séculos no Arquivo Nacional da Torre do Tombo, em Lisboa. Foi descoberta, em 1773, por José de Seabra da Silva e publicada pelo historiador Manuel Aires de Casal na sua Corografia Brasílica (1817).\n[…]\nAlém da Carta de Pero Vaz de Caminha, importante documento na historiografia do país, o primeiro texto impresso que se refere exclusivamente ao descobrimento do Brasil é o panfleto anônimo, escrito em italiano, \"Copia di una lettera del Re di Portogallo mandata al Re di Castella del viaggio & successo dell' India\" (Cópia de uma carta do Rei de Portugal mandada ao Rei de Castela acerca da viagem e sucesso da Índia), publicada inicialmente em Roma, em 23 de outubro de 1505, por mestre João de Basicken e logo a seguir em Milão, no mesmo ano:\n[…]\n\"Lembra William Brooks Greenlee que 'a autenticidade desta carta é contestável, mas é o mais antigo relato impresso da viagem de Cabral hoje existente.' Apesar disso, como já ressaltou Rubens Borba de Moraes, 'para os brasileiros este panfleto guarda grande interesse, visto que contém as primeiras notícias impressas da descoberta do Brasil pelo \"Capitano Generale Petro Alves Cabrale...alla quale terra d'Santa Croce pose il nome...\"  \" (in: Brasiliana da Biblioteca Nacional. p. 33)\n[…]\nCarta de Mestre João\n[…]\nA carta de Pero Vaz de Caminha\n[…]\nCarta de Pero Vaz de Caminha: História e análise do texto, em UOL Educação.\n[…]\n«Carta de Pêro Vaz de Caminha - Arquivo Nacional Torre do Tombo»\n[…]\nUma Revisitação da Carta de Caminha"
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Carta de Pero Vaz de Caminha",
      "descricao": "Carta enviada ao rei Dom Manuel I em 1500, relatando a chegada da frota de Cabral ao Brasil."
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "O dito popular de que nesta terra, em se plantando, tudo dá é uma versão simplificada de um trecho de qual documento histórico?",
    "resposta": "Carta de Pero Vaz de Caminha",
    "distratores": [
      "Os Lusíadas",
      "Tratado de Tordesilhas",
      "Sermão da Sexagésima"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carta_de_Pero_Vaz_de_Caminha",
        "situacao": "ok",
        "texto": "A Carta de Pero Vaz de Caminha é o documento no qual Pero Vaz de Caminha registrou as suas impressões sobre a terra que posteriormente viria a ser chamada de Brasil. É o primeiro documento escrito da história do Brasil. Costuma ser considerada marco inicial da obra literária brasileira, apesar de, formalmente, ser documento de mero registro, já que traz em suas linhas a escrita da época, o estilo;\n[…]\nEm princípio, Caminha pedia desculpas pela Carta, a qual considerava \"inferior\". O escrevente descreve os traços de terra e o momento de vista da terra (quando se avistou o Monte Pascoal), a que deu-se o nome de Ilha da Vera Cruz.\n[…]\nViu um deles umas contas de rosário, brancas; fez sinal que lhas dessem, e folgou muito com elas, e lançou-as ao pescoço; e depois tirou-as e meteu-as em volta do braço, e acenava para a terra e novamente para as contas e para o colar do Capitão, como se dariam ouro por aquilo.\"CAMINHA, Pero de Vaz.\n[…]\nAlém da Carta de Pero Vaz de Caminha, importante documento na historiografia do país, o primeiro texto impresso que se refere exclusivamente ao descobrimento do Brasil é o panfleto anônimo, escrito em italiano, \"Copia di una lettera del Re di Portogallo mandata al Re di Castella del viaggio & successo dell' India\" (Cópia de uma carta do Rei de Portugal mandada ao Rei de Castela acerca da viagem e sucesso da Índia), publicada inicialmente em Roma, em 23 de outubro de 1505, por mestre João de Basicken e logo a seguir em Milão, no mesmo ano:\n[…]\nNo último parágrafo da carta, Caminha apelou a D. Manuel para que libertasse do cárcere o seu genro, casado com sua filha Isabel, preso por assalto e agressão. Eis o trecho final no qual o cronista faz o pedido:\n[…]\nA carta de Pero Vaz de Caminha\n[…]\nCarta de Pero Vaz de Caminha: História e análise do texto, em UOL Educação.\n[…]\n«Carta de Pêro Vaz de Caminha - Arquivo Nacional Torre do Tombo»\n[…]\nUma Revisitação da Carta de Caminha"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Comunidade dos Países de Língua Portuguesa",
      "descricao": "Organização internacional que reúne os países que têm o português como língua oficial"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A Comunidade dos Países de Língua Portuguesa tem sua sede em qual cidade?",
    "resposta": "Lisboa",
    "distratores": [
      "Brasília",
      "Luanda",
      "Praia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Community_of_Portuguese_Language_Countries"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Community_of_Portuguese_Language_Countries",
        "situacao": "ok",
        "texto": "The Community of Portuguese Language Countries (Portuguese: Comunidade dos Países de Língua Portuguesa; abbr. : CPLP), also known as the Lusophone Commonwealth or Lusophone Community (Portuguese: Comunidade Lusófona), is an international organization and political association of Lusophone nations across four continents, where Portuguese is an official language.\n[…]\nThe Community of Portuguese Language Countries relies on six operating agencies to carry out its mandate: Universidade da Integração Internacional da Lusofonia Afro-Brasileira, União das Cidades Capitais Luso-Afro-Américo-Asiáticas, Associação das Universidades de Língua Portuguesa, Instituto Internacional da Língua Portuguesa, União dos Advogados de Língua Portuguesa and TV CPLP via Web.\n[…]\nThere are nine full member states of the CPLP. Seven were founding members of the CPLP: Angola, Brazil, Cape Verde, Guinea-Bissau, Mozambique, Portugal, and São Tomé and Príncipe; Timor-Leste joined in 2002 after achieving independence, and Equatorial Guinea joined in 2014.\n[…]\nEasing citizens' cross-border movement between the member states was proposed at the 2017 CPLP Summit. This proposal by Portugal and Cape Verde to Brazil was thought by some to conflict with Europe's Schengen area. However, this free movement is based on a different model: as residence permits, associated with the recognition of academic degrees and professional qualification, and maintenance of social rights including pension systems.\n[…]\nThe Conference of Heads of State and Government of the CPLP (Portuguese: Conferência de Chefes de Estado e de Governo da Comunidade dos Países de Língua Portuguesa; CCEG), commonly known as the CPLP Summit (Cimeira da CPLP) is a biennial meeting of heads of state and heads of government of the member states of the CPLP. It is considered one of the fundamental pillars of the CPLP's structure."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Comunidade_dos_Pa%C3%ADses_de_L%C3%ADngua_Portuguesa",
        "situacao": "ok",
        "texto": "Comunidade dos Países de Língua Portuguesa (abreviado CPLP) é uma organização internacional formada por países lusófonos, cujo objetivo é o \"aprofundamento da amizade mútua e da cooperação entre os seus membros\".\n[…]\nA sua sede fica em Lisboa, Portugal, e seu atual secretário executivo é, Maria de Fátima Jardim, de Angola; e Armindo Brito Fernandes, natural de São Tomé e Príncipe, quem atualmente ocupa o cargo de Diretor-Geral. A organização promove a data de 5 de maio como Dia da Cultura Lusófona, celebrado em todo o espaço lusófono, e os Jogos da CPLP, evento desportivo que reúne todos os membros da organização.\n[…]\nA Guiné Equatorial decidiu, em 2007, adotar o português como língua oficial para ascender, plenamente, ao estatuto de membro permanente da Comunidade. A Assembleia Nacional aprovou essa medida em outubro de 2011. Em 2014, a Guiné Equatorial foi aceite por consenso como membro pleno da Comunidade dos Países de Língua Portuguesa, na sessão restrita da X Cimeira da CPLP. No entanto, o país terá que abolir a pena de morte e promover o uso do português como língua oficial.\n[…]\nA bandeira da Comunidade dos Países de Língua Portuguesa ostenta oito asas em formato de círculo. Cada uma dessas asas representa um membro da CPLP. Antes da filiação oficial de Timor-Leste, havia sete asas.[carece de fontes]?\n[…]\nComunidade dos Países de Língua Portuguesa no Facebook\n[…]\n«Comunidade dos Países de Língua Portuguesa». no Ministério das Relações Exteriores do Brasil\n[…]\n«Declaração Constitutiva da Comunidade dos Países de Língua Portuguesa»\n[…]\n«Centro de Análise Estratégica da Comunidade dos Países de Língua Portuguesa - CAE/CPLP»\n[…]\n«União das Cidades Capitais de Língua Portuguesa»\n[…]\n«Conexão CPLP»",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Lacônico",
      "descricao": "Adjetivo para quem fala ou escreve com poucas palavras, derivado da região grega da Lacônia"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Lacônico, para quem fala pouco, vem da região grega da Lacônia. Qual era a principal cidade dessa região, famosa pelas respostas curtas?",
    "resposta": "Esparta",
    "distratores": [
      "Atenas",
      "Tebas",
      "Corinto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Laconic_phrase"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Laconic_phrase",
        "situacao": "ok",
        "texto": "A laconic phrase or laconism is a concise or terse statement, especially a blunt and elliptical rejoinder. It is named after Laconia, the region of Greece including the city of Sparta, whose ancient inhabitants had a reputation for verbal austerity and were famous for their often pithy remarks.\n[…]\nIf I invade Laconia, I shall turn you out.\n[…]\nPhilip proceeded to invade Laconia, devastate much of it, and eject the Spartans from various parts.\n[…]\nThe Spartans were especially famous for their dry, understated wit which is now known as \"laconic humor\". This can be contrasted with the \"Attic salt\" or \"Attic wit\" – the refined, poignant, delicate humour of Sparta's chief rival, Athens.\n[…]\nVarious groups in more recent history also have a reputation for laconic humor: Icelanders in the sagas, and, in the Anglophone world, Australians (cf. Australian humor), American cowboys, New Englanders, and people from Northern England and Scotland.\n[…]\nSpartans paid less attention than other ancient Greeks to the development of education, arts, and literature. Some view this as having contributed to the characteristically blunt Laconian speech. However, Socrates, in Plato's dialogue Protagoras, appears to reject the idea that Spartans' economy with words was simply a consequence of poor literary education: \"...\n[…]\nSocrates was known to have admired Spartan laws, as did many other Athenians, but modern scholars have doubted the seriousness of his attribution of a secret love of philosophy to Spartans. Still, the Spartans Myson of Chenae and Chilon of Sparta have traditionally been counted among the Seven Sages of Greece; both were famous for many laconic sayings.\n[…]\nQuotations related to Laconic phrases at Wikiquote  (additional examples of laconic phrases)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Laconismo",
        "situacao": "ok",
        "texto": "Laconismo é um modo breve ou conciso de falar ou de escrever. Foi uma das principais características da sociedade espartana, na região da Lacônia, de onde deriva o termo. Lacônico significa breve, conciso, de poucas palavras.\n[…]\nOs espartanos, um povo de guerreiros da antiga Grécia, habitaram a Lacônia, antigo país do sul da Grécia, às margens do mar Egeu e do Mediterrâneo, mais especificamente Esparta, sua capital. Segundo Plutarco, por causa do sistema de educação estabelecido por Licurgo, que fazia os espartanos, desde jovens, permanecerem muito tempo em silêncio, os espartanos eram gente de poucas palavras.\n[…]\nConta-se que em certa ocasião Filipe II da Macedônia ameaçou invadir suas terras: \"Se entro na Lacônia, vou arrasar e submeter Esparta\", disse o pai de Alexandro Magno. A resposta dos espartanos passou à história como um exemplo de laconismo: \"Se...\" Antes, os espartanos haviam provocado Filipe, enviando a mensagem: \"Dos espartanos a Filipe: Dionísio em Corinto\", uma alusão ao tirano Dionísio II de Siracusa, que terminou seus dias exilado em Corinto.\n[…]\nQuando Demétrio Poliórcetes, irritado, gritou \"Os espartanos enviaram apenas um mensageiro a mim?\", este respondeu tranquilamente \"Um para um\".\n[…]\nPor essa época surgiu o adjetivo grego 'lakonikós' (espartano, lacedemônio), que passou ao latim como 'laconicus' e chegou a nós como lacônico.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Tabu",
      "descricao": "Palavra para uma proibição social ou religiosa, vinda das línguas polinésias"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A palavra tabu entrou nas línguas europeias pelo capitão James Cook, que a ouviu em 1777 em qual arquipélago do Pacífico?",
    "resposta": "Tonga",
    "distratores": [
      "Havaí",
      "Taiti",
      "Fiji"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Taboo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Taboo",
        "situacao": "ok",
        "texto": "A taboo is a social group's ban, prohibition or avoidance of something (usually an utterance or behavior) based on the group's sense that it is excessively repulsive, offensive, sacred or allowed only for certain people. Such prohibitions are present in virtually all societies. Taboos may be prohibited explicitly, for example within a legal system or religion, or implicitly, for example by social \n[…]\nThe English term taboo comes from tapu in Oceanic languages, particularly Polynesian languages, with such meanings as \"prohibited\" or \"forbidden\". That root tapu is reflected, among others, by Tongan or Māori tapu, and by Hawaiian kapu. Its English use dates to 1777 when the British explorer James Cook visited Tonga, and referred to the Tongans' use of the term taboo for \"any thing that is forbidden to be eaten, or made use of\".\n[…]\nHaving invited some of the Tongan aristocracy to dinner aboard his ship, Cook wrote:\n[…]\nIn its current use in Tongan, the word tapu means \"sacred\" or \"holy\", often in the sense of being restricted or protected by custom or law. On the main island, the word is often appended to the end of \"Tonga\" as Tongatapu, here meaning \"Sacred South\" rather than \"Forbidden South\".\n[…]\nCook, James; King, James (1821). A voyage to the Pacific Ocean: undertaken by command of His Majesty, for making discoveries in the Northern Hemisphere : performed under the direction of Captains Cook, Clerke, and Gore : in the years 1776, 1777, 1778, 1779, and 1780 : being a copious, comprehensive, and satisfactory abridgement of the voyage. Printed for Champante and Whitrow ... and M. Watson; 1793.\n[…]\nCook, James (1728–1779). The Three Voyages of Captain James Cook Round the World. Vol. 5. London: A&E Spottiswoode.\n[…]\nThomas, Northcote Whitridge (1911). \"Taboo\" . Encyclopædia Britannica. Vol. 26 (11th ed.). pp. 337–341."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Tabu",
        "situacao": "ok",
        "texto": "O tabu era, originalmente, uma instituição de fundamento religioso que atribuía caráter sagrado a determinados seres, objetos ou lugares, interditando qualquer contato com eles. Posteriormente, o termo passou a designar qualquer tipo de proibição.\n[…]\nA palavra é de origem polinésia. Deriva do tonganês tabu e do maori tapu, termos que se referem à proibição de determinado ato, com base na crença de que tal ato invadiria o campo do sagrado, implicando em perigo ou maldição para os indivíduos comuns. O termo foi primeiramente registrado pelo capitão James Cook durante sua visita a Tonga em 1771. Foi, então introduzido na língua inglesa, difundindo-se posteriormente para outras línguas.\n[…]\nO tabu, em linguística, é a imposição de uma proibição de dizer nomes de certas coisas ou pessoas. Normalmente, para escapar aos tabus, utilizam-se eufemismos ou disfemismos.\n[…]\nOs tabus da linguagem dividem-se em três grupos, de acordo com o uso ou a motivação psicológica: uns são devido ao medo, outros a um sentimento de delicadeza e outros, ainda, a um sentido de decência e decoro.[carece de fontes]?\n[…]\nOs tabus de medo têm a ver com o pavor em relação aos seres sobrenaturais, que impuseram tabus sobre seus nomes, como, por exemplo, o demônio. As criaturas e as coisas vulgares dotadas de qualidades sobrenaturais podem tornar-se alvo de terror e tabus. Os nomes dos objetos inanimados podem também ser afetados por uma proibição tabu.\n[…]\nOs tabus de decência são geralmente associados a sexo e/ou moral. Chamam-se tabuísmos as palavras, locuções ou acepções tabus, consideradas chulas, grosseiras ou ofensivas demais na maioria dos contextos.\n[…]\nTapu",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "Arroba (símbolo)",
      "descricao": "O símbolo @, usado nos endereços de e-mail, chamado de arroba em português e espanhol"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 1971, que engenheiro americano escolheu a arroba para separar o nome do usuário e o do computador nos endereços de e-mail?",
    "resposta": "Ray Tomlinson",
    "distratores": [
      "Tim Berners-Lee",
      "Vint Cerf",
      "Steve Wozniak"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Ray_Tomlinson"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Ray_Tomlinson",
        "situacao": "ok",
        "texto": "Raymond Samuel Tomlinson (April 23, 1941 – March 5, 2016) was an American computer programmer who invented the first email program on the ARPANET system, the precursor to the Internet, in 1971; it was the first system able to send mail between users on different hosts connected to ARPANET. Previously, mail could be sent only to others who used the same computer.\n[…]\nTomlinson also developed CPYNET, a file transfer program designed to transmit files between computers connected to the ARPANET. In 1971, he was asked to adapt an existing program called SNDMSG—which allowed users to leave messages for others on the same time-sharing computer—so that it could run on TENEX. He incorporated source code from CPYNET into SNDMSG, enabling users to send messages to others on different computers over the network.\n[…]\nThe first email Tomlinson sent was a test message between two computers placed side by side. The content of the message was not preserved, and Tomlinson later described it as insignificant, likely consisting of a random string such as \"QWERTYUIOP.\" This is often misquoted as \"The first e-mail was QWERTYUIOP.\" He later stated, \"The test messages were entirely forgettable and I have, therefore, forgotten them.\"\n[…]\nThe @ sign, which was relatively obscure at the time, was added to the Museum of Modern Art's architecture and design collection in 2010, credited to Tomlinson and described as a \"defining symbol of the computer age.\"\n[…]\nTomlinson said he preferred \"email\" over \"e-mail,\" joking in a 2010 interview that \"I'm simply trying to conserve the world's supply of hyphens\" and that \"the term has been in use long enough to drop the hyphen.\"\n[…]\nPasternack, Alex (April 20, 2010). \"Q+A: Ray Tomlinson Sent the First Email, But His Inbox Is Still a Mess\". Motherboard.tv. Archived from the original on March 24, 2012.\n[…]\nTomlinsons' e-mail webpage"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ray_Tomlinson",
        "situacao": "ok",
        "texto": "Ray Tomlinson (Amsterdam, Nova Iorque, 23 de abril de 1941 — Lincoln, Massachusetts, 5 de março de 2016) foi um programador dos Estados Unidos que implementou um sistema de correio eletrônico na ARPANET, em 1971. Ray era um funcionário da Bolt Beranek and Newman (BBN), empresa contratada pelo Departamento de Defesa dos Estados Unidos em 1968 para implantar a ARPANET.\n[…]\nEm 1971, Tomlinson começou a enviar mensagens para si mesmo e para seus colegas como brincadeira. Ele somou as funcionalidades dos aplicativos SNDMSG (uma contração da expressão em inglês \"send message\", ou seja, \"enviar mensagem\") e o Readmail, para leitura de correio. Mas esse sistema permitia apenas o compartilhamento de textos. O engenheiro também trabalhava em um protocolo chamado CPYNET, para transferência de arquivos entre computadores conectados em rede.\n[…]\nO conceito de correio eletrônico já existia e estava implementado em sistemas como o AUTODIN. Entretanto, esse foi o primeiro sistema capaz de enviar mensagens entre diferentes nós conectados à ARPANET. Tomlinson também inovou na medida em que escolheu o símbolo @ para distinguir as mensagens destinadas às caixas de correio na máquina local das que se dirigiam à rede, por ser o símbolo que significa \"at\", ou seja, estar em algum lugar. Logo enviou a si próprio uma mensagem de e-mail.\n[…]\nA BBN tinha dois computadores PDP-10 ligados entre si através da ARPANET, e a mensagem viajou através da rede entre as duas máquinas na mesma sala, em Cambridge. Depois de se ter assegurado que o SNDMSG funcionava na rede, enviou uma mensagem aos seus colegas os avisando da nova funcionalidade, com instruções para colocar um @ entre o nome do utilizador e o do seu computador. O primeiro endereço de e-mail criado foi o tomlinson@bbn-tenexa.\n[…]\nTomlinson morreu em 5 de março de 2016, supostamente de ataque cardíaco.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Soneto",
      "descricao": "Forma poética fixa usada por Camões, Bocage e Bilac"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Antes de Camões, que poeta italiano do século quatorze consagrou o soneto com poemas dedicados à amada Laura?",
    "resposta": "Francesco Petrarca",
    "distratores": [
      "Dante Alighieri",
      "Giovanni Boccaccio",
      "Torquato Tasso"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Petrarch",
      "https://en.wikipedia.org/wiki/Sonnet"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Petrarch",
        "situacao": "ok",
        "texto": "Francis Petrarch (born Francesco di Petracco; 20 July 1304 – 19 July 1374) was an Italian scholar and poet of the early Italian Renaissance, as well as one of the earliest Renaissance humanists.\n[…]\nLaura is unreachable and evanescent – descriptions of her are evocative yet fragmentary. Francesco de Sanctis praises the powerful music of his verse in his Storia della letteratura italiana. Gianfranco Contini, in a famous essay (\"Preliminari sulla lingua del Petrarca\". Petrarca, Canzoniere. Turin, Einaudi, 1964), has described Petrarch's language in terms of \"unilinguismo\" (contrasted with Dantean \"plurilinguismo\").\n[…]\nKohl, Benjamin G. (1978). \"Francesco Petrarch: Introduction; How a Ruler Ought to Govern His State,\" in The Earthly Republic: Italian Humanists on Government and Society, ed. Benjamin G. Kohl and Ronald G. Witt, 25–78. Philadelphia: University of Pennsylvania Press. ISBN 0-8122-1097-2\n[…]\nIl Canzoniere» di Francesco Petrarca. La Critica Contemporanea, G. Barbarisi e C. Berra (edd.), LED Edizioni Universitarie, Milano, 1992, ISBN 88-7916-005-2\n[…]\nFrancesco Petrarca, Rerum vulgarium Fragmenta. Edizione critica di Giuseppe Savoca, Olschki, Firenze, 2008, ISBN 978-88-222-5744-4\n[…]\nPetrarch and his Cat Muse\n[…]\nFrancesco Petrarca (Petrarch) (1304–1374)\n[…]\nWorks by or about Francesco Petrarca at the Internet Archive\n[…]\nTimeline of life of Petrarch\n[…]\nFrancesco Petrarch at The Online Library of Liberty\n[…]\nPetrarch and Laura Multi-lingual site including translated works in the public domain and biography, pictures, music.\n[…]\nFrancesco Petrarch, De viris illustribus, digitized French codex, at Somni\n[…]\nPetrarch's Vision of the Muslim and Byzantine East – Nancy Bisaha, Speculum, University of Chicago Press"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Sonnet",
        "situacao": "ok",
        "texto": "A sonnet is a fixed poetic form with a structure traditionally consisting of fourteen lines adhering to a set rhyming scheme. The term derives from the Italian word sonetto (lit. 'little song', from the Latin word sonus, lit. 'sound'). Originating in 13th-century Sicily, the sonnet was in time taken up in many European-language areas, mainly to express romantic love at first, although eventually a\n[…]\nDom Pedro, a son of King John I, has been credited with translations of sonnets by Petrarch into Portuguese, but the form did not come into its own until the start of the 16th century. It was then that Sá de Miranda introduced the sonnet and other Italian forms, after returning from a five-year stay in Italy. However, the greatest sonneteer of this period was the slightly younger Luís de Camões, though in his work the influence of the Spanish pioneers of the form has also been discerned.\n[…]\nAt the start of the 19th century, Capel Lofft expressed his sense of the importance of the sonnet's history to the new generation of English poets. In the long preface to his idiosyncratic Laura, or an anthology of sonnets (on the Petrarchan model) and elegiac quatorzains (London 1814), the thesis is developed that beyond the sonnet's Sicilian origin lies the system of musical notation developed by the mediaeval Guido of Arezzo, and before that the musical arrangement of the Greek ode.\n[…]\nReinforcing them were translated examples from Petrarch, Ronsard and Daniel Heinsius. Thereafter in the 18th century, Johann Wolfgang von Goethe wrote several love sonnets, using a rhyme scheme derived from Italian poetry. After his death, Goethe's followers created the freer 'German sonnet', which is rhymed ABBABCCBCDDCDD.\n[…]\nPetrarchan sonnet\n[…]\nU. Hennigfeld. Der ruinierte Körper: Petrarkistische Sonette in transkultureller Perspektive. Königshausen & Neumann, 2008. ISBN 978-3-8260-3768-9."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Francesco_Petrarca",
        "situacao": "ok",
        "texto": "Francisco Petrarca (em italiano: Francesco Petrarca; Arezzo, 20 de julho de 1304 — Arquà, 19 de julho de 1374) foi um poeta, escritor e diplomata italiano, considerado um dos poetas mais influentes de todos os tempos. Sua obra remodelou a poesia lírica ocidental e foi de fundamental importância para o surgimento do humanismo, notabilizando-se por desenvolver e popularizar o soneto.\n[…]\nEntre eles estão: Secretum (\"Meu Livro Secreto\"), um diálogo imaginário, intensamente pessoal e cheio de culpa com santo Agostinho de Hipona; De Viris Illustribus (\"Sobre os Homens Famosos\"), uma série de biografias morais; Rerum Memorandarum Libri, um tratado incompleto sobre as virtudes cardeais; De Otio Religiosorum (\"Sobre o Lazer Religioso\") e De Vita Solitaria (\"Sobre a Vida Solitária\"), que elogia a vida contemplativa; De Remediis Utriusque Fortunae (\"Remédios para os trancos e barrancos\"), um livro de auto-ajuda que permaneceu popular por muitos anos; Itinerarium (\"O Guia de Petrarca para a Terra Santa\"), um ancestral distante dos guia de viagem; um número de críticas violentas contra seus oponentes tais como médicos, escolásticos e os franceses; o Carmen Bucolicum, uma coleção de doze poemas pastorais; e o épico incompleto Africa.\n[…]\nPetrarca aperfeiçoou a conhecida forma do soneto, herdada de Giacomo da Lentini, e que Dante amplamente usou. Muitos dos poemas de Petrarca, colecionados no Cancioneiro (dedicado a Laura), eram sonetos. O compositor romântico Franz Liszt musicou alguns dos sonetos de Petrarca, Tre sonetti del Petrarca.\n[…]\nO nome de Petrarca está associado de maneira indissolúvel ao de Laura, a mulher amada que ele canta em Rerum vulgarium fragmenta (Fragmentos em língua popular), mais conhecidos pelo nome de Il Canzoniere.\n[…]\nRede de Letras: artigo 1 sobre Petrarca\n[…]\nRede de Letras: artigo 2 sobre Petrarca\n[…]\nObras de Francesco Petrarcaem italiano",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Presente de grego",
      "descricao": "Expressão para um presente que traz prejuízo a quem o recebe"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A frase temo os gregos, mesmo quando trazem presentes, dita sobre o cavalo de Troia, foi escrita por qual poeta romano?",
    "resposta": "Virgílio",
    "distratores": [
      "Ovídio",
      "Horácio",
      "Lucrécio"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Beware_of_Greeks_bearing_gifts",
      "https://en.wikipedia.org/wiki/Aeneid"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Beware_of_Greeks_bearing_gifts",
        "situacao": "ok",
        "texto": "Timeō Danaōs et dōna ferentēs, paraphrased in English as \"I fear the Greeks even when bearing gifts\", is a Latin phrase from the Aeneid, a Latin epic poem written by Virgil between 29 and 19 BC. The utterance, spoken by  Trojan priest Laocoön, refers to the Trojan Horse constructed by the Greeks during the Trojan War. The literal meaning of the phrase is \"I fear the Danaans [Greeks], even those be\n[…]\nWhatever it is, I fear the Danaans, even when bringing gifts.\") Immediately after Laocoön proclaims his warning, he throws a spear at the horse, which pierces its side; Virgil writes that the groan from the Greek warriors hidden within would surely have alerted the Trojans to the trick if the gods had not already ordained Troy's destruction."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Aeneid",
        "situacao": "ok",
        "texto": "The Aeneid (, ih-NEE-id; Latin: Aeneis [ae̯ˈneːɪs]) is a Latin epic poem that tells the legendary story of Aeneas, a Trojan who fled the fall of Troy and travelled to Italy, where he became the ancestor of the Romans. Written by the Roman poet Virgil between 29 and 19 BC, the Aeneid comprises 9,896 lines in dactylic hexameter.\n[…]\nA 17th-century popular broadside ballad also appears to recount events from books 1–4 of the Aeneid, focusing mostly on the relationship between Aeneas and Dido. The ballad, \"The Wandering Prince of Troy\", presents many similar elements as Virgil's epic, but alters Dido's final sentiments toward Aeneas, as well as presenting an interesting end for Aeneas himself.\n[…]\nGransden, K. W.; Harrison, Stephen J. (2003), Virgil: The Aeneid, Landmarks of World Literature (2nd ed.), Cambridge University Press, ISBN 0-521-83213-6\n[…]\nHardie, Philip R. (1986), Virgil's Aeneid: Cosmos and Imperium, Clarendon Press, ISBN 0-19-814036-3\n[…]\nHeinze, Richard (1993), Virgil's Epic Technique, Berkeley: University of California Press, ISBN 0-520-06444-5\n[…]\nBrooks Otis, Virgil: A Study in Civilized Poetry, Oxford, 1964\n[…]\nLee Fratantuono, Madness Unchained: A Reading of Virgil's Aeneid, Lexington Books, 2007.\n[…]\nJoseph Reed, Virgil's Gaze, Princeton, 2007.\n[…]\nKenneth Quinn, Virgil's Aeneid: A Critical Description, London, 1968.\n[…]\nFrancis Cairns, Virgil's Augustan Epic, Cambridge, 1989.\n[…]\nKarl Gransden, Virgil's Iliad, Cambridge, 1984.\n[…]\nRichard Jenkyns, Virgil's Experience, Oxford, 1998.\n[…]\nElena Giusti, Carthage in Virgil's Aeneid: Staging the Enemy Under Augustus, March 2018\n[…]\nFour talks by scholars on aspects of the Aeneid: Virgil's relationship to Roman history, the Rome of Caesar Augustus, the challenges of translating Latin poetry, and Purcell's opera Dido and Aeneas, delivered at the Maine Humanities Council's Winter Weekend program."
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Nó górdio",
      "descricao": "Nó lendário da cidade de Górdio, cuja história originou a expressão cortar o nó górdio"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Cortar o nó górdio é resolver um problema de forma ousada. Segundo a lenda, quem cortou esse nó com um golpe de espada?",
    "resposta": "Alexandre, o Grande",
    "distratores": [
      "Júlio César",
      "Dario III",
      "Aníbal"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Gordian_Knot"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Gordian_Knot",
        "situacao": "ok",
        "texto": "The cutting of the Gordian Knot is an ancient Greek legend associated with Alexander the Great in Gordium in Phrygia, regarding a complex knot that tied an oxcart. Reputedly, whoever could untie it would be destined to rule all of Asia. In 333 BC, Alexander was challenged to untie the knot. Instead of untangling it laboriously as everyone expected, he dramatically cut through it with his sword. Th\n[…]\nLiterary sources of the story include Arrian (Anabasis Alexandri 2.3), Quintus Curtius (3.1.14), Justin's epitome of Pompeius Trogus (11.7.3), and Aelian's De Natura Animalium 13.1.\n[…]\nAlexander the Great later went on to conquer Asia as far as the Indus and the Oxus, thus partially fulfilling the prophecy.\n[…]\nUnlike popular fable, genuine mythology has few completely arbitrary elements. This myth taken as a whole seems designed to confer legitimacy to dynastic change in this central Anatolian kingdom: thus Alexander's \"brutal cutting of the knot … ended an ancient dispensation.\"\n[…]\nThe ox-cart suggests a longer voyage, rather than a local journey, perhaps linking Alexander the Great with an attested origin-myth in Macedon, of which Alexander is most likely to have been aware. Based on this origin myth, the new dynasty was not immemorially ancient, but had widely remembered origins in a local, but non-priestly \"outsider\" class, represented by Greek reports equally as an eponymous peasant or the locally attested, authentically Phrygian in his ox-cart."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/N%C3%B3_g%C3%B3rdio",
        "situacao": "ok",
        "texto": "O nó górdio é uma lenda que envolve o rei da Frígia (Ásia Menor) e Alexandre, o Grande. É comumente usada como metáfora de um problema insolúvel (desatando um nó impossível) resolvido facilmente por ardil astuto ou por uma quebra de paradigma.\n[…]\nConta-se que o rei da Frígia (Ásia Menor) morreu sem deixar herdeiro e que, ao ser consultado, o Oráculo anunciou que o sucessor chegaria à cidade num carro de bois. A profecia foi cumprida por um camponês, de nome Górdio, que foi coroado. Para não esquecer de seu passado humilde ele colocou a carroça, com a qual ganhou a coroa, no templo de Zeus e a amarrou com um enorme nó a uma coluna. O nó era, na prática, impossível de desatar e por isso ficou famoso.\n[…]\nGórdio reinou por muito tempo e quando morreu, seu filho Midas assumiu o trono. Midas expandiu o império mas não deixou herdeiros. O Oráculo foi ouvido novamente e declarou que quem desatasse o nó de Górdio dominaria todo o mundo.\n[…]\nQuinhentos anos se passaram sem ninguém conseguir realizar esse feito, até que em 334 a.C. Alexandre, o Grande, ouviu a lenda enquanto marchava pela Frígia. Intrigado com a questão, foi ao templo de Zeus observar o feito de Górdio. Após muito analisar, desembainha a espada e corta o nó. Lenda ou não o fato é que Alexandre se tornaria senhor de toda a Ásia Menor poucos anos depois.\n[…]\nÉ daí também que deriva a expressão \"cortar o nó górdio\", que significa resolver um problema complexo de maneira simples e eficaz.\n[…]\n\"Fazei-o discorrer sobre política e o nó górdio do caso ele deslinda,",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "Pneumoultramicroscopicossilicovulcanoconiótico",
      "descricao": "Palavra mais longa registrada nos dicionários de português, que designa uma doença pulmonar"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Pneumoultramicroscopicossilicovulcanoconiótico, a palavra mais longa dos dicionários de português, tem quantas letras?",
    "resposta": "Quarenta e seis",
    "distratores": [
      "Trinta e nove",
      "Cinquenta e dois",
      "Cinquenta e oito"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pneumoultramicroscopicossilicovulcanoconi%C3%B3tico"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pneumoultramicroscopicossilicovulcanoconi%C3%B3tico",
        "situacao": "ok",
        "texto": "A silicose é uma forma de pneumoconiose causada pela inalação de finas partículas de sílica cristalina e caracterizada por inflamação e cicatrização em forma de lesões nodulares nos lóbulos superiores do pulmão.\n[…]\nProvoca, na sua forma aguda, dificuldades respiratórias, febre e cianose. Pode ser confundida como edema pulmonar, pneumonia ou tuberculose.\n[…]\nA silicose tem como sinônimo o termo \"pneumoultramicroscopicossilicovulcanoconiose\". Este é a versão em língua portuguesa de pneumonoultramicroscopicsilicovolcanoconiosis, por Everett M., presidente da National Puzzlers League para que fosse a maior palavra da língua inglesa. Pela etimologia dos elementos de composição, significa \"uma doença pulmonar causada pela inalação de pó (cinzas de uma atividade vulcânica) de sílica muito fina, que causa inflamação nos pulmões\". Everett M.\n[…]\nSmith criou a palavra juntando prefixos e radicais de origem grega e latina, obtendo dessa forma uma nova denominação para uma doença com nome científico já definido. Posteriormente esta palavra foi transposta para a nossa língua como pneumoultramicroscopicossilicovulcanoconiose, mas, como duplicata, um nome científico preestabelecido de uma doença já conhecida, implica que na nossa língua esta palavra seja considerada como uma palavra fictícia.\n[…]\nA palavra ganhou estatuto oficial pela primeira vez em 2001, no Dicionário Houaiss da Língua Portuguesa. Aparece descrita como uma doença pulmonar causada pela inspiração de cinzas vulcânicas, tornando-se dessa forma a maior palavra da língua portuguesa registada em dicionário."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Hino Nacional Brasileiro",
      "descricao": "Hino oficial do Brasil, com música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "A letra do Hino Nacional Brasileiro, de Osório Duque-Estrada, é dividida em quantas partes?",
    "resposta": "Duas",
    "distratores": [
      "Três",
      "Quatro",
      "Cinco"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nSegundo a Seção II da mesma lei, execuções simplesmente instrumentais devem ser tocadas sem repetição e execuções vocais devem sempre apresentar as duas partes do poema cantadas em uníssono. Portanto, em caso de execução instrumental prevista no cerimonial, não se deve acompanhar a execução cantando, deve-se manter, conforme descrito acima, silêncio. O Art. 32 da mesma lei prevê que não é permitida a execução de qualquer arranjo vocal do Hino Nacional Brasileiro se não o de Alberto Nepomuceno.\n[…]\nRecentemente tornou-se não pouco divulgado em sítios da internet o curioso fato de que o Hino Nacional Brasileiro possuía oficialmente uma letra em sua introdução orquestrada que supostamente era conhecida e entoada, de composição atribuída a Américo Moura. Este poema originalmente é mais extenso do que se tem notícia, e pode demonstrar não ter sido adaptado apenas para a introdução.\n[…]\nEsse trecho seria a letra do início do Hino Nacional Brasileiro, onde, atualmente, é mantido apenas de forma instrumental.\n[…]\nSempre Brilhar.”O fato é que até antes de 6 de setembro de 1922, data em que o poema de Joaquim Osório Duque Estrada foi oficializado, o Hino de Francisco Manuel da Silva permanecia sem um poema oficial, era entoado com as mais diferentes adaptações de uma localidade para outra, e não raro refletia um regionalismo contrário ao ideal de federalismo e unidade nacional.\n[…]\nLei dos Símbolos Nacionais do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Arabismos do português",
      "descricao": "Palavras do português herdadas do árabe durante o domínio muçulmano na Península Ibérica"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Os arabismos entraram no português durante o domínio muçulmano na Península Ibérica. Em que século começou esse domínio?",
    "resposta": "Século oito",
    "distratores": [
      "Século seis",
      "Século dez",
      "Século doze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Umayyad_conquest_of_Hispania"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Umayyad_conquest_of_Hispania",
        "situacao": "ok",
        "texto": "The Umayyad Caliphate conquered the Visigothic Kingdom on the Iberian Peninsula in the early 8th century. The conquest resulted in the end of Christian rule throughout most of Iberia and the establishment of Muslim rule in that territory, which came to be known as al-Andalus under the Umayyad dynasty.\n[…]\nThey defeated the Visigothic army, led by King Roderic, in a decisive battle at Guadalete in July that year. In 712, Tariq's forces were then reinforced by those of his superior, the wāli Musa ibn Nusayr, who planned a second invasion, and within a few years both took control of more than two-thirds of the Iberian Peninsula.\n[…]\nThe Iberian Peninsula was the westernmost tip of the Umayyad Caliphate of Damascus and was under the rule of the governor of Ifriqiya. In 720, the caliph even considered abandoning the territory. The conquest was followed by a period of several hundred years during which most of the Iberian peninsula was known as al-Andalus, dominated by Muslim rulers. Only a handful of new small Christian realms managed to reassert their authority across the distant mountainous north of the peninsula.\n[…]\nAs discussed above, much of the traditional narrative of the Umayyad conquest of the Iberian Peninsula is more legend than reliable history. Some of the key events and the stories around them are outlined below.\n[…]\n710 – Tariq ibn Ziyad, a Berber mawla of Musa ibn Nusayr, lands with 400 men and 100 horses on the tiny peninsula now called Gibraltar (Jebel al Tarik: Mountain of Tariq, after his name).\n[…]\n711 – Musa ibn Nusayr, governor of Ifriqiya in North Africa, dispatches Tariq into the Iberian Peninsula.\n[…]\nTimeline of the Muslim presence in the Iberian peninsula"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Invas%C3%A3o_mu%C3%A7ulmana_da_Pen%C3%ADnsula_Ib%C3%A9rica",
        "situacao": "ok",
        "texto": "A Invasão Mulçumana da Península Ibérica (em árabe: فَتْحُ الأَنْدَلُس; romaniz.: fatḥu l-andaluz; 711–726), também conhecida como Invasão Muçulmana, Conquista Árabe ou Expansão Muçulmana, refere-se a uma série de mobilizações populacionais e, sobretudo militares, ocorridas entre os anos de 711 e 726, quando tropas islâmicas vindas do Norte da África, sob o comando do general berbere Tárique, cruz\n[…]\nA partir do pequeno território que Pelágio designou como Reino das Astúrias, os cristãos (hispano-godos e lusitano-suevos), acantonados nas serranias do norte e noroeste da Península, foram gradativamente formando novos reinos, que se estenderam para o Sul. Surgiram, assim, os reinos de Castela, Leão (de onde derivou mais tarde o Condado Portucalense e, subsequentemente, Portugal), Pamplona (mais tarde designado de Navarra) e Aragão.\n[…]\nA Reconquista perdurou até o fim da Idade Média, sendo concluída no início da Idade Moderna, em 1492, quando o último Estado muçulmano ibérico foi conquistado pelos Reis Católicos Fernando II de Aragão e Isabel I de Castela.\n[…]\nA influência deixada pelos muçulmanos ainda pode ser percebida nas inúmeras palavras do português e do castelhano que vieram do árabe, como \"açúcar\" (azúcar), \"alcaide\" e \"almirante\". Segundo o dicionário Houaiss, existem na língua portuguesa cerca de 700 palavras de origem árabe.\n[…]\nO domínio muçulmano na Península Ibérica, então denominada Alandalus, durante a Idade Média, pode ser dividido nas seguintes fases:\n[…]\n1.º período (711–756): Invasão muçulmana da Península Ibérica e estabelecimento de um emirado dependente do Califado de Damasco;\n[…]\nA população sob o domínio muçulmano era muito heterogênea e constituída por árabes e berberes, uns e outros muçulmanos, moçárabes (hispano-godos que, sob o domínio muçulmano, conservaram a sua religião, mas adotaram as formas de vida exterior dos muçulmanos), cristãos arabizados e judeus.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Robô (palavra)",
      "descricao": "Palavra para máquina automática, criada na peça tcheca R.U.R., de Karel Čapek"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A palavra robô, do tcheco robota, trabalho forçado, surgiu numa peça de teatro de Karel Čapek. Em que década ela estreou?",
    "resposta": "Década de 1920",
    "distratores": [
      "Década de 1890",
      "Década de 1940",
      "Década de 1950"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/R.U.R."
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R.U.R. is a 1920 science fiction play by the Czech writer Karel Čapek. \"R.U.R.\" stands for Rossumovi Univerzální Roboti (Rossum's Universal Robots, a phrase that has been used as a subtitle in English versions).\n[…]\nThe play introduced the word robot, which displaced older words such as \"automaton\" or \"android\" in languages around the world. In an article in Lidové noviny, Karel Čapek named his brother Josef as the true inventor of the word. In Czech, robota means forced labour of the kind that serfs had to perform on their masters' lands and is derived from rab, meaning \"slave\".\n[…]\nBy 1921, Paul Selver translated either the original 1920 edition of R.U.R. or a manuscript copy close to this version into English. He probably translated the play freelance, and sold it to St Martin's Theatre in London. Selver's translation was adapted for the British stage by Nigel Playfair in 1922, but it was not produced straight away. Later that year performance rights for the U.S. and Canada were sold to the New York Theatre Guild, perhaps during Lawrence Langner's visit to Britain.\n[…]\nIn 2024, MIT Press published the book R.U.R. and the Vision of Artificial Life, which offered a new translation of the original 1920 edition by Štěpán Šimek. The book also contained a collection of essays reflecting on the play's legacy from scientists and scholars who work in artificial life and robotics.\n[…]\nIn the film Mother/Android (2021), the play R.U.R. of Karel Čapek comes up. In the movie, Arthur, an AI programmer, turns out to be an android.\n[…]\nKarel Čapek bio.\n[…]\nOnline facsimile version of the 1920 first edition in Czech."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/R.U.R.",
        "situacao": "ok",
        "texto": "R. U. R. é uma peça teatral de ficção científica de 1920 escrita pelo tcheco Karel Čapek. R. U. R. significa Rossumovi Univerzální Roboti (Robôs Universais de Rossum). A frase em inglês \"Rossum's Universal Robots\" foi usada como legenda na versão checa original. A peça estreou no dia 25 de janeiro de 1921, e introduziu a palavra \"robô\" em variados idiomas e na ficção científica como um todo.\n[…]\nA peça introduziu a palavra robô, que deslocou palavras mais antigas como \"automaton\" ou \"android\" em idiomas de todo o mundo. Em um artigo na Lidové noviny, Karel Capek nomeou seu irmão Josef Čapek (1887-1945) como o verdadeiro inventor da palavra. Em checo, robota significa trabalho forçado do tipo que os servos tinham que executar nas terras de seus mestres e é derivado de rab, que significa \"escravo\".\n[…]\nA obra foi publicada em Praga pela Aventinum em 1920, e estreou naquela cidade em 25 de janeiro de 1921, sendo encenada no palco do Teatro Nacional. Ela foi traduzida do checo para o inglês por Paul Selver e adaptada para o inglês por Nigel Playfair, em 1923. A tradução de Selver resumiu a peça e eliminou um personagem, um robô chamado \"Damon\". Em abril de 1923 Basil Dean produziu R. U. R. para o Reandean Company no St Martin's Theatre, em Londres.\n[…]\n\"a peça de Capek é, na minha opinião, muito ruim, mas ela é imortal por essa palavra. Ele contribuiu com a palavra 'robô', não só para o inglês, mas, através do inglês, para todas as línguas em que a ficção científica agora é escrita\".\n[…]\nEm Robô Selvagem, animação de 2024, a protagonista é chamada \"Roz\", abreviatura de \"ROZZUM 7134\". Segundo Peter Brown, autor da série de livros The Wild Robot, na qual a animação se baseia, este nome é \"um aceno sutil à peça de Čapek\".\n[…]\nKarel Capek bio.\n[…]\nOnline fac-símile da versão da década de 1920, primeira edição em checo.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "Macau",
      "descricao": "Região administrativa especial da China, antiga possessão portuguesa"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de séculos de presença portuguesa, em que ano a administração de Macau foi transferida para a China?",
    "resposta": "1999",
    "distratores": [
      "1997",
      "1995",
      "2002"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau",
        "situacao": "ok",
        "texto": "The handover of Macau from the Portuguese Republic to the People's Republic of China (PRC) officially occurred at midnight on 20 December 1999. This event ended 442 years of Portuguese rule in the former settlement, which began in 1557.\n[…]\nMacau was settled by Portuguese merchants that year during the Ming dynasty era and was subsequently under various degrees of Portuguese rule until 1999. Portugal's involvement in the region was formally recognised by the Qing dynasty in 1749. The Portuguese governor João Maria Ferreira do Amaral, emboldened by British actions in the First Opium War and the Treaty of Nanking, attempted to annex the territory by expelling Qing authorities in 1846, but was assassinated in 1849.\n[…]\nThe colony remained under de jure Portuguese rule until 20 December 1999, when its handover to China took place and became the Macau Special Administrative Region (SAR) of the PRC. The handover marked the end of almost six centuries of the Portuguese Empire since 1415.\n[…]\nThe twelve years between the signing of the \"Sino-Portuguese Declaration\" on 13 April 1987 and the handover on 20 December 1999 were known as \"the transition\".\n[…]\n(00:00:00 Macau Time (same as Beijing Time)) – Sovereignty of Macau is officially transferred from Portuguese Republic to the People's Republic of China. The Flag of the People's Republic of China and the Macau regional flag were simultaneously raised to the Chinese national anthem \"March of the Volunteers\", to officially mark the beginning of the Chinese rule in Macau.\n[…]\nFor Portugal, the handover of Macau to China marked the end of the Portuguese Empire and its decolonisation process and also the end of European imperialism in China and Asia.\n[…]\nTime Capsule (Macau)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Transfer%C3%AAncia_da_soberania_de_Macau",
        "situacao": "ok",
        "texto": "A transferência da soberania de Macau de Portugal para a República Popular da China (RPC) foi um evento ocorrido oficialmente em 20 de dezembro de 1999, conforme previsto na Declaração Conjunta Sino-Portuguesa, assinada em 13 de abril de 1987.\n[…]\nApós a Segunda Guerra do Ópio, o governo português, juntamente com um representante britânico, assinou o Tratado de Amizade e Comércio Sino-Português que deu a soberania a Portugal sobre Macau, sob a condição de que Portugal cooperasse nos esforços para acabar com o contrabando de ópio.\n[…]\nTendo sido derrubado o Estado Novo português pela Revolução dos Cravos, um golpe ocorrido em 1974, o governo socialista de Portugal, em um ano, retirou tropas de Macau, retirou o reconhecimento da República da China (Taiwan) e tentou iniciar negociações com a China Comunista sobre a transferência de Macau, que no entanto recusou.\n[…]\nNo quadro das negociações para o reconhecimento da RPC por Portugal em 1979, houve um acordo secreto em que Portugal reconhecia o estatuto de Macau como \"um território chinês sob administração portuguesa\". Só depois da assinatura da declaração conjunta sino-britânica sobre a questão de Hong Kong é que a China e Portugal discutiram o estatuto de Macau. Quatro conferências, de junho de 1986 a março de 1987, resultaram na Declaração Conjunta Sino-Portuguesa assinada em 13 de abril de 1987.\n[…]\nA colónia permaneceu sob domínio português de jure até 20 de dezembro de 1999, altura em que foi transferida para a China, tornando-se a Região Administrativa Especial (RAE) de Macau da República Popular da China. É concedida pela RPC um elevado nível de autonomia e a manutenção do seu sistema legal pela Lei Básica de Macau.\n[…]\nHistória de Macau\n[…]\nPolítica de Macau",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Caixa de Pandora",
      "descricao": "Expressão para algo que, aberto, desencadeia uma série de males, vinda do mito grego de Pandora"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "No mito da caixa de Pandora, depois que todos os males escaparam pelo mundo, o que ficou guardado lá dentro?",
    "resposta": "A esperança",
    "distratores": [
      "A sabedoria",
      "O amor",
      "A morte"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Pandora%27s_box"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Pandora%27s_box",
        "situacao": "ok",
        "texto": "Pandora's box is an artefact in Greek mythology connected with the myth of Pandora in Hesiod's c. 700 B.C. poem Works and Days. Hesiod related that curiosity led her to open a container left in the care of her husband, thus releasing various deadly evils upon humanity, such as brutal toil and terrible illnesses. Later depictions of the story have been varied, with some literary and artistic treatm\n[…]\nFrom this story has grown the idiom \"to open a Pandora's box\", meaning to do or start something that will cause many unforeseen problems. A modern, more colloquial equivalent is \"to open a can of worms\".\n[…]\nIn the iconography of the time, such a figure is usually associated with the femme fatale, but in this case, the crown of hyacinths about her head identifies Pandora as an innocent Greek maiden. Nevertheless, the presence of the sphinx at which she gazes with such curiosity suggests a personality on the cusp, on the verge of gaining some harmful knowledge that will henceforth negate her uncomplicated qualities. The name of Pandora already tells her future.\n[…]\nBeall, E. \"The Contents of Hesiod's Pandora Jar: Erga 94–98\", Hermes 117 (1989) 227–230.\n[…]\nLamberton, Robert, Hesiod, New Haven: Yale University Press, 1988. ISBN 0-300-04068-7. Cf. Chapter II, \"The Theogony\", and Chapter III, \"The Works and Days\", especially pp. 96–103 for a side-by-side comparison and analysis of the Pandora story.\n[…]\nPanofsky, Dora and Erwin. Pandora's Box. The Changing Aspects of a Mythical Symbol (New York: Pantheon, Bollingen series) 1956.\n[…]\nVerdenius, Willem Jacob, A Commentary on Hesiod Works and Days vv 1–382 (Leiden: E.J. Brill, 1985). ISBN 90-04-07465-1. This work has a very in-depth discussion and synthesis of the various theories and speculations about the Pandora story and the jar. Cf. pp. 62 & 63 and onwards.\n[…]\nMedia related to Pandora's box at Wikimedia Commons"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Caixa_de_Pandora",
        "situacao": "ok",
        "texto": "Caixa de Pandora é um objeto da mitologia grega, peça central do mito de Pandora, a primeira mulher criada por Zeus, um dos mais conhecidos dentre as histórias míticas. Embora popularizado como uma \"caixa\" nas versões primitivas do mito tem-se que o recipiente seria um jarro.\n[…]\nNa versão mais conhecida conta-se que Pandora fora criada por Hefesto a mando de Zeus como forma de se vingar da humanidade após o titã Prometeu haver dado aos homens o segredo do fogo; enviada à terra para se casar com Epimeteu, irmão de Prometeu, levava consigo uma caixa com a recomendação de que jamais fosse aberta mas ela, sem conter a curiosidade, abre-a e com isso liberta de seu interior todos os males até então desconhecidos pelos homens (doenças, guerra, mentira, ódio, etc.); Pandora então tenta fechar a caixa mas mantém em seu interior apenas a esperança.\n[…]\nNo resumo de um dicionário enciclopédico: “Primeira mulher, segundo Hesíodo. Criada por Atena e Hefesto com todas as perfeições, Hermes fê-la curiosa e enganadora. Zeus entregou-lhe uma vasilha fechada, que Pandora destapou e todos os males que ela continha se espalharam pelo mundo”.\n[…]\nComo todos os mitos também este procura explicar a origem de fenômenos de difícil compreensão, além de ter influência sobre o pensamento e expressões cotidianas. Neste último sentido tem-se que a expressão \"abrir a caixa de Pandora\" (ou equivalente como \"abrir o saco dos ventos\", usada em Portugal, como menção aos \"ventos\" malignos libertados com a abertura da vasilha confiada a Pandora) significa \"a origem de todos os males\".\n[…]\nFoi esse o presente que todos os deuses ofereceram então aos homens, para lhes causar a desgraça\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Vinagre (palavra)",
      "descricao": "Palavra para o condimento ácido obtido pela fermentação do vinho, formada por vinho e acre"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "A palavra vinagre nasceu da junção de vinho com qual adjetivo antigo?",
    "resposta": "Acre",
    "distratores": [
      "Amargo",
      "Negro",
      "Velho"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Vinegar"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Vinegar",
        "situacao": "ok",
        "texto": "Vinegar (from Old French  vyn egre 'sour wine') is an odorous aqueous solution of diluted acetic acid and trace compounds that may include flavorings or naturally occurring organic compounds. Vinegar typically contains from 4% to 18% acetic acid by volume.\n[…]\nThe word vinegar arrived in Middle English from Old French (vyn egre 'sour wine'), which in turn derives from Latin: vīnum 'wine' + ācre (neuter gender of ācer 'sour'). Vinegar was formerly also called eisel."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Vinagre",
        "situacao": "ok",
        "texto": "O termo vinagre, deriva do francês vinaigre, que quer dizer vinho agre ou azedo. O vinagre é um contaminante indesejável na fabricação de vinhos. É, entretanto, um composto bastante utilizado no preparo de alimentos.\n[…]\nNa Bíblia, tanto o Antigo quanto o Novo Testamento fazem referência ao vinagre. O fato mais conhecido talvez seja a Crucificação de Jesus, em que os romanos oferecem uma esponja embebida de vinagre a Jesus Cristo. Para Hipócrates, a substância continha propriedades medicinais. Era conhecida como posca, uma mistura de água e vinagre. Todavia, apesar de ser conhecido desde tempos remotos, a indicação técnica é propriedade de Geber, que o destilou.\n[…]\nA produção do vinagre envolve três tipos de alterações bioquímicas:\n[…]\nEmprega-se uma fermentação por leveduras para a produção do álcool. A concentração alcoólica é ajustada entre 10 a 13%, sendo, então, exposta às bactérias do ácido acético (é um processo aeróbio), que vai oxidar a solução alcoólica até que se produza o vinagre na concentração desejada.\n[…]\nExistem diversos tipos de vinagres produzidos dependendo do tipo de material usado na fermentação alcoólica (sucos, xaropes contendo amiláceos hidrolisados).\n[…]\nDe acordo com o FDA (Food and Drug Administration) a definição e padronização de um dos tipos de vinagre são: vinagre, vinagre de sidra e vinagre de maçã — produto obtido pelas fermentações alcoólica e subsequentemente acética do suco de maçãs. Contém, em 100 centímetros cúbicos a 20°C, não menos do que 4 gramas de ácido acético.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Português europeu",
      "descricao": "Variedade da língua portuguesa falada em Portugal"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Em Portugal, como se chama a primeira refeição do dia, que os brasileiros chamam de café da manhã?",
    "resposta": "Pequeno-almoço",
    "distratores": [
      "Lanche",
      "Merenda",
      "Ceia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Caf%C3%A9_da_manh%C3%A3"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Caf%C3%A9_da_manh%C3%A3",
        "situacao": "ok",
        "texto": "Desjejum ou dejejum, é a primeira refeição do dia, consumida geralmente de manhã.\n[…]\nNos diversos países lusófonos, esta refeição é conhecida por diferentes nomes, tais como: quebra-jejum, mata-bicho  (português angolano e moçambicano), almorço (galego), pequeno-almoço (português europeu) ou café da manhã (português brasileiro).\n[…]\nO étimo latino disjejunare também deu origem ao francês déjeuner com o mesmo significado na Bélgica, na Suíça e no Canadá, mas não na França, onde significa almoço. Para identificar a primeira refeição tomada no dia, em francês de França, opta-se pela designação \"petit-déjeuner\".\n[…]\nHistoricamente, desde o século XIV, que em Portugal a primeira refeição dava pelos nomes de parva, dejejuadouro, quebra-jejum, desjejum e mata-bicho, designações que alternavam consoante a região. De um modo geral, todas as variantes consistiam em refeições parcas e simples, que podiam resumir-se a azeitonas com pão, ou talvez até um pouco de queijo ou toucinho, em alturas de maior fartura, amiúde acompanhadas de um gole de bebidas alcoólicas fortes, por sinal, a aguardente.\n[…]\nEram geralmente relegadas aos trabalhadores agrícolas, antes de se irem para a lavoura. Podia haver uma sazonalidade destas refeições. Segundo alguns autores, só havia lugar a estas refeições no Verão, altura em que o trabalho começava mais cedo.\n[…]\nA parva, nome usado na Estremadura e no litoral alentejano, consistia numa refeição pobre, que podia resumir-se a azeitonas com pão e aguardente. Dava-se aos ganhões e aos jornaleiros antes do almoço, que era a primeira refeição grande do dia."
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Mentor (personagem)",
      "descricao": "Personagem da Odisseia, amigo de Ulisses, cujo nome virou sinônimo de orientador"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A palavra mentor vem de um personagem da Odisseia, amigo de Ulisses. De quem ele foi conselheiro e guia?",
    "resposta": "Telêmaco",
    "distratores": [
      "Aquiles",
      "Páris",
      "Heitor"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Mentor_(Odyssey)"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Mentor_(Odyssey)",
        "situacao": "ok",
        "texto": "Mentor (Greek: Μέντωρ, Méntōr) is a figure in Greek mythology who plays a significant role in Homer’s Odyssey as the advisor to Odysseus’s son Telemachus. The character is the source of the term mentor in various languages.\n[…]\nWhen Odysseus fails to return from the war, Ithaca is beset by suitors who wish to marry his wife Penelope, and wreak havoc at the palace. When Telemachus calls an assembly to ask for help in expelling them, Mentor unsuccessfully tries to rally the people to the prince's side. Subsequently, the goddess Athena takes the form of Mentor to guide Telemachus on his own voyage to discover what became of Odysseus in the section of the epic known as the Telemachy.\n[…]\nMentor (and Athena disguised as Mentor) is a major character in popular 1699 novel Les Aventures de Télémaque by French archbishop and author François Fénelon. Fénelon's book expands on the narrative from Homer's Telemachy, with Athena taking the form of Mentor to advise Télémaque through challenges that teach him how to become a good and just king.\n[…]\nWhereas Mentor is a minor character the Odyssey, an old friend of Odysseus who seemingly failed in his charge to maintain the household, in Télémaque he takes on a much larger role as Telemachus' counsellor.\n[…]\nFollowing Mentor's appearance in Télémaque, his name was adopted into various languages as a term for someone who shares wisdom and knowledge with a less-experienced colleague. \"Mentor\" in this sense is first attested in German in 1725, in French in 1749, in English in 1750 and in Spanish in 1785, with the variant mentore appearing in Italian in 1789."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Mentor_%28Odisseia%29",
        "situacao": "ok",
        "texto": "Na Odisseia, Mentor (em grego: Μέντωρ, Méntōr; gen.: Μέντορος) era filho de Álcimo. Na velhice, Mentor foi um amigo de Odisseu. Quando Odisseu partiu para a Guerra de Troia, ele pôs Mentor e Eumaio (criador de porcos de Odisseu) a cargo de seu filho Telêmaco e do palácio de Odisseu. Às vezes foi personificado por Atena.\n[…]\nQuando Atena visitou Telêmaco, ela usou o disfarce de Mentor para se esconder dos pretendentes da mãe de Telêmaco, Penélope. Como Mentor, a deusa incentivou Telêmaco a se levantar contra os pretendentes e a ir para o exterior para descobrir o que aconteceu com seu pai. Quando Odisseu retornou a Ítaca, Atena apareceu brevemente na forma de Mentor novamente no palácio de Odisseu.\n[…]\nA aparição de Atena como Mentor não deve ser confundida com sua aparição como Mentes no primeiro livro da Odisseia.\n[…]\nDevido ao relacionamento da Mentor com Telêmaco, e ao incentivo disfarçado de Atena e planos práticos para lidar com dilemas pessoais, o nome pessoal Mentor foi adotado como um termo que significa alguém que transmite sabedoria e compartilha conhecimento com um colega menos experiente, em latim e em outras linguas incluindo mentor no inglês, méntor no espanhol, Mentor no alemão מענטאָר no yiddish, մենտոր no armenio, e a palavra obsoleta ментор no russo.\n[…]\nO primeiro uso moderno registrado do termo pode ser atribuído a um livro de 1699 intitulado Les Aventures de Télémaque, do escritor francês François Fénelon. No livro, o personagem principal é o de Mentor. Este livro foi muito popular durante o século XVIII e a aplicação moderna do termo pode ser atribuída a esta publicação. ==Referências==",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Mandioca",
      "descricao": "Raiz comestível nativa da América do Sul, Manihot esculenta, com vários nomes regionais no Brasil"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "No Nordeste, a mandioca costuma ser chamada de macaxeira. Por qual nome ela é mais conhecida no Rio de Janeiro?",
    "resposta": "Aipim",
    "distratores": [
      "Inhame",
      "Cará",
      "Taioba"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mandioca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mandioca",
        "situacao": "ok",
        "texto": "Manihot esculenta, conhecida como mandioca, macaxeira, aipim, castelinha, uaipi, mandioca-doce, mandioca-mansa, maniva, maniveira, pão-de-pobre, mandioca-brava e mandioca-amarga, é uma planta da família das Euphorbiaceae. Esta planta é nativa da América do Sul, no entanto está presente em muitas regiões do mundo.\n[…]\nNo Brasil, o termo mandioca-amarga ou mandioca-brava é utilizado para as plantas com teor de ácido cianídrico (HCN) superior a 100 mg/kg; enquanto que o termo macaxeira, mandioca-mansa, mandioca de mesa ou aipim, é utilizado nas plantas que possuem menos de 50 mg de HCN por kg de raiz fresca sem casca.\n[…]\n\"Maniva\" origina-se do termo tupi mani'yba, literalmente \"pé de mani\". \"Aipim\" origina-se do termo tupi aîpĩ.\n[…]\nmansas — aipim ou macaxeira (<50 mg), não têm sabor amargo e são usadas para consumo humano. O cozimento, fritura ou assamento são processamentos suficientes para torná-las seguras;\n[…]\nA macaxeira (mandioca mansa, de mesa ou aipim), por apresentar baixos teores de ácido cianídrico (<50 mg/kg), pode ser consumida após pouco processamento culinário (cozer em água, ou leve cozedura seguido de fritura etc).\n[…]\nNas Filipinas, o bolo de mandioca ou Kakanin é uma das sobremesas caseiras mais populares e apreciadas. É feito a partir de mandioca ralada (Kamoteng Kahoy), misturado com leite de coco, ovos e manteiga e coberto com uma mistura de leite cremoso. É também chamado de cassava bibingka.\n[…]\nProduziam mais dois tipos de farinha, a de guerra que continha apenas mandioca fresca e era muito cozida e a farinha mole feita de mandioca puba. A primeira era também chamada de farinha seca e a segunda farinha d’água. Tanto missionários como militares necessitados de farinha induziram os indígenas a produzir para eles, de certa forma obrigando-os a fazer cada vez roças maiores de mandioca."
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Frequência de letras",
      "descricao": "Medida de quantas vezes cada letra aparece nos textos de uma língua"
    },
    "angulo": "comparacao",
    "tipo": "multipla",
    "pergunta": "Nos textos em português, a letra a é a mais frequente. Qual letra vem logo em segundo lugar?",
    "resposta": "E",
    "distratores": [
      "O",
      "S",
      "R"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Letter_frequency"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Letter_frequency",
        "situacao": "ok",
        "texto": "Letter frequency is the number of times letters of the alphabet appear on average in written language. Letter frequency analysis dates back to the Arab mathematician Al-Kindi (c. AD 801–873), who formally developed the method to break ciphers. Letter frequency analysis gained importance in Europe with the development of movable type in AD 1450, wherein one must estimate the amount of type required\n[…]\nPortuguese: 'aeosri dmntcu' (Indo-European: Romance)\n[…]\nArabic letter frequency\n[…]\nEnglish word frequency\n[…]\nLetter frequency effect\n[…]\nLetter Frequencies\n[…]\n\"Some examples of letter frequency rankings in some common languages\". www.bckelk.org.uk.\n[…]\n\"JavaScript Heatmap Visualization showing letter frequencies of texts on different keyboard layouts\". www.patrick-wied.at.\n[…]\nLetter frequency—simia.net\n[…]\nUseful tables for single letter, digram, trigram, tetragram, and pentagram frequencies based on 20,000 words that take into account word-length and letter-position combinations for words 3 to 7 letters in length:\n[…]\nMayzner, M.S.; Tresselt, M.E.; Wolin, B.R. (1965). \"Tables of single-letter and digram frequency counts for various word-length and letter-position combinations\". Psychonomic Monograph Supplements. 1 (2): 13–32. OCLC 639975358.\n[…]\nMayzner, M.S.; Tresselt, M.E.; Wolin, B.R. (1965). \"Tables of trigram frequency counts for various word-length and letter-position combinations\". Psychonomic Monograph Supplements. 1 (3): 33–78.\n[…]\nMayzner, M.S.; Tresselt, M.E.; Wolin, B.R. (1965). \"Tables of tetragram frequency counts for various word-length and letter-position combinations\". Psychonomic Monograph Supplements. 1 (4): 79–143.\n[…]\nMayzner, M.S.; Tresselt, M.E.; Wolin, B.R. (1965). \"Tables of pentagram frequency counts for various word-length and letter-position combinations\". Psychonomic Monograph Supplements. 1 (5): 144–190."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Frequ%C3%AAncia_de_letras",
        "situacao": "ok",
        "texto": "A frequência de letras em um texto tem sido frequentemente estudada para uso em criptografia e análise de frequência em particular. Nenhuma distribuição de frequência de letras exata é subjacente a uma determinada língua, uma vez que todos os escritores escrevem um pouco diferente. As máquinas de linotipo classificaram as frequências das letras, como etaoin shrdlu cmfwyp vbgkqj xz com base na expe\n[…]\nUma média precisa de frequências de letras só pode ser adquirida através da análise de uma grande quantidade de textos representativos. Com a disponibilidade da computação moderna e coleções de grandes corpora de texto, esses cálculos são feitos facilmente.\n[…]\nEm português do Brasil, a sequência da frequência de letras tende a ser \"AEOSR INDMU TCLPV GHQBF ZJXKW Y\", com os pares de letras mais comuns \"DE RA ES OS AS DO AR CO EN QU ER DA RE CA TA SE NT MA UE TE\".\n[…]\nEm português de Portugal, a sequência da frequência de letras tende a ser \"AEOSR IDNMU TCLPV HGQBF ZJXKW Y\", com os pares de letras mais comuns \"DE RA ES OS AS DO AR EN QU ER CO DA SE RE NT UE OR TE MA AN\".\n[…]\nAs doze letras mais frequentes incluem cerca de 85% do uso total em português. As oito letras mais frequentes incluem cerca de 65% do uso total em português.\n[…]\nA frequência das letras tem um forte impacto na projeção de alguns teclados. Por exemplo, no teclado AZERTY, as letras mais frequentes ficam na linha superior, no teclado Blickensderfer, as letras mais frequentes ficam na linha inferior e, no teclado Simplificado Dvorak, as letras mais frequentes ficam na linha central.\n[…]\nA frequência das letras na língua portuguesa estão listadas abaixo\n[…]\nEm Inglês, o espaço é ligeiramente mais frequente do que a letra com mais frequência (7% mais frequentes do que, ou 107% mais frequente em relação à letra, e), e os caracteres não alfabéticos (dígitos, pontuação, etc) ocupam a quarta posição, entre t e a.\n[…]\nAnálise de frequência",
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
