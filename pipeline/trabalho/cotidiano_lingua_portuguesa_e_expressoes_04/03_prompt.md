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
      "nome": "Acordo Ortográfico de 1990",
      "descricao": "Tratado que unificou a ortografia dos países de língua portuguesa, em vigor no Brasil desde 2009"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "Em dezembro de 1990, em que cidade foi assinado o acordo que unificou a ortografia dos países de língua portuguesa?",
    "resposta": "Lisboa",
    "distratores": [
      "Rio de Janeiro",
      "Brasília",
      "Luanda"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
      "https://en.wikipedia.org/wiki/Portuguese_Language_Orthographic_Agreement_of_1990"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
        "situacao": "ok",
        "texto": "Acordo Ortográfico da Língua Portuguesa de 1990 (abreviado AO90), também denominado Ortografia Unificada da Língua Portuguesa, é um tratado internacional firmado em 1990 com o objetivo de criar uma ortografia unificada para o português, a ser usada por todos os países de língua oficial portuguesa (lusófonos); foi assinado por representantes oficiais de Angola, Brasil, Cabo Verde, Guiné-Bissau, Moç\n[…]\nA adoção da nova ortografia, de acordo com o Anexo II do Acordo (a Nota Explicativa do Acordo Ortográfico da Língua Portuguesa de 1990, que se baseia numa lista de 110 mil lemas da Academia das Ciências de Lisboa), acarreta alterações na grafia de cerca de 1,6% do total de palavras (lemas) na norma em vigor em Portugal, nos Países Africanos de Língua Oficial Portuguesa (PALOP), no Timor-Leste, e de aproximadamente 0,8% do total de palavras (lemas) na brasileira.\n[…]\nPara a elaboração do Acordo Ortográfico, reuniram-se na Academia das Ciências de Lisboa, no período de 6 a 12 de outubro de 1990, as seguintes delegações:\n[…]\nNo Acordo Ortográfico de 1990 está prevista a publicação de um Vocabulário Ortográfico Unificado da Língua Portuguesa, elaborado pela Academia das Ciências de Lisboa e pela Academia Brasileira de Letras, com a colaboração das competentes instituições dos países-parceiros do Acordo, o qual constituirá um instrumento de consulta e de resolução de dúvidas, que a aplicação de qualquer Acordo sempre levanta.\n[…]\nAcordo Ortográfico da Língua Portuguesa: é um tratado aprovado em 12 de outubro de 1990 pela Academia das Ciências de Lisboa, pela Academia Brasileira de Letras e por delegações de Angola, Cabo Verde, Guiné-Bissau, Moçambique e São Tomé e Príncipe, com a presença de delegação de observadores da Galiza, e assinado em Lisboa 16 de dezembro de 1990 por representantes de sete países lusófonos. Contém um preâmbulo e quatro artigos.\n[…]\nOrtografia da língua portuguesa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_Language_Orthographic_Agreement_of_1990",
        "situacao": "ok",
        "texto": "The Portuguese-Language Orthographic Agreement of 1990 (Portuguese: Acordo Ortográfico da Língua Portuguesa de 1990) is an international treaty whose purpose is to create a unified orthography for the Portuguese language, to be used by all the countries that have Portuguese as their official language. It was signed in Lisbon, on 16 December 1990, at the end of a negotiation, begun in 1980, between\n[…]\nHowever, according to proponents of reform, the fact that the persistence of two orthographies in the Portuguese language – the Luso-African and the Brazilian – impedes the trans-Atlantic unity of Portuguese and diminishes its prestige in the world – was expressed by the \"Preliminary Basis for Unified Portuguese Orthography\" in 1988, addressing criticisms directed toward at the proposal of 1986 and leading to the Orthographic Agreement of 1990.\n[…]\nIn addition to these, in the Preliminary Basis for Unified Portuguese Orthography of 1988, and in the Convention of the Orthographic Unification of Portuguese, formed in the Brazilian Academy of Letters in Rio de Janeiro from 6 to 12 May 1986, the following were also present: Maria Luísa Dolbeth e Costa (Angola); Abgar Renault, Adriano da Gama Kury, Austregésilo de Athayde, Celso Cunha, Eduardo Portella, Francisco de Assis Balthar Peixoto de Vasconcellos and José Olympio Rache de Almeida (Brazil); Corsino Fortes (Cape Verde); Paulo Pereira (Guinea-Bissau); Luís Filipe Pereira (Mozambique); Maria de Lourdes Belchior Pontes and Mário Quarin Graça (Portugal).\n[…]\nIn Article III, the Orthographic Agreement of 1990 scheduled its taking effect for 1 January 1994, following the ratification of all members. However, as only Portugal (on 23 August 1991), Brazil (on 18 April 1995), and Cape Verde have ratified the document, its complete implementation is pending.\n[…]\nOA: Portuguese spelling reform takes effect – Portugal – Portuguese American Journal"
      }
    ]
  },
  {
    "indice": 2,
    "ancora": {
      "nome": "Acordo Ortográfico de 1990",
      "descricao": "Tratado que unificou a ortografia dos países de língua portuguesa, em vigor no Brasil desde 2009"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O Timor-Leste só aderiu ao Acordo Ortográfico depois de independente. Quantos países assinaram o acordo original, em 1990?",
    "resposta": "Sete",
    "distratores": [
      "Cinco",
      "Oito",
      "Nove"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
      "https://en.wikipedia.org/wiki/Portuguese_Language_Orthographic_Agreement_of_1990"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Acordo_Ortográfico_de_1990",
        "situacao": "ok",
        "texto": "Acordo Ortográfico da Língua Portuguesa de 1990 (abreviado AO90), também denominado Ortografia Unificada da Língua Portuguesa, é um tratado internacional firmado em 1990 com o objetivo de criar uma ortografia unificada para o português, a ser usada por todos os países de língua oficial portuguesa (lusófonos); foi assinado por representantes oficiais de Angola, Brasil, Cabo Verde, Guiné-Bissau, Moç\n[…]\nApós a recuperação da independência, Timor-Leste aderiu ao Acordo, em 2004. O processo negocial que resultou no Acordo contou com a presença de uma delegação de observadores da Galiza.\n[…]\nNo Artigo 2.º do Acordo Ortográfico de 1990 lê-se:\n[…]\nO Acordo Ortográfico da Língua Portuguesa de 1990 é composto por quatro partes:\n[…]\nAcordo Ortográfico da Língua Portuguesa: é um tratado aprovado em 12 de outubro de 1990 pela Academia das Ciências de Lisboa, pela Academia Brasileira de Letras e por delegações de Angola, Cabo Verde, Guiné-Bissau, Moçambique e São Tomé e Príncipe, com a presença de delegação de observadores da Galiza, e assinado em Lisboa 16 de dezembro de 1990 por representantes de sete países lusófonos. Contém um preâmbulo e quatro artigos.\n[…]\nEm julho de 2004 foi o anfitrião da V Cimeira da CPLP, realizada em São Tomé, onde foi assinado o \"Segundo Protocolo Modificativo\" que admitiu Timor-Leste e deliberou que seria suficiente a ratificação do Acordo Ortográfico por três países para que entrasse em vigor.\n[…]\nTimor-Leste não participou nos trabalhos do Acordo Ortográfico de 1990 porque, na época, o território encontrava-se ocupado pela Indonésia, tendo recuperado a independência somente em 2002. Em julho de 2004 esteve presente na V Cimeira da CPLP, realizada em São Tomé, onde foi assinado o \"Segundo Protocolo Modificativo\" que, para além de deliberar que seria suficiente a ratificação por três países para que o Acordo Ortográfico entrasse em vigor, também admitiu Timor-Leste ao Acordo."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Portuguese_Language_Orthographic_Agreement_of_1990",
        "situacao": "ok",
        "texto": "The Portuguese-Language Orthographic Agreement of 1990 (Portuguese: Acordo Ortográfico da Língua Portuguesa de 1990) is an international treaty whose purpose is to create a unified orthography for the Portuguese language, to be used by all the countries that have Portuguese as their official language. It was signed in Lisbon, on 16 December 1990, at the end of a negotiation, begun in 1980, between\n[…]\nIn June 2004, the heads of state and government of the Community of Portuguese Language Countries (CPLP), gathered in São Tomé and Príncipe, approved a \"Second Amending Protocol for the Orthographic Agreement\" that, apart from permitting the addition of East Timor, provided that, instead of ratification by all countries, ratification by three members would suffice for it to take effect.\n[…]\nThe 1990 orthographic agreement proposes the elimination of the letters c and p from the European/African spelling whenever they are silent, the elimination of the diaeresis mark (ü) from the Brazilian spelling, and the elimination of the acute accent from the diphthongs éi and ói in paroxytone words. As for divergent spellings such as anónimo and anônimo, facto and fato, both will be considered legitimate, according to the dialect of the author or person being transcribed.\n[…]\nAt the July 2004 summit of the Community of Portuguese Language Countries (including East Timor), São Tomé and Príncipe ratified the agreement, and a modification was made to the text, allowing the reform to go forward in those countries which had already ratified it, and accepting the official orthographies in the other countries as legitimate in the meantime; however, this was to happen after a transition period which was not defined.\n[…]\nThe old orthographies continue to predominate in their respective countries until ratification of the 1990 agreement. Brazil changed on 1 January 2009."
      }
    ]
  },
  {
    "indice": 3,
    "ancora": {
      "nome": "Hino Nacional Brasileiro",
      "descricao": "Hino oficial do Brasil, com música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "A música do Hino Nacional é do século dezenove, mas a letra de Osório Duque-Estrada só se tornou oficial em qual ano?",
    "resposta": "1922",
    "distratores": [
      "1889",
      "1909",
      "1931"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
      "https://en.wikipedia.org/wiki/Brazilian_National_Anthem"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nUm concurso realizado em 1909 escolheu a letra que deveria acompanhar a composição já aceita como a oficial do Hino; perfeccionista, Duque-Estrada efetuou daquele ano até sua oficialização em 1922, alterações em nove passagens sobre a versão inicial.\n[…]\nAtualmente, o manuscrito da letra, que é datado de 3 de agosto de 1922, integra o acervo da Academia Brasileira de Letras (ABL).\n[…]\nSempre Brilhar.”O fato é que até antes de 6 de setembro de 1922, data em que o poema de Joaquim Osório Duque Estrada foi oficializado, o Hino de Francisco Manuel da Silva permanecia sem um poema oficial, era entoado com as mais diferentes adaptações de uma localidade para outra, e não raro refletia um regionalismo contrário ao ideal de federalismo e unidade nacional.\n[…]\nEm 1917 o cantor Vicente Celestino foi o primeiro brasileiro a gravar o Hino Nacional, tendo por acompanhamento a Banda do Batalhão Naval e, nas passagens de refrão, também por um coro; esta versão, em si bemol, deu um tom de difícil interpretação pelas pessoas; a Banda deu andamento mais lento e solene nas passagens do cantor, enquanto mantinha o estilo tradicional (mais rápido e vibrante) apenas durante os refrões - o que veio a motivar apreciação oficial por uma comissão de reavaliação do Hino em 1936 e, durante algum tempo, insatisfação por parte das bandas militares da época; a despeito disso essa versão foi oficializada em 1922.\n[…]\nHino da Independência do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_National_Anthem",
        "situacao": "ok",
        "texto": "The \"Brazilian National Anthem\" (Hino Nacional Brasileiro), also known as the National Anthem of Brazil, was composed by Francisco Manuel da Silva in 1831 and had been given at least two sets of unofficial lyrics before a 1922 decree by president Epitácio Pessoa gave the anthem its definitive, official lyrics, by Joaquim Osório Duque-Estrada, after several changes were made to his proposal, writte\n[…]\nIn the early days of the new Federal Republic, the National Anthem continued without official lyrics, but several lyrics were proposed, and some were even adopted by different states of Brazil. The lack of uniform, official lyrics would only be terminated in 1922, during the celebrations of the first centennial of the Proclamation of Independence, when an adapted version of Joaquim Osório Duque Estrada's lyrics, first proposed in 1909, were deemed official.\n[…]\nOn 7 September 1922, on the exact day of the Independence Centennial, radio broadcasts began in Brazil, and the first broadcast was the performance of the National Anthem with the new lyrics, followed by the speech by president Epitácio Pessoa, the first radio address by a Brazilian president.\n[…]\nDue to the fact that the traditional vocal adaptation composed by Alberto Nepomuceno for Joaquim Osório Duque Estrada's lyrics of the national anthem was made official in 1971, other vocal arrangements (as well as other instrumental arrangements departing from the one recognized in law) are unofficial.\n[…]\nThe song consists of two consecutive stanzas. The adoption in 1922 of lyrics containing two stanzas thus created the present situation of the music of the anthem being played twice so as to allow for the singing of both stanzas.\n[…]\n\"Brazilian Flag Anthem\" (Portuguese: Hino à Bandeira)\n[…]\n\"Brazilian Anthem of Independence\" (Portuguese: Hino da Independência)\n[…]\n\"Brazilian Republic Anthem\" (Portuguese: Hino da Proclamação da República)"
      }
    ]
  },
  {
    "indice": 4,
    "ancora": {
      "nome": "Hino Nacional Brasileiro",
      "descricao": "Hino oficial do Brasil, com música de Francisco Manuel da Silva e letra de Joaquim Osório Duque-Estrada"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Hino Nacional, o Brasil é chamado de impávido colosso. O que significa a palavra impávido?",
    "resposta": "Destemido",
    "distratores": [
      "Imenso",
      "Imóvel",
      "Orgulhoso"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/impávido",
      "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/impávido",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Hino_Nacional_Brasileiro",
        "situacao": "ok",
        "texto": "O Hino Nacional Brasileiro é um dos quatro símbolos oficiais da República Federativa do Brasil, conforme estabelece o art. 13, § 1.º, da Constituição do Brasil. Os outros símbolos da República são a Bandeira Nacional, as Armas Nacionais e o Selo Nacional. Tem letra de Joaquim Osório Duque-Estrada (1870–1927) e música de Francisco Manuel da Silva (1795–1865).\n[…]\nEm 1908 ou 1909, foi feita a primeira gravação vocal do Hino Nacional, mas surpreendentemente, não por um brasileiro; e sim por um cantor europeu de identidade desconhecida (identificado apenas como A. de Souza, um possível pseudônimo) para a companhia francesa Aérophone.\n[…]\nEm 1917 o cantor Vicente Celestino foi o primeiro brasileiro a gravar o Hino Nacional, tendo por acompanhamento a Banda do Batalhão Naval e, nas passagens de refrão, também por um coro; esta versão, em si bemol, deu um tom de difícil interpretação pelas pessoas; a Banda deu andamento mais lento e solene nas passagens do cantor, enquanto mantinha o estilo tradicional (mais rápido e vibrante) apenas durante os refrões - o que veio a motivar apreciação oficial por uma comissão de reavaliação do Hino em 1936 e, durante algum tempo, insatisfação por parte das bandas militares da época; a despeito disso essa versão foi oficializada em 1922.\n[…]\nGrande Fantasia Triunfal sobre o Hino Nacional Brasileiro foi composta por Louis Moreau Gottschalk e sua estreia se deu em concerto em 1869, tendo sido executada por 650 músicos, no Rio de Janeiro. Dedicada à \"Sua Alteza Imperal, a senhora Condessa d'Eu\", a princesa Isabel, a obra se trata de variações, especialmente em piano, da música de Francisco Manuel da Silva. Foi muito executada por Guiomar Novais e por Eudóxia de Barros.\n[…]\nHino da Independência do Brasil\n[…]\nLei dos Símbolos Nacionais do Brasil\n[…]\nHino Nacional do BrasilArquivo em mp3.\n[…]\nHino Nacional BrasileiroArquivo *.wav."
      }
    ]
  },
  {
    "indice": 5,
    "ancora": {
      "nome": "Til",
      "descricao": "Sinal gráfico ondulado usado sobre as vogais a e o no português"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Na escrita dos copistas medievais, o til nasceu como uma versão em miniatura de qual letra, escrita sobre a vogal para poupar espaço?",
    "resposta": "N",
    "distratores": [
      "Z",
      "U",
      "S"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Tilde",
      "https://pt.wikipedia.org/wiki/Til"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Tilde",
        "situacao": "ok",
        "texto": "The tilde (, also ) is a grapheme ⟨˜⟩ or ⟨~⟩ with a number of uses. The name of the character came into English from Spanish tilde, which, in turn, came from the Latin titulus, meaning 'title' or 'superscription'. Its primary use internationally is as a diacritic in combination with a base letter. Its freestanding form, most common in English, is used in modern texts mainly to indicate approximati\n[…]\nA macron was used to make abbreviations in medieval Latin documents. When an ⟨n⟩ or ⟨m⟩ followed a vowel, it was often omitted, and a small ⟨N⟩) was placed over the preceding vowel to indicate the missing letter; this is the origin of the use of tilde to indicate nasalization (compare the development of the umlaut as an abbreviation of ⟨e⟩.) A curled macron marked an omitted ⟨a⟩ or a syllable containing it.\n[…]\n{\\displaystyle X\\to x+{\\tilde {x}}}\n[…]\n{\\displaystyle {\\tilde {x}}}\n[…]\nA similar situation exists regarding the Korean KS X 1001 character set, in which Microsoft maps the EUC-KR or UHC code for the wave dash (0xA1AD) to U+223C ∼ TILDE OPERATOR, while IBM and Apple map it to U+301C. Microsoft also uses U+FF5E to map the KS X 1001 raised tilde (0xA2A6), while Apple uses U+02DC ˜ SMALL TILDE.\n[…]\nAccording to the Unicode 17.0.0 specification, \"IPA, pronunciation systems, some transliteration systems, and a few languages such as Tagalog, use diacritics that are applied to a sequence of two letters\". Accordingly, it provides encoding for a combining tilde diacritic that spans adjacent characters (although conventionally called a \"double tilde\", it is in fact a  wide single tilde):\n[…]\nU+0360 ◌͠◌ COMBINING DOUBLE TILDE\n[…]\nU+FE22 ◌︢ COMBINING DOUBLE TILDE LEFT HALF\n[…]\nU+FE23 ◌︣ COMBINING DOUBLE TILDE RIGHT HALF\n[…]\nDouble tilde (disambiguation)\n[…]\nVietnamese tilde – Curved diacritic used in the early Vietnamese alphabet, a graphical variant of the tilde that was once used as a special diacritic mark in Vietnamese"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Til",
        "situacao": "ok",
        "texto": "O til ou tilde (~; plural tis, tiles ou tildes) é um sinal diacrítico que serve para nasalar/ nasalizar as vogais. Em português, utiliza-se sobre o a (ex: melão) e o o (ex: melões) e muito raramente no português arcaico (galego-português) sobre outras vogais também, por exemplo nas palavras mũito, ruĩ (ou seja ruim) e ẽarcar, ẽarcado e desẽalmado. Estas últimas ainda surgem em alguns dicionários p\n[…]\nHistoricamente, o til era uma abreviatura da letra n ou m em posição de travamento silábico, escrito por cima da linha. Em latim, por exemplo, \"Cũ ejusdẽ [...] diligẽtissime\" (cum eiusdem [...] diligentissime). Em português, essa indicação passou a designar um sinal de nasalização. A referência mais antiga à definição do til é do século XVI na Gramática de João de Barros.\n[…]\ncastelhano, basco e galego (normativa da Real Academia Galega): para formar a letra ñ (lê-se nh)\n[…]\nEm português, o til põe-se sobre as letras a e o para indicar vogal nasal, só muito excepcionalmente ao u, como em Piūi e seu gentílico piũiense.\n[…]\nEm galego-português, o til era usado em hiatos de uma vogal nasal seguida de outra vogal.\n[…]\nVogal nasal"
      }
    ]
  },
  {
    "indice": 6,
    "ancora": {
      "nome": "Cedilha",
      "descricao": "Sinal gráfico colocado sob a letra c, formando o ç"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "Além do português, qual destas línguas usa hoje o cê-cedilha na sua escrita?",
    "resposta": "Francês",
    "distratores": [
      "Espanhol",
      "Italiano",
      "Romeno"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Cedilha",
      "https://en.wikipedia.org/wiki/Cedilla"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Cedilha",
        "situacao": "ok",
        "texto": "Cedilha (em castelhano:  cedilla, ou em francês:  cédille, pronunciada(o) [sedijə]) é um símbolo ( ¸ ) adicionado sob certas letras como um sinal diacrítico para modificar sua pronúncia. Em catalão, francês e português, é usado apenas sob o c (formando ç), e a letra inteira é chamada, respectivamente, c trencada (em português:  c quebrado), c cédille, e c cedilhado (ou cê-cedilha). É usado para ma\n[…]\nA cauda originou-se na Espanha como a metade inferior de um z cursivo em miniatura. A palavra \"cedilla\" é o diminutivo do nome espanhol antigo para esta letra, ceda (zeta). O espanhol moderno e o galego isolacionista não usam mais esse diacrítico (além do Barça, apelido do time de futebol do Barcelona), embora seja usado no galego reintegracionista, português, catalão, occitano e francês. Uma ortografia obsoleta de cedilla é cerilla.\n[…]\nO primeiro uso em inglês citado pelo Oxford English Dictionary é um dicionário e gramática de espanhol-inglês de 1599. A Cyclopædia de Chambers é citada para a variante de impressão comercial ceceril (cê-cedilha) em uso em 1738.\n[…]\nCom o advento do modernismo, a natureza caligráfica da cedilha foi considerada um pouco chocante em fontes sem serifa, e alguns designers substituíram por um design de vírgula, que poderia ser mais ousado e mais compatível com o estilo do texto. Isso reduz a distinção visual entre a cedilha e a vírgula diacrítica.\n[…]\n«ScriptSource—Posicionando a cedilha tradicional»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cedilla",
        "situacao": "ok",
        "texto": "A cedilla ( sih-DIL-ə; from Spanish cedilla, \"small ceda\", i.e. small \"z\"), or cedille (from French cédille, pronounced [sedij]), is a hook or tail (¸) added under certain letters (as a diacritical mark) to indicate  that their pronunciation is modified. In Catalan (where it is called trenc), French, and Portuguese (where it is called a cedilha) it is used only under the letter ⟨c⟩ (to form ⟨ç⟩), \n[…]\n\"broken C\"), French: c cédille, and Portuguese: c cedilha (or c cedilhado). It is used to mark vowel nasalization in many languages of Sub-Saharan Africa, including Vute from Cameroon.\n[…]\nThe tail originated in Spain as the bottom half of a miniature cursive z. The word cedilla is the diminutive of the Old Spanish name for this letter, ceda (zeta). Modern Spanish and isolationist Galician no longer use this diacritic, although it is used in Reintegrationist Galician, Portuguese, Catalan, Occitan, and French, which gives English the alternative spellings of cedille, from French \"cédille\", and the Portuguese form cedilha. An obsolete spelling of cedilla is cerilla.\n[…]\nFrom there, the use of the \"c with a tail\" (its earliest name) spread throughout France, but it was not until the 17th century that its use became truly common.\n[…]\nBefore 1500 – Spanish and Portuguese printers create typefaces for the cedilla; these enter France via Toulouse.\n[…]\n18th century – The cedilla disappears from Spanish; it is used by all printers in France. Nicolas Beauzée proposes its generalization in place of s. Numerous spelling reform attempts follow: some call for abandoning the cedilla, others for generalizing it. However, this diacritic, successfully established by Tory shortly before his death in 1533, has retained essentially the same rules of use down to the present day."
      }
    ]
  },
  {
    "indice": 7,
    "ancora": {
      "nome": "Arroba (símbolo)",
      "descricao": "O símbolo @, usado nos endereços de e-mail, chamado de arroba em português e espanhol"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Antes de virar símbolo do e-mail, a arroba já era uma unidade de peso, ainda usada para gado. Ela equivale a cerca de quantos quilos?",
    "resposta": "Quinze",
    "distratores": [
      "Dez",
      "Vinte e cinco",
      "Cinquenta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Arroba_(unidade)",
      "https://en.wikipedia.org/wiki/Arroba"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Arroba_(unidade)",
        "situacao": "ok",
        "texto": "A palavra Arroba (do árabe الربع; \"ar-rub\", a quarta parte) designa antigas unidades de massa e de volume usadas na Espanha, Portugal e América Latina. Como unidade de massa, a arroba equivale originalmente à quarta parte do quintal, isto é, 25 libras. Porém, esse valor não foi sempre o único a ser utilizado, nem as libras equivaliam entre si.\n[…]\nNo Portugal medieval, a arroba também designava normalmente 1/4 do quintal, mas dividia-se em 32 arráteis, podendo estes ser de 12.5, 13 ou 14 onças, estando também as onças sujeitas a alguma variação. Em Portugal usava-se o símbolo @ para abreviar a unidade arroba\n[…]\nA partir de 1499, com a reforma de D. Manuel, generalizou-se em Portugal um arrátel de 16 onças equivalente a 457,8 g valor que, mais tarde, foi ajustado para 459,0 g. A arroba da época moderna, de 32 destes arráteis, tinha assim 14,688 kg — valor próximo de 14,7 kg. Foi este o sistema disseminado no Brasil e nos restantes territórios do império português ao longo da época moderna.\n[…]\nCom a introdução do Sistema Internacional de Unidades, a arroba perdeu boa parte de sua função, mas ainda não deixou de existir.\n[…]\nModernamente, em Portugal (onde ainda é utilizada para pesar a cortiça, os cereais e as batatas nas vendas a retalho do comércio tradicional, porcos e gado bovino), a medida foi arredondada para 15 kg. No Brasil, também com o valor arredondado (15 kg), a arroba é utilizada para pesagem de bovinos, suínos e, na Bahia, o cacau.\n[…]\nComo medida de volume usada na Espanha, a arroba é utilizada para medir líquidos. Varia também o seu valor, dependendo não só das regiões, mas também do próprio líquido medido. Assim, se o líquido quantificado for azeite, a arroba equivale a 12,563 litros, enquanto, se for vinho, sua equivalência é de 16,133 litros.\n[…]\nUnidades de massa\n[…]\n«Arroba (valores)» (em inglês)"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Arroba",
        "situacao": "ok",
        "texto": "Arroba is a Portuguese, Catalan and Aragonese customary unit of weight, mass or volume. Its symbol is @.\n[…]\nThe word arroba has its origin in Arabic ar-rubʿ  (الربع) or \"quarter,\" specifically the fourth part (of a quintal), which defined the average clementecatalan w a donkey could carry.\n[…]\nThe unit is still used in Brazil by the agricultural sector, mainly in the cotton and cattle business. The modern metric arroba used in these countries in everyday life is defined as 15 kilograms (33 lb).\n[…]\nIn Colombia, Ecuador, and Peru the arroba is equivalent to 12.5 kilograms (28 lb).\n[…]\nIn Bolivia nationally it is equivalent to 30.46 litres (6.70 imp gal; 8.05 US gal). However locally there are many different values, ranging from 11.5 litres (2.5 imp gal; 3.0 US gal) in Inquisivi to 16 litres (3.5 imp gal; 4.2 US gal) in Baures.\n[…]\nIn Ibero-Romance and Occitano-Romance languages, \"arroba\" has continued as the word for the \"@\" symbol used in Internet email addresses and other messaging and collaboration software."
      }
    ]
  },
  {
    "indice": 8,
    "ancora": {
      "nome": "Pindorama",
      "descricao": "Nome de origem tupi tradicionalmente usado para se referir à terra que viria a ser o Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Pindorama, nome de origem tupi muitas vezes usado para se referir ao Brasil, significa o quê?",
    "resposta": "Terra das palmeiras",
    "distratores": [
      "Terra sem males",
      "Terra do sol",
      "Terra dos rios"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pindorama"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pindorama",
        "situacao": "ok",
        "texto": "Pindorama (do tupi: \"pindó-rama\": \"região das palmeiras\") é uma designação para o local dos povos tupis-guaranis, atual região oriental da América do Sul, denominada litoral do Brasil.\n[…]\nOs arqueólogos acreditam que o uso tenha surgido na época das antigas migrações, quando os tupi-guaranis se deslocaram para o litoral brasileiro, atual região oriental da América do Sul. Vários grupos tupis-guaranis habitavam a região até a chegada dos portugueses ao território.\n[…]\nAlém de \"terra livre dos males\", outra etimologia da palavra a define como \"região de palmeiras\".\n[…]\nAtualmente, trata-se do nome pelo qual os povos dos Andes peruanos e dos Pampas se referem ao Brasil. Existem também muitos indígenas e ativistas indígenas brasileiros que chamam de Pindorama o território oficialmente reconhecido como Brasil.\n[…]\nExistem duas hipóteses etimológicas para a palavra \"Pindorama\":\n[…]\nviria do tupi pindó-rama ou pindó-retama, \"terra/lugar/região das palmeiras\";\n[…]\nviria da junção do tupi pin'dob (\"palmeira\") com \"-orama\" (\"espetáculo\"), significando, portanto, \"espetáculo das palmeiras\".\n[…]\nOswald de Andrade, em seu Manifesto Antropófago, fala do \"matriarcado de Pindorama\", aludindo à situação do Brasil antes da chegada dos colonizadores, antes da exploração, quando os indígenas viviam em uma sociedade matriarcal.\n[…]\nHistória pré-cabralina do Brasil\n[…]\nLista de nomes do Brasil"
      }
    ]
  },
  {
    "indice": 9,
    "ancora": {
      "nome": "Carioca",
      "descricao": "Gentílico de quem nasce na cidade do Rio de Janeiro, palavra de origem tupi"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Quem nasce no Rio de Janeiro é chamado de carioca, palavra de origem tupi. Qual é a tradução mais aceita desse nome?",
    "resposta": "Casa de branco",
    "distratores": [
      "Água limpa",
      "Morro alto",
      "Povo do mar"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Carioca"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Carioca",
        "situacao": "ok",
        "texto": "Carioca é o gentílico oficial do município do Rio de Janeiro, capital do estado do Rio de Janeiro, no Brasil, também podendo referir-se, como adjetivo, a tudo que pertence ao município do Rio de Janeiro, como por exemplo aos seus bairros. É também aceito popularmente como gentílico de todo o estado do Rio de Janeiro e ao que se refere a ele, por exemplo em Campeonato Carioca de Futebol, mesmo send\n[…]\nO termo \"carioca\" é de origem tupi e foi adotado como gentílico a partir do nome do Rio Carioca, principal fonte de água potável da cidade por um longo tempo. No entanto,  a história da etimologia da palavra contou com diferentes interpretações.\n[…]\nHistoricamente, a tese mais difundida foi a que a palavra significaria \"casa de homem branco\": kara'iwa (homem branco) + oka (casa), como referência a uma suposta casa de pedra construída próxima à foz do Rio Carioca por Gonçalo Coelho, na segunda expedição portuguesa à Baía de Guanabara, em 1503-1504. Essa tese foi formulada nos anos 1850s pelo historiador Francisco Adolfo de Varnhagen, e segue até hoje bastante citada em livros contemporâneos.\n[…]\nVerte-se por casa dos kariós; composto desta palavra kariós [carijós] e de ók [oca], que significa casa. Tirando os 'os' e acrescentando ók, teremos kariók. Além disso, o padre José de Anchieta, em seu Auto de São Lourenço, lista todas as aldeias tupinambá derrotadas pelos portugueses ao redor da Baía, e cita tal aldeia diretamente como \"Carijo oca\".\n[…]\nAo contrário do que afirma Léry, contudo, o nome do Rio Carioca vem muito provavelmente do nome da Aldeia e não o contrário, uma vez que nomes de águas em tupi sempre terminam com o sufixo -y. Além disso, seria muito improvável que os tupinambás usassem uma referência a homens brancos para nomear tanto a sua aldeia quanto um riacho, que ao que tudo indica existem desde muito antes da chegada dos europeus."
      }
    ]
  },
  {
    "indice": 10,
    "ancora": {
      "nome": "Ônibus",
      "descricao": "Veículo de transporte coletivo de passageiros, cujo nome vem do latim omnibus"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra ônibus veio de uma forma latina pintada em carruagens públicas francesas no século dezenove. O que ela significa?",
    "resposta": "Para todos",
    "distratores": [
      "Carro grande",
      "Muitas rodas",
      "Caminho comum"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bus",
      "https://pt.wikipedia.org/wiki/Ônibus"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bus",
        "situacao": "ok",
        "texto": "A bus (contracted from omnibus, with variants multibus, motorbus, autobus, etc.) is a motor vehicle that carries significantly more passengers than an average car or van, but fewer than the average rail transport. It is most commonly used in public transport, but is also in use for charter purposes, or through private ownership. Although buses typically carry between 30 and 100 passengers, some bu\n[…]\nBefore the development of powered vehicles, urban public transport used horse-drawn omnibuses.\n[…]\nPublic long-distance coach networks are also often used as a low-cost method of travel by students or young people travelling the world. Some companies such as Topdeck Travel were set up specifically to use buses to drive the hippie trail or travel to places such as North Africa.\n[…]\nCampaign buses are often specially decorated for a political campaign or other social awareness information campaign, designed to bring a specific message to different areas, or used to transport campaign personnel to local areas/meetings. Exhibition buses are often sent to public events such as fairs and festivals for purposes such as recruitment campaigns, for example by private companies or the armed forces.\n[…]\nComplex urban planning proposals may be organised into a mobile exhibition bus for the purposes of public consultation.\n[…]\nMost public or private buses and coaches, once they have reached the end of their service with one or more operators, are sent to the wrecking yard for breaking up for scrap and spare parts. Some buses which are not economical to keep running as service buses are often converted for use other than revenue-earning transport. Much like old cars and trucks, buses often pass through a dealership where they can be bought privately or at auction.\n[…]\nCombeau, Yvan (2013). Histoire de Paris. Paris: Presses Universitaires de France. ISBN 978-2-13-060852-3."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Ônibus",
        "situacao": "ok",
        "texto": "Ônibus (português brasileiro) ou autocarro (português europeu), camioneta, machimbombo (no português moçambicano e português angolano), é um veículo motorizado terrestre designado para o transporte de pessoas. Ônibus podem ter a capacidade de carregar até 300 passageiros. O tipo mais comum de ônibus é o ônibus simples ou convencional, usado em grande parte dos centros urbanos para o transporte púb\n[…]\nA designação dos veículos de transporte de passageiros varia de país para país e até mesmo de região para região. Várias das designações têm origem da palavra \"Ónibus / Ômnibus\" (\"para todos\" em latim). Este termo foi usado, desde o século XIX, para designar um tipo de transporte coletivo de passageiros puxado a cavalo, usado nas grandes cidades do mundo, com caraterísticas e funções muito semelhantes aos transportes coletivos atuais.\n[…]\nNo Brasil, os transportes coletivos de passageiros são designados \"ônibus\", termo originado diretamente em \"omnibus\".\n[…]\nO termo ônibus parece vir do local onde os carros faziam o ponto final, diante de uma chapelaria, cujo dono, Omnes, em um jogo de palavras com seu próprio nome, denominou Omnes Omnibus, \"tudo para todos\". O nome pareceu bastante apropriado para o novo transporte coletivo e por associação foi adotado por este. Em outras versões da história, porém, ônibus simplesmente decorre de voiture omnibus (\"carro para todos\").\n[…]\nÉ o tipo mais popular e mais utilizado. Também chamado de ônibus simples, ônibus básico ou ônibus convencional, esse tipo de ônibus possui apenas um andar e uma unidade rígida (ao contrário dos articulados e biarticulados), de dois a quatro eixos. Podem apresentar uma ou mais portas para a entrada de passageiros, e a posição do motor pode variar de frontal, central e traseira. De todos os tipos, é o mais compacto, mais barato de se adquirir e manter.\n[…]\nMicro-ônibus\n[…]\nÔnibus articulado\n[…]\nParada de ônibus\n[…]\nTransporte público"
      }
    ]
  },
  {
    "indice": 11,
    "ancora": {
      "nome": "Trabalho (palavra)",
      "descricao": "Palavra portuguesa para atividade ou ofício, derivada do latim vulgar tripalium"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A palavra trabalho vem do latim tripalium, objeto feito com três paus. O que era um tripalium?",
    "resposta": "Instrumento de tortura",
    "distratores": [
      "Arado de madeira",
      "Banco de oficina",
      "Andaime de obra"
    ],
    "fonte": [
      "https://en.wiktionary.org/wiki/trabalhar",
      "https://pt.wiktionary.org/wiki/trabalho"
    ],
    "trechos": [
      {
        "url": "https://en.wiktionary.org/wiki/trabalhar",
        "situacao": "ok",
        "texto": "trabalhar - Wiktionary, the free dictionary\n[…]\nFrom Old Occitan trebalhar , from Vulgar Latin *tripāliāre ( “ torment ” ) , derived from Late Latin tripālium ( “ torture instrument ” ) .\n[…]\nInherited from Old Galician-Portuguese traballar , from Vulgar Latin *tripāliāre , from Latin tripālium ( “ torture device ” ) + -āre ( verb-forming suffix ) . Compare Galician traballar , Spanish trabajar . By surface analysis , trabalho +‎ -ar .\n[…]\ntrabalhar ( first-person singular present trabalho , first-person singular preterite trabalhei , past participle trabalhado )\n[…]\nEu trabalho num hospital. I work in a hospital.\n[…]\nEstou trabalhando num projeto. I'm working on a project.\n[…]\nConjugation of trabalhar (See Appendix:Portuguese verbs )\n[…]\n“ trabalhar ”, in Dicionário Aulete Digital (in Portuguese), Rio de Janeiro: Lexikon Editora Digital, 2008– 2026\n[…]\n“ trabalhar ”, in Dicionário Priberam da Língua Portuguesa (in Portuguese), Lisbon: Priberam, 2008– 2026\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=trabalhar&oldid=93385599 \""
      },
      {
        "url": "https://pt.wiktionary.org/wiki/trabalho",
        "situacao": "ok",
        "texto": "tra. ba .lho , masculino ( Datação: Século XIII)\n[…]\nNa construção da estrada de ferro de Serrinha à Restinga Seca, empregamos principalmente italianos e poloneses, além de um pequeno grupo de portugueses e espanhóis. O trabalho era feito em empreitadas, contratando o mesmo grupo somente por alguns quilômetros de cada vez, pois nós tínhamos tido experiências ruins com grandes empresas.\n[…]\ntrabalho de sapa : (loc. subst.) trama; conspiração ou ação oculta contra alguém\n[…]\ntrabalho de Sísifo : (loc. subst.) trabalho que nunca se conclui; trabalho procrastinado; trabalho sabotado\n[…]\ntrabalho infantil : (loc. subst.) trabalho que envolve crianças\n[…]\ntrabalho ingrato : (loc. subst.) trabalho árduo pelo qual não se obtém bom proveito\n[…]\ntrabalho livre : (loc. subst.) trabalho realizado por trabalhadores que não são servos nem escravos.\n[…]\nprimeira pessoa do singular do presente do indicativo do verbo trabalhar\n[…]\n\"trabalho\" é uma forma flexionada de trabalhar .\n[…]\n“trabalho” in: Aulete , Francisco Júlio de Caldas . iDicionário Aulete . Lexikon Editora Digital.\n[…]\n“trabalho” in: Trevisan , R. (coord.); Weiszflog , W. (ed.). Michaelis: Moderno Dicionário da Língua Portuguesa . São Paulo: Melhoramentos , 2012 (nova ortografia). ISBN 978-85-06-06953-0\n[…]\n“trabalho” in: Dicionário Priberam da Língua Portuguesa [ em linha ] .\n[…]\n“trabalho” in: Infopédia [ em linha ] . Porto: Porto Editora .\n[…]\n“trabalho” in: Portal da Língua Portuguesa . Instituto de Linguística Teórica e Computacional .\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=trabalho&oldid=3223166 \""
      }
    ]
  },
  {
    "indice": 12,
    "ancora": {
      "nome": "Pau-brasil",
      "descricao": "Árvore da Mata Atlântica, de madeira avermelhada usada como corante, que deu nome ao Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "A árvore que deu nome ao Brasil tinha madeira de um vermelho intenso, usado para tingir tecidos. Essa cor lembrava o quê?",
    "resposta": "Brasa",
    "distratores": [
      "Sangue",
      "Rubi",
      "Pôr do sol"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Pau-brasil",
      "https://en.wikipedia.org/wiki/Paubrasilia"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Pau-brasil",
        "situacao": "ok",
        "texto": "O pau-brasil (atual Paubrasilia echinata (Lam.) Gagnon, H.C.Lima & G.P.Lewis, antiga Caesalpinia echinata Lam.), também chamado arabutã, ibirapiranga, ibirapitá, ibirapitanga, orabutã, pau-de-tinta, pau-pernambuco, pau-de-pernambuco e pau-rosado, é uma árvore leguminosa nativa da Mata Atlântica, no Brasil.\n[…]\nO nome vernáculo \"pau-brasil\", segundo alguns estudiosos, deriva do francês brésil, que deriva do toscano verzino, nome de pelo menos um tipo de madeira utilizada na tinturaria medieval na Itália, a madeira-de-sapão (Biancaea sappan). Verzino, por sua vez, deriva do árabe wars, que designa uma planta tintória do Iêmen. Outra versão aponta que a palavra se origina do português brasa, devido à tonalidade avermelhada ou abrasada da madeira.\n[…]\nQuanto ao nome científico, Paubrasilia é o gênero da árvore. Já echinata significa \"com espinhos\", uma referência ao fato de as vagens do pau-brasil terem acúleos, que são uma especialização da epiderme que se parece com espinhos.\n[…]\nAfirmam alguns historiadores que o corte do pau-brasil para a obtenção de sua madeira e sua resina (extraída para uso como tintura em manufaturas de tecidos de alto luxo) foi a primeira atividade econômica dos colonos portugueses na recém-descoberta Terra de Santa Cruz, no século XVI e que a abundância desta árvore no meio a imensidão das florestas inexploráveis teria conferido à colônia o nome de Brasil.\n[…]\nA resina vermelha era utilizada pela indústria têxtil europeia como uma alternativa aos corantes de origem terrosa e conferia aos tecidos uma cor de qualidade superior. Isto, aliado ao aproveitamento da madeira vermelha na marcenaria, criou uma demanda enorme no mercado , o que forçou uma rápida e devastadora \"caça\" ao pau-brasil nas matas brasileiras.\n[…]\nSímbolos do Brasil\n[…]\nPaubrasilia equinata na Flora do Brasil"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Paubrasilia",
        "situacao": "ok",
        "texto": "Paubrasilia echinata is a species of flowering plant in the legume family, Fabaceae, that is endemic to the Atlantic Forest of Brazil. It is a Brazilian timber tree commonly known as brazilwood (pau-brasil; Tupi: ybyrapytanga) and is the national tree of Brazil. This plant has a dense, orange-red heartwood that takes a high shine, and it is the premier wood used for making bows for stringed instru\n[…]\nThe name pau-brasil was applied to certain species of the genus Caesalpinia in the medieval period, and was given its original scientific name Caesalpinia echinata in 1785 by Jean-Baptiste Lamarck. More recent taxonomic studies have suggested that it merits recognition as a separate genus, and it was thus renamed Paubrasilia echinata in 2016. The Latin specific epithet of echinata refers to hedgehog, from echinus, and describes the thorns which cover all parts of the tree (including the fruits).\n[…]\nBotanically, several tree species are involved, all in the family Fabaceae (the pulse family). The term \"brazilwood\" is most often used to refer to the species Paubrasilia echinata, but it is also applied to other species, such as Biancaea sappan and Haematoxylum brasiletto. The tree is also known by other names: such as ibirapitanga, from Tupi\n[…]\nIn describing bows for string instruments, it is usual to refer to some species other than Paubrasilia echinata as \"brazilwood\"; examples include pink ipê (Handroanthus impetiginosus), massaranduba (Manilkara bidentata) and palo brasil (Haematoxylum brasiletto). The highly prized Paubrasilia echinata is usually called \"Pernambuco wood\" in this particular context.\n[…]\nData related to Paubrasilia at Wikispecies\n[…]\nUSDA Plants Profile: Caesalpinia echinata\n[…]\nFlora Brasiliensis:  Caesalpinia echinata (in Portuguese)\n[…]\nInstituto de Pesquisas e Estudos Florestais: Caesalpinia echinata (in Portuguese)"
      }
    ]
  },
  {
    "indice": 13,
    "ancora": {
      "nome": "Açores",
      "descricao": "Arquipélago português no meio do Oceano Atlântico, região autônoma de Portugal"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O arquipélago dos Açores tem o nome de um animal que os navegadores portugueses pensaram ter visto por lá. Que tipo de animal?",
    "resposta": "Ave de rapina",
    "distratores": [
      "Foca",
      "Tartaruga marinha",
      "Golfinho"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Açores",
      "https://en.wikipedia.org/wiki/Azores"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Açores",
        "situacao": "ok",
        "texto": "Os Açores são um arquipélago de Portugal, composto por nove ilhas situadas no Oceano Atlântico. A Região Autónoma dos Açores é uma das duas regiões autónomas portuguesas com poder político e administrativo, sendo a região dividida nas cidades de Angra do Heroísmo, Ponta Delgada e Horta.\n[…]\nAs regiões autónomas foram consagradas na Constituição Portuguesa de 1976. Tratava-se de um estatuto político-administrativo especial reservado aos arquipélagos dos Açores e da Madeira, devido às suas condições geográficas — e, em consequência, socioeconómicas — especiais. Nos termos da Constituição, a autonomia regional não afetava a integridade da soberania do Estado.\n[…]\nOs Açores são um arquipélago que, embora situado precisamente sobre a Dorsal Média Atlântica, devido à sua proximidade com o continente europeu e à sua integração política na República Portuguesa e na União Europeia é geralmente englobado na Europa.\n[…]\nAs discussões em torno do papel geoestratégico dos Açores e da função do arquipélago como ponto de fronteira entre as esferas de interesse norte-americana e europeia ainda assume papel relevante na discussão política açoriana e na postura da classe política face aos interesses portugueses no Atlântico.\n[…]\nPoliticamente e administrativamente, os Açores constituem, desde 1976, uma região autónoma integrada na República Portuguesa.\n[…]\nOs documentos históricos revelam que os Açores foram povoados sobretudo por portugueses, e as regiões do Algarve, Alentejo e Minho eram destacadas como fornecedoras de colonos. Também foi relatada a presença de povoadores oriundos do arquipélago da Madeira, assim como de indivíduos de origem judaica.\n[…]\nErnesto do Canto (1831–1900) — historiador, bibliófilo e político português que se distinguiu pela organização e publicação do Arquivo dos Açores."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Azores",
        "situacao": "ok",
        "texto": "The Azores, officially the Autonomous Region of the Azores, is an archipelago of Portugal, in the Atlantic Ocean, about 1,400 km (870 miles) west of the Portuguese mainland. Politically and administratively, together with Madeira, it is one of the two autonomous regions of Portugal and a special territory of the European Union. It is the westernmost point and region of Portugal.\n[…]\nThe Portuguese Civil War (1828–1834) had strong repercussions in the Azores. In 1829 in Praia da Vitória, the liberals won over the absolutists, making Terceira Island the main headquarters of the new Portuguese regime and also where the Council of Regency (Conselho de Regência) of Maria II was established. Beginning in 1868, Portugal issued its stamps overprinted with \"AÇORES\" for use in the islands.\n[…]\nNotable sports teams include Santa Clara (Primeira Liga), Lusitânia (Liga Portuguesa de Basquetebol), Fonte do Bastardo (Portuguese Volleyball First Division) and Sporting Clube da Horta (Portuguese Handball Second Division). The Rallye Açores is an international rally race held annually since 1965, which was part of the European Rally Championship and the Intercontinental Rally Challenge. The Azores Senior Open was a golf tournament held in 2008 as part of the European Seniors Tour.\n[…]\nList of islands of Portugal\n[…]\nMadeira, J. (1998). Estudos de neotectónica nas ilhas do Faial, Pico e S. Jorge: uma contribuição para o conhecimento geodinâmico da junção tripla dos Açores [Neotectonic studies on the islands of Faial, Pico and S. Jorge: a contribution to the geodynamic knowledge in the triple junction of the Açores] (in Portuguese). Lisbon: Faculdade de Ciências, Universidade de Lisboa.\n[…]\nFerreira, António de Brum (2005). \"Geodinâmica e perigosidade natural nas ilhas dos Açores\" [Geodynamics and Natural Risks on the Islands of the Azores]. Finisterra (in Portuguese). XL (79): 013–120."
      }
    ]
  },
  {
    "indice": 14,
    "ancora": {
      "nome": "Xeque-mate",
      "descricao": "Lance que encerra a partida de xadrez, quando o rei é atacado sem ter como escapar"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No xadrez, a palavra xeque, do lance xeque-mate, vem do persa. O que ela significa nessa língua?",
    "resposta": "Rei",
    "distratores": [
      "Ataque",
      "Fim",
      "Perigo"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Checkmate",
      "https://pt.wikipedia.org/wiki/Xeque-mate"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Checkmate",
        "situacao": "ok",
        "texto": "Checkmate (often shortened to mate) is any game position in chess and other chess-like games in which a player's king is in check (threatened with capture) and there is no possible escape. Checkmating the opponent wins the game.\n[…]\nOn the other hand, Jeremy Silman includes the checkmate with two bishops but not the bishop plus knight checkmate because he has had it only once and his friend John Watson has never had it. Silman says: \"... mastering it would take a significant chunk of time. Should the chess hopeful really spend many of his precious hours he's put aside for chess study learning an endgame he will achieve (at most) only once or twice in his lifetime?\"\n[…]\nA back-rank checkmate is a checkmate delivered by a rook or queen along a back rank (that is, the row on which the pieces [not pawns] stand at the start of the game) in which the mated king is unable to move up the board because the king is blocked by friendly pieces (usually pawns) on the second rank. An example of a back-rank checkmate is shown in the diagram. It is also known as the corridor mate.\n[…]\nThe scholar's mate (also known as the four-move checkmate) is the checkmate achieved by the moves:\n[…]\nThe moves might be played in a different order or in slight variation, but the basic idea is the same: the queen and bishop combine in a simple mating attack on f7 (or f2 if Black is performing the mate). There are also other ways to checkmate in four moves.\n[…]\nThe fool's mate, also known as the two-move checkmate, is the quickest possible checkmate. A prime example consists of the moves:\n[…]\nA smothered mate is a checkmate delivered by a knight in which the mated king is unable to move because it is surrounded (or smothered) by its own pieces."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Xeque-mate",
        "situacao": "ok",
        "texto": "Xeque-mate (em persa شاه مات‎, significando rei se render), ou simplesmente mate, é uma expressão usada no enxadrismo para designar o lance que põe fim à partida, quando o Rei atacado por uma ou mais peças adversárias não pode movimentar-se para outra casa, tomar a peça que o ameaça ou bloquear o ataque com outra peça.\n[…]\nA maioria dos termos de xadrez, usados pelos europeus, tem origem persa. Shah, que quer dizer rei, deu origem a check e chess em inglês, echec e echecs em francês, scacco em italiano e xaque em espanhol. Shâh-mât significa o rei está morto.\n[…]\nA expressão Shâh-mât não é usada quando o adversário é seu soberano, quando a expressão usada é Shâh-em!, ou Ó meu rei! Houve um rei da Pérsia que proibiu o jogo de xadrez, por causa da expressão shâh-mât. Seu sucessor voltou a permitir o jogo, mas ordenou que a expressão usada fosse Nefs-mât, ou a pessoa está morta.\n[…]\nOs mates básicos são aqueles em que um lado (aqui por convenção, as pretas) tem apenas o Rei e o outro lado tem um conjunto mínimo de peças para dar o mate.\n[…]\nPara a execução desse tipo de mate, o Rei precisa apoiar-se na dama, não para forçar o movimento do Rei adversário para uma das bordas, mas para efetuar o mate.\n[…]\nPara a execução desse tipo de mate, é necessário bloquear o avanço do Rei adversário para o centro do tabuleiro, usando o Rei. Para então dar xeque-mate com a Torre.\n[…]\nPara executar esse mate, deve-se forçar o Rei adversário a mover-se para um dos cantos do tabuleiro, e o mate será efetuado com o Bispo respectivo a casa (clara ou escura) que ocupa o canto para o qual o Rei adversário irá se situar.\n[…]\nEsse mate é executado em casa angular da mesma cor do rei adversário ou em uma das duas casas adjacentes.\n[…]\nMate Pastor\n[…]\nXeque\n[…]\nLeis do Xadrez"
      }
    ]
  },
  {
    "indice": 15,
    "ancora": {
      "nome": "Algarve",
      "descricao": "Região mais ao sul de Portugal continental, conhecida por suas praias"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "O nome Algarve, região do sul de Portugal famosa pelas praias, vem do árabe. O que ele significa?",
    "resposta": "O oeste",
    "distratores": [
      "O sul",
      "O jardim",
      "A praia"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Algarve",
      "https://en.wikipedia.org/wiki/Algarve"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Algarve",
        "situacao": "ok",
        "texto": "A Região do Algarve ou simplesmente o Algarve é uma região e sub-região portuguesa situada no sul do país. Está composta pela mesma sub-região, 16 municípios e 67 freguesias, sendo a cidade de Faro a cidade administrativa.Tem uma extensão total de 4 997 km2, 492 747 habitantes em 2024 e uma densidade populacional de 96 habitantes por km2. Limitada a norte com a região do Alentejo, a leste com a re\n[…]\nO topónimo Algarve (pronúncia [aɫˈɡaɾv(ɨ)) tem origem na expressão árabe الغرب (al-Gharb) que significa \"o oeste\", \"o ocidente\". De facto, a expressão completa era Gharb al-Andalus (Gharb al-Ândalus) nome atribuído ao actual Algarve e ao Baixo Alentejo durante o domínio muçulmano, significando \"Andaluz Ocidental\", pois era a parte ocidental da Andaluzia mourisca.\n[…]\nO Algarve confina a norte com a região do Alentejo (sub-regiões do Alentejo Litoral e Baixo Alentejo), a sul e oeste com o oceano Atlântico, e a leste o Rio Guadiana marca a fronteira com Espanha. O ponto mais alto situa-se na serra de Monchique, com uma altitude máxima de 902 m (Pico da Foia).\n[…]\nA Serra de Monchique localiza-se na zona oeste do Algarve, onde se situa o ponto mais alto da região — a Fóia — que está a 902 m de altitude. Este é também um dos pontos mais proeminentes de Portugal. O cume-pai chama-se Picota e está a 774 m acima do nível do mar.\n[…]\nO Algarve dispõe de praias e paisagens naturais que, aliadas ao clima temperado mediterrânico, tornam-na na mais turística região de Portugal. Hoje em dia, as ligações rodoviárias fazem com que qualquer ponto do Algarve esteja a pouco mais de uma hora de distância do aeroporto. Actualmente, o aeroporto de Faro é o terceiro mais movimentado de Portugal, tendo recebido mais de 8,6 milhões de passageiros no ano de 2018.\n[…]\nChaminé algarvia\n[…]\n«Região de Turismo do Algarve»\n[…]\n«Sistema de Informação para o Património Arquitetónico - Registo de Paisagem do Litoral do Centro Algarvio»"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Algarve",
        "situacao": "ok",
        "texto": "The Algarve (UK: , US: , European Portuguese: [alˈɣaɾvɨ] ) is the southernmost NUTS II region of continental Portugal. It has an area of 4,997 km2 (1,929 sq mi) with 467,495 permanent inhabitants and incorporates 16 municipalities (concelhos or municípios in Portuguese).\n[…]\nPortugal is the largest producer of carob pods and the region of the Algarve is by far the greatest producer of this product.\n[…]\nCycling is a popular sport in Portugal and the region of Algarve has long-established, noteworthy professional cycling teams which compete in the Volta a Portugal and other major cycling events. The Volta ao Algarve is the oldest and most popular road bicycle racing competition in the Algarve region. The most successful of those professional cycling teams of the Algarve in the UCI Continental Tour are Louletano Desportos Clube and Clube de Ciclismo de Tavira.\n[…]\nDue to the strong Nortada winds blowing through the South coast of Portugal, the Algarve is a summer holiday destination for windsports. Sailing, windsurfing and especially kitesurfing have a large and growing community in the Algarve. The nature of the Algarve coastline offers a mix of flat water lagoons such as those of the Ria Formosa Nature Park, or the waves of Sagres and the South-west coast.\n[…]\nManuel Mendes, a businessman originally from the Algarve who is the father of Shawn Mendes, a Canadian singer-songwriter of Portuguese descent.\n[…]\nRemexido, a civil servant and wealthy land tenant who became a guerrilla leader in the Algarve, defending the rights of king Miguel to the Portuguese throne and the antiliberal status quo of the absolute monarchy\n[…]\nSara Martins (Portuguese-born French actress of Cape Verdean descent originally from the Algarve)\n[…]\nAlgarve VR\n[…]\nJeep Safari / Jeep Tour provider in Algarve"
      }
    ]
  },
  {
    "indice": 16,
    "ancora": {
      "nome": "Tangerina",
      "descricao": "Fruta cítrica de casca fina e gomos fáceis de soltar, que recebe nomes diferentes em cada região do Brasil"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "No Rio Grande do Sul, como se chama a fruta que os paulistas costumam chamar de mexerica?",
    "resposta": "Bergamota",
    "distratores": [
      "Mimosa",
      "Laranja-cravo",
      "Mandarina"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Tangerina"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Tangerina",
        "situacao": "ok",
        "texto": "A tangerina (nome científico: Citrus reticulata), também conhecida como laranja-mimosa, mexerica, mandarina, fuxiqueira, poncã (ou ponkan), manjerica, laranja-cravo, mimosa e bergamota, é uma fruta cítrica de cor alaranjada e sabor adocicado. Parece ser uma antiga espécie selvagem, nativa da Ásia (Índia, China e países vizinhos de climas subtropical e tropical úmido).\n[…]\n\"Tangerina\" vem de \"laranja tangerina\", isto é, \"laranja de Tânger\". \"Bergamota\" vem do turco beg armudi, \"pera do príncipe\", através do italiano bergamotta ou do francês bergamotte. \"Mandarina\" vem do castelhano mandarina. \"Mexerica\" possui origem no verbo mexericar, que, por sua vez, provêm de mexer. \"Poncã\" é derivação da palavra japonesa ponkan.\n[…]\n\"Bergamota\" ou \"vergamota\" são as denominações dadas à tangerina na Região Sul do Brasil, principalmente no Rio Grande do Sul.\n[…]\nAs variedades mais cultivadas de tangerina são:\n[…]\nLaranja-cravo (ou tangerina-cravo, Laranja-crava)\n[…]\nMexerica\n[…]\nA tangerina é considerada grande fonte de magnésio. O ser humano precisa de magnésio, apresentando maior concentração desse mineral nos ossos e músculos. Ele tem papel importante na síntese das proteínas, na contratilidade muscular e na excitabilidade dos nervos.\n[…]\nPopularmente, a tangerina é conhecida pelo seu efeito diurético, digestivo e aumento na eficiência física. Não existem evidências científicas que indiquem seu uso na hipertensão arterial ou na prevenção da arterioesclerose. É laxativa, pois apresenta grande quantidade de fibras, devendo ser ingerida com o bagaço para melhorar o funcionamento do intestino.\n[…]\nEm 2018, o Brasil produziu quase 1 milhão de toneladas de tangerina, sendo o 6º maior produtor do mundo. Os estados que mais produzem são: São Paulo (331 mil toneladas), Minas Gerais (210 mil toneladas), Rio Grande do Sul (148 mil toneladas) e Paraná (143 mil toneladas).\n[…]\n«Vitaminas e Cia: Tangerina»"
      }
    ]
  },
  {
    "indice": 17,
    "ancora": {
      "nome": "Arigatō",
      "descricao": "Palavra japonesa usada para agradecer, equivalente a obrigado"
    },
    "angulo": "nome",
    "tipo": "multipla",
    "pergunta": "Muita gente acredita que o arigatô japonês vem do nosso obrigado, levado por missionários portugueses. Qual é a verdadeira origem dessa palavra?",
    "resposta": "Do próprio japonês",
    "distratores": [
      "Do português",
      "Do espanhol",
      "Do holandês"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/List_of_Japanese_words_of_Portuguese_origin"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Japanese_words_of_Portuguese_origin",
        "situacao": "ok",
        "texto": "Many Japanese words of Portuguese origin entered the Japanese language when Portuguese Jesuit priests and traders introduced Christian ideas, Western science, medicine, technology and new products to the Japanese during the Muromachi period (15th and 16th centuries).\n[…]\nMany of the words which were introduced and entered the Japanese language from Portuguese and Dutch are written in kanji or hiragana, rather than katakana, which is the more common way to write loanwords in Japanese in modern times. Kanji versions of the words are ateji, characters that are \"fitted\" or \"applied\" to the words by the Japanese, based on either the pronunciation or the meaning of the word.\n[…]\nIt is often suggested that the Japanese word arigatō derives from the Portuguese obrigado, both of which mean \"Thank you\", but evidence indicates arigatō has a purely Japanese origin, so these two words are false cognates.\n[…]\nArigatō is an \"u\"-sound change of arigataku. In turn, arigataku is the adverbial form of an adjective arigatai, from older arigatashi, itself a compound of ari + katashi. Written records of arigatashi exist dating back to the Man'yōshū compiled in the 8th century AD, well before Japanese contact with the Portuguese in the 16th century.\n[…]\nAri is a conjugation of verb aru meaning \"to be\", and katashi is an adjective meaning \"difficult\", so arigatashi literally means \"difficult to exist\", hence \"rare\" and thus \"precious\", with usage shifting to indicate gratitude for receiving an outstanding kindness. The phrase to express such gratitude is arigatō gozaimasu, or arigatō for short.\n[…]\nsci.lang.japan FAQ Japanese words of Portuguese origin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Palavras_japonesas_de_origem_portuguesa",
        "situacao": "ok",
        "texto": "A existência de numerosas palavras japonesas de origem portuguesa resulta da chegada ao Japão dos portugueses em 1542-1543, sendo os primeiros europeus a aportar e a estabelecer um fluxo contínuo e direto de comércio entre o Japão e a Europa.\n[…]\nForam os portugueses os primeiros a traduzir o japonês para uma língua ocidental, no dicionário Nippo Jisho (日葡辞書, Nippojisho) ou \"Vocabvlário da Lingoa de Iapam\", compilado por missionários jesuítas como João Rodrigues e publicado em Nagasaki em 1603. Este dicionário de japonês-português explicava 32 000 palavras em japonês traduzidas para português.\n[…]\nO número de palavras portuguesas no japonês é, segundo Fernando Venâncio Peixoto da Fonseca, mais de quatrocentas; em Tai Whan Kim, na sua obra The portuguese element in Japanese: a critical çurvey with glossary, as palavras japonesas de origem portuguesa que encontramos são centenas. A língua portuguesa era aprendida nos templos budistas japoneses, segundo João Barros, no século XVI e XVII. No auge da influência portuguesa no Japão, eram utilizadas cerca de 4000 palavras de origem portuguesa.\n[…]\nArigatô\n[…]\nAo contrário da crença popular de alguns, \"arigato\" (有難う) não tem origem na expressão portuguesa obrigado. Na realidade, \"arigato\" é a forma moderna do \"arigatashi\" do japonês arcaico que consiste da aglutinação de \"Ari\" do verbo \"Aru\" (ser, estar, existir) e \"Katashi\" um adjetivo que significa dificuldade. A expressão tem origem da forma como os budistas louvavam duas divindades, e agradeciam pelos ensinamentos budistas.\n[…]\nOs japoneses cristianizados pelos Jesuítas também passaram a consumir alimentos fritos durante as Têmporas e, assim, a palavra \"Têmpora\" passou a ser associada no Japão aos empanados de legumes.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 18,
    "ancora": {
      "nome": "Algarismo",
      "descricao": "Sinal gráfico usado para representar números, palavra derivada do nome de um matemático persa"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As palavras algarismo e algoritmo vêm do nome do mesmo sábio medieval. Quem foi ele?",
    "resposta": "Al-Khwarizmi",
    "distratores": [
      "Avicena",
      "Al-Biruni",
      "Omar Khayyam"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi",
      "https://pt.wikipedia.org/wiki/Algarismo"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi",
        "situacao": "ok",
        "texto": "Muhammad ibn Musa al-Khwarizmi, or simply al-Khwarizmi (c. 780 – c. 850) was a mathematician active during the Islamic Golden Age, who produced Arabic-language works in mathematics, astronomy, and geography. Around 820, he worked at the House of Wisdom in Baghdad, the contemporary capital city of the Abbasid Caliphate. One of the most prominent scholars of the period, his works were widely influen\n[…]\nAs part of 12th century wave of Arabic science flowing into Europe via translations, these texts proved to be revolutionary in Europe. Al-Khwarizmi's Latinized name, Algorismus, turned into the name of method used for computations, and survives in the term \"algorithm\". It gradually replaced the previous abacus-based methods used in Europe.\n[…]\nDixit Algorizmi ('Thus spake Al-Khwarizmi') is the starting phrase of a manuscript in the University of Cambridge library, which is generally referred to by its 1857 title Algoritmi de Numero Indorum. It is attributed to the Adelard of Bath, who had translated the astronomical tables in 1126. It is perhaps the closest to Al-Khwarizmi's own writings.\n[…]\nAl-Khwarizmi's work on arithmetic was responsible for introducing the Arabic numerals, based on the Hindu–Arabic numeral system developed in Indian mathematics, to the Western world. The term \"algorithm\" is derived from the algorism, the technique of performing arithmetic with Hindu-Arabic numerals developed by al-Khwārizmī. Both \"algorithm\" and \"algorism\" are derived from the Latinized forms of al-Khwārizmī's name, Algoritmi and Algorismi, respectively.\n[…]\nHe \"depicted the Atlantic and Indian Oceans as open bodies of water, not land-locked seas as Ptolemy had done.\" Al-Khwārizmī's prime meridian at the Fortunate Isles was thus around 10° east of the line used by Marinus and Ptolemy. Most medieval Muslim gazetteers continued to use al-Khwārizmī's prime meridian."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Algarismo",
        "situacao": "ok",
        "texto": "Um algarismo ou dígito, é um tipo de representação (um símbolo numérico, como \"2\" ou \"5\") usado em combinações (como \"25\") para representar números (como o número 25) em sistemas de numeração posicionais. O nome \"dígito\" vem do facto de os 10 dígitos (do latim digitem , \"dedo\") das mãos corresponderem aos 10 símbolos do sistema de numeração comum de base 10, isto é, o decimal (digestivo do latim a\n[…]\nA palavra \"algarismo\" tem sua origem no nome do famoso matemático Al-Khwarizmi.\n[…]\nCada um dos elementos de um numeral é um algarismo ou dígito:\n[…]\nNumeral com 10 algarismos: 1.234.567.890\n[…]\nA palavra numeral, quando substantivo, designa os símbolos que representam números. Os números são as realidades abstractas designadas pelos numerais. Por exemplo, o número 2 é representado pelos numerais \"2\" (em notação decimal), \"dois\", \"10\" (em notação binária), etc.\n[…]\nAl-Khwarizmi\n[…]\nAlgarismos indo-arábicos"
      }
    ]
  },
  {
    "indice": 19,
    "ancora": {
      "nome": "Biquíni",
      "descricao": "Traje de banho feminino de duas peças, lançado na França em 1946"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O biquíni, lançado em 1946, ganhou o nome de um atol do Pacífico que estava nas notícias da época. Por quê?",
    "resposta": "Testes de bombas atômicas",
    "distratores": [
      "Naufrágios de navios",
      "Praias de nudismo",
      "Concursos de beleza"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Bikini",
      "https://pt.wikipedia.org/wiki/Biquíni"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Bikini",
        "situacao": "ok",
        "texto": "A bikini is a women's two-piece swimsuit featuring a top piece covering the breasts, and a bottom piece covering the pelvis (usually excluding the navel) and some or all of the buttocks. The extent covered by both pieces can vary, from those that offer full coverage of the breasts, pelvis, and buttocks, to more revealing designs with thong or G-string bottoms that cover only the mons pubis and int\n[…]\nFrench automotive engineer Louis Réard then introduced a design he named the \"Bikini\" in Paris on July 5, 1946. Réard adopted the name from the Bikini Atoll in the Pacific Ocean, which was the colonial name the Germans gave to the atoll, borrowed from the Marshallese name for the island, Pikinni. Four days earlier, on 1 July 1946, the United States had initiated its first peacetime nuclear weapons test at Bikini Atoll as part of Operation Crossroads.\n[…]\nVarious motivations have been attributed to his choosing of the name, including the idea that he hoped it would create \"explosive commercial and cultural reaction\" similar to the explosion at Bikini Atoll, that it was meant to be associated with the \"exotic allure of the tropical Pacific\", from the \"comparison of the effects of a scantily clad woman to the atomic bomb,\" and the idea that Reard's design had out-done Heim's design and \"split the atome\".\n[…]\nIt has been frequently cited as a major example of a \"psychological link between atomic destruction and sexuality\" in popular culture, which includes the stenciling of Rita Hayworth onto one of the bombs detonated at Crossroads, and its persistence in language has been argued as having \"trivialized and downplayed the reality of nuclear testing,\" given the contamination done by especially later US thermonuclear tests at Bikini and other Marshallese atolls.\n[…]\nBikini in popular culture\n[…]\nMetropolitan Museum of Art exhibition—The Bikini\n[…]\nTwo-Piece Be With You: LIFE Celebrates the Bikini"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Biquíni",
        "situacao": "ok",
        "texto": "O biquíni ou bikini é um conjunto de duas peças, derivadas do maiô, de tamanhos reduzidos, que cobrem o busto e a parte inferior do tronco. Seu nome deriva do atol de Bikini, um atol do Pacífico, usado para testes com bombas nucleares e em 5 de julho de 1946 ocorreu o seu lançamento, numa piscina de Paris. Assim, pretendia-se propor que a mulher de biquíni provocava, na época, o efeito de uma \"bom\n[…]\nA criação do biquíni, contudo, é objeto de disputa. Ainda em 1946, Jacques Heim apresentou o modelo “Atome”, anunciado como “o menor maiô do mundo”. Semanas depois, Louis Réard lançou o “bikini”, promovido como “menor que o menor maiô do mundo”, o que lhe garantiu maior fama.\n[…]\nNo início, as mulheres não estavam preparadas para usar peças de vestuário tão reduzidas, que mostravam o umbigo. Os biquínis foram, portanto, proibidos em vários países, incluindo França. No entanto, atrizes como Ava Gardner, Ursula Andress e Brigitte Bardot foram contra todos os preconceitos da época e aderiram ao biquíni, como instrumento de sedução em filmes e em fotos.\n[…]\nO primeiro biquíni moderno foi desfilado por Micheline Bernardini, então uma jovem dançarina do Cassino de Paris. A peça, confeccionada com cerca de 76 cm de tecido de algodão estampado com motivos que simulavam notícias de jornal, distinguia-se por suas dimensões reduzidas em relação aos trajes de banho da época. Sua escala era frequentemente destacada pela comparação com uma caixa de fósforos, utilizada como elemento cênico na apresentação.\n[…]\nO nome “biquíni” faz referência ao Atol de Bikini, local onde os Estados Unidos iniciaram testes nucleares poucos dias antes do lançamento da peça. A escolha do nome buscava sugerir o impacto e o caráter disruptivo do novo traje, em analogia ao contexto geopolítico do período.\n[…]\nDeutsche Welle - 1946: O primeiro biquíni"
      }
    ]
  },
  {
    "indice": 20,
    "ancora": {
      "nome": "Mirandês",
      "descricao": "Língua asturo-leonesa falada no nordeste de Portugal, reconhecida oficialmente em 1999"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O mirandês, língua reconhecida no nordeste de Portugal, pertence ao mesmo ramo de qual língua falada na Espanha?",
    "resposta": "Asturiano",
    "distratores": [
      "Catalão",
      "Basco",
      "Aragonês"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_mirandesa",
      "https://en.wikipedia.org/wiki/Mirandese_language"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_mirandesa",
        "situacao": "ok",
        "texto": "A língua mirandesa (lhéngua/léngua mirandesa, mirandés) é a variedade asturo-leonesa falada no nordeste de Portugal, sobretudo na Terra de Miranda (concelho de Miranda do Douro e freguesias de Angueira e Vilar Seco, em Vimioso). Foi oficialmente reconhecida em 1999 pela Assembleia da República; o ensino foi regulamentado no mesmo ano.\n[…]\nOutro factor para a preservação da língua é a proximidade e a acessibilidade a Espanha, tendo assim um comércio virado para o turismo espanhol, uma atividade crucial na cidade de Miranda do Douro. Essa cidade tem uma grande vertente comercial destinada aos espanhóis que outrora faziam parte do Reino de Leão, que muitas vezes ainda falam o asturiano, língua de origem do mirandês.\n[…]\nIsso terá feito com que o mirandês chegasse aos nossos dias quase intacto, a acessibilidade e o contacto constante a uma Espanha que fala, essencialmente, o asturiano e um isolamento face ao português.\n[…]\nSegundo os entrevistados, não falam o mirandês quando estão em situações formais, como por exemplo, na relação professor-aluno (como é o caso do entrevistado) é, de uma forma geral, a língua portuguesa que prevalece. Há também alguns complexos com a língua, reservando-a a contextos mais familiares, do quotidiano ou mesmo contextos de extrema intimidade. Todos esses fatores levam a língua a uma situação de diglossia.\n[…]\nCaracterísticas comuns ao português, ao galego e ao asturo-leonês ocidental (origem linguística da língua mirandesa):\n[…]\npalatização da consoante inicial l: língua = lhéngua / léngua (sendinês);\n[…]\nSegue-se um texto amostra em língua mirandesa publicado no jornal Público por Amadeu Ferreira, a 24 de julho de 2007. Para comparação, apresentam-se as traduções do texto para leonês, asturiano, português, galego e castelhano.\n[…]\nTerra de Miranda\n[…]\no artigo Lhéngua mirandesa na Biquipédia mirandesa"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Mirandese_language",
        "situacao": "ok",
        "texto": "Mirandese (mirandés [miɾãˈdes̺, -ɾãŋ-] ) is an Asturleonese language or variety that is sparsely spoken in a small area of northeastern Portugal in eastern Tierra de Miranda, an ethnocultural region comprising the area around the municipalities of Miranda de l Douro, Mogadouro and Bumioso. It is extinct in Mogadouro and present in Bumioso only in some eastern villages, like Angueira.\n[…]\nAnother difference is that Mirandese and Leonese remain very conservative, while Asturian has undergone a greater amount of change.\n[…]\nMany people defended basing Mirandese’s orthography on other Asturleonese varieties (notably Asturian, given its richer literary history), with the usage of ⟨ñ⟩ and ⟨ll⟩ instead of the Portuguese ⟨nh⟩ and ⟨lh⟩ for [ɲ] and [ʎ] respectively, or the usage of ⟨u⟩ instead of ⟨o⟩ for word-final /u/, for example. While others defended basing it on Portuguese’s orthography to aid the older population who was only literate in Portuguese and not have them learn a new set of orthographical rules.\n[…]\nMirandese was formerly spoken in the general area of the district of Bragança (Bergáncia in Mirandese), that speaks the Transmontano dialect of Portuguese. Although Mirandese has been lost in this region, it left some words and phonetic influences behind.\n[…]\nMirandese people\n[…]\nAsturian language\n[…]\nFerreira, Manuela Barros; Raposo, Domingos, eds. (1999). Convenção Ortográfica da Língua Mirandesa [Orthographic Convention for Mirandese Language] (PDF) (in Portuguese). Miranda do Douro and Lisboa: Câmara Municipal de Miranda do Douro and Centro de Linguística da Universidade de Lisboa. Archived from the original (PDF) on 29 June 2003.\n[…]\nExcerpt of The Lusiads in Mirandese\n[…]\n(in Portuguese) Lei n. 7/99 dre.pt – Legislation which officially recognizes Mirandese as a language of Portugal\n[…]\nSeth Kugel, \"In Portugal, Mirandese spoken here—and only here\", The New York Times, 17 January 2012"
      }
    ]
  },
  {
    "indice": 21,
    "ancora": {
      "nome": "Rio Maracanã",
      "descricao": "Rio da Zona Norte do Rio de Janeiro que deu nome ao bairro e ao estádio do Maracanã"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O estádio do Maracanã herdou o nome de um rio carioca, que por sua vez tem nome tupi de qual tipo de animal?",
    "resposta": "Uma ave",
    "distratores": [
      "Um peixe",
      "Um macaco",
      "Um sapo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_Maracanã",
      "https://pt.wikipedia.org/wiki/Estádio_do_Maracanã"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_Maracanã",
        "situacao": "ok",
        "texto": "Rio Maracanã é um rio da cidade brasileira do Rio de Janeiro, que fica localizado entre os bairros da Tijuca, Alto da Boa Vista e Santo Cristo.\n[…]\nO nome advém do tupi guarani, maraka’nã, que significa papagaio. Recebeu esse nome na época da chegada dos portugueses, pois seus arredores foram habitados por várias espécies dessas aves.\n[…]\nO rio Maracanã tem seu traçado contido por calha, para reduzir as enchentes em dias chuvosos. Devido a sinuosidade do rio, em muitos de seus trechos há obras de correção para melhorar a sua vazão.\n[…]\nBairro Maracanã"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Estádio_do_Maracanã",
        "situacao": "ok",
        "texto": "Estádio Jornalista Mário Filho, apelidado como Maracanã, ou carinhosamente como Maraca, é um estádio de futebol localizado no bairro de nome homônimo, na Zona Norte da cidade do Rio de Janeiro, capital do estado homônimo, construído pela prefeitura da cidade do Rio de Janeiro, então Distrito Federal, inaugurado em 1950, inicialmente com o nome de Estádio Municipal, para ser utilizado na Copa do Mu\n[…]\nO Flamengo sagrou-se o primeiro tricampeão carioca após a construção do Maracanã, ao vencer os campeonatos de 1953, 1954 e 1955. Em 1954, a Seleção Brasileira voltou a jogar no estádio, o que não fazia desde a final de 1950. A partida, contra o Chile, foi válida pelas Eliminatórias da Copa do Mundo de 1954 e terminou com uma vitória brasileira por 1 a 0. Foi a primeira vez que o Brasil atuou no Maracanã com a camisa amarela ao invés da branca utilizada em 1950.\n[…]\nPorém, o recorde de público pagante oficial da história do Maracanã (entre seleções nacionais) é de 183 341 pagantes (195 513 presentes), registrado em 31 de agosto de 1969, na partida válida pelas Eliminatórias da Copa do Mundo de 1970, disputado entre a Brasil e a Paraguai, cujo resultado final foi de 1 a 0 para os brasileiros, com a final do Campeonato Carioca de 1969, vencida pelo Fluminense por 3 a 2 contra o Flamengo, tendo levado mais de 171 mil pagantes ao grande estádio.\n[…]\nNo fim de 2009, o Flamengo é campeão brasileiro e em 2010 o Botafogo é campeão carioca ao vencer o Flamengo por 2 a 1 no estádio. O Maracanã em seu formato antigo estava em seus últimos meses, o fluminense fez parte da campanha do título brasileiro de 2010 até o estádio ser fechado para as obras da copa em setembro de 2010.\n[…]\nAs maiores goleadas da história do Maracanã foram Flamengo 12 a 2 São Cristóvão, pelo Campeonato Carioca de 1956,[carece de fontes]? e Espanha 10 a 0 Taiti, pela Copa das Confederações de 2013."
      }
    ]
  },
  {
    "indice": 22,
    "ancora": {
      "nome": "Castella",
      "descricao": "Bolo esponjoso japonês, chamado kasutera, levado ao Japão por mercadores portugueses"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O kasutera, bolo levado ao Japão pelos portugueses no século dezesseis, tem nome derivado de qual região da Península Ibérica?",
    "resposta": "Castela",
    "distratores": [
      "Galiza",
      "Andaluzia",
      "Algarve"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Castella"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Castella",
        "situacao": "ok",
        "texto": "Castella (カステラ, kasutera; pronounced [kasɯ̥teɾa]; ) is a type of Japanese sponge cake and is known for its sweet, moist brioche-style flavour and texture. It is based on cakes introduced to Japan by Portuguese merchants in the 16th century. It was then popularized in the city of Nagasaki, where it is considered a specialty. Despite its foreign origins, it is considered a kind of wagashi, or tradit\n[…]\nThe word \"castella\" is derived from the Portuguese Bolo de Castela, meaning \"cake from Castile\". Its closest relative is pão-de-ló, a Portuguese cake. Pão-de-ló can be in turned derived from the French Pain de lof or Gâteau de Savoie.\n[…]\nCastella cakes could be stored for a long time, and so were useful for the sailors who were out on the sea for months. In the Edo period, in part due to the cost of sugar, castella was an expensive dessert to make despite the ingredients sold by the Portuguese. When the Emperor of Japan's envoy was invited, the Tokugawa shogunate presented them with castella cakes. Over the years, the taste changed to suit Japanese palates.\n[…]\nCastella mix is used for the pancakes that are sandwiched together with sweet adzuki bean paste in the confection known as dorayaki.\n[…]\nThe presence of castella highlights its cultural significance in Japan and its association with moments of reflection in the narrative, emphasizing the impact of different life paths on his experiences.\n[…]\nIn 'What you are looking for is in the library' by Michiko Aoyama, Tomoka, strives to make the castella cake she read about in a favourite childhood book called Guri & Gura.\n[…]\nFounded in 1624: Castella Honke Fukusaya (Nagasaki City, Nagasaki Prefecture)\n[…]\nFounded in 1900 (Meiji 33): Bunmeidō (Nagasaki City, Nagasaki Prefecture) Known for the phrase \"castella first, telephone number second\" and in the Kanto region, commercials of bear puppets dancing can-can dances.\n[…]\nJapanese words of Portuguese origin"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Kasutera",
        "situacao": "ok",
        "texto": "O castella ou kasutera (カステラ) é um bolo japonês feito à base de açúcar, farinha, ovos e xarope de milho, muito apreciado em festividades e como comida de rua. De origem na gastronomia portuguesa, é semelhante ao pão-de-ló de Portugal, e é hoje uma especialidade tradicional de Nagasaki.\n[…]\nO bolo foi trazido inicialmente por mercadores portugueses no século XVI. O seu nome procederá da língua portuguesa pão de Castela, existindo tipos parecidos de bolos chamados de forma similar, como o francês pain d'Espagne, o italiano pan di Spagna e o grego pantespani, sendo que o reino de Castela abarcava o centro de Espanha. Outra teoria refere que o nome pode ter origem no facto de o bolo ser preparado com claras batidas \"em castelo\".\n[…]\nO castella vende-se geralmente em caixas grandes, com cada bolo com aproximadamente 27 cm de largura. O seu parente mais próximo é o referido Pão-de-ló português.\n[…]\nE Nagasaki foi o porto de mar japonês em que mais se desenvolveram essas trocas comerciais e de saber. Os portugueses introduziram aí muitos artigos até então desconhecidos: mosquetes, botões, sabão, tabaco, abóboras e doces, como os confeitos e este castella.\n[…]\nNa era Edo, devido em parte ao preço elevado do açúcar no Japão, era um luxo. Quando o embaixador do Imperador do Japão era convidado, o shogunato Tokugawa obsequiava-o com o castella.\n[…]\nO castella de estilo taiwanês é geralmente mais parecida com um suflê do que a variedade japonesa com um centro semelhante a um creme. Uma especialidade de Tamsui é um simples bolo castela em forma de almofada. O castella de estilo taiwanês foi introduzido no Japão.\n[…]\n«castella.co.jp»  (japonês)",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 23,
    "ancora": {
      "nome": "Língua quimbunda",
      "descricao": "Língua banta falada no norte de Angola, que deixou muitas palavras no português do Brasil"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O que as palavras caçula, moleque e quitanda têm em comum na sua origem?",
    "resposta": "Vêm do quimbundo",
    "distratores": [
      "Vêm do tupi",
      "Vêm do árabe",
      "Vêm do iorubá"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Língua_quimbunda",
      "https://en.wikipedia.org/wiki/Kimbundu_language"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Língua_quimbunda",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Kimbundu_language",
        "situacao": "ok",
        "texto": "Kimbundu, a Bantu language that has already been called as Mbundu or North Mbundu (to difer it from Umbundu, sometimes it is called South Mbundu), is the second-most-spoken Bantu language in Angola. Around 3.728 million people in the world has Kimbundu as a language (as of 2024), with its speakers mostly concentrated in the north-west of the country, notably in the Bengo, Luanda, Icolo e Bengo, Cu\n[…]\nThere is a small number of words of Kimbundu  origin, and many of those are indirect and come via Angolan Portuguese.\n[…]\nZumbi (\"zombie\"; is the name of the quilombo leader or chef Zumbi dos Palmares), it comes from Kimbundu nzumbi (\"ghost\", \"spirit\") or even nzambi (\"god\").\n[…]\nSemba, is a traditional Angolan music and type of dance and it is also related to the Brazilian dance style  samba ; it comes from Kimbundu semba (\"belly-bump\").\n[…]\nCafuné (\"caress\", it is usually passing one's fingers softly through someone's hair or some specific parts in the body), comes from Kimbundu kifuné.\n[…]\nBunda (\"buttocks\") it is originated from Kimbundu mbunda.\n[…]\nConjugating the verb to be (kuala; also kukala in Kimbundu) in the present:\n[…]\nConjugating the verb to have (kuala ni; also kukala ni in Kimbundu) in the present :\n[…]\nEmuseum article on Kimbundu\n[…]\nPanAfrican L10n page on Kimbundu Archived 2007-03-14 at the Wayback Machine\n[…]\nKimbundu people"
      }
    ]
  },
  {
    "indice": 24,
    "ancora": {
      "nome": "Catedral (palavra)",
      "descricao": "Palavra para a igreja principal de uma diocese, derivada do grego kathedra, assento"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "As palavras catedral e cadeira vêm da mesma palavra grega. O que toda catedral abriga que explica esse parentesco?",
    "resposta": "O trono do bispo",
    "distratores": [
      "O coro dos monges",
      "Os bancos dos fiéis",
      "O túmulo do fundador"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Cathedral",
      "https://en.wikipedia.org/wiki/Cathedra"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Cathedral",
        "situacao": "ok",
        "texto": "A cathedral is a church that contains the cathedra (Greek for 'seat') of a bishop, thus serving as the central church of a diocese, conference, or episcopate. Churches with the function of \"cathedral\" are usually specific to those Christian denominations with an episcopal hierarchy, such as the Catholic, Eastern Orthodox, Anglican, and some Lutheran churches.\n[…]\nAnd as in the Roman military or civil service, promotion was expected to follow the principle of cursus honorum, rising through the ranks, with the expectation that ideally, a minimum period would be served in each. The female orders of virgin, widow and (female) deacon remained explicitly outside the bishop's familia; and so they did not receive the tonsure and nor did they progress through the cursus honorum.\n[…]\nBishops were at the head of the local church; but not explicitly within the cursus honorum, as appointment was by election from the local clergy and people. The clergy tended to favour appointment of bishops from within the ranks of cathedral presbyters; but local lay choice often tended rather to outsiders, either a spectacular holy man, hermit or ascetic; or otherwise a senior civil servant or diplomat, who might have favourable contacts to exploit at court."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Cathedra",
        "situacao": "ok",
        "texto": "A cathedra is the throne of a bishop, found in the cathedral church of their diocese. The word derives from the Greek καθέδρα (kathédra), meaning \"seat\", especially one used by a bishop or teacher; this term is also the ultimate source of the word \"chair\"."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Catedral",
        "situacao": "ok",
        "texto": "Catedral ou Sé é o templo cristão em que se encontra a sede de um bispo e uma diocese, com seu cabido. Entende-se por catedral a igreja onde se encontra o trono do bispo da diocese. Nas igrejas primitivas, o trono do bispo (cátedra) era colocado na parte de trás da abside, no eixo, como o assento do juiz na antiga basílica, e o altar erguia-se em frente à tribuna, geralmente sobre o túmulo de um m\n[…]\nO termo catedral deriva de \"cátedra\", cadeira de espaldar alto onde se senta um bispo. Em latim eclesiástico é oficialmente denominada ecclesia cathedralis; porém, de acordo ao título dos prelados à frente da catedral, esta pode ser denominada catedral episcopal, metropolitana, patriarcal ou primada. O adjetivo catedral foi ao longo dos tempos assumindo o caráter de substantivo, e é hoje o termo mais comumente utilizado para designar estas igrejas.\n[…]\nAs catedrais eram consideradas a casa principal de Deus (Domus Dei) ou dos santos aos quais eram dedicadas, de onde derivam as palavras italiana Duomo e o germânico Dom. Em alguns lugares da Alemanha ou de influência alemã, como em Estrasburgo (França), a catedral pode ser conhecida como Münster (derivado de Monasterium) por ter sido administrada no passado por monges, como um monastério.\n[…]\nEm português utiliza-se ainda o termo sé catedral — ou apenas \"sé\" — para designar uma catedral, sendo esta designação derivada da palavra \"sede\", como em Santa Sé (Santa Sede). Em catalão existe um termo equivalente, o de seu episcopal.\n[…]\nO termo é usado no protestantismo. Seu uso também é comum em outras denominações, como, por exemplo, nas igrejas luteranas de Escandinávia. Antigas catedrais que eram antes católicas e depois foram transformadas em templos protestantes durante a Reforma, carregam esse nome até os dias atuais.\n[…]\nArquitetura de catedrais e grandes igrejas\n[…]\nCátedra\n[…]\nLista de catedrais/sés portuguesas;\n[…]\nLista de catedrais/sés brasileiras.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 25,
    "ancora": {
      "nome": "Copacabana",
      "descricao": "Bairro da Zona Sul do Rio de Janeiro, famoso pela praia, cujo nome vem de uma devoção trazida da Bolívia"
    },
    "angulo": "conexao",
    "tipo": "multipla",
    "pergunta": "O bairro carioca de Copacabana herdou o nome de uma santa venerada às margens de qual lago dos Andes?",
    "resposta": "Titicaca",
    "distratores": [
      "Poopó",
      "Junín",
      "Llanquihue"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Copacabana",
      "https://en.wikipedia.org/wiki/Copacabana,_Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Copacabana",
        "situacao": "ok",
        "texto": "Copacabana é um bairro nobre situado na Zona Sul do município do Rio de Janeiro, no Brasil. É considerado um dos bairros mais famosos e prestigiados do Brasil e um dos mais conhecidos do mundo. Tem o apelido de Princesinha do Mar e Coração da Zona Sul. Faz limites com os bairros da Lagoa, Ipanema, Botafogo, Leme e Humaitá.\n[…]\nHá várias hipóteses etimológicas para o nome Copacabana. A primeira alega que o termo teria vindo da língua quíchua, falada no antigo Império Inca, significando \"lugar luminoso\", \"praia azul\" ou \"mirante do azul\". Outras fontes apontam o termo como originário da língua aimará falada na Bolívia, significando \"vista do lago\" (kota kahuana). Nesse país, Copacabana é o nome dado a uma cidade situada às margens do Lago Titicaca, fundada sobre um antigo local de culto inca.\n[…]\nNo século XVII, comerciantes peruanos de prata (chamados na época de \"peruleiros\") trouxeram uma réplica dessa imagem para a praia do Rio de Janeiro então chamada de Sacopenapã (nome tupi que significa \"caminho de socós\"). Sobre um rochedo dessa praia, construíram uma capela em homenagem à santa. Tal capela, com o tempo, passou a designar a praia e o bairro e demolida em 1918, para ser erguido, em seu lugar, o atual Forte de Copacabana.\n[…]\nA célebre exposição dos United Buddy Bears realizou-se de maio a fim de julho de 2014 nessa praia carioca, apesar de protestos da FIFA durante toda a Copa do Mundo de futebol. Os ursos puderam ser vistos no famoso calçadão de Copacabana, no bairro do Leme. Contou-se com a presença de mais de um milhão de visitantes. Fizeram parte da exposição mais de 140 esculturas de ursos, cada uma com mais de 2 metros de altura, realizadas por artistas de mais de 140 países, representando 140 nações do mundo.\n[…]\nBairros Cariocas - Diretoria de Informações Geográficas\n[…]\nMapa do bairro no OpenStreetMap"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Copacabana,_Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Copacabana ( KOH-pə-kə-BAN-ə, US also  -⁠BAH-nə; Brazilian Portuguese: [ˌkɔpakaˈbɐnɐ]) is a Brazilian bairro (neighbourhood) located in the South Zone of the city of Rio de Janeiro, Brazil. It is most prominently known for its 4 km (2.5 mile) balneario beach, which is one of the most famous in the world.\n[…]\nAccording to Riotur, the Tourism Secretariat of Rio de Janeiro, as of 2007 there were 63 hotels and 10 hostels in Copacabana.\n[…]\nThe fireworks display in Rio de Janeiro to celebrate New Year's Eve is one of the largest in the world, lasting 15 to 20 minutes. It is estimated that 2 million people go to Copacabana Beach to see the spectacle. The festival also includes a concert that extends throughout the night.\n[…]\nThe celebration has become one of the biggest tourist attractions of Rio de Janeiro, attracting visitors from all over Brazil as well as from different parts of the world, and the city hotels generally stay fully booked. The celebration is broadcast live on major Brazilian radio and television networks, including TV Globo.\n[…]\nAn assessment made during New Year's Eve 1992 highlighted the risks associated with increasing crowd numbers on Copacabana beach after the fireworks display. Since the 1993-94 event, concerts have been held on the beach to retain the public. The result was a success, with egress spaced out over a period of 2 hours without the previous turmoil, although critics claimed that it denied the spirit of the New Year's tradition of a religious festival with fireworks by the sea.\n[…]\nThe following year Rod Stewart beat attendance records. Finally, the Tribute to Tom Jobim - with Gal Costa, Gilberto Gil, Caetano Veloso, Chico Buarque, and Paulinho da Viola - consolidated the shows at the Copacabana Réveillon."
      }
    ]
  },
  {
    "indice": 26,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição fundada no Rio de Janeiro em 1897 para cultivar a língua e a literatura nacionais"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Os imortais da Academia Brasileira de Letras ocupam cadeiras vitalícias. Quantas cadeiras a Academia tem?",
    "resposta": "Quarenta",
    "distratores": [
      "Trinta",
      "Cinquenta",
      "Cem"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
      "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nA Academia Brasileira de Letras agracia personalidades com os seguintes prêmios:\n[…]\nA Academia Brasileira de Letras tem quarenta cadeiras, ocupadas por quarenta membros efetivos perpétuos (no mínimo vinte e cinco devem morar na cidade que sedia a instituição, o Rio de Janeiro), sendo cada novo membro eleito pelos acadêmicos para ocupar uma cadeira vaga devido ao falecimento do último titular. Há ainda vinte membros estrangeiros correspondentes. No quadro atual, o membro mais idoso é Geraldo Holanda Cavalcanti aos 96 anos, enquanto o mais jovem é Ana Maria Gonçalves, com 55 anos.\n[…]\nA primeira mulher eleita para a Academia Brasileira de Letras foi Rachel de Queiroz, em 1977. O regimento da instituição costumava proibir a eleição de mulheres.\n[…]\nNo geral, os críticos da Academia Brasileira de Letras consideram que ela deixou de ser séria, que virou um \"agrupamento de escritores conformistas e políticos poderosos e vaidosos\", e que o jogo político influencia na escolha dos imortais.\n[…]\nO jornalista Fernando Jorge, em \"A  Academia do Fardão e da Confusão: a Academia Brasileira de Letras e os seus 'Imortais' mortais\", critica a eleição de \"personalidades\" para a ABL, ou seja, pessoas influentes na sociedade, mas cuja principal ocupação não era a literatura e que, muitas vezes, produziam materiais apenas para que pudessem ser eleitos, nunca mais voltando a produzir qualquer obra de valor literário.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters",
        "situacao": "ok",
        "texto": "The Brazilian Academy of Letters (Portuguese: Academia Brasileira de Letras, ABL; Portuguese pronunciation: [akadeˈmiɐ bɾaziˈlejɾɐ dʒi ˈletɾɐs] ) is a Brazilian literary non-profit society established at the end of the 19th century. The first president, Machado de Assis, declared its foundation on 15 December 1896, with the by-laws being passed on 28 January 1897. On 20 July 1897, the academy star\n[…]\nThe academy also publishes a literary periodical, the Brazilian Review (Revista Brasileira), with quarterly editions.\n[…]\nBoth the Houaiss and the Aurélio Dictionaries, however, were first compiled by members of the academy Antônio Houaiss and Aurélio Buarque de Holanda Ferreira, respectively. The preparation of an official dictionary of the Portuguese language is a stated goal of the Brazilian Academy of Letters.\n[…]\nAll members go through a solemn session, in which they wear the academy's official garment for the first time. During the ceremony, the new member makes a speech remembering her or his predecessor and all previous members that occupied the chair.\n[…]\nThe ABL, which was a traditionally male institution, elected its first female member on Friday, 4 November 1977 – the novelist Rachel de Queiroz. This groundbreaking election of the novelist opened the path for other female members. The academy currently has six members (15% of its total membership).\n[…]\nThe presidency of the Brazilian Academy of Letters has been held by members of the academy since its first years, beginning with Machado de Assis. The academy's historical list records presidents from 1897 through Merval Pereira, whose presidency began in 2022.\n[…]\nList of members of the Brazilian Academy of Letters\n[…]\nLisbon Academy of Sciences, Class of Letters\n[…]\nGalician Academy of the Portuguese Language\n[…]\nBrazilian Academy of Sciences\n[…]\nBrazilian Academy of Fine Arts\n[…]\nBrazilian Academy of Music\n[…]\nAcadémie Française"
      }
    ]
  },
  {
    "indice": 27,
    "ancora": {
      "nome": "Academia Brasileira de Letras",
      "descricao": "Instituição fundada no Rio de Janeiro em 1897 para cultivar a língua e a literatura nacionais"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A sede da Academia Brasileira de Letras, no Rio, é uma cópia do Petit Trianon, um pequeno palácio francês. Onde fica o original?",
    "resposta": "Versalhes",
    "distratores": [
      "Fontainebleau",
      "Lyon",
      "Marselha"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
      "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Academia_Brasileira_de_Letras",
        "situacao": "ok",
        "texto": "Academia Brasileira de Letras (ABL; ) GCSE • MHSE é uma instituição literária brasileira fundada na cidade do Rio de Janeiro em 20 de julho de 1897 pelos escritores Machado de Assis, Lúcio de Mendonça, Inglês de Sousa, Olavo Bilac, Afonso Celso, Graça Aranha, Medeiros e Albuquerque, Joaquim Nabuco, Teixeira de Melo, Visconde de Taunay e Ruy Barbosa. É composta por quarenta membros efetivos e perpé\n[…]\nA instituição é responsável pela edição de obras de grande valor histórico e literário, e atribui diversos prêmios literários. A Academia Brasileira de Letras remonta ao final do século XIX, quando escritores e intelectuais brasileiros desejaram criar uma academia nacional nos moldes da Academia Francesa.\n[…]\nEm 1923, graças à iniciativa de seu presidente à época, Afrânio Peixoto, e do então embaixador da França, Raymond Conty, o governo francês doou à Academia o prédio do Pavilhão Francês, edificado para a Exposição do Centenário da Independência do Brasil, uma réplica do Petit Trianon de Versalhes, erguido pelo arquiteto Ange-Jacques Gabriel, entre 1762 e 1768. Em 22 de Setembro de 1941, a Academia Brasileira de Letras foi agraciada com a Grã-Cruz da Ordem Militar de Sant'Iago da Espada de Portugal.\n[…]\nA primeira mulher eleita para a Academia Brasileira de Letras foi Rachel de Queiroz, em 1977. O regimento da instituição costumava proibir a eleição de mulheres.\n[…]\nO jornalista Fernando Jorge, em \"A  Academia do Fardão e da Confusão: a Academia Brasileira de Letras e os seus 'Imortais' mortais\", critica a eleição de \"personalidades\" para a ABL, ou seja, pessoas influentes na sociedade, mas cuja principal ocupação não era a literatura e que, muitas vezes, produziam materiais apenas para que pudessem ser eleitos, nunca mais voltando a produzir qualquer obra de valor literário.\n[…]\nMedia relacionados com Academia Brasileira de Letras no Wikimedia Commons"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Academy_of_Letters",
        "situacao": "ok",
        "texto": "The Brazilian Academy of Letters (Portuguese: Academia Brasileira de Letras, ABL; Portuguese pronunciation: [akadeˈmiɐ bɾaziˈlejɾɐ dʒi ˈletɾɐs] ) is a Brazilian literary non-profit society established at the end of the 19th century. The first president, Machado de Assis, declared its foundation on 15 December 1896, with the by-laws being passed on 28 January 1897. On 20 July 1897, the academy star\n[…]\nIn 1923, thanks to the initiative of its president at the time, Afrânio Peixoto and of the then-French ambassador, Raymond Conty, the French government donated the French Pavilion building to the academy. The building had been built for the Independence of Brazil's Centenary International Exposition by the architect Ange-Jacques Gabriel, between 1762 and 1768 and was a replica of the Petit Trianon of Versailles.\n[…]\nThanks to revenues over $ 4 million a year, the academy is financially stable. It owns a skyscraper with 28 floors (Palácio Austregésilo de Athayde) in the centre of Rio, which the academy rents for office space, generating 70% of its current revenue. The rest comes from rental of other buildings, which were inherited from book editor Francisco Alves, in 1917, and from other financial investments. This comfortable situation allows the payment of a \"jeton\" to each academician.\n[…]\nThe academy also publishes a literary periodical, the Brazilian Review (Revista Brasileira), with quarterly editions.\n[…]\nAll members go through a solemn session, in which they wear the academy's official garment for the first time. During the ceremony, the new member makes a speech remembering her or his predecessor and all previous members that occupied the chair.\n[…]\nList of members of the Brazilian Academy of Letters\n[…]\nLisbon Academy of Sciences, Class of Letters\n[…]\nGalician Academy of the Portuguese Language\n[…]\nBrazilian Academy of Sciences\n[…]\nBrazilian Academy of Fine Arts\n[…]\nBrazilian Academy of Music\n[…]\nAcadémie Française"
      }
    ]
  },
  {
    "indice": 28,
    "ancora": {
      "nome": "Escalas curta e longa",
      "descricao": "Os dois sistemas de nomear números grandes, que fazem bilhão valer mil milhões no Brasil e um milhão de milhões em Portugal"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "No Brasil, um bilhão tem nove zeros. Em Portugal, que usa outra escala, um bilião tem quantos zeros?",
    "resposta": "Doze",
    "distratores": [
      "Nove",
      "Dez",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Long_and_short_scales",
      "https://pt.wikipedia.org/wiki/Escalas_curta_e_longa"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Long_and_short_scales",
        "situacao": "ok",
        "texto": "The long and short scales are two powers-of-ten number-naming systems that are consistent with each other for smaller numbers, but are distinct for larger numbers. Much of the world has adopted either the short or long scale. Countries using the long scale include most countries in continental Europe and most that are French-speaking, German-speaking and Spanish-speaking.\n[…]\nThe pre-1974 former British English word billion, post-1961 current French word billion, post-1994 current Italian word bilione, Spanish billón, German Billion, Dutch biljoen, Danish billion, Swedish biljon, Finnish biljoona, Slovenian bilijon, Polish bilion, and European Portuguese word bilião (with a different spelling to the Brazilian Portuguese variant, but in Brazil referring to short scale) all refer to 1012, being long-scale terms.\n[…]\nOn the other hand, the pre-1961 former French word billion, pre-1994 former Italian word bilione, Brazilian Portuguese word bilhão, and Welsh word biliwn all refer to 109, being short scale terms. Each of these words translates to the American English or post-1974 British English word billion (109 in the short scale).\n[…]\nWith the notable exception of Brazil, a short scale country, most Portuguese-language countries and regions use the long scale with 109 = mil milhões or milhar de milhões."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Escalas_curta_e_longa",
        "situacao": "ok",
        "texto": "As escalas curta e longa são dois de vários sistemas usados em todo o mundo para nomenclatura de números grandes. A escala longa é usada em todos os países do mundo de língua portuguesa exceto o Brasil e na maioria dos países da Europa continental e da América Latina. A escala curta é usada no Brasil e na maioria dos países de língua inglesa e árabe. Em todos estes países, embora as denominações s\n[…]\nAlgumas línguas, sobretudo na Ásia Oriental e Meridional, têm sistemas de nomenclatura de números grandes diferentes das escalas longa e curta.\n[…]\nA escala curta corresponde a um sistema de nomenclatura de números superiores a um milhão em que cada novo termo é 1 000 vezes maior que o termo anterior. Por exemplo, bilião ou bilhão é equivalente a mil milhões (109), um trilião ou trilhão é equivalente a mil biliões (1012) e assim em diante.\n[…]\nOs termos escala curta e escala longa foram introduzidos em 1975 pela matemática francesa Geneviève Guitel.\n[…]\nEm números iguais ou superiores a um milhar de milhões (≥ 109), o mesmo valor numérico tem dois nomes diferentes, conforme está expresso na escala longa ou na escala curta. Da mesma forma, ao mesmo nome podem corresponder dois valores numéricos diferentes conforme está a ser usado nas escala curta ou longa.\n[…]\nCada escala tem uma explicação lógica para atribuir o uso de diferentes denominações numéricas e valores dentro dessa escala. A lógica da escala curta tem por base as potências de mil, enquanto que a escala longa tem por base as potências de um milhão. Em ambas as escalas, o prefixo bi- corresponde a \"2\", tri- a \"3\" , etc. No entanto, só na escala longa é que os prefixos para além do milhão correspondem ao expoente real (de 1 000 000).\n[…]\nA escala longa utiliza a regra N, ou seja: 106N = N-ilião, enquanto que a escala curta utiliza a regra n-1, ou seja: 103n = (n-1)-ilião."
      }
    ]
  },
  {
    "indice": 29,
    "ancora": {
      "nome": "Resma",
      "descricao": "Unidade de contagem de folhas de papel, usada nos pacotes vendidos em papelarias"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Nas papelarias, o papel de escritório é vendido em resmas. Quantas folhas tem uma resma?",
    "resposta": "Quinhentas",
    "distratores": [
      "Cem",
      "Duzentas e cinquenta",
      "Mil"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Resma",
      "https://en.wikipedia.org/wiki/Ream_(paper)"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Resma",
        "situacao": "ok",
        "texto": "Resma é uma tradicional unidade de medida.\n[…]\nO termo resma é derivado da palavra árabe رزمة rizima(h) ou razamâ, que significado fardo, em português[carece de fontes]?. Resma é um conjunto formado por quinhentas folhas de papel.\n[…]\nAntigamente uma resma correspondia a 480 folhas de papel, ou 20 \"mãos\" de papel (com 24 folhas cada). Já a resma para impressão era de 516 folhas, provavelmente por causa da quantidade reservada a erros.\n[…]\nEm razão da padronização internacional, o termo \"resma\" passou a se referir a 500 folhas, 20 mãos de papel (com 25 folhas cada). O antigo valor de 480 folhas passou a ser conhecido como resma curta.\n[…]\nA definição atual reflete a prática corrente de comercialização de papel em pacotes de 500 folhas. Embora exista a comercialização em pacotes com diferentes quantidade de folhas, especialmente de 100 folhas, a nomenclatura resma refere-se exclusivamente aos pacotes com 500 folhas. A unidade resma é usualmente empregada na comercialização de papel de vários tamanhos, tipos e cores.\n[…]\nUma árvore produz de quarenta a quarenta e oito resmas de papel A4 (210x297mm), pesando cerca de 2,3 kg cada."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Ream_(paper)",
        "situacao": "inexistente",
        "texto": ""
      }
    ]
  },
  {
    "indice": 30,
    "ancora": {
      "nome": "Lustro",
      "descricao": "Palavra da língua culta para um período de cinco anos, herdada do lustrum romano"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Herdada de uma cerimônia romana de purificação, a palavra lustro designa na língua culta um período de quantos anos?",
    "resposta": "Cinco",
    "distratores": [
      "Três",
      "Dez",
      "Quinze"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Lustrum",
      "https://pt.wiktionary.org/wiki/lustro"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Lustrum",
        "situacao": "ok",
        "texto": "A lūstrum (IPA: [ˈluːs̠t̪rʊ̃ˑ], plural lūstra) was a term for a five-year period in Ancient Rome.\n[…]\nThese censuses were taken at five-year intervals, thus a lūstrum came to refer to the five-year inter-census period. Lustrum (from luo) is a lustration or purification of the whole Roman people performed by one of the censors in the Campus Martius, after the taking of the census was over. As this purification took place only once in five years, the word lūstrum was also used to designate the time between two lustra.\n[…]\nThe first censors were appointed in 443 BC, and from this year down to 294 BC there had, according to Livy (X.47), only been 26 pairs of censors, and only 21 lustra, or general purifications, although if all had been regular, there would have been 30 pairs of censors and 30 lustra. Sometimes the census was not held at all, or at least not by the censors. The census might take place without the lūstrum, and indeed two cases of this kind are recorded, in 459 and 214 BC.\n[…]\nIn these cases, the lūstrum was not performed because of some great calamities that had befallen the republic.\n[…]\nAs the coincidence, however, was not perfect, a month of 24 days was interposed in every eleventh lūstrum. It is highly probable that the recurrence of such a cycle or great year was, from the earliest times, solemnized with sacrifices and purifications, and that King Servius did not introduce them, but merely connected them with his census, and thus set the example for subsequent ages, which however, as we have seen, was not observed with regularity.\n[…]\nLivius.org Lustrum"
      },
      {
        "url": "https://pt.wiktionary.org/wiki/lustro",
        "situacao": "ok",
        "texto": "artigo lustro Não utilize esta predefinição; use a predefinição { { interwiki }}\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=lustro&oldid=2616794 \""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Quinqu%C3%AAnio",
        "situacao": "ok",
        "texto": "Lustro, quinquênio (português brasileiro) ou quinquénio (português europeu) (em latim: Lustrum) é uma medida de tempo que é um período de cinco anos, correspondendo a metade de uma década. Portanto dois lustros representam uma década. Originalmente, correspondia ao período entre os censos romanos.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 31,
    "ancora": {
      "nome": "Sesquicentenário",
      "descricao": "Comemoração dos cento e cinquenta anos de um acontecimento"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Quando se comemora o sesquicentenário de um acontecimento, quantos anos se passaram desde ele?",
    "resposta": "Cento e cinquenta",
    "distratores": [
      "Cinquenta",
      "Cento e vinte e cinco",
      "Cento e setenta e cinco"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/sesquicentenário",
      "https://en.wikipedia.org/wiki/Anniversary"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/sesquicentenário",
        "situacao": "inacessivel",
        "texto": ""
      },
      {
        "url": "https://en.wikipedia.org/wiki/Anniversary",
        "situacao": "ok",
        "texto": "An anniversary is the date on which an event took place or an institution was founded.\n[…]\nIn Latin, it seems that this rule did not apply precisely for 1+1⁄2. While secundus is Latin for \"second\", and bis for \"twice\", these terms are not used such as in sesqui-secundus. Instead sesqui (or ses) is used by itself."
      }
    ]
  },
  {
    "indice": 32,
    "ancora": {
      "nome": "Bodas de diamante",
      "descricao": "Nome tradicional dado a um aniversário de casamento de longa duração"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "Depois das bodas de prata e de ouro, vêm as de diamante. Um casal que comemora bodas de diamante está junto há quantos anos?",
    "resposta": "Sessenta",
    "distratores": [
      "Quarenta",
      "Quarenta e cinco",
      "Cinquenta"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Wedding_anniversary"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Wedding_anniversary",
        "situacao": "ok",
        "texto": "A wedding anniversary is the anniversary of the date that a wedding took place. Couples often mark the occasion by celebrating their relationship, either privately or with a larger party. Special celebrations and gifts are often given for particular anniversary milestones (e.g., 25, 40, 50, 60, or 70 years)."
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Anivers%C3%A1rio_de_casamento",
        "situacao": "ok",
        "texto": "Aniversário de casamento, popularmente designado como \"bodas de\", é a data jubilar em que se celebra a repetição do dia e do mês de um casamento.\n[…]\nAs origens da celebração são germânicas e remontam à idade média. Desde esta altura até finais do século XIX eram celebrados apenas os dois primeiros quartos de século, ou seja, os 25 e 50 anos, as bodas de prata e de ouro. Mais tarde adicionou-se o quarto de século seguinte, as bodas de diamante, aos 75 anos. Nos anos 20 do século XX passaram-se a celebrar popularmente também o primeiro, quinto, décimo, décimo-quinto e vigésimo aniversário.\n[…]\nEm altura indeterminada, provavelmente porque poucos celebravam as bodas de diamante, passaram também a ser celebradas no sexagésimo aniversário.",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 33,
    "ancora": {
      "nome": "Jogo do bicho",
      "descricao": "Loteria ilegal criada no Rio de Janeiro em 1892, em que cada grupo de números corresponde a um animal"
    },
    "angulo": "numero",
    "tipo": "multipla",
    "pergunta": "O jogo do bicho, que inspirou expressões populares como dar zebra, tem quantos animais na sua lista?",
    "resposta": "Vinte e cinco",
    "distratores": [
      "Vinte",
      "Vinte e quatro",
      "Trinta"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
      "https://en.wikipedia.org/wiki/Jogo_do_bicho"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "O jogo do bicho é uma modalidade de loteria ilegal amplamente difundida no Brasil, organizada de maneira informal e não regulamentada no país. Baseado na associação de números a 25 animais, o jogo permite apostas em diferentes combinações numéricas ou em animais específicos. Cada um dos 25 animais tem quatro números correspondentes, e as opções de apostas e premiações variam conforme as combinaçõe\n[…]\nO jogo era acessível e confiável, com pagamentos garantidos para os vencedores, consolidando sua popularidade. Sua atividade, embora ilegal, muitas vezes tolerada pelas autoridades em troca de subornos. Desde sua criminalização, o jogo do bicho também ganhou uma estrutura mais organizada, com banqueiros controlando territórios, gerentes e apontadores.\n[…]\nO jogo do bicho é baseado em um sistema de apostas numéricas, onde cada animal corresponde a uma sequência numérica específica entre 00 e 99. Por exemplo, o leão (16) poderia ser associado aos números de 61 a 64, enquanto o camelo (8) poderia corresponder aos números 29 a 32. Atualmente, a associação é feita com números que vão de 0000 a 9999, distribuídos entre os animais, com o prêmio variando conforme o número apostado.\n[…]\nO jogo do bicho tornou-se parte da cultura popular brasileira de tal forma que, por exemplo, o termo \"zebra\", que significa no esporte profissional um resultado improvável ou surpresa, tem sua origem no fato de que não existe zebra no jogo do bicho, tornando esse termo emblemático para resultados inesperados. Ou também da associação do número 24 com a comunidade LGBT, devido ao fato de o número ser associado ao veado (um termo pejorativo para homossexuais).\n[…]\nA correspondência entre os 25 grupos, os animais e as respectivas dezenas é a seguinte:\n[…]\n«Ao Encontro da Cor - Figurinhas do Jogo do Bicho». Biblioteca Nacional do Brasil. 2024. Consultado em 26 de dezembro de 2024. Cópia arquivada em 22 de fevereiro de 2026"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Jogo_do_bicho",
        "situacao": "ok",
        "texto": "Jogo do bicho (Portuguese pronunciation: [ˈʒogu du ˈbiʃu], \"animal game\") is an illegal gambling game in Brazil, prohibited by federal law since 1946, but nevertheless very popular throughout the country. It is a lottery-type drawing, operated on a regional basis using the daily state lottery draw, by criminals known as bicheiros, banqueiros (\"bankers\"), or contraventores.\n[…]\nDespite its popularity, especially in Rio de Janeiro, it is illegal in 25 of the 26 states of Brazil plus the Federal District, and those involved may be prosecuted. Paraíba is the only state where the game is legal and regulated by the state, even though federal law prohibits gambling. Unlike most state-operated lotteries, in jogo do bicho any amount can be wagered.\n[…]\nDespite its popularity and being tolerated by many authorities, gambling is a misdemeanour in Brazil, according to article 58 of the Criminal Misdemeanours Act (Decree-Law 3,688 of 3 October 1941). The people who exploit it are liable to imprisonment and a fine, and the gamblers are liable to a fine. In addition, Law 9215 of 1946 prohibited most kinds of gambling throughout Brazil. The 1941 decree and 1946 law marked the beginning of the jogo do bicho’s true criminalization.\n[…]\nAnother legacy of Jogo do Bicho is the use of zebra meaning upset. In 1964, before a football match between Portuguesa (RJ) and Vasco da Gama, the manager of Portuguesa, a much weaker team, was asked if he could defeat Vasco. Gentil Cardoso, the manager, commented that beating Vasco would be like drawing a zebra in Jogo do Bicho. As there is no zebra in the game, his sentence expressed an impossibility.\n[…]\nCoelho, Daniel N. (Spring 2018). \"Territorial and Corrosive: The \"jogo do bicho\" (Animal Game) and Organized Crime in Brazil\" (PDF). International Journal on Criminology. 6 (1): 7–38. doi:10.18278/ijc.6.1.1. Retrieved 6 January 2024."
      }
    ]
  },
  {
    "indice": 34,
    "ancora": {
      "nome": "Jeans",
      "descricao": "Calça de brim, geralmente de tecido azul, cujo nome vem da cidade italiana de Gênova"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A palavra jeans vem do nome que os franceses davam a uma cidade italiana de onde vinha o tecido. Que cidade é essa?",
    "resposta": "Gênova",
    "distratores": [
      "Veneza",
      "Nápoles",
      "Milão"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jeans",
      "https://pt.wikipedia.org/wiki/Jeans"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans are a type of trousers made from denim or dungaree cloth. Often the term \"jeans\" refers to a particular style of trousers, called \"blue jeans\", with the addition of copper pocket rivets added by Jacob W. Davis in 1871 and patented by Davis and Levi Strauss on May 20, 1873. Prior to the patent, the term \"blue jeans\" had been long in use for various items of workwear (including trousers, overa\n[…]\nResearch on the trade of jean fabric shows that it emerged in the city of Genoa, Italy, in the 16th century, followed by Nîmes, France, in the 17th century. Genoa's jeans fabric was a fustian textile of \"medium quality and of reasonable cost\", very similar to cotton corduroy for which Genoa was famous, and was \"used for work clothes in general\". The Genoese navy equipped its sailors with jeans, as they needed a fabric that could be worn wet or dry.\n[…]\nWhile the alleged rapist was convicted and sentenced, the Italian Supreme Court of Cassation later overturned the conviction in 1998 because the victim wore tight jeans. It was argued that she must have necessarily had to help her attacker remove her jeans, thus making the act consensual (\"because the victim wore very, very tight jeans, she had to help him remove them... and by removing the jeans... it was no longer rape but consensual sex\").\n[…]\nThe ruling sparked widespread feminist protest. The day after the decision, women in the Italian Parliament protested by wearing jeans and holding placards that read \"Jeans: An Alibi for Rape\". As a sign of support, the California Senate and the California Assembly followed suit. Patricia Giggans, the executive director of the Los Angeles Commission on Assaults Against Women (now Peace Over Violence) soon made Denim Day an annual event. As of 2011 at least 20 U.S.\n[…]\nBaggy jeans\n[…]\nDesigner jeans\n[…]\nDrainpipe jeans\n[…]\nMom jeans\n[…]\nRiveted: The History of Jeans at PBS's American Experience"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Jeans",
        "situacao": "ok",
        "texto": "Jeans ou calças de ganga [PT]  são um tipo de calças feitas de ganga, brim ou denim. Frequentemente, o termo \"jeans\" se refere a um estilo particular de calças, chamado \"jeans azul\", com bolsos rebitados em cobre que foram inventados por Jacob W. Davis em 1871 e patenteados por Jacob W. Davis e Levi Strauss em maio 20, 1873. Antes da patente, o termo \"jeans azul\" era muito usado para várias roupas\n[…]\n\"Jean\" também faz referência a um tipo (histórico) de tecido resistente comumente feito com urdidura de algodão e trama de lã (também conhecido como \"tecido da Virgínia\"). O tecido jeans também pode ser inteiramente de algodão, semelhante ao brim.\n[…]\nPesquisas sobre o comércio do tecido jeans mostram que ele surgiu nas cidades de Gênova, na Itália, e Nîmes, na França. Gênes, palavra francesa para Gênova, pode ser a origem da palavra “jeans”. Em Nîmes, os tecelões tentaram reproduzir o tecido jeans, mas em vez disso desenvolveram um tecido de sarja semelhante que ficou conhecido como brim ou denim, \"de Nîmes\".\n[…]\nO tecido jeans de Gênova era um tecido fustão de \"qualidade média e custo razoável\", muito semelhante ao veludo de algodão pelo qual Gênova era famosa, e era \"usado para roupas de trabalho em geral\". A marinha genovesa equipou seus marinheiros com jeans, pois eles precisavam de um tecido que pudesse ser usado molhado ou seco. O brim de Nîmes era mais grosseiro, considerado de qualidade superior, e era usado \"para peças de vestuário como batas ou macacões\".\n[…]\nNo século XVII, o jeans era um tecido crucial para a classe trabalhadora no norte da Itália. Isso é visto em uma série de pinturas de gênero por volta do século XVII atribuídas a um artista agora apelidado de The Master of Blue Jeans. As dez pinturas retratam cenas empobrecidas com figuras de classe baixa vestindo um tecido que parece jeans. O tecido seria jeans genovês, que era mais barato.\n[…]\nA Historia do Jeans"
      }
    ]
  },
  {
    "indice": 35,
    "ancora": {
      "nome": "Nicotina",
      "descricao": "Substância presente no tabaco, cujo nome homenageia o diplomata francês Jean Nicot"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "A nicotina homenageia Jean Nicot, diplomata francês que conheceu o tabaco no século dezesseis, quando era embaixador em qual país?",
    "resposta": "Portugal",
    "distratores": [
      "Espanha",
      "Brasil",
      "Inglaterra"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Jean_Nicot",
      "https://pt.wikipedia.org/wiki/Nicotina"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Jean_Nicot",
        "situacao": "ok",
        "texto": "Jean Nicot de Villemain (French: [ʒɑ̃ niko də vilmɛ̃]; 1530 – 4 May 1604) was a French diplomat and scholar. He is famous for being the first to bring tobacco to France, including snuff tobacco. Nicotine is named after the tobacco plant Nicotiana tabacum, which in turn is named after Jean Nicot de Villemain, who sent tobacco and seeds to Paris in 1560, presented it to the King Francis II, and who \n[…]\nJean Nicot was born in 1530 in Nîmes, in the south of France. His father was a notary. He was educated in Toulouse and Paris.\n[…]\nAt 29 years old in 1559, he was sent from France to Portugal to negotiate the marriage of six-year-old princess Margaret of Valois to five-year-old King Sebastian of Portugal. Nicot served as the French ambassador in Lisbon, Portugal in 1559 under Henry II, under king Francis II in 1559 - 1560, and from 1560 to 1561 under Charles IX.\n[…]\nAlthough André Thevet argued that he had introduced tobacco to France, the plant was called Nicotina. But nicotine later came to refer specifically to the particular chemical in the plant. The tobacco plant, Nicotiana, also a flowering garden plant, was named after him by Carl Linnaeus, as was nicotine. Nicot described its believed medicinal properties (1559) and sent it as a medicine to the French court.\n[…]\nThe IETF language tags have registered frm-1606nict for \"16th century French as in Jean Nicot, 'Thresor de la langue francoyse', 1606, but also including some French similar to that of Rabelais\".\n[…]\nHe died on May 4, 1604, in Paris, France.\n[…]\nNuno Vila-Santa, Diplomacy and Humanism: ambassador Jean Nicot and the French-Portuguese maritime rivalry (1559-1561), Anuario de Estudios Americanos, 80, 1, 2023, pp. 43-77. [1]\n[…]\nWebsite dedicated to Nicot's Thresor Archived 2010-03-02 at the Wayback Machine (in French)"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Nicotina",
        "situacao": "ok",
        "texto": "Nicotina é um alcaloide encontrado principalmente em plantas da família das solanáceas, notadamente no tabaco; ela também é sintetizada. É usada recreativamente por seus efeitos estimulantes e ansiolíticos. Nas folhas de tabaco, a nicotina constitui cerca de 0,6–3,0% do peso seco e quantidades menores, traços, ocorrem em outras culturas da família Solanaceae, como tomates, batatas e berinjelas.\n[…]\nAcredita-se que a seletividade da nicotina se deva a uma diferença específica de aminoácidos nesses subtipos de receptores. A nicotina é incomum em comparação com a maioria das drogas, pois seu perfil muda de estimulante para sedativo com o aumento das doses, um fenômeno conhecido como \"paradoxo de Nesbitt\", em homenagem ao médico que o descreveu pela primeira vez em 1969. Em doses muito altas, ela atenua a atividade neuronal. A nicotina induz estimulação comportamental e ansiedade em animais.\n[…]\nA nicotina recebeu o nome da planta do tabaco Nicotiana tabacum, que por sua vez recebeu o nome do embaixador francês em Portugal, Jean Nicot de Villemain, que enviou tabaco e sementes para Paris em 1560, apresentados ao rei francês e que promoveu seu uso medicinal. Acreditava-se que fumar protegia contra doenças, particularmente a peste. No entanto, a \"erva sagrada\", o tabaco, chegou à Europa pela primeira vez no início da década de 1530, trazida por exploradores espanhóis.\n[…]\nApós a sua introdução, o tabaco rapidamente ganhou popularidade na Europa pelos seus efeitos estimulantes, impulsionados pelas propriedades viciantes e farmacológicas da nicotina e pela ampla aceitação do tabaco como panaceia.\n[…]\nA nicotina foi frequentemente comparada à cafeína em anúncios na década de 1980 pela indústria do tabaco e, posteriormente, na década de 2010, pela indústria de cigarros eletrônicos, em um esforço para reduzir a estigmatização e a percepção pública dos riscos associados ao uso de nicotina."
      }
    ]
  },
  {
    "indice": 36,
    "ancora": {
      "nome": "KwaZulu-Natal",
      "descricao": "Província do leste da África do Sul, cuja costa foi batizada de Natal por Vasco da Gama"
    },
    "angulo": "lugar",
    "tipo": "multipla",
    "pergunta": "No Natal de 1497, a frota de Vasco da Gama avistou uma costa africana e a batizou com o nome da data. Em que país ela fica hoje?",
    "resposta": "África do Sul",
    "distratores": [
      "Moçambique",
      "Angola",
      "Namíbia"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/KwaZulu-Natal",
      "https://pt.wikipedia.org/wiki/KwaZulu-Natal"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/KwaZulu-Natal",
        "situacao": "ok",
        "texto": "KwaZulu-Natal (, also referred to as KZN) is a province of South Africa that was created in 1994 when the government merged the Zulu bantustan of KwaZulu (\"Place of the Zulu\" in Zulu) and Natal Province.\n[…]\nAs with Eastern Cape, most White South Africans in KwaZulu-Natal are of British descent and less than a quarter of whites in the province are of Boer/Afrikaner descent.\n[…]\nThis makes KwaZulu-Natal, uniquely among South African provinces, a parliamentary constitutional monarchy.\n[…]\nAs of the 2022 census, KwaZulu-Natal had a population of 12,423,907, an increase of 21.0% from the prior census in 2011. It is the second-most populous of South Africa's nine provinces. The median age is 28, an increase of 6 years from 2011.\n[…]\nIn the 2022 census, 85% of the population described themselves as Black African, 9.3% as Indian/Asian, 4.1% as White, and 1.3% as Coloured. A large majority of Black African people in the province are Zulu. KwaZulu-Natal has the largest Indian population in South Africa, with a majority of all Indian South Africans living in the province.\n[…]\nIn the 2022 census, 81.8% of the population reported their first language as Zulu, 14.4% as English, 3.1% as Xhosa, and 1.0% as Afrikaans. KwaZulu-Natal is the only province in which native Zulu-speakers form a majority of the population. The province also has the second-highest proportion of English speakers of South Africa's nine provinces (after the Western Cape).\n[…]\nKwaZulu-Natal has the second largest regional economy in the country after Gauteng. Durban is a rapidly growing urban area and is by most measures the busiest port in Africa. A good railway network links the city to other areas of Southern Africa.\n[…]\nKwaZulu Marlins"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/KwaZulu-Natal",
        "situacao": "ok",
        "texto": "Cuazulo-Natal (KwaZulu-Natal) é uma província da África do Sul, criada em 1994. Tem área de 94 361 quilômetros quadrados e tinha, segundo censo do mesmo ano, 10 267 300 habitantes. Sua capital fica em Pietermaritzburgo.\n[…]\nNo dia de Natal de 1497, o navegador português Vasco da Gama avistou a costa onde hoje se situa a cidade de Durban, batizando a região com o nome de Natal, em português, ou Terra Natalis, em latim.\n[…]\nA colónia do Natal foi alargada por aquisições sucessivas, nomeadamente da Zululândia. Após a vitória britânica na Guerra Anglo-Zulu de 1879, a Zululândia foi formalmente anexada em 1887 e integrada no Natal em 1897. Em 1893, os britânicos concederam autonomia de gestão interna ao Natal. Dois anos depois, foi construída uma linha ferroviária ligando Durban a Pretória, no Transvaal, com o Natal a aderir à união aduaneira dos estados sul-africanos em 1898.\n[…]\nEm 1910, a colónia tornou-se uma província da União Sul-Africana e, em 1961, da República da África do Sul.\n[…]\nNo final da década de 1980 e início dos anos 90, Natal e Cuazulo tornaram-se cenários de violentos confrontos entre partidos políticos rivais que lutavam pelo apoio dos sul-africanos negros, antes do estabelecimento do governo maioritário sob a nova constituição. Milhares de pessoas morreram nestes conflitos que colocaram os apoiantes zulus do Partido da Liberdade Inkatha contra os adeptos do Congresso Nacional Africano.\n[…]\nEm 1994, quando a nova constituição sul-africana aboliu o sistema do apartheid, o bantustão de Cuazulo e a província do Natal uniram-se, constituindo o Cuazulo-Natal.\n[…]\nLista de municípios do Cuazulo-Natal\n[…]\n«South Africa Provinces». Statoids. 2015"
      }
    ]
  },
  {
    "indice": 37,
    "ancora": {
      "nome": "Silhueta",
      "descricao": "Contorno escuro de uma figura sobre fundo claro, palavra derivada do sobrenome de um ministro francês"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "A palavra silhueta vem de Étienne de Silhouette, ministro francês do século dezoito que virou alvo de piadas por impor duras medidas para cortar o quê?",
    "resposta": "Gastos",
    "distratores": [
      "Florestas",
      "Feriados",
      "Cabelos"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Silhouette",
      "https://en.wikipedia.org/wiki/Étienne_de_Silhouette"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Silhouette",
        "situacao": "ok",
        "texto": "A silhouette (English: , French: [silwɛt]) is the image of a person, animal, object or scene represented as a solid shape of a single colour, usually black, with its edges matching the outline of the subject. The interior of a silhouette is featureless, and the silhouette is usually presented on a light background, usually white, or none at all. The silhouette differs from an outline, which depict\n[…]\nThe word silhouette is derived from the name of Étienne de Silhouette, a French finance minister who, in 1759, was forced by France's credit crisis during the Seven Years' War to impose severe economic demands upon the French people, particularly the wealthy. Because of de Silhouette's austere economies, his name became synonymous with anything done or made cheaply and so with these outline portraits.\n[…]\nJackson, Emily (1911). The History of Silhouettes. London: The Connoisseur.\n[…]\nRutherford, Emma (2009). Silhouette: The Art of the Shadow. New York: Rizzoli. ISBN 978-0-8478-3077-0.\n[…]\nSedda, Julia (2009). \"Reading circles, crafts, and flower arranging: everyday items in the silhouettes of Luise Duttenhofer (1776–1829)\". In Goggin, Maureen Daly; Tobin, Beth Fowkes (eds.). Women and Things, 1750–1950: gendered material strategies. Farnham: Ashgate. ISBN 978-0-7546-6550-2.\n[…]\nVigarello, Georges (2016) [2012]. The Silhouette: from the 18th century to the present day. Translated by Dörr, Augusta. London: Bloomsbury Visual Arts. ISBN 9781474244657.\n[…]\nReiniger, Lotte: Homage to the Inventor of the Silhouette Film. Dir. Katja Raganelli. DVD. Milestone Film, 1999.\n[…]\n\"Silhouettes\". Paintings & Drawings. Victoria and Albert Museum. Archived from the original on July 12, 2007. Retrieved August 21, 2007.\n[…]\nProfile Likenesses of the Executive and Legislature of Georgia (Silhouette Book), by William H. Brown, 1855 from the collection of the Georgia Archives Archived 2013-06-28 at the Wayback Machine."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Étienne_de_Silhouette",
        "situacao": "ok",
        "texto": "Étienne de Silhouette (5 July 1709 – 20 January 1767) was a French Ancien Régime Controller-General of Finances under Louis XV.\n[…]\nDe Silhouette forecast a bleak budget for 1760: income of 286 million livres compared to expenses of 503 million livres, including at least 94 million in debt service. In an attempt to restore the kingdom's finances by the English method of taxing the rich and privileged (nobility and church were exempt from taxes in the Ancien Régime), de Silhouette  devised the \"general subvention,\" i.e., taxes on external signs of wealth (doors and windows, farms, luxury goods, servants, profits).\n[…]\nDespite Étienne de Silhouette's short tenure as Treasury Chief, it caused him to become the subject of hostility. His penny-pinching manner led the term à la Silhouette to be applied to things perceived as cheap or austere.\n[…]\nDuring this period an art form of growing popularity was a shadow profile cut from black paper. It provided a simple and inexpensive alternative for those who could not afford more decorative and expensive forms of portraiture, such as painting or sculpture. Those who considered it cheap attached the word \"silhouette\" to it. This art-form is still practiced and named silhouette cutting, or art, to this day.\n[…]\nDespite his name being applied to the silhouette art form, Étienne de Silhouette ironically has no portraits in existence, not even a silhouette. Although several portraits were created depicting Silhouette, all were oil paintings destroyed during the French Revolution.\n[…]\nFrance in the Seven Years' War\n[…]\nList of Ambassadors of France to Great Britain"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Silhueta",
        "situacao": "ok",
        "texto": "Uma silhueta é a imagem de uma pessoa, animal, objeto ou cena representada como uma forma sólida de uma única cor, geralmente preta, com suas bordas correspondendo ao contorno do assunto. O interior de uma silhueta não tem detalhes, e a silhueta é geralmente apresentada em um fundo claro, geralmente branco, ou em nenhum fundo. A silhueta difere de um contorno, que descreve a borda de um objeto em \n[…]\nComo uma silhueta enfatiza o contorno, a palavra também tem sido usada em campos como moda, condicionamento físico e arte conceitual para descrever a forma do corpo de uma pessoa ou a forma criada pelo uso de roupas de um estilo ou período específico.\n[…]\nA palavra silhueta é derivada do nome de Étienne de Silhouette, um ministro das finanças francês que, em 1759, foi forçado pela crise de crédito da França durante a Guerra dos Sete Anos a impor severas exigências econômicas ao povo francês, particularmente aos ricos. Devido às economias austeras de Silhouette, seu nome tornou-se sinônimo de qualquer coisa feita ou produzida de forma barata e, assim, com esses retratos de contorno.\n[…]\nA palavra \"silhueta\", porque implica o contorno de uma forma, tem sido usada tanto na moda quanto no condicionamento físico para descrever a forma do contorno do corpo a partir de um determinado ângulo, conforme alterado pelas roupas no uso da moda, e vestido ou não vestido quando se trata de condicionamento físico, (por exemplo, um uso aplicado aqui pelo Powerhouse Museum).\n[…]\nA publicidade para ambos esses campos insta as pessoas, particularmente as mulheres, a atingir uma aparência específica, seja por espartilho, dieta ou exercício. O termo estava em uso na publicidade no início do século XX. Muitas academias e estúdios de condicionamento físico usam a palavra \"silhueta\" em seu nome ou em sua publicidade.\n[…]\nRutherford, Emma (2009). Silhouette: The Art of the Shadow. New York: Rizzoli. ISBN 978-0-8478-3077-0",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 38,
    "ancora": {
      "nome": "Rio de Janeiro",
      "descricao": "Cidade brasileira à beira da Baía de Guanabara, capital do estado do Rio de Janeiro"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em janeiro de 1502, navegadores portugueses entraram na Baía de Guanabara e batizaram o lugar de Rio de Janeiro. Por que rio?",
    "resposta": "Acharam que era um rio",
    "distratores": [
      "Havia muitas cachoeiras",
      "Homenagem a um navio",
      "Nome dado pelos indígenas"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
      "https://en.wikipedia.org/wiki/Rio_de_Janeiro"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, simplesmente referido como Rio, é a capital do estado brasileiro do Rio de Janeiro. Um dos maiores destinos turísticos internacionais no Brasil, na América Latina e também do Hemisfério Sul, é uma das primeiras cidades do país. É a segunda maior metrópole do Brasil (depois de São Paulo), a sétima maior da América e a décima oitava do mundo. Sua população segundo o censo de 2022 do \n[…]\nA Baía de Guanabara, à margem da qual a cidade se organizou, foi descoberta pelo explorador português Gaspar de Lemos em 1 de janeiro de 1502. Embora se afirme que o nome \"Rio de Janeiro\" tenha sido escolhido em virtude de os portugueses acreditarem tratar-se a baía da foz de um rio, na verdade, à época, não havia qualquer distinção de nomenclatura entre rios, sacos e baías — motivo pelo qual foi o corpo d'água corretamente designado como rio.\n[…]\nO litoral do atual estado do Rio de Janeiro era habitado por índios do tronco linguístico macro-jê há milhares de anos. Por volta do ano 1000, a região foi conquistada por povos de língua tupi procedentes da Amazônia. Um destes povos, os tamoios, também conhecidos como tupinambás, ocupava a região ao redor da Baía de Guanabara no século XVI, quando os portugueses chegaram à região.\n[…]\nA Baía de Guanabara, à margem da qual a cidade foi fundada, foi descoberta pelo explorador português Gaspar de Lemos em 1.º de janeiro de 1502. No entanto, em 1.º de novembro de 1555, os franceses, capitaneados por Nicolas Durand de Villegagnon, apossaram-se da Baía da Guanabara, estabelecendo uma colônia na ilha de Sergipe (atual ilha de Villegagnon). Lá, ergueram o Forte Coligny, enquanto consolidavam alianças com os índios tupinambás locais.\n[…]\nO litoral da baía de Guanabara é recortado, baixo, abarca muitas ilhas (como a do Governador com 29 km²) e, em suas margens, situam-se o centro comercial e os subúrbios industriais.\n[…]\nLista de consulados no Rio de Janeiro"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
        "situacao": "ok",
        "texto": "Rio de Janeiro, also known simply as Rio, is the capital and largest city of the state of Rio de Janeiro. It is the second-largest city in Brazil after São Paulo, and the largest by number of international tourists. It has a population of 6 million in the city proper, and 13 million in its metropolitan area as of 2025. It is also the sixth-most-populous city in the Americas.\n[…]\nEuropeans first encountered Guanabara Bay on 1 January 1502 (hence Rio de Janeiro, \"January River\"), during a Portuguese expedition under explorer Gaspar de Lemos, captain of a ship in Pedro Álvares Cabral's fleet, or under Gonçalo Coelho. Allegedly the Florentine explorer Amerigo Vespucci participated as an observer at the invitation of King Manuel I in the same expedition.\n[…]\nThe city of Rio de Janeiro proper was founded on 1 March 1565 by the Portuguese, led by Estácio de Sá, including Antônio de Mariz. It was named São Sebastião do Rio de Janeiro, in honor of St. Sebastian, the saint who was the namesake and patron of the Portuguese then-monarch Sebastião. Rio de Janeiro was the name of Guanabara Bay.\n[…]\nRio de Janeiro is near the west end of a strip (from Cabo Frio to just east of Ilha Grande) of Brazil's Atlantic coast close to the Tropic of Capricorn where the shoreline is oriented east and west; the city thus faces largely south. It was founded at the entrance to an inlet, Guanabara Bay (Baía de Guanabara), which is marked by a point of land called Sugar Loaf (Pão de Açúcar) – a \"calling card\" of the city.\n[…]\nIt was originally organized in Rio de Janeiro, from where the name comes, and has become a world-level event and, in 2004, had its first edition abroad in Lisbon, Portugal, before Madrid, Spain, and Las Vegas, United States. The festival is considered the eighth best in the world by the specialized site Fling Festival.\n[…]\nRio de Janeiro City Hall website (in Portuguese)"
      }
    ]
  },
  {
    "indice": 39,
    "ancora": {
      "nome": "Torre de Babel",
      "descricao": "Torre narrada no livro do Gênesis, cuja história explica a diversidade das línguas"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Segundo o livro do Gênesis, que castigo Deus impôs aos construtores da Torre de Babel?",
    "resposta": "Confundiu suas línguas",
    "distratores": [
      "Um grande dilúvio",
      "Uma chuva de fogo",
      "Uma longa seca"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Torre_de_Babel",
      "https://en.wikipedia.org/wiki/Tower_of_Babel"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Torre_de_Babel",
        "situacao": "ok",
        "texto": "A narrativa da Torre de Babel (em hebraico: מִגְדַּל בָּבֶל; romaniz.: Migdal Bavel) é o mito fundador que explica a razão de existirem diferentes línguas.\n[…]\nDe acordo com a narrativa, em Gênesis 11:1–9, a humanidade unida nas gerações seguintes ao Dilúvio, falando uma única língua e migrando para o leste, chega à terra de Sinar (שִׁנְעָר). Lá, eles concordam em construir uma cidade e uma torre alta o suficiente para alcançar o céu. Deus, observando a cidade e a torre, confunde sua fala para que não se entendam mais e os espalha pelo mundo.\n[…]\nOutra história, atribuída pelo historiador nativo Fernando de Alva Ixtlilxóchitl [en] (c. 1565–1648) aos antigos toltecas, afirma que depois que os homens se multiplicaram após um grande dilúvio, eles ergueram um zacuali alto ou torre, para se preservarem no evento de um segundo dilúvio. No entanto, suas línguas foram confundidas e eles foram para partes diferentes da terra.\n[…]\nO relato em Gênesis não menciona qualquer destruição da torre. As pessoas cujas línguas são confundidas simplesmente se espalharam dali pela face da Terra e pararam de construir sua cidade. No entanto, em outras fontes, como o Livro dos Jubileus (capítulo 10 v.18-27), Alexandre, o Polímata (frag. 10), Abideno (frags. 5 e 6), Flávio Josefo ( Antiguidades 1.4.3) e o Oráculos Sibilinos (iii. 117-129), Deus vira a torre com um vento forte.\n[…]\nNo Livro de Mórmon, um homem chamado Jared e sua família pedem a Deus que sua linguagem não seja confundida na época da \"grande torre\". Por causa de suas orações, Deus preserva sua linguagem e os conduz ao vale de Ninrode. De lá, eles viajam pelo mar para as Américas."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Tower_of_Babel",
        "situacao": "ok",
        "texto": "The biblical story of the Tower of Babel is an origin myth and parable recorded in Genesis 11 (chapter 11 of the Book of Genesis) meant to explain the existence of different languages and cultures.\n[…]\nThe confusion of tongues (Latin: confusio linguarum) resulting from the construction of the Tower of Babel accounts for the fragmentation of human languages: God was concerned that humans had blasphemed by building the tower to avoid a second flood and so God brought into existence multiple languages, rendering humanity unable to understand each other.\n[…]\nThe Bible does not specifically mention that Nimrod ordered the building of the tower, but many other sources have associated its construction with him. Genesis 11:9 attributes the Hebrew version of the name, Babel, to the verb balal, which means to confuse or confound in Hebrew. The first century Roman-Jewish author Flavius Josephus similarly explained that the name was derived from the Hebrew word Babel (בבל), meaning \"confusion\".\n[…]\nThompson indicates that the table of nations in Genesis 10 and the Tower of Babel story in Genesis 11, are two parallel stories.\n[…]\nNot finding it, they built a tower to reach the sky. An angered God of the Heavens called upon the inhabitants of the sky, who destroyed the tower and scattered its inhabitants. The story was not related to either a flood or the confusion of languages, although Frazer connects its construction and the scattering of the giants with the Tower of Babel.\n[…]\nSeybold, Klaus (1976). \"Der Turmbau zu Babel: Zur Entstehung von Genesis XI 1–9\". Vetus Testamentum (in German).\n[…]\nSkyscraperPage: Tower of Babel, Tower of Babel – Baruch\n[…]\nHERBARIUM Art Project. Anatomy of the Tower of Babel. 2010"
      }
    ]
  },
  {
    "indice": 40,
    "ancora": {
      "nome": "H (letra)",
      "descricao": "Oitava letra do alfabeto latino, que no português não tem som próprio no início das palavras"
    },
    "angulo": "causa",
    "tipo": "multipla",
    "pergunta": "Em palavras como hoje e homem, o agá inicial não tem som nenhum. Por que ele continua sendo escrito?",
    "resposta": "Herança do latim",
    "distratores": [
      "Marca vogal aberta",
      "Indica sílaba tônica",
      "Influência do inglês"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/H",
      "https://en.wikipedia.org/wiki/H"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/H",
        "situacao": "ok",
        "texto": "A letra H (agá) é a oitava letra do alfabeto latino.\n[…]\nÉ a única letra do alfabeto que, em palavras nativas da língua portuguesa, não tem valor fonético, ou seja, não tem som algum.\n[…]\nHistoriadores acreditam que essa letra surgiu inicialmente de um hieróglifo egípcio que representava uma peneira. Mil anos depois os sumérios usariam a mesma letra para designar um som gutural. Os fenícios a chamaram de heth (cerca), porque seu desenho se assemelhava a essa forma. Por volta de 900 a.C. os gregos adotaram a letra e como não pronunciavam a primeira parte desta, a denominaram simplesmente de êta. Seu formato já era bastante semelhante ao H moderno.\n[…]\n\"H\" não é propriamente consoante e nem vogal, porque não tem valor algum de som ou ruído, sendo assim, tornando impossível a existência de fonemas que apontem para ela. Oficialmente, esta letra é apenas classificada como letra diacrítica, pois é, propriamente dita, a segunda letra de um dígrafo. Só tem valor na indicação das palavras: ch (chave), lh (palha), nh (manhã). Conserva-se no início e no fim das interjeições como acento de aspiração: ah!, eh!, ih!, oh!, uh!, hem!, (ou hein!), hum!.\n[…]\nConserva-se nas palavras que exigem ampla etimologia: hoje, homem, hora, haver, etc. Conserva-se nos termos compostos quando os elementos estão ligados por hífen: anti-histamínico, pré-histórico, sobre-humano. Quando os elementos estão justapostos, a letra desaparece: desarmonia, desumano, reaver, lobisomem."
      },
      {
        "url": "https://en.wikipedia.org/wiki/H",
        "situacao": "ok",
        "texto": "H (minuscule: h) is the eighth letter of the Latin alphabet, used in the modern English alphabet, including the alphabets of other Western European languages and others worldwide. Its name in English is aitch (pronounced  , plural aitches), or regionally haitch (pronounced , plural haitches).\n[…]\nThe haitch pronunciation of h has spread in England, being used by approximately 24% of English people born since 1982, and polls continue to show this pronunciation becoming more common among younger native speakers. Despite this increasing number, the pronunciation without the /h/ sound is still considered standard in England, although the pronunciation with /h/ is also attested as a legitimate variant.\n[…]\nIt has been left unchanged in words derived from Greek, such as Theater ('theater') and Thron ('throne'), which continue to be spelled with ⟨th⟩ even after the last German spelling reform."
      }
    ]
  },
  {
    "indice": 41,
    "ancora": {
      "nome": "Macau",
      "descricao": "Região administrativa especial da China, antiga possessão portuguesa"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "Depois de mais de quatro séculos sob administração portuguesa, Macau foi devolvida à China em qual ano?",
    "resposta": "1999",
    "distratores": [
      "1975",
      "1997",
      "2002"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Macau",
      "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Macau",
        "situacao": "ok",
        "texto": "Macau (em chinês tradicional: 澳門; em chinês simplificado: 澳门; pinyin: Àomén, pronunciado: [ɑ̂ʊ̯mə̌n]; em cantonês jyutping: Ou3mun4 ou Ou3mun2 em cantonês Yale: Oumùhn, pronunciado: [ʔōu mǔːn], em hacá: Au4mun2) é uma das regiões administrativas especiais (RAEM) da China desde 20 de dezembro de 1999, sendo a outra Hong Kong.\n[…]\nDesde 20 de dezembro de 1999, o nome oficial de Macau é \"Região Administrativa Especial de Macau da República Popular da China\" (RAEM).\n[…]\nA China rejeitou a transferência imediata da soberania de Macau, tendo apelado para o estabelecimento de negociações que permitissem uma transferência harmoniosa. Com o decorrer das negociações, o estatuto de Macau redefiniu-se para \"território chinês sob administração portuguesa\" e a transferência de soberania de Macau para a República Popular da China foi agendada para a data de 20 de dezembro de 1999, através da Declaração Conjunta Sino-Portuguesa sobre a Questão de Macau.\n[…]\nPor esta razão, toda a legislação existente antes de 1999 foi mantida, excepto uma pequena parte que contrariava a Lei Básica. Do ponto de vista constitucional, o sistema jurídico de Macau caracteriza-se pela existência de um texto com força constitucional na ordem jurídica interna da RAEM, a Lei Básica da Região Administrativa Especial de Macau, promulgada pelo Assembleia Popular Nacional da República Popular da China no ano de 1993.\n[…]\nSegue-se uma lista das cidades-gémeas de Macau:\n[…]\nNo mês de outubro de 2010, as receitas brutas provenientes da área do Jogo bateram um valor recorde até à data, atingindo as 19 mil milhões de patacas (cerca de 2,375 mil milhões de USD ou 1,706 mil milhões de euros). Este valor relativo apenas ao mês de outubro supera os 13 mil milhões de patacas referentes ao ano todo de 1999, último ano em que Macau esteve sob administração portuguesa."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Transfer_of_sovereignty_over_Macau",
        "situacao": "ok",
        "texto": "The handover of Macau from the Portuguese Republic to the People's Republic of China (PRC) officially occurred at midnight on 20 December 1999. This event ended 442 years of Portuguese rule in the former settlement, which began in 1557.\n[…]\nMacau was settled by Portuguese merchants that year during the Ming dynasty era and was subsequently under various degrees of Portuguese rule until 1999. Portugal's involvement in the region was formally recognised by the Qing dynasty in 1749. The Portuguese governor João Maria Ferreira do Amaral, emboldened by British actions in the First Opium War and the Treaty of Nanking, attempted to annex the territory by expelling Qing authorities in 1846, but was assassinated in 1849.\n[…]\nThe colony remained under de jure Portuguese rule until 20 December 1999, when its handover to China took place and became the Macau Special Administrative Region (SAR) of the PRC. The handover marked the end of almost six centuries of the Portuguese Empire since 1415.\n[…]\nHowever, China insisted for a year before 2000 as the Sino-British Joint Liaison Group in Hong Kong would be dissolved in 2000 as envisioned in 1986 (the Joint Liaison Group would ultimately be dissolved in 1999). Eventually, the year 1999 was agreed upon.\n[…]\nThe twelve years between the signing of the \"Sino-Portuguese Declaration\" on 13 April 1987 and the handover on 20 December 1999 were known as \"the transition\".\n[…]\n(17:00 Macau Time/9:00 Lisbon Time) – Lowering of the national flag of Portugal at Praia Grande Palace, during which the Governor receives the flag.\n[…]\nFor Portugal, the handover of Macau to China marked the end of the Portuguese Empire and its decolonisation process and also the end of European imperialism in China and Asia."
      }
    ]
  },
  {
    "indice": 42,
    "ancora": {
      "nome": "Diretório dos Índios",
      "descricao": "Lei portuguesa do século dezoito que regulou os aldeamentos indígenas e impôs o português no Brasil"
    },
    "angulo": "tempo",
    "tipo": "multipla",
    "pergunta": "O Diretório dos Índios, lei que impôs o português nas aldeias e proibiu o uso da língua geral, foi criado em qual ano?",
    "resposta": "1757",
    "distratores": [
      "1700",
      "1789",
      "1808"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Diretório_dos_Índios"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Diretório_dos_Índios",
        "situacao": "ok",
        "texto": "Diretório dos Índios foi uma lei elaborada em 1755, e tornada pública em 18 de agosto 1758, no reinado de D. José I, rei de Portugal, através de seu ministro, o Marquês de Pombal que está relacionado a um reformismo ilustrado  que irá dizer  sobre os aldeamentos indígenas, elevando estes à condição de vilas ou aldeias, administradas por um diretor.\n[…]\nO verbete “Diretório,” no \"Dicionário da História da Colonização Portuguesa no Brasil\", de organização da professora Maria Beatriz Nizza da Silva (1994, p. 261-262), descreve que os dispositivos previstos na legislação não foram cumpridos em razão dos interesses dos diretores, os quais exploravam os autóctones com o intuito de potencializar a parte que lhes cabia em sua produção. Essa exploração teria ocasionado o fracasso da legislação e provocado a desagregação das populações nativas.\n[…]\nDe acordo com o professor Victor Leonardi, foi preciso aguardar quase 50 anos para a determinação de novas normas gerais sobre a administração e o governo dos indígenas após a abolição do Diretório, as quais só viriam a ser homologadas pelo “Regulamento acerca das missões da catequese e civilização dos índios”, no governo imperial de D. Pedro II, em 1845.\n[…]\nManuela Carneiro da Cunha concebeu duas opiniões sobre o período decorrido entre a suspensão do Diretório dos Índios e a promulgação do Regulamento das Missões.\n[…]\nDe um lado, a professora sustenta que esse ínterim foi caracterizado por um “vazio legal”, quando na ausência de uma legislação mais abrangente sobre como governar os nativos, foram concebidos leis e regulamentos regionais para se resolver uma miríade de casos específicos, e, na falta dessa legislação geral, o Diretório ocupou o papel de pedra basilar das decisões locais."
      }
    ]
  },
  {
    "indice": 43,
    "ancora": {
      "nome": "Prêmio Camões",
      "descricao": "Principal prêmio literário da língua portuguesa, concedido anualmente desde 1989"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Em 2019, que cantor e compositor brasileiro, também autor de romances, recebeu o Prêmio Camões?",
    "resposta": "Chico Buarque",
    "distratores": [
      "Caetano Veloso",
      "Gilberto Gil",
      "Paulinho da Viola"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Prémio_Camões",
      "https://en.wikipedia.org/wiki/Camões_Prize"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Prémio_Camões",
        "situacao": "ok",
        "texto": "O Prémio Camões (português europeu) ou Prêmio Camões (português brasileiro) é um prémio literário instituído pelos Governos de Portugal e do Brasil em 1988 com vista a estreitar os laços culturais entre os vários países lusófonos e enriquecer o património literário e cultural da Língua Portuguesa. Atribuído anualmente desde 1989, é o maior galardão outorgado no âmbito da Literatura em Língua Portu\n[…]\nO suposto 'acerto' entre os membros brasileiros do júri e Queiroz repercutiu negativamente na imprensa e na intelectualidade portuguesas. O escritor José Cardoso Pires foi bastante duro com a escolha da romancista brasileira, afirmando que \"a sua obra não avaliza a exigência que caracteriza o prémio\". Queiroz classificou as acusações como caluniosas, enquanto Jorge Amado e Arnaldo Niskier saíram em defesa da escritora. Amado foi agraciado com o Camões no ano seguinte.\n[…]\nNa cerimónia de entrega do prémio de 2017, o escritor Raduan Nassar criticou duramente o governo do então presidente do Brasil, Michel Temer. O autor também fez críticas ao Supremo Tribunal Federal e ao processo de impeachment da ex-presidente Dilma Rousseff. O então ministro da Cultura, Roberto Freire, reagiu atacando a fala de Nassar, de modo que recebeu vaias dos convidados presente.\n[…]\nEm 2019, o artista brasileiro Chico Buarque foi o vencedor do Prémio Camões. Numa atitude muito criticada, o presidente do Brasil, Jair Bolsonaro, sugeriu que não iria assinar o diploma de entrega do prémio. \"A não assinatura do Bolsonaro no diploma é para mim um segundo Prémio Camões”, reagiu Chico Buarque à notícia, segundo a coluna de Ancelmo Gois no jornal O Globo.\n[…]\nPrêmio Goethe\n[…]\nPrêmio Goncourt\n[…]\n«Prémio Camões». na Direção-Geral do Livro, dos Arquivos e das Bibliotecas (DGLAB)\n[…]\nPágina do Prêmio Camões no site Governo do Brasil (em português)\n[…]\nPrémio Luís de Camões – O prémio da literatura mundial em português, no blogue CAMONIANA."
      },
      {
        "url": "https://en.wikipedia.org/wiki/Camões_Prize",
        "situacao": "ok",
        "texto": "The Camões Prize (Portuguese: Prémio Camões, Portuguese pronunciation: [ˈpɾɛmju kaˈmõjʃ]), named after Luís de Camões, is the most prestigious prize for literature in the Portuguese language. The prize was established in 1989 and is supported by the governments of Brazil and Portugal. It is awarded annually to the author of an outstanding body of work written in Portuguese. Winners are selected by\n[…]\nThe monetary award is €100,000, making it among the richest literary prizes in the world. Past winners include Miguel Torga, Vergílio Ferreira, Jorge Amado, José Saramago, Eugénio de Andrade, Sophia de Mello Breyner Andresen, and Chico Buarque.\n[…]\nThe Camões Prize was first introduced by the Additional Protocol to the Cultural Agreement between the Government of the Portuguese Republic and the Government of the Federal Republic of Brazil, dated 7 September 1966, which creates the Camões Prize, signed in Brasilia on 22 June 1988, and approved in Portugal by Decree No. 43/88 of 30 November 1988.\n[…]\nThe Camões Prize is considered the most prestigious literary award in the Portuguese-speaking world. It is awarded for a body of work that contributes to the dissemination and recognition of Portuguese language. It is awarded annually by the Portuguese Direção-Geral do Livro, dos Arquivos e das Biblioteca (National Book, Archives and Libraries Department) and the Brazilian Fundação Biblioteca Nacional (National Library Foundation)."
      }
    ]
  },
  {
    "indice": 44,
    "ancora": {
      "nome": "A sorte está lançada",
      "descricao": "Frase latina alea jacta est, usada para uma decisão sem volta, atribuída a Júlio César"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "Ao atravessar o rio Rubicão com suas tropas, em direção a Roma, que general teria dito a sorte está lançada?",
    "resposta": "Júlio César",
    "distratores": [
      "Pompeu",
      "Marco Antônio",
      "Augusto"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Alea_iacta_est",
      "https://pt.wikipedia.org/wiki/Alea_jacta_est"
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
        "texto": "Alea jacta est (grafia medieval) ou alea iacta est (grafia clássica) significa, em português, \"o dado foi lançado\", mas traduzido comumente como \"a sorte foi lançada\". Frequente e erroneamente traduzido por \"a sorte está lançada\", iacta est é na verdade o perfeito passivo do indicativo de iaceo.\n[…]\nFoi a frase em latim supostamente proferida por Júlio César ao tomar a decisão de cruzar com suas legiões o rio Rubicão, que delimitava a divisa entre a Gália Cisalpina (Gália ao sul dos Alpes, que atualmente corresponde ao território do norte da península Itálica) e o território da Itália.\n[…]\nCésar é dito ter apropriado a frase de Menandro, seu escritor grego de comédias predileto; a frase aparece em Ἀρρηφόρος (transliterada para Arrephoros), como citada em Dipnosofistas (parágrafo oitavo).\n[…]\nTravessia do Rubicão"
      }
    ]
  },
  {
    "indice": 45,
    "ancora": {
      "nome": "Quinze minutos de fama",
      "descricao": "Expressão para uma fama passageira, inspirada numa frase atribuída a um artista pop americano"
    },
    "angulo": "autoria",
    "tipo": "multipla",
    "pergunta": "A expressão quinze minutos de fama vem da frase no futuro, todos serão famosos por quinze minutos. A qual artista ela é atribuída?",
    "resposta": "Andy Warhol",
    "distratores": [
      "Roy Lichtenstein",
      "John Lennon",
      "Salvador Dalí"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/15_minutes_of_fame"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/15_minutes_of_fame",
        "situacao": "ok",
        "texto": "\"15 minutes of fame\" is an expression describing the short-lived media publicity or celebrity of an individual or phenomenon. It was formulated by Andy Warhol, who was quoted by Time magazine in 1967 as saying that one day \"everyone will be famous for 15 minutes\". The phenomenon is often used in reference to figures in the entertainment industry or other areas of popular culture, such as reality t\n[…]\nThe phrase \"15 minutes of fame\" is attributed to Andy Warhol and encapsulates his perspective on celebrity culture. It was first cited in a 1967 Time magazine article titled \"Master of the Monumentalists\" about sculptor Tony Smith, which noted:In the year 1967, the styles and statements of America's brash, brilliant and often infuriating contemporary artists have not only become available to the man in the street, but are virtually unavoidable. And with proliferation comes confusion.\n[…]\nWhole new schools of painting seem to charge through the art scene with the speed of an express train, causing Pop Artist Andy Warhol to predict the day \"when everyone will be famous for 15 minutes.\"In a catalog for a 1968 exhibition of Warhol's work at the Moderna Museet in Stockholm, the quote was rendered as \"In the future everybody will be world famous for fifteen minutes.\"  Although the precise wording appears in various forms, it reflects Warhol's observation that mass media and consumer culture could produce fleeting notoriety for ordinary individuals as well as public figures.\n[…]\nIn the song \"I Can't Read\", released by David Bowie's Tin Machine in their 1989 debut album and re-released by Bowie in 1997 for the soundtrack of the movie The Ice Storm, the phrase is used in direct reference to Andy Warhol: \"Andy, where's my 15 minutes?\"\n[…]\nAndy Warhol's Fifteen Minutes, talk show on MTV\n[…]\nWarhol (fame)\n[…]\nQuotations related to Andy Warhol at Wikiquote"
      },
      {
        "url": "https://pt.wikipedia.org/wiki/15_minutos_de_fama",
        "situacao": "ok",
        "texto": "15 minutos de fama é a visibilidade midiática de curta duração relacionada a um determinado indivíduo ou fenômeno. Tem origem na citação atribuída erroneamente a Andy Warhol : “No futuro, todos serão mundialmente famosos por 15 minutos”. Creditada a outras duas pessoas, o primeiro uso foi no programa de uma exposição de 1968 da obra de Warhol no Moderna Museet em Estocolmo, Suécia.\n[…]\nA expressão frequentemente é usada em referência a figuras da indústria do entretenimento ou de outras áreas da cultura popular, como reality shows e YouTube.\n[…]\nO fotógrafo Nat Finkelstein reivindicou o crédito pela expressão, afirmando que estava fotografando Warhol, em 1966, para um projeto de livro. Segundo esse relato, uma multidão tentou aparecer nas fotografias e Warhol supostamente comentou que todo mundo quer ser famoso, ao que Finkelstein respondeu: \"Sim, por cerca de quinze minutos, Andy.\"\n[…]\nO historiador de arte alemão Benjamin Buchloh sugere que o princípio central da estética de Warhol corresponde diretamente à crença de que a \"hierarquia de assuntos dignos de serem representados algum dia será abolido;\" portanto, qualquer um, e portanto “todo mundo”, pode ser famoso uma vez que essa hierarquia se dissipe, “no futuro”, e por extensão lógica disso, “no futuro, todos serão famosos”, e não apenas aqueles indivíduos dignos de fama.\n[…]\nNa música \"I Can't Read\", lançada por Tin Machine, banda de David Bowie, em seu álbum de estreia, a frase é usada em referência direta a Andy Warhol: \"Andy, onde estão meus 15 minutos?\". O artista britânico Banksy fez uma escultura de uma TV com a frase: \"No futuro, todos serão anônimos por 15 minutos\".\n[…]\nAndy Warhol afirmou:\"Pelé é um dos poucos que contradizem minha teoria: em vez de quinze minutos de fama, ele terá quinze séculos\".",
        "observacao": "artigo equivalente em português, lido pelo pipeline; não é fonte da pergunta"
      }
    ]
  },
  {
    "indice": 46,
    "ancora": {
      "nome": "Arabismos do português",
      "descricao": "Palavras do português herdadas do árabe durante o domínio muçulmano na Península Ibérica"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Qual destas palavras da cozinha portuguesa veio do árabe?",
    "resposta": "Azeite",
    "distratores": [
      "Vinho",
      "Pão",
      "Queijo"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/azeite",
      "https://en.wiktionary.org/wiki/azeite"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/azeite",
        "situacao": "ok",
        "texto": "</span>boilerplate seealso\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"confundir\",\"href\":\"./Predefinição:confundir\"},\"params\":{\"1\":{\"wt\":\"azeiteira\"}},\"i\":0}}]}'>Não confundir com azeiteira .\n[…]\nestar com os azeites : Estar mal-humorado, irritado, colérico.\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=azeite&oldid=3160230 \""
      },
      {
        "url": "https://en.wiktionary.org/wiki/azeite",
        "situacao": "ok",
        "texto": "(This etymology is missing or incomplete. Please add to it, or discuss it at the Etymology scriptorium .)\n[…]\nBal Palazios, Santiago ( 2002 ), “azeite”, in Dizionario breu de a luenga aragonesa , Zaragoza, →ISBN\n[…]\nPortuguese Wikipedia has an article on: azeite\n[…]\nInherited from Old Galician-Portuguese azeite , borrowed from Andalusian Arabic , from Arabic زَيْت ( zayt ) . Compare Galician and Spanish aceite .\n[…]\nRhymes: ( Brazil ) -ejt͡ʃi , ( Portugal ) -ɐjtɨ\n[…]\nazeite   m ( countable and uncountable , plural azeites )\n[…]\n“ azeite ”, in Michaelis Dicionário Brasileiro da Língua Portuguesa (in Portuguese), São Paulo: Editora Melhoramentos, 2015– 2026 , →ISBN\n[…]\n“ azeite ”, in Dicionário Infopédia da Língua Portuguesa (in Portuguese), Porto: Porto Editora, 2003– 2026\n[…]\n“ azeite ”, in Dicionário Priberam da Língua Portuguesa (in Portuguese), Lisbon: Priberam, 2008– 2026\n[…]\n“ azeite ”, in Dicionário Aulete Digital (in Portuguese), Rio de Janeiro: Lexikon Editora Digital, 2008– 2026\n[…]\nRetrieved from \" https://en.wiktionary.org/w/index.php?title=azeite&oldid=92396918 \"\n[…]\nOld Galician-Portuguese terms derived from Arabic\n[…]\nOld Galician-Portuguese terms borrowed from Andalusian Arabic\n[…]\nOld Galician-Portuguese terms derived from Andalusian Arabic\n[…]\nOld Galician-Portuguese terms with IPA pronunciation\n[…]\nPortuguese terms inherited from Old Galician-Portuguese\n[…]\nPortuguese terms derived from Andalusian Arabic\n[…]\nPortuguese terms derived from Old Galician-Portuguese\n[…]\nOld Galician-Portuguese entries with etymon\n[…]\nOld Galician-Portuguese entries with etymology trees\n[…]\nOld Galician-Portuguese entries with etymology texts"
      }
    ]
  },
  {
    "indice": 47,
    "ancora": {
      "nome": "Substantivo coletivo",
      "descricao": "Substantivo que, no singular, designa um conjunto de seres da mesma espécie, como cardume e alcateia"
    },
    "angulo": "composicao",
    "tipo": "multipla",
    "pergunta": "Cardume é o coletivo de peixes e alcateia, o de lobos. A palavra vara é o coletivo de qual animal?",
    "resposta": "Porcos",
    "distratores": [
      "Cavalos",
      "Cabras",
      "Bois"
    ],
    "fonte": [
      "https://pt.wiktionary.org/wiki/vara"
    ],
    "trechos": [
      {
        "url": "https://pt.wiktionary.org/wiki/vara",
        "situacao": "ok",
        "texto": "Os juízes nomeados pelo rei, usavam como insígnia a vara branca, sinal da distinção régia.\n[…]\nconduzido debaixo de vara : conduzido sob mandado judicial.\n[…]\nvara de condão : bastão mágico de fadas e feiticeiros.\n[…]\nvara de pescar : vara utilizada para pescaria.\n[…]\n( Metrologia ) Português</span>\"}]]}'>vara , antiga medida de comprimento\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"vara-de-jessé\"]}}'>vara-de-jessé\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"vara-de-monte\"]}}'>vara-de-monte\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"vara-d'ouro\"]}}'>vara-d'ouro\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"vara fragueira\"]}}'>vara fragueira\n[…]\nGalego</span>\"}]]}' data-mw-i18n='{\"title\":{\"lang\":\"x-page\",\"key\":\"red-link-title\",\"params\":[\"vara-vermelha\"]}}'>vara-vermelha\n[…]\nObtida de \" https://pt.wiktionary.org/w/index.php?title=vara&oldid=3169265 \""
      }
    ]
  },
  {
    "indice": 48,
    "ancora": {
      "nome": "Mesóclise",
      "descricao": "Colocação do pronome oblíquo átono no meio do verbo, nos tempos futuros"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "A mesóclise, que põe o pronome no meio do verbo, como em dar-te-ei, só é possível em quais tempos verbais?",
    "resposta": "Os dois futuros",
    "distratores": [
      "Os dois pretéritos",
      "Presente e imperativo",
      "Subjuntivo e infinitivo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Mesóclise"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Mesóclise",
        "situacao": "ok",
        "texto": "Na sintaxe da língua portuguesa, o termo colocação pronominal diz respeito ao modo como se dispõem os pronomes clíticos (usados, principalmente, como complemento verbal) em relação aos demais elementos de uma oração. Dentre os fatores que determinam a ordem dos pronomes, tem-se a função sintática do pronome na oração, o tempo verbal, a regência do verbo principal, a ocorrência de advérbios e de ou\n[…]\nTodas as conjugações verbais permitem próclise e, com exceção do particípio e dos tempos  futuro do presente [fará, dirá, verá] e futuro do pretérito [faria, diria, veria], permitem também ênclise. Somente os tempos futuro do presente e futuro do pretérito permitem mesóclise.\n[…]\nNunca se usa próclise após pausa/vírgula, ponto e vírgula, dois-pontos, exclamação, interrogação ou reticências\n[…]\nDenomina-se próclise a colocação dos pronomes oblíquos átonos antes do verbo.\n[…]\nNote que uma oração pode iniciar-se a meio de uma frase, por exemplo, depois de uma vírgula, ponto e vírgula, dois-pontos, exclamação, interrogação ou reticências.\n[…]\nNão deve ser usada quando o verbo está no futuro do presente ou no condicional. Nesse caso utiliza‐se a mesóclise.\n[…]\nEm gramática, denomina-se mesóclise a colocação do pronome oblíquo átono no meio do verbo.\n[…]\nUtiliza-se quando o verbo está no futuro do presente ou no futuro do pretérito e não há, antes do verbo, palavra que justifique o uso da próclise. É uma colocação exclusiva da linguagem formal e da modalidade literária, não ocorrendo numa fala espontânea.\n[…]\nA origem da mesóclise se relaciona à formação de uma construção inovadora de futuro analítico (formado por mais de uma palavra), no período do latim vulgar. Essa forma de futuro analítico se compunha do verbo principal no infinitivo e do verbo *avere (habēre no latim clássico) no presente do indicativo. Sendo o futuro analítico uma forma composta, era possível colocar o pronome entre os dois verbos."
      }
    ]
  },
  {
    "indice": 49,
    "ancora": {
      "nome": "Português brasileiro",
      "descricao": "Variedade da língua portuguesa falada no Brasil"
    },
    "angulo": "atributo",
    "tipo": "multipla",
    "pergunta": "Onde um português diz estou a trabalhar, o brasileiro diz estou trabalhando. Que forma verbal o brasileiro prefere nesses casos?",
    "resposta": "Gerúndio",
    "distratores": [
      "Infinitivo",
      "Particípio",
      "Subjuntivo"
    ],
    "fonte": [
      "https://pt.wikipedia.org/wiki/Português_brasileiro",
      "https://en.wikipedia.org/wiki/Brazilian_Portuguese"
    ],
    "trechos": [
      {
        "url": "https://pt.wikipedia.org/wiki/Português_brasileiro",
        "situacao": "ok",
        "texto": "Português brasileiro (abreviado como pt-BR ou simplesmente PB), também conhecido como português do Brasil, é o termo utilizado para classificar a variante da língua portuguesa falada de forma nativa pelos mais de 213 milhões de brasileiros no país, em 2025, e pelos mais de 4 milhões, que vivem fora do Brasil.\n[…]\nAlguns autores, mesmo brasileiros, relatam o que consideram vícios corriqueiros da sintaxe do português brasileiro, como o voceísmo (uso excessivo do pronome degenerado você, advindo de vossa mercê), queísmo (uso excessivo do pronome relativo que como ligação entre orações) e gerundismo (uso excessivo do gerúndio como tempo verbal).\n[…]\nO gerundismo (abuso do gerúndio) é um fenômeno linguístico no Brasil. Exemplos:\n[…]\nA colocação dos pronomes átonos é diferente na fala do Brasil e na de Portugal. O PB é uma variante com forte tendência proclítica, preferindo-se sempre o uso da próclise (pronome antes do verbo). Em algumas situações em que a gramática normativa prescreve a ênclise, o PB informal usa a próclise. A mesóclise é pouco usada em comparação com a próclise.\n[…]\nUm aspecto conservador do PB em relação ao PE é a dominância da construção estar + gerúndio, em lugar da construção estar + a + infinitivo, que se tornou dominante em Portugal. Nas variantes dialetais portuguesas a norte do rio Tejo, o gerúndio perifrástico combinado com verbos como estar e andar, (que dá ideia de ação durativa ou de movimento reiterado) tem vindo a ser substituído pelo infinitivo do verbo antecedido pela preposição a (e. g. estou a fazer em vez de estou fazendo).\n[…]\nNo Brasil este fenômeno também existe, mas é mais raro e aplica-se a um número mais reduzido de contextos gramaticais, em geral, para combater o vício do gerundismo, muito condenado pelos falantes da norma culta.[carece de fontes]?\n[…]\nPortuguês macaense"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Brazilian_Portuguese",
        "situacao": "ok",
        "texto": "Brazilian Portuguese (português brasileiro; [poʁtuˈɡe(j)z bɾaziˈle(j)ɾu]) is the set of varieties of the Portuguese language native to Brazil. It is spoken by nearly all of the 203 million inhabitants of Brazil, and widely across the Brazilian diaspora, consisting of approximately two million Brazilians who have emigrated to other countries.\n[…]\nBrazilian Portuguese seldom has the present continuous construct estar a + infinitive, which, in contrast, has become quite common in European over the last few centuries. BP maintains the Classical Portuguese form of continuous expression, which is made by estar + gerund.\n[…]\nThus, Brazilians will always write ela está dançando (\"she is dancing\"), not ela está a dançar. The same restriction applies to several other uses of the gerund: BP uses ficamos conversando (\"we kept on talking\") and ele trabalha cantando (\"he sings while he works\"), but rarely ficamos a conversar and ele trabalha a cantar as is the case in most varieties of EP.\n[…]\nBP retains the combination a + infinitive for uses that are not related to continued action, such as voltamos a correr (\"we went back to running\"). Some varieties of EP [namely from Alentejo, Algarve, Açores (Azores), and Madeira] also tend to feature estar + gerund, as in Brazil.\n[…]\nIt also can affect verbal paradigms: Portuguese distinguishes falamos \"we speak\" [fɐˈlɐ̃muʃ] from 'falámos' [fɐˈlamuʃ] \"we spoke,\" but in BP, it is written and pronounced falamos [faˈlɐ̃mus] for both.\n[…]\nTheir arguments include the postulate that the Vernacular form simplifies some of the intricacies of standard Portuguese (verbal conjugation, pronoun handling, plural forms, etc.).\n[…]\nAfter independence in 1822, Brazilian idioms with African and Amerindian influences were brought to Portugal by returning Portuguese Brazilians (luso-brasileiros in Portuguese).\n[…]\nUruguayan Portuguese"
      }
    ]
  },
  {
    "indice": 50,
    "ancora": {
      "nome": "Taiwan",
      "descricao": "Ilha do leste da Ásia, a sudeste da China continental, chamada de Formosa pelos navegadores portugueses"
    },
    "angulo": "identidade",
    "tipo": "multipla",
    "pergunta": "No século dezesseis, navegadores portugueses chamaram de Ilha Formosa uma ilha da Ásia, nome usado no Ocidente por muito tempo. Que ilha é essa?",
    "resposta": "Taiwan",
    "distratores": [
      "Sri Lanka",
      "Hainan",
      "Okinawa"
    ],
    "fonte": [
      "https://en.wikipedia.org/wiki/Names_of_Taiwan",
      "https://pt.wikipedia.org/wiki/Taiwan"
    ],
    "trechos": [
      {
        "url": "https://en.wikipedia.org/wiki/Names_of_Taiwan",
        "situacao": "inexistente",
        "texto": ""
      },
      {
        "url": "https://pt.wikipedia.org/wiki/Taiwan",
        "situacao": "ok",
        "texto": "Taiwan (chinês tradicional: 臺灣; chinês simplificado: 台湾; pinyin: Zhōnghuá Mínguó; Wade–Giles: Chung-hua Min-kuo), oficialmente República da China, é um Estado insular localizado na Ásia Oriental, que evoluiu de um regime unipartidário com reconhecimento mundial e jurisdição plena sobre toda a China para uma república com reconhecimento internacional limitado e com competência apenas sobre a ilha F\n[…]\nExistem vários nomes usados para se referir à ilha de Taiwan atualmente, derivados dos diferentes exploradores ou governantes de cada período histórico. O antigo nome Formosa (福爾摩沙) data de 1542, quando os portugueses avistaram a ilha principal de Taiwan e a chamaram de \"Ilha Formosa\". Com o tempo, o nome \"Formosa\" \"substituiu todos os outros na literatura europeia\" e era de uso comum entre anglófonos no início do século XX.\n[…]\nCom o seu rápido desenvolvimento, toda a ilha Formosa, eventualmente, tornou-se conhecida como \"Taiwan\".\n[…]\nAs línguas indígenas de Taiwan apresentam uma diversidade muito maior do que as austronésias restantes juntas, levando linguistas a propor Taiwan como a urheimat da família, a partir do qual os povos marítimos dispersaram-se por todo o Sudeste da Ásia, Pacífico e Índico.\n[…]\nA cidade de Taipei, centro político e administrativo da ilha de Taiwan desde o final do século XIX, foi declarada capital provisória da República da China, enquanto a capital constitucional continuava e segue sendo a cidade continental de Nanjing. Apesar da superioridade militar do bando comunista ao final de 1949, o estalar da Guerra da Coreia levou os Estados Unidos, temerosos de uma expansão comunista na Ásia Oriental, a oferecer apoio militar a Taiwan.\n[…]\nOutros argumentam que os estreitos laços econômicos entre Taiwan e a República Popular da China fariam qualquer intervenção militar da República Popular da China contra Taiwan muito dispendiosa e, portanto, pouco provável.\n[…]\nTaiwan no DMOZ"
      }
    ]
  }
]

---

# MANIFESTO

# Manifesto de Perguntas — Mestre2

> **Versão preliminar 0.83 — 2026-10-27**
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
- **Resposta que é um ano ou uma data: sempre `multipla`.** Quando a resposta é um ano específico ("1969") ou uma data mais detalhada ("15 de novembro de 1889", "2 de fevereiro"), a pergunta é obrigatoriamente de múltipla escolha, com ou sem figura. Os distratores são anos (ou datas) próximos e críveis, no mesmo formato da resposta, nenhum deles também correto. A regra vale só quando **a resposta é o próprio ano ou a data**: século e década ("século dezenove", "década de 1970") e respostas em que o ano identifica outra coisa, como uma edição de Olimpíada ou de Copa ("Londres 2012", "1970, no México"), podem continuar abertas.
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
- No máximo **3 perguntas por âncora**, nunca com o mesmo ângulo (§4).
- **Prefira âncoras centrais e conhecidas**, mesmo que já tenham perguntas, a âncoras novas e obscuras (desde 2026-10-27; antes, "prefira âncoras novas"). O gerador recebe a lista das âncoras e perguntas já existentes no subtema, para aprofundá-las com fatos e ângulos novos, sem repetir fatos.
- **Tentar incluir uma âncora nova a cada 50 perguntas**, tão conhecida quanto as centrais, para manter alguma variedade. Se for difícil achar uma assim, o lote fica sem: uma âncora nova obscura não vale a troca.

**No banco, por subtema:**
- `conexao` + `nome` somam pelo menos **20%**.
- A distribuição por ângulo e por âncora é acompanhada pelo relatório do pipeline, e os lotes seguintes são **encomendados para preencher as lacunas**.
